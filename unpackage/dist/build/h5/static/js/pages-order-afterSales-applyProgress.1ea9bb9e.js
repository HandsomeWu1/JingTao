(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-afterSales-applyProgress"],{4340:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{sn:"",createTime:"",logList:[],serviceStatus:""}},onLoad:function(e){this.sn=e.sn,this.createTime=decodeURIComponent(e.createTime),this.serviceStatus=this.statusFilter(e.serviceStatus),this.logList=JSON.parse(decodeURIComponent(e.logs))},methods:{statusFilter:function(e){switch(e){case"APPLY":return"售后服务申请成功，等待商家审核";case"PASS":return"售后服务申请审核通过";case"REFUSE":return"售后服务申请已被商家拒绝，如有疑问请及时联系商家";case"FULL_COURIER":return"申请售后的商品已经寄出，等待商家收货";case"STOCK_IN":return"商家已将售后商品入库";case"WAIT_FOR_MANUAL":return"等待平台进行人工退款";case"REFUNDING":return"商家退款中，请您耐心等待";case"COMPLETED":return"售后服务已完成，感谢您的支持";case"ERROR_EXCEPTION":return"系统生成新订单异常，等待商家手动创建新订单";case"CLOSED":return"售后服务已关闭";case"WAIT_REFUND":return"等待平台进行退款";default:return""}}}};t.default=a},6374:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}));var a={uTimeLine:i("1347").default,uTimeLineItem:i("3832").default,uEmpty:i("d510").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"info-view"},[i("v-uni-view",{staticClass:"header-title-view"},[i("v-uni-view",{staticClass:"title"},[e._v("售后单号:")]),i("v-uni-view",[e._v(e._s(e.sn))])],1),i("v-uni-view",{staticClass:"header-title-view"},[i("v-uni-view",{staticClass:"title"},[e._v("申请时间:")]),i("v-uni-view",[e._v(e._s(e.createTime))])],1)],1),i("v-uni-view",{staticClass:"info-view"},[i("v-uni-view",{staticClass:"header-title-view"},[i("v-uni-view",[e._v(e._s(e.serviceStatus))])],1)],1),i("v-uni-view",{staticClass:"info-view"},[i("v-uni-view",[0!=e.logList.length?i("u-time-line",[i("u-time-line-item",{scopedSlots:e._u([{key:"content",fn:function(){return e._l(e.logList,(function(t,a){return i("v-uni-view",{key:a},[i("v-uni-view",{staticClass:"u-order-desc"},[e._v(e._s(t.message))]),i("v-uni-view",{staticClass:"u-order-time"},[e._v(e._s(t.createTime))])],1)}))},proxy:!0}],null,!1,3294732419)})],1):i("v-uni-view",[i("u-empty",{attrs:{text:"暂无审核日志"}})],1)],1)],1)],1)},o=[]},"77e9d":function(e,t,i){"use strict";i.r(t);var a=i("4340"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},c36e:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*京东红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-1ee6ab21]{color:#ff6b35}.main-color[data-v-1ee6ab21]{color:#ff3c2a}.bg-light-color[data-v-1ee6ab21]{background-color:#ff6b35!important}.bg-light-color[data-v-1ee6ab21] *{background-color:#ff6b35!important}.bg-main-color[data-v-1ee6ab21]{background-color:#ff3c2a!important}.uni-tabbar .uni-tabbar__icon[data-v-1ee6ab21]{width:20px;height:18px}.h1[data-v-1ee6ab21]{font-weight:500;font-style:normal;font-size:24px}.h2[data-v-1ee6ab21]{font-weight:500;font-style:normal;font-size:20px}.h3[data-v-1ee6ab21]{font-weight:500;font-style:normal;font-size:18px}.h4[data-v-1ee6ab21]{font-weight:500;font-style:normal;font-size:16px}.flex[data-v-1ee6ab21]{display:-webkit-box;display:-webkit-flex;display:flex}.btn[data-v-1ee6ab21]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;-webkit-box-shadow:none;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-1ee6ab21]::after{border:none}.button-hover[data-v-1ee6ab21]{opacity:.7}.margin[data-v-1ee6ab21]{margin:10px}.tag[data-v-1ee6ab21]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;-webkit-box-shadow:none;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-1ee6ab21]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-1ee6ab21]{margin-top:%?30?%}.border-top[data-v-1ee6ab21]{border-top:1px solid #ebeef5}.describe[data-v-1ee6ab21]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-1ee6ab21]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.relative[data-v-1ee6ab21]{position:relative}.wes[data-v-1ee6ab21]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-1ee6ab21]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}uni-page-body[data-v-1ee6ab21],\n.content[data-v-1ee6ab21]{background:#f8f8f8;height:100%}.u-order-time[data-v-1ee6ab21]{font-size:%?24?%;color:#999;margin:%?20?% 0}.info-view[data-v-1ee6ab21]{margin:%?20?% 0;border-radius:%?20?%;background-color:#fff;padding:%?30?%}.info-view .header-title-view[data-v-1ee6ab21]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#909399}.info-view .header-title-view .title[data-v-1ee6ab21]{width:%?160?%}.info-view .steps-view[data-v-1ee6ab21]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#909399;border-bottom:1px solid #f8f8f8;margin-bottom:%?10?%}.info-view .steps-view .title[data-v-1ee6ab21]{width:%?160?%}body.?%PAGE?%[data-v-1ee6ab21]{background:#f8f8f8}',""]),e.exports=t},c491:function(e,t,i){"use strict";var a=i("dfb8"),n=i.n(a);n.a},c8cd:function(e,t,i){"use strict";i.r(t);var a=i("6374"),n=i("77e9d");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("c491");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"1ee6ab21",null,!1,a["a"],r);t["default"]=l.exports},dfb8:function(e,t,i){var a=i("c36e");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("de71d10e",a,!0,{sourceMap:!1,shadowMode:!1})}}]);