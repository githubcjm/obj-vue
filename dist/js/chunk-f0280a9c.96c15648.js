(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0280a9c"],{"0fa5":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"header-float"},[i("div",{staticClass:"left"},[i("van-button",{staticClass:"more leftlist",attrs:{type:"primary"},on:{click:t.showPopup}})],1),i("div",{staticClass:"center"},[t._v("产品详情")]),i("div",{staticClass:"right"},[i("router-link",{attrs:{to:"/tabbar/home"}},[i("a",{staticClass:"cart"},[i("em",{attrs:{id:"top_cart_v2"}},[t._v("0")])])]),i("router-link",{staticClass:"service",attrs:{to:"/tabbar/home"}})],1)]),i("van-popup",{attrs:{"get-container":"#app"},model:{value:t.show,callback:function(s){t.show=s},expression:"show"}},[i("div",{staticStyle:{right:"0px",display:"block"},attrs:{id:"user_nav"}},[i("ul",[i("li",{staticClass:"red nav_btns"},[i("router-link",{staticClass:"btn_nav",attrs:{to:"/login"}},[t._v("登录")]),i("router-link",{staticClass:"btn_nav",staticStyle:{"margin-right":"0"},attrs:{to:"/sign"}},[t._v("注册")])],1),t._l(t.navlist,function(s,a){return i("li",{key:a,staticClass:"white"},[i("a",[i("img",{staticClass:"icon",attrs:{src:s.url}}),i("span",{domProps:{textContent:t._s(s.name)}})])])})],2)])]),i("van-swipe",{attrs:{autoplay:3e3}},t._l(t.shoplist.images,function(t,s){return i("van-swipe-item",{key:s},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"image"}]})])}),1),i("van-card",{attrs:{num:"2",tag:"标签",price:"2.00",desc:t.shoplist.title,title:t.shoplist.name,thumb:t.shoplist.url,"origin-price":"10.00"}}),i("div",{staticClass:"shopclass",on:{click:t.hidshop}},[i("h3",[t._v("选择磅数")]),t._m(0),i("div",{staticClass:"right"},[t._v(">")])]),t._m(1),i("div",{staticClass:"introduce"},[t._v("产品介绍")]),i("div",{staticClass:"introduce-pic"},[i("img",{attrs:{src:t.shoplist.bigpic,alt:""}})]),i("van-goods-action",[i("van-goods-action-icon",{attrs:{icon:"chat-o",text:"客服"},on:{click:t.onClickIcon}}),i("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车"},on:{click:t.onClickIcon}}),i("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.onClickButton}}),i("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"},on:{click:t.onClickButton}})],1),i("van-sku",{attrs:{sku:t.sku,goods:t.goods},on:{"buy-clicked":t.onBuyClicked,"add-cart":t.onAddCartClicked},model:{value:t.show3,callback:function(s){t.show3=s},expression:"show3"}})],1)},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"shoptex"},[i("p",{staticClass:"msg",attrs:{id:"selected_spec"}},[t._v("1.0磅 [2~4人份]")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"evaluate-wrapper",attrs:{id:"evaluate"}},[i("div",{staticClass:"title-wrapper"},[i("h3",[t._v("客户评价")]),i("a",[t._v("更多")])]),i("div",{staticClass:"content-wrapper"},[i("ul",[i("li",[i("div",{staticClass:"head"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:"http://thirdwx.qlogo.cn/mmopen/ic6FibIichZFsSAUhpjKKJGqN7crjUaB6b9jMeLuiaDOlOcrkJZ6EfmdVfibMPfuxFQxSr6Sb65Y9YZia2KUfktiaHRuwDfgTh7usol/132"}})]),i("div",{staticClass:"name"},[t._v("GMf13825238511")]),i("div",{staticClass:"msg"},[t._v("2~4人份")]),i("div",{staticClass:"date"},[t._v("2019/08/06 10:20")])]),i("div",{staticClass:"content"},[t._v("好吃！口感细腻，入口即化。奶油醇香，是我喜欢的味道")])])])])])}],n=(i("96cf"),i("3b8d")),o=(i("7f7f"),{data:function(){return{show:!1,show2:!0,navlist:[{name:"首页",url:"https://img1-m.1date1cake.com/themes/1d1c/images/2.0/home.jpg"},{name:"会员中心",url:"https://img2-m.1date1cake.com/themes/1d1c/images/2.0/user.jpg"},{name:"我的订单",url:"https://img2-m.1date1cake.com/themes/1d1c/images/2.0/order.jpg"},{name:"生日蛋糕",url:"https://img1-m.1date1cake.com/themes/1d1c/images/2.0/cake.jpg"},{name:"生日派对",url:"https://img1-m.1date1cake.com/themes/1d1c/images/2.0/balloon.jpg"}],shoplist:{},show3:!1,sku:{tree:[{k:"颜色",v:[{id:"1215",name:"红色",imgUrl:"https://img.yzcdn.cn/2.jpg"},{id:"1215",name:"蓝色",imgUrl:"https://img.yzcdn.cn/2.jpg"}],k_s:"s1"}],list:[{id:2259,price:100,s1:"1215",s2:"1193",s3:"0",stock_num:110}],price:"1.00",stock_num:227,collection_id:2261,none_sku:!1,messages:[{datetime:"0",multiple:"0",name:"留言",type:"text",required:"1",placeholder:""}],hide_stock:!1},goods:{title:"测试商品",picture:"https://img.yzcdn.cn/2.jpg"},messageConfig:{uploadImg:function(){return new Promise(function(t){setTimeout(function(){return t("https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg")},1e3)})},uploadMaxSize:3,placeholderMap:{text:"xxx",tel:"xxx"}}}},methods:{onClickIcon:function(){console.log(qwe)},onClickButton:function(){this.show3=!0},hidshop:function(){this.show3=!0},showPopup:function(){this.show=!0},onAddCartClicked:function(){this.$axios({method:"post",url:"http://localhost:3000/sign/login",data:this.$qs.stringify({url:this.shoplist.url,name:this.shoplist.name,title:this.shoplist.title,id:this.shoplist.id,uid:"cjm"})}).then(function(t){console.log(t)})}},created:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var s,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log(this.value),t.next=3,this.$axios.post("https://www.easy-mock.com/mock/5d40123c05c59f1e0bf0bbdf/list/shoplist");case 3:s=t.sent,i=this.$router.app.$el.baseURI.slice(-1),this.shoplist=s.data.data.A[i-1],console.log(s.data.data),console.log(value);case 8:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}()}),c=o,l=(i("ace4"),i("2877")),r=Object(l["a"])(c,a,e,!1,null,null,null);s["default"]=r.exports},a1d8:function(t,s,i){},ace4:function(t,s,i){"use strict";var a=i("a1d8"),e=i.n(a);e.a}}]);
//# sourceMappingURL=chunk-f0280a9c.96c15648.js.map