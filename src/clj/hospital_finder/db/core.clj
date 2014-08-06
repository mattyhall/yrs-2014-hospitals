(ns hospital-finder.db.core
  (:use korma.core
        [korma.db :only (defdb)])
  (:require [hospital-finder.db.schema :as schema]))

(defdb db schema/db-spec)

(defentity place
  (database db))

(defn get-all-places [& flds]
  (select place
    ; select applies the query as the first arguemnt to each of the methods in
    ; it's body. Hence the lambda inside of brackets - select applies the query
    ; to the lambda
    (#(apply fields % flds))))
