(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bcf8d04"],{"25f0":function(t,e,n){"use strict";var a=n("6eeb"),r=n("825a"),i=n("d039"),o=n("ad6d"),l="toString",c=RegExp.prototype,u=c[l],s=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),p=u.name!=l;(s||p)&&a(RegExp.prototype,l,(function(){var t=r(this),e=String(t.source),n=t.flags,a=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?o.call(t):n);return"/"+e+"/"+a}),{unsafe:!0})},"272e":function(t,e,n){},3882:function(t,e,n){t.exports=n.p+"img/image.0ae4ea35.jpg"},"4d63":function(t,e,n){var a=n("83ab"),r=n("da84"),i=n("94ca"),o=n("7156"),l=n("9bf2").f,c=n("241c").f,u=n("44e7"),s=n("ad6d"),p=n("9f7f"),f=n("6eeb"),d=n("d039"),g=n("69f3").set,h=n("2626"),b=n("b622"),y=b("match"),m=r.RegExp,v=m.prototype,w=/a/g,k=/a/g,_=new m(w)!==w,S=p.UNSUPPORTED_Y,C=a&&i("RegExp",!_||S||d((function(){return k[y]=!1,m(w)!=w||m(k)==k||"/a/i"!=m(w,"i")})));if(C){var x=function(t,e){var n,a=this instanceof x,r=u(t),i=void 0===e;if(!a&&r&&t.constructor===x&&i)return t;_?r&&!i&&(t=t.source):t instanceof x&&(i&&(e=s.call(t)),t=t.source),S&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,"")));var l=o(_?new m(t,e):m(t,e),a?this:v,x);return S&&n&&g(l,{sticky:n}),l},N=function(t){t in x||l(x,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},E=c(m),F=0;while(E.length>F)N(E[F++]);v.constructor=x,x.prototype=v,f(r,"RegExp",x)}h("RegExp")},"50a9":function(t,e,n){},7156:function(t,e,n){var a=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var i,o;return r&&"function"==typeof(i=e.constructor)&&i!==n&&a(o=i.prototype)&&o!==n.prototype&&r(t,o),t}},a9e3:function(t,e,n){"use strict";var a=n("83ab"),r=n("da84"),i=n("94ca"),o=n("6eeb"),l=n("5135"),c=n("c6b6"),u=n("7156"),s=n("c04e"),p=n("d039"),f=n("7c73"),d=n("241c").f,g=n("06cf").f,h=n("9bf2").f,b=n("58a8").trim,y="Number",m=r[y],v=m.prototype,w=c(f(v))==y,k=function(t){var e,n,a,r,i,o,l,c,u=s(t,!1);if("string"==typeof u&&u.length>2)if(u=b(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+u}for(i=u.slice(2),o=i.length,l=0;l<o;l++)if(c=i.charCodeAt(l),c<48||c>r)return NaN;return parseInt(i,a)}return+u};if(i(y,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var _,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(w?p((function(){v.valueOf.call(n)})):c(n)!=y)?u(new m(k(e)),n,S):k(e)},C=a?d(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),x=0;C.length>x;x++)l(m,_=C[x])&&!l(S,_)&&h(S,_,g(m,_));S.prototype=v,v.constructor=S,o(r,y,S)}},b067:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"f",(function(){return o})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return u}));var a=n("b775");function r(t){return Object(a["a"])({url:"/book/create",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/book/get",method:"get",params:{fileName:t}})}function o(t){return Object(a["a"])({url:"/book/update",method:"post",data:t})}function l(){return Object(a["a"])({url:"/book/category",method:"get"})}function c(t){return Object(a["a"])({url:"/book/list",method:"get",params:t})}function u(t,e){return Object(a["a"])({url:"/book/delete",method:"get",params:{fileName:t,title:e}})}},cc40:function(t,e,n){"use strict";n("272e")},e7e5:function(t,e,n){"use strict";n("50a9")},fdbb:function(t,e,n){"use strict";n.r(e);var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bookList"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"书名",clearable:""},on:{clear:t.handleFilter,blur:t.handleFilter},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}}),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"作者",clearable:""},on:{clear:t.handleFilter,blur:t.handleFilter},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.author,callback:function(e){t.$set(t.listQuery,"author",e)},expression:"listQuery.author"}}),n("el-select",{staticClass:"filter-item",attrs:{placeholder:"分类",clearable:""},on:{change:t.handleFilter,clear:t.handleFilter},model:{value:t.listQuery.category,callback:function(e){t.$set(t.listQuery,"category",e)},expression:"listQuery.category"}},t._l(t.categoryList,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label+"("+t.num+")",value:t.value}})})),1),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(" 查询 ")]),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v(" 新增 ")]),n("el-checkbox",{staticClass:"filter-item",staticStyle:{"margin-left":"5px"},on:{click:t.changeShowCover},model:{value:t.showCover,callback:function(e){t.showCover=e},expression:"showCover"}},[t._v(" 显示封面 ")])],1),n("el-table",{key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":"","default-sort":{prop:"id",order:"descending"}},on:{"sort-change":t.sortChange}},[n("el-table-column",{attrs:{label:"ID",prop:"id",sortable:"custom",align:"center",width:"80"}}),n("el-table-column",{attrs:{label:"书名",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row.titleWrapper;return[n("span",{domProps:{innerHTML:t._s(a)}})]}}])}),n("el-table-column",{attrs:{label:"作者",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row.authorWrapper;return[n("span",{domProps:{innerHTML:t._s(a)}})]}}])}),n("el-table-column",{attrs:{label:"出版社",prop:"publisher",align:"center",width:"150"}}),n("el-table-column",{attrs:{label:"分类",prop:"categoryText",align:"center",width:"100"}}),n("el-table-column",{attrs:{label:"语言",prop:"language",align:"center"}}),t.showCover?n("el-table-column",{attrs:{label:"封面",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row,r=a.cover,i=a.coverPath;return[i?n("a",{attrs:{href:r,target:"_blank"}},[n("img",{staticStyle:{width:"120px",height:"180px"},attrs:{src:r}})]):n("a",{attrs:{href:t.image,target:"_blank"}},[n("img",{staticStyle:{width:"120px",height:"180px"},attrs:{src:t.image}})])]}}],null,!1,4194992295)}):t._e(),n("el-table-column",{attrs:{label:"文件名",prop:"fileName",width:"100",align:"center"}}),n("el-table-column",{attrs:{label:"文件路径",prop:"filePath",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row.filePath;return[n("span",[t._v(t._s(t._f("valueFilter")(a)))])]}}])}),n("el-table-column",{attrs:{label:"封面路径",prop:"coverPath",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row.coverPath;return[n("span",[t._v(t._s(t._f("valueFilter")(a)))])]}}])}),n("el-table-column",{attrs:{label:"解压路径",prop:"unzipPath",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row.unzipPath;return[n("span",[t._v(t._s(t._f("valueFilter")(a)))])]}}])}),n("el-table-column",{attrs:{label:"上传人",prop:"createUser",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row.createUser;return[n("span",[t._v(t._s(t._f("valueFilter")(a)))])]}}])}),n("el-table-column",{attrs:{label:"上传时间",prop:"createDt",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row.createDt;return[n("span",[t._v(t._s(t._f("timeFilter")(a)))])]}}])}),t.isAdmin?n("el-table-column",{attrs:{label:"操作",width:"120",align:"center",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(e){return t.handleUpdate(a)}}}),n("el-button",{staticStyle:{color:"#f56c6c"},attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(e){return t.handleDelete(a)}}})]}}],null,!1,2043140727)}):t._e()],1),n("pagination",{attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.pageSize},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"pageSize",e)},pagination:t.getList}})],1)},i=[],o=n("5530"),l=(n("5319"),n("ac1f"),n("4d63"),n("25f0"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)}),c=[],u=(n("a9e3"),{name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t})},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize})}}}),s=u,p=(n("e7e5"),n("2877")),f=Object(p["a"])(s,l,c,!1,null,"7dfd9f2e",null),d=f.exports,g=n("b067"),h={name:"List",components:{Pagination:d},filters:{valueFilter:function(t){return t||"无"},timeFilter:function(t){return t?a.parseTime(t):"无"}},data:function(){return{listQuery:{},showCover:!1,categoryList:[],tableKey:0,list:[],total:0,isAdmin:!1,image:n("3882")}},beforeCreate:function(){a=this},created:function(){this.parseQuery(),this.isAdmin="admin"===this.$store.getters.roles[0]},mounted:function(){this.getCategoryList(),this.getList()},methods:{parseQuery:function(){var t={page:1,pageSize:20,sort:"+id"};this.listQuery=Object(o["a"])(Object(o["a"])({},t),this.listQuery)},getCategoryList:function(){var t=this;Object(g["d"])().then((function(e){t.categoryList=e.data}))},wrapperKeyword:function(t,e){function n(t){return'<span style="color: #DC143C">'.concat(t,"</span>")}return this.listQuery[t]?(e=e.replace(new RegExp(this.listQuery[t],"ig"),(function(t){return n(t)})),e):e},getList:function(){var t=this;Object(g["e"])(this.listQuery).then((function(e){console.log(e.data);var n=e.data,a=n.list,r=n.count;n.page,n.pageSize;t.list=a,t.total=r,t.list.forEach((function(e){e.titleWrapper=t.wrapperKeyword("title",e.title),e.authorWrapper=t.wrapperKeyword("author",e.author)}))}))},handleFilter:function(){this.getList()},handleCreate:function(){this.$router.push("/book/create")},changeShowCover:function(t){this.showCover=t},sortChange:function(t){var e=t.prop,n=t.order;this.sortBy(e,n)},sortBy:function(t,e){this.listQuery.sort="ascending"===e?"+".concat(t):"-".concat(t),this.handleFilter()},handleUpdate:function(t){this.$router.push("/book/edit/".concat(t.fileName))},handleDelete:function(t){var e=this;this.$confirm("此操作将永久删除该电子书，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(g["b"])(t.fileName,t.title).then((function(t){e.$notify({title:"成功",message:t.msg||"删除成功",type:"success",duration:2e3}),e.handleFilter()}))}))},parseTime:function(t){var e=new Date(t),n=e.getFullYear()+"-",a=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",r=e.getDate()<10?"0"+e.getDate()+" ":e.getDate()+" ",i=e.getHours()<10?"0"+e.getHours()+":":e.getHours()+":",o=e.getMinutes()<10?"0"+e.getMinutes()+":":e.getMinutes()+":",l=e.getSeconds();return n+a+r+i+o+l}}},b=h,y=(n("cc40"),Object(p["a"])(b,r,i,!1,null,"041b1675",null));e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-0bcf8d04.16df686a.js.map