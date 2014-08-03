(ns om-hospital-finder.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.net.XhrIo]))

(enable-console-print!)

(def app-state (atom {:map nil, :places []}))

(defn map-view [app owner]
 (reify
   om/IWillMount
   (will-mount [_]
      (let [opts  {:center (google.maps.LatLng. 50.375456 -4.142656) :zoom 10}
            g-map (google.maps.Map. (.getElementById js/document "map-canvas") (clj->js opts))]
        (swap! app-state assoc :map g-map)))

   om/IRender
   (render [_] (dom/div nil nil))))

(defn list-hospitals-view [app owner]
  (reify
    om/IRender
    (render [_]
      (let [places (filter :visible (:places @app-state))]
        (apply dom/div nil (map (fn [place]
          (dom/div #js {:className "hospital-list-item"}
            (dom/a #js {:href (str "/place/" (:id place))} (:name place))
            (dom/br nil nil)
            (str "Average rating: " (:rating place))
            (dom/input #js {:id (str "check-" (:id place))
                            :className "check-compare pull-right"
                            :name (str "place-" (:id place))
                            :value (:id place)
                            :type "checkbox"} nil)))
          places))))))

(om/root map-view
  app-state
  {:target (. js/document (getElementById "map-canvas"))})

(om/root list-hospitals-view
  app-state
  {:target (. js/document (getElementById "hospitals-list"))})

(defn bounds-changed [e]
  (let [g-map (:map @app-state)]
    (doseq [[i place] (map vector (range) (:places @app-state))]
      (let [marker   (:marker place)
            pos      (. marker getPosition)
            visible  (.. g-map getBounds (contains pos))]
      (swap! app-state assoc-in [:places i :visible] visible)))))

(defn places-callback [response]
  (let [v     (js->clj (.getResponseJson (.-target response)) :keywordize-keys true)
        g-map (:map @app-state)]
    (doseq [place v]
      (let [info   (google.maps.InfoWindow. #js {:content (:name place)})
            marker (google.maps.Marker. #js
                                        {:position (google.maps.LatLng.
                                                    (:lat place) (:lng place))
                                         :map g-map})]
	(swap! app-state update-in [:places] #(conj % (-> place
                                                          (assoc :marker marker)
                                                          (assoc :visible true))))))
    (google.maps.event.addListener g-map "bounds_changed" bounds-changed)
    (bounds-changed)))

(.send goog.net.XhrIo "/getplaces" places-callback)
