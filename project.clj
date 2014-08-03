(defproject om-hospital-finder "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2280"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.7.0"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "om-hospital-finder"
              :source-paths ["cljs"]
              :compiler {
                :output-to "static/js/cljs/om_hospital_finder.js"
                :output-dir "static/js/cljs"
                :optimizations :none
                :source-map true}}]})
