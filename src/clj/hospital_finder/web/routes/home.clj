(ns hospital-finder.web.routes.home
  (:require [compojure.core :refer :all]
            [hospital-finder.web.layout :as layout]
            [taoensso.timbre :as timbre]
            [org.httpkit.client :as client]
            [clojure.data.json :as j])
  (:use [hospital-finder.db.core]
        [noir.response :exclude [empty]]))

(defn home-page []
  (layout/render "index.html"))

(defn get-places-page []
  (let [places (get-all-places :id :name :lat :lng)]
    (json places)))

(defn place-page [id]
  (let [place (get-place id)]
    (layout/render "place.html" place)))

(defn parse-compare-form [form-params]
  (vec (for [[k v] form-params]
         (when (.startsWith k "place")
           (Integer/parseInt v)))))

(defn number-of-services [place]
  (assoc place :number_of_services (count (:service place))))

(defn compare-page [request]
  (let [ids     (parse-compare-form (:form-params request))
        places  (apply get-places ids)
        headers ["Cleanliness (/5)", "Staff worked well (/5)", "Dignity and respect (/5)",
                 "Involved with decisions (/5)", "Number of services", "Infection control",
                 "Checking for blood clots", "Staff rating", "Safe staffing (%)",
                 "Average service waiting time (weeks)", "Average time to treatment in A+E (minutes)",
                 "Average time to assessment in A+E after an emergency (minutes)",
                 "Average total time in A+E (minutes)"]]
    (layout/render "compare.html" {:places (map number-of-services places)
                                   :headers headers})))

(defn get-json [url params]
  (j/read-str (:body @(client/get url {:as :text :query-params params})) :key-fn keyword))

(defn search-page [q]
  (let [geo      (get-json "http://api.geonames.org/search"
                   {:q q :username "mattyhall" :type "json" :country "GB"})
        pc       (get-json "http://uk-postcodes.com/postcode/search"
                   {:q q :format "json"})
        place    (get-place-by-name q)
        geo-cond (and (contains? geo :geonames) (> (count (:geonames geo)) 0))]
    (json
      (cond
        geo-cond                    (-> (get-in geo [:geonames 0])
                                        (assoc :status "ok"))
        place                       place
        (not (contains? pc :error)) (-> (get pc :geo)
                                        (assoc :status "ok"))
        :else                       {:status "error"}))))


(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/placelocation" [q] (search-page q))
  (GET "/getplaces" [] (get-places-page))
  (GET "/place/:id" [id] (place-page id))
  (POST "/compare" request (compare-page request)))