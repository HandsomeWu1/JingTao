(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-promotion-lives"],{"0c8a":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={uNavbar:i("f70a").default,uSearch:i("cc53").default,uSwiper:i("c08e").default,uTabs:i("ae6c").default,uImage:i("2e3c").default,uLoadmore:i("ac4a").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("u-navbar",{staticClass:"navbar"},[a("v-uni-view",{staticClass:"slot-wrap"},[a("u-search",{attrs:{placeholder:"搜索直播间"},on:{custom:function(e){arguments[0]=e=t.$handleEvent(e),t.searchLive.apply(void 0,arguments)},clear:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)},search:function(e){arguments[0]=e=t.$handleEvent(e),t.searchLive.apply(void 0,arguments)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1)],1),a("u-swiper",{staticClass:"swiper",attrs:{effect3d:!0,list:t.swiperImg},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickSwiper.apply(void 0,arguments)}}}),a("u-tabs",{ref:"tabs",attrs:{"is-scroll":!1,current:t.current,"active-color":t.activeColor,"inactive-color":"#606266",list:t.tabs},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTabs.apply(void 0,arguments)}}}),a("div",{staticClass:"wrapper"},[t._l(t.liveList,(function(e,o){return a("div",{key:o,staticClass:"live-item",class:{invalid:"END"==e.status},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleLivePlayer(e)}}},[a("div",{staticClass:"live-cover-img"},[a("div",{staticClass:"tips"},[a("div",{staticClass:"live-box"},[a("v-uni-image",{staticClass:"live-gif",attrs:{src:i("a30f")}})],1),a("span",[t._v(t._s("END"==e.status?"已结束":"NEW"==e.status?"未开始":"直播中"))])]),a("div",{staticClass:"bg"}),a("u-image",{attrs:{width:"326",height:"354",src:e.shareImg}})],1),a("div",{staticClass:"live-goods"},[a("div",{staticClass:"live-goods-name"},[t._v(t._s(e.name))]),t._m(0,!0),a("div",{staticClass:"live-goods-list"},[a("div",{staticClass:"live-goods-item"},[a("u-image",{attrs:{"border-radius":"20",src:e.roomGoodsList?e.roomGoodsList[0]:"",height:"140"}})],1),a("div",{staticClass:"live-goods-item"},[a("u-image",{attrs:{"border-radius":"20",src:e.roomGoodsList?e.roomGoodsList[1]:"",height:"140"}})],1)])])])})),t.liveList.length>10?a("u-loadmore",{attrs:{"bg-color":"#f8f8f8",status:t.status}}):t._e()],2)],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"live-store"},[i("span",{staticClass:"wes"},[t._v("lilishop")])])}]},"1eb5":function(t,e,i){"use strict";i.r(e);var a=i("0c8a"),o=i("43ba");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("e222");var r,s=i("f0c5"),l=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"121cb8e0",null,!1,a["a"],r);e["default"]=l.exports},2284:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*京东红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-121cb8e0]{color:#ff6b35}.main-color[data-v-121cb8e0]{color:#ff3c2a}.bg-light-color[data-v-121cb8e0]{background-color:#ff6b35!important}.bg-light-color[data-v-121cb8e0] *{background-color:#ff6b35!important}.bg-main-color[data-v-121cb8e0]{background-color:#ff3c2a!important}.uni-tabbar .uni-tabbar__icon[data-v-121cb8e0]{width:20px;height:18px}.h1[data-v-121cb8e0]{font-weight:500;font-style:normal;font-size:24px}.h2[data-v-121cb8e0]{font-weight:500;font-style:normal;font-size:20px}.h3[data-v-121cb8e0]{font-weight:500;font-style:normal;font-size:18px}.h4[data-v-121cb8e0]{font-weight:500;font-style:normal;font-size:16px}.flex[data-v-121cb8e0]{display:-webkit-box;display:-webkit-flex;display:flex}.btn[data-v-121cb8e0]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;-webkit-box-shadow:none;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-121cb8e0]::after{border:none}.button-hover[data-v-121cb8e0]{opacity:.7}.margin[data-v-121cb8e0]{margin:10px}.tag[data-v-121cb8e0]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;-webkit-box-shadow:none;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-121cb8e0]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-121cb8e0]{margin-top:%?30?%}.border-top[data-v-121cb8e0]{border-top:1px solid #ebeef5}.describe[data-v-121cb8e0]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-121cb8e0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.relative[data-v-121cb8e0]{position:relative}.wes[data-v-121cb8e0]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-121cb8e0]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.slot-wrap[data-v-121cb8e0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;\n  /* 如果您想让slot内容占满整个导航栏的宽度 */-webkit-box-flex:1;-webkit-flex:1;flex:1\n  /* 如果您想让slot内容与导航栏左右有空隙 */\n  /* padding: 0 30rpx; */}.invalid[data-v-121cb8e0]{-webkit-filter:grayscale(1);filter:grayscale(1)}.wrapper[data-v-121cb8e0]{padding:0 %?24?%}.live-item[data-v-121cb8e0]{display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;border-radius:%?20?%;-webkit-flex-wrap:wrap;flex-wrap:wrap;background:#fff;margin:%?20?% 0}.live-cover-img[data-v-121cb8e0]{position:relative}.swiper[data-v-121cb8e0]{margin:%?20?% 0}.live-goods[data-v-121cb8e0]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:%?16?% %?24?% %?24?%}.live-goods-name[data-v-121cb8e0]{height:%?84?%;font-weight:700;font-size:%?30?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.live-store[data-v-121cb8e0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?20?% 0;overflow:hidden;width:calc(100% - %?50?%)}.live-gif[data-v-121cb8e0]{width:%?20?%;height:%?20?%}.live-box[data-v-121cb8e0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:50%;width:%?40?%;margin-right:%?10?%;height:%?40?%;background:-webkit-gradient(linear,left top,right top,from(#ff6b35),color-stop(#ff9f28),to(#ffcc03));background:-webkit-linear-gradient(left,#ff6b35,#ff9f28,#ffcc03);background:linear-gradient(90deg,#ff6b35,#ff9f28,#ffcc03)}.live-goods-list[data-v-121cb8e0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.live-goods-list > .live-goods-item[data-v-121cb8e0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.live-goods-list > .live-goods-item[data-v-121cb8e0]:nth-of-type(1){padding-right:%?38?%}.live-icon[data-v-121cb8e0],\n.zan[data-v-121cb8e0]{position:absolute;width:%?80?%;height:%?80?%;z-index:9}.tips[data-v-121cb8e0]{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;z-index:9;-webkit-box-align:center;-webkit-align-items:center;align-items:center;top:%?20?%;right:0;padding:%?4?% %?12?% %?4?% 0;font-size:%?24?%;border-radius:100px;color:#fff;background:rgba(0,0,0,.46)}.live-icon[data-v-121cb8e0]{right:0;top:%?104?%}.zan[data-v-121cb8e0]{bottom:0;right:0;width:%?100?%;height:%?100?%}.bg[data-v-121cb8e0]{position:absolute;bottom:%?4?%;width:100%;height:%?100?%;z-index:8;background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.25)),color-stop(82%,transparent));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.25),transparent 82%);background-image:linear-gradient(0deg,rgba(0,0,0,.25),transparent 82%);border-bottom-left-radius:%?20?%}',""]),t.exports=e},3325:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*京东红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-4cab1616]{color:#ff6b35}.main-color[data-v-4cab1616]{color:#ff3c2a}.bg-light-color[data-v-4cab1616]{background-color:#ff6b35!important}.bg-light-color[data-v-4cab1616] *{background-color:#ff6b35!important}.bg-main-color[data-v-4cab1616]{background-color:#ff3c2a!important}.uni-tabbar .uni-tabbar__icon[data-v-4cab1616]{width:20px;height:18px}.h1[data-v-4cab1616]{font-weight:500;font-style:normal;font-size:24px}.h2[data-v-4cab1616]{font-weight:500;font-style:normal;font-size:20px}.h3[data-v-4cab1616]{font-weight:500;font-style:normal;font-size:18px}.h4[data-v-4cab1616]{font-weight:500;font-style:normal;font-size:16px}.flex[data-v-4cab1616]{display:-webkit-box;display:-webkit-flex;display:flex}.btn[data-v-4cab1616]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;-webkit-box-shadow:none;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-4cab1616]::after{border:none}.button-hover[data-v-4cab1616]{opacity:.7}.margin[data-v-4cab1616]{margin:10px}.tag[data-v-4cab1616]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;-webkit-box-shadow:none;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-4cab1616]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-4cab1616]{margin-top:%?30?%}.border-top[data-v-4cab1616]{border-top:1px solid #ebeef5}.describe[data-v-4cab1616]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-4cab1616]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.relative[data-v-4cab1616]{position:relative}.wes[data-v-4cab1616]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-4cab1616]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.u-load-more-wrap[data-v-4cab1616]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.u-load-more-inner[data-v-4cab1616]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-more[data-v-4cab1616]{width:60%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.u-more[data-v-4cab1616]::before{content:" ";position:absolute;border-bottom:1px solid #d4d4d4;-webkit-transform:scaleY(.5);transform:scaleY(.5);width:100%;top:50%;left:0}.u-dot-text[data-v-4cab1616]{font-size:%?28?%}.u-loadmore-icon[data-v-4cab1616]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}',""]),t.exports=e},"38db":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-loadmore",props:{bgColor:{type:String,default:"#ffffff"},icon:{type:Boolean,default:!0},fontSize:{type:String,default:"28"},color:{type:String,default:"#606266"},status:{type:String,default:"loadmore"},iconType:{type:String,default:"circle"},loadText:{type:Object,default:function(){return{loadmore:"加载更多",loading:"正在加载...",nomore:"没有更多了"}}},isDot:{type:Boolean,default:!1},iconColor:{type:String,default:"#b7b7b7"},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0},height:{type:[String,Number],default:"auto"}},data:function(){return{dotText:"●"}},computed:{loadTextStyle:function(){return{color:this.color,fontSize:this.fontSize+"rpx",position:"relative",zIndex:1,backgroundColor:this.bgColor,padding:"loading"==this.status?"0 8px":"0 12px"}},cricleStyle:function(){return{borderColor:"#e5e5e5 #e5e5e5 #e5e5e5 ".concat(this.circleColor)}},flowerStyle:function(){return{}},showText:function(){var t="";return t="loadmore"==this.status?this.loadText.loadmore:"loading"==this.status?this.loadText.loading:"nomore"==this.status&&this.isDot?this.dotText:this.loadText.nomore,t}},methods:{loadMore:function(){"loadmore"==this.status&&this.$emit("loadmore")}}};e.default=a},"43ba":function(t,e,i){"use strict";i.r(e);var a=i("bb33"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},"46a3":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/*主题颜色 具体参考   https://ant.design/docs/spec/colors-cn */\n/**主颜色*/\n/*用于金钱等颜色 */\n/*主题高亮颜色*/\n/*辅助高亮颜色*/\n/*主题高亮背景颜色*/\n/*京东红高亮背景颜色*/\n/*辅助色*/.light-color[data-v-796ff26f]{color:#ff6b35}.main-color[data-v-796ff26f]{color:#ff3c2a}.bg-light-color[data-v-796ff26f]{background-color:#ff6b35!important}.bg-light-color[data-v-796ff26f] *{background-color:#ff6b35!important}.bg-main-color[data-v-796ff26f]{background-color:#ff3c2a!important}.uni-tabbar .uni-tabbar__icon[data-v-796ff26f]{width:20px;height:18px}.h1[data-v-796ff26f]{font-weight:500;font-style:normal;font-size:24px}.h2[data-v-796ff26f]{font-weight:500;font-style:normal;font-size:20px}.h3[data-v-796ff26f]{font-weight:500;font-style:normal;font-size:18px}.h4[data-v-796ff26f]{font-weight:500;font-style:normal;font-size:16px}.flex[data-v-796ff26f]{display:-webkit-box;display:-webkit-flex;display:flex}.btn[data-v-796ff26f]{background-color:#ff6b35;color:#fff;border-width:0;border:none;border-radius:44px;height:44px;-webkit-box-shadow:none;box-shadow:none;font-weight:400;font-style:normal;line-height:44px;text-align:center}.btn[data-v-796ff26f]::after{border:none}.button-hover[data-v-796ff26f]{opacity:.7}.margin[data-v-796ff26f]{margin:10px}.tag[data-v-796ff26f]{background-color:#f2f2f2;color:#333;height:28px;border-radius:28px;-webkit-box-shadow:none;box-shadow:none;font-family:PingFangSC-Regular,PingFang SC,sans-serif;font-weight:400;font-style:normal;line-height:28px;text-align:center;width:90px}.c-content[data-v-796ff26f]{background-color:#fff;border-top:1px solid #ebeef5;border-bottom:1px solid #ebeef5}.mt-30[data-v-796ff26f]{margin-top:%?30?%}.border-top[data-v-796ff26f]{border-top:1px solid #ebeef5}.describe[data-v-796ff26f]{color:#909399;font-size:%?24?%;padding:%?30?%}.flex-center[data-v-796ff26f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.relative[data-v-796ff26f]{position:relative}.wes[data-v-796ff26f]{\n  /* 多出部分用省略号表示 , 用于一行 */overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis}.wes-2[data-v-796ff26f]{\n  /* 适用于webkit内核和移动端 */display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}uni-view[data-v-796ff26f],\nuni-scroll-view[data-v-796ff26f]{-webkit-box-sizing:border-box;box-sizing:border-box}[data-v-796ff26f]::-webkit-scrollbar,[data-v-796ff26f]::-webkit-scrollbar,[data-v-796ff26f]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-box[data-v-796ff26f]{position:relative}uni-scroll-view[data-v-796ff26f] ::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-view[data-v-796ff26f]{width:100%;white-space:nowrap;position:relative}.u-tab-item[data-v-796ff26f]{position:relative;display:inline-block;text-align:center;-webkit-transition-property:background-color,color;transition-property:background-color,color}.u-tab-bar[data-v-796ff26f]{position:absolute;bottom:0}.u-tabs-scorll-flex[data-v-796ff26f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}',""]),t.exports=e},6371:function(t,e,i){"use strict";var a=i("e783"),o=i.n(a);o.a},7058:function(t,e,i){var a=i("2284");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("09c965ef",a,!0,{sourceMap:!1,shadowMode:!1})},"78c4":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-tabs",style:{background:t.bgColor}},[i("v-uni-view",{attrs:{id:t.id}},[i("v-uni-scroll-view",{staticClass:"u-scroll-view",attrs:{"scroll-x":!0,"scroll-left":t.scrollLeft,"scroll-with-animation":!0}},[i("v-uni-view",{staticClass:"u-scroll-box",class:{"u-tabs-scorll-flex":!t.isScroll}},[t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"u-tab-item u-line-1",style:[t.tabItemStyle(a)],attrs:{id:"u-tab-item-"+a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickTab(a)}}},[t._v(t._s(e[t.name]||e["name"]))])})),t.showBar?i("v-uni-view",{staticClass:"u-tab-bar",style:[t.tabBarStyle]}):t._e()],2)],1)],1)],1)},n=[]},"933a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getLiveList=o,e.getPromotionGroupMember=n,e.getAssembleList=r,e.getPointsCategory=s,e.getPointsGoods=l,e.getPointsGoodsDetail=c,e.getSeckillTimeLine=d,e.getSeckillTimeGoods=f,e.getAllCoupons=u,e.getBargainList=b,e.getBargainDetail=p,e.getBargainActivity=h,e.openBargain=g,e.getBargainLog=v,e.helpBargain=m;var a=i("e9a3");function o(t){return a.http.request({url:"broadcast/studio",method:a.Method.GET,params:t})}function n(t){return a.http.request({url:"promotion/pintuan/".concat(t,"/members"),method:a.Method.GET})}function r(t){return a.http.request({url:"promotion/pintuan",method:a.Method.GET,loading:!1,params:t})}function s(){return a.http.request({url:"/promotion/pointsGoods/category",method:a.Method.GET})}function l(t){return a.http.request({url:"/promotion/pointsGoods",method:a.Method.GET,params:t})}function c(t){return a.http.request({url:"/promotion/pointsGoods/"+t,method:a.Method.GET})}function d(){return a.http.request({url:"promotion/seckill",method:a.Method.GET})}function f(t){return a.http.request({url:"promotion/seckill/".concat(t),method:a.Method.GET})}function u(t){return a.http.request({url:"/promotion/coupon",method:a.Method.GET,params:t})}function b(t){return a.http.request({url:"/promotion/kanjiaGoods",method:a.Method.GET,params:t})}function p(t){return a.http.request({url:"/promotion/kanjiaGoods/".concat(t),method:a.Method.GET})}function h(t){return a.http.request({url:"/promotion/kanjiaGoods/getKanjiaActivity",method:a.Method.POST,params:t})}function g(t){return a.http.request({url:"/promotion/kanjiaGoods",method:a.Method.POST,header:{"content-type":"application/x-www-form-urlencoded"},data:t})}function v(t){return a.http.request({url:"/promotion/kanjiaGoods/getKanjiaActivity/logs",method:a.Method.GET,data:t})}function m(t){return a.http.request({url:"promotion/kanjiaGoods/help/".concat(t),method:a.Method.POST})}},a30f:function(t,e){t.exports="data:image/gif;base64,R0lGODlhFAAUAIABAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDIwODQwMDNFQzJEMTFFQTkzRkJEMTlBOTI5OTZGNDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDIwODQwMDRFQzJEMTFFQTkzRkJEMTlBOTI5OTZGNDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMjA4NDAwMUVDMkQxMUVBOTNGQkQxOUE5Mjk5NkY0NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMjA4NDAwMkVDMkQxMUVBOTNGQkQxOUE5Mjk5NkY0NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAUKAAEALAAAAAAUABQAAAIxjI+py+0PH5jxzFvDpXWD9DEegi2jsaFgimJl+6asNstx7d76h+809wPahL1Q5rgoAAAh+QQJCgABACwBAAIAEwAKAAACGIxvoMit32IAh8rrcIS60t9NnhWKS1mhBQAh+QQJCgABACwAAAAAFAAUAAACLoyPqcvtBqIDKUpmkaVr87BBVQhl2eGh5gmSreSmJczKLxXn18P3/g8MCofEQwEAIfkECQoAAQAsAAAAABQAFAAAAjSMj6nLCd/Yg9HNamkFZvINeWB4RaKIfMdZdlrAap4a0yh83fOat7tLkul6Qh/RZnxhlpUCACH5BAUKAAEALAAAAAAUABQAAAIyjI+py+0Po5wBWFotoHojz3TfFWpHByaigaqs+cJxRtK1uNogLrfxlvPZhr+dDIM0FAAAOw=="},ac4a:function(t,e,i){"use strict";i.r(e);var a=i("cd96"),o=i("fac7");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("6371");var r,s=i("f0c5"),l=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"4cab1616",null,!1,a["a"],r);e["default"]=l.exports},ae6c:function(t,e,i){"use strict";i.r(e);var a=i("78c4"),o=i("d9bb");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("f4f1");var r,s=i("f0c5"),l=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"796ff26f",null,!1,a["a"],r);e["default"]=l.exports},bb33:function(t,e,i){"use strict";(function(t){var a=i("4ea4");i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("2909"));i("96cf");var n=a(i("1da1")),r=i("933a"),s={data:function(){return{status:"loadmore",activeColor:this.$lightColor,current:0,keyword:"",tabs:[{name:"直播中"},{name:"全部"}],background:{background:"#ff9f28"},params:[{pageNumber:1,pageSize:10,status:"START"},{pageNumber:1,pageSize:4}],recommendParams:{pageNumber:1,pageSize:3,recommend:0},liveList:[],recommendLiveList:[],swiperImg:[{image:"https://lilishop-oss.oss-cn-beijing.aliyuncs.com/48d789cb9c864b7b87c1c0f70996c3e8.jpeg"}]}},onShow:function(){this.params[this.current].pageNumber=1,this.liveList=[],this.getLives(),this.getRecommendLives()},onReachBottom:function(){this.params[this.current].pageNumber++,this.getLives()},methods:{changeTabs:function(t){this.current=t,this.init()},init:function(){this.liveList=[],this.status="loadmore",this.getLives()},clear:function(){delete this.params[this.current].name,this.init()},clickSwiper:function(e){t.log(this.swiperImg[e]),this.handleLivePlayer(this.swiperImg[e])},searchLive:function(t){this.params[this.current].pageNumber=1,this.params[this.current].name=t,this.init()},getRecommendLives:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.status="loading",e.next=3,(0,r.getLiveList)(t.recommendParams);case 3:i=e.sent,i.data.success&&(0!=i.data.result.records.length?(t.status="loadmore",t.recommendLives=i.data.result.records):t.status="noMore",0==t.recommendLives.length?t.liveList[0].shareImg&&t.$set(t,"swiperImg",[{image:t.liveList[0].shareImg,roomId:t.liveList[0].roomId}]):t.recommendLives.forEach((function(e){t.$set(t,"swiperImg",[{image:e.shareImg,roomId:e.roomId}])})));case 5:case"end":return e.stop()}}),e)})))()},getLives:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var a,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e.status="loading",i.next=3,(0,r.getLiveList)(e.params[e.current]);case 3:a=i.sent,a.data.success&&(0!=a.data.result.records.length?(e.status="loadmore",(n=e.liveList).push.apply(n,(0,o.default)(a.data.result.records))):e.status="noMore",a.data.result.total>e.params[e.current].pageNumber*e.params[e.current].pageSize?e.status="loadmore":e.status="noMore",t.log(e.status),e.liveList.forEach((function(t){t.roomGoodsList&&(t.roomGoodsList=JSON.parse(t.roomGoodsList))})));case 5:case"end":return i.stop()}}),i)})))()},handleLivePlayer:function(t){uni.showToast({title:"请从微信小程序中预览直播功能",duration:2e3,icon:"none"})}}};e.default=s}).call(this,i("5a52")["default"])},c2b9:function(t,e,i){"use strict";var a=i("4ea4");i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var o=a(i("1da1")),n={name:"u-tabs",props:{isScroll:{type:Boolean,default:!0},list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},height:{type:[String,Number],default:80},fontSize:{type:[String,Number],default:30},duration:{type:[String,Number],default:.5},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#303133"},barWidth:{type:[String,Number],default:40},barHeight:{type:[String,Number],default:6},gutter:{type:[String,Number],default:30},bgColor:{type:String,default:"#ffffff"},name:{type:String,default:"name"},bold:{type:Boolean,default:!0},activeItemStyle:{type:Object,default:function(){return{}}},showBar:{type:Boolean,default:!0},barStyle:{type:Object,default:function(){return{}}},itemWidth:{type:[Number,String],default:"auto"}},data:function(){return{scrollLeft:0,tabQueryInfo:[],componentWidth:0,scrollBarLeft:0,parentLeft:0,id:this.$u.guid(),currentIndex:this.current,barFirstTimeMove:!0}},watch:{list:function(t,e){var i=this;t.length!==e.length&&(this.currentIndex=0),this.$nextTick((function(){i.init()}))},current:{immediate:!0,handler:function(t,e){var i=this;this.$nextTick((function(){i.currentIndex=t,i.scrollByIndex()}))}}},computed:{tabBarStyle:function(){var t={width:this.barWidth+"rpx",transform:"translate(".concat(this.scrollBarLeft,"px, -100%)"),"transition-duration":"".concat(this.barFirstTimeMove?0:this.duration,"s"),"background-color":this.activeColor,height:this.barHeight+"rpx","border-radius":"".concat(this.barHeight/2,"px")};return Object.assign(t,this.barStyle),t},tabItemStyle:function(){var t=this;return function(e){var i={height:t.height+"rpx","line-height":t.height+"rpx","font-size":t.fontSize+"rpx","transition-duration":"".concat(t.duration,"s"),padding:t.isScroll?"0 ".concat(t.gutter,"rpx"):"",flex:t.isScroll?"auto":"1",width:t.$u.addUnit(t.itemWidth)};return e==t.currentIndex&&t.bold&&(i.fontWeight="bold"),e==t.currentIndex?(i.color=t.activeColor,i=Object.assign(i,t.activeItemStyle)):i.color=t.inactiveColor,i}}},methods:{init:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$uGetRect("#"+t.id);case 2:i=e.sent,t.parentLeft=i.left,t.componentWidth=i.width,t.getTabRect();case 6:case"end":return e.stop()}}),e)})))()},clickTab:function(t){t!=this.currentIndex&&this.$emit("change",t)},getTabRect:function(){for(var t=uni.createSelectorQuery().in(this),e=0;e<this.list.length;e++)t.select("#u-tab-item-".concat(e)).fields({size:!0,rect:!0});t.exec(function(t){this.tabQueryInfo=t,this.scrollByIndex()}.bind(this))},scrollByIndex:function(){var t=this,e=this.tabQueryInfo[this.currentIndex];if(e){var i=e.width,a=e.left-this.parentLeft,o=a-(this.componentWidth-i)/2;this.scrollLeft=o<0?0:o;var n=e.left+e.width/2-this.parentLeft;this.scrollBarLeft=n-uni.upx2px(this.barWidth)/2,1==this.barFirstTimeMove&&setTimeout((function(){t.barFirstTimeMove=!1}),100)}}},mounted:function(){this.init()}};e.default=n},cd96:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={uLoading:i("2fe1").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-load-more-wrap",style:{backgroundColor:t.bgColor,marginBottom:t.marginBottom+"rpx",marginTop:t.marginTop+"rpx",height:t.$u.addUnit(t.height)}},[i("v-uni-view",{staticClass:"u-load-more-inner",class:"loadmore"==t.status||"nomore"==t.status?"u-more":""},[i("u-loading",{staticClass:"u-loadmore-icon",attrs:{color:t.iconColor,mode:"circle"==t.iconType?"circle":"flower",show:"loading"==t.status&&t.icon}}),i("v-uni-view",{class:["nomore"==t.status&&1==t.isDot?"u-dot-text":"u-more-text"],style:[t.loadTextStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[t._v(t._s(t.showText))])],1)],1)},n=[]},d9bb:function(t,e,i){"use strict";i.r(e);var a=i("c2b9"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},e222:function(t,e,i){"use strict";var a=i("7058"),o=i.n(a);o.a},e783:function(t,e,i){var a=i("3325");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("20334030",a,!0,{sourceMap:!1,shadowMode:!1})},f4f1:function(t,e,i){"use strict";var a=i("f509"),o=i.n(a);o.a},f509:function(t,e,i){var a=i("46a3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("dff6eb42",a,!0,{sourceMap:!1,shadowMode:!1})},fac7:function(t,e,i){"use strict";i.r(e);var a=i("38db"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a}}]);