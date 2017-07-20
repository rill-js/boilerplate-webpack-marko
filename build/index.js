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
















/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_rill___default()().use(__WEBPACK_IMPORTED_MODULE_2__rill_helmet___default()(global.SECURITY)).use(__WEBPACK_IMPORTED_MODULE_3__rill_fresh___default()()).use(__WEBPACK_IMPORTED_MODULE_4__rill_etag___default()()).use(__WEBPACK_IMPORTED_MODULE_5__rill_compress___default()()).get('/polyfill.js', __WEBPACK_IMPORTED_MODULE_6__rill_polyfill___default()()).get(__WEBPACK_IMPORTED_MODULE_7__rill_static___default()('build/public', { gzip: true, cache: __WEBPACK_IMPORTED_MODULE_0_ms___default()('30 days') + '; immutable' })).use(__WEBPACK_IMPORTED_MODULE_8__rill_progress___default()({ spinner: false, color: '#009fe2' })).use(__WEBPACK_IMPORTED_MODULE_9__rill_logger___default()()).use(__WEBPACK_IMPORTED_MODULE_10__rill_expose___default()()).use(__WEBPACK_IMPORTED_MODULE_11__rill_body___default()()).at('/api/*', !undefined && __WEBPACK_IMPORTED_MODULE_12__api__["a" /* default */]).at('/app/*', __WEBPACK_IMPORTED_MODULE_13__controllers__["a" /* default */]).get(__WEBPACK_IMPORTED_MODULE_14__views__["a" /* default */]).listen({ port: 8081 }));

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__other_marko__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__other_marko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__other_marko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__404_marko__ = __webpack_require__(25);
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
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.4.18 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(1).t(__filename),
    logoImg = __webpack_require__(23),
    marko_helpers = __webpack_require__(2),
    marko_attr = marko_helpers.a;

function render(input, out) {
  var data = input;

  out.w("<div><img" +
    marko_attr("src", logoImg) +
    "><input type=\"text\"><a href=\"/?reload\">Reload</a><a href=\"/other\">Go to the other page</a></div>");
}

marko_template._ = render;

marko_template.meta = {};

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "/3NpIv72ycp.jpg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.4.18 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(1).t(__filename);

function render(input, out) {
  var data = input;

  out.w("<div>Other page. <br><a href=\"/\">Go home</a></div>");
}

marko_template._ = render;

marko_template.meta = {};

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.4.18 - DO NOT EDIT


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmIxN2UxOTBmZjA2MTAwM2FmYzciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1hcmtvL3NyYy9odG1sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFya28vc3JjL3J1bnRpbWUvaHRtbC9oZWxwZXJzXCIiLCJ3ZWJwYWNrOi8vL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2hlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2ZyZXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2NvbXByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9zdGF0aWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9wcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2xvZ2dlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2V4cG9zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2JvZHlcIiIsIndlYnBhY2s6Ly8vYXBpL2luZGV4LmpzIiwid2VicGFjazovLy9hcGkvY29udHJvbGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwaS9jb250cm9sbGVycy9wcm9maWxlLmpzIiwid2VicGFjazovLy9hcHAvY29udHJvbGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwcC92aWV3cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9wYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvbWFya29cIiIsIndlYnBhY2s6Ly8vLi9hcHAvdmlld3MvaG9tZS5tYXJrbyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2xvZ28uanBnIiwid2VicGFjazovLy8uL2FwcC92aWV3cy9vdGhlci5tYXJrbyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlld3MvNDA0Lm1hcmtvIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZiMTdlMTkwZmYwNjEwMDNhZmM3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJpbGxcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvaHRtbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1hcmtvL3NyYy9odG1sXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya28vc3JjL3J1bnRpbWUvaHRtbC9oZWxwZXJzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWFya28vc3JjL3J1bnRpbWUvaHRtbC9oZWxwZXJzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG1zIGZyb20gJ21zJ1xuaW1wb3J0IHJvdXRlciBmcm9tICdyaWxsJ1xuaW1wb3J0IGhlbG1ldCBmcm9tICdAcmlsbC9oZWxtZXQnXG5pbXBvcnQgZnJlc2ggZnJvbSAnQHJpbGwvZnJlc2gnXG5pbXBvcnQgZXRhZyBmcm9tICdAcmlsbC9ldGFnJ1xuaW1wb3J0IGNvbXByZXNzIGZyb20gJ0ByaWxsL2NvbXByZXNzJ1xuaW1wb3J0IHBvbHlmaWxsIGZyb20gJ0ByaWxsL3BvbHlmaWxsJ1xuaW1wb3J0IHNlcnZlIGZyb20gJ0ByaWxsL3N0YXRpYydcbmltcG9ydCBwcm9ncmVzcyBmcm9tICdAcmlsbC9wcm9ncmVzcydcbmltcG9ydCBsb2dnZXIgZnJvbSAnQHJpbGwvbG9nZ2VyJ1xuaW1wb3J0IGV4cG9zZSBmcm9tICdAcmlsbC9leHBvc2UnXG5pbXBvcnQgYm9keSBmcm9tICdAcmlsbC9ib2R5J1xuaW1wb3J0IGFwaUN0cmxzIGZyb20gJy4uL2FwaSdcbmltcG9ydCBhcHBDdHJscyBmcm9tICcuL2NvbnRyb2xsZXJzJ1xuaW1wb3J0IHZpZXdzIGZyb20gJy4vdmlld3MnXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcigpXG4gIC51c2UoaGVsbWV0KGdsb2JhbC5TRUNVUklUWSkpXG4gIC51c2UoZnJlc2goKSlcbiAgLnVzZShldGFnKCkpXG4gIC51c2UoY29tcHJlc3MoKSlcbiAgLmdldCgnL3BvbHlmaWxsLmpzJywgcG9seWZpbGwoKSlcbiAgLmdldChcbiAgICBzZXJ2ZSgnYnVpbGQvcHVibGljJywgeyBnemlwOiB0cnVlLCBjYWNoZTogYCR7bXMoJzMwIGRheXMnKX07IGltbXV0YWJsZWAgfSlcbiAgKVxuICAudXNlKHByb2dyZXNzKHsgc3Bpbm5lcjogZmFsc2UsIGNvbG9yOiAnIzAwOWZlMicgfSkpXG4gIC51c2UobG9nZ2VyKCkpXG4gIC51c2UoZXhwb3NlKCkpXG4gIC51c2UoYm9keSgpKVxuICAuYXQoJy9hcGkvKicsICFwcm9jZXNzLmJyb3dzZXIgJiYgYXBpQ3RybHMpXG4gIC5hdCgnL2FwcC8qJywgYXBwQ3RybHMpXG4gIC5nZXQodmlld3MpXG4gIC5saXN0ZW4oeyBwb3J0OiA4MDgxIH0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtc1wiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2hlbG1ldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2hlbG1ldFwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2ZyZXNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvZnJlc2hcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9ldGFnXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvZXRhZ1wiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2NvbXByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvY29tcHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3BvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvc3RhdGljXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvc3RhdGljXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3Byb2dyZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvcHJvZ3Jlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvbG9nZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvbG9nZ2VyXCJcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2V4cG9zZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2V4cG9zZVwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9ib2R5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvYm9keVwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBFbnRyeSB0byBzZXJ2ZXIgb25seSBhcGkuXG5pbXBvcnQgcm91dGVyIGZyb20gJ3JpbGwnXG5pbXBvcnQgY29udHJvbGxlcnMgZnJvbSAnLi9jb250cm9sbGVycydcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyKCkudXNlKGNvbnRyb2xsZXJzKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwaS9pbmRleC5qcyIsImltcG9ydCByb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCAqIGFzIHByb2ZpbGVDdHJsIGZyb20gJy4vcHJvZmlsZSdcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyKCkuZ2V0KCcvcHJvZmlsZS92aWV3JywgcHJvZmlsZUN0cmwudmlldylcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcGkvY29udHJvbGxlcnMvaW5kZXguanMiLCJleHBvcnQgZnVuY3Rpb24gdmlldyAoeyByZXMgfSkge1xuICByZXMuYm9keSA9IHtcbiAgICBuYW1lOiAnRHlsYW4gUGllcmNleSdcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwaS9jb250cm9sbGVycy9wcm9maWxlLmpzIiwiaW1wb3J0IHJvdXRlciBmcm9tICdyaWxsJ1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXIoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb250cm9sbGVycy9pbmRleC5qcyIsImltcG9ydCByb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCBwYWdlIGZyb20gJ0ByaWxsL3BhZ2UnXG5pbXBvcnQgcmVuZGVyIGZyb20gJ0ByaWxsL21hcmtvJ1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vaG9tZS5tYXJrbydcbmltcG9ydCBvdGhlclBhZ2UgZnJvbSAnLi9vdGhlci5tYXJrbydcbmltcG9ydCBub3RGb3VuZCBmcm9tICcuLzQwNC5tYXJrbydcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyKClcbiAgLmdldChwYWdlXG4gICAgLnRpdGxlKCdNYXJrbyBCb2lsZXJQbGF0ZScpXG4gICAgLmxpbmsoeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogJy9pbmRleC5jc3MnIH0pXG4gICAgLnNjcmlwdCh7IGFzeW5jOiB0cnVlLCBzcmM6ICcvcG9seWZpbGwuanMnIH0pXG4gICAgLnNjcmlwdCh7IGFzeW5jOiB0cnVlLCBzcmM6ICcvaW5kZXguanMnIH0pXG4gIClcbiAgLmdldCgnLycsIHJlbmRlcihob21lUGFnZSkpXG4gIC5nZXQoJy9vdGhlcicsIHJlbmRlcihvdGhlclBhZ2UpKVxuICAuZ2V0KHJlbmRlcihub3RGb3VuZCkpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL3ZpZXdzL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvcGFnZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3BhZ2VcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvbWFya29cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9tYXJrb1wiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb21waWxlZCB1c2luZyBtYXJrb0A0LjQuMTggLSBETyBOT1QgRURJVFxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtYXJrb190ZW1wbGF0ZSA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtvL3NyYy9odG1sXCIpLnQoX19maWxlbmFtZSksXG4gICAgbG9nb0ltZyA9IHJlcXVpcmUoXCIuLi9hc3NldHMvbG9nby5qcGdcIiksXG4gICAgbWFya29faGVscGVycyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvcnVudGltZS9odG1sL2hlbHBlcnNcIiksXG4gICAgbWFya29fYXR0ciA9IG1hcmtvX2hlbHBlcnMuYTtcblxuZnVuY3Rpb24gcmVuZGVyKGlucHV0LCBvdXQpIHtcbiAgdmFyIGRhdGEgPSBpbnB1dDtcblxuICBvdXQudyhcIjxkaXY+PGltZ1wiICtcbiAgICBtYXJrb19hdHRyKFwic3JjXCIsIGxvZ29JbWcpICtcbiAgICBcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCI+PGEgaHJlZj1cXFwiLz9yZWxvYWRcXFwiPlJlbG9hZDwvYT48YSBocmVmPVxcXCIvb3RoZXJcXFwiPkdvIHRvIHRoZSBvdGhlciBwYWdlPC9hPjwvZGl2PlwiKTtcbn1cblxubWFya29fdGVtcGxhdGUuXyA9IHJlbmRlcjtcblxubWFya29fdGVtcGxhdGUubWV0YSA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvdmlld3MvaG9tZS5tYXJrb1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8zTnBJdjcyeWNwLmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2Fzc2V0cy9sb2dvLmpwZ1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29tcGlsZWQgdXNpbmcgbWFya29ANC40LjE4IC0gRE8gTk9UIEVESVRcblwidXNlIHN0cmljdFwiO1xuXG52YXIgbWFya29fdGVtcGxhdGUgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvaHRtbFwiKS50KF9fZmlsZW5hbWUpO1xuXG5mdW5jdGlvbiByZW5kZXIoaW5wdXQsIG91dCkge1xuICB2YXIgZGF0YSA9IGlucHV0O1xuXG4gIG91dC53KFwiPGRpdj5PdGhlciBwYWdlLiA8YnI+PGEgaHJlZj1cXFwiL1xcXCI+R28gaG9tZTwvYT48L2Rpdj5cIik7XG59XG5cbm1hcmtvX3RlbXBsYXRlLl8gPSByZW5kZXI7XG5cbm1hcmtvX3RlbXBsYXRlLm1ldGEgPSB7fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3ZpZXdzL290aGVyLm1hcmtvXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb21waWxlZCB1c2luZyBtYXJrb0A0LjQuMTggLSBETyBOT1QgRURJVFxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtYXJrb190ZW1wbGF0ZSA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtvL3NyYy9odG1sXCIpLnQoX19maWxlbmFtZSksXG4gICAgbWFya29faGVscGVycyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvcnVudGltZS9odG1sL2hlbHBlcnNcIiksXG4gICAgbWFya29fZXNjYXBlWG1sID0gbWFya29faGVscGVycy54O1xuXG5mdW5jdGlvbiByZW5kZXIoaW5wdXQsIG91dCkge1xuICB2YXIgZGF0YSA9IGlucHV0O1xuXG4gIG91dC53KFwiPGRpdj5QYWdlIG5vdCBmb3VuZCBhdCBcIiArXG4gICAgbWFya29fZXNjYXBlWG1sKG91dC5nbG9iYWwucmVxLnBhdGhuYW1lKSArXG4gICAgXCI8YnI+PGEgaHJlZj1cXFwiL1xcXCI+R28gaG9tZTwvYT48L2Rpdj5cIik7XG59XG5cbm1hcmtvX3RlbXBsYXRlLl8gPSByZW5kZXI7XG5cbm1hcmtvX3RlbXBsYXRlLm1ldGEgPSB7fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3ZpZXdzLzQwNC5tYXJrb1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7OztBQzdEQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNoQkE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNQQTs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsQkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=