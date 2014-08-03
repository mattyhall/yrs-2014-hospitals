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
om_hospital_finder.core.errors_view = (function errors_view(app,owner){if(typeof om_hospital_finder.core.t13025 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t13025 = (function (owner,app,errors_view,meta13026){
this.owner = owner;
this.app = app;
this.errors_view = errors_view;
this.meta13026 = meta13026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t13025.cljs$lang$type = true;
om_hospital_finder.core.t13025.cljs$lang$ctorStr = "om-hospital-finder.core/t13025";
om_hospital_finder.core.t13025.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t13025");
});
om_hospital_finder.core.t13025.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t13025.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$1){
return (function (p1__13021_SHARP_){return React.DOM.div({"className": "alert alert-danger"},p1__13021_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state))));
});
om_hospital_finder.core.t13025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13027){var self__ = this;
var _13027__$1 = this;return self__.meta13026;
});
om_hospital_finder.core.t13025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13027,meta13026__$1){var self__ = this;
var _13027__$1 = this;return (new om_hospital_finder.core.t13025(self__.owner,self__.app,self__.errors_view,meta13026__$1));
});
om_hospital_finder.core.__GT_t13025 = (function __GT_t13025(owner__$1,app__$1,errors_view__$1,meta13026){return (new om_hospital_finder.core.t13025(owner__$1,app__$1,errors_view__$1,meta13026));
});
}
return (new om_hospital_finder.core.t13025(owner,app,errors_view,null));
});
om_hospital_finder.core.map_view = (function map_view(app,owner){if(typeof om_hospital_finder.core.t13031 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t13031 = (function (owner,app,map_view,meta13032){
this.owner = owner;
this.app = app;
this.map_view = map_view;
this.meta13032 = meta13032;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t13031.cljs$lang$type = true;
om_hospital_finder.core.t13031.cljs$lang$ctorStr = "om-hospital-finder.core/t13031";
om_hospital_finder.core.t13031.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t13031");
});
om_hospital_finder.core.t13031.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t13031.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,null);
});
om_hospital_finder.core.t13031.prototype.om$core$IWillMount$ = true;
om_hospital_finder.core.t13031.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),(new google.maps.LatLng(50.375456,-4.142656)),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(10)], null);var g_map = (new google.maps.Map(document.getElementById("map-canvas"),cljs.core.clj__GT_js.call(null,opts)));return cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"map","map",1371690461),g_map);
});
om_hospital_finder.core.t13031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13033){var self__ = this;
var _13033__$1 = this;return self__.meta13032;
});
om_hospital_finder.core.t13031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13033,meta13032__$1){var self__ = this;
var _13033__$1 = this;return (new om_hospital_finder.core.t13031(self__.owner,self__.app,self__.map_view,meta13032__$1));
});
om_hospital_finder.core.__GT_t13031 = (function __GT_t13031(owner__$1,app__$1,map_view__$1,meta13032){return (new om_hospital_finder.core.t13031(owner__$1,app__$1,map_view__$1,meta13032));
});
}
return (new om_hospital_finder.core.t13031(owner,app,map_view,null));
});
om_hospital_finder.core.list_hospitals_view = (function list_hospitals_view(app,owner){if(typeof om_hospital_finder.core.t13037 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t13037 = (function (owner,app,list_hospitals_view,meta13038){
this.owner = owner;
this.app = app;
this.list_hospitals_view = list_hospitals_view;
this.meta13038 = meta13038;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t13037.cljs$lang$type = true;
om_hospital_finder.core.t13037.cljs$lang$ctorStr = "om-hospital-finder.core/t13037";
om_hospital_finder.core.t13037.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t13037");
});
om_hospital_finder.core.t13037.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t13037.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var places = cljs.core.filter.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state)));return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (places,___$1){
return (function (place){return React.DOM.div({"className": "hospital-list-item"},React.DOM.a({"href": ("/place/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(place)))},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place)),React.DOM.br(null,null),("Average rating: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(place))),om.dom.input.call(null,{"type": "checkbox", "value": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(place), "name": ("place-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(place))), "className": "check-compare pull-right", "id": ("check-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(place)))},null));
});})(places,___$1))
,places));
});
om_hospital_finder.core.t13037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13039){var self__ = this;
var _13039__$1 = this;return self__.meta13038;
});
om_hospital_finder.core.t13037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13039,meta13038__$1){var self__ = this;
var _13039__$1 = this;return (new om_hospital_finder.core.t13037(self__.owner,self__.app,self__.list_hospitals_view,meta13038__$1));
});
om_hospital_finder.core.__GT_t13037 = (function __GT_t13037(owner__$1,app__$1,list_hospitals_view__$1,meta13038){return (new om_hospital_finder.core.t13037(owner__$1,app__$1,list_hospitals_view__$1,meta13038));
});
}
return (new om_hospital_finder.core.t13037(owner,app,list_hospitals_view,null));
});
om_hospital_finder.core.search_view = (function search_view(app,owner){if(typeof om_hospital_finder.core.t13045 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t13045 = (function (owner,app,search_view,meta13046){
this.owner = owner;
this.app = app;
this.search_view = search_view;
this.meta13046 = meta13046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t13045.cljs$lang$type = true;
om_hospital_finder.core.t13045.cljs$lang$ctorStr = "om-hospital-finder.core/t13045";
om_hospital_finder.core.t13045.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t13045");
});
om_hospital_finder.core.t13045.prototype.om$core$IRenderState$ = true;
om_hospital_finder.core.t13045.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__13040_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"query","query",-1288509510),p1__13040_SHARP_.target.value);
});})(___$1))
, "maxLength": (240), "id": "seach", "onKeyUp": ((function (___$1){
return (function (p1__13041_SHARP_){if(cljs.core._EQ_.call(null,p1__13041_SHARP_.keyCode,(13)))
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
om_hospital_finder.core.t13045.prototype.om$core$IInitState$ = true;
om_hospital_finder.core.t13045.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),""], null);
});
om_hospital_finder.core.t13045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13047){var self__ = this;
var _13047__$1 = this;return self__.meta13046;
});
om_hospital_finder.core.t13045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13047,meta13046__$1){var self__ = this;
var _13047__$1 = this;return (new om_hospital_finder.core.t13045(self__.owner,self__.app,self__.search_view,meta13046__$1));
});
om_hospital_finder.core.__GT_t13045 = (function __GT_t13045(owner__$1,app__$1,search_view__$1,meta13046){return (new om_hospital_finder.core.t13045(owner__$1,app__$1,search_view__$1,meta13046));
});
}
return (new om_hospital_finder.core.t13045(owner,app,search_view,null));
});
om.core.root.call(null,om_hospital_finder.core.map_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("map-canvas")], null));
om.core.root.call(null,om_hospital_finder.core.list_hospitals_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("hospitals-list")], null));
om.core.root.call(null,om_hospital_finder.core.search_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("tfnewsearch")], null));
om.core.root.call(null,om_hospital_finder.core.errors_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("errors")], null));
om_hospital_finder.core.bounds_changed = (function bounds_changed(){var g_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state));var seq__13054 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state))));var chunk__13055 = null;var count__13056 = (0);var i__13057 = (0);while(true){
if((i__13057 < count__13056))
{var vec__13058 = cljs.core._nth.call(null,chunk__13055,i__13057);var i = cljs.core.nth.call(null,vec__13058,(0),null);var place = cljs.core.nth.call(null,vec__13058,(1),null);var marker_13060 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(place);var pos_13061 = marker_13060.getPosition();var visible_13062 = g_map.getBounds().contains(pos_13061);cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),visible_13062);
{
var G__13063 = seq__13054;
var G__13064 = chunk__13055;
var G__13065 = count__13056;
var G__13066 = (i__13057 + (1));
seq__13054 = G__13063;
chunk__13055 = G__13064;
count__13056 = G__13065;
i__13057 = G__13066;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13054);if(temp__4126__auto__)
{var seq__13054__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13054__$1))
{var c__4300__auto__ = cljs.core.chunk_first.call(null,seq__13054__$1);{
var G__13067 = cljs.core.chunk_rest.call(null,seq__13054__$1);
var G__13068 = c__4300__auto__;
var G__13069 = cljs.core.count.call(null,c__4300__auto__);
var G__13070 = (0);
seq__13054 = G__13067;
chunk__13055 = G__13068;
count__13056 = G__13069;
i__13057 = G__13070;
continue;
}
} else
{var vec__13059 = cljs.core.first.call(null,seq__13054__$1);var i = cljs.core.nth.call(null,vec__13059,(0),null);var place = cljs.core.nth.call(null,vec__13059,(1),null);var marker_13071 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(place);var pos_13072 = marker_13071.getPosition();var visible_13073 = g_map.getBounds().contains(pos_13072);cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),visible_13073);
{
var G__13074 = cljs.core.next.call(null,seq__13054__$1);
var G__13075 = null;
var G__13076 = (0);
var G__13077 = (0);
seq__13054 = G__13074;
chunk__13055 = G__13075;
count__13056 = G__13076;
i__13057 = G__13077;
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
om_hospital_finder.core.places_callback = (function places_callback(response){var v = cljs.core.js__GT_clj.call(null,response.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);var g_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state));var seq__13083_13087 = cljs.core.seq.call(null,v);var chunk__13084_13088 = null;var count__13085_13089 = (0);var i__13086_13090 = (0);while(true){
if((i__13086_13090 < count__13085_13089))
{var place_13091 = cljs.core._nth.call(null,chunk__13084_13088,i__13086_13090);var info_13092 = (new google.maps.InfoWindow({"content": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_13091)}));var marker_13093 = (new google.maps.Marker({"map": g_map, "position": (new google.maps.LatLng(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(place_13091),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(place_13091)))}));cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),((function (seq__13083_13087,chunk__13084_13088,count__13085_13089,i__13086_13090,info_13092,marker_13093,place_13091,v,g_map){
return (function (p1__13078_SHARP_){return cljs.core.conj.call(null,p1__13078_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,place_13091,new cljs.core.Keyword(null,"marker","marker",865118313),marker_13093),new cljs.core.Keyword(null,"visible","visible",-1024216805),true));
});})(seq__13083_13087,chunk__13084_13088,count__13085_13089,i__13086_13090,info_13092,marker_13093,place_13091,v,g_map))
);
{
var G__13094 = seq__13083_13087;
var G__13095 = chunk__13084_13088;
var G__13096 = count__13085_13089;
var G__13097 = (i__13086_13090 + (1));
seq__13083_13087 = G__13094;
chunk__13084_13088 = G__13095;
count__13085_13089 = G__13096;
i__13086_13090 = G__13097;
continue;
}
} else
{var temp__4126__auto___13098 = cljs.core.seq.call(null,seq__13083_13087);if(temp__4126__auto___13098)
{var seq__13083_13099__$1 = temp__4126__auto___13098;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13083_13099__$1))
{var c__4300__auto___13100 = cljs.core.chunk_first.call(null,seq__13083_13099__$1);{
var G__13101 = cljs.core.chunk_rest.call(null,seq__13083_13099__$1);
var G__13102 = c__4300__auto___13100;
var G__13103 = cljs.core.count.call(null,c__4300__auto___13100);
var G__13104 = (0);
seq__13083_13087 = G__13101;
chunk__13084_13088 = G__13102;
count__13085_13089 = G__13103;
i__13086_13090 = G__13104;
continue;
}
} else
{var place_13105 = cljs.core.first.call(null,seq__13083_13099__$1);var info_13106 = (new google.maps.InfoWindow({"content": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_13105)}));var marker_13107 = (new google.maps.Marker({"map": g_map, "position": (new google.maps.LatLng(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(place_13105),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(place_13105)))}));cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),((function (seq__13083_13087,chunk__13084_13088,count__13085_13089,i__13086_13090,info_13106,marker_13107,place_13105,seq__13083_13099__$1,temp__4126__auto___13098,v,g_map){
return (function (p1__13078_SHARP_){return cljs.core.conj.call(null,p1__13078_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,place_13105,new cljs.core.Keyword(null,"marker","marker",865118313),marker_13107),new cljs.core.Keyword(null,"visible","visible",-1024216805),true));
});})(seq__13083_13087,chunk__13084_13088,count__13085_13089,i__13086_13090,info_13106,marker_13107,place_13105,seq__13083_13099__$1,temp__4126__auto___13098,v,g_map))
);
{
var G__13108 = cljs.core.next.call(null,seq__13083_13099__$1);
var G__13109 = null;
var G__13110 = (0);
var G__13111 = (0);
seq__13083_13087 = G__13108;
chunk__13084_13088 = G__13109;
count__13085_13089 = G__13110;
i__13086_13090 = G__13111;
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