(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-invoice-invoiceDetail"],{1647:function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*京东红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-4effec40]{color:#ff6b35}.main-color[data-v-4effec40]{color:#ff3c2a}.bg-light-color[data-v-4effec40]{background-color:#ff6b35!important}.bg-light-color[data-v-4effec40] *{background-color:#ff6b35!important}.bg-main-color[data-v-4effec40]{background-color:#ff3c2a!important}.uni-tabbar .uni-tabbar__icon[data-v-4effec40]{width:20px;height:18px}.h1[data-v-4effec40]{font-weight:500;font-style:normal;font-size:24px}.h2[data-v-4effec40]{font-weight:500;font-style:normal;font-size:20px}.h3[data-v-4effec40]{font-weight:500;font-style:normal;font-size:18px}.h4[data-v-4effec40]{font-weight:500;font-style:normal;font-size:16px}.flex[data-v-4effec40]{display:-webkit-box;display:-webkit-flex;display:flex}.btn[data-v-4effec40]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;-webkit-box-shadow:none;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-4effec40]::after{border:none}.button-hover[data-v-4effec40]{opacity:.7}.margin[data-v-4effec40]{margin:10px}.tag[data-v-4effec40]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;-webkit-box-shadow:none;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-4effec40]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-4effec40]{margin-top:%?30?%}.border-top[data-v-4effec40]{border-top:1px solid #ebeef5}.describe[data-v-4effec40]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-4effec40]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.relative[data-v-4effec40]{position:relative}.wes[data-v-4effec40]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-4effec40]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.block-item[data-v-4effec40]{height:%?217?%;width:100%;position:relative}.block-item > uni-view[data-v-4effec40]{color:#ff6262}.block-item > uni-view[data-v-4effec40]:first-child{text-align:center;line-height:3em}.block-item > uni-view:first-child > uni-view[data-v-4effec40]:first-child{position:relative}.block-item > uni-view:first-child > uni-view:first-child .circle[data-v-4effec40]{width:%?166?%;height:%?65?%;border:1px solid #ff6262;border-radius:100%;position:absolute;top:0;right:0;left:0;bottom:0;margin:auto}.block-item > uni-view:first-child > uni-view:first-child .circle uni-view[data-v-4effec40]{width:%?130?%;height:%?40?%;border:1px solid #ff6262;border-radius:100%;top:0;right:0;left:0;bottom:0;margin:auto;position:absolute}.block-item > uni-view:first-child > uni-view[data-v-4effec40]:last-child{font-size:%?40?%}.common-msg[data-v-4effec40]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:%?20?%;height:%?118?%;background-color:#fff;margin-bottom:%?20?%}.common-msg > uni-view[data-v-4effec40]{width:50%;text-align:center;color:#666;line-height:1.5em}.common-msg > uni-view uni-view[data-v-4effec40]{font-size:%?24?%}.common-msg > uni-view .invoice_status[data-v-4effec40]{color:#ff6262}.common-msg > uni-view[data-v-4effec40]:first-child{border-right:1px solid #eee}.show-pic[data-v-4effec40]{text-align:center;margin-top:%?40?%}.show-pic uni-image[data-v-4effec40]{width:%?27?%;height:%?27?%;margin-right:%?10?%;vertical-align:middle}.show-pic uni-text[data-v-4effec40]{color:#ff3c2a;font-size:%?24?%}.btn[data-v-4effec40]{font-size:%?34?%;margin:%?60?% %?20?%}.btn[data-v-4effec40]::after{border:none}.u-cell[data-v-4effec40]{padding:%?35?% %?20?%;height:%?110?%;color:#333}',""]),e.exports=t},5258:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getReceipt=n,t.getReceiptDetail=r,t.selectedShipMethod=a,t.getOrderList=c,t.getOrderDetail=f,t.cancelOrder=d,t.confirmReceipt=l,t.getPinTuanShare=s;var o=i("e9a3");function n(e){return o.http.request({url:"/trade/carts/select/receipt",method:o.Method.GET,needToken:!0,params:e})}function r(e){return o.http.request({url:"/trade/receipt/".concat(e),method:o.Method.GET,needToken:!0})}function a(e){return o.http.request({url:"/trade/carts/shippingMethod",method:o.Method.GET,needToken:!0,params:e})}function c(e){return o.http.request({url:"/orders",method:o.Method.GET,needToken:!0,params:e})}function f(e){return o.http.request({url:"/orders/".concat(e),method:o.Method.GET,needToken:!0})}function d(e,t){return o.http.request({url:"/orders/".concat(e,"/cancel"),method:o.Method.POST,needToken:!0,header:{"content-type":"application/x-www-form-urlencoded"},data:t})}function l(e){return o.http.request({url:"/orders/".concat(e,"/receiving"),method:o.Method.POST,needToken:!0})}function s(e,t){return o.http.request({url:"promotion/pintuan/share",method:o.Method.GET,needToken:!0,params:{parentOrderSn:e,skuId:t}})}},"70c9":function(e,t,i){"use strict";var o=i("9d93"),n=i.n(o);n.a},"8a15":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return o}));var o={uCellGroup:i("4526").default,uCellItem:i("8783").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"invoice-detail"},[i("v-uni-view",{staticClass:"block-item flex-center"},[i("v-uni-view",[i("v-uni-view",[e._v(e._s("增值税普通发票")),i("v-uni-view",{staticClass:"circle"},[i("v-uni-view")],1)],1),i("v-uni-view",[e._v(e._s(e._f("unitPrice")(e.order.receiptPrice,"￥")))])],1)],1),i("v-uni-view",{staticClass:"common-msg flex-center"},[i("v-uni-view",[i("v-uni-view",[e._v("抬头类型")]),i("v-uni-view",[e._v(e._s(e.order.receiptTitle))])],1),i("v-uni-view",[i("v-uni-view",[e._v("发票状态")]),i("v-uni-view",{staticClass:"invoice_status"},[e._v(e._s(1===e.order.receiptStatus?"已开具":"暂未开具"))])],1)],1),i("u-cell-group",{attrs:{border:!1}},[i("u-cell-item",{attrs:{title:"发票类型","border-top":!1,value:"增值税普通发票",arrow:!1}}),i("u-cell-item",{attrs:{title:"发票内容",value:e.order.receiptContent,arrow:!1}}),i("u-cell-item",{attrs:{title:"发票抬头",value:e.order.receiptTitle,arrow:!1}}),e.order.taxpayerId?i("u-cell-item",{attrs:{title:"纳税人识别号",value:e.order.taxpayerId,arrow:!1}}):e._e()],1)],1)},r=[]},"9d93":function(e,t,i){var o=i("1647");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=i("4f06").default;n("1e81dc8c",o,!0,{sourceMap:!1,shadowMode:!1})},bc41:function(e,t,i){"use strict";i.r(t);var o=i("f780"),n=i.n(o);for(var r in o)"default"!==r&&function(e){i.d(t,e,(function(){return o[e]}))}(r);t["default"]=n.a},f780:function(e,t,i){"use strict";var o=i("4ea4");i("4160"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i("ade3")),r=i("5258"),a={data:function(){var e;return e={order:{}},(0,n.default)(e,"order",{}),(0,n.default)(e,"title_type",""),e},onLoad:function(e){this.loadData(e.id)},methods:{loadData:function(e){var t=this;(0,r.getReceiptDetail)(e).then((function(e){var i=e.data.result;t.order=i}))},preview:function(){this.order.elec_file_list.length?uni.previewImage({current:0,urls:this.order.elec_file_list,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(e){},fail:function(e){}}}):this.$api.msg("暂无发票可预览")},download:function(){var e=this;this.order.elec_file_list.length?this.order.elec_file_list.forEach((function(t){uni.downloadFile({url:t,success:function(t){if(200===t.statusCode){var i=t.tempFilePath;uni.saveFile({tempFilePath:i,success:function(t){e.$api.msg("发票已下载到"+t.savedFilePath)}})}}})})):this.$api.msg("暂无发票可下载")}}};t.default=a},fdf7:function(e,t,i){"use strict";i.r(t);var o=i("8a15"),n=i("bc41");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("70c9");var a,c=i("f0c5"),f=Object(c["a"])(n["default"],o["b"],o["c"],!1,null,"4effec40",null,!1,o["a"],a);t["default"]=f.exports}}]);