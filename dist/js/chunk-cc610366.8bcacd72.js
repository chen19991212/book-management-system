(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc610366"],{1148:function(t,e,a){"use strict";var r=a("a691"),n=a("1d80");t.exports="".repeat||function(t){var e=String(n(this)),a="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(a+=e);return a}},1988:function(t,e,a){"use strict";a("6448")},2629:function(t,e,a){"use strict";a("d7846")},"408a":function(t,e,a){var r=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},6448:function(t,e,a){},7156:function(t,e,a){var r=a("861d"),n=a("d2bb");t.exports=function(t,e,a){var i,o;return n&&"function"==typeof(i=e.constructor)&&i!==a&&r(o=i.prototype)&&o!==a.prototype&&n(t,o),t}},"8d51":function(t,e,a){"use strict";a("ae74")},"8ee8":function(t,e,a){"use strict";a("c142")},a9e3:function(t,e,a){"use strict";var r=a("83ab"),n=a("da84"),i=a("94ca"),o=a("6eeb"),s=a("5135"),c=a("c6b6"),l=a("7156"),u=a("c04e"),d=a("d039"),f=a("7c73"),h=a("241c").f,p=a("06cf").f,g=a("9bf2").f,b=a("58a8").trim,m="Number",v=n[m],y=v.prototype,w=c(f(y))==m,x=function(t){var e,a,r,n,i,o,s,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=b(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+l}for(i=l.slice(2),o=i.length,s=0;s<o;s++)if(c=i.charCodeAt(s),c<48||c>n)return NaN;return parseInt(i,r)}return+l};if(i(m,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var C,k=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof k&&(w?d((function(){y.valueOf.call(a)})):c(a)!=m)?l(new v(x(e)),a,k):x(e)},_=r?h(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),T=0;_.length>T;T++)s(v,C=_[T])&&!s(k,C)&&g(k,C,p(v,C));k.prototype=y,y.constructor=k,o(n,m,k)}},ae74:function(t,e,a){},b3d7:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"visits-container"},[a("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.handleTabClick},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}},[a("el-tab-pane",{attrs:{label:"上周访问量",name:"week"}},[a("VisitsChart",{attrs:{data:t.week,types:"week",total:t.weekTotal}})],1),a("el-tab-pane",{ref:"month",attrs:{label:"月度访问量",name:"month"}},["month"===t.current?a("VisitsChart",{attrs:{data:t.month,types:"month",total:t.monthTotal}}):t._e()],1),a("el-tab-pane",{attrs:{label:"年度访问量",name:"year"}},["year"===t.current?a("VisitsChart",{attrs:{data:t.year,types:"year",total:t.yearTotal}}):t._e()],1)],1)],1),a("div",{staticClass:"pro-container"},[a("PieChart",{attrs:{data:t.categoryData}}),a("RecordList",{attrs:{data:t.recordData}})],1)])},n=[],i=(a("b680"),a("b0c0"),a("b775"));function o(){return Object(i["a"])({url:"/data/visits",method:"get"})}function s(){return Object(i["a"])({url:"/data/category",method:"get"})}function c(){return Object(i["a"])({url:"/data/record",method:"get"})}var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"visitsChart",staticClass:"visitsChart"})},u=[],d=(a("a9e3"),{title:{text:"上周访问数据"},legend:{data:["访问量"]},tooltip:{show:!0,trigger:"axis"},xAxis:{data:["周一","周二","周三","周四","周五","周六","周日"],boundaryGap:!0,axisTick:{alignWithLabel:!0}},yAxis:{},series:[{name:"访问量",type:"line",data:[]}]}),f={title:{text:"月度访问数据"},legend:{data:["访问量"]},tooltip:{show:!0,trigger:"axis"},xAxis:{data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],boundaryGap:!0,axisTick:{alignWithLabel:!0}},yAxis:{},series:[{name:"访问量",type:"line",data:[]}]},h={title:{text:"年度访问数据"},legend:{data:["访问量"]},tooltip:{show:!0,trigger:"axis"},xAxis:{data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],boundaryGap:!0,axisTick:{alignWithLabel:!0}},yAxis:{},series:[{name:"访问量",type:"line",data:[]}]},p={name:"VisitsChart",props:{total:{type:Number,default:0},types:{type:String,default:""},data:{type:Array,default:[]}},data:function(){return{option:{}}},mounted:function(){this.renderChart()},methods:{renderChart:function(){var t=this.$echarts.init(this.$refs.visitsChart);switch(this.types){case"week":this.option=d;break;case"month":this.option=f;break;case"year":this.option=h;break}this.option.title.text="总访问量 :  ".concat(this.total),this.option.series[0].data=this.data,t.setOption(this.option,!0)}},watch:{data:function(t){this.renderChart()}}},g=p,b=(a("8d51"),a("2877")),m=Object(b["a"])(g,l,u,!1,null,"331ee85b",null),v=m.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"pie",staticClass:"pie"})},w=[],x={name:"PieChart",props:{data:{type:Array,default:{}}},data:function(){return{}},created:function(){},methods:{renderPieChart:function(){var t=this.$echarts.init(this.$refs.pie),e={title:{text:"访问量占比",left:"center",top:20},tooltip:{trigger:"item",formatter:"{b}: {d}%"},legend:{orient:"vertical",type:"scroll",right:0,show:!1},series:[{name:"访问量占比",type:"pie",radius:"50%",data:[],left:0,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};e.series[0].data=this.data,t.setOption(e)}},watch:{data:function(){this.renderPieChart()}}},C=x,k=(a("8ee8"),Object(b["a"])(C,y,w,!1,null,"6030fa66",null)),_=k.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"recordList"},[a("h3",[t._v("操作记录")]),a("ul",t._l(t.data,(function(e){return a("li",{key:e.id},[t._v(" 管理员 "),a("span",{staticClass:"user"},[t._v(t._s(e.user))]),t._v(" "+t._s(e.operation)+"了书籍 "),a("span",{staticClass:"book"},[t._v(t._s(e.book))]),a("span",{staticClass:"date"},[t._v(t._s(e.date))])])})),0)])},N=[],I={name:"RecordList",props:{data:{type:Array,default:[]}},data:function(){return{}},methods:{}},A=I,E=(a("1988"),Object(b["a"])(A,T,N,!1,null,"40e05837",null)),F=E.exports,S={name:"Home",components:{VisitsChart:v,PieChart:_,RecordList:F},data:function(){return{week:[],weekTotal:0,month:[],monthTotal:0,year:[],yearTotal:0,current:"week",categoryData:[],recordData:[]}},created:function(){var t=this;o().then((function(e){var a=e.data;a&&(t.week=a.week,t.weekTotal=a.weekTotal,t.month=a.month,t.monthTotal=a.monthTotal,t.year=a.year,t.yearTotal=a.yearTotal)})),s().then((function(e){e.data;var a=0,r=[];for(var n in e.data)a+=e.data[n];for(var i in e.data)r.push({value:(e.data[i]/a).toFixed(4),name:i});t.categoryData=r})),c().then((function(e){var a=e.data;if(a&&a.length>0)for(var r=0;r<a.length;r++)a[r].date=t.parseTime(a[r].date);t.recordData=a}))},methods:{handleTabClick:function(t,e){this.current=t.name},parseTime:function(t){var e=new Date(t),a=e.getFullYear()+"-",r=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",n=e.getDate()<10?"0"+e.getDate()+" ":e.getDate()+" ",i=e.getHours()<10?"0"+e.getHours()+":":e.getHours()+":",o=e.getMinutes()<10?"0"+e.getMinutes()+":":e.getMinutes()+":",s=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return a+r+n+i+o+s}}},O=S,M=(a("2629"),a("e484"),Object(b["a"])(O,r,n,!1,null,"5b8cc0ae",null));e["default"]=M.exports},b680:function(t,e,a){"use strict";var r=a("23e7"),n=a("a691"),i=a("408a"),o=a("1148"),s=a("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,a){return 0===e?a:e%2===1?u(t,e-1,a*t):u(t*t,e/2,a)},d=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},f=function(t,e,a){var r=-1,n=a;while(++r<6)n+=e*t[r],t[r]=n%1e7,n=l(n/1e7)},h=function(t,e){var a=6,r=0;while(--a>=0)r+=t[a],t[a]=l(r/e),r=r%e*1e7},p=function(t){var e=6,a="";while(--e>=0)if(""!==a||0===e||0!==t[e]){var r=String(t[e]);a=""===a?r:a+o.call("0",7-r.length)+r}return a},g=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));r({target:"Number",proto:!0,forced:g},{toFixed:function(t){var e,a,r,s,c=i(this),l=n(t),g=[0,0,0,0,0,0],b="",m="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(b="-",c=-c),c>1e-21)if(e=d(c*u(2,69,1))-69,a=e<0?c*u(2,-e,1):c/u(2,e,1),a*=4503599627370496,e=52-e,e>0){f(g,0,a),r=l;while(r>=7)f(g,1e7,0),r-=7;f(g,u(10,r,1),0),r=e-1;while(r>=23)h(g,1<<23),r-=23;h(g,1<<r),f(g,1,1),h(g,2),m=p(g)}else f(g,0,a),f(g,1<<-e,0),m=p(g)+o.call("0",l);return l>0?(s=m.length,m=b+(s<=l?"0."+o.call("0",l-s)+m:m.slice(0,s-l)+"."+m.slice(s-l))):m=b+m,m}})},c142:function(t,e,a){},d7846:function(t,e,a){},e484:function(t,e,a){"use strict";a("e4fd")},e4fd:function(t,e,a){}}]);
//# sourceMappingURL=chunk-cc610366.8bcacd72.js.map