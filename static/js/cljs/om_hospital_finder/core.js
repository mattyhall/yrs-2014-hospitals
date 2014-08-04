// Compiled by ClojureScript 0.0-2280
goog.provide('om_hospital_finder.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
om_hospital_finder.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"map","map",1371690461),null,new cljs.core.Keyword(null,"places","places",1043491706),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY], null));
om_hospital_finder.core.errors_view = (function errors_view(app,owner){if(typeof om_hospital_finder.core.t7976 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t7976 = (function (owner,app,errors_view,meta7977){
this.owner = owner;
this.app = app;
this.errors_view = errors_view;
this.meta7977 = meta7977;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t7976.cljs$lang$type = true;
om_hospital_finder.core.t7976.cljs$lang$ctorStr = "om-hospital-finder.core/t7976";
om_hospital_finder.core.t7976.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t7976");
});
om_hospital_finder.core.t7976.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t7976.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$1){
return (function (p1__7972_SHARP_){return React.DOM.div({"className": "alert alert-danger"},p1__7972_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state))));
});
om_hospital_finder.core.t7976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7978){var self__ = this;
var _7978__$1 = this;return self__.meta7977;
});
om_hospital_finder.core.t7976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7978,meta7977__$1){var self__ = this;
var _7978__$1 = this;return (new om_hospital_finder.core.t7976(self__.owner,self__.app,self__.errors_view,meta7977__$1));
});
om_hospital_finder.core.__GT_t7976 = (function __GT_t7976(owner__$1,app__$1,errors_view__$1,meta7977){return (new om_hospital_finder.core.t7976(owner__$1,app__$1,errors_view__$1,meta7977));
});
}
return (new om_hospital_finder.core.t7976(owner,app,errors_view,null));
});
om_hospital_finder.core.map_view = (function map_view(app,owner){if(typeof om_hospital_finder.core.t7982 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t7982 = (function (owner,app,map_view,meta7983){
this.owner = owner;
this.app = app;
this.map_view = map_view;
this.meta7983 = meta7983;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t7982.cljs$lang$type = true;
om_hospital_finder.core.t7982.cljs$lang$ctorStr = "om-hospital-finder.core/t7982";
om_hospital_finder.core.t7982.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t7982");
});
om_hospital_finder.core.t7982.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t7982.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,null);
});
om_hospital_finder.core.t7982.prototype.om$core$IWillMount$ = true;
om_hospital_finder.core.t7982.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),(new google.maps.LatLng(50.375456,-4.142656)),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(10)], null);var g_map = (new google.maps.Map(document.getElementById("map-canvas"),cljs.core.clj__GT_js.call(null,opts)));return cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"map","map",1371690461),g_map);
});
om_hospital_finder.core.t7982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7984){var self__ = this;
var _7984__$1 = this;return self__.meta7983;
});
om_hospital_finder.core.t7982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7984,meta7983__$1){var self__ = this;
var _7984__$1 = this;return (new om_hospital_finder.core.t7982(self__.owner,self__.app,self__.map_view,meta7983__$1));
});
om_hospital_finder.core.__GT_t7982 = (function __GT_t7982(owner__$1,app__$1,map_view__$1,meta7983){return (new om_hospital_finder.core.t7982(owner__$1,app__$1,map_view__$1,meta7983));
});
}
return (new om_hospital_finder.core.t7982(owner,app,map_view,null));
});
om_hospital_finder.core.list_hospitals_view = (function list_hospitals_view(app,owner){if(typeof om_hospital_finder.core.t7988 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t7988 = (function (owner,app,list_hospitals_view,meta7989){
this.owner = owner;
this.app = app;
this.list_hospitals_view = list_hospitals_view;
this.meta7989 = meta7989;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t7988.cljs$lang$type = true;
om_hospital_finder.core.t7988.cljs$lang$ctorStr = "om-hospital-finder.core/t7988";
om_hospital_finder.core.t7988.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t7988");
});
om_hospital_finder.core.t7988.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t7988.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var places = cljs.core.filter.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.get.call(null,self__.app,new cljs.core.Keyword(null,"places","places",1043491706)));return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (places,___$1){
return (function (place){return React.DOM.div({"className": "hospital-list-item"},React.DOM.a({"href": ("/place/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(place)))},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place)),React.DOM.br(null,null),("Average rating: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(place))),om.dom.input.call(null,{"type": "checkbox", "checked": new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(place), "value": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(place), "onClick": ((function (places,___$1){
return (function (){return om.core.transact_BANG_.call(null,place,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checked","checked",-50955819)], null),cljs.core.not);
});})(places,___$1))
, "name": ("place-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(place))), "className": "check-compare pull-right", "id": ("check-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(place)))},null));
});})(places,___$1))
,places));
});
om_hospital_finder.core.t7988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7990){var self__ = this;
var _7990__$1 = this;return self__.meta7989;
});
om_hospital_finder.core.t7988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7990,meta7989__$1){var self__ = this;
var _7990__$1 = this;return (new om_hospital_finder.core.t7988(self__.owner,self__.app,self__.list_hospitals_view,meta7989__$1));
});
om_hospital_finder.core.__GT_t7988 = (function __GT_t7988(owner__$1,app__$1,list_hospitals_view__$1,meta7989){return (new om_hospital_finder.core.t7988(owner__$1,app__$1,list_hospitals_view__$1,meta7989));
});
}
return (new om_hospital_finder.core.t7988(owner,app,list_hospitals_view,null));
});
om_hospital_finder.core.search_view = (function search_view(app,owner){if(typeof om_hospital_finder.core.t7996 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t7996 = (function (owner,app,search_view,meta7997){
this.owner = owner;
this.app = app;
this.search_view = search_view;
this.meta7997 = meta7997;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t7996.cljs$lang$type = true;
om_hospital_finder.core.t7996.cljs$lang$ctorStr = "om-hospital-finder.core/t7996";
om_hospital_finder.core.t7996.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t7996");
});
om_hospital_finder.core.t7996.prototype.om$core$IRenderState$ = true;
om_hospital_finder.core.t7996.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__7991_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"query","query",-1288509510),p1__7991_SHARP_.target.value);
});})(___$1))
, "maxLength": (240), "id": "seach", "onKeyUp": ((function (___$1){
return (function (p1__7992_SHARP_){if(cljs.core._EQ_.call(null,p1__7992_SHARP_.keyCode,(13)))
{return om_hospital_finder.core.search_callback.call(null,self__.owner);
} else
{return null;
}
});})(___$1))
, "className": "col-md-11 tftextinput", "type": "text", "value": new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(state), "name": "q", "placeholder": "Please enter a location or a hospital"},null),om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (){return om_hospital_finder.core.search_callback.call(null,self__.owner);
});})(___$1))
, "id": "search-btn", "className": "tfbutton", "value": "Search", "type": "submit"}));
});
om_hospital_finder.core.t7996.prototype.om$core$IInitState$ = true;
om_hospital_finder.core.t7996.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),""], null);
});
om_hospital_finder.core.t7996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7998){var self__ = this;
var _7998__$1 = this;return self__.meta7997;
});
om_hospital_finder.core.t7996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7998,meta7997__$1){var self__ = this;
var _7998__$1 = this;return (new om_hospital_finder.core.t7996(self__.owner,self__.app,self__.search_view,meta7997__$1));
});
om_hospital_finder.core.__GT_t7996 = (function __GT_t7996(owner__$1,app__$1,search_view__$1,meta7997){return (new om_hospital_finder.core.t7996(owner__$1,app__$1,search_view__$1,meta7997));
});
}
return (new om_hospital_finder.core.t7996(owner,app,search_view,null));
});
om.core.root.call(null,om_hospital_finder.core.map_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("map-canvas")], null));
om.core.root.call(null,om_hospital_finder.core.list_hospitals_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("hospitals-list")], null));
om.core.root.call(null,om_hospital_finder.core.search_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("tfnewsearch")], null));
om.core.root.call(null,om_hospital_finder.core.errors_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("errors")], null));
om_hospital_finder.core.bounds_changed = (function bounds_changed(){var g_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state));var seq__8005 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state))));var chunk__8006 = null;var count__8007 = (0);var i__8008 = (0);while(true){
if((i__8008 < count__8007))
{var vec__8009 = cljs.core._nth.call(null,chunk__8006,i__8008);var i = cljs.core.nth.call(null,vec__8009,(0),null);var place = cljs.core.nth.call(null,vec__8009,(1),null);var marker_8011 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(place);var pos_8012 = marker_8011.getPosition();var visible_8013 = g_map.getBounds().contains(pos_8012);cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),visible_8013);
if(cljs.core.not.call(null,visible_8013))
{cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"checked","checked",-50955819)], null),false);
} else
{}
{
var G__8014 = seq__8005;
var G__8015 = chunk__8006;
var G__8016 = count__8007;
var G__8017 = (i__8008 + (1));
seq__8005 = G__8014;
chunk__8006 = G__8015;
count__8007 = G__8016;
i__8008 = G__8017;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8005);if(temp__4126__auto__)
{var seq__8005__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8005__$1))
{var c__4300__auto__ = cljs.core.chunk_first.call(null,seq__8005__$1);{
var G__8018 = cljs.core.chunk_rest.call(null,seq__8005__$1);
var G__8019 = c__4300__auto__;
var G__8020 = cljs.core.count.call(null,c__4300__auto__);
var G__8021 = (0);
seq__8005 = G__8018;
chunk__8006 = G__8019;
count__8007 = G__8020;
i__8008 = G__8021;
continue;
}
} else
{var vec__8010 = cljs.core.first.call(null,seq__8005__$1);var i = cljs.core.nth.call(null,vec__8010,(0),null);var place = cljs.core.nth.call(null,vec__8010,(1),null);var marker_8022 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(place);var pos_8023 = marker_8022.getPosition();var visible_8024 = g_map.getBounds().contains(pos_8023);cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),visible_8024);
if(cljs.core.not.call(null,visible_8024))
{cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"checked","checked",-50955819)], null),false);
} else
{}
{
var G__8025 = cljs.core.next.call(null,seq__8005__$1);
var G__8026 = null;
var G__8027 = (0);
var G__8028 = (0);
seq__8005 = G__8025;
chunk__8006 = G__8026;
count__8007 = G__8027;
i__8008 = G__8028;
continue;
}
}
} else
{return null;
}
}
break;
}
});
om_hospital_finder.core.places_callback = (function places_callback(response){var v = cljs.core.js__GT_clj.call(null,response.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);var g_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state));var seq__8034_8038 = cljs.core.seq.call(null,v);var chunk__8035_8039 = null;var count__8036_8040 = (0);var i__8037_8041 = (0);while(true){
if((i__8037_8041 < count__8036_8040))
{var place_8042 = cljs.core._nth.call(null,chunk__8035_8039,i__8037_8041);var info_8043 = (new google.maps.InfoWindow({"content": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_8042)}));var marker_8044 = (new google.maps.Marker({"map": g_map, "position": (new google.maps.LatLng(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(place_8042),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(place_8042)))}));cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),((function (seq__8034_8038,chunk__8035_8039,count__8036_8040,i__8037_8041,info_8043,marker_8044,place_8042,v,g_map){
return (function (p1__8029_SHARP_){return cljs.core.conj.call(null,p1__8029_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,place_8042,new cljs.core.Keyword(null,"marker","marker",865118313),marker_8044),new cljs.core.Keyword(null,"visible","visible",-1024216805),true),new cljs.core.Keyword(null,"checked","checked",-50955819),false));
});})(seq__8034_8038,chunk__8035_8039,count__8036_8040,i__8037_8041,info_8043,marker_8044,place_8042,v,g_map))
);
{
var G__8045 = seq__8034_8038;
var G__8046 = chunk__8035_8039;
var G__8047 = count__8036_8040;
var G__8048 = (i__8037_8041 + (1));
seq__8034_8038 = G__8045;
chunk__8035_8039 = G__8046;
count__8036_8040 = G__8047;
i__8037_8041 = G__8048;
continue;
}
} else
{var temp__4126__auto___8049 = cljs.core.seq.call(null,seq__8034_8038);if(temp__4126__auto___8049)
{var seq__8034_8050__$1 = temp__4126__auto___8049;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8034_8050__$1))
{var c__4300__auto___8051 = cljs.core.chunk_first.call(null,seq__8034_8050__$1);{
var G__8052 = cljs.core.chunk_rest.call(null,seq__8034_8050__$1);
var G__8053 = c__4300__auto___8051;
var G__8054 = cljs.core.count.call(null,c__4300__auto___8051);
var G__8055 = (0);
seq__8034_8038 = G__8052;
chunk__8035_8039 = G__8053;
count__8036_8040 = G__8054;
i__8037_8041 = G__8055;
continue;
}
} else
{var place_8056 = cljs.core.first.call(null,seq__8034_8050__$1);var info_8057 = (new google.maps.InfoWindow({"content": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_8056)}));var marker_8058 = (new google.maps.Marker({"map": g_map, "position": (new google.maps.LatLng(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(place_8056),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(place_8056)))}));cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),((function (seq__8034_8038,chunk__8035_8039,count__8036_8040,i__8037_8041,info_8057,marker_8058,place_8056,seq__8034_8050__$1,temp__4126__auto___8049,v,g_map){
return (function (p1__8029_SHARP_){return cljs.core.conj.call(null,p1__8029_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,place_8056,new cljs.core.Keyword(null,"marker","marker",865118313),marker_8058),new cljs.core.Keyword(null,"visible","visible",-1024216805),true),new cljs.core.Keyword(null,"checked","checked",-50955819),false));
});})(seq__8034_8038,chunk__8035_8039,count__8036_8040,i__8037_8041,info_8057,marker_8058,place_8056,seq__8034_8050__$1,temp__4126__auto___8049,v,g_map))
);
{
var G__8059 = cljs.core.next.call(null,seq__8034_8050__$1);
var G__8060 = null;
var G__8061 = (0);
var G__8062 = (0);
seq__8034_8038 = G__8059;
chunk__8035_8039 = G__8060;
count__8036_8040 = G__8061;
i__8037_8041 = G__8062;
continue;
}
}
} else
{}
}
break;
}
google.maps.event.addListener.call(null,g_map,"bounds_changed",om_hospital_finder.core.bounds_changed);
return om_hospital_finder.core.bounds_changed.call(null);
});
om_hospital_finder.core.search_request_callback = (function search_request_callback(response){var res = cljs.core.js__GT_clj.call(null,response.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(res),"ok"))
{var g_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state));var latlng = (new google.maps.LatLng(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(res)));g_map.panTo(latlng);
return g_map.setZoom((12));
} else
{return cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),((function (res){
return (function (_){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No results found"], null);
});})(res))
);
}
});
om_hospital_finder.core.search_callback = (function search_callback(owner){if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"query","query",-1288509510)))))
{return cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),(function (_){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Please enter a valid search"], null);
}));
} else
{return goog.net.XhrIo.send(("/placelocation?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"query","query",-1288509510)))),om_hospital_finder.core.search_request_callback);
}
});
goog.net.XhrIo.send("/getplaces",om_hospital_finder.core.places_callback);

//# sourceMappingURL=core.js.map