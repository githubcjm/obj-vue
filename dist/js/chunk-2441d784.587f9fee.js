(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2441d784"],{"1c4f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header-float"},[s("div",{staticClass:"left"},[s("router-link",{attrs:{to:"/tabbar/home"}},[s("a",{staticClass:"more mores",attrs:{href:"javascript:;"}})])],1),s("div",{staticClass:"center",staticStyle:{"font-size":"20px"}},[t._v("会员注册")]),t._m(0)]),s("van-cell-group",[s("van-field",{attrs:{placeholder:"请输入手机号码"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),s("van-field",{attrs:{placeholder:"请输入数字验证码"},model:{value:t.sms,callback:function(e){t.sms=e},expression:"sms"}},[s("van-button",{attrs:{slot:"button",size:"small",type:"primary"},on:{click:t.randomCode},slot:"button"},[t._v(t._s(t.html))])],1)],1),t._m(1),s("div",{staticClass:"buttom"},["checkbox"===[t.istrue?"text":"password"]?s("input",{directives:[{name:"model",rawName:"v-model",value:t.pas,expression:"pas"}],attrs:{placeholder:"请输入密码",type:"checkbox"},domProps:{checked:Array.isArray(t.pas)?t._i(t.pas,null)>-1:t.pas},on:{change:function(e){var s=t.pas,a=e.target,r=!!a.checked;if(Array.isArray(s)){var n=null,i=t._i(s,n);a.checked?i<0&&(t.pas=s.concat([n])):i>-1&&(t.pas=s.slice(0,i).concat(s.slice(i+1)))}else t.pas=r}}}):"radio"===[t.istrue?"text":"password"]?s("input",{directives:[{name:"model",rawName:"v-model",value:t.pas,expression:"pas"}],attrs:{placeholder:"请输入密码",type:"radio"},domProps:{checked:t._q(t.pas,null)},on:{change:function(e){t.pas=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.pas,expression:"pas"}],attrs:{placeholder:"请输入密码",type:[t.istrue?"text":"password"]},domProps:{value:t.pas},on:{input:function(e){e.target.composing||(t.pas=e.target.value)}}}),s("span",{domProps:{innerHTML:t._s(t.issure?"[隐藏]":"[显示]")},on:{click:t.changepas}})]),s("div",{staticClass:"signbuttom",staticStyle:{padding:"0px 20px 0px 10px"}},[s("table",{attrs:{width:"100%",cellpadding:"0",cellspacing:"0"}},[s("tbody",[s("tr",[s("td",{attrs:{align:"right"}},[s("a",{staticClass:"btn3",staticStyle:{"margin-right":"0px"},on:{click:t.changesign}},[t._v("注 册")])])])])])])],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"right"},[s("a",{staticClass:"cart",attrs:{href:"flow.php?hmpl=header_v2"}},[s("em",{attrs:{id:"top_cart_v2"}},[t._v("0")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tips"},[s("p",[t._v("如果长时间收不到验证码，请拨打4006517217联系客服下单")])])}],n=(s("96cf"),s("3b8d")),i={data:function(){return{sms:"",phone:"",smss:"",html:"",pas:"",istrue:!1,issure:!1}},methods:{randomCode:function(){for(var t="",e=0;e<4;e++)t+=parseInt(10*Math.random());this.html=t,console.log(this.html)},changepas:function(){this.istrue=!this.istrue,this.issure=!this.issure},changesign:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.phone?this.sms==this.html&&(this.pas?(this.$axios({method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},url:"http://localhost:3000/sign/login",data:this.$qs.stringify({phone:this.phone,pas:this.pas,cod:this.sms})}),this.$router.push({name:"home"}),alert("注册成功")):alert("请输入密码")):alert("请输入手机号码");case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},created:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.randomCode();case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},o=i,c=(s("d024"),s("2877")),l=Object(c["a"])(o,a,r,!1,null,null,null);e["default"]=l.exports},"9a49":function(t,e,s){},d024:function(t,e,s){"use strict";var a=s("9a49"),r=s.n(a);r.a}}]);
//# sourceMappingURL=chunk-2441d784.587f9fee.js.map