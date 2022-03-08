/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/main.js */ \"./src/main.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n\n\n\n\nconst { startGame, CANVA_WIDTH, CANVA_HEIGHT } = _src_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n\nconst canvas = document.getElementById(\"canvas\")\ncanvas.width = CANVA_WIDTH\ncanvas.height = CANVA_HEIGHT\n\nlet ctx = canvas.getContext(\"2d\")\n\nstartGame(ctx, canvas)\n\n\n//# sourceURL=webpack://platform-game/./index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./index.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./index.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  height: 100vh;\\n  background-color: rgb(0, 0, 0);\\n  margin: 0;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\ncanvas {\\n  border: 2px solid rgb(50, 50, 50);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://platform-game/./index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://platform-game/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://platform-game/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./img/arizona_background_1900x800.png":
/*!*********************************************!*\
  !*** ./img/arizona_background_1900x800.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"6a8987a29db47edd2cffaf7d6a041a0b.png\");\n\n//# sourceURL=webpack://platform-game/./img/arizona_background_1900x800.png?");

/***/ }),

/***/ "./img/character/jump_left/armor__0027_jump_1.png":
/*!********************************************************!*\
  !*** ./img/character/jump_left/armor__0027_jump_1.png ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"5af8647862b6d07848e38c7a3ad35506.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/jump_left/armor__0027_jump_1.png?");

/***/ }),

/***/ "./img/character/jump_left/armor__0028_jump_2.png":
/*!********************************************************!*\
  !*** ./img/character/jump_left/armor__0028_jump_2.png ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"7a0bc3013a9b3bb0af72a438b72339ec.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/jump_left/armor__0028_jump_2.png?");

/***/ }),

/***/ "./img/character/jump_left/armor__0029_jump_3.png":
/*!********************************************************!*\
  !*** ./img/character/jump_left/armor__0029_jump_3.png ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"8d81467417c9bfd799210e6b650fb9f0.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/jump_left/armor__0029_jump_3.png?");

/***/ }),

/***/ "./img/character/jump_left/armor__0030_jump_4.png":
/*!********************************************************!*\
  !*** ./img/character/jump_left/armor__0030_jump_4.png ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"b0171d9a7fba9994e834cb6185af19cc.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/jump_left/armor__0030_jump_4.png?");

/***/ }),

/***/ "./img/character/jump_right/armor__0027_jump_1.png":
/*!*********************************************************!*\
  !*** ./img/character/jump_right/armor__0027_jump_1.png ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"8cdeecc52eff5b6ede71fd8d2539a1ee.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/jump_right/armor__0027_jump_1.png?");

/***/ }),

/***/ "./img/character/jump_right/armor__0028_jump_2.png":
/*!*********************************************************!*\
  !*** ./img/character/jump_right/armor__0028_jump_2.png ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"2e00627bf73afa601725267ead171a42.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/jump_right/armor__0028_jump_2.png?");

/***/ }),

/***/ "./img/character/jump_right/armor__0029_jump_3.png":
/*!*********************************************************!*\
  !*** ./img/character/jump_right/armor__0029_jump_3.png ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"978015025b82c456737caee0f91c705d.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/jump_right/armor__0029_jump_3.png?");

/***/ }),

/***/ "./img/character/jump_right/armor__0030_jump_4.png":
/*!*********************************************************!*\
  !*** ./img/character/jump_right/armor__0030_jump_4.png ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"38e68f8419b8fcac6480a40be602a2ea.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/jump_right/armor__0030_jump_4.png?");

/***/ }),

/***/ "./img/character/run_left/armor__0012_runleft_1.png":
/*!**********************************************************!*\
  !*** ./img/character/run_left/armor__0012_runleft_1.png ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"095cd086f46680a703490a9c38d6b409.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/run_left/armor__0012_runleft_1.png?");

/***/ }),

/***/ "./img/character/run_left/armor__0013_runleft_2.png":
/*!**********************************************************!*\
  !*** ./img/character/run_left/armor__0013_runleft_2.png ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"db9b6943184c9783a974a6242c7eff6b.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/run_left/armor__0013_runleft_2.png?");

/***/ }),

/***/ "./img/character/run_left/armor__0014_runleft_3.png":
/*!**********************************************************!*\
  !*** ./img/character/run_left/armor__0014_runleft_3.png ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"ed874627e4bdbc17afca90180b7de475.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/run_left/armor__0014_runleft_3.png?");

/***/ }),

/***/ "./img/character/run_left/armor__0015_runleft_4.png":
/*!**********************************************************!*\
  !*** ./img/character/run_left/armor__0015_runleft_4.png ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"9e93b60ab4cd08f36ab887fb0501beb6.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/run_left/armor__0015_runleft_4.png?");

/***/ }),

/***/ "./img/character/run_left/armor__0016_runleft_5.png":
/*!**********************************************************!*\
  !*** ./img/character/run_left/armor__0016_runleft_5.png ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"bd7a49a7e42c68ff30526eb689a6c761.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/run_left/armor__0016_runleft_5.png?");

/***/ }),

/***/ "./img/character/run_left/armor__0017_runleft_6.png":
/*!**********************************************************!*\
  !*** ./img/character/run_left/armor__0017_runleft_6.png ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"83891edac1eda147bec82a485ed2b559.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/run_left/armor__0017_runleft_6.png?");

/***/ }),

/***/ "./img/character/run_right/armor__0012_run_1.png":
/*!*******************************************************!*\
  !*** ./img/character/run_right/armor__0012_run_1.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"a99d4b8c8172c3b442b47af941b8570b.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/run_right/armor__0012_run_1.png?");

/***/ }),

/***/ "./img/character/run_right/armor__0013_run_2.png":
/*!*******************************************************!*\
  !*** ./img/character/run_right/armor__0013_run_2.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"b23da68b2ec8ed7b5162bccdb88349e3.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/run_right/armor__0013_run_2.png?");

/***/ }),

/***/ "./img/character/run_right/armor__0014_run_3.png":
/*!*******************************************************!*\
  !*** ./img/character/run_right/armor__0014_run_3.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"bf4c5c1504038b56da8167e3262b6730.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/run_right/armor__0014_run_3.png?");

/***/ }),

/***/ "./img/character/run_right/armor__0015_run_4.png":
/*!*******************************************************!*\
  !*** ./img/character/run_right/armor__0015_run_4.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"ab1eaea2392764845ee32ec8b6473d12.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/run_right/armor__0015_run_4.png?");

/***/ }),

/***/ "./img/character/run_right/armor__0016_run_5.png":
/*!*******************************************************!*\
  !*** ./img/character/run_right/armor__0016_run_5.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d43d149696df6ae02c22a39c07a7080d.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/run_right/armor__0016_run_5.png?");

/***/ }),

/***/ "./img/character/run_right/armor__0017_run_6.png":
/*!*******************************************************!*\
  !*** ./img/character/run_right/armor__0017_run_6.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"2aa02eb31a90eb56edf3c594e92d75bb.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/run_right/armor__0017_run_6.png?");

/***/ }),

/***/ "./img/character/walk_right/armor__0006_walk_1.png":
/*!*********************************************************!*\
  !*** ./img/character/walk_right/armor__0006_walk_1.png ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"c5d89a279ea52e5ecc1041b95cddabab.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/walk_right/armor__0006_walk_1.png?");

/***/ }),

/***/ "./img/character/walk_right/armor__0007_walk_2.png":
/*!*********************************************************!*\
  !*** ./img/character/walk_right/armor__0007_walk_2.png ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"c4bc96a0647bd1b6f3b87347a5e664d7.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/walk_right/armor__0007_walk_2.png?");

/***/ }),

/***/ "./img/character/walk_right/armor__0008_walk_3.png":
/*!*********************************************************!*\
  !*** ./img/character/walk_right/armor__0008_walk_3.png ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"4136e96b7cf06421db5447c4434a9762.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/walk_right/armor__0008_walk_3.png?");

/***/ }),

/***/ "./img/character/walk_right/armor__0009_walk_4.png":
/*!*********************************************************!*\
  !*** ./img/character/walk_right/armor__0009_walk_4.png ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"73ccff70ba3ba10ed38984344f31ff7c.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/walk_right/armor__0009_walk_4.png?");

/***/ }),

/***/ "./img/character/walk_right/armor__0010_walk_5.png":
/*!*********************************************************!*\
  !*** ./img/character/walk_right/armor__0010_walk_5.png ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"04642b8f976e76b7f5b9e3f02ff6d7e1.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/walk_right/armor__0010_walk_5.png?");

/***/ }),

/***/ "./img/character/walk_right/armor__0011_walk_6.png":
/*!*********************************************************!*\
  !*** ./img/character/walk_right/armor__0011_walk_6.png ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"e43826870d75160535cb42bbd68dfe1a.png\");\n\n//# sourceURL=webpack://platform-game/./img/character/walk_right/armor__0011_walk_6.png?");

/***/ }),

/***/ "./img/platforms/tile1.png":
/*!*********************************!*\
  !*** ./img/platforms/tile1.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"a85fab5a8fb73c129e49cd17f8c872bc.png\");\n\n//# sourceURL=webpack://platform-game/./img/platforms/tile1.png?");

/***/ }),

/***/ "./img/platforms/tile2.png":
/*!*********************************!*\
  !*** ./img/platforms/tile2.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"011ad0256865f8f7c250378d72b9a56e.png\");\n\n//# sourceURL=webpack://platform-game/./img/platforms/tile2.png?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://platform-game/./index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://platform-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://platform-game/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://platform-game/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://platform-game/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://platform-game/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://platform-game/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/classes/Generic.js":
/*!********************************!*\
  !*** ./src/classes/Generic.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Generic {\n  constructor({ x, y }, image) {\n    this.position = {\n      x,\n      y\n    }\n    this.width = 250\n    this.height = 10\n\n    this.image = image\n  }\n\n  draw(ctx) {\n    ctx.drawImage(this.image, this.position.x, this.position.y)\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Generic);\n\n\n//# sourceURL=webpack://platform-game/./src/classes/Generic.js?");

/***/ }),

/***/ "./src/classes/Platform.js":
/*!*********************************!*\
  !*** ./src/classes/Platform.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Platform {\n  constructor({ x, y },{width, height}, image) {\n    this.position = {\n      x,\n      y\n    }\n    this.width = width\n    this.height = height\n\n    this.image = image\n  }\n\n  move(velocity) {\n    this.position.x = this.position.x + velocity\n  }\n\n  draw(ctx) {\n    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Platform);\n\n\n//# sourceURL=webpack://platform-game/./src/classes/Platform.js?");

/***/ }),

/***/ "./src/classes/Player.js":
/*!*******************************!*\
  !*** ./src/classes/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_character_walk_right_armor_0006_walk_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/character/walk_right/armor__0006_walk_1.png */ \"./img/character/walk_right/armor__0006_walk_1.png\");\n/* harmony import */ var _img_character_walk_right_armor_0007_walk_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/character/walk_right/armor__0007_walk_2.png */ \"./img/character/walk_right/armor__0007_walk_2.png\");\n/* harmony import */ var _img_character_walk_right_armor_0008_walk_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/character/walk_right/armor__0008_walk_3.png */ \"./img/character/walk_right/armor__0008_walk_3.png\");\n/* harmony import */ var _img_character_walk_right_armor_0009_walk_4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/character/walk_right/armor__0009_walk_4.png */ \"./img/character/walk_right/armor__0009_walk_4.png\");\n/* harmony import */ var _img_character_walk_right_armor_0010_walk_5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/character/walk_right/armor__0010_walk_5.png */ \"./img/character/walk_right/armor__0010_walk_5.png\");\n/* harmony import */ var _img_character_walk_right_armor_0011_walk_6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/character/walk_right/armor__0011_walk_6.png */ \"./img/character/walk_right/armor__0011_walk_6.png\");\n/* harmony import */ var _img_character_run_right_armor_0012_run_1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/character/run_right/armor__0012_run_1.png */ \"./img/character/run_right/armor__0012_run_1.png\");\n/* harmony import */ var _img_character_run_right_armor_0013_run_2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/character/run_right/armor__0013_run_2.png */ \"./img/character/run_right/armor__0013_run_2.png\");\n/* harmony import */ var _img_character_run_right_armor_0014_run_3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/character/run_right/armor__0014_run_3.png */ \"./img/character/run_right/armor__0014_run_3.png\");\n/* harmony import */ var _img_character_run_right_armor_0015_run_4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/character/run_right/armor__0015_run_4.png */ \"./img/character/run_right/armor__0015_run_4.png\");\n/* harmony import */ var _img_character_run_right_armor_0016_run_5_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/character/run_right/armor__0016_run_5.png */ \"./img/character/run_right/armor__0016_run_5.png\");\n/* harmony import */ var _img_character_run_right_armor_0017_run_6_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/character/run_right/armor__0017_run_6.png */ \"./img/character/run_right/armor__0017_run_6.png\");\n/* harmony import */ var _img_character_run_left_armor_0012_runleft_1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/character/run_left/armor__0012_runleft_1.png */ \"./img/character/run_left/armor__0012_runleft_1.png\");\n/* harmony import */ var _img_character_run_left_armor_0013_runleft_2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../img/character/run_left/armor__0013_runleft_2.png */ \"./img/character/run_left/armor__0013_runleft_2.png\");\n/* harmony import */ var _img_character_run_left_armor_0014_runleft_3_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../img/character/run_left/armor__0014_runleft_3.png */ \"./img/character/run_left/armor__0014_runleft_3.png\");\n/* harmony import */ var _img_character_run_left_armor_0015_runleft_4_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../img/character/run_left/armor__0015_runleft_4.png */ \"./img/character/run_left/armor__0015_runleft_4.png\");\n/* harmony import */ var _img_character_run_left_armor_0016_runleft_5_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../img/character/run_left/armor__0016_runleft_5.png */ \"./img/character/run_left/armor__0016_runleft_5.png\");\n/* harmony import */ var _img_character_run_left_armor_0017_runleft_6_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../img/character/run_left/armor__0017_runleft_6.png */ \"./img/character/run_left/armor__0017_runleft_6.png\");\n/* harmony import */ var _img_character_jump_right_armor_0027_jump_1_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../img/character/jump_right/armor__0027_jump_1.png */ \"./img/character/jump_right/armor__0027_jump_1.png\");\n/* harmony import */ var _img_character_jump_right_armor_0028_jump_2_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../img/character/jump_right/armor__0028_jump_2.png */ \"./img/character/jump_right/armor__0028_jump_2.png\");\n/* harmony import */ var _img_character_jump_right_armor_0029_jump_3_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../img/character/jump_right/armor__0029_jump_3.png */ \"./img/character/jump_right/armor__0029_jump_3.png\");\n/* harmony import */ var _img_character_jump_right_armor_0030_jump_4_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../img/character/jump_right/armor__0030_jump_4.png */ \"./img/character/jump_right/armor__0030_jump_4.png\");\n/* harmony import */ var _img_character_jump_left_armor_0027_jump_1_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../img/character/jump_left/armor__0027_jump_1.png */ \"./img/character/jump_left/armor__0027_jump_1.png\");\n/* harmony import */ var _img_character_jump_left_armor_0028_jump_2_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../img/character/jump_left/armor__0028_jump_2.png */ \"./img/character/jump_left/armor__0028_jump_2.png\");\n/* harmony import */ var _img_character_jump_left_armor_0029_jump_3_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../img/character/jump_left/armor__0029_jump_3.png */ \"./img/character/jump_left/armor__0029_jump_3.png\");\n/* harmony import */ var _img_character_jump_left_armor_0030_jump_4_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../img/character/jump_left/armor__0030_jump_4.png */ \"./img/character/jump_left/armor__0030_jump_4.png\");\n/* harmony import */ var _utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../utilities/imageFactory */ \"./src/utilities/imageFactory.js\");\n\n/*\nimport idleRight1 from \"../img/character/idle_right/armor__0000_idle_1.png\"\nimport idleRight2 from \"../img/character/idle_right/armor__0001_idle_2.png\"\nimport idleRight3 from \"../img/character/idle_right/armor__0002_idle_3.png\"\n\nimport idleLeft1 from \"../img/character/idle_left/armor__0000_idle_1.png\"\nimport idleLeft2 from \"../img/character/idle_left/armor__0001_idle_2.png\"\nimport idleLeft3 from \"../img/character/idle_left/armor__0002_idle_3.png\"\n*/\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst GRAVITY = 1\nconst JUMP_POWER = 25\n\n\nclass Player {\n  constructor({x, y}) {\n    this.position = {\n      x,\n      y\n    }\n    this.width = 80\n    this.height = 160\n    this.velocity = {\n      x: 0,\n      y: 0\n    };\n\n    this.sprites = {\n      walkRight: {\n        a: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_walk_right_armor_0006_walk_1_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n        b: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_walk_right_armor_0007_walk_2_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n        c: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_walk_right_armor_0008_walk_3_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n        d: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_walk_right_armor_0009_walk_4_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n        e: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_walk_right_armor_0010_walk_5_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n        f: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_walk_right_armor_0011_walk_6_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n      },\n      right: {\n        a: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_run_right_armor_0012_run_1_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n        b: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_run_right_armor_0013_run_2_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n        c: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_run_right_armor_0014_run_3_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n        d: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_run_right_armor_0015_run_4_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]),\n        e: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_run_right_armor_0016_run_5_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"]),\n        f: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_run_right_armor_0017_run_6_png__WEBPACK_IMPORTED_MODULE_11__[\"default\"])\n      },\n      left: {\n        a: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_run_left_armor_0012_runleft_1_png__WEBPACK_IMPORTED_MODULE_12__[\"default\"]),\n        b: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_run_left_armor_0013_runleft_2_png__WEBPACK_IMPORTED_MODULE_13__[\"default\"]),\n        c: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_run_left_armor_0014_runleft_3_png__WEBPACK_IMPORTED_MODULE_14__[\"default\"]),\n        d: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_run_left_armor_0015_runleft_4_png__WEBPACK_IMPORTED_MODULE_15__[\"default\"]),\n        e: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_run_left_armor_0016_runleft_5_png__WEBPACK_IMPORTED_MODULE_16__[\"default\"]),\n        f: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_run_left_armor_0017_runleft_6_png__WEBPACK_IMPORTED_MODULE_17__[\"default\"])\n      },\n      jumpRight: {\n        a: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_jump_right_armor_0027_jump_1_png__WEBPACK_IMPORTED_MODULE_18__[\"default\"]),\n        b: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_jump_right_armor_0028_jump_2_png__WEBPACK_IMPORTED_MODULE_19__[\"default\"]),\n        c: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_jump_right_armor_0029_jump_3_png__WEBPACK_IMPORTED_MODULE_20__[\"default\"]),\n        d: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_jump_right_armor_0030_jump_4_png__WEBPACK_IMPORTED_MODULE_21__[\"default\"]),\n      },\n      jumpLeft: {\n        a: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_jump_left_armor_0027_jump_1_png__WEBPACK_IMPORTED_MODULE_22__[\"default\"]),\n        b: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_jump_left_armor_0028_jump_2_png__WEBPACK_IMPORTED_MODULE_23__[\"default\"]),\n        c: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_jump_left_armor_0029_jump_3_png__WEBPACK_IMPORTED_MODULE_24__[\"default\"]),\n        d: (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(_img_character_jump_left_armor_0030_jump_4_png__WEBPACK_IMPORTED_MODULE_25__[\"default\"]),\n      }\n    }\n    \n    this.spriteStatus = \"jumpRight\"\n    this.frame = 1\n  }\n\n  update(ctx) {\n    this.position.y = this.position.y + this.velocity.y\n    this.position.x = this.position.x + this.velocity.x\n\n    this.draw(ctx)\n    this.velocity.y = this.velocity.y + GRAVITY\n    this.frame++\n    if (this.frame === 49) this.frame = 1\n  }\n\n  draw(ctx) {\n    switch(this.spriteStatus) {\n      case \"walkRight\":\n        if (this.frame < 8) {\n          ctx.drawImage(this.sprites.walkRight.a, this.position.x, this.position.y, this.width, this.height)\n        } else if (this.frame < 16) {\n          ctx.drawImage(this.sprites.walkRight.b, this.position.x, this.position.y, this.width, this.height)\n        } else if (this.frame < 24) {\n          ctx.drawImage(this.sprites.walkRight.c, this.position.x, this.position.y, this.width, this.height)\n        } else if (this.frame < 32) {\n          ctx.drawImage(this.sprites.walkRight.d, this.position.x, this.position.y, this.width, this.height)\n        } else if (this.frame < 40) {\n          ctx.drawImage(this.sprites.walkRight.e, this.position.x, this.position.y, this.width, this.height)\n        } else {\n          ctx.drawImage(this.sprites.walkRight.f, this.position.x, this.position.y, this.width, this.height)\n        }\n        break\n      case \"runRight\":\n        if (this.frame < 8) {\n          ctx.drawImage(this.sprites.right.a, this.position.x, this.position.y, this.width, this.height)\n        } else if (this.frame < 16) {\n          ctx.drawImage(this.sprites.right.b, this.position.x, this.position.y, this.width, this.height)\n        } else if (this.frame < 24) {\n          ctx.drawImage(this.sprites.right.c, this.position.x, this.position.y, this.width, this.height)\n        } else if (this.frame < 32) {\n          ctx.drawImage(this.sprites.right.d, this.position.x, this.position.y, this.width, this.height)\n        } else if (this.frame < 40) {\n          ctx.drawImage(this.sprites.right.e, this.position.x, this.position.y, this.width, this.height)\n        } else {\n          ctx.drawImage(this.sprites.right.f, this.position.x, this.position.y, this.width, this.height)\n        }\n        break\n      case \"runLeft\":\n        if (this.frame < 8) {\n          ctx.drawImage(this.sprites.left.a, this.position.x, this.position.y, this.width, this.height)\n        } else if (this.frame < 16) {\n          ctx.drawImage(this.sprites.left.b, this.position.x, this.position.y, this.width, this.height)\n        } else if (this.frame < 24) {\n          ctx.drawImage(this.sprites.left.c, this.position.x, this.position.y, this.width, this.height)\n        } else if (this.frame < 32) {\n          ctx.drawImage(this.sprites.left.d, this.position.x, this.position.y, this.width, this.height)\n        } else if (this.frame < 40) {\n          ctx.drawImage(this.sprites.left.e, this.position.x, this.position.y, this.width, this.height)\n        } else {\n          ctx.drawImage(this.sprites.left.f, this.position.x, this.position.y, this.width, this.height)\n        }\n        break\n      case \"jumpRight\":\n        if (this.frame < 12) {\n          ctx.drawImage(this.sprites.jumpRight.a, this.position.x, this.position.y, this.width, this.height)\n        } else if (this.frame < 24) {\n          ctx.drawImage(this.sprites.jumpRight.b, this.position.x, this.position.y, this.width, this.height)\n        } else if (this.frame < 36) {\n          ctx.drawImage(this.sprites.jumpRight.c, this.position.x, this.position.y, this.width, this.height)\n        } else {\n          ctx.drawImage(this.sprites.jumpRight.d, this.position.x, this.position.y, this.width, this.height)\n        }\n        break\n      case \"jumpLeft\":\n        if (this.frame < 12) {\n          ctx.drawImage(this.sprites.jumpLeft.a, this.position.x, this.position.y, this.width, this.height)\n        } else if (this.frame < 24) {\n          ctx.drawImage(this.sprites.jumpLeft.b, this.position.x, this.position.y, this.width, this.height)\n        } else if (this.frame < 36) {\n          ctx.drawImage(this.sprites.jumpLeft.c, this.position.x, this.position.y, this.width, this.height)\n        } else {\n          ctx.drawImage(this.sprites.jumpLeft.d, this.position.x, this.position.y, this.width, this.height)\n        }\n        break\n      default:\n        console.log(\"draw switch-case defaulted...\")\n    }\n  }\n  \n\n  setYVelocity(velocity) {\n    this.velocity.y = velocity\n  }\n\n  setXVelocity(velocity) {\n    this.velocity.x = velocity\n  }\n\n  jump() {\n    this.velocity.y = -JUMP_POWER\n  }\n\n  setSpriteStatus(status){\n    this.spriteStatus = status\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://platform-game/./src/classes/Player.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CANVA_HEIGHT\": () => (/* binding */ CANVA_HEIGHT),\n/* harmony export */   \"CANVA_WIDTH\": () => (/* binding */ CANVA_WIDTH),\n/* harmony export */   \"HORIZONTAL_MOVEMENT_SPEED\": () => (/* binding */ HORIZONTAL_MOVEMENT_SPEED),\n/* harmony export */   \"MENU_HEIGHT\": () => (/* binding */ MENU_HEIGHT),\n/* harmony export */   \"MENU_WIDTH\": () => (/* binding */ MENU_WIDTH),\n/* harmony export */   \"PLATFORM_MOVEMENT_SPEED\": () => (/* binding */ PLATFORM_MOVEMENT_SPEED),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_arizona_background_1900x800_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/arizona_background_1900x800.png */ \"./img/arizona_background_1900x800.png\");\n/* harmony import */ var _img_platforms_tile1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/platforms/tile1.png */ \"./img/platforms/tile1.png\");\n/* harmony import */ var _classes_Player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Player.js */ \"./src/classes/Player.js\");\n/* harmony import */ var _classes_Platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/Platform */ \"./src/classes/Platform.js\");\n/* harmony import */ var _classes_Generic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/Generic */ \"./src/classes/Generic.js\");\n/* harmony import */ var _utilities_imageFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/imageFactory */ \"./src/utilities/imageFactory.js\");\n/* harmony import */ var _utilities_platformGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities/platformGenerator */ \"./src/utilities/platformGenerator.js\");\n\n\n\n\n\n\n\n\n\n\nconst CANVA_WIDTH = 1600\nconst CANVA_HEIGHT = 800\nconst MENU_WIDTH = 800\nconst MENU_HEIGHT = 400\n\nconst HORIZONTAL_MOVEMENT_SPEED = 7\nconst PLATFORM_MOVEMENT_SPEED = 6\n\nlet animationStopId\nlet gameStatus = {\n  menu: true,\n  game: false,\n  paused: false\n}\nlet player\nlet score = 0\nlet highscore = 0\n\nlet background1\nlet generics\n\nlet startingPlatform\nlet platforms\n\nlet keysPressed = {\n  right: false,\n  left: false\n}\n\nfunction startGame(ctx, canvas) {\n  \n  function load() {\n    score = 0\n\n    player = new _classes_Player_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({x: 120, y: 300})\n\n    background1 = new _classes_Generic__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({ x: 0, y: 0 }, (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_img_arizona_background_1900x800_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"]))\n    generics = [background1]\n\n    startingPlatform = new _classes_Platform__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({x: 0, y: 770}, {width: 2000, height: 138}, (0,_utilities_imageFactory__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_img_platforms_tile1_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"])) \n    platforms = [startingPlatform]\n\n    for(let i = 1; i < 5; i++) {\n      platforms[i] = (0,_utilities_platformGenerator__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\n        {\n          x: platforms[i-1].position.x + platforms[i-1].width,\n          y: platforms[i-1].position.y\n        }\n      )\n    }\n  }\n\n\n  function renderScoreboard() {\n    ctx.font = \"36px 'Press Start 2P'\";\n    ctx.fillStyle = \"white\"\n\n    ctx.fillText(score, CANVA_WIDTH/2 - ctx.measureText(score).width/2, 100)  \n  }\n\n  \n  function collisionDetection(platform) {\n    if (player.position.y + player.height <= platform.position.y + 12 &&\n      player.position.y + player.height + player.velocity.y >= platform.position.y + 12 &&\n      player.position.x + player.width > platform.position.x + 20 &&\n      player.position.x < platform.position.x + platform.width - 20) {\n        player.setYVelocity(0)\n        \n        // After landing on platform, set player in walk mode\n        if(player.spriteStatus === \"jumpRight\") {\n          player.spriteStatus = \"walkRight\"\n        }\n        if(player.spriteStatus === \"jumpLeft\") {\n          player.spriteStatus = \"walkRight\"\n        }\n    }\n  }\n\n\n  function dynamicPlatformDeletion(platform) {\n    if (platform.position.x + platform.width < -800) {\n      const index = platforms.indexOf(platform)\n      platforms.splice(index, 1)\n\n      platforms = platforms.concat((0,_utilities_platformGenerator__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\n        {\n          x: platforms[platforms.length-1].position.x + platforms[platforms.length-1].width,\n          y: platforms[platforms.length-1].position.y\n        }\n      ))\n    }\n  }\n\n\n  function setHorizontalVelocity() {\n    if (keysPressed.right && player.position.x < CANVA_WIDTH) {\n      player.setXVelocity(HORIZONTAL_MOVEMENT_SPEED)\n    } else if (keysPressed.left && player.position.x > 0) {\n      player.setXVelocity(-HORIZONTAL_MOVEMENT_SPEED)\n    } else {\n      player.velocity.x = 0\n    }\n  }\n\n\n  function updateSpriteStatus() {\n    if(keysPressed.right && player.spriteStatus != \"jumpRight\" && player.spriteStatus != \"jumpLeft\") {\n      player.setSpriteStatus(\"runRight\")\n    } else if(keysPressed.left && player.spriteStatus != \"jumpRight\" && player.spriteStatus != \"jumpLeft\") {\n      player.setSpriteStatus(\"runLeft\")\n    }\n  }\n\n  \n  function checkLoseCondition() {\n    if (player.position.y + player.height + player.velocity.y > (CANVA_HEIGHT + 500)) {\n      if (score > highscore) highscore = score\n      gameStatus.menu = true\n    }\n  }\n\n  \n  function renderMenu() {\n    drawBorder(ctx, CANVA_WIDTH/2-MENU_WIDTH/2, CANVA_HEIGHT/2-MENU_HEIGHT/2, MENU_WIDTH, MENU_HEIGHT)\n\n    ctx.fillStyle=\"black\"\n    ctx.fillRect(CANVA_WIDTH/2-MENU_WIDTH/2, CANVA_HEIGHT/2-MENU_HEIGHT/2, MENU_WIDTH, MENU_HEIGHT)\n  \n    ctx.fillStyle = \"white\"\n    ctx.font = \"36px 'Press Start 2P'\";\n\n    let menuText = \"WELCOME\"\n    ctx.fillText(menuText, CANVA_WIDTH/2 - ctx.measureText(menuText).width/2, 280)\n    menuText = \"TO\"\n    ctx.fillText(menuText, CANVA_WIDTH/2 - ctx.measureText(menuText).width/2, 320)\n    menuText = \"SPACEJUMPER\"\n    ctx.fillText(menuText, CANVA_WIDTH/2 - ctx.measureText(menuText).width/2, 360)\n\n    ctx.font = \"26px 'Press Start 2P'\";\n    ctx.fillStyle = \"green\"\n    menuText = \"press 'S' to start the game\"\n    ctx.fillText(menuText, CANVA_WIDTH/2 - ctx.measureText(menuText).width/2, 440)\n\n    menuText = \"press 'R' to pause the game\"\n    ctx.fillText(menuText, CANVA_WIDTH/2 - ctx.measureText(menuText).width/2, 480)\n\n    ctx.font = \"20px 'Press Start 2P'\";\n\n    ctx.fillStyle = \"yellow\"\n    menuText = \"last game score \" + score\n    ctx.fillText(menuText, CANVA_WIDTH/2 - ctx.measureText(menuText).width/2, 550)\n    menuText = \"current highscore \" + highscore\n    ctx.fillText(menuText, CANVA_WIDTH/2 - ctx.measureText(menuText).width/2, 580)\n  }\n\n  function menuPlatformMovement(platforms) {\n    platforms.forEach(platform => {\n      platform.draw(ctx)\n      dynamicPlatformDeletion(platform)\n      platform.move(-PLATFORM_MOVEMENT_SPEED)\n    })\n  }\n\n\n  function animate() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n\n    generics.forEach(generic => {\n      generic.draw(ctx)\n    })\n\n    if (gameStatus.menu) {\n      menuPlatformMovement(platforms)\n      renderMenu()\n    } else {\n      platforms.forEach(platform => {\n        platform.draw(ctx)\n        \n        collisionDetection(platform)\n        dynamicPlatformDeletion(platform)\n        \n        platform.move(-PLATFORM_MOVEMENT_SPEED)\n        score += PLATFORM_MOVEMENT_SPEED\n      })\n\n      renderScoreboard()\n      setHorizontalVelocity()\n      updateSpriteStatus()\n      checkLoseCondition()\n\n      player.update(ctx)\n    }\n\n    animationStopId = window.requestAnimationFrame(animate)\n  }\n\n\n  window.addEventListener(\"keydown\", function({ keyCode }) {\n    switch (keyCode){\n      case (87):\n        if(player.spriteStatus !== \"jumpRight\" && player.spriteStatus !== \"jumpLeft\" && player.velocity.y === 1) {\n          player.jump();\n          if(player.spriteStatus === \"walkRight\" || player.spriteStatus === \"runRight\") {\n            player.setSpriteStatus(\"jumpRight\")\n          } else {\n            player.setSpriteStatus(\"jumpLeft\")\n          }\n        }\n        break\n      case (68):\n        keysPressed.right = true;\n        break\n      case (65):\n        keysPressed.left = true;\n        break\n      default:\n        null\n    }\n  })\n\n\n  window.addEventListener(\"keyup\", function({ keyCode }) {\n    console.log(keyCode)\n    switch(keyCode){\n      case (68):\n        keysPressed.right = false;\n        if(player.spriteStatus != \"jumpRight\" && player.spriteStatus != \"jumpLeft\" ) player.setSpriteStatus(\"walkRight\")\n        break\n      case (65):\n        keysPressed.left = false;\n        if(player.spriteStatus != \"jumpRight\" && player.spriteStatus != \"jumpLeft\") player.setSpriteStatus(\"walkRight\")\n        break\n      case (82):\n        if (gameStatus.paused) window.requestAnimationFrame(animate)\n        else window.cancelAnimationFrame(animationStopId)\n        gameStatus.paused = !gameStatus.paused\n        break\n      case (83):\n        if(gameStatus.menu) gameStatus.menu = false\n        load()\n        break\n      default:\n        null\n    }\n  })\n\n  \n  load()\n  window.requestAnimationFrame(animate)\n}\n\n\nfunction drawBorder(ctx, xPos, yPos, width, height, thickness = 2)\n{\n  ctx.fillStyle = \"white\";\n  ctx.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 2), height + (thickness * 2));\n}\n\n\nconst exportObject = {\n  startGame,\n  CANVA_WIDTH,\n  CANVA_HEIGHT\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportObject);\n\n\n//# sourceURL=webpack://platform-game/./src/main.js?");

/***/ }),

/***/ "./src/utilities/imageFactory.js":
/*!***************************************!*\
  !*** ./src/utilities/imageFactory.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction imageFactory(imageSource) {\n  const image = new Image()\n  image.src = imageSource\n  return image\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imageFactory);\n\n\n//# sourceURL=webpack://platform-game/./src/utilities/imageFactory.js?");

/***/ }),

/***/ "./src/utilities/platformGenerator.js":
/*!********************************************!*\
  !*** ./src/utilities/platformGenerator.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_platforms_tile1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/platforms/tile1.png */ \"./img/platforms/tile1.png\");\n/* harmony import */ var _img_platforms_tile2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/platforms/tile2.png */ \"./img/platforms/tile2.png\");\n/* harmony import */ var _imageFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageFactory */ \"./src/utilities/imageFactory.js\");\n/* harmony import */ var _classes_Platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/Platform */ \"./src/classes/Platform.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main */ \"./src/main.js\");\n\n\n\n\n\n\n\n\nfunction getRandomIntBetween(min, max) {\n  return Math.floor(Math.random() * (max - min) + min)\n}\n\n// Generates platform based on previous platform's coordinates\n// x-coordinate is end of the platform instead of starting point\nfunction platformGenerator(prevCords) {\n  let {x, y} = prevCords\n\n  // Coordinates for next platform tile\n  x = x + getRandomIntBetween(230, 280)\n  y = y + getRandomIntBetween(-180, 180)\n\n  // Ensure that platform is within the screen view\n  while (y > _main__WEBPACK_IMPORTED_MODULE_4__.CANVA_HEIGHT-100 || y < 300) {\n    y = y + getRandomIntBetween(-180, 180)\n  }\n\n  const r = getRandomIntBetween(0,2)\n  switch(r) {\n    case 0:\n      return new _classes_Platform__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({x, y}, {width: 513, height: 138}, (0,_imageFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_img_platforms_tile1_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"]))\n    case 1: \n      return new _classes_Platform__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({x, y}, {width: 263, height: 161}, (0,_imageFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_img_platforms_tile2_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]))\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (platformGenerator);\n\n\n//# sourceURL=webpack://platform-game/./src/utilities/platformGenerator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;