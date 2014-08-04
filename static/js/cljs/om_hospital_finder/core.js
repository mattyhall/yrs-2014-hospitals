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
om_hospital_finder.core.errors_view = (function errors_view(app,owner){if(typeof om_hospital_finder.core.t13780 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t13780 = (function (owner,app,errors_view,meta13781){
this.owner = owner;
this.app = app;
this.errors_view = errors_view;
this.meta13781 = meta13781;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t13780.cljs$lang$type = true;
om_hospital_finder.core.t13780.cljs$lang$ctorStr = "om-hospital-finder.core/t13780";
om_hospital_finder.core.t13780.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t13780");
});
om_hospital_finder.core.t13780.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t13780.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$1){
return (function (p1__13776_SHARP_){return React.DOM.div({"className": "alert alert-danger"},p1__13776_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state))));
});
om_hospital_finder.core.t13780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13782){var self__ = this;
var _13782__$1 = this;return self__.meta13781;
});
om_hospital_finder.core.t13780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13782,meta13781__$1){var self__ = this;
var _13782__$1 = this;return (new om_hospital_finder.core.t13780(self__.owner,self__.app,self__.errors_view,meta13781__$1));
});
om_hospital_finder.core.__GT_t13780 = (function __GT_t13780(owner__$1,app__$1,errors_view__$1,meta13781){return (new om_hospital_finder.core.t13780(owner__$1,app__$1,errors_view__$1,meta13781));
});
}
return (new om_hospital_finder.core.t13780(owner,app,errors_view,null));
});
om.core.root.call(null,om_hospital_finder.core.errors_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("errors")], null));
om_hospital_finder.core.map_view = (function map_view(app,owner){if(typeof om_hospital_finder.core.t13786 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t13786 = (function (owner,app,map_view,meta13787){
this.owner = owner;
this.app = app;
this.map_view = map_view;
this.meta13787 = meta13787;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t13786.cljs$lang$type = true;
om_hospital_finder.core.t13786.cljs$lang$ctorStr = "om-hospital-finder.core/t13786";
om_hospital_finder.core.t13786.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t13786");
});
om_hospital_finder.core.t13786.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t13786.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,null);
});
om_hospital_finder.core.t13786.prototype.om$core$IWillMount$ = true;
om_hospital_finder.core.t13786.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),(new google.maps.LatLng(50.375456,-4.142656)),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(10)], null);var g_map = (new google.maps.Map(document.getElementById("map-canvas"),cljs.core.clj__GT_js.call(null,opts)));return cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"map","map",1371690461),g_map);
});
om_hospital_finder.core.t13786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13788){var self__ = this;
var _13788__$1 = this;return self__.meta13787;
});
om_hospital_finder.core.t13786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13788,meta13787__$1){var self__ = this;
var _13788__$1 = this;return (new om_hospital_finder.core.t13786(self__.owner,self__.app,self__.map_view,meta13787__$1));
});
om_hospital_finder.core.__GT_t13786 = (function __GT_t13786(owner__$1,app__$1,map_view__$1,meta13787){return (new om_hospital_finder.core.t13786(owner__$1,app__$1,map_view__$1,meta13787));
});
}
return (new om_hospital_finder.core.t13786(owner,app,map_view,null));
});
om.core.root.call(null,om_hospital_finder.core.map_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("map-canvas")], null));
om_hospital_finder.core.hospital_item_view = (function hospital_item_view(place,owner){if(typeof om_hospital_finder.core.t13792 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t13792 = (function (owner,place,hospital_item_view,meta13793){
this.owner = owner;
this.place = place;
this.hospital_item_view = hospital_item_view;
this.meta13793 = meta13793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t13792.cljs$lang$type = true;
om_hospital_finder.core.t13792.cljs$lang$ctorStr = "om-hospital-finder.core/t13792";
om_hospital_finder.core.t13792.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t13792");
});
om_hospital_finder.core.t13792.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t13792.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "hospital-list-item"},React.DOM.a({"href": ("/place/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.place)))},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.place)),React.DOM.br(null,null),("Average rating: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(self__.place))),om.dom.input.call(null,{"type": "checkbox", "checked": new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(self__.place), "value": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.place), "onClick": ((function (___$1){
return (function (){return om.core.transact_BANG_.call(null,self__.place,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checked","checked",-50955819)], null),cljs.core.not);
});})(___$1))
, "name": ("place-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.place))), "className": "check-compare pull-right", "id": ("check-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.place)))},null));
});
om_hospital_finder.core.t13792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13794){var self__ = this;
var _13794__$1 = this;return self__.meta13793;
});
om_hospital_finder.core.t13792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13794,meta13793__$1){var self__ = this;
var _13794__$1 = this;return (new om_hospital_finder.core.t13792(self__.owner,self__.place,self__.hospital_item_view,meta13793__$1));
});
om_hospital_finder.core.__GT_t13792 = (function __GT_t13792(owner__$1,place__$1,hospital_item_view__$1,meta13793){return (new om_hospital_finder.core.t13792(owner__$1,place__$1,hospital_item_view__$1,meta13793));
});
}
return (new om_hospital_finder.core.t13792(owner,place,hospital_item_view,null));
});
om_hospital_finder.core.list_hospitals_view = (function list_hospitals_view(app,owner){if(typeof om_hospital_finder.core.t13798 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t13798 = (function (owner,app,list_hospitals_view,meta13799){
this.owner = owner;
this.app = app;
this.list_hospitals_view = list_hospitals_view;
this.meta13799 = meta13799;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t13798.cljs$lang$type = true;
om_hospital_finder.core.t13798.cljs$lang$ctorStr = "om-hospital-finder.core/t13798";
om_hospital_finder.core.t13798.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t13798");
});
om_hospital_finder.core.t13798.prototype.om$core$IRender$ = true;
om_hospital_finder.core.t13798.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var places = cljs.core.filter.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(self__.app));return React.DOM.form({"method": "post", "action": "/compare", "id": "compare-form"},cljs.core.apply.call(null,om.dom.div,{"id": "hospitals-list"},om.core.build_all.call(null,om_hospital_finder.core.hospital_item_view,places)),React.DOM.button({"className": "btn btn-default navbar-btn submitbutton"},"Compare"));
});
om_hospital_finder.core.t13798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13800){var self__ = this;
var _13800__$1 = this;return self__.meta13799;
});
om_hospital_finder.core.t13798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13800,meta13799__$1){var self__ = this;
var _13800__$1 = this;return (new om_hospital_finder.core.t13798(self__.owner,self__.app,self__.list_hospitals_view,meta13799__$1));
});
om_hospital_finder.core.__GT_t13798 = (function __GT_t13798(owner__$1,app__$1,list_hospitals_view__$1,meta13799){return (new om_hospital_finder.core.t13798(owner__$1,app__$1,list_hospitals_view__$1,meta13799));
});
}
return (new om_hospital_finder.core.t13798(owner,app,list_hospitals_view,null));
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
om_hospital_finder.core.search_view = (function search_view(app,owner){if(typeof om_hospital_finder.core.t13806 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_hospital_finder.core.t13806 = (function (owner,app,search_view,meta13807){
this.owner = owner;
this.app = app;
this.search_view = search_view;
this.meta13807 = meta13807;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_hospital_finder.core.t13806.cljs$lang$type = true;
om_hospital_finder.core.t13806.cljs$lang$ctorStr = "om-hospital-finder.core/t13806";
om_hospital_finder.core.t13806.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-hospital-finder.core/t13806");
});
om_hospital_finder.core.t13806.prototype.om$core$IRenderState$ = true;
om_hospital_finder.core.t13806.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__13801_SHARP_){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"query","query",-1288509510),p1__13801_SHARP_.target.value);
});})(___$1))
, "maxLength": (240), "id": "seach", "onKeyUp": ((function (___$1){
return (function (p1__13802_SHARP_){if(cljs.core._EQ_.call(null,p1__13802_SHARP_.keyCode,(13)))
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
om_hospital_finder.core.t13806.prototype.om$core$IInitState$ = true;
om_hospital_finder.core.t13806.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),""], null);
});
om_hospital_finder.core.t13806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13808){var self__ = this;
var _13808__$1 = this;return self__.meta13807;
});
om_hospital_finder.core.t13806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13808,meta13807__$1){var self__ = this;
var _13808__$1 = this;return (new om_hospital_finder.core.t13806(self__.owner,self__.app,self__.search_view,meta13807__$1));
});
om_hospital_finder.core.__GT_t13806 = (function __GT_t13806(owner__$1,app__$1,search_view__$1,meta13807){return (new om_hospital_finder.core.t13806(owner__$1,app__$1,search_view__$1,meta13807));
});
}
return (new om_hospital_finder.core.t13806(owner,app,search_view,null));
});
om.core.root.call(null,om_hospital_finder.core.search_view,om_hospital_finder.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("tfnewsearch")], null));
om_hospital_finder.core.bounds_changed = (function bounds_changed(){var g_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state));var seq__13815 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),new cljs.core.Keyword(null,"places","places",1043491706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state))));var chunk__13816 = null;var count__13817 = (0);var i__13818 = (0);while(true){
if((i__13818 < count__13817))
{var vec__13819 = cljs.core._nth.call(null,chunk__13816,i__13818);var i = cljs.core.nth.call(null,vec__13819,(0),null);var place = cljs.core.nth.call(null,vec__13819,(1),null);var marker_13821 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(place);var pos_13822 = marker_13821.getPosition();var visible_13823 = g_map.getBounds().contains(pos_13822);cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),visible_13823);
if(cljs.core.not.call(null,visible_13823))
{cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"checked","checked",-50955819)], null),false);
} else
{}
{
var G__13824 = seq__13815;
var G__13825 = chunk__13816;
var G__13826 = count__13817;
var G__13827 = (i__13818 + (1));
seq__13815 = G__13824;
chunk__13816 = G__13825;
count__13817 = G__13826;
i__13818 = G__13827;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13815);if(temp__4126__auto__)
{var seq__13815__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13815__$1))
{var c__4300__auto__ = cljs.core.chunk_first.call(null,seq__13815__$1);{
var G__13828 = cljs.core.chunk_rest.call(null,seq__13815__$1);
var G__13829 = c__4300__auto__;
var G__13830 = cljs.core.count.call(null,c__4300__auto__);
var G__13831 = (0);
seq__13815 = G__13828;
chunk__13816 = G__13829;
count__13817 = G__13830;
i__13818 = G__13831;
continue;
}
} else
{var vec__13820 = cljs.core.first.call(null,seq__13815__$1);var i = cljs.core.nth.call(null,vec__13820,(0),null);var place = cljs.core.nth.call(null,vec__13820,(1),null);var marker_13832 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(place);var pos_13833 = marker_13832.getPosition();var visible_13834 = g_map.getBounds().contains(pos_13833);cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),visible_13834);
if(cljs.core.not.call(null,visible_13834))
{cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706),i,new cljs.core.Keyword(null,"checked","checked",-50955819)], null),false);
} else
{}
{
var G__13835 = cljs.core.next.call(null,seq__13815__$1);
var G__13836 = null;
var G__13837 = (0);
var G__13838 = (0);
seq__13815 = G__13835;
chunk__13816 = G__13836;
count__13817 = G__13837;
i__13818 = G__13838;
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
om_hospital_finder.core.places_callback = (function places_callback(response){var v = cljs.core.js__GT_clj.call(null,response.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);var g_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_hospital_finder.core.app_state));var seq__13844_13848 = cljs.core.seq.call(null,v);var chunk__13845_13849 = null;var count__13846_13850 = (0);var i__13847_13851 = (0);while(true){
if((i__13847_13851 < count__13846_13850))
{var place_13852 = cljs.core._nth.call(null,chunk__13845_13849,i__13847_13851);var info_13853 = (new google.maps.InfoWindow({"content": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_13852)}));var marker_13854 = (new google.maps.Marker({"map": g_map, "position": (new google.maps.LatLng(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(place_13852),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(place_13852)))}));cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),((function (seq__13844_13848,chunk__13845_13849,count__13846_13850,i__13847_13851,info_13853,marker_13854,place_13852,v,g_map){
return (function (p1__13839_SHARP_){return cljs.core.conj.call(null,p1__13839_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,place_13852,new cljs.core.Keyword(null,"marker","marker",865118313),marker_13854),new cljs.core.Keyword(null,"visible","visible",-1024216805),true),new cljs.core.Keyword(null,"checked","checked",-50955819),false));
});})(seq__13844_13848,chunk__13845_13849,count__13846_13850,i__13847_13851,info_13853,marker_13854,place_13852,v,g_map))
);
{
var G__13855 = seq__13844_13848;
var G__13856 = chunk__13845_13849;
var G__13857 = count__13846_13850;
var G__13858 = (i__13847_13851 + (1));
seq__13844_13848 = G__13855;
chunk__13845_13849 = G__13856;
count__13846_13850 = G__13857;
i__13847_13851 = G__13858;
continue;
}
} else
{var temp__4126__auto___13859 = cljs.core.seq.call(null,seq__13844_13848);if(temp__4126__auto___13859)
{var seq__13844_13860__$1 = temp__4126__auto___13859;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13844_13860__$1))
{var c__4300__auto___13861 = cljs.core.chunk_first.call(null,seq__13844_13860__$1);{
var G__13862 = cljs.core.chunk_rest.call(null,seq__13844_13860__$1);
var G__13863 = c__4300__auto___13861;
var G__13864 = cljs.core.count.call(null,c__4300__auto___13861);
var G__13865 = (0);
seq__13844_13848 = G__13862;
chunk__13845_13849 = G__13863;
count__13846_13850 = G__13864;
i__13847_13851 = G__13865;
continue;
}
} else
{var place_13866 = cljs.core.first.call(null,seq__13844_13860__$1);var info_13867 = (new google.maps.InfoWindow({"content": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place_13866)}));var marker_13868 = (new google.maps.Marker({"map": g_map, "position": (new google.maps.LatLng(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(place_13866),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(place_13866)))}));cljs.core.swap_BANG_.call(null,om_hospital_finder.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"places","places",1043491706)], null),((function (seq__13844_13848,chunk__13845_13849,count__13846_13850,i__13847_13851,info_13867,marker_13868,place_13866,seq__13844_13860__$1,temp__4126__auto___13859,v,g_map){
return (function (p1__13839_SHARP_){return cljs.core.conj.call(null,p1__13839_SHARP_,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,place_13866,new cljs.core.Keyword(null,"marker","marker",865118313),marker_13868),new cljs.core.Keyword(null,"visible","visible",-1024216805),true),new cljs.core.Keyword(null,"checked","checked",-50955819),false));
});})(seq__13844_13848,chunk__13845_13849,count__13846_13850,i__13847_13851,info_13867,marker_13868,place_13866,seq__13844_13860__$1,temp__4126__auto___13859,v,g_map))
);
{
var G__13869 = cljs.core.next.call(null,seq__13844_13860__$1);
var G__13870 = null;
var G__13871 = (0);
var G__13872 = (0);
seq__13844_13848 = G__13869;
chunk__13845_13849 = G__13870;
count__13846_13850 = G__13871;
i__13847_13851 = G__13872;
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