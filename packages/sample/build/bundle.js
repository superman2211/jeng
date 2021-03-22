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

  context.beginPath();
  context.ellipse(x, y, rx, ry, 0, 0, PI_2);
  context.closePath();
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

  context.beginPath();
  context.rect(x, y, width, height);
  context.closePath();
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

      if (typeof path.data === 'string') {
        exist = (0,_string__WEBPACK_IMPORTED_MODULE_6__.applyString)(path.data, context);
      } else if (Array.isArray(path.data)) {
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
  if (!data.length) {
    return false;
  }

  context.beginPath();
  reader.setPath(data);

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
                        fill: { type: 'solid', color: 0xffff00, alpha: 1 },
                    },
                    {
                        type: 'path',
                        data: 'M 110, 110 H 190 V 190 H 110 Z',
                        fill: 0x990000,
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
                        fill: { type: 'solid', color: 0x999999, alpha: 0.6 },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jYW52YXMtZW5naW5lL2Rpc3QvZW5naW5lLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NhbnZhcy1lbmdpbmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jYW52YXMtZW5naW5lL2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY2FudmFzLWVuZ2luZS9kaXN0L3BsYXRmb3JtLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvY29yZS9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2NvcmUvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvZmVhdHVyZXMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvZmVhdHVyZXMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ZlYXR1cmVzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9mZWF0dXJlcy9wb2ludGVyLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvZmVhdHVyZXMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ZlYXR1cmVzL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvZmVhdHVyZXMvc2NyZWVuLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9mZWF0dXJlcy90aWNrZXIuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ZlYXR1cmVzL3VwZGF0ZXIuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9pbnB1dC9tb3VzZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvaW50ZXJmYWNlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9pbnRlcmZhY2VzL3Bpdm90LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9pbnRlcmZhY2VzL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ludGVyZmFjZXMvc291cmNlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9pbnRlcmZhY2VzL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvaW50ZXJmYWNlcy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZ2VvbS9kaXN0L2JvdW5kcy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9nZW9tL2Rpc3QvY29sb3ItdHJhbnNmb3JtLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9nZW9tL2Rpc3QvbWF0cml4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9wb2ludC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9nZW9tL2Rpc3QvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2ltYWdlL2Rpc3QvY2FudmFzLWltYWdlLWNvbG9yLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2ltYWdlL2Rpc3QvY2FudmFzLWltYWdlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2ltYWdlL2Rpc3QvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vaW1hZ2UvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9yZXNvdXJjZXMvZGlzdC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2NhbnZhcy9lbGxpcHNlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvY2FudmFzL3BhdGguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vc2hhcGUvZGlzdC9jYW52YXMvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvY2FudmFzL3NoYXBlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvY2FudmFzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2NhbnZhcy9zdHlsZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2RhdGEvZGF0YS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2RhdGEvcGF0aC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2RhdGEvc3RyaW5nLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvZ3JhcGhpY3MuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vc2hhcGUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L3NoYXBlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3RleHQvZGlzdC9jYW52YXMtdGV4dC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90ZXh0L2Rpc3QvZm9udC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90ZXh0L2Rpc3QvZm9ybWF0LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3RleHQvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90ZXh0L2Rpc3QvdGV4dC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90d2Vlbi9kaXN0L2Vhc2luZy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90d2Vlbi9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3R3ZWVuL2Rpc3QvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvYXJ0aWZhY3QudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvYXNzZXRzLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2VuZ2luZS9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvZW5naW5lL2ltYWdlLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2VuZ2luZS9wbGF0Zm9ybS50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9lbmdpbmUvcmVzb3VyY2VzLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2Zwcy50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9tYWluLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL3VuaXQudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BlMmQvc2FtcGxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiQ2FudmFzRW5naW5lIiwibW9kdWxlIiwiUGxhdGZvcm0iLCJDYW52YXNQbGF0Zm9ybSIsIkVuZ2luZSIsInBvaW50MSIsIlBvaW50IiwicG9pbnQyIiwiQ2FudmFzUGF0dGVybnMiLCJjb2xvclBhdHRlcm4iLCJjb2xvciIsImFscGhhIiwiY3QiLCJyIiwiZyIsImIiLCJhIiwiQ29sb3JUcmFuc2Zvcm0iLCJyZWRNdWx0aXBsaWVyIiwicmVkT2Zmc2V0IiwiZ3JlZW5NdWx0aXBsaWVyIiwiZ3JlZW5PZmZzZXQiLCJibHVlTXVsdGlwbGllciIsImJsdWVPZmZzZXQiLCJhbHBoYU11bHRpcGxpZXIiLCJhbHBoYU9mZnNldCIsImFkZEdyYWRpZW50Q29sb3JzIiwicGF0dGVybiIsImNvbG9ycyIsImFscGhhcyIsInJhdGlvcyIsImNvbG9yVHJhbnNmb3JtIiwiaSIsImxlbmd0aCIsInJnYiIsInJhdGlvIiwiYWRkQ29sb3JTdG9wIiwicmFkaWFsR3JhZGllbnRQYXR0ZXJuIiwibWF0cml4IiwiY29udGV4dCIsIngiLCJ5IiwiTWF0cml4IiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJ0eCIsInR5IiwiTWF0aCIsImFicyIsImxpbmVhckdyYWRpZW50UGF0dGVybiIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYml0bWFwUGF0dGVybiIsImltYWdlIiwicmVwZWF0IiwiY3JlYXRlUGF0dGVybiIsImFyZ3VtZW50cyIsInZpZXciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0cyIsImdldENvbnRleHQiLCJjdXN0b21Db250ZXh0cyIsInB1c2giLCJwb3AiLCJlbmdpbmUiLCJkZWJ1ZyIsIndhcm5pbmciLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImNsZWFyIiwidXBkYXRlU2l6ZSIsInNldFRyYW5zZm9ybSIsImNsZWFyUmVjdCIsInNjcmVlbiIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwicGl4ZWxSYXRpbyIsImdldFBpeGVsUmF0aW8iLCJ2aWV3V2lkdGgiLCJmbG9vciIsInZpZXdIZWlnaHQiLCJzdHlsZSIsIkNPTlRBSU5FUiIsIkNvbnRhaW5lciIsIm51bUNoaWxkcmVuIiwiY29udGFpbmVyIiwiY2hpbGRyZW4iLCJBcnJheSIsImlzQXJyYXkiLCJ0eXBlIiwia2V5cyIsIk9iamVjdCIsIkNvbnRhaW5lckV4dGVuc2lvbiIsInJlbmRlciIsInJlbmRlcmVyIiwiZGVwdGgiLCJjb21wb25lbnQiLCJyZW5kZXJDb21wb25lbnQiLCJjb21wb25lbnRzTWFwIiwidXBkYXRlIiwidXBkYXRlciIsInVwZGF0ZUNvbXBvbmVudCIsImhpdFRlc3QiLCJwb2ludGVyRXZlbnRzIiwicmVzdWx0IiwiZGlzcGF0Y2hDb21wb25lbnQiLCJpbml0IiwiY29tcG9uZW50cyIsInNldCIsIkNvbXBvbmVudHMiLCJTY3JlZW4iLCJVcGRhdGVyIiwiUmVuZGVyZXIiLCJQb2ludGVyRXZlbnRzIiwiVGlja2VyIiwiRGVidWciLCJSZXNvdXJjZXMiLCJwbGF0Zm9ybSIsInRpY2tlciIsInJlc291cmNlcyIsIkVuZ2luZUZlYXR1cmUiLCJwcm9wZXJ0aWVzIiwiTWFwIiwibG9hZGVkIiwiZXJyb3JzIiwid2FybmluZ3MiLCJlbmFibGVkIiwiY29uc29sZSIsImxvZyIsImFyZ3MiLCJpZCIsIlN0cmluZyIsImNvdW50IiwiZ2V0IiwiZXJyb3IiLCJ3YXJuIiwiZ2xvYmFsIiwibG9jYWwiLCJwb2ludGVySWQiLCJwb2ludGVyVHlwZSIsInJvb3QiLCJiYXNlIiwicGFyZW50IiwiRGlzcGxheSIsIlBvaW50ZXIiLCJoYW5kbGVyIiwiVHJhbnNmb3JtIiwicG9pbnRlck92ZXIiLCJlbGFwc2VkVGltZSIsInN0YXJ0VGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiYmVnaW4iLCJnZXRNYXRyaXgiLCJlbmQiLCJyZXNvbHZlcnMiLCJTZXQiLCJhc3NldCIsInJlc291cmNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnVsbHNjcmVlbiIsImQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiZnJhbWVSYXRlIiwicGF1c2VkIiwidGltZSIsInVwZGF0ZUZyYW1lIiwiY3VycmVudFRpbWUiLCJkZWx0YVRpbWUiLCJ1cGRhdGVOZXh0RnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJVcGRhdGUiLCJ1cGRhdGVQcm9wZXJ0aWVzIiwiZm9yRWFjaCIsInByb3BlcnR5IiwiZGlzcGF0Y2hFdmVudCIsImV2ZW50IiwiY2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50TGVmdCIsImNsaWVudFkiLCJ0b3AiLCJjbGllbnRUb3AiLCJkaXNwYXRjaCIsInByZXZlbnREZWZhdWx0IiwiTW91c2VFeHRlbnNpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiaXNWaXNpYmxlIiwidmlzaWJsZSIsIlBpdm90IiwiZ2V0WCIsInBpdm90IiwicGl2b3RYIiwiZ2V0WSIsInBpdm90WSIsImhhc1ZhbHVlcyIsImlzUG9pbnRlck92ZXIiLCJwb2ludGVyIiwiaXNQb2ludGVyRW5hYmxlZCIsInBvaW50ZXJFbmFibGVkIiwiaGFuZGxlck5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiU291cmNlIiwiZ2V0UmVzb3VyY2UiLCJzb3VyY2UiLCJzcmMiLCJpc0xvYWRlZCIsInRyYW5zZm9ybSIsImMiLCJyb3RhdGlvbiIsInNjYWxlWCIsInNjYWxlIiwic2NhbGVZIiwiY29zIiwic2luIiwiZ2V0Q29sb3JUcmFuc2Zvcm0iLCJ0aW50IiwidmFsdWUiLCJ2YWx1ZUludmVydGVkIiwiaXNFbmFibGVkIiwib25VcGRhdGUiLCJCb3VuZHMiLCJlbXB0eSIsIm1pblgiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJtaW5ZIiwibWF4WCIsIk1JTl9WQUxVRSIsIm1heFkiLCJzZXRFbXB0eSIsImJvdW5kcyIsImlzRW1wdHkiLCJ0b1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInRlc3RYIiwidGVzdFkiLCJ0ZXN0IiwidGVzdFBvaW50IiwicG9pbnQiLCJpc0VtcHR5V2l0aEFscGhhIiwiY29weSIsImZyb20iLCJ0byIsImNvbmNhdCIsImN0MSIsImN0MCIsIm1hdHJpeDAiLCJtYXRyaXgxIiwiZ2V0RGV0ZXJtaW5hbnQiLCJpbnZlcnQiLCJkZXRlcm1pbmFudCIsInRyYW5zZm9ybVBvaW50IiwidHJhbnNmb3JtUG9pbnRMb2NhbCIsInRyYW5zZm9ybUludmVyc2VQb2ludCIsInRyYW5zZm9ybUJvdW5kcyIsInJ4IiwicnkiLCJyciIsInJiIiwibngxIiwibnkxIiwibngyIiwibnkyIiwibngzIiwibnkzIiwibng0Iiwibnk0IiwicmlnaHQiLCJib3R0b20iLCJzcXJ0IiwiYW5nbGUiLCJhdGFuMiIsImVxdWFscyIsInBvaW50MCIsInRhcmdldCIsIm5vcm1hbGl6ZSIsInRoaWNrbmVzcyIsImRpc3RhbmNlIiwiZHgiLCJkeSIsImludGVycG9sYXRlIiwicG9sYXIiLCJSZWN0YW5nbGUiLCJjb250YWlucyIsIkNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24iLCJjb250ZXh0MmQiLCJnbG9iYWxBbHBoYSIsImRyYXdJbWFnZSIsImN1c3RvbUNvbnRleHQiLCJjcmVhdGVDdXN0b21Db250ZXh0IiwiaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwicm0iLCJnbSIsImJtIiwiYW0iLCJybyIsImdvIiwiYm8iLCJhbyIsImRhdGEiLCJwdXRJbWFnZURhdGEiLCJkZXN0cm95Q3VzdG9tQ29udGV4dCIsIkltYWdlRXh0ZW5zaW9uIiwiSU1BR0UiLCJDYW52YXNJbWFnZUV4dGVuc2lvbiIsIkltYWdlIiwiY2FsY3VsYXRlQm91bmRzIiwiSW1hZ2VSZXNvdXJjZSIsImV4dGVuc2lvbiIsInNwbGl0Iiwib25sb2FkIiwib25lcnJvciIsImUiLCJhZGQiLCJQSV8yIiwiUEkiLCJhcHBseUVsbGlwc2UiLCJyYWRpdXMiLCJyYWRpdXNYIiwicmFkaXVzWSIsImJlZ2luUGF0aCIsImVsbGlwc2UiLCJjbG9zZVBhdGgiLCJhcHBseUNvbW1hbmQiLCJjb21tYW5kIiwibW92ZVRvIiwibGluZVRvIiwiY3VydmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJjeCIsImN5IiwiY3ViaWNDdXJ2ZVRvIiwiYmV6aWVyQ3VydmVUbyIsInN4Iiwic3kiLCJhcHBseVBhdGgiLCJhcHBseVJlY3RhbmdsZSIsInJlY3QiLCJvZmZzZXQiLCJyZW5kZXJHcmFwaGljcyIsImZpbGwiLCJzdHJva2UiLCJoYXNGaWxsIiwiaGFzU3Ryb2tlIiwiZXhpc3QiLCJwYXRoIiwiYXBwbHlTdHJpbmciLCJzZXRGaWxsU3R5bGUiLCJzZXRTdHJva2VTdHlsZSIsIkNhbnZhc1NoYXBlRXh0ZW5zaW9uIiwic2hhcGUiLCJTaGFwZSIsIlNoYXBlRXh0ZW5zaW9uIiwiU0hBUEUiLCJyZWFkZXIiLCJHcmFwaGljc1N0cmluZ1JlYWRlciIsInNldFBhdGgiLCJyZWFkTmV4dCIsImdldENvbW1hbmQiLCJlbXB0eU1hdHJpeCIsImVtcHR5QXJyYXkiLCJnZXRDYW52YXNQYXR0ZXJuIiwic29saWQiLCJtbCIsImNsIiwiYWwiLCJybCIsIm1yIiwiY3IiLCJhciIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiUmVjdGFuZ2xlRGF0YSIsIkVsbGlwc2VEYXRhIiwiUGF0aERhdGEiLCJwYXRoRGF0YSIsIkdyYXBoaWNzU3RyaW5nIiwiUGF0aENvbW1hbmQiLCJHcmFwaGljc0RhdGEiLCJOVU1CRVJTX0NPVU5UIiwiTSIsIm0iLCJMIiwibCIsIkgiLCJoIiwiViIsInYiLCJDIiwiUyIsInMiLCJRIiwicSIsIlQiLCJ0IiwiR3JhcGhpY3NTdHJpbmdTdHJlYW0iLCJidWZmZXIiLCJjb21tYW5kUmVnZXgiLCJudW1iZXJSZWdleCIsImxhc3RJbmRleCIsImNvbW1hbmRNYXRjaCIsImV4ZWMiLCJpbmRleCIsIm51bWJlck1hdGNoIiwicGFyc2VGbG9hdCIsInN0cmVhbSIsImNvbW1hbmRFeGlzdHMiLCJsYXN0WCIsImxhc3RZIiwicGFyc2UiLCJnZXRCdWZmZXIiLCJlMCIsImUxIiwiZTIiLCJlMyIsImU0IiwiZTUiLCJHcmFwaGljcyIsInNtb290aCIsInNwcmVhZCIsImludGVycG9sYXRpb24iLCJmb2NhbFBvaW50UmF0aW8iLCJwaXhlbEhpbnRpbmciLCJzY2FsZU1vZGUiLCJjYXBzIiwiam9pbnRzIiwibWl0ZXJMaW1pdCIsImdldFBhdGgiLCJlbGxpcHNlV2lkdGgiLCJlbGxpcHNlSGVpZ2h0IiwidyIsImsiLCJveCIsIm95IiwieGUiLCJ5ZSIsInhtIiwieW0iLCJjcmVhdGVEYXRhIiwiZ3JhcGhpY3NEYXRhIiwidW5kZWZpbmVkIiwiZ2V0R3JhcGhpY3MiLCJ2YWxpZFRleHRGb3JtYXQiLCJDYW52YXNUZXh0RXh0ZW5zaW9uIiwidGV4dCIsImxpbmVzIiwidGV4dEZvcm1hdCIsImJvcmRlciIsImJhY2tncm91bmQiLCJUZXh0Rm9ybWF0IiwiZm9ybWF0U2l6ZSIsInNpemUiLCJmb3JtYXRMZXR0ZXJTcGFjaW5nIiwibGV0dGVyU3BhY2luZyIsImZvcm1hdExlYWRpbmciLCJsZWFkaW5nIiwiZm9udCIsIkZvbnQiLCJ0ZXh0V2lkdGgiLCJ0ZXh0SGVpZ2h0IiwicmVhbFdpZHRoIiwicmVhbEhlaWdodCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiYWxpZ25WZXJ0aWNhbFZhbHVlIiwidmVydGljYWxBbGlnbiIsInRleHRCYXNlbGluZSIsImxpbmUiLCJhbGlnblZhbHVlIiwiYWxpZ24iLCJqIiwiZmlyc3QiLCJzZWNvbmQiLCJhZHZhbmNlIiwiZmlsbFRleHQiLCJUZXh0RXh0ZW5zaW9uIiwiVEVYVCIsIkVNIiwiZm9udHMiLCJnZXRTdHlsZUZvbnQiLCJtZWFzdXJlVGV4dCIsImdldENoYXJXaWR0aCIsImNoYXIiLCJ3aWR0aHMiLCJuYW1lIiwiZ2V0S2VybmluZyIsInBhaXIiLCJrZXJuaW5nIiwia2VybmluZ3MiLCJ3aWR0aFNlY29uZCIsIndpZHRoVG90YWwiLCJnZXRBZHZhbmNlIiwiZ2V0Rm9udCIsImdldExpbmVXaWR0aCIsImZvcm1hdCIsImdldFRleHRXaWR0aCIsImdldFRleHRIZWlnaHQiLCJkZWZhdWx0VGV4dEZvcm1hdCIsImJvbGQiLCJpdGFsaWMiLCJ1bmRlcmxpbmUiLCJnZXRWYWxpZFRleHRGb3JtYXQiLCJnZXRBbGlnblZhbHVlIiwiZ2V0VmVydGljYWxBbGlnblZhbHVlIiwiVGV4dCIsIkxJTkVBUiIsIlFVQURSQVRJQyIsIlFVQURSQVRJQ19JTiIsIlFVQURSQVRJQ19PVVQiLCJDVUJJQyIsIkNVQklDX0lOIiwiQ1VCSUNfT1VUIiwiUVVBUlRJQyIsIlFVQVJUSUNfSU4iLCJRVUFSVElDX09VVCIsIlFVSU5USUMiLCJRVUlOVElDX0lOIiwiUVVJTlRJQ19PVVQiLCJTSU5VU09JREFMIiwiU0lOVVNPSURBTF9JTiIsIlNJTlVTT0lEQUxfT1VUIiwiRVhQT05FTlRJQUwiLCJFWFBPTkVOVElBTF9JTiIsIkVYUE9ORU5USUFMX09VVCIsIkNJUkNVTEFSIiwiQ0lSQ1VMQVJfSU4iLCJDSVJDVUxBUl9PVVQiLCJFTEFTVElDIiwiRUxBU1RJQ19JTiIsIkVMQVNUSUNfT1VUIiwiQkFDSyIsIkJBQ0tfSU4iLCJCQUNLX09VVCIsIkJPVU5DRSIsIkJPVU5DRV9JTiIsIkJPVU5DRV9PVVQiLCJlYXNpbmciLCJwb3ciLCJUV0VFTiIsIlR3ZWVuRXh0ZW5zaW9uIiwidHdlZW4iLCJwaGFzZXMiLCJwaGFzZSIsImVhc2luZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImVhc2luZ01ldGhvZCIsImVhc2luZ1ZhbHVlIiwic3RhdGUiLCJrZXkiLCJmcm9tVmFsdWUiLCJ0b1ZhbHVlIiwic3RhdGVWYWx1ZSIsImxvb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTyxJQUFNQSxZQUFiO0FBQUE7O0FBQUE7O0FBQ0ksMEJBQXlCO0FBQUE7O0FBQUEsUUFBYkMsTUFBYSx1RUFBSixFQUFJOztBQUFBOztBQUNyQkEsVUFBTSxDQUFDQyxRQUFQLHVCQUFrQkQsTUFBTSxDQUFDQyxRQUF6QiwrREFBcUNDLHFEQUFyQztBQURxQiw2QkFFZkYsTUFGZTtBQUd4Qjs7QUFKTDtBQUFBLEVBQWtDRyw2Q0FBbEMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQSxJQUFNQyxNQUFNLEdBQUdDLGtEQUFBLEVBQWY7QUFDQSxJQUFNQyxNQUFNLEdBQUdELGtEQUFBLEVBQWY7QUFDTyxJQUFJRSxjQUFKOztBQUNQLENBQUMsVUFBVUEsY0FBVixFQUEwQjtBQUN2QixXQUFTQyxZQUFULENBQXNCQyxLQUF0QixFQUE2QkMsS0FBN0IsRUFBb0NDLEVBQXBDLEVBQXdDO0FBQ3BDLFFBQUlDLENBQUMsR0FBR0gsS0FBSyxJQUFJLEVBQVQsR0FBYyxJQUF0QjtBQUNBLFFBQUlJLENBQUMsR0FBR0osS0FBSyxJQUFJLENBQVQsR0FBYSxJQUFyQjtBQUNBLFFBQUlLLENBQUMsR0FBR0wsS0FBSyxHQUFHLElBQWhCO0FBQ0EsUUFBSU0sQ0FBQyxHQUFHTCxLQUFLLEdBQUcsSUFBaEI7O0FBQ0EsUUFBSSxDQUFDTSw2REFBQSxDQUF1QkwsRUFBdkIsQ0FBTCxFQUFpQztBQUM3QkMsT0FBQyxHQUFJQSxDQUFDLEdBQUdELEVBQUUsQ0FBQ00sYUFBUCxHQUF1Qk4sRUFBRSxDQUFDTyxTQUEzQixHQUF3QyxJQUE1QztBQUNBTCxPQUFDLEdBQUlBLENBQUMsR0FBR0YsRUFBRSxDQUFDUSxlQUFQLEdBQXlCUixFQUFFLENBQUNTLFdBQTdCLEdBQTRDLElBQWhEO0FBQ0FOLE9BQUMsR0FBSUEsQ0FBQyxHQUFHSCxFQUFFLENBQUNVLGNBQVAsR0FBd0JWLEVBQUUsQ0FBQ1csVUFBNUIsR0FBMEMsSUFBOUM7QUFDQVAsT0FBQyxHQUFJQSxDQUFDLEdBQUdKLEVBQUUsQ0FBQ1ksZUFBUCxHQUF5QlosRUFBRSxDQUFDYSxXQUE3QixHQUE0QyxJQUFoRDtBQUNIOztBQUNELFFBQUlULENBQUMsR0FBRyxJQUFSLEVBQWM7QUFDViw0QkFBZUgsQ0FBZixlQUFxQkMsQ0FBckIsZUFBMkJDLENBQTNCLGVBQWlDQyxDQUFDLEdBQUcsSUFBckM7QUFDSDs7QUFDRCx5QkFBY0gsQ0FBZCxlQUFvQkMsQ0FBcEIsZUFBMEJDLENBQTFCO0FBQ0g7O0FBQ0RQLGdCQUFjLENBQUNDLFlBQWYsR0FBOEJBLFlBQTlCOztBQUNBLFdBQVNpQixpQkFBVCxDQUEyQkMsT0FBM0IsRUFBb0NDLE1BQXBDLEVBQTRDQyxNQUE1QyxFQUFvREMsTUFBcEQsRUFBNERDLGNBQTVELEVBQTRFO0FBQ3hFLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osTUFBTSxDQUFDSyxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxVQUFNRSxHQUFHLEdBQUdOLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFsQjtBQUNBLFVBQU1yQixLQUFLLEdBQUdrQixNQUFNLENBQUNHLENBQUQsQ0FBcEI7QUFDQSxVQUFJRyxLQUFLLEdBQUdMLE1BQU0sQ0FBQ0UsQ0FBRCxDQUFOLEdBQVksSUFBeEI7QUFDQSxVQUFJRyxLQUFLLEdBQUcsQ0FBWixFQUNJQSxLQUFLLEdBQUcsQ0FBUjtBQUNKLFVBQUlBLEtBQUssR0FBRyxDQUFaLEVBQ0lBLEtBQUssR0FBRyxDQUFSO0FBQ0pSLGFBQU8sQ0FBQ1MsWUFBUixDQUFxQkQsS0FBckIsRUFBNEIxQixZQUFZLENBQUN5QixHQUFELEVBQU12QixLQUFOLEVBQWFvQixjQUFiLENBQXhDO0FBQ0g7QUFDSjs7QUFDRHZCLGdCQUFjLENBQUNrQixpQkFBZixHQUFtQ0EsaUJBQW5DOztBQUNBLFdBQVNXLHFCQUFULENBQStCQyxNQUEvQixFQUF1Q1YsTUFBdkMsRUFBK0NDLE1BQS9DLEVBQXVEQyxNQUF2RCxFQUErREMsY0FBL0QsRUFBK0VRLE9BQS9FLEVBQXdGO0FBQ3BGbEMsVUFBTSxDQUFDbUMsQ0FBUCxHQUFXLE1BQVg7QUFDQW5DLFVBQU0sQ0FBQ29DLENBQVAsR0FBVyxDQUFYO0FBQ0FDLGdFQUFBLENBQXNCSixNQUF0QixFQUE4QmpDLE1BQTlCLEVBQXNDQSxNQUF0QztBQUNBLFFBQU1zQixPQUFPLEdBQUdZLE9BQU8sQ0FBQ0ksb0JBQVIsQ0FBNkJMLE1BQU0sQ0FBQ00sRUFBcEMsRUFBd0NOLE1BQU0sQ0FBQ08sRUFBL0MsRUFBbUQsQ0FBbkQsRUFBc0RQLE1BQU0sQ0FBQ00sRUFBN0QsRUFBaUVOLE1BQU0sQ0FBQ08sRUFBeEUsRUFBNEVDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQUMxQyxNQUFNLENBQUNtQyxDQUFQLEdBQVdGLE1BQU0sQ0FBQ00sRUFBbkIsSUFBeUIsQ0FBbEMsQ0FBNUUsQ0FBaEI7QUFDQWxCLHFCQUFpQixDQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBa0JDLE1BQWxCLEVBQTBCQyxNQUExQixFQUFrQ0MsY0FBbEMsQ0FBakI7QUFDQSxXQUFPSixPQUFQO0FBQ0g7O0FBQ0RuQixnQkFBYyxDQUFDNkIscUJBQWYsR0FBdUNBLHFCQUF2Qzs7QUFDQSxXQUFTVyxxQkFBVCxDQUErQlYsTUFBL0IsRUFBdUNWLE1BQXZDLEVBQStDQyxNQUEvQyxFQUF1REMsTUFBdkQsRUFBK0RDLGNBQS9ELEVBQStFUSxPQUEvRSxFQUF3RjtBQUNwRmxDLFVBQU0sQ0FBQ21DLENBQVAsR0FBVyxDQUFDLEtBQVo7QUFDQW5DLFVBQU0sQ0FBQ29DLENBQVAsR0FBVyxDQUFYO0FBQ0FsQyxVQUFNLENBQUNpQyxDQUFQLEdBQVcsS0FBWDtBQUNBakMsVUFBTSxDQUFDa0MsQ0FBUCxHQUFXLENBQVg7QUFDQUMsZ0VBQUEsQ0FBc0JKLE1BQXRCLEVBQThCakMsTUFBOUIsRUFBc0NBLE1BQXRDO0FBQ0FxQyxnRUFBQSxDQUFzQkosTUFBdEIsRUFBOEIvQixNQUE5QixFQUFzQ0EsTUFBdEM7QUFDQSxRQUFNb0IsT0FBTyxHQUFHWSxPQUFPLENBQUNVLG9CQUFSLENBQTZCNUMsTUFBTSxDQUFDbUMsQ0FBcEMsRUFBdUNuQyxNQUFNLENBQUNvQyxDQUE5QyxFQUFpRGxDLE1BQU0sQ0FBQ2lDLENBQXhELEVBQTJEakMsTUFBTSxDQUFDa0MsQ0FBbEUsQ0FBaEI7QUFDQWYscUJBQWlCLENBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFrQkMsTUFBbEIsRUFBMEJDLE1BQTFCLEVBQWtDQyxjQUFsQyxDQUFqQjtBQUNBLFdBQU9KLE9BQVA7QUFDSDs7QUFDRG5CLGdCQUFjLENBQUN3QyxxQkFBZixHQUF1Q0EscUJBQXZDOztBQUNBLFdBQVNFLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCQyxNQUE5QixFQUFzQ2IsT0FBdEMsRUFBK0M7QUFDM0MsUUFBTVosT0FBTyxHQUFHWSxPQUFPLENBQUNjLGFBQVIsQ0FBc0JGLEtBQXRCLEVBQTZCQyxNQUFNLEdBQUcsUUFBSCxHQUFjLE1BQWpELENBQWhCOztBQUNBLFFBQUl6QixPQUFKLEVBQWE7QUFDVCxhQUFPQSxPQUFQO0FBQ0g7O0FBQ0QsV0FBTyxFQUFQO0FBQ0g7O0FBQ0RuQixnQkFBYyxDQUFDMEMsYUFBZixHQUErQkEsYUFBL0I7QUFDSCxDQTVERCxFQTRERzFDLGNBQWMsS0FBS0EsY0FBYyxHQUFHLEVBQXRCLENBNURqQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNPLElBQU1MLGNBQWI7QUFBQTs7QUFBQTs7QUFDSSw0QkFBYztBQUFBOztBQUFBOztBQUNWLCtCQUFTbUQsU0FBVDtBQUNBLFVBQUtDLElBQUwsR0FBWUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQVo7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLENBQUMsTUFBS0gsSUFBTCxDQUFVSSxVQUFWLENBQXFCLElBQXJCLENBQUQsQ0FBaEI7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLEVBQXRCO0FBSlU7QUFLYjs7QUFOTDtBQUFBO0FBQUEsV0FPSSxzQkFBYTtBQUNULGFBQU8sS0FBS0YsUUFBTCxDQUFjLEtBQUtBLFFBQUwsQ0FBY3pCLE1BQWQsR0FBdUIsQ0FBckMsQ0FBUDtBQUNIO0FBVEw7QUFBQTtBQUFBLFdBVUkscUJBQVlNLE9BQVosRUFBcUI7QUFDakIsV0FBS21CLFFBQUwsQ0FBY0csSUFBZCxDQUFtQnRCLE9BQW5CO0FBQ0g7QUFaTDtBQUFBO0FBQUEsV0FhSSwwQkFBaUI7QUFDYixVQUFJLEtBQUttQixRQUFMLENBQWN6QixNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzFCLGFBQUt5QixRQUFMLENBQWNJLEdBQWQ7QUFDSCxPQUZELE1BR0s7QUFDRCxhQUFLQyxNQUFMLENBQVlDLEtBQVosQ0FBa0JDLE9BQWxCLENBQTBCLGdDQUExQjtBQUNIO0FBQ0o7QUFwQkw7QUFBQTtBQUFBLFdBcUJJLCtCQUFzQjtBQUNsQixVQUFJMUIsT0FBSjs7QUFDQSxVQUFJLEtBQUtxQixjQUFMLENBQW9CM0IsTUFBeEIsRUFBZ0M7QUFDNUJNLGVBQU8sR0FBRyxLQUFLcUIsY0FBTCxDQUFvQkUsR0FBcEIsRUFBVjtBQUNILE9BRkQsTUFHSztBQUNELFlBQU1JLE1BQU0sR0FBR1YsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQWxCLGVBQU8sR0FBRzJCLE1BQU0sQ0FBQ1AsVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBQ0g7O0FBUmlCLHVCQVNRLEtBQUtKLElBVGI7QUFBQSxVQVNWWSxLQVRVLGNBU1ZBLEtBVFU7QUFBQSxVQVNIQyxNQVRHLGNBU0hBLE1BVEc7O0FBVWxCLFVBQUk3QixPQUFPLENBQUMyQixNQUFSLENBQWVDLEtBQWYsS0FBeUJBLEtBQTdCLEVBQW9DO0FBQ2hDNUIsZUFBTyxDQUFDMkIsTUFBUixDQUFlQyxLQUFmLEdBQXVCQSxLQUF2QjtBQUNIOztBQUNELFVBQUk1QixPQUFPLENBQUMyQixNQUFSLENBQWVFLE1BQWYsS0FBMEJBLE1BQTlCLEVBQXNDO0FBQ2xDN0IsZUFBTyxDQUFDMkIsTUFBUixDQUFlRSxNQUFmLEdBQXdCQSxNQUF4QjtBQUNIOztBQUNELGFBQU83QixPQUFQO0FBQ0g7QUF0Q0w7QUFBQTtBQUFBLFdBdUNJLDhCQUFxQkEsT0FBckIsRUFBOEI7QUFDMUIsV0FBS3FCLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCdEIsT0FBekI7QUFDSDtBQXpDTDtBQUFBO0FBQUEsV0EwQ0ksaUJBQVE7QUFDSixXQUFLOEIsS0FBTDtBQUNBLFdBQUtDLFVBQUw7QUFDSDtBQTdDTDtBQUFBO0FBQUEsV0E4Q0ksaUJBQVE7QUFBQSxVQUNJZixJQURKLEdBQ2EsSUFEYixDQUNJQSxJQURKO0FBRUosVUFBTWhCLE9BQU8sR0FBRyxLQUFLb0IsVUFBTCxFQUFoQjtBQUNBcEIsYUFBTyxDQUFDZ0MsWUFBUjtBQUNBaEMsYUFBTyxDQUFDaUMsU0FBUixDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QmpCLElBQUksQ0FBQ1ksS0FBN0IsRUFBb0NaLElBQUksQ0FBQ2EsTUFBekM7QUFDSDtBQW5ETDtBQUFBO0FBQUEsV0FvREksc0JBQWE7QUFDVCxVQUFNRCxLQUFLLEdBQUcsS0FBS0osTUFBTCxDQUFZVSxNQUFaLENBQW1CQyxRQUFuQixFQUFkO0FBQ0EsVUFBTU4sTUFBTSxHQUFHLEtBQUtMLE1BQUwsQ0FBWVUsTUFBWixDQUFtQkUsU0FBbkIsRUFBZjtBQUNBLFVBQU1DLFVBQVUsR0FBRyxLQUFLYixNQUFMLENBQVlVLE1BQVosQ0FBbUJJLGFBQW5CLEVBQW5CO0FBQ0EsVUFBTUMsU0FBUyxHQUFHaEMsSUFBSSxDQUFDaUMsS0FBTCxDQUFXWixLQUFLLEdBQUdTLFVBQW5CLENBQWxCO0FBQ0EsVUFBTUksVUFBVSxHQUFHbEMsSUFBSSxDQUFDaUMsS0FBTCxDQUFXWCxNQUFNLEdBQUdRLFVBQXBCLENBQW5CO0FBTFMsVUFNRHJCLElBTkMsR0FNUSxJQU5SLENBTURBLElBTkM7O0FBT1QsVUFBSUEsSUFBSSxDQUFDWSxLQUFMLEtBQWVXLFNBQWYsSUFBNEJ2QixJQUFJLENBQUNhLE1BQUwsS0FBZ0JZLFVBQWhELEVBQTREO0FBQ3hEekIsWUFBSSxDQUFDWSxLQUFMLEdBQWFXLFNBQWI7QUFDQXZCLFlBQUksQ0FBQ2EsTUFBTCxHQUFjWSxVQUFkO0FBQ0F6QixZQUFJLENBQUMwQixLQUFMLENBQVdkLEtBQVgsYUFBc0JBLEtBQXRCO0FBQ0FaLFlBQUksQ0FBQzBCLEtBQUwsQ0FBV2IsTUFBWCxhQUF1QkEsTUFBdkI7QUFDSDtBQUNKO0FBakVMOztBQUFBO0FBQUEsRUFBb0NsRSwrQ0FBcEMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRE8sSUFBTWdGLFNBQVMsR0FBRyxXQUFsQjtBQUNBLElBQUlDLFNBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxTQUFWLEVBQXFCO0FBQ2xCLFdBQVNDLFdBQVQsQ0FBcUJDLFNBQXJCLEVBQWdDO0FBQUEsUUFDcEJDLFFBRG9CLEdBQ1BELFNBRE8sQ0FDcEJDLFFBRG9COztBQUU1QixRQUFJQSxRQUFKLEVBQWM7QUFDVixVQUFJQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsUUFBZCxDQUFKLEVBQTZCO0FBQ3pCLGVBQU9BLFFBQVEsQ0FBQ3JELE1BQWhCO0FBQ0g7O0FBQ0QsVUFBSXFELFFBQVEsQ0FBQ0csSUFBYixFQUFtQjtBQUNmLGVBQU8sQ0FBUDtBQUNIOztBQUNELFVBQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlKLFFBQVosQ0FBYjtBQUNBLGFBQU9JLElBQUksQ0FBQ3pELE1BQVo7QUFDSDs7QUFDRCxXQUFPLENBQVA7QUFDSDs7QUFDRGtELFdBQVMsQ0FBQ0MsV0FBVixHQUF3QkEsV0FBeEI7QUFDSCxDQWhCRCxFQWdCR0QsU0FBUyxLQUFLQSxTQUFTLEdBQUcsRUFBakIsQ0FoQlo7O0FBaUJPLElBQUlTLGtCQUFKOztBQUNQLENBQUMsVUFBVUEsa0JBQVYsRUFBOEI7QUFDM0IsV0FBU0MsTUFBVCxDQUFnQlIsU0FBaEIsRUFBMkJ0QixNQUEzQixFQUFtQztBQUFBLFFBQ3ZCdUIsUUFEdUIsR0FDVkQsU0FEVSxDQUN2QkMsUUFEdUI7QUFBQSxRQUV2QlEsUUFGdUIsR0FFVi9CLE1BRlUsQ0FFdkIrQixRQUZ1Qjs7QUFHL0IsUUFBSVIsUUFBSixFQUFjO0FBQ1YsVUFBTS9DLE9BQU8sR0FBR3VELFFBQVEsQ0FBQ25DLFVBQVQsRUFBaEI7QUFDQW1DLGNBQVEsQ0FBQ0MsS0FBVDs7QUFDQSxVQUFJUixLQUFLLENBQUNDLE9BQU4sQ0FBY0YsUUFBZCxDQUFKLEVBQTZCO0FBQ3pCLGFBQUssSUFBSXRELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdzRCxRQUFRLENBQUNyRCxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztBQUN0QyxjQUFNZ0UsU0FBUyxHQUFHVixRQUFRLENBQUN0RCxDQUFELENBQTFCO0FBQ0E4RCxrQkFBUSxDQUFDRyxlQUFULENBQXlCRCxTQUF6QixFQUFvQ3pELE9BQXBDO0FBQ0g7QUFDSixPQUxELE1BTUssSUFBSStDLFFBQVEsQ0FBQ0csSUFBYixFQUFtQjtBQUNwQixZQUFNTyxVQUFTLEdBQUdWLFFBQWxCO0FBQ0FRLGdCQUFRLENBQUNHLGVBQVQsQ0FBeUJELFVBQXpCLEVBQW9DekQsT0FBcEM7QUFDSCxPQUhJLE1BSUE7QUFDRCxZQUFNMkQsYUFBYSxHQUFHWixRQUF0QjtBQUNBLFlBQU1JLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlRLGFBQVosQ0FBYjs7QUFDQSxhQUFLLElBQUlsRSxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHMEQsSUFBSSxDQUFDekQsTUFBekIsRUFBaUNELEVBQUMsRUFBbEMsRUFBc0M7QUFDbEMsY0FBTWdFLFdBQVMsR0FBR0UsYUFBYSxDQUFDUixJQUFJLENBQUMxRCxFQUFELENBQUwsQ0FBL0I7QUFDQThELGtCQUFRLENBQUNHLGVBQVQsQ0FBeUJELFdBQXpCLEVBQW9DekQsT0FBcEM7QUFDSDtBQUNKOztBQUNEdUQsY0FBUSxDQUFDQyxLQUFUO0FBQ0g7QUFDSjs7QUFDREgsb0JBQWtCLENBQUNDLE1BQW5CLEdBQTRCQSxNQUE1Qjs7QUFDQSxXQUFTTSxNQUFULENBQWdCZCxTQUFoQixFQUEyQnRCLE1BQTNCLEVBQW1DO0FBQUEsUUFDdkJ1QixRQUR1QixHQUNWRCxTQURVLENBQ3ZCQyxRQUR1QjtBQUFBLFFBRXZCYyxPQUZ1QixHQUVYckMsTUFGVyxDQUV2QnFDLE9BRnVCOztBQUcvQixRQUFJZCxRQUFKLEVBQWM7QUFDVmMsYUFBTyxDQUFDTCxLQUFSOztBQUNBLFVBQUlSLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixRQUFkLENBQUosRUFBNkI7QUFDekIsYUFBSyxJQUFJdEQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3NELFFBQVEsQ0FBQ3JELE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDLGNBQU1nRSxTQUFTLEdBQUdWLFFBQVEsQ0FBQ3RELENBQUQsQ0FBMUI7QUFDQW9FLGlCQUFPLENBQUNDLGVBQVIsQ0FBd0JMLFNBQXhCO0FBQ0g7QUFDSixPQUxELE1BTUssSUFBSVYsUUFBUSxDQUFDRyxJQUFiLEVBQW1CO0FBQ3BCLFlBQU1PLFdBQVMsR0FBR1YsUUFBbEI7QUFDQWMsZUFBTyxDQUFDQyxlQUFSLENBQXdCTCxXQUF4QjtBQUNILE9BSEksTUFJQTtBQUNELFlBQU1FLGFBQWEsR0FBR1osUUFBdEI7QUFDQSxZQUFNSSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZUSxhQUFaLENBQWI7O0FBQ0EsYUFBSyxJQUFJbEUsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBRzBELElBQUksQ0FBQ3pELE1BQXpCLEVBQWlDRCxHQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLGNBQU1nRSxXQUFTLEdBQUdFLGFBQWEsQ0FBQ1IsSUFBSSxDQUFDMUQsR0FBRCxDQUFMLENBQS9CO0FBQ0FvRSxpQkFBTyxDQUFDQyxlQUFSLENBQXdCTCxXQUF4QjtBQUNIO0FBQ0o7O0FBQ0RJLGFBQU8sQ0FBQ0wsS0FBUjtBQUNIO0FBQ0o7O0FBQ0RILG9CQUFrQixDQUFDTyxNQUFuQixHQUE0QkEsTUFBNUI7O0FBQ0EsV0FBU0csT0FBVCxDQUFpQmpCLFNBQWpCLEVBQTRCdEIsTUFBNUIsRUFBb0M7QUFBQSxRQUN4QnVCLFFBRHdCLEdBQ1hELFNBRFcsQ0FDeEJDLFFBRHdCO0FBQUEsUUFFeEJpQixhQUZ3QixHQUVOeEMsTUFGTSxDQUV4QndDLGFBRndCOztBQUdoQyxRQUFJakIsUUFBSixFQUFjO0FBQ1YsVUFBTS9DLE9BQU8sR0FBR2dFLGFBQWEsQ0FBQzVDLFVBQWQsRUFBaEI7QUFDQTRDLG1CQUFhLENBQUNSLEtBQWQ7O0FBQ0EsVUFBSVIsS0FBSyxDQUFDQyxPQUFOLENBQWNGLFFBQWQsQ0FBSixFQUE2QjtBQUN6QixhQUFLLElBQUl0RCxDQUFDLEdBQUdzRCxRQUFRLENBQUNyRCxNQUFULEdBQWtCLENBQS9CLEVBQWtDRCxDQUFDLElBQUksQ0FBdkMsRUFBMENBLENBQUMsRUFBM0MsRUFBK0M7QUFDM0MsY0FBTWdFLFNBQVMsR0FBR1YsUUFBUSxDQUFDdEQsQ0FBRCxDQUExQjtBQUNBLGNBQU13RSxNQUFNLEdBQUdELGFBQWEsQ0FBQ0UsaUJBQWQsQ0FBZ0NULFNBQWhDLEVBQTJDekQsT0FBM0MsQ0FBZjs7QUFDQSxjQUFJaUUsTUFBSixFQUFZO0FBQ1IsbUJBQU8sSUFBUDtBQUNIO0FBQ0o7QUFDSixPQVJELE1BU0ssSUFBSWxCLFFBQVEsQ0FBQ0csSUFBYixFQUFtQjtBQUNwQixZQUFNTyxXQUFTLEdBQUdWLFFBQWxCOztBQUNBLFlBQU1rQixPQUFNLEdBQUdELGFBQWEsQ0FBQ0UsaUJBQWQsQ0FBZ0NULFdBQWhDLEVBQTJDekQsT0FBM0MsQ0FBZjs7QUFDQSxZQUFJaUUsT0FBSixFQUFZO0FBQ1IsaUJBQU8sSUFBUDtBQUNIO0FBQ0osT0FOSSxNQU9BO0FBQ0QsWUFBTU4sYUFBYSxHQUFHWixRQUF0QjtBQUNBLFlBQU1JLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlRLGFBQVosQ0FBYjs7QUFDQSxhQUFLLElBQUlsRSxHQUFDLEdBQUcwRCxJQUFJLENBQUN6RCxNQUFMLEdBQWMsQ0FBM0IsRUFBOEJELEdBQUMsSUFBSSxDQUFuQyxFQUFzQ0EsR0FBQyxFQUF2QyxFQUEyQztBQUN2QyxjQUFNZ0UsV0FBUyxHQUFHRSxhQUFhLENBQUNSLElBQUksQ0FBQzFELEdBQUQsQ0FBTCxDQUEvQjs7QUFDQSxjQUFNd0UsUUFBTSxHQUFHRCxhQUFhLENBQUNFLGlCQUFkLENBQWdDVCxXQUFoQyxFQUEyQ3pELE9BQTNDLENBQWY7O0FBQ0EsY0FBSWlFLFFBQUosRUFBWTtBQUNSLG1CQUFPLElBQVA7QUFDSDtBQUNKO0FBQ0o7O0FBQ0RELG1CQUFhLENBQUNSLEtBQWQ7QUFDSDs7QUFDRCxXQUFPLEtBQVA7QUFDSDs7QUFDREgsb0JBQWtCLENBQUNVLE9BQW5CLEdBQTZCQSxPQUE3Qjs7QUFDQSxXQUFTSSxJQUFULENBQWMzQyxNQUFkLEVBQXNCO0FBQ2xCQSxVQUFNLENBQUM0QyxVQUFQLENBQWtCUixNQUFsQixDQUF5QlMsR0FBekIsQ0FBNkIxQixTQUE3QixFQUF3Q2lCLE1BQXhDO0FBQ0FwQyxVQUFNLENBQUM0QyxVQUFQLENBQWtCZCxNQUFsQixDQUF5QmUsR0FBekIsQ0FBNkIxQixTQUE3QixFQUF3Q1csTUFBeEM7QUFDQTlCLFVBQU0sQ0FBQzRDLFVBQVAsQ0FBa0JMLE9BQWxCLENBQTBCTSxHQUExQixDQUE4QjFCLFNBQTlCLEVBQXlDb0IsT0FBekM7QUFDSDs7QUFDRFYsb0JBQWtCLENBQUNjLElBQW5CLEdBQTBCQSxJQUExQjtBQUNILENBcEdELEVBb0dHZCxrQkFBa0IsS0FBS0Esa0JBQWtCLEdBQUcsRUFBMUIsQ0FwR3JCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNeEYsTUFBYixHQUNJLGtCQUF5QjtBQUFBOztBQUFBLE1BQWJILE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDckIsT0FBSzhGLEtBQUwsR0FBYSxFQUFiO0FBQ0E5RixRQUFNLENBQUM0RyxVQUFQLHlCQUFvQjVHLE1BQU0sQ0FBQzRHLFVBQTNCLG1FQUF5Q0EsNERBQXpDO0FBQ0E1RyxRQUFNLENBQUM2RyxNQUFQLHFCQUFnQjdHLE1BQU0sQ0FBQzZHLE1BQXZCLDJEQUFpQ0Esb0RBQWpDO0FBQ0E3RyxRQUFNLENBQUNDLFFBQVAsdUJBQWtCRCxNQUFNLENBQUNDLFFBQXpCLCtEQUFxQ0Esd0RBQXJDO0FBQ0FELFFBQU0sQ0FBQzhHLE9BQVAsc0JBQWlCOUcsTUFBTSxDQUFDOEcsT0FBeEIsNkRBQW1DQSxzREFBbkM7QUFDQTlHLFFBQU0sQ0FBQytHLFFBQVAsdUJBQWtCL0csTUFBTSxDQUFDK0csUUFBekIsK0RBQXFDQSx3REFBckM7QUFDQS9HLFFBQU0sQ0FBQ2dILGFBQVAsNEJBQXVCaEgsTUFBTSxDQUFDZ0gsYUFBOUIseUVBQStDQSxtRUFBL0M7QUFDQWhILFFBQU0sQ0FBQ2lILE1BQVAscUJBQWdCakgsTUFBTSxDQUFDaUgsTUFBdkIsMkRBQWlDQSxvREFBakM7QUFDQWpILFFBQU0sQ0FBQ2tILEtBQVAsb0JBQWVsSCxNQUFNLENBQUNrSCxLQUF0Qix5REFBK0JBLGtEQUEvQjtBQUNBbEgsUUFBTSxDQUFDbUgsU0FBUCx3QkFBbUJuSCxNQUFNLENBQUNtSCxTQUExQixpRUFBdUNBLDBEQUF2QztBQUNBLE9BQUtULFVBQUwsR0FBa0IsSUFBSTFHLE1BQU0sQ0FBQzRHLFVBQVgsRUFBbEI7QUFDQSxPQUFLcEMsTUFBTCxHQUFjLElBQUl4RSxNQUFNLENBQUM2RyxNQUFYLEVBQWQ7QUFDQSxPQUFLTyxRQUFMLEdBQWdCLElBQUlwSCxNQUFNLENBQUNDLFFBQVgsQ0FBb0IsSUFBcEIsQ0FBaEI7QUFDQSxPQUFLa0csT0FBTCxHQUFlLElBQUluRyxNQUFNLENBQUM4RyxPQUFYLENBQW1CLElBQW5CLENBQWY7QUFDQSxPQUFLakIsUUFBTCxHQUFnQixJQUFJN0YsTUFBTSxDQUFDK0csUUFBWCxDQUFvQixJQUFwQixDQUFoQjtBQUNBLE9BQUtULGFBQUwsR0FBcUIsSUFBSXRHLE1BQU0sQ0FBQ2dILGFBQVgsQ0FBeUIsSUFBekIsQ0FBckI7QUFDQSxPQUFLSyxNQUFMLEdBQWMsSUFBSXJILE1BQU0sQ0FBQ2lILE1BQVgsQ0FBa0IsSUFBbEIsQ0FBZDtBQUNBLE9BQUtsRCxLQUFMLEdBQWEsSUFBSS9ELE1BQU0sQ0FBQ2tILEtBQVgsRUFBYjtBQUNBLE9BQUtJLFNBQUwsR0FBaUIsSUFBSXRILE1BQU0sQ0FBQ21ILFNBQVgsQ0FBcUIsSUFBckIsQ0FBakI7QUFDQXhCLDRFQUFBLENBQXdCLElBQXhCO0FBQ0gsQ0F0QkwsQzs7Ozs7Ozs7Ozs7Ozs7O0FDVk8sSUFBTTRCLGFBQWIsR0FDSSx1QkFBWXpELE1BQVosRUFBb0I7QUFBQTs7QUFDaEIsT0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0gsQ0FITCxDOzs7Ozs7Ozs7Ozs7Ozs7QUNBTyxJQUFNOEMsVUFBYixHQUNJLHNCQUFjO0FBQUE7O0FBQ1YsT0FBS1ksVUFBTCxHQUFrQixJQUFJQyxHQUFKLEVBQWxCO0FBQ0EsT0FBSzdCLE1BQUwsR0FBYyxJQUFJNkIsR0FBSixFQUFkO0FBQ0EsT0FBS3ZCLE1BQUwsR0FBYyxJQUFJdUIsR0FBSixFQUFkO0FBQ0EsT0FBS3BCLE9BQUwsR0FBZSxJQUFJb0IsR0FBSixFQUFmO0FBQ0EsT0FBS0MsTUFBTCxHQUFjLElBQUlELEdBQUosRUFBZDtBQUNILENBUEwsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLElBQU1QLEtBQWI7QUFDSSxtQkFBYztBQUFBOztBQUNWLFNBQUtTLE1BQUwsR0FBYyxJQUFJRixHQUFKLEVBQWQ7QUFDQSxTQUFLRyxRQUFMLEdBQWdCLElBQUlILEdBQUosRUFBaEI7QUFDQSxTQUFLSSxPQUFMLEdBQWUsSUFBZjtBQUNIOztBQUxMO0FBQUE7QUFBQSxXQU1JLGVBQWE7QUFBQTs7QUFDVCxVQUFJLENBQUMsS0FBS0EsT0FBVixFQUFtQjtBQUNmO0FBQ0g7O0FBQ0Qsa0JBQUFDLE9BQU8sRUFBQ0MsR0FBUjtBQUNIO0FBWEw7QUFBQTtBQUFBLFdBWUksaUJBQWU7QUFDWCxVQUFJLENBQUMsS0FBS0YsT0FBVixFQUFtQjtBQUNmO0FBQ0g7O0FBSFUsd0NBQU5HLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUlYLFVBQU1DLEVBQUUsR0FBR0MsTUFBTSxDQUFDRixJQUFELENBQWpCO0FBQ0EsVUFBSUcsS0FBSyxHQUFHLEtBQUtSLE1BQUwsQ0FBWVMsR0FBWixDQUFnQkgsRUFBaEIsQ0FBWjs7QUFDQSxVQUFJLENBQUNFLEtBQUwsRUFBWTtBQUFBOztBQUNSQSxhQUFLLEdBQUcsQ0FBUjs7QUFDQSxxQkFBQUwsT0FBTyxFQUFDTyxLQUFSLGtCQUFpQkwsSUFBakI7QUFDSDs7QUFDREcsV0FBSztBQUNMLFdBQUtSLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0JzQixFQUFoQixFQUFvQkUsS0FBcEI7QUFDSDtBQXhCTDtBQUFBO0FBQUEsV0F5QkksbUJBQWlCO0FBQ2IsVUFBSSxDQUFDLEtBQUtOLE9BQVYsRUFBbUI7QUFDZjtBQUNIOztBQUhZLHlDQUFORyxJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFJYixVQUFNQyxFQUFFLEdBQUdDLE1BQU0sQ0FBQ0YsSUFBRCxDQUFqQjtBQUNBLFVBQUlHLEtBQUssR0FBRyxLQUFLUCxRQUFMLENBQWNRLEdBQWQsQ0FBa0JILEVBQWxCLENBQVo7O0FBQ0EsVUFBSSxDQUFDRSxLQUFMLEVBQVk7QUFBQTs7QUFDUkEsYUFBSyxHQUFHLENBQVI7O0FBQ0EscUJBQUFMLE9BQU8sRUFBQ1EsSUFBUixrQkFBZ0JOLElBQWhCO0FBQ0g7O0FBQ0RHLFdBQUs7QUFDTCxXQUFLUCxRQUFMLENBQWNqQixHQUFkLENBQWtCc0IsRUFBbEIsRUFBc0JFLEtBQXRCO0FBQ0g7QUFyQ0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNPLElBQU1sSSxRQUFiO0FBQUE7O0FBQUE7O0FBQ0ksc0JBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBU29ELFNBQVQ7QUFDQSxVQUFLQyxJQUFMLEdBQVlDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBRlU7QUFHYjs7QUFKTDtBQUFBO0FBQUEsV0FLSSxpQkFBUSxDQUNQO0FBTkw7QUFBQTtBQUFBLFdBT0ksZUFBTSxDQUNMO0FBUkw7O0FBQUE7QUFBQSxFQUE4QitELHdEQUE5QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1QLGFBQWI7QUFBQTs7QUFBQTs7QUFDSSwyQkFBYztBQUFBOztBQUFBOztBQUNWLCtCQUFTM0QsU0FBVDtBQUNBLFVBQUt5QyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQUsrQixPQUFMLEdBQWUsSUFBZjtBQUNBLFVBQUtVLE1BQUwsR0FBY2xJLGtEQUFBLEVBQWQ7QUFDQSxVQUFLbUksS0FBTCxHQUFhbkksa0RBQUEsRUFBYjtBQUNBLFVBQUtvSSxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixhQUFuQjtBQUNBLFVBQUtqRixRQUFMLEdBQWdCLEVBQWhCO0FBUlU7QUFTYjs7QUFWTDtBQUFBO0FBQUEsV0FXSSxzQkFBYTtBQUNULFVBQUluQixPQUFPLEdBQUcsS0FBS21CLFFBQUwsQ0FBYyxLQUFLcUMsS0FBbkIsQ0FBZDs7QUFDQSxVQUFJLENBQUN4RCxPQUFMLEVBQWM7QUFDVkEsZUFBTyxHQUFHO0FBQ05ELGdCQUFNLEVBQUVJLG1EQUFBO0FBREYsU0FBVjtBQUdBLGFBQUtnQixRQUFMLENBQWMsS0FBS3FDLEtBQW5CLElBQTRCeEQsT0FBNUI7QUFDSDs7QUFDRCxhQUFPQSxPQUFQO0FBQ0g7QUFwQkw7QUFBQTtBQUFBLFdBcUJJLGtCQUFTa0QsSUFBVCxFQUFlakQsQ0FBZixFQUFrQkMsQ0FBbEIsRUFBcUJ5RixFQUFyQixFQUF5QjtBQUNyQixVQUFJLENBQUMsS0FBS0osT0FBVixFQUFtQjtBQUNmO0FBQ0g7O0FBSG9CLFVBSWJjLElBSmEsR0FJSixLQUFLN0UsTUFKRCxDQUliNkUsSUFKYTs7QUFLckIsVUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUDtBQUNIOztBQUNELFdBQUtILEtBQUwsQ0FBV2pHLENBQVgsR0FBZUEsQ0FBZjtBQUNBLFdBQUtpRyxLQUFMLENBQVdoRyxDQUFYLEdBQWVBLENBQWY7QUFDQSxXQUFLK0YsTUFBTCxDQUFZaEcsQ0FBWixHQUFnQkEsQ0FBaEI7QUFDQSxXQUFLZ0csTUFBTCxDQUFZL0YsQ0FBWixHQUFnQkEsQ0FBaEI7QUFDQSxXQUFLaUcsU0FBTCxHQUFpQlIsRUFBakI7QUFDQSxXQUFLUyxXQUFMLEdBQW1CbEQsSUFBbkI7QUFDQSxXQUFLTSxLQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQU04QyxJQUFJLEdBQUcsS0FBS2xGLFVBQUwsRUFBYjtBQUNBakIsNERBQUEsQ0FBZ0JtRyxJQUFJLENBQUN2RyxNQUFyQjtBQUNBLFdBQUt5RCxLQUFMO0FBQ0EsV0FBS1UsaUJBQUwsQ0FBdUJtQyxJQUF2QixFQUE2QkMsSUFBN0I7QUFDSDtBQXhDTDtBQUFBO0FBQUEsV0F5Q0ksMkJBQWtCN0MsU0FBbEIsRUFBNkI4QyxNQUE3QixFQUFxQztBQUNqQyxVQUFJLEtBQUsvQyxLQUFMLEdBQWEsS0FBS2hDLE1BQUwsQ0FBWWdDLEtBQTdCLEVBQW9DO0FBQ2hDLGVBQU8sS0FBUDtBQUNIOztBQUNELFVBQUksQ0FBQ2dELGtFQUFBLENBQWtCL0MsU0FBbEIsQ0FBTCxFQUFtQztBQUMvQixlQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFJLENBQUNnRCx5RUFBQSxDQUF5QmhELFNBQXpCLENBQUwsRUFBMEM7QUFDdEMsZUFBTyxLQUFQO0FBQ0g7O0FBQ0QsVUFBTWlELE9BQU8sR0FBRyxLQUFLbEYsTUFBTCxDQUFZNEMsVUFBWixDQUF1QkwsT0FBdkIsQ0FBK0IrQixHQUEvQixDQUFtQ3JDLFNBQVMsQ0FBQ1AsSUFBN0MsQ0FBaEI7O0FBQ0EsVUFBSXdELE9BQUosRUFBYTtBQUNULFlBQU0xRyxPQUFPLEdBQUcsS0FBS29CLFVBQUwsRUFBaEI7QUFDQXVGLDhFQUFBLENBQW9CbEQsU0FBcEIsRUFBK0J6RCxPQUFPLENBQUNELE1BQXZDO0FBQ0FJLDREQUFBLENBQWNvRyxNQUFNLENBQUN4RyxNQUFyQixFQUE2QkMsT0FBTyxDQUFDRCxNQUFyQyxFQUE2Q0MsT0FBTyxDQUFDRCxNQUFyRDtBQUNBSSwyRUFBQSxDQUE2QkgsT0FBTyxDQUFDRCxNQUFyQyxFQUE2QyxLQUFLa0csTUFBbEQsRUFBMEQsS0FBS0MsS0FBL0Q7QUFKUywwQkFLUSxLQUFLQSxLQUxiO0FBQUEsWUFLRGpHLENBTEMsZUFLREEsQ0FMQztBQUFBLFlBS0VDLENBTEYsZUFLRUEsQ0FMRjtBQU1ULFlBQU0rRCxNQUFNLEdBQUd5QyxPQUFPLENBQUNqRCxTQUFELEVBQVksS0FBS2pDLE1BQWpCLENBQXRCOztBQUNBLFlBQUl5QyxNQUFKLEVBQVk7QUFDUndDLGdGQUFBLENBQXNCaEQsU0FBdEIsRUFBaUMsS0FBSzJDLFdBQXRDLEVBQW1EbkcsQ0FBbkQsRUFBc0RDLENBQXRELEVBQXlELEtBQUtpRyxTQUE5RDtBQUNIOztBQUNELFlBQUksS0FBS0MsV0FBTCxLQUFxQixhQUF6QixFQUF3QztBQUNwQyxjQUFJbkMsTUFBTSxJQUFJLENBQUNSLFNBQVMsQ0FBQ21ELFdBQXpCLEVBQXNDO0FBQ2xDSCxrRkFBQSxDQUFzQmhELFNBQXRCLEVBQWlDLGFBQWpDLEVBQWdEeEQsQ0FBaEQsRUFBbURDLENBQW5ELEVBQXNELEtBQUtpRyxTQUEzRDtBQUNILFdBRkQsTUFHSyxJQUFJLENBQUNsQyxNQUFELElBQVdSLFNBQVMsQ0FBQ21ELFdBQXpCLEVBQXNDO0FBQ3ZDSCxrRkFBQSxDQUFzQmhELFNBQXRCLEVBQWlDLFlBQWpDLEVBQStDeEQsQ0FBL0MsRUFBa0RDLENBQWxELEVBQXFELEtBQUtpRyxTQUExRDtBQUNIOztBQUNEMUMsbUJBQVMsQ0FBQ21ELFdBQVYsR0FBd0IzQyxNQUF4QjtBQUNIOztBQUNELGVBQU9BLE1BQVA7QUFDSDs7QUFDRCxhQUFPLEtBQVA7QUFDSDtBQTFFTDs7QUFBQTtBQUFBLEVBQW1DZ0Isd0RBQW5DLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTVIsUUFBYjtBQUFBOztBQUFBOztBQUNJLHNCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsK0JBQVMxRCxTQUFUO0FBQ0EsVUFBS3lDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsVUFBS3FELFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxVQUFLdEIsT0FBTCxHQUFlLElBQWY7QUFDQSxVQUFLcEUsUUFBTCxHQUFnQixFQUFoQjtBQUxVO0FBTWI7O0FBUEw7QUFBQTtBQUFBLFdBUUksc0JBQWE7QUFDVCxVQUFJbkIsT0FBTyxHQUFHLEtBQUttQixRQUFMLENBQWMsS0FBS3FDLEtBQW5CLENBQWQ7O0FBQ0EsVUFBSSxDQUFDeEQsT0FBTCxFQUFjO0FBQ1ZBLGVBQU8sR0FBRztBQUNORCxnQkFBTSxFQUFFSSxtREFBQSxFQURGO0FBRU5YLHdCQUFjLEVBQUVkLDJEQUFBO0FBRlYsU0FBVjtBQUlBLGFBQUt5QyxRQUFMLENBQWMsS0FBS3FDLEtBQW5CLElBQTRCeEQsT0FBNUI7QUFDSDs7QUFDRCxhQUFPQSxPQUFQO0FBQ0g7QUFsQkw7QUFBQTtBQUFBLFdBbUJJLHlCQUFnQnlELFNBQWhCLEVBQTJCOEMsTUFBM0IsRUFBbUM7QUFDL0IsVUFBSSxLQUFLL0MsS0FBTCxHQUFhLEtBQUtoQyxNQUFMLENBQVlnQyxLQUE3QixFQUFvQztBQUNoQztBQUNIOztBQUNELFVBQUksQ0FBQ2dELGtFQUFBLENBQWtCL0MsU0FBbEIsQ0FBTCxFQUFtQztBQUMvQjtBQUNIOztBQUNELFVBQU16RCxPQUFPLEdBQUcsS0FBS29CLFVBQUwsRUFBaEI7QUFDQXVGLDRFQUFBLENBQW9CbEQsU0FBcEIsRUFBK0J6RCxPQUFPLENBQUNELE1BQXZDO0FBQ0E0RyxvRkFBQSxDQUE0QmxELFNBQTVCLEVBQXVDekQsT0FBTyxDQUFDUixjQUEvQztBQUNBVywwREFBQSxDQUFjb0csTUFBTSxDQUFDeEcsTUFBckIsRUFBNkJDLE9BQU8sQ0FBQ0QsTUFBckMsRUFBNkNDLE9BQU8sQ0FBQ0QsTUFBckQ7QUFDQXJCLGtFQUFBLENBQXNCNkgsTUFBTSxDQUFDL0csY0FBN0IsRUFBNkNRLE9BQU8sQ0FBQ1IsY0FBckQsRUFBcUVRLE9BQU8sQ0FBQ1IsY0FBN0U7QUFDQSxVQUFNa0gsT0FBTyxHQUFHLEtBQUtsRixNQUFMLENBQVk0QyxVQUFaLENBQXVCZCxNQUF2QixDQUE4QndDLEdBQTlCLENBQWtDckMsU0FBUyxDQUFDUCxJQUE1QyxDQUFoQjs7QUFDQSxVQUFJd0QsT0FBSixFQUFhO0FBQ1RBLGVBQU8sQ0FBQ2pELFNBQUQsRUFBWSxLQUFLakMsTUFBakIsQ0FBUDtBQUNIO0FBQ0o7QUFuQ0w7QUFBQTtBQUFBLFdBb0NJLGtCQUFTO0FBQ0wsVUFBSSxDQUFDLEtBQUsrRCxPQUFWLEVBQW1CO0FBQ2Y7QUFDSDs7QUFISSxVQUlHYyxJQUpILEdBSVksS0FBSzdFLE1BSmpCLENBSUc2RSxJQUpIOztBQUtMLFVBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1A7QUFDSDs7QUFDRCxVQUFNUyxTQUFTLEdBQUdDLFdBQVcsQ0FBQ0MsR0FBWixFQUFsQjtBQUNBLFdBQUt4RixNQUFMLENBQVlzRCxRQUFaLENBQXFCbUMsS0FBckI7QUFDQSxXQUFLekQsS0FBTCxHQUFhLENBQWI7QUFDQSxVQUFNOEMsSUFBSSxHQUFHLEtBQUtsRixVQUFMLEVBQWI7QUFDQSxXQUFLb0MsS0FBTDtBQUNBckQsd0RBQUEsQ0FBWSxLQUFLcUIsTUFBTCxDQUFZVSxNQUFaLENBQW1CZ0YsU0FBbkIsRUFBWixFQUE0Q1osSUFBSSxDQUFDdkcsTUFBakQ7QUFDQXJCLG9FQUFBLENBQXdCNEgsSUFBSSxDQUFDOUcsY0FBN0I7QUFDQSxXQUFLa0UsZUFBTCxDQUFxQjJDLElBQXJCLEVBQTJCQyxJQUEzQjtBQUNBLFdBQUs5RSxNQUFMLENBQVlzRCxRQUFaLENBQXFCcUMsR0FBckI7QUFDQSxXQUFLTixXQUFMLEdBQW1CRSxXQUFXLENBQUNDLEdBQVosS0FBb0JGLFNBQXZDO0FBQ0g7QUF0REw7O0FBQUE7QUFBQSxFQUE4QjdCLHdEQUE5QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNPLElBQU1KLFNBQWI7QUFBQTs7QUFBQTs7QUFDSSx1QkFBYztBQUFBOztBQUFBOztBQUNWLCtCQUFTOUQsU0FBVDtBQUNBLFVBQUtpRSxTQUFMLEdBQWlCLElBQUlHLEdBQUosRUFBakI7QUFDQSxVQUFLaUMsU0FBTCxHQUFpQixJQUFJQyxHQUFKLEVBQWpCO0FBSFU7QUFJYjs7QUFMTDtBQUFBO0FBQUEsV0FNSSxhQUFJQyxLQUFKLEVBQVc7QUFDUCxVQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNSLGVBQU8sSUFBUDtBQUNIOztBQUNELFVBQUlDLFFBQVEsR0FBRyxLQUFLdkMsU0FBTCxDQUFlYyxHQUFmLENBQW1Cd0IsS0FBbkIsQ0FBZjs7QUFDQSxVQUFJLENBQUNDLFFBQUwsRUFBZTtBQUNYQSxnQkFBUSxHQUFHLEtBQUtDLE9BQUwsQ0FBYUYsS0FBYixDQUFYO0FBQ0EsYUFBS3RDLFNBQUwsQ0FBZVgsR0FBZixDQUFtQmlELEtBQW5CLEVBQTBCQyxRQUExQjtBQUNIOztBQUNELGFBQU9BLFFBQVA7QUFDSDtBQWhCTDtBQUFBO0FBQUEsV0FpQkksaUJBQVFELEtBQVIsRUFBZTtBQUFBLGlEQUNZLEtBQUtGLFNBRGpCO0FBQUE7O0FBQUE7QUFDWCw0REFBdUM7QUFBQSxjQUE1QkssUUFBNEI7QUFDbkMsY0FBTUYsUUFBUSxHQUFHRSxRQUFRLENBQUNILEtBQUQsRUFBUSxLQUFLOUYsTUFBYixDQUF6Qjs7QUFDQSxjQUFJK0YsUUFBSixFQUFjO0FBQ1YsbUJBQU9BLFFBQVA7QUFDSDtBQUNKO0FBTlU7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPWCxXQUFLL0YsTUFBTCxDQUFZQyxLQUFaLENBQWtCQyxPQUFsQixrQ0FBb0Q0RixLQUFwRDtBQUNBLGFBQU8sSUFBUDtBQUNIO0FBMUJMOztBQUFBO0FBQUEsRUFBK0JyQyx3REFBL0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNPLElBQU1WLE1BQWI7QUFDSSxvQkFBYztBQUFBOztBQUNWLFNBQUszQyxLQUFMLEdBQWEsR0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxHQUFkO0FBQ0EsU0FBS1EsVUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtxRixVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsU0FBSzNILE1BQUwsR0FBY0ksbURBQUEsRUFBZDtBQUNIOztBQVBMO0FBQUE7QUFBQSxXQVFJLHFCQUFZO0FBQ1IsVUFBTWtDLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBQW5CO0FBQ0EsV0FBS3ZDLE1BQUwsQ0FBWXRCLENBQVosR0FBZ0I0RCxVQUFoQjtBQUNBLFdBQUt0QyxNQUFMLENBQVk0SCxDQUFaLEdBQWdCdEYsVUFBaEI7QUFDQSxhQUFPLEtBQUt0QyxNQUFaO0FBQ0g7QUFiTDtBQUFBO0FBQUEsV0FjSSxvQkFBVztBQUNQLGFBQU8sS0FBSzJILFVBQUwsR0FBa0JFLE1BQU0sQ0FBQ0MsVUFBekIsR0FBc0MsS0FBS2pHLEtBQWxEO0FBQ0g7QUFoQkw7QUFBQTtBQUFBLFdBaUJJLHFCQUFZO0FBQ1IsYUFBTyxLQUFLOEYsVUFBTCxHQUFrQkUsTUFBTSxDQUFDRSxXQUF6QixHQUF1QyxLQUFLakcsTUFBbkQ7QUFDSDtBQW5CTDtBQUFBO0FBQUEsV0FvQkkseUJBQWdCO0FBQUE7O0FBQ1osYUFBTyxLQUFLUSxVQUFMLEdBQWtCLENBQWxCLEdBQXNCLEtBQUtBLFVBQTNCLDRCQUF3Q3VGLE1BQU0sQ0FBQ0csZ0JBQS9DLHlFQUFtRSxDQUExRTtBQUNIO0FBdEJMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RPLElBQU1wRCxNQUFiO0FBQ0ksa0JBQVluRCxNQUFaLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2hCLFNBQUt3RyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FBWjs7QUFDQSxTQUFLdEUsTUFBTCxHQUFjLFVBQUNzRSxJQUFELEVBQVU7QUFDcEIsVUFBSSxLQUFJLENBQUNELE1BQVQsRUFBaUI7QUFDYjtBQUNIOztBQUNELFdBQUksQ0FBQ3pHLE1BQUwsQ0FBWXFDLE9BQVosQ0FBb0JELE1BQXBCLENBQTJCc0UsSUFBM0I7O0FBQ0EsV0FBSSxDQUFDMUcsTUFBTCxDQUFZK0IsUUFBWixDQUFxQkQsTUFBckI7QUFDSCxLQU5EOztBQU9BLFNBQUs2RSxXQUFMLEdBQW1CLFlBQU07QUFDckIsVUFBTUMsV0FBVyxHQUFHckIsV0FBVyxDQUFDQyxHQUFaLEVBQXBCO0FBQ0EsVUFBTXFCLFNBQVMsR0FBRyxDQUFDRCxXQUFXLEdBQUcsS0FBSSxDQUFDRixJQUFwQixJQUE0QixJQUE5QztBQUNBLFdBQUksQ0FBQ0EsSUFBTCxHQUFZRSxXQUFaOztBQUNBLFdBQUksQ0FBQ3hFLE1BQUwsQ0FBWXlFLFNBQVo7O0FBQ0EsV0FBSSxDQUFDQyxlQUFMO0FBQ0gsS0FORDs7QUFPQSxTQUFLOUcsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7O0FBcEJMO0FBQUE7QUFBQSxTQXFCSSxlQUFlO0FBQ1gsYUFBTyxLQUFLeUcsTUFBWjtBQUNIO0FBdkJMO0FBQUE7QUFBQSxXQXdCSSxnQkFBTztBQUNILFVBQUksS0FBS0EsTUFBVCxFQUFpQjtBQUNiLGFBQUtDLElBQUwsR0FBWW5CLFdBQVcsQ0FBQ0MsR0FBWixFQUFaO0FBQ0EsYUFBS2lCLE1BQUwsR0FBYyxLQUFkO0FBQ0EsYUFBS0ssZUFBTDtBQUNIO0FBQ0o7QUE5Qkw7QUFBQTtBQUFBLFdBK0JJLGlCQUFRO0FBQ0osV0FBS0wsTUFBTCxHQUFjLEtBQWQ7QUFDSDtBQWpDTDtBQUFBO0FBQUEsV0FrQ0ksMkJBQWtCO0FBQ2RNLDJCQUFxQixDQUFDLEtBQUtKLFdBQU4sQ0FBckI7QUFDSDtBQXBDTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ08sSUFBTTNELE9BQWI7QUFBQTs7QUFBQTs7QUFDSSxxQkFBYztBQUFBOztBQUFBOztBQUNWLCtCQUFTekQsU0FBVDtBQUNBLFVBQUt5QyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQUswRSxJQUFMLEdBQVksQ0FBWjtBQUNBLFVBQUtyQixXQUFMLEdBQW1CLENBQW5CO0FBQ0EsVUFBS3RCLE9BQUwsR0FBZSxJQUFmO0FBTFU7QUFNYjs7QUFQTDtBQUFBO0FBQUEsV0FRSSxnQkFBTzJDLElBQVAsRUFBYTtBQUNULFVBQUksQ0FBQyxLQUFLM0MsT0FBVixFQUFtQjtBQUNmO0FBQ0g7O0FBSFEsVUFJRGMsSUFKQyxHQUlRLEtBQUs3RSxNQUpiLENBSUQ2RSxJQUpDOztBQUtULFVBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1A7QUFDSDs7QUFDRCxXQUFLN0MsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLMEUsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBTXBCLFNBQVMsR0FBR0MsV0FBVyxDQUFDQyxHQUFaLEVBQWxCO0FBQ0EsV0FBS2xELGVBQUwsQ0FBcUJ1QyxJQUFyQjtBQUNBLFdBQUtRLFdBQUwsR0FBbUJFLFdBQVcsQ0FBQ0MsR0FBWixLQUFvQkYsU0FBdkM7QUFDSDtBQXJCTDtBQUFBO0FBQUEsV0FzQkkseUJBQWdCckQsU0FBaEIsRUFBMkI7QUFDdkIsVUFBSSxLQUFLRCxLQUFMLEdBQWEsS0FBS2hDLE1BQUwsQ0FBWWdDLEtBQTdCLEVBQW9DO0FBQ2hDO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDZ0YsZ0VBQUEsQ0FBaUIvRSxTQUFqQixDQUFMLEVBQWtDO0FBQzlCO0FBQ0g7O0FBQ0QsV0FBS2dGLGdCQUFMLENBQXNCaEYsU0FBdEI7QUFDQStFLG1FQUFBLENBQWMvRSxTQUFkLEVBQXlCLEtBQUt5RSxJQUE5QjtBQUNBLFVBQU14QixPQUFPLEdBQUcsS0FBS2xGLE1BQUwsQ0FBWTRDLFVBQVosQ0FBdUJSLE1BQXZCLENBQThCa0MsR0FBOUIsQ0FBa0NyQyxTQUFTLENBQUNQLElBQTVDLENBQWhCOztBQUNBLFVBQUl3RCxPQUFKLEVBQWE7QUFDVEEsZUFBTyxDQUFDakQsU0FBRCxFQUFZLEtBQUtqQyxNQUFqQixDQUFQO0FBQ0g7QUFDSjtBQW5DTDtBQUFBO0FBQUEsV0FvQ0ksMEJBQWlCaUMsU0FBakIsRUFBNEI7QUFBQTs7QUFDeEIsV0FBS2pDLE1BQUwsQ0FBWTRDLFVBQVosQ0FBdUJjLFVBQXZCLENBQWtDd0QsT0FBbEMsQ0FBMEMsVUFBQ2hDLE9BQUQsRUFBVWlDLFFBQVYsRUFBdUI7QUFDN0QsWUFBSWxGLFNBQVMsQ0FBQ2tGLFFBQUQsQ0FBYixFQUF5QjtBQUNyQmpDLGlCQUFPLENBQUNqRCxTQUFELEVBQVksTUFBSSxDQUFDakMsTUFBakIsQ0FBUDtBQUNIO0FBQ0osT0FKRDtBQUtIO0FBMUNMOztBQUFBO0FBQUEsRUFBNkJ5RCx3REFBN0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pCQSxTQUFTMkQsYUFBVCxDQUF1QnBILE1BQXZCLEVBQStCcUgsS0FBL0IsRUFBc0MzRixJQUF0QyxFQUE0QztBQUFBLE1BQ2hDbEMsSUFEZ0MsR0FDdkJRLE1BQU0sQ0FBQ3NELFFBRGdCLENBQ2hDOUQsSUFEZ0M7QUFFeEMsTUFBTThILFVBQVUsR0FBRzlILElBQUksQ0FBQytILHFCQUFMLEVBQW5CO0FBQ0EsTUFBTTlJLENBQUMsR0FBRzRJLEtBQUssQ0FBQ0csT0FBTixHQUFnQkYsVUFBVSxDQUFDRyxJQUEzQixHQUFrQ2pJLElBQUksQ0FBQ2tJLFVBQWpEO0FBQ0EsTUFBTWhKLENBQUMsR0FBRzJJLEtBQUssQ0FBQ00sT0FBTixHQUFnQkwsVUFBVSxDQUFDTSxHQUEzQixHQUFpQ3BJLElBQUksQ0FBQ3FJLFNBQWhEO0FBQ0E3SCxRQUFNLENBQUN3QyxhQUFQLENBQXFCc0YsUUFBckIsQ0FBOEJwRyxJQUE5QixFQUFvQ2pELENBQXBDLEVBQXVDQyxDQUF2QyxFQUEwQyxDQUExQztBQUNBMkksT0FBSyxDQUFDVSxjQUFOO0FBQ0g7O0FBQ00sSUFBSUMsY0FBSjs7QUFDUCxDQUFDLFVBQVVBLGNBQVYsRUFBMEI7QUFDdkIsV0FBU3JGLElBQVQsQ0FBYzNDLE1BQWQsRUFBc0I7QUFBQSxRQUNWUixJQURVLEdBQ0RRLE1BQU0sQ0FBQ3NELFFBRE4sQ0FDVjlELElBRFU7QUFFbEJBLFFBQUksQ0FBQ3lJLGdCQUFMLENBQXNCLFdBQXRCLEVBQW1DLFVBQUNaLEtBQUQsRUFBVztBQUMxQ0QsbUJBQWEsQ0FBQ3BILE1BQUQsRUFBU3FILEtBQVQsRUFBZ0IsYUFBaEIsQ0FBYjtBQUNILEtBRkQ7QUFHQTdILFFBQUksQ0FBQ3lJLGdCQUFMLENBQXNCLFNBQXRCLEVBQWlDLFVBQUNaLEtBQUQsRUFBVztBQUN4Q0QsbUJBQWEsQ0FBQ3BILE1BQUQsRUFBU3FILEtBQVQsRUFBZ0IsV0FBaEIsQ0FBYjtBQUNILEtBRkQ7QUFHQTdILFFBQUksQ0FBQ3lJLGdCQUFMLENBQXNCLFdBQXRCLEVBQW1DLFVBQUNaLEtBQUQsRUFBVztBQUMxQ0QsbUJBQWEsQ0FBQ3BILE1BQUQsRUFBU3FILEtBQVQsRUFBZ0IsYUFBaEIsQ0FBYjtBQUNILEtBRkQ7QUFHSDs7QUFDRFcsZ0JBQWMsQ0FBQ3JGLElBQWYsR0FBc0JBLElBQXRCO0FBQ0gsQ0FkRCxFQWNHcUYsY0FBYyxLQUFLQSxjQUFjLEdBQUcsRUFBdEIsQ0FkakIsRTs7Ozs7Ozs7Ozs7OztBQ1RPLElBQUloRCxPQUFKOztBQUNQLENBQUMsVUFBVUEsT0FBVixFQUFtQjtBQUNoQixXQUFTa0QsU0FBVCxDQUFtQmpHLFNBQW5CLEVBQThCO0FBQUE7O0FBQzFCLGlDQUFPQSxTQUFTLENBQUNrRyxPQUFqQixtRUFBNEIsSUFBNUI7QUFDSDs7QUFDRG5ELFNBQU8sQ0FBQ2tELFNBQVIsR0FBb0JBLFNBQXBCO0FBQ0gsQ0FMRCxFQUtHbEQsT0FBTyxLQUFLQSxPQUFPLEdBQUcsRUFBZixDQUxWLEU7Ozs7Ozs7Ozs7Ozs7QUNETyxJQUFJb0QsS0FBSjs7QUFDUCxDQUFDLFVBQVVBLEtBQVYsRUFBaUI7QUFDZCxXQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUJsSSxLQUFyQixFQUE0QjtBQUFBLFFBQ2hCbUksTUFEZ0IsR0FDTEQsS0FESyxDQUNoQkMsTUFEZ0I7O0FBRXhCLFFBQUlBLE1BQUosRUFBWTtBQUNSLGFBQU8sQ0FBQ0EsTUFBRCxHQUFVbkksS0FBakI7QUFDSDs7QUFDRCxXQUFPLENBQVA7QUFDSDs7QUFDRGdJLE9BQUssQ0FBQ0MsSUFBTixHQUFhQSxJQUFiOztBQUNBLFdBQVNHLElBQVQsQ0FBY0YsS0FBZCxFQUFxQmpJLE1BQXJCLEVBQTZCO0FBQUEsUUFDakJvSSxNQURpQixHQUNOSCxLQURNLENBQ2pCRyxNQURpQjs7QUFFekIsUUFBSUEsTUFBSixFQUFZO0FBQ1IsYUFBTyxDQUFDQSxNQUFELEdBQVVwSSxNQUFqQjtBQUNIOztBQUNELFdBQU8sQ0FBUDtBQUNIOztBQUNEK0gsT0FBSyxDQUFDSSxJQUFOLEdBQWFBLElBQWI7O0FBQ0EsV0FBU0UsU0FBVCxDQUFtQkosS0FBbkIsRUFBMEI7QUFBQSxRQUNkQyxNQURjLEdBQ0tELEtBREwsQ0FDZEMsTUFEYztBQUFBLFFBQ05FLE1BRE0sR0FDS0gsS0FETCxDQUNORyxNQURNO0FBRXRCLFdBQU8sQ0FBQyxDQUFDRixNQUFGLElBQVksQ0FBQyxDQUFDRSxNQUFyQjtBQUNIOztBQUNETCxPQUFLLENBQUNNLFNBQU4sR0FBa0JBLFNBQWxCO0FBQ0gsQ0F0QkQsRUFzQkdOLEtBQUssS0FBS0EsS0FBSyxHQUFHLEVBQWIsQ0F0QlIsRTs7Ozs7Ozs7Ozs7OztBQ0RPLElBQUluRCxPQUFKOztBQUNQLENBQUMsVUFBVUEsT0FBVixFQUFtQjtBQUNoQixXQUFTMEQsYUFBVCxDQUF1QkMsT0FBdkIsRUFBZ0M7QUFDNUIsV0FBTyxDQUFDLENBQUNBLE9BQU8sQ0FBQ3hELFdBQWpCO0FBQ0g7O0FBQ0RILFNBQU8sQ0FBQzBELGFBQVIsR0FBd0JBLGFBQXhCOztBQUNBLFdBQVNFLGdCQUFULENBQTBCRCxPQUExQixFQUFtQztBQUFBOztBQUMvQixvQ0FBT0EsT0FBTyxDQUFDRSxjQUFmLHlFQUFpQyxJQUFqQztBQUNIOztBQUNEN0QsU0FBTyxDQUFDNEQsZ0JBQVIsR0FBMkJBLGdCQUEzQjs7QUFDQSxXQUFTekIsYUFBVCxDQUF1QndCLE9BQXZCLEVBQWdDbEgsSUFBaEMsRUFBc0NqRCxDQUF0QyxFQUF5Q0MsQ0FBekMsRUFBNEN5RixFQUE1QyxFQUFnRDtBQUM1QyxRQUFNNEUsV0FBVyxlQUFRckgsSUFBSSxDQUFDc0gsTUFBTCxDQUFZLENBQVosRUFBZUMsV0FBZixFQUFSLFNBQXVDdkgsSUFBSSxDQUFDd0gsS0FBTCxDQUFXLENBQVgsQ0FBdkMsQ0FBakI7O0FBQ0EsUUFBSU4sT0FBTyxDQUFDRyxXQUFELENBQVgsRUFBMEI7QUFDdEIsVUFBTTFCLEtBQUssR0FBRztBQUNWM0YsWUFBSSxFQUFKQSxJQURVO0FBQ0pqRCxTQUFDLEVBQURBLENBREk7QUFDREMsU0FBQyxFQUFEQSxDQURDO0FBQ0V5RixVQUFFLEVBQUZBO0FBREYsT0FBZDtBQUdBeUUsYUFBTyxDQUFDRyxXQUFELENBQVAsQ0FBcUIxQixLQUFyQjtBQUNIO0FBQ0o7O0FBQ0RwQyxTQUFPLENBQUNtQyxhQUFSLEdBQXdCQSxhQUF4QjtBQUNILENBbkJELEVBbUJHbkMsT0FBTyxLQUFLQSxPQUFPLEdBQUcsRUFBZixDQW5CVixFOzs7Ozs7Ozs7Ozs7O0FDRE8sSUFBSWtFLE1BQUo7O0FBQ1AsQ0FBQyxVQUFVQSxNQUFWLEVBQWtCO0FBQ2YsV0FBU0MsV0FBVCxDQUFxQkMsTUFBckIsRUFBNkJySixNQUE3QixFQUFxQztBQUFBLFFBQ3pCc0osR0FEeUIsR0FDakJELE1BRGlCLENBQ3pCQyxHQUR5Qjs7QUFFakMsUUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixhQUFPLElBQVA7QUFDSDs7QUFDRCxXQUFPdEosTUFBTSxDQUFDd0QsU0FBUCxDQUFpQmMsR0FBakIsQ0FBcUJnRixHQUFyQixDQUFQO0FBQ0g7O0FBQ0RILFFBQU0sQ0FBQ0MsV0FBUCxHQUFxQkEsV0FBckI7O0FBQ0EsV0FBU0csUUFBVCxDQUFrQkYsTUFBbEIsRUFBMEJySixNQUExQixFQUFrQztBQUM5QixRQUFNK0YsUUFBUSxHQUFHcUQsV0FBVyxDQUFDQyxNQUFELEVBQVNySixNQUFULENBQTVCO0FBQ0EsV0FBTyxDQUFDLEVBQUMrRixRQUFELGFBQUNBLFFBQUQsZUFBQ0EsUUFBUSxDQUFFbkMsTUFBWCxDQUFSO0FBQ0g7O0FBQ0R1RixRQUFNLENBQUNJLFFBQVAsR0FBa0JBLFFBQWxCO0FBQ0gsQ0FkRCxFQWNHSixNQUFNLEtBQUtBLE1BQU0sR0FBRyxFQUFkLENBZFQsRTs7Ozs7Ozs7Ozs7OztBQ0RPLElBQUloRSxTQUFKOztBQUNQLENBQUMsVUFBVUEsU0FBVixFQUFxQjtBQUNsQixXQUFTTyxTQUFULENBQW1COEQsU0FBbkIsRUFBOEIvRyxNQUE5QixFQUFzQztBQUFBOztBQUFBLFFBQzFCbEUsTUFEMEIsR0FDZmlMLFNBRGUsQ0FDMUJqTCxNQUQwQjs7QUFFbEMsUUFBSUEsTUFBSixFQUFZO0FBQUE7O0FBQ1JrRSxZQUFNLENBQUN4RixDQUFQLGdCQUFXc0IsTUFBTSxDQUFDdEIsQ0FBbEIsaURBQXVCLENBQXZCO0FBQ0F3RixZQUFNLENBQUN6RixDQUFQLGdCQUFXdUIsTUFBTSxDQUFDdkIsQ0FBbEIsaURBQXVCLENBQXZCO0FBQ0F5RixZQUFNLENBQUNnSCxDQUFQLGdCQUFXbEwsTUFBTSxDQUFDa0wsQ0FBbEIsaURBQXVCLENBQXZCO0FBQ0FoSCxZQUFNLENBQUMwRCxDQUFQLGdCQUFXNUgsTUFBTSxDQUFDNEgsQ0FBbEIsaURBQXVCLENBQXZCO0FBQ0ExRCxZQUFNLENBQUM1RCxFQUFQLGlCQUFZTixNQUFNLENBQUNNLEVBQW5CLG1EQUF5QixDQUF6QjtBQUNBNEQsWUFBTSxDQUFDM0QsRUFBUCxpQkFBWVAsTUFBTSxDQUFDTyxFQUFuQixtREFBeUIsQ0FBekI7QUFDQTtBQUNIOztBQVZpQyxRQVcxQjRLLFFBWDBCLEdBV2JGLFNBWGEsQ0FXMUJFLFFBWDBCO0FBWWxDLFFBQU1DLE1BQU0sZ0NBQUdILFNBQVMsQ0FBQ0csTUFBYixpRUFBdUJILFNBQVMsQ0FBQ0ksS0FBakMsdUNBQTBDLENBQXREO0FBQ0EsUUFBTUMsTUFBTSxpQ0FBR0wsU0FBUyxDQUFDSyxNQUFiLGlFQUF1QkwsU0FBUyxDQUFDSSxLQUFqQyx5Q0FBMEMsQ0FBdEQ7QUFDQW5ILFVBQU0sQ0FBQzVELEVBQVAsbUJBQVkySyxTQUFTLENBQUMvSyxDQUF0Qix1REFBMkIsQ0FBM0I7QUFDQWdFLFVBQU0sQ0FBQzNELEVBQVAsbUJBQVkwSyxTQUFTLENBQUM5SyxDQUF0Qix1REFBMkIsQ0FBM0I7O0FBQ0EsUUFBSWdMLFFBQUosRUFBYztBQUNWLFVBQU1JLEdBQUcsR0FBRy9LLElBQUksQ0FBQytLLEdBQUwsQ0FBU0osUUFBVCxDQUFaO0FBQ0EsVUFBTUssR0FBRyxHQUFHaEwsSUFBSSxDQUFDZ0wsR0FBTCxDQUFTTCxRQUFULENBQVo7QUFDQWpILFlBQU0sQ0FBQ3hGLENBQVAsR0FBVzZNLEdBQUcsR0FBR0gsTUFBakI7QUFDQWxILFlBQU0sQ0FBQ3pGLENBQVAsR0FBVytNLEdBQUcsR0FBR0osTUFBakI7QUFDQWxILFlBQU0sQ0FBQ2dILENBQVAsR0FBVyxDQUFDTSxHQUFELEdBQU9GLE1BQWxCO0FBQ0FwSCxZQUFNLENBQUMwRCxDQUFQLEdBQVcyRCxHQUFHLEdBQUdELE1BQWpCO0FBQ0E7QUFDSDs7QUFDRHBILFVBQU0sQ0FBQ3hGLENBQVAsR0FBVzBNLE1BQVg7QUFDQWxILFVBQU0sQ0FBQ3pGLENBQVAsR0FBVyxDQUFYO0FBQ0F5RixVQUFNLENBQUNnSCxDQUFQLEdBQVcsQ0FBWDtBQUNBaEgsVUFBTSxDQUFDMEQsQ0FBUCxHQUFXMEQsTUFBWDtBQUNIOztBQUNEMUUsV0FBUyxDQUFDTyxTQUFWLEdBQXNCQSxTQUF0Qjs7QUFDQSxXQUFTc0UsaUJBQVQsQ0FBMkJSLFNBQTNCLEVBQXNDL0csTUFBdEMsRUFBOEM7QUFBQTs7QUFBQSxRQUNsQ3pFLGNBRGtDLEdBQ2Z3TCxTQURlLENBQ2xDeEwsY0FEa0M7O0FBRTFDLFFBQUlBLGNBQUosRUFBb0I7QUFBQTs7QUFDaEJ5RSxZQUFNLENBQUNoRixlQUFQLDRCQUF5Qk8sY0FBYyxDQUFDUCxlQUF4Qyx5RUFBMkQsQ0FBM0Q7QUFDQWdGLFlBQU0sQ0FBQ3RGLGFBQVAsNEJBQXVCYSxjQUFjLENBQUNiLGFBQXRDLHlFQUF1RCxDQUF2RDtBQUNBc0YsWUFBTSxDQUFDcEYsZUFBUCw0QkFBeUJXLGNBQWMsQ0FBQ1gsZUFBeEMseUVBQTJELENBQTNEO0FBQ0FvRixZQUFNLENBQUNsRixjQUFQLDRCQUF3QlMsY0FBYyxDQUFDVCxjQUF2Qyx5RUFBeUQsQ0FBekQ7QUFDQWtGLFlBQU0sQ0FBQy9FLFdBQVAsNkJBQXFCTSxjQUFjLENBQUNOLFdBQXBDLDJFQUFtRCxDQUFuRDtBQUNBK0UsWUFBTSxDQUFDckYsU0FBUCw0QkFBbUJZLGNBQWMsQ0FBQ1osU0FBbEMseUVBQStDLENBQS9DO0FBQ0FxRixZQUFNLENBQUNuRixXQUFQLDZCQUFxQlUsY0FBYyxDQUFDVixXQUFwQywyRUFBbUQsQ0FBbkQ7QUFDQW1GLFlBQU0sQ0FBQ2pGLFVBQVAsNEJBQW9CUSxjQUFjLENBQUNSLFVBQW5DLHlFQUFpRCxDQUFqRDtBQUNBO0FBQ0g7O0FBWnlDLFFBYWxDeU0sSUFia0MsR0FhekJULFNBYnlCLENBYWxDUyxJQWJrQzs7QUFjMUMsUUFBSUEsSUFBSixFQUFVO0FBQUE7O0FBQUEsd0JBQzJCQSxJQUQzQixDQUNFdE4sS0FERjtBQUFBLFVBQ0VBLEtBREYsNEJBQ1UsQ0FEVjtBQUFBLHdCQUMyQnNOLElBRDNCLENBQ2FDLEtBRGI7QUFBQSxVQUNhQSxLQURiLDRCQUNxQixDQURyQjtBQUVOLFVBQU1DLGFBQWEsR0FBRyxJQUFJRCxLQUExQjtBQUNBLFVBQU1wTixDQUFDLEdBQUlILEtBQUssSUFBSSxFQUFWLEdBQWdCLElBQTFCO0FBQ0EsVUFBTUksQ0FBQyxHQUFJSixLQUFLLElBQUksQ0FBVixHQUFlLElBQXpCO0FBQ0EsVUFBTUssQ0FBQyxHQUFHTCxLQUFLLEdBQUcsSUFBbEI7QUFDQThGLFlBQU0sQ0FBQ2hGLGVBQVAsdUJBQXlCK0wsU0FBUyxDQUFDNU0sS0FBbkMsK0RBQTRDLENBQTVDO0FBQ0E2RixZQUFNLENBQUN0RixhQUFQLEdBQXVCZ04sYUFBdkI7QUFDQTFILFlBQU0sQ0FBQ3BGLGVBQVAsR0FBeUI4TSxhQUF6QjtBQUNBMUgsWUFBTSxDQUFDbEYsY0FBUCxHQUF3QjRNLGFBQXhCO0FBQ0ExSCxZQUFNLENBQUMvRSxXQUFQLEdBQXFCLENBQXJCO0FBQ0ErRSxZQUFNLENBQUNyRixTQUFQLEdBQW1CTixDQUFDLEdBQUdvTixLQUF2QjtBQUNBekgsWUFBTSxDQUFDbkYsV0FBUCxHQUFxQlAsQ0FBQyxHQUFHbU4sS0FBekI7QUFDQXpILFlBQU0sQ0FBQ2pGLFVBQVAsR0FBb0JSLENBQUMsR0FBR2tOLEtBQXhCO0FBQ0E7QUFDSDs7QUFDRHpILFVBQU0sQ0FBQ2hGLGVBQVAsd0JBQXlCK0wsU0FBUyxDQUFDNU0sS0FBbkMsaUVBQTRDLENBQTVDO0FBQ0E2RixVQUFNLENBQUN0RixhQUFQLEdBQXVCLENBQXZCO0FBQ0FzRixVQUFNLENBQUNwRixlQUFQLEdBQXlCLENBQXpCO0FBQ0FvRixVQUFNLENBQUNsRixjQUFQLEdBQXdCLENBQXhCO0FBQ0FrRixVQUFNLENBQUMvRSxXQUFQLEdBQXFCLENBQXJCO0FBQ0ErRSxVQUFNLENBQUNyRixTQUFQLEdBQW1CLENBQW5CO0FBQ0FxRixVQUFNLENBQUNuRixXQUFQLEdBQXFCLENBQXJCO0FBQ0FtRixVQUFNLENBQUNqRixVQUFQLEdBQW9CLENBQXBCO0FBQ0g7O0FBQ0QySCxXQUFTLENBQUM2RSxpQkFBVixHQUE4QkEsaUJBQTlCO0FBQ0gsQ0F4RUQsRUF3RUc3RSxTQUFTLEtBQUtBLFNBQVMsR0FBRyxFQUFqQixDQXhFWixFOzs7Ozs7Ozs7Ozs7O0FDRE8sSUFBSTZCLE1BQUo7O0FBQ1AsQ0FBQyxVQUFVQSxNQUFWLEVBQWtCO0FBQ2YsV0FBU29ELFNBQVQsQ0FBbUJuSSxTQUFuQixFQUE4QjtBQUFBOztBQUMxQixpQ0FBT0EsU0FBUyxDQUFDOEIsT0FBakIsbUVBQTRCLElBQTVCO0FBQ0g7O0FBQ0RpRCxRQUFNLENBQUNvRCxTQUFQLEdBQW1CQSxTQUFuQjs7QUFDQSxXQUFTaEksTUFBVCxDQUFnQkgsU0FBaEIsRUFBMkJ5RSxJQUEzQixFQUFpQztBQUM3QixRQUFJekUsU0FBUyxDQUFDb0ksUUFBZCxFQUF3QjtBQUNwQnBJLGVBQVMsQ0FBQ29JLFFBQVYsQ0FBbUIzRCxJQUFuQjtBQUNIO0FBQ0o7O0FBQ0RNLFFBQU0sQ0FBQzVFLE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0gsQ0FYRCxFQVdHNEUsTUFBTSxLQUFLQSxNQUFNLEdBQUcsRUFBZCxDQVhULEU7Ozs7Ozs7Ozs7Ozs7QUNETyxJQUFJc0QsTUFBSjs7QUFDUCxDQUFDLFVBQVVBLE1BQVYsRUFBa0I7QUFDZixXQUFTQyxLQUFULEdBQWlCO0FBQ2IsV0FBTztBQUNIQyxVQUFJLEVBQUVDLE1BQU0sQ0FBQ0MsU0FEVjtBQUVIQyxVQUFJLEVBQUVGLE1BQU0sQ0FBQ0MsU0FGVjtBQUdIRSxVQUFJLEVBQUVILE1BQU0sQ0FBQ0ksU0FIVjtBQUlIQyxVQUFJLEVBQUVMLE1BQU0sQ0FBQ0k7QUFKVixLQUFQO0FBTUg7O0FBQ0RQLFFBQU0sQ0FBQ0MsS0FBUCxHQUFlQSxLQUFmOztBQUNBLFdBQVNRLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3RCQSxVQUFNLENBQUNSLElBQVAsR0FBY0MsTUFBTSxDQUFDQyxTQUFyQjtBQUNBTSxVQUFNLENBQUNMLElBQVAsR0FBY0YsTUFBTSxDQUFDQyxTQUFyQjtBQUNBTSxVQUFNLENBQUNKLElBQVAsR0FBY0gsTUFBTSxDQUFDSSxTQUFyQjtBQUNBRyxVQUFNLENBQUNGLElBQVAsR0FBY0wsTUFBTSxDQUFDSSxTQUFyQjtBQUNIOztBQUNEUCxRQUFNLENBQUNTLFFBQVAsR0FBa0JBLFFBQWxCOztBQUNBLFdBQVNFLE9BQVQsQ0FBaUJELE1BQWpCLEVBQXlCO0FBQ3JCLFdBQU9BLE1BQU0sQ0FBQ1IsSUFBUCxLQUFnQkMsTUFBTSxDQUFDQyxTQUF2QixJQUNBTSxNQUFNLENBQUNMLElBQVAsS0FBZ0JGLE1BQU0sQ0FBQ0MsU0FEdkIsSUFFQU0sTUFBTSxDQUFDSixJQUFQLEtBQWdCSCxNQUFNLENBQUNJLFNBRnZCLElBR0FHLE1BQU0sQ0FBQ0YsSUFBUCxLQUFnQkwsTUFBTSxDQUFDSSxTQUg5QjtBQUlIOztBQUNEUCxRQUFNLENBQUNXLE9BQVAsR0FBaUJBLE9BQWpCOztBQUNBLFdBQVNDLFdBQVQsQ0FBcUJGLE1BQXJCLEVBQTZCRyxTQUE3QixFQUF3QztBQUFBLFFBQzVCWCxJQUQ0QixHQUNBUSxNQURBLENBQzVCUixJQUQ0QjtBQUFBLFFBQ3RCRyxJQURzQixHQUNBSyxNQURBLENBQ3RCTCxJQURzQjtBQUFBLFFBQ2hCQyxJQURnQixHQUNBSSxNQURBLENBQ2hCSixJQURnQjtBQUFBLFFBQ1ZFLElBRFUsR0FDQUUsTUFEQSxDQUNWRixJQURVO0FBRXBDSyxhQUFTLENBQUMxTSxDQUFWLEdBQWMrTCxJQUFkO0FBQ0FXLGFBQVMsQ0FBQ3pNLENBQVYsR0FBY2lNLElBQWQ7QUFDQVEsYUFBUyxDQUFDL0ssS0FBVixHQUFrQndLLElBQUksR0FBR0osSUFBekI7QUFDQVcsYUFBUyxDQUFDOUssTUFBVixHQUFtQnlLLElBQUksR0FBR0gsSUFBMUI7QUFDSDs7QUFDREwsUUFBTSxDQUFDWSxXQUFQLEdBQXFCQSxXQUFyQjs7QUFDQSxXQUFTRSxLQUFULENBQWVKLE1BQWYsRUFBdUJ2TSxDQUF2QixFQUEwQjtBQUN0QixRQUFJdU0sTUFBTSxDQUFDUixJQUFQLEdBQWMvTCxDQUFsQixFQUFxQjtBQUNqQnVNLFlBQU0sQ0FBQ1IsSUFBUCxHQUFjL0wsQ0FBZDtBQUNILEtBRkQsTUFHSyxJQUFJdU0sTUFBTSxDQUFDSixJQUFQLEdBQWNuTSxDQUFsQixFQUFxQjtBQUN0QnVNLFlBQU0sQ0FBQ0osSUFBUCxHQUFjbk0sQ0FBZDtBQUNIO0FBQ0o7O0FBQ0Q2TCxRQUFNLENBQUNjLEtBQVAsR0FBZUEsS0FBZjs7QUFDQSxXQUFTQyxLQUFULENBQWVMLE1BQWYsRUFBdUJ0TSxDQUF2QixFQUEwQjtBQUN0QixRQUFJc00sTUFBTSxDQUFDTCxJQUFQLEdBQWNqTSxDQUFsQixFQUFxQjtBQUNqQnNNLFlBQU0sQ0FBQ0wsSUFBUCxHQUFjak0sQ0FBZDtBQUNILEtBRkQsTUFHSyxJQUFJc00sTUFBTSxDQUFDRixJQUFQLEdBQWNwTSxDQUFsQixFQUFxQjtBQUN0QnNNLFlBQU0sQ0FBQ0YsSUFBUCxHQUFjcE0sQ0FBZDtBQUNIO0FBQ0o7O0FBQ0Q0TCxRQUFNLENBQUNlLEtBQVAsR0FBZUEsS0FBZjs7QUFDQSxXQUFTQyxJQUFULENBQWNOLE1BQWQsRUFBc0J2TSxDQUF0QixFQUF5QkMsQ0FBekIsRUFBNEI7QUFDeEIsUUFBSXNNLE1BQU0sQ0FBQ1IsSUFBUCxHQUFjL0wsQ0FBbEIsRUFBcUI7QUFDakJ1TSxZQUFNLENBQUNSLElBQVAsR0FBYy9MLENBQWQ7QUFDSCxLQUZELE1BR0ssSUFBSXVNLE1BQU0sQ0FBQ0osSUFBUCxHQUFjbk0sQ0FBbEIsRUFBcUI7QUFDdEJ1TSxZQUFNLENBQUNKLElBQVAsR0FBY25NLENBQWQ7QUFDSDs7QUFDRCxRQUFJdU0sTUFBTSxDQUFDTCxJQUFQLEdBQWNqTSxDQUFsQixFQUFxQjtBQUNqQnNNLFlBQU0sQ0FBQ0wsSUFBUCxHQUFjak0sQ0FBZDtBQUNILEtBRkQsTUFHSyxJQUFJc00sTUFBTSxDQUFDRixJQUFQLEdBQWNwTSxDQUFsQixFQUFxQjtBQUN0QnNNLFlBQU0sQ0FBQ0YsSUFBUCxHQUFjcE0sQ0FBZDtBQUNIO0FBQ0o7O0FBQ0Q0TCxRQUFNLENBQUNnQixJQUFQLEdBQWNBLElBQWQ7O0FBQ0EsV0FBU0MsU0FBVCxDQUFtQlAsTUFBbkIsRUFBMkJRLEtBQTNCLEVBQWtDO0FBQUEsUUFDdEIvTSxDQURzQixHQUNiK00sS0FEYSxDQUN0Qi9NLENBRHNCO0FBQUEsUUFDbkJDLENBRG1CLEdBQ2I4TSxLQURhLENBQ25COU0sQ0FEbUI7O0FBRTlCLFFBQUlzTSxNQUFNLENBQUNSLElBQVAsR0FBYy9MLENBQWxCLEVBQXFCO0FBQ2pCdU0sWUFBTSxDQUFDUixJQUFQLEdBQWMvTCxDQUFkO0FBQ0gsS0FGRCxNQUdLLElBQUl1TSxNQUFNLENBQUNKLElBQVAsR0FBY25NLENBQWxCLEVBQXFCO0FBQ3RCdU0sWUFBTSxDQUFDSixJQUFQLEdBQWNuTSxDQUFkO0FBQ0g7O0FBQ0QsUUFBSXVNLE1BQU0sQ0FBQ0wsSUFBUCxHQUFjak0sQ0FBbEIsRUFBcUI7QUFDakJzTSxZQUFNLENBQUNMLElBQVAsR0FBY2pNLENBQWQ7QUFDSCxLQUZELE1BR0ssSUFBSXNNLE1BQU0sQ0FBQ0YsSUFBUCxHQUFjcE0sQ0FBbEIsRUFBcUI7QUFDdEJzTSxZQUFNLENBQUNGLElBQVAsR0FBY3BNLENBQWQ7QUFDSDtBQUNKOztBQUNENEwsUUFBTSxDQUFDaUIsU0FBUCxHQUFtQkEsU0FBbkI7QUFDSCxDQWpGRCxFQWlGR2pCLE1BQU0sS0FBS0EsTUFBTSxHQUFHLEVBQWQsQ0FqRlQsRTs7Ozs7Ozs7Ozs7OztBQ0RPLElBQUlwTixjQUFKOztBQUNQLENBQUMsVUFBVUEsY0FBVixFQUEwQjtBQUN2QixXQUFTcU4sS0FBVCxHQUFpQjtBQUNiLFdBQU87QUFDSDlNLHFCQUFlLEVBQUUsQ0FEZDtBQUVITixtQkFBYSxFQUFFLENBRlo7QUFHSEUscUJBQWUsRUFBRSxDQUhkO0FBSUhFLG9CQUFjLEVBQUUsQ0FKYjtBQUtIRyxpQkFBVyxFQUFFLENBTFY7QUFNSE4sZUFBUyxFQUFFLENBTlI7QUFPSEUsaUJBQVcsRUFBRSxDQVBWO0FBUUhFLGdCQUFVLEVBQUU7QUFSVCxLQUFQO0FBVUg7O0FBQ0ROLGdCQUFjLENBQUNxTixLQUFmLEdBQXVCQSxLQUF2Qjs7QUFDQSxXQUFTVSxPQUFULENBQWlCcE8sRUFBakIsRUFBcUI7QUFDakIsV0FBT0EsRUFBRSxDQUFDTSxhQUFILEtBQXFCLENBQXJCLElBQ0FOLEVBQUUsQ0FBQ1EsZUFBSCxLQUF1QixDQUR2QixJQUVBUixFQUFFLENBQUNVLGNBQUgsS0FBc0IsQ0FGdEIsSUFHQVYsRUFBRSxDQUFDWSxlQUFILEtBQXVCLENBSHZCLElBSUFaLEVBQUUsQ0FBQ08sU0FBSCxLQUFpQixDQUpqQixJQUtBUCxFQUFFLENBQUNTLFdBQUgsS0FBbUIsQ0FMbkIsSUFNQVQsRUFBRSxDQUFDVyxVQUFILEtBQWtCLENBTmxCLElBT0FYLEVBQUUsQ0FBQ2EsV0FBSCxLQUFtQixDQVAxQjtBQVFIOztBQUNEUixnQkFBYyxDQUFDK04sT0FBZixHQUF5QkEsT0FBekI7O0FBQ0EsV0FBU1EsZ0JBQVQsQ0FBMEI1TyxFQUExQixFQUE4QjtBQUMxQixXQUFPQSxFQUFFLENBQUNNLGFBQUgsS0FBcUIsQ0FBckIsSUFDQU4sRUFBRSxDQUFDUSxlQUFILEtBQXVCLENBRHZCLElBRUFSLEVBQUUsQ0FBQ1UsY0FBSCxLQUFzQixDQUZ0QixJQUdBVixFQUFFLENBQUNPLFNBQUgsS0FBaUIsQ0FIakIsSUFJQVAsRUFBRSxDQUFDUyxXQUFILEtBQW1CLENBSm5CLElBS0FULEVBQUUsQ0FBQ1csVUFBSCxLQUFrQixDQUxsQixJQU1BWCxFQUFFLENBQUNhLFdBQUgsS0FBbUIsQ0FOMUI7QUFPSDs7QUFDRFIsZ0JBQWMsQ0FBQ3VPLGdCQUFmLEdBQWtDQSxnQkFBbEM7O0FBQ0EsV0FBU1YsUUFBVCxDQUFrQmxPLEVBQWxCLEVBQXNCO0FBQ2xCQSxNQUFFLENBQUNNLGFBQUgsR0FBbUIsQ0FBbkI7QUFDQU4sTUFBRSxDQUFDUSxlQUFILEdBQXFCLENBQXJCO0FBQ0FSLE1BQUUsQ0FBQ1UsY0FBSCxHQUFvQixDQUFwQjtBQUNBVixNQUFFLENBQUNZLGVBQUgsR0FBcUIsQ0FBckI7QUFDQVosTUFBRSxDQUFDTyxTQUFILEdBQWUsQ0FBZjtBQUNBUCxNQUFFLENBQUNTLFdBQUgsR0FBaUIsQ0FBakI7QUFDQVQsTUFBRSxDQUFDVyxVQUFILEdBQWdCLENBQWhCO0FBQ0FYLE1BQUUsQ0FBQ2EsV0FBSCxHQUFpQixDQUFqQjtBQUNIOztBQUNEUixnQkFBYyxDQUFDNk4sUUFBZixHQUEwQkEsUUFBMUI7O0FBQ0EsV0FBU1csSUFBVCxDQUFjQyxJQUFkLEVBQW9CQyxFQUFwQixFQUF3QjtBQUNwQkEsTUFBRSxDQUFDbk8sZUFBSCxHQUFxQmtPLElBQUksQ0FBQ2xPLGVBQTFCO0FBQ0FtTyxNQUFFLENBQUN6TyxhQUFILEdBQW1Cd08sSUFBSSxDQUFDeE8sYUFBeEI7QUFDQXlPLE1BQUUsQ0FBQ3ZPLGVBQUgsR0FBcUJzTyxJQUFJLENBQUN0TyxlQUExQjtBQUNBdU8sTUFBRSxDQUFDck8sY0FBSCxHQUFvQm9PLElBQUksQ0FBQ3BPLGNBQXpCO0FBQ0FxTyxNQUFFLENBQUNsTyxXQUFILEdBQWlCaU8sSUFBSSxDQUFDak8sV0FBdEI7QUFDQWtPLE1BQUUsQ0FBQ3hPLFNBQUgsR0FBZXVPLElBQUksQ0FBQ3ZPLFNBQXBCO0FBQ0F3TyxNQUFFLENBQUN0TyxXQUFILEdBQWlCcU8sSUFBSSxDQUFDck8sV0FBdEI7QUFDQXNPLE1BQUUsQ0FBQ3BPLFVBQUgsR0FBZ0JtTyxJQUFJLENBQUNuTyxVQUFyQjtBQUNIOztBQUNETixnQkFBYyxDQUFDd08sSUFBZixHQUFzQkEsSUFBdEI7O0FBQ0EsV0FBU0csTUFBVCxDQUFnQkMsR0FBaEIsRUFBcUJDLEdBQXJCLEVBQTBCdEosTUFBMUIsRUFBa0M7QUFDOUIsUUFBTWhGLGVBQWUsR0FBR3FPLEdBQUcsQ0FBQ3JPLGVBQUosR0FBc0JzTyxHQUFHLENBQUN0TyxlQUFsRDtBQUNBLFFBQU1OLGFBQWEsR0FBRzJPLEdBQUcsQ0FBQzNPLGFBQUosR0FBb0I0TyxHQUFHLENBQUM1TyxhQUE5QztBQUNBLFFBQU1FLGVBQWUsR0FBR3lPLEdBQUcsQ0FBQ3pPLGVBQUosR0FBc0IwTyxHQUFHLENBQUMxTyxlQUFsRDtBQUNBLFFBQU1FLGNBQWMsR0FBR3VPLEdBQUcsQ0FBQ3ZPLGNBQUosR0FBcUJ3TyxHQUFHLENBQUN4TyxjQUFoRDtBQUNBLFFBQU1HLFdBQVcsR0FBR29PLEdBQUcsQ0FBQ3JPLGVBQUosR0FBc0JzTyxHQUFHLENBQUNyTyxXQUExQixHQUF3Q3FPLEdBQUcsQ0FBQ3JPLFdBQWhFO0FBQ0EsUUFBTU4sU0FBUyxHQUFHME8sR0FBRyxDQUFDM08sYUFBSixHQUFvQjRPLEdBQUcsQ0FBQzNPLFNBQXhCLEdBQW9DMk8sR0FBRyxDQUFDM08sU0FBMUQ7QUFDQSxRQUFNRSxXQUFXLEdBQUd3TyxHQUFHLENBQUN6TyxlQUFKLEdBQXNCME8sR0FBRyxDQUFDek8sV0FBMUIsR0FBd0N5TyxHQUFHLENBQUN6TyxXQUFoRTtBQUNBLFFBQU1FLFVBQVUsR0FBR3NPLEdBQUcsQ0FBQ3ZPLGNBQUosR0FBcUJ3TyxHQUFHLENBQUN2TyxVQUF6QixHQUFzQ3VPLEdBQUcsQ0FBQ3ZPLFVBQTdEO0FBQ0FpRixVQUFNLENBQUNoRixlQUFQLEdBQXlCQSxlQUF6QjtBQUNBZ0YsVUFBTSxDQUFDdEYsYUFBUCxHQUF1QkEsYUFBdkI7QUFDQXNGLFVBQU0sQ0FBQ3BGLGVBQVAsR0FBeUJBLGVBQXpCO0FBQ0FvRixVQUFNLENBQUNsRixjQUFQLEdBQXdCQSxjQUF4QjtBQUNBa0YsVUFBTSxDQUFDL0UsV0FBUCxHQUFxQkEsV0FBckI7QUFDQStFLFVBQU0sQ0FBQ3JGLFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0FxRixVQUFNLENBQUNuRixXQUFQLEdBQXFCQSxXQUFyQjtBQUNBbUYsVUFBTSxDQUFDakYsVUFBUCxHQUFvQkEsVUFBcEI7QUFDSDs7QUFDRE4sZ0JBQWMsQ0FBQzJPLE1BQWYsR0FBd0JBLE1BQXhCO0FBQ0gsQ0E1RUQsRUE0RUczTyxjQUFjLEtBQUtBLGNBQWMsR0FBRyxFQUF0QixDQTVFakIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hPLElBQUl5QixNQUFKOztBQUNQLENBQUMsVUFBVUEsTUFBVixFQUFrQjtBQUNmLFdBQVM0TCxLQUFULEdBQWlCO0FBQ2IsV0FBTztBQUNIdE4sT0FBQyxFQUFFLENBREE7QUFFSEQsT0FBQyxFQUFFLENBRkE7QUFHSHlNLE9BQUMsRUFBRSxDQUhBO0FBSUh0RCxPQUFDLEVBQUUsQ0FKQTtBQUtIdEgsUUFBRSxFQUFFLENBTEQ7QUFNSEMsUUFBRSxFQUFFO0FBTkQsS0FBUDtBQVFIOztBQUNESCxRQUFNLENBQUM0TCxLQUFQLEdBQWVBLEtBQWY7O0FBQ0EsV0FBU1UsT0FBVCxDQUFpQjFNLE1BQWpCLEVBQXlCO0FBQ3JCLFdBQU9BLE1BQU0sQ0FBQ3RCLENBQVAsS0FBYSxDQUFiLElBQ0FzQixNQUFNLENBQUN2QixDQUFQLEtBQWEsQ0FEYixJQUVBdUIsTUFBTSxDQUFDa0wsQ0FBUCxLQUFhLENBRmIsSUFHQWxMLE1BQU0sQ0FBQzRILENBQVAsS0FBYSxDQUhiLElBSUE1SCxNQUFNLENBQUNNLEVBQVAsS0FBYyxDQUpkLElBS0FOLE1BQU0sQ0FBQ08sRUFBUCxLQUFjLENBTHJCO0FBTUg7O0FBQ0RILFFBQU0sQ0FBQ3NNLE9BQVAsR0FBaUJBLE9BQWpCOztBQUNBLFdBQVNGLFFBQVQsQ0FBa0J4TSxNQUFsQixFQUEwQjtBQUN0QkEsVUFBTSxDQUFDdEIsQ0FBUCxHQUFXLENBQVg7QUFDQXNCLFVBQU0sQ0FBQ3ZCLENBQVAsR0FBVyxDQUFYO0FBQ0F1QixVQUFNLENBQUNrTCxDQUFQLEdBQVcsQ0FBWDtBQUNBbEwsVUFBTSxDQUFDNEgsQ0FBUCxHQUFXLENBQVg7QUFDQTVILFVBQU0sQ0FBQ00sRUFBUCxHQUFZLENBQVo7QUFDQU4sVUFBTSxDQUFDTyxFQUFQLEdBQVksQ0FBWjtBQUNIOztBQUNESCxRQUFNLENBQUNvTSxRQUFQLEdBQWtCQSxRQUFsQjs7QUFDQSxXQUFTVyxJQUFULENBQWNDLElBQWQsRUFBb0JDLEVBQXBCLEVBQXdCO0FBQ3BCQSxNQUFFLENBQUMzTyxDQUFILEdBQU8wTyxJQUFJLENBQUMxTyxDQUFaO0FBQ0EyTyxNQUFFLENBQUM1TyxDQUFILEdBQU8yTyxJQUFJLENBQUMzTyxDQUFaO0FBQ0E0TyxNQUFFLENBQUNuQyxDQUFILEdBQU9rQyxJQUFJLENBQUNsQyxDQUFaO0FBQ0FtQyxNQUFFLENBQUN6RixDQUFILEdBQU93RixJQUFJLENBQUN4RixDQUFaO0FBQ0F5RixNQUFFLENBQUMvTSxFQUFILEdBQVE4TSxJQUFJLENBQUM5TSxFQUFiO0FBQ0ErTSxNQUFFLENBQUM5TSxFQUFILEdBQVE2TSxJQUFJLENBQUM3TSxFQUFiO0FBQ0g7O0FBQ0RILFFBQU0sQ0FBQytNLElBQVAsR0FBY0EsSUFBZDs7QUFDQSxXQUFTRyxNQUFULENBQWdCRyxPQUFoQixFQUF5QkMsT0FBekIsRUFBa0N4SixNQUFsQyxFQUEwQztBQUN0QyxRQUFNeEYsQ0FBQyxHQUFHZ1AsT0FBTyxDQUFDaFAsQ0FBUixHQUFZK08sT0FBTyxDQUFDL08sQ0FBcEIsR0FBd0JnUCxPQUFPLENBQUNqUCxDQUFSLEdBQVlnUCxPQUFPLENBQUN2QyxDQUF0RDtBQUNBLFFBQU16TSxDQUFDLEdBQUdpUCxPQUFPLENBQUNoUCxDQUFSLEdBQVkrTyxPQUFPLENBQUNoUCxDQUFwQixHQUF3QmlQLE9BQU8sQ0FBQ2pQLENBQVIsR0FBWWdQLE9BQU8sQ0FBQzdGLENBQXREO0FBQ0EsUUFBTXNELENBQUMsR0FBR3dDLE9BQU8sQ0FBQ3hDLENBQVIsR0FBWXVDLE9BQU8sQ0FBQy9PLENBQXBCLEdBQXdCZ1AsT0FBTyxDQUFDOUYsQ0FBUixHQUFZNkYsT0FBTyxDQUFDdkMsQ0FBdEQ7QUFDQSxRQUFNdEQsQ0FBQyxHQUFHOEYsT0FBTyxDQUFDeEMsQ0FBUixHQUFZdUMsT0FBTyxDQUFDaFAsQ0FBcEIsR0FBd0JpUCxPQUFPLENBQUM5RixDQUFSLEdBQVk2RixPQUFPLENBQUM3RixDQUF0RDtBQUNBLFFBQU10SCxFQUFFLEdBQUdvTixPQUFPLENBQUNwTixFQUFSLEdBQWFtTixPQUFPLENBQUMvTyxDQUFyQixHQUF5QmdQLE9BQU8sQ0FBQ25OLEVBQVIsR0FBYWtOLE9BQU8sQ0FBQ3ZDLENBQTlDLEdBQWtEdUMsT0FBTyxDQUFDbk4sRUFBckU7QUFDQSxRQUFNQyxFQUFFLEdBQUdtTixPQUFPLENBQUNwTixFQUFSLEdBQWFtTixPQUFPLENBQUNoUCxDQUFyQixHQUF5QmlQLE9BQU8sQ0FBQ25OLEVBQVIsR0FBYWtOLE9BQU8sQ0FBQzdGLENBQTlDLEdBQWtENkYsT0FBTyxDQUFDbE4sRUFBckU7QUFDQTJELFVBQU0sQ0FBQ3hGLENBQVAsR0FBV0EsQ0FBWDtBQUNBd0YsVUFBTSxDQUFDekYsQ0FBUCxHQUFXQSxDQUFYO0FBQ0F5RixVQUFNLENBQUNnSCxDQUFQLEdBQVdBLENBQVg7QUFDQWhILFVBQU0sQ0FBQzBELENBQVAsR0FBV0EsQ0FBWDtBQUNBMUQsVUFBTSxDQUFDNUQsRUFBUCxHQUFZQSxFQUFaO0FBQ0E0RCxVQUFNLENBQUMzRCxFQUFQLEdBQVlBLEVBQVo7QUFDSDs7QUFDREgsUUFBTSxDQUFDa04sTUFBUCxHQUFnQkEsTUFBaEI7O0FBQ0EsV0FBU0ssY0FBVCxDQUF3QjNOLE1BQXhCLEVBQWdDO0FBQzVCLFdBQU9BLE1BQU0sQ0FBQ3RCLENBQVAsR0FBV3NCLE1BQU0sQ0FBQzRILENBQWxCLEdBQXNCNUgsTUFBTSxDQUFDdkIsQ0FBUCxHQUFXdUIsTUFBTSxDQUFDa0wsQ0FBL0M7QUFDSDs7QUFDRDlLLFFBQU0sQ0FBQ3VOLGNBQVAsR0FBd0JBLGNBQXhCOztBQUNBLFdBQVNDLE1BQVQsQ0FBZ0I1TixNQUFoQixFQUF3QmtFLE1BQXhCLEVBQWdDO0FBQzVCLFFBQUkySixXQUFXLEdBQUdGLGNBQWMsQ0FBQzNOLE1BQUQsQ0FBaEM7O0FBQ0EsUUFBSTZOLFdBQVcsS0FBSyxDQUFwQixFQUF1QjtBQUNuQjNKLFlBQU0sQ0FBQ3hGLENBQVAsR0FBVyxDQUFYO0FBQ0F3RixZQUFNLENBQUN6RixDQUFQLEdBQVcsQ0FBWDtBQUNBeUYsWUFBTSxDQUFDZ0gsQ0FBUCxHQUFXLENBQVg7QUFDQWhILFlBQU0sQ0FBQzBELENBQVAsR0FBVyxDQUFYO0FBQ0ExRCxZQUFNLENBQUM1RCxFQUFQLEdBQVksQ0FBQ04sTUFBTSxDQUFDTSxFQUFwQjtBQUNBNEQsWUFBTSxDQUFDM0QsRUFBUCxHQUFZLENBQUNQLE1BQU0sQ0FBQ08sRUFBcEI7QUFDSCxLQVBELE1BUUs7QUFDRHNOLGlCQUFXLEdBQUcsTUFBTUEsV0FBcEI7QUFDQTNKLFlBQU0sQ0FBQ3hGLENBQVAsR0FBV3NCLE1BQU0sQ0FBQ3RCLENBQVAsR0FBV21QLFdBQXRCO0FBQ0EzSixZQUFNLENBQUN6RixDQUFQLEdBQVcsQ0FBQ3VCLE1BQU0sQ0FBQ3ZCLENBQVIsR0FBWW9QLFdBQXZCO0FBQ0EzSixZQUFNLENBQUNnSCxDQUFQLEdBQVcsQ0FBQ2xMLE1BQU0sQ0FBQ2tMLENBQVIsR0FBWTJDLFdBQXZCO0FBQ0EzSixZQUFNLENBQUMwRCxDQUFQLEdBQVc1SCxNQUFNLENBQUM0SCxDQUFQLEdBQVdpRyxXQUF0QjtBQUNBM0osWUFBTSxDQUFDNUQsRUFBUCxHQUFZLENBQUM0RCxNQUFNLENBQUN4RixDQUFSLEdBQVlzQixNQUFNLENBQUNNLEVBQW5CLEdBQXdCNEQsTUFBTSxDQUFDZ0gsQ0FBUCxHQUFXbEwsTUFBTSxDQUFDTyxFQUF0RDtBQUNBMkQsWUFBTSxDQUFDM0QsRUFBUCxHQUFZLENBQUMyRCxNQUFNLENBQUN6RixDQUFSLEdBQVl1QixNQUFNLENBQUNNLEVBQW5CLEdBQXdCNEQsTUFBTSxDQUFDMEQsQ0FBUCxHQUFXNUgsTUFBTSxDQUFDTyxFQUF0RDtBQUNIO0FBQ0o7O0FBQ0RILFFBQU0sQ0FBQ3dOLE1BQVAsR0FBZ0JBLE1BQWhCOztBQUNBLFdBQVNFLGNBQVQsQ0FBd0I5TixNQUF4QixFQUFnQ2lOLEtBQWhDLEVBQXVDL0ksTUFBdkMsRUFBK0M7QUFBQSxRQUNuQ2hFLENBRG1DLEdBQzFCK00sS0FEMEIsQ0FDbkMvTSxDQURtQztBQUFBLFFBQ2hDQyxDQURnQyxHQUMxQjhNLEtBRDBCLENBQ2hDOU0sQ0FEZ0M7QUFFM0MrRCxVQUFNLENBQUNoRSxDQUFQLEdBQVdBLENBQUMsR0FBR0YsTUFBTSxDQUFDdEIsQ0FBWCxHQUFleUIsQ0FBQyxHQUFHSCxNQUFNLENBQUNrTCxDQUExQixHQUE4QmxMLE1BQU0sQ0FBQ00sRUFBaEQ7QUFDQTRELFVBQU0sQ0FBQy9ELENBQVAsR0FBV0QsQ0FBQyxHQUFHRixNQUFNLENBQUN2QixDQUFYLEdBQWUwQixDQUFDLEdBQUdILE1BQU0sQ0FBQzRILENBQTFCLEdBQThCNUgsTUFBTSxDQUFDTyxFQUFoRDtBQUNIOztBQUNESCxRQUFNLENBQUMwTixjQUFQLEdBQXdCQSxjQUF4Qjs7QUFDQSxXQUFTQyxtQkFBVCxDQUE2Qi9OLE1BQTdCLEVBQXFDaU4sS0FBckMsRUFBNEMvSSxNQUE1QyxFQUFvRDtBQUFBLFFBQ3hDaEUsQ0FEd0MsR0FDL0IrTSxLQUQrQixDQUN4Qy9NLENBRHdDO0FBQUEsUUFDckNDLENBRHFDLEdBQy9COE0sS0FEK0IsQ0FDckM5TSxDQURxQztBQUVoRCtELFVBQU0sQ0FBQ2hFLENBQVAsR0FBV0EsQ0FBQyxHQUFHRixNQUFNLENBQUN0QixDQUFYLEdBQWV5QixDQUFDLEdBQUdILE1BQU0sQ0FBQ2tMLENBQXJDO0FBQ0FoSCxVQUFNLENBQUMvRCxDQUFQLEdBQVdELENBQUMsR0FBR0YsTUFBTSxDQUFDdkIsQ0FBWCxHQUFlMEIsQ0FBQyxHQUFHSCxNQUFNLENBQUM0SCxDQUFyQztBQUNIOztBQUNEeEgsUUFBTSxDQUFDMk4sbUJBQVAsR0FBNkJBLG1CQUE3Qjs7QUFDQSxXQUFTQyxxQkFBVCxDQUErQmhPLE1BQS9CLEVBQXVDaU4sS0FBdkMsRUFBOEMvSSxNQUE5QyxFQUFzRDtBQUNsRCxRQUFJMkosV0FBVyxHQUFHRixjQUFjLENBQUMzTixNQUFELENBQWhDOztBQUNBLFFBQUk2TixXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFDbkIzSixZQUFNLENBQUNoRSxDQUFQLEdBQVcsQ0FBQ0YsTUFBTSxDQUFDTSxFQUFuQjtBQUNBNEQsWUFBTSxDQUFDL0QsQ0FBUCxHQUFXLENBQUNILE1BQU0sQ0FBQ08sRUFBbkI7QUFDSCxLQUhELE1BSUs7QUFDRHNOLGlCQUFXLEdBQUcsSUFBSUEsV0FBbEI7QUFEQyxVQUVPM04sQ0FGUCxHQUVnQitNLEtBRmhCLENBRU8vTSxDQUZQO0FBQUEsVUFFVUMsQ0FGVixHQUVnQjhNLEtBRmhCLENBRVU5TSxDQUZWO0FBR0QrRCxZQUFNLENBQUNoRSxDQUFQLEdBQVcyTixXQUFXLElBQUk3TixNQUFNLENBQUNrTCxDQUFQLElBQVlsTCxNQUFNLENBQUNPLEVBQVAsR0FBWUosQ0FBeEIsSUFBNkJILE1BQU0sQ0FBQzRILENBQVAsSUFBWTFILENBQUMsR0FBR0YsTUFBTSxDQUFDTSxFQUF2QixDQUFqQyxDQUF0QjtBQUNBNEQsWUFBTSxDQUFDL0QsQ0FBUCxHQUFXME4sV0FBVyxJQUFJN04sTUFBTSxDQUFDdEIsQ0FBUCxJQUFZeUIsQ0FBQyxHQUFHSCxNQUFNLENBQUNPLEVBQXZCLElBQTZCUCxNQUFNLENBQUN2QixDQUFQLElBQVl1QixNQUFNLENBQUNNLEVBQVAsR0FBWUosQ0FBeEIsQ0FBakMsQ0FBdEI7QUFDSDtBQUNKOztBQUNERSxRQUFNLENBQUM0TixxQkFBUCxHQUErQkEscUJBQS9COztBQUNBLFdBQVNDLGVBQVQsQ0FBeUJqTyxNQUF6QixFQUFpQ3lNLE1BQWpDLEVBQXlDdkksTUFBekMsRUFBaUQ7QUFBQSxRQUNyQ3hGLENBRHFDLEdBQ2JzQixNQURhLENBQ3JDdEIsQ0FEcUM7QUFBQSxRQUNsQ0QsQ0FEa0MsR0FDYnVCLE1BRGEsQ0FDbEN2QixDQURrQztBQUFBLFFBQy9CeU0sQ0FEK0IsR0FDYmxMLE1BRGEsQ0FDL0JrTCxDQUQrQjtBQUFBLFFBQzVCdEQsQ0FENEIsR0FDYjVILE1BRGEsQ0FDNUI0SCxDQUQ0QjtBQUFBLFFBQ3pCdEgsRUFEeUIsR0FDYk4sTUFEYSxDQUN6Qk0sRUFEeUI7QUFBQSxRQUNyQkMsRUFEcUIsR0FDYlAsTUFEYSxDQUNyQk8sRUFEcUI7QUFFN0MsUUFBTTJOLEVBQUUsR0FBR3pCLE1BQU0sQ0FBQ3ZNLENBQWxCO0FBQ0EsUUFBTWlPLEVBQUUsR0FBRzFCLE1BQU0sQ0FBQ3RNLENBQWxCO0FBQ0EsUUFBTWlPLEVBQUUsR0FBR0YsRUFBRSxHQUFHekIsTUFBTSxDQUFDNUssS0FBdkI7QUFDQSxRQUFNd00sRUFBRSxHQUFHRixFQUFFLEdBQUcxQixNQUFNLENBQUMzSyxNQUF2QjtBQUNBLFFBQU13TSxHQUFHLEdBQUdKLEVBQUUsR0FBR3hQLENBQUwsR0FBU3lQLEVBQUUsR0FBR2pELENBQWQsR0FBa0I1SyxFQUE5QjtBQUNBLFFBQU1pTyxHQUFHLEdBQUdMLEVBQUUsR0FBR3pQLENBQUwsR0FBUzBQLEVBQUUsR0FBR3ZHLENBQWQsR0FBa0JySCxFQUE5QjtBQUNBLFFBQU1pTyxHQUFHLEdBQUdKLEVBQUUsR0FBRzFQLENBQUwsR0FBU3lQLEVBQUUsR0FBR2pELENBQWQsR0FBa0I1SyxFQUE5QjtBQUNBLFFBQU1tTyxHQUFHLEdBQUdMLEVBQUUsR0FBRzNQLENBQUwsR0FBUzBQLEVBQUUsR0FBR3ZHLENBQWQsR0FBa0JySCxFQUE5QjtBQUNBLFFBQU1tTyxHQUFHLEdBQUdOLEVBQUUsR0FBRzFQLENBQUwsR0FBUzJQLEVBQUUsR0FBR25ELENBQWQsR0FBa0I1SyxFQUE5QjtBQUNBLFFBQU1xTyxHQUFHLEdBQUdQLEVBQUUsR0FBRzNQLENBQUwsR0FBUzRQLEVBQUUsR0FBR3pHLENBQWQsR0FBa0JySCxFQUE5QjtBQUNBLFFBQU1xTyxHQUFHLEdBQUdWLEVBQUUsR0FBR3hQLENBQUwsR0FBUzJQLEVBQUUsR0FBR25ELENBQWQsR0FBa0I1SyxFQUE5QjtBQUNBLFFBQU11TyxHQUFHLEdBQUdYLEVBQUUsR0FBR3pQLENBQUwsR0FBUzRQLEVBQUUsR0FBR3pHLENBQWQsR0FBa0JySCxFQUE5QjtBQUNBLFFBQUkySSxJQUFJLEdBQUdvRixHQUFYOztBQUNBLFFBQUlwRixJQUFJLEdBQUdzRixHQUFYLEVBQWdCO0FBQ1p0RixVQUFJLEdBQUdzRixHQUFQO0FBQ0g7O0FBQ0QsUUFBSXRGLElBQUksR0FBR3dGLEdBQVgsRUFBZ0I7QUFDWnhGLFVBQUksR0FBR3dGLEdBQVA7QUFDSDs7QUFDRCxRQUFJeEYsSUFBSSxHQUFHMEYsR0FBWCxFQUFnQjtBQUNaMUYsVUFBSSxHQUFHMEYsR0FBUDtBQUNIOztBQUNELFFBQUl2RixHQUFHLEdBQUdrRixHQUFWOztBQUNBLFFBQUlsRixHQUFHLEdBQUdvRixHQUFWLEVBQWU7QUFDWHBGLFNBQUcsR0FBR29GLEdBQU47QUFDSDs7QUFDRCxRQUFJcEYsR0FBRyxHQUFHc0YsR0FBVixFQUFlO0FBQ1h0RixTQUFHLEdBQUdzRixHQUFOO0FBQ0g7O0FBQ0QsUUFBSXRGLEdBQUcsR0FBR3dGLEdBQVYsRUFBZTtBQUNYeEYsU0FBRyxHQUFHd0YsR0FBTjtBQUNIOztBQUNELFFBQUlDLEtBQUssR0FBR1IsR0FBWjs7QUFDQSxRQUFJUSxLQUFLLEdBQUdOLEdBQVosRUFBaUI7QUFDYk0sV0FBSyxHQUFHTixHQUFSO0FBQ0g7O0FBQ0QsUUFBSU0sS0FBSyxHQUFHSixHQUFaLEVBQWlCO0FBQ2JJLFdBQUssR0FBR0osR0FBUjtBQUNIOztBQUNELFFBQUlJLEtBQUssR0FBR0YsR0FBWixFQUFpQjtBQUNiRSxXQUFLLEdBQUdGLEdBQVI7QUFDSDs7QUFDRCxRQUFJRyxNQUFNLEdBQUdSLEdBQWI7O0FBQ0EsUUFBSVEsTUFBTSxHQUFHTixHQUFiLEVBQWtCO0FBQ2RNLFlBQU0sR0FBR04sR0FBVDtBQUNIOztBQUNELFFBQUlNLE1BQU0sR0FBR0osR0FBYixFQUFrQjtBQUNkSSxZQUFNLEdBQUdKLEdBQVQ7QUFDSDs7QUFDRCxRQUFJSSxNQUFNLEdBQUdGLEdBQWIsRUFBa0I7QUFDZEUsWUFBTSxHQUFHRixHQUFUO0FBQ0g7O0FBQ0QzSyxVQUFNLENBQUNoRSxDQUFQLEdBQVdnSixJQUFYO0FBQ0FoRixVQUFNLENBQUMvRCxDQUFQLEdBQVdrSixHQUFYO0FBQ0FuRixVQUFNLENBQUNyQyxLQUFQLEdBQWVpTixLQUFLLEdBQUc1RixJQUF2QjtBQUNBaEYsVUFBTSxDQUFDcEMsTUFBUCxHQUFnQmlOLE1BQU0sR0FBRzFGLEdBQXpCO0FBQ0g7O0FBQ0RqSixRQUFNLENBQUM2TixlQUFQLEdBQXlCQSxlQUF6QjtBQUNILENBcktELEVBcUtHN04sTUFBTSxLQUFLQSxNQUFNLEdBQUcsRUFBZCxDQXJLVCxFOzs7Ozs7Ozs7Ozs7O0FDRE8sSUFBSXBDLEtBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxLQUFWLEVBQWlCO0FBQ2QsV0FBU2dPLEtBQVQsR0FBaUI7QUFDYixXQUFPO0FBQUU5TCxPQUFDLEVBQUUsQ0FBTDtBQUFRQyxPQUFDLEVBQUU7QUFBWCxLQUFQO0FBQ0g7O0FBQ0RuQyxPQUFLLENBQUNnTyxLQUFOLEdBQWNBLEtBQWQ7O0FBQ0EsV0FBU3JNLE1BQVQsQ0FBZ0JzTixLQUFoQixFQUF1QjtBQUFBLFFBQ1gvTSxDQURXLEdBQ0YrTSxLQURFLENBQ1gvTSxDQURXO0FBQUEsUUFDUkMsQ0FEUSxHQUNGOE0sS0FERSxDQUNSOU0sQ0FEUTtBQUVuQixXQUFPSyxJQUFJLENBQUN3TyxJQUFMLENBQVU5TyxDQUFDLEdBQUdBLENBQUosR0FBUUMsQ0FBQyxHQUFHQSxDQUF0QixDQUFQO0FBQ0g7O0FBQ0RuQyxPQUFLLENBQUMyQixNQUFOLEdBQWVBLE1BQWY7O0FBQ0EsV0FBU3NQLEtBQVQsQ0FBZWhDLEtBQWYsRUFBc0I7QUFDbEIsV0FBT3pNLElBQUksQ0FBQzBPLEtBQUwsQ0FBV2pDLEtBQUssQ0FBQzlNLENBQWpCLEVBQW9COE0sS0FBSyxDQUFDL00sQ0FBMUIsQ0FBUDtBQUNIOztBQUNEbEMsT0FBSyxDQUFDaVIsS0FBTixHQUFjQSxLQUFkOztBQUNBLFdBQVN2QyxPQUFULENBQWlCTyxLQUFqQixFQUF3QjtBQUNwQixXQUFPQSxLQUFLLENBQUMvTSxDQUFOLEtBQVksQ0FBWixJQUFpQitNLEtBQUssQ0FBQzlNLENBQU4sS0FBWSxDQUFwQztBQUNIOztBQUNEbkMsT0FBSyxDQUFDME8sT0FBTixHQUFnQkEsT0FBaEI7O0FBQ0EsV0FBU3lDLE1BQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCclIsTUFBeEIsRUFBZ0M7QUFDNUIsV0FBT3FSLE1BQU0sQ0FBQ2xQLENBQVAsS0FBYW5DLE1BQU0sQ0FBQ21DLENBQXBCLElBQXlCa1AsTUFBTSxDQUFDalAsQ0FBUCxLQUFhcEMsTUFBTSxDQUFDb0MsQ0FBcEQ7QUFDSDs7QUFDRG5DLE9BQUssQ0FBQ21SLE1BQU4sR0FBZUEsTUFBZjs7QUFDQSxXQUFTM0MsUUFBVCxDQUFrQlMsS0FBbEIsRUFBeUI7QUFDckJBLFNBQUssQ0FBQy9NLENBQU4sR0FBVSxDQUFWO0FBQ0ErTSxTQUFLLENBQUM5TSxDQUFOLEdBQVUsQ0FBVjtBQUNIOztBQUNEbkMsT0FBSyxDQUFDd08sUUFBTixHQUFpQkEsUUFBakI7O0FBQ0EsV0FBU1csSUFBVCxDQUFjckMsTUFBZCxFQUFzQnVFLE1BQXRCLEVBQThCO0FBQzFCQSxVQUFNLENBQUNuUCxDQUFQLEdBQVc0SyxNQUFNLENBQUM1SyxDQUFsQjtBQUNBbVAsVUFBTSxDQUFDbFAsQ0FBUCxHQUFXMkssTUFBTSxDQUFDM0ssQ0FBbEI7QUFDSDs7QUFDRG5DLE9BQUssQ0FBQ21QLElBQU4sR0FBYUEsSUFBYjs7QUFDQSxXQUFTbUMsU0FBVCxDQUFtQnJDLEtBQW5CLEVBQTBCc0MsU0FBMUIsRUFBcUM7QUFDakMsUUFBSTVELEtBQUssR0FBR2hNLE1BQU0sQ0FBQ3NOLEtBQUQsQ0FBbEI7O0FBQ0EsUUFBSXRCLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDWEEsV0FBSyxHQUFHNEQsU0FBUyxHQUFHNUQsS0FBcEI7QUFDQXNCLFdBQUssQ0FBQy9NLENBQU4sSUFBV3lMLEtBQVg7QUFDQXNCLFdBQUssQ0FBQzlNLENBQU4sSUFBV3dMLEtBQVg7QUFDSDtBQUNKOztBQUNEM04sT0FBSyxDQUFDc1IsU0FBTixHQUFrQkEsU0FBbEI7O0FBQ0EsV0FBU0UsUUFBVCxDQUFrQkosTUFBbEIsRUFBMEJyUixNQUExQixFQUFrQztBQUM5QixRQUFNMFIsRUFBRSxHQUFHTCxNQUFNLENBQUNsUCxDQUFQLEdBQVduQyxNQUFNLENBQUNtQyxDQUE3QjtBQUNBLFFBQU13UCxFQUFFLEdBQUdOLE1BQU0sQ0FBQ2pQLENBQVAsR0FBV3BDLE1BQU0sQ0FBQ29DLENBQTdCO0FBQ0EsV0FBT0ssSUFBSSxDQUFDd08sSUFBTCxDQUFVUyxFQUFFLEdBQUdBLEVBQUwsR0FBVUMsRUFBRSxHQUFHQSxFQUF6QixDQUFQO0FBQ0g7O0FBQ0QxUixPQUFLLENBQUN3UixRQUFOLEdBQWlCQSxRQUFqQjs7QUFDQSxXQUFTRyxXQUFULENBQXFCekksS0FBckIsRUFBNEJFLEdBQTVCLEVBQWlDdUUsS0FBakMsRUFBd0N6SCxNQUF4QyxFQUFnRDtBQUM1Q0EsVUFBTSxDQUFDaEUsQ0FBUCxHQUFXZ0gsS0FBSyxDQUFDaEgsQ0FBTixHQUFVeUwsS0FBSyxJQUFJdkUsR0FBRyxDQUFDbEgsQ0FBSixHQUFRZ0gsS0FBSyxDQUFDaEgsQ0FBbEIsQ0FBMUI7QUFDQWdFLFVBQU0sQ0FBQy9ELENBQVAsR0FBVytHLEtBQUssQ0FBQy9HLENBQU4sR0FBVXdMLEtBQUssSUFBSXZFLEdBQUcsQ0FBQ2pILENBQUosR0FBUStHLEtBQUssQ0FBQy9HLENBQWxCLENBQTFCO0FBQ0g7O0FBQ0RuQyxPQUFLLENBQUMyUixXQUFOLEdBQW9CQSxXQUFwQjs7QUFDQSxXQUFTQyxLQUFULENBQWUzQyxLQUFmLEVBQXNCdE4sTUFBdEIsRUFBOEJzUCxLQUE5QixFQUFxQztBQUNqQ2hDLFNBQUssQ0FBQy9NLENBQU4sR0FBVVAsTUFBTSxHQUFHYSxJQUFJLENBQUMrSyxHQUFMLENBQVMwRCxLQUFULENBQW5CO0FBQ0FoQyxTQUFLLENBQUM5TSxDQUFOLEdBQVVSLE1BQU0sR0FBR2EsSUFBSSxDQUFDZ0wsR0FBTCxDQUFTeUQsS0FBVCxDQUFuQjtBQUNIOztBQUNEalIsT0FBSyxDQUFDNFIsS0FBTixHQUFjQSxLQUFkO0FBQ0gsQ0F6REQsRUF5REc1UixLQUFLLEtBQUtBLEtBQUssR0FBRyxFQUFiLENBekRSLEU7Ozs7Ozs7Ozs7Ozs7QUNETyxJQUFJNlIsU0FBSjs7QUFDUCxDQUFDLFVBQVVBLFNBQVYsRUFBcUI7QUFDbEIsV0FBUzdELEtBQVQsR0FBaUI7QUFDYixXQUFPO0FBQ0g5TCxPQUFDLEVBQUUsQ0FEQTtBQUNHQyxPQUFDLEVBQUUsQ0FETjtBQUNTMEIsV0FBSyxFQUFFLENBRGhCO0FBQ21CQyxZQUFNLEVBQUU7QUFEM0IsS0FBUDtBQUdIOztBQUNEK04sV0FBUyxDQUFDN0QsS0FBVixHQUFrQkEsS0FBbEI7O0FBQ0EsV0FBU1EsUUFBVCxDQUFrQkksU0FBbEIsRUFBNkI7QUFDekJBLGFBQVMsQ0FBQzFNLENBQVYsR0FBYyxDQUFkO0FBQ0EwTSxhQUFTLENBQUN6TSxDQUFWLEdBQWMsQ0FBZDtBQUNBeU0sYUFBUyxDQUFDL0ssS0FBVixHQUFrQixDQUFsQjtBQUNBK0ssYUFBUyxDQUFDOUssTUFBVixHQUFtQixDQUFuQjtBQUNIOztBQUNEK04sV0FBUyxDQUFDckQsUUFBVixHQUFxQkEsUUFBckI7O0FBQ0EsV0FBU0UsT0FBVCxDQUFpQkUsU0FBakIsRUFBNEI7QUFDeEIsV0FBT0EsU0FBUyxDQUFDL0ssS0FBVixLQUFvQixDQUFwQixJQUF5QitLLFNBQVMsQ0FBQzlLLE1BQVYsS0FBcUIsQ0FBckQ7QUFDSDs7QUFDRCtOLFdBQVMsQ0FBQ25ELE9BQVYsR0FBb0JBLE9BQXBCOztBQUNBLFdBQVNvRCxRQUFULENBQWtCbEQsU0FBbEIsRUFBNkJLLEtBQTdCLEVBQW9DO0FBQ2hDLFdBQU9MLFNBQVMsQ0FBQzFNLENBQVYsR0FBYytNLEtBQUssQ0FBQy9NLENBQXBCLElBQ0EwTSxTQUFTLENBQUMxTSxDQUFWLEdBQWMwTSxTQUFTLENBQUMvSyxLQUF4QixHQUFnQ29MLEtBQUssQ0FBQy9NLENBRHRDLElBRUEwTSxTQUFTLENBQUN6TSxDQUFWLEdBQWM4TSxLQUFLLENBQUM5TSxDQUZwQixJQUdBeU0sU0FBUyxDQUFDek0sQ0FBVixHQUFjeU0sU0FBUyxDQUFDOUssTUFBeEIsR0FBaUNtTCxLQUFLLENBQUM5TSxDQUg5QztBQUlIOztBQUNEMFAsV0FBUyxDQUFDQyxRQUFWLEdBQXFCQSxRQUFyQjtBQUNILENBekJELEVBeUJHRCxTQUFTLEtBQUtBLFNBQVMsR0FBRyxFQUFqQixDQXpCWixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0EsSUFBTXBELE1BQU0sR0FBR29ELHNEQUFBLEVBQWY7QUFDTyxJQUFJRSx5QkFBSjs7QUFDUCxDQUFDLFVBQVVBLHlCQUFWLEVBQXFDO0FBQ2xDLFdBQVN4TSxNQUFULENBQWdCMUMsS0FBaEIsRUFBdUJZLE1BQXZCLEVBQStCO0FBQzNCLFFBQU0rRixRQUFRLEdBQUdvRCx5REFBQSxDQUFtQi9KLEtBQW5CLEVBQTBCWSxNQUExQixDQUFqQjs7QUFDQSxRQUFJLEVBQUMrRixRQUFELGFBQUNBLFFBQUQsZUFBQ0EsUUFBUSxDQUFFbkMsTUFBWCxLQUFxQixFQUFDbUMsUUFBRCxhQUFDQSxRQUFELGVBQUNBLFFBQVEsQ0FBRTNHLEtBQVgsQ0FBekIsRUFBMkM7QUFDdkM7QUFDSDs7QUFDRCxRQUFNWixPQUFPLEdBQUd3QixNQUFNLENBQUMrQixRQUFQLENBQWdCbkMsVUFBaEIsRUFBaEI7QUFMMkIsUUFNbkI1QixjQU5tQixHQU1BUSxPQU5BLENBTW5CUixjQU5tQjs7QUFPM0IsUUFBSUEsY0FBYyxDQUFDUCxlQUFmLElBQWtDLENBQXRDLEVBQXlDO0FBQ3JDO0FBQ0g7O0FBVDBCLFFBVW5CYyxNQVZtQixHQVVSQyxPQVZRLENBVW5CRCxNQVZtQjtBQVczQixRQUFNK0UsUUFBUSxHQUFHdEQsTUFBTSxDQUFDc0QsUUFBeEI7QUFDQSxRQUFNaUwsU0FBUyxHQUFHakwsUUFBUSxDQUFDMUQsVUFBVCxFQUFsQjtBQVoyQiwwQkFhRG1HLFFBQVEsQ0FBQzNHLEtBYlI7QUFBQSxRQWFuQmdCLEtBYm1CLG1CQWFuQkEsS0FibUI7QUFBQSxRQWFaQyxNQWJZLG1CQWFaQSxNQWJZO0FBYzNCLFFBQU01QixDQUFDLEdBQUcySixpREFBQSxDQUFXaEosS0FBWCxFQUFrQmdCLEtBQWxCLENBQVY7QUFDQSxRQUFNMUIsQ0FBQyxHQUFHMEosaURBQUEsQ0FBV2hKLEtBQVgsRUFBa0JpQixNQUFsQixDQUFWOztBQUNBLFFBQUluRCxzRUFBQSxDQUFnQ2MsY0FBaEMsQ0FBSixFQUFxRDtBQUNqRHVRLGVBQVMsQ0FBQy9OLFlBQVYsQ0FBdUJqQyxNQUFNLENBQUN0QixDQUE5QixFQUFpQ3NCLE1BQU0sQ0FBQ3ZCLENBQXhDLEVBQTJDdUIsTUFBTSxDQUFDa0wsQ0FBbEQsRUFBcURsTCxNQUFNLENBQUM0SCxDQUE1RCxFQUErRDVILE1BQU0sQ0FBQ00sRUFBdEUsRUFBMEVOLE1BQU0sQ0FBQ08sRUFBakY7QUFDQXlQLGVBQVMsQ0FBQ0MsV0FBVixHQUF3QnhRLGNBQWMsQ0FBQ1AsZUFBdkM7QUFDQThRLGVBQVMsQ0FBQ0UsU0FBVixDQUFvQjFJLFFBQVEsQ0FBQzNHLEtBQTdCLEVBQW9DWCxDQUFwQyxFQUF1Q0MsQ0FBdkM7QUFDSCxLQUpELE1BS0s7QUFDRCxVQUFNZ1EsYUFBYSxHQUFHcEwsUUFBUSxDQUFDcUwsbUJBQVQsRUFBdEI7QUFDQTNELFlBQU0sQ0FBQ3ZNLENBQVAsR0FBV0EsQ0FBWDtBQUNBdU0sWUFBTSxDQUFDdE0sQ0FBUCxHQUFXQSxDQUFYO0FBQ0FzTSxZQUFNLENBQUM1SyxLQUFQLEdBQWVBLEtBQWY7QUFDQTRLLFlBQU0sQ0FBQzNLLE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0ExQixtRUFBQSxDQUF1QkosTUFBdkIsRUFBK0J5TSxNQUEvQixFQUF1Q0EsTUFBdkM7O0FBQ0EsVUFBSW9ELHdEQUFBLENBQWtCcEQsTUFBbEIsQ0FBSixFQUErQjtBQUMzQjtBQUNIOztBQUNEMEQsbUJBQWEsQ0FBQ2pPLFNBQWQsQ0FBd0J1SyxNQUFNLENBQUN2TSxDQUEvQixFQUFrQ3VNLE1BQU0sQ0FBQ3RNLENBQXpDLEVBQTRDc00sTUFBTSxDQUFDNUssS0FBbkQsRUFBMEQ0SyxNQUFNLENBQUMzSyxNQUFqRTtBQUNBcU8sbUJBQWEsQ0FBQ2xPLFlBQWQsQ0FBMkJqQyxNQUFNLENBQUN0QixDQUFsQyxFQUFxQ3NCLE1BQU0sQ0FBQ3ZCLENBQTVDLEVBQStDdUIsTUFBTSxDQUFDa0wsQ0FBdEQsRUFBeURsTCxNQUFNLENBQUM0SCxDQUFoRSxFQUFtRTVILE1BQU0sQ0FBQ00sRUFBMUUsRUFBOEVOLE1BQU0sQ0FBQ08sRUFBckY7QUFDQTRQLG1CQUFhLENBQUNELFNBQWQsQ0FBd0IxSSxRQUFRLENBQUMzRyxLQUFqQyxFQUF3Q1gsQ0FBeEMsRUFBMkNDLENBQTNDO0FBQ0EsVUFBTWtRLFNBQVMsR0FBR0YsYUFBYSxDQUFDRyxZQUFkLENBQTJCN0QsTUFBTSxDQUFDdk0sQ0FBbEMsRUFBcUN1TSxNQUFNLENBQUN0TSxDQUE1QyxFQUErQ3NNLE1BQU0sQ0FBQzVLLEtBQXRELEVBQTZENEssTUFBTSxDQUFDM0ssTUFBcEUsQ0FBbEI7QUFDQSxVQUFNeU8sRUFBRSxHQUFHOVEsY0FBYyxDQUFDYixhQUExQjtBQUNBLFVBQU00UixFQUFFLEdBQUcvUSxjQUFjLENBQUNYLGVBQTFCO0FBQ0EsVUFBTTJSLEVBQUUsR0FBR2hSLGNBQWMsQ0FBQ1QsY0FBMUI7QUFDQSxVQUFNMFIsRUFBRSxHQUFHalIsY0FBYyxDQUFDUCxlQUExQjtBQUNBLFVBQU15UixFQUFFLEdBQUdsUixjQUFjLENBQUNaLFNBQTFCO0FBQ0EsVUFBTStSLEVBQUUsR0FBR25SLGNBQWMsQ0FBQ1YsV0FBMUI7QUFDQSxVQUFNOFIsRUFBRSxHQUFHcFIsY0FBYyxDQUFDUixVQUExQjtBQUNBLFVBQU02UixFQUFFLEdBQUdyUixjQUFjLENBQUNOLFdBQTFCO0FBckJDLFVBc0JPNFIsSUF0QlAsR0FzQmdCVixTQXRCaEIsQ0FzQk9VLElBdEJQO0FBQUEsVUF1Qk9wUixNQXZCUCxHQXVCa0JvUixJQXZCbEIsQ0F1Qk9wUixNQXZCUDs7QUF3QkQsV0FBSyxJQUFJRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHQyxNQUFwQixHQUE2QjtBQUN6Qm9SLFlBQUksQ0FBQ3JSLENBQUQsQ0FBSixHQUFVcVIsSUFBSSxDQUFDclIsQ0FBQyxFQUFGLENBQUosR0FBWTZRLEVBQVosR0FBaUJJLEVBQTNCO0FBQ0FJLFlBQUksQ0FBQ3JSLENBQUQsQ0FBSixHQUFVcVIsSUFBSSxDQUFDclIsQ0FBQyxFQUFGLENBQUosR0FBWThRLEVBQVosR0FBaUJJLEVBQTNCO0FBQ0FHLFlBQUksQ0FBQ3JSLENBQUQsQ0FBSixHQUFVcVIsSUFBSSxDQUFDclIsQ0FBQyxFQUFGLENBQUosR0FBWStRLEVBQVosR0FBaUJJLEVBQTNCO0FBQ0FFLFlBQUksQ0FBQ3JSLENBQUQsQ0FBSixHQUFVcVIsSUFBSSxDQUFDclIsQ0FBQyxFQUFGLENBQUosR0FBWWdSLEVBQVosR0FBaUJJLEVBQTNCO0FBQ0g7O0FBQ0RYLG1CQUFhLENBQUNhLFlBQWQsQ0FBMkJYLFNBQTNCLEVBQXNDNUQsTUFBTSxDQUFDdk0sQ0FBN0MsRUFBZ0R1TSxNQUFNLENBQUN0TSxDQUF2RDtBQUNBNlAsZUFBUyxDQUFDL04sWUFBVjtBQUNBK04sZUFBUyxDQUFDQyxXQUFWLEdBQXdCLENBQXhCO0FBQ0FELGVBQVMsQ0FBQ0UsU0FBVixDQUFvQkMsYUFBYSxDQUFDdk8sTUFBbEMsRUFBMEM2SyxNQUFNLENBQUN2TSxDQUFqRCxFQUFvRHVNLE1BQU0sQ0FBQ3RNLENBQTNELEVBQThEc00sTUFBTSxDQUFDNUssS0FBckUsRUFBNEU0SyxNQUFNLENBQUMzSyxNQUFuRixFQUEyRjJLLE1BQU0sQ0FBQ3ZNLENBQWxHLEVBQXFHdU0sTUFBTSxDQUFDdE0sQ0FBNUcsRUFBK0dzTSxNQUFNLENBQUM1SyxLQUF0SCxFQUE2SDRLLE1BQU0sQ0FBQzNLLE1BQXBJO0FBQ0FpRCxjQUFRLENBQUNrTSxvQkFBVCxDQUE4QmQsYUFBOUI7QUFDSDtBQUNKOztBQUNESiwyQkFBeUIsQ0FBQ3hNLE1BQTFCLEdBQW1DQSxNQUFuQzs7QUFDQSxXQUFTYSxJQUFULENBQWMzQyxNQUFkLEVBQXNCO0FBQ2xCeVAsMkRBQUEsQ0FBb0J6UCxNQUFwQjtBQUNBQSxVQUFNLENBQUM0QyxVQUFQLENBQWtCZCxNQUFsQixDQUF5QmUsR0FBekIsQ0FBNkI2TSx5Q0FBN0IsRUFBb0M1TixNQUFwQztBQUNIOztBQUNEd00sMkJBQXlCLENBQUMzTCxJQUExQixHQUFpQ0EsSUFBakM7QUFDSCxDQWpFRCxFQWlFRzJMLHlCQUF5QixLQUFLQSx5QkFBeUIsR0FBRyxFQUFqQyxDQWpFNUIsRTs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDTyxJQUFJcUIsb0JBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxvQkFBVixFQUFnQztBQUM3QixXQUFTN04sTUFBVCxDQUFnQjFDLEtBQWhCLEVBQXVCWSxNQUF2QixFQUErQjtBQUMzQixRQUFNK0YsUUFBUSxHQUFHb0QseURBQUEsQ0FBbUIvSixLQUFuQixFQUEwQlksTUFBMUIsQ0FBakI7O0FBQ0EsUUFBSSxFQUFDK0YsUUFBRCxhQUFDQSxRQUFELGVBQUNBLFFBQVEsQ0FBRW5DLE1BQVgsS0FBcUIsRUFBQ21DLFFBQUQsYUFBQ0EsUUFBRCxlQUFDQSxRQUFRLENBQUUzRyxLQUFYLENBQXpCLEVBQTJDO0FBQ3ZDO0FBQ0g7O0FBQ0QsUUFBTVosT0FBTyxHQUFHd0IsTUFBTSxDQUFDK0IsUUFBUCxDQUFnQm5DLFVBQWhCLEVBQWhCO0FBTDJCLFFBTW5CNUIsY0FObUIsR0FNQVEsT0FOQSxDQU1uQlIsY0FObUI7O0FBTzNCLFFBQUlBLGNBQWMsQ0FBQ1AsZUFBZixJQUFrQyxDQUF0QyxFQUF5QztBQUNyQztBQUNIOztBQUNELFFBQU04USxTQUFTLEdBQUd2TyxNQUFNLENBQUNzRCxRQUFQLENBQWdCMUQsVUFBaEIsRUFBbEI7QUFWMkIsUUFXbkJyQixNQVhtQixHQVdSQyxPQVhRLENBV25CRCxNQVhtQjtBQVkzQmdRLGFBQVMsQ0FBQy9OLFlBQVYsQ0FBdUJqQyxNQUFNLENBQUN0QixDQUE5QixFQUFpQ3NCLE1BQU0sQ0FBQ3ZCLENBQXhDLEVBQTJDdUIsTUFBTSxDQUFDa0wsQ0FBbEQsRUFBcURsTCxNQUFNLENBQUM0SCxDQUE1RCxFQUErRDVILE1BQU0sQ0FBQ00sRUFBdEUsRUFBMEVOLE1BQU0sQ0FBQ08sRUFBakY7QUFaMkIsMEJBYURpSCxRQUFRLENBQUMzRyxLQWJSO0FBQUEsUUFhbkJnQixLQWJtQixtQkFhbkJBLEtBYm1CO0FBQUEsUUFhWkMsTUFiWSxtQkFhWkEsTUFiWTtBQWMzQixRQUFNNUIsQ0FBQyxHQUFHMkosaURBQUEsQ0FBV2hKLEtBQVgsRUFBa0JnQixLQUFsQixDQUFWO0FBQ0EsUUFBTTFCLENBQUMsR0FBRzBKLGlEQUFBLENBQVdoSixLQUFYLEVBQWtCaUIsTUFBbEIsQ0FBVjtBQUNBa08sYUFBUyxDQUFDQyxXQUFWLEdBQXdCeFEsY0FBYyxDQUFDUCxlQUF2QztBQUNBOFEsYUFBUyxDQUFDRSxTQUFWLENBQW9CMUksUUFBUSxDQUFDM0csS0FBN0IsRUFBb0NYLENBQXBDLEVBQXVDQyxDQUF2QztBQUNIOztBQUNEaVIsc0JBQW9CLENBQUM3TixNQUFyQixHQUE4QkEsTUFBOUI7O0FBQ0EsV0FBU2EsSUFBVCxDQUFjM0MsTUFBZCxFQUFzQjtBQUNsQnlQLDJEQUFBLENBQW9CelAsTUFBcEI7QUFDQUEsVUFBTSxDQUFDNEMsVUFBUCxDQUFrQmQsTUFBbEIsQ0FBeUJlLEdBQXpCLENBQTZCNk0seUNBQTdCLEVBQW9DNU4sTUFBcEM7QUFDSDs7QUFDRDZOLHNCQUFvQixDQUFDaE4sSUFBckIsR0FBNEJBLElBQTVCO0FBQ0gsQ0ExQkQsRUEwQkdnTixvQkFBb0IsS0FBS0Esb0JBQW9CLEdBQUcsRUFBNUIsQ0ExQnZCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNPLElBQU1ELEtBQUssR0FBRyxPQUFkO0FBQ0EsSUFBSUUsS0FBSjs7QUFDUCxDQUFDLFVBQVVBLEtBQVYsRUFBaUI7QUFDZCxXQUFTQyxlQUFULENBQXlCelEsS0FBekIsRUFBZ0M0TCxNQUFoQyxFQUF3Q2hMLE1BQXhDLEVBQWdEO0FBQUEsUUFDcENzSixHQURvQyxHQUM1QmxLLEtBRDRCLENBQ3BDa0ssR0FEb0M7O0FBRTVDLFFBQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ044RSwrREFBQSxDQUFtQnBELE1BQW5CO0FBQ0E7QUFDSDs7QUFDRCxRQUFNakYsUUFBUSxHQUFHL0YsTUFBTSxDQUFDd0QsU0FBUCxDQUFpQmMsR0FBakIsQ0FBcUJnRixHQUFyQixDQUFqQjs7QUFDQSxRQUFJLEVBQUN2RCxRQUFELGFBQUNBLFFBQUQsZUFBQ0EsUUFBUSxDQUFFbkMsTUFBWCxLQUFxQixFQUFDbUMsUUFBRCxhQUFDQSxRQUFELGVBQUNBLFFBQVEsQ0FBRTNHLEtBQVgsQ0FBekIsRUFBMkM7QUFDdkNnUCwrREFBQSxDQUFtQnBELE1BQW5CO0FBQ0E7QUFDSDs7QUFWMkMsMEJBV2xCakYsUUFBUSxDQUFDM0csS0FYUztBQUFBLFFBV3BDZ0IsS0FYb0MsbUJBV3BDQSxLQVhvQztBQUFBLFFBVzdCQyxNQVg2QixtQkFXN0JBLE1BWDZCO0FBWTVDLFFBQU01QixDQUFDLEdBQUcySixpREFBQSxDQUFXaEosS0FBWCxFQUFrQmdCLEtBQWxCLENBQVY7QUFDQSxRQUFNMUIsQ0FBQyxHQUFHMEosaURBQUEsQ0FBV2hKLEtBQVgsRUFBa0JpQixNQUFsQixDQUFWO0FBQ0EySyxVQUFNLENBQUN2TSxDQUFQLEdBQVdBLENBQVg7QUFDQXVNLFVBQU0sQ0FBQ3RNLENBQVAsR0FBV0EsQ0FBWDtBQUNBc00sVUFBTSxDQUFDNUssS0FBUCxHQUFlQSxLQUFmO0FBQ0E0SyxVQUFNLENBQUMzSyxNQUFQLEdBQWdCQSxNQUFoQjtBQUNIOztBQUNEdVAsT0FBSyxDQUFDQyxlQUFOLEdBQXdCQSxlQUF4QjtBQUNILENBckJELEVBcUJHRCxLQUFLLEtBQUtBLEtBQUssR0FBRyxFQUFiLENBckJSOztBQXNCQSxJQUFNNUUsTUFBTSxHQUFHb0Qsc0RBQUEsRUFBZjtBQUNPLElBQUlxQixjQUFKOztBQUNQLENBQUMsVUFBVUEsY0FBVixFQUEwQjtBQUN2QixXQUFTbE4sT0FBVCxDQUFpQm5ELEtBQWpCLEVBQXdCWSxNQUF4QixFQUFnQztBQUFBLFFBQ3BCMEUsS0FEb0IsR0FDVjFFLE1BQU0sQ0FBQ3dDLGFBREcsQ0FDcEJrQyxLQURvQjtBQUU1QmtMLFNBQUssQ0FBQ0MsZUFBTixDQUFzQnpRLEtBQXRCLEVBQTZCNEwsTUFBN0IsRUFBcUNoTCxNQUFyQztBQUNBLFdBQU9vTyx5REFBQSxDQUFtQnBELE1BQW5CLEVBQTJCdEcsS0FBM0IsQ0FBUDtBQUNIOztBQUNEK0ssZ0JBQWMsQ0FBQ2xOLE9BQWYsR0FBeUJBLE9BQXpCOztBQUNBLFdBQVNJLElBQVQsQ0FBYzNDLE1BQWQsRUFBc0I7QUFDbEJBLFVBQU0sQ0FBQzRDLFVBQVAsQ0FBa0JMLE9BQWxCLENBQTBCTSxHQUExQixDQUE4QjZNLEtBQTlCLEVBQXFDbk4sT0FBckM7QUFDQXVOLGtFQUFBLENBQW1COVAsTUFBbkI7QUFDSDs7QUFDRHlQLGdCQUFjLENBQUM5TSxJQUFmLEdBQXNCQSxJQUF0QjtBQUNILENBWkQsRUFZRzhNLGNBQWMsS0FBS0EsY0FBYyxHQUFHLEVBQXRCLENBWmpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RPLElBQUlLLGFBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxhQUFWLEVBQXlCO0FBQ3RCLFdBQVM5SixPQUFULENBQWlCRixLQUFqQixFQUF3QjlGLE1BQXhCLEVBQWdDO0FBQzVCLFFBQU0rUCxTQUFTLEdBQUdqSyxLQUFLLENBQUNrSyxLQUFOLENBQVksR0FBWixFQUFpQmpRLEdBQWpCLEVBQWxCOztBQUNBLFlBQVFnUSxTQUFSO0FBQ0ksV0FBSyxLQUFMO0FBQ0EsV0FBSyxLQUFMO0FBQ0ksWUFBTWhLLFFBQVEsR0FBRztBQUNiRCxlQUFLLEVBQUxBLEtBRGE7QUFFYmxDLGdCQUFNLEVBQUUsS0FGSztBQUdieEUsZUFBSyxFQUFFO0FBSE0sU0FBakI7QUFLQSxZQUFNQSxLQUFLLEdBQUdLLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0FOLGFBQUssQ0FBQ2tLLEdBQU4sR0FBWXhELEtBQVo7O0FBQ0ExRyxhQUFLLENBQUM2USxNQUFOLEdBQWUsWUFBTTtBQUNqQmpNLGlCQUFPLENBQUNDLEdBQVIseUJBQTZCNkIsS0FBN0I7QUFDQUMsa0JBQVEsQ0FBQzNHLEtBQVQsR0FBaUJBLEtBQWpCO0FBQ0EyRyxrQkFBUSxDQUFDbkMsTUFBVCxHQUFrQixJQUFsQjtBQUNILFNBSkQ7O0FBS0F4RSxhQUFLLENBQUM4USxPQUFOLEdBQWdCLFVBQUNDLENBQUQsRUFBTztBQUNuQm5RLGdCQUFNLENBQUNDLEtBQVAsQ0FBYUMsT0FBYixDQUFxQixrQkFBckIsRUFBeUNpUSxDQUF6QztBQUNILFNBRkQ7O0FBR0EsZUFBT3BLLFFBQVA7O0FBQ0o7QUFDSTtBQXBCUjs7QUFzQkEsV0FBTyxJQUFQO0FBQ0g7O0FBQ0QrSixlQUFhLENBQUM5SixPQUFkLEdBQXdCQSxPQUF4Qjs7QUFDQSxXQUFTckQsSUFBVCxDQUFjM0MsTUFBZCxFQUFzQjtBQUNsQkEsVUFBTSxDQUFDd0QsU0FBUCxDQUFpQm9DLFNBQWpCLENBQTJCd0ssR0FBM0IsQ0FBK0JwSyxPQUEvQjtBQUNIOztBQUNEOEosZUFBYSxDQUFDbk4sSUFBZCxHQUFxQkEsSUFBckI7QUFDSCxDQWhDRCxFQWdDR21OLGFBQWEsS0FBS0EsYUFBYSxHQUFHLEVBQXJCLENBaENoQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQSxJQUFNTyxJQUFJLEdBQUd0UixJQUFJLENBQUN1UixFQUFMLEdBQVUsQ0FBdkI7QUFDTyxTQUFTQyxZQUFULENBQXNCakIsSUFBdEIsRUFBNEI5USxPQUE1QixFQUFxQztBQUFBLGdCQUNnQjhRLElBRGhCLENBQ2hDN1EsQ0FEZ0M7QUFBQSxNQUNoQ0EsQ0FEZ0Msd0JBQzVCLENBRDRCO0FBQUEsZ0JBQ2dCNlEsSUFEaEIsQ0FDekI1USxDQUR5QjtBQUFBLE1BQ3pCQSxDQUR5Qix3QkFDckIsQ0FEcUI7QUFBQSxxQkFDZ0I0USxJQURoQixDQUNsQmtCLE1BRGtCO0FBQUEsTUFDbEJBLE1BRGtCLDZCQUNULENBRFM7QUFBQSxNQUNOQyxPQURNLEdBQ2dCbkIsSUFEaEIsQ0FDTm1CLE9BRE07QUFBQSxNQUNHQyxPQURILEdBQ2dCcEIsSUFEaEIsQ0FDR29CLE9BREg7QUFFeEMsTUFBTWpFLEVBQUUsR0FBR2dFLE9BQUgsYUFBR0EsT0FBSCxjQUFHQSxPQUFILEdBQWNELE1BQXRCO0FBQ0EsTUFBTTlELEVBQUUsR0FBR2dFLE9BQUgsYUFBR0EsT0FBSCxjQUFHQSxPQUFILEdBQWNGLE1BQXRCOztBQUNBLE1BQUkvRCxFQUFFLEtBQUssQ0FBUCxJQUFZQyxFQUFFLEtBQUssQ0FBdkIsRUFBMEI7QUFDdEIsV0FBTyxLQUFQO0FBQ0g7O0FBQ0RsTyxTQUFPLENBQUNtUyxTQUFSO0FBQ0FuUyxTQUFPLENBQUNvUyxPQUFSLENBQWdCblMsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCK04sRUFBdEIsRUFBMEJDLEVBQTFCLEVBQThCLENBQTlCLEVBQWlDLENBQWpDLEVBQW9DMkQsSUFBcEM7QUFDQTdSLFNBQU8sQ0FBQ3FTLFNBQVI7QUFDQSxTQUFPLElBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7OztBQ1pNLFNBQVNDLFlBQVQsQ0FBc0JDLE9BQXRCLEVBQStCdlMsT0FBL0IsRUFBd0M7QUFBQTs7QUFBQSxNQUNuQ2tELElBRG1DLEdBQzFCcVAsT0FEMEIsQ0FDbkNyUCxJQURtQzs7QUFFM0MsVUFBUUEsSUFBUjtBQUNJLFNBQUssUUFBTDtBQUNJLFVBQU1zUCxNQUFNLEdBQUdELE9BQWY7QUFDQXZTLGFBQU8sQ0FBQ3dTLE1BQVIsY0FBZUEsTUFBTSxDQUFDdlMsQ0FBdEIsaURBQTJCLENBQTNCLGVBQThCdVMsTUFBTSxDQUFDdFMsQ0FBckMsaURBQTBDLENBQTFDO0FBQ0E7O0FBQ0osU0FBSyxRQUFMO0FBQ0ksVUFBTXVTLE1BQU0sR0FBR0YsT0FBZjtBQUNBdlMsYUFBTyxDQUFDeVMsTUFBUixjQUFlQSxNQUFNLENBQUN4UyxDQUF0QixpREFBMkIsQ0FBM0IsZUFBOEJ3UyxNQUFNLENBQUN2UyxDQUFyQyxpREFBMEMsQ0FBMUM7QUFDQTs7QUFDSixTQUFLLFNBQUw7QUFDSSxVQUFNd1MsT0FBTyxHQUFHSCxPQUFoQjtBQUNBdlMsYUFBTyxDQUFDMlMsZ0JBQVIsZ0JBQXlCRCxPQUFPLENBQUNFLEVBQWpDLHFEQUF1QyxDQUF2QyxpQkFBMENGLE9BQU8sQ0FBQ0csRUFBbEQscURBQXdELENBQXhELGdCQUEyREgsT0FBTyxDQUFDelMsQ0FBbkUsbURBQXdFLENBQXhFLGdCQUEyRXlTLE9BQU8sQ0FBQ3hTLENBQW5GLG1EQUF3RixDQUF4RjtBQUNBOztBQUNKLFNBQUssY0FBTDtBQUNJLFVBQU00UyxZQUFZLEdBQUdQLE9BQXJCO0FBQ0F2UyxhQUFPLENBQUMrUyxhQUFSLHFCQUFzQkQsWUFBWSxDQUFDRixFQUFuQywrREFBeUMsQ0FBekMsc0JBQTRDRSxZQUFZLENBQUNELEVBQXpELCtEQUErRCxDQUEvRCxzQkFBa0VDLFlBQVksQ0FBQ0UsRUFBL0UsK0RBQXFGLENBQXJGLHNCQUF3RkYsWUFBWSxDQUFDRyxFQUFyRywrREFBMkcsQ0FBM0cscUJBQThHSCxZQUFZLENBQUM3UyxDQUEzSCw2REFBZ0ksQ0FBaEkscUJBQW1JNlMsWUFBWSxDQUFDNVMsQ0FBaEosNkRBQXFKLENBQXJKO0FBQ0E7O0FBQ0o7QUFDSTtBQWxCUjtBQW9CSDtBQUNNLFNBQVNnVCxTQUFULENBQW1CcEMsSUFBbkIsRUFBeUI5USxPQUF6QixFQUFrQztBQUNyQyxNQUFJLENBQUM4USxJQUFJLENBQUNwUixNQUFWLEVBQWtCO0FBQ2QsV0FBTyxLQUFQO0FBQ0g7O0FBQ0RNLFNBQU8sQ0FBQ21TLFNBQVI7O0FBQ0EsT0FBSyxJQUFJMVMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3FSLElBQUksQ0FBQ3BSLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFFBQU04UyxPQUFPLEdBQUd6QixJQUFJLENBQUNyUixDQUFELENBQXBCO0FBQ0E2UyxnQkFBWSxDQUFDQyxPQUFELEVBQVV2UyxPQUFWLENBQVo7QUFDSDs7QUFDREEsU0FBTyxDQUFDcVMsU0FBUjtBQUNBLFNBQU8sSUFBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUNsQ00sU0FBU2MsY0FBVCxDQUF3QnJDLElBQXhCLEVBQThCOVEsT0FBOUIsRUFBdUM7QUFBQSxnQkFDTzhRLElBRFAsQ0FDbEM3USxDQURrQztBQUFBLE1BQ2xDQSxDQURrQyx3QkFDOUIsQ0FEOEI7QUFBQSxnQkFDTzZRLElBRFAsQ0FDM0I1USxDQUQyQjtBQUFBLE1BQzNCQSxDQUQyQix3QkFDdkIsQ0FEdUI7QUFBQSxvQkFDTzRRLElBRFAsQ0FDcEJsUCxLQURvQjtBQUFBLE1BQ3BCQSxLQURvQiw0QkFDWixDQURZO0FBQUEscUJBQ09rUCxJQURQLENBQ1RqUCxNQURTO0FBQUEsTUFDVEEsTUFEUyw2QkFDQSxDQURBOztBQUUxQyxNQUFJRCxLQUFLLEtBQUssQ0FBVixJQUFlQyxNQUFNLEtBQUssQ0FBOUIsRUFBaUM7QUFDN0IsV0FBTyxLQUFQO0FBQ0g7O0FBQ0Q3QixTQUFPLENBQUNtUyxTQUFSO0FBQ0FuUyxTQUFPLENBQUNvVCxJQUFSLENBQWFuVCxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQjBCLEtBQW5CLEVBQTBCQyxNQUExQjtBQUNBN0IsU0FBTyxDQUFDcVMsU0FBUjtBQUNBLFNBQU8sSUFBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU03RixNQUFNLEdBQUdvRCxzREFBQSxFQUFmO0FBQ0EsSUFBTXlELE1BQU0sR0FBR3RWLGtEQUFBLEVBQWY7O0FBQ0EsU0FBU3VWLGNBQVQsQ0FBd0J4QyxJQUF4QixFQUE4QnRSLGNBQTlCLEVBQThDUSxPQUE5QyxFQUF1RHdCLE1BQXZELEVBQStEO0FBQUEsTUFDbkQrUixJQURtRCxHQUNsQ3pDLElBRGtDLENBQ25EeUMsSUFEbUQ7QUFBQSxNQUM3Q0MsTUFENkMsR0FDbEMxQyxJQURrQyxDQUM3QzBDLE1BRDZDO0FBRTNELE1BQU1DLE9BQU8sR0FBRyxDQUFDLENBQUNGLElBQUYsSUFBVUEsSUFBSSxLQUFLLENBQW5DO0FBQ0EsTUFBTUcsU0FBUyxHQUFHLENBQUMsQ0FBQ0YsTUFBRixJQUFZQSxNQUFNLEtBQUssQ0FBekM7O0FBQ0EsTUFBSSxDQUFDQyxPQUFELElBQVksQ0FBQ0MsU0FBakIsRUFBNEI7QUFDeEI7QUFDSDs7QUFDRCxNQUFJQyxLQUFLLEdBQUcsSUFBWjtBQVAyRCxNQVFuRHpRLElBUm1ELEdBUTFDNE4sSUFSMEMsQ0FRbkQ1TixJQVJtRDs7QUFTM0QsVUFBUUEsSUFBUjtBQUNJLFNBQUssV0FBTDtBQUNJeVEsV0FBSyxHQUFHUiwwREFBYyxDQUFDckMsSUFBRCxFQUFPOVEsT0FBUCxDQUF0QjtBQUNBOztBQUNKLFNBQUssU0FBTDtBQUNJMlQsV0FBSyxHQUFHNUIsc0RBQVksQ0FBQ2pCLElBQUQsRUFBTzlRLE9BQVAsQ0FBcEI7QUFDQTs7QUFDSixTQUFLLE1BQUw7QUFDSSxVQUFNNFQsSUFBSSxHQUFHOUMsSUFBYjs7QUFDQSxVQUFJLE9BQU84QyxJQUFJLENBQUM5QyxJQUFaLEtBQXFCLFFBQXpCLEVBQW1DO0FBQy9CNkMsYUFBSyxHQUFHRSxvREFBVyxDQUFDRCxJQUFJLENBQUM5QyxJQUFOLEVBQVk5USxPQUFaLENBQW5CO0FBQ0gsT0FGRCxNQUdLLElBQUlnRCxLQUFLLENBQUNDLE9BQU4sQ0FBYzJRLElBQUksQ0FBQzlDLElBQW5CLENBQUosRUFBOEI7QUFDL0I2QyxhQUFLLEdBQUdULGdEQUFTLENBQUNVLElBQUksQ0FBQzlDLElBQU4sRUFBWTlRLE9BQVosQ0FBakI7QUFDSCxPQUZJLE1BR0E7QUFDRDJULGFBQUssR0FBRyxLQUFSO0FBQ0g7O0FBQ0Q7O0FBQ0o7QUFDSTtBQXBCUjs7QUFzQkEsTUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDUjtBQUNIOztBQUNELE1BQUlGLE9BQUosRUFBYTtBQUNUSyx3REFBWSxDQUFDUCxJQUFELEVBQU8vVCxjQUFQLEVBQXVCUSxPQUF2QixFQUFnQ3dCLE1BQWhDLENBQVo7QUFDQXhCLFdBQU8sQ0FBQ3VULElBQVI7QUFDSDs7QUFDRCxNQUFJRyxTQUFKLEVBQWU7QUFDWEssMERBQWMsQ0FBQ1AsTUFBRCxFQUFTaFUsY0FBVCxFQUF5QlEsT0FBekIsRUFBa0N3QixNQUFsQyxDQUFkO0FBQ0F4QixXQUFPLENBQUN3VCxNQUFSO0FBQ0g7QUFDSjs7QUFDTSxJQUFJUSxvQkFBSjs7QUFDUCxDQUFDLFVBQVVBLG9CQUFWLEVBQWdDO0FBQzdCLFdBQVMxUSxNQUFULENBQWdCMlEsS0FBaEIsRUFBdUJ6UyxNQUF2QixFQUErQjtBQUFBLFFBQ25Cc1AsSUFEbUIsR0FDVm1ELEtBRFUsQ0FDbkJuRCxJQURtQjs7QUFFM0IsUUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUDtBQUNIOztBQUNELFFBQU05USxPQUFPLEdBQUd3QixNQUFNLENBQUMrQixRQUFQLENBQWdCbkMsVUFBaEIsRUFBaEI7QUFMMkIsUUFNbkI1QixjQU5tQixHQU1BUSxPQU5BLENBTW5CUixjQU5tQjs7QUFPM0IsUUFBSUEsY0FBYyxDQUFDUCxlQUFmLElBQWtDLENBQXRDLEVBQXlDO0FBQ3JDO0FBQ0g7O0FBQ0RsQix5REFBQSxDQUFlc1YsTUFBZjs7QUFDQSxRQUFJekosc0RBQUEsQ0FBZ0JxSyxLQUFoQixDQUFKLEVBQTRCO0FBQ3hCQywrREFBQSxDQUFzQkQsS0FBdEIsRUFBNkJ6SCxNQUE3Qjs7QUFDQSxVQUFJb0Qsd0RBQUEsQ0FBa0JwRCxNQUFsQixDQUFKLEVBQStCO0FBQzNCO0FBQ0g7O0FBQ0Q2RyxZQUFNLENBQUNwVCxDQUFQLEdBQVcySixpREFBQSxDQUFXcUssS0FBWCxFQUFrQnpILE1BQU0sQ0FBQzVLLEtBQXpCLENBQVg7QUFDQXlSLFlBQU0sQ0FBQ25ULENBQVAsR0FBVzBKLGlEQUFBLENBQVdxSyxLQUFYLEVBQWtCekgsTUFBTSxDQUFDNUssS0FBekIsQ0FBWDtBQUNIOztBQUNELFFBQU1tTyxTQUFTLEdBQUd2TyxNQUFNLENBQUNzRCxRQUFQLENBQWdCMUQsVUFBaEIsRUFBbEI7QUFDQTJPLGFBQVMsQ0FBQ0MsV0FBVixHQUF3QixDQUF4QjtBQXBCMkIsUUFxQm5CalEsTUFyQm1CLEdBcUJSQyxPQXJCUSxDQXFCbkJELE1BckJtQjs7QUFzQjNCLFFBQUloQyxvREFBQSxDQUFjc1YsTUFBZCxDQUFKLEVBQTJCO0FBQ3ZCbFQsdUVBQUEsQ0FBMkJKLE1BQTNCLEVBQW1Dc1QsTUFBbkMsRUFBMkNBLE1BQTNDO0FBQ0g7O0FBQ0R0RCxhQUFTLENBQUMvTixZQUFWLENBQXVCakMsTUFBTSxDQUFDdEIsQ0FBOUIsRUFBaUNzQixNQUFNLENBQUN2QixDQUF4QyxFQUEyQ3VCLE1BQU0sQ0FBQ2tMLENBQWxELEVBQXFEbEwsTUFBTSxDQUFDNEgsQ0FBNUQsRUFBK0Q1SCxNQUFNLENBQUNNLEVBQVAsR0FBWWdULE1BQU0sQ0FBQ3BULENBQWxGLEVBQXFGRixNQUFNLENBQUNPLEVBQVAsR0FBWStTLE1BQU0sQ0FBQ25ULENBQXhHOztBQUNBLFFBQUk4QyxLQUFLLENBQUNDLE9BQU4sQ0FBYzZOLElBQWQsQ0FBSixFQUF5QjtBQUNyQixXQUFLLElBQUlyUixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHcVIsSUFBSSxDQUFDcFIsTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDbEM2VCxzQkFBYyxDQUFDeEMsSUFBSSxDQUFDclIsQ0FBRCxDQUFMLEVBQVVELGNBQVYsRUFBMEJ1USxTQUExQixFQUFxQ3ZPLE1BQXJDLENBQWQ7QUFDSDtBQUNKLEtBSkQsTUFLSyxJQUFJLFFBQU9zUCxJQUFQLE1BQWdCLFFBQXBCLEVBQThCO0FBQy9Cd0Msb0JBQWMsQ0FBQ3hDLElBQUQsRUFBT3RSLGNBQVAsRUFBdUJ1USxTQUF2QixFQUFrQ3ZPLE1BQWxDLENBQWQ7QUFDSDtBQUNKOztBQUNEd1Msc0JBQW9CLENBQUMxUSxNQUFyQixHQUE4QkEsTUFBOUI7O0FBQ0EsV0FBU2EsSUFBVCxDQUFjM0MsTUFBZCxFQUFzQjtBQUNsQjJTLDJEQUFBLENBQW9CM1MsTUFBcEI7QUFDQUEsVUFBTSxDQUFDNEMsVUFBUCxDQUFrQmQsTUFBbEIsQ0FBeUJlLEdBQXpCLENBQTZCK1AseUNBQTdCLEVBQW9DOVEsTUFBcEM7QUFDSDs7QUFDRDBRLHNCQUFvQixDQUFDN1AsSUFBckIsR0FBNEJBLElBQTVCO0FBQ0gsQ0ExQ0QsRUEwQ0c2UCxvQkFBb0IsS0FBS0Esb0JBQW9CLEdBQUcsRUFBNUIsQ0ExQ3ZCLEU7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQ0EsSUFBTUssTUFBTSxHQUFHLElBQUlDLDhEQUFKLEVBQWY7QUFDTyxTQUFTVCxXQUFULENBQXFCL0MsSUFBckIsRUFBMkI5USxPQUEzQixFQUFvQztBQUN2QyxNQUFJLENBQUM4USxJQUFJLENBQUNwUixNQUFWLEVBQWtCO0FBQ2QsV0FBTyxLQUFQO0FBQ0g7O0FBQ0RNLFNBQU8sQ0FBQ21TLFNBQVI7QUFDQWtDLFFBQU0sQ0FBQ0UsT0FBUCxDQUFlekQsSUFBZjs7QUFDQSxTQUFPdUQsTUFBTSxDQUFDRyxRQUFQLEVBQVAsRUFBMEI7QUFDdEIsUUFBTWpDLE9BQU8sR0FBRzhCLE1BQU0sQ0FBQ0ksVUFBUCxFQUFoQjs7QUFDQSxRQUFJbEMsT0FBSixFQUFhO0FBQ1RELHlEQUFZLENBQUNDLE9BQUQsRUFBVXZTLE9BQVYsQ0FBWjtBQUNIO0FBQ0o7O0FBQ0RBLFNBQU8sQ0FBQ3FTLFNBQVI7QUFDQSxTQUFPLElBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJEO0FBQ0E7QUFDQTtBQUNBLElBQU1xQyxXQUFXLEdBQUd2VSxtREFBQSxFQUFwQjtBQUNBLElBQU13VSxVQUFVLEdBQUcsRUFBbkI7O0FBQ0EsU0FBU0MsZ0JBQVQsQ0FBMEJyQixJQUExQixFQUFnQy9ULGNBQWhDLEVBQWdEUSxPQUFoRCxFQUF5RHdCLE1BQXpELEVBQWlFO0FBQUE7O0FBQzdELE1BQUksT0FBTytSLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDMUIsV0FBT3RWLDJFQUFBLENBQTRCc1YsSUFBNUIsRUFBa0MsQ0FBbEMsRUFBcUMvVCxjQUFyQyxDQUFQO0FBQ0g7O0FBQ0QsTUFBSSxRQUFPK1QsSUFBUCxNQUFnQixRQUFwQixFQUE4QjtBQUMxQixZQUFRQSxJQUFJLENBQUNyUSxJQUFiO0FBQ0ksV0FBSyxPQUFMO0FBQ0ksWUFBTTJSLEtBQUssR0FBR3RCLElBQWQ7QUFDQSxlQUFPdFYsMkVBQUEsaUJBQTRCNFcsS0FBSyxDQUFDMVcsS0FBbEMsdURBQTJDLENBQTNDLGtCQUE4QzBXLEtBQUssQ0FBQ3pXLEtBQXBELHVEQUE2RCxDQUE3RCxFQUFnRW9CLGNBQWhFLENBQVA7O0FBQ0osV0FBSyxRQUFMO0FBQUEsMkJBQ3FIK1QsSUFEckgsQ0FDWXhULE1BRFo7QUFBQSxZQUNvQitVLEVBRHBCLDZCQUN5QkosV0FEekI7QUFBQSwyQkFDcUhuQixJQURySCxDQUNzQ2xVLE1BRHRDO0FBQUEsWUFDOEMwVixFQUQ5Qyw2QkFDbURKLFVBRG5EO0FBQUEsMkJBQ3FIcEIsSUFEckgsQ0FDK0RqVSxNQUQvRDtBQUFBLFlBQ3VFMFYsRUFEdkUsNkJBQzRFTCxVQUQ1RTtBQUFBLDJCQUNxSHBCLElBRHJILENBQ3dGaFUsTUFEeEY7QUFBQSxZQUNnRzBWLEVBRGhHLDZCQUNxR04sVUFEckc7QUFFSSxlQUFPMVcsb0ZBQUEsQ0FBcUM2VyxFQUFyQyxFQUF5Q0MsRUFBekMsRUFBNkNDLEVBQTdDLEVBQWlEQyxFQUFqRCxFQUFxRHpWLGNBQXJELEVBQXFFUSxPQUFyRSxDQUFQOztBQUNKLFdBQUssUUFBTDtBQUFBLDRCQUNxSHVULElBRHJILENBQ1l4VCxNQURaO0FBQUEsWUFDb0JtVixFQURwQiw4QkFDeUJSLFdBRHpCO0FBQUEsNEJBQ3FIbkIsSUFEckgsQ0FDc0NsVSxNQUR0QztBQUFBLFlBQzhDOFYsRUFEOUMsOEJBQ21EUixVQURuRDtBQUFBLDRCQUNxSHBCLElBRHJILENBQytEalUsTUFEL0Q7QUFBQSxZQUN1RThWLEVBRHZFLDhCQUM0RVQsVUFENUU7QUFBQSw0QkFDcUhwQixJQURySCxDQUN3RmhVLE1BRHhGO0FBQUEsWUFDZ0c0TyxFQURoRyw4QkFDcUd3RyxVQURyRztBQUVJLGVBQU8xVyxvRkFBQSxDQUFxQ2lYLEVBQXJDLEVBQXlDQyxFQUF6QyxFQUE2Q0MsRUFBN0MsRUFBaURqSCxFQUFqRCxFQUFxRDNPLGNBQXJELEVBQXFFUSxPQUFyRSxDQUFQOztBQUNKLFdBQUssUUFBTDtBQUFBLDJCQUM4QnVULElBRDlCLENBQ1kxUyxNQURaO0FBQUEsWUFDWUEsTUFEWiw2QkFDcUIsSUFEckI7QUFFSSxZQUFNMEcsUUFBUSxHQUFHb0QseURBQUEsQ0FBbUI0SSxJQUFuQixFQUF5Qi9SLE1BQXpCLENBQWpCOztBQUNBLFlBQUkrRixRQUFKLGFBQUlBLFFBQUosZUFBSUEsUUFBUSxDQUFFM0csS0FBZCxFQUFxQjtBQUNqQixpQkFBTzNDLDRFQUFBLENBQTZCc0osUUFBUSxDQUFDM0csS0FBdEMsRUFBNkNDLE1BQTdDLEVBQXFEYixPQUFyRCxDQUFQO0FBQ0g7O0FBQ0QsZUFBTyxFQUFQOztBQUNKO0FBQ0ksZUFBTyxFQUFQO0FBbEJSO0FBb0JIOztBQUNELFNBQU8sRUFBUDtBQUNIOztBQUNNLFNBQVM4VCxZQUFULENBQXNCUCxJQUF0QixFQUE0Qi9ULGNBQTVCLEVBQTRDUSxPQUE1QyxFQUFxRHdCLE1BQXJELEVBQTZEO0FBQ2hFeEIsU0FBTyxDQUFDcVYsU0FBUixHQUFvQlQsZ0JBQWdCLENBQUNyQixJQUFELEVBQU8vVCxjQUFQLEVBQXVCUSxPQUF2QixFQUFnQ3dCLE1BQWhDLENBQXBDO0FBQ0g7QUFDTSxTQUFTdVMsY0FBVCxDQUF3QlAsTUFBeEIsRUFBZ0NoVSxjQUFoQyxFQUFnRFEsT0FBaEQsRUFBeUR3QixNQUF6RCxFQUFpRTtBQUNwRSxNQUFJLE9BQU9nUyxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDO0FBQzVCeFQsV0FBTyxDQUFDc1YsV0FBUixHQUFzQnJYLDJFQUFBLENBQTRCdVYsTUFBNUIsRUFBb0MsQ0FBcEMsRUFBdUNoVSxjQUF2QyxDQUF0QjtBQUNBUSxXQUFPLENBQUN1VixTQUFSLEdBQW9CLENBQXBCO0FBQ0gsR0FIRCxNQUlLLElBQUksUUFBTy9CLE1BQVAsTUFBa0IsUUFBbEIsSUFBOEJBLE1BQU0sQ0FBQ0QsSUFBekMsRUFBK0M7QUFDaER2VCxXQUFPLENBQUNzVixXQUFSLEdBQXNCVixnQkFBZ0IsQ0FBQ3BCLE1BQU0sQ0FBQ0QsSUFBUixFQUFjL1QsY0FBZCxFQUE4QlEsT0FBOUIsRUFBdUN3QixNQUF2QyxDQUF0QztBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0Q7QUFDQTtBQUNBO0FBQ08sSUFBSWdVLGFBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxhQUFWLEVBQXlCO0FBQ3RCLFdBQVNuRSxlQUFULENBQXlCUCxJQUF6QixFQUErQnRFLE1BQS9CLEVBQXVDO0FBQUEsa0JBQ2NzRSxJQURkLENBQzNCN1EsQ0FEMkI7QUFBQSxRQUMzQkEsQ0FEMkIsd0JBQ3ZCLENBRHVCO0FBQUEsa0JBQ2M2USxJQURkLENBQ3BCNVEsQ0FEb0I7QUFBQSxRQUNwQkEsQ0FEb0Isd0JBQ2hCLENBRGdCO0FBQUEsc0JBQ2M0USxJQURkLENBQ2JsUCxLQURhO0FBQUEsUUFDYkEsS0FEYSw0QkFDTCxDQURLO0FBQUEsdUJBQ2NrUCxJQURkLENBQ0ZqUCxNQURFO0FBQUEsUUFDRkEsTUFERSw2QkFDTyxDQURQO0FBRW5DaUssc0RBQUEsQ0FBWVUsTUFBWixFQUFvQnZNLENBQXBCLEVBQXVCQyxDQUF2QjtBQUNBNEwsc0RBQUEsQ0FBWVUsTUFBWixFQUFvQnZNLENBQUMsR0FBRzJCLEtBQXhCLEVBQStCMUIsQ0FBQyxHQUFHMkIsTUFBbkM7QUFDSDs7QUFDRDJULGVBQWEsQ0FBQ25FLGVBQWQsR0FBZ0NBLGVBQWhDO0FBQ0gsQ0FQRCxFQU9HbUUsYUFBYSxLQUFLQSxhQUFhLEdBQUcsRUFBckIsQ0FQaEI7O0FBUU8sSUFBSUMsV0FBSjs7QUFDUCxDQUFDLFVBQVVBLFdBQVYsRUFBdUI7QUFDcEIsV0FBU3BFLGVBQVQsQ0FBeUJQLElBQXpCLEVBQStCdEUsTUFBL0IsRUFBdUM7QUFBQSxtQkFDcUJzRSxJQURyQixDQUMzQjdRLENBRDJCO0FBQUEsUUFDM0JBLENBRDJCLHlCQUN2QixDQUR1QjtBQUFBLG1CQUNxQjZRLElBRHJCLENBQ3BCNVEsQ0FEb0I7QUFBQSxRQUNwQkEsQ0FEb0IseUJBQ2hCLENBRGdCO0FBQUEsdUJBQ3FCNFEsSUFEckIsQ0FDYmtCLE1BRGE7QUFBQSxRQUNiQSxNQURhLDZCQUNKLENBREk7QUFBQSxRQUNEQyxPQURDLEdBQ3FCbkIsSUFEckIsQ0FDRG1CLE9BREM7QUFBQSxRQUNRQyxPQURSLEdBQ3FCcEIsSUFEckIsQ0FDUW9CLE9BRFI7QUFFbkMsUUFBTWpFLEVBQUUsR0FBR2dFLE9BQUgsYUFBR0EsT0FBSCxjQUFHQSxPQUFILEdBQWNELE1BQXRCO0FBQ0EsUUFBTTlELEVBQUUsR0FBR2dFLE9BQUgsYUFBR0EsT0FBSCxjQUFHQSxPQUFILEdBQWNGLE1BQXRCO0FBQ0FsRyxzREFBQSxDQUFZVSxNQUFaLEVBQW9Cdk0sQ0FBQyxHQUFHZ08sRUFBeEIsRUFBNEIvTixDQUFDLEdBQUdnTyxFQUFoQztBQUNBcEMsc0RBQUEsQ0FBWVUsTUFBWixFQUFvQnZNLENBQUMsR0FBR2dPLEVBQXhCLEVBQTRCL04sQ0FBQyxHQUFHZ08sRUFBaEM7QUFDSDs7QUFDRHVILGFBQVcsQ0FBQ3BFLGVBQVosR0FBOEJBLGVBQTlCO0FBQ0gsQ0FURCxFQVNHb0UsV0FBVyxLQUFLQSxXQUFXLEdBQUcsRUFBbkIsQ0FUZDs7QUFVTyxJQUFJQyxRQUFKOztBQUNQLENBQUMsVUFBVUEsUUFBVixFQUFvQjtBQUNqQixXQUFTckUsZUFBVCxDQUF5QnNFLFFBQXpCLEVBQW1DbkosTUFBbkMsRUFBMkM7QUFBQSxRQUMvQnNFLElBRCtCLEdBQ3RCNkUsUUFEc0IsQ0FDL0I3RSxJQUQrQjs7QUFFdkMsUUFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzFCOEUseUVBQUEsQ0FBK0I5RSxJQUEvQixFQUFxQ3RFLE1BQXJDO0FBQ0gsS0FGRCxNQUdLLElBQUl4SixLQUFLLENBQUNDLE9BQU4sQ0FBYzZOLElBQWQsQ0FBSixFQUF5QjtBQUMxQixXQUFLLElBQUlyUixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHcVIsSUFBSSxDQUFDcFIsTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsWUFBTThTLE9BQU8sR0FBR3pCLElBQUksQ0FBQ3JSLENBQUQsQ0FBcEI7QUFDQW9XLHNFQUFBLENBQTRCdEQsT0FBNUIsRUFBcUMvRixNQUFyQztBQUNIO0FBQ0o7QUFDSjs7QUFDRGtKLFVBQVEsQ0FBQ3JFLGVBQVQsR0FBMkJBLGVBQTNCO0FBQ0gsQ0FkRCxFQWNHcUUsUUFBUSxLQUFLQSxRQUFRLEdBQUcsRUFBaEIsQ0FkWDs7QUFlTyxJQUFJSSxZQUFKOztBQUNQLENBQUMsVUFBVUEsWUFBVixFQUF3QjtBQUNyQixXQUFTekUsZUFBVCxDQUF5QlAsSUFBekIsRUFBK0J0RSxNQUEvQixFQUF1QztBQUFBLFFBQzNCdEosSUFEMkIsR0FDbEI0TixJQURrQixDQUMzQjVOLElBRDJCOztBQUVuQyxZQUFRQSxJQUFSO0FBQ0ksV0FBSyxXQUFMO0FBQ0lzUyxxQkFBYSxDQUFDbkUsZUFBZCxDQUE4QlAsSUFBOUIsRUFBb0N0RSxNQUFwQztBQUNBOztBQUNKLFdBQUssU0FBTDtBQUNJaUosbUJBQVcsQ0FBQ3BFLGVBQVosQ0FBNEJQLElBQTVCLEVBQWtDdEUsTUFBbEM7QUFDQTs7QUFDSixXQUFLLE1BQUw7QUFDSWtKLGdCQUFRLENBQUNyRSxlQUFULENBQXlCUCxJQUF6QixFQUErQnRFLE1BQS9CO0FBQ0E7O0FBQ0o7QUFDSTtBQVhSO0FBYUg7O0FBQ0RzSixjQUFZLENBQUN6RSxlQUFiLEdBQStCQSxlQUEvQjtBQUNILENBbEJELEVBa0JHeUUsWUFBWSxLQUFLQSxZQUFZLEdBQUcsRUFBcEIsQ0FsQmYsRTs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDTyxJQUFJRCxXQUFKOztBQUNQLENBQUMsVUFBVUEsV0FBVixFQUF1QjtBQUNwQixXQUFTeEUsZUFBVCxDQUF5QnVDLElBQXpCLEVBQStCcEgsTUFBL0IsRUFBdUM7QUFBQTs7QUFBQSxRQUMzQnRKLElBRDJCLEdBQ2xCMFEsSUFEa0IsQ0FDM0IxUSxJQUQyQjs7QUFFbkMsWUFBUUEsSUFBUjtBQUNJLFdBQUssUUFBTDtBQUNBLFdBQUssUUFBTDtBQUNJLFlBQU1zUCxNQUFNLEdBQUdvQixJQUFmO0FBQ0E5SCwwREFBQSxDQUFZVSxNQUFaLGVBQW9CZ0csTUFBTSxDQUFDdlMsQ0FBM0IsaURBQWdDLENBQWhDLGVBQW1DdVMsTUFBTSxDQUFDdFMsQ0FBMUMsaURBQStDLENBQS9DO0FBQ0E7O0FBQ0osV0FBSyxTQUFMO0FBQ0ksWUFBTXdTLE9BQU8sR0FBR2tCLElBQWhCO0FBQ0E5SCwwREFBQSxDQUFZVSxNQUFaLGlCQUFvQmtHLE9BQU8sQ0FBQ0UsRUFBNUIscURBQWtDLENBQWxDLGlCQUFxQ0YsT0FBTyxDQUFDRyxFQUE3QyxxREFBbUQsQ0FBbkQ7QUFDQS9HLDBEQUFBLENBQVlVLE1BQVosZ0JBQW9Ca0csT0FBTyxDQUFDelMsQ0FBNUIsbURBQWlDLENBQWpDLGdCQUFvQ3lTLE9BQU8sQ0FBQ3hTLENBQTVDLG1EQUFpRCxDQUFqRDtBQUNBOztBQUNKLFdBQUssY0FBTDtBQUNJLFlBQU00UyxZQUFZLEdBQUdjLElBQXJCO0FBQ0E5SCwwREFBQSxDQUFZVSxNQUFaLHNCQUFvQnNHLFlBQVksQ0FBQ0YsRUFBakMsK0RBQXVDLENBQXZDLHNCQUEwQ0UsWUFBWSxDQUFDRCxFQUF2RCwrREFBNkQsQ0FBN0Q7QUFDQS9HLDBEQUFBLENBQVlVLE1BQVosc0JBQW9Cc0csWUFBWSxDQUFDRSxFQUFqQywrREFBdUMsQ0FBdkMsc0JBQTBDRixZQUFZLENBQUNHLEVBQXZELCtEQUE2RCxDQUE3RDtBQUNBbkgsMERBQUEsQ0FBWVUsTUFBWixxQkFBb0JzRyxZQUFZLENBQUM3UyxDQUFqQyw2REFBc0MsQ0FBdEMscUJBQXlDNlMsWUFBWSxDQUFDNVMsQ0FBdEQsNkRBQTJELENBQTNEO0FBQ0E7O0FBQ0o7QUFDSTtBQWxCUjtBQW9CSDs7QUFDRDJWLGFBQVcsQ0FBQ3hFLGVBQVosR0FBOEJBLGVBQTlCO0FBQ0gsQ0F6QkQsRUF5Qkd3RSxXQUFXLEtBQUtBLFdBQVcsR0FBRyxFQUFuQixDQXpCZCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQSxJQUFNRSxhQUFhLEdBQUc7QUFDbEJDLEdBQUMsRUFBRSxDQURlO0FBRWxCQyxHQUFDLEVBQUUsQ0FGZTtBQUdsQkMsR0FBQyxFQUFFLENBSGU7QUFJbEJDLEdBQUMsRUFBRSxDQUplO0FBS2xCQyxHQUFDLEVBQUUsQ0FMZTtBQU1sQkMsR0FBQyxFQUFFLENBTmU7QUFPbEJDLEdBQUMsRUFBRSxDQVBlO0FBUWxCQyxHQUFDLEVBQUUsQ0FSZTtBQVNsQkMsR0FBQyxFQUFFLENBVGU7QUFVbEJ2TCxHQUFDLEVBQUUsQ0FWZTtBQVdsQndMLEdBQUMsRUFBRSxDQVhlO0FBWWxCQyxHQUFDLEVBQUUsQ0FaZTtBQWFsQkMsR0FBQyxFQUFFLENBYmU7QUFjbEJDLEdBQUMsRUFBRSxDQWRlO0FBZWxCQyxHQUFDLEVBQUUsQ0FmZTtBQWdCbEJDLEdBQUMsRUFBRTtBQWhCZSxDQUF0QjtBQWtCTyxJQUFNQyxvQkFBYjtBQUNJLGtDQUFjO0FBQUE7O0FBQ1YsU0FBS25ELElBQUwsR0FBWSxFQUFaO0FBQ0EsU0FBS3JCLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS3lFLE1BQUwsR0FBYyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBQWQ7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLHFCQUFwQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsV0FBbkI7QUFDSDs7QUFQTDtBQUFBO0FBQUEsV0FRSSxpQkFBUXRELElBQVIsRUFBYztBQUNWLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFdBQUtxRCxZQUFMLENBQWtCRSxTQUFsQixHQUE4QixDQUE5QjtBQUNIO0FBWEw7QUFBQTtBQUFBLFdBWUksc0JBQWE7QUFDVCxhQUFPLEtBQUs1RSxPQUFaO0FBQ0g7QUFkTDtBQUFBO0FBQUEsV0FlSSxxQkFBWTtBQUNSLGFBQU8sS0FBS3lFLE1BQVo7QUFDSDtBQWpCTDtBQUFBO0FBQUEsV0FrQkksb0JBQVc7QUFDUCxVQUFNSSxZQUFZLEdBQUcsS0FBS0gsWUFBTCxDQUFrQkksSUFBbEIsQ0FBdUIsS0FBS3pELElBQTVCLENBQXJCOztBQUNBLFVBQUl3RCxZQUFKLEVBQWtCO0FBQ2QsYUFBSzdFLE9BQUwsR0FBZTZFLFlBQVksQ0FBQyxDQUFELENBQTNCO0FBQ0EsWUFBTXZSLEtBQUssR0FBR2tRLGFBQWEsQ0FBQyxLQUFLeEQsT0FBTixDQUEzQjtBQUNBLGFBQUsyRSxXQUFMLENBQWlCQyxTQUFqQixHQUE2QkMsWUFBWSxDQUFDRSxLQUExQzs7QUFDQSxhQUFLLElBQUk3WCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHb0csS0FBcEIsRUFBMkJwRyxDQUFDLEVBQTVCLEVBQWdDO0FBQzVCLGNBQU04WCxXQUFXLEdBQUcsS0FBS0wsV0FBTCxDQUFpQkcsSUFBakIsQ0FBc0IsS0FBS3pELElBQTNCLENBQXBCOztBQUNBLGNBQUkyRCxXQUFKLEVBQWlCO0FBQ2IsaUJBQUtQLE1BQUwsQ0FBWXZYLENBQVosSUFBaUIrWCxVQUFVLENBQUNELFdBQVcsQ0FBQyxDQUFELENBQVosQ0FBM0I7QUFDSCxXQUZELE1BR0s7QUFDRDtBQUNIO0FBQ0o7QUFDSixPQWJELE1BY0s7QUFDRCxhQUFLaEYsT0FBTCxHQUFlLElBQWY7QUFDSDtBQUNKO0FBckNMOztBQUFBO0FBQUE7QUF1Q08sSUFBTStCLG9CQUFiO0FBQ0ksa0NBQWM7QUFBQTs7QUFDVixTQUFLbUQsTUFBTCxHQUFjLElBQUlWLG9CQUFKLEVBQWQ7QUFDQSxTQUFLeEUsT0FBTCxHQUFlO0FBQUVyUCxVQUFJLEVBQUU7QUFBUixLQUFmO0FBQ0EsU0FBS3dVLGFBQUwsR0FBcUIsS0FBckI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0g7O0FBUEw7QUFBQTtBQUFBLFdBUUksaUJBQVFoRSxJQUFSLEVBQWM7QUFDVixXQUFLNkQsTUFBTCxDQUFZbEQsT0FBWixDQUFvQlgsSUFBcEI7QUFDQSxXQUFLK0QsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFdBQUtGLGFBQUwsR0FBcUIsS0FBckI7QUFDSDtBQWJMO0FBQUE7QUFBQSxXQWNJLHNCQUFhO0FBQ1QsYUFBTyxLQUFLQSxhQUFMLEdBQXFCLEtBQUtuRixPQUExQixHQUFvQyxJQUEzQztBQUNIO0FBaEJMO0FBQUE7QUFBQSxXQWlCSSxvQkFBVztBQUNQLFdBQUtrRixNQUFMLENBQVlqRCxRQUFaO0FBQ0EsV0FBS3FELEtBQUw7QUFDQSxhQUFPLEtBQUtILGFBQVo7QUFDSDtBQXJCTDtBQUFBO0FBQUEsV0FzQkksaUJBQVE7QUFDSixVQUFNbkYsT0FBTyxHQUFHLEtBQUtrRixNQUFMLENBQVloRCxVQUFaLEVBQWhCO0FBQ0EsV0FBS2lELGFBQUwsR0FBcUIsQ0FBQyxDQUFDbkYsT0FBdkI7O0FBQ0EsVUFBSSxDQUFDLEtBQUttRixhQUFWLEVBQXlCO0FBQ3JCO0FBQ0g7O0FBQ0QsVUFBTVYsTUFBTSxHQUFHLEtBQUtTLE1BQUwsQ0FBWUssU0FBWixFQUFmOztBQU5JLG1DQU84QmQsTUFQOUI7QUFBQSxVQU9HZSxFQVBIO0FBQUEsVUFPT0MsRUFQUDtBQUFBLFVBT1dDLEVBUFg7QUFBQSxVQU9lQyxFQVBmO0FBQUEsVUFPbUJDLEVBUG5CO0FBQUEsVUFPdUJDLEVBUHZCOztBQVFKLFVBQUl4RixFQUFFLEdBQUcsQ0FBVDtBQUNBLFVBQUlDLEVBQUUsR0FBRyxDQUFUOztBQUNBLGNBQVFOLE9BQVI7QUFDSSxhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLQSxPQUFMLENBQWFyUCxJQUFiLEdBQW9CLFFBQXBCO0FBQ0EsZ0JBQU1zUCxNQUFNLEdBQUcsS0FBS0QsT0FBcEI7QUFDQUMsa0JBQU0sQ0FBQ3ZTLENBQVAsR0FBVzhYLEVBQVg7QUFDQXZGLGtCQUFNLENBQUN0UyxDQUFQLEdBQVc4WCxFQUFYO0FBQ0EsaUJBQUtMLEtBQUwsR0FBYW5GLE1BQU0sQ0FBQ3ZTLENBQXBCO0FBQ0EsaUJBQUsyWCxLQUFMLEdBQWFwRixNQUFNLENBQUN0UyxDQUFwQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS3FTLE9BQUwsQ0FBYXJQLElBQWIsR0FBb0IsUUFBcEI7QUFDQSxnQkFBTXNQLE9BQU0sR0FBRyxLQUFLRCxPQUFwQjtBQUNBQyxtQkFBTSxDQUFDdlMsQ0FBUCxHQUFXOFgsRUFBRSxHQUFHLEtBQUtKLEtBQXJCO0FBQ0FuRixtQkFBTSxDQUFDdFMsQ0FBUCxHQUFXOFgsRUFBRSxHQUFHLEtBQUtKLEtBQXJCO0FBQ0EsaUJBQUtELEtBQUwsR0FBYW5GLE9BQU0sQ0FBQ3ZTLENBQXBCO0FBQ0EsaUJBQUsyWCxLQUFMLEdBQWFwRixPQUFNLENBQUN0UyxDQUFwQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS3FTLE9BQUwsQ0FBYXJQLElBQWIsR0FBb0IsUUFBcEI7QUFDQSxnQkFBTXVQLE1BQU0sR0FBRyxLQUFLRixPQUFwQjtBQUNBRSxrQkFBTSxDQUFDeFMsQ0FBUCxHQUFXOFgsRUFBWDtBQUNBdEYsa0JBQU0sQ0FBQ3ZTLENBQVAsR0FBVzhYLEVBQVg7QUFDQSxpQkFBS0wsS0FBTCxHQUFhbEYsTUFBTSxDQUFDeFMsQ0FBcEI7QUFDQSxpQkFBSzJYLEtBQUwsR0FBYW5GLE1BQU0sQ0FBQ3ZTLENBQXBCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLcVMsT0FBTCxDQUFhclAsSUFBYixHQUFvQixRQUFwQjtBQUNBLGdCQUFNdVAsT0FBTSxHQUFHLEtBQUtGLE9BQXBCO0FBQ0FFLG1CQUFNLENBQUN4UyxDQUFQLEdBQVc4WCxFQUFFLEdBQUcsS0FBS0osS0FBckI7QUFDQWxGLG1CQUFNLENBQUN2UyxDQUFQLEdBQVc4WCxFQUFFLEdBQUcsS0FBS0osS0FBckI7QUFDQSxpQkFBS0QsS0FBTCxHQUFhbEYsT0FBTSxDQUFDeFMsQ0FBcEI7QUFDQSxpQkFBSzJYLEtBQUwsR0FBYW5GLE9BQU0sQ0FBQ3ZTLENBQXBCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLcVMsT0FBTCxDQUFhclAsSUFBYixHQUFvQixRQUFwQjtBQUNBLGdCQUFNdVAsUUFBTSxHQUFHLEtBQUtGLE9BQXBCO0FBQ0FFLG9CQUFNLENBQUN4UyxDQUFQLEdBQVc4WCxFQUFYO0FBQ0F0RixvQkFBTSxDQUFDdlMsQ0FBUCxHQUFXLEtBQUswWCxLQUFoQjtBQUNBLGlCQUFLRCxLQUFMLEdBQWFsRixRQUFNLENBQUN4UyxDQUFwQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS3NTLE9BQUwsQ0FBYXJQLElBQWIsR0FBb0IsUUFBcEI7QUFDQSxnQkFBTXVQLFFBQU0sR0FBRyxLQUFLRixPQUFwQjtBQUNBRSxvQkFBTSxDQUFDeFMsQ0FBUCxHQUFXOFgsRUFBRSxHQUFHLEtBQUtKLEtBQXJCO0FBQ0FsRixvQkFBTSxDQUFDdlMsQ0FBUCxHQUFXLEtBQUswWCxLQUFoQjtBQUNBLGlCQUFLRCxLQUFMLEdBQWFsRixRQUFNLENBQUN4UyxDQUFwQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS3NTLE9BQUwsQ0FBYXJQLElBQWIsR0FBb0IsUUFBcEI7QUFDQSxnQkFBTXVQLFFBQU0sR0FBRyxLQUFLRixPQUFwQjtBQUNBRSxvQkFBTSxDQUFDeFMsQ0FBUCxHQUFXLEtBQUswWCxLQUFoQjtBQUNBbEYsb0JBQU0sQ0FBQ3ZTLENBQVAsR0FBVzZYLEVBQVg7QUFDQSxpQkFBS0gsS0FBTCxHQUFhbkYsUUFBTSxDQUFDdlMsQ0FBcEI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUtxUyxPQUFMLENBQWFyUCxJQUFiLEdBQW9CLFFBQXBCO0FBQ0EsZ0JBQU11UCxRQUFNLEdBQUcsS0FBS0YsT0FBcEI7QUFDQUUsb0JBQU0sQ0FBQ3hTLENBQVAsR0FBVyxLQUFLMFgsS0FBaEI7QUFDQWxGLG9CQUFNLENBQUN2UyxDQUFQLEdBQVc2WCxFQUFFLEdBQUcsS0FBS0gsS0FBckI7QUFDQSxpQkFBS0EsS0FBTCxHQUFhbkYsUUFBTSxDQUFDdlMsQ0FBcEI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUtxUyxPQUFMLENBQWFyUCxJQUFiLEdBQW9CLGNBQXBCO0FBQ0EsZ0JBQU00UCxZQUFZLEdBQUcsS0FBS1AsT0FBMUI7QUFDQU8sd0JBQVksQ0FBQ0YsRUFBYixHQUFrQm1GLEVBQWxCO0FBQ0FqRix3QkFBWSxDQUFDRCxFQUFiLEdBQWtCbUYsRUFBbEI7QUFDQWxGLHdCQUFZLENBQUNFLEVBQWIsR0FBa0JpRixFQUFsQjtBQUNBbkYsd0JBQVksQ0FBQ0csRUFBYixHQUFrQmlGLEVBQWxCO0FBQ0FwRix3QkFBWSxDQUFDN1MsQ0FBYixHQUFpQmtZLEVBQWpCO0FBQ0FyRix3QkFBWSxDQUFDNVMsQ0FBYixHQUFpQmtZLEVBQWpCO0FBQ0F4RixjQUFFLEdBQUdFLFlBQVksQ0FBQzdTLENBQWIsSUFBa0I2UyxZQUFZLENBQUNFLEVBQWIsR0FBa0JGLFlBQVksQ0FBQzdTLENBQWpELENBQUw7QUFDQTRTLGNBQUUsR0FBR0MsWUFBWSxDQUFDNVMsQ0FBYixJQUFrQjRTLFlBQVksQ0FBQ0csRUFBYixHQUFrQkgsWUFBWSxDQUFDNVMsQ0FBakQsQ0FBTDtBQUNBLGlCQUFLeVgsS0FBTCxHQUFhN0UsWUFBWSxDQUFDN1MsQ0FBMUI7QUFDQSxpQkFBSzJYLEtBQUwsR0FBYTlFLFlBQVksQ0FBQzVTLENBQTFCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLcVMsT0FBTCxDQUFhclAsSUFBYixHQUFvQixjQUFwQjtBQUNBLGdCQUFNNFAsYUFBWSxHQUFHLEtBQUtQLE9BQTFCO0FBQ0FPLHlCQUFZLENBQUNGLEVBQWIsR0FBa0JtRixFQUFFLEdBQUcsS0FBS0osS0FBNUI7QUFDQTdFLHlCQUFZLENBQUNELEVBQWIsR0FBa0JtRixFQUFFLEdBQUcsS0FBS0osS0FBNUI7QUFDQTlFLHlCQUFZLENBQUNFLEVBQWIsR0FBa0JpRixFQUFFLEdBQUcsS0FBS04sS0FBNUI7QUFDQTdFLHlCQUFZLENBQUNHLEVBQWIsR0FBa0JpRixFQUFFLEdBQUcsS0FBS04sS0FBNUI7QUFDQTlFLHlCQUFZLENBQUM3UyxDQUFiLEdBQWlCa1ksRUFBRSxHQUFHLEtBQUtSLEtBQTNCO0FBQ0E3RSx5QkFBWSxDQUFDNVMsQ0FBYixHQUFpQmtZLEVBQUUsR0FBRyxLQUFLUixLQUEzQjtBQUNBaEYsY0FBRSxHQUFHRSxhQUFZLENBQUM3UyxDQUFiLElBQWtCNlMsYUFBWSxDQUFDRSxFQUFiLEdBQWtCRixhQUFZLENBQUM3UyxDQUFqRCxDQUFMO0FBQ0E0UyxjQUFFLEdBQUdDLGFBQVksQ0FBQzVTLENBQWIsSUFBa0I0UyxhQUFZLENBQUNHLEVBQWIsR0FBa0JILGFBQVksQ0FBQzVTLENBQWpELENBQUw7QUFDQSxpQkFBS3lYLEtBQUwsR0FBYTdFLGFBQVksQ0FBQzdTLENBQTFCO0FBQ0EsaUJBQUsyWCxLQUFMLEdBQWE5RSxhQUFZLENBQUM1UyxDQUExQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS3FTLE9BQUwsQ0FBYXJQLElBQWIsR0FBb0IsY0FBcEI7QUFDQSxnQkFBTTRQLGNBQVksR0FBRyxLQUFLUCxPQUExQjtBQUNBTywwQkFBWSxDQUFDRixFQUFiLEdBQWtCQSxFQUFsQjtBQUNBRSwwQkFBWSxDQUFDRCxFQUFiLEdBQWtCQSxFQUFsQjtBQUNBQywwQkFBWSxDQUFDRSxFQUFiLEdBQWtCK0UsRUFBbEI7QUFDQWpGLDBCQUFZLENBQUNHLEVBQWIsR0FBa0IrRSxFQUFsQjtBQUNBbEYsMEJBQVksQ0FBQzdTLENBQWIsR0FBaUJnWSxFQUFqQjtBQUNBbkYsMEJBQVksQ0FBQzVTLENBQWIsR0FBaUJnWSxFQUFqQjtBQUNBdEYsY0FBRSxHQUFHRSxjQUFZLENBQUM3UyxDQUFiLElBQWtCNlMsY0FBWSxDQUFDRSxFQUFiLEdBQWtCRixjQUFZLENBQUM3UyxDQUFqRCxDQUFMO0FBQ0E0UyxjQUFFLEdBQUdDLGNBQVksQ0FBQzVTLENBQWIsSUFBa0I0UyxjQUFZLENBQUNHLEVBQWIsR0FBa0JILGNBQVksQ0FBQzVTLENBQWpELENBQUw7QUFDQSxpQkFBS3lYLEtBQUwsR0FBYTdFLGNBQVksQ0FBQzdTLENBQTFCO0FBQ0EsaUJBQUsyWCxLQUFMLEdBQWE5RSxjQUFZLENBQUM1UyxDQUExQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS3FTLE9BQUwsQ0FBYXJQLElBQWIsR0FBb0IsY0FBcEI7QUFDQSxnQkFBTTRQLGNBQVksR0FBRyxLQUFLUCxPQUExQjtBQUNBTywwQkFBWSxDQUFDRixFQUFiLEdBQWtCQSxFQUFsQjtBQUNBRSwwQkFBWSxDQUFDRCxFQUFiLEdBQWtCQSxFQUFsQjtBQUNBQywwQkFBWSxDQUFDRSxFQUFiLEdBQWtCK0UsRUFBRSxHQUFHLEtBQUtKLEtBQTVCO0FBQ0E3RSwwQkFBWSxDQUFDRyxFQUFiLEdBQWtCK0UsRUFBRSxHQUFHLEtBQUtKLEtBQTVCO0FBQ0E5RSwwQkFBWSxDQUFDN1MsQ0FBYixHQUFpQmdZLEVBQUUsR0FBRyxLQUFLTixLQUEzQjtBQUNBN0UsMEJBQVksQ0FBQzVTLENBQWIsR0FBaUJnWSxFQUFFLEdBQUcsS0FBS04sS0FBM0I7QUFDQWhGLGNBQUUsR0FBR0UsY0FBWSxDQUFDN1MsQ0FBYixJQUFrQjZTLGNBQVksQ0FBQ0UsRUFBYixHQUFrQkYsY0FBWSxDQUFDN1MsQ0FBakQsQ0FBTDtBQUNBNFMsY0FBRSxHQUFHQyxjQUFZLENBQUM1UyxDQUFiLElBQWtCNFMsY0FBWSxDQUFDRyxFQUFiLEdBQWtCSCxjQUFZLENBQUM1UyxDQUFqRCxDQUFMO0FBQ0EsaUJBQUt5WCxLQUFMLEdBQWE3RSxjQUFZLENBQUM3UyxDQUExQjtBQUNBLGlCQUFLMlgsS0FBTCxHQUFhOUUsY0FBWSxDQUFDNVMsQ0FBMUI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUtxUyxPQUFMLENBQWFyUCxJQUFiLEdBQW9CLFNBQXBCO0FBQ0EsZ0JBQU13UCxPQUFPLEdBQUcsS0FBS0gsT0FBckI7QUFDQUcsbUJBQU8sQ0FBQ0UsRUFBUixHQUFhbUYsRUFBYjtBQUNBckYsbUJBQU8sQ0FBQ0csRUFBUixHQUFhbUYsRUFBYjtBQUNBdEYsbUJBQU8sQ0FBQ3pTLENBQVIsR0FBWWdZLEVBQVo7QUFDQXZGLG1CQUFPLENBQUN4UyxDQUFSLEdBQVlnWSxFQUFaO0FBQ0F0RixjQUFFLEdBQUdGLE9BQU8sQ0FBQ3pTLENBQVIsSUFBYXlTLE9BQU8sQ0FBQ0UsRUFBUixHQUFhRixPQUFPLENBQUN6UyxDQUFsQyxDQUFMO0FBQ0E0UyxjQUFFLEdBQUdILE9BQU8sQ0FBQ3hTLENBQVIsSUFBYXdTLE9BQU8sQ0FBQ0csRUFBUixHQUFhSCxPQUFPLENBQUN4UyxDQUFsQyxDQUFMO0FBQ0EsaUJBQUt5WCxLQUFMLEdBQWFqRixPQUFPLENBQUN6UyxDQUFyQjtBQUNBLGlCQUFLMlgsS0FBTCxHQUFhbEYsT0FBTyxDQUFDeFMsQ0FBckI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUtxUyxPQUFMLENBQWFyUCxJQUFiLEdBQW9CLFNBQXBCO0FBQ0EsZ0JBQU13UCxRQUFPLEdBQUcsS0FBS0gsT0FBckI7QUFDQUcsb0JBQU8sQ0FBQ0UsRUFBUixHQUFhbUYsRUFBRSxHQUFHLEtBQUtKLEtBQXZCO0FBQ0FqRixvQkFBTyxDQUFDRyxFQUFSLEdBQWFtRixFQUFFLEdBQUcsS0FBS0osS0FBdkI7QUFDQWxGLG9CQUFPLENBQUN6UyxDQUFSLEdBQVlnWSxFQUFFLEdBQUcsS0FBS04sS0FBdEI7QUFDQWpGLG9CQUFPLENBQUN4UyxDQUFSLEdBQVlnWSxFQUFFLEdBQUcsS0FBS04sS0FBdEI7QUFDQWhGLGNBQUUsR0FBR0YsUUFBTyxDQUFDelMsQ0FBUixJQUFheVMsUUFBTyxDQUFDRSxFQUFSLEdBQWFGLFFBQU8sQ0FBQ3pTLENBQWxDLENBQUw7QUFDQTRTLGNBQUUsR0FBR0gsUUFBTyxDQUFDeFMsQ0FBUixJQUFhd1MsUUFBTyxDQUFDRyxFQUFSLEdBQWFILFFBQU8sQ0FBQ3hTLENBQWxDLENBQUw7QUFDQSxpQkFBS3lYLEtBQUwsR0FBYWpGLFFBQU8sQ0FBQ3pTLENBQXJCO0FBQ0EsaUJBQUsyWCxLQUFMLEdBQWFsRixRQUFPLENBQUN4UyxDQUFyQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS3FTLE9BQUwsQ0FBYXJQLElBQWIsR0FBb0IsU0FBcEI7QUFDQSxnQkFBTXdQLFNBQU8sR0FBRyxLQUFLSCxPQUFyQjtBQUNBRyxxQkFBTyxDQUFDRSxFQUFSLEdBQWFBLEVBQWI7QUFDQUYscUJBQU8sQ0FBQ0csRUFBUixHQUFhQSxFQUFiO0FBQ0FILHFCQUFPLENBQUN6UyxDQUFSLEdBQVk4WCxFQUFaO0FBQ0FyRixxQkFBTyxDQUFDeFMsQ0FBUixHQUFZOFgsRUFBWjtBQUNBcEYsY0FBRSxHQUFHRixTQUFPLENBQUN6UyxDQUFSLElBQWF5UyxTQUFPLENBQUNFLEVBQVIsR0FBYUYsU0FBTyxDQUFDelMsQ0FBbEMsQ0FBTDtBQUNBNFMsY0FBRSxHQUFHSCxTQUFPLENBQUN4UyxDQUFSLElBQWF3UyxTQUFPLENBQUNHLEVBQVIsR0FBYUgsU0FBTyxDQUFDeFMsQ0FBbEMsQ0FBTDtBQUNBLGlCQUFLeVgsS0FBTCxHQUFhakYsU0FBTyxDQUFDelMsQ0FBckI7QUFDQSxpQkFBSzJYLEtBQUwsR0FBYWxGLFNBQU8sQ0FBQ3hTLENBQXJCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLcVMsT0FBTCxDQUFhclAsSUFBYixHQUFvQixTQUFwQjtBQUNBLGdCQUFNd1AsU0FBTyxHQUFHLEtBQUtILE9BQXJCO0FBQ0FHLHFCQUFPLENBQUNFLEVBQVIsR0FBYUEsRUFBYjtBQUNBRixxQkFBTyxDQUFDRyxFQUFSLEdBQWFBLEVBQWI7QUFDQUgscUJBQU8sQ0FBQ3pTLENBQVIsR0FBWThYLEVBQUUsR0FBRyxLQUFLSixLQUF0QjtBQUNBakYscUJBQU8sQ0FBQ3hTLENBQVIsR0FBWThYLEVBQUUsR0FBRyxLQUFLSixLQUF0QjtBQUNBaEYsY0FBRSxHQUFHRixTQUFPLENBQUN6UyxDQUFSLElBQWF5UyxTQUFPLENBQUNFLEVBQVIsR0FBYUYsU0FBTyxDQUFDelMsQ0FBbEMsQ0FBTDtBQUNBNFMsY0FBRSxHQUFHSCxTQUFPLENBQUN4UyxDQUFSLElBQWF3UyxTQUFPLENBQUNHLEVBQVIsR0FBYUgsU0FBTyxDQUFDeFMsQ0FBbEMsQ0FBTDtBQUNBLGlCQUFLeVgsS0FBTCxHQUFhakYsU0FBTyxDQUFDelMsQ0FBckI7QUFDQSxpQkFBSzJYLEtBQUwsR0FBYWxGLFNBQU8sQ0FBQ3hTLENBQXJCO0FBQ0g7QUFDRDs7QUFDSjtBQUNJO0FBdE1SO0FBd01IO0FBeE9MOztBQUFBO0FBQUE7QUEwT0EsSUFBTW1VLE1BQU0sR0FBRyxJQUFJQyxvQkFBSixFQUFmO0FBQ08sSUFBSXNCLGNBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxjQUFWLEVBQTBCO0FBQ3ZCLFdBQVN2RSxlQUFULENBQXlCdUMsSUFBekIsRUFBK0JwSCxNQUEvQixFQUF1QztBQUNuQzZILFVBQU0sQ0FBQ0UsT0FBUCxDQUFlWCxJQUFmOztBQUNBLFdBQU9TLE1BQU0sQ0FBQ0csUUFBUCxFQUFQLEVBQTBCO0FBQ3RCLFVBQU1qQyxPQUFPLEdBQUc4QixNQUFNLENBQUNJLFVBQVAsRUFBaEI7O0FBQ0EsVUFBSWxDLE9BQUosRUFBYTtBQUNUc0Qsc0VBQUEsQ0FBNEJ0RCxPQUE1QixFQUFxQy9GLE1BQXJDO0FBQ0g7QUFDSjtBQUNKOztBQUNEb0osZ0JBQWMsQ0FBQ3ZFLGVBQWYsR0FBaUNBLGVBQWpDO0FBQ0gsQ0FYRCxFQVdHdUUsY0FBYyxLQUFLQSxjQUFjLEdBQUcsRUFBdEIsQ0FYakIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3RTcUJ5QyxRO0FBQ2pCLG9CQUFZcEUsS0FBWixFQUFtQjtBQUFBOztBQUNmLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNIOzs7O1dBQ0QscUJBQWdDO0FBQUEsVUFBdEI5VixLQUFzQix1RUFBZCxDQUFjO0FBQUEsVUFBWEMsS0FBVyx1RUFBSCxDQUFHO0FBQzVCLFdBQUttVixJQUFMLEdBQVk7QUFDUnJRLFlBQUksRUFBRSxPQURFO0FBRVIvRSxhQUFLLEVBQUxBLEtBRlE7QUFHUkMsYUFBSyxFQUFMQTtBQUhRLE9BQVo7QUFLSDs7O1dBQ0QseUJBQWdCME0sR0FBaEIsRUFBcUIvSyxNQUFyQixFQUE0RDtBQUFBLFVBQS9CYyxNQUErQix1RUFBdEIsSUFBc0I7QUFBQSxVQUFoQnlYLE1BQWdCLHVFQUFQLEtBQU87QUFDeEQsV0FBSy9FLElBQUwsR0FBWTtBQUNSclEsWUFBSSxFQUFFLFFBREU7QUFFUjRILFdBQUcsRUFBSEEsR0FGUTtBQUdSL0ssY0FBTSxFQUFOQSxNQUhRO0FBSVJjLGNBQU0sRUFBTkEsTUFKUTtBQUtSeVgsY0FBTSxFQUFOQTtBQUxRLE9BQVo7QUFPSDs7O1dBQ0QsMkJBQWtCcFYsSUFBbEIsRUFBd0IvRSxLQUF4QixFQUErQkMsS0FBL0IsRUFBc0N3QixLQUF0QyxFQUE2Q0csTUFBN0MsRUFBb0g7QUFBQSxVQUEvRHdZLE1BQStELHVFQUF0RCxRQUFzRDtBQUFBLFVBQTVDQyxhQUE0Qyx1RUFBNUIsS0FBNEI7QUFBQSxVQUFyQkMsZUFBcUIsdUVBQUgsQ0FBRztBQUNoSCxXQUFLbEYsSUFBTCxHQUFZO0FBQ1JyUSxZQUFJLEVBQUpBLElBRFE7QUFFUi9FLGFBQUssRUFBTEEsS0FGUTtBQUdSQyxhQUFLLEVBQUxBLEtBSFE7QUFJUndCLGFBQUssRUFBTEEsS0FKUTtBQUtSRyxjQUFNLEVBQU5BLE1BTFE7QUFNUndZLGNBQU0sRUFBTkEsTUFOUTtBQU9SQyxxQkFBYSxFQUFiQSxhQVBRO0FBUVJDLHVCQUFlLEVBQWZBO0FBUlEsT0FBWjtBQVVIOzs7V0FDRCxxQkFBMkk7QUFBQSxVQUFqSW5KLFNBQWlJLHVFQUFySCxDQUFxSDtBQUFBLFVBQWxIblIsS0FBa0gsdUVBQTFHLENBQTBHO0FBQUEsVUFBdkdDLEtBQXVHLHVFQUEvRixDQUErRjtBQUFBLFVBQTVGc2EsWUFBNEYsdUVBQTdFLEtBQTZFO0FBQUEsVUFBdEVDLFNBQXNFLHVFQUExRCxNQUEwRDtBQUFBLFVBQWxEQyxJQUFrRCx1RUFBM0MsT0FBMkM7QUFBQSxVQUFsQ0MsTUFBa0MsdUVBQXpCLE9BQXlCO0FBQUEsVUFBaEJDLFVBQWdCLHVFQUFILENBQUc7QUFDdkksV0FBS3RGLE1BQUwsR0FBYztBQUNWbEUsaUJBQVMsRUFBVEEsU0FEVTtBQUVWb0osb0JBQVksRUFBWkEsWUFGVTtBQUdWQyxpQkFBUyxFQUFUQSxTQUhVO0FBSVZDLFlBQUksRUFBSkEsSUFKVTtBQUtWQyxjQUFNLEVBQU5BLE1BTFU7QUFNVkMsa0JBQVUsRUFBVkEsVUFOVTtBQU9WdkYsWUFBSSxFQUFFO0FBQ0ZyUSxjQUFJLEVBQUUsT0FESjtBQUVGL0UsZUFBSyxFQUFMQSxLQUZFO0FBR0ZDLGVBQUssRUFBTEE7QUFIRTtBQVBJLE9BQWQ7QUFhSDs7O1dBQ0QsMkJBQWtCOEUsSUFBbEIsRUFBd0IvRSxLQUF4QixFQUErQkMsS0FBL0IsRUFBc0N3QixLQUF0QyxFQUE2Q0csTUFBN0MsRUFBb0g7QUFBQSxVQUEvRHdZLE1BQStELHVFQUF0RCxRQUFzRDtBQUFBLFVBQTVDQyxhQUE0Qyx1RUFBNUIsS0FBNEI7QUFBQSxVQUFyQkMsZUFBcUIsdUVBQUgsQ0FBRzs7QUFDaEgsVUFBSSxDQUFDLEtBQUtqRixNQUFWLEVBQWtCO0FBQ2Q7QUFDSDs7QUFDRCxXQUFLQSxNQUFMLENBQVlELElBQVosR0FBbUI7QUFDZnJRLFlBQUksRUFBSkEsSUFEZTtBQUVmL0UsYUFBSyxFQUFMQSxLQUZlO0FBR2ZDLGFBQUssRUFBTEEsS0FIZTtBQUlmd0IsYUFBSyxFQUFMQSxLQUplO0FBS2ZHLGNBQU0sRUFBTkEsTUFMZTtBQU1md1ksY0FBTSxFQUFOQSxNQU5lO0FBT2ZDLHFCQUFhLEVBQWJBLGFBUGU7QUFRZkMsdUJBQWUsRUFBZkE7QUFSZSxPQUFuQjtBQVVIOzs7V0FDRCx5QkFBZ0IzTixHQUFoQixFQUFxQi9LLE1BQXJCLEVBQTREO0FBQUEsVUFBL0JjLE1BQStCLHVFQUF0QixJQUFzQjtBQUFBLFVBQWhCeVgsTUFBZ0IsdUVBQVAsS0FBTzs7QUFDeEQsVUFBSSxDQUFDLEtBQUs5RSxNQUFWLEVBQWtCO0FBQ2Q7QUFDSDs7QUFDRCxXQUFLQSxNQUFMLENBQVlELElBQVosR0FBbUI7QUFDZnJRLFlBQUksRUFBRSxRQURTO0FBRWY0SCxXQUFHLEVBQUhBLEdBRmU7QUFHZi9LLGNBQU0sRUFBTkEsTUFIZTtBQUlmYyxjQUFNLEVBQU5BLE1BSmU7QUFLZnlYLGNBQU0sRUFBTkE7QUFMZSxPQUFuQjtBQU9IOzs7V0FDRCxnQkFBT3JZLENBQVAsRUFBVUMsQ0FBVixFQUFhO0FBQ1QsVUFBTTBULElBQUksR0FBRyxLQUFLekIsU0FBTCxFQUFiO0FBQ0F5QixVQUFJLENBQUN0UyxJQUFMLENBQVU7QUFBRTRCLFlBQUksRUFBRSxRQUFSO0FBQWtCakQsU0FBQyxFQUFEQSxDQUFsQjtBQUFxQkMsU0FBQyxFQUFEQTtBQUFyQixPQUFWO0FBQ0g7OztXQUNELGdCQUFPRCxDQUFQLEVBQVVDLENBQVYsRUFBYTtBQUNULFVBQU0wVCxJQUFJLEdBQUcsS0FBS21GLE9BQUwsRUFBYjs7QUFDQSxVQUFJLENBQUNuRixJQUFMLEVBQVc7QUFDUDtBQUNIOztBQUNEQSxVQUFJLENBQUN0UyxJQUFMLENBQVU7QUFBRTRCLFlBQUksRUFBRSxRQUFSO0FBQWtCakQsU0FBQyxFQUFEQSxDQUFsQjtBQUFxQkMsU0FBQyxFQUFEQTtBQUFyQixPQUFWO0FBQ0g7OztXQUNELGlCQUFRMFMsRUFBUixFQUFZQyxFQUFaLEVBQWdCNVMsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCO0FBQ2xCLFVBQU0wVCxJQUFJLEdBQUcsS0FBS21GLE9BQUwsRUFBYjs7QUFDQSxVQUFJLENBQUNuRixJQUFMLEVBQVc7QUFDUDtBQUNIOztBQUNEQSxVQUFJLENBQUN0UyxJQUFMLENBQVU7QUFDTjRCLFlBQUksRUFBRSxTQURBO0FBQ1cwUCxVQUFFLEVBQUZBLEVBRFg7QUFDZUMsVUFBRSxFQUFGQSxFQURmO0FBQ21CNVMsU0FBQyxFQUFEQSxDQURuQjtBQUNzQkMsU0FBQyxFQUFEQTtBQUR0QixPQUFWO0FBR0g7OztXQUNELHNCQUFhMFMsRUFBYixFQUFpQkMsRUFBakIsRUFBcUJHLEVBQXJCLEVBQXlCQyxFQUF6QixFQUE2QmhULENBQTdCLEVBQWdDQyxDQUFoQyxFQUFtQztBQUMvQixVQUFNMFQsSUFBSSxHQUFHLEtBQUttRixPQUFMLEVBQWI7O0FBQ0EsVUFBSSxDQUFDbkYsSUFBTCxFQUFXO0FBQ1A7QUFDSDs7QUFDREEsVUFBSSxDQUFDdFMsSUFBTCxDQUFVO0FBQ040QixZQUFJLEVBQUUsU0FEQTtBQUNXMFAsVUFBRSxFQUFGQSxFQURYO0FBQ2VDLFVBQUUsRUFBRkEsRUFEZjtBQUNtQkcsVUFBRSxFQUFGQSxFQURuQjtBQUN1QkMsVUFBRSxFQUFGQSxFQUR2QjtBQUMyQmhULFNBQUMsRUFBREEsQ0FEM0I7QUFDOEJDLFNBQUMsRUFBREE7QUFEOUIsT0FBVjtBQUdIOzs7V0FDRCx1QkFBY0QsQ0FBZCxFQUFpQkMsQ0FBakIsRUFBb0IwQixLQUFwQixFQUEyQkMsTUFBM0IsRUFBd0U7QUFBQSxVQUFyQ21YLFlBQXFDLHVFQUF0QixDQUFzQjtBQUFBLFVBQW5CQyxhQUFtQix1RUFBSCxDQUFHO0FBQ3BFLFVBQU1yRixJQUFJLEdBQUcsS0FBS3pCLFNBQUwsRUFBYjtBQUNBLFVBQU0rRyxDQUFDLEdBQUdGLFlBQVY7QUFDQSxVQUFNM0MsQ0FBQyxHQUFHNEMsYUFBVjtBQUNBLFVBQU1FLENBQUMsR0FBRyxTQUFWO0FBQ0EsVUFBTUMsRUFBRSxHQUFJRixDQUFDLEdBQUcsQ0FBTCxHQUFVQyxDQUFyQjtBQUNBLFVBQU1FLEVBQUUsR0FBSWhELENBQUMsR0FBRyxDQUFMLEdBQVU4QyxDQUFyQjtBQUNBLFVBQU1HLEVBQUUsR0FBR3JaLENBQUMsR0FBR2laLENBQWY7QUFDQSxVQUFNSyxFQUFFLEdBQUdyWixDQUFDLEdBQUdtVyxDQUFmO0FBQ0EsVUFBTW1ELEVBQUUsR0FBR3ZaLENBQUMsR0FBR2laLENBQUMsR0FBRyxDQUFuQjtBQUNBLFVBQU1PLEVBQUUsR0FBR3ZaLENBQUMsR0FBR21XLENBQUMsR0FBRyxDQUFuQjtBQUNBLFVBQU03RyxFQUFFLEdBQUc1TixLQUFLLEdBQUdzWCxDQUFuQjtBQUNBLFVBQU16SixFQUFFLEdBQUc1TixNQUFNLEdBQUd3VSxDQUFwQjtBQUNBekMsVUFBSSxDQUFDdFMsSUFBTCxDQUFVO0FBQ040QixZQUFJLEVBQUUsUUFEQTtBQUVOakQsU0FBQyxFQUFEQSxDQUZNO0FBR05DLFNBQUMsRUFBRXVaO0FBSEcsT0FBVjtBQUtBN0YsVUFBSSxDQUFDdFMsSUFBTCxDQUFVO0FBQ040QixZQUFJLEVBQUUsY0FEQTtBQUVOMFAsVUFBRSxFQUFFM1MsQ0FGRTtBQUdONFMsVUFBRSxFQUFFNEcsRUFBRSxHQUFHSixFQUhIO0FBSU5yRyxVQUFFLEVBQUV3RyxFQUFFLEdBQUdKLEVBSkg7QUFLTm5HLFVBQUUsRUFBRS9TLENBTEU7QUFNTkQsU0FBQyxFQUFFdVosRUFORztBQU9OdFosU0FBQyxFQUFEQTtBQVBNLE9BQVY7QUFTQTBULFVBQUksQ0FBQ3RTLElBQUwsQ0FBVTtBQUNONEIsWUFBSSxFQUFFLFFBREE7QUFFTmpELFNBQUMsRUFBRXVaLEVBQUUsR0FBR2hLLEVBRkY7QUFHTnRQLFNBQUMsRUFBREE7QUFITSxPQUFWO0FBS0EwVCxVQUFJLENBQUN0UyxJQUFMLENBQVU7QUFDTjRCLFlBQUksRUFBRSxjQURBO0FBRU4wUCxVQUFFLEVBQUU0RyxFQUFFLEdBQUdKLEVBQUwsR0FBVTVKLEVBRlI7QUFHTnFELFVBQUUsRUFBRTNTLENBSEU7QUFJTjhTLFVBQUUsRUFBRXNHLEVBQUUsR0FBRzlKLEVBSkg7QUFLTnlELFVBQUUsRUFBRXdHLEVBQUUsR0FBR0osRUFMSDtBQU1OcFosU0FBQyxFQUFFcVosRUFBRSxHQUFHOUosRUFORjtBQU9OdFAsU0FBQyxFQUFFdVo7QUFQRyxPQUFWO0FBU0E3RixVQUFJLENBQUN0UyxJQUFMLENBQVU7QUFDTjRCLFlBQUksRUFBRSxRQURBO0FBRU5qRCxTQUFDLEVBQUVxWixFQUFFLEdBQUc5SixFQUZGO0FBR050UCxTQUFDLEVBQUV1WixFQUFFLEdBQUdoSztBQUhGLE9BQVY7QUFLQW1FLFVBQUksQ0FBQ3RTLElBQUwsQ0FBVTtBQUNONEIsWUFBSSxFQUFFLGNBREE7QUFFTjBQLFVBQUUsRUFBRTBHLEVBQUUsR0FBRzlKLEVBRkg7QUFHTnFELFVBQUUsRUFBRTRHLEVBQUUsR0FBR0osRUFBTCxHQUFVNUosRUFIUjtBQUlOdUQsVUFBRSxFQUFFd0csRUFBRSxHQUFHSixFQUFMLEdBQVU1SixFQUpSO0FBS055RCxVQUFFLEVBQUVzRyxFQUFFLEdBQUc5SixFQUxIO0FBTU54UCxTQUFDLEVBQUV1WixFQUFFLEdBQUdoSyxFQU5GO0FBT050UCxTQUFDLEVBQUVxWixFQUFFLEdBQUc5SjtBQVBGLE9BQVY7QUFTQW1FLFVBQUksQ0FBQ3RTLElBQUwsQ0FBVTtBQUNONEIsWUFBSSxFQUFFLFFBREE7QUFFTmpELFNBQUMsRUFBRXVaLEVBRkc7QUFHTnRaLFNBQUMsRUFBRXFaLEVBQUUsR0FBRzlKO0FBSEYsT0FBVjtBQUtBbUUsVUFBSSxDQUFDdFMsSUFBTCxDQUFVO0FBQ040QixZQUFJLEVBQUUsY0FEQTtBQUVOMFAsVUFBRSxFQUFFNEcsRUFBRSxHQUFHSixFQUZIO0FBR052RyxVQUFFLEVBQUUwRyxFQUFFLEdBQUc5SixFQUhIO0FBSU51RCxVQUFFLEVBQUUvUyxDQUpFO0FBS05nVCxVQUFFLEVBQUV3RyxFQUFFLEdBQUdKLEVBQUwsR0FBVTVKLEVBTFI7QUFNTnhQLFNBQUMsRUFBREEsQ0FOTTtBQU9OQyxTQUFDLEVBQUV1WixFQUFFLEdBQUdoSztBQVBGLE9BQVY7QUFTSDs7O1dBQ0Qsa0JBQVN4UCxDQUFULEVBQVlDLENBQVosRUFBZTBCLEtBQWYsRUFBc0JDLE1BQXRCLEVBQThCO0FBQzFCLFVBQU1pUCxJQUFJLEdBQUcsS0FBSzRJLFVBQUwsRUFBYjtBQUNBNUksVUFBSSxDQUFDNU4sSUFBTCxHQUFZLFdBQVo7QUFDQTROLFVBQUksQ0FBQzdRLENBQUwsR0FBU0EsQ0FBVDtBQUNBNlEsVUFBSSxDQUFDNVEsQ0FBTCxHQUFTQSxDQUFUO0FBQ0E0USxVQUFJLENBQUNsUCxLQUFMLEdBQWFBLEtBQWI7QUFDQWtQLFVBQUksQ0FBQ2pQLE1BQUwsR0FBY0EsTUFBZDtBQUNIOzs7V0FDRCxvQkFBVzVCLENBQVgsRUFBY0MsQ0FBZCxFQUFpQjhSLE1BQWpCLEVBQXlCO0FBQ3JCLFVBQU1sQixJQUFJLEdBQUcsS0FBSzRJLFVBQUwsRUFBYjtBQUNBNUksVUFBSSxDQUFDNU4sSUFBTCxHQUFZLFNBQVo7QUFDQTROLFVBQUksQ0FBQzdRLENBQUwsR0FBU0EsQ0FBVDtBQUNBNlEsVUFBSSxDQUFDNVEsQ0FBTCxHQUFTQSxDQUFUO0FBQ0E0USxVQUFJLENBQUNrQixNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7O1dBQ0QscUJBQVkvUixDQUFaLEVBQWVDLENBQWYsRUFBa0IwQixLQUFsQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDN0IsVUFBTWlQLElBQUksR0FBRyxLQUFLNEksVUFBTCxFQUFiO0FBQ0E1SSxVQUFJLENBQUM1TixJQUFMLEdBQVksU0FBWjtBQUNBNE4sVUFBSSxDQUFDbUIsT0FBTCxHQUFlclEsS0FBSyxHQUFHLENBQXZCO0FBQ0FrUCxVQUFJLENBQUNvQixPQUFMLEdBQWVyUSxNQUFNLEdBQUcsQ0FBeEI7QUFDQWlQLFVBQUksQ0FBQzdRLENBQUwsR0FBU0EsQ0FBQyxHQUFHNlEsSUFBSSxDQUFDbUIsT0FBbEI7QUFDQW5CLFVBQUksQ0FBQzVRLENBQUwsR0FBU0EsQ0FBQyxHQUFHNFEsSUFBSSxDQUFDb0IsT0FBbEI7QUFDSDs7O1dBQ0QsaUJBQVE7QUFDSixhQUFPLEtBQUsrQixLQUFMLENBQVduRCxJQUFsQjtBQUNIOzs7V0FDRCxzQkFBYTtBQUFBLFVBQ0RtRCxLQURDLEdBQ3VCLElBRHZCLENBQ0RBLEtBREM7QUFBQSxVQUNNVixJQUROLEdBQ3VCLElBRHZCLENBQ01BLElBRE47QUFBQSxVQUNZQyxNQURaLEdBQ3VCLElBRHZCLENBQ1lBLE1BRFo7O0FBRVQsVUFBSXhRLEtBQUssQ0FBQ0MsT0FBTixDQUFjZ1IsS0FBSyxDQUFDbkQsSUFBcEIsQ0FBSixFQUErQixDQUM5QixDQURELE1BRUssSUFBSSxRQUFPbUQsS0FBSyxDQUFDbkQsSUFBYixNQUFzQixRQUExQixFQUFvQztBQUNyQ21ELGFBQUssQ0FBQ25ELElBQU4sR0FBYSxDQUFDbUQsS0FBSyxDQUFDbkQsSUFBUCxDQUFiO0FBQ0gsT0FGSSxNQUdBO0FBQ0RtRCxhQUFLLENBQUNuRCxJQUFOLEdBQWEsRUFBYjtBQUNIOztBQUNELFVBQU02SSxZQUFZLEdBQUc7QUFBRXpXLFlBQUksRUFBRSxNQUFSO0FBQWdCcVEsWUFBSSxFQUFKQSxJQUFoQjtBQUFzQkMsY0FBTSxFQUFOQTtBQUF0QixPQUFyQjtBQUNBUyxXQUFLLENBQUNuRCxJQUFOLENBQVd4UCxJQUFYLENBQWdCcVksWUFBaEI7QUFDQSxhQUFPQSxZQUFQO0FBQ0g7OztXQUNELHFCQUFZO0FBQ1IsVUFBTTdJLElBQUksR0FBRyxLQUFLNEksVUFBTCxFQUFiO0FBQ0E1SSxVQUFJLENBQUNBLElBQUwsR0FBWSxFQUFaO0FBQ0EsYUFBT0EsSUFBSSxDQUFDQSxJQUFaO0FBQ0g7OztXQUNELG1CQUFVO0FBQUEsVUFDRW1ELEtBREYsR0FDWSxJQURaLENBQ0VBLEtBREY7O0FBRU4sVUFBSSxDQUFDalIsS0FBSyxDQUFDQyxPQUFOLENBQWNnUixLQUFLLENBQUNuRCxJQUFwQixDQUFELElBQThCLENBQUNtRCxLQUFLLENBQUNuRCxJQUFOLENBQVdwUixNQUE5QyxFQUFzRDtBQUNsRCxlQUFPa2EsU0FBUDtBQUNIOztBQUNELFVBQU05SSxJQUFJLEdBQUdtRCxLQUFLLENBQUNuRCxJQUFOLENBQVdtRCxLQUFLLENBQUNuRCxJQUFOLENBQVdwUixNQUFYLEdBQW9CLENBQS9CLENBQWI7O0FBQ0EsVUFBSSxDQUFDc0QsS0FBSyxDQUFDQyxPQUFOLENBQWM2TixJQUFJLENBQUNBLElBQW5CLENBQUwsRUFBK0I7QUFDM0IsZUFBTzhJLFNBQVA7QUFDSDs7QUFDRCxhQUFPOUksSUFBSSxDQUFDQSxJQUFaO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcE9MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTXNELEtBQUssR0FBRyxPQUFkO0FBQ1AsSUFBTTVILE1BQU0sR0FBR1YsbURBQUEsRUFBZjtBQUNPLElBQUlvSSxLQUFKOztBQUNQLENBQUMsVUFBVUEsS0FBVixFQUFpQjtBQUNkLFdBQVMyRixXQUFULENBQXFCNUYsS0FBckIsRUFBNEI7QUFDeEIsV0FBTyxJQUFJb0UsOENBQUosQ0FBYXBFLEtBQWIsQ0FBUDtBQUNIOztBQUNEQyxPQUFLLENBQUMyRixXQUFOLEdBQW9CQSxXQUFwQjs7QUFDQSxXQUFTeEksZUFBVCxDQUF5QjRDLEtBQXpCLEVBQWdDaFEsTUFBaEMsRUFBd0M7QUFBQSxRQUM1QjZNLElBRDRCLEdBQ25CbUQsS0FEbUIsQ0FDNUJuRCxJQUQ0Qjs7QUFFcEMsUUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUGxCLCtEQUFBLENBQW1CM0wsTUFBbkI7QUFDQTtBQUNIOztBQUNENkgsMERBQUEsQ0FBZ0JVLE1BQWhCOztBQUNBLFFBQUl4SixLQUFLLENBQUNDLE9BQU4sQ0FBYzZOLElBQWQsQ0FBSixFQUF5QjtBQUNyQixXQUFLLElBQUlyUixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHcVIsSUFBSSxDQUFDcFIsTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDbENxVyw0RUFBQSxDQUE2QmhGLElBQUksQ0FBQ3JSLENBQUQsQ0FBakMsRUFBc0MrTSxNQUF0QztBQUNIO0FBQ0osS0FKRCxNQUtLLElBQUksUUFBT3NFLElBQVAsTUFBZ0IsUUFBcEIsRUFBOEI7QUFDL0JnRiwwRUFBQSxDQUE2QmhGLElBQTdCLEVBQW1DdEUsTUFBbkM7QUFDSCxLQUZJLE1BR0E7QUFDRG9ELCtEQUFBLENBQW1CM0wsTUFBbkI7QUFDQTtBQUNIOztBQUNELFFBQUk2SCxxREFBQSxDQUFlVSxNQUFmLENBQUosRUFBNEI7QUFDeEJvRCwrREFBQSxDQUFtQjNMLE1BQW5CO0FBQ0E7QUFDSDs7QUFDRCxRQUFNckMsS0FBSyxHQUFHNEssTUFBTSxDQUFDSixJQUFQLEdBQWNJLE1BQU0sQ0FBQ1IsSUFBbkM7QUFDQSxRQUFNbkssTUFBTSxHQUFHMkssTUFBTSxDQUFDRixJQUFQLEdBQWNFLE1BQU0sQ0FBQ0wsSUFBcEM7QUFDQSxRQUFNbE0sQ0FBQyxHQUFHdU0sTUFBTSxDQUFDUixJQUFQLEdBQWNwQyxpREFBQSxDQUFXcUssS0FBWCxFQUFrQnJTLEtBQWxCLENBQXhCO0FBQ0EsUUFBTTFCLENBQUMsR0FBR3NNLE1BQU0sQ0FBQ0wsSUFBUCxHQUFjdkMsaURBQUEsQ0FBV3FLLEtBQVgsRUFBa0JwUyxNQUFsQixDQUF4QjtBQUNBb0MsVUFBTSxDQUFDaEUsQ0FBUCxHQUFXQSxDQUFYO0FBQ0FnRSxVQUFNLENBQUMvRCxDQUFQLEdBQVdBLENBQVg7QUFDQStELFVBQU0sQ0FBQ3JDLEtBQVAsR0FBZUEsS0FBZjtBQUNBcUMsVUFBTSxDQUFDcEMsTUFBUCxHQUFnQkEsTUFBaEI7QUFDSDs7QUFDRHFTLE9BQUssQ0FBQzdDLGVBQU4sR0FBd0JBLGVBQXhCO0FBQ0gsQ0F0Q0QsRUFzQ0c2QyxLQUFLLEtBQUtBLEtBQUssR0FBRyxFQUFiLENBdENSOztBQXVDQSxJQUFNdkgsU0FBUyxHQUFHaUQsc0RBQUEsRUFBbEI7QUFDTyxJQUFJdUUsY0FBSjs7QUFDUCxDQUFDLFVBQVVBLGNBQVYsRUFBMEI7QUFDdkIsV0FBU3BRLE9BQVQsQ0FBaUJrUSxLQUFqQixFQUF3QnpTLE1BQXhCLEVBQWdDO0FBQUEsUUFDcEIwRSxLQURvQixHQUNWMUUsTUFBTSxDQUFDd0MsYUFERyxDQUNwQmtDLEtBRG9CO0FBRTVCZ08sU0FBSyxDQUFDN0MsZUFBTixDQUFzQjRDLEtBQXRCLEVBQTZCdEgsU0FBN0I7QUFDQSxXQUFPaUQseURBQUEsQ0FBbUJqRCxTQUFuQixFQUE4QnpHLEtBQTlCLENBQVA7QUFDSDs7QUFDRGlPLGdCQUFjLENBQUNwUSxPQUFmLEdBQXlCQSxPQUF6Qjs7QUFDQSxXQUFTSSxJQUFULENBQWMzQyxNQUFkLEVBQXNCO0FBQ2xCQSxVQUFNLENBQUM0QyxVQUFQLENBQWtCTCxPQUFsQixDQUEwQk0sR0FBMUIsQ0FBOEIrUCxLQUE5QixFQUFxQ3JRLE9BQXJDO0FBQ0F1TixrRUFBQSxDQUFtQjlQLE1BQW5CO0FBQ0g7O0FBQ0QyUyxnQkFBYyxDQUFDaFEsSUFBZixHQUFzQkEsSUFBdEI7QUFDSCxDQVpELEVBWUdnUSxjQUFjLEtBQUtBLGNBQWMsR0FBRyxFQUF0QixDQVpqQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU0yRixlQUFlLEdBQUcsRUFBeEI7QUFDTyxJQUFJQyxtQkFBSjs7QUFDUCxDQUFDLFVBQVVBLG1CQUFWLEVBQStCO0FBQzVCLFdBQVN6VyxNQUFULENBQWdCRyxTQUFoQixFQUEyQmpDLE1BQTNCLEVBQW1DO0FBQUEsUUFDdkJ3WSxJQUR1QixHQUNkdlcsU0FEYyxDQUN2QnVXLElBRHVCOztBQUUvQixRQUFJLENBQUNBLElBQUwsRUFBVztBQUNQO0FBQ0g7O0FBSjhCLGdDQUtJeFksTUFBTSxDQUFDK0IsUUFBUCxDQUFnQm5DLFVBQWhCLEVBTEo7QUFBQSxRQUt2QnJCLE1BTHVCLHlCQUt2QkEsTUFMdUI7QUFBQSxRQUtmUCxjQUxlLHlCQUtmQSxjQUxlOztBQU0vQixRQUFJQSxjQUFjLENBQUNQLGVBQWYsSUFBa0MsQ0FBdEMsRUFBeUM7QUFDckM7QUFDSDs7QUFDRCxRQUFNZ2IsS0FBSyxHQUFHRCxJQUFJLENBQUN4SSxLQUFMLENBQVcsSUFBWCxDQUFkO0FBVCtCLFFBVXZCNVAsS0FWdUIsR0FVNEI2QixTQVY1QixDQVV2QjdCLEtBVnVCO0FBQUEsUUFVaEJDLE1BVmdCLEdBVTRCNEIsU0FWNUIsQ0FVaEI1QixNQVZnQjtBQUFBLFFBVVJxWSxVQVZRLEdBVTRCelcsU0FWNUIsQ0FVUnlXLFVBVlE7QUFBQSxRQVVJQyxNQVZKLEdBVTRCMVcsU0FWNUIsQ0FVSTBXLE1BVko7QUFBQSxRQVVZQyxVQVZaLEdBVTRCM1csU0FWNUIsQ0FVWTJXLFVBVlo7QUFXL0JDLHNFQUFBLENBQThCSCxVQUE5QixFQUEwQ0osZUFBMUM7QUFDQSxRQUFNUSxVQUFVLEdBQUdSLGVBQWUsQ0FBQ1MsSUFBbkM7QUFDQSxRQUFNQyxtQkFBbUIsR0FBR1YsZUFBZSxDQUFDVyxhQUE1QztBQUNBLFFBQU1DLGFBQWEsR0FBR1osZUFBZSxDQUFDYSxPQUF0QztBQUNBLFFBQU1DLElBQUksR0FBR0MsK0NBQUEsQ0FBYWYsZUFBZSxDQUFDYyxJQUE3QixDQUFiO0FBQ0EsUUFBTTdLLFNBQVMsR0FBR3ZPLE1BQU0sQ0FBQ3NELFFBQVAsQ0FBZ0IxRCxVQUFoQixFQUFsQjtBQUNBLFFBQU0wWixTQUFTLEdBQUdELG9EQUFBLENBQWtCRCxJQUFsQixFQUF3QmQsZUFBeEIsRUFBeUNHLEtBQXpDLENBQWxCO0FBQ0EsUUFBTWMsVUFBVSxHQUFHRixxREFBQSxDQUFtQmYsZUFBbkIsRUFBb0NHLEtBQXBDLENBQW5CO0FBQ0EsUUFBTWUsU0FBUyxHQUFHcFosS0FBSCxhQUFHQSxLQUFILGNBQUdBLEtBQUgsR0FBWWtaLFNBQTNCO0FBQ0EsUUFBTUcsVUFBVSxHQUFHcFosTUFBSCxhQUFHQSxNQUFILGNBQUdBLE1BQUgsR0FBYWtaLFVBQTdCO0FBQ0EsUUFBTUcsT0FBTyxHQUFHdFIsaURBQUEsQ0FBV25HLFNBQVgsRUFBc0J1WCxTQUF0QixDQUFoQjtBQUNBLFFBQU1HLE9BQU8sR0FBR3ZSLGlEQUFBLENBQVduRyxTQUFYLEVBQXNCd1gsVUFBdEIsQ0FBaEI7QUFDQSxRQUFJL2EsQ0FBQyxHQUFHLENBQVI7O0FBQ0EsUUFBSTJCLE1BQUosRUFBWTtBQUNSLFVBQU11WixrQkFBa0IsR0FBR2YscUVBQUEsQ0FBaUNQLGVBQWUsQ0FBQ3VCLGFBQWpELENBQTNCO0FBQ0FuYixPQUFDLEdBQUcsQ0FBQzJCLE1BQU0sR0FBR2taLFVBQVYsSUFBd0JLLGtCQUE1Qjs7QUFDQSxVQUFJbGIsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNQQSxTQUFDLEdBQUcsQ0FBSjtBQUNIO0FBQ0o7O0FBQ0Q2UCxhQUFTLENBQUMvTixZQUFWLENBQXVCakMsTUFBTSxDQUFDdEIsQ0FBOUIsRUFBaUNzQixNQUFNLENBQUN2QixDQUF4QyxFQUEyQ3VCLE1BQU0sQ0FBQ2tMLENBQWxELEVBQXFEbEwsTUFBTSxDQUFDNEgsQ0FBNUQsRUFBK0Q1SCxNQUFNLENBQUNNLEVBQXRFLEVBQTBFTixNQUFNLENBQUNPLEVBQWpGO0FBQ0F5UCxhQUFTLENBQUNDLFdBQVYsR0FBd0IsQ0FBeEI7O0FBQ0EsUUFBSW9LLFVBQVUsS0FBS1IsU0FBbkIsRUFBOEI7QUFDMUI3SixlQUFTLENBQUN1RixXQUFWLEdBQXdCLEVBQXhCO0FBQ0F2RixlQUFTLENBQUNzRixTQUFWLEdBQXNCcFgsMkVBQUEsQ0FBNEJtYyxVQUE1QixFQUF3QyxDQUF4QyxFQUEyQzVhLGNBQTNDLENBQXRCO0FBQ0F1USxlQUFTLENBQUNvQyxTQUFWO0FBQ0FwQyxlQUFTLENBQUNxRCxJQUFWLENBQWU4SCxPQUFmLEVBQXdCQyxPQUF4QixFQUFpQ0gsU0FBakMsRUFBNENDLFVBQTVDO0FBQ0FsTCxlQUFTLENBQUNzQyxTQUFWO0FBQ0F0QyxlQUFTLENBQUN3RCxJQUFWO0FBQ0g7O0FBQ0QsUUFBSTRHLE1BQU0sS0FBS1AsU0FBZixFQUEwQjtBQUN0QjdKLGVBQVMsQ0FBQ3VGLFdBQVYsR0FBd0JyWCwyRUFBQSxDQUE0QmtjLE1BQTVCLEVBQW9DLENBQXBDLEVBQXVDM2EsY0FBdkMsQ0FBeEI7QUFDQXVRLGVBQVMsQ0FBQ3NGLFNBQVYsR0FBc0IsRUFBdEI7QUFDQXRGLGVBQVMsQ0FBQ29DLFNBQVY7QUFDQXBDLGVBQVMsQ0FBQ3FELElBQVYsQ0FBZThILE9BQWYsRUFBd0JDLE9BQXhCLEVBQWlDSCxTQUFqQyxFQUE0Q0MsVUFBNUM7QUFDQWxMLGVBQVMsQ0FBQ3NDLFNBQVY7QUFDQXRDLGVBQVMsQ0FBQ3lELE1BQVY7QUFDSDs7QUFDRHpELGFBQVMsQ0FBQzZLLElBQVYsR0FBaUJDLG9EQUFBLENBQWtCZixlQUFlLENBQUNjLElBQWxDLEVBQXdDTixVQUF4QyxDQUFqQjtBQUNBdkssYUFBUyxDQUFDdUwsWUFBVixHQUF5QixZQUF6QjtBQUNBdkwsYUFBUyxDQUFDdUYsV0FBVixHQUF3QixFQUF4QjtBQUNBdkYsYUFBUyxDQUFDc0YsU0FBVixHQUFzQnBYLDJFQUFBLENBQTRCNmIsZUFBZSxDQUFDM2IsS0FBNUMsRUFBbUQyYixlQUFlLENBQUMxYixLQUFuRSxFQUEwRW9CLGNBQTFFLENBQXRCO0FBQ0FVLEtBQUMsSUFBSWliLE9BQUw7O0FBQ0EsU0FBSyxJQUFJMWIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3dhLEtBQUssQ0FBQ3ZhLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ25DLFVBQU04YixJQUFJLEdBQUd0QixLQUFLLENBQUN4YSxDQUFELENBQWxCO0FBQ0EsVUFBTThWLFNBQVMsR0FBR3NGLG9EQUFBLENBQWtCRCxJQUFsQixFQUF3QmQsZUFBeEIsRUFBeUN5QixJQUF6QyxDQUFsQjtBQUNBLFVBQU1DLFVBQVUsR0FBR25CLDZEQUFBLENBQXlCUCxlQUFlLENBQUMyQixLQUF6QyxDQUFuQjtBQUNBLFVBQUl4YixDQUFDLEdBQUcsQ0FBQythLFNBQVMsR0FBR3pGLFNBQWIsSUFBMEJpRyxVQUFsQzs7QUFDQSxVQUFJdmIsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNQQSxTQUFDLEdBQUcsQ0FBSjtBQUNIOztBQUNEQSxPQUFDLElBQUlpYixPQUFMOztBQUNBLFdBQUssSUFBSVEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsSUFBSSxDQUFDN2IsTUFBekIsRUFBaUNnYyxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFlBQU1DLEtBQUssR0FBR0osSUFBSSxDQUFDL1EsTUFBTCxDQUFZa1IsQ0FBWixDQUFkO0FBQ0EsWUFBTUUsTUFBTSxHQUFHTCxJQUFJLENBQUMvUSxNQUFMLENBQVlrUixDQUFDLEdBQUcsQ0FBaEIsQ0FBZjtBQUNBLFlBQU1HLE9BQU8sR0FBR2hCLGtEQUFBLENBQWdCRCxJQUFoQixFQUFzQk4sVUFBdEIsRUFBa0NxQixLQUFsQyxFQUF5Q0MsTUFBekMsQ0FBaEI7QUFDQTdMLGlCQUFTLENBQUMrTCxRQUFWLENBQW1CSCxLQUFuQixFQUEwQjFiLENBQTFCLEVBQTZCQyxDQUFDLEdBQUdvYSxVQUFqQztBQUNBcmEsU0FBQyxJQUFJNGIsT0FBTyxHQUFHckIsbUJBQWY7QUFDSDs7QUFDRHRhLE9BQUMsSUFBSW9hLFVBQVUsR0FBR0ksYUFBbEI7QUFDSDtBQUNKOztBQUNEWCxxQkFBbUIsQ0FBQ3pXLE1BQXBCLEdBQTZCQSxNQUE3Qjs7QUFDQSxXQUFTYSxJQUFULENBQWMzQyxNQUFkLEVBQXNCO0FBQ2xCdWEseURBQUEsQ0FBbUJ2YSxNQUFuQjtBQUNBQSxVQUFNLENBQUM0QyxVQUFQLENBQWtCZCxNQUFsQixDQUF5QmUsR0FBekIsQ0FBNkIyWCx1Q0FBN0IsRUFBbUMxWSxNQUFuQztBQUNIOztBQUNEeVcscUJBQW1CLENBQUM1VixJQUFwQixHQUEyQkEsSUFBM0I7QUFDSCxDQWhGRCxFQWdGRzRWLG1CQUFtQixLQUFLQSxtQkFBbUIsR0FBRyxFQUEzQixDQWhGdEIsRTs7Ozs7Ozs7Ozs7Ozs7QUNQQSxJQUFNcFksTUFBTSxHQUFHVixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBLElBQU1sQixPQUFPLEdBQUcyQixNQUFNLENBQUNQLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBaEI7QUFDTyxJQUFNNmEsRUFBRSxHQUFHLElBQVg7QUFDUCxJQUFNQyxLQUFLLEdBQUcsSUFBSS9XLEdBQUosRUFBZDtBQUNPLElBQUkwVixJQUFKOztBQUNQLENBQUMsVUFBVUEsSUFBVixFQUFnQjtBQUNiLFdBQVNzQixZQUFULENBQXNCdkIsSUFBdEIsRUFBNEJMLElBQTVCLEVBQWtDO0FBQzlCLHFCQUFVQSxJQUFWLGdCQUFvQkssSUFBcEI7QUFDSDs7QUFDREMsTUFBSSxDQUFDc0IsWUFBTCxHQUFvQkEsWUFBcEI7O0FBQ0EsV0FBU0MsV0FBVCxDQUFxQnhCLElBQXJCLEVBQTJCTCxJQUEzQixFQUFpQ1AsSUFBakMsRUFBdUM7QUFDbkNoYSxXQUFPLENBQUM0YSxJQUFSLEdBQWV1QixZQUFZLENBQUN2QixJQUFELEVBQU9MLElBQVAsQ0FBM0I7QUFDQSxXQUFPdmEsT0FBTyxDQUFDb2MsV0FBUixDQUFvQnBDLElBQXBCLEVBQTBCcFksS0FBakM7QUFDSDs7QUFDRGlaLE1BQUksQ0FBQ3VCLFdBQUwsR0FBbUJBLFdBQW5COztBQUNBLFdBQVNDLFlBQVQsQ0FBc0J6QixJQUF0QixFQUE0QjBCLEtBQTVCLEVBQWtDO0FBQzlCLFFBQUkxYSxLQUFLLEdBQUdnWixJQUFJLENBQUMyQixNQUFMLENBQVl6VyxHQUFaLENBQWdCd1csS0FBaEIsQ0FBWjs7QUFDQSxRQUFJLENBQUMxYSxLQUFMLEVBQVk7QUFDUkEsV0FBSyxHQUFHd2EsV0FBVyxDQUFDeEIsSUFBSSxDQUFDNEIsSUFBTixFQUFZUCxFQUFaLEVBQWdCSyxLQUFoQixDQUFuQjtBQUNBMUIsVUFBSSxDQUFDMkIsTUFBTCxDQUFZbFksR0FBWixDQUFnQmlZLEtBQWhCLEVBQXNCMWEsS0FBdEI7QUFDSDs7QUFDRCxXQUFPQSxLQUFQO0FBQ0g7O0FBQ0RpWixNQUFJLENBQUN3QixZQUFMLEdBQW9CQSxZQUFwQjs7QUFDQSxXQUFTSSxVQUFULENBQW9CN0IsSUFBcEIsRUFBMEJlLEtBQTFCLEVBQWlDQyxNQUFqQyxFQUF5QztBQUNyQyxRQUFNYyxJQUFJLEdBQUdmLEtBQUssR0FBR0MsTUFBckI7QUFDQSxRQUFJZSxPQUFPLEdBQUcvQixJQUFJLENBQUNnQyxRQUFMLENBQWM5VyxHQUFkLENBQWtCNFcsSUFBbEIsQ0FBZDs7QUFDQSxRQUFJLENBQUNDLE9BQUwsRUFBYztBQUNWLFVBQU1FLFdBQVcsR0FBR1IsWUFBWSxDQUFDekIsSUFBRCxFQUFPZ0IsTUFBUCxDQUFoQztBQUNBLFVBQU1rQixVQUFVLEdBQUdWLFdBQVcsQ0FBQ3hCLElBQUksQ0FBQzRCLElBQU4sRUFBWVAsRUFBWixFQUFnQk4sS0FBSyxHQUFHQyxNQUF4QixDQUE5QjtBQUNBZSxhQUFPLEdBQUdHLFVBQVUsR0FBR0QsV0FBdkI7QUFDQWpDLFVBQUksQ0FBQ2dDLFFBQUwsQ0FBY3ZZLEdBQWQsQ0FBa0JxWSxJQUFsQixFQUF3QkMsT0FBeEI7QUFDSDs7QUFDRCxXQUFPQSxPQUFQO0FBQ0g7O0FBQ0Q5QixNQUFJLENBQUM0QixVQUFMLEdBQWtCQSxVQUFsQjs7QUFDQSxXQUFTTSxVQUFULENBQW9CbkMsSUFBcEIsRUFBMEJMLElBQTFCLEVBQWdDb0IsS0FBaEMsRUFBdUNDLE1BQXZDLEVBQStDO0FBQzNDLFFBQU14USxLQUFLLEdBQUdtUCxJQUFJLEdBQUcwQixFQUFyQjtBQUNBLFFBQU1yYSxLQUFLLEdBQUd5YSxZQUFZLENBQUN6QixJQUFELEVBQU9lLEtBQVAsQ0FBMUI7O0FBQ0EsUUFBSSxDQUFDQyxNQUFMLEVBQWE7QUFDVCxhQUFPaGEsS0FBSyxHQUFHd0osS0FBZjtBQUNIOztBQUNELFFBQU11UixPQUFPLEdBQUdGLFVBQVUsQ0FBQzdCLElBQUQsRUFBT2UsS0FBUCxFQUFjQyxNQUFkLENBQTFCO0FBQ0EsV0FBT2UsT0FBTyxHQUFHdlIsS0FBakI7QUFDSDs7QUFDRHlQLE1BQUksQ0FBQ2tDLFVBQUwsR0FBa0JBLFVBQWxCOztBQUNBLFdBQVNDLE9BQVQsQ0FBaUJSLElBQWpCLEVBQXVCO0FBQ25CLFFBQUk1QixJQUFJLEdBQUdzQixLQUFLLENBQUNwVyxHQUFOLENBQVUwVyxJQUFWLENBQVg7O0FBQ0EsUUFBSSxDQUFDNUIsSUFBTCxFQUFXO0FBQ1BBLFVBQUksR0FBRztBQUNINEIsWUFBSSxFQUFKQSxJQURHO0FBRUhELGNBQU0sRUFBRSxJQUFJcFgsR0FBSixFQUZMO0FBR0h5WCxnQkFBUSxFQUFFLElBQUl6WCxHQUFKO0FBSFAsT0FBUDtBQUtBK1csV0FBSyxDQUFDN1gsR0FBTixDQUFVbVksSUFBVixFQUFnQjVCLElBQWhCO0FBQ0g7O0FBQ0QsV0FBT0EsSUFBUDtBQUNIOztBQUNEQyxNQUFJLENBQUNtQyxPQUFMLEdBQWVBLE9BQWY7O0FBQ0EsV0FBU0MsWUFBVCxDQUFzQnJDLElBQXRCLEVBQTRCc0MsTUFBNUIsRUFBb0MzQixJQUFwQyxFQUEwQztBQUN0QyxRQUFJM1osS0FBSyxHQUFHLENBQVo7O0FBQ0EsU0FBSyxJQUFJbkMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzhiLElBQUksQ0FBQzdiLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFVBQU1rYyxLQUFLLEdBQUdKLElBQUksQ0FBQy9RLE1BQUwsQ0FBWS9LLENBQVosQ0FBZDtBQUNBLFVBQU1tYyxNQUFNLEdBQUdMLElBQUksQ0FBQy9RLE1BQUwsQ0FBWS9LLENBQUMsR0FBRyxDQUFoQixDQUFmO0FBQ0EsVUFBTW9jLE9BQU8sR0FBR2tCLFVBQVUsQ0FBQ25DLElBQUQsRUFBT3NDLE1BQU0sQ0FBQzNDLElBQWQsRUFBb0JvQixLQUFwQixFQUEyQkMsTUFBM0IsQ0FBMUI7QUFDQWhhLFdBQUssSUFBSWlhLE9BQVQ7QUFDSDs7QUFDRCxRQUFJcUIsTUFBTSxDQUFDekMsYUFBUCxJQUF3QmMsSUFBSSxDQUFDN2IsTUFBTCxHQUFjLENBQTFDLEVBQTZDO0FBQ3pDa0MsV0FBSyxJQUFJc2IsTUFBTSxDQUFDekMsYUFBUCxJQUF3QmMsSUFBSSxDQUFDN2IsTUFBTCxHQUFjLENBQXRDLENBQVQ7QUFDSDs7QUFDRCxXQUFPa0MsS0FBUDtBQUNIOztBQUNEaVosTUFBSSxDQUFDb0MsWUFBTCxHQUFvQkEsWUFBcEI7O0FBQ0EsV0FBU0UsWUFBVCxDQUFzQnZDLElBQXRCLEVBQTRCc0MsTUFBNUIsRUFBb0NqRCxLQUFwQyxFQUEyQztBQUN2QyxRQUFJclksS0FBSyxHQUFHLENBQVo7O0FBQ0EsU0FBSyxJQUFJbkMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3dhLEtBQUssQ0FBQ3ZhLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ25DLFVBQU04YixJQUFJLEdBQUd0QixLQUFLLENBQUN4YSxDQUFELENBQWxCO0FBQ0EsVUFBTThWLFNBQVMsR0FBRzBILFlBQVksQ0FBQ3JDLElBQUQsRUFBT3NDLE1BQVAsRUFBZTNCLElBQWYsQ0FBOUI7O0FBQ0EsVUFBSTNaLEtBQUssR0FBRzJULFNBQVosRUFBdUI7QUFDbkIzVCxhQUFLLEdBQUcyVCxTQUFSO0FBQ0g7QUFDSjs7QUFDRCxXQUFPM1QsS0FBUDtBQUNIOztBQUNEaVosTUFBSSxDQUFDc0MsWUFBTCxHQUFvQkEsWUFBcEI7O0FBQ0EsV0FBU0MsYUFBVCxDQUF1QkYsTUFBdkIsRUFBK0JqRCxLQUEvQixFQUFzQztBQUNsQyxRQUFJcFksTUFBTSxHQUFHcWIsTUFBTSxDQUFDM0MsSUFBUCxHQUFjTixLQUFLLENBQUN2YSxNQUFqQzs7QUFDQSxRQUFJd2QsTUFBTSxDQUFDdkMsT0FBUCxJQUFrQlYsS0FBSyxDQUFDdmEsTUFBTixHQUFlLENBQXJDLEVBQXdDO0FBQ3BDbUMsWUFBTSxJQUFJcWIsTUFBTSxDQUFDdkMsT0FBUCxJQUFrQlYsS0FBSyxDQUFDdmEsTUFBTixHQUFlLENBQWpDLENBQVY7QUFDSDs7QUFDRCxXQUFPbUMsTUFBUDtBQUNIOztBQUNEZ1osTUFBSSxDQUFDdUMsYUFBTCxHQUFxQkEsYUFBckI7QUFDSCxDQXhGRCxFQXdGR3ZDLElBQUksS0FBS0EsSUFBSSxHQUFHLEVBQVosQ0F4RlAsRTs7Ozs7Ozs7Ozs7OztBQ0xPLElBQUlSLFVBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxVQUFWLEVBQXNCO0FBQ25CQSxZQUFVLENBQUNnRCxpQkFBWCxHQUErQjtBQUMzQnpDLFFBQUksRUFBRSxPQURxQjtBQUUzQkwsUUFBSSxFQUFFLEVBRnFCO0FBRzNCcGMsU0FBSyxFQUFFLENBSG9CO0FBSTNCQyxTQUFLLEVBQUUsQ0FKb0I7QUFLM0JrZixRQUFJLEVBQUUsS0FMcUI7QUFNM0JDLFVBQU0sRUFBRSxLQU5tQjtBQU8zQkMsYUFBUyxFQUFFLEtBUGdCO0FBUTNCL0MsaUJBQWEsRUFBRSxDQVJZO0FBUzNCRSxXQUFPLEVBQUUsQ0FUa0I7QUFVM0JjLFNBQUssRUFBRSxNQVZvQjtBQVczQkosaUJBQWEsRUFBRTtBQVhZLEdBQS9COztBQWFBLFdBQVNvQyxrQkFBVCxDQUE0QjVTLE1BQTVCLEVBQW9DNUcsTUFBcEMsRUFBNEM7QUFBQTs7QUFDeENBLFVBQU0sQ0FBQzJXLElBQVAsbUJBQWMvUCxNQUFkLGFBQWNBLE1BQWQsdUJBQWNBLE1BQU0sQ0FBRStQLElBQXRCLHVEQUE4QlAsVUFBVSxDQUFDZ0QsaUJBQVgsQ0FBNkJ6QyxJQUEzRDtBQUNBM1csVUFBTSxDQUFDc1csSUFBUCxtQkFBYzFQLE1BQWQsYUFBY0EsTUFBZCx1QkFBY0EsTUFBTSxDQUFFMFAsSUFBdEIsdURBQThCRixVQUFVLENBQUNnRCxpQkFBWCxDQUE2QjlDLElBQTNEO0FBQ0F0VyxVQUFNLENBQUM5RixLQUFQLG9CQUFlME0sTUFBZixhQUFlQSxNQUFmLHVCQUFlQSxNQUFNLENBQUUxTSxLQUF2Qix5REFBZ0NrYyxVQUFVLENBQUNnRCxpQkFBWCxDQUE2QmxmLEtBQTdEO0FBQ0E4RixVQUFNLENBQUM3RixLQUFQLG9CQUFleU0sTUFBZixhQUFlQSxNQUFmLHVCQUFlQSxNQUFNLENBQUV6TSxLQUF2Qix5REFBZ0NpYyxVQUFVLENBQUNnRCxpQkFBWCxDQUE2QmpmLEtBQTdEO0FBQ0E2RixVQUFNLENBQUNxWixJQUFQLG1CQUFjelMsTUFBZCxhQUFjQSxNQUFkLHVCQUFjQSxNQUFNLENBQUV5UyxJQUF0Qix1REFBOEJqRCxVQUFVLENBQUNnRCxpQkFBWCxDQUE2QkMsSUFBM0Q7QUFDQXJaLFVBQU0sQ0FBQ3NaLE1BQVAscUJBQWdCMVMsTUFBaEIsYUFBZ0JBLE1BQWhCLHVCQUFnQkEsTUFBTSxDQUFFMFMsTUFBeEIsMkRBQWtDbEQsVUFBVSxDQUFDZ0QsaUJBQVgsQ0FBNkJFLE1BQS9EO0FBQ0F0WixVQUFNLENBQUN1WixTQUFQLHdCQUFtQjNTLE1BQW5CLGFBQW1CQSxNQUFuQix1QkFBbUJBLE1BQU0sQ0FBRTJTLFNBQTNCLGlFQUF3Q25ELFVBQVUsQ0FBQ2dELGlCQUFYLENBQTZCRyxTQUFyRTtBQUNBdlosVUFBTSxDQUFDd1csYUFBUCw0QkFBdUI1UCxNQUF2QixhQUF1QkEsTUFBdkIsdUJBQXVCQSxNQUFNLENBQUU0UCxhQUEvQix5RUFBZ0RKLFVBQVUsQ0FBQ2dELGlCQUFYLENBQTZCNUMsYUFBN0U7QUFDQXhXLFVBQU0sQ0FBQzBXLE9BQVAsc0JBQWlCOVAsTUFBakIsYUFBaUJBLE1BQWpCLHVCQUFpQkEsTUFBTSxDQUFFOFAsT0FBekIsNkRBQW9DTixVQUFVLENBQUNnRCxpQkFBWCxDQUE2QjFDLE9BQWpFO0FBQ0ExVyxVQUFNLENBQUN3WCxLQUFQLG9CQUFlNVEsTUFBZixhQUFlQSxNQUFmLHVCQUFlQSxNQUFNLENBQUU0USxLQUF2Qix5REFBZ0NwQixVQUFVLENBQUNnRCxpQkFBWCxDQUE2QjVCLEtBQTdEO0FBQ0F4WCxVQUFNLENBQUNvWCxhQUFQLDRCQUF1QnhRLE1BQXZCLGFBQXVCQSxNQUF2Qix1QkFBdUJBLE1BQU0sQ0FBRXdRLGFBQS9CLHlFQUFnRGhCLFVBQVUsQ0FBQ2dELGlCQUFYLENBQTZCaEMsYUFBN0U7QUFDSDs7QUFDRGhCLFlBQVUsQ0FBQ29ELGtCQUFYLEdBQWdDQSxrQkFBaEM7O0FBQ0EsV0FBU0MsYUFBVCxDQUF1QmpDLEtBQXZCLEVBQThCO0FBQzFCLFlBQVFBLEtBQVI7QUFDSSxXQUFLLE1BQUw7QUFBYSxlQUFPLENBQVA7O0FBQ2IsV0FBSyxRQUFMO0FBQWUsZUFBTyxHQUFQOztBQUNmLFdBQUssT0FBTDtBQUFjLGVBQU8sQ0FBUDs7QUFDZDtBQUFTLGVBQU8sQ0FBUDtBQUpiO0FBTUg7O0FBQ0RwQixZQUFVLENBQUNxRCxhQUFYLEdBQTJCQSxhQUEzQjs7QUFDQSxXQUFTQyxxQkFBVCxDQUErQmxDLEtBQS9CLEVBQXNDO0FBQ2xDLFlBQVFBLEtBQVI7QUFDSSxXQUFLLEtBQUw7QUFBWSxlQUFPLENBQVA7O0FBQ1osV0FBSyxRQUFMO0FBQWUsZUFBTyxHQUFQOztBQUNmLFdBQUssUUFBTDtBQUFlLGVBQU8sQ0FBUDs7QUFDZjtBQUFTLGVBQU8sQ0FBUDtBQUpiO0FBTUg7O0FBQ0RwQixZQUFVLENBQUNzRCxxQkFBWCxHQUFtQ0EscUJBQW5DO0FBQ0gsQ0E5Q0QsRUE4Q0d0RCxVQUFVLEtBQUtBLFVBQVUsR0FBRyxFQUFsQixDQTlDYixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU0yQixJQUFJLEdBQUcsTUFBYjtBQUNQLElBQU1sQyxlQUFlLEdBQUcsRUFBeEI7QUFDTyxJQUFJOEQsSUFBSjs7QUFDUCxDQUFDLFVBQVVBLElBQVYsRUFBZ0I7QUFDYixXQUFTdk0sZUFBVCxDQUF5QjVOLFNBQXpCLEVBQW9DK0ksTUFBcEMsRUFBNEM7QUFBQSxRQUNoQ3dOLElBRGdDLEdBQ3ZCdlcsU0FEdUIsQ0FDaEN1VyxJQURnQzs7QUFFeEMsUUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUHBLLCtEQUFBLENBQW1CcEQsTUFBbkI7QUFDQTtBQUNIOztBQUNELFFBQU15TixLQUFLLEdBQUdELElBQUksQ0FBQ3hJLEtBQUwsQ0FBVyxJQUFYLENBQWQ7QUFOd0MsUUFPbEM1UCxLQVBrQyxHQU9oQjZCLFNBUGdCLENBT2xDN0IsS0FQa0M7QUFBQSxRQU8zQkMsTUFQMkIsR0FPaEI0QixTQVBnQixDQU8zQjVCLE1BUDJCO0FBQUEsUUFRaENxWSxVQVJnQyxHQVFqQnpXLFNBUmlCLENBUWhDeVcsVUFSZ0M7QUFTeENHLHNFQUFBLENBQThCSCxVQUE5QixFQUEwQ0osZUFBMUM7O0FBQ0EsUUFBSSxDQUFDbFksS0FBTCxFQUFZO0FBQ1IsVUFBTWdaLElBQUksR0FBR0MsK0NBQUEsQ0FBYWYsZUFBZSxDQUFDYyxJQUE3QixDQUFiO0FBQ0FoWixXQUFLLEdBQUdpWixvREFBQSxDQUFrQkQsSUFBbEIsRUFBd0JkLGVBQXhCLEVBQXlDRyxLQUF6QyxDQUFSO0FBQ0g7O0FBQ0QsUUFBSSxDQUFDcFksTUFBTCxFQUFhO0FBQ1RBLFlBQU0sR0FBR2daLHFEQUFBLENBQW1CZixlQUFuQixFQUFvQ0csS0FBcEMsQ0FBVDtBQUNIOztBQUNELFFBQU1oYSxDQUFDLEdBQUcySixpREFBQSxDQUFXbkcsU0FBWCxFQUFzQjdCLEtBQXRCLENBQVY7QUFDQSxRQUFNMUIsQ0FBQyxHQUFHMEosaURBQUEsQ0FBV25HLFNBQVgsRUFBc0I1QixNQUF0QixDQUFWO0FBQ0EySyxVQUFNLENBQUN2TSxDQUFQLEdBQVdBLENBQVg7QUFDQXVNLFVBQU0sQ0FBQ3RNLENBQVAsR0FBV0EsQ0FBWDtBQUNBc00sVUFBTSxDQUFDNUssS0FBUCxHQUFlQSxLQUFmO0FBQ0E0SyxVQUFNLENBQUMzSyxNQUFQLEdBQWdCQSxNQUFoQjtBQUNIOztBQUNEK2IsTUFBSSxDQUFDdk0sZUFBTCxHQUF1QkEsZUFBdkI7QUFDSCxDQTFCRCxFQTBCR3VNLElBQUksS0FBS0EsSUFBSSxHQUFHLEVBQVosQ0ExQlA7O0FBMkJBLElBQU1wUixNQUFNLEdBQUdvRCxzREFBQSxFQUFmO0FBQ08sSUFBSW1NLGFBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxhQUFWLEVBQXlCO0FBQ3RCLFdBQVNoWSxPQUFULENBQWlCaVcsSUFBakIsRUFBdUJ4WSxNQUF2QixFQUErQjtBQUFBLFFBQ25CMEUsS0FEbUIsR0FDVDFFLE1BQU0sQ0FBQ3dDLGFBREUsQ0FDbkJrQyxLQURtQjtBQUUzQjBYLFFBQUksQ0FBQ3ZNLGVBQUwsQ0FBcUIySSxJQUFyQixFQUEyQnhOLE1BQTNCO0FBQ0EsV0FBT29ELHlEQUFBLENBQW1CcEQsTUFBbkIsRUFBMkJ0RyxLQUEzQixDQUFQO0FBQ0g7O0FBQ0Q2VixlQUFhLENBQUNoWSxPQUFkLEdBQXdCQSxPQUF4Qjs7QUFDQSxXQUFTSSxJQUFULENBQWMzQyxNQUFkLEVBQXNCO0FBQ2xCQSxVQUFNLENBQUM0QyxVQUFQLENBQWtCTCxPQUFsQixDQUEwQk0sR0FBMUIsQ0FBOEIyWCxJQUE5QixFQUFvQ2pZLE9BQXBDO0FBQ0g7O0FBQ0RnWSxlQUFhLENBQUM1WCxJQUFkLEdBQXFCQSxJQUFyQjtBQUNILENBWEQsRUFXRzRYLGFBQWEsS0FBS0EsYUFBYSxHQUFHLEVBQXJCLENBWGhCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ08sSUFBTThCLE1BQU0sR0FBRyxRQUFmO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFdBQWxCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGFBQXJCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLGNBQXRCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLE9BQWQ7QUFDQSxJQUFNQyxRQUFRLEdBQUcsU0FBakI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsVUFBbEI7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsWUFBcEI7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsWUFBcEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsU0FBbkI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsV0FBdEI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsWUFBdkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZUFBdkI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsZ0JBQXhCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFlBQXBCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGFBQXJCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFlBQXBCO0FBQ0EsSUFBTUMsSUFBSSxHQUFHLE1BQWI7QUFDQSxJQUFNQyxPQUFPLEdBQUcsUUFBaEI7QUFDQSxJQUFNQyxRQUFRLEdBQUcsU0FBakI7QUFDQSxJQUFNQyxNQUFNLEdBQUcsUUFBZjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLE1BQU0sMkNBQ2QvQixNQURjLEVBQ0wsVUFBQ25TLEtBQUQ7QUFBQSxTQUFXQSxLQUFYO0FBQUEsQ0FESyw0QkFFZG9TLFNBRmMsRUFFRixVQUFDcFMsS0FBRCxFQUFXO0FBQ3BCLE1BQUksQ0FBQ0EsS0FBSyxJQUFJLENBQVYsSUFBZSxDQUFuQixFQUFzQjtBQUNsQixXQUFPLE1BQU1BLEtBQU4sR0FBY0EsS0FBckI7QUFDSDs7QUFDRCxTQUFPLENBQUMsR0FBRCxJQUFRLEVBQUVBLEtBQUYsSUFBV0EsS0FBSyxHQUFHLENBQW5CLElBQXdCLENBQWhDLENBQVA7QUFDSCxDQVBjLDRCQVFkcVMsWUFSYyxFQVFDLFVBQUNyUyxLQUFEO0FBQUEsU0FBWUEsS0FBSyxHQUFHQSxLQUFwQjtBQUFBLENBUkQsNEJBU2RzUyxhQVRjLEVBU0UsVUFBQ3RTLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLElBQUksSUFBSUEsS0FBUixDQUFqQjtBQUFBLENBVEYsNEJBVWR1UyxLQVZjLEVBVU4sVUFBQ3ZTLEtBQUQsRUFBVztBQUNoQixNQUFJLENBQUNBLEtBQUssSUFBSSxDQUFWLElBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsV0FBTyxNQUFNQSxLQUFOLEdBQWNBLEtBQWQsR0FBc0JBLEtBQTdCO0FBQ0g7O0FBQ0QsU0FBTyxPQUFPLENBQUNBLEtBQUssSUFBSSxDQUFWLElBQWVBLEtBQWYsR0FBdUJBLEtBQXZCLEdBQStCLENBQXRDLENBQVA7QUFDSCxDQWZjLDRCQWdCZHdTLFFBaEJjLEVBZ0JILFVBQUN4UyxLQUFEO0FBQUEsU0FBWUEsS0FBSyxHQUFHQSxLQUFSLEdBQWdCQSxLQUE1QjtBQUFBLENBaEJHLDRCQWlCZHlTLFNBakJjLEVBaUJGLFVBQUN6UyxLQUFEO0FBQUEsU0FBWSxFQUFFQSxLQUFGLEdBQVVBLEtBQVYsR0FBa0JBLEtBQWxCLEdBQTBCLENBQXRDO0FBQUEsQ0FqQkUsNEJBa0JkMFMsT0FsQmMsRUFrQkosVUFBQzFTLEtBQUQsRUFBVztBQUNsQixNQUFJLENBQUNBLEtBQUssSUFBSSxDQUFWLElBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsV0FBTyxNQUFNQSxLQUFOLEdBQWNBLEtBQWQsR0FBc0JBLEtBQXRCLEdBQThCQSxLQUFyQztBQUNIOztBQUNELFNBQU8sQ0FBQyxHQUFELElBQVEsQ0FBQ0EsS0FBSyxJQUFJLENBQVYsSUFBZUEsS0FBZixHQUF1QkEsS0FBdkIsR0FBK0JBLEtBQS9CLEdBQXVDLENBQS9DLENBQVA7QUFDSCxDQXZCYyw0QkF3QmQyUyxVQXhCYyxFQXdCRCxVQUFDM1MsS0FBRDtBQUFBLFNBQVlBLEtBQUssR0FBR0EsS0FBUixHQUFnQkEsS0FBaEIsR0FBd0JBLEtBQXBDO0FBQUEsQ0F4QkMsNEJBeUJkNFMsV0F6QmMsRUF5QkEsVUFBQzVTLEtBQUQ7QUFBQSxTQUFZLElBQUksRUFBRUEsS0FBRixHQUFVQSxLQUFWLEdBQWtCQSxLQUFsQixHQUEwQkEsS0FBMUM7QUFBQSxDQXpCQSw0QkEwQmQ2UyxPQTFCYyxFQTBCSixVQUFDN1MsS0FBRCxFQUFXO0FBQ2xCLE1BQUksQ0FBQ0EsS0FBSyxJQUFJLENBQVYsSUFBZSxDQUFuQixFQUFzQjtBQUNsQixXQUFPLE1BQU1BLEtBQU4sR0FBY0EsS0FBZCxHQUFzQkEsS0FBdEIsR0FBOEJBLEtBQTlCLEdBQXNDQSxLQUE3QztBQUNIOztBQUNELFNBQU8sT0FBTyxDQUFDQSxLQUFLLElBQUksQ0FBVixJQUFlQSxLQUFmLEdBQXVCQSxLQUF2QixHQUErQkEsS0FBL0IsR0FBdUNBLEtBQXZDLEdBQStDLENBQXRELENBQVA7QUFDSCxDQS9CYyw0QkFnQ2Q4UyxVQWhDYyxFQWdDRCxVQUFDOVMsS0FBRDtBQUFBLFNBQVlBLEtBQUssR0FBR0EsS0FBUixHQUFnQkEsS0FBaEIsR0FBd0JBLEtBQXhCLEdBQWdDQSxLQUE1QztBQUFBLENBaENDLDRCQWlDZCtTLFdBakNjLEVBaUNBLFVBQUMvUyxLQUFEO0FBQUEsU0FBWSxFQUFFQSxLQUFGLEdBQVVBLEtBQVYsR0FBa0JBLEtBQWxCLEdBQTBCQSxLQUExQixHQUFrQ0EsS0FBbEMsR0FBMEMsQ0FBdEQ7QUFBQSxDQWpDQSw0QkFrQ2RnVCxVQWxDYyxFQWtDRCxVQUFDaFQsS0FBRDtBQUFBLFNBQVksT0FBTyxJQUFJbkwsSUFBSSxDQUFDK0ssR0FBTCxDQUFTL0ssSUFBSSxDQUFDdVIsRUFBTCxHQUFVcEcsS0FBbkIsQ0FBWCxDQUFaO0FBQUEsQ0FsQ0MsNEJBbUNkaVQsYUFuQ2MsRUFtQ0UsVUFBQ2pULEtBQUQ7QUFBQSxTQUFZLElBQUluTCxJQUFJLENBQUMrSyxHQUFMLENBQVVJLEtBQUssR0FBR25MLElBQUksQ0FBQ3VSLEVBQWQsR0FBb0IsQ0FBN0IsQ0FBaEI7QUFBQSxDQW5DRiw0QkFvQ2Q4TSxjQXBDYyxFQW9DRyxVQUFDbFQsS0FBRDtBQUFBLFNBQVluTCxJQUFJLENBQUNnTCxHQUFMLENBQVVHLEtBQUssR0FBR25MLElBQUksQ0FBQ3VSLEVBQWQsR0FBb0IsQ0FBN0IsQ0FBWjtBQUFBLENBcENILDRCQXFDZCtNLFdBckNjLEVBcUNBLFVBQUNuVCxLQUFELEVBQVc7QUFDdEIsTUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixXQUFPLENBQVA7QUFDSDs7QUFDRCxNQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLFdBQU8sQ0FBUDtBQUNIOztBQUNELE1BQUksQ0FBQ0EsS0FBSyxJQUFJLENBQVYsSUFBZSxDQUFuQixFQUFzQjtBQUNsQixXQUFPLE1BQU1uTCxJQUFJLENBQUNzZixHQUFMLENBQVMsSUFBVCxFQUFlblUsS0FBSyxHQUFHLENBQXZCLENBQWI7QUFDSDs7QUFDRCxTQUFPLE9BQU8sQ0FBQ25MLElBQUksQ0FBQ3NmLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFELElBQU9uVSxLQUFLLEdBQUcsQ0FBZixDQUFaLENBQUQsR0FBa0MsQ0FBekMsQ0FBUDtBQUNILENBaERjLDRCQWlEZG9ULGNBakRjLEVBaURHLFVBQUNwVCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxLQUFLLENBQVYsR0FBYyxDQUFkLEdBQWtCbkwsSUFBSSxDQUFDc2YsR0FBTCxDQUFTLElBQVQsRUFBZW5VLEtBQUssR0FBRyxDQUF2QixDQUE5QjtBQUFBLENBakRILDRCQWtEZHFULGVBbERjLEVBa0RJLFVBQUNyVCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxLQUFLLENBQVYsR0FBYyxDQUFkLEdBQWtCLElBQUluTCxJQUFJLENBQUNzZixHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBRCxHQUFNblUsS0FBbEIsQ0FBbEM7QUFBQSxDQWxESiw0QkFtRGRzVCxRQW5EYyxFQW1ESCxVQUFDdFQsS0FBRCxFQUFXO0FBQ25CLE1BQUksQ0FBQ0EsS0FBSyxJQUFJLENBQVYsSUFBZSxDQUFuQixFQUFzQjtBQUNsQixXQUFPLENBQUMsR0FBRCxJQUFRbkwsSUFBSSxDQUFDd08sSUFBTCxDQUFVLElBQUlyRCxLQUFLLEdBQUdBLEtBQXRCLElBQStCLENBQXZDLENBQVA7QUFDSDs7QUFDRCxTQUFPLE9BQU9uTCxJQUFJLENBQUN3TyxJQUFMLENBQVUsSUFBSSxDQUFDckQsS0FBSyxJQUFJLENBQVYsSUFBZUEsS0FBN0IsSUFBc0MsQ0FBN0MsQ0FBUDtBQUNILENBeERjLDRCQXlEZHVULFdBekRjLEVBeURBLFVBQUN2VCxLQUFEO0FBQUEsU0FBWSxJQUFJbkwsSUFBSSxDQUFDd08sSUFBTCxDQUFVLElBQUlyRCxLQUFLLEdBQUdBLEtBQXRCLENBQWhCO0FBQUEsQ0F6REEsNEJBMERkd1QsWUExRGMsRUEwREMsVUFBQ3hULEtBQUQ7QUFBQSxTQUFXbkwsSUFBSSxDQUFDd08sSUFBTCxDQUFVLElBQUksRUFBRXJELEtBQUYsR0FBVUEsS0FBeEIsQ0FBWDtBQUFBLENBMURELDRCQTJEZHlULE9BM0RjLEVBMkRKLFVBQUN6VCxLQUFELEVBQVc7QUFDbEIsTUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixXQUFPLENBQVA7QUFDSDs7QUFDRCxNQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLFdBQU8sQ0FBUDtBQUNIOztBQUNEQSxPQUFLLElBQUksQ0FBVDs7QUFDQSxNQUFJQSxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ1gsV0FBTyxDQUFDLEdBQUQsR0FBT25MLElBQUksQ0FBQ3NmLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBTW5VLEtBQUssR0FBRyxDQUFkLENBQVosQ0FBUCxHQUF1Q25MLElBQUksQ0FBQ2dMLEdBQUwsQ0FBUyxDQUFDRyxLQUFLLEdBQUcsR0FBVCxJQUFnQixDQUFoQixHQUFvQm5MLElBQUksQ0FBQ3VSLEVBQWxDLENBQTlDO0FBQ0g7O0FBQ0QsU0FBTyxNQUFNdlIsSUFBSSxDQUFDc2YsR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFDLEVBQUQsSUFBT25VLEtBQUssR0FBRyxDQUFmLENBQVosQ0FBTixHQUF1Q25MLElBQUksQ0FBQ2dMLEdBQUwsQ0FBUyxDQUFDRyxLQUFLLEdBQUcsR0FBVCxJQUFnQixDQUFoQixHQUFvQm5MLElBQUksQ0FBQ3VSLEVBQWxDLENBQXZDLEdBQStFLENBQXRGO0FBQ0gsQ0F2RWMsNEJBd0Vkc04sVUF4RWMsRUF3RUQsVUFBQzFULEtBQUQsRUFBVztBQUNyQixNQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLFdBQU8sQ0FBUDtBQUNIOztBQUNELE1BQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2IsV0FBTyxDQUFQO0FBQ0g7O0FBQ0QsU0FBTyxDQUFDbkwsSUFBSSxDQUFDc2YsR0FBTCxDQUFTLENBQVQsRUFBWSxNQUFNblUsS0FBSyxHQUFHLENBQWQsQ0FBWixDQUFELEdBQWlDbkwsSUFBSSxDQUFDZ0wsR0FBTCxDQUFTLENBQUNHLEtBQUssR0FBRyxHQUFULElBQWdCLENBQWhCLEdBQW9CbkwsSUFBSSxDQUFDdVIsRUFBbEMsQ0FBeEM7QUFDSCxDQWhGYyw0QkFpRmR1TixXQWpGYyxFQWlGQSxVQUFDM1QsS0FBRCxFQUFXO0FBQ3RCLE1BQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2IsV0FBTyxDQUFQO0FBQ0g7O0FBQ0QsTUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixXQUFPLENBQVA7QUFDSDs7QUFDRCxTQUFPbkwsSUFBSSxDQUFDc2YsR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFDLEVBQUQsR0FBTW5VLEtBQWxCLElBQTJCbkwsSUFBSSxDQUFDZ0wsR0FBTCxDQUFTLENBQUNHLEtBQUssR0FBRyxHQUFULElBQWdCLENBQWhCLEdBQW9CbkwsSUFBSSxDQUFDdVIsRUFBbEMsQ0FBM0IsR0FBbUUsQ0FBMUU7QUFDSCxDQXpGYyw0QkEwRmR3TixJQTFGYyxFQTBGUCxVQUFDNVQsS0FBRCxFQUFXO0FBQ2YsTUFBTWdMLENBQUMsR0FBRyxVQUFVLEtBQXBCOztBQUNBLE1BQUksQ0FBQ2hMLEtBQUssSUFBSSxDQUFWLElBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsV0FBTyxPQUFPQSxLQUFLLEdBQUdBLEtBQVIsSUFBaUIsQ0FBQ2dMLENBQUMsR0FBRyxDQUFMLElBQVVoTCxLQUFWLEdBQWtCZ0wsQ0FBbkMsQ0FBUCxDQUFQO0FBQ0g7O0FBQ0QsU0FBTyxPQUFPLENBQUNoTCxLQUFLLElBQUksQ0FBVixJQUFlQSxLQUFmLElBQXdCLENBQUNnTCxDQUFDLEdBQUcsQ0FBTCxJQUFVaEwsS0FBVixHQUFrQmdMLENBQTFDLElBQStDLENBQXRELENBQVA7QUFDSCxDQWhHYyw0QkFpR2Q2SSxPQWpHYyxFQWlHSixVQUFDN1QsS0FBRCxFQUFXO0FBQ2xCLE1BQU1nTCxDQUFDLEdBQUcsT0FBVjtBQUNBLFNBQU9oTCxLQUFLLEdBQUdBLEtBQVIsSUFBaUIsQ0FBQ2dMLENBQUMsR0FBRyxDQUFMLElBQVVoTCxLQUFWLEdBQWtCZ0wsQ0FBbkMsQ0FBUDtBQUNILENBcEdjLDRCQXFHZDhJLFFBckdjLEVBcUdILFVBQUM5VCxLQUFELEVBQVc7QUFDbkIsTUFBTWdMLENBQUMsR0FBRyxPQUFWO0FBQ0EsU0FBTyxFQUFFaEwsS0FBRixHQUFVQSxLQUFWLElBQW1CLENBQUNnTCxDQUFDLEdBQUcsQ0FBTCxJQUFVaEwsS0FBVixHQUFrQmdMLENBQXJDLElBQTBDLENBQWpEO0FBQ0gsQ0F4R2MsNEJBeUdkK0ksTUF6R2MsRUF5R0wsVUFBQy9ULEtBQUQsRUFBVztBQUNqQixNQUFJQSxLQUFLLEdBQUcsR0FBWixFQUFpQjtBQUNiLFdBQU9rVSxNQUFNLENBQUNGLFNBQUQsQ0FBTixDQUFrQmhVLEtBQUssR0FBRyxDQUExQixJQUErQixHQUF0QztBQUNIOztBQUNELFNBQU9rVSxNQUFNLENBQUNELFVBQUQsQ0FBTixDQUFtQmpVLEtBQUssR0FBRyxDQUFSLEdBQVksQ0FBL0IsSUFBb0MsR0FBcEMsR0FBMEMsR0FBakQ7QUFDSCxDQTlHYyw0QkErR2RnVSxTQS9HYyxFQStHRixVQUFDaFUsS0FBRDtBQUFBLFNBQVksSUFBSWtVLE1BQU0sQ0FBQ0QsVUFBRCxDQUFOLENBQW1CLElBQUlqVSxLQUF2QixDQUFoQjtBQUFBLENBL0dFLDRCQWdIZGlVLFVBaEhjLEVBZ0hELFVBQUNqVSxLQUFELEVBQVc7QUFDckIsTUFBSUEsS0FBSyxHQUFHLElBQUksSUFBaEIsRUFBc0I7QUFDbEIsV0FBTyxTQUFTQSxLQUFULEdBQWlCQSxLQUF4QjtBQUNIOztBQUNELE1BQUlBLEtBQUssR0FBRyxJQUFJLElBQWhCLEVBQXNCO0FBQ2xCLFdBQU8sVUFBVUEsS0FBSyxJQUFJLE1BQU0sSUFBekIsSUFBaUNBLEtBQWpDLEdBQXlDLElBQWhEO0FBQ0g7O0FBQ0QsTUFBSUEsS0FBSyxHQUFHLE1BQU0sSUFBbEIsRUFBd0I7QUFDcEIsV0FBTyxVQUFVQSxLQUFLLElBQUksT0FBTyxJQUExQixJQUFrQ0EsS0FBbEMsR0FBMEMsTUFBakQ7QUFDSDs7QUFDRCxTQUFPLFVBQVVBLEtBQUssSUFBSSxRQUFRLElBQTNCLElBQW1DQSxLQUFuQyxHQUEyQyxRQUFsRDtBQUNILENBM0hjLFdBQVosQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JQOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDTyxJQUFNb1UsS0FBSyxHQUFHLE9BQWQ7QUFDQSxJQUFJQyxjQUFKOztBQUNQLENBQUMsVUFBVUEsY0FBVixFQUEwQjtBQUN2QixXQUFTbmMsTUFBVCxDQUFnQkgsU0FBaEIsRUFBMkJqQyxNQUEzQixFQUFtQztBQUFBLFFBQ3ZCd2UsS0FEdUIsR0FDYnZjLFNBRGEsQ0FDdkJ1YyxLQUR1QjtBQUFBLFFBRXZCQyxNQUZ1QixHQUVaRCxLQUZZLENBRXZCQyxNQUZ1Qjs7QUFHL0IsUUFBSSxFQUFDQSxNQUFELGFBQUNBLE1BQUQsZUFBQ0EsTUFBTSxDQUFFdmdCLE1BQVQsQ0FBSixFQUFxQjtBQUNqQjhCLFlBQU0sQ0FBQ0MsS0FBUCxDQUFhQyxPQUFiLENBQXFCLDJCQUFyQjtBQUNBO0FBQ0g7O0FBQ0QsUUFBSXNlLEtBQUssQ0FBQzlYLElBQU4sS0FBZTBSLFNBQW5CLEVBQThCO0FBQzFCb0csV0FBSyxDQUFDOVgsSUFBTixHQUFhLENBQWI7QUFDSDs7QUFDRDhYLFNBQUssQ0FBQzlYLElBQU4sSUFBYzFHLE1BQU0sQ0FBQ3FDLE9BQVAsQ0FBZXFFLElBQTdCO0FBVitCLFFBV3ZCQSxJQVh1QixHQVdkOFgsS0FYYyxDQVd2QjlYLElBWHVCO0FBWS9CLFFBQUltTCxNQUFNLEdBQUcsQ0FBYjtBQUNBNE0sVUFBTSxDQUFDdlgsT0FBUCxDQUFlLFVBQUN3WCxLQUFELEVBQVc7QUFBQTs7QUFDdEIsVUFBSSxDQUFDQSxLQUFLLENBQUNoWSxJQUFYLEVBQWlCO0FBQ2IxRyxjQUFNLENBQUNDLEtBQVAsQ0FBYUMsT0FBYixDQUFxQix3QkFBckI7QUFDQTtBQUNIOztBQUNELFVBQUl3ZSxLQUFLLENBQUM3TSxNQUFOLEtBQWlCdUcsU0FBckIsRUFBZ0M7QUFDNUJ2RyxjQUFNLEdBQUc2TSxLQUFLLENBQUM3TSxNQUFmO0FBQ0g7O0FBQ0QsVUFBTThNLFVBQVUsNEJBQUdELEtBQUgsYUFBR0EsS0FBSCx3Q0FBR0EsS0FBSyxDQUFFTixNQUFWLGtEQUFHLGNBQWVRLFdBQWYsRUFBSCx5RUFBbUN2QywyQ0FBbkQ7QUFDQSxVQUFNd0MsWUFBWSxHQUFHVCwyQ0FBTSxDQUFDTyxVQUFELENBQTNCOztBQUNBLFVBQUksQ0FBQ0UsWUFBTCxFQUFtQjtBQUNmN2UsY0FBTSxDQUFDQyxLQUFQLENBQWFDLE9BQWIsZ0NBQTZDa2UsMkNBQTdDO0FBQ0E7QUFDSDs7QUFDRCxVQUFNbFUsS0FBSyxHQUFHLENBQUN4RCxJQUFJLEdBQUdtTCxNQUFSLElBQWtCNk0sS0FBSyxDQUFDaFksSUFBdEM7QUFDQW1MLFlBQU0sSUFBSTZNLEtBQUssQ0FBQ2hZLElBQWhCOztBQUNBLFVBQUl3RCxLQUFLLEdBQUcsQ0FBUixJQUFhQSxLQUFLLEdBQUcsQ0FBekIsRUFBNEI7QUFDeEI7QUFDSDs7QUFDRCxVQUFNNFUsV0FBVyxHQUFHRCxZQUFZLENBQUMzVSxLQUFELENBQWhDOztBQUNBLFVBQUksQ0FBQ3dVLEtBQUssQ0FBQzlTLEVBQVgsRUFBZTtBQUNYNUwsY0FBTSxDQUFDQyxLQUFQLENBQWFDLE9BQWIsQ0FBcUIsZ0NBQXJCO0FBQ0E7QUFDSDs7QUFDRCxVQUFJLENBQUN3ZSxLQUFLLENBQUMvUyxJQUFYLEVBQWlCO0FBQ2IrUyxhQUFLLENBQUMvUyxJQUFOLEdBQWEsRUFBYjtBQUNIOztBQTFCcUIsVUEyQmRDLEVBM0JjLEdBMkJEOFMsS0EzQkMsQ0EyQmQ5UyxFQTNCYztBQUFBLFVBMkJWRCxJQTNCVSxHQTJCRCtTLEtBM0JDLENBMkJWL1MsSUEzQlU7QUE0QnRCLFVBQU1vVCxLQUFLLEdBQUc5YyxTQUFkO0FBQ0FMLFlBQU0sQ0FBQ0QsSUFBUCxDQUFZaUssRUFBWixFQUFnQjFFLE9BQWhCLENBQXdCLFVBQUM4WCxHQUFELEVBQVM7QUFDN0IsWUFBSXJULElBQUksQ0FBQ3FULEdBQUQsQ0FBSixLQUFjNUcsU0FBbEIsRUFBNkI7QUFBQTs7QUFDekJ6TSxjQUFJLENBQUNxVCxHQUFELENBQUosaUJBQVlELEtBQUssQ0FBQ0MsR0FBRCxDQUFqQixtREFBMEIsQ0FBMUI7QUFDSDs7QUFDRCxZQUFNQyxTQUFTLEdBQUd0VCxJQUFJLENBQUNxVCxHQUFELENBQXRCO0FBQ0EsWUFBTUUsT0FBTyxHQUFHdFQsRUFBRSxDQUFDb1QsR0FBRCxDQUFsQjs7QUFDQSxZQUFJLE9BQU9DLFNBQVAsS0FBcUIsUUFBckIsSUFBaUMsT0FBT0MsT0FBUCxLQUFtQixRQUF4RCxFQUFrRTtBQUM5RCxjQUFNQyxVQUFVLEdBQUdGLFNBQVMsR0FBR0gsV0FBVyxJQUFJSSxPQUFPLEdBQUdELFNBQWQsQ0FBMUM7QUFDQUYsZUFBSyxDQUFDQyxHQUFELENBQUwsR0FBYUcsVUFBYjtBQUNIO0FBQ0osT0FWRDtBQVdILEtBeENEOztBQXlDQSxRQUFJWCxLQUFLLENBQUNZLElBQU4sSUFBY1osS0FBSyxDQUFDOVgsSUFBTixHQUFhbUwsTUFBL0IsRUFBdUM7QUFDbkMyTSxXQUFLLENBQUM5WCxJQUFOLEdBQWEsQ0FBYjtBQUNIO0FBQ0o7O0FBQ0Q2WCxnQkFBYyxDQUFDbmMsTUFBZixHQUF3QkEsTUFBeEI7O0FBQ0EsV0FBU08sSUFBVCxDQUFjM0MsTUFBZCxFQUFzQjtBQUNsQkEsVUFBTSxDQUFDNEMsVUFBUCxDQUFrQmMsVUFBbEIsQ0FBNkJiLEdBQTdCLENBQWlDeWIsS0FBakMsRUFBd0NsYyxNQUF4QztBQUNIOztBQUNEbWMsZ0JBQWMsQ0FBQzViLElBQWYsR0FBc0JBLElBQXRCO0FBQ0gsQ0FoRUQsRUFnRUc0YixjQUFjLEtBQUtBLGNBQWMsR0FBRyxFQUF0QixDQWhFakIsRTs7Ozs7Ozs7Ozs7Ozs7QUNId0M7QUFFekIsU0FBUyxTQUFTO0lBQ2hDLE1BQU0sU0FBUyxHQUFHO1FBQ2pCLElBQUksRUFBRSxXQUFXO1FBQ2pCLFFBQVEsRUFBRTtZQUNULElBQUksRUFBRSxXQUFXO1lBQ2pCLENBQUMsRUFBRSxFQUFFO1lBQ0wsQ0FBQyxFQUFFLEVBQUU7WUFDTCxNQUFNLEVBQUUsR0FBRztZQUNYLE1BQU0sRUFBRSxHQUFHO1lBQ1gsUUFBUSxFQUFFLEdBQUc7WUFDYixLQUFLLEVBQUUsR0FBRztZQUNWLFFBQVEsRUFBRSxDQUFDO29CQUNWLElBQUksRUFBRSxPQUFPO29CQUNiLEdBQUcsRUFBRSxpREFBWTtvQkFDakIsS0FBSyxFQUFFLEdBQUc7aUJBQ1YsQ0FBQztZQUNGLFFBQVEsQ0FBQyxJQUFZO2dCQUNwQixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7WUFDOUIsQ0FBQztTQUNEO0tBQ0QsQ0FBQztJQUVGLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFrQixDQUFDLENBQUM7SUFFckQsT0FBTyxTQUFTLENBQUM7QUFDbEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JELE1BQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQztBQUV4QixNQUFNLFNBQVMsR0FBRyxjQUFjLENBQUM7QUFDakMsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDO0FBRTNCLE1BQU0sZUFBZSxHQUFHLEdBQUcsWUFBWSx5QkFBeUIsQ0FBQztBQUNqRSxNQUFNLFlBQVksR0FBRyxHQUFHLFlBQVksMEJBQTBCLENBQUM7QUFFL0QsTUFBTSxXQUFXLEdBQUcsR0FBRyxZQUFZLDBCQUEwQixDQUFDO0FBQzlELE1BQU0sWUFBWSxHQUFHLEdBQUcsWUFBWSwyQkFBMkIsQ0FBQztBQUVoRSxNQUFNLFVBQVUsR0FBRyxHQUFHLFlBQVksdUJBQXVCLENBQUM7QUFFMUQsTUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiUztBQUVGO0FBQ0Q7QUFDUDtBQUV6QixNQUFNLFlBQWEsU0FBUSw0REFBWTtJQUNyRCxZQUFZLFNBQXVCLEVBQUU7UUFDcEMsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxJQUFJLDhDQUFjLENBQUM7UUFFcEQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWQsK0RBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsNkRBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNEOzs7Ozs7Ozs7Ozs7Ozs7O0FDZGlDO0FBQ3dCO0FBR25ELElBQVUsb0JBQW9CLENBMkNwQztBQTNDRCxXQUFpQixvQkFBb0I7SUFDcEMsU0FBZ0IsTUFBTSxDQUFDLEtBQVksRUFBRSxNQUFvQjtRQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNmLE9BQU87U0FDUDtRQUVELE1BQU0sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVoRSxJQUFJLGNBQWMsQ0FBQyxlQUFlLElBQUksQ0FBQyxFQUFFO1lBQ3hDLE9BQU87U0FDUDtRQUVELE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQXlCLENBQUM7UUFFekUsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFO1lBQzFDLE9BQU87U0FDUDtRQUVELE1BQU0sU0FBUyxHQUFJLE1BQU0sQ0FBQyxRQUEyQixDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRW5FLFNBQVMsQ0FBQyxZQUFZLENBQ3JCLE1BQU0sQ0FBQyxDQUFDLEVBQ1IsTUFBTSxDQUFDLENBQUMsRUFDUixNQUFNLENBQUMsQ0FBQyxFQUNSLE1BQU0sQ0FBQyxDQUFDLEVBQ1IsTUFBTSxDQUFDLEVBQUUsRUFDVCxNQUFNLENBQUMsRUFBRSxDQUNULENBQUM7UUFFRixNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDekMsTUFBTSxDQUFDLEdBQUcsaURBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLEdBQUcsaURBQVUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFcEMsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDMUIsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDekIsU0FBUyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDcEMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBcENlLDJCQUFNLFNBb0NyQjtJQUVELFNBQWdCLElBQUksQ0FBQyxNQUFvQjtRQUN4QywyREFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsNkNBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBSGUseUJBQUksT0FHbkI7QUFDRixDQUFDLEVBM0NnQixvQkFBb0IsS0FBcEIsb0JBQW9CLFFBMkNwQzs7Ozs7Ozs7Ozs7Ozs7O0FDaERtRDtBQUVyQyxNQUFNLGNBQWUsU0FBUSw4REFBYztJQUN6RCxLQUFLO1FBQ0osTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QixTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRSxTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBQ0Q7Ozs7Ozs7Ozs7Ozs7OztBQ1Q4QztBQUVoQyxNQUFNLHFCQUFxQjtJQUExQztRQUNVLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNwQyxjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQXlCLENBQUM7UUFFdEQsWUFBTyxHQUFHLENBQUMsS0FBYSxFQUFFLE1BQWMsRUFBd0IsRUFBRTtZQUNqRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMvQixNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQWtCLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2pDLElBQUksR0FBRyxFQUFFO3dCQUNSLFFBQVEsR0FBRyxpRUFBcUIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFrQixDQUFDO3dCQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBQ2pDO3lCQUFNO3dCQUNOLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLHFCQUFxQixLQUFLLFlBQVksQ0FBQyxDQUFDO3FCQUM3RDtpQkFDRDtnQkFDRCxPQUFPLFFBQVEsQ0FBQzthQUNoQjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQztJQUtGLENBQUM7SUFIQSxJQUFJLENBQUMsTUFBYztRQUNsQixNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDRDs7Ozs7Ozs7Ozs7Ozs7QUN2Qk0sU0FBUyxHQUFHLENBQUMsVUFBc0I7SUFDekMsT0FBTztRQUNOLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsQ0FBQztRQUNULFNBQVMsRUFBRSxDQUFDO1FBQ1osVUFBVSxFQUFFLENBQUM7UUFDYixVQUFVLEVBQUUsQ0FBQztRQUNiLFVBQVUsRUFBRTtZQUNYLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLFFBQVE7U0FDZjtRQUNELFFBQVEsQ0FBQyxJQUFZO1lBQ3BCLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzlDLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzlDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNqRSxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsZ0JBQWdCLFVBQVUsZ0JBQWdCLFVBQVUsS0FBSyxDQUFDO2dCQUN2RyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUNoQjtRQUNGLENBQUM7S0FDRCxDQUFDO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JpQjtBQUNnQjtBQUNNO0FBQ007QUFPL0IsU0FBUyxJQUFJLENBQUMsVUFBc0I7SUFDbEQsU0FBUyxXQUFXLENBQUMsSUFBb0I7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxPQUFPO1FBQ04sSUFBSSxFQUFFLFdBQVc7UUFDakIsUUFBUSxFQUFFO1lBQ1QsVUFBVSxFQUFFO2dCQUNYLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSwrQ0FBVTtnQkFDZixNQUFNLEVBQUUsQ0FBQztnQkFDVCxNQUFNLEVBQUUsQ0FBQzthQUNUO1lBQ0QsTUFBTSxFQUFFO2dCQUNQLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRTtvQkFDTCxJQUFJLEVBQUUsV0FBVztvQkFDakIsQ0FBQyxFQUFFLEVBQUU7b0JBQ0wsQ0FBQyxFQUFFLEVBQUU7b0JBQ0wsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsTUFBTSxFQUFFLEVBQUU7b0JBQ1YsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsTUFBTSxFQUFFLFFBQVE7aUJBQ2hCO2FBQ0Q7WUFDRCxNQUFNLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFO29CQUNMO3dCQUNDLElBQUksRUFBRSxTQUFTO3dCQUNmLENBQUMsRUFBRSxHQUFHO3dCQUNOLENBQUMsRUFBRSxHQUFHO3dCQUNOLE1BQU0sRUFBRSxFQUFFO3dCQUNWLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO3FCQUNsRDtvQkFDRDt3QkFDQyxJQUFJLEVBQUUsTUFBTTt3QkFDWixJQUFJLEVBQUUsZ0NBQWdDO3dCQUN0QyxJQUFJLEVBQUUsUUFBUTtxQkFDZDtvQkFDRDt3QkFDQyxJQUFJLEVBQUUsTUFBTTt3QkFDWixJQUFJLEVBQUU7NEJBQ0wsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTs0QkFDOUIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTs0QkFDaEMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTs0QkFDbEMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTs0QkFDaEMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTt5QkFDOUI7d0JBQ0QsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7d0JBQ3BELE1BQU0sRUFBRSxRQUFRO3FCQUNoQjtpQkFDRDthQUNEO1lBQ0QsS0FBSyxFQUFFO2dCQUNOLElBQUksRUFBRSxXQUFXO2dCQUNqQixRQUFRLEVBQUU7b0JBQ1QsMkNBQUksQ0FBQzt3QkFDSixJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLDJDQUFNLEVBQUUsT0FBTyxFQUFFLFdBQVc7cUJBQzlELENBQUM7b0JBQ0YsMkNBQUksQ0FBQzt3QkFDSixJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLDhDQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVc7cUJBQ3BFLENBQUM7aUJBQ0Y7YUFDRDtZQUNELFFBQVEsRUFBRTtnQkFDVCxJQUFJLEVBQUUsV0FBVztnQkFDakIsQ0FBQyxFQUFFLEdBQUc7Z0JBQ04sQ0FBQyxFQUFFLEdBQUc7Z0JBQ04sUUFBUSxFQUFFLENBQUMsa0RBQVEsRUFBRSxDQUFDO2FBQ3RCO1lBQ0QsR0FBRyxFQUFFO2dCQUNKLElBQUksRUFBRSxPQUFPO2dCQUNiLENBQUMsRUFBRSxHQUFHO2dCQUNOLE1BQU0sRUFBRSxHQUFHO2dCQUNYLE1BQU0sRUFBRSxHQUFHO2dCQUNYLEtBQUssRUFBRSxHQUFHO2dCQUNWLEdBQUcsRUFBRSxhQUFhO2dCQUNsQixhQUFhO29CQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixDQUFDO2dCQUNELFlBQVk7b0JBQ1gsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ2xCLENBQUM7YUFDRDtZQUNELFVBQVUsRUFBRTtnQkFDWCxJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsZ0RBQVc7Z0JBQ2hCLENBQUMsRUFBRSxHQUFHO2dCQUNOLENBQUMsRUFBRSxHQUFHO2dCQUNOLEtBQUssRUFBRSxHQUFHO2dCQUNWLElBQUksRUFBRTtvQkFDTCxLQUFLLEVBQUUsUUFBUTtvQkFDZixLQUFLLEVBQUUsQ0FBQztpQkFDRDtnQkFDUixRQUFRLENBQUMsSUFBWTtvQkFDcEIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQzt3QkFDeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7NEJBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzt5QkFDcEI7cUJBQ0Q7Z0JBQ0YsQ0FBQztnQkFDRCxhQUFhLENBQUMsQ0FBTTtvQkFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO3FCQUNqQjt5QkFBTTt3QkFDTixJQUFJLENBQUMsSUFBSSxHQUFHOzRCQUNYLEtBQUssRUFBRSxRQUFROzRCQUNmLEtBQUssRUFBRSxDQUFDO3lCQUNSLENBQUM7cUJBQ0Y7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7YUFDRDtZQUNELFdBQVcsRUFBRTtnQkFDWixJQUFJLEVBQUUsV0FBVztnQkFDakIsQ0FBQyxFQUFFLEdBQUc7Z0JBQ04sQ0FBQyxFQUFFLEdBQUc7Z0JBQ04sUUFBUSxFQUFFO29CQUNULElBQUksRUFBRSxPQUFPO29CQUNiLEdBQUcsRUFBRSxpREFBWTtvQkFDakIsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsS0FBSyxFQUFFLENBQUM7b0JBQ1IsS0FBSyxFQUFFO3dCQUNOLElBQUksRUFBRSxJQUFJO3dCQUNWLE1BQU0sRUFBRTs0QkFDUDtnQ0FDQyxJQUFJLEVBQUUsQ0FBQztnQ0FDUCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFOzZCQUNkOzRCQUNEO2dDQUNDLE1BQU0sRUFBRSxVQUFVO2dDQUNsQixJQUFJLEVBQUUsQ0FBQztnQ0FDUCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7NkJBQzFCOzRCQUNEO2dDQUNDLE1BQU0sRUFBRSxhQUFhO2dDQUNyQixJQUFJLEVBQUUsQ0FBQztnQ0FDUCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7NkJBQ3RCOzRCQUNEO2dDQUNDLE1BQU0sRUFBRSxjQUFjO2dDQUN0QixJQUFJLEVBQUUsQ0FBQztnQ0FDUCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzZCQUNaO3lCQUNEO3FCQUNEO2lCQUNEO2FBQ0Q7WUFDRCxHQUFHLEVBQUUseUNBQUcsQ0FBQyxVQUFVLENBQUM7U0FDcEI7UUFDRCxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QixDQUFDO0tBQ0QsQ0FBQztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDM0tELE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztBQWFYLFNBQVMsSUFBSSxDQUFDLEtBQXFCO0lBQ3pDLFNBQVMsUUFBUTtRQUNoQixPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUM1RCxDQUFDO0lBRUQsT0FBTztRQUNOLElBQUksRUFBRSxXQUFXO1FBQ2pCLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUc7UUFDM0IsQ0FBQyxFQUFFLEdBQUc7UUFDTixRQUFRLEVBQUUsQ0FBQztRQUNYLFVBQVUsQ0FBQyxJQUFZO1lBQ3RCLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7WUFDcEQsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUMvQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFO2dCQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7UUFDRixDQUFDO1FBQ0QsUUFBUSxDQUFDLElBQVk7WUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixDQUFDO1FBQ0QsUUFBUSxFQUFFO1lBQ1QsSUFBSSxFQUFFO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxRQUFRLEVBQUU7Z0JBQ2hCLFVBQVUsRUFBRTtvQkFDWCxJQUFJLEVBQUUsRUFBRTtvQkFDUixLQUFLLEVBQUUsUUFBUTtvQkFDZixLQUFLLEVBQUUsUUFBUTtvQkFDZixhQUFhLEVBQUUsUUFBUTtpQkFDdkI7Z0JBQ0QsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsYUFBYSxFQUFFLEdBQUcsRUFBRTtvQkFDbkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztnQkFDRCxRQUFRO29CQUNQLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7YUFDRDtZQUNELEtBQUssRUFBRTtnQkFDTixJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUs7Z0JBQ2hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsYUFBYSxFQUFFLEdBQUcsRUFBRTtvQkFDbkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEIsQ0FBQzthQUNEO1NBQ0Q7S0FDRCxDQUFDO0FBQ0gsQ0FBQzs7Ozs7OztVQ2xFRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzRDtBQUNWO0FBQ0k7QUFDTztBQUNMO0FBQ0E7QUFFSztBQUNaO0FBQ2pCO0FBR1I7QUFHbEIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUNqQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBR2xDLE1BQU0sTUFBTSxHQUFHLElBQUksNERBQVksRUFBRSxDQUFDO0FBQ2xDLHNFQUE4QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLCtEQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLGlFQUF5QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLDJEQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVCLDBEQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUNoQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFaEQsTUFBTSxVQUFVLEdBQUc7SUFDbEIsYUFBYTtRQUNaLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELGFBQWE7UUFDWixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO0lBQ3BDLENBQUM7Q0FDRCxDQUFDO0FBR0YsTUFBTSxHQUFHLEdBQUcsOENBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM3QixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDWixNQUFNLENBQUMsSUFBSSxHQUFHLEdBQXVCLENBQUM7QUFFdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUdqQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5QyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUc5QyxNQUFNLFlBQVksR0FBRyxJQUFJLG1EQUFZLEVBQUUsQ0FBQztBQUN4QyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDdkMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ2pDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUNyQyxZQUFZLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDaEMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMzQixZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztBQUN2RCxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztBQUM3QyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUNoRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBR3RELE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FDN0IsZ0RBQVcsRUFDWDtJQUNDLEtBQUssRUFBRSxnREFBVztJQUNsQixLQUFLLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJO0lBQ2pDLE1BQU0sRUFBRSxJQUFJO0NBQ0ssQ0FDbEIsQ0FBQztBQUNGLFlBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FDbkMsZ0RBQVcsRUFDWDtJQUNDLEtBQUssRUFBRSxnREFBVztJQUNsQixLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJO0lBQzNCLE1BQU0sRUFBRSxJQUFJO0NBQ0ssQ0FDbEIsQ0FBQztBQUdGLE1BQU0sZUFBZSxHQUFHLElBQUksc0RBQXFCLEVBQUUsQ0FBQztBQUNwRCxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBYyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxpREFBWSxDQUFDLENBQUM7QUFDckUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0RBQWlCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLG9EQUFlLENBQUMsQ0FBQztBQUMzRSxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5leHBvcnQgY2xhc3MgQ2FudmFzRW5naW5lIGV4dGVuZHMgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGUgPSB7fSkge1xuICAgICAgICBtb2R1bGUuUGxhdGZvcm0gPSBtb2R1bGUuUGxhdGZvcm0gPz8gQ2FudmFzUGxhdGZvcm07XG4gICAgICAgIHN1cGVyKG1vZHVsZSk7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9wYXR0ZXJucyc7XG5leHBvcnQgKiBmcm9tICcuL3BsYXRmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZW5naW5lJztcbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXgsIFBvaW50IH0gZnJvbSAnQGUyZC9nZW9tJztcbmNvbnN0IHBvaW50MSA9IFBvaW50LmVtcHR5KCk7XG5jb25zdCBwb2ludDIgPSBQb2ludC5lbXB0eSgpO1xuZXhwb3J0IHZhciBDYW52YXNQYXR0ZXJucztcbihmdW5jdGlvbiAoQ2FudmFzUGF0dGVybnMpIHtcbiAgICBmdW5jdGlvbiBjb2xvclBhdHRlcm4oY29sb3IsIGFscGhhLCBjdCkge1xuICAgICAgICBsZXQgciA9IGNvbG9yID4+IDE2ICYgMHhmZjtcbiAgICAgICAgbGV0IGcgPSBjb2xvciA+PiA4ICYgMHhmZjtcbiAgICAgICAgbGV0IGIgPSBjb2xvciAmIDB4ZmY7XG4gICAgICAgIGxldCBhID0gYWxwaGEgKiAweGZmO1xuICAgICAgICBpZiAoIUNvbG9yVHJhbnNmb3JtLmlzRW1wdHkoY3QpKSB7XG4gICAgICAgICAgICByID0gKHIgKiBjdC5yZWRNdWx0aXBsaWVyICsgY3QucmVkT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBnID0gKGcgKiBjdC5ncmVlbk11bHRpcGxpZXIgKyBjdC5ncmVlbk9mZnNldCkgJiAweGZmO1xuICAgICAgICAgICAgYiA9IChiICogY3QuYmx1ZU11bHRpcGxpZXIgKyBjdC5ibHVlT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBhID0gKGEgKiBjdC5hbHBoYU11bHRpcGxpZXIgKyBjdC5hbHBoYU9mZnNldCkgJiAweGZmO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhIDwgMHhmZikge1xuICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YSAvIDB4ZmZ9KWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4gPSBjb2xvclBhdHRlcm47XG4gICAgZnVuY3Rpb24gYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJnYiA9IGNvbG9yc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGFscGhhID0gYWxwaGFzW2ldO1xuICAgICAgICAgICAgbGV0IHJhdGlvID0gcmF0aW9zW2ldIC8gMHhGRjtcbiAgICAgICAgICAgIGlmIChyYXRpbyA8IDApXG4gICAgICAgICAgICAgICAgcmF0aW8gPSAwO1xuICAgICAgICAgICAgaWYgKHJhdGlvID4gMSlcbiAgICAgICAgICAgICAgICByYXRpbyA9IDE7XG4gICAgICAgICAgICBwYXR0ZXJuLmFkZENvbG9yU3RvcChyYXRpbywgY29sb3JQYXR0ZXJuKHJnYiwgYWxwaGEsIGNvbG9yVHJhbnNmb3JtKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMuYWRkR3JhZGllbnRDb2xvcnMgPSBhZGRHcmFkaWVudENvbG9ycztcbiAgICBmdW5jdGlvbiByYWRpYWxHcmFkaWVudFBhdHRlcm4obWF0cml4LCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCkge1xuICAgICAgICBwb2ludDEueCA9IDE2MzguNDtcbiAgICAgICAgcG9pbnQxLnkgPSAwO1xuICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludDEsIHBvaW50MSk7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KG1hdHJpeC50eCwgbWF0cml4LnR5LCAwLCBtYXRyaXgudHgsIG1hdHJpeC50eSwgTWF0aC5hYnMoKHBvaW50MS54IC0gbWF0cml4LnR4KSAvIDIpKTtcbiAgICAgICAgYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMucmFkaWFsR3JhZGllbnRQYXR0ZXJuID0gcmFkaWFsR3JhZGllbnRQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGxpbmVhckdyYWRpZW50UGF0dGVybihtYXRyaXgsIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgICAgIHBvaW50MS54ID0gLTgxOS4yO1xuICAgICAgICBwb2ludDEueSA9IDA7XG4gICAgICAgIHBvaW50Mi54ID0gODE5LjI7XG4gICAgICAgIHBvaW50Mi55ID0gMDtcbiAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgcG9pbnQxLCBwb2ludDEpO1xuICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludDIsIHBvaW50Mik7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KHBvaW50MS54LCBwb2ludDEueSwgcG9pbnQyLngsIHBvaW50Mi55KTtcbiAgICAgICAgYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMubGluZWFyR3JhZGllbnRQYXR0ZXJuID0gbGluZWFyR3JhZGllbnRQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGJpdG1hcFBhdHRlcm4oaW1hZ2UsIHJlcGVhdCwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVQYXR0ZXJuKGltYWdlLCByZXBlYXQgPyAncmVwZWF0JyA6ICdub25lJyk7XG4gICAgICAgIGlmIChwYXR0ZXJuKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmJpdG1hcFBhdHRlcm4gPSBiaXRtYXBQYXR0ZXJuO1xufSkoQ2FudmFzUGF0dGVybnMgfHwgKENhbnZhc1BhdHRlcm5zID0ge30pKTtcbiIsImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGUyZC9jb3JlJztcbmV4cG9ydCBjbGFzcyBDYW52YXNQbGF0Zm9ybSBleHRlbmRzIFBsYXRmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbdGhpcy52aWV3LmdldENvbnRleHQoJzJkJyldO1xuICAgICAgICB0aGlzLmN1c3RvbUNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRzW3RoaXMuY29udGV4dHMubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIHNhdmVDb250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICByZXN0b3JlQ29udGV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0cy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmRlYnVnLndhcm5pbmcoJ1RyeWluZyB0byByZXN0b3JlIG1haW4gY29udGV4dCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUN1c3RvbUNvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0O1xuICAgICAgICBpZiAodGhpcy5jdXN0b21Db250ZXh0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmN1c3RvbUNvbnRleHRzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnZpZXc7XG4gICAgICAgIGlmIChjb250ZXh0LmNhbnZhcy53aWR0aCAhPT0gd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRleHQuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgICBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIGRlc3Ryb3lDdXN0b21Db250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jdXN0b21Db250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICBiZWdpbigpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgpO1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB2aWV3LndpZHRoLCB2aWV3LmhlaWdodCk7XG4gICAgfVxuICAgIHVwZGF0ZVNpemUoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbmdpbmUuc2NyZWVuLmdldFdpZHRoKCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRIZWlnaHQoKTtcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIGNvbnN0IHZpZXdXaWR0aCA9IE1hdGguZmxvb3Iod2lkdGggKiBwaXhlbFJhdGlvKTtcbiAgICAgICAgY29uc3Qgdmlld0hlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgaWYgKHZpZXcud2lkdGggIT09IHZpZXdXaWR0aCB8fCB2aWV3LmhlaWdodCAhPT0gdmlld0hlaWdodCkge1xuICAgICAgICAgICAgdmlldy53aWR0aCA9IHZpZXdXaWR0aDtcbiAgICAgICAgICAgIHZpZXcuaGVpZ2h0ID0gdmlld0hlaWdodDtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ09OVEFJTkVSID0gJ2NvbnRhaW5lcic7XG5leHBvcnQgdmFyIENvbnRhaW5lcjtcbihmdW5jdGlvbiAoQ29udGFpbmVyKSB7XG4gICAgZnVuY3Rpb24gbnVtQ2hpbGRyZW4oY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbik7XG4gICAgICAgICAgICByZXR1cm4ga2V5cy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIENvbnRhaW5lci5udW1DaGlsZHJlbiA9IG51bUNoaWxkcmVuO1xufSkoQ29udGFpbmVyIHx8IChDb250YWluZXIgPSB7fSkpO1xuZXhwb3J0IHZhciBDb250YWluZXJFeHRlbnNpb247XG4oZnVuY3Rpb24gKENvbnRhaW5lckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgcmVuZGVyZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgcmVuZGVyZXIuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlcmVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHVwZGF0ZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBwb2ludGVyRXZlbnRzIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHBvaW50ZXJFdmVudHMuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgcG9pbnRlckV2ZW50cy5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwb2ludGVyRXZlbnRzLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50ZXJFdmVudHMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGtleXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcG9pbnRlckV2ZW50cy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHMuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy51cGRhdGUuc2V0KENPTlRBSU5FUiwgdXBkYXRlKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChDT05UQUlORVIsIHJlbmRlcik7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KENPTlRBSU5FUiwgaGl0VGVzdCk7XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENvbnRhaW5lckV4dGVuc2lvbiB8fCAoQ29udGFpbmVyRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vZmVhdHVyZXMvcmVuZGVyZXInO1xuaW1wb3J0IHsgVXBkYXRlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3VwZGF0ZXInO1xuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi4vZmVhdHVyZXMvc2NyZWVuJztcbmltcG9ydCB7IFBvaW50ZXJFdmVudHMgfSBmcm9tICcuLi9mZWF0dXJlcy9wb2ludGVyLWV2ZW50cyc7XG5pbXBvcnQgeyBUaWNrZXIgfSBmcm9tICcuLi9mZWF0dXJlcy90aWNrZXInO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9mZWF0dXJlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDb250YWluZXJFeHRlbnNpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4uL2ZlYXR1cmVzL2RlYnVnJztcbmltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gJy4uL2ZlYXR1cmVzL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi4vZmVhdHVyZXMvY29tcG9uZW50cyc7XG5leHBvcnQgY2xhc3MgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGUgPSB7fSkge1xuICAgICAgICB0aGlzLmRlcHRoID0gMzI7XG4gICAgICAgIG1vZHVsZS5Db21wb25lbnRzID0gbW9kdWxlLkNvbXBvbmVudHMgPz8gQ29tcG9uZW50cztcbiAgICAgICAgbW9kdWxlLlNjcmVlbiA9IG1vZHVsZS5TY3JlZW4gPz8gU2NyZWVuO1xuICAgICAgICBtb2R1bGUuUGxhdGZvcm0gPSBtb2R1bGUuUGxhdGZvcm0gPz8gUGxhdGZvcm07XG4gICAgICAgIG1vZHVsZS5VcGRhdGVyID0gbW9kdWxlLlVwZGF0ZXIgPz8gVXBkYXRlcjtcbiAgICAgICAgbW9kdWxlLlJlbmRlcmVyID0gbW9kdWxlLlJlbmRlcmVyID8/IFJlbmRlcmVyO1xuICAgICAgICBtb2R1bGUuUG9pbnRlckV2ZW50cyA9IG1vZHVsZS5Qb2ludGVyRXZlbnRzID8/IFBvaW50ZXJFdmVudHM7XG4gICAgICAgIG1vZHVsZS5UaWNrZXIgPSBtb2R1bGUuVGlja2VyID8/IFRpY2tlcjtcbiAgICAgICAgbW9kdWxlLkRlYnVnID0gbW9kdWxlLkRlYnVnID8/IERlYnVnO1xuICAgICAgICBtb2R1bGUuUmVzb3VyY2VzID0gbW9kdWxlLlJlc291cmNlcyA/PyBSZXNvdXJjZXM7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBtb2R1bGUuQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBtb2R1bGUuU2NyZWVuKCk7XG4gICAgICAgIHRoaXMucGxhdGZvcm0gPSBuZXcgbW9kdWxlLlBsYXRmb3JtKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZXIgPSBuZXcgbW9kdWxlLlVwZGF0ZXIodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgbW9kdWxlLlJlbmRlcmVyKHRoaXMpO1xuICAgICAgICB0aGlzLnBvaW50ZXJFdmVudHMgPSBuZXcgbW9kdWxlLlBvaW50ZXJFdmVudHModGhpcyk7XG4gICAgICAgIHRoaXMudGlja2VyID0gbmV3IG1vZHVsZS5UaWNrZXIodGhpcyk7XG4gICAgICAgIHRoaXMuZGVidWcgPSBuZXcgbW9kdWxlLkRlYnVnKCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IG1vZHVsZS5SZXNvdXJjZXModGhpcyk7XG4gICAgICAgIENvbnRhaW5lckV4dGVuc2lvbi5pbml0KHRoaXMpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENvbXBvbmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVuZGVyID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5oaXRUZXN0ID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IG5ldyBNYXAoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRGVidWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy53YXJuaW5ncyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICB9XG4gICAgZXJyb3IoLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLmVycm9ycy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMuZXJyb3JzLnNldChpZCwgY291bnQpO1xuICAgIH1cbiAgICB3YXJuaW5nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy53YXJuaW5ncy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgdGhpcy53YXJuaW5ncy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB9XG4gICAgYmVnaW4oKSB7XG4gICAgfVxuICAgIGVuZCgpIHtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNYXRyaXgsIFBvaW50IH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2Rpc3BsYXknO1xuaW1wb3J0IHsgUG9pbnRlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvcG9pbnRlcic7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9pbnRlcmZhY2VzL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBQb2ludGVyRXZlbnRzIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmdsb2JhbCA9IFBvaW50LmVtcHR5KCk7XG4gICAgICAgIHRoaXMubG9jYWwgPSBQb2ludC5lbXB0eSgpO1xuICAgICAgICB0aGlzLnBvaW50ZXJJZCA9IDA7XG4gICAgICAgIHRoaXMucG9pbnRlclR5cGUgPSAncG9pbnRlckRvd24nO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXTtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIG1hdHJpeDogTWF0cml4LmVtcHR5KCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXSA9IGNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIGRpc3BhdGNoKHR5cGUsIHgsIHksIGlkKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2NhbC54ID0geDtcbiAgICAgICAgdGhpcy5sb2NhbC55ID0geTtcbiAgICAgICAgdGhpcy5nbG9iYWwueCA9IHg7XG4gICAgICAgIHRoaXMuZ2xvYmFsLnkgPSB5O1xuICAgICAgICB0aGlzLnBvaW50ZXJJZCA9IGlkO1xuICAgICAgICB0aGlzLnBvaW50ZXJUeXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgTWF0cml4LnNldEVtcHR5KGJhc2UubWF0cml4KTtcbiAgICAgICAgdGhpcy5kZXB0aCsrO1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ29tcG9uZW50KHJvb3QsIGJhc2UpO1xuICAgIH1cbiAgICBkaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFEaXNwbGF5LmlzVmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFQb2ludGVyLmlzUG9pbnRlckVuYWJsZWQoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3QuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIFRyYW5zZm9ybS5nZXRNYXRyaXgoY29tcG9uZW50LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgICAgICBNYXRyaXguY29uY2F0KHBhcmVudC5tYXRyaXgsIGNvbnRleHQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50KGNvbnRleHQubWF0cml4LCB0aGlzLmdsb2JhbCwgdGhpcy5sb2NhbCk7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMubG9jYWw7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsIHRoaXMucG9pbnRlclR5cGUsIHgsIHksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJUeXBlID09PSAncG9pbnRlck1vdmUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiAhY29tcG9uZW50LnBvaW50ZXJPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3ZlcicsIHgsIHksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXJlc3VsdCAmJiBjb21wb25lbnQucG9pbnRlck92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdXQnLCB4LCB5LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wb2ludGVyT3ZlciA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXggfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gJy4uL2ludGVyZmFjZXMvZGlzcGxheSc7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9pbnRlcmZhY2VzL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgbWF0cml4OiBNYXRyaXguZW1wdHkoKSxcbiAgICAgICAgICAgICAgICBjb2xvclRyYW5zZm9ybTogQ29sb3JUcmFuc2Zvcm0uZW1wdHkoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdID0gY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgcGFyZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIURpc3BsYXkuaXNWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIFRyYW5zZm9ybS5nZXRNYXRyaXgoY29tcG9uZW50LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgIFRyYW5zZm9ybS5nZXRDb2xvclRyYW5zZm9ybShjb21wb25lbnQsIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBNYXRyaXguY29uY2F0KHBhcmVudC5tYXRyaXgsIGNvbnRleHQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgIENvbG9yVHJhbnNmb3JtLmNvbmNhdChwYXJlbnQuY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLmVuZ2luZS5wbGF0Zm9ybS5iZWdpbigpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgY29uc3QgYmFzZSA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLmRlcHRoKys7XG4gICAgICAgIE1hdHJpeC5jb3B5KHRoaXMuZW5naW5lLnNjcmVlbi5nZXRNYXRyaXgoKSwgYmFzZS5tYXRyaXgpO1xuICAgICAgICBDb2xvclRyYW5zZm9ybS5zZXRFbXB0eShiYXNlLmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQocm9vdCwgYmFzZSk7XG4gICAgICAgIHRoaXMuZW5naW5lLnBsYXRmb3JtLmVuZCgpO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydFRpbWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgUmVzb3VyY2VzIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlc29sdmVycyA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgZ2V0KGFzc2V0KSB7XG4gICAgICAgIGlmICghYXNzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VzLmdldChhc3NldCk7XG4gICAgICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHJlc291cmNlID0gdGhpcy5yZXNvbHZlKGFzc2V0KTtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzLnNldChhc3NldCwgcmVzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICB9XG4gICAgcmVzb2x2ZShhc3NldCkge1xuICAgICAgICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHJlc29sdmVyKGFzc2V0LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgICAgICBpZiAocmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmdpbmUuZGVidWcud2FybmluZyhgUmVzb3VyY2Ugbm90IHJlc29sdmVkOiAke2Fzc2V0fWApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNYXRyaXggfSBmcm9tICdAZTJkL2dlb20nO1xuZXhwb3J0IGNsYXNzIFNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSA0MDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDAwO1xuICAgICAgICB0aGlzLnBpeGVsUmF0aW8gPSAwO1xuICAgICAgICB0aGlzLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXRyaXggPSBNYXRyaXguZW1wdHkoKTtcbiAgICB9XG4gICAgZ2V0TWF0cml4KCkge1xuICAgICAgICBjb25zdCBwaXhlbFJhdGlvID0gdGhpcy5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIHRoaXMubWF0cml4LmEgPSBwaXhlbFJhdGlvO1xuICAgICAgICB0aGlzLm1hdHJpeC5kID0gcGl4ZWxSYXRpbztcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICAgIH1cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVsbHNjcmVlbiA/IHdpbmRvdy5pbm5lcldpZHRoIDogdGhpcy53aWR0aDtcbiAgICB9XG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuID8gd2luZG93LmlubmVySGVpZ2h0IDogdGhpcy5oZWlnaHQ7XG4gICAgfVxuICAgIGdldFBpeGVsUmF0aW8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpeGVsUmF0aW8gPiAwID8gdGhpcy5waXhlbFJhdGlvIDogd2luZG93LmRldmljZVBpeGVsUmF0aW8gPz8gMTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGlja2VyIHtcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICAgICAgdGhpcy5mcmFtZVJhdGUgPSAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnVwZGF0ZXIudXBkYXRlKHRpbWUpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVuZGVyZXIucmVuZGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlRnJhbWUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gKGN1cnJlbnRUaW1lIC0gdGhpcy50aW1lKSAvIDEwMDA7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKGRlbHRhVGltZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU5leHRGcmFtZSgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB9XG4gICAgZ2V0IGlzUGF1c2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXVzZWQ7XG4gICAgfVxuICAgIHBsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOZXh0RnJhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdXBkYXRlTmV4dEZyYW1lKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVGcmFtZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVXBkYXRlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy91cGRhdGUnO1xuaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgVXBkYXRlciBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChyb290KTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbiAgICB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVVwZGF0ZS5pc0VuYWJsZWQoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllcyhjb21wb25lbnQpO1xuICAgICAgICBVcGRhdGUudXBkYXRlKGNvbXBvbmVudCwgdGhpcy50aW1lKTtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVByb3BlcnRpZXMoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZW5naW5lLmNvbXBvbmVudHMucHJvcGVydGllcy5mb3JFYWNoKChoYW5kbGVyLCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudFtwcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2VuZ2luZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL2NvbXBvbmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9kZWJ1Zyc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3BsYXRmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcG9pbnRlci1ldmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9yZW5kZXJlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3Jlc291cmNlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3NjcmVlbic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3RpY2tlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3VwZGF0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pbnB1dC9tb3VzZSc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvZGlzcGxheSc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvcGl2b3QnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3NvdXJjZSc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvdHJhbnNmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy91cGRhdGUnO1xuIiwiZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCB0eXBlKSB7XG4gICAgY29uc3QgeyB2aWV3IH0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgY29uc3QgY2xpZW50UmVjdCA9IHZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSBjbGllbnRSZWN0LmxlZnQgLSB2aWV3LmNsaWVudExlZnQ7XG4gICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSBjbGllbnRSZWN0LnRvcCAtIHZpZXcuY2xpZW50VG9wO1xuICAgIGVuZ2luZS5wb2ludGVyRXZlbnRzLmRpc3BhdGNoKHR5cGUsIHgsIHksIDApO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5leHBvcnQgdmFyIE1vdXNlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChNb3VzZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gZW5naW5lLnBsYXRmb3JtO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckRvd24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlclVwJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlck1vdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE1vdXNlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoTW91c2VFeHRlbnNpb24gfHwgKE1vdXNlRXh0ZW5zaW9uID0ge30pKTtcbiIsImV4cG9ydCB2YXIgRGlzcGxheTtcbihmdW5jdGlvbiAoRGlzcGxheSkge1xuICAgIGZ1bmN0aW9uIGlzVmlzaWJsZShjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC52aXNpYmxlID8/IHRydWU7XG4gICAgfVxuICAgIERpc3BsYXkuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xufSkoRGlzcGxheSB8fCAoRGlzcGxheSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFBpdm90O1xuKGZ1bmN0aW9uIChQaXZvdCkge1xuICAgIGZ1bmN0aW9uIGdldFgocGl2b3QsIHdpZHRoKSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RYIH0gPSBwaXZvdDtcbiAgICAgICAgaWYgKHBpdm90WCkge1xuICAgICAgICAgICAgcmV0dXJuIC1waXZvdFggKiB3aWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgUGl2b3QuZ2V0WCA9IGdldFg7XG4gICAgZnVuY3Rpb24gZ2V0WShwaXZvdCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RZIH0gPSBwaXZvdDtcbiAgICAgICAgaWYgKHBpdm90WSkge1xuICAgICAgICAgICAgcmV0dXJuIC1waXZvdFkgKiBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFkgPSBnZXRZO1xuICAgIGZ1bmN0aW9uIGhhc1ZhbHVlcyhwaXZvdCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WCwgcGl2b3RZIH0gPSBwaXZvdDtcbiAgICAgICAgcmV0dXJuICEhcGl2b3RYIHx8ICEhcGl2b3RZO1xuICAgIH1cbiAgICBQaXZvdC5oYXNWYWx1ZXMgPSBoYXNWYWx1ZXM7XG59KShQaXZvdCB8fCAoUGl2b3QgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBQb2ludGVyO1xuKGZ1bmN0aW9uIChQb2ludGVyKSB7XG4gICAgZnVuY3Rpb24gaXNQb2ludGVyT3Zlcihwb2ludGVyKSB7XG4gICAgICAgIHJldHVybiAhIXBvaW50ZXIucG9pbnRlck92ZXI7XG4gICAgfVxuICAgIFBvaW50ZXIuaXNQb2ludGVyT3ZlciA9IGlzUG9pbnRlck92ZXI7XG4gICAgZnVuY3Rpb24gaXNQb2ludGVyRW5hYmxlZChwb2ludGVyKSB7XG4gICAgICAgIHJldHVybiBwb2ludGVyLnBvaW50ZXJFbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIFBvaW50ZXIuaXNQb2ludGVyRW5hYmxlZCA9IGlzUG9pbnRlckVuYWJsZWQ7XG4gICAgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChwb2ludGVyLCB0eXBlLCB4LCB5LCBpZCkge1xuICAgICAgICBjb25zdCBoYW5kbGVyTmFtZSA9IGBvbiR7dHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3R5cGUuc2xpY2UoMSl9YDtcbiAgICAgICAgaWYgKHBvaW50ZXJbaGFuZGxlck5hbWVdKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlLCB4LCB5LCBpZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwb2ludGVyW2hhbmRsZXJOYW1lXShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbn0pKFBvaW50ZXIgfHwgKFBvaW50ZXIgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBTb3VyY2U7XG4oZnVuY3Rpb24gKFNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIGdldFJlc291cmNlKHNvdXJjZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBzb3VyY2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICB9XG4gICAgU291cmNlLmdldFJlc291cmNlID0gZ2V0UmVzb3VyY2U7XG4gICAgZnVuY3Rpb24gaXNMb2FkZWQoc291cmNlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBnZXRSZXNvdXJjZShzb3VyY2UsIGVuZ2luZSk7XG4gICAgICAgIHJldHVybiAhIXJlc291cmNlPy5sb2FkZWQ7XG4gICAgfVxuICAgIFNvdXJjZS5pc0xvYWRlZCA9IGlzTG9hZGVkO1xufSkoU291cmNlIHx8IChTb3VyY2UgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBUcmFuc2Zvcm07XG4oZnVuY3Rpb24gKFRyYW5zZm9ybSkge1xuICAgIGZ1bmN0aW9uIGdldE1hdHJpeCh0cmFuc2Zvcm0sIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAobWF0cml4KSB7XG4gICAgICAgICAgICByZXN1bHQuYSA9IG1hdHJpeC5hID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYiA9IG1hdHJpeC5iID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuYyA9IG1hdHJpeC5jID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuZCA9IG1hdHJpeC5kID8/IDE7XG4gICAgICAgICAgICByZXN1bHQudHggPSBtYXRyaXgudHggPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IG1hdHJpeC50eSA/PyAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm90YXRpb24gfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gdHJhbnNmb3JtLnNjYWxlWCA/PyB0cmFuc2Zvcm0uc2NhbGUgPz8gMTtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gdHJhbnNmb3JtLnNjYWxlWSA/PyB0cmFuc2Zvcm0uc2NhbGUgPz8gMTtcbiAgICAgICAgcmVzdWx0LnR4ID0gdHJhbnNmb3JtLnggPz8gMDtcbiAgICAgICAgcmVzdWx0LnR5ID0gdHJhbnNmb3JtLnkgPz8gMDtcbiAgICAgICAgaWYgKHJvdGF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gICAgICAgICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihyb3RhdGlvbik7XG4gICAgICAgICAgICByZXN1bHQuYSA9IGNvcyAqIHNjYWxlWDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gc2luICogc2NhbGVYO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAtc2luICogc2NhbGVZO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBjb3MgKiBzY2FsZVk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmEgPSBzY2FsZVg7XG4gICAgICAgIHJlc3VsdC5iID0gMDtcbiAgICAgICAgcmVzdWx0LmMgPSAwO1xuICAgICAgICByZXN1bHQuZCA9IHNjYWxlWTtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldE1hdHJpeCA9IGdldE1hdHJpeDtcbiAgICBmdW5jdGlvbiBnZXRDb2xvclRyYW5zZm9ybSh0cmFuc2Zvcm0sIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybSkge1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5yZWRNdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5NdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5ibHVlTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5yZWRPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmJsdWVPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHRpbnQgfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKHRpbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY29sb3IgPSAwLCB2YWx1ZSA9IDEgfSA9IHRpbnQ7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZUludmVydGVkID0gMSAtIHZhbHVlO1xuICAgICAgICAgICAgY29uc3QgciA9IChjb2xvciA+PiAxNikgJiAweGZmO1xuICAgICAgICAgICAgY29uc3QgZyA9IChjb2xvciA+PiA4KSAmIDB4ZmY7XG4gICAgICAgICAgICBjb25zdCBiID0gY29sb3IgJiAweGZmO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IHRyYW5zZm9ybS5hbHBoYSA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IHZhbHVlSW52ZXJ0ZWQ7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSByICogdmFsdWU7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBnICogdmFsdWU7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGIgKiB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gdHJhbnNmb3JtLmFscGhhID8/IDE7XG4gICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IDA7XG4gICAgfVxuICAgIFRyYW5zZm9ybS5nZXRDb2xvclRyYW5zZm9ybSA9IGdldENvbG9yVHJhbnNmb3JtO1xufSkoVHJhbnNmb3JtIHx8IChUcmFuc2Zvcm0gPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBVcGRhdGU7XG4oZnVuY3Rpb24gKFVwZGF0ZSkge1xuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5lbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIFVwZGF0ZS5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbXBvbmVudCwgdGltZSkge1xuICAgICAgICBpZiAoY29tcG9uZW50Lm9uVXBkYXRlKSB7XG4gICAgICAgICAgICBjb21wb25lbnQub25VcGRhdGUodGltZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVXBkYXRlLnVwZGF0ZSA9IHVwZGF0ZTtcbn0pKFVwZGF0ZSB8fCAoVXBkYXRlID0ge30pKTtcbiIsImV4cG9ydCB2YXIgQm91bmRzO1xuKGZ1bmN0aW9uIChCb3VuZHMpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1pblg6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtaW5ZOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWF4WDogTnVtYmVyLk1JTl9WQUxVRSxcbiAgICAgICAgICAgIG1heFk6IE51bWJlci5NSU5fVkFMVUUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIEJvdW5kcy5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KGJvdW5kcykge1xuICAgICAgICBib3VuZHMubWluWCA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGJvdW5kcy5taW5ZID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1heFggPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWF4WSA9IE51bWJlci5NSU5fVkFMVUU7XG4gICAgfVxuICAgIEJvdW5kcy5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkoYm91bmRzKSB7XG4gICAgICAgIHJldHVybiBib3VuZHMubWluWCA9PT0gTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1pblkgPT09IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5tYXhYID09PSBOdW1iZXIuTUlOX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWF4WSA9PT0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICB9XG4gICAgQm91bmRzLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIHRvUmVjdGFuZ2xlKGJvdW5kcywgcmVjdGFuZ2xlKSB7XG4gICAgICAgIGNvbnN0IHsgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgfSA9IGJvdW5kcztcbiAgICAgICAgcmVjdGFuZ2xlLnggPSBtaW5YO1xuICAgICAgICByZWN0YW5nbGUueSA9IG1pblk7XG4gICAgICAgIHJlY3RhbmdsZS53aWR0aCA9IG1heFggLSBtaW5YO1xuICAgICAgICByZWN0YW5nbGUuaGVpZ2h0ID0gbWF4WSAtIG1pblk7XG4gICAgfVxuICAgIEJvdW5kcy50b1JlY3RhbmdsZSA9IHRvUmVjdGFuZ2xlO1xuICAgIGZ1bmN0aW9uIHRlc3RYKGJvdW5kcywgeCkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RYID0gdGVzdFg7XG4gICAgZnVuY3Rpb24gdGVzdFkoYm91bmRzLCB5KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFkgPSB0ZXN0WTtcbiAgICBmdW5jdGlvbiB0ZXN0KGJvdW5kcywgeCwgeSkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0ID0gdGVzdDtcbiAgICBmdW5jdGlvbiB0ZXN0UG9pbnQoYm91bmRzLCBwb2ludCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0UG9pbnQgPSB0ZXN0UG9pbnQ7XG59KShCb3VuZHMgfHwgKEJvdW5kcyA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIENvbG9yVHJhbnNmb3JtO1xuKGZ1bmN0aW9uIChDb2xvclRyYW5zZm9ybSkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxwaGFNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgcmVkTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGdyZWVuTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGJsdWVNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYWxwaGFPZmZzZXQ6IDAsXG4gICAgICAgICAgICByZWRPZmZzZXQ6IDAsXG4gICAgICAgICAgICBncmVlbk9mZnNldDogMCxcbiAgICAgICAgICAgIGJsdWVPZmZzZXQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShjdCkge1xuICAgICAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5NdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ibHVlTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYWxwaGFNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5yZWRPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmdyZWVuT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ibHVlT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU9mZnNldCA9PT0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eVdpdGhBbHBoYShjdCkge1xuICAgICAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5NdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ibHVlTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYmx1ZU9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmlzRW1wdHlXaXRoQWxwaGEgPSBpc0VtcHR5V2l0aEFscGhhO1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KGN0KSB7XG4gICAgICAgIGN0LnJlZE11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5ncmVlbk11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5ibHVlTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LmFscGhhTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LnJlZE9mZnNldCA9IDA7XG4gICAgICAgIGN0LmdyZWVuT2Zmc2V0ID0gMDtcbiAgICAgICAgY3QuYmx1ZU9mZnNldCA9IDA7XG4gICAgICAgIGN0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KGZyb20sIHRvKSB7XG4gICAgICAgIHRvLmFscGhhTXVsdGlwbGllciA9IGZyb20uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICB0by5yZWRNdWx0aXBsaWVyID0gZnJvbS5yZWRNdWx0aXBsaWVyO1xuICAgICAgICB0by5ncmVlbk11bHRpcGxpZXIgPSBmcm9tLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgdG8uYmx1ZU11bHRpcGxpZXIgPSBmcm9tLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICB0by5hbHBoYU9mZnNldCA9IGZyb20uYWxwaGFPZmZzZXQ7XG4gICAgICAgIHRvLnJlZE9mZnNldCA9IGZyb20ucmVkT2Zmc2V0O1xuICAgICAgICB0by5ncmVlbk9mZnNldCA9IGZyb20uZ3JlZW5PZmZzZXQ7XG4gICAgICAgIHRvLmJsdWVPZmZzZXQgPSBmcm9tLmJsdWVPZmZzZXQ7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIGNvbmNhdChjdDEsIGN0MCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGFscGhhTXVsdGlwbGllciA9IGN0MS5hbHBoYU11bHRpcGxpZXIgKiBjdDAuYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCByZWRNdWx0aXBsaWVyID0gY3QxLnJlZE11bHRpcGxpZXIgKiBjdDAucmVkTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgZ3JlZW5NdWx0aXBsaWVyID0gY3QxLmdyZWVuTXVsdGlwbGllciAqIGN0MC5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGJsdWVNdWx0aXBsaWVyID0gY3QxLmJsdWVNdWx0aXBsaWVyICogY3QwLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBhbHBoYU9mZnNldCA9IGN0MS5hbHBoYU11bHRpcGxpZXIgKiBjdDAuYWxwaGFPZmZzZXQgKyBjdDAuYWxwaGFPZmZzZXQ7XG4gICAgICAgIGNvbnN0IHJlZE9mZnNldCA9IGN0MS5yZWRNdWx0aXBsaWVyICogY3QwLnJlZE9mZnNldCArIGN0MC5yZWRPZmZzZXQ7XG4gICAgICAgIGNvbnN0IGdyZWVuT2Zmc2V0ID0gY3QxLmdyZWVuTXVsdGlwbGllciAqIGN0MC5ncmVlbk9mZnNldCArIGN0MC5ncmVlbk9mZnNldDtcbiAgICAgICAgY29uc3QgYmx1ZU9mZnNldCA9IGN0MS5ibHVlTXVsdGlwbGllciAqIGN0MC5ibHVlT2Zmc2V0ICsgY3QwLmJsdWVPZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gcmVkTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IGdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IGFscGhhT2Zmc2V0O1xuICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gcmVkT2Zmc2V0O1xuICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBncmVlbk9mZnNldDtcbiAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBibHVlT2Zmc2V0O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5jb25jYXQgPSBjb25jYXQ7XG59KShDb2xvclRyYW5zZm9ybSB8fCAoQ29sb3JUcmFuc2Zvcm0gPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9jb2xvci10cmFuc2Zvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9ib3VuZHMnO1xuZXhwb3J0ICogZnJvbSAnLi9tYXRyaXgnO1xuZXhwb3J0ICogZnJvbSAnLi9wb2ludCc7XG5leHBvcnQgKiBmcm9tICcuL3JlY3RhbmdsZSc7XG4iLCJleHBvcnQgdmFyIE1hdHJpeDtcbihmdW5jdGlvbiAoTWF0cml4KSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiAxLFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGM6IDAsXG4gICAgICAgICAgICBkOiAxLFxuICAgICAgICAgICAgdHg6IDAsXG4gICAgICAgICAgICB0eTogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTWF0cml4LmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShtYXRyaXgpIHtcbiAgICAgICAgcmV0dXJuIG1hdHJpeC5hID09PSAxXG4gICAgICAgICAgICAmJiBtYXRyaXguYiA9PT0gMFxuICAgICAgICAgICAgJiYgbWF0cml4LmMgPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC5kID09PSAxXG4gICAgICAgICAgICAmJiBtYXRyaXgudHggPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC50eSA9PT0gMDtcbiAgICB9XG4gICAgTWF0cml4LmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KG1hdHJpeCkge1xuICAgICAgICBtYXRyaXguYSA9IDE7XG4gICAgICAgIG1hdHJpeC5iID0gMDtcbiAgICAgICAgbWF0cml4LmMgPSAwO1xuICAgICAgICBtYXRyaXguZCA9IDE7XG4gICAgICAgIG1hdHJpeC50eCA9IDA7XG4gICAgICAgIG1hdHJpeC50eSA9IDA7XG4gICAgfVxuICAgIE1hdHJpeC5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoZnJvbSwgdG8pIHtcbiAgICAgICAgdG8uYSA9IGZyb20uYTtcbiAgICAgICAgdG8uYiA9IGZyb20uYjtcbiAgICAgICAgdG8uYyA9IGZyb20uYztcbiAgICAgICAgdG8uZCA9IGZyb20uZDtcbiAgICAgICAgdG8udHggPSBmcm9tLnR4O1xuICAgICAgICB0by50eSA9IGZyb20udHk7XG4gICAgfVxuICAgIE1hdHJpeC5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBjb25jYXQobWF0cml4MCwgbWF0cml4MSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGEgPSBtYXRyaXgxLmEgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmM7XG4gICAgICAgIGNvbnN0IGIgPSBtYXRyaXgxLmEgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmQ7XG4gICAgICAgIGNvbnN0IGMgPSBtYXRyaXgxLmMgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmM7XG4gICAgICAgIGNvbnN0IGQgPSBtYXRyaXgxLmMgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmQ7XG4gICAgICAgIGNvbnN0IHR4ID0gbWF0cml4MS50eCAqIG1hdHJpeDAuYSArIG1hdHJpeDEudHkgKiBtYXRyaXgwLmMgKyBtYXRyaXgwLnR4O1xuICAgICAgICBjb25zdCB0eSA9IG1hdHJpeDEudHggKiBtYXRyaXgwLmIgKyBtYXRyaXgxLnR5ICogbWF0cml4MC5kICsgbWF0cml4MC50eTtcbiAgICAgICAgcmVzdWx0LmEgPSBhO1xuICAgICAgICByZXN1bHQuYiA9IGI7XG4gICAgICAgIHJlc3VsdC5jID0gYztcbiAgICAgICAgcmVzdWx0LmQgPSBkO1xuICAgICAgICByZXN1bHQudHggPSB0eDtcbiAgICAgICAgcmVzdWx0LnR5ID0gdHk7XG4gICAgfVxuICAgIE1hdHJpeC5jb25jYXQgPSBjb25jYXQ7XG4gICAgZnVuY3Rpb24gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KSB7XG4gICAgICAgIHJldHVybiBtYXRyaXguYSAqIG1hdHJpeC5kIC0gbWF0cml4LmIgKiBtYXRyaXguYztcbiAgICB9XG4gICAgTWF0cml4LmdldERldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQ7XG4gICAgZnVuY3Rpb24gaW52ZXJ0KG1hdHJpeCwgcmVzdWx0KSB7XG4gICAgICAgIGxldCBkZXRlcm1pbmFudCA9IGdldERldGVybWluYW50KG1hdHJpeCk7XG4gICAgICAgIGlmIChkZXRlcm1pbmFudCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0LmEgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gLW1hdHJpeC50eDtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IC1tYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCA9IDEuMCAvIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBtYXRyaXguYSAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmIgPSAtbWF0cml4LmIgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gLW1hdHJpeC5jICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuZCA9IG1hdHJpeC5kICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQudHggPSAtcmVzdWx0LmEgKiBtYXRyaXgudHggLSByZXN1bHQuYyAqIG1hdHJpeC50eTtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IC1yZXN1bHQuYiAqIG1hdHJpeC50eCAtIHJlc3VsdC5kICogbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hdHJpeC5pbnZlcnQgPSBpbnZlcnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJlc3VsdC54ID0geCAqIG1hdHJpeC5hICsgeSAqIG1hdHJpeC5jICsgbWF0cml4LnR4O1xuICAgICAgICByZXN1bHQueSA9IHggKiBtYXRyaXguYiArIHkgKiBtYXRyaXguZCArIG1hdHJpeC50eTtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybVBvaW50ID0gdHJhbnNmb3JtUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnRMb2NhbChtYXRyaXgsIHBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmVzdWx0LnggPSB4ICogbWF0cml4LmEgKyB5ICogbWF0cml4LmM7XG4gICAgICAgIHJlc3VsdC55ID0geCAqIG1hdHJpeC5iICsgeSAqIG1hdHJpeC5kO1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnRMb2NhbCA9IHRyYW5zZm9ybVBvaW50TG9jYWw7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtSW52ZXJzZVBvaW50KG1hdHJpeCwgcG9pbnQsIHJlc3VsdCkge1xuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudChtYXRyaXgpO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC54ID0gLW1hdHJpeC50eDtcbiAgICAgICAgICAgIHJlc3VsdC55ID0gLW1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRldGVybWluYW50ID0gMSAvIGRldGVybWluYW50O1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgICAgIHJlc3VsdC54ID0gZGV0ZXJtaW5hbnQgKiAobWF0cml4LmMgKiAobWF0cml4LnR5IC0geSkgKyBtYXRyaXguZCAqICh4IC0gbWF0cml4LnR4KSk7XG4gICAgICAgICAgICByZXN1bHQueSA9IGRldGVybWluYW50ICogKG1hdHJpeC5hICogKHkgLSBtYXRyaXgudHkpICsgbWF0cml4LmIgKiAobWF0cml4LnR4IC0geCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1JbnZlcnNlUG9pbnQgPSB0cmFuc2Zvcm1JbnZlcnNlUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtQm91bmRzKG1hdHJpeCwgYm91bmRzLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBhLCBiLCBjLCBkLCB0eCwgdHksIH0gPSBtYXRyaXg7XG4gICAgICAgIGNvbnN0IHJ4ID0gYm91bmRzLng7XG4gICAgICAgIGNvbnN0IHJ5ID0gYm91bmRzLnk7XG4gICAgICAgIGNvbnN0IHJyID0gcnggKyBib3VuZHMud2lkdGg7XG4gICAgICAgIGNvbnN0IHJiID0gcnkgKyBib3VuZHMuaGVpZ2h0O1xuICAgICAgICBjb25zdCBueDEgPSByeCAqIGEgKyByeSAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkxID0gcnggKiBiICsgcnkgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54MiA9IHJyICogYSArIHJ5ICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTIgPSByciAqIGIgKyByeSAqIGQgKyB0eTtcbiAgICAgICAgY29uc3QgbngzID0gcnIgKiBhICsgcmIgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MyA9IHJyICogYiArIHJiICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDQgPSByeCAqIGEgKyByYiAqIGMgKyB0eDtcbiAgICAgICAgY29uc3Qgbnk0ID0gcnggKiBiICsgcmIgKiBkICsgdHk7XG4gICAgICAgIGxldCBsZWZ0ID0gbngxO1xuICAgICAgICBpZiAobGVmdCA+IG54Mikge1xuICAgICAgICAgICAgbGVmdCA9IG54MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54Mykge1xuICAgICAgICAgICAgbGVmdCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54NCkge1xuICAgICAgICAgICAgbGVmdCA9IG54NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9wID0gbnkxO1xuICAgICAgICBpZiAodG9wID4gbnkyKSB7XG4gICAgICAgICAgICB0b3AgPSBueTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcCA+IG55Mykge1xuICAgICAgICAgICAgdG9wID0gbnkzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3AgPiBueTQpIHtcbiAgICAgICAgICAgIHRvcCA9IG55NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmlnaHQgPSBueDE7XG4gICAgICAgIGlmIChyaWdodCA8IG54Mikge1xuICAgICAgICAgICAgcmlnaHQgPSBueDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0IDwgbngzKSB7XG4gICAgICAgICAgICByaWdodCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgPCBueDQpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbng0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBib3R0b20gPSBueTE7XG4gICAgICAgIGlmIChib3R0b20gPCBueTIpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tIDwgbnkzKSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdHRvbSA8IG55NCkge1xuICAgICAgICAgICAgYm90dG9tID0gbnk0O1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC54ID0gbGVmdDtcbiAgICAgICAgcmVzdWx0LnkgPSB0b3A7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGJvdHRvbSAtIHRvcDtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybUJvdW5kcyA9IHRyYW5zZm9ybUJvdW5kcztcbn0pKE1hdHJpeCB8fCAoTWF0cml4ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUG9pbnQ7XG4oZnVuY3Rpb24gKFBvaW50KSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG4gICAgUG9pbnQuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBsZW5ndGgocG9pbnQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9XG4gICAgUG9pbnQubGVuZ3RoID0gbGVuZ3RoO1xuICAgIGZ1bmN0aW9uIGFuZ2xlKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHBvaW50LnksIHBvaW50LngpO1xuICAgIH1cbiAgICBQb2ludC5hbmdsZSA9IGFuZ2xlO1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMDtcbiAgICB9XG4gICAgUG9pbnQuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gZXF1YWxzKHBvaW50MCwgcG9pbnQxKSB7XG4gICAgICAgIHJldHVybiBwb2ludDAueCA9PT0gcG9pbnQxLnggJiYgcG9pbnQwLnkgPT09IHBvaW50MS55O1xuICAgIH1cbiAgICBQb2ludC5lcXVhbHMgPSBlcXVhbHM7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkocG9pbnQpIHtcbiAgICAgICAgcG9pbnQueCA9IDA7XG4gICAgICAgIHBvaW50LnkgPSAwO1xuICAgIH1cbiAgICBQb2ludC5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LnggPSBzb3VyY2UueDtcbiAgICAgICAgdGFyZ2V0LnkgPSBzb3VyY2UueTtcbiAgICB9XG4gICAgUG9pbnQuY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gbm9ybWFsaXplKHBvaW50LCB0aGlja25lc3MpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gbGVuZ3RoKHBvaW50KTtcbiAgICAgICAgaWYgKHZhbHVlID4gMCkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlja25lc3MgLyB2YWx1ZTtcbiAgICAgICAgICAgIHBvaW50LnggKj0gdmFsdWU7XG4gICAgICAgICAgICBwb2ludC55ICo9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBvaW50Lm5vcm1hbGl6ZSA9IG5vcm1hbGl6ZTtcbiAgICBmdW5jdGlvbiBkaXN0YW5jZShwb2ludDAsIHBvaW50MSkge1xuICAgICAgICBjb25zdCBkeCA9IHBvaW50MC54IC0gcG9pbnQxLng7XG4gICAgICAgIGNvbnN0IGR5ID0gcG9pbnQwLnkgLSBwb2ludDEueTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuICAgIFBvaW50LmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgZnVuY3Rpb24gaW50ZXJwb2xhdGUoYmVnaW4sIGVuZCwgdmFsdWUsIHJlc3VsdCkge1xuICAgICAgICByZXN1bHQueCA9IGJlZ2luLnggKyB2YWx1ZSAqIChlbmQueCAtIGJlZ2luLngpO1xuICAgICAgICByZXN1bHQueSA9IGJlZ2luLnkgKyB2YWx1ZSAqIChlbmQueSAtIGJlZ2luLnkpO1xuICAgIH1cbiAgICBQb2ludC5pbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlO1xuICAgIGZ1bmN0aW9uIHBvbGFyKHBvaW50LCBsZW5ndGgsIGFuZ2xlKSB7XG4gICAgICAgIHBvaW50LnggPSBsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIHBvaW50LnkgPSBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgfVxuICAgIFBvaW50LnBvbGFyID0gcG9sYXI7XG59KShQb2ludCB8fCAoUG9pbnQgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBSZWN0YW5nbGU7XG4oZnVuY3Rpb24gKFJlY3RhbmdsZSkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJlY3RhbmdsZS54ID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLnkgPSAwO1xuICAgICAgICByZWN0YW5nbGUud2lkdGggPSAwO1xuICAgICAgICByZWN0YW5nbGUuaGVpZ2h0ID0gMDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShyZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZS53aWR0aCA9PT0gMCB8fCByZWN0YW5nbGUuaGVpZ2h0ID09PSAwO1xuICAgIH1cbiAgICBSZWN0YW5nbGUuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gY29udGFpbnMocmVjdGFuZ2xlLCBwb2ludCkge1xuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlLnggPCBwb2ludC54XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueCArIHJlY3RhbmdsZS53aWR0aCA+IHBvaW50LnhcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS55IDwgcG9pbnQueVxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnkgKyByZWN0YW5nbGUuaGVpZ2h0ID4gcG9pbnQueTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmNvbnRhaW5zID0gY29udGFpbnM7XG59KShSZWN0YW5nbGUgfHwgKFJlY3RhbmdsZSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCwgU291cmNlIH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXgsIFJlY3RhbmdsZSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBJbWFnZUV4dGVuc2lvbiwgSU1BR0UgfSBmcm9tICcuL2ltYWdlJztcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBTb3VyY2UuZ2V0UmVzb3VyY2UoaW1hZ2UsIGVuZ2luZSk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmxvYWRlZCB8fCAhcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gcGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgaWYgKENvbG9yVHJhbnNmb3JtLmlzRW1wdHlXaXRoQWxwaGEoY29sb3JUcmFuc2Zvcm0pKSB7XG4gICAgICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUNvbnRleHQgPSBwbGF0Zm9ybS5jcmVhdGVDdXN0b21Db250ZXh0KCk7XG4gICAgICAgICAgICBib3VuZHMueCA9IHg7XG4gICAgICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIGJvdW5kcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtQm91bmRzKG1hdHJpeCwgYm91bmRzLCBib3VuZHMpO1xuICAgICAgICAgICAgaWYgKFJlY3RhbmdsZS5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LmNsZWFyUmVjdChib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gY3VzdG9tQ29udGV4dC5nZXRJbWFnZURhdGEoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgY29uc3Qgcm0gPSBjb2xvclRyYW5zZm9ybS5yZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3QgZ20gPSBjb2xvclRyYW5zZm9ybS5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBibSA9IGNvbG9yVHJhbnNmb3JtLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3QgYW0gPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBybyA9IGNvbG9yVHJhbnNmb3JtLnJlZE9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGdvID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5PZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBibyA9IGNvbG9yVHJhbnNmb3JtLmJsdWVPZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBhbyA9IGNvbG9yVHJhbnNmb3JtLmFscGhhT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBpbWFnZURhdGE7XG4gICAgICAgICAgICBjb25zdCB7IGxlbmd0aCB9ID0gZGF0YTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOykge1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBybSArIHJvO1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBnbSArIGdvO1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBibSArIGJvO1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBhbSArIGFvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCBib3VuZHMueCwgYm91bmRzLnkpO1xuICAgICAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybSgpO1xuICAgICAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UoY3VzdG9tQ29udGV4dC5jYW52YXMsIGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0LCBib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBwbGF0Zm9ybS5kZXN0cm95Q3VzdG9tQ29udGV4dChjdXN0b21Db250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBJbWFnZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoSU1BR0UsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uIHx8IChDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90LCBTb3VyY2UgfSBmcm9tICdAZTJkL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VFeHRlbnNpb24sIElNQUdFIH0gZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgdmFyIENhbnZhc0ltYWdlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNJbWFnZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihpbWFnZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gU291cmNlLmdldFJlc291cmNlKGltYWdlLCBlbmdpbmUpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5sb2FkZWQgfHwgIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBlbmdpbmUucGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIEltYWdlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChJTUFHRSwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNJbWFnZUV4dGVuc2lvbiB8fCAoQ2FudmFzSW1hZ2VFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QsIH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGUyZC9yZXNvdXJjZXMnO1xuZXhwb3J0IGNvbnN0IElNQUdFID0gJ2ltYWdlJztcbmV4cG9ydCB2YXIgSW1hZ2U7XG4oZnVuY3Rpb24gKEltYWdlKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGltYWdlLCBib3VuZHMsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmxvYWRlZCB8fCAhcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgIGJvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBJbWFnZS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShJbWFnZSB8fCAoSW1hZ2UgPSB7fSkpO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIEltYWdlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChJbWFnZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGhpdFRlc3QoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGxvY2FsIH0gPSBlbmdpbmUucG9pbnRlckV2ZW50cztcbiAgICAgICAgSW1hZ2UuY2FsY3VsYXRlQm91bmRzKGltYWdlLCBib3VuZHMsIGVuZ2luZSk7XG4gICAgICAgIHJldHVybiBSZWN0YW5nbGUuY29udGFpbnMoYm91bmRzLCBsb2NhbCk7XG4gICAgfVxuICAgIEltYWdlRXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KElNQUdFLCBoaXRUZXN0KTtcbiAgICAgICAgSW1hZ2VSZXNvdXJjZS5pbml0KGVuZ2luZSk7XG4gICAgfVxuICAgIEltYWdlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoSW1hZ2VFeHRlbnNpb24gfHwgKEltYWdlRXh0ZW5zaW9uID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMtaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMtaW1hZ2UtY29sb3InO1xuIiwiZXhwb3J0IHZhciBJbWFnZVJlc291cmNlO1xuKGZ1bmN0aW9uIChJbWFnZVJlc291cmNlKSB7XG4gICAgZnVuY3Rpb24gcmVzb2x2ZShhc3NldCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGFzc2V0LnNwbGl0KCcuJykucG9wKCk7XG4gICAgICAgIHN3aXRjaCAoZXh0ZW5zaW9uKSB7XG4gICAgICAgICAgICBjYXNlICdwbmcnOlxuICAgICAgICAgICAgY2FzZSAnanBnJzpcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBhc3NldDtcbiAgICAgICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBpbWFnZSBsb2FkZWQ6ICR7YXNzZXR9YCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmltYWdlID0gaW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ2ltYWdlIGxvYWQgZXJyb3InLCBlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIEltYWdlUmVzb3VyY2UucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLnJlc291cmNlcy5yZXNvbHZlcnMuYWRkKHJlc29sdmUpO1xuICAgIH1cbiAgICBJbWFnZVJlc291cmNlLmluaXQgPSBpbml0O1xufSkoSW1hZ2VSZXNvdXJjZSB8fCAoSW1hZ2VSZXNvdXJjZSA9IHt9KSk7XG4iLCJjb25zdCBQSV8yID0gTWF0aC5QSSAqIDI7XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlFbGxpcHNlKGRhdGEsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgcmFkaXVzID0gMCwgcmFkaXVzWCwgcmFkaXVzWSwgfSA9IGRhdGE7XG4gICAgY29uc3QgcnggPSByYWRpdXNYID8/IHJhZGl1cztcbiAgICBjb25zdCByeSA9IHJhZGl1c1kgPz8gcmFkaXVzO1xuICAgIGlmIChyeCA9PT0gMCB8fCByeSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5lbGxpcHNlKHgsIHksIHJ4LCByeSwgMCwgMCwgUElfMik7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhcHBseUNvbW1hbmQoY29tbWFuZCwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gY29tbWFuZDtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbW92ZVRvJzpcbiAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhtb3ZlVG8ueCA/PyAwLCBtb3ZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsaW5lVG8nOlxuICAgICAgICAgICAgY29uc3QgbGluZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKGxpbmVUby54ID8/IDAsIGxpbmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2N1cnZlVG8nOlxuICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8oY3VydmVUby5jeCA/PyAwLCBjdXJ2ZVRvLmN5ID8/IDAsIGN1cnZlVG8ueCA/PyAwLCBjdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3ViaWNDdXJ2ZVRvJzpcbiAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBjb250ZXh0LmJlemllckN1cnZlVG8oY3ViaWNDdXJ2ZVRvLmN4ID8/IDAsIGN1YmljQ3VydmVUby5jeSA/PyAwLCBjdWJpY0N1cnZlVG8uc3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLnN5ID8/IDAsIGN1YmljQ3VydmVUby54ID8/IDAsIGN1YmljQ3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXRoKGRhdGEsIGNvbnRleHQpIHtcbiAgICBpZiAoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IGRhdGFbaV07XG4gICAgICAgIGFwcGx5Q29tbWFuZChjb21tYW5kLCBjb250ZXh0KTtcbiAgICB9XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhcHBseVJlY3RhbmdsZShkYXRhLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHdpZHRoID0gMCwgaGVpZ2h0ID0gMCwgfSA9IGRhdGE7XG4gICAgaWYgKHdpZHRoID09PSAwIHx8IGhlaWdodCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BlMmQvY29yZSc7XG5pbXBvcnQgeyBNYXRyaXgsIFBvaW50LCBSZWN0YW5nbGUsIH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IFNoYXBlRXh0ZW5zaW9uLCBTSEFQRSwgU2hhcGUgfSBmcm9tICcuLi9zaGFwZSc7XG5pbXBvcnQgeyBhcHBseVJlY3RhbmdsZSB9IGZyb20gJy4vcmVjdGFuZ2xlJztcbmltcG9ydCB7IGFwcGx5RWxsaXBzZSB9IGZyb20gJy4vZWxsaXBzZSc7XG5pbXBvcnQgeyBhcHBseVBhdGggfSBmcm9tICcuL3BhdGgnO1xuaW1wb3J0IHsgYXBwbHlTdHJpbmcgfSBmcm9tICcuL3N0cmluZyc7XG5pbXBvcnQgeyBzZXRGaWxsU3R5bGUsIHNldFN0cm9rZVN0eWxlIH0gZnJvbSAnLi9zdHlsZSc7XG5jb25zdCBib3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmNvbnN0IG9mZnNldCA9IFBvaW50LmVtcHR5KCk7XG5mdW5jdGlvbiByZW5kZXJHcmFwaGljcyhkYXRhLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgY29uc3QgeyBmaWxsLCBzdHJva2UgfSA9IGRhdGE7XG4gICAgY29uc3QgaGFzRmlsbCA9ICEhZmlsbCB8fCBmaWxsID09PSAwO1xuICAgIGNvbnN0IGhhc1N0cm9rZSA9ICEhc3Ryb2tlIHx8IHN0cm9rZSA9PT0gMDtcbiAgICBpZiAoIWhhc0ZpbGwgJiYgIWhhc1N0cm9rZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBleGlzdCA9IHRydWU7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBkYXRhO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdyZWN0YW5nbGUnOlxuICAgICAgICAgICAgZXhpc3QgPSBhcHBseVJlY3RhbmdsZShkYXRhLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlbGxpcHNlJzpcbiAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlFbGxpcHNlKGRhdGEsIGNvbnRleHQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BhdGgnOlxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGRhdGE7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhdGguZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IGFwcGx5U3RyaW5nKHBhdGguZGF0YSwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHBhdGguZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IGFwcGx5UGF0aChwYXRoLmRhdGEsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhpc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICghZXhpc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBzZXRGaWxsU3R5bGUoZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIH1cbiAgICBpZiAoaGFzU3Ryb2tlKSB7XG4gICAgICAgIHNldFN0cm9rZVN0eWxlKHN0cm9rZSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxufVxuZXhwb3J0IHZhciBDYW52YXNTaGFwZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzU2hhcGVFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoc2hhcGUsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHNoYXBlO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgUG9pbnQuc2V0RW1wdHkob2Zmc2V0KTtcbiAgICAgICAgaWYgKFBpdm90Lmhhc1ZhbHVlcyhzaGFwZSkpIHtcbiAgICAgICAgICAgIFNoYXBlLmNhbGN1bGF0ZUJvdW5kcyhzaGFwZSwgYm91bmRzKTtcbiAgICAgICAgICAgIGlmIChSZWN0YW5nbGUuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2Zmc2V0LnggPSBQaXZvdC5nZXRYKHNoYXBlLCBib3VuZHMud2lkdGgpO1xuICAgICAgICAgICAgb2Zmc2V0LnkgPSBQaXZvdC5nZXRZKHNoYXBlLCBib3VuZHMud2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IGVuZ2luZS5wbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoUG9pbnQuaXNFbXB0eShvZmZzZXQpKSB7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnRMb2NhbChtYXRyaXgsIG9mZnNldCwgb2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHggKyBvZmZzZXQueCwgbWF0cml4LnR5ICsgb2Zmc2V0LnkpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyR3JhcGhpY3MoZGF0YVtpXSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQyZCwgZW5naW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJlbmRlckdyYXBoaWNzKGRhdGEsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0MmQsIGVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzU2hhcGVFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIFNoYXBlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChTSEFQRSwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzU2hhcGVFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNTaGFwZUV4dGVuc2lvbiB8fCAoQ2FudmFzU2hhcGVFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgR3JhcGhpY3NTdHJpbmdSZWFkZXIgfSBmcm9tICcuLi9kYXRhL3N0cmluZyc7XG5pbXBvcnQgeyBhcHBseUNvbW1hbmQgfSBmcm9tICcuL3BhdGgnO1xuY29uc3QgcmVhZGVyID0gbmV3IEdyYXBoaWNzU3RyaW5nUmVhZGVyKCk7XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlTdHJpbmcoZGF0YSwgY29udGV4dCkge1xuICAgIGlmICghZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHJlYWRlci5zZXRQYXRoKGRhdGEpO1xuICAgIHdoaWxlIChyZWFkZXIucmVhZE5leHQoKSkge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gcmVhZGVyLmdldENvbW1hbmQoKTtcbiAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGFwcGx5Q29tbWFuZChjb21tYW5kLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgQ2FudmFzUGF0dGVybnMgfSBmcm9tICdAZTJkL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgU291cmNlIH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IE1hdHJpeCB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5jb25zdCBlbXB0eU1hdHJpeCA9IE1hdHJpeC5lbXB0eSgpO1xuY29uc3QgZW1wdHlBcnJheSA9IFtdO1xuZnVuY3Rpb24gZ2V0Q2FudmFzUGF0dGVybihmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgaWYgKHR5cGVvZiBmaWxsID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGZpbGwsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBmaWxsID09PSAnb2JqZWN0Jykge1xuICAgICAgICBzd2l0Y2ggKGZpbGwudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc29saWQnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHNvbGlkID0gZmlsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKHNvbGlkLmNvbG9yID8/IDAsIHNvbGlkLmFscGhhID8/IDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGNhc2UgJ2xpbmVhcic6XG4gICAgICAgICAgICAgICAgY29uc3QgeyBtYXRyaXg6IG1sID0gZW1wdHlNYXRyaXgsIGNvbG9yczogY2wgPSBlbXB0eUFycmF5LCBhbHBoYXM6IGFsID0gZW1wdHlBcnJheSwgcmF0aW9zOiBybCA9IGVtcHR5QXJyYXksIH0gPSBmaWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5saW5lYXJHcmFkaWVudFBhdHRlcm4obWwsIGNsLCBhbCwgcmwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGNhc2UgJ3JhZGlhbCc6XG4gICAgICAgICAgICAgICAgY29uc3QgeyBtYXRyaXg6IG1yID0gZW1wdHlNYXRyaXgsIGNvbG9yczogY3IgPSBlbXB0eUFycmF5LCBhbHBoYXM6IGFyID0gZW1wdHlBcnJheSwgcmF0aW9zOiByciA9IGVtcHR5QXJyYXksIH0gPSBmaWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5yYWRpYWxHcmFkaWVudFBhdHRlcm4obXIsIGNyLCBhciwgcnIsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGNhc2UgJ2JpdG1hcCc6XG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXBlYXQgPSB0cnVlIH0gPSBmaWxsO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gU291cmNlLmdldFJlc291cmNlKGZpbGwsIGVuZ2luZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMuYml0bWFwUGF0dGVybihyZXNvdXJjZS5pbWFnZSwgcmVwZWF0LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbGxTdHlsZShmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBnZXRDYW52YXNQYXR0ZXJuKGZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0cm9rZVN0eWxlKHN0cm9rZSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGlmICh0eXBlb2Ygc3Ryb2tlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKHN0cm9rZSwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBzdHJva2UgPT09ICdvYmplY3QnICYmIHN0cm9rZS5maWxsKSB7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBnZXRDYW52YXNQYXR0ZXJuKHN0cm9rZS5maWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgUGF0aENvbW1hbmQgfSBmcm9tICcuL3BhdGgnO1xuaW1wb3J0IHsgR3JhcGhpY3NTdHJpbmcgfSBmcm9tICcuL3N0cmluZyc7XG5leHBvcnQgdmFyIFJlY3RhbmdsZURhdGE7XG4oZnVuY3Rpb24gKFJlY3RhbmdsZURhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCB3aWR0aCA9IDAsIGhlaWdodCA9IDAsIH0gPSBkYXRhO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHgsIHkpO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHggKyB3aWR0aCwgeSArIGhlaWdodCk7XG4gICAgfVxuICAgIFJlY3RhbmdsZURhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoUmVjdGFuZ2xlRGF0YSB8fCAoUmVjdGFuZ2xlRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIEVsbGlwc2VEYXRhO1xuKGZ1bmN0aW9uIChFbGxpcHNlRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHJhZGl1cyA9IDAsIHJhZGl1c1gsIHJhZGl1c1ksIH0gPSBkYXRhO1xuICAgICAgICBjb25zdCByeCA9IHJhZGl1c1ggPz8gcmFkaXVzO1xuICAgICAgICBjb25zdCByeSA9IHJhZGl1c1kgPz8gcmFkaXVzO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHggLSByeCwgeSAtIHJ5KTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4ICsgcngsIHkgKyByeSk7XG4gICAgfVxuICAgIEVsbGlwc2VEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEVsbGlwc2VEYXRhIHx8IChFbGxpcHNlRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIFBhdGhEYXRhO1xuKGZ1bmN0aW9uIChQYXRoRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoRGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcGF0aERhdGE7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIEdyYXBoaWNzU3RyaW5nLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBkYXRhW2ldO1xuICAgICAgICAgICAgICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyhjb21tYW5kLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFBhdGhEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFBhdGhEYXRhIHx8IChQYXRoRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIEdyYXBoaWNzRGF0YTtcbihmdW5jdGlvbiAoR3JhcGhpY3NEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IGRhdGE7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAncmVjdGFuZ2xlJzpcbiAgICAgICAgICAgICAgICBSZWN0YW5nbGVEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICAgICAgICAgICAgRWxsaXBzZURhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwYXRoJzpcbiAgICAgICAgICAgICAgICBQYXRoRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEdyYXBoaWNzRGF0YSB8fCAoR3JhcGhpY3NEYXRhID0ge30pKTtcbiIsImltcG9ydCB7IEJvdW5kcyB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5leHBvcnQgdmFyIFBhdGhDb21tYW5kO1xuKGZ1bmN0aW9uIChQYXRoQ29tbWFuZCkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBwYXRoO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ21vdmVUbyc6XG4gICAgICAgICAgICBjYXNlICdsaW5lVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBtb3ZlVG8ueCA/PyAwLCBtb3ZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1cnZlVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3VydmVUby5jeCA/PyAwLCBjdXJ2ZVRvLmN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3VydmVUby54ID8/IDAsIGN1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1YmljQ3VydmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby5jeCA/PyAwLCBjdWJpY0N1cnZlVG8uY3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8uc3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLnN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLnggPz8gMCwgY3ViaWNDdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFBhdGhDb21tYW5kIHx8IChQYXRoQ29tbWFuZCA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQYXRoQ29tbWFuZCwgfSBmcm9tICcuL3BhdGgnO1xuY29uc3QgTlVNQkVSU19DT1VOVCA9IHtcbiAgICBNOiAyLFxuICAgIG06IDIsXG4gICAgTDogMixcbiAgICBsOiAyLFxuICAgIEg6IDEsXG4gICAgaDogMSxcbiAgICBWOiAxLFxuICAgIHY6IDEsXG4gICAgQzogNixcbiAgICBjOiA2LFxuICAgIFM6IDQsXG4gICAgczogNCxcbiAgICBROiA0LFxuICAgIHE6IDQsXG4gICAgVDogMixcbiAgICB0OiAyLFxufTtcbmV4cG9ydCBjbGFzcyBHcmFwaGljc1N0cmluZ1N0cmVhbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9ICcnO1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgdGhpcy5jb21tYW5kUmVnZXggPSAvW01tTGxIaFZ2Q2NTc1FxVHRdL2c7XG4gICAgICAgIHRoaXMubnVtYmVyUmVnZXggPSAvWy0rXFxkLl0rL2c7XG4gICAgfVxuICAgIHNldFBhdGgocGF0aCkge1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLmNvbW1hbmRSZWdleC5sYXN0SW5kZXggPSAwO1xuICAgIH1cbiAgICBnZXRDb21tYW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kO1xuICAgIH1cbiAgICBnZXRCdWZmZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlcjtcbiAgICB9XG4gICAgcmVhZE5leHQoKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmRNYXRjaCA9IHRoaXMuY29tbWFuZFJlZ2V4LmV4ZWModGhpcy5wYXRoKTtcbiAgICAgICAgaWYgKGNvbW1hbmRNYXRjaCkge1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kID0gY29tbWFuZE1hdGNoWzBdO1xuICAgICAgICAgICAgY29uc3QgY291bnQgPSBOVU1CRVJTX0NPVU5UW3RoaXMuY29tbWFuZF07XG4gICAgICAgICAgICB0aGlzLm51bWJlclJlZ2V4Lmxhc3RJbmRleCA9IGNvbW1hbmRNYXRjaC5pbmRleDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlck1hdGNoID0gdGhpcy5udW1iZXJSZWdleC5leGVjKHRoaXMucGF0aCk7XG4gICAgICAgICAgICAgICAgaWYgKG51bWJlck1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyW2ldID0gcGFyc2VGbG9hdChudW1iZXJNYXRjaFswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU3RyaW5nUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBuZXcgR3JhcGhpY3NTdHJpbmdTdHJlYW0oKTtcbiAgICAgICAgdGhpcy5jb21tYW5kID0geyB0eXBlOiAnbW92ZVRvJyB9O1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgICAgIHRoaXMubGFzdFkgPSAwO1xuICAgIH1cbiAgICBzZXRQYXRoKHBhdGgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0uc2V0UGF0aChwYXRoKTtcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgICAgIHRoaXMubGFzdFkgPSAwO1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSBmYWxzZTtcbiAgICB9XG4gICAgZ2V0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZEV4aXN0cyA/IHRoaXMuY29tbWFuZCA6IG51bGw7XG4gICAgfVxuICAgIHJlYWROZXh0KCkge1xuICAgICAgICB0aGlzLnN0cmVhbS5yZWFkTmV4dCgpO1xuICAgICAgICB0aGlzLnBhcnNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRFeGlzdHM7XG4gICAgfVxuICAgIHBhcnNlKCkge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gdGhpcy5zdHJlYW0uZ2V0Q29tbWFuZCgpO1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSAhIWNvbW1hbmQ7XG4gICAgICAgIGlmICghdGhpcy5jb21tYW5kRXhpc3RzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy5zdHJlYW0uZ2V0QnVmZmVyKCk7XG4gICAgICAgIGNvbnN0IFtlMCwgZTEsIGUyLCBlMywgZTQsIGU1LF0gPSBidWZmZXI7XG4gICAgICAgIGxldCBjeCA9IDA7XG4gICAgICAgIGxldCBjeSA9IDA7XG4gICAgICAgIHN3aXRjaCAoY29tbWFuZCkge1xuICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdtb3ZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby55ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBtb3ZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IG1vdmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbW92ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnkgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBtb3ZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IG1vdmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBsaW5lVG8ueDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdWJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IGUwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndic6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMCArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMjtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0gZTM7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTU7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMiArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IGUzICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSBlNCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTUgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSBjeDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0gY3k7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSBlMjtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnkgPSBlMztcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gY3g7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGN5O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSBlMiArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTMgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSBlMjtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0gZTM7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSBlMiArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUzICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBjdXJ2ZVRvLnggLSAoY3VydmVUby5jeCAtIGN1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0gY3VydmVUby55IC0gKGN1cnZlVG8uY3kgLSBjdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSBjeDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IGN5O1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gY3g7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSBjeTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuY29uc3QgcmVhZGVyID0gbmV3IEdyYXBoaWNzU3RyaW5nUmVhZGVyKCk7XG5leHBvcnQgdmFyIEdyYXBoaWNzU3RyaW5nO1xuKGZ1bmN0aW9uIChHcmFwaGljc1N0cmluZykge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoLCBib3VuZHMpIHtcbiAgICAgICAgcmVhZGVyLnNldFBhdGgocGF0aCk7XG4gICAgICAgIHdoaWxlIChyZWFkZXIucmVhZE5leHQoKSkge1xuICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IHJlYWRlci5nZXRDb21tYW5kKCk7XG4gICAgICAgICAgICBpZiAoY29tbWFuZCkge1xuICAgICAgICAgICAgICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyhjb21tYW5kLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIEdyYXBoaWNzU3RyaW5nLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEdyYXBoaWNzU3RyaW5nIHx8IChHcmFwaGljc1N0cmluZyA9IHt9KSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaGljcyB7XG4gICAgY29uc3RydWN0b3Ioc2hhcGUpIHtcbiAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlO1xuICAgIH1cbiAgICBiZWdpbkZpbGwoY29sb3IgPSAwLCBhbHBoYSA9IDEpIHtcbiAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGJlZ2luQml0bWFwRmlsbChzcmMsIG1hdHJpeCwgcmVwZWF0ID0gdHJ1ZSwgc21vb3RoID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ2JpdG1hcCcsXG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICBzbW9vdGgsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGJlZ2luR3JhZGllbnRGaWxsKHR5cGUsIGNvbG9yLCBhbHBoYSwgcmF0aW8sIG1hdHJpeCwgc3ByZWFkID0gJ3JlcGVhdCcsIGludGVycG9sYXRpb24gPSAncmdiJywgZm9jYWxQb2ludFJhdGlvID0gMCkge1xuICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgc3ByZWFkLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGlvbixcbiAgICAgICAgICAgIGZvY2FsUG9pbnRSYXRpbyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGluZVN0eWxlKHRoaWNrbmVzcyA9IDAsIGNvbG9yID0gMCwgYWxwaGEgPSAxLCBwaXhlbEhpbnRpbmcgPSBmYWxzZSwgc2NhbGVNb2RlID0gJ25vbmUnLCBjYXBzID0gJ3JvdW5kJywgam9pbnRzID0gJ3JvdW5kJywgbWl0ZXJMaW1pdCA9IDMpIHtcbiAgICAgICAgdGhpcy5zdHJva2UgPSB7XG4gICAgICAgICAgICB0aGlja25lc3MsXG4gICAgICAgICAgICBwaXhlbEhpbnRpbmcsXG4gICAgICAgICAgICBzY2FsZU1vZGUsXG4gICAgICAgICAgICBjYXBzLFxuICAgICAgICAgICAgam9pbnRzLFxuICAgICAgICAgICAgbWl0ZXJMaW1pdCxcbiAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc29saWQnLFxuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGluZUdyYWRpZW50U3R5bGUodHlwZSwgY29sb3IsIGFscGhhLCByYXRpbywgbWF0cml4LCBzcHJlYWQgPSAncmVwZWF0JywgaW50ZXJwb2xhdGlvbiA9ICdyZ2InLCBmb2NhbFBvaW50UmF0aW8gPSAwKSB7XG4gICAgICAgIGlmICghdGhpcy5zdHJva2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0cm9rZS5maWxsID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHNwcmVhZCxcbiAgICAgICAgICAgIGludGVycG9sYXRpb24sXG4gICAgICAgICAgICBmb2NhbFBvaW50UmF0aW8sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxpbmVCaXRtYXBTdHlsZShzcmMsIG1hdHJpeCwgcmVwZWF0ID0gdHJ1ZSwgc21vb3RoID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0cm9rZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Ryb2tlLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAnYml0bWFwJyxcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHJlcGVhdCxcbiAgICAgICAgICAgIHNtb290aCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbW92ZVRvKHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgIHBhdGgucHVzaCh7IHR5cGU6ICdtb3ZlVG8nLCB4LCB5IH0pO1xuICAgIH1cbiAgICBsaW5lVG8oeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhdGgucHVzaCh7IHR5cGU6ICdsaW5lVG8nLCB4LCB5IH0pO1xuICAgIH1cbiAgICBjdXJ2ZVRvKGN4LCBjeSwgeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3VydmVUbycsIGN4LCBjeSwgeCwgeSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGN1YmljQ3VydmVUbyhjeCwgY3ksIHN4LCBzeSwgeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3VydmVUbycsIGN4LCBjeSwgc3gsIHN5LCB4LCB5LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZHJhd1JvdW5kUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBlbGxpcHNlV2lkdGggPSAwLCBlbGxpcHNlSGVpZ2h0ID0gMCkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5iZWdpblBhdGgoKTtcbiAgICAgICAgY29uc3QgdyA9IGVsbGlwc2VXaWR0aDtcbiAgICAgICAgY29uc3QgaCA9IGVsbGlwc2VIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGsgPSAwLjU1MjI4NDg7XG4gICAgICAgIGNvbnN0IG94ID0gKHcgLyAyKSAqIGs7XG4gICAgICAgIGNvbnN0IG95ID0gKGggLyAyKSAqIGs7XG4gICAgICAgIGNvbnN0IHhlID0geCArIHc7XG4gICAgICAgIGNvbnN0IHllID0geSArIGg7XG4gICAgICAgIGNvbnN0IHhtID0geCArIHcgLyAyO1xuICAgICAgICBjb25zdCB5bSA9IHkgKyBoIC8gMjtcbiAgICAgICAgY29uc3QgZHggPSB3aWR0aCAtIHc7XG4gICAgICAgIGNvbnN0IGR5ID0gaGVpZ2h0IC0gaDtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdtb3ZlVG8nLFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHk6IHltLFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHgsXG4gICAgICAgICAgICBjeTogeW0gLSBveSxcbiAgICAgICAgICAgIHN4OiB4bSAtIG94LFxuICAgICAgICAgICAgc3k6IHksXG4gICAgICAgICAgICB4OiB4bSxcbiAgICAgICAgICAgIHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVUbycsXG4gICAgICAgICAgICB4OiB4bSArIGR4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4bSArIG94ICsgZHgsXG4gICAgICAgICAgICBjeTogeSxcbiAgICAgICAgICAgIHN4OiB4ZSArIGR4LFxuICAgICAgICAgICAgc3k6IHltIC0gb3ksXG4gICAgICAgICAgICB4OiB4ZSArIGR4LFxuICAgICAgICAgICAgeTogeW0sXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVUbycsXG4gICAgICAgICAgICB4OiB4ZSArIGR4LFxuICAgICAgICAgICAgeTogeW0gKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4ZSArIGR4LFxuICAgICAgICAgICAgY3k6IHltICsgb3kgKyBkeSxcbiAgICAgICAgICAgIHN4OiB4bSArIG94ICsgZHgsXG4gICAgICAgICAgICBzeTogeWUgKyBkeSxcbiAgICAgICAgICAgIHg6IHhtICsgZHgsXG4gICAgICAgICAgICB5OiB5ZSArIGR5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeG0sXG4gICAgICAgICAgICB5OiB5ZSArIGR5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhtIC0gb3gsXG4gICAgICAgICAgICBjeTogeWUgKyBkeSxcbiAgICAgICAgICAgIHN4OiB4LFxuICAgICAgICAgICAgc3k6IHltICsgb3kgKyBkeSxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5OiB5bSArIGR5LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZHJhd1JlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEudHlwZSA9ICdyZWN0YW5nbGUnO1xuICAgICAgICBkYXRhLnggPSB4O1xuICAgICAgICBkYXRhLnkgPSB5O1xuICAgICAgICBkYXRhLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGRhdGEuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBkcmF3Q2lyY2xlKHgsIHksIHJhZGl1cykge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEudHlwZSA9ICdlbGxpcHNlJztcbiAgICAgICAgZGF0YS54ID0geDtcbiAgICAgICAgZGF0YS55ID0geTtcbiAgICAgICAgZGF0YS5yYWRpdXMgPSByYWRpdXM7XG4gICAgfVxuICAgIGRyYXdFbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAnZWxsaXBzZSc7XG4gICAgICAgIGRhdGEucmFkaXVzWCA9IHdpZHRoIC8gMjtcbiAgICAgICAgZGF0YS5yYWRpdXNZID0gaGVpZ2h0IC8gMjtcbiAgICAgICAgZGF0YS54ID0geCAtIGRhdGEucmFkaXVzWDtcbiAgICAgICAgZGF0YS55ID0geSAtIGRhdGEucmFkaXVzWTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNoYXBlLmRhdGE7XG4gICAgfVxuICAgIGNyZWF0ZURhdGEoKSB7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUsIGZpbGwsIHN0cm9rZSB9ID0gdGhpcztcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2hhcGUuZGF0YSkpIHtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc2hhcGUuZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHNoYXBlLmRhdGEgPSBbc2hhcGUuZGF0YV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaGFwZS5kYXRhID0gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ3JhcGhpY3NEYXRhID0geyB0eXBlOiAncGF0aCcsIGZpbGwsIHN0cm9rZSB9O1xuICAgICAgICBzaGFwZS5kYXRhLnB1c2goZ3JhcGhpY3NEYXRhKTtcbiAgICAgICAgcmV0dXJuIGdyYXBoaWNzRGF0YTtcbiAgICB9XG4gICAgYmVnaW5QYXRoKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEuZGF0YSA9IFtdO1xuICAgICAgICByZXR1cm4gZGF0YS5kYXRhO1xuICAgIH1cbiAgICBnZXRQYXRoKCkge1xuICAgICAgICBjb25zdCB7IHNoYXBlIH0gPSB0aGlzO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2hhcGUuZGF0YSkgfHwgIXNoYXBlLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBzaGFwZS5kYXRhW3NoYXBlLmRhdGEubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLmRhdGEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhLmRhdGE7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9kYXRhL2RhdGEnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL3BhdGgnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL3N0cmluZyc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvc3R5bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9ncmFwaGljcyc7XG5leHBvcnQgKiBmcm9tICcuL3NoYXBlJztcbmV4cG9ydCAqIGZyb20gJy4vY2FudmFzL3NoYXBlJztcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IEJvdW5kcywgUmVjdGFuZ2xlIH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAZTJkL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBHcmFwaGljc0RhdGEgfSBmcm9tICcuL2RhdGEvZGF0YSc7XG5pbXBvcnQgR3JhcGhpY3MgZnJvbSAnLi9ncmFwaGljcyc7XG5leHBvcnQgY29uc3QgU0hBUEUgPSAnc2hhcGUnO1xuY29uc3QgYm91bmRzID0gQm91bmRzLmVtcHR5KCk7XG5leHBvcnQgdmFyIFNoYXBlO1xuKGZ1bmN0aW9uIChTaGFwZSkge1xuICAgIGZ1bmN0aW9uIGdldEdyYXBoaWNzKHNoYXBlKSB7XG4gICAgICAgIHJldHVybiBuZXcgR3JhcGhpY3Moc2hhcGUpO1xuICAgIH1cbiAgICBTaGFwZS5nZXRHcmFwaGljcyA9IGdldEdyYXBoaWNzO1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhzaGFwZSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gc2hhcGU7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQm91bmRzLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBHcmFwaGljc0RhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGFbaV0sIGJvdW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBHcmFwaGljc0RhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQm91bmRzLmlzRW1wdHkoYm91bmRzKSkge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgd2lkdGggPSBib3VuZHMubWF4WCAtIGJvdW5kcy5taW5YO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBib3VuZHMubWF4WSAtIGJvdW5kcy5taW5ZO1xuICAgICAgICBjb25zdCB4ID0gYm91bmRzLm1pblggKyBQaXZvdC5nZXRYKHNoYXBlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBib3VuZHMubWluWSArIFBpdm90LmdldFkoc2hhcGUsIGhlaWdodCk7XG4gICAgICAgIHJlc3VsdC54ID0geDtcbiAgICAgICAgcmVzdWx0LnkgPSB5O1xuICAgICAgICByZXN1bHQud2lkdGggPSB3aWR0aDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoU2hhcGUgfHwgKFNoYXBlID0ge30pKTtcbmNvbnN0IHJlY3RhbmdsZSA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBTaGFwZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoU2hhcGVFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KHNoYXBlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBsb2NhbCB9ID0gZW5naW5lLnBvaW50ZXJFdmVudHM7XG4gICAgICAgIFNoYXBlLmNhbGN1bGF0ZUJvdW5kcyhzaGFwZSwgcmVjdGFuZ2xlKTtcbiAgICAgICAgcmV0dXJuIFJlY3RhbmdsZS5jb250YWlucyhyZWN0YW5nbGUsIGxvY2FsKTtcbiAgICB9XG4gICAgU2hhcGVFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoU0hBUEUsIGhpdFRlc3QpO1xuICAgICAgICBJbWFnZVJlc291cmNlLmluaXQoZW5naW5lKTtcbiAgICB9XG4gICAgU2hhcGVFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShTaGFwZUV4dGVuc2lvbiB8fCAoU2hhcGVFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAZTJkL2NvcmUnO1xuaW1wb3J0IHsgQ2FudmFzUGF0dGVybnMgfSBmcm9tICdAZTJkL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgRm9udCB9IGZyb20gJy4vZm9udCc7XG5pbXBvcnQgeyBUZXh0RXh0ZW5zaW9uLCBURVhUIH0gZnJvbSAnLi90ZXh0JztcbmltcG9ydCB7IFRleHRGb3JtYXQgfSBmcm9tICcuL2Zvcm1hdCc7XG5jb25zdCB2YWxpZFRleHRGb3JtYXQgPSB7fTtcbmV4cG9ydCB2YXIgQ2FudmFzVGV4dEV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzVGV4dEV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihjb21wb25lbnQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHRleHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBtYXRyaXgsIGNvbG9yVHJhbnNmb3JtIH0gPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRleHRGb3JtYXQsIGJvcmRlciwgYmFja2dyb3VuZCwgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgVGV4dEZvcm1hdC5nZXRWYWxpZFRleHRGb3JtYXQodGV4dEZvcm1hdCwgdmFsaWRUZXh0Rm9ybWF0KTtcbiAgICAgICAgY29uc3QgZm9ybWF0U2l6ZSA9IHZhbGlkVGV4dEZvcm1hdC5zaXplO1xuICAgICAgICBjb25zdCBmb3JtYXRMZXR0ZXJTcGFjaW5nID0gdmFsaWRUZXh0Rm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgICAgIGNvbnN0IGZvcm1hdExlYWRpbmcgPSB2YWxpZFRleHRGb3JtYXQubGVhZGluZztcbiAgICAgICAgY29uc3QgZm9udCA9IEZvbnQuZ2V0Rm9udCh2YWxpZFRleHRGb3JtYXQuZm9udCk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IGVuZ2luZS5wbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHRleHRXaWR0aCA9IEZvbnQuZ2V0VGV4dFdpZHRoKGZvbnQsIHZhbGlkVGV4dEZvcm1hdCwgbGluZXMpO1xuICAgICAgICBjb25zdCB0ZXh0SGVpZ2h0ID0gRm9udC5nZXRUZXh0SGVpZ2h0KHZhbGlkVGV4dEZvcm1hdCwgbGluZXMpO1xuICAgICAgICBjb25zdCByZWFsV2lkdGggPSB3aWR0aCA/PyB0ZXh0V2lkdGg7XG4gICAgICAgIGNvbnN0IHJlYWxIZWlnaHQgPSBoZWlnaHQgPz8gdGV4dEhlaWdodDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IFBpdm90LmdldFgoY29tcG9uZW50LCByZWFsV2lkdGgpO1xuICAgICAgICBjb25zdCBvZmZzZXRZID0gUGl2b3QuZ2V0WShjb21wb25lbnQsIHJlYWxIZWlnaHQpO1xuICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFsaWduVmVydGljYWxWYWx1ZSA9IFRleHRGb3JtYXQuZ2V0VmVydGljYWxBbGlnblZhbHVlKHZhbGlkVGV4dEZvcm1hdC52ZXJ0aWNhbEFsaWduKTtcbiAgICAgICAgICAgIHkgPSAoaGVpZ2h0IC0gdGV4dEhlaWdodCkgKiBhbGlnblZlcnRpY2FsVmFsdWU7XG4gICAgICAgICAgICBpZiAoeSA8IDApIHtcbiAgICAgICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgIGlmIChiYWNrZ3JvdW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICcnO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihiYWNrZ3JvdW5kLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQucmVjdChvZmZzZXRYLCBvZmZzZXRZLCByZWFsV2lkdGgsIHJlYWxIZWlnaHQpO1xuICAgICAgICAgICAgY29udGV4dDJkLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihib3JkZXIsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcbiAgICAgICAgICAgIGNvbnRleHQyZC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5yZWN0KG9mZnNldFgsIG9mZnNldFksIHJlYWxXaWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dDJkLmZvbnQgPSBGb250LmdldFN0eWxlRm9udCh2YWxpZFRleHRGb3JtYXQuZm9udCwgZm9ybWF0U2l6ZSk7XG4gICAgICAgIGNvbnRleHQyZC50ZXh0QmFzZWxpbmUgPSAnYWxwaGFiZXRpYyc7XG4gICAgICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICcnO1xuICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKHZhbGlkVGV4dEZvcm1hdC5jb2xvciwgdmFsaWRUZXh0Rm9ybWF0LmFscGhhLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIHkgKz0gb2Zmc2V0WTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgY29uc3QgbGluZVdpZHRoID0gRm9udC5nZXRMaW5lV2lkdGgoZm9udCwgdmFsaWRUZXh0Rm9ybWF0LCBsaW5lKTtcbiAgICAgICAgICAgIGNvbnN0IGFsaWduVmFsdWUgPSBUZXh0Rm9ybWF0LmdldEFsaWduVmFsdWUodmFsaWRUZXh0Rm9ybWF0LmFsaWduKTtcbiAgICAgICAgICAgIGxldCB4ID0gKHJlYWxXaWR0aCAtIGxpbmVXaWR0aCkgKiBhbGlnblZhbHVlO1xuICAgICAgICAgICAgaWYgKHggPCAwKSB7XG4gICAgICAgICAgICAgICAgeCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4ICs9IG9mZnNldFg7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpbmUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdCA9IGxpbmUuY2hhckF0KGopO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZCA9IGxpbmUuY2hhckF0KGogKyAxKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKGZvbnQsIGZvcm1hdFNpemUsIGZpcnN0LCBzZWNvbmQpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQyZC5maWxsVGV4dChmaXJzdCwgeCwgeSArIGZvcm1hdFNpemUpO1xuICAgICAgICAgICAgICAgIHggKz0gYWR2YW5jZSArIGZvcm1hdExldHRlclNwYWNpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5ICs9IGZvcm1hdFNpemUgKyBmb3JtYXRMZWFkaW5nO1xuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc1RleHRFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIFRleHRFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KFRFWFQsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc1RleHRFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNUZXh0RXh0ZW5zaW9uIHx8IChDYW52YXNUZXh0RXh0ZW5zaW9uID0ge30pKTtcbiIsImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuZXhwb3J0IGNvbnN0IEVNID0gMTAyNDtcbmNvbnN0IGZvbnRzID0gbmV3IE1hcCgpO1xuZXhwb3J0IHZhciBGb250O1xuKGZ1bmN0aW9uIChGb250KSB7XG4gICAgZnVuY3Rpb24gZ2V0U3R5bGVGb250KGZvbnQsIHNpemUpIHtcbiAgICAgICAgcmV0dXJuIGAke3NpemV9cHggJHtmb250fWA7XG4gICAgfVxuICAgIEZvbnQuZ2V0U3R5bGVGb250ID0gZ2V0U3R5bGVGb250O1xuICAgIGZ1bmN0aW9uIG1lYXN1cmVUZXh0KGZvbnQsIHNpemUsIHRleHQpIHtcbiAgICAgICAgY29udGV4dC5mb250ID0gZ2V0U3R5bGVGb250KGZvbnQsIHNpemUpO1xuICAgICAgICByZXR1cm4gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcbiAgICB9XG4gICAgRm9udC5tZWFzdXJlVGV4dCA9IG1lYXN1cmVUZXh0O1xuICAgIGZ1bmN0aW9uIGdldENoYXJXaWR0aChmb250LCBjaGFyKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IGZvbnQud2lkdGhzLmdldChjaGFyKTtcbiAgICAgICAgaWYgKCF3aWR0aCkge1xuICAgICAgICAgICAgd2lkdGggPSBtZWFzdXJlVGV4dChmb250Lm5hbWUsIEVNLCBjaGFyKTtcbiAgICAgICAgICAgIGZvbnQud2lkdGhzLnNldChjaGFyLCB3aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cbiAgICBGb250LmdldENoYXJXaWR0aCA9IGdldENoYXJXaWR0aDtcbiAgICBmdW5jdGlvbiBnZXRLZXJuaW5nKGZvbnQsIGZpcnN0LCBzZWNvbmQpIHtcbiAgICAgICAgY29uc3QgcGFpciA9IGZpcnN0ICsgc2Vjb25kO1xuICAgICAgICBsZXQga2VybmluZyA9IGZvbnQua2VybmluZ3MuZ2V0KHBhaXIpO1xuICAgICAgICBpZiAoIWtlcm5pbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoU2Vjb25kID0gZ2V0Q2hhcldpZHRoKGZvbnQsIHNlY29uZCk7XG4gICAgICAgICAgICBjb25zdCB3aWR0aFRvdGFsID0gbWVhc3VyZVRleHQoZm9udC5uYW1lLCBFTSwgZmlyc3QgKyBzZWNvbmQpO1xuICAgICAgICAgICAga2VybmluZyA9IHdpZHRoVG90YWwgLSB3aWR0aFNlY29uZDtcbiAgICAgICAgICAgIGZvbnQua2VybmluZ3Muc2V0KHBhaXIsIGtlcm5pbmcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXJuaW5nO1xuICAgIH1cbiAgICBGb250LmdldEtlcm5pbmcgPSBnZXRLZXJuaW5nO1xuICAgIGZ1bmN0aW9uIGdldEFkdmFuY2UoZm9udCwgc2l6ZSwgZmlyc3QsIHNlY29uZCkge1xuICAgICAgICBjb25zdCBzY2FsZSA9IHNpemUgLyBFTTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBnZXRDaGFyV2lkdGgoZm9udCwgZmlyc3QpO1xuICAgICAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpZHRoICogc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2VybmluZyA9IGdldEtlcm5pbmcoZm9udCwgZmlyc3QsIHNlY29uZCk7XG4gICAgICAgIHJldHVybiBrZXJuaW5nICogc2NhbGU7XG4gICAgfVxuICAgIEZvbnQuZ2V0QWR2YW5jZSA9IGdldEFkdmFuY2U7XG4gICAgZnVuY3Rpb24gZ2V0Rm9udChuYW1lKSB7XG4gICAgICAgIGxldCBmb250ID0gZm9udHMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoIWZvbnQpIHtcbiAgICAgICAgICAgIGZvbnQgPSB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB3aWR0aHM6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgICAgICBrZXJuaW5nczogbmV3IE1hcCgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvbnRzLnNldChuYW1lLCBmb250KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9udDtcbiAgICB9XG4gICAgRm9udC5nZXRGb250ID0gZ2V0Rm9udDtcbiAgICBmdW5jdGlvbiBnZXRMaW5lV2lkdGgoZm9udCwgZm9ybWF0LCBsaW5lKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZmlyc3QgPSBsaW5lLmNoYXJBdChpKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZCA9IGxpbmUuY2hhckF0KGkgKyAxKTtcbiAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBnZXRBZHZhbmNlKGZvbnQsIGZvcm1hdC5zaXplLCBmaXJzdCwgc2Vjb25kKTtcbiAgICAgICAgICAgIHdpZHRoICs9IGFkdmFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdC5sZXR0ZXJTcGFjaW5nICYmIGxpbmUubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgd2lkdGggKz0gZm9ybWF0LmxldHRlclNwYWNpbmcgKiAobGluZS5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfVxuICAgIEZvbnQuZ2V0TGluZVdpZHRoID0gZ2V0TGluZVdpZHRoO1xuICAgIGZ1bmN0aW9uIGdldFRleHRXaWR0aChmb250LCBmb3JtYXQsIGxpbmVzKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IGdldExpbmVXaWR0aChmb250LCBmb3JtYXQsIGxpbmUpO1xuICAgICAgICAgICAgaWYgKHdpZHRoIDwgbGluZVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgd2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cbiAgICBGb250LmdldFRleHRXaWR0aCA9IGdldFRleHRXaWR0aDtcbiAgICBmdW5jdGlvbiBnZXRUZXh0SGVpZ2h0KGZvcm1hdCwgbGluZXMpIHtcbiAgICAgICAgbGV0IGhlaWdodCA9IGZvcm1hdC5zaXplICogbGluZXMubGVuZ3RoO1xuICAgICAgICBpZiAoZm9ybWF0LmxlYWRpbmcgJiYgbGluZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgaGVpZ2h0ICs9IGZvcm1hdC5sZWFkaW5nICogKGxpbmVzLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfVxuICAgIEZvbnQuZ2V0VGV4dEhlaWdodCA9IGdldFRleHRIZWlnaHQ7XG59KShGb250IHx8IChGb250ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgVGV4dEZvcm1hdDtcbihmdW5jdGlvbiAoVGV4dEZvcm1hdCkge1xuICAgIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQgPSB7XG4gICAgICAgIGZvbnQ6ICdhcmlhbCcsXG4gICAgICAgIHNpemU6IDE1LFxuICAgICAgICBjb2xvcjogMCxcbiAgICAgICAgYWxwaGE6IDEsXG4gICAgICAgIGJvbGQ6IGZhbHNlLFxuICAgICAgICBpdGFsaWM6IGZhbHNlLFxuICAgICAgICB1bmRlcmxpbmU6IGZhbHNlLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwLFxuICAgICAgICBsZWFkaW5nOiAwLFxuICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGdldFZhbGlkVGV4dEZvcm1hdChzb3VyY2UsIHJlc3VsdCkge1xuICAgICAgICByZXN1bHQuZm9udCA9IHNvdXJjZT8uZm9udCA/PyBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LmZvbnQ7XG4gICAgICAgIHJlc3VsdC5zaXplID0gc291cmNlPy5zaXplID8/IFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQuc2l6ZTtcbiAgICAgICAgcmVzdWx0LmNvbG9yID0gc291cmNlPy5jb2xvciA/PyBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LmNvbG9yO1xuICAgICAgICByZXN1bHQuYWxwaGEgPSBzb3VyY2U/LmFscGhhID8/IFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQuYWxwaGE7XG4gICAgICAgIHJlc3VsdC5ib2xkID0gc291cmNlPy5ib2xkID8/IFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQuYm9sZDtcbiAgICAgICAgcmVzdWx0Lml0YWxpYyA9IHNvdXJjZT8uaXRhbGljID8/IFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQuaXRhbGljO1xuICAgICAgICByZXN1bHQudW5kZXJsaW5lID0gc291cmNlPy51bmRlcmxpbmUgPz8gVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdC51bmRlcmxpbmU7XG4gICAgICAgIHJlc3VsdC5sZXR0ZXJTcGFjaW5nID0gc291cmNlPy5sZXR0ZXJTcGFjaW5nID8/IFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgcmVzdWx0LmxlYWRpbmcgPSBzb3VyY2U/LmxlYWRpbmcgPz8gVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdC5sZWFkaW5nO1xuICAgICAgICByZXN1bHQuYWxpZ24gPSBzb3VyY2U/LmFsaWduID8/IFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQuYWxpZ247XG4gICAgICAgIHJlc3VsdC52ZXJ0aWNhbEFsaWduID0gc291cmNlPy52ZXJ0aWNhbEFsaWduID8/IFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQudmVydGljYWxBbGlnbjtcbiAgICB9XG4gICAgVGV4dEZvcm1hdC5nZXRWYWxpZFRleHRGb3JtYXQgPSBnZXRWYWxpZFRleHRGb3JtYXQ7XG4gICAgZnVuY3Rpb24gZ2V0QWxpZ25WYWx1ZShhbGlnbikge1xuICAgICAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICAgICAgICBjYXNlICdsZWZ0JzogcmV0dXJuIDA7XG4gICAgICAgICAgICBjYXNlICdjZW50ZXInOiByZXR1cm4gMC41O1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOiByZXR1cm4gMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRGb3JtYXQuZ2V0QWxpZ25WYWx1ZSA9IGdldEFsaWduVmFsdWU7XG4gICAgZnVuY3Rpb24gZ2V0VmVydGljYWxBbGlnblZhbHVlKGFsaWduKSB7XG4gICAgICAgIHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6IHJldHVybiAwO1xuICAgICAgICAgICAgY2FzZSAnbWlkZGxlJzogcmV0dXJuIDAuNTtcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6IHJldHVybiAxO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dEZvcm1hdC5nZXRWZXJ0aWNhbEFsaWduVmFsdWUgPSBnZXRWZXJ0aWNhbEFsaWduVmFsdWU7XG59KShUZXh0Rm9ybWF0IHx8IChUZXh0Rm9ybWF0ID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL2Zvcm1hdCc7XG5leHBvcnQgKiBmcm9tICcuL2ZvbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMtdGV4dCc7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BlMmQvY29yZSc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgVGV4dEZvcm1hdCB9IGZyb20gJy4vZm9ybWF0JztcbmltcG9ydCB7IEZvbnQgfSBmcm9tICcuL2ZvbnQnO1xuZXhwb3J0IGNvbnN0IFRFWFQgPSAndGV4dCc7XG5jb25zdCB2YWxpZFRleHRGb3JtYXQgPSB7fTtcbmV4cG9ydCB2YXIgVGV4dDtcbihmdW5jdGlvbiAoVGV4dCkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhjb21wb25lbnQsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHRleHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBsZXQgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IHsgdGV4dEZvcm1hdCB9ID0gY29tcG9uZW50O1xuICAgICAgICBUZXh0Rm9ybWF0LmdldFZhbGlkVGV4dEZvcm1hdCh0ZXh0Rm9ybWF0LCB2YWxpZFRleHRGb3JtYXQpO1xuICAgICAgICBpZiAoIXdpZHRoKSB7XG4gICAgICAgICAgICBjb25zdCBmb250ID0gRm9udC5nZXRGb250KHZhbGlkVGV4dEZvcm1hdC5mb250KTtcbiAgICAgICAgICAgIHdpZHRoID0gRm9udC5nZXRUZXh0V2lkdGgoZm9udCwgdmFsaWRUZXh0Rm9ybWF0LCBsaW5lcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoZWlnaHQpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IEZvbnQuZ2V0VGV4dEhlaWdodCh2YWxpZFRleHRGb3JtYXQsIGxpbmVzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChjb21wb25lbnQsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoY29tcG9uZW50LCBoZWlnaHQpO1xuICAgICAgICBib3VuZHMueCA9IHg7XG4gICAgICAgIGJvdW5kcy55ID0geTtcbiAgICAgICAgYm91bmRzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGJvdW5kcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIFRleHQuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoVGV4dCB8fCAoVGV4dCA9IHt9KSk7XG5jb25zdCBib3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgVGV4dEV4dGVuc2lvbjtcbihmdW5jdGlvbiAoVGV4dEV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGhpdFRlc3QodGV4dCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgbG9jYWwgfSA9IGVuZ2luZS5wb2ludGVyRXZlbnRzO1xuICAgICAgICBUZXh0LmNhbGN1bGF0ZUJvdW5kcyh0ZXh0LCBib3VuZHMpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKGJvdW5kcywgbG9jYWwpO1xuICAgIH1cbiAgICBUZXh0RXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KFRFWFQsIGhpdFRlc3QpO1xuICAgIH1cbiAgICBUZXh0RXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoVGV4dEV4dGVuc2lvbiB8fCAoVGV4dEV4dGVuc2lvbiA9IHt9KSk7XG4iLCJleHBvcnQgY29uc3QgTElORUFSID0gJ2xpbmVhcic7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDID0gJ3F1YWRyYXRpYyc7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDX0lOID0gJ3F1YWRyYXRpY2luJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUNfT1VUID0gJ3F1YWRyYXRpY291dCc7XG5leHBvcnQgY29uc3QgQ1VCSUMgPSAnY3ViaWMnO1xuZXhwb3J0IGNvbnN0IENVQklDX0lOID0gJ2N1YmljaW4nO1xuZXhwb3J0IGNvbnN0IENVQklDX09VVCA9ICdjdWJpY291dCc7XG5leHBvcnQgY29uc3QgUVVBUlRJQyA9ICdxdWFydGljJztcbmV4cG9ydCBjb25zdCBRVUFSVElDX0lOID0gJ3F1YXJ0aWNpbic7XG5leHBvcnQgY29uc3QgUVVBUlRJQ19PVVQgPSAncXVhcnRpY291dCc7XG5leHBvcnQgY29uc3QgUVVJTlRJQyA9ICdxdWludGljJztcbmV4cG9ydCBjb25zdCBRVUlOVElDX0lOID0gJ3F1aW50aWNpbic7XG5leHBvcnQgY29uc3QgUVVJTlRJQ19PVVQgPSAncXVpbnRpY291dCc7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTCA9ICdxdWludGljJztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMX0lOID0gJ3F1aW50aWNpbic7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTF9PVVQgPSAncXVpbnRpY291dCc7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUwgPSAnZXhwb25lbnRpYWwnO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMX0lOID0gJ2V4cG9uZW50aWFsaW4nO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMX09VVCA9ICdleHBvbmVudGlhbG91dCc7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVIgPSAnY2lyY3VsYXInO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSX0lOID0gJ2NpcmN1bGFyaW4nO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSX09VVCA9ICdjaXJjdWxhcm91dCc7XG5leHBvcnQgY29uc3QgRUxBU1RJQyA9ICdlbGFzdGljJztcbmV4cG9ydCBjb25zdCBFTEFTVElDX0lOID0gJ2VsYXN0aWNpbic7XG5leHBvcnQgY29uc3QgRUxBU1RJQ19PVVQgPSAnZWxhc3RpY291dCc7XG5leHBvcnQgY29uc3QgQkFDSyA9ICdiYWNrJztcbmV4cG9ydCBjb25zdCBCQUNLX0lOID0gJ2JhY2tpbic7XG5leHBvcnQgY29uc3QgQkFDS19PVVQgPSAnYmFja291dCc7XG5leHBvcnQgY29uc3QgQk9VTkNFID0gJ2JvdW5jZSc7XG5leHBvcnQgY29uc3QgQk9VTkNFX0lOID0gJ2JvdW5jZWluJztcbmV4cG9ydCBjb25zdCBCT1VOQ0VfT1VUID0gJ2JvdW5jZW91dCc7XG5leHBvcnQgY29uc3QgZWFzaW5nID0ge1xuICAgIFtMSU5FQVJdOiAodmFsdWUpID0+IHZhbHVlLFxuICAgIFtRVUFEUkFUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMC41ICogKC0tdmFsdWUgKiAodmFsdWUgLSAyKSAtIDEpO1xuICAgIH0sXG4gICAgW1FVQURSQVRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUFEUkFUSUNfT1VUXTogKHZhbHVlKSA9PiAodmFsdWUgKiAoMiAtIHZhbHVlKSksXG4gICAgW0NVQklDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSArIDIpO1xuICAgIH0sXG4gICAgW0NVQklDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbQ1VCSUNfT1VUXTogKHZhbHVlKSA9PiAoLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAxKSxcbiAgICBbUVVBUlRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAtIDIpO1xuICAgIH0sXG4gICAgW1FVQVJUSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVQVJUSUNfT1VUXTogKHZhbHVlKSA9PiAoMSAtIC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUlOVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMik7XG4gICAgfSxcbiAgICBbUVVJTlRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUlOVElDX09VVF06ICh2YWx1ZSkgPT4gKC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDEpLFxuICAgIFtTSU5VU09JREFMXTogKHZhbHVlKSA9PiAoMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogdmFsdWUpKSksXG4gICAgW1NJTlVTT0lEQUxfSU5dOiAodmFsdWUpID0+ICgxIC0gTWF0aC5jb3MoKHZhbHVlICogTWF0aC5QSSkgLyAyKSksXG4gICAgW1NJTlVTT0lEQUxfT1VUXTogKHZhbHVlKSA9PiAoTWF0aC5zaW4oKHZhbHVlICogTWF0aC5QSSkgLyAyKSksXG4gICAgW0VYUE9ORU5USUFMXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDEwMjQsIHZhbHVlIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogKHZhbHVlIC0gMSkpICsgMik7XG4gICAgfSxcbiAgICBbRVhQT05FTlRJQUxfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gMCA/IDAgOiBNYXRoLnBvdygxMDI0LCB2YWx1ZSAtIDEpKSxcbiAgICBbRVhQT05FTlRJQUxfT1VUXTogKHZhbHVlKSA9PiAodmFsdWUgPT09IDEgPyAxIDogMSAtIE1hdGgucG93KDIsIC0xMCAqIHZhbHVlKSksXG4gICAgW0NJUkNVTEFSXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHZhbHVlICogdmFsdWUpIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh2YWx1ZSAtPSAyKSAqIHZhbHVlKSArIDEpO1xuICAgIH0sXG4gICAgW0NJUkNVTEFSX0lOXTogKHZhbHVlKSA9PiAoMSAtIE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkpLFxuICAgIFtDSVJDVUxBUl9PVVRdOiAodmFsdWUpID0+IE1hdGguc3FydCgxIC0gLS12YWx1ZSAqIHZhbHVlKSxcbiAgICBbRUxBU1RJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgKj0gMjtcbiAgICAgICAgaWYgKHZhbHVlIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiBNYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDIsIC0xMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuICAgIH0sXG4gICAgW0VMQVNUSUNfSU5dOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuICAgIH0sXG4gICAgW0VMQVNUSUNfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5wb3coMiwgLTEwICogdmFsdWUpICogTWF0aC5zaW4oKHZhbHVlIC0gMC4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG4gICAgfSxcbiAgICBbQkFDS106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1OCAqIDEuNTI1O1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqICh2YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSAtIHMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSArIHMpICsgMik7XG4gICAgfSxcbiAgICBbQkFDS19JTl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICAgICAgcmV0dXJuIHZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlIC0gcyk7XG4gICAgfSxcbiAgICBbQkFDS19PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTg7XG4gICAgICAgIHJldHVybiAtLXZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlICsgcykgKyAxO1xuICAgIH0sXG4gICAgW0JPVU5DRV06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPCAwLjUpIHtcbiAgICAgICAgICAgIHJldHVybiBlYXNpbmdbQk9VTkNFX0lOXSh2YWx1ZSAqIDIpICogMC41O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlYXNpbmdbQk9VTkNFX09VVF0odmFsdWUgKiAyIC0gMSkgKiAwLjUgKyAwLjU7XG4gICAgfSxcbiAgICBbQk9VTkNFX0lOXTogKHZhbHVlKSA9PiAoMSAtIGVhc2luZ1tCT1VOQ0VfT1VUXSgxIC0gdmFsdWUpKSxcbiAgICBbQk9VTkNFX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPCAxIC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgMiAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMS41IC8gMi43NSkgKiB2YWx1ZSArIDAuNzU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgMi41IC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAyLjI1IC8gMi43NSkgKiB2YWx1ZSArIDAuOTM3NTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDIuNjI1IC8gMi43NSkgKiB2YWx1ZSArIDAuOTg0Mzc1O1xuICAgIH0sXG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi90d2Vlbic7XG5leHBvcnQgKiBmcm9tICcuL2Vhc2luZyc7XG4iLCJpbXBvcnQgeyBlYXNpbmcsIExJTkVBUiB9IGZyb20gJy4vZWFzaW5nJztcbmV4cG9ydCBjb25zdCBUV0VFTiA9ICd0d2Vlbic7XG5leHBvcnQgdmFyIFR3ZWVuRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChUd2VlbkV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHVwZGF0ZShjb21wb25lbnQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHR3ZWVuIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IHsgcGhhc2VzIH0gPSB0d2VlbjtcbiAgICAgICAgaWYgKCFwaGFzZXM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ0FuaW1hdGlvbiBwYXJ0cyBub3QgZm91bmQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHdlZW4udGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0d2Vlbi50aW1lICs9IGVuZ2luZS51cGRhdGVyLnRpbWU7XG4gICAgICAgIGNvbnN0IHsgdGltZSB9ID0gdHdlZW47XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBwaGFzZXMuZm9yRWFjaCgocGhhc2UpID0+IHtcbiAgICAgICAgICAgIGlmICghcGhhc2UudGltZSkge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdBbmltYXRpb24gdGltZSBub3Qgc2V0Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBoYXNlLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gcGhhc2Uub2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZWFzaW5nTmFtZSA9IHBoYXNlPy5lYXNpbmc/LnRvTG93ZXJDYXNlKCkgPz8gTElORUFSO1xuICAgICAgICAgICAgY29uc3QgZWFzaW5nTWV0aG9kID0gZWFzaW5nW2Vhc2luZ05hbWVdO1xuICAgICAgICAgICAgaWYgKCFlYXNpbmdNZXRob2QpIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZyhgVW5rbm93biBlYXNpbmcgdHlwZTogJHtlYXNpbmd9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAodGltZSAtIG9mZnNldCkgLyBwaGFzZS50aW1lO1xuICAgICAgICAgICAgb2Zmc2V0ICs9IHBoYXNlLnRpbWU7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCAwIHx8IHZhbHVlID4gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVhc2luZ1ZhbHVlID0gZWFzaW5nTWV0aG9kKHZhbHVlKTtcbiAgICAgICAgICAgIGlmICghcGhhc2UudG8pIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnQW5pbWF0aW9uIFwidG9cIiBzdGF0ZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBoYXNlLmZyb20pIHtcbiAgICAgICAgICAgICAgICBwaGFzZS5mcm9tID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHRvLCBmcm9tIH0gPSBwaGFzZTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gY29tcG9uZW50O1xuICAgICAgICAgICAgT2JqZWN0LmtleXModG8pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmcm9tW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tW2tleV0gPSBzdGF0ZVtrZXldID8/IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGZyb21WYWx1ZSA9IGZyb21ba2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b1ZhbHVlID0gdG9ba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZyb21WYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHRvVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlVmFsdWUgPSBmcm9tVmFsdWUgKyBlYXNpbmdWYWx1ZSAqICh0b1ZhbHVlIC0gZnJvbVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IHN0YXRlVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodHdlZW4ubG9vcCAmJiB0d2Vlbi50aW1lID4gb2Zmc2V0KSB7XG4gICAgICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUd2VlbkV4dGVuc2lvbi51cGRhdGUgPSB1cGRhdGU7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucHJvcGVydGllcy5zZXQoVFdFRU4sIHVwZGF0ZSk7XG4gICAgfVxuICAgIFR3ZWVuRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoVHdlZW5FeHRlbnNpb24gfHwgKFR3ZWVuRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IEFCSUxJVFlfV09MRiB9IGZyb20gJy4vYXNzZXRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjdXJzaXZlKCkge1xuXHRjb25zdCBjb250YWluZXIgPSB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0eDogMzAsXG5cdFx0XHR5OiAzMCxcblx0XHRcdHNjYWxlWDogMC45LFxuXHRcdFx0c2NhbGVZOiAwLjksXG5cdFx0XHRyb3RhdGlvbjogMC4yLFxuXHRcdFx0YWxwaGE6IDAuOSxcblx0XHRcdGNoaWxkcmVuOiBbe1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEFCSUxJVFlfV09MRixcblx0XHRcdFx0c2NhbGU6IDAuMyxcblx0XHRcdH1dLFxuXHRcdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHRcdHRoaXMucm90YXRpb24gKz0gdGltZSAqIDAuMDU7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cblx0Y29udGFpbmVyLmNoaWxkcmVuLmNoaWxkcmVuLnB1c2goY29udGFpbmVyIGFzIG5ldmVyKTtcblxuXHRyZXR1cm4gY29udGFpbmVyO1xufVxuIiwiY29uc3QgSU1BR0VfQVNTRVRTID0gJ2Fzc2V0cy8nO1xuXG5leHBvcnQgY29uc3QgQU5JTUFMSVNUID0gJ2lkOmFuaW1hbGlzdCc7XG5leHBvcnQgY29uc3QgQVJDSEVSID0gJ2lkOmFyY2hlcic7XG5cbmV4cG9ydCBjb25zdCBBTklNQUxJU1RfSU1BR0UgPSBgJHtJTUFHRV9BU1NFVFN9QW5pbWFsaXN0Rm94MV9pbWFnZS5wbmdgO1xuZXhwb3J0IGNvbnN0IEFSQ0hFUl9JTUFHRSA9IGAke0lNQUdFX0FTU0VUU31BcmNoZXIyX2h1bnRlcl9pbWFnZS5wbmdgO1xuXG5leHBvcnQgY29uc3QgQUJJTElUWV9GT1ggPSBgJHtJTUFHRV9BU1NFVFN9QW5pbWFsaXN0QWJpbGl0eV9Gb3gucG5nYDtcbmV4cG9ydCBjb25zdCBBQklMSVRZX1dPTEYgPSBgJHtJTUFHRV9BU1NFVFN9QW5pbWFsaXN0QWJpbGl0eV9Xb2xmLnBuZ2A7XG5cbmV4cG9ydCBjb25zdCBCQUNLR1JPVU5EID0gYCR7SU1BR0VfQVNTRVRTfWp1bmdsZV9iYWNrZ3JvdW5kLmpwZ2A7XG5cbmV4cG9ydCBjb25zdCBURVNUX0NBTlZBUyA9ICd0ZXN0LmNhbnZhcyc7XG4iLCJpbXBvcnQgeyBDYW52YXNFbmdpbmUgfSBmcm9tICdAZTJkL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgRW5naW5lTW9kdWxlIH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IENhbnZhc1RleHRFeHRlbnNpb24gfSBmcm9tICdAZTJkL3RleHQnO1xuaW1wb3J0IHsgQ3VzdG9tSW1hZ2VFeHRlbnNpb24gfSBmcm9tICcuL2ltYWdlJztcbmltcG9ydCBDdXN0b21QbGF0Zm9ybSBmcm9tICcuL3BsYXRmb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tRW5naW5lIGV4dGVuZHMgQ2FudmFzRW5naW5lIHtcblx0Y29uc3RydWN0b3IobW9kdWxlOiBFbmdpbmVNb2R1bGUgPSB7fSkge1xuXHRcdG1vZHVsZS5QbGF0Zm9ybSA9IG1vZHVsZS5QbGF0Zm9ybSA/PyBDdXN0b21QbGF0Zm9ybTtcblxuXHRcdHN1cGVyKG1vZHVsZSk7XG5cblx0XHRDYW52YXNUZXh0RXh0ZW5zaW9uLmluaXQodGhpcyk7XG5cdFx0Q3VzdG9tSW1hZ2VFeHRlbnNpb24uaW5pdCh0aGlzKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzRW5naW5lLCBDYW52YXNQbGF0Zm9ybSB9IGZyb20gJ0BlMmQvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BlMmQvY29yZSc7XG5pbXBvcnQgeyBJbWFnZUV4dGVuc2lvbiwgSU1BR0UsIEltYWdlIH0gZnJvbSAnQGUyZC9pbWFnZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGUyZC9yZXNvdXJjZXMnO1xuXG5leHBvcnQgbmFtZXNwYWNlIEN1c3RvbUltYWdlRXh0ZW5zaW9uIHtcblx0ZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihpbWFnZTogSW1hZ2UsIGVuZ2luZTogQ2FudmFzRW5naW5lKTogdm9pZCB7XG5cdFx0aWYgKCFpbWFnZS5zcmMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB7IG1hdHJpeCwgY29sb3JUcmFuc2Zvcm0gfSA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG5cblx0XHRpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KGltYWdlLnNyYykgYXMgSW1hZ2VSZXNvdXJjZSB8IG51bGw7XG5cblx0XHRpZiAoIXJlc291cmNlPy5sb2FkZWQgfHwgIXJlc291cmNlPy5pbWFnZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbnRleHQyZCA9IChlbmdpbmUucGxhdGZvcm0gYXMgQ2FudmFzUGxhdGZvcm0pLmdldENvbnRleHQoKTtcblxuXHRcdGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oXG5cdFx0XHRtYXRyaXguYSxcblx0XHRcdG1hdHJpeC5iLFxuXHRcdFx0bWF0cml4LmMsXG5cdFx0XHRtYXRyaXguZCxcblx0XHRcdG1hdHJpeC50eCxcblx0XHRcdG1hdHJpeC50eSxcblx0XHQpO1xuXG5cdFx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcblx0XHRjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuXHRcdGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuXG5cdFx0Y29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcblx0XHRjb250ZXh0MmQuZmlsbFN0eWxlID0gJyc7XG5cdFx0Y29udGV4dDJkLnN0cm9rZVN0eWxlID0gJ2xpZ2h0Z3JheSc7XG5cdFx0Y29udGV4dDJkLnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG5cdH1cblxuXHRleHBvcnQgZnVuY3Rpb24gaW5pdChlbmdpbmU6IENhbnZhc0VuZ2luZSkge1xuXHRcdEltYWdlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcblx0XHRlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KElNQUdFLCByZW5kZXIpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDYW52YXNQbGF0Zm9ybSB9IGZyb20gJ0BlMmQvY2FudmFzLWVuZ2luZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVBsYXRmb3JtIGV4dGVuZHMgQ2FudmFzUGxhdGZvcm0ge1xuXHRjbGVhcigpIHtcblx0XHRjb25zdCBjb250ZXh0MmQgPSB0aGlzLmdldENvbnRleHQoKTtcblx0XHRjb250ZXh0MmQuZmlsbFN0eWxlID0gJ2JsYWNrJztcblx0XHRjb250ZXh0MmQuc2V0VHJhbnNmb3JtKCk7XG5cdFx0Y29udGV4dDJkLmZpbGxSZWN0KDAsIDAsIGNvbnRleHQyZC5jYW52YXMud2lkdGgsIGNvbnRleHQyZC5jYW52YXMuaGVpZ2h0KTtcblx0XHRjb250ZXh0MmQuZmlsbFN0eWxlID0gJyc7XG5cdH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZSB9IGZyb20gJ0BlMmQvY29yZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGUyZC9yZXNvdXJjZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21SZXNvdXJjZU1hbmFnZXIge1xuXHRyZWFkb25seSBhbGlhc2VzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblx0cmVhZG9ubHkgcmVzb3VyY2VzID0gbmV3IE1hcDxzdHJpbmcsIEltYWdlUmVzb3VyY2U+KCk7XG5cblx0cmVzb2x2ZSA9IChhc3NldDogc3RyaW5nLCBlbmdpbmU6IEVuZ2luZSk6IEltYWdlUmVzb3VyY2UgfCBudWxsID0+IHtcblx0XHRpZiAoYXNzZXQuaW5kZXhPZignaWQ6JykgPT09IDApIHtcblx0XHRcdGNvbnN0IGlkID0gYXNzZXQuc2xpY2UoMyk7XG5cdFx0XHRsZXQgcmVzb3VyY2UgPSB0aGlzLnJlc291cmNlcy5nZXQoaWQpIGFzIEltYWdlUmVzb3VyY2U7XG5cdFx0XHRpZiAoIXJlc291cmNlKSB7XG5cdFx0XHRcdGNvbnN0IHVybCA9IHRoaXMuYWxpYXNlcy5nZXQoaWQpO1xuXHRcdFx0XHRpZiAodXJsKSB7XG5cdFx0XHRcdFx0cmVzb3VyY2UgPSBJbWFnZVJlc291cmNlLnJlc29sdmUodXJsLCBlbmdpbmUpIGFzIEltYWdlUmVzb3VyY2U7XG5cdFx0XHRcdFx0dGhpcy5yZXNvdXJjZXMuc2V0KGlkLCByZXNvdXJjZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZW5naW5lLmRlYnVnLndhcm5pbmcoYFJlc291cmNlIHdpdGggaWQ6ICR7YXNzZXR9IG5vdCBmb3VuZGApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzb3VyY2U7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aW5pdChlbmdpbmU6IEVuZ2luZSkge1xuXHRcdGVuZ2luZS5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZCh0aGlzLnJlc29sdmUpO1xuXHR9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFN0YXRpc3RpY3Mge1xuXHRnZXRSZW5kZXJUaW1lKCk6IG51bWJlcjtcblx0Z2V0VXBkYXRlVGltZSgpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcHMoc3RhdGlzdGljczogU3RhdGlzdGljcykge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHR0ZXh0OiAnZnBzJyxcblx0XHRmcmFtZXM6IDAsXG5cdFx0ZnJhbWVUaW1lOiAwLFxuXHRcdHVwZGF0ZVRpbWU6IDAsXG5cdFx0cmVuZGVyVGltZTogMCxcblx0XHR0ZXh0Rm9ybWF0OiB7XG5cdFx0XHRzaXplOiAyMCxcblx0XHRcdGNvbG9yOiAweGZmZmZmZixcblx0XHR9LFxuXHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0dGhpcy5mcmFtZVRpbWUgKz0gdGltZTtcblx0XHRcdHRoaXMudXBkYXRlVGltZSArPSBzdGF0aXN0aWNzLmdldFVwZGF0ZVRpbWUoKTtcblx0XHRcdHRoaXMucmVuZGVyVGltZSArPSBzdGF0aXN0aWNzLmdldFJlbmRlclRpbWUoKTtcblx0XHRcdHRoaXMuZnJhbWVzKys7XG5cdFx0XHRpZiAodGhpcy5mcmFtZVRpbWUgPj0gMSkge1xuXHRcdFx0XHRjb25zdCBmcmFtZVRpbWUgPSBNYXRoLmNlaWwoMTAwMCAqIHRoaXMuZnJhbWVUaW1lIC8gdGhpcy5mcmFtZXMpO1xuXHRcdFx0XHRjb25zdCB1cGRhdGVUaW1lID0gKHRoaXMudXBkYXRlVGltZSAvIHRoaXMuZnJhbWVzKS50b0ZpeGVkKDIpO1xuXHRcdFx0XHRjb25zdCByZW5kZXJUaW1lID0gKHRoaXMucmVuZGVyVGltZSAvIHRoaXMuZnJhbWVzKS50b0ZpeGVkKDIpO1xuXHRcdFx0XHR0aGlzLnRleHQgPSBgZnBzOiAke3RoaXMuZnJhbWVzfSwgJHtmcmFtZVRpbWV9IG1zXFxudXBkYXRlOiAke3VwZGF0ZVRpbWV9IG1zXFxucmVuZGVyOiAke3JlbmRlclRpbWV9IG1zYDtcblx0XHRcdFx0dGhpcy5mcmFtZVRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZVRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLnJlbmRlclRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLmZyYW1lcyA9IDA7XG5cdFx0XHR9XG5cdFx0fSxcblx0fTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCB7XG5cdEFCSUxJVFlfRk9YLCBBQklMSVRZX1dPTEYsIEFOSU1BTElTVCwgQVJDSEVSLCBCQUNLR1JPVU5ELFxufSBmcm9tICcuL2Fzc2V0cyc7XG5pbXBvcnQgYXJ0aWZhY3QgZnJvbSAnLi9hcnRpZmFjdCc7XG5pbXBvcnQgeyBmcHMsIFN0YXRpc3RpY3MgfSBmcm9tICcuL2Zwcyc7XG5pbXBvcnQgeyB1bml0LCBVbml0UHJvcGVydGllcyB9IGZyb20gJy4vdW5pdCc7XG5cbmludGVyZmFjZSBNYWluIHtcblx0c3RhcnQoKTogdm9pZDtcblx0W2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKHN0YXRpc3RpY3M6IFN0YXRpc3RpY3MpOiBNYWluIHtcblx0ZnVuY3Rpb24gb25Vbml0Q2xpY2soZGF0YTogVW5pdFByb3BlcnRpZXMpIHtcblx0XHRkYXRhLmhlYWx0aCA9IE1hdGgucmFuZG9tKCk7XG5cdFx0Y29uc29sZS5sb2coJ29uVW5pdENsaWNrJywgZGF0YS5uYW1lKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdGJhY2tncm91bmQ6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBCQUNLR1JPVU5ELFxuXHRcdFx0XHRzY2FsZVg6IDEsXG5cdFx0XHRcdHNjYWxlWTogMSxcblx0XHRcdH0sXG5cdFx0XHRmaWd1cmU6IHtcblx0XHRcdFx0dHlwZTogJ3NoYXBlJyxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdHR5cGU6ICdyZWN0YW5nbGUnLFxuXHRcdFx0XHRcdHg6IDIwLFxuXHRcdFx0XHRcdHk6IDIwLFxuXHRcdFx0XHRcdHdpZHRoOiAxMDAsXG5cdFx0XHRcdFx0aGVpZ2h0OiA1MCxcblx0XHRcdFx0XHRmaWxsOiAweGZmMDBmZixcblx0XHRcdFx0XHRzdHJva2U6IDB4MDAwMGZmLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHNoYXBlczoge1xuXHRcdFx0XHR0eXBlOiAnc2hhcGUnLFxuXHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ2VsbGlwc2UnLFxuXHRcdFx0XHRcdFx0eDogMTAwLFxuXHRcdFx0XHRcdFx0eTogMTAwLFxuXHRcdFx0XHRcdFx0cmFkaXVzOiA1MCxcblx0XHRcdFx0XHRcdGZpbGw6IHsgdHlwZTogJ3NvbGlkJywgY29sb3I6IDB4ZmZmZjAwLCBhbHBoYTogMSB9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ3BhdGgnLFxuXHRcdFx0XHRcdFx0ZGF0YTogJ00gMTEwLCAxMTAgSCAxOTAgViAxOTAgSCAxMTAgWicsXG5cdFx0XHRcdFx0XHRmaWxsOiAweDk5MDAwMCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdwYXRoJyxcblx0XHRcdFx0XHRcdGRhdGE6IFtcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbW92ZVRvJywgeDogMCwgeTogMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAxMDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMTAwLCB5OiAxMDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMCwgeTogMTAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRmaWxsOiB7IHR5cGU6ICdzb2xpZCcsIGNvbG9yOiAweDk5OTk5OSwgYWxwaGE6IDAuNiB9LFxuXHRcdFx0XHRcdFx0c3Ryb2tlOiAweDAwMDAwMCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHVuaXRzOiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdHVuaXQoe1xuXHRcdFx0XHRcdFx0bmFtZTogJ0FyY2hlcicsIGhlYWx0aDogMSwgaW1hZ2U6IEFSQ0hFUiwgb25DbGljazogb25Vbml0Q2xpY2ssXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0dW5pdCh7XG5cdFx0XHRcdFx0XHRuYW1lOiAnQW5pbWFsaXN0JywgaGVhbHRoOiAxLCBpbWFnZTogQU5JTUFMSVNULCBvbkNsaWNrOiBvblVuaXRDbGljayxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHRhcnRpZmFjdDoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0eDogMzAwLFxuXHRcdFx0XHR5OiAzNTAsXG5cdFx0XHRcdGNoaWxkcmVuOiBbYXJ0aWZhY3QoKV0sXG5cdFx0XHR9LFxuXHRcdFx0bWFwOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHk6IDQ1MCxcblx0XHRcdFx0c2NhbGVYOiAwLjIsXG5cdFx0XHRcdHNjYWxlWTogMC4yLFxuXHRcdFx0XHRhbHBoYTogMC41LFxuXHRcdFx0XHRzcmM6ICd0ZXN0LmNhbnZhcycsXG5cdFx0XHRcdG9uUG9pbnRlck92ZXIoKSB7XG5cdFx0XHRcdFx0dGhpcy5hbHBoYSA9IDE7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uUG9pbnRlck91dCgpIHtcblx0XHRcdFx0XHR0aGlzLmFscGhhID0gMC41O1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGFiaWxpdHlGb3g6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBBQklMSVRZX0ZPWCxcblx0XHRcdFx0eDogNDUwLFxuXHRcdFx0XHR5OiA1MDAsXG5cdFx0XHRcdHNjYWxlOiAwLjUsXG5cdFx0XHRcdHRpbnQ6IHtcblx0XHRcdFx0XHRjb2xvcjogMHgwMGZmMDAsXG5cdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdH0gYXMgYW55LFxuXHRcdFx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdFx0XHRpZiAodGhpcy50aW50KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQudmFsdWUgKz0gdGltZTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLnRpbnQudmFsdWUgPj0gMSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRpbnQudmFsdWUgPSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0b25Qb2ludGVyRG93bihlOiBhbnkpIHtcblx0XHRcdFx0XHRpZiAodGhpcy50aW50KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQgPSBudWxsO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQgPSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAweDAwZmYwMCxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZygnZm94JywgZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YWJpbGl0eVdvbGY6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdHg6IDM1MCxcblx0XHRcdFx0eTogNDAwLFxuXHRcdFx0XHRjaGlsZHJlbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdFx0c3JjOiBBQklMSVRZX1dPTEYsXG5cdFx0XHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdFx0XHRhbHBoYTogMSxcblx0XHRcdFx0XHR0d2Vlbjoge1xuXHRcdFx0XHRcdFx0bG9vcDogdHJ1ZSxcblx0XHRcdFx0XHRcdHBoYXNlczogW1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB4OiAyMDAgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ2N1Ymljb3V0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHk6IDIwMCwgYWxwaGE6IDAuNSB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAncXVhZHJhdGljSW4nLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeDogMCwgYWxwaGE6IDEgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ3F1YWRyYXRpY091dCcsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0ZnBzOiBmcHMoc3RhdGlzdGljcyksXG5cdFx0fSxcblx0XHRzdGFydCgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdzdGFydCcpO1xuXHRcdH0sXG5cdH07XG59XG4iLCJjb25zdCBTUEVFRCA9IDEwMDtcblxuaW50ZXJmYWNlIFVuaXQge1xuXHRba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdFByb3BlcnRpZXMge1xuXHRuYW1lOiBzdHJpbmcsXG5cdGhlYWx0aDogbnVtYmVyLFxuXHRpbWFnZTogc3RyaW5nLFxuXHRvbkNsaWNrOiAoZGF0YTogVW5pdFByb3BlcnRpZXMpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bml0KHByb3BzOiBVbml0UHJvcGVydGllcyk6IFVuaXQge1xuXHRmdW5jdGlvbiBnZXRUaXRsZSgpIHtcblx0XHRyZXR1cm4gYCR7cHJvcHMubmFtZX1cXG4ke01hdGgucm91bmQocHJvcHMuaGVhbHRoICogMTAwKX0lYDtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0eDogNTAgKyBNYXRoLnJhbmRvbSgpICogNDAwLFxuXHRcdHk6IDIwMCxcblx0XHRyb3RhdGlvbjogMCxcblx0XHR1cGRhdGVNb3ZlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0dGhpcy54ICs9IHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYICogdGltZSAqIFNQRUVEO1xuXHRcdFx0aWYgKHRoaXMueCA8IDUwKSB7XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYID0gMTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy54ID4gNDAwKSB7XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYID0gLTE7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMudXBkYXRlTW92ZSh0aW1lKTtcblx0XHR9LFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHR0ZXh0OiB7XG5cdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0dGV4dDogZ2V0VGl0bGUoKSxcblx0XHRcdFx0dGV4dEZvcm1hdDoge1xuXHRcdFx0XHRcdHNpemU6IDE1LFxuXHRcdFx0XHRcdGNvbG9yOiAweGZmZGRkZCxcblx0XHRcdFx0XHRhbGlnbjogJ2NlbnRlcicsXG5cdFx0XHRcdFx0dmVydGljYWxBbGlnbjogJ21pZGRsZScsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJvcmRlcjogMHgwMGZmMDAsXG5cdFx0XHRcdHk6IC0zMCxcblx0XHRcdFx0aGVpZ2h0OiAzNSxcblx0XHRcdFx0cGl2b3RYOiAwLjUsXG5cdFx0XHRcdG9uUG9pbnRlckRvd246ICgpID0+IHtcblx0XHRcdFx0XHRwcm9wcy5vbkNsaWNrKHByb3BzKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b25VcGRhdGUoKSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gZ2V0VGl0bGUoKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRpbWFnZToge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IHByb3BzLmltYWdlLFxuXHRcdFx0XHRzY2FsZVg6IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEsXG5cdFx0XHRcdHBpdm90WDogMC41LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duOiAoKSA9PiB7XG5cdFx0XHRcdFx0cHJvcHMub25DbGljayhwcm9wcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgeyBDb21wb25lbnQsIE1vdXNlRXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IFR3ZWVuRXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC90d2Vlbic7XG5pbXBvcnQgeyBDYW52YXNUZXh0RXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC90ZXh0JztcbmltcG9ydCB7IENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gfSBmcm9tICdAZTJkL2ltYWdlJztcbmltcG9ydCB7IENhbnZhc1NoYXBlRXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC9zaGFwZSc7XG5pbXBvcnQgeyBDYW52YXNFbmdpbmUgfSBmcm9tICdAZTJkL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BlMmQvcmVzb3VyY2VzJztcbmltcG9ydCBDdXN0b21SZXNvdXJjZU1hbmFnZXIgZnJvbSAnLi9lbmdpbmUvcmVzb3VyY2VzJztcbmltcG9ydCBDdXN0b21FbmdpbmUgZnJvbSAnLi9lbmdpbmUvZW5naW5lJztcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbic7XG5pbXBvcnQge1xuXHRBTklNQUxJU1QsIEFOSU1BTElTVF9JTUFHRSwgQVJDSEVSLCBBUkNIRVJfSU1BR0UsIFRFU1RfQ0FOVkFTLFxufSBmcm9tICcuL2Fzc2V0cyc7XG5cbi8vIHBhZ2VcbmRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gJzAnO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nID0gJzAnO1xuXG4vLyBiYXNpYyBlbmdpbmVcbmNvbnN0IGVuZ2luZSA9IG5ldyBDYW52YXNFbmdpbmUoKTtcbkNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuQ2FudmFzVGV4dEV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5DYW52YXNTaGFwZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5Ud2VlbkV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5Nb3VzZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5lbmdpbmUuc2NyZWVuLmZ1bGxzY3JlZW4gPSB0cnVlO1xuZW5naW5lLnRpY2tlci5wbGF5KCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVuZ2luZS5wbGF0Zm9ybS52aWV3KTtcblxuY29uc3Qgc3RhdGlzdGljcyA9IHtcblx0Z2V0VXBkYXRlVGltZSgpIHtcblx0XHRyZXR1cm4gZW5naW5lLnVwZGF0ZXIuZWxhcHNlZFRpbWU7XG5cdH0sXG5cdGdldFJlbmRlclRpbWUoKSB7XG5cdFx0cmV0dXJuIGVuZ2luZS5yZW5kZXJlci5lbGFwc2VkVGltZTtcblx0fSxcbn07XG5cbi8vIGFwcGxpY2F0aW9uXG5jb25zdCBhcHAgPSBtYWluKHN0YXRpc3RpY3MpO1xuYXBwLnN0YXJ0KCk7XG5lbmdpbmUucm9vdCA9IGFwcCBhcyBhbnkgYXMgQ29tcG9uZW50O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbmNvbnNvbGUubG9nKGFwcCk7XG5cbi8vIHRlc3QgcGF1c2VcbnNldFRpbWVvdXQoKCkgPT4gZW5naW5lLnRpY2tlci5wYXVzZSgpLCA1MDAwKTtcbnNldFRpbWVvdXQoKCkgPT4gZW5naW5lLnRpY2tlci5wbGF5KCksIDEwMDAwKTtcblxuLy8gY3VzdG9tIGVuZ2luZVxuY29uc3QgY3VzdG9tRW5naW5lID0gbmV3IEN1c3RvbUVuZ2luZSgpO1xuY3VzdG9tRW5naW5lLnNjcmVlbi5mdWxsc2NyZWVuID0gZmFsc2U7XG5jdXN0b21FbmdpbmUuc2NyZWVuLmhlaWdodCA9IDYwMDtcbmN1c3RvbUVuZ2luZS51cGRhdGVyLmVuYWJsZWQgPSBmYWxzZTtcbmN1c3RvbUVuZ2luZS5yb290ID0gZW5naW5lLnJvb3Q7XG5jdXN0b21FbmdpbmUudGlja2VyLnBsYXkoKTtcbmN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbmN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3LnN0eWxlLnRvcCA9ICcwcHgnO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUubGVmdCA9ICc2MDBweCc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3KTtcblxuLy8gLy8gc2V0IGN1c3RvbSByZXNvdXJjZVxuZW5naW5lLnJlc291cmNlcy5yZXNvdXJjZXMuc2V0KFxuXHRURVNUX0NBTlZBUyxcblx0e1xuXHRcdGFzc2V0OiBURVNUX0NBTlZBUyxcblx0XHRpbWFnZTogY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcsXG5cdFx0bG9hZGVkOiB0cnVlLFxuXHR9IGFzIEltYWdlUmVzb3VyY2UsXG4pO1xuY3VzdG9tRW5naW5lLnJlc291cmNlcy5yZXNvdXJjZXMuc2V0KFxuXHRURVNUX0NBTlZBUyxcblx0e1xuXHRcdGFzc2V0OiBURVNUX0NBTlZBUyxcblx0XHRpbWFnZTogZW5naW5lLnBsYXRmb3JtLnZpZXcsXG5cdFx0bG9hZGVkOiB0cnVlLFxuXHR9IGFzIEltYWdlUmVzb3VyY2UsXG4pO1xuXG4vLyBjdXN0b20gcmVzb3VyY2UgcmVzb2x2ZXJcbmNvbnN0IHJlc291cmNlTWFuYWdlciA9IG5ldyBDdXN0b21SZXNvdXJjZU1hbmFnZXIoKTtcbnJlc291cmNlTWFuYWdlci5hbGlhc2VzLnNldChBUkNIRVIucmVwbGFjZSgnaWQ6JywgJycpLCBBUkNIRVJfSU1BR0UpO1xucmVzb3VyY2VNYW5hZ2VyLmFsaWFzZXMuc2V0KEFOSU1BTElTVC5yZXBsYWNlKCdpZDonLCAnJyksIEFOSU1BTElTVF9JTUFHRSk7XG5yZXNvdXJjZU1hbmFnZXIuaW5pdChlbmdpbmUpO1xucmVzb3VyY2VNYW5hZ2VyLmluaXQoY3VzdG9tRW5naW5lKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=