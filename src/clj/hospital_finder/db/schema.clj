(ns hospital-finder.db.schema
  (:use [korma.db]))

(def db-spec (sqlite3 {:db "hospitals.db"}))


