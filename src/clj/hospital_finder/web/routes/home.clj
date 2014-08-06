(ns hospital-finder.web.routes.home
  (:require [compojure.core :refer :all]
            [hospital-finder.web.layout :as layout]))

(defn home-page []
  (layout/render
    "index.html"))

(defroutes home-routes
  (GET "/" [] (home-page)))
