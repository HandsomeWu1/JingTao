(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-set-securityCenter-fingerLogin"],{"136d":function(e,t,n){"use strict";n.r(t);var i=n("47da"),c=n("8876");for(var u in c)"default"!==u&&function(e){n.d(t,e,(function(){return c[e]}))}(u);var o,r=n("f0c5"),a=Object(r["a"])(c["default"],i["b"],i["c"],!1,null,"4b18c83a",null,!1,i["a"],o);t["default"]=a.exports},"3d91":function(e,t,n){"use strict";(function(e){var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=i(n("d108")),u=n("672b"),o={data:function(){return{lightColor:this.$lightColor,checked:!1}},methods:{fingerSwitchChange:function(t){if(!0===t){var n=uni.getSystemInfoSync();plus.device.getInfo({success:function(e){var t={mobile_type:n.model,secret_key:e.uuid};(0,u.setBiolofy)(t).then((function(e){200===e.statusCode&&c.default.setFingerLogin(!0)}))},fail:function(t){e.error("getDeviceInfo failed: "+JSON.stringify(t))}})}else c.default.setFingerLogin(!1)}},onLoad:function(){}};t.default=o}).call(this,n("5a52")["default"])},"47da":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i}));var i={uCellGroup:n("4526").default,uCellItem:n("8783").default,uSwitch:n("e734").default},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"finger"},[n("u-cell-group",[n("u-cell-item",{staticClass:"border-top",attrs:{arrow:!1,title:"指纹登录"}},[n("u-switch",{attrs:{slot:"right-icon","active-color":e.lightColor,size:"40"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.fingerSwitchChange.apply(void 0,arguments)}},slot:"right-icon",model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})],1)],1),n("v-uni-view",{staticClass:"describe"},[e._v("开启后可使用指纹认证完成快捷登录，设置仅对本机生效。如需修改指纹，请在系统设置中操作。")])],1)},u=[]},8876:function(e,t,n){"use strict";n.r(t);var i=n("3d91"),c=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=c.a}}]);