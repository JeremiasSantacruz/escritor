(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-554eb61b"],{a55b:function(e,r,a){"use strict";a.r(r);var t=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("v-app",[a("v-container",[a("v-layout",{attrs:{"justify-space-around":"",column:""}},[a("v-card",{attrs:{hover:""}},[a("v-container",[a("v-card-title",[e._v("Login")]),a("v-form",{ref:"form",model:{value:e.valid,callback:function(r){e.valid=r},expression:"valid"}},[a("v-text-field",{attrs:{rules:e.rulesEmail,label:"Email",type:"email","prepend-icon":"mdi-mail",required:""},model:{value:e.email,callback:function(r){e.email=r},expression:"email"}}),a("v-text-field",{attrs:{label:"Password",rules:e.rulepass,"prepend-icon":"mdi-lock",type:"password",required:""},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}}),a("v-layout",{attrs:{"justify-space-around":""}},[a("v-btn",{attrs:{disabled:!e.valid,"align-center":""},on:{click:e.validateLogin}},[e._v("Login")]),e.error?a("v-spacer"):e._e(),e.error?a("v-card-text",{staticClass:"red--text"},[e._v(e._s(e.error))]):e._e()],1)],1)],1)],1),a("div",[a("br"),e._v(" Necesitas una cuenta? "),a("v-btn",{attrs:{to:"/signup",text:"",small:""}},[e._v("Registarse ")]),a("v-spacer"),a("br"),e._v(" No recuerdas la contraseña? "),a("v-btn",{attrs:{to:"/user/recovery",text:"",small:""}},[e._v("Recuperar")])],1)],1)],1)],1)},n=[],s=(a("96cf"),a("1da1")),o=a("b012"),i={data:function(){return{email:"",password:"",valid:!0,rulepass:[function(e){return!!e||"Password is required"}],error:""}},computed:{rulesEmail:function(){var e=[],r=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,a=function(e){return r.test(e)||"Email not allowed"};return e.push(a),e}},methods:{validateLogin:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o["a"].login({email:e.email,password:e.password});case 3:a=r.sent,e.$store.dispatch("setToken",a.data.token),e.$store.dispatch("setUser",a.data.user),setTimeout((function(){return e.$router.push("/")}),700),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](0),e.error=r.t0.response.data.error;case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()}}},u=i,c=a("2877"),l=a("6544"),d=a.n(l),p=a("7496"),v=a("8336"),m=a("b0af"),f=a("99d9"),b=a("a523"),w=a("4bd4"),x=a("a722"),g=a("2fa4"),h=a("8654"),k=Object(c["a"])(u,t,n,!1,null,null,null);r["default"]=k.exports;d()(k,{VApp:p["a"],VBtn:v["a"],VCard:m["a"],VCardText:f["c"],VCardTitle:f["d"],VContainer:b["a"],VForm:w["a"],VLayout:x["a"],VSpacer:g["a"],VTextField:h["a"]})},b012:function(e,r,a){"use strict";var t=a("3f4a");r["a"]={register:function(e){return Object(t["a"])().post("/user",e)},login:function(e){return Object(t["a"])().post("/login",e)},adminUp:function(e){return Object(t["a"])().post("/admin",e)},recovery:function(e){return Object(t["a"])().post("/user/recovery",e)}}}}]);
//# sourceMappingURL=chunk-554eb61b.6b3f4e53.js.map