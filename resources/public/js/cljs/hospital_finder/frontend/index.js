// Compiled by ClojureScript 0.0-2280
goog.provide('hospital_finder.frontend.index');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
hospital_finder.frontend.index.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"map","map",1371690461),null,new cljs.core.Keyword(null,"places","places",1043491706),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY], null));
hospital_finder.frontend.index.errors_view = (function errors_view(app,owner){if(typeof hospital_finder.frontend.index.t5766 !== 'undefined')
{} else
{
/**
* @constructor
*/
hospital_finder.frontend.index.t5766 = (function (owner,app,errors_view,meta5767){
this.owner = owner;
this.app = app;
this.errors_view = errors_view;
this.meta5767 = meta5767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hospital_finder.frontend.index.t5766.cljs$lang$type = true;
hospital_finder.frontend.index.t5766.cljs$lang$ctorStr = "hospital-finder.frontend.index/t5766";
hospital_finder.frontend.index.t5766.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"hospital-finder.frontend.index/t5766");
});
hospital_finder.frontend.index.t5766.prototype.om$core$IRender$ = true;
hospital_finder.frontend.index.t5766.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$1){
return (function (p1__5762_SHARP_){return React.DOM.div({"className": "alert alert-danger"},p1__5762_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hospital_finder.frontend.index.app_state))));
});
hospital_finder.frontend.index.t5766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5768){var self__ = this;
var _5768__$1 = this;return self__.meta5767;
});
hospital_finder.frontend.index.t5766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5768,meta5767__$1){var self__ = this;
var _5768__$1 = this;return (new hospital_finder.frontend.index.t5766(self__.owner,self__.app,self__.errors_view,meta5767__$1));
});
hospital_finder.frontend.index.__GT_t5766 = (function __GT_t5766(owner__$1,app__$1,errors_view__$1,meta5767){return (new hospital_finder.frontend.index.t5766(owner__$1,app__$1,errors_view__$1,meta5767));
});
}
return (new hospital_finder.frontend.index.t5766(owner,app,errors_view,null));
});
om.core.root.call(null,hospital_finder.frontend.index.errors_view,hospital_finder.frontend.index.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("errors")], null));
hospital_finder.frontend.index.map_view = (function map_view(app,owner){if(typeof hospital_finder.frontend.index.t5772 !== 'undefined')
{} else
{
/**
* @constructor
*/
hospital_finder.frontend.index.t5772 = (function (owner,app,map_view,meta5773){
this.owner = owner;
this.app = app;
this.map_view = map_view;
this.meta5773 = meta5773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hospital_finder.frontend.index.t5772.cljs$lang$type = true;
hospital_finder.frontend.index.t5772.cljs$lang$ctorStr = "hospital-finder.frontend.index/t5772";
hospital_finder.frontend.index.t5772.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"hospital-finder.frontend.index/t5772");
});
hospital_finder.frontend.index.t5772.prototype.om$core$IRender$ = true;
hospital_finder.frontend.index.t5772.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,null);
});
hospital_finder.frontend.index.t5772.prototype.om$core$IWillMount$ = true;
hospital_finder.frontend.index.t5772.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),(new google.maps.LatLng(50.375456,-4.142656)),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(10)], null);var g_map = (new google.maps.Map(document.getElementById("map-canvas"),cljs.core.clj__GT_js.call(null,opts)));return cljs.core.swap_BANG_.call(null,hospital_finder.frontend.index.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"map","map",1371690461),g_map);
});
hospital_finder.frontend.index.t5772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5774){var self__ = this;
var _5774__$1 = this;return self__.meta5773;
});
hospital_finder.frontend.index.t5772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5774,meta5773__$1){var self__ = this;
var _5774__$1 = this;return (new hospital_finder.frontend.index.t5772(self__.owner,self__.app,self__.map_view,meta5773__$1));
});
hospital_finder.frontend.index.__GT_t5772 = (function __GT_t5772(owner__$1,app__$1,map_view__$1,meta5773){return (new hospital_finder.frontend.index.t5772(owner__$1,app__$1,map_view__$1,meta5773));
});
}
return (new hospital_finder.frontend.index.t5772(owner,app,map_view,null));
});
om.core.root.call(null,hospital_finder.frontend.index.map_view,hospital_finder.frontend.index.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("map-canvas")], null));
hospital_finder.frontend.index.hospital_item_view = (function hospital_item_view(place,owner){if(typeof hospital_finder.frontend.index.t5778 !== 'undefined')
{} else
{
/**
* @constructor
*/
hospital_finder.frontend.index.t5778 = (function (owner,place,hospital_item_view,meta5779){
this.owner = owner;
this.place = place;
this.hospital_item_view = hospital_item_view;
this.meta5779 = meta5779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hospital_finder.frontend.index.t5778.cljs$lang$type = true;
hospital_finder.frontend.index.t5778.cljs$lang$ctorStr = "hospital-finder.frontend.index/t5778";
hospital_finder.frontend.index.t5778.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"hospital-finder.frontend.index/t5778");
});
hospital_finder.frontend.index.t5778.prototype.om$core$IRender$ = true;
hospital_finder.frontend.index.t5778.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "hospital-list-item"},React.DOM.a({"href": ("/place/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.place)))},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.place)),React.DOM.br(null,null),("Average rating: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(self__.place))),om.dom.input.call(null,{"type": "checkbox", "checked": new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(self__.place), "value": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.place), "onClick": ((function (___$1){
return (function (){return om.core.transact_BANG_.call(null,self__.place,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checked","checked",-50955819)], null),cljs.core.not);
});})(___$1))
, "name": ("place-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.place))), "className": "check-compare pull-right", "id": ("check-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.place)))},null));
});
hospital_finder.frontend.index.t5778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5780){var self__ = this;
var _5780__$1 = this;return self__.meta5779;
});
hospital_finder.frontend.index.t5778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5780,meta5779__$1){var self__ = this;
var _5780__$1 = this;return (new hospital_finder.frontend.index.t5778(self__.owner,self__.place,self__.hospital_item_view,meta5779__$1));
});
hospital_finder.frontend.index.__GT_t5778 = (function __GT_t5778(owner__$1,place__$1,hospital_item_view__$1,meta5779){return (new hospital_finder.frontend.index.t5778(owner__$1,place__$1,hospital_item_view__$1,meta5779));
});
}
return (new hospital_finder.frontend.index.t5778(owner,place,hospital_item_view,null));
});
hospital_finder.frontend.index.compare_form_submit = (function compare_form_submit(){var selected = cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hospital_finder.frontend.index.app_state))));if((selected <= (1)))
{cljs.core.swap_BANG_.call(null,hospital_finder.frontend.index.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Please select two or more places to compare"], null));
return false;
} else
{return null;
}
});
hospital_finder.frontend.index.list_hospitals_view = (function list_hospitals_view(app,owner){if(typeof hospital_finder.frontend.index.t5784 !== 'undefined')
{} else
{
/**
* @constructor
*/
hospital_finder.frontend.index.t5784 = (function (owner,app,list_hospitals_view,meta5785){
this.owner = owner;
this.app = app;
this.list_hospitals_view = list_hospitals_view;
this.meta5785 = meta5785;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hospital_finder.frontend.index.t5784.cljs$lang$type = true;
hospital_finder.frontend.index.t5784.cljs$lang$ctorStr = "hospital-finder.frontend.index/t5784";
hospital_finder.frontend.index.t5784.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"hospital-finder.frontend.index/t5784");
});
hospital_finder.frontend.index.t5784.prototype.om$core$IRender$ = true;
hospital_finder.frontend.index.t5784.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var places = cljs.core.filter.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(self__.app));return React.DOM.form({"onSubmit": ((function (places,___$1){
return (function (){return hospital_finder.frontend.index.compare_form_submit.call(null);
});})(places,___$1))
, "method": "post", "action": "/compare", "id": "compare-form"},cljs.core.apply.call(null,om.dom.div,{"id": "hospitals-list"},om.core.build_all.call(null,hospital_finder.frontend.index.hospital_item_view,places)),React.DOM.button({"className": "btn btn-default navbar-btn submitbutton"},"Compare"));
});
hospital_finder.frontend.index.t5784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5786){var self__ = this;
var _5786__$1 = this;return self__.meta5785;
});
hospital_finder.frontend.index.t5784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5786,meta5785__$1){var self__ = this;
var _5786__$1 = this;return (new hospital_finder.frontend.index.t5784(self__.owner,self__.app,self__.list_hospitals_view,meta5785__$1));
});
hospital_finder.frontend.index.__GT_t5784 = (function __GT_t5784(owner__$1,app__$1,list_hospitals_view__$1,meta5785){return (new hospital_finder.frontend.index.t5784(owner__$1,app__$1,list_hospitals_view__$1,meta5785));
});
}
return (new hospital_finder.frontend.index.t5784(owner,app,list_hospitals_view,null));
});
om.core.root.call(null,hospital_finder.frontend.index.list_hospitals_view,hospital_finder.frontend.index.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("hospitals-list-div")], null));
hospital_finder.frontend.index.search_request_callback = (function search_request_callback(response){var res = cljs.core.js__GT_clj.call(null,response.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(res),"ok"))
{var g_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hospital_finder.frontend.index.app_state));var latlng = (new google.maps.LatLng(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(res)));g_map.panTo(latlng);
return g_map.setZoom((12));
} else
{return cljs.core.swap_BANG_.call(null,hospital_finder.frontend.index.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),((function (res){
return (function (_){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No results found"], null);
});})(res))
);
}
});
hospital_finder.frontend.index.search_callback = (function search_callback(owner){if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"query","query",-1288509510)))))
{return cljs.core.swap_BANG_.call(null,hospital_finder.frontend.index.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),(function (_){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Please enter a valid search"], null);
}));
} else
{return goog.net.XhrIo.send(("/placelocation?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"query","query",-1288509510)))),hospital_finder.frontend.index.search_request_callback);
}
});
hospital_finder.frontend.index.search_view = (function search_view(app,owner){if(typeof hospital_finder.frontend.index.t5792 !== 'undefined')
{} else
{
/**
* @constructor
*/
hospital_finder.frontend.index.t5792 = (function (owner,app,search_view,meta5793){
this.owner = owner;
this.app = app;
this.search_view = search_view;
this.meta5793 = meta5793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hospital_finder.frontend.index.t5792.cljs$lang$type = true;
hospital_finder.frontend.index.t5792.cljs$lang$ctorStr = "hospital-finder.frontend.index/t5792";
hospital_finder.frontend.index.t5792.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"hospital-finder.frontend.index/t5792");
});
hospital_finder.frontend.index.t5792.prototype.om$core$IRenderState$ = true;
hospital_finder.frontend.index.t5792.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__5787_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"query","query",-1288509510),p1__5787_SHARP_.target.value);
});})(___$1))
, "maxLength": (240), "id": "seach", "onKeyUp": ((function (___$1){
return (function (p1__5788_SHARP_){if(cljs.core._EQ_.call(null,p1__5788_SHARP_.keyCode,(13)))
{return hospital_finder.frontend.index.search_callback.call(null,self__.owner);
} else
{return null;
}
});})(___$1))
, "className": "col-md-11 tftextinput", "type": "text", "value": new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(state), "name": "q", "placeholder": "Please enter a location or a hospital"},null),om.dom.input.call(null,{"onClick": ((function (___$1){
return (function (){return hospital_finder.frontend.index.search_callback.call(null,self__.owner);
});})(___$1))
, "id": "search-btn", "className": "tfbutton", "value": "Search", "type": "submit"}));
});
hospital_finder.frontend.index.t5792.prototype.om$core$IInitState$ = true;
hospital_finder.frontend.index.t5792.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),""], null);
});
hospital_finder.frontend.index.t5792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5794){var self__ = this;
var _5794__$1 = this;return self__.meta5793;
});
hospital_finder.frontend.index.t5792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5794,meta5793__$1){var self__ = this;
var _5794__$1 = this;return (new hospital_finder.frontend.index.t5792(self__.owner,self__.app,self__.search_view,meta5793__$1));
});
hospital_finder.frontend.index.__GT_t5792 = (function __GT_t5792(owner__$1,app__$1,search_view__$1,meta5793){return (new hospital_finder.frontend.index.t5792(owner__$1,app__$1,search_view__$1,meta5793));
});
}
return (new hospital_finder.frontend.index.t5792(owner,app,search_view,null));
});
om.core.root.call(null,hospital_finder.frontend.index.search_view,hospital_finder.frontend.index.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("tfnewsearch")], null));
hospital_finder.frontend.index.bounds_changed = (function bounds_changed(){var g_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hospital_finder.frontend.index.app_state));var seq__5801 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hospital_finder.frontend.index.app_state))));var chunk__5802 = null;var count__5803 = (0);var i__5804 = (0);while(true){
if((i__5804 < count__5803))
{var vec__5805 = cljs.core._nth.call(null,chunk__5802,i__5804);var i = cljs.core.nth.call(null,vec__5805,(0),null);var place = cljs.core.nth.call(null,vec__5805,(1),null);var marker_5807 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(place);var pos_5808 = marker_5807.getPosition();var visible_5809 = g_map.getBounds().contains(pos_5808);cljs.core.swap_BANG_.call(null,hospital_finder.frontend.index.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),visible_5809);
if(cljs.core.not.call(null,visible_5809))
{cljs.core.swap_BANG_.call(null,hospital_finder.frontend.index.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"checked","checked",-50955819)], null),false);
} else
{}
{
var G__5810 = seq__5801;
var G__5811 = chunk__5802;
var G__5812 = count__5803;
var G__5813 = (i__5804 + (1));
seq__5801 = G__5810;
chunk__5802 = G__5811;
count__5803 = G__5812;
i__5804 = G__5813;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5801);if(temp__4126__auto__)
{var seq__5801__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5801__$1))
{var c__4300__auto__ = cljs.core.chunk_first.call(null,seq__5801__$1);{
var G__5814 = cljs.core.chunk_rest.call(null,seq__5801__$1);
var G__5815 = c__4300__auto__;
var G__5816 = cljs.core.count.call(null,c__4300__auto__);
var G__5817 = (0);
seq__5801 = G__5814;
chunk__5802 = G__5815;
count__5803 = G__5816;
i__5804 = G__5817;
continue;
}
} else
{var vec__5806 = cljs.core.first.call(null,seq__5801__$1);var i = cljs.core.nth.call(null,vec__5806,(0),null);var place = cljs.core.nth.call(null,vec__5806,(1),null);var marker_5818 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(place);var pos_5819 = marker_5818.getPosition();var visible_5820 = g_map.getBounds().contains(pos_5819);cljs.core.swap_BANG_.call(null,hospital_finder.frontend.index.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),visible_5820);
if(cljs.core.not.call(null,visible_5820))
{cljs.core.swap_BANG_.call(null,hospital_finder.frontend.index.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"checked","checked",-50955819)], null),false);
} else
{}
{
var G__5821 = cljs.core.next.call(null,seq__5801__$1);
var G__5822 = null;
var G__5823 = (0);
var G__5824 = (0);
seq__5801 = G__5821;
chunk__5802 = G__5822;
count__5803 = G__5823;
i__5804 = G__5824;
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
hospital_finder.frontend.index.places_callback = (function places_callback(response){var v = cljs.core.js__GT_clj.call(null,response.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);var g_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hospital_finder.frontend.index.app_state));var seq__5830_5834 = cljs.core.seq.call(null,v);var chunk__5831_5835 = null;var count__5832_5836 = (0);var i__5833_5837 = (0);while(true){
if((i__5833_5837 < count__5832_5836))
{var place_5838 = cljs.core._nth.call(null,chunk__5831_5835,i__5833_5837);var info_5839 = (new google.maps.InfoWindow({"content": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_5838)}));var marker_5840 = (new google.maps.Marker({"map": g_map, "position": (new google.maps.LatLng(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(place_5838),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(place_5838)))}));cljs.core.swap_BANG_.call(null,hospital_finder.frontend.index.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),((function (seq__5830_5834,chunk__5831_5835,count__5832_5836,i__5833_5837,info_5839,marker_5840,place_5838,v,g_map){
return (function (p1__5825_SHARP_){return cljs.core.conj.call(null,p1__5825_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,place_5838,new cljs.core.Keyword(null,"marker","marker",865118313),marker_5840),new cljs.core.Keyword(null,"visible","visible",-1024216805),true),new cljs.core.Keyword(null,"checked","checked",-50955819),false));
});})(seq__5830_5834,chunk__5831_5835,count__5832_5836,i__5833_5837,info_5839,marker_5840,place_5838,v,g_map))
);
{
var G__5841 = seq__5830_5834;
var G__5842 = chunk__5831_5835;
var G__5843 = count__5832_5836;
var G__5844 = (i__5833_5837 + (1));
seq__5830_5834 = G__5841;
chunk__5831_5835 = G__5842;
count__5832_5836 = G__5843;
i__5833_5837 = G__5844;
continue;
}
} else
{var temp__4126__auto___5845 = cljs.core.seq.call(null,seq__5830_5834);if(temp__4126__auto___5845)
{var seq__5830_5846__$1 = temp__4126__auto___5845;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5830_5846__$1))
{var c__4300__auto___5847 = cljs.core.chunk_first.call(null,seq__5830_5846__$1);{
var G__5848 = cljs.core.chunk_rest.call(null,seq__5830_5846__$1);
var G__5849 = c__4300__auto___5847;
var G__5850 = cljs.core.count.call(null,c__4300__auto___5847);
var G__5851 = (0);
seq__5830_5834 = G__5848;
chunk__5831_5835 = G__5849;
count__5832_5836 = G__5850;
i__5833_5837 = G__5851;
continue;
}
} else
{var place_5852 = cljs.core.first.call(null,seq__5830_5846__$1);var info_5853 = (new google.maps.InfoWindow({"content": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_5852)}));var marker_5854 = (new google.maps.Marker({"map": g_map, "position": (new google.maps.LatLng(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(place_5852),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(place_5852)))}));cljs.core.swap_BANG_.call(null,hospital_finder.frontend.index.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),((function (seq__5830_5834,chunk__5831_5835,count__5832_5836,i__5833_5837,info_5853,marker_5854,place_5852,seq__5830_5846__$1,temp__4126__auto___5845,v,g_map){
return (function (p1__5825_SHARP_){return cljs.core.conj.call(null,p1__5825_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,place_5852,new cljs.core.Keyword(null,"marker","marker",865118313),marker_5854),new cljs.core.Keyword(null,"visible","visible",-1024216805),true),new cljs.core.Keyword(null,"checked","checked",-50955819),false));
});})(seq__5830_5834,chunk__5831_5835,count__5832_5836,i__5833_5837,info_5853,marker_5854,place_5852,seq__5830_5846__$1,temp__4126__auto___5845,v,g_map))
);
{
var G__5855 = cljs.core.next.call(null,seq__5830_5846__$1);
var G__5856 = null;
var G__5857 = (0);
var G__5858 = (0);
seq__5830_5834 = G__5855;
chunk__5831_5835 = G__5856;
count__5832_5836 = G__5857;
i__5833_5837 = G__5858;
continue;
}
}
} else
{}
}
break;
}
google.maps.event.addListener.call(null,g_map,"bounds_changed",hospital_finder.frontend.index.bounds_changed);
return hospital_finder.frontend.index.bounds_changed.call(null);
});
goog.net.XhrIo.send("/getplaces",hospital_finder.frontend.index.places_callback);

//# sourceMappingURL=index.js.map