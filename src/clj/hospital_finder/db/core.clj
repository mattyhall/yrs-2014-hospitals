(ns hospital-finder.db.core
  (:use korma.core
        [korma.db :only (defdb)])
  (:require [hospital-finder.db.schema :as schema]))

(defdb db schema/db-spec)

(defentity place
  (database db))
