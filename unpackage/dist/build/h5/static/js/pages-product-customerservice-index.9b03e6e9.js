(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-customerservice-index"],{"4d3e":function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("chat")],1)},a=[]},6054:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=requirePlugin("myPlugin"),o={data:function(){return{}},methods:{},onLoad:function(t){var o=JSON.parse(decodeURIComponent(t.params));n.init({sign:o.mpSign,token:o.token,uid:o.uuid,title:o.storageName,isRMB:"",data:{c1:"",c2:"",c3:"",c4:"",c5:"",d1:o.goodsName,d2:o.price,d3:"",d4:o.goodsImg,d5:"",d6:o.goodsId,data:""},viewUrl:function(e){e&&wx.navigateTo({url:"/pages/webview/index?href="+e})},setTitle:function(e){e&&wx.setNavigationBarTitle({title:e})},setBarColor:function(e){e&&wx.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:e})},success:function(t){"success"==t.data&&e.log("success")},fail:function(t){"initError"==t.data&&e.log(t.message)},leave:function(t){t&&e.log(t)}})}};t.default=o}).call(this,n("5a52")["default"])},"75ee":function(e,t,n){"use strict";n.r(t);var o=n("6054"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},cb0b:function(e,t,n){"use strict";n.r(t);var o=n("4d3e"),i=n("75ee");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);var r,u=n("f0c5"),c=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);t["default"]=c.exports}}]);