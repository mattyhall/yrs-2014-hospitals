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
om_hospital_finder.core.errors_view = (function errors_view(app,owner){if(typeof om_hospital_finder.core.t14556 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t14556 = (function (owner,app,errors_view,meta14557){
this.owner = owner;
this.app = app;
this.errors_view = errors_view;
this.meta14557 = meta14557;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t14556.cljs$lang$type = true;
om_hospital_finder.core.t14556.cljs$lang$ctorStr = "om-hospital-finder.core/t14556";
om_hospital_finder.core.t14556.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t14556");
});
om_hospital_finder.core.t14556.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t14556.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$1){
return (function (p1__14552_SHARP_){return React.DOM.div({"className": "alert alert-danger"},p1__14552_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state))));
});
om_hospital_finder.core.t14556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14558){var self__ = this;
var _14558__$1 = this;return self__.meta14557;
});
om_hospital_finder.core.t14556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14558,meta14557__$1){var self__ = this;
var _14558__$1 = this;return (new om_hospital_finder.core.t14556(self__.owner,self__.app,self__.errors_view,meta14557__$1));
});
om_hospital_finder.core.__GT_t14556 = (function __GT_t14556(owner__$1,app__$1,errors_view__$1,meta14557){return (new om_hospital_finder.core.t14556(owner__$1,app__$1,errors_view__$1,meta14557));
});
}
return (new om_hospital_finder.core.t14556(owner,app,errors_view,null));
});
om.core.root.call(null,om_hospital_finder.core.errors_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("errors")], null));
om_hospital_finder.core.map_view = (function map_view(app,owner){if(typeof om_hospital_finder.core.t14562 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t14562 = (function (owner,app,map_view,meta14563){
this.owner = owner;
this.app = app;
this.map_view = map_view;
this.meta14563 = meta14563;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t14562.cljs$lang$type = true;
om_hospital_finder.core.t14562.cljs$lang$ctorStr = "om-hospital-finder.core/t14562";
om_hospital_finder.core.t14562.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t14562");
});
om_hospital_finder.core.t14562.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t14562.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,null);
});
om_hospital_finder.core.t14562.prototype.om$core$IWillMount$ = true;
om_hospital_finder.core.t14562.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),(new google.maps.LatLng(50.375456,-4.142656)),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(10)], null);var g_map = (new google.maps.Map(document.getElementById("map-canvas"),cljs.core.clj__GT_js.call(null,opts)));return cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"map","map",1371690461),g_map);
});
om_hospital_finder.core.t14562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14564){var self__ = this;
var _14564__$1 = this;return self__.meta14563;
});
om_hospital_finder.core.t14562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14564,meta14563__$1){var self__ = this;
var _14564__$1 = this;return (new om_hospital_finder.core.t14562(self__.owner,self__.app,self__.map_view,meta14563__$1));
});
om_hospital_finder.core.__GT_t14562 = (function __GT_t14562(owner__$1,app__$1,map_view__$1,meta14563){return (new om_hospital_finder.core.t14562(owner__$1,app__$1,map_view__$1,meta14563));
});
}
return (new om_hospital_finder.core.t14562(owner,app,map_view,null));
});
om.core.root.call(null,om_hospital_finder.core.map_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("map-canvas")], null));
om_hospital_finder.core.hospital_item_view = (function hospital_item_view(place,owner){if(typeof om_hospital_finder.core.t14568 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t14568 = (function (owner,place,hospital_item_view,meta14569){
this.owner = owner;
this.place = place;
this.hospital_item_view = hospital_item_view;
this.meta14569 = meta14569;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t14568.cljs$lang$type = true;
om_hospital_finder.core.t14568.cljs$lang$ctorStr = "om-hospital-finder.core/t14568";
om_hospital_finder.core.t14568.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t14568");
});
om_hospital_finder.core.t14568.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t14568.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "hospital-list-item"},React.DOM.a({"href": ("/place/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.place)))},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.place)),React.DOM.br(null,null),("Average rating: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(self__.place))),om.dom.input.call(null,{"type": "checkbox", "checked": new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(self__.place), "value": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.place), "onClick": ((function (___$1){
return (function (){return om.core.transact_BANG_.call(null,self__.place,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checked","checked",-50955819)], null),cljs.core.not);
});})(___$1))
, "name": ("place-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.place))), "className": "check-compare pull-right", "id": ("check-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.place)))},null));
});
om_hospital_finder.core.t14568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14570){var self__ = this;
var _14570__$1 = this;return self__.meta14569;
});
om_hospital_finder.core.t14568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14570,meta14569__$1){var self__ = this;
var _14570__$1 = this;return (new om_hospital_finder.core.t14568(self__.owner,self__.place,self__.hospital_item_view,meta14569__$1));
});
om_hospital_finder.core.__GT_t14568 = (function __GT_t14568(owner__$1,place__$1,hospital_item_view__$1,meta14569){return (new om_hospital_finder.core.t14568(owner__$1,place__$1,hospital_item_view__$1,meta14569));
});
}
return (new om_hospital_finder.core.t14568(owner,place,hospital_item_view,null));
});
om_hospital_finder.core.compare_form_submit = (function compare_form_submit(){var selected = cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state))));if((selected <= (1)))
{cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Please select two or more places to compare"], null));
return false;
} else
{return null;
}
});
om_hospital_finder.core.list_hospitals_view = (function list_hospitals_view(app,owner){if(typeof om_hospital_finder.core.t14574 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t14574 = (function (owner,app,list_hospitals_view,meta14575){
this.owner = owner;
this.app = app;
this.list_hospitals_view = list_hospitals_view;
this.meta14575 = meta14575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t14574.cljs$lang$type = true;
om_hospital_finder.core.t14574.cljs$lang$ctorStr = "om-hospital-finder.core/t14574";
om_hospital_finder.core.t14574.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t14574");
});
om_hospital_finder.core.t14574.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t14574.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var places = cljs.core.filter.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(self__.app));return React.DOM.form({"onSubmit": ((function (places,___$1){
return (function (){return om_hospital_finder.core.compare_form_submit.call(null);
});})(places,___$1))
, "method": "post", "action": "/compare", "id": "compare-form"},cljs.core.apply.call(null,om.dom.div,{"id": "hospitals-list"},om.core.build_all.call(null,om_hospital_finder.core.hospital_item_view,places)),React.DOM.button({"className": "btn btn-default navbar-btn submitbutton"},"Compare"));
});
om_hospital_finder.core.t14574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14576){var self__ = this;
var _14576__$1 = this;return self__.meta14575;
});
om_hospital_finder.core.t14574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14576,meta14575__$1){var self__ = this;
var _14576__$1 = this;return (new om_hospital_finder.core.t14574(self__.owner,self__.app,self__.list_hospitals_view,meta14575__$1));
});
om_hospital_finder.core.__GT_t14574 = (function __GT_t14574(owner__$1,app__$1,list_hospitals_view__$1,meta14575){return (new om_hospital_finder.core.t14574(owner__$1,app__$1,list_hospitals_view__$1,meta14575));
});
}
return (new om_hospital_finder.core.t14574(owner,app,list_hospitals_view,null));
});
om.core.root.call(null,om_hospital_finder.core.list_hospitals_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("hospitals-list-div")], null));
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
om_hospital_finder.core.search_view = (function search_view(app,owner){if(typeof om_hospital_finder.core.t14582 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t14582 = (function (owner,app,search_view,meta14583){
this.owner = owner;
this.app = app;
this.search_view = search_view;
this.meta14583 = meta14583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t14582.cljs$lang$type = true;
om_hospital_finder.core.t14582.cljs$lang$ctorStr = "om-hospital-finder.core/t14582";
om_hospital_finder.core.t14582.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t14582");
});
om_hospital_finder.core.t14582.prototype.om$core$IRenderState$ = true;
om_hospital_finder.core.t14582.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__14577_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"query","query",-1288509510),p1__14577_SHARP_.target.value);
});})(___$1))
, "maxLength": (240), "id": "seach", "onKeyUp": ((function (___$1){
return (function (p1__14578_SHARP_){if(cljs.core._EQ_.call(null,p1__14578_SHARP_.keyCode,(13)))
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
om_hospital_finder.core.t14582.prototype.om$core$IInitState$ = true;
om_hospital_finder.core.t14582.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),""], null);
});
om_hospital_finder.core.t14582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14584){var self__ = this;
var _14584__$1 = this;return self__.meta14583;
});
om_hospital_finder.core.t14582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14584,meta14583__$1){var self__ = this;
var _14584__$1 = this;return (new om_hospital_finder.core.t14582(self__.owner,self__.app,self__.search_view,meta14583__$1));
});
om_hospital_finder.core.__GT_t14582 = (function __GT_t14582(owner__$1,app__$1,search_view__$1,meta14583){return (new om_hospital_finder.core.t14582(owner__$1,app__$1,search_view__$1,meta14583));
});
}
return (new om_hospital_finder.core.t14582(owner,app,search_view,null));
});
om.core.root.call(null,om_hospital_finder.core.search_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("tfnewsearch")], null));
om_hospital_finder.core.bounds_changed = (function bounds_changed(){var g_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state));var seq__14591 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state))));var chunk__14592 = null;var count__14593 = (0);var i__14594 = (0);while(true){
if((i__14594 < count__14593))
{var vec__14595 = cljs.core._nth.call(null,chunk__14592,i__14594);var i = cljs.core.nth.call(null,vec__14595,(0),null);var place = cljs.core.nth.call(null,vec__14595,(1),null);var marker_14597 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(place);var pos_14598 = marker_14597.getPosition();var visible_14599 = g_map.getBounds().contains(pos_14598);cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),visible_14599);
if(cljs.core.not.call(null,visible_14599))
{cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"checked","checked",-50955819)], null),false);
} else
{}
{
var G__14600 = seq__14591;
var G__14601 = chunk__14592;
var G__14602 = count__14593;
var G__14603 = (i__14594 + (1));
seq__14591 = G__14600;
chunk__14592 = G__14601;
count__14593 = G__14602;
i__14594 = G__14603;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14591);if(temp__4126__auto__)
{var seq__14591__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14591__$1))
{var c__4300__auto__ = cljs.core.chunk_first.call(null,seq__14591__$1);{
var G__14604 = cljs.core.chunk_rest.call(null,seq__14591__$1);
var G__14605 = c__4300__auto__;
var G__14606 = cljs.core.count.call(null,c__4300__auto__);
var G__14607 = (0);
seq__14591 = G__14604;
chunk__14592 = G__14605;
count__14593 = G__14606;
i__14594 = G__14607;
continue;
}
} else
{var vec__14596 = cljs.core.first.call(null,seq__14591__$1);var i = cljs.core.nth.call(null,vec__14596,(0),null);var place = cljs.core.nth.call(null,vec__14596,(1),null);var marker_14608 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(place);var pos_14609 = marker_14608.getPosition();var visible_14610 = g_map.getBounds().contains(pos_14609);cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),visible_14610);
if(cljs.core.not.call(null,visible_14610))
{cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"checked","checked",-50955819)], null),false);
} else
{}
{
var G__14611 = cljs.core.next.call(null,seq__14591__$1);
var G__14612 = null;
var G__14613 = (0);
var G__14614 = (0);
seq__14591 = G__14611;
chunk__14592 = G__14612;
count__14593 = G__14613;
i__14594 = G__14614;
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
om_hospital_finder.core.places_callback = (function places_callback(response){var v = cljs.core.js__GT_clj.call(null,response.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);var g_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state));var seq__14620_14624 = cljs.core.seq.call(null,v);var chunk__14621_14625 = null;var count__14622_14626 = (0);var i__14623_14627 = (0);while(true){
if((i__14623_14627 < count__14622_14626))
{var place_14628 = cljs.core._nth.call(null,chunk__14621_14625,i__14623_14627);var info_14629 = (new google.maps.InfoWindow({"content": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_14628)}));var marker_14630 = (new google.maps.Marker({"map": g_map, "position": (new google.maps.LatLng(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(place_14628),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(place_14628)))}));cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),((function (seq__14620_14624,chunk__14621_14625,count__14622_14626,i__14623_14627,info_14629,marker_14630,place_14628,v,g_map){
return (function (p1__14615_SHARP_){return cljs.core.conj.call(null,p1__14615_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,place_14628,new cljs.core.Keyword(null,"marker","marker",865118313),marker_14630),new cljs.core.Keyword(null,"visible","visible",-1024216805),true),new cljs.core.Keyword(null,"checked","checked",-50955819),false));
});})(seq__14620_14624,chunk__14621_14625,count__14622_14626,i__14623_14627,info_14629,marker_14630,place_14628,v,g_map))
);
{
var G__14631 = seq__14620_14624;
var G__14632 = chunk__14621_14625;
var G__14633 = count__14622_14626;
var G__14634 = (i__14623_14627 + (1));
seq__14620_14624 = G__14631;
chunk__14621_14625 = G__14632;
count__14622_14626 = G__14633;
i__14623_14627 = G__14634;
continue;
}
} else
{var temp__4126__auto___14635 = cljs.core.seq.call(null,seq__14620_14624);if(temp__4126__auto___14635)
{var seq__14620_14636__$1 = temp__4126__auto___14635;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14620_14636__$1))
{var c__4300__auto___14637 = cljs.core.chunk_first.call(null,seq__14620_14636__$1);{
var G__14638 = cljs.core.chunk_rest.call(null,seq__14620_14636__$1);
var G__14639 = c__4300__auto___14637;
var G__14640 = cljs.core.count.call(null,c__4300__auto___14637);
var G__14641 = (0);
seq__14620_14624 = G__14638;
chunk__14621_14625 = G__14639;
count__14622_14626 = G__14640;
i__14623_14627 = G__14641;
continue;
}
} else
{var place_14642 = cljs.core.first.call(null,seq__14620_14636__$1);var info_14643 = (new google.maps.InfoWindow({"content": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_14642)}));var marker_14644 = (new google.maps.Marker({"map": g_map, "position": (new google.maps.LatLng(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(place_14642),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(place_14642)))}));cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),((function (seq__14620_14624,chunk__14621_14625,count__14622_14626,i__14623_14627,info_14643,marker_14644,place_14642,seq__14620_14636__$1,temp__4126__auto___14635,v,g_map){
return (function (p1__14615_SHARP_){return cljs.core.conj.call(null,p1__14615_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,place_14642,new cljs.core.Keyword(null,"marker","marker",865118313),marker_14644),new cljs.core.Keyword(null,"visible","visible",-1024216805),true),new cljs.core.Keyword(null,"checked","checked",-50955819),false));
});})(seq__14620_14624,chunk__14621_14625,count__14622_14626,i__14623_14627,info_14643,marker_14644,place_14642,seq__14620_14636__$1,temp__4126__auto___14635,v,g_map))
);
{
var G__14645 = cljs.core.next.call(null,seq__14620_14636__$1);
var G__14646 = null;
var G__14647 = (0);
var G__14648 = (0);
seq__14620_14624 = G__14645;
chunk__14621_14625 = G__14646;
count__14622_14626 = G__14647;
i__14623_14627 = G__14648;
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