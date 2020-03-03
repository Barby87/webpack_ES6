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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _two__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./two */ \"./src/two.js\");\n/* harmony import */ var _three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./three */ \"./src/three.js\");\n\n\nObject(_two__WEBPACK_IMPORTED_MODULE_0__[\"function2\"])();\nconsole.log('function2 desde index.js', Object(_two__WEBPACK_IMPORTED_MODULE_0__[\"function2\"])());\nObject(_three__WEBPACK_IMPORTED_MODULE_1__[\"saludo\"])('HOLA DESDE INDEX.HTML');\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/one.js":
/*!********************!*\
  !*** ./src/one.js ***!
  \********************/
/*! exports provided: function1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"function1\", function() { return function1; });\nvar arrNumber = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415];\nvar function1 = function function1(arr) {\n  var resultado = [];\n  arr.forEach(function (element) {\n    if (typeof element === \"number\") {\n      resultado.push(element * 4);\n    }\n  });\n  resultado = resultado.filter(function (elementos) {\n    if (elementos > 8) {\n      return elementos;\n    }\n  });\n  return resultado;\n};\nfunction1(arrNumber);\nconsole.log('function1 desde one.js', function1(arrNumber));\n\n//# sourceURL=webpack:///./src/one.js?");

/***/ }),

/***/ "./src/three.js":
/*!**********************!*\
  !*** ./src/three.js ***!
  \**********************/
/*! exports provided: saludo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saludo\", function() { return saludo; });\n/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one */ \"./src/one.js\");\n/* harmony import */ var _two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./two */ \"./src/two.js\");\n\n\nvar users = [{\n  nombre: \"Antonia\",\n  edad: 32,\n  nacionalidad: \"España\",\n  profesión: \"Abogada\"\n}, {\n  nombre: \"Mario\",\n  edad: 27,\n  nacionalidad: \"México\",\n  profesión: \"Médico\"\n}];\nObject(_two__WEBPACK_IMPORTED_MODULE_1__[\"function2\"])(users);\nconsole.log(\"function2 desde three.js\", Object(_two__WEBPACK_IMPORTED_MODULE_1__[\"function2\"])(users));\nvar variable1 = [1, 4, 23, -4, \"one\", 6, 0, 1.1, 3.1415];\nObject(_one__WEBPACK_IMPORTED_MODULE_0__[\"function1\"])(variable1);\nconsole.log(\"function1 desde three.js\", Object(_one__WEBPACK_IMPORTED_MODULE_0__[\"function1\"])(variable1));\nvar saludo = function saludo() {\n  alert(\"hola\");\n}; // three.js Debe contener una función que invoque las funciones presentes en one y two.\n// Debe retornar sus resultados en un objeto con la siguiente estructura:\n// {\n//     \"status\": \"OK\",\n//     \"one\": resultOne,\n//     \"two\": resultTwo\n// }\n// Donde resultOne y resultTwo son los resultados de ambas funciones\n\nvar function3 = function function3(func1, func2) {\n  var resultOne = func1;\n  var resultTwo = func2;\n  var objectResults = {\n    \"status\": \"OK\",\n    \"one\": resultOne,\n    \"two\": resultTwo\n  };\n  return objectResults;\n};\n\nfunction3(Object(_one__WEBPACK_IMPORTED_MODULE_0__[\"function1\"])(variable1), Object(_two__WEBPACK_IMPORTED_MODULE_1__[\"function2\"])(users));\nconsole.log('function 3 desde three.js', function3(Object(_one__WEBPACK_IMPORTED_MODULE_0__[\"function1\"])(variable1), Object(_two__WEBPACK_IMPORTED_MODULE_1__[\"function2\"])(users)));\n\n//# sourceURL=webpack:///./src/three.js?");

/***/ }),

/***/ "./src/two.js":
/*!********************!*\
  !*** ./src/two.js ***!
  \********************/
/*! exports provided: function2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"function2\", function() { return function2; });\nvar function2 = function function2(object) {\n  var objectToString = JSON.stringify(object);\n  return objectToString;\n};\nvar usersJson = [{\n  nombre: \"Antonia\",\n  edad: 32,\n  nacionalidad: \"España\",\n  profesión: \"Abogada\"\n}, {\n  nombre: \"Mario\",\n  edad: 27,\n  nacionalidad: \"México\",\n  profesión: \"Médico\"\n}];\nfunction2(usersJson);\nconsole.log(\"function2 desde two.js\", function2(usersJson));\n\n//# sourceURL=webpack:///./src/two.js?");

/***/ })

/******/ });