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

  function CanvasEngine() {
    var _this;

    _classCallCheck(this, CanvasEngine);

    _this = _super.call(this);
    _this.platform = new _platform__WEBPACK_IMPORTED_MODULE_1__.CanvasPlatform(_assertThisInitialized(_this));
    return _this;
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











var Engine = function Engine() {
  _classCallCheck(this, Engine);

  this.depth = 32;
  this.components = new _features_components__WEBPACK_IMPORTED_MODULE_9__.Components();
  this.screen = new _features_screen__WEBPACK_IMPORTED_MODULE_2__.Screen();
  this.platform = new _features_platform__WEBPACK_IMPORTED_MODULE_5__.Platform(this);
  this.updater = new _features_updater__WEBPACK_IMPORTED_MODULE_1__.Updater(this);
  this.renderer = new _features_renderer__WEBPACK_IMPORTED_MODULE_0__.Renderer(this);
  this.pointerEvents = new _features_pointer_events__WEBPACK_IMPORTED_MODULE_3__.PointerEvents(this);
  this.ticker = new _features_ticker__WEBPACK_IMPORTED_MODULE_4__.Ticker(this);
  this.debug = new _features_debug__WEBPACK_IMPORTED_MODULE_7__.Debug();
  this.resources = new _features_resources__WEBPACK_IMPORTED_MODULE_8__.Resources(this);
  _components_container__WEBPACK_IMPORTED_MODULE_6__.ContainerExtension.init(this);
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

/***/ "../core/dist/features/feature.js":
/*!****************************************!*\
  !*** ../core/dist/features/feature.js ***!
  \****************************************/
/*! namespace exports */
/*! export Feature [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Feature": () => /* binding */ Feature
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Feature = function Feature(engine) {
  _classCallCheck(this, Feature);

  this.enabled = true;
  this.engine = engine;
};

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
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature */ "../core/dist/features/feature.js");
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


var Platform = /*#__PURE__*/function (_Feature) {
  _inherits(Platform, _Feature);

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
}(_feature__WEBPACK_IMPORTED_MODULE_0__.Feature);

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
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature */ "../core/dist/features/feature.js");
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






var PointerEvents = /*#__PURE__*/function (_Feature) {
  _inherits(PointerEvents, _Feature);

  var _super = _createSuper(PointerEvents);

  function PointerEvents() {
    var _this;

    _classCallCheck(this, PointerEvents);

    _this = _super.apply(this, arguments);
    _this.depth = 0;
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
}(_feature__WEBPACK_IMPORTED_MODULE_4__.Feature);

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
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature */ "../core/dist/features/feature.js");
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





var Renderer = /*#__PURE__*/function (_Feature) {
  _inherits(Renderer, _Feature);

  var _super = _createSuper(Renderer);

  function Renderer() {
    var _this;

    _classCallCheck(this, Renderer);

    _this = _super.apply(this, arguments);
    _this.depth = 0;
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

      this.engine.platform.begin();
      this.depth = 0;
      var base = this.getContext();
      this.depth++;
      _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.copy(this.engine.screen.getMatrix(), base.matrix);
      _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.ColorTransform.setEmpty(base.colorTransform);
      this.renderComponent(root, base);
      this.engine.platform.end();
    }
  }]);

  return Renderer;
}(_feature__WEBPACK_IMPORTED_MODULE_3__.Feature);

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
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature */ "../core/dist/features/feature.js");
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


var Resources = /*#__PURE__*/function (_Feature) {
  _inherits(Resources, _Feature);

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
}(_feature__WEBPACK_IMPORTED_MODULE_0__.Feature);

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
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature */ "../core/dist/features/feature.js");
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



