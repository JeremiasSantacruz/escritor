(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65f2702c"],{"8bf3":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("book",{attrs:{title:t.bookFind.title,author:t.bookFind.author,description:t.bookFind.description,price:t.bookFind.price}})],1)},o=[],a=(n("96cf"),n("1da1")),i=n("e2ae"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h1",{staticClass:"text-left"},[t._v(t._s(t.title))]),n("p",{attrs:{clas:"subtitle-2 text-left"}},[t._v("Author: "+t._s(t.author))]),n("p",[t._v(t._s(t.description))]),n("v-layout",[n("p",[t._v(" Comprar")]),n("v-spacer"),n("v-btn",{attrs:{color:"green"},on:{click:t.compra}},[n("v-icon",{attrs:{dark:""}},[t._v(" mdi-cart ")])],1)],1)],1)},s=[],u={props:{title:String,author:String,genre:null,description:String,price:null},methods:{compra:function(){this.$store.userLogIn?this.router.push("/home"):this.router.push("/login")}}},l=u,p=n("2877"),d=n("6544"),f=n.n(d),h=n("8336"),v=n("a523"),b=n("132d"),k=n("a722"),m=n("2fa4"),_=Object(p["a"])(l,c,s,!1,null,null,null),g=_.exports;f()(_,{VBtn:h["a"],VContainer:v["a"],VIcon:b["a"],VLayout:k["a"],VSpacer:m["a"]});var w={data:function(){return{bookFind:null}},components:{book:g},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$route.params.book_id,e.next=3,i["a"].findOne(n);case 3:t.bookFind=e.sent.data;case 4:case"end":return e.stop()}}),e)})))()}},x=w,F=Object(p["a"])(x,r,o,!1,null,null,null);e["default"]=F.exports},a722:function(t,e,n){"use strict";n("20f6");var r=n("e8f2");e["a"]=Object(r["a"])("layout")}}]);
//# sourceMappingURL=chunk-65f2702c.a920635a.js.map