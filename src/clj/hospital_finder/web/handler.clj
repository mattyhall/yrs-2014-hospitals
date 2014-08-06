(ns hospital-finder.web.handler
  (:require [compojure.core :refer [defroutes]]
            [hospital-finder.web.routes.home :refer [home-routes]]
            [hospital-finder.web.middleware :refer [load-middleware]]
            [noir.response :refer [redirect]]
            [noir.util.middleware :refer [app-handler]]
            [compojure.route :as route]
            [taoensso.timbre :as timbre]
            [taoensso.timbre.appenders.rotor :as rotor]
            [selmer.parser :as parser]
            [environ.core :refer [env]]
            [cronj.core :as cronj]))

(defroutes app-routes
  (route/resources "/static/")
  (route/not-found "Not Found"))

(defn init
  "init will be called once when
   app is deployed as a servlet on
   an app server such as Tomcat
   put any initialization code here"
  []
  (timbre/set-config!
    [:appenders :rotor]
    {:min-level :info
     :enabled? true
     :async? false ; should be always false for rotor
     :max-message-per-msecs nil
     :fn rotor/appender-fn})

  (timbre/set-config!
    [:shared-appender-config :rotor]
    {:path "hospital_finder.log" :max-size (* 512 1024) :backlog 10})

  (if (env :dev) (parser/cache-off!))
  (timbre/info "hospital-finder.web started successfully"))

(defn destroy
  "destroy will be called when your application
   shuts down, put any clean up code here"
  []
  (timbre/info "hospital-finder.web is shutting down...")
  (timbre/info "shutdown complete!"))

(def app (app-handler
           ;; add your application routes here
           [home-routes app-routes]
           ;; add custom middleware here
           :middleware (load-middleware)
           ;; timeout sessions after 30 minutes
           :session-options {:timeout (* 60 30)
                             :timeout-response (redirect "/")}
           ;; add access rules here
           :access-rules []
           ;; serialize/deserialize the following data formats
           ;; available formats:
           ;; :json :json-kw :yaml :yaml-kw :edn :yaml-in-html
           :formats [:json-kw :edn]))
