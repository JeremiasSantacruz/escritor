(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-746849fb"],{"34c3b":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("v-app",[t("v-container",[t("v-layout",{attrs:{"justify-space-around":"",column:""}},[t("v-card",{attrs:{hover:"","d-flex":""}},[t("v-container",[t("v-card-title",[e._v("Signup")]),t("v-form",{ref:"form",attrs:{"lazy-validation":""}},[t("v-text-field",{attrs:{rules:e.rulesEmail,label:"Email","prepend-icon":"mdi-mail",required:""},model:{value:e.email,callback:function(r){e.email=r},expression:"email"}}),t("v-text-field",{attrs:{rules:e.rulesPassword,label:"Password",type:"password","prepend-icon":"mdi-lock",required:""},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}}),t("v-text-field",{attrs:{rules:e.rulesPassword,label:"Password check","prepend-icon":"mdi-lock",type:"password",required:""},model:{value:e.passwordCheck,callback:function(r){e.passwordCheck=r},expression:"passwordCheck"}}),t("v-layout",{attrs:{"justify-space-around":"",row:""}},[t("v-btn",{on:{click:e.register}},[e._v("Summit")]),e.error?t("row",{staticClass:"red--text"},[e._v(e._s(e.error))]):e._e(),e.succes?t("row",{staticClass:"green--text"},[e._v(e._s(e.succes))]):e._e()],1)],1)],1)],1)],1)],1)],1)],1)},s=[],n=(t("96cf"),t("1da1")),o=t("b012"),u={data:function(){return{email:"",pass:"",min:8,error:null,succes:null}},computed:{rulesPassword:function(){var e=this,r=[],t=function(e){return/[a-z]/.test(e)||"Password must contain a lower case letter"};r.push(t);var a=function(e){return/[A-Z]/.test(e)||"Password must contain a Upper Caser letter."};r.push(a);var s=function(e){return/[0-9]/.test(e)||"Password must contain number."};r.push(s);var n=function(e){return/[!@#$%^&*]/.test(e)||"Pasword must contain a special char(!@#$%^&*)."};r.push(n);var o=function(r){return(r||"").length>=8||"A minimum of ".concat(e.min," characters is needed.")};r.push(o);var u=function(r){return(!!r&&r)===e.password||"Password do not match"};return r.push(u),r},rulesEmail:function(){var e=[],r=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,t=function(e){return r.test(e)||"Email not allowed"};return e.push(t),e}},methods:{validateField:function(){this.$refs.form.validate()},register:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o["a"].register({email:e.email,password:e.password});case 3:e.succes="Sign up succes",r.next=10;break;case 6:r.prev=6,r.t0=r["catch"](0),console.log(r.t0),e.error=r.t0.response.data.error;case 10:case"end":return r.stop()}}),r,null,[[0,6]])})))()}}},i=u,c=t("2877"),l=t("6544"),d=t.n(l),p=t("7496"),m=t("8336"),v=t("b0af"),f=t("99d9"),w=t("a523"),h=t("4bd4"),b=t("a722"),k=t("8654"),x=Object(c["a"])(i,a,s,!1,null,null,null);r["default"]=x.exports;d()(x,{VApp:p["a"],VBtn:m["a"],VCard:v["a"],VCardTitle:f["d"],VContainer:w["a"],VForm:h["a"],VLayout:b["a"],VTextField:k["a"]})}}]);
//# sourceMappingURL=chunk-746849fb.cc8675f3.js.map