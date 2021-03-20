/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../canvas-engine/dist/engine.js":
/*!***************************************!*\
  !*** ../canvas-engine/dist/engine.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasEngine": () => (/* binding */ CanvasEngine)
/* harmony export */ });
/* harmony import */ var _e2d_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/core */ "../core/dist/index.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platform */ "../canvas-engine/dist/platform.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CanvasEngine = /*#__PURE__*/function (_Engine) {
  _inherits(CanvasEngine, _Engine);

  var _super = _createSuper(CanvasEngine);

  function CanvasEngine() {
    var _module$Platform;

    var module = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CanvasEngine);

    module.Platform = (_module$Platform = module.Platform) !== null && _module$Platform !== void 0 ? _module$Platform : _platform__WEBPACK_IMPORTED_MODULE_1__.CanvasPlatform;
    return _super.call(this, module);
  }

  return CanvasEngine;
}(_e2d_core__WEBPACK_IMPORTED_MODULE_0__.Engine);

/***/ }),

/***/ "../canvas-engine/dist/index.js":
/*!**************************************!*\
  !*** ../canvas-engine/dist/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasPatterns": () => (/* reexport safe */ _patterns__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns),
/* harmony export */   "CanvasPlatform": () => (/* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_1__.CanvasPlatform),
/* harmony export */   "CanvasEngine": () => (/* reexport safe */ _engine__WEBPACK_IMPORTED_MODULE_2__.CanvasEngine)
/* harmony export */ });
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patterns */ "../canvas-engine/dist/patterns.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platform */ "../canvas-engine/dist/platform.js");
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine */ "../canvas-engine/dist/engine.js");




/***/ }),

/***/ "../canvas-engine/dist/patterns.js":
/*!*****************************************!*\
  !*** ../canvas-engine/dist/patterns.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasPatterns": () => (/* binding */ CanvasPatterns)
/* harmony export */ });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");

var point1 = _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Point.empty();
var point2 = _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Point.empty();
var CanvasPatterns;

(function (CanvasPatterns) {
  function colorPattern(color, alpha, ct) {
    var r = color >> 16 & 0xff;
    var g = color >> 8 & 0xff;
    var b = color & 0xff;
    var a = alpha * 0xff;

    if (!_e2d_geom__WEBPACK_IMPORTED_MODULE_0__.ColorTransform.isEmpty(ct)) {
      r = r * ct.redMultiplier + ct.redOffset & 0xff;
      g = g * ct.greenMultiplier + ct.greenOffset & 0xff;
      b = b * ct.blueMultiplier + ct.blueOffset & 0xff;
      a = a * ct.alphaMultiplier + ct.alphaOffset & 0xff;
    }

    if (a < 0xff) {
      return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a / 0xff, ")");
    }

    return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
  }

  CanvasPatterns.colorPattern = colorPattern;

  function addGradientColors(pattern, colors, alphas, ratios, colorTransform) {
    for (var i = 0; i < colors.length; i++) {
      var rgb = colors[i];
      var alpha = alphas[i];
      var ratio = ratios[i] / 0xFF;
      if (ratio < 0) ratio = 0;
      if (ratio > 1) ratio = 1;
      pattern.addColorStop(ratio, colorPattern(rgb, alpha, colorTransform));
    }
  }

  CanvasPatterns.addGradientColors = addGradientColors;

  function radialGradientPattern(matrix, colors, alphas, ratios, colorTransform, context) {
    point1.x = 1638.4;
    point1.y = 0;
    _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.transformPoint(matrix, point1, point1);
    var pattern = context.createRadialGradient(matrix.tx, matrix.ty, 0, matrix.tx, matrix.ty, Math.abs((point1.x - matrix.tx) / 2));
    addGradientColors(pattern, colors, alphas, ratios, colorTransform);
    return pattern;
  }

  CanvasPatterns.radialGradientPattern = radialGradientPattern;

  function linearGradientPattern(matrix, colors, alphas, ratios, colorTransform, context) {
    point1.x = -819.2;
    point1.y = 0;
    point2.x = 819.2;
    point2.y = 0;
    _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.transformPoint(matrix, point1, point1);
    _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.transformPoint(matrix, point2, point2);
    var pattern = context.createLinearGradient(point1.x, point1.y, point2.x, point2.y);
    addGradientColors(pattern, colors, alphas, ratios, colorTransform);
    return pattern;
  }

  CanvasPatterns.linearGradientPattern = linearGradientPattern;

  function bitmapPattern(image, repeat, context) {
    var pattern = context.createPattern(image, repeat ? 'repeat' : 'none');

    if (pattern) {
      return pattern;
    }

    return '';
  }

  CanvasPatterns.bitmapPattern = bitmapPattern;
})(CanvasPatterns || (CanvasPatterns = {}));

/***/ }),

/***/ "../canvas-engine/dist/platform.js":
/*!*****************************************!*\
  !*** ../canvas-engine/dist/platform.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasPlatform": () => (/* binding */ CanvasPlatform)
/* harmony export */ });
/* harmony import */ var _e2d_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/core */ "../core/dist/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var CanvasPlatform = /*#__PURE__*/function (_Platform) {
  _inherits(CanvasPlatform, _Platform);

  var _super = _createSuper(CanvasPlatform);

  function CanvasPlatform() {
    var _this;

    _classCallCheck(this, CanvasPlatform);

    _this = _super.apply(this, arguments);
    _this.view = document.createElement('canvas');
    _this.contexts = [_this.view.getContext('2d')];
    _this.customContexts = [];
    return _this;
  }

  _createClass(CanvasPlatform, [{
    key: "getContext",
    value: function getContext() {
      return this.contexts[this.contexts.length - 1];
    }
  }, {
    key: "saveContext",
    value: function saveContext(context) {
      this.contexts.push(context);
    }
  }, {
    key: "restoreContext",
    value: function restoreContext() {
      if (this.contexts.length > 1) {
        this.contexts.pop();
      } else {
        this.engine.debug.warning('Trying to restore main context');
      }
    }
  }, {
    key: "createCustomContext",
    value: function createCustomContext() {
      var context;

      if (this.customContexts.length) {
        context = this.customContexts.pop();
      } else {
        var canvas = document.createElement('canvas');
        context = canvas.getContext('2d');
      }

      var _this$view = this.view,
          width = _this$view.width,
          height = _this$view.height;

      if (context.canvas.width !== width) {
        context.canvas.width = width;
      }

      if (context.canvas.height !== height) {
        context.canvas.height = height;
      }

      return context;
    }
  }, {
    key: "destroyCustomContext",
    value: function destroyCustomContext(context) {
      this.customContexts.push(context);
    }
  }, {
    key: "begin",
    value: function begin() {
      this.clear();
      this.updateSize();
    }
  }, {
    key: "clear",
    value: function clear() {
      var view = this.view;
      var context = this.getContext();
      context.setTransform();
      context.clearRect(0, 0, view.width, view.height);
    }
  }, {
    key: "updateSize",
    value: function updateSize() {
      var width = this.engine.screen.getWidth();
      var height = this.engine.screen.getHeight();
      var pixelRatio = this.engine.screen.getPixelRatio();
      var viewWidth = Math.floor(width * pixelRatio);
      var viewHeight = Math.floor(height * pixelRatio);
      var view = this.view;

      if (view.width !== viewWidth || view.height !== viewHeight) {
        view.width = viewWidth;
        view.height = viewHeight;
        view.style.width = "".concat(width, "px");
        view.style.height = "".concat(height, "px");
      }
    }
  }]);

  return CanvasPlatform;
}(_e2d_core__WEBPACK_IMPORTED_MODULE_0__.Platform);

/***/ }),

/***/ "../core/dist/components/component.js":
/*!********************************************!*\
  !*** ../core/dist/components/component.js ***!
  \********************************************/
/***/ (() => {



/***/ }),

/***/ "../core/dist/components/container.js":
/*!********************************************!*\
  !*** ../core/dist/components/container.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContainerExtension": () => (/* binding */ ContainerExtension)
/* harmony export */ });
/* unused harmony exports CONTAINER, Container */
var CONTAINER = 'container';
var Container;

(function (Container) {
  function numChildren(container) {
    var children = container.children;

    if (children) {
      if (Array.isArray(children)) {
        return children.length;
      }

      if (children.type) {
        return 1;
      }

      var keys = Object.keys(children);
      return keys.length;
    }

    return 0;
  }

  Container.numChildren = numChildren;
})(Container || (Container = {}));

var ContainerExtension;

(function (ContainerExtension) {
  function render(container, engine) {
    var children = container.children;
    var renderer = engine.renderer;

    if (children) {
      var context = renderer.getContext();
      renderer.depth++;

      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          var component = children[i];
          renderer.renderComponent(component, context);
        }
      } else if (children.type) {
        var _component = children;
        renderer.renderComponent(_component, context);
      } else {
        var componentsMap = children;
        var keys = Object.keys(componentsMap);

        for (var _i = 0; _i < keys.length; _i++) {
          var _component2 = componentsMap[keys[_i]];
          renderer.renderComponent(_component2, context);
        }
      }

      renderer.depth--;
    }
  }

  ContainerExtension.render = render;

  function update(container, engine) {
    var children = container.children;
    var updater = engine.updater;

    if (children) {
      updater.depth++;

      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          var component = children[i];
          updater.updateComponent(component);
        }
      } else if (children.type) {
        var _component3 = children;
        updater.updateComponent(_component3);
      } else {
        var componentsMap = children;
        var keys = Object.keys(componentsMap);

        for (var _i2 = 0; _i2 < keys.length; _i2++) {
          var _component4 = componentsMap[keys[_i2]];
          updater.updateComponent(_component4);
        }
      }

      updater.depth--;
    }
  }

  ContainerExtension.update = update;

  function hitTest(container, engine) {
    var children = container.children;
    var pointerEvents = engine.pointerEvents;

    if (children) {
      var context = pointerEvents.getContext();
      pointerEvents.depth++;

      if (Array.isArray(children)) {
        for (var i = children.length - 1; i >= 0; i--) {
          var component = children[i];
          var result = pointerEvents.dispatchComponent(component, context);

          if (result) {
            return true;
          }
        }
      } else if (children.type) {
        var _component5 = children;

        var _result = pointerEvents.dispatchComponent(_component5, context);

        if (_result) {
          return true;
        }
      } else {
        var componentsMap = children;
        var keys = Object.keys(componentsMap);

        for (var _i3 = keys.length - 1; _i3 >= 0; _i3--) {
          var _component6 = componentsMap[keys[_i3]];

          var _result2 = pointerEvents.dispatchComponent(_component6, context);

          if (_result2) {
            return true;
          }
        }
      }

      pointerEvents.depth--;
    }

    return false;
  }

  ContainerExtension.hitTest = hitTest;

  function init(engine) {
    engine.components.update.set(CONTAINER, update);
    engine.components.render.set(CONTAINER, render);
    engine.components.hitTest.set(CONTAINER, hitTest);
  }

  ContainerExtension.init = init;
})(ContainerExtension || (ContainerExtension = {}));

/***/ }),

/***/ "../core/dist/core/engine.js":
/*!***********************************!*\
  !*** ../core/dist/core/engine.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Engine": () => (/* binding */ Engine)
/* harmony export */ });
/* harmony import */ var _features_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../features/renderer */ "../core/dist/features/renderer.js");
/* harmony import */ var _features_updater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/updater */ "../core/dist/features/updater.js");
/* harmony import */ var _features_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/screen */ "../core/dist/features/screen.js");
/* harmony import */ var _features_pointer_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/pointer-events */ "../core/dist/features/pointer-events.js");
/* harmony import */ var _features_ticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/ticker */ "../core/dist/features/ticker.js");
/* harmony import */ var _features_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../features/platform */ "../core/dist/features/platform.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/container */ "../core/dist/components/container.js");
/* harmony import */ var _features_debug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../features/debug */ "../core/dist/features/debug.js");
/* harmony import */ var _features_resources__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../features/resources */ "../core/dist/features/resources.js");
/* harmony import */ var _features_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../features/components */ "../core/dist/features/components.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }











var Engine = function Engine() {
  var _module$Components, _module$Screen, _module$Platform, _module$Updater, _module$Renderer, _module$PointerEvents, _module$Ticker, _module$Debug, _module$Resources;

  var module = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, Engine);

  this.depth = 32;
  module.Components = (_module$Components = module.Components) !== null && _module$Components !== void 0 ? _module$Components : _features_components__WEBPACK_IMPORTED_MODULE_9__.Components;
  module.Screen = (_module$Screen = module.Screen) !== null && _module$Screen !== void 0 ? _module$Screen : _features_screen__WEBPACK_IMPORTED_MODULE_2__.Screen;
  module.Platform = (_module$Platform = module.Platform) !== null && _module$Platform !== void 0 ? _module$Platform : _features_platform__WEBPACK_IMPORTED_MODULE_5__.Platform;
  module.Updater = (_module$Updater = module.Updater) !== null && _module$Updater !== void 0 ? _module$Updater : _features_updater__WEBPACK_IMPORTED_MODULE_1__.Updater;
  module.Renderer = (_module$Renderer = module.Renderer) !== null && _module$Renderer !== void 0 ? _module$Renderer : _features_renderer__WEBPACK_IMPORTED_MODULE_0__.Renderer;
  module.PointerEvents = (_module$PointerEvents = module.PointerEvents) !== null && _module$PointerEvents !== void 0 ? _module$PointerEvents : _features_pointer_events__WEBPACK_IMPORTED_MODULE_3__.PointerEvents;
  module.Ticker = (_module$Ticker = module.Ticker) !== null && _module$Ticker !== void 0 ? _module$Ticker : _features_ticker__WEBPACK_IMPORTED_MODULE_4__.Ticker;
  module.Debug = (_module$Debug = module.Debug) !== null && _module$Debug !== void 0 ? _module$Debug : _features_debug__WEBPACK_IMPORTED_MODULE_7__.Debug;
  module.Resources = (_module$Resources = module.Resources) !== null && _module$Resources !== void 0 ? _module$Resources : _features_resources__WEBPACK_IMPORTED_MODULE_8__.Resources;
  this.components = new module.Components();
  this.screen = new module.Screen();
  this.platform = new module.Platform(this);
  this.updater = new module.Updater(this);
  this.renderer = new module.Renderer(this);
  this.pointerEvents = new module.PointerEvents(this);
  this.ticker = new module.Ticker(this);
  this.debug = new module.Debug();
  this.resources = new module.Resources(this);
  _components_container__WEBPACK_IMPORTED_MODULE_6__.ContainerExtension.init(this);
};

/***/ }),

/***/ "../core/dist/core/feature.js":
/*!************************************!*\
  !*** ../core/dist/core/feature.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngineFeature": () => (/* binding */ EngineFeature)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EngineFeature = function EngineFeature(engine) {
  _classCallCheck(this, EngineFeature);

  this.engine = engine;
};

/***/ }),

/***/ "../core/dist/features/components.js":
/*!*******************************************!*\
  !*** ../core/dist/features/components.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Components": () => (/* binding */ Components)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Components = function Components() {
  _classCallCheck(this, Components);

  this.properties = new Map();
  this.render = new Map();
  this.update = new Map();
  this.hitTest = new Map();
  this.loaded = new Map();
};

/***/ }),

/***/ "../core/dist/features/debug.js":
/*!**************************************!*\
  !*** ../core/dist/features/debug.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Debug": () => (/* binding */ Debug)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Debug = /*#__PURE__*/function () {
  function Debug() {
    _classCallCheck(this, Debug);

    this.errors = new Map();
    this.warnings = new Map();
    this.enabled = true;
  }

  _createClass(Debug, [{
    key: "log",
    value: function log() {
      var _console;

      if (!this.enabled) {
        return;
      }

      (_console = console).log.apply(_console, arguments);
    }
  }, {
    key: "error",
    value: function error() {
      if (!this.enabled) {
        return;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var id = String(args);
      var count = this.errors.get(id);

      if (!count) {
        var _console2;

        count = 0;

        (_console2 = console).error.apply(_console2, args);
      }

      count++;
      this.errors.set(id, count);
    }
  }, {
    key: "warning",
    value: function warning() {
      if (!this.enabled) {
        return;
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var id = String(args);
      var count = this.warnings.get(id);

      if (!count) {
        var _console3;

        count = 0;

        (_console3 = console).warn.apply(_console3, args);
      }

      count++;
      this.warnings.set(id, count);
    }
  }]);

  return Debug;
}();

/***/ }),

/***/ "../core/dist/features/platform.js":
/*!*****************************************!*\
  !*** ../core/dist/features/platform.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Platform": () => (/* binding */ Platform)
/* harmony export */ });
/* harmony import */ var _core_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/feature */ "../core/dist/core/feature.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Platform = /*#__PURE__*/function (_EngineFeature) {
  _inherits(Platform, _EngineFeature);

  var _super = _createSuper(Platform);

  function Platform() {
    var _this;

    _classCallCheck(this, Platform);

    _this = _super.apply(this, arguments);
    _this.view = document.createElement('div');
    return _this;
  }

  _createClass(Platform, [{
    key: "begin",
    value: function begin() {}
  }, {
    key: "end",
    value: function end() {}
  }]);

  return Platform;
}(_core_feature__WEBPACK_IMPORTED_MODULE_0__.EngineFeature);

/***/ }),

/***/ "../core/dist/features/pointer-events.js":
/*!***********************************************!*\
  !*** ../core/dist/features/pointer-events.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointerEvents": () => (/* binding */ PointerEvents)
/* harmony export */ });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _interfaces_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/display */ "../core/dist/interfaces/display.js");
/* harmony import */ var _interfaces_pointer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/pointer */ "../core/dist/interfaces/pointer.js");
/* harmony import */ var _interfaces_transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces/transform */ "../core/dist/interfaces/transform.js");
/* harmony import */ var _core_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/feature */ "../core/dist/core/feature.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var PointerEvents = /*#__PURE__*/function (_EngineFeature) {
  _inherits(PointerEvents, _EngineFeature);

  var _super = _createSuper(PointerEvents);

  function PointerEvents() {
    var _this;

    _classCallCheck(this, PointerEvents);

    _this = _super.apply(this, arguments);
    _this.depth = 0;
    _this.enabled = true;
    _this.global = _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Point.empty();
    _this.local = _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Point.empty();
    _this.pointerId = 0;
    _this.pointerType = 'pointerDown';
    _this.contexts = [];
    return _this;
  }

  _createClass(PointerEvents, [{
    key: "getContext",
    value: function getContext() {
      var context = this.contexts[this.depth];

      if (!context) {
        context = {
          matrix: _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.empty()
        };
        this.contexts[this.depth] = context;
      }

      return context;
    }
  }, {
    key: "dispatch",
    value: function dispatch(type, x, y, id) {
      if (!this.enabled) {
        return;
      }

      var root = this.engine.root;

      if (!root) {
        return;
      }

      this.local.x = x;
      this.local.y = y;
      this.global.x = x;
      this.global.y = y;
      this.pointerId = id;
      this.pointerType = type;
      this.depth = 0;
      var base = this.getContext();
      _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.setEmpty(base.matrix);
      this.depth++;
      this.dispatchComponent(root, base);
    }
  }, {
    key: "dispatchComponent",
    value: function dispatchComponent(component, parent) {
      if (this.depth > this.engine.depth) {
        return false;
      }

      if (!_interfaces_display__WEBPACK_IMPORTED_MODULE_1__.Display.isVisible(component)) {
        return false;
      }

      if (!_interfaces_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.isPointerEnabled(component)) {
        return false;
      }

      var handler = this.engine.components.hitTest.get(component.type);

      if (handler) {
        var context = this.getContext();
        _interfaces_transform__WEBPACK_IMPORTED_MODULE_3__.Transform.getMatrix(component, context.matrix);
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.concat(parent.matrix, context.matrix, context.matrix);
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.transformInversePoint(context.matrix, this.global, this.local);
        var _this$local = this.local,
            x = _this$local.x,
            y = _this$local.y;
        var result = handler(component, this.engine);

        if (result) {
          _interfaces_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, this.pointerType, x, y, this.pointerId);
        }

        if (this.pointerType === 'pointerMove') {
          if (result && !component.pointerOver) {
            _interfaces_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, 'pointerOver', x, y, this.pointerId);
          } else if (!result && component.pointerOver) {
            _interfaces_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, 'pointerOut', x, y, this.pointerId);
          }

          component.pointerOver = result;
        }

        return result;
      }

      return false;
    }
  }]);

  return PointerEvents;
}(_core_feature__WEBPACK_IMPORTED_MODULE_4__.EngineFeature);

/***/ }),

/***/ "../core/dist/features/renderer.js":
/*!*****************************************!*\
  !*** ../core/dist/features/renderer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Renderer": () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _interfaces_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/display */ "../core/dist/interfaces/display.js");
/* harmony import */ var _interfaces_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/transform */ "../core/dist/interfaces/transform.js");
/* harmony import */ var _core_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/feature */ "../core/dist/core/feature.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Renderer = /*#__PURE__*/function (_EngineFeature) {
  _inherits(Renderer, _EngineFeature);

  var _super = _createSuper(Renderer);

  function Renderer() {
    var _this;

    _classCallCheck(this, Renderer);

    _this = _super.apply(this, arguments);
    _this.depth = 0;
    _this.elapsedTime = 0;
    _this.enabled = true;
    _this.contexts = [];
    return _this;
  }

  _createClass(Renderer, [{
    key: "getContext",
    value: function getContext() {
      var context = this.contexts[this.depth];

      if (!context) {
        context = {
          matrix: _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.empty(),
          colorTransform: _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.ColorTransform.empty()
        };
        this.contexts[this.depth] = context;
      }

      return context;
    }
  }, {
    key: "renderComponent",
    value: function renderComponent(component, parent) {
      if (this.depth > this.engine.depth) {
        return;
      }

      if (!_interfaces_display__WEBPACK_IMPORTED_MODULE_1__.Display.isVisible(component)) {
        return;
      }

      var context = this.getContext();
      _interfaces_transform__WEBPACK_IMPORTED_MODULE_2__.Transform.getMatrix(component, context.matrix);
      _interfaces_transform__WEBPACK_IMPORTED_MODULE_2__.Transform.getColorTransform(component, context.colorTransform);
      _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.concat(parent.matrix, context.matrix, context.matrix);
      _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.ColorTransform.concat(parent.colorTransform, context.colorTransform, context.colorTransform);
      var handler = this.engine.components.render.get(component.type);

      if (handler) {
        handler(component, this.engine);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.enabled) {
        return;
      }

      var root = this.engine.root;

      if (!root) {
        return;
      }

      var startTime = performance.now();
      this.engine.platform.begin();
      this.depth = 0;
      var base = this.getContext();
      this.depth++;
      _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.copy(this.engine.screen.getMatrix(), base.matrix);
      _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.ColorTransform.setEmpty(base.colorTransform);
      this.renderComponent(root, base);
      this.engine.platform.end();
      this.elapsedTime = performance.now() - startTime;
    }
  }]);

  return Renderer;
}(_core_feature__WEBPACK_IMPORTED_MODULE_3__.EngineFeature);

/***/ }),

/***/ "../core/dist/features/resources.js":
/*!******************************************!*\
  !*** ../core/dist/features/resources.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Resources": () => (/* binding */ Resources)
/* harmony export */ });
/* harmony import */ var _core_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/feature */ "../core/dist/core/feature.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Resources = /*#__PURE__*/function (_EngineFeature) {
  _inherits(Resources, _EngineFeature);

  var _super = _createSuper(Resources);

  function Resources() {
    var _this;

    _classCallCheck(this, Resources);

    _this = _super.apply(this, arguments);
    _this.resources = new Map();
    _this.resolvers = new Set();
    return _this;
  }

  _createClass(Resources, [{
    key: "get",
    value: function get(asset) {
      if (!asset) {
        return null;
      }

      var resource = this.resources.get(asset);

      if (!resource) {
        resource = this.resolve(asset);
        this.resources.set(asset, resource);
      }

      return resource;
    }
  }, {
    key: "resolve",
    value: function resolve(asset) {
      var _iterator = _createForOfIteratorHelper(this.resolvers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var resolver = _step.value;
          var resource = resolver(asset, this.engine);

          if (resource) {
            return resource;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.engine.debug.warning("Resource not resolved: ".concat(asset));
      return null;
    }
  }]);

  return Resources;
}(_core_feature__WEBPACK_IMPORTED_MODULE_0__.EngineFeature);

/***/ }),

/***/ "../core/dist/features/screen.js":
/*!***************************************!*\
  !*** ../core/dist/features/screen.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen": () => (/* binding */ Screen)
/* harmony export */ });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Screen = /*#__PURE__*/function () {
  function Screen() {
    _classCallCheck(this, Screen);

    this.width = 400;
    this.height = 400;
    this.pixelRatio = 0;
    this.fullscreen = false;
    this.matrix = _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.empty();
  }

  _createClass(Screen, [{
    key: "getMatrix",
    value: function getMatrix() {
      var pixelRatio = this.getPixelRatio();
      this.matrix.a = pixelRatio;
      this.matrix.d = pixelRatio;
      return this.matrix;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.fullscreen ? window.innerWidth : this.width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.fullscreen ? window.innerHeight : this.height;
    }
  }, {
    key: "getPixelRatio",
    value: function getPixelRatio() {
      var _window$devicePixelRa;

      return this.pixelRatio > 0 ? this.pixelRatio : (_window$devicePixelRa = window.devicePixelRatio) !== null && _window$devicePixelRa !== void 0 ? _window$devicePixelRa : 1;
    }
  }]);

  return Screen;
}();

/***/ }),

/***/ "../core/dist/features/ticker.js":
/*!***************************************!*\
  !*** ../core/dist/features/ticker.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ticker": () => (/* binding */ Ticker)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ticker = /*#__PURE__*/function () {
  function Ticker(engine) {
    var _this = this;

    _classCallCheck(this, Ticker);

    this.frameRate = 0;
    this.paused = true;
    this.time = 0;

    this.update = function (time) {
      if (_this.paused) {
        return;
      }

      _this.engine.updater.update(time);

      _this.engine.renderer.render();
    };

    this.updateFrame = function () {
      var currentTime = performance.now();
      var deltaTime = (currentTime - _this.time) / 1000;
      _this.time = currentTime;

      _this.update(deltaTime);

      _this.updateNextFrame();
    };

    this.engine = engine;
  }

  _createClass(Ticker, [{
    key: "isPaused",
    get: function get() {
      return this.paused;
    }
  }, {
    key: "play",
    value: function play() {
      if (this.paused) {
        this.time = performance.now();
        this.paused = false;
        this.updateNextFrame();
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this.paused = false;
    }
  }, {
    key: "updateNextFrame",
    value: function updateNextFrame() {
      requestAnimationFrame(this.updateFrame);
    }
  }]);

  return Ticker;
}();

/***/ }),

/***/ "../core/dist/features/updater.js":
/*!****************************************!*\
  !*** ../core/dist/features/updater.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Updater": () => (/* binding */ Updater)
/* harmony export */ });
/* harmony import */ var _interfaces_update__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/update */ "../core/dist/interfaces/update.js");
/* harmony import */ var _core_feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/feature */ "../core/dist/core/feature.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Updater = /*#__PURE__*/function (_EngineFeature) {
  _inherits(Updater, _EngineFeature);

  var _super = _createSuper(Updater);

  function Updater() {
    var _this;

    _classCallCheck(this, Updater);

    _this = _super.apply(this, arguments);
    _this.depth = 0;
    _this.time = 0;
    _this.elapsedTime = 0;
    _this.enabled = true;
    return _this;
  }

  _createClass(Updater, [{
    key: "update",
    value: function update(time) {
      if (!this.enabled) {
        return;
      }

      var root = this.engine.root;

      if (!root) {
        return;
      }

      this.depth = 0;
      this.time = time;
      var startTime = performance.now();
      this.updateComponent(root);
      this.elapsedTime = performance.now() - startTime;
    }
  }, {
    key: "updateComponent",
    value: function updateComponent(component) {
      if (this.depth > this.engine.depth) {
        return;
      }

      if (!_interfaces_update__WEBPACK_IMPORTED_MODULE_0__.Update.isEnabled(component)) {
        return;
      }

      this.updateProperties(component);
      _interfaces_update__WEBPACK_IMPORTED_MODULE_0__.Update.update(component, this.time);
      var handler = this.engine.components.update.get(component.type);

      if (handler) {
        handler(component, this.engine);
      }
    }
  }, {
    key: "updateProperties",
    value: function updateProperties(component) {
      var _this2 = this;

      this.engine.components.properties.forEach(function (handler, property) {
        if (component[property]) {
          handler(component, _this2.engine);
        }
      });
    }
  }]);

  return Updater;
}(_core_feature__WEBPACK_IMPORTED_MODULE_1__.EngineFeature);

/***/ }),

/***/ "../core/dist/index.js":
/*!*****************************!*\
  !*** ../core/dist/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Engine": () => (/* reexport safe */ _core_engine__WEBPACK_IMPORTED_MODULE_2__.Engine),
/* harmony export */   "Platform": () => (/* reexport safe */ _features_platform__WEBPACK_IMPORTED_MODULE_6__.Platform),
/* harmony export */   "MouseExtension": () => (/* reexport safe */ _input_mouse__WEBPACK_IMPORTED_MODULE_13__.MouseExtension),
/* harmony export */   "Pivot": () => (/* reexport safe */ _interfaces_pivot__WEBPACK_IMPORTED_MODULE_15__.Pivot),
/* harmony export */   "Source": () => (/* reexport safe */ _interfaces_source__WEBPACK_IMPORTED_MODULE_16__.Source)
/* harmony export */ });
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/component */ "../core/dist/components/component.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/container */ "../core/dist/components/container.js");
/* harmony import */ var _core_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/engine */ "../core/dist/core/engine.js");
/* harmony import */ var _features_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/components */ "../core/dist/features/components.js");
/* harmony import */ var _features_debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/debug */ "../core/dist/features/debug.js");
/* harmony import */ var _core_feature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/feature */ "../core/dist/core/feature.js");
/* harmony import */ var _features_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/platform */ "../core/dist/features/platform.js");
/* harmony import */ var _features_pointer_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/pointer-events */ "../core/dist/features/pointer-events.js");
/* harmony import */ var _features_renderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/renderer */ "../core/dist/features/renderer.js");
/* harmony import */ var _features_resources__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/resources */ "../core/dist/features/resources.js");
/* harmony import */ var _features_screen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/screen */ "../core/dist/features/screen.js");
/* harmony import */ var _features_ticker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/ticker */ "../core/dist/features/ticker.js");
/* harmony import */ var _features_updater__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/updater */ "../core/dist/features/updater.js");
/* harmony import */ var _input_mouse__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./input/mouse */ "../core/dist/input/mouse.js");
/* harmony import */ var _interfaces_display__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interfaces/display */ "../core/dist/interfaces/display.js");
/* harmony import */ var _interfaces_pivot__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./interfaces/pivot */ "../core/dist/interfaces/pivot.js");
/* harmony import */ var _interfaces_source__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./interfaces/source */ "../core/dist/interfaces/source.js");
/* harmony import */ var _interfaces_transform__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./interfaces/transform */ "../core/dist/interfaces/transform.js");
/* harmony import */ var _interfaces_update__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./interfaces/update */ "../core/dist/interfaces/update.js");




















/***/ }),

/***/ "../core/dist/input/mouse.js":
/*!***********************************!*\
  !*** ../core/dist/input/mouse.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouseExtension": () => (/* binding */ MouseExtension)
/* harmony export */ });
function dispatchEvent(engine, event, type) {
  var view = engine.platform.view;
  var clientRect = view.getBoundingClientRect();
  var x = event.clientX - clientRect.left - view.clientLeft;
  var y = event.clientY - clientRect.top - view.clientTop;
  engine.pointerEvents.dispatch(type, x, y, 0);
  event.preventDefault();
}

var MouseExtension;

(function (MouseExtension) {
  function init(engine) {
    var view = engine.platform.view;
    view.addEventListener('mousedown', function (event) {
      dispatchEvent(engine, event, 'pointerDown');
    });
    view.addEventListener('mouseup', function (event) {
      dispatchEvent(engine, event, 'pointerUp');
    });
    view.addEventListener('mousemove', function (event) {
      dispatchEvent(engine, event, 'pointerMove');
    });
  }

  MouseExtension.init = init;
})(MouseExtension || (MouseExtension = {}));

/***/ }),

/***/ "../core/dist/interfaces/display.js":
/*!******************************************!*\
  !*** ../core/dist/interfaces/display.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Display": () => (/* binding */ Display)
/* harmony export */ });
var Display;

(function (Display) {
  function isVisible(component) {
    var _component$visible;

    return (_component$visible = component.visible) !== null && _component$visible !== void 0 ? _component$visible : true;
  }

  Display.isVisible = isVisible;
})(Display || (Display = {}));

/***/ }),

/***/ "../core/dist/interfaces/pivot.js":
/*!****************************************!*\
  !*** ../core/dist/interfaces/pivot.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pivot": () => (/* binding */ Pivot)
/* harmony export */ });
var Pivot;

(function (Pivot) {
  function getX(pivot, width) {
    var pivotX = pivot.pivotX;

    if (pivotX) {
      return -pivotX * width;
    }

    return 0;
  }

  Pivot.getX = getX;

  function getY(pivot, height) {
    var pivotY = pivot.pivotY;

    if (pivotY) {
      return -pivotY * height;
    }

    return 0;
  }

  Pivot.getY = getY;

  function hasValues(pivot) {
    var pivotX = pivot.pivotX,
        pivotY = pivot.pivotY;
    return !!pivotX || !!pivotY;
  }

  Pivot.hasValues = hasValues;
})(Pivot || (Pivot = {}));

/***/ }),

/***/ "../core/dist/interfaces/pointer.js":
/*!******************************************!*\
  !*** ../core/dist/interfaces/pointer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pointer": () => (/* binding */ Pointer)
/* harmony export */ });
var Pointer;

(function (Pointer) {
  function isPointerOver(pointer) {
    return !!pointer.pointerOver;
  }

  Pointer.isPointerOver = isPointerOver;

  function isPointerEnabled(pointer) {
    var _pointer$pointerEnabl;

    return (_pointer$pointerEnabl = pointer.pointerEnabled) !== null && _pointer$pointerEnabl !== void 0 ? _pointer$pointerEnabl : true;
  }

  Pointer.isPointerEnabled = isPointerEnabled;

  function dispatchEvent(pointer, type, x, y, id) {
    var handlerName = "on".concat(type.charAt(0).toUpperCase()).concat(type.slice(1));

    if (pointer[handlerName]) {
      var event = {
        type: type,
        x: x,
        y: y,
        id: id
      };
      pointer[handlerName](event);
    }
  }

  Pointer.dispatchEvent = dispatchEvent;
})(Pointer || (Pointer = {}));

/***/ }),

/***/ "../core/dist/interfaces/source.js":
/*!*****************************************!*\
  !*** ../core/dist/interfaces/source.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Source": () => (/* binding */ Source)
/* harmony export */ });
var Source;

(function (Source) {
  function getResource(source, engine) {
    var src = source.src;

    if (!src) {
      return null;
    }

    return engine.resources.get(src);
  }

  Source.getResource = getResource;

  function isLoaded(source, engine) {
    var resource = getResource(source, engine);
    return !!(resource !== null && resource !== void 0 && resource.loaded);
  }

  Source.isLoaded = isLoaded;
})(Source || (Source = {}));

/***/ }),

/***/ "../core/dist/interfaces/transform.js":
/*!********************************************!*\
  !*** ../core/dist/interfaces/transform.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transform": () => (/* binding */ Transform)
/* harmony export */ });
var Transform;

(function (Transform) {
  function getMatrix(transform, result) {
    var _ref, _transform$scaleX, _ref2, _transform$scaleY, _transform$x, _transform$y;

    var matrix = transform.matrix;

    if (matrix) {
      var _matrix$a, _matrix$b, _matrix$c, _matrix$d, _matrix$tx, _matrix$ty;

      result.a = (_matrix$a = matrix.a) !== null && _matrix$a !== void 0 ? _matrix$a : 1;
      result.b = (_matrix$b = matrix.b) !== null && _matrix$b !== void 0 ? _matrix$b : 0;
      result.c = (_matrix$c = matrix.c) !== null && _matrix$c !== void 0 ? _matrix$c : 0;
      result.d = (_matrix$d = matrix.d) !== null && _matrix$d !== void 0 ? _matrix$d : 1;
      result.tx = (_matrix$tx = matrix.tx) !== null && _matrix$tx !== void 0 ? _matrix$tx : 0;
      result.ty = (_matrix$ty = matrix.ty) !== null && _matrix$ty !== void 0 ? _matrix$ty : 0;
      return;
    }

    var rotation = transform.rotation;
    var scaleX = (_ref = (_transform$scaleX = transform.scaleX) !== null && _transform$scaleX !== void 0 ? _transform$scaleX : transform.scale) !== null && _ref !== void 0 ? _ref : 1;
    var scaleY = (_ref2 = (_transform$scaleY = transform.scaleY) !== null && _transform$scaleY !== void 0 ? _transform$scaleY : transform.scale) !== null && _ref2 !== void 0 ? _ref2 : 1;
    result.tx = (_transform$x = transform.x) !== null && _transform$x !== void 0 ? _transform$x : 0;
    result.ty = (_transform$y = transform.y) !== null && _transform$y !== void 0 ? _transform$y : 0;

    if (rotation) {
      var cos = Math.cos(rotation);
      var sin = Math.sin(rotation);
      result.a = cos * scaleX;
      result.b = sin * scaleX;
      result.c = -sin * scaleY;
      result.d = cos * scaleY;
      return;
    }

    result.a = scaleX;
    result.b = 0;
    result.c = 0;
    result.d = scaleY;
  }

  Transform.getMatrix = getMatrix;

  function getColorTransform(transform, result) {
    var _transform$alpha2;

    var colorTransform = transform.colorTransform;

    if (colorTransform) {
      var _colorTransform$alpha, _colorTransform$redMu, _colorTransform$green, _colorTransform$blueM, _colorTransform$alpha2, _colorTransform$redOf, _colorTransform$green2, _colorTransform$blueO;

      result.alphaMultiplier = (_colorTransform$alpha = colorTransform.alphaMultiplier) !== null && _colorTransform$alpha !== void 0 ? _colorTransform$alpha : 1;
      result.redMultiplier = (_colorTransform$redMu = colorTransform.redMultiplier) !== null && _colorTransform$redMu !== void 0 ? _colorTransform$redMu : 1;
      result.greenMultiplier = (_colorTransform$green = colorTransform.greenMultiplier) !== null && _colorTransform$green !== void 0 ? _colorTransform$green : 1;
      result.blueMultiplier = (_colorTransform$blueM = colorTransform.blueMultiplier) !== null && _colorTransform$blueM !== void 0 ? _colorTransform$blueM : 1;
      result.alphaOffset = (_colorTransform$alpha2 = colorTransform.alphaOffset) !== null && _colorTransform$alpha2 !== void 0 ? _colorTransform$alpha2 : 0;
      result.redOffset = (_colorTransform$redOf = colorTransform.redOffset) !== null && _colorTransform$redOf !== void 0 ? _colorTransform$redOf : 0;
      result.greenOffset = (_colorTransform$green2 = colorTransform.greenOffset) !== null && _colorTransform$green2 !== void 0 ? _colorTransform$green2 : 0;
      result.blueOffset = (_colorTransform$blueO = colorTransform.blueOffset) !== null && _colorTransform$blueO !== void 0 ? _colorTransform$blueO : 0;
      return;
    }

    var tint = transform.tint;

    if (tint) {
      var _transform$alpha;

      var _tint$color = tint.color,
          color = _tint$color === void 0 ? 0 : _tint$color,
          _tint$value = tint.value,
          value = _tint$value === void 0 ? 1 : _tint$value;
      var valueInverted = 1 - value;
      var r = color >> 16 & 0xff;
      var g = color >> 8 & 0xff;
      var b = color & 0xff;
      result.alphaMultiplier = (_transform$alpha = transform.alpha) !== null && _transform$alpha !== void 0 ? _transform$alpha : 1;
      result.redMultiplier = valueInverted;
      result.greenMultiplier = valueInverted;
      result.blueMultiplier = valueInverted;
      result.alphaOffset = 0;
      result.redOffset = r * value;
      result.greenOffset = g * value;
      result.blueOffset = b * value;
      return;
    }

    result.alphaMultiplier = (_transform$alpha2 = transform.alpha) !== null && _transform$alpha2 !== void 0 ? _transform$alpha2 : 1;
    result.redMultiplier = 1;
    result.greenMultiplier = 1;
    result.blueMultiplier = 1;
    result.alphaOffset = 0;
    result.redOffset = 0;
    result.greenOffset = 0;
    result.blueOffset = 0;
  }

  Transform.getColorTransform = getColorTransform;
})(Transform || (Transform = {}));

/***/ }),

/***/ "../core/dist/interfaces/update.js":
/*!*****************************************!*\
  !*** ../core/dist/interfaces/update.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Update": () => (/* binding */ Update)
/* harmony export */ });
var Update;

(function (Update) {
  function isEnabled(component) {
    var _component$enabled;

    return (_component$enabled = component.enabled) !== null && _component$enabled !== void 0 ? _component$enabled : true;
  }

  Update.isEnabled = isEnabled;

  function update(component, time) {
    if (component.onUpdate) {
      component.onUpdate(time);
    }
  }

  Update.update = update;
})(Update || (Update = {}));

/***/ }),

/***/ "../geom/dist/bounds.js":
/*!******************************!*\
  !*** ../geom/dist/bounds.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bounds": () => (/* binding */ Bounds)
/* harmony export */ });
var Bounds;

(function (Bounds) {
  function empty() {
    return {
      minX: Number.MAX_VALUE,
      minY: Number.MAX_VALUE,
      maxX: Number.MIN_VALUE,
      maxY: Number.MIN_VALUE
    };
  }

  Bounds.empty = empty;

  function setEmpty(bounds) {
    bounds.minX = Number.MAX_VALUE;
    bounds.minY = Number.MAX_VALUE;
    bounds.maxX = Number.MIN_VALUE;
    bounds.maxY = Number.MIN_VALUE;
  }

  Bounds.setEmpty = setEmpty;

  function isEmpty(bounds) {
    return bounds.minX === Number.MAX_VALUE && bounds.minY === Number.MAX_VALUE && bounds.maxX === Number.MIN_VALUE && bounds.maxY === Number.MIN_VALUE;
  }

  Bounds.isEmpty = isEmpty;

  function toRectangle(bounds, rectangle) {
    var minX = bounds.minX,
        minY = bounds.minY,
        maxX = bounds.maxX,
        maxY = bounds.maxY;
    rectangle.x = minX;
    rectangle.y = minY;
    rectangle.width = maxX - minX;
    rectangle.height = maxY - minY;
  }

  Bounds.toRectangle = toRectangle;

  function testX(bounds, x) {
    if (bounds.minX > x) {
      bounds.minX = x;
    } else if (bounds.maxX < x) {
      bounds.maxX = x;
    }
  }

  Bounds.testX = testX;

  function testY(bounds, y) {
    if (bounds.minY > y) {
      bounds.minY = y;
    } else if (bounds.maxY < y) {
      bounds.maxY = y;
    }
  }

  Bounds.testY = testY;

  function test(bounds, x, y) {
    if (bounds.minX > x) {
      bounds.minX = x;
    } else if (bounds.maxX < x) {
      bounds.maxX = x;
    }

    if (bounds.minY > y) {
      bounds.minY = y;
    } else if (bounds.maxY < y) {
      bounds.maxY = y;
    }
  }

  Bounds.test = test;

  function testPoint(bounds, point) {
    var x = point.x,
        y = point.y;

    if (bounds.minX > x) {
      bounds.minX = x;
    } else if (bounds.maxX < x) {
      bounds.maxX = x;
    }

    if (bounds.minY > y) {
      bounds.minY = y;
    } else if (bounds.maxY < y) {
      bounds.maxY = y;
    }
  }

  Bounds.testPoint = testPoint;
})(Bounds || (Bounds = {}));

/***/ }),

/***/ "../geom/dist/color-transform.js":
/*!***************************************!*\
  !*** ../geom/dist/color-transform.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorTransform": () => (/* binding */ ColorTransform)
/* harmony export */ });
var ColorTransform;

(function (ColorTransform) {
  function empty() {
    return {
      alphaMultiplier: 1,
      redMultiplier: 1,
      greenMultiplier: 1,
      blueMultiplier: 1,
      alphaOffset: 0,
      redOffset: 0,
      greenOffset: 0,
      blueOffset: 0
    };
  }

  ColorTransform.empty = empty;

  function isEmpty(ct) {
    return ct.redMultiplier === 1 && ct.greenMultiplier === 1 && ct.blueMultiplier === 1 && ct.alphaMultiplier === 1 && ct.redOffset === 0 && ct.greenOffset === 0 && ct.blueOffset === 0 && ct.alphaOffset === 0;
  }

  ColorTransform.isEmpty = isEmpty;

  function isEmptyWithAlpha(ct) {
    return ct.redMultiplier === 1 && ct.greenMultiplier === 1 && ct.blueMultiplier === 1 && ct.redOffset === 0 && ct.greenOffset === 0 && ct.blueOffset === 0 && ct.alphaOffset === 0;
  }

  ColorTransform.isEmptyWithAlpha = isEmptyWithAlpha;

  function setEmpty(ct) {
    ct.redMultiplier = 1;
    ct.greenMultiplier = 1;
    ct.blueMultiplier = 1;
    ct.alphaMultiplier = 1;
    ct.redOffset = 0;
    ct.greenOffset = 0;
    ct.blueOffset = 0;
    ct.alphaOffset = 0;
  }

  ColorTransform.setEmpty = setEmpty;

  function copy(from, to) {
    to.alphaMultiplier = from.alphaMultiplier;
    to.redMultiplier = from.redMultiplier;
    to.greenMultiplier = from.greenMultiplier;
    to.blueMultiplier = from.blueMultiplier;
    to.alphaOffset = from.alphaOffset;
    to.redOffset = from.redOffset;
    to.greenOffset = from.greenOffset;
    to.blueOffset = from.blueOffset;
  }

  ColorTransform.copy = copy;

  function concat(ct1, ct0, result) {
    var alphaMultiplier = ct1.alphaMultiplier * ct0.alphaMultiplier;
    var redMultiplier = ct1.redMultiplier * ct0.redMultiplier;
    var greenMultiplier = ct1.greenMultiplier * ct0.greenMultiplier;
    var blueMultiplier = ct1.blueMultiplier * ct0.blueMultiplier;
    var alphaOffset = ct1.alphaMultiplier * ct0.alphaOffset + ct0.alphaOffset;
    var redOffset = ct1.redMultiplier * ct0.redOffset + ct0.redOffset;
    var greenOffset = ct1.greenMultiplier * ct0.greenOffset + ct0.greenOffset;
    var blueOffset = ct1.blueMultiplier * ct0.blueOffset + ct0.blueOffset;
    result.alphaMultiplier = alphaMultiplier;
    result.redMultiplier = redMultiplier;
    result.greenMultiplier = greenMultiplier;
    result.blueMultiplier = blueMultiplier;
    result.alphaOffset = alphaOffset;
    result.redOffset = redOffset;
    result.greenOffset = greenOffset;
    result.blueOffset = blueOffset;
  }

  ColorTransform.concat = concat;
})(ColorTransform || (ColorTransform = {}));

/***/ }),

/***/ "../geom/dist/index.js":
/*!*****************************!*\
  !*** ../geom/dist/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorTransform": () => (/* reexport safe */ _color_transform__WEBPACK_IMPORTED_MODULE_0__.ColorTransform),
/* harmony export */   "Bounds": () => (/* reexport safe */ _bounds__WEBPACK_IMPORTED_MODULE_1__.Bounds),
/* harmony export */   "Matrix": () => (/* reexport safe */ _matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix),
/* harmony export */   "Point": () => (/* reexport safe */ _point__WEBPACK_IMPORTED_MODULE_3__.Point),
/* harmony export */   "Rectangle": () => (/* reexport safe */ _rectangle__WEBPACK_IMPORTED_MODULE_4__.Rectangle)
/* harmony export */ });
/* harmony import */ var _color_transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-transform */ "../geom/dist/color-transform.js");
/* harmony import */ var _bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bounds */ "../geom/dist/bounds.js");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matrix */ "../geom/dist/matrix.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point */ "../geom/dist/point.js");
/* harmony import */ var _rectangle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rectangle */ "../geom/dist/rectangle.js");






/***/ }),

/***/ "../geom/dist/matrix.js":
/*!******************************!*\
  !*** ../geom/dist/matrix.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Matrix": () => (/* binding */ Matrix)
/* harmony export */ });
var Matrix;

(function (Matrix) {
  function empty() {
    return {
      a: 1,
      b: 0,
      c: 0,
      d: 1,
      tx: 0,
      ty: 0
    };
  }

  Matrix.empty = empty;

  function isEmpty(matrix) {
    return matrix.a === 1 && matrix.b === 0 && matrix.c === 0 && matrix.d === 1 && matrix.tx === 0 && matrix.ty === 0;
  }

  Matrix.isEmpty = isEmpty;

  function setEmpty(matrix) {
    matrix.a = 1;
    matrix.b = 0;
    matrix.c = 0;
    matrix.d = 1;
    matrix.tx = 0;
    matrix.ty = 0;
  }

  Matrix.setEmpty = setEmpty;

  function copy(from, to) {
    to.a = from.a;
    to.b = from.b;
    to.c = from.c;
    to.d = from.d;
    to.tx = from.tx;
    to.ty = from.ty;
  }

  Matrix.copy = copy;

  function concat(matrix0, matrix1, result) {
    var a = matrix1.a * matrix0.a + matrix1.b * matrix0.c;
    var b = matrix1.a * matrix0.b + matrix1.b * matrix0.d;
    var c = matrix1.c * matrix0.a + matrix1.d * matrix0.c;
    var d = matrix1.c * matrix0.b + matrix1.d * matrix0.d;
    var tx = matrix1.tx * matrix0.a + matrix1.ty * matrix0.c + matrix0.tx;
    var ty = matrix1.tx * matrix0.b + matrix1.ty * matrix0.d + matrix0.ty;
    result.a = a;
    result.b = b;
    result.c = c;
    result.d = d;
    result.tx = tx;
    result.ty = ty;
  }

  Matrix.concat = concat;

  function getDeterminant(matrix) {
    return matrix.a * matrix.d - matrix.b * matrix.c;
  }

  Matrix.getDeterminant = getDeterminant;

  function invert(matrix, result) {
    var determinant = getDeterminant(matrix);

    if (determinant === 0) {
      result.a = 0;
      result.b = 0;
      result.c = 0;
      result.d = 0;
      result.tx = -matrix.tx;
      result.ty = -matrix.ty;
    } else {
      determinant = 1.0 / determinant;
      result.a = matrix.a * determinant;
      result.b = -matrix.b * determinant;
      result.c = -matrix.c * determinant;
      result.d = matrix.d * determinant;
      result.tx = -result.a * matrix.tx - result.c * matrix.ty;
      result.ty = -result.b * matrix.tx - result.d * matrix.ty;
    }
  }

  Matrix.invert = invert;

  function transformPoint(matrix, point, result) {
    var x = point.x,
        y = point.y;
    result.x = x * matrix.a + y * matrix.c + matrix.tx;
    result.y = x * matrix.b + y * matrix.d + matrix.ty;
  }

  Matrix.transformPoint = transformPoint;

  function transformPointLocal(matrix, point, result) {
    var x = point.x,
        y = point.y;
    result.x = x * matrix.a + y * matrix.c;
    result.y = x * matrix.b + y * matrix.d;
  }

  Matrix.transformPointLocal = transformPointLocal;

  function transformInversePoint(matrix, point, result) {
    var determinant = getDeterminant(matrix);

    if (determinant === 0) {
      result.x = -matrix.tx;
      result.y = -matrix.ty;
    } else {
      determinant = 1 / determinant;
      var x = point.x,
          y = point.y;
      result.x = determinant * (matrix.c * (matrix.ty - y) + matrix.d * (x - matrix.tx));
      result.y = determinant * (matrix.a * (y - matrix.ty) + matrix.b * (matrix.tx - x));
    }
  }

  Matrix.transformInversePoint = transformInversePoint;

  function transformBounds(matrix, bounds, result) {
    var a = matrix.a,
        b = matrix.b,
        c = matrix.c,
        d = matrix.d,
        tx = matrix.tx,
        ty = matrix.ty;
    var rx = bounds.x;
    var ry = bounds.y;
    var rr = rx + bounds.width;
    var rb = ry + bounds.height;
    var nx1 = rx * a + ry * c + tx;
    var ny1 = rx * b + ry * d + ty;
    var nx2 = rr * a + ry * c + tx;
    var ny2 = rr * b + ry * d + ty;
    var nx3 = rr * a + rb * c + tx;
    var ny3 = rr * b + rb * d + ty;
    var nx4 = rx * a + rb * c + tx;
    var ny4 = rx * b + rb * d + ty;
    var left = nx1;

    if (left > nx2) {
      left = nx2;
    }

    if (left > nx3) {
      left = nx3;
    }

    if (left > nx4) {
      left = nx4;
    }

    var top = ny1;

    if (top > ny2) {
      top = ny2;
    }

    if (top > ny3) {
      top = ny3;
    }

    if (top > ny4) {
      top = ny4;
    }

    var right = nx1;

    if (right < nx2) {
      right = nx2;
    }

    if (right < nx3) {
      right = nx3;
    }

    if (right < nx4) {
      right = nx4;
    }

    var bottom = ny1;

    if (bottom < ny2) {
      bottom = ny2;
    }

    if (bottom < ny3) {
      bottom = ny3;
    }

    if (bottom < ny4) {
      bottom = ny4;
    }

    result.x = left;
    result.y = top;
    result.width = right - left;
    result.height = bottom - top;
  }

  Matrix.transformBounds = transformBounds;
})(Matrix || (Matrix = {}));

/***/ }),

/***/ "../geom/dist/point.js":
/*!*****************************!*\
  !*** ../geom/dist/point.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Point": () => (/* binding */ Point)
/* harmony export */ });
var Point;

(function (Point) {
  function empty() {
    return {
      x: 0,
      y: 0
    };
  }

  Point.empty = empty;

  function length(point) {
    var x = point.x,
        y = point.y;
    return Math.sqrt(x * x + y * y);
  }

  Point.length = length;

  function angle(point) {
    return Math.atan2(point.y, point.x);
  }

  Point.angle = angle;

  function isEmpty(point) {
    return point.x === 0 && point.y === 0;
  }

  Point.isEmpty = isEmpty;

  function equals(point0, point1) {
    return point0.x === point1.x && point0.y === point1.y;
  }

  Point.equals = equals;

  function setEmpty(point) {
    point.x = 0;
    point.y = 0;
  }

  Point.setEmpty = setEmpty;

  function copy(source, target) {
    target.x = source.x;
    target.y = source.y;
  }

  Point.copy = copy;

  function normalize(point, thickness) {
    var value = length(point);

    if (value > 0) {
      value = thickness / value;
      point.x *= value;
      point.y *= value;
    }
  }

  Point.normalize = normalize;

  function distance(point0, point1) {
    var dx = point0.x - point1.x;
    var dy = point0.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  Point.distance = distance;

  function interpolate(begin, end, value, result) {
    result.x = begin.x + value * (end.x - begin.x);
    result.y = begin.y + value * (end.y - begin.y);
  }

  Point.interpolate = interpolate;

  function polar(point, length, angle) {
    point.x = length * Math.cos(angle);
    point.y = length * Math.sin(angle);
  }

  Point.polar = polar;
})(Point || (Point = {}));

/***/ }),

/***/ "../geom/dist/rectangle.js":
/*!*********************************!*\
  !*** ../geom/dist/rectangle.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rectangle": () => (/* binding */ Rectangle)
/* harmony export */ });
var Rectangle;

(function (Rectangle) {
  function empty() {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }

  Rectangle.empty = empty;

  function setEmpty(rectangle) {
    rectangle.x = 0;
    rectangle.y = 0;
    rectangle.width = 0;
    rectangle.height = 0;
  }

  Rectangle.setEmpty = setEmpty;

  function isEmpty(rectangle) {
    return rectangle.width === 0 || rectangle.height === 0;
  }

  Rectangle.isEmpty = isEmpty;

  function contains(rectangle, point) {
    return rectangle.x < point.x && rectangle.x + rectangle.width > point.x && rectangle.y < point.y && rectangle.y + rectangle.height > point.y;
  }

  Rectangle.contains = contains;
})(Rectangle || (Rectangle = {}));

/***/ }),

/***/ "../image/dist/canvas-image-color.js":
/*!*******************************************!*\
  !*** ../image/dist/canvas-image-color.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasImageColorExtension": () => (/* binding */ CanvasImageColorExtension)
/* harmony export */ });
/* harmony import */ var _e2d_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/core */ "../core/dist/index.js");
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "../image/dist/image.js");



var bounds = _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.empty();
var CanvasImageColorExtension;

(function (CanvasImageColorExtension) {
  function render(image, engine) {
    var resource = _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Source.getResource(image, engine);

    if (!(resource !== null && resource !== void 0 && resource.loaded) || !(resource !== null && resource !== void 0 && resource.image)) {
      return;
    }

    var context = engine.renderer.getContext();
    var colorTransform = context.colorTransform;

    if (colorTransform.alphaMultiplier <= 0) {
      return;
    }

    var matrix = context.matrix;
    var platform = engine.platform;
    var context2d = platform.getContext();
    var _resource$image = resource.image,
        width = _resource$image.width,
        height = _resource$image.height;
    var x = _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(image, width);
    var y = _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(image, height);

    if (_e2d_geom__WEBPACK_IMPORTED_MODULE_1__.ColorTransform.isEmptyWithAlpha(colorTransform)) {
      context2d.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
      context2d.globalAlpha = colorTransform.alphaMultiplier;
      context2d.drawImage(resource.image, x, y);
    } else {
      var customContext = platform.createCustomContext();
      bounds.x = x;
      bounds.y = y;
      bounds.width = width;
      bounds.height = height;
      _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Matrix.transformBounds(matrix, bounds, bounds);

      if (_e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.isEmpty(bounds)) {
        return;
      }

      customContext.clearRect(bounds.x, bounds.y, bounds.width, bounds.height);
      customContext.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
      customContext.drawImage(resource.image, x, y);
      var imageData = customContext.getImageData(bounds.x, bounds.y, bounds.width, bounds.height);
      var rm = colorTransform.redMultiplier;
      var gm = colorTransform.greenMultiplier;
      var bm = colorTransform.blueMultiplier;
      var am = colorTransform.alphaMultiplier;
      var ro = colorTransform.redOffset;
      var go = colorTransform.greenOffset;
      var bo = colorTransform.blueOffset;
      var ao = colorTransform.alphaOffset;
      var data = imageData.data;
      var length = data.length;

      for (var i = 0; i < length;) {
        data[i] = data[i++] * rm + ro;
        data[i] = data[i++] * gm + go;
        data[i] = data[i++] * bm + bo;
        data[i] = data[i++] * am + ao;
      }

      customContext.putImageData(imageData, bounds.x, bounds.y);
      context2d.setTransform();
      context2d.globalAlpha = 1;
      context2d.drawImage(customContext.canvas, bounds.x, bounds.y, bounds.width, bounds.height, bounds.x, bounds.y, bounds.width, bounds.height);
      platform.destroyCustomContext(customContext);
    }
  }

  CanvasImageColorExtension.render = render;

  function init(engine) {
    _image__WEBPACK_IMPORTED_MODULE_2__.ImageExtension.init(engine);
    engine.components.render.set(_image__WEBPACK_IMPORTED_MODULE_2__.IMAGE, render);
  }

  CanvasImageColorExtension.init = init;
})(CanvasImageColorExtension || (CanvasImageColorExtension = {}));

/***/ }),

/***/ "../image/dist/canvas-image.js":
/*!*************************************!*\
  !*** ../image/dist/canvas-image.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export CanvasImageExtension */
/* harmony import */ var _e2d_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/core */ "../core/dist/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "../image/dist/image.js");


var CanvasImageExtension;

(function (CanvasImageExtension) {
  function render(image, engine) {
    var resource = _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Source.getResource(image, engine);

    if (!(resource !== null && resource !== void 0 && resource.loaded) || !(resource !== null && resource !== void 0 && resource.image)) {
      return;
    }

    var context = engine.renderer.getContext();
    var colorTransform = context.colorTransform;

    if (colorTransform.alphaMultiplier <= 0) {
      return;
    }

    var context2d = engine.platform.getContext();
    var matrix = context.matrix;
    context2d.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
    var _resource$image = resource.image,
        width = _resource$image.width,
        height = _resource$image.height;
    var x = _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(image, width);
    var y = _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(image, height);
    context2d.globalAlpha = colorTransform.alphaMultiplier;
    context2d.drawImage(resource.image, x, y);
  }

  CanvasImageExtension.render = render;

  function init(engine) {
    _image__WEBPACK_IMPORTED_MODULE_1__.ImageExtension.init(engine);
    engine.components.render.set(_image__WEBPACK_IMPORTED_MODULE_1__.IMAGE, render);
  }

  CanvasImageExtension.init = init;
})(CanvasImageExtension || (CanvasImageExtension = {}));

/***/ }),

/***/ "../image/dist/image.js":
/*!******************************!*\
  !*** ../image/dist/image.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMAGE": () => (/* binding */ IMAGE),
/* harmony export */   "ImageExtension": () => (/* binding */ ImageExtension)
/* harmony export */ });
/* unused harmony export Image */
/* harmony import */ var _e2d_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/core */ "../core/dist/index.js");
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _e2d_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @e2d/resources */ "../resources/dist/index.js");



var IMAGE = 'image';
var Image;

(function (Image) {
  function calculateBounds(image, bounds, engine) {
    var src = image.src;

    if (!src) {
      _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.setEmpty(bounds);
      return;
    }

    var resource = engine.resources.get(src);

    if (!(resource !== null && resource !== void 0 && resource.loaded) || !(resource !== null && resource !== void 0 && resource.image)) {
      _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.setEmpty(bounds);
      return;
    }

    var _resource$image = resource.image,
        width = _resource$image.width,
        height = _resource$image.height;
    var x = _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(image, width);
    var y = _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(image, height);
    bounds.x = x;
    bounds.y = y;
    bounds.width = width;
    bounds.height = height;
  }

  Image.calculateBounds = calculateBounds;
})(Image || (Image = {}));

var bounds = _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.empty();
var ImageExtension;

(function (ImageExtension) {
  function hitTest(image, engine) {
    var local = engine.pointerEvents.local;
    Image.calculateBounds(image, bounds, engine);
    return _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.contains(bounds, local);
  }

  ImageExtension.hitTest = hitTest;

  function init(engine) {
    engine.components.hitTest.set(IMAGE, hitTest);
    _e2d_resources__WEBPACK_IMPORTED_MODULE_2__.ImageResource.init(engine);
  }

  ImageExtension.init = init;
})(ImageExtension || (ImageExtension = {}));

/***/ }),

/***/ "../image/dist/index.js":
/*!******************************!*\
  !*** ../image/dist/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMAGE": () => (/* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_0__.IMAGE),
/* harmony export */   "ImageExtension": () => (/* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_0__.ImageExtension),
/* harmony export */   "CanvasImageColorExtension": () => (/* reexport safe */ _canvas_image_color__WEBPACK_IMPORTED_MODULE_2__.CanvasImageColorExtension)
/* harmony export */ });
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image */ "../image/dist/image.js");
/* harmony import */ var _canvas_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas-image */ "../image/dist/canvas-image.js");
/* harmony import */ var _canvas_image_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas-image-color */ "../image/dist/canvas-image-color.js");




/***/ }),

/***/ "../resources/dist/image.js":
/*!**********************************!*\
  !*** ../resources/dist/image.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageResource": () => (/* binding */ ImageResource)
/* harmony export */ });
var ImageResource;

(function (ImageResource) {
  function resolve(asset, engine) {
    var extension = asset.split('.').pop();

    switch (extension) {
      case 'png':
      case 'jpg':
        var resource = {
          asset: asset,
          loaded: false,
          image: null
        };
        var image = document.createElement('img');
        image.src = asset;

        image.onload = function () {
          console.log("image loaded: ".concat(asset));
          resource.image = image;
          resource.loaded = true;
        };

        image.onerror = function (e) {
          engine.debug.warning('image load error', e);
        };

        return resource;

      default:
        break;
    }

    return null;
  }

  ImageResource.resolve = resolve;

  function init(engine) {
    engine.resources.resolvers.add(resolve);
  }

  ImageResource.init = init;
})(ImageResource || (ImageResource = {}));

/***/ }),

/***/ "../resources/dist/index.js":
/*!**********************************!*\
  !*** ../resources/dist/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageResource": () => (/* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_0__.ImageResource)
/* harmony export */ });
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image */ "../resources/dist/image.js");


/***/ }),

/***/ "../shape/dist/canvas/ellipse.js":
/*!***************************************!*\
  !*** ../shape/dist/canvas/ellipse.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyEllipse": () => (/* binding */ applyEllipse)
/* harmony export */ });
var PI_2 = Math.PI * 2;
function applyEllipse(data, context) {
  var _data$x = data.x,
      x = _data$x === void 0 ? 0 : _data$x,
      _data$y = data.y,
      y = _data$y === void 0 ? 0 : _data$y,
      _data$radius = data.radius,
      radius = _data$radius === void 0 ? 0 : _data$radius,
      radiusX = data.radiusX,
      radiusY = data.radiusY;
  var rx = radiusX !== null && radiusX !== void 0 ? radiusX : radius;
  var ry = radiusY !== null && radiusY !== void 0 ? radiusY : radius;

  if (rx === 0 || ry === 0) {
    return false;
  }

  context.ellipse(x, y, rx, ry, 0, 0, PI_2);
  return true;
}

/***/ }),

/***/ "../shape/dist/canvas/path.js":
/*!************************************!*\
  !*** ../shape/dist/canvas/path.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyCommand": () => (/* binding */ applyCommand),
/* harmony export */   "applyPath": () => (/* binding */ applyPath)
/* harmony export */ });
function applyCommand(command, context) {
  var _moveTo$x, _moveTo$y, _lineTo$x, _lineTo$y, _curveTo$cx, _curveTo$cy, _curveTo$x, _curveTo$y, _cubicCurveTo$cx, _cubicCurveTo$cy, _cubicCurveTo$sx, _cubicCurveTo$sy, _cubicCurveTo$x, _cubicCurveTo$y;

  var type = command.type;

  switch (type) {
    case 'moveTo':
      var moveTo = command;
      context.moveTo((_moveTo$x = moveTo.x) !== null && _moveTo$x !== void 0 ? _moveTo$x : 0, (_moveTo$y = moveTo.y) !== null && _moveTo$y !== void 0 ? _moveTo$y : 0);
      break;

    case 'lineTo':
      var lineTo = command;
      context.lineTo((_lineTo$x = lineTo.x) !== null && _lineTo$x !== void 0 ? _lineTo$x : 0, (_lineTo$y = lineTo.y) !== null && _lineTo$y !== void 0 ? _lineTo$y : 0);
      break;

    case 'curveTo':
      var curveTo = command;
      context.quadraticCurveTo((_curveTo$cx = curveTo.cx) !== null && _curveTo$cx !== void 0 ? _curveTo$cx : 0, (_curveTo$cy = curveTo.cy) !== null && _curveTo$cy !== void 0 ? _curveTo$cy : 0, (_curveTo$x = curveTo.x) !== null && _curveTo$x !== void 0 ? _curveTo$x : 0, (_curveTo$y = curveTo.y) !== null && _curveTo$y !== void 0 ? _curveTo$y : 0);
      break;

    case 'cubicCurveTo':
      var cubicCurveTo = command;
      context.bezierCurveTo((_cubicCurveTo$cx = cubicCurveTo.cx) !== null && _cubicCurveTo$cx !== void 0 ? _cubicCurveTo$cx : 0, (_cubicCurveTo$cy = cubicCurveTo.cy) !== null && _cubicCurveTo$cy !== void 0 ? _cubicCurveTo$cy : 0, (_cubicCurveTo$sx = cubicCurveTo.sx) !== null && _cubicCurveTo$sx !== void 0 ? _cubicCurveTo$sx : 0, (_cubicCurveTo$sy = cubicCurveTo.sy) !== null && _cubicCurveTo$sy !== void 0 ? _cubicCurveTo$sy : 0, (_cubicCurveTo$x = cubicCurveTo.x) !== null && _cubicCurveTo$x !== void 0 ? _cubicCurveTo$x : 0, (_cubicCurveTo$y = cubicCurveTo.y) !== null && _cubicCurveTo$y !== void 0 ? _cubicCurveTo$y : 0);
      break;

    default:
      break;
  }
}
function applyPath(data, context) {
  if (!data.length) {
    return false;
  }

  context.beginPath();

  for (var i = 0; i < data.length; i++) {
    var command = data[i];
    applyCommand(command, context);
  }

  context.closePath();
  return true;
}

/***/ }),

/***/ "../shape/dist/canvas/rectangle.js":
/*!*****************************************!*\
  !*** ../shape/dist/canvas/rectangle.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyRectangle": () => (/* binding */ applyRectangle)
/* harmony export */ });
function applyRectangle(data, context) {
  var _data$x = data.x,
      x = _data$x === void 0 ? 0 : _data$x,
      _data$y = data.y,
      y = _data$y === void 0 ? 0 : _data$y,
      _data$width = data.width,
      width = _data$width === void 0 ? 0 : _data$width,
      _data$height = data.height,
      height = _data$height === void 0 ? 0 : _data$height;

  if (width === 0 || height === 0) {
    return false;
  }

  context.rect(x, y, width, height);
  return true;
}

/***/ }),

/***/ "../shape/dist/canvas/shape.js":
/*!*************************************!*\
  !*** ../shape/dist/canvas/shape.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasShapeExtension": () => (/* binding */ CanvasShapeExtension)
/* harmony export */ });
/* harmony import */ var _e2d_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/core */ "../core/dist/index.js");
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shape */ "../shape/dist/shape.js");
/* harmony import */ var _rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rectangle */ "../shape/dist/canvas/rectangle.js");
/* harmony import */ var _ellipse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ellipse */ "../shape/dist/canvas/ellipse.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./path */ "../shape/dist/canvas/path.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string */ "../shape/dist/canvas/string.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "../shape/dist/canvas/style.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }









var bounds = _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.empty();
var offset = _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Point.empty();

function renderGraphics(data, colorTransform, context, engine) {
  var fill = data.fill,
      stroke = data.stroke;
  var hasFill = !!fill || fill === 0;
  var hasStroke = !!stroke || stroke === 0;

  if (!hasFill && !hasStroke) {
    return;
  }

  var exist = true;
  var type = data.type;

  switch (type) {
    case 'rectangle':
      exist = (0,_rectangle__WEBPACK_IMPORTED_MODULE_3__.applyRectangle)(data, context);
      break;

    case 'ellipse':
      exist = (0,_ellipse__WEBPACK_IMPORTED_MODULE_4__.applyEllipse)(data, context);
      break;

    case 'path':
      var path = data;

      if (typeof path.data === 'string' && path.data.length) {
        exist = (0,_string__WEBPACK_IMPORTED_MODULE_6__.applyString)(path.data, context);
      } else if (Array.isArray(path.data) && path.data.length) {
        exist = (0,_path__WEBPACK_IMPORTED_MODULE_5__.applyPath)(path.data, context);
      } else {
        exist = false;
      }

      break;

    default:
      break;
  }

  if (!exist) {
    return;
  }

  if (hasFill) {
    (0,_style__WEBPACK_IMPORTED_MODULE_7__.setFillStyle)(fill, colorTransform, context, engine);
    context.fill();
  }

  if (hasStroke) {
    (0,_style__WEBPACK_IMPORTED_MODULE_7__.setStrokeStyle)(stroke, colorTransform, context, engine);
    context.stroke();
  }
}

var CanvasShapeExtension;

(function (CanvasShapeExtension) {
  function render(shape, engine) {
    var data = shape.data;

    if (!data) {
      return;
    }

    var context = engine.renderer.getContext();
    var colorTransform = context.colorTransform;

    if (colorTransform.alphaMultiplier <= 0) {
      return;
    }

    _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Point.setEmpty(offset);

    if (_e2d_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.hasValues(shape)) {
      _shape__WEBPACK_IMPORTED_MODULE_2__.Shape.calculateBounds(shape, bounds);

      if (_e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.isEmpty(bounds)) {
        return;
      }

      offset.x = _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(shape, bounds.width);
      offset.y = _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(shape, bounds.width);
    }

    var context2d = engine.platform.getContext();
    context2d.globalAlpha = 1;
    var matrix = context.matrix;

    if (_e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Point.isEmpty(offset)) {
      _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Matrix.transformPointLocal(matrix, offset, offset);
    }

    context2d.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx + offset.x, matrix.ty + offset.y);

    if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        renderGraphics(data[i], colorTransform, context2d, engine);
      }
    } else if (_typeof(data) === 'object') {
      renderGraphics(data, colorTransform, context2d, engine);
    }
  }

  CanvasShapeExtension.render = render;

  function init(engine) {
    _shape__WEBPACK_IMPORTED_MODULE_2__.ShapeExtension.init(engine);
    engine.components.render.set(_shape__WEBPACK_IMPORTED_MODULE_2__.SHAPE, render);
  }

  CanvasShapeExtension.init = init;
})(CanvasShapeExtension || (CanvasShapeExtension = {}));

/***/ }),

/***/ "../shape/dist/canvas/string.js":
/*!**************************************!*\
  !*** ../shape/dist/canvas/string.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyString": () => (/* binding */ applyString)
/* harmony export */ });
/* harmony import */ var _data_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/string */ "../shape/dist/data/string.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ "../shape/dist/canvas/path.js");


var reader = new _data_string__WEBPACK_IMPORTED_MODULE_0__.GraphicsStringReader();
function applyString(data, context) {
  reader.setPath(data);
  context.beginPath();

  while (reader.readNext()) {
    var command = reader.getCommand();

    if (command) {
      (0,_path__WEBPACK_IMPORTED_MODULE_1__.applyCommand)(command, context);
    }
  }

  context.closePath();
  return true;
}

/***/ }),

/***/ "../shape/dist/canvas/style.js":
/*!*************************************!*\
  !*** ../shape/dist/canvas/style.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setFillStyle": () => (/* binding */ setFillStyle),
/* harmony export */   "setStrokeStyle": () => (/* binding */ setStrokeStyle)
/* harmony export */ });
/* harmony import */ var _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/canvas-engine */ "../canvas-engine/dist/index.js");
/* harmony import */ var _e2d_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/core */ "../core/dist/index.js");
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var emptyMatrix = _e2d_geom__WEBPACK_IMPORTED_MODULE_2__.Matrix.empty();
var emptyArray = [];

function getCanvasPattern(fill, colorTransform, context, engine) {
  var _solid$color, _solid$alpha;

  if (typeof fill === 'number') {
    return _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns.colorPattern(fill, 1, colorTransform);
  }

  if (_typeof(fill) === 'object') {
    switch (fill.type) {
      case 'solid':
        var solid = fill;
        return _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns.colorPattern((_solid$color = solid.color) !== null && _solid$color !== void 0 ? _solid$color : 0, (_solid$alpha = solid.alpha) !== null && _solid$alpha !== void 0 ? _solid$alpha : 1, colorTransform);

      case 'linear':
        var _fill$matrix = fill.matrix,
            ml = _fill$matrix === void 0 ? emptyMatrix : _fill$matrix,
            _fill$colors = fill.colors,
            cl = _fill$colors === void 0 ? emptyArray : _fill$colors,
            _fill$alphas = fill.alphas,
            al = _fill$alphas === void 0 ? emptyArray : _fill$alphas,
            _fill$ratios = fill.ratios,
            rl = _fill$ratios === void 0 ? emptyArray : _fill$ratios;
        return _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns.linearGradientPattern(ml, cl, al, rl, colorTransform, context);

      case 'radial':
        var _fill$matrix2 = fill.matrix,
            mr = _fill$matrix2 === void 0 ? emptyMatrix : _fill$matrix2,
            _fill$colors2 = fill.colors,
            cr = _fill$colors2 === void 0 ? emptyArray : _fill$colors2,
            _fill$alphas2 = fill.alphas,
            ar = _fill$alphas2 === void 0 ? emptyArray : _fill$alphas2,
            _fill$ratios2 = fill.ratios,
            rr = _fill$ratios2 === void 0 ? emptyArray : _fill$ratios2;
        return _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns.radialGradientPattern(mr, cr, ar, rr, colorTransform, context);

      case 'bitmap':
        var _fill$repeat = fill.repeat,
            repeat = _fill$repeat === void 0 ? true : _fill$repeat;
        var resource = _e2d_core__WEBPACK_IMPORTED_MODULE_1__.Source.getResource(fill, engine);

        if (resource !== null && resource !== void 0 && resource.image) {
          return _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns.bitmapPattern(resource.image, repeat, context);
        }

        return '';

      default:
        return '';
    }
  }

  return '';
}

function setFillStyle(fill, colorTransform, context, engine) {
  context.fillStyle = getCanvasPattern(fill, colorTransform, context, engine);
}
function setStrokeStyle(stroke, colorTransform, context, engine) {
  if (typeof stroke === 'number') {
    context.strokeStyle = _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns.colorPattern(stroke, 1, colorTransform);
    context.lineWidth = 1;
  } else if (_typeof(stroke) === 'object' && stroke.fill) {
    context.strokeStyle = getCanvasPattern(stroke.fill, colorTransform, context, engine);
  }
}

/***/ }),

/***/ "../shape/dist/data/data.js":
/*!**********************************!*\
  !*** ../shape/dist/data/data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphicsData": () => (/* binding */ GraphicsData)
/* harmony export */ });
/* unused harmony exports RectangleData, EllipseData, PathData */
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ "../shape/dist/data/path.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string */ "../shape/dist/data/string.js");



var RectangleData;

(function (RectangleData) {
  function calculateBounds(data, bounds) {
    var _data$x = data.x,
        x = _data$x === void 0 ? 0 : _data$x,
        _data$y = data.y,
        y = _data$y === void 0 ? 0 : _data$y,
        _data$width = data.width,
        width = _data$width === void 0 ? 0 : _data$width,
        _data$height = data.height,
        height = _data$height === void 0 ? 0 : _data$height;
    _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, x, y);
    _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, x + width, y + height);
  }

  RectangleData.calculateBounds = calculateBounds;
})(RectangleData || (RectangleData = {}));

var EllipseData;

(function (EllipseData) {
  function calculateBounds(data, bounds) {
    var _data$x2 = data.x,
        x = _data$x2 === void 0 ? 0 : _data$x2,
        _data$y2 = data.y,
        y = _data$y2 === void 0 ? 0 : _data$y2,
        _data$radius = data.radius,
        radius = _data$radius === void 0 ? 0 : _data$radius,
        radiusX = data.radiusX,
        radiusY = data.radiusY;
    var rx = radiusX !== null && radiusX !== void 0 ? radiusX : radius;
    var ry = radiusY !== null && radiusY !== void 0 ? radiusY : radius;
    _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, x - rx, y - ry);
    _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, x + rx, y + ry);
  }

  EllipseData.calculateBounds = calculateBounds;
})(EllipseData || (EllipseData = {}));

var PathData;

(function (PathData) {
  function calculateBounds(pathData, bounds) {
    var data = pathData.data;

    if (typeof data === 'string') {
      _string__WEBPACK_IMPORTED_MODULE_2__.GraphicsString.calculateBounds(data, bounds);
    } else if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        var command = data[i];
        _path__WEBPACK_IMPORTED_MODULE_1__.PathCommand.calculateBounds(command, bounds);
      }
    }
  }

  PathData.calculateBounds = calculateBounds;
})(PathData || (PathData = {}));

var GraphicsData;

(function (GraphicsData) {
  function calculateBounds(data, bounds) {
    var type = data.type;

    switch (type) {
      case 'rectangle':
        RectangleData.calculateBounds(data, bounds);
        break;

      case 'ellipse':
        EllipseData.calculateBounds(data, bounds);
        break;

      case 'path':
        PathData.calculateBounds(data, bounds);
        break;

      default:
        break;
    }
  }

  GraphicsData.calculateBounds = calculateBounds;
})(GraphicsData || (GraphicsData = {}));

/***/ }),

/***/ "../shape/dist/data/path.js":
/*!**********************************!*\
  !*** ../shape/dist/data/path.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PathCommand": () => (/* binding */ PathCommand)
/* harmony export */ });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");

var PathCommand;

(function (PathCommand) {
  function calculateBounds(path, bounds) {
    var _moveTo$x, _moveTo$y, _curveTo$cx, _curveTo$cy, _curveTo$x, _curveTo$y, _cubicCurveTo$cx, _cubicCurveTo$cy, _cubicCurveTo$sx, _cubicCurveTo$sy, _cubicCurveTo$x, _cubicCurveTo$y;

    var type = path.type;

    switch (type) {
      case 'moveTo':
      case 'lineTo':
        var moveTo = path;
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_moveTo$x = moveTo.x) !== null && _moveTo$x !== void 0 ? _moveTo$x : 0, (_moveTo$y = moveTo.y) !== null && _moveTo$y !== void 0 ? _moveTo$y : 0);
        break;

      case 'curveTo':
        var curveTo = path;
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_curveTo$cx = curveTo.cx) !== null && _curveTo$cx !== void 0 ? _curveTo$cx : 0, (_curveTo$cy = curveTo.cy) !== null && _curveTo$cy !== void 0 ? _curveTo$cy : 0);
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_curveTo$x = curveTo.x) !== null && _curveTo$x !== void 0 ? _curveTo$x : 0, (_curveTo$y = curveTo.y) !== null && _curveTo$y !== void 0 ? _curveTo$y : 0);
        break;

      case 'cubicCurveTo':
        var cubicCurveTo = path;
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_cubicCurveTo$cx = cubicCurveTo.cx) !== null && _cubicCurveTo$cx !== void 0 ? _cubicCurveTo$cx : 0, (_cubicCurveTo$cy = cubicCurveTo.cy) !== null && _cubicCurveTo$cy !== void 0 ? _cubicCurveTo$cy : 0);
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_cubicCurveTo$sx = cubicCurveTo.sx) !== null && _cubicCurveTo$sx !== void 0 ? _cubicCurveTo$sx : 0, (_cubicCurveTo$sy = cubicCurveTo.sy) !== null && _cubicCurveTo$sy !== void 0 ? _cubicCurveTo$sy : 0);
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_cubicCurveTo$x = cubicCurveTo.x) !== null && _cubicCurveTo$x !== void 0 ? _cubicCurveTo$x : 0, (_cubicCurveTo$y = cubicCurveTo.y) !== null && _cubicCurveTo$y !== void 0 ? _cubicCurveTo$y : 0);
        break;

      default:
        break;
    }
  }

  PathCommand.calculateBounds = calculateBounds;
})(PathCommand || (PathCommand = {}));

/***/ }),

/***/ "../shape/dist/data/string.js":
/*!************************************!*\
  !*** ../shape/dist/data/string.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphicsStringReader": () => (/* binding */ GraphicsStringReader),
/* harmony export */   "GraphicsString": () => (/* binding */ GraphicsString)
/* harmony export */ });
/* unused harmony export GraphicsStringStream */
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path */ "../shape/dist/data/path.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var NUMBERS_COUNT = {
  M: 2,
  m: 2,
  L: 2,
  l: 2,
  H: 1,
  h: 1,
  V: 1,
  v: 1,
  C: 6,
  c: 6,
  S: 4,
  s: 4,
  Q: 4,
  q: 4,
  T: 2,
  t: 2
};
var GraphicsStringStream = /*#__PURE__*/function () {
  function GraphicsStringStream() {
    _classCallCheck(this, GraphicsStringStream);

    this.path = '';
    this.command = null;
    this.buffer = [0, 0, 0, 0, 0, 0];
    this.commandRegex = /[MmLlHhVvCcSsQqTt]/g;
    this.numberRegex = /[-+\d.]+/g;
  }

  _createClass(GraphicsStringStream, [{
    key: "setPath",
    value: function setPath(path) {
      this.path = path;
      this.commandRegex.lastIndex = 0;
    }
  }, {
    key: "getCommand",
    value: function getCommand() {
      return this.command;
    }
  }, {
    key: "getBuffer",
    value: function getBuffer() {
      return this.buffer;
    }
  }, {
    key: "readNext",
    value: function readNext() {
      var commandMatch = this.commandRegex.exec(this.path);

      if (commandMatch) {
        this.command = commandMatch[0];
        var count = NUMBERS_COUNT[this.command];
        this.numberRegex.lastIndex = commandMatch.index;

        for (var i = 0; i < count; i++) {
          var numberMatch = this.numberRegex.exec(this.path);

          if (numberMatch) {
            this.buffer[i] = parseFloat(numberMatch[0]);
          } else {
            break;
          }
        }
      } else {
        this.command = null;
      }
    }
  }]);

  return GraphicsStringStream;
}();
var GraphicsStringReader = /*#__PURE__*/function () {
  function GraphicsStringReader() {
    _classCallCheck(this, GraphicsStringReader);

    this.stream = new GraphicsStringStream();
    this.command = {
      type: 'moveTo'
    };
    this.commandExists = false;
    this.lastX = 0;
    this.lastY = 0;
  }

  _createClass(GraphicsStringReader, [{
    key: "setPath",
    value: function setPath(path) {
      this.stream.setPath(path);
      this.lastX = 0;
      this.lastY = 0;
      this.commandExists = false;
    }
  }, {
    key: "getCommand",
    value: function getCommand() {
      return this.commandExists ? this.command : null;
    }
  }, {
    key: "readNext",
    value: function readNext() {
      this.stream.readNext();
      this.parse();
      return this.commandExists;
    }
  }, {
    key: "parse",
    value: function parse() {
      var command = this.stream.getCommand();
      this.commandExists = !!command;

      if (!this.commandExists) {
        return;
      }

      var buffer = this.stream.getBuffer();

      var _buffer = _slicedToArray(buffer, 6),
          e0 = _buffer[0],
          e1 = _buffer[1],
          e2 = _buffer[2],
          e3 = _buffer[3],
          e4 = _buffer[4],
          e5 = _buffer[5];

      var cx = 0;
      var cy = 0;

      switch (command) {
        case 'M':
          {
            this.command.type = 'moveTo';
            var moveTo = this.command;
            moveTo.x = e0;
            moveTo.y = e1;
            this.lastX = moveTo.x;
            this.lastY = moveTo.y;
          }
          break;

        case 'm':
          {
            this.command.type = 'moveTo';
            var _moveTo = this.command;
            _moveTo.x = e0 + this.lastX;
            _moveTo.y = e1 + this.lastY;
            this.lastX = _moveTo.x;
            this.lastY = _moveTo.y;
          }
          break;

        case 'L':
          {
            this.command.type = 'lineTo';
            var lineTo = this.command;
            lineTo.x = e0;
            lineTo.y = e1;
            this.lastX = lineTo.x;
            this.lastY = lineTo.y;
          }
          break;

        case 'l':
          {
            this.command.type = 'lineTo';
            var _lineTo = this.command;
            _lineTo.x = e0 + this.lastX;
            _lineTo.y = e1 + this.lastY;
            this.lastX = _lineTo.x;
            this.lastY = _lineTo.y;
          }
          break;

        case 'H':
          {
            this.command.type = 'lineTo';
            var _lineTo2 = this.command;
            _lineTo2.x = e0;
            _lineTo2.y = this.lastY;
            this.lastX = _lineTo2.x;
          }
          break;

        case 'h':
          {
            this.command.type = 'lineTo';
            var _lineTo3 = this.command;
            _lineTo3.x = e0 + this.lastX;
            _lineTo3.y = this.lastY;
            this.lastX = _lineTo3.x;
          }
          break;

        case 'V':
          {
            this.command.type = 'lineTo';
            var _lineTo4 = this.command;
            _lineTo4.x = this.lastX;
            _lineTo4.y = e0;
            this.lastY = _lineTo4.y;
          }
          break;

        case 'v':
          {
            this.command.type = 'lineTo';
            var _lineTo5 = this.command;
            _lineTo5.x = this.lastX;
            _lineTo5.y = e0 + this.lastY;
            this.lastY = _lineTo5.y;
          }
          break;

        case 'C':
          {
            this.command.type = 'cubicCurveTo';
            var cubicCurveTo = this.command;
            cubicCurveTo.cx = e0;
            cubicCurveTo.cy = e1;
            cubicCurveTo.sx = e2;
            cubicCurveTo.sy = e3;
            cubicCurveTo.x = e4;
            cubicCurveTo.y = e5;
            cx = cubicCurveTo.x - (cubicCurveTo.sx - cubicCurveTo.x);
            cy = cubicCurveTo.y - (cubicCurveTo.sy - cubicCurveTo.y);
            this.lastX = cubicCurveTo.x;
            this.lastY = cubicCurveTo.y;
          }
          break;

        case 'c':
          {
            this.command.type = 'cubicCurveTo';
            var _cubicCurveTo = this.command;
            _cubicCurveTo.cx = e0 + this.lastX;
            _cubicCurveTo.cy = e1 + this.lastY;
            _cubicCurveTo.sx = e2 + this.lastX;
            _cubicCurveTo.sy = e3 + this.lastY;
            _cubicCurveTo.x = e4 + this.lastX;
            _cubicCurveTo.y = e5 + this.lastY;
            cx = _cubicCurveTo.x - (_cubicCurveTo.sx - _cubicCurveTo.x);
            cy = _cubicCurveTo.y - (_cubicCurveTo.sy - _cubicCurveTo.y);
            this.lastX = _cubicCurveTo.x;
            this.lastY = _cubicCurveTo.y;
          }
          break;

        case 'S':
          {
            this.command.type = 'cubicCurveTo';
            var _cubicCurveTo2 = this.command;
            _cubicCurveTo2.cx = cx;
            _cubicCurveTo2.cy = cy;
            _cubicCurveTo2.sx = e0;
            _cubicCurveTo2.sy = e1;
            _cubicCurveTo2.x = e2;
            _cubicCurveTo2.y = e3;
            cx = _cubicCurveTo2.x - (_cubicCurveTo2.sx - _cubicCurveTo2.x);
            cy = _cubicCurveTo2.y - (_cubicCurveTo2.sy - _cubicCurveTo2.y);
            this.lastX = _cubicCurveTo2.x;
            this.lastY = _cubicCurveTo2.y;
          }
          break;

        case 's':
          {
            this.command.type = 'cubicCurveTo';
            var _cubicCurveTo3 = this.command;
            _cubicCurveTo3.cx = cx;
            _cubicCurveTo3.cy = cy;
            _cubicCurveTo3.sx = e0 + this.lastX;
            _cubicCurveTo3.sy = e1 + this.lastY;
            _cubicCurveTo3.x = e2 + this.lastX;
            _cubicCurveTo3.y = e3 + this.lastY;
            cx = _cubicCurveTo3.x - (_cubicCurveTo3.sx - _cubicCurveTo3.x);
            cy = _cubicCurveTo3.y - (_cubicCurveTo3.sy - _cubicCurveTo3.y);
            this.lastX = _cubicCurveTo3.x;
            this.lastY = _cubicCurveTo3.y;
          }
          break;

        case 'Q':
          {
            this.command.type = 'curveTo';
            var curveTo = this.command;
            curveTo.cx = e0;
            curveTo.cy = e1;
            curveTo.x = e2;
            curveTo.y = e3;
            cx = curveTo.x - (curveTo.cx - curveTo.x);
            cy = curveTo.y - (curveTo.cy - curveTo.y);
            this.lastX = curveTo.x;
            this.lastY = curveTo.y;
          }
          break;

        case 'q':
          {
            this.command.type = 'curveTo';
            var _curveTo = this.command;
            _curveTo.cx = e0 + this.lastX;
            _curveTo.cy = e1 + this.lastY;
            _curveTo.x = e2 + this.lastX;
            _curveTo.y = e3 + this.lastY;
            cx = _curveTo.x - (_curveTo.cx - _curveTo.x);
            cy = _curveTo.y - (_curveTo.cy - _curveTo.y);
            this.lastX = _curveTo.x;
            this.lastY = _curveTo.y;
          }
          break;

        case 'T':
          {
            this.command.type = 'curveTo';
            var _curveTo2 = this.command;
            _curveTo2.cx = cx;
            _curveTo2.cy = cy;
            _curveTo2.x = e0;
            _curveTo2.y = e1;
            cx = _curveTo2.x - (_curveTo2.cx - _curveTo2.x);
            cy = _curveTo2.y - (_curveTo2.cy - _curveTo2.y);
            this.lastX = _curveTo2.x;
            this.lastY = _curveTo2.y;
          }
          break;

        case 't':
          {
            this.command.type = 'curveTo';
            var _curveTo3 = this.command;
            _curveTo3.cx = cx;
            _curveTo3.cy = cy;
            _curveTo3.x = e0 + this.lastX;
            _curveTo3.y = e1 + this.lastY;
            cx = _curveTo3.x - (_curveTo3.cx - _curveTo3.x);
            cy = _curveTo3.y - (_curveTo3.cy - _curveTo3.y);
            this.lastX = _curveTo3.x;
            this.lastY = _curveTo3.y;
          }
          break;

        default:
          break;
      }
    }
  }]);

  return GraphicsStringReader;
}();
var reader = new GraphicsStringReader();
var GraphicsString;

(function (GraphicsString) {
  function calculateBounds(path, bounds) {
    reader.setPath(path);

    while (reader.readNext()) {
      var command = reader.getCommand();

      if (command) {
        _path__WEBPACK_IMPORTED_MODULE_0__.PathCommand.calculateBounds(command, bounds);
      }
    }
  }

  GraphicsString.calculateBounds = calculateBounds;
})(GraphicsString || (GraphicsString = {}));

/***/ }),

/***/ "../shape/dist/data/style.js":
/*!***********************************!*\
  !*** ../shape/dist/data/style.js ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "../shape/dist/graphics.js":
/*!*********************************!*\
  !*** ../shape/dist/graphics.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Graphics)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Graphics = /*#__PURE__*/function () {
  function Graphics(shape) {
    _classCallCheck(this, Graphics);

    this.shape = shape;
  }

  _createClass(Graphics, [{
    key: "beginFill",
    value: function beginFill() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      this.fill = {
        type: 'solid',
        color: color,
        alpha: alpha
      };
    }
  }, {
    key: "beginBitmapFill",
    value: function beginBitmapFill(src, matrix) {
      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var smooth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      this.fill = {
        type: 'bitmap',
        src: src,
        matrix: matrix,
        repeat: repeat,
        smooth: smooth
      };
    }
  }, {
    key: "beginGradientFill",
    value: function beginGradientFill(type, color, alpha, ratio, matrix) {
      var spread = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'repeat';
      var interpolation = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'rgb';
      var focalPointRatio = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      this.fill = {
        type: type,
        color: color,
        alpha: alpha,
        ratio: ratio,
        matrix: matrix,
        spread: spread,
        interpolation: interpolation,
        focalPointRatio: focalPointRatio
      };
    }
  }, {
    key: "lineStyle",
    value: function lineStyle() {
      var thickness = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var alpha = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var pixelHinting = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var scaleMode = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'none';
      var caps = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'round';
      var joints = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'round';
      var miterLimit = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 3;
      this.stroke = {
        thickness: thickness,
        pixelHinting: pixelHinting,
        scaleMode: scaleMode,
        caps: caps,
        joints: joints,
        miterLimit: miterLimit,
        fill: {
          type: 'solid',
          color: color,
          alpha: alpha
        }
      };
    }
  }, {
    key: "lineGradientStyle",
    value: function lineGradientStyle(type, color, alpha, ratio, matrix) {
      var spread = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'repeat';
      var interpolation = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'rgb';
      var focalPointRatio = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;

      if (!this.stroke) {
        return;
      }

      this.stroke.fill = {
        type: type,
        color: color,
        alpha: alpha,
        ratio: ratio,
        matrix: matrix,
        spread: spread,
        interpolation: interpolation,
        focalPointRatio: focalPointRatio
      };
    }
  }, {
    key: "lineBitmapStyle",
    value: function lineBitmapStyle(src, matrix) {
      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var smooth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (!this.stroke) {
        return;
      }

      this.stroke.fill = {
        type: 'bitmap',
        src: src,
        matrix: matrix,
        repeat: repeat,
        smooth: smooth
      };
    }
  }, {
    key: "moveTo",
    value: function moveTo(x, y) {
      var path = this.beginPath();
      path.push({
        type: 'moveTo',
        x: x,
        y: y
      });
    }
  }, {
    key: "lineTo",
    value: function lineTo(x, y) {
      var path = this.getPath();

      if (!path) {
        return;
      }

      path.push({
        type: 'lineTo',
        x: x,
        y: y
      });
    }
  }, {
    key: "curveTo",
    value: function curveTo(cx, cy, x, y) {
      var path = this.getPath();

      if (!path) {
        return;
      }

      path.push({
        type: 'curveTo',
        cx: cx,
        cy: cy,
        x: x,
        y: y
      });
    }
  }, {
    key: "cubicCurveTo",
    value: function cubicCurveTo(cx, cy, sx, sy, x, y) {
      var path = this.getPath();

      if (!path) {
        return;
      }

      path.push({
        type: 'curveTo',
        cx: cx,
        cy: cy,
        sx: sx,
        sy: sy,
        x: x,
        y: y
      });
    }
  }, {
    key: "drawRoundRect",
    value: function drawRoundRect(x, y, width, height) {
      var ellipseWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var ellipseHeight = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var path = this.beginPath();
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
      path.push({
        type: 'moveTo',
        x: x,
        y: ym
      });
      path.push({
        type: 'cubicCurveTo',
        cx: x,
        cy: ym - oy,
        sx: xm - ox,
        sy: y,
        x: xm,
        y: y
      });
      path.push({
        type: 'lineTo',
        x: xm + dx,
        y: y
      });
      path.push({
        type: 'cubicCurveTo',
        cx: xm + ox + dx,
        cy: y,
        sx: xe + dx,
        sy: ym - oy,
        x: xe + dx,
        y: ym
      });
      path.push({
        type: 'lineTo',
        x: xe + dx,
        y: ym + dy
      });
      path.push({
        type: 'cubicCurveTo',
        cx: xe + dx,
        cy: ym + oy + dy,
        sx: xm + ox + dx,
        sy: ye + dy,
        x: xm + dx,
        y: ye + dy
      });
      path.push({
        type: 'lineTo',
        x: xm,
        y: ye + dy
      });
      path.push({
        type: 'cubicCurveTo',
        cx: xm - ox,
        cy: ye + dy,
        sx: x,
        sy: ym + oy + dy,
        x: x,
        y: ym + dy
      });
    }
  }, {
    key: "drawRect",
    value: function drawRect(x, y, width, height) {
      var data = this.createData();
      data.type = 'rectangle';
      data.x = x;
      data.y = y;
      data.width = width;
      data.height = height;
    }
  }, {
    key: "drawCircle",
    value: function drawCircle(x, y, radius) {
      var data = this.createData();
      data.type = 'ellipse';
      data.x = x;
      data.y = y;
      data.radius = radius;
    }
  }, {
    key: "drawEllipse",
    value: function drawEllipse(x, y, width, height) {
      var data = this.createData();
      data.type = 'ellipse';
      data.radiusX = width / 2;
      data.radiusY = height / 2;
      data.x = x - data.radiusX;
      data.y = y - data.radiusY;
    }
  }, {
    key: "clear",
    value: function clear() {
      delete this.shape.data;
    }
  }, {
    key: "createData",
    value: function createData() {
      var shape = this.shape,
          fill = this.fill,
          stroke = this.stroke;

      if (Array.isArray(shape.data)) {} else if (_typeof(shape.data) === 'object') {
        shape.data = [shape.data];
      } else {
        shape.data = [];
      }

      var graphicsData = {
        type: 'path',
        fill: fill,
        stroke: stroke
      };
      shape.data.push(graphicsData);
      return graphicsData;
    }
  }, {
    key: "beginPath",
    value: function beginPath() {
      var data = this.createData();
      data.data = [];
      return data.data;
    }
  }, {
    key: "getPath",
    value: function getPath() {
      var shape = this.shape;

      if (!Array.isArray(shape.data) || !shape.data.length) {
        return undefined;
      }

      var data = shape.data[shape.data.length - 1];

      if (!Array.isArray(data.data)) {
        return undefined;
      }

      return data.data;
    }
  }]);

  return Graphics;
}();



/***/ }),

/***/ "../shape/dist/index.js":
/*!******************************!*\
  !*** ../shape/dist/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasShapeExtension": () => (/* reexport safe */ _canvas_shape__WEBPACK_IMPORTED_MODULE_6__.CanvasShapeExtension)
/* harmony export */ });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/data */ "../shape/dist/data/data.js");
/* harmony import */ var _data_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/path */ "../shape/dist/data/path.js");
/* harmony import */ var _data_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/string */ "../shape/dist/data/string.js");
/* harmony import */ var _data_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/style */ "../shape/dist/data/style.js");
/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphics */ "../shape/dist/graphics.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shape */ "../shape/dist/shape.js");
/* harmony import */ var _canvas_shape__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./canvas/shape */ "../shape/dist/canvas/shape.js");








/***/ }),

/***/ "../shape/dist/shape.js":
/*!******************************!*\
  !*** ../shape/dist/shape.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SHAPE": () => (/* binding */ SHAPE),
/* harmony export */   "Shape": () => (/* binding */ Shape),
/* harmony export */   "ShapeExtension": () => (/* binding */ ShapeExtension)
/* harmony export */ });
/* harmony import */ var _e2d_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/core */ "../core/dist/index.js");
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _e2d_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @e2d/resources */ "../resources/dist/index.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/data */ "../shape/dist/data/data.js");
/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphics */ "../shape/dist/graphics.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






var SHAPE = 'shape';
var bounds = _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Bounds.empty();
var Shape;

(function (Shape) {
  function getGraphics(shape) {
    return new _graphics__WEBPACK_IMPORTED_MODULE_4__.default(shape);
  }

  Shape.getGraphics = getGraphics;

  function calculateBounds(shape, result) {
    var data = shape.data;

    if (!data) {
      _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.setEmpty(result);
      return;
    }

    _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Bounds.setEmpty(bounds);

    if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        _data_data__WEBPACK_IMPORTED_MODULE_3__.GraphicsData.calculateBounds(data[i], bounds);
      }
    } else if (_typeof(data) === 'object') {
      _data_data__WEBPACK_IMPORTED_MODULE_3__.GraphicsData.calculateBounds(data, bounds);
    } else {
      _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.setEmpty(result);
      return;
    }

    if (_e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Bounds.isEmpty(bounds)) {
      _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.setEmpty(result);
      return;
    }

    var width = bounds.maxX - bounds.minX;
    var height = bounds.maxY - bounds.minY;
    var x = bounds.minX + _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(shape, width);
    var y = bounds.minY + _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(shape, height);
    result.x = x;
    result.y = y;
    result.width = width;
    result.height = height;
  }

  Shape.calculateBounds = calculateBounds;
})(Shape || (Shape = {}));

var rectangle = _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.empty();
var ShapeExtension;

(function (ShapeExtension) {
  function hitTest(shape, engine) {
    var local = engine.pointerEvents.local;
    Shape.calculateBounds(shape, rectangle);
    return _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.contains(rectangle, local);
  }

  ShapeExtension.hitTest = hitTest;

  function init(engine) {
    engine.components.hitTest.set(SHAPE, hitTest);
    _e2d_resources__WEBPACK_IMPORTED_MODULE_2__.ImageResource.init(engine);
  }

  ShapeExtension.init = init;
})(ShapeExtension || (ShapeExtension = {}));

/***/ }),

/***/ "../text/dist/canvas-text.js":
/*!***********************************!*\
  !*** ../text/dist/canvas-text.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasTextExtension": () => (/* binding */ CanvasTextExtension)
/* harmony export */ });
/* harmony import */ var _e2d_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/core */ "../core/dist/index.js");
/* harmony import */ var _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/canvas-engine */ "../canvas-engine/dist/index.js");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./font */ "../text/dist/font.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text */ "../text/dist/text.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format */ "../text/dist/format.js");





var validTextFormat = {};
var CanvasTextExtension;

(function (CanvasTextExtension) {
  function render(component, engine) {
    var text = component.text;

    if (!text) {
      return;
    }

    var _engine$renderer$getC = engine.renderer.getContext(),
        matrix = _engine$renderer$getC.matrix,
        colorTransform = _engine$renderer$getC.colorTransform;

    if (colorTransform.alphaMultiplier <= 0) {
      return;
    }

    var lines = text.split('\n');
    var width = component.width,
        height = component.height,
        textFormat = component.textFormat,
        border = component.border,
        background = component.background;
    _format__WEBPACK_IMPORTED_MODULE_4__.TextFormat.getValidTextFormat(textFormat, validTextFormat);
    var formatSize = validTextFormat.size;
    var formatLetterSpacing = validTextFormat.letterSpacing;
    var formatLeading = validTextFormat.leading;
    var font = _font__WEBPACK_IMPORTED_MODULE_2__.Font.getFont(validTextFormat.font);
    var context2d = engine.platform.getContext();
    var textWidth = _font__WEBPACK_IMPORTED_MODULE_2__.Font.getTextWidth(font, validTextFormat, lines);
    var textHeight = _font__WEBPACK_IMPORTED_MODULE_2__.Font.getTextHeight(validTextFormat, lines);
    var realWidth = width !== null && width !== void 0 ? width : textWidth;
    var realHeight = height !== null && height !== void 0 ? height : textHeight;
    var offsetX = _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(component, realWidth);
    var offsetY = _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(component, realHeight);
    var y = 0;

    if (height) {
      var alignVerticalValue = _format__WEBPACK_IMPORTED_MODULE_4__.TextFormat.getVerticalAlignValue(validTextFormat.verticalAlign);
      y = (height - textHeight) * alignVerticalValue;

      if (y < 0) {
        y = 0;
      }
    }

    context2d.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
    context2d.globalAlpha = 1;

    if (background !== undefined) {
      context2d.strokeStyle = '';
      context2d.fillStyle = _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_1__.CanvasPatterns.colorPattern(background, 1, colorTransform);
      context2d.beginPath();
      context2d.rect(offsetX, offsetY, realWidth, realHeight);
      context2d.closePath();
      context2d.fill();
    }

    if (border !== undefined) {
      context2d.strokeStyle = _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_1__.CanvasPatterns.colorPattern(border, 1, colorTransform);
      context2d.fillStyle = '';
      context2d.beginPath();
      context2d.rect(offsetX, offsetY, realWidth, realHeight);
      context2d.closePath();
      context2d.stroke();
    }

    context2d.font = _font__WEBPACK_IMPORTED_MODULE_2__.Font.getStyleFont(validTextFormat.font, formatSize);
    context2d.textBaseline = 'alphabetic';
    context2d.strokeStyle = '';
    context2d.fillStyle = _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_1__.CanvasPatterns.colorPattern(validTextFormat.color, validTextFormat.alpha, colorTransform);
    y += offsetY;

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var lineWidth = _font__WEBPACK_IMPORTED_MODULE_2__.Font.getLineWidth(font, validTextFormat, line);
      var alignValue = _format__WEBPACK_IMPORTED_MODULE_4__.TextFormat.getAlignValue(validTextFormat.align);
      var x = (realWidth - lineWidth) * alignValue;

      if (x < 0) {
        x = 0;
      }

      x += offsetX;

      for (var j = 0; j < line.length; j++) {
        var first = line.charAt(j);
        var second = line.charAt(j + 1);
        var advance = _font__WEBPACK_IMPORTED_MODULE_2__.Font.getAdvance(font, formatSize, first, second);
        context2d.fillText(first, x, y + formatSize);
        x += advance + formatLetterSpacing;
      }

      y += formatSize + formatLeading;
    }
  }

  CanvasTextExtension.render = render;

  function init(engine) {
    _text__WEBPACK_IMPORTED_MODULE_3__.TextExtension.init(engine);
    engine.components.render.set(_text__WEBPACK_IMPORTED_MODULE_3__.TEXT, render);
  }

  CanvasTextExtension.init = init;
})(CanvasTextExtension || (CanvasTextExtension = {}));

/***/ }),

/***/ "../text/dist/font.js":
/*!****************************!*\
  !*** ../text/dist/font.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Font": () => (/* binding */ Font)
/* harmony export */ });
/* unused harmony export EM */
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
var EM = 1024;
var fonts = new Map();
var Font;

(function (Font) {
  function getStyleFont(font, size) {
    return "".concat(size, "px ").concat(font);
  }

  Font.getStyleFont = getStyleFont;

  function measureText(font, size, text) {
    context.font = getStyleFont(font, size);
    return context.measureText(text).width;
  }

  Font.measureText = measureText;

  function getCharWidth(font, _char) {
    var width = font.widths.get(_char);

    if (!width) {
      width = measureText(font.name, EM, _char);
      font.widths.set(_char, width);
    }

    return width;
  }

  Font.getCharWidth = getCharWidth;

  function getKerning(font, first, second) {
    var pair = first + second;
    var kerning = font.kernings.get(pair);

    if (!kerning) {
      var widthSecond = getCharWidth(font, second);
      var widthTotal = measureText(font.name, EM, first + second);
      kerning = widthTotal - widthSecond;
      font.kernings.set(pair, kerning);
    }

    return kerning;
  }

  Font.getKerning = getKerning;

  function getAdvance(font, size, first, second) {
    var scale = size / EM;
    var width = getCharWidth(font, first);

    if (!second) {
      return width * scale;
    }

    var kerning = getKerning(font, first, second);
    return kerning * scale;
  }

  Font.getAdvance = getAdvance;

  function getFont(name) {
    var font = fonts.get(name);

    if (!font) {
      font = {
        name: name,
        widths: new Map(),
        kernings: new Map()
      };
      fonts.set(name, font);
    }

    return font;
  }

  Font.getFont = getFont;

  function getLineWidth(font, format, line) {
    var width = 0;

    for (var i = 0; i < line.length; i++) {
      var first = line.charAt(i);
      var second = line.charAt(i + 1);
      var advance = getAdvance(font, format.size, first, second);
      width += advance;
    }

    if (format.letterSpacing && line.length > 1) {
      width += format.letterSpacing * (line.length - 1);
    }

    return width;
  }

  Font.getLineWidth = getLineWidth;

  function getTextWidth(font, format, lines) {
    var width = 0;

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var lineWidth = getLineWidth(font, format, line);

      if (width < lineWidth) {
        width = lineWidth;
      }
    }

    return width;
  }

  Font.getTextWidth = getTextWidth;

  function getTextHeight(format, lines) {
    var height = format.size * lines.length;

    if (format.leading && lines.length > 1) {
      height += format.leading * (lines.length - 1);
    }

    return height;
  }

  Font.getTextHeight = getTextHeight;
})(Font || (Font = {}));

/***/ }),

/***/ "../text/dist/format.js":
/*!******************************!*\
  !*** ../text/dist/format.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextFormat": () => (/* binding */ TextFormat)
/* harmony export */ });
var TextFormat;

(function (TextFormat) {
  TextFormat.defaultTextFormat = {
    font: 'arial',
    size: 15,
    color: 0,
    alpha: 1,
    bold: false,
    italic: false,
    underline: false,
    letterSpacing: 0,
    leading: 0,
    align: 'left',
    verticalAlign: 'top'
  };

  function getValidTextFormat(source, result) {
    var _source$font, _source$size, _source$color, _source$alpha, _source$bold, _source$italic, _source$underline, _source$letterSpacing, _source$leading, _source$align, _source$verticalAlign;

    result.font = (_source$font = source === null || source === void 0 ? void 0 : source.font) !== null && _source$font !== void 0 ? _source$font : TextFormat.defaultTextFormat.font;
    result.size = (_source$size = source === null || source === void 0 ? void 0 : source.size) !== null && _source$size !== void 0 ? _source$size : TextFormat.defaultTextFormat.size;
    result.color = (_source$color = source === null || source === void 0 ? void 0 : source.color) !== null && _source$color !== void 0 ? _source$color : TextFormat.defaultTextFormat.color;
    result.alpha = (_source$alpha = source === null || source === void 0 ? void 0 : source.alpha) !== null && _source$alpha !== void 0 ? _source$alpha : TextFormat.defaultTextFormat.alpha;
    result.bold = (_source$bold = source === null || source === void 0 ? void 0 : source.bold) !== null && _source$bold !== void 0 ? _source$bold : TextFormat.defaultTextFormat.bold;
    result.italic = (_source$italic = source === null || source === void 0 ? void 0 : source.italic) !== null && _source$italic !== void 0 ? _source$italic : TextFormat.defaultTextFormat.italic;
    result.underline = (_source$underline = source === null || source === void 0 ? void 0 : source.underline) !== null && _source$underline !== void 0 ? _source$underline : TextFormat.defaultTextFormat.underline;
    result.letterSpacing = (_source$letterSpacing = source === null || source === void 0 ? void 0 : source.letterSpacing) !== null && _source$letterSpacing !== void 0 ? _source$letterSpacing : TextFormat.defaultTextFormat.letterSpacing;
    result.leading = (_source$leading = source === null || source === void 0 ? void 0 : source.leading) !== null && _source$leading !== void 0 ? _source$leading : TextFormat.defaultTextFormat.leading;
    result.align = (_source$align = source === null || source === void 0 ? void 0 : source.align) !== null && _source$align !== void 0 ? _source$align : TextFormat.defaultTextFormat.align;
    result.verticalAlign = (_source$verticalAlign = source === null || source === void 0 ? void 0 : source.verticalAlign) !== null && _source$verticalAlign !== void 0 ? _source$verticalAlign : TextFormat.defaultTextFormat.verticalAlign;
  }

  TextFormat.getValidTextFormat = getValidTextFormat;

  function getAlignValue(align) {
    switch (align) {
      case 'left':
        return 0;

      case 'center':
        return 0.5;

      case 'right':
        return 1;

      default:
        return 0;
    }
  }

  TextFormat.getAlignValue = getAlignValue;

  function getVerticalAlignValue(align) {
    switch (align) {
      case 'top':
        return 0;

      case 'middle':
        return 0.5;

      case 'bottom':
        return 1;

      default:
        return 0;
    }
  }

  TextFormat.getVerticalAlignValue = getVerticalAlignValue;
})(TextFormat || (TextFormat = {}));

/***/ }),

/***/ "../text/dist/index.js":
/*!*****************************!*\
  !*** ../text/dist/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasTextExtension": () => (/* reexport safe */ _canvas_text__WEBPACK_IMPORTED_MODULE_3__.CanvasTextExtension)
/* harmony export */ });
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ "../text/dist/text.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format */ "../text/dist/format.js");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./font */ "../text/dist/font.js");
/* harmony import */ var _canvas_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas-text */ "../text/dist/canvas-text.js");





/***/ }),

/***/ "../text/dist/text.js":
/*!****************************!*\
  !*** ../text/dist/text.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TEXT": () => (/* binding */ TEXT),
/* harmony export */   "TextExtension": () => (/* binding */ TextExtension)
/* harmony export */ });
/* unused harmony export Text */
/* harmony import */ var _e2d_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/core */ "../core/dist/index.js");
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./format */ "../text/dist/format.js");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./font */ "../text/dist/font.js");




var TEXT = 'text';
var validTextFormat = {};
var Text;

(function (Text) {
  function calculateBounds(component, bounds) {
    var text = component.text;

    if (!text) {
      _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.setEmpty(bounds);
      return;
    }

    var lines = text.split('\n');
    var width = component.width,
        height = component.height;
    var textFormat = component.textFormat;
    _format__WEBPACK_IMPORTED_MODULE_2__.TextFormat.getValidTextFormat(textFormat, validTextFormat);

    if (!width) {
      var font = _font__WEBPACK_IMPORTED_MODULE_3__.Font.getFont(validTextFormat.font);
      width = _font__WEBPACK_IMPORTED_MODULE_3__.Font.getTextWidth(font, validTextFormat, lines);
    }

    if (!height) {
      height = _font__WEBPACK_IMPORTED_MODULE_3__.Font.getTextHeight(validTextFormat, lines);
    }

    var x = _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(component, width);
    var y = _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(component, height);
    bounds.x = x;
    bounds.y = y;
    bounds.width = width;
    bounds.height = height;
  }

  Text.calculateBounds = calculateBounds;
})(Text || (Text = {}));

var bounds = _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.empty();
var TextExtension;

(function (TextExtension) {
  function hitTest(text, engine) {
    var local = engine.pointerEvents.local;
    Text.calculateBounds(text, bounds);
    return _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.contains(bounds, local);
  }

  TextExtension.hitTest = hitTest;

  function init(engine) {
    engine.components.hitTest.set(TEXT, hitTest);
  }

  TextExtension.init = init;
})(TextExtension || (TextExtension = {}));

/***/ }),

/***/ "../tween/dist/easing.js":
/*!*******************************!*\
  !*** ../tween/dist/easing.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LINEAR": () => (/* binding */ LINEAR),
/* harmony export */   "easing": () => (/* binding */ easing)
/* harmony export */ });
/* unused harmony exports QUADRATIC, QUADRATIC_IN, QUADRATIC_OUT, CUBIC, CUBIC_IN, CUBIC_OUT, QUARTIC, QUARTIC_IN, QUARTIC_OUT, QUINTIC, QUINTIC_IN, QUINTIC_OUT, SINUSOIDAL, SINUSOIDAL_IN, SINUSOIDAL_OUT, EXPONENTIAL, EXPONENTIAL_IN, EXPONENTIAL_OUT, CIRCULAR, CIRCULAR_IN, CIRCULAR_OUT, ELASTIC, ELASTIC_IN, ELASTIC_OUT, BACK, BACK_IN, BACK_OUT, BOUNCE, BOUNCE_IN, BOUNCE_OUT */
var _easing;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LINEAR = 'linear';
var QUADRATIC = 'quadratic';
var QUADRATIC_IN = 'quadraticin';
var QUADRATIC_OUT = 'quadraticout';
var CUBIC = 'cubic';
var CUBIC_IN = 'cubicin';
var CUBIC_OUT = 'cubicout';
var QUARTIC = 'quartic';
var QUARTIC_IN = 'quarticin';
var QUARTIC_OUT = 'quarticout';
var QUINTIC = 'quintic';
var QUINTIC_IN = 'quinticin';
var QUINTIC_OUT = 'quinticout';
var SINUSOIDAL = 'quintic';
var SINUSOIDAL_IN = 'quinticin';
var SINUSOIDAL_OUT = 'quinticout';
var EXPONENTIAL = 'exponential';
var EXPONENTIAL_IN = 'exponentialin';
var EXPONENTIAL_OUT = 'exponentialout';
var CIRCULAR = 'circular';
var CIRCULAR_IN = 'circularin';
var CIRCULAR_OUT = 'circularout';
var ELASTIC = 'elastic';
var ELASTIC_IN = 'elasticin';
var ELASTIC_OUT = 'elasticout';
var BACK = 'back';
var BACK_IN = 'backin';
var BACK_OUT = 'backout';
var BOUNCE = 'bounce';
var BOUNCE_IN = 'bouncein';
var BOUNCE_OUT = 'bounceout';
var easing = (_easing = {}, _defineProperty(_easing, LINEAR, function (value) {
  return value;
}), _defineProperty(_easing, QUADRATIC, function (value) {
  if ((value *= 2) < 1) {
    return 0.5 * value * value;
  }

  return -0.5 * (--value * (value - 2) - 1);
}), _defineProperty(_easing, QUADRATIC_IN, function (value) {
  return value * value;
}), _defineProperty(_easing, QUADRATIC_OUT, function (value) {
  return value * (2 - value);
}), _defineProperty(_easing, CUBIC, function (value) {
  if ((value *= 2) < 1) {
    return 0.5 * value * value * value;
  }

  return 0.5 * ((value -= 2) * value * value + 2);
}), _defineProperty(_easing, CUBIC_IN, function (value) {
  return value * value * value;
}), _defineProperty(_easing, CUBIC_OUT, function (value) {
  return --value * value * value + 1;
}), _defineProperty(_easing, QUARTIC, function (value) {
  if ((value *= 2) < 1) {
    return 0.5 * value * value * value * value;
  }

  return -0.5 * ((value -= 2) * value * value * value - 2);
}), _defineProperty(_easing, QUARTIC_IN, function (value) {
  return value * value * value * value;
}), _defineProperty(_easing, QUARTIC_OUT, function (value) {
  return 1 - --value * value * value * value;
}), _defineProperty(_easing, QUINTIC, function (value) {
  if ((value *= 2) < 1) {
    return 0.5 * value * value * value * value * value;
  }

  return 0.5 * ((value -= 2) * value * value * value * value + 2);
}), _defineProperty(_easing, QUINTIC_IN, function (value) {
  return value * value * value * value * value;
}), _defineProperty(_easing, QUINTIC_OUT, function (value) {
  return --value * value * value * value * value + 1;
}), _defineProperty(_easing, SINUSOIDAL, function (value) {
  return 0.5 * (1 - Math.cos(Math.PI * value));
}), _defineProperty(_easing, SINUSOIDAL_IN, function (value) {
  return 1 - Math.cos(value * Math.PI / 2);
}), _defineProperty(_easing, SINUSOIDAL_OUT, function (value) {
  return Math.sin(value * Math.PI / 2);
}), _defineProperty(_easing, EXPONENTIAL, function (value) {
  if (value === 0) {
    return 0;
  }

  if (value === 1) {
    return 1;
  }

  if ((value *= 2) < 1) {
    return 0.5 * Math.pow(1024, value - 1);
  }

  return 0.5 * (-Math.pow(2, -10 * (value - 1)) + 2);
}), _defineProperty(_easing, EXPONENTIAL_IN, function (value) {
  return value === 0 ? 0 : Math.pow(1024, value - 1);
}), _defineProperty(_easing, EXPONENTIAL_OUT, function (value) {
  return value === 1 ? 1 : 1 - Math.pow(2, -10 * value);
}), _defineProperty(_easing, CIRCULAR, function (value) {
  if ((value *= 2) < 1) {
    return -0.5 * (Math.sqrt(1 - value * value) - 1);
  }

  return 0.5 * (Math.sqrt(1 - (value -= 2) * value) + 1);
}), _defineProperty(_easing, CIRCULAR_IN, function (value) {
  return 1 - Math.sqrt(1 - value * value);
}), _defineProperty(_easing, CIRCULAR_OUT, function (value) {
  return Math.sqrt(1 - --value * value);
}), _defineProperty(_easing, ELASTIC, function (value) {
  if (value === 0) {
    return 0;
  }

  if (value === 1) {
    return 1;
  }

  value *= 2;

  if (value < 1) {
    return -0.5 * Math.pow(2, 10 * (value - 1)) * Math.sin((value - 1.1) * 5 * Math.PI);
  }

  return 0.5 * Math.pow(2, -10 * (value - 1)) * Math.sin((value - 1.1) * 5 * Math.PI) + 1;
}), _defineProperty(_easing, ELASTIC_IN, function (value) {
  if (value === 0) {
    return 0;
  }

  if (value === 1) {
    return 1;
  }

  return -Math.pow(2, 10 * (value - 1)) * Math.sin((value - 1.1) * 5 * Math.PI);
}), _defineProperty(_easing, ELASTIC_OUT, function (value) {
  if (value === 0) {
    return 0;
  }

  if (value === 1) {
    return 1;
  }

  return Math.pow(2, -10 * value) * Math.sin((value - 0.1) * 5 * Math.PI) + 1;
}), _defineProperty(_easing, BACK, function (value) {
  var s = 1.70158 * 1.525;

  if ((value *= 2) < 1) {
    return 0.5 * (value * value * ((s + 1) * value - s));
  }

  return 0.5 * ((value -= 2) * value * ((s + 1) * value + s) + 2);
}), _defineProperty(_easing, BACK_IN, function (value) {
  var s = 1.70158;
  return value * value * ((s + 1) * value - s);
}), _defineProperty(_easing, BACK_OUT, function (value) {
  var s = 1.70158;
  return --value * value * ((s + 1) * value + s) + 1;
}), _defineProperty(_easing, BOUNCE, function (value) {
  if (value < 0.5) {
    return easing[BOUNCE_IN](value * 2) * 0.5;
  }

  return easing[BOUNCE_OUT](value * 2 - 1) * 0.5 + 0.5;
}), _defineProperty(_easing, BOUNCE_IN, function (value) {
  return 1 - easing[BOUNCE_OUT](1 - value);
}), _defineProperty(_easing, BOUNCE_OUT, function (value) {
  if (value < 1 / 2.75) {
    return 7.5625 * value * value;
  }

  if (value < 2 / 2.75) {
    return 7.5625 * (value -= 1.5 / 2.75) * value + 0.75;
  }

  if (value < 2.5 / 2.75) {
    return 7.5625 * (value -= 2.25 / 2.75) * value + 0.9375;
  }

  return 7.5625 * (value -= 2.625 / 2.75) * value + 0.984375;
}), _easing);

/***/ }),

/***/ "../tween/dist/index.js":
/*!******************************!*\
  !*** ../tween/dist/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TweenExtension": () => (/* reexport safe */ _tween__WEBPACK_IMPORTED_MODULE_0__.TweenExtension)
/* harmony export */ });
/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tween */ "../tween/dist/tween.js");
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./easing */ "../tween/dist/easing.js");



/***/ }),

/***/ "../tween/dist/tween.js":
/*!******************************!*\
  !*** ../tween/dist/tween.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TweenExtension": () => (/* binding */ TweenExtension)
/* harmony export */ });
/* unused harmony export TWEEN */
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easing */ "../tween/dist/easing.js");

var TWEEN = 'tween';
var TweenExtension;

(function (TweenExtension) {
  function update(component, engine) {
    var tween = component.tween;
    var phases = tween.phases;

    if (!(phases !== null && phases !== void 0 && phases.length)) {
      engine.debug.warning('Animation parts not found');
      return;
    }

    if (tween.time === undefined) {
      tween.time = 0;
    }

    tween.time += engine.updater.time;
    var time = tween.time;
    var offset = 0;
    phases.forEach(function (phase) {
      var _phase$easing$toLower, _phase$easing;

      if (!phase.time) {
        engine.debug.warning('Animation time not set');
        return;
      }

      if (phase.offset !== undefined) {
        offset = phase.offset;
      }

      var easingName = (_phase$easing$toLower = phase === null || phase === void 0 ? void 0 : (_phase$easing = phase.easing) === null || _phase$easing === void 0 ? void 0 : _phase$easing.toLowerCase()) !== null && _phase$easing$toLower !== void 0 ? _phase$easing$toLower : _easing__WEBPACK_IMPORTED_MODULE_0__.LINEAR;
      var easingMethod = _easing__WEBPACK_IMPORTED_MODULE_0__.easing[easingName];

      if (!easingMethod) {
        engine.debug.warning("Unknown easing type: ".concat(_easing__WEBPACK_IMPORTED_MODULE_0__.easing));
        return;
      }

      var value = (time - offset) / phase.time;
      offset += phase.time;

      if (value < 0 || value > 1) {
        return;
      }

      var easingValue = easingMethod(value);

      if (!phase.to) {
        engine.debug.warning('Animation "to" state not found');
        return;
      }

      if (!phase.from) {
        phase.from = {};
      }

      var to = phase.to,
          from = phase.from;
      var state = component;
      Object.keys(to).forEach(function (key) {
        if (from[key] === undefined) {
          var _state$key;

          from[key] = (_state$key = state[key]) !== null && _state$key !== void 0 ? _state$key : 0;
        }

        var fromValue = from[key];
        var toValue = to[key];

        if (typeof fromValue === 'number' && typeof toValue === 'number') {
          var stateValue = fromValue + easingValue * (toValue - fromValue);
          state[key] = stateValue;
        }
      });
    });

    if (tween.loop && tween.time > offset) {
      tween.time = 0;
    }
  }

  TweenExtension.update = update;

  function init(engine) {
    engine.components.properties.set(TWEEN, update);
  }

  TweenExtension.init = init;
})(TweenExtension || (TweenExtension = {}));

/***/ }),

/***/ "./src/artifact.ts":
/*!*************************!*\
  !*** ./src/artifact.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ recursive)
/* harmony export */ });
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ "./src/assets.ts");

function recursive() {
    const container = {
        type: 'container',
        children: {
            type: 'container',
            x: 30,
            y: 30,
            scaleX: 0.9,
            scaleY: 0.9,
            rotation: 0.2,
            alpha: 0.9,
            children: [{
                    type: 'image',
                    src: _assets__WEBPACK_IMPORTED_MODULE_0__.ABILITY_WOLF,
                    scale: 0.3,
                }],
            onUpdate(time) {
                this.rotation += time * 0.05;
            },
        },
    };
    container.children.children.push(container);
    return container;
}


/***/ }),

/***/ "./src/assets.ts":
/*!***********************!*\
  !*** ./src/assets.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANIMALIST": () => (/* binding */ ANIMALIST),
/* harmony export */   "ARCHER": () => (/* binding */ ARCHER),
/* harmony export */   "ANIMALIST_IMAGE": () => (/* binding */ ANIMALIST_IMAGE),
/* harmony export */   "ARCHER_IMAGE": () => (/* binding */ ARCHER_IMAGE),
/* harmony export */   "ABILITY_FOX": () => (/* binding */ ABILITY_FOX),
/* harmony export */   "ABILITY_WOLF": () => (/* binding */ ABILITY_WOLF),
/* harmony export */   "BACKGROUND": () => (/* binding */ BACKGROUND),
/* harmony export */   "TEST_CANVAS": () => (/* binding */ TEST_CANVAS)
/* harmony export */ });
const IMAGE_ASSETS = 'assets/';
const ANIMALIST = 'id:animalist';
const ARCHER = 'id:archer';
const ANIMALIST_IMAGE = `${IMAGE_ASSETS}AnimalistFox1_image.png`;
const ARCHER_IMAGE = `${IMAGE_ASSETS}Archer2_hunter_image.png`;
const ABILITY_FOX = `${IMAGE_ASSETS}AnimalistAbility_Fox.png`;
const ABILITY_WOLF = `${IMAGE_ASSETS}AnimalistAbility_Wolf.png`;
const BACKGROUND = `${IMAGE_ASSETS}jungle_background.jpg`;
const TEST_CANVAS = 'test.canvas';


/***/ }),

/***/ "./src/engine/engine.ts":
/*!******************************!*\
  !*** ./src/engine/engine.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomEngine)
/* harmony export */ });
/* harmony import */ var _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/canvas-engine */ "../canvas-engine/dist/index.js");
/* harmony import */ var _e2d_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/text */ "../text/dist/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ "./src/engine/image.ts");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform */ "./src/engine/platform.ts");




class CustomEngine extends _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasEngine {
    constructor(module = {}) {
        module.Platform = module.Platform ?? _platform__WEBPACK_IMPORTED_MODULE_2__.default;
        super(module);
        _e2d_text__WEBPACK_IMPORTED_MODULE_1__.CanvasTextExtension.init(this);
        _image__WEBPACK_IMPORTED_MODULE_3__.CustomImageExtension.init(this);
    }
}


/***/ }),

/***/ "./src/engine/image.ts":
/*!*****************************!*\
  !*** ./src/engine/image.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomImageExtension": () => (/* binding */ CustomImageExtension)
/* harmony export */ });
/* harmony import */ var _e2d_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/core */ "../core/dist/index.js");
/* harmony import */ var _e2d_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/image */ "../image/dist/index.js");


var CustomImageExtension;
(function (CustomImageExtension) {
    function render(image, engine) {
        if (!image.src) {
            return;
        }
        const { matrix, colorTransform } = engine.renderer.getContext();
        if (colorTransform.alphaMultiplier <= 0) {
            return;
        }
        const resource = engine.resources.get(image.src);
        if (!resource?.loaded || !resource?.image) {
            return;
        }
        const context2d = engine.platform.getContext();
        context2d.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
        const { width, height } = resource.image;
        const x = _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(image, width);
        const y = _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(image, height);
        context2d.globalAlpha = 1;
        context2d.fillStyle = '';
        context2d.strokeStyle = 'lightgray';
        context2d.strokeRect(x, y, width, height);
    }
    CustomImageExtension.render = render;
    function init(engine) {
        _e2d_image__WEBPACK_IMPORTED_MODULE_1__.ImageExtension.init(engine);
        engine.components.render.set(_e2d_image__WEBPACK_IMPORTED_MODULE_1__.IMAGE, render);
    }
    CustomImageExtension.init = init;
})(CustomImageExtension || (CustomImageExtension = {}));


/***/ }),

/***/ "./src/engine/platform.ts":
/*!********************************!*\
  !*** ./src/engine/platform.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomPlatform)
/* harmony export */ });
/* harmony import */ var _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/canvas-engine */ "../canvas-engine/dist/index.js");

class CustomPlatform extends _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPlatform {
    clear() {
        const context2d = this.getContext();
        context2d.fillStyle = 'black';
        context2d.setTransform();
        context2d.fillRect(0, 0, context2d.canvas.width, context2d.canvas.height);
        context2d.fillStyle = '';
    }
}


/***/ }),

/***/ "./src/engine/resources.ts":
/*!*********************************!*\
  !*** ./src/engine/resources.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomResourceManager)
/* harmony export */ });
/* harmony import */ var _e2d_resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/resources */ "../resources/dist/index.js");

class CustomResourceManager {
    constructor() {
        this.aliases = new Map();
        this.resources = new Map();
        this.resolve = (asset, engine) => {
            if (asset.indexOf('id:') === 0) {
                const id = asset.slice(3);
                let resource = this.resources.get(id);
                if (!resource) {
                    const url = this.aliases.get(id);
                    if (url) {
                        resource = _e2d_resources__WEBPACK_IMPORTED_MODULE_0__.ImageResource.resolve(url, engine);
                        this.resources.set(id, resource);
                    }
                    else {
                        engine.debug.warning(`Resource with id: ${asset} not found`);
                    }
                }
                return resource;
            }
            return null;
        };
    }
    init(engine) {
        engine.resources.resolvers.add(this.resolve);
    }
}


/***/ }),

/***/ "./src/fps.ts":
/*!********************!*\
  !*** ./src/fps.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fps": () => (/* binding */ fps)
/* harmony export */ });
function fps(statistics) {
    return {
        type: 'text',
        text: 'fps',
        frames: 0,
        frameTime: 0,
        updateTime: 0,
        renderTime: 0,
        textFormat: {
            size: 20,
            color: 0xffffff,
        },
        onUpdate(time) {
            this.frameTime += time;
            this.updateTime += statistics.getUpdateTime();
            this.renderTime += statistics.getRenderTime();
            this.frames++;
            if (this.frameTime >= 1) {
                const frameTime = Math.ceil(1000 * this.frameTime / this.frames);
                const updateTime = (this.updateTime / this.frames).toFixed(2);
                const renderTime = (this.renderTime / this.frames).toFixed(2);
                this.text = `fps: ${this.frames}, ${frameTime} ms\nupdate: ${updateTime} ms\nrender: ${renderTime} ms`;
                this.frameTime = 0;
                this.updateTime = 0;
                this.renderTime = 0;
                this.frames = 0;
            }
        },
    };
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ "./src/assets.ts");
/* harmony import */ var _artifact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artifact */ "./src/artifact.ts");
/* harmony import */ var _fps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fps */ "./src/fps.ts");
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit */ "./src/unit.ts");




function main(statistics) {
    function onUnitClick(data) {
        data.health = Math.random();
        console.log('onUnitClick', data.name);
    }
    return {
        type: 'container',
        children: {
            background: {
                type: 'image',
                src: _assets__WEBPACK_IMPORTED_MODULE_0__.BACKGROUND,
                scaleX: 1,
                scaleY: 1,
            },
            figure: {
                type: 'shape',
                data: {
                    type: 'rectangle',
                    x: 20,
                    y: 20,
                    width: 100,
                    height: 50,
                    fill: 0xff00ff,
                    stroke: 0x0000ff,
                },
            },
            shapes: {
                type: 'shape',
                data: [
                    {
                        type: 'ellipse',
                        x: 100,
                        y: 100,
                        radius: 50,
                        fill: { type: 'solid', color: 0xffff00, alpha: 0.5 },
                    },
                    {
                        type: 'path',
                        data: 'M 110, 110 H 190 V 190 H 110 Z',
                        fill: 0xff00ff,
                    },
                    {
                        type: 'path',
                        data: [
                            { type: 'moveTo', x: 0, y: 0 },
                            { type: 'lineTo', x: 100, y: 0 },
                            { type: 'lineTo', x: 100, y: 100 },
                            { type: 'lineTo', x: 0, y: 100 },
                            { type: 'lineTo', x: 0, y: 0 },
                        ],
                        fill: { color: 0x999999, alpha: 0.5 },
                        stroke: 0x000000,
                    },
                ],
            },
            units: {
                type: 'container',
                children: [
                    (0,_unit__WEBPACK_IMPORTED_MODULE_1__.unit)({
                        name: 'Archer', health: 1, image: _assets__WEBPACK_IMPORTED_MODULE_0__.ARCHER, onClick: onUnitClick,
                    }),
                    (0,_unit__WEBPACK_IMPORTED_MODULE_1__.unit)({
                        name: 'Animalist', health: 1, image: _assets__WEBPACK_IMPORTED_MODULE_0__.ANIMALIST, onClick: onUnitClick,
                    }),
                ],
            },
            artifact: {
                type: 'container',
                x: 300,
                y: 350,
                children: [(0,_artifact__WEBPACK_IMPORTED_MODULE_2__.default)()],
            },
            map: {
                type: 'image',
                y: 450,
                scaleX: 0.2,
                scaleY: 0.2,
                alpha: 0.5,
                src: 'test.canvas',
                onPointerOver() {
                    this.alpha = 1;
                },
                onPointerOut() {
                    this.alpha = 0.5;
                },
            },
            abilityFox: {
                type: 'image',
                src: _assets__WEBPACK_IMPORTED_MODULE_0__.ABILITY_FOX,
                x: 450,
                y: 500,
                scale: 0.5,
                tint: {
                    color: 0x00ff00,
                    value: 1,
                },
                onUpdate(time) {
                    if (this.tint) {
                        this.tint.value += time;
                        if (this.tint.value >= 1) {
                            this.tint.value = 0;
                        }
                    }
                },
                onPointerDown(e) {
                    if (this.tint) {
                        this.tint = null;
                    }
                    else {
                        this.tint = {
                            color: 0x00ff00,
                            value: 1,
                        };
                    }
                    console.log('fox', e);
                },
            },
            abilityWolf: {
                type: 'container',
                x: 350,
                y: 400,
                children: {
                    type: 'image',
                    src: _assets__WEBPACK_IMPORTED_MODULE_0__.ABILITY_WOLF,
                    scale: 0.5,
                    alpha: 1,
                    tween: {
                        loop: true,
                        phases: [
                            {
                                time: 1,
                                to: { x: 200 },
                            },
                            {
                                easing: 'cubicout',
                                time: 1,
                                to: { y: 200, alpha: 0.5 },
                            },
                            {
                                easing: 'quadraticIn',
                                time: 1,
                                to: { x: 0, alpha: 1 },
                            },
                            {
                                easing: 'quadraticOut',
                                time: 1,
                                to: { y: 0 },
                            },
                        ],
                    },
                },
            },
            fps: (0,_fps__WEBPACK_IMPORTED_MODULE_3__.fps)(statistics),
        },
        start() {
            console.log('start');
        },
    };
}


/***/ }),

/***/ "./src/unit.ts":
/*!*********************!*\
  !*** ./src/unit.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unit": () => (/* binding */ unit)
/* harmony export */ });
const SPEED = 100;
function unit(props) {
    function getTitle() {
        return `${props.name}\n${Math.round(props.health * 100)}%`;
    }
    return {
        type: 'container',
        x: 50 + Math.random() * 400,
        y: 200,
        rotation: 0,
        updateMove(time) {
            this.x += this.children.image.scaleX * time * SPEED;
            if (this.x < 50) {
                this.children.image.scaleX = 1;
            }
            else if (this.x > 400) {
                this.children.image.scaleX = -1;
            }
        },
        onUpdate(time) {
            this.updateMove(time);
        },
        children: {
            text: {
                type: 'text',
                text: getTitle(),
                textFormat: {
                    size: 15,
                    color: 0xffdddd,
                    align: 'center',
                    verticalAlign: 'middle',
                },
                border: 0x00ff00,
                y: -30,
                height: 35,
                pivotX: 0.5,
                onPointerDown: () => {
                    props.onClick(props);
                },
                onUpdate() {
                    this.text = getTitle();
                },
            },
            image: {
                type: 'image',
                src: props.image,
                scaleX: Math.random() > 0.5 ? 1 : -1,
                pivotX: 0.5,
                onPointerDown: () => {
                    props.onClick(props);
                },
            },
        },
    };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/* harmony import */ var _e2d_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/core */ "../core/dist/index.js");
/* harmony import */ var _e2d_tween__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/tween */ "../tween/dist/index.js");
/* harmony import */ var _e2d_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @e2d/text */ "../text/dist/index.js");
/* harmony import */ var _e2d_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @e2d/image */ "../image/dist/index.js");
/* harmony import */ var _e2d_shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @e2d/shape */ "../shape/dist/index.js");
/* harmony import */ var _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @e2d/canvas-engine */ "../canvas-engine/dist/index.js");
/* harmony import */ var _engine_resources__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./engine/resources */ "./src/engine/resources.ts");
/* harmony import */ var _engine_engine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./engine/engine */ "./src/engine/engine.ts");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main */ "./src/main.ts");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets */ "./src/assets.ts");










document.body.style.margin = '0';
document.body.style.padding = '0';
const engine = new _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_5__.CanvasEngine();
_e2d_image__WEBPACK_IMPORTED_MODULE_3__.CanvasImageColorExtension.init(engine);
_e2d_text__WEBPACK_IMPORTED_MODULE_2__.CanvasTextExtension.init(engine);
_e2d_shape__WEBPACK_IMPORTED_MODULE_4__.CanvasShapeExtension.init(engine);
_e2d_tween__WEBPACK_IMPORTED_MODULE_1__.TweenExtension.init(engine);
_e2d_core__WEBPACK_IMPORTED_MODULE_0__.MouseExtension.init(engine);
engine.screen.fullscreen = true;
engine.ticker.play();
document.body.appendChild(engine.platform.view);
const statistics = {
    getUpdateTime() {
        return engine.updater.elapsedTime;
    },
    getRenderTime() {
        return engine.renderer.elapsedTime;
    },
};
const app = (0,_main__WEBPACK_IMPORTED_MODULE_6__.default)(statistics);
app.start();
engine.root = app;
console.log(app);
setTimeout(() => engine.ticker.pause(), 5000);
setTimeout(() => engine.ticker.play(), 10000);
const customEngine = new _engine_engine__WEBPACK_IMPORTED_MODULE_7__.default();
customEngine.screen.fullscreen = false;
customEngine.screen.height = 600;
customEngine.updater.enabled = false;
customEngine.root = engine.root;
customEngine.ticker.play();
customEngine.platform.view.style.position = 'absolute';
customEngine.platform.view.style.top = '0px';
customEngine.platform.view.style.left = '600px';
document.body.appendChild(customEngine.platform.view);
engine.resources.resources.set(_assets__WEBPACK_IMPORTED_MODULE_8__.TEST_CANVAS, {
    asset: _assets__WEBPACK_IMPORTED_MODULE_8__.TEST_CANVAS,
    image: customEngine.platform.view,
    loaded: true,
});
customEngine.resources.resources.set(_assets__WEBPACK_IMPORTED_MODULE_8__.TEST_CANVAS, {
    asset: _assets__WEBPACK_IMPORTED_MODULE_8__.TEST_CANVAS,
    image: engine.platform.view,
    loaded: true,
});
const resourceManager = new _engine_resources__WEBPACK_IMPORTED_MODULE_9__.default();
resourceManager.aliases.set(_assets__WEBPACK_IMPORTED_MODULE_8__.ARCHER.replace('id:', ''), _assets__WEBPACK_IMPORTED_MODULE_8__.ARCHER_IMAGE);
resourceManager.aliases.set(_assets__WEBPACK_IMPORTED_MODULE_8__.ANIMALIST.replace('id:', ''), _assets__WEBPACK_IMPORTED_MODULE_8__.ANIMALIST_IMAGE);
resourceManager.init(engine);
resourceManager.init(customEngine);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jYW52YXMtZW5naW5lL2Rpc3QvZW5naW5lLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NhbnZhcy1lbmdpbmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jYW52YXMtZW5naW5lL2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY2FudmFzLWVuZ2luZS9kaXN0L3BsYXRmb3JtLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvY29yZS9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2NvcmUvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvZmVhdHVyZXMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvZmVhdHVyZXMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ZlYXR1cmVzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9mZWF0dXJlcy9wb2ludGVyLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvZmVhdHVyZXMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ZlYXR1cmVzL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvZmVhdHVyZXMvc2NyZWVuLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9mZWF0dXJlcy90aWNrZXIuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ZlYXR1cmVzL3VwZGF0ZXIuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9pbnB1dC9tb3VzZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvaW50ZXJmYWNlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9pbnRlcmZhY2VzL3Bpdm90LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9pbnRlcmZhY2VzL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ludGVyZmFjZXMvc291cmNlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9pbnRlcmZhY2VzL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvaW50ZXJmYWNlcy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZ2VvbS9kaXN0L2JvdW5kcy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9nZW9tL2Rpc3QvY29sb3ItdHJhbnNmb3JtLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9nZW9tL2Rpc3QvbWF0cml4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9wb2ludC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9nZW9tL2Rpc3QvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2ltYWdlL2Rpc3QvY2FudmFzLWltYWdlLWNvbG9yLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2ltYWdlL2Rpc3QvY2FudmFzLWltYWdlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2ltYWdlL2Rpc3QvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vaW1hZ2UvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9yZXNvdXJjZXMvZGlzdC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2NhbnZhcy9lbGxpcHNlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvY2FudmFzL3BhdGguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vc2hhcGUvZGlzdC9jYW52YXMvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvY2FudmFzL3NoYXBlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvY2FudmFzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2NhbnZhcy9zdHlsZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2RhdGEvZGF0YS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2RhdGEvcGF0aC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2RhdGEvc3RyaW5nLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvZ3JhcGhpY3MuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vc2hhcGUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L3NoYXBlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3RleHQvZGlzdC9jYW52YXMtdGV4dC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90ZXh0L2Rpc3QvZm9udC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90ZXh0L2Rpc3QvZm9ybWF0LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3RleHQvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90ZXh0L2Rpc3QvdGV4dC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90d2Vlbi9kaXN0L2Vhc2luZy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90d2Vlbi9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3R3ZWVuL2Rpc3QvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvYXJ0aWZhY3QudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvYXNzZXRzLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2VuZ2luZS9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvZW5naW5lL2ltYWdlLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2VuZ2luZS9wbGF0Zm9ybS50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9lbmdpbmUvcmVzb3VyY2VzLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2Zwcy50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9tYWluLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL3VuaXQudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BlMmQvc2FtcGxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiQ2FudmFzRW5naW5lIiwibW9kdWxlIiwiUGxhdGZvcm0iLCJDYW52YXNQbGF0Zm9ybSIsIkVuZ2luZSIsInBvaW50MSIsIlBvaW50IiwicG9pbnQyIiwiQ2FudmFzUGF0dGVybnMiLCJjb2xvclBhdHRlcm4iLCJjb2xvciIsImFscGhhIiwiY3QiLCJyIiwiZyIsImIiLCJhIiwiQ29sb3JUcmFuc2Zvcm0iLCJyZWRNdWx0aXBsaWVyIiwicmVkT2Zmc2V0IiwiZ3JlZW5NdWx0aXBsaWVyIiwiZ3JlZW5PZmZzZXQiLCJibHVlTXVsdGlwbGllciIsImJsdWVPZmZzZXQiLCJhbHBoYU11bHRpcGxpZXIiLCJhbHBoYU9mZnNldCIsImFkZEdyYWRpZW50Q29sb3JzIiwicGF0dGVybiIsImNvbG9ycyIsImFscGhhcyIsInJhdGlvcyIsImNvbG9yVHJhbnNmb3JtIiwiaSIsImxlbmd0aCIsInJnYiIsInJhdGlvIiwiYWRkQ29sb3JTdG9wIiwicmFkaWFsR3JhZGllbnRQYXR0ZXJuIiwibWF0cml4IiwiY29udGV4dCIsIngiLCJ5IiwiTWF0cml4IiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJ0eCIsInR5IiwiTWF0aCIsImFicyIsImxpbmVhckdyYWRpZW50UGF0dGVybiIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYml0bWFwUGF0dGVybiIsImltYWdlIiwicmVwZWF0IiwiY3JlYXRlUGF0dGVybiIsImFyZ3VtZW50cyIsInZpZXciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0cyIsImdldENvbnRleHQiLCJjdXN0b21Db250ZXh0cyIsInB1c2giLCJwb3AiLCJlbmdpbmUiLCJkZWJ1ZyIsIndhcm5pbmciLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImNsZWFyIiwidXBkYXRlU2l6ZSIsInNldFRyYW5zZm9ybSIsImNsZWFyUmVjdCIsInNjcmVlbiIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwicGl4ZWxSYXRpbyIsImdldFBpeGVsUmF0aW8iLCJ2aWV3V2lkdGgiLCJmbG9vciIsInZpZXdIZWlnaHQiLCJzdHlsZSIsIkNPTlRBSU5FUiIsIkNvbnRhaW5lciIsIm51bUNoaWxkcmVuIiwiY29udGFpbmVyIiwiY2hpbGRyZW4iLCJBcnJheSIsImlzQXJyYXkiLCJ0eXBlIiwia2V5cyIsIk9iamVjdCIsIkNvbnRhaW5lckV4dGVuc2lvbiIsInJlbmRlciIsInJlbmRlcmVyIiwiZGVwdGgiLCJjb21wb25lbnQiLCJyZW5kZXJDb21wb25lbnQiLCJjb21wb25lbnRzTWFwIiwidXBkYXRlIiwidXBkYXRlciIsInVwZGF0ZUNvbXBvbmVudCIsImhpdFRlc3QiLCJwb2ludGVyRXZlbnRzIiwicmVzdWx0IiwiZGlzcGF0Y2hDb21wb25lbnQiLCJpbml0IiwiY29tcG9uZW50cyIsInNldCIsIkNvbXBvbmVudHMiLCJTY3JlZW4iLCJVcGRhdGVyIiwiUmVuZGVyZXIiLCJQb2ludGVyRXZlbnRzIiwiVGlja2VyIiwiRGVidWciLCJSZXNvdXJjZXMiLCJwbGF0Zm9ybSIsInRpY2tlciIsInJlc291cmNlcyIsIkVuZ2luZUZlYXR1cmUiLCJwcm9wZXJ0aWVzIiwiTWFwIiwibG9hZGVkIiwiZXJyb3JzIiwid2FybmluZ3MiLCJlbmFibGVkIiwiY29uc29sZSIsImxvZyIsImFyZ3MiLCJpZCIsIlN0cmluZyIsImNvdW50IiwiZ2V0IiwiZXJyb3IiLCJ3YXJuIiwiZ2xvYmFsIiwibG9jYWwiLCJwb2ludGVySWQiLCJwb2ludGVyVHlwZSIsInJvb3QiLCJiYXNlIiwicGFyZW50IiwiRGlzcGxheSIsIlBvaW50ZXIiLCJoYW5kbGVyIiwiVHJhbnNmb3JtIiwicG9pbnRlck92ZXIiLCJlbGFwc2VkVGltZSIsInN0YXJ0VGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiYmVnaW4iLCJnZXRNYXRyaXgiLCJlbmQiLCJyZXNvbHZlcnMiLCJTZXQiLCJhc3NldCIsInJlc291cmNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnVsbHNjcmVlbiIsImQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiZnJhbWVSYXRlIiwicGF1c2VkIiwidGltZSIsInVwZGF0ZUZyYW1lIiwiY3VycmVudFRpbWUiLCJkZWx0YVRpbWUiLCJ1cGRhdGVOZXh0RnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJVcGRhdGUiLCJ1cGRhdGVQcm9wZXJ0aWVzIiwiZm9yRWFjaCIsInByb3BlcnR5IiwiZGlzcGF0Y2hFdmVudCIsImV2ZW50IiwiY2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50TGVmdCIsImNsaWVudFkiLCJ0b3AiLCJjbGllbnRUb3AiLCJkaXNwYXRjaCIsInByZXZlbnREZWZhdWx0IiwiTW91c2VFeHRlbnNpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiaXNWaXNpYmxlIiwidmlzaWJsZSIsIlBpdm90IiwiZ2V0WCIsInBpdm90IiwicGl2b3RYIiwiZ2V0WSIsInBpdm90WSIsImhhc1ZhbHVlcyIsImlzUG9pbnRlck92ZXIiLCJwb2ludGVyIiwiaXNQb2ludGVyRW5hYmxlZCIsInBvaW50ZXJFbmFibGVkIiwiaGFuZGxlck5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiU291cmNlIiwiZ2V0UmVzb3VyY2UiLCJzb3VyY2UiLCJzcmMiLCJpc0xvYWRlZCIsInRyYW5zZm9ybSIsImMiLCJyb3RhdGlvbiIsInNjYWxlWCIsInNjYWxlIiwic2NhbGVZIiwiY29zIiwic2luIiwiZ2V0Q29sb3JUcmFuc2Zvcm0iLCJ0aW50IiwidmFsdWUiLCJ2YWx1ZUludmVydGVkIiwiaXNFbmFibGVkIiwib25VcGRhdGUiLCJCb3VuZHMiLCJlbXB0eSIsIm1pblgiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJtaW5ZIiwibWF4WCIsIk1JTl9WQUxVRSIsIm1heFkiLCJzZXRFbXB0eSIsImJvdW5kcyIsImlzRW1wdHkiLCJ0b1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInRlc3RYIiwidGVzdFkiLCJ0ZXN0IiwidGVzdFBvaW50IiwicG9pbnQiLCJpc0VtcHR5V2l0aEFscGhhIiwiY29weSIsImZyb20iLCJ0byIsImNvbmNhdCIsImN0MSIsImN0MCIsIm1hdHJpeDAiLCJtYXRyaXgxIiwiZ2V0RGV0ZXJtaW5hbnQiLCJpbnZlcnQiLCJkZXRlcm1pbmFudCIsInRyYW5zZm9ybVBvaW50IiwidHJhbnNmb3JtUG9pbnRMb2NhbCIsInRyYW5zZm9ybUludmVyc2VQb2ludCIsInRyYW5zZm9ybUJvdW5kcyIsInJ4IiwicnkiLCJyciIsInJiIiwibngxIiwibnkxIiwibngyIiwibnkyIiwibngzIiwibnkzIiwibng0Iiwibnk0IiwicmlnaHQiLCJib3R0b20iLCJzcXJ0IiwiYW5nbGUiLCJhdGFuMiIsImVxdWFscyIsInBvaW50MCIsInRhcmdldCIsIm5vcm1hbGl6ZSIsInRoaWNrbmVzcyIsImRpc3RhbmNlIiwiZHgiLCJkeSIsImludGVycG9sYXRlIiwicG9sYXIiLCJSZWN0YW5nbGUiLCJjb250YWlucyIsIkNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24iLCJjb250ZXh0MmQiLCJnbG9iYWxBbHBoYSIsImRyYXdJbWFnZSIsImN1c3RvbUNvbnRleHQiLCJjcmVhdGVDdXN0b21Db250ZXh0IiwiaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwicm0iLCJnbSIsImJtIiwiYW0iLCJybyIsImdvIiwiYm8iLCJhbyIsImRhdGEiLCJwdXRJbWFnZURhdGEiLCJkZXN0cm95Q3VzdG9tQ29udGV4dCIsIkltYWdlRXh0ZW5zaW9uIiwiSU1BR0UiLCJDYW52YXNJbWFnZUV4dGVuc2lvbiIsIkltYWdlIiwiY2FsY3VsYXRlQm91bmRzIiwiSW1hZ2VSZXNvdXJjZSIsImV4dGVuc2lvbiIsInNwbGl0Iiwib25sb2FkIiwib25lcnJvciIsImUiLCJhZGQiLCJQSV8yIiwiUEkiLCJhcHBseUVsbGlwc2UiLCJyYWRpdXMiLCJyYWRpdXNYIiwicmFkaXVzWSIsImVsbGlwc2UiLCJhcHBseUNvbW1hbmQiLCJjb21tYW5kIiwibW92ZVRvIiwibGluZVRvIiwiY3VydmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJjeCIsImN5IiwiY3ViaWNDdXJ2ZVRvIiwiYmV6aWVyQ3VydmVUbyIsInN4Iiwic3kiLCJhcHBseVBhdGgiLCJiZWdpblBhdGgiLCJjbG9zZVBhdGgiLCJhcHBseVJlY3RhbmdsZSIsInJlY3QiLCJvZmZzZXQiLCJyZW5kZXJHcmFwaGljcyIsImZpbGwiLCJzdHJva2UiLCJoYXNGaWxsIiwiaGFzU3Ryb2tlIiwiZXhpc3QiLCJwYXRoIiwiYXBwbHlTdHJpbmciLCJzZXRGaWxsU3R5bGUiLCJzZXRTdHJva2VTdHlsZSIsIkNhbnZhc1NoYXBlRXh0ZW5zaW9uIiwic2hhcGUiLCJTaGFwZSIsIlNoYXBlRXh0ZW5zaW9uIiwiU0hBUEUiLCJyZWFkZXIiLCJHcmFwaGljc1N0cmluZ1JlYWRlciIsInNldFBhdGgiLCJyZWFkTmV4dCIsImdldENvbW1hbmQiLCJlbXB0eU1hdHJpeCIsImVtcHR5QXJyYXkiLCJnZXRDYW52YXNQYXR0ZXJuIiwic29saWQiLCJtbCIsImNsIiwiYWwiLCJybCIsIm1yIiwiY3IiLCJhciIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiUmVjdGFuZ2xlRGF0YSIsIkVsbGlwc2VEYXRhIiwiUGF0aERhdGEiLCJwYXRoRGF0YSIsIkdyYXBoaWNzU3RyaW5nIiwiUGF0aENvbW1hbmQiLCJHcmFwaGljc0RhdGEiLCJOVU1CRVJTX0NPVU5UIiwiTSIsIm0iLCJMIiwibCIsIkgiLCJoIiwiViIsInYiLCJDIiwiUyIsInMiLCJRIiwicSIsIlQiLCJ0IiwiR3JhcGhpY3NTdHJpbmdTdHJlYW0iLCJidWZmZXIiLCJjb21tYW5kUmVnZXgiLCJudW1iZXJSZWdleCIsImxhc3RJbmRleCIsImNvbW1hbmRNYXRjaCIsImV4ZWMiLCJpbmRleCIsIm51bWJlck1hdGNoIiwicGFyc2VGbG9hdCIsInN0cmVhbSIsImNvbW1hbmRFeGlzdHMiLCJsYXN0WCIsImxhc3RZIiwicGFyc2UiLCJnZXRCdWZmZXIiLCJlMCIsImUxIiwiZTIiLCJlMyIsImU0IiwiZTUiLCJHcmFwaGljcyIsInNtb290aCIsInNwcmVhZCIsImludGVycG9sYXRpb24iLCJmb2NhbFBvaW50UmF0aW8iLCJwaXhlbEhpbnRpbmciLCJzY2FsZU1vZGUiLCJjYXBzIiwiam9pbnRzIiwibWl0ZXJMaW1pdCIsImdldFBhdGgiLCJlbGxpcHNlV2lkdGgiLCJlbGxpcHNlSGVpZ2h0IiwidyIsImsiLCJveCIsIm95IiwieGUiLCJ5ZSIsInhtIiwieW0iLCJjcmVhdGVEYXRhIiwiZ3JhcGhpY3NEYXRhIiwidW5kZWZpbmVkIiwiZ2V0R3JhcGhpY3MiLCJ2YWxpZFRleHRGb3JtYXQiLCJDYW52YXNUZXh0RXh0ZW5zaW9uIiwidGV4dCIsImxpbmVzIiwidGV4dEZvcm1hdCIsImJvcmRlciIsImJhY2tncm91bmQiLCJUZXh0Rm9ybWF0IiwiZm9ybWF0U2l6ZSIsInNpemUiLCJmb3JtYXRMZXR0ZXJTcGFjaW5nIiwibGV0dGVyU3BhY2luZyIsImZvcm1hdExlYWRpbmciLCJsZWFkaW5nIiwiZm9udCIsIkZvbnQiLCJ0ZXh0V2lkdGgiLCJ0ZXh0SGVpZ2h0IiwicmVhbFdpZHRoIiwicmVhbEhlaWdodCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiYWxpZ25WZXJ0aWNhbFZhbHVlIiwidmVydGljYWxBbGlnbiIsInRleHRCYXNlbGluZSIsImxpbmUiLCJhbGlnblZhbHVlIiwiYWxpZ24iLCJqIiwiZmlyc3QiLCJzZWNvbmQiLCJhZHZhbmNlIiwiZmlsbFRleHQiLCJUZXh0RXh0ZW5zaW9uIiwiVEVYVCIsIkVNIiwiZm9udHMiLCJnZXRTdHlsZUZvbnQiLCJtZWFzdXJlVGV4dCIsImdldENoYXJXaWR0aCIsImNoYXIiLCJ3aWR0aHMiLCJuYW1lIiwiZ2V0S2VybmluZyIsInBhaXIiLCJrZXJuaW5nIiwia2VybmluZ3MiLCJ3aWR0aFNlY29uZCIsIndpZHRoVG90YWwiLCJnZXRBZHZhbmNlIiwiZ2V0Rm9udCIsImdldExpbmVXaWR0aCIsImZvcm1hdCIsImdldFRleHRXaWR0aCIsImdldFRleHRIZWlnaHQiLCJkZWZhdWx0VGV4dEZvcm1hdCIsImJvbGQiLCJpdGFsaWMiLCJ1bmRlcmxpbmUiLCJnZXRWYWxpZFRleHRGb3JtYXQiLCJnZXRBbGlnblZhbHVlIiwiZ2V0VmVydGljYWxBbGlnblZhbHVlIiwiVGV4dCIsIkxJTkVBUiIsIlFVQURSQVRJQyIsIlFVQURSQVRJQ19JTiIsIlFVQURSQVRJQ19PVVQiLCJDVUJJQyIsIkNVQklDX0lOIiwiQ1VCSUNfT1VUIiwiUVVBUlRJQyIsIlFVQVJUSUNfSU4iLCJRVUFSVElDX09VVCIsIlFVSU5USUMiLCJRVUlOVElDX0lOIiwiUVVJTlRJQ19PVVQiLCJTSU5VU09JREFMIiwiU0lOVVNPSURBTF9JTiIsIlNJTlVTT0lEQUxfT1VUIiwiRVhQT05FTlRJQUwiLCJFWFBPTkVOVElBTF9JTiIsIkVYUE9ORU5USUFMX09VVCIsIkNJUkNVTEFSIiwiQ0lSQ1VMQVJfSU4iLCJDSVJDVUxBUl9PVVQiLCJFTEFTVElDIiwiRUxBU1RJQ19JTiIsIkVMQVNUSUNfT1VUIiwiQkFDSyIsIkJBQ0tfSU4iLCJCQUNLX09VVCIsIkJPVU5DRSIsIkJPVU5DRV9JTiIsIkJPVU5DRV9PVVQiLCJlYXNpbmciLCJwb3ciLCJUV0VFTiIsIlR3ZWVuRXh0ZW5zaW9uIiwidHdlZW4iLCJwaGFzZXMiLCJwaGFzZSIsImVhc2luZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImVhc2luZ01ldGhvZCIsImVhc2luZ1ZhbHVlIiwic3RhdGUiLCJrZXkiLCJmcm9tVmFsdWUiLCJ0b1ZhbHVlIiwic3RhdGVWYWx1ZSIsImxvb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTyxJQUFNQSxZQUFiO0FBQUE7O0FBQUE7O0FBQ0ksMEJBQXlCO0FBQUE7O0FBQUEsUUFBYkMsTUFBYSx1RUFBSixFQUFJOztBQUFBOztBQUNyQkEsVUFBTSxDQUFDQyxRQUFQLHVCQUFrQkQsTUFBTSxDQUFDQyxRQUF6QiwrREFBcUNDLHFEQUFyQztBQURxQiw2QkFFZkYsTUFGZTtBQUd4Qjs7QUFKTDtBQUFBLEVBQWtDRyw2Q0FBbEMsRTs7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QUFHLFVBQVUsQ0FBQztBQUN2RCxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztBQUM3QyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUNoRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBR3RELE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FDN0IsZ0RBQVcsRUFDWDtJQUNDLEtBQUssRUFBRSxnREFBVztJQUNsQixLQUFLLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJO0lBQ2pDLE1BQU0sRUFBRSxJQUFJO0NBQ0ssQ0FDbEIsQ0FBQztBQUNGLFlBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FDbkMsZ0RBQVcsRUFDWDtJQUNDLEtBQUssRUFBRSxnREFBVztJQUNsQixLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJO0lBQzNCLE1BQU0sRUFBRSxJQUFJO0NBQ0ssQ0FDbEIsQ0FBQztBQUdGLE1BQU0sZUFBZSxHQUFHLElBQUksc0RBQXFCLEVBQUUsQ0FBQztBQUNwRCxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBYyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxpREFBWSxDQUFDLENBQUM7QUFDckUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0RBQWlCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLG9EQUFlLENBQUMsQ0FBQztBQUMzRSxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5leHBvcnQgY2xhc3MgQ2FudmFzRW5naW5lIGV4dGVuZHMgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGUgPSB7fSkge1xuICAgICAgICBtb2R1bGUuUGxhdGZvcm0gPSBtb2R1bGUuUGxhdGZvcm0gPz8gQ2FudmFzUGxhdGZvcm07XG4gICAgICAgIHN1cGVyKG1vZHVsZSk7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9wYXR0ZXJucyc7XG5leHBvcnQgKiBmcm9tICcuL3BsYXRmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZW5naW5lJztcbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXgsIFBvaW50IH0gZnJvbSAnQGUyZC9nZW9tJztcbmNvbnN0IHBvaW50MSA9IFBvaW50LmVtcHR5KCk7XG5jb25zdCBwb2ludDIgPSBQb2ludC5lbXB0eSgpO1xuZXhwb3J0IHZhciBDYW52YXNQYXR0ZXJucztcbihmdW5jdGlvbiAoQ2FudmFzUGF0dGVybnMpIHtcbiAgICBmdW5jdGlvbiBjb2xvclBhdHRlcm4oY29sb3IsIGFscGhhLCBjdCkge1xuICAgICAgICBsZXQgciA9IGNvbG9yID4+IDE2ICYgMHhmZjtcbiAgICAgICAgbGV0IGcgPSBjb2xvciA+PiA4ICYgMHhmZjtcbiAgICAgICAgbGV0IGIgPSBjb2xvciAmIDB4ZmY7XG4gICAgICAgIGxldCBhID0gYWxwaGEgKiAweGZmO1xuICAgICAgICBpZiAoIUNvbG9yVHJhbnNmb3JtLmlzRW1wdHkoY3QpKSB7XG4gICAgICAgICAgICByID0gKHIgKiBjdC5yZWRNdWx0aXBsaWVyICsgY3QucmVkT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBnID0gKGcgKiBjdC5ncmVlbk11bHRpcGxpZXIgKyBjdC5ncmVlbk9mZnNldCkgJiAweGZmO1xuICAgICAgICAgICAgYiA9IChiICogY3QuYmx1ZU11bHRpcGxpZXIgKyBjdC5ibHVlT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBhID0gKGEgKiBjdC5hbHBoYU11bHRpcGxpZXIgKyBjdC5hbHBoYU9mZnNldCkgJiAweGZmO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhIDwgMHhmZikge1xuICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YSAvIDB4ZmZ9KWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4gPSBjb2xvclBhdHRlcm47XG4gICAgZnVuY3Rpb24gYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJnYiA9IGNvbG9yc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGFscGhhID0gYWxwaGFzW2ldO1xuICAgICAgICAgICAgbGV0IHJhdGlvID0gcmF0aW9zW2ldIC8gMHhGRjtcbiAgICAgICAgICAgIGlmIChyYXRpbyA8IDApXG4gICAgICAgICAgICAgICAgcmF0aW8gPSAwO1xuICAgICAgICAgICAgaWYgKHJhdGlvID4gMSlcbiAgICAgICAgICAgICAgICByYXRpbyA9IDE7XG4gICAgICAgICAgICBwYXR0ZXJuLmFkZENvbG9yU3RvcChyYXRpbywgY29sb3JQYXR0ZXJuKHJnYiwgYWxwaGEsIGNvbG9yVHJhbnNmb3JtKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMuYWRkR3JhZGllbnRDb2xvcnMgPSBhZGRHcmFkaWVudENvbG9ycztcbiAgICBmdW5jdGlvbiByYWRpYWxHcmFkaWVudFBhdHRlcm4obWF0cml4LCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCkge1xuICAgICAgICBwb2ludDEueCA9IDE2MzguNDtcbiAgICAgICAgcG9pbnQxLnkgPSAwO1xuICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludDEsIHBvaW50MSk7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KG1hdHJpeC50eCwgbWF0cml4LnR5LCAwLCBtYXRyaXgudHgsIG1hdHJpeC50eSwgTWF0aC5hYnMoKHBvaW50MS54IC0gbWF0cml4LnR4KSAvIDIpKTtcbiAgICAgICAgYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMucmFkaWFsR3JhZGllbnRQYXR0ZXJuID0gcmFkaWFsR3JhZGllbnRQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGxpbmVhckdyYWRpZW50UGF0dGVybihtYXRyaXgsIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgICAgIHBvaW50MS54ID0gLTgxOS4yO1xuICAgICAgICBwb2ludDEueSA9IDA7XG4gICAgICAgIHBvaW50Mi54ID0gODE5LjI7XG4gICAgICAgIHBvaW50Mi55ID0gMDtcbiAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgcG9pbnQxLCBwb2ludDEpO1xuICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludDIsIHBvaW50Mik7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KHBvaW50MS54LCBwb2ludDEueSwgcG9pbnQyLngsIHBvaW50Mi55KTtcbiAgICAgICAgYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMubGluZWFyR3JhZGllbnRQYXR0ZXJuID0gbGluZWFyR3JhZGllbnRQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGJpdG1hcFBhdHRlcm4oaW1hZ2UsIHJlcGVhdCwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVQYXR0ZXJuKGltYWdlLCByZXBlYXQgPyAncmVwZWF0JyA6ICdub25lJyk7XG4gICAgICAgIGlmIChwYXR0ZXJuKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmJpdG1hcFBhdHRlcm4gPSBiaXRtYXBQYXR0ZXJuO1xufSkoQ2FudmFzUGF0dGVybnMgfHwgKENhbnZhc1BhdHRlcm5zID0ge30pKTtcbiIsImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGUyZC9jb3JlJztcbmV4cG9ydCBjbGFzcyBDYW52YXNQbGF0Zm9ybSBleHRlbmRzIFBsYXRmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbdGhpcy52aWV3LmdldENvbnRleHQoJzJkJyldO1xuICAgICAgICB0aGlzLmN1c3RvbUNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRzW3RoaXMuY29udGV4dHMubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIHNhdmVDb250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICByZXN0b3JlQ29udGV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0cy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmRlYnVnLndhcm5pbmcoJ1RyeWluZyB0byByZXN0b3JlIG1haW4gY29udGV4dCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUN1c3RvbUNvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0O1xuICAgICAgICBpZiAodGhpcy5jdXN0b21Db250ZXh0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmN1c3RvbUNvbnRleHRzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnZpZXc7XG4gICAgICAgIGlmIChjb250ZXh0LmNhbnZhcy53aWR0aCAhPT0gd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRleHQuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgICBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIGRlc3Ryb3lDdXN0b21Db250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jdXN0b21Db250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICBiZWdpbigpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgpO1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB2aWV3LndpZHRoLCB2aWV3LmhlaWdodCk7XG4gICAgfVxuICAgIHVwZGF0ZVNpemUoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbmdpbmUuc2NyZWVuLmdldFdpZHRoKCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRIZWlnaHQoKTtcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIGNvbnN0IHZpZXdXaWR0aCA9IE1hdGguZmxvb3Iod2lkdGggKiBwaXhlbFJhdGlvKTtcbiAgICAgICAgY29uc3Qgdmlld0hlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgaWYgKHZpZXcud2lkdGggIT09IHZpZXdXaWR0aCB8fCB2aWV3LmhlaWdodCAhPT0gdmlld0hlaWdodCkge1xuICAgICAgICAgICAgdmlldy53aWR0aCA9IHZpZXdXaWR0aDtcbiAgICAgICAgICAgIHZpZXcuaGVpZ2h0ID0gdmlld0hlaWdodDtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ09OVEFJTkVSID0gJ2NvbnRhaW5lcic7XG5leHBvcnQgdmFyIENvbnRhaW5lcjtcbihmdW5jdGlvbiAoQ29udGFpbmVyKSB7XG4gICAgZnVuY3Rpb24gbnVtQ2hpbGRyZW4oY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbik7XG4gICAgICAgICAgICByZXR1cm4ga2V5cy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIENvbnRhaW5lci5udW1DaGlsZHJlbiA9IG51bUNoaWxkcmVuO1xufSkoQ29udGFpbmVyIHx8IChDb250YWluZXIgPSB7fSkpO1xuZXhwb3J0IHZhciBDb250YWluZXJFeHRlbnNpb247XG4oZnVuY3Rpb24gKENvbnRhaW5lckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgcmVuZGVyZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgcmVuZGVyZXIuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlcmVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHVwZGF0ZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBwb2ludGVyRXZlbnRzIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHBvaW50ZXJFdmVudHMuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgcG9pbnRlckV2ZW50cy5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwb2ludGVyRXZlbnRzLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50ZXJFdmVudHMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGtleXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcG9pbnRlckV2ZW50cy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHMuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy51cGRhdGUuc2V0KENPTlRBSU5FUiwgdXBkYXRlKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChDT05UQUlORVIsIHJlbmRlcik7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KENPTlRBSU5FUiwgaGl0VGVzdCk7XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENvbnRhaW5lckV4dGVuc2lvbiB8fCAoQ29udGFpbmVyRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vZmVhdHVyZXMvcmVuZGVyZXInO1xuaW1wb3J0IHsgVXBkYXRlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3VwZGF0ZXInO1xuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi4vZmVhdHVyZXMvc2NyZWVuJztcbmltcG9ydCB7IFBvaW50ZXJFdmVudHMgfSBmcm9tICcuLi9mZWF0dXJlcy9wb2ludGVyLWV2ZW50cyc7XG5pbXBvcnQgeyBUaWNrZXIgfSBmcm9tICcuLi9mZWF0dXJlcy90aWNrZXInO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9mZWF0dXJlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDb250YWluZXJFeHRlbnNpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4uL2ZlYXR1cmVzL2RlYnVnJztcbmltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gJy4uL2ZlYXR1cmVzL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi4vZmVhdHVyZXMvY29tcG9uZW50cyc7XG5leHBvcnQgY2xhc3MgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGUgPSB7fSkge1xuICAgICAgICB0aGlzLmRlcHRoID0gMzI7XG4gICAgICAgIG1vZHVsZS5Db21wb25lbnRzID0gbW9kdWxlLkNvbXBvbmVudHMgPz8gQ29tcG9uZW50cztcbiAgICAgICAgbW9kdWxlLlNjcmVlbiA9IG1vZHVsZS5TY3JlZW4gPz8gU2NyZWVuO1xuICAgICAgICBtb2R1bGUuUGxhdGZvcm0gPSBtb2R1bGUuUGxhdGZvcm0gPz8gUGxhdGZvcm07XG4gICAgICAgIG1vZHVsZS5VcGRhdGVyID0gbW9kdWxlLlVwZGF0ZXIgPz8gVXBkYXRlcjtcbiAgICAgICAgbW9kdWxlLlJlbmRlcmVyID0gbW9kdWxlLlJlbmRlcmVyID8/IFJlbmRlcmVyO1xuICAgICAgICBtb2R1bGUuUG9pbnRlckV2ZW50cyA9IG1vZHVsZS5Qb2ludGVyRXZlbnRzID8/IFBvaW50ZXJFdmVudHM7XG4gICAgICAgIG1vZHVsZS5UaWNrZXIgPSBtb2R1bGUuVGlja2VyID8/IFRpY2tlcjtcbiAgICAgICAgbW9kdWxlLkRlYnVnID0gbW9kdWxlLkRlYnVnID8/IERlYnVnO1xuICAgICAgICBtb2R1bGUuUmVzb3VyY2VzID0gbW9kdWxlLlJlc291cmNlcyA/PyBSZXNvdXJjZXM7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBtb2R1bGUuQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBtb2R1bGUuU2NyZWVuKCk7XG4gICAgICAgIHRoaXMucGxhdGZvcm0gPSBuZXcgbW9kdWxlLlBsYXRmb3JtKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZXIgPSBuZXcgbW9kdWxlLlVwZGF0ZXIodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgbW9kdWxlLlJlbmRlcmVyKHRoaXMpO1xuICAgICAgICB0aGlzLnBvaW50ZXJFdmVudHMgPSBuZXcgbW9kdWxlLlBvaW50ZXJFdmVudHModGhpcyk7XG4gICAgICAgIHRoaXMudGlja2VyID0gbmV3IG1vZHVsZS5UaWNrZXIodGhpcyk7XG4gICAgICAgIHRoaXMuZGVidWcgPSBuZXcgbW9kdWxlLkRlYnVnKCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IG1vZHVsZS5SZXNvdXJjZXModGhpcyk7XG4gICAgICAgIENvbnRhaW5lckV4dGVuc2lvbi5pbml0KHRoaXMpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENvbXBvbmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVuZGVyID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5oaXRUZXN0ID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IG5ldyBNYXAoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRGVidWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy53YXJuaW5ncyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICB9XG4gICAgZXJyb3IoLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLmVycm9ycy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMuZXJyb3JzLnNldChpZCwgY291bnQpO1xuICAgIH1cbiAgICB3YXJuaW5nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy53YXJuaW5ncy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgdGhpcy53YXJuaW5ncy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB9XG4gICAgYmVnaW4oKSB7XG4gICAgfVxuICAgIGVuZCgpIHtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNYXRyaXgsIFBvaW50IH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2Rpc3BsYXknO1xuaW1wb3J0IHsgUG9pbnRlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvcG9pbnRlcic7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9pbnRlcmZhY2VzL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBQb2ludGVyRXZlbnRzIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmdsb2JhbCA9IFBvaW50LmVtcHR5KCk7XG4gICAgICAgIHRoaXMubG9jYWwgPSBQb2ludC5lbXB0eSgpO1xuICAgICAgICB0aGlzLnBvaW50ZXJJZCA9IDA7XG4gICAgICAgIHRoaXMucG9pbnRlclR5cGUgPSAncG9pbnRlckRvd24nO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXTtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIG1hdHJpeDogTWF0cml4LmVtcHR5KCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXSA9IGNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIGRpc3BhdGNoKHR5cGUsIHgsIHksIGlkKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2NhbC54ID0geDtcbiAgICAgICAgdGhpcy5sb2NhbC55ID0geTtcbiAgICAgICAgdGhpcy5nbG9iYWwueCA9IHg7XG4gICAgICAgIHRoaXMuZ2xvYmFsLnkgPSB5O1xuICAgICAgICB0aGlzLnBvaW50ZXJJZCA9IGlkO1xuICAgICAgICB0aGlzLnBvaW50ZXJUeXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgTWF0cml4LnNldEVtcHR5KGJhc2UubWF0cml4KTtcbiAgICAgICAgdGhpcy5kZXB0aCsrO1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ29tcG9uZW50KHJvb3QsIGJhc2UpO1xuICAgIH1cbiAgICBkaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFEaXNwbGF5LmlzVmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFQb2ludGVyLmlzUG9pbnRlckVuYWJsZWQoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3QuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIFRyYW5zZm9ybS5nZXRNYXRyaXgoY29tcG9uZW50LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgICAgICBNYXRyaXguY29uY2F0KHBhcmVudC5tYXRyaXgsIGNvbnRleHQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50KGNvbnRleHQubWF0cml4LCB0aGlzLmdsb2JhbCwgdGhpcy5sb2NhbCk7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMubG9jYWw7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsIHRoaXMucG9pbnRlclR5cGUsIHgsIHksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJUeXBlID09PSAncG9pbnRlck1vdmUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiAhY29tcG9uZW50LnBvaW50ZXJPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3ZlcicsIHgsIHksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXJlc3VsdCAmJiBjb21wb25lbnQucG9pbnRlck92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdXQnLCB4LCB5LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wb2ludGVyT3ZlciA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXggfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gJy4uL2ludGVyZmFjZXMvZGlzcGxheSc7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9pbnRlcmZhY2VzL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgbWF0cml4OiBNYXRyaXguZW1wdHkoKSxcbiAgICAgICAgICAgICAgICBjb2xvclRyYW5zZm9ybTogQ29sb3JUcmFuc2Zvcm0uZW1wdHkoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdID0gY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgcGFyZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIURpc3BsYXkuaXNWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIFRyYW5zZm9ybS5nZXRNYXRyaXgoY29tcG9uZW50LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgIFRyYW5zZm9ybS5nZXRDb2xvclRyYW5zZm9ybShjb21wb25lbnQsIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBNYXRyaXguY29uY2F0KHBhcmVudC5tYXRyaXgsIGNvbnRleHQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgIENvbG9yVHJhbnNmb3JtLmNvbmNhdChwYXJlbnQuY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLmVuZ2luZS5wbGF0Zm9ybS5iZWdpbigpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgY29uc3QgYmFzZSA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLmRlcHRoKys7XG4gICAgICAgIE1hdHJpeC5jb3B5KHRoaXMuZW5naW5lLnNjcmVlbi5nZXRNYXRyaXgoKSwgYmFzZS5tYXRyaXgpO1xuICAgICAgICBDb2xvclRyYW5zZm9ybS5zZXRFbXB0eShiYXNlLmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQocm9vdCwgYmFzZSk7XG4gICAgICAgIHRoaXMuZW5naW5lLnBsYXRmb3JtLmVuZCgpO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydFRpbWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgUmVzb3VyY2VzIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlc29sdmVycyA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgZ2V0KGFzc2V0KSB7XG4gICAgICAgIGlmICghYXNzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VzLmdldChhc3NldCk7XG4gICAgICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHJlc291cmNlID0gdGhpcy5yZXNvbHZlKGFzc2V0KTtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzLnNldChhc3NldCwgcmVzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICB9XG4gICAgcmVzb2x2ZShhc3NldCkge1xuICAgICAgICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHJlc29sdmVyKGFzc2V0LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgICAgICBpZiAocmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmdpbmUuZGVidWcud2FybmluZyhgUmVzb3VyY2Ugbm90IHJlc29sdmVkOiAke2Fzc2V0fWApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNYXRyaXggfSBmcm9tICdAZTJkL2dlb20nO1xuZXhwb3J0IGNsYXNzIFNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSA0MDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDAwO1xuICAgICAgICB0aGlzLnBpeGVsUmF0aW8gPSAwO1xuICAgICAgICB0aGlzLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXRyaXggPSBNYXRyaXguZW1wdHkoKTtcbiAgICB9XG4gICAgZ2V0TWF0cml4KCkge1xuICAgICAgICBjb25zdCBwaXhlbFJhdGlvID0gdGhpcy5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIHRoaXMubWF0cml4LmEgPSBwaXhlbFJhdGlvO1xuICAgICAgICB0aGlzLm1hdHJpeC5kID0gcGl4ZWxSYXRpbztcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICAgIH1cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVsbHNjcmVlbiA/IHdpbmRvdy5pbm5lcldpZHRoIDogdGhpcy53aWR0aDtcbiAgICB9XG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuID8gd2luZG93LmlubmVySGVpZ2h0IDogdGhpcy5oZWlnaHQ7XG4gICAgfVxuICAgIGdldFBpeGVsUmF0aW8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpeGVsUmF0aW8gPiAwID8gdGhpcy5waXhlbFJhdGlvIDogd2luZG93LmRldmljZVBpeGVsUmF0aW8gPz8gMTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGlja2VyIHtcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICAgICAgdGhpcy5mcmFtZVJhdGUgPSAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnVwZGF0ZXIudXBkYXRlKHRpbWUpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVuZGVyZXIucmVuZGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlRnJhbWUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gKGN1cnJlbnRUaW1lIC0gdGhpcy50aW1lKSAvIDEwMDA7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKGRlbHRhVGltZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU5leHRGcmFtZSgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB9XG4gICAgZ2V0IGlzUGF1c2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXVzZWQ7XG4gICAgfVxuICAgIHBsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOZXh0RnJhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdXBkYXRlTmV4dEZyYW1lKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVGcmFtZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVXBkYXRlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy91cGRhdGUnO1xuaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgVXBkYXRlciBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChyb290KTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbiAgICB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVVwZGF0ZS5pc0VuYWJsZWQoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllcyhjb21wb25lbnQpO1xuICAgICAgICBVcGRhdGUudXBkYXRlKGNvbXBvbmVudCwgdGhpcy50aW1lKTtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVByb3BlcnRpZXMoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZW5naW5lLmNvbXBvbmVudHMucHJvcGVydGllcy5mb3JFYWNoKChoYW5kbGVyLCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudFtwcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2VuZ2luZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL2NvbXBvbmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9kZWJ1Zyc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3BsYXRmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcG9pbnRlci1ldmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9yZW5kZXJlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3Jlc291cmNlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3NjcmVlbic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3RpY2tlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3VwZGF0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pbnB1dC9tb3VzZSc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvZGlzcGxheSc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvcGl2b3QnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3NvdXJjZSc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvdHJhbnNmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy91cGRhdGUnO1xuIiwiZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCB0eXBlKSB7XG4gICAgY29uc3QgeyB2aWV3IH0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgY29uc3QgY2xpZW50UmVjdCA9IHZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSBjbGllbnRSZWN0LmxlZnQgLSB2aWV3LmNsaWVudExlZnQ7XG4gICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSBjbGllbnRSZWN0LnRvcCAtIHZpZXcuY2xpZW50VG9wO1xuICAgIGVuZ2luZS5wb2ludGVyRXZlbnRzLmRpc3BhdGNoKHR5cGUsIHgsIHksIDApO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5leHBvcnQgdmFyIE1vdXNlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChNb3VzZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gZW5naW5lLnBsYXRmb3JtO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckRvd24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlclVwJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlck1vdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE1vdXNlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoTW91c2VFeHRlbnNpb24gfHwgKE1vdXNlRXh0ZW5zaW9uID0ge30pKTtcbiIsImV4cG9ydCB2YXIgRGlzcGxheTtcbihmdW5jdGlvbiAoRGlzcGxheSkge1xuICAgIGZ1bmN0aW9uIGlzVmlzaWJsZShjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC52aXNpYmxlID8/IHRydWU7XG4gICAgfVxuICAgIERpc3BsYXkuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xufSkoRGlzcGxheSB8fCAoRGlzcGxheSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFBpdm90O1xuKGZ1bmN0aW9uIChQaXZvdCkge1xuICAgIGZ1bmN0aW9uIGdldFgocGl2b3QsIHdpZHRoKSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RYIH0gPSBwaXZvdDtcbiAgICAgICAgaWYgKHBpdm90WCkge1xuICAgICAgICAgICAgcmV0dXJuIC1waXZvdFggKiB3aWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgUGl2b3QuZ2V0WCA9IGdldFg7XG4gICAgZnVuY3Rpb24gZ2V0WShwaXZvdCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RZIH0gPSBwaXZvdDtcbiAgICAgICAgaWYgKHBpdm90WSkge1xuICAgICAgICAgICAgcmV0dXJuIC1waXZvdFkgKiBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFkgPSBnZXRZO1xuICAgIGZ1bmN0aW9uIGhhc1ZhbHVlcyhwaXZvdCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WCwgcGl2b3RZIH0gPSBwaXZvdDtcbiAgICAgICAgcmV0dXJuICEhcGl2b3RYIHx8ICEhcGl2b3RZO1xuICAgIH1cbiAgICBQaXZvdC5oYXNWYWx1ZXMgPSBoYXNWYWx1ZXM7XG59KShQaXZvdCB8fCAoUGl2b3QgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBQb2ludGVyO1xuKGZ1bmN0aW9uIChQb2ludGVyKSB7XG4gICAgZnVuY3Rpb24gaXNQb2ludGVyT3Zlcihwb2ludGVyKSB7XG4gICAgICAgIHJldHVybiAhIXBvaW50ZXIucG9pbnRlck92ZXI7XG4gICAgfVxuICAgIFBvaW50ZXIuaXNQb2ludGVyT3ZlciA9IGlzUG9pbnRlck92ZXI7XG4gICAgZnVuY3Rpb24gaXNQb2ludGVyRW5hYmxlZChwb2ludGVyKSB7XG4gICAgICAgIHJldHVybiBwb2ludGVyLnBvaW50ZXJFbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIFBvaW50ZXIuaXNQb2ludGVyRW5hYmxlZCA9IGlzUG9pbnRlckVuYWJsZWQ7XG4gICAgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChwb2ludGVyLCB0eXBlLCB4LCB5LCBpZCkge1xuICAgICAgICBjb25zdCBoYW5kbGVyTmFtZSA9IGBvbiR7dHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3R5cGUuc2xpY2UoMSl9YDtcbiAgICAgICAgaWYgKHBvaW50ZXJbaGFuZGxlck5hbWVdKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlLCB4LCB5LCBpZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwb2ludGVyW2hhbmRsZXJOYW1lXShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbn0pKFBvaW50ZXIgfHwgKFBvaW50ZXIgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBTb3VyY2U7XG4oZnVuY3Rpb24gKFNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIGdldFJlc291cmNlKHNvdXJjZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBzb3VyY2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICB9XG4gICAgU291cmNlLmdldFJlc291cmNlID0gZ2V0UmVzb3VyY2U7XG4gICAgZnVuY3Rpb24gaXNMb2FkZWQoc291cmNlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBnZXRSZXNvdXJjZShzb3VyY2UsIGVuZ2luZSk7XG4gICAgICAgIHJldHVybiAhIXJlc291cmNlPy5sb2FkZWQ7XG4gICAgfVxuICAgIFNvdXJjZS5pc0xvYWRlZCA9IGlzTG9hZGVkO1xufSkoU291cmNlIHx8IChTb3VyY2UgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBUcmFuc2Zvcm07XG4oZnVuY3Rpb24gKFRyYW5zZm9ybSkge1xuICAgIGZ1bmN0aW9uIGdldE1hdHJpeCh0cmFuc2Zvcm0sIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAobWF0cml4KSB7XG4gICAgICAgICAgICByZXN1bHQuYSA9IG1hdHJpeC5hID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYiA9IG1hdHJpeC5iID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuYyA9IG1hdHJpeC5jID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuZCA9IG1hdHJpeC5kID8/IDE7XG4gICAgICAgICAgICByZXN1bHQudHggPSBtYXRyaXgudHggPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IG1hdHJpeC50eSA/PyAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm90YXRpb24gfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gdHJhbnNmb3JtLnNjYWxlWCA/PyB0cmFuc2Zvcm0uc2NhbGUgPz8gMTtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gdHJhbnNmb3JtLnNjYWxlWSA/PyB0cmFuc2Zvcm0uc2NhbGUgPz8gMTtcbiAgICAgICAgcmVzdWx0LnR4ID0gdHJhbnNmb3JtLnggPz8gMDtcbiAgICAgICAgcmVzdWx0LnR5ID0gdHJhbnNmb3JtLnkgPz8gMDtcbiAgICAgICAgaWYgKHJvdGF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gICAgICAgICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihyb3RhdGlvbik7XG4gICAgICAgICAgICByZXN1bHQuYSA9IGNvcyAqIHNjYWxlWDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gc2luICogc2NhbGVYO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAtc2luICogc2NhbGVZO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBjb3MgKiBzY2FsZVk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmEgPSBzY2FsZVg7XG4gICAgICAgIHJlc3VsdC5iID0gMDtcbiAgICAgICAgcmVzdWx0LmMgPSAwO1xuICAgICAgICByZXN1bHQuZCA9IHNjYWxlWTtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldE1hdHJpeCA9IGdldE1hdHJpeDtcbiAgICBmdW5jdGlvbiBnZXRDb2xvclRyYW5zZm9ybSh0cmFuc2Zvcm0sIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybSkge1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5yZWRNdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5NdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5ibHVlTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5yZWRPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmJsdWVPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHRpbnQgfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKHRpbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY29sb3IgPSAwLCB2YWx1ZSA9IDEgfSA9IHRpbnQ7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZUludmVydGVkID0gMSAtIHZhbHVlO1xuICAgICAgICAgICAgY29uc3QgciA9IChjb2xvciA+PiAxNikgJiAweGZmO1xuICAgICAgICAgICAgY29uc3QgZyA9IChjb2xvciA+PiA4KSAmIDB4ZmY7XG4gICAgICAgICAgICBjb25zdCBiID0gY29sb3IgJiAweGZmO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IHRyYW5zZm9ybS5hbHBoYSA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IHZhbHVlSW52ZXJ0ZWQ7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSByICogdmFsdWU7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBnICogdmFsdWU7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGIgKiB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gdHJhbnNmb3JtLmFscGhhID8/IDE7XG4gICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IDA7XG4gICAgfVxuICAgIFRyYW5zZm9ybS5nZXRDb2xvclRyYW5zZm9ybSA9IGdldENvbG9yVHJhbnNmb3JtO1xufSkoVHJhbnNmb3JtIHx8IChUcmFuc2Zvcm0gPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBVcGRhdGU7XG4oZnVuY3Rpb24gKFVwZGF0ZSkge1xuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5lbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIFVwZGF0ZS5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbXBvbmVudCwgdGltZSkge1xuICAgICAgICBpZiAoY29tcG9uZW50Lm9uVXBkYXRlKSB7XG4gICAgICAgICAgICBjb21wb25lbnQub25VcGRhdGUodGltZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVXBkYXRlLnVwZGF0ZSA9IHVwZGF0ZTtcbn0pKFVwZGF0ZSB8fCAoVXBkYXRlID0ge30pKTtcbiIsImV4cG9ydCB2YXIgQm91bmRzO1xuKGZ1bmN0aW9uIChCb3VuZHMpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1pblg6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtaW5ZOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWF4WDogTnVtYmVyLk1JTl9WQUxVRSxcbiAgICAgICAgICAgIG1heFk6IE51bWJlci5NSU5fVkFMVUUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIEJvdW5kcy5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KGJvdW5kcykge1xuICAgICAgICBib3VuZHMubWluWCA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGJvdW5kcy5taW5ZID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1heFggPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWF4WSA9IE51bWJlci5NSU5fVkFMVUU7XG4gICAgfVxuICAgIEJvdW5kcy5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkoYm91bmRzKSB7XG4gICAgICAgIHJldHVybiBib3VuZHMubWluWCA9PT0gTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1pblkgPT09IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5tYXhYID09PSBOdW1iZXIuTUlOX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWF4WSA9PT0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICB9XG4gICAgQm91bmRzLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIHRvUmVjdGFuZ2xlKGJvdW5kcywgcmVjdGFuZ2xlKSB7XG4gICAgICAgIGNvbnN0IHsgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgfSA9IGJvdW5kcztcbiAgICAgICAgcmVjdGFuZ2xlLnggPSBtaW5YO1xuICAgICAgICByZWN0YW5nbGUueSA9IG1pblk7XG4gICAgICAgIHJlY3RhbmdsZS53aWR0aCA9IG1heFggLSBtaW5YO1xuICAgICAgICByZWN0YW5nbGUuaGVpZ2h0ID0gbWF4WSAtIG1pblk7XG4gICAgfVxuICAgIEJvdW5kcy50b1JlY3RhbmdsZSA9IHRvUmVjdGFuZ2xlO1xuICAgIGZ1bmN0aW9uIHRlc3RYKGJvdW5kcywgeCkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RYID0gdGVzdFg7XG4gICAgZnVuY3Rpb24gdGVzdFkoYm91bmRzLCB5KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFkgPSB0ZXN0WTtcbiAgICBmdW5jdGlvbiB0ZXN0KGJvdW5kcywgeCwgeSkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0ID0gdGVzdDtcbiAgICBmdW5jdGlvbiB0ZXN0UG9pbnQoYm91bmRzLCBwb2ludCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0UG9pbnQgPSB0ZXN0UG9pbnQ7XG59KShCb3VuZHMgfHwgKEJvdW5kcyA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIENvbG9yVHJhbnNmb3JtO1xuKGZ1bmN0aW9uIChDb2xvclRyYW5zZm9ybSkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxwaGFNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgcmVkTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGdyZWVuTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGJsdWVNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYWxwaGFPZmZzZXQ6IDAsXG4gICAgICAgICAgICByZWRPZmZzZXQ6IDAsXG4gICAgICAgICAgICBncmVlbk9mZnNldDogMCxcbiAgICAgICAgICAgIGJsdWVPZmZzZXQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShjdCkge1xuICAgICAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5NdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ibHVlTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYWxwaGFNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5yZWRPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmdyZWVuT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ibHVlT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU9mZnNldCA9PT0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eVdpdGhBbHBoYShjdCkge1xuICAgICAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5NdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ibHVlTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYmx1ZU9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmlzRW1wdHlXaXRoQWxwaGEgPSBpc0VtcHR5V2l0aEFscGhhO1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KGN0KSB7XG4gICAgICAgIGN0LnJlZE11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5ncmVlbk11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5ibHVlTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LmFscGhhTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LnJlZE9mZnNldCA9IDA7XG4gICAgICAgIGN0LmdyZWVuT2Zmc2V0ID0gMDtcbiAgICAgICAgY3QuYmx1ZU9mZnNldCA9IDA7XG4gICAgICAgIGN0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KGZyb20sIHRvKSB7XG4gICAgICAgIHRvLmFscGhhTXVsdGlwbGllciA9IGZyb20uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICB0by5yZWRNdWx0aXBsaWVyID0gZnJvbS5yZWRNdWx0aXBsaWVyO1xuICAgICAgICB0by5ncmVlbk11bHRpcGxpZXIgPSBmcm9tLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgdG8uYmx1ZU11bHRpcGxpZXIgPSBmcm9tLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICB0by5hbHBoYU9mZnNldCA9IGZyb20uYWxwaGFPZmZzZXQ7XG4gICAgICAgIHRvLnJlZE9mZnNldCA9IGZyb20ucmVkT2Zmc2V0O1xuICAgICAgICB0by5ncmVlbk9mZnNldCA9IGZyb20uZ3JlZW5PZmZzZXQ7XG4gICAgICAgIHRvLmJsdWVPZmZzZXQgPSBmcm9tLmJsdWVPZmZzZXQ7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIGNvbmNhdChjdDEsIGN0MCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGFscGhhTXVsdGlwbGllciA9IGN0MS5hbHBoYU11bHRpcGxpZXIgKiBjdDAuYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCByZWRNdWx0aXBsaWVyID0gY3QxLnJlZE11bHRpcGxpZXIgKiBjdDAucmVkTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgZ3JlZW5NdWx0aXBsaWVyID0gY3QxLmdyZWVuTXVsdGlwbGllciAqIGN0MC5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGJsdWVNdWx0aXBsaWVyID0gY3QxLmJsdWVNdWx0aXBsaWVyICogY3QwLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBhbHBoYU9mZnNldCA9IGN0MS5hbHBoYU11bHRpcGxpZXIgKiBjdDAuYWxwaGFPZmZzZXQgKyBjdDAuYWxwaGFPZmZzZXQ7XG4gICAgICAgIGNvbnN0IHJlZE9mZnNldCA9IGN0MS5yZWRNdWx0aXBsaWVyICogY3QwLnJlZE9mZnNldCArIGN0MC5yZWRPZmZzZXQ7XG4gICAgICAgIGNvbnN0IGdyZWVuT2Zmc2V0ID0gY3QxLmdyZWVuTXVsdGlwbGllciAqIGN0MC5ncmVlbk9mZnNldCArIGN0MC5ncmVlbk9mZnNldDtcbiAgICAgICAgY29uc3QgYmx1ZU9mZnNldCA9IGN0MS5ibHVlTXVsdGlwbGllciAqIGN0MC5ibHVlT2Zmc2V0ICsgY3QwLmJsdWVPZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gcmVkTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IGdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IGFscGhhT2Zmc2V0O1xuICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gcmVkT2Zmc2V0O1xuICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBncmVlbk9mZnNldDtcbiAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBibHVlT2Zmc2V0O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5jb25jYXQgPSBjb25jYXQ7XG59KShDb2xvclRyYW5zZm9ybSB8fCAoQ29sb3JUcmFuc2Zvcm0gPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9jb2xvci10cmFuc2Zvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9ib3VuZHMnO1xuZXhwb3J0ICogZnJvbSAnLi9tYXRyaXgnO1xuZXhwb3J0ICogZnJvbSAnLi9wb2ludCc7XG5leHBvcnQgKiBmcm9tICcuL3JlY3RhbmdsZSc7XG4iLCJleHBvcnQgdmFyIE1hdHJpeDtcbihmdW5jdGlvbiAoTWF0cml4KSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiAxLFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGM6IDAsXG4gICAgICAgICAgICBkOiAxLFxuICAgICAgICAgICAgdHg6IDAsXG4gICAgICAgICAgICB0eTogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTWF0cml4LmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShtYXRyaXgpIHtcbiAgICAgICAgcmV0dXJuIG1hdHJpeC5hID09PSAxXG4gICAgICAgICAgICAmJiBtYXRyaXguYiA9PT0gMFxuICAgICAgICAgICAgJiYgbWF0cml4LmMgPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC5kID09PSAxXG4gICAgICAgICAgICAmJiBtYXRyaXgudHggPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC50eSA9PT0gMDtcbiAgICB9XG4gICAgTWF0cml4LmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KG1hdHJpeCkge1xuICAgICAgICBtYXRyaXguYSA9IDE7XG4gICAgICAgIG1hdHJpeC5iID0gMDtcbiAgICAgICAgbWF0cml4LmMgPSAwO1xuICAgICAgICBtYXRyaXguZCA9IDE7XG4gICAgICAgIG1hdHJpeC50eCA9IDA7XG4gICAgICAgIG1hdHJpeC50eSA9IDA7XG4gICAgfVxuICAgIE1hdHJpeC5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoZnJvbSwgdG8pIHtcbiAgICAgICAgdG8uYSA9IGZyb20uYTtcbiAgICAgICAgdG8uYiA9IGZyb20uYjtcbiAgICAgICAgdG8uYyA9IGZyb20uYztcbiAgICAgICAgdG8uZCA9IGZyb20uZDtcbiAgICAgICAgdG8udHggPSBmcm9tLnR4O1xuICAgICAgICB0by50eSA9IGZyb20udHk7XG4gICAgfVxuICAgIE1hdHJpeC5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBjb25jYXQobWF0cml4MCwgbWF0cml4MSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGEgPSBtYXRyaXgxLmEgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmM7XG4gICAgICAgIGNvbnN0IGIgPSBtYXRyaXgxLmEgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmQ7XG4gICAgICAgIGNvbnN0IGMgPSBtYXRyaXgxLmMgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmM7XG4gICAgICAgIGNvbnN0IGQgPSBtYXRyaXgxLmMgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmQ7XG4gICAgICAgIGNvbnN0IHR4ID0gbWF0cml4MS50eCAqIG1hdHJpeDAuYSArIG1hdHJpeDEudHkgKiBtYXRyaXgwLmMgKyBtYXRyaXgwLnR4O1xuICAgICAgICBjb25zdCB0eSA9IG1hdHJpeDEudHggKiBtYXRyaXgwLmIgKyBtYXRyaXgxLnR5ICogbWF0cml4MC5kICsgbWF0cml4MC50eTtcbiAgICAgICAgcmVzdWx0LmEgPSBhO1xuICAgICAgICByZXN1bHQuYiA9IGI7XG4gICAgICAgIHJlc3VsdC5jID0gYztcbiAgICAgICAgcmVzdWx0LmQgPSBkO1xuICAgICAgICByZXN1bHQudHggPSB0eDtcbiAgICAgICAgcmVzdWx0LnR5ID0gdHk7XG4gICAgfVxuICAgIE1hdHJpeC5jb25jYXQgPSBjb25jYXQ7XG4gICAgZnVuY3Rpb24gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KSB7XG4gICAgICAgIHJldHVybiBtYXRyaXguYSAqIG1hdHJpeC5kIC0gbWF0cml4LmIgKiBtYXRyaXguYztcbiAgICB9XG4gICAgTWF0cml4LmdldERldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQ7XG4gICAgZnVuY3Rpb24gaW52ZXJ0KG1hdHJpeCwgcmVzdWx0KSB7XG4gICAgICAgIGxldCBkZXRlcm1pbmFudCA9IGdldERldGVybWluYW50KG1hdHJpeCk7XG4gICAgICAgIGlmIChkZXRlcm1pbmFudCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0LmEgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gLW1hdHJpeC50eDtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IC1tYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCA9IDEuMCAvIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBtYXRyaXguYSAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmIgPSAtbWF0cml4LmIgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gLW1hdHJpeC5jICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuZCA9IG1hdHJpeC5kICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQudHggPSAtcmVzdWx0LmEgKiBtYXRyaXgudHggLSByZXN1bHQuYyAqIG1hdHJpeC50eTtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IC1yZXN1bHQuYiAqIG1hdHJpeC50eCAtIHJlc3VsdC5kICogbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hdHJpeC5pbnZlcnQgPSBpbnZlcnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJlc3VsdC54ID0geCAqIG1hdHJpeC5hICsgeSAqIG1hdHJpeC5jICsgbWF0cml4LnR4O1xuICAgICAgICByZXN1bHQueSA9IHggKiBtYXRyaXguYiArIHkgKiBtYXRyaXguZCArIG1hdHJpeC50eTtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybVBvaW50ID0gdHJhbnNmb3JtUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnRMb2NhbChtYXRyaXgsIHBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmVzdWx0LnggPSB4ICogbWF0cml4LmEgKyB5ICogbWF0cml4LmM7XG4gICAgICAgIHJlc3VsdC55ID0geCAqIG1hdHJpeC5iICsgeSAqIG1hdHJpeC5kO1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnRMb2NhbCA9IHRyYW5zZm9ybVBvaW50TG9jYWw7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtSW52ZXJzZVBvaW50KG1hdHJpeCwgcG9pbnQsIHJlc3VsdCkge1xuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudChtYXRyaXgpO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC54ID0gLW1hdHJpeC50eDtcbiAgICAgICAgICAgIHJlc3VsdC55ID0gLW1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRldGVybWluYW50ID0gMSAvIGRldGVybWluYW50O1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgICAgIHJlc3VsdC54ID0gZGV0ZXJtaW5hbnQgKiAobWF0cml4LmMgKiAobWF0cml4LnR5IC0geSkgKyBtYXRyaXguZCAqICh4IC0gbWF0cml4LnR4KSk7XG4gICAgICAgICAgICByZXN1bHQueSA9IGRldGVybWluYW50ICogKG1hdHJpeC5hICogKHkgLSBtYXRyaXgudHkpICsgbWF0cml4LmIgKiAobWF0cml4LnR4IC0geCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1JbnZlcnNlUG9pbnQgPSB0cmFuc2Zvcm1JbnZlcnNlUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtQm91bmRzKG1hdHJpeCwgYm91bmRzLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBhLCBiLCBjLCBkLCB0eCwgdHksIH0gPSBtYXRyaXg7XG4gICAgICAgIGNvbnN0IHJ4ID0gYm91bmRzLng7XG4gICAgICAgIGNvbnN0IHJ5ID0gYm91bmRzLnk7XG4gICAgICAgIGNvbnN0IHJyID0gcnggKyBib3VuZHMud2lkdGg7XG4gICAgICAgIGNvbnN0IHJiID0gcnkgKyBib3VuZHMuaGVpZ2h0O1xuICAgICAgICBjb25zdCBueDEgPSByeCAqIGEgKyByeSAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkxID0gcnggKiBiICsgcnkgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54MiA9IHJyICogYSArIHJ5ICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTIgPSByciAqIGIgKyByeSAqIGQgKyB0eTtcbiAgICAgICAgY29uc3QgbngzID0gcnIgKiBhICsgcmIgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MyA9IHJyICogYiArIHJiICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDQgPSByeCAqIGEgKyByYiAqIGMgKyB0eDtcbiAgICAgICAgY29uc3Qgbnk0ID0gcnggKiBiICsgcmIgKiBkICsgdHk7XG4gICAgICAgIGxldCBsZWZ0ID0gbngxO1xuICAgICAgICBpZiAobGVmdCA+IG54Mikge1xuICAgICAgICAgICAgbGVmdCA9IG54MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54Mykge1xuICAgICAgICAgICAgbGVmdCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54NCkge1xuICAgICAgICAgICAgbGVmdCA9IG54NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9wID0gbnkxO1xuICAgICAgICBpZiAodG9wID4gbnkyKSB7XG4gICAgICAgICAgICB0b3AgPSBueTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcCA+IG55Mykge1xuICAgICAgICAgICAgdG9wID0gbnkzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3AgPiBueTQpIHtcbiAgICAgICAgICAgIHRvcCA9IG55NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmlnaHQgPSBueDE7XG4gICAgICAgIGlmIChyaWdodCA8IG54Mikge1xuICAgICAgICAgICAgcmlnaHQgPSBueDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0IDwgbngzKSB7XG4gICAgICAgICAgICByaWdodCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgPCBueDQpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbng0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBib3R0b20gPSBueTE7XG4gICAgICAgIGlmIChib3R0b20gPCBueTIpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tIDwgbnkzKSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdHRvbSA8IG55NCkge1xuICAgICAgICAgICAgYm90dG9tID0gbnk0O1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC54ID0gbGVmdDtcbiAgICAgICAgcmVzdWx0LnkgPSB0b3A7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGJvdHRvbSAtIHRvcDtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybUJvdW5kcyA9IHRyYW5zZm9ybUJvdW5kcztcbn0pKE1hdHJpeCB8fCAoTWF0cml4ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUG9pbnQ7XG4oZnVuY3Rpb24gKFBvaW50KSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG4gICAgUG9pbnQuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBsZW5ndGgocG9pbnQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9XG4gICAgUG9pbnQubGVuZ3RoID0gbGVuZ3RoO1xuICAgIGZ1bmN0aW9uIGFuZ2xlKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHBvaW50LnksIHBvaW50LngpO1xuICAgIH1cbiAgICBQb2ludC5hbmdsZSA9IGFuZ2xlO1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMDtcbiAgICB9XG4gICAgUG9pbnQuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gZXF1YWxzKHBvaW50MCwgcG9pbnQxKSB7XG4gICAgICAgIHJldHVybiBwb2ludDAueCA9PT0gcG9pbnQxLnggJiYgcG9pbnQwLnkgPT09IHBvaW50MS55O1xuICAgIH1cbiAgICBQb2ludC5lcXVhbHMgPSBlcXVhbHM7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkocG9pbnQpIHtcbiAgICAgICAgcG9pbnQueCA9IDA7XG4gICAgICAgIHBvaW50LnkgPSAwO1xuICAgIH1cbiAgICBQb2ludC5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LnggPSBzb3VyY2UueDtcbiAgICAgICAgdGFyZ2V0LnkgPSBzb3VyY2UueTtcbiAgICB9XG4gICAgUG9pbnQuY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gbm9ybWFsaXplKHBvaW50LCB0aGlja25lc3MpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gbGVuZ3RoKHBvaW50KTtcbiAgICAgICAgaWYgKHZhbHVlID4gMCkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlja25lc3MgLyB2YWx1ZTtcbiAgICAgICAgICAgIHBvaW50LnggKj0gdmFsdWU7XG4gICAgICAgICAgICBwb2ludC55ICo9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBvaW50Lm5vcm1hbGl6ZSA9IG5vcm1hbGl6ZTtcbiAgICBmdW5jdGlvbiBkaXN0YW5jZShwb2ludDAsIHBvaW50MSkge1xuICAgICAgICBjb25zdCBkeCA9IHBvaW50MC54IC0gcG9pbnQxLng7XG4gICAgICAgIGNvbnN0IGR5ID0gcG9pbnQwLnkgLSBwb2ludDEueTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuICAgIFBvaW50LmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgZnVuY3Rpb24gaW50ZXJwb2xhdGUoYmVnaW4sIGVuZCwgdmFsdWUsIHJlc3VsdCkge1xuICAgICAgICByZXN1bHQueCA9IGJlZ2luLnggKyB2YWx1ZSAqIChlbmQueCAtIGJlZ2luLngpO1xuICAgICAgICByZXN1bHQueSA9IGJlZ2luLnkgKyB2YWx1ZSAqIChlbmQueSAtIGJlZ2luLnkpO1xuICAgIH1cbiAgICBQb2ludC5pbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlO1xuICAgIGZ1bmN0aW9uIHBvbGFyKHBvaW50LCBsZW5ndGgsIGFuZ2xlKSB7XG4gICAgICAgIHBvaW50LnggPSBsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIHBvaW50LnkgPSBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgfVxuICAgIFBvaW50LnBvbGFyID0gcG9sYXI7XG59KShQb2ludCB8fCAoUG9pbnQgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBSZWN0YW5nbGU7XG4oZnVuY3Rpb24gKFJlY3RhbmdsZSkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJlY3RhbmdsZS54ID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLnkgPSAwO1xuICAgICAgICByZWN0YW5nbGUud2lkdGggPSAwO1xuICAgICAgICByZWN0YW5nbGUuaGVpZ2h0ID0gMDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShyZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZS53aWR0aCA9PT0gMCB8fCByZWN0YW5nbGUuaGVpZ2h0ID09PSAwO1xuICAgIH1cbiAgICBSZWN0YW5nbGUuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gY29udGFpbnMocmVjdGFuZ2xlLCBwb2ludCkge1xuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlLnggPCBwb2ludC54XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueCArIHJlY3RhbmdsZS53aWR0aCA+IHBvaW50LnhcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS55IDwgcG9pbnQueVxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnkgKyByZWN0YW5nbGUuaGVpZ2h0ID4gcG9pbnQueTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmNvbnRhaW5zID0gY29udGFpbnM7XG59KShSZWN0YW5nbGUgfHwgKFJlY3RhbmdsZSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCwgU291cmNlIH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXgsIFJlY3RhbmdsZSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBJbWFnZUV4dGVuc2lvbiwgSU1BR0UgfSBmcm9tICcuL2ltYWdlJztcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBTb3VyY2UuZ2V0UmVzb3VyY2UoaW1hZ2UsIGVuZ2luZSk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmxvYWRlZCB8fCAhcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gcGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgaWYgKENvbG9yVHJhbnNmb3JtLmlzRW1wdHlXaXRoQWxwaGEoY29sb3JUcmFuc2Zvcm0pKSB7XG4gICAgICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUNvbnRleHQgPSBwbGF0Zm9ybS5jcmVhdGVDdXN0b21Db250ZXh0KCk7XG4gICAgICAgICAgICBib3VuZHMueCA9IHg7XG4gICAgICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIGJvdW5kcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtQm91bmRzKG1hdHJpeCwgYm91bmRzLCBib3VuZHMpO1xuICAgICAgICAgICAgaWYgKFJlY3RhbmdsZS5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LmNsZWFyUmVjdChib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gY3VzdG9tQ29udGV4dC5nZXRJbWFnZURhdGEoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgY29uc3Qgcm0gPSBjb2xvclRyYW5zZm9ybS5yZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3QgZ20gPSBjb2xvclRyYW5zZm9ybS5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBibSA9IGNvbG9yVHJhbnNmb3JtLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3QgYW0gPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBybyA9IGNvbG9yVHJhbnNmb3JtLnJlZE9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGdvID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5PZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBibyA9IGNvbG9yVHJhbnNmb3JtLmJsdWVPZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBhbyA9IGNvbG9yVHJhbnNmb3JtLmFscGhhT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBpbWFnZURhdGE7XG4gICAgICAgICAgICBjb25zdCB7IGxlbmd0aCB9ID0gZGF0YTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOykge1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBybSArIHJvO1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBnbSArIGdvO1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBibSArIGJvO1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBhbSArIGFvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCBib3VuZHMueCwgYm91bmRzLnkpO1xuICAgICAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybSgpO1xuICAgICAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UoY3VzdG9tQ29udGV4dC5jYW52YXMsIGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0LCBib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBwbGF0Zm9ybS5kZXN0cm95Q3VzdG9tQ29udGV4dChjdXN0b21Db250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBJbWFnZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoSU1BR0UsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uIHx8IChDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90LCBTb3VyY2UgfSBmcm9tICdAZTJkL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VFeHRlbnNpb24sIElNQUdFIH0gZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgdmFyIENhbnZhc0ltYWdlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNJbWFnZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihpbWFnZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gU291cmNlLmdldFJlc291cmNlKGltYWdlLCBlbmdpbmUpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5sb2FkZWQgfHwgIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBlbmdpbmUucGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIEltYWdlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChJTUFHRSwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNJbWFnZUV4dGVuc2lvbiB8fCAoQ2FudmFzSW1hZ2VFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QsIH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGUyZC9yZXNvdXJjZXMnO1xuZXhwb3J0IGNvbnN0IElNQUdFID0gJ2ltYWdlJztcbmV4cG9ydCB2YXIgSW1hZ2U7XG4oZnVuY3Rpb24gKEltYWdlKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGltYWdlLCBib3VuZHMsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmxvYWRlZCB8fCAhcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgIGJvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBJbWFnZS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShJbWFnZSB8fCAoSW1hZ2UgPSB7fSkpO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIEltYWdlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChJbWFnZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGhpdFRlc3QoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGxvY2FsIH0gPSBlbmdpbmUucG9pbnRlckV2ZW50cztcbiAgICAgICAgSW1hZ2UuY2FsY3VsYXRlQm91bmRzKGltYWdlLCBib3VuZHMsIGVuZ2luZSk7XG4gICAgICAgIHJldHVybiBSZWN0YW5nbGUuY29udGFpbnMoYm91bmRzLCBsb2NhbCk7XG4gICAgfVxuICAgIEltYWdlRXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KElNQUdFLCBoaXRUZXN0KTtcbiAgICAgICAgSW1hZ2VSZXNvdXJjZS5pbml0KGVuZ2luZSk7XG4gICAgfVxuICAgIEltYWdlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoSW1hZ2VFeHRlbnNpb24gfHwgKEltYWdlRXh0ZW5zaW9uID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMtaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMtaW1hZ2UtY29sb3InO1xuIiwiZXhwb3J0IHZhciBJbWFnZVJlc291cmNlO1xuKGZ1bmN0aW9uIChJbWFnZVJlc291cmNlKSB7XG4gICAgZnVuY3Rpb24gcmVzb2x2ZShhc3NldCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGFzc2V0LnNwbGl0KCcuJykucG9wKCk7XG4gICAgICAgIHN3aXRjaCAoZXh0ZW5zaW9uKSB7XG4gICAgICAgICAgICBjYXNlICdwbmcnOlxuICAgICAgICAgICAgY2FzZSAnanBnJzpcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBhc3NldDtcbiAgICAgICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBpbWFnZSBsb2FkZWQ6ICR7YXNzZXR9YCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmltYWdlID0gaW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ2ltYWdlIGxvYWQgZXJyb3InLCBlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIEltYWdlUmVzb3VyY2UucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLnJlc291cmNlcy5yZXNvbHZlcnMuYWRkKHJlc29sdmUpO1xuICAgIH1cbiAgICBJbWFnZVJlc291cmNlLmluaXQgPSBpbml0O1xufSkoSW1hZ2VSZXNvdXJjZSB8fCAoSW1hZ2VSZXNvdXJjZSA9IHt9KSk7XG4iLCJjb25zdCBQSV8yID0gTWF0aC5QSSAqIDI7XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlFbGxpcHNlKGRhdGEsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgcmFkaXVzID0gMCwgcmFkaXVzWCwgcmFkaXVzWSwgfSA9IGRhdGE7XG4gICAgY29uc3QgcnggPSByYWRpdXNYID8/IHJhZGl1cztcbiAgICBjb25zdCByeSA9IHJhZGl1c1kgPz8gcmFkaXVzO1xuICAgIGlmIChyeCA9PT0gMCB8fCByeSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuZWxsaXBzZSh4LCB5LCByeCwgcnksIDAsIDAsIFBJXzIpO1xuICAgIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q29tbWFuZChjb21tYW5kLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBjb21tYW5kO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtb3ZlVG8nOlxuICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKG1vdmVUby54ID8/IDAsIG1vdmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2xpbmVUbyc6XG4gICAgICAgICAgICBjb25zdCBsaW5lVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8obGluZVRvLnggPz8gMCwgbGluZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3VydmVUbyc6XG4gICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyhjdXJ2ZVRvLmN4ID8/IDAsIGN1cnZlVG8uY3kgPz8gMCwgY3VydmVUby54ID8/IDAsIGN1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjdWJpY0N1cnZlVG8nOlxuICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQuYmV6aWVyQ3VydmVUbyhjdWJpY0N1cnZlVG8uY3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLmN5ID8/IDAsIGN1YmljQ3VydmVUby5zeCA/PyAwLCBjdWJpY0N1cnZlVG8uc3kgPz8gMCwgY3ViaWNDdXJ2ZVRvLnggPz8gMCwgY3ViaWNDdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBhdGgoZGF0YSwgY29udGV4dCkge1xuICAgIGlmICghZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gZGF0YVtpXTtcbiAgICAgICAgYXBwbHlDb21tYW5kKGNvbW1hbmQsIGNvbnRleHQpO1xuICAgIH1cbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UmVjdGFuZ2xlKGRhdGEsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgd2lkdGggPSAwLCBoZWlnaHQgPSAwLCB9ID0gZGF0YTtcbiAgICBpZiAod2lkdGggPT09IDAgfHwgaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29udGV4dC5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAZTJkL2NvcmUnO1xuaW1wb3J0IHsgTWF0cml4LCBQb2ludCwgUmVjdGFuZ2xlLCB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBTaGFwZUV4dGVuc2lvbiwgU0hBUEUsIFNoYXBlIH0gZnJvbSAnLi4vc2hhcGUnO1xuaW1wb3J0IHsgYXBwbHlSZWN0YW5nbGUgfSBmcm9tICcuL3JlY3RhbmdsZSc7XG5pbXBvcnQgeyBhcHBseUVsbGlwc2UgfSBmcm9tICcuL2VsbGlwc2UnO1xuaW1wb3J0IHsgYXBwbHlQYXRoIH0gZnJvbSAnLi9wYXRoJztcbmltcG9ydCB7IGFwcGx5U3RyaW5nIH0gZnJvbSAnLi9zdHJpbmcnO1xuaW1wb3J0IHsgc2V0RmlsbFN0eWxlLCBzZXRTdHJva2VTdHlsZSB9IGZyb20gJy4vc3R5bGUnO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5jb25zdCBvZmZzZXQgPSBQb2ludC5lbXB0eSgpO1xuZnVuY3Rpb24gcmVuZGVyR3JhcGhpY3MoZGF0YSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGNvbnN0IHsgZmlsbCwgc3Ryb2tlIH0gPSBkYXRhO1xuICAgIGNvbnN0IGhhc0ZpbGwgPSAhIWZpbGwgfHwgZmlsbCA9PT0gMDtcbiAgICBjb25zdCBoYXNTdHJva2UgPSAhIXN0cm9rZSB8fCBzdHJva2UgPT09IDA7XG4gICAgaWYgKCFoYXNGaWxsICYmICFoYXNTdHJva2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZXhpc3QgPSB0cnVlO1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gZGF0YTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAncmVjdGFuZ2xlJzpcbiAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlSZWN0YW5nbGUoZGF0YSwgY29udGV4dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICAgICAgICBleGlzdCA9IGFwcGx5RWxsaXBzZShkYXRhLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYXRoJzpcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBkYXRhO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXRoLmRhdGEgPT09ICdzdHJpbmcnICYmIHBhdGguZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IGFwcGx5U3RyaW5nKHBhdGguZGF0YSwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHBhdGguZGF0YSkgJiYgcGF0aC5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlQYXRoKHBhdGguZGF0YSwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKCFleGlzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIHNldEZpbGxTdHlsZShmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbiAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgfVxuICAgIGlmIChoYXNTdHJva2UpIHtcbiAgICAgICAgc2V0U3Ryb2tlU3R5bGUoc3Ryb2tlLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB9XG59XG5leHBvcnQgdmFyIENhbnZhc1NoYXBlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNTaGFwZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihzaGFwZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gc2hhcGU7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBQb2ludC5zZXRFbXB0eShvZmZzZXQpO1xuICAgICAgICBpZiAoUGl2b3QuaGFzVmFsdWVzKHNoYXBlKSkge1xuICAgICAgICAgICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzKHNoYXBlLCBib3VuZHMpO1xuICAgICAgICAgICAgaWYgKFJlY3RhbmdsZS5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmZzZXQueCA9IFBpdm90LmdldFgoc2hhcGUsIGJvdW5kcy53aWR0aCk7XG4gICAgICAgICAgICBvZmZzZXQueSA9IFBpdm90LmdldFkoc2hhcGUsIGJvdW5kcy53aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gZW5naW5lLnBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChQb2ludC5pc0VtcHR5KG9mZnNldCkpIHtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludExvY2FsKG1hdHJpeCwgb2Zmc2V0LCBvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCArIG9mZnNldC54LCBtYXRyaXgudHkgKyBvZmZzZXQueSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZW5kZXJHcmFwaGljcyhkYXRhW2ldLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dDJkLCBlbmdpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmVuZGVyR3JhcGhpY3MoZGF0YSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQyZCwgZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNTaGFwZUV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgU2hhcGVFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KFNIQVBFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNTaGFwZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc1NoYXBlRXh0ZW5zaW9uIHx8IChDYW52YXNTaGFwZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBHcmFwaGljc1N0cmluZ1JlYWRlciB9IGZyb20gJy4uL2RhdGEvc3RyaW5nJztcbmltcG9ydCB7IGFwcGx5Q29tbWFuZCB9IGZyb20gJy4vcGF0aCc7XG5jb25zdCByZWFkZXIgPSBuZXcgR3JhcGhpY3NTdHJpbmdSZWFkZXIoKTtcbmV4cG9ydCBmdW5jdGlvbiBhcHBseVN0cmluZyhkYXRhLCBjb250ZXh0KSB7XG4gICAgcmVhZGVyLnNldFBhdGgoZGF0YSk7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB3aGlsZSAocmVhZGVyLnJlYWROZXh0KCkpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHJlYWRlci5nZXRDb21tYW5kKCk7XG4gICAgICAgIGlmIChjb21tYW5kKSB7XG4gICAgICAgICAgICBhcHBseUNvbW1hbmQoY29tbWFuZCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IENhbnZhc1BhdHRlcm5zIH0gZnJvbSAnQGUyZC9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IFNvdXJjZSB9IGZyb20gJ0BlMmQvY29yZSc7XG5pbXBvcnQgeyBNYXRyaXggfSBmcm9tICdAZTJkL2dlb20nO1xuY29uc3QgZW1wdHlNYXRyaXggPSBNYXRyaXguZW1wdHkoKTtcbmNvbnN0IGVtcHR5QXJyYXkgPSBbXTtcbmZ1bmN0aW9uIGdldENhbnZhc1BhdHRlcm4oZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihmaWxsLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgc3dpdGNoIChmaWxsLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NvbGlkJzpcbiAgICAgICAgICAgICAgICBjb25zdCBzb2xpZCA9IGZpbGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihzb2xpZC5jb2xvciA/PyAwLCBzb2xpZC5hbHBoYSA/PyAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBjYXNlICdsaW5lYXInOlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgbWF0cml4OiBtbCA9IGVtcHR5TWF0cml4LCBjb2xvcnM6IGNsID0gZW1wdHlBcnJheSwgYWxwaGFzOiBhbCA9IGVtcHR5QXJyYXksIHJhdGlvczogcmwgPSBlbXB0eUFycmF5LCB9ID0gZmlsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMubGluZWFyR3JhZGllbnRQYXR0ZXJuKG1sLCBjbCwgYWwsIHJsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCk7XG4gICAgICAgICAgICBjYXNlICdyYWRpYWwnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgbWF0cml4OiBtciA9IGVtcHR5TWF0cml4LCBjb2xvcnM6IGNyID0gZW1wdHlBcnJheSwgYWxwaGFzOiBhciA9IGVtcHR5QXJyYXksIHJhdGlvczogcnIgPSBlbXB0eUFycmF5LCB9ID0gZmlsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMucmFkaWFsR3JhZGllbnRQYXR0ZXJuKG1yLCBjciwgYXIsIHJyLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCk7XG4gICAgICAgICAgICBjYXNlICdiaXRtYXAnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVwZWF0ID0gdHJ1ZSB9ID0gZmlsbDtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IFNvdXJjZS5nZXRSZXNvdXJjZShmaWxsLCBlbmdpbmUpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIENhbnZhc1BhdHRlcm5zLmJpdG1hcFBhdHRlcm4ocmVzb3VyY2UuaW1hZ2UsIHJlcGVhdCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWxsU3R5bGUoZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZ2V0Q2FudmFzUGF0dGVybihmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHJva2VTdHlsZShzdHJva2UsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpIHtcbiAgICBpZiAodHlwZW9mIHN0cm9rZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihzdHJva2UsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2Ygc3Ryb2tlID09PSAnb2JqZWN0JyAmJiBzdHJva2UuZmlsbCkge1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gZ2V0Q2FudmFzUGF0dGVybihzdHJva2UuZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQm91bmRzIH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IFBhdGhDb21tYW5kIH0gZnJvbSAnLi9wYXRoJztcbmltcG9ydCB7IEdyYXBoaWNzU3RyaW5nIH0gZnJvbSAnLi9zdHJpbmcnO1xuZXhwb3J0IHZhciBSZWN0YW5nbGVEYXRhO1xuKGZ1bmN0aW9uIChSZWN0YW5nbGVEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgd2lkdGggPSAwLCBoZWlnaHQgPSAwLCB9ID0gZGF0YTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4LCB5KTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQpO1xuICAgIH1cbiAgICBSZWN0YW5nbGVEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFJlY3RhbmdsZURhdGEgfHwgKFJlY3RhbmdsZURhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBFbGxpcHNlRGF0YTtcbihmdW5jdGlvbiAoRWxsaXBzZURhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCByYWRpdXMgPSAwLCByYWRpdXNYLCByYWRpdXNZLCB9ID0gZGF0YTtcbiAgICAgICAgY29uc3QgcnggPSByYWRpdXNYID8/IHJhZGl1cztcbiAgICAgICAgY29uc3QgcnkgPSByYWRpdXNZID8/IHJhZGl1cztcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4IC0gcngsIHkgLSByeSk7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCArIHJ4LCB5ICsgcnkpO1xuICAgIH1cbiAgICBFbGxpcHNlRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShFbGxpcHNlRGF0YSB8fCAoRWxsaXBzZURhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBQYXRoRGF0YTtcbihmdW5jdGlvbiAoUGF0aERhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aERhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHBhdGhEYXRhO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tYW5kID0gZGF0YVtpXTtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBQYXRoRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShQYXRoRGF0YSB8fCAoUGF0aERhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBHcmFwaGljc0RhdGE7XG4oZnVuY3Rpb24gKEdyYXBoaWNzRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBkYXRhO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICAgICAgUmVjdGFuZ2xlRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgICAgICAgICAgIEVsbGlwc2VEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGF0aCc6XG4gICAgICAgICAgICAgICAgUGF0aERhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc0RhdGEgfHwgKEdyYXBoaWNzRGF0YSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdAZTJkL2dlb20nO1xuZXhwb3J0IHZhciBQYXRoQ29tbWFuZDtcbihmdW5jdGlvbiAoUGF0aENvbW1hbmQpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aCwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gcGF0aDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdtb3ZlVG8nOlxuICAgICAgICAgICAgY2FzZSAnbGluZVRvJzpcbiAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgbW92ZVRvLnggPz8gMCwgbW92ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjdXJ2ZVRvJzpcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1cnZlVG8uY3ggPz8gMCwgY3VydmVUby5jeSA/PyAwKTtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1cnZlVG8ueCA/PyAwLCBjdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjdWJpY0N1cnZlVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8uY3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLmN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLnN4ID8/IDAsIGN1YmljQ3VydmVUby5zeSA/PyAwKTtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby54ID8/IDAsIGN1YmljQ3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShQYXRoQ29tbWFuZCB8fCAoUGF0aENvbW1hbmQgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGF0aENvbW1hbmQsIH0gZnJvbSAnLi9wYXRoJztcbmNvbnN0IE5VTUJFUlNfQ09VTlQgPSB7XG4gICAgTTogMixcbiAgICBtOiAyLFxuICAgIEw6IDIsXG4gICAgbDogMixcbiAgICBIOiAxLFxuICAgIGg6IDEsXG4gICAgVjogMSxcbiAgICB2OiAxLFxuICAgIEM6IDYsXG4gICAgYzogNixcbiAgICBTOiA0LFxuICAgIHM6IDQsXG4gICAgUTogNCxcbiAgICBxOiA0LFxuICAgIFQ6IDIsXG4gICAgdDogMixcbn07XG5leHBvcnQgY2xhc3MgR3JhcGhpY3NTdHJpbmdTdHJlYW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBhdGggPSAnJztcbiAgICAgICAgdGhpcy5jb21tYW5kID0gbnVsbDtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIHRoaXMuY29tbWFuZFJlZ2V4ID0gL1tNbUxsSGhWdkNjU3NRcVR0XS9nO1xuICAgICAgICB0aGlzLm51bWJlclJlZ2V4ID0gL1stK1xcZC5dKy9nO1xuICAgIH1cbiAgICBzZXRQYXRoKHBhdGgpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5jb21tYW5kUmVnZXgubGFzdEluZGV4ID0gMDtcbiAgICB9XG4gICAgZ2V0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZDtcbiAgICB9XG4gICAgZ2V0QnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWZmZXI7XG4gICAgfVxuICAgIHJlYWROZXh0KCkge1xuICAgICAgICBjb25zdCBjb21tYW5kTWF0Y2ggPSB0aGlzLmNvbW1hbmRSZWdleC5leGVjKHRoaXMucGF0aCk7XG4gICAgICAgIGlmIChjb21tYW5kTWF0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZCA9IGNvbW1hbmRNYXRjaFswXTtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gTlVNQkVSU19DT1VOVFt0aGlzLmNvbW1hbmRdO1xuICAgICAgICAgICAgdGhpcy5udW1iZXJSZWdleC5sYXN0SW5kZXggPSBjb21tYW5kTWF0Y2guaW5kZXg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBudW1iZXJNYXRjaCA9IHRoaXMubnVtYmVyUmVnZXguZXhlYyh0aGlzLnBhdGgpO1xuICAgICAgICAgICAgICAgIGlmIChudW1iZXJNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlcltpXSA9IHBhcnNlRmxvYXQobnVtYmVyTWF0Y2hbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBHcmFwaGljc1N0cmluZ1JlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtID0gbmV3IEdyYXBoaWNzU3RyaW5nU3RyZWFtKCk7XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IHsgdHlwZTogJ21vdmVUbycgfTtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFggPSAwO1xuICAgICAgICB0aGlzLmxhc3RZID0gMDtcbiAgICB9XG4gICAgc2V0UGF0aChwYXRoKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtLnNldFBhdGgocGF0aCk7XG4gICAgICAgIHRoaXMubGFzdFggPSAwO1xuICAgICAgICB0aGlzLmxhc3RZID0gMDtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gZmFsc2U7XG4gICAgfVxuICAgIGdldENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRFeGlzdHMgPyB0aGlzLmNvbW1hbmQgOiBudWxsO1xuICAgIH1cbiAgICByZWFkTmV4dCgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0ucmVhZE5leHQoKTtcbiAgICAgICAgdGhpcy5wYXJzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kRXhpc3RzO1xuICAgIH1cbiAgICBwYXJzZSgpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMuc3RyZWFtLmdldENvbW1hbmQoKTtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gISFjb21tYW5kO1xuICAgICAgICBpZiAoIXRoaXMuY29tbWFuZEV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuc3RyZWFtLmdldEJ1ZmZlcigpO1xuICAgICAgICBjb25zdCBbZTAsIGUxLCBlMiwgZTMsIGU0LCBlNSxdID0gYnVmZmVyO1xuICAgICAgICBsZXQgY3ggPSAwO1xuICAgICAgICBsZXQgY3kgPSAwO1xuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbW92ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ21vdmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gZTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IGU0O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGU1O1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTQgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGU1ICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gY3g7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGN5O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTM7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IGN4O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSBjeTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGUzICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gY3g7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSBjeTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IGN4O1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gY3k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IHJlYWRlciA9IG5ldyBHcmFwaGljc1N0cmluZ1JlYWRlcigpO1xuZXhwb3J0IHZhciBHcmFwaGljc1N0cmluZztcbihmdW5jdGlvbiAoR3JhcGhpY3NTdHJpbmcpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aCwgYm91bmRzKSB7XG4gICAgICAgIHJlYWRlci5zZXRQYXRoKHBhdGgpO1xuICAgICAgICB3aGlsZSAocmVhZGVyLnJlYWROZXh0KCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSByZWFkZXIuZ2V0Q29tbWFuZCgpO1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc1N0cmluZyB8fCAoR3JhcGhpY3NTdHJpbmcgPSB7fSkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhpY3Mge1xuICAgIGNvbnN0cnVjdG9yKHNoYXBlKSB7XG4gICAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZTtcbiAgICB9XG4gICAgYmVnaW5GaWxsKGNvbG9yID0gMCwgYWxwaGEgPSAxKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBiZWdpbkJpdG1hcEZpbGwoc3JjLCBtYXRyaXgsIHJlcGVhdCA9IHRydWUsIHNtb290aCA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdiaXRtYXAnLFxuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgcmVwZWF0LFxuICAgICAgICAgICAgc21vb3RoLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBiZWdpbkdyYWRpZW50RmlsbCh0eXBlLCBjb2xvciwgYWxwaGEsIHJhdGlvLCBtYXRyaXgsIHNwcmVhZCA9ICdyZXBlYXQnLCBpbnRlcnBvbGF0aW9uID0gJ3JnYicsIGZvY2FsUG9pbnRSYXRpbyA9IDApIHtcbiAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHNwcmVhZCxcbiAgICAgICAgICAgIGludGVycG9sYXRpb24sXG4gICAgICAgICAgICBmb2NhbFBvaW50UmF0aW8sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxpbmVTdHlsZSh0aGlja25lc3MgPSAwLCBjb2xvciA9IDAsIGFscGhhID0gMSwgcGl4ZWxIaW50aW5nID0gZmFsc2UsIHNjYWxlTW9kZSA9ICdub25lJywgY2FwcyA9ICdyb3VuZCcsIGpvaW50cyA9ICdyb3VuZCcsIG1pdGVyTGltaXQgPSAzKSB7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0ge1xuICAgICAgICAgICAgdGhpY2tuZXNzLFxuICAgICAgICAgICAgcGl4ZWxIaW50aW5nLFxuICAgICAgICAgICAgc2NhbGVNb2RlLFxuICAgICAgICAgICAgY2FwcyxcbiAgICAgICAgICAgIGpvaW50cyxcbiAgICAgICAgICAgIG1pdGVyTGltaXQsXG4gICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxpbmVHcmFkaWVudFN0eWxlKHR5cGUsIGNvbG9yLCBhbHBoYSwgcmF0aW8sIG1hdHJpeCwgc3ByZWFkID0gJ3JlcGVhdCcsIGludGVycG9sYXRpb24gPSAncmdiJywgZm9jYWxQb2ludFJhdGlvID0gMCkge1xuICAgICAgICBpZiAoIXRoaXMuc3Ryb2tlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHJva2UuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICBzcHJlYWQsXG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9uLFxuICAgICAgICAgICAgZm9jYWxQb2ludFJhdGlvLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsaW5lQml0bWFwU3R5bGUoc3JjLCBtYXRyaXgsIHJlcGVhdCA9IHRydWUsIHNtb290aCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy5zdHJva2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0cm9rZS5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ2JpdG1hcCcsXG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICBzbW9vdGgsXG4gICAgICAgIH07XG4gICAgfVxuICAgIG1vdmVUbyh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICBwYXRoLnB1c2goeyB0eXBlOiAnbW92ZVRvJywgeCwgeSB9KTtcbiAgICB9XG4gICAgbGluZVRvKHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goeyB0eXBlOiAnbGluZVRvJywgeCwgeSB9KTtcbiAgICB9XG4gICAgY3VydmVUbyhjeCwgY3ksIHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1cnZlVG8nLCBjeCwgY3ksIHgsIHksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjdWJpY0N1cnZlVG8oY3gsIGN5LCBzeCwgc3ksIHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1cnZlVG8nLCBjeCwgY3ksIHN4LCBzeSwgeCwgeSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdSb3VuZFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgZWxsaXBzZVdpZHRoID0gMCwgZWxsaXBzZUhlaWdodCA9IDApIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnN0IHcgPSBlbGxpcHNlV2lkdGg7XG4gICAgICAgIGNvbnN0IGggPSBlbGxpcHNlSGVpZ2h0O1xuICAgICAgICBjb25zdCBrID0gMC41NTIyODQ4O1xuICAgICAgICBjb25zdCBveCA9ICh3IC8gMikgKiBrO1xuICAgICAgICBjb25zdCBveSA9IChoIC8gMikgKiBrO1xuICAgICAgICBjb25zdCB4ZSA9IHggKyB3O1xuICAgICAgICBjb25zdCB5ZSA9IHkgKyBoO1xuICAgICAgICBjb25zdCB4bSA9IHggKyB3IC8gMjtcbiAgICAgICAgY29uc3QgeW0gPSB5ICsgaCAvIDI7XG4gICAgICAgIGNvbnN0IGR4ID0gd2lkdGggLSB3O1xuICAgICAgICBjb25zdCBkeSA9IGhlaWdodCAtIGg7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbW92ZVRvJyxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5OiB5bSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4LFxuICAgICAgICAgICAgY3k6IHltIC0gb3ksXG4gICAgICAgICAgICBzeDogeG0gLSBveCxcbiAgICAgICAgICAgIHN5OiB5LFxuICAgICAgICAgICAgeDogeG0sXG4gICAgICAgICAgICB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeG0gKyBkeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeG0gKyBveCArIGR4LFxuICAgICAgICAgICAgY3k6IHksXG4gICAgICAgICAgICBzeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHN5OiB5bSAtIG95LFxuICAgICAgICAgICAgeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHk6IHltLFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHk6IHltICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeGUgKyBkeCxcbiAgICAgICAgICAgIGN5OiB5bSArIG95ICsgZHksXG4gICAgICAgICAgICBzeDogeG0gKyBveCArIGR4LFxuICAgICAgICAgICAgc3k6IHllICsgZHksXG4gICAgICAgICAgICB4OiB4bSArIGR4LFxuICAgICAgICAgICAgeTogeWUgKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhtLFxuICAgICAgICAgICAgeTogeWUgKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4bSAtIG94LFxuICAgICAgICAgICAgY3k6IHllICsgZHksXG4gICAgICAgICAgICBzeDogeCxcbiAgICAgICAgICAgIHN5OiB5bSArIG95ICsgZHksXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeTogeW0gKyBkeSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAncmVjdGFuZ2xlJztcbiAgICAgICAgZGF0YS54ID0geDtcbiAgICAgICAgZGF0YS55ID0geTtcbiAgICAgICAgZGF0YS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBkYXRhLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgZHJhd0NpcmNsZSh4LCB5LCByYWRpdXMpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAnZWxsaXBzZSc7XG4gICAgICAgIGRhdGEueCA9IHg7XG4gICAgICAgIGRhdGEueSA9IHk7XG4gICAgICAgIGRhdGEucmFkaXVzID0gcmFkaXVzO1xuICAgIH1cbiAgICBkcmF3RWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ2VsbGlwc2UnO1xuICAgICAgICBkYXRhLnJhZGl1c1ggPSB3aWR0aCAvIDI7XG4gICAgICAgIGRhdGEucmFkaXVzWSA9IGhlaWdodCAvIDI7XG4gICAgICAgIGRhdGEueCA9IHggLSBkYXRhLnJhZGl1c1g7XG4gICAgICAgIGRhdGEueSA9IHkgLSBkYXRhLnJhZGl1c1k7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5zaGFwZS5kYXRhO1xuICAgIH1cbiAgICBjcmVhdGVEYXRhKCkge1xuICAgICAgICBjb25zdCB7IHNoYXBlLCBmaWxsLCBzdHJva2UgfSA9IHRoaXM7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNoYXBlLmRhdGEpKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHNoYXBlLmRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBzaGFwZS5kYXRhID0gW3NoYXBlLmRhdGFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hhcGUuZGF0YSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyYXBoaWNzRGF0YSA9IHsgdHlwZTogJ3BhdGgnLCBmaWxsLCBzdHJva2UgfTtcbiAgICAgICAgc2hhcGUuZGF0YS5wdXNoKGdyYXBoaWNzRGF0YSk7XG4gICAgICAgIHJldHVybiBncmFwaGljc0RhdGE7XG4gICAgfVxuICAgIGJlZ2luUGF0aCgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLmRhdGEgPSBbXTtcbiAgICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcbiAgICB9XG4gICAgZ2V0UGF0aCgpIHtcbiAgICAgICAgY29uc3QgeyBzaGFwZSB9ID0gdGhpcztcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNoYXBlLmRhdGEpIHx8ICFzaGFwZS5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gc2hhcGUuZGF0YVtzaGFwZS5kYXRhLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5kYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YS5kYXRhO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vZGF0YS9kYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9wYXRoJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9zdHJpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL3N0eWxlJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JhcGhpY3MnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFwZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy9zaGFwZSc7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BlMmQvY29yZSc7XG5pbXBvcnQgeyBCb3VuZHMsIFJlY3RhbmdsZSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGUyZC9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgR3JhcGhpY3NEYXRhIH0gZnJvbSAnLi9kYXRhL2RhdGEnO1xuaW1wb3J0IEdyYXBoaWNzIGZyb20gJy4vZ3JhcGhpY3MnO1xuZXhwb3J0IGNvbnN0IFNIQVBFID0gJ3NoYXBlJztcbmNvbnN0IGJvdW5kcyA9IEJvdW5kcy5lbXB0eSgpO1xuZXhwb3J0IHZhciBTaGFwZTtcbihmdW5jdGlvbiAoU2hhcGUpIHtcbiAgICBmdW5jdGlvbiBnZXRHcmFwaGljcyhzaGFwZSkge1xuICAgICAgICByZXR1cm4gbmV3IEdyYXBoaWNzKHNoYXBlKTtcbiAgICB9XG4gICAgU2hhcGUuZ2V0R3JhcGhpY3MgPSBnZXRHcmFwaGljcztcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoc2hhcGUsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHNoYXBlO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEJvdW5kcy5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhW2ldLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJvdW5kcy5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdpZHRoID0gYm91bmRzLm1heFggLSBib3VuZHMubWluWDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gYm91bmRzLm1heFkgLSBib3VuZHMubWluWTtcbiAgICAgICAgY29uc3QgeCA9IGJvdW5kcy5taW5YICsgUGl2b3QuZ2V0WChzaGFwZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gYm91bmRzLm1pblkgKyBQaXZvdC5nZXRZKHNoYXBlLCBoZWlnaHQpO1xuICAgICAgICByZXN1bHQueCA9IHg7XG4gICAgICAgIHJlc3VsdC55ID0geTtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIFNoYXBlLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFNoYXBlIHx8IChTaGFwZSA9IHt9KSk7XG5jb25zdCByZWN0YW5nbGUgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgU2hhcGVFeHRlbnNpb247XG4oZnVuY3Rpb24gKFNoYXBlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdChzaGFwZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgbG9jYWwgfSA9IGVuZ2luZS5wb2ludGVyRXZlbnRzO1xuICAgICAgICBTaGFwZS5jYWxjdWxhdGVCb3VuZHMoc2hhcGUsIHJlY3RhbmdsZSk7XG4gICAgICAgIHJldHVybiBSZWN0YW5nbGUuY29udGFpbnMocmVjdGFuZ2xlLCBsb2NhbCk7XG4gICAgfVxuICAgIFNoYXBlRXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KFNIQVBFLCBoaXRUZXN0KTtcbiAgICAgICAgSW1hZ2VSZXNvdXJjZS5pbml0KGVuZ2luZSk7XG4gICAgfVxuICAgIFNoYXBlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoU2hhcGVFeHRlbnNpb24gfHwgKFNoYXBlRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IENhbnZhc1BhdHRlcm5zIH0gZnJvbSAnQGUyZC9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IEZvbnQgfSBmcm9tICcuL2ZvbnQnO1xuaW1wb3J0IHsgVGV4dEV4dGVuc2lvbiwgVEVYVCB9IGZyb20gJy4vdGV4dCc7XG5pbXBvcnQgeyBUZXh0Rm9ybWF0IH0gZnJvbSAnLi9mb3JtYXQnO1xuY29uc3QgdmFsaWRUZXh0Rm9ybWF0ID0ge307XG5leHBvcnQgdmFyIENhbnZhc1RleHRFeHRlbnNpb247XG4oZnVuY3Rpb24gKENhbnZhc1RleHRFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoY29tcG9uZW50LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghdGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbWF0cml4LCBjb2xvclRyYW5zZm9ybSB9ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0ZXh0Rm9ybWF0LCBib3JkZXIsIGJhY2tncm91bmQsIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIFRleHRGb3JtYXQuZ2V0VmFsaWRUZXh0Rm9ybWF0KHRleHRGb3JtYXQsIHZhbGlkVGV4dEZvcm1hdCk7XG4gICAgICAgIGNvbnN0IGZvcm1hdFNpemUgPSB2YWxpZFRleHRGb3JtYXQuc2l6ZTtcbiAgICAgICAgY29uc3QgZm9ybWF0TGV0dGVyU3BhY2luZyA9IHZhbGlkVGV4dEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICBjb25zdCBmb3JtYXRMZWFkaW5nID0gdmFsaWRUZXh0Rm9ybWF0LmxlYWRpbmc7XG4gICAgICAgIGNvbnN0IGZvbnQgPSBGb250LmdldEZvbnQodmFsaWRUZXh0Rm9ybWF0LmZvbnQpO1xuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBlbmdpbmUucGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB0ZXh0V2lkdGggPSBGb250LmdldFRleHRXaWR0aChmb250LCB2YWxpZFRleHRGb3JtYXQsIGxpbmVzKTtcbiAgICAgICAgY29uc3QgdGV4dEhlaWdodCA9IEZvbnQuZ2V0VGV4dEhlaWdodCh2YWxpZFRleHRGb3JtYXQsIGxpbmVzKTtcbiAgICAgICAgY29uc3QgcmVhbFdpZHRoID0gd2lkdGggPz8gdGV4dFdpZHRoO1xuICAgICAgICBjb25zdCByZWFsSGVpZ2h0ID0gaGVpZ2h0ID8/IHRleHRIZWlnaHQ7XG4gICAgICAgIGNvbnN0IG9mZnNldFggPSBQaXZvdC5nZXRYKGNvbXBvbmVudCwgcmVhbFdpZHRoKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IFBpdm90LmdldFkoY29tcG9uZW50LCByZWFsSGVpZ2h0KTtcbiAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICAgICAgICBjb25zdCBhbGlnblZlcnRpY2FsVmFsdWUgPSBUZXh0Rm9ybWF0LmdldFZlcnRpY2FsQWxpZ25WYWx1ZSh2YWxpZFRleHRGb3JtYXQudmVydGljYWxBbGlnbik7XG4gICAgICAgICAgICB5ID0gKGhlaWdodCAtIHRleHRIZWlnaHQpICogYWxpZ25WZXJ0aWNhbFZhbHVlO1xuICAgICAgICAgICAgaWYgKHkgPCAwKSB7XG4gICAgICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICBpZiAoYmFja2dyb3VuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnJztcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oYmFja2dyb3VuZCwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgY29udGV4dDJkLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLnJlY3Qob2Zmc2V0WCwgb2Zmc2V0WSwgcmVhbFdpZHRoLCByZWFsSGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oYm9yZGVyLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gJyc7XG4gICAgICAgICAgICBjb250ZXh0MmQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQucmVjdChvZmZzZXRYLCBvZmZzZXRZLCByZWFsV2lkdGgsIHJlYWxIZWlnaHQpO1xuICAgICAgICAgICAgY29udGV4dDJkLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQyZC5mb250ID0gRm9udC5nZXRTdHlsZUZvbnQodmFsaWRUZXh0Rm9ybWF0LmZvbnQsIGZvcm1hdFNpemUpO1xuICAgICAgICBjb250ZXh0MmQudGV4dEJhc2VsaW5lID0gJ2FscGhhYmV0aWMnO1xuICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnJztcbiAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybih2YWxpZFRleHRGb3JtYXQuY29sb3IsIHZhbGlkVGV4dEZvcm1hdC5hbHBoYSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICB5ICs9IG9mZnNldFk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IEZvbnQuZ2V0TGluZVdpZHRoKGZvbnQsIHZhbGlkVGV4dEZvcm1hdCwgbGluZSk7XG4gICAgICAgICAgICBjb25zdCBhbGlnblZhbHVlID0gVGV4dEZvcm1hdC5nZXRBbGlnblZhbHVlKHZhbGlkVGV4dEZvcm1hdC5hbGlnbik7XG4gICAgICAgICAgICBsZXQgeCA9IChyZWFsV2lkdGggLSBsaW5lV2lkdGgpICogYWxpZ25WYWx1ZTtcbiAgICAgICAgICAgIGlmICh4IDwgMCkge1xuICAgICAgICAgICAgICAgIHggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeCArPSBvZmZzZXRYO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaW5lLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3QgPSBsaW5lLmNoYXJBdChqKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmQgPSBsaW5lLmNoYXJBdChqICsgMSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShmb250LCBmb3JtYXRTaXplLCBmaXJzdCwgc2Vjb25kKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0MmQuZmlsbFRleHQoZmlyc3QsIHgsIHkgKyBmb3JtYXRTaXplKTtcbiAgICAgICAgICAgICAgICB4ICs9IGFkdmFuY2UgKyBmb3JtYXRMZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeSArPSBmb3JtYXRTaXplICsgZm9ybWF0TGVhZGluZztcbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNUZXh0RXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBUZXh0RXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChURVhULCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNUZXh0RXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ2FudmFzVGV4dEV4dGVuc2lvbiB8fCAoQ2FudmFzVGV4dEV4dGVuc2lvbiA9IHt9KSk7XG4iLCJjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmV4cG9ydCBjb25zdCBFTSA9IDEwMjQ7XG5jb25zdCBmb250cyA9IG5ldyBNYXAoKTtcbmV4cG9ydCB2YXIgRm9udDtcbihmdW5jdGlvbiAoRm9udCkge1xuICAgIGZ1bmN0aW9uIGdldFN0eWxlRm9udChmb250LCBzaXplKSB7XG4gICAgICAgIHJldHVybiBgJHtzaXplfXB4ICR7Zm9udH1gO1xuICAgIH1cbiAgICBGb250LmdldFN0eWxlRm9udCA9IGdldFN0eWxlRm9udDtcbiAgICBmdW5jdGlvbiBtZWFzdXJlVGV4dChmb250LCBzaXplLCB0ZXh0KSB7XG4gICAgICAgIGNvbnRleHQuZm9udCA9IGdldFN0eWxlRm9udChmb250LCBzaXplKTtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gICAgfVxuICAgIEZvbnQubWVhc3VyZVRleHQgPSBtZWFzdXJlVGV4dDtcbiAgICBmdW5jdGlvbiBnZXRDaGFyV2lkdGgoZm9udCwgY2hhcikge1xuICAgICAgICBsZXQgd2lkdGggPSBmb250LndpZHRocy5nZXQoY2hhcik7XG4gICAgICAgIGlmICghd2lkdGgpIHtcbiAgICAgICAgICAgIHdpZHRoID0gbWVhc3VyZVRleHQoZm9udC5uYW1lLCBFTSwgY2hhcik7XG4gICAgICAgICAgICBmb250LndpZHRocy5zZXQoY2hhciwgd2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gICAgRm9udC5nZXRDaGFyV2lkdGggPSBnZXRDaGFyV2lkdGg7XG4gICAgZnVuY3Rpb24gZ2V0S2VybmluZyhmb250LCBmaXJzdCwgc2Vjb25kKSB7XG4gICAgICAgIGNvbnN0IHBhaXIgPSBmaXJzdCArIHNlY29uZDtcbiAgICAgICAgbGV0IGtlcm5pbmcgPSBmb250Lmtlcm5pbmdzLmdldChwYWlyKTtcbiAgICAgICAgaWYgKCFrZXJuaW5nKSB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aFNlY29uZCA9IGdldENoYXJXaWR0aChmb250LCBzZWNvbmQpO1xuICAgICAgICAgICAgY29uc3Qgd2lkdGhUb3RhbCA9IG1lYXN1cmVUZXh0KGZvbnQubmFtZSwgRU0sIGZpcnN0ICsgc2Vjb25kKTtcbiAgICAgICAgICAgIGtlcm5pbmcgPSB3aWR0aFRvdGFsIC0gd2lkdGhTZWNvbmQ7XG4gICAgICAgICAgICBmb250Lmtlcm5pbmdzLnNldChwYWlyLCBrZXJuaW5nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2VybmluZztcbiAgICB9XG4gICAgRm9udC5nZXRLZXJuaW5nID0gZ2V0S2VybmluZztcbiAgICBmdW5jdGlvbiBnZXRBZHZhbmNlKGZvbnQsIHNpemUsIGZpcnN0LCBzZWNvbmQpIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBzaXplIC8gRU07XG4gICAgICAgIGNvbnN0IHdpZHRoID0gZ2V0Q2hhcldpZHRoKGZvbnQsIGZpcnN0KTtcbiAgICAgICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgICAgIHJldHVybiB3aWR0aCAqIHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtlcm5pbmcgPSBnZXRLZXJuaW5nKGZvbnQsIGZpcnN0LCBzZWNvbmQpO1xuICAgICAgICByZXR1cm4ga2VybmluZyAqIHNjYWxlO1xuICAgIH1cbiAgICBGb250LmdldEFkdmFuY2UgPSBnZXRBZHZhbmNlO1xuICAgIGZ1bmN0aW9uIGdldEZvbnQobmFtZSkge1xuICAgICAgICBsZXQgZm9udCA9IGZvbnRzLmdldChuYW1lKTtcbiAgICAgICAgaWYgKCFmb250KSB7XG4gICAgICAgICAgICBmb250ID0ge1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgd2lkdGhzOiBuZXcgTWFwKCksXG4gICAgICAgICAgICAgICAga2VybmluZ3M6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb250cy5zZXQobmFtZSwgZm9udCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvbnQ7XG4gICAgfVxuICAgIEZvbnQuZ2V0Rm9udCA9IGdldEZvbnQ7XG4gICAgZnVuY3Rpb24gZ2V0TGluZVdpZHRoKGZvbnQsIGZvcm1hdCwgbGluZSkge1xuICAgICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gbGluZS5jaGFyQXQoaSk7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmQgPSBsaW5lLmNoYXJBdChpICsgMSk7XG4gICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gZ2V0QWR2YW5jZShmb250LCBmb3JtYXQuc2l6ZSwgZmlyc3QsIHNlY29uZCk7XG4gICAgICAgICAgICB3aWR0aCArPSBhZHZhbmNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQubGV0dGVyU3BhY2luZyAmJiBsaW5lLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHdpZHRoICs9IGZvcm1hdC5sZXR0ZXJTcGFjaW5nICogKGxpbmUubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cbiAgICBGb250LmdldExpbmVXaWR0aCA9IGdldExpbmVXaWR0aDtcbiAgICBmdW5jdGlvbiBnZXRUZXh0V2lkdGgoZm9udCwgZm9ybWF0LCBsaW5lcykge1xuICAgICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICBjb25zdCBsaW5lV2lkdGggPSBnZXRMaW5lV2lkdGgoZm9udCwgZm9ybWF0LCBsaW5lKTtcbiAgICAgICAgICAgIGlmICh3aWR0aCA8IGxpbmVXaWR0aCkge1xuICAgICAgICAgICAgICAgIHdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gICAgRm9udC5nZXRUZXh0V2lkdGggPSBnZXRUZXh0V2lkdGg7XG4gICAgZnVuY3Rpb24gZ2V0VGV4dEhlaWdodChmb3JtYXQsIGxpbmVzKSB7XG4gICAgICAgIGxldCBoZWlnaHQgPSBmb3JtYXQuc2l6ZSAqIGxpbmVzLmxlbmd0aDtcbiAgICAgICAgaWYgKGZvcm1hdC5sZWFkaW5nICYmIGxpbmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGhlaWdodCArPSBmb3JtYXQubGVhZGluZyAqIChsaW5lcy5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH1cbiAgICBGb250LmdldFRleHRIZWlnaHQgPSBnZXRUZXh0SGVpZ2h0O1xufSkoRm9udCB8fCAoRm9udCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFRleHRGb3JtYXQ7XG4oZnVuY3Rpb24gKFRleHRGb3JtYXQpIHtcbiAgICBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0ID0ge1xuICAgICAgICBmb250OiAnYXJpYWwnLFxuICAgICAgICBzaXplOiAxNSxcbiAgICAgICAgY29sb3I6IDAsXG4gICAgICAgIGFscGhhOiAxLFxuICAgICAgICBib2xkOiBmYWxzZSxcbiAgICAgICAgaXRhbGljOiBmYWxzZSxcbiAgICAgICAgdW5kZXJsaW5lOiBmYWxzZSxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogMCxcbiAgICAgICAgbGVhZGluZzogMCxcbiAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgfTtcbiAgICBmdW5jdGlvbiBnZXRWYWxpZFRleHRGb3JtYXQoc291cmNlLCByZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0LmZvbnQgPSBzb3VyY2U/LmZvbnQgPz8gVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdC5mb250O1xuICAgICAgICByZXN1bHQuc2l6ZSA9IHNvdXJjZT8uc2l6ZSA/PyBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LnNpemU7XG4gICAgICAgIHJlc3VsdC5jb2xvciA9IHNvdXJjZT8uY29sb3IgPz8gVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdC5jb2xvcjtcbiAgICAgICAgcmVzdWx0LmFscGhhID0gc291cmNlPy5hbHBoYSA/PyBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LmFscGhhO1xuICAgICAgICByZXN1bHQuYm9sZCA9IHNvdXJjZT8uYm9sZCA/PyBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LmJvbGQ7XG4gICAgICAgIHJlc3VsdC5pdGFsaWMgPSBzb3VyY2U/Lml0YWxpYyA/PyBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0Lml0YWxpYztcbiAgICAgICAgcmVzdWx0LnVuZGVybGluZSA9IHNvdXJjZT8udW5kZXJsaW5lID8/IFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQudW5kZXJsaW5lO1xuICAgICAgICByZXN1bHQubGV0dGVyU3BhY2luZyA9IHNvdXJjZT8ubGV0dGVyU3BhY2luZyA/PyBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgICAgIHJlc3VsdC5sZWFkaW5nID0gc291cmNlPy5sZWFkaW5nID8/IFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQubGVhZGluZztcbiAgICAgICAgcmVzdWx0LmFsaWduID0gc291cmNlPy5hbGlnbiA/PyBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LmFsaWduO1xuICAgICAgICByZXN1bHQudmVydGljYWxBbGlnbiA9IHNvdXJjZT8udmVydGljYWxBbGlnbiA/PyBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LnZlcnRpY2FsQWxpZ247XG4gICAgfVxuICAgIFRleHRGb3JtYXQuZ2V0VmFsaWRUZXh0Rm9ybWF0ID0gZ2V0VmFsaWRUZXh0Rm9ybWF0O1xuICAgIGZ1bmN0aW9uIGdldEFsaWduVmFsdWUoYWxpZ24pIHtcbiAgICAgICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6IHJldHVybiAwO1xuICAgICAgICAgICAgY2FzZSAnY2VudGVyJzogcmV0dXJuIDAuNTtcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzogcmV0dXJuIDE7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmdldEFsaWduVmFsdWUgPSBnZXRBbGlnblZhbHVlO1xuICAgIGZ1bmN0aW9uIGdldFZlcnRpY2FsQWxpZ25WYWx1ZShhbGlnbikge1xuICAgICAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICAgICAgICBjYXNlICd0b3AnOiByZXR1cm4gMDtcbiAgICAgICAgICAgIGNhc2UgJ21pZGRsZSc6IHJldHVybiAwLjU7XG4gICAgICAgICAgICBjYXNlICdib3R0b20nOiByZXR1cm4gMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRGb3JtYXQuZ2V0VmVydGljYWxBbGlnblZhbHVlID0gZ2V0VmVydGljYWxBbGlnblZhbHVlO1xufSkoVGV4dEZvcm1hdCB8fCAoVGV4dEZvcm1hdCA9IHt9KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL3RleHQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtYXQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb250JztcbmV4cG9ydCAqIGZyb20gJy4vY2FudmFzLXRleHQnO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAZTJkL2NvcmUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IFRleHRGb3JtYXQgfSBmcm9tICcuL2Zvcm1hdCc7XG5pbXBvcnQgeyBGb250IH0gZnJvbSAnLi9mb250JztcbmV4cG9ydCBjb25zdCBURVhUID0gJ3RleHQnO1xuY29uc3QgdmFsaWRUZXh0Rm9ybWF0ID0ge307XG5leHBvcnQgdmFyIFRleHQ7XG4oZnVuY3Rpb24gKFRleHQpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoY29tcG9uZW50LCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghdGV4dCkge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgbGV0IHsgd2lkdGgsIGhlaWdodCB9ID0gY29tcG9uZW50O1xuICAgICAgICBjb25zdCB7IHRleHRGb3JtYXQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgVGV4dEZvcm1hdC5nZXRWYWxpZFRleHRGb3JtYXQodGV4dEZvcm1hdCwgdmFsaWRUZXh0Rm9ybWF0KTtcbiAgICAgICAgaWYgKCF3aWR0aCkge1xuICAgICAgICAgICAgY29uc3QgZm9udCA9IEZvbnQuZ2V0Rm9udCh2YWxpZFRleHRGb3JtYXQuZm9udCk7XG4gICAgICAgICAgICB3aWR0aCA9IEZvbnQuZ2V0VGV4dFdpZHRoKGZvbnQsIHZhbGlkVGV4dEZvcm1hdCwgbGluZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaGVpZ2h0KSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBGb250LmdldFRleHRIZWlnaHQodmFsaWRUZXh0Rm9ybWF0LCBsaW5lcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoY29tcG9uZW50LCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGNvbXBvbmVudCwgaGVpZ2h0KTtcbiAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgIGJvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBUZXh0LmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFRleHQgfHwgKFRleHQgPSB7fSkpO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIFRleHRFeHRlbnNpb247XG4oZnVuY3Rpb24gKFRleHRFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KHRleHQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGxvY2FsIH0gPSBlbmdpbmUucG9pbnRlckV2ZW50cztcbiAgICAgICAgVGV4dC5jYWxjdWxhdGVCb3VuZHModGV4dCwgYm91bmRzKTtcbiAgICAgICAgcmV0dXJuIFJlY3RhbmdsZS5jb250YWlucyhib3VuZHMsIGxvY2FsKTtcbiAgICB9XG4gICAgVGV4dEV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChURVhULCBoaXRUZXN0KTtcbiAgICB9XG4gICAgVGV4dEV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFRleHRFeHRlbnNpb24gfHwgKFRleHRFeHRlbnNpb24gPSB7fSkpO1xuIiwiZXhwb3J0IGNvbnN0IExJTkVBUiA9ICdsaW5lYXInO1xuZXhwb3J0IGNvbnN0IFFVQURSQVRJQyA9ICdxdWFkcmF0aWMnO1xuZXhwb3J0IGNvbnN0IFFVQURSQVRJQ19JTiA9ICdxdWFkcmF0aWNpbic7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDX09VVCA9ICdxdWFkcmF0aWNvdXQnO1xuZXhwb3J0IGNvbnN0IENVQklDID0gJ2N1YmljJztcbmV4cG9ydCBjb25zdCBDVUJJQ19JTiA9ICdjdWJpY2luJztcbmV4cG9ydCBjb25zdCBDVUJJQ19PVVQgPSAnY3ViaWNvdXQnO1xuZXhwb3J0IGNvbnN0IFFVQVJUSUMgPSAncXVhcnRpYyc7XG5leHBvcnQgY29uc3QgUVVBUlRJQ19JTiA9ICdxdWFydGljaW4nO1xuZXhwb3J0IGNvbnN0IFFVQVJUSUNfT1VUID0gJ3F1YXJ0aWNvdXQnO1xuZXhwb3J0IGNvbnN0IFFVSU5USUMgPSAncXVpbnRpYyc7XG5leHBvcnQgY29uc3QgUVVJTlRJQ19JTiA9ICdxdWludGljaW4nO1xuZXhwb3J0IGNvbnN0IFFVSU5USUNfT1VUID0gJ3F1aW50aWNvdXQnO1xuZXhwb3J0IGNvbnN0IFNJTlVTT0lEQUwgPSAncXVpbnRpYyc7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTF9JTiA9ICdxdWludGljaW4nO1xuZXhwb3J0IGNvbnN0IFNJTlVTT0lEQUxfT1VUID0gJ3F1aW50aWNvdXQnO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMID0gJ2V4cG9uZW50aWFsJztcbmV4cG9ydCBjb25zdCBFWFBPTkVOVElBTF9JTiA9ICdleHBvbmVudGlhbGluJztcbmV4cG9ydCBjb25zdCBFWFBPTkVOVElBTF9PVVQgPSAnZXhwb25lbnRpYWxvdXQnO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSID0gJ2NpcmN1bGFyJztcbmV4cG9ydCBjb25zdCBDSVJDVUxBUl9JTiA9ICdjaXJjdWxhcmluJztcbmV4cG9ydCBjb25zdCBDSVJDVUxBUl9PVVQgPSAnY2lyY3VsYXJvdXQnO1xuZXhwb3J0IGNvbnN0IEVMQVNUSUMgPSAnZWxhc3RpYyc7XG5leHBvcnQgY29uc3QgRUxBU1RJQ19JTiA9ICdlbGFzdGljaW4nO1xuZXhwb3J0IGNvbnN0IEVMQVNUSUNfT1VUID0gJ2VsYXN0aWNvdXQnO1xuZXhwb3J0IGNvbnN0IEJBQ0sgPSAnYmFjayc7XG5leHBvcnQgY29uc3QgQkFDS19JTiA9ICdiYWNraW4nO1xuZXhwb3J0IGNvbnN0IEJBQ0tfT1VUID0gJ2JhY2tvdXQnO1xuZXhwb3J0IGNvbnN0IEJPVU5DRSA9ICdib3VuY2UnO1xuZXhwb3J0IGNvbnN0IEJPVU5DRV9JTiA9ICdib3VuY2Vpbic7XG5leHBvcnQgY29uc3QgQk9VTkNFX09VVCA9ICdib3VuY2VvdXQnO1xuZXhwb3J0IGNvbnN0IGVhc2luZyA9IHtcbiAgICBbTElORUFSXTogKHZhbHVlKSA9PiB2YWx1ZSxcbiAgICBbUVVBRFJBVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTAuNSAqICgtLXZhbHVlICogKHZhbHVlIC0gMikgLSAxKTtcbiAgICB9LFxuICAgIFtRVUFEUkFUSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVBRFJBVElDX09VVF06ICh2YWx1ZSkgPT4gKHZhbHVlICogKDIgLSB2YWx1ZSkpLFxuICAgIFtDVUJJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKyAyKTtcbiAgICB9LFxuICAgIFtDVUJJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW0NVQklDX09VVF06ICh2YWx1ZSkgPT4gKC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMSksXG4gICAgW1FVQVJUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgLSAyKTtcbiAgICB9LFxuICAgIFtRVUFSVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUFSVElDX09VVF06ICh2YWx1ZSkgPT4gKDEgLSAtLXZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVJTlRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDIpO1xuICAgIH0sXG4gICAgW1FVSU5USUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVJTlRJQ19PVVRdOiAodmFsdWUpID0+ICgtLXZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAxKSxcbiAgICBbU0lOVVNPSURBTF06ICh2YWx1ZSkgPT4gKDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIHZhbHVlKSkpLFxuICAgIFtTSU5VU09JREFMX0lOXTogKHZhbHVlKSA9PiAoMSAtIE1hdGguY29zKCh2YWx1ZSAqIE1hdGguUEkpIC8gMikpLFxuICAgIFtTSU5VU09JREFMX09VVF06ICh2YWx1ZSkgPT4gKE1hdGguc2luKCh2YWx1ZSAqIE1hdGguUEkpIC8gMikpLFxuICAgIFtFWFBPTkVOVElBTF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiBNYXRoLnBvdygxMDI0LCB2YWx1ZSAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoLU1hdGgucG93KDIsIC0xMCAqICh2YWx1ZSAtIDEpKSArIDIpO1xuICAgIH0sXG4gICAgW0VYUE9ORU5USUFMX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgPT09IDAgPyAwIDogTWF0aC5wb3coMTAyNCwgdmFsdWUgLSAxKSksXG4gICAgW0VYUE9ORU5USUFMX09VVF06ICh2YWx1ZSkgPT4gKHZhbHVlID09PSAxID8gMSA6IDEgLSBNYXRoLnBvdygyLCAtMTAgKiB2YWx1ZSkpLFxuICAgIFtDSVJDVUxBUl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSB2YWx1ZSAqIHZhbHVlKSAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAodmFsdWUgLT0gMikgKiB2YWx1ZSkgKyAxKTtcbiAgICB9LFxuICAgIFtDSVJDVUxBUl9JTl06ICh2YWx1ZSkgPT4gKDEgLSBNYXRoLnNxcnQoMSAtIHZhbHVlICogdmFsdWUpKSxcbiAgICBbQ0lSQ1VMQVJfT1VUXTogKHZhbHVlKSA9PiBNYXRoLnNxcnQoMSAtIC0tdmFsdWUgKiB2YWx1ZSksXG4gICAgW0VMQVNUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlICo9IDI7XG4gICAgICAgIGlmICh2YWx1ZSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAtMC41ICogTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiBNYXRoLnBvdygyLCAtMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpICsgMTtcbiAgICB9LFxuICAgIFtFTEFTVElDX0lOXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLU1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcbiAgICB9LFxuICAgIFtFTEFTVElDX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGgucG93KDIsIC0xMCAqIHZhbHVlKSAqIE1hdGguc2luKCh2YWx1ZSAtIDAuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuICAgIH0sXG4gICAgW0JBQ0tdOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTggKiAxLjUyNTtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiAodmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgLSBzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgKyBzKSArIDIpO1xuICAgIH0sXG4gICAgW0JBQ0tfSU5dOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTg7XG4gICAgICAgIHJldHVybiB2YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSAtIHMpO1xuICAgIH0sXG4gICAgW0JBQ0tfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gLS12YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSArIHMpICsgMTtcbiAgICB9LFxuICAgIFtCT1VOQ0VdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMC41KSB7XG4gICAgICAgICAgICByZXR1cm4gZWFzaW5nW0JPVU5DRV9JTl0odmFsdWUgKiAyKSAqIDAuNTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWFzaW5nW0JPVU5DRV9PVVRdKHZhbHVlICogMiAtIDEpICogMC41ICsgMC41O1xuICAgIH0sXG4gICAgW0JPVU5DRV9JTl06ICh2YWx1ZSkgPT4gKDEgLSBlYXNpbmdbQk9VTkNFX09VVF0oMSAtIHZhbHVlKSksXG4gICAgW0JPVU5DRV9PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMSAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA8IDIgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDEuNSAvIDIuNzUpICogdmFsdWUgKyAwLjc1O1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA8IDIuNSAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMi4yNSAvIDIuNzUpICogdmFsdWUgKyAwLjkzNzU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAyLjYyNSAvIDIuNzUpICogdmFsdWUgKyAwLjk4NDM3NTtcbiAgICB9LFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdHdlZW4nO1xuZXhwb3J0ICogZnJvbSAnLi9lYXNpbmcnO1xuIiwiaW1wb3J0IHsgZWFzaW5nLCBMSU5FQVIgfSBmcm9tICcuL2Vhc2luZyc7XG5leHBvcnQgY29uc3QgVFdFRU4gPSAndHdlZW4nO1xuZXhwb3J0IHZhciBUd2VlbkV4dGVuc2lvbjtcbihmdW5jdGlvbiAoVHdlZW5FeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29tcG9uZW50LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyB0d2VlbiB9ID0gY29tcG9uZW50O1xuICAgICAgICBjb25zdCB7IHBoYXNlcyB9ID0gdHdlZW47XG4gICAgICAgIGlmICghcGhhc2VzPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdBbmltYXRpb24gcGFydHMgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR3ZWVuLnRpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdHdlZW4udGltZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdHdlZW4udGltZSArPSBlbmdpbmUudXBkYXRlci50aW1lO1xuICAgICAgICBjb25zdCB7IHRpbWUgfSA9IHR3ZWVuO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgcGhhc2VzLmZvckVhY2goKHBoYXNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXBoYXNlLnRpbWUpIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnQW5pbWF0aW9uIHRpbWUgbm90IHNldCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaGFzZS5vZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHBoYXNlLm9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVhc2luZ05hbWUgPSBwaGFzZT8uZWFzaW5nPy50b0xvd2VyQ2FzZSgpID8/IExJTkVBUjtcbiAgICAgICAgICAgIGNvbnN0IGVhc2luZ01ldGhvZCA9IGVhc2luZ1tlYXNpbmdOYW1lXTtcbiAgICAgICAgICAgIGlmICghZWFzaW5nTWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoYFVua25vd24gZWFzaW5nIHR5cGU6ICR7ZWFzaW5nfWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKHRpbWUgLSBvZmZzZXQpIC8gcGhhc2UudGltZTtcbiAgICAgICAgICAgIG9mZnNldCArPSBwaGFzZS50aW1lO1xuICAgICAgICAgICAgaWYgKHZhbHVlIDwgMCB8fCB2YWx1ZSA+IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlYXNpbmdWYWx1ZSA9IGVhc2luZ01ldGhvZCh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoIXBoYXNlLnRvKSB7XG4gICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ0FuaW1hdGlvbiBcInRvXCIgc3RhdGUgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwaGFzZS5mcm9tKSB7XG4gICAgICAgICAgICAgICAgcGhhc2UuZnJvbSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB0bywgZnJvbSB9ID0gcGhhc2U7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGNvbXBvbmVudDtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRvKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZnJvbVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbVtrZXldID0gc3RhdGVba2V5XSA/PyAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBmcm9tVmFsdWUgPSBmcm9tW2tleV07XG4gICAgICAgICAgICAgICAgY29uc3QgdG9WYWx1ZSA9IHRvW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmcm9tVmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiB0b1ZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZVZhbHVlID0gZnJvbVZhbHVlICsgZWFzaW5nVmFsdWUgKiAodG9WYWx1ZSAtIGZyb21WYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlW2tleV0gPSBzdGF0ZVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHR3ZWVuLmxvb3AgJiYgdHdlZW4udGltZSA+IG9mZnNldCkge1xuICAgICAgICAgICAgdHdlZW4udGltZSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVHdlZW5FeHRlbnNpb24udXBkYXRlID0gdXBkYXRlO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnByb3BlcnRpZXMuc2V0KFRXRUVOLCB1cGRhdGUpO1xuICAgIH1cbiAgICBUd2VlbkV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFR3ZWVuRXh0ZW5zaW9uIHx8IChUd2VlbkV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBBQklMSVRZX1dPTEYgfSBmcm9tICcuL2Fzc2V0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY3Vyc2l2ZSgpIHtcblx0Y29uc3QgY29udGFpbmVyID0ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdHg6IDMwLFxuXHRcdFx0eTogMzAsXG5cdFx0XHRzY2FsZVg6IDAuOSxcblx0XHRcdHNjYWxlWTogMC45LFxuXHRcdFx0cm90YXRpb246IDAuMixcblx0XHRcdGFscGhhOiAwLjksXG5cdFx0XHRjaGlsZHJlbjogW3tcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBBQklMSVRZX1dPTEYsXG5cdFx0XHRcdHNjYWxlOiAwLjMsXG5cdFx0XHR9XSxcblx0XHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0XHR0aGlzLnJvdGF0aW9uICs9IHRpbWUgKiAwLjA1O1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXG5cdGNvbnRhaW5lci5jaGlsZHJlbi5jaGlsZHJlbi5wdXNoKGNvbnRhaW5lciBhcyBuZXZlcik7XG5cblx0cmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsImNvbnN0IElNQUdFX0FTU0VUUyA9ICdhc3NldHMvJztcblxuZXhwb3J0IGNvbnN0IEFOSU1BTElTVCA9ICdpZDphbmltYWxpc3QnO1xuZXhwb3J0IGNvbnN0IEFSQ0hFUiA9ICdpZDphcmNoZXInO1xuXG5leHBvcnQgY29uc3QgQU5JTUFMSVNUX0lNQUdFID0gYCR7SU1BR0VfQVNTRVRTfUFuaW1hbGlzdEZveDFfaW1hZ2UucG5nYDtcbmV4cG9ydCBjb25zdCBBUkNIRVJfSU1BR0UgPSBgJHtJTUFHRV9BU1NFVFN9QXJjaGVyMl9odW50ZXJfaW1hZ2UucG5nYDtcblxuZXhwb3J0IGNvbnN0IEFCSUxJVFlfRk9YID0gYCR7SU1BR0VfQVNTRVRTfUFuaW1hbGlzdEFiaWxpdHlfRm94LnBuZ2A7XG5leHBvcnQgY29uc3QgQUJJTElUWV9XT0xGID0gYCR7SU1BR0VfQVNTRVRTfUFuaW1hbGlzdEFiaWxpdHlfV29sZi5wbmdgO1xuXG5leHBvcnQgY29uc3QgQkFDS0dST1VORCA9IGAke0lNQUdFX0FTU0VUU31qdW5nbGVfYmFja2dyb3VuZC5qcGdgO1xuXG5leHBvcnQgY29uc3QgVEVTVF9DQU5WQVMgPSAndGVzdC5jYW52YXMnO1xuIiwiaW1wb3J0IHsgQ2FudmFzRW5naW5lIH0gZnJvbSAnQGUyZC9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IEVuZ2luZU1vZHVsZSB9IGZyb20gJ0BlMmQvY29yZSc7XG5pbXBvcnQgeyBDYW52YXNUZXh0RXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC90ZXh0JztcbmltcG9ydCB7IEN1c3RvbUltYWdlRXh0ZW5zaW9uIH0gZnJvbSAnLi9pbWFnZSc7XG5pbXBvcnQgQ3VzdG9tUGxhdGZvcm0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUVuZ2luZSBleHRlbmRzIENhbnZhc0VuZ2luZSB7XG5cdGNvbnN0cnVjdG9yKG1vZHVsZTogRW5naW5lTW9kdWxlID0ge30pIHtcblx0XHRtb2R1bGUuUGxhdGZvcm0gPSBtb2R1bGUuUGxhdGZvcm0gPz8gQ3VzdG9tUGxhdGZvcm07XG5cblx0XHRzdXBlcihtb2R1bGUpO1xuXG5cdFx0Q2FudmFzVGV4dEV4dGVuc2lvbi5pbml0KHRoaXMpO1xuXHRcdEN1c3RvbUltYWdlRXh0ZW5zaW9uLmluaXQodGhpcyk7XG5cdH1cbn1cbiIsImltcG9ydCB7IENhbnZhc0VuZ2luZSwgQ2FudmFzUGxhdGZvcm0gfSBmcm9tICdAZTJkL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAZTJkL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VFeHRlbnNpb24sIElNQUdFLCBJbWFnZSB9IGZyb20gJ0BlMmQvaW1hZ2UnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BlMmQvcmVzb3VyY2VzJztcblxuZXhwb3J0IG5hbWVzcGFjZSBDdXN0b21JbWFnZUV4dGVuc2lvbiB7XG5cdGV4cG9ydCBmdW5jdGlvbiByZW5kZXIoaW1hZ2U6IEltYWdlLCBlbmdpbmU6IENhbnZhc0VuZ2luZSk6IHZvaWQge1xuXHRcdGlmICghaW1hZ2Uuc3JjKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgeyBtYXRyaXgsIGNvbG9yVHJhbnNmb3JtIH0gPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuXG5cdFx0aWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChpbWFnZS5zcmMpIGFzIEltYWdlUmVzb3VyY2UgfCBudWxsO1xuXG5cdFx0aWYgKCFyZXNvdXJjZT8ubG9hZGVkIHx8ICFyZXNvdXJjZT8uaW1hZ2UpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBjb250ZXh0MmQgPSAoZW5naW5lLnBsYXRmb3JtIGFzIENhbnZhc1BsYXRmb3JtKS5nZXRDb250ZXh0KCk7XG5cblx0XHRjb250ZXh0MmQuc2V0VHJhbnNmb3JtKFxuXHRcdFx0bWF0cml4LmEsXG5cdFx0XHRtYXRyaXguYixcblx0XHRcdG1hdHJpeC5jLFxuXHRcdFx0bWF0cml4LmQsXG5cdFx0XHRtYXRyaXgudHgsXG5cdFx0XHRtYXRyaXgudHksXG5cdFx0KTtcblxuXHRcdGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG5cdFx0Y29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcblx0XHRjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcblxuXHRcdGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG5cdFx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuXHRcdGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICdsaWdodGdyYXknO1xuXHRcdGNvbnRleHQyZC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuXHR9XG5cblx0ZXhwb3J0IGZ1bmN0aW9uIGluaXQoZW5naW5lOiBDYW52YXNFbmdpbmUpIHtcblx0XHRJbWFnZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5cdFx0ZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChJTUFHRSwgcmVuZGVyKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzUGxhdGZvcm0gfSBmcm9tICdAZTJkL2NhbnZhcy1lbmdpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21QbGF0Zm9ybSBleHRlbmRzIENhbnZhc1BsYXRmb3JtIHtcblx0Y2xlYXIoKSB7XG5cdFx0Y29uc3QgY29udGV4dDJkID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cdFx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICdibGFjayc7XG5cdFx0Y29udGV4dDJkLnNldFRyYW5zZm9ybSgpO1xuXHRcdGNvbnRleHQyZC5maWxsUmVjdCgwLCAwLCBjb250ZXh0MmQuY2FudmFzLndpZHRoLCBjb250ZXh0MmQuY2FudmFzLmhlaWdodCk7XG5cdFx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tICdAZTJkL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BlMmQvcmVzb3VyY2VzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tUmVzb3VyY2VNYW5hZ2VyIHtcblx0cmVhZG9ubHkgYWxpYXNlcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cdHJlYWRvbmx5IHJlc291cmNlcyA9IG5ldyBNYXA8c3RyaW5nLCBJbWFnZVJlc291cmNlPigpO1xuXG5cdHJlc29sdmUgPSAoYXNzZXQ6IHN0cmluZywgZW5naW5lOiBFbmdpbmUpOiBJbWFnZVJlc291cmNlIHwgbnVsbCA9PiB7XG5cdFx0aWYgKGFzc2V0LmluZGV4T2YoJ2lkOicpID09PSAwKSB7XG5cdFx0XHRjb25zdCBpZCA9IGFzc2V0LnNsaWNlKDMpO1xuXHRcdFx0bGV0IHJlc291cmNlID0gdGhpcy5yZXNvdXJjZXMuZ2V0KGlkKSBhcyBJbWFnZVJlc291cmNlO1xuXHRcdFx0aWYgKCFyZXNvdXJjZSkge1xuXHRcdFx0XHRjb25zdCB1cmwgPSB0aGlzLmFsaWFzZXMuZ2V0KGlkKTtcblx0XHRcdFx0aWYgKHVybCkge1xuXHRcdFx0XHRcdHJlc291cmNlID0gSW1hZ2VSZXNvdXJjZS5yZXNvbHZlKHVybCwgZW5naW5lKSBhcyBJbWFnZVJlc291cmNlO1xuXHRcdFx0XHRcdHRoaXMucmVzb3VyY2VzLnNldChpZCwgcmVzb3VyY2UpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBSZXNvdXJjZSB3aXRoIGlkOiAke2Fzc2V0fSBub3QgZm91bmRgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc291cmNlO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGluaXQoZW5naW5lOiBFbmdpbmUpIHtcblx0XHRlbmdpbmUucmVzb3VyY2VzLnJlc29sdmVycy5hZGQodGhpcy5yZXNvbHZlKTtcblx0fVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBTdGF0aXN0aWNzIHtcblx0Z2V0UmVuZGVyVGltZSgpOiBudW1iZXI7XG5cdGdldFVwZGF0ZVRpbWUoKTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnBzKHN0YXRpc3RpY3M6IFN0YXRpc3RpY3MpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0dGV4dDogJ2ZwcycsXG5cdFx0ZnJhbWVzOiAwLFxuXHRcdGZyYW1lVGltZTogMCxcblx0XHR1cGRhdGVUaW1lOiAwLFxuXHRcdHJlbmRlclRpbWU6IDAsXG5cdFx0dGV4dEZvcm1hdDoge1xuXHRcdFx0c2l6ZTogMjAsXG5cdFx0XHRjb2xvcjogMHhmZmZmZmYsXG5cdFx0fSxcblx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMuZnJhbWVUaW1lICs9IHRpbWU7XG5cdFx0XHR0aGlzLnVwZGF0ZVRpbWUgKz0gc3RhdGlzdGljcy5nZXRVcGRhdGVUaW1lKCk7XG5cdFx0XHR0aGlzLnJlbmRlclRpbWUgKz0gc3RhdGlzdGljcy5nZXRSZW5kZXJUaW1lKCk7XG5cdFx0XHR0aGlzLmZyYW1lcysrO1xuXHRcdFx0aWYgKHRoaXMuZnJhbWVUaW1lID49IDEpIHtcblx0XHRcdFx0Y29uc3QgZnJhbWVUaW1lID0gTWF0aC5jZWlsKDEwMDAgKiB0aGlzLmZyYW1lVGltZSAvIHRoaXMuZnJhbWVzKTtcblx0XHRcdFx0Y29uc3QgdXBkYXRlVGltZSA9ICh0aGlzLnVwZGF0ZVRpbWUgLyB0aGlzLmZyYW1lcykudG9GaXhlZCgyKTtcblx0XHRcdFx0Y29uc3QgcmVuZGVyVGltZSA9ICh0aGlzLnJlbmRlclRpbWUgLyB0aGlzLmZyYW1lcykudG9GaXhlZCgyKTtcblx0XHRcdFx0dGhpcy50ZXh0ID0gYGZwczogJHt0aGlzLmZyYW1lc30sICR7ZnJhbWVUaW1lfSBtc1xcbnVwZGF0ZTogJHt1cGRhdGVUaW1lfSBtc1xcbnJlbmRlcjogJHtyZW5kZXJUaW1lfSBtc2A7XG5cdFx0XHRcdHRoaXMuZnJhbWVUaW1lID0gMDtcblx0XHRcdFx0dGhpcy51cGRhdGVUaW1lID0gMDtcblx0XHRcdFx0dGhpcy5yZW5kZXJUaW1lID0gMDtcblx0XHRcdFx0dGhpcy5mcmFtZXMgPSAwO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQge1xuXHRBQklMSVRZX0ZPWCwgQUJJTElUWV9XT0xGLCBBTklNQUxJU1QsIEFSQ0hFUiwgQkFDS0dST1VORCxcbn0gZnJvbSAnLi9hc3NldHMnO1xuaW1wb3J0IGFydGlmYWN0IGZyb20gJy4vYXJ0aWZhY3QnO1xuaW1wb3J0IHsgZnBzLCBTdGF0aXN0aWNzIH0gZnJvbSAnLi9mcHMnO1xuaW1wb3J0IHsgdW5pdCwgVW5pdFByb3BlcnRpZXMgfSBmcm9tICcuL3VuaXQnO1xuXG5pbnRlcmZhY2UgTWFpbiB7XG5cdHN0YXJ0KCk6IHZvaWQ7XG5cdFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbihzdGF0aXN0aWNzOiBTdGF0aXN0aWNzKTogTWFpbiB7XG5cdGZ1bmN0aW9uIG9uVW5pdENsaWNrKGRhdGE6IFVuaXRQcm9wZXJ0aWVzKSB7XG5cdFx0ZGF0YS5oZWFsdGggPSBNYXRoLnJhbmRvbSgpO1xuXHRcdGNvbnNvbGUubG9nKCdvblVuaXRDbGljaycsIGRhdGEubmFtZSk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQkFDS0dST1VORCxcblx0XHRcdFx0c2NhbGVYOiAxLFxuXHRcdFx0XHRzY2FsZVk6IDEsXG5cdFx0XHR9LFxuXHRcdFx0ZmlndXJlOiB7XG5cdFx0XHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHR0eXBlOiAncmVjdGFuZ2xlJyxcblx0XHRcdFx0XHR4OiAyMCxcblx0XHRcdFx0XHR5OiAyMCxcblx0XHRcdFx0XHR3aWR0aDogMTAwLFxuXHRcdFx0XHRcdGhlaWdodDogNTAsXG5cdFx0XHRcdFx0ZmlsbDogMHhmZjAwZmYsXG5cdFx0XHRcdFx0c3Ryb2tlOiAweDAwMDBmZixcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRzaGFwZXM6IHtcblx0XHRcdFx0dHlwZTogJ3NoYXBlJyxcblx0XHRcdFx0ZGF0YTogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdlbGxpcHNlJyxcblx0XHRcdFx0XHRcdHg6IDEwMCxcblx0XHRcdFx0XHRcdHk6IDEwMCxcblx0XHRcdFx0XHRcdHJhZGl1czogNTAsXG5cdFx0XHRcdFx0XHRmaWxsOiB7IHR5cGU6ICdzb2xpZCcsIGNvbG9yOiAweGZmZmYwMCwgYWxwaGE6IDAuNSB9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ3BhdGgnLFxuXHRcdFx0XHRcdFx0ZGF0YTogJ00gMTEwLCAxMTAgSCAxOTAgViAxOTAgSCAxMTAgWicsXG5cdFx0XHRcdFx0XHRmaWxsOiAweGZmMDBmZixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdwYXRoJyxcblx0XHRcdFx0XHRcdGRhdGE6IFtcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbW92ZVRvJywgeDogMCwgeTogMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAxMDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMTAwLCB5OiAxMDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMCwgeTogMTAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRmaWxsOiB7IGNvbG9yOiAweDk5OTk5OSwgYWxwaGE6IDAuNSB9LFxuXHRcdFx0XHRcdFx0c3Ryb2tlOiAweDAwMDAwMCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHVuaXRzOiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdHVuaXQoe1xuXHRcdFx0XHRcdFx0bmFtZTogJ0FyY2hlcicsIGhlYWx0aDogMSwgaW1hZ2U6IEFSQ0hFUiwgb25DbGljazogb25Vbml0Q2xpY2ssXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0dW5pdCh7XG5cdFx0XHRcdFx0XHRuYW1lOiAnQW5pbWFsaXN0JywgaGVhbHRoOiAxLCBpbWFnZTogQU5JTUFMSVNULCBvbkNsaWNrOiBvblVuaXRDbGljayxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHRhcnRpZmFjdDoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0eDogMzAwLFxuXHRcdFx0XHR5OiAzNTAsXG5cdFx0XHRcdGNoaWxkcmVuOiBbYXJ0aWZhY3QoKV0sXG5cdFx0XHR9LFxuXHRcdFx0bWFwOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHk6IDQ1MCxcblx0XHRcdFx0c2NhbGVYOiAwLjIsXG5cdFx0XHRcdHNjYWxlWTogMC4yLFxuXHRcdFx0XHRhbHBoYTogMC41LFxuXHRcdFx0XHRzcmM6ICd0ZXN0LmNhbnZhcycsXG5cdFx0XHRcdG9uUG9pbnRlck92ZXIoKSB7XG5cdFx0XHRcdFx0dGhpcy5hbHBoYSA9IDE7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uUG9pbnRlck91dCgpIHtcblx0XHRcdFx0XHR0aGlzLmFscGhhID0gMC41O1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGFiaWxpdHlGb3g6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBBQklMSVRZX0ZPWCxcblx0XHRcdFx0eDogNDUwLFxuXHRcdFx0XHR5OiA1MDAsXG5cdFx0XHRcdHNjYWxlOiAwLjUsXG5cdFx0XHRcdHRpbnQ6IHtcblx0XHRcdFx0XHRjb2xvcjogMHgwMGZmMDAsXG5cdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdH0gYXMgYW55LFxuXHRcdFx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdFx0XHRpZiAodGhpcy50aW50KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQudmFsdWUgKz0gdGltZTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLnRpbnQudmFsdWUgPj0gMSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRpbnQudmFsdWUgPSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0b25Qb2ludGVyRG93bihlOiBhbnkpIHtcblx0XHRcdFx0XHRpZiAodGhpcy50aW50KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQgPSBudWxsO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQgPSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAweDAwZmYwMCxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZygnZm94JywgZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YWJpbGl0eVdvbGY6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdHg6IDM1MCxcblx0XHRcdFx0eTogNDAwLFxuXHRcdFx0XHRjaGlsZHJlbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdFx0c3JjOiBBQklMSVRZX1dPTEYsXG5cdFx0XHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdFx0XHRhbHBoYTogMSxcblx0XHRcdFx0XHR0d2Vlbjoge1xuXHRcdFx0XHRcdFx0bG9vcDogdHJ1ZSxcblx0XHRcdFx0XHRcdHBoYXNlczogW1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB4OiAyMDAgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ2N1Ymljb3V0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHk6IDIwMCwgYWxwaGE6IDAuNSB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAncXVhZHJhdGljSW4nLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeDogMCwgYWxwaGE6IDEgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ3F1YWRyYXRpY091dCcsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0ZnBzOiBmcHMoc3RhdGlzdGljcyksXG5cdFx0fSxcblx0XHRzdGFydCgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdzdGFydCcpO1xuXHRcdH0sXG5cdH07XG59XG4iLCJjb25zdCBTUEVFRCA9IDEwMDtcblxuaW50ZXJmYWNlIFVuaXQge1xuXHRba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdFByb3BlcnRpZXMge1xuXHRuYW1lOiBzdHJpbmcsXG5cdGhlYWx0aDogbnVtYmVyLFxuXHRpbWFnZTogc3RyaW5nLFxuXHRvbkNsaWNrOiAoZGF0YTogVW5pdFByb3BlcnRpZXMpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bml0KHByb3BzOiBVbml0UHJvcGVydGllcyk6IFVuaXQge1xuXHRmdW5jdGlvbiBnZXRUaXRsZSgpIHtcblx0XHRyZXR1cm4gYCR7cHJvcHMubmFtZX1cXG4ke01hdGgucm91bmQocHJvcHMuaGVhbHRoICogMTAwKX0lYDtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0eDogNTAgKyBNYXRoLnJhbmRvbSgpICogNDAwLFxuXHRcdHk6IDIwMCxcblx0XHRyb3RhdGlvbjogMCxcblx0XHR1cGRhdGVNb3ZlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0dGhpcy54ICs9IHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYICogdGltZSAqIFNQRUVEO1xuXHRcdFx0aWYgKHRoaXMueCA8IDUwKSB7XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYID0gMTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy54ID4gNDAwKSB7XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYID0gLTE7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMudXBkYXRlTW92ZSh0aW1lKTtcblx0XHR9LFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHR0ZXh0OiB7XG5cdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0dGV4dDogZ2V0VGl0bGUoKSxcblx0XHRcdFx0dGV4dEZvcm1hdDoge1xuXHRcdFx0XHRcdHNpemU6IDE1LFxuXHRcdFx0XHRcdGNvbG9yOiAweGZmZGRkZCxcblx0XHRcdFx0XHRhbGlnbjogJ2NlbnRlcicsXG5cdFx0XHRcdFx0dmVydGljYWxBbGlnbjogJ21pZGRsZScsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJvcmRlcjogMHgwMGZmMDAsXG5cdFx0XHRcdHk6IC0zMCxcblx0XHRcdFx0aGVpZ2h0OiAzNSxcblx0XHRcdFx0cGl2b3RYOiAwLjUsXG5cdFx0XHRcdG9uUG9pbnRlckRvd246ICgpID0+IHtcblx0XHRcdFx0XHRwcm9wcy5vbkNsaWNrKHByb3BzKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b25VcGRhdGUoKSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gZ2V0VGl0bGUoKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRpbWFnZToge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IHByb3BzLmltYWdlLFxuXHRcdFx0XHRzY2FsZVg6IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEsXG5cdFx0XHRcdHBpdm90WDogMC41LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duOiAoKSA9PiB7XG5cdFx0XHRcdFx0cHJvcHMub25DbGljayhwcm9wcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgeyBDb21wb25lbnQsIE1vdXNlRXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IFR3ZWVuRXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC90d2Vlbic7XG5pbXBvcnQgeyBDYW52YXNUZXh0RXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC90ZXh0JztcbmltcG9ydCB7IENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gfSBmcm9tICdAZTJkL2ltYWdlJztcbmltcG9ydCB7IENhbnZhc1NoYXBlRXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC9zaGFwZSc7XG5pbXBvcnQgeyBDYW52YXNFbmdpbmUgfSBmcm9tICdAZTJkL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BlMmQvcmVzb3VyY2VzJztcbmltcG9ydCBDdXN0b21SZXNvdXJjZU1hbmFnZXIgZnJvbSAnLi9lbmdpbmUvcmVzb3VyY2VzJztcbmltcG9ydCBDdXN0b21FbmdpbmUgZnJvbSAnLi9lbmdpbmUvZW5naW5lJztcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbic7XG5pbXBvcnQge1xuXHRBTklNQUxJU1QsIEFOSU1BTElTVF9JTUFHRSwgQVJDSEVSLCBBUkNIRVJfSU1BR0UsIFRFU1RfQ0FOVkFTLFxufSBmcm9tICcuL2Fzc2V0cyc7XG5cbi8vIHBhZ2VcbmRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gJzAnO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nID0gJzAnO1xuXG4vLyBiYXNpYyBlbmdpbmVcbmNvbnN0IGVuZ2luZSA9IG5ldyBDYW52YXNFbmdpbmUoKTtcbkNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuQ2FudmFzVGV4dEV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5DYW52YXNTaGFwZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5Ud2VlbkV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5Nb3VzZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5lbmdpbmUuc2NyZWVuLmZ1bGxzY3JlZW4gPSB0cnVlO1xuZW5naW5lLnRpY2tlci5wbGF5KCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVuZ2luZS5wbGF0Zm9ybS52aWV3KTtcblxuY29uc3Qgc3RhdGlzdGljcyA9IHtcblx0Z2V0VXBkYXRlVGltZSgpIHtcblx0XHRyZXR1cm4gZW5naW5lLnVwZGF0ZXIuZWxhcHNlZFRpbWU7XG5cdH0sXG5cdGdldFJlbmRlclRpbWUoKSB7XG5cdFx0cmV0dXJuIGVuZ2luZS5yZW5kZXJlci5lbGFwc2VkVGltZTtcblx0fSxcbn07XG5cbi8vIGFwcGxpY2F0aW9uXG5jb25zdCBhcHAgPSBtYWluKHN0YXRpc3RpY3MpO1xuYXBwLnN0YXJ0KCk7XG5lbmdpbmUucm9vdCA9IGFwcCBhcyBhbnkgYXMgQ29tcG9uZW50O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbmNvbnNvbGUubG9nKGFwcCk7XG5cbi8vIHRlc3QgcGF1c2VcbnNldFRpbWVvdXQoKCkgPT4gZW5naW5lLnRpY2tlci5wYXVzZSgpLCA1MDAwKTtcbnNldFRpbWVvdXQoKCkgPT4gZW5naW5lLnRpY2tlci5wbGF5KCksIDEwMDAwKTtcblxuLy8gY3VzdG9tIGVuZ2luZVxuY29uc3QgY3VzdG9tRW5naW5lID0gbmV3IEN1c3RvbUVuZ2luZSgpO1xuY3VzdG9tRW5naW5lLnNjcmVlbi5mdWxsc2NyZWVuID0gZmFsc2U7XG5jdXN0b21FbmdpbmUuc2NyZWVuLmhlaWdodCA9IDYwMDtcbmN1c3RvbUVuZ2luZS51cGRhdGVyLmVuYWJsZWQgPSBmYWxzZTtcbmN1c3RvbUVuZ2luZS5yb290ID0gZW5naW5lLnJvb3Q7XG5jdXN0b21FbmdpbmUudGlja2VyLnBsYXkoKTtcbmN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbmN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3LnN0eWxlLnRvcCA9ICcwcHgnO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUubGVmdCA9ICc2MDBweCc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3KTtcblxuLy8gLy8gc2V0IGN1c3RvbSByZXNvdXJjZVxuZW5naW5lLnJlc291cmNlcy5yZXNvdXJjZXMuc2V0KFxuXHRURVNUX0NBTlZBUyxcblx0e1xuXHRcdGFzc2V0OiBURVNUX0NBTlZBUyxcblx0XHRpbWFnZTogY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcsXG5cdFx0bG9hZGVkOiB0cnVlLFxuXHR9IGFzIEltYWdlUmVzb3VyY2UsXG4pO1xuY3VzdG9tRW5naW5lLnJlc291cmNlcy5yZXNvdXJjZXMuc2V0KFxuXHRURVNUX0NBTlZBUyxcblx0e1xuXHRcdGFzc2V0OiBURVNUX0NBTlZBUyxcblx0XHRpbWFnZTogZW5naW5lLnBsYXRmb3JtLnZpZXcsXG5cdFx0bG9hZGVkOiB0cnVlLFxuXHR9IGFzIEltYWdlUmVzb3VyY2UsXG4pO1xuXG4vLyBjdXN0b20gcmVzb3VyY2UgcmVzb2x2ZXJcbmNvbnN0IHJlc291cmNlTWFuYWdlciA9IG5ldyBDdXN0b21SZXNvdXJjZU1hbmFnZXIoKTtcbnJlc291cmNlTWFuYWdlci5hbGlhc2VzLnNldChBUkNIRVIucmVwbGFjZSgnaWQ6JywgJycpLCBBUkNIRVJfSU1BR0UpO1xucmVzb3VyY2VNYW5hZ2VyLmFsaWFzZXMuc2V0KEFOSU1BTElTVC5yZXBsYWNlKCdpZDonLCAnJyksIEFOSU1BTElTVF9JTUFHRSk7XG5yZXNvdXJjZU1hbmFnZXIuaW5pdChlbmdpbmUpO1xucmVzb3VyY2VNYW5hZ2VyLmluaXQoY3VzdG9tRW5naW5lKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=