(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21fee952"],{"48e4":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("NavBarLayout",{scopedSlots:t._u([{key:"router",fn:function(){return[a("ul",{staticClass:"flex flex-col"},t._l(t.links,(function(e){var s=e.name,l=e.path;return a("li",{key:l,staticClass:"w-60 px-10 py-2.5 group hover:bg-accordion-open cursor-pointer"},[a("router-link",{staticClass:"block text-2xl group-hover:text-main-red",attrs:{to:l}},[t._v(" "+t._s(s)+" ")])],1)})),0)]},proxy:!0},{key:"default",fn:function(){return[a("router-view")]},proxy:!0}])})},l=[],n=a("dd0c"),r={components:{NavBarLayout:n["a"]},data:function(){return{links:[{name:"我的帳戶",path:"/member/user/auth/edit-password"},{name:"我的收藏",path:"/member/collect"},{name:"播放紀錄",path:"/member/history"},{name:"系統公告",path:"/member/announcement"}]}}},i=r,c=a("2877"),o=Object(c["a"])(i,s,l,!1,null,null,null);e["default"]=o.exports},d6f0:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex gap-5 mt-8 w-full justify-between"},[a("div",{staticClass:"w-full lg:w-80 h-40 bg-gray-100 flex items-center justify-center"},[t._v(" ad ")]),a("div",{staticClass:"w-full lg:w-80 h-40 bg-gray-100 flex items-center justify-center"},[t._v(" ad ")]),a("div",{staticClass:"w-full lg:w-80 h-40 bg-gray-100 flex items-center justify-center"},[t._v(" ad ")]),a("div",{staticClass:"w-full lg:w-80 h-40 bg-gray-100 flex items-center justify-center"},[t._v(" ad ")]),a("div",{staticClass:"w-full lg:w-80 h-40 bg-gray-100 flex items-center justify-center"},[t._v(" ad ")])])}],n=a("2877"),r={},i=Object(n["a"])(r,s,l,!1,null,null,null);e["a"]=i.exports},dd0c:function(t,e,a){"use strict";for(var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"flex"},[t.isHiddenNav?a("div",{staticClass:"hidden lg:block pr-4 mr-4 py-4 lg:py-10"}):a("nav",{staticClass:"hidden lg:block pr-4 mr-4 py-4 lg:py-10 overflow-y-scroll lg:h-layout"},[t._t("router"),a("div",{staticClass:"flex flex-col mt-72 ml-10"},t._l(t.footerLinks,(function(e){var s=e.path,l=e.name;return a("router-link",{key:l,staticClass:"text-link hover:text-main-red mb-2.5",attrs:{to:s}},[t._v(" "+t._s(l)+" ")])})),1)],2),a("div",{ref:"main",staticClass:"flex-1 px-4 lg:px-0 lg:pr-10 flex flex-col overflow-y-scroll h-auto lg:h-layout py-4 lg:py-10"},[a("NavbarLink"),t._m(0),a("div",{staticClass:"flex-1"},[t._t("default")],2),a("ADs",{staticClass:"hidden lg:flex"})],1)])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col lg:flex-row gap-2.5 mb-5 lg:mb-20"},[a("div",{staticClass:"h-16 lg:h-40 lg:w-1/2 bg-gray-100 flex items-center justify-center"},[t._v(" ad ")]),a("div",{staticClass:"h-16 lg:h-40 lg:w-1/2 bg-gray-100 flex items-center justify-center"},[t._v(" ad ")])])}],n=a("5530"),r=(a("7db0"),a("d3b7"),a("b0c0"),a("2f62")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"overflow-x-scroll flex flex-nowrap flex-shrink-0 gap-6 mb-5"},t._l(t.links,(function(e,s){return a("a",{key:s,staticClass:"underline flex-shrink-0",attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.title))])})),0)},c=[],o=[],u=0;u<=30;u++){var f=u%2===0?" test":"不良";o.push({title:f,href:"https://www.google.com"})}var m={data:function(){return{links:o}}},d=m,h=a("2877"),v=Object(h["a"])(d,i,c,!1,null,null,null),p=v.exports,g=a("d6f0"),y={components:{NavbarLink:p,ADs:g["a"]},data:function(){return{isHiddenNav:!1,footerLinks:[{path:"/system/link",name:"友情連結"},{path:"/system/policy",name:"政策說明"},{path:"/system/service",name:"服務條款"},{path:"/system/privacy",name:"隱私權政策"},{path:"/system/disclaimer",name:"免責聲明"},{path:"/system",name:"聯絡我們"}]}},computed:Object(n["a"])({},Object(r["c"])(["isLogin"])),watch:{$route:{immediate:!0,handler:function(t){var e=t.matched.find((function(t){return"Member"===t.name}));!e||this.isLogin?this.isHiddenNav=!1:this.isHiddenNav=!0}},"$route.path":{immediate:!0,handler:function(){this.$refs.main&&this.$refs.main.scrollTo({top:0,behavior:"smooth"})}}}},x=y,b=Object(h["a"])(x,s,l,!1,null,null,null);e["a"]=b.exports}}]);
//# sourceMappingURL=chunk-21fee952.8e3ec363.js.map