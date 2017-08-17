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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.4.26 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(1).t(__filename),
    marko_helpers = __webpack_require__(2),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(__webpack_require__(27));

__webpack_require__(28);

function render(input, out) {
  var data = input;

  out.w("<div id=\"page\">Page Wrapper ");

  include_tag({
      _target: input
    }, out);

  out.w("</div>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "marko/src/taglibs/core/include-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rill__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_helmet__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__rill_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rill_fresh__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rill_fresh___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__rill_fresh__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rill_etag__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rill_etag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__rill_etag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rill_compress__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rill_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__rill_compress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rill_polyfill__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rill_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__rill_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rill_static__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rill_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__rill_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rill_progress__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rill_progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__rill_progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rill_logger__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rill_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__rill_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rill_expose__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rill_expose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__rill_expose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rill_body__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rill_body___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__rill_body__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__api__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__controllers__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views__ = __webpack_require__(20);















var message = 'App Started';
console.time(message);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_rill___default()().use(__WEBPACK_IMPORTED_MODULE_2__rill_helmet___default()(global.SECURITY)).use(__WEBPACK_IMPORTED_MODULE_9__rill_logger___default()()).use(__WEBPACK_IMPORTED_MODULE_3__rill_fresh___default()()).use(__WEBPACK_IMPORTED_MODULE_4__rill_etag___default()()).use(__WEBPACK_IMPORTED_MODULE_5__rill_compress___default()()).get('/polyfill.js', __WEBPACK_IMPORTED_MODULE_6__rill_polyfill___default()()).get(__WEBPACK_IMPORTED_MODULE_7__rill_static___default()('build/public', { gzip: true, cache: __WEBPACK_IMPORTED_MODULE_0_ms___default()('30 days') + '; immutable' })).use(__WEBPACK_IMPORTED_MODULE_8__rill_progress___default()({ spinner: false, color: '#009fe2' })).use(__WEBPACK_IMPORTED_MODULE_10__rill_expose___default()()).use(__WEBPACK_IMPORTED_MODULE_11__rill_body___default()()).at('/api/*', !undefined && __WEBPACK_IMPORTED_MODULE_12__api__["a" /* default */]).at('/app/*', __WEBPACK_IMPORTED_MODULE_13__controllers__["a" /* default */]).get(__WEBPACK_IMPORTED_MODULE_14__views__["a" /* default */]).listen(function () {
  console.timeEnd(message);
  console.log('');
}));

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("ms");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@rill/helmet");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@rill/fresh");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@rill/etag");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@rill/compress");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@rill/polyfill");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@rill/static");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@rill/progress");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@rill/logger");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@rill/expose");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@rill/body");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers__ = __webpack_require__(17);
// Entry to server only api.



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_rill___default()().use(__WEBPACK_IMPORTED_MODULE_1__controllers__["a" /* default */]));

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile__ = __webpack_require__(18);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_rill___default()().get('/profile/view', __WEBPACK_IMPORTED_MODULE_1__profile__["a" /* view */]));

/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rill__);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_rill___default()());

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rill_page__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rill_page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__rill_page__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_marko__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_marko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__rill_marko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_marko__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_marko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__home_marko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__other_marko__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__other_marko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__other_marko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__404_marko__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__404_marko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__404_marko__);







/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_rill___default()().get(__WEBPACK_IMPORTED_MODULE_1__rill_page___default.a.title('Marko BoilerPlate').link({ rel: 'stylesheet', href: '/index.css' }).script({ async: true, src: '/polyfill.js' }).script({ async: true, src: '/index.js' })).get('/', __WEBPACK_IMPORTED_MODULE_2__rill_marko___default()(__WEBPACK_IMPORTED_MODULE_3__home_marko___default.a)).get('/other', __WEBPACK_IMPORTED_MODULE_2__rill_marko___default()(__WEBPACK_IMPORTED_MODULE_4__other_marko___default.a)).get(__WEBPACK_IMPORTED_MODULE_2__rill_marko___default()(__WEBPACK_IMPORTED_MODULE_5__404_marko___default.a)));

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@rill/page");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@rill/marko");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.4.26 - DO NOT EDIT


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
    components_helpers = __webpack_require__(24),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/@rill/boilerplate-webpack-marko$0.0.1/app/views/home.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_logoImg = __webpack_require__(25),
    logoImg = module_logoImg.default || module_logoImg,
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
/* 24 */
/***/ (function(module, exports) {

module.exports = require("marko/src/components/helpers");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "/3NpIv72ycp.jpg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.4.26 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(1).t(__filename),
    app_page_template = __webpack_require__(3),
    marko_helpers = __webpack_require__(2),
    marko_loadTag = marko_helpers.t,
    app_page_tag = marko_loadTag(app_page_template);

function render(input, out) {
  var data = input;

  app_page_tag({
      renderBody: function renderBody(out) {
        out.w("Other page. <br><a href=\"/\">Go home</a>");
      }
    }, out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "../components/app-page.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("marko/src/taglibs/core/include-tag");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.4.26 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(1).t(__filename),
    marko_helpers = __webpack_require__(2),
    marko_escapeXml = marko_helpers.x,
    app_page_template = __webpack_require__(3),
    marko_loadTag = marko_helpers.t,
    app_page_tag = marko_loadTag(app_page_template);

function render(input, out) {
  var data = input;

  app_page_tag({
      renderBody: function renderBody(out) {
        out.w("Page not found at " +
          marko_escapeXml(out.global.req.pathname) +
          "<br><a href=\"/\">Go home</a>");
      }
    }, out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "../components/app-page.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2I0ZGNiMWQzNmJkNWZjMmEwMTkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1hcmtvL3NyYy9odG1sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFya28vc3JjL3J1bnRpbWUvaHRtbC9oZWxwZXJzXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYXBwLXBhZ2UubWFya28iLCJ3ZWJwYWNrOi8vL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2hlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2ZyZXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2NvbXByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9zdGF0aWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9wcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2xvZ2dlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2V4cG9zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2JvZHlcIiIsIndlYnBhY2s6Ly8vYXBpL2luZGV4LmpzIiwid2VicGFjazovLy9hcGkvY29udHJvbGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwaS9jb250cm9sbGVycy9wcm9maWxlLmpzIiwid2VicGFjazovLy9hcHAvY29udHJvbGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwcC92aWV3cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9wYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvbWFya29cIiIsIndlYnBhY2s6Ly8vLi9hcHAvdmlld3MvaG9tZS5tYXJrbyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrby9zcmMvY29tcG9uZW50cy9oZWxwZXJzXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9sb2dvLmpwZyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlld3Mvb3RoZXIubWFya28iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFya28vc3JjL3RhZ2xpYnMvY29yZS9pbmNsdWRlLXRhZ1wiIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvY3NzL3BhZ2UuY3NzIiwid2VicGFjazovLy8uL2FwcC92aWV3cy80MDQubWFya28iXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2I0ZGNiMWQzNmJkNWZjMmEwMTkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmlsbFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtvL3NyYy9odG1sXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWFya28vc3JjL2h0bWxcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvcnVudGltZS9odG1sL2hlbHBlcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtYXJrby9zcmMvcnVudGltZS9odG1sL2hlbHBlcnNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb21waWxlZCB1c2luZyBtYXJrb0A0LjQuMjYgLSBETyBOT1QgRURJVFxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtYXJrb190ZW1wbGF0ZSA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtvL3NyYy9odG1sXCIpLnQoX19maWxlbmFtZSksXG4gICAgbWFya29faGVscGVycyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvcnVudGltZS9odG1sL2hlbHBlcnNcIiksXG4gICAgbWFya29fbG9hZFRhZyA9IG1hcmtvX2hlbHBlcnMudCxcbiAgICBpbmNsdWRlX3RhZyA9IG1hcmtvX2xvYWRUYWcocmVxdWlyZShcIm1hcmtvL3NyYy90YWdsaWJzL2NvcmUvaW5jbHVkZS10YWdcIikpO1xuXG5yZXF1aXJlKFwiLi4vYXNzZXRzL2Nzcy9wYWdlLmNzc1wiKTtcblxuZnVuY3Rpb24gcmVuZGVyKGlucHV0LCBvdXQpIHtcbiAgdmFyIGRhdGEgPSBpbnB1dDtcblxuICBvdXQudyhcIjxkaXYgaWQ9XFxcInBhZ2VcXFwiPlBhZ2UgV3JhcHBlciBcIik7XG5cbiAgaW5jbHVkZV90YWcoe1xuICAgICAgX3RhcmdldDogaW5wdXRcbiAgICB9LCBvdXQpO1xuXG4gIG91dC53KFwiPC9kaXY+XCIpO1xufVxuXG5tYXJrb190ZW1wbGF0ZS5fID0gcmVuZGVyO1xuXG5tYXJrb190ZW1wbGF0ZS5tZXRhID0ge1xuICAgIHRhZ3M6IFtcbiAgICAgIFwibWFya28vc3JjL3RhZ2xpYnMvY29yZS9pbmNsdWRlLXRhZ1wiXG4gICAgXVxuICB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvY29tcG9uZW50cy9hcHAtcGFnZS5tYXJrb1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbXMgZnJvbSAnbXMnXG5pbXBvcnQgcm91dGVyIGZyb20gJ3JpbGwnXG5pbXBvcnQgaGVsbWV0IGZyb20gJ0ByaWxsL2hlbG1ldCdcbmltcG9ydCBmcmVzaCBmcm9tICdAcmlsbC9mcmVzaCdcbmltcG9ydCBldGFnIGZyb20gJ0ByaWxsL2V0YWcnXG5pbXBvcnQgY29tcHJlc3MgZnJvbSAnQHJpbGwvY29tcHJlc3MnXG5pbXBvcnQgcG9seWZpbGwgZnJvbSAnQHJpbGwvcG9seWZpbGwnXG5pbXBvcnQgc2VydmUgZnJvbSAnQHJpbGwvc3RhdGljJ1xuaW1wb3J0IHByb2dyZXNzIGZyb20gJ0ByaWxsL3Byb2dyZXNzJ1xuaW1wb3J0IGxvZ2dlciBmcm9tICdAcmlsbC9sb2dnZXInXG5pbXBvcnQgZXhwb3NlIGZyb20gJ0ByaWxsL2V4cG9zZSdcbmltcG9ydCBib2R5IGZyb20gJ0ByaWxsL2JvZHknXG5pbXBvcnQgYXBpQ3RybHMgZnJvbSAnLi4vYXBpJ1xuaW1wb3J0IGFwcEN0cmxzIGZyb20gJy4vY29udHJvbGxlcnMnXG5pbXBvcnQgdmlld3MgZnJvbSAnLi92aWV3cydcbmNvbnN0IG1lc3NhZ2UgPSAnQXBwIFN0YXJ0ZWQnXG5jb25zb2xlLnRpbWUobWVzc2FnZSlcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyKClcbiAgLnVzZShoZWxtZXQoZ2xvYmFsLlNFQ1VSSVRZKSlcbiAgLnVzZShsb2dnZXIoKSlcbiAgLnVzZShmcmVzaCgpKVxuICAudXNlKGV0YWcoKSlcbiAgLnVzZShjb21wcmVzcygpKVxuICAuZ2V0KCcvcG9seWZpbGwuanMnLCBwb2x5ZmlsbCgpKVxuICAuZ2V0KHNlcnZlKCdidWlsZC9wdWJsaWMnLCB7IGd6aXA6IHRydWUsIGNhY2hlOiBgJHttcygnMzAgZGF5cycpfTsgaW1tdXRhYmxlYCB9KSlcbiAgLnVzZShwcm9ncmVzcyh7IHNwaW5uZXI6IGZhbHNlLCBjb2xvcjogJyMwMDlmZTInIH0pKVxuICAudXNlKGV4cG9zZSgpKVxuICAudXNlKGJvZHkoKSlcbiAgLmF0KCcvYXBpLyonLCAhcHJvY2Vzcy5icm93c2VyICYmIGFwaUN0cmxzKVxuICAuYXQoJy9hcHAvKicsIGFwcEN0cmxzKVxuICAuZ2V0KHZpZXdzKVxuICAubGlzdGVuKCgpID0+IHtcbiAgICBjb25zb2xlLnRpbWVFbmQobWVzc2FnZSlcbiAgICBjb25zb2xlLmxvZygnJylcbiAgfSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1zXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvaGVsbWV0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvaGVsbWV0XCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvZnJlc2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9mcmVzaFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2V0YWdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9ldGFnXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvY29tcHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9jb21wcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3BvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvc3RhdGljXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvc3RhdGljXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3Byb2dyZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvcHJvZ3Jlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvbG9nZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvbG9nZ2VyXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2V4cG9zZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2V4cG9zZVwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9ib2R5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvYm9keVwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBFbnRyeSB0byBzZXJ2ZXIgb25seSBhcGkuXG5pbXBvcnQgcm91dGVyIGZyb20gJ3JpbGwnXG5pbXBvcnQgY29udHJvbGxlcnMgZnJvbSAnLi9jb250cm9sbGVycydcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyKCkudXNlKGNvbnRyb2xsZXJzKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwaS9pbmRleC5qcyIsImltcG9ydCByb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCAqIGFzIHByb2ZpbGVDdHJsIGZyb20gJy4vcHJvZmlsZSdcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyKCkuZ2V0KCcvcHJvZmlsZS92aWV3JywgcHJvZmlsZUN0cmwudmlldylcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcGkvY29udHJvbGxlcnMvaW5kZXguanMiLCJleHBvcnQgZnVuY3Rpb24gdmlldyAoeyByZXMgfSkge1xuICByZXMuYm9keSA9IHtcbiAgICBuYW1lOiAnRHlsYW4gUGllcmNleSdcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwaS9jb250cm9sbGVycy9wcm9maWxlLmpzIiwiaW1wb3J0IHJvdXRlciBmcm9tICdyaWxsJ1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXIoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb250cm9sbGVycy9pbmRleC5qcyIsImltcG9ydCByb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCBwYWdlIGZyb20gJ0ByaWxsL3BhZ2UnXG5pbXBvcnQgcmVuZGVyIGZyb20gJ0ByaWxsL21hcmtvJ1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vaG9tZS5tYXJrbydcbmltcG9ydCBvdGhlclBhZ2UgZnJvbSAnLi9vdGhlci5tYXJrbydcbmltcG9ydCBub3RGb3VuZCBmcm9tICcuLzQwNC5tYXJrbydcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyKClcbiAgLmdldChwYWdlXG4gICAgLnRpdGxlKCdNYXJrbyBCb2lsZXJQbGF0ZScpXG4gICAgLmxpbmsoeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogJy9pbmRleC5jc3MnIH0pXG4gICAgLnNjcmlwdCh7IGFzeW5jOiB0cnVlLCBzcmM6ICcvcG9seWZpbGwuanMnIH0pXG4gICAgLnNjcmlwdCh7IGFzeW5jOiB0cnVlLCBzcmM6ICcvaW5kZXguanMnIH0pXG4gIClcbiAgLmdldCgnLycsIHJlbmRlcihob21lUGFnZSkpXG4gIC5nZXQoJy9vdGhlcicsIHJlbmRlcihvdGhlclBhZ2UpKVxuICAuZ2V0KHJlbmRlcihub3RGb3VuZCkpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL3ZpZXdzL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvcGFnZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3BhZ2VcIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvbWFya29cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9tYXJrb1wiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb21waWxlZCB1c2luZyBtYXJrb0A0LjQuMjYgLSBETyBOT1QgRURJVFxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtYXJrb190ZW1wbGF0ZSA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtvL3NyYy9odG1sXCIpLnQoX19maWxlbmFtZSksXG4gICAgbWFya29fY29tcG9uZW50ID0ge1xuICAgICAgICBvbkNyZWF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgY291bnQ6IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGluY3JlbWVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5jb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIGNvbXBvbmVudHNfaGVscGVycyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvY29tcG9uZW50cy9oZWxwZXJzXCIpLFxuICAgIG1hcmtvX3JlZ2lzdGVyQ29tcG9uZW50ID0gY29tcG9uZW50c19oZWxwZXJzLnJjLFxuICAgIG1hcmtvX2NvbXBvbmVudFR5cGUgPSBtYXJrb19yZWdpc3RlckNvbXBvbmVudChcIi9AcmlsbC9ib2lsZXJwbGF0ZS13ZWJwYWNrLW1hcmtvJDAuMC4xL2FwcC92aWV3cy9ob21lLm1hcmtvXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuICAgIH0pLFxuICAgIG1hcmtvX3JlbmRlcmVyID0gY29tcG9uZW50c19oZWxwZXJzLnIsXG4gICAgbWFya29fZGVmaW5lQ29tcG9uZW50ID0gY29tcG9uZW50c19oZWxwZXJzLmMsXG4gICAgbW9kdWxlX2xvZ29JbWcgPSByZXF1aXJlKFwiLi4vYXNzZXRzL2xvZ28uanBnXCIpLFxuICAgIGxvZ29JbWcgPSBtb2R1bGVfbG9nb0ltZy5kZWZhdWx0IHx8IG1vZHVsZV9sb2dvSW1nLFxuICAgIG1hcmtvX2hlbHBlcnMgPSByZXF1aXJlKFwibWFya28vc3JjL3J1bnRpbWUvaHRtbC9oZWxwZXJzXCIpLFxuICAgIG1hcmtvX2F0dHIgPSBtYXJrb19oZWxwZXJzLmEsXG4gICAgbWFya29fZXNjYXBlWG1sID0gbWFya29faGVscGVycy54O1xuXG5mdW5jdGlvbiByZW5kZXIoaW5wdXQsIG91dCwgX19jb21wb25lbnQsIGNvbXBvbmVudCwgc3RhdGUpIHtcbiAgdmFyIGRhdGEgPSBpbnB1dDtcblxuICBvdXQudyhcIjxkaXZcIiArXG4gICAgbWFya29fYXR0cihcImlkXCIsIF9fY29tcG9uZW50LmlkKSArXG4gICAgXCI+PGltZ1wiICtcbiAgICBtYXJrb19hdHRyKFwic3JjXCIsIGxvZ29JbWcpICtcbiAgICBcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCI+PGEgaHJlZj1cXFwiLz9yZWxvYWRcXFwiPlJlbG9hZDwvYT48YSBocmVmPVxcXCIvb3RoZXJcXFwiPkdvIHRvIHRoZSBvdGhlciBwYWdlPC9hPjxkaXYgY2xhc3M9XFxcImNvdW50XFxcIj5cIiArXG4gICAgbWFya29fZXNjYXBlWG1sKHN0YXRlLmNvdW50KSArXG4gICAgXCI8L2Rpdj48YnV0dG9uIGNsYXNzPVxcXCJleGFtcGxlLWJ1dHRvblxcXCJcIiArXG4gICAgbWFya29fYXR0cihcImRhdGEtbWFya29cIiwge1xuICAgICAgb25jbGljazogX19jb21wb25lbnQuZChcImluY3JlbWVudFwiKVxuICAgIH0sIGZhbHNlKSArXG4gICAgXCI+Q2xpY2sgbWUhPC9idXR0b24+PC9kaXY+XCIpO1xufVxuXG5tYXJrb190ZW1wbGF0ZS5fID0gbWFya29fcmVuZGVyZXIocmVuZGVyLCB7XG4gICAgdHlwZTogbWFya29fY29tcG9uZW50VHlwZVxuICB9LCBtYXJrb19jb21wb25lbnQpO1xuXG5tYXJrb190ZW1wbGF0ZS5Db21wb25lbnQgPSBtYXJrb19kZWZpbmVDb21wb25lbnQobWFya29fY29tcG9uZW50LCBtYXJrb190ZW1wbGF0ZS5fKTtcblxubWFya29fdGVtcGxhdGUubWV0YSA9IHtcbiAgICBkZXBzOiBbXG4gICAgICB7XG4gICAgICAgICAgdHlwZTogXCJyZXF1aXJlXCIsXG4gICAgICAgICAgcGF0aDogXCIuL2hvbWUubWFya29cIlxuICAgICAgICB9XG4gICAgXVxuICB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvdmlld3MvaG9tZS5tYXJrb1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya28vc3JjL2NvbXBvbmVudHMvaGVscGVyc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1hcmtvL3NyYy9jb21wb25lbnRzL2hlbHBlcnNcIlxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8zTnBJdjcyeWNwLmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2Fzc2V0cy9sb2dvLmpwZ1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29tcGlsZWQgdXNpbmcgbWFya29ANC40LjI2IC0gRE8gTk9UIEVESVRcblwidXNlIHN0cmljdFwiO1xuXG52YXIgbWFya29fdGVtcGxhdGUgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvaHRtbFwiKS50KF9fZmlsZW5hbWUpLFxuICAgIGFwcF9wYWdlX3RlbXBsYXRlID0gcmVxdWlyZShcIi4uL2NvbXBvbmVudHMvYXBwLXBhZ2UubWFya29cIiksXG4gICAgbWFya29faGVscGVycyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvcnVudGltZS9odG1sL2hlbHBlcnNcIiksXG4gICAgbWFya29fbG9hZFRhZyA9IG1hcmtvX2hlbHBlcnMudCxcbiAgICBhcHBfcGFnZV90YWcgPSBtYXJrb19sb2FkVGFnKGFwcF9wYWdlX3RlbXBsYXRlKTtcblxuZnVuY3Rpb24gcmVuZGVyKGlucHV0LCBvdXQpIHtcbiAgdmFyIGRhdGEgPSBpbnB1dDtcblxuICBhcHBfcGFnZV90YWcoe1xuICAgICAgcmVuZGVyQm9keTogZnVuY3Rpb24gcmVuZGVyQm9keShvdXQpIHtcbiAgICAgICAgb3V0LncoXCJPdGhlciBwYWdlLiA8YnI+PGEgaHJlZj1cXFwiL1xcXCI+R28gaG9tZTwvYT5cIik7XG4gICAgICB9XG4gICAgfSwgb3V0KTtcbn1cblxubWFya29fdGVtcGxhdGUuXyA9IHJlbmRlcjtcblxubWFya29fdGVtcGxhdGUubWV0YSA9IHtcbiAgICB0YWdzOiBbXG4gICAgICBcIi4uL2NvbXBvbmVudHMvYXBwLXBhZ2UubWFya29cIlxuICAgIF1cbiAgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3ZpZXdzL290aGVyLm1hcmtvXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvdGFnbGlicy9jb3JlL2luY2x1ZGUtdGFnXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWFya28vc3JjL3RhZ2xpYnMvY29yZS9pbmNsdWRlLXRhZ1wiXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2Fzc2V0cy9jc3MvcGFnZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvbXBpbGVkIHVzaW5nIG1hcmtvQDQuNC4yNiAtIERPIE5PVCBFRElUXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1hcmtvX3RlbXBsYXRlID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya28vc3JjL2h0bWxcIikudChfX2ZpbGVuYW1lKSxcbiAgICBtYXJrb19oZWxwZXJzID0gcmVxdWlyZShcIm1hcmtvL3NyYy9ydW50aW1lL2h0bWwvaGVscGVyc1wiKSxcbiAgICBtYXJrb19lc2NhcGVYbWwgPSBtYXJrb19oZWxwZXJzLngsXG4gICAgYXBwX3BhZ2VfdGVtcGxhdGUgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy9hcHAtcGFnZS5tYXJrb1wiKSxcbiAgICBtYXJrb19sb2FkVGFnID0gbWFya29faGVscGVycy50LFxuICAgIGFwcF9wYWdlX3RhZyA9IG1hcmtvX2xvYWRUYWcoYXBwX3BhZ2VfdGVtcGxhdGUpO1xuXG5mdW5jdGlvbiByZW5kZXIoaW5wdXQsIG91dCkge1xuICB2YXIgZGF0YSA9IGlucHV0O1xuXG4gIGFwcF9wYWdlX3RhZyh7XG4gICAgICByZW5kZXJCb2R5OiBmdW5jdGlvbiByZW5kZXJCb2R5KG91dCkge1xuICAgICAgICBvdXQudyhcIlBhZ2Ugbm90IGZvdW5kIGF0IFwiICtcbiAgICAgICAgICBtYXJrb19lc2NhcGVYbWwob3V0Lmdsb2JhbC5yZXEucGF0aG5hbWUpICtcbiAgICAgICAgICBcIjxicj48YSBocmVmPVxcXCIvXFxcIj5HbyBob21lPC9hPlwiKTtcbiAgICAgIH1cbiAgICB9LCBvdXQpO1xufVxuXG5tYXJrb190ZW1wbGF0ZS5fID0gcmVuZGVyO1xuXG5tYXJrb190ZW1wbGF0ZS5tZXRhID0ge1xuICAgIHRhZ3M6IFtcbiAgICAgIFwiLi4vY29tcG9uZW50cy9hcHAtcGFnZS5tYXJrb1wiXG4gICAgXVxuICB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvdmlld3MvNDA0Lm1hcmtvXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7O0FDN0RBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVBO0FBQ0E7QUFDQTs7Ozs7O0FDbkNBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDUEE7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hEQTs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pCQTs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9