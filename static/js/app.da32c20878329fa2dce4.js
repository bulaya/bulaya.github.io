webpackJsonp([11],{"1zmF":function(t,e){},Cvwv:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("tvR6");var o=n("qBF2"),a=n.n(o),l=n("7+uW"),i=n("YaEn"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top"},[e("h1",[this._v("人员管理系统 V2.0")]),this._v(" "),e("div",{staticStyle:{float:"right"}},[e("el-dropdown",[e("span",{staticClass:"el-dropdown-link"},[this._v("\n                超级管理员\n                "),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),this._v(" "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[this._v("退出")])],1)],1)],1)])},staticRenderFns:[]};var s={data:function(){return{isCollapse:!1}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)},handleSelect:function(t,e){"1-1"==t?i.a.push("/"):"1-2"==t?i.a.push("/xclist"):"1-3"==t?i.a.push("/htlist"):"2"==t?i.a.push("/log"):"3-1"==t?i.a.push("/power"):"3-2"==t&&i.a.push("/role")}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-menu",{attrs:{"default-active":"1-1","background-color":"#eeeeee","text-color":"#000000",collapse:t.isCollapse},on:{open:t.handleOpen,close:t.handleClose,select:t.handleSelect}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-user-solid"}),t._v(" "),n("span",[t._v("人员管理")])]),t._v(" "),n("el-menu-item",{attrs:{index:"1-1"}},[t._v("人员列表")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-2"}},[t._v("薪酬管理")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-3"}},[t._v("合同管理")])],2),t._v(" "),n("el-menu-item",{attrs:{index:"2"}},[n("i",{staticClass:"el-icon-info"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("日志管理")])]),t._v(" "),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-document"}),t._v(" "),n("span",[t._v("权限管理")])]),t._v(" "),n("el-menu-item",{attrs:{index:"3-1"}},[t._v("管理员列表")]),t._v(" "),n("el-menu-item",{attrs:{index:"3-2"}},[t._v("角色管理")])],2)],1)],1)},staticRenderFns:[]},c={name:"App",components:{top:n("VU/8")({data:function(){return{}},methods:{}},r,!1,function(t){n("Cvwv")},"data-v-66eb3002",null).exports,left:n("VU/8")(s,u,!1,null,null,null).exports}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("el-container",[e("el-header",{staticStyle:{padding:"0px"}},[e("top")],1),this._v(" "),e("el-container",[e("el-aside",{attrs:{width:"200px"}},[e("left")],1),this._v(" "),e("el-main",[e("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var d=n("VU/8")(c,p,!1,function(t){n("U66T")},null,null).exports,h=n("mtWM"),f=n.n(h),m=n("Rf8U"),v=n.n(m),_=(n("1zmF"),n("Y81h")),w=n.n(_);n("UVIz");l.default.prototype.axios=f.a,l.default.use(v.a,f.a),f.a.defaults.baseURL="http://localhost:8080",f.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",l.default.use(a.a,{size:"small",zIndex:3e3}),l.default.config.productionTip=!1,w.a.inc(.2),w.a.configure({easing:"ease",speed:500,showSpinner:!1}),i.a.beforeEach(function(t,e,n){w.a.start(),n()}),i.a.afterEach(function(){w.a.done()}),new l.default({el:"#app",router:i.a,components:{App:d},template:"<App/>"})},U66T:function(t,e){},UVIz:function(t,e){},YaEn:function(t,e,n){"use strict";var o=n("7+uW"),a=n("/ocq");o.default.use(a.a);var l=[{path:"/",component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){return t(n("VlgL"))}.bind(null,n)).catch(n.oe)}},{path:"/xclist",component:function(t){return Promise.all([n.e(0),n.e(8)]).then(function(){return t(n("p0Q3"))}.bind(null,n)).catch(n.oe)}},{path:"/htlist",component:function(t){return Promise.all([n.e(0),n.e(4)]).then(function(){return t(n("cUdX"))}.bind(null,n)).catch(n.oe)}},{path:"/log",component:function(t){return n.e(6).then(function(){return t(n("SeZn"))}.bind(null,n)).catch(n.oe)}},{path:"/error",component:function(t){return n.e(9).then(function(){return t(n("Kq85"))}.bind(null,n)).catch(n.oe)}},{path:"/power",component:function(t){return n.e(2).then(function(){return t(n("6mjk"))}.bind(null,n)).catch(n.oe)}},{path:"/role",component:function(t){return n.e(3).then(function(){return t(n("4Jq8"))}.bind(null,n)).catch(n.oe)}},{path:"/tabs",name:"tabs",component:function(t){return Promise.all([n.e(0),n.e(7)]).then(function(){return t(n("nPlw"))}.bind(null,n)).catch(n.oe)}},{path:"/powertabs",name:"powertabs",component:function(t){return n.e(5).then(function(){return t(n("ulHd"))}.bind(null,n)).catch(n.oe)}}];e.a=new a.a({routes:l,strict:!1})},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.da32c20878329fa2dce4.js.map