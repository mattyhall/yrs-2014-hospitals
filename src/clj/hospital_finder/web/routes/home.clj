(ns hospital-finder.web.routes.home
  (:require [compojure.core :refer :all]
            [hospital-finder.web.layout :as layout])
  (:use [hospital-finder.db.core]
        [noir.response :exlude [empty]]))

(defn home-page []
  (layout/render
    "index.html"))

(defn get-places-page []
  (let [places (get-all-places :id :name :lat :lng)]
    (json places)))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/getplaces" [] (get-places-page)))
