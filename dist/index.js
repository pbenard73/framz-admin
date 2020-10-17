!function(t,e){for(var r in e)t[r]=e[r]}(exports,function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e){t.exports=require("framz")},function(t,e){t.exports=require("react")},function(t,e){t.exports=require("express")},function(t,e){t.exports=require("react-router-dom")},function(t,e,r){"use strict";r.r(e),r.d(e,"AdminModule",(function(){return A})),r.d(e,"AdminWrapper",(function(){return D})),r.d(e,"Admin",(function(){return k}));var n=r(0),o=r(2),u=function(t){return function(e,r,o){var u=e.params.modelName;if(!1===n.database.hasUrlModel(u))return o();var c="ROLE_".concat(u.toUpperCase(),"_").concat(t.toUpperCase());return!1===n.aclManager.isGranted(e,c)?o(Object(n.createError)(403)):o()}},c=Object(o.Router)();c.get("/:modelName",u("list"),(function(t,e,r){var o=t.params.modelName,u=("".concat(o.toLowerCase(),"_list"),{page:t.query.page,perpage:t.query.perpage});console.log("jsuis la");n.database.getUrlRepository(o).paginate(u).then((function(t){return e.json({valid:!0,data:t})})).catch((function(t){return r(Object(n.createError)(500,t))}))})),c.get("/:modelName/:id",u("show"),(function(t,e,r){var o=t.params,u=o.modelName,c=o.id;n.database.getUrlRepository(u).findById(c).then((function(t){return e.json({valid:!0,data:t})})).catch((function(t){return r(Object(n.createError)(500,t))}))})),c.put("/:modelName/:id",u("edit"),(function(t,e,r){var o=t.params,u=o.modelName,c=o.id;n.database.getUrlRepository(u).findById(c).then((function(t){return e.json({valid:!0,data:t})})).catch((function(t){return r(Object(n.createError)(500,t))}))})),c.post("/:modelName",u("create"),(function(t,e,r){var o=t.params.modelName;n.database.getUrlRepository(o).create(t.body).then((function(t){return e.json({valid:!0,data:t})})).catch((function(t){return r(Object(n.createError)(500,t))}))})),c.delete("/:modelName",u("delete"),(function(t,e,r){var o=t.param.modelName,u="".concat(o.toLowerCase(),"_list"),c={page:t.query.page,perpage:t.query.perpage},i=function(t){n.database.getUrlRepository(o).paginate(c).then((function(t){return e.json({valid:!0,data:t})})).catch((function(t){return r(Object(n.createError)(500,t))}))};if(null!==c.page)return i;n.cache.get(u).then((function(t){if(null!==t)return e.json({valid:!0,data:t});i()})).catch((function(t){i()}))}));var i=c,a=r(1),f=r.n(a);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=m(t);if(e){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}function d(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(u,t);var e,r,n,o=b(u);function u(){return p(this,u),o.apply(this,arguments)}return e=u,(r=[{key:"render",value:function(){return f.a.createElement("div",null,"Login")}}])&&s(e.prototype,r),n&&s(e,n),u}(f.a.Component);function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=R(t);if(e){var o=R(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return w(this,r)}}function w(t,e){return!e||"object"!==v(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(u,t);var e,r,n,o=_(u);function u(){return g(this,u),o.apply(this,arguments)}return e=u,(r=[{key:"render",value:function(){return f.a.createElement("div",null,f.a.createElement("h1",null,"Admin Area"),f.a.createElement(h,null))}}])&&O(e.prototype,r),n&&O(e,n),u}(f.a.Component),P=r(3);function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function x(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function N(t,e){return(N=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=T(t);if(e){var o=T(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return q(this,r)}}function q(t,e){return!e||"object"!==E(e)&&"function"!=typeof e?M(t):e}function M(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function U(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&N(t,e)}(r,t);var e=C(r);function r(){var t;x(this,r);for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return U(M(t=e.call.apply(e,[this].concat(o))),"name","admin"),U(M(t),"routers",[["/api",i]]),t}return r}(n.Module),D=function(){return f.a.createElement(P.BrowserRouter,null,f.a.createElement(S,null))},k=S}]));