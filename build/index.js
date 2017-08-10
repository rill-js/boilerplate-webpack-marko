require("source-map-support").install({ hookRequire: true })
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("rill");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("marko/src/html");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("marko/src/runtime/html/helpers");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rill__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_helmet__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__rill_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rill_fresh__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rill_fresh___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__rill_fresh__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rill_etag__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rill_etag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__rill_etag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rill_compress__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rill_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__rill_compress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rill_polyfill__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rill_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__rill_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rill_static__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rill_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__rill_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rill_progress__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rill_progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__rill_progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rill_logger__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rill_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__rill_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rill_expose__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rill_expose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__rill_expose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rill_body__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rill_body___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__rill_body__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__controllers__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views__ = __webpack_require__(19);















var message = 'App Started';
console.time(message);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_rill___default()().use(__WEBPACK_IMPORTED_MODULE_2__rill_helmet___default()(global.SECURITY)).use(__WEBPACK_IMPORTED_MODULE_9__rill_logger___default()()).use(__WEBPACK_IMPORTED_MODULE_3__rill_fresh___default()()).use(__WEBPACK_IMPORTED_MODULE_4__rill_etag___default()()).use(__WEBPACK_IMPORTED_MODULE_5__rill_compress___default()()).get('/polyfill.js', __WEBPACK_IMPORTED_MODULE_6__rill_polyfill___default()()).get(__WEBPACK_IMPORTED_MODULE_7__rill_static___default()('build/public', { gzip: true, cache: __WEBPACK_IMPORTED_MODULE_0_ms___default()('30 days') + '; immutable' })).use(__WEBPACK_IMPORTED_MODULE_8__rill_progress___default()({ spinner: false, color: '#009fe2' })).use(__WEBPACK_IMPORTED_MODULE_10__rill_expose___default()()).use(__WEBPACK_IMPORTED_MODULE_11__rill_body___default()()).at('/api/*', !undefined && __WEBPACK_IMPORTED_MODULE_12__api__["a" /* default */]).at('/app/*', __WEBPACK_IMPORTED_MODULE_13__controllers__["a" /* default */]).get(__WEBPACK_IMPORTED_MODULE_14__views__["a" /* default */]).listen(function () {
  console.timeEnd(message);
  console.log('');
}));

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("ms");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@rill/helmet");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@rill/fresh");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@rill/etag");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@rill/compress");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@rill/polyfill");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@rill/static");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@rill/progress");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@rill/logger");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@rill/expose");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@rill/body");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers__ = __webpack_require__(16);
// Entry to server only api.



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_rill___default()().use(__WEBPACK_IMPORTED_MODULE_1__controllers__["a" /* default */]));

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile__ = __webpack_require__(17);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_rill___default()().get('/profile/view', __WEBPACK_IMPORTED_MODULE_1__profile__["a" /* view */]));

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = view;
function view(_ref) {
  var res = _ref.res;

  res.body = {
    name: 'Dylan Piercey'
  };
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rill__);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_rill___default()());

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rill_page__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rill_page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__rill_page__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_marko__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_marko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__rill_marko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_marko__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_marko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__home_marko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__other_marko__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__other_marko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__other_marko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__404_marko__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__404_marko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__404_marko__);







/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_rill___default()().get(__WEBPACK_IMPORTED_MODULE_1__rill_page___default.a.title('Marko BoilerPlate').link({ rel: 'stylesheet', href: '/index.css' }).script({ async: true, src: '/polyfill.js' }).script({ async: true, src: '/index.js' })).get('/', __WEBPACK_IMPORTED_MODULE_2__rill_marko___default()(__WEBPACK_IMPORTED_MODULE_3__home_marko___default.a)).get('/other', __WEBPACK_IMPORTED_MODULE_2__rill_marko___default()(__WEBPACK_IMPORTED_MODULE_4__other_marko___default.a)).get(__WEBPACK_IMPORTED_MODULE_2__rill_marko___default()(__WEBPACK_IMPORTED_MODULE_5__404_marko___default.a)));

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@rill/page");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@rill/marko");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.4.22 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(1).t(__filename),
    marko_component = {
        onCreate: function() {
          this.state = {
              count: 0
            };
        },
        increment: function() {
          this.state.count++;
        }
      },
    components_helpers = __webpack_require__(23),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/@rill/boilerplate-webpack-marko$0.0.1/app/views/home.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    logoImg = __webpack_require__(24),
    marko_helpers = __webpack_require__(2),
    marko_attr = marko_helpers.a,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div" +
    marko_attr("id", __component.id) +
    "><img" +
    marko_attr("src", logoImg) +
    "><input type=\"text\"><a href=\"/?reload\">Reload</a><a href=\"/other\">Go to the other page</a><div class=\"count\">" +
    marko_escapeXml(state.count) +
    "</div><button class=\"example-button\"" +
    marko_attr("data-marko", {
      onclick: __component.d("increment")
    }, false) +
    ">Click me!</button></div>");
}

marko_template._ = marko_renderer(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./home.marko"
        }
    ]
  };

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("marko/src/components/helpers");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "/3NpIv72ycp.jpg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.4.22 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(1).t(__filename);

function render(input, out) {
  var data = input;

  out.w("<div>Other page. <br><a href=\"/\">Go home</a></div>");
}

marko_template._ = render;

marko_template.meta = {};

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.4.22 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(1).t(__filename),
    marko_helpers = __webpack_require__(2),
    marko_escapeXml = marko_helpers.x;

function render(input, out) {
  var data = input;

  out.w("<div>Page not found at " +
    marko_escapeXml(out.global.req.pathname) +
    "<br><a href=\"/\">Go home</a></div>");
}

marko_template._ = render;

marko_template.meta = {};

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWI0NGJlZDgxM2UzYWMyZmVlNjMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1hcmtvL3NyYy9odG1sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFya28vc3JjL3J1bnRpbWUvaHRtbC9oZWxwZXJzXCIiLCJ3ZWJwYWNrOi8vL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2hlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2ZyZXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2NvbXByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9zdGF0aWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9wcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2xvZ2dlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2V4cG9zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2JvZHlcIiIsIndlYnBhY2s6Ly8vYXBpL2luZGV4LmpzIiwid2VicGFjazovLy9hcGkvY29udHJvbGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwaS9jb250cm9sbGVycy9wcm9maWxlLmpzIiwid2VicGFjazovLy9hcHAvY29udHJvbGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwcC92aWV3cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9wYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvbWFya29cIiIsIndlYnBhY2s6Ly8vLi9hcHAvdmlld3MvaG9tZS5tYXJrbyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrby9zcmMvY29tcG9uZW50cy9oZWxwZXJzXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9sb2dvLmpwZyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlld3Mvb3RoZXIubWFya28iLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXdzLzQwNC5tYXJrbyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5YjQ0YmVkODEzZTNhYzJmZWU2MyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya28vc3JjL2h0bWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtYXJrby9zcmMvaHRtbFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtvL3NyYy9ydW50aW1lL2h0bWwvaGVscGVyc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1hcmtvL3NyYy9ydW50aW1lL2h0bWwvaGVscGVyc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBtcyBmcm9tICdtcydcbmltcG9ydCByb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCBoZWxtZXQgZnJvbSAnQHJpbGwvaGVsbWV0J1xuaW1wb3J0IGZyZXNoIGZyb20gJ0ByaWxsL2ZyZXNoJ1xuaW1wb3J0IGV0YWcgZnJvbSAnQHJpbGwvZXRhZydcbmltcG9ydCBjb21wcmVzcyBmcm9tICdAcmlsbC9jb21wcmVzcydcbmltcG9ydCBwb2x5ZmlsbCBmcm9tICdAcmlsbC9wb2x5ZmlsbCdcbmltcG9ydCBzZXJ2ZSBmcm9tICdAcmlsbC9zdGF0aWMnXG5pbXBvcnQgcHJvZ3Jlc3MgZnJvbSAnQHJpbGwvcHJvZ3Jlc3MnXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ0ByaWxsL2xvZ2dlcidcbmltcG9ydCBleHBvc2UgZnJvbSAnQHJpbGwvZXhwb3NlJ1xuaW1wb3J0IGJvZHkgZnJvbSAnQHJpbGwvYm9keSdcbmltcG9ydCBhcGlDdHJscyBmcm9tICcuLi9hcGknXG5pbXBvcnQgYXBwQ3RybHMgZnJvbSAnLi9jb250cm9sbGVycydcbmltcG9ydCB2aWV3cyBmcm9tICcuL3ZpZXdzJ1xuY29uc3QgbWVzc2FnZSA9ICdBcHAgU3RhcnRlZCdcbmNvbnNvbGUudGltZShtZXNzYWdlKVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXIoKVxuICAudXNlKGhlbG1ldChnbG9iYWwuU0VDVVJJVFkpKVxuICAudXNlKGxvZ2dlcigpKVxuICAudXNlKGZyZXNoKCkpXG4gIC51c2UoZXRhZygpKVxuICAudXNlKGNvbXByZXNzKCkpXG4gIC5nZXQoJy9wb2x5ZmlsbC5qcycsIHBvbHlmaWxsKCkpXG4gIC5nZXQoc2VydmUoJ2J1aWxkL3B1YmxpYycsIHsgZ3ppcDogdHJ1ZSwgY2FjaGU6IGAke21zKCczMCBkYXlzJyl9OyBpbW11dGFibGVgIH0pKVxuICAudXNlKHByb2dyZXNzKHsgc3Bpbm5lcjogZmFsc2UsIGNvbG9yOiAnIzAwOWZlMicgfSkpXG4gIC51c2UoZXhwb3NlKCkpXG4gIC51c2UoYm9keSgpKVxuICAuYXQoJy9hcGkvKicsICFwcm9jZXNzLmJyb3dzZXIgJiYgYXBpQ3RybHMpXG4gIC5hdCgnL2FwcC8qJywgYXBwQ3RybHMpXG4gIC5nZXQodmlld3MpXG4gIC5saXN0ZW4oKCkgPT4ge1xuICAgIGNvbnNvbGUudGltZUVuZChtZXNzYWdlKVxuICAgIGNvbnNvbGUubG9nKCcnKVxuICB9KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibXNcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9oZWxtZXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9oZWxtZXRcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9mcmVzaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2ZyZXNoXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvZXRhZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2V0YWdcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9jb21wcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2NvbXByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvcG9seWZpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9wb2x5ZmlsbFwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3N0YXRpY1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3N0YXRpY1wiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9wcm9ncmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3Byb2dyZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2xvZ2dlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2xvZ2dlclwiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9leHBvc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9leHBvc2VcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvYm9keVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2JvZHlcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gRW50cnkgdG8gc2VydmVyIG9ubHkgYXBpLlxuaW1wb3J0IHJvdXRlciBmcm9tICdyaWxsJ1xuaW1wb3J0IGNvbnRyb2xsZXJzIGZyb20gJy4vY29udHJvbGxlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcigpLnVzZShjb250cm9sbGVycylcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcGkvaW5kZXguanMiLCJpbXBvcnQgcm91dGVyIGZyb20gJ3JpbGwnXG5pbXBvcnQgKiBhcyBwcm9maWxlQ3RybCBmcm9tICcuL3Byb2ZpbGUnXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcigpLmdldCgnL3Byb2ZpbGUvdmlldycsIHByb2ZpbGVDdHJsLnZpZXcpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBpL2NvbnRyb2xsZXJzL2luZGV4LmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHZpZXcgKHsgcmVzIH0pIHtcbiAgcmVzLmJvZHkgPSB7XG4gICAgbmFtZTogJ0R5bGFuIFBpZXJjZXknXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcGkvY29udHJvbGxlcnMvcHJvZmlsZS5qcyIsImltcG9ydCByb3V0ZXIgZnJvbSAncmlsbCdcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29udHJvbGxlcnMvaW5kZXguanMiLCJpbXBvcnQgcm91dGVyIGZyb20gJ3JpbGwnXG5pbXBvcnQgcGFnZSBmcm9tICdAcmlsbC9wYWdlJ1xuaW1wb3J0IHJlbmRlciBmcm9tICdAcmlsbC9tYXJrbydcbmltcG9ydCBob21lUGFnZSBmcm9tICcuL2hvbWUubWFya28nXG5pbXBvcnQgb3RoZXJQYWdlIGZyb20gJy4vb3RoZXIubWFya28nXG5pbXBvcnQgbm90Rm91bmQgZnJvbSAnLi80MDQubWFya28nXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcigpXG4gIC5nZXQocGFnZVxuICAgIC50aXRsZSgnTWFya28gQm9pbGVyUGxhdGUnKVxuICAgIC5saW5rKHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6ICcvaW5kZXguY3NzJyB9KVxuICAgIC5zY3JpcHQoeyBhc3luYzogdHJ1ZSwgc3JjOiAnL3BvbHlmaWxsLmpzJyB9KVxuICAgIC5zY3JpcHQoeyBhc3luYzogdHJ1ZSwgc3JjOiAnL2luZGV4LmpzJyB9KVxuICApXG4gIC5nZXQoJy8nLCByZW5kZXIoaG9tZVBhZ2UpKVxuICAuZ2V0KCcvb3RoZXInLCByZW5kZXIob3RoZXJQYWdlKSlcbiAgLmdldChyZW5kZXIobm90Rm91bmQpKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC92aWV3cy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3BhZ2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9wYWdlXCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL21hcmtvXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvbWFya29cIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29tcGlsZWQgdXNpbmcgbWFya29ANC40LjIyIC0gRE8gTk9UIEVESVRcblwidXNlIHN0cmljdFwiO1xuXG52YXIgbWFya29fdGVtcGxhdGUgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvaHRtbFwiKS50KF9fZmlsZW5hbWUpLFxuICAgIG1hcmtvX2NvbXBvbmVudCA9IHtcbiAgICAgICAgb25DcmVhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgIGNvdW50OiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBpbmNyZW1lbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuc3RhdGUuY291bnQrKztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICBjb21wb25lbnRzX2hlbHBlcnMgPSByZXF1aXJlKFwibWFya28vc3JjL2NvbXBvbmVudHMvaGVscGVyc1wiKSxcbiAgICBtYXJrb19yZWdpc3RlckNvbXBvbmVudCA9IGNvbXBvbmVudHNfaGVscGVycy5yYyxcbiAgICBtYXJrb19jb21wb25lbnRUeXBlID0gbWFya29fcmVnaXN0ZXJDb21wb25lbnQoXCIvQHJpbGwvYm9pbGVycGxhdGUtd2VicGFjay1tYXJrbyQwLjAuMS9hcHAvdmlld3MvaG9tZS5tYXJrb1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiAgICB9KSxcbiAgICBtYXJrb19yZW5kZXJlciA9IGNvbXBvbmVudHNfaGVscGVycy5yLFxuICAgIG1hcmtvX2RlZmluZUNvbXBvbmVudCA9IGNvbXBvbmVudHNfaGVscGVycy5jLFxuICAgIGxvZ29JbWcgPSByZXF1aXJlKFwiLi4vYXNzZXRzL2xvZ28uanBnXCIpLFxuICAgIG1hcmtvX2hlbHBlcnMgPSByZXF1aXJlKFwibWFya28vc3JjL3J1bnRpbWUvaHRtbC9oZWxwZXJzXCIpLFxuICAgIG1hcmtvX2F0dHIgPSBtYXJrb19oZWxwZXJzLmEsXG4gICAgbWFya29fZXNjYXBlWG1sID0gbWFya29faGVscGVycy54O1xuXG5mdW5jdGlvbiByZW5kZXIoaW5wdXQsIG91dCwgX19jb21wb25lbnQsIGNvbXBvbmVudCwgc3RhdGUpIHtcbiAgdmFyIGRhdGEgPSBpbnB1dDtcblxuICBvdXQudyhcIjxkaXZcIiArXG4gICAgbWFya29fYXR0cihcImlkXCIsIF9fY29tcG9uZW50LmlkKSArXG4gICAgXCI+PGltZ1wiICtcbiAgICBtYXJrb19hdHRyKFwic3JjXCIsIGxvZ29JbWcpICtcbiAgICBcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCI+PGEgaHJlZj1cXFwiLz9yZWxvYWRcXFwiPlJlbG9hZDwvYT48YSBocmVmPVxcXCIvb3RoZXJcXFwiPkdvIHRvIHRoZSBvdGhlciBwYWdlPC9hPjxkaXYgY2xhc3M9XFxcImNvdW50XFxcIj5cIiArXG4gICAgbWFya29fZXNjYXBlWG1sKHN0YXRlLmNvdW50KSArXG4gICAgXCI8L2Rpdj48YnV0dG9uIGNsYXNzPVxcXCJleGFtcGxlLWJ1dHRvblxcXCJcIiArXG4gICAgbWFya29fYXR0cihcImRhdGEtbWFya29cIiwge1xuICAgICAgb25jbGljazogX19jb21wb25lbnQuZChcImluY3JlbWVudFwiKVxuICAgIH0sIGZhbHNlKSArXG4gICAgXCI+Q2xpY2sgbWUhPC9idXR0b24+PC9kaXY+XCIpO1xufVxuXG5tYXJrb190ZW1wbGF0ZS5fID0gbWFya29fcmVuZGVyZXIocmVuZGVyLCB7XG4gICAgdHlwZTogbWFya29fY29tcG9uZW50VHlwZVxuICB9LCBtYXJrb19jb21wb25lbnQpO1xuXG5tYXJrb190ZW1wbGF0ZS5Db21wb25lbnQgPSBtYXJrb19kZWZpbmVDb21wb25lbnQobWFya29fY29tcG9uZW50LCBtYXJrb190ZW1wbGF0ZS5fKTtcblxubWFya29fdGVtcGxhdGUubWV0YSA9IHtcbiAgICBkZXBzOiBbXG4gICAgICB7XG4gICAgICAgICAgdHlwZTogXCJyZXF1aXJlXCIsXG4gICAgICAgICAgcGF0aDogXCIuL2hvbWUubWFya29cIlxuICAgICAgICB9XG4gICAgXVxuICB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvdmlld3MvaG9tZS5tYXJrb1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya28vc3JjL2NvbXBvbmVudHMvaGVscGVyc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1hcmtvL3NyYy9jb21wb25lbnRzL2hlbHBlcnNcIlxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8zTnBJdjcyeWNwLmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2Fzc2V0cy9sb2dvLmpwZ1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29tcGlsZWQgdXNpbmcgbWFya29ANC40LjIyIC0gRE8gTk9UIEVESVRcblwidXNlIHN0cmljdFwiO1xuXG52YXIgbWFya29fdGVtcGxhdGUgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvaHRtbFwiKS50KF9fZmlsZW5hbWUpO1xuXG5mdW5jdGlvbiByZW5kZXIoaW5wdXQsIG91dCkge1xuICB2YXIgZGF0YSA9IGlucHV0O1xuXG4gIG91dC53KFwiPGRpdj5PdGhlciBwYWdlLiA8YnI+PGEgaHJlZj1cXFwiL1xcXCI+R28gaG9tZTwvYT48L2Rpdj5cIik7XG59XG5cbm1hcmtvX3RlbXBsYXRlLl8gPSByZW5kZXI7XG5cbm1hcmtvX3RlbXBsYXRlLm1ldGEgPSB7fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3ZpZXdzL290aGVyLm1hcmtvXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb21waWxlZCB1c2luZyBtYXJrb0A0LjQuMjIgLSBETyBOT1QgRURJVFxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtYXJrb190ZW1wbGF0ZSA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtvL3NyYy9odG1sXCIpLnQoX19maWxlbmFtZSksXG4gICAgbWFya29faGVscGVycyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvcnVudGltZS9odG1sL2hlbHBlcnNcIiksXG4gICAgbWFya29fZXNjYXBlWG1sID0gbWFya29faGVscGVycy54O1xuXG5mdW5jdGlvbiByZW5kZXIoaW5wdXQsIG91dCkge1xuICB2YXIgZGF0YSA9IGlucHV0O1xuXG4gIG91dC53KFwiPGRpdj5QYWdlIG5vdCBmb3VuZCBhdCBcIiArXG4gICAgbWFya29fZXNjYXBlWG1sKG91dC5nbG9iYWwucmVxLnBhdGhuYW1lKSArXG4gICAgXCI8YnI+PGEgaHJlZj1cXFwiL1xcXCI+R28gaG9tZTwvYT48L2Rpdj5cIik7XG59XG5cbm1hcmtvX3RlbXBsYXRlLl8gPSByZW5kZXI7XG5cbm1hcmtvX3RlbXBsYXRlLm1ldGEgPSB7fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3ZpZXdzLzQwNC5tYXJrb1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7OztBQzdEQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVBO0FBQ0E7QUFDQTs7Ozs7O0FDbkNBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDUEE7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN2REE7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9