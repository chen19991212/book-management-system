(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-554bfccd":"dcbc6b9d","chunk-72389847":"b68c61ce","chunk-2d20f4f7":"1767fe90","chunk-2d2171a3":"3115c59e","chunk-86418678":"41c4e51f","chunk-cc610366":"8bcacd72"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-554bfccd":1,"chunk-72389847":1,"chunk-86418678":1,"chunk-cc610366":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-554bfccd":"7185d91b","chunk-72389847":"7047173f","chunk-2d20f4f7":"31d6cfe0","chunk-2d2171a3":"31d6cfe0","chunk-86418678":"32779835","chunk-cc610366":"e8795dd0"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"019c":function(e,t,n){},"0f9a":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("d3b7"),n("498a");var r=n("b775");function a(e){return Object(r["a"])({url:"/user/login",method:"post",data:e})}function o(){return Object(r["a"])({url:"/user/info",method:"get"})}var u=n("5f87"),c=n("a18c"),i={token:Object(u["a"])(),name:"",avatar:"",introduction:"",roles:[]},s={SET_TOKEN:function(e,t){e.token=t},SET_INTRODUCTION:function(e,t){e.introduction=t},SET_NAME:function(e,t){e.name=t},SET_AVATAR:function(e,t){e.avatar=t},SET_ROLES:function(e,t){e.roles=t}},l={login:function(e,t){var n=e.commit,r=t.username,o=t.password;return new Promise((function(e,t){a({username:r.trim(),password:o}).then((function(t){var r=t.data;n("SET_TOKEN",r.token),Object(u["c"])(r.token),e()})).catch((function(e){t(e)}))}))},getUserInfo:function(e){var t=e.commit,n=e.state;return new Promise((function(e,r){o(n.token).then((function(n){var a=n.data;a||r("请重新登录");var o=a.roles,u=a.name,c=a.avatar,i=a.introduction;(!o||o.length<=0)&&r("getInfo: roles must be a non-null array!"),t("SET_ROLES",o),t("SET_NAME",u),t("SET_AVATAR",c),t("SET_INTRODUCTION",i),e(a)})).catch((function(e){r(e)}))}))},logout:function(e){var t=e.commit;e.state,e.dispatch;try{t("SET_TOKEN",""),t("SET_ROLES",[]),Object(u["b"])(),Object(c["b"])()}catch(n){console.log(n)}},resetToken:function(e){var t=e.commit;return new Promise((function(e){t("SET_TOKEN",""),t("SET_ROLES",[]),Object(u["b"])(),e()}))}};t["default"]={namespaced:!0,state:i,mutations:s,actions:l}},"131d":function(e,t,n){"use strict";n("f21d")},"20a4":function(e,t,n){},2395:function(e,t,n){},"318c":function(e,t,n){},"31c2":function(e,t,n){"use strict";n.r(t),n.d(t,"filterAsyncRoutes",(function(){return u}));var r=n("5530"),a=(n("caad"),n("2532"),n("159b"),n("99af"),n("d3b7"),n("d046"));function o(e,t){return!t.meta||!t.meta.roles||e.some((function(e){return t.meta.roles.includes(e)}))}function u(e,t){var n=[];return e.forEach((function(e){var a=Object(r["a"])({},e);o(t,a)&&(a.children&&(a.children=u(a.children,t)),n.push(a))})),n}var c={routes:[],addRoutes:[]},i={SET_ROUTES:function(e,t){e.addRoutes=t,e.routes=a["b"].concat(t)}},s={generateRoutes:function(e,t){var n=e.commit;return new Promise((function(e){var r;r=t.includes("admin")?a["a"]||[]:u(a["a"],t),n("SET_ROUTES",r),e(r)}))}};t["default"]={namespaced:!0,state:c,mutations:i,actions:s}},"331f":function(e,t,n){"use strict";n("019c")},"40c7":function(e,t,n){},4360:function(e,t,n){"use strict";n("13d5"),n("d3b7"),n("ddb0"),n("5319"),n("ac1f");var r=n("2b0e"),a=n("2f62"),o=(n("b0c0"),{sidebar:function(e){return e.app.sidebar},size:function(e){return e.app.size},device:function(e){return e.app.device},visitedViews:function(e){return e.tagsView.visitedViews},cachedViews:function(e){return e.tagsView.cachedViews},token:function(e){return e.user.token},avatar:function(e){return e.user.avatar},name:function(e){return e.user.name},introduction:function(e){return e.user.introduction},roles:function(e){return e.user.roles},permission_routes:function(e){return e.permission.routes},errorLogs:function(e){return e.errorLog.logs}}),u=o;r["default"].use(a["a"]);var c=n("c653"),i=c.keys().reduce((function(e,t){var n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),r=c(t);return e[n]=r.default,e}),{}),s=new a["a"].Store({modules:i,getters:u});t["a"]=s},4806:function(e,t,n){"use strict";n("318c")},"522b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("46a1"),n("450d");var r=n("e5f2"),a=n.n(r),o=(n("9e1f"),n("6ed5")),u=n.n(o),c=(n("0fb7"),n("f529")),i=n.n(c),s=(n("e612"),n("dd87")),l=n.n(s),d=(n("075a"),n("72aa")),f=n.n(d),m=(n("5466"),n("ecdf")),h=n.n(m),p=(n("560b"),n("dcdc")),b=n.n(p),v=(n("6611"),n("e772")),g=n.n(v),k=(n("1f1a"),n("4e4b")),O=n.n(k),y=(n("672e"),n("101e")),w=n.n(y),E=(n("38a0"),n("ad41")),_=n.n(E),S=(n("5e32"),n("6721")),j=n.n(S),T=(n("f225"),n("89a9")),x=n.n(T),C=(n("f4f9"),n("c2cc")),P=n.n(C),L=(n("7a0f"),n("0f6c")),N=n.n(L),R=(n("b84d"),n("c216")),$=n.n(R),A=(n("8f24"),n("76b9")),B=n.n(A),I=(n("ce18"),n("f58e")),M=n.n(I),V=(n("8bd8"),n("4cb2")),U=n.n(V),H=(n("4ca3"),n("443e")),D=n.n(H),K=(n("2986"),n("14e9")),q=n.n(K),z=(n("0c67"),n("299c")),F=n.n(z),J=(n("1951"),n("eedf")),W=n.n(J),G=(n("aaa5"),n("a578")),Q=n.n(G),X=(n("10cb"),n("f3ad")),Y=n.n(X),Z=(n("eca7"),n("3787")),ee=n.n(Z),te=(n("425f"),n("4105")),ne=n.n(te),re=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),ae=n("a18c"),oe=n("4360"),ue=n("5530"),ce=n("1da1"),ie=(n("96cf"),n("323e")),se=n.n(ie),le=(n("a5d8"),n("5f87")),de=(n("99af"),n("83d6")),fe=n.n(de),me=fe.a.title||"Vue Element Admin";function he(e){return e?"".concat(e," - ").concat(me):"".concat(me)}se.a.configure({showSpinner:!1});var pe=["/login"];ae["a"].beforeEach(function(){var e=Object(ce["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,o,u,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(se.a.start(),document.title=he(t.meta.title),a=Object(le["a"])(),!a){e.next=37;break}if("/login"!==t.path){e.next=9;break}r({path:"/"}),se.a.done(),e.next=35;break;case 9:if(o=oe["a"].getters.roles&&oe["a"].getters.roles.length>0,!o){e.next=14;break}r(),e.next=35;break;case 14:return e.prev=14,e.next=17,oe["a"].dispatch("user/getUserInfo");case 17:return u=e.sent,c=u.roles,e.next=21,oe["a"].dispatch("permission/generateRoutes",c);case 21:s=e.sent,ae["a"].addRoutes(s),console.log(ae["a"]),console.log(ae["a"].getRoutes()),r(Object(ue["a"])(Object(ue["a"])({},t),{},{replace:!0})),e.next=35;break;case 28:return e.prev=28,e.t0=e["catch"](14),e.next=32,oe["a"].dispatch("user/resetToken");case 32:i.a.error(e.t0||"Has Error"),r("/login"),se.a.done();case 35:e.next=38;break;case 37:-1!==pe.indexOf(t.path)?r():(r("/login"),se.a.done());case 38:case"end":return e.stop()}}),e,null,[[14,28]])})));return function(t,n,r){return e.apply(this,arguments)}}()),ae["a"].afterEach((function(){se.a.done()}));var be=n("313e"),ve=(n("0fae"),n("522b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),ge=[],ke=(n("7c55"),n("2877")),Oe={},ye=Object(ke["a"])(Oe,ve,ge,!1,null,null,null),we=ye.exports;re["default"].use(ne.a),re["default"].use(ee.a),re["default"].use(Y.a),re["default"].use(Q.a),re["default"].use(W.a),re["default"].use(F.a),re["default"].use(q.a),re["default"].use(D.a),re["default"].use(U.a),re["default"].use(M.a),re["default"].use(B.a),re["default"].use($.a),re["default"].use(N.a),re["default"].use(P.a),re["default"].use(x.a),re["default"].use(j.a),re["default"].use(_.a),re["default"].use(w.a),re["default"].use(O.a),re["default"].use(g.a),re["default"].use(b.a),re["default"].use(h.a),re["default"].use(f.a),re["default"].use(l.a),re["default"].prototype.$message=i.a,re["default"].prototype.$confirm=u.a.confirm,re["default"].prototype.$notify=a.a,re["default"].prototype.$echarts=be,re["default"].config.productionTip=!1,new re["default"]({router:ae["a"],store:oe["a"],render:function(e){return e(we)}}).$mount("#app")},"5f87":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i}));var r=n("a78e"),a=n.n(r),o="Admin-Token";function u(){return a.a.get(o)}function c(e){return a.a.set(o,e)}function i(){return a.a.remove(o)}},6312:function(e,t,n){"use strict";n("20a4")},"7c55":function(e,t,n){"use strict";n("2395")},"83d6":function(e,t){e.exports={title:"Vue Element Admin",showSettings:!0,tagsView:!0,fixedHeader:!1,sidebarLogo:!1,errorLog:"production"}},a18c:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n("2b0e"),a=n("8c4f"),o=n("d046");r["default"].use(a["a"]);var u=a["a"].prototype.push;a["a"].prototype.push=function(e,t,n){return t||n?u.call(this,e,t,n):u.call(this,e).catch((function(e){return e}))};var c=function(){return new a["a"]({routes:o["b"]})},i=c();function s(){var e=c();i.matcher=e.matcher}t["a"]=i},b775:function(e,t,n){"use strict";n("9e1f"),n("450d");var r=n("6ed5"),a=n.n(r),o=(n("0fb7"),n("f529")),u=n.n(o),c=(n("d3b7"),n("bc3a")),i=n.n(c),s=n("4360"),l=n("5f87"),d=i.a.create({baseURL:"121.41.178.240:5000",timeout:5e4});d.interceptors.request.use((function(e){return s["a"].getters.token&&(e.headers["Authorization"]="Bearer ".concat(Object(l["a"])())),e}),(function(e){return console.log(e),Promise.reject(e)})),d.interceptors.response.use((function(e){var t=e.data;return 0!==t.code?(u()({message:t.msg||"Error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||a.a.confirm("Token已失效，是否重新登录","确认登出",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then((function(){s["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.msg||"Error"))):t}),(function(e){var t=e.response.data.msg;return u()({message:t||"请求失败",type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=d},c653:function(e,t,n){var r={"./permission.js":"31c2","./user.js":"0f9a"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="c653"},c789:function(e,t,n){"use strict";n("40c7")},d046:function(e,t,n){"use strict";n.d(t,"b",(function(){return J})),n.d(t,"a",(function(){return W}));n("d3b7"),n("3ca3"),n("ddb0");var r,a,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout"},[n("Sidebar",{staticClass:"sidebar-container"}),n("div",{staticClass:"main-container"},[n("div",{class:{"fixed-header":e.fixedHeader}},[n("NavBar")],1),n("keep-alive",[n("router-view")],1)],1)],1)},u=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar"},[n("Breadcrumb",{staticClass:"breadcrumb-container",attrs:{id:"breadcrumb-container"}}),n("el-button",{staticClass:"logout-button",attrs:{round:"",size:"small"},on:{click:e.logout}},[e._v("登出")])],1)},i=[],s=n("1da1"),l=(n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-breadcrumb",{staticClass:"breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.levelList,(function(t,r){return n("el-breadcrumb-item",{key:t.path},[r==e.levelList.length-1?n("span",{staticClass:"no-redirect"},[e._v(e._s(t.meta.title))]):n("a",{on:{click:function(n){return n.preventDefault(),e.handleLink(t)}}},[e._v(e._s(t.meta.title))])])})),1)}),d=[],f=(n("2ca0"),n("4de4"),n("99af"),n("b0c0"),n("498a"),n("bd11")),m=n.n(f),h={name:"Breadcrumb",data:function(){return{levelList:null}},watch:{$route:function(e){e.path.startsWith("/redirect/")||this.getBreadcrumb()}},created:function(){this.getBreadcrumb()},methods:{getBreadcrumb:function(){var e=this.$route.matched.filter((function(e){return e.meta&&e.meta.title})),t=e[0];this.isHomePage(t)||(e=[{path:"/home",meta:{title:"home"}}].concat(e)),this.levelList=e.filter((function(e){return e.meta&&e.meta.title&&!1!==e.meta.breadcrumb}))},isHomePage:function(e){var t=e&&e.name;return!!t&&t.trim().toLowerCase()==="Home".toLowerCase()},pathCompile:function(e){var t=this.$route.params,n=m.a.compile(e);return n(t)},handleLink:function(e){var t=e.redirect,n=e.path;t?this.$router.push(t):this.$router.push(this.pathCompile(n))}}},p=h,b=(n("131d"),n("2877")),v=Object(b["a"])(p,l,d,!1,null,"bc0f27de",null),g=v.exports,k={name:"NavBar",components:{Breadcrumb:g},data:function(){return{}},methods:{logout:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("user/logout");case 2:e.$router.push("/login");case 3:case"end":return t.stop()}}),t)})))()}}},O=k,y=(n("331f"),Object(b["a"])(O,c,i,!1,null,"8769c5e4",null)),w=y.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar"},[n("el-scrollbar",{attrs:{"wrap-class":"scrollbar-wrapper"}},[n("el-menu",{attrs:{"default-active":e.activeMenu,collapse:!1,"background-color":"#304156","text-color":"#bfcbd9","unique-opened":!1,mode:"vertical"}},e._l(e.permission_routes,(function(e){return n("SidebarItem",{key:e.path,attrs:{item:e,"base-path":e.path}})})),1)],1)],1)},_=[],S=n("5530"),j=n("2f62"),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.item.hidden?e._e():n("div",{staticClass:"menu-wrapper"},[!e.hasOneShowingChild(e.item.children,e.item)||e.onlyOneChild.children&&!e.onlyOneChild.noShowingChildren?n("el-submenu",{ref:"subMenu",attrs:{index:e.resolvePath(e.item.path),"popper-append-to-body":""}},[n("template",{slot:"title"},[e.item.meta?n("Item",{attrs:{icon:e.item.meta&&e.item.meta.icon,title:e.item.meta.title}}):e._e()],1),e._l(e.item.children,(function(t){return n("sidebar-item",{key:t.path,staticClass:"nest-menu",attrs:{"is-nest":!0,item:t,"base-path":e.resolvePath(t.path)}})}))],2):[e.onlyOneChild.meta?n("router-link",{attrs:{to:e.resolvePath(e.onlyOneChild.path)}},[n("el-menu-item",{class:{"submenu-title-noDropdown":!e.isNest},attrs:{index:e.resolvePath(e.onlyOneChild.path)}},[n("Item",{attrs:{icon:e.onlyOneChild.meta.icon||e.item.meta&&e.item.meta.icon,title:e.onlyOneChild.meta.title}})],1)],1):e._e()]],2)},x=[],C=n("df7c"),P=n.n(C),L={name:"MenuItem",functional:!0,props:{icon:{type:String,default:""},title:{type:String,default:""}},render:function(e,t){var n=t.props,r=(n.icon,n.title),a=[];return r&&a.push(e("span",{slot:"title"},[r])),a}},N=L,R=Object(b["a"])(N,r,a,!1,null,null,null),$=R.exports,A={name:"SidebarItem",components:{Item:$},props:{item:{type:Object,retuired:!0},isNest:{type:Boolean,default:!1},basePath:{type:String,default:""}},data:function(){return this.onlyOneChild=null,{}},methods:{hasOneShowingChild:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,r=t.filter((function(t){return!t.hidden&&(e.onlyOneChild=t,!0)}));return 1===r.length||0===r.length&&(this.onlyOneChild=Object(S["a"])(Object(S["a"])({},n),{},{path:"",noShowingChildren:!0}),!0)},resolvePath:function(e){return P.a.resolve(this.basePath,e)}}},B=A,I=(n("6312"),Object(b["a"])(B,T,x,!1,null,"67172dd5",null)),M=I.exports,V={data:function(){return{}},components:{SidebarItem:M},computed:Object(S["a"])(Object(S["a"])({},Object(j["b"])(["permission_routes"])),{},{activeMenu:function(){var e=this.$route,t=(e.meta,e.path);return t}}),methods:{}},U=V,H=(n("c789"),Object(b["a"])(U,E,_,!1,null,"3f5403f4",null)),D=H.exports,K={name:"layout",components:{Sidebar:D,NavBar:w},data:function(){return{fixedHeader:!0}},methods:{}},q=K,z=(n("4806"),Object(b["a"])(q,o,u,!1,null,"0800bc68",null)),F=z.exports,J=[{path:"/login",component:function(){return n.e("chunk-554bfccd").then(n.bind(null,"6b27"))},hidden:!0,meta:{title:"图书后台管理系统"}},{path:"/",component:F,redirect:"/home",children:[{path:"home",component:function(){return n.e("chunk-cc610366").then(n.bind(null,"b3d7"))},name:"Home",meta:{title:"首页",affix:!0}}]}],W=[{path:"/book",name:"book",component:F,redirect:"/book/create",meta:{title:"图书管理",roles:["admin","editor"]},children:[{name:"bookCreate",path:"/book/create",component:function(){return Promise.all([n.e("chunk-72389847"),n.e("chunk-2d20f4f7")]).then(n.bind(null,"b2a2"))},meta:{title:"上传图书",roles:["admin"]}},{name:"bookEdit",path:"/book/edit/:fileName",component:function(){return Promise.all([n.e("chunk-72389847"),n.e("chunk-2d2171a3")]).then(n.bind(null,"c4fb"))},hidden:!0,meta:{title:"编辑图书",icon:"edit",roles:["admin"],activeMenu:"/book/list"}},{name:"bookList",path:"/book/list",component:function(){return n.e("chunk-86418678").then(n.bind(null,"fdbb"))},meta:{title:"图书列表",icon:"list",roles:["editor"]}}]}]},f21d:function(e,t,n){}});
//# sourceMappingURL=app.21847b74.js.map