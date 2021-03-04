/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../canvas-engine/dist/engine.js":
/*!***************************************!*\
  !*** ../canvas-engine/dist/engine.js ***!
  \***************************************/
/*! namespace exports */
/*! export CanvasEngine [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasEngine": () => /* binding */ CanvasEngine
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CanvasEngine = /*#__PURE__*/function (_Engine) {
  _inherits(CanvasEngine, _Engine);

  var _super = _createSuper(CanvasEngine);

  function CanvasEngine(module) {
    var _module$Platform;

    _classCallCheck(this, CanvasEngine);

    if (!module) {
      module = {};
    }

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
/*! namespace exports */
/*! export CanvasEngine [provided] [used in main] [could be renamed] -> ../canvas-engine/dist/engine.js .CanvasEngine */
/*! export CanvasPatterns [provided] [used in main] [could be renamed] -> ../canvas-engine/dist/patterns.js .CanvasPatterns */
/*! export CanvasPlatform [provided] [used in main] [could be renamed] -> ../canvas-engine/dist/platform.js .CanvasPlatform */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasPatterns": () => /* reexport safe */ _patterns__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns,
/* harmony export */   "CanvasPlatform": () => /* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_1__.CanvasPlatform,
/* harmony export */   "CanvasEngine": () => /* reexport safe */ _engine__WEBPACK_IMPORTED_MODULE_2__.CanvasEngine
/* harmony export */ });
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patterns */ "../canvas-engine/dist/patterns.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platform */ "../canvas-engine/dist/platform.js");
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine */ "../canvas-engine/dist/engine.js");




/***/ }),

/***/ "../canvas-engine/dist/patterns.js":
/*!*****************************************!*\
  !*** ../canvas-engine/dist/patterns.js ***!
  \*****************************************/
/*! namespace exports */
/*! export CanvasPatterns [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasPatterns": () => /* binding */ CanvasPatterns
/* harmony export */ });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");

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
})(CanvasPatterns || (CanvasPatterns = {}));

/***/ }),

/***/ "../canvas-engine/dist/platform.js":
/*!*****************************************!*\
  !*** ../canvas-engine/dist/platform.js ***!
  \*****************************************/
/*! namespace exports */
/*! export CanvasPlatform [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasPlatform": () => /* binding */ CanvasPlatform
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),

/***/ "../core/dist/components/container.js":
/*!********************************************!*\
  !*** ../core/dist/components/container.js ***!
  \********************************************/
/*! namespace exports */
/*! export CONTAINER [provided] [unused] [could be renamed] */
/*! export Container [provided] [unused] [could be renamed] */
/*! export ContainerExtension [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContainerExtension": () => /* binding */ ContainerExtension
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
/*! namespace exports */
/*! export Engine [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Engine": () => /* binding */ Engine
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











var Engine = function Engine(module) {
  var _module$Components, _module$Screen, _module$Platform, _module$Updater, _module$Renderer, _module$PointerEvents, _module$Ticker, _module$Debug, _module$Resources;

  _classCallCheck(this, Engine);

  this.depth = 32;

  if (!module) {
    module = {};
  }

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
/*! namespace exports */
/*! export EngineFeature [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngineFeature": () => /* binding */ EngineFeature
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
/*! namespace exports */
/*! export Components [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Components": () => /* binding */ Components
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
/*! namespace exports */
/*! export Debug [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Debug": () => /* binding */ Debug
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
/*! namespace exports */
/*! export Platform [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Platform": () => /* binding */ Platform
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
/*! namespace exports */
/*! export PointerEvents [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointerEvents": () => /* binding */ PointerEvents
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
/*! namespace exports */
/*! export Renderer [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Renderer": () => /* binding */ Renderer
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
/*! namespace exports */
/*! export Resources [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Resources": () => /* binding */ Resources
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
/*! namespace exports */
/*! export Screen [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen": () => /* binding */ Screen
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
/*! namespace exports */
/*! export Ticker [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ticker": () => /* binding */ Ticker
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
  }, {
    key: "isPaused",
    get: function get() {
      return this.paused;
    }
  }]);

  return Ticker;
}();

/***/ }),

/***/ "../core/dist/features/updater.js":
/*!****************************************!*\
  !*** ../core/dist/features/updater.js ***!
  \****************************************/
/*! namespace exports */
/*! export Updater [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Updater": () => /* binding */ Updater
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
/*! namespace exports */
/*! export CONTAINER [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Components [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Container [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export ContainerExtension [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Debug [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Display [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Engine [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] */
/*! export EngineFeature [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export MouseExtension [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] */
/*! export Pivot [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] */
/*! export Platform [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] */
/*! export PointerEvents [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Renderer [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Resources [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Screen [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Source [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] */
/*! export Ticker [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Transform [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Update [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Updater [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export default [not provided] [unused] [could be renamed] */
/*! other exports [maybe provided (runtime-defined)] [unused] -> ../core/dist/components/component.js */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.o, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Engine": () => /* reexport safe */ _core_engine__WEBPACK_IMPORTED_MODULE_2__.Engine,
/* harmony export */   "Platform": () => /* reexport safe */ _features_platform__WEBPACK_IMPORTED_MODULE_6__.Platform,
/* harmony export */   "MouseExtension": () => /* reexport safe */ _input_mouse__WEBPACK_IMPORTED_MODULE_13__.MouseExtension,
/* harmony export */   "Pivot": () => /* reexport safe */ _interfaces_pivot__WEBPACK_IMPORTED_MODULE_15__.Pivot,
/* harmony export */   "Source": () => /* reexport safe */ _interfaces_source__WEBPACK_IMPORTED_MODULE_16__.Source
/* harmony export */ });
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/component */ "../core/dist/components/component.js");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_components_component__WEBPACK_IMPORTED_MODULE_0__, "Engine")) __webpack_require__.d(__webpack_exports__, { "Engine": function() { return _components_component__WEBPACK_IMPORTED_MODULE_0__.Engine; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_components_component__WEBPACK_IMPORTED_MODULE_0__, "MouseExtension")) __webpack_require__.d(__webpack_exports__, { "MouseExtension": function() { return _components_component__WEBPACK_IMPORTED_MODULE_0__.MouseExtension; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_components_component__WEBPACK_IMPORTED_MODULE_0__, "Pivot")) __webpack_require__.d(__webpack_exports__, { "Pivot": function() { return _components_component__WEBPACK_IMPORTED_MODULE_0__.Pivot; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_components_component__WEBPACK_IMPORTED_MODULE_0__, "Platform")) __webpack_require__.d(__webpack_exports__, { "Platform": function() { return _components_component__WEBPACK_IMPORTED_MODULE_0__.Platform; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_components_component__WEBPACK_IMPORTED_MODULE_0__, "Source")) __webpack_require__.d(__webpack_exports__, { "Source": function() { return _components_component__WEBPACK_IMPORTED_MODULE_0__.Source; } });
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
/*! namespace exports */
/*! export MouseExtension [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouseExtension": () => /* binding */ MouseExtension
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
/*! namespace exports */
/*! export Display [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Display": () => /* binding */ Display
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
/*! namespace exports */
/*! export Pivot [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pivot": () => /* binding */ Pivot
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
})(Pivot || (Pivot = {}));

/***/ }),

/***/ "../core/dist/interfaces/pointer.js":
/*!******************************************!*\
  !*** ../core/dist/interfaces/pointer.js ***!
  \******************************************/
/*! namespace exports */
/*! export Pointer [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pointer": () => /* binding */ Pointer
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
/*! namespace exports */
/*! export Source [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Source": () => /* binding */ Source
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
    return !!(resource === null || resource === void 0 ? void 0 : resource.loaded);
  }

  Source.isLoaded = isLoaded;
})(Source || (Source = {}));

/***/ }),

/***/ "../core/dist/interfaces/transform.js":
/*!********************************************!*\
  !*** ../core/dist/interfaces/transform.js ***!
  \********************************************/
/*! namespace exports */
/*! export Transform [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transform": () => /* binding */ Transform
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
/*! namespace exports */
/*! export Update [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Update": () => /* binding */ Update
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
/*! namespace exports */
/*! export Bounds [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bounds": () => /* binding */ Bounds
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
/*! namespace exports */
/*! export ColorTransform [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorTransform": () => /* binding */ ColorTransform
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
/*! namespace exports */
/*! export Bounds [provided] [used in main] [could be renamed] -> ../geom/dist/bounds.js .Bounds */
/*! export ColorTransform [provided] [used in main] [could be renamed] -> ../geom/dist/color-transform.js .ColorTransform */
/*! export Matrix [provided] [used in main] [could be renamed] -> ../geom/dist/matrix.js .Matrix */
/*! export Point [provided] [used in main] [could be renamed] -> ../geom/dist/point.js .Point */
/*! export Rectangle [provided] [used in main] [could be renamed] -> ../geom/dist/rectangle.js .Rectangle */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorTransform": () => /* reexport safe */ _color_transform__WEBPACK_IMPORTED_MODULE_0__.ColorTransform,
/* harmony export */   "Bounds": () => /* reexport safe */ _bounds__WEBPACK_IMPORTED_MODULE_1__.Bounds,
/* harmony export */   "Matrix": () => /* reexport safe */ _matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix,
/* harmony export */   "Point": () => /* reexport safe */ _point__WEBPACK_IMPORTED_MODULE_3__.Point,
/* harmony export */   "Rectangle": () => /* reexport safe */ _rectangle__WEBPACK_IMPORTED_MODULE_4__.Rectangle
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
/*! namespace exports */
/*! export Matrix [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Matrix": () => /* binding */ Matrix
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
/*! namespace exports */
/*! export Point [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Point": () => /* binding */ Point
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
})(Point || (Point = {}));

/***/ }),

/***/ "../geom/dist/rectangle.js":
/*!*********************************!*\
  !*** ../geom/dist/rectangle.js ***!
  \*********************************/
/*! namespace exports */
/*! export Rectangle [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rectangle": () => /* binding */ Rectangle
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
/*! namespace exports */
/*! export CanvasImageColorExtension [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasImageColorExtension": () => /* binding */ CanvasImageColorExtension
/* harmony export */ });
/* harmony import */ var _e2d_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/core */ "../core/dist/index.js");
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "../image/dist/image.js");



var bounds = _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.empty();
var CanvasImageColorExtension;

(function (CanvasImageColorExtension) {
  function render(image, engine) {
    var resource = _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Source.getResource(image, engine);

    if (!(resource === null || resource === void 0 ? void 0 : resource.loaded) || !(resource === null || resource === void 0 ? void 0 : resource.image)) {
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
/*! namespace exports */
/*! export CanvasImageExtension [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export CanvasImageExtension */
/* harmony import */ var _e2d_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/core */ "../core/dist/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "../image/dist/image.js");


var CanvasImageExtension;

(function (CanvasImageExtension) {
  function render(image, engine) {
    var resource = _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Source.getResource(image, engine);

    if (!(resource === null || resource === void 0 ? void 0 : resource.loaded) || !(resource === null || resource === void 0 ? void 0 : resource.image)) {
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
/*! namespace exports */
/*! export IMAGE [provided] [used in main] [could be renamed] */
/*! export Image [provided] [unused] [could be renamed] */
/*! export ImageExtension [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMAGE": () => /* binding */ IMAGE,
/* harmony export */   "ImageExtension": () => /* binding */ ImageExtension
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

    if (!(resource === null || resource === void 0 ? void 0 : resource.loaded) || !(resource === null || resource === void 0 ? void 0 : resource.image)) {
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
/*! namespace exports */
/*! export CanvasImageColorExtension [provided] [used in main] [could be renamed] -> ../image/dist/canvas-image-color.js .CanvasImageColorExtension */
/*! export CanvasImageExtension [provided] [unused] [could be renamed] -> ../image/dist/canvas-image.js .CanvasImageExtension */
/*! export IMAGE [provided] [used in main] [could be renamed] -> ../image/dist/image.js .IMAGE */
/*! export Image [provided] [unused] [could be renamed] -> ../image/dist/image.js .Image */
/*! export ImageExtension [provided] [used in main] [could be renamed] -> ../image/dist/image.js .ImageExtension */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMAGE": () => /* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_0__.IMAGE,
/* harmony export */   "ImageExtension": () => /* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_0__.ImageExtension,
/* harmony export */   "CanvasImageColorExtension": () => /* reexport safe */ _canvas_image_color__WEBPACK_IMPORTED_MODULE_2__.CanvasImageColorExtension
/* harmony export */ });
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image */ "../image/dist/image.js");
/* harmony import */ var _canvas_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas-image */ "../image/dist/canvas-image.js");
/* harmony import */ var _canvas_image_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas-image-color */ "../image/dist/canvas-image-color.js");




/***/ }),

/***/ "../resources/dist/image.js":
/*!**********************************!*\
  !*** ../resources/dist/image.js ***!
  \**********************************/
/*! namespace exports */
/*! export ImageResource [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageResource": () => /* binding */ ImageResource
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
/*! namespace exports */
/*! export ImageResource [provided] [used in main] [could be renamed] -> ../resources/dist/image.js .ImageResource */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageResource": () => /* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_0__.ImageResource
/* harmony export */ });
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image */ "../resources/dist/image.js");


/***/ }),

/***/ "../shape/dist/canvas-shape.js":
/*!*************************************!*\
  !*** ../shape/dist/canvas-shape.js ***!
  \*************************************/
/*! namespace exports */
/*! export CanvasShapeExtension [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasShapeExtension": () => /* binding */ CanvasShapeExtension
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "../shape/dist/shape.js");

var CanvasShapeExtension;

(function (CanvasShapeExtension) {
  function render(shape, engine) {}

  CanvasShapeExtension.render = render;

  function init(engine) {
    _shape__WEBPACK_IMPORTED_MODULE_0__.ShapeExtension.init(engine);
    engine.components.render.set(_shape__WEBPACK_IMPORTED_MODULE_0__.SHAPE, render);
  }

  CanvasShapeExtension.init = init;
})(CanvasShapeExtension || (CanvasShapeExtension = {}));

/***/ }),

/***/ "../shape/dist/data/data.js":
/*!**********************************!*\
  !*** ../shape/dist/data/data.js ***!
  \**********************************/
/*! namespace exports */
/*! export EllipseData [provided] [unused] [could be renamed] */
/*! export GraphicsData [provided] [used in main] [could be renamed] */
/*! export PathData [provided] [unused] [could be renamed] */
/*! export RectangleData [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphicsData": () => /* binding */ GraphicsData
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
        radius = data.radius,
        _data$radiusX = data.radiusX,
        radiusX = _data$radiusX === void 0 ? 0 : _data$radiusX,
        _data$radiusY = data.radiusY,
        radiusY = _data$radiusY === void 0 ? 0 : _data$radiusY;
    var rx = radius !== null && radius !== void 0 ? radius : radiusX;
    var ry = radius !== null && radius !== void 0 ? radius : radiusY;
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
/*! namespace exports */
/*! export PathCommand [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PathCommand": () => /* binding */ PathCommand
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
/*! namespace exports */
/*! export GraphicsString [provided] [used in main] [could be renamed] */
/*! export GraphicsStringReader [provided] [unused] [could be renamed] */
/*! export GraphicsStringStream [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphicsString": () => /* binding */ GraphicsString
/* harmony export */ });
/* unused harmony exports GraphicsStringStream, GraphicsStringReader */
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


var TEST_COMMAND = /[MmLlHhVvCcSsQqTtAaZz]/;
var TEST_SPACE = /[\s,]/;
var TEST_NUMBER = /[-+.\d]/;
var GraphicsStringStream = /*#__PURE__*/function () {
  function GraphicsStringStream() {
    _classCallCheck(this, GraphicsStringStream);

    this.path = '';
    this.position = 0;
    this.command = null;
    this.buffer = [];
    this.size = 0;
  }

  _createClass(GraphicsStringStream, [{
    key: "setPath",
    value: function setPath(path) {
      this.path = path;
      this.position = 0;
    }
  }, {
    key: "hasData",
    value: function hasData() {
      return this.position < this.path.length;
    }
  }, {
    key: "getCommand",
    value: function getCommand() {
      return this.command;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.size;
    }
  }, {
    key: "getBuffer",
    value: function getBuffer() {
      return this.buffer;
    }
  }, {
    key: "readNext",
    value: function readNext() {
      this.readCommand();
      this.readNumbers();
    }
  }, {
    key: "readCommand",
    value: function readCommand() {
      this.command = null;

      while (this.position < this.path.length) {
        var command = this.path[this.position];

        if (TEST_COMMAND.test(command)) {
          this.command = command;
        }

        this.position++;
      }
    }
  }, {
    key: "readNumbers",
    value: function readNumbers() {
      this.size = 0;
      var number = '';

      while (this.position < this.path.length) {
        var _char = this.path[this.position];

        if (TEST_NUMBER.test(_char)) {
          number += _char;
        } else if (TEST_SPACE.test(_char)) {
          this.buffer[this.size++] = parseFloat(number);
          number = '';
        } else if (TEST_COMMAND.test(_char)) {
          break;
        }

        this.position++;
      }

      if (number) {
        this.buffer[this.size++] = parseFloat(number);
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
    key: "hasData",
    value: function hasData() {
      return this.stream.hasData();
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
          x0 = _buffer[0],
          y0 = _buffer[1],
          x1 = _buffer[2],
          y1 = _buffer[3],
          x2 = _buffer[4],
          y2 = _buffer[5];

      var cx = 0;
      var cy = 0;

      switch (command) {
        case 'M':
          {
            this.command.type = 'moveTo';
            var moveTo = this.command;
            moveTo.x = x0;
            moveTo.y = y0;
            this.lastX = moveTo.x;
            this.lastY = moveTo.y;
          }
          break;

        case 'm':
          {
            this.command.type = 'moveTo';
            var _moveTo = this.command;
            _moveTo.x = x0 + this.lastX;
            _moveTo.y = y0 + this.lastY;
            this.lastX = _moveTo.x;
            this.lastY = _moveTo.y;
          }
          break;

        case 'L':
          {
            this.command.type = 'lineTo';
            var lineTo = this.command;
            lineTo.x = x0;
            lineTo.y = y0;
            this.lastX = lineTo.x;
            this.lastY = lineTo.y;
          }
          break;

        case 'l':
          {
            this.command.type = 'lineTo';
            var _lineTo = this.command;
            _lineTo.x = x0 + this.lastX;
            _lineTo.y = y0 + this.lastY;
            this.lastX = _lineTo.x;
            this.lastY = _lineTo.y;
          }
          break;

        case 'H':
          {
            this.command.type = 'lineTo';
            var _lineTo2 = this.command;
            _lineTo2.x = x0;
            _lineTo2.y = this.lastY;
            this.lastX = _lineTo2.x;
          }
          break;

        case 'h':
          {
            this.command.type = 'lineTo';
            var _lineTo3 = this.command;
            _lineTo3.x = x0 + this.lastX;
            _lineTo3.y = this.lastY;
            this.lastX = _lineTo3.x;
          }
          break;

        case 'V':
          {
            this.command.type = 'lineTo';
            var _lineTo4 = this.command;
            _lineTo4.x = this.lastX;
            _lineTo4.y = x0;
            this.lastY = _lineTo4.y;
          }
          break;

        case 'v':
          {
            this.command.type = 'lineTo';
            var _lineTo5 = this.command;
            _lineTo5.x = this.lastX;
            _lineTo5.y = x0 + this.lastY;
            this.lastY = _lineTo5.y;
          }
          break;

        case 'C':
          {
            this.command.type = 'cubicCurveTo';
            var cubicCurveTo = this.command;
            cubicCurveTo.cx = x0;
            cubicCurveTo.cy = y0;
            cubicCurveTo.sx = x1;
            cubicCurveTo.sy = y1;
            cubicCurveTo.x = x2;
            cubicCurveTo.y = y2;
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
            _cubicCurveTo.cx = x0 + this.lastX;
            _cubicCurveTo.cy = y0 + this.lastY;
            _cubicCurveTo.sx = x1 + this.lastX;
            _cubicCurveTo.sy = y1 + this.lastY;
            _cubicCurveTo.x = x2 + this.lastX;
            _cubicCurveTo.y = y2 + this.lastY;
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
            _cubicCurveTo2.sx = x0;
            _cubicCurveTo2.sy = y0;
            _cubicCurveTo2.x = x1;
            _cubicCurveTo2.y = y1;
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
            _cubicCurveTo3.sx = x0 + this.lastX;
            _cubicCurveTo3.sy = y0 + this.lastY;
            _cubicCurveTo3.x = x1 + this.lastX;
            _cubicCurveTo3.y = y1 + this.lastY;
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
            curveTo.cx = x0;
            curveTo.cy = y0;
            curveTo.x = x1;
            curveTo.y = y1;
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
            _curveTo.cx = x0 + this.lastX;
            _curveTo.cy = y0 + this.lastY;
            _curveTo.x = x1 + this.lastX;
            _curveTo.y = y1 + this.lastY;
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
            _curveTo2.x = x0;
            _curveTo2.y = y0;
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
            _curveTo3.x = x0 + this.lastX;
            _curveTo3.y = y0 + this.lastY;
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

    while (reader.hasData()) {
      reader.readNext();
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
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),

/***/ "../shape/dist/graphics.js":
/*!*********************************!*\
  !*** ../shape/dist/graphics.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Graphics
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
/*! namespace exports */
/*! export CanvasShapeExtension [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] */
/*! export EllipseData [provided] [unused] [could be renamed] -> ../shape/dist/data/data.js .EllipseData */
/*! export GraphicsData [provided] [unused] [could be renamed] -> ../shape/dist/data/data.js .GraphicsData */
/*! export GraphicsString [provided] [unused] [could be renamed] -> ../shape/dist/data/string.js .GraphicsString */
/*! export GraphicsStringReader [provided] [unused] [could be renamed] -> ../shape/dist/data/string.js .GraphicsStringReader */
/*! export GraphicsStringStream [provided] [unused] [could be renamed] -> ../shape/dist/data/string.js .GraphicsStringStream */
/*! export PathCommand [provided] [unused] [could be renamed] -> ../shape/dist/data/path.js .PathCommand */
/*! export PathData [provided] [unused] [could be renamed] -> ../shape/dist/data/data.js .PathData */
/*! export RectangleData [provided] [unused] [could be renamed] -> ../shape/dist/data/data.js .RectangleData */
/*! export SHAPE [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Shape [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export ShapeExtension [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export default [not provided] [unused] [could be renamed] */
/*! other exports [maybe provided (runtime-defined)] [unused] -> ../shape/dist/data/style.js */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.o, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasShapeExtension": () => /* reexport safe */ _canvas_shape__WEBPACK_IMPORTED_MODULE_6__.CanvasShapeExtension
/* harmony export */ });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/data */ "../shape/dist/data/data.js");
/* harmony import */ var _data_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/path */ "../shape/dist/data/path.js");
/* harmony import */ var _data_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/string */ "../shape/dist/data/string.js");
/* harmony import */ var _data_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/style */ "../shape/dist/data/style.js");
/* harmony import */ var _data_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_data_style__WEBPACK_IMPORTED_MODULE_3__, "CanvasShapeExtension")) __webpack_require__.d(__webpack_exports__, { "CanvasShapeExtension": function() { return _data_style__WEBPACK_IMPORTED_MODULE_3__.CanvasShapeExtension; } });
/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphics */ "../shape/dist/graphics.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shape */ "../shape/dist/shape.js");
/* harmony import */ var _canvas_shape__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./canvas-shape */ "../shape/dist/canvas-shape.js");








/***/ }),

/***/ "../shape/dist/shape.js":
/*!******************************!*\
  !*** ../shape/dist/shape.js ***!
  \******************************/
/*! namespace exports */
/*! export SHAPE [provided] [used in main] [could be renamed] */
/*! export Shape [provided] [unused] [could be renamed] */
/*! export ShapeExtension [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SHAPE": () => /* binding */ SHAPE,
/* harmony export */   "ShapeExtension": () => /* binding */ ShapeExtension
/* harmony export */ });
/* unused harmony export Shape */
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
/*! namespace exports */
/*! export CanvasTextExtension [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasTextExtension": () => /* binding */ CanvasTextExtension
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
      context2d.fill();
    }

    if (border !== undefined) {
      context2d.strokeStyle = _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_1__.CanvasPatterns.colorPattern(border, 1, colorTransform);
      context2d.fillStyle = '';
      context2d.beginPath();
      context2d.rect(offsetX, offsetY, realWidth, realHeight);
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
/*! namespace exports */
/*! export EM [provided] [unused] [could be renamed] */
/*! export Font [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Font": () => /* binding */ Font
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
/*! namespace exports */
/*! export TextFormat [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextFormat": () => /* binding */ TextFormat
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
/*! namespace exports */
/*! export CanvasTextExtension [provided] [used in main] [could be renamed] -> ../text/dist/canvas-text.js .CanvasTextExtension */
/*! export EM [provided] [unused] [could be renamed] -> ../text/dist/font.js .EM */
/*! export Font [provided] [unused] [could be renamed] -> ../text/dist/font.js .Font */
/*! export TEXT [provided] [unused] [could be renamed] -> ../text/dist/text.js .TEXT */
/*! export Text [provided] [unused] [could be renamed] -> ../text/dist/text.js .Text */
/*! export TextExtension [provided] [unused] [could be renamed] -> ../text/dist/text.js .TextExtension */
/*! export TextFormat [provided] [unused] [could be renamed] -> ../text/dist/format.js .TextFormat */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasTextExtension": () => /* reexport safe */ _canvas_text__WEBPACK_IMPORTED_MODULE_3__.CanvasTextExtension
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
/*! namespace exports */
/*! export TEXT [provided] [used in main] [could be renamed] */
/*! export Text [provided] [unused] [could be renamed] */
/*! export TextExtension [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TEXT": () => /* binding */ TEXT,
/* harmony export */   "TextExtension": () => /* binding */ TextExtension
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
/*! namespace exports */
/*! export BACK [provided] [unused] [could be renamed] */
/*! export BACK_IN [provided] [unused] [could be renamed] */
/*! export BACK_OUT [provided] [unused] [could be renamed] */
/*! export BOUNCE [provided] [unused] [could be renamed] */
/*! export BOUNCE_IN [provided] [unused] [could be renamed] */
/*! export BOUNCE_OUT [provided] [unused] [could be renamed] */
/*! export CIRCULAR [provided] [unused] [could be renamed] */
/*! export CIRCULAR_IN [provided] [unused] [could be renamed] */
/*! export CIRCULAR_OUT [provided] [unused] [could be renamed] */
/*! export CUBIC [provided] [unused] [could be renamed] */
/*! export CUBIC_IN [provided] [unused] [could be renamed] */
/*! export CUBIC_OUT [provided] [unused] [could be renamed] */
/*! export ELASTIC [provided] [unused] [could be renamed] */
/*! export ELASTIC_IN [provided] [unused] [could be renamed] */
/*! export ELASTIC_OUT [provided] [unused] [could be renamed] */
/*! export EXPONENTIAL [provided] [unused] [could be renamed] */
/*! export EXPONENTIAL_IN [provided] [unused] [could be renamed] */
/*! export EXPONENTIAL_OUT [provided] [unused] [could be renamed] */
/*! export LINEAR [provided] [used in main] [could be renamed] */
/*! export QUADRATIC [provided] [unused] [could be renamed] */
/*! export QUADRATIC_IN [provided] [unused] [could be renamed] */
/*! export QUADRATIC_OUT [provided] [unused] [could be renamed] */
/*! export QUARTIC [provided] [unused] [could be renamed] */
/*! export QUARTIC_IN [provided] [unused] [could be renamed] */
/*! export QUARTIC_OUT [provided] [unused] [could be renamed] */
/*! export QUINTIC [provided] [unused] [could be renamed] */
/*! export QUINTIC_IN [provided] [unused] [could be renamed] */
/*! export QUINTIC_OUT [provided] [unused] [could be renamed] */
/*! export SINUSOIDAL [provided] [unused] [could be renamed] */
/*! export SINUSOIDAL_IN [provided] [unused] [could be renamed] */
/*! export SINUSOIDAL_OUT [provided] [unused] [could be renamed] */
/*! export easing [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LINEAR": () => /* binding */ LINEAR,
/* harmony export */   "easing": () => /* binding */ easing
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
/*! namespace exports */
/*! export BACK [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .BACK */
/*! export BACK_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .BACK_IN */
/*! export BACK_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .BACK_OUT */
/*! export BOUNCE [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .BOUNCE */
/*! export BOUNCE_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .BOUNCE_IN */
/*! export BOUNCE_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .BOUNCE_OUT */
/*! export CIRCULAR [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .CIRCULAR */
/*! export CIRCULAR_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .CIRCULAR_IN */
/*! export CIRCULAR_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .CIRCULAR_OUT */
/*! export CUBIC [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .CUBIC */
/*! export CUBIC_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .CUBIC_IN */
/*! export CUBIC_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .CUBIC_OUT */
/*! export ELASTIC [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .ELASTIC */
/*! export ELASTIC_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .ELASTIC_IN */
/*! export ELASTIC_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .ELASTIC_OUT */
/*! export EXPONENTIAL [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .EXPONENTIAL */
/*! export EXPONENTIAL_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .EXPONENTIAL_IN */
/*! export EXPONENTIAL_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .EXPONENTIAL_OUT */
/*! export LINEAR [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .LINEAR */
/*! export QUADRATIC [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUADRATIC */
/*! export QUADRATIC_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUADRATIC_IN */
/*! export QUADRATIC_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUADRATIC_OUT */
/*! export QUARTIC [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUARTIC */
/*! export QUARTIC_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUARTIC_IN */
/*! export QUARTIC_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUARTIC_OUT */
/*! export QUINTIC [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUINTIC */
/*! export QUINTIC_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUINTIC_IN */
/*! export QUINTIC_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUINTIC_OUT */
/*! export SINUSOIDAL [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .SINUSOIDAL */
/*! export SINUSOIDAL_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .SINUSOIDAL_IN */
/*! export SINUSOIDAL_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .SINUSOIDAL_OUT */
/*! export TWEEN [provided] [unused] [could be renamed] -> ../tween/dist/tween.js .TWEEN */
/*! export TweenExtension [provided] [used in main] [could be renamed] -> ../tween/dist/tween.js .TweenExtension */
/*! export easing [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .easing */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TweenExtension": () => /* reexport safe */ _tween__WEBPACK_IMPORTED_MODULE_0__.TweenExtension
/* harmony export */ });
/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tween */ "../tween/dist/tween.js");
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./easing */ "../tween/dist/easing.js");



/***/ }),

/***/ "../tween/dist/tween.js":
/*!******************************!*\
  !*** ../tween/dist/tween.js ***!
  \******************************/
/*! namespace exports */
/*! export TWEEN [provided] [unused] [could be renamed] */
/*! export TweenExtension [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TweenExtension": () => /* binding */ TweenExtension
/* harmony export */ });
/* unused harmony export TWEEN */
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easing */ "../tween/dist/easing.js");

var TWEEN = 'tween';
var TweenExtension;

(function (TweenExtension) {
  function update(component, engine) {
    var tween = component.tween;
    var phases = tween.phases;

    if (!(phases === null || phases === void 0 ? void 0 : phases.length)) {
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
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ recursive
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
/*! namespace exports */
/*! export ABILITY_FOX [provided] [used in main] [could be renamed] */
/*! export ABILITY_WOLF [provided] [used in main] [could be renamed] */
/*! export ANIMALIST [provided] [used in main] [could be renamed] */
/*! export ANIMALIST_IMAGE [provided] [used in main] [could be renamed] */
/*! export ARCHER [provided] [used in main] [could be renamed] */
/*! export ARCHER_IMAGE [provided] [used in main] [could be renamed] */
/*! export BACKGROUND [provided] [used in main] [could be renamed] */
/*! export TEST_CANVAS [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANIMALIST": () => /* binding */ ANIMALIST,
/* harmony export */   "ARCHER": () => /* binding */ ARCHER,
/* harmony export */   "ANIMALIST_IMAGE": () => /* binding */ ANIMALIST_IMAGE,
/* harmony export */   "ARCHER_IMAGE": () => /* binding */ ARCHER_IMAGE,
/* harmony export */   "ABILITY_FOX": () => /* binding */ ABILITY_FOX,
/* harmony export */   "ABILITY_WOLF": () => /* binding */ ABILITY_WOLF,
/* harmony export */   "BACKGROUND": () => /* binding */ BACKGROUND,
/* harmony export */   "TEST_CANVAS": () => /* binding */ TEST_CANVAS
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
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ CustomEngine
/* harmony export */ });
/* harmony import */ var _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/canvas-engine */ "../canvas-engine/dist/index.js");
/* harmony import */ var _e2d_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/text */ "../text/dist/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ "./src/engine/image.ts");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform */ "./src/engine/platform.ts");




class CustomEngine extends _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasEngine {
    constructor(module) {
        if (!module) {
            module = {};
        }
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
/*! namespace exports */
/*! export CustomImageExtension [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomImageExtension": () => /* binding */ CustomImageExtension
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
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ CustomPlatform
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
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ CustomResourceManager
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
/*! namespace exports */
/*! export fps [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fps": () => /* binding */ fps
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
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ main
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
                    type: 'rect',
                    x: 0,
                    y: 0,
                    width: 100,
                    height: 100,
                    fill: 0xff00ff,
                    stroke: {
                        thickness: 2,
                        fill: 0x00ff00,
                    },
                },
            },
            shapes: {
                type: 'shape',
                data: [
                    {
                        type: 'circle',
                        x: 100,
                        y: 100,
                        radius: 50,
                        fill: { type: 'solid', color: 0xffff00, alpha: 0.5 },
                    },
                    {
                        type: 'path',
                        data: 'M 10 10 H 90 V 90 H 10 Z',
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
                        fill: 0xff00ff,
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
/*! namespace exports */
/*! export unit [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unit": () => /* binding */ unit
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jYW52YXMtZW5naW5lL2Rpc3QvZW5naW5lLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NhbnZhcy1lbmdpbmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jYW52YXMtZW5naW5lL2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY2FudmFzLWVuZ2luZS9kaXN0L3BsYXRmb3JtLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvY29yZS9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2NvcmUvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvZmVhdHVyZXMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvZmVhdHVyZXMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ZlYXR1cmVzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9mZWF0dXJlcy9wb2ludGVyLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvZmVhdHVyZXMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ZlYXR1cmVzL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvZmVhdHVyZXMvc2NyZWVuLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9mZWF0dXJlcy90aWNrZXIuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ZlYXR1cmVzL3VwZGF0ZXIuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9pbnB1dC9tb3VzZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvaW50ZXJmYWNlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9pbnRlcmZhY2VzL3Bpdm90LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9pbnRlcmZhY2VzL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ludGVyZmFjZXMvc291cmNlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9pbnRlcmZhY2VzL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvaW50ZXJmYWNlcy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZ2VvbS9kaXN0L2JvdW5kcy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9nZW9tL2Rpc3QvY29sb3ItdHJhbnNmb3JtLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9nZW9tL2Rpc3QvbWF0cml4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9wb2ludC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9nZW9tL2Rpc3QvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2ltYWdlL2Rpc3QvY2FudmFzLWltYWdlLWNvbG9yLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2ltYWdlL2Rpc3QvY2FudmFzLWltYWdlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2ltYWdlL2Rpc3QvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vaW1hZ2UvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9yZXNvdXJjZXMvZGlzdC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2NhbnZhcy1zaGFwZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2RhdGEvZGF0YS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2RhdGEvcGF0aC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2RhdGEvc3RyaW5nLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvZ3JhcGhpY3MuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vc2hhcGUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L3NoYXBlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3RleHQvZGlzdC9jYW52YXMtdGV4dC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90ZXh0L2Rpc3QvZm9udC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90ZXh0L2Rpc3QvZm9ybWF0LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3RleHQvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90ZXh0L2Rpc3QvdGV4dC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90d2Vlbi9kaXN0L2Vhc2luZy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90d2Vlbi9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3R3ZWVuL2Rpc3QvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvYXJ0aWZhY3QudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvYXNzZXRzLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2VuZ2luZS9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvZW5naW5lL2ltYWdlLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2VuZ2luZS9wbGF0Zm9ybS50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9lbmdpbmUvcmVzb3VyY2VzLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2Zwcy50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9tYWluLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL3VuaXQudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BlMmQvc2FtcGxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiQ2FudmFzRW5naW5lIiwibW9kdWxlIiwiUGxhdGZvcm0iLCJDYW52YXNQbGF0Zm9ybSIsIkVuZ2luZSIsIkNhbnZhc1BhdHRlcm5zIiwiY29sb3JQYXR0ZXJuIiwiY29sb3IiLCJhbHBoYSIsImN0IiwiciIsImciLCJiIiwiYSIsIkNvbG9yVHJhbnNmb3JtIiwicmVkTXVsdGlwbGllciIsInJlZE9mZnNldCIsImdyZWVuTXVsdGlwbGllciIsImdyZWVuT2Zmc2V0IiwiYmx1ZU11bHRpcGxpZXIiLCJibHVlT2Zmc2V0IiwiYWxwaGFNdWx0aXBsaWVyIiwiYWxwaGFPZmZzZXQiLCJhcmd1bWVudHMiLCJ2aWV3IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dHMiLCJnZXRDb250ZXh0IiwiY3VzdG9tQ29udGV4dHMiLCJsZW5ndGgiLCJjb250ZXh0IiwicHVzaCIsInBvcCIsImVuZ2luZSIsImRlYnVnIiwid2FybmluZyIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwiY2xlYXIiLCJ1cGRhdGVTaXplIiwic2V0VHJhbnNmb3JtIiwiY2xlYXJSZWN0Iiwic2NyZWVuIiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJwaXhlbFJhdGlvIiwiZ2V0UGl4ZWxSYXRpbyIsInZpZXdXaWR0aCIsIk1hdGgiLCJmbG9vciIsInZpZXdIZWlnaHQiLCJzdHlsZSIsIkNPTlRBSU5FUiIsIkNvbnRhaW5lciIsIm51bUNoaWxkcmVuIiwiY29udGFpbmVyIiwiY2hpbGRyZW4iLCJBcnJheSIsImlzQXJyYXkiLCJ0eXBlIiwia2V5cyIsIk9iamVjdCIsIkNvbnRhaW5lckV4dGVuc2lvbiIsInJlbmRlciIsInJlbmRlcmVyIiwiZGVwdGgiLCJpIiwiY29tcG9uZW50IiwicmVuZGVyQ29tcG9uZW50IiwiY29tcG9uZW50c01hcCIsInVwZGF0ZSIsInVwZGF0ZXIiLCJ1cGRhdGVDb21wb25lbnQiLCJoaXRUZXN0IiwicG9pbnRlckV2ZW50cyIsInJlc3VsdCIsImRpc3BhdGNoQ29tcG9uZW50IiwiaW5pdCIsImNvbXBvbmVudHMiLCJzZXQiLCJDb21wb25lbnRzIiwiU2NyZWVuIiwiVXBkYXRlciIsIlJlbmRlcmVyIiwiUG9pbnRlckV2ZW50cyIsIlRpY2tlciIsIkRlYnVnIiwiUmVzb3VyY2VzIiwicGxhdGZvcm0iLCJ0aWNrZXIiLCJyZXNvdXJjZXMiLCJFbmdpbmVGZWF0dXJlIiwicHJvcGVydGllcyIsIk1hcCIsImxvYWRlZCIsImVycm9ycyIsIndhcm5pbmdzIiwiZW5hYmxlZCIsImNvbnNvbGUiLCJsb2ciLCJhcmdzIiwiaWQiLCJTdHJpbmciLCJjb3VudCIsImdldCIsImVycm9yIiwid2FybiIsImdsb2JhbCIsIlBvaW50IiwibG9jYWwiLCJwb2ludGVySWQiLCJwb2ludGVyVHlwZSIsIm1hdHJpeCIsIk1hdHJpeCIsIngiLCJ5Iiwicm9vdCIsImJhc2UiLCJwYXJlbnQiLCJEaXNwbGF5IiwiUG9pbnRlciIsImhhbmRsZXIiLCJUcmFuc2Zvcm0iLCJwb2ludGVyT3ZlciIsImVsYXBzZWRUaW1lIiwiY29sb3JUcmFuc2Zvcm0iLCJzdGFydFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImJlZ2luIiwiZ2V0TWF0cml4IiwiZW5kIiwicmVzb2x2ZXJzIiwiU2V0IiwiYXNzZXQiLCJyZXNvdXJjZSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1bGxzY3JlZW4iLCJkIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZGV2aWNlUGl4ZWxSYXRpbyIsImZyYW1lUmF0ZSIsInBhdXNlZCIsInRpbWUiLCJ1cGRhdGVGcmFtZSIsImN1cnJlbnRUaW1lIiwiZGVsdGFUaW1lIiwidXBkYXRlTmV4dEZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiVXBkYXRlIiwidXBkYXRlUHJvcGVydGllcyIsImZvckVhY2giLCJwcm9wZXJ0eSIsImRpc3BhdGNoRXZlbnQiLCJldmVudCIsImNsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudExlZnQiLCJjbGllbnRZIiwidG9wIiwiY2xpZW50VG9wIiwiZGlzcGF0Y2giLCJwcmV2ZW50RGVmYXVsdCIsIk1vdXNlRXh0ZW5zaW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlzVmlzaWJsZSIsInZpc2libGUiLCJQaXZvdCIsImdldFgiLCJwaXZvdCIsInBpdm90WCIsImdldFkiLCJwaXZvdFkiLCJpc1BvaW50ZXJPdmVyIiwicG9pbnRlciIsImlzUG9pbnRlckVuYWJsZWQiLCJwb2ludGVyRW5hYmxlZCIsImhhbmRsZXJOYW1lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIlNvdXJjZSIsImdldFJlc291cmNlIiwic291cmNlIiwic3JjIiwiaXNMb2FkZWQiLCJ0cmFuc2Zvcm0iLCJjIiwidHgiLCJ0eSIsInJvdGF0aW9uIiwic2NhbGVYIiwic2NhbGUiLCJzY2FsZVkiLCJjb3MiLCJzaW4iLCJnZXRDb2xvclRyYW5zZm9ybSIsInRpbnQiLCJ2YWx1ZSIsInZhbHVlSW52ZXJ0ZWQiLCJpc0VuYWJsZWQiLCJvblVwZGF0ZSIsIkJvdW5kcyIsImVtcHR5IiwibWluWCIsIk51bWJlciIsIk1BWF9WQUxVRSIsIm1pblkiLCJtYXhYIiwiTUlOX1ZBTFVFIiwibWF4WSIsInNldEVtcHR5IiwiYm91bmRzIiwiaXNFbXB0eSIsInRvUmVjdGFuZ2xlIiwicmVjdGFuZ2xlIiwidGVzdFgiLCJ0ZXN0WSIsInRlc3QiLCJ0ZXN0UG9pbnQiLCJwb2ludCIsImlzRW1wdHlXaXRoQWxwaGEiLCJjb3B5IiwiZnJvbSIsInRvIiwiY29uY2F0IiwiY3QxIiwiY3QwIiwibWF0cml4MCIsIm1hdHJpeDEiLCJnZXREZXRlcm1pbmFudCIsImludmVydCIsImRldGVybWluYW50IiwidHJhbnNmb3JtUG9pbnQiLCJ0cmFuc2Zvcm1JbnZlcnNlUG9pbnQiLCJ0cmFuc2Zvcm1Cb3VuZHMiLCJyeCIsInJ5IiwicnIiLCJyYiIsIm54MSIsIm55MSIsIm54MiIsIm55MiIsIm54MyIsIm55MyIsIm54NCIsIm55NCIsInJpZ2h0IiwiYm90dG9tIiwiUmVjdGFuZ2xlIiwiY29udGFpbnMiLCJDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uIiwiaW1hZ2UiLCJjb250ZXh0MmQiLCJnbG9iYWxBbHBoYSIsImRyYXdJbWFnZSIsImN1c3RvbUNvbnRleHQiLCJjcmVhdGVDdXN0b21Db250ZXh0IiwiaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwicm0iLCJnbSIsImJtIiwiYW0iLCJybyIsImdvIiwiYm8iLCJhbyIsImRhdGEiLCJwdXRJbWFnZURhdGEiLCJkZXN0cm95Q3VzdG9tQ29udGV4dCIsIkltYWdlRXh0ZW5zaW9uIiwiSU1BR0UiLCJDYW52YXNJbWFnZUV4dGVuc2lvbiIsIkltYWdlIiwiY2FsY3VsYXRlQm91bmRzIiwiSW1hZ2VSZXNvdXJjZSIsImV4dGVuc2lvbiIsInNwbGl0Iiwib25sb2FkIiwib25lcnJvciIsImUiLCJhZGQiLCJDYW52YXNTaGFwZUV4dGVuc2lvbiIsInNoYXBlIiwiU2hhcGVFeHRlbnNpb24iLCJTSEFQRSIsIlJlY3RhbmdsZURhdGEiLCJFbGxpcHNlRGF0YSIsInJhZGl1cyIsInJhZGl1c1giLCJyYWRpdXNZIiwiUGF0aERhdGEiLCJwYXRoRGF0YSIsIkdyYXBoaWNzU3RyaW5nIiwiY29tbWFuZCIsIlBhdGhDb21tYW5kIiwiR3JhcGhpY3NEYXRhIiwicGF0aCIsIm1vdmVUbyIsImN1cnZlVG8iLCJjeCIsImN5IiwiY3ViaWNDdXJ2ZVRvIiwic3giLCJzeSIsIlRFU1RfQ09NTUFORCIsIlRFU1RfU1BBQ0UiLCJURVNUX05VTUJFUiIsIkdyYXBoaWNzU3RyaW5nU3RyZWFtIiwicG9zaXRpb24iLCJidWZmZXIiLCJzaXplIiwicmVhZENvbW1hbmQiLCJyZWFkTnVtYmVycyIsIm51bWJlciIsImNoYXIiLCJwYXJzZUZsb2F0IiwiR3JhcGhpY3NTdHJpbmdSZWFkZXIiLCJzdHJlYW0iLCJjb21tYW5kRXhpc3RzIiwibGFzdFgiLCJsYXN0WSIsInNldFBhdGgiLCJoYXNEYXRhIiwicmVhZE5leHQiLCJwYXJzZSIsImdldENvbW1hbmQiLCJnZXRCdWZmZXIiLCJ4MCIsInkwIiwieDEiLCJ5MSIsIngyIiwieTIiLCJsaW5lVG8iLCJyZWFkZXIiLCJHcmFwaGljcyIsImZpbGwiLCJyZXBlYXQiLCJzbW9vdGgiLCJyYXRpbyIsInNwcmVhZCIsImludGVycG9sYXRpb24iLCJmb2NhbFBvaW50UmF0aW8iLCJ0aGlja25lc3MiLCJwaXhlbEhpbnRpbmciLCJzY2FsZU1vZGUiLCJjYXBzIiwiam9pbnRzIiwibWl0ZXJMaW1pdCIsInN0cm9rZSIsImJlZ2luUGF0aCIsImdldFBhdGgiLCJlbGxpcHNlV2lkdGgiLCJlbGxpcHNlSGVpZ2h0IiwidyIsImgiLCJrIiwib3giLCJveSIsInhlIiwieWUiLCJ4bSIsInltIiwiZHgiLCJkeSIsImNyZWF0ZURhdGEiLCJncmFwaGljc0RhdGEiLCJ1bmRlZmluZWQiLCJTaGFwZSIsImdldEdyYXBoaWNzIiwidmFsaWRUZXh0Rm9ybWF0IiwiQ2FudmFzVGV4dEV4dGVuc2lvbiIsInRleHQiLCJsaW5lcyIsInRleHRGb3JtYXQiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiVGV4dEZvcm1hdCIsImZvcm1hdFNpemUiLCJmb3JtYXRMZXR0ZXJTcGFjaW5nIiwibGV0dGVyU3BhY2luZyIsImZvcm1hdExlYWRpbmciLCJsZWFkaW5nIiwiZm9udCIsIkZvbnQiLCJ0ZXh0V2lkdGgiLCJ0ZXh0SGVpZ2h0IiwicmVhbFdpZHRoIiwicmVhbEhlaWdodCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiYWxpZ25WZXJ0aWNhbFZhbHVlIiwidmVydGljYWxBbGlnbiIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwicmVjdCIsInRleHRCYXNlbGluZSIsImxpbmUiLCJsaW5lV2lkdGgiLCJhbGlnblZhbHVlIiwiYWxpZ24iLCJqIiwiZmlyc3QiLCJzZWNvbmQiLCJhZHZhbmNlIiwiZmlsbFRleHQiLCJUZXh0RXh0ZW5zaW9uIiwiVEVYVCIsIkVNIiwiZm9udHMiLCJnZXRTdHlsZUZvbnQiLCJtZWFzdXJlVGV4dCIsImdldENoYXJXaWR0aCIsIndpZHRocyIsIm5hbWUiLCJnZXRLZXJuaW5nIiwicGFpciIsImtlcm5pbmciLCJrZXJuaW5ncyIsIndpZHRoU2Vjb25kIiwid2lkdGhUb3RhbCIsImdldEFkdmFuY2UiLCJnZXRGb250IiwiZ2V0TGluZVdpZHRoIiwiZm9ybWF0IiwiZ2V0VGV4dFdpZHRoIiwiZ2V0VGV4dEhlaWdodCIsImRlZmF1bHRUZXh0Rm9ybWF0IiwiYm9sZCIsIml0YWxpYyIsInVuZGVybGluZSIsImdldFZhbGlkVGV4dEZvcm1hdCIsImdldEFsaWduVmFsdWUiLCJnZXRWZXJ0aWNhbEFsaWduVmFsdWUiLCJUZXh0IiwiTElORUFSIiwiUVVBRFJBVElDIiwiUVVBRFJBVElDX0lOIiwiUVVBRFJBVElDX09VVCIsIkNVQklDIiwiQ1VCSUNfSU4iLCJDVUJJQ19PVVQiLCJRVUFSVElDIiwiUVVBUlRJQ19JTiIsIlFVQVJUSUNfT1VUIiwiUVVJTlRJQyIsIlFVSU5USUNfSU4iLCJRVUlOVElDX09VVCIsIlNJTlVTT0lEQUwiLCJTSU5VU09JREFMX0lOIiwiU0lOVVNPSURBTF9PVVQiLCJFWFBPTkVOVElBTCIsIkVYUE9ORU5USUFMX0lOIiwiRVhQT05FTlRJQUxfT1VUIiwiQ0lSQ1VMQVIiLCJDSVJDVUxBUl9JTiIsIkNJUkNVTEFSX09VVCIsIkVMQVNUSUMiLCJFTEFTVElDX0lOIiwiRUxBU1RJQ19PVVQiLCJCQUNLIiwiQkFDS19JTiIsIkJBQ0tfT1VUIiwiQk9VTkNFIiwiQk9VTkNFX0lOIiwiQk9VTkNFX09VVCIsImVhc2luZyIsIlBJIiwicG93Iiwic3FydCIsInMiLCJUV0VFTiIsIlR3ZWVuRXh0ZW5zaW9uIiwidHdlZW4iLCJwaGFzZXMiLCJvZmZzZXQiLCJwaGFzZSIsImVhc2luZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImVhc2luZ01ldGhvZCIsImVhc2luZ1ZhbHVlIiwic3RhdGUiLCJrZXkiLCJmcm9tVmFsdWUiLCJ0b1ZhbHVlIiwic3RhdGVWYWx1ZSIsImxvb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTyxJQUFNQSxZQUFiO0FBQUE7O0FBQUE7O0FBQ0ksd0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFBQTs7QUFDaEIsUUFBSSxDQUFDQSxNQUFMLEVBQWE7QUFDVEEsWUFBTSxHQUFHLEVBQVQ7QUFDSDs7QUFDREEsVUFBTSxDQUFDQyxRQUFQLHVCQUFrQkQsTUFBTSxDQUFDQyxRQUF6QiwrREFBcUNDLHFEQUFyQztBQUpnQiw2QkFLVkYsTUFMVTtBQU1uQjs7QUFQTDtB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Q0FBQyxHQUFHLENBQzdCLGdEQUFXLEVBQ1g7SUFDQyxLQUFLLEVBQUUsZ0RBQVc7SUFDbEIsS0FBSyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSTtJQUNqQyxNQUFNLEVBQUUsSUFBSTtDQUNLLENBQ2xCLENBQUM7QUFDRixZQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQ25DLGdEQUFXLEVBQ1g7SUFDQyxLQUFLLEVBQUUsZ0RBQVc7SUFDbEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSTtJQUMzQixNQUFNLEVBQUUsSUFBSTtDQUNLLENBQ2xCLENBQUM7QUFHRixNQUFNLGVBQWUsR0FBRyxJQUFJLHNEQUFxQixFQUFFLENBQUM7QUFDcEQsZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbURBQWMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsaURBQVksQ0FBQyxDQUFDO0FBQ3JFLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNEQUFpQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxvREFBZSxDQUFDLENBQUM7QUFDM0UsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVuZ2luZSB9IGZyb20gJ0BlMmQvY29yZSc7XG5pbXBvcnQgeyBDYW52YXNQbGF0Zm9ybSB9IGZyb20gJy4vcGxhdGZvcm0nO1xuZXhwb3J0IGNsYXNzIENhbnZhc0VuZ2luZSBleHRlbmRzIEVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IobW9kdWxlKSB7XG4gICAgICAgIGlmICghbW9kdWxlKSB7XG4gICAgICAgICAgICBtb2R1bGUgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuUGxhdGZvcm0gPSBtb2R1bGUuUGxhdGZvcm0gPz8gQ2FudmFzUGxhdGZvcm07XG4gICAgICAgIHN1cGVyKG1vZHVsZSk7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9wYXR0ZXJucyc7XG5leHBvcnQgKiBmcm9tICcuL3BsYXRmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZW5naW5lJztcbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtIH0gZnJvbSAnQGUyZC9nZW9tJztcbmV4cG9ydCB2YXIgQ2FudmFzUGF0dGVybnM7XG4oZnVuY3Rpb24gKENhbnZhc1BhdHRlcm5zKSB7XG4gICAgZnVuY3Rpb24gY29sb3JQYXR0ZXJuKGNvbG9yLCBhbHBoYSwgY3QpIHtcbiAgICAgICAgbGV0IHIgPSBjb2xvciA+PiAxNiAmIDB4ZmY7XG4gICAgICAgIGxldCBnID0gY29sb3IgPj4gOCAmIDB4ZmY7XG4gICAgICAgIGxldCBiID0gY29sb3IgJiAweGZmO1xuICAgICAgICBsZXQgYSA9IGFscGhhICogMHhmZjtcbiAgICAgICAgaWYgKCFDb2xvclRyYW5zZm9ybS5pc0VtcHR5KGN0KSkge1xuICAgICAgICAgICAgciA9IChyICogY3QucmVkTXVsdGlwbGllciArIGN0LnJlZE9mZnNldCkgJiAweGZmO1xuICAgICAgICAgICAgZyA9IChnICogY3QuZ3JlZW5NdWx0aXBsaWVyICsgY3QuZ3JlZW5PZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIGIgPSAoYiAqIGN0LmJsdWVNdWx0aXBsaWVyICsgY3QuYmx1ZU9mZnNldCkgJiAweGZmO1xuICAgICAgICAgICAgYSA9IChhICogY3QuYWxwaGFNdWx0aXBsaWVyICsgY3QuYWxwaGFPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYSA8IDB4ZmYpIHtcbiAgICAgICAgICAgIHJldHVybiBgcmdiYSgke3J9LCAke2d9LCAke2J9LCAke2EgLyAweGZmfSlgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYDtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuID0gY29sb3JQYXR0ZXJuO1xufSkoQ2FudmFzUGF0dGVybnMgfHwgKENhbnZhc1BhdHRlcm5zID0ge30pKTtcbiIsImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGUyZC9jb3JlJztcbmV4cG9ydCBjbGFzcyBDYW52YXNQbGF0Zm9ybSBleHRlbmRzIFBsYXRmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbdGhpcy52aWV3LmdldENvbnRleHQoJzJkJyldO1xuICAgICAgICB0aGlzLmN1c3RvbUNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRzW3RoaXMuY29udGV4dHMubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIHNhdmVDb250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICByZXN0b3JlQ29udGV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0cy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmRlYnVnLndhcm5pbmcoJ1RyeWluZyB0byByZXN0b3JlIG1haW4gY29udGV4dCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUN1c3RvbUNvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0O1xuICAgICAgICBpZiAodGhpcy5jdXN0b21Db250ZXh0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmN1c3RvbUNvbnRleHRzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnZpZXc7XG4gICAgICAgIGlmIChjb250ZXh0LmNhbnZhcy53aWR0aCAhPT0gd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRleHQuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgICBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIGRlc3Ryb3lDdXN0b21Db250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jdXN0b21Db250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICBiZWdpbigpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgpO1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB2aWV3LndpZHRoLCB2aWV3LmhlaWdodCk7XG4gICAgfVxuICAgIHVwZGF0ZVNpemUoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbmdpbmUuc2NyZWVuLmdldFdpZHRoKCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRIZWlnaHQoKTtcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIGNvbnN0IHZpZXdXaWR0aCA9IE1hdGguZmxvb3Iod2lkdGggKiBwaXhlbFJhdGlvKTtcbiAgICAgICAgY29uc3Qgdmlld0hlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgaWYgKHZpZXcud2lkdGggIT09IHZpZXdXaWR0aCB8fCB2aWV3LmhlaWdodCAhPT0gdmlld0hlaWdodCkge1xuICAgICAgICAgICAgdmlldy53aWR0aCA9IHZpZXdXaWR0aDtcbiAgICAgICAgICAgIHZpZXcuaGVpZ2h0ID0gdmlld0hlaWdodDtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ09OVEFJTkVSID0gJ2NvbnRhaW5lcic7XG5leHBvcnQgdmFyIENvbnRhaW5lcjtcbihmdW5jdGlvbiAoQ29udGFpbmVyKSB7XG4gICAgZnVuY3Rpb24gbnVtQ2hpbGRyZW4oY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbik7XG4gICAgICAgICAgICByZXR1cm4ga2V5cy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIENvbnRhaW5lci5udW1DaGlsZHJlbiA9IG51bUNoaWxkcmVuO1xufSkoQ29udGFpbmVyIHx8IChDb250YWluZXIgPSB7fSkpO1xuZXhwb3J0IHZhciBDb250YWluZXJFeHRlbnNpb247XG4oZnVuY3Rpb24gKENvbnRhaW5lckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgcmVuZGVyZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgcmVuZGVyZXIuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlcmVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHVwZGF0ZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBwb2ludGVyRXZlbnRzIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHBvaW50ZXJFdmVudHMuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgcG9pbnRlckV2ZW50cy5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwb2ludGVyRXZlbnRzLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50ZXJFdmVudHMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGtleXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcG9pbnRlckV2ZW50cy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHMuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy51cGRhdGUuc2V0KENPTlRBSU5FUiwgdXBkYXRlKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChDT05UQUlORVIsIHJlbmRlcik7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KENPTlRBSU5FUiwgaGl0VGVzdCk7XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENvbnRhaW5lckV4dGVuc2lvbiB8fCAoQ29udGFpbmVyRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vZmVhdHVyZXMvcmVuZGVyZXInO1xuaW1wb3J0IHsgVXBkYXRlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3VwZGF0ZXInO1xuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi4vZmVhdHVyZXMvc2NyZWVuJztcbmltcG9ydCB7IFBvaW50ZXJFdmVudHMgfSBmcm9tICcuLi9mZWF0dXJlcy9wb2ludGVyLWV2ZW50cyc7XG5pbXBvcnQgeyBUaWNrZXIgfSBmcm9tICcuLi9mZWF0dXJlcy90aWNrZXInO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9mZWF0dXJlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDb250YWluZXJFeHRlbnNpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4uL2ZlYXR1cmVzL2RlYnVnJztcbmltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gJy4uL2ZlYXR1cmVzL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi4vZmVhdHVyZXMvY29tcG9uZW50cyc7XG5leHBvcnQgY2xhc3MgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGUpIHtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDMyO1xuICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgICAgbW9kdWxlID0ge307XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLkNvbXBvbmVudHMgPSBtb2R1bGUuQ29tcG9uZW50cyA/PyBDb21wb25lbnRzO1xuICAgICAgICBtb2R1bGUuU2NyZWVuID0gbW9kdWxlLlNjcmVlbiA/PyBTY3JlZW47XG4gICAgICAgIG1vZHVsZS5QbGF0Zm9ybSA9IG1vZHVsZS5QbGF0Zm9ybSA/PyBQbGF0Zm9ybTtcbiAgICAgICAgbW9kdWxlLlVwZGF0ZXIgPSBtb2R1bGUuVXBkYXRlciA/PyBVcGRhdGVyO1xuICAgICAgICBtb2R1bGUuUmVuZGVyZXIgPSBtb2R1bGUuUmVuZGVyZXIgPz8gUmVuZGVyZXI7XG4gICAgICAgIG1vZHVsZS5Qb2ludGVyRXZlbnRzID0gbW9kdWxlLlBvaW50ZXJFdmVudHMgPz8gUG9pbnRlckV2ZW50cztcbiAgICAgICAgbW9kdWxlLlRpY2tlciA9IG1vZHVsZS5UaWNrZXIgPz8gVGlja2VyO1xuICAgICAgICBtb2R1bGUuRGVidWcgPSBtb2R1bGUuRGVidWcgPz8gRGVidWc7XG4gICAgICAgIG1vZHVsZS5SZXNvdXJjZXMgPSBtb2R1bGUuUmVzb3VyY2VzID8/IFJlc291cmNlcztcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gbmV3IG1vZHVsZS5Db21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IG1vZHVsZS5TY3JlZW4oKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybSA9IG5ldyBtb2R1bGUuUGxhdGZvcm0odGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlciA9IG5ldyBtb2R1bGUuVXBkYXRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBtb2R1bGUuUmVuZGVyZXIodGhpcyk7XG4gICAgICAgIHRoaXMucG9pbnRlckV2ZW50cyA9IG5ldyBtb2R1bGUuUG9pbnRlckV2ZW50cyh0aGlzKTtcbiAgICAgICAgdGhpcy50aWNrZXIgPSBuZXcgbW9kdWxlLlRpY2tlcih0aGlzKTtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IG5ldyBtb2R1bGUuRGVidWcoKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgbW9kdWxlLlJlc291cmNlcyh0aGlzKTtcbiAgICAgICAgQ29udGFpbmVyRXh0ZW5zaW9uLmluaXQodGhpcyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ29tcG9uZW50cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmhpdFRlc3QgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMubG9hZGVkID0gbmV3IE1hcCgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBEZWJ1ZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLndhcm5pbmdzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBsb2coLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuICAgIH1cbiAgICBlcnJvciguLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoYXJncyk7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuZXJyb3JzLmdldChpZCk7XG4gICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgdGhpcy5lcnJvcnMuc2V0KGlkLCBjb3VudCk7XG4gICAgfVxuICAgIHdhcm5pbmcoLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLndhcm5pbmdzLmdldChpZCk7XG4gICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICB0aGlzLndhcm5pbmdzLnNldChpZCwgY291bnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIH1cbiAgICBiZWdpbigpIHtcbiAgICB9XG4gICAgZW5kKCkge1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1hdHJpeCwgUG9pbnQgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gJy4uL2ludGVyZmFjZXMvZGlzcGxheSc7XG5pbXBvcnQgeyBQb2ludGVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wb2ludGVyJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHJhbnNmb3JtJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFBvaW50ZXJFdmVudHMgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2xvYmFsID0gUG9pbnQuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5sb2NhbCA9IFBvaW50LmVtcHR5KCk7XG4gICAgICAgIHRoaXMucG9pbnRlcklkID0gMDtcbiAgICAgICAgdGhpcy5wb2ludGVyVHlwZSA9ICdwb2ludGVyRG93bic7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgbWF0cml4OiBNYXRyaXguZW1wdHkoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdID0gY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgZGlzcGF0Y2godHlwZSwgeCwgeSwgaWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvY2FsLnggPSB4O1xuICAgICAgICB0aGlzLmxvY2FsLnkgPSB5O1xuICAgICAgICB0aGlzLmdsb2JhbC54ID0geDtcbiAgICAgICAgdGhpcy5nbG9iYWwueSA9IHk7XG4gICAgICAgIHRoaXMucG9pbnRlcklkID0gaWQ7XG4gICAgICAgIHRoaXMucG9pbnRlclR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgY29uc3QgYmFzZSA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBNYXRyaXguc2V0RW1wdHkoYmFzZS5tYXRyaXgpO1xuICAgICAgICB0aGlzLmRlcHRoKys7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDb21wb25lbnQocm9vdCwgYmFzZSk7XG4gICAgfVxuICAgIGRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgcGFyZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIURpc3BsYXkuaXNWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVBvaW50ZXIuaXNQb2ludGVyRW5hYmxlZChjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgICAgIE1hdHJpeC5jb25jYXQocGFyZW50Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1JbnZlcnNlUG9pbnQoY29udGV4dC5tYXRyaXgsIHRoaXMuZ2xvYmFsLCB0aGlzLmxvY2FsKTtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5sb2NhbDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgdGhpcy5wb2ludGVyVHlwZSwgeCwgeSwgdGhpcy5wb2ludGVySWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRlclR5cGUgPT09ICdwb2ludGVyTW92ZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmICFjb21wb25lbnQucG9pbnRlck92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdmVyJywgeCwgeSwgdGhpcy5wb2ludGVySWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghcmVzdWx0ICYmIGNvbXBvbmVudC5wb2ludGVyT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCAncG9pbnRlck91dCcsIHgsIHksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnBvaW50ZXJPdmVyID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0sIE1hdHJpeCB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9kaXNwbGF5JztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHJhbnNmb3JtJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBtYXRyaXg6IE1hdHJpeC5lbXB0eSgpLFxuICAgICAgICAgICAgICAgIGNvbG9yVHJhbnNmb3JtOiBDb2xvclRyYW5zZm9ybS5lbXB0eSgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICByZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBwYXJlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghRGlzcGxheS5pc1Zpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgVHJhbnNmb3JtLmdldENvbG9yVHJhbnNmb3JtKGNvbXBvbmVudCwgY29udGV4dC5jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIE1hdHJpeC5jb25jYXQocGFyZW50Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgQ29sb3JUcmFuc2Zvcm0uY29uY2F0KHBhcmVudC5jb2xvclRyYW5zZm9ybSwgY29udGV4dC5jb2xvclRyYW5zZm9ybSwgY29udGV4dC5jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMuZW5naW5lLnBsYXRmb3JtLmJlZ2luKCk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuZGVwdGgrKztcbiAgICAgICAgTWF0cml4LmNvcHkodGhpcy5lbmdpbmUuc2NyZWVuLmdldE1hdHJpeCgpLCBiYXNlLm1hdHJpeCk7XG4gICAgICAgIENvbG9yVHJhbnNmb3JtLnNldEVtcHR5KGJhc2UuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudChyb290LCBiYXNlKTtcbiAgICAgICAgdGhpcy5lbmdpbmUucGxhdGZvcm0uZW5kKCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZXMgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVzb2x2ZXJzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBnZXQoYXNzZXQpIHtcbiAgICAgICAgaWYgKCFhc3NldCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc291cmNlID0gdGhpcy5yZXNvdXJjZXMuZ2V0KGFzc2V0KTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICAgICAgcmVzb3VyY2UgPSB0aGlzLnJlc29sdmUoYXNzZXQpO1xuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXMuc2V0KGFzc2V0LCByZXNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgIH1cbiAgICByZXNvbHZlKGFzc2V0KSB7XG4gICAgICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gcmVzb2x2ZXIoYXNzZXQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBSZXNvdXJjZSBub3QgcmVzb2x2ZWQ6ICR7YXNzZXR9YCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1hdHJpeCB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IDQwMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA0MDA7XG4gICAgICAgIHRoaXMucGl4ZWxSYXRpbyA9IDA7XG4gICAgICAgIHRoaXMuZnVsbHNjcmVlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1hdHJpeCA9IE1hdHJpeC5lbXB0eSgpO1xuICAgIH1cbiAgICBnZXRNYXRyaXgoKSB7XG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW8gPSB0aGlzLmdldFBpeGVsUmF0aW8oKTtcbiAgICAgICAgdGhpcy5tYXRyaXguYSA9IHBpeGVsUmF0aW87XG4gICAgICAgIHRoaXMubWF0cml4LmQgPSBwaXhlbFJhdGlvO1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gICAgfVxuICAgIGdldFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuID8gd2luZG93LmlubmVyV2lkdGggOiB0aGlzLndpZHRoO1xuICAgIH1cbiAgICBnZXRIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZ1bGxzY3JlZW4gPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB0aGlzLmhlaWdodDtcbiAgICB9XG4gICAgZ2V0UGl4ZWxSYXRpbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGl4ZWxSYXRpbyA+IDAgPyB0aGlzLnBpeGVsUmF0aW8gOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA/PyAxO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUaWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xuICAgICAgICB0aGlzLmZyYW1lUmF0ZSA9IDA7XG4gICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGUgPSAodGltZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbmdpbmUudXBkYXRlci51cGRhdGUodGltZSk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5yZW5kZXJlci5yZW5kZXIoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVGcmFtZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSAoY3VycmVudFRpbWUgLSB0aGlzLnRpbWUpIC8gMTAwMDtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmV4dEZyYW1lKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgIH1cbiAgICBnZXQgaXNQYXVzZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhdXNlZDtcbiAgICB9XG4gICAgcGxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU5leHRGcmFtZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB1cGRhdGVOZXh0RnJhbWUoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZUZyYW1lKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBVcGRhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VwZGF0ZSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBVcGRhdGVyIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KHJvb3QpO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydFRpbWU7XG4gICAgfVxuICAgIHVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVXBkYXRlLmlzRW5hYmxlZChjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzKGNvbXBvbmVudCk7XG4gICAgICAgIFVwZGF0ZS51cGRhdGUoY29tcG9uZW50LCB0aGlzLnRpbWUpO1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy51cGRhdGUuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlUHJvcGVydGllcyhjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5lbmdpbmUuY29tcG9uZW50cy5wcm9wZXJ0aWVzLmZvckVhY2goKGhhbmRsZXIsIHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50W3Byb3BlcnR5XSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvZW5naW5lJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvY29tcG9uZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL2RlYnVnJztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcGxhdGZvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9wb2ludGVyLWV2ZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3JlbmRlcmVyJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcmVzb3VyY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvc2NyZWVuJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvdGlja2VyJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvdXBkYXRlcic7XG5leHBvcnQgKiBmcm9tICcuL2lucHV0L21vdXNlJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy9kaXNwbGF5JztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy9waXZvdCc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvc291cmNlJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy90cmFuc2Zvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3VwZGF0ZSc7XG4iLCJmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsIHR5cGUpIHtcbiAgICBjb25zdCB7IHZpZXcgfSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICBjb25zdCBjbGllbnRSZWN0ID0gdmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIGNsaWVudFJlY3QubGVmdCAtIHZpZXcuY2xpZW50TGVmdDtcbiAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIGNsaWVudFJlY3QudG9wIC0gdmlldy5jbGllbnRUb3A7XG4gICAgZW5naW5lLnBvaW50ZXJFdmVudHMuZGlzcGF0Y2godHlwZSwgeCwgeSwgMCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cbmV4cG9ydCB2YXIgTW91c2VFeHRlbnNpb247XG4oZnVuY3Rpb24gKE1vdXNlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyB2aWV3IH0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyRG93bicpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyVXAnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyTW92ZScpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgTW91c2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShNb3VzZUV4dGVuc2lvbiB8fCAoTW91c2VFeHRlbnNpb24gPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBEaXNwbGF5O1xuKGZ1bmN0aW9uIChEaXNwbGF5KSB7XG4gICAgZnVuY3Rpb24gaXNWaXNpYmxlKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LnZpc2libGUgPz8gdHJ1ZTtcbiAgICB9XG4gICAgRGlzcGxheS5pc1Zpc2libGUgPSBpc1Zpc2libGU7XG59KShEaXNwbGF5IHx8IChEaXNwbGF5ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUGl2b3Q7XG4oZnVuY3Rpb24gKFBpdm90KSB7XG4gICAgZnVuY3Rpb24gZ2V0WChwaXZvdCwgd2lkdGgpIHtcbiAgICAgICAgY29uc3QgeyBwaXZvdFggfSA9IHBpdm90O1xuICAgICAgICBpZiAocGl2b3RYKSB7XG4gICAgICAgICAgICByZXR1cm4gLXBpdm90WCAqIHdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBQaXZvdC5nZXRYID0gZ2V0WDtcbiAgICBmdW5jdGlvbiBnZXRZKHBpdm90LCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgeyBwaXZvdFkgfSA9IHBpdm90O1xuICAgICAgICBpZiAocGl2b3RZKSB7XG4gICAgICAgICAgICByZXR1cm4gLXBpdm90WSAqIGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgUGl2b3QuZ2V0WSA9IGdldFk7XG59KShQaXZvdCB8fCAoUGl2b3QgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBQb2ludGVyO1xuKGZ1bmN0aW9uIChQb2ludGVyKSB7XG4gICAgZnVuY3Rpb24gaXNQb2ludGVyT3Zlcihwb2ludGVyKSB7XG4gICAgICAgIHJldHVybiAhIXBvaW50ZXIucG9pbnRlck92ZXI7XG4gICAgfVxuICAgIFBvaW50ZXIuaXNQb2ludGVyT3ZlciA9IGlzUG9pbnRlck92ZXI7XG4gICAgZnVuY3Rpb24gaXNQb2ludGVyRW5hYmxlZChwb2ludGVyKSB7XG4gICAgICAgIHJldHVybiBwb2ludGVyLnBvaW50ZXJFbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIFBvaW50ZXIuaXNQb2ludGVyRW5hYmxlZCA9IGlzUG9pbnRlckVuYWJsZWQ7XG4gICAgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChwb2ludGVyLCB0eXBlLCB4LCB5LCBpZCkge1xuICAgICAgICBjb25zdCBoYW5kbGVyTmFtZSA9IGBvbiR7dHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3R5cGUuc2xpY2UoMSl9YDtcbiAgICAgICAgaWYgKHBvaW50ZXJbaGFuZGxlck5hbWVdKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlLCB4LCB5LCBpZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwb2ludGVyW2hhbmRsZXJOYW1lXShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbn0pKFBvaW50ZXIgfHwgKFBvaW50ZXIgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBTb3VyY2U7XG4oZnVuY3Rpb24gKFNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIGdldFJlc291cmNlKHNvdXJjZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBzb3VyY2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICB9XG4gICAgU291cmNlLmdldFJlc291cmNlID0gZ2V0UmVzb3VyY2U7XG4gICAgZnVuY3Rpb24gaXNMb2FkZWQoc291cmNlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBnZXRSZXNvdXJjZShzb3VyY2UsIGVuZ2luZSk7XG4gICAgICAgIHJldHVybiAhIXJlc291cmNlPy5sb2FkZWQ7XG4gICAgfVxuICAgIFNvdXJjZS5pc0xvYWRlZCA9IGlzTG9hZGVkO1xufSkoU291cmNlIHx8IChTb3VyY2UgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBUcmFuc2Zvcm07XG4oZnVuY3Rpb24gKFRyYW5zZm9ybSkge1xuICAgIGZ1bmN0aW9uIGdldE1hdHJpeCh0cmFuc2Zvcm0sIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAobWF0cml4KSB7XG4gICAgICAgICAgICByZXN1bHQuYSA9IG1hdHJpeC5hID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYiA9IG1hdHJpeC5iID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuYyA9IG1hdHJpeC5jID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuZCA9IG1hdHJpeC5kID8/IDE7XG4gICAgICAgICAgICByZXN1bHQudHggPSBtYXRyaXgudHggPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IG1hdHJpeC50eSA/PyAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm90YXRpb24gfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gdHJhbnNmb3JtLnNjYWxlWCA/PyB0cmFuc2Zvcm0uc2NhbGUgPz8gMTtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gdHJhbnNmb3JtLnNjYWxlWSA/PyB0cmFuc2Zvcm0uc2NhbGUgPz8gMTtcbiAgICAgICAgcmVzdWx0LnR4ID0gdHJhbnNmb3JtLnggPz8gMDtcbiAgICAgICAgcmVzdWx0LnR5ID0gdHJhbnNmb3JtLnkgPz8gMDtcbiAgICAgICAgaWYgKHJvdGF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gICAgICAgICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihyb3RhdGlvbik7XG4gICAgICAgICAgICByZXN1bHQuYSA9IGNvcyAqIHNjYWxlWDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gc2luICogc2NhbGVYO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAtc2luICogc2NhbGVZO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBjb3MgKiBzY2FsZVk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmEgPSBzY2FsZVg7XG4gICAgICAgIHJlc3VsdC5iID0gMDtcbiAgICAgICAgcmVzdWx0LmMgPSAwO1xuICAgICAgICByZXN1bHQuZCA9IHNjYWxlWTtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldE1hdHJpeCA9IGdldE1hdHJpeDtcbiAgICBmdW5jdGlvbiBnZXRDb2xvclRyYW5zZm9ybSh0cmFuc2Zvcm0sIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybSkge1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5yZWRNdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5NdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5ibHVlTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5yZWRPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmJsdWVPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHRpbnQgfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKHRpbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY29sb3IgPSAwLCB2YWx1ZSA9IDEgfSA9IHRpbnQ7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZUludmVydGVkID0gMSAtIHZhbHVlO1xuICAgICAgICAgICAgY29uc3QgciA9IChjb2xvciA+PiAxNikgJiAweGZmO1xuICAgICAgICAgICAgY29uc3QgZyA9IChjb2xvciA+PiA4KSAmIDB4ZmY7XG4gICAgICAgICAgICBjb25zdCBiID0gY29sb3IgJiAweGZmO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IHRyYW5zZm9ybS5hbHBoYSA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IHZhbHVlSW52ZXJ0ZWQ7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSByICogdmFsdWU7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBnICogdmFsdWU7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGIgKiB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gdHJhbnNmb3JtLmFscGhhID8/IDE7XG4gICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IDA7XG4gICAgfVxuICAgIFRyYW5zZm9ybS5nZXRDb2xvclRyYW5zZm9ybSA9IGdldENvbG9yVHJhbnNmb3JtO1xufSkoVHJhbnNmb3JtIHx8IChUcmFuc2Zvcm0gPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBVcGRhdGU7XG4oZnVuY3Rpb24gKFVwZGF0ZSkge1xuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5lbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIFVwZGF0ZS5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbXBvbmVudCwgdGltZSkge1xuICAgICAgICBpZiAoY29tcG9uZW50Lm9uVXBkYXRlKSB7XG4gICAgICAgICAgICBjb21wb25lbnQub25VcGRhdGUodGltZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVXBkYXRlLnVwZGF0ZSA9IHVwZGF0ZTtcbn0pKFVwZGF0ZSB8fCAoVXBkYXRlID0ge30pKTtcbiIsImV4cG9ydCB2YXIgQm91bmRzO1xuKGZ1bmN0aW9uIChCb3VuZHMpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1pblg6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtaW5ZOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWF4WDogTnVtYmVyLk1JTl9WQUxVRSxcbiAgICAgICAgICAgIG1heFk6IE51bWJlci5NSU5fVkFMVUUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIEJvdW5kcy5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KGJvdW5kcykge1xuICAgICAgICBib3VuZHMubWluWCA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGJvdW5kcy5taW5ZID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1heFggPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWF4WSA9IE51bWJlci5NSU5fVkFMVUU7XG4gICAgfVxuICAgIEJvdW5kcy5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkoYm91bmRzKSB7XG4gICAgICAgIHJldHVybiBib3VuZHMubWluWCA9PT0gTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1pblkgPT09IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5tYXhYID09PSBOdW1iZXIuTUlOX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWF4WSA9PT0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICB9XG4gICAgQm91bmRzLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIHRvUmVjdGFuZ2xlKGJvdW5kcywgcmVjdGFuZ2xlKSB7XG4gICAgICAgIGNvbnN0IHsgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgfSA9IGJvdW5kcztcbiAgICAgICAgcmVjdGFuZ2xlLnggPSBtaW5YO1xuICAgICAgICByZWN0YW5nbGUueSA9IG1pblk7XG4gICAgICAgIHJlY3RhbmdsZS53aWR0aCA9IG1heFggLSBtaW5YO1xuICAgICAgICByZWN0YW5nbGUuaGVpZ2h0ID0gbWF4WSAtIG1pblk7XG4gICAgfVxuICAgIEJvdW5kcy50b1JlY3RhbmdsZSA9IHRvUmVjdGFuZ2xlO1xuICAgIGZ1bmN0aW9uIHRlc3RYKGJvdW5kcywgeCkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RYID0gdGVzdFg7XG4gICAgZnVuY3Rpb24gdGVzdFkoYm91bmRzLCB5KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFkgPSB0ZXN0WTtcbiAgICBmdW5jdGlvbiB0ZXN0KGJvdW5kcywgeCwgeSkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0ID0gdGVzdDtcbiAgICBmdW5jdGlvbiB0ZXN0UG9pbnQoYm91bmRzLCBwb2ludCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0UG9pbnQgPSB0ZXN0UG9pbnQ7XG59KShCb3VuZHMgfHwgKEJvdW5kcyA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIENvbG9yVHJhbnNmb3JtO1xuKGZ1bmN0aW9uIChDb2xvclRyYW5zZm9ybSkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxwaGFNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgcmVkTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGdyZWVuTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGJsdWVNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYWxwaGFPZmZzZXQ6IDAsXG4gICAgICAgICAgICByZWRPZmZzZXQ6IDAsXG4gICAgICAgICAgICBncmVlbk9mZnNldDogMCxcbiAgICAgICAgICAgIGJsdWVPZmZzZXQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShjdCkge1xuICAgICAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5NdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ibHVlTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYWxwaGFNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5yZWRPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmdyZWVuT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ibHVlT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU9mZnNldCA9PT0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eVdpdGhBbHBoYShjdCkge1xuICAgICAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5NdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ibHVlTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYmx1ZU9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmlzRW1wdHlXaXRoQWxwaGEgPSBpc0VtcHR5V2l0aEFscGhhO1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KGN0KSB7XG4gICAgICAgIGN0LnJlZE11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5ncmVlbk11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5ibHVlTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LmFscGhhTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LnJlZE9mZnNldCA9IDA7XG4gICAgICAgIGN0LmdyZWVuT2Zmc2V0ID0gMDtcbiAgICAgICAgY3QuYmx1ZU9mZnNldCA9IDA7XG4gICAgICAgIGN0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KGZyb20sIHRvKSB7XG4gICAgICAgIHRvLmFscGhhTXVsdGlwbGllciA9IGZyb20uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICB0by5yZWRNdWx0aXBsaWVyID0gZnJvbS5yZWRNdWx0aXBsaWVyO1xuICAgICAgICB0by5ncmVlbk11bHRpcGxpZXIgPSBmcm9tLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgdG8uYmx1ZU11bHRpcGxpZXIgPSBmcm9tLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICB0by5hbHBoYU9mZnNldCA9IGZyb20uYWxwaGFPZmZzZXQ7XG4gICAgICAgIHRvLnJlZE9mZnNldCA9IGZyb20ucmVkT2Zmc2V0O1xuICAgICAgICB0by5ncmVlbk9mZnNldCA9IGZyb20uZ3JlZW5PZmZzZXQ7XG4gICAgICAgIHRvLmJsdWVPZmZzZXQgPSBmcm9tLmJsdWVPZmZzZXQ7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIGNvbmNhdChjdDEsIGN0MCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGFscGhhTXVsdGlwbGllciA9IGN0MS5hbHBoYU11bHRpcGxpZXIgKiBjdDAuYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCByZWRNdWx0aXBsaWVyID0gY3QxLnJlZE11bHRpcGxpZXIgKiBjdDAucmVkTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgZ3JlZW5NdWx0aXBsaWVyID0gY3QxLmdyZWVuTXVsdGlwbGllciAqIGN0MC5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGJsdWVNdWx0aXBsaWVyID0gY3QxLmJsdWVNdWx0aXBsaWVyICogY3QwLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBhbHBoYU9mZnNldCA9IGN0MS5hbHBoYU11bHRpcGxpZXIgKiBjdDAuYWxwaGFPZmZzZXQgKyBjdDAuYWxwaGFPZmZzZXQ7XG4gICAgICAgIGNvbnN0IHJlZE9mZnNldCA9IGN0MS5yZWRNdWx0aXBsaWVyICogY3QwLnJlZE9mZnNldCArIGN0MC5yZWRPZmZzZXQ7XG4gICAgICAgIGNvbnN0IGdyZWVuT2Zmc2V0ID0gY3QxLmdyZWVuTXVsdGlwbGllciAqIGN0MC5ncmVlbk9mZnNldCArIGN0MC5ncmVlbk9mZnNldDtcbiAgICAgICAgY29uc3QgYmx1ZU9mZnNldCA9IGN0MS5ibHVlTXVsdGlwbGllciAqIGN0MC5ibHVlT2Zmc2V0ICsgY3QwLmJsdWVPZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gcmVkTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IGdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IGFscGhhT2Zmc2V0O1xuICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gcmVkT2Zmc2V0O1xuICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBncmVlbk9mZnNldDtcbiAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBibHVlT2Zmc2V0O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5jb25jYXQgPSBjb25jYXQ7XG59KShDb2xvclRyYW5zZm9ybSB8fCAoQ29sb3JUcmFuc2Zvcm0gPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9jb2xvci10cmFuc2Zvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9ib3VuZHMnO1xuZXhwb3J0ICogZnJvbSAnLi9tYXRyaXgnO1xuZXhwb3J0ICogZnJvbSAnLi9wb2ludCc7XG5leHBvcnQgKiBmcm9tICcuL3JlY3RhbmdsZSc7XG4iLCJleHBvcnQgdmFyIE1hdHJpeDtcbihmdW5jdGlvbiAoTWF0cml4KSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiAxLFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGM6IDAsXG4gICAgICAgICAgICBkOiAxLFxuICAgICAgICAgICAgdHg6IDAsXG4gICAgICAgICAgICB0eTogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTWF0cml4LmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShtYXRyaXgpIHtcbiAgICAgICAgcmV0dXJuIG1hdHJpeC5hID09PSAxXG4gICAgICAgICAgICAmJiBtYXRyaXguYiA9PT0gMFxuICAgICAgICAgICAgJiYgbWF0cml4LmMgPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC5kID09PSAxXG4gICAgICAgICAgICAmJiBtYXRyaXgudHggPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC50eSA9PT0gMDtcbiAgICB9XG4gICAgTWF0cml4LmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KG1hdHJpeCkge1xuICAgICAgICBtYXRyaXguYSA9IDE7XG4gICAgICAgIG1hdHJpeC5iID0gMDtcbiAgICAgICAgbWF0cml4LmMgPSAwO1xuICAgICAgICBtYXRyaXguZCA9IDE7XG4gICAgICAgIG1hdHJpeC50eCA9IDA7XG4gICAgICAgIG1hdHJpeC50eSA9IDA7XG4gICAgfVxuICAgIE1hdHJpeC5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoZnJvbSwgdG8pIHtcbiAgICAgICAgdG8uYSA9IGZyb20uYTtcbiAgICAgICAgdG8uYiA9IGZyb20uYjtcbiAgICAgICAgdG8uYyA9IGZyb20uYztcbiAgICAgICAgdG8uZCA9IGZyb20uZDtcbiAgICAgICAgdG8udHggPSBmcm9tLnR4O1xuICAgICAgICB0by50eSA9IGZyb20udHk7XG4gICAgfVxuICAgIE1hdHJpeC5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBjb25jYXQobWF0cml4MCwgbWF0cml4MSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGEgPSBtYXRyaXgxLmEgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmM7XG4gICAgICAgIGNvbnN0IGIgPSBtYXRyaXgxLmEgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmQ7XG4gICAgICAgIGNvbnN0IGMgPSBtYXRyaXgxLmMgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmM7XG4gICAgICAgIGNvbnN0IGQgPSBtYXRyaXgxLmMgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmQ7XG4gICAgICAgIGNvbnN0IHR4ID0gbWF0cml4MS50eCAqIG1hdHJpeDAuYSArIG1hdHJpeDEudHkgKiBtYXRyaXgwLmMgKyBtYXRyaXgwLnR4O1xuICAgICAgICBjb25zdCB0eSA9IG1hdHJpeDEudHggKiBtYXRyaXgwLmIgKyBtYXRyaXgxLnR5ICogbWF0cml4MC5kICsgbWF0cml4MC50eTtcbiAgICAgICAgcmVzdWx0LmEgPSBhO1xuICAgICAgICByZXN1bHQuYiA9IGI7XG4gICAgICAgIHJlc3VsdC5jID0gYztcbiAgICAgICAgcmVzdWx0LmQgPSBkO1xuICAgICAgICByZXN1bHQudHggPSB0eDtcbiAgICAgICAgcmVzdWx0LnR5ID0gdHk7XG4gICAgfVxuICAgIE1hdHJpeC5jb25jYXQgPSBjb25jYXQ7XG4gICAgZnVuY3Rpb24gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KSB7XG4gICAgICAgIHJldHVybiBtYXRyaXguYSAqIG1hdHJpeC5kIC0gbWF0cml4LmIgKiBtYXRyaXguYztcbiAgICB9XG4gICAgTWF0cml4LmdldERldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQ7XG4gICAgZnVuY3Rpb24gaW52ZXJ0KG1hdHJpeCwgcmVzdWx0KSB7XG4gICAgICAgIGxldCBkZXRlcm1pbmFudCA9IGdldERldGVybWluYW50KG1hdHJpeCk7XG4gICAgICAgIGlmIChkZXRlcm1pbmFudCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0LmEgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gLW1hdHJpeC50eDtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IC1tYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCA9IDEuMCAvIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBtYXRyaXguYSAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmIgPSAtbWF0cml4LmIgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gLW1hdHJpeC5jICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuZCA9IG1hdHJpeC5kICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQudHggPSAtcmVzdWx0LmEgKiBtYXRyaXgudHggLSByZXN1bHQuYyAqIG1hdHJpeC50eTtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IC1yZXN1bHQuYiAqIG1hdHJpeC50eCAtIHJlc3VsdC5kICogbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hdHJpeC5pbnZlcnQgPSBpbnZlcnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJlc3VsdC54ID0geCAqIG1hdHJpeC5hICsgeSAqIG1hdHJpeC5jICsgbWF0cml4LnR4O1xuICAgICAgICByZXN1bHQueSA9IHggKiBtYXRyaXguYiArIHkgKiBtYXRyaXguZCArIG1hdHJpeC50eTtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybVBvaW50ID0gdHJhbnNmb3JtUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtSW52ZXJzZVBvaW50KG1hdHJpeCwgcG9pbnQsIHJlc3VsdCkge1xuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudChtYXRyaXgpO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC54ID0gLW1hdHJpeC50eDtcbiAgICAgICAgICAgIHJlc3VsdC55ID0gLW1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRldGVybWluYW50ID0gMSAvIGRldGVybWluYW50O1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgICAgIHJlc3VsdC54ID0gZGV0ZXJtaW5hbnQgKiAobWF0cml4LmMgKiAobWF0cml4LnR5IC0geSkgKyBtYXRyaXguZCAqICh4IC0gbWF0cml4LnR4KSk7XG4gICAgICAgICAgICByZXN1bHQueSA9IGRldGVybWluYW50ICogKG1hdHJpeC5hICogKHkgLSBtYXRyaXgudHkpICsgbWF0cml4LmIgKiAobWF0cml4LnR4IC0geCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1JbnZlcnNlUG9pbnQgPSB0cmFuc2Zvcm1JbnZlcnNlUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtQm91bmRzKG1hdHJpeCwgYm91bmRzLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBhLCBiLCBjLCBkLCB0eCwgdHksIH0gPSBtYXRyaXg7XG4gICAgICAgIGNvbnN0IHJ4ID0gYm91bmRzLng7XG4gICAgICAgIGNvbnN0IHJ5ID0gYm91bmRzLnk7XG4gICAgICAgIGNvbnN0IHJyID0gcnggKyBib3VuZHMud2lkdGg7XG4gICAgICAgIGNvbnN0IHJiID0gcnkgKyBib3VuZHMuaGVpZ2h0O1xuICAgICAgICBjb25zdCBueDEgPSByeCAqIGEgKyByeSAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkxID0gcnggKiBiICsgcnkgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54MiA9IHJyICogYSArIHJ5ICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTIgPSByciAqIGIgKyByeSAqIGQgKyB0eTtcbiAgICAgICAgY29uc3QgbngzID0gcnIgKiBhICsgcmIgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MyA9IHJyICogYiArIHJiICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDQgPSByeCAqIGEgKyByYiAqIGMgKyB0eDtcbiAgICAgICAgY29uc3Qgbnk0ID0gcnggKiBiICsgcmIgKiBkICsgdHk7XG4gICAgICAgIGxldCBsZWZ0ID0gbngxO1xuICAgICAgICBpZiAobGVmdCA+IG54Mikge1xuICAgICAgICAgICAgbGVmdCA9IG54MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54Mykge1xuICAgICAgICAgICAgbGVmdCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54NCkge1xuICAgICAgICAgICAgbGVmdCA9IG54NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9wID0gbnkxO1xuICAgICAgICBpZiAodG9wID4gbnkyKSB7XG4gICAgICAgICAgICB0b3AgPSBueTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcCA+IG55Mykge1xuICAgICAgICAgICAgdG9wID0gbnkzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3AgPiBueTQpIHtcbiAgICAgICAgICAgIHRvcCA9IG55NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmlnaHQgPSBueDE7XG4gICAgICAgIGlmIChyaWdodCA8IG54Mikge1xuICAgICAgICAgICAgcmlnaHQgPSBueDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0IDwgbngzKSB7XG4gICAgICAgICAgICByaWdodCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgPCBueDQpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbng0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBib3R0b20gPSBueTE7XG4gICAgICAgIGlmIChib3R0b20gPCBueTIpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tIDwgbnkzKSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdHRvbSA8IG55NCkge1xuICAgICAgICAgICAgYm90dG9tID0gbnk0O1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC54ID0gbGVmdDtcbiAgICAgICAgcmVzdWx0LnkgPSB0b3A7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGJvdHRvbSAtIHRvcDtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybUJvdW5kcyA9IHRyYW5zZm9ybUJvdW5kcztcbn0pKE1hdHJpeCB8fCAoTWF0cml4ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUG9pbnQ7XG4oZnVuY3Rpb24gKFBvaW50KSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG4gICAgUG9pbnQuZW1wdHkgPSBlbXB0eTtcbn0pKFBvaW50IHx8IChQb2ludCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFJlY3RhbmdsZTtcbihmdW5jdGlvbiAoUmVjdGFuZ2xlKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShyZWN0YW5nbGUpIHtcbiAgICAgICAgcmVjdGFuZ2xlLnggPSAwO1xuICAgICAgICByZWN0YW5nbGUueSA9IDA7XG4gICAgICAgIHJlY3RhbmdsZS53aWR0aCA9IDA7XG4gICAgICAgIHJlY3RhbmdsZS5oZWlnaHQgPSAwO1xuICAgIH1cbiAgICBSZWN0YW5nbGUuc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KHJlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlLndpZHRoID09PSAwIHx8IHJlY3RhbmdsZS5oZWlnaHQgPT09IDA7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBjb250YWlucyhyZWN0YW5nbGUsIHBvaW50KSB7XG4gICAgICAgIHJldHVybiByZWN0YW5nbGUueCA8IHBvaW50LnhcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS54ICsgcmVjdGFuZ2xlLndpZHRoID4gcG9pbnQueFxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnkgPCBwb2ludC55XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueSArIHJlY3RhbmdsZS5oZWlnaHQgPiBwb2ludC55O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuY29udGFpbnMgPSBjb250YWlucztcbn0pKFJlY3RhbmdsZSB8fCAoUmVjdGFuZ2xlID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90LCBTb3VyY2UgfSBmcm9tICdAZTJkL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0sIE1hdHJpeCwgUmVjdGFuZ2xlIH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSB9IGZyb20gJy4vaW1hZ2UnO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb247XG4oZnVuY3Rpb24gKENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCByZXNvdXJjZSA9IFNvdXJjZS5nZXRSZXNvdXJjZShpbWFnZSwgZW5naW5lKTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZT8ubG9hZGVkIHx8ICFyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IGNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gZW5naW5lLnBsYXRmb3JtO1xuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBwbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgICAgICBpZiAoQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eVdpdGhBbHBoYShjb2xvclRyYW5zZm9ybSkpIHtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tQ29udGV4dCA9IHBsYXRmb3JtLmNyZWF0ZUN1c3RvbUNvbnRleHQoKTtcbiAgICAgICAgICAgIGJvdW5kcy54ID0geDtcbiAgICAgICAgICAgIGJvdW5kcy55ID0geTtcbiAgICAgICAgICAgIGJvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgYm91bmRzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Cb3VuZHMobWF0cml4LCBib3VuZHMsIGJvdW5kcyk7XG4gICAgICAgICAgICBpZiAoUmVjdGFuZ2xlLmlzRW1wdHkoYm91bmRzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuY2xlYXJSZWN0KGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBjdXN0b21Db250ZXh0LmdldEltYWdlRGF0YShib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBjb25zdCBybSA9IGNvbG9yVHJhbnNmb3JtLnJlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBnbSA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IGJtID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBhbSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IHJvID0gY29sb3JUcmFuc2Zvcm0ucmVkT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgZ28gPSBjb2xvclRyYW5zZm9ybS5ncmVlbk9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGJvID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGFvID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFPZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGltYWdlRGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBkYXRhO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIHJtICsgcm87XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGdtICsgZ287XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGJtICsgYm87XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGFtICsgYW87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIGJvdW5kcy54LCBib3VuZHMueSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZShjdXN0b21Db250ZXh0LmNhbnZhcywgYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQsIGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHBsYXRmb3JtLmRlc3Ryb3lDdXN0b21Db250ZXh0KGN1c3RvbUNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIEltYWdlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChJTUFHRSwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gfHwgKENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QsIFNvdXJjZSB9IGZyb20gJ0BlMmQvY29yZSc7XG5pbXBvcnQgeyBJbWFnZUV4dGVuc2lvbiwgSU1BR0UgfSBmcm9tICcuL2ltYWdlJztcbmV4cG9ydCB2YXIgQ2FudmFzSW1hZ2VFeHRlbnNpb247XG4oZnVuY3Rpb24gKENhbnZhc0ltYWdlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBTb3VyY2UuZ2V0UmVzb3VyY2UoaW1hZ2UsIGVuZ2luZSk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmxvYWRlZCB8fCAhcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IGVuZ2luZS5wbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgSW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KElNQUdFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc0ltYWdlRXh0ZW5zaW9uIHx8IChDYW52YXNJbWFnZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCwgfSBmcm9tICdAZTJkL2NvcmUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAZTJkL3Jlc291cmNlcyc7XG5leHBvcnQgY29uc3QgSU1BR0UgPSAnaW1hZ2UnO1xuZXhwb3J0IHZhciBJbWFnZTtcbihmdW5jdGlvbiAoSW1hZ2UpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoaW1hZ2UsIGJvdW5kcywgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBpbWFnZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZT8ubG9hZGVkIHx8ICFyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgICAgICBib3VuZHMueCA9IHg7XG4gICAgICAgIGJvdW5kcy55ID0geTtcbiAgICAgICAgYm91bmRzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGJvdW5kcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIEltYWdlLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEltYWdlIHx8IChJbWFnZSA9IHt9KSk7XG5jb25zdCBib3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgSW1hZ2VFeHRlbnNpb247XG4oZnVuY3Rpb24gKEltYWdlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdChpbWFnZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgbG9jYWwgfSA9IGVuZ2luZS5wb2ludGVyRXZlbnRzO1xuICAgICAgICBJbWFnZS5jYWxjdWxhdGVCb3VuZHMoaW1hZ2UsIGJvdW5kcywgZW5naW5lKTtcbiAgICAgICAgcmV0dXJuIFJlY3RhbmdsZS5jb250YWlucyhib3VuZHMsIGxvY2FsKTtcbiAgICB9XG4gICAgSW1hZ2VFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoSU1BR0UsIGhpdFRlc3QpO1xuICAgICAgICBJbWFnZVJlc291cmNlLmluaXQoZW5naW5lKTtcbiAgICB9XG4gICAgSW1hZ2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShJbWFnZUV4dGVuc2lvbiB8fCAoSW1hZ2VFeHRlbnNpb24gPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy1pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy1pbWFnZS1jb2xvcic7XG4iLCJleHBvcnQgdmFyIEltYWdlUmVzb3VyY2U7XG4oZnVuY3Rpb24gKEltYWdlUmVzb3VyY2UpIHtcbiAgICBmdW5jdGlvbiByZXNvbHZlKGFzc2V0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gYXNzZXQuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgICAgc3dpdGNoIChleHRlbnNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3BuZyc6XG4gICAgICAgICAgICBjYXNlICdqcGcnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0ge1xuICAgICAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGFzc2V0O1xuICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGltYWdlIGxvYWRlZDogJHthc3NldH1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnaW1hZ2UgbG9hZCBlcnJvcicsIGUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgSW1hZ2VSZXNvdXJjZS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb2x2ZSk7XG4gICAgfVxuICAgIEltYWdlUmVzb3VyY2UuaW5pdCA9IGluaXQ7XG59KShJbWFnZVJlc291cmNlIHx8IChJbWFnZVJlc291cmNlID0ge30pKTtcbiIsImltcG9ydCB7IFNoYXBlRXh0ZW5zaW9uLCBTSEFQRSB9IGZyb20gJy4vc2hhcGUnO1xuZXhwb3J0IHZhciBDYW52YXNTaGFwZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzU2hhcGVFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoc2hhcGUsIGVuZ2luZSkge1xuICAgIH1cbiAgICBDYW52YXNTaGFwZUV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgU2hhcGVFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KFNIQVBFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNTaGFwZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc1NoYXBlRXh0ZW5zaW9uIHx8IChDYW52YXNTaGFwZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgUGF0aENvbW1hbmQgfSBmcm9tICcuL3BhdGgnO1xuaW1wb3J0IHsgR3JhcGhpY3NTdHJpbmcgfSBmcm9tICcuL3N0cmluZyc7XG5leHBvcnQgdmFyIFJlY3RhbmdsZURhdGE7XG4oZnVuY3Rpb24gKFJlY3RhbmdsZURhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCB3aWR0aCA9IDAsIGhlaWdodCA9IDAsIH0gPSBkYXRhO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHgsIHkpO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHggKyB3aWR0aCwgeSArIGhlaWdodCk7XG4gICAgfVxuICAgIFJlY3RhbmdsZURhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoUmVjdGFuZ2xlRGF0YSB8fCAoUmVjdGFuZ2xlRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIEVsbGlwc2VEYXRhO1xuKGZ1bmN0aW9uIChFbGxpcHNlRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHJhZGl1cywgcmFkaXVzWCA9IDAsIHJhZGl1c1kgPSAwLCB9ID0gZGF0YTtcbiAgICAgICAgY29uc3QgcnggPSByYWRpdXMgPz8gcmFkaXVzWDtcbiAgICAgICAgY29uc3QgcnkgPSByYWRpdXMgPz8gcmFkaXVzWTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4IC0gcngsIHkgLSByeSk7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCArIHJ4LCB5ICsgcnkpO1xuICAgIH1cbiAgICBFbGxpcHNlRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShFbGxpcHNlRGF0YSB8fCAoRWxsaXBzZURhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBQYXRoRGF0YTtcbihmdW5jdGlvbiAoUGF0aERhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aERhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHBhdGhEYXRhO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tYW5kID0gZGF0YVtpXTtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBQYXRoRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShQYXRoRGF0YSB8fCAoUGF0aERhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBHcmFwaGljc0RhdGE7XG4oZnVuY3Rpb24gKEdyYXBoaWNzRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBkYXRhO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICAgICAgUmVjdGFuZ2xlRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgICAgICAgICAgIEVsbGlwc2VEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGF0aCc6XG4gICAgICAgICAgICAgICAgUGF0aERhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc0RhdGEgfHwgKEdyYXBoaWNzRGF0YSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdAZTJkL2dlb20nO1xuZXhwb3J0IHZhciBQYXRoQ29tbWFuZDtcbihmdW5jdGlvbiAoUGF0aENvbW1hbmQpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aCwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gcGF0aDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdtb3ZlVG8nOlxuICAgICAgICAgICAgY2FzZSAnbGluZVRvJzpcbiAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgbW92ZVRvLnggPz8gMCwgbW92ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjdXJ2ZVRvJzpcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1cnZlVG8uY3ggPz8gMCwgY3VydmVUby5jeSA/PyAwKTtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1cnZlVG8ueCA/PyAwLCBjdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjdWJpY0N1cnZlVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8uY3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLmN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLnN4ID8/IDAsIGN1YmljQ3VydmVUby5zeSA/PyAwKTtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby54ID8/IDAsIGN1YmljQ3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShQYXRoQ29tbWFuZCB8fCAoUGF0aENvbW1hbmQgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGF0aENvbW1hbmQsIH0gZnJvbSAnLi9wYXRoJztcbmNvbnN0IFRFU1RfQ09NTUFORCA9IC9bTW1MbEhoVnZDY1NzUXFUdEFhWnpdLztcbmNvbnN0IFRFU1RfU1BBQ0UgPSAvW1xccyxdLztcbmNvbnN0IFRFU1RfTlVNQkVSID0gL1stKy5cXGRdLztcbmV4cG9ydCBjbGFzcyBHcmFwaGljc1N0cmluZ1N0cmVhbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9ICcnO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgICAgICAgdGhpcy5jb21tYW5kID0gbnVsbDtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICB9XG4gICAgc2V0UGF0aChwYXRoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAwO1xuICAgIH1cbiAgICBoYXNEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiA8IHRoaXMucGF0aC5sZW5ndGg7XG4gICAgfVxuICAgIGdldENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmQ7XG4gICAgfVxuICAgIGdldFNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNpemU7XG4gICAgfVxuICAgIGdldEJ1ZmZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyO1xuICAgIH1cbiAgICByZWFkTmV4dCgpIHtcbiAgICAgICAgdGhpcy5yZWFkQ29tbWFuZCgpO1xuICAgICAgICB0aGlzLnJlYWROdW1iZXJzKCk7XG4gICAgfVxuICAgIHJlYWRDb21tYW5kKCkge1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICB3aGlsZSAodGhpcy5wb3NpdGlvbiA8IHRoaXMucGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSB0aGlzLnBhdGhbdGhpcy5wb3NpdGlvbl07XG4gICAgICAgICAgICBpZiAoVEVTVF9DT01NQU5ELnRlc3QoY29tbWFuZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBjb21tYW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbisrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlYWROdW1iZXJzKCkge1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgICBsZXQgbnVtYmVyID0gJyc7XG4gICAgICAgIHdoaWxlICh0aGlzLnBvc2l0aW9uIDwgdGhpcy5wYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY2hhciA9IHRoaXMucGF0aFt0aGlzLnBvc2l0aW9uXTtcbiAgICAgICAgICAgIGlmIChURVNUX05VTUJFUi50ZXN0KGNoYXIpKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChURVNUX1NQQUNFLnRlc3QoY2hhcikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlclt0aGlzLnNpemUrK10gPSBwYXJzZUZsb2F0KG51bWJlcik7XG4gICAgICAgICAgICAgICAgbnVtYmVyID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChURVNUX0NPTU1BTkQudGVzdChjaGFyKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbisrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChudW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyW3RoaXMuc2l6ZSsrXSA9IHBhcnNlRmxvYXQobnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBHcmFwaGljc1N0cmluZ1JlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtID0gbmV3IEdyYXBoaWNzU3RyaW5nU3RyZWFtKCk7XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IHsgdHlwZTogJ21vdmVUbycgfTtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFggPSAwO1xuICAgICAgICB0aGlzLmxhc3RZID0gMDtcbiAgICB9XG4gICAgc2V0UGF0aChwYXRoKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtLnNldFBhdGgocGF0aCk7XG4gICAgICAgIHRoaXMubGFzdFggPSAwO1xuICAgICAgICB0aGlzLmxhc3RZID0gMDtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gZmFsc2U7XG4gICAgfVxuICAgIGhhc0RhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmVhbS5oYXNEYXRhKCk7XG4gICAgfVxuICAgIGdldENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRFeGlzdHMgPyB0aGlzLmNvbW1hbmQgOiBudWxsO1xuICAgIH1cbiAgICByZWFkTmV4dCgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0ucmVhZE5leHQoKTtcbiAgICAgICAgdGhpcy5wYXJzZSgpO1xuICAgIH1cbiAgICBwYXJzZSgpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMuc3RyZWFtLmdldENvbW1hbmQoKTtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gISFjb21tYW5kO1xuICAgICAgICBpZiAoIXRoaXMuY29tbWFuZEV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuc3RyZWFtLmdldEJ1ZmZlcigpO1xuICAgICAgICBjb25zdCBbeDAsIHkwLCB4MSwgeTEsIHgyLCB5MixdID0gYnVmZmVyO1xuICAgICAgICBsZXQgY3ggPSAwO1xuICAgICAgICBsZXQgY3kgPSAwO1xuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbW92ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueCA9IHgwO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueSA9IHkwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ21vdmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnggPSB4MCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby55ID0geTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB5MDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0geDAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHkwICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0geDA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHgwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0geDAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IHgwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSB5MDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0geDE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IHkxO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IHgyO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IHkyO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSB4MCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IHkwICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0geDEgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSB5MSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0geDIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IHkyICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gY3g7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGN5O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0geTA7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0geDE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0geTE7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IGN4O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSBjeTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0geDAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSB5MCArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0geDEgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IHkxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0geDA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSB5MDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0geDE7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IHkxO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IHgwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IHkwICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0geDEgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSB5MSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gY3g7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSBjeTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0geDA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IHkwO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IGN4O1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gY3k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IHgwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0geTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IHJlYWRlciA9IG5ldyBHcmFwaGljc1N0cmluZ1JlYWRlcigpO1xuZXhwb3J0IHZhciBHcmFwaGljc1N0cmluZztcbihmdW5jdGlvbiAoR3JhcGhpY3NTdHJpbmcpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aCwgYm91bmRzKSB7XG4gICAgICAgIHJlYWRlci5zZXRQYXRoKHBhdGgpO1xuICAgICAgICB3aGlsZSAocmVhZGVyLmhhc0RhdGEoKSkge1xuICAgICAgICAgICAgcmVhZGVyLnJlYWROZXh0KCk7XG4gICAgICAgICAgICBjb25zdCBjb21tYW5kID0gcmVhZGVyLmdldENvbW1hbmQoKTtcbiAgICAgICAgICAgIGlmIChjb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgUGF0aENvbW1hbmQuY2FsY3VsYXRlQm91bmRzKGNvbW1hbmQsIGJvdW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgR3JhcGhpY3NTdHJpbmcuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoR3JhcGhpY3NTdHJpbmcgfHwgKEdyYXBoaWNzU3RyaW5nID0ge30pKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoaWNzIHtcbiAgICBjb25zdHJ1Y3RvcihzaGFwZSkge1xuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGU7XG4gICAgfVxuICAgIGJlZ2luRmlsbChjb2xvciA9IDAsIGFscGhhID0gMSkge1xuICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAnc29saWQnLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYmVnaW5CaXRtYXBGaWxsKHNyYywgbWF0cml4LCByZXBlYXQgPSB0cnVlLCBzbW9vdGggPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAnYml0bWFwJyxcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHJlcGVhdCxcbiAgICAgICAgICAgIHNtb290aCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYmVnaW5HcmFkaWVudEZpbGwodHlwZSwgY29sb3IsIGFscGhhLCByYXRpbywgbWF0cml4LCBzcHJlYWQgPSAncmVwZWF0JywgaW50ZXJwb2xhdGlvbiA9ICdyZ2InLCBmb2NhbFBvaW50UmF0aW8gPSAwKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICBzcHJlYWQsXG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9uLFxuICAgICAgICAgICAgZm9jYWxQb2ludFJhdGlvLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsaW5lU3R5bGUodGhpY2tuZXNzID0gMCwgY29sb3IgPSAwLCBhbHBoYSA9IDEsIHBpeGVsSGludGluZyA9IGZhbHNlLCBzY2FsZU1vZGUgPSAnbm9uZScsIGNhcHMgPSAncm91bmQnLCBqb2ludHMgPSAncm91bmQnLCBtaXRlckxpbWl0ID0gMykge1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHtcbiAgICAgICAgICAgIHRoaWNrbmVzcyxcbiAgICAgICAgICAgIHBpeGVsSGludGluZyxcbiAgICAgICAgICAgIHNjYWxlTW9kZSxcbiAgICAgICAgICAgIGNhcHMsXG4gICAgICAgICAgICBqb2ludHMsXG4gICAgICAgICAgICBtaXRlckxpbWl0LFxuICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsaW5lR3JhZGllbnRTdHlsZSh0eXBlLCBjb2xvciwgYWxwaGEsIHJhdGlvLCBtYXRyaXgsIHNwcmVhZCA9ICdyZXBlYXQnLCBpbnRlcnBvbGF0aW9uID0gJ3JnYicsIGZvY2FsUG9pbnRSYXRpbyA9IDApIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0cm9rZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Ryb2tlLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgc3ByZWFkLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGlvbixcbiAgICAgICAgICAgIGZvY2FsUG9pbnRSYXRpbyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGluZUJpdG1hcFN0eWxlKHNyYywgbWF0cml4LCByZXBlYXQgPSB0cnVlLCBzbW9vdGggPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXRoaXMuc3Ryb2tlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHJva2UuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdiaXRtYXAnLFxuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgcmVwZWF0LFxuICAgICAgICAgICAgc21vb3RoLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBtb3ZlVG8oeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5iZWdpblBhdGgoKTtcbiAgICAgICAgcGF0aC5wdXNoKHsgdHlwZTogJ21vdmVUbycsIHgsIHkgfSk7XG4gICAgfVxuICAgIGxpbmVUbyh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHsgdHlwZTogJ2xpbmVUbycsIHgsIHkgfSk7XG4gICAgfVxuICAgIGN1cnZlVG8oY3gsIGN5LCB4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdXJ2ZVRvJywgY3gsIGN5LCB4LCB5LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY3ViaWNDdXJ2ZVRvKGN4LCBjeSwgc3gsIHN5LCB4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdXJ2ZVRvJywgY3gsIGN5LCBzeCwgc3ksIHgsIHksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkcmF3Um91bmRSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIGVsbGlwc2VXaWR0aCA9IDAsIGVsbGlwc2VIZWlnaHQgPSAwKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICBjb25zdCB3ID0gZWxsaXBzZVdpZHRoO1xuICAgICAgICBjb25zdCBoID0gZWxsaXBzZUhlaWdodDtcbiAgICAgICAgY29uc3QgayA9IDAuNTUyMjg0ODtcbiAgICAgICAgY29uc3Qgb3ggPSAodyAvIDIpICogaztcbiAgICAgICAgY29uc3Qgb3kgPSAoaCAvIDIpICogaztcbiAgICAgICAgY29uc3QgeGUgPSB4ICsgdztcbiAgICAgICAgY29uc3QgeWUgPSB5ICsgaDtcbiAgICAgICAgY29uc3QgeG0gPSB4ICsgdyAvIDI7XG4gICAgICAgIGNvbnN0IHltID0geSArIGggLyAyO1xuICAgICAgICBjb25zdCBkeCA9IHdpZHRoIC0gdztcbiAgICAgICAgY29uc3QgZHkgPSBoZWlnaHQgLSBoO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ21vdmVUbycsXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeTogeW0sXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeCxcbiAgICAgICAgICAgIGN5OiB5bSAtIG95LFxuICAgICAgICAgICAgc3g6IHhtIC0gb3gsXG4gICAgICAgICAgICBzeTogeSxcbiAgICAgICAgICAgIHg6IHhtLFxuICAgICAgICAgICAgeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhtICsgZHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhtICsgb3ggKyBkeCxcbiAgICAgICAgICAgIGN5OiB5LFxuICAgICAgICAgICAgc3g6IHhlICsgZHgsXG4gICAgICAgICAgICBzeTogeW0gLSBveSxcbiAgICAgICAgICAgIHg6IHhlICsgZHgsXG4gICAgICAgICAgICB5OiB5bSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhlICsgZHgsXG4gICAgICAgICAgICB5OiB5bSArIGR5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhlICsgZHgsXG4gICAgICAgICAgICBjeTogeW0gKyBveSArIGR5LFxuICAgICAgICAgICAgc3g6IHhtICsgb3ggKyBkeCxcbiAgICAgICAgICAgIHN5OiB5ZSArIGR5LFxuICAgICAgICAgICAgeDogeG0gKyBkeCxcbiAgICAgICAgICAgIHk6IHllICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVUbycsXG4gICAgICAgICAgICB4OiB4bSxcbiAgICAgICAgICAgIHk6IHllICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeG0gLSBveCxcbiAgICAgICAgICAgIGN5OiB5ZSArIGR5LFxuICAgICAgICAgICAgc3g6IHgsXG4gICAgICAgICAgICBzeTogeW0gKyBveSArIGR5LFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHk6IHltICsgZHksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkcmF3UmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ3JlY3RhbmdsZSc7XG4gICAgICAgIGRhdGEueCA9IHg7XG4gICAgICAgIGRhdGEueSA9IHk7XG4gICAgICAgIGRhdGEud2lkdGggPSB3aWR0aDtcbiAgICAgICAgZGF0YS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIGRyYXdDaXJjbGUoeCwgeSwgcmFkaXVzKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ2VsbGlwc2UnO1xuICAgICAgICBkYXRhLnggPSB4O1xuICAgICAgICBkYXRhLnkgPSB5O1xuICAgICAgICBkYXRhLnJhZGl1cyA9IHJhZGl1cztcbiAgICB9XG4gICAgZHJhd0VsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEudHlwZSA9ICdlbGxpcHNlJztcbiAgICAgICAgZGF0YS5yYWRpdXNYID0gd2lkdGggLyAyO1xuICAgICAgICBkYXRhLnJhZGl1c1kgPSBoZWlnaHQgLyAyO1xuICAgICAgICBkYXRhLnggPSB4IC0gZGF0YS5yYWRpdXNYO1xuICAgICAgICBkYXRhLnkgPSB5IC0gZGF0YS5yYWRpdXNZO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2hhcGUuZGF0YTtcbiAgICB9XG4gICAgY3JlYXRlRGF0YSgpIHtcbiAgICAgICAgY29uc3QgeyBzaGFwZSwgZmlsbCwgc3Ryb2tlIH0gPSB0aGlzO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzaGFwZS5kYXRhKSkge1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzaGFwZS5kYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgc2hhcGUuZGF0YSA9IFtzaGFwZS5kYXRhXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNoYXBlLmRhdGEgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBncmFwaGljc0RhdGEgPSB7IHR5cGU6ICdwYXRoJywgZmlsbCwgc3Ryb2tlIH07XG4gICAgICAgIHNoYXBlLmRhdGEucHVzaChncmFwaGljc0RhdGEpO1xuICAgICAgICByZXR1cm4gZ3JhcGhpY3NEYXRhO1xuICAgIH1cbiAgICBiZWdpblBhdGgoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS5kYXRhID0gW107XG4gICAgICAgIHJldHVybiBkYXRhLmRhdGE7XG4gICAgfVxuICAgIGdldFBhdGgoKSB7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUgfSA9IHRoaXM7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzaGFwZS5kYXRhKSB8fCAhc2hhcGUuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHNoYXBlLmRhdGFbc2hhcGUuZGF0YS5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEuZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2RhdGEvZGF0YSc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvcGF0aCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvc3RyaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9zdHlsZSc7XG5leHBvcnQgKiBmcm9tICcuL2dyYXBoaWNzJztcbmV4cG9ydCAqIGZyb20gJy4vc2hhcGUnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMtc2hhcGUnO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAZTJkL2NvcmUnO1xuaW1wb3J0IHsgQm91bmRzLCBSZWN0YW5nbGUgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BlMmQvcmVzb3VyY2VzJztcbmltcG9ydCB7IEdyYXBoaWNzRGF0YSB9IGZyb20gJy4vZGF0YS9kYXRhJztcbmltcG9ydCBHcmFwaGljcyBmcm9tICcuL2dyYXBoaWNzJztcbmV4cG9ydCBjb25zdCBTSEFQRSA9ICdzaGFwZSc7XG5jb25zdCBib3VuZHMgPSBCb3VuZHMuZW1wdHkoKTtcbmV4cG9ydCB2YXIgU2hhcGU7XG4oZnVuY3Rpb24gKFNoYXBlKSB7XG4gICAgZnVuY3Rpb24gZ2V0R3JhcGhpY3Moc2hhcGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaGljcyhzaGFwZSk7XG4gICAgfVxuICAgIFNoYXBlLmdldEdyYXBoaWNzID0gZ2V0R3JhcGhpY3M7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKHNoYXBlLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBzaGFwZTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBCb3VuZHMuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YVtpXSwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCb3VuZHMuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3aWR0aCA9IGJvdW5kcy5tYXhYIC0gYm91bmRzLm1pblg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGJvdW5kcy5tYXhZIC0gYm91bmRzLm1pblk7XG4gICAgICAgIGNvbnN0IHggPSBib3VuZHMubWluWCArIFBpdm90LmdldFgoc2hhcGUsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IGJvdW5kcy5taW5ZICsgUGl2b3QuZ2V0WShzaGFwZSwgaGVpZ2h0KTtcbiAgICAgICAgcmVzdWx0LnggPSB4O1xuICAgICAgICByZXN1bHQueSA9IHk7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHdpZHRoO1xuICAgICAgICByZXN1bHQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBTaGFwZS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShTaGFwZSB8fCAoU2hhcGUgPSB7fSkpO1xuY29uc3QgcmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIFNoYXBlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChTaGFwZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGhpdFRlc3Qoc2hhcGUsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGxvY2FsIH0gPSBlbmdpbmUucG9pbnRlckV2ZW50cztcbiAgICAgICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzKHNoYXBlLCByZWN0YW5nbGUpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKHJlY3RhbmdsZSwgbG9jYWwpO1xuICAgIH1cbiAgICBTaGFwZUV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChTSEFQRSwgaGl0VGVzdCk7XG4gICAgICAgIEltYWdlUmVzb3VyY2UuaW5pdChlbmdpbmUpO1xuICAgIH1cbiAgICBTaGFwZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFNoYXBlRXh0ZW5zaW9uIHx8IChTaGFwZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BlMmQvY29yZSc7XG5pbXBvcnQgeyBDYW52YXNQYXR0ZXJucyB9IGZyb20gJ0BlMmQvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBGb250IH0gZnJvbSAnLi9mb250JztcbmltcG9ydCB7IFRleHRFeHRlbnNpb24sIFRFWFQgfSBmcm9tICcuL3RleHQnO1xuaW1wb3J0IHsgVGV4dEZvcm1hdCB9IGZyb20gJy4vZm9ybWF0JztcbmNvbnN0IHZhbGlkVGV4dEZvcm1hdCA9IHt9O1xuZXhwb3J0IHZhciBDYW52YXNUZXh0RXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNUZXh0RXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKGNvbXBvbmVudCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG1hdHJpeCwgY29sb3JUcmFuc2Zvcm0gfSA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdGV4dEZvcm1hdCwgYm9yZGVyLCBiYWNrZ3JvdW5kLCB9ID0gY29tcG9uZW50O1xuICAgICAgICBUZXh0Rm9ybWF0LmdldFZhbGlkVGV4dEZvcm1hdCh0ZXh0Rm9ybWF0LCB2YWxpZFRleHRGb3JtYXQpO1xuICAgICAgICBjb25zdCBmb3JtYXRTaXplID0gdmFsaWRUZXh0Rm9ybWF0LnNpemU7XG4gICAgICAgIGNvbnN0IGZvcm1hdExldHRlclNwYWNpbmcgPSB2YWxpZFRleHRGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgY29uc3QgZm9ybWF0TGVhZGluZyA9IHZhbGlkVGV4dEZvcm1hdC5sZWFkaW5nO1xuICAgICAgICBjb25zdCBmb250ID0gRm9udC5nZXRGb250KHZhbGlkVGV4dEZvcm1hdC5mb250KTtcbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gZW5naW5lLnBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgdGV4dFdpZHRoID0gRm9udC5nZXRUZXh0V2lkdGgoZm9udCwgdmFsaWRUZXh0Rm9ybWF0LCBsaW5lcyk7XG4gICAgICAgIGNvbnN0IHRleHRIZWlnaHQgPSBGb250LmdldFRleHRIZWlnaHQodmFsaWRUZXh0Rm9ybWF0LCBsaW5lcyk7XG4gICAgICAgIGNvbnN0IHJlYWxXaWR0aCA9IHdpZHRoID8/IHRleHRXaWR0aDtcbiAgICAgICAgY29uc3QgcmVhbEhlaWdodCA9IGhlaWdodCA/PyB0ZXh0SGVpZ2h0O1xuICAgICAgICBjb25zdCBvZmZzZXRYID0gUGl2b3QuZ2V0WChjb21wb25lbnQsIHJlYWxXaWR0aCk7XG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSBQaXZvdC5nZXRZKGNvbXBvbmVudCwgcmVhbEhlaWdodCk7XG4gICAgICAgIGxldCB5ID0gMDtcbiAgICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICAgICAgY29uc3QgYWxpZ25WZXJ0aWNhbFZhbHVlID0gVGV4dEZvcm1hdC5nZXRWZXJ0aWNhbEFsaWduVmFsdWUodmFsaWRUZXh0Rm9ybWF0LnZlcnRpY2FsQWxpZ24pO1xuICAgICAgICAgICAgeSA9IChoZWlnaHQgLSB0ZXh0SGVpZ2h0KSAqIGFsaWduVmVydGljYWxWYWx1ZTtcbiAgICAgICAgICAgIGlmICh5IDwgMCkge1xuICAgICAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgaWYgKGJhY2tncm91bmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gJyc7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGJhY2tncm91bmQsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5yZWN0KG9mZnNldFgsIG9mZnNldFksIHJlYWxXaWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGJvcmRlciwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuICAgICAgICAgICAgY29udGV4dDJkLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLnJlY3Qob2Zmc2V0WCwgb2Zmc2V0WSwgcmVhbFdpZHRoLCByZWFsSGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0MmQuZm9udCA9IEZvbnQuZ2V0U3R5bGVGb250KHZhbGlkVGV4dEZvcm1hdC5mb250LCBmb3JtYXRTaXplKTtcbiAgICAgICAgY29udGV4dDJkLnRleHRCYXNlbGluZSA9ICdhbHBoYWJldGljJztcbiAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gJyc7XG4gICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4odmFsaWRUZXh0Rm9ybWF0LmNvbG9yLCB2YWxpZFRleHRGb3JtYXQuYWxwaGEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgeSArPSBvZmZzZXRZO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICBjb25zdCBsaW5lV2lkdGggPSBGb250LmdldExpbmVXaWR0aChmb250LCB2YWxpZFRleHRGb3JtYXQsIGxpbmUpO1xuICAgICAgICAgICAgY29uc3QgYWxpZ25WYWx1ZSA9IFRleHRGb3JtYXQuZ2V0QWxpZ25WYWx1ZSh2YWxpZFRleHRGb3JtYXQuYWxpZ24pO1xuICAgICAgICAgICAgbGV0IHggPSAocmVhbFdpZHRoIC0gbGluZVdpZHRoKSAqIGFsaWduVmFsdWU7XG4gICAgICAgICAgICBpZiAoeCA8IDApIHtcbiAgICAgICAgICAgICAgICB4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHggKz0gb2Zmc2V0WDtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGluZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gbGluZS5jaGFyQXQoaik7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kID0gbGluZS5jaGFyQXQoaiArIDEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2UoZm9udCwgZm9ybWF0U2l6ZSwgZmlyc3QsIHNlY29uZCk7XG4gICAgICAgICAgICAgICAgY29udGV4dDJkLmZpbGxUZXh0KGZpcnN0LCB4LCB5ICsgZm9ybWF0U2l6ZSk7XG4gICAgICAgICAgICAgICAgeCArPSBhZHZhbmNlICsgZm9ybWF0TGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHkgKz0gZm9ybWF0U2l6ZSArIGZvcm1hdExlYWRpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzVGV4dEV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgVGV4dEV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoVEVYVCwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzVGV4dEV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc1RleHRFeHRlbnNpb24gfHwgKENhbnZhc1RleHRFeHRlbnNpb24gPSB7fSkpO1xuIiwiY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5leHBvcnQgY29uc3QgRU0gPSAxMDI0O1xuY29uc3QgZm9udHMgPSBuZXcgTWFwKCk7XG5leHBvcnQgdmFyIEZvbnQ7XG4oZnVuY3Rpb24gKEZvbnQpIHtcbiAgICBmdW5jdGlvbiBnZXRTdHlsZUZvbnQoZm9udCwgc2l6ZSkge1xuICAgICAgICByZXR1cm4gYCR7c2l6ZX1weCAke2ZvbnR9YDtcbiAgICB9XG4gICAgRm9udC5nZXRTdHlsZUZvbnQgPSBnZXRTdHlsZUZvbnQ7XG4gICAgZnVuY3Rpb24gbWVhc3VyZVRleHQoZm9udCwgc2l6ZSwgdGV4dCkge1xuICAgICAgICBjb250ZXh0LmZvbnQgPSBnZXRTdHlsZUZvbnQoZm9udCwgc2l6ZSk7XG4gICAgICAgIHJldHVybiBjb250ZXh0Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xuICAgIH1cbiAgICBGb250Lm1lYXN1cmVUZXh0ID0gbWVhc3VyZVRleHQ7XG4gICAgZnVuY3Rpb24gZ2V0Q2hhcldpZHRoKGZvbnQsIGNoYXIpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gZm9udC53aWR0aHMuZ2V0KGNoYXIpO1xuICAgICAgICBpZiAoIXdpZHRoKSB7XG4gICAgICAgICAgICB3aWR0aCA9IG1lYXN1cmVUZXh0KGZvbnQubmFtZSwgRU0sIGNoYXIpO1xuICAgICAgICAgICAgZm9udC53aWR0aHMuc2V0KGNoYXIsIHdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfVxuICAgIEZvbnQuZ2V0Q2hhcldpZHRoID0gZ2V0Q2hhcldpZHRoO1xuICAgIGZ1bmN0aW9uIGdldEtlcm5pbmcoZm9udCwgZmlyc3QsIHNlY29uZCkge1xuICAgICAgICBjb25zdCBwYWlyID0gZmlyc3QgKyBzZWNvbmQ7XG4gICAgICAgIGxldCBrZXJuaW5nID0gZm9udC5rZXJuaW5ncy5nZXQocGFpcik7XG4gICAgICAgIGlmICgha2VybmluZykge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGhTZWNvbmQgPSBnZXRDaGFyV2lkdGgoZm9udCwgc2Vjb25kKTtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoVG90YWwgPSBtZWFzdXJlVGV4dChmb250Lm5hbWUsIEVNLCBmaXJzdCArIHNlY29uZCk7XG4gICAgICAgICAgICBrZXJuaW5nID0gd2lkdGhUb3RhbCAtIHdpZHRoU2Vjb25kO1xuICAgICAgICAgICAgZm9udC5rZXJuaW5ncy5zZXQocGFpciwga2VybmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtlcm5pbmc7XG4gICAgfVxuICAgIEZvbnQuZ2V0S2VybmluZyA9IGdldEtlcm5pbmc7XG4gICAgZnVuY3Rpb24gZ2V0QWR2YW5jZShmb250LCBzaXplLCBmaXJzdCwgc2Vjb25kKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gc2l6ZSAvIEVNO1xuICAgICAgICBjb25zdCB3aWR0aCA9IGdldENoYXJXaWR0aChmb250LCBmaXJzdCk7XG4gICAgICAgIGlmICghc2Vjb25kKSB7XG4gICAgICAgICAgICByZXR1cm4gd2lkdGggKiBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXJuaW5nID0gZ2V0S2VybmluZyhmb250LCBmaXJzdCwgc2Vjb25kKTtcbiAgICAgICAgcmV0dXJuIGtlcm5pbmcgKiBzY2FsZTtcbiAgICB9XG4gICAgRm9udC5nZXRBZHZhbmNlID0gZ2V0QWR2YW5jZTtcbiAgICBmdW5jdGlvbiBnZXRGb250KG5hbWUpIHtcbiAgICAgICAgbGV0IGZvbnQgPSBmb250cy5nZXQobmFtZSk7XG4gICAgICAgIGlmICghZm9udCkge1xuICAgICAgICAgICAgZm9udCA9IHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHdpZHRoczogbmV3IE1hcCgpLFxuICAgICAgICAgICAgICAgIGtlcm5pbmdzOiBuZXcgTWFwKCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9udHMuc2V0KG5hbWUsIGZvbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb250O1xuICAgIH1cbiAgICBGb250LmdldEZvbnQgPSBnZXRGb250O1xuICAgIGZ1bmN0aW9uIGdldExpbmVXaWR0aChmb250LCBmb3JtYXQsIGxpbmUpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdCA9IGxpbmUuY2hhckF0KGkpO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kID0gbGluZS5jaGFyQXQoaSArIDEpO1xuICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IGdldEFkdmFuY2UoZm9udCwgZm9ybWF0LnNpemUsIGZpcnN0LCBzZWNvbmQpO1xuICAgICAgICAgICAgd2lkdGggKz0gYWR2YW5jZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0LmxldHRlclNwYWNpbmcgJiYgbGluZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB3aWR0aCArPSBmb3JtYXQubGV0dGVyU3BhY2luZyAqIChsaW5lLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gICAgRm9udC5nZXRMaW5lV2lkdGggPSBnZXRMaW5lV2lkdGg7XG4gICAgZnVuY3Rpb24gZ2V0VGV4dFdpZHRoKGZvbnQsIGZvcm1hdCwgbGluZXMpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgY29uc3QgbGluZVdpZHRoID0gZ2V0TGluZVdpZHRoKGZvbnQsIGZvcm1hdCwgbGluZSk7XG4gICAgICAgICAgICBpZiAod2lkdGggPCBsaW5lV2lkdGgpIHtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfVxuICAgIEZvbnQuZ2V0VGV4dFdpZHRoID0gZ2V0VGV4dFdpZHRoO1xuICAgIGZ1bmN0aW9uIGdldFRleHRIZWlnaHQoZm9ybWF0LCBsaW5lcykge1xuICAgICAgICBsZXQgaGVpZ2h0ID0gZm9ybWF0LnNpemUgKiBsaW5lcy5sZW5ndGg7XG4gICAgICAgIGlmIChmb3JtYXQubGVhZGluZyAmJiBsaW5lcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBoZWlnaHQgKz0gZm9ybWF0LmxlYWRpbmcgKiAobGluZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICB9XG4gICAgRm9udC5nZXRUZXh0SGVpZ2h0ID0gZ2V0VGV4dEhlaWdodDtcbn0pKEZvbnQgfHwgKEZvbnQgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBUZXh0Rm9ybWF0O1xuKGZ1bmN0aW9uIChUZXh0Rm9ybWF0KSB7XG4gICAgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCA9IHtcbiAgICAgICAgZm9udDogJ2FyaWFsJyxcbiAgICAgICAgc2l6ZTogMTUsXG4gICAgICAgIGNvbG9yOiAwLFxuICAgICAgICBhbHBoYTogMSxcbiAgICAgICAgYm9sZDogZmFsc2UsXG4gICAgICAgIGl0YWxpYzogZmFsc2UsXG4gICAgICAgIHVuZGVybGluZTogZmFsc2UsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgICAgIGxlYWRpbmc6IDAsXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgIH07XG4gICAgZnVuY3Rpb24gZ2V0VmFsaWRUZXh0Rm9ybWF0KHNvdXJjZSwgcmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdC5mb250ID0gc291cmNlPy5mb250ID8/IFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQuZm9udDtcbiAgICAgICAgcmVzdWx0LnNpemUgPSBzb3VyY2U/LnNpemUgPz8gVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdC5zaXplO1xuICAgICAgICByZXN1bHQuY29sb3IgPSBzb3VyY2U/LmNvbG9yID8/IFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQuY29sb3I7XG4gICAgICAgIHJlc3VsdC5hbHBoYSA9IHNvdXJjZT8uYWxwaGEgPz8gVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdC5hbHBoYTtcbiAgICAgICAgcmVzdWx0LmJvbGQgPSBzb3VyY2U/LmJvbGQgPz8gVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdC5ib2xkO1xuICAgICAgICByZXN1bHQuaXRhbGljID0gc291cmNlPy5pdGFsaWMgPz8gVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdC5pdGFsaWM7XG4gICAgICAgIHJlc3VsdC51bmRlcmxpbmUgPSBzb3VyY2U/LnVuZGVybGluZSA/PyBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LnVuZGVybGluZTtcbiAgICAgICAgcmVzdWx0LmxldHRlclNwYWNpbmcgPSBzb3VyY2U/LmxldHRlclNwYWNpbmcgPz8gVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICByZXN1bHQubGVhZGluZyA9IHNvdXJjZT8ubGVhZGluZyA/PyBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LmxlYWRpbmc7XG4gICAgICAgIHJlc3VsdC5hbGlnbiA9IHNvdXJjZT8uYWxpZ24gPz8gVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdC5hbGlnbjtcbiAgICAgICAgcmVzdWx0LnZlcnRpY2FsQWxpZ24gPSBzb3VyY2U/LnZlcnRpY2FsQWxpZ24gPz8gVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdC52ZXJ0aWNhbEFsaWduO1xuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmdldFZhbGlkVGV4dEZvcm1hdCA9IGdldFZhbGlkVGV4dEZvcm1hdDtcbiAgICBmdW5jdGlvbiBnZXRBbGlnblZhbHVlKGFsaWduKSB7XG4gICAgICAgIHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOiByZXR1cm4gMDtcbiAgICAgICAgICAgIGNhc2UgJ2NlbnRlcic6IHJldHVybiAwLjU7XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6IHJldHVybiAxO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dEZvcm1hdC5nZXRBbGlnblZhbHVlID0gZ2V0QWxpZ25WYWx1ZTtcbiAgICBmdW5jdGlvbiBnZXRWZXJ0aWNhbEFsaWduVmFsdWUoYWxpZ24pIHtcbiAgICAgICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgICAgICAgY2FzZSAndG9wJzogcmV0dXJuIDA7XG4gICAgICAgICAgICBjYXNlICdtaWRkbGUnOiByZXR1cm4gMC41O1xuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzogcmV0dXJuIDE7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmdldFZlcnRpY2FsQWxpZ25WYWx1ZSA9IGdldFZlcnRpY2FsQWxpZ25WYWx1ZTtcbn0pKFRleHRGb3JtYXQgfHwgKFRleHRGb3JtYXQgPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi90ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vZm9ybWF0JztcbmV4cG9ydCAqIGZyb20gJy4vZm9udCc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy10ZXh0JztcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBUZXh0Rm9ybWF0IH0gZnJvbSAnLi9mb3JtYXQnO1xuaW1wb3J0IHsgRm9udCB9IGZyb20gJy4vZm9udCc7XG5leHBvcnQgY29uc3QgVEVYVCA9ICd0ZXh0JztcbmNvbnN0IHZhbGlkVGV4dEZvcm1hdCA9IHt9O1xuZXhwb3J0IHZhciBUZXh0O1xuKGZ1bmN0aW9uIChUZXh0KSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGNvbXBvbmVudCwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGxldCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgeyB0ZXh0Rm9ybWF0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIFRleHRGb3JtYXQuZ2V0VmFsaWRUZXh0Rm9ybWF0KHRleHRGb3JtYXQsIHZhbGlkVGV4dEZvcm1hdCk7XG4gICAgICAgIGlmICghd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvbnQgPSBGb250LmdldEZvbnQodmFsaWRUZXh0Rm9ybWF0LmZvbnQpO1xuICAgICAgICAgICAgd2lkdGggPSBGb250LmdldFRleHRXaWR0aChmb250LCB2YWxpZFRleHRGb3JtYXQsIGxpbmVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhlaWdodCkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gRm9udC5nZXRUZXh0SGVpZ2h0KHZhbGlkVGV4dEZvcm1hdCwgbGluZXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGNvbXBvbmVudCwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShjb21wb25lbnQsIGhlaWdodCk7XG4gICAgICAgIGJvdW5kcy54ID0geDtcbiAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgYm91bmRzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgVGV4dC5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShUZXh0IHx8IChUZXh0ID0ge30pKTtcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBUZXh0RXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChUZXh0RXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdCh0ZXh0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBsb2NhbCB9ID0gZW5naW5lLnBvaW50ZXJFdmVudHM7XG4gICAgICAgIFRleHQuY2FsY3VsYXRlQm91bmRzKHRleHQsIGJvdW5kcyk7XG4gICAgICAgIHJldHVybiBSZWN0YW5nbGUuY29udGFpbnMoYm91bmRzLCBsb2NhbCk7XG4gICAgfVxuICAgIFRleHRFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoVEVYVCwgaGl0VGVzdCk7XG4gICAgfVxuICAgIFRleHRFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShUZXh0RXh0ZW5zaW9uIHx8IChUZXh0RXh0ZW5zaW9uID0ge30pKTtcbiIsImV4cG9ydCBjb25zdCBMSU5FQVIgPSAnbGluZWFyJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUMgPSAncXVhZHJhdGljJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUNfSU4gPSAncXVhZHJhdGljaW4nO1xuZXhwb3J0IGNvbnN0IFFVQURSQVRJQ19PVVQgPSAncXVhZHJhdGljb3V0JztcbmV4cG9ydCBjb25zdCBDVUJJQyA9ICdjdWJpYyc7XG5leHBvcnQgY29uc3QgQ1VCSUNfSU4gPSAnY3ViaWNpbic7XG5leHBvcnQgY29uc3QgQ1VCSUNfT1VUID0gJ2N1Ymljb3V0JztcbmV4cG9ydCBjb25zdCBRVUFSVElDID0gJ3F1YXJ0aWMnO1xuZXhwb3J0IGNvbnN0IFFVQVJUSUNfSU4gPSAncXVhcnRpY2luJztcbmV4cG9ydCBjb25zdCBRVUFSVElDX09VVCA9ICdxdWFydGljb3V0JztcbmV4cG9ydCBjb25zdCBRVUlOVElDID0gJ3F1aW50aWMnO1xuZXhwb3J0IGNvbnN0IFFVSU5USUNfSU4gPSAncXVpbnRpY2luJztcbmV4cG9ydCBjb25zdCBRVUlOVElDX09VVCA9ICdxdWludGljb3V0JztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMID0gJ3F1aW50aWMnO1xuZXhwb3J0IGNvbnN0IFNJTlVTT0lEQUxfSU4gPSAncXVpbnRpY2luJztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMX09VVCA9ICdxdWludGljb3V0JztcbmV4cG9ydCBjb25zdCBFWFBPTkVOVElBTCA9ICdleHBvbmVudGlhbCc7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUxfSU4gPSAnZXhwb25lbnRpYWxpbic7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUxfT1VUID0gJ2V4cG9uZW50aWFsb3V0JztcbmV4cG9ydCBjb25zdCBDSVJDVUxBUiA9ICdjaXJjdWxhcic7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVJfSU4gPSAnY2lyY3VsYXJpbic7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVJfT1VUID0gJ2NpcmN1bGFyb3V0JztcbmV4cG9ydCBjb25zdCBFTEFTVElDID0gJ2VsYXN0aWMnO1xuZXhwb3J0IGNvbnN0IEVMQVNUSUNfSU4gPSAnZWxhc3RpY2luJztcbmV4cG9ydCBjb25zdCBFTEFTVElDX09VVCA9ICdlbGFzdGljb3V0JztcbmV4cG9ydCBjb25zdCBCQUNLID0gJ2JhY2snO1xuZXhwb3J0IGNvbnN0IEJBQ0tfSU4gPSAnYmFja2luJztcbmV4cG9ydCBjb25zdCBCQUNLX09VVCA9ICdiYWNrb3V0JztcbmV4cG9ydCBjb25zdCBCT1VOQ0UgPSAnYm91bmNlJztcbmV4cG9ydCBjb25zdCBCT1VOQ0VfSU4gPSAnYm91bmNlaW4nO1xuZXhwb3J0IGNvbnN0IEJPVU5DRV9PVVQgPSAnYm91bmNlb3V0JztcbmV4cG9ydCBjb25zdCBlYXNpbmcgPSB7XG4gICAgW0xJTkVBUl06ICh2YWx1ZSkgPT4gdmFsdWUsXG4gICAgW1FVQURSQVRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoLS12YWx1ZSAqICh2YWx1ZSAtIDIpIC0gMSk7XG4gICAgfSxcbiAgICBbUVVBRFJBVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVQURSQVRJQ19PVVRdOiAodmFsdWUpID0+ICh2YWx1ZSAqICgyIC0gdmFsdWUpKSxcbiAgICBbQ1VCSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqIHZhbHVlICsgMik7XG4gICAgfSxcbiAgICBbQ1VCSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtDVUJJQ19PVVRdOiAodmFsdWUpID0+ICgtLXZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDEpLFxuICAgIFtRVUFSVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlIC0gMik7XG4gICAgfSxcbiAgICBbUVVBUlRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVBUlRJQ19PVVRdOiAodmFsdWUpID0+ICgxIC0gLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVSU5USUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAyKTtcbiAgICB9LFxuICAgIFtRVUlOVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVSU5USUNfT1VUXTogKHZhbHVlKSA9PiAoLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMSksXG4gICAgW1NJTlVTT0lEQUxdOiAodmFsdWUpID0+ICgwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiB2YWx1ZSkpKSxcbiAgICBbU0lOVVNPSURBTF9JTl06ICh2YWx1ZSkgPT4gKDEgLSBNYXRoLmNvcygodmFsdWUgKiBNYXRoLlBJKSAvIDIpKSxcbiAgICBbU0lOVVNPSURBTF9PVVRdOiAodmFsdWUpID0+IChNYXRoLnNpbigodmFsdWUgKiBNYXRoLlBJKSAvIDIpKSxcbiAgICBbRVhQT05FTlRJQUxdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogTWF0aC5wb3coMTAyNCwgdmFsdWUgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKC1NYXRoLnBvdygyLCAtMTAgKiAodmFsdWUgLSAxKSkgKyAyKTtcbiAgICB9LFxuICAgIFtFWFBPTkVOVElBTF9JTl06ICh2YWx1ZSkgPT4gKHZhbHVlID09PSAwID8gMCA6IE1hdGgucG93KDEwMjQsIHZhbHVlIC0gMSkpLFxuICAgIFtFWFBPTkVOVElBTF9PVVRdOiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coMiwgLTEwICogdmFsdWUpKSxcbiAgICBbQ0lSQ1VMQVJdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHZhbHVlIC09IDIpICogdmFsdWUpICsgMSk7XG4gICAgfSxcbiAgICBbQ0lSQ1VMQVJfSU5dOiAodmFsdWUpID0+ICgxIC0gTWF0aC5zcXJ0KDEgLSB2YWx1ZSAqIHZhbHVlKSksXG4gICAgW0NJUkNVTEFSX09VVF06ICh2YWx1ZSkgPT4gTWF0aC5zcXJ0KDEgLSAtLXZhbHVlICogdmFsdWUpLFxuICAgIFtFTEFTVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSAqPSAyO1xuICAgICAgICBpZiAodmFsdWUgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gLTAuNSAqIE1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogTWF0aC5wb3coMiwgLTEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG4gICAgfSxcbiAgICBbRUxBU1RJQ19JTl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC1NYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG4gICAgfSxcbiAgICBbRUxBU1RJQ19PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLnBvdygyLCAtMTAgKiB2YWx1ZSkgKiBNYXRoLnNpbigodmFsdWUgLSAwLjEpICogNSAqIE1hdGguUEkpICsgMTtcbiAgICB9LFxuICAgIFtCQUNLXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4ICogMS41MjU7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogKHZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlIC0gcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlICsgcykgKyAyKTtcbiAgICB9LFxuICAgIFtCQUNLX0lOXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gdmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgLSBzKTtcbiAgICB9LFxuICAgIFtCQUNLX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICAgICAgcmV0dXJuIC0tdmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgKyBzKSArIDE7XG4gICAgfSxcbiAgICBbQk9VTkNFXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDAuNSkge1xuICAgICAgICAgICAgcmV0dXJuIGVhc2luZ1tCT1VOQ0VfSU5dKHZhbHVlICogMikgKiAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVhc2luZ1tCT1VOQ0VfT1VUXSh2YWx1ZSAqIDIgLSAxKSAqIDAuNSArIDAuNTtcbiAgICB9LFxuICAgIFtCT1VOQ0VfSU5dOiAodmFsdWUpID0+ICgxIC0gZWFzaW5nW0JPVU5DRV9PVVRdKDEgLSB2YWx1ZSkpLFxuICAgIFtCT1VOQ0VfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDEgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPCAyIC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAxLjUgLyAyLjc1KSAqIHZhbHVlICsgMC43NTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPCAyLjUgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDIuMjUgLyAyLjc1KSAqIHZhbHVlICsgMC45Mzc1O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMi42MjUgLyAyLjc1KSAqIHZhbHVlICsgMC45ODQzNzU7XG4gICAgfSxcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3R3ZWVuJztcbmV4cG9ydCAqIGZyb20gJy4vZWFzaW5nJztcbiIsImltcG9ydCB7IGVhc2luZywgTElORUFSIH0gZnJvbSAnLi9lYXNpbmcnO1xuZXhwb3J0IGNvbnN0IFRXRUVOID0gJ3R3ZWVuJztcbmV4cG9ydCB2YXIgVHdlZW5FeHRlbnNpb247XG4oZnVuY3Rpb24gKFR3ZWVuRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbXBvbmVudCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgdHdlZW4gfSA9IGNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgeyBwaGFzZXMgfSA9IHR3ZWVuO1xuICAgICAgICBpZiAoIXBoYXNlcz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnQW5pbWF0aW9uIHBhcnRzIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0d2Vlbi50aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHR3ZWVuLnRpbWUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHR3ZWVuLnRpbWUgKz0gZW5naW5lLnVwZGF0ZXIudGltZTtcbiAgICAgICAgY29uc3QgeyB0aW1lIH0gPSB0d2VlbjtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIHBoYXNlcy5mb3JFYWNoKChwaGFzZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFwaGFzZS50aW1lKSB7XG4gICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ0FuaW1hdGlvbiB0aW1lIG5vdCBzZXQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGhhc2Uub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBwaGFzZS5vZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlYXNpbmdOYW1lID0gcGhhc2U/LmVhc2luZz8udG9Mb3dlckNhc2UoKSA/PyBMSU5FQVI7XG4gICAgICAgICAgICBjb25zdCBlYXNpbmdNZXRob2QgPSBlYXNpbmdbZWFzaW5nTmFtZV07XG4gICAgICAgICAgICBpZiAoIWVhc2luZ01ldGhvZCkge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBVbmtub3duIGVhc2luZyB0eXBlOiAke2Vhc2luZ31gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICh0aW1lIC0gb2Zmc2V0KSAvIHBoYXNlLnRpbWU7XG4gICAgICAgICAgICBvZmZzZXQgKz0gcGhhc2UudGltZTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IDAgfHwgdmFsdWUgPiAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZWFzaW5nVmFsdWUgPSBlYXNpbmdNZXRob2QodmFsdWUpO1xuICAgICAgICAgICAgaWYgKCFwaGFzZS50bykge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdBbmltYXRpb24gXCJ0b1wiIHN0YXRlIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcGhhc2UuZnJvbSkge1xuICAgICAgICAgICAgICAgIHBoYXNlLmZyb20gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdG8sIGZyb20gfSA9IHBoYXNlO1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBjb21wb25lbnQ7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0bykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZyb21ba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21ba2V5XSA9IHN0YXRlW2tleV0gPz8gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZnJvbVZhbHVlID0gZnJvbVtrZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvVmFsdWUgPSB0b1trZXldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZnJvbVZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdG9WYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVWYWx1ZSA9IGZyb21WYWx1ZSArIGVhc2luZ1ZhbHVlICogKHRvVmFsdWUgLSBmcm9tVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gc3RhdGVWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0d2Vlbi5sb29wICYmIHR3ZWVuLnRpbWUgPiBvZmZzZXQpIHtcbiAgICAgICAgICAgIHR3ZWVuLnRpbWUgPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFR3ZWVuRXh0ZW5zaW9uLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5wcm9wZXJ0aWVzLnNldChUV0VFTiwgdXBkYXRlKTtcbiAgICB9XG4gICAgVHdlZW5FeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShUd2VlbkV4dGVuc2lvbiB8fCAoVHdlZW5FeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgQUJJTElUWV9XT0xGIH0gZnJvbSAnLi9hc3NldHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN1cnNpdmUoKSB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHR4OiAzMCxcblx0XHRcdHk6IDMwLFxuXHRcdFx0c2NhbGVYOiAwLjksXG5cdFx0XHRzY2FsZVk6IDAuOSxcblx0XHRcdHJvdGF0aW9uOiAwLjIsXG5cdFx0XHRhbHBoYTogMC45LFxuXHRcdFx0Y2hpbGRyZW46IFt7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQUJJTElUWV9XT0xGLFxuXHRcdFx0XHRzY2FsZTogMC4zLFxuXHRcdFx0fV0sXG5cdFx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdFx0dGhpcy5yb3RhdGlvbiArPSB0aW1lICogMC4wNTtcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblxuXHRjb250YWluZXIuY2hpbGRyZW4uY2hpbGRyZW4ucHVzaChjb250YWluZXIgYXMgbmV2ZXIpO1xuXG5cdHJldHVybiBjb250YWluZXI7XG59XG4iLCJjb25zdCBJTUFHRV9BU1NFVFMgPSAnYXNzZXRzLyc7XG5cbmV4cG9ydCBjb25zdCBBTklNQUxJU1QgPSAnaWQ6YW5pbWFsaXN0JztcbmV4cG9ydCBjb25zdCBBUkNIRVIgPSAnaWQ6YXJjaGVyJztcblxuZXhwb3J0IGNvbnN0IEFOSU1BTElTVF9JTUFHRSA9IGAke0lNQUdFX0FTU0VUU31BbmltYWxpc3RGb3gxX2ltYWdlLnBuZ2A7XG5leHBvcnQgY29uc3QgQVJDSEVSX0lNQUdFID0gYCR7SU1BR0VfQVNTRVRTfUFyY2hlcjJfaHVudGVyX2ltYWdlLnBuZ2A7XG5cbmV4cG9ydCBjb25zdCBBQklMSVRZX0ZPWCA9IGAke0lNQUdFX0FTU0VUU31BbmltYWxpc3RBYmlsaXR5X0ZveC5wbmdgO1xuZXhwb3J0IGNvbnN0IEFCSUxJVFlfV09MRiA9IGAke0lNQUdFX0FTU0VUU31BbmltYWxpc3RBYmlsaXR5X1dvbGYucG5nYDtcblxuZXhwb3J0IGNvbnN0IEJBQ0tHUk9VTkQgPSBgJHtJTUFHRV9BU1NFVFN9anVuZ2xlX2JhY2tncm91bmQuanBnYDtcblxuZXhwb3J0IGNvbnN0IFRFU1RfQ0FOVkFTID0gJ3Rlc3QuY2FudmFzJztcbiIsImltcG9ydCB7IENhbnZhc0VuZ2luZSB9IGZyb20gJ0BlMmQvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBFbmdpbmVNb2R1bGUgfSBmcm9tICdAZTJkL2NvcmUnO1xuaW1wb3J0IHsgQ2FudmFzVGV4dEV4dGVuc2lvbiB9IGZyb20gJ0BlMmQvdGV4dCc7XG5pbXBvcnQgeyBDdXN0b21JbWFnZUV4dGVuc2lvbiB9IGZyb20gJy4vaW1hZ2UnO1xuaW1wb3J0IEN1c3RvbVBsYXRmb3JtIGZyb20gJy4vcGxhdGZvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21FbmdpbmUgZXh0ZW5kcyBDYW52YXNFbmdpbmUge1xuXHRjb25zdHJ1Y3Rvcihtb2R1bGU/OiBFbmdpbmVNb2R1bGUpIHtcblx0XHRpZiAoIW1vZHVsZSkge1xuXHRcdFx0bW9kdWxlID0ge307XG5cdFx0fVxuXG5cdFx0bW9kdWxlLlBsYXRmb3JtID0gbW9kdWxlLlBsYXRmb3JtID8/IEN1c3RvbVBsYXRmb3JtO1xuXG5cdFx0c3VwZXIobW9kdWxlKTtcblxuXHRcdENhbnZhc1RleHRFeHRlbnNpb24uaW5pdCh0aGlzKTtcblx0XHRDdXN0b21JbWFnZUV4dGVuc2lvbi5pbml0KHRoaXMpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDYW52YXNFbmdpbmUsIENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnQGUyZC9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSwgSW1hZ2UgfSBmcm9tICdAZTJkL2ltYWdlJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAZTJkL3Jlc291cmNlcyc7XG5cbmV4cG9ydCBuYW1lc3BhY2UgQ3VzdG9tSW1hZ2VFeHRlbnNpb24ge1xuXHRleHBvcnQgZnVuY3Rpb24gcmVuZGVyKGltYWdlOiBJbWFnZSwgZW5naW5lOiBDYW52YXNFbmdpbmUpOiB2b2lkIHtcblx0XHRpZiAoIWltYWdlLnNyYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHsgbWF0cml4LCBjb2xvclRyYW5zZm9ybSB9ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcblxuXHRcdGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoaW1hZ2Uuc3JjKSBhcyBJbWFnZVJlc291cmNlIHwgbnVsbDtcblxuXHRcdGlmICghcmVzb3VyY2U/LmxvYWRlZCB8fCAhcmVzb3VyY2U/LmltYWdlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29udGV4dDJkID0gKGVuZ2luZS5wbGF0Zm9ybSBhcyBDYW52YXNQbGF0Zm9ybSkuZ2V0Q29udGV4dCgpO1xuXG5cdFx0Y29udGV4dDJkLnNldFRyYW5zZm9ybShcblx0XHRcdG1hdHJpeC5hLFxuXHRcdFx0bWF0cml4LmIsXG5cdFx0XHRtYXRyaXguYyxcblx0XHRcdG1hdHJpeC5kLFxuXHRcdFx0bWF0cml4LnR4LFxuXHRcdFx0bWF0cml4LnR5LFxuXHRcdCk7XG5cblx0XHRjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuXHRcdGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG5cdFx0Y29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG5cblx0XHRjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcblx0XHRjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnbGlnaHRncmF5Jztcblx0XHRjb250ZXh0MmQuc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcblx0fVxuXG5cdGV4cG9ydCBmdW5jdGlvbiBpbml0KGVuZ2luZTogQ2FudmFzRW5naW5lKSB7XG5cdFx0SW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuXHRcdGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoSU1BR0UsIHJlbmRlcik7XG5cdH1cbn1cbiIsImltcG9ydCB7IENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnQGUyZC9jYW52YXMtZW5naW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tUGxhdGZvcm0gZXh0ZW5kcyBDYW52YXNQbGF0Zm9ybSB7XG5cdGNsZWFyKCkge1xuXHRcdGNvbnN0IGNvbnRleHQyZCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnYmxhY2snO1xuXHRcdGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcblx0XHRjb250ZXh0MmQuZmlsbFJlY3QoMCwgMCwgY29udGV4dDJkLmNhbnZhcy53aWR0aCwgY29udGV4dDJkLmNhbnZhcy5oZWlnaHQpO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcblx0fVxufVxuIiwiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAZTJkL3Jlc291cmNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVJlc291cmNlTWFuYWdlciB7XG5cdHJlYWRvbmx5IGFsaWFzZXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXHRyZWFkb25seSByZXNvdXJjZXMgPSBuZXcgTWFwPHN0cmluZywgSW1hZ2VSZXNvdXJjZT4oKTtcblxuXHRyZXNvbHZlID0gKGFzc2V0OiBzdHJpbmcsIGVuZ2luZTogRW5naW5lKTogSW1hZ2VSZXNvdXJjZSB8IG51bGwgPT4ge1xuXHRcdGlmIChhc3NldC5pbmRleE9mKCdpZDonKSA9PT0gMCkge1xuXHRcdFx0Y29uc3QgaWQgPSBhc3NldC5zbGljZSgzKTtcblx0XHRcdGxldCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VzLmdldChpZCkgYXMgSW1hZ2VSZXNvdXJjZTtcblx0XHRcdGlmICghcmVzb3VyY2UpIHtcblx0XHRcdFx0Y29uc3QgdXJsID0gdGhpcy5hbGlhc2VzLmdldChpZCk7XG5cdFx0XHRcdGlmICh1cmwpIHtcblx0XHRcdFx0XHRyZXNvdXJjZSA9IEltYWdlUmVzb3VyY2UucmVzb2x2ZSh1cmwsIGVuZ2luZSkgYXMgSW1hZ2VSZXNvdXJjZTtcblx0XHRcdFx0XHR0aGlzLnJlc291cmNlcy5zZXQoaWQsIHJlc291cmNlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbmdpbmUuZGVidWcud2FybmluZyhgUmVzb3VyY2Ugd2l0aCBpZDogJHthc3NldH0gbm90IGZvdW5kYCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZXNvdXJjZTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRpbml0KGVuZ2luZTogRW5naW5lKSB7XG5cdFx0ZW5naW5lLnJlc291cmNlcy5yZXNvbHZlcnMuYWRkKHRoaXMucmVzb2x2ZSk7XG5cdH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgU3RhdGlzdGljcyB7XG5cdGdldFJlbmRlclRpbWUoKTogbnVtYmVyO1xuXHRnZXRVcGRhdGVUaW1lKCk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZwcyhzdGF0aXN0aWNzOiBTdGF0aXN0aWNzKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHRleHQ6ICdmcHMnLFxuXHRcdGZyYW1lczogMCxcblx0XHRmcmFtZVRpbWU6IDAsXG5cdFx0dXBkYXRlVGltZTogMCxcblx0XHRyZW5kZXJUaW1lOiAwLFxuXHRcdHRleHRGb3JtYXQ6IHtcblx0XHRcdHNpemU6IDIwLFxuXHRcdFx0Y29sb3I6IDB4ZmZmZmZmLFxuXHRcdH0sXG5cdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLmZyYW1lVGltZSArPSB0aW1lO1xuXHRcdFx0dGhpcy51cGRhdGVUaW1lICs9IHN0YXRpc3RpY3MuZ2V0VXBkYXRlVGltZSgpO1xuXHRcdFx0dGhpcy5yZW5kZXJUaW1lICs9IHN0YXRpc3RpY3MuZ2V0UmVuZGVyVGltZSgpO1xuXHRcdFx0dGhpcy5mcmFtZXMrKztcblx0XHRcdGlmICh0aGlzLmZyYW1lVGltZSA+PSAxKSB7XG5cdFx0XHRcdGNvbnN0IGZyYW1lVGltZSA9IE1hdGguY2VpbCgxMDAwICogdGhpcy5mcmFtZVRpbWUgLyB0aGlzLmZyYW1lcyk7XG5cdFx0XHRcdGNvbnN0IHVwZGF0ZVRpbWUgPSAodGhpcy51cGRhdGVUaW1lIC8gdGhpcy5mcmFtZXMpLnRvRml4ZWQoMik7XG5cdFx0XHRcdGNvbnN0IHJlbmRlclRpbWUgPSAodGhpcy5yZW5kZXJUaW1lIC8gdGhpcy5mcmFtZXMpLnRvRml4ZWQoMik7XG5cdFx0XHRcdHRoaXMudGV4dCA9IGBmcHM6ICR7dGhpcy5mcmFtZXN9LCAke2ZyYW1lVGltZX0gbXNcXG51cGRhdGU6ICR7dXBkYXRlVGltZX0gbXNcXG5yZW5kZXI6ICR7cmVuZGVyVGltZX0gbXNgO1xuXHRcdFx0XHR0aGlzLmZyYW1lVGltZSA9IDA7XG5cdFx0XHRcdHRoaXMudXBkYXRlVGltZSA9IDA7XG5cdFx0XHRcdHRoaXMucmVuZGVyVGltZSA9IDA7XG5cdFx0XHRcdHRoaXMuZnJhbWVzID0gMDtcblx0XHRcdH1cblx0XHR9LFxuXHR9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHtcblx0QUJJTElUWV9GT1gsIEFCSUxJVFlfV09MRiwgQU5JTUFMSVNULCBBUkNIRVIsIEJBQ0tHUk9VTkQsXG59IGZyb20gJy4vYXNzZXRzJztcbmltcG9ydCBhcnRpZmFjdCBmcm9tICcuL2FydGlmYWN0JztcbmltcG9ydCB7IGZwcywgU3RhdGlzdGljcyB9IGZyb20gJy4vZnBzJztcbmltcG9ydCB7IHVuaXQsIFVuaXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi91bml0JztcblxuaW50ZXJmYWNlIE1haW4ge1xuXHRzdGFydCgpOiB2b2lkO1xuXHRba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oc3RhdGlzdGljczogU3RhdGlzdGljcyk6IE1haW4ge1xuXHRmdW5jdGlvbiBvblVuaXRDbGljayhkYXRhOiBVbml0UHJvcGVydGllcykge1xuXHRcdGRhdGEuaGVhbHRoID0gTWF0aC5yYW5kb20oKTtcblx0XHRjb25zb2xlLmxvZygnb25Vbml0Q2xpY2snLCBkYXRhLm5hbWUpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0YmFja2dyb3VuZDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEJBQ0tHUk9VTkQsXG5cdFx0XHRcdHNjYWxlWDogMSxcblx0XHRcdFx0c2NhbGVZOiAxLFxuXHRcdFx0fSxcblx0XHRcdGZpZ3VyZToge1xuXHRcdFx0XHR0eXBlOiAnc2hhcGUnLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3JlY3QnLFxuXHRcdFx0XHRcdHg6IDAsXG5cdFx0XHRcdFx0eTogMCxcblx0XHRcdFx0XHR3aWR0aDogMTAwLFxuXHRcdFx0XHRcdGhlaWdodDogMTAwLFxuXHRcdFx0XHRcdGZpbGw6IDB4ZmYwMGZmLFxuXHRcdFx0XHRcdHN0cm9rZToge1xuXHRcdFx0XHRcdFx0dGhpY2tuZXNzOiAyLFxuXHRcdFx0XHRcdFx0ZmlsbDogMHgwMGZmMDAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRzaGFwZXM6IHtcblx0XHRcdFx0dHlwZTogJ3NoYXBlJyxcblx0XHRcdFx0ZGF0YTogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdjaXJjbGUnLFxuXHRcdFx0XHRcdFx0eDogMTAwLFxuXHRcdFx0XHRcdFx0eTogMTAwLFxuXHRcdFx0XHRcdFx0cmFkaXVzOiA1MCxcblx0XHRcdFx0XHRcdGZpbGw6IHsgdHlwZTogJ3NvbGlkJywgY29sb3I6IDB4ZmZmZjAwLCBhbHBoYTogMC41IH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAncGF0aCcsXG5cdFx0XHRcdFx0XHRkYXRhOiAnTSAxMCAxMCBIIDkwIFYgOTAgSCAxMCBaJyxcblx0XHRcdFx0XHRcdGZpbGw6IDB4ZmYwMGZmLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ3BhdGgnLFxuXHRcdFx0XHRcdFx0ZGF0YTogW1xuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdtb3ZlVG8nLCB4OiAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDEwMCwgeTogMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAxMDAsIHk6IDEwMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAwLCB5OiAxMDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMCwgeTogMCB9LFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdGZpbGw6IDB4ZmYwMGZmLFxuXHRcdFx0XHRcdFx0c3Ryb2tlOiAweDAwMDAwMCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHVuaXRzOiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdHVuaXQoe1xuXHRcdFx0XHRcdFx0bmFtZTogJ0FyY2hlcicsIGhlYWx0aDogMSwgaW1hZ2U6IEFSQ0hFUiwgb25DbGljazogb25Vbml0Q2xpY2ssXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0dW5pdCh7XG5cdFx0XHRcdFx0XHRuYW1lOiAnQW5pbWFsaXN0JywgaGVhbHRoOiAxLCBpbWFnZTogQU5JTUFMSVNULCBvbkNsaWNrOiBvblVuaXRDbGljayxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHRhcnRpZmFjdDoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0eDogMzAwLFxuXHRcdFx0XHR5OiAzNTAsXG5cdFx0XHRcdGNoaWxkcmVuOiBbYXJ0aWZhY3QoKV0sXG5cdFx0XHR9LFxuXHRcdFx0bWFwOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHk6IDQ1MCxcblx0XHRcdFx0c2NhbGVYOiAwLjIsXG5cdFx0XHRcdHNjYWxlWTogMC4yLFxuXHRcdFx0XHRhbHBoYTogMC41LFxuXHRcdFx0XHRzcmM6ICd0ZXN0LmNhbnZhcycsXG5cdFx0XHRcdG9uUG9pbnRlck92ZXIoKSB7XG5cdFx0XHRcdFx0dGhpcy5hbHBoYSA9IDE7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uUG9pbnRlck91dCgpIHtcblx0XHRcdFx0XHR0aGlzLmFscGhhID0gMC41O1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGFiaWxpdHlGb3g6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBBQklMSVRZX0ZPWCxcblx0XHRcdFx0eDogNDUwLFxuXHRcdFx0XHR5OiA1MDAsXG5cdFx0XHRcdHNjYWxlOiAwLjUsXG5cdFx0XHRcdHRpbnQ6IHtcblx0XHRcdFx0XHRjb2xvcjogMHgwMGZmMDAsXG5cdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdH0gYXMgYW55LFxuXHRcdFx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdFx0XHRpZiAodGhpcy50aW50KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQudmFsdWUgKz0gdGltZTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLnRpbnQudmFsdWUgPj0gMSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRpbnQudmFsdWUgPSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0b25Qb2ludGVyRG93bihlOiBhbnkpIHtcblx0XHRcdFx0XHRpZiAodGhpcy50aW50KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQgPSBudWxsO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQgPSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAweDAwZmYwMCxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZygnZm94JywgZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YWJpbGl0eVdvbGY6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdHg6IDM1MCxcblx0XHRcdFx0eTogNDAwLFxuXHRcdFx0XHRjaGlsZHJlbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdFx0c3JjOiBBQklMSVRZX1dPTEYsXG5cdFx0XHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdFx0XHRhbHBoYTogMSxcblx0XHRcdFx0XHR0d2Vlbjoge1xuXHRcdFx0XHRcdFx0bG9vcDogdHJ1ZSxcblx0XHRcdFx0XHRcdHBoYXNlczogW1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB4OiAyMDAgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ2N1Ymljb3V0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHk6IDIwMCwgYWxwaGE6IDAuNSB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAncXVhZHJhdGljSW4nLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeDogMCwgYWxwaGE6IDEgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ3F1YWRyYXRpY091dCcsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0ZnBzOiBmcHMoc3RhdGlzdGljcyksXG5cdFx0fSxcblx0XHRzdGFydCgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdzdGFydCcpO1xuXHRcdH0sXG5cdH07XG59XG4iLCJjb25zdCBTUEVFRCA9IDEwMDtcblxuaW50ZXJmYWNlIFVuaXQge1xuXHRba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdFByb3BlcnRpZXMge1xuXHRuYW1lOiBzdHJpbmcsXG5cdGhlYWx0aDogbnVtYmVyLFxuXHRpbWFnZTogc3RyaW5nLFxuXHRvbkNsaWNrOiAoZGF0YTogVW5pdFByb3BlcnRpZXMpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bml0KHByb3BzOiBVbml0UHJvcGVydGllcyk6IFVuaXQge1xuXHRmdW5jdGlvbiBnZXRUaXRsZSgpIHtcblx0XHRyZXR1cm4gYCR7cHJvcHMubmFtZX1cXG4ke01hdGgucm91bmQocHJvcHMuaGVhbHRoICogMTAwKX0lYDtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0eDogNTAgKyBNYXRoLnJhbmRvbSgpICogNDAwLFxuXHRcdHk6IDIwMCxcblx0XHRyb3RhdGlvbjogMCxcblx0XHR1cGRhdGVNb3ZlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0dGhpcy54ICs9IHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYICogdGltZSAqIFNQRUVEO1xuXHRcdFx0aWYgKHRoaXMueCA8IDUwKSB7XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYID0gMTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy54ID4gNDAwKSB7XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYID0gLTE7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMudXBkYXRlTW92ZSh0aW1lKTtcblx0XHR9LFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHR0ZXh0OiB7XG5cdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0dGV4dDogZ2V0VGl0bGUoKSxcblx0XHRcdFx0dGV4dEZvcm1hdDoge1xuXHRcdFx0XHRcdHNpemU6IDE1LFxuXHRcdFx0XHRcdGNvbG9yOiAweGZmZGRkZCxcblx0XHRcdFx0XHRhbGlnbjogJ2NlbnRlcicsXG5cdFx0XHRcdFx0dmVydGljYWxBbGlnbjogJ21pZGRsZScsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJvcmRlcjogMHgwMGZmMDAsXG5cdFx0XHRcdHk6IC0zMCxcblx0XHRcdFx0aGVpZ2h0OiAzNSxcblx0XHRcdFx0cGl2b3RYOiAwLjUsXG5cdFx0XHRcdG9uUG9pbnRlckRvd246ICgpID0+IHtcblx0XHRcdFx0XHRwcm9wcy5vbkNsaWNrKHByb3BzKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b25VcGRhdGUoKSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gZ2V0VGl0bGUoKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRpbWFnZToge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IHByb3BzLmltYWdlLFxuXHRcdFx0XHRzY2FsZVg6IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEsXG5cdFx0XHRcdHBpdm90WDogMC41LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duOiAoKSA9PiB7XG5cdFx0XHRcdFx0cHJvcHMub25DbGljayhwcm9wcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsImltcG9ydCB7IENvbXBvbmVudCwgTW91c2VFeHRlbnNpb24gfSBmcm9tICdAZTJkL2NvcmUnO1xuaW1wb3J0IHsgVHdlZW5FeHRlbnNpb24gfSBmcm9tICdAZTJkL3R3ZWVuJztcbmltcG9ydCB7IENhbnZhc1RleHRFeHRlbnNpb24gfSBmcm9tICdAZTJkL3RleHQnO1xuaW1wb3J0IHsgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiB9IGZyb20gJ0BlMmQvaW1hZ2UnO1xuaW1wb3J0IHsgQ2FudmFzU2hhcGVFeHRlbnNpb24gfSBmcm9tICdAZTJkL3NoYXBlJztcbmltcG9ydCB7IENhbnZhc0VuZ2luZSB9IGZyb20gJ0BlMmQvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGUyZC9yZXNvdXJjZXMnO1xuaW1wb3J0IEN1c3RvbVJlc291cmNlTWFuYWdlciBmcm9tICcuL2VuZ2luZS9yZXNvdXJjZXMnO1xuaW1wb3J0IEN1c3RvbUVuZ2luZSBmcm9tICcuL2VuZ2luZS9lbmdpbmUnO1xuaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluJztcbmltcG9ydCB7XG5cdEFOSU1BTElTVCwgQU5JTUFMSVNUX0lNQUdFLCBBUkNIRVIsIEFSQ0hFUl9JTUFHRSwgVEVTVF9DQU5WQVMsXG59IGZyb20gJy4vYXNzZXRzJztcblxuLy8gcGFnZVxuZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAnMCc7XG5kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSAnMCc7XG5cbi8vIGJhc2ljIGVuZ2luZVxuY29uc3QgZW5naW5lID0gbmV3IENhbnZhc0VuZ2luZSgpO1xuQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5DYW52YXNUZXh0RXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbkNhbnZhc1NoYXBlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcblR3ZWVuRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbk1vdXNlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbmVuZ2luZS5zY3JlZW4uZnVsbHNjcmVlbiA9IHRydWU7XG5lbmdpbmUudGlja2VyLnBsYXkoKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZW5naW5lLnBsYXRmb3JtLnZpZXcpO1xuXG5jb25zdCBzdGF0aXN0aWNzID0ge1xuXHRnZXRVcGRhdGVUaW1lKCkge1xuXHRcdHJldHVybiBlbmdpbmUudXBkYXRlci5lbGFwc2VkVGltZTtcblx0fSxcblx0Z2V0UmVuZGVyVGltZSgpIHtcblx0XHRyZXR1cm4gZW5naW5lLnJlbmRlcmVyLmVsYXBzZWRUaW1lO1xuXHR9LFxufTtcblxuLy8gYXBwbGljYXRpb25cbmNvbnN0IGFwcCA9IG1haW4oc3RhdGlzdGljcyk7XG5hcHAuc3RhcnQoKTtcbmVuZ2luZS5yb290ID0gYXBwIGFzIGFueSBhcyBDb21wb25lbnQ7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuY29uc29sZS5sb2coYXBwKTtcblxuLy8gdGVzdCBwYXVzZVxuc2V0VGltZW91dCgoKSA9PiBlbmdpbmUudGlja2VyLnBhdXNlKCksIDUwMDApO1xuc2V0VGltZW91dCgoKSA9PiBlbmdpbmUudGlja2VyLnBsYXkoKSwgMTAwMDApO1xuXG4vLyBjdXN0b20gZW5naW5lXG5jb25zdCBjdXN0b21FbmdpbmUgPSBuZXcgQ3VzdG9tRW5naW5lKCk7XG5jdXN0b21FbmdpbmUuc2NyZWVuLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbmN1c3RvbUVuZ2luZS5zY3JlZW4uaGVpZ2h0ID0gNjAwO1xuY3VzdG9tRW5naW5lLnVwZGF0ZXIuZW5hYmxlZCA9IGZhbHNlO1xuY3VzdG9tRW5naW5lLnJvb3QgPSBlbmdpbmUucm9vdDtcbmN1c3RvbUVuZ2luZS50aWNrZXIucGxheSgpO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUudG9wID0gJzBweCc7XG5jdXN0b21FbmdpbmUucGxhdGZvcm0udmlldy5zdHlsZS5sZWZ0ID0gJzYwMHB4JztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcpO1xuXG4vLyAvLyBzZXQgY3VzdG9tIHJlc291cmNlXG5lbmdpbmUucmVzb3VyY2VzLnJlc291cmNlcy5zZXQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBjdXN0b21FbmdpbmUucGxhdGZvcm0udmlldyxcblx0XHRsb2FkZWQ6IHRydWUsXG5cdH0gYXMgSW1hZ2VSZXNvdXJjZSxcbik7XG5jdXN0b21FbmdpbmUucmVzb3VyY2VzLnJlc291cmNlcy5zZXQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBlbmdpbmUucGxhdGZvcm0udmlldyxcblx0XHRsb2FkZWQ6IHRydWUsXG5cdH0gYXMgSW1hZ2VSZXNvdXJjZSxcbik7XG5cbi8vIGN1c3RvbSByZXNvdXJjZSByZXNvbHZlclxuY29uc3QgcmVzb3VyY2VNYW5hZ2VyID0gbmV3IEN1c3RvbVJlc291cmNlTWFuYWdlcigpO1xucmVzb3VyY2VNYW5hZ2VyLmFsaWFzZXMuc2V0KEFSQ0hFUi5yZXBsYWNlKCdpZDonLCAnJyksIEFSQ0hFUl9JTUFHRSk7XG5yZXNvdXJjZU1hbmFnZXIuYWxpYXNlcy5zZXQoQU5JTUFMSVNULnJlcGxhY2UoJ2lkOicsICcnKSwgQU5JTUFMSVNUX0lNQUdFKTtcbnJlc291cmNlTWFuYWdlci5pbml0KGVuZ2luZSk7XG5yZXNvdXJjZU1hbmFnZXIuaW5pdChjdXN0b21FbmdpbmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==