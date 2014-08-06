(ns hospital-finder.web.routes.home
  (:require [compojure.core :refer :all]
            [hospital-finder.web.layout :as layout]
            [taoensso.timbre :as timbre])
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

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/getplaces" [] (get-places-page))
  (GET "/place/:id" [id] (place-page id)))