var Updater = /*#__PURE__*/function (_Feature) {
  _inherits(Updater, _Feature);

  var _super = _createSuper(Updater);

  function Updater() {
    var _this;

    _classCallCheck(this, Updater);

    _this = _super.apply(this, arguments);
    _this.depth = 0;
    _this.time = 0;
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
      this.updateComponent(root);
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
}(_feature__WEBPACK_IMPORTED_MODULE_1__.Feature);

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
/*! export Feature [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
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
/* harmony import */ var _features_feature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/feature */ "../core/dist/features/feature.js");
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
    constructor() {
        super();
        this.platform = new _platform__WEBPACK_IMPORTED_MODULE_2__.default(this);
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
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ fps
/* harmony export */ });
function fps() {
    return {
        type: 'text',
        text: 'fps',
        frames: 0,
        time: 0,
        textFormat: {
            size: 30,
            color: 0xffffff,
            align: 'center',
        },
        onUpdate(time) {
            this.time += time;
            this.frames++;
            if (this.time >= 1) {
                const frameTime = Math.ceil(1000 * this.time / this.frames);
                this.text = `${this.frames} fps ${frameTime} ms`;
                this.time = 0;
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




function main() {
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
            fps: (0,_fps__WEBPACK_IMPORTED_MODULE_3__.default)(),
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
const app = (0,_main__WEBPACK_IMPORTED_MODULE_6__.default)();
app.start();
const engine = new _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_5__.CanvasEngine();
_e2d_image__WEBPACK_IMPORTED_MODULE_3__.CanvasImageColorExtension.init(engine);
_e2d_text__WEBPACK_IMPORTED_MODULE_2__.CanvasTextExtension.init(engine);
_e2d_shape__WEBPACK_IMPORTED_MODULE_4__.CanvasShapeExtension.init(engine);
_e2d_tween__WEBPACK_IMPORTED_MODULE_1__.TweenExtension.init(engine);
_e2d_core__WEBPACK_IMPORTED_MODULE_0__.MouseExtension.init(engine);
engine.root = app;
engine.screen.fullscreen = true;
engine.ticker.play();
document.body.appendChild(engine.platform.view);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jYW52YXMtZW5naW5lL2Rpc3QvZW5naW5lLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NhbnZhcy1lbmdpbmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jYW52YXMtZW5naW5lL2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY2FudmFzLWVuZ2luZS9kaXN0L3BsYXRmb3JtLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvY29yZS9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ZlYXR1cmVzL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ZlYXR1cmVzL2RlYnVnLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9mZWF0dXJlcy9mZWF0dXJlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9mZWF0dXJlcy9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvZmVhdHVyZXMvcG9pbnRlci1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ZlYXR1cmVzL3JlbmRlcmVyLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9mZWF0dXJlcy9yZXNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ZlYXR1cmVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvZmVhdHVyZXMvdGlja2VyLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9mZWF0dXJlcy91cGRhdGVyLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvaW5wdXQvbW91c2UuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ludGVyZmFjZXMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvaW50ZXJmYWNlcy9waXZvdC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvaW50ZXJmYWNlcy9wb2ludGVyLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9pbnRlcmZhY2VzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvaW50ZXJmYWNlcy90cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ludGVyZmFjZXMvdXBkYXRlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9ib3VuZHMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZ2VvbS9kaXN0L2NvbG9yLXRyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9nZW9tL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZ2VvbS9kaXN0L21hdHJpeC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9nZW9tL2Rpc3QvcG9pbnQuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZ2VvbS9kaXN0L3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9pbWFnZS9kaXN0L2NhbnZhcy1pbWFnZS1jb2xvci5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9pbWFnZS9kaXN0L2NhbnZhcy1pbWFnZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9pbWFnZS9kaXN0L2ltYWdlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2ltYWdlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vcmVzb3VyY2VzL2Rpc3QvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vc2hhcGUvZGlzdC9jYW52YXMtc2hhcGUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vc2hhcGUvZGlzdC9kYXRhL2RhdGEuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vc2hhcGUvZGlzdC9kYXRhL3BhdGguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vc2hhcGUvZGlzdC9kYXRhL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2dyYXBoaWNzLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vc2hhcGUvZGlzdC9zaGFwZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90ZXh0L2Rpc3QvY2FudmFzLXRleHQuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L2ZvbnQuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90ZXh0L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L3RleHQuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdHdlZW4vZGlzdC9lYXNpbmcuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdHdlZW4vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90d2Vlbi9kaXN0L3R3ZWVuLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2FydGlmYWN0LnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2Fzc2V0cy50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9lbmdpbmUvZW5naW5lLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2VuZ2luZS9pbWFnZS50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9lbmdpbmUvcGxhdGZvcm0udHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvZW5naW5lL3Jlc291cmNlcy50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9mcHMudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy91bml0LnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BlMmQvc2FtcGxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0BlMmQvc2FtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbIkNhbnZhc0VuZ2luZSIsInBsYXRmb3JtIiwiQ2FudmFzUGxhdGZvcm0iLCJFbmdpbmUiLCJDYW52YXNQYXR0ZXJucyIsImNvbG9yUGF0dGVybiIsImNvbG9yIiwiYWxwaGEiLCJjdCIsInIiLCJnIiwiYiIsImEiLCJDb2xvclRyYW5zZm9ybSIsInJlZE11bHRpcGxpZXIiLCJyZWRPZmZzZXQiLCJncmVlbk11bHRpcGxpZXIiLCJncmVlbk9mZnNldCIsImJsdWVNdWx0aXBsaWVyIiwiYmx1ZU9mZnNldCIsImFscGhhTXVsdGlwbGllciIsImFscGhhT2Zmc2V0IiwiYXJndW1lbnRzIiwidmlldyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHRzIiwiZ2V0Q29udGV4dCIsImN1c3RvbUNvbnRleHRzIiwibGVuZ3RoIiwiY29udGV4dCIsInB1c2giLCJwb3AiLCJlbmdpbmUiLCJkZWJ1ZyIsIndhcm5pbmciLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImNsZWFyIiwidXBkYXRlU2l6ZSIsInNldFRyYW5zZm9ybSIsImNsZWFyUmVjdCIsInNjcmVlbiIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwicGl4ZWxSYXRpbyIsImdldFBpeGVsUmF0aW8iLCJ2aWV3V2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJ2aWV3SGVpZ2h0Iiwic3R5bGUiLCJQbGF0Zm9ybSIsIkNPTlRBSU5FUiIsIkNvbnRhaW5lciIsIm51bUNoaWxkcmVuIiwiY29udGFpbmVyIiwiY2hpbGRyZW4iLCJBcnJheSIsImlzQXJyYXkiLCJ0eXBlIiwia2V5cyIsIk9iamVjdCIsIkNvbnRhaW5lckV4dGVuc2lvbiIsInJlbmRlciIsInJlbmRlcmVyIiwiZGVwdGgiLCJpIiwiY29tcG9uZW50IiwicmVuZGVyQ29tcG9uZW50IiwiY29tcG9uZW50c01hcCIsInVwZGF0ZSIsInVwZGF0ZXIiLCJ1cGRhdGVDb21wb25lbnQiLCJoaXRUZXN0IiwicG9pbnRlckV2ZW50cyIsInJlc3VsdCIsImRpc3BhdGNoQ29tcG9uZW50IiwiaW5pdCIsImNvbXBvbmVudHMiLCJzZXQiLCJDb21wb25lbnRzIiwiU2NyZWVuIiwiVXBkYXRlciIsIlJlbmRlcmVyIiwiUG9pbnRlckV2ZW50cyIsInRpY2tlciIsIlRpY2tlciIsIkRlYnVnIiwicmVzb3VyY2VzIiwiUmVzb3VyY2VzIiwicHJvcGVydGllcyIsIk1hcCIsImxvYWRlZCIsImVycm9ycyIsIndhcm5pbmdzIiwiZW5hYmxlZCIsImNvbnNvbGUiLCJsb2ciLCJhcmdzIiwiaWQiLCJTdHJpbmciLCJjb3VudCIsImdldCIsImVycm9yIiwid2FybiIsIkZlYXR1cmUiLCJnbG9iYWwiLCJQb2ludCIsImxvY2FsIiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJtYXRyaXgiLCJNYXRyaXgiLCJ4IiwieSIsInJvb3QiLCJiYXNlIiwicGFyZW50IiwiRGlzcGxheSIsIlBvaW50ZXIiLCJoYW5kbGVyIiwiVHJhbnNmb3JtIiwicG9pbnRlck92ZXIiLCJjb2xvclRyYW5zZm9ybSIsImJlZ2luIiwiZ2V0TWF0cml4IiwiZW5kIiwicmVzb2x2ZXJzIiwiU2V0IiwiYXNzZXQiLCJyZXNvdXJjZSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1bGxzY3JlZW4iLCJkIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZGV2aWNlUGl4ZWxSYXRpbyIsImZyYW1lUmF0ZSIsInBhdXNlZCIsInRpbWUiLCJ1cGRhdGVGcmFtZSIsImN1cnJlbnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJkZWx0YVRpbWUiLCJ1cGRhdGVOZXh0RnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJVcGRhdGUiLCJ1cGRhdGVQcm9wZXJ0aWVzIiwiZm9yRWFjaCIsInByb3BlcnR5IiwiZGlzcGF0Y2hFdmVudCIsImV2ZW50IiwiY2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50TGVmdCIsImNsaWVudFkiLCJ0b3AiLCJjbGllbnRUb3AiLCJkaXNwYXRjaCIsInByZXZlbnREZWZhdWx0IiwiTW91c2VFeHRlbnNpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiaXNWaXNpYmxlIiwidmlzaWJsZSIsIlBpdm90IiwiZ2V0WCIsInBpdm90IiwicGl2b3RYIiwiZ2V0WSIsInBpdm90WSIsImlzUG9pbnRlck92ZXIiLCJwb2ludGVyIiwiaXNQb2ludGVyRW5hYmxlZCIsInBvaW50ZXJFbmFibGVkIiwiaGFuZGxlck5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiU291cmNlIiwiZ2V0UmVzb3VyY2UiLCJzb3VyY2UiLCJzcmMiLCJpc0xvYWRlZCIsInRyYW5zZm9ybSIsImMiLCJ0eCIsInR5Iiwicm90YXRpb24iLCJzY2FsZVgiLCJzY2FsZSIsInNjYWxlWSIsImNvcyIsInNpbiIsImdldENvbG9yVHJhbnNmb3JtIiwidGludCIsInZhbHVlIiwidmFsdWVJbnZlcnRlZCIsImlzRW5hYmxlZCIsIm9uVXBkYXRlIiwiQm91bmRzIiwiZW1wdHkiLCJtaW5YIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwibWluWSIsIm1heFgiLCJNSU5fVkFMVUUiLCJtYXhZIiwic2V0RW1wdHkiLCJib3VuZHMiLCJpc0VtcHR5IiwidG9SZWN0YW5nbGUiLCJyZWN0YW5nbGUiLCJ0ZXN0WCIsInRlc3RZIiwidGVzdCIsInRlc3RQb2ludCIsInBvaW50IiwiaXNFbXB0eVdpdGhBbHBoYSIsImNvcHkiLCJmcm9tIiwidG8iLCJjb25jYXQiLCJjdDEiLCJjdDAiLCJtYXRyaXgwIiwibWF0cml4MSIsImdldERldGVybWluYW50IiwiaW52ZXJ0IiwiZGV0ZXJtaW5hbnQiLCJ0cmFuc2Zvcm1Qb2ludCIsInRyYW5zZm9ybUludmVyc2VQb2ludCIsInRyYW5zZm9ybUJvdW5kcyIsInJ4IiwicnkiLCJyciIsInJiIiwibngxIiwibnkxIiwibngyIiwibnkyIiwibngzIiwibnkzIiwibng0Iiwibnk0IiwicmlnaHQiLCJib3R0b20iLCJSZWN0YW5nbGUiLCJjb250YWlucyIsIkNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24iLCJpbWFnZSIsImNvbnRleHQyZCIsImdsb2JhbEFscGhhIiwiZHJhd0ltYWdlIiwiY3VzdG9tQ29udGV4dCIsImNyZWF0ZUN1c3RvbUNvbnRleHQiLCJpbWFnZURhdGEiLCJnZXRJbWFnZURhdGEiLCJybSIsImdtIiwiYm0iLCJhbSIsInJvIiwiZ28iLCJibyIsImFvIiwiZGF0YSIsInB1dEltYWdlRGF0YSIsImRlc3Ryb3lDdXN0b21Db250ZXh0IiwiSW1hZ2VFeHRlbnNpb24iLCJJTUFHRSIsIkNhbnZhc0ltYWdlRXh0ZW5zaW9uIiwiSW1hZ2UiLCJjYWxjdWxhdGVCb3VuZHMiLCJJbWFnZVJlc291cmNlIiwiZXh0ZW5zaW9uIiwic3BsaXQiLCJvbmxvYWQiLCJvbmVycm9yIiwiZSIsImFkZCIsIkNhbnZhc1NoYXBlRXh0ZW5zaW9uIiwic2hhcGUiLCJTaGFwZUV4dGVuc2lvbiIsIlNIQVBFIiwiUmVjdGFuZ2xlRGF0YSIsIkVsbGlwc2VEYXRhIiwicmFkaXVzIiwicmFkaXVzWCIsInJhZGl1c1kiLCJQYXRoRGF0YSIsInBhdGhEYXRhIiwiR3JhcGhpY3NTdHJpbmciLCJjb21tYW5kIiwiUGF0aENvbW1hbmQiLCJHcmFwaGljc0RhdGEiLCJwYXRoIiwibW92ZVRvIiwiY3VydmVUbyIsImN4IiwiY3kiLCJjdWJpY0N1cnZlVG8iLCJzeCIsInN5IiwiVEVTVF9DT01NQU5EIiwiVEVTVF9TUEFDRSIsIlRFU1RfTlVNQkVSIiwiR3JhcGhpY3NTdHJpbmdTdHJlYW0iLCJwb3NpdGlvbiIsImJ1ZmZlciIsInNpemUiLCJyZWFkQ29tbWFuZCIsInJlYWROdW1iZXJzIiwibnVtYmVyIiwiY2hhciIsInBhcnNlRmxvYXQiLCJHcmFwaGljc1N0cmluZ1JlYWRlciIsInN0cmVhbSIsImNvbW1hbmRFeGlzdHMiLCJsYXN0WCIsImxhc3RZIiwic2V0UGF0aCIsImhhc0RhdGEiLCJyZWFkTmV4dCIsInBhcnNlIiwiZ2V0Q29tbWFuZCIsImdldEJ1ZmZlciIsIngwIiwieTAiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImxpbmVUbyIsInJlYWRlciIsIkdyYXBoaWNzIiwiZmlsbCIsInJlcGVhdCIsInNtb290aCIsInJhdGlvIiwic3ByZWFkIiwiaW50ZXJwb2xhdGlvbiIsImZvY2FsUG9pbnRSYXRpbyIsInRoaWNrbmVzcyIsInBpeGVsSGludGluZyIsInNjYWxlTW9kZSIsImNhcHMiLCJqb2ludHMiLCJtaXRlckxpbWl0Iiwic3Ryb2tlIiwiYmVnaW5QYXRoIiwiZ2V0UGF0aCIsImVsbGlwc2VXaWR0aCIsImVsbGlwc2VIZWlnaHQiLCJ3IiwiaCIsImsiLCJveCIsIm95IiwieGUiLCJ5ZSIsInhtIiwieW0iLCJkeCIsImR5IiwiY3JlYXRlRGF0YSIsImdyYXBoaWNzRGF0YSIsInVuZGVmaW5lZCIsIlNoYXBlIiwiZ2V0R3JhcGhpY3MiLCJ2YWxpZFRleHRGb3JtYXQiLCJDYW52YXNUZXh0RXh0ZW5zaW9uIiwidGV4dCIsImxpbmVzIiwidGV4dEZvcm1hdCIsImJvcmRlciIsImJhY2tncm91bmQiLCJUZXh0Rm9ybWF0IiwiZm9ybWF0U2l6ZSIsImZvcm1hdExldHRlclNwYWNpbmciLCJsZXR0ZXJTcGFjaW5nIiwiZm9ybWF0TGVhZGluZyIsImxlYWRpbmciLCJmb250IiwiRm9udCIsInRleHRXaWR0aCIsInRleHRIZWlnaHQiLCJyZWFsV2lkdGgiLCJyZWFsSGVpZ2h0Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJhbGlnblZlcnRpY2FsVmFsdWUiLCJ2ZXJ0aWNhbEFsaWduIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJyZWN0IiwidGV4dEJhc2VsaW5lIiwibGluZSIsImxpbmVXaWR0aCIsImFsaWduVmFsdWUiLCJhbGlnbiIsImoiLCJmaXJzdCIsInNlY29uZCIsImFkdmFuY2UiLCJmaWxsVGV4dCIsIlRleHRFeHRlbnNpb24iLCJURVhUIiwiRU0iLCJmb250cyIsImdldFN0eWxlRm9udCIsIm1lYXN1cmVUZXh0IiwiZ2V0Q2hhcldpZHRoIiwid2lkdGhzIiwibmFtZSIsImdldEtlcm5pbmciLCJwYWlyIiwia2VybmluZyIsImtlcm5pbmdzIiwid2lkdGhTZWNvbmQiLCJ3aWR0aFRvdGFsIiwiZ2V0QWR2YW5jZSIsImdldEZvbnQiLCJnZXRMaW5lV2lkdGgiLCJmb3JtYXQiLCJnZXRUZXh0V2lkdGgiLCJnZXRUZXh0SGVpZ2h0IiwiZGVmYXVsdFRleHRGb3JtYXQiLCJib2xkIiwiaXRhbGljIiwidW5kZXJsaW5lIiwiZ2V0VmFsaWRUZXh0Rm9ybWF0IiwiZ2V0QWxpZ25WYWx1ZSIsImdldFZlcnRpY2FsQWxpZ25WYWx1ZSIsIlRleHQiLCJMSU5FQVIiLCJRVUFEUkFUSUMiLCJRVUFEUkFUSUNfSU4iLCJRVUFEUkFUSUNfT1VUIiwiQ1VCSUMiLCJDVUJJQ19JTiIsIkNVQklDX09VVCIsIlFVQVJUSUMiLCJRVUFSVElDX0lOIiwiUVVBUlRJQ19PVVQiLCJRVUlOVElDIiwiUVVJTlRJQ19JTiIsIlFVSU5USUNfT1VUIiwiU0lOVVNPSURBTCIsIlNJTlVTT0lEQUxfSU4iLCJTSU5VU09JREFMX09VVCIsIkVYUE9ORU5USUFMIiwiRVhQT05FTlRJQUxfSU4iLCJFWFBPTkVOVElBTF9PVVQiLCJDSVJDVUxBUiIsIkNJUkNVTEFSX0lOIiwiQ0lSQ1VMQVJfT1VUIiwiRUxBU1RJQyIsIkVMQVNUSUNfSU4iLCJFTEFTVElDX09VVCIsIkJBQ0siLCJCQUNLX0lOIiwiQkFDS19PVVQiLCJCT1VOQ0UiLCJCT1VOQ0VfSU4iLCJCT1VOQ0VfT1VUIiwiZWFzaW5nIiwiUEkiLCJwb3ciLCJzcXJ0IiwicyIsIlRXRUVOIiwiVHdlZW5FeHRlbnNpb24iLCJ0d2VlbiIsInBoYXNlcyIsIm9mZnNldCIsInBoYXNlIiwiZWFzaW5nTmFtZSIsInRvTG93ZXJDYXNlIiwiZWFzaW5nTWV0aG9kIiwiZWFzaW5nVmFsdWUiLCJzdGF0ZSIsImtleSIsImZyb21WYWx1ZSIsInRvVmFsdWUiLCJzdGF0ZVZhbHVlIiwibG9vcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNPLElBQU1BLFlBQWI7QUFBQTs7QUFBQTs7QUFDSSwwQkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixJQUFJQyxxREFBSiwrQkFBaEI7QUFGVTtBQUdiOztBQUpMO0FBQUEsRUFBa0NDLDZDQUFsQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDTyxJQUFJQyxjQUFKOztBQUNQLENBQUMsVUFBVUEsY0FBVixFQUEwQjtBQUN2QixXQUFTQyxZ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Q0FBQyxTQUFTLENBQUMsR0FBRyxDQUNuQyxnREFBVyxFQUNYO0lBQ0MsS0FBSyxFQUFFLGdEQUFXO0lBQ2xCLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUk7SUFDM0IsTUFBTSxFQUFFLElBQUk7Q0FDSyxDQUNsQixDQUFDO0FBR0YsTUFBTSxlQUFlLEdBQUcsSUFBSSxzREFBcUIsRUFBRSxDQUFDO0FBQ3BELGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLGlEQUFZLENBQUMsQ0FBQztBQUNyRSxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzREFBaUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsb0RBQWUsQ0FBQyxDQUFDO0FBQzNFLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tICdAZTJkL2NvcmUnO1xuaW1wb3J0IHsgQ2FudmFzUGxhdGZvcm0gfSBmcm9tICcuL3BsYXRmb3JtJztcbmV4cG9ydCBjbGFzcyBDYW52YXNFbmdpbmUgZXh0ZW5kcyBFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBsYXRmb3JtID0gbmV3IENhbnZhc1BsYXRmb3JtKHRoaXMpO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vcGF0dGVybnMnO1xuZXhwb3J0ICogZnJvbSAnLi9wbGF0Zm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2VuZ2luZSc7XG4iLCJpbXBvcnQgeyBDb2xvclRyYW5zZm9ybSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5leHBvcnQgdmFyIENhbnZhc1BhdHRlcm5zO1xuKGZ1bmN0aW9uIChDYW52YXNQYXR0ZXJucykge1xuICAgIGZ1bmN0aW9uIGNvbG9yUGF0dGVybihjb2xvciwgYWxwaGEsIGN0KSB7XG4gICAgICAgIGxldCByID0gY29sb3IgPj4gMTYgJiAweGZmO1xuICAgICAgICBsZXQgZyA9IGNvbG9yID4+IDggJiAweGZmO1xuICAgICAgICBsZXQgYiA9IGNvbG9yICYgMHhmZjtcbiAgICAgICAgbGV0IGEgPSBhbHBoYSAqIDB4ZmY7XG4gICAgICAgIGlmICghQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eShjdCkpIHtcbiAgICAgICAgICAgIHIgPSAociAqIGN0LnJlZE11bHRpcGxpZXIgKyBjdC5yZWRPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIGcgPSAoZyAqIGN0LmdyZWVuTXVsdGlwbGllciArIGN0LmdyZWVuT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBiID0gKGIgKiBjdC5ibHVlTXVsdGlwbGllciArIGN0LmJsdWVPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIGEgPSAoYSAqIGN0LmFscGhhTXVsdGlwbGllciArIGN0LmFscGhhT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEgPCAweGZmKSB7XG4gICAgICAgICAgICByZXR1cm4gYHJnYmEoJHtyfSwgJHtnfSwgJHtifSwgJHthIC8gMHhmZn0pYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYHJnYigke3J9LCAke2d9LCAke2J9KWA7XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybiA9IGNvbG9yUGF0dGVybjtcbn0pKENhbnZhc1BhdHRlcm5zIHx8IChDYW52YXNQYXR0ZXJucyA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0BlMmQvY29yZSc7XG5leHBvcnQgY2xhc3MgQ2FudmFzUGxhdGZvcm0gZXh0ZW5kcyBQbGF0Zm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW3RoaXMudmlldy5nZXRDb250ZXh0KCcyZCcpXTtcbiAgICAgICAgdGhpcy5jdXN0b21Db250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0c1t0aGlzLmNvbnRleHRzLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgICBzYXZlQ29udGV4dChjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dHMucHVzaChjb250ZXh0KTtcbiAgICB9XG4gICAgcmVzdG9yZUNvbnRleHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdUcnlpbmcgdG8gcmVzdG9yZSBtYWluIGNvbnRleHQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVDdXN0b21Db250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dDtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tQ29udGV4dHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gdGhpcy5jdXN0b21Db250ZXh0cy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy52aWV3O1xuICAgICAgICBpZiAoY29udGV4dC5jYW52YXMud2lkdGggIT09IHdpZHRoKSB7XG4gICAgICAgICAgICBjb250ZXh0LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZXh0LmNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgICAgICAgY29udGV4dC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICBkZXN0cm95Q3VzdG9tQ29udGV4dChjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY3VzdG9tQ29udGV4dHMucHVzaChjb250ZXh0KTtcbiAgICB9XG4gICAgYmVnaW4oKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdmlldy53aWR0aCwgdmlldy5oZWlnaHQpO1xuICAgIH1cbiAgICB1cGRhdGVTaXplKCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRXaWR0aCgpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0SGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW8gPSB0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0UGl4ZWxSYXRpbygpO1xuICAgICAgICBjb25zdCB2aWV3V2lkdGggPSBNYXRoLmZsb29yKHdpZHRoICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHZpZXdIZWlnaHQgPSBNYXRoLmZsb29yKGhlaWdodCAqIHBpeGVsUmF0aW8pO1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IHRoaXM7XG4gICAgICAgIGlmICh2aWV3LndpZHRoICE9PSB2aWV3V2lkdGggfHwgdmlldy5oZWlnaHQgIT09IHZpZXdIZWlnaHQpIHtcbiAgICAgICAgICAgIHZpZXcud2lkdGggPSB2aWV3V2lkdGg7XG4gICAgICAgICAgICB2aWV3LmhlaWdodCA9IHZpZXdIZWlnaHQ7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IENPTlRBSU5FUiA9ICdjb250YWluZXInO1xuZXhwb3J0IHZhciBDb250YWluZXI7XG4oZnVuY3Rpb24gKENvbnRhaW5lcikge1xuICAgIGZ1bmN0aW9uIG51bUNoaWxkcmVuKGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgcmV0dXJuIGtleXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBDb250YWluZXIubnVtQ2hpbGRyZW4gPSBudW1DaGlsZHJlbjtcbn0pKENvbnRhaW5lciB8fCAoQ29udGFpbmVyID0ge30pKTtcbmV4cG9ydCB2YXIgQ29udGFpbmVyRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDb250YWluZXJFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHJlbmRlcmVyIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJlci5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyB1cGRhdGVyIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgdXBkYXRlci5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlci5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi51cGRhdGUgPSB1cGRhdGU7XG4gICAgZnVuY3Rpb24gaGl0VGVzdChjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgcG9pbnRlckV2ZW50cyB9ID0gZW5naW5lO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBwb2ludGVyRXZlbnRzLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHMuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcG9pbnRlckV2ZW50cy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwb2ludGVyRXZlbnRzLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBrZXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50ZXJFdmVudHMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLnNldChDT05UQUlORVIsIHVwZGF0ZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoQ09OVEFJTkVSLCByZW5kZXIpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChDT05UQUlORVIsIGhpdFRlc3QpO1xuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDb250YWluZXJFeHRlbnNpb24gfHwgKENvbnRhaW5lckV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3JlbmRlcmVyJztcbmltcG9ydCB7IFVwZGF0ZXIgfSBmcm9tICcuLi9mZWF0dXJlcy91cGRhdGVyJztcbmltcG9ydCB7IFNjcmVlbiB9IGZyb20gJy4uL2ZlYXR1cmVzL3NjcmVlbic7XG5pbXBvcnQgeyBQb2ludGVyRXZlbnRzIH0gZnJvbSAnLi4vZmVhdHVyZXMvcG9pbnRlci1ldmVudHMnO1xuaW1wb3J0IHsgVGlja2VyIH0gZnJvbSAnLi4vZmVhdHVyZXMvdGlja2VyJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vZmVhdHVyZXMvcGxhdGZvcm0nO1xuaW1wb3J0IHsgQ29udGFpbmVyRXh0ZW5zaW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IHsgRGVidWcgfSBmcm9tICcuLi9mZWF0dXJlcy9kZWJ1Zyc7XG5pbXBvcnQgeyBSZXNvdXJjZXMgfSBmcm9tICcuLi9mZWF0dXJlcy9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4uL2ZlYXR1cmVzL2NvbXBvbmVudHMnO1xuZXhwb3J0IGNsYXNzIEVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGVwdGggPSAzMjtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gbmV3IENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuKCk7XG4gICAgICAgIHRoaXMucGxhdGZvcm0gPSBuZXcgUGxhdGZvcm0odGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlciA9IG5ldyBVcGRhdGVyKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMpO1xuICAgICAgICB0aGlzLnBvaW50ZXJFdmVudHMgPSBuZXcgUG9pbnRlckV2ZW50cyh0aGlzKTtcbiAgICAgICAgdGhpcy50aWNrZXIgPSBuZXcgVGlja2VyKHRoaXMpO1xuICAgICAgICB0aGlzLmRlYnVnID0gbmV3IERlYnVnKCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IFJlc291cmNlcyh0aGlzKTtcbiAgICAgICAgQ29udGFpbmVyRXh0ZW5zaW9uLmluaXQodGhpcyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENvbXBvbmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVuZGVyID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5oaXRUZXN0ID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IG5ldyBNYXAoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRGVidWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy53YXJuaW5ncyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICB9XG4gICAgZXJyb3IoLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLmVycm9ycy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMuZXJyb3JzLnNldChpZCwgY291bnQpO1xuICAgIH1cbiAgICB3YXJuaW5nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy53YXJuaW5ncy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgdGhpcy53YXJuaW5ncy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoZW5naW5lKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICcuL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIGV4dGVuZHMgRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIH1cbiAgICBiZWdpbigpIHtcbiAgICB9XG4gICAgZW5kKCkge1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1hdHJpeCwgUG9pbnQgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gJy4uL2ludGVyZmFjZXMvZGlzcGxheSc7XG5pbXBvcnQgeyBQb2ludGVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wb2ludGVyJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHJhbnNmb3JtJztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICcuL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFBvaW50ZXJFdmVudHMgZXh0ZW5kcyBGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuZ2xvYmFsID0gUG9pbnQuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5sb2NhbCA9IFBvaW50LmVtcHR5KCk7XG4gICAgICAgIHRoaXMucG9pbnRlcklkID0gMDtcbiAgICAgICAgdGhpcy5wb2ludGVyVHlwZSA9ICdwb2ludGVyRG93bic7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgbWF0cml4OiBNYXRyaXguZW1wdHkoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdID0gY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgZGlzcGF0Y2godHlwZSwgeCwgeSwgaWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvY2FsLnggPSB4O1xuICAgICAgICB0aGlzLmxvY2FsLnkgPSB5O1xuICAgICAgICB0aGlzLmdsb2JhbC54ID0geDtcbiAgICAgICAgdGhpcy5nbG9iYWwueSA9IHk7XG4gICAgICAgIHRoaXMucG9pbnRlcklkID0gaWQ7XG4gICAgICAgIHRoaXMucG9pbnRlclR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgY29uc3QgYmFzZSA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBNYXRyaXguc2V0RW1wdHkoYmFzZS5tYXRyaXgpO1xuICAgICAgICB0aGlzLmRlcHRoKys7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDb21wb25lbnQocm9vdCwgYmFzZSk7XG4gICAgfVxuICAgIGRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgcGFyZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIURpc3BsYXkuaXNWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVBvaW50ZXIuaXNQb2ludGVyRW5hYmxlZChjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgICAgIE1hdHJpeC5jb25jYXQocGFyZW50Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1JbnZlcnNlUG9pbnQoY29udGV4dC5tYXRyaXgsIHRoaXMuZ2xvYmFsLCB0aGlzLmxvY2FsKTtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5sb2NhbDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgdGhpcy5wb2ludGVyVHlwZSwgeCwgeSwgdGhpcy5wb2ludGVySWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRlclR5cGUgPT09ICdwb2ludGVyTW92ZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmICFjb21wb25lbnQucG9pbnRlck92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdmVyJywgeCwgeSwgdGhpcy5wb2ludGVySWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghcmVzdWx0ICYmIGNvbXBvbmVudC5wb2ludGVyT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCAncG9pbnRlck91dCcsIHgsIHksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnBvaW50ZXJPdmVyID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0sIE1hdHJpeCB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9kaXNwbGF5JztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHJhbnNmb3JtJztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICcuL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXTtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIG1hdHJpeDogTWF0cml4LmVtcHR5KCksXG4gICAgICAgICAgICAgICAgY29sb3JUcmFuc2Zvcm06IENvbG9yVHJhbnNmb3JtLmVtcHR5KCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXSA9IGNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFEaXNwbGF5LmlzVmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBUcmFuc2Zvcm0uZ2V0TWF0cml4KGNvbXBvbmVudCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICBUcmFuc2Zvcm0uZ2V0Q29sb3JUcmFuc2Zvcm0oY29tcG9uZW50LCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgTWF0cml4LmNvbmNhdChwYXJlbnQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICBDb2xvclRyYW5zZm9ybS5jb25jYXQocGFyZW50LmNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuZ2luZS5wbGF0Zm9ybS5iZWdpbigpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgY29uc3QgYmFzZSA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLmRlcHRoKys7XG4gICAgICAgIE1hdHJpeC5jb3B5KHRoaXMuZW5naW5lLnNjcmVlbi5nZXRNYXRyaXgoKSwgYmFzZS5tYXRyaXgpO1xuICAgICAgICBDb2xvclRyYW5zZm9ybS5zZXRFbXB0eShiYXNlLmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQocm9vdCwgYmFzZSk7XG4gICAgICAgIHRoaXMuZW5naW5lLnBsYXRmb3JtLmVuZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICcuL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFJlc291cmNlcyBleHRlbmRzIEZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZXNvbHZlcnMgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIGdldChhc3NldCkge1xuICAgICAgICBpZiAoIWFzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzb3VyY2UgPSB0aGlzLnJlc291cmNlcy5nZXQoYXNzZXQpO1xuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICByZXNvdXJjZSA9IHRoaXMucmVzb2x2ZShhc3NldCk7XG4gICAgICAgICAgICB0aGlzLnJlc291cmNlcy5zZXQoYXNzZXQsIHJlc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgfVxuICAgIHJlc29sdmUoYXNzZXQpIHtcbiAgICAgICAgZm9yIChjb25zdCByZXNvbHZlciBvZiB0aGlzLnJlc29sdmVycykge1xuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSByZXNvbHZlcihhc3NldCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgaWYgKHJlc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5naW5lLmRlYnVnLndhcm5pbmcoYFJlc291cmNlIG5vdCByZXNvbHZlZDogJHthc3NldH1gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnQGUyZC9nZW9tJztcbmV4cG9ydCBjbGFzcyBTY3JlZW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLndpZHRoID0gNDAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDQwMDtcbiAgICAgICAgdGhpcy5waXhlbFJhdGlvID0gMDtcbiAgICAgICAgdGhpcy5mdWxsc2NyZWVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWF0cml4ID0gTWF0cml4LmVtcHR5KCk7XG4gICAgfVxuICAgIGdldE1hdHJpeCgpIHtcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHRoaXMuZ2V0UGl4ZWxSYXRpbygpO1xuICAgICAgICB0aGlzLm1hdHJpeC5hID0gcGl4ZWxSYXRpbztcbiAgICAgICAgdGhpcy5tYXRyaXguZCA9IHBpeGVsUmF0aW87XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeDtcbiAgICB9XG4gICAgZ2V0V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZ1bGxzY3JlZW4gPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHRoaXMud2lkdGg7XG4gICAgfVxuICAgIGdldEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVsbHNjcmVlbiA/IHdpbmRvdy5pbm5lckhlaWdodCA6IHRoaXMuaGVpZ2h0O1xuICAgIH1cbiAgICBnZXRQaXhlbFJhdGlvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5waXhlbFJhdGlvID4gMCA/IHRoaXMucGl4ZWxSYXRpbyA6IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID8/IDE7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRpY2tlciB7XG4gICAgY29uc3RydWN0b3IoZW5naW5lKSB7XG4gICAgICAgIHRoaXMuZnJhbWVSYXRlID0gMDtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9ICh0aW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS51cGRhdGVyLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlbmRlcmVyLnJlbmRlcigpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZUZyYW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IChjdXJyZW50VGltZSAtIHRoaXMudGltZSkgLyAxMDAwO1xuICAgICAgICAgICAgdGhpcy50aW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOZXh0RnJhbWUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgfVxuICAgIGdldCBpc1BhdXNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGF1c2VkO1xuICAgIH1cbiAgICBwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmV4dEZyYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHVwZGF0ZU5leHRGcmFtZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlRnJhbWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFVwZGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXBkYXRlJztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICcuL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFVwZGF0ZXIgZXh0ZW5kcyBGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgfVxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KHJvb3QpO1xuICAgIH1cbiAgICB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVVwZGF0ZS5pc0VuYWJsZWQoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllcyhjb21wb25lbnQpO1xuICAgICAgICBVcGRhdGUudXBkYXRlKGNvbXBvbmVudCwgdGhpcy50aW1lKTtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVByb3BlcnRpZXMoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZW5naW5lLmNvbXBvbmVudHMucHJvcGVydGllcy5mb3JFYWNoKChoYW5kbGVyLCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudFtwcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2VuZ2luZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL2NvbXBvbmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9kZWJ1Zyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL2ZlYXR1cmUnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9wbGF0Zm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3BvaW50ZXItZXZlbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcmVuZGVyZXInO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9yZXNvdXJjZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9zY3JlZW4nO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy90aWNrZXInO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy91cGRhdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vaW5wdXQvbW91c2UnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL2Rpc3BsYXknO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3Bpdm90JztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy9zb3VyY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3RyYW5zZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvdXBkYXRlJztcbiIsImZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgdHlwZSkge1xuICAgIGNvbnN0IHsgdmlldyB9ID0gZW5naW5lLnBsYXRmb3JtO1xuICAgIGNvbnN0IGNsaWVudFJlY3QgPSB2aWV3LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gY2xpZW50UmVjdC5sZWZ0IC0gdmlldy5jbGllbnRMZWZ0O1xuICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gY2xpZW50UmVjdC50b3AgLSB2aWV3LmNsaWVudFRvcDtcbiAgICBlbmdpbmUucG9pbnRlckV2ZW50cy5kaXNwYXRjaCh0eXBlLCB4LCB5LCAwKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZXhwb3J0IHZhciBNb3VzZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoTW91c2VFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJEb3duJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJVcCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJNb3ZlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBNb3VzZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKE1vdXNlRXh0ZW5zaW9uIHx8IChNb3VzZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIERpc3BsYXk7XG4oZnVuY3Rpb24gKERpc3BsYXkpIHtcbiAgICBmdW5jdGlvbiBpc1Zpc2libGUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQudmlzaWJsZSA/PyB0cnVlO1xuICAgIH1cbiAgICBEaXNwbGF5LmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbn0pKERpc3BsYXkgfHwgKERpc3BsYXkgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBQaXZvdDtcbihmdW5jdGlvbiAoUGl2b3QpIHtcbiAgICBmdW5jdGlvbiBnZXRYKHBpdm90LCB3aWR0aCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WCB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFgpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RYICogd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFggPSBnZXRYO1xuICAgIGZ1bmN0aW9uIGdldFkocGl2b3QsIGhlaWdodCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WSB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFkpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RZICogaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBQaXZvdC5nZXRZID0gZ2V0WTtcbn0pKFBpdm90IHx8IChQaXZvdCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFBvaW50ZXI7XG4oZnVuY3Rpb24gKFBvaW50ZXIpIHtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJPdmVyKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuICEhcG9pbnRlci5wb2ludGVyT3ZlcjtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJPdmVyID0gaXNQb2ludGVyT3ZlcjtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJFbmFibGVkKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50ZXIucG9pbnRlckVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkID0gaXNQb2ludGVyRW5hYmxlZDtcbiAgICBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KHBvaW50ZXIsIHR5cGUsIHgsIHksIGlkKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJOYW1lID0gYG9uJHt0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7dHlwZS5zbGljZSgxKX1gO1xuICAgICAgICBpZiAocG9pbnRlcltoYW5kbGVyTmFtZV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICAgICAgICAgIHR5cGUsIHgsIHksIGlkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHBvaW50ZXJbaGFuZGxlck5hbWVdKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xufSkoUG9pbnRlciB8fCAoUG9pbnRlciA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFNvdXJjZTtcbihmdW5jdGlvbiAoU291cmNlKSB7XG4gICAgZnVuY3Rpb24gZ2V0UmVzb3VyY2Uoc291cmNlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IHNvdXJjZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgIH1cbiAgICBTb3VyY2UuZ2V0UmVzb3VyY2UgPSBnZXRSZXNvdXJjZTtcbiAgICBmdW5jdGlvbiBpc0xvYWRlZChzb3VyY2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGdldFJlc291cmNlKHNvdXJjZSwgZW5naW5lKTtcbiAgICAgICAgcmV0dXJuICEhcmVzb3VyY2U/LmxvYWRlZDtcbiAgICB9XG4gICAgU291cmNlLmlzTG9hZGVkID0gaXNMb2FkZWQ7XG59KShTb3VyY2UgfHwgKFNvdXJjZSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFRyYW5zZm9ybTtcbihmdW5jdGlvbiAoVHJhbnNmb3JtKSB7XG4gICAgZnVuY3Rpb24gZ2V0TWF0cml4KHRyYW5zZm9ybSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChtYXRyaXgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gbWF0cml4LmEgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gbWF0cml4LmIgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gbWF0cml4LmMgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gbWF0cml4LmQgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC50eCA9IG1hdHJpeC50eCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LnR5ID0gbWF0cml4LnR5ID8/IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb3RhdGlvbiB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBjb25zdCBzY2FsZVggPSB0cmFuc2Zvcm0uc2NhbGVYID8/IHRyYW5zZm9ybS5zY2FsZSA/PyAxO1xuICAgICAgICBjb25zdCBzY2FsZVkgPSB0cmFuc2Zvcm0uc2NhbGVZID8/IHRyYW5zZm9ybS5zY2FsZSA/PyAxO1xuICAgICAgICByZXN1bHQudHggPSB0cmFuc2Zvcm0ueCA/PyAwO1xuICAgICAgICByZXN1bHQudHkgPSB0cmFuc2Zvcm0ueSA/PyAwO1xuICAgICAgICBpZiAocm90YXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKHJvdGF0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKHJvdGF0aW9uKTtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gY29zICogc2NhbGVYO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSBzaW4gKiBzY2FsZVg7XG4gICAgICAgICAgICByZXN1bHQuYyA9IC1zaW4gKiBzY2FsZVk7XG4gICAgICAgICAgICByZXN1bHQuZCA9IGNvcyAqIHNjYWxlWTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYSA9IHNjYWxlWDtcbiAgICAgICAgcmVzdWx0LmIgPSAwO1xuICAgICAgICByZXN1bHQuYyA9IDA7XG4gICAgICAgIHJlc3VsdC5kID0gc2NhbGVZO1xuICAgIH1cbiAgICBUcmFuc2Zvcm0uZ2V0TWF0cml4ID0gZ2V0TWF0cml4O1xuICAgIGZ1bmN0aW9uIGdldENvbG9yVHJhbnNmb3JtKHRyYW5zZm9ybSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtKSB7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLnJlZE11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5ncmVlbk11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmJsdWVNdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLnJlZE9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5PZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgdGludCB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAodGludCkge1xuICAgICAgICAgICAgY29uc3QgeyBjb2xvciA9IDAsIHZhbHVlID0gMSB9ID0gdGludDtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlSW52ZXJ0ZWQgPSAxIC0gdmFsdWU7XG4gICAgICAgICAgICBjb25zdCByID0gKGNvbG9yID4+IDE2KSAmIDB4ZmY7XG4gICAgICAgICAgICBjb25zdCBnID0gKGNvbG9yID4+IDgpICYgMHhmZjtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBjb2xvciAmIDB4ZmY7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gdHJhbnNmb3JtLmFscGhhID8/IDE7XG4gICAgICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHZhbHVlSW52ZXJ0ZWQ7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IHZhbHVlSW52ZXJ0ZWQ7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IHIgKiB2YWx1ZTtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IGcgKiB2YWx1ZTtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gYiAqIHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSB0cmFuc2Zvcm0uYWxwaGEgPz8gMTtcbiAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSAxO1xuICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldENvbG9yVHJhbnNmb3JtID0gZ2V0Q29sb3JUcmFuc2Zvcm07XG59KShUcmFuc2Zvcm0gfHwgKFRyYW5zZm9ybSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFVwZGF0ZTtcbihmdW5jdGlvbiAoVXBkYXRlKSB7XG4gICAgZnVuY3Rpb24gaXNFbmFibGVkKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgVXBkYXRlLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29tcG9uZW50LCB0aW1lKSB7XG4gICAgICAgIGlmIChjb21wb25lbnQub25VcGRhdGUpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5vblVwZGF0ZSh0aW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBVcGRhdGUudXBkYXRlID0gdXBkYXRlO1xufSkoVXBkYXRlIHx8IChVcGRhdGUgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBCb3VuZHM7XG4oZnVuY3Rpb24gKEJvdW5kcykge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWluWDogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG1pblk6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtYXhYOiBOdW1iZXIuTUlOX1ZBTFVFLFxuICAgICAgICAgICAgbWF4WTogTnVtYmVyLk1JTl9WQUxVRSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQm91bmRzLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkoYm91bmRzKSB7XG4gICAgICAgIGJvdW5kcy5taW5YID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1pblkgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWF4WCA9IE51bWJlci5NSU5fVkFMVUU7XG4gICAgICAgIGJvdW5kcy5tYXhZID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICB9XG4gICAgQm91bmRzLnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShib3VuZHMpIHtcbiAgICAgICAgcmV0dXJuIGJvdW5kcy5taW5YID09PSBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWluWSA9PT0gTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1heFggPT09IE51bWJlci5NSU5fVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5tYXhZID09PSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgIH1cbiAgICBCb3VuZHMuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gdG9SZWN0YW5nbGUoYm91bmRzLCByZWN0YW5nbGUpIHtcbiAgICAgICAgY29uc3QgeyBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB9ID0gYm91bmRzO1xuICAgICAgICByZWN0YW5nbGUueCA9IG1pblg7XG4gICAgICAgIHJlY3RhbmdsZS55ID0gbWluWTtcbiAgICAgICAgcmVjdGFuZ2xlLndpZHRoID0gbWF4WCAtIG1pblg7XG4gICAgICAgIHJlY3RhbmdsZS5oZWlnaHQgPSBtYXhZIC0gbWluWTtcbiAgICB9XG4gICAgQm91bmRzLnRvUmVjdGFuZ2xlID0gdG9SZWN0YW5nbGU7XG4gICAgZnVuY3Rpb24gdGVzdFgoYm91bmRzLCB4KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFggPSB0ZXN0WDtcbiAgICBmdW5jdGlvbiB0ZXN0WShib3VuZHMsIHkpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0WSA9IHRlc3RZO1xuICAgIGZ1bmN0aW9uIHRlc3QoYm91bmRzLCB4LCB5KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3QgPSB0ZXN0O1xuICAgIGZ1bmN0aW9uIHRlc3RQb2ludChib3VuZHMsIHBvaW50KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RQb2ludCA9IHRlc3RQb2ludDtcbn0pKEJvdW5kcyB8fCAoQm91bmRzID0ge30pKTtcbiIsImV4cG9ydCB2YXIgQ29sb3JUcmFuc2Zvcm07XG4oZnVuY3Rpb24gKENvbG9yVHJhbnNmb3JtKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbHBoYU11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICByZWRNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgZ3JlZW5NdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYmx1ZU11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBhbHBoYU9mZnNldDogMCxcbiAgICAgICAgICAgIHJlZE9mZnNldDogMCxcbiAgICAgICAgICAgIGdyZWVuT2Zmc2V0OiAwLFxuICAgICAgICAgICAgYmx1ZU9mZnNldDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KGN0KSB7XG4gICAgICAgIHJldHVybiBjdC5yZWRNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmJsdWVNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LnJlZE9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5PZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmJsdWVPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmFscGhhT2Zmc2V0ID09PSAwO1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5V2l0aEFscGhhKGN0KSB7XG4gICAgICAgIHJldHVybiBjdC5yZWRNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmJsdWVNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5yZWRPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmdyZWVuT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ibHVlT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU9mZnNldCA9PT0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eVdpdGhBbHBoYSA9IGlzRW1wdHlXaXRoQWxwaGE7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkoY3QpIHtcbiAgICAgICAgY3QucmVkTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LmdyZWVuTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LmJsdWVNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuYWxwaGFNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QucmVkT2Zmc2V0ID0gMDtcbiAgICAgICAgY3QuZ3JlZW5PZmZzZXQgPSAwO1xuICAgICAgICBjdC5ibHVlT2Zmc2V0ID0gMDtcbiAgICAgICAgY3QuYWxwaGFPZmZzZXQgPSAwO1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoZnJvbSwgdG8pIHtcbiAgICAgICAgdG8uYWxwaGFNdWx0aXBsaWVyID0gZnJvbS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIHRvLnJlZE11bHRpcGxpZXIgPSBmcm9tLnJlZE11bHRpcGxpZXI7XG4gICAgICAgIHRvLmdyZWVuTXVsdGlwbGllciA9IGZyb20uZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICB0by5ibHVlTXVsdGlwbGllciA9IGZyb20uYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIHRvLmFscGhhT2Zmc2V0ID0gZnJvbS5hbHBoYU9mZnNldDtcbiAgICAgICAgdG8ucmVkT2Zmc2V0ID0gZnJvbS5yZWRPZmZzZXQ7XG4gICAgICAgIHRvLmdyZWVuT2Zmc2V0ID0gZnJvbS5ncmVlbk9mZnNldDtcbiAgICAgICAgdG8uYmx1ZU9mZnNldCA9IGZyb20uYmx1ZU9mZnNldDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gY29uY2F0KGN0MSwgY3QwLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgYWxwaGFNdWx0aXBsaWVyID0gY3QxLmFscGhhTXVsdGlwbGllciAqIGN0MC5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IHJlZE11bHRpcGxpZXIgPSBjdDEucmVkTXVsdGlwbGllciAqIGN0MC5yZWRNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBncmVlbk11bHRpcGxpZXIgPSBjdDEuZ3JlZW5NdWx0aXBsaWVyICogY3QwLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgYmx1ZU11bHRpcGxpZXIgPSBjdDEuYmx1ZU11bHRpcGxpZXIgKiBjdDAuYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGFscGhhT2Zmc2V0ID0gY3QxLmFscGhhTXVsdGlwbGllciAqIGN0MC5hbHBoYU9mZnNldCArIGN0MC5hbHBoYU9mZnNldDtcbiAgICAgICAgY29uc3QgcmVkT2Zmc2V0ID0gY3QxLnJlZE11bHRpcGxpZXIgKiBjdDAucmVkT2Zmc2V0ICsgY3QwLnJlZE9mZnNldDtcbiAgICAgICAgY29uc3QgZ3JlZW5PZmZzZXQgPSBjdDEuZ3JlZW5NdWx0aXBsaWVyICogY3QwLmdyZWVuT2Zmc2V0ICsgY3QwLmdyZWVuT2Zmc2V0O1xuICAgICAgICBjb25zdCBibHVlT2Zmc2V0ID0gY3QxLmJsdWVNdWx0aXBsaWVyICogY3QwLmJsdWVPZmZzZXQgKyBjdDAuYmx1ZU9mZnNldDtcbiAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSByZWRNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSBibHVlTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gYWxwaGFPZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSByZWRPZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IGdyZWVuT2Zmc2V0O1xuICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGJsdWVPZmZzZXQ7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmNvbmNhdCA9IGNvbmNhdDtcbn0pKENvbG9yVHJhbnNmb3JtIHx8IChDb2xvclRyYW5zZm9ybSA9IHt9KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbG9yLXRyYW5zZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2JvdW5kcyc7XG5leHBvcnQgKiBmcm9tICcuL21hdHJpeCc7XG5leHBvcnQgKiBmcm9tICcuL3BvaW50JztcbmV4cG9ydCAqIGZyb20gJy4vcmVjdGFuZ2xlJztcbiIsImV4cG9ydCB2YXIgTWF0cml4O1xuKGZ1bmN0aW9uIChNYXRyaXgpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGE6IDEsXG4gICAgICAgICAgICBiOiAwLFxuICAgICAgICAgICAgYzogMCxcbiAgICAgICAgICAgIGQ6IDEsXG4gICAgICAgICAgICB0eDogMCxcbiAgICAgICAgICAgIHR5OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBNYXRyaXguZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KG1hdHJpeCkge1xuICAgICAgICByZXR1cm4gbWF0cml4LmEgPT09IDFcbiAgICAgICAgICAgICYmIG1hdHJpeC5iID09PSAwXG4gICAgICAgICAgICAmJiBtYXRyaXguYyA9PT0gMFxuICAgICAgICAgICAgJiYgbWF0cml4LmQgPT09IDFcbiAgICAgICAgICAgICYmIG1hdHJpeC50eCA9PT0gMFxuICAgICAgICAgICAgJiYgbWF0cml4LnR5ID09PSAwO1xuICAgIH1cbiAgICBNYXRyaXguaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkobWF0cml4KSB7XG4gICAgICAgIG1hdHJpeC5hID0gMTtcbiAgICAgICAgbWF0cml4LmIgPSAwO1xuICAgICAgICBtYXRyaXguYyA9IDA7XG4gICAgICAgIG1hdHJpeC5kID0gMTtcbiAgICAgICAgbWF0cml4LnR4ID0gMDtcbiAgICAgICAgbWF0cml4LnR5ID0gMDtcbiAgICB9XG4gICAgTWF0cml4LnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gY29weShmcm9tLCB0bykge1xuICAgICAgICB0by5hID0gZnJvbS5hO1xuICAgICAgICB0by5iID0gZnJvbS5iO1xuICAgICAgICB0by5jID0gZnJvbS5jO1xuICAgICAgICB0by5kID0gZnJvbS5kO1xuICAgICAgICB0by50eCA9IGZyb20udHg7XG4gICAgICAgIHRvLnR5ID0gZnJvbS50eTtcbiAgICB9XG4gICAgTWF0cml4LmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIGNvbmNhdChtYXRyaXgwLCBtYXRyaXgxLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgYSA9IG1hdHJpeDEuYSAqIG1hdHJpeDAuYSArIG1hdHJpeDEuYiAqIG1hdHJpeDAuYztcbiAgICAgICAgY29uc3QgYiA9IG1hdHJpeDEuYSAqIG1hdHJpeDAuYiArIG1hdHJpeDEuYiAqIG1hdHJpeDAuZDtcbiAgICAgICAgY29uc3QgYyA9IG1hdHJpeDEuYyAqIG1hdHJpeDAuYSArIG1hdHJpeDEuZCAqIG1hdHJpeDAuYztcbiAgICAgICAgY29uc3QgZCA9IG1hdHJpeDEuYyAqIG1hdHJpeDAuYiArIG1hdHJpeDEuZCAqIG1hdHJpeDAuZDtcbiAgICAgICAgY29uc3QgdHggPSBtYXRyaXgxLnR4ICogbWF0cml4MC5hICsgbWF0cml4MS50eSAqIG1hdHJpeDAuYyArIG1hdHJpeDAudHg7XG4gICAgICAgIGNvbnN0IHR5ID0gbWF0cml4MS50eCAqIG1hdHJpeDAuYiArIG1hdHJpeDEudHkgKiBtYXRyaXgwLmQgKyBtYXRyaXgwLnR5O1xuICAgICAgICByZXN1bHQuYSA9IGE7XG4gICAgICAgIHJlc3VsdC5iID0gYjtcbiAgICAgICAgcmVzdWx0LmMgPSBjO1xuICAgICAgICByZXN1bHQuZCA9IGQ7XG4gICAgICAgIHJlc3VsdC50eCA9IHR4O1xuICAgICAgICByZXN1bHQudHkgPSB0eTtcbiAgICB9XG4gICAgTWF0cml4LmNvbmNhdCA9IGNvbmNhdDtcbiAgICBmdW5jdGlvbiBnZXREZXRlcm1pbmFudChtYXRyaXgpIHtcbiAgICAgICAgcmV0dXJuIG1hdHJpeC5hICogbWF0cml4LmQgLSBtYXRyaXguYiAqIG1hdHJpeC5jO1xuICAgIH1cbiAgICBNYXRyaXguZ2V0RGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudDtcbiAgICBmdW5jdGlvbiBpbnZlcnQobWF0cml4LCByZXN1bHQpIHtcbiAgICAgICAgbGV0IGRldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KTtcbiAgICAgICAgaWYgKGRldGVybWluYW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQuYSA9IDA7XG4gICAgICAgICAgICByZXN1bHQuYiA9IDA7XG4gICAgICAgICAgICByZXN1bHQuYyA9IDA7XG4gICAgICAgICAgICByZXN1bHQuZCA9IDA7XG4gICAgICAgICAgICByZXN1bHQudHggPSAtbWF0cml4LnR4O1xuICAgICAgICAgICAgcmVzdWx0LnR5ID0gLW1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRldGVybWluYW50ID0gMS4wIC8gZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuYSA9IG1hdHJpeC5hICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuYiA9IC1tYXRyaXguYiAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAtbWF0cml4LmMgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gbWF0cml4LmQgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC50eCA9IC1yZXN1bHQuYSAqIG1hdHJpeC50eCAtIHJlc3VsdC5jICogbWF0cml4LnR5O1xuICAgICAgICAgICAgcmVzdWx0LnR5ID0gLXJlc3VsdC5iICogbWF0cml4LnR4IC0gcmVzdWx0LmQgKiBtYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTWF0cml4LmludmVydCA9IGludmVydDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmVzdWx0LnggPSB4ICogbWF0cml4LmEgKyB5ICogbWF0cml4LmMgKyBtYXRyaXgudHg7XG4gICAgICAgIHJlc3VsdC55ID0geCAqIG1hdHJpeC5iICsgeSAqIG1hdHJpeC5kICsgbWF0cml4LnR5O1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQgPSB0cmFuc2Zvcm1Qb2ludDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1JbnZlcnNlUG9pbnQobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGxldCBkZXRlcm1pbmFudCA9IGdldERldGVybWluYW50KG1hdHJpeCk7XG4gICAgICAgIGlmIChkZXRlcm1pbmFudCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0LnggPSAtbWF0cml4LnR4O1xuICAgICAgICAgICAgcmVzdWx0LnkgPSAtbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGV0ZXJtaW5hbnQgPSAxIC8gZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICAgICAgcmVzdWx0LnggPSBkZXRlcm1pbmFudCAqIChtYXRyaXguYyAqIChtYXRyaXgudHkgLSB5KSArIG1hdHJpeC5kICogKHggLSBtYXRyaXgudHgpKTtcbiAgICAgICAgICAgIHJlc3VsdC55ID0gZGV0ZXJtaW5hbnQgKiAobWF0cml4LmEgKiAoeSAtIG1hdHJpeC50eSkgKyBtYXRyaXguYiAqIChtYXRyaXgudHggLSB4KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybUludmVyc2VQb2ludCA9IHRyYW5zZm9ybUludmVyc2VQb2ludDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Cb3VuZHMobWF0cml4LCBib3VuZHMsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGEsIGIsIGMsIGQsIHR4LCB0eSwgfSA9IG1hdHJpeDtcbiAgICAgICAgY29uc3QgcnggPSBib3VuZHMueDtcbiAgICAgICAgY29uc3QgcnkgPSBib3VuZHMueTtcbiAgICAgICAgY29uc3QgcnIgPSByeCArIGJvdW5kcy53aWR0aDtcbiAgICAgICAgY29uc3QgcmIgPSByeSArIGJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IG54MSA9IHJ4ICogYSArIHJ5ICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTEgPSByeCAqIGIgKyByeSAqIGQgKyB0eTtcbiAgICAgICAgY29uc3QgbngyID0gcnIgKiBhICsgcnkgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MiA9IHJyICogYiArIHJ5ICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDMgPSByciAqIGEgKyByYiAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkzID0gcnIgKiBiICsgcmIgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54NCA9IHJ4ICogYSArIHJiICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTQgPSByeCAqIGIgKyByYiAqIGQgKyB0eTtcbiAgICAgICAgbGV0IGxlZnQgPSBueDE7XG4gICAgICAgIGlmIChsZWZ0ID4gbngyKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbngyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0ID4gbngzKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbngzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0ID4gbng0KSB7XG4gICAgICAgICAgICBsZWZ0ID0gbng0O1xuICAgICAgICB9XG4gICAgICAgIGxldCB0b3AgPSBueTE7XG4gICAgICAgIGlmICh0b3AgPiBueTIpIHtcbiAgICAgICAgICAgIHRvcCA9IG55MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9wID4gbnkzKSB7XG4gICAgICAgICAgICB0b3AgPSBueTM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcCA+IG55NCkge1xuICAgICAgICAgICAgdG9wID0gbnk0O1xuICAgICAgICB9XG4gICAgICAgIGxldCByaWdodCA9IG54MTtcbiAgICAgICAgaWYgKHJpZ2h0IDwgbngyKSB7XG4gICAgICAgICAgICByaWdodCA9IG54MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgPCBueDMpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbngzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCA8IG54NCkge1xuICAgICAgICAgICAgcmlnaHQgPSBueDQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJvdHRvbSA9IG55MTtcbiAgICAgICAgaWYgKGJvdHRvbSA8IG55Mikge1xuICAgICAgICAgICAgYm90dG9tID0gbnkyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3R0b20gPCBueTMpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55MztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tIDwgbnk0KSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTQ7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnggPSBsZWZ0O1xuICAgICAgICByZXN1bHQueSA9IHRvcDtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgICAgICByZXN1bHQuaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtQm91bmRzID0gdHJhbnNmb3JtQm91bmRzO1xufSkoTWF0cml4IHx8IChNYXRyaXggPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBQb2ludDtcbihmdW5jdGlvbiAoUG9pbnQpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgIH1cbiAgICBQb2ludC5lbXB0eSA9IGVtcHR5O1xufSkoUG9pbnQgfHwgKFBvaW50ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUmVjdGFuZ2xlO1xuKGZ1bmN0aW9uIChSZWN0YW5nbGUpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFJlY3RhbmdsZS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KHJlY3RhbmdsZSkge1xuICAgICAgICByZWN0YW5nbGUueCA9IDA7XG4gICAgICAgIHJlY3RhbmdsZS55ID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLndpZHRoID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLmhlaWdodCA9IDA7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0YW5nbGUud2lkdGggPT09IDAgfHwgcmVjdGFuZ2xlLmhlaWdodCA9PT0gMDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGNvbnRhaW5zKHJlY3RhbmdsZSwgcG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZS54IDwgcG9pbnQueFxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnggKyByZWN0YW5nbGUud2lkdGggPiBwb2ludC54XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueSA8IHBvaW50LnlcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS55ICsgcmVjdGFuZ2xlLmhlaWdodCA+IHBvaW50Lnk7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5jb250YWlucyA9IGNvbnRhaW5zO1xufSkoUmVjdGFuZ2xlIHx8IChSZWN0YW5nbGUgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QsIFNvdXJjZSB9IGZyb20gJ0BlMmQvY29yZSc7XG5pbXBvcnQgeyBDb2xvclRyYW5zZm9ybSwgTWF0cml4LCBSZWN0YW5nbGUgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgSW1hZ2VFeHRlbnNpb24sIElNQUdFIH0gZnJvbSAnLi9pbWFnZSc7XG5jb25zdCBib3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihpbWFnZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gU291cmNlLmdldFJlc291cmNlKGltYWdlLCBlbmdpbmUpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5sb2FkZWQgfHwgIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICAgICAgY29uc3QgcGxhdGZvcm0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IHBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgICAgIGlmIChDb2xvclRyYW5zZm9ybS5pc0VtcHR5V2l0aEFscGhhKGNvbG9yVHJhbnNmb3JtKSkge1xuICAgICAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjdXN0b21Db250ZXh0ID0gcGxhdGZvcm0uY3JlYXRlQ3VzdG9tQ29udGV4dCgpO1xuICAgICAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICAgICAgYm91bmRzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybUJvdW5kcyhtYXRyaXgsIGJvdW5kcywgYm91bmRzKTtcbiAgICAgICAgICAgIGlmIChSZWN0YW5nbGUuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5jbGVhclJlY3QoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGN1c3RvbUNvbnRleHQuZ2V0SW1hZ2VEYXRhKGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnN0IHJtID0gY29sb3JUcmFuc2Zvcm0ucmVkTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IGdtID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3QgYm0gPSBjb2xvclRyYW5zZm9ybS5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IGFtID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3Qgcm8gPSBjb2xvclRyYW5zZm9ybS5yZWRPZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBnbyA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgYm8gPSBjb2xvclRyYW5zZm9ybS5ibHVlT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgYW8gPSBjb2xvclRyYW5zZm9ybS5hbHBoYU9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gaW1hZ2VEYXRhO1xuICAgICAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IGRhdGE7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogcm0gKyBybztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogZ20gKyBnbztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogYm0gKyBibztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogYW0gKyBhbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgYm91bmRzLngsIGJvdW5kcy55KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKGN1c3RvbUNvbnRleHQuY2FudmFzLCBib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCwgYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgcGxhdGZvcm0uZGVzdHJveUN1c3RvbUNvbnRleHQoY3VzdG9tQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgSW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KElNQUdFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiB8fCAoQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCwgU291cmNlIH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSB9IGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0IHZhciBDYW52YXNJbWFnZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzSW1hZ2VFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCByZXNvdXJjZSA9IFNvdXJjZS5nZXRSZXNvdXJjZShpbWFnZSwgZW5naW5lKTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZT8ubG9hZGVkIHx8ICFyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gZW5naW5lLnBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IGNvbnRleHQ7XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgfVxuICAgIENhbnZhc0ltYWdlRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBJbWFnZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoSU1BR0UsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc0ltYWdlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ2FudmFzSW1hZ2VFeHRlbnNpb24gfHwgKENhbnZhc0ltYWdlRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90LCB9IGZyb20gJ0BlMmQvY29yZSc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BlMmQvcmVzb3VyY2VzJztcbmV4cG9ydCBjb25zdCBJTUFHRSA9ICdpbWFnZSc7XG5leHBvcnQgdmFyIEltYWdlO1xuKGZ1bmN0aW9uIChJbWFnZSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhpbWFnZSwgYm91bmRzLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IGltYWdlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5sb2FkZWQgfHwgIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgICAgIGJvdW5kcy54ID0geDtcbiAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgYm91bmRzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgSW1hZ2UuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoSW1hZ2UgfHwgKEltYWdlID0ge30pKTtcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBJbWFnZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoSW1hZ2VFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBsb2NhbCB9ID0gZW5naW5lLnBvaW50ZXJFdmVudHM7XG4gICAgICAgIEltYWdlLmNhbGN1bGF0ZUJvdW5kcyhpbWFnZSwgYm91bmRzLCBlbmdpbmUpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKGJvdW5kcywgbG9jYWwpO1xuICAgIH1cbiAgICBJbWFnZUV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChJTUFHRSwgaGl0VGVzdCk7XG4gICAgICAgIEltYWdlUmVzb3VyY2UuaW5pdChlbmdpbmUpO1xuICAgIH1cbiAgICBJbWFnZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKEltYWdlRXh0ZW5zaW9uIHx8IChJbWFnZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2ltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vY2FudmFzLWltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vY2FudmFzLWltYWdlLWNvbG9yJztcbiIsImV4cG9ydCB2YXIgSW1hZ2VSZXNvdXJjZTtcbihmdW5jdGlvbiAoSW1hZ2VSZXNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIHJlc29sdmUoYXNzZXQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBleHRlbnNpb24gPSBhc3NldC5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgICBzd2l0Y2ggKGV4dGVuc2lvbikge1xuICAgICAgICAgICAgY2FzZSAncG5nJzpcbiAgICAgICAgICAgIGNhc2UgJ2pwZyc6XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gYXNzZXQ7XG4gICAgICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaW1hZ2UgbG9hZGVkOiAke2Fzc2V0fWApO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5pbWFnZSA9IGltYWdlO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdpbWFnZSBsb2FkIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBJbWFnZVJlc291cmNlLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvbHZlKTtcbiAgICB9XG4gICAgSW1hZ2VSZXNvdXJjZS5pbml0ID0gaW5pdDtcbn0pKEltYWdlUmVzb3VyY2UgfHwgKEltYWdlUmVzb3VyY2UgPSB7fSkpO1xuIiwiaW1wb3J0IHsgU2hhcGVFeHRlbnNpb24sIFNIQVBFIH0gZnJvbSAnLi9zaGFwZSc7XG5leHBvcnQgdmFyIENhbnZhc1NoYXBlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNTaGFwZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihzaGFwZSwgZW5naW5lKSB7XG4gICAgfVxuICAgIENhbnZhc1NoYXBlRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBTaGFwZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoU0hBUEUsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc1NoYXBlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ2FudmFzU2hhcGVFeHRlbnNpb24gfHwgKENhbnZhc1NoYXBlRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IEJvdW5kcyB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBQYXRoQ29tbWFuZCB9IGZyb20gJy4vcGF0aCc7XG5pbXBvcnQgeyBHcmFwaGljc1N0cmluZyB9IGZyb20gJy4vc3RyaW5nJztcbmV4cG9ydCB2YXIgUmVjdGFuZ2xlRGF0YTtcbihmdW5jdGlvbiAoUmVjdGFuZ2xlRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHdpZHRoID0gMCwgaGVpZ2h0ID0gMCwgfSA9IGRhdGE7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCwgeSk7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShSZWN0YW5nbGVEYXRhIHx8IChSZWN0YW5nbGVEYXRhID0ge30pKTtcbmV4cG9ydCB2YXIgRWxsaXBzZURhdGE7XG4oZnVuY3Rpb24gKEVsbGlwc2VEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgcmFkaXVzLCByYWRpdXNYID0gMCwgcmFkaXVzWSA9IDAsIH0gPSBkYXRhO1xuICAgICAgICBjb25zdCByeCA9IHJhZGl1cyA/PyByYWRpdXNYO1xuICAgICAgICBjb25zdCByeSA9IHJhZGl1cyA/PyByYWRpdXNZO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHggLSByeCwgeSAtIHJ5KTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4ICsgcngsIHkgKyByeSk7XG4gICAgfVxuICAgIEVsbGlwc2VEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEVsbGlwc2VEYXRhIHx8IChFbGxpcHNlRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIFBhdGhEYXRhO1xuKGZ1bmN0aW9uIChQYXRoRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoRGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcGF0aERhdGE7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIEdyYXBoaWNzU3RyaW5nLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBkYXRhW2ldO1xuICAgICAgICAgICAgICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyhjb21tYW5kLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFBhdGhEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFBhdGhEYXRhIHx8IChQYXRoRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIEdyYXBoaWNzRGF0YTtcbihmdW5jdGlvbiAoR3JhcGhpY3NEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IGRhdGE7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAncmVjdGFuZ2xlJzpcbiAgICAgICAgICAgICAgICBSZWN0YW5nbGVEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICAgICAgICAgICAgRWxsaXBzZURhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwYXRoJzpcbiAgICAgICAgICAgICAgICBQYXRoRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEdyYXBoaWNzRGF0YSB8fCAoR3JhcGhpY3NEYXRhID0ge30pKTtcbiIsImltcG9ydCB7IEJvdW5kcyB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5leHBvcnQgdmFyIFBhdGhDb21tYW5kO1xuKGZ1bmN0aW9uIChQYXRoQ29tbWFuZCkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBwYXRoO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ21vdmVUbyc6XG4gICAgICAgICAgICBjYXNlICdsaW5lVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBtb3ZlVG8ueCA/PyAwLCBtb3ZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1cnZlVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3VydmVUby5jeCA/PyAwLCBjdXJ2ZVRvLmN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3VydmVUby54ID8/IDAsIGN1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1YmljQ3VydmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby5jeCA/PyAwLCBjdWJpY0N1cnZlVG8uY3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8uc3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLnN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLnggPz8gMCwgY3ViaWNDdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFBhdGhDb21tYW5kIHx8IChQYXRoQ29tbWFuZCA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQYXRoQ29tbWFuZCwgfSBmcm9tICcuL3BhdGgnO1xuY29uc3QgVEVTVF9DT01NQU5EID0gL1tNbUxsSGhWdkNjU3NRcVR0QWFael0vO1xuY29uc3QgVEVTVF9TUEFDRSA9IC9bXFxzLF0vO1xuY29uc3QgVEVTVF9OVU1CRVIgPSAvWy0rLlxcZF0vO1xuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU3RyaW5nU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gJyc7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAwO1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgIH1cbiAgICBzZXRQYXRoKHBhdGgpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgfVxuICAgIGhhc0RhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uIDwgdGhpcy5wYXRoLmxlbmd0aDtcbiAgICB9XG4gICAgZ2V0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZDtcbiAgICB9XG4gICAgZ2V0U2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgICB9XG4gICAgZ2V0QnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWZmZXI7XG4gICAgfVxuICAgIHJlYWROZXh0KCkge1xuICAgICAgICB0aGlzLnJlYWRDb21tYW5kKCk7XG4gICAgICAgIHRoaXMucmVhZE51bWJlcnMoKTtcbiAgICB9XG4gICAgcmVhZENvbW1hbmQoKSB7XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IG51bGw7XG4gICAgICAgIHdoaWxlICh0aGlzLnBvc2l0aW9uIDwgdGhpcy5wYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMucGF0aFt0aGlzLnBvc2l0aW9uXTtcbiAgICAgICAgICAgIGlmIChURVNUX0NPTU1BTkQudGVzdChjb21tYW5kKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZCA9IGNvbW1hbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVhZE51bWJlcnMoKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgICAgIGxldCBudW1iZXIgPSAnJztcbiAgICAgICAgd2hpbGUgKHRoaXMucG9zaXRpb24gPCB0aGlzLnBhdGgubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFyID0gdGhpcy5wYXRoW3RoaXMucG9zaXRpb25dO1xuICAgICAgICAgICAgaWYgKFRFU1RfTlVNQkVSLnRlc3QoY2hhcikpIHtcbiAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2hhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKFRFU1RfU1BBQ0UudGVzdChjaGFyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyW3RoaXMuc2l6ZSsrXSA9IHBhcnNlRmxvYXQobnVtYmVyKTtcbiAgICAgICAgICAgICAgICBudW1iZXIgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKFRFU1RfQ09NTUFORC50ZXN0KGNoYXIpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlcikge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJbdGhpcy5zaXplKytdID0gcGFyc2VGbG9hdChudW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU3RyaW5nUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBuZXcgR3JhcGhpY3NTdHJpbmdTdHJlYW0oKTtcbiAgICAgICAgdGhpcy5jb21tYW5kID0geyB0eXBlOiAnbW92ZVRvJyB9O1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgICAgIHRoaXMubGFzdFkgPSAwO1xuICAgIH1cbiAgICBzZXRQYXRoKHBhdGgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0uc2V0UGF0aChwYXRoKTtcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgICAgIHRoaXMubGFzdFkgPSAwO1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSBmYWxzZTtcbiAgICB9XG4gICAgaGFzRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLmhhc0RhdGEoKTtcbiAgICB9XG4gICAgZ2V0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZEV4aXN0cyA/IHRoaXMuY29tbWFuZCA6IG51bGw7XG4gICAgfVxuICAgIHJlYWROZXh0KCkge1xuICAgICAgICB0aGlzLnN0cmVhbS5yZWFkTmV4dCgpO1xuICAgICAgICB0aGlzLnBhcnNlKCk7XG4gICAgfVxuICAgIHBhcnNlKCkge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gdGhpcy5zdHJlYW0uZ2V0Q29tbWFuZCgpO1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSAhIWNvbW1hbmQ7XG4gICAgICAgIGlmICghdGhpcy5jb21tYW5kRXhpc3RzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy5zdHJlYW0uZ2V0QnVmZmVyKCk7XG4gICAgICAgIGNvbnN0IFt4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLF0gPSBidWZmZXI7XG4gICAgICAgIGxldCBjeCA9IDA7XG4gICAgICAgIGxldCBjeSA9IDA7XG4gICAgICAgIHN3aXRjaCAoY29tbWFuZCkge1xuICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdtb3ZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby54ID0geDA7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby55ID0geTA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBtb3ZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IG1vdmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbW92ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueCA9IHgwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnkgPSB5MCArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBtb3ZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IG1vdmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHgwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHkwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB4MCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0geTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0geDAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBsaW5lVG8ueDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdWJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHgwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndic6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB4MCArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0geDA7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IHkwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSB4MTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0geTE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0geDI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0geTI7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IHgwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0geTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSB4MSArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IHkxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSB4MiArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0geTIgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSBjeDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0gY3k7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeCA9IHgwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSB5MDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSB4MTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnkgPSB5MTtcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gY3g7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGN5O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSB4MCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IHkwICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSB4MSArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0geTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IHkwO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSB4MTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0geTE7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0geDAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0geTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSB4MSArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IHkxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBjdXJ2ZVRvLnggLSAoY3VydmVUby5jeCAtIGN1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0gY3VydmVUby55IC0gKGN1cnZlVG8uY3kgLSBjdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSBjeDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IGN5O1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0geTA7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gY3g7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSBjeTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0geDAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSB5MCArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuY29uc3QgcmVhZGVyID0gbmV3IEdyYXBoaWNzU3RyaW5nUmVhZGVyKCk7XG5leHBvcnQgdmFyIEdyYXBoaWNzU3RyaW5nO1xuKGZ1bmN0aW9uIChHcmFwaGljc1N0cmluZykge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoLCBib3VuZHMpIHtcbiAgICAgICAgcmVhZGVyLnNldFBhdGgocGF0aCk7XG4gICAgICAgIHdoaWxlIChyZWFkZXIuaGFzRGF0YSgpKSB7XG4gICAgICAgICAgICByZWFkZXIucmVhZE5leHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSByZWFkZXIuZ2V0Q29tbWFuZCgpO1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc1N0cmluZyB8fCAoR3JhcGhpY3NTdHJpbmcgPSB7fSkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhpY3Mge1xuICAgIGNvbnN0cnVjdG9yKHNoYXBlKSB7XG4gICAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZTtcbiAgICB9XG4gICAgYmVnaW5GaWxsKGNvbG9yID0gMCwgYWxwaGEgPSAxKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBiZWdpbkJpdG1hcEZpbGwoc3JjLCBtYXRyaXgsIHJlcGVhdCA9IHRydWUsIHNtb290aCA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdiaXRtYXAnLFxuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgcmVwZWF0LFxuICAgICAgICAgICAgc21vb3RoLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBiZWdpbkdyYWRpZW50RmlsbCh0eXBlLCBjb2xvciwgYWxwaGEsIHJhdGlvLCBtYXRyaXgsIHNwcmVhZCA9ICdyZXBlYXQnLCBpbnRlcnBvbGF0aW9uID0gJ3JnYicsIGZvY2FsUG9pbnRSYXRpbyA9IDApIHtcbiAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHNwcmVhZCxcbiAgICAgICAgICAgIGludGVycG9sYXRpb24sXG4gICAgICAgICAgICBmb2NhbFBvaW50UmF0aW8sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxpbmVTdHlsZSh0aGlja25lc3MgPSAwLCBjb2xvciA9IDAsIGFscGhhID0gMSwgcGl4ZWxIaW50aW5nID0gZmFsc2UsIHNjYWxlTW9kZSA9ICdub25lJywgY2FwcyA9ICdyb3VuZCcsIGpvaW50cyA9ICdyb3VuZCcsIG1pdGVyTGltaXQgPSAzKSB7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0ge1xuICAgICAgICAgICAgdGhpY2tuZXNzLFxuICAgICAgICAgICAgcGl4ZWxIaW50aW5nLFxuICAgICAgICAgICAgc2NhbGVNb2RlLFxuICAgICAgICAgICAgY2FwcyxcbiAgICAgICAgICAgIGpvaW50cyxcbiAgICAgICAgICAgIG1pdGVyTGltaXQsXG4gICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxpbmVHcmFkaWVudFN0eWxlKHR5cGUsIGNvbG9yLCBhbHBoYSwgcmF0aW8sIG1hdHJpeCwgc3ByZWFkID0gJ3JlcGVhdCcsIGludGVycG9sYXRpb24gPSAncmdiJywgZm9jYWxQb2ludFJhdGlvID0gMCkge1xuICAgICAgICBpZiAoIXRoaXMuc3Ryb2tlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHJva2UuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICBzcHJlYWQsXG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9uLFxuICAgICAgICAgICAgZm9jYWxQb2ludFJhdGlvLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsaW5lQml0bWFwU3R5bGUoc3JjLCBtYXRyaXgsIHJlcGVhdCA9IHRydWUsIHNtb290aCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy5zdHJva2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0cm9rZS5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ2JpdG1hcCcsXG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICBzbW9vdGgsXG4gICAgICAgIH07XG4gICAgfVxuICAgIG1vdmVUbyh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICBwYXRoLnB1c2goeyB0eXBlOiAnbW92ZVRvJywgeCwgeSB9KTtcbiAgICB9XG4gICAgbGluZVRvKHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goeyB0eXBlOiAnbGluZVRvJywgeCwgeSB9KTtcbiAgICB9XG4gICAgY3VydmVUbyhjeCwgY3ksIHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1cnZlVG8nLCBjeCwgY3ksIHgsIHksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjdWJpY0N1cnZlVG8oY3gsIGN5LCBzeCwgc3ksIHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1cnZlVG8nLCBjeCwgY3ksIHN4LCBzeSwgeCwgeSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdSb3VuZFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgZWxsaXBzZVdpZHRoID0gMCwgZWxsaXBzZUhlaWdodCA9IDApIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnN0IHcgPSBlbGxpcHNlV2lkdGg7XG4gICAgICAgIGNvbnN0IGggPSBlbGxpcHNlSGVpZ2h0O1xuICAgICAgICBjb25zdCBrID0gMC41NTIyODQ4O1xuICAgICAgICBjb25zdCBveCA9ICh3IC8gMikgKiBrO1xuICAgICAgICBjb25zdCBveSA9IChoIC8gMikgKiBrO1xuICAgICAgICBjb25zdCB4ZSA9IHggKyB3O1xuICAgICAgICBjb25zdCB5ZSA9IHkgKyBoO1xuICAgICAgICBjb25zdCB4bSA9IHggKyB3IC8gMjtcbiAgICAgICAgY29uc3QgeW0gPSB5ICsgaCAvIDI7XG4gICAgICAgIGNvbnN0IGR4ID0gd2lkdGggLSB3O1xuICAgICAgICBjb25zdCBkeSA9IGhlaWdodCAtIGg7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbW92ZVRvJyxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5OiB5bSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4LFxuICAgICAgICAgICAgY3k6IHltIC0gb3ksXG4gICAgICAgICAgICBzeDogeG0gLSBveCxcbiAgICAgICAgICAgIHN5OiB5LFxuICAgICAgICAgICAgeDogeG0sXG4gICAgICAgICAgICB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeG0gKyBkeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeG0gKyBveCArIGR4LFxuICAgICAgICAgICAgY3k6IHksXG4gICAgICAgICAgICBzeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHN5OiB5bSAtIG95LFxuICAgICAgICAgICAgeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHk6IHltLFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHk6IHltICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeGUgKyBkeCxcbiAgICAgICAgICAgIGN5OiB5bSArIG95ICsgZHksXG4gICAgICAgICAgICBzeDogeG0gKyBveCArIGR4LFxuICAgICAgICAgICAgc3k6IHllICsgZHksXG4gICAgICAgICAgICB4OiB4bSArIGR4LFxuICAgICAgICAgICAgeTogeWUgKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhtLFxuICAgICAgICAgICAgeTogeWUgKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4bSAtIG94LFxuICAgICAgICAgICAgY3k6IHllICsgZHksXG4gICAgICAgICAgICBzeDogeCxcbiAgICAgICAgICAgIHN5OiB5bSArIG95ICsgZHksXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeTogeW0gKyBkeSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAncmVjdGFuZ2xlJztcbiAgICAgICAgZGF0YS54ID0geDtcbiAgICAgICAgZGF0YS55ID0geTtcbiAgICAgICAgZGF0YS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBkYXRhLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgZHJhd0NpcmNsZSh4LCB5LCByYWRpdXMpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAnZWxsaXBzZSc7XG4gICAgICAgIGRhdGEueCA9IHg7XG4gICAgICAgIGRhdGEueSA9IHk7XG4gICAgICAgIGRhdGEucmFkaXVzID0gcmFkaXVzO1xuICAgIH1cbiAgICBkcmF3RWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ2VsbGlwc2UnO1xuICAgICAgICBkYXRhLnJhZGl1c1ggPSB3aWR0aCAvIDI7XG4gICAgICAgIGRhdGEucmFkaXVzWSA9IGhlaWdodCAvIDI7XG4gICAgICAgIGRhdGEueCA9IHggLSBkYXRhLnJhZGl1c1g7XG4gICAgICAgIGRhdGEueSA9IHkgLSBkYXRhLnJhZGl1c1k7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5zaGFwZS5kYXRhO1xuICAgIH1cbiAgICBjcmVhdGVEYXRhKCkge1xuICAgICAgICBjb25zdCB7IHNoYXBlLCBmaWxsLCBzdHJva2UgfSA9IHRoaXM7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNoYXBlLmRhdGEpKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHNoYXBlLmRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBzaGFwZS5kYXRhID0gW3NoYXBlLmRhdGFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hhcGUuZGF0YSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyYXBoaWNzRGF0YSA9IHsgdHlwZTogJ3BhdGgnLCBmaWxsLCBzdHJva2UgfTtcbiAgICAgICAgc2hhcGUuZGF0YS5wdXNoKGdyYXBoaWNzRGF0YSk7XG4gICAgICAgIHJldHVybiBncmFwaGljc0RhdGE7XG4gICAgfVxuICAgIGJlZ2luUGF0aCgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLmRhdGEgPSBbXTtcbiAgICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcbiAgICB9XG4gICAgZ2V0UGF0aCgpIHtcbiAgICAgICAgY29uc3QgeyBzaGFwZSB9ID0gdGhpcztcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNoYXBlLmRhdGEpIHx8ICFzaGFwZS5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gc2hhcGUuZGF0YVtzaGFwZS5kYXRhLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5kYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YS5kYXRhO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vZGF0YS9kYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9wYXRoJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9zdHJpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL3N0eWxlJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JhcGhpY3MnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFwZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy1zaGFwZSc7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BlMmQvY29yZSc7XG5pbXBvcnQgeyBCb3VuZHMsIFJlY3RhbmdsZSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGUyZC9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgR3JhcGhpY3NEYXRhIH0gZnJvbSAnLi9kYXRhL2RhdGEnO1xuaW1wb3J0IEdyYXBoaWNzIGZyb20gJy4vZ3JhcGhpY3MnO1xuZXhwb3J0IGNvbnN0IFNIQVBFID0gJ3NoYXBlJztcbmNvbnN0IGJvdW5kcyA9IEJvdW5kcy5lbXB0eSgpO1xuZXhwb3J0IHZhciBTaGFwZTtcbihmdW5jdGlvbiAoU2hhcGUpIHtcbiAgICBmdW5jdGlvbiBnZXRHcmFwaGljcyhzaGFwZSkge1xuICAgICAgICByZXR1cm4gbmV3IEdyYXBoaWNzKHNoYXBlKTtcbiAgICB9XG4gICAgU2hhcGUuZ2V0R3JhcGhpY3MgPSBnZXRHcmFwaGljcztcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoc2hhcGUsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHNoYXBlO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEJvdW5kcy5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhW2ldLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJvdW5kcy5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdpZHRoID0gYm91bmRzLm1heFggLSBib3VuZHMubWluWDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gYm91bmRzLm1heFkgLSBib3VuZHMubWluWTtcbiAgICAgICAgY29uc3QgeCA9IGJvdW5kcy5taW5YICsgUGl2b3QuZ2V0WChzaGFwZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gYm91bmRzLm1pblkgKyBQaXZvdC5nZXRZKHNoYXBlLCBoZWlnaHQpO1xuICAgICAgICByZXN1bHQueCA9IHg7XG4gICAgICAgIHJlc3VsdC55ID0geTtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIFNoYXBlLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFNoYXBlIHx8IChTaGFwZSA9IHt9KSk7XG5jb25zdCByZWN0YW5nbGUgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgU2hhcGVFeHRlbnNpb247XG4oZnVuY3Rpb24gKFNoYXBlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdChzaGFwZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgbG9jYWwgfSA9IGVuZ2luZS5wb2ludGVyRXZlbnRzO1xuICAgICAgICBTaGFwZS5jYWxjdWxhdGVCb3VuZHMoc2hhcGUsIHJlY3RhbmdsZSk7XG4gICAgICAgIHJldHVybiBSZWN0YW5nbGUuY29udGFpbnMocmVjdGFuZ2xlLCBsb2NhbCk7XG4gICAgfVxuICAgIFNoYXBlRXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KFNIQVBFLCBoaXRUZXN0KTtcbiAgICAgICAgSW1hZ2VSZXNvdXJjZS5pbml0KGVuZ2luZSk7XG4gICAgfVxuICAgIFNoYXBlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoU2hhcGVFeHRlbnNpb24gfHwgKFNoYXBlRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IENhbnZhc1BhdHRlcm5zIH0gZnJvbSAnQGUyZC9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IEZvbnQgfSBmcm9tICcuL2ZvbnQnO1xuaW1wb3J0IHsgVGV4dEV4dGVuc2lvbiwgVEVYVCB9IGZyb20gJy4vdGV4dCc7XG5pbXBvcnQgeyBUZXh0Rm9ybWF0IH0gZnJvbSAnLi9mb3JtYXQnO1xuY29uc3QgdmFsaWRUZXh0Rm9ybWF0ID0ge307XG5leHBvcnQgdmFyIENhbnZhc1RleHRFeHRlbnNpb247XG4oZnVuY3Rpb24gKENhbnZhc1RleHRFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoY29tcG9uZW50LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghdGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbWF0cml4LCBjb2xvclRyYW5zZm9ybSB9ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0ZXh0Rm9ybWF0LCBib3JkZXIsIGJhY2tncm91bmQsIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIFRleHRGb3JtYXQuZ2V0VmFsaWRUZXh0Rm9ybWF0KHRleHRGb3JtYXQsIHZhbGlkVGV4dEZvcm1hdCk7XG4gICAgICAgIGNvbnN0IGZvcm1hdFNpemUgPSB2YWxpZFRleHRGb3JtYXQuc2l6ZTtcbiAgICAgICAgY29uc3QgZm9ybWF0TGV0dGVyU3BhY2luZyA9IHZhbGlkVGV4dEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICBjb25zdCBmb3JtYXRMZWFkaW5nID0gdmFsaWRUZXh0Rm9ybWF0LmxlYWRpbmc7XG4gICAgICAgIGNvbnN0IGZvbnQgPSBGb250LmdldEZvbnQodmFsaWRUZXh0Rm9ybWF0LmZvbnQpO1xuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBlbmdpbmUucGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB0ZXh0V2lkdGggPSBGb250LmdldFRleHRXaWR0aChmb250LCB2YWxpZFRleHRGb3JtYXQsIGxpbmVzKTtcbiAgICAgICAgY29uc3QgdGV4dEhlaWdodCA9IEZvbnQuZ2V0VGV4dEhlaWdodCh2YWxpZFRleHRGb3JtYXQsIGxpbmVzKTtcbiAgICAgICAgY29uc3QgcmVhbFdpZHRoID0gd2lkdGggPz8gdGV4dFdpZHRoO1xuICAgICAgICBjb25zdCByZWFsSGVpZ2h0ID0gaGVpZ2h0ID8/IHRleHRIZWlnaHQ7XG4gICAgICAgIGNvbnN0IG9mZnNldFggPSBQaXZvdC5nZXRYKGNvbXBvbmVudCwgcmVhbFdpZHRoKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IFBpdm90LmdldFkoY29tcG9uZW50LCByZWFsSGVpZ2h0KTtcbiAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICAgICAgICBjb25zdCBhbGlnblZlcnRpY2FsVmFsdWUgPSBUZXh0Rm9ybWF0LmdldFZlcnRpY2FsQWxpZ25WYWx1ZSh2YWxpZFRleHRGb3JtYXQudmVydGljYWxBbGlnbik7XG4gICAgICAgICAgICB5ID0gKGhlaWdodCAtIHRleHRIZWlnaHQpICogYWxpZ25WZXJ0aWNhbFZhbHVlO1xuICAgICAgICAgICAgaWYgKHkgPCAwKSB7XG4gICAgICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICBpZiAoYmFja2dyb3VuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnJztcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oYmFja2dyb3VuZCwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgY29udGV4dDJkLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLnJlY3Qob2Zmc2V0WCwgb2Zmc2V0WSwgcmVhbFdpZHRoLCByZWFsSGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oYm9yZGVyLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gJyc7XG4gICAgICAgICAgICBjb250ZXh0MmQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQucmVjdChvZmZzZXRYLCBvZmZzZXRZLCByZWFsV2lkdGgsIHJlYWxIZWlnaHQpO1xuICAgICAgICAgICAgY29udGV4dDJkLnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQyZC5mb250ID0gRm9udC5nZXRTdHlsZUZvbnQodmFsaWRUZXh0Rm9ybWF0LmZvbnQsIGZvcm1hdFNpemUpO1xuICAgICAgICBjb250ZXh0MmQudGV4dEJhc2VsaW5lID0gJ2FscGhhYmV0aWMnO1xuICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnJztcbiAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybih2YWxpZFRleHRGb3JtYXQuY29sb3IsIHZhbGlkVGV4dEZvcm1hdC5hbHBoYSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICB5ICs9IG9mZnNldFk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IEZvbnQuZ2V0TGluZVdpZHRoKGZvbnQsIHZhbGlkVGV4dEZvcm1hdCwgbGluZSk7XG4gICAgICAgICAgICBjb25zdCBhbGlnblZhbHVlID0gVGV4dEZvcm1hdC5nZXRBbGlnblZhbHVlKHZhbGlkVGV4dEZvcm1hdC5hbGlnbik7XG4gICAgICAgICAgICBsZXQgeCA9IChyZWFsV2lkdGggLSBsaW5lV2lkdGgpICogYWxpZ25WYWx1ZTtcbiAgICAgICAgICAgIGlmICh4IDwgMCkge1xuICAgICAgICAgICAgICAgIHggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeCArPSBvZmZzZXRYO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaW5lLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3QgPSBsaW5lLmNoYXJBdChqKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmQgPSBsaW5lLmNoYXJBdChqICsgMSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShmb250LCBmb3JtYXRTaXplLCBmaXJzdCwgc2Vjb25kKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0MmQuZmlsbFRleHQoZmlyc3QsIHgsIHkgKyBmb3JtYXRTaXplKTtcbiAgICAgICAgICAgICAgICB4ICs9IGFkdmFuY2UgKyBmb3JtYXRMZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeSArPSBmb3JtYXRTaXplICsgZm9ybWF0TGVhZGluZztcbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNUZXh0RXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBUZXh0RXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChURVhULCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNUZXh0RXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ2FudmFzVGV4dEV4dGVuc2lvbiB8fCAoQ2FudmFzVGV4dEV4dGVuc2lvbiA9IHt9KSk7XG4iLCJjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmV4cG9ydCBjb25zdCBFTSA9IDEwMjQ7XG5jb25zdCBmb250cyA9IG5ldyBNYXAoKTtcbmV4cG9ydCB2YXIgRm9udDtcbihmdW5jdGlvbiAoRm9udCkge1xuICAgIGZ1bmN0aW9uIGdldFN0eWxlRm9udChmb250LCBzaXplKSB7XG4gICAgICAgIHJldHVybiBgJHtzaXplfXB4ICR7Zm9udH1gO1xuICAgIH1cbiAgICBGb250LmdldFN0eWxlRm9udCA9IGdldFN0eWxlRm9udDtcbiAgICBmdW5jdGlvbiBtZWFzdXJlVGV4dChmb250LCBzaXplLCB0ZXh0KSB7XG4gICAgICAgIGNvbnRleHQuZm9udCA9IGdldFN0eWxlRm9udChmb250LCBzaXplKTtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gICAgfVxuICAgIEZvbnQubWVhc3VyZVRleHQgPSBtZWFzdXJlVGV4dDtcbiAgICBmdW5jdGlvbiBnZXRDaGFyV2lkdGgoZm9udCwgY2hhcikge1xuICAgICAgICBsZXQgd2lkdGggPSBmb250LndpZHRocy5nZXQoY2hhcik7XG4gICAgICAgIGlmICghd2lkdGgpIHtcbiAgICAgICAgICAgIHdpZHRoID0gbWVhc3VyZVRleHQoZm9udC5uYW1lLCBFTSwgY2hhcik7XG4gICAgICAgICAgICBmb250LndpZHRocy5zZXQoY2hhciwgd2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gICAgRm9udC5nZXRDaGFyV2lkdGggPSBnZXRDaGFyV2lkdGg7XG4gICAgZnVuY3Rpb24gZ2V0S2VybmluZyhmb250LCBmaXJzdCwgc2Vjb25kKSB7XG4gICAgICAgIGNvbnN0IHBhaXIgPSBmaXJzdCArIHNlY29uZDtcbiAgICAgICAgbGV0IGtlcm5pbmcgPSBmb250Lmtlcm5pbmdzLmdldChwYWlyKTtcbiAgICAgICAgaWYgKCFrZXJuaW5nKSB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aFNlY29uZCA9IGdldENoYXJXaWR0aChmb250LCBzZWNvbmQpO1xuICAgICAgICAgICAgY29uc3Qgd2lkdGhUb3RhbCA9IG1lYXN1cmVUZXh0KGZvbnQubmFtZSwgRU0sIGZpcnN0ICsgc2Vjb25kKTtcbiAgICAgICAgICAgIGtlcm5pbmcgPSB3aWR0aFRvdGFsIC0gd2lkdGhTZWNvbmQ7XG4gICAgICAgICAgICBmb250Lmtlcm5pbmdzLnNldChwYWlyLCBrZXJuaW5nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2VybmluZztcbiAgICB9XG4gICAgRm9udC5nZXRLZXJuaW5nID0gZ2V0S2VybmluZztcbiAgICBmdW5jdGlvbiBnZXRBZHZhbmNlKGZvbnQsIHNpemUsIGZpcnN0LCBzZWNvbmQpIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBzaXplIC8gRU07XG4gICAgICAgIGNvbnN0IHdpZHRoID0gZ2V0Q2hhcldpZHRoKGZvbnQsIGZpcnN0KTtcbiAgICAgICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgICAgIHJldHVybiB3aWR0aCAqIHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtlcm5pbmcgPSBnZXRLZXJuaW5nKGZvbnQsIGZpcnN0LCBzZWNvbmQpO1xuICAgICAgICByZXR1cm4ga2VybmluZyAqIHNjYWxlO1xuICAgIH1cbiAgICBGb250LmdldEFkdmFuY2UgPSBnZXRBZHZhbmNlO1xuICAgIGZ1bmN0aW9uIGdldEZvbnQobmFtZSkge1xuICAgICAgICBsZXQgZm9udCA9IGZvbnRzLmdldChuYW1lKTtcbiAgICAgICAgaWYgKCFmb250KSB7XG4gICAgICAgICAgICBmb250ID0ge1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgd2lkdGhzOiBuZXcgTWFwKCksXG4gICAgICAgICAgICAgICAga2VybmluZ3M6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb250cy5zZXQobmFtZSwgZm9udCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvbnQ7XG4gICAgfVxuICAgIEZvbnQuZ2V0Rm9udCA9IGdldEZvbnQ7XG4gICAgZnVuY3Rpb24gZ2V0TGluZVdpZHRoKGZvbnQsIGZvcm1hdCwgbGluZSkge1xuICAgICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gbGluZS5jaGFyQXQoaSk7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmQgPSBsaW5lLmNoYXJBdChpICsgMSk7XG4gICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gZ2V0QWR2YW5jZShmb250LCBmb3JtYXQuc2l6ZSwgZmlyc3QsIHNlY29uZCk7XG4gICAgICAgICAgICB3aWR0aCArPSBhZHZhbmNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQubGV0dGVyU3BhY2luZyAmJiBsaW5lLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHdpZHRoICs9IGZvcm1hdC5sZXR0ZXJTcGFjaW5nICogKGxpbmUubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cbiAgICBGb250LmdldExpbmVXaWR0aCA9IGdldExpbmVXaWR0aDtcbiAgICBmdW5jdGlvbiBnZXRUZXh0V2lkdGgoZm9udCwgZm9ybWF0LCBsaW5lcykge1xuICAgICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICBjb25zdCBsaW5lV2lkdGggPSBnZXRMaW5lV2lkdGgoZm9udCwgZm9ybWF0LCBsaW5lKTtcbiAgICAgICAgICAgIGlmICh3aWR0aCA8IGxpbmVXaWR0aCkge1xuICAgICAgICAgICAgICAgIHdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gICAgRm9udC5nZXRUZXh0V2lkdGggPSBnZXRUZXh0V2lkdGg7XG4gICAgZnVuY3Rpb24gZ2V0VGV4dEhlaWdodChmb3JtYXQsIGxpbmVzKSB7XG4gICAgICAgIGxldCBoZWlnaHQgPSBmb3JtYXQuc2l6ZSAqIGxpbmVzLmxlbmd0aDtcbiAgICAgICAgaWYgKGZvcm1hdC5sZWFkaW5nICYmIGxpbmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGhlaWdodCArPSBmb3JtYXQubGVhZGluZyAqIChsaW5lcy5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH1cbiAgICBGb250LmdldFRleHRIZWlnaHQgPSBnZXRUZXh0SGVpZ2h0O1xufSkoRm9udCB8fCAoRm9udCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFRleHRGb3JtYXQ7XG4oZnVuY3Rpb24gKFRleHRGb3JtYXQpIHtcbiAgICBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0ID0ge1xuICAgICAgICBmb250OiAnYXJpYWwnLFxuICAgICAgICBzaXplOiAxNSxcbiAgICAgICAgY29sb3I6IDAsXG4gICAgICAgIGFscGhhOiAxLFxuICAgICAgICBib2xkOiBmYWxzZSxcbiAgICAgICAgaXRhbGljOiBmYWxzZSxcbiAgICAgICAgdW5kZXJsaW5lOiBmYWxzZSxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogMCxcbiAgICAgICAgbGVhZGluZzogMCxcbiAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgfTtcbiAgICBmdW5jdGlvbiBnZXRWYWxpZFRleHRGb3JtYXQoc291cmNlLCByZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0LmZvbnQgPSBzb3VyY2U/LmZvbnQgPz8gVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdC5mb250O1xuICAgICAgICByZXN1bHQuc2l6ZSA9IHNvdXJjZT8uc2l6ZSA/PyBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LnNpemU7XG4gICAgICAgIHJlc3VsdC5jb2xvciA9IHNvdXJjZT8uY29sb3IgPz8gVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdC5jb2xvcjtcbiAgICAgICAgcmVzdWx0LmFscGhhID0gc291cmNlPy5hbHBoYSA/PyBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LmFscGhhO1xuICAgICAgICByZXN1bHQuYm9sZCA9IHNvdXJjZT8uYm9sZCA/PyBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LmJvbGQ7XG4gICAgICAgIHJlc3VsdC5pdGFsaWMgPSBzb3VyY2U/Lml0YWxpYyA/PyBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0Lml0YWxpYztcbiAgICAgICAgcmVzdWx0LnVuZGVybGluZSA9IHNvdXJjZT8udW5kZXJsaW5lID8/IFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQudW5kZXJsaW5lO1xuICAgICAgICByZXN1bHQubGV0dGVyU3BhY2luZyA9IHNvdXJjZT8ubGV0dGVyU3BhY2luZyA/PyBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgICAgIHJlc3VsdC5sZWFkaW5nID0gc291cmNlPy5sZWFkaW5nID8/IFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQubGVhZGluZztcbiAgICAgICAgcmVzdWx0LmFsaWduID0gc291cmNlPy5hbGlnbiA/PyBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LmFsaWduO1xuICAgICAgICByZXN1bHQudmVydGljYWxBbGlnbiA9IHNvdXJjZT8udmVydGljYWxBbGlnbiA/PyBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LnZlcnRpY2FsQWxpZ247XG4gICAgfVxuICAgIFRleHRGb3JtYXQuZ2V0VmFsaWRUZXh0Rm9ybWF0ID0gZ2V0VmFsaWRUZXh0Rm9ybWF0O1xuICAgIGZ1bmN0aW9uIGdldEFsaWduVmFsdWUoYWxpZ24pIHtcbiAgICAgICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6IHJldHVybiAwO1xuICAgICAgICAgICAgY2FzZSAnY2VudGVyJzogcmV0dXJuIDAuNTtcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzogcmV0dXJuIDE7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmdldEFsaWduVmFsdWUgPSBnZXRBbGlnblZhbHVlO1xuICAgIGZ1bmN0aW9uIGdldFZlcnRpY2FsQWxpZ25WYWx1ZShhbGlnbikge1xuICAgICAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICAgICAgICBjYXNlICd0b3AnOiByZXR1cm4gMDtcbiAgICAgICAgICAgIGNhc2UgJ21pZGRsZSc6IHJldHVybiAwLjU7XG4gICAgICAgICAgICBjYXNlICdib3R0b20nOiByZXR1cm4gMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRGb3JtYXQuZ2V0VmVydGljYWxBbGlnblZhbHVlID0gZ2V0VmVydGljYWxBbGlnblZhbHVlO1xufSkoVGV4dEZvcm1hdCB8fCAoVGV4dEZvcm1hdCA9IHt9KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL3RleHQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtYXQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb250JztcbmV4cG9ydCAqIGZyb20gJy4vY2FudmFzLXRleHQnO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAZTJkL2NvcmUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IFRleHRGb3JtYXQgfSBmcm9tICcuL2Zvcm1hdCc7XG5pbXBvcnQgeyBGb250IH0gZnJvbSAnLi9mb250JztcbmV4cG9ydCBjb25zdCBURVhUID0gJ3RleHQnO1xuY29uc3QgdmFsaWRUZXh0Rm9ybWF0ID0ge307XG5leHBvcnQgdmFyIFRleHQ7XG4oZnVuY3Rpb24gKFRleHQpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoY29tcG9uZW50LCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghdGV4dCkge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgbGV0IHsgd2lkdGgsIGhlaWdodCB9ID0gY29tcG9uZW50O1xuICAgICAgICBjb25zdCB7IHRleHRGb3JtYXQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgVGV4dEZvcm1hdC5nZXRWYWxpZFRleHRGb3JtYXQodGV4dEZvcm1hdCwgdmFsaWRUZXh0Rm9ybWF0KTtcbiAgICAgICAgaWYgKCF3aWR0aCkge1xuICAgICAgICAgICAgY29uc3QgZm9udCA9IEZvbnQuZ2V0Rm9udCh2YWxpZFRleHRGb3JtYXQuZm9udCk7XG4gICAgICAgICAgICB3aWR0aCA9IEZvbnQuZ2V0VGV4dFdpZHRoKGZvbnQsIHZhbGlkVGV4dEZvcm1hdCwgbGluZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaGVpZ2h0KSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBGb250LmdldFRleHRIZWlnaHQodmFsaWRUZXh0Rm9ybWF0LCBsaW5lcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoY29tcG9uZW50LCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGNvbXBvbmVudCwgaGVpZ2h0KTtcbiAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgIGJvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBUZXh0LmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFRleHQgfHwgKFRleHQgPSB7fSkpO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIFRleHRFeHRlbnNpb247XG4oZnVuY3Rpb24gKFRleHRFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KHRleHQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGxvY2FsIH0gPSBlbmdpbmUucG9pbnRlckV2ZW50cztcbiAgICAgICAgVGV4dC5jYWxjdWxhdGVCb3VuZHModGV4dCwgYm91bmRzKTtcbiAgICAgICAgcmV0dXJuIFJlY3RhbmdsZS5jb250YWlucyhib3VuZHMsIGxvY2FsKTtcbiAgICB9XG4gICAgVGV4dEV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChURVhULCBoaXRUZXN0KTtcbiAgICB9XG4gICAgVGV4dEV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFRleHRFeHRlbnNpb24gfHwgKFRleHRFeHRlbnNpb24gPSB7fSkpO1xuIiwiZXhwb3J0IGNvbnN0IExJTkVBUiA9ICdsaW5lYXInO1xuZXhwb3J0IGNvbnN0IFFVQURSQVRJQyA9ICdxdWFkcmF0aWMnO1xuZXhwb3J0IGNvbnN0IFFVQURSQVRJQ19JTiA9ICdxdWFkcmF0aWNpbic7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDX09VVCA9ICdxdWFkcmF0aWNvdXQnO1xuZXhwb3J0IGNvbnN0IENVQklDID0gJ2N1YmljJztcbmV4cG9ydCBjb25zdCBDVUJJQ19JTiA9ICdjdWJpY2luJztcbmV4cG9ydCBjb25zdCBDVUJJQ19PVVQgPSAnY3ViaWNvdXQnO1xuZXhwb3J0IGNvbnN0IFFVQVJUSUMgPSAncXVhcnRpYyc7XG5leHBvcnQgY29uc3QgUVVBUlRJQ19JTiA9ICdxdWFydGljaW4nO1xuZXhwb3J0IGNvbnN0IFFVQVJUSUNfT1VUID0gJ3F1YXJ0aWNvdXQnO1xuZXhwb3J0IGNvbnN0IFFVSU5USUMgPSAncXVpbnRpYyc7XG5leHBvcnQgY29uc3QgUVVJTlRJQ19JTiA9ICdxdWludGljaW4nO1xuZXhwb3J0IGNvbnN0IFFVSU5USUNfT1VUID0gJ3F1aW50aWNvdXQnO1xuZXhwb3J0IGNvbnN0IFNJTlVTT0lEQUwgPSAncXVpbnRpYyc7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTF9JTiA9ICdxdWludGljaW4nO1xuZXhwb3J0IGNvbnN0IFNJTlVTT0lEQUxfT1VUID0gJ3F1aW50aWNvdXQnO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMID0gJ2V4cG9uZW50aWFsJztcbmV4cG9ydCBjb25zdCBFWFBPTkVOVElBTF9JTiA9ICdleHBvbmVudGlhbGluJztcbmV4cG9ydCBjb25zdCBFWFBPTkVOVElBTF9PVVQgPSAnZXhwb25lbnRpYWxvdXQnO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSID0gJ2NpcmN1bGFyJztcbmV4cG9ydCBjb25zdCBDSVJDVUxBUl9JTiA9ICdjaXJjdWxhcmluJztcbmV4cG9ydCBjb25zdCBDSVJDVUxBUl9PVVQgPSAnY2lyY3VsYXJvdXQnO1xuZXhwb3J0IGNvbnN0IEVMQVNUSUMgPSAnZWxhc3RpYyc7XG5leHBvcnQgY29uc3QgRUxBU1RJQ19JTiA9ICdlbGFzdGljaW4nO1xuZXhwb3J0IGNvbnN0IEVMQVNUSUNfT1VUID0gJ2VsYXN0aWNvdXQnO1xuZXhwb3J0IGNvbnN0IEJBQ0sgPSAnYmFjayc7XG5leHBvcnQgY29uc3QgQkFDS19JTiA9ICdiYWNraW4nO1xuZXhwb3J0IGNvbnN0IEJBQ0tfT1VUID0gJ2JhY2tvdXQnO1xuZXhwb3J0IGNvbnN0IEJPVU5DRSA9ICdib3VuY2UnO1xuZXhwb3J0IGNvbnN0IEJPVU5DRV9JTiA9ICdib3VuY2Vpbic7XG5leHBvcnQgY29uc3QgQk9VTkNFX09VVCA9ICdib3VuY2VvdXQnO1xuZXhwb3J0IGNvbnN0IGVhc2luZyA9IHtcbiAgICBbTElORUFSXTogKHZhbHVlKSA9PiB2YWx1ZSxcbiAgICBbUVVBRFJBVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTAuNSAqICgtLXZhbHVlICogKHZhbHVlIC0gMikgLSAxKTtcbiAgICB9LFxuICAgIFtRVUFEUkFUSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVBRFJBVElDX09VVF06ICh2YWx1ZSkgPT4gKHZhbHVlICogKDIgLSB2YWx1ZSkpLFxuICAgIFtDVUJJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKyAyKTtcbiAgICB9LFxuICAgIFtDVUJJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW0NVQklDX09VVF06ICh2YWx1ZSkgPT4gKC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMSksXG4gICAgW1FVQVJUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgLSAyKTtcbiAgICB9LFxuICAgIFtRVUFSVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUFSVElDX09VVF06ICh2YWx1ZSkgPT4gKDEgLSAtLXZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVJTlRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDIpO1xuICAgIH0sXG4gICAgW1FVSU5USUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVJTlRJQ19PVVRdOiAodmFsdWUpID0+ICgtLXZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAxKSxcbiAgICBbU0lOVVNPSURBTF06ICh2YWx1ZSkgPT4gKDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIHZhbHVlKSkpLFxuICAgIFtTSU5VU09JREFMX0lOXTogKHZhbHVlKSA9PiAoMSAtIE1hdGguY29zKCh2YWx1ZSAqIE1hdGguUEkpIC8gMikpLFxuICAgIFtTSU5VU09JREFMX09VVF06ICh2YWx1ZSkgPT4gKE1hdGguc2luKCh2YWx1ZSAqIE1hdGguUEkpIC8gMikpLFxuICAgIFtFWFBPTkVOVElBTF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiBNYXRoLnBvdygxMDI0LCB2YWx1ZSAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoLU1hdGgucG93KDIsIC0xMCAqICh2YWx1ZSAtIDEpKSArIDIpO1xuICAgIH0sXG4gICAgW0VYUE9ORU5USUFMX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgPT09IDAgPyAwIDogTWF0aC5wb3coMTAyNCwgdmFsdWUgLSAxKSksXG4gICAgW0VYUE9ORU5USUFMX09VVF06ICh2YWx1ZSkgPT4gKHZhbHVlID09PSAxID8gMSA6IDEgLSBNYXRoLnBvdygyLCAtMTAgKiB2YWx1ZSkpLFxuICAgIFtDSVJDVUxBUl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSB2YWx1ZSAqIHZhbHVlKSAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAodmFsdWUgLT0gMikgKiB2YWx1ZSkgKyAxKTtcbiAgICB9LFxuICAgIFtDSVJDVUxBUl9JTl06ICh2YWx1ZSkgPT4gKDEgLSBNYXRoLnNxcnQoMSAtIHZhbHVlICogdmFsdWUpKSxcbiAgICBbQ0lSQ1VMQVJfT1VUXTogKHZhbHVlKSA9PiBNYXRoLnNxcnQoMSAtIC0tdmFsdWUgKiB2YWx1ZSksXG4gICAgW0VMQVNUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlICo9IDI7XG4gICAgICAgIGlmICh2YWx1ZSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAtMC41ICogTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiBNYXRoLnBvdygyLCAtMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpICsgMTtcbiAgICB9LFxuICAgIFtFTEFTVElDX0lOXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLU1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcbiAgICB9LFxuICAgIFtFTEFTVElDX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGgucG93KDIsIC0xMCAqIHZhbHVlKSAqIE1hdGguc2luKCh2YWx1ZSAtIDAuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuICAgIH0sXG4gICAgW0JBQ0tdOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTggKiAxLjUyNTtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiAodmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgLSBzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgKyBzKSArIDIpO1xuICAgIH0sXG4gICAgW0JBQ0tfSU5dOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTg7XG4gICAgICAgIHJldHVybiB2YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSAtIHMpO1xuICAgIH0sXG4gICAgW0JBQ0tfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gLS12YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSArIHMpICsgMTtcbiAgICB9LFxuICAgIFtCT1VOQ0VdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMC41KSB7XG4gICAgICAgICAgICByZXR1cm4gZWFzaW5nW0JPVU5DRV9JTl0odmFsdWUgKiAyKSAqIDAuNTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWFzaW5nW0JPVU5DRV9PVVRdKHZhbHVlICogMiAtIDEpICogMC41ICsgMC41O1xuICAgIH0sXG4gICAgW0JPVU5DRV9JTl06ICh2YWx1ZSkgPT4gKDEgLSBlYXNpbmdbQk9VTkNFX09VVF0oMSAtIHZhbHVlKSksXG4gICAgW0JPVU5DRV9PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMSAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA8IDIgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDEuNSAvIDIuNzUpICogdmFsdWUgKyAwLjc1O1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA8IDIuNSAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMi4yNSAvIDIuNzUpICogdmFsdWUgKyAwLjkzNzU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAyLjYyNSAvIDIuNzUpICogdmFsdWUgKyAwLjk4NDM3NTtcbiAgICB9LFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdHdlZW4nO1xuZXhwb3J0ICogZnJvbSAnLi9lYXNpbmcnO1xuIiwiaW1wb3J0IHsgZWFzaW5nLCBMSU5FQVIgfSBmcm9tICcuL2Vhc2luZyc7XG5leHBvcnQgY29uc3QgVFdFRU4gPSAndHdlZW4nO1xuZXhwb3J0IHZhciBUd2VlbkV4dGVuc2lvbjtcbihmdW5jdGlvbiAoVHdlZW5FeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29tcG9uZW50LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyB0d2VlbiB9ID0gY29tcG9uZW50O1xuICAgICAgICBjb25zdCB7IHBoYXNlcyB9ID0gdHdlZW47XG4gICAgICAgIGlmICghcGhhc2VzPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdBbmltYXRpb24gcGFydHMgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR3ZWVuLnRpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdHdlZW4udGltZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdHdlZW4udGltZSArPSBlbmdpbmUudXBkYXRlci50aW1lO1xuICAgICAgICBjb25zdCB7IHRpbWUgfSA9IHR3ZWVuO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgcGhhc2VzLmZvckVhY2goKHBoYXNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXBoYXNlLnRpbWUpIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnQW5pbWF0aW9uIHRpbWUgbm90IHNldCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaGFzZS5vZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHBoYXNlLm9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVhc2luZ05hbWUgPSBwaGFzZT8uZWFzaW5nPy50b0xvd2VyQ2FzZSgpID8/IExJTkVBUjtcbiAgICAgICAgICAgIGNvbnN0IGVhc2luZ01ldGhvZCA9IGVhc2luZ1tlYXNpbmdOYW1lXTtcbiAgICAgICAgICAgIGlmICghZWFzaW5nTWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoYFVua25vd24gZWFzaW5nIHR5cGU6ICR7ZWFzaW5nfWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKHRpbWUgLSBvZmZzZXQpIC8gcGhhc2UudGltZTtcbiAgICAgICAgICAgIG9mZnNldCArPSBwaGFzZS50aW1lO1xuICAgICAgICAgICAgaWYgKHZhbHVlIDwgMCB8fCB2YWx1ZSA+IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlYXNpbmdWYWx1ZSA9IGVhc2luZ01ldGhvZCh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoIXBoYXNlLnRvKSB7XG4gICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ0FuaW1hdGlvbiBcInRvXCIgc3RhdGUgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwaGFzZS5mcm9tKSB7XG4gICAgICAgICAgICAgICAgcGhhc2UuZnJvbSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB0bywgZnJvbSB9ID0gcGhhc2U7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGNvbXBvbmVudDtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRvKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZnJvbVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbVtrZXldID0gc3RhdGVba2V5XSA/PyAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBmcm9tVmFsdWUgPSBmcm9tW2tleV07XG4gICAgICAgICAgICAgICAgY29uc3QgdG9WYWx1ZSA9IHRvW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmcm9tVmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiB0b1ZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZVZhbHVlID0gZnJvbVZhbHVlICsgZWFzaW5nVmFsdWUgKiAodG9WYWx1ZSAtIGZyb21WYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlW2tleV0gPSBzdGF0ZVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHR3ZWVuLmxvb3AgJiYgdHdlZW4udGltZSA+IG9mZnNldCkge1xuICAgICAgICAgICAgdHdlZW4udGltZSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVHdlZW5FeHRlbnNpb24udXBkYXRlID0gdXBkYXRlO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnByb3BlcnRpZXMuc2V0KFRXRUVOLCB1cGRhdGUpO1xuICAgIH1cbiAgICBUd2VlbkV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFR3ZWVuRXh0ZW5zaW9uIHx8IChUd2VlbkV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBBQklMSVRZX1dPTEYgfSBmcm9tICcuL2Fzc2V0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY3Vyc2l2ZSgpIHtcblx0Y29uc3QgY29udGFpbmVyID0ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdHg6IDMwLFxuXHRcdFx0eTogMzAsXG5cdFx0XHRzY2FsZVg6IDAuOSxcblx0XHRcdHNjYWxlWTogMC45LFxuXHRcdFx0cm90YXRpb246IDAuMixcblx0XHRcdGFscGhhOiAwLjksXG5cdFx0XHRjaGlsZHJlbjogW3tcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBBQklMSVRZX1dPTEYsXG5cdFx0XHRcdHNjYWxlOiAwLjMsXG5cdFx0XHR9XSxcblx0XHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0XHR0aGlzLnJvdGF0aW9uICs9IHRpbWUgKiAwLjA1O1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXG5cdGNvbnRhaW5lci5jaGlsZHJlbi5jaGlsZHJlbi5wdXNoKGNvbnRhaW5lciBhcyBuZXZlcik7XG5cblx0cmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsImNvbnN0IElNQUdFX0FTU0VUUyA9ICdhc3NldHMvJztcblxuZXhwb3J0IGNvbnN0IEFOSU1BTElTVCA9ICdpZDphbmltYWxpc3QnO1xuZXhwb3J0IGNvbnN0IEFSQ0hFUiA9ICdpZDphcmNoZXInO1xuXG5leHBvcnQgY29uc3QgQU5JTUFMSVNUX0lNQUdFID0gYCR7SU1BR0VfQVNTRVRTfUFuaW1hbGlzdEZveDFfaW1hZ2UucG5nYDtcbmV4cG9ydCBjb25zdCBBUkNIRVJfSU1BR0UgPSBgJHtJTUFHRV9BU1NFVFN9QXJjaGVyMl9odW50ZXJfaW1hZ2UucG5nYDtcblxuZXhwb3J0IGNvbnN0IEFCSUxJVFlfRk9YID0gYCR7SU1BR0VfQVNTRVRTfUFuaW1hbGlzdEFiaWxpdHlfRm94LnBuZ2A7XG5leHBvcnQgY29uc3QgQUJJTElUWV9XT0xGID0gYCR7SU1BR0VfQVNTRVRTfUFuaW1hbGlzdEFiaWxpdHlfV29sZi5wbmdgO1xuXG5leHBvcnQgY29uc3QgQkFDS0dST1VORCA9IGAke0lNQUdFX0FTU0VUU31qdW5nbGVfYmFja2dyb3VuZC5qcGdgO1xuXG5leHBvcnQgY29uc3QgVEVTVF9DQU5WQVMgPSAndGVzdC5jYW52YXMnO1xuIiwiaW1wb3J0IHsgQ2FudmFzRW5naW5lIH0gZnJvbSAnQGUyZC9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IENhbnZhc1RleHRFeHRlbnNpb24gfSBmcm9tICdAZTJkL3RleHQnO1xuaW1wb3J0IHsgQ3VzdG9tSW1hZ2VFeHRlbnNpb24gfSBmcm9tICcuL2ltYWdlJztcbmltcG9ydCBDdXN0b21QbGF0Zm9ybSBmcm9tICcuL3BsYXRmb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tRW5naW5lIGV4dGVuZHMgQ2FudmFzRW5naW5lIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnBsYXRmb3JtID0gbmV3IEN1c3RvbVBsYXRmb3JtKHRoaXMpO1xuXHRcdENhbnZhc1RleHRFeHRlbnNpb24uaW5pdCh0aGlzKTtcblx0XHRDdXN0b21JbWFnZUV4dGVuc2lvbi5pbml0KHRoaXMpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDYW52YXNFbmdpbmUsIENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnQGUyZC9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSwgSW1hZ2UgfSBmcm9tICdAZTJkL2ltYWdlJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAZTJkL3Jlc291cmNlcyc7XG5cbmV4cG9ydCBuYW1lc3BhY2UgQ3VzdG9tSW1hZ2VFeHRlbnNpb24ge1xuXHRleHBvcnQgZnVuY3Rpb24gcmVuZGVyKGltYWdlOiBJbWFnZSwgZW5naW5lOiBDYW52YXNFbmdpbmUpOiB2b2lkIHtcblx0XHRpZiAoIWltYWdlLnNyYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHsgbWF0cml4LCBjb2xvclRyYW5zZm9ybSB9ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcblxuXHRcdGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoaW1hZ2Uuc3JjKSBhcyBJbWFnZVJlc291cmNlIHwgbnVsbDtcblxuXHRcdGlmICghcmVzb3VyY2U/LmxvYWRlZCB8fCAhcmVzb3VyY2U/LmltYWdlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29udGV4dDJkID0gKGVuZ2luZS5wbGF0Zm9ybSBhcyBDYW52YXNQbGF0Zm9ybSkuZ2V0Q29udGV4dCgpO1xuXG5cdFx0Y29udGV4dDJkLnNldFRyYW5zZm9ybShcblx0XHRcdG1hdHJpeC5hLFxuXHRcdFx0bWF0cml4LmIsXG5cdFx0XHRtYXRyaXguYyxcblx0XHRcdG1hdHJpeC5kLFxuXHRcdFx0bWF0cml4LnR4LFxuXHRcdFx0bWF0cml4LnR5LFxuXHRcdCk7XG5cblx0XHRjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuXHRcdGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG5cdFx0Y29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG5cblx0XHRjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcblx0XHRjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnbGlnaHRncmF5Jztcblx0XHRjb250ZXh0MmQuc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcblx0fVxuXG5cdGV4cG9ydCBmdW5jdGlvbiBpbml0KGVuZ2luZTogQ2FudmFzRW5naW5lKSB7XG5cdFx0SW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuXHRcdGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoSU1BR0UsIHJlbmRlcik7XG5cdH1cbn1cbiIsImltcG9ydCB7IENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnQGUyZC9jYW52YXMtZW5naW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tUGxhdGZvcm0gZXh0ZW5kcyBDYW52YXNQbGF0Zm9ybSB7XG5cdGNsZWFyKCkge1xuXHRcdGNvbnN0IGNvbnRleHQyZCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnYmxhY2snO1xuXHRcdGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcblx0XHRjb250ZXh0MmQuZmlsbFJlY3QoMCwgMCwgY29udGV4dDJkLmNhbnZhcy53aWR0aCwgY29udGV4dDJkLmNhbnZhcy5oZWlnaHQpO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcblx0fVxufVxuIiwiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAZTJkL3Jlc291cmNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVJlc291cmNlTWFuYWdlciB7XG5cdHJlYWRvbmx5IGFsaWFzZXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXHRyZWFkb25seSByZXNvdXJjZXMgPSBuZXcgTWFwPHN0cmluZywgSW1hZ2VSZXNvdXJjZT4oKTtcblxuXHRyZXNvbHZlID0gKGFzc2V0OiBzdHJpbmcsIGVuZ2luZTogRW5naW5lKTogSW1hZ2VSZXNvdXJjZSB8IG51bGwgPT4ge1xuXHRcdGlmIChhc3NldC5pbmRleE9mKCdpZDonKSA9PT0gMCkge1xuXHRcdFx0Y29uc3QgaWQgPSBhc3NldC5zbGljZSgzKTtcblx0XHRcdGxldCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VzLmdldChpZCkgYXMgSW1hZ2VSZXNvdXJjZTtcblx0XHRcdGlmICghcmVzb3VyY2UpIHtcblx0XHRcdFx0Y29uc3QgdXJsID0gdGhpcy5hbGlhc2VzLmdldChpZCk7XG5cdFx0XHRcdGlmICh1cmwpIHtcblx0XHRcdFx0XHRyZXNvdXJjZSA9IEltYWdlUmVzb3VyY2UucmVzb2x2ZSh1cmwsIGVuZ2luZSkgYXMgSW1hZ2VSZXNvdXJjZTtcblx0XHRcdFx0XHR0aGlzLnJlc291cmNlcy5zZXQoaWQsIHJlc291cmNlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbmdpbmUuZGVidWcud2FybmluZyhgUmVzb3VyY2Ugd2l0aCBpZDogJHthc3NldH0gbm90IGZvdW5kYCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZXNvdXJjZTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRpbml0KGVuZ2luZTogRW5naW5lKSB7XG5cdFx0ZW5naW5lLnJlc291cmNlcy5yZXNvbHZlcnMuYWRkKHRoaXMucmVzb2x2ZSk7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZwcygpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0dGV4dDogJ2ZwcycsXG5cdFx0ZnJhbWVzOiAwLFxuXHRcdHRpbWU6IDAsXG5cdFx0dGV4dEZvcm1hdDoge1xuXHRcdFx0c2l6ZTogMzAsXG5cdFx0XHRjb2xvcjogMHhmZmZmZmYsXG5cdFx0XHRhbGlnbjogJ2NlbnRlcicsXG5cdFx0fSxcblx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMudGltZSArPSB0aW1lO1xuXHRcdFx0dGhpcy5mcmFtZXMrKztcblx0XHRcdGlmICh0aGlzLnRpbWUgPj0gMSkge1xuXHRcdFx0XHRjb25zdCBmcmFtZVRpbWUgPSBNYXRoLmNlaWwoMTAwMCAqIHRoaXMudGltZSAvIHRoaXMuZnJhbWVzKTtcblx0XHRcdFx0dGhpcy50ZXh0ID0gYCR7dGhpcy5mcmFtZXN9IGZwcyAke2ZyYW1lVGltZX0gbXNgO1xuXHRcdFx0XHR0aGlzLnRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLmZyYW1lcyA9IDA7XG5cdFx0XHR9XG5cdFx0fSxcblx0fTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCB7XG5cdEFCSUxJVFlfRk9YLCBBQklMSVRZX1dPTEYsIEFOSU1BTElTVCwgQVJDSEVSLCBCQUNLR1JPVU5ELFxufSBmcm9tICcuL2Fzc2V0cyc7XG5pbXBvcnQgYXJ0aWZhY3QgZnJvbSAnLi9hcnRpZmFjdCc7XG5pbXBvcnQgZnBzIGZyb20gJy4vZnBzJztcbmltcG9ydCB7IHVuaXQsIFVuaXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi91bml0JztcblxuaW50ZXJmYWNlIE1haW4ge1xuXHRzdGFydCgpOiB2b2lkO1xuXHRba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oKTogTWFpbiB7XG5cdGZ1bmN0aW9uIG9uVW5pdENsaWNrKGRhdGE6IFVuaXRQcm9wZXJ0aWVzKSB7XG5cdFx0ZGF0YS5oZWFsdGggPSBNYXRoLnJhbmRvbSgpO1xuXHRcdGNvbnNvbGUubG9nKCdvblVuaXRDbGljaycsIGRhdGEubmFtZSk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQkFDS0dST1VORCxcblx0XHRcdFx0c2NhbGVYOiAxLFxuXHRcdFx0XHRzY2FsZVk6IDEsXG5cdFx0XHR9LFxuXHRcdFx0ZmlndXJlOiB7XG5cdFx0XHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHR0eXBlOiAncmVjdCcsXG5cdFx0XHRcdFx0eDogMCxcblx0XHRcdFx0XHR5OiAwLFxuXHRcdFx0XHRcdHdpZHRoOiAxMDAsXG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAsXG5cdFx0XHRcdFx0ZmlsbDogMHhmZjAwZmYsXG5cdFx0XHRcdFx0c3Ryb2tlOiB7XG5cdFx0XHRcdFx0XHR0aGlja25lc3M6IDIsXG5cdFx0XHRcdFx0XHRmaWxsOiAweDAwZmYwMCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHNoYXBlczoge1xuXHRcdFx0XHR0eXBlOiAnc2hhcGUnLFxuXHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ2NpcmNsZScsXG5cdFx0XHRcdFx0XHR4OiAxMDAsXG5cdFx0XHRcdFx0XHR5OiAxMDAsXG5cdFx0XHRcdFx0XHRyYWRpdXM6IDUwLFxuXHRcdFx0XHRcdFx0ZmlsbDogeyB0eXBlOiAnc29saWQnLCBjb2xvcjogMHhmZmZmMDAsIGFscGhhOiAwLjUgfSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdwYXRoJyxcblx0XHRcdFx0XHRcdGRhdGE6ICdNIDEwIDEwIEggOTAgViA5MCBIIDEwIFonLFxuXHRcdFx0XHRcdFx0ZmlsbDogMHhmZjAwZmYsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAncGF0aCcsXG5cdFx0XHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ21vdmVUbycsIHg6IDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMTAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDEwMCwgeTogMTAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDAsIHk6IDEwMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0ZmlsbDogMHhmZjAwZmYsXG5cdFx0XHRcdFx0XHRzdHJva2U6IDB4MDAwMDAwLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0dW5pdHM6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0dW5pdCh7XG5cdFx0XHRcdFx0XHRuYW1lOiAnQXJjaGVyJywgaGVhbHRoOiAxLCBpbWFnZTogQVJDSEVSLCBvbkNsaWNrOiBvblVuaXRDbGljayxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHR1bml0KHtcblx0XHRcdFx0XHRcdG5hbWU6ICdBbmltYWxpc3QnLCBoZWFsdGg6IDEsIGltYWdlOiBBTklNQUxJU1QsIG9uQ2xpY2s6IG9uVW5pdENsaWNrLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdGFydGlmYWN0OiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHR4OiAzMDAsXG5cdFx0XHRcdHk6IDM1MCxcblx0XHRcdFx0Y2hpbGRyZW46IFthcnRpZmFjdCgpXSxcblx0XHRcdH0sXG5cdFx0XHRtYXA6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0eTogNDUwLFxuXHRcdFx0XHRzY2FsZVg6IDAuMixcblx0XHRcdFx0c2NhbGVZOiAwLjIsXG5cdFx0XHRcdGFscGhhOiAwLjUsXG5cdFx0XHRcdHNyYzogJ3Rlc3QuY2FudmFzJyxcblx0XHRcdFx0b25Qb2ludGVyT3ZlcigpIHtcblx0XHRcdFx0XHR0aGlzLmFscGhhID0gMTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b25Qb2ludGVyT3V0KCkge1xuXHRcdFx0XHRcdHRoaXMuYWxwaGEgPSAwLjU7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YWJpbGl0eUZveDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEFCSUxJVFlfRk9YLFxuXHRcdFx0XHR4OiA0NTAsXG5cdFx0XHRcdHk6IDUwMCxcblx0XHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdFx0dGludDoge1xuXHRcdFx0XHRcdGNvbG9yOiAweDAwZmYwMCxcblx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0fSBhcyBhbnksXG5cdFx0XHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0XHRcdGlmICh0aGlzLnRpbnQpIHtcblx0XHRcdFx0XHRcdHRoaXMudGludC52YWx1ZSArPSB0aW1lO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMudGludC52YWx1ZSA+PSAxKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudGludC52YWx1ZSA9IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duKGU6IGFueSkge1xuXHRcdFx0XHRcdGlmICh0aGlzLnRpbnQpIHtcblx0XHRcdFx0XHRcdHRoaXMudGludCA9IG51bGw7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMudGludCA9IHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IDB4MDBmZjAwLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmb3gnLCBlKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRhYmlsaXR5V29sZjoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0eDogMzUwLFxuXHRcdFx0XHR5OiA0MDAsXG5cdFx0XHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0XHRzcmM6IEFCSUxJVFlfV09MRixcblx0XHRcdFx0XHRzY2FsZTogMC41LFxuXHRcdFx0XHRcdGFscGhhOiAxLFxuXHRcdFx0XHRcdHR3ZWVuOiB7XG5cdFx0XHRcdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0XHRcdFx0cGhhc2VzOiBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHg6IDIwMCB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAnY3ViaWNvdXQnLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeTogMjAwLCBhbHBoYTogMC41IH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6ICdxdWFkcmF0aWNJbicsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB4OiAwLCBhbHBoYTogMSB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAncXVhZHJhdGljT3V0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRmcHM6IGZwcygpLFxuXHRcdH0sXG5cdFx0c3RhcnQoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnc3RhcnQnKTtcblx0XHR9LFxuXHR9O1xufVxuIiwiY29uc3QgU1BFRUQgPSAxMDA7XG5cbmludGVyZmFjZSBVbml0IHtcblx0W2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRQcm9wZXJ0aWVzIHtcblx0bmFtZTogc3RyaW5nLFxuXHRoZWFsdGg6IG51bWJlcixcblx0aW1hZ2U6IHN0cmluZyxcblx0b25DbGljazogKGRhdGE6IFVuaXRQcm9wZXJ0aWVzKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pdChwcm9wczogVW5pdFByb3BlcnRpZXMpOiBVbml0IHtcblx0ZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XG5cdFx0cmV0dXJuIGAke3Byb3BzLm5hbWV9XFxuJHtNYXRoLnJvdW5kKHByb3BzLmhlYWx0aCAqIDEwMCl9JWA7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdHg6IDUwICsgTWF0aC5yYW5kb20oKSAqIDQwMCxcblx0XHR5OiAyMDAsXG5cdFx0cm90YXRpb246IDAsXG5cdFx0dXBkYXRlTW92ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMueCArPSB0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCAqIHRpbWUgKiBTUEVFRDtcblx0XHRcdGlmICh0aGlzLnggPCA1MCkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCA9IDE7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMueCA+IDQwMCkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCA9IC0xO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZU1vdmUodGltZSk7XG5cdFx0fSxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0dGV4dDoge1xuXHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHRcdHRleHQ6IGdldFRpdGxlKCksXG5cdFx0XHRcdHRleHRGb3JtYXQ6IHtcblx0XHRcdFx0XHRzaXplOiAxNSxcblx0XHRcdFx0XHRjb2xvcjogMHhmZmRkZGQsXG5cdFx0XHRcdFx0YWxpZ246ICdjZW50ZXInLFxuXHRcdFx0XHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRib3JkZXI6IDB4MDBmZjAwLFxuXHRcdFx0XHR5OiAtMzAsXG5cdFx0XHRcdGhlaWdodDogMzUsXG5cdFx0XHRcdHBpdm90WDogMC41LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duOiAoKSA9PiB7XG5cdFx0XHRcdFx0cHJvcHMub25DbGljayhwcm9wcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uVXBkYXRlKCkge1xuXHRcdFx0XHRcdHRoaXMudGV4dCA9IGdldFRpdGxlKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBwcm9wcy5pbWFnZSxcblx0XHRcdFx0c2NhbGVYOiBNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xLFxuXHRcdFx0XHRwaXZvdFg6IDAuNSxcblx0XHRcdFx0b25Qb2ludGVyRG93bjogKCkgPT4ge1xuXHRcdFx0XHRcdHByb3BzLm9uQ2xpY2socHJvcHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCJpbXBvcnQgeyBDb21wb25lbnQsIE1vdXNlRXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IFR3ZWVuRXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC90d2Vlbic7XG5pbXBvcnQgeyBDYW52YXNUZXh0RXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC90ZXh0JztcbmltcG9ydCB7IENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gfSBmcm9tICdAZTJkL2ltYWdlJztcbmltcG9ydCB7IENhbnZhc1NoYXBlRXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC9zaGFwZSc7XG5pbXBvcnQgeyBDYW52YXNFbmdpbmUgfSBmcm9tICdAZTJkL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BlMmQvcmVzb3VyY2VzJztcbmltcG9ydCBDdXN0b21SZXNvdXJjZU1hbmFnZXIgZnJvbSAnLi9lbmdpbmUvcmVzb3VyY2VzJztcbmltcG9ydCBDdXN0b21FbmdpbmUgZnJvbSAnLi9lbmdpbmUvZW5naW5lJztcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbic7XG5pbXBvcnQge1xuXHRBTklNQUxJU1QsIEFOSU1BTElTVF9JTUFHRSwgQVJDSEVSLCBBUkNIRVJfSU1BR0UsIFRFU1RfQ0FOVkFTLFxufSBmcm9tICcuL2Fzc2V0cyc7XG5cbi8vIHBhZ2VcbmRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gJzAnO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nID0gJzAnO1xuXG4vLyBhcHBsaWNhdGlvblxuY29uc3QgYXBwID0gbWFpbigpO1xuYXBwLnN0YXJ0KCk7XG5cbi8vIGJhc2ljIGVuZ2luZVxuY29uc3QgZW5naW5lID0gbmV3IENhbnZhc0VuZ2luZSgpO1xuQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5DYW52YXNUZXh0RXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbkNhbnZhc1NoYXBlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcblR3ZWVuRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbk1vdXNlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbmVuZ2luZS5yb290ID0gYXBwIGFzIGFueSBhcyBDb21wb25lbnQ7XG5lbmdpbmUuc2NyZWVuLmZ1bGxzY3JlZW4gPSB0cnVlO1xuZW5naW5lLnRpY2tlci5wbGF5KCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVuZ2luZS5wbGF0Zm9ybS52aWV3KTtcblxuLy8gdGVzdCBwYXVzZVxuc2V0VGltZW91dCgoKSA9PiBlbmdpbmUudGlja2VyLnBhdXNlKCksIDUwMDApO1xuc2V0VGltZW91dCgoKSA9PiBlbmdpbmUudGlja2VyLnBsYXkoKSwgMTAwMDApO1xuXG4vLyBjdXN0b20gZW5naW5lXG5jb25zdCBjdXN0b21FbmdpbmUgPSBuZXcgQ3VzdG9tRW5naW5lKCk7XG5jdXN0b21FbmdpbmUuc2NyZWVuLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbmN1c3RvbUVuZ2luZS5zY3JlZW4uaGVpZ2h0ID0gNjAwO1xuY3VzdG9tRW5naW5lLnVwZGF0ZXIuZW5hYmxlZCA9IGZhbHNlO1xuY3VzdG9tRW5naW5lLnJvb3QgPSBlbmdpbmUucm9vdDtcbmN1c3RvbUVuZ2luZS50aWNrZXIucGxheSgpO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUudG9wID0gJzBweCc7XG5jdXN0b21FbmdpbmUucGxhdGZvcm0udmlldy5zdHlsZS5sZWZ0ID0gJzYwMHB4JztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcpO1xuXG4vLyAvLyBzZXQgY3VzdG9tIHJlc291cmNlXG5lbmdpbmUucmVzb3VyY2VzLnJlc291cmNlcy5zZXQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBjdXN0b21FbmdpbmUucGxhdGZvcm0udmlldyxcblx0XHRsb2FkZWQ6IHRydWUsXG5cdH0gYXMgSW1hZ2VSZXNvdXJjZSxcbik7XG5jdXN0b21FbmdpbmUucmVzb3VyY2VzLnJlc291cmNlcy5zZXQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBlbmdpbmUucGxhdGZvcm0udmlldyxcblx0XHRsb2FkZWQ6IHRydWUsXG5cdH0gYXMgSW1hZ2VSZXNvdXJjZSxcbik7XG5cbi8vIGN1c3RvbSByZXNvdXJjZSByZXNvbHZlclxuY29uc3QgcmVzb3VyY2VNYW5hZ2VyID0gbmV3IEN1c3RvbVJlc291cmNlTWFuYWdlcigpO1xucmVzb3VyY2VNYW5hZ2VyLmFsaWFzZXMuc2V0KEFSQ0hFUi5yZXBsYWNlKCdpZDonLCAnJyksIEFSQ0hFUl9JTUFHRSk7XG5yZXNvdXJjZU1hbmFnZXIuYWxpYXNlcy5zZXQoQU5JTUFMSVNULnJlcGxhY2UoJ2lkOicsICcnKSwgQU5JTUFMSVNUX0lNQUdFKTtcbnJlc291cmNlTWFuYWdlci5pbml0KGVuZ2luZSk7XG5yZXNvdXJjZU1hbmFnZXIuaW5pdChjdXN0b21FbmdpbmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==