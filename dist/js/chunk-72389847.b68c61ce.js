(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72389847"],{"040b":function(e,t,a){"use strict";a("7423")},"079c":function(e,t,a){"use strict";a("ecc8")},"17b7":function(e,t,a){"use strict";a("fc74")},7156:function(e,t,a){var o=a("861d"),l=a("d2bb");e.exports=function(e,t,a){var r,i;return l&&"function"==typeof(r=t.constructor)&&r!==a&&o(i=r.prototype)&&i!==a.prototype&&l(e,i),e}},7423:function(e,t,a){},"9a8b":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"postForm",staticClass:"detail",attrs:{model:e.postForm,rules:e.rules}},[a("sticky",{attrs:{"class-name":"sub-navbar"}},[a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{loading:e.loading,type:"success"},on:{click:e.submitForm}},[e._v(" "+e._s(e.isEdit?"编辑电子书":"新增电子书")+" ")])],1),a("div",{staticClass:"detail-container"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("ebook-upload",{attrs:{"file-list":e.fileList,disabled:e.isEdit},on:{onSuccess:e.onUploadSuccess,onRemove:e.onUploadRemove}})],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{prop:"title"}},[a("MdInput",{attrs:{maxlength:100,name:"name",required:""},model:{value:e.postForm.title,callback:function(t){e.$set(e.postForm,"title",t)},expression:"postForm.title"}},[e._v(" 书名 ")])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"author",label:"作者：","label-width":e.labelWidth}},[a("el-input",{attrs:{placeholder:"作者"},model:{value:e.postForm.author,callback:function(t){e.$set(e.postForm,"author",t)},expression:"postForm.author"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"publisher",label:"出版社：","label-width":e.labelWidth}},[a("el-input",{attrs:{placeholder:"出版社"},model:{value:e.postForm.publisher,callback:function(t){e.$set(e.postForm,"publisher",t)},expression:"postForm.publisher"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"coverPath",label:"分类：","label-width":e.labelWidth}},[a("el-input",{attrs:{placeholder:"分类"},model:{value:e.postForm.categoryText,callback:function(t){e.$set(e.postForm,"categoryText",t)},expression:"postForm.categoryText"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"coverPath",label:"分类编号","label-width":e.labelWidth}},[a("el-input",{attrs:{placeholder:"分类编号"},model:{value:e.postForm.category,callback:function(t){e.$set(e.postForm,"category",t)},expression:"postForm.category"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"language",label:"语言：","label-width":e.labelWidth}},[a("el-input",{attrs:{placeholder:"语言"},model:{value:e.postForm.language,callback:function(t){e.$set(e.postForm,"language",t)},expression:"postForm.language"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"rootFile",label:"根文件：","label-width":e.labelWidth}},[a("el-input",{attrs:{placeholder:"根文件",disabled:""},model:{value:e.postForm.rootFile,callback:function(t){e.$set(e.postForm,"rootFile",t)},expression:"postForm.rootFile"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"filePath",label:"文件路径：","label-width":e.labelWidth}},[a("el-input",{attrs:{placeholder:"文件路径",disabled:""},model:{value:e.postForm.filePath,callback:function(t){e.$set(e.postForm,"filePath",t)},expression:"postForm.filePath"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"unzipPath",label:"解压路径：","label-width":e.labelWidth}},[a("el-input",{attrs:{placeholder:"解压路径",disabled:""},model:{value:e.postForm.unzipPath,callback:function(t){e.$set(e.postForm,"unzipPath",t)},expression:"postForm.unzipPath"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"coverPath",label:"封面路径：","label-width":e.labelWidth}},[a("el-input",{attrs:{placeholder:"封面路径",disabled:""},model:{value:e.postForm.coverPath,callback:function(t){e.$set(e.postForm,"coverPath",t)},expression:"postForm.coverPath"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"originalName",label:"文件名称：","label-width":e.labelWidth}},[a("el-input",{attrs:{placeholder:"文件名称",disabled:""},model:{value:e.postForm.originalName,callback:function(t){e.$set(e.postForm,"originalName",t)},expression:"postForm.originalName"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{prop:"cover",label:"封面：","label-width":e.labelWidth}},[e.postForm.cover?a("a",{attrs:{href:e.postForm.cover,target:"_blank"}},[a("img",{staticClass:"preview-img",attrs:{src:e.postForm.cover}})]):a("span",[e._v("无")])])],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"目录：","label-width":e.labelWidth}},[e.contentsTree&&e.contentsTree.length>0?a("div",{staticClass:"contents-wrapper"},[a("el-tree",{attrs:{data:e.contentsTree},on:{"node-click":e.onContentClick}})],1):a("span",[e._v("无")])])],1)],1)],1)],1)],1)],1)},l=[],r=a("5530"),i=(a("b64b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:{height:e.height+"px",zIndex:e.zIndex}},[a("div",{class:e.className,style:{top:e.isSticky?e.stickyTop+"px":"",zIndex:e.zIndex,position:e.position,width:e.width,height:e.height+"px"}},[e._t("default",[a("div",[e._v("sticky")])])],2)])}),n=[],s=(a("a9e3"),{name:"Sticky",props:{stickyTop:{type:Number,default:0},zIndex:{type:Number,default:1},className:{type:String,default:""}},data:function(){return{active:!1,position:"",width:void 0,height:void 0,isSticky:!1}},mounted:function(){this.height=this.$el.getBoundingClientRect().height,window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)},activated:function(){this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)},methods:{sticky:function(){this.active||(this.position="fixed",this.active=!0,this.width=this.width+"px",this.isSticky=!0)},handleReset:function(){this.active&&this.reset()},reset:function(){this.position="",this.width="auto",this.active=!1,this.isSticky=!1},handleScroll:function(){var e=this.$el.getBoundingClientRect().width;this.width=e||"auto";var t=this.$el.getBoundingClientRect().top;t<this.stickyTop?this.sticky():this.handleReset()},handleResize:function(){this.isSticky&&(this.width=this.$el.getBoundingClientRect().width+"px")}}}),c=s,u=a("2877"),d=Object(u["a"])(c,i,n,!1,null,null,null),p=d.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"upload-container"},[a("el-upload",{staticClass:"image-upload",attrs:{action:e.action,headers:e.headers,multiple:!1,limit:1,"before-upload":e.beforeUpload,"on-success":e.onSuccess,"on-error":e.onError,"on-remove":e.onRemove,"file-list":e.fileList,"on-exceed":e.onExceed,disabled:e.disabled,drag:"","show-file-list":"",accept:"application/epub+zip"}},[a("i",{staticClass:"el-icon-upload"}),0===e.fileList.length?a("div",{staticClass:"el-upload__text"},[e._v(" 请将电子书拖入或 "),a("em",[e._v("点击上传")])]):a("div",{staticClass:"el-upload__text"},[e._v("图书已上传")])])],1)},h=[],f=a("5f87"),b={props:{fileList:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1}},data:function(){return{action:"http://localhost:5000/book/upload"}},computed:{headers:function(){return{Authorization:"Bearer ".concat(Object(f["a"])())}}},methods:{beforeUpload:function(e){this.$emit("beforeUpload",e)},onSuccess:function(e,t){var a=e.code,o=e.msg,l=e.data;0===a?(this.$message({message:o,type:"success"}),this.$emit("onSuccess",l)):(this.$message({message:o&&"上传失败，失败原因：".concat(o)||"上传失败",type:"error"}),this.$emit("onError",t))},onError:function(e){var t=e.message&&JSON.parse(e.message);this.$message({message:t&&t.msg&&"上传失败，失败原因：".concat(t.msg)||"上传失败",type:"error"}),this.$emit("onError",e)},onRemove:function(){this.$message({message:"电子书删除成功",type:"success"}),this.$emit("onRemove")},onExceed:function(){this.$message({message:"每次只能上传一本电子书",type:"warning"})}}},g=b,v=(a("079c"),Object(u["a"])(g,m,h,!1,null,null,null)),y=v.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"material-input__component",class:e.computedClasses},[a("div",{class:{iconClass:e.icon}},[e.icon?a("i",{staticClass:"el-input__icon material-input__icon",class:["el-icon-"+e.icon]}):e._e(),"email"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,required:e.required,type:"email"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),"url"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,required:e.required,type:"url"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),"number"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,step:e.step,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,max:e.max,min:e.min,minlength:e.minlength,maxlength:e.maxlength,required:e.required,type:"number"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),"password"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,max:e.max,min:e.min,required:e.required,type:"password"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),"tel"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,required:e.required,type:"tel"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),"text"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,minlength:e.minlength,maxlength:e.maxlength,required:e.required,type:"text"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),a("span",{staticClass:"material-input-bar"}),a("label",{staticClass:"material-label"},[e._t("default")],2)])])},w=[],x={name:"MdInput",props:{icon:String,name:String,type:{type:String,default:"text"},value:[String,Number],placeholder:String,readonly:Boolean,disabled:Boolean,min:String,max:String,step:String,minlength:Number,maxlength:Number,required:{type:Boolean,default:!0},autoComplete:{type:String,default:"off"},validateEvent:{type:Boolean,default:!0}},data:function(){return{currentValue:this.value,focus:!1,fillPlaceHolder:null}},computed:{computedClasses:function(){return{"material--active":this.focus,"material--disabled":this.disabled,"material--raised":Boolean(this.focus||this.currentValue)}}},watch:{value:function(e){this.currentValue=e}},methods:{handleModelInput:function(e){var t=e.target.value;this.$emit("input",t),"ElFormItem"===this.$parent.$options.componentName&&this.validateEvent&&this.$parent.$emit("el.form.change",[t]),this.$emit("change",t)},handleMdFocus:function(e){this.focus=!0,this.$emit("focus",e),this.placeholder&&""!==this.placeholder&&(this.fillPlaceHolder=this.placeholder)},handleMdBlur:function(e){this.focus=!1,this.$emit("blur",e),this.fillPlaceHolder=null,"ElFormItem"===this.$parent.$options.componentName&&this.validateEvent&&this.$parent.$emit("el.form.blur",[this.currentValue])}}},k=x,$=(a("040b"),Object(u["a"])(k,F,w,!1,null,"21944868",null)),N=$.exports,_=a("b067"),C={title:"书名",author:"作者",pulisher:"出版社",language:"语言"},E={name:"",components:{Sticky:p,EbookUpload:y,MdInput:N},props:{isEdit:Boolean},data:function(){var e=function(e,t,a){t&&0!==t.length?a():a(new Error(C[e.field]+"必须填写"))};return{loading:!1,postForm:{},fileList:[],labelWidth:"120px",contentsTree:[],rules:{title:[{validator:e}],author:[{validator:e}],language:[{validator:e}],pulisher:[{validator:e}]}}},created:function(){if(this.isEdit){var e=this.$route.params.fileName;this.getBookData(e)}},methods:{showGuide:function(){},submitForm:function(){var e=this;this.loading||(this.loading=!0,this.$refs.postForm.validate((function(t,a){if(t){var o=Object(r["a"])({},e.postForm);delete o.contentsTree,e.isEdit?Object(_["g"])(o).then((function(t){var a=t.msg;e.$message({type:"success",message:a}),e.loading=!1})).catch((function(){e.loading=!1})):Object(_["a"])(o).then((function(t){var a=t.msg;e.$message({type:"success",message:a}),e.loading=!1,e.setDefault()})).catch((function(){e.loading=!1}))}else{var l=a[Object.keys(a)[0]][0].message;e.$message({message:l,type:"error"}),e.loading=!1}})))},onUploadSuccess:function(e){console.log("onUploadSuccess",e),this.setData(e)},onUploadRemove:function(){console.log("onUploadRemove",this.postForm),Object(_["f"])(this.postForm),this.setDefault()},setDefault:function(){this.contentsTree=[],this.fileList=[],this.$refs.postForm.resetFields()},onContentClick:function(e){e.text&&window.open(e.text)},setData:function(e){var t=e.title,a=e.author,o=e.publisher,l=e.language,i=e.rootFile,n=e.cover,s=e.url,c=e.originalName,u=e.contents,d=e.contentsTree,p=e.fileName,m=e.coverPath,h=e.filePath,f=e.unzipPath,b=e.category,g=e.categoryText;this.postForm=Object(r["a"])(Object(r["a"])({},this.postForm),{},{title:t,author:a,publisher:o,language:l,rootFile:i,cover:n,url:s,originalName:c,contents:u,contentsTree:d,fileName:p,coverPath:m,filePath:h,unzipPath:f,category:b||99,categoryText:g||"自定义"}),this.contentsTree=d,this.fileList=[{name:c||p,url:s}],console.log(this.postForm)},getBookData:function(e){var t=this;Object(_["c"])(e).then((function(e){t.setData(e.data)}))}}},P=E,I=(a("17b7"),Object(u["a"])(P,o,l,!1,null,"19c64c40",null));t["a"]=I.exports},a9e3:function(e,t,a){"use strict";var o=a("83ab"),l=a("da84"),r=a("94ca"),i=a("6eeb"),n=a("5135"),s=a("c6b6"),c=a("7156"),u=a("c04e"),d=a("d039"),p=a("7c73"),m=a("241c").f,h=a("06cf").f,f=a("9bf2").f,b=a("58a8").trim,g="Number",v=l[g],y=v.prototype,F=s(p(y))==g,w=function(e){var t,a,o,l,r,i,n,s,c=u(e,!1);if("string"==typeof c&&c.length>2)if(c=b(c),t=c.charCodeAt(0),43===t||45===t){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:o=2,l=49;break;case 79:case 111:o=8,l=55;break;default:return+c}for(r=c.slice(2),i=r.length,n=0;n<i;n++)if(s=r.charCodeAt(n),s<48||s>l)return NaN;return parseInt(r,o)}return+c};if(r(g,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var x,k=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof k&&(F?d((function(){y.valueOf.call(a)})):s(a)!=g)?c(new v(w(t)),a,k):w(t)},$=o?m(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;$.length>N;N++)n(v,x=$[N])&&!n(k,x)&&f(k,x,h(v,x));k.prototype=y,y.constructor=k,i(l,g,k)}},b067:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return r})),a.d(t,"g",(function(){return i})),a.d(t,"d",(function(){return n})),a.d(t,"e",(function(){return s})),a.d(t,"b",(function(){return c})),a.d(t,"f",(function(){return u}));var o=a("b775");function l(e){return Object(o["a"])({url:"/book/create",method:"post",data:e})}function r(e){return Object(o["a"])({url:"/book/get",method:"get",params:{fileName:e}})}function i(e){return Object(o["a"])({url:"/book/update",method:"post",data:e})}function n(){return Object(o["a"])({url:"/book/category",method:"get"})}function s(e){return Object(o["a"])({url:"/book/list",method:"get",params:e})}function c(e,t){return Object(o["a"])({url:"/book/delete",method:"get",params:{fileName:e,title:t}})}function u(e){return Object(o["a"])({url:"/book/remove",method:"post",data:e})}},ecc8:function(e,t,a){},fc74:function(e,t,a){}}]);
//# sourceMappingURL=chunk-72389847.b68c61ce.js.map