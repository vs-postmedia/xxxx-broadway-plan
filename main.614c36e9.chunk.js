(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scrollama__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var scrollama__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scrollama__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_postmedia_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90);
/* harmony import */ var _css_postmedia_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_postmedia_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_colors_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91);
/* harmony import */ var _css_colors_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_colors_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92);
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_fonts_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_7__);

// LIBS



// CSS






// JS
const init = async () => {
  // instantiate the scrollama
  const scroller = scrollama__WEBPACK_IMPORTED_MODULE_2___default()();
  const iframe = document.querySelector('.scrollyteller .chart > iframe');

  // setup the instance, pass callback functions
  scroller.setup({
    offset: 0.75,
    step: '.step'
  }).onStepEnter(resp => {
    // { element, index, direction }
    iframe.src = iframe.src.replace(/#slide-.*/, '') + '#slide-' + resp.index;
  }).onStepExit(resp => {
    // { element, index, direction }
  });

  // setup resize event
  window.addEventListener("resize", scroller.resize);
};
init();

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[44,1,2]]]);