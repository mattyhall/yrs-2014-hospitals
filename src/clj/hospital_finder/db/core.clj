(ns hospital-finder.db.core
  (:use korma.core
        [korma.db :only (defdb)])
  (:require [hospital-finder.db.schema :as schema]))

(defdb db schema/db-spec)

(declare place service)

(defentity rating
  (database db)
  (belongs-to place))

(defentity place-services
  (database db)
  (table :place_services)
  (belongs-to place)
  (has-many service))

(defentity service
  (database db)
  (belongs-to place-services))

(defentity patient-safety
  (database db)
  (table :patient_safety)
  (belongs-to place))

(defentity waiting-times
  (database db)
  (table :waiting_times)
  (belongs-to place))

(defentity review
  (database db)
  (belongs-to place))

(defentity place
  (database db)
  (has-one rating)
  (has-one place-services)
  (has-one patient-safety)
  (has-one waiting-times)
  (has-many review))

(defn get-all-places [& flds]
  (select place
    ; select applies the query as the first arguemnt to each of the methods in
    ; it's body. Hence the lambda inside of brackets - select applies the query
    ; to the lambda
    (#(apply fields % flds))))

(defn get-place [id]
  (first (select place
           (with rating)
           (with patient-safety)
           (with waiting-times)
           (with place-services
             (with service
               (where {:value true})))
           (with review)
           (where {:id id})
           (limit 1))))
