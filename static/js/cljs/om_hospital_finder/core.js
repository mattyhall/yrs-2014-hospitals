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
om_hospital_finder.core.errors_view = (function errors_view(app,owner){if(typeof om_hospital_finder.core.t12109 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t12109 = (function (owner,app,errors_view,meta12110){
this.owner = owner;
this.app = app;
this.errors_view = errors_view;
this.meta12110 = meta12110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t12109.cljs$lang$type = true;
om_hospital_finder.core.t12109.cljs$lang$ctorStr = "om-hospital-finder.core/t12109";
om_hospital_finder.core.t12109.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t12109");
});
om_hospital_finder.core.t12109.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t12109.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$1){
return (function (p1__12105_SHARP_){return React.DOM.div({"className": "alert alert-danger"},p1__12105_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state))));
});
om_hospital_finder.core.t12109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12111){var self__ = this;
var _12111__$1 = this;return self__.meta12110;
});
om_hospital_finder.core.t12109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12111,meta12110__$1){var self__ = this;
var _12111__$1 = this;return (new om_hospital_finder.core.t12109(self__.owner,self__.app,self__.errors_view,meta12110__$1));
});
om_hospital_finder.core.__GT_t12109 = (function __GT_t12109(owner__$1,app__$1,errors_view__$1,meta12110){return (new om_hospital_finder.core.t12109(owner__$1,app__$1,errors_view__$1,meta12110));
});
}
return (new om_hospital_finder.core.t12109(owner,app,errors_view,null));
});
om.core.root.call(null,om_hospital_finder.core.errors_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("errors")], null));
om_hospital_finder.core.map_view = (function map_view(app,owner){if(typeof om_hospital_finder.core.t12115 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t12115 = (function (owner,app,map_view,meta12116){
this.owner = owner;
this.app = app;
this.map_view = map_view;
this.meta12116 = meta12116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t12115.cljs$lang$type = true;
om_hospital_finder.core.t12115.cljs$lang$ctorStr = "om-hospital-finder.core/t12115";
om_hospital_finder.core.t12115.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t12115");
});
om_hospital_finder.core.t12115.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t12115.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,null);
});
om_hospital_finder.core.t12115.prototype.om$core$IWillMount$ = true;
om_hospital_finder.core.t12115.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),(new google.maps.LatLng(50.375456,-4.142656)),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(10)], null);var g_map = (new google.maps.Map(document.getElementById("map-canvas"),cljs.core.clj__GT_js.call(null,opts)));return cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"map","map",1371690461),g_map);
});
om_hospital_finder.core.t12115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12117){var self__ = this;
var _12117__$1 = this;return self__.meta12116;
});
om_hospital_finder.core.t12115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12117,meta12116__$1){var self__ = this;
var _12117__$1 = this;return (new om_hospital_finder.core.t12115(self__.owner,self__.app,self__.map_view,meta12116__$1));
});
om_hospital_finder.core.__GT_t12115 = (function __GT_t12115(owner__$1,app__$1,map_view__$1,meta12116){return (new om_hospital_finder.core.t12115(owner__$1,app__$1,map_view__$1,meta12116));
});
}
return (new om_hospital_finder.core.t12115(owner,app,map_view,null));
});
om.core.root.call(null,om_hospital_finder.core.map_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("map-canvas")], null));
om_hospital_finder.core.hospital_item_view = (function hospital_item_view(place,owner){if(typeof om_hospital_finder.core.t12121 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t12121 = (function (owner,place,hospital_item_view,meta12122){
this.owner = owner;
this.place = place;
this.hospital_item_view = hospital_item_view;
this.meta12122 = meta12122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t12121.cljs$lang$type = true;
om_hospital_finder.core.t12121.cljs$lang$ctorStr = "om-hospital-finder.core/t12121";
om_hospital_finder.core.t12121.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t12121");
});
om_hospital_finder.core.t12121.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t12121.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "hospital-list-item"},React.DOM.a({"href": ("/place/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.place)))},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.place)),React.DOM.br(null,null),("Average rating: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(self__.place))),om.dom.input.call(null,{"type": "checkbox", "checked": new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(self__.place), "value": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.place), "onClick": ((function (___$1){
return (function (){return om.core.transact_BANG_.call(null,self__.place,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checked","checked",-50955819)], null),cljs.core.not);
});})(___$1))
, "name": ("place-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.place))), "className": "check-compare pull-right", "id": ("check-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.place)))},null));
});
om_hospital_finder.core.t12121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12123){var self__ = this;
var _12123__$1 = this;return self__.meta12122;
});
om_hospital_finder.core.t12121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12123,meta12122__$1){var self__ = this;
var _12123__$1 = this;return (new om_hospital_finder.core.t12121(self__.owner,self__.place,self__.hospital_item_view,meta12122__$1));
});
om_hospital_finder.core.__GT_t12121 = (function __GT_t12121(owner__$1,place__$1,hospital_item_view__$1,meta12122){return (new om_hospital_finder.core.t12121(owner__$1,place__$1,hospital_item_view__$1,meta12122));
});
}
return (new om_hospital_finder.core.t12121(owner,place,hospital_item_view,null));
});
om_hospital_finder.core.list_hospitals_view = (function list_hospitals_view(app,owner){if(typeof om_hospital_finder.core.t12127 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t12127 = (function (owner,app,list_hospitals_view,meta12128){
this.owner = owner;
this.app = app;
this.list_hospitals_view = list_hospitals_view;
this.meta12128 = meta12128;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t12127.cljs$lang$type = true;
om_hospital_finder.core.t12127.cljs$lang$ctorStr = "om-hospital-finder.core/t12127";
om_hospital_finder.core.t12127.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t12127");
});
om_hospital_finder.core.t12127.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t12127.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var places = cljs.core.filter.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(self__.app));return cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,om_hospital_finder.core.hospital_item_view,places));
});
om_hospital_finder.core.t12127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12129){var self__ = this;
var _12129__$1 = this;return self__.meta12128;
});
om_hospital_finder.core.t12127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12129,meta12128__$1){var self__ = this;
var _12129__$1 = this;return (new om_hospital_finder.core.t12127(self__.owner,self__.app,self__.list_hospitals_view,meta12128__$1));
});
om_hospital_finder.core.__GT_t12127 = (function __GT_t12127(owner__$1,app__$1,list_hospitals_view__$1,meta12128){return (new om_hospital_finder.core.t12127(owner__$1,app__$1,list_hospitals_view__$1,meta12128));
});
}
return (new om_hospital_finder.core.t12127(owner,app,list_hospitals_view,null));
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
om_hospital_finder.core.search_view = (function search_view(app,owner){if(typeof om_hospital_finder.core.t12135 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t12135 = (function (owner,app,search_view,meta12136){
this.owner = owner;
this.app = app;
this.search_view = search_view;
this.meta12136 = meta12136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t12135.cljs$lang$type = true;
om_hospital_finder.core.t12135.cljs$lang$ctorStr = "om-hospital-finder.core/t12135";
om_hospital_finder.core.t12135.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t12135");
});
om_hospital_finder.core.t12135.prototype.om$core$IRenderState$ = true;
om_hospital_finder.core.t12135.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__12130_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"query","query",-1288509510),p1__12130_SHARP_.target.value);
});})(___$1))
, "maxLength": (240), "id": "seach", "onKeyUp": ((function (___$1){
return (function (p1__12131_SHARP_){if(cljs.core._EQ_.call(null,p1__12131_SHARP_.keyCode,(13)))
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
om_hospital_finder.core.t12135.prototype.om$core$IInitState$ = true;
om_hospital_finder.core.t12135.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),""], null);
});
om_hospital_finder.core.t12135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12137){var self__ = this;
var _12137__$1 = this;return self__.meta12136;
});
om_hospital_finder.core.t12135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12137,meta12136__$1){var self__ = this;
var _12137__$1 = this;return (new om_hospital_finder.core.t12135(self__.owner,self__.app,self__.search_view,meta12136__$1));
});
om_hospital_finder.core.__GT_t12135 = (function __GT_t12135(owner__$1,app__$1,search_view__$1,meta12136){return (new om_hospital_finder.core.t12135(owner__$1,app__$1,search_view__$1,meta12136));
});
}
return (new om_hospital_finder.core.t12135(owner,app,search_view,null));
});
om.core.root.call(null,om_hospital_finder.core.search_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("tfnewsearch")], null));
om_hospital_finder.core.bounds_changed = (function bounds_changed(){var g_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state));var seq__12144 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state))));var chunk__12145 = null;var count__12146 = (0);var i__12147 = (0);while(true){
if((i__12147 < count__12146))
{var vec__12148 = cljs.core._nth.call(null,chunk__12145,i__12147);var i = cljs.core.nth.call(null,vec__12148,(0),null);var place = cljs.core.nth.call(null,vec__12148,(1),null);var marker_12150 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(place);var pos_12151 = marker_12150.getPosition();var visible_12152 = g_map.getBounds().contains(pos_12151);cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),visible_12152);
if(cljs.core.not.call(null,visible_12152))
{cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"checked","checked",-50955819)], null),false);
} else
{}
{
var G__12153 = seq__12144;
var G__12154 = chunk__12145;
var G__12155 = count__12146;
var G__12156 = (i__12147 + (1));
seq__12144 = G__12153;
chunk__12145 = G__12154;
count__12146 = G__12155;
i__12147 = G__12156;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12144);if(temp__4126__auto__)
{var seq__12144__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12144__$1))
{var c__4300__auto__ = cljs.core.chunk_first.call(null,seq__12144__$1);{
var G__12157 = cljs.core.chunk_rest.call(null,seq__12144__$1);
var G__12158 = c__4300__auto__;
var G__12159 = cljs.core.count.call(null,c__4300__auto__);
var G__12160 = (0);
seq__12144 = G__12157;
chunk__12145 = G__12158;
count__12146 = G__12159;
i__12147 = G__12160;
continue;
}
} else
{var vec__12149 = cljs.core.first.call(null,seq__12144__$1);var i = cljs.core.nth.call(null,vec__12149,(0),null);var place = cljs.core.nth.call(null,vec__12149,(1),null);var marker_12161 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(place);var pos_12162 = marker_12161.getPosition();var visible_12163 = g_map.getBounds().contains(pos_12162);cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),visible_12163);
if(cljs.core.not.call(null,visible_12163))
{cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"checked","checked",-50955819)], null),false);
} else
{}
{
var G__12164 = cljs.core.next.call(null,seq__12144__$1);
var G__12165 = null;
var G__12166 = (0);
var G__12167 = (0);
seq__12144 = G__12164;
chunk__12145 = G__12165;
count__12146 = G__12166;
i__12147 = G__12167;
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
om_hospital_finder.core.places_callback = (function places_callback(response){var v = cljs.core.js__GT_clj.call(null,response.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);var g_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state));var seq__12173_12177 = cljs.core.seq.call(null,v);var chunk__12174_12178 = null;var count__12175_12179 = (0);var i__12176_12180 = (0);while(true){
if((i__12176_12180 < count__12175_12179))
{var place_12181 = cljs.core._nth.call(null,chunk__12174_12178,i__12176_12180);var info_12182 = (new google.maps.InfoWindow({"content": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_12181)}));var marker_12183 = (new google.maps.Marker({"map": g_map, "position": (new google.maps.LatLng(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(place_12181),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(place_12181)))}));cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),((function (seq__12173_12177,chunk__12174_12178,count__12175_12179,i__12176_12180,info_12182,marker_12183,place_12181,v,g_map){
return (function (p1__12168_SHARP_){return cljs.core.conj.call(null,p1__12168_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,place_12181,new cljs.core.Keyword(null,"marker","marker",865118313),marker_12183),new cljs.core.Keyword(null,"visible","visible",-1024216805),true),new cljs.core.Keyword(null,"checked","checked",-50955819),false));
});})(seq__12173_12177,chunk__12174_12178,count__12175_12179,i__12176_12180,info_12182,marker_12183,place_12181,v,g_map))
);
{
var G__12184 = seq__12173_12177;
var G__12185 = chunk__12174_12178;
var G__12186 = count__12175_12179;
var G__12187 = (i__12176_12180 + (1));
seq__12173_12177 = G__12184;
chunk__12174_12178 = G__12185;
count__12175_12179 = G__12186;
i__12176_12180 = G__12187;
continue;
}
} else
{var temp__4126__auto___12188 = cljs.core.seq.call(null,seq__12173_12177);if(temp__4126__auto___12188)
{var seq__12173_12189__$1 = temp__4126__auto___12188;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12173_12189__$1))
{var c__4300__auto___12190 = cljs.core.chunk_first.call(null,seq__12173_12189__$1);{
var G__12191 = cljs.core.chunk_rest.call(null,seq__12173_12189__$1);
var G__12192 = c__4300__auto___12190;
var G__12193 = cljs.core.count.call(null,c__4300__auto___12190);
var G__12194 = (0);
seq__12173_12177 = G__12191;
chunk__12174_12178 = G__12192;
count__12175_12179 = G__12193;
i__12176_12180 = G__12194;
continue;
}
} else
{var place_12195 = cljs.core.first.call(null,seq__12173_12189__$1);var info_12196 = (new google.maps.InfoWindow({"content": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_12195)}));var marker_12197 = (new google.maps.Marker({"map": g_map, "position": (new google.maps.LatLng(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(place_12195),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(place_12195)))}));cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),((function (seq__12173_12177,chunk__12174_12178,count__12175_12179,i__12176_12180,info_12196,marker_12197,place_12195,seq__12173_12189__$1,temp__4126__auto___12188,v,g_map){
return (function (p1__12168_SHARP_){return cljs.core.conj.call(null,p1__12168_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,place_12195,new cljs.core.Keyword(null,"marker","marker",865118313),marker_12197),new cljs.core.Keyword(null,"visible","visible",-1024216805),true),new cljs.core.Keyword(null,"checked","checked",-50955819),false));
});})(seq__12173_12177,chunk__12174_12178,count__12175_12179,i__12176_12180,info_12196,marker_12197,place_12195,seq__12173_12189__$1,temp__4126__auto___12188,v,g_map))
);
{
var G__12198 = cljs.core.next.call(null,seq__12173_12189__$1);
var G__12199 = null;
var G__12200 = (0);
var G__12201 = (0);
seq__12173_12177 = G__12198;
chunk__12174_12178 = G__12199;
count__12175_12179 = G__12200;
i__12176_12180 = G__12201;
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