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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../bitmap/dist/Bitmap.js":
/*!********************************!*\
  !*** ../bitmap/dist/Bitmap.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bitmap; });
/* harmony import */ var _e2d_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/display */ "../display/dist/index.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "../bitmap/dist/enums.js");
/* harmony import */ var _BitmapRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BitmapRenderer */ "../bitmap/dist/BitmapRenderer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Bitmap = /*#__PURE__*/function (_DisplayObject) {
  _inherits(Bitmap, _DisplayObject);

  var _super = _createSuper(Bitmap);

  function Bitmap(bitmapData) {
    var _this;

    var pixelSnapping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _enums__WEBPACK_IMPORTED_MODULE_1__["PixelSnapping"].AUTO;
    var smoothing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, Bitmap);

    _this = _super.call(this);
    _this.bitmapData = bitmapData;
    _this.pixelSnapping = pixelSnapping;
    _this.smoothing = smoothing;
    return _this;
  }

  _createClass(Bitmap, [{
    key: "renderContent",
    value: function renderContent(context) {
      _BitmapRenderer__WEBPACK_IMPORTED_MODULE_2__["default"].render(context, this.transform.concatenatedMatrix, this.transform.concatenatedColorTransform, this);
    }
  }]);

  return Bitmap;
}(_e2d_display__WEBPACK_IMPORTED_MODULE_0__["DisplayObject"]);



/***/ }),

/***/ "../bitmap/dist/BitmapData.js":
/*!************************************!*\
  !*** ../bitmap/dist/BitmapData.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BitmapData; });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var BitmapData = /*#__PURE__*/function () {
  function BitmapData(width, height) {
    var transparent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var fillColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0xffffffff;

    _classCallCheck(this, BitmapData);

    this._canvas = document.createElement('canvas');
    this._canvas.width = width;
    this._canvas.height = height;
    this._context = this._canvas.getContext('2d');
    this._transparent = transparent;
    this.fillRect(this.rect, fillColor);
  }

  _createClass(BitmapData, [{
    key: "applyFilter",
    value: function applyFilter(sourceBitmapData, sourceRect, targetPoint, filter) {
      var targetRect = sourceRect.clone();
      targetRect.topLeft = targetPoint;

      var sourceImageData = sourceBitmapData._context.getImageData(sourceRect.x, sourceRect.y, sourceRect.width, sourceRect.height);

      var targetImageData = this._context.getImageData(targetRect.x, targetRect.y, targetRect.width, targetRect.height);

      var sourcePixels = sourceImageData.data;
      var targetPixels = targetImageData.data;
      filter.apply(sourceRect.width, sourceRect.height, sourcePixels, targetPixels);

      this._context.putImageData(targetImageData, targetRect.x, targetRect.y);
    }
  }, {
    key: "clone",
    value: function clone() {
      var width = this.width,
          height = this.height;

      var imageData = this._context.getImageData(0, 0, width, height);

      var target = new BitmapData(this.width, this.height, this.transparent, 0);

      target._context.putImageData(imageData, 0, 0);

      return target;
    }
  }, {
    key: "colorTransform",
    value: function colorTransform(rect, _colorTransform) {
      var redMultiplier = _colorTransform.redMultiplier,
          greenMultiplier = _colorTransform.greenMultiplier,
          blueMultiplier = _colorTransform.blueMultiplier,
          alphaMultiplier = _colorTransform.alphaMultiplier,
          redOffset = _colorTransform.redOffset,
          greenOffset = _colorTransform.greenOffset,
          blueOffset = _colorTransform.blueOffset,
          alphaOffset = _colorTransform.alphaOffset;

      var imageData = this._context.getImageData(rect.x, rect.y, rect.width, rect.height);

      var data = imageData.data;
      var length = data.length;
      var r = 0;

      while (r < length) {
        var g = r + 1;
        var b = r + 2;
        var a = r + 3;
        data[r] = data[r] * redMultiplier + redOffset;
        data[g] = data[g] * blueMultiplier + blueOffset;
        data[b] = data[b] * greenMultiplier + greenOffset;
        data[a] = data[a] * alphaMultiplier + alphaOffset;
        r += 4;
      }

      this._context.putImageData(imageData, rect.x, rect.y);
    }
  }, {
    key: "compare",
    value: function compare(otherBitmapData) {
      throw 'Not implemented';
    }
  }, {
    key: "copyChannel",
    value: function copyChannel(sourceBitmapData, sourceRect, destPoint, sourceChannel, destChannel) {
      throw 'Not implemented';
    }
  }, {
    key: "copyPixels",
    value: function copyPixels(sourceBitmapData, sourceRect, destPoint, alphaBitmapData, alphaPoint) {
      var mergeAlpha = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      throw 'Not implemented';
    }
  }, {
    key: "copyPixelsToByteArray",
    value: function copyPixelsToByteArray(rect, data) {
      throw 'Not implemented';
    }
  }, {
    key: "dispose",
    value: function dispose() {
      delete this._canvas;
      delete this._context;
    }
  }, {
    key: "draw",
    value: function draw(source, matrix, colorTransform, blendMode, clipRect) {
      var smoothing = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      throw 'Not implemented';
    }
  }, {
    key: "drawWithQuality",
    value: function drawWithQuality(source, matrix, colorTransform, blendMode, clipRect, smoothing, quality) {
      throw 'Not implemented';
    }
  }, {
    key: "encode",
    value: function encode(rect, compressor, byteArray) {
      throw 'Not implemented';
    }
  }, {
    key: "fillRect",
    value: function fillRect(rect, color) {
      var a = color >> 24 & 0xff;
      var r = color >> 16 & 0xff;
      var g = color >> 8 & 0xff;
      var b = color & 0xff;
      this._context.strokeStyle = '';
      this._context.fillStyle = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");

      this._context.fillRect(rect.x, rect.y, rect.width, rect.height);
    }
  }, {
    key: "floodFill",
    value: function floodFill(x, y, color) {
      throw 'Not implemented';
    }
  }, {
    key: "generateFilterRect",
    value: function generateFilterRect(sourceRect, filter) {
      throw 'Not implemented';
    }
  }, {
    key: "getColorBoundsRect",
    value: function getColorBoundsRect(mask, color) {
      var findColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      throw 'Not implemented';
    }
  }, {
    key: "getPixel",
    value: function getPixel(x, y) {
      throw 'Not implemented';
    }
  }, {
    key: "getPixel32",
    value: function getPixel32(x, y) {
      throw 'Not implemented';
    }
  }, {
    key: "getPixels",
    value: function getPixels(rect) {
      throw 'Not implemented';
    }
  }, {
    key: "getVector",
    value: function getVector(rect) {
      throw 'Not implemented';
    }
  }, {
    key: "histogram",
    value: function histogram(hRect) {
      throw 'Not implemented';
    }
  }, {
    key: "hitTest",
    value: function hitTest(firstPoint, firstAlphaThreshold, secondObject, secondBitmapDataPoint) {
      var secondAlphaThreshold = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      throw 'Not implemented';
    }
  }, {
    key: "lock",
    value: function lock() {
      throw 'Not implemented';
    }
  }, {
    key: "merge",
    value: function merge(sourceBitmapData, sourceRect, destPoint, redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier) {
      throw 'Not implemented';
    }
  }, {
    key: "noise",
    value: function noise(randomSeed) {
      var low = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var high = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 255;
      var channelOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 7;
      var grayScale = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      throw 'Not implemented';
    }
  }, {
    key: "paletteMap",
    value: function paletteMap(sourceBitmapData, sourceRect, destPoint, redArray, greenArray, blueArray, alphaArray) {
      throw 'Not implemented';
    }
  }, {
    key: "perlinNoise",
    value: function perlinNoise(baseX, baseY, numOctaves, randomSeed, stitch, fractalNoise) {
      var channelOptions = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 7;
      var grayScale = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
      var offsets = arguments.length > 8 ? arguments[8] : undefined;
      throw 'Not implemented';
    }
  }, {
    key: "pixelDissolve",
    value: function pixelDissolve(sourceBitmapData, sourceRect, destPoint) {
      var randomSeed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var numPixels = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var fillColor = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      throw 'Not implemented';
    }
  }, {
    key: "scroll",
    value: function scroll(x, y) {
      throw 'Not implemented';
    }
  }, {
    key: "setPixel",
    value: function setPixel(x, y, color) {
      throw 'Not implemented';
    }
  }, {
    key: "setPixel32",
    value: function setPixel32(x, y, color) {
      throw 'Not implemented';
    }
  }, {
    key: "setPixels",
    value: function setPixels(rect, inputByteArray) {
      throw 'Not implemented';
    }
  }, {
    key: "setVector",
    value: function setVector(rect, inputVector) {
      throw 'Not implemented';
    }
  }, {
    key: "threshold",
    value: function threshold(sourceBitmapData, sourceRect, destPoint, operation, _threshold) {
      var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var mask = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0xFFFFFFFF;
      var copySource = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
      throw 'Not implemented';
    }
  }, {
    key: "unlock",
    value: function unlock(changeRect) {
      throw 'Not implemented';
    }
  }, {
    key: "canvas",
    get: function get() {
      return this._canvas;
    }
  }, {
    key: "transparent",
    get: function get() {
      return this._transparent;
    }
  }, {
    key: "width",
    get: function get() {
      return this._canvas.width;
    }
  }, {
    key: "height",
    get: function get() {
      return this._canvas.height;
    }
  }, {
    key: "rect",
    get: function get() {
      return new _e2d_geom__WEBPACK_IMPORTED_MODULE_0__["Rectangle"](0, 0, this._canvas.width, this._canvas.height);
    }
  }]);

  return BitmapData;
}();



/***/ }),

/***/ "../bitmap/dist/BitmapRenderer.js":
/*!****************************************!*\
  !*** ../bitmap/dist/BitmapRenderer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BitmapRenderer; });
/* harmony import */ var _e2d_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/render */ "../render/dist/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var BitmapRenderer = /*#__PURE__*/function () {
  function BitmapRenderer() {
    _classCallCheck(this, BitmapRenderer);
  }

  _createClass(BitmapRenderer, null, [{
    key: "render",
    value: function render(context, matrix, colorTransform, bitmap) {
      var bitmapData = bitmap.bitmapData,
          smoothing = bitmap.smoothing;

      if (!bitmapData) {
        return;
      }

      context.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
      var pattern = new _e2d_render__WEBPACK_IMPORTED_MODULE_0__["ImagePattern"]();
      pattern.image = bitmapData.canvas;
      pattern.repeat = false;
      pattern.smooth = smoothing;
      var style = {
        alpha: colorTransform.alphaMultiplier
      };
      context.rect(0, 0, bitmapData.width, bitmapData.height);
      context.fill(pattern, style);
    }
  }]);

  return BitmapRenderer;
}();



/***/ }),

/***/ "../bitmap/dist/enums.js":
/*!*******************************!*\
  !*** ../bitmap/dist/enums.js ***!
  \*******************************/
/*! exports provided: BitmapDataChannel, BitmapDataCompare, PixelSnapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitmapDataChannel", function() { return BitmapDataChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitmapDataCompare", function() { return BitmapDataCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixelSnapping", function() { return PixelSnapping; });
var BitmapDataChannel;

(function (BitmapDataChannel) {
  BitmapDataChannel[BitmapDataChannel["RED"] = 1] = "RED";
  BitmapDataChannel[BitmapDataChannel["GREEN"] = 2] = "GREEN";
  BitmapDataChannel[BitmapDataChannel["BLUE"] = 4] = "BLUE";
  BitmapDataChannel[BitmapDataChannel["ALPHA"] = 8] = "ALPHA";
})(BitmapDataChannel || (BitmapDataChannel = {}));

var BitmapDataCompare;

(function (BitmapDataCompare) {
  BitmapDataCompare[BitmapDataCompare["IDENTICAL"] = 0] = "IDENTICAL";
  BitmapDataCompare[BitmapDataCompare["WIDTH_NOT_EQUAL"] = -3] = "WIDTH_NOT_EQUAL";
  BitmapDataCompare[BitmapDataCompare["HEIGHT_NOT_EQUAL"] = -4] = "HEIGHT_NOT_EQUAL";
})(BitmapDataCompare || (BitmapDataCompare = {}));

var PixelSnapping;

(function (PixelSnapping) {
  PixelSnapping["AUTO"] = "auto";
  PixelSnapping["ALWAYS"] = "always";
  PixelSnapping["NEVER"] = "never";
})(PixelSnapping || (PixelSnapping = {}));

/***/ }),

/***/ "../bitmap/dist/index.js":
/*!*******************************!*\
  !*** ../bitmap/dist/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BitmapData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BitmapData */ "../bitmap/dist/BitmapData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BitmapData", function() { return _BitmapData__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Bitmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bitmap */ "../bitmap/dist/Bitmap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bitmap", function() { return _Bitmap__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums */ "../bitmap/dist/enums.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BitmapDataChannel", function() { return _enums__WEBPACK_IMPORTED_MODULE_2__["BitmapDataChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BitmapDataCompare", function() { return _enums__WEBPACK_IMPORTED_MODULE_2__["BitmapDataCompare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PixelSnapping", function() { return _enums__WEBPACK_IMPORTED_MODULE_2__["PixelSnapping"]; });

/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaces */ "../bitmap/dist/interfaces.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_interfaces__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _interfaces__WEBPACK_IMPORTED_MODULE_3__) if(["BitmapData","Bitmap","BitmapDataChannel","BitmapDataCompare","PixelSnapping","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _interfaces__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));






/***/ }),

/***/ "../bitmap/dist/interfaces.js":
/*!************************************!*\
  !*** ../bitmap/dist/interfaces.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../display/dist/Container.js":
/*!************************************!*\
  !*** ../display/dist/Container.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "../display/dist/events/index.js");
/* harmony import */ var _DisplayObjectContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisplayObjectContainer */ "../display/dist/DisplayObjectContainer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Container = /*#__PURE__*/function (_DisplayObjectContain) {
  _inherits(Container, _DisplayObjectContain);

  var _super = _createSuper(Container);

  function Container() {
    var _this;

    _classCallCheck(this, Container);

    _this = _super.call(this);
    _this._dragBounds = null;
    _this._dragX = 0;
    _this._dragY = 0;
    _this._dragListener = null;
    _this.buttonMode = false;
    _this.useHandCursor = false;
    return _this;
  }

  _createClass(Container, [{
    key: "startDrag",
    value: function startDrag() {
      var lockCenter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var bounds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var stage = this.stage;

      if (!stage) {
        return;
      }

      this._dragBounds = bounds;
      this._dragX = this.mouseX;
      this._dragY = this.mouseY;

      if (!this._dragListener) {
        this._dragListener = this.dragMove.bind(this);
      }

      stage.addEventListener(_events__WEBPACK_IMPORTED_MODULE_1__["MOUSE_MOVE"], this._dragListener);
    }
  }, {
    key: "stopDrag",
    value: function stopDrag() {
      var stage = this.stage;

      if (!stage) {
        return;
      }

      if (this._dragListener) {
        stage.removeEventListener(_events__WEBPACK_IMPORTED_MODULE_1__["MOUSE_MOVE"], this._dragListener);
      }
    }
  }, {
    key: "dragMove",
    value: function dragMove() {
      if (!this.parent) {
        return;
      }

      var point = new _e2d_geom__WEBPACK_IMPORTED_MODULE_0__["Point"](this.mouseX - this._dragX, this.mouseY - this._dragY);
      this.transform.concatenatedMatrix.transformPointTo(point, point);
      this.parent.transform.concatenatedMatrix.transformInversePointTo(point, point);
      this.x = point.x;
      this.y = point.y;

      if (this._dragBounds != null) {
        if (this.x < this._dragBounds.left) {
          this.x = this._dragBounds.left;
        } else if (this.x > this._dragBounds.right) {
          this.x = this._dragBounds.right;
        }

        if (this.y < this._dragBounds.top) {
          this.y = this._dragBounds.top;
        } else if (this.y > this._dragBounds.bottom) {
          this.y = this._dragBounds.bottom;
        }
      }
    }
  }]);

  return Container;
}(_DisplayObjectContainer__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "../display/dist/DisplayObject.js":
/*!****************************************!*\
  !*** ../display/dist/DisplayObject.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DisplayObject; });
/* harmony import */ var _e2d_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/events */ "../events/dist/index.js");
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Transform */ "../display/dist/Transform.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums */ "../display/dist/enums.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var globalId = 0;

var DisplayObject = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(DisplayObject, _EventDispatcher);

  var _super = _createSuper(DisplayObject);

  function DisplayObject() {
    var _this;

    _classCallCheck(this, DisplayObject);

    _this = _super.call(this);
    _this._mask = null;
    _this._isMask = false;
    _this._scrollRect = null;
    _this._parent = null;
    _this.id = globalId++;
    _this.name = "instance".concat(_this.id);
    _this.visible = true;
    _this.cacheAsBitmap = false;
    _this.blendMode = _enums__WEBPACK_IMPORTED_MODULE_3__["BlendMode"].NORMAL;
    _this._transform = new _Transform__WEBPACK_IMPORTED_MODULE_2__["default"](_this.getParentTransform.bind(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DisplayObject, [{
    key: "calculateBounds",
    value: function calculateBounds(bounds, matrix) {}
  }, {
    key: "getParentTransform",
    value: function getParentTransform() {
      if (this._parent) {
        return this._parent._transform;
      }

      return null;
    }
  }, {
    key: "render",
    value: function render(context) {
      var alpha = this._transform.concatenatedColorTransform.alphaMultiplier;

      if (!this.visible || this._isMask || alpha <= 0) {
        return;
      }

      if (this._scrollRect) {
        var scrollRect = this._scrollRect;
        var matrix = this._transform.concatenatedMatrix;
        context.save();
        context.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
        context.beginPath();
        context.rect(scrollRect.x, scrollRect.y, scrollRect.width, scrollRect.height);
        context.clip();
      }

      if (this._mask) {
        var mask = this._mask;
        context.save();
        context.beginPath();
        mask.renderContent(context);
        context.clip();
      }

      this.renderContent(context);

      if (this._mask) {
        context.restore();
      }

      if (this._scrollRect) {
        context.restore();
      }
    }
  }, {
    key: "renderContent",
    value: function renderContent(context) {}
  }, {
    key: "transform",
    get: function get() {
      return this._transform;
    }
  }, {
    key: "alpha",
    get: function get() {
      return this._transform.colorTransform.alphaMultiplier;
    },
    set: function set(value) {
      var colorTransform = this._transform.colorTransform;

      if (colorTransform.alphaMultiplier !== value) {
        colorTransform.alphaMultiplier = value;
        this._transform.colorTransform = colorTransform;
      }
    }
  }, {
    key: "isMask",
    get: function get() {
      return this._isMask;
    }
  }, {
    key: "mask",
    get: function get() {
      return this._mask;
    },
    set: function set(value) {
      if (this._mask !== value) {
        if (this._mask) {
          this._mask._isMask = false;
        }

        this._mask = value;

        if (this._mask) {
          this._mask._isMask = true;
        }
      }
    }
  }, {
    key: "x",
    get: function get() {
      return this._transform.matrix.tx;
    },
    set: function set(value) {
      if (Number.isNaN(value)) {
        value = 0;
      }

      var matrix = this._transform.matrix;

      if (matrix.tx !== value) {
        matrix.tx = value;
        this._transform.matrix = matrix;
      }
    }
  }, {
    key: "y",
    get: function get() {
      return this._transform.matrix.ty;
    },
    set: function set(value) {
      if (Number.isNaN(value)) {
        value = 0;
      }

      var matrix = this._transform.matrix;

      if (matrix.ty !== value) {
        matrix.ty = value;
        this._transform.matrix = matrix;
      }
    }
  }, {
    key: "rotation",
    get: function get() {
      return this._transform.matrix.ortX.angle * _e2d_geom__WEBPACK_IMPORTED_MODULE_1__["TO_DEGREE"];
    },
    set: function set(value) {
      if (Number.isNaN(value)) {
        value = 0;
      }

      var rotation = this.rotation;

      if (rotation !== value) {
        var delta = (value - rotation) * _e2d_geom__WEBPACK_IMPORTED_MODULE_1__["TO_RADIAN"];
        var matrix = this._transform.matrix;
        matrix.rotate(delta);
        this._transform.matrix = matrix;
      }
    }
  }, {
    key: "scaleX",
    get: function get() {
      return this._transform.matrix.ortX.length;
    },
    set: function set(value) {
      if (Number.isNaN(value)) {
        value = 1;
      }

      if (this.scaleX !== value) {
        var matrix = this._transform.matrix;
        var point = matrix.ortX;
        var scale = value / point.length;
        point.x *= scale;
        point.y *= scale;
        matrix.ortX = point;
        this._transform.matrix = matrix;
      }
    }
  }, {
    key: "scaleY",
    get: function get() {
      return this._transform.matrix.ortY.length;
    },
    set: function set(value) {
      if (Number.isNaN(value)) {
        value = 1;
      }

      if (this.scaleY !== value) {
        var matrix = this._transform.matrix;
        var point = matrix.ortY;
        var scale = value / point.length;
        point.x *= scale;
        point.y *= scale;
        matrix.ortY = point;
        this._transform.matrix = matrix;
      }
    }
  }, {
    key: "width",
    get: function get() {
      var bounds = new _e2d_geom__WEBPACK_IMPORTED_MODULE_1__["Rectangle"]();
      this.calculateBounds(bounds, this._transform.matrix);
      return bounds.width;
    },
    set: function set(value) {
      if (Number.isNaN(value)) {
        value = 0;
      }

      var bounds = new _e2d_geom__WEBPACK_IMPORTED_MODULE_1__["Rectangle"]();
      var matrix = new _e2d_geom__WEBPACK_IMPORTED_MODULE_1__["Matrix"]();
      this.calculateBounds(bounds, matrix);

      if (bounds.width !== value) {
        this.scaleX = value / bounds.width;
      } else {
        this.scaleX = 1;
      }
    }
  }, {
    key: "height",
    get: function get() {
      var bounds = new _e2d_geom__WEBPACK_IMPORTED_MODULE_1__["Rectangle"]();
      this.calculateBounds(bounds, this._transform.matrix);
      return bounds.height;
    },
    set: function set(value) {
      if (Number.isNaN(value)) {
        value = 0;
      }

      var bounds = new _e2d_geom__WEBPACK_IMPORTED_MODULE_1__["Rectangle"]();
      var matrix = new _e2d_geom__WEBPACK_IMPORTED_MODULE_1__["Matrix"]();
      this.calculateBounds(bounds, matrix);

      if (bounds.height !== value) {
        this.scaleY = value / bounds.height;
      } else {
        this.scaleY = 1;
      }
    }
  }, {
    key: "mouseX",
    get: function get() {
      var stage = this.stage;

      if (stage) {
        return this._transform.concatenatedMatrix.transformInverseX(stage.mouseX, stage.mouseY);
      }

      return 0;
    }
  }, {
    key: "mouseY",
    get: function get() {
      var stage = this.stage;

      if (stage) {
        return this._transform.concatenatedMatrix.transformInverseX(stage.mouseX, stage.mouseY);
      }

      return 0;
    }
  }, {
    key: "scrollRect",
    get: function get() {
      if (this._scrollRect) {
        return this._scrollRect.clone();
      }

      return null;
    },
    set: function set(value) {
      if (this._scrollRect !== value) {
        this._scrollRect = value ? value.clone() : null;
      }
    }
  }, {
    key: "parent",
    get: function get() {
      return this._parent;
    }
  }, {
    key: "root",
    get: function get() {
      var value = this;

      while (value._parent) {
        value = value._parent;
      }

      return value;
    }
  }, {
    key: "stage",
    get: function get() {
      var root = this.root;

      if ('stageWidth' in root) {
        return root;
      }

      return null;
    }
  }]);

  return DisplayObject;
}(_e2d_events__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"]);



/***/ }),

/***/ "../display/dist/DisplayObjectContainer.js":
/*!*************************************************!*\
  !*** ../display/dist/DisplayObjectContainer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DisplayObjectContainer; });
/* harmony import */ var _InteractiveObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InteractiveObject */ "../display/dist/InteractiveObject.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var DisplayObjectContainer = /*#__PURE__*/function (_InteractiveObject) {
  _inherits(DisplayObjectContainer, _InteractiveObject);

  var _super = _createSuper(DisplayObjectContainer);

  function DisplayObjectContainer() {
    var _this;

    _classCallCheck(this, DisplayObjectContainer);

    _this = _super.call(this);
    _this._children = [];
    _this.mouseChildren = true;
    return _this;
  }

  _createClass(DisplayObjectContainer, [{
    key: "getChildAt",
    value: function getChildAt(index) {
      return this._children[index];
    }
  }, {
    key: "getChildByName",
    value: function getChildByName(name) {
      return this._children.find(function (child) {
        return child.name === name;
      });
    }
  }, {
    key: "getChildIndex",
    value: function getChildIndex(child) {
      return this._children.indexOf(child);
    }
  }, {
    key: "setChildIndex",
    value: function setChildIndex(child, index) {
      var current = this.getChildIndex(child);

      if (current === index) {
        return;
      }

      this._children.splice(current, 1);

      this._children.splice(index, 0, child);
    }
  }, {
    key: "contains",
    value: function contains(child) {
      return child.parent === this;
    }
  }, {
    key: "addChild",
    value: function addChild(child) {
      if (!this.contains(child)) {
        if (child.parent) {
          var parent = child.parent;
          parent.removeChild(child);
        }

        child._parent = this;

        this._children.push(child);
      }

      return child;
    }
  }, {
    key: "addChildAt",
    value: function addChildAt(child, index) {
      if (!this.contains(child)) {
        if (child.parent != null) {
          var parent = child.parent;
          parent.removeChild(child);
        }

        child._parent = this;

        if (index >= this._children.length) {
          this._children.push(child);
        } else {
          this._children.splice(index, 0, child);
        }
      }

      return child;
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      if (this.contains(child)) {
        var index = this._children.indexOf(child);

        this.removeChildAt(index);
      }

      return child;
    }
  }, {
    key: "removeChildAt",
    value: function removeChildAt(index) {
      var child = this._children[index];

      if (child) {
        child._parent = null;

        this._children.splice(index, 1);
      }

      return child;
    }
  }, {
    key: "removeChildren",
    value: function removeChildren() {
      this._children.forEach(function (child) {
        child._parent = null;
      });

      this._children = [];
    }
  }, {
    key: "renderContent",
    value: function renderContent(context) {
      this._children.forEach(function (child) {
        child.render(context);
      });
    }
  }, {
    key: "numChildren",
    get: function get() {
      return this._children.length;
    }
  }]);

  return DisplayObjectContainer;
}(_InteractiveObject__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "../display/dist/InteractiveObject.js":
/*!********************************************!*\
  !*** ../display/dist/InteractiveObject.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InteractiveObject; });
/* harmony import */ var _DisplayObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayObject */ "../display/dist/DisplayObject.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var InteractiveObject = /*#__PURE__*/function (_DisplayObject) {
  _inherits(InteractiveObject, _DisplayObject);

  var _super = _createSuper(InteractiveObject);

  function InteractiveObject() {
    var _this;

    _classCallCheck(this, InteractiveObject);

    _this = _super.call(this);
    _this.doubleClickEnabled = false;
    _this.mouseEnabled = true;
    return _this;
  }

  return InteractiveObject;
}(_DisplayObject__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "../display/dist/Stage.js":
/*!********************************!*\
  !*** ../display/dist/Stage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stage; });
/* harmony import */ var _DisplayObjectContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayObjectContainer */ "../display/dist/DisplayObjectContainer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Stage = /*#__PURE__*/function (_DisplayObjectContain) {
  _inherits(Stage, _DisplayObjectContain);

  var _super = _createSuper(Stage);

  function Stage(context) {
    var _this;

    _classCallCheck(this, Stage);

    _this = _super.call(this);
    _this._context = context;
    return _this;
  }

  _createClass(Stage, [{
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(Stage.prototype), "render", this).call(this, this._context);
    }
  }, {
    key: "context",
    get: function get() {
      return this._context;
    }
  }, {
    key: "stageWidth",
    get: function get() {
      return this._context.width;
    }
  }, {
    key: "stageHeight",
    get: function get() {
      return this._context.height;
    }
  }]);

  return Stage;
}(_DisplayObjectContainer__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "../display/dist/Transform.js":
/*!************************************!*\
  !*** ../display/dist/Transform.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Transform; });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Transform = /*#__PURE__*/function () {
  function Transform(getParent) {
    _classCallCheck(this, Transform);

    this._matrix = new _e2d_geom__WEBPACK_IMPORTED_MODULE_0__["Matrix"]();
    this._colorTransform = new _e2d_geom__WEBPACK_IMPORTED_MODULE_0__["ColorTransform"]();
    this._getParent = getParent;
  }

  _createClass(Transform, [{
    key: "matrix",
    get: function get() {
      return this._matrix.clone();
    },
    set: function set(value) {
      this._matrix.copyFrom(value);
    }
  }, {
    key: "colorTransform",
    get: function get() {
      return this._colorTransform.clone();
    },
    set: function set(value) {
      this._colorTransform.copyFrom(value);
    }
  }, {
    key: "concatenatedMatrix",
    get: function get() {
      var value = new _e2d_geom__WEBPACK_IMPORTED_MODULE_0__["Matrix"]();

      var parent = this._getParent();

      if (parent) {
        var parentMatrix = parent.concatenatedMatrix;
        value.copyFrom(this._matrix);
        value.concat(parentMatrix);
      } else {
        value.copyFrom(this._matrix);
      }

      return value;
    }
  }, {
    key: "concatenatedColorTransform",
    get: function get() {
      var value = new _e2d_geom__WEBPACK_IMPORTED_MODULE_0__["ColorTransform"]();

      var parent = this._getParent();

      if (parent) {
        var parentColorTransform = parent.concatenatedColorTransform;
        value.copyFrom(this._colorTransform);
        value.concat(parentColorTransform);
      } else {
        value.copyFrom(this._colorTransform);
      }

      return value;
    }
  }]);

  return Transform;
}();



/***/ }),

/***/ "../display/dist/enums.js":
/*!********************************!*\
  !*** ../display/dist/enums.js ***!
  \********************************/
/*! exports provided: BlendMode, StageQuality */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlendMode", function() { return BlendMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageQuality", function() { return StageQuality; });
var BlendMode;

(function (BlendMode) {
  BlendMode["ADD"] = "add";
  BlendMode["ALPHA"] = "alpha";
  BlendMode["DARKEN"] = "darken";
  BlendMode["DIFFERENCE"] = "difference";
  BlendMode["ERASE"] = "erase";
  BlendMode["HARDLIGHT"] = "hardlight";
  BlendMode["INVERT"] = "invert";
  BlendMode["LAYER"] = "layer";
  BlendMode["LIGHTEN"] = "lighten";
  BlendMode["MULTIPLY"] = "multiply";
  BlendMode["NORMAL"] = "normal";
  BlendMode["OVERLAY"] = "overlay";
  BlendMode["SCREEN"] = "screen";
  BlendMode["SHADER"] = "shader";
  BlendMode["SUBTRACT"] = "subtract";
})(BlendMode || (BlendMode = {}));

var StageQuality;

(function (StageQuality) {
  StageQuality["BEST"] = "best";
  StageQuality["HIGH"] = "high";
  StageQuality["HIGH_16X16"] = "16x16";
  StageQuality["HIGH_16X16_LINEAR"] = "16x16linear";
  StageQuality["HIGH_8X8"] = "8x8";
  StageQuality["HIGH_8X8_LINEAR"] = "8x8linear";
  StageQuality["LOW"] = "low";
  StageQuality["MEDIUM"] = "medium";
})(StageQuality || (StageQuality = {}));

/***/ }),

/***/ "../display/dist/events/KeyboardEvent.js":
/*!***********************************************!*\
  !*** ../display/dist/events/KeyboardEvent.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyboardEvent; });
/* harmony import */ var _e2d_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/events */ "../events/dist/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var KeyboardEvent = /*#__PURE__*/function (_Event) {
  _inherits(KeyboardEvent, _Event);

  var _super = _createSuper(KeyboardEvent);

  function KeyboardEvent(type, cancelable, keyCode) {
    var _this;

    _classCallCheck(this, KeyboardEvent);

    _this = _super.call(this, type, cancelable);
    _this._keyCode = keyCode;
    return _this;
  }

  _createClass(KeyboardEvent, [{
    key: "clone",
    value: function clone() {
      return new KeyboardEvent(this.type, this.cancelable, this._keyCode);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "KeyboardEvent: { type: ".concat(this.type, ", cancelable: ").concat(this.cancelable, ", keyCode: ").concat(this._keyCode, " }");
    }
  }, {
    key: "keyCode",
    get: function get() {
      return this._keyCode;
    }
  }]);

  return KeyboardEvent;
}(_e2d_events__WEBPACK_IMPORTED_MODULE_0__["Event"]);



/***/ }),

/***/ "../display/dist/events/MouseEvent.js":
/*!********************************************!*\
  !*** ../display/dist/events/MouseEvent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MouseEvent; });
/* harmony import */ var _PointerEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PointerEvent */ "../display/dist/events/PointerEvent.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var MouseEvent = /*#__PURE__*/function (_PointerEvent) {
  _inherits(MouseEvent, _PointerEvent);

  var _super = _createSuper(MouseEvent);

  function MouseEvent(type, cancelable) {
    var _this;

    var stageX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var stageY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var localX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var localY = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var deltaX = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var deltaY = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var buttonDown = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;

    _classCallCheck(this, MouseEvent);

    _this = _super.call(this, type, cancelable, stageX, stageY, localX, localY);
    _this._deltaX = deltaX;
    _this._deltaY = deltaY;
    _this._buttonDown = buttonDown;
    return _this;
  }

  _createClass(MouseEvent, [{
    key: "clone",
    value: function clone() {
      return new MouseEvent(this.type, this.cancelable, this.stageX, this.stageY, this.localX, this.localY, this._deltaX, this._deltaY, this._buttonDown);
    }
  }, {
    key: "cloneWithType",
    value: function cloneWithType(type) {
      return new MouseEvent(type, this.cancelable, this.stageX, this.stageY, this.localX, this.localY, this._deltaX, this._deltaY, this._buttonDown);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "MouseEvent: { type: ".concat(this.type, ", cancelable: ").concat(this.cancelable, ", stageX: ").concat(this.stageX, ", stageY: ").concat(this.stageY, ", localX: ").concat(this.localX, ", localY: ").concat(this.localY, ", deltaX: ").concat(this._deltaX, ", deltaY: ").concat(this._deltaY, ", buttonDown: ").concat(this._buttonDown, " }");
    }
  }, {
    key: "deltaX",
    get: function get() {
      return this._deltaX;
    }
  }, {
    key: "deltaY",
    get: function get() {
      return this._deltaY;
    }
  }, {
    key: "buttonDown",
    get: function get() {
      return this._buttonDown;
    }
  }]);

  return MouseEvent;
}(_PointerEvent__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "../display/dist/events/PointerEvent.js":
/*!**********************************************!*\
  !*** ../display/dist/events/PointerEvent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PointerEvent; });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _e2d_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/events */ "../events/dist/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var PointerEvent = /*#__PURE__*/function (_Event) {
  _inherits(PointerEvent, _Event);

  var _super = _createSuper(PointerEvent);

  function PointerEvent(type, cancelable, stageX, stageY, localX, localY) {
    var _this;

    _classCallCheck(this, PointerEvent);

    _this = _super.call(this, type, cancelable);
    _this._stageX = stageX;
    _this._stageY = stageY;
    _this._localX = localX;
    _this._localY = localY;
    return _this;
  }

  _createClass(PointerEvent, [{
    key: "clone",
    value: function clone() {
      return new PointerEvent(this.type, this.cancelable, this._stageX, this._stageY, this._localX, this._localY);
    }
  }, {
    key: "cloneWithType",
    value: function cloneWithType(type) {
      return new PointerEvent(type, this.cancelable, this._stageX, this._stageY, this._localX, this._localY);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "PointerEvent: { type: ".concat(this.type, ", cancelable: ").concat(this.cancelable, ", stageX: ").concat(this._stageX, ", stageY: ").concat(this._stageY, ", localX: ").concat(this._localX, ", localY: ").concat(this._localY, " }");
    }
  }, {
    key: "stageX",
    get: function get() {
      return this._stageX;
    }
  }, {
    key: "stageY",
    get: function get() {
      return this._stageY;
    }
  }, {
    key: "localX",
    get: function get() {
      return this._localX;
    }
  }, {
    key: "localY",
    get: function get() {
      return this._localY;
    }
  }, {
    key: "localPoint",
    get: function get() {
      return new _e2d_geom__WEBPACK_IMPORTED_MODULE_0__["Point"](this.localX, this.localY);
    }
  }, {
    key: "stagePoint",
    get: function get() {
      return new _e2d_geom__WEBPACK_IMPORTED_MODULE_0__["Point"](this.stageX, this.stageY);
    }
  }]);

  return PointerEvent;
}(_e2d_events__WEBPACK_IMPORTED_MODULE_1__["Event"]);



/***/ }),

/***/ "../display/dist/events/TouchEvent.js":
/*!********************************************!*\
  !*** ../display/dist/events/TouchEvent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TouchEvent; });
/* harmony import */ var _PointerEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PointerEvent */ "../display/dist/events/PointerEvent.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var TouchEvent = /*#__PURE__*/function (_PointerEvent) {
  _inherits(TouchEvent, _PointerEvent);

  var _super = _createSuper(TouchEvent);

  function TouchEvent(type, cancelable, stageX, stageY, localX, localY, id) {
    var _this;

    _classCallCheck(this, TouchEvent);

    _this = _super.call(this, type, cancelable, stageX, stageY, localX, localY);
    _this._id = id;
    return _this;
  }

  _createClass(TouchEvent, [{
    key: "clone",
    value: function clone() {
      return new TouchEvent(this.type, this.cancelable, this.stageX, this.stageY, this.localX, this.localY, this._id);
    }
  }, {
    key: "cloneWithType",
    value: function cloneWithType(type) {
      return new TouchEvent(type, this.cancelable, this.stageX, this.stageY, this.localX, this.localY, this._id);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "TouchEvent: { type: ".concat(this.type, ", cancelable: ").concat(this.cancelable, ", stageX: ").concat(this.stageX, ", stageY: ").concat(this.stageY, ", localX: ").concat(this.localX, ", localY: ").concat(this.localY, ", id: ").concat(this.id, " }");
    }
  }, {
    key: "id",
    get: function get() {
      return this._id;
    }
  }]);

  return TouchEvent;
}(_PointerEvent__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "../display/dist/events/index.js":
/*!***************************************!*\
  !*** ../display/dist/events/index.js ***!
  \***************************************/
/*! exports provided: RENDER, RESIZE, ENTER_FRAME, ADDED_TO_STAGE, REMOVED_FROM_STAGE, TOUCH_START, TOUCH_MOVE, TOUCH_END, TOUCH_CANCEL, MOUSE_DOWN, MOUSE_MOVE, MOUSE_UP, MOUSE_LEAVE, MOUSE_WHEEL, MOUSE_OVER, MOUSE_OUT, CLICK, DOUBLE_CLICK, KEY_DOWN, KEY_UP, PointerEvent, MouseEvent, TouchEvent, KeyboardEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDER", function() { return RENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESIZE", function() { return RESIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER_FRAME", function() { return ENTER_FRAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDED_TO_STAGE", function() { return ADDED_TO_STAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVED_FROM_STAGE", function() { return REMOVED_FROM_STAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_START", function() { return TOUCH_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_MOVE", function() { return TOUCH_MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_END", function() { return TOUCH_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_CANCEL", function() { return TOUCH_CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUSE_DOWN", function() { return MOUSE_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUSE_MOVE", function() { return MOUSE_MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUSE_UP", function() { return MOUSE_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUSE_LEAVE", function() { return MOUSE_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUSE_WHEEL", function() { return MOUSE_WHEEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUSE_OVER", function() { return MOUSE_OVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUSE_OUT", function() { return MOUSE_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLICK", function() { return CLICK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOUBLE_CLICK", function() { return DOUBLE_CLICK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_DOWN", function() { return KEY_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_UP", function() { return KEY_UP; });
/* harmony import */ var _PointerEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PointerEvent */ "../display/dist/events/PointerEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointerEvent", function() { return _PointerEvent__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _MouseEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MouseEvent */ "../display/dist/events/MouseEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MouseEvent", function() { return _MouseEvent__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _TouchEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TouchEvent */ "../display/dist/events/TouchEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TouchEvent", function() { return _TouchEvent__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _KeyboardEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KeyboardEvent */ "../display/dist/events/KeyboardEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardEvent", function() { return _KeyboardEvent__WEBPACK_IMPORTED_MODULE_3__["default"]; });





var RENDER = 'render';
var RESIZE = 'resize';
var ENTER_FRAME = 'enterFrame';
var ADDED_TO_STAGE = 'addedToStage';
var REMOVED_FROM_STAGE = 'removedFromStage';
var TOUCH_START = 'touchStart';
var TOUCH_MOVE = 'touchMove';
var TOUCH_END = 'touchEnd';
var TOUCH_CANCEL = 'touchCancel';
var MOUSE_DOWN = 'mouseDown';
var MOUSE_MOVE = 'mouseMove';
var MOUSE_UP = 'mouseUp';
var MOUSE_LEAVE = 'mouseLeave';
var MOUSE_WHEEL = 'mouseWheel';
var MOUSE_OVER = 'mouseOver';
var MOUSE_OUT = 'mouseOut';
var CLICK = 'click';
var DOUBLE_CLICK = 'doubleClick';
var KEY_DOWN = 'keyDown';
var KEY_UP = 'keyUp';


/***/ }),

/***/ "../display/dist/index.js":
/*!********************************!*\
  !*** ../display/dist/index.js ***!
  \********************************/
/*! exports provided: BlendMode, StageQuality, RENDER, RESIZE, ENTER_FRAME, ADDED_TO_STAGE, REMOVED_FROM_STAGE, TOUCH_START, TOUCH_MOVE, TOUCH_END, TOUCH_CANCEL, MOUSE_DOWN, MOUSE_MOVE, MOUSE_UP, MOUSE_LEAVE, MOUSE_WHEEL, MOUSE_OVER, MOUSE_OUT, CLICK, DOUBLE_CLICK, KEY_DOWN, KEY_UP, PointerEvent, MouseEvent, TouchEvent, KeyboardEvent, DisplayObject, InteractiveObject, DisplayObjectContainer, Container, Stage, Transform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DisplayObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayObject */ "../display/dist/DisplayObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisplayObject", function() { return _DisplayObject__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _InteractiveObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InteractiveObject */ "../display/dist/InteractiveObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InteractiveObject", function() { return _InteractiveObject__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _DisplayObjectContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisplayObjectContainer */ "../display/dist/DisplayObjectContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisplayObjectContainer", function() { return _DisplayObjectContainer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Container */ "../display/dist/Container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _Container__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Stage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Stage */ "../display/dist/Stage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return _Stage__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Transform */ "../display/dist/Transform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return _Transform__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enums */ "../display/dist/enums.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlendMode", function() { return _enums__WEBPACK_IMPORTED_MODULE_6__["BlendMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StageQuality", function() { return _enums__WEBPACK_IMPORTED_MODULE_6__["StageQuality"]; });

/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events */ "../display/dist/events/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RENDER", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RESIZE", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["RESIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ENTER_FRAME", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["ENTER_FRAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADDED_TO_STAGE", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["ADDED_TO_STAGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REMOVED_FROM_STAGE", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["REMOVED_FROM_STAGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOUCH_START", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["TOUCH_START"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOUCH_MOVE", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["TOUCH_MOVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOUCH_END", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["TOUCH_END"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOUCH_CANCEL", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["TOUCH_CANCEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MOUSE_DOWN", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["MOUSE_DOWN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MOUSE_MOVE", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["MOUSE_MOVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MOUSE_UP", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["MOUSE_UP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MOUSE_LEAVE", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["MOUSE_LEAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MOUSE_WHEEL", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["MOUSE_WHEEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MOUSE_OVER", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["MOUSE_OVER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MOUSE_OUT", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["MOUSE_OUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLICK", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["CLICK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOUBLE_CLICK", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["DOUBLE_CLICK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_DOWN", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["KEY_DOWN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_UP", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["KEY_UP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointerEvent", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["PointerEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MouseEvent", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["MouseEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TouchEvent", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["TouchEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardEvent", function() { return _events__WEBPACK_IMPORTED_MODULE_7__["KeyboardEvent"]; });











/***/ }),

/***/ "../events/dist/Event.js":
/*!*******************************!*\
  !*** ../events/dist/Event.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Event; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Event = /*#__PURE__*/function () {
  function Event(type) {
    var cancelable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, Event);

    this._isCanceled = false;
    this._isCanceledNow = false;
    this._isDefaultPrevented = false;

    if (!type) {
      throw '"type" can not be null';
    }

    this._type = type;
    this._cancelable = cancelable;
  }

  _createClass(Event, [{
    key: "toString",
    value: function toString() {
      return "Event: { type: ".concat(this._type, ", cancelable: ").concat(this._cancelable, " }");
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Event(this._type, this._cancelable);
    }
  }, {
    key: "cloneWithType",
    value: function cloneWithType(type) {
      return new Event(type, this._cancelable);
    }
  }, {
    key: "preventDefault",
    value: function preventDefault() {
      this._isDefaultPrevented = true;
    }
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      if (!this._cancelable) {
        return;
      }

      this._isCanceled = true;
      this._isCanceledNow = true;
    }
  }, {
    key: "stopPropagation",
    value: function stopPropagation() {
      if (!this._cancelable) {
        return;
      }

      this._isCanceled = true;
    }
  }, {
    key: "type",
    get: function get() {
      return this._type;
    }
  }, {
    key: "cancelable",
    get: function get() {
      return this._cancelable;
    }
  }, {
    key: "target",
    get: function get() {
      if (!this._target) {
        throw '"target" can not be null';
      }

      return this._target;
    }
  }, {
    key: "isDefaultPrevented",
    get: function get() {
      return this._isDefaultPrevented;
    }
  }, {
    key: "isCanceled",
    get: function get() {
      return this._isCanceled;
    }
  }, {
    key: "isCanceledNow",
    get: function get() {
      return this._isCanceledNow;
    }
  }]);

  return Event;
}();



/***/ }),

/***/ "../events/dist/EventDispatcher.js":
/*!*****************************************!*\
  !*** ../events/dist/EventDispatcher.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventDispatcher; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventDispatcher = /*#__PURE__*/function () {
  function EventDispatcher() {
    _classCallCheck(this, EventDispatcher);
  }

  _createClass(EventDispatcher, [{
    key: "toString",
    value: function toString() {
      return 'EventDispatcher';
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, callback) {
      var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!type) {
        throw '"type" can not be null';
      }

      if (!callback) {
        throw '"callback" can not be null';
      }

      if (!this._listeners) {
        this._listeners = new Map();
      }

      var listeners = this._listeners.get(type);

      if (!listeners) {
        listeners = [];

        this._listeners.set(type, listeners);
      }

      var contains = listeners.some(function (listener) {
        return listener.callback === callback;
      });
      if (contains) return;
      var listener = {
        callback: callback,
        priority: priority
      };
      var index = listeners.findIndex(function (value) {
        return priority > value.priority;
      });

      if (index === -1) {
        listeners.push(listener);
      } else {
        listeners.splice(index, 0, listener);
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, callback) {
      if (!type) {
        throw '"type" can not be null';
      }

      if (!callback) {
        throw '"callback" can not be null';
      }

      if (!this._listeners) {
        return;
      }

      var listeners = this._listeners.get(type);

      if (!listeners) {
        return;
      }

      var index = listeners.findIndex(function (listener) {
        return listener.callback === callback;
      });

      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  }, {
    key: "hasEventListener",
    value: function hasEventListener(type) {
      if (!type) {
        throw '"type" can not be null';
      }

      if (!this._listeners) {
        return false;
      }

      var listeners = this._listeners.get(type);

      if (!listeners) {
        return false;
      }

      return listeners.length > 0;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      if (!event) {
        throw '"type" can not be null';
      }

      event._target = this;

      if (!this._listeners) {
        return false;
      }

      var listeners = this._listeners.get(event.type);

      if (!listeners) {
        return false;
      }

      listeners.some(function (listener) {
        listener.callback(event);
        return event.isCanceledNow;
      });
      return listeners.length > 0;
    }
  }]);

  return EventDispatcher;
}();



/***/ }),

/***/ "../events/dist/index.js":
/*!*******************************!*\
  !*** ../events/dist/index.js ***!
  \*******************************/
/*! exports provided: Event, EventDispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Event */ "../events/dist/Event.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return _Event__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventDispatcher */ "../events/dist/EventDispatcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDispatcher", function() { return _EventDispatcher__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "../geom/dist/ColorTransform.js":
/*!**************************************!*\
  !*** ../geom/dist/ColorTransform.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorTransform; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ColorTransform = /*#__PURE__*/function () {
  function ColorTransform() {
    var redMultiplier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var greenMultiplier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var blueMultiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var alphaMultiplier = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var redOffset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var greenOffset = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var blueOffset = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var alphaOffset = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;

    _classCallCheck(this, ColorTransform);

    this.redMultiplier = redMultiplier;
    this.greenMultiplier = greenMultiplier;
    this.blueMultiplier = blueMultiplier;
    this.alphaMultiplier = alphaMultiplier;
    this.redOffset = redOffset;
    this.greenOffset = greenOffset;
    this.blueOffset = blueOffset;
    this.alphaOffset = alphaOffset;
  }

  _createClass(ColorTransform, [{
    key: "toString",
    value: function toString() {
      return "{ redMultiplier: ".concat(this.redMultiplier, ", greenMultiplier: ").concat(this.greenMultiplier, ", blueMultiplier: ").concat(this.blueMultiplier, ", alphaMultiplier: ").concat(this.alphaMultiplier, ", redOffset: ").concat(this.redOffset, ", greenOffset: ").concat(this.greenOffset, ", blueOffset: ").concat(this.blueOffset, ", alphaOffset: ").concat(this.alphaOffset, " }");
    }
  }, {
    key: "clone",
    value: function clone() {
      return new ColorTransform(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset);
    }
  }, {
    key: "concat",
    value: function concat(ct) {
      this.redMultiplier *= ct.redMultiplier;
      this.greenMultiplier *= ct.greenMultiplier;
      this.blueMultiplier *= ct.blueMultiplier;
      this.alphaMultiplier *= ct.alphaMultiplier;
      this.redOffset = ct.redMultiplier * this.redOffset + ct.redOffset;
      this.greenOffset = ct.greenMultiplier * this.greenOffset + ct.greenOffset;
      this.blueOffset = ct.blueMultiplier * this.blueOffset + ct.blueOffset;
      this.alphaOffset = ct.alphaMultiplier * this.alphaOffset + ct.alphaOffset;
    }
  }, {
    key: "copyFrom",
    value: function copyFrom(ct) {
      this.redMultiplier = ct.redMultiplier;
      this.greenMultiplier = ct.greenMultiplier;
      this.blueMultiplier = ct.blueMultiplier;
      this.alphaMultiplier = ct.alphaMultiplier;
      this.redOffset = ct.redOffset;
      this.greenOffset = ct.greenOffset;
      this.blueOffset = ct.blueOffset;
      this.alphaOffset = ct.alphaOffset;
    }
  }, {
    key: "combine",
    value: function combine(ct) {
      this.redMultiplier *= ct.redMultiplier;
      this.greenMultiplier *= ct.greenMultiplier;
      this.blueMultiplier *= ct.blueMultiplier;
      this.alphaMultiplier *= ct.alphaMultiplier;
      this.redOffset += ct.redOffset;
      this.greenOffset += ct.greenOffset;
      this.blueOffset += ct.blueOffset;
      this.alphaOffset += ct.alphaOffset;
    }
  }, {
    key: "identity",
    value: function identity() {
      this.redMultiplier = 1;
      this.greenMultiplier = 1;
      this.blueMultiplier = 1;
      this.alphaMultiplier = 1;
      this.redOffset = 0;
      this.greenOffset = 0;
      this.blueOffset = 0;
      this.alphaOffset = 0;
    }
  }, {
    key: "equals",
    value: function equals(ct) {
      var skipAlphaMultiplier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return ct != null && this.redMultiplier === ct.redMultiplier && this.greenMultiplier === ct.greenMultiplier && this.blueMultiplier === ct.blueMultiplier && (skipAlphaMultiplier || this.alphaMultiplier === ct.alphaMultiplier) && this.redOffset === ct.redOffset && this.greenOffset === ct.greenOffset && this.blueOffset === ct.blueOffset && this.alphaOffset === ct.alphaOffset;
    }
  }, {
    key: "isDefault",
    value: function isDefault() {
      return this.redMultiplier === 1 && this.greenMultiplier === 1 && this.blueMultiplier === 1 && this.alphaMultiplier === 1 && this.redOffset === 0 && this.greenOffset === 0 && this.blueOffset === 0 && this.alphaOffset === 0;
    }
  }, {
    key: "color",
    get: function get() {
      return this.redOffset << 16 | this.greenOffset << 8 | this.blueOffset;
    },
    set: function set(value) {
      this.redOffset = value >> 16 & 0xff;
      this.greenOffset = value >> 8 & 0xff;
      this.blueOffset = value & 0xff;
      this.redMultiplier = 0;
      this.greenMultiplier = 0;
      this.blueMultiplier = 0;
    }
  }]);

  return ColorTransform;
}();



/***/ }),

/***/ "../geom/dist/Matrix.js":
/*!******************************!*\
  !*** ../geom/dist/Matrix.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Matrix; });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "../geom/dist/Point.js");
/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rectangle */ "../geom/dist/Rectangle.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var lt = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"]();
var lb = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"]();
var rt = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"]();
var rb = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"]();

var Matrix = /*#__PURE__*/function () {
  function Matrix() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var tx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var ty = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    _classCallCheck(this, Matrix);

    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
  }

  _createClass(Matrix, [{
    key: "toString",
    value: function toString() {
      return "{ a: ".concat(this.a, ", b: ").concat(this.b, ", c: ").concat(this.c, ", d: ").concat(this.d, ", tx: ").concat(this.tx, ", ty: ").concat(this.ty, " }");
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty);
    }
  }, {
    key: "concat",
    value: function concat(matrix) {
      var a = this.a * matrix.a + this.b * matrix.c;
      var b = this.a * matrix.b + this.b * matrix.d;
      var c = this.c * matrix.a + this.d * matrix.c;
      var d = this.c * matrix.b + this.d * matrix.d;
      var tx = this.tx * matrix.a + this.ty * matrix.c + matrix.tx;
      var ty = this.tx * matrix.b + this.ty * matrix.d + matrix.ty;
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.tx = tx;
      this.ty = ty;
    }
  }, {
    key: "copyFrom",
    value: function copyFrom(matrix) {
      this.a = matrix.a;
      this.b = matrix.b;
      this.c = matrix.c;
      this.d = matrix.d;
      this.tx = matrix.tx;
      this.ty = matrix.ty;
    }
  }, {
    key: "createBox",
    value: function createBox(scaleX, scaleY) {
      var rotation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var x = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var y = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

      if (rotation !== 0) {
        var cos = Math.cos(rotation);
        var sin = Math.sin(rotation);
        this.a = cos * scaleX;
        this.b = sin * scaleX;
        this.c = -sin * scaleY;
        this.d = cos * scaleY;
      } else {
        this.a = scaleX;
        this.b = 0;
        this.c = 0;
        this.d = scaleY;
      }

      this.tx = x;
      this.ty = y;
    }
  }, {
    key: "createGradientBox",
    value: function createGradientBox(width, height) {
      var rotation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var x = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var y = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      this.a = width / 1638.4;
      this.d = height / 1638.4;

      if (rotation !== 0) {
        var cos = Math.cos(rotation);
        var sin = Math.sin(rotation);
        this.b = sin * this.d;
        this.c = -sin * this.a;
        this.a *= cos;
        this.d *= cos;
      } else {
        this.b = 0;
        this.c = 0;
      }

      this.tx = x + width / 2;
      this.ty = y + height / 2;
    }
  }, {
    key: "deltaTransformPoint",
    value: function deltaTransformPoint(point) {
      return new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](point.x * this.a + point.y * this.c, point.x * this.b + point.y * this.d);
    }
  }, {
    key: "equals",
    value: function equals(source) {
      return source !== null && this.tx === source.tx && this.ty === source.ty && this.a === source.a && this.b === source.b && this.c === source.c && this.d === source.d;
    }
  }, {
    key: "identity",
    value: function identity() {
      this.a = 1;
      this.b = 0;
      this.c = 0;
      this.d = 1;
      this.tx = 0;
      this.ty = 0;
    }
  }, {
    key: "invert",
    value: function invert() {
      var determinant = this.determinant;

      if (determinant === 0) {
        this.a = 0;
        this.b = 0;
        this.c = 0;
        this.d = 0;
        this.tx = -this.tx;
        this.ty = -this.ty;
      } else {
        determinant = 1.0 / determinant;
        var d = this.d * determinant;
        var a = this.a * determinant;
        this.a = d;
        this.b *= -determinant;
        this.c *= -determinant;
        this.d = a;
        var tx = -this.a * this.tx - this.c * this.ty;
        var ty = -this.b * this.tx - this.d * this.ty;
        this.tx = tx;
        this.ty = ty;
      }
    }
  }, {
    key: "rotate",
    value: function rotate(angle) {
      if (angle === 0) {
        return;
      }

      var cos = Math.cos(angle);
      var sin = Math.sin(angle);
      var a = this.a * cos - this.b * sin;
      var b = this.a * sin + this.b * cos;
      var c = this.c * cos - this.d * sin;
      var d = this.c * sin + this.d * cos;
      var tx = this.tx * cos - this.ty * sin;
      var ty = this.tx * sin + this.ty * cos;
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.tx = tx;
      this.ty = ty;
    }
  }, {
    key: "scale",
    value: function scale(x, y) {
      this.a *= x;
      this.b *= y;
      this.c *= x;
      this.d *= y;
      this.tx *= x;
      this.ty *= y;
    }
  }, {
    key: "setRotation",
    value: function setRotation(angle) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var x = Math.cos(angle) * scale;
      var y = Math.sin(angle) * scale;
      this.a = x;
      this.c = y;
      this.b = -y;
      this.d = x;
    }
  }, {
    key: "setTo",
    value: function setTo(a, b, c, d, tx, ty) {
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.tx = tx;
      this.ty = ty;
    }
  }, {
    key: "translate",
    value: function translate(x, y) {
      this.tx += x;
      this.ty += y;
    }
  }, {
    key: "transformPoint",
    value: function transformPoint(point) {
      var result = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"]();
      this.transformPointTo(point, result);
      return result;
    }
  }, {
    key: "transformPointTo",
    value: function transformPointTo(source, target) {
      var x = source.x,
          y = source.y;
      target.x = x * this.a + y * this.c + this.tx;
      target.y = x * this.b + y * this.d + this.ty;
    }
  }, {
    key: "transformX",
    value: function transformX(x, y) {
      return x * this.a + y * this.c + this.tx;
    }
  }, {
    key: "transformY",
    value: function transformY(x, y) {
      return x * this.b + y * this.d + this.ty;
    }
  }, {
    key: "transformInversePoint",
    value: function transformInversePoint(point) {
      var result = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"]();
      this.transformInversePointTo(point, result);
      return result;
    }
  }, {
    key: "transformInversePointTo",
    value: function transformInversePointTo(source, target) {
      var determinant = this.determinant;

      if (determinant === 0) {
        target.x = -this.tx;
        target.y = -this.ty;
      } else {
        determinant = 1 / determinant;
        var x = source.x,
            y = source.y;
        target.x = determinant * (this.c * (this.ty - y) + this.d * (x - this.tx));
        target.y = determinant * (this.a * (y - this.ty) + this.b * (this.tx - x));
      }
    }
  }, {
    key: "transformInverseX",
    value: function transformInverseX(x, y) {
      var determinant = this.determinant;

      if (determinant === 0) {
        return -this.tx;
      }

      determinant = 1 / determinant;
      return determinant * (this.c * (this.ty - y) + this.d * (x - this.tx));
    }
  }, {
    key: "transformInverseY",
    value: function transformInverseY(x, y) {
      var determinant = this.determinant;

      if (determinant === 0) {
        return -this.ty;
      }

      determinant = 1 / determinant;
      return determinant * (this.a * (y - this.ty) + this.b * (this.tx - x));
    }
  }, {
    key: "transformRect",
    value: function transformRect(rect) {
      var result = new _Rectangle__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this.transformRectTo(rect, result);
      return result;
    }
  }, {
    key: "transformRectTo",
    value: function transformRectTo(source, target) {
      var top = source.top,
          bottom = source.bottom,
          left = source.left,
          right = source.right;
      lt.setTo(left, top);
      lb.setTo(left, bottom);
      rt.setTo(right, top);
      rb.setTo(right, bottom);
      this.transformPointTo(lt, lt);
      this.transformPointTo(lb, lb);
      this.transformPointTo(rt, rt);
      this.transformPointTo(rb, rb);
      var minX = Math.min(lt.x, lb.x, rt.x, rb.x);
      var maxX = Math.max(lt.x, lb.x, rt.x, rb.x);
      var minY = Math.min(lt.y, lb.y, rt.y, rb.y);
      var maxY = Math.max(lt.y, lb.y, rt.y, rb.y);
      target.x = minX;
      target.y = minY;
      target.width = maxX - minX;
      target.height = maxY - minY;
    }
  }, {
    key: "determinant",
    get: function get() {
      return this.a * this.d - this.b * this.c;
    }
  }, {
    key: "position",
    get: function get() {
      return new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](this.tx, this.ty);
    },
    set: function set(value) {
      this.tx = value.x;
      this.ty = value.y;
    }
  }, {
    key: "ortX",
    get: function get() {
      return new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](this.a, this.b);
    },
    set: function set(value) {
      this.a = value.x;
      this.b = value.y;
    }
  }, {
    key: "ortY",
    get: function get() {
      return new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](this.c, this.d);
    },
    set: function set(value) {
      this.c = value.x;
      this.d = value.y;
    }
  }]);

  return Matrix;
}();



/***/ }),

/***/ "../geom/dist/Point.js":
/*!*****************************!*\
  !*** ../geom/dist/Point.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Point = /*#__PURE__*/function () {
  function Point() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  _createClass(Point, [{
    key: "toString",
    value: function toString() {
      return "{ x: ".concat(this.x, ", y: ").concat(this.y, " }");
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Point(this.x, this.y);
    }
  }, {
    key: "equals",
    value: function equals(point) {
      return this.x === point.x && this.y === point.y;
    }
  }, {
    key: "setEmpty",
    value: function setEmpty() {
      this.x = 0;
      this.y = 0;
    }
  }, {
    key: "setTo",
    value: function setTo(x, y) {
      this.x = x;
      this.y = y;
    }
  }, {
    key: "copyFrom",
    value: function copyFrom(point) {
      this.x = point.x;
      this.y = point.y;
    }
  }, {
    key: "add",
    value: function add(point) {
      return new Point(point.x + this.x, point.y + this.y);
    }
  }, {
    key: "subtract",
    value: function subtract(point) {
      return new Point(this.x - point.x, this.y - point.y);
    }
  }, {
    key: "normalize",
    value: function normalize(thickness) {
      var length = this.length;

      if (length > 0) {
        length = thickness / length;
        this.x *= length;
        this.y *= length;
      }
    }
  }, {
    key: "offset",
    value: function offset(dx, dy) {
      this.x += dx;
      this.y += dy;
    }
  }, {
    key: "length",
    get: function get() {
      var dx = this.x * this.x;
      var dy = this.y * this.y;
      return Math.sqrt(dx + dy);
    }
  }, {
    key: "angle",
    get: function get() {
      return Math.atan2(this.y, this.x);
    }
  }], [{
    key: "distance",
    value: function distance(point1, point2) {
      var dx = point1.x - point2.x;
      var dy = point1.y - point2.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }, {
    key: "interpolate",
    value: function interpolate(point1, point2, value) {
      return new Point(point2.x + value * (point1.x - point2.x), point2.y + value * (point1.y - point2.y));
    }
  }, {
    key: "polar",
    value: function polar(length, angle) {
      return new Point(length * Math.cos(angle), length * Math.sin(angle));
    }
  }]);

  return Point;
}();



/***/ }),

/***/ "../geom/dist/Rectangle.js":
/*!*********************************!*\
  !*** ../geom/dist/Rectangle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rectangle; });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "../geom/dist/Point.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Rectangle = /*#__PURE__*/function () {
  function Rectangle() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, Rectangle);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  _createClass(Rectangle, [{
    key: "toString",
    value: function toString() {
      return "{ x: ".concat(this.x, ", y: ").concat(this.y, ", width: ").concat(this.width, ", height: ").concat(this.height, " }");
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Rectangle(this.x, this.y, this.width, this.height);
    }
  }, {
    key: "contains",
    value: function contains(x, y) {
      return x >= this.x && y >= this.y && x < this.x + this.width && y < this.y + this.height;
    }
  }, {
    key: "containsPoint",
    value: function containsPoint(point) {
      return this.contains(point.x, point.y);
    }
  }, {
    key: "containsRect",
    value: function containsRect(rect) {
      if (rect.width <= 0 || rect.height <= 0) {
        return rect.x > this.x && rect.y > this.y && rect.x + rect.width < this.x + this.width && rect.y + rect.height < this.y + this.height;
      }

      return rect.x >= this.x && rect.y >= this.y && rect.x + rect.width <= this.x + this.width && rect.y + rect.height <= this.y + this.height;
    }
  }, {
    key: "copyFrom",
    value: function copyFrom(rect) {
      this.x = rect.x;
      this.y = rect.y;
      this.width = rect.width;
      this.height = rect.height;
    }
  }, {
    key: "equalsRect",
    value: function equalsRect(rect) {
      if (rect === this) return true;
      if (rect === null) return false;
      return this.equals(rect.x, rect.y, rect.width, rect.height);
    }
  }, {
    key: "equals",
    value: function equals(x, y, width, height) {
      return this.x === x && this.y === y && this.width === width && this.height === height;
    }
  }, {
    key: "inflate",
    value: function inflate(dx, dy) {
      this.x -= dx;
      this.y -= dy;
      this.width += dx * 2;
      this.height += dy * 2;
    }
  }, {
    key: "inflatePoint",
    value: function inflatePoint(point) {
      this.inflate(point.x, point.y);
    }
  }, {
    key: "round",
    value: function round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.width = Math.round(this.width);
      this.height = Math.round(this.height);
    }
  }, {
    key: "intersection",
    value: function intersection(rect) {
      var x0 = this.x < rect.x ? rect.x : this.x;
      var x1 = this.right > rect.right ? rect.right : this.right;
      if (x1 <= x0) return new Rectangle();
      var y0 = this.y < rect.y ? rect.y : this.y;
      var y1 = this.bottom > rect.bottom ? rect.bottom : this.bottom;
      if (y1 <= y0) return new Rectangle();
      return new Rectangle(x0, y0, x1 - x0, y1 - y0);
    }
  }, {
    key: "intersects",
    value: function intersects(rect) {
      var x0 = this.x < rect.x ? rect.x : this.x;
      var x1 = this.right > rect.right ? rect.right : this.right;
      if (x1 <= x0) return false;
      var y0 = this.y < rect.y ? rect.y : this.y;
      var y1 = this.bottom > rect.bottom ? rect.bottom : this.bottom;
      return y1 > y0;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.width <= 0 || this.height <= 0;
    }
  }, {
    key: "offset",
    value: function offset(dx, dy) {
      this.x += dx;
      this.y += dy;
    }
  }, {
    key: "offsetPoint",
    value: function offsetPoint(p) {
      this.x += p.x;
      this.y += p.y;
    }
  }, {
    key: "setEmpty",
    value: function setEmpty() {
      this.x = 0;
      this.y = 0;
      this.width = 0;
      this.height = 0;
    }
  }, {
    key: "setTo",
    value: function setTo() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  }, {
    key: "union",
    value: function union(rect) {
      if (this.width === 0 || this.height === 0) {
        return rect.clone();
      }

      if (rect.width === 0 || rect.height === 0) {
        return this.clone();
      }

      var x0 = this.x > rect.x ? rect.x : this.x;
      var x1 = this.right < rect.right ? rect.right : this.right;
      var y0 = this.y > rect.y ? rect.y : this.y;
      var y1 = this.bottom < rect.bottom ? rect.bottom : this.bottom;
      return new Rectangle(x0, y0, x1 - x0, y1 - y0);
    }
  }, {
    key: "contract",
    value: function contract(x, y, width, height) {
      if (this.width === 0 && this.height === 0) return;
      var offsetX = 0;
      var offsetY = 0;
      var offsetRight = 0;
      var offsetBottom = 0;
      if (this.x < x) offsetX = x - this.x;
      if (this.y < y) offsetY = y - this.y;
      if (this.right > x + width) offsetRight = x + width - this.right;
      if (this.bottom > y + height) offsetBottom = y + height - this.bottom;
      this.x += offsetX;
      this.y += offsetY;
      this.width += offsetRight - offsetX;
      this.height += offsetBottom - offsetY;
    }
  }, {
    key: "expand",
    value: function expand(x, y, width, height) {
      if (this.width === 0 && this.height === 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        return;
      }

      var right = this.right,
          bottom = this.bottom;

      if (this.x > x) {
        this.x = x;
        this.width = right - x;
      }

      if (this.y > y) {
        this.y = y;
        this.height = bottom - y;
      }

      if (right < x + width) {
        this.width = x + width - this.x;
      }

      if (bottom < y + height) {
        this.height = y + height - this.y;
      }
    }
  }, {
    key: "extend",
    value: function extend(px, py) {
      if (px < this.x) {
        this.width += this.x - px;
        this.x = px;
      }

      if (py < this.y) {
        this.height += this.y - py;
        this.y = py;
      }

      if (px > this.x + this.width) {
        this.width = px - this.x;
      }

      if (py > this.y + this.height) {
        this.height = py - this.y;
      }
    }
  }, {
    key: "left",
    get: function get() {
      return this.x;
    },
    set: function set(value) {
      this.width -= value - this.x;
      this.x = value;
    }
  }, {
    key: "right",
    get: function get() {
      return this.x + this.width;
    },
    set: function set(value) {
      this.width = value - this.x;
    }
  }, {
    key: "bottom",
    get: function get() {
      return this.y + this.height;
    },
    set: function set(value) {
      this.height = value - this.y;
    }
  }, {
    key: "top",
    get: function get() {
      return this.y;
    },
    set: function set(value) {
      this.height -= value - this.y;
      this.y = value;
    }
  }, {
    key: "topLeft",
    get: function get() {
      return new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](this.x, this.y);
    },
    set: function set(value) {
      this.x = value.x;
      this.y = value.y;
    }
  }, {
    key: "bottomRight",
    get: function get() {
      return new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](this.x + this.width, this.y + this.height);
    },
    set: function set(value) {
      this.width = value.x - this.x;
      this.height = value.y - this.y;
    }
  }]);

  return Rectangle;
}();



/***/ }),

/***/ "../geom/dist/index.js":
/*!*****************************!*\
  !*** ../geom/dist/index.js ***!
  \*****************************/
/*! exports provided: TO_RADIAN, TO_DEGREE, Point, Rectangle, Matrix, ColorTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TO_RADIAN", function() { return TO_RADIAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TO_DEGREE", function() { return TO_DEGREE; });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "../geom/dist/Point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return _Point__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rectangle */ "../geom/dist/Rectangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _Rectangle__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Matrix */ "../geom/dist/Matrix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return _Matrix__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ColorTransform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColorTransform */ "../geom/dist/ColorTransform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorTransform", function() { return _ColorTransform__WEBPACK_IMPORTED_MODULE_3__["default"]; });





var TO_RADIAN = Math.PI / 180;
var TO_DEGREE = 180 / Math.PI;


/***/ }),

/***/ "../render-canvas/dist/CanvasRenderingContext.js":
/*!*******************************************************!*\
  !*** ../render-canvas/dist/CanvasRenderingContext.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CanvasRenderingContext; });
/* harmony import */ var _e2d_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/render */ "../render/dist/index.js");
/* harmony import */ var _e2d_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/system */ "../system/dist/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var pixelRatio = _e2d_system__WEBPACK_IMPORTED_MODULE_1__["Screen"].pixelRatio;

var CanvasRenderingContext = /*#__PURE__*/function () {
  function CanvasRenderingContext() {
    _classCallCheck(this, CanvasRenderingContext);

    this._canvas = document.createElement('canvas');
    this._context = this._canvas.getContext('2d');
    this.width = 400;
    this.height = 300;
  }

  _createClass(CanvasRenderingContext, [{
    key: "beginPath",
    value: function beginPath() {
      this._context.beginPath();
    }
  }, {
    key: "closePath",
    value: function closePath() {
      this._context.closePath();
    }
  }, {
    key: "save",
    value: function save() {
      this._context.save();
    }
  }, {
    key: "restore",
    value: function restore() {
      this._context.restore();
    }
  }, {
    key: "setTransform",
    value: function setTransform(a, b, c, d, tx, ty) {
      this._context.setTransform(a * pixelRatio, b * pixelRatio, c * pixelRatio, d * pixelRatio, tx * pixelRatio, ty * pixelRatio);
    }
  }, {
    key: "moveTo",
    value: function moveTo(x, y) {
      this._context.moveTo(x, y);
    }
  }, {
    key: "lineTo",
    value: function lineTo(x, y) {
      this._context.lineTo(x, y);
    }
  }, {
    key: "rect",
    value: function rect(x, y, width, height) {
      this._context.rect(x, y, width, height);
    }
  }, {
    key: "bezierCurveTo",
    value: function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
      this._context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    }
  }, {
    key: "quadraticCurveTo",
    value: function quadraticCurveTo(cpx, cpy, x, y) {
      this._context.quadraticCurveTo(cpx, cpy, x, y);
    }
  }, {
    key: "fill",
    value: function fill(pattern, style) {
      this._context.fillStyle = this.formatPattern(pattern);
      this._context.globalAlpha = style.alpha;

      this._context.fill();
    }
  }, {
    key: "stroke",
    value: function stroke(pattern, style) {
      this._context.strokeStyle = this.formatPattern(pattern);
      this._context.lineWidth = style.thikness;
      this._context.lineCap = style.cap;
      this._context.lineJoin = style.join;
      this._context.miterLimit = style.miterLimit;
      this._context.globalAlpha = style.alpha;

      this._context.stroke();
    }
  }, {
    key: "formatPattern",
    value: function formatPattern(pattern) {
      if (pattern instanceof _e2d_render__WEBPACK_IMPORTED_MODULE_0__["ColorPattern"]) {
        return CanvasRenderingContext.formatColor(pattern);
      }

      if (pattern instanceof _e2d_render__WEBPACK_IMPORTED_MODULE_0__["GradientPattern"]) {
        var gradient;

        if (pattern instanceof _e2d_render__WEBPACK_IMPORTED_MODULE_0__["LinearGradientPattern"]) {
          var x0 = pattern.x0,
              y0 = pattern.y0,
              x1 = pattern.x1,
              y1 = pattern.y1;
          gradient = this._context.createLinearGradient(x0, y0, x1, y1);
        }

        if (pattern instanceof _e2d_render__WEBPACK_IMPORTED_MODULE_0__["RadialGradientPattern"]) {
          var _x = pattern.x0,
              _y = pattern.y0,
              r0 = pattern.r0,
              _x2 = pattern.x1,
              _y2 = pattern.y1,
              r1 = pattern.r1;
          gradient = this._context.createRadialGradient(_x, _y, r0, _x2, _y2, r1);
        }

        if (gradient) {
          var colors = pattern.colors,
              offsets = pattern.offsets;

          for (var i = 0; i < colors.length; i++) {
            gradient.addColorStop(offsets[i], CanvasRenderingContext.formatColor(colors[i]));
          }

          return gradient;
        }
      } else if (pattern instanceof _e2d_render__WEBPACK_IMPORTED_MODULE_0__["ImagePattern"]) {
        var image = pattern.image,
            repeat = pattern.repeat;

        if (image) {
          var repetition = repeat ? 'repeat' : 'no-repeat';

          var canvasPattern = this._context.createPattern(image, repetition);

          if (canvasPattern) {
            return canvasPattern;
          }
        }
      }

      return '';
    }
  }, {
    key: "clip",
    value: function clip() {
      this._context.clip();
    }
  }, {
    key: "element",
    get: function get() {
      return this._canvas;
    }
  }, {
    key: "width",
    get: function get() {
      return this._canvas.width / pixelRatio;
    },
    set: function set(value) {
      var canvasValue = value * pixelRatio;

      if (this._canvas.width !== canvasValue) {
        this._canvas.width = canvasValue;
        this._canvas.style.width = "".concat(value, "px");
      }
    }
  }, {
    key: "height",
    get: function get() {
      return this._canvas.height / pixelRatio;
    },
    set: function set(value) {
      var canvasValue = value * pixelRatio;

      if (this._canvas.height !== canvasValue) {
        this._canvas.height = canvasValue;
        this._canvas.style.height = "".concat(value, "px");
      }
    }
  }], [{
    key: "formatColor",
    value: function formatColor(pattern) {
      var r = pattern.r,
          g = pattern.g,
          b = pattern.b,
          a = pattern.a;

      if (pattern.a <= 0) {
        return '';
      }

      if (pattern.a < 0xff) {
        return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a / 0xff, ")");
      }

      return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
    }
  }]);

  return CanvasRenderingContext;
}();



/***/ }),

/***/ "../render-canvas/dist/index.js":
/*!**************************************!*\
  !*** ../render-canvas/dist/index.js ***!
  \**************************************/
/*! exports provided: CanvasRenderingContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CanvasRenderingContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasRenderingContext */ "../render-canvas/dist/CanvasRenderingContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasRenderingContext", function() { return _CanvasRenderingContext__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "../render/dist/ColorPattern.js":
/*!**************************************!*\
  !*** ../render/dist/ColorPattern.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorPattern; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColorPattern = function ColorPattern() {
  _classCallCheck(this, ColorPattern);

  this.a = 0;
  this.r = 0;
  this.g = 0;
  this.b = 0;
};



/***/ }),

/***/ "../render/dist/GradientPattern.js":
/*!*****************************************!*\
  !*** ../render/dist/GradientPattern.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GradientPattern; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GradientPattern = function GradientPattern() {
  _classCallCheck(this, GradientPattern);

  this.colors = [];
  this.offsets = [];
};



/***/ }),

/***/ "../render/dist/ImagePattern.js":
/*!**************************************!*\
  !*** ../render/dist/ImagePattern.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImagePattern; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImagePattern = function ImagePattern() {
  _classCallCheck(this, ImagePattern);

  this.image = null;
  this.repeat = true;
  this.smooth = true;
  this.a = 1;
  this.b = 0;
  this.c = 0;
  this.d = 1;
  this.tx = 0;
  this.ty = 0;
};



/***/ }),

/***/ "../render/dist/LinearGradientPattern.js":
/*!***********************************************!*\
  !*** ../render/dist/LinearGradientPattern.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LinearGradientPattern; });
/* harmony import */ var _GradientPattern__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradientPattern */ "../render/dist/GradientPattern.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var LinearGradientPattern = /*#__PURE__*/function (_GradientPattern) {
  _inherits(LinearGradientPattern, _GradientPattern);

  var _super = _createSuper(LinearGradientPattern);

  function LinearGradientPattern() {
    var _this;

    _classCallCheck(this, LinearGradientPattern);

    _this = _super.apply(this, arguments);
    _this.x0 = 0;
    _this.y0 = 0;
    _this.x1 = 0;
    _this.y1 = 0;
    return _this;
  }

  return LinearGradientPattern;
}(_GradientPattern__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "../render/dist/RadialGradientPattern.js":
/*!***********************************************!*\
  !*** ../render/dist/RadialGradientPattern.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RadialGradientPattern; });
/* harmony import */ var _GradientPattern__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradientPattern */ "../render/dist/GradientPattern.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var RadialGradientPattern = /*#__PURE__*/function (_GradientPattern) {
  _inherits(RadialGradientPattern, _GradientPattern);

  var _super = _createSuper(RadialGradientPattern);

  function RadialGradientPattern() {
    var _this;

    _classCallCheck(this, RadialGradientPattern);

    _this = _super.apply(this, arguments);
    _this.x0 = 0;
    _this.y0 = 0;
    _this.r0 = 0;
    _this.x1 = 0;
    _this.y1 = 0;
    _this.r1 = 0;
    return _this;
  }

  return RadialGradientPattern;
}(_GradientPattern__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "../render/dist/index.js":
/*!*******************************!*\
  !*** ../render/dist/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorPattern__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorPattern */ "../render/dist/ColorPattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPattern", function() { return _ColorPattern__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ImagePattern__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImagePattern */ "../render/dist/ImagePattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImagePattern", function() { return _ImagePattern__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _GradientPattern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradientPattern */ "../render/dist/GradientPattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GradientPattern", function() { return _GradientPattern__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _RadialGradientPattern__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RadialGradientPattern */ "../render/dist/RadialGradientPattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadialGradientPattern", function() { return _RadialGradientPattern__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _LinearGradientPattern__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinearGradientPattern */ "../render/dist/LinearGradientPattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinearGradientPattern", function() { return _LinearGradientPattern__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interfaces */ "../render/dist/interfaces.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_interfaces__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _interfaces__WEBPACK_IMPORTED_MODULE_5__) if(["ColorPattern","ImagePattern","GradientPattern","RadialGradientPattern","LinearGradientPattern","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _interfaces__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "../render/dist/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_6__) if(["ColorPattern","ImagePattern","GradientPattern","RadialGradientPattern","LinearGradientPattern","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_6__[key]; }) }(__WEBPACK_IMPORT_KEY__));









/***/ }),

/***/ "../render/dist/interfaces.js":
/*!************************************!*\
  !*** ../render/dist/interfaces.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../render/dist/types.js":
/*!*******************************!*\
  !*** ../render/dist/types.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../shape/dist/Graphics.js":
/*!*********************************!*\
  !*** ../shape/dist/Graphics.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Graphics; });
/* harmony import */ var _GraphicsPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphicsPath */ "../shape/dist/GraphicsPath.js");
/* harmony import */ var _GraphicsSolidFill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphicsSolidFill */ "../shape/dist/GraphicsSolidFill.js");
/* harmony import */ var _GraphicsBitmapFill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GraphicsBitmapFill */ "../shape/dist/GraphicsBitmapFill.js");
/* harmony import */ var _GraphicsGradientFill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GraphicsGradientFill */ "../shape/dist/GraphicsGradientFill.js");
/* harmony import */ var _GraphicsEndFill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GraphicsEndFill */ "../shape/dist/GraphicsEndFill.js");
/* harmony import */ var _GraphicsStroke__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GraphicsStroke */ "../shape/dist/GraphicsStroke.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enums */ "../shape/dist/enums.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! . */ "../shape/dist/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var Graphics = /*#__PURE__*/function () {
  function Graphics() {
    _classCallCheck(this, Graphics);

    this._path = new _GraphicsPath__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._data = [this._path];
  }

  _createClass(Graphics, [{
    key: "beginFill",
    value: function beginFill() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var data = new _GraphicsSolidFill__WEBPACK_IMPORTED_MODULE_1__["default"](color, alpha);
      this.addGraphicsStyle(data);
    }
  }, {
    key: "beginBitmapFill",
    value: function beginBitmapFill(bitmap, matrix) {
      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var smooth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var data = new _GraphicsBitmapFill__WEBPACK_IMPORTED_MODULE_2__["default"](bitmap, matrix, repeat, smooth);
      this.addGraphicsStyle(data);
    }
  }, {
    key: "beginGradientFill",
    value: function beginGradientFill(type, colors, alphas, ratios, matrix) {
      var spreadMethod = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _enums__WEBPACK_IMPORTED_MODULE_6__["SpreadMethod"].REPEAT;
      var interpolationMethod = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : _enums__WEBPACK_IMPORTED_MODULE_6__["InterpolationMethod"].RGB;
      var focalPointRatio = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var data = new _GraphicsGradientFill__WEBPACK_IMPORTED_MODULE_3__["default"](type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio);
      this.addGraphicsStyle(data);
    }
  }, {
    key: "lineStyle",
    value: function lineStyle() {
      var thickness = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var alpha = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var pixelHinting = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var scaleMode = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _enums__WEBPACK_IMPORTED_MODULE_6__["LineScaleMode"].NONE;
      var caps = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _enums__WEBPACK_IMPORTED_MODULE_6__["CapsStyle"].ROUND;
      var joints = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : _enums__WEBPACK_IMPORTED_MODULE_6__["JointStyle"].ROUND;
      var miterLimit = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 3;
      var fill = new _GraphicsSolidFill__WEBPACK_IMPORTED_MODULE_1__["default"](color, alpha);
      var data = new _GraphicsStroke__WEBPACK_IMPORTED_MODULE_5__["default"](thickness, pixelHinting, scaleMode, caps, joints, miterLimit, fill);
      this.addGraphicsStyle(data);
      this._stroke = data;
    }
  }, {
    key: "lineGradientStyle",
    value: function lineGradientStyle() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _enums__WEBPACK_IMPORTED_MODULE_6__["GradientType"].LINEAR;
      var colors = arguments.length > 1 ? arguments[1] : undefined;
      var alphas = arguments.length > 2 ? arguments[2] : undefined;
      var ratios = arguments.length > 3 ? arguments[3] : undefined;
      var matrix = arguments.length > 4 ? arguments[4] : undefined;
      var spreadMethod = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _enums__WEBPACK_IMPORTED_MODULE_6__["SpreadMethod"].PAD;
      var interpolationMethod = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : _enums__WEBPACK_IMPORTED_MODULE_6__["InterpolationMethod"].RGB;
      var focalPointRatio = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var fill = new _GraphicsGradientFill__WEBPACK_IMPORTED_MODULE_3__["default"](type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio);

      if (this._stroke) {
        this._stroke.fill = fill;
      }
    }
  }, {
    key: "lineBitmapStyle",
    value: function lineBitmapStyle(bitmap, matrix) {
      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var smooth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var fill = new _GraphicsBitmapFill__WEBPACK_IMPORTED_MODULE_2__["default"](bitmap, matrix, repeat, smooth);

      if (this._stroke) {
        this._stroke.fill = fill;
      }
    }
  }, {
    key: "drawPath",
    value: function drawPath(commands, data) {
      var winding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _enums__WEBPACK_IMPORTED_MODULE_6__["GraphicsPathWinding"].EVEN_ODD;
      var path = new _GraphicsPath__WEBPACK_IMPORTED_MODULE_0__["default"](commands, data, winding);

      this._data.push(path);

      this.beginPath();
    }
  }, {
    key: "drawTriangles",
    value: function drawTriangles(vertices, indices, uvtData) {
      var culling = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _enums__WEBPACK_IMPORTED_MODULE_6__["TriangleCulling"].NONE;
      var path = new ___WEBPACK_IMPORTED_MODULE_7__["GraphicsTrianglePath"](vertices, indices, uvtData, culling);

      this._data.push(path);

      this.beginPath();
    }
  }, {
    key: "drawRoundRect",
    value: function drawRoundRect(x, y, width, height) {
      var ellipseWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var ellipseHeight = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      this.beginPath();
      var path = this._path;
      var w = ellipseWidth;
      var h = ellipseHeight;
      var k = 0.5522848;
      var ox = w / 2 * k;
      var oy = h / 2 * k;
      var xe = x + w;
      var ye = y + h;
      var xm = x + w / 2;
      var ym = y + h / 2;
      var dx = width - w;
      var dy = height - h;
      path.moveTo(x, ym);
      path.cubicCurveTo(x, ym - oy, xm - ox, y, xm, y);
      path.lineTo(xm + dx, y);
      path.cubicCurveTo(xm + ox + dx, y, xe + dx, ym - oy, xe + dx, ym);
      path.lineTo(xe + dx, ym + dy);
      path.cubicCurveTo(xe + dx, ym + oy + dy, xm + ox + dx, ye + dy, xm + dx, ye + dy);
      path.lineTo(xm, ye + dy);
      path.cubicCurveTo(xm - ox, ye + dy, x, ym + oy + dy, x, ym + dy);
      this.beginPath();
    }
  }, {
    key: "drawRect",
    value: function drawRect(x, y, width, height) {
      this.beginPath();
      var path = this._path;
      path.moveTo(x, y);
      path.lineTo(x + width, y);
      path.lineTo(x + width, y + height);
      path.lineTo(x, y + height);
      path.lineTo(x, y);
      this.beginPath();
    }
  }, {
    key: "drawCircle",
    value: function drawCircle(x, y, radius) {
      var size = radius * 2;
      this.drawEllipse(x - radius, y - radius, size, size);
    }
  }, {
    key: "drawEllipse",
    value: function drawEllipse(x, y, width, height) {
      this.beginPath();
      var path = this._path;
      var k = 0.5522848;
      var ox = width / 2 * k;
      var oy = height / 2 * k;
      var xe = x + width;
      var ye = y + height;
      var xm = x + width / 2;
      var ym = y + height / 2;
      path.moveTo(x, ym);
      path.cubicCurveTo(x, ym - oy, xm - ox, y, xm, y);
      path.cubicCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
      path.cubicCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
      path.cubicCurveTo(xm - ox, ye, x, ym + oy, x, ym);
      this.beginPath();
    }
  }, {
    key: "drawGraphicsData",
    value: function drawGraphicsData(graphicsData) {
      var _this$_data;

      (_this$_data = this._data).push.apply(_this$_data, _toConsumableArray(graphicsData));

      this.beginPath();
    }
  }, {
    key: "endFill",
    value: function endFill() {
      var data = new _GraphicsEndFill__WEBPACK_IMPORTED_MODULE_4__["default"]();

      this._data.push(data);

      this._stroke = undefined;
      this.beginPath();
    }
  }, {
    key: "clear",
    value: function clear() {
      this._path = new _GraphicsPath__WEBPACK_IMPORTED_MODULE_0__["default"]();
      this._data = [this._path];
      this._stroke = undefined;
    }
  }, {
    key: "copyFrom",
    value: function copyFrom(sourceGraphics) {
      this._data = sourceGraphics.readGraphicsData();
      this._stroke = undefined;
      this.beginPath();
    }
  }, {
    key: "readGraphicsData",
    value: function readGraphicsData() {
      return this._data;
    }
  }, {
    key: "addGraphicsStyle",
    value: function addGraphicsStyle(data) {
      if (!this._path.commands.length) {
        var index = this._data.indexOf(this._path);

        this._data.splice(index, 0, data);
      } else {
        this._data.push(data);
      }
    }
  }, {
    key: "beginPath",
    value: function beginPath() {
      if (this._path.commands.length) {
        this._path = new _GraphicsPath__WEBPACK_IMPORTED_MODULE_0__["default"]();

        this._data.push(this._path);
      }
    }
  }]);

  return Graphics;
}();



/***/ }),

/***/ "../shape/dist/GraphicsBitmapFill.js":
/*!*******************************************!*\
  !*** ../shape/dist/GraphicsBitmapFill.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphicsBitmapFill; });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var GraphicsBitmapFill = function GraphicsBitmapFill(bitmapData, matrix) {
  var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var smooth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  _classCallCheck(this, GraphicsBitmapFill);

  this.bitmapData = bitmapData;
  this.matrix = matrix !== null && matrix !== void 0 ? matrix : new _e2d_geom__WEBPACK_IMPORTED_MODULE_0__["Matrix"]();
  this.repeat = repeat;
  this.smooth = smooth;
};



/***/ }),

/***/ "../shape/dist/GraphicsEndFill.js":
/*!****************************************!*\
  !*** ../shape/dist/GraphicsEndFill.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphicsEndFill; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GraphicsEndFill = function GraphicsEndFill() {
  _classCallCheck(this, GraphicsEndFill);
};



/***/ }),

/***/ "../shape/dist/GraphicsGradientFill.js":
/*!*********************************************!*\
  !*** ../shape/dist/GraphicsGradientFill.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphicsGradientFill; });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "../shape/dist/enums.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var GraphicsGradientFill = function GraphicsGradientFill() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _enums__WEBPACK_IMPORTED_MODULE_1__["GradientType"].LINEAR;
  var colors = arguments.length > 1 ? arguments[1] : undefined;
  var alphas = arguments.length > 2 ? arguments[2] : undefined;
  var ratios = arguments.length > 3 ? arguments[3] : undefined;
  var matrix = arguments.length > 4 ? arguments[4] : undefined;
  var spreadMethod = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _enums__WEBPACK_IMPORTED_MODULE_1__["SpreadMethod"].PAD;
  var interpolationMethod = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : _enums__WEBPACK_IMPORTED_MODULE_1__["InterpolationMethod"].RGB;
  var focalPointRatio = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;

  _classCallCheck(this, GraphicsGradientFill);

  this.type = type;
  this.colors = colors !== null && colors !== void 0 ? colors : [];
  this.alphas = alphas !== null && alphas !== void 0 ? alphas : [];
  this.ratios = ratios !== null && ratios !== void 0 ? ratios : [];
  this.matrix = matrix !== null && matrix !== void 0 ? matrix : new _e2d_geom__WEBPACK_IMPORTED_MODULE_0__["Matrix"]();
  this.spreadMethod = spreadMethod;
  this.interpolationMethod = interpolationMethod;
  this.focalPointRatio = focalPointRatio;
};



/***/ }),

/***/ "../shape/dist/GraphicsPath.js":
/*!*************************************!*\
  !*** ../shape/dist/GraphicsPath.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphicsPath; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "../shape/dist/enums.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GraphicsPath = /*#__PURE__*/function () {
  function GraphicsPath(commands, data) {
    var winding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _enums__WEBPACK_IMPORTED_MODULE_0__["GraphicsPathWinding"].EVEN_ODD;

    _classCallCheck(this, GraphicsPath);

    this.commands = commands !== null && commands !== void 0 ? commands : [];
    this.data = data !== null && data !== void 0 ? data : [];
    this.winding = winding;
  }

  _createClass(GraphicsPath, [{
    key: "moveTo",
    value: function moveTo(x, y) {
      this.commands.push(_enums__WEBPACK_IMPORTED_MODULE_0__["GraphicsPathCommand"].MOVE_TO);
      this.data.push(x);
      this.data.push(y);
    }
  }, {
    key: "lineTo",
    value: function lineTo(x, y) {
      this.commands.push(_enums__WEBPACK_IMPORTED_MODULE_0__["GraphicsPathCommand"].LINE_TO);
      this.data.push(x);
      this.data.push(y);
    }
  }, {
    key: "curveTo",
    value: function curveTo(controlX, controlY, anchorX, anchorY) {
      this.commands.push(_enums__WEBPACK_IMPORTED_MODULE_0__["GraphicsPathCommand"].CURVE_TO);
      this.data.push(controlX);
      this.data.push(controlY);
      this.data.push(anchorX);
      this.data.push(anchorY);
    }
  }, {
    key: "cubicCurveTo",
    value: function cubicCurveTo(controlX1, controlY1, controlX2, controlY2, anchorX, anchorY) {
      this.commands.push(_enums__WEBPACK_IMPORTED_MODULE_0__["GraphicsPathCommand"].CUBIC_CURVE_TO);
      this.data.push(controlX1);
      this.data.push(controlY1);
      this.data.push(controlX2);
      this.data.push(controlY2);
      this.data.push(anchorX);
      this.data.push(anchorY);
    }
  }]);

  return GraphicsPath;
}();



/***/ }),

/***/ "../shape/dist/GraphicsRenderer.js":
/*!*****************************************!*\
  !*** ../shape/dist/GraphicsRenderer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphicsRenderer; });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _e2d_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/render */ "../render/dist/index.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums */ "../shape/dist/enums.js");
/* harmony import */ var _GraphicsGradientFill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GraphicsGradientFill */ "../shape/dist/GraphicsGradientFill.js");
/* harmony import */ var _GraphicsStroke__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GraphicsStroke */ "../shape/dist/GraphicsStroke.js");
/* harmony import */ var _GraphicsSolidFill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GraphicsSolidFill */ "../shape/dist/GraphicsSolidFill.js");
/* harmony import */ var _GraphicsBitmapFill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GraphicsBitmapFill */ "../shape/dist/GraphicsBitmapFill.js");
/* harmony import */ var _GraphicsPath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GraphicsPath */ "../shape/dist/GraphicsPath.js");
/* harmony import */ var _GraphicsEndFill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GraphicsEndFill */ "../shape/dist/GraphicsEndFill.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }











var GraphicsRenderer = /*#__PURE__*/function () {
  function GraphicsRenderer() {
    _classCallCheck(this, GraphicsRenderer);
  }

  _createClass(GraphicsRenderer, null, [{
    key: "createColorPattern",
    value: function createColorPattern(color, alpha, ct) {
      var pattern = new _e2d_render__WEBPACK_IMPORTED_MODULE_1__["ColorPattern"]();
      var r = color >> 16 & 0xff;
      var g = color >> 8 & 0xff;
      var b = color & 0xff;
      var a = alpha * 0xff;

      if (!ct.isDefault()) {
        pattern.r = r * ct.redMultiplier + ct.redOffset & 0xff;
        pattern.g = g * ct.greenMultiplier + ct.greenOffset & 0xff;
        pattern.b = b * ct.blueMultiplier + ct.blueOffset & 0xff;
        pattern.a = a * ct.alphaMultiplier + ct.alphaOffset & 0xff;
        return pattern;
      }

      pattern.r = r;
      pattern.g = g;
      pattern.b = b;
      pattern.a = a;
      return pattern;
    }
  }, {
    key: "createGradientPattern",
    value: function createGradientPattern(context, fill, colorTransform) {
      var pattern;
      var matrix = fill.matrix;

      if (!matrix) {
        matrix = this.tempMatrix;
      }

      switch (fill.type) {
        case _enums__WEBPACK_IMPORTED_MODULE_2__["GradientType"].RADIAL:
          this.tempPoint1.setTo(1638.4, 0);
          matrix.transformPointTo(this.tempPoint1, this.tempPoint1);
          var radialGradient = new _e2d_render__WEBPACK_IMPORTED_MODULE_1__["RadialGradientPattern"]();
          radialGradient.x0 = matrix.tx;
          radialGradient.y0 = matrix.ty;
          radialGradient.r0 = 0;
          radialGradient.x1 = matrix.tx;
          radialGradient.y1 = matrix.ty;
          radialGradient.r1 = Math.abs(this.tempPoint1.x - matrix.tx) / 2;
          pattern = radialGradient;
          break;

        case _enums__WEBPACK_IMPORTED_MODULE_2__["GradientType"].LINEAR:
          this.tempPoint1.setTo(-819.2, 0);
          this.tempPoint2.setTo(819.2, 0);
          matrix.transformPointTo(this.tempPoint1, this.tempPoint1);
          matrix.transformPointTo(this.tempPoint2, this.tempPoint2);
          var linearGradient = new _e2d_render__WEBPACK_IMPORTED_MODULE_1__["LinearGradientPattern"]();
          linearGradient.x0 = this.tempPoint1.x;
          linearGradient.y0 = this.tempPoint1.y;
          linearGradient.x1 = this.tempPoint2.x;
          linearGradient.y1 = this.tempPoint2.y;
          pattern = linearGradient;
          break;

        default:
          return pattern;
      }

      var colors = fill.colors,
          alphas = fill.alphas,
          ratios = fill.ratios;

      for (var i = 0; i < colors.length; i++) {
        var rgb = colors[i];
        var alpha = alphas[i];
        var color = this.createColorPattern(rgb, alpha, colorTransform);
        var ratio = ratios[i] / 0xff;
        if (ratio < 0) ratio = 0;else if (ratio > 1) ratio = 1;
        pattern.offsets.push(ratio);
        pattern.colors.push(color);
      }

      return pattern;
    }
  }, {
    key: "createFillPattern",
    value: function createFillPattern(context, fill, colorTransform) {
      if (fill instanceof _GraphicsSolidFill__WEBPACK_IMPORTED_MODULE_5__["default"]) {
        return this.createColorPattern(fill.color, fill.alpha, colorTransform);
      }

      if (fill instanceof _GraphicsGradientFill__WEBPACK_IMPORTED_MODULE_3__["default"]) {
        return this.createGradientPattern(context, fill, colorTransform);
      }

      if (fill instanceof _GraphicsBitmapFill__WEBPACK_IMPORTED_MODULE_6__["default"]) {
        return this.createImagePattern(context, fill);
      }

      return undefined;
    }
  }, {
    key: "createImagePattern",
    value: function createImagePattern(context, fill) {
      if (fill.bitmapData) {
        var bitmapData = fill.bitmapData,
            matrix = fill.matrix,
            repeat = fill.repeat,
            smooth = fill.smooth;
        var a = matrix.a,
            b = matrix.b,
            c = matrix.c,
            d = matrix.d,
            tx = matrix.tx,
            ty = matrix.ty;
        var pattern = new _e2d_render__WEBPACK_IMPORTED_MODULE_1__["ImagePattern"]();
        pattern.image = bitmapData;
        pattern.smooth = smooth;
        pattern.repeat = repeat;
        pattern.a = a;
        pattern.b = b;
        pattern.c = c;
        pattern.d = d;
        pattern.tx = tx;
        pattern.ty = ty;
        return pattern;
      }

      return undefined;
    }
  }, {
    key: "render",
    value: function render(context, matrix, colorTransform, graphics) {
      var _this = this;

      var graphicsData = graphics.readGraphicsData();

      if (!graphicsData.length) {
        return;
      }

      context.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
      var stroke = null;
      var fill = null;
      graphicsData.forEach(function (item) {
        if (item instanceof _GraphicsStroke__WEBPACK_IMPORTED_MODULE_4__["default"]) {
          stroke = item;
        } else if (item instanceof _GraphicsSolidFill__WEBPACK_IMPORTED_MODULE_5__["default"] || item instanceof _GraphicsGradientFill__WEBPACK_IMPORTED_MODULE_3__["default"] || item instanceof _GraphicsBitmapFill__WEBPACK_IMPORTED_MODULE_6__["default"]) {
          fill = item;
        } else if (item instanceof _GraphicsEndFill__WEBPACK_IMPORTED_MODULE_8__["default"]) {
          fill = null;
        } else if (item instanceof _GraphicsPath__WEBPACK_IMPORTED_MODULE_7__["default"]) {
          var data = item.data,
              commands = item.commands;
          var index = 0;
          var moved = false;
          var moveX = 0;
          var moveY = 0;
          context.beginPath();
          commands.forEach(function (command) {
            switch (command) {
              case _enums__WEBPACK_IMPORTED_MODULE_2__["GraphicsPathCommand"].MOVE_TO:
                if (fill && moved) {
                  context.lineTo(moveX, moveY);
                }

                moved = true;
                moveX = data[index++];
                moveY = data[index++];
                context.moveTo(moveX, moveY);
                break;

              case _enums__WEBPACK_IMPORTED_MODULE_2__["GraphicsPathCommand"].LINE_TO:
                context.lineTo(data[index++], data[index++]);
                break;

              case _enums__WEBPACK_IMPORTED_MODULE_2__["GraphicsPathCommand"].CURVE_TO:
                context.quadraticCurveTo(data[index++], data[index++], data[index++], data[index++]);
                break;

              case _enums__WEBPACK_IMPORTED_MODULE_2__["GraphicsPathCommand"].WIDE_MOVE_TO:
                context.moveTo(data[index++], data[index++]);
                break;

              case _enums__WEBPACK_IMPORTED_MODULE_2__["GraphicsPathCommand"].WIDE_LINE_TO:
                context.lineTo(data[index++], data[index++]);
                break;

              case _enums__WEBPACK_IMPORTED_MODULE_2__["GraphicsPathCommand"].CUBIC_CURVE_TO:
                context.bezierCurveTo(data[index++], data[index++], data[index++], data[index++], data[index++], data[index++]);
                break;

              default:
                break;
            }
          });

          if (fill && moved) {
            context.lineTo(moveX, moveY);
          }

          if (fill) {
            var fillPattern = _this.createFillPattern(context, fill, colorTransform);

            if (fillPattern) {
              var fillStyle = {
                alpha: 1
              };
              context.fill(fillPattern, fillStyle);
            }
          }

          if (stroke != null && stroke.thickness > 0) {
            var strokePattern = _this.createFillPattern(context, stroke.fill, colorTransform);

            if (strokePattern) {
              var strokeStyle = {
                thikness: stroke.thickness,
                join: stroke.joints,
                cap: stroke.caps,
                miterLimit: stroke.miterLimit,
                alpha: 1
              };
              context.stroke(strokePattern, strokeStyle);
            }
          }
        }
      });
    }
  }]);

  return GraphicsRenderer;
}();


GraphicsRenderer.tempMatrix = new _e2d_geom__WEBPACK_IMPORTED_MODULE_0__["Matrix"]();
GraphicsRenderer.tempPoint1 = new _e2d_geom__WEBPACK_IMPORTED_MODULE_0__["Point"]();
GraphicsRenderer.tempPoint2 = new _e2d_geom__WEBPACK_IMPORTED_MODULE_0__["Point"]();

/***/ }),

/***/ "../shape/dist/GraphicsSolidFill.js":
/*!******************************************!*\
  !*** ../shape/dist/GraphicsSolidFill.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphicsSolidFill; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GraphicsSolidFill = function GraphicsSolidFill() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  _classCallCheck(this, GraphicsSolidFill);

  this.color = color;
  this.alpha = alpha;
};



/***/ }),

/***/ "../shape/dist/GraphicsStroke.js":
/*!***************************************!*\
  !*** ../shape/dist/GraphicsStroke.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphicsStroke; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "../shape/dist/enums.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var GraphicsStroke = function GraphicsStroke() {
  var thickness = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var pixelHinting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var scaleMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _enums__WEBPACK_IMPORTED_MODULE_0__["LineScaleMode"].NONE;
  var caps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _enums__WEBPACK_IMPORTED_MODULE_0__["CapsStyle"].BUTT;
  var joints = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _enums__WEBPACK_IMPORTED_MODULE_0__["JointStyle"].ROUND;
  var miterLimit = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 3;
  var fill = arguments.length > 6 ? arguments[6] : undefined;

  _classCallCheck(this, GraphicsStroke);

  this.thickness = thickness;
  this.pixelHinting = pixelHinting;
  this.scaleMode = scaleMode;
  this.caps = caps;
  this.joints = joints;
  this.miterLimit = miterLimit;
  this.fill = fill;
};



/***/ }),

/***/ "../shape/dist/GraphicsTrianglePath.js":
/*!*********************************************!*\
  !*** ../shape/dist/GraphicsTrianglePath.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphicsTrianglePath; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "../shape/dist/enums.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var GraphicsTrianglePath = function GraphicsTrianglePath(vertices, indices, uvtData) {
  var culling = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _enums__WEBPACK_IMPORTED_MODULE_0__["TriangleCulling"].NONE;

  _classCallCheck(this, GraphicsTrianglePath);

  this.indices = indices !== null && indices !== void 0 ? indices : [];
  this.uvtData = uvtData !== null && uvtData !== void 0 ? uvtData : [];
  this.vertices = vertices !== null && vertices !== void 0 ? vertices : [];
  this.culling = culling;
};



/***/ }),

/***/ "../shape/dist/Shape.js":
/*!******************************!*\
  !*** ../shape/dist/Shape.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shape; });
/* harmony import */ var _e2d_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/display */ "../display/dist/index.js");
/* harmony import */ var _Graphics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Graphics */ "../shape/dist/Graphics.js");
/* harmony import */ var _GraphicsRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GraphicsRenderer */ "../shape/dist/GraphicsRenderer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Shape = /*#__PURE__*/function (_DisplayObject) {
  _inherits(Shape, _DisplayObject);

  var _super = _createSuper(Shape);

  function Shape() {
    var _this;

    _classCallCheck(this, Shape);

    _this = _super.call(this);
    _this.graphics = new _Graphics__WEBPACK_IMPORTED_MODULE_1__["default"]();
    return _this;
  }

  _createClass(Shape, [{
    key: "renderContent",
    value: function renderContent(context) {
      _GraphicsRenderer__WEBPACK_IMPORTED_MODULE_2__["default"].render(context, this.transform.concatenatedMatrix, this.transform.concatenatedColorTransform, this.graphics);
    }
  }]);

  return Shape;
}(_e2d_display__WEBPACK_IMPORTED_MODULE_0__["DisplayObject"]);



/***/ }),

/***/ "../shape/dist/Sprite.js":
/*!*******************************!*\
  !*** ../shape/dist/Sprite.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sprite; });
/* harmony import */ var _e2d_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/display */ "../display/dist/index.js");
/* harmony import */ var _Graphics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Graphics */ "../shape/dist/Graphics.js");
/* harmony import */ var _GraphicsRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GraphicsRenderer */ "../shape/dist/GraphicsRenderer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Sprite = /*#__PURE__*/function (_Container) {
  _inherits(Sprite, _Container);

  var _super = _createSuper(Sprite);

  function Sprite() {
    var _this;

    _classCallCheck(this, Sprite);

    _this = _super.call(this);
    _this.graphics = new _Graphics__WEBPACK_IMPORTED_MODULE_1__["default"]();
    return _this;
  }

  _createClass(Sprite, [{
    key: "renderContent",
    value: function renderContent(context) {
      _GraphicsRenderer__WEBPACK_IMPORTED_MODULE_2__["default"].render(context, this.transform.concatenatedMatrix, this.transform.concatenatedColorTransform, this.graphics);

      _get(_getPrototypeOf(Sprite.prototype), "renderContent", this).call(this, context);
    }
  }]);

  return Sprite;
}(_e2d_display__WEBPACK_IMPORTED_MODULE_0__["Container"]);



/***/ }),

/***/ "../shape/dist/enums.js":
/*!******************************!*\
  !*** ../shape/dist/enums.js ***!
  \******************************/
/*! exports provided: CapsStyle, JointStyle, GraphicsPathWinding, GraphicsPathCommand, GradientType, InterpolationMethod, SpreadMethod, LineScaleMode, TriangleCulling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapsStyle", function() { return CapsStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JointStyle", function() { return JointStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicsPathWinding", function() { return GraphicsPathWinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicsPathCommand", function() { return GraphicsPathCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientType", function() { return GradientType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterpolationMethod", function() { return InterpolationMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpreadMethod", function() { return SpreadMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineScaleMode", function() { return LineScaleMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangleCulling", function() { return TriangleCulling; });
var CapsStyle;

(function (CapsStyle) {
  CapsStyle["BUTT"] = "butt";
  CapsStyle["ROUND"] = "round";
  CapsStyle["SQUARE"] = "square";
})(CapsStyle || (CapsStyle = {}));

var JointStyle;

(function (JointStyle) {
  JointStyle["BEVEL"] = "bevel";
  JointStyle["MITER"] = "miter";
  JointStyle["ROUND"] = "round";
})(JointStyle || (JointStyle = {}));

var GraphicsPathWinding;

(function (GraphicsPathWinding) {
  GraphicsPathWinding["EVEN_ODD"] = "evenOdd";
  GraphicsPathWinding["NON_ZERO"] = "nonZero";
})(GraphicsPathWinding || (GraphicsPathWinding = {}));

var GraphicsPathCommand;

(function (GraphicsPathCommand) {
  GraphicsPathCommand[GraphicsPathCommand["NO_OP"] = 0] = "NO_OP";
  GraphicsPathCommand[GraphicsPathCommand["MOVE_TO"] = 1] = "MOVE_TO";
  GraphicsPathCommand[GraphicsPathCommand["LINE_TO"] = 2] = "LINE_TO";
  GraphicsPathCommand[GraphicsPathCommand["CURVE_TO"] = 3] = "CURVE_TO";
  GraphicsPathCommand[GraphicsPathCommand["WIDE_MOVE_TO"] = 4] = "WIDE_MOVE_TO";
  GraphicsPathCommand[GraphicsPathCommand["WIDE_LINE_TO"] = 5] = "WIDE_LINE_TO";
  GraphicsPathCommand[GraphicsPathCommand["CUBIC_CURVE_TO"] = 6] = "CUBIC_CURVE_TO";
})(GraphicsPathCommand || (GraphicsPathCommand = {}));

var GradientType;

(function (GradientType) {
  GradientType["LINEAR"] = "linear";
  GradientType["RADIAL"] = "radial";
})(GradientType || (GradientType = {}));

var InterpolationMethod;

(function (InterpolationMethod) {
  InterpolationMethod["LINEAR_RGB"] = "linearRgb";
  InterpolationMethod["RGB"] = "rgb";
})(InterpolationMethod || (InterpolationMethod = {}));

var SpreadMethod;

(function (SpreadMethod) {
  SpreadMethod["PAD"] = "pad";
  SpreadMethod["REFLECT"] = "reflect";
  SpreadMethod["REPEAT"] = "repeat";
})(SpreadMethod || (SpreadMethod = {}));

var LineScaleMode;

(function (LineScaleMode) {
  LineScaleMode["NORMAL"] = "normal";
  LineScaleMode["NONE"] = "none";
  LineScaleMode["VERTICAL"] = "vertical";
  LineScaleMode["HORIZONTAL"] = "horizontal";
})(LineScaleMode || (LineScaleMode = {}));

var TriangleCulling;

(function (TriangleCulling) {
  TriangleCulling["NEGATIVE"] = "negative";
  TriangleCulling["NONE"] = "none";
  TriangleCulling["POSITIVE"] = "positive";
})(TriangleCulling || (TriangleCulling = {}));

/***/ }),

/***/ "../shape/dist/index.js":
/*!******************************!*\
  !*** ../shape/dist/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Graphics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Graphics */ "../shape/dist/Graphics.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Graphics", function() { return _Graphics__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _GraphicsPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphicsPath */ "../shape/dist/GraphicsPath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphicsPath", function() { return _GraphicsPath__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _GraphicsBitmapFill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GraphicsBitmapFill */ "../shape/dist/GraphicsBitmapFill.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphicsBitmapFill", function() { return _GraphicsBitmapFill__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _GraphicsEndFill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GraphicsEndFill */ "../shape/dist/GraphicsEndFill.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphicsEndFill", function() { return _GraphicsEndFill__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _GraphicsGradientFill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GraphicsGradientFill */ "../shape/dist/GraphicsGradientFill.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphicsGradientFill", function() { return _GraphicsGradientFill__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _GraphicsSolidFill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GraphicsSolidFill */ "../shape/dist/GraphicsSolidFill.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphicsSolidFill", function() { return _GraphicsSolidFill__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _GraphicsStroke__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GraphicsStroke */ "../shape/dist/GraphicsStroke.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphicsStroke", function() { return _GraphicsStroke__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _GraphicsTrianglePath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GraphicsTrianglePath */ "../shape/dist/GraphicsTrianglePath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphicsTrianglePath", function() { return _GraphicsTrianglePath__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Shape */ "../shape/dist/Shape.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shape", function() { return _Shape__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Sprite */ "../shape/dist/Sprite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return _Sprite__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interfaces */ "../shape/dist/interfaces.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_interfaces__WEBPACK_IMPORTED_MODULE_10__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _interfaces__WEBPACK_IMPORTED_MODULE_10__) if(["Graphics","GraphicsBitmapFill","GraphicsEndFill","GraphicsGradientFill","GraphicsPath","GraphicsSolidFill","GraphicsStroke","GraphicsTrianglePath","Sprite","Shape","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _interfaces__WEBPACK_IMPORTED_MODULE_10__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./enums */ "../shape/dist/enums.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CapsStyle", function() { return _enums__WEBPACK_IMPORTED_MODULE_11__["CapsStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JointStyle", function() { return _enums__WEBPACK_IMPORTED_MODULE_11__["JointStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphicsPathWinding", function() { return _enums__WEBPACK_IMPORTED_MODULE_11__["GraphicsPathWinding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphicsPathCommand", function() { return _enums__WEBPACK_IMPORTED_MODULE_11__["GraphicsPathCommand"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GradientType", function() { return _enums__WEBPACK_IMPORTED_MODULE_11__["GradientType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InterpolationMethod", function() { return _enums__WEBPACK_IMPORTED_MODULE_11__["InterpolationMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpreadMethod", function() { return _enums__WEBPACK_IMPORTED_MODULE_11__["SpreadMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineScaleMode", function() { return _enums__WEBPACK_IMPORTED_MODULE_11__["LineScaleMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TriangleCulling", function() { return _enums__WEBPACK_IMPORTED_MODULE_11__["TriangleCulling"]; });















/***/ }),

/***/ "../shape/dist/interfaces.js":
/*!***********************************!*\
  !*** ../shape/dist/interfaces.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../system/dist/Keyboard.js":
/*!**********************************!*\
  !*** ../system/dist/Keyboard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Keyboard; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Keyboard = /*#__PURE__*/function () {
  function Keyboard() {
    _classCallCheck(this, Keyboard);
  }

  _createClass(Keyboard, null, [{
    key: "getKeyCode",
    value: function getKeyCode(e) {
      return e.which != null ? e.which : e.keyCode;
    }
  }]);

  return Keyboard;
}();



/***/ }),

/***/ "../system/dist/Mouse.js":
/*!*******************************!*\
  !*** ../system/dist/Mouse.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mouse; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Mouse = /*#__PURE__*/function () {
  function Mouse() {
    _classCallCheck(this, Mouse);
  }

  _createClass(Mouse, null, [{
    key: "hide",
    value: function hide() {
      this.visible = false;
    }
  }, {
    key: "show",
    value: function show() {
      this.visible = true;
    }
  }, {
    key: "updateCursor",
    value: function updateCursor(element, pointer) {
      var cursor = this.visible ? pointer ? 'pointer' : 'default' : 'none';
      element.style.cursor = cursor;
    }
  }]);

  return Mouse;
}();


Mouse.visible = true;

/***/ }),

/***/ "../system/dist/Screen.js":
/*!********************************!*\
  !*** ../system/dist/Screen.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Screen; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Screen = /*#__PURE__*/function () {
  function Screen() {
    _classCallCheck(this, Screen);
  }

  _createClass(Screen, null, [{
    key: "pixelRatio",
    get: function get() {
      if (!this._pixelRatio) {
        var screen = window.screen;

        if (screen.systemXDPI && screen.logicalXDPI && screen.systemXDPI > screen.logicalXDPI) {
          this._pixelRatio = screen.systemXDPI / screen.logicalXDPI;
        } else if (window.devicePixelRatio) {
          this._pixelRatio = window.devicePixelRatio;
        }

        if (!this._pixelRatio) {
          this._pixelRatio = 1;
        }
      }

      return this._pixelRatio;
    }
  }, {
    key: "width",
    get: function get() {
      return Math.max(document.documentElement.clientWidth, window.innerWidth);
    }
  }, {
    key: "height",
    get: function get() {
      return Math.max(document.documentElement.clientHeight, window.innerHeight);
    }
  }]);

  return Screen;
}();


Screen._pixelRatio = 0;

/***/ }),

/***/ "../system/dist/index.js":
/*!*******************************!*\
  !*** ../system/dist/index.js ***!
  \*******************************/
/*! exports provided: Keyboard, Screen, Mouse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Keyboard */ "../system/dist/Keyboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return _Keyboard__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Screen */ "../system/dist/Screen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return _Screen__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Mouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mouse */ "../system/dist/Mouse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mouse", function() { return _Mouse__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _e2d_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/display */ "../display/dist/index.js");
/* harmony import */ var _e2d_shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @e2d/shape */ "../shape/dist/index.js");
/* harmony import */ var _e2d_bitmap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @e2d/bitmap */ "../bitmap/dist/index.js");
/* harmony import */ var _e2d_render_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @e2d/render-canvas */ "../render-canvas/dist/index.js");





class Main {
    static main() {
        const point = new _e2d_geom__WEBPACK_IMPORTED_MODULE_0__["Point"](1, 2);
        console.log(point.length);
        console.log(_e2d_geom__WEBPACK_IMPORTED_MODULE_0__["Point"].polar(1, 2));
        const context = new _e2d_render_canvas__WEBPACK_IMPORTED_MODULE_4__["CanvasRenderingContext"]();
        context.width = 400;
        context.height = 300;
        document.body.appendChild(context.element);
        const stage = new _e2d_display__WEBPACK_IMPORTED_MODULE_1__["Stage"](context);
        const sprite = new _e2d_shape__WEBPACK_IMPORTED_MODULE_2__["Sprite"]();
        sprite.graphics.lineStyle(1, 0);
        sprite.graphics.beginFill(0x00ff00, 0.5);
        sprite.graphics.drawCircle(100, 100, 50);
        sprite.graphics.beginFill(0x00ff00, 0.5);
        sprite.graphics.drawRect(100, 100, 50, 20);
        sprite.rotation = 10;
        stage.addChild(sprite);
        const shape = new _e2d_shape__WEBPACK_IMPORTED_MODULE_2__["Shape"]();
        shape.graphics.beginFill(0xff0000, 0.5);
        shape.graphics.drawRect(0, 0, 100, 100);
        shape.x = 100;
        shape.y = 100;
        sprite.addChild(shape);
        const bitmapData = new _e2d_bitmap__WEBPACK_IMPORTED_MODULE_3__["BitmapData"](50, 40, true, 0xffff00ff);
        bitmapData.fillRect(new _e2d_geom__WEBPACK_IMPORTED_MODULE_0__["Rectangle"](10, 10, 10, 10), 0x00ffff);
        const bitmap = new _e2d_bitmap__WEBPACK_IMPORTED_MODULE_3__["Bitmap"](bitmapData);
        bitmap.rotation = -30;
        bitmap.x = 200;
        bitmap.y = 150;
        sprite.addChild(bitmap);
        const parentObject = shape.parent;
        const stageObject = parentObject.parent;
        console.log(sprite.numChildren);
        console.log(stage.numChildren);
        console.log(shape.x);
        console.log(shape.parent);
        console.log(shape.stage);
        console.log(parentObject);
        console.log(stageObject);
        stage.render();
    }
}
Main.main();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9CaXRtYXAudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9CaXRtYXBEYXRhLnRzIiwid2VicGFjazovLy8uLi9zcmMvQml0bWFwUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9lbnVtcy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uLi9zcmMvQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uLi9zcmMvRGlzcGxheU9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL0Rpc3BsYXlPYmplY3RDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9JbnRlcmFjdGl2ZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL1N0YWdlLnRzIiwid2VicGFjazovLy8uLi9zcmMvVHJhbnNmb3JtLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZXZlbnRzL0tleWJvYXJkRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ldmVudHMvTW91c2VFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2V2ZW50cy9Qb2ludGVyRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ldmVudHMvVG91Y2hFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2V2ZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL0V2ZW50LnRzIiwid2VicGFjazovLy8uLi9zcmMvRXZlbnREaXNwYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi9zcmMvQ29sb3JUcmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9NYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL1JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL0NhbnZhc1JlbmRlcmluZ0NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9Db2xvclBhdHRlcm4udHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9HcmFkaWVudFBhdHRlcm4udHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9JbWFnZVBhdHRlcm4udHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9MaW5lYXJHcmFkaWVudFBhdHRlcm4udHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9SYWRpYWxHcmFkaWVudFBhdHRlcm4udHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9HcmFwaGljcy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL0dyYXBoaWNzQml0bWFwRmlsbC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL0dyYXBoaWNzRW5kRmlsbC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL0dyYXBoaWNzR3JhZGllbnRGaWxsLnRzIiwid2VicGFjazovLy8uLi9zcmMvR3JhcGhpY3NQYXRoLnRzIiwid2VicGFjazovLy8uLi9zcmMvR3JhcGhpY3NSZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL0dyYXBoaWNzU29saWRGaWxsLnRzIiwid2VicGFjazovLy8uLi9zcmMvR3JhcGhpY3NTdHJva2UudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9HcmFwaGljc1RyaWFuZ2xlUGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL1NoYXBlLnRzIiwid2VicGFjazovLy8uLi9zcmMvU3ByaXRlLnRzIiwid2VicGFjazovLy8uLi9zcmMvS2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9Nb3VzZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL1NjcmVlbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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QUFTLEdBQVQsR0FBZSxLQUFLLENBQUwsR0FBUyxHQUFsQztBQUNBLFVBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBTCxHQUFTLEdBQVQsR0FBZSxLQUFLLENBQUwsR0FBUyxHQUFsQztBQUNBLFVBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBTCxHQUFTLEdBQVQsR0FBZSxLQUFLLENBQUwsR0FBUyxHQUFsQztBQUNBLFVBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBTCxHQUFTLEdBQVQsR0FBZSxLQUFLLENBQUwsR0FBUyxHQUFsQztBQUNBLFVBQU0sRUFBRSxHQUFHLEtBQUssRUFBTCxHQUFVLEdBQVYsR0FBZ0IsS0FBSyxFQUFMLEdBQVUsR0FBckM7QUFDQSxVQUFNLEVBQUUsR0FBRyxLQUFLLEVBQUwsR0FBVSxHQUFWLEdBQWdCLEtBQUssRUFBTCxHQUFVLEdBQXJDO0FBRUEsV0FBSyxDQUFMLEdBQVMsQ0FBVDtBQUNBLFdBQUssQ0FBTCxHQUFTLENBQVQ7QUFDQSxXQUFLLENBQUwsR0FBUyxDQUFUO0FBQ0EsV0FBSyxDQUFMLEdBQVMsQ0FBVDtBQUNBLFdBQUssRUFBTCxHQUFVLEVBQVY7QUFDQSxXQUFLLEVBQUwsR0FBVSxFQUFWO0FBQ0E7OzswQkFFSyxDLEVBQVcsQyxFQUFTO0FBQ3pCLFdBQUssQ0FBTCxJQUFVLENBQVY7QUFDQSxXQUFLLENBQUwsSUFBVSxDQUFWO0FBQ0EsV0FBSyxDQUFMLElBQVUsQ0FBVjtBQUNBLFdBQUssQ0FBTCxJQUFVLENBQVY7QUFDQSxXQUFLLEVBQUwsSUFBVyxDQUFYO0FBQ0EsV0FBSyxFQUFMLElBQVcsQ0FBWDtBQUNBOzs7Z0NBRVcsSyxFQUFnQztBQUFBLFVBQWpCLEtBQWlCLHVFQUFELENBQUM7QUFDM0MsVUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUwsQ0FBUyxLQUFULElBQWtCLEtBQTVCO0FBQ0EsVUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUwsQ0FBUyxLQUFULElBQWtCLEtBQTVCO0FBRUEsV0FBSyxDQUFMLEdBQVMsQ0FBVDtBQUNBLFdBQUssQ0FBTCxH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LENBQUM7UUFFeEIsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQWdDLENBQUM7UUFDNUQsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLE1BQWUsQ0FBQztRQUVqRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFekIsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Q0FDRDtBQUVELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IERpc3BsYXlPYmplY3QgfSBmcm9tICdAZTJkL2Rpc3BsYXknO1xuaW1wb3J0IHsgUGl4ZWxTbmFwcGluZyB9IGZyb20gJy4vZW51bXMnO1xuaW1wb3J0IEJpdG1hcFJlbmRlcmVyIGZyb20gJy4vQml0bWFwUmVuZGVyZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQml0bWFwIGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XG4gICAgY29uc3RydWN0b3IoYml0bWFwRGF0YSwgcGl4ZWxTbmFwcGluZyA9IFBpeGVsU25hcHBpbmcuQVVUTywgc21vb3RoaW5nID0gZmFsc2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5iaXRtYXBEYXRhID0gYml0bWFwRGF0YTtcbiAgICAgICAgdGhpcy5waXhlbFNuYXBwaW5nID0gcGl4ZWxTbmFwcGluZztcbiAgICAgICAgdGhpcy5zbW9vdGhpbmcgPSBzbW9vdGhpbmc7XG4gICAgfVxuICAgIHJlbmRlckNvbnRlbnQoY29udGV4dCkge1xuICAgICAgICBCaXRtYXBSZW5kZXJlci5yZW5kZXIoY29udGV4dCwgdGhpcy50cmFuc2Zvcm0uY29uY2F0ZW5hdGVkTWF0cml4LCB0aGlzLnRyYW5zZm9ybS5jb25jYXRlbmF0ZWRDb2xvclRyYW5zZm9ybSwgdGhpcyk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUW1sMGJXRndMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDBKcGRHMWhjQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeFBRVUZQTEVWQlFVVXNZVUZCWVN4RlFVRkZMRTFCUVUwc1kwRkJZeXhEUVVGRE8wRkJSemRETEU5QlFVOHNSVUZCUlN4aFFVRmhMRVZCUVVVc1RVRkJUU3hUUVVGVExFTkJRVU03UVVGRGVFTXNUMEZCVHl4alFVRmpMRTFCUVUwc2EwSkJRV3RDTEVOQlFVTTdRVUZGT1VNc1RVRkJUU3hEUVVGRExFOUJRVThzVDBGQlR5eE5RVUZQTEZOQlFWRXNZVUZCWVR0SlFVdG9SQ3haUVVORExGVkJRWFZDTEVWQlEzWkNMR2RDUVVFclFpeGhRVUZoTEVOQlFVTXNTVUZCU1N4RlFVTnFSQ3haUVVGeFFpeExRVUZMTzFGQlJURkNMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRMUlzU1VGQlNTeERRVUZETEZWQlFWVXNSMEZCUnl4VlFVRlZMRU5CUVVNN1VVRkROMElzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4aFFVRmhMRU5CUVVNN1VVRkRia01zU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4VFFVRlRMRU5CUVVNN1NVRkROVUlzUTBGQlF6dEpRVVZFTEdGQlFXRXNRMEZCUXl4UFFVRXdRanRSUVVOMlF5eGpRVUZqTEVOQlFVTXNUVUZCVFN4RFFVTndRaXhQUVVGUExFVkJRMUFzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4clFrRkJhMElzUlVGRGFrTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXd3UWtGQk1FSXNSVUZEZWtNc1NVRkJTU3hEUVVOS0xFTkJRVU03U1VGRFNDeERRVUZETzBOQlEwUWlmUT09IiwiaW1wb3J0IHsgUmVjdGFuZ2xlLCB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaXRtYXBEYXRhIHtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCB0cmFuc3BhcmVudCA9IHRydWUsIGZpbGxDb2xvciA9IDB4ZmZmZmZmZmYpIHtcbiAgICAgICAgdGhpcy5fY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuX3RyYW5zcGFyZW50ID0gdHJhbnNwYXJlbnQ7XG4gICAgICAgIHRoaXMuZmlsbFJlY3QodGhpcy5yZWN0LCBmaWxsQ29sb3IpO1xuICAgIH1cbiAgICBnZXQgY2FudmFzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FudmFzO1xuICAgIH1cbiAgICBnZXQgdHJhbnNwYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc3BhcmVudDtcbiAgICB9XG4gICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FudmFzLndpZHRoO1xuICAgIH1cbiAgICBnZXQgaGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FudmFzLmhlaWdodDtcbiAgICB9XG4gICAgZ2V0IHJlY3QoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKDAsIDAsIHRoaXMuX2NhbnZhcy53aWR0aCwgdGhpcy5fY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICAgIGFwcGx5RmlsdGVyKHNvdXJjZUJpdG1hcERhdGEsIHNvdXJjZVJlY3QsIHRhcmdldFBvaW50LCBmaWx0ZXIpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0UmVjdCA9IHNvdXJjZVJlY3QuY2xvbmUoKTtcbiAgICAgICAgdGFyZ2V0UmVjdC50b3BMZWZ0ID0gdGFyZ2V0UG9pbnQ7XG4gICAgICAgIGNvbnN0IHNvdXJjZUltYWdlRGF0YSA9IHNvdXJjZUJpdG1hcERhdGEuX2NvbnRleHQuZ2V0SW1hZ2VEYXRhKHNvdXJjZVJlY3QueCwgc291cmNlUmVjdC55LCBzb3VyY2VSZWN0LndpZHRoLCBzb3VyY2VSZWN0LmhlaWdodCk7XG4gICAgICAgIGNvbnN0IHRhcmdldEltYWdlRGF0YSA9IHRoaXMuX2NvbnRleHQuZ2V0SW1hZ2VEYXRhKHRhcmdldFJlY3QueCwgdGFyZ2V0UmVjdC55LCB0YXJnZXRSZWN0LndpZHRoLCB0YXJnZXRSZWN0LmhlaWdodCk7XG4gICAgICAgIGNvbnN0IHNvdXJjZVBpeGVscyA9IHNvdXJjZUltYWdlRGF0YS5kYXRhO1xuICAgICAgICBjb25zdCB0YXJnZXRQaXhlbHMgPSB0YXJnZXRJbWFnZURhdGEuZGF0YTtcbiAgICAgICAgZmlsdGVyLmFwcGx5KHNvdXJjZVJlY3Qud2lkdGgsIHNvdXJjZVJlY3QuaGVpZ2h0LCBzb3VyY2VQaXhlbHMsIHRhcmdldFBpeGVscyk7XG4gICAgICAgIHRoaXMuX2NvbnRleHQucHV0SW1hZ2VEYXRhKHRhcmdldEltYWdlRGF0YSwgdGFyZ2V0UmVjdC54LCB0YXJnZXRSZWN0LnkpO1xuICAgIH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBpbWFnZURhdGEgPSB0aGlzLl9jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbmV3IEJpdG1hcERhdGEodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMudHJhbnNwYXJlbnQsIDApO1xuICAgICAgICB0YXJnZXQuX2NvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIGNvbG9yVHJhbnNmb3JtKHJlY3QsIGNvbG9yVHJhbnNmb3JtKSB7XG4gICAgICAgIGNvbnN0IHsgcmVkTXVsdGlwbGllciwgZ3JlZW5NdWx0aXBsaWVyLCBibHVlTXVsdGlwbGllciwgYWxwaGFNdWx0aXBsaWVyLCByZWRPZmZzZXQsIGdyZWVuT2Zmc2V0LCBibHVlT2Zmc2V0LCBhbHBoYU9mZnNldCwgfSA9IGNvbG9yVHJhbnNmb3JtO1xuICAgICAgICBjb25zdCBpbWFnZURhdGEgPSB0aGlzLl9jb250ZXh0LmdldEltYWdlRGF0YShyZWN0LngsIHJlY3QueSwgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGltYWdlRGF0YTtcbiAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IGRhdGE7XG4gICAgICAgIGxldCByID0gMDtcbiAgICAgICAgd2hpbGUgKHIgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSByICsgMTtcbiAgICAgICAgICAgIGNvbnN0IGIgPSByICsgMjtcbiAgICAgICAgICAgIGNvbnN0IGEgPSByICsgMztcbiAgICAgICAgICAgIGRhdGFbcl0gPSBkYXRhW3JdICogcmVkTXVsdGlwbGllciArIHJlZE9mZnNldDtcbiAgICAgICAgICAgIGRhdGFbZ10gPSBkYXRhW2ddICogYmx1ZU11bHRpcGxpZXIgKyBibHVlT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YVtiXSA9IGRhdGFbYl0gKiBncmVlbk11bHRpcGxpZXIgKyBncmVlbk9mZnNldDtcbiAgICAgICAgICAgIGRhdGFbYV0gPSBkYXRhW2FdICogYWxwaGFNdWx0aXBsaWVyICsgYWxwaGFPZmZzZXQ7XG4gICAgICAgICAgICByICs9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCByZWN0LngsIHJlY3QueSk7XG4gICAgfVxuICAgIGNvbXBhcmUob3RoZXJCaXRtYXBEYXRhKSB7XG4gICAgICAgIHRocm93ICdOb3QgaW1wbGVtZW50ZWQnO1xuICAgIH1cbiAgICBjb3B5Q2hhbm5lbChzb3VyY2VCaXRtYXBEYXRhLCBzb3VyY2VSZWN0LCBkZXN0UG9pbnQsIHNvdXJjZUNoYW5uZWwsIGRlc3RDaGFubmVsKSB7XG4gICAgICAgIHRocm93ICdOb3QgaW1wbGVtZW50ZWQnO1xuICAgIH1cbiAgICBjb3B5UGl4ZWxzKHNvdXJjZUJpdG1hcERhdGEsIHNvdXJjZVJlY3QsIGRlc3RQb2ludCwgYWxwaGFCaXRtYXBEYXRhLCBhbHBoYVBvaW50LCBtZXJnZUFscGhhID0gZmFsc2UpIHtcbiAgICAgICAgdGhyb3cgJ05vdCBpbXBsZW1lbnRlZCc7XG4gICAgfVxuICAgIGNvcHlQaXhlbHNUb0J5dGVBcnJheShyZWN0LCBkYXRhKSB7XG4gICAgICAgIHRocm93ICdOb3QgaW1wbGVtZW50ZWQnO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fY2FudmFzO1xuICAgICAgICBkZWxldGUgdGhpcy5fY29udGV4dDtcbiAgICB9XG4gICAgZHJhdyhzb3VyY2UsIG1hdHJpeCwgY29sb3JUcmFuc2Zvcm0sIGJsZW5kTW9kZSwgY2xpcFJlY3QsIHNtb290aGluZyA9IGZhbHNlKSB7XG4gICAgICAgIHRocm93ICdOb3QgaW1wbGVtZW50ZWQnO1xuICAgIH1cbiAgICBkcmF3V2l0aFF1YWxpdHkoc291cmNlLCBtYXRyaXgsIGNvbG9yVHJhbnNmb3JtLCBibGVuZE1vZGUsIGNsaXBSZWN0LCBzbW9vdGhpbmcsIHF1YWxpdHkpIHtcbiAgICAgICAgdGhyb3cgJ05vdCBpbXBsZW1lbnRlZCc7XG4gICAgfVxuICAgIGVuY29kZShyZWN0LCBjb21wcmVzc29yLCBieXRlQXJyYXkpIHtcbiAgICAgICAgdGhyb3cgJ05vdCBpbXBsZW1lbnRlZCc7XG4gICAgfVxuICAgIGZpbGxSZWN0KHJlY3QsIGNvbG9yKSB7XG4gICAgICAgIGNvbnN0IGEgPSBjb2xvciA+PiAyNCAmIDB4ZmY7XG4gICAgICAgIGNvbnN0IHIgPSBjb2xvciA+PiAxNiAmIDB4ZmY7XG4gICAgICAgIGNvbnN0IGcgPSBjb2xvciA+PiA4ICYgMHhmZjtcbiAgICAgICAgY29uc3QgYiA9IGNvbG9yICYgMHhmZjtcbiAgICAgICAgdGhpcy5fY29udGV4dC5zdHJva2VTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmZpbGxTdHlsZSA9IGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YX0pYDtcbiAgICAgICAgdGhpcy5fY29udGV4dC5maWxsUmVjdChyZWN0LngsIHJlY3QueSwgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgIH1cbiAgICBmbG9vZEZpbGwoeCwgeSwgY29sb3IpIHtcbiAgICAgICAgdGhyb3cgJ05vdCBpbXBsZW1lbnRlZCc7XG4gICAgfVxuICAgIGdlbmVyYXRlRmlsdGVyUmVjdChzb3VyY2VSZWN0LCBmaWx0ZXIpIHtcbiAgICAgICAgdGhyb3cgJ05vdCBpbXBsZW1lbnRlZCc7XG4gICAgfVxuICAgIGdldENvbG9yQm91bmRzUmVjdChtYXNrLCBjb2xvciwgZmluZENvbG9yID0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyAnTm90IGltcGxlbWVudGVkJztcbiAgICB9XG4gICAgZ2V0UGl4ZWwoeCwgeSkge1xuICAgICAgICB0aHJvdyAnTm90IGltcGxlbWVudGVkJztcbiAgICB9XG4gICAgZ2V0UGl4ZWwzMih4LCB5KSB7XG4gICAgICAgIHRocm93ICdOb3QgaW1wbGVtZW50ZWQnO1xuICAgIH1cbiAgICBnZXRQaXhlbHMocmVjdCkge1xuICAgICAgICB0aHJvdyAnTm90IGltcGxlbWVudGVkJztcbiAgICB9XG4gICAgZ2V0VmVjdG9yKHJlY3QpIHtcbiAgICAgICAgdGhyb3cgJ05vdCBpbXBsZW1lbnRlZCc7XG4gICAgfVxuICAgIGhpc3RvZ3JhbShoUmVjdCkge1xuICAgICAgICB0aHJvdyAnTm90IGltcGxlbWVudGVkJztcbiAgICB9XG4gICAgaGl0VGVzdChmaXJzdFBvaW50LCBmaXJzdEFscGhhVGhyZXNob2xkLCBzZWNvbmRPYmplY3QsIHNlY29uZEJpdG1hcERhdGFQb2ludCwgc2Vjb25kQWxwaGFUaHJlc2hvbGQgPSAxKSB7XG4gICAgICAgIHRocm93ICdOb3QgaW1wbGVtZW50ZWQnO1xuICAgIH1cbiAgICBsb2NrKCkge1xuICAgICAgICB0aHJvdyAnTm90IGltcGxlbWVudGVkJztcbiAgICB9XG4gICAgbWVyZ2Uoc291cmNlQml0bWFwRGF0YSwgc291cmNlUmVjdCwgZGVzdFBvaW50LCByZWRNdWx0aXBsaWVyLCBncmVlbk11bHRpcGxpZXIsIGJsdWVNdWx0aXBsaWVyLCBhbHBoYU11bHRpcGxpZXIpIHtcbiAgICAgICAgdGhyb3cgJ05vdCBpbXBsZW1lbnRlZCc7XG4gICAgfVxuICAgIG5vaXNlKHJhbmRvbVNlZWQsIGxvdyA9IDAsIGhpZ2ggPSAyNTUsIGNoYW5uZWxPcHRpb25zID0gNywgZ3JheVNjYWxlID0gZmFsc2UpIHtcbiAgICAgICAgdGhyb3cgJ05vdCBpbXBsZW1lbnRlZCc7XG4gICAgfVxuICAgIHBhbGV0dGVNYXAoc291cmNlQml0bWFwRGF0YSwgc291cmNlUmVjdCwgZGVzdFBvaW50LCByZWRBcnJheSwgZ3JlZW5BcnJheSwgYmx1ZUFycmF5LCBhbHBoYUFycmF5KSB7XG4gICAgICAgIHRocm93ICdOb3QgaW1wbGVtZW50ZWQnO1xuICAgIH1cbiAgICBwZXJsaW5Ob2lzZShiYXNlWCwgYmFzZVksIG51bU9jdGF2ZXMsIHJhbmRvbVNlZWQsIHN0aXRjaCwgZnJhY3RhbE5vaXNlLCBjaGFubmVsT3B0aW9ucyA9IDcsIGdyYXlTY2FsZSA9IGZhbHNlLCBvZmZzZXRzKSB7XG4gICAgICAgIHRocm93ICdOb3QgaW1wbGVtZW50ZWQnO1xuICAgIH1cbiAgICBwaXhlbERpc3NvbHZlKHNvdXJjZUJpdG1hcERhdGEsIHNvdXJjZVJlY3QsIGRlc3RQb2ludCwgcmFuZG9tU2VlZCA9IDAsIG51bVBpeGVscyA9IDAsIGZpbGxDb2xvciA9IDApIHtcbiAgICAgICAgdGhyb3cgJ05vdCBpbXBsZW1lbnRlZCc7XG4gICAgfVxuICAgIHNjcm9sbCh4LCB5KSB7XG4gICAgICAgIHRocm93ICdOb3QgaW1wbGVtZW50ZWQnO1xuICAgIH1cbiAgICBzZXRQaXhlbCh4LCB5LCBjb2xvcikge1xuICAgICAgICB0aHJvdyAnTm90IGltcGxlbWVudGVkJztcbiAgICB9XG4gICAgc2V0UGl4ZWwzMih4LCB5LCBjb2xvcikge1xuICAgICAgICB0aHJvdyAnTm90IGltcGxlbWVudGVkJztcbiAgICB9XG4gICAgc2V0UGl4ZWxzKHJlY3QsIGlucHV0Qnl0ZUFycmF5KSB7XG4gICAgICAgIHRocm93ICdOb3QgaW1wbGVtZW50ZWQnO1xuICAgIH1cbiAgICBzZXRWZWN0b3IocmVjdCwgaW5wdXRWZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgJ05vdCBpbXBsZW1lbnRlZCc7XG4gICAgfVxuICAgIHRocmVzaG9sZChzb3VyY2VCaXRtYXBEYXRhLCBzb3VyY2VSZWN0LCBkZXN0UG9pbnQsIG9wZXJhdGlvbiwgdGhyZXNob2xkLCBjb2xvciA9IDAsIG1hc2sgPSAweEZGRkZGRkZGLCBjb3B5U291cmNlID0gZmFsc2UpIHtcbiAgICAgICAgdGhyb3cgJ05vdCBpbXBsZW1lbnRlZCc7XG4gICAgfVxuICAgIHVubG9jayhjaGFuZ2VSZWN0KSB7XG4gICAgICAgIHRocm93ICdOb3QgaW1wbGVtZW50ZWQnO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFtbDBiV0Z3UkdGMFlTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlDYVhSdFlYQkVZWFJoTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVVkJMRTlCUVU4c1JVRkRUaXhUUVVGVExFZEJRMVFzVFVGQlRTeFhRVUZYTEVOQlFVTTdRVUZQYmtJc1RVRkJUU3hEUVVGRExFOUJRVThzVDBGQlR5eFZRVUZWTzBsQlN6bENMRmxCUVZrc1MwRkJZU3hGUVVGRkxFMUJRV01zUlVGQlJTeGpRVUYxUWl4SlFVRkpMRVZCUVVVc1dVRkJiMElzVlVGQlZUdFJRVU55Unl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkRhRVFzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRek5DTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dFJRVVUzUWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJOa0lzUTBGQlF6dFJRVVV4UlN4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExGZEJRVmNzUTBGQlF6dFJRVVZvUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1NVRkRja01zUTBGQlF6dEpRVVZFTEVsQlFVa3NUVUZCVFR0UlFVTlVMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVU55UWl4RFFVRkRPMGxCUlVRc1NVRkJTU3hYUVVGWE8xRkJRMlFzVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRPMGxCUXpGQ0xFTkJRVU03U1VGRlJDeEpRVUZKTEV0QlFVczdVVUZEVWl4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETzBsQlF6TkNMRU5CUVVNN1NVRkZSQ3hKUVVGSkxFMUJRVTA3VVVGRFZDeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRelZDTEVOQlFVTTdTVUZGUkN4SlFVRkpMRWxCUVVrN1VVRkRVQ3hQUVVGUExFbEJRVWtzVTBGQlV5eERRVU51UWl4RFFVRkRMRVZCUTBRc1EwRkJReXhGUVVORUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVTnNRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZEYmtJc1EwRkJRenRKUVVOSUxFTkJRVU03U1VGRlJDeFhRVUZYTEVOQlFVTXNaMEpCUVRSQ0xFVkJRVVVzVlVGQmNVSXNSVUZCUlN4WFFVRnJRaXhGUVVGRkxFMUJRVzlDTzFGQlEzaEhMRTFCUVUwc1ZVRkJWU3hIUVVGSExGVkJRVlVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0UlFVTjBReXhWUVVGVkxFTkJRVU1zVDBGQlR5eEhRVUZITEZkQlFWY3NRMEZCUXp0UlFVVnFReXhOUVVGTkxHVkJRV1VzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhSUVVGUkxFTkJRVU1zV1VGQldTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNTMEZCU3l4RlFVRkZMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU5vU1N4TlFVRk5MR1ZCUVdVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETEVWQlFVVXNWVUZCVlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZGY0Vnc1RVRkJUU3haUVVGWkxFZEJRVzFDTEdWQlFXVXNRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRkRNVVFzVFVGQlRTeFpRVUZaTEVkQlFXMUNMR1ZCUVdVc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRk1VUXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZWQlFWVXNRMEZCUXl4TlFVRk5MRVZCUVVVc1dVRkJXU3hGUVVGRkxGbEJRVmtzUTBGQlF5eERRVUZETzFGQlJUbEZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zV1VGQldTeERRVUZETEdWQlFXVXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjZSU3hEUVVGRE8wbEJSVVFzUzBGQlN6dFJRVU5LTEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlF5OUNMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUld4RkxFMUJRVTBzVFVGQlRTeEhRVUZITEVsQlFVa3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6VkZMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zV1VGQldTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE9VTXNUMEZCVHl4TlFVRk5MRU5CUVVNN1NVRkRaaXhEUVVGRE8wbEJSVVFzWTBGQll5eERRVUZETEVsQlFXVXNSVUZCUlN4alFVRTRRanRSUVVNM1JDeE5RVUZOTEVWQlEwd3NZVUZCWVN4RlFVTmlMR1ZCUVdVc1JVRkRaaXhqUVVGakxFVkJRMlFzWlVGQlpTeEZRVVZtTEZOQlFWTXNSVUZEVkN4WFFVRlhMRVZCUTFnc1ZVRkJWU3hGUVVOV0xGZEJRVmNzUjBGRFdDeEhRVUZITEdOQlFXTXNRMEZCUXp0UlFVVnVRaXhOUVVGTkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRkRVlzVFVGQlRTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SFFVRkhMRk5CUVZNc1EwRkJRenRSUVVNelFpeE5RVUZOTEVWQlFVVXNUVUZCVFN4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJSWGhDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOV0xFOUJRVThzUTBGQlF5eEhRVUZITEUxQlFVMHNSVUZCUlR0WlFVTnNRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTJoQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRhRUlzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVWb1FpeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEdGQlFXRXNSMEZCUnl4VFFVRlRMRU5CUVVNN1dVRkRPVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eGpRVUZqTEVkQlFVY3NWVUZCVlN4RFFVRkRPMWxCUTJoRUxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzWlVGQlpTeEhRVUZITEZkQlFWY3NRMEZCUXp0WlFVTnNSQ3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExHVkJRV1VzUjBGQlJ5eFhRVUZYTEVOQlFVTTdXVUZGYkVRc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU5RTzFGQlEwUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzWkVMRU5CUVVNN1NVRkZSQ3hQUVVGUExFTkJRVU1zWlVGQk1rSTdVVUZEYkVNc1RVRkJUU3hwUWtGQmFVSXNRMEZCUXp0SlFVTjZRaXhEUVVGRE8wbEJSVVFzVjBGQlZ5eERRVUZETEdkQ1FVRTBRaXhGUVVGRkxGVkJRWEZDTEVWQlFVVXNVMEZCWjBJc1JVRkJSU3hoUVVGeFFpeEZRVUZGTEZkQlFXMUNPMUZCUXpWSUxFMUJRVTBzYVVKQlFXbENMRU5CUVVNN1NVRkRla0lzUTBGQlF6dEpRVVZFTEZWQlFWVXNRMEZCUXl4blFrRkJORUlzUlVGQlJTeFZRVUZ4UWl4RlFVRkZMRk5CUVdkQ0xFVkJRVVVzWlVGQk5FSXNSVUZCUlN4VlFVRnJRaXhGUVVGRkxHRkJRWE5DTEV0QlFVczdVVUZET1Vvc1RVRkJUU3hwUWtGQmFVSXNRMEZCUXp0SlFVTjZRaXhEUVVGRE8wbEJSVVFzY1VKQlFYRkNMRU5CUVVNc1NVRkJaU3hGUVVGRkxFbEJRV1U3VVVGRGNrUXNUVUZCVFN4cFFrRkJhVUlzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCUlVRc1QwRkJUenRSUVVOT0xFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0UlFVTndRaXhQUVVGUExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTTdTVUZEZEVJc1EwRkJRenRKUVVWRUxFbEJRVWtzUTBGQlF5eE5RVUYxUWl4RlFVRkZMRTFCUVdVc1JVRkJSU3hqUVVFclFpeEZRVUZGTEZOQlFXdENMRVZCUVVVc1VVRkJiMElzUlVGQlJTeFpRVUZ4UWl4TFFVRkxPMUZCUTI1S0xFMUJRVTBzYVVKQlFXbENMRU5CUVVNN1NVRkRla0lzUTBGQlF6dEpRVVZFTEdWQlFXVXNRMEZCUXl4TlFVRjFRaXhGUVVGRkxFMUJRV1VzUlVGQlJTeGpRVUVyUWl4RlFVRkZMRk5CUVd0Q0xFVkJRVVVzVVVGQmIwSXNSVUZCUlN4VFFVRnRRaXhGUVVGRkxFOUJRV2RDTzFGQlEzcExMRTFCUVUwc2FVSkJRV2xDTEVOQlFVTTdTVUZEZWtJc1EwRkJRenRKUVVWRUxFMUJRVTBzUTBGQlF5eEpRVUZsTEVWQlFVVXNWVUZCTmtJc1JVRkJSU3hUUVVGeFFqdFJRVU16UlN4TlFVRk5MR2xDUVVGcFFpeERRVUZETzBsQlEzcENMRU5CUVVNN1NVRkZSQ3hSUVVGUkxFTkJRVU1zU1VGQlpTeEZRVUZGTEV0QlFXRTdVVUZEZEVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUzBGQlN5eEpRVUZKTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkROMElzVFVGQlRTeERRVUZETEVkQlFVY3NTMEZCU3l4SlFVRkpMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRE4wSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZETlVJc1RVRkJUU3hEUVVGRExFZEJRVWNzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVVjJRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRMMElzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRWRCUVVjc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVONlJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRha1VzUTBGQlF6dEpRVVZFTEZOQlFWTXNRMEZCUXl4RFFVRlRMRVZCUVVVc1EwRkJVeXhGUVVGRkxFdEJRV0U3VVVGRE5VTXNUVUZCVFN4cFFrRkJhVUlzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCUlVRc2EwSkJRV3RDTEVOQlFVTXNWVUZCY1VJc1JVRkJSU3hOUVVGdlFqdFJRVU0zUkN4TlFVRk5MR2xDUVVGcFFpeERRVUZETzBsQlEzcENMRU5CUVVNN1NVRkZSQ3hyUWtGQmEwSXNRMEZCUXl4SlFVRlpMRVZCUVVVc1MwRkJZU3hGUVVGRkxGbEJRWEZDTEVsQlFVazdVVUZEZUVVc1RVRkJUU3hwUWtGQmFVSXNRMEZCUXp0SlFVTjZRaXhEUVVGRE8wbEJSVVFzVVVGQlVTeERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlRPMUZCUXpWQ0xFMUJRVTBzYVVKQlFXbENMRU5CUVVNN1NVRkRla0lzUTBGQlF6dEpRVVZFTEZWQlFWVXNRMEZCUXl4RFFVRlRMRVZCUVVVc1EwRkJVenRSUVVNNVFpeE5RVUZOTEdsQ1FVRnBRaXhEUVVGRE8wbEJRM3BDTEVOQlFVTTdTVUZGUkN4VFFVRlRMRU5CUVVNc1NVRkJaVHRSUVVONFFpeE5RVUZOTEdsQ1FVRnBRaXhEUVVGRE8wbEJRM3BDTEVOQlFVTTdTVUZGUkN4VFFVRlRMRU5CUVVNc1NVRkJaVHRSUVVONFFpeE5RVUZOTEdsQ1FVRnBRaXhEUVVGRE8wbEJRM3BDTEVOQlFVTTdTVUZGUkN4VFFVRlRMRU5CUVVNc1MwRkJhVUk3VVVGRE1VSXNUVUZCVFN4cFFrRkJhVUlzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCUlVRc1QwRkJUeXhEUVVGRExGVkJRV2xDTEVWQlFVVXNiVUpCUVRKQ0xFVkJRVVVzV1VGQmIwSXNSVUZCUlN4eFFrRkJOa0lzUlVGQlJTeDFRa0ZCSzBJc1EwRkJRenRSUVVNMVNTeE5RVUZOTEdsQ1FVRnBRaXhEUVVGRE8wbEJRM3BDTEVOQlFVTTdTVUZGUkN4SlFVRkpPMUZCUTBnc1RVRkJUU3hwUWtGQmFVSXNRMEZCUXp0SlFVTjZRaXhEUVVGRE8wbEJSVVFzUzBGQlN5eERRVUZETEdkQ1FVRTBRaXhGUVVGRkxGVkJRWEZDTEVWQlFVVXNVMEZCWjBJc1JVRkJSU3hoUVVGeFFpeEZRVUZGTEdWQlFYVkNMRVZCUVVVc1kwRkJjMElzUlVGQlJTeGxRVUYxUWp0UlFVTXpTeXhOUVVGTkxHbENRVUZwUWl4RFFVRkRPMGxCUTNwQ0xFTkJRVU03U1VGRlJDeExRVUZMTEVOQlFVTXNWVUZCYTBJc1JVRkJSU3hOUVVGakxFTkJRVU1zUlVGQlJTeFBRVUZsTEVkQlFVY3NSVUZCUlN4cFFrRkJlVUlzUTBGQlF5eEZRVUZGTEZsQlFYRkNMRXRCUVVzN1VVRkRjRWdzVFVGQlRTeHBRa0ZCYVVJc1EwRkJRenRKUVVONlFpeERRVUZETzBsQlJVUXNWVUZCVlN4RFFVRkRMR2RDUVVFMFFpeEZRVUZGTEZWQlFYRkNMRVZCUVVVc1UwRkJaMElzUlVGQlJTeFJRVUZ0UWl4RlFVRkZMRlZCUVhGQ0xFVkJRVVVzVTBGQmIwSXNSVUZCUlN4VlFVRnhRanRSUVVONFN5eE5RVUZOTEdsQ1FVRnBRaXhEUVVGRE8wbEJRM3BDTEVOQlFVTTdTVUZGUkN4WFFVRlhMRU5CUVVNc1MwRkJZU3hGUVVGRkxFdEJRV0VzUlVGQlJTeFZRVUZyUWl4RlFVRkZMRlZCUVd0Q0xFVkJRVVVzVFVGQlpTeEZRVUZGTEZsQlFYRkNMRVZCUVVVc2FVSkJRWGxDTEVOQlFVTXNSVUZCUlN4WlFVRnhRaXhMUVVGTExFVkJRVVVzVDBGQmFVSTdVVUZEYkUwc1RVRkJUU3hwUWtGQmFVSXNRMEZCUXp0SlFVTjZRaXhEUVVGRE8wbEJSVVFzWVVGQllTeERRVUZETEdkQ1FVRTBRaXhGUVVGRkxGVkJRWEZDTEVWQlFVVXNVMEZCWjBJc1JVRkJSU3hoUVVGeFFpeERRVUZETEVWQlFVVXNXVUZCYjBJc1EwRkJReXhGUVVGRkxGbEJRVzlDTEVOQlFVTTdVVUZEZUVvc1RVRkJUU3hwUWtGQmFVSXNRMEZCUXp0SlFVTjZRaXhEUVVGRE8wbEJSVVFzVFVGQlRTeERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlRPMUZCUXpGQ0xFMUJRVTBzYVVKQlFXbENMRU5CUVVNN1NVRkRla0lzUTBGQlF6dEpRVVZFTEZGQlFWRXNRMEZCUXl4RFFVRlRMRVZCUVVVc1EwRkJVeXhGUVVGRkxFdEJRV0U3VVVGRE0wTXNUVUZCVFN4cFFrRkJhVUlzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCUlVRc1ZVRkJWU3hEUVVGRExFTkJRVk1zUlVGQlJTeERRVUZUTEVWQlFVVXNTMEZCWVR0UlFVTTNReXhOUVVGTkxHbENRVUZwUWl4RFFVRkRPMGxCUTNwQ0xFTkJRVU03U1VGRlJDeFRRVUZUTEVOQlFVTXNTVUZCWlN4RlFVRkZMR05CUVhsQ08xRkJRMjVFTEUxQlFVMHNhVUpCUVdsQ0xFTkJRVU03U1VGRGVrSXNRMEZCUXp0SlFVVkVMRk5CUVZNc1EwRkJReXhKUVVGbExFVkJRVVVzVjBGQmNVSTdVVUZETDBNc1RVRkJUU3hwUWtGQmFVSXNRMEZCUXp0SlFVTjZRaXhEUVVGRE8wbEJSVVFzVTBGQlV5eERRVUZETEdkQ1FVRTBRaXhGUVVGRkxGVkJRWEZDTEVWQlFVVXNVMEZCWjBJc1JVRkJSU3hUUVVGcFFpeEZRVUZGTEZOQlFXbENMRVZCUVVVc1VVRkJaMElzUTBGQlF5eEZRVUZGTEU5QlFXVXNWVUZCVlN4RlFVRkZMR0ZCUVhOQ0xFdEJRVXM3VVVGREwwd3NUVUZCVFN4cFFrRkJhVUlzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCUlVRc1RVRkJUU3hEUVVGRExGVkJRWE5DTzFGQlF6VkNMRTFCUVUwc2FVSkJRV2xDTEVOQlFVTTdTVUZEZWtJc1EwRkJRenREUVVORUluMD0iLCJpbXBvcnQgeyBJbWFnZVBhdHRlcm4gfSBmcm9tICdAZTJkL3JlbmRlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaXRtYXBSZW5kZXJlciB7XG4gICAgc3RhdGljIHJlbmRlcihjb250ZXh0LCBtYXRyaXgsIGNvbG9yVHJhbnNmb3JtLCBiaXRtYXApIHtcbiAgICAgICAgY29uc3QgeyBiaXRtYXBEYXRhLCBzbW9vdGhpbmcgfSA9IGJpdG1hcDtcbiAgICAgICAgaWYgKCFiaXRtYXBEYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IG5ldyBJbWFnZVBhdHRlcm4oKTtcbiAgICAgICAgcGF0dGVybi5pbWFnZSA9IGJpdG1hcERhdGEuY2FudmFzO1xuICAgICAgICBwYXR0ZXJuLnJlcGVhdCA9IGZhbHNlO1xuICAgICAgICBwYXR0ZXJuLnNtb290aCA9IHNtb290aGluZztcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICBhbHBoYTogY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyLFxuICAgICAgICB9O1xuICAgICAgICBjb250ZXh0LnJlY3QoMCwgMCwgYml0bWFwRGF0YS53aWR0aCwgYml0bWFwRGF0YS5oZWlnaHQpO1xuICAgICAgICBjb250ZXh0LmZpbGwocGF0dGVybiwgc3R5bGUpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFtbDBiV0Z3VW1WdVpHVnlaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdlFtbDBiV0Z3VW1WdVpHVnlaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlEwRXNUMEZCVHl4RlFVRnhRaXhaUVVGWkxFVkJRV0VzVFVGQlRTeGhRVUZoTEVOQlFVTTdRVUZIZWtVc1RVRkJUU3hEUVVGRExFOUJRVThzVDBGQlR5eGpRVUZqTzBsQlEyeERMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQk1FSXNSVUZCUlN4TlFVRmpMRVZCUVVVc1kwRkJPRUlzUlVGQlJTeE5RVUZqTzFGQlEzWkhMRTFCUVUwc1JVRkJSU3hWUVVGVkxFVkJRVVVzVTBGQlV5eEZRVUZGTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUlhwRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVTdXVUZEYUVJc1QwRkJUenRUUVVOUU8xRkJSVVFzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZEYmtJc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGRFVpeE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVTlNMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRMUlzVFVGQlRTeERRVUZETEVOQlFVTXNSVUZEVWl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVOVUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlExUXNRMEZCUXp0UlFVVkdMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzV1VGQldTeEZRVUZGTEVOQlFVTTdVVUZEYmtNc1QwRkJUeXhEUVVGRExFdEJRVXNzUjBGQlJ5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUTJ4RExFOUJRVThzUTBGQlF5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTNaQ0xFOUJRVThzUTBGQlF5eE5RVUZOTEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUlROQ0xFMUJRVTBzUzBGQlN5eEhRVUZqTzFsQlEzaENMRXRCUVVzc1JVRkJSU3hqUVVGakxFTkJRVU1zWlVGQlpUdFRRVU55UXl4RFFVRkRPMUZCUlVZc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRlZCUVZVc1EwRkJReXhMUVVGTExFVkJRVVVzVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTNoRUxFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRemxDTEVOQlFVTTdRMEZEUkNKOSIsImV4cG9ydCB2YXIgQ2Fwc1N0eWxlO1xuKGZ1bmN0aW9uIChDYXBzU3R5bGUpIHtcbiAgICBDYXBzU3R5bGVbXCJCVVRUXCJdID0gXCJidXR0XCI7XG4gICAgQ2Fwc1N0eWxlW1wiUk9VTkRcIl0gPSBcInJvdW5kXCI7XG4gICAgQ2Fwc1N0eWxlW1wiU1FVQVJFXCJdID0gXCJzcXVhcmVcIjtcbn0pKENhcHNTdHlsZSB8fCAoQ2Fwc1N0eWxlID0ge30pKTtcbmV4cG9ydCB2YXIgSm9pbnRTdHlsZTtcbihmdW5jdGlvbiAoSm9pbnRTdHlsZSkge1xuICAgIEpvaW50U3R5bGVbXCJCRVZFTFwiXSA9IFwiYmV2ZWxcIjtcbiAgICBKb2ludFN0eWxlW1wiTUlURVJcIl0gPSBcIm1pdGVyXCI7XG4gICAgSm9pbnRTdHlsZVtcIlJPVU5EXCJdID0gXCJyb3VuZFwiO1xufSkoSm9pbnRTdHlsZSB8fCAoSm9pbnRTdHlsZSA9IHt9KSk7XG5leHBvcnQgdmFyIEdyYXBoaWNzUGF0aFdpbmRpbmc7XG4oZnVuY3Rpb24gKEdyYXBoaWNzUGF0aFdpbmRpbmcpIHtcbiAgICBHcmFwaGljc1BhdGhXaW5kaW5nW1wiRVZFTl9PRERcIl0gPSBcImV2ZW5PZGRcIjtcbiAgICBHcmFwaGljc1BhdGhXaW5kaW5nW1wiTk9OX1pFUk9cIl0gPSBcIm5vblplcm9cIjtcbn0pKEdyYXBoaWNzUGF0aFdpbmRpbmcgfHwgKEdyYXBoaWNzUGF0aFdpbmRpbmcgPSB7fSkpO1xuZXhwb3J0IHZhciBHcmFwaGljc1BhdGhDb21tYW5kO1xuKGZ1bmN0aW9uIChHcmFwaGljc1BhdGhDb21tYW5kKSB7XG4gICAgR3JhcGhpY3NQYXRoQ29tbWFuZFtHcmFwaGljc1BhdGhDb21tYW5kW1wiTk9fT1BcIl0gPSAwXSA9IFwiTk9fT1BcIjtcbiAgICBHcmFwaGljc1BhdGhDb21tYW5kW0dyYXBoaWNzUGF0aENvbW1hbmRbXCJNT1ZFX1RPXCJdID0gMV0gPSBcIk1PVkVfVE9cIjtcbiAgICBHcmFwaGljc1BhdGhDb21tYW5kW0dyYXBoaWNzUGF0aENvbW1hbmRbXCJMSU5FX1RPXCJdID0gMl0gPSBcIkxJTkVfVE9cIjtcbiAgICBHcmFwaGljc1BhdGhDb21tYW5kW0dyYXBoaWNzUGF0aENvbW1hbmRbXCJDVVJWRV9UT1wiXSA9IDNdID0gXCJDVVJWRV9UT1wiO1xuICAgIEdyYXBoaWNzUGF0aENvbW1hbmRbR3JhcGhpY3NQYXRoQ29tbWFuZFtcIldJREVfTU9WRV9UT1wiXSA9IDRdID0gXCJXSURFX01PVkVfVE9cIjtcbiAgICBHcmFwaGljc1BhdGhDb21tYW5kW0dyYXBoaWNzUGF0aENvbW1hbmRbXCJXSURFX0xJTkVfVE9cIl0gPSA1XSA9IFwiV0lERV9MSU5FX1RPXCI7XG4gICAgR3JhcGhpY3NQYXRoQ29tbWFuZFtHcmFwaGljc1BhdGhDb21tYW5kW1wiQ1VCSUNfQ1VSVkVfVE9cIl0gPSA2XSA9IFwiQ1VCSUNfQ1VSVkVfVE9cIjtcbn0pKEdyYXBoaWNzUGF0aENvbW1hbmQgfHwgKEdyYXBoaWNzUGF0aENvbW1hbmQgPSB7fSkpO1xuZXhwb3J0IHZhciBHcmFkaWVudFR5cGU7XG4oZnVuY3Rpb24gKEdyYWRpZW50VHlwZSkge1xuICAgIEdyYWRpZW50VHlwZVtcIkxJTkVBUlwiXSA9IFwibGluZWFyXCI7XG4gICAgR3JhZGllbnRUeXBlW1wiUkFESUFMXCJdID0gXCJyYWRpYWxcIjtcbn0pKEdyYWRpZW50VHlwZSB8fCAoR3JhZGllbnRUeXBlID0ge30pKTtcbmV4cG9ydCB2YXIgSW50ZXJwb2xhdGlvbk1ldGhvZDtcbihmdW5jdGlvbiAoSW50ZXJwb2xhdGlvbk1ldGhvZCkge1xuICAgIEludGVycG9sYXRpb25NZXRob2RbXCJMSU5FQVJfUkdCXCJdID0gXCJsaW5lYXJSZ2JcIjtcbiAgICBJbnRlcnBvbGF0aW9uTWV0aG9kW1wiUkdCXCJdID0gXCJyZ2JcIjtcbn0pKEludGVycG9sYXRpb25NZXRob2QgfHwgKEludGVycG9sYXRpb25NZXRob2QgPSB7fSkpO1xuZXhwb3J0IHZhciBTcHJlYWRNZXRob2Q7XG4oZnVuY3Rpb24gKFNwcmVhZE1ldGhvZCkge1xuICAgIFNwcmVhZE1ldGhvZFtcIlBBRFwiXSA9IFwicGFkXCI7XG4gICAgU3ByZWFkTWV0aG9kW1wiUkVGTEVDVFwiXSA9IFwicmVmbGVjdFwiO1xuICAgIFNwcmVhZE1ldGhvZFtcIlJFUEVBVFwiXSA9IFwicmVwZWF0XCI7XG59KShTcHJlYWRNZXRob2QgfHwgKFNwcmVhZE1ldGhvZCA9IHt9KSk7XG5leHBvcnQgdmFyIExpbmVTY2FsZU1vZGU7XG4oZnVuY3Rpb24gKExpbmVTY2FsZU1vZGUpIHtcbiAgICBMaW5lU2NhbGVNb2RlW1wiTk9STUFMXCJdID0gXCJub3JtYWxcIjtcbiAgICBMaW5lU2NhbGVNb2RlW1wiTk9ORVwiXSA9IFwibm9uZVwiO1xuICAgIExpbmVTY2FsZU1vZGVbXCJWRVJUSUNBTFwiXSA9IFwidmVydGljYWxcIjtcbiAgICBMaW5lU2NhbGVNb2RlW1wiSE9SSVpPTlRBTFwiXSA9IFwiaG9yaXpvbnRhbFwiO1xufSkoTGluZVNjYWxlTW9kZSB8fCAoTGluZVNjYWxlTW9kZSA9IHt9KSk7XG5leHBvcnQgdmFyIFRyaWFuZ2xlQ3VsbGluZztcbihmdW5jdGlvbiAoVHJpYW5nbGVDdWxsaW5nKSB7XG4gICAgVHJpYW5nbGVDdWxsaW5nW1wiTkVHQVRJVkVcIl0gPSBcIm5lZ2F0aXZlXCI7XG4gICAgVHJpYW5nbGVDdWxsaW5nW1wiTk9ORVwiXSA9IFwibm9uZVwiO1xuICAgIFRyaWFuZ2xlQ3VsbGluZ1tcIlBPU0lUSVZFXCJdID0gXCJwb3NpdGl2ZVwiO1xufSkoVHJpYW5nbGVDdWxsaW5nIHx8IChUcmlhbmdsZUN1bGxpbmcgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWlc1MWJYTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12Wlc1MWJYTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1RVRkJUU3hEUVVGT0xFbEJRVmtzVTBGSldEdEJRVXBFTEZkQlFWa3NVMEZCVXp0SlFVTndRaXd3UWtGQllTeERRVUZCTzBsQlEySXNORUpCUVdVc1EwRkJRVHRKUVVObUxEaENRVUZwUWl4RFFVRkJPMEZCUTJ4Q0xFTkJRVU1zUlVGS1Z5eFRRVUZUTEV0QlFWUXNVMEZCVXl4UlFVbHdRanRCUVVWRUxFMUJRVTBzUTBGQlRpeEpRVUZaTEZWQlNWZzdRVUZLUkN4WFFVRlpMRlZCUVZVN1NVRkRja0lzTmtKQlFXVXNRMEZCUVR0SlFVTm1MRFpDUVVGbExFTkJRVUU3U1VGRFppdzJRa0ZCWlN4RFFVRkJPMEZCUTJoQ0xFTkJRVU1zUlVGS1Z5eFZRVUZWTEV0QlFWWXNWVUZCVlN4UlFVbHlRanRCUVVWRUxFMUJRVTBzUTBGQlRpeEpRVUZaTEcxQ1FVZFlPMEZCU0VRc1YwRkJXU3h0UWtGQmJVSTdTVUZET1VJc01rTkJRVzlDTEVOQlFVRTdTVUZEY0VJc01rTkJRVzlDTEVOQlFVRTdRVUZEY2tJc1EwRkJReXhGUVVoWExHMUNRVUZ0UWl4TFFVRnVRaXh0UWtGQmJVSXNVVUZIT1VJN1FVRkZSQ3hOUVVGTkxFTkJRVTRzU1VGQldTeHRRa0ZSV0R0QlFWSkVMRmRCUVZrc2JVSkJRVzFDTzBsQlF6bENMQ3RFUVVGVExFTkJRVUU3U1VGRFZDeHRSVUZCVnl4RFFVRkJPMGxCUTFnc2JVVkJRVmNzUTBGQlFUdEpRVU5ZTEhGRlFVRlpMRU5CUVVFN1NVRkRXaXcyUlVGQlowSXNRMEZCUVR0SlFVTm9RaXcyUlVGQlowSXNRMEZCUVR0SlFVTm9RaXhwUmtGQmEwSXNRMEZCUVR0QlFVTnVRaXhEUVVGRExFVkJVbGNzYlVKQlFXMUNMRXRCUVc1Q0xHMUNRVUZ0UWl4UlFWRTVRanRCUVVWRUxFMUJRVTBzUTBGQlRpeEpRVUZaTEZsQlIxZzdRVUZJUkN4WFFVRlpMRmxCUVZrN1NVRkRka0lzYVVOQlFXbENMRU5CUVVFN1NVRkRha0lzYVVOQlFXbENMRU5CUVVFN1FVRkRiRUlzUTBGQlF5eEZRVWhYTEZsQlFWa3NTMEZCV2l4WlFVRlpMRkZCUjNaQ08wRkJSVVFzVFVGQlRTeERRVUZPTEVsQlFWa3NiVUpCUjFnN1FVRklSQ3hYUVVGWkxHMUNRVUZ0UWp0SlFVTTVRaXdyUTBGQmQwSXNRMEZCUVR0SlFVTjRRaXhyUTBGQlZ5eERRVUZCTzBGQlExb3NRMEZCUXl4RlFVaFhMRzFDUVVGdFFpeExRVUZ1UWl4dFFrRkJiVUlzVVVGSE9VSTdRVUZGUkN4TlFVRk5MRU5CUVU0c1NVRkJXU3haUVVsWU8wRkJTa1FzVjBGQldTeFpRVUZaTzBsQlEzWkNMREpDUVVGWExFTkJRVUU3U1VGRFdDeHRRMEZCYlVJc1EwRkJRVHRKUVVOdVFpeHBRMEZCYVVJc1EwRkJRVHRCUVVOc1FpeERRVUZETEVWQlNsY3NXVUZCV1N4TFFVRmFMRmxCUVZrc1VVRkpka0k3UVVGRlJDeE5RVUZOTEVOQlFVNHNTVUZCV1N4aFFVdFlPMEZCVEVRc1YwRkJXU3hoUVVGaE8wbEJRM2hDTEd0RFFVRnBRaXhEUVVGQk8wbEJRMnBDTERoQ1FVRmhMRU5CUVVFN1NVRkRZaXh6UTBGQmNVSXNRMEZCUVR0SlFVTnlRaXd3UTBGQmVVSXNRMEZCUVR0QlFVTXhRaXhEUVVGRExFVkJURmNzWVVGQllTeExRVUZpTEdGQlFXRXNVVUZMZUVJN1FVRkZSQ3hOUVVGTkxFTkJRVTRzU1VGQldTeGxRVWxZTzBGQlNrUXNWMEZCV1N4bFFVRmxPMGxCUXpGQ0xIZERRVUZ4UWl4RFFVRkJPMGxCUTNKQ0xHZERRVUZoTEVOQlFVRTdTVUZEWWl4M1EwRkJjVUlzUTBGQlFUdEJRVU4wUWl4RFFVRkRMRVZCU2xjc1pVRkJaU3hMUVVGbUxHVkJRV1VzVVVGSk1VSWlmUT09IiwiaW1wb3J0IEtleWJvYXJkIGZyb20gJy4vS2V5Ym9hcmQnO1xuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbic7XG5pbXBvcnQgTW91c2UgZnJvbSAnLi9Nb3VzZSc7XG5leHBvcnQgeyBLZXlib2FyZCwgU2NyZWVuLCBNb3VzZSwgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUMEZCVHl4UlFVRlJMRTFCUVUwc1dVRkJXU3hEUVVGRE8wRkJRMnhETEU5QlFVOHNUVUZCVFN4TlFVRk5MRlZCUVZVc1EwRkJRenRCUVVNNVFpeFBRVUZQTEV0QlFVc3NUVUZCVFN4VFFVRlRMRU5CUVVNN1FVRkZOVUlzVDBGQlR5eEZRVU5PTEZGQlFWRXNSVUZEVWl4TlFVRk5MRVZCUTA0c1MwRkJTeXhIUVVOTUxFTkJRVU1pZlE9PSIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IE1PVVNFX01PVkUgfSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgRGlzcGxheU9iamVjdENvbnRhaW5lciBmcm9tICcuL0Rpc3BsYXlPYmplY3RDb250YWluZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgRGlzcGxheU9iamVjdENvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2RyYWdCb3VuZHMgPSBudWxsO1xuICAgICAgICB0aGlzLl9kcmFnWCA9IDA7XG4gICAgICAgIHRoaXMuX2RyYWdZID0gMDtcbiAgICAgICAgdGhpcy5fZHJhZ0xpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5idXR0b25Nb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXNlSGFuZEN1cnNvciA9IGZhbHNlO1xuICAgIH1cbiAgICBzdGFydERyYWcobG9ja0NlbnRlciA9IGZhbHNlLCBib3VuZHMgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHsgc3RhZ2UgfSA9IHRoaXM7XG4gICAgICAgIGlmICghc3RhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kcmFnQm91bmRzID0gYm91bmRzO1xuICAgICAgICB0aGlzLl9kcmFnWCA9IHRoaXMubW91c2VYO1xuICAgICAgICB0aGlzLl9kcmFnWSA9IHRoaXMubW91c2VZO1xuICAgICAgICBpZiAoIXRoaXMuX2RyYWdMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5fZHJhZ0xpc3RlbmVyID0gdGhpcy5kcmFnTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHN0YWdlLmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VfTU9WRSwgdGhpcy5fZHJhZ0xpc3RlbmVyKTtcbiAgICB9XG4gICAgc3RvcERyYWcoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RhZ2UgfSA9IHRoaXM7XG4gICAgICAgIGlmICghc3RhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZHJhZ0xpc3RlbmVyKSB7XG4gICAgICAgICAgICBzdGFnZS5yZW1vdmVFdmVudExpc3RlbmVyKE1PVVNFX01PVkUsIHRoaXMuX2RyYWdMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHJhZ01vdmUoKSB7XG4gICAgICAgIGlmICghdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwb2ludCA9IG5ldyBQb2ludCh0aGlzLm1vdXNlWCAtIHRoaXMuX2RyYWdYLCB0aGlzLm1vdXNlWSAtIHRoaXMuX2RyYWdZKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uY29uY2F0ZW5hdGVkTWF0cml4LnRyYW5zZm9ybVBvaW50VG8ocG9pbnQsIHBvaW50KTtcbiAgICAgICAgdGhpcy5wYXJlbnQudHJhbnNmb3JtLmNvbmNhdGVuYXRlZE1hdHJpeC50cmFuc2Zvcm1JbnZlcnNlUG9pbnRUbyhwb2ludCwgcG9pbnQpO1xuICAgICAgICB0aGlzLnggPSBwb2ludC54O1xuICAgICAgICB0aGlzLnkgPSBwb2ludC55O1xuICAgICAgICBpZiAodGhpcy5fZHJhZ0JvdW5kcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy54IDwgdGhpcy5fZHJhZ0JvdW5kcy5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5fZHJhZ0JvdW5kcy5sZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy54ID4gdGhpcy5fZHJhZ0JvdW5kcy5yaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMuX2RyYWdCb3VuZHMucmlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy55IDwgdGhpcy5fZHJhZ0JvdW5kcy50b3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSB0aGlzLl9kcmFnQm91bmRzLnRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMueSA+IHRoaXMuX2RyYWdCb3VuZHMuYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5fZHJhZ0JvdW5kcy5ib3R0b207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl1ZEdGcGJtVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDBOdmJuUmhhVzVsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hQUVVGUExFVkJRV0VzUzBGQlN5eEZRVUZGTEUxQlFVMHNWMEZCVnl4RFFVRkRPMEZCUlRkRExFOUJRVThzUlVGQlJTeFZRVUZWTEVWQlFVVXNUVUZCVFN4VlFVRlZMRU5CUVVNN1FVRkRkRU1zVDBGQlR5eHpRa0ZCYzBJc1RVRkJUU3d3UWtGQk1FSXNRMEZCUXp0QlFVVTVSQ3hOUVVGTkxFTkJRVU1zVDBGQlR5eFBRVUZQTEZOQlFWVXNVMEZCVVN4elFrRkJjMEk3U1VGVk5VUTdVVUZEUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVZaRUxHZENRVUZYTEVkQlFYRkNMRWxCUVVrc1EwRkJRenRSUVVOeVF5eFhRVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTFnc1YwRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5ZTEd0Q1FVRmhMRWRCUVdkRExFbEJRVWtzUTBGQlF6dFJRVWN4UkN4bFFVRlZMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRMjVDTEd0Q1FVRmhMRWRCUVVjc1MwRkJTeXhEUVVGRE8wbEJTWFJDTEVOQlFVTTdTVUZIUkN4VFFVRlRMRU5CUVVNc1lVRkJjMElzUzBGQlN5eEZRVUZGTEZOQlFUSkNMRWxCUVVrN1VVRkRja1VzVFVGQlRTeEZRVUZGTEV0QlFVc3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVWMlFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZPMWxCUTFnc1QwRkJUenRUUVVOUU8xRkJSVVFzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkZNVUlzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRekZDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVVV4UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUlVGQlJUdFpRVU40UWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJRemxETzFGQlJVUXNTMEZCU3l4RFFVRkRMR2RDUVVGblFpeERRVUZETEZWQlFWVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03U1VGRGVFUXNRMEZCUXp0SlFVVkVMRkZCUVZFN1VVRkRVQ3hOUVVGTkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUlhaQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdXVUZEV0N4UFFVRlBPMU5CUTFBN1VVRkZSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eGhRVUZoTEVWQlFVVTdXVUZEZGtJc1MwRkJTeXhEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRlZCUVZVc1JVRkJSU3hKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdVMEZETVVRN1NVRkRSaXhEUVVGRE8wbEJSVVFzVVVGQlVUdFJRVU5RTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJRMnBDTEU5QlFVODdVMEZEVUR0UlFVVkVMRTFCUVUwc1MwRkJTeXhIUVVGSExFbEJRVWtzUzBGQlN5eERRVU4wUWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlEzcENMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZEZWtJc1EwRkJRenRSUVVWR0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1MwRkJTeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlJXcEZMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEd0Q1FVRnJRaXhEUVVGRExIVkNRVUYxUWl4RFFVRkRMRXRCUVVzc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVVV2UlN4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtJc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUldwQ0xFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NTVUZCU1N4SlFVRkpMRVZCUVVVN1dVRkROMElzU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTzJkQ1FVTnVReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRE8yRkJReTlDTzJsQ1FVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRXRCUVVzc1JVRkJSVHRuUWtGRE0wTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXp0aFFVTm9RenRaUVVWRUxFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFZEJRVWNzUlVGQlJUdG5Ra0ZEYkVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1EwRkJRenRoUVVNNVFqdHBRa0ZCVFN4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4TlFVRk5MRVZCUVVVN1owSkJRelZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTTdZVUZEYWtNN1UwRkRSRHRKUVVOR0xFTkJRVU03UTBGRFJDSjkiLCJpbXBvcnQgeyBFdmVudERpc3BhdGNoZXIgfSBmcm9tICdAZTJkL2V2ZW50cyc7XG5pbXBvcnQgeyBSZWN0YW5nbGUsIFRPX0RFR1JFRSwgVE9fUkFESUFOLCBNYXRyaXgsIH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi9UcmFuc2Zvcm0nO1xuaW1wb3J0IHsgQmxlbmRNb2RlIH0gZnJvbSAnLi9lbnVtcyc7XG5sZXQgZ2xvYmFsSWQgPSAwO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheU9iamVjdCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX21hc2sgPSBudWxsO1xuICAgICAgICB0aGlzLl9pc01hc2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsUmVjdCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuaWQgPSBnbG9iYWxJZCsrO1xuICAgICAgICB0aGlzLm5hbWUgPSBgaW5zdGFuY2Uke3RoaXMuaWR9YDtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYWNoZUFzQml0bWFwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmxlbmRNb2RlID0gQmxlbmRNb2RlLk5PUk1BTDtcbiAgICAgICAgdGhpcy5fdHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybSh0aGlzLmdldFBhcmVudFRyYW5zZm9ybS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgZ2V0IHRyYW5zZm9ybSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zZm9ybTtcbiAgICB9XG4gICAgZ2V0IGFscGhhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNmb3JtLmNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICB9XG4gICAgc2V0IGFscGhhKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IHRoaXMuX3RyYW5zZm9ybTtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNmb3JtLmNvbG9yVHJhbnNmb3JtID0gY29sb3JUcmFuc2Zvcm07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGlzTWFzaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzTWFzaztcbiAgICB9XG4gICAgZ2V0IG1hc2soKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXNrO1xuICAgIH1cbiAgICBzZXQgbWFzayh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5fbWFzayAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFzay5faXNNYXNrID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9tYXNrID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWFzaykge1xuICAgICAgICAgICAgICAgIHRoaXMuX21hc2suX2lzTWFzayA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2Zvcm0ubWF0cml4LnR4O1xuICAgIH1cbiAgICBzZXQgeCh2YWx1ZSkge1xuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSB0aGlzLl90cmFuc2Zvcm07XG4gICAgICAgIGlmIChtYXRyaXgudHggIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBtYXRyaXgudHggPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zZm9ybS5tYXRyaXggPSBtYXRyaXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2Zvcm0ubWF0cml4LnR5O1xuICAgIH1cbiAgICBzZXQgeSh2YWx1ZSkge1xuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSB0aGlzLl90cmFuc2Zvcm07XG4gICAgICAgIGlmIChtYXRyaXgudHkgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBtYXRyaXgudHkgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zZm9ybS5tYXRyaXggPSBtYXRyaXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHJvdGF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNmb3JtLm1hdHJpeC5vcnRYLmFuZ2xlICogVE9fREVHUkVFO1xuICAgIH1cbiAgICBzZXQgcm90YXRpb24odmFsdWUpIHtcbiAgICAgICAgaWYgKE51bWJlci5pc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvdGF0aW9uIH0gPSB0aGlzO1xuICAgICAgICBpZiAocm90YXRpb24gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9ICh2YWx1ZSAtIHJvdGF0aW9uKSAqIFRPX1JBRElBTjtcbiAgICAgICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSB0aGlzLl90cmFuc2Zvcm07XG4gICAgICAgICAgICBtYXRyaXgucm90YXRlKGRlbHRhKTtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zZm9ybS5tYXRyaXggPSBtYXRyaXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHNjYWxlWCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zZm9ybS5tYXRyaXgub3J0WC5sZW5ndGg7XG4gICAgfVxuICAgIHNldCBzY2FsZVgodmFsdWUpIHtcbiAgICAgICAgaWYgKE51bWJlci5pc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zY2FsZVggIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gdGhpcy5fdHJhbnNmb3JtO1xuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBtYXRyaXgub3J0WDtcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gdmFsdWUgLyBwb2ludC5sZW5ndGg7XG4gICAgICAgICAgICBwb2ludC54ICo9IHNjYWxlO1xuICAgICAgICAgICAgcG9pbnQueSAqPSBzY2FsZTtcbiAgICAgICAgICAgIG1hdHJpeC5vcnRYID0gcG9pbnQ7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2Zvcm0ubWF0cml4ID0gbWF0cml4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBzY2FsZVkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2Zvcm0ubWF0cml4Lm9ydFkubGVuZ3RoO1xuICAgIH1cbiAgICBzZXQgc2NhbGVZKHZhbHVlKSB7XG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2NhbGVZICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IHRoaXMuX3RyYW5zZm9ybTtcbiAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gbWF0cml4Lm9ydFk7XG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IHZhbHVlIC8gcG9pbnQubGVuZ3RoO1xuICAgICAgICAgICAgcG9pbnQueCAqPSBzY2FsZTtcbiAgICAgICAgICAgIHBvaW50LnkgKj0gc2NhbGU7XG4gICAgICAgICAgICBtYXRyaXgub3J0WSA9IHBvaW50O1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNmb3JtLm1hdHJpeCA9IG1hdHJpeDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kcyA9IG5ldyBSZWN0YW5nbGUoKTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVCb3VuZHMoYm91bmRzLCB0aGlzLl90cmFuc2Zvcm0ubWF0cml4KTtcbiAgICAgICAgcmV0dXJuIGJvdW5kcy53aWR0aDtcbiAgICB9XG4gICAgc2V0IHdpZHRoKHZhbHVlKSB7XG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYm91bmRzID0gbmV3IFJlY3RhbmdsZSgpO1xuICAgICAgICBjb25zdCBtYXRyaXggPSBuZXcgTWF0cml4KCk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlQm91bmRzKGJvdW5kcywgbWF0cml4KTtcbiAgICAgICAgaWYgKGJvdW5kcy53aWR0aCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGVYID0gdmFsdWUgLyBib3VuZHMud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlWCA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgY29uc3QgYm91bmRzID0gbmV3IFJlY3RhbmdsZSgpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZUJvdW5kcyhib3VuZHMsIHRoaXMuX3RyYW5zZm9ybS5tYXRyaXgpO1xuICAgICAgICByZXR1cm4gYm91bmRzLmhlaWdodDtcbiAgICB9XG4gICAgc2V0IGhlaWdodCh2YWx1ZSkge1xuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJvdW5kcyA9IG5ldyBSZWN0YW5nbGUoKTtcbiAgICAgICAgY29uc3QgbWF0cml4ID0gbmV3IE1hdHJpeCgpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZUJvdW5kcyhib3VuZHMsIG1hdHJpeCk7XG4gICAgICAgIGlmIChib3VuZHMuaGVpZ2h0ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zY2FsZVkgPSB2YWx1ZSAvIGJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlWSA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IG1vdXNlWCgpIHtcbiAgICAgICAgY29uc3QgeyBzdGFnZSB9ID0gdGhpcztcbiAgICAgICAgaWYgKHN0YWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNmb3JtLmNvbmNhdGVuYXRlZE1hdHJpeC50cmFuc2Zvcm1JbnZlcnNlWChzdGFnZS5tb3VzZVgsIHN0YWdlLm1vdXNlWSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGdldCBtb3VzZVkoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RhZ2UgfSA9IHRoaXM7XG4gICAgICAgIGlmIChzdGFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zZm9ybS5jb25jYXRlbmF0ZWRNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVgoc3RhZ2UubW91c2VYLCBzdGFnZS5tb3VzZVkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBnZXQgc2Nyb2xsUmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFJlY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxSZWN0LmNsb25lKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHNldCBzY3JvbGxSZWN0KHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxSZWN0ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsUmVjdCA9IHZhbHVlID8gdmFsdWUuY2xvbmUoKSA6IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgICB9XG4gICAgZ2V0IHJvb3QoKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXM7XG4gICAgICAgIHdoaWxlICh2YWx1ZS5fcGFyZW50KSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLl9wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBnZXQgc3RhZ2UoKSB7XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcztcbiAgICAgICAgaWYgKCdzdGFnZVdpZHRoJyBpbiByb290KSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY2FsY3VsYXRlQm91bmRzKGJvdW5kcywgbWF0cml4KSB7XG4gICAgfVxuICAgIGdldFBhcmVudFRyYW5zZm9ybSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5fdHJhbnNmb3JtO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZW5kZXIoY29udGV4dCkge1xuICAgICAgICBjb25zdCBhbHBoYSA9IHRoaXMuX3RyYW5zZm9ybS5jb25jYXRlbmF0ZWRDb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlIHx8IHRoaXMuX2lzTWFzayB8fCBhbHBoYSA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFJlY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFJlY3QgPSB0aGlzLl9zY3JvbGxSZWN0O1xuICAgICAgICAgICAgY29uc3QgbWF0cml4ID0gdGhpcy5fdHJhbnNmb3JtLmNvbmNhdGVuYXRlZE1hdHJpeDtcbiAgICAgICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0LnJlY3Qoc2Nyb2xsUmVjdC54LCBzY3JvbGxSZWN0LnksIHNjcm9sbFJlY3Qud2lkdGgsIHNjcm9sbFJlY3QuaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQuY2xpcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9tYXNrKSB7XG4gICAgICAgICAgICBjb25zdCBtYXNrID0gdGhpcy5fbWFzaztcbiAgICAgICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIG1hc2sucmVuZGVyQ29udGVudChjb250ZXh0KTtcbiAgICAgICAgICAgIGNvbnRleHQuY2xpcCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyQ29udGVudChjb250ZXh0KTtcbiAgICAgICAgaWYgKHRoaXMuX21hc2spIHtcbiAgICAgICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxSZWN0KSB7XG4gICAgICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXJDb250ZW50KGNvbnRleHQpIHtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSR2x6Y0d4aGVVOWlhbVZqZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OUVhWE53YkdGNVQySnFaV04wTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRTlCUVU4c1JVRkJSU3hsUVVGbExFVkJRVVVzVFVGQlRTeGhRVUZoTEVOQlFVTTdRVUZGT1VNc1QwRkJUeXhGUVVOT0xGTkJRVk1zUlVGRFZDeFRRVUZUTEVWQlExUXNVMEZCVXl4RlFVTlVMRTFCUVUwc1IwRkRUaXhOUVVGTkxGZEJRVmNzUTBGQlF6dEJRVU51UWl4UFFVRlBMRk5CUVZNc1RVRkJUU3hoUVVGaExFTkJRVU03UVVGRGNFTXNUMEZCVHl4RlFVRkZMRk5CUVZNc1JVRkJSU3hOUVVGTkxGTkJRVk1zUTBGQlF6dEJRVVZ3UXl4SlFVRkpMRkZCUVZFc1IwRkJWeXhEUVVGRExFTkJRVU03UVVGRmVrSXNUVUZCVFN4RFFVRkRMRTlCUVU4c1QwRkJaMElzWVVGQll5eFRRVUZSTEdWQlFXVTdTVUZqYkVVN1VVRkRReXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRV0pFTEZWQlFVc3NSMEZCZVVJc1NVRkJTU3hEUVVGRE8xRkJRMjVETEZsQlFVOHNSMEZCV1N4TFFVRkxMRU5CUVVNN1VVRkRla0lzWjBKQlFWY3NSMEZCY1VJc1NVRkJTU3hEUVVGRE8xRkJSVGxDTEZsQlFVOHNSMEZCZVVJc1NVRkJTU3hEUVVGRE8xRkJSVE5ETEU5QlFVVXNSMEZCUnl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVONlFpeFRRVUZKTEVkQlFVY3NWMEZCVnl4SlFVRkpMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03VVVGRE5VSXNXVUZCVHl4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVObUxHdENRVUZoTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTNSQ0xHTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCU1RWQ0xFbEJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzSkZMRU5CUVVNN1NVRkZSQ3hKUVVGSkxGTkJRVk03VVVGRFdpeFBRVUZQTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNN1NVRkRlRUlzUTBGQlF6dEpRVVZFTEVsQlFVa3NTMEZCU3p0UlFVTlNMRTlCUVU4c1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eGpRVUZqTEVOQlFVTXNaVUZCWlN4RFFVRkRPMGxCUTNaRUxFTkJRVU03U1VGRlJDeEpRVUZKTEV0QlFVc3NRMEZCUXl4TFFVRmhPMUZCUTNSQ0xFMUJRVTBzUlVGQlJTeGpRVUZqTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRE8xRkJRek5ETEVsQlFVa3NZMEZCWXl4RFFVRkRMR1ZCUVdVc1MwRkJTeXhMUVVGTExFVkJRVVU3V1VGRE4wTXNZMEZCWXl4RFFVRkRMR1ZCUVdVc1IwRkJSeXhMUVVGTExFTkJRVU03V1VGRGRrTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhqUVVGakxFZEJRVWNzWTBGQll5eERRVUZETzFOQlEyaEVPMGxCUTBZc1EwRkJRenRKUVVWRUxFbEJRVWtzVFVGQlRUdFJRVU5VTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVOeVFpeERRVUZETzBsQlJVUXNTVUZCU1N4SlFVRkpPMUZCUTFBc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzBsQlEyNUNMRU5CUVVNN1NVRkZSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUV5UWp0UlFVTnVReXhKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEV0QlFVc3NTMEZCU3l4RlFVRkZPMWxCUTNwQ0xFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlR0blFrRkRaaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNSMEZCUnl4TFFVRkxMRU5CUVVNN1lVRkRNMEk3V1VGRlJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRenRaUVVWdVFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1owSkJRMllzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRE8yRkJRekZDTzFOQlEwUTdTVUZEUml4RFFVRkRPMGxCUlVRc1NVRkJTU3hEUVVGRE8xRkJRMG9zVDBGQlR5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU03U1VGRGJFTXNRMEZCUXp0SlFVVkVMRWxCUVVrc1EwRkJReXhEUVVGRExFdEJRV0U3VVVGRGJFSXNTVUZCU1N4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlEzaENMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRFZqdFJRVVZFTEUxQlFVMHNSVUZCUlN4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETzFGQlEyNURMRWxCUVVrc1RVRkJUU3hEUVVGRExFVkJRVVVzUzBGQlN5eExRVUZMTEVWQlFVVTdXVUZEZUVJc1RVRkJUU3hEUVVGRExFVkJRVVVzUjBGQlJ5eExRVUZMTEVOQlFVTTdXVUZEYkVJc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMU5CUTJoRE8wbEJRMFlzUTBGQlF6dEpRVVZFTEVsQlFVa3NRMEZCUXp0UlFVTktMRTlCUVU4c1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRPMGxCUTJ4RExFTkJRVU03U1VGRlJDeEpRVUZKTEVOQlFVTXNRMEZCUXl4TFFVRmhPMUZCUTJ4Q0xFbEJRVWtzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVONFFpeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUTFZN1VVRkZSQ3hOUVVGTkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJRenRSUVVOdVF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4RlFVRkZMRXRCUVVzc1MwRkJTeXhGUVVGRk8xbEJRM2hDTEUxQlFVMHNRMEZCUXl4RlFVRkZMRWRCUVVjc1MwRkJTeXhEUVVGRE8xbEJRMnhDTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dFRRVU5vUXp0SlFVTkdMRU5CUVVNN1NVRkZSQ3hKUVVGSkxGRkJRVkU3VVVGRFdDeFBRVUZQTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NVMEZCVXl4RFFVRkRPMGxCUTNSRUxFTkJRVU03U1VGRlJDeEpRVUZKTEZGQlFWRXNRMEZCUXl4TFFVRmhPMUZCUTNwQ0xFbEJRVWtzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVONFFpeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUTFZN1VVRkZSQ3hOUVVGTkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUXpGQ0xFbEJRVWtzVVVGQlVTeExRVUZMTEV0QlFVc3NSVUZCUlR0WlFVTjJRaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eERRVUZETEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1IwRkJSeXhUUVVGVExFTkJRVU03V1VGRE4wTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTTdXVUZEYmtNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTnlRaXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1UwRkRhRU03U1VGRFJpeERRVUZETzBsQlJVUXNTVUZCU1N4TlFVRk5PMUZCUTFRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRek5ETEVOQlFVTTdTVUZGUkN4SlFVRkpMRTFCUVUwc1EwRkJReXhMUVVGaE8xRkJRM1pDTEVsQlFVa3NUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU40UWl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRMVk3VVVGRlJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVVzc1MwRkJTeXhGUVVGRk8xbEJRekZDTEUxQlFVMHNSVUZCUlN4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETzFsQlEyNURMRTFCUVUwc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTTdXVUZETVVJc1RVRkJUU3hMUVVGTExFZEJRVWNzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNN1dVRkRia01zUzBGQlN5eERRVUZETEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNN1dVRkRha0lzUzBGQlN5eERRVUZETEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNN1dVRkRha0lzVFVGQlRTeERRVUZETEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNN1dVRkRjRUlzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xTkJRMmhETzBsQlEwWXNRMEZCUXp0SlFVVkVMRWxCUVVrc1RVRkJUVHRSUVVOVUxFOUJRVThzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU16UXl4RFFVRkRPMGxCUlVRc1NVRkJTU3hOUVVGTkxFTkJRVU1zUzBGQllUdFJRVU4yUWl4SlFVRkpMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEZUVJc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU5XTzFGQlJVUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hMUVVGTExFdEJRVXNzUlVGQlJUdFpRVU14UWl4TlFVRk5MRVZCUVVVc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXp0WlFVTnVReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRPMWxCUXpGQ0xFMUJRVTBzUzBGQlN5eEhRVUZITEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRE8xbEJRMjVETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRE8xbEJRMnBDTEV0QlFVc3NRMEZCUXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRE8xbEJRMnBDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRE8xbEJRM0JDTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dFRRVU5vUXp0SlFVTkdMRU5CUVVNN1NVRkZSQ3hKUVVGSkxFdEJRVXM3VVVGRFVpeE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMRk5CUVZNc1JVRkJSU3hEUVVGRE8xRkJReTlDTEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRja1FzVDBGQlR5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTNKQ0xFTkJRVU03U1VGRlJDeEpRVUZKTEV0QlFVc3NRMEZCUXl4TFFVRmhPMUZCUTNSQ0xFbEJRVWtzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVONFFpeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUTFZN1VVRkZSQ3hOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEZOQlFWTXNSVUZCUlN4RFFVRkRPMUZCUXk5Q0xFMUJRVTBzVFVGQlRTeEhRVUZITEVsQlFVa3NUVUZCVFN4RlFVRkZMRU5CUVVNN1VVRkROVUlzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRmNrTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1MwRkJTeXhMUVVGTExFdEJRVXNzUlVGQlJUdFpRVU16UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRPMU5CUTI1RE8yRkJRVTA3V1VGRFRpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVOb1FqdEpRVU5HTEVOQlFVTTdTVUZGUkN4SlFVRkpMRTFCUVUwN1VVRkRWQ3hOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEZOQlFWTXNSVUZCUlN4RFFVRkRPMUZCUXk5Q0xFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEY2tRc1QwRkJUeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRkZSQ3hKUVVGSkxFMUJRVTBzUTBGQlF5eExRVUZoTzFGQlEzWkNMRWxCUVVrc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTjRRaXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlExWTdVVUZGUkN4TlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxGTkJRVk1zUlVGQlJTeERRVUZETzFGQlF5OUNMRTFCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzVFVGQlRTeEZRVUZGTEVOQlFVTTdVVUZETlVJc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkZja01zU1VGQlNTeE5RVUZOTEVOQlFVTXNUVUZCVFN4TFFVRkxMRXRCUVVzc1JVRkJSVHRaUVVNMVFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETzFOQlEzQkRPMkZCUVUwN1dVRkRUaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTm9RanRKUVVOR0xFTkJRVU03U1VGRlJDeEpRVUZKTEUxQlFVMDdVVUZEVkN4TlFVRk5MRVZCUVVVc1MwRkJTeXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEzWkNMRWxCUVVrc1MwRkJTeXhGUVVGRk8xbEJRMVlzVDBGQlR5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMR3RDUVVGclFpeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xTkJRM2hHTzFGQlEwUXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkRWaXhEUVVGRE8wbEJSVVFzU1VGQlNTeE5RVUZOTzFGQlExUXNUVUZCVFN4RlFVRkZMRXRCUVVzc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU4yUWl4SlFVRkpMRXRCUVVzc1JVRkJSVHRaUVVOV0xFOUJRVThzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4clFrRkJhMElzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRUUVVONFJqdFJRVU5FTEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTFZc1EwRkJRenRKUVVWRUxFbEJRVWtzVlVGQlZUdFJRVU5pTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHRaUVVOeVFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03VTBGRGFFTTdVVUZEUkN4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVOaUxFTkJRVU03U1VGRlJDeEpRVUZKTEZWQlFWVXNRMEZCUXl4TFFVRjFRanRSUVVOeVF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRXRCUVVzc1MwRkJTeXhGUVVGRk8xbEJReTlDTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dFRRVU5vUkR0SlFVTkdMRU5CUVVNN1NVRkZSQ3hKUVVGSkxFMUJRVTA3VVVGRFZDeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNN1NVRkRja0lzUTBGQlF6dEpRVVZFTEVsQlFVa3NTVUZCU1R0UlFVTlFMRWxCUVVrc1MwRkJTeXhIUVVGclFpeEpRVUZKTEVOQlFVTTdVVUZEYUVNc1QwRkJUeXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTzFsQlEzSkNMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETzFOQlEzUkNPMUZCUTBRc1QwRkJUeXhMUVVGTExFTkJRVU03U1VGRFpDeERRVUZETzBsQlJVUXNTVUZCU1N4TFFVRkxPMUZCUTFJc1RVRkJUU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVVjBRaXhKUVVGSkxGbEJRVmtzU1VGQlNTeEpRVUZKTEVWQlFVVTdXVUZEZWtJc1QwRkJUeXhKUVVGSkxFTkJRVU03VTBGRFdqdFJRVVZFTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJJc1EwRkJRenRKUVVkUExHVkJRV1VzUTBGQlF5eE5RVUZwUWl4RlFVRkZMRTFCUVdNN1NVRkRla1FzUTBGQlF6dEpRVVZQTEd0Q1FVRnJRanRSUVVONlFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVN1dVRkRha0lzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJRenRUUVVNdlFqdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJJc1EwRkJRenRKUVVWRUxFMUJRVTBzUTBGQlF5eFBRVUV3UWp0UlFVTm9ReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMREJDUVVFd1FpeERRVUZETEdWQlFXVXNRMEZCUXp0UlFVVjZSU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhKUVVGSkxFdEJRVXNzU1VGQlNTeERRVUZETEVWQlFVVTdXVUZEYUVRc1QwRkJUenRUUVVOUU8xRkJSVVFzU1VGQlNTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZPMWxCUTNKQ0xFMUJRVTBzVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkRjRU1zVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhyUWtGQmEwSXNRMEZCUXp0WlFVVnNSQ3hQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdXVUZGWml4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVOdVFpeE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVTlNMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRMUlzVFVGQlRTeERRVUZETEVOQlFVTXNSVUZEVWl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVOU0xFMUJRVTBzUTBGQlF5eEZRVUZGTEVWQlExUXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkRWQ3hEUVVGRE8xbEJSVVlzVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPMWxCUlhCQ0xFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlExZ3NWVUZCVlN4RFFVRkRMRU5CUVVNc1JVRkRXaXhWUVVGVkxFTkJRVU1zUTBGQlF5eEZRVU5hTEZWQlFWVXNRMEZCUXl4TFFVRkxMRVZCUTJoQ0xGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlEycENMRU5CUVVNN1dVRkZSaXhQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVMEZEWmp0UlFVVkVMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJUdFpRVU5tTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03V1VGRmVFSXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8xbEJSV1lzVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPMWxCUlhCQ0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1dVRkZOVUlzVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMU5CUTJZN1VVRkZSQ3hKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUlRWQ0xFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlR0WlFVTm1MRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dFRRVU5zUWp0UlFVVkVMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdFpRVU55UWl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VTBGRGJFSTdTVUZEUml4RFFVRkRPMGxCUjBRc1lVRkJZU3hEUVVGRExFOUJRVEJDTzBsQlEzaERMRU5CUVVNN1EwRkRSQ0o5IiwiaW1wb3J0IEludGVyYWN0aXZlT2JqZWN0IGZyb20gJy4vSW50ZXJhY3RpdmVPYmplY3QnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheU9iamVjdENvbnRhaW5lciBleHRlbmRzIEludGVyYWN0aXZlT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5tb3VzZUNoaWxkcmVuID0gdHJ1ZTtcbiAgICB9XG4gICAgZ2V0IG51bUNoaWxkcmVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW4ubGVuZ3RoO1xuICAgIH1cbiAgICBnZXRDaGlsZEF0KGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbltpbmRleF07XG4gICAgfVxuICAgIGdldENoaWxkQnlOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuLmZpbmQoKGNoaWxkKSA9PiBjaGlsZC5uYW1lID09PSBuYW1lKTtcbiAgICB9XG4gICAgZ2V0Q2hpbGRJbmRleChjaGlsZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XG4gICAgfVxuICAgIHNldENoaWxkSW5kZXgoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdldENoaWxkSW5kZXgoY2hpbGQpO1xuICAgICAgICBpZiAoY3VycmVudCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jaGlsZHJlbi5zcGxpY2UoY3VycmVudCwgMSk7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLnNwbGljZShpbmRleCwgMCwgY2hpbGQpO1xuICAgIH1cbiAgICBjb250YWlucyhjaGlsZCkge1xuICAgICAgICByZXR1cm4gY2hpbGQucGFyZW50ID09PSB0aGlzO1xuICAgIH1cbiAgICBhZGRDaGlsZChjaGlsZCkge1xuICAgICAgICBpZiAoIXRoaXMuY29udGFpbnMoY2hpbGQpKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gY2hpbGQucGFyZW50O1xuICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGlsZC5fcGFyZW50ID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG4gICAgYWRkQ2hpbGRBdChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zKGNoaWxkKSkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLnBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gY2hpbGQucGFyZW50O1xuICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGlsZC5fcGFyZW50ID0gdGhpcztcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSB0aGlzLl9jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoaWxkcmVuLnNwbGljZShpbmRleCwgMCwgY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG4gICAgcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnMoY2hpbGQpKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2NoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZEF0KGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuICAgIHJlbW92ZUNoaWxkQXQoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLl9jaGlsZHJlbltpbmRleF07XG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuX3BhcmVudCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG4gICAgcmVtb3ZlQ2hpbGRyZW4oKSB7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBjaGlsZC5fcGFyZW50ID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG4gICAgfVxuICAgIHJlbmRlckNvbnRlbnQoY29udGV4dCkge1xuICAgICAgICB0aGlzLl9jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgY2hpbGQucmVuZGVyKGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSR2x6Y0d4aGVVOWlhbVZqZEVOdmJuUmhhVzVsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OUVhWE53YkdGNVQySnFaV04wUTI5dWRHRnBibVZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVTkJMRTlCUVU4c2FVSkJRV2xDTEUxQlFVMHNjVUpCUVhGQ0xFTkJRVU03UVVGSGNFUXNUVUZCVFN4RFFVRkRMRTlCUVU4c1QwRkJaMElzYzBKQlFYVkNMRk5CUVZFc2FVSkJRV2xDTzBsQlNUZEZPMUZCUTBNc1MwRkJTeXhGUVVGRkxFTkJRVU03VVVGS1JDeGpRVUZUTEVkQlFXOUNMRVZCUVVVc1EwRkJRenRSUVVONFF5eHJRa0ZCWVN4SFFVRkhMRWxCUVVrc1EwRkJRenRKUVVseVFpeERRVUZETzBsQlJVUXNTVUZCU1N4WFFVRlhPMUZCUTJRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXp0SlFVTTVRaXhEUVVGRE8wbEJSVVFzVlVGQlZTeERRVUZETEV0QlFXRTdVVUZEZGtJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXpsQ0xFTkJRVU03U1VGRlJDeGpRVUZqTEVOQlFVTXNTVUZCV1R0UlFVTXhRaXhQUVVGUExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRelZFTEVOQlFVTTdTVUZGUkN4aFFVRmhMRU5CUVVNc1MwRkJiMEk3VVVGRGFrTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjBReXhEUVVGRE8wbEJSVVFzWVVGQllTeERRVUZETEV0QlFXOUNMRVZCUVVVc1MwRkJZVHRSUVVOb1JDeE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlJURkRMRWxCUVVrc1QwRkJUeXhMUVVGTExFdEJRVXNzUlVGQlJUdFpRVU4wUWl4UFFVRlBPMU5CUTFBN1VVRkZSQ3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJFTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVONFF5eERRVUZETzBsQlJVUXNVVUZCVVN4RFFVRkRMRXRCUVc5Q08xRkJRelZDTEU5QlFVOHNTMEZCU3l4RFFVRkRMRTFCUVUwc1MwRkJTeXhKUVVGSkxFTkJRVU03U1VGRE9VSXNRMEZCUXp0SlFVVkVMRkZCUVZFc1EwRkJReXhMUVVGdlFqdFJRVU0xUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTXhRaXhKUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVTdaMEpCUTJwQ0xFMUJRVTBzVFVGQlRTeEhRVUUwUWl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRE8yZENRVU55UkN4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzJGQlF6RkNPMWxCUlVRc1MwRkJTeXhEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZGY2tJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkRNMEk3VVVGRlJDeFBRVUZQTEV0QlFVc3NRMEZCUXp0SlFVTmtMRU5CUVVNN1NVRkZSQ3hWUVVGVkxFTkJRVU1zUzBGQmIwSXNSVUZCUlN4TFFVRmhPMUZCUXpkRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRekZDTEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1NVRkJTU3hKUVVGSkxFVkJRVVU3WjBKQlEzcENMRTFCUVUwc1RVRkJUU3hIUVVFeVFpeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRPMmRDUVVOd1JDeE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yRkJRekZDTzFsQlJVUXNTMEZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRmNrSXNTVUZCU1N4TFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVWQlFVVTdaMEpCUTI1RExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yRkJRek5DTzJsQ1FVRk5PMmRDUVVOT0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdZVUZEZGtNN1UwRkRSRHRSUVVWRUxFOUJRVThzUzBGQlN5eERRVUZETzBsQlEyUXNRMEZCUXp0SlFVVkVMRmRCUVZjc1EwRkJReXhMUVVGdlFqdFJRVU12UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEZWtJc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRk5VTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFRRVU14UWp0UlFVVkVMRTlCUVU4c1MwRkJTeXhEUVVGRE8wbEJRMlFzUTBGQlF6dEpRVVZFTEdGQlFXRXNRMEZCUXl4TFFVRmhPMUZCUXpGQ0xFMUJRVTBzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRmNFTXNTVUZCU1N4TFFVRkxMRVZCUVVVN1dVRkRWaXhMUVVGTExFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVVnlRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGFFTTdVVUZGUkN4UFFVRlBMRXRCUVVzc1EwRkJRenRKUVVOa0xFTkJRVU03U1VGRlJDeGpRVUZqTzFGQlEySXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNSVUZCUlR0WlFVTm9ReXhMUVVGTExFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTjBRaXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVVZJTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1JVRkJSU3hEUVVGRE8wbEJRM0pDTEVOQlFVTTdTVUZGUkN4aFFVRmhMRU5CUVVNc1QwRkJNRUk3VVVGRGRrTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNSVUZCUlR0WlFVTm9ReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUTNaQ0xFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEwb3NRMEZCUXp0RFFVTkVJbjA9IiwiaW1wb3J0IERpc3BsYXlPYmplY3QgZnJvbSAnLi9EaXNwbGF5T2JqZWN0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0aXZlT2JqZWN0IGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZG91YmxlQ2xpY2tFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW91c2VFbmFibGVkID0gdHJ1ZTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lTVzUwWlhKaFkzUnBkbVZQWW1wbFkzUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12U1c1MFpYSmhZM1JwZG1WUFltcGxZM1F1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUMEZCVHl4aFFVRmhMRTFCUVUwc2FVSkJRV2xDTEVOQlFVTTdRVUZGTlVNc1RVRkJUU3hEUVVGRExFOUJRVThzVDBGQlowSXNhVUpCUVd0Q0xGTkJRVkVzWVVGQllUdEpRVWx3UlR0UlFVTkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJTbFFzZFVKQlFXdENMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRek5DTEdsQ1FVRlpMRWRCUVVjc1NVRkJTU3hEUVVGRE8wbEJTWEJDTEVOQlFVTTdRMEZEUkNKOSIsImltcG9ydCBEaXNwbGF5T2JqZWN0Q29udGFpbmVyIGZyb20gJy4vRGlzcGxheU9iamVjdENvbnRhaW5lcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFnZSBleHRlbmRzIERpc3BsYXlPYmplY3RDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxuICAgIGdldCBjb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgICB9XG4gICAgZ2V0IHN0YWdlV2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb250ZXh0LndpZHRoO1xuICAgIH1cbiAgICBnZXQgc3RhZ2VIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb250ZXh0LmhlaWdodDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBzdXBlci5yZW5kZXIodGhpcy5fY29udGV4dCk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVTNSaFoyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12VTNSaFoyVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUTBFc1QwRkJUeXh6UWtGQmMwSXNUVUZCVFN3d1FrRkJNRUlzUTBGQlF6dEJRVVU1UkN4TlFVRk5MRU5CUVVNc1QwRkJUeXhQUVVGUExFdEJRVTBzVTBGQlVTeHpRa0ZCYzBJN1NVRkhlRVFzV1VGQldTeFBRVUV3UWp0UlFVTnlReXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRVU5TTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1QwRkJUeXhEUVVGRE8wbEJRM3BDTEVOQlFVTTdTVUZGUkN4SlFVRkpMRTlCUVU4N1VVRkRWaXhQUVVGUExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTTdTVUZEZEVJc1EwRkJRenRKUVVWRUxFbEJRVWtzVlVGQlZUdFJRVU5pTEU5QlFVOHNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU03U1VGRE5VSXNRMEZCUXp0SlFVVkVMRWxCUVVrc1YwRkJWenRSUVVOa0xFOUJRVThzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkROMElzUTBGQlF6dEpRVVZFTEUxQlFVMDdVVUZEVEN4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTTNRaXhEUVVGRE8wTkJRMFFpZlE9PSIsImltcG9ydCB7IE1hdHJpeCwgQ29sb3JUcmFuc2Zvcm0gfSBmcm9tICdAZTJkL2dlb20nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcihnZXRQYXJlbnQpIHtcbiAgICAgICAgdGhpcy5fbWF0cml4ID0gbmV3IE1hdHJpeCgpO1xuICAgICAgICB0aGlzLl9jb2xvclRyYW5zZm9ybSA9IG5ldyBDb2xvclRyYW5zZm9ybSgpO1xuICAgICAgICB0aGlzLl9nZXRQYXJlbnQgPSBnZXRQYXJlbnQ7XG4gICAgfVxuICAgIGdldCBtYXRyaXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRyaXguY2xvbmUoKTtcbiAgICB9XG4gICAgc2V0IG1hdHJpeCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXRyaXguY29weUZyb20odmFsdWUpO1xuICAgIH1cbiAgICBnZXQgY29sb3JUcmFuc2Zvcm0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xvclRyYW5zZm9ybS5jbG9uZSgpO1xuICAgIH1cbiAgICBzZXQgY29sb3JUcmFuc2Zvcm0odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fY29sb3JUcmFuc2Zvcm0uY29weUZyb20odmFsdWUpO1xuICAgIH1cbiAgICBnZXQgY29uY2F0ZW5hdGVkTWF0cml4KCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG5ldyBNYXRyaXgoKTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZ2V0UGFyZW50KCk7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudE1hdHJpeCA9IHBhcmVudC5jb25jYXRlbmF0ZWRNYXRyaXg7XG4gICAgICAgICAgICB2YWx1ZS5jb3B5RnJvbSh0aGlzLl9tYXRyaXgpO1xuICAgICAgICAgICAgdmFsdWUuY29uY2F0KHBhcmVudE1hdHJpeCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZS5jb3B5RnJvbSh0aGlzLl9tYXRyaXgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGNvbmNhdGVuYXRlZENvbG9yVHJhbnNmb3JtKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG5ldyBDb2xvclRyYW5zZm9ybSgpO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9nZXRQYXJlbnQoKTtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50Q29sb3JUcmFuc2Zvcm0gPSBwYXJlbnQuY29uY2F0ZW5hdGVkQ29sb3JUcmFuc2Zvcm07XG4gICAgICAgICAgICB2YWx1ZS5jb3B5RnJvbSh0aGlzLl9jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICB2YWx1ZS5jb25jYXQocGFyZW50Q29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUuY29weUZyb20odGhpcy5fY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWSEpoYm5ObWIzSnRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDFSeVlXNXpabTl5YlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEdOQlFXTXNSVUZCUlN4TlFVRk5MRmRCUVZjc1EwRkJRenRCUVVWdVJDeE5RVUZOTEVOQlFVTXNUMEZCVHl4UFFVRlBMRk5CUVZNN1NVRkxOMElzV1VGQldTeFRRVUZwUXp0UlFVaHlReXhaUVVGUExFZEJRVWNzU1VGQlNTeE5RVUZOTEVWQlFVVXNRMEZCUXp0UlFVTjJRaXh2UWtGQlpTeEhRVUZITEVsQlFVa3NZMEZCWXl4RlFVRkZMRU5CUVVNN1VVRkhPVU1zU1VGQlNTeERRVUZETEZWQlFWVXNSMEZCUnl4VFFVRlRMRU5CUVVNN1NVRkROMElzUTBGQlF6dEpRVVZFTEVsQlFVa3NUVUZCVFR0UlFVTlVMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0SlFVTTNRaXhEUVVGRE8wbEJSVVFzU1VGQlNTeE5RVUZOTEVOQlFVTXNTMEZCWVR0UlFVTjJRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNNVFpeERRVUZETzBsQlJVUXNTVUZCU1N4alFVRmpPMUZCUTJwQ0xFOUJRVThzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRKUVVOeVF5eERRVUZETzBsQlJVUXNTVUZCU1N4alFVRmpMRU5CUVVNc1MwRkJjVUk3VVVGRGRrTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZEVNc1EwRkJRenRKUVVWRUxFbEJRVWtzYTBKQlFXdENPMUZCUTNKQ0xFMUJRVTBzUzBGQlN5eEhRVUZITEVsQlFVa3NUVUZCVFN4RlFVRkZMRU5CUVVNN1VVRkRNMElzVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8xRkJRMnBETEVsQlFVa3NUVUZCVFN4RlFVRkZPMWxCUTFnc1RVRkJUU3haUVVGWkxFZEJRVWNzVFVGQlRTeERRVUZETEd0Q1FVRnJRaXhEUVVGRE8xbEJReTlETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFsQlF6ZENMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdVMEZETTBJN1lVRkJUVHRaUVVOT0xFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xTkJRemRDTzFGQlEwUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1NVRkRaQ3hEUVVGRE8wbEJSVVFzU1VGQlNTd3dRa0ZCTUVJN1VVRkROMElzVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4alFVRmpMRVZCUVVVc1EwRkJRenRSUVVOdVF5eE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU03VVVGRGFrTXNTVUZCU1N4TlFVRk5MRVZCUVVVN1dVRkRXQ3hOUVVGTkxHOUNRVUZ2UWl4SFFVRkhMRTFCUVUwc1EwRkJReXd3UWtGQk1FSXNRMEZCUXp0WlFVTXZSQ3hMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJRenRaUVVOeVF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVOQlFVTTdVMEZEYmtNN1lVRkJUVHRaUVVOT0xFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRE8xTkJRM0pETzFGQlEwUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1NVRkRaQ3hEUVVGRE8wTkJRMFFpZlE9PSIsImltcG9ydCB7IEV2ZW50IH0gZnJvbSAnQGUyZC9ldmVudHMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5Ym9hcmRFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBjYW5jZWxhYmxlLCBrZXlDb2RlKSB7XG4gICAgICAgIHN1cGVyKHR5cGUsIGNhbmNlbGFibGUpO1xuICAgICAgICB0aGlzLl9rZXlDb2RlID0ga2V5Q29kZTtcbiAgICB9XG4gICAgZ2V0IGtleUNvZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlDb2RlO1xuICAgIH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBLZXlib2FyZEV2ZW50KHRoaXMudHlwZSwgdGhpcy5jYW5jZWxhYmxlLCB0aGlzLl9rZXlDb2RlKTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgS2V5Ym9hcmRFdmVudDogeyB0eXBlOiAke3RoaXMudHlwZX0sIGNhbmNlbGFibGU6ICR7dGhpcy5jYW5jZWxhYmxlfSwga2V5Q29kZTogJHt0aGlzLl9rZXlDb2RlfSB9YDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lTMlY1WW05aGNtUkZkbVZ1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlsZG1WdWRITXZTMlY1WW05aGNtUkZkbVZ1ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hQUVVGUExFVkJRVVVzUzBGQlN5eEZRVUZGTEUxQlFVMHNZVUZCWVN4RFFVRkRPMEZCUlhCRExFMUJRVTBzUTBGQlF5eFBRVUZQTEU5QlFVOHNZVUZCWXl4VFFVRlJMRXRCUVVzN1NVRkhMME1zV1VGQldTeEpRVUZaTEVWQlFVVXNWVUZCYlVJc1JVRkJSU3hQUVVGbE8xRkJRemRFTEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRmVFSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhQUVVGUExFTkJRVU03U1VGRGVrSXNRMEZCUXp0SlFVVkVMRWxCUVVrc1QwRkJUenRSUVVOV0xFOUJRVThzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXp0SlFVTjBRaXhEUVVGRE8wbEJSVVFzUzBGQlN6dFJRVU5LTEU5QlFVOHNTVUZCU1N4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEpRVU55UlN4RFFVRkRPMGxCUlVRc1VVRkJVVHRSUVVOUUxFOUJRVThzTUVKQlFUQkNMRWxCUVVrc1EwRkJReXhKUVVGSkxHbENRVUZwUWl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hqUVVGakxFbEJRVWtzUTBGQlF5eFJRVUZSTEVsQlFVa3NRMEZCUXp0SlFVTXpSeXhEUVVGRE8wTkJRMFFpZlE9PSIsImltcG9ydCBQb2ludGVyRXZlbnQgZnJvbSAnLi9Qb2ludGVyRXZlbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VFdmVudCBleHRlbmRzIFBvaW50ZXJFdmVudCB7XG4gICAgY29uc3RydWN0b3IodHlwZSwgY2FuY2VsYWJsZSwgc3RhZ2VYID0gMCwgc3RhZ2VZID0gMCwgbG9jYWxYID0gMCwgbG9jYWxZID0gMCwgZGVsdGFYID0gMCwgZGVsdGFZID0gMCwgYnV0dG9uRG93biA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKHR5cGUsIGNhbmNlbGFibGUsIHN0YWdlWCwgc3RhZ2VZLCBsb2NhbFgsIGxvY2FsWSk7XG4gICAgICAgIHRoaXMuX2RlbHRhWCA9IGRlbHRhWDtcbiAgICAgICAgdGhpcy5fZGVsdGFZID0gZGVsdGFZO1xuICAgICAgICB0aGlzLl9idXR0b25Eb3duID0gYnV0dG9uRG93bjtcbiAgICB9XG4gICAgZ2V0IGRlbHRhWCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlbHRhWDtcbiAgICB9XG4gICAgZ2V0IGRlbHRhWSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlbHRhWTtcbiAgICB9XG4gICAgZ2V0IGJ1dHRvbkRvd24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9idXR0b25Eb3duO1xuICAgIH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNb3VzZUV2ZW50KHRoaXMudHlwZSwgdGhpcy5jYW5jZWxhYmxlLCB0aGlzLnN0YWdlWCwgdGhpcy5zdGFnZVksIHRoaXMubG9jYWxYLCB0aGlzLmxvY2FsWSwgdGhpcy5fZGVsdGFYLCB0aGlzLl9kZWx0YVksIHRoaXMuX2J1dHRvbkRvd24pO1xuICAgIH1cbiAgICBjbG9uZVdpdGhUeXBlKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNb3VzZUV2ZW50KHR5cGUsIHRoaXMuY2FuY2VsYWJsZSwgdGhpcy5zdGFnZVgsIHRoaXMuc3RhZ2VZLCB0aGlzLmxvY2FsWCwgdGhpcy5sb2NhbFksIHRoaXMuX2RlbHRhWCwgdGhpcy5fZGVsdGFZLCB0aGlzLl9idXR0b25Eb3duKTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgTW91c2VFdmVudDogeyB0eXBlOiAke3RoaXMudHlwZX0sIGNhbmNlbGFibGU6ICR7dGhpcy5jYW5jZWxhYmxlfSwgc3RhZ2VYOiAke3RoaXMuc3RhZ2VYfSwgc3RhZ2VZOiAke3RoaXMuc3RhZ2VZfSwgbG9jYWxYOiAke3RoaXMubG9jYWxYfSwgbG9jYWxZOiAke3RoaXMubG9jYWxZfSwgZGVsdGFYOiAke3RoaXMuX2RlbHRhWH0sIGRlbHRhWTogJHt0aGlzLl9kZWx0YVl9LCBidXR0b25Eb3duOiAke3RoaXMuX2J1dHRvbkRvd259IH1gO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVRXOTFjMlZGZG1WdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5bGRtVnVkSE12VFc5MWMyVkZkbVZ1ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkRRU3hQUVVGUExGbEJRVmtzVFVGQlRTeG5Ra0ZCWjBJc1EwRkJRenRCUVVVeFF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4UFFVRlBMRlZCUVZjc1UwRkJVU3haUVVGWk8wbEJTMjVFTEZsQlEwTXNTVUZCV1N4RlFVRkZMRlZCUVcxQ0xFVkJRMnBETEZOQlFXbENMRU5CUVVNc1JVRkJSU3hUUVVGcFFpeERRVUZETEVWQlEzUkRMRk5CUVdsQ0xFTkJRVU1zUlVGQlJTeFRRVUZwUWl4RFFVRkRMRVZCUTNSRExGTkJRV2xDTEVOQlFVTXNSVUZCUlN4VFFVRnBRaXhEUVVGRExFVkJRM1JETEdGQlFYTkNMRXRCUVVzN1VVRkZNMElzUzBGQlN5eERRVUZETEVsQlFVa3NSVUZCUlN4VlFVRlZMRVZCUVVVc1RVRkJUU3hGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkZlRVFzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRkRUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRkRUlzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4VlFVRlZMRU5CUVVNN1NVRkRMMElzUTBGQlF6dEpRVVZFTEVsQlFVa3NUVUZCVFR0UlFVTlVMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVU55UWl4RFFVRkRPMGxCUlVRc1NVRkJTU3hOUVVGTk8xRkJRMVFzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRPMGxCUTNKQ0xFTkJRVU03U1VGRlJDeEpRVUZKTEZWQlFWVTdVVUZEWWl4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03U1VGRGVrSXNRMEZCUXp0SlFVVkVMRXRCUVVzN1VVRkRTaXhQUVVGUExFbEJRVWtzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdTVUZEY2tvc1EwRkJRenRKUVVWRUxHRkJRV0VzUTBGQlF5eEpRVUZaTzFGQlEzcENMRTlCUVU4c1NVRkJTU3hWUVVGVkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8wbEJRMmhLTEVOQlFVTTdTVUZGUkN4UlFVRlJPMUZCUTFBc1QwRkJUeXgxUWtGQmRVSXNTVUZCU1N4RFFVRkRMRWxCUVVrc2FVSkJRV2xDTEVsQlFVa3NRMEZCUXl4VlFVRlZMR0ZCUVdFc1NVRkJTU3hEUVVGRExFMUJRVTBzWVVGQllTeEpRVUZKTEVOQlFVTXNUVUZCVFN4aFFVRmhMRWxCUVVrc1EwRkJReXhOUVVGTkxHRkJRV0VzU1VGQlNTeERRVUZETEUxQlFVMHNZVUZCWVN4SlFVRkpMRU5CUVVNc1QwRkJUeXhoUVVGaExFbEJRVWtzUTBGQlF5eFBRVUZQTEdsQ1FVRnBRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEpRVUZKTEVOQlFVTTdTVUZEYUZFc1EwRkJRenREUVVORUluMD0iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJ0BlMmQvZXZlbnRzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50ZXJFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBjYW5jZWxhYmxlLCBzdGFnZVgsIHN0YWdlWSwgbG9jYWxYLCBsb2NhbFkpIHtcbiAgICAgICAgc3VwZXIodHlwZSwgY2FuY2VsYWJsZSk7XG4gICAgICAgIHRoaXMuX3N0YWdlWCA9IHN0YWdlWDtcbiAgICAgICAgdGhpcy5fc3RhZ2VZID0gc3RhZ2VZO1xuICAgICAgICB0aGlzLl9sb2NhbFggPSBsb2NhbFg7XG4gICAgICAgIHRoaXMuX2xvY2FsWSA9IGxvY2FsWTtcbiAgICB9XG4gICAgZ2V0IHN0YWdlWCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWdlWDtcbiAgICB9XG4gICAgZ2V0IHN0YWdlWSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWdlWTtcbiAgICB9XG4gICAgZ2V0IGxvY2FsWCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsWDtcbiAgICB9XG4gICAgZ2V0IGxvY2FsWSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsWTtcbiAgICB9XG4gICAgZ2V0IGxvY2FsUG9pbnQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5sb2NhbFgsIHRoaXMubG9jYWxZKTtcbiAgICB9XG4gICAgZ2V0IHN0YWdlUG9pbnQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5zdGFnZVgsIHRoaXMuc3RhZ2VZKTtcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9pbnRlckV2ZW50KHRoaXMudHlwZSwgdGhpcy5jYW5jZWxhYmxlLCB0aGlzLl9zdGFnZVgsIHRoaXMuX3N0YWdlWSwgdGhpcy5fbG9jYWxYLCB0aGlzLl9sb2NhbFkpO1xuICAgIH1cbiAgICBjbG9uZVdpdGhUeXBlKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludGVyRXZlbnQodHlwZSwgdGhpcy5jYW5jZWxhYmxlLCB0aGlzLl9zdGFnZVgsIHRoaXMuX3N0YWdlWSwgdGhpcy5fbG9jYWxYLCB0aGlzLl9sb2NhbFkpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGBQb2ludGVyRXZlbnQ6IHsgdHlwZTogJHt0aGlzLnR5cGV9LCBjYW5jZWxhYmxlOiAke3RoaXMuY2FuY2VsYWJsZX0sIHN0YWdlWDogJHt0aGlzLl9zdGFnZVh9LCBzdGFnZVk6ICR7dGhpcy5fc3RhZ2VZfSwgbG9jYWxYOiAke3RoaXMuX2xvY2FsWH0sIGxvY2FsWTogJHt0aGlzLl9sb2NhbFl9IH1gO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVHOXBiblJsY2tWMlpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyVjJaVzUwY3k5UWIybHVkR1Z5UlhabGJuUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1QwRkJUeXhGUVVGRkxFdEJRVXNzUlVGQlJTeE5RVUZOTEZkQlFWY3NRMEZCUXp0QlFVTnNReXhQUVVGUExFVkJRVVVzUzBGQlN5eEZRVUZGTEUxQlFVMHNZVUZCWVN4RFFVRkRPMEZCUlhCRExFMUJRVTBzUTBGQlF5eFBRVUZQTEU5QlFVOHNXVUZCWVN4VFFVRlJMRXRCUVVzN1NVRk5PVU1zV1VGRFF5eEpRVUZaTEVWQlFVVXNWVUZCYlVJc1JVRkRha01zVFVGQll5eEZRVUZGTEUxQlFXTXNSVUZET1VJc1RVRkJZeXhGUVVGRkxFMUJRV003VVVGRk9VSXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVVY0UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlF6dFJRVU4wUWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlF6dFJRVVYwUWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlF6dFJRVU4wUWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlF6dEpRVU4yUWl4RFFVRkRPMGxCUlVRc1NVRkJTU3hOUVVGTk8xRkJRMVFzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRPMGxCUTNKQ0xFTkJRVU03U1VGRlJDeEpRVUZKTEUxQlFVMDdVVUZEVkN4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU03U1VGRGNrSXNRMEZCUXp0SlFVVkVMRWxCUVVrc1RVRkJUVHRSUVVOVUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTnlRaXhEUVVGRE8wbEJSVVFzU1VGQlNTeE5RVUZOTzFGQlExUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRE8wbEJRM0pDTEVOQlFVTTdTVUZGUkN4SlFVRkpMRlZCUVZVN1VVRkRZaXhQUVVGUExFbEJRVWtzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlF6VkRMRU5CUVVNN1NVRkZSQ3hKUVVGSkxGVkJRVlU3VVVGRFlpeFBRVUZQTEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUXpWRExFTkJRVU03U1VGRlJDeExRVUZMTzFGQlEwb3NUMEZCVHl4SlFVRkpMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCVlN4RFFVRkRPMGxCUTNSSUxFTkJRVU03U1VGRlJDeGhRVUZoTEVOQlFVTXNTVUZCV1R0UlFVTjZRaXhQUVVGUExFbEJRVWtzV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVONFJ5eERRVUZETzBsQlJVUXNVVUZCVVR0UlFVTlFMRTlCUVU4c2VVSkJRWGxDTEVsQlFVa3NRMEZCUXl4SlFVRkpMR2xDUVVGcFFpeEpRVUZKTEVOQlFVTXNWVUZCVlN4aFFVRmhMRWxCUVVrc1EwRkJReXhQUVVGUExHRkJRV0VzU1VGQlNTeERRVUZETEU5QlFVOHNZVUZCWVN4SlFVRkpMRU5CUVVNc1QwRkJUeXhoUVVGaExFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NRMEZCUXp0SlFVTnVUQ3hEUVVGRE8wTkJRMFFpZlE9PSIsImltcG9ydCBQb2ludGVyRXZlbnQgZnJvbSAnLi9Qb2ludGVyRXZlbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG91Y2hFdmVudCBleHRlbmRzIFBvaW50ZXJFdmVudCB7XG4gICAgY29uc3RydWN0b3IodHlwZSwgY2FuY2VsYWJsZSwgc3RhZ2VYLCBzdGFnZVksIGxvY2FsWCwgbG9jYWxZLCBpZCkge1xuICAgICAgICBzdXBlcih0eXBlLCBjYW5jZWxhYmxlLCBzdGFnZVgsIHN0YWdlWSwgbG9jYWxYLCBsb2NhbFkpO1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgIH1cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVG91Y2hFdmVudCh0aGlzLnR5cGUsIHRoaXMuY2FuY2VsYWJsZSwgdGhpcy5zdGFnZVgsIHRoaXMuc3RhZ2VZLCB0aGlzLmxvY2FsWCwgdGhpcy5sb2NhbFksIHRoaXMuX2lkKTtcbiAgICB9XG4gICAgY2xvbmVXaXRoVHlwZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiBuZXcgVG91Y2hFdmVudCh0eXBlLCB0aGlzLmNhbmNlbGFibGUsIHRoaXMuc3RhZ2VYLCB0aGlzLnN0YWdlWSwgdGhpcy5sb2NhbFgsIHRoaXMubG9jYWxZLCB0aGlzLl9pZCk7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFRvdWNoRXZlbnQ6IHsgdHlwZTogJHt0aGlzLnR5cGV9LCBjYW5jZWxhYmxlOiAke3RoaXMuY2FuY2VsYWJsZX0sIHN0YWdlWDogJHt0aGlzLnN0YWdlWH0sIHN0YWdlWTogJHt0aGlzLnN0YWdlWX0sIGxvY2FsWDogJHt0aGlzLmxvY2FsWH0sIGxvY2FsWTogJHt0aGlzLmxvY2FsWX0sIGlkOiAke3RoaXMuaWR9IH1gO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHOTFZMmhGZG1WdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5bGRtVnVkSE12Vkc5MVkyaEZkbVZ1ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkRRU3hQUVVGUExGbEJRVmtzVFVGQlRTeG5Ra0ZCWjBJc1EwRkJRenRCUVVVeFF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4UFFVRlBMRlZCUVZjc1UwRkJVU3haUVVGWk8wbEJSMjVFTEZsQlEwTXNTVUZCV1N4RlFVRkZMRlZCUVcxQ0xFVkJRMnBETEUxQlFXTXNSVUZCUlN4TlFVRmpMRVZCUXpsQ0xFMUJRV01zUlVGQlJTeE5RVUZqTEVWQlF6bENMRVZCUVZVN1VVRkZWaXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTEZWQlFWVXNSVUZCUlN4TlFVRk5MRVZCUVVVc1RVRkJUU3hGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVVjRSQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVTm1MRU5CUVVNN1NVRkZSQ3hKUVVGSkxFVkJRVVU3VVVGRFRDeFBRVUZQTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNN1NVRkRha0lzUTBGQlF6dEpRVVZFTEV0QlFVczdVVUZEU2l4UFFVRlBMRWxCUVVrc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU5xU0N4RFFVRkRPMGxCUlVRc1lVRkJZU3hEUVVGRExFbEJRVms3VVVGRGVrSXNUMEZCVHl4SlFVRkpMRlZCUVZVc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVNMVJ5eERRVUZETzBsQlJVUXNVVUZCVVR0UlFVTlFMRTlCUVU4c2RVSkJRWFZDTEVsQlFVa3NRMEZCUXl4SlFVRkpMR2xDUVVGcFFpeEpRVUZKTEVOQlFVTXNWVUZCVlN4aFFVRmhMRWxCUVVrc1EwRkJReXhOUVVGTkxHRkJRV0VzU1VGQlNTeERRVUZETEUxQlFVMHNZVUZCWVN4SlFVRkpMRU5CUVVNc1RVRkJUU3hoUVVGaExFbEJRVWtzUTBGQlF5eE5RVUZOTEZOQlFWTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRE8wbEJRemRNTEVOQlFVTTdRMEZEUkNKOSIsImltcG9ydCBQb2ludGVyRXZlbnQgZnJvbSAnLi9Qb2ludGVyRXZlbnQnO1xuaW1wb3J0IE1vdXNlRXZlbnQgZnJvbSAnLi9Nb3VzZUV2ZW50JztcbmltcG9ydCBUb3VjaEV2ZW50IGZyb20gJy4vVG91Y2hFdmVudCc7XG5pbXBvcnQgS2V5Ym9hcmRFdmVudCBmcm9tICcuL0tleWJvYXJkRXZlbnQnO1xuZXhwb3J0IGNvbnN0IFJFTkRFUiA9ICdyZW5kZXInO1xuZXhwb3J0IGNvbnN0IFJFU0laRSA9ICdyZXNpemUnO1xuZXhwb3J0IGNvbnN0IEVOVEVSX0ZSQU1FID0gJ2VudGVyRnJhbWUnO1xuZXhwb3J0IGNvbnN0IEFEREVEX1RPX1NUQUdFID0gJ2FkZGVkVG9TdGFnZSc7XG5leHBvcnQgY29uc3QgUkVNT1ZFRF9GUk9NX1NUQUdFID0gJ3JlbW92ZWRGcm9tU3RhZ2UnO1xuZXhwb3J0IGNvbnN0IFRPVUNIX1NUQVJUID0gJ3RvdWNoU3RhcnQnO1xuZXhwb3J0IGNvbnN0IFRPVUNIX01PVkUgPSAndG91Y2hNb3ZlJztcbmV4cG9ydCBjb25zdCBUT1VDSF9FTkQgPSAndG91Y2hFbmQnO1xuZXhwb3J0IGNvbnN0IFRPVUNIX0NBTkNFTCA9ICd0b3VjaENhbmNlbCc7XG5leHBvcnQgY29uc3QgTU9VU0VfRE9XTiA9ICdtb3VzZURvd24nO1xuZXhwb3J0IGNvbnN0IE1PVVNFX01PVkUgPSAnbW91c2VNb3ZlJztcbmV4cG9ydCBjb25zdCBNT1VTRV9VUCA9ICdtb3VzZVVwJztcbmV4cG9ydCBjb25zdCBNT1VTRV9MRUFWRSA9ICdtb3VzZUxlYXZlJztcbmV4cG9ydCBjb25zdCBNT1VTRV9XSEVFTCA9ICdtb3VzZVdoZWVsJztcbmV4cG9ydCBjb25zdCBNT1VTRV9PVkVSID0gJ21vdXNlT3Zlcic7XG5leHBvcnQgY29uc3QgTU9VU0VfT1VUID0gJ21vdXNlT3V0JztcbmV4cG9ydCBjb25zdCBDTElDSyA9ICdjbGljayc7XG5leHBvcnQgY29uc3QgRE9VQkxFX0NMSUNLID0gJ2RvdWJsZUNsaWNrJztcbmV4cG9ydCBjb25zdCBLRVlfRE9XTiA9ICdrZXlEb3duJztcbmV4cG9ydCBjb25zdCBLRVlfVVAgPSAna2V5VXAnO1xuZXhwb3J0IHsgUG9pbnRlckV2ZW50LCBNb3VzZUV2ZW50LCBUb3VjaEV2ZW50LCBLZXlib2FyZEV2ZW50LCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpYWmxiblJ6TDJsdVpHVjRMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxFOUJRVThzV1VGQldTeE5RVUZOTEdkQ1FVRm5RaXhEUVVGRE8wRkJRekZETEU5QlFVOHNWVUZCVlN4TlFVRk5MR05CUVdNc1EwRkJRenRCUVVOMFF5eFBRVUZQTEZWQlFWVXNUVUZCVFN4alFVRmpMRU5CUVVNN1FVRkRkRU1zVDBGQlR5eGhRVUZoTEUxQlFVMHNhVUpCUVdsQ0xFTkJRVU03UVVGRk5VTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF6dEJRVU12UWl4TlFVRk5MRU5CUVVNc1RVRkJUU3hOUVVGTkxFZEJRVWNzVVVGQlVTeERRVUZETzBGQlF5OUNMRTFCUVUwc1EwRkJReXhOUVVGTkxGZEJRVmNzUjBGQlJ5eFpRVUZaTEVOQlFVTTdRVUZEZUVNc1RVRkJUU3hEUVVGRExFMUJRVTBzWTBGQll5eEhRVUZITEdOQlFXTXNRMEZCUXp0QlFVTTNReXhOUVVGTkxFTkJRVU1zVFVGQlRTeHJRa0ZCYTBJc1IwRkJSeXhyUWtGQmEwSXNRMEZCUXp0QlFVVnlSQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeFhRVUZYTEVkQlFVY3NXVUZCV1N4RFFVRkRPMEZCUTNoRExFMUJRVTBzUTBGQlF5eE5RVUZOTEZWQlFWVXNSMEZCUnl4WFFVRlhMRU5CUVVNN1FVRkRkRU1zVFVGQlRTeERRVUZETEUxQlFVMHNVMEZCVXl4SFFVRkhMRlZCUVZVc1EwRkJRenRCUVVOd1F5eE5RVUZOTEVOQlFVTXNUVUZCVFN4WlFVRlpMRWRCUVVjc1lVRkJZU3hEUVVGRE8wRkJSVEZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRlZCUVZVc1IwRkJSeXhYUVVGWExFTkJRVU03UVVGRGRFTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1ZVRkJWU3hIUVVGSExGZEJRVmNzUTBGQlF6dEJRVU4wUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hSUVVGUkxFZEJRVWNzVTBGQlV5eERRVUZETzBGQlEyeERMRTFCUVUwc1EwRkJReXhOUVVGTkxGZEJRVmNzUjBGQlJ5eFpRVUZaTEVOQlFVTTdRVUZEZUVNc1RVRkJUU3hEUVVGRExFMUJRVTBzVjBGQlZ5eEhRVUZITEZsQlFWa3NRMEZCUXp0QlFVTjRReXhOUVVGTkxFTkJRVU1zVFVGQlRTeFZRVUZWTEVkQlFVY3NWMEZCVnl4RFFVRkRPMEZCUTNSRExFMUJRVTBzUTBGQlF5eE5RVUZOTEZOQlFWTXNSMEZCUnl4VlFVRlZMRU5CUVVNN1FVRkRjRU1zVFVGQlRTeERRVUZETEUxQlFVMHNTMEZCU3l4SFFVRkhMRTlCUVU4c1EwRkJRenRCUVVNM1FpeE5RVUZOTEVOQlFVTXNUVUZCVFN4WlFVRlpMRWRCUVVjc1lVRkJZU3hEUVVGRE8wRkJSVEZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRkZCUVZFc1IwRkJSeXhUUVVGVExFTkJRVU03UVVGRGJFTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1RVRkJUU3hIUVVGSExFOUJRVThzUTBGQlF6dEJRVVU1UWl4UFFVRlBMRVZCUTA0c1dVRkJXU3hGUVVOYUxGVkJRVlVzUlVGRFZpeFZRVUZWTEVWQlExWXNZVUZCWVN4SFFVTmlMRU5CUVVNaWZRPT0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudCB7XG4gICAgY29uc3RydWN0b3IodHlwZSwgY2FuY2VsYWJsZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX2lzQ2FuY2VsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNDYW5jZWxlZE5vdyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0RlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0eXBlKSB7XG4gICAgICAgICAgICB0aHJvdyAnXCJ0eXBlXCIgY2FuIG5vdCBiZSBudWxsJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5fY2FuY2VsYWJsZSA9IGNhbmNlbGFibGU7XG4gICAgfVxuICAgIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICB9XG4gICAgZ2V0IGNhbmNlbGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYW5jZWxhYmxlO1xuICAgIH1cbiAgICBnZXQgdGFyZ2V0KCkge1xuICAgICAgICBpZiAoIXRoaXMuX3RhcmdldCkge1xuICAgICAgICAgICAgdGhyb3cgJ1widGFyZ2V0XCIgY2FuIG5vdCBiZSBudWxsJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICAgIH1cbiAgICBnZXQgaXNEZWZhdWx0UHJldmVudGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEZWZhdWx0UHJldmVudGVkO1xuICAgIH1cbiAgICBnZXQgaXNDYW5jZWxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ2FuY2VsZWQ7XG4gICAgfVxuICAgIGdldCBpc0NhbmNlbGVkTm93KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNDYW5jZWxlZE5vdztcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgRXZlbnQ6IHsgdHlwZTogJHt0aGlzLl90eXBlfSwgY2FuY2VsYWJsZTogJHt0aGlzLl9jYW5jZWxhYmxlfSB9YDtcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXZlbnQodGhpcy5fdHlwZSwgdGhpcy5fY2FuY2VsYWJsZSk7XG4gICAgfVxuICAgIGNsb25lV2l0aFR5cGUodHlwZSkge1xuICAgICAgICByZXR1cm4gbmV3IEV2ZW50KHR5cGUsIHRoaXMuX2NhbmNlbGFibGUpO1xuICAgIH1cbiAgICBwcmV2ZW50RGVmYXVsdCgpIHtcbiAgICAgICAgdGhpcy5faXNEZWZhdWx0UHJldmVudGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2NhbmNlbGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pc0NhbmNlbGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5faXNDYW5jZWxlZE5vdyA9IHRydWU7XG4gICAgfVxuICAgIHN0b3BQcm9wYWdhdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYW5jZWxhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNDYW5jZWxlZCA9IHRydWU7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUlhabGJuUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12UlhabGJuUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUlVFc1RVRkJUU3hEUVVGRExFOUJRVThzVDBGQlR5eExRVUZMTzBsQlUzcENMRmxCUVZrc1NVRkJXU3hGUVVGRkxHRkJRWE5DTEV0QlFVczdVVUZPTjBNc1owSkJRVmNzUjBGQldTeExRVUZMTEVOQlFVTTdVVUZETjBJc2JVSkJRV01zUjBGQldTeExRVUZMTEVOQlFVTTdVVUZEYUVNc2QwSkJRVzFDTEVkQlFWa3NTMEZCU3l4RFFVRkRPMUZCU3pWRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVTdXVUZEVml4TlFVRk5MSGRDUVVGM1FpeERRVUZETzFOQlF5OUNPMUZCUTBRc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEYkVJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFZRVUZWTEVOQlFVTTdTVUZETDBJc1EwRkJRenRKUVVWRUxFbEJRVWtzU1VGQlNUdFJRVU5RTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVOdVFpeERRVUZETzBsQlJVUXNTVUZCU1N4VlFVRlZPMUZCUTJJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETzBsQlEzcENMRU5CUVVNN1NVRkZSQ3hKUVVGSkxFMUJRVTA3VVVGRFZDeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVOc1FpeE5RVUZOTERCQ1FVRXdRaXhEUVVGRE8xTkJRMnBETzFGQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRE8wbEJRM0pDTEVOQlFVTTdTVUZGUkN4SlFVRkpMR3RDUVVGclFqdFJRVU55UWl4UFFVRlBMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXp0SlFVTnFReXhEUVVGRE8wbEJSVVFzU1VGQlNTeFZRVUZWTzFGQlEySXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8wbEJRM3BDTEVOQlFVTTdTVUZGUkN4SlFVRkpMR0ZCUVdFN1VVRkRhRUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRPMGxCUXpWQ0xFTkJRVU03U1VGRlJDeFJRVUZSTzFGQlExQXNUMEZCVHl4clFrRkJhMElzU1VGQlNTeERRVUZETEV0QlFVc3NhVUpCUVdsQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVsQlFVa3NRMEZCUXp0SlFVTXhSU3hEUVVGRE8wbEJSVVFzUzBGQlN6dFJRVU5LTEU5QlFVOHNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1NVRkRhRVFzUTBGQlF6dEpRVVZFTEdGQlFXRXNRMEZCUXl4SlFVRlpPMUZCUTNwQ0xFOUJRVThzU1VGQlNTeExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dEpRVU14UXl4RFFVRkRPMGxCUlVRc1kwRkJZenRSUVVOaUxFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1IwRkJSeXhKUVVGSkxFTkJRVU03U1VGRGFrTXNRMEZCUXp0SlFVVkVMSGRDUVVGM1FqdFJRVU4yUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdFpRVU4wUWl4UFFVRlBPMU5CUTFBN1VVRkRSQ3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTjRRaXhKUVVGSkxFTkJRVU1zWTBGQll5eEhRVUZITEVsQlFVa3NRMEZCUXp0SlFVTTFRaXhEUVVGRE8wbEJSVVFzWlVGQlpUdFJRVU5rTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRk8xbEJRM1JDTEU5QlFVODdVMEZEVUR0UlFVTkVMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETzBsQlEzcENMRU5CUVVNN1EwRkRSQ0o5IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnREaXNwYXRjaGVyIHtcbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuICdFdmVudERpc3BhdGNoZXInO1xuICAgIH1cbiAgICBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBwcmlvcml0eSA9IDApIHtcbiAgICAgICAgaWYgKCF0eXBlKSB7XG4gICAgICAgICAgICB0aHJvdyAnXCJ0eXBlXCIgY2FuIG5vdCBiZSBudWxsJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aHJvdyAnXCJjYWxsYmFja1wiIGNhbiBub3QgYmUgbnVsbCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzLmdldCh0eXBlKTtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzLnNldCh0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRhaW5zID0gbGlzdGVuZXJzLnNvbWUoKGxpc3RlbmVyKSA9PiBsaXN0ZW5lci5jYWxsYmFjayA9PT0gY2FsbGJhY2spO1xuICAgICAgICBpZiAoY29udGFpbnMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0ge1xuICAgICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBsaXN0ZW5lcnMuZmluZEluZGV4KCh2YWx1ZSkgPT4gcHJpb3JpdHkgPiB2YWx1ZS5wcmlvcml0eSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDAsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghdHlwZSkge1xuICAgICAgICAgICAgdGhyb3cgJ1widHlwZVwiIGNhbiBub3QgYmUgbnVsbCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhyb3cgJ1wiY2FsbGJhY2tcIiBjYW4gbm90IGJlIG51bGwnO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzLmdldCh0eXBlKTtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IGxpc3RlbmVycy5maW5kSW5kZXgoKGxpc3RlbmVyKSA9PiBsaXN0ZW5lci5jYWxsYmFjayA9PT0gY2FsbGJhY2spO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYXNFdmVudExpc3RlbmVyKHR5cGUpIHtcbiAgICAgICAgaWYgKCF0eXBlKSB7XG4gICAgICAgICAgICB0aHJvdyAnXCJ0eXBlXCIgY2FuIG5vdCBiZSBudWxsJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2xpc3RlbmVycykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycy5nZXQodHlwZSk7XG4gICAgICAgIGlmICghbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3RlbmVycy5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgICAgIHRocm93ICdcInR5cGVcIiBjYW4gbm90IGJlIG51bGwnO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50Ll90YXJnZXQgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuX2xpc3RlbmVycykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycy5nZXQoZXZlbnQudHlwZSk7XG4gICAgICAgIGlmICghbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdGVuZXJzLnNvbWUoKGxpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayhldmVudCk7XG4gICAgICAgICAgICByZXR1cm4gZXZlbnQuaXNDYW5jZWxlZE5vdztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcnMubGVuZ3RoID4gMDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSWFpsYm5SRWFYTndZWFJqYUdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMFYyWlc1MFJHbHpjR0YwWTJobGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZQUVN4TlFVRk5MRU5CUVVNc1QwRkJUeXhQUVVGUExHVkJRV1U3U1VGSmJrTXNVVUZCVVR0UlFVTlFMRTlCUVU4c2FVSkJRV2xDTEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRUxHZENRVUZuUWl4RFFVRkRMRWxCUVZrc1JVRkJSU3hSUVVGblF5eEZRVUZGTEZkQlFXMUNMRU5CUVVNN1VVRkRjRVlzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlR0WlFVTldMRTFCUVUwc2QwSkJRWGRDTEVOQlFVTTdVMEZETDBJN1VVRkZSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFsQlEyUXNUVUZCVFN3MFFrRkJORUlzUTBGQlF6dFRRVU51UXp0UlFVVkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTzFsQlEzSkNMRWxCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzU1VGQlNTeEhRVUZITEVWQlFUUkNMRU5CUVVNN1UwRkRkRVE3VVVGRlJDeEpRVUZKTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVVXhReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTzFsQlEyWXNVMEZCVXl4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVObUxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF6dFRRVU55UXp0UlFVVkVMRTFCUVUwc1VVRkJVU3hIUVVGSExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEV0QlFVc3NVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkRPVVVzU1VGQlNTeFJRVUZSTzFsQlFVVXNUMEZCVHp0UlFVVnlRaXhOUVVGTkxGRkJRVkVzUjBGQll6dFpRVU16UWl4UlFVRlJPMWxCUTFJc1VVRkJVVHRUUVVOU0xFTkJRVU03VVVGRlJpeE5RVUZOTEV0QlFVc3NSMEZCUnl4VFFVRlRMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlEzaEZMRWxCUVVrc1MwRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTzFsQlEycENMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdVMEZEZWtJN1lVRkJUVHRaUVVOT0xGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dFRRVU55UXp0SlFVTkdMRU5CUVVNN1NVRkZSQ3h0UWtGQmJVSXNRMEZCUXl4SlFVRlpMRVZCUVVVc1VVRkJaME03VVVGRGFrVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSVHRaUVVOV0xFMUJRVTBzZDBKQlFYZENMRU5CUVVNN1UwRkRMMEk3VVVGRlJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZPMWxCUTJRc1RVRkJUU3cwUWtGQk5FSXNRMEZCUXp0VFFVTnVRenRSUVVWRUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZPMWxCUTNKQ0xFOUJRVTg3VTBGRFVEdFJRVVZFTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUlRWRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVTdXVUZEWml4UFFVRlBPMU5CUTFBN1VVRkZSQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eFRRVUZUTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4TFFVRkxMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRMmhHTEVsQlFVa3NTMEZCU3l4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRk8xbEJRMnBDTEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF6TkNPMGxCUTBZc1EwRkJRenRKUVVWRUxHZENRVUZuUWl4RFFVRkRMRWxCUVZrN1VVRkROVUlzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlR0WlFVTldMRTFCUVUwc2QwSkJRWGRDTEVOQlFVTTdVMEZETDBJN1VVRkZSQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlR0WlFVTnlRaXhQUVVGUExFdEJRVXNzUTBGQlF6dFRRVU5pTzFGQlJVUXNUVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkZOVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlR0WlFVTm1MRTlCUVU4c1MwRkJTeXhEUVVGRE8xTkJRMkk3VVVGRlJDeFBRVUZQTEZOQlFWTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRemRDTEVOQlFVTTdTVUZGUkN4aFFVRmhMRU5CUVVNc1MwRkJXVHRSUVVONlFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZPMWxCUTFnc1RVRkJUU3gzUWtGQmQwSXNRMEZCUXp0VFFVTXZRanRSUVVWRUxFdEJRVXNzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUlhKQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZPMWxCUTNKQ0xFOUJRVThzUzBGQlN5eERRVUZETzFOQlEySTdVVUZGUkN4TlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRmJFUXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSVHRaUVVObUxFOUJRVThzUzBGQlN5eERRVUZETzFOQlEySTdVVUZGUkN4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVTdXVUZETTBJc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTjZRaXhQUVVGUExFdEJRVXNzUTBGQlF5eGhRVUZoTEVOQlFVTTdVVUZETlVJc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRlNDeFBRVUZQTEZOQlFWTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRemRDTEVOQlFVTTdRMEZEUkNKOSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG9yVHJhbnNmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcihyZWRNdWx0aXBsaWVyID0gMSwgZ3JlZW5NdWx0aXBsaWVyID0gMSwgYmx1ZU11bHRpcGxpZXIgPSAxLCBhbHBoYU11bHRpcGxpZXIgPSAxLCByZWRPZmZzZXQgPSAwLCBncmVlbk9mZnNldCA9IDAsIGJsdWVPZmZzZXQgPSAwLCBhbHBoYU9mZnNldCA9IDApIHtcbiAgICAgICAgdGhpcy5yZWRNdWx0aXBsaWVyID0gcmVkTXVsdGlwbGllcjtcbiAgICAgICAgdGhpcy5ncmVlbk11bHRpcGxpZXIgPSBncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIHRoaXMuYmx1ZU11bHRpcGxpZXIgPSBibHVlTXVsdGlwbGllcjtcbiAgICAgICAgdGhpcy5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIHRoaXMucmVkT2Zmc2V0ID0gcmVkT2Zmc2V0O1xuICAgICAgICB0aGlzLmdyZWVuT2Zmc2V0ID0gZ3JlZW5PZmZzZXQ7XG4gICAgICAgIHRoaXMuYmx1ZU9mZnNldCA9IGJsdWVPZmZzZXQ7XG4gICAgICAgIHRoaXMuYWxwaGFPZmZzZXQgPSBhbHBoYU9mZnNldDtcbiAgICB9XG4gICAgZ2V0IGNvbG9yKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMucmVkT2Zmc2V0IDw8IDE2KSB8ICh0aGlzLmdyZWVuT2Zmc2V0IDw8IDgpIHwgdGhpcy5ibHVlT2Zmc2V0O1xuICAgIH1cbiAgICBzZXQgY29sb3IodmFsdWUpIHtcbiAgICAgICAgdGhpcy5yZWRPZmZzZXQgPSAodmFsdWUgPj4gMTYpICYgMHhmZjtcbiAgICAgICAgdGhpcy5ncmVlbk9mZnNldCA9ICh2YWx1ZSA+PiA4KSAmIDB4ZmY7XG4gICAgICAgIHRoaXMuYmx1ZU9mZnNldCA9IHZhbHVlICYgMHhmZjtcbiAgICAgICAgdGhpcy5yZWRNdWx0aXBsaWVyID0gMDtcbiAgICAgICAgdGhpcy5ncmVlbk11bHRpcGxpZXIgPSAwO1xuICAgICAgICB0aGlzLmJsdWVNdWx0aXBsaWVyID0gMDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgeyByZWRNdWx0aXBsaWVyOiAke3RoaXMucmVkTXVsdGlwbGllcn0sIGdyZWVuTXVsdGlwbGllcjogJHt0aGlzLmdyZWVuTXVsdGlwbGllcn0sIGJsdWVNdWx0aXBsaWVyOiAke3RoaXMuYmx1ZU11bHRpcGxpZXJ9LCBhbHBoYU11bHRpcGxpZXI6ICR7dGhpcy5hbHBoYU11bHRpcGxpZXJ9LCByZWRPZmZzZXQ6ICR7dGhpcy5yZWRPZmZzZXR9LCBncmVlbk9mZnNldDogJHt0aGlzLmdyZWVuT2Zmc2V0fSwgYmx1ZU9mZnNldDogJHt0aGlzLmJsdWVPZmZzZXR9LCBhbHBoYU9mZnNldDogJHt0aGlzLmFscGhhT2Zmc2V0fSB9YDtcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3JUcmFuc2Zvcm0odGhpcy5yZWRNdWx0aXBsaWVyLCB0aGlzLmdyZWVuTXVsdGlwbGllciwgdGhpcy5ibHVlTXVsdGlwbGllciwgdGhpcy5hbHBoYU11bHRpcGxpZXIsIHRoaXMucmVkT2Zmc2V0LCB0aGlzLmdyZWVuT2Zmc2V0LCB0aGlzLmJsdWVPZmZzZXQsIHRoaXMuYWxwaGFPZmZzZXQpO1xuICAgIH1cbiAgICBjb25jYXQoY3QpIHtcbiAgICAgICAgdGhpcy5yZWRNdWx0aXBsaWVyICo9IGN0LnJlZE11bHRpcGxpZXI7XG4gICAgICAgIHRoaXMuZ3JlZW5NdWx0aXBsaWVyICo9IGN0LmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgdGhpcy5ibHVlTXVsdGlwbGllciAqPSBjdC5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgdGhpcy5hbHBoYU11bHRpcGxpZXIgKj0gY3QuYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICB0aGlzLnJlZE9mZnNldCA9IGN0LnJlZE11bHRpcGxpZXIgKiB0aGlzLnJlZE9mZnNldCArIGN0LnJlZE9mZnNldDtcbiAgICAgICAgdGhpcy5ncmVlbk9mZnNldCA9IGN0LmdyZWVuTXVsdGlwbGllciAqIHRoaXMuZ3JlZW5PZmZzZXQgKyBjdC5ncmVlbk9mZnNldDtcbiAgICAgICAgdGhpcy5ibHVlT2Zmc2V0ID0gY3QuYmx1ZU11bHRpcGxpZXIgKiB0aGlzLmJsdWVPZmZzZXQgKyBjdC5ibHVlT2Zmc2V0O1xuICAgICAgICB0aGlzLmFscGhhT2Zmc2V0ID0gY3QuYWxwaGFNdWx0aXBsaWVyICogdGhpcy5hbHBoYU9mZnNldCArIGN0LmFscGhhT2Zmc2V0O1xuICAgIH1cbiAgICBjb3B5RnJvbShjdCkge1xuICAgICAgICB0aGlzLnJlZE11bHRpcGxpZXIgPSBjdC5yZWRNdWx0aXBsaWVyO1xuICAgICAgICB0aGlzLmdyZWVuTXVsdGlwbGllciA9IGN0LmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgdGhpcy5ibHVlTXVsdGlwbGllciA9IGN0LmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICB0aGlzLmFscGhhTXVsdGlwbGllciA9IGN0LmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgdGhpcy5yZWRPZmZzZXQgPSBjdC5yZWRPZmZzZXQ7XG4gICAgICAgIHRoaXMuZ3JlZW5PZmZzZXQgPSBjdC5ncmVlbk9mZnNldDtcbiAgICAgICAgdGhpcy5ibHVlT2Zmc2V0ID0gY3QuYmx1ZU9mZnNldDtcbiAgICAgICAgdGhpcy5hbHBoYU9mZnNldCA9IGN0LmFscGhhT2Zmc2V0O1xuICAgIH1cbiAgICBjb21iaW5lKGN0KSB7XG4gICAgICAgIHRoaXMucmVkTXVsdGlwbGllciAqPSBjdC5yZWRNdWx0aXBsaWVyO1xuICAgICAgICB0aGlzLmdyZWVuTXVsdGlwbGllciAqPSBjdC5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIHRoaXMuYmx1ZU11bHRpcGxpZXIgKj0gY3QuYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIHRoaXMuYWxwaGFNdWx0aXBsaWVyICo9IGN0LmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgdGhpcy5yZWRPZmZzZXQgKz0gY3QucmVkT2Zmc2V0O1xuICAgICAgICB0aGlzLmdyZWVuT2Zmc2V0ICs9IGN0LmdyZWVuT2Zmc2V0O1xuICAgICAgICB0aGlzLmJsdWVPZmZzZXQgKz0gY3QuYmx1ZU9mZnNldDtcbiAgICAgICAgdGhpcy5hbHBoYU9mZnNldCArPSBjdC5hbHBoYU9mZnNldDtcbiAgICB9XG4gICAgaWRlbnRpdHkoKSB7XG4gICAgICAgIHRoaXMucmVkTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHRoaXMuZ3JlZW5NdWx0aXBsaWVyID0gMTtcbiAgICAgICAgdGhpcy5ibHVlTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHRoaXMuYWxwaGFNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgdGhpcy5yZWRPZmZzZXQgPSAwO1xuICAgICAgICB0aGlzLmdyZWVuT2Zmc2V0ID0gMDtcbiAgICAgICAgdGhpcy5ibHVlT2Zmc2V0ID0gMDtcbiAgICAgICAgdGhpcy5hbHBoYU9mZnNldCA9IDA7XG4gICAgfVxuICAgIGVxdWFscyhjdCwgc2tpcEFscGhhTXVsdGlwbGllciA9IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBjdCAhPSBudWxsXG4gICAgICAgICAgICAmJiB0aGlzLnJlZE11bHRpcGxpZXIgPT09IGN0LnJlZE11bHRpcGxpZXJcbiAgICAgICAgICAgICYmIHRoaXMuZ3JlZW5NdWx0aXBsaWVyID09PSBjdC5ncmVlbk11bHRpcGxpZXJcbiAgICAgICAgICAgICYmIHRoaXMuYmx1ZU11bHRpcGxpZXIgPT09IGN0LmJsdWVNdWx0aXBsaWVyXG4gICAgICAgICAgICAmJiAoc2tpcEFscGhhTXVsdGlwbGllciB8fCB0aGlzLmFscGhhTXVsdGlwbGllciA9PT0gY3QuYWxwaGFNdWx0aXBsaWVyKVxuICAgICAgICAgICAgJiYgdGhpcy5yZWRPZmZzZXQgPT09IGN0LnJlZE9mZnNldFxuICAgICAgICAgICAgJiYgdGhpcy5ncmVlbk9mZnNldCA9PT0gY3QuZ3JlZW5PZmZzZXRcbiAgICAgICAgICAgICYmIHRoaXMuYmx1ZU9mZnNldCA9PT0gY3QuYmx1ZU9mZnNldFxuICAgICAgICAgICAgJiYgdGhpcy5hbHBoYU9mZnNldCA9PT0gY3QuYWxwaGFPZmZzZXQ7XG4gICAgfVxuICAgIGlzRGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgdGhpcy5ncmVlbk11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIHRoaXMuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIHRoaXMuYWxwaGFNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiB0aGlzLnJlZE9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgdGhpcy5ncmVlbk9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgdGhpcy5ibHVlT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiB0aGlzLmFscGhhT2Zmc2V0ID09PSAwO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyOXNiM0pVY21GdWMyWnZjbTB1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdlEyOXNiM0pVY21GdWMyWnZjbTB1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUVUZCVFN4RFFVRkRMRTlCUVU4c1QwRkJUeXhqUVVGak8wbEJWMnhETEZsQlFWa3NaMEpCUVhkQ0xFTkJRVU1zUlVGQlJTeHJRa0ZCTUVJc1EwRkJReXhGUVVGRkxHbENRVUY1UWl4RFFVRkRMRVZCUVVVc2EwSkJRVEJDTEVOQlFVTXNSVUZCUlN4WlFVRnZRaXhEUVVGRExFVkJRVVVzWTBGQmMwSXNRMEZCUXl4RlFVRkZMR0ZCUVhGQ0xFTkJRVU1zUlVGQlJTeGpRVUZ6UWl4RFFVRkRPMUZCUXpOT0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NZVUZCWVN4RFFVRkRPMUZCUTI1RExFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NaVUZCWlN4RFFVRkRPMUZCUTNaRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVkQlFVY3NZMEZCWXl4RFFVRkRPMUZCUTNKRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NaVUZCWlN4RFFVRkRPMUZCUlhaRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUXpOQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NWMEZCVnl4RFFVRkRPMUZCUXk5Q0xFbEJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NWVUZCVlN4RFFVRkRPMUZCUXpkQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NWMEZCVnl4RFFVRkRPMGxCUTJoRExFTkJRVU03U1VGRlJDeEpRVUZKTEV0QlFVczdVVUZEVWl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJRenRKUVVNelJTeERRVUZETzBsQlJVUXNTVUZCU1N4TFFVRkxMRU5CUVVNc1MwRkJZVHRSUVVOMFFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTjBReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU4yUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZGTDBJc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZGtJc1NVRkJTU3hEUVVGRExHVkJRV1VzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZWtJc1NVRkJTU3hEUVVGRExHTkJRV01zUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEZWtJc1EwRkJRenRKUVVWRUxGRkJRVkU3VVVGRFVDeFBRVUZQTEc5Q1FVRnZRaXhKUVVGSkxFTkJRVU1zWVVGQllTeHpRa0ZCYzBJc1NVRkJTU3hEUVVGRExHVkJRV1VzY1VKQlFYRkNMRWxCUVVrc1EwRkJReXhqUVVGakxITkNRVUZ6UWl4SlFVRkpMRU5CUVVNc1pVRkJaU3huUWtGQlowSXNTVUZCU1N4RFFVRkRMRk5CUVZNc2EwSkJRV3RDTEVsQlFVa3NRMEZCUXl4WFFVRlhMR2xDUVVGcFFpeEpRVUZKTEVOQlFVTXNWVUZCVlN4clFrRkJhMElzU1VGQlNTeERRVUZETEZkQlFWY3NTVUZCU1N4RFFVRkRPMGxCUTJwVUxFTkJRVU03U1VGRlJDeExRVUZMTzFGQlEwb3NUMEZCVHl4SlFVRkpMR05CUVdNc1EwRkRlRUlzU1VGQlNTeERRVUZETEdGQlFXRXNSVUZEYkVJc1NVRkJTU3hEUVVGRExHVkJRV1VzUlVGRGNFSXNTVUZCU1N4RFFVRkRMR05CUVdNc1JVRkRia0lzU1VGQlNTeERRVUZETEdWQlFXVXNSVUZGY0VJc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGRFpDeEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVTm9RaXhKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVU5tTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUTJoQ0xFTkJRVU03U1VGRFNDeERRVUZETzBsQlJVUXNUVUZCVFN4RFFVRkRMRVZCUVd0Q08xRkJRM2hDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWxCUVVrc1JVRkJSU3hEUVVGRExHRkJRV0VzUTBGQlF6dFJRVU4yUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hKUVVGSkxFVkJRVVVzUTBGQlF5eGxRVUZsTEVOQlFVTTdVVUZETTBNc1NVRkJTU3hEUVVGRExHTkJRV01zU1VGQlNTeEZRVUZGTEVOQlFVTXNZMEZCWXl4RFFVRkRPMUZCUTNwRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVsQlFVa3NSVUZCUlN4RFFVRkRMR1ZCUVdVc1EwRkJRenRSUVVVelF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkhMRVZCUVVVc1EwRkJReXhoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1UwRkJVeXhEUVVGRE8xRkJRMnhGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1JVRkJSU3hEUVVGRExHVkJRV1VzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRVZCUVVVc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRE1VVXNTVUZCU1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhGUVVGRkxFTkJRVU1zWTBGQll5eEhRVUZITEVsQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1JVRkJSU3hEUVVGRExGVkJRVlVzUTBGQlF6dFJRVU4wUlN4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFVkJRVVVzUTBGQlF5eGxRVUZsTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhGUVVGRkxFTkJRVU1zVjBGQlZ5eERRVUZETzBsQlF6TkZMRU5CUVVNN1NVRkZSQ3hSUVVGUkxFTkJRVU1zUlVGQmEwSTdVVUZETVVJc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eEZRVUZGTEVOQlFVTXNZVUZCWVN4RFFVRkRPMUZCUTNSRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NSVUZCUlN4RFFVRkRMR1ZCUVdVc1EwRkJRenRSUVVNeFF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRVZCUVVVc1EwRkJReXhqUVVGakxFTkJRVU03VVVGRGVFTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1IwRkJSeXhGUVVGRkxFTkJRVU1zWlVGQlpTeERRVUZETzFGQlJURkRMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzUlVGQlJTeERRVUZETEZOQlFWTXNRMEZCUXp0UlFVTTVRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVWQlFVVXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRiRU1zU1VGQlNTeERRVUZETEZWQlFWVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1ZVRkJWU3hEUVVGRE8xRkJRMmhETEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1JVRkJSU3hEUVVGRExGZEJRVmNzUTBGQlF6dEpRVU51UXl4RFFVRkRPMGxCUlVRc1QwRkJUeXhEUVVGRExFVkJRV3RDTzFGQlEzcENMRWxCUVVrc1EwRkJReXhoUVVGaExFbEJRVWtzUlVGQlJTeERRVUZETEdGQlFXRXNRMEZCUXp0UlFVTjJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEpRVUZKTEVWQlFVVXNRMEZCUXl4bFFVRmxMRU5CUVVNN1VVRkRNME1zU1VGQlNTeERRVUZETEdOQlFXTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1kwRkJZeXhEUVVGRE8xRkJRM3BETEVsQlFVa3NRMEZCUXl4bFFVRmxMRWxCUVVrc1JVRkJSU3hEUVVGRExHVkJRV1VzUTBGQlF6dFJRVVV6UXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhKUVVGSkxFVkJRVVVzUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZETDBJc1NVRkJTU3hEUVVGRExGZEJRVmNzU1VGQlNTeEZRVUZGTEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUTI1RExFbEJRVWtzUTBGQlF5eFZRVUZWTEVsQlFVa3NSVUZCUlN4RFFVRkRMRlZCUVZVc1EwRkJRenRSUVVOcVF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SlFVRkpMRVZCUVVVc1EwRkJReXhYUVVGWExFTkJRVU03U1VGRGNFTXNRMEZCUXp0SlFVVkVMRkZCUVZFN1VVRkRVQ3hKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjJRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjZRaXhKUVVGSkxFTkJRVU1zWTBGQll5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjRRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVjZRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTnVRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTnlRaXhKUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTndRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTjBRaXhEUVVGRE8wbEJSVVFzVFVGQlRTeERRVUZETEVWQlFXdENMRVZCUVVVc2MwSkJRU3RDTEV0QlFVczdVVUZET1VRc1QwRkJUeXhGUVVGRkxFbEJRVWtzU1VGQlNUdGxRVU5pTEVsQlFVa3NRMEZCUXl4aFFVRmhMRXRCUVVzc1JVRkJSU3hEUVVGRExHRkJRV0U3WlVGRGRrTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1MwRkJTeXhGUVVGRkxFTkJRVU1zWlVGQlpUdGxRVU16UXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhMUVVGTExFVkJRVVVzUTBGQlF5eGpRVUZqTzJWQlEzcERMRU5CUVVNc2JVSkJRVzFDTEVsQlFVa3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1MwRkJTeXhGUVVGRkxFTkJRVU1zWlVGQlpTeERRVUZETzJWQlEzQkZMRWxCUVVrc1EwRkJReXhUUVVGVExFdEJRVXNzUlVGQlJTeERRVUZETEZOQlFWTTdaVUZETDBJc1NVRkJTU3hEUVVGRExGZEJRVmNzUzBGQlN5eEZRVUZGTEVOQlFVTXNWMEZCVnp0bFFVTnVReXhKUVVGSkxFTkJRVU1zVlVGQlZTeExRVUZMTEVWQlFVVXNRMEZCUXl4VlFVRlZPMlZCUTJwRExFbEJRVWtzUTBGQlF5eFhRVUZYTEV0QlFVc3NSVUZCUlN4RFFVRkRMRmRCUVZjc1EwRkJRenRKUVVONlF5eERRVUZETzBsQlJVUXNVMEZCVXp0UlFVTlNMRTlCUVU4c1NVRkJTU3hEUVVGRExHRkJRV0VzUzBGQlN5eERRVUZETzJWQlF6TkNMRWxCUVVrc1EwRkJReXhsUVVGbExFdEJRVXNzUTBGQlF6dGxRVU14UWl4SlFVRkpMRU5CUVVNc1kwRkJZeXhMUVVGTExFTkJRVU03WlVGRGVrSXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1MwRkJTeXhEUVVGRE8yVkJRekZDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRXRCUVVzc1EwRkJRenRsUVVOd1FpeEpRVUZKTEVOQlFVTXNWMEZCVnl4TFFVRkxMRU5CUVVNN1pVRkRkRUlzU1VGQlNTeERRVUZETEZWQlFWVXNTMEZCU3l4RFFVRkRPMlZCUTNKQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXpWQ0xFTkJRVU03UTBGRFJDSjkiLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9Qb2ludCc7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vUmVjdGFuZ2xlJztcbmNvbnN0IGx0ID0gbmV3IFBvaW50KCk7XG5jb25zdCBsYiA9IG5ldyBQb2ludCgpO1xuY29uc3QgcnQgPSBuZXcgUG9pbnQoKTtcbmNvbnN0IHJiID0gbmV3IFBvaW50KCk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXgge1xuICAgIGNvbnN0cnVjdG9yKGEgPSAxLCBiID0gMCwgYyA9IDAsIGQgPSAxLCB0eCA9IDAsIHR5ID0gMCkge1xuICAgICAgICB0aGlzLmEgPSBhO1xuICAgICAgICB0aGlzLmIgPSBiO1xuICAgICAgICB0aGlzLmMgPSBjO1xuICAgICAgICB0aGlzLmQgPSBkO1xuICAgICAgICB0aGlzLnR4ID0gdHg7XG4gICAgICAgIHRoaXMudHkgPSB0eTtcbiAgICB9XG4gICAgZ2V0IGRldGVybWluYW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hICogdGhpcy5kIC0gdGhpcy5iICogdGhpcy5jO1xuICAgIH1cbiAgICBnZXQgcG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy50eCwgdGhpcy50eSk7XG4gICAgfVxuICAgIHNldCBwb3NpdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLnR4ID0gdmFsdWUueDtcbiAgICAgICAgdGhpcy50eSA9IHZhbHVlLnk7XG4gICAgfVxuICAgIGdldCBvcnRYKCkge1xuICAgICAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMuYSwgdGhpcy5iKTtcbiAgICB9XG4gICAgc2V0IG9ydFgodmFsdWUpIHtcbiAgICAgICAgdGhpcy5hID0gdmFsdWUueDtcbiAgICAgICAgdGhpcy5iID0gdmFsdWUueTtcbiAgICB9XG4gICAgZ2V0IG9ydFkoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5jLCB0aGlzLmQpO1xuICAgIH1cbiAgICBzZXQgb3J0WSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmMgPSB2YWx1ZS54O1xuICAgICAgICB0aGlzLmQgPSB2YWx1ZS55O1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGB7IGE6ICR7dGhpcy5hfSwgYjogJHt0aGlzLmJ9LCBjOiAke3RoaXMuY30sIGQ6ICR7dGhpcy5kfSwgdHg6ICR7dGhpcy50eH0sIHR5OiAke3RoaXMudHl9IH1gO1xuICAgIH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgodGhpcy5hLCB0aGlzLmIsIHRoaXMuYywgdGhpcy5kLCB0aGlzLnR4LCB0aGlzLnR5KTtcbiAgICB9XG4gICAgY29uY2F0KG1hdHJpeCkge1xuICAgICAgICBjb25zdCBhID0gdGhpcy5hICogbWF0cml4LmEgKyB0aGlzLmIgKiBtYXRyaXguYztcbiAgICAgICAgY29uc3QgYiA9IHRoaXMuYSAqIG1hdHJpeC5iICsgdGhpcy5iICogbWF0cml4LmQ7XG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLmMgKiBtYXRyaXguYSArIHRoaXMuZCAqIG1hdHJpeC5jO1xuICAgICAgICBjb25zdCBkID0gdGhpcy5jICogbWF0cml4LmIgKyB0aGlzLmQgKiBtYXRyaXguZDtcbiAgICAgICAgY29uc3QgdHggPSB0aGlzLnR4ICogbWF0cml4LmEgKyB0aGlzLnR5ICogbWF0cml4LmMgKyBtYXRyaXgudHg7XG4gICAgICAgIGNvbnN0IHR5ID0gdGhpcy50eCAqIG1hdHJpeC5iICsgdGhpcy50eSAqIG1hdHJpeC5kICsgbWF0cml4LnR5O1xuICAgICAgICB0aGlzLmEgPSBhO1xuICAgICAgICB0aGlzLmIgPSBiO1xuICAgICAgICB0aGlzLmMgPSBjO1xuICAgICAgICB0aGlzLmQgPSBkO1xuICAgICAgICB0aGlzLnR4ID0gdHg7XG4gICAgICAgIHRoaXMudHkgPSB0eTtcbiAgICB9XG4gICAgY29weUZyb20obWF0cml4KSB7XG4gICAgICAgIHRoaXMuYSA9IG1hdHJpeC5hO1xuICAgICAgICB0aGlzLmIgPSBtYXRyaXguYjtcbiAgICAgICAgdGhpcy5jID0gbWF0cml4LmM7XG4gICAgICAgIHRoaXMuZCA9IG1hdHJpeC5kO1xuICAgICAgICB0aGlzLnR4ID0gbWF0cml4LnR4O1xuICAgICAgICB0aGlzLnR5ID0gbWF0cml4LnR5O1xuICAgIH1cbiAgICBjcmVhdGVCb3goc2NhbGVYLCBzY2FsZVksIHJvdGF0aW9uID0gMCwgeCA9IDAsIHkgPSAwKSB7XG4gICAgICAgIGlmIChyb3RhdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3Mocm90YXRpb24pO1xuICAgICAgICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW4ocm90YXRpb24pO1xuICAgICAgICAgICAgdGhpcy5hID0gY29zICogc2NhbGVYO1xuICAgICAgICAgICAgdGhpcy5iID0gc2luICogc2NhbGVYO1xuICAgICAgICAgICAgdGhpcy5jID0gLXNpbiAqIHNjYWxlWTtcbiAgICAgICAgICAgIHRoaXMuZCA9IGNvcyAqIHNjYWxlWTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYSA9IHNjYWxlWDtcbiAgICAgICAgICAgIHRoaXMuYiA9IDA7XG4gICAgICAgICAgICB0aGlzLmMgPSAwO1xuICAgICAgICAgICAgdGhpcy5kID0gc2NhbGVZO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHggPSB4O1xuICAgICAgICB0aGlzLnR5ID0geTtcbiAgICB9XG4gICAgY3JlYXRlR3JhZGllbnRCb3god2lkdGgsIGhlaWdodCwgcm90YXRpb24gPSAwLCB4ID0gMCwgeSA9IDApIHtcbiAgICAgICAgdGhpcy5hID0gd2lkdGggLyAxNjM4LjQ7XG4gICAgICAgIHRoaXMuZCA9IGhlaWdodCAvIDE2MzguNDtcbiAgICAgICAgaWYgKHJvdGF0aW9uICE9PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gICAgICAgICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihyb3RhdGlvbik7XG4gICAgICAgICAgICB0aGlzLmIgPSBzaW4gKiB0aGlzLmQ7XG4gICAgICAgICAgICB0aGlzLmMgPSAtc2luICogdGhpcy5hO1xuICAgICAgICAgICAgdGhpcy5hICo9IGNvcztcbiAgICAgICAgICAgIHRoaXMuZCAqPSBjb3M7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmIgPSAwO1xuICAgICAgICAgICAgdGhpcy5jID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnR4ID0geCArIHdpZHRoIC8gMjtcbiAgICAgICAgdGhpcy50eSA9IHkgKyBoZWlnaHQgLyAyO1xuICAgIH1cbiAgICBkZWx0YVRyYW5zZm9ybVBvaW50KHBvaW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQocG9pbnQueCAqIHRoaXMuYSArIHBvaW50LnkgKiB0aGlzLmMsIHBvaW50LnggKiB0aGlzLmIgKyBwb2ludC55ICogdGhpcy5kKTtcbiAgICB9XG4gICAgZXF1YWxzKHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlICE9PSBudWxsXG4gICAgICAgICAgICAmJiB0aGlzLnR4ID09PSBzb3VyY2UudHhcbiAgICAgICAgICAgICYmIHRoaXMudHkgPT09IHNvdXJjZS50eVxuICAgICAgICAgICAgJiYgdGhpcy5hID09PSBzb3VyY2UuYVxuICAgICAgICAgICAgJiYgdGhpcy5iID09PSBzb3VyY2UuYlxuICAgICAgICAgICAgJiYgdGhpcy5jID09PSBzb3VyY2UuY1xuICAgICAgICAgICAgJiYgdGhpcy5kID09PSBzb3VyY2UuZDtcbiAgICB9XG4gICAgaWRlbnRpdHkoKSB7XG4gICAgICAgIHRoaXMuYSA9IDE7XG4gICAgICAgIHRoaXMuYiA9IDA7XG4gICAgICAgIHRoaXMuYyA9IDA7XG4gICAgICAgIHRoaXMuZCA9IDE7XG4gICAgICAgIHRoaXMudHggPSAwO1xuICAgICAgICB0aGlzLnR5ID0gMDtcbiAgICB9XG4gICAgaW52ZXJ0KCkge1xuICAgICAgICBsZXQgeyBkZXRlcm1pbmFudCB9ID0gdGhpcztcbiAgICAgICAgaWYgKGRldGVybWluYW50ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmEgPSAwO1xuICAgICAgICAgICAgdGhpcy5iID0gMDtcbiAgICAgICAgICAgIHRoaXMuYyA9IDA7XG4gICAgICAgICAgICB0aGlzLmQgPSAwO1xuICAgICAgICAgICAgdGhpcy50eCA9IC10aGlzLnR4O1xuICAgICAgICAgICAgdGhpcy50eSA9IC10aGlzLnR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGV0ZXJtaW5hbnQgPSAxLjAgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLmQgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIGNvbnN0IGEgPSB0aGlzLmEgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHRoaXMuYSA9IGQ7XG4gICAgICAgICAgICB0aGlzLmIgKj0gLWRldGVybWluYW50O1xuICAgICAgICAgICAgdGhpcy5jICo9IC1kZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHRoaXMuZCA9IGE7XG4gICAgICAgICAgICBjb25zdCB0eCA9IC10aGlzLmEgKiB0aGlzLnR4IC0gdGhpcy5jICogdGhpcy50eTtcbiAgICAgICAgICAgIGNvbnN0IHR5ID0gLXRoaXMuYiAqIHRoaXMudHggLSB0aGlzLmQgKiB0aGlzLnR5O1xuICAgICAgICAgICAgdGhpcy50eCA9IHR4O1xuICAgICAgICAgICAgdGhpcy50eSA9IHR5O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJvdGF0ZShhbmdsZSkge1xuICAgICAgICBpZiAoYW5nbGUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcbiAgICAgICAgY29uc3QgYSA9IHRoaXMuYSAqIGNvcyAtIHRoaXMuYiAqIHNpbjtcbiAgICAgICAgY29uc3QgYiA9IHRoaXMuYSAqIHNpbiArIHRoaXMuYiAqIGNvcztcbiAgICAgICAgY29uc3QgYyA9IHRoaXMuYyAqIGNvcyAtIHRoaXMuZCAqIHNpbjtcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuYyAqIHNpbiArIHRoaXMuZCAqIGNvcztcbiAgICAgICAgY29uc3QgdHggPSB0aGlzLnR4ICogY29zIC0gdGhpcy50eSAqIHNpbjtcbiAgICAgICAgY29uc3QgdHkgPSB0aGlzLnR4ICogc2luICsgdGhpcy50eSAqIGNvcztcbiAgICAgICAgdGhpcy5hID0gYTtcbiAgICAgICAgdGhpcy5iID0gYjtcbiAgICAgICAgdGhpcy5jID0gYztcbiAgICAgICAgdGhpcy5kID0gZDtcbiAgICAgICAgdGhpcy50eCA9IHR4O1xuICAgICAgICB0aGlzLnR5ID0gdHk7XG4gICAgfVxuICAgIHNjYWxlKHgsIHkpIHtcbiAgICAgICAgdGhpcy5hICo9IHg7XG4gICAgICAgIHRoaXMuYiAqPSB5O1xuICAgICAgICB0aGlzLmMgKj0geDtcbiAgICAgICAgdGhpcy5kICo9IHk7XG4gICAgICAgIHRoaXMudHggKj0geDtcbiAgICAgICAgdGhpcy50eSAqPSB5O1xuICAgIH1cbiAgICBzZXRSb3RhdGlvbihhbmdsZSwgc2NhbGUgPSAxKSB7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmNvcyhhbmdsZSkgKiBzY2FsZTtcbiAgICAgICAgY29uc3QgeSA9IE1hdGguc2luKGFuZ2xlKSAqIHNjYWxlO1xuICAgICAgICB0aGlzLmEgPSB4O1xuICAgICAgICB0aGlzLmMgPSB5O1xuICAgICAgICB0aGlzLmIgPSAteTtcbiAgICAgICAgdGhpcy5kID0geDtcbiAgICB9XG4gICAgc2V0VG8oYSwgYiwgYywgZCwgdHgsIHR5KSB7XG4gICAgICAgIHRoaXMuYSA9IGE7XG4gICAgICAgIHRoaXMuYiA9IGI7XG4gICAgICAgIHRoaXMuYyA9IGM7XG4gICAgICAgIHRoaXMuZCA9IGQ7XG4gICAgICAgIHRoaXMudHggPSB0eDtcbiAgICAgICAgdGhpcy50eSA9IHR5O1xuICAgIH1cbiAgICB0cmFuc2xhdGUoeCwgeSkge1xuICAgICAgICB0aGlzLnR4ICs9IHg7XG4gICAgICAgIHRoaXMudHkgKz0geTtcbiAgICB9XG4gICAgdHJhbnNmb3JtUG9pbnQocG9pbnQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBvaW50KCk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtUG9pbnRUbyhwb2ludCwgcmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgdHJhbnNmb3JtUG9pbnRUbyhzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHNvdXJjZTtcbiAgICAgICAgdGFyZ2V0LnggPSB4ICogdGhpcy5hICsgeSAqIHRoaXMuYyArIHRoaXMudHg7XG4gICAgICAgIHRhcmdldC55ID0geCAqIHRoaXMuYiArIHkgKiB0aGlzLmQgKyB0aGlzLnR5O1xuICAgIH1cbiAgICB0cmFuc2Zvcm1YKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIHggKiB0aGlzLmEgKyB5ICogdGhpcy5jICsgdGhpcy50eDtcbiAgICB9XG4gICAgdHJhbnNmb3JtWSh4LCB5KSB7XG4gICAgICAgIHJldHVybiB4ICogdGhpcy5iICsgeSAqIHRoaXMuZCArIHRoaXMudHk7XG4gICAgfVxuICAgIHRyYW5zZm9ybUludmVyc2VQb2ludChwb2ludCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUG9pbnQoKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1JbnZlcnNlUG9pbnRUbyhwb2ludCwgcmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgdHJhbnNmb3JtSW52ZXJzZVBvaW50VG8oc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgbGV0IHsgZGV0ZXJtaW5hbnQgfSA9IHRoaXM7XG4gICAgICAgIGlmIChkZXRlcm1pbmFudCA9PT0gMCkge1xuICAgICAgICAgICAgdGFyZ2V0LnggPSAtdGhpcy50eDtcbiAgICAgICAgICAgIHRhcmdldC55ID0gLXRoaXMudHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCA9IDEgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gc291cmNlO1xuICAgICAgICAgICAgdGFyZ2V0LnggPSBkZXRlcm1pbmFudCAqICh0aGlzLmMgKiAodGhpcy50eSAtIHkpICsgdGhpcy5kICogKHggLSB0aGlzLnR4KSk7XG4gICAgICAgICAgICB0YXJnZXQueSA9IGRldGVybWluYW50ICogKHRoaXMuYSAqICh5IC0gdGhpcy50eSkgKyB0aGlzLmIgKiAodGhpcy50eCAtIHgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0cmFuc2Zvcm1JbnZlcnNlWCh4LCB5KSB7XG4gICAgICAgIGxldCB7IGRldGVybWluYW50IH0gPSB0aGlzO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAtdGhpcy50eDtcbiAgICAgICAgfVxuICAgICAgICBkZXRlcm1pbmFudCA9IDEgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgcmV0dXJuIGRldGVybWluYW50ICogKHRoaXMuYyAqICh0aGlzLnR5IC0geSkgKyB0aGlzLmQgKiAoeCAtIHRoaXMudHgpKTtcbiAgICB9XG4gICAgdHJhbnNmb3JtSW52ZXJzZVkoeCwgeSkge1xuICAgICAgICBsZXQgeyBkZXRlcm1pbmFudCB9ID0gdGhpcztcbiAgICAgICAgaWYgKGRldGVybWluYW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gLXRoaXMudHk7XG4gICAgICAgIH1cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSAxIC8gZGV0ZXJtaW5hbnQ7XG4gICAgICAgIHJldHVybiBkZXRlcm1pbmFudCAqICh0aGlzLmEgKiAoeSAtIHRoaXMudHkpICsgdGhpcy5iICogKHRoaXMudHggLSB4KSk7XG4gICAgfVxuICAgIHRyYW5zZm9ybVJlY3QocmVjdCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUmVjdGFuZ2xlKCk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtUmVjdFRvKHJlY3QsIHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHRyYW5zZm9ybVJlY3RUbyhzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICBjb25zdCB7IHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCwgfSA9IHNvdXJjZTtcbiAgICAgICAgbHQuc2V0VG8obGVmdCwgdG9wKTtcbiAgICAgICAgbGIuc2V0VG8obGVmdCwgYm90dG9tKTtcbiAgICAgICAgcnQuc2V0VG8ocmlnaHQsIHRvcCk7XG4gICAgICAgIHJiLnNldFRvKHJpZ2h0LCBib3R0b20pO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybVBvaW50VG8obHQsIGx0KTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1Qb2ludFRvKGxiLCBsYik7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtUG9pbnRUbyhydCwgcnQpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybVBvaW50VG8ocmIsIHJiKTtcbiAgICAgICAgY29uc3QgbWluWCA9IE1hdGgubWluKGx0LngsIGxiLngsIHJ0LngsIHJiLngpO1xuICAgICAgICBjb25zdCBtYXhYID0gTWF0aC5tYXgobHQueCwgbGIueCwgcnQueCwgcmIueCk7XG4gICAgICAgIGNvbnN0IG1pblkgPSBNYXRoLm1pbihsdC55LCBsYi55LCBydC55LCByYi55KTtcbiAgICAgICAgY29uc3QgbWF4WSA9IE1hdGgubWF4KGx0LnksIGxiLnksIHJ0LnksIHJiLnkpO1xuICAgICAgICB0YXJnZXQueCA9IG1pblg7XG4gICAgICAgIHRhcmdldC55ID0gbWluWTtcbiAgICAgICAgdGFyZ2V0LndpZHRoID0gbWF4WCAtIG1pblg7XG4gICAgICAgIHRhcmdldC5oZWlnaHQgPSBtYXhZIC0gbWluWTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUV0YwY21sNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMDFoZEhKcGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4UFFVRlBMRXRCUVVzc1RVRkJUU3hUUVVGVExFTkJRVU03UVVGRE5VSXNUMEZCVHl4VFFVRlRMRTFCUVUwc1lVRkJZU3hEUVVGRE8wRkJSWEJETEUxQlFVMHNSVUZCUlN4SFFVRkhMRWxCUVVrc1MwRkJTeXhGUVVGRkxFTkJRVU03UVVGRGRrSXNUVUZCVFN4RlFVRkZMRWRCUVVjc1NVRkJTU3hMUVVGTExFVkJRVVVzUTBGQlF6dEJRVU4yUWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxFdEJRVXNzUlVGQlJTeERRVUZETzBGQlEzWkNMRTFCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzUzBGQlN5eEZRVUZGTEVOQlFVTTdRVUZGZGtJc1RVRkJUU3hEUVVGRExFOUJRVThzVDBGQlR5eE5RVUZOTzBsQlVURkNMRmxCUVZrc1NVRkJXU3hEUVVGRExFVkJRVVVzU1VGQldTeERRVUZETEVWQlFVVXNTVUZCV1N4RFFVRkRMRVZCUVVVc1NVRkJXU3hEUVVGRExFVkJRVVVzUzBGQllTeERRVUZETEVWQlFVVXNTMEZCWVN4RFFVRkRPMUZCUTNKSExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTFnc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEV0N4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5ZTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMWdzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRZaXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVTmtMRU5CUVVNN1NVRkZSQ3hKUVVGSkxGZEJRVmM3VVVGRFpDeFBRVUZQTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE1VTXNRMEZCUXp0SlFVVkVMRWxCUVVrc1VVRkJVVHRSUVVOWUxFOUJRVThzU1VGQlNTeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEY0VNc1EwRkJRenRKUVVWRUxFbEJRVWtzVVVGQlVTeERRVUZETEV0QlFWazdVVUZEZUVJc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOdVFpeERRVUZETzBsQlJVUXNTVUZCU1N4SlFVRkpPMUZCUTFBc1QwRkJUeXhKUVVGSkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5zUXl4RFFVRkRPMGxCUlVRc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQldUdFJRVU53UWl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtJc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJ4Q0xFTkJRVU03U1VGRlJDeEpRVUZKTEVsQlFVazdVVUZEVUN4UFFVRlBMRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMnhETEVOQlFVTTdTVUZGUkN4SlFVRkpMRWxCUVVrc1EwRkJReXhMUVVGWk8xRkJRM0JDTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5xUWl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYkVJc1EwRkJRenRKUVVWRUxGRkJRVkU3VVVGRFVDeFBRVUZQTEZGQlFWRXNTVUZCU1N4RFFVRkRMRU5CUVVNc1VVRkJVU3hKUVVGSkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVsQlFVa3NRMEZCUXl4RFFVRkRMRkZCUVZFc1NVRkJTU3hEUVVGRExFTkJRVU1zVTBGQlV5eEpRVUZKTEVOQlFVTXNSVUZCUlN4VFFVRlRMRWxCUVVrc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF6dEpRVU55Unl4RFFVRkRPMGxCUlVRc1MwRkJTenRSUVVOS0xFOUJRVThzU1VGQlNTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU55UlN4RFFVRkRPMGxCUlVRc1RVRkJUU3hEUVVGRExFMUJRV003VVVGRGNFSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTm9SQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhFTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYUVRc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOb1JDeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNN1VVRkRMMFFzVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUlM5RUxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTFnc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEV0N4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5ZTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMWdzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRZaXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVTmtMRU5CUVVNN1NVRkZSQ3hSUVVGUkxFTkJRVU1zVFVGQll6dFJRVU4wUWl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYkVJc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOc1FpeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJFSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETzFGQlEzQkNMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXp0SlFVTnlRaXhEUVVGRE8wbEJSVVFzVTBGQlV5eERRVUZETEUxQlFXTXNSVUZCUlN4TlFVRmpMRVZCUVVVc1YwRkJiVUlzUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXl4RlFVRkZMRWxCUVZrc1EwRkJRenRSUVVNelJpeEpRVUZKTEZGQlFWRXNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRia0lzVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVU12UWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMWxCUlM5Q0xFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRTFCUVUwc1EwRkJRenRaUVVOMFFpeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhOUVVGTkxFTkJRVU03V1VGRGRFSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdXVUZEZGtJc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NUVUZCVFN4RFFVRkRPMU5CUTNSQ08yRkJRVTA3V1VGRFRpeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJRenRaUVVOb1FpeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOWUxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTFnc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTTdVMEZEYUVJN1VVRkZSQ3hKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTmFMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEySXNRMEZCUXp0SlFVVkVMR2xDUVVGcFFpeERRVUZETEV0QlFXRXNSVUZCUlN4TlFVRmpMRVZCUVVVc1YwRkJiVUlzUTBGQlF5eEZRVUZGTEVsQlFWa3NRMEZCUXl4RlFVRkZMRWxCUVZrc1EwRkJRenRSUVVOc1J5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRGVFSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETzFGQlJYcENMRWxCUVVrc1VVRkJVU3hMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU51UWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMWxCUXk5Q0xFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03V1VGRkwwSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBRaXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGRrSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU03V1VGRFpDeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJRenRUUVVOa08yRkJRVTA3V1VGRFRpeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOWUxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUTFnN1VVRkZSQ3hKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNSMEZCUnl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM2hDTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGSExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRUxHMUNRVUZ0UWl4RFFVRkRMRXRCUVZrN1VVRkRMMElzVDBGQlR5eEpRVUZKTEV0QlFVc3NRMEZEWml4TFFVRkxMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVU51UXl4TFFVRkxMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVU51UXl4RFFVRkRPMGxCUTBnc1EwRkJRenRKUVVWRUxFMUJRVTBzUTBGQlF5eE5RVUZqTzFGQlEzQkNMRTlCUVU4c1RVRkJUU3hMUVVGTExFbEJRVWs3WlVGRGJFSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1MwRkJTeXhOUVVGTkxFTkJRVU1zUlVGQlJUdGxRVU55UWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hMUVVGTExFMUJRVTBzUTBGQlF5eEZRVUZGTzJWQlEzSkNMRWxCUVVrc1EwRkJReXhEUVVGRExFdEJRVXNzVFVGQlRTeERRVUZETEVOQlFVTTdaVUZEYmtJc1NVRkJTU3hEUVVGRExFTkJRVU1zUzBGQlN5eE5RVUZOTEVOQlFVTXNRMEZCUXp0bFFVTnVRaXhKUVVGSkxFTkJRVU1zUTBGQlF5eExRVUZMTEUxQlFVMHNRMEZCUXl4RFFVRkRPMlZCUTI1Q0xFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONlFpeERRVUZETzBsQlJVUXNVVUZCVVR0UlFVTlFMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlExZ3NTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFdDeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOWUxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTFnc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEV2l4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU5pTEVOQlFVTTdTVUZGUkN4TlFVRk5PMUZCUTB3c1NVRkJTU3hGUVVGRkxGZEJRVmNzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVVXpRaXhKUVVGSkxGZEJRVmNzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEZEVJc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEV0N4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU5ZTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMWdzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRXQ3hKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJRenRaUVVOdVFpeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF6dFRRVU51UWp0aFFVRk5PMWxCUTA0c1YwRkJWeXhIUVVGSExFZEJRVWNzUjBGQlJ5eFhRVUZYTEVOQlFVTTdXVUZGYUVNc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4WFFVRlhMRU5CUVVNN1dVRkRMMElzVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhYUVVGWExFTkJRVU03V1VGRkwwSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRFdDeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xbEJRM1pDTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03V1VGRGRrSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRldDeE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTTdXVUZEYUVRc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRE8xbEJSV2hFTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRMklzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1UwRkRZanRKUVVOR0xFTkJRVU03U1VGRlJDeE5RVUZOTEVOQlFVTXNTMEZCWVR0UlFVTnVRaXhKUVVGSkxFdEJRVXNzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEYUVJc1QwRkJUenRUUVVOUU8xRkJSVVFzVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU0xUWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUlRWQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMUZCUTNSRExFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMUZCUTNSRExFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMUZCUTNSRExFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMUZCUTNSRExFMUJRVTBzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRPMUZCUTNwRExFMUJRVTBzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRPMUZCUlhwRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTFnc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEV0N4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5ZTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMWdzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRZaXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVTmtMRU5CUVVNN1NVRkZSQ3hMUVVGTExFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTTdVVUZEZWtJc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEV2l4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU5hTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMW9zU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRXaXhKUVVGSkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTmlMRWxCUVVrc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEyUXNRMEZCUXp0SlFVVkVMRmRCUVZjc1EwRkJReXhMUVVGaExFVkJRVVVzVVVGQlowSXNRMEZCUXp0UlFVTXpReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU5zUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVWc1F5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOWUxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTFnc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTmFMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlExb3NRMEZCUXp0SlFVVkVMRXRCUVVzc1EwRkJReXhEUVVGVExFVkJRVVVzUTBGQlV5eEZRVUZGTEVOQlFWTXNSVUZCUlN4RFFVRlRMRVZCUVVVc1JVRkJWU3hGUVVGRkxFVkJRVlU3VVVGRGRrVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFdDeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOWUxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTFnc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEV0N4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5pTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRE8wbEJRMlFzUTBGQlF6dEpRVVZFTEZOQlFWTXNRMEZCUXl4RFFVRlRMRVZCUVVVc1EwRkJVenRSUVVNM1FpeEpRVUZKTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOaUxFbEJRVWtzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUTJRc1EwRkJRenRKUVVWRUxHTkJRV01zUTBGQlF5eExRVUZaTzFGQlF6RkNMRTFCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZETTBJc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU55UXl4UFFVRlBMRTFCUVUwc1EwRkJRenRKUVVObUxFTkJRVU03U1VGRlJDeG5Ra0ZCWjBJc1EwRkJReXhOUVVGaExFVkJRVVVzVFVGQllUdFJRVU0xUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEUxQlFVMHNRMEZCUXp0UlFVVjRRaXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU03VVVGRE4wTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRPMGxCUXpsRExFTkJRVU03U1VGRlJDeFZRVUZWTEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNN1VVRkRPVUlzVDBGQlR5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRE8wbEJRekZETEVOQlFVTTdTVUZGUkN4VlFVRlZMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk03VVVGRE9VSXNUMEZCVHl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETzBsQlF6RkRMRU5CUVVNN1NVRkZSQ3h4UWtGQmNVSXNRMEZCUXl4TFFVRlpPMUZCUTJwRExFMUJRVTBzVFVGQlRTeEhRVUZITEVsQlFVa3NTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRkRNMElzU1VGQlNTeERRVUZETEhWQ1FVRjFRaXhEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTTFReXhQUVVGUExFMUJRVTBzUTBGQlF6dEpRVU5tTEVOQlFVTTdTVUZGUkN4MVFrRkJkVUlzUTBGQlF5eE5RVUZoTEVWQlFVVXNUVUZCWVR0UlFVTnVSQ3hKUVVGSkxFVkJRVVVzVjBGQlZ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUlROQ0xFbEJRVWtzVjBGQlZ5eExRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTjBRaXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJRenRaUVVOd1FpeE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF6dFRRVU53UWp0aFFVRk5PMWxCUTA0c1YwRkJWeXhIUVVGSExFTkJRVU1zUjBGQlJ5eFhRVUZYTEVOQlFVTTdXVUZGT1VJc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4TlFVRk5MRU5CUVVNN1dVRkZlRUlzVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCUnl4WFFVRlhMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpORkxFMUJRVTBzUTBGQlF5eERRVUZETEVkQlFVY3NWMEZCVnl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTXpSVHRKUVVOR0xFTkJRVU03U1VGRlJDeHBRa0ZCYVVJc1EwRkJReXhEUVVGVExFVkJRVVVzUTBGQlV6dFJRVU55UXl4SlFVRkpMRVZCUVVVc1YwRkJWeXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlJUTkNMRWxCUVVrc1YwRkJWeXhMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU4wUWl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF6dFRRVU5vUWp0UlFVVkVMRmRCUVZjc1IwRkJSeXhEUVVGRExFZEJRVWNzVjBGQlZ5eERRVUZETzFGQlF6bENMRTlCUVU4c1YwRkJWeXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONFJTeERRVUZETzBsQlJVUXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTTdVVUZEY2tNc1NVRkJTU3hGUVVGRkxGZEJRVmNzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVVXpRaXhKUVVGSkxGZEJRVmNzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEZEVJc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTTdVMEZEYUVJN1VVRkZSQ3hYUVVGWExFZEJRVWNzUTBGQlF5eEhRVUZITEZkQlFWY3NRMEZCUXp0UlFVTTVRaXhQUVVGUExGZEJRVmNzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFVXNRMEZCUXp0SlFVVkVMR0ZCUVdFc1EwRkJReXhKUVVGbE8xRkJRelZDTEUxQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc1UwRkJVeXhGUVVGRkxFTkJRVU03VVVGREwwSXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEYmtNc1QwRkJUeXhOUVVGTkxFTkJRVU03U1VGRFppeERRVUZETzBsQlJVUXNaVUZCWlN4RFFVRkRMRTFCUVdsQ0xFVkJRVVVzVFVGQmFVSTdVVUZEYmtRc1RVRkJUU3hGUVVOTUxFZEJRVWNzUlVGRFNDeE5RVUZOTEVWQlEwNHNTVUZCU1N4RlFVTktMRXRCUVVzc1IwRkRUQ3hIUVVGSExFMUJRVTBzUTBGQlF6dFJRVVZZTEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzQkNMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTNaQ0xFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM0pDTEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzFGQlJYaENMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE9VSXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNNVFpeEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpsQ0xFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZGT1VJc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZET1VNc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZGT1VNc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZET1VNc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZGT1VNc1RVRkJUU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEYUVJc1RVRkJUU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEYUVJc1RVRkJUU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUXpOQ0xFMUJRVTBzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRKUVVNM1FpeERRVUZETzBOQlEwUWlmUT09IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQge1xuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICBjb25zdCBkeCA9IHRoaXMueCAqIHRoaXMueDtcbiAgICAgICAgY29uc3QgZHkgPSB0aGlzLnkgKiB0aGlzLnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKyBkeSk7XG4gICAgfVxuICAgIGdldCBhbmdsZSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGB7IHg6ICR7dGhpcy54fSwgeTogJHt0aGlzLnl9IH1gO1xuICAgIH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuICAgIGVxdWFscyhwb2ludCkge1xuICAgICAgICByZXR1cm4gdGhpcy54ID09PSBwb2ludC54ICYmIHRoaXMueSA9PT0gcG9pbnQueTtcbiAgICB9XG4gICAgc2V0RW1wdHkoKSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgfVxuICAgIHNldFRvKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG4gICAgY29weUZyb20ocG9pbnQpIHtcbiAgICAgICAgdGhpcy54ID0gcG9pbnQueDtcbiAgICAgICAgdGhpcy55ID0gcG9pbnQueTtcbiAgICB9XG4gICAgYWRkKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQocG9pbnQueCArIHRoaXMueCwgcG9pbnQueSArIHRoaXMueSk7XG4gICAgfVxuICAgIHN1YnRyYWN0KHBvaW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcG9pbnQueCwgdGhpcy55IC0gcG9pbnQueSk7XG4gICAgfVxuICAgIG5vcm1hbGl6ZSh0aGlja25lc3MpIHtcbiAgICAgICAgbGV0IHsgbGVuZ3RoIH0gPSB0aGlzO1xuICAgICAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gdGhpY2tuZXNzIC8gbGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy54ICo9IGxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMueSAqPSBsZW5ndGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb2Zmc2V0KGR4LCBkeSkge1xuICAgICAgICB0aGlzLnggKz0gZHg7XG4gICAgICAgIHRoaXMueSArPSBkeTtcbiAgICB9XG4gICAgc3RhdGljIGRpc3RhbmNlKHBvaW50MSwgcG9pbnQyKSB7XG4gICAgICAgIGNvbnN0IGR4ID0gcG9pbnQxLnggLSBwb2ludDIueDtcbiAgICAgICAgY29uc3QgZHkgPSBwb2ludDEueSAtIHBvaW50Mi55O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICB9XG4gICAgc3RhdGljIGludGVycG9sYXRlKHBvaW50MSwgcG9pbnQyLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFBvaW50KHBvaW50Mi54ICsgdmFsdWUgKiAocG9pbnQxLnggLSBwb2ludDIueCksIHBvaW50Mi55ICsgdmFsdWUgKiAocG9pbnQxLnkgLSBwb2ludDIueSkpO1xuICAgIH1cbiAgICBzdGF0aWMgcG9sYXIobGVuZ3RoLCBhbmdsZSkge1xuICAgICAgICByZXR1cm4gbmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lVRzlwYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZVRzlwYm5RdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzVFVGQlRTeERRVUZETEU5QlFVOHNUMEZCVHl4TFFVRkxPMGxCU1hwQ0xGbEJRVmtzU1VGQldTeERRVUZETEVWQlFVVXNTVUZCV1N4RFFVRkRPMUZCUTNaRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTFnc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEV2l4RFFVRkRPMGxCUlVRc1NVRkJTU3hOUVVGTk8xRkJRMVFzVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6TkNMRTFCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNelFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6TkNMRU5CUVVNN1NVRkZSQ3hKUVVGSkxFdEJRVXM3VVVGRFVpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRia01zUTBGQlF6dEpRVVZFTEZGQlFWRTdVVUZEVUN4UFFVRlBMRkZCUVZFc1NVRkJTU3hEUVVGRExFTkJRVU1zVVVGQlVTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNN1NVRkRla01zUTBGQlF6dEpRVVZFTEV0QlFVczdVVUZEU2l4UFFVRlBMRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMnhETEVOQlFVTTdTVUZGUkN4TlFVRk5MRU5CUVVNc1MwRkJXVHRSUVVOc1FpeFBRVUZQTEVsQlFVa3NRMEZCUXl4RFFVRkRMRXRCUVVzc1MwRkJTeXhEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFrUXNRMEZCUXp0SlFVVkVMRkZCUVZFN1VVRkRVQ3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTllMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlExb3NRMEZCUXp0SlFVVkVMRXRCUVVzc1EwRkJReXhEUVVGVExFVkJRVVVzUTBGQlV6dFJRVU42UWl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5ZTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRMW9zUTBGQlF6dEpRVVZFTEZGQlFWRXNRMEZCUXl4TFFVRlpPMUZCUTNCQ0xFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOcVFpeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGJFSXNRMEZCUXp0SlFVVkVMRWRCUVVjc1EwRkJReXhMUVVGWk8xRkJRMllzVDBGQlR5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZEVRc1EwRkJRenRKUVVWRUxGRkJRVkVzUTBGQlF5eExRVUZaTzFGQlEzQkNMRTlCUVU4c1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM1JFTEVOQlFVTTdTVUZGUkN4VFFVRlRMRU5CUVVNc1UwRkJhVUk3VVVGRE1VSXNTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVVYwUWl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRFppeE5RVUZOTEVkQlFVY3NVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJRenRaUVVNMVFpeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRTFCUVUwc1EwRkJRenRaUVVOcVFpeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRTFCUVUwc1EwRkJRenRUUVVOcVFqdEpRVU5HTEVOQlFVTTdTVUZGUkN4TlFVRk5MRU5CUVVNc1JVRkJWU3hGUVVGRkxFVkJRVlU3VVVGRE5VSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRFlpeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRKUVVOa0xFTkJRVU03U1VGRlJDeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVdFc1JVRkJSU3hOUVVGaE8xRkJRek5ETEUxQlFVMHNSVUZCUlN4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXZRaXhOUVVGTkxFVkJRVVVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VVVGREwwSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM0pETEVOQlFVTTdTVUZGUkN4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFMUJRV0VzUlVGQlJTeE5RVUZoTEVWQlFVVXNTMEZCWVR0UlFVTTNSQ3hQUVVGUExFbEJRVWtzUzBGQlN5eERRVU5tTEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRM2hETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRM2hETEVOQlFVTTdTVUZEU0N4RFFVRkRPMGxCUlVRc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZqTEVWQlFVVXNTMEZCWVR0UlFVTjZReXhQUVVGUExFbEJRVWtzUzBGQlN5eERRVU5tTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVU40UWl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZEZUVJc1EwRkJRenRKUVVOSUxFTkJRVU03UTBGRFJDSjkiLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9Qb2ludCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUge1xuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCwgd2lkdGggPSAwLCBoZWlnaHQgPSAwKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIGdldCBsZWZ0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy54O1xuICAgIH1cbiAgICBzZXQgbGVmdCh2YWx1ZSkge1xuICAgICAgICB0aGlzLndpZHRoIC09IHZhbHVlIC0gdGhpcy54O1xuICAgICAgICB0aGlzLnggPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHJpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aDtcbiAgICB9XG4gICAgc2V0IHJpZ2h0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB2YWx1ZSAtIHRoaXMueDtcbiAgICB9XG4gICAgZ2V0IGJvdHRvbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0O1xuICAgIH1cbiAgICBzZXQgYm90dG9tKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdmFsdWUgLSB0aGlzLnk7XG4gICAgfVxuICAgIGdldCB0b3AoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnk7XG4gICAgfVxuICAgIHNldCB0b3AodmFsdWUpIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgLT0gdmFsdWUgLSB0aGlzLnk7XG4gICAgICAgIHRoaXMueSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgdG9wTGVmdCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuICAgIHNldCB0b3BMZWZ0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMueCA9IHZhbHVlLng7XG4gICAgICAgIHRoaXMueSA9IHZhbHVlLnk7XG4gICAgfVxuICAgIGdldCBib3R0b21SaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyB0aGlzLndpZHRoLCB0aGlzLnkgKyB0aGlzLmhlaWdodCk7XG4gICAgfVxuICAgIHNldCBib3R0b21SaWdodCh2YWx1ZSkge1xuICAgICAgICB0aGlzLndpZHRoID0gdmFsdWUueCAtIHRoaXMueDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB2YWx1ZS55IC0gdGhpcy55O1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGB7IHg6ICR7dGhpcy54fSwgeTogJHt0aGlzLnl9LCB3aWR0aDogJHt0aGlzLndpZHRofSwgaGVpZ2h0OiAke3RoaXMuaGVpZ2h0fSB9YDtcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuICAgIGNvbnRhaW5zKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIHggPj0gdGhpcy54ICYmIHkgPj0gdGhpcy55ICYmIHggPCB0aGlzLnggKyB0aGlzLndpZHRoICYmIHkgPCB0aGlzLnkgKyB0aGlzLmhlaWdodDtcbiAgICB9XG4gICAgY29udGFpbnNQb2ludChwb2ludCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWlucyhwb2ludC54LCBwb2ludC55KTtcbiAgICB9XG4gICAgY29udGFpbnNSZWN0KHJlY3QpIHtcbiAgICAgICAgaWYgKHJlY3Qud2lkdGggPD0gMCB8fCByZWN0LmhlaWdodCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjdC54ID4gdGhpcy54XG4gICAgICAgICAgICAgICAgJiYgcmVjdC55ID4gdGhpcy55XG4gICAgICAgICAgICAgICAgJiYgcmVjdC54ICsgcmVjdC53aWR0aCA8IHRoaXMueCArIHRoaXMud2lkdGhcbiAgICAgICAgICAgICAgICAmJiByZWN0LnkgKyByZWN0LmhlaWdodCA8IHRoaXMueSArIHRoaXMuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWN0LnggPj0gdGhpcy54XG4gICAgICAgICAgICAmJiByZWN0LnkgPj0gdGhpcy55XG4gICAgICAgICAgICAmJiByZWN0LnggKyByZWN0LndpZHRoIDw9IHRoaXMueCArIHRoaXMud2lkdGhcbiAgICAgICAgICAgICYmIHJlY3QueSArIHJlY3QuaGVpZ2h0IDw9IHRoaXMueSArIHRoaXMuaGVpZ2h0O1xuICAgIH1cbiAgICBjb3B5RnJvbShyZWN0KSB7XG4gICAgICAgIHRoaXMueCA9IHJlY3QueDtcbiAgICAgICAgdGhpcy55ID0gcmVjdC55O1xuICAgICAgICB0aGlzLndpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICB9XG4gICAgZXF1YWxzUmVjdChyZWN0KSB7XG4gICAgICAgIGlmIChyZWN0ID09PSB0aGlzKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmIChyZWN0ID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcy5lcXVhbHMocmVjdC54LCByZWN0LnksIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICB9XG4gICAgZXF1YWxzKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0geFxuICAgICAgICAgICAgJiYgdGhpcy55ID09PSB5XG4gICAgICAgICAgICAmJiB0aGlzLndpZHRoID09PSB3aWR0aFxuICAgICAgICAgICAgJiYgdGhpcy5oZWlnaHQgPT09IGhlaWdodDtcbiAgICB9XG4gICAgaW5mbGF0ZShkeCwgZHkpIHtcbiAgICAgICAgdGhpcy54IC09IGR4O1xuICAgICAgICB0aGlzLnkgLT0gZHk7XG4gICAgICAgIHRoaXMud2lkdGggKz0gZHggKiAyO1xuICAgICAgICB0aGlzLmhlaWdodCArPSBkeSAqIDI7XG4gICAgfVxuICAgIGluZmxhdGVQb2ludChwb2ludCkge1xuICAgICAgICB0aGlzLmluZmxhdGUocG9pbnQueCwgcG9pbnQueSk7XG4gICAgfVxuICAgIHJvdW5kKCkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcbiAgICAgICAgdGhpcy53aWR0aCA9IE1hdGgucm91bmQodGhpcy53aWR0aCk7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5yb3VuZCh0aGlzLmhlaWdodCk7XG4gICAgfVxuICAgIGludGVyc2VjdGlvbihyZWN0KSB7XG4gICAgICAgIGNvbnN0IHgwID0gdGhpcy54IDwgcmVjdC54ID8gcmVjdC54IDogdGhpcy54O1xuICAgICAgICBjb25zdCB4MSA9IHRoaXMucmlnaHQgPiByZWN0LnJpZ2h0ID8gcmVjdC5yaWdodCA6IHRoaXMucmlnaHQ7XG4gICAgICAgIGlmICh4MSA8PSB4MClcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKCk7XG4gICAgICAgIGNvbnN0IHkwID0gdGhpcy55IDwgcmVjdC55ID8gcmVjdC55IDogdGhpcy55O1xuICAgICAgICBjb25zdCB5MSA9IHRoaXMuYm90dG9tID4gcmVjdC5ib3R0b20gPyByZWN0LmJvdHRvbSA6IHRoaXMuYm90dG9tO1xuICAgICAgICBpZiAoeTEgPD0geTApXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSgpO1xuICAgICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh4MCwgeTAsIHgxIC0geDAsIHkxIC0geTApO1xuICAgIH1cbiAgICBpbnRlcnNlY3RzKHJlY3QpIHtcbiAgICAgICAgY29uc3QgeDAgPSB0aGlzLnggPCByZWN0LnggPyByZWN0LnggOiB0aGlzLng7XG4gICAgICAgIGNvbnN0IHgxID0gdGhpcy5yaWdodCA+IHJlY3QucmlnaHQgPyByZWN0LnJpZ2h0IDogdGhpcy5yaWdodDtcbiAgICAgICAgaWYgKHgxIDw9IHgwKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCB5MCA9IHRoaXMueSA8IHJlY3QueSA/IHJlY3QueSA6IHRoaXMueTtcbiAgICAgICAgY29uc3QgeTEgPSB0aGlzLmJvdHRvbSA+IHJlY3QuYm90dG9tID8gcmVjdC5ib3R0b20gOiB0aGlzLmJvdHRvbTtcbiAgICAgICAgcmV0dXJuIHkxID4geTA7XG4gICAgfVxuICAgIGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndpZHRoIDw9IDAgfHwgdGhpcy5oZWlnaHQgPD0gMDtcbiAgICB9XG4gICAgb2Zmc2V0KGR4LCBkeSkge1xuICAgICAgICB0aGlzLnggKz0gZHg7XG4gICAgICAgIHRoaXMueSArPSBkeTtcbiAgICB9XG4gICAgb2Zmc2V0UG9pbnQocCkge1xuICAgICAgICB0aGlzLnggKz0gcC54O1xuICAgICAgICB0aGlzLnkgKz0gcC55O1xuICAgIH1cbiAgICBzZXRFbXB0eSgpIHtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICB9XG4gICAgc2V0VG8oeCA9IDAsIHkgPSAwLCB3aWR0aCA9IDAsIGhlaWdodCA9IDApIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgdW5pb24ocmVjdCkge1xuICAgICAgICBpZiAodGhpcy53aWR0aCA9PT0gMCB8fCB0aGlzLmhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVjdC53aWR0aCA9PT0gMCB8fCByZWN0LmhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB4MCA9IHRoaXMueCA+IHJlY3QueCA/IHJlY3QueCA6IHRoaXMueDtcbiAgICAgICAgY29uc3QgeDEgPSB0aGlzLnJpZ2h0IDwgcmVjdC5yaWdodCA/IHJlY3QucmlnaHQgOiB0aGlzLnJpZ2h0O1xuICAgICAgICBjb25zdCB5MCA9IHRoaXMueSA+IHJlY3QueSA/IHJlY3QueSA6IHRoaXMueTtcbiAgICAgICAgY29uc3QgeTEgPSB0aGlzLmJvdHRvbSA8IHJlY3QuYm90dG9tID8gcmVjdC5ib3R0b20gOiB0aGlzLmJvdHRvbTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUoeDAsIHkwLCB4MSAtIHgwLCB5MSAtIHkwKTtcbiAgICB9XG4gICAgY29udHJhY3QoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBpZiAodGhpcy53aWR0aCA9PT0gMCAmJiB0aGlzLmhlaWdodCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IG9mZnNldFggPSAwO1xuICAgICAgICBsZXQgb2Zmc2V0WSA9IDA7XG4gICAgICAgIGxldCBvZmZzZXRSaWdodCA9IDA7XG4gICAgICAgIGxldCBvZmZzZXRCb3R0b20gPSAwO1xuICAgICAgICBpZiAodGhpcy54IDwgeClcbiAgICAgICAgICAgIG9mZnNldFggPSB4IC0gdGhpcy54O1xuICAgICAgICBpZiAodGhpcy55IDwgeSlcbiAgICAgICAgICAgIG9mZnNldFkgPSB5IC0gdGhpcy55O1xuICAgICAgICBpZiAodGhpcy5yaWdodCA+IHggKyB3aWR0aClcbiAgICAgICAgICAgIG9mZnNldFJpZ2h0ID0gKHggKyB3aWR0aCkgLSB0aGlzLnJpZ2h0O1xuICAgICAgICBpZiAodGhpcy5ib3R0b20gPiB5ICsgaGVpZ2h0KVxuICAgICAgICAgICAgb2Zmc2V0Qm90dG9tID0gKHkgKyBoZWlnaHQpIC0gdGhpcy5ib3R0b207XG4gICAgICAgIHRoaXMueCArPSBvZmZzZXRYO1xuICAgICAgICB0aGlzLnkgKz0gb2Zmc2V0WTtcbiAgICAgICAgdGhpcy53aWR0aCArPSBvZmZzZXRSaWdodCAtIG9mZnNldFg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ICs9IG9mZnNldEJvdHRvbSAtIG9mZnNldFk7XG4gICAgfVxuICAgIGV4cGFuZCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGlmICh0aGlzLndpZHRoID09PSAwICYmIHRoaXMuaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcmlnaHQsIGJvdHRvbSB9ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMueCA+IHgpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gcmlnaHQgLSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnkgPiB5KSB7XG4gICAgICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBib3R0b20gLSB5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCA8IHggKyB3aWR0aCkge1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHggKyB3aWR0aCAtIHRoaXMueDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tIDwgeSArIGhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB5ICsgaGVpZ2h0IC0gdGhpcy55O1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4dGVuZChweCwgcHkpIHtcbiAgICAgICAgaWYgKHB4IDwgdGhpcy54KSB7XG4gICAgICAgICAgICB0aGlzLndpZHRoICs9IHRoaXMueCAtIHB4O1xuICAgICAgICAgICAgdGhpcy54ID0gcHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHB5IDwgdGhpcy55KSB7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCArPSB0aGlzLnkgLSBweTtcbiAgICAgICAgICAgIHRoaXMueSA9IHB5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChweCA+IHRoaXMueCArIHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSBweCAtIHRoaXMueDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHkgPiB0aGlzLnkgKyB0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBweSAtIHRoaXMueTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVtVmpkR0Z1WjJ4bExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMUpsWTNSaGJtZHNaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeFBRVUZQTEV0QlFVc3NUVUZCVFN4VFFVRlRMRU5CUVVNN1FVRkZOVUlzVFVGQlRTeERRVUZETEU5QlFVOHNUMEZCVHl4VFFVRlRPMGxCVFRkQ0xGbEJRVmtzU1VGQldTeERRVUZETEVWQlFVVXNTVUZCV1N4RFFVRkRMRVZCUVVVc1VVRkJaMElzUTBGQlF5eEZRVUZGTEZOQlFXbENMRU5CUVVNN1VVRkRPVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRXQ3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTllMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlEyNUNMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRkZSQ3hKUVVGSkxFbEJRVWs3VVVGRFVDeFBRVUZQTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRaaXhEUVVGRE8wbEJSVVFzU1VGQlNTeEpRVUZKTEVOQlFVTXNTMEZCWVR0UlFVTnlRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRemRDTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRE8wbEJRMmhDTEVOQlFVTTdTVUZGUkN4SlFVRkpMRXRCUVVzN1VVRkRVaXhQUVVGUExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVNMVFpeERRVUZETzBsQlJVUXNTVUZCU1N4TFFVRkxMRU5CUVVNc1MwRkJZVHRSUVVOMFFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6ZENMRU5CUVVNN1NVRkZSQ3hKUVVGSkxFMUJRVTA3VVVGRFZDeFBRVUZQTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU0zUWl4RFFVRkRPMGxCUlVRc1NVRkJTU3hOUVVGTkxFTkJRVU1zUzBGQllUdFJRVU4yUWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpsQ0xFTkJRVU03U1VGRlJDeEpRVUZKTEVkQlFVYzdVVUZEVGl4UFFVRlBMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFppeERRVUZETzBsQlJVUXNTVUZCU1N4SFFVRkhMRU5CUVVNc1MwRkJZVHRSUVVOd1FpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SlFVRkpMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6bENMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETzBsQlEyaENMRU5CUVVNN1NVRkZSQ3hKUVVGSkxFOUJRVTg3VVVGRFZpeFBRVUZQTEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJ4RExFTkJRVU03U1VGRlJDeEpRVUZKTEU5QlFVOHNRMEZCUXl4TFFVRlpPMUZCUTNaQ0xFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOcVFpeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGJFSXNRMEZCUXp0SlFVVkVMRWxCUVVrc1YwRkJWenRSUVVOa0xFOUJRVThzU1VGQlNTeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlF6ZEVMRU5CUVVNN1NVRkZSQ3hKUVVGSkxGZEJRVmNzUTBGQlF5eExRVUZaTzFGQlF6TkNMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRemxDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJoRExFTkJRVU03U1VGRlJDeFJRVUZSTzFGQlExQXNUMEZCVHl4UlFVRlJMRWxCUVVrc1EwRkJReXhEUVVGRExGRkJRVkVzU1VGQlNTeERRVUZETEVOQlFVTXNXVUZCV1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhoUVVGaExFbEJRVWtzUTBGQlF5eE5RVUZOTEVsQlFVa3NRMEZCUXp0SlFVTjJSaXhEUVVGRE8wbEJSVVFzUzBGQlN6dFJRVU5LTEU5QlFVOHNTVUZCU1N4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUXk5RUxFTkJRVU03U1VGRlJDeFJRVUZSTEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNN1VVRkROVUlzVDBGQlR5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRNVVlzUTBGQlF6dEpRVVZFTEdGQlFXRXNRMEZCUXl4TFFVRlpPMUZCUTNwQ0xFOUJRVThzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjRReXhEUVVGRE8wbEJSVVFzV1VGQldTeERRVUZETEVsQlFXVTdVVUZETTBJc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU40UXl4UFFVRlBMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdiVUpCUTJ4Q0xFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN2JVSkJRMllzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzN2JVSkJRM3BETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03VTBGRGFFUTdVVUZGUkN4UFFVRlBMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTTdaVUZEYmtJc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXp0bFFVTm9RaXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3p0bFFVTXhReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTJ4RUxFTkJRVU03U1VGRlJDeFJRVUZSTEVOQlFVTXNTVUZCWlR0UlFVTjJRaXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRhRUlzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU40UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTTdTVUZETTBJc1EwRkJRenRKUVVWRUxGVkJRVlVzUTBGQlF5eEpRVUZsTzFGQlEzcENMRWxCUVVrc1NVRkJTU3hMUVVGTExFbEJRVWs3V1VGQlJTeFBRVUZQTEVsQlFVa3NRMEZCUXp0UlFVTXZRaXhKUVVGSkxFbEJRVWtzUzBGQlN5eEpRVUZKTzFsQlFVVXNUMEZCVHl4TFFVRkxMRU5CUVVNN1VVRkZhRU1zVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTTNSQ3hEUVVGRE8wbEJSVVFzVFVGQlRTeERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlRMRVZCUVVVc1MwRkJZU3hGUVVGRkxFMUJRV003VVVGRGVrUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU03WlVGRFppeEpRVUZKTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNN1pVRkRXaXhKUVVGSkxFTkJRVU1zUzBGQlN5eExRVUZMTEV0QlFVczdaVUZEY0VJc1NVRkJTU3hEUVVGRExFMUJRVTBzUzBGQlN5eE5RVUZOTEVOQlFVTTdTVUZETlVJc1EwRkJRenRKUVVWRUxFOUJRVThzUTBGQlF5eEZRVUZWTEVWQlFVVXNSVUZCVlR0UlFVTTNRaXhKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTmlMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzFGQlEySXNTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzSkNMRWxCUVVrc1EwRkJReXhOUVVGTkxFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTjJRaXhEUVVGRE8wbEJSVVFzV1VGQldTeERRVUZETEV0QlFWazdVVUZEZUVJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5vUXl4RFFVRkRPMGxCUlVRc1MwRkJTenRSUVVOS0xFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETlVJc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU0xUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRM0JETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRka01zUTBGQlF6dEpRVVZFTEZsQlFWa3NRMEZCUXl4SlFVRmxPMUZCUXpOQ0xFMUJRVTBzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTNReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZGTjBRc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJUdFpRVUZGTEU5QlFVOHNTVUZCU1N4VFFVRlRMRVZCUVVVc1EwRkJRenRSUVVWeVF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROME1zVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUldwRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVTdXVUZCUlN4UFFVRlBMRWxCUVVrc1UwRkJVeXhGUVVGRkxFTkJRVU03VVVGRmNrTXNUMEZCVHl4SlFVRkpMRk5CUVZNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEyaEVMRU5CUVVNN1NVRkZSQ3hWUVVGVkxFTkJRVU1zU1VGQlpUdFJRVU42UWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE4wTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJSVGRFTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVN1dVRkJSU3hQUVVGUExFdEJRVXNzUTBGQlF6dFJRVVV6UWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE4wTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJSV3BGTEU5QlFVOHNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVOb1FpeERRVUZETzBsQlJVUXNUMEZCVHp0UlFVTk9MRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRE5VTXNRMEZCUXp0SlFVVkVMRTFCUVUwc1EwRkJReXhGUVVGVkxFVkJRVVVzUlVGQlZUdFJRVU0xUWl4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU5pTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8wbEJRMlFzUTBGQlF6dEpRVVZFTEZkQlFWY3NRMEZCUXl4RFFVRlJPMUZCUTI1Q0xFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOa0xFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVObUxFTkJRVU03U1VGRlJDeFJRVUZSTzFGQlExQXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFdDeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOWUxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJZc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEYWtJc1EwRkJRenRKUVVWRUxFdEJRVXNzUTBGQlF5eEpRVUZaTEVOQlFVTXNSVUZCUlN4SlFVRlpMRU5CUVVNc1JVRkJSU3hSUVVGblFpeERRVUZETEVWQlFVVXNVMEZCYVVJc1EwRkJRenRSUVVONFJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOWUxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTFnc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZEYmtJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTTdTVUZEZEVJc1EwRkJRenRKUVVWRUxFdEJRVXNzUTBGQlF5eEpRVUZsTzFGQlEzQkNMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUzBGQlN5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRE1VTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03VTBGRGNFSTdVVUZGUkN4SlFVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFdEJRVXNzUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRekZETEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xTkJRM0JDTzFGQlJVUXNUVUZCVFN4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRemRETEUxQlFVMHNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVNM1JDeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROME1zVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUldwRkxFOUJRVThzU1VGQlNTeFRRVUZUTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVOb1JDeERRVUZETzBsQlJVUXNVVUZCVVN4RFFVRkRMRU5CUVZNc1JVRkJSU3hEUVVGVExFVkJRVVVzUzBGQllTeEZRVUZGTEUxQlFXTTdVVUZETTBRc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eExRVUZMTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU03V1VGQlJTeFBRVUZQTzFGQlJXeEVMRWxCUVVrc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5vUWl4SlFVRkpMRTlCUVU4c1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGFFSXNTVUZCU1N4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM0JDTEVsQlFVa3NXVUZCV1N4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWeVFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJRenRaUVVGRkxFOUJRVThzUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOeVF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJRenRaUVVGRkxFOUJRVThzUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOeVF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhIUVVGSExFdEJRVXM3V1VGQlJTeFhRVUZYTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0UlFVTnVSU3hKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4SFFVRkhMRTFCUVUwN1dVRkJSU3haUVVGWkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVVY0UlN4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFOUJRVThzUTBGQlF6dFJRVU5zUWl4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFOUJRVThzUTBGQlF6dFJRVU5zUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhKUVVGSkxGZEJRVmNzUjBGQlJ5eFBRVUZQTEVOQlFVTTdVVUZEY0VNc1NVRkJTU3hEUVVGRExFMUJRVTBzU1VGQlNTeFpRVUZaTEVkQlFVY3NUMEZCVHl4RFFVRkRPMGxCUTNaRExFTkJRVU03U1VGRlJDeE5RVUZOTEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNc1JVRkJSU3hMUVVGaExFVkJRVVVzVFVGQll6dFJRVU42UkN4SlFVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFdEJRVXNzUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRekZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMWdzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRXQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0WlFVTnVRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXp0WlFVTnlRaXhQUVVGUE8xTkJRMUE3VVVGRlJDeE5RVUZOTEVWQlFVVXNTMEZCU3l4RlFVRkZMRTFCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVVV2UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlEyWXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRFdDeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRGRrSTdVVUZGUkN4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlEyWXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRFdDeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRGVrSTdVVUZGUkN4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFZEJRVWNzUzBGQlN5eEZRVUZGTzFsQlEzUkNMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eEhRVUZITEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMmhETzFGQlJVUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhIUVVGSExFMUJRVTBzUlVGQlJUdFpRVU40UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOc1F6dEpRVU5HTEVOQlFVTTdTVUZGUkN4TlFVRk5MRU5CUVVNc1JVRkJWU3hGUVVGRkxFVkJRVlU3VVVGRE5VSXNTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJUdFpRVU5vUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUXpGQ0xFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMU5CUTFvN1VVRkZSQ3hKUVVGSkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZPMWxCUTJoQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRE0wSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03VTBGRFdqdFJRVVZFTEVsQlFVa3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlR0WlFVTTNRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM3BDTzFGQlJVUXNTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUXpsQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE1VSTdTVUZEUml4RFFVRkRPME5CUTBRaWZRPT0iLCJpbXBvcnQgeyBDb2xvclBhdHRlcm4sIExpbmVhckdyYWRpZW50UGF0dGVybiwgUmFkaWFsR3JhZGllbnRQYXR0ZXJuLCBJbWFnZVBhdHRlcm4sIEdyYWRpZW50UGF0dGVybiwgfSBmcm9tICdAZTJkL3JlbmRlcic7XG5pbXBvcnQgeyBTY3JlZW4gfSBmcm9tICdAZTJkL3N5c3RlbSc7XG5jb25zdCB7IHBpeGVsUmF0aW8gfSA9IFNjcmVlbjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLndpZHRoID0gNDAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDMwMDtcbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYW52YXM7XG4gICAgfVxuICAgIGdldCB3aWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnZhcy53aWR0aCAvIHBpeGVsUmF0aW87XG4gICAgfVxuICAgIHNldCB3aWR0aCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBjYW52YXNWYWx1ZSA9IHZhbHVlICogcGl4ZWxSYXRpbztcbiAgICAgICAgaWYgKHRoaXMuX2NhbnZhcy53aWR0aCAhPT0gY2FudmFzVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IGNhbnZhc1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzLnN0eWxlLndpZHRoID0gYCR7dmFsdWV9cHhgO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYW52YXMuaGVpZ2h0IC8gcGl4ZWxSYXRpbztcbiAgICB9XG4gICAgc2V0IGhlaWdodCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBjYW52YXNWYWx1ZSA9IHZhbHVlICogcGl4ZWxSYXRpbztcbiAgICAgICAgaWYgKHRoaXMuX2NhbnZhcy5oZWlnaHQgIT09IGNhbnZhc1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gY2FudmFzVmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMuc3R5bGUuaGVpZ2h0ID0gYCR7dmFsdWV9cHhgO1xuICAgICAgICB9XG4gICAgfVxuICAgIGJlZ2luUGF0aCgpIHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB9XG4gICAgY2xvc2VQYXRoKCkge1xuICAgICAgICB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICBzYXZlKCkge1xuICAgICAgICB0aGlzLl9jb250ZXh0LnNhdmUoKTtcbiAgICB9XG4gICAgcmVzdG9yZSgpIHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5yZXN0b3JlKCk7XG4gICAgfVxuICAgIHNldFRyYW5zZm9ybShhLCBiLCBjLCBkLCB0eCwgdHkpIHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5zZXRUcmFuc2Zvcm0oYSAqIHBpeGVsUmF0aW8sIGIgKiBwaXhlbFJhdGlvLCBjICogcGl4ZWxSYXRpbywgZCAqIHBpeGVsUmF0aW8sIHR4ICogcGl4ZWxSYXRpbywgdHkgKiBwaXhlbFJhdGlvKTtcbiAgICB9XG4gICAgbW92ZVRvKHgsIHkpIHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5tb3ZlVG8oeCwgeSk7XG4gICAgfVxuICAgIGxpbmVUbyh4LCB5KSB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpO1xuICAgIH1cbiAgICByZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cbiAgICBiZXppZXJDdXJ2ZVRvKGNwMXgsIGNwMXksIGNwMngsIGNwMnksIHgsIHkpIHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5iZXppZXJDdXJ2ZVRvKGNwMXgsIGNwMXksIGNwMngsIGNwMnksIHgsIHkpO1xuICAgIH1cbiAgICBxdWFkcmF0aWNDdXJ2ZVRvKGNweCwgY3B5LCB4LCB5KSB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQucXVhZHJhdGljQ3VydmVUbyhjcHgsIGNweSwgeCwgeSk7XG4gICAgfVxuICAgIGZpbGwocGF0dGVybiwgc3R5bGUpIHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmZvcm1hdFBhdHRlcm4ocGF0dGVybik7XG4gICAgICAgIHRoaXMuX2NvbnRleHQuZ2xvYmFsQWxwaGEgPSBzdHlsZS5hbHBoYTtcbiAgICAgICAgdGhpcy5fY29udGV4dC5maWxsKCk7XG4gICAgfVxuICAgIHN0cm9rZShwYXR0ZXJuLCBzdHlsZSkge1xuICAgICAgICB0aGlzLl9jb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5mb3JtYXRQYXR0ZXJuKHBhdHRlcm4pO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVXaWR0aCA9IHN0eWxlLnRoaWtuZXNzO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVDYXAgPSBzdHlsZS5jYXA7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubGluZUpvaW4gPSBzdHlsZS5qb2luO1xuICAgICAgICB0aGlzLl9jb250ZXh0Lm1pdGVyTGltaXQgPSBzdHlsZS5taXRlckxpbWl0O1xuICAgICAgICB0aGlzLl9jb250ZXh0Lmdsb2JhbEFscGhhID0gc3R5bGUuYWxwaGE7XG4gICAgICAgIHRoaXMuX2NvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxuICAgIHN0YXRpYyBmb3JtYXRDb2xvcihwYXR0ZXJuKSB7XG4gICAgICAgIGNvbnN0IHsgciwgZywgYiwgYSwgfSA9IHBhdHRlcm47XG4gICAgICAgIGlmIChwYXR0ZXJuLmEgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXR0ZXJuLmEgPCAweGZmKSB7XG4gICAgICAgICAgICByZXR1cm4gYHJnYmEoJHtyfSwgJHtnfSwgJHtifSwgJHthIC8gMHhmZn0pYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYHJnYigke3J9LCAke2d9LCAke2J9KWA7XG4gICAgfVxuICAgIGZvcm1hdFBhdHRlcm4ocGF0dGVybikge1xuICAgICAgICBpZiAocGF0dGVybiBpbnN0YW5jZW9mIENvbG9yUGF0dGVybikge1xuICAgICAgICAgICAgcmV0dXJuIENhbnZhc1JlbmRlcmluZ0NvbnRleHQuZm9ybWF0Q29sb3IocGF0dGVybik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdHRlcm4gaW5zdGFuY2VvZiBHcmFkaWVudFBhdHRlcm4pIHtcbiAgICAgICAgICAgIGxldCBncmFkaWVudDtcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuIGluc3RhbmNlb2YgTGluZWFyR3JhZGllbnRQYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB4MCwgeTAsIHgxLCB5MSwgfSA9IHBhdHRlcm47XG4gICAgICAgICAgICAgICAgZ3JhZGllbnQgPSB0aGlzLl9jb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KHgwLCB5MCwgeDEsIHkxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXR0ZXJuIGluc3RhbmNlb2YgUmFkaWFsR3JhZGllbnRQYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB4MCwgeTAsIHIwLCB4MSwgeTEsIHIxLCB9ID0gcGF0dGVybjtcbiAgICAgICAgICAgICAgICBncmFkaWVudCA9IHRoaXMuX2NvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoeDAsIHkwLCByMCwgeDEsIHkxLCByMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ3JhZGllbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGNvbG9ycywgb2Zmc2V0cywgfSA9IHBhdHRlcm47XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKG9mZnNldHNbaV0sIENhbnZhc1JlbmRlcmluZ0NvbnRleHQuZm9ybWF0Q29sb3IoY29sb3JzW2ldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBncmFkaWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXR0ZXJuIGluc3RhbmNlb2YgSW1hZ2VQYXR0ZXJuKSB7XG4gICAgICAgICAgICBjb25zdCB7IGltYWdlLCByZXBlYXQsIH0gPSBwYXR0ZXJuO1xuICAgICAgICAgICAgaWYgKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVwZXRpdGlvbiA9IHJlcGVhdCA/ICdyZXBlYXQnIDogJ25vLXJlcGVhdCc7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FudmFzUGF0dGVybiA9IHRoaXMuX2NvbnRleHQuY3JlYXRlUGF0dGVybihpbWFnZSwgcmVwZXRpdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKGNhbnZhc1BhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbnZhc1BhdHRlcm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY2xpcCgpIHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5jbGlwKCk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJGdWRtRnpVbVZ1WkdWeWFXNW5RMjl1ZEdWNGRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlEWVc1MllYTlNaVzVrWlhKcGJtZERiMjUwWlhoMExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTEU5QlFVOHNSVUZMVGl4WlFVRlpMRVZCUTFvc2NVSkJRWEZDTEVWQlEzSkNMSEZDUVVGeFFpeEZRVU55UWl4WlFVRlpMRVZCUTFvc1pVRkJaU3hIUVVObUxFMUJRVTBzWVVGQllTeERRVUZETzBGQlEzSkNMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzVFVGQlRTeGhRVUZoTEVOQlFVTTdRVUZGY2tNc1RVRkJUU3hGUVVGRkxGVkJRVlVzUlVGQlJTeEhRVUZITEUxQlFVMHNRMEZCUXp0QlFVVTVRaXhOUVVGTkxFTkJRVU1zVDBGQlR5eFBRVUZQTEhOQ1FVRnpRanRKUVVreFF6dFJRVU5ETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTm9SQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQk5rSXNRMEZCUXp0UlFVVXhSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVkQlFVY3NRMEZCUXp0UlFVTnFRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXp0SlFVTnVRaXhEUVVGRE8wbEJSVVFzU1VGQlNTeFBRVUZQTzFGQlExWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRE8wbEJRM0pDTEVOQlFVTTdTVUZGUkN4SlFVRkpMRXRCUVVzN1VVRkRVaXhQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4SFFVRkhMRlZCUVZVc1EwRkJRenRKUVVONFF5eERRVUZETzBsQlJVUXNTVUZCU1N4TFFVRkxMRU5CUVVNc1MwRkJZVHRSUVVOMFFpeE5RVUZOTEZkQlFWY3NSMEZCUnl4TFFVRkxMRWRCUVVjc1ZVRkJWU3hEUVVGRE8xRkJRM1pETEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFdEJRVXNzVjBGQlZ5eEZRVUZGTzFsQlEzWkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eEhRVUZITEZkQlFWY3NRMEZCUXp0WlFVTnFReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkJSeXhMUVVGTExFbEJRVWtzUTBGQlF6dFRRVU40UXp0SlFVTkdMRU5CUVVNN1NVRkZSQ3hKUVVGSkxFMUJRVTA3VVVGRFZDeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExGVkJRVlVzUTBGQlF6dEpRVU42UXl4RFFVRkRPMGxCUlVRc1NVRkJTU3hOUVVGTkxFTkJRVU1zUzBGQllUdFJRVU4yUWl4TlFVRk5MRmRCUVZjc1IwRkJSeXhMUVVGTExFZEJRVWNzVlVGQlZTeERRVUZETzFGQlEzWkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEV0QlFVc3NWMEZCVnl4RlFVRkZPMWxCUTNoRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4SFFVRkhMRmRCUVZjc1EwRkJRenRaUVVOc1F5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eExRVUZMTEVsQlFVa3NRMEZCUXp0VFFVTjZRenRKUVVOR0xFTkJRVU03U1VGRlJDeFRRVUZUTzFGQlExSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF6dEpRVU16UWl4RFFVRkRPMGxCUlVRc1UwRkJVenRSUVVOU0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1NVRkRNMElzUTBGQlF6dEpRVVZFTEVsQlFVazdVVUZEU0N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRkZSQ3hQUVVGUE8xRkJRMDRzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRKUVVONlFpeERRVUZETzBsQlJVUXNXVUZCV1N4RFFVRkRMRU5CUVZNc1JVRkJSU3hEUVVGVExFVkJRVVVzUTBGQlV5eEZRVUZGTEVOQlFWTXNSVUZCUlN4RlFVRlZMRVZCUVVVc1JVRkJWVHRSUVVNNVJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmxCUVZrc1EwRkRla0lzUTBGQlF5eEhRVUZITEZWQlFWVXNSVUZEWkN4RFFVRkRMRWRCUVVjc1ZVRkJWU3hGUVVOa0xFTkJRVU1zUjBGQlJ5eFZRVUZWTEVWQlEyUXNRMEZCUXl4SFFVRkhMRlZCUVZVc1JVRkRaQ3hGUVVGRkxFZEJRVWNzVlVGQlZTeEZRVU5tTEVWQlFVVXNSMEZCUnl4VlFVRlZMRU5CUTJZc1EwRkJRenRKUVVOSUxFTkJRVU03U1VGRlJDeE5RVUZOTEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNN1VVRkRNVUlzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6VkNMRU5CUVVNN1NVRkZSQ3hOUVVGTkxFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTTdVVUZETVVJc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRelZDTEVOQlFVTTdTVUZGUkN4SlFVRkpMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk1zUlVGQlJTeExRVUZoTEVWQlFVVXNUVUZCWXp0UlFVTjJSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTjZReXhEUVVGRE8wbEJSVVFzWVVGQllTeERRVUZETEVsQlFWa3NSVUZCUlN4SlFVRlpMRVZCUVVVc1NVRkJXU3hGUVVGRkxFbEJRVmtzUlVGQlJTeERRVUZUTEVWQlFVVXNRMEZCVXp0UlFVTjZSaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRek5FTEVOQlFVTTdTVUZGUkN4blFrRkJaMElzUTBGQlF5eEhRVUZYTEVWQlFVVXNSMEZCVnl4RlFVRkZMRU5CUVZNc1JVRkJSU3hEUVVGVE8xRkJRemxFTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYUVRc1EwRkJRenRKUVVWRUxFbEJRVWtzUTBGQlF5eFBRVUV3UWl4RlFVRkZMRXRCUVdkQ08xRkJRMmhFTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRkRVFzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU40UXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRkZSQ3hOUVVGTkxFTkJRVU1zVDBGQk1FSXNSVUZCUlN4TFFVRnJRanRSUVVOd1JDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUTNoRUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU03VVVGRGVrTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXp0UlFVTnNReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRE8xRkJRM0JETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hIUVVGSExFdEJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTTdVVUZETlVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVkQlFVY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVONFF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8wbEJRM2hDTEVOQlFVTTdTVUZGVHl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFOUJRWEZDTzFGQlF5OURMRTFCUVUwc1JVRkRUQ3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUTFZc1IwRkJSeXhQUVVGUExFTkJRVU03VVVGRldpeEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRk8xbEJRMjVDTEU5QlFVOHNSVUZCUlN4RFFVRkRPMU5CUTFZN1VVRkZSQ3hKUVVGSkxFOUJRVThzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RlFVRkZPMWxCUTNKQ0xFOUJRVThzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTTdVMEZETjBNN1VVRkZSQ3hQUVVGUExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJRenRKUVVOb1F5eERRVUZETzBsQlJVOHNZVUZCWVN4RFFVRkRMRTlCUVRCQ08xRkJReTlETEVsQlFVa3NUMEZCVHl4WlFVRlpMRmxCUVZrc1JVRkJSVHRaUVVOd1F5eFBRVUZQTEhOQ1FVRnpRaXhEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0VFFVTnVSRHRSUVVWRUxFbEJRVWtzVDBGQlR5eFpRVUZaTEdWQlFXVXNSVUZCUlR0WlFVTjJReXhKUVVGSkxGRkJRVzlETEVOQlFVTTdXVUZGZWtNc1NVRkJTU3hQUVVGUExGbEJRVmtzY1VKQlFYRkNMRVZCUVVVN1owSkJRemRETEUxQlFVMHNSVUZEVEN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVkQlEyUXNSMEZCUnl4UFFVRlBMRU5CUVVNN1owSkJSVm9zVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdZVUZET1VRN1dVRkZSQ3hKUVVGSkxFOUJRVThzV1VGQldTeHhRa0ZCY1VJc1JVRkJSVHRuUWtGRE4wTXNUVUZCVFN4RlFVTk1MRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVOMFFpeEhRVUZITEU5QlFVOHNRMEZCUXp0blFrRkZXaXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4dlFrRkJiMElzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMkZCUTNSRk8xbEJSVVFzU1VGQlNTeFJRVUZSTEVWQlFVVTdaMEpCUTJJc1RVRkJUU3hGUVVOTUxFMUJRVTBzUlVGQlJTeFBRVUZQTEVkQlEyWXNSMEZCUnl4UFFVRlBMRU5CUVVNN1owSkJSVm9zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN2IwSkJRM1pETEZGQlFWRXNRMEZCUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEhOQ1FVRnpRaXhEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8ybENRVU5xUmp0blFrRkZSQ3hQUVVGUExGRkJRVkVzUTBGQlF6dGhRVU5vUWp0VFFVTkVPMkZCUVUwc1NVRkJTU3hQUVVGUExGbEJRVmtzV1VGQldTeEZRVUZGTzFsQlF6TkRMRTFCUVUwc1JVRkRUQ3hMUVVGTExFVkJRVVVzVFVGQlRTeEhRVU5pTEVkQlFVY3NUMEZCVHl4RFFVRkRPMWxCUlZvc1NVRkJTU3hMUVVGTExFVkJRVVU3WjBKQlExWXNUVUZCVFN4VlFVRlZMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenRuUWtGRmJrUXNUVUZCVFN4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8yZENRVVZ5UlN4SlFVRkpMR0ZCUVdFc1JVRkJSVHR2UWtGRGJFSXNUMEZCVHl4aFFVRmhMRU5CUVVNN2FVSkJRM0pDTzJGQlEwUTdVMEZEUkR0UlFVVkVMRTlCUVU4c1JVRkJSU3hEUVVGRE8wbEJRMWdzUTBGQlF6dEpRVVZFTEVsQlFVazdVVUZEU0N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNN1EwRkRSQ0o5IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3JQYXR0ZXJuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hID0gMDtcbiAgICAgICAgdGhpcy5yID0gMDtcbiAgICAgICAgdGhpcy5nID0gMDtcbiAgICAgICAgdGhpcy5iID0gMDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjlzYjNKUVlYUjBaWEp1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwwTnZiRzl5VUdGMGRHVnliaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGRlFTeE5RVUZOTEVOQlFVTXNUMEZCVHl4UFFVRlBMRmxCUVZrN1NVRkJha003VVVGRFF5eE5RVUZETEVkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUTJRc1RVRkJReXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVU5rTEUxQlFVTXNSMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkRaQ3hOUVVGRExFZEJRVmNzUTBGQlF5eERRVUZETzBsQlEyWXNRMEZCUXp0RFFVRkJJbjA9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhZGllbnRQYXR0ZXJuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5vZmZzZXRzID0gW107XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUjNKaFpHbGxiblJRWVhSMFpYSnVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDBkeVlXUnBaVzUwVUdGMGRHVnliaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGSFFTeE5RVUZOTEVOQlFVTXNUMEZCVHl4UFFVRlBMR1ZCUVdVN1NVRkJjRU03VVVGRFF5eFhRVUZOTEVkQlFXMUNMRVZCUVVVc1EwRkJRenRSUVVNMVFpeFpRVUZQTEVkQlFXRXNSVUZCUlN4RFFVRkRPMGxCUTNoQ0xFTkJRVU03UTBGQlFTSjkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZVBhdHRlcm4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmltYWdlID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXBlYXQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNtb290aCA9IHRydWU7XG4gICAgICAgIHRoaXMuYSA9IDE7XG4gICAgICAgIHRoaXMuYiA9IDA7XG4gICAgICAgIHRoaXMuYyA9IDA7XG4gICAgICAgIHRoaXMuZCA9IDE7XG4gICAgICAgIHRoaXMudHggPSAwO1xuICAgICAgICB0aGlzLnR5ID0gMDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lTVzFoWjJWUVlYUjBaWEp1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwwbHRZV2RsVUdGMGRHVnliaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGRlFTeE5RVUZOTEVOQlFVTXNUMEZCVHl4UFFVRlBMRmxCUVZrN1NVRkJha003VVVGRFF5eFZRVUZMTEVkQlFUWkNMRWxCUVVrc1EwRkJRenRSUVVOMlF5eFhRVUZOTEVkQlFWa3NTVUZCU1N4RFFVRkRPMUZCUTNaQ0xGZEJRVTBzUjBGQldTeEpRVUZKTEVOQlFVTTdVVUZEZGtJc1RVRkJReXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVU5rTEUxQlFVTXNSMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkRaQ3hOUVVGRExFZEJRVmNzUTBGQlF5eERRVUZETzFGQlEyUXNUVUZCUXl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVVOa0xFOUJRVVVzUjBGQlZ5eERRVUZETEVOQlFVTTdVVUZEWml4UFFVRkZMRWRCUVZjc1EwRkJReXhEUVVGRE8wbEJRMmhDTEVOQlFVTTdRMEZCUVNKOSIsImltcG9ydCBHcmFkaWVudFBhdHRlcm4gZnJvbSAnLi9HcmFkaWVudFBhdHRlcm4nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZWFyR3JhZGllbnRQYXR0ZXJuIGV4dGVuZHMgR3JhZGllbnRQYXR0ZXJuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy54MCA9IDA7XG4gICAgICAgIHRoaXMueTAgPSAwO1xuICAgICAgICB0aGlzLngxID0gMDtcbiAgICAgICAgdGhpcy55MSA9IDA7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVEdsdVpXRnlSM0poWkdsbGJuUlFZWFIwWlhKdUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMHhwYm1WaGNrZHlZV1JwWlc1MFVHRjBkR1Z5Ymk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hQUVVGUExHVkJRV1VzVFVGQlRTeHRRa0ZCYlVJc1EwRkJRenRCUVVWb1JDeE5RVUZOTEVOQlFVTXNUMEZCVHl4UFFVRlBMSEZDUVVGelFpeFRRVUZSTEdWQlFXVTdTVUZCYkVVN08xRkJRME1zVDBGQlJTeEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTm1MRTlCUVVVc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGRFppeFBRVUZGTEVkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUTJZc1QwRkJSU3hIUVVGWExFTkJRVU1zUTBGQlF6dEpRVU5vUWl4RFFVRkRPME5CUVVFaWZRPT0iLCJpbXBvcnQgR3JhZGllbnRQYXR0ZXJuIGZyb20gJy4vR3JhZGllbnRQYXR0ZXJuJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlhbEdyYWRpZW50UGF0dGVybiBleHRlbmRzIEdyYWRpZW50UGF0dGVybiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMueDAgPSAwO1xuICAgICAgICB0aGlzLnkwID0gMDtcbiAgICAgICAgdGhpcy5yMCA9IDA7XG4gICAgICAgIHRoaXMueDEgPSAwO1xuICAgICAgICB0aGlzLnkxID0gMDtcbiAgICAgICAgdGhpcy5yMSA9IDA7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVW1Ga2FXRnNSM0poWkdsbGJuUlFZWFIwWlhKdUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMUpoWkdsaGJFZHlZV1JwWlc1MFVHRjBkR1Z5Ymk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hQUVVGUExHVkJRV1VzVFVGQlRTeHRRa0ZCYlVJc1EwRkJRenRCUVVWb1JDeE5RVUZOTEVOQlFVTXNUMEZCVHl4UFFVRlBMSEZDUVVGelFpeFRRVUZSTEdWQlFXVTdTVUZCYkVVN08xRkJRME1zVDBGQlJTeEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTm1MRTlCUVVVc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGRFppeFBRVUZGTEVkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUTJZc1QwRkJSU3hIUVVGWExFTkJRVU1zUTBGQlF6dFJRVU5tTEU5QlFVVXNSMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkRaaXhQUVVGRkxFZEJRVmNzUTBGQlF5eERRVUZETzBsQlEyaENMRU5CUVVNN1EwRkJRU0o5IiwiaW1wb3J0IEdyYXBoaWNzUGF0aCBmcm9tICcuL0dyYXBoaWNzUGF0aCc7XG5pbXBvcnQgR3JhcGhpY3NTb2xpZEZpbGwgZnJvbSAnLi9HcmFwaGljc1NvbGlkRmlsbCc7XG5pbXBvcnQgR3JhcGhpY3NCaXRtYXBGaWxsIGZyb20gJy4vR3JhcGhpY3NCaXRtYXBGaWxsJztcbmltcG9ydCBHcmFwaGljc0dyYWRpZW50RmlsbCBmcm9tICcuL0dyYXBoaWNzR3JhZGllbnRGaWxsJztcbmltcG9ydCBHcmFwaGljc0VuZEZpbGwgZnJvbSAnLi9HcmFwaGljc0VuZEZpbGwnO1xuaW1wb3J0IEdyYXBoaWNzU3Ryb2tlIGZyb20gJy4vR3JhcGhpY3NTdHJva2UnO1xuaW1wb3J0IHsgR3JhZGllbnRUeXBlLCBTcHJlYWRNZXRob2QsIEludGVycG9sYXRpb25NZXRob2QsIENhcHNTdHlsZSwgSm9pbnRTdHlsZSwgTGluZVNjYWxlTW9kZSwgR3JhcGhpY3NQYXRoV2luZGluZywgVHJpYW5nbGVDdWxsaW5nLCB9IGZyb20gJy4vZW51bXMnO1xuaW1wb3J0IHsgR3JhcGhpY3NUcmlhbmdsZVBhdGggfSBmcm9tICcuJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoaWNzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IG5ldyBHcmFwaGljc1BhdGgoKTtcbiAgICAgICAgdGhpcy5fZGF0YSA9IFt0aGlzLl9wYXRoXTtcbiAgICB9XG4gICAgYmVnaW5GaWxsKGNvbG9yID0gMCwgYWxwaGEgPSAxKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgR3JhcGhpY3NTb2xpZEZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgdGhpcy5hZGRHcmFwaGljc1N0eWxlKGRhdGEpO1xuICAgIH1cbiAgICBiZWdpbkJpdG1hcEZpbGwoYml0bWFwLCBtYXRyaXgsIHJlcGVhdCA9IHRydWUsIHNtb290aCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgR3JhcGhpY3NCaXRtYXBGaWxsKGJpdG1hcCwgbWF0cml4LCByZXBlYXQsIHNtb290aCk7XG4gICAgICAgIHRoaXMuYWRkR3JhcGhpY3NTdHlsZShkYXRhKTtcbiAgICB9XG4gICAgYmVnaW5HcmFkaWVudEZpbGwodHlwZSwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgbWF0cml4LCBzcHJlYWRNZXRob2QgPSBTcHJlYWRNZXRob2QuUkVQRUFULCBpbnRlcnBvbGF0aW9uTWV0aG9kID0gSW50ZXJwb2xhdGlvbk1ldGhvZC5SR0IsIGZvY2FsUG9pbnRSYXRpbyA9IDApIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBHcmFwaGljc0dyYWRpZW50RmlsbCh0eXBlLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBtYXRyaXgsIHNwcmVhZE1ldGhvZCwgaW50ZXJwb2xhdGlvbk1ldGhvZCwgZm9jYWxQb2ludFJhdGlvKTtcbiAgICAgICAgdGhpcy5hZGRHcmFwaGljc1N0eWxlKGRhdGEpO1xuICAgIH1cbiAgICBsaW5lU3R5bGUodGhpY2tuZXNzID0gMCwgY29sb3IgPSAwLCBhbHBoYSA9IDEsIHBpeGVsSGludGluZyA9IGZhbHNlLCBzY2FsZU1vZGUgPSBMaW5lU2NhbGVNb2RlLk5PTkUsIGNhcHMgPSBDYXBzU3R5bGUuUk9VTkQsIGpvaW50cyA9IEpvaW50U3R5bGUuUk9VTkQsIG1pdGVyTGltaXQgPSAzKSB7XG4gICAgICAgIGNvbnN0IGZpbGwgPSBuZXcgR3JhcGhpY3NTb2xpZEZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBHcmFwaGljc1N0cm9rZSh0aGlja25lc3MsIHBpeGVsSGludGluZywgc2NhbGVNb2RlLCBjYXBzLCBqb2ludHMsIG1pdGVyTGltaXQsIGZpbGwpO1xuICAgICAgICB0aGlzLmFkZEdyYXBoaWNzU3R5bGUoZGF0YSk7XG4gICAgICAgIHRoaXMuX3N0cm9rZSA9IGRhdGE7XG4gICAgfVxuICAgIGxpbmVHcmFkaWVudFN0eWxlKHR5cGUgPSBHcmFkaWVudFR5cGUuTElORUFSLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBtYXRyaXgsIHNwcmVhZE1ldGhvZCA9IFNwcmVhZE1ldGhvZC5QQUQsIGludGVycG9sYXRpb25NZXRob2QgPSBJbnRlcnBvbGF0aW9uTWV0aG9kLlJHQiwgZm9jYWxQb2ludFJhdGlvID0gMCkge1xuICAgICAgICBjb25zdCBmaWxsID0gbmV3IEdyYXBoaWNzR3JhZGllbnRGaWxsKHR5cGUsIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIG1hdHJpeCwgc3ByZWFkTWV0aG9kLCBpbnRlcnBvbGF0aW9uTWV0aG9kLCBmb2NhbFBvaW50UmF0aW8pO1xuICAgICAgICBpZiAodGhpcy5fc3Ryb2tlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdHJva2UuZmlsbCA9IGZpbGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGluZUJpdG1hcFN0eWxlKGJpdG1hcCwgbWF0cml4LCByZXBlYXQgPSB0cnVlLCBzbW9vdGggPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBmaWxsID0gbmV3IEdyYXBoaWNzQml0bWFwRmlsbChiaXRtYXAsIG1hdHJpeCwgcmVwZWF0LCBzbW9vdGgpO1xuICAgICAgICBpZiAodGhpcy5fc3Ryb2tlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdHJva2UuZmlsbCA9IGZpbGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHJhd1BhdGgoY29tbWFuZHMsIGRhdGEsIHdpbmRpbmcgPSBHcmFwaGljc1BhdGhXaW5kaW5nLkVWRU5fT0REKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBuZXcgR3JhcGhpY3NQYXRoKGNvbW1hbmRzLCBkYXRhLCB3aW5kaW5nKTtcbiAgICAgICAgdGhpcy5fZGF0YS5wdXNoKHBhdGgpO1xuICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuICAgIH1cbiAgICBkcmF3VHJpYW5nbGVzKHZlcnRpY2VzLCBpbmRpY2VzLCB1dnREYXRhLCBjdWxsaW5nID0gVHJpYW5nbGVDdWxsaW5nLk5PTkUpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IG5ldyBHcmFwaGljc1RyaWFuZ2xlUGF0aCh2ZXJ0aWNlcywgaW5kaWNlcywgdXZ0RGF0YSwgY3VsbGluZyk7XG4gICAgICAgIHRoaXMuX2RhdGEucHVzaChwYXRoKTtcbiAgICAgICAgdGhpcy5iZWdpblBhdGgoKTtcbiAgICB9XG4gICAgZHJhd1JvdW5kUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBlbGxpcHNlV2lkdGggPSAwLCBlbGxpcHNlSGVpZ2h0ID0gMCkge1xuICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5fcGF0aDtcbiAgICAgICAgY29uc3QgdyA9IGVsbGlwc2VXaWR0aDtcbiAgICAgICAgY29uc3QgaCA9IGVsbGlwc2VIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGsgPSAwLjU1MjI4NDg7XG4gICAgICAgIGNvbnN0IG94ID0gKHcgLyAyKSAqIGs7XG4gICAgICAgIGNvbnN0IG95ID0gKGggLyAyKSAqIGs7XG4gICAgICAgIGNvbnN0IHhlID0geCArIHc7XG4gICAgICAgIGNvbnN0IHllID0geSArIGg7XG4gICAgICAgIGNvbnN0IHhtID0geCArIHcgLyAyO1xuICAgICAgICBjb25zdCB5bSA9IHkgKyBoIC8gMjtcbiAgICAgICAgY29uc3QgZHggPSB3aWR0aCAtIHc7XG4gICAgICAgIGNvbnN0IGR5ID0gaGVpZ2h0IC0gaDtcbiAgICAgICAgcGF0aC5tb3ZlVG8oeCwgeW0pO1xuICAgICAgICBwYXRoLmN1YmljQ3VydmVUbyh4LCB5bSAtIG95LCB4bSAtIG94LCB5LCB4bSwgeSk7XG4gICAgICAgIHBhdGgubGluZVRvKHhtICsgZHgsIHkpO1xuICAgICAgICBwYXRoLmN1YmljQ3VydmVUbyh4bSArIG94ICsgZHgsIHksIHhlICsgZHgsIHltIC0gb3ksIHhlICsgZHgsIHltKTtcbiAgICAgICAgcGF0aC5saW5lVG8oeGUgKyBkeCwgeW0gKyBkeSk7XG4gICAgICAgIHBhdGguY3ViaWNDdXJ2ZVRvKHhlICsgZHgsIHltICsgb3kgKyBkeSwgeG0gKyBveCArIGR4LCB5ZSArIGR5LCB4bSArIGR4LCB5ZSArIGR5KTtcbiAgICAgICAgcGF0aC5saW5lVG8oeG0sIHllICsgZHkpO1xuICAgICAgICBwYXRoLmN1YmljQ3VydmVUbyh4bSAtIG94LCB5ZSArIGR5LCB4LCB5bSArIG95ICsgZHksIHgsIHltICsgZHkpO1xuICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuICAgIH1cbiAgICBkcmF3UmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLl9wYXRoO1xuICAgICAgICBwYXRoLm1vdmVUbyh4LCB5KTtcbiAgICAgICAgcGF0aC5saW5lVG8oeCArIHdpZHRoLCB5KTtcbiAgICAgICAgcGF0aC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcbiAgICAgICAgcGF0aC5saW5lVG8oeCwgeSArIGhlaWdodCk7XG4gICAgICAgIHBhdGgubGluZVRvKHgsIHkpO1xuICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuICAgIH1cbiAgICBkcmF3Q2lyY2xlKHgsIHksIHJhZGl1cykge1xuICAgICAgICBjb25zdCBzaXplID0gcmFkaXVzICogMjtcbiAgICAgICAgdGhpcy5kcmF3RWxsaXBzZSh4IC0gcmFkaXVzLCB5IC0gcmFkaXVzLCBzaXplLCBzaXplKTtcbiAgICB9XG4gICAgZHJhd0VsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5fcGF0aDtcbiAgICAgICAgY29uc3QgayA9IDAuNTUyMjg0ODtcbiAgICAgICAgY29uc3Qgb3ggPSB3aWR0aCAvIDIgKiBrO1xuICAgICAgICBjb25zdCBveSA9IGhlaWdodCAvIDIgKiBrO1xuICAgICAgICBjb25zdCB4ZSA9IHggKyB3aWR0aDtcbiAgICAgICAgY29uc3QgeWUgPSB5ICsgaGVpZ2h0O1xuICAgICAgICBjb25zdCB4bSA9IHggKyB3aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IHltID0geSArIGhlaWdodCAvIDI7XG4gICAgICAgIHBhdGgubW92ZVRvKHgsIHltKTtcbiAgICAgICAgcGF0aC5jdWJpY0N1cnZlVG8oeCwgeW0gLSBveSwgeG0gLSBveCwgeSwgeG0sIHkpO1xuICAgICAgICBwYXRoLmN1YmljQ3VydmVUbyh4bSArIG94LCB5LCB4ZSwgeW0gLSBveSwgeGUsIHltKTtcbiAgICAgICAgcGF0aC5jdWJpY0N1cnZlVG8oeGUsIHltICsgb3ksIHhtICsgb3gsIHllLCB4bSwgeWUpO1xuICAgICAgICBwYXRoLmN1YmljQ3VydmVUbyh4bSAtIG94LCB5ZSwgeCwgeW0gKyBveSwgeCwgeW0pO1xuICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuICAgIH1cbiAgICBkcmF3R3JhcGhpY3NEYXRhKGdyYXBoaWNzRGF0YSkge1xuICAgICAgICB0aGlzLl9kYXRhLnB1c2goLi4uZ3JhcGhpY3NEYXRhKTtcbiAgICAgICAgdGhpcy5iZWdpblBhdGgoKTtcbiAgICB9XG4gICAgZW5kRmlsbCgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBHcmFwaGljc0VuZEZpbGwoKTtcbiAgICAgICAgdGhpcy5fZGF0YS5wdXNoKGRhdGEpO1xuICAgICAgICB0aGlzLl9zdHJva2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLl9wYXRoID0gbmV3IEdyYXBoaWNzUGF0aCgpO1xuICAgICAgICB0aGlzLl9kYXRhID0gW3RoaXMuX3BhdGhdO1xuICAgICAgICB0aGlzLl9zdHJva2UgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvcHlGcm9tKHNvdXJjZUdyYXBoaWNzKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBzb3VyY2VHcmFwaGljcy5yZWFkR3JhcGhpY3NEYXRhKCk7XG4gICAgICAgIHRoaXMuX3N0cm9rZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5iZWdpblBhdGgoKTtcbiAgICB9XG4gICAgcmVhZEdyYXBoaWNzRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuICAgIGFkZEdyYXBoaWNzU3R5bGUoZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMuX3BhdGguY29tbWFuZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2RhdGEuaW5kZXhPZih0aGlzLl9wYXRoKTtcbiAgICAgICAgICAgIHRoaXMuX2RhdGEuc3BsaWNlKGluZGV4LCAwLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2RhdGEucHVzaChkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBiZWdpblBhdGgoKSB7XG4gICAgICAgIGlmICh0aGlzLl9wYXRoLmNvbW1hbmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fcGF0aCA9IG5ldyBHcmFwaGljc1BhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuX2RhdGEucHVzaCh0aGlzLl9wYXRoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVIzSmhjR2hwWTNNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZSM0poY0docFkzTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUlVFc1QwRkJUeXhaUVVGWkxFMUJRVTBzWjBKQlFXZENMRU5CUVVNN1FVRkRNVU1zVDBGQlR5eHBRa0ZCYVVJc1RVRkJUU3h4UWtGQmNVSXNRMEZCUXp0QlFVTndSQ3hQUVVGUExHdENRVUZyUWl4TlFVRk5MSE5DUVVGelFpeERRVUZETzBGQlEzUkVMRTlCUVU4c2IwSkJRVzlDTEUxQlFVMHNkMEpCUVhkQ0xFTkJRVU03UVVGRE1VUXNUMEZCVHl4bFFVRmxMRTFCUVUwc2JVSkJRVzFDTEVOQlFVTTdRVUZEYUVRc1QwRkJUeXhqUVVGakxFMUJRVTBzYTBKQlFXdENMRU5CUVVNN1FVRkRPVU1zVDBGQlR5eEZRVU5PTEZsQlFWa3NSVUZEV2l4WlFVRlpMRVZCUTFvc2JVSkJRVzFDTEVWQlEyNUNMRk5CUVZNc1JVRkRWQ3hWUVVGVkxFVkJRMVlzWVVGQllTeEZRVU5pTEcxQ1FVRnRRaXhGUVVOdVFpeGxRVUZsTEVkQlEyWXNUVUZCVFN4VFFVRlRMRU5CUVVNN1FVRkRha0lzVDBGQlR5eEZRVUZGTEc5Q1FVRnZRaXhGUVVGRkxFMUJRVTBzUjBGQlJ5eERRVUZETzBGQlJYcERMRTFCUVUwc1EwRkJReXhQUVVGUExFOUJRVThzVVVGQlVUdEpRVXMxUWp0UlFVTkRMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeFpRVUZaTEVWQlFVVXNRMEZCUXp0UlFVTm9ReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRek5DTEVOQlFVTTdTVUZGUkN4VFFVRlRMRU5CUVVNc1VVRkJaMElzUTBGQlF5eEZRVUZGTEZGQlFXZENMRU5CUVVNN1VVRkROME1zVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4cFFrRkJhVUlzUTBGQlF5eExRVUZMTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRha1FzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlF6ZENMRU5CUVVNN1NVRkZSQ3hsUVVGbExFTkJRMlFzVFVGQmVVSXNSVUZEZWtJc1RVRkJaU3hGUVVObUxGTkJRV3RDTEVsQlFVa3NSVUZEZEVJc1UwRkJhMElzUzBGQlN6dFJRVVYyUWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxHdENRVUZyUWl4RFFVRkRMRTFCUVUwc1JVRkJSU3hOUVVGTkxFVkJRVVVzVFVGQlRTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTNCRkxFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU0zUWl4RFFVRkRPMGxCUlVRc2FVSkJRV2xDTEVOQlEyaENMRWxCUVd0Q0xFVkJRMnhDTEUxQlFXZENMRVZCUTJoQ0xFMUJRV2RDTEVWQlEyaENMRTFCUVdkQ0xFVkJRMmhDTEUxQlFXTXNSVUZEWkN4bFFVRTJRaXhaUVVGWkxFTkJRVU1zVFVGQlRTeEZRVU5vUkN4elFrRkJNa01zYlVKQlFXMUNMRU5CUVVNc1IwRkJSeXhGUVVOc1JTeHJRa0ZCTUVJc1EwRkJRenRSUVVVelFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRzlDUVVGdlFpeERRVU53UXl4SlFVRkpMRVZCUTBvc1RVRkJUU3hGUVVOT0xFMUJRVTBzUlVGRFRpeE5RVUZOTEVWQlEwNHNUVUZCVFN4RlFVTk9MRmxCUVZrc1JVRkRXaXh0UWtGQmJVSXNSVUZEYmtJc1pVRkJaU3hEUVVObUxFTkJRVU03VVVGRlJpeEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETjBJc1EwRkJRenRKUVVWRUxGTkJRVk1zUTBGRFVpeFpRVUZ2UWl4RFFVRkRMRVZCUTNKQ0xGRkJRV2RDTEVOQlFVTXNSVUZEYWtJc1VVRkJaMElzUTBGQlF5eEZRVU5xUWl4bFFVRjNRaXhMUVVGTExFVkJRemRDTEZsQlFUSkNMR0ZCUVdFc1EwRkJReXhKUVVGSkxFVkJRemRETEU5QlFXdENMRk5CUVZNc1EwRkJReXhMUVVGTExFVkJRMnBETEZOQlFYRkNMRlZCUVZVc1EwRkJReXhMUVVGTExFVkJRM0pETEdGQlFYRkNMRU5CUVVNN1VVRkZkRUlzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4cFFrRkJhVUlzUTBGQlF5eExRVUZMTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkZha1FzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4alFVRmpMRU5CUXpsQ0xGTkJRVk1zUlVGRFZDeFpRVUZaTEVWQlExb3NVMEZCVXl4RlFVTlVMRWxCUVVrc1JVRkRTaXhOUVVGTkxFVkJRMDRzVlVGQlZTeEZRVU5XTEVsQlFVa3NRMEZEU2l4RFFVRkRPMUZCUlVZc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRelZDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRE8wbEJRM0pDTEVOQlFVTTdTVUZGUkN4cFFrRkJhVUlzUTBGRGFFSXNUMEZCY1VJc1dVRkJXU3hEUVVGRExFMUJRVTBzUlVGRGVFTXNUVUZCYVVJc1JVRkRha0lzVFVGQmFVSXNSVUZEYWtJc1RVRkJhVUlzUlVGRGFrSXNUVUZCWlN4RlFVTm1MR1ZCUVRaQ0xGbEJRVmtzUTBGQlF5eEhRVUZITEVWQlF6ZERMSE5DUVVFeVF5eHRRa0ZCYlVJc1EwRkJReXhIUVVGSExFVkJRMnhGTEd0Q1FVRXdRaXhEUVVGRE8xRkJSVE5DTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc2IwSkJRVzlDTEVOQlEzQkRMRWxCUVVrc1JVRkRTaXhOUVVGTkxFVkJRMDRzVFVGQlRTeEZRVU5PTEUxQlFVMHNSVUZEVGl4TlFVRk5MRVZCUTA0c1dVRkJXU3hGUVVOYUxHMUNRVUZ0UWl4RlFVTnVRaXhsUVVGbExFTkJRMllzUTBGQlF6dFJRVVZHTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVOcVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU03VTBGRGVrSTdTVUZEUml4RFFVRkRPMGxCUlVRc1pVRkJaU3hEUVVOa0xFMUJRWGxDTEVWQlEzcENMRTFCUVdVc1JVRkRaaXhUUVVGclFpeEpRVUZKTEVWQlEzUkNMRk5CUVd0Q0xFdEJRVXM3VVVGRmRrSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hyUWtGQmEwSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1RVRkJUU3hGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVVndSU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdXVUZEYWtJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMU5CUTNwQ08wbEJRMFlzUTBGQlF6dEpRVVZFTEZGQlFWRXNRMEZEVUN4UlFVRnJRaXhGUVVOc1FpeEpRVUZqTEVWQlEyUXNWVUZCSzBJc2JVSkJRVzFDTEVOQlFVTXNVVUZCVVR0UlFVVXpSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEZsQlFWa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFGQlEzWkVMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNSQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0SlFVTnNRaXhEUVVGRE8wbEJSVVFzWVVGQllTeERRVU5hTEZGQlFXdENMRVZCUTJ4Q0xFOUJRV3RDTEVWQlEyeENMRTlCUVd0Q0xFVkJRMnhDTEZWQlFUSkNMR1ZCUVdVc1EwRkJReXhKUVVGSk8xRkJSUzlETEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc2IwSkJRVzlDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdVVUZETTBVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRkRUlzU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPMGxCUTJ4Q0xFTkJRVU03U1VGRlJDeGhRVUZoTEVOQlExb3NRMEZCVXl4RlFVRkZMRU5CUVZNc1JVRkRjRUlzUzBGQllTeEZRVUZGTEUxQlFXTXNSVUZETjBJc1pVRkJkVUlzUTBGQlF5eEZRVUZGTEdkQ1FVRjNRaXhEUVVGRE8xRkJSVzVFTEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRSUVVWcVFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJSWGhDTEUxQlFVMHNRMEZCUXl4SFFVRlhMRmxCUVZrc1EwRkJRenRSUVVNdlFpeE5RVUZOTEVOQlFVTXNSMEZCVnl4aFFVRmhMRU5CUVVNN1VVRkZhRU1zVFVGQlRTeERRVUZETEVkQlFWY3NVMEZCVXl4RFFVRkRPMUZCUlRWQ0xFMUJRVTBzUlVGQlJTeEhRVUZYTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU12UWl4TlFVRk5MRVZCUVVVc1IwRkJWeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkZMMElzVFVGQlRTeEZRVUZGTEVkQlFWY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVONlFpeE5RVUZOTEVWQlFVVXNSMEZCVnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSWHBDTEUxQlFVMHNSVUZCUlN4SFFVRlhMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF6ZENMRTFCUVUwc1JVRkJSU3hIUVVGWExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUlRkQ0xFMUJRVTBzUlVGQlJTeEhRVUZYTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkROMElzVFVGQlRTeEZRVUZGTEVkQlFWY3NUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVVNVFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU51UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOcVJDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZUVJc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRiRVVzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTVRaXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTnNSaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGVrSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZGYWtVc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzBsQlEyeENMRU5CUVVNN1NVRkZSQ3hSUVVGUkxFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTXNSVUZCUlN4TFFVRmhMRVZCUVVVc1RVRkJZenRSUVVNelJDeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1VVRkZha0lzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVWNFFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5zUWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRNVUlzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTnVReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRE0wSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZGYkVJc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzBsQlEyeENMRU5CUVVNN1NVRkZSQ3hWUVVGVkxFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTXNSVUZCUlN4TlFVRmpPMUZCUXpsRExFMUJRVTBzU1VGQlNTeEhRVUZYTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRhRU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1RVRkJUU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRM1JFTEVOQlFVTTdTVUZGUkN4WFFVRlhMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk1zUlVGQlJTeExRVUZoTEVWQlFVVXNUVUZCWXp0UlFVTTVSQ3hKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdVVUZGYWtJc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0UlFVVjRRaXhOUVVGTkxFTkJRVU1zUjBGQlZ5eFRRVUZUTEVOQlFVTTdVVUZETlVJc1RVRkJUU3hGUVVGRkxFZEJRVmNzUzBGQlN5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRha01zVFVGQlRTeEZRVUZGTEVkQlFWY3NUVUZCVFN4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGJFTXNUVUZCVFN4RlFVRkZMRWRCUVZjc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU0zUWl4TlFVRk5MRVZCUVVVc1IwRkJWeXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETzFGQlF6bENMRTFCUVUwc1JVRkJSU3hIUVVGWExFTkJRVU1zUjBGQlJ5eExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJwRExFMUJRVTBzUlVGQlJTeEhRVUZYTEVOQlFVTXNSMEZCUnl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSV3hETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEyNUNMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnBFTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTI1RUxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzQkVMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJSV3hFTEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRKUVVOc1FpeERRVUZETzBsQlJVUXNaMEpCUVdkQ0xFTkJRVU1zV1VGQk5rSTdVVUZETjBNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4WlFVRlpMRU5CUVVNc1EwRkJRenRSUVVOcVF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1NVRkRiRUlzUTBGQlF6dEpRVVZFTEU5QlFVODdVVUZEVGl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxHVkJRV1VzUlVGQlJTeERRVUZETzFGQlEyNURMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUlhSQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0SlFVTnNRaXhEUVVGRE8wbEJSVVFzUzBGQlN6dFJRVU5LTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3haUVVGWkxFVkJRVVVzUTBGQlF6dFJRVU5vUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpGQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NVMEZCVXl4RFFVRkRPMGxCUXpGQ0xFTkJRVU03U1VGRlJDeFJRVUZSTEVOQlFVTXNZMEZCZDBJN1VVRkRhRU1zU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4alFVRmpMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNRMEZCUXp0UlFVTXZReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEZOQlFWTXNRMEZCUXp0UlFVTjZRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdTVUZEYkVJc1EwRkJRenRKUVVWRUxHZENRVUZuUWp0UlFVTm1MRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU51UWl4RFFVRkRPMGxCUlU4c1owSkJRV2RDTEVOQlFVTXNTVUZCYlVJN1VVRkRNME1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUlVGQlJUdFpRVU5vUXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRE4wTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVOc1F6dGhRVUZOTzFsQlEwNHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVMEZEZEVJN1NVRkRSaXhEUVVGRE8wbEJSVThzVTBGQlV6dFJRVU5vUWl4SlFVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNSVUZCUlR0WlFVTXZRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NXVUZCV1N4RlFVRkZMRU5CUVVNN1dVRkRhRU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFOQlF6VkNPMGxCUTBZc1EwRkJRenREUVVORUluMD0iLCJpbXBvcnQgeyBNYXRyaXggfSBmcm9tICdAZTJkL2dlb20nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhpY3NCaXRtYXBGaWxsIHtcbiAgICBjb25zdHJ1Y3RvcihiaXRtYXBEYXRhLCBtYXRyaXgsIHJlcGVhdCA9IHRydWUsIHNtb290aCA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuYml0bWFwRGF0YSA9IGJpdG1hcERhdGE7XG4gICAgICAgIHRoaXMubWF0cml4ID0gbWF0cml4ID8/IG5ldyBNYXRyaXgoKTtcbiAgICAgICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XG4gICAgICAgIHRoaXMuc21vb3RoID0gc21vb3RoO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVIzSmhjR2hwWTNOQ2FYUnRZWEJHYVd4c0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMGR5WVhCb2FXTnpRbWwwYldGd1JtbHNiQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRTFCUVUwc1YwRkJWeXhEUVVGRE8wRkJSMjVETEUxQlFVMHNRMEZCUXl4UFFVRlBMRTlCUVU4c2EwSkJRV3RDTzBsQlRYUkRMRmxCUTBNc1ZVRkJPRUlzUlVGRE9VSXNUVUZCWlN4RlFVTm1MRk5CUVd0Q0xFbEJRVWtzUlVGRGRFSXNVMEZCYTBJc1MwRkJTenRSUVVWMlFpeEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRlZCUVZVc1EwRkJRenRSUVVNM1FpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1NVRkJTU3hKUVVGSkxFMUJRVTBzUlVGQlJTeERRVUZETzFGQlEzSkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETzFGQlEzSkNMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETzBsQlEzUkNMRU5CUVVNN1EwRkRSQ0o5IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhpY3NFbmRGaWxsIHtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVIzSmhjR2hwWTNORmJtUkdhV3hzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwwZHlZWEJvYVdOelJXNWtSbWxzYkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkZRU3hOUVVGTkxFTkJRVU1zVDBGQlR5eFBRVUZQTEdWQlFXVTdRMEZEYmtNaWZRPT0iLCJpbXBvcnQgeyBNYXRyaXggfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgR3JhZGllbnRUeXBlLCBTcHJlYWRNZXRob2QsIEludGVycG9sYXRpb25NZXRob2QgfSBmcm9tICcuL2VudW1zJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoaWNzR3JhZGllbnRGaWxsIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlID0gR3JhZGllbnRUeXBlLkxJTkVBUiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgbWF0cml4LCBzcHJlYWRNZXRob2QgPSBTcHJlYWRNZXRob2QuUEFELCBpbnRlcnBvbGF0aW9uTWV0aG9kID0gSW50ZXJwb2xhdGlvbk1ldGhvZC5SR0IsIGZvY2FsUG9pbnRSYXRpbyA9IDApIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBjb2xvcnMgPz8gW107XG4gICAgICAgIHRoaXMuYWxwaGFzID0gYWxwaGFzID8/IFtdO1xuICAgICAgICB0aGlzLnJhdGlvcyA9IHJhdGlvcyA/PyBbXTtcbiAgICAgICAgdGhpcy5tYXRyaXggPSBtYXRyaXggPz8gbmV3IE1hdHJpeCgpO1xuICAgICAgICB0aGlzLnNwcmVhZE1ldGhvZCA9IHNwcmVhZE1ldGhvZDtcbiAgICAgICAgdGhpcy5pbnRlcnBvbGF0aW9uTWV0aG9kID0gaW50ZXJwb2xhdGlvbk1ldGhvZDtcbiAgICAgICAgdGhpcy5mb2NhbFBvaW50UmF0aW8gPSBmb2NhbFBvaW50UmF0aW87XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUjNKaGNHaHBZM05IY21Ga2FXVnVkRVpwYkd3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZSM0poY0docFkzTkhjbUZrYVdWdWRFWnBiR3d1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUMEZCVHl4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxGZEJRVmNzUTBGQlF6dEJRVVZ1UXl4UFFVRlBMRVZCUVVVc1dVRkJXU3hGUVVGRkxGbEJRVmtzUlVGQlJTeHRRa0ZCYlVJc1JVRkJSU3hOUVVGTkxGTkJRVk1zUTBGQlF6dEJRVVV4UlN4TlFVRk5MRU5CUVVNc1QwRkJUeXhQUVVGUExHOUNRVUZ2UWp0SlFWVjRReXhaUVVORExFOUJRWEZDTEZsQlFWa3NRMEZCUXl4TlFVRk5MRVZCUTNoRExFMUJRV2xDTEVWQlEycENMRTFCUVdsQ0xFVkJRMnBDTEUxQlFXbENMRVZCUTJwQ0xFMUJRV1VzUlVGRFppeGxRVUUyUWl4WlFVRlpMRU5CUVVNc1IwRkJSeXhGUVVNM1F5eHpRa0ZCTWtNc2JVSkJRVzFDTEVOQlFVTXNSMEZCUnl4RlFVTnNSU3hyUWtGQk1FSXNRMEZCUXp0UlFVVXpRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTnFRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRNMElzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRek5DTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU16UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzU1VGQlNTeEpRVUZKTEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUTNKRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NXVUZCV1N4RFFVRkRPMUZCUTJwRExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1IwRkJSeXh0UWtGQmJVSXNRMEZCUXp0UlFVTXZReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEhRVUZITEdWQlFXVXNRMEZCUXp0SlFVTjRReXhEUVVGRE8wTkJRMFFpZlE9PSIsImltcG9ydCB7IEdyYXBoaWNzUGF0aENvbW1hbmQsIEdyYXBoaWNzUGF0aFdpbmRpbmcgfSBmcm9tICcuL2VudW1zJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoaWNzUGF0aCB7XG4gICAgY29uc3RydWN0b3IoY29tbWFuZHMsIGRhdGEsIHdpbmRpbmcgPSBHcmFwaGljc1BhdGhXaW5kaW5nLkVWRU5fT0REKSB7XG4gICAgICAgIHRoaXMuY29tbWFuZHMgPSBjb21tYW5kcyA/PyBbXTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YSA/PyBbXTtcbiAgICAgICAgdGhpcy53aW5kaW5nID0gd2luZGluZztcbiAgICB9XG4gICAgbW92ZVRvKHgsIHkpIHtcbiAgICAgICAgdGhpcy5jb21tYW5kcy5wdXNoKEdyYXBoaWNzUGF0aENvbW1hbmQuTU9WRV9UTyk7XG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHgpO1xuICAgICAgICB0aGlzLmRhdGEucHVzaCh5KTtcbiAgICB9XG4gICAgbGluZVRvKHgsIHkpIHtcbiAgICAgICAgdGhpcy5jb21tYW5kcy5wdXNoKEdyYXBoaWNzUGF0aENvbW1hbmQuTElORV9UTyk7XG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHgpO1xuICAgICAgICB0aGlzLmRhdGEucHVzaCh5KTtcbiAgICB9XG4gICAgY3VydmVUbyhjb250cm9sWCwgY29udHJvbFksIGFuY2hvclgsIGFuY2hvclkpIHtcbiAgICAgICAgdGhpcy5jb21tYW5kcy5wdXNoKEdyYXBoaWNzUGF0aENvbW1hbmQuQ1VSVkVfVE8pO1xuICAgICAgICB0aGlzLmRhdGEucHVzaChjb250cm9sWCk7XG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKGNvbnRyb2xZKTtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goYW5jaG9yWCk7XG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKGFuY2hvclkpO1xuICAgIH1cbiAgICBjdWJpY0N1cnZlVG8oY29udHJvbFgxLCBjb250cm9sWTEsIGNvbnRyb2xYMiwgY29udHJvbFkyLCBhbmNob3JYLCBhbmNob3JZKSB7XG4gICAgICAgIHRoaXMuY29tbWFuZHMucHVzaChHcmFwaGljc1BhdGhDb21tYW5kLkNVQklDX0NVUlZFX1RPKTtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goY29udHJvbFgxKTtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goY29udHJvbFkxKTtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goY29udHJvbFgyKTtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goY29udHJvbFkyKTtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goYW5jaG9yWCk7XG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKGFuY2hvclkpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVIzSmhjR2hwWTNOUVlYUm9MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDBkeVlYQm9hV056VUdGMGFDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZEUVN4UFFVRlBMRVZCUVVVc2JVSkJRVzFDTEVWQlFVVXNiVUpCUVcxQ0xFVkJRVVVzVFVGQlRTeFRRVUZUTEVOQlFVTTdRVUZGYmtVc1RVRkJUU3hEUVVGRExFOUJRVThzVDBGQlR5eFpRVUZaTzBsQlMyaERMRmxCUTBNc1VVRkJaME1zUlVGRGFFTXNTVUZCWlN4RlFVTm1MRlZCUVN0Q0xHMUNRVUZ0UWl4RFFVRkRMRkZCUVZFN1VVRkZNMFFzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4UlFVRlJMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJReTlDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU4yUWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF6dEpRVU40UWl4RFFVRkRPMGxCUlVRc1RVRkJUU3hEUVVGRExFTkJRVk1zUlVGQlJTeERRVUZUTzFGQlF6RkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlEyaEVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMjVDTEVOQlFVTTdTVUZGUkN4TlFVRk5MRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk03VVVGRE1VSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGFFUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYkVJc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRia0lzUTBGQlF6dEpRVVZFTEU5QlFVOHNRMEZEVGl4UlFVRm5RaXhGUVVGRkxGRkJRV2RDTEVWQlEyeERMRTlCUVdVc1JVRkJSU3hQUVVGbE8xRkJSV2hETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRMnBFTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlEzcENMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xRkJRM2hDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzBsQlEzcENMRU5CUVVNN1NVRkZSQ3haUVVGWkxFTkJRMWdzVTBGQmFVSXNSVUZCUlN4VFFVRnBRaXhGUVVOd1F5eFRRVUZwUWl4RlFVRkZMRk5CUVdsQ0xFVkJRM0JETEU5QlFXVXNSVUZCUlN4UFFVRmxPMUZCUldoRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMUZCUTNaRUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRekZDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFGQlF6RkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUXpGQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRekZDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlEzaENMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTNwQ0xFTkJRVU03UTBGRFJDSjkiLCJpbXBvcnQgeyBNYXRyaXgsIFBvaW50LCB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBSYWRpYWxHcmFkaWVudFBhdHRlcm4sIExpbmVhckdyYWRpZW50UGF0dGVybiwgQ29sb3JQYXR0ZXJuLCBJbWFnZVBhdHRlcm4sIH0gZnJvbSAnQGUyZC9yZW5kZXInO1xuaW1wb3J0IHsgR3JhZGllbnRUeXBlLCBHcmFwaGljc1BhdGhDb21tYW5kIH0gZnJvbSAnLi9lbnVtcyc7XG5pbXBvcnQgR3JhcGhpY3NHcmFkaWVudEZpbGwgZnJvbSAnLi9HcmFwaGljc0dyYWRpZW50RmlsbCc7XG5pbXBvcnQgR3JhcGhpY3NTdHJva2UgZnJvbSAnLi9HcmFwaGljc1N0cm9rZSc7XG5pbXBvcnQgR3JhcGhpY3NTb2xpZEZpbGwgZnJvbSAnLi9HcmFwaGljc1NvbGlkRmlsbCc7XG5pbXBvcnQgR3JhcGhpY3NCaXRtYXBGaWxsIGZyb20gJy4vR3JhcGhpY3NCaXRtYXBGaWxsJztcbmltcG9ydCBHcmFwaGljc1BhdGggZnJvbSAnLi9HcmFwaGljc1BhdGgnO1xuaW1wb3J0IEdyYXBoaWNzRW5kRmlsbCBmcm9tICcuL0dyYXBoaWNzRW5kRmlsbCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaGljc1JlbmRlcmVyIHtcbiAgICBzdGF0aWMgY3JlYXRlQ29sb3JQYXR0ZXJuKGNvbG9yLCBhbHBoYSwgY3QpIHtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IG5ldyBDb2xvclBhdHRlcm4oKTtcbiAgICAgICAgY29uc3QgciA9IGNvbG9yID4+IDE2ICYgMHhmZjtcbiAgICAgICAgY29uc3QgZyA9IGNvbG9yID4+IDggJiAweGZmO1xuICAgICAgICBjb25zdCBiID0gY29sb3IgJiAweGZmO1xuICAgICAgICBjb25zdCBhID0gYWxwaGEgKiAweGZmO1xuICAgICAgICBpZiAoIWN0LmlzRGVmYXVsdCgpKSB7XG4gICAgICAgICAgICBwYXR0ZXJuLnIgPSAociAqIGN0LnJlZE11bHRpcGxpZXIgKyBjdC5yZWRPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIHBhdHRlcm4uZyA9IChnICogY3QuZ3JlZW5NdWx0aXBsaWVyICsgY3QuZ3JlZW5PZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIHBhdHRlcm4uYiA9IChiICogY3QuYmx1ZU11bHRpcGxpZXIgKyBjdC5ibHVlT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBwYXR0ZXJuLmEgPSAoYSAqIGN0LmFscGhhTXVsdGlwbGllciArIGN0LmFscGhhT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXR0ZXJuLnIgPSByO1xuICAgICAgICBwYXR0ZXJuLmcgPSBnO1xuICAgICAgICBwYXR0ZXJuLmIgPSBiO1xuICAgICAgICBwYXR0ZXJuLmEgPSBhO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZUdyYWRpZW50UGF0dGVybihjb250ZXh0LCBmaWxsLCBjb2xvclRyYW5zZm9ybSkge1xuICAgICAgICBsZXQgcGF0dGVybjtcbiAgICAgICAgbGV0IHsgbWF0cml4IH0gPSBmaWxsO1xuICAgICAgICBpZiAoIW1hdHJpeCkge1xuICAgICAgICAgICAgbWF0cml4ID0gdGhpcy50ZW1wTWF0cml4O1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZmlsbC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEdyYWRpZW50VHlwZS5SQURJQUw6XG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wUG9pbnQxLnNldFRvKDE2MzguNCwgMCk7XG4gICAgICAgICAgICAgICAgbWF0cml4LnRyYW5zZm9ybVBvaW50VG8odGhpcy50ZW1wUG9pbnQxLCB0aGlzLnRlbXBQb2ludDEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhZGlhbEdyYWRpZW50ID0gbmV3IFJhZGlhbEdyYWRpZW50UGF0dGVybigpO1xuICAgICAgICAgICAgICAgIHJhZGlhbEdyYWRpZW50LngwID0gbWF0cml4LnR4O1xuICAgICAgICAgICAgICAgIHJhZGlhbEdyYWRpZW50LnkwID0gbWF0cml4LnR5O1xuICAgICAgICAgICAgICAgIHJhZGlhbEdyYWRpZW50LnIwID0gMDtcbiAgICAgICAgICAgICAgICByYWRpYWxHcmFkaWVudC54MSA9IG1hdHJpeC50eDtcbiAgICAgICAgICAgICAgICByYWRpYWxHcmFkaWVudC55MSA9IG1hdHJpeC50eTtcbiAgICAgICAgICAgICAgICByYWRpYWxHcmFkaWVudC5yMSA9IE1hdGguYWJzKHRoaXMudGVtcFBvaW50MS54IC0gbWF0cml4LnR4KSAvIDI7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA9IHJhZGlhbEdyYWRpZW50O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHcmFkaWVudFR5cGUuTElORUFSOlxuICAgICAgICAgICAgICAgIHRoaXMudGVtcFBvaW50MS5zZXRUbygtODE5LjIsIDApO1xuICAgICAgICAgICAgICAgIHRoaXMudGVtcFBvaW50Mi5zZXRUbyg4MTkuMiwgMCk7XG4gICAgICAgICAgICAgICAgbWF0cml4LnRyYW5zZm9ybVBvaW50VG8odGhpcy50ZW1wUG9pbnQxLCB0aGlzLnRlbXBQb2ludDEpO1xuICAgICAgICAgICAgICAgIG1hdHJpeC50cmFuc2Zvcm1Qb2ludFRvKHRoaXMudGVtcFBvaW50MiwgdGhpcy50ZW1wUG9pbnQyKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lYXJHcmFkaWVudCA9IG5ldyBMaW5lYXJHcmFkaWVudFBhdHRlcm4oKTtcbiAgICAgICAgICAgICAgICBsaW5lYXJHcmFkaWVudC54MCA9IHRoaXMudGVtcFBvaW50MS54O1xuICAgICAgICAgICAgICAgIGxpbmVhckdyYWRpZW50LnkwID0gdGhpcy50ZW1wUG9pbnQxLnk7XG4gICAgICAgICAgICAgICAgbGluZWFyR3JhZGllbnQueDEgPSB0aGlzLnRlbXBQb2ludDIueDtcbiAgICAgICAgICAgICAgICBsaW5lYXJHcmFkaWVudC55MSA9IHRoaXMudGVtcFBvaW50Mi55O1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gPSBsaW5lYXJHcmFkaWVudDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBjb2xvcnMsIGFscGhhcywgcmF0aW9zIH0gPSBmaWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmdiID0gY29sb3JzW2ldO1xuICAgICAgICAgICAgY29uc3QgYWxwaGEgPSBhbHBoYXNbaV07XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuY3JlYXRlQ29sb3JQYXR0ZXJuKHJnYiwgYWxwaGEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGxldCByYXRpbyA9IHJhdGlvc1tpXSAvIDB4ZmY7XG4gICAgICAgICAgICBpZiAocmF0aW8gPCAwKVxuICAgICAgICAgICAgICAgIHJhdGlvID0gMDtcbiAgICAgICAgICAgIGVsc2UgaWYgKHJhdGlvID4gMSlcbiAgICAgICAgICAgICAgICByYXRpbyA9IDE7XG4gICAgICAgICAgICBwYXR0ZXJuLm9mZnNldHMucHVzaChyYXRpbyk7XG4gICAgICAgICAgICBwYXR0ZXJuLmNvbG9ycy5wdXNoKGNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZUZpbGxQYXR0ZXJuKGNvbnRleHQsIGZpbGwsIGNvbG9yVHJhbnNmb3JtKSB7XG4gICAgICAgIGlmIChmaWxsIGluc3RhbmNlb2YgR3JhcGhpY3NTb2xpZEZpbGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUNvbG9yUGF0dGVybihmaWxsLmNvbG9yLCBmaWxsLmFscGhhLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbGwgaW5zdGFuY2VvZiBHcmFwaGljc0dyYWRpZW50RmlsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlR3JhZGllbnRQYXR0ZXJuKGNvbnRleHQsIGZpbGwsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlsbCBpbnN0YW5jZW9mIEdyYXBoaWNzQml0bWFwRmlsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlSW1hZ2VQYXR0ZXJuKGNvbnRleHQsIGZpbGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVJbWFnZVBhdHRlcm4oY29udGV4dCwgZmlsbCkge1xuICAgICAgICBpZiAoZmlsbC5iaXRtYXBEYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB7IGJpdG1hcERhdGEsIG1hdHJpeCwgcmVwZWF0LCBzbW9vdGgsIH0gPSBmaWxsO1xuICAgICAgICAgICAgY29uc3QgeyBhLCBiLCBjLCBkLCB0eCwgdHksIH0gPSBtYXRyaXg7XG4gICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gbmV3IEltYWdlUGF0dGVybigpO1xuICAgICAgICAgICAgcGF0dGVybi5pbWFnZSA9IGJpdG1hcERhdGE7XG4gICAgICAgICAgICBwYXR0ZXJuLnNtb290aCA9IHNtb290aDtcbiAgICAgICAgICAgIHBhdHRlcm4ucmVwZWF0ID0gcmVwZWF0O1xuICAgICAgICAgICAgcGF0dGVybi5hID0gYTtcbiAgICAgICAgICAgIHBhdHRlcm4uYiA9IGI7XG4gICAgICAgICAgICBwYXR0ZXJuLmMgPSBjO1xuICAgICAgICAgICAgcGF0dGVybi5kID0gZDtcbiAgICAgICAgICAgIHBhdHRlcm4udHggPSB0eDtcbiAgICAgICAgICAgIHBhdHRlcm4udHkgPSB0eTtcbiAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHN0YXRpYyByZW5kZXIoY29udGV4dCwgbWF0cml4LCBjb2xvclRyYW5zZm9ybSwgZ3JhcGhpY3MpIHtcbiAgICAgICAgY29uc3QgZ3JhcGhpY3NEYXRhID0gZ3JhcGhpY3MucmVhZEdyYXBoaWNzRGF0YSgpO1xuICAgICAgICBpZiAoIWdyYXBoaWNzRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICBsZXQgc3Ryb2tlID0gbnVsbDtcbiAgICAgICAgbGV0IGZpbGwgPSBudWxsO1xuICAgICAgICBncmFwaGljc0RhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBHcmFwaGljc1N0cm9rZSkge1xuICAgICAgICAgICAgICAgIHN0cm9rZSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpdGVtIGluc3RhbmNlb2YgR3JhcGhpY3NTb2xpZEZpbGwgfHwgaXRlbSBpbnN0YW5jZW9mIEdyYXBoaWNzR3JhZGllbnRGaWxsIHx8IGl0ZW0gaW5zdGFuY2VvZiBHcmFwaGljc0JpdG1hcEZpbGwpIHtcbiAgICAgICAgICAgICAgICBmaWxsID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0gaW5zdGFuY2VvZiBHcmFwaGljc0VuZEZpbGwpIHtcbiAgICAgICAgICAgICAgICBmaWxsID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0gaW5zdGFuY2VvZiBHcmFwaGljc1BhdGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIGNvbW1hbmRzIH0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IG1vdmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IG1vdmVYID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgbW92ZVkgPSAwO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY29tbWFuZHMuZm9yRWFjaCgoY29tbWFuZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgR3JhcGhpY3NQYXRoQ29tbWFuZC5NT1ZFX1RPOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxsICYmIG1vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVRvKG1vdmVYLCBtb3ZlWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlWCA9IGRhdGFbaW5kZXgrK107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVkgPSBkYXRhW2luZGV4KytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKG1vdmVYLCBtb3ZlWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEdyYXBoaWNzUGF0aENvbW1hbmQuTElORV9UTzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhkYXRhW2luZGV4KytdLCBkYXRhW2luZGV4KytdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgR3JhcGhpY3NQYXRoQ29tbWFuZC5DVVJWRV9UTzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8oZGF0YVtpbmRleCsrXSwgZGF0YVtpbmRleCsrXSwgZGF0YVtpbmRleCsrXSwgZGF0YVtpbmRleCsrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEdyYXBoaWNzUGF0aENvbW1hbmQuV0lERV9NT1ZFX1RPOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKGRhdGFbaW5kZXgrK10sIGRhdGFbaW5kZXgrK10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBHcmFwaGljc1BhdGhDb21tYW5kLldJREVfTElORV9UTzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhkYXRhW2luZGV4KytdLCBkYXRhW2luZGV4KytdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgR3JhcGhpY3NQYXRoQ29tbWFuZC5DVUJJQ19DVVJWRV9UTzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmJlemllckN1cnZlVG8oZGF0YVtpbmRleCsrXSwgZGF0YVtpbmRleCsrXSwgZGF0YVtpbmRleCsrXSwgZGF0YVtpbmRleCsrXSwgZGF0YVtpbmRleCsrXSwgZGF0YVtpbmRleCsrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGwgJiYgbW92ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5saW5lVG8obW92ZVgsIG1vdmVZKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZpbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsbFBhdHRlcm4gPSB0aGlzLmNyZWF0ZUZpbGxQYXR0ZXJuKGNvbnRleHQsIGZpbGwsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGxQYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxsU3R5bGUgPSB7IGFscGhhOiAxIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGwoZmlsbFBhdHRlcm4sIGZpbGxTdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cm9rZSAhPSBudWxsICYmIHN0cm9rZS50aGlja25lc3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cm9rZVBhdHRlcm4gPSB0aGlzLmNyZWF0ZUZpbGxQYXR0ZXJuKGNvbnRleHQsIHN0cm9rZS5maWxsLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJva2VQYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJva2VTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlrbmVzczogc3Ryb2tlLnRoaWNrbmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2luOiBzdHJva2Uuam9pbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcDogc3Ryb2tlLmNhcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWl0ZXJMaW1pdDogc3Ryb2tlLm1pdGVyTGltaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxwaGE6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2Uoc3Ryb2tlUGF0dGVybiwgc3Ryb2tlU3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5HcmFwaGljc1JlbmRlcmVyLnRlbXBNYXRyaXggPSBuZXcgTWF0cml4KCk7XG5HcmFwaGljc1JlbmRlcmVyLnRlbXBQb2ludDEgPSBuZXcgUG9pbnQoKTtcbkdyYXBoaWNzUmVuZGVyZXIudGVtcFBvaW50MiA9IG5ldyBQb2ludCgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUjNKaGNHaHBZM05TWlc1a1pYSmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5SGNtRndhR2xqYzFKbGJtUmxjbVZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRTlCUVU4c1JVRkRUaXhOUVVGTkxFVkJRMDRzUzBGQlN5eEhRVVZNTEUxQlFVMHNWMEZCVnl4RFFVRkRPMEZCUTI1Q0xFOUJRVThzUlVGSFRpeHhRa0ZCY1VJc1JVRkZja0lzY1VKQlFYRkNMRVZCUTNKQ0xGbEJRVmtzUlVGRFdpeFpRVUZaTEVkQlJWb3NUVUZCVFN4aFFVRmhMRU5CUVVNN1FVRkZja0lzVDBGQlR5eEZRVUZGTEZsQlFWa3NSVUZCUlN4dFFrRkJiVUlzUlVGQlJTeE5RVUZOTEZOQlFWTXNRMEZCUXp0QlFVVTFSQ3hQUVVGUExHOUNRVUZ2UWl4TlFVRk5MSGRDUVVGM1FpeERRVUZETzBGQlF6RkVMRTlCUVU4c1kwRkJZeXhOUVVGTkxHdENRVUZyUWl4RFFVRkRPMEZCUXpsRExFOUJRVThzYVVKQlFXbENMRTFCUVUwc2NVSkJRWEZDTEVOQlFVTTdRVUZEY0VRc1QwRkJUeXhyUWtGQmEwSXNUVUZCVFN4elFrRkJjMElzUTBGQlF6dEJRVU4wUkN4UFFVRlBMRmxCUVZrc1RVRkJUU3huUWtGQlowSXNRMEZCUXp0QlFVTXhReXhQUVVGUExHVkJRV1VzVFVGQlRTeHRRa0ZCYlVJc1EwRkJRenRCUVVWb1JDeE5RVUZOTEVOQlFVTXNUMEZCVHl4UFFVRlBMR2RDUVVGblFqdEpRVXMxUWl4TlFVRk5MRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTMEZCWVN4RlFVRkZMRXRCUVdFc1JVRkJSU3hGUVVGclFqdFJRVU5xUml4TlFVRk5MRTlCUVU4c1IwRkJSeXhKUVVGSkxGbEJRVmtzUlVGQlJTeERRVUZETzFGQlJXNURMRTFCUVUwc1EwRkJReXhIUVVGSExFdEJRVXNzU1VGQlNTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUXpkQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRelZDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRGRrSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF6dFJRVVYyUWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExGTkJRVk1zUlVGQlJTeEZRVUZGTzFsQlEzQkNMRTlCUVU4c1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMR0ZCUVdFc1IwRkJSeXhGUVVGRkxFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUTNwRUxFOUJRVThzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExHVkJRV1VzUjBGQlJ5eEZRVUZGTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRE8xbEJRemRFTEU5QlFVOHNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEdOQlFXTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETzFsQlF6TkVMRTlCUVU4c1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMR1ZCUVdVc1IwRkJSeXhGUVVGRkxFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUXpkRUxFOUJRVThzVDBGQlR5eERRVUZETzFOQlEyWTdVVUZGUkN4UFFVRlBMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5rTEU5QlFVOHNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMlFzVDBGQlR5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRaQ3hQUVVGUExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVmtMRTlCUVU4c1QwRkJUeXhEUVVGRE8wbEJRMmhDTEVOQlFVTTdTVUZGVHl4TlFVRk5MRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNUMEZCTUVJc1JVRkJSU3hKUVVFd1FpeEZRVUZGTEdOQlFUaENPMUZCUXpGSUxFbEJRVWtzVDBGQmIwTXNRMEZCUXp0UlFVVjZReXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUlhSQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZEV2l4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF6dFRRVU42UWp0UlFVVkVMRkZCUVZFc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJUdFpRVU5zUWl4TFFVRkxMRmxCUVZrc1EwRkJReXhOUVVGTk8yZENRVU4yUWl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMnBETEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dG5Ra0ZGTVVRc1RVRkJUU3hqUVVGakxFZEJRVWNzU1VGQlNTeHhRa0ZCY1VJc1JVRkJSU3hEUVVGRE8yZENRVU51UkN4alFVRmpMRU5CUVVNc1JVRkJSU3hIUVVGSExFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTTdaMEpCUXpsQ0xHTkJRV01zUTBGQlF5eEZRVUZGTEVkQlFVY3NUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJRenRuUWtGRE9VSXNZMEZCWXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEzUkNMR05CUVdNc1EwRkJReXhGUVVGRkxFZEJRVWNzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXp0blFrRkRPVUlzWTBGQll5eERRVUZETEVWQlFVVXNSMEZCUnl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRE8yZENRVU01UWl4alFVRmpMRU5CUVVNc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRmFFVXNUMEZCVHl4SFFVRkhMR05CUVdNc1EwRkJRenRuUWtGRGVrSXNUVUZCVFR0WlFVVlFMRXRCUVVzc1dVRkJXU3hEUVVGRExFMUJRVTA3WjBKQlEzWkNMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5xUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMmhETEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dG5Ra0ZETVVRc1RVRkJUU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMmRDUVVVeFJDeE5RVUZOTEdOQlFXTXNSMEZCUnl4SlFVRkpMSEZDUVVGeFFpeEZRVUZGTEVOQlFVTTdaMEpCUTI1RUxHTkJRV01zUTBGQlF5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzUkRMR05CUVdNc1EwRkJReXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM1JETEdOQlFXTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNSRExHTkJRV01zUTBGQlF5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlJYUkRMRTlCUVU4c1IwRkJSeXhqUVVGakxFTkJRVU03WjBKQlEzcENMRTFCUVUwN1dVRkRVRHRuUWtGRFF5eFBRVUZQTEU5QlFVOHNRMEZCUXp0VFFVTm9RanRSUVVWRUxFMUJRVTBzUlVGQlJTeE5RVUZOTEVWQlFVVXNUVUZCVFN4RlFVRkZMRTFCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVVY0UXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU4yUXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZEVJc1RVRkJUU3hMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUlhoQ0xFMUJRVTBzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUTBGQlF5eEhRVUZITEVWQlFVVXNTMEZCU3l4RlFVRkZMR05CUVdNc1EwRkJReXhEUVVGRE8xbEJSV3hGTEVsQlFVa3NTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZETjBJc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF6dG5Ra0ZCUlN4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8ybENRVU53UWl4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRE8yZENRVUZGTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkZPVUlzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRE5VSXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZETTBJN1VVRkZSQ3hQUVVGUExFOUJRVThzUTBGQlF6dEpRVU5vUWl4RFFVRkRPMGxCUlVRc1RVRkJUU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRTlCUVRCQ0xFVkJRVVVzU1VGQmJVSXNSVUZCUlN4alFVRTRRanRSUVVOMlJ5eEpRVUZKTEVsQlFVa3NXVUZCV1N4cFFrRkJhVUlzUlVGQlJUdFpRVU4wUXl4UFFVRlBMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNZMEZCWXl4RFFVRkRMRU5CUVVNN1UwRkRka1U3VVVGRlJDeEpRVUZKTEVsQlFVa3NXVUZCV1N4dlFrRkJiMElzUlVGQlJUdFpRVU42UXl4UFFVRlBMRWxCUVVrc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hGUVVGRkxHTkJRV01zUTBGQlF5eERRVUZETzFOQlEycEZPMUZCUlVRc1NVRkJTU3hKUVVGSkxGbEJRVmtzYTBKQlFXdENMRVZCUVVVN1dVRkRka01zVDBGQlR5eEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUXpsRE8xRkJSVVFzVDBGQlR5eFRRVUZUTEVOQlFVTTdTVUZEYkVJc1EwRkJRenRKUVVWRUxFMUJRVTBzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhQUVVFd1FpeEZRVUZGTEVsQlFYZENPMUZCUXpkRkxFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlR0WlFVTndRaXhOUVVGTkxFVkJRMHdzVlVGQlZTeEZRVUZGTEUxQlFVMHNSVUZCUlN4TlFVRk5MRVZCUVVVc1RVRkJUU3hIUVVOc1F5eEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVVlVMRTFCUVUwc1JVRkRUQ3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGRGJFSXNSMEZCUnl4TlFVRk5MRU5CUVVNN1dVRkZXQ3hOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEZsQlFWa3NSVUZCUlN4RFFVRkRPMWxCUTI1RExFOUJRVThzUTBGQlF5eExRVUZMTEVkQlFVY3NWVUZCVlN4RFFVRkRPMWxCUXpOQ0xFOUJRVThzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMWxCUTNoQ0xFOUJRVThzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMWxCUTNoQ0xFOUJRVThzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTJRc1QwRkJUeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEWkN4UFFVRlBMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU5rTEU5QlFVOHNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMlFzVDBGQlR5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRhRUlzVDBGQlR5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRhRUlzVDBGQlR5eFBRVUZQTEVOQlFVTTdVMEZEWmp0UlFVVkVMRTlCUVU4c1UwRkJVeXhEUVVGRE8wbEJRMnhDTEVOQlFVTTdTVUZGUkN4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVEJDTEVWQlFVVXNUVUZCWXl4RlFVRkZMR05CUVRoQ0xFVkJRVVVzVVVGQmEwSTdVVUZETTBjc1RVRkJUU3haUVVGWkxFZEJRVWNzVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhGUVVGRkxFTkJRVU03VVVGRmFrUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFVkJRVVU3V1VGRGVrSXNUMEZCVHp0VFFVTlFPMUZCUlVRc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGRGJrSXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkRVaXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVU5TTEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUTFJc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGRFVpeE5RVUZOTEVOQlFVTXNSVUZCUlN4RlFVTlVMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRMVFzUTBGQlF6dFJRVVZHTEVsQlFVa3NUVUZCVFN4SFFVRXdRaXhKUVVGSkxFTkJRVU03VVVGRGVrTXNTVUZCU1N4SlFVRkpMRWRCUVhsQ0xFbEJRVWtzUTBGQlF6dFJRVVYwUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVTdXVUZETjBJc1NVRkJTU3hKUVVGSkxGbEJRVmtzWTBGQll5eEZRVUZGTzJkQ1FVTnVReXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETzJGQlEyUTdhVUpCUVUwc1NVRkJTU3hKUVVGSkxGbEJRVmtzYVVKQlFXbENMRWxCUVVrc1NVRkJTU3haUVVGWkxHOUNRVUZ2UWl4SlFVRkpMRWxCUVVrc1dVRkJXU3hyUWtGQmEwSXNSVUZCUlR0blFrRkRNMGdzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0aFFVTmFPMmxDUVVGTkxFbEJRVWtzU1VGQlNTeFpRVUZaTEdWQlFXVXNSVUZCUlR0blFrRkRNME1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0aFFVTmFPMmxDUVVGTkxFbEJRVWtzU1VGQlNTeFpRVUZaTEZsQlFWa3NSVUZCUlR0blFrRkRlRU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NSVUZCUlN4UlFVRlJMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU03WjBKQlJXaERMRWxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZGWkN4SlFVRkpMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU03WjBKQlEyeENMRWxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZEWkN4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlJXUXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRE8yZENRVVZ3UWl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVTdiMEpCUXpWQ0xGRkJRVkVzVDBGQlR5eEZRVUZGTzNkQ1FVTm9RaXhMUVVGTExHMUNRVUZ0UWl4RFFVRkRMRTlCUVU4N05FSkJReTlDTEVsQlFVa3NTVUZCU1N4SlFVRkpMRXRCUVVzc1JVRkJSVHRuUTBGRGJFSXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdOa0pCUXpkQ096UkNRVVZFTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNN05FSkJRMklzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE96UkNRVU4wUWl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdORUpCUlhSQ0xFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE96UkNRVU0zUWl4TlFVRk5PM2RDUVVWUUxFdEJRVXNzYlVKQlFXMUNMRU5CUVVNc1QwRkJUenMwUWtGREwwSXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkRZaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZEWWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGRFlpeERRVUZET3pSQ1FVTkdMRTFCUVUwN2QwSkJSVkFzUzBGQlN5eHRRa0ZCYlVJc1EwRkJReXhSUVVGUk96UkNRVU5vUXl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlEzWkNMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eEZRVU5pTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhGUVVOaUxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RlFVTmlMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVU5pTEVOQlFVTTdORUpCUTBZc1RVRkJUVHQzUWtGRlVDeExRVUZMTEcxQ1FVRnRRaXhEUVVGRExGbEJRVms3TkVKQlEzQkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRMklzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRVZCUTJJc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlEySXNRMEZCUXpzMFFrRkRSaXhOUVVGTk8zZENRVVZRTEV0QlFVc3NiVUpCUVcxQ0xFTkJRVU1zV1VGQldUczBRa0ZEY0VNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGRFlpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1JVRkRZaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZEWWl4RFFVRkRPelJDUVVOR0xFMUJRVTA3ZDBKQlJWQXNTMEZCU3l4dFFrRkJiVUlzUTBGQlF5eGpRVUZqT3pSQ1FVTjBReXhQUVVGUExFTkJRVU1zWVVGQllTeERRVU53UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUlVGRFlpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1JVRkRZaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZEWWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUlVGRFlpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1JVRkRZaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZEWWl4RFFVRkRPelJDUVVOR0xFMUJRVTA3ZDBKQlExQTdORUpCUTBNc1RVRkJUVHR4UWtGRFVEdG5Ra0ZEUml4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRlNDeEpRVUZKTEVsQlFVa3NTVUZCU1N4TFFVRkxMRVZCUVVVN2IwSkJRMnhDTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzJsQ1FVTTNRanRuUWtGRlJDeEpRVUZKTEVsQlFVa3NSVUZCUlR0dlFrRkRWQ3hOUVVGTkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NSVUZCUlN4alFVRmpMRU5CUVVNc1EwRkJRenR2UWtGRk1VVXNTVUZCU1N4WFFVRlhMRVZCUVVVN2QwSkJRMmhDTEUxQlFVMHNVMEZCVXl4SFFVRkhMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETzNkQ1FVTXZRaXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenR4UWtGRGNrTTdhVUpCUTBRN1owSkJSVVFzU1VGQlNTeE5RVUZOTEVsQlFVa3NTVUZCU1N4SlFVRkpMRTFCUVUwc1EwRkJReXhUUVVGVExFZEJRVWNzUTBGQlF5eEZRVUZGTzI5Q1FVTXpReXhOUVVGTkxHRkJRV0VzUjBGQlJ5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNRMEZCUXl4SlFVRnhRaXhGUVVGRkxHTkJRV01zUTBGQlF5eERRVUZETzI5Q1FVVndSeXhKUVVGSkxHRkJRV0VzUlVGQlJUdDNRa0ZEYkVJc1RVRkJUU3hYUVVGWExFZEJRV2RDT3pSQ1FVTm9ReXhSUVVGUkxFVkJRVVVzVFVGQlRTeERRVUZETEZOQlFWTTdORUpCUXpGQ0xFbEJRVWtzUlVGQlJTeE5RVUZOTEVOQlFVTXNUVUZCVFRzMFFrRkRia0lzUjBGQlJ5eEZRVUZGTEUxQlFVMHNRMEZCUXl4SlFVRkpPelJDUVVOb1FpeFZRVUZWTEVWQlFVVXNUVUZCVFN4RFFVRkRMRlZCUVZVN05FSkJRemRDTEV0QlFVc3NSVUZCUlN4RFFVRkRPM2xDUVVOU0xFTkJRVU03ZDBKQlJVWXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhoUVVGaExFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdjVUpCUXpORE8ybENRVU5FTzJGQlEwUTdVVUZEUml4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOS0xFTkJRVU03TzBGQmJGRmpMREpDUVVGVkxFZEJRVWNzU1VGQlNTeE5RVUZOTEVWQlFVVXNRMEZCUXp0QlFVTXhRaXd5UWtGQlZTeEhRVUZITEVsQlFVa3NTMEZCU3l4RlFVRkZMRU5CUVVNN1FVRkRla0lzTWtKQlFWVXNSMEZCUnl4SlFVRkpMRXRCUVVzc1JVRkJSU3hEUVVGREluMD0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaGljc1NvbGlkRmlsbCB7XG4gICAgY29uc3RydWN0b3IoY29sb3IgPSAwLCBhbHBoYSA9IDEpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLmFscGhhID0gYWxwaGE7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUjNKaGNHaHBZM05UYjJ4cFpFWnBiR3d1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdlIzSmhjR2hwWTNOVGIyeHBaRVpwYkd3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJSVUVzVFVGQlRTeERRVUZETEU5QlFVOHNUMEZCVHl4cFFrRkJhVUk3U1VGSmNrTXNXVUZCV1N4UlFVRm5RaXhEUVVGRExFVkJRVVVzVVVGQlowSXNRMEZCUXp0UlFVTXZReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTnVRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTndRaXhEUVVGRE8wTkJRMFFpZlE9PSIsImltcG9ydCB7IEpvaW50U3R5bGUsIENhcHNTdHlsZSwgTGluZVNjYWxlTW9kZSB9IGZyb20gJy4vZW51bXMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhpY3NTdHJva2Uge1xuICAgIGNvbnN0cnVjdG9yKHRoaWNrbmVzcyA9IDAsIHBpeGVsSGludGluZyA9IGZhbHNlLCBzY2FsZU1vZGUgPSBMaW5lU2NhbGVNb2RlLk5PTkUsIGNhcHMgPSBDYXBzU3R5bGUuQlVUVCwgam9pbnRzID0gSm9pbnRTdHlsZS5ST1VORCwgbWl0ZXJMaW1pdCA9IDMsIGZpbGwpIHtcbiAgICAgICAgdGhpcy50aGlja25lc3MgPSB0aGlja25lc3M7XG4gICAgICAgIHRoaXMucGl4ZWxIaW50aW5nID0gcGl4ZWxIaW50aW5nO1xuICAgICAgICB0aGlzLnNjYWxlTW9kZSA9IHNjYWxlTW9kZTtcbiAgICAgICAgdGhpcy5jYXBzID0gY2FwcztcbiAgICAgICAgdGhpcy5qb2ludHMgPSBqb2ludHM7XG4gICAgICAgIHRoaXMubWl0ZXJMaW1pdCA9IG1pdGVyTGltaXQ7XG4gICAgICAgIHRoaXMuZmlsbCA9IGZpbGw7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUjNKaGNHaHBZM05UZEhKdmEyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12UjNKaGNHaHBZM05UZEhKdmEyVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUTBFc1QwRkJUeXhGUVVGRkxGVkJRVlVzUlVGQlJTeFRRVUZUTEVWQlFVVXNZVUZCWVN4RlFVRkZMRTFCUVUwc1UwRkJVeXhEUVVGRE8wRkJSUzlFTEUxQlFVMHNRMEZCUXl4UFFVRlBMRTlCUVU4c1kwRkJZenRKUVZOc1F5eFpRVU5ETEZsQlFXOUNMRU5CUVVNc1JVRkRja0lzWlVGQmQwSXNTMEZCU3l4RlFVTTNRaXhaUVVFeVFpeGhRVUZoTEVOQlFVTXNTVUZCU1N4RlFVTTNReXhQUVVGclFpeFRRVUZUTEVOQlFVTXNTVUZCU1N4RlFVTm9ReXhUUVVGeFFpeFZRVUZWTEVOQlFVTXNTMEZCU3l4RlFVTnlReXhoUVVGeFFpeERRVUZETEVWQlEzUkNMRWxCUVc5Q08xRkJSWEJDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJRek5DTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1dVRkJXU3hEUVVGRE8xRkJRMnBETEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJRek5DTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMnBDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1ZVRkJWU3hEUVVGRE8xRkJRemRDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRE8wbEJRMnhDTEVOQlFVTTdRMEZEUkNKOSIsImltcG9ydCB7IFRyaWFuZ2xlQ3VsbGluZyB9IGZyb20gJy4vZW51bXMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhpY3NUcmlhbmdsZVBhdGgge1xuICAgIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBpbmRpY2VzLCB1dnREYXRhLCBjdWxsaW5nID0gVHJpYW5nbGVDdWxsaW5nLk5PTkUpIHtcbiAgICAgICAgdGhpcy5pbmRpY2VzID0gaW5kaWNlcyA/PyBbXTtcbiAgICAgICAgdGhpcy51dnREYXRhID0gdXZ0RGF0YSA/PyBbXTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzID8/IFtdO1xuICAgICAgICB0aGlzLmN1bGxpbmcgPSBjdWxsaW5nO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVIzSmhjR2hwWTNOVWNtbGhibWRzWlZCaGRHZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12UjNKaGNHaHBZM05VY21saGJtZHNaVkJoZEdndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRMEVzVDBGQlR5eEZRVUZGTEdWQlFXVXNSVUZCUlN4TlFVRk5MRk5CUVZNc1EwRkJRenRCUVVVeFF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4UFFVRlBMRzlDUVVGdlFqdEpRVTE0UXl4WlFVTkRMRkZCUVcxQ0xFVkJRMjVDTEU5QlFXdENMRVZCUTJ4Q0xFOUJRV3RDTEVWQlEyeENMRlZCUVRKQ0xHVkJRV1VzUTBGQlF5eEpRVUZKTzFGQlJTOURMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTTNRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkROMElzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4UlFVRlJMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJReTlDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRE8wbEJRM2hDTEVOQlFVTTdRMEZEUkNKOSIsImltcG9ydCB7IERpc3BsYXlPYmplY3QgfSBmcm9tICdAZTJkL2Rpc3BsYXknO1xuaW1wb3J0IEdyYXBoaWNzIGZyb20gJy4vR3JhcGhpY3MnO1xuaW1wb3J0IEdyYXBoaWNzUmVuZGVyZXIgZnJvbSAnLi9HcmFwaGljc1JlbmRlcmVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXBlIGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgR3JhcGhpY3MoKTtcbiAgICB9XG4gICAgcmVuZGVyQ29udGVudChjb250ZXh0KSB7XG4gICAgICAgIEdyYXBoaWNzUmVuZGVyZXIucmVuZGVyKGNvbnRleHQsIHRoaXMudHJhbnNmb3JtLmNvbmNhdGVuYXRlZE1hdHJpeCwgdGhpcy50cmFuc2Zvcm0uY29uY2F0ZW5hdGVkQ29sb3JUcmFuc2Zvcm0sIHRoaXMuZ3JhcGhpY3MpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVUyaGhjR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdlUyaGhjR1V1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUMEZCVHl4RlFVRkZMR0ZCUVdFc1JVRkJSU3hOUVVGTkxHTkJRV01zUTBGQlF6dEJRVVUzUXl4UFFVRlBMRkZCUVZFc1RVRkJUU3haUVVGWkxFTkJRVU03UVVGRGJFTXNUMEZCVHl4blFrRkJaMElzVFVGQlRTeHZRa0ZCYjBJc1EwRkJRenRCUVVWc1JDeE5RVUZOTEVOQlFVTXNUMEZCVHl4UFFVRlBMRXRCUVUwc1UwRkJVU3hoUVVGaE8wbEJSeTlETzFGQlEwTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRklRU3hoUVVGUkxFZEJRVWNzU1VGQlNTeFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVbHVReXhEUVVGRE8wbEJSVVFzWVVGQllTeERRVUZETEU5QlFUQkNPMUZCUTNaRExHZENRVUZuUWl4RFFVRkRMRTFCUVUwc1EwRkRkRUlzVDBGQlR5eEZRVU5RTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc2EwSkJRV3RDTEVWQlEycERMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zTUVKQlFUQkNMRVZCUTNwRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlEySXNRMEZCUXp0SlFVTklMRU5CUVVNN1EwRkRSQ0o5IiwiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQGUyZC9kaXNwbGF5JztcbmltcG9ydCBHcmFwaGljcyBmcm9tICcuL0dyYXBoaWNzJztcbmltcG9ydCBHcmFwaGljc1JlbmRlcmVyIGZyb20gJy4vR3JhcGhpY3NSZW5kZXJlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcHJpdGUgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzID0gbmV3IEdyYXBoaWNzKCk7XG4gICAgfVxuICAgIHJlbmRlckNvbnRlbnQoY29udGV4dCkge1xuICAgICAgICBHcmFwaGljc1JlbmRlcmVyLnJlbmRlcihjb250ZXh0LCB0aGlzLnRyYW5zZm9ybS5jb25jYXRlbmF0ZWRNYXRyaXgsIHRoaXMudHJhbnNmb3JtLmNvbmNhdGVuYXRlZENvbG9yVHJhbnNmb3JtLCB0aGlzLmdyYXBoaWNzKTtcbiAgICAgICAgc3VwZXIucmVuZGVyQ29udGVudChjb250ZXh0KTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lVM0J5YVhSbExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMU53Y21sMFpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4UFFVRlBMRVZCUVVVc1UwRkJVeXhGUVVGRkxFMUJRVTBzWTBGQll5eERRVUZETzBGQlJYcERMRTlCUVU4c1VVRkJVU3hOUVVGTkxGbEJRVmtzUTBGQlF6dEJRVU5zUXl4UFFVRlBMR2RDUVVGblFpeE5RVUZOTEc5Q1FVRnZRaXhEUVVGRE8wRkJSV3hFTEUxQlFVMHNRMEZCUXl4UFFVRlBMRTlCUVU4c1RVRkJUeXhUUVVGUkxGTkJRVk03U1VGSE5VTTdVVUZEUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVoQkxHRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCU1c1RExFTkJRVU03U1VGRlJDeGhRVUZoTEVOQlFVTXNUMEZCTUVJN1VVRkRka01zWjBKQlFXZENMRU5CUVVNc1RVRkJUU3hEUVVOMFFpeFBRVUZQTEVWQlExQXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhyUWtGQmEwSXNSVUZEYWtNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5d3dRa0ZCTUVJc1JVRkRla01zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZEWWl4RFFVRkRPMUZCUlVZc1MwRkJTeXhEUVVGRExHRkJRV0VzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0SlFVTTVRaXhEUVVGRE8wTkJRMFFpZlE9PSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWJvYXJkIHtcbiAgICBzdGF0aWMgZ2V0S2V5Q29kZShlKSB7XG4gICAgICAgIHJldHVybiBlLndoaWNoICE9IG51bGwgPyBlLndoaWNoIDogZS5rZXlDb2RlO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVMyVjVZbTloY21RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZTMlY1WW05aGNtUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1RVRkJUU3hEUVVGRExFOUJRVThzVDBGQlR5eFJRVUZSTzBsQlF6VkNMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlowSTdVVUZEYWtNc1QwRkJUeXhEUVVGRExFTkJRVU1zUzBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVNNVF5eERRVUZETzBOQlEwUWlmUT09IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2Uge1xuICAgIHN0YXRpYyBoaWRlKCkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG4gICAgc3RhdGljIHNob3coKSB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgfVxuICAgIHN0YXRpYyB1cGRhdGVDdXJzb3IoZWxlbWVudCwgcG9pbnRlcikge1xuICAgICAgICBjb25zdCBjdXJzb3IgPSB0aGlzLnZpc2libGUgPyAocG9pbnRlciA/ICdwb2ludGVyJyA6ICdkZWZhdWx0JykgOiAnbm9uZSc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gY3Vyc29yO1xuICAgIH1cbn1cbk1vdXNlLnZpc2libGUgPSB0cnVlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVFc5MWMyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12VFc5MWMyVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1RVRkJUU3hEUVVGRExFOUJRVThzVDBGQlR5eExRVUZMTzBsQlIzcENMRTFCUVUwc1EwRkJReXhKUVVGSk8xRkJRMVlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TFFVRkxMRU5CUVVNN1NVRkRkRUlzUTBGQlF6dEpRVVZFTEUxQlFVMHNRMEZCUXl4SlFVRkpPMUZCUTFZc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdTVUZEY2tJc1EwRkJRenRKUVVWRUxFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNUMEZCYjBJc1JVRkJSU3hQUVVGblFqdFJRVU42UkN4TlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETzFGQlEzcEZMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXp0SlFVTXZRaXhEUVVGRE96dEJRV0pOTEdGQlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNaWZRPT0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW4ge1xuICAgIHN0YXRpYyBnZXQgcGl4ZWxSYXRpbygpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9waXhlbFJhdGlvKSB7XG4gICAgICAgICAgICBjb25zdCBzY3JlZW4gPSB3aW5kb3cuc2NyZWVuO1xuICAgICAgICAgICAgaWYgKHNjcmVlbi5zeXN0ZW1YRFBJICYmIHNjcmVlbi5sb2dpY2FsWERQSSAmJiBzY3JlZW4uc3lzdGVtWERQSSA+IHNjcmVlbi5sb2dpY2FsWERQSSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BpeGVsUmF0aW8gPSBzY3JlZW4uc3lzdGVtWERQSSAvIHNjcmVlbi5sb2dpY2FsWERQSTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLl9waXhlbFJhdGlvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGl4ZWxSYXRpbyA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BpeGVsUmF0aW87XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgd2lkdGgoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBoZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIH1cbn1cblNjcmVlbi5fcGl4ZWxSYXRpbyA9IDA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lVMk55WldWdUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMU5qY21WbGJpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRU5CUVVNc1QwRkJUeXhQUVVGUExFMUJRVTA3U1VGSE1VSXNUVUZCVFN4TFFVRkxMRlZCUVZVN1VVRkRjRUlzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVN1dVRkRkRUlzVFVGQlRTeE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVdFc1EwRkJRenRaUVVWd1F5eEpRVUZKTEUxQlFVMHNRMEZCUXl4VlFVRlZMRWxCUVVrc1RVRkJUU3hEUVVGRExGZEJRVmNzU1VGQlNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4SFFVRkhMRTFCUVUwc1EwRkJReXhYUVVGWExFVkJRVVU3WjBKQlEzUkdMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzVFVGQlRTeERRVUZETEZWQlFWVXNSMEZCUnl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRE8yRkJRekZFTzJsQ1FVRk5MRWxCUVVrc1RVRkJUU3hEUVVGRExHZENRVUZuUWl4RlFVRkZPMmRDUVVOdVF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXp0aFFVTXpRenRaUVVWRUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZPMmRDUVVOMFFpeEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVOeVFqdFRRVU5FTzFGQlJVUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8wbEJRM3BDTEVOQlFVTTdTVUZGUkN4TlFVRk5MRXRCUVVzc1MwRkJTenRSUVVObUxFOUJRVThzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1pVRkJaU3hEUVVGRExGZEJRVmNzUlVGQlJTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1NVRkRNVVVzUTBGQlF6dEpRVVZFTEUxQlFVMHNTMEZCU3l4TlFVRk5PMUZCUTJoQ0xFOUJRVThzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1pVRkJaU3hEUVVGRExGbEJRVmtzUlVGQlJTeE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1NVRkROVVVzUTBGQlF6czdRVUV4UW1Nc2EwSkJRVmNzUjBGQlZ5eERRVUZETEVOQlFVTWlmUT09IiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHsgUG9pbnQsIFJlY3RhbmdsZSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBTdGFnZSwgRGlzcGxheU9iamVjdENvbnRhaW5lciB9IGZyb20gJ0BlMmQvZGlzcGxheSc7XG5pbXBvcnQgeyBTcHJpdGUsIFNoYXBlIH0gZnJvbSAnQGUyZC9zaGFwZSc7XG5pbXBvcnQgeyBCaXRtYXAsIEJpdG1hcERhdGEgfSBmcm9tICdAZTJkL2JpdG1hcCc7XG5pbXBvcnQgeyBDYW52YXNSZW5kZXJpbmdDb250ZXh0IH0gZnJvbSAnQGUyZC9yZW5kZXItY2FudmFzJztcblxuY2xhc3MgTWFpbiB7XG5cdHN0YXRpYyBtYWluKCkge1xuXHRcdGNvbnN0IHBvaW50ID0gbmV3IFBvaW50KDEsIDIpO1xuXHRcdGNvbnNvbGUubG9nKHBvaW50Lmxlbmd0aCk7XG5cdFx0Y29uc29sZS5sb2coUG9pbnQucG9sYXIoMSwgMikpO1xuXG5cdFx0Y29uc3QgY29udGV4dCA9IG5ldyBDYW52YXNSZW5kZXJpbmdDb250ZXh0KCk7XG5cdFx0Y29udGV4dC53aWR0aCA9IDQwMDtcblx0XHRjb250ZXh0LmhlaWdodCA9IDMwMDtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRleHQuZWxlbWVudCk7XG5cblx0XHRjb25zdCBzdGFnZSA9IG5ldyBTdGFnZShjb250ZXh0KTtcblxuXHRcdGNvbnN0IHNwcml0ZSA9IG5ldyBTcHJpdGUoKTtcblx0XHRzcHJpdGUuZ3JhcGhpY3MubGluZVN0eWxlKDEsIDApO1xuXHRcdHNwcml0ZS5ncmFwaGljcy5iZWdpbkZpbGwoMHgwMGZmMDAsIDAuNSk7XG5cdFx0c3ByaXRlLmdyYXBoaWNzLmRyYXdDaXJjbGUoMTAwLCAxMDAsIDUwKTtcblx0XHRzcHJpdGUuZ3JhcGhpY3MuYmVnaW5GaWxsKDB4MDBmZjAwLCAwLjUpO1xuXHRcdHNwcml0ZS5ncmFwaGljcy5kcmF3UmVjdCgxMDAsIDEwMCwgNTAsIDIwKTtcblx0XHRzcHJpdGUucm90YXRpb24gPSAxMDtcblx0XHRzdGFnZS5hZGRDaGlsZChzcHJpdGUpO1xuXG5cdFx0Y29uc3Qgc2hhcGUgPSBuZXcgU2hhcGUoKTtcblx0XHRzaGFwZS5ncmFwaGljcy5iZWdpbkZpbGwoMHhmZjAwMDAsIDAuNSk7XG5cdFx0c2hhcGUuZ3JhcGhpY3MuZHJhd1JlY3QoMCwgMCwgMTAwLCAxMDApO1xuXHRcdHNoYXBlLnggPSAxMDA7XG5cdFx0c2hhcGUueSA9IDEwMDtcblx0XHRzcHJpdGUuYWRkQ2hpbGQoc2hhcGUpO1xuXG5cdFx0Y29uc3QgYml0bWFwRGF0YSA9IG5ldyBCaXRtYXBEYXRhKDUwLCA0MCwgdHJ1ZSwgMHhmZmZmMDBmZik7XG5cdFx0Yml0bWFwRGF0YS5maWxsUmVjdChuZXcgUmVjdGFuZ2xlKDEwLCAxMCwgMTAsIDEwKSwgMHgwMGZmZmYpO1xuXG5cdFx0Y29uc3QgYml0bWFwID0gbmV3IEJpdG1hcChiaXRtYXBEYXRhKTtcblx0XHRiaXRtYXAucm90YXRpb24gPSAtMzA7XG5cdFx0Yml0bWFwLnggPSAyMDA7XG5cdFx0Yml0bWFwLnkgPSAxNTA7XG5cdFx0c3ByaXRlLmFkZENoaWxkKGJpdG1hcCk7XG5cblx0XHRjb25zdCBwYXJlbnRPYmplY3QgPSBzaGFwZS5wYXJlbnQgYXMgRGlzcGxheU9iamVjdENvbnRhaW5lcjtcblx0XHRjb25zdCBzdGFnZU9iamVjdCA9IHBhcmVudE9iamVjdC5wYXJlbnQgYXMgU3RhZ2U7XG5cblx0XHRjb25zb2xlLmxvZyhzcHJpdGUubnVtQ2hpbGRyZW4pO1xuXHRcdGNvbnNvbGUubG9nKHN0YWdlLm51bUNoaWxkcmVuKTtcblx0XHRjb25zb2xlLmxvZyhzaGFwZS54KTtcblx0XHRjb25zb2xlLmxvZyhzaGFwZS5wYXJlbnQpO1xuXHRcdGNvbnNvbGUubG9nKHNoYXBlLnN0YWdlKTtcblx0XHRjb25zb2xlLmxvZyhwYXJlbnRPYmplY3QpO1xuXHRcdGNvbnNvbGUubG9nKHN0YWdlT2JqZWN0KTtcblxuXHRcdHN0YWdlLnJlbmRlcigpO1xuXHR9XG59XG5cbk1haW4ubWFpbigpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==