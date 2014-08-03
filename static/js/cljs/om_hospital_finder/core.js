// Compiled by ClojureScript 0.0-2280
goog.provide('om_hospital_finder.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
om_hospital_finder.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map","map",1371690461),null,new cljs.core.Keyword(null,"places","places",1043491706),cljs.core.PersistentVector.EMPTY], null));
om_hospital_finder.core.map_view = (function map_view(app,owner){if(typeof om_hospital_finder.core.t9403 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t9403 = (function (owner,app,map_view,meta9404){
this.owner = owner;
this.app = app;
this.map_view = map_view;
this.meta9404 = meta9404;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t9403.cljs$lang$type = true;
om_hospital_finder.core.t9403.cljs$lang$ctorStr = "om-hospital-finder.core/t9403";
om_hospital_finder.core.t9403.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t9403");
});
om_hospital_finder.core.t9403.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t9403.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,null);
});
om_hospital_finder.core.t9403.prototype.om$core$IWillMount$ = true;
om_hospital_finder.core.t9403.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),(new google.maps.LatLng(50.375456,-4.142656)),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(10)], null);var g_map = (new google.maps.Map(document.getElementById("map-canvas"),cljs.core.clj__GT_js.call(null,opts)));return cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"map","map",1371690461),g_map);
});
om_hospital_finder.core.t9403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9405){var self__ = this;
var _9405__$1 = this;return self__.meta9404;
});
om_hospital_finder.core.t9403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9405,meta9404__$1){var self__ = this;
var _9405__$1 = this;return (new om_hospital_finder.core.t9403(self__.owner,self__.app,self__.map_view,meta9404__$1));
});
om_hospital_finder.core.__GT_t9403 = (function __GT_t9403(owner__$1,app__$1,map_view__$1,meta9404){return (new om_hospital_finder.core.t9403(owner__$1,app__$1,map_view__$1,meta9404));
});
}
return (new om_hospital_finder.core.t9403(owner,app,map_view,null));
});
om_hospital_finder.core.list_hospitals_view = (function list_hospitals_view(app,owner){if(typeof om_hospital_finder.core.t9409 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t9409 = (function (owner,app,list_hospitals_view,meta9410){
this.owner = owner;
this.app = app;
this.list_hospitals_view = list_hospitals_view;
this.meta9410 = meta9410;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t9409.cljs$lang$type = true;
om_hospital_finder.core.t9409.cljs$lang$ctorStr = "om-hospital-finder.core/t9409";
om_hospital_finder.core.t9409.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t9409");
});
om_hospital_finder.core.t9409.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t9409.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var places = cljs.core.filter.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state)));return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (places,___$1){
return (function (place){return React.DOM.div({"className": "hospital-list-item"},React.DOM.a({"href": ("/place/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(place)))},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place)),React.DOM.br(null,null),("Average rating: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(place))),om.dom.input.call(null,{"type": "checkbox", "value": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(place), "name": ("place-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(place))), "className": "check-compare pull-right", "id": ("check-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(place)))},null));
});})(places,___$1))
,places));
});
om_hospital_finder.core.t9409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9411){var self__ = this;
var _9411__$1 = this;return self__.meta9410;
});
om_hospital_finder.core.t9409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9411,meta9410__$1){var self__ = this;
var _9411__$1 = this;return (new om_hospital_finder.core.t9409(self__.owner,self__.app,self__.list_hospitals_view,meta9410__$1));
});
om_hospital_finder.core.__GT_t9409 = (function __GT_t9409(owner__$1,app__$1,list_hospitals_view__$1,meta9410){return (new om_hospital_finder.core.t9409(owner__$1,app__$1,list_hospitals_view__$1,meta9410));
});
}
return (new om_hospital_finder.core.t9409(owner,app,list_hospitals_view,null));
});
om.core.root.call(null,om_hospital_finder.core.map_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("map-canvas")], null));
om.core.root.call(null,om_hospital_finder.core.list_hospitals_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("hospitals-list")], null));
om_hospital_finder.core.bounds_changed = (function bounds_changed(e){var g_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state));var seq__9418 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state))));var chunk__9419 = null;var count__9420 = (0);var i__9421 = (0);while(true){
if((i__9421 < count__9420))
{var vec__9422 = cljs.core._nth.call(null,chunk__9419,i__9421);var i = cljs.core.nth.call(null,vec__9422,(0),null);var place = cljs.core.nth.call(null,vec__9422,(1),null);var marker_9424 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(place);var pos_9425 = marker_9424.getPosition();var visible_9426 = g_map.getBounds().contains(pos_9425);cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),visible_9426);
{
var G__9427 = seq__9418;
var G__9428 = chunk__9419;
var G__9429 = count__9420;
var G__9430 = (i__9421 + (1));
seq__9418 = G__9427;
chunk__9419 = G__9428;
count__9420 = G__9429;
i__9421 = G__9430;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9418);if(temp__4126__auto__)
{var seq__9418__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9418__$1))
{var c__4300__auto__ = cljs.core.chunk_first.call(null,seq__9418__$1);{
var G__9431 = cljs.core.chunk_rest.call(null,seq__9418__$1);
var G__9432 = c__4300__auto__;
var G__9433 = cljs.core.count.call(null,c__4300__auto__);
var G__9434 = (0);
seq__9418 = G__9431;
chunk__9419 = G__9432;
count__9420 = G__9433;
i__9421 = G__9434;
continue;
}
} else
{var vec__9423 = cljs.core.first.call(null,seq__9418__$1);var i = cljs.core.nth.call(null,vec__9423,(0),null);var place = cljs.core.nth.call(null,vec__9423,(1),null);var marker_9435 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(place);var pos_9436 = marker_9435.getPosition();var visible_9437 = g_map.getBounds().contains(pos_9436);cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),visible_9437);
{
var G__9438 = cljs.core.next.call(null,seq__9418__$1);
var G__9439 = null;
var G__9440 = (0);
var G__9441 = (0);
seq__9418 = G__9438;
chunk__9419 = G__9439;
count__9420 = G__9440;
i__9421 = G__9441;
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
om_hospital_finder.core.places_callback = (function places_callback(response){var v = cljs.core.js__GT_clj.call(null,response.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);var g_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state));var seq__9447_9451 = cljs.core.seq.call(null,v);var chunk__9448_9452 = null;var count__9449_9453 = (0);var i__9450_9454 = (0);while(true){
if((i__9450_9454 < count__9449_9453))
{var place_9455 = cljs.core._nth.call(null,chunk__9448_9452,i__9450_9454);var info_9456 = (new google.maps.InfoWindow({"content": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_9455)}));var marker_9457 = (new google.maps.Marker({"map": g_map, "position": (new google.maps.LatLng(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(place_9455),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(place_9455)))}));cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),((function (seq__9447_9451,chunk__9448_9452,count__9449_9453,i__9450_9454,info_9456,marker_9457,place_9455,v,g_map){
return (function (p1__9442_SHARP_){return cljs.core.conj.call(null,p1__9442_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,place_9455,new cljs.core.Keyword(null,"marker","marker",865118313),marker_9457),new cljs.core.Keyword(null,"visible","visible",-1024216805),true));
});})(seq__9447_9451,chunk__9448_9452,count__9449_9453,i__9450_9454,info_9456,marker_9457,place_9455,v,g_map))
);
{
var G__9458 = seq__9447_9451;
var G__9459 = chunk__9448_9452;
var G__9460 = count__9449_9453;
var G__9461 = (i__9450_9454 + (1));
seq__9447_9451 = G__9458;
chunk__9448_9452 = G__9459;
count__9449_9453 = G__9460;
i__9450_9454 = G__9461;
continue;
}
} else
{var temp__4126__auto___9462 = cljs.core.seq.call(null,seq__9447_9451);if(temp__4126__auto___9462)
{var seq__9447_9463__$1 = temp__4126__auto___9462;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9447_9463__$1))
{var c__4300__auto___9464 = cljs.core.chunk_first.call(null,seq__9447_9463__$1);{
var G__9465 = cljs.core.chunk_rest.call(null,seq__9447_9463__$1);
var G__9466 = c__4300__auto___9464;
var G__9467 = cljs.core.count.call(null,c__4300__auto___9464);
var G__9468 = (0);
seq__9447_9451 = G__9465;
chunk__9448_9452 = G__9466;
count__9449_9453 = G__9467;
i__9450_9454 = G__9468;
continue;
}
} else
{var place_9469 = cljs.core.first.call(null,seq__9447_9463__$1);var info_9470 = (new google.maps.InfoWindow({"content": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_9469)}));var marker_9471 = (new google.maps.Marker({"map": g_map, "position": (new google.maps.LatLng(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(place_9469),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(place_9469)))}));cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),((function (seq__9447_9451,chunk__9448_9452,count__9449_9453,i__9450_9454,info_9470,marker_9471,place_9469,seq__9447_9463__$1,temp__4126__auto___9462,v,g_map){
return (function (p1__9442_SHARP_){return cljs.core.conj.call(null,p1__9442_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,place_9469,new cljs.core.Keyword(null,"marker","marker",865118313),marker_9471),new cljs.core.Keyword(null,"visible","visible",-1024216805),true));
});})(seq__9447_9451,chunk__9448_9452,count__9449_9453,i__9450_9454,info_9470,marker_9471,place_9469,seq__9447_9463__$1,temp__4126__auto___9462,v,g_map))
);
{
var G__9472 = cljs.core.next.call(null,seq__9447_9463__$1);
var G__9473 = null;
var G__9474 = (0);
var G__9475 = (0);
seq__9447_9451 = G__9472;
chunk__9448_9452 = G__9473;
count__9449_9453 = G__9474;
i__9450_9454 = G__9475;
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