(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42b708a9"],{"4fcf":function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lg:px-9"},[t.title?a("p",{staticClass:"text-3xl mb-10"},[t._v(t._s(t.title))]):t._e(),t._t("default")],2)},r=[],n={props:{title:{type:String,default:""}}},s=n,i=a("2877"),o=Object(i["a"])(s,l,r,!1,null,null,null);e["a"]=o.exports},"5cb6":function(t,e,a){t.exports=a.p+"img/mail.6aec0ea1.png"},"8d10":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("PageContainer",{attrs:{title:t.$t("forget_password")}},["form"===t.defaultKey?l("form",{staticClass:"w-full max-w-screen-sm mx-auto",on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[l("FormInput",{attrs:{placeholder:t.$t("auth_input_email"),error:t.emailError,value:t.email},on:{onChange:t.handleChangeEmail}}),l("button",{staticClass:"rounded w-full py-2.5 lg:py-4 text-center text-white bg-button hover:bg-main-red text-xl lg:text-3xl"},[t._v(" "+t._s(t.$t("auth_submit"))+" ")])],1):"confirm"===t.defaultKey?l("div",{staticClass:"flex justify-center"},[l("div",{staticClass:"flex items-center gap-8 lg:text-4xl flex-col lg:flex-row"},[l("img",{staticClass:"w-20 h-20",attrs:{src:a("5cb6")}}),t._v(" "+t._s(t.$t("forget_password_email"))+" "),l("br"),t._v(" "+t._s(t.$t("forget_password_validate"))+" ")])]):t._e()])},r=[],n=a("4fcf"),s=a("db6d"),i={components:{PageContainer:n["a"],FormInput:s["a"]},data:function(){return{defaultKey:"form",email:"",emailError:""}},methods:{handleChangeEmail:function(t){this.email=t},handleSubmit:function(){this.email?this.defaultKey="confirm":this.emailError="*".concat(this.$t("error_email"))}}},o=i,u=a("2877"),c=Object(u["a"])(o,l,r,!1,null,null,null);e["default"]=c.exports},db6d:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-6"},[a("input",{staticClass:"px-2.5 py-4 lg:p-5 w-full border-1 border-solid border-input text-base lg:text-2xl rounded-md",attrs:{placeholder:t.placeholder,type:t.type},domProps:{value:t.value},on:{input:t.handleChange}}),a("div",{staticClass:"flex items-center justify-between mt-2.5 h-5 lg:h-7"},[a("p",{staticClass:"text-main-red text-base lg:text-xl",class:{"opacity-0":!t.error}},[t._v(" "+t._s(t.error)+" ")]),t._t("default")],2)])},r=[],n={props:{type:{type:String,default:"text"},value:{type:String,default:""},placeholder:{type:String,default:""},error:{type:String,default:""}},methods:{handleChange:function(t){this.$emit("onChange",t.target.value)}}},s=n,i=a("2877"),o=Object(i["a"])(s,l,r,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-42b708a9.ce7111ff.js.map