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

/***/ "./img/platform_scaled.png":
/*!*********************************!*\
  !*** ./img/platform_scaled.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"a9efd675951cfcd3c0b6ce5194a888fb.png\");\n\n//# sourceURL=webpack://platform-game/./img/platform_scaled.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_platform_scaled_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform_scaled.png */ \"./img/platform_scaled.png\");\n\n\nconst CANVA_WIDTH = 1900\nconst CANVA_HEIGHT = 800\n\nconst GRAVITY = 0.5\nconst JUMP_POWER = 20\nconst HORIZONTAL_MOVEMENT_SPEED = 7\n\nlet score = 0 // scroll offset i.e. how much platforms have scrolled left\n\n\nfunction main() {\n  const canvas = document.getElementById(\"canvas\")\n  canvas.width = CANVA_WIDTH\n  canvas.height = CANVA_HEIGHT\n\n  let ctx = canvas.getContext(\"2d\")\n\n  startGame(ctx)\n}\n\n\nfunction startGame(ctx) {\n  const player = new Player({x: 100, y: 400})\n  player.draw(ctx)\n\n  const platform_image = new Image()\n  platform_image.src = _img_platform_scaled_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n\n  const platform1 = new Platform({x: 200, y: 150}, platform_image)\n  const platform2 = new Platform({x: 600, y: 300}, platform_image)\n  const platform3 = new Platform({x: 900, y: 150}, platform_image)\n  const platform4 = new Platform({x: 1200, y: 300}, platform_image)\n  const platform5 = new Platform({x: 1400, y: 150}, platform_image)\n  const platform6 = new Platform({x: 1600, y: 300}, platform_image)\n  const platforms = [platform1, platform2, platform3, platform4, platform5, platform6]\n  \n  const keysPressed = {\n    right: false,\n    left: false\n  }\n\n\n  function animate() {\n    requestAnimationFrame(animate)\n  \n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n    ctx.fillStyle = \"white\"\n    ctx.fillRect(0, 0, canvas.width, canvas.height)\n\n    platforms.forEach(platform => {\n      platform.draw(ctx)\n\n      // Collision detection between player and platform\n      if (player.position.y + player.height <= platform.position.y &&\n          player.position.y + player.height + player.velocity.y >= platform.position.y &&\n          player.position.x + player.width > platform.position.x &&\n          player.position.x < platform.position.x + platform.width) {\n          player.setYVelocity(0)\n        }\n\n      /* \n        Movement:\n        if (100 < player x position < 500) => move player\n        else => move platforms (or background if you will) \n      */\n      if (keysPressed.right && player.position.x < 500) {\n        player.setXVelocity(HORIZONTAL_MOVEMENT_SPEED)\n      } else if (keysPressed.left && player.position.x > 100) {\n        player.setXVelocity(-HORIZONTAL_MOVEMENT_SPEED)\n      } else {\n        player.velocity.x = 0\n\n        if(keysPressed.right) {\n          platform.move(-HORIZONTAL_MOVEMENT_SPEED)\n          score += HORIZONTAL_MOVEMENT_SPEED\n        } else if (keysPressed.left) {\n          platform.move(HORIZONTAL_MOVEMENT_SPEED)\n          score -= HORIZONTAL_MOVEMENT_SPEED\n        }\n      } \n    })\n\n    console.log(score)\n    player.update(ctx)\n  }\n\n  animate(ctx, player)\n\n  \n  addEventListener(\"keydown\", function({ keyCode }) {\n    switch (keyCode){\n      case (87):\n        player.jump();\n        break\n      case (68):\n        keysPressed.right = true;\n        break\n      case (65):\n        keysPressed.left = true;\n        break\n      default:\n        null\n    }\n  })\n\n  addEventListener(\"keyup\", function({ keyCode }) {\n    switch(keyCode){\n      case (68):\n        keysPressed.right = false;\n        break\n      case (65):\n        keysPressed.left = false;\n        break\n      default:\n        null\n    }\n  })\n}\n\nclass Player {\n  constructor({x, y}) {\n    this.position = {\n      x,\n      y\n    }\n    this.width = 100\n    this.height = 100\n    this.velocity = {\n      x: 0,\n      y: 0\n    };\n  }\n\n  update(ctx) {\n    this.position.y = this.position.y + this.velocity.y\n    this.position.x = this.position.x + this.velocity.x\n    \n    this.draw(ctx)\n\n    // Apply gravity and stop velocity on ground\n    if (this.position.y + this.height + this.velocity.y <= CANVA_HEIGHT) {\n      this.velocity.y = this.velocity.y + GRAVITY\n    } else {\n      this.velocity.y = 0\n    }\n  }\n\n  draw(ctx) {\n    ctx.fillStyle = \"blue\"\n    ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // x, y, width, height\n  }\n\n  setYVelocity(velocity) {\n    this.velocity.y = velocity\n  }\n\n  setXVelocity(velocity) {\n    this.velocity.x = velocity\n  }\n\n  jump() {\n    this.velocity.y = -JUMP_POWER\n  }\n}\n\n\nclass Platform {\n  constructor({ x, y }, image) {\n    this.position = {\n      x,\n      y\n    }\n    this.width = 250\n    this.height = 10\n\n    this.image = image\n  }\n\n  move(velocity) {\n    this.position.x = this.position.x + velocity\n  }\n\n  draw(ctx) {\n    //ctx.fillStyle = \"black\"\n    //ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // x, y, width, height\n    ctx.drawImage(this.image, this.position.x, this.position.y)\n  }\n}\n\nmain()\n\n//# sourceURL=webpack://platform-game/./src/index.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;