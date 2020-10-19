!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t){e.exports=require("framz")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("reactizy")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("underscore")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("react-dom/server")},function(e,t,r){"use strict";r.r(t),r.d(t,"AdminModule",(function(){return $})),r.d(t,"AdminWrapper",(function(){return ee})),r.d(t,"Admin",(function(){return te})),r.d(t,"generateAdmin",(function(){return re}));var n=r(0),o=r(4);function u(e,t,r,n,o,u,i){try{var c=e[u](i),a=c.value}catch(e){return void r(e)}c.done?t(a):Promise.resolve(a).then(n,o)}var i=function(e){return function(){var t,r=(t=regeneratorRuntime.mark((function t(r,o,u){var i,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=r.params.modelName,!1!==n.database.hasUrlModel(i)){t.next=4;break}return r.isModelRoute=!1,t.abrupt("return",u());case 4:return c="ROLE_".concat(n.database.modelsUrl[i].toUpperCase(),"_").concat(e.toUpperCase()),t.next=7,n.aclManager.isGranted(r,c,!0);case 7:if(t.t0=t.sent,!1!==t.t0){t.next=10;break}return t.abrupt("return",u(Object(n.createError)(403)));case 10:return t.abrupt("return",u());case 11:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(e){u(i,n,o,c,a,"next",e)}function a(e){u(i,n,o,c,a,"throw",e)}c(void 0)}))});return function(e,t,n){return r.apply(this,arguments)}}()},c=Object(o.Router)();c.get("/:modelName",i("list"),(function(e,t,r){if(!1===e.isModelRoute)return r();var o=e.params.modelName,u=("".concat(o.toLowerCase(),"_list"),{page:e.query.page,perpage:e.query.perpage});n.database.getUrlRepository(e,o).paginate(u).then((function(e){return t.json({valid:!0,data:e})})).catch((function(e){return r(Object(n.createError)(500,e))}))})),c.get("/:modelName/:id",i("show"),(function(e,t,r){if(!1===e.isModelRoute)return r();var o=e.params,u=o.modelName,i=o.id;n.database.getUrlRepository(u).findById(i).then((function(e){return t.json({valid:!0,data:e})})).catch((function(e){return r(Object(n.createError)(500,e))}))})),c.put("/:modelName/:id",i("edit"),(function(e,t,r){if(!1===e.isModelRoute)return r();var o=e.params,u=o.modelName,i=o.id,c=e.body;n.database.getUrlRepository(u).update(c,{where:{id:i}}).then((function(e){return t.json({valid:!0,data:e})})).catch((function(e){return r(Object(n.createError)(500,e))}))})),c.post("/:modelName",i("create"),(function(e,t,r){if(!1===e.isModelRoute)return r();var o=e.params.modelName;n.database.getUrlRepository(o).create(e.body).then((function(e){return t.json({valid:!0,data:e})})).catch((function(e){return r(Object(n.createError)(500,e))}))})),c.delete("/:modelName",i("delete"),(function(e,t,r){if(!1===e.isModelRoute)return r();var o=e.param.modelName,u="".concat(o.toLowerCase(),"_list"),i={page:e.query.page,perpage:e.query.perpage},c=function(e){n.database.getUrlRepository(o).paginate(i).then((function(e){return t.json({valid:!0,data:e})})).catch((function(e){return r(Object(n.createError)(500,e))}))};if(null!==i.page)return c;n.cache.get(u).then((function(e){if(null!==e)return t.json({valid:!0,data:e});c()})).catch((function(e){c()}))}));var a=c,f=r(5),l=r.n(f),s=function(){console.log("AD IN",Object.keys(n.database.models)),l.a.each(Object.keys(n.database.models),(function(e){console.log("ROLE_".concat(e.toUpperCase(),"_LIST")),n.aclManager.addRole("ROLE_".concat(e.toUpperCase(),"_LIST"),"ROLE_SUPER_ADMIN")})),console.log(n.aclManager.pool)},p=r(1),y=r.n(p),d=r(6),b=r.n(d),m=r(7),h=r.n(m),v=r(2),g=r(3),O=Object(g.hocBuilder)({router:v.withRouter});function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=S(e);if(t){var o=S(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return E(this,r)}}function E(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(u,e);var t,r,n,o=P(u);function u(){return w(this,u),o.apply(this,arguments)}return t=u,(r=[{key:"loginBindThis",value:function(){this.props.api.call("login")}},{key:"render",value:function(){return y.a.createElement("div",null,"Login",y.a.createElement("button",{onClick:this.login},"click here"))}}])&&_(t.prototype,r),n&&_(t,n),u}(y.a.Component),M=O()(x);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=U(e);if(t){var o=U(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return D(this,r)}}function D(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(u,e);var t,r,n,o=q(u);function u(){return C(this,u),o.apply(this,arguments)}return t=u,(r=[{key:"render",value:function(){return y.a.createElement("div",null,y.a.createElement("h1",null,"Admin Area"),y.a.createElement(M,null),y.a.createElement("ul",null,this.props.models.map((function(e){return y.a.createElement("li",{key:e},e)}))))}}])&&N(t.prototype,r),n&&N(t,n),u}(y.a.Component);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var B=new function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),z(this,"state",{user:null}),z(this,"actions",{login:function(e,t){return I(I({},e),{},{user:t})}})};function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var G=function(e){return function(t){var r=n.database.getModelsInfo(e);return y.a.createElement(g.Store,{apis:[{login:{path:"/api/login",method:"post"}}],reduxers:[B]},y.a.createElement(A,F({},t,{models:r})))}},W=function(e){var t=this;return this.get([e,e+"/*"],(function(r,n){var o=G(t),u=h.a.renderToString(y.a.createElement(v.StaticRouter,{location:r.url},y.a.createElement(o,{locationPrefix:e})));b.a.readFile("node_modules/framz-admin/build/index","utf8",(function(e,t){t=t.replace('<div id="root"></div>','<div id="root">'.concat(u,"</div>")),n.send(t)}))})),this};function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Y(e);if(t){var o=Y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return V(this,r)}}function V(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?X(e):t}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(r,e);var t=Q(r);function r(){var e;J(this,r);for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return Z(X(e=t.call.apply(t,[this].concat(o))),"name","admin"),Z(X(e),"routers",[["/api",a]]),Z(X(e),"publicPaths",["./node_modules/framz-admin/build"]),Z(X(e),"initializers",{init:s,renderAdmin:W}),e}return r}(n.Module),ee=function(){return y.a.createElement(v.BrowserRouter,null,y.a.createElement(A,null))},te=A,re=G}]));