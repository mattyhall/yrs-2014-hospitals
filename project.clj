(defproject hospital-finder "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

    :ring {:handler hospital-finder.web.handler/app,
         :init hospital-finder.web.handler/init,
         :destroy hospital-finder.web.handler/destroy}

  :ragtime {:migrations ragtime.sql.files/migrations,
            :database "jdbc:sqlite3://hospitals.db"}

  :plugins [[lein-ring "0.8.10"]
            [lein-environ "0.5.0"]
            [ragtime/ragtime.lein "0.3.6"]
            [lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :profiles {:uberjar {:aot :all},
             :production {:ring {:open-browser? false, :stacktraces? false, :auto-reload? false}},
             :dev {:dependencies [[ring-mock "0.1.5"]
                                  [ring/ring-devel "1.3.0"]
                                  [pjstadig/humane-test-output "0.6.0"]],
             :injections [(require 'pjstadig.humane-test-output)
                          (pjstadig.humane-test-output/activate!)],
             :env {:dev true}}}

  :jvm-opts ["-server"]

  :dependencies [[selmer "0.6.9"]
                 [log4j "1.2.17"
                   :exclusions [javax.mail/mail
                                javax.jms/jms
                                com.sun.jdmk/jmxtools
                                com.sun.jmx/jmxri]]
                 [com.taoensso/timbre "3.2.1"]
                 [markdown-clj "0.9.47"]
                 [noir-exception "0.2.2"]
                 [im.chit/cronj "1.0.1"]
                 [environ "0.5.0"]
                 [korma "0.3.3"]
                 [org.clojure/clojure "1.6.0"]
                 [ring-server "0.3.1"]
                 [org.xerial/sqlite-jdbc "3.7.15-M1"]
                 [com.taoensso/tower "2.0.2"]
                 [ragtime "0.3.6"]
                 [lib-noir "0.8.4"]
                 [org.clojure/clojurescript "0.0-2280"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.7.0"]]

  :repl-options {:init-ns hospital-finder.web.repl}
  :min-lein-version "2.0.0"

  :source-paths ["src/clj"]

  :cljsbuild {
    :builds [{:id "hospital-finder"
              :source-paths ["src/cljs"]
              :compiler {
                :output-to "resources/public/js/cljs/hospital_finder.js"
                :output-dir "resources/public/js/cljs"
                :optimizations :none
                :source-map true}}]})
