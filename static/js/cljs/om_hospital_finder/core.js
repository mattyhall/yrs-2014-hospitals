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
om_hospital_finder.core.errors_view = (function errors_view(app,owner){if(typeof om_hospital_finder.core.t11429 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t11429 = (function (owner,app,errors_view,meta11430){
this.owner = owner;
this.app = app;
this.errors_view = errors_view;
this.meta11430 = meta11430;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t11429.cljs$lang$type = true;
om_hospital_finder.core.t11429.cljs$lang$ctorStr = "om-hospital-finder.core/t11429";
om_hospital_finder.core.t11429.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t11429");
});
om_hospital_finder.core.t11429.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t11429.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$1){
return (function (p1__11425_SHARP_){return React.DOM.div({"className": "alert alert-danger"},p1__11425_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state))));
});
om_hospital_finder.core.t11429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11431){var self__ = this;
var _11431__$1 = this;return self__.meta11430;
});
om_hospital_finder.core.t11429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11431,meta11430__$1){var self__ = this;
var _11431__$1 = this;return (new om_hospital_finder.core.t11429(self__.owner,self__.app,self__.errors_view,meta11430__$1));
});
om_hospital_finder.core.__GT_t11429 = (function __GT_t11429(owner__$1,app__$1,errors_view__$1,meta11430){return (new om_hospital_finder.core.t11429(owner__$1,app__$1,errors_view__$1,meta11430));
});
}
return (new om_hospital_finder.core.t11429(owner,app,errors_view,null));
});
om.core.root.call(null,om_hospital_finder.core.errors_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("errors")], null));
om_hospital_finder.core.map_view = (function map_view(app,owner){if(typeof om_hospital_finder.core.t11435 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t11435 = (function (owner,app,map_view,meta11436){
this.owner = owner;
this.app = app;
this.map_view = map_view;
this.meta11436 = meta11436;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t11435.cljs$lang$type = true;
om_hospital_finder.core.t11435.cljs$lang$ctorStr = "om-hospital-finder.core/t11435";
om_hospital_finder.core.t11435.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t11435");
});
om_hospital_finder.core.t11435.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t11435.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,null);
});
om_hospital_finder.core.t11435.prototype.om$core$IWillMount$ = true;
om_hospital_finder.core.t11435.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),(new google.maps.LatLng(50.375456,-4.142656)),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(10)], null);var g_map = (new google.maps.Map(document.getElementById("map-canvas"),cljs.core.clj__GT_js.call(null,opts)));return cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"map","map",1371690461),g_map);
});
om_hospital_finder.core.t11435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11437){var self__ = this;
var _11437__$1 = this;return self__.meta11436;
});
om_hospital_finder.core.t11435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11437,meta11436__$1){var self__ = this;
var _11437__$1 = this;return (new om_hospital_finder.core.t11435(self__.owner,self__.app,self__.map_view,meta11436__$1));
});
om_hospital_finder.core.__GT_t11435 = (function __GT_t11435(owner__$1,app__$1,map_view__$1,meta11436){return (new om_hospital_finder.core.t11435(owner__$1,app__$1,map_view__$1,meta11436));
});
}
return (new om_hospital_finder.core.t11435(owner,app,map_view,null));
});
om.core.root.call(null,om_hospital_finder.core.map_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("map-canvas")], null));
om_hospital_finder.core.list_hospitals_view = (function list_hospitals_view(app,owner){if(typeof om_hospital_finder.core.t11441 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t11441 = (function (owner,app,list_hospitals_view,meta11442){
this.owner = owner;
this.app = app;
this.list_hospitals_view = list_hospitals_view;
this.meta11442 = meta11442;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t11441.cljs$lang$type = true;
om_hospital_finder.core.t11441.cljs$lang$ctorStr = "om-hospital-finder.core/t11441";
om_hospital_finder.core.t11441.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t11441");
});
om_hospital_finder.core.t11441.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t11441.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var places = cljs.core.filter.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.get.call(null,self__.app,new cljs.core.Keyword(null,"places","places",1043491706)));return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (places,___$1){
return (function (place){return React.DOM.div({"className": "hospital-list-item"},React.DOM.a({"href": ("/place/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(place)))},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place)),React.DOM.br(null,null),("Average rating: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(place))),om.dom.input.call(null,{"type": "checkbox", "checked": new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(place), "value": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(place), "onClick": ((function (places,___$1){
return (function (){return om.core.transact_BANG_.call(null,place,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checked","checked",-50955819)], null),cljs.core.not);
});})(places,___$1))
, "name": ("place-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(place))), "className": "check-compare pull-right", "id": ("check-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(place)))},null));
});})(places,___$1))
,places));
});
om_hospital_finder.core.t11441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11443){var self__ = this;
var _11443__$1 = this;return self__.meta11442;
});
om_hospital_finder.core.t11441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11443,meta11442__$1){var self__ = this;
var _11443__$1 = this;return (new om_hospital_finder.core.t11441(self__.owner,self__.app,self__.list_hospitals_view,meta11442__$1));
});
om_hospital_finder.core.__GT_t11441 = (function __GT_t11441(owner__$1,app__$1,list_hospitals_view__$1,meta11442){return (new om_hospital_finder.core.t11441(owner__$1,app__$1,list_hospitals_view__$1,meta11442));
});
}
return (new om_hospital_finder.core.t11441(owner,app,list_hospitals_view,null));
});
om.core.root.call(null,om_hospital_finder.core.list_hospitals_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("hospitals-list")], null));
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
om_hospital_finder.core.search_view = (function search_view(app,owner){if(typeof om_hospital_finder.core.t11449 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t11449 = (function (owner,app,search_view,meta11450){
this.owner = owner;
this.app = app;
this.search_view = search_view;
this.meta11450 = meta11450;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t11449.cljs$lang$type = true;
om_hospital_finder.core.t11449.cljs$lang$ctorStr = "om-hospital-finder.core/t11449";
om_hospital_finder.core.t11449.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t11449");
});
om_hospital_finder.core.t11449.prototype.om$core$IRenderState$ = true;
om_hospital_finder.core.t11449.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__11444_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"query","query",-1288509510),p1__11444_SHARP_.target.value);
});})(___$1))
, "maxLength": (240), "id": "seach", "onKeyUp": ((function (___$1){
return (function (p1__11445_SHARP_){if(cljs.core._EQ_.call(null,p1__11445_SHARP_.keyCode,(13)))
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
om_hospital_finder.core.t11449.prototype.om$core$IInitState$ = true;
om_hospital_finder.core.t11449.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),""], null);
});
om_hospital_finder.core.t11449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11451){var self__ = this;
var _11451__$1 = this;return self__.meta11450;
});
om_hospital_finder.core.t11449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11451,meta11450__$1){var self__ = this;
var _11451__$1 = this;return (new om_hospital_finder.core.t11449(self__.owner,self__.app,self__.search_view,meta11450__$1));
});
om_hospital_finder.core.__GT_t11449 = (function __GT_t11449(owner__$1,app__$1,search_view__$1,meta11450){return (new om_hospital_finder.core.t11449(owner__$1,app__$1,search_view__$1,meta11450));
});
}
return (new om_hospital_finder.core.t11449(owner,app,search_view,null));
});
om.core.root.call(null,om_hospital_finder.core.search_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("tfnewsearch")], null));
om_hospital_finder.core.bounds_changed = (function bounds_changed(){var g_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state));var seq__11458 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state))));var chunk__11459 = null;var count__11460 = (0);var i__11461 = (0);while(true){
if((i__11461 < count__11460))
{var vec__11462 = cljs.core._nth.call(null,chunk__11459,i__11461);var i = cljs.core.nth.call(null,vec__11462,(0),null);var place = cljs.core.nth.call(null,vec__11462,(1),null);var marker_11464 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(place);var pos_11465 = marker_11464.getPosition();var visible_11466 = g_map.getBounds().contains(pos_11465);cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),visible_11466);
if(cljs.core.not.call(null,visible_11466))
{cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"checked","checked",-50955819)], null),false);
} else
{}
{
var G__11467 = seq__11458;
var G__11468 = chunk__11459;
var G__11469 = count__11460;
var G__11470 = (i__11461 + (1));
seq__11458 = G__11467;
chunk__11459 = G__11468;
count__11460 = G__11469;
i__11461 = G__11470;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11458);if(temp__4126__auto__)
{var seq__11458__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11458__$1))
{var c__4300__auto__ = cljs.core.chunk_first.call(null,seq__11458__$1);{
var G__11471 = cljs.core.chunk_rest.call(null,seq__11458__$1);
var G__11472 = c__4300__auto__;
var G__11473 = cljs.core.count.call(null,c__4300__auto__);
var G__11474 = (0);
seq__11458 = G__11471;
chunk__11459 = G__11472;
count__11460 = G__11473;
i__11461 = G__11474;
continue;
}
} else
{var vec__11463 = cljs.core.first.call(null,seq__11458__$1);var i = cljs.core.nth.call(null,vec__11463,(0),null);var place = cljs.core.nth.call(null,vec__11463,(1),null);var marker_11475 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(place);var pos_11476 = marker_11475.getPosition();var visible_11477 = g_map.getBounds().contains(pos_11476);cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),visible_11477);
if(cljs.core.not.call(null,visible_11477))
{cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"checked","checked",-50955819)], null),false);
} else
{}
{
var G__11478 = cljs.core.next.call(null,seq__11458__$1);
var G__11479 = null;
var G__11480 = (0);
var G__11481 = (0);
seq__11458 = G__11478;
chunk__11459 = G__11479;
count__11460 = G__11480;
i__11461 = G__11481;
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
om_hospital_finder.core.places_callback = (function places_callback(response){var v = cljs.core.js__GT_clj.call(null,response.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);var g_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state));var seq__11487_11491 = cljs.core.seq.call(null,v);var chunk__11488_11492 = null;var count__11489_11493 = (0);var i__11490_11494 = (0);while(true){
if((i__11490_11494 < count__11489_11493))
{var place_11495 = cljs.core._nth.call(null,chunk__11488_11492,i__11490_11494);var info_11496 = (new google.maps.InfoWindow({"content": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_11495)}));var marker_11497 = (new google.maps.Marker({"map": g_map, "position": (new google.maps.LatLng(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(place_11495),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(place_11495)))}));cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),((function (seq__11487_11491,chunk__11488_11492,count__11489_11493,i__11490_11494,info_11496,marker_11497,place_11495,v,g_map){
return (function (p1__11482_SHARP_){return cljs.core.conj.call(null,p1__11482_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,place_11495,new cljs.core.Keyword(null,"marker","marker",865118313),marker_11497),new cljs.core.Keyword(null,"visible","visible",-1024216805),true),new cljs.core.Keyword(null,"checked","checked",-50955819),false));
});})(seq__11487_11491,chunk__11488_11492,count__11489_11493,i__11490_11494,info_11496,marker_11497,place_11495,v,g_map))
);
{
var G__11498 = seq__11487_11491;
var G__11499 = chunk__11488_11492;
var G__11500 = count__11489_11493;
var G__11501 = (i__11490_11494 + (1));
seq__11487_11491 = G__11498;
chunk__11488_11492 = G__11499;
count__11489_11493 = G__11500;
i__11490_11494 = G__11501;
continue;
}
} else
{var temp__4126__auto___11502 = cljs.core.seq.call(null,seq__11487_11491);if(temp__4126__auto___11502)
{var seq__11487_11503__$1 = temp__4126__auto___11502;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11487_11503__$1))
{var c__4300__auto___11504 = cljs.core.chunk_first.call(null,seq__11487_11503__$1);{
var G__11505 = cljs.core.chunk_rest.call(null,seq__11487_11503__$1);
var G__11506 = c__4300__auto___11504;
var G__11507 = cljs.core.count.call(null,c__4300__auto___11504);
var G__11508 = (0);
seq__11487_11491 = G__11505;
chunk__11488_11492 = G__11506;
count__11489_11493 = G__11507;
i__11490_11494 = G__11508;
continue;
}
} else
{var place_11509 = cljs.core.first.call(null,seq__11487_11503__$1);var info_11510 = (new google.maps.InfoWindow({"content": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_11509)}));var marker_11511 = (new google.maps.Marker({"map": g_map, "position": (new google.maps.LatLng(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(place_11509),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(place_11509)))}));cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),((function (seq__11487_11491,chunk__11488_11492,count__11489_11493,i__11490_11494,info_11510,marker_11511,place_11509,seq__11487_11503__$1,temp__4126__auto___11502,v,g_map){
return (function (p1__11482_SHARP_){return cljs.core.conj.call(null,p1__11482_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,place_11509,new cljs.core.Keyword(null,"marker","marker",865118313),marker_11511),new cljs.core.Keyword(null,"visible","visible",-1024216805),true),new cljs.core.Keyword(null,"checked","checked",-50955819),false));
});})(seq__11487_11491,chunk__11488_11492,count__11489_11493,i__11490_11494,info_11510,marker_11511,place_11509,seq__11487_11503__$1,temp__4126__auto___11502,v,g_map))
);
{
var G__11512 = cljs.core.next.call(null,seq__11487_11503__$1);
var G__11513 = null;
var G__11514 = (0);
var G__11515 = (0);
seq__11487_11491 = G__11512;
chunk__11488_11492 = G__11513;
count__11489_11493 = G__11514;
i__11490_11494 = G__11515;
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
goog.net.XhrIo.send("/getplaces",om_hospital_finder.core.places_callback);

//# sourceMappingURL=core.js.map