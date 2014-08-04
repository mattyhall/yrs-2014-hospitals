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
om_hospital_finder.core.errors_view = (function errors_view(app,owner){if(typeof om_hospital_finder.core.t7521 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t7521 = (function (owner,app,errors_view,meta7522){
this.owner = owner;
this.app = app;
this.errors_view = errors_view;
this.meta7522 = meta7522;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t7521.cljs$lang$type = true;
om_hospital_finder.core.t7521.cljs$lang$ctorStr = "om-hospital-finder.core/t7521";
om_hospital_finder.core.t7521.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t7521");
});
om_hospital_finder.core.t7521.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t7521.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$1){
return (function (p1__7517_SHARP_){return React.DOM.div({"className": "alert alert-danger"},p1__7517_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state))));
});
om_hospital_finder.core.t7521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7523){var self__ = this;
var _7523__$1 = this;return self__.meta7522;
});
om_hospital_finder.core.t7521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7523,meta7522__$1){var self__ = this;
var _7523__$1 = this;return (new om_hospital_finder.core.t7521(self__.owner,self__.app,self__.errors_view,meta7522__$1));
});
om_hospital_finder.core.__GT_t7521 = (function __GT_t7521(owner__$1,app__$1,errors_view__$1,meta7522){return (new om_hospital_finder.core.t7521(owner__$1,app__$1,errors_view__$1,meta7522));
});
}
return (new om_hospital_finder.core.t7521(owner,app,errors_view,null));
});
om_hospital_finder.core.map_view = (function map_view(app,owner){if(typeof om_hospital_finder.core.t7527 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t7527 = (function (owner,app,map_view,meta7528){
this.owner = owner;
this.app = app;
this.map_view = map_view;
this.meta7528 = meta7528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t7527.cljs$lang$type = true;
om_hospital_finder.core.t7527.cljs$lang$ctorStr = "om-hospital-finder.core/t7527";
om_hospital_finder.core.t7527.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t7527");
});
om_hospital_finder.core.t7527.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t7527.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,null);
});
om_hospital_finder.core.t7527.prototype.om$core$IWillMount$ = true;
om_hospital_finder.core.t7527.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),(new google.maps.LatLng(50.375456,-4.142656)),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(10)], null);var g_map = (new google.maps.Map(document.getElementById("map-canvas"),cljs.core.clj__GT_js.call(null,opts)));return cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"map","map",1371690461),g_map);
});
om_hospital_finder.core.t7527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7529){var self__ = this;
var _7529__$1 = this;return self__.meta7528;
});
om_hospital_finder.core.t7527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7529,meta7528__$1){var self__ = this;
var _7529__$1 = this;return (new om_hospital_finder.core.t7527(self__.owner,self__.app,self__.map_view,meta7528__$1));
});
om_hospital_finder.core.__GT_t7527 = (function __GT_t7527(owner__$1,app__$1,map_view__$1,meta7528){return (new om_hospital_finder.core.t7527(owner__$1,app__$1,map_view__$1,meta7528));
});
}
return (new om_hospital_finder.core.t7527(owner,app,map_view,null));
});
om_hospital_finder.core.list_hospitals_view = (function list_hospitals_view(app,owner){if(typeof om_hospital_finder.core.t7533 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t7533 = (function (owner,app,list_hospitals_view,meta7534){
this.owner = owner;
this.app = app;
this.list_hospitals_view = list_hospitals_view;
this.meta7534 = meta7534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t7533.cljs$lang$type = true;
om_hospital_finder.core.t7533.cljs$lang$ctorStr = "om-hospital-finder.core/t7533";
om_hospital_finder.core.t7533.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t7533");
});
om_hospital_finder.core.t7533.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t7533.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var places = cljs.core.filter.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.get.call(null,self__.app,new cljs.core.Keyword(null,"places","places",1043491706)));return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (places,___$1){
return (function (place){return React.DOM.div({"className": "hospital-list-item"},React.DOM.a({"href": ("/place/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(place)))},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place)),React.DOM.br(null,null),("Average rating: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(place))),om.dom.input.call(null,{"type": "checkbox", "checked": new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(place), "value": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(place), "onClick": ((function (places,___$1){
return (function (){return om.core.transact_BANG_.call(null,place,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checked","checked",-50955819)], null),cljs.core.not);
});})(places,___$1))
, "name": ("place-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(place))), "className": "check-compare pull-right", "id": ("check-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(place)))},null));
});})(places,___$1))
,places));
});
om_hospital_finder.core.t7533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7535){var self__ = this;
var _7535__$1 = this;return self__.meta7534;
});
om_hospital_finder.core.t7533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7535,meta7534__$1){var self__ = this;
var _7535__$1 = this;return (new om_hospital_finder.core.t7533(self__.owner,self__.app,self__.list_hospitals_view,meta7534__$1));
});
om_hospital_finder.core.__GT_t7533 = (function __GT_t7533(owner__$1,app__$1,list_hospitals_view__$1,meta7534){return (new om_hospital_finder.core.t7533(owner__$1,app__$1,list_hospitals_view__$1,meta7534));
});
}
return (new om_hospital_finder.core.t7533(owner,app,list_hospitals_view,null));
});
om_hospital_finder.core.search_view = (function search_view(app,owner){if(typeof om_hospital_finder.core.t7541 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t7541 = (function (owner,app,search_view,meta7542){
this.owner = owner;
this.app = app;
this.search_view = search_view;
this.meta7542 = meta7542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t7541.cljs$lang$type = true;
om_hospital_finder.core.t7541.cljs$lang$ctorStr = "om-hospital-finder.core/t7541";
om_hospital_finder.core.t7541.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t7541");
});
om_hospital_finder.core.t7541.prototype.om$core$IRenderState$ = true;
om_hospital_finder.core.t7541.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__7536_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"query","query",-1288509510),p1__7536_SHARP_.target.value);
});})(___$1))
, "maxLength": (240), "id": "seach", "onKeyUp": ((function (___$1){
return (function (p1__7537_SHARP_){if(cljs.core._EQ_.call(null,p1__7537_SHARP_.keyCode,(13)))
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
om_hospital_finder.core.t7541.prototype.om$core$IInitState$ = true;
om_hospital_finder.core.t7541.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),""], null);
});
om_hospital_finder.core.t7541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7543){var self__ = this;
var _7543__$1 = this;return self__.meta7542;
});
om_hospital_finder.core.t7541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7543,meta7542__$1){var self__ = this;
var _7543__$1 = this;return (new om_hospital_finder.core.t7541(self__.owner,self__.app,self__.search_view,meta7542__$1));
});
om_hospital_finder.core.__GT_t7541 = (function __GT_t7541(owner__$1,app__$1,search_view__$1,meta7542){return (new om_hospital_finder.core.t7541(owner__$1,app__$1,search_view__$1,meta7542));
});
}
return (new om_hospital_finder.core.t7541(owner,app,search_view,null));
});
om.core.root.call(null,om_hospital_finder.core.map_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("map-canvas")], null));
om.core.root.call(null,om_hospital_finder.core.list_hospitals_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("hospitals-list")], null));
om.core.root.call(null,om_hospital_finder.core.search_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("tfnewsearch")], null));
om.core.root.call(null,om_hospital_finder.core.errors_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("errors")], null));
om_hospital_finder.core.bounds_changed = (function bounds_changed(){var g_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state));var seq__7550 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state))));var chunk__7551 = null;var count__7552 = (0);var i__7553 = (0);while(true){
if((i__7553 < count__7552))
{var vec__7554 = cljs.core._nth.call(null,chunk__7551,i__7553);var i = cljs.core.nth.call(null,vec__7554,(0),null);var place = cljs.core.nth.call(null,vec__7554,(1),null);var marker_7556 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(place);var pos_7557 = marker_7556.getPosition();var visible_7558 = g_map.getBounds().contains(pos_7557);cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),visible_7558);
if(cljs.core.not.call(null,visible_7558))
{cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"checked","checked",-50955819)], null),false);
} else
{}
{
var G__7559 = seq__7550;
var G__7560 = chunk__7551;
var G__7561 = count__7552;
var G__7562 = (i__7553 + (1));
seq__7550 = G__7559;
chunk__7551 = G__7560;
count__7552 = G__7561;
i__7553 = G__7562;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7550);if(temp__4126__auto__)
{var seq__7550__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7550__$1))
{var c__4300__auto__ = cljs.core.chunk_first.call(null,seq__7550__$1);{
var G__7563 = cljs.core.chunk_rest.call(null,seq__7550__$1);
var G__7564 = c__4300__auto__;
var G__7565 = cljs.core.count.call(null,c__4300__auto__);
var G__7566 = (0);
seq__7550 = G__7563;
chunk__7551 = G__7564;
count__7552 = G__7565;
i__7553 = G__7566;
continue;
}
} else
{var vec__7555 = cljs.core.first.call(null,seq__7550__$1);var i = cljs.core.nth.call(null,vec__7555,(0),null);var place = cljs.core.nth.call(null,vec__7555,(1),null);var marker_7567 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(place);var pos_7568 = marker_7567.getPosition();var visible_7569 = g_map.getBounds().contains(pos_7568);cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),visible_7569);
if(cljs.core.not.call(null,visible_7569))
{cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"checked","checked",-50955819)], null),false);
} else
{}
{
var G__7570 = cljs.core.next.call(null,seq__7550__$1);
var G__7571 = null;
var G__7572 = (0);
var G__7573 = (0);
seq__7550 = G__7570;
chunk__7551 = G__7571;
count__7552 = G__7572;
i__7553 = G__7573;
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
om_hospital_finder.core.places_callback = (function places_callback(response){var v = cljs.core.js__GT_clj.call(null,response.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);var g_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state));var seq__7579_7583 = cljs.core.seq.call(null,v);var chunk__7580_7584 = null;var count__7581_7585 = (0);var i__7582_7586 = (0);while(true){
if((i__7582_7586 < count__7581_7585))
{var place_7587 = cljs.core._nth.call(null,chunk__7580_7584,i__7582_7586);var info_7588 = (new google.maps.InfoWindow({"content": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_7587)}));var marker_7589 = (new google.maps.Marker({"map": g_map, "position": (new google.maps.LatLng(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(place_7587),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(place_7587)))}));cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),((function (seq__7579_7583,chunk__7580_7584,count__7581_7585,i__7582_7586,info_7588,marker_7589,place_7587,v,g_map){
return (function (p1__7574_SHARP_){return cljs.core.conj.call(null,p1__7574_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,place_7587,new cljs.core.Keyword(null,"marker","marker",865118313),marker_7589),new cljs.core.Keyword(null,"visible","visible",-1024216805),true),new cljs.core.Keyword(null,"checked","checked",-50955819),false));
});})(seq__7579_7583,chunk__7580_7584,count__7581_7585,i__7582_7586,info_7588,marker_7589,place_7587,v,g_map))
);
{
var G__7590 = seq__7579_7583;
var G__7591 = chunk__7580_7584;
var G__7592 = count__7581_7585;
var G__7593 = (i__7582_7586 + (1));
seq__7579_7583 = G__7590;
chunk__7580_7584 = G__7591;
count__7581_7585 = G__7592;
i__7582_7586 = G__7593;
continue;
}
} else
{var temp__4126__auto___7594 = cljs.core.seq.call(null,seq__7579_7583);if(temp__4126__auto___7594)
{var seq__7579_7595__$1 = temp__4126__auto___7594;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7579_7595__$1))
{var c__4300__auto___7596 = cljs.core.chunk_first.call(null,seq__7579_7595__$1);{
var G__7597 = cljs.core.chunk_rest.call(null,seq__7579_7595__$1);
var G__7598 = c__4300__auto___7596;
var G__7599 = cljs.core.count.call(null,c__4300__auto___7596);
var G__7600 = (0);
seq__7579_7583 = G__7597;
chunk__7580_7584 = G__7598;
count__7581_7585 = G__7599;
i__7582_7586 = G__7600;
continue;
}
} else
{var place_7601 = cljs.core.first.call(null,seq__7579_7595__$1);var info_7602 = (new google.maps.InfoWindow({"content": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_7601)}));var marker_7603 = (new google.maps.Marker({"map": g_map, "position": (new google.maps.LatLng(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(place_7601),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(place_7601)))}));cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),((function (seq__7579_7583,chunk__7580_7584,count__7581_7585,i__7582_7586,info_7602,marker_7603,place_7601,seq__7579_7595__$1,temp__4126__auto___7594,v,g_map){
return (function (p1__7574_SHARP_){return cljs.core.conj.call(null,p1__7574_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,place_7601,new cljs.core.Keyword(null,"marker","marker",865118313),marker_7603),new cljs.core.Keyword(null,"visible","visible",-1024216805),true),new cljs.core.Keyword(null,"checked","checked",-50955819),false));
});})(seq__7579_7583,chunk__7580_7584,count__7581_7585,i__7582_7586,info_7602,marker_7603,place_7601,seq__7579_7595__$1,temp__4126__auto___7594,v,g_map))
);
{
var G__7604 = cljs.core.next.call(null,seq__7579_7595__$1);
var G__7605 = null;
var G__7606 = (0);
var G__7607 = (0);
seq__7579_7583 = G__7604;
chunk__7580_7584 = G__7605;
count__7581_7585 = G__7606;
i__7582_7586 = G__7607;
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