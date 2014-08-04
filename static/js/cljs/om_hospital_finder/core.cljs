(ns om-hospital-finder.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.net.XhrIo]
            [clojure.string]))

(enable-console-print!)

(def app-state (atom {:map nil, :places [] :errors []}))



(defn errors-view [app owner]
  (reify
    om/IRender
    (render [_]
      (apply dom/div nil (map #(dom/div #js {:className "alert alert-danger"} %) (:errors @app-state))))))

(om/root errors-view
  app-state
  {:target (. js/document (getElementById "errors"))})



(defn map-view [app owner]
 (reify
   om/IWillMount
   (will-mount [_]
      (let [opts  {:center (google.maps.LatLng. 50.375456 -4.142656) :zoom 10}
            g-map (google.maps.Map. (.getElementById js/document "map-canvas") (clj->js opts))]
        (swap! app-state assoc :map g-map)))

   om/IRender
   (render [_] (dom/div nil nil))))

(om/root map-view
  app-state
  {:target (. js/document (getElementById "map-canvas"))})



(defn hospital-item-view [place owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "hospital-list-item"}
        (dom/a #js {:href (str "/place/" (:id place))} (:name place))
        (dom/br nil nil)
        (str "Average rating: " (:rating place))
        (dom/input #js {:id (str "check-" (:id place))
                        :className "check-compare pull-right"
                        :name (str "place-" (:id place))
                        :onClick #(om/transact! place [:checked] not)
                        :value (:id place)
                        :checked (:checked place)
                        :type "checkbox"} nil)))))

(defn compare-form-submit []
  (let [selected (count (filter :checked (:places @app-state)))]
    (when (<= selected 1)
      (do
        (swap! app-state assoc :errors ["Please select two or more places to compare"])
        false))))

(defn list-hospitals-view [app owner]
  (reify
    om/IRender
    (render [_]
      (let [places (filter :visible (:places app))]
        (dom/form #js {:id "compare-form" :action "/compare" :method "post"
                       :onSubmit #(compare-form-submit)}
          (apply dom/div #js {:id "hospitals-list"} (om/build-all hospital-item-view places))
          (dom/button #js {:className "btn btn-default navbar-btn submitbutton"} "Compare"))))))

(om/root list-hospitals-view
  app-state
  {:target (. js/document (getElementById "hospitals-list-div"))})



(defn search-request-callback [response]
  (let [res (js->clj (.getResponseJson (.-target response)) :keywordize-keys true)]
    (if (= (:status res) "ok")
      (do
        (let [g-map  (:map @app-state)
              latlng (google.maps.LatLng. (:lat res) (:lng res))]
          (.panTo g-map latlng)
          (.setZoom g-map 12)))
      (swap! app-state update-in [:errors] (fn [_] ["No results found"])))))

(defn search-callback [owner]
  (if (clojure.string/blank? (om/get-state owner :query))
    (swap! app-state update-in [:errors] (fn [_] ["Please enter a valid search"]))
    (.send goog.net.XhrIo (str "/placelocation?q=" (om/get-state owner :query)) search-request-callback)))

(defn search-view [app owner]
  (reify
    om/IInitState
    (init-state [_] {:query ""})
    om/IRenderState
    (render-state [_ state]
      (dom/div nil
        (dom/input #js {:id "seach" :type "text" :className "col-md-11 tftextinput"
                       :name "q" :maxLength 240 :value (:query state)
                       :placeholder "Please enter a location or a hospital"
                       :onChange #(om/set-state! owner :query (.. % -target -value))
                       :onKeyUp #(if (= (.-keyCode %) 13) (search-callback owner))} nil)
        (dom/input #js {:type "submit" :value "Search" :className "tfbutton"
                        :id "search-btn" :onClick #(search-callback owner)})))))

(om/root search-view
  app-state
  {:target (. js/document (getElementById "tfnewsearch"))})



(defn bounds-changed []
  (let [g-map (:map @app-state)]
    (doseq [[i place] (map vector (range) (:places @app-state))]
      (let [marker   (:marker place)
            pos      (. marker getPosition)
            visible  (.. g-map getBounds (contains pos))]
        (swap! app-state assoc-in [:places i :visible] visible)
        (when (not visible)
          (swap! app-state assoc-in [:places i :checked] false))))))

(defn places-callback [response]
  (let [v     (js->clj (.getResponseJson (.-target response)) :keywordize-keys true)
        g-map (:map @app-state)]
    (doseq [place v]
        (let [info  (google.maps.InfoWindow. #js {:content (:name place)})
             marker (google.maps.Marker. #js
                                        {:position (google.maps.LatLng.
                                                    (:lat place) (:lng place))
                                         :map g-map})]
	      (swap! app-state update-in [:places] #(conj % (-> place
                                                          (assoc :marker marker)
                                                          (assoc :visible true)
                                                          (assoc :checked false))))))
    (google.maps.event.addListener g-map "bounds_changed" bounds-changed)
    (bounds-changed)))

(.send goog.net.XhrIo "/getplaces" places-callback)
