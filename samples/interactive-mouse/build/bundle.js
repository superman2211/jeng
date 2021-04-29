/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../packages/canvas-engine/dist/engine.js":
/*!***************************************************!*\
  !*** ../../packages/canvas-engine/dist/engine.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasEngine": () => (/* binding */ CanvasEngine)
/* harmony export */ });
/* harmony import */ var _jeng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/core */ "../../packages/core/dist/index.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platform */ "../../packages/canvas-engine/dist/platform.js");
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
}(_jeng_core__WEBPACK_IMPORTED_MODULE_0__.Engine);

/***/ }),

/***/ "../../packages/canvas-engine/dist/index.js":
/*!**************************************************!*\
  !*** ../../packages/canvas-engine/dist/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasEngine": () => (/* reexport safe */ _engine__WEBPACK_IMPORTED_MODULE_2__.CanvasEngine)
/* harmony export */ });
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patterns */ "../../packages/canvas-engine/dist/patterns.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platform */ "../../packages/canvas-engine/dist/platform.js");
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine */ "../../packages/canvas-engine/dist/engine.js");




/***/ }),

/***/ "../../packages/canvas-engine/dist/patterns.js":
/*!*****************************************************!*\
  !*** ../../packages/canvas-engine/dist/patterns.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export CanvasPatterns */
/* harmony import */ var _jeng_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/geom */ "../../packages/geom/dist/index.js");

var CanvasPatterns;

(function (CanvasPatterns) {
  function colorPattern(color, alpha, ct) {
    var r = color >> 16 & 0xff;
    var g = color >> 8 & 0xff;
    var b = color & 0xff;
    var a = alpha * 0xff;

    if (!_jeng_geom__WEBPACK_IMPORTED_MODULE_0__.ColorTransform.isEmpty(ct)) {
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
      var color = colors[i];
      var alpha = alphas[i];
      var ratio = ratios[i];
      if (ratio < 0) ratio = 0;
      if (ratio > 1) ratio = 1;
      var colorStyle = colorPattern(color, alpha, colorTransform);
      pattern.addColorStop(ratio, colorStyle);
    }
  }

  CanvasPatterns.addGradientColors = addGradientColors;

  function radialGradientPattern(beginX, beginY, beginRadius, endX, endY, endRadius, colors, alphas, ratios, colorTransform, context) {
    var pattern = context.createRadialGradient(beginX, beginY, beginRadius, endX, endY, endRadius);
    addGradientColors(pattern, colors, alphas, ratios, colorTransform);
    return pattern;
  }

  CanvasPatterns.radialGradientPattern = radialGradientPattern;

  function linearGradientPattern(beginX, beginY, endX, endY, colors, alphas, ratios, colorTransform, context) {
    var pattern = context.createLinearGradient(beginX, beginY, endX, endY);
    addGradientColors(pattern, colors, alphas, ratios, colorTransform);
    return pattern;
  }

  CanvasPatterns.linearGradientPattern = linearGradientPattern;

  function bitmapPattern(image, repeat, matrix, context) {
    var pattern = context.createPattern(image, repeat ? 'repeat' : 'none');

    if (pattern) {
      var _matrix$a, _matrix$b, _matrix$c, _matrix$d, _matrix$tx, _matrix$ty;

      var domMatrix = new DOMMatrix();
      domMatrix.a = (_matrix$a = matrix.a) !== null && _matrix$a !== void 0 ? _matrix$a : 1;
      domMatrix.b = (_matrix$b = matrix.b) !== null && _matrix$b !== void 0 ? _matrix$b : 0;
      domMatrix.c = (_matrix$c = matrix.c) !== null && _matrix$c !== void 0 ? _matrix$c : 0;
      domMatrix.d = (_matrix$d = matrix.d) !== null && _matrix$d !== void 0 ? _matrix$d : 1;
      domMatrix.e = (_matrix$tx = matrix.tx) !== null && _matrix$tx !== void 0 ? _matrix$tx : 0;
      domMatrix.f = (_matrix$ty = matrix.ty) !== null && _matrix$ty !== void 0 ? _matrix$ty : 0;
      pattern.setTransform(domMatrix);
      return pattern;
    }

    return '';
  }

  CanvasPatterns.bitmapPattern = bitmapPattern;
})(CanvasPatterns || (CanvasPatterns = {}));

/***/ }),

/***/ "../../packages/canvas-engine/dist/platform.js":
/*!*****************************************************!*\
  !*** ../../packages/canvas-engine/dist/platform.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasPlatform": () => (/* binding */ CanvasPlatform)
/* harmony export */ });
/* harmony import */ var _jeng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/core */ "../../packages/core/dist/index.js");
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
}(_jeng_core__WEBPACK_IMPORTED_MODULE_0__.Platform);

/***/ }),

/***/ "../../packages/core/dist/components/component.js":
/*!********************************************************!*\
  !*** ../../packages/core/dist/components/component.js ***!
  \********************************************************/
/***/ (() => {



/***/ }),

/***/ "../../packages/core/dist/components/container.js":
/*!********************************************************!*\
  !*** ../../packages/core/dist/components/container.js ***!
  \********************************************************/
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
    var pointerEvents = engine.pointers;

    if (children) {
      var context = pointerEvents.getContext();
      pointerEvents.depth++;
      var result = false;

      if (Array.isArray(children)) {
        for (var i = children.length - 1; i >= 0; i--) {
          var component = children[i];

          if (pointerEvents.dispatchComponent(component, context, result)) {
            result = true;
          }
        }
      } else if (children.type) {
        var _component5 = children;

        if (pointerEvents.dispatchComponent(_component5, context, result)) {
          result = true;
        }
      } else {
        var componentsMap = children;
        var keys = Object.keys(componentsMap);

        for (var _i3 = keys.length - 1; _i3 >= 0; _i3--) {
          var _component6 = componentsMap[keys[_i3]];

          if (pointerEvents.dispatchComponent(_component6, context, result)) {
            result = true;
          }
        }
      }

      pointerEvents.depth--;
      return result;
    }

    return false;
  }

  ContainerExtension.hitTest = hitTest;

  function loaded(container, engine) {
    var children = container.children;
    var loading = engine.loading;

    if (children) {
      var context = loading.getContext();
      loading.depth++;

      if (Array.isArray(children)) {
        if (children.length) {
          context.progress = 0;
          context.loaded = true;

          for (var i = 0; i < children.length; i++) {
            var component = children[i];
            loading.updateComponent(component);
            var componentContext = loading.getContext();
            context.progress += componentContext.progress;

            if (!componentContext.loaded) {
              context.loaded = false;
            }
          }

          context.progress /= children.length;
        } else {
          context.progress = 1;
        }
      } else if (children.type) {
        var _component7 = children;
        loading.updateComponent(_component7);

        var _componentContext = loading.getContext();

        context.progress = _componentContext.progress;
        context.loaded = _componentContext.loaded;
      } else {
        var componentsMap = children;
        var keys = Object.keys(componentsMap);

        if (keys.length) {
          context.progress = 0;
          context.loaded = true;

          for (var _i4 = 0; _i4 < keys.length; _i4++) {
            var _component8 = componentsMap[keys[_i4]];
            loading.updateComponent(_component8);

            var _componentContext2 = loading.getContext();

            context.progress += _componentContext2.progress;

            if (!_componentContext2.loaded) {
              context.loaded = false;
            }
          }

          context.progress /= keys.length;
        } else {
          context.progress = 1;
          context.loaded = true;
        }
      }

      loading.depth--;
    }
  }

  ContainerExtension.loaded = loaded;

  function init(engine) {
    engine.components.update.set(CONTAINER, update);
    engine.components.render.set(CONTAINER, render);
    engine.components.hitTest.set(CONTAINER, hitTest);
    engine.components.loaded.set(CONTAINER, loaded);
  }

  ContainerExtension.init = init;
})(ContainerExtension || (ContainerExtension = {}));

/***/ }),

/***/ "../../packages/core/dist/components/loader.js":
/*!*****************************************************!*\
  !*** ../../packages/core/dist/components/loader.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderExtension": () => (/* binding */ LoaderExtension)
/* harmony export */ });
/* unused harmony exports LOADER, Loader */
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "../../packages/core/dist/components/container.js");

var LOADER = 'loader';
var Loader;

(function (Loader) {
  function getLoadingProgress(loader) {
    var _loader$loadingProgre;

    return (_loader$loadingProgre = loader.loadingProgress) !== null && _loader$loadingProgre !== void 0 ? _loader$loadingProgre : 0;
  }

  Loader.getLoadingProgress = getLoadingProgress;

  function isLoaded(loader) {
    var _loader$loaded;

    return (_loader$loaded = loader.loaded) !== null && _loader$loaded !== void 0 ? _loader$loaded : false;
  }

  Loader.isLoaded = isLoaded;

  function needLoadingCheck(loader) {
    var _loader$loadingCheck;

    return (_loader$loadingCheck = loader.loadingCheck) !== null && _loader$loadingCheck !== void 0 ? _loader$loadingCheck : true;
  }

  Loader.needLoadingCheck = needLoadingCheck;
})(Loader || (Loader = {}));

var LoaderExtension;

(function (LoaderExtension) {
  function loaded(loader, engine) {
    if (!Loader.needLoadingCheck(loader)) {
      return;
    }

    _container__WEBPACK_IMPORTED_MODULE_0__.ContainerExtension.loaded(loader, engine);
    var context = engine.loading.getContext();
    loader.loadingProgress = context.progress;

    if (context.loaded && !loader.loaded) {
      loader.loaded = true;

      if (loader.onLoaded) {
        loader.onLoaded();
      }
    }
  }

  LoaderExtension.loaded = loaded;

  function init(engine) {
    engine.components.update.set(LOADER, _container__WEBPACK_IMPORTED_MODULE_0__.ContainerExtension.update);
    engine.components.render.set(LOADER, _container__WEBPACK_IMPORTED_MODULE_0__.ContainerExtension.render);
    engine.components.hitTest.set(LOADER, _container__WEBPACK_IMPORTED_MODULE_0__.ContainerExtension.hitTest);
    engine.components.loaded.set(LOADER, loaded);
  }

  LoaderExtension.init = init;
})(LoaderExtension || (LoaderExtension = {}));

/***/ }),

/***/ "../../packages/core/dist/core/engine.js":
/*!***********************************************!*\
  !*** ../../packages/core/dist/core/engine.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Engine": () => (/* binding */ Engine)
/* harmony export */ });
/* harmony import */ var _features_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../features/renderer */ "../../packages/core/dist/features/renderer.js");
/* harmony import */ var _features_updater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/updater */ "../../packages/core/dist/features/updater.js");
/* harmony import */ var _features_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/loading */ "../../packages/core/dist/features/loading.js");
/* harmony import */ var _features_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/screen */ "../../packages/core/dist/features/screen.js");
/* harmony import */ var _features_pointers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/pointers */ "../../packages/core/dist/features/pointers.js");
/* harmony import */ var _features_ticker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../features/ticker */ "../../packages/core/dist/features/ticker.js");
/* harmony import */ var _features_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../features/platform */ "../../packages/core/dist/features/platform.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/container */ "../../packages/core/dist/components/container.js");
/* harmony import */ var _features_debug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../features/debug */ "../../packages/core/dist/features/debug.js");
/* harmony import */ var _features_resources__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../features/resources */ "../../packages/core/dist/features/resources.js");
/* harmony import */ var _features_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../features/components */ "../../packages/core/dist/features/components.js");
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/loader */ "../../packages/core/dist/components/loader.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }













var Engine = function Engine() {
  var _module$Components, _module$Screen, _module$Platform, _module$Updater, _module$Loading, _module$Renderer, _module$Pointers, _module$Ticker, _module$Debug, _module$Resources;

  var module = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, Engine);

  this.depth = 32;
  module.Components = (_module$Components = module.Components) !== null && _module$Components !== void 0 ? _module$Components : _features_components__WEBPACK_IMPORTED_MODULE_10__.Components;
  module.Screen = (_module$Screen = module.Screen) !== null && _module$Screen !== void 0 ? _module$Screen : _features_screen__WEBPACK_IMPORTED_MODULE_3__.Screen;
  module.Platform = (_module$Platform = module.Platform) !== null && _module$Platform !== void 0 ? _module$Platform : _features_platform__WEBPACK_IMPORTED_MODULE_6__.Platform;
  module.Updater = (_module$Updater = module.Updater) !== null && _module$Updater !== void 0 ? _module$Updater : _features_updater__WEBPACK_IMPORTED_MODULE_1__.Updater;
  module.Loading = (_module$Loading = module.Loading) !== null && _module$Loading !== void 0 ? _module$Loading : _features_loading__WEBPACK_IMPORTED_MODULE_2__.Loading;
  module.Renderer = (_module$Renderer = module.Renderer) !== null && _module$Renderer !== void 0 ? _module$Renderer : _features_renderer__WEBPACK_IMPORTED_MODULE_0__.Renderer;
  module.Pointers = (_module$Pointers = module.Pointers) !== null && _module$Pointers !== void 0 ? _module$Pointers : _features_pointers__WEBPACK_IMPORTED_MODULE_4__.Pointers;
  module.Ticker = (_module$Ticker = module.Ticker) !== null && _module$Ticker !== void 0 ? _module$Ticker : _features_ticker__WEBPACK_IMPORTED_MODULE_5__.Ticker;
  module.Debug = (_module$Debug = module.Debug) !== null && _module$Debug !== void 0 ? _module$Debug : _features_debug__WEBPACK_IMPORTED_MODULE_8__.Debug;
  module.Resources = (_module$Resources = module.Resources) !== null && _module$Resources !== void 0 ? _module$Resources : _features_resources__WEBPACK_IMPORTED_MODULE_9__.Resources;
  this.components = new module.Components();
  this.screen = new module.Screen();
  this.platform = new module.Platform(this);
  this.updater = new module.Updater(this);
  this.loading = new module.Loading(this);
  this.renderer = new module.Renderer(this);
  this.pointers = new module.Pointers(this);
  this.ticker = new module.Ticker(this);
  this.debug = new module.Debug();
  this.resources = new module.Resources(this);
  _components_container__WEBPACK_IMPORTED_MODULE_7__.ContainerExtension.init(this);
  _components_loader__WEBPACK_IMPORTED_MODULE_11__.LoaderExtension.init(this);
};

/***/ }),

/***/ "../../packages/core/dist/core/feature.js":
/*!************************************************!*\
  !*** ../../packages/core/dist/core/feature.js ***!
  \************************************************/
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

/***/ "../../packages/core/dist/extensions/display.js":
/*!******************************************************!*\
  !*** ../../packages/core/dist/extensions/display.js ***!
  \******************************************************/
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

/***/ "../../packages/core/dist/extensions/pivot.js":
/*!****************************************************!*\
  !*** ../../packages/core/dist/extensions/pivot.js ***!
  \****************************************************/
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

/***/ "../../packages/core/dist/extensions/pointer.js":
/*!******************************************************!*\
  !*** ../../packages/core/dist/extensions/pointer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pointer": () => (/* binding */ Pointer)
/* harmony export */ });
var handlersMap = {
  pointerDown: 'onPointerDown',
  pointerUp: 'onPointerUp',
  pointerMove: 'onPointerMove',
  pointerOver: 'onPointerOver',
  pointerOut: 'onPointerOut'
};
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
    var handlerName = handlersMap[type];

    if (handlerName && pointer[handlerName]) {
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

/***/ "../../packages/core/dist/extensions/source.js":
/*!*****************************************************!*\
  !*** ../../packages/core/dist/extensions/source.js ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "../../packages/core/dist/extensions/transform.js":
/*!********************************************************!*\
  !*** ../../packages/core/dist/extensions/transform.js ***!
  \********************************************************/
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
    var _transform$alpha;

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

    var alpha = (_transform$alpha = transform.alpha) !== null && _transform$alpha !== void 0 ? _transform$alpha : 1;
    var tint = transform.tint;

    if (tint) {
      var _tint$color = tint.color,
          color = _tint$color === void 0 ? 0 : _tint$color,
          _tint$value = tint.value,
          value = _tint$value === void 0 ? 1 : _tint$value;
      var valueInverted = 1 - value;
      var r = color >> 16 & 0xff;
      var g = color >> 8 & 0xff;
      var b = color & 0xff;
      result.alphaMultiplier = alpha;
      result.redMultiplier = valueInverted;
      result.greenMultiplier = valueInverted;
      result.blueMultiplier = valueInverted;
      result.alphaOffset = 0;
      result.redOffset = r * value;
      result.greenOffset = g * value;
      result.blueOffset = b * value;
      return;
    }

    var brightness = transform.brightness;

    if (brightness !== undefined) {
      if (brightness > 1) {
        brightness = 1;
      } else if (brightness < -1) {
        brightness = -1;
      }

      var percent = 1 - Math.abs(brightness);
      var offset = 0;

      if (brightness > 0) {
        offset = brightness * 255;
      }

      result.alphaMultiplier = alpha;
      result.redMultiplier = percent;
      result.greenMultiplier = percent;
      result.blueMultiplier = percent;
      result.alphaOffset = 0;
      result.redOffset = offset;
      result.greenOffset = offset;
      result.blueOffset = offset;
      return;
    }

    result.alphaMultiplier = alpha;
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

/***/ "../../packages/core/dist/extensions/update.js":
/*!*****************************************************!*\
  !*** ../../packages/core/dist/extensions/update.js ***!
  \*****************************************************/
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

/***/ "../../packages/core/dist/features/components.js":
/*!*******************************************************!*\
  !*** ../../packages/core/dist/features/components.js ***!
  \*******************************************************/
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

/***/ "../../packages/core/dist/features/debug.js":
/*!**************************************************!*\
  !*** ../../packages/core/dist/features/debug.js ***!
  \**************************************************/
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

/***/ "../../packages/core/dist/features/loading.js":
/*!****************************************************!*\
  !*** ../../packages/core/dist/features/loading.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loading": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var _core_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/feature */ "../../packages/core/dist/core/feature.js");
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


var Loading = /*#__PURE__*/function (_EngineFeature) {
  _inherits(Loading, _EngineFeature);

  var _super = _createSuper(Loading);

  function Loading() {
    var _this;

    _classCallCheck(this, Loading);

    _this = _super.apply(this, arguments);
    _this.depth = 0;
    _this.elapsedTime = 0;
    _this.enabled = true;
    _this.contexts = [];
    return _this;
  }

  _createClass(Loading, [{
    key: "getContext",
    value: function getContext() {
      var context = this.contexts[this.depth];

      if (!context) {
        context = {
          progress: 0,
          loaded: false
        };
        this.contexts[this.depth] = context;
      }

      return context;
    }
  }, {
    key: "updateComponent",
    value: function updateComponent(component) {
      var context = this.getContext();
      context.progress = 1;
      context.loaded = true;

      if (this.depth > this.engine.depth) {
        return;
      }

      var handler = this.engine.components.loaded.get(component.type);

      if (handler) {
        handler(component, this.engine);
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (!this.enabled) {
        return;
      }

      var root = this.engine.root;

      if (!root) {
        return;
      }

      var startTime = performance.now();
      this.depth = 0;
      this.updateComponent(root);
      this.elapsedTime = performance.now() - startTime;
    }
  }]);

  return Loading;
}(_core_feature__WEBPACK_IMPORTED_MODULE_0__.EngineFeature);

/***/ }),

/***/ "../../packages/core/dist/features/platform.js":
/*!*****************************************************!*\
  !*** ../../packages/core/dist/features/platform.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Platform": () => (/* binding */ Platform)
/* harmony export */ });
/* harmony import */ var _core_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/feature */ "../../packages/core/dist/core/feature.js");
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

/***/ "../../packages/core/dist/features/pointers.js":
/*!*****************************************************!*\
  !*** ../../packages/core/dist/features/pointers.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pointers": () => (/* binding */ Pointers)
/* harmony export */ });
/* harmony import */ var _jeng_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/geom */ "../../packages/geom/dist/index.js");
/* harmony import */ var _extensions_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extensions/display */ "../../packages/core/dist/extensions/display.js");
/* harmony import */ var _extensions_pointer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extensions/pointer */ "../../packages/core/dist/extensions/pointer.js");
/* harmony import */ var _extensions_transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../extensions/transform */ "../../packages/core/dist/extensions/transform.js");
/* harmony import */ var _core_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/feature */ "../../packages/core/dist/core/feature.js");
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






var Pointers = /*#__PURE__*/function (_EngineFeature) {
  _inherits(Pointers, _EngineFeature);

  var _super = _createSuper(Pointers);

  function Pointers() {
    var _this;

    _classCallCheck(this, Pointers);

    _this = _super.apply(this, arguments);
    _this.depth = 0;
    _this.enabled = true;
    _this.global = _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Point.empty();
    _this.local = _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Point.empty();
    _this.pointerId = 0;
    _this.pointerType = 'pointerDown';
    _this.contexts = [];
    return _this;
  }

  _createClass(Pointers, [{
    key: "getContext",
    value: function getContext() {
      var context = this.contexts[this.depth];

      if (!context) {
        context = {
          matrix: _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.empty()
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
      _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.setEmpty(base.matrix);
      this.depth++;
      this.dispatchComponent(root, base, false);
    }
  }, {
    key: "updateLocal",
    value: function updateLocal(component, parent) {
      var context = this.getContext();
      _extensions_transform__WEBPACK_IMPORTED_MODULE_3__.Transform.getMatrix(component, context.matrix);
      _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.concat(parent.matrix, context.matrix, context.matrix);
      _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.transformInversePoint(context.matrix, this.global, this.local);
    }
  }, {
    key: "dispatchComponent",
    value: function dispatchComponent(component, parent, parentResult) {
      if (this.depth > this.engine.depth) {
        return false;
      }

      if (!_extensions_display__WEBPACK_IMPORTED_MODULE_1__.Display.isVisible(component)) {
        return false;
      }

      if (!_extensions_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.isPointerEnabled(component)) {
        return false;
      }

      if (parentResult) {
        if (component.pointerOver && this.pointerType === 'pointerMove') {
          this.updateLocal(component, parent);
          var _this$local = this.local,
              x = _this$local.x,
              y = _this$local.y;
          _extensions_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, 'pointerOut', x, y, this.pointerId);
          component.pointerOver = false;
        }

        return false;
      }

      var handler = this.engine.components.hitTest.get(component.type);

      if (handler) {
        this.updateLocal(component, parent);
        var _this$local2 = this.local,
            _x = _this$local2.x,
            _y = _this$local2.y;
        var result = handler(component, this.engine);

        if (result) {
          _extensions_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, this.pointerType, _x, _y, this.pointerId);
        }

        if (this.pointerType === 'pointerMove') {
          if (result && !component.pointerOver) {
            _extensions_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, 'pointerOver', _x, _y, this.pointerId);
          } else if (!result && component.pointerOver) {
            _extensions_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, 'pointerOut', _x, _y, this.pointerId);
          }

          component.pointerOver = result;
        }

        return result;
      }

      return false;
    }
  }]);

  return Pointers;
}(_core_feature__WEBPACK_IMPORTED_MODULE_4__.EngineFeature);

/***/ }),

/***/ "../../packages/core/dist/features/renderer.js":
/*!*****************************************************!*\
  !*** ../../packages/core/dist/features/renderer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Renderer": () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var _jeng_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/geom */ "../../packages/geom/dist/index.js");
/* harmony import */ var _extensions_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extensions/display */ "../../packages/core/dist/extensions/display.js");
/* harmony import */ var _extensions_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extensions/transform */ "../../packages/core/dist/extensions/transform.js");
/* harmony import */ var _core_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/feature */ "../../packages/core/dist/core/feature.js");
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
          matrix: _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.empty(),
          colorTransform: _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.ColorTransform.empty()
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

      if (!_extensions_display__WEBPACK_IMPORTED_MODULE_1__.Display.isVisible(component)) {
        return;
      }

      var context = this.getContext();
      _extensions_transform__WEBPACK_IMPORTED_MODULE_2__.Transform.getMatrix(component, context.matrix);
      _extensions_transform__WEBPACK_IMPORTED_MODULE_2__.Transform.getColorTransform(component, context.colorTransform);
      _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.concat(parent.matrix, context.matrix, context.matrix);
      _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.ColorTransform.concat(parent.colorTransform, context.colorTransform, context.colorTransform);
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
      _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.copy(this.engine.screen.getMatrix(), base.matrix);
      _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.ColorTransform.setEmpty(base.colorTransform);
      this.renderComponent(root, base);
      this.engine.platform.end();
      this.elapsedTime = performance.now() - startTime;
    }
  }]);

  return Renderer;
}(_core_feature__WEBPACK_IMPORTED_MODULE_3__.EngineFeature);

/***/ }),

/***/ "../../packages/core/dist/features/resources.js":
/*!******************************************************!*\
  !*** ../../packages/core/dist/features/resources.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Resource": () => (/* binding */ Resource),
/* harmony export */   "Resources": () => (/* binding */ Resources)
/* harmony export */ });
/* harmony import */ var _core_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/feature */ "../../packages/core/dist/core/feature.js");
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


var Resource;

(function (Resource) {
  function getProgress(resource) {
    if (!resource) {
      return 0;
    }

    if (resource.loaded) {
      return 1;
    }

    if (resource.bytesTotal > 0) {
      return resource.bytesLoaded / resource.bytesTotal;
    }

    return 0;
  }

  Resource.getProgress = getProgress;
})(Resource || (Resource = {}));

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

/***/ "../../packages/core/dist/features/screen.js":
/*!***************************************************!*\
  !*** ../../packages/core/dist/features/screen.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen": () => (/* binding */ Screen)
/* harmony export */ });
/* harmony import */ var _jeng_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/geom */ "../../packages/geom/dist/index.js");
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
    this.matrix = _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.empty();
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

/***/ "../../packages/core/dist/features/ticker.js":
/*!***************************************************!*\
  !*** ../../packages/core/dist/features/ticker.js ***!
  \***************************************************/
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

      _this.engine.loading.update();

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

/***/ "../../packages/core/dist/features/updater.js":
/*!****************************************************!*\
  !*** ../../packages/core/dist/features/updater.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Updater": () => (/* binding */ Updater)
/* harmony export */ });
/* harmony import */ var _extensions_update__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extensions/update */ "../../packages/core/dist/extensions/update.js");
/* harmony import */ var _core_feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/feature */ "../../packages/core/dist/core/feature.js");
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

      if (!_extensions_update__WEBPACK_IMPORTED_MODULE_0__.Update.isEnabled(component)) {
        return;
      }

      this.updateProperties(component);
      _extensions_update__WEBPACK_IMPORTED_MODULE_0__.Update.update(component, this.time);
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

/***/ "../../packages/core/dist/index.js":
/*!*****************************************!*\
  !*** ../../packages/core/dist/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Engine": () => (/* reexport safe */ _core_engine__WEBPACK_IMPORTED_MODULE_3__.Engine),
/* harmony export */   "Platform": () => (/* reexport safe */ _features_platform__WEBPACK_IMPORTED_MODULE_7__.Platform),
/* harmony export */   "Resource": () => (/* reexport safe */ _features_resources__WEBPACK_IMPORTED_MODULE_10__.Resource),
/* harmony export */   "MouseExtension": () => (/* reexport safe */ _interactive_mouse__WEBPACK_IMPORTED_MODULE_14__.MouseExtension),
/* harmony export */   "Pivot": () => (/* reexport safe */ _extensions_pivot__WEBPACK_IMPORTED_MODULE_16__.Pivot)
/* harmony export */ });
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/component */ "../../packages/core/dist/components/component.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/container */ "../../packages/core/dist/components/container.js");
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/loader */ "../../packages/core/dist/components/loader.js");
/* harmony import */ var _core_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/engine */ "../../packages/core/dist/core/engine.js");
/* harmony import */ var _features_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/components */ "../../packages/core/dist/features/components.js");
/* harmony import */ var _features_debug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/debug */ "../../packages/core/dist/features/debug.js");
/* harmony import */ var _core_feature__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/feature */ "../../packages/core/dist/core/feature.js");
/* harmony import */ var _features_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/platform */ "../../packages/core/dist/features/platform.js");
/* harmony import */ var _features_pointers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/pointers */ "../../packages/core/dist/features/pointers.js");
/* harmony import */ var _features_renderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/renderer */ "../../packages/core/dist/features/renderer.js");
/* harmony import */ var _features_resources__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/resources */ "../../packages/core/dist/features/resources.js");
/* harmony import */ var _features_screen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/screen */ "../../packages/core/dist/features/screen.js");
/* harmony import */ var _features_ticker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/ticker */ "../../packages/core/dist/features/ticker.js");
/* harmony import */ var _features_updater__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features/updater */ "../../packages/core/dist/features/updater.js");
/* harmony import */ var _interactive_mouse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interactive/mouse */ "../../packages/core/dist/interactive/mouse.js");
/* harmony import */ var _extensions_display__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./extensions/display */ "../../packages/core/dist/extensions/display.js");
/* harmony import */ var _extensions_pivot__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./extensions/pivot */ "../../packages/core/dist/extensions/pivot.js");
/* harmony import */ var _extensions_source__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./extensions/source */ "../../packages/core/dist/extensions/source.js");
/* harmony import */ var _extensions_transform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./extensions/transform */ "../../packages/core/dist/extensions/transform.js");
/* harmony import */ var _extensions_update__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./extensions/update */ "../../packages/core/dist/extensions/update.js");





















/***/ }),

/***/ "../../packages/core/dist/interactive/mouse.js":
/*!*****************************************************!*\
  !*** ../../packages/core/dist/interactive/mouse.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouseExtension": () => (/* binding */ MouseExtension)
/* harmony export */ });
function dispatchEvent(engine, event, type) {
  var view = engine.platform.view;
  var clientRect = view.getBoundingClientRect();
  var x = event.clientX - clientRect.left - view.clientLeft;
  var y = event.clientY - clientRect.top - view.clientTop;
  engine.pointers.dispatch(type, x, y, 0);
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

/***/ "../../packages/geom/dist/bounds.js":
/*!******************************************!*\
  !*** ../../packages/geom/dist/bounds.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export Bounds */
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

/***/ "../../packages/geom/dist/color-transform.js":
/*!***************************************************!*\
  !*** ../../packages/geom/dist/color-transform.js ***!
  \***************************************************/
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
    var alphaOffset = ct1.alphaMultiplier * ct0.alphaOffset + ct1.alphaOffset;
    var redOffset = ct1.redMultiplier * ct0.redOffset + ct1.redOffset;
    var greenOffset = ct1.greenMultiplier * ct0.greenOffset + ct1.greenOffset;
    var blueOffset = ct1.blueMultiplier * ct0.blueOffset + ct1.blueOffset;
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

/***/ "../../packages/geom/dist/index.js":
/*!*****************************************!*\
  !*** ../../packages/geom/dist/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorTransform": () => (/* reexport safe */ _color_transform__WEBPACK_IMPORTED_MODULE_0__.ColorTransform),
/* harmony export */   "Matrix": () => (/* reexport safe */ _matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix),
/* harmony export */   "Point": () => (/* reexport safe */ _point__WEBPACK_IMPORTED_MODULE_3__.Point),
/* harmony export */   "Rectangle": () => (/* reexport safe */ _rectangle__WEBPACK_IMPORTED_MODULE_4__.Rectangle)
/* harmony export */ });
/* harmony import */ var _color_transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-transform */ "../../packages/geom/dist/color-transform.js");
/* harmony import */ var _bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bounds */ "../../packages/geom/dist/bounds.js");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matrix */ "../../packages/geom/dist/matrix.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point */ "../../packages/geom/dist/point.js");
/* harmony import */ var _rectangle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rectangle */ "../../packages/geom/dist/rectangle.js");






/***/ }),

/***/ "../../packages/geom/dist/matrix.js":
/*!******************************************!*\
  !*** ../../packages/geom/dist/matrix.js ***!
  \******************************************/
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

/***/ "../../packages/geom/dist/point.js":
/*!*****************************************!*\
  !*** ../../packages/geom/dist/point.js ***!
  \*****************************************/
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

/***/ "../../packages/geom/dist/rectangle.js":
/*!*********************************************!*\
  !*** ../../packages/geom/dist/rectangle.js ***!
  \*********************************************/
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

  function intersection(source, target, result) {
    var x = source.x,
        y = source.y,
        width = source.width,
        height = source.height;
    var left = target.x;
    var top = target.y;
    var right = target.x + target.width;
    var bottom = target.y + target.height;

    if (x < left) {
      width -= left - x;
      x = left;
    }

    if (x + width > right) {
      width = right - x;
    }

    if (y < top) {
      height -= top - y;
      y = top;
    }

    if (y + height > bottom) {
      height = bottom - y;
    }

    if (width < 0) {
      width = 0;
    }

    if (height < 0) {
      height = 0;
    }

    result.x = x;
    result.y = y;
    result.width = width;
    result.height = height;
  }

  Rectangle.intersection = intersection;

  function isEmpty(rectangle) {
    return rectangle.width === 0 || rectangle.height === 0;
  }

  Rectangle.isEmpty = isEmpty;

  function contains(rectangle, point) {
    return rectangle.x < point.x && rectangle.x + rectangle.width > point.x && rectangle.y < point.y && rectangle.y + rectangle.height > point.y;
  }

  Rectangle.contains = contains;

  function round(rectangle) {
    rectangle.x = Math.round(rectangle.x);
    rectangle.y = Math.round(rectangle.y);
    rectangle.width = Math.round(rectangle.width);
    rectangle.height = Math.round(rectangle.height);
  }

  Rectangle.round = round;
})(Rectangle || (Rectangle = {}));

/***/ }),

/***/ "../../packages/image/dist/canvas-image-color.js":
/*!*******************************************************!*\
  !*** ../../packages/image/dist/canvas-image-color.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasImageColorExtension": () => (/* binding */ CanvasImageColorExtension)
/* harmony export */ });
/* harmony import */ var _jeng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/core */ "../../packages/core/dist/index.js");
/* harmony import */ var _jeng_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jeng/geom */ "../../packages/geom/dist/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "../../packages/image/dist/image.js");



var bounds = _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.empty();
var screenBounds = _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.empty();
var CanvasImageColorExtension;

(function (CanvasImageColorExtension) {
  function render(image, engine) {
    var src = image.src;

    if (!src) {
      return;
    }

    var resource = engine.resources.get(src);

    if (!(resource !== null && resource !== void 0 && resource.image)) {
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
    var x = _jeng_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(image, width);
    var y = _jeng_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(image, height);

    if (_jeng_geom__WEBPACK_IMPORTED_MODULE_1__.ColorTransform.isEmptyWithAlpha(colorTransform)) {
      context2d.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
      context2d.globalAlpha = colorTransform.alphaMultiplier;
      context2d.drawImage(resource.image, x, y);
    } else {
      var customContext = platform.createCustomContext();
      bounds.x = x;
      bounds.y = y;
      bounds.width = width;
      bounds.height = height;
      _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Matrix.transformBounds(matrix, bounds, bounds);

      if (_jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.isEmpty(bounds)) {
        return;
      }

      screenBounds.width = customContext.canvas.width;
      screenBounds.height = customContext.canvas.height;
      _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.intersection(bounds, screenBounds, bounds);

      if (_jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.isEmpty(bounds)) {
        return;
      }

      _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.round(bounds);
      customContext.setTransform();
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

/***/ "../../packages/image/dist/canvas-image.js":
/*!*************************************************!*\
  !*** ../../packages/image/dist/canvas-image.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export CanvasImageExtension */
/* harmony import */ var _jeng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/core */ "../../packages/core/dist/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "../../packages/image/dist/image.js");


var CanvasImageExtension;

(function (CanvasImageExtension) {
  function render(image, engine) {
    var src = image.src;

    if (!src) {
      return;
    }

    var resource = engine.resources.get(src);

    if (!(resource !== null && resource !== void 0 && resource.image)) {
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
    var x = _jeng_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(image, width);
    var y = _jeng_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(image, height);
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

/***/ "../../packages/image/dist/image.js":
/*!******************************************!*\
  !*** ../../packages/image/dist/image.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMAGE": () => (/* binding */ IMAGE),
/* harmony export */   "ImageExtension": () => (/* binding */ ImageExtension)
/* harmony export */ });
/* unused harmony export Image */
/* harmony import */ var _jeng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/core */ "../../packages/core/dist/index.js");
/* harmony import */ var _jeng_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jeng/geom */ "../../packages/geom/dist/index.js");
/* harmony import */ var _jeng_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jeng/resources */ "../../packages/resources/dist/index.js");



var IMAGE = 'image';
var Image;

(function (Image) {
  function calculateBounds(image, bounds, engine) {
    var src = image.src;

    if (!src) {
      _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.setEmpty(bounds);
      return;
    }

    var resource = engine.resources.get(src);

    if (!(resource !== null && resource !== void 0 && resource.image)) {
      _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.setEmpty(bounds);
      return;
    }

    var _resource$image = resource.image,
        width = _resource$image.width,
        height = _resource$image.height;
    var x = _jeng_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(image, width);
    var y = _jeng_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(image, height);
    bounds.x = x;
    bounds.y = y;
    bounds.width = width;
    bounds.height = height;
  }

  Image.calculateBounds = calculateBounds;
})(Image || (Image = {}));

var bounds = _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.empty();
var ImageExtension;

(function (ImageExtension) {
  function hitTest(image, engine) {
    var local = engine.pointers.local;
    Image.calculateBounds(image, bounds, engine);
    return _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.contains(bounds, local);
  }

  ImageExtension.hitTest = hitTest;

  function loaded(image, engine) {
    var context = engine.loading.getContext();
    var src = image.src;

    if (!src) {
      context.progress = 1;
      context.loaded = true;
      return;
    }

    var resource = engine.resources.get(src);
    context.progress = _jeng_core__WEBPACK_IMPORTED_MODULE_0__.Resource.getProgress(resource);
    context.loaded = !!(resource !== null && resource !== void 0 && resource.loaded) && !!(resource !== null && resource !== void 0 && resource.image);
  }

  ImageExtension.loaded = loaded;

  function init(engine) {
    engine.components.hitTest.set(IMAGE, hitTest);
    engine.components.loaded.set(IMAGE, loaded);
    _jeng_resources__WEBPACK_IMPORTED_MODULE_2__.ImageResource.init(engine);
  }

  ImageExtension.init = init;
})(ImageExtension || (ImageExtension = {}));

/***/ }),

/***/ "../../packages/image/dist/index.js":
/*!******************************************!*\
  !*** ../../packages/image/dist/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasImageColorExtension": () => (/* reexport safe */ _canvas_image_color__WEBPACK_IMPORTED_MODULE_2__.CanvasImageColorExtension)
/* harmony export */ });
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image */ "../../packages/image/dist/image.js");
/* harmony import */ var _canvas_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas-image */ "../../packages/image/dist/canvas-image.js");
/* harmony import */ var _canvas_image_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas-image-color */ "../../packages/image/dist/canvas-image-color.js");




/***/ }),

/***/ "../../packages/resources/dist/image.js":
/*!**********************************************!*\
  !*** ../../packages/resources/dist/image.js ***!
  \**********************************************/
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
      case 'webp':
        var resource = {
          asset: asset,
          loaded: false,
          bytesLoaded: 0,
          bytesTotal: 0
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

/***/ "../../packages/resources/dist/index.js":
/*!**********************************************!*\
  !*** ../../packages/resources/dist/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageResource": () => (/* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_0__.ImageResource)
/* harmony export */ });
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image */ "../../packages/resources/dist/image.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string */ "../../packages/resources/dist/string.js");



/***/ }),

/***/ "../../packages/resources/dist/string.js":
/*!***********************************************!*\
  !*** ../../packages/resources/dist/string.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export StringResource */
var StringResource;

(function (StringResource) {
  function resolve(asset, engine) {
    var extension = asset.split('.').pop();

    switch (extension) {
      case 'txt':
      case 'json':
        var resource = {
          asset: asset,
          loaded: false,
          bytesLoaded: 0,
          bytesTotal: 0
        };
        var xhr = new XMLHttpRequest();
        xhr.open('GET', asset, true);

        xhr.onprogress = function (e) {
          resource.bytesLoaded = e.loaded;
          resource.bytesTotal = e.total;
        };

        xhr.onload = function () {
          console.log("string loaded: ".concat(asset));
          resource.data = xhr.responseText;
          resource.loaded = true;
          resource.bytesLoaded = resource.bytesTotal;
        };

        xhr.onerror = function (e) {
          engine.debug.warning('string load error', e);
        };

        xhr.send();
        return resource;

      default:
        break;
    }

    return null;
  }

  StringResource.resolve = resolve;

  function init(engine) {
    engine.resources.resolvers.add(resolve);
  }

  StringResource.init = init;
})(StringResource || (StringResource = {}));

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
/* harmony import */ var _jeng_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/image */ "../../packages/image/dist/index.js");
/* harmony import */ var _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jeng/canvas-engine */ "../../packages/canvas-engine/dist/index.js");
/* harmony import */ var _jeng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jeng/core */ "../../packages/core/dist/index.js");



const engine = new _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_1__.CanvasEngine();
_jeng_image__WEBPACK_IMPORTED_MODULE_0__.CanvasImageColorExtension.init(engine);
_jeng_core__WEBPACK_IMPORTED_MODULE_2__.MouseExtension.init(engine);
engine.screen.fullscreen = true;
engine.ticker.play();
document.body.appendChild(engine.platform.view);
const images = [
    'Artifacts_gift_0.png',
    'Artifacts_skullRing_mythic.png',
    'Artifacts3_brew_mythic.png',
    'Artifacts3_doll_mythic.png',
    'Artifacts3_mug_mythic.png',
    'Artifacts3_rose_mythic.png',
    'championItems_sword_rare.png',
];
engine.root = {
    type: 'container',
    children: images.map((image, index) => ({
        type: 'image',
        src: `assets/${image}`,
        x: 100 + 140 * (index % 2),
        y: 100 + 120 * (index / 2 | 0),
        pivotX: 0.5,
        pivotY: 0.5,
        onPointerOver() {
            this.brightness = 0.5;
        },
        onPointerOut() {
            this.brightness = 0;
        },
        onPointerDown() {
            this.scale = 0.95;
        },
        onPointerUp() {
            this.scale = 1;
        },
    })),
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1tb3VzZS8uLi9wYWNrYWdlcy9jYW52YXMtZW5naW5lL2Rpc3QvZW5naW5lLmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLW1vdXNlLy4uL3BhY2thZ2VzL2NhbnZhcy1lbmdpbmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1tb3VzZS8uLi9wYWNrYWdlcy9jYW52YXMtZW5naW5lL2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtbW91c2UvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L3BsYXRmb3JtLmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLW1vdXNlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1tb3VzZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvY29tcG9uZW50cy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtbW91c2UvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvcmUvZW5naW5lLmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLW1vdXNlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9jb3JlL2ZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtbW91c2UvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1tb3VzZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy9waXZvdC5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1tb3VzZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy9wb2ludGVyLmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLW1vdXNlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9leHRlbnNpb25zL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1tb3VzZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtbW91c2UvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtbW91c2UvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL2RlYnVnLmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLW1vdXNlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9sb2FkaW5nLmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLW1vdXNlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1tb3VzZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvcG9pbnRlcnMuanMiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtbW91c2UvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3JlbmRlcmVyLmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLW1vdXNlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9yZXNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtbW91c2UvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1tb3VzZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvdGlja2VyLmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLW1vdXNlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy91cGRhdGVyLmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLW1vdXNlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1tb3VzZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvaW50ZXJhY3RpdmUvbW91c2UuanMiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtbW91c2UvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L2JvdW5kcy5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1tb3VzZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvY29sb3ItdHJhbnNmb3JtLmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLW1vdXNlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1tb3VzZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvbWF0cml4LmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLW1vdXNlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9wb2ludC5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1tb3VzZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLW1vdXNlLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvY2FudmFzLWltYWdlLWNvbG9yLmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLW1vdXNlLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvY2FudmFzLWltYWdlLmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLW1vdXNlLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtbW91c2UvLi4vcGFja2FnZXMvaW1hZ2UvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1tb3VzZS8uLi9wYWNrYWdlcy9yZXNvdXJjZXMvZGlzdC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1tb3VzZS8uLi9wYWNrYWdlcy9yZXNvdXJjZXMvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1tb3VzZS8uLi9wYWNrYWdlcy9yZXNvdXJjZXMvZGlzdC9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtbW91c2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtbW91c2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ludGVyYWN0aXZlLW1vdXNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtbW91c2UvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiQ2FudmFzRW5naW5lIiwibW9kdWxlIiwiUGxhdGZvcm0iLCJDYW52YXNQbGF0Zm9ybSIsIkVuZ2luZSIsIkNhbnZhc1BhdHRlcm5zIiwiY29sb3JQYXR0ZXJuIiwiY29sb3IiLCJhbHBoYSIsImN0IiwiciIsImciLCJiIiwiYSIsIkNvbG9yVHJhbnNmb3JtIiwicmVkTXVsdGlwbGllciIsInJlZE9mZnNldCIsImdyZWVuTXVsdGlwbGllciIsImdyZWVuT2Zmc2V0IiwiYmx1ZU11bHRpcGxpZXIiLCJibHVlT2Zmc2V0IiwiYWxwaGFNdWx0aXBsaWVyIiwiYWxwaGFPZmZzZXQiLCJhZGRHcmFkaWVudENvbG9ycyIsInBhdHRlcm4iLCJjb2xvcnMiLCJhbHBoYXMiLCJyYXRpb3MiLCJjb2xvclRyYW5zZm9ybSIsImkiLCJsZW5ndGgiLCJyYXRpbyIsImNvbG9yU3R5bGUiLCJhZGRDb2xvclN0b3AiLCJyYWRpYWxHcmFkaWVudFBhdHRlcm4iLCJiZWdpblgiLCJiZWdpblkiLCJiZWdpblJhZGl1cyIsImVuZFgiLCJlbmRZIiwiZW5kUmFkaXVzIiwiY29udGV4dCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwibGluZWFyR3JhZGllbnRQYXR0ZXJuIiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJiaXRtYXBQYXR0ZXJuIiwiaW1hZ2UiLCJyZXBlYXQiLCJtYXRyaXgiLCJjcmVhdGVQYXR0ZXJuIiwiZG9tTWF0cml4IiwiRE9NTWF0cml4IiwiYyIsImQiLCJlIiwidHgiLCJmIiwidHkiLCJzZXRUcmFuc2Zvcm0iLCJhcmd1bWVudHMiLCJ2aWV3IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dHMiLCJnZXRDb250ZXh0IiwiY3VzdG9tQ29udGV4dHMiLCJwdXNoIiwicG9wIiwiZW5naW5lIiwiZGVidWciLCJ3YXJuaW5nIiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJjbGVhciIsInVwZGF0ZVNpemUiLCJjbGVhclJlY3QiLCJzY3JlZW4iLCJnZXRXaWR0aCIsImdldEhlaWdodCIsInBpeGVsUmF0aW8iLCJnZXRQaXhlbFJhdGlvIiwidmlld1dpZHRoIiwiTWF0aCIsImZsb29yIiwidmlld0hlaWdodCIsInN0eWxlIiwiQ09OVEFJTkVSIiwiQ29udGFpbmVyIiwibnVtQ2hpbGRyZW4iLCJjb250YWluZXIiLCJjaGlsZHJlbiIsIkFycmF5IiwiaXNBcnJheSIsInR5cGUiLCJrZXlzIiwiT2JqZWN0IiwiQ29udGFpbmVyRXh0ZW5zaW9uIiwicmVuZGVyIiwicmVuZGVyZXIiLCJkZXB0aCIsImNvbXBvbmVudCIsInJlbmRlckNvbXBvbmVudCIsImNvbXBvbmVudHNNYXAiLCJ1cGRhdGUiLCJ1cGRhdGVyIiwidXBkYXRlQ29tcG9uZW50IiwiaGl0VGVzdCIsInBvaW50ZXJFdmVudHMiLCJwb2ludGVycyIsInJlc3VsdCIsImRpc3BhdGNoQ29tcG9uZW50IiwibG9hZGVkIiwibG9hZGluZyIsInByb2dyZXNzIiwiY29tcG9uZW50Q29udGV4dCIsImluaXQiLCJjb21wb25lbnRzIiwic2V0IiwiTE9BREVSIiwiTG9hZGVyIiwiZ2V0TG9hZGluZ1Byb2dyZXNzIiwibG9hZGVyIiwibG9hZGluZ1Byb2dyZXNzIiwiaXNMb2FkZWQiLCJuZWVkTG9hZGluZ0NoZWNrIiwibG9hZGluZ0NoZWNrIiwiTG9hZGVyRXh0ZW5zaW9uIiwib25Mb2FkZWQiLCJDb21wb25lbnRzIiwiU2NyZWVuIiwiVXBkYXRlciIsIkxvYWRpbmciLCJSZW5kZXJlciIsIlBvaW50ZXJzIiwiVGlja2VyIiwiRGVidWciLCJSZXNvdXJjZXMiLCJwbGF0Zm9ybSIsInRpY2tlciIsInJlc291cmNlcyIsIkVuZ2luZUZlYXR1cmUiLCJEaXNwbGF5IiwiaXNWaXNpYmxlIiwidmlzaWJsZSIsIlBpdm90IiwiZ2V0WCIsInBpdm90IiwicGl2b3RYIiwiZ2V0WSIsInBpdm90WSIsImhhc1ZhbHVlcyIsImhhbmRsZXJzTWFwIiwicG9pbnRlckRvd24iLCJwb2ludGVyVXAiLCJwb2ludGVyTW92ZSIsInBvaW50ZXJPdmVyIiwicG9pbnRlck91dCIsIlBvaW50ZXIiLCJpc1BvaW50ZXJPdmVyIiwicG9pbnRlciIsImlzUG9pbnRlckVuYWJsZWQiLCJwb2ludGVyRW5hYmxlZCIsImRpc3BhdGNoRXZlbnQiLCJ4IiwieSIsImlkIiwiaGFuZGxlck5hbWUiLCJldmVudCIsIlRyYW5zZm9ybSIsImdldE1hdHJpeCIsInRyYW5zZm9ybSIsInJvdGF0aW9uIiwic2NhbGVYIiwic2NhbGUiLCJzY2FsZVkiLCJjb3MiLCJzaW4iLCJnZXRDb2xvclRyYW5zZm9ybSIsInRpbnQiLCJ2YWx1ZSIsInZhbHVlSW52ZXJ0ZWQiLCJicmlnaHRuZXNzIiwidW5kZWZpbmVkIiwicGVyY2VudCIsImFicyIsIm9mZnNldCIsIlVwZGF0ZSIsImlzRW5hYmxlZCIsImVuYWJsZWQiLCJ0aW1lIiwib25VcGRhdGUiLCJwcm9wZXJ0aWVzIiwiTWFwIiwiZXJyb3JzIiwid2FybmluZ3MiLCJjb25zb2xlIiwibG9nIiwiYXJncyIsIlN0cmluZyIsImNvdW50IiwiZ2V0IiwiZXJyb3IiLCJ3YXJuIiwiZWxhcHNlZFRpbWUiLCJoYW5kbGVyIiwicm9vdCIsInN0YXJ0VGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiZ2xvYmFsIiwiUG9pbnQiLCJsb2NhbCIsInBvaW50ZXJJZCIsInBvaW50ZXJUeXBlIiwiTWF0cml4IiwiYmFzZSIsInBhcmVudCIsInBhcmVudFJlc3VsdCIsInVwZGF0ZUxvY2FsIiwiYmVnaW4iLCJlbmQiLCJSZXNvdXJjZSIsImdldFByb2dyZXNzIiwicmVzb3VyY2UiLCJieXRlc1RvdGFsIiwiYnl0ZXNMb2FkZWQiLCJyZXNvbHZlcnMiLCJTZXQiLCJhc3NldCIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1bGxzY3JlZW4iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiZnJhbWVSYXRlIiwicGF1c2VkIiwidXBkYXRlRnJhbWUiLCJjdXJyZW50VGltZSIsImRlbHRhVGltZSIsInVwZGF0ZU5leHRGcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZVByb3BlcnRpZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJjbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRMZWZ0IiwiY2xpZW50WSIsInRvcCIsImNsaWVudFRvcCIsImRpc3BhdGNoIiwicHJldmVudERlZmF1bHQiLCJNb3VzZUV4dGVuc2lvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJCb3VuZHMiLCJlbXB0eSIsIm1pblgiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJtaW5ZIiwibWF4WCIsIk1JTl9WQUxVRSIsIm1heFkiLCJzZXRFbXB0eSIsImJvdW5kcyIsImlzRW1wdHkiLCJ0b1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInRlc3RYIiwidGVzdFkiLCJ0ZXN0IiwidGVzdFBvaW50IiwicG9pbnQiLCJpc0VtcHR5V2l0aEFscGhhIiwiY29weSIsImZyb20iLCJ0byIsImNvbmNhdCIsImN0MSIsImN0MCIsIm1hdHJpeDAiLCJtYXRyaXgxIiwiZ2V0RGV0ZXJtaW5hbnQiLCJpbnZlcnQiLCJkZXRlcm1pbmFudCIsInRyYW5zZm9ybVBvaW50IiwidHJhbnNmb3JtUG9pbnRMb2NhbCIsInRyYW5zZm9ybUludmVyc2VQb2ludCIsInRyYW5zZm9ybUJvdW5kcyIsInJ4IiwicnkiLCJyciIsInJiIiwibngxIiwibnkxIiwibngyIiwibnkyIiwibngzIiwibnkzIiwibng0Iiwibnk0IiwicmlnaHQiLCJib3R0b20iLCJzcXJ0IiwiYW5nbGUiLCJhdGFuMiIsImVxdWFscyIsInBvaW50MCIsInBvaW50MSIsInNvdXJjZSIsInRhcmdldCIsIm5vcm1hbGl6ZSIsInRoaWNrbmVzcyIsImRpc3RhbmNlIiwiZHgiLCJkeSIsImludGVycG9sYXRlIiwicG9sYXIiLCJSZWN0YW5nbGUiLCJpbnRlcnNlY3Rpb24iLCJjb250YWlucyIsInJvdW5kIiwic2NyZWVuQm91bmRzIiwiQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiIsInNyYyIsImNvbnRleHQyZCIsImdsb2JhbEFscGhhIiwiZHJhd0ltYWdlIiwiY3VzdG9tQ29udGV4dCIsImNyZWF0ZUN1c3RvbUNvbnRleHQiLCJpbWFnZURhdGEiLCJnZXRJbWFnZURhdGEiLCJybSIsImdtIiwiYm0iLCJhbSIsInJvIiwiZ28iLCJibyIsImFvIiwiZGF0YSIsInB1dEltYWdlRGF0YSIsImRlc3Ryb3lDdXN0b21Db250ZXh0IiwiSW1hZ2VFeHRlbnNpb24iLCJJTUFHRSIsIkNhbnZhc0ltYWdlRXh0ZW5zaW9uIiwiSW1hZ2UiLCJjYWxjdWxhdGVCb3VuZHMiLCJJbWFnZVJlc291cmNlIiwiZXh0ZW5zaW9uIiwic3BsaXQiLCJvbmxvYWQiLCJvbmVycm9yIiwiYWRkIiwiU3RyaW5nUmVzb3VyY2UiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJvbnByb2dyZXNzIiwidG90YWwiLCJyZXNwb25zZVRleHQiLCJzZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ08sSUFBTUEsWUFBYjtBQUFBOztBQUFBOztBQUNJLDBCQUF5QjtBQUFBOztBQUFBLFFBQWJDLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDckJBLFVBQU0sQ0FBQ0MsUUFBUCx1QkFBa0JELE1BQU0sQ0FBQ0MsUUFBekIsK0RBQXFDQyxxREFBckM7QUFEcUIsNkJBRWZGLE1BRmU7QUFHeEI7O0FBSkw7QUFBQSxFQUFrQ0csOENBQWxDLEU7Ozs7Ozs7Ozs7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RztRQUNYLGFBQWE7WUFDWixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN2QixDQUFDO1FBQ0QsWUFBWTtZQUNYLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFDRCxhQUFhO1lBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbkIsQ0FBQztRQUNELFdBQVc7WUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNoQixDQUFDO0tBQ1MsRUFBQztDQUNDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBDYW52YXNQbGF0Zm9ybSB9IGZyb20gJy4vcGxhdGZvcm0nO1xuZXhwb3J0IGNsYXNzIENhbnZhc0VuZ2luZSBleHRlbmRzIEVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IobW9kdWxlID0ge30pIHtcbiAgICAgICAgbW9kdWxlLlBsYXRmb3JtID0gbW9kdWxlLlBsYXRmb3JtID8/IENhbnZhc1BsYXRmb3JtO1xuICAgICAgICBzdXBlcihtb2R1bGUpO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vcGF0dGVybnMnO1xuZXhwb3J0ICogZnJvbSAnLi9wbGF0Zm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2VuZ2luZSc7XG4iLCJpbXBvcnQgeyBDb2xvclRyYW5zZm9ybSB9IGZyb20gJ0BqZW5nL2dlb20nO1xuZXhwb3J0IHZhciBDYW52YXNQYXR0ZXJucztcbihmdW5jdGlvbiAoQ2FudmFzUGF0dGVybnMpIHtcbiAgICBmdW5jdGlvbiBjb2xvclBhdHRlcm4oY29sb3IsIGFscGhhLCBjdCkge1xuICAgICAgICBsZXQgciA9IGNvbG9yID4+IDE2ICYgMHhmZjtcbiAgICAgICAgbGV0IGcgPSBjb2xvciA+PiA4ICYgMHhmZjtcbiAgICAgICAgbGV0IGIgPSBjb2xvciAmIDB4ZmY7XG4gICAgICAgIGxldCBhID0gYWxwaGEgKiAweGZmO1xuICAgICAgICBpZiAoIUNvbG9yVHJhbnNmb3JtLmlzRW1wdHkoY3QpKSB7XG4gICAgICAgICAgICByID0gKHIgKiBjdC5yZWRNdWx0aXBsaWVyICsgY3QucmVkT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBnID0gKGcgKiBjdC5ncmVlbk11bHRpcGxpZXIgKyBjdC5ncmVlbk9mZnNldCkgJiAweGZmO1xuICAgICAgICAgICAgYiA9IChiICogY3QuYmx1ZU11bHRpcGxpZXIgKyBjdC5ibHVlT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBhID0gKGEgKiBjdC5hbHBoYU11bHRpcGxpZXIgKyBjdC5hbHBoYU9mZnNldCkgJiAweGZmO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhIDwgMHhmZikge1xuICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YSAvIDB4ZmZ9KWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4gPSBjb2xvclBhdHRlcm47XG4gICAgZnVuY3Rpb24gYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JzW2ldO1xuICAgICAgICAgICAgY29uc3QgYWxwaGEgPSBhbHBoYXNbaV07XG4gICAgICAgICAgICBsZXQgcmF0aW8gPSByYXRpb3NbaV07XG4gICAgICAgICAgICBpZiAocmF0aW8gPCAwKVxuICAgICAgICAgICAgICAgIHJhdGlvID0gMDtcbiAgICAgICAgICAgIGlmIChyYXRpbyA+IDEpXG4gICAgICAgICAgICAgICAgcmF0aW8gPSAxO1xuICAgICAgICAgICAgY29uc3QgY29sb3JTdHlsZSA9IGNvbG9yUGF0dGVybihjb2xvciwgYWxwaGEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIHBhdHRlcm4uYWRkQ29sb3JTdG9wKHJhdGlvLCBjb2xvclN0eWxlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5hZGRHcmFkaWVudENvbG9ycyA9IGFkZEdyYWRpZW50Q29sb3JzO1xuICAgIGZ1bmN0aW9uIHJhZGlhbEdyYWRpZW50UGF0dGVybihiZWdpblgsIGJlZ2luWSwgYmVnaW5SYWRpdXMsIGVuZFgsIGVuZFksIGVuZFJhZGl1cywgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoYmVnaW5YLCBiZWdpblksIGJlZ2luUmFkaXVzLCBlbmRYLCBlbmRZLCBlbmRSYWRpdXMpO1xuICAgICAgICBhZGRHcmFkaWVudENvbG9ycyhwYXR0ZXJuLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5yYWRpYWxHcmFkaWVudFBhdHRlcm4gPSByYWRpYWxHcmFkaWVudFBhdHRlcm47XG4gICAgZnVuY3Rpb24gbGluZWFyR3JhZGllbnRQYXR0ZXJuKGJlZ2luWCwgYmVnaW5ZLCBlbmRYLCBlbmRZLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVMaW5lYXJHcmFkaWVudChiZWdpblgsIGJlZ2luWSwgZW5kWCwgZW5kWSk7XG4gICAgICAgIGFkZEdyYWRpZW50Q29sb3JzKHBhdHRlcm4sIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmxpbmVhckdyYWRpZW50UGF0dGVybiA9IGxpbmVhckdyYWRpZW50UGF0dGVybjtcbiAgICBmdW5jdGlvbiBiaXRtYXBQYXR0ZXJuKGltYWdlLCByZXBlYXQsIG1hdHJpeCwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVQYXR0ZXJuKGltYWdlLCByZXBlYXQgPyAncmVwZWF0JyA6ICdub25lJyk7XG4gICAgICAgIGlmIChwYXR0ZXJuKSB7XG4gICAgICAgICAgICBjb25zdCBkb21NYXRyaXggPSBuZXcgRE9NTWF0cml4KCk7XG4gICAgICAgICAgICBkb21NYXRyaXguYSA9IG1hdHJpeC5hID8/IDE7XG4gICAgICAgICAgICBkb21NYXRyaXguYiA9IG1hdHJpeC5iID8/IDA7XG4gICAgICAgICAgICBkb21NYXRyaXguYyA9IG1hdHJpeC5jID8/IDA7XG4gICAgICAgICAgICBkb21NYXRyaXguZCA9IG1hdHJpeC5kID8/IDE7XG4gICAgICAgICAgICBkb21NYXRyaXguZSA9IG1hdHJpeC50eCA/PyAwO1xuICAgICAgICAgICAgZG9tTWF0cml4LmYgPSBtYXRyaXgudHkgPz8gMDtcbiAgICAgICAgICAgIHBhdHRlcm4uc2V0VHJhbnNmb3JtKGRvbU1hdHJpeCk7XG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmJpdG1hcFBhdHRlcm4gPSBiaXRtYXBQYXR0ZXJuO1xufSkoQ2FudmFzUGF0dGVybnMgfHwgKENhbnZhc1BhdHRlcm5zID0ge30pKTtcbiIsImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGplbmcvY29yZSc7XG5leHBvcnQgY2xhc3MgQ2FudmFzUGxhdGZvcm0gZXh0ZW5kcyBQbGF0Zm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW3RoaXMudmlldy5nZXRDb250ZXh0KCcyZCcpXTtcbiAgICAgICAgdGhpcy5jdXN0b21Db250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0c1t0aGlzLmNvbnRleHRzLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgICBzYXZlQ29udGV4dChjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dHMucHVzaChjb250ZXh0KTtcbiAgICB9XG4gICAgcmVzdG9yZUNvbnRleHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdUcnlpbmcgdG8gcmVzdG9yZSBtYWluIGNvbnRleHQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVDdXN0b21Db250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dDtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tQ29udGV4dHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gdGhpcy5jdXN0b21Db250ZXh0cy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy52aWV3O1xuICAgICAgICBpZiAoY29udGV4dC5jYW52YXMud2lkdGggIT09IHdpZHRoKSB7XG4gICAgICAgICAgICBjb250ZXh0LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZXh0LmNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgICAgICAgY29udGV4dC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICBkZXN0cm95Q3VzdG9tQ29udGV4dChjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY3VzdG9tQ29udGV4dHMucHVzaChjb250ZXh0KTtcbiAgICB9XG4gICAgYmVnaW4oKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdmlldy53aWR0aCwgdmlldy5oZWlnaHQpO1xuICAgIH1cbiAgICB1cGRhdGVTaXplKCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRXaWR0aCgpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0SGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW8gPSB0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0UGl4ZWxSYXRpbygpO1xuICAgICAgICBjb25zdCB2aWV3V2lkdGggPSBNYXRoLmZsb29yKHdpZHRoICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHZpZXdIZWlnaHQgPSBNYXRoLmZsb29yKGhlaWdodCAqIHBpeGVsUmF0aW8pO1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IHRoaXM7XG4gICAgICAgIGlmICh2aWV3LndpZHRoICE9PSB2aWV3V2lkdGggfHwgdmlldy5oZWlnaHQgIT09IHZpZXdIZWlnaHQpIHtcbiAgICAgICAgICAgIHZpZXcud2lkdGggPSB2aWV3V2lkdGg7XG4gICAgICAgICAgICB2aWV3LmhlaWdodCA9IHZpZXdIZWlnaHQ7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IENPTlRBSU5FUiA9ICdjb250YWluZXInO1xuZXhwb3J0IHZhciBDb250YWluZXI7XG4oZnVuY3Rpb24gKENvbnRhaW5lcikge1xuICAgIGZ1bmN0aW9uIG51bUNoaWxkcmVuKGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgcmV0dXJuIGtleXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBDb250YWluZXIubnVtQ2hpbGRyZW4gPSBudW1DaGlsZHJlbjtcbn0pKENvbnRhaW5lciB8fCAoQ29udGFpbmVyID0ge30pKTtcbmV4cG9ydCB2YXIgQ29udGFpbmVyRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDb250YWluZXJFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHJlbmRlcmVyIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJlci5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyB1cGRhdGVyIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgdXBkYXRlci5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlci5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi51cGRhdGUgPSB1cGRhdGU7XG4gICAgZnVuY3Rpb24gaGl0VGVzdChjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgcG9pbnRlcnM6IHBvaW50ZXJFdmVudHMgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcG9pbnRlckV2ZW50cy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzLmRlcHRoKys7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2ludGVyRXZlbnRzLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCwgcmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnRlckV2ZW50cy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQsIHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBrZXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2ludGVyRXZlbnRzLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCwgcmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHMuZGVwdGgtLTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBsb2FkaW5nIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgbG9hZGluZy5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gbG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzICs9IGNvbXBvbmVudENvbnRleHQucHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudENvbnRleHQubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzIC89IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBsb2FkaW5nLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGNvbXBvbmVudENvbnRleHQubG9hZGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgKz0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50Q29udGV4dC5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgLz0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvYWRpbmcuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5zZXQoQ09OVEFJTkVSLCB1cGRhdGUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KENPTlRBSU5FUiwgcmVuZGVyKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoQ09OVEFJTkVSLCBoaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChDT05UQUlORVIsIGxvYWRlZCk7XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENvbnRhaW5lckV4dGVuc2lvbiB8fCAoQ29udGFpbmVyRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IENvbnRhaW5lckV4dGVuc2lvbiB9IGZyb20gJy4vY29udGFpbmVyJztcbmV4cG9ydCBjb25zdCBMT0FERVIgPSAnbG9hZGVyJztcbmV4cG9ydCB2YXIgTG9hZGVyO1xuKGZ1bmN0aW9uIChMb2FkZXIpIHtcbiAgICBmdW5jdGlvbiBnZXRMb2FkaW5nUHJvZ3Jlc3MobG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZGluZ1Byb2dyZXNzID8/IDA7XG4gICAgfVxuICAgIExvYWRlci5nZXRMb2FkaW5nUHJvZ3Jlc3MgPSBnZXRMb2FkaW5nUHJvZ3Jlc3M7XG4gICAgZnVuY3Rpb24gaXNMb2FkZWQobG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZGVkID8/IGZhbHNlO1xuICAgIH1cbiAgICBMb2FkZXIuaXNMb2FkZWQgPSBpc0xvYWRlZDtcbiAgICBmdW5jdGlvbiBuZWVkTG9hZGluZ0NoZWNrKGxvYWRlcikge1xuICAgICAgICByZXR1cm4gbG9hZGVyLmxvYWRpbmdDaGVjayA/PyB0cnVlO1xuICAgIH1cbiAgICBMb2FkZXIubmVlZExvYWRpbmdDaGVjayA9IG5lZWRMb2FkaW5nQ2hlY2s7XG59KShMb2FkZXIgfHwgKExvYWRlciA9IHt9KSk7XG5leHBvcnQgdmFyIExvYWRlckV4dGVuc2lvbjtcbihmdW5jdGlvbiAoTG9hZGVyRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGxvYWRlciwgZW5naW5lKSB7XG4gICAgICAgIGlmICghTG9hZGVyLm5lZWRMb2FkaW5nQ2hlY2sobG9hZGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIENvbnRhaW5lckV4dGVuc2lvbi5sb2FkZWQobG9hZGVyLCBlbmdpbmUpO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLmxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICBsb2FkZXIubG9hZGluZ1Byb2dyZXNzID0gY29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgaWYgKGNvbnRleHQubG9hZGVkICYmICFsb2FkZXIubG9hZGVkKSB7XG4gICAgICAgICAgICBsb2FkZXIubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChsb2FkZXIub25Mb2FkZWQpIHtcbiAgICAgICAgICAgICAgICBsb2FkZXIub25Mb2FkZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBMb2FkZXJFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5zZXQoTE9BREVSLCBDb250YWluZXJFeHRlbnNpb24udXBkYXRlKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChMT0FERVIsIENvbnRhaW5lckV4dGVuc2lvbi5yZW5kZXIpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChMT0FERVIsIENvbnRhaW5lckV4dGVuc2lvbi5oaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChMT0FERVIsIGxvYWRlZCk7XG4gICAgfVxuICAgIExvYWRlckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKExvYWRlckV4dGVuc2lvbiB8fCAoTG9hZGVyRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vZmVhdHVyZXMvcmVuZGVyZXInO1xuaW1wb3J0IHsgVXBkYXRlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3VwZGF0ZXInO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4uL2ZlYXR1cmVzL2xvYWRpbmcnO1xuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi4vZmVhdHVyZXMvc2NyZWVuJztcbmltcG9ydCB7IFBvaW50ZXJzIH0gZnJvbSAnLi4vZmVhdHVyZXMvcG9pbnRlcnMnO1xuaW1wb3J0IHsgVGlja2VyIH0gZnJvbSAnLi4vZmVhdHVyZXMvdGlja2VyJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vZmVhdHVyZXMvcGxhdGZvcm0nO1xuaW1wb3J0IHsgQ29udGFpbmVyRXh0ZW5zaW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IHsgRGVidWcgfSBmcm9tICcuLi9mZWF0dXJlcy9kZWJ1Zyc7XG5pbXBvcnQgeyBSZXNvdXJjZXMgfSBmcm9tICcuLi9mZWF0dXJlcy9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4uL2ZlYXR1cmVzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkZXInO1xuZXhwb3J0IGNsYXNzIEVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IobW9kdWxlID0ge30pIHtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDMyO1xuICAgICAgICBtb2R1bGUuQ29tcG9uZW50cyA9IG1vZHVsZS5Db21wb25lbnRzID8/IENvbXBvbmVudHM7XG4gICAgICAgIG1vZHVsZS5TY3JlZW4gPSBtb2R1bGUuU2NyZWVuID8/IFNjcmVlbjtcbiAgICAgICAgbW9kdWxlLlBsYXRmb3JtID0gbW9kdWxlLlBsYXRmb3JtID8/IFBsYXRmb3JtO1xuICAgICAgICBtb2R1bGUuVXBkYXRlciA9IG1vZHVsZS5VcGRhdGVyID8/IFVwZGF0ZXI7XG4gICAgICAgIG1vZHVsZS5Mb2FkaW5nID0gbW9kdWxlLkxvYWRpbmcgPz8gTG9hZGluZztcbiAgICAgICAgbW9kdWxlLlJlbmRlcmVyID0gbW9kdWxlLlJlbmRlcmVyID8/IFJlbmRlcmVyO1xuICAgICAgICBtb2R1bGUuUG9pbnRlcnMgPSBtb2R1bGUuUG9pbnRlcnMgPz8gUG9pbnRlcnM7XG4gICAgICAgIG1vZHVsZS5UaWNrZXIgPSBtb2R1bGUuVGlja2VyID8/IFRpY2tlcjtcbiAgICAgICAgbW9kdWxlLkRlYnVnID0gbW9kdWxlLkRlYnVnID8/IERlYnVnO1xuICAgICAgICBtb2R1bGUuUmVzb3VyY2VzID0gbW9kdWxlLlJlc291cmNlcyA/PyBSZXNvdXJjZXM7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBtb2R1bGUuQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBtb2R1bGUuU2NyZWVuKCk7XG4gICAgICAgIHRoaXMucGxhdGZvcm0gPSBuZXcgbW9kdWxlLlBsYXRmb3JtKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZXIgPSBuZXcgbW9kdWxlLlVwZGF0ZXIodGhpcyk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IG5ldyBtb2R1bGUuTG9hZGluZyh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBtb2R1bGUuUmVuZGVyZXIodGhpcyk7XG4gICAgICAgIHRoaXMucG9pbnRlcnMgPSBuZXcgbW9kdWxlLlBvaW50ZXJzKHRoaXMpO1xuICAgICAgICB0aGlzLnRpY2tlciA9IG5ldyBtb2R1bGUuVGlja2VyKHRoaXMpO1xuICAgICAgICB0aGlzLmRlYnVnID0gbmV3IG1vZHVsZS5EZWJ1ZygpO1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IG5ldyBtb2R1bGUuUmVzb3VyY2VzKHRoaXMpO1xuICAgICAgICBDb250YWluZXJFeHRlbnNpb24uaW5pdCh0aGlzKTtcbiAgICAgICAgTG9hZGVyRXh0ZW5zaW9uLmluaXQodGhpcyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB9XG59XG4iLCJleHBvcnQgdmFyIERpc3BsYXk7XG4oZnVuY3Rpb24gKERpc3BsYXkpIHtcbiAgICBmdW5jdGlvbiBpc1Zpc2libGUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQudmlzaWJsZSA/PyB0cnVlO1xuICAgIH1cbiAgICBEaXNwbGF5LmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbn0pKERpc3BsYXkgfHwgKERpc3BsYXkgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBQaXZvdDtcbihmdW5jdGlvbiAoUGl2b3QpIHtcbiAgICBmdW5jdGlvbiBnZXRYKHBpdm90LCB3aWR0aCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WCB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFgpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RYICogd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFggPSBnZXRYO1xuICAgIGZ1bmN0aW9uIGdldFkocGl2b3QsIGhlaWdodCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WSB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFkpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RZICogaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBQaXZvdC5nZXRZID0gZ2V0WTtcbiAgICBmdW5jdGlvbiBoYXNWYWx1ZXMocGl2b3QpIHtcbiAgICAgICAgY29uc3QgeyBwaXZvdFgsIHBpdm90WSB9ID0gcGl2b3Q7XG4gICAgICAgIHJldHVybiAhIXBpdm90WCB8fCAhIXBpdm90WTtcbiAgICB9XG4gICAgUGl2b3QuaGFzVmFsdWVzID0gaGFzVmFsdWVzO1xufSkoUGl2b3QgfHwgKFBpdm90ID0ge30pKTtcbiIsImNvbnN0IGhhbmRsZXJzTWFwID0ge1xuICAgIHBvaW50ZXJEb3duOiAnb25Qb2ludGVyRG93bicsXG4gICAgcG9pbnRlclVwOiAnb25Qb2ludGVyVXAnLFxuICAgIHBvaW50ZXJNb3ZlOiAnb25Qb2ludGVyTW92ZScsXG4gICAgcG9pbnRlck92ZXI6ICdvblBvaW50ZXJPdmVyJyxcbiAgICBwb2ludGVyT3V0OiAnb25Qb2ludGVyT3V0Jyxcbn07XG5leHBvcnQgdmFyIFBvaW50ZXI7XG4oZnVuY3Rpb24gKFBvaW50ZXIpIHtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJPdmVyKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuICEhcG9pbnRlci5wb2ludGVyT3ZlcjtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJPdmVyID0gaXNQb2ludGVyT3ZlcjtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJFbmFibGVkKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50ZXIucG9pbnRlckVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkID0gaXNQb2ludGVyRW5hYmxlZDtcbiAgICBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KHBvaW50ZXIsIHR5cGUsIHgsIHksIGlkKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJOYW1lID0gaGFuZGxlcnNNYXBbdHlwZV07XG4gICAgICAgIGlmIChoYW5kbGVyTmFtZSAmJiBwb2ludGVyW2hhbmRsZXJOYW1lXSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZSwgeCwgeSwgaWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcG9pbnRlcltoYW5kbGVyTmFtZV0oZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG59KShQb2ludGVyIHx8IChQb2ludGVyID0ge30pKTtcbiIsImV4cG9ydCB2YXIgVHJhbnNmb3JtO1xuKGZ1bmN0aW9uIChUcmFuc2Zvcm0pIHtcbiAgICBmdW5jdGlvbiBnZXRNYXRyaXgodHJhbnNmb3JtLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKG1hdHJpeCkge1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBtYXRyaXguYSA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSBtYXRyaXguYiA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSBtYXRyaXguYyA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBtYXRyaXguZCA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gbWF0cml4LnR4ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQudHkgPSBtYXRyaXgudHkgPz8gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvdGF0aW9uIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHRyYW5zZm9ybS5zY2FsZVggPz8gdHJhbnNmb3JtLnNjYWxlID8/IDE7XG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IHRyYW5zZm9ybS5zY2FsZVkgPz8gdHJhbnNmb3JtLnNjYWxlID8/IDE7XG4gICAgICAgIHJlc3VsdC50eCA9IHRyYW5zZm9ybS54ID8/IDA7XG4gICAgICAgIHJlc3VsdC50eSA9IHRyYW5zZm9ybS55ID8/IDA7XG4gICAgICAgIGlmIChyb3RhdGlvbikge1xuICAgICAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3Mocm90YXRpb24pO1xuICAgICAgICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW4ocm90YXRpb24pO1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBjb3MgKiBzY2FsZVg7XG4gICAgICAgICAgICByZXN1bHQuYiA9IHNpbiAqIHNjYWxlWDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gLXNpbiAqIHNjYWxlWTtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gY29zICogc2NhbGVZO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hID0gc2NhbGVYO1xuICAgICAgICByZXN1bHQuYiA9IDA7XG4gICAgICAgIHJlc3VsdC5jID0gMDtcbiAgICAgICAgcmVzdWx0LmQgPSBzY2FsZVk7XG4gICAgfVxuICAgIFRyYW5zZm9ybS5nZXRNYXRyaXggPSBnZXRNYXRyaXg7XG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JUcmFuc2Zvcm0odHJhbnNmb3JtLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0ucmVkTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmFscGhhT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0ucmVkT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5ncmVlbk9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5ibHVlT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxwaGEgPSB0cmFuc2Zvcm0uYWxwaGEgPz8gMTtcbiAgICAgICAgY29uc3QgeyB0aW50IH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmICh0aW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IGNvbG9yID0gMCwgdmFsdWUgPSAxIH0gPSB0aW50O1xuICAgICAgICAgICAgY29uc3QgdmFsdWVJbnZlcnRlZCA9IDEgLSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHIgPSAoY29sb3IgPj4gMTYpICYgMHhmZjtcbiAgICAgICAgICAgIGNvbnN0IGcgPSAoY29sb3IgPj4gOCkgJiAweGZmO1xuICAgICAgICAgICAgY29uc3QgYiA9IGNvbG9yICYgMHhmZjtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYTtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gciAqIHZhbHVlO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gZyAqIHZhbHVlO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBiICogdmFsdWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHsgYnJpZ2h0bmVzcyB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAoYnJpZ2h0bmVzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoYnJpZ2h0bmVzcyA+IDEpIHtcbiAgICAgICAgICAgICAgICBicmlnaHRuZXNzID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGJyaWdodG5lc3MgPCAtMSkge1xuICAgICAgICAgICAgICAgIGJyaWdodG5lc3MgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSAxIC0gTWF0aC5hYnMoYnJpZ2h0bmVzcyk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIGlmIChicmlnaHRuZXNzID4gMCkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IGJyaWdodG5lc3MgKiAyNTU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGE7XG4gICAgICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHBlcmNlbnQ7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gcGVyY2VudDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IHBlcmNlbnQ7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYTtcbiAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSAxO1xuICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldENvbG9yVHJhbnNmb3JtID0gZ2V0Q29sb3JUcmFuc2Zvcm07XG59KShUcmFuc2Zvcm0gfHwgKFRyYW5zZm9ybSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFVwZGF0ZTtcbihmdW5jdGlvbiAoVXBkYXRlKSB7XG4gICAgZnVuY3Rpb24gaXNFbmFibGVkKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgVXBkYXRlLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29tcG9uZW50LCB0aW1lKSB7XG4gICAgICAgIGlmIChjb21wb25lbnQub25VcGRhdGUpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5vblVwZGF0ZSh0aW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBVcGRhdGUudXBkYXRlID0gdXBkYXRlO1xufSkoVXBkYXRlIHx8IChVcGRhdGUgPSB7fSkpO1xuIiwiZXhwb3J0IGNsYXNzIENvbXBvbmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVuZGVyID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5oaXRUZXN0ID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IG5ldyBNYXAoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRGVidWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy53YXJuaW5ncyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICB9XG4gICAgZXJyb3IoLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLmVycm9ycy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMuZXJyb3JzLnNldChpZCwgY291bnQpO1xuICAgIH1cbiAgICB3YXJuaW5nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy53YXJuaW5ncy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgdGhpcy53YXJuaW5ncy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChyb290KTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIH1cbiAgICBiZWdpbigpIHtcbiAgICB9XG4gICAgZW5kKCkge1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1hdHJpeCwgUG9pbnQgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuLi9leHRlbnNpb25zL2Rpc3BsYXknO1xuaW1wb3J0IHsgUG9pbnRlciB9IGZyb20gJy4uL2V4dGVuc2lvbnMvcG9pbnRlcic7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9leHRlbnNpb25zL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBQb2ludGVycyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nbG9iYWwgPSBQb2ludC5lbXB0eSgpO1xuICAgICAgICB0aGlzLmxvY2FsID0gUG9pbnQuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5wb2ludGVySWQgPSAwO1xuICAgICAgICB0aGlzLnBvaW50ZXJUeXBlID0gJ3BvaW50ZXJEb3duJztcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBtYXRyaXg6IE1hdHJpeC5lbXB0eSgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICBkaXNwYXRjaCh0eXBlLCB4LCB5LCBpZCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9jYWwueCA9IHg7XG4gICAgICAgIHRoaXMubG9jYWwueSA9IHk7XG4gICAgICAgIHRoaXMuZ2xvYmFsLnggPSB4O1xuICAgICAgICB0aGlzLmdsb2JhbC55ID0geTtcbiAgICAgICAgdGhpcy5wb2ludGVySWQgPSBpZDtcbiAgICAgICAgdGhpcy5wb2ludGVyVHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIE1hdHJpeC5zZXRFbXB0eShiYXNlLm1hdHJpeCk7XG4gICAgICAgIHRoaXMuZGVwdGgrKztcbiAgICAgICAgdGhpcy5kaXNwYXRjaENvbXBvbmVudChyb290LCBiYXNlLCBmYWxzZSk7XG4gICAgfVxuICAgIHVwZGF0ZUxvY2FsKGNvbXBvbmVudCwgcGFyZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgTWF0cml4LmNvbmNhdChwYXJlbnQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50KGNvbnRleHQubWF0cml4LCB0aGlzLmdsb2JhbCwgdGhpcy5sb2NhbCk7XG4gICAgfVxuICAgIGRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgcGFyZW50LCBwYXJlbnRSZXN1bHQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghRGlzcGxheS5pc1Zpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50UmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnBvaW50ZXJPdmVyICYmIHRoaXMucG9pbnRlclR5cGUgPT09ICdwb2ludGVyTW92ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxvY2FsKGNvbXBvbmVudCwgcGFyZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMubG9jYWw7XG4gICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdXQnLCB4LCB5LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnBvaW50ZXJPdmVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMb2NhbChjb21wb25lbnQsIHBhcmVudCk7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMubG9jYWw7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsIHRoaXMucG9pbnRlclR5cGUsIHgsIHksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJUeXBlID09PSAncG9pbnRlck1vdmUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiAhY29tcG9uZW50LnBvaW50ZXJPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3ZlcicsIHgsIHksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXJlc3VsdCAmJiBjb21wb25lbnQucG9pbnRlck92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdXQnLCB4LCB5LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wb2ludGVyT3ZlciA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXggfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuLi9leHRlbnNpb25zL2Rpc3BsYXknO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgUmVuZGVyZXIgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXTtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIG1hdHJpeDogTWF0cml4LmVtcHR5KCksXG4gICAgICAgICAgICAgICAgY29sb3JUcmFuc2Zvcm06IENvbG9yVHJhbnNmb3JtLmVtcHR5KCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXSA9IGNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFEaXNwbGF5LmlzVmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBUcmFuc2Zvcm0uZ2V0TWF0cml4KGNvbXBvbmVudCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICBUcmFuc2Zvcm0uZ2V0Q29sb3JUcmFuc2Zvcm0oY29tcG9uZW50LCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgTWF0cml4LmNvbmNhdChwYXJlbnQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICBDb2xvclRyYW5zZm9ybS5jb25jYXQocGFyZW50LmNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy5lbmdpbmUucGxhdGZvcm0uYmVnaW4oKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5kZXB0aCsrO1xuICAgICAgICBNYXRyaXguY29weSh0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0TWF0cml4KCksIGJhc2UubWF0cml4KTtcbiAgICAgICAgQ29sb3JUcmFuc2Zvcm0uc2V0RW1wdHkoYmFzZS5jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50KHJvb3QsIGJhc2UpO1xuICAgICAgICB0aGlzLmVuZ2luZS5wbGF0Zm9ybS5lbmQoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IHZhciBSZXNvdXJjZTtcbihmdW5jdGlvbiAoUmVzb3VyY2UpIHtcbiAgICBmdW5jdGlvbiBnZXRQcm9ncmVzcyhyZXNvdXJjZSkge1xuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzb3VyY2UubG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzb3VyY2UuYnl0ZXNUb3RhbCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvdXJjZS5ieXRlc0xvYWRlZCAvIHJlc291cmNlLmJ5dGVzVG90YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFJlc291cmNlLmdldFByb2dyZXNzID0gZ2V0UHJvZ3Jlc3M7XG59KShSZXNvdXJjZSB8fCAoUmVzb3VyY2UgPSB7fSkpO1xuZXhwb3J0IGNsYXNzIFJlc291cmNlcyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZXNvbHZlcnMgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIGdldChhc3NldCkge1xuICAgICAgICBpZiAoIWFzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzb3VyY2UgPSB0aGlzLnJlc291cmNlcy5nZXQoYXNzZXQpO1xuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICByZXNvdXJjZSA9IHRoaXMucmVzb2x2ZShhc3NldCk7XG4gICAgICAgICAgICB0aGlzLnJlc291cmNlcy5zZXQoYXNzZXQsIHJlc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgfVxuICAgIHJlc29sdmUoYXNzZXQpIHtcbiAgICAgICAgZm9yIChjb25zdCByZXNvbHZlciBvZiB0aGlzLnJlc29sdmVycykge1xuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSByZXNvbHZlcihhc3NldCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgaWYgKHJlc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5naW5lLmRlYnVnLndhcm5pbmcoYFJlc291cmNlIG5vdCByZXNvbHZlZDogJHthc3NldH1gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IDQwMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA0MDA7XG4gICAgICAgIHRoaXMucGl4ZWxSYXRpbyA9IDA7XG4gICAgICAgIHRoaXMuZnVsbHNjcmVlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1hdHJpeCA9IE1hdHJpeC5lbXB0eSgpO1xuICAgIH1cbiAgICBnZXRNYXRyaXgoKSB7XG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW8gPSB0aGlzLmdldFBpeGVsUmF0aW8oKTtcbiAgICAgICAgdGhpcy5tYXRyaXguYSA9IHBpeGVsUmF0aW87XG4gICAgICAgIHRoaXMubWF0cml4LmQgPSBwaXhlbFJhdGlvO1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gICAgfVxuICAgIGdldFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuID8gd2luZG93LmlubmVyV2lkdGggOiB0aGlzLndpZHRoO1xuICAgIH1cbiAgICBnZXRIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZ1bGxzY3JlZW4gPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB0aGlzLmhlaWdodDtcbiAgICB9XG4gICAgZ2V0UGl4ZWxSYXRpbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGl4ZWxSYXRpbyA+IDAgPyB0aGlzLnBpeGVsUmF0aW8gOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA/PyAxO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUaWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xuICAgICAgICB0aGlzLmZyYW1lUmF0ZSA9IDA7XG4gICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGUgPSAodGltZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbmdpbmUudXBkYXRlci51cGRhdGUodGltZSk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5sb2FkaW5nLnVwZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVuZGVyZXIucmVuZGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlRnJhbWUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gKGN1cnJlbnRUaW1lIC0gdGhpcy50aW1lKSAvIDEwMDA7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKGRlbHRhVGltZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU5leHRGcmFtZSgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB9XG4gICAgZ2V0IGlzUGF1c2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXVzZWQ7XG4gICAgfVxuICAgIHBsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOZXh0RnJhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdXBkYXRlTmV4dEZyYW1lKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVGcmFtZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVXBkYXRlIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy91cGRhdGUnO1xuaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgVXBkYXRlciBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChyb290KTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbiAgICB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVVwZGF0ZS5pc0VuYWJsZWQoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllcyhjb21wb25lbnQpO1xuICAgICAgICBVcGRhdGUudXBkYXRlKGNvbXBvbmVudCwgdGhpcy50aW1lKTtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVByb3BlcnRpZXMoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZW5naW5lLmNvbXBvbmVudHMucHJvcGVydGllcy5mb3JFYWNoKChoYW5kbGVyLCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudFtwcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2xvYWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvZW5naW5lJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvY29tcG9uZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL2RlYnVnJztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcGxhdGZvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9wb2ludGVycyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3JlbmRlcmVyJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcmVzb3VyY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvc2NyZWVuJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvdGlja2VyJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvdXBkYXRlcic7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyYWN0aXZlL21vdXNlJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9kaXNwbGF5JztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9waXZvdCc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvc291cmNlJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy90cmFuc2Zvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3VwZGF0ZSc7XG4iLCJmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsIHR5cGUpIHtcbiAgICBjb25zdCB7IHZpZXcgfSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICBjb25zdCBjbGllbnRSZWN0ID0gdmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIGNsaWVudFJlY3QubGVmdCAtIHZpZXcuY2xpZW50TGVmdDtcbiAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIGNsaWVudFJlY3QudG9wIC0gdmlldy5jbGllbnRUb3A7XG4gICAgZW5naW5lLnBvaW50ZXJzLmRpc3BhdGNoKHR5cGUsIHgsIHksIDApO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5leHBvcnQgdmFyIE1vdXNlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChNb3VzZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gZW5naW5lLnBsYXRmb3JtO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckRvd24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlclVwJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlck1vdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE1vdXNlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoTW91c2VFeHRlbnNpb24gfHwgKE1vdXNlRXh0ZW5zaW9uID0ge30pKTtcbiIsImV4cG9ydCB2YXIgQm91bmRzO1xuKGZ1bmN0aW9uIChCb3VuZHMpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1pblg6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtaW5ZOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWF4WDogTnVtYmVyLk1JTl9WQUxVRSxcbiAgICAgICAgICAgIG1heFk6IE51bWJlci5NSU5fVkFMVUUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIEJvdW5kcy5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KGJvdW5kcykge1xuICAgICAgICBib3VuZHMubWluWCA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGJvdW5kcy5taW5ZID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1heFggPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWF4WSA9IE51bWJlci5NSU5fVkFMVUU7XG4gICAgfVxuICAgIEJvdW5kcy5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkoYm91bmRzKSB7XG4gICAgICAgIHJldHVybiBib3VuZHMubWluWCA9PT0gTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1pblkgPT09IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5tYXhYID09PSBOdW1iZXIuTUlOX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWF4WSA9PT0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICB9XG4gICAgQm91bmRzLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIHRvUmVjdGFuZ2xlKGJvdW5kcywgcmVjdGFuZ2xlKSB7XG4gICAgICAgIGNvbnN0IHsgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgfSA9IGJvdW5kcztcbiAgICAgICAgcmVjdGFuZ2xlLnggPSBtaW5YO1xuICAgICAgICByZWN0YW5nbGUueSA9IG1pblk7XG4gICAgICAgIHJlY3RhbmdsZS53aWR0aCA9IG1heFggLSBtaW5YO1xuICAgICAgICByZWN0YW5nbGUuaGVpZ2h0ID0gbWF4WSAtIG1pblk7XG4gICAgfVxuICAgIEJvdW5kcy50b1JlY3RhbmdsZSA9IHRvUmVjdGFuZ2xlO1xuICAgIGZ1bmN0aW9uIHRlc3RYKGJvdW5kcywgeCkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RYID0gdGVzdFg7XG4gICAgZnVuY3Rpb24gdGVzdFkoYm91bmRzLCB5KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFkgPSB0ZXN0WTtcbiAgICBmdW5jdGlvbiB0ZXN0KGJvdW5kcywgeCwgeSkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0ID0gdGVzdDtcbiAgICBmdW5jdGlvbiB0ZXN0UG9pbnQoYm91bmRzLCBwb2ludCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0UG9pbnQgPSB0ZXN0UG9pbnQ7XG59KShCb3VuZHMgfHwgKEJvdW5kcyA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIENvbG9yVHJhbnNmb3JtO1xuKGZ1bmN0aW9uIChDb2xvclRyYW5zZm9ybSkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxwaGFNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgcmVkTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGdyZWVuTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGJsdWVNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYWxwaGFPZmZzZXQ6IDAsXG4gICAgICAgICAgICByZWRPZmZzZXQ6IDAsXG4gICAgICAgICAgICBncmVlbk9mZnNldDogMCxcbiAgICAgICAgICAgIGJsdWVPZmZzZXQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShjdCkge1xuICAgICAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5NdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ibHVlTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYWxwaGFNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5yZWRPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmdyZWVuT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ibHVlT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU9mZnNldCA9PT0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eVdpdGhBbHBoYShjdCkge1xuICAgICAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5NdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ibHVlTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYmx1ZU9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmlzRW1wdHlXaXRoQWxwaGEgPSBpc0VtcHR5V2l0aEFscGhhO1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KGN0KSB7XG4gICAgICAgIGN0LnJlZE11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5ncmVlbk11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5ibHVlTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LmFscGhhTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LnJlZE9mZnNldCA9IDA7XG4gICAgICAgIGN0LmdyZWVuT2Zmc2V0ID0gMDtcbiAgICAgICAgY3QuYmx1ZU9mZnNldCA9IDA7XG4gICAgICAgIGN0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KGZyb20sIHRvKSB7XG4gICAgICAgIHRvLmFscGhhTXVsdGlwbGllciA9IGZyb20uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICB0by5yZWRNdWx0aXBsaWVyID0gZnJvbS5yZWRNdWx0aXBsaWVyO1xuICAgICAgICB0by5ncmVlbk11bHRpcGxpZXIgPSBmcm9tLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgdG8uYmx1ZU11bHRpcGxpZXIgPSBmcm9tLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICB0by5hbHBoYU9mZnNldCA9IGZyb20uYWxwaGFPZmZzZXQ7XG4gICAgICAgIHRvLnJlZE9mZnNldCA9IGZyb20ucmVkT2Zmc2V0O1xuICAgICAgICB0by5ncmVlbk9mZnNldCA9IGZyb20uZ3JlZW5PZmZzZXQ7XG4gICAgICAgIHRvLmJsdWVPZmZzZXQgPSBmcm9tLmJsdWVPZmZzZXQ7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIGNvbmNhdChjdDEsIGN0MCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGFscGhhTXVsdGlwbGllciA9IGN0MS5hbHBoYU11bHRpcGxpZXIgKiBjdDAuYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCByZWRNdWx0aXBsaWVyID0gY3QxLnJlZE11bHRpcGxpZXIgKiBjdDAucmVkTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgZ3JlZW5NdWx0aXBsaWVyID0gY3QxLmdyZWVuTXVsdGlwbGllciAqIGN0MC5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGJsdWVNdWx0aXBsaWVyID0gY3QxLmJsdWVNdWx0aXBsaWVyICogY3QwLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBhbHBoYU9mZnNldCA9IGN0MS5hbHBoYU11bHRpcGxpZXIgKiBjdDAuYWxwaGFPZmZzZXQgKyBjdDEuYWxwaGFPZmZzZXQ7XG4gICAgICAgIGNvbnN0IHJlZE9mZnNldCA9IGN0MS5yZWRNdWx0aXBsaWVyICogY3QwLnJlZE9mZnNldCArIGN0MS5yZWRPZmZzZXQ7XG4gICAgICAgIGNvbnN0IGdyZWVuT2Zmc2V0ID0gY3QxLmdyZWVuTXVsdGlwbGllciAqIGN0MC5ncmVlbk9mZnNldCArIGN0MS5ncmVlbk9mZnNldDtcbiAgICAgICAgY29uc3QgYmx1ZU9mZnNldCA9IGN0MS5ibHVlTXVsdGlwbGllciAqIGN0MC5ibHVlT2Zmc2V0ICsgY3QxLmJsdWVPZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gcmVkTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IGdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IGFscGhhT2Zmc2V0O1xuICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gcmVkT2Zmc2V0O1xuICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBncmVlbk9mZnNldDtcbiAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBibHVlT2Zmc2V0O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5jb25jYXQgPSBjb25jYXQ7XG59KShDb2xvclRyYW5zZm9ybSB8fCAoQ29sb3JUcmFuc2Zvcm0gPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9jb2xvci10cmFuc2Zvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9ib3VuZHMnO1xuZXhwb3J0ICogZnJvbSAnLi9tYXRyaXgnO1xuZXhwb3J0ICogZnJvbSAnLi9wb2ludCc7XG5leHBvcnQgKiBmcm9tICcuL3JlY3RhbmdsZSc7XG4iLCJleHBvcnQgdmFyIE1hdHJpeDtcbihmdW5jdGlvbiAoTWF0cml4KSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiAxLFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGM6IDAsXG4gICAgICAgICAgICBkOiAxLFxuICAgICAgICAgICAgdHg6IDAsXG4gICAgICAgICAgICB0eTogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTWF0cml4LmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShtYXRyaXgpIHtcbiAgICAgICAgcmV0dXJuIG1hdHJpeC5hID09PSAxXG4gICAgICAgICAgICAmJiBtYXRyaXguYiA9PT0gMFxuICAgICAgICAgICAgJiYgbWF0cml4LmMgPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC5kID09PSAxXG4gICAgICAgICAgICAmJiBtYXRyaXgudHggPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC50eSA9PT0gMDtcbiAgICB9XG4gICAgTWF0cml4LmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KG1hdHJpeCkge1xuICAgICAgICBtYXRyaXguYSA9IDE7XG4gICAgICAgIG1hdHJpeC5iID0gMDtcbiAgICAgICAgbWF0cml4LmMgPSAwO1xuICAgICAgICBtYXRyaXguZCA9IDE7XG4gICAgICAgIG1hdHJpeC50eCA9IDA7XG4gICAgICAgIG1hdHJpeC50eSA9IDA7XG4gICAgfVxuICAgIE1hdHJpeC5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoZnJvbSwgdG8pIHtcbiAgICAgICAgdG8uYSA9IGZyb20uYTtcbiAgICAgICAgdG8uYiA9IGZyb20uYjtcbiAgICAgICAgdG8uYyA9IGZyb20uYztcbiAgICAgICAgdG8uZCA9IGZyb20uZDtcbiAgICAgICAgdG8udHggPSBmcm9tLnR4O1xuICAgICAgICB0by50eSA9IGZyb20udHk7XG4gICAgfVxuICAgIE1hdHJpeC5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBjb25jYXQobWF0cml4MCwgbWF0cml4MSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGEgPSBtYXRyaXgxLmEgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmM7XG4gICAgICAgIGNvbnN0IGIgPSBtYXRyaXgxLmEgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmQ7XG4gICAgICAgIGNvbnN0IGMgPSBtYXRyaXgxLmMgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmM7XG4gICAgICAgIGNvbnN0IGQgPSBtYXRyaXgxLmMgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmQ7XG4gICAgICAgIGNvbnN0IHR4ID0gbWF0cml4MS50eCAqIG1hdHJpeDAuYSArIG1hdHJpeDEudHkgKiBtYXRyaXgwLmMgKyBtYXRyaXgwLnR4O1xuICAgICAgICBjb25zdCB0eSA9IG1hdHJpeDEudHggKiBtYXRyaXgwLmIgKyBtYXRyaXgxLnR5ICogbWF0cml4MC5kICsgbWF0cml4MC50eTtcbiAgICAgICAgcmVzdWx0LmEgPSBhO1xuICAgICAgICByZXN1bHQuYiA9IGI7XG4gICAgICAgIHJlc3VsdC5jID0gYztcbiAgICAgICAgcmVzdWx0LmQgPSBkO1xuICAgICAgICByZXN1bHQudHggPSB0eDtcbiAgICAgICAgcmVzdWx0LnR5ID0gdHk7XG4gICAgfVxuICAgIE1hdHJpeC5jb25jYXQgPSBjb25jYXQ7XG4gICAgZnVuY3Rpb24gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KSB7XG4gICAgICAgIHJldHVybiBtYXRyaXguYSAqIG1hdHJpeC5kIC0gbWF0cml4LmIgKiBtYXRyaXguYztcbiAgICB9XG4gICAgTWF0cml4LmdldERldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQ7XG4gICAgZnVuY3Rpb24gaW52ZXJ0KG1hdHJpeCwgcmVzdWx0KSB7XG4gICAgICAgIGxldCBkZXRlcm1pbmFudCA9IGdldERldGVybWluYW50KG1hdHJpeCk7XG4gICAgICAgIGlmIChkZXRlcm1pbmFudCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0LmEgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gLW1hdHJpeC50eDtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IC1tYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCA9IDEuMCAvIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBtYXRyaXguYSAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmIgPSAtbWF0cml4LmIgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gLW1hdHJpeC5jICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuZCA9IG1hdHJpeC5kICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQudHggPSAtcmVzdWx0LmEgKiBtYXRyaXgudHggLSByZXN1bHQuYyAqIG1hdHJpeC50eTtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IC1yZXN1bHQuYiAqIG1hdHJpeC50eCAtIHJlc3VsdC5kICogbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hdHJpeC5pbnZlcnQgPSBpbnZlcnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJlc3VsdC54ID0geCAqIG1hdHJpeC5hICsgeSAqIG1hdHJpeC5jICsgbWF0cml4LnR4O1xuICAgICAgICByZXN1bHQueSA9IHggKiBtYXRyaXguYiArIHkgKiBtYXRyaXguZCArIG1hdHJpeC50eTtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybVBvaW50ID0gdHJhbnNmb3JtUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnRMb2NhbChtYXRyaXgsIHBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmVzdWx0LnggPSB4ICogbWF0cml4LmEgKyB5ICogbWF0cml4LmM7XG4gICAgICAgIHJlc3VsdC55ID0geCAqIG1hdHJpeC5iICsgeSAqIG1hdHJpeC5kO1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnRMb2NhbCA9IHRyYW5zZm9ybVBvaW50TG9jYWw7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtSW52ZXJzZVBvaW50KG1hdHJpeCwgcG9pbnQsIHJlc3VsdCkge1xuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudChtYXRyaXgpO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC54ID0gLW1hdHJpeC50eDtcbiAgICAgICAgICAgIHJlc3VsdC55ID0gLW1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRldGVybWluYW50ID0gMSAvIGRldGVybWluYW50O1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgICAgIHJlc3VsdC54ID0gZGV0ZXJtaW5hbnQgKiAobWF0cml4LmMgKiAobWF0cml4LnR5IC0geSkgKyBtYXRyaXguZCAqICh4IC0gbWF0cml4LnR4KSk7XG4gICAgICAgICAgICByZXN1bHQueSA9IGRldGVybWluYW50ICogKG1hdHJpeC5hICogKHkgLSBtYXRyaXgudHkpICsgbWF0cml4LmIgKiAobWF0cml4LnR4IC0geCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1JbnZlcnNlUG9pbnQgPSB0cmFuc2Zvcm1JbnZlcnNlUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtQm91bmRzKG1hdHJpeCwgYm91bmRzLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBhLCBiLCBjLCBkLCB0eCwgdHksIH0gPSBtYXRyaXg7XG4gICAgICAgIGNvbnN0IHJ4ID0gYm91bmRzLng7XG4gICAgICAgIGNvbnN0IHJ5ID0gYm91bmRzLnk7XG4gICAgICAgIGNvbnN0IHJyID0gcnggKyBib3VuZHMud2lkdGg7XG4gICAgICAgIGNvbnN0IHJiID0gcnkgKyBib3VuZHMuaGVpZ2h0O1xuICAgICAgICBjb25zdCBueDEgPSByeCAqIGEgKyByeSAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkxID0gcnggKiBiICsgcnkgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54MiA9IHJyICogYSArIHJ5ICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTIgPSByciAqIGIgKyByeSAqIGQgKyB0eTtcbiAgICAgICAgY29uc3QgbngzID0gcnIgKiBhICsgcmIgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MyA9IHJyICogYiArIHJiICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDQgPSByeCAqIGEgKyByYiAqIGMgKyB0eDtcbiAgICAgICAgY29uc3Qgbnk0ID0gcnggKiBiICsgcmIgKiBkICsgdHk7XG4gICAgICAgIGxldCBsZWZ0ID0gbngxO1xuICAgICAgICBpZiAobGVmdCA+IG54Mikge1xuICAgICAgICAgICAgbGVmdCA9IG54MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54Mykge1xuICAgICAgICAgICAgbGVmdCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54NCkge1xuICAgICAgICAgICAgbGVmdCA9IG54NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9wID0gbnkxO1xuICAgICAgICBpZiAodG9wID4gbnkyKSB7XG4gICAgICAgICAgICB0b3AgPSBueTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcCA+IG55Mykge1xuICAgICAgICAgICAgdG9wID0gbnkzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3AgPiBueTQpIHtcbiAgICAgICAgICAgIHRvcCA9IG55NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmlnaHQgPSBueDE7XG4gICAgICAgIGlmIChyaWdodCA8IG54Mikge1xuICAgICAgICAgICAgcmlnaHQgPSBueDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0IDwgbngzKSB7XG4gICAgICAgICAgICByaWdodCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgPCBueDQpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbng0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBib3R0b20gPSBueTE7XG4gICAgICAgIGlmIChib3R0b20gPCBueTIpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tIDwgbnkzKSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdHRvbSA8IG55NCkge1xuICAgICAgICAgICAgYm90dG9tID0gbnk0O1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC54ID0gbGVmdDtcbiAgICAgICAgcmVzdWx0LnkgPSB0b3A7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGJvdHRvbSAtIHRvcDtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybUJvdW5kcyA9IHRyYW5zZm9ybUJvdW5kcztcbn0pKE1hdHJpeCB8fCAoTWF0cml4ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUG9pbnQ7XG4oZnVuY3Rpb24gKFBvaW50KSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG4gICAgUG9pbnQuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBsZW5ndGgocG9pbnQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9XG4gICAgUG9pbnQubGVuZ3RoID0gbGVuZ3RoO1xuICAgIGZ1bmN0aW9uIGFuZ2xlKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHBvaW50LnksIHBvaW50LngpO1xuICAgIH1cbiAgICBQb2ludC5hbmdsZSA9IGFuZ2xlO1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMDtcbiAgICB9XG4gICAgUG9pbnQuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gZXF1YWxzKHBvaW50MCwgcG9pbnQxKSB7XG4gICAgICAgIHJldHVybiBwb2ludDAueCA9PT0gcG9pbnQxLnggJiYgcG9pbnQwLnkgPT09IHBvaW50MS55O1xuICAgIH1cbiAgICBQb2ludC5lcXVhbHMgPSBlcXVhbHM7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkocG9pbnQpIHtcbiAgICAgICAgcG9pbnQueCA9IDA7XG4gICAgICAgIHBvaW50LnkgPSAwO1xuICAgIH1cbiAgICBQb2ludC5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LnggPSBzb3VyY2UueDtcbiAgICAgICAgdGFyZ2V0LnkgPSBzb3VyY2UueTtcbiAgICB9XG4gICAgUG9pbnQuY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gbm9ybWFsaXplKHBvaW50LCB0aGlja25lc3MpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gbGVuZ3RoKHBvaW50KTtcbiAgICAgICAgaWYgKHZhbHVlID4gMCkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlja25lc3MgLyB2YWx1ZTtcbiAgICAgICAgICAgIHBvaW50LnggKj0gdmFsdWU7XG4gICAgICAgICAgICBwb2ludC55ICo9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBvaW50Lm5vcm1hbGl6ZSA9IG5vcm1hbGl6ZTtcbiAgICBmdW5jdGlvbiBkaXN0YW5jZShwb2ludDAsIHBvaW50MSkge1xuICAgICAgICBjb25zdCBkeCA9IHBvaW50MC54IC0gcG9pbnQxLng7XG4gICAgICAgIGNvbnN0IGR5ID0gcG9pbnQwLnkgLSBwb2ludDEueTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuICAgIFBvaW50LmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgZnVuY3Rpb24gaW50ZXJwb2xhdGUoYmVnaW4sIGVuZCwgdmFsdWUsIHJlc3VsdCkge1xuICAgICAgICByZXN1bHQueCA9IGJlZ2luLnggKyB2YWx1ZSAqIChlbmQueCAtIGJlZ2luLngpO1xuICAgICAgICByZXN1bHQueSA9IGJlZ2luLnkgKyB2YWx1ZSAqIChlbmQueSAtIGJlZ2luLnkpO1xuICAgIH1cbiAgICBQb2ludC5pbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlO1xuICAgIGZ1bmN0aW9uIHBvbGFyKHBvaW50LCBsZW5ndGgsIGFuZ2xlKSB7XG4gICAgICAgIHBvaW50LnggPSBsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIHBvaW50LnkgPSBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgfVxuICAgIFBvaW50LnBvbGFyID0gcG9sYXI7XG59KShQb2ludCB8fCAoUG9pbnQgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBSZWN0YW5nbGU7XG4oZnVuY3Rpb24gKFJlY3RhbmdsZSkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJlY3RhbmdsZS54ID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLnkgPSAwO1xuICAgICAgICByZWN0YW5nbGUud2lkdGggPSAwO1xuICAgICAgICByZWN0YW5nbGUuaGVpZ2h0ID0gMDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gaW50ZXJzZWN0aW9uKHNvdXJjZSwgdGFyZ2V0LCByZXN1bHQpIHtcbiAgICAgICAgbGV0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCwgfSA9IHNvdXJjZTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRhcmdldC54O1xuICAgICAgICBjb25zdCB0b3AgPSB0YXJnZXQueTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0YXJnZXQueCArIHRhcmdldC53aWR0aDtcbiAgICAgICAgY29uc3QgYm90dG9tID0gdGFyZ2V0LnkgKyB0YXJnZXQuaGVpZ2h0O1xuICAgICAgICBpZiAoeCA8IGxlZnQpIHtcbiAgICAgICAgICAgIHdpZHRoIC09IGxlZnQgLSB4O1xuICAgICAgICAgICAgeCA9IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggKyB3aWR0aCA+IHJpZ2h0KSB7XG4gICAgICAgICAgICB3aWR0aCA9IHJpZ2h0IC0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSA8IHRvcCkge1xuICAgICAgICAgICAgaGVpZ2h0IC09IHRvcCAtIHk7XG4gICAgICAgICAgICB5ID0gdG9wO1xuICAgICAgICB9XG4gICAgICAgIGlmICh5ICsgaGVpZ2h0ID4gYm90dG9tKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBib3R0b20gLSB5O1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aWR0aCA8IDApIHtcbiAgICAgICAgICAgIHdpZHRoID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQueCA9IHg7XG4gICAgICAgIHJlc3VsdC55ID0geTtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5pbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb247XG4gICAgZnVuY3Rpb24gaXNFbXB0eShyZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZS53aWR0aCA9PT0gMCB8fCByZWN0YW5nbGUuaGVpZ2h0ID09PSAwO1xuICAgIH1cbiAgICBSZWN0YW5nbGUuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gY29udGFpbnMocmVjdGFuZ2xlLCBwb2ludCkge1xuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlLnggPCBwb2ludC54XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueCArIHJlY3RhbmdsZS53aWR0aCA+IHBvaW50LnhcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS55IDwgcG9pbnQueVxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnkgKyByZWN0YW5nbGUuaGVpZ2h0ID4gcG9pbnQueTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmNvbnRhaW5zID0gY29udGFpbnM7XG4gICAgZnVuY3Rpb24gcm91bmQocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJlY3RhbmdsZS54ID0gTWF0aC5yb3VuZChyZWN0YW5nbGUueCk7XG4gICAgICAgIHJlY3RhbmdsZS55ID0gTWF0aC5yb3VuZChyZWN0YW5nbGUueSk7XG4gICAgICAgIHJlY3RhbmdsZS53aWR0aCA9IE1hdGgucm91bmQocmVjdGFuZ2xlLndpZHRoKTtcbiAgICAgICAgcmVjdGFuZ2xlLmhlaWdodCA9IE1hdGgucm91bmQocmVjdGFuZ2xlLmhlaWdodCk7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5yb3VuZCA9IHJvdW5kO1xufSkoUmVjdGFuZ2xlIHx8IChSZWN0YW5nbGUgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXgsIFJlY3RhbmdsZSB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgSW1hZ2VFeHRlbnNpb24sIElNQUdFIH0gZnJvbSAnLi9pbWFnZSc7XG5jb25zdCBib3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmNvbnN0IHNjcmVlbkJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IGltYWdlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IGNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gZW5naW5lLnBsYXRmb3JtO1xuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBwbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgICAgICBpZiAoQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eVdpdGhBbHBoYShjb2xvclRyYW5zZm9ybSkpIHtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tQ29udGV4dCA9IHBsYXRmb3JtLmNyZWF0ZUN1c3RvbUNvbnRleHQoKTtcbiAgICAgICAgICAgIGJvdW5kcy54ID0geDtcbiAgICAgICAgICAgIGJvdW5kcy55ID0geTtcbiAgICAgICAgICAgIGJvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgYm91bmRzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Cb3VuZHMobWF0cml4LCBib3VuZHMsIGJvdW5kcyk7XG4gICAgICAgICAgICBpZiAoUmVjdGFuZ2xlLmlzRW1wdHkoYm91bmRzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNjcmVlbkJvdW5kcy53aWR0aCA9IGN1c3RvbUNvbnRleHQuY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgc2NyZWVuQm91bmRzLmhlaWdodCA9IGN1c3RvbUNvbnRleHQuY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5pbnRlcnNlY3Rpb24oYm91bmRzLCBzY3JlZW5Cb3VuZHMsIGJvdW5kcyk7XG4gICAgICAgICAgICBpZiAoUmVjdGFuZ2xlLmlzRW1wdHkoYm91bmRzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJlY3RhbmdsZS5yb3VuZChib3VuZHMpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuY2xlYXJSZWN0KGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBjdXN0b21Db250ZXh0LmdldEltYWdlRGF0YShib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBjb25zdCBybSA9IGNvbG9yVHJhbnNmb3JtLnJlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBnbSA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IGJtID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBhbSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IHJvID0gY29sb3JUcmFuc2Zvcm0ucmVkT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgZ28gPSBjb2xvclRyYW5zZm9ybS5ncmVlbk9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGJvID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGFvID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFPZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGltYWdlRGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBkYXRhO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIHJtICsgcm87XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGdtICsgZ287XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGJtICsgYm87XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGFtICsgYW87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIGJvdW5kcy54LCBib3VuZHMueSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZShjdXN0b21Db250ZXh0LmNhbnZhcywgYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQsIGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHBsYXRmb3JtLmRlc3Ryb3lDdXN0b21Db250ZXh0KGN1c3RvbUNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIEltYWdlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChJTUFHRSwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gfHwgKENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSB9IGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0IHZhciBDYW52YXNJbWFnZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzSW1hZ2VFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBlbmdpbmUucGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIEltYWdlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChJTUFHRSwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNJbWFnZUV4dGVuc2lvbiB8fCAoQ2FudmFzSW1hZ2VFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QsIFJlc291cmNlLCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcbmV4cG9ydCBjb25zdCBJTUFHRSA9ICdpbWFnZSc7XG5leHBvcnQgdmFyIEltYWdlO1xuKGZ1bmN0aW9uIChJbWFnZSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhpbWFnZSwgYm91bmRzLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IGltYWdlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgICAgIGJvdW5kcy54ID0geDtcbiAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgYm91bmRzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgSW1hZ2UuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoSW1hZ2UgfHwgKEltYWdlID0ge30pKTtcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBJbWFnZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoSW1hZ2VFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBsb2NhbCB9ID0gZW5naW5lLnBvaW50ZXJzO1xuICAgICAgICBJbWFnZS5jYWxjdWxhdGVCb3VuZHMoaW1hZ2UsIGJvdW5kcywgZW5naW5lKTtcbiAgICAgICAgcmV0dXJuIFJlY3RhbmdsZS5jb250YWlucyhib3VuZHMsIGxvY2FsKTtcbiAgICB9XG4gICAgSW1hZ2VFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5sb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IGltYWdlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gUmVzb3VyY2UuZ2V0UHJvZ3Jlc3MocmVzb3VyY2UpO1xuICAgICAgICBjb250ZXh0LmxvYWRlZCA9ICEhcmVzb3VyY2U/LmxvYWRlZCAmJiAhIXJlc291cmNlPy5pbWFnZTtcbiAgICB9XG4gICAgSW1hZ2VFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KElNQUdFLCBoaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChJTUFHRSwgbG9hZGVkKTtcbiAgICAgICAgSW1hZ2VSZXNvdXJjZS5pbml0KGVuZ2luZSk7XG4gICAgfVxuICAgIEltYWdlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoSW1hZ2VFeHRlbnNpb24gfHwgKEltYWdlRXh0ZW5zaW9uID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMtaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMtaW1hZ2UtY29sb3InO1xuIiwiZXhwb3J0IHZhciBJbWFnZVJlc291cmNlO1xuKGZ1bmN0aW9uIChJbWFnZVJlc291cmNlKSB7XG4gICAgZnVuY3Rpb24gcmVzb2x2ZShhc3NldCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGFzc2V0LnNwbGl0KCcuJykucG9wKCk7XG4gICAgICAgIHN3aXRjaCAoZXh0ZW5zaW9uKSB7XG4gICAgICAgICAgICBjYXNlICdwbmcnOlxuICAgICAgICAgICAgY2FzZSAnanBnJzpcbiAgICAgICAgICAgIGNhc2UgJ3dlYnAnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0ge1xuICAgICAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNMb2FkZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzVG90YWw6IDAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGFzc2V0O1xuICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGltYWdlIGxvYWRlZDogJHthc3NldH1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnaW1hZ2UgbG9hZCBlcnJvcicsIGUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgSW1hZ2VSZXNvdXJjZS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb2x2ZSk7XG4gICAgfVxuICAgIEltYWdlUmVzb3VyY2UuaW5pdCA9IGluaXQ7XG59KShJbWFnZVJlc291cmNlIHx8IChJbWFnZVJlc291cmNlID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJpbmcnO1xuIiwiZXhwb3J0IHZhciBTdHJpbmdSZXNvdXJjZTtcbihmdW5jdGlvbiAoU3RyaW5nUmVzb3VyY2UpIHtcbiAgICBmdW5jdGlvbiByZXNvbHZlKGFzc2V0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gYXNzZXQuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgICAgc3dpdGNoIChleHRlbnNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3R4dCc6XG4gICAgICAgICAgICBjYXNlICdqc29uJzpcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzTG9hZGVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBieXRlc1RvdGFsOiAwLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGFzc2V0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB4aHIub25wcm9ncmVzcyA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmJ5dGVzTG9hZGVkID0gZS5sb2FkZWQ7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmJ5dGVzVG90YWwgPSBlLnRvdGFsO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHN0cmluZyBsb2FkZWQ6ICR7YXNzZXR9YCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmRhdGEgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5ieXRlc0xvYWRlZCA9IHJlc291cmNlLmJ5dGVzVG90YWw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdzdHJpbmcgbG9hZCBlcnJvcicsIGUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBTdHJpbmdSZXNvdXJjZS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb2x2ZSk7XG4gICAgfVxuICAgIFN0cmluZ1Jlc291cmNlLmluaXQgPSBpbml0O1xufSkoU3RyaW5nUmVzb3VyY2UgfHwgKFN0cmluZ1Jlc291cmNlID0ge30pKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCB7IENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24sIEltYWdlIH0gZnJvbSAnQGplbmcvaW1hZ2UnO1xuaW1wb3J0IHsgQ2FudmFzRW5naW5lIH0gZnJvbSAnQGplbmcvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBDb250YWluZXIsIE1vdXNlRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvY29yZSc7XG5cbi8vIGNyZWF0ZSBlbmdpbmVcbmNvbnN0IGVuZ2luZSA9IG5ldyBDYW52YXNFbmdpbmUoKTtcbi8vIGFkZCBpbWFnZSBleHRlbnNpb25cbkNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuLy8gYWRkIG1vdXNlIGV4dGVuc2lvblxuTW91c2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuLy8gc2V0IGZ1bGxzY3JlZW4gbW9kZVxuZW5naW5lLnNjcmVlbi5mdWxsc2NyZWVuID0gdHJ1ZTtcbi8vIHN0YXJ0IHVwZGF0ZSBsb29wXG5lbmdpbmUudGlja2VyLnBsYXkoKTtcbi8vIGFkZCBlbmdpbmUgdmlldyB0byBwYWdlXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVuZ2luZS5wbGF0Zm9ybS52aWV3KTtcblxuY29uc3QgaW1hZ2VzID0gW1xuXHQnQXJ0aWZhY3RzX2dpZnRfMC5wbmcnLFxuXHQnQXJ0aWZhY3RzX3NrdWxsUmluZ19teXRoaWMucG5nJyxcblx0J0FydGlmYWN0czNfYnJld19teXRoaWMucG5nJyxcblx0J0FydGlmYWN0czNfZG9sbF9teXRoaWMucG5nJyxcblx0J0FydGlmYWN0czNfbXVnX215dGhpYy5wbmcnLFxuXHQnQXJ0aWZhY3RzM19yb3NlX215dGhpYy5wbmcnLFxuXHQnY2hhbXBpb25JdGVtc19zd29yZF9yYXJlLnBuZycsXG5dO1xuXG4vLyBjcmVhdGUgY29udGFpbmVyIHdpdGggaW1hZ2VcbmVuZ2luZS5yb290ID0ge1xuXHR0eXBlOiAnY29udGFpbmVyJyxcblx0Y2hpbGRyZW46IGltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKHtcblx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdHNyYzogYGFzc2V0cy8ke2ltYWdlfWAsXG5cdFx0eDogMTAwICsgMTQwICogKGluZGV4ICUgMiksXG5cdFx0eTogMTAwICsgMTIwICogKGluZGV4IC8gMiB8IDApLFxuXHRcdHBpdm90WDogMC41LFxuXHRcdHBpdm90WTogMC41LFxuXHRcdG9uUG9pbnRlck92ZXIoKSB7XG5cdFx0XHR0aGlzLmJyaWdodG5lc3MgPSAwLjU7XG5cdFx0fSxcblx0XHRvblBvaW50ZXJPdXQoKSB7XG5cdFx0XHR0aGlzLmJyaWdodG5lc3MgPSAwO1xuXHRcdH0sXG5cdFx0b25Qb2ludGVyRG93bigpIHtcblx0XHRcdHRoaXMuc2NhbGUgPSAwLjk1O1xuXHRcdH0sXG5cdFx0b25Qb2ludGVyVXAoKSB7XG5cdFx0XHR0aGlzLnNjYWxlID0gMTtcblx0XHR9LFxuXHR9IGFzIEltYWdlKSksXG59IGFzIENvbnRhaW5lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=