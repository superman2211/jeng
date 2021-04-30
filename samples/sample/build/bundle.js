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
/* harmony export */   "CanvasPatterns": () => (/* reexport safe */ _patterns__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns),
/* harmony export */   "CanvasPlatform": () => (/* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_1__.CanvasPlatform),
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasPatterns": () => (/* binding */ CanvasPatterns)
/* harmony export */ });
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
    var pointers = engine.pointers;

    if (children) {
      var context = pointers.getContext();
      pointers.depth++;
      var result = false;

      if (Array.isArray(children)) {
        for (var i = children.length - 1; i >= 0; i--) {
          var component = children[i];

          if (pointers.dispatchComponent(component, context, result)) {
            result = true;
          }
        }
      } else if (children.type) {
        var _component5 = children;

        if (pointers.dispatchComponent(_component5, context, result)) {
          result = true;
        }
      } else {
        var componentsMap = children;
        var keys = Object.keys(componentsMap);

        for (var _i3 = keys.length - 1; _i3 >= 0; _i3--) {
          var _component6 = componentsMap[keys[_i3]];

          if (pointers.dispatchComponent(_component6, context, result)) {
            result = true;
          }
        }
      }

      pointers.depth--;
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
/* harmony export */   "Loader": () => (/* binding */ Loader),
/* harmony export */   "LoaderExtension": () => (/* binding */ LoaderExtension)
/* harmony export */ });
/* unused harmony export LOADER */
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
  pointerCancel: 'onPointerCancel',
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

  function dispatchEvent(pointer, type, x, y, globalX, globalY, id) {
    var handlerName = handlersMap[type];

    if (handlerName && pointer[handlerName]) {
      var event = {
        type: type,
        x: x,
        y: y,
        globalX: globalX,
        globalY: globalY,
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
          _extensions_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, 'pointerOut', x, y, this.global.x, this.global.y, this.pointerId);
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
          _extensions_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, this.pointerType, _x, _y, this.global.x, this.global.y, this.pointerId);
        }

        if (this.pointerType === 'pointerMove') {
          if (result && !component.pointerOver) {
            _extensions_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, 'pointerOver', _x, _y, this.global.x, this.global.y, this.pointerId);
          } else if (!result && component.pointerOver) {
            _extensions_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, 'pointerOut', _x, _y, this.global.x, this.global.y, this.pointerId);
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
/* harmony export */   "ContainerExtension": () => (/* reexport safe */ _components_container__WEBPACK_IMPORTED_MODULE_1__.ContainerExtension),
/* harmony export */   "Loader": () => (/* reexport safe */ _components_loader__WEBPACK_IMPORTED_MODULE_2__.Loader),
/* harmony export */   "Engine": () => (/* reexport safe */ _core_engine__WEBPACK_IMPORTED_MODULE_3__.Engine),
/* harmony export */   "Platform": () => (/* reexport safe */ _features_platform__WEBPACK_IMPORTED_MODULE_7__.Platform),
/* harmony export */   "Resource": () => (/* reexport safe */ _features_resources__WEBPACK_IMPORTED_MODULE_10__.Resource),
/* harmony export */   "MouseExtension": () => (/* reexport safe */ _interactive_mouse__WEBPACK_IMPORTED_MODULE_14__.MouseExtension),
/* harmony export */   "Pivot": () => (/* reexport safe */ _extensions_pivot__WEBPACK_IMPORTED_MODULE_17__.Pivot)
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
/* harmony import */ var _interactive_touch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./interactive/touch */ "../../packages/core/dist/interactive/touch.js");
/* harmony import */ var _extensions_display__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./extensions/display */ "../../packages/core/dist/extensions/display.js");
/* harmony import */ var _extensions_pivot__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./extensions/pivot */ "../../packages/core/dist/extensions/pivot.js");
/* harmony import */ var _extensions_pointer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./extensions/pointer */ "../../packages/core/dist/extensions/pointer.js");
/* harmony import */ var _extensions_source__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./extensions/source */ "../../packages/core/dist/extensions/source.js");
/* harmony import */ var _extensions_transform__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./extensions/transform */ "../../packages/core/dist/extensions/transform.js");
/* harmony import */ var _extensions_update__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./extensions/update */ "../../packages/core/dist/extensions/update.js");























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
    view.addEventListener('mouseleave', function (event) {
      dispatchEvent(engine, event, 'pointerCancel');
    });
  }

  MouseExtension.init = init;
})(MouseExtension || (MouseExtension = {}));

/***/ }),

/***/ "../../packages/core/dist/interactive/touch.js":
/*!*****************************************************!*\
  !*** ../../packages/core/dist/interactive/touch.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export TouchExtension */
function dispatchEvent(engine, event, type) {
  var view = engine.platform.view;
  var clientRect = view.getBoundingClientRect();

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var x = touch.clientX - clientRect.left - view.clientLeft;
    var y = touch.clientY - clientRect.top - view.clientTop;
    engine.pointers.dispatch(type, x, y, touch.identifier);
  }

  event.preventDefault();
}

var TouchExtension;

(function (TouchExtension) {
  function init(engine) {
    var view = engine.platform.view;
    view.addEventListener('touchstart', function (event) {
      dispatchEvent(engine, event, 'pointerDown');
    });
    view.addEventListener('touchend', function (event) {
      dispatchEvent(engine, event, 'pointerUp');
    });
    view.addEventListener('touchmove', function (event) {
      dispatchEvent(engine, event, 'pointerMove');
    });
    view.addEventListener('touchcancel', function (event) {
      dispatchEvent(engine, event, 'pointerCancel');
    });
  }

  TouchExtension.init = init;
})(TouchExtension || (TouchExtension = {}));

/***/ }),

/***/ "../../packages/geom/dist/bounds.js":
/*!******************************************!*\
  !*** ../../packages/geom/dist/bounds.js ***!
  \******************************************/
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
/* harmony export */   "Bounds": () => (/* reexport safe */ _bounds__WEBPACK_IMPORTED_MODULE_1__.Bounds),
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
/* harmony export */   "IMAGE": () => (/* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_0__.IMAGE),
/* harmony export */   "ImageExtension": () => (/* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_0__.ImageExtension),
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
/* harmony export */   "ImageResource": () => (/* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_0__.ImageResource),
/* harmony export */   "StringResource": () => (/* reexport safe */ _string__WEBPACK_IMPORTED_MODULE_1__.StringResource)
/* harmony export */ });
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image */ "../../packages/resources/dist/image.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string */ "../../packages/resources/dist/string.js");



/***/ }),

/***/ "../../packages/resources/dist/string.js":
/*!***********************************************!*\
  !*** ../../packages/resources/dist/string.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringResource": () => (/* binding */ StringResource)
/* harmony export */ });
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

/***/ }),

/***/ "../../packages/scene/dist/index.js":
/*!******************************************!*\
  !*** ../../packages/scene/dist/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneExtension": () => (/* reexport safe */ _scene__WEBPACK_IMPORTED_MODULE_0__.SceneExtension)
/* harmony export */ });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene */ "../../packages/scene/dist/scene.js");


/***/ }),

/***/ "../../packages/scene/dist/scene.js":
/*!******************************************!*\
  !*** ../../packages/scene/dist/scene.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneExtension": () => (/* binding */ SceneExtension)
/* harmony export */ });
/* unused harmony export SCENE */
/* harmony import */ var _jeng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/core */ "../../packages/core/dist/index.js");
/* harmony import */ var _jeng_resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jeng/resources */ "../../packages/resources/dist/index.js");


var SCENE = 'scene';
var SceneExtension;

(function (SceneExtension) {
  function loaded(scene, engine) {
    var context = engine.loading.getContext();

    if (scene.children) {
      _jeng_core__WEBPACK_IMPORTED_MODULE_0__.ContainerExtension.loaded(scene, engine);
    } else {
      var src = scene.src;

      if (!src) {
        context.progress = 1;
        context.loaded = true;
        return;
      }

      var resource = engine.resources.get(src);
      context.progress = _jeng_core__WEBPACK_IMPORTED_MODULE_0__.Resource.getProgress(resource);
      context.loaded = !!(resource !== null && resource !== void 0 && resource.loaded) && !!(resource !== null && resource !== void 0 && resource.data);

      if (resource && resource.data) {
        try {
          scene.children = JSON.parse(resource.data);
        } catch (e) {
          engine.debug.warning("scene parsing error: ".concat(e.message));
        }
      }
    }
  }

  SceneExtension.loaded = loaded;

  function init(engine) {
    engine.components.hitTest.set(SCENE, _jeng_core__WEBPACK_IMPORTED_MODULE_0__.ContainerExtension.hitTest);
    engine.components.render.set(SCENE, _jeng_core__WEBPACK_IMPORTED_MODULE_0__.ContainerExtension.render);
    engine.components.update.set(SCENE, _jeng_core__WEBPACK_IMPORTED_MODULE_0__.ContainerExtension.update);
    engine.components.loaded.set(SCENE, loaded);
    _jeng_resources__WEBPACK_IMPORTED_MODULE_1__.StringResource.init(engine);
  }

  SceneExtension.init = init;
})(SceneExtension || (SceneExtension = {}));

/***/ }),

/***/ "../../packages/shape/dist/canvas/ellipse.js":
/*!***************************************************!*\
  !*** ../../packages/shape/dist/canvas/ellipse.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyEllipse": () => (/* binding */ applyEllipse)
/* harmony export */ });
var PI_2 = Math.PI * 2;
function applyEllipse(data, hasFill, context) {
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

  if (hasFill) {
    context.closePath();
  }

  return true;
}

/***/ }),

/***/ "../../packages/shape/dist/canvas/path.js":
/*!************************************************!*\
  !*** ../../packages/shape/dist/canvas/path.js ***!
  \************************************************/
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
function applyPath(data, hasFill, context) {
  if (!data.length) {
    return false;
  }

  context.beginPath();

  for (var i = 0; i < data.length; i++) {
    var command = data[i];
    applyCommand(command, context);
  }

  if (hasFill) {
    context.closePath();
  }

  return true;
}

/***/ }),

/***/ "../../packages/shape/dist/canvas/rectangle.js":
/*!*****************************************************!*\
  !*** ../../packages/shape/dist/canvas/rectangle.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyRectangle": () => (/* binding */ applyRectangle)
/* harmony export */ });
function applyRectangle(data, hasFill, context) {
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

  if (hasFill) {
    context.closePath();
  }

  return true;
}

/***/ }),

/***/ "../../packages/shape/dist/canvas/shape.js":
/*!*************************************************!*\
  !*** ../../packages/shape/dist/canvas/shape.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasShapeExtension": () => (/* binding */ CanvasShapeExtension)
/* harmony export */ });
/* harmony import */ var _jeng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/core */ "../../packages/core/dist/index.js");
/* harmony import */ var _jeng_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jeng/geom */ "../../packages/geom/dist/index.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shape */ "../../packages/shape/dist/shape.js");
/* harmony import */ var _rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rectangle */ "../../packages/shape/dist/canvas/rectangle.js");
/* harmony import */ var _ellipse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ellipse */ "../../packages/shape/dist/canvas/ellipse.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./path */ "../../packages/shape/dist/canvas/path.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string */ "../../packages/shape/dist/canvas/string.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "../../packages/shape/dist/canvas/style.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }









var bounds = _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.empty();
var offset = _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Point.empty();

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
      exist = (0,_rectangle__WEBPACK_IMPORTED_MODULE_3__.applyRectangle)(data, hasFill, context);
      break;

    case 'ellipse':
      exist = (0,_ellipse__WEBPACK_IMPORTED_MODULE_4__.applyEllipse)(data, hasFill, context);
      break;

    case 'path':
      var path = data;

      if (typeof path.data === 'string') {
        exist = (0,_string__WEBPACK_IMPORTED_MODULE_6__.applyString)(path.data, hasFill, context);
      } else if (Array.isArray(path.data)) {
        exist = (0,_path__WEBPACK_IMPORTED_MODULE_5__.applyPath)(path.data, hasFill, context);
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

    _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Point.setEmpty(offset);

    if (_jeng_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.hasValues(shape)) {
      _shape__WEBPACK_IMPORTED_MODULE_2__.Shape.calculateBounds(shape, bounds);

      if (_jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.isEmpty(bounds)) {
        return;
      }

      offset.x = _jeng_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(shape, bounds.width);
      offset.y = _jeng_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(shape, bounds.width);
    }

    var context2d = engine.platform.getContext();
    context2d.globalAlpha = 1;
    var matrix = context.matrix;

    if (_jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Point.isEmpty(offset)) {
      _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Matrix.transformPointLocal(matrix, offset, offset);
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

/***/ "../../packages/shape/dist/canvas/string.js":
/*!**************************************************!*\
  !*** ../../packages/shape/dist/canvas/string.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyString": () => (/* binding */ applyString)
/* harmony export */ });
/* harmony import */ var _data_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/string */ "../../packages/shape/dist/data/string.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ "../../packages/shape/dist/canvas/path.js");


var reader = new _data_string__WEBPACK_IMPORTED_MODULE_0__.GraphicsStringReader();
function applyString(data, hasFill, context) {
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

  if (hasFill) {
    context.closePath();
  }

  return true;
}

/***/ }),

/***/ "../../packages/shape/dist/canvas/style.js":
/*!*************************************************!*\
  !*** ../../packages/shape/dist/canvas/style.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setFillStyle": () => (/* binding */ setFillStyle),
/* harmony export */   "setStrokeStyle": () => (/* binding */ setStrokeStyle)
/* harmony export */ });
/* harmony import */ var _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/canvas-engine */ "../../packages/canvas-engine/dist/index.js");
/* harmony import */ var _jeng_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jeng/geom */ "../../packages/geom/dist/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var emptyArray = [];
var emptyMatrix = _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Matrix.empty();

function getCanvasPattern(fill, colorTransform, context, engine) {
  var _solid$color, _solid$alpha, _linear$beginX, _linear$beginY, _linear$endX, _linear$endY, _linear$colors, _linear$alphas, _linear$ratios, _radial$beginX, _radial$beginY, _radial$beginRadius, _ref, _radial$endX, _ref2, _radial$endY, _radial$endRadius, _radial$colors, _radial$alphas, _radial$ratios;

  if (typeof fill === 'number') {
    return _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns.colorPattern(fill, 1, colorTransform);
  }

  if (_typeof(fill) === 'object') {
    switch (fill.type) {
      case 'solid':
        var solid = fill;
        return _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns.colorPattern((_solid$color = solid.color) !== null && _solid$color !== void 0 ? _solid$color : 0, (_solid$alpha = solid.alpha) !== null && _solid$alpha !== void 0 ? _solid$alpha : 1, colorTransform);

      case 'linear':
        var linear = fill;
        return _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns.linearGradientPattern((_linear$beginX = linear.beginX) !== null && _linear$beginX !== void 0 ? _linear$beginX : 0, (_linear$beginY = linear.beginY) !== null && _linear$beginY !== void 0 ? _linear$beginY : 0, (_linear$endX = linear.endX) !== null && _linear$endX !== void 0 ? _linear$endX : 0, (_linear$endY = linear.endY) !== null && _linear$endY !== void 0 ? _linear$endY : 0, (_linear$colors = linear.colors) !== null && _linear$colors !== void 0 ? _linear$colors : emptyArray, (_linear$alphas = linear.alphas) !== null && _linear$alphas !== void 0 ? _linear$alphas : emptyArray, (_linear$ratios = linear.ratios) !== null && _linear$ratios !== void 0 ? _linear$ratios : emptyArray, colorTransform, context);

      case 'radial':
        var radial = fill;
        return _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns.radialGradientPattern((_radial$beginX = radial.beginX) !== null && _radial$beginX !== void 0 ? _radial$beginX : 0, (_radial$beginY = radial.beginY) !== null && _radial$beginY !== void 0 ? _radial$beginY : 0, (_radial$beginRadius = radial.beginRadius) !== null && _radial$beginRadius !== void 0 ? _radial$beginRadius : 0, (_ref = (_radial$endX = radial.endX) !== null && _radial$endX !== void 0 ? _radial$endX : radial.beginX) !== null && _ref !== void 0 ? _ref : 0, (_ref2 = (_radial$endY = radial.endY) !== null && _radial$endY !== void 0 ? _radial$endY : radial.beginY) !== null && _ref2 !== void 0 ? _ref2 : 0, (_radial$endRadius = radial.endRadius) !== null && _radial$endRadius !== void 0 ? _radial$endRadius : 0, (_radial$colors = radial.colors) !== null && _radial$colors !== void 0 ? _radial$colors : emptyArray, (_radial$alphas = radial.alphas) !== null && _radial$alphas !== void 0 ? _radial$alphas : emptyArray, (_radial$ratios = radial.ratios) !== null && _radial$ratios !== void 0 ? _radial$ratios : emptyArray, colorTransform, context);

      case 'bitmap':
        var bitmapFill = fill;
        var _bitmapFill$repeat = bitmapFill.repeat,
            repeat = _bitmapFill$repeat === void 0 ? true : _bitmapFill$repeat,
            src = bitmapFill.src,
            _bitmapFill$matrix = bitmapFill.matrix,
            matrix = _bitmapFill$matrix === void 0 ? emptyMatrix : _bitmapFill$matrix;

        if (!src) {
          return '';
        }

        var resource = engine.resources.get(src);

        if (resource !== null && resource !== void 0 && resource.image) {
          var pattern = _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns.bitmapPattern(resource.image, repeat, matrix, context);
          return pattern;
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
    context.strokeStyle = _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns.colorPattern(stroke, 1, colorTransform);
    context.lineWidth = 1;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.miterLimit = 10;
  } else if (_typeof(stroke) === 'object' && stroke.fill !== undefined) {
    var _stroke$thickness, _stroke$caps, _stroke$joints, _stroke$miterLimit;

    context.strokeStyle = getCanvasPattern(stroke.fill, colorTransform, context, engine);
    context.lineWidth = (_stroke$thickness = stroke.thickness) !== null && _stroke$thickness !== void 0 ? _stroke$thickness : 1;
    context.lineCap = (_stroke$caps = stroke.caps) !== null && _stroke$caps !== void 0 ? _stroke$caps : 'round';
    context.lineJoin = (_stroke$joints = stroke.joints) !== null && _stroke$joints !== void 0 ? _stroke$joints : 'round';
    context.miterLimit = (_stroke$miterLimit = stroke.miterLimit) !== null && _stroke$miterLimit !== void 0 ? _stroke$miterLimit : 10;
  }
}

/***/ }),

/***/ "../../packages/shape/dist/data/data.js":
/*!**********************************************!*\
  !*** ../../packages/shape/dist/data/data.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphicsData": () => (/* binding */ GraphicsData)
/* harmony export */ });
/* unused harmony exports RectangleData, EllipseData, PathData */
/* harmony import */ var _jeng_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/geom */ "../../packages/geom/dist/index.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ "../../packages/shape/dist/data/path.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string */ "../../packages/shape/dist/data/string.js");



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
    _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, x, y);
    _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, x + width, y + height);
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
    _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, x - rx, y - ry);
    _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, x + rx, y + ry);
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

/***/ "../../packages/shape/dist/data/path.js":
/*!**********************************************!*\
  !*** ../../packages/shape/dist/data/path.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PathCommand": () => (/* binding */ PathCommand)
/* harmony export */ });
/* harmony import */ var _jeng_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/geom */ "../../packages/geom/dist/index.js");

var PathCommand;

(function (PathCommand) {
  function calculateBounds(path, bounds) {
    var _moveTo$x, _moveTo$y, _curveTo$cx, _curveTo$cy, _curveTo$x, _curveTo$y, _cubicCurveTo$cx, _cubicCurveTo$cy, _cubicCurveTo$sx, _cubicCurveTo$sy, _cubicCurveTo$x, _cubicCurveTo$y;

    var type = path.type;

    switch (type) {
      case 'moveTo':
      case 'lineTo':
        var moveTo = path;
        _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_moveTo$x = moveTo.x) !== null && _moveTo$x !== void 0 ? _moveTo$x : 0, (_moveTo$y = moveTo.y) !== null && _moveTo$y !== void 0 ? _moveTo$y : 0);
        break;

      case 'curveTo':
        var curveTo = path;
        _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_curveTo$cx = curveTo.cx) !== null && _curveTo$cx !== void 0 ? _curveTo$cx : 0, (_curveTo$cy = curveTo.cy) !== null && _curveTo$cy !== void 0 ? _curveTo$cy : 0);
        _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_curveTo$x = curveTo.x) !== null && _curveTo$x !== void 0 ? _curveTo$x : 0, (_curveTo$y = curveTo.y) !== null && _curveTo$y !== void 0 ? _curveTo$y : 0);
        break;

      case 'cubicCurveTo':
        var cubicCurveTo = path;
        _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_cubicCurveTo$cx = cubicCurveTo.cx) !== null && _cubicCurveTo$cx !== void 0 ? _cubicCurveTo$cx : 0, (_cubicCurveTo$cy = cubicCurveTo.cy) !== null && _cubicCurveTo$cy !== void 0 ? _cubicCurveTo$cy : 0);
        _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_cubicCurveTo$sx = cubicCurveTo.sx) !== null && _cubicCurveTo$sx !== void 0 ? _cubicCurveTo$sx : 0, (_cubicCurveTo$sy = cubicCurveTo.sy) !== null && _cubicCurveTo$sy !== void 0 ? _cubicCurveTo$sy : 0);
        _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_cubicCurveTo$x = cubicCurveTo.x) !== null && _cubicCurveTo$x !== void 0 ? _cubicCurveTo$x : 0, (_cubicCurveTo$y = cubicCurveTo.y) !== null && _cubicCurveTo$y !== void 0 ? _cubicCurveTo$y : 0);
        break;

      default:
        break;
    }
  }

  PathCommand.calculateBounds = calculateBounds;
})(PathCommand || (PathCommand = {}));

/***/ }),

/***/ "../../packages/shape/dist/data/string.js":
/*!************************************************!*\
  !*** ../../packages/shape/dist/data/string.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphicsStringReader": () => (/* binding */ GraphicsStringReader),
/* harmony export */   "GraphicsString": () => (/* binding */ GraphicsString)
/* harmony export */ });
/* unused harmony export GraphicsStringStream */
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path */ "../../packages/shape/dist/data/path.js");
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
var COMMAND_REGEX = /[MmLlHhVvCcSsQqTt]/;
var NUMBER_REGEX = /[-+]?[\d.]+/;
var GraphicsStringStream = /*#__PURE__*/function () {
  function GraphicsStringStream() {
    _classCallCheck(this, GraphicsStringStream);

    this.path = '';
    this.command = null;
    this.buffer = [0, 0, 0, 0, 0, 0];
    this.symbolRegex = /[MmLlHhVvCcSsQqTt]|[-+]?[\d.]+/g;
  }

  _createClass(GraphicsStringStream, [{
    key: "setPath",
    value: function setPath(path) {
      this.path = path;
      this.symbolRegex.lastIndex = 0;
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
      var lastIndex = this.symbolRegex.lastIndex;
      var symbolMatch = this.symbolRegex.exec(this.path);

      if (!symbolMatch) {
        this.command = null;
        return;
      }

      var symbol = symbolMatch[0];

      if (COMMAND_REGEX.test(symbol)) {
        this.command = symbol;
      } else if (NUMBER_REGEX.test(symbol)) {
        this.symbolRegex.lastIndex = lastIndex;
      } else {
        this.command = null;
      }

      if (!this.command) {
        return;
      }

      var count = NUMBERS_COUNT[this.command];

      for (var i = 0; i < count; i++) {
        var numberMatch = this.symbolRegex.exec(this.path);

        if (numberMatch && NUMBER_REGEX.test(numberMatch[0])) {
          this.buffer[i] = parseFloat(numberMatch[0]);
        } else {
          break;
        }
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
    this.lastCX = 0;
    this.lastCY = 0;
  }

  _createClass(GraphicsStringReader, [{
    key: "setPath",
    value: function setPath(path) {
      this.stream.setPath(path);
      this.lastX = 0;
      this.lastY = 0;
      this.lastCX = 0;
      this.lastCY = 0;
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
            this.lastCX = cubicCurveTo.x - (cubicCurveTo.sx - cubicCurveTo.x);
            this.lastCY = cubicCurveTo.y - (cubicCurveTo.sy - cubicCurveTo.y);
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
            this.lastCX = _cubicCurveTo.x - (_cubicCurveTo.sx - _cubicCurveTo.x);
            this.lastCY = _cubicCurveTo.y - (_cubicCurveTo.sy - _cubicCurveTo.y);
            this.lastX = _cubicCurveTo.x;
            this.lastY = _cubicCurveTo.y;
          }
          break;

        case 'S':
          {
            this.command.type = 'cubicCurveTo';
            var _cubicCurveTo2 = this.command;
            _cubicCurveTo2.cx = this.lastCX;
            _cubicCurveTo2.cy = this.lastCY;
            _cubicCurveTo2.sx = e0;
            _cubicCurveTo2.sy = e1;
            _cubicCurveTo2.x = e2;
            _cubicCurveTo2.y = e3;
            this.lastCX = _cubicCurveTo2.x - (_cubicCurveTo2.sx - _cubicCurveTo2.x);
            this.lastCY = _cubicCurveTo2.y - (_cubicCurveTo2.sy - _cubicCurveTo2.y);
            this.lastX = _cubicCurveTo2.x;
            this.lastY = _cubicCurveTo2.y;
          }
          break;

        case 's':
          {
            this.command.type = 'cubicCurveTo';
            var _cubicCurveTo3 = this.command;
            _cubicCurveTo3.cx = this.lastCX;
            _cubicCurveTo3.cy = this.lastCY;
            _cubicCurveTo3.sx = e0 + this.lastX;
            _cubicCurveTo3.sy = e1 + this.lastY;
            _cubicCurveTo3.x = e2 + this.lastX;
            _cubicCurveTo3.y = e3 + this.lastY;
            this.lastCX = _cubicCurveTo3.x - (_cubicCurveTo3.sx - _cubicCurveTo3.x);
            this.lastCY = _cubicCurveTo3.y - (_cubicCurveTo3.sy - _cubicCurveTo3.y);
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
            this.lastCX = curveTo.x - (curveTo.cx - curveTo.x);
            this.lastCY = curveTo.y - (curveTo.cy - curveTo.y);
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
            this.lastCX = _curveTo.x - (_curveTo.cx - _curveTo.x);
            this.lastCY = _curveTo.y - (_curveTo.cy - _curveTo.y);
            this.lastX = _curveTo.x;
            this.lastY = _curveTo.y;
          }
          break;

        case 'T':
          {
            this.command.type = 'curveTo';
            var _curveTo2 = this.command;
            _curveTo2.cx = this.lastCX;
            _curveTo2.cy = this.lastCY;
            _curveTo2.x = e0;
            _curveTo2.y = e1;
            this.lastCX = _curveTo2.x - (_curveTo2.cx - _curveTo2.x);
            this.lastCY = _curveTo2.y - (_curveTo2.cy - _curveTo2.y);
            this.lastX = _curveTo2.x;
            this.lastY = _curveTo2.y;
          }
          break;

        case 't':
          {
            this.command.type = 'curveTo';
            var _curveTo3 = this.command;
            _curveTo3.cx = this.lastCX;
            _curveTo3.cy = this.lastCY;
            _curveTo3.x = e0 + this.lastX;
            _curveTo3.y = e1 + this.lastY;
            this.lastCX = _curveTo3.x - (_curveTo3.cx - _curveTo3.x);
            this.lastCY = _curveTo3.y - (_curveTo3.cy - _curveTo3.y);
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

/***/ "../../packages/shape/dist/data/style.js":
/*!***********************************************!*\
  !*** ../../packages/shape/dist/data/style.js ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "../../packages/shape/dist/graphics.js":
/*!*********************************************!*\
  !*** ../../packages/shape/dist/graphics.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export Graphics */
/* harmony import */ var _jeng_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/geom */ "../../packages/geom/dist/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var tempPoint0 = _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Point.empty();
var tempPoint1 = _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Point.empty();
var emptyMatrix = _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.empty();
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
      return this;
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
      return this;
    }
  }, {
    key: "beginGradientFill",
    value: function beginGradientFill(type, color, alpha, ratio, matrix) {
      if (type === 'linear') {
        tempPoint0.x = -819.2;
        tempPoint0.y = 0;
        tempPoint1.x = 819.2;
        tempPoint1.y = 0;
        _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.transformPoint(matrix, tempPoint0, tempPoint0);
        _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.transformPoint(matrix, tempPoint1, tempPoint1);
        this.fill = {
          type: type,
          color: color,
          alpha: alpha,
          ratio: ratio,
          beginX: tempPoint0.x,
          beginY: tempPoint0.y,
          endX: tempPoint1.x,
          endY: tempPoint1.y
        };
      } else {
        tempPoint0.x = 1638.4;
        tempPoint0.y = 0;
        _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.transformPoint(matrix, tempPoint0, tempPoint0);
        this.fill = {
          type: type,
          color: color,
          alpha: alpha,
          ratio: ratio,
          beginX: tempPoint0.x,
          beginY: tempPoint0.y,
          beginRadius: 0,
          endX: tempPoint0.x,
          endY: tempPoint0.y,
          endRadius: Math.abs((tempPoint0.x - matrix.tx) / 2)
        };
      }

      return this;
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
      return this;
    }
  }, {
    key: "lineGradientStyle",
    value: function lineGradientStyle(type, color, alpha, ratio) {
      var matrix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : emptyMatrix;

      if (!this.stroke) {
        return this;
      }

      if (type === 'linear') {
        tempPoint0.x = -819.2;
        tempPoint0.y = 0;
        tempPoint1.x = 819.2;
        tempPoint1.y = 0;
        _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.transformPoint(matrix, tempPoint0, tempPoint0);
        _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.transformPoint(matrix, tempPoint1, tempPoint1);
        this.stroke.fill = {
          type: type,
          color: color,
          alpha: alpha,
          ratio: ratio,
          beginX: tempPoint0.x,
          beginY: tempPoint0.y,
          endX: tempPoint1.x,
          endY: tempPoint1.y
        };
      } else {
        tempPoint0.x = 1638.4;
        tempPoint0.y = 0;
        _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.transformPoint(matrix, tempPoint0, tempPoint0);
        this.stroke.fill = {
          type: type,
          color: color,
          alpha: alpha,
          ratio: ratio,
          beginX: tempPoint0.x,
          beginY: tempPoint0.y,
          beginRadius: 0,
          endX: tempPoint0.x,
          endY: tempPoint0.y,
          endRadius: Math.abs((tempPoint0.x - matrix.tx) / 2)
        };
      }

      return this;
    }
  }, {
    key: "lineBitmapStyle",
    value: function lineBitmapStyle(src, matrix) {
      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var smooth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (!this.stroke) {
        return this;
      }

      this.stroke.fill = {
        type: 'bitmap',
        src: src,
        matrix: matrix,
        repeat: repeat,
        smooth: smooth
      };
      return this;
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
      return this;
    }
  }, {
    key: "lineTo",
    value: function lineTo(x, y) {
      var path = this.getPath();

      if (!path) {
        return this;
      }

      path.push({
        type: 'lineTo',
        x: x,
        y: y
      });
      return this;
    }
  }, {
    key: "curveTo",
    value: function curveTo(cx, cy, x, y) {
      var path = this.getPath();

      if (!path) {
        return this;
      }

      path.push({
        type: 'curveTo',
        cx: cx,
        cy: cy,
        x: x,
        y: y
      });
      return this;
    }
  }, {
    key: "cubicCurveTo",
    value: function cubicCurveTo(cx, cy, sx, sy, x, y) {
      var path = this.getPath();

      if (!path) {
        return this;
      }

      path.push({
        type: 'cubicCurveTo',
        cx: cx,
        cy: cy,
        sx: sx,
        sy: sy,
        x: x,
        y: y
      });
      return this;
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
      return this;
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
      return this;
    }
  }, {
    key: "drawCircle",
    value: function drawCircle(x, y, radius) {
      var data = this.createData();
      data.type = 'ellipse';
      data.x = x;
      data.y = y;
      data.radius = radius;
      return this;
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
      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      delete this.shape.data;
      return this;
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

/***/ "../../packages/shape/dist/index.js":
/*!******************************************!*\
  !*** ../../packages/shape/dist/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasShapeExtension": () => (/* reexport safe */ _canvas_shape__WEBPACK_IMPORTED_MODULE_6__.CanvasShapeExtension)
/* harmony export */ });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/data */ "../../packages/shape/dist/data/data.js");
/* harmony import */ var _data_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/path */ "../../packages/shape/dist/data/path.js");
/* harmony import */ var _data_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/string */ "../../packages/shape/dist/data/string.js");
/* harmony import */ var _data_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/style */ "../../packages/shape/dist/data/style.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shape */ "../../packages/shape/dist/shape.js");
/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graphics */ "../../packages/shape/dist/graphics.js");
/* harmony import */ var _canvas_shape__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./canvas/shape */ "../../packages/shape/dist/canvas/shape.js");








/***/ }),

/***/ "../../packages/shape/dist/shape.js":
/*!******************************************!*\
  !*** ../../packages/shape/dist/shape.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SHAPE": () => (/* binding */ SHAPE),
/* harmony export */   "Shape": () => (/* binding */ Shape),
/* harmony export */   "ShapeExtension": () => (/* binding */ ShapeExtension)
/* harmony export */ });
/* harmony import */ var _jeng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/core */ "../../packages/core/dist/index.js");
/* harmony import */ var _jeng_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jeng/geom */ "../../packages/geom/dist/index.js");
/* harmony import */ var _jeng_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jeng/resources */ "../../packages/resources/dist/index.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/data */ "../../packages/shape/dist/data/data.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





var SHAPE = 'shape';
var bounds = _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Bounds.empty();
var Shape;

(function (Shape) {
  function calculateBounds(shape, result) {
    var data = shape.data;

    if (!data) {
      _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.setEmpty(result);
      return;
    }

    _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Bounds.setEmpty(bounds);

    if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        _data_data__WEBPACK_IMPORTED_MODULE_3__.GraphicsData.calculateBounds(data[i], bounds);
      }
    } else if (_typeof(data) === 'object') {
      _data_data__WEBPACK_IMPORTED_MODULE_3__.GraphicsData.calculateBounds(data, bounds);
    } else {
      _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.setEmpty(result);
      return;
    }

    if (_jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Bounds.isEmpty(bounds)) {
      _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.setEmpty(result);
      return;
    }

    var width = bounds.maxX - bounds.minX;
    var height = bounds.maxY - bounds.minY;
    var x = bounds.minX + _jeng_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(shape, width);
    var y = bounds.minY + _jeng_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(shape, height);
    result.x = x;
    result.y = y;
    result.width = width;
    result.height = height;
  }

  Shape.calculateBounds = calculateBounds;
})(Shape || (Shape = {}));

var rectangle = _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.empty();
var ShapeExtension;

(function (ShapeExtension) {
  function hitTest(shape, engine) {
    var local = engine.pointers.local;
    Shape.calculateBounds(shape, rectangle);
    return _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.contains(rectangle, local);
  }

  ShapeExtension.hitTest = hitTest;

  function init(engine) {
    engine.components.hitTest.set(SHAPE, hitTest);
    _jeng_resources__WEBPACK_IMPORTED_MODULE_2__.ImageResource.init(engine);
  }

  ShapeExtension.init = init;
})(ShapeExtension || (ShapeExtension = {}));

/***/ }),

/***/ "../../packages/text/dist/canvas/text.js":
/*!***********************************************!*\
  !*** ../../packages/text/dist/canvas/text.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasTextExtension": () => (/* binding */ CanvasTextExtension)
/* harmony export */ });
/* harmony import */ var _jeng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/core */ "../../packages/core/dist/index.js");
/* harmony import */ var _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jeng/canvas-engine */ "../../packages/canvas-engine/dist/index.js");
/* harmony import */ var _data_font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/font */ "../../packages/text/dist/data/font.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text */ "../../packages/text/dist/text.js");
/* harmony import */ var _data_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/format */ "../../packages/text/dist/data/format.js");
/* harmony import */ var _data_metrics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/metrics */ "../../packages/text/dist/data/metrics.js");






var defaultTextFormat = {};
var CORRECTION = 0.85;
var CanvasTextExtension;

(function (CanvasTextExtension) {
  function render(component, engine) {
    var _engine$renderer$getC = engine.renderer.getContext(),
        matrix = _engine$renderer$getC.matrix,
        colorTransform = _engine$renderer$getC.colorTransform;

    if (colorTransform.alphaMultiplier <= 0) {
      return;
    }

    if (_text__WEBPACK_IMPORTED_MODULE_3__.Text.isUpdateMetrics(component)) {
      _text__WEBPACK_IMPORTED_MODULE_3__.Text.updateMetrics(component);
    }

    var metrics = component.metrics;

    if (!metrics) {
      return;
    }

    var width = component.width,
        height = component.height,
        format = component.format,
        border = component.border,
        background = component.background;
    _data_format__WEBPACK_IMPORTED_MODULE_4__.TextFormat.combine(format, _data_format__WEBPACK_IMPORTED_MODULE_4__.TextFormat.defaultTextFormat, defaultTextFormat);
    var realWidth = width !== null && width !== void 0 ? width : metrics.width;
    var realHeight = height !== null && height !== void 0 ? height : metrics.height;
    var offsetX = _jeng_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(component, realWidth);
    var offsetY = _jeng_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(component, realHeight);
    var context2d = engine.platform.getContext();
    context2d.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
    context2d.globalAlpha = 1;

    if (background !== undefined) {
      context2d.strokeStyle = '';
      context2d.fillStyle = _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_1__.CanvasPatterns.colorPattern(background, 1, colorTransform);
      context2d.beginPath();
      context2d.rect(offsetX, offsetY, realWidth, realHeight);
      context2d.closePath();
      context2d.fill();
    }

    if (border !== undefined) {
      context2d.strokeStyle = _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_1__.CanvasPatterns.colorPattern(border, 1, colorTransform);
      context2d.fillStyle = '';
      context2d.beginPath();
      context2d.rect(offsetX, offsetY, realWidth, realHeight);
      context2d.closePath();
      context2d.stroke();
    }

    context2d.textBaseline = 'alphabetic';
    context2d.strokeStyle = '';
    var simple = _text__WEBPACK_IMPORTED_MODULE_3__.Text.isSimple(component);

    if (simple) {
      var text = component.text;
      var size = defaultTextFormat.size,
          color = defaultTextFormat.color,
          alpha = defaultTextFormat.alpha,
          leading = defaultTextFormat.leading,
          letterSpacing = defaultTextFormat.letterSpacing;
      var defaultFont = _data_font__WEBPACK_IMPORTED_MODULE_2__.Font.getFont(defaultTextFormat);
      var symbolSize = size * CORRECTION;
      var alignValue = _data_format__WEBPACK_IMPORTED_MODULE_4__.TextFormat.getAlignValue(defaultTextFormat);
      context2d.font = _data_font__WEBPACK_IMPORTED_MODULE_2__.Font.getStyle(defaultFont, size);
      context2d.fillStyle = _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_1__.CanvasPatterns.colorPattern(color, alpha, colorTransform);
      var x = offsetX + alignValue ? alignValue * (realWidth - _data_metrics__WEBPACK_IMPORTED_MODULE_5__.TextMetrics.getSimpleWidth(defaultTextFormat, text, 0)) : 0;
      var y = 0;

      for (var i = 0; i < text.length; i++) {
        var symbol = text[i];

        if (symbol === '\n') {
          x = alignValue ? alignValue * (realWidth - _data_metrics__WEBPACK_IMPORTED_MODULE_5__.TextMetrics.getSimpleWidth(defaultTextFormat, text, i + 1)) : 0;
          y += size + leading;
        } else {
          var symbolNext = text[i + 1];
          var advance = _data_font__WEBPACK_IMPORTED_MODULE_2__.Font.getAdvance(defaultFont, size, symbol, symbolNext) + letterSpacing;
          context2d.fillText(symbol, x, y + symbolSize);
          x += advance;
        }
      }
    } else {
      var _y = 0;

      if (height) {
        var alignVerticalValue = _data_format__WEBPACK_IMPORTED_MODULE_4__.TextFormat.getVerticalAlignValue(defaultTextFormat);
        _y = (height - metrics.height) * alignVerticalValue;

        if (_y < 0) {
          _y = 0;
        }
      }

      _y += offsetY;
      var lines = metrics.lines;

      for (var _i = 0; _i < lines.length; _i++) {
        var line = lines[_i];

        if (line.symbols.length) {
          var first = line.symbols[0];

          var _alignValue = _data_format__WEBPACK_IMPORTED_MODULE_4__.TextFormat.getAlignValue(first.format);

          var _x = (realWidth - line.width) * _alignValue;

          if (_x < 0) {
            _x = 0;
          }

          _x += offsetX;
          var symbols = line.symbols;
          var lineHeight = line.height * CORRECTION;

          for (var j = 0; j < symbols.length; j++) {
            var _symbol = symbols[j];
            var _size = _symbol.format.size;
            var alignSymbolValue = _data_format__WEBPACK_IMPORTED_MODULE_4__.TextFormat.getVerticalAlignValue(_symbol.format);

            var _symbolSize = _size * CORRECTION;

            var symbolFont = _data_font__WEBPACK_IMPORTED_MODULE_2__.Font.getFont(_symbol.format);
            context2d.font = _data_font__WEBPACK_IMPORTED_MODULE_2__.Font.getStyle(symbolFont, _size);
            context2d.fillStyle = _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_1__.CanvasPatterns.colorPattern(_symbol.format.color, _symbol.format.alpha, colorTransform);
            context2d.fillText(_symbol.symbol, _x, _y + _symbolSize + alignSymbolValue * (lineHeight - _symbolSize));
            _x += _symbol.advance;
          }
        }

        _y += line.height;
      }
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

/***/ "../../packages/text/dist/data/font.js":
/*!*********************************************!*\
  !*** ../../packages/text/dist/data/font.js ***!
  \*********************************************/
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
  function getStyle(font, size) {
    return font.name.replace('%', size.toString());
  }

  Font.getStyle = getStyle;

  function measureText(font, size, text) {
    context.font = getStyle(font, size);
    return context.measureText(text).width;
  }

  Font.measureText = measureText;

  function getCharWidth(font, _char) {
    var width = font.widths.get(_char);

    if (!width) {
      width = measureText(font, EM, _char);
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
      var widthTotal = measureText(font, EM, first + second);
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

  function getFont(format) {
    var name = '';

    if (format.bold) {
      name += 'bold ';
    }

    if (format.italic) {
      name += 'italic ';
    }

    name += "%px ".concat(format.font);
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
})(Font || (Font = {}));

/***/ }),

/***/ "../../packages/text/dist/data/format.js":
/*!***********************************************!*\
  !*** ../../packages/text/dist/data/format.js ***!
  \***********************************************/
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

  function combine(source, defaultFormat, result) {
    var _source$font, _source$size, _source$color, _source$alpha, _source$bold, _source$italic, _source$underline, _source$letterSpacing, _source$leading, _source$align, _source$verticalAlign;

    result.font = (_source$font = source === null || source === void 0 ? void 0 : source.font) !== null && _source$font !== void 0 ? _source$font : defaultFormat.font;
    result.size = (_source$size = source === null || source === void 0 ? void 0 : source.size) !== null && _source$size !== void 0 ? _source$size : defaultFormat.size;
    result.color = (_source$color = source === null || source === void 0 ? void 0 : source.color) !== null && _source$color !== void 0 ? _source$color : defaultFormat.color;
    result.alpha = (_source$alpha = source === null || source === void 0 ? void 0 : source.alpha) !== null && _source$alpha !== void 0 ? _source$alpha : defaultFormat.alpha;
    result.bold = (_source$bold = source === null || source === void 0 ? void 0 : source.bold) !== null && _source$bold !== void 0 ? _source$bold : defaultFormat.bold;
    result.italic = (_source$italic = source === null || source === void 0 ? void 0 : source.italic) !== null && _source$italic !== void 0 ? _source$italic : defaultFormat.italic;
    result.underline = (_source$underline = source === null || source === void 0 ? void 0 : source.underline) !== null && _source$underline !== void 0 ? _source$underline : defaultFormat.underline;
    result.letterSpacing = (_source$letterSpacing = source === null || source === void 0 ? void 0 : source.letterSpacing) !== null && _source$letterSpacing !== void 0 ? _source$letterSpacing : defaultFormat.letterSpacing;
    result.leading = (_source$leading = source === null || source === void 0 ? void 0 : source.leading) !== null && _source$leading !== void 0 ? _source$leading : defaultFormat.leading;
    result.align = (_source$align = source === null || source === void 0 ? void 0 : source.align) !== null && _source$align !== void 0 ? _source$align : defaultFormat.align;
    result.verticalAlign = (_source$verticalAlign = source === null || source === void 0 ? void 0 : source.verticalAlign) !== null && _source$verticalAlign !== void 0 ? _source$verticalAlign : defaultFormat.verticalAlign;
  }

  TextFormat.combine = combine;

  function copy(source, target) {
    target.font = source.font;
    target.size = source.size;
    target.color = source.color;
    target.alpha = source.alpha;
    target.bold = source.bold;
    target.italic = source.italic;
    target.underline = source.underline;
    target.letterSpacing = source.letterSpacing;
    target.leading = source.leading;
    target.align = source.align;
    target.verticalAlign = source.verticalAlign;
  }

  TextFormat.copy = copy;

  function getAlignValue(format) {
    switch (format === null || format === void 0 ? void 0 : format.align) {
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

  function getVerticalAlignValue(format) {
    switch (format === null || format === void 0 ? void 0 : format.verticalAlign) {
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

/***/ "../../packages/text/dist/data/metrics.js":
/*!************************************************!*\
  !*** ../../packages/text/dist/data/metrics.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextMetrics": () => (/* binding */ TextMetrics)
/* harmony export */ });
/* unused harmony export TextLine */
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./font */ "../../packages/text/dist/data/font.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format */ "../../packages/text/dist/data/format.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../text */ "../../packages/text/dist/text.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var defaultTextFormat = {};
var TextLine;

(function (TextLine) {
  function create() {
    return {
      symbols: [],
      width: 0,
      height: 0
    };
  }

  TextLine.create = create;

  function empty(line) {
    line.symbols.length = 0;
    line.width = 0;
    line.height = 0;
  }

  TextLine.empty = empty;

  function add(line, symbol) {
    line.symbols.push(symbol);
    line.width += symbol.advance;
    line.height = Math.max(line.height, symbol.format.size + symbol.format.leading);
  }

  TextLine.add = add;

  function concat(target, source) {
    if (source.symbols.length) {
      var _target$symbols;

      (_target$symbols = target.symbols).push.apply(_target$symbols, _toConsumableArray(source.symbols));

      target.width += source.width;
      target.height = Math.max(target.height, source.height);
    }
  }

  TextLine.concat = concat;

  function correctWidth(line) {
    var symbols = line.symbols;

    if (symbols.length) {
      var last = symbols[symbols.length - 1];

      if (/\s/.test(last.symbol)) {
        symbols.pop();
        line.width -= last.advance;
      }
    }
  }

  TextLine.correctWidth = correctWidth;

  function correctHeight(line) {
    var symbols = line.symbols;

    if (symbols.length) {
      var symbol = symbols[0];
      line.height -= symbol.format.leading;
    }
  }

  TextLine.correctHeight = correctHeight;
})(TextLine || (TextLine = {}));

var TextMetrics;

(function (TextMetrics) {
  function getSymbols(component) {
    var text = component.text;

    if (!text || !text.length) {
      return undefined;
    }

    _format__WEBPACK_IMPORTED_MODULE_1__.TextFormat.combine(component.format, _format__WEBPACK_IMPORTED_MODULE_1__.TextFormat.defaultTextFormat, defaultTextFormat);
    var symbols = [];

    if (typeof text === 'string') {
      var symbolFormat = {};
      _format__WEBPACK_IMPORTED_MODULE_1__.TextFormat.copy(defaultTextFormat, symbolFormat);
      var symbolFont = _font__WEBPACK_IMPORTED_MODULE_0__.Font.getFont(symbolFormat);

      for (var i = 0; i < text.length; i++) {
        var symbol = text[i];
        var symbolNext = text[i + 1];
        var advance = _font__WEBPACK_IMPORTED_MODULE_0__.Font.getAdvance(symbolFont, symbolFormat.size, symbol, symbolNext) + symbolFormat.letterSpacing;
        symbols.push({
          symbol: symbol,
          advance: advance,
          format: symbolFormat
        });
      }
    } else if (Array.isArray(text)) {
      for (var _i = 0; _i < text.length; _i++) {
        var block = text[_i];

        if (typeof block === 'string') {
          var _symbolFormat = {};
          _format__WEBPACK_IMPORTED_MODULE_1__.TextFormat.copy(defaultTextFormat, _symbolFormat);

          var _symbolFont = _font__WEBPACK_IMPORTED_MODULE_0__.Font.getFont(_symbolFormat);

          for (var j = 0; j < block.length; j++) {
            var _symbol = block[j];
            var _symbolNext = block[j + 1];

            var _advance = _font__WEBPACK_IMPORTED_MODULE_0__.Font.getAdvance(_symbolFont, _symbolFormat.size, _symbol, _symbolNext) + _symbolFormat.letterSpacing;

            symbols.push({
              symbol: _symbol,
              advance: _advance,
              format: _symbolFormat
            });
          }
        } else {
          var _symbolFormat2 = {};
          _format__WEBPACK_IMPORTED_MODULE_1__.TextFormat.combine(block, defaultTextFormat, _symbolFormat2);

          var _symbolFont2 = _font__WEBPACK_IMPORTED_MODULE_0__.Font.getFont(_symbolFormat2);

          for (var _j = 0; _j < block.text.length; _j++) {
            var _symbol2 = block.text[_j];
            var _symbolNext2 = block.text[_j + 1];

            var _advance2 = _font__WEBPACK_IMPORTED_MODULE_0__.Font.getAdvance(_symbolFont2, _symbolFormat2.size, _symbol2, _symbolNext2) + _symbolFormat2.letterSpacing;

            symbols.push({
              symbol: _symbol2,
              advance: _advance2,
              format: _symbolFormat2
            });
          }
        }
      }
    }

    return symbols;
  }

  TextMetrics.getSymbols = getSymbols;

  function getLines(component) {
    var symbols = getSymbols(component);

    if (!symbols || !symbols.length) {
      return undefined;
    }

    var width = component.width,
        _component$wordWrap = component.wordWrap,
        wordWrap = _component$wordWrap === void 0 ? false : _component$wordWrap;
    var multiline = _text__WEBPACK_IMPORTED_MODULE_2__.Text.isMultiline(component);
    var lines = [];
    var line = TextLine.create();

    if (multiline) {
      if (width) {
        if (wordWrap) {
          var word = TextLine.create();

          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];

            if (symbol.symbol === '\n') {
              TextLine.concat(line, word);
              lines.push(line);
              line = TextLine.create();
              TextLine.empty(word);
            } else {
              TextLine.add(word, symbol);

              if (line.width + word.width > width) {
                lines.push(line);
                line = TextLine.create();
              } else if (/\s/.test(symbol.symbol)) {
                TextLine.concat(line, word);
                TextLine.empty(word);
              }
            }
          }

          TextLine.concat(line, word);
        } else {
          for (var _i2 = 0; _i2 < symbols.length; _i2++) {
            var _symbol3 = symbols[_i2];

            if (_symbol3.symbol === '\n') {
              lines.push(line);
              line = TextLine.create();
            } else if (line.width + _symbol3.advance > width) {
              lines.push(line);
              line = TextLine.create();
              TextLine.add(line, _symbol3);
            } else {
              TextLine.add(line, _symbol3);
            }
          }
        }
      } else {
        for (var _i3 = 0; _i3 < symbols.length; _i3++) {
          var _symbol4 = symbols[_i3];

          if (_symbol4.symbol === '\n') {
            lines.push(line);
            line = TextLine.create();
          } else {
            TextLine.add(line, _symbol4);
          }
        }
      }
    } else {
      for (var _i4 = 0; _i4 < symbols.length; _i4++) {
        var _symbol5 = symbols[_i4];
        TextLine.add(line, _symbol5);
      }
    }

    if (line.symbols.length) {
      lines.push(line);
    }

    if (lines.length) {
      for (var _i5 = 0; _i5 < lines.length; _i5++) {
        line = lines[_i5];
        TextLine.correctWidth(line);

        if (!line.height) {
          line.height = defaultTextFormat.size;
        }
      }

      line = lines[lines.length - 1];
      TextLine.correctHeight(line);
    }

    return lines;
  }

  TextMetrics.getLines = getLines;

  function getMetrics(component) {
    var lines = getLines(component);

    if (!lines || !lines.length) {
      return undefined;
    }

    var metrics = {
      lines: lines,
      width: 0,
      height: 0
    };

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      metrics.width = Math.max(metrics.width, line.width);
      metrics.height += line.height;
    }

    return metrics;
  }

  TextMetrics.getMetrics = getMetrics;

  function getSimpleMetrics(component) {
    var text = component.text;

    if (typeof text !== 'string') {
      return undefined;
    }

    _format__WEBPACK_IMPORTED_MODULE_1__.TextFormat.combine(component.format, _format__WEBPACK_IMPORTED_MODULE_1__.TextFormat.defaultTextFormat, defaultTextFormat);
    var size = defaultTextFormat.size,
        letterSpacing = defaultTextFormat.letterSpacing,
        leading = defaultTextFormat.leading;
    var font = _font__WEBPACK_IMPORTED_MODULE_0__.Font.getFont(defaultTextFormat);
    var width = 0;
    var height = size;
    var lineWidth = 0;

    for (var i = 0; i < text.length; i++) {
      var symbol = text[i];

      if (symbol === '\n') {
        height += size + leading;
        width = Math.max(width, lineWidth);
        lineWidth = 0;
      } else {
        var symbolNext = text[i + 1];
        var advance = _font__WEBPACK_IMPORTED_MODULE_0__.Font.getAdvance(font, size, symbol, symbolNext) + letterSpacing;
        lineWidth += advance;
      }
    }

    width = Math.max(width, lineWidth);
    return {
      width: width,
      height: height
    };
  }

  TextMetrics.getSimpleMetrics = getSimpleMetrics;

  function getSimpleWidth(format, text, index) {
    if (index >= text.length) {
      return 0;
    }

    _format__WEBPACK_IMPORTED_MODULE_1__.TextFormat.combine(format, _format__WEBPACK_IMPORTED_MODULE_1__.TextFormat.defaultTextFormat, defaultTextFormat);
    var size = defaultTextFormat.size,
        letterSpacing = defaultTextFormat.letterSpacing;
    var font = _font__WEBPACK_IMPORTED_MODULE_0__.Font.getFont(defaultTextFormat);
    var width = 0;

    for (var i = index; i < text.length; i++) {
      var symbol = text[i];

      if (symbol === '\n') {
        return width;
      }

      var symbolNext = text[i + 1];
      var advance = _font__WEBPACK_IMPORTED_MODULE_0__.Font.getAdvance(font, size, symbol, symbolNext) + letterSpacing;
      width += advance;
    }

    return width;
  }

  TextMetrics.getSimpleWidth = getSimpleWidth;
})(TextMetrics || (TextMetrics = {}));

/***/ }),

/***/ "../../packages/text/dist/index.js":
/*!*****************************************!*\
  !*** ../../packages/text/dist/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasTextExtension": () => (/* reexport safe */ _canvas_text__WEBPACK_IMPORTED_MODULE_4__.CanvasTextExtension)
/* harmony export */ });
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ "../../packages/text/dist/text.js");
/* harmony import */ var _data_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/format */ "../../packages/text/dist/data/format.js");
/* harmony import */ var _data_font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/font */ "../../packages/text/dist/data/font.js");
/* harmony import */ var _data_metrics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/metrics */ "../../packages/text/dist/data/metrics.js");
/* harmony import */ var _canvas_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./canvas/text */ "../../packages/text/dist/canvas/text.js");






/***/ }),

/***/ "../../packages/text/dist/text.js":
/*!****************************************!*\
  !*** ../../packages/text/dist/text.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TEXT": () => (/* binding */ TEXT),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "TextExtension": () => (/* binding */ TextExtension)
/* harmony export */ });
/* harmony import */ var _jeng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/core */ "../../packages/core/dist/index.js");
/* harmony import */ var _jeng_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jeng/geom */ "../../packages/geom/dist/index.js");
/* harmony import */ var _data_metrics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/metrics */ "../../packages/text/dist/data/metrics.js");



var TEXT = 'text';
var Text;

(function (Text) {
  function getText(component) {
    var text = component.text;

    if (!text) {
      return '';
    }

    if (typeof text === 'string') {
      return text;
    }

    if (Array.isArray(text)) {
      var result = '';

      for (var i = 0; i < text.length; i++) {
        var block = text[i];

        if (typeof block === 'string') {
          result += block;
        } else {
          result += block.text;
        }
      }

      return result;
    }

    return '';
  }

  Text.getText = getText;

  function isUpdateMetrics(component) {
    var _component$updateMetr;

    return (_component$updateMetr = component.updateMetrics) !== null && _component$updateMetr !== void 0 ? _component$updateMetr : true;
  }

  Text.isUpdateMetrics = isUpdateMetrics;

  function isAutoSize(component) {
    return !component.width && !component.height;
  }

  Text.isAutoSize = isAutoSize;

  function isSimple(component) {
    return typeof component.text === 'string' && isAutoSize(component);
  }

  Text.isSimple = isSimple;

  function isMultiline(component) {
    var _component$multiline;

    return (_component$multiline = component.multiline) !== null && _component$multiline !== void 0 ? _component$multiline : true;
  }

  Text.isMultiline = isMultiline;

  function updateMetrics(component) {
    if (isSimple(component)) {
      component.metrics = _data_metrics__WEBPACK_IMPORTED_MODULE_2__.TextMetrics.getSimpleMetrics(component);
    } else {
      component.metrics = _data_metrics__WEBPACK_IMPORTED_MODULE_2__.TextMetrics.getMetrics(component);
    }
  }

  Text.updateMetrics = updateMetrics;

  function calculateBounds(component, bounds) {
    if (isUpdateMetrics(component)) {
      updateMetrics(component);
    }

    var metrics = component.metrics;

    if (!metrics) {
      _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.setEmpty(bounds);
      return;
    }

    var width = component.width,
        height = component.height;

    if (!width) {
      width = metrics.width;
    }

    if (!height) {
      height = metrics.height;
    }

    var x = _jeng_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(component, width);
    var y = _jeng_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(component, height);
    bounds.x = x;
    bounds.y = y;
    bounds.width = width;
    bounds.height = height;
  }

  Text.calculateBounds = calculateBounds;
})(Text || (Text = {}));

var bounds = _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.empty();
var TextExtension;

(function (TextExtension) {
  function hitTest(text, engine) {
    var local = engine.pointers.local;
    Text.calculateBounds(text, bounds);
    return _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.contains(bounds, local);
  }

  TextExtension.hitTest = hitTest;

  function init(engine) {
    engine.components.hitTest.set(TEXT, hitTest);
  }

  TextExtension.init = init;
})(TextExtension || (TextExtension = {}));

/***/ }),

/***/ "../../packages/tween/dist/easing.js":
/*!*******************************************!*\
  !*** ../../packages/tween/dist/easing.js ***!
  \*******************************************/
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

/***/ "../../packages/tween/dist/index.js":
/*!******************************************!*\
  !*** ../../packages/tween/dist/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TweenExtension": () => (/* reexport safe */ _tween__WEBPACK_IMPORTED_MODULE_0__.TweenExtension)
/* harmony export */ });
/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tween */ "../../packages/tween/dist/tween.js");
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./easing */ "../../packages/tween/dist/easing.js");



/***/ }),

/***/ "../../packages/tween/dist/tween.js":
/*!******************************************!*\
  !*** ../../packages/tween/dist/tween.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TweenExtension": () => (/* binding */ TweenExtension)
/* harmony export */ });
/* unused harmony export TWEEN */
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easing */ "../../packages/tween/dist/easing.js");

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
/* harmony export */   "TEST_CANVAS": () => (/* binding */ TEST_CANVAS),
/* harmony export */   "SCENE": () => (/* binding */ SCENE)
/* harmony export */ });
const ASSETS = 'assets/';
const ANIMALIST = 'id:animalist';
const ARCHER = 'id:archer';
const ANIMALIST_IMAGE = `${ASSETS}AnimalistFox1_image.png`;
const ARCHER_IMAGE = `${ASSETS}Archer2_hunter_image.png`;
const ABILITY_FOX = `${ASSETS}AnimalistAbility_Fox.png`;
const ABILITY_WOLF = `${ASSETS}AnimalistAbility_Wolf.png`;
const BACKGROUND = `${ASSETS}jungle_background.jpg`;
const TEST_CANVAS = 'test.canvas';
const SCENE = `${ASSETS}/scene.json`;


/***/ }),

/***/ "./src/engine/engine.ts":
/*!******************************!*\
  !*** ./src/engine/engine.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomEngine)
/* harmony export */ });
/* harmony import */ var _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/canvas-engine */ "../../packages/canvas-engine/dist/index.js");
/* harmony import */ var _jeng_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jeng/text */ "../../packages/text/dist/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ "./src/engine/image.ts");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform */ "./src/engine/platform.ts");




class CustomEngine extends _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasEngine {
    constructor(module = {}) {
        module.Platform = module.Platform ?? _platform__WEBPACK_IMPORTED_MODULE_2__.default;
        super(module);
        _jeng_text__WEBPACK_IMPORTED_MODULE_1__.CanvasTextExtension.init(this);
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
/* harmony import */ var _jeng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/core */ "../../packages/core/dist/index.js");
/* harmony import */ var _jeng_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jeng/image */ "../../packages/image/dist/index.js");


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
        const x = _jeng_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(image, width);
        const y = _jeng_core__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(image, height);
        context2d.globalAlpha = 1;
        context2d.fillStyle = '';
        context2d.strokeStyle = 'lightgray';
        context2d.strokeRect(x, y, width, height);
    }
    CustomImageExtension.render = render;
    function init(engine) {
        _jeng_image__WEBPACK_IMPORTED_MODULE_1__.ImageExtension.init(engine);
        engine.components.render.set(_jeng_image__WEBPACK_IMPORTED_MODULE_1__.IMAGE, render);
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
/* harmony import */ var _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/canvas-engine */ "../../packages/canvas-engine/dist/index.js");

class CustomPlatform extends _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPlatform {
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
/* harmony import */ var _jeng_resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/resources */ "../../packages/resources/dist/index.js");

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
                        resource = _jeng_resources__WEBPACK_IMPORTED_MODULE_0__.ImageResource.resolve(url, engine);
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
        format: {
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
/* harmony import */ var _jeng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/core */ "../../packages/core/dist/index.js");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets */ "./src/assets.ts");
/* harmony import */ var _artifact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artifact */ "./src/artifact.ts");
/* harmony import */ var _fps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fps */ "./src/fps.ts");
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unit */ "./src/unit.ts");
/* harmony import */ var _preloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preloader */ "./src/preloader.ts");






function main(parameters) {
    function onUnitClick(data) {
        data.health = Math.random();
        console.log('onUnitClick', data.name);
    }
    const content = {
        type: 'loader',
        visible: false,
        enabled: false,
        onLoaded() {
            console.log('background loaded');
            this.visible = true;
            this.enabled = true;
        },
        children: {
            background: {
                type: 'image',
                src: _assets__WEBPACK_IMPORTED_MODULE_1__.BACKGROUND,
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
                        stroke: { fill: 0x0000ff, thickness: 10 },
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
                    (0,_unit__WEBPACK_IMPORTED_MODULE_2__.unit)({
                        name: 'Archer', health: 1, image: _assets__WEBPACK_IMPORTED_MODULE_1__.ARCHER, onClick: onUnitClick,
                    }),
                    (0,_unit__WEBPACK_IMPORTED_MODULE_2__.unit)({
                        name: 'Animalist', health: 1, image: _assets__WEBPACK_IMPORTED_MODULE_1__.ANIMALIST, onClick: onUnitClick,
                    }),
                ],
            },
            artifact: {
                type: 'container',
                x: 300,
                y: 350,
                children: (0,_artifact__WEBPACK_IMPORTED_MODULE_3__.default)(),
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
                src: _assets__WEBPACK_IMPORTED_MODULE_1__.ABILITY_FOX,
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
                    src: _assets__WEBPACK_IMPORTED_MODULE_1__.ABILITY_WOLF,
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
            fps: (0,_fps__WEBPACK_IMPORTED_MODULE_4__.fps)(parameters),
        },
    };
    const preloaderInfo = {
        getWidth: parameters.getCanvasWidth,
        getHeight: parameters.getCanvasHeight,
        getProgress() {
            return _jeng_core__WEBPACK_IMPORTED_MODULE_0__.Loader.getLoadingProgress(content);
        },
    };
    return {
        type: 'container',
        children: {
            content,
            preloader: (0,_preloader__WEBPACK_IMPORTED_MODULE_5__.preloader)(preloaderInfo),
            scene: {
                type: 'scene', x: 300, src: _assets__WEBPACK_IMPORTED_MODULE_1__.SCENE,
            },
        },
        onUpdate() {
            const isLoaded = !this.children.content.visible;
            this.children.preloader.visible = isLoaded;
            this.children.preloader.enabled = isLoaded;
        },
        start() {
            console.log('start');
        },
    };
}


/***/ }),

/***/ "./src/preloader.ts":
/*!**************************!*\
  !*** ./src/preloader.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preloader": () => (/* binding */ preloader)
/* harmony export */ });
function preloader(info) {
    const height = 20;
    return {
        type: 'shape',
        scaleX: 1,
        y: info.getHeight() - height,
        data: {
            type: 'rectangle',
            width: 1,
            height,
            fill: 0xff0000,
        },
        onUpdate() {
            this.scaleX += (info.getWidth() * info.getProgress() - this.scaleX) / 2;
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
function onPropsUpdate(props, callback) {
    const copy = { ...props };
    return (time) => {
        let changed = false;
        for (const key in props) {
            if (props.hasOwnProperty(key)) {
                if (copy[key] !== props[key]) {
                    copy[key] = props[key];
                    changed = true;
                }
            }
        }
        if (changed) {
            callback(time);
        }
    };
}
function runOnPropsUpdate(props, component) {
    component.onUpdate = onPropsUpdate(props, component.onUpdate.bind(component));
}
function unit(props) {
    function getTitle() {
        return `${props.name}\n${Math.round(props.health * 100)}%`;
    }
    const unitView = {
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
                format: {
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
    runOnPropsUpdate(props, unitView.children.text);
    return unitView;
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
/* harmony import */ var _jeng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/core */ "../../packages/core/dist/index.js");
/* harmony import */ var _jeng_tween__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jeng/tween */ "../../packages/tween/dist/index.js");
/* harmony import */ var _jeng_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jeng/text */ "../../packages/text/dist/index.js");
/* harmony import */ var _jeng_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jeng/image */ "../../packages/image/dist/index.js");
/* harmony import */ var _jeng_shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jeng/shape */ "../../packages/shape/dist/index.js");
/* harmony import */ var _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jeng/canvas-engine */ "../../packages/canvas-engine/dist/index.js");
/* harmony import */ var _jeng_scene__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jeng/scene */ "../../packages/scene/dist/index.js");
/* harmony import */ var _engine_resources__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./engine/resources */ "./src/engine/resources.ts");
/* harmony import */ var _engine_engine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./engine/engine */ "./src/engine/engine.ts");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main */ "./src/main.ts");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets */ "./src/assets.ts");











document.body.style.margin = '0';
document.body.style.padding = '0';
const engine = new _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_5__.CanvasEngine();
_jeng_image__WEBPACK_IMPORTED_MODULE_3__.CanvasImageColorExtension.init(engine);
_jeng_text__WEBPACK_IMPORTED_MODULE_2__.CanvasTextExtension.init(engine);
_jeng_shape__WEBPACK_IMPORTED_MODULE_4__.CanvasShapeExtension.init(engine);
_jeng_tween__WEBPACK_IMPORTED_MODULE_1__.TweenExtension.init(engine);
_jeng_scene__WEBPACK_IMPORTED_MODULE_6__.SceneExtension.init(engine);
_jeng_core__WEBPACK_IMPORTED_MODULE_0__.MouseExtension.init(engine);
engine.screen.fullscreen = true;
engine.ticker.play();
document.body.appendChild(engine.platform.view);
const parameters = {
    getUpdateTime() {
        return engine.updater.elapsedTime;
    },
    getRenderTime() {
        return engine.renderer.elapsedTime;
    },
    getCanvasWidth() {
        return engine.screen.getWidth();
    },
    getCanvasHeight() {
        return engine.screen.getHeight();
    },
};
const app = (0,_main__WEBPACK_IMPORTED_MODULE_7__.default)(parameters);
app.start();
engine.root = app;
console.log(app);
setTimeout(() => engine.ticker.pause(), 5000);
setTimeout(() => engine.ticker.play(), 10000);
const customEngine = new _engine_engine__WEBPACK_IMPORTED_MODULE_8__.default();
customEngine.screen.fullscreen = false;
customEngine.screen.height = 600;
customEngine.updater.enabled = false;
customEngine.root = engine.root;
customEngine.ticker.play();
customEngine.platform.view.style.position = 'absolute';
customEngine.platform.view.style.top = '0px';
customEngine.platform.view.style.left = '600px';
document.body.appendChild(customEngine.platform.view);
engine.resources.resources.set(_assets__WEBPACK_IMPORTED_MODULE_9__.TEST_CANVAS, {
    asset: _assets__WEBPACK_IMPORTED_MODULE_9__.TEST_CANVAS,
    image: customEngine.platform.view,
    loaded: true,
});
customEngine.resources.resources.set(_assets__WEBPACK_IMPORTED_MODULE_9__.TEST_CANVAS, {
    asset: _assets__WEBPACK_IMPORTED_MODULE_9__.TEST_CANVAS,
    image: engine.platform.view,
    loaded: true,
});
const resourceManager = new _engine_resources__WEBPACK_IMPORTED_MODULE_10__.default();
resourceManager.aliases.set(_assets__WEBPACK_IMPORTED_MODULE_9__.ARCHER.replace('id:', ''), _assets__WEBPACK_IMPORTED_MODULE_9__.ARCHER_IMAGE);
resourceManager.aliases.set(_assets__WEBPACK_IMPORTED_MODULE_9__.ANIMALIST.replace('id:', ''), _assets__WEBPACK_IMPORTED_MODULE_9__.ANIMALIST_IMAGE);
resourceManager.init(engine);
resourceManager.init(customEngine);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jYW52YXMtZW5naW5lL2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NhbnZhcy1lbmdpbmUvZGlzdC9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvY29tcG9uZW50cy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9jb3JlL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvcmUvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvcGl2b3QuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9leHRlbnNpb25zL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9leHRlbnNpb25zL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvdXBkYXRlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL2RlYnVnLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvcG9pbnRlcnMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3RpY2tlci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3VwZGF0ZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ludGVyYWN0aXZlL21vdXNlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvaW50ZXJhY3RpdmUvdG91Y2guanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9ib3VuZHMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9jb2xvci10cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L21hdHJpeC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L3BvaW50LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9pbWFnZS9kaXN0L2NhbnZhcy1pbWFnZS1jb2xvci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvaW1hZ2UvZGlzdC9jYW52YXMtaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3Jlc291cmNlcy9kaXN0L2ltYWdlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9yZXNvdXJjZXMvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvcmVzb3VyY2VzL2Rpc3Qvc3RyaW5nLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zY2VuZS9kaXN0L3NjZW5lLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9lbGxpcHNlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9wYXRoLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvY2FudmFzL3NoYXBlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvY2FudmFzL3N0eWxlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2RhdGEvZGF0YS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9kYXRhL3BhdGguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvZGF0YS9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvZ3JhcGhpY3MuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3Qvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC9jYW52YXMvdGV4dC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2RhdGEvZm9udC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2RhdGEvZm9ybWF0LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvZGF0YS9tZXRyaWNzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC90ZXh0LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90d2Vlbi9kaXN0L2Vhc2luZy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdHdlZW4vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdHdlZW4vZGlzdC90d2Vlbi5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvYXJ0aWZhY3QudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2Fzc2V0cy50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvZW5naW5lL2VuZ2luZS50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvZW5naW5lL2ltYWdlLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9lbmdpbmUvcGxhdGZvcm0udHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2VuZ2luZS9yZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2Zwcy50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvcHJlbG9hZGVyLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy91bml0LnRzIiwid2VicGFjazovL3NhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zYW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJDYW52YXNFbmdpbmUiLCJtb2R1bGUiLCJQbGF0Zm9ybSIsIkNhbnZhc1BsYXRmb3JtIiwiRW5naW5lIiwiQ2FudmFzUGF0dGVybnMiLCJjb2xvclBhdHRlcm4iLCJjb2xvciIsImFscGhhIiwiY3QiLCJyIiwiZyIsImIiLCJhIiwiQ29sb3JUcmFuc2Zvcm0iLCJyZWRNdWx0aXBsaWVyIiwicmVkT2Zmc2V0IiwiZ3JlZW5NdWx0aXBsaWVyIiwiZ3JlZW5PZmZzZXQiLCJibHVlTXVsdGlwbGllciIsImJsdWVPZmZzZXQiLCJhbHBoYU11bHRpcGxpZXIiLCJhbHBoYU9mZnNldCIsImFkZEdyYWRpZW50Q29sb3JzIiwicGF0dGVybiIsImNvbG9ycyIsImFscGhhcyIsInJhdGlvcyIsImNvbG9yVHJhbnNmb3JtIiwiaSIsImxlbmd0aCIsInJhdGlvIiwiY29sb3JTdHlsZSIsImFkZENvbG9yU3RvcCIsInJhZGlhbEdyYWRpZW50UGF0dGVybiIsImJlZ2luWCIsImJlZ2luWSIsImJlZ2luUmFkaXVzIiwiZW5kWCIsImVuZFkiLCJlbmRSYWRpdXMiLCJjb250ZXh0IiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJsaW5lYXJHcmFkaWVudFBhdHRlcm4iLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImJpdG1hcFBhdHRlcm4iLCJpbWFnZSIsInJlcGVhdCIsIm1hdHJpeCIsImNyZWF0ZVBhdHRlcm4iLCJkb21NYXRyaXgiLCJET01NYXRyaXgiLCJjIiwiZCIsImUiLCJ0eCIsImYiLCJ0eSIsInNldFRyYW5zZm9ybSIsImFyZ3VtZW50cyIsInZpZXciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0cyIsImdldENvbnRleHQiLCJjdXN0b21Db250ZXh0cyIsInB1c2giLCJwb3AiLCJlbmdpbmUiLCJkZWJ1ZyIsIndhcm5pbmciLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImNsZWFyIiwidXBkYXRlU2l6ZSIsImNsZWFyUmVjdCIsInNjcmVlbiIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwicGl4ZWxSYXRpbyIsImdldFBpeGVsUmF0aW8iLCJ2aWV3V2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJ2aWV3SGVpZ2h0Iiwic3R5bGUiLCJDT05UQUlORVIiLCJDb250YWluZXIiLCJudW1DaGlsZHJlbiIsImNvbnRhaW5lciIsImNoaWxkcmVuIiwiQXJyYXkiLCJpc0FycmF5IiwidHlwZSIsImtleXMiLCJPYmplY3QiLCJDb250YWluZXJFeHRlbnNpb24iLCJyZW5kZXIiLCJyZW5kZXJlciIsImRlcHRoIiwiY29tcG9uZW50IiwicmVuZGVyQ29tcG9uZW50IiwiY29tcG9uZW50c01hcCIsInVwZGF0ZSIsInVwZGF0ZXIiLCJ1cGRhdGVDb21wb25lbnQiLCJoaXRUZXN0IiwicG9pbnRlcnMiLCJyZXN1bHQiLCJkaXNwYXRjaENvbXBvbmVudCIsImxvYWRlZCIsImxvYWRpbmciLCJwcm9ncmVzcyIsImNvbXBvbmVudENvbnRleHQiLCJpbml0IiwiY29tcG9uZW50cyIsInNldCIsIkxPQURFUiIsIkxvYWRlciIsImdldExvYWRpbmdQcm9ncmVzcyIsImxvYWRlciIsImxvYWRpbmdQcm9ncmVzcyIsImlzTG9hZGVkIiwibmVlZExvYWRpbmdDaGVjayIsImxvYWRpbmdDaGVjayIsIkxvYWRlckV4dGVuc2lvbiIsIm9uTG9hZGVkIiwiQ29tcG9uZW50cyIsIlNjcmVlbiIsIlVwZGF0ZXIiLCJMb2FkaW5nIiwiUmVuZGVyZXIiLCJQb2ludGVycyIsIlRpY2tlciIsIkRlYnVnIiwiUmVzb3VyY2VzIiwicGxhdGZvcm0iLCJ0aWNrZXIiLCJyZXNvdXJjZXMiLCJFbmdpbmVGZWF0dXJlIiwiRGlzcGxheSIsImlzVmlzaWJsZSIsInZpc2libGUiLCJQaXZvdCIsImdldFgiLCJwaXZvdCIsInBpdm90WCIsImdldFkiLCJwaXZvdFkiLCJoYXNWYWx1ZXMiLCJoYW5kbGVyc01hcCIsInBvaW50ZXJEb3duIiwicG9pbnRlclVwIiwicG9pbnRlck1vdmUiLCJwb2ludGVyQ2FuY2VsIiwicG9pbnRlck92ZXIiLCJwb2ludGVyT3V0IiwiUG9pbnRlciIsImlzUG9pbnRlck92ZXIiLCJwb2ludGVyIiwiaXNQb2ludGVyRW5hYmxlZCIsInBvaW50ZXJFbmFibGVkIiwiZGlzcGF0Y2hFdmVudCIsIngiLCJ5IiwiZ2xvYmFsWCIsImdsb2JhbFkiLCJpZCIsImhhbmRsZXJOYW1lIiwiZXZlbnQiLCJUcmFuc2Zvcm0iLCJnZXRNYXRyaXgiLCJ0cmFuc2Zvcm0iLCJyb3RhdGlvbiIsInNjYWxlWCIsInNjYWxlIiwic2NhbGVZIiwiY29zIiwic2luIiwiZ2V0Q29sb3JUcmFuc2Zvcm0iLCJ0aW50IiwidmFsdWUiLCJ2YWx1ZUludmVydGVkIiwiYnJpZ2h0bmVzcyIsInVuZGVmaW5lZCIsInBlcmNlbnQiLCJhYnMiLCJvZmZzZXQiLCJVcGRhdGUiLCJpc0VuYWJsZWQiLCJlbmFibGVkIiwidGltZSIsIm9uVXBkYXRlIiwicHJvcGVydGllcyIsIk1hcCIsImVycm9ycyIsIndhcm5pbmdzIiwiY29uc29sZSIsImxvZyIsImFyZ3MiLCJTdHJpbmciLCJjb3VudCIsImdldCIsImVycm9yIiwid2FybiIsImVsYXBzZWRUaW1lIiwiaGFuZGxlciIsInJvb3QiLCJzdGFydFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImdsb2JhbCIsIlBvaW50IiwibG9jYWwiLCJwb2ludGVySWQiLCJwb2ludGVyVHlwZSIsIk1hdHJpeCIsImJhc2UiLCJwYXJlbnQiLCJwYXJlbnRSZXN1bHQiLCJ1cGRhdGVMb2NhbCIsImJlZ2luIiwiZW5kIiwiUmVzb3VyY2UiLCJnZXRQcm9ncmVzcyIsInJlc291cmNlIiwiYnl0ZXNUb3RhbCIsImJ5dGVzTG9hZGVkIiwicmVzb2x2ZXJzIiwiU2V0IiwiYXNzZXQiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdWxsc2NyZWVuIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZGV2aWNlUGl4ZWxSYXRpbyIsImZyYW1lUmF0ZSIsInBhdXNlZCIsInVwZGF0ZUZyYW1lIiwiY3VycmVudFRpbWUiLCJkZWx0YVRpbWUiLCJ1cGRhdGVOZXh0RnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGVQcm9wZXJ0aWVzIiwiZm9yRWFjaCIsInByb3BlcnR5IiwiY2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50TGVmdCIsImNsaWVudFkiLCJ0b3AiLCJjbGllbnRUb3AiLCJkaXNwYXRjaCIsInByZXZlbnREZWZhdWx0IiwiTW91c2VFeHRlbnNpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiY2hhbmdlZFRvdWNoZXMiLCJ0b3VjaCIsImlkZW50aWZpZXIiLCJUb3VjaEV4dGVuc2lvbiIsIkJvdW5kcyIsImVtcHR5IiwibWluWCIsIk51bWJlciIsIk1BWF9WQUxVRSIsIm1pblkiLCJtYXhYIiwiTUlOX1ZBTFVFIiwibWF4WSIsInNldEVtcHR5IiwiYm91bmRzIiwiaXNFbXB0eSIsInRvUmVjdGFuZ2xlIiwicmVjdGFuZ2xlIiwidGVzdFgiLCJ0ZXN0WSIsInRlc3QiLCJ0ZXN0UG9pbnQiLCJwb2ludCIsImlzRW1wdHlXaXRoQWxwaGEiLCJjb3B5IiwiZnJvbSIsInRvIiwiY29uY2F0IiwiY3QxIiwiY3QwIiwibWF0cml4MCIsIm1hdHJpeDEiLCJnZXREZXRlcm1pbmFudCIsImludmVydCIsImRldGVybWluYW50IiwidHJhbnNmb3JtUG9pbnQiLCJ0cmFuc2Zvcm1Qb2ludExvY2FsIiwidHJhbnNmb3JtSW52ZXJzZVBvaW50IiwidHJhbnNmb3JtQm91bmRzIiwicngiLCJyeSIsInJyIiwicmIiLCJueDEiLCJueTEiLCJueDIiLCJueTIiLCJueDMiLCJueTMiLCJueDQiLCJueTQiLCJyaWdodCIsImJvdHRvbSIsInNxcnQiLCJhbmdsZSIsImF0YW4yIiwiZXF1YWxzIiwicG9pbnQwIiwicG9pbnQxIiwic291cmNlIiwidGFyZ2V0Iiwibm9ybWFsaXplIiwidGhpY2tuZXNzIiwiZGlzdGFuY2UiLCJkeCIsImR5IiwiaW50ZXJwb2xhdGUiLCJwb2xhciIsIlJlY3RhbmdsZSIsImludGVyc2VjdGlvbiIsImNvbnRhaW5zIiwicm91bmQiLCJzY3JlZW5Cb3VuZHMiLCJDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uIiwic3JjIiwiY29udGV4dDJkIiwiZ2xvYmFsQWxwaGEiLCJkcmF3SW1hZ2UiLCJjdXN0b21Db250ZXh0IiwiY3JlYXRlQ3VzdG9tQ29udGV4dCIsImltYWdlRGF0YSIsImdldEltYWdlRGF0YSIsInJtIiwiZ20iLCJibSIsImFtIiwicm8iLCJnbyIsImJvIiwiYW8iLCJkYXRhIiwicHV0SW1hZ2VEYXRhIiwiZGVzdHJveUN1c3RvbUNvbnRleHQiLCJJbWFnZUV4dGVuc2lvbiIsIklNQUdFIiwiQ2FudmFzSW1hZ2VFeHRlbnNpb24iLCJJbWFnZSIsImNhbGN1bGF0ZUJvdW5kcyIsIkltYWdlUmVzb3VyY2UiLCJleHRlbnNpb24iLCJzcGxpdCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJhZGQiLCJTdHJpbmdSZXNvdXJjZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ucHJvZ3Jlc3MiLCJ0b3RhbCIsInJlc3BvbnNlVGV4dCIsInNlbmQiLCJTQ0VORSIsIlNjZW5lRXh0ZW5zaW9uIiwic2NlbmUiLCJKU09OIiwicGFyc2UiLCJtZXNzYWdlIiwiUElfMiIsIlBJIiwiYXBwbHlFbGxpcHNlIiwiaGFzRmlsbCIsInJhZGl1cyIsInJhZGl1c1giLCJyYWRpdXNZIiwiYmVnaW5QYXRoIiwiZWxsaXBzZSIsImNsb3NlUGF0aCIsImFwcGx5Q29tbWFuZCIsImNvbW1hbmQiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjdXJ2ZVRvIiwicXVhZHJhdGljQ3VydmVUbyIsImN4IiwiY3kiLCJjdWJpY0N1cnZlVG8iLCJiZXppZXJDdXJ2ZVRvIiwic3giLCJzeSIsImFwcGx5UGF0aCIsImFwcGx5UmVjdGFuZ2xlIiwicmVjdCIsInJlbmRlckdyYXBoaWNzIiwiZmlsbCIsInN0cm9rZSIsImhhc1N0cm9rZSIsImV4aXN0IiwicGF0aCIsImFwcGx5U3RyaW5nIiwic2V0RmlsbFN0eWxlIiwic2V0U3Ryb2tlU3R5bGUiLCJDYW52YXNTaGFwZUV4dGVuc2lvbiIsInNoYXBlIiwiU2hhcGUiLCJTaGFwZUV4dGVuc2lvbiIsIlNIQVBFIiwicmVhZGVyIiwiR3JhcGhpY3NTdHJpbmdSZWFkZXIiLCJzZXRQYXRoIiwicmVhZE5leHQiLCJnZXRDb21tYW5kIiwiZW1wdHlBcnJheSIsImVtcHR5TWF0cml4IiwiZ2V0Q2FudmFzUGF0dGVybiIsInNvbGlkIiwibGluZWFyIiwicmFkaWFsIiwiYml0bWFwRmlsbCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwibGluZUNhcCIsImxpbmVKb2luIiwibWl0ZXJMaW1pdCIsImNhcHMiLCJqb2ludHMiLCJSZWN0YW5nbGVEYXRhIiwiRWxsaXBzZURhdGEiLCJQYXRoRGF0YSIsInBhdGhEYXRhIiwiR3JhcGhpY3NTdHJpbmciLCJQYXRoQ29tbWFuZCIsIkdyYXBoaWNzRGF0YSIsIk5VTUJFUlNfQ09VTlQiLCJNIiwibSIsIkwiLCJsIiwiSCIsImgiLCJWIiwidiIsIkMiLCJTIiwicyIsIlEiLCJxIiwiVCIsInQiLCJDT01NQU5EX1JFR0VYIiwiTlVNQkVSX1JFR0VYIiwiR3JhcGhpY3NTdHJpbmdTdHJlYW0iLCJidWZmZXIiLCJzeW1ib2xSZWdleCIsImxhc3RJbmRleCIsInN5bWJvbE1hdGNoIiwiZXhlYyIsInN5bWJvbCIsIm51bWJlck1hdGNoIiwicGFyc2VGbG9hdCIsInN0cmVhbSIsImNvbW1hbmRFeGlzdHMiLCJsYXN0WCIsImxhc3RZIiwibGFzdENYIiwibGFzdENZIiwiZ2V0QnVmZmVyIiwiZTAiLCJlMSIsImUyIiwiZTMiLCJlNCIsImU1IiwidGVtcFBvaW50MCIsInRlbXBQb2ludDEiLCJHcmFwaGljcyIsInNtb290aCIsInBpeGVsSGludGluZyIsInNjYWxlTW9kZSIsImdldFBhdGgiLCJlbGxpcHNlV2lkdGgiLCJlbGxpcHNlSGVpZ2h0IiwidyIsImsiLCJveCIsIm95IiwieGUiLCJ5ZSIsInhtIiwieW0iLCJjcmVhdGVEYXRhIiwiZ3JhcGhpY3NEYXRhIiwiZGVmYXVsdFRleHRGb3JtYXQiLCJDT1JSRUNUSU9OIiwiQ2FudmFzVGV4dEV4dGVuc2lvbiIsIlRleHQiLCJtZXRyaWNzIiwiZm9ybWF0IiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsIlRleHRGb3JtYXQiLCJyZWFsV2lkdGgiLCJyZWFsSGVpZ2h0Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0ZXh0QmFzZWxpbmUiLCJzaW1wbGUiLCJ0ZXh0Iiwic2l6ZSIsImxlYWRpbmciLCJsZXR0ZXJTcGFjaW5nIiwiZGVmYXVsdEZvbnQiLCJGb250Iiwic3ltYm9sU2l6ZSIsImFsaWduVmFsdWUiLCJmb250IiwiVGV4dE1ldHJpY3MiLCJzeW1ib2xOZXh0IiwiYWR2YW5jZSIsImZpbGxUZXh0IiwiYWxpZ25WZXJ0aWNhbFZhbHVlIiwibGluZXMiLCJsaW5lIiwic3ltYm9scyIsImZpcnN0IiwibGluZUhlaWdodCIsImoiLCJhbGlnblN5bWJvbFZhbHVlIiwic3ltYm9sRm9udCIsIlRleHRFeHRlbnNpb24iLCJURVhUIiwiRU0iLCJmb250cyIsImdldFN0eWxlIiwibmFtZSIsInJlcGxhY2UiLCJ0b1N0cmluZyIsIm1lYXN1cmVUZXh0IiwiZ2V0Q2hhcldpZHRoIiwiY2hhciIsIndpZHRocyIsImdldEtlcm5pbmciLCJzZWNvbmQiLCJwYWlyIiwia2VybmluZyIsImtlcm5pbmdzIiwid2lkdGhTZWNvbmQiLCJ3aWR0aFRvdGFsIiwiZ2V0QWR2YW5jZSIsImdldEZvbnQiLCJib2xkIiwiaXRhbGljIiwidW5kZXJsaW5lIiwiYWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwiY29tYmluZSIsImRlZmF1bHRGb3JtYXQiLCJnZXRBbGlnblZhbHVlIiwiZ2V0VmVydGljYWxBbGlnblZhbHVlIiwiVGV4dExpbmUiLCJjcmVhdGUiLCJtYXgiLCJjb3JyZWN0V2lkdGgiLCJsYXN0IiwiY29ycmVjdEhlaWdodCIsImdldFN5bWJvbHMiLCJzeW1ib2xGb3JtYXQiLCJibG9jayIsImdldExpbmVzIiwid29yZFdyYXAiLCJtdWx0aWxpbmUiLCJ3b3JkIiwiZ2V0TWV0cmljcyIsImdldFNpbXBsZU1ldHJpY3MiLCJnZXRTaW1wbGVXaWR0aCIsImluZGV4IiwiZ2V0VGV4dCIsImlzVXBkYXRlTWV0cmljcyIsInVwZGF0ZU1ldHJpY3MiLCJpc0F1dG9TaXplIiwiaXNTaW1wbGUiLCJpc011bHRpbGluZSIsIkxJTkVBUiIsIlFVQURSQVRJQyIsIlFVQURSQVRJQ19JTiIsIlFVQURSQVRJQ19PVVQiLCJDVUJJQyIsIkNVQklDX0lOIiwiQ1VCSUNfT1VUIiwiUVVBUlRJQyIsIlFVQVJUSUNfSU4iLCJRVUFSVElDX09VVCIsIlFVSU5USUMiLCJRVUlOVElDX0lOIiwiUVVJTlRJQ19PVVQiLCJTSU5VU09JREFMIiwiU0lOVVNPSURBTF9JTiIsIlNJTlVTT0lEQUxfT1VUIiwiRVhQT05FTlRJQUwiLCJFWFBPTkVOVElBTF9JTiIsIkVYUE9ORU5USUFMX09VVCIsIkNJUkNVTEFSIiwiQ0lSQ1VMQVJfSU4iLCJDSVJDVUxBUl9PVVQiLCJFTEFTVElDIiwiRUxBU1RJQ19JTiIsIkVMQVNUSUNfT1VUIiwiQkFDSyIsIkJBQ0tfSU4iLCJCQUNLX09VVCIsIkJPVU5DRSIsIkJPVU5DRV9JTiIsIkJPVU5DRV9PVVQiLCJlYXNpbmciLCJwb3ciLCJUV0VFTiIsIlR3ZWVuRXh0ZW5zaW9uIiwidHdlZW4iLCJwaGFzZXMiLCJwaGFzZSIsImVhc2luZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImVhc2luZ01ldGhvZCIsImVhc2luZ1ZhbHVlIiwic3RhdGUiLCJrZXkiLCJmcm9tVmFsdWUiLCJ0b1ZhbHVlIiwic3RhdGVWYWx1ZSIsImxvb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTyxJQUFNQSxZQUFiO0FBQUE7O0FBQUE7O0FBQ0ksMEJBQXlCO0FBQUE7O0FBQUEsUUFBYkMsTUFBYSx1RUFBSixFQUFJOztBQUFBOztBQUNyQkEsVUFBTSxDQUFDQyxRQUFQLHVCQUFrQkQsTUFBTSxDQUFDQyxRQUF6QiwrREFBcUNDLHFEQUFyQztBQURxQiw2QkFFZkYsTUFGZTtBQUd4Qjs7QUFKTDtBQUFBLEVBQWtDRyw4Q0FBbEMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDTyxJQUFJQyxjQUFKOztBQUNQLENBQUMsVUFBVUEsY0FBVixFQUEwQjtBQUN2QixXQUFTQyxZQUFULENBQXNCQyxLQUF0QixFQUE2QkMsS0FBN0IsRUFBb0NDLEVBQXBDLEVBQXdDO0FBQ3BDLFFBQUlDLENBQUMsR0FBR0gsS0FBSyxJQUFJLEVBQVQsR0FBYyxJQUF0QjtBQUNBLFFBQUlJLENBQUMsR0FBR0osS0FBSyxJQUFJLENBQVQsR0FBYSxJQUFyQjtBQUNBLFFBQUlLLENBQUMsR0FBR0wsS0FBSyxHQUFHLElBQWhCO0FBQ0EsUUFBSU0sQ0FBQyxHQUFH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RUFDWDtJQUNDLEtBQUssRUFBRSxnREFBVztJQUNsQixLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJO0lBQzNCLE1BQU0sRUFBRSxJQUFJO0NBQ0ssQ0FDbEIsQ0FBQztBQUdGLE1BQU0sZUFBZSxHQUFHLElBQUksdURBQXFCLEVBQUUsQ0FBQztBQUNwRCxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBYyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxpREFBWSxDQUFDLENBQUM7QUFDckUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0RBQWlCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLG9EQUFlLENBQUMsQ0FBQztBQUMzRSxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBDYW52YXNQbGF0Zm9ybSB9IGZyb20gJy4vcGxhdGZvcm0nO1xuZXhwb3J0IGNsYXNzIENhbnZhc0VuZ2luZSBleHRlbmRzIEVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IobW9kdWxlID0ge30pIHtcbiAgICAgICAgbW9kdWxlLlBsYXRmb3JtID0gbW9kdWxlLlBsYXRmb3JtID8/IENhbnZhc1BsYXRmb3JtO1xuICAgICAgICBzdXBlcihtb2R1bGUpO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vcGF0dGVybnMnO1xuZXhwb3J0ICogZnJvbSAnLi9wbGF0Zm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2VuZ2luZSc7XG4iLCJpbXBvcnQgeyBDb2xvclRyYW5zZm9ybSB9IGZyb20gJ0BqZW5nL2dlb20nO1xuZXhwb3J0IHZhciBDYW52YXNQYXR0ZXJucztcbihmdW5jdGlvbiAoQ2FudmFzUGF0dGVybnMpIHtcbiAgICBmdW5jdGlvbiBjb2xvclBhdHRlcm4oY29sb3IsIGFscGhhLCBjdCkge1xuICAgICAgICBsZXQgciA9IGNvbG9yID4+IDE2ICYgMHhmZjtcbiAgICAgICAgbGV0IGcgPSBjb2xvciA+PiA4ICYgMHhmZjtcbiAgICAgICAgbGV0IGIgPSBjb2xvciAmIDB4ZmY7XG4gICAgICAgIGxldCBhID0gYWxwaGEgKiAweGZmO1xuICAgICAgICBpZiAoIUNvbG9yVHJhbnNmb3JtLmlzRW1wdHkoY3QpKSB7XG4gICAgICAgICAgICByID0gKHIgKiBjdC5yZWRNdWx0aXBsaWVyICsgY3QucmVkT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBnID0gKGcgKiBjdC5ncmVlbk11bHRpcGxpZXIgKyBjdC5ncmVlbk9mZnNldCkgJiAweGZmO1xuICAgICAgICAgICAgYiA9IChiICogY3QuYmx1ZU11bHRpcGxpZXIgKyBjdC5ibHVlT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBhID0gKGEgKiBjdC5hbHBoYU11bHRpcGxpZXIgKyBjdC5hbHBoYU9mZnNldCkgJiAweGZmO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhIDwgMHhmZikge1xuICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YSAvIDB4ZmZ9KWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4gPSBjb2xvclBhdHRlcm47XG4gICAgZnVuY3Rpb24gYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JzW2ldO1xuICAgICAgICAgICAgY29uc3QgYWxwaGEgPSBhbHBoYXNbaV07XG4gICAgICAgICAgICBsZXQgcmF0aW8gPSByYXRpb3NbaV07XG4gICAgICAgICAgICBpZiAocmF0aW8gPCAwKVxuICAgICAgICAgICAgICAgIHJhdGlvID0gMDtcbiAgICAgICAgICAgIGlmIChyYXRpbyA+IDEpXG4gICAgICAgICAgICAgICAgcmF0aW8gPSAxO1xuICAgICAgICAgICAgY29uc3QgY29sb3JTdHlsZSA9IGNvbG9yUGF0dGVybihjb2xvciwgYWxwaGEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIHBhdHRlcm4uYWRkQ29sb3JTdG9wKHJhdGlvLCBjb2xvclN0eWxlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5hZGRHcmFkaWVudENvbG9ycyA9IGFkZEdyYWRpZW50Q29sb3JzO1xuICAgIGZ1bmN0aW9uIHJhZGlhbEdyYWRpZW50UGF0dGVybihiZWdpblgsIGJlZ2luWSwgYmVnaW5SYWRpdXMsIGVuZFgsIGVuZFksIGVuZFJhZGl1cywgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoYmVnaW5YLCBiZWdpblksIGJlZ2luUmFkaXVzLCBlbmRYLCBlbmRZLCBlbmRSYWRpdXMpO1xuICAgICAgICBhZGRHcmFkaWVudENvbG9ycyhwYXR0ZXJuLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5yYWRpYWxHcmFkaWVudFBhdHRlcm4gPSByYWRpYWxHcmFkaWVudFBhdHRlcm47XG4gICAgZnVuY3Rpb24gbGluZWFyR3JhZGllbnRQYXR0ZXJuKGJlZ2luWCwgYmVnaW5ZLCBlbmRYLCBlbmRZLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVMaW5lYXJHcmFkaWVudChiZWdpblgsIGJlZ2luWSwgZW5kWCwgZW5kWSk7XG4gICAgICAgIGFkZEdyYWRpZW50Q29sb3JzKHBhdHRlcm4sIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmxpbmVhckdyYWRpZW50UGF0dGVybiA9IGxpbmVhckdyYWRpZW50UGF0dGVybjtcbiAgICBmdW5jdGlvbiBiaXRtYXBQYXR0ZXJuKGltYWdlLCByZXBlYXQsIG1hdHJpeCwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVQYXR0ZXJuKGltYWdlLCByZXBlYXQgPyAncmVwZWF0JyA6ICdub25lJyk7XG4gICAgICAgIGlmIChwYXR0ZXJuKSB7XG4gICAgICAgICAgICBjb25zdCBkb21NYXRyaXggPSBuZXcgRE9NTWF0cml4KCk7XG4gICAgICAgICAgICBkb21NYXRyaXguYSA9IG1hdHJpeC5hID8/IDE7XG4gICAgICAgICAgICBkb21NYXRyaXguYiA9IG1hdHJpeC5iID8/IDA7XG4gICAgICAgICAgICBkb21NYXRyaXguYyA9IG1hdHJpeC5jID8/IDA7XG4gICAgICAgICAgICBkb21NYXRyaXguZCA9IG1hdHJpeC5kID8/IDE7XG4gICAgICAgICAgICBkb21NYXRyaXguZSA9IG1hdHJpeC50eCA/PyAwO1xuICAgICAgICAgICAgZG9tTWF0cml4LmYgPSBtYXRyaXgudHkgPz8gMDtcbiAgICAgICAgICAgIHBhdHRlcm4uc2V0VHJhbnNmb3JtKGRvbU1hdHJpeCk7XG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmJpdG1hcFBhdHRlcm4gPSBiaXRtYXBQYXR0ZXJuO1xufSkoQ2FudmFzUGF0dGVybnMgfHwgKENhbnZhc1BhdHRlcm5zID0ge30pKTtcbiIsImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGplbmcvY29yZSc7XG5leHBvcnQgY2xhc3MgQ2FudmFzUGxhdGZvcm0gZXh0ZW5kcyBQbGF0Zm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW3RoaXMudmlldy5nZXRDb250ZXh0KCcyZCcpXTtcbiAgICAgICAgdGhpcy5jdXN0b21Db250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0c1t0aGlzLmNvbnRleHRzLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgICBzYXZlQ29udGV4dChjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dHMucHVzaChjb250ZXh0KTtcbiAgICB9XG4gICAgcmVzdG9yZUNvbnRleHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdUcnlpbmcgdG8gcmVzdG9yZSBtYWluIGNvbnRleHQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVDdXN0b21Db250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dDtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tQ29udGV4dHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gdGhpcy5jdXN0b21Db250ZXh0cy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy52aWV3O1xuICAgICAgICBpZiAoY29udGV4dC5jYW52YXMud2lkdGggIT09IHdpZHRoKSB7XG4gICAgICAgICAgICBjb250ZXh0LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZXh0LmNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgICAgICAgY29udGV4dC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICBkZXN0cm95Q3VzdG9tQ29udGV4dChjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY3VzdG9tQ29udGV4dHMucHVzaChjb250ZXh0KTtcbiAgICB9XG4gICAgYmVnaW4oKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdmlldy53aWR0aCwgdmlldy5oZWlnaHQpO1xuICAgIH1cbiAgICB1cGRhdGVTaXplKCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRXaWR0aCgpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0SGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW8gPSB0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0UGl4ZWxSYXRpbygpO1xuICAgICAgICBjb25zdCB2aWV3V2lkdGggPSBNYXRoLmZsb29yKHdpZHRoICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHZpZXdIZWlnaHQgPSBNYXRoLmZsb29yKGhlaWdodCAqIHBpeGVsUmF0aW8pO1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IHRoaXM7XG4gICAgICAgIGlmICh2aWV3LndpZHRoICE9PSB2aWV3V2lkdGggfHwgdmlldy5oZWlnaHQgIT09IHZpZXdIZWlnaHQpIHtcbiAgICAgICAgICAgIHZpZXcud2lkdGggPSB2aWV3V2lkdGg7XG4gICAgICAgICAgICB2aWV3LmhlaWdodCA9IHZpZXdIZWlnaHQ7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IENPTlRBSU5FUiA9ICdjb250YWluZXInO1xuZXhwb3J0IHZhciBDb250YWluZXI7XG4oZnVuY3Rpb24gKENvbnRhaW5lcikge1xuICAgIGZ1bmN0aW9uIG51bUNoaWxkcmVuKGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgcmV0dXJuIGtleXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBDb250YWluZXIubnVtQ2hpbGRyZW4gPSBudW1DaGlsZHJlbjtcbn0pKENvbnRhaW5lciB8fCAoQ29udGFpbmVyID0ge30pKTtcbmV4cG9ydCB2YXIgQ29udGFpbmVyRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDb250YWluZXJFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHJlbmRlcmVyIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJlci5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyB1cGRhdGVyIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgdXBkYXRlci5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlci5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi51cGRhdGUgPSB1cGRhdGU7XG4gICAgZnVuY3Rpb24gaGl0VGVzdChjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgcG9pbnRlcnMgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcG9pbnRlcnMuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgcG9pbnRlcnMuZGVwdGgrKztcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50ZXJzLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCwgcmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnRlcnMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0LCByZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0ga2V5cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnRlcnMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0LCByZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9pbnRlcnMuZGVwdGgtLTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBsb2FkaW5nIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgbG9hZGluZy5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gbG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzICs9IGNvbXBvbmVudENvbnRleHQucHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudENvbnRleHQubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzIC89IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBsb2FkaW5nLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGNvbXBvbmVudENvbnRleHQubG9hZGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgKz0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50Q29udGV4dC5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgLz0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvYWRpbmcuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5zZXQoQ09OVEFJTkVSLCB1cGRhdGUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KENPTlRBSU5FUiwgcmVuZGVyKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoQ09OVEFJTkVSLCBoaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChDT05UQUlORVIsIGxvYWRlZCk7XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENvbnRhaW5lckV4dGVuc2lvbiB8fCAoQ29udGFpbmVyRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IENvbnRhaW5lckV4dGVuc2lvbiB9IGZyb20gJy4vY29udGFpbmVyJztcbmV4cG9ydCBjb25zdCBMT0FERVIgPSAnbG9hZGVyJztcbmV4cG9ydCB2YXIgTG9hZGVyO1xuKGZ1bmN0aW9uIChMb2FkZXIpIHtcbiAgICBmdW5jdGlvbiBnZXRMb2FkaW5nUHJvZ3Jlc3MobG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZGluZ1Byb2dyZXNzID8/IDA7XG4gICAgfVxuICAgIExvYWRlci5nZXRMb2FkaW5nUHJvZ3Jlc3MgPSBnZXRMb2FkaW5nUHJvZ3Jlc3M7XG4gICAgZnVuY3Rpb24gaXNMb2FkZWQobG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZGVkID8/IGZhbHNlO1xuICAgIH1cbiAgICBMb2FkZXIuaXNMb2FkZWQgPSBpc0xvYWRlZDtcbiAgICBmdW5jdGlvbiBuZWVkTG9hZGluZ0NoZWNrKGxvYWRlcikge1xuICAgICAgICByZXR1cm4gbG9hZGVyLmxvYWRpbmdDaGVjayA/PyB0cnVlO1xuICAgIH1cbiAgICBMb2FkZXIubmVlZExvYWRpbmdDaGVjayA9IG5lZWRMb2FkaW5nQ2hlY2s7XG59KShMb2FkZXIgfHwgKExvYWRlciA9IHt9KSk7XG5leHBvcnQgdmFyIExvYWRlckV4dGVuc2lvbjtcbihmdW5jdGlvbiAoTG9hZGVyRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGxvYWRlciwgZW5naW5lKSB7XG4gICAgICAgIGlmICghTG9hZGVyLm5lZWRMb2FkaW5nQ2hlY2sobG9hZGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIENvbnRhaW5lckV4dGVuc2lvbi5sb2FkZWQobG9hZGVyLCBlbmdpbmUpO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLmxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICBsb2FkZXIubG9hZGluZ1Byb2dyZXNzID0gY29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgaWYgKGNvbnRleHQubG9hZGVkICYmICFsb2FkZXIubG9hZGVkKSB7XG4gICAgICAgICAgICBsb2FkZXIubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChsb2FkZXIub25Mb2FkZWQpIHtcbiAgICAgICAgICAgICAgICBsb2FkZXIub25Mb2FkZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBMb2FkZXJFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5zZXQoTE9BREVSLCBDb250YWluZXJFeHRlbnNpb24udXBkYXRlKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChMT0FERVIsIENvbnRhaW5lckV4dGVuc2lvbi5yZW5kZXIpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChMT0FERVIsIENvbnRhaW5lckV4dGVuc2lvbi5oaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChMT0FERVIsIGxvYWRlZCk7XG4gICAgfVxuICAgIExvYWRlckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKExvYWRlckV4dGVuc2lvbiB8fCAoTG9hZGVyRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vZmVhdHVyZXMvcmVuZGVyZXInO1xuaW1wb3J0IHsgVXBkYXRlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3VwZGF0ZXInO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4uL2ZlYXR1cmVzL2xvYWRpbmcnO1xuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi4vZmVhdHVyZXMvc2NyZWVuJztcbmltcG9ydCB7IFBvaW50ZXJzIH0gZnJvbSAnLi4vZmVhdHVyZXMvcG9pbnRlcnMnO1xuaW1wb3J0IHsgVGlja2VyIH0gZnJvbSAnLi4vZmVhdHVyZXMvdGlja2VyJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vZmVhdHVyZXMvcGxhdGZvcm0nO1xuaW1wb3J0IHsgQ29udGFpbmVyRXh0ZW5zaW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IHsgRGVidWcgfSBmcm9tICcuLi9mZWF0dXJlcy9kZWJ1Zyc7XG5pbXBvcnQgeyBSZXNvdXJjZXMgfSBmcm9tICcuLi9mZWF0dXJlcy9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4uL2ZlYXR1cmVzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkZXInO1xuZXhwb3J0IGNsYXNzIEVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IobW9kdWxlID0ge30pIHtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDMyO1xuICAgICAgICBtb2R1bGUuQ29tcG9uZW50cyA9IG1vZHVsZS5Db21wb25lbnRzID8/IENvbXBvbmVudHM7XG4gICAgICAgIG1vZHVsZS5TY3JlZW4gPSBtb2R1bGUuU2NyZWVuID8/IFNjcmVlbjtcbiAgICAgICAgbW9kdWxlLlBsYXRmb3JtID0gbW9kdWxlLlBsYXRmb3JtID8/IFBsYXRmb3JtO1xuICAgICAgICBtb2R1bGUuVXBkYXRlciA9IG1vZHVsZS5VcGRhdGVyID8/IFVwZGF0ZXI7XG4gICAgICAgIG1vZHVsZS5Mb2FkaW5nID0gbW9kdWxlLkxvYWRpbmcgPz8gTG9hZGluZztcbiAgICAgICAgbW9kdWxlLlJlbmRlcmVyID0gbW9kdWxlLlJlbmRlcmVyID8/IFJlbmRlcmVyO1xuICAgICAgICBtb2R1bGUuUG9pbnRlcnMgPSBtb2R1bGUuUG9pbnRlcnMgPz8gUG9pbnRlcnM7XG4gICAgICAgIG1vZHVsZS5UaWNrZXIgPSBtb2R1bGUuVGlja2VyID8/IFRpY2tlcjtcbiAgICAgICAgbW9kdWxlLkRlYnVnID0gbW9kdWxlLkRlYnVnID8/IERlYnVnO1xuICAgICAgICBtb2R1bGUuUmVzb3VyY2VzID0gbW9kdWxlLlJlc291cmNlcyA/PyBSZXNvdXJjZXM7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBtb2R1bGUuQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBtb2R1bGUuU2NyZWVuKCk7XG4gICAgICAgIHRoaXMucGxhdGZvcm0gPSBuZXcgbW9kdWxlLlBsYXRmb3JtKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZXIgPSBuZXcgbW9kdWxlLlVwZGF0ZXIodGhpcyk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IG5ldyBtb2R1bGUuTG9hZGluZyh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBtb2R1bGUuUmVuZGVyZXIodGhpcyk7XG4gICAgICAgIHRoaXMucG9pbnRlcnMgPSBuZXcgbW9kdWxlLlBvaW50ZXJzKHRoaXMpO1xuICAgICAgICB0aGlzLnRpY2tlciA9IG5ldyBtb2R1bGUuVGlja2VyKHRoaXMpO1xuICAgICAgICB0aGlzLmRlYnVnID0gbmV3IG1vZHVsZS5EZWJ1ZygpO1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IG5ldyBtb2R1bGUuUmVzb3VyY2VzKHRoaXMpO1xuICAgICAgICBDb250YWluZXJFeHRlbnNpb24uaW5pdCh0aGlzKTtcbiAgICAgICAgTG9hZGVyRXh0ZW5zaW9uLmluaXQodGhpcyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB9XG59XG4iLCJleHBvcnQgdmFyIERpc3BsYXk7XG4oZnVuY3Rpb24gKERpc3BsYXkpIHtcbiAgICBmdW5jdGlvbiBpc1Zpc2libGUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQudmlzaWJsZSA/PyB0cnVlO1xuICAgIH1cbiAgICBEaXNwbGF5LmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbn0pKERpc3BsYXkgfHwgKERpc3BsYXkgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBQaXZvdDtcbihmdW5jdGlvbiAoUGl2b3QpIHtcbiAgICBmdW5jdGlvbiBnZXRYKHBpdm90LCB3aWR0aCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WCB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFgpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RYICogd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFggPSBnZXRYO1xuICAgIGZ1bmN0aW9uIGdldFkocGl2b3QsIGhlaWdodCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WSB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFkpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RZICogaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBQaXZvdC5nZXRZID0gZ2V0WTtcbiAgICBmdW5jdGlvbiBoYXNWYWx1ZXMocGl2b3QpIHtcbiAgICAgICAgY29uc3QgeyBwaXZvdFgsIHBpdm90WSB9ID0gcGl2b3Q7XG4gICAgICAgIHJldHVybiAhIXBpdm90WCB8fCAhIXBpdm90WTtcbiAgICB9XG4gICAgUGl2b3QuaGFzVmFsdWVzID0gaGFzVmFsdWVzO1xufSkoUGl2b3QgfHwgKFBpdm90ID0ge30pKTtcbiIsImNvbnN0IGhhbmRsZXJzTWFwID0ge1xuICAgIHBvaW50ZXJEb3duOiAnb25Qb2ludGVyRG93bicsXG4gICAgcG9pbnRlclVwOiAnb25Qb2ludGVyVXAnLFxuICAgIHBvaW50ZXJNb3ZlOiAnb25Qb2ludGVyTW92ZScsXG4gICAgcG9pbnRlckNhbmNlbDogJ29uUG9pbnRlckNhbmNlbCcsXG4gICAgcG9pbnRlck92ZXI6ICdvblBvaW50ZXJPdmVyJyxcbiAgICBwb2ludGVyT3V0OiAnb25Qb2ludGVyT3V0Jyxcbn07XG5leHBvcnQgdmFyIFBvaW50ZXI7XG4oZnVuY3Rpb24gKFBvaW50ZXIpIHtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJPdmVyKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuICEhcG9pbnRlci5wb2ludGVyT3ZlcjtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJPdmVyID0gaXNQb2ludGVyT3ZlcjtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJFbmFibGVkKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50ZXIucG9pbnRlckVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkID0gaXNQb2ludGVyRW5hYmxlZDtcbiAgICBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KHBvaW50ZXIsIHR5cGUsIHgsIHksIGdsb2JhbFgsIGdsb2JhbFksIGlkKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJOYW1lID0gaGFuZGxlcnNNYXBbdHlwZV07XG4gICAgICAgIGlmIChoYW5kbGVyTmFtZSAmJiBwb2ludGVyW2hhbmRsZXJOYW1lXSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgICAgZ2xvYmFsWCxcbiAgICAgICAgICAgICAgICBnbG9iYWxZLFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHBvaW50ZXJbaGFuZGxlck5hbWVdKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xufSkoUG9pbnRlciB8fCAoUG9pbnRlciA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFRyYW5zZm9ybTtcbihmdW5jdGlvbiAoVHJhbnNmb3JtKSB7XG4gICAgZnVuY3Rpb24gZ2V0TWF0cml4KHRyYW5zZm9ybSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChtYXRyaXgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gbWF0cml4LmEgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gbWF0cml4LmIgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gbWF0cml4LmMgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gbWF0cml4LmQgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC50eCA9IG1hdHJpeC50eCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LnR5ID0gbWF0cml4LnR5ID8/IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb3RhdGlvbiB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBjb25zdCBzY2FsZVggPSB0cmFuc2Zvcm0uc2NhbGVYID8/IHRyYW5zZm9ybS5zY2FsZSA/PyAxO1xuICAgICAgICBjb25zdCBzY2FsZVkgPSB0cmFuc2Zvcm0uc2NhbGVZID8/IHRyYW5zZm9ybS5zY2FsZSA/PyAxO1xuICAgICAgICByZXN1bHQudHggPSB0cmFuc2Zvcm0ueCA/PyAwO1xuICAgICAgICByZXN1bHQudHkgPSB0cmFuc2Zvcm0ueSA/PyAwO1xuICAgICAgICBpZiAocm90YXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKHJvdGF0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKHJvdGF0aW9uKTtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gY29zICogc2NhbGVYO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSBzaW4gKiBzY2FsZVg7XG4gICAgICAgICAgICByZXN1bHQuYyA9IC1zaW4gKiBzY2FsZVk7XG4gICAgICAgICAgICByZXN1bHQuZCA9IGNvcyAqIHNjYWxlWTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYSA9IHNjYWxlWDtcbiAgICAgICAgcmVzdWx0LmIgPSAwO1xuICAgICAgICByZXN1bHQuYyA9IDA7XG4gICAgICAgIHJlc3VsdC5kID0gc2NhbGVZO1xuICAgIH1cbiAgICBUcmFuc2Zvcm0uZ2V0TWF0cml4ID0gZ2V0TWF0cml4O1xuICAgIGZ1bmN0aW9uIGdldENvbG9yVHJhbnNmb3JtKHRyYW5zZm9ybSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtKSB7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLnJlZE11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5ncmVlbk11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmJsdWVNdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLnJlZE9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5PZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFscGhhID0gdHJhbnNmb3JtLmFscGhhID8/IDE7XG4gICAgICAgIGNvbnN0IHsgdGludCB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAodGludCkge1xuICAgICAgICAgICAgY29uc3QgeyBjb2xvciA9IDAsIHZhbHVlID0gMSB9ID0gdGludDtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlSW52ZXJ0ZWQgPSAxIC0gdmFsdWU7XG4gICAgICAgICAgICBjb25zdCByID0gKGNvbG9yID4+IDE2KSAmIDB4ZmY7XG4gICAgICAgICAgICBjb25zdCBnID0gKGNvbG9yID4+IDgpICYgMHhmZjtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBjb2xvciAmIDB4ZmY7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGE7XG4gICAgICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHZhbHVlSW52ZXJ0ZWQ7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IHZhbHVlSW52ZXJ0ZWQ7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IHIgKiB2YWx1ZTtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IGcgKiB2YWx1ZTtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gYiAqIHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB7IGJyaWdodG5lc3MgfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKGJyaWdodG5lc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGJyaWdodG5lc3MgPiAxKSB7XG4gICAgICAgICAgICAgICAgYnJpZ2h0bmVzcyA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChicmlnaHRuZXNzIDwgLTEpIHtcbiAgICAgICAgICAgICAgICBicmlnaHRuZXNzID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gMSAtIE1hdGguYWJzKGJyaWdodG5lc3MpO1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgICAgICBpZiAoYnJpZ2h0bmVzcyA+IDApIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBicmlnaHRuZXNzICogMjU1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGFscGhhO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSBwZXJjZW50O1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IHBlcmNlbnQ7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSBwZXJjZW50O1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGE7XG4gICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IDA7XG4gICAgfVxuICAgIFRyYW5zZm9ybS5nZXRDb2xvclRyYW5zZm9ybSA9IGdldENvbG9yVHJhbnNmb3JtO1xufSkoVHJhbnNmb3JtIHx8IChUcmFuc2Zvcm0gPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBVcGRhdGU7XG4oZnVuY3Rpb24gKFVwZGF0ZSkge1xuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5lbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIFVwZGF0ZS5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbXBvbmVudCwgdGltZSkge1xuICAgICAgICBpZiAoY29tcG9uZW50Lm9uVXBkYXRlKSB7XG4gICAgICAgICAgICBjb21wb25lbnQub25VcGRhdGUodGltZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVXBkYXRlLnVwZGF0ZSA9IHVwZGF0ZTtcbn0pKFVwZGF0ZSB8fCAoVXBkYXRlID0ge30pKTtcbiIsImV4cG9ydCBjbGFzcyBDb21wb25lbnRzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlbmRlciA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy51cGRhdGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuaGl0VGVzdCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSBuZXcgTWFwKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIERlYnVnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMud2FybmluZ3MgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIGxvZyguLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gICAgfVxuICAgIGVycm9yKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5lcnJvcnMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICB0aGlzLmVycm9ycy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG4gICAgd2FybmluZyguLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoYXJncyk7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMud2FybmluZ3MuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMud2FybmluZ3Muc2V0KGlkLCBjb3VudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgTG9hZGluZyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdID0gY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQocm9vdCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB9XG4gICAgYmVnaW4oKSB7XG4gICAgfVxuICAgIGVuZCgpIHtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNYXRyaXgsIFBvaW50IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy9kaXNwbGF5JztcbmltcG9ydCB7IFBvaW50ZXIgfSBmcm9tICcuLi9leHRlbnNpb25zL3BvaW50ZXInO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgUG9pbnRlcnMgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2xvYmFsID0gUG9pbnQuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5sb2NhbCA9IFBvaW50LmVtcHR5KCk7XG4gICAgICAgIHRoaXMucG9pbnRlcklkID0gMDtcbiAgICAgICAgdGhpcy5wb2ludGVyVHlwZSA9ICdwb2ludGVyRG93bic7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgbWF0cml4OiBNYXRyaXguZW1wdHkoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdID0gY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgZGlzcGF0Y2godHlwZSwgeCwgeSwgaWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvY2FsLnggPSB4O1xuICAgICAgICB0aGlzLmxvY2FsLnkgPSB5O1xuICAgICAgICB0aGlzLmdsb2JhbC54ID0geDtcbiAgICAgICAgdGhpcy5nbG9iYWwueSA9IHk7XG4gICAgICAgIHRoaXMucG9pbnRlcklkID0gaWQ7XG4gICAgICAgIHRoaXMucG9pbnRlclR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgY29uc3QgYmFzZSA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBNYXRyaXguc2V0RW1wdHkoYmFzZS5tYXRyaXgpO1xuICAgICAgICB0aGlzLmRlcHRoKys7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDb21wb25lbnQocm9vdCwgYmFzZSwgZmFsc2UpO1xuICAgIH1cbiAgICB1cGRhdGVMb2NhbChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIFRyYW5zZm9ybS5nZXRNYXRyaXgoY29tcG9uZW50LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgIE1hdHJpeC5jb25jYXQocGFyZW50Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgTWF0cml4LnRyYW5zZm9ybUludmVyc2VQb2ludChjb250ZXh0Lm1hdHJpeCwgdGhpcy5nbG9iYWwsIHRoaXMubG9jYWwpO1xuICAgIH1cbiAgICBkaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIHBhcmVudCwgcGFyZW50UmVzdWx0KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIURpc3BsYXkuaXNWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVBvaW50ZXIuaXNQb2ludGVyRW5hYmxlZChjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudFJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5wb2ludGVyT3ZlciAmJiB0aGlzLnBvaW50ZXJUeXBlID09PSAncG9pbnRlck1vdmUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMb2NhbChjb21wb25lbnQsIHBhcmVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmxvY2FsO1xuICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3V0JywgeCwgeSwgdGhpcy5nbG9iYWwueCwgdGhpcy5nbG9iYWwueSwgdGhpcy5wb2ludGVySWQpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wb2ludGVyT3ZlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3QuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTG9jYWwoY29tcG9uZW50LCBwYXJlbnQpO1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmxvY2FsO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCB0aGlzLnBvaW50ZXJUeXBlLCB4LCB5LCB0aGlzLmdsb2JhbC54LCB0aGlzLmdsb2JhbC55LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludGVyVHlwZSA9PT0gJ3BvaW50ZXJNb3ZlJykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgIWNvbXBvbmVudC5wb2ludGVyT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCAncG9pbnRlck92ZXInLCB4LCB5LCB0aGlzLmdsb2JhbC54LCB0aGlzLmdsb2JhbC55LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFyZXN1bHQgJiYgY29tcG9uZW50LnBvaW50ZXJPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3V0JywgeCwgeSwgdGhpcy5nbG9iYWwueCwgdGhpcy5nbG9iYWwueSwgdGhpcy5wb2ludGVySWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnQucG9pbnRlck92ZXIgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb2xvclRyYW5zZm9ybSwgTWF0cml4IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy9kaXNwbGF5JztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdHJhbnNmb3JtJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBtYXRyaXg6IE1hdHJpeC5lbXB0eSgpLFxuICAgICAgICAgICAgICAgIGNvbG9yVHJhbnNmb3JtOiBDb2xvclRyYW5zZm9ybS5lbXB0eSgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICByZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBwYXJlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghRGlzcGxheS5pc1Zpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgVHJhbnNmb3JtLmdldENvbG9yVHJhbnNmb3JtKGNvbXBvbmVudCwgY29udGV4dC5jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIE1hdHJpeC5jb25jYXQocGFyZW50Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgQ29sb3JUcmFuc2Zvcm0uY29uY2F0KHBhcmVudC5jb2xvclRyYW5zZm9ybSwgY29udGV4dC5jb2xvclRyYW5zZm9ybSwgY29udGV4dC5jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMuZW5naW5lLnBsYXRmb3JtLmJlZ2luKCk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuZGVwdGgrKztcbiAgICAgICAgTWF0cml4LmNvcHkodGhpcy5lbmdpbmUuc2NyZWVuLmdldE1hdHJpeCgpLCBiYXNlLm1hdHJpeCk7XG4gICAgICAgIENvbG9yVHJhbnNmb3JtLnNldEVtcHR5KGJhc2UuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudChyb290LCBiYXNlKTtcbiAgICAgICAgdGhpcy5lbmdpbmUucGxhdGZvcm0uZW5kKCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCB2YXIgUmVzb3VyY2U7XG4oZnVuY3Rpb24gKFJlc291cmNlKSB7XG4gICAgZnVuY3Rpb24gZ2V0UHJvZ3Jlc3MocmVzb3VyY2UpIHtcbiAgICAgICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc291cmNlLmxvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc291cmNlLmJ5dGVzVG90YWwgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2UuYnl0ZXNMb2FkZWQgLyByZXNvdXJjZS5ieXRlc1RvdGFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBSZXNvdXJjZS5nZXRQcm9ncmVzcyA9IGdldFByb2dyZXNzO1xufSkoUmVzb3VyY2UgfHwgKFJlc291cmNlID0ge30pKTtcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZXMgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVzb2x2ZXJzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBnZXQoYXNzZXQpIHtcbiAgICAgICAgaWYgKCFhc3NldCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc291cmNlID0gdGhpcy5yZXNvdXJjZXMuZ2V0KGFzc2V0KTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICAgICAgcmVzb3VyY2UgPSB0aGlzLnJlc29sdmUoYXNzZXQpO1xuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXMuc2V0KGFzc2V0LCByZXNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgIH1cbiAgICByZXNvbHZlKGFzc2V0KSB7XG4gICAgICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gcmVzb2x2ZXIoYXNzZXQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBSZXNvdXJjZSBub3QgcmVzb2x2ZWQ6ICR7YXNzZXR9YCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1hdHJpeCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuZXhwb3J0IGNsYXNzIFNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSA0MDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDAwO1xuICAgICAgICB0aGlzLnBpeGVsUmF0aW8gPSAwO1xuICAgICAgICB0aGlzLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXRyaXggPSBNYXRyaXguZW1wdHkoKTtcbiAgICB9XG4gICAgZ2V0TWF0cml4KCkge1xuICAgICAgICBjb25zdCBwaXhlbFJhdGlvID0gdGhpcy5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIHRoaXMubWF0cml4LmEgPSBwaXhlbFJhdGlvO1xuICAgICAgICB0aGlzLm1hdHJpeC5kID0gcGl4ZWxSYXRpbztcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICAgIH1cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVsbHNjcmVlbiA/IHdpbmRvdy5pbm5lcldpZHRoIDogdGhpcy53aWR0aDtcbiAgICB9XG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuID8gd2luZG93LmlubmVySGVpZ2h0IDogdGhpcy5oZWlnaHQ7XG4gICAgfVxuICAgIGdldFBpeGVsUmF0aW8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpeGVsUmF0aW8gPiAwID8gdGhpcy5waXhlbFJhdGlvIDogd2luZG93LmRldmljZVBpeGVsUmF0aW8gPz8gMTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGlja2VyIHtcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICAgICAgdGhpcy5mcmFtZVJhdGUgPSAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnVwZGF0ZXIudXBkYXRlKHRpbWUpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUubG9hZGluZy51cGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlbmRlcmVyLnJlbmRlcigpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZUZyYW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IChjdXJyZW50VGltZSAtIHRoaXMudGltZSkgLyAxMDAwO1xuICAgICAgICAgICAgdGhpcy50aW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOZXh0RnJhbWUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgfVxuICAgIGdldCBpc1BhdXNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGF1c2VkO1xuICAgIH1cbiAgICBwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmV4dEZyYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHVwZGF0ZU5leHRGcmFtZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlRnJhbWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFVwZGF0ZSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdXBkYXRlJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFVwZGF0ZXIgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQocm9vdCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG4gICAgdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFVcGRhdGUuaXNFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoY29tcG9uZW50KTtcbiAgICAgICAgVXBkYXRlLnVwZGF0ZShjb21wb25lbnQsIHRoaXMudGltZSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVQcm9wZXJ0aWVzKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnByb3BlcnRpZXMuZm9yRWFjaCgoaGFuZGxlciwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRbcHJvcGVydHldKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9sb2FkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2VuZ2luZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL2NvbXBvbmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9kZWJ1Zyc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3BsYXRmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcG9pbnRlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9yZW5kZXJlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3Jlc291cmNlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3NjcmVlbic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3RpY2tlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3VwZGF0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmFjdGl2ZS9tb3VzZSc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyYWN0aXZlL3RvdWNoJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9kaXNwbGF5JztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9waXZvdCc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvcG9pbnRlcic7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvc291cmNlJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy90cmFuc2Zvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3VwZGF0ZSc7XG4iLCJmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsIHR5cGUpIHtcbiAgICBjb25zdCB7IHZpZXcgfSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICBjb25zdCBjbGllbnRSZWN0ID0gdmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIGNsaWVudFJlY3QubGVmdCAtIHZpZXcuY2xpZW50TGVmdDtcbiAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIGNsaWVudFJlY3QudG9wIC0gdmlldy5jbGllbnRUb3A7XG4gICAgZW5naW5lLnBvaW50ZXJzLmRpc3BhdGNoKHR5cGUsIHgsIHksIDApO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5leHBvcnQgdmFyIE1vdXNlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChNb3VzZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gZW5naW5lLnBsYXRmb3JtO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckRvd24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlclVwJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlck1vdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckNhbmNlbCcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgTW91c2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShNb3VzZUV4dGVuc2lvbiB8fCAoTW91c2VFeHRlbnNpb24gPSB7fSkpO1xuIiwiZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCB0eXBlKSB7XG4gICAgY29uc3QgeyB2aWV3IH0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgY29uc3QgY2xpZW50UmVjdCA9IHZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldO1xuICAgICAgICBjb25zdCB4ID0gdG91Y2guY2xpZW50WCAtIGNsaWVudFJlY3QubGVmdCAtIHZpZXcuY2xpZW50TGVmdDtcbiAgICAgICAgY29uc3QgeSA9IHRvdWNoLmNsaWVudFkgLSBjbGllbnRSZWN0LnRvcCAtIHZpZXcuY2xpZW50VG9wO1xuICAgICAgICBlbmdpbmUucG9pbnRlcnMuZGlzcGF0Y2godHlwZSwgeCwgeSwgdG91Y2guaWRlbnRpZmllcik7XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5leHBvcnQgdmFyIFRvdWNoRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChUb3VjaEV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gZW5naW5lLnBsYXRmb3JtO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJEb3duJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyVXAnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyTW92ZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckNhbmNlbCcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgVG91Y2hFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShUb3VjaEV4dGVuc2lvbiB8fCAoVG91Y2hFeHRlbnNpb24gPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBCb3VuZHM7XG4oZnVuY3Rpb24gKEJvdW5kcykge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWluWDogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG1pblk6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtYXhYOiBOdW1iZXIuTUlOX1ZBTFVFLFxuICAgICAgICAgICAgbWF4WTogTnVtYmVyLk1JTl9WQUxVRSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQm91bmRzLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkoYm91bmRzKSB7XG4gICAgICAgIGJvdW5kcy5taW5YID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1pblkgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWF4WCA9IE51bWJlci5NSU5fVkFMVUU7XG4gICAgICAgIGJvdW5kcy5tYXhZID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICB9XG4gICAgQm91bmRzLnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShib3VuZHMpIHtcbiAgICAgICAgcmV0dXJuIGJvdW5kcy5taW5YID09PSBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWluWSA9PT0gTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1heFggPT09IE51bWJlci5NSU5fVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5tYXhZID09PSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgIH1cbiAgICBCb3VuZHMuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gdG9SZWN0YW5nbGUoYm91bmRzLCByZWN0YW5nbGUpIHtcbiAgICAgICAgY29uc3QgeyBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB9ID0gYm91bmRzO1xuICAgICAgICByZWN0YW5nbGUueCA9IG1pblg7XG4gICAgICAgIHJlY3RhbmdsZS55ID0gbWluWTtcbiAgICAgICAgcmVjdGFuZ2xlLndpZHRoID0gbWF4WCAtIG1pblg7XG4gICAgICAgIHJlY3RhbmdsZS5oZWlnaHQgPSBtYXhZIC0gbWluWTtcbiAgICB9XG4gICAgQm91bmRzLnRvUmVjdGFuZ2xlID0gdG9SZWN0YW5nbGU7XG4gICAgZnVuY3Rpb24gdGVzdFgoYm91bmRzLCB4KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFggPSB0ZXN0WDtcbiAgICBmdW5jdGlvbiB0ZXN0WShib3VuZHMsIHkpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0WSA9IHRlc3RZO1xuICAgIGZ1bmN0aW9uIHRlc3QoYm91bmRzLCB4LCB5KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3QgPSB0ZXN0O1xuICAgIGZ1bmN0aW9uIHRlc3RQb2ludChib3VuZHMsIHBvaW50KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RQb2ludCA9IHRlc3RQb2ludDtcbn0pKEJvdW5kcyB8fCAoQm91bmRzID0ge30pKTtcbiIsImV4cG9ydCB2YXIgQ29sb3JUcmFuc2Zvcm07XG4oZnVuY3Rpb24gKENvbG9yVHJhbnNmb3JtKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbHBoYU11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICByZWRNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgZ3JlZW5NdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYmx1ZU11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBhbHBoYU9mZnNldDogMCxcbiAgICAgICAgICAgIHJlZE9mZnNldDogMCxcbiAgICAgICAgICAgIGdyZWVuT2Zmc2V0OiAwLFxuICAgICAgICAgICAgYmx1ZU9mZnNldDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KGN0KSB7XG4gICAgICAgIHJldHVybiBjdC5yZWRNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmJsdWVNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LnJlZE9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5PZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmJsdWVPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmFscGhhT2Zmc2V0ID09PSAwO1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5V2l0aEFscGhhKGN0KSB7XG4gICAgICAgIHJldHVybiBjdC5yZWRNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmJsdWVNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5yZWRPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmdyZWVuT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ibHVlT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU9mZnNldCA9PT0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eVdpdGhBbHBoYSA9IGlzRW1wdHlXaXRoQWxwaGE7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkoY3QpIHtcbiAgICAgICAgY3QucmVkTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LmdyZWVuTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LmJsdWVNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuYWxwaGFNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QucmVkT2Zmc2V0ID0gMDtcbiAgICAgICAgY3QuZ3JlZW5PZmZzZXQgPSAwO1xuICAgICAgICBjdC5ibHVlT2Zmc2V0ID0gMDtcbiAgICAgICAgY3QuYWxwaGFPZmZzZXQgPSAwO1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoZnJvbSwgdG8pIHtcbiAgICAgICAgdG8uYWxwaGFNdWx0aXBsaWVyID0gZnJvbS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIHRvLnJlZE11bHRpcGxpZXIgPSBmcm9tLnJlZE11bHRpcGxpZXI7XG4gICAgICAgIHRvLmdyZWVuTXVsdGlwbGllciA9IGZyb20uZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICB0by5ibHVlTXVsdGlwbGllciA9IGZyb20uYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIHRvLmFscGhhT2Zmc2V0ID0gZnJvbS5hbHBoYU9mZnNldDtcbiAgICAgICAgdG8ucmVkT2Zmc2V0ID0gZnJvbS5yZWRPZmZzZXQ7XG4gICAgICAgIHRvLmdyZWVuT2Zmc2V0ID0gZnJvbS5ncmVlbk9mZnNldDtcbiAgICAgICAgdG8uYmx1ZU9mZnNldCA9IGZyb20uYmx1ZU9mZnNldDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gY29uY2F0KGN0MSwgY3QwLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgYWxwaGFNdWx0aXBsaWVyID0gY3QxLmFscGhhTXVsdGlwbGllciAqIGN0MC5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IHJlZE11bHRpcGxpZXIgPSBjdDEucmVkTXVsdGlwbGllciAqIGN0MC5yZWRNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBncmVlbk11bHRpcGxpZXIgPSBjdDEuZ3JlZW5NdWx0aXBsaWVyICogY3QwLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgYmx1ZU11bHRpcGxpZXIgPSBjdDEuYmx1ZU11bHRpcGxpZXIgKiBjdDAuYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGFscGhhT2Zmc2V0ID0gY3QxLmFscGhhTXVsdGlwbGllciAqIGN0MC5hbHBoYU9mZnNldCArIGN0MS5hbHBoYU9mZnNldDtcbiAgICAgICAgY29uc3QgcmVkT2Zmc2V0ID0gY3QxLnJlZE11bHRpcGxpZXIgKiBjdDAucmVkT2Zmc2V0ICsgY3QxLnJlZE9mZnNldDtcbiAgICAgICAgY29uc3QgZ3JlZW5PZmZzZXQgPSBjdDEuZ3JlZW5NdWx0aXBsaWVyICogY3QwLmdyZWVuT2Zmc2V0ICsgY3QxLmdyZWVuT2Zmc2V0O1xuICAgICAgICBjb25zdCBibHVlT2Zmc2V0ID0gY3QxLmJsdWVNdWx0aXBsaWVyICogY3QwLmJsdWVPZmZzZXQgKyBjdDEuYmx1ZU9mZnNldDtcbiAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSByZWRNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSBibHVlTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gYWxwaGFPZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSByZWRPZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IGdyZWVuT2Zmc2V0O1xuICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGJsdWVPZmZzZXQ7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmNvbmNhdCA9IGNvbmNhdDtcbn0pKENvbG9yVHJhbnNmb3JtIHx8IChDb2xvclRyYW5zZm9ybSA9IHt9KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbG9yLXRyYW5zZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2JvdW5kcyc7XG5leHBvcnQgKiBmcm9tICcuL21hdHJpeCc7XG5leHBvcnQgKiBmcm9tICcuL3BvaW50JztcbmV4cG9ydCAqIGZyb20gJy4vcmVjdGFuZ2xlJztcbiIsImV4cG9ydCB2YXIgTWF0cml4O1xuKGZ1bmN0aW9uIChNYXRyaXgpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGE6IDEsXG4gICAgICAgICAgICBiOiAwLFxuICAgICAgICAgICAgYzogMCxcbiAgICAgICAgICAgIGQ6IDEsXG4gICAgICAgICAgICB0eDogMCxcbiAgICAgICAgICAgIHR5OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBNYXRyaXguZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KG1hdHJpeCkge1xuICAgICAgICByZXR1cm4gbWF0cml4LmEgPT09IDFcbiAgICAgICAgICAgICYmIG1hdHJpeC5iID09PSAwXG4gICAgICAgICAgICAmJiBtYXRyaXguYyA9PT0gMFxuICAgICAgICAgICAgJiYgbWF0cml4LmQgPT09IDFcbiAgICAgICAgICAgICYmIG1hdHJpeC50eCA9PT0gMFxuICAgICAgICAgICAgJiYgbWF0cml4LnR5ID09PSAwO1xuICAgIH1cbiAgICBNYXRyaXguaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkobWF0cml4KSB7XG4gICAgICAgIG1hdHJpeC5hID0gMTtcbiAgICAgICAgbWF0cml4LmIgPSAwO1xuICAgICAgICBtYXRyaXguYyA9IDA7XG4gICAgICAgIG1hdHJpeC5kID0gMTtcbiAgICAgICAgbWF0cml4LnR4ID0gMDtcbiAgICAgICAgbWF0cml4LnR5ID0gMDtcbiAgICB9XG4gICAgTWF0cml4LnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gY29weShmcm9tLCB0bykge1xuICAgICAgICB0by5hID0gZnJvbS5hO1xuICAgICAgICB0by5iID0gZnJvbS5iO1xuICAgICAgICB0by5jID0gZnJvbS5jO1xuICAgICAgICB0by5kID0gZnJvbS5kO1xuICAgICAgICB0by50eCA9IGZyb20udHg7XG4gICAgICAgIHRvLnR5ID0gZnJvbS50eTtcbiAgICB9XG4gICAgTWF0cml4LmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIGNvbmNhdChtYXRyaXgwLCBtYXRyaXgxLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgYSA9IG1hdHJpeDEuYSAqIG1hdHJpeDAuYSArIG1hdHJpeDEuYiAqIG1hdHJpeDAuYztcbiAgICAgICAgY29uc3QgYiA9IG1hdHJpeDEuYSAqIG1hdHJpeDAuYiArIG1hdHJpeDEuYiAqIG1hdHJpeDAuZDtcbiAgICAgICAgY29uc3QgYyA9IG1hdHJpeDEuYyAqIG1hdHJpeDAuYSArIG1hdHJpeDEuZCAqIG1hdHJpeDAuYztcbiAgICAgICAgY29uc3QgZCA9IG1hdHJpeDEuYyAqIG1hdHJpeDAuYiArIG1hdHJpeDEuZCAqIG1hdHJpeDAuZDtcbiAgICAgICAgY29uc3QgdHggPSBtYXRyaXgxLnR4ICogbWF0cml4MC5hICsgbWF0cml4MS50eSAqIG1hdHJpeDAuYyArIG1hdHJpeDAudHg7XG4gICAgICAgIGNvbnN0IHR5ID0gbWF0cml4MS50eCAqIG1hdHJpeDAuYiArIG1hdHJpeDEudHkgKiBtYXRyaXgwLmQgKyBtYXRyaXgwLnR5O1xuICAgICAgICByZXN1bHQuYSA9IGE7XG4gICAgICAgIHJlc3VsdC5iID0gYjtcbiAgICAgICAgcmVzdWx0LmMgPSBjO1xuICAgICAgICByZXN1bHQuZCA9IGQ7XG4gICAgICAgIHJlc3VsdC50eCA9IHR4O1xuICAgICAgICByZXN1bHQudHkgPSB0eTtcbiAgICB9XG4gICAgTWF0cml4LmNvbmNhdCA9IGNvbmNhdDtcbiAgICBmdW5jdGlvbiBnZXREZXRlcm1pbmFudChtYXRyaXgpIHtcbiAgICAgICAgcmV0dXJuIG1hdHJpeC5hICogbWF0cml4LmQgLSBtYXRyaXguYiAqIG1hdHJpeC5jO1xuICAgIH1cbiAgICBNYXRyaXguZ2V0RGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudDtcbiAgICBmdW5jdGlvbiBpbnZlcnQobWF0cml4LCByZXN1bHQpIHtcbiAgICAgICAgbGV0IGRldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KTtcbiAgICAgICAgaWYgKGRldGVybWluYW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQuYSA9IDA7XG4gICAgICAgICAgICByZXN1bHQuYiA9IDA7XG4gICAgICAgICAgICByZXN1bHQuYyA9IDA7XG4gICAgICAgICAgICByZXN1bHQuZCA9IDA7XG4gICAgICAgICAgICByZXN1bHQudHggPSAtbWF0cml4LnR4O1xuICAgICAgICAgICAgcmVzdWx0LnR5ID0gLW1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRldGVybWluYW50ID0gMS4wIC8gZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuYSA9IG1hdHJpeC5hICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuYiA9IC1tYXRyaXguYiAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAtbWF0cml4LmMgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gbWF0cml4LmQgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC50eCA9IC1yZXN1bHQuYSAqIG1hdHJpeC50eCAtIHJlc3VsdC5jICogbWF0cml4LnR5O1xuICAgICAgICAgICAgcmVzdWx0LnR5ID0gLXJlc3VsdC5iICogbWF0cml4LnR4IC0gcmVzdWx0LmQgKiBtYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTWF0cml4LmludmVydCA9IGludmVydDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmVzdWx0LnggPSB4ICogbWF0cml4LmEgKyB5ICogbWF0cml4LmMgKyBtYXRyaXgudHg7XG4gICAgICAgIHJlc3VsdC55ID0geCAqIG1hdHJpeC5iICsgeSAqIG1hdHJpeC5kICsgbWF0cml4LnR5O1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQgPSB0cmFuc2Zvcm1Qb2ludDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Qb2ludExvY2FsKG1hdHJpeCwgcG9pbnQsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICByZXN1bHQueCA9IHggKiBtYXRyaXguYSArIHkgKiBtYXRyaXguYztcbiAgICAgICAgcmVzdWx0LnkgPSB4ICogbWF0cml4LmIgKyB5ICogbWF0cml4LmQ7XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludExvY2FsID0gdHJhbnNmb3JtUG9pbnRMb2NhbDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1JbnZlcnNlUG9pbnQobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGxldCBkZXRlcm1pbmFudCA9IGdldERldGVybWluYW50KG1hdHJpeCk7XG4gICAgICAgIGlmIChkZXRlcm1pbmFudCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0LnggPSAtbWF0cml4LnR4O1xuICAgICAgICAgICAgcmVzdWx0LnkgPSAtbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGV0ZXJtaW5hbnQgPSAxIC8gZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICAgICAgcmVzdWx0LnggPSBkZXRlcm1pbmFudCAqIChtYXRyaXguYyAqIChtYXRyaXgudHkgLSB5KSArIG1hdHJpeC5kICogKHggLSBtYXRyaXgudHgpKTtcbiAgICAgICAgICAgIHJlc3VsdC55ID0gZGV0ZXJtaW5hbnQgKiAobWF0cml4LmEgKiAoeSAtIG1hdHJpeC50eSkgKyBtYXRyaXguYiAqIChtYXRyaXgudHggLSB4KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybUludmVyc2VQb2ludCA9IHRyYW5zZm9ybUludmVyc2VQb2ludDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Cb3VuZHMobWF0cml4LCBib3VuZHMsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGEsIGIsIGMsIGQsIHR4LCB0eSwgfSA9IG1hdHJpeDtcbiAgICAgICAgY29uc3QgcnggPSBib3VuZHMueDtcbiAgICAgICAgY29uc3QgcnkgPSBib3VuZHMueTtcbiAgICAgICAgY29uc3QgcnIgPSByeCArIGJvdW5kcy53aWR0aDtcbiAgICAgICAgY29uc3QgcmIgPSByeSArIGJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IG54MSA9IHJ4ICogYSArIHJ5ICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTEgPSByeCAqIGIgKyByeSAqIGQgKyB0eTtcbiAgICAgICAgY29uc3QgbngyID0gcnIgKiBhICsgcnkgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MiA9IHJyICogYiArIHJ5ICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDMgPSByciAqIGEgKyByYiAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkzID0gcnIgKiBiICsgcmIgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54NCA9IHJ4ICogYSArIHJiICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTQgPSByeCAqIGIgKyByYiAqIGQgKyB0eTtcbiAgICAgICAgbGV0IGxlZnQgPSBueDE7XG4gICAgICAgIGlmIChsZWZ0ID4gbngyKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbngyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0ID4gbngzKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbngzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0ID4gbng0KSB7XG4gICAgICAgICAgICBsZWZ0ID0gbng0O1xuICAgICAgICB9XG4gICAgICAgIGxldCB0b3AgPSBueTE7XG4gICAgICAgIGlmICh0b3AgPiBueTIpIHtcbiAgICAgICAgICAgIHRvcCA9IG55MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9wID4gbnkzKSB7XG4gICAgICAgICAgICB0b3AgPSBueTM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcCA+IG55NCkge1xuICAgICAgICAgICAgdG9wID0gbnk0O1xuICAgICAgICB9XG4gICAgICAgIGxldCByaWdodCA9IG54MTtcbiAgICAgICAgaWYgKHJpZ2h0IDwgbngyKSB7XG4gICAgICAgICAgICByaWdodCA9IG54MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgPCBueDMpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbngzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCA8IG54NCkge1xuICAgICAgICAgICAgcmlnaHQgPSBueDQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJvdHRvbSA9IG55MTtcbiAgICAgICAgaWYgKGJvdHRvbSA8IG55Mikge1xuICAgICAgICAgICAgYm90dG9tID0gbnkyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3R0b20gPCBueTMpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55MztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tIDwgbnk0KSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTQ7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnggPSBsZWZ0O1xuICAgICAgICByZXN1bHQueSA9IHRvcDtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgICAgICByZXN1bHQuaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtQm91bmRzID0gdHJhbnNmb3JtQm91bmRzO1xufSkoTWF0cml4IHx8IChNYXRyaXggPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBQb2ludDtcbihmdW5jdGlvbiAoUG9pbnQpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgIH1cbiAgICBQb2ludC5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGxlbmd0aChwb2ludCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH1cbiAgICBQb2ludC5sZW5ndGggPSBsZW5ndGg7XG4gICAgZnVuY3Rpb24gYW5nbGUocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIocG9pbnQueSwgcG9pbnQueCk7XG4gICAgfVxuICAgIFBvaW50LmFuZ2xlID0gYW5nbGU7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShwb2ludCkge1xuICAgICAgICByZXR1cm4gcG9pbnQueCA9PT0gMCAmJiBwb2ludC55ID09PSAwO1xuICAgIH1cbiAgICBQb2ludC5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBlcXVhbHMocG9pbnQwLCBwb2ludDEpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50MC54ID09PSBwb2ludDEueCAmJiBwb2ludDAueSA9PT0gcG9pbnQxLnk7XG4gICAgfVxuICAgIFBvaW50LmVxdWFscyA9IGVxdWFscztcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShwb2ludCkge1xuICAgICAgICBwb2ludC54ID0gMDtcbiAgICAgICAgcG9pbnQueSA9IDA7XG4gICAgfVxuICAgIFBvaW50LnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gY29weShzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICB0YXJnZXQueCA9IHNvdXJjZS54O1xuICAgICAgICB0YXJnZXQueSA9IHNvdXJjZS55O1xuICAgIH1cbiAgICBQb2ludC5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBub3JtYWxpemUocG9pbnQsIHRoaWNrbmVzcykge1xuICAgICAgICBsZXQgdmFsdWUgPSBsZW5ndGgocG9pbnQpO1xuICAgICAgICBpZiAodmFsdWUgPiAwKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaWNrbmVzcyAvIHZhbHVlO1xuICAgICAgICAgICAgcG9pbnQueCAqPSB2YWx1ZTtcbiAgICAgICAgICAgIHBvaW50LnkgKj0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUG9pbnQubm9ybWFsaXplID0gbm9ybWFsaXplO1xuICAgIGZ1bmN0aW9uIGRpc3RhbmNlKHBvaW50MCwgcG9pbnQxKSB7XG4gICAgICAgIGNvbnN0IGR4ID0gcG9pbnQwLnggLSBwb2ludDEueDtcbiAgICAgICAgY29uc3QgZHkgPSBwb2ludDAueSAtIHBvaW50MS55O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICB9XG4gICAgUG9pbnQuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICBmdW5jdGlvbiBpbnRlcnBvbGF0ZShiZWdpbiwgZW5kLCB2YWx1ZSwgcmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdC54ID0gYmVnaW4ueCArIHZhbHVlICogKGVuZC54IC0gYmVnaW4ueCk7XG4gICAgICAgIHJlc3VsdC55ID0gYmVnaW4ueSArIHZhbHVlICogKGVuZC55IC0gYmVnaW4ueSk7XG4gICAgfVxuICAgIFBvaW50LmludGVycG9sYXRlID0gaW50ZXJwb2xhdGU7XG4gICAgZnVuY3Rpb24gcG9sYXIocG9pbnQsIGxlbmd0aCwgYW5nbGUpIHtcbiAgICAgICAgcG9pbnQueCA9IGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKTtcbiAgICAgICAgcG9pbnQueSA9IGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKTtcbiAgICB9XG4gICAgUG9pbnQucG9sYXIgPSBwb2xhcjtcbn0pKFBvaW50IHx8IChQb2ludCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFJlY3RhbmdsZTtcbihmdW5jdGlvbiAoUmVjdGFuZ2xlKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShyZWN0YW5nbGUpIHtcbiAgICAgICAgcmVjdGFuZ2xlLnggPSAwO1xuICAgICAgICByZWN0YW5nbGUueSA9IDA7XG4gICAgICAgIHJlY3RhbmdsZS53aWR0aCA9IDA7XG4gICAgICAgIHJlY3RhbmdsZS5oZWlnaHQgPSAwO1xuICAgIH1cbiAgICBSZWN0YW5nbGUuc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBpbnRlcnNlY3Rpb24oc291cmNlLCB0YXJnZXQsIHJlc3VsdCkge1xuICAgICAgICBsZXQgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB9ID0gc291cmNlO1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGFyZ2V0Lng7XG4gICAgICAgIGNvbnN0IHRvcCA9IHRhcmdldC55O1xuICAgICAgICBjb25zdCByaWdodCA9IHRhcmdldC54ICsgdGFyZ2V0LndpZHRoO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0YXJnZXQueSArIHRhcmdldC5oZWlnaHQ7XG4gICAgICAgIGlmICh4IDwgbGVmdCkge1xuICAgICAgICAgICAgd2lkdGggLT0gbGVmdCAtIHg7XG4gICAgICAgICAgICB4ID0gbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCArIHdpZHRoID4gcmlnaHQpIHtcbiAgICAgICAgICAgIHdpZHRoID0gcmlnaHQgLSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh5IDwgdG9wKSB7XG4gICAgICAgICAgICBoZWlnaHQgLT0gdG9wIC0geTtcbiAgICAgICAgICAgIHkgPSB0b3A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgKyBoZWlnaHQgPiBib3R0b20pIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGJvdHRvbSAtIHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgICAgICAgd2lkdGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC54ID0geDtcbiAgICAgICAgcmVzdWx0LnkgPSB5O1xuICAgICAgICByZXN1bHQud2lkdGggPSB3aWR0aDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbjtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KHJlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlLndpZHRoID09PSAwIHx8IHJlY3RhbmdsZS5oZWlnaHQgPT09IDA7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBjb250YWlucyhyZWN0YW5nbGUsIHBvaW50KSB7XG4gICAgICAgIHJldHVybiByZWN0YW5nbGUueCA8IHBvaW50LnhcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS54ICsgcmVjdGFuZ2xlLndpZHRoID4gcG9pbnQueFxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnkgPCBwb2ludC55XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueSArIHJlY3RhbmdsZS5oZWlnaHQgPiBwb2ludC55O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuY29udGFpbnMgPSBjb250YWlucztcbiAgICBmdW5jdGlvbiByb3VuZChyZWN0YW5nbGUpIHtcbiAgICAgICAgcmVjdGFuZ2xlLnggPSBNYXRoLnJvdW5kKHJlY3RhbmdsZS54KTtcbiAgICAgICAgcmVjdGFuZ2xlLnkgPSBNYXRoLnJvdW5kKHJlY3RhbmdsZS55KTtcbiAgICAgICAgcmVjdGFuZ2xlLndpZHRoID0gTWF0aC5yb3VuZChyZWN0YW5nbGUud2lkdGgpO1xuICAgICAgICByZWN0YW5nbGUuaGVpZ2h0ID0gTWF0aC5yb3VuZChyZWN0YW5nbGUuaGVpZ2h0KTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLnJvdW5kID0gcm91bmQ7XG59KShSZWN0YW5nbGUgfHwgKFJlY3RhbmdsZSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0sIE1hdHJpeCwgUmVjdGFuZ2xlIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBJbWFnZUV4dGVuc2lvbiwgSU1BR0UgfSBmcm9tICcuL2ltYWdlJztcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuY29uc3Qgc2NyZWVuQm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb247XG4oZnVuY3Rpb24gKENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICAgICAgY29uc3QgcGxhdGZvcm0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IHBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgICAgIGlmIChDb2xvclRyYW5zZm9ybS5pc0VtcHR5V2l0aEFscGhhKGNvbG9yVHJhbnNmb3JtKSkge1xuICAgICAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjdXN0b21Db250ZXh0ID0gcGxhdGZvcm0uY3JlYXRlQ3VzdG9tQ29udGV4dCgpO1xuICAgICAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICAgICAgYm91bmRzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybUJvdW5kcyhtYXRyaXgsIGJvdW5kcywgYm91bmRzKTtcbiAgICAgICAgICAgIGlmIChSZWN0YW5nbGUuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2NyZWVuQm91bmRzLndpZHRoID0gY3VzdG9tQ29udGV4dC5jYW52YXMud2lkdGg7XG4gICAgICAgICAgICBzY3JlZW5Cb3VuZHMuaGVpZ2h0ID0gY3VzdG9tQ29udGV4dC5jYW52YXMuaGVpZ2h0O1xuICAgICAgICAgICAgUmVjdGFuZ2xlLmludGVyc2VjdGlvbihib3VuZHMsIHNjcmVlbkJvdW5kcywgYm91bmRzKTtcbiAgICAgICAgICAgIGlmIChSZWN0YW5nbGUuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVjdGFuZ2xlLnJvdW5kKGJvdW5kcyk7XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LnNldFRyYW5zZm9ybSgpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5jbGVhclJlY3QoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGN1c3RvbUNvbnRleHQuZ2V0SW1hZ2VEYXRhKGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnN0IHJtID0gY29sb3JUcmFuc2Zvcm0ucmVkTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IGdtID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3QgYm0gPSBjb2xvclRyYW5zZm9ybS5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IGFtID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3Qgcm8gPSBjb2xvclRyYW5zZm9ybS5yZWRPZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBnbyA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgYm8gPSBjb2xvclRyYW5zZm9ybS5ibHVlT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgYW8gPSBjb2xvclRyYW5zZm9ybS5hbHBoYU9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gaW1hZ2VEYXRhO1xuICAgICAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IGRhdGE7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogcm0gKyBybztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogZ20gKyBnbztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogYm0gKyBibztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogYW0gKyBhbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgYm91bmRzLngsIGJvdW5kcy55KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKGN1c3RvbUNvbnRleHQuY2FudmFzLCBib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCwgYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgcGxhdGZvcm0uZGVzdHJveUN1c3RvbUNvbnRleHQoY3VzdG9tQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgSW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KElNQUdFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiB8fCAoQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VFeHRlbnNpb24sIElNQUdFIH0gZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgdmFyIENhbnZhc0ltYWdlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNJbWFnZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihpbWFnZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBpbWFnZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IGVuZ2luZS5wbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgSW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KElNQUdFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc0ltYWdlRXh0ZW5zaW9uIHx8IChDYW52YXNJbWFnZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCwgUmVzb3VyY2UsIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuZXhwb3J0IGNvbnN0IElNQUdFID0gJ2ltYWdlJztcbmV4cG9ydCB2YXIgSW1hZ2U7XG4oZnVuY3Rpb24gKEltYWdlKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGltYWdlLCBib3VuZHMsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgIGJvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBJbWFnZS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShJbWFnZSB8fCAoSW1hZ2UgPSB7fSkpO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIEltYWdlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChJbWFnZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGhpdFRlc3QoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGxvY2FsIH0gPSBlbmdpbmUucG9pbnRlcnM7XG4gICAgICAgIEltYWdlLmNhbGN1bGF0ZUJvdW5kcyhpbWFnZSwgYm91bmRzLCBlbmdpbmUpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKGJvdW5kcywgbG9jYWwpO1xuICAgIH1cbiAgICBJbWFnZUV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBsb2FkZWQoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLmxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSBSZXNvdXJjZS5nZXRQcm9ncmVzcyhyZXNvdXJjZSk7XG4gICAgICAgIGNvbnRleHQubG9hZGVkID0gISFyZXNvdXJjZT8ubG9hZGVkICYmICEhcmVzb3VyY2U/LmltYWdlO1xuICAgIH1cbiAgICBJbWFnZUV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoSU1BR0UsIGhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KElNQUdFLCBsb2FkZWQpO1xuICAgICAgICBJbWFnZVJlc291cmNlLmluaXQoZW5naW5lKTtcbiAgICB9XG4gICAgSW1hZ2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShJbWFnZUV4dGVuc2lvbiB8fCAoSW1hZ2VFeHRlbnNpb24gPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy1pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy1pbWFnZS1jb2xvcic7XG4iLCJleHBvcnQgdmFyIEltYWdlUmVzb3VyY2U7XG4oZnVuY3Rpb24gKEltYWdlUmVzb3VyY2UpIHtcbiAgICBmdW5jdGlvbiByZXNvbHZlKGFzc2V0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gYXNzZXQuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgICAgc3dpdGNoIChleHRlbnNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3BuZyc6XG4gICAgICAgICAgICBjYXNlICdqcGcnOlxuICAgICAgICAgICAgY2FzZSAnd2VicCc6XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBieXRlc0xvYWRlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNUb3RhbDogMCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gYXNzZXQ7XG4gICAgICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaW1hZ2UgbG9hZGVkOiAke2Fzc2V0fWApO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5pbWFnZSA9IGltYWdlO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdpbWFnZSBsb2FkIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBJbWFnZVJlc291cmNlLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvbHZlKTtcbiAgICB9XG4gICAgSW1hZ2VSZXNvdXJjZS5pbml0ID0gaW5pdDtcbn0pKEltYWdlUmVzb3VyY2UgfHwgKEltYWdlUmVzb3VyY2UgPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmluZyc7XG4iLCJleHBvcnQgdmFyIFN0cmluZ1Jlc291cmNlO1xuKGZ1bmN0aW9uIChTdHJpbmdSZXNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIHJlc29sdmUoYXNzZXQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBleHRlbnNpb24gPSBhc3NldC5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgICBzd2l0Y2ggKGV4dGVuc2lvbikge1xuICAgICAgICAgICAgY2FzZSAndHh0JzpcbiAgICAgICAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0ge1xuICAgICAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNMb2FkZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzVG90YWw6IDAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgYXNzZXQsIHRydWUpO1xuICAgICAgICAgICAgICAgIHhoci5vbnByb2dyZXNzID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuYnl0ZXNMb2FkZWQgPSBlLmxvYWRlZDtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuYnl0ZXNUb3RhbCA9IGUudG90YWw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgc3RyaW5nIGxvYWRlZDogJHthc3NldH1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuZGF0YSA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmJ5dGVzTG9hZGVkID0gcmVzb3VyY2UuYnl0ZXNUb3RhbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5vbmVycm9yID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ3N0cmluZyBsb2FkIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFN0cmluZ1Jlc291cmNlLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvbHZlKTtcbiAgICB9XG4gICAgU3RyaW5nUmVzb3VyY2UuaW5pdCA9IGluaXQ7XG59KShTdHJpbmdSZXNvdXJjZSB8fCAoU3RyaW5nUmVzb3VyY2UgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUmVzb3VyY2UsIENvbnRhaW5lckV4dGVuc2lvbiwgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IFN0cmluZ1Jlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcbmV4cG9ydCBjb25zdCBTQ0VORSA9ICdzY2VuZSc7XG5leHBvcnQgdmFyIFNjZW5lRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChTY2VuZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGxvYWRlZChzY2VuZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUubG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGlmIChzY2VuZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgQ29udGFpbmVyRXh0ZW5zaW9uLmxvYWRlZChzY2VuZSwgZW5naW5lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc3JjIH0gPSBzY2VuZTtcbiAgICAgICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSBSZXNvdXJjZS5nZXRQcm9ncmVzcyhyZXNvdXJjZSk7XG4gICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9ICEhcmVzb3VyY2U/LmxvYWRlZCAmJiAhIXJlc291cmNlPy5kYXRhO1xuICAgICAgICAgICAgaWYgKHJlc291cmNlICYmIHJlc291cmNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5jaGlsZHJlbiA9IEpTT04ucGFyc2UocmVzb3VyY2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBzY2VuZSBwYXJzaW5nIGVycm9yOiAke2UubWVzc2FnZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgU2NlbmVFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KFNDRU5FLCBDb250YWluZXJFeHRlbnNpb24uaGl0VGVzdCk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoU0NFTkUsIENvbnRhaW5lckV4dGVuc2lvbi5yZW5kZXIpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy51cGRhdGUuc2V0KFNDRU5FLCBDb250YWluZXJFeHRlbnNpb24udXBkYXRlKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChTQ0VORSwgbG9hZGVkKTtcbiAgICAgICAgU3RyaW5nUmVzb3VyY2UuaW5pdChlbmdpbmUpO1xuICAgIH1cbiAgICBTY2VuZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFNjZW5lRXh0ZW5zaW9uIHx8IChTY2VuZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJjb25zdCBQSV8yID0gTWF0aC5QSSAqIDI7XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlFbGxpcHNlKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgcmFkaXVzID0gMCwgcmFkaXVzWCwgcmFkaXVzWSwgfSA9IGRhdGE7XG4gICAgY29uc3QgcnggPSByYWRpdXNYID8/IHJhZGl1cztcbiAgICBjb25zdCByeSA9IHJhZGl1c1kgPz8gcmFkaXVzO1xuICAgIGlmIChyeCA9PT0gMCB8fCByeSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5lbGxpcHNlKHgsIHksIHJ4LCByeSwgMCwgMCwgUElfMik7XG4gICAgaWYgKGhhc0ZpbGwpIHtcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYXBwbHlDb21tYW5kKGNvbW1hbmQsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IGNvbW1hbmQ7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21vdmVUbyc6XG4gICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8obW92ZVRvLnggPz8gMCwgbW92ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbGluZVRvJzpcbiAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhsaW5lVG8ueCA/PyAwLCBsaW5lVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjdXJ2ZVRvJzpcbiAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvKGN1cnZlVG8uY3ggPz8gMCwgY3VydmVUby5jeSA/PyAwLCBjdXJ2ZVRvLnggPz8gMCwgY3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2N1YmljQ3VydmVUbyc6XG4gICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKGN1YmljQ3VydmVUby5jeCA/PyAwLCBjdWJpY0N1cnZlVG8uY3kgPz8gMCwgY3ViaWNDdXJ2ZVRvLnN4ID8/IDAsIGN1YmljQ3VydmVUby5zeSA/PyAwLCBjdWJpY0N1cnZlVG8ueCA/PyAwLCBjdWJpY0N1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGF0aChkYXRhLCBoYXNGaWxsLCBjb250ZXh0KSB7XG4gICAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBkYXRhW2ldO1xuICAgICAgICBhcHBseUNvbW1hbmQoY29tbWFuZCwgY29udGV4dCk7XG4gICAgfVxuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UmVjdGFuZ2xlKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgd2lkdGggPSAwLCBoZWlnaHQgPSAwLCB9ID0gZGF0YTtcbiAgICBpZiAod2lkdGggPT09IDAgfHwgaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LnJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgaWYgKGhhc0ZpbGwpIHtcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgTWF0cml4LCBQb2ludCwgUmVjdGFuZ2xlLCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgU2hhcGVFeHRlbnNpb24sIFNIQVBFLCBTaGFwZSB9IGZyb20gJy4uL3NoYXBlJztcbmltcG9ydCB7IGFwcGx5UmVjdGFuZ2xlIH0gZnJvbSAnLi9yZWN0YW5nbGUnO1xuaW1wb3J0IHsgYXBwbHlFbGxpcHNlIH0gZnJvbSAnLi9lbGxpcHNlJztcbmltcG9ydCB7IGFwcGx5UGF0aCB9IGZyb20gJy4vcGF0aCc7XG5pbXBvcnQgeyBhcHBseVN0cmluZyB9IGZyb20gJy4vc3RyaW5nJztcbmltcG9ydCB7IHNldEZpbGxTdHlsZSwgc2V0U3Ryb2tlU3R5bGUgfSBmcm9tICcuL3N0eWxlJztcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuY29uc3Qgb2Zmc2V0ID0gUG9pbnQuZW1wdHkoKTtcbmZ1bmN0aW9uIHJlbmRlckdyYXBoaWNzKGRhdGEsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpIHtcbiAgICBjb25zdCB7IGZpbGwsIHN0cm9rZSB9ID0gZGF0YTtcbiAgICBjb25zdCBoYXNGaWxsID0gISFmaWxsIHx8IGZpbGwgPT09IDA7XG4gICAgY29uc3QgaGFzU3Ryb2tlID0gISFzdHJva2UgfHwgc3Ryb2tlID09PSAwO1xuICAgIGlmICghaGFzRmlsbCAmJiAhaGFzU3Ryb2tlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGV4aXN0ID0gdHJ1ZTtcbiAgICBjb25zdCB7IHR5cGUgfSA9IGRhdGE7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICBleGlzdCA9IGFwcGx5UmVjdGFuZ2xlKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgICAgICAgZXhpc3QgPSBhcHBseUVsbGlwc2UoZGF0YSwgaGFzRmlsbCwgY29udGV4dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGF0aCc6XG4gICAgICAgICAgICBjb25zdCBwYXRoID0gZGF0YTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGF0aC5kYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlTdHJpbmcocGF0aC5kYXRhLCBoYXNGaWxsLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocGF0aC5kYXRhKSkge1xuICAgICAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlQYXRoKHBhdGguZGF0YSwgaGFzRmlsbCwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKCFleGlzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIHNldEZpbGxTdHlsZShmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbiAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgfVxuICAgIGlmIChoYXNTdHJva2UpIHtcbiAgICAgICAgc2V0U3Ryb2tlU3R5bGUoc3Ryb2tlLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB9XG59XG5leHBvcnQgdmFyIENhbnZhc1NoYXBlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNTaGFwZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihzaGFwZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gc2hhcGU7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBQb2ludC5zZXRFbXB0eShvZmZzZXQpO1xuICAgICAgICBpZiAoUGl2b3QuaGFzVmFsdWVzKHNoYXBlKSkge1xuICAgICAgICAgICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzKHNoYXBlLCBib3VuZHMpO1xuICAgICAgICAgICAgaWYgKFJlY3RhbmdsZS5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmZzZXQueCA9IFBpdm90LmdldFgoc2hhcGUsIGJvdW5kcy53aWR0aCk7XG4gICAgICAgICAgICBvZmZzZXQueSA9IFBpdm90LmdldFkoc2hhcGUsIGJvdW5kcy53aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gZW5naW5lLnBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChQb2ludC5pc0VtcHR5KG9mZnNldCkpIHtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludExvY2FsKG1hdHJpeCwgb2Zmc2V0LCBvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCArIG9mZnNldC54LCBtYXRyaXgudHkgKyBvZmZzZXQueSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZW5kZXJHcmFwaGljcyhkYXRhW2ldLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dDJkLCBlbmdpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmVuZGVyR3JhcGhpY3MoZGF0YSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQyZCwgZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNTaGFwZUV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgU2hhcGVFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KFNIQVBFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNTaGFwZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc1NoYXBlRXh0ZW5zaW9uIHx8IChDYW52YXNTaGFwZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBHcmFwaGljc1N0cmluZ1JlYWRlciB9IGZyb20gJy4uL2RhdGEvc3RyaW5nJztcbmltcG9ydCB7IGFwcGx5Q29tbWFuZCB9IGZyb20gJy4vcGF0aCc7XG5jb25zdCByZWFkZXIgPSBuZXcgR3JhcGhpY3NTdHJpbmdSZWFkZXIoKTtcbmV4cG9ydCBmdW5jdGlvbiBhcHBseVN0cmluZyhkYXRhLCBoYXNGaWxsLCBjb250ZXh0KSB7XG4gICAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgcmVhZGVyLnNldFBhdGgoZGF0YSk7XG4gICAgd2hpbGUgKHJlYWRlci5yZWFkTmV4dCgpKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSByZWFkZXIuZ2V0Q29tbWFuZCgpO1xuICAgICAgICBpZiAoY29tbWFuZCkge1xuICAgICAgICAgICAgYXBwbHlDb21tYW5kKGNvbW1hbmQsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgQ2FudmFzUGF0dGVybnMgfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IE1hdHJpeCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuY29uc3QgZW1wdHlBcnJheSA9IFtdO1xuY29uc3QgZW1wdHlNYXRyaXggPSBNYXRyaXguZW1wdHkoKTtcbmZ1bmN0aW9uIGdldENhbnZhc1BhdHRlcm4oZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihmaWxsLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgc3dpdGNoIChmaWxsLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NvbGlkJzpcbiAgICAgICAgICAgICAgICBjb25zdCBzb2xpZCA9IGZpbGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihzb2xpZC5jb2xvciA/PyAwLCBzb2xpZC5hbHBoYSA/PyAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBjYXNlICdsaW5lYXInOlxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVhciA9IGZpbGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbnZhc1BhdHRlcm5zLmxpbmVhckdyYWRpZW50UGF0dGVybihsaW5lYXIuYmVnaW5YID8/IDAsIGxpbmVhci5iZWdpblkgPz8gMCwgbGluZWFyLmVuZFggPz8gMCwgbGluZWFyLmVuZFkgPz8gMCwgbGluZWFyLmNvbG9ycyA/PyBlbXB0eUFycmF5LCBsaW5lYXIuYWxwaGFzID8/IGVtcHR5QXJyYXksIGxpbmVhci5yYXRpb3MgPz8gZW1wdHlBcnJheSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQpO1xuICAgICAgICAgICAgY2FzZSAncmFkaWFsJzpcbiAgICAgICAgICAgICAgICBjb25zdCByYWRpYWwgPSBmaWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5yYWRpYWxHcmFkaWVudFBhdHRlcm4ocmFkaWFsLmJlZ2luWCA/PyAwLCByYWRpYWwuYmVnaW5ZID8/IDAsIHJhZGlhbC5iZWdpblJhZGl1cyA/PyAwLCByYWRpYWwuZW5kWCA/PyByYWRpYWwuYmVnaW5YID8/IDAsIHJhZGlhbC5lbmRZID8/IHJhZGlhbC5iZWdpblkgPz8gMCwgcmFkaWFsLmVuZFJhZGl1cyA/PyAwLCByYWRpYWwuY29sb3JzID8/IGVtcHR5QXJyYXksIHJhZGlhbC5hbHBoYXMgPz8gZW1wdHlBcnJheSwgcmFkaWFsLnJhdGlvcyA/PyBlbXB0eUFycmF5LCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCk7XG4gICAgICAgICAgICBjYXNlICdiaXRtYXAnOlxuICAgICAgICAgICAgICAgIGNvbnN0IGJpdG1hcEZpbGwgPSBmaWxsO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVwZWF0ID0gdHJ1ZSwgc3JjLCBtYXRyaXggPSBlbXB0eU1hdHJpeCB9ID0gYml0bWFwRmlsbDtcbiAgICAgICAgICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSBDYW52YXNQYXR0ZXJucy5iaXRtYXBQYXR0ZXJuKHJlc291cmNlLmltYWdlLCByZXBlYXQsIG1hdHJpeCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RmlsbFN0eWxlKGZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpIHtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGdldENhbnZhc1BhdHRlcm4oZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0U3Ryb2tlU3R5bGUoc3Ryb2tlLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgaWYgKHR5cGVvZiBzdHJva2UgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oc3Ryb2tlLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICAgICAgY29udGV4dC5saW5lQ2FwID0gJ3JvdW5kJztcbiAgICAgICAgY29udGV4dC5saW5lSm9pbiA9ICdyb3VuZCc7XG4gICAgICAgIGNvbnRleHQubWl0ZXJMaW1pdCA9IDEwO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2Ygc3Ryb2tlID09PSAnb2JqZWN0JyAmJiBzdHJva2UuZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBnZXRDYW52YXNQYXR0ZXJuKHN0cm9rZS5maWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBzdHJva2UudGhpY2tuZXNzID8/IDE7XG4gICAgICAgIGNvbnRleHQubGluZUNhcCA9IHN0cm9rZS5jYXBzID8/ICdyb3VuZCc7XG4gICAgICAgIGNvbnRleHQubGluZUpvaW4gPSBzdHJva2Uuam9pbnRzID8/ICdyb3VuZCc7XG4gICAgICAgIGNvbnRleHQubWl0ZXJMaW1pdCA9IHN0cm9rZS5taXRlckxpbWl0ID8/IDEwO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJvdW5kcyB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgUGF0aENvbW1hbmQgfSBmcm9tICcuL3BhdGgnO1xuaW1wb3J0IHsgR3JhcGhpY3NTdHJpbmcgfSBmcm9tICcuL3N0cmluZyc7XG5leHBvcnQgdmFyIFJlY3RhbmdsZURhdGE7XG4oZnVuY3Rpb24gKFJlY3RhbmdsZURhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCB3aWR0aCA9IDAsIGhlaWdodCA9IDAsIH0gPSBkYXRhO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHgsIHkpO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHggKyB3aWR0aCwgeSArIGhlaWdodCk7XG4gICAgfVxuICAgIFJlY3RhbmdsZURhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoUmVjdGFuZ2xlRGF0YSB8fCAoUmVjdGFuZ2xlRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIEVsbGlwc2VEYXRhO1xuKGZ1bmN0aW9uIChFbGxpcHNlRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHJhZGl1cyA9IDAsIHJhZGl1c1gsIHJhZGl1c1ksIH0gPSBkYXRhO1xuICAgICAgICBjb25zdCByeCA9IHJhZGl1c1ggPz8gcmFkaXVzO1xuICAgICAgICBjb25zdCByeSA9IHJhZGl1c1kgPz8gcmFkaXVzO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHggLSByeCwgeSAtIHJ5KTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4ICsgcngsIHkgKyByeSk7XG4gICAgfVxuICAgIEVsbGlwc2VEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEVsbGlwc2VEYXRhIHx8IChFbGxpcHNlRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIFBhdGhEYXRhO1xuKGZ1bmN0aW9uIChQYXRoRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoRGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcGF0aERhdGE7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIEdyYXBoaWNzU3RyaW5nLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBkYXRhW2ldO1xuICAgICAgICAgICAgICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyhjb21tYW5kLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFBhdGhEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFBhdGhEYXRhIHx8IChQYXRoRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIEdyYXBoaWNzRGF0YTtcbihmdW5jdGlvbiAoR3JhcGhpY3NEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IGRhdGE7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAncmVjdGFuZ2xlJzpcbiAgICAgICAgICAgICAgICBSZWN0YW5nbGVEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICAgICAgICAgICAgRWxsaXBzZURhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwYXRoJzpcbiAgICAgICAgICAgICAgICBQYXRoRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEdyYXBoaWNzRGF0YSB8fCAoR3JhcGhpY3NEYXRhID0ge30pKTtcbiIsImltcG9ydCB7IEJvdW5kcyB9IGZyb20gJ0BqZW5nL2dlb20nO1xuZXhwb3J0IHZhciBQYXRoQ29tbWFuZDtcbihmdW5jdGlvbiAoUGF0aENvbW1hbmQpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aCwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gcGF0aDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdtb3ZlVG8nOlxuICAgICAgICAgICAgY2FzZSAnbGluZVRvJzpcbiAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgbW92ZVRvLnggPz8gMCwgbW92ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjdXJ2ZVRvJzpcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1cnZlVG8uY3ggPz8gMCwgY3VydmVUby5jeSA/PyAwKTtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1cnZlVG8ueCA/PyAwLCBjdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjdWJpY0N1cnZlVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8uY3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLmN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLnN4ID8/IDAsIGN1YmljQ3VydmVUby5zeSA/PyAwKTtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby54ID8/IDAsIGN1YmljQ3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShQYXRoQ29tbWFuZCB8fCAoUGF0aENvbW1hbmQgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGF0aENvbW1hbmQsIH0gZnJvbSAnLi9wYXRoJztcbmNvbnN0IE5VTUJFUlNfQ09VTlQgPSB7XG4gICAgTTogMixcbiAgICBtOiAyLFxuICAgIEw6IDIsXG4gICAgbDogMixcbiAgICBIOiAxLFxuICAgIGg6IDEsXG4gICAgVjogMSxcbiAgICB2OiAxLFxuICAgIEM6IDYsXG4gICAgYzogNixcbiAgICBTOiA0LFxuICAgIHM6IDQsXG4gICAgUTogNCxcbiAgICBxOiA0LFxuICAgIFQ6IDIsXG4gICAgdDogMixcbn07XG5jb25zdCBDT01NQU5EX1JFR0VYID0gL1tNbUxsSGhWdkNjU3NRcVR0XS87XG5jb25zdCBOVU1CRVJfUkVHRVggPSAvWy0rXT9bXFxkLl0rLztcbmV4cG9ydCBjbGFzcyBHcmFwaGljc1N0cmluZ1N0cmVhbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9ICcnO1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgdGhpcy5zeW1ib2xSZWdleCA9IC9bTW1MbEhoVnZDY1NzUXFUdF18Wy0rXT9bXFxkLl0rL2c7XG4gICAgfVxuICAgIHNldFBhdGgocGF0aCkge1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLnN5bWJvbFJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgfVxuICAgIGdldENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmQ7XG4gICAgfVxuICAgIGdldEJ1ZmZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyO1xuICAgIH1cbiAgICByZWFkTmV4dCgpIHtcbiAgICAgICAgY29uc3QgeyBsYXN0SW5kZXggfSA9IHRoaXMuc3ltYm9sUmVnZXg7XG4gICAgICAgIGNvbnN0IHN5bWJvbE1hdGNoID0gdGhpcy5zeW1ib2xSZWdleC5leGVjKHRoaXMucGF0aCk7XG4gICAgICAgIGlmICghc3ltYm9sTWF0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sTWF0Y2hbMF07XG4gICAgICAgIGlmIChDT01NQU5EX1JFR0VYLnRlc3Qoc3ltYm9sKSkge1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kID0gc3ltYm9sO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKE5VTUJFUl9SRUdFWC50ZXN0KHN5bWJvbCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sUmVnZXgubGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY29tbWFuZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvdW50ID0gTlVNQkVSU19DT1VOVFt0aGlzLmNvbW1hbmRdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlck1hdGNoID0gdGhpcy5zeW1ib2xSZWdleC5leGVjKHRoaXMucGF0aCk7XG4gICAgICAgICAgICBpZiAobnVtYmVyTWF0Y2ggJiYgTlVNQkVSX1JFR0VYLnRlc3QobnVtYmVyTWF0Y2hbMF0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWZmZXJbaV0gPSBwYXJzZUZsb2F0KG51bWJlck1hdGNoWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU3RyaW5nUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBuZXcgR3JhcGhpY3NTdHJpbmdTdHJlYW0oKTtcbiAgICAgICAgdGhpcy5jb21tYW5kID0geyB0eXBlOiAnbW92ZVRvJyB9O1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgICAgIHRoaXMubGFzdFkgPSAwO1xuICAgICAgICB0aGlzLmxhc3RDWCA9IDA7XG4gICAgICAgIHRoaXMubGFzdENZID0gMDtcbiAgICB9XG4gICAgc2V0UGF0aChwYXRoKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtLnNldFBhdGgocGF0aCk7XG4gICAgICAgIHRoaXMubGFzdFggPSAwO1xuICAgICAgICB0aGlzLmxhc3RZID0gMDtcbiAgICAgICAgdGhpcy5sYXN0Q1ggPSAwO1xuICAgICAgICB0aGlzLmxhc3RDWSA9IDA7XG4gICAgICAgIHRoaXMuY29tbWFuZEV4aXN0cyA9IGZhbHNlO1xuICAgIH1cbiAgICBnZXRDb21tYW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kRXhpc3RzID8gdGhpcy5jb21tYW5kIDogbnVsbDtcbiAgICB9XG4gICAgcmVhZE5leHQoKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtLnJlYWROZXh0KCk7XG4gICAgICAgIHRoaXMucGFyc2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZEV4aXN0cztcbiAgICB9XG4gICAgcGFyc2UoKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSB0aGlzLnN0cmVhbS5nZXRDb21tYW5kKCk7XG4gICAgICAgIHRoaXMuY29tbWFuZEV4aXN0cyA9ICEhY29tbWFuZDtcbiAgICAgICAgaWYgKCF0aGlzLmNvbW1hbmRFeGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidWZmZXIgPSB0aGlzLnN0cmVhbS5nZXRCdWZmZXIoKTtcbiAgICAgICAgY29uc3QgW2UwLCBlMSwgZTIsIGUzLCBlNCwgZTUsXSA9IGJ1ZmZlcjtcbiAgICAgICAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ21vdmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnkgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IG1vdmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbW92ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdtb3ZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby54ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IG1vdmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbW92ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBsaW5lVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBsaW5lVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBsaW5lVG8ueDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1YnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd2JzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IGUwICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeCA9IGUyO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMztcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSBlNDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnkgPSBlNTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeCA9IGUyICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0gZTMgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IGU0ICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnkgPSBlNSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IGUyO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSB0aGlzLmxhc3RDWDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0gdGhpcy5sYXN0Q1k7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IGUyICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnkgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IGUyO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSBlMztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdXJ2ZVRvLnggLSAoY3VydmVUby5jeCAtIGN1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3VydmVUby55IC0gKGN1cnZlVG8uY3kgLSBjdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IGUyICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0gZTMgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gdGhpcy5sYXN0Q1k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdXJ2ZVRvLnggLSAoY3VydmVUby5jeCAtIGN1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3VydmVUby55IC0gKGN1cnZlVG8uY3kgLSBjdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSB0aGlzLmxhc3RDWDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IHRoaXMubGFzdENZO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdXJ2ZVRvLnggLSAoY3VydmVUby5jeCAtIGN1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3VydmVUby55IC0gKGN1cnZlVG8uY3kgLSBjdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5jb25zdCByZWFkZXIgPSBuZXcgR3JhcGhpY3NTdHJpbmdSZWFkZXIoKTtcbmV4cG9ydCB2YXIgR3JhcGhpY3NTdHJpbmc7XG4oZnVuY3Rpb24gKEdyYXBoaWNzU3RyaW5nKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKHBhdGgsIGJvdW5kcykge1xuICAgICAgICByZWFkZXIuc2V0UGF0aChwYXRoKTtcbiAgICAgICAgd2hpbGUgKHJlYWRlci5yZWFkTmV4dCgpKSB7XG4gICAgICAgICAgICBjb25zdCBjb21tYW5kID0gcmVhZGVyLmdldENvbW1hbmQoKTtcbiAgICAgICAgICAgIGlmIChjb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgUGF0aENvbW1hbmQuY2FsY3VsYXRlQm91bmRzKGNvbW1hbmQsIGJvdW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgR3JhcGhpY3NTdHJpbmcuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoR3JhcGhpY3NTdHJpbmcgfHwgKEdyYXBoaWNzU3RyaW5nID0ge30pKTtcbiIsImltcG9ydCB7IE1hdHJpeCwgUG9pbnQgfSBmcm9tICdAamVuZy9nZW9tJztcbmNvbnN0IHRlbXBQb2ludDAgPSBQb2ludC5lbXB0eSgpO1xuY29uc3QgdGVtcFBvaW50MSA9IFBvaW50LmVtcHR5KCk7XG5jb25zdCBlbXB0eU1hdHJpeCA9IE1hdHJpeC5lbXB0eSgpO1xuZXhwb3J0IGNsYXNzIEdyYXBoaWNzIHtcbiAgICBjb25zdHJ1Y3RvcihzaGFwZSkge1xuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGU7XG4gICAgfVxuICAgIGJlZ2luRmlsbChjb2xvciA9IDAsIGFscGhhID0gMSkge1xuICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAnc29saWQnLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGJlZ2luQml0bWFwRmlsbChzcmMsIG1hdHJpeCwgcmVwZWF0ID0gdHJ1ZSwgc21vb3RoID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ2JpdG1hcCcsXG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICBzbW9vdGgsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBiZWdpbkdyYWRpZW50RmlsbCh0eXBlLCBjb2xvciwgYWxwaGEsIHJhdGlvLCBtYXRyaXgpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdsaW5lYXInKSB7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnggPSAtODE5LjI7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnkgPSAwO1xuICAgICAgICAgICAgdGVtcFBvaW50MS54ID0gODE5LjI7XG4gICAgICAgICAgICB0ZW1wUG9pbnQxLnkgPSAwO1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgdGVtcFBvaW50MCwgdGVtcFBvaW50MCk7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCB0ZW1wUG9pbnQxLCB0ZW1wUG9pbnQxKTtcbiAgICAgICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgICAgICAgIGJlZ2luWDogdGVtcFBvaW50MC54LFxuICAgICAgICAgICAgICAgIGJlZ2luWTogdGVtcFBvaW50MC55LFxuICAgICAgICAgICAgICAgIGVuZFg6IHRlbXBQb2ludDEueCxcbiAgICAgICAgICAgICAgICBlbmRZOiB0ZW1wUG9pbnQxLnksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGVtcFBvaW50MC54ID0gMTYzOC40O1xuICAgICAgICAgICAgdGVtcFBvaW50MC55ID0gMDtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHRlbXBQb2ludDAsIHRlbXBQb2ludDApO1xuICAgICAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICAgICAgYmVnaW5YOiB0ZW1wUG9pbnQwLngsXG4gICAgICAgICAgICAgICAgYmVnaW5ZOiB0ZW1wUG9pbnQwLnksXG4gICAgICAgICAgICAgICAgYmVnaW5SYWRpdXM6IDAsXG4gICAgICAgICAgICAgICAgZW5kWDogdGVtcFBvaW50MC54LFxuICAgICAgICAgICAgICAgIGVuZFk6IHRlbXBQb2ludDAueSxcbiAgICAgICAgICAgICAgICBlbmRSYWRpdXM6IE1hdGguYWJzKCh0ZW1wUG9pbnQwLnggLSBtYXRyaXgudHgpIC8gMiksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBsaW5lU3R5bGUodGhpY2tuZXNzID0gMCwgY29sb3IgPSAwLCBhbHBoYSA9IDEsIHBpeGVsSGludGluZyA9IGZhbHNlLCBzY2FsZU1vZGUgPSAnbm9uZScsIGNhcHMgPSAncm91bmQnLCBqb2ludHMgPSAncm91bmQnLCBtaXRlckxpbWl0ID0gMykge1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHtcbiAgICAgICAgICAgIHRoaWNrbmVzcyxcbiAgICAgICAgICAgIHBpeGVsSGludGluZyxcbiAgICAgICAgICAgIHNjYWxlTW9kZSxcbiAgICAgICAgICAgIGNhcHMsXG4gICAgICAgICAgICBqb2ludHMsXG4gICAgICAgICAgICBtaXRlckxpbWl0LFxuICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbGluZUdyYWRpZW50U3R5bGUodHlwZSwgY29sb3IsIGFscGhhLCByYXRpbywgbWF0cml4ID0gZW1wdHlNYXRyaXgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0cm9rZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdsaW5lYXInKSB7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnggPSAtODE5LjI7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnkgPSAwO1xuICAgICAgICAgICAgdGVtcFBvaW50MS54ID0gODE5LjI7XG4gICAgICAgICAgICB0ZW1wUG9pbnQxLnkgPSAwO1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgdGVtcFBvaW50MCwgdGVtcFBvaW50MCk7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCB0ZW1wUG9pbnQxLCB0ZW1wUG9pbnQxKTtcbiAgICAgICAgICAgIHRoaXMuc3Ryb2tlLmZpbGwgPSB7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgICAgICBiZWdpblg6IHRlbXBQb2ludDAueCxcbiAgICAgICAgICAgICAgICBiZWdpblk6IHRlbXBQb2ludDAueSxcbiAgICAgICAgICAgICAgICBlbmRYOiB0ZW1wUG9pbnQxLngsXG4gICAgICAgICAgICAgICAgZW5kWTogdGVtcFBvaW50MS55LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueCA9IDE2MzguNDtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueSA9IDA7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCB0ZW1wUG9pbnQwLCB0ZW1wUG9pbnQwKTtcbiAgICAgICAgICAgIHRoaXMuc3Ryb2tlLmZpbGwgPSB7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgICAgICBiZWdpblg6IHRlbXBQb2ludDAueCxcbiAgICAgICAgICAgICAgICBiZWdpblk6IHRlbXBQb2ludDAueSxcbiAgICAgICAgICAgICAgICBiZWdpblJhZGl1czogMCxcbiAgICAgICAgICAgICAgICBlbmRYOiB0ZW1wUG9pbnQwLngsXG4gICAgICAgICAgICAgICAgZW5kWTogdGVtcFBvaW50MC55LFxuICAgICAgICAgICAgICAgIGVuZFJhZGl1czogTWF0aC5hYnMoKHRlbXBQb2ludDAueCAtIG1hdHJpeC50eCkgLyAyKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGxpbmVCaXRtYXBTdHlsZShzcmMsIG1hdHJpeCwgcmVwZWF0ID0gdHJ1ZSwgc21vb3RoID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0cm9rZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHJva2UuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdiaXRtYXAnLFxuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgcmVwZWF0LFxuICAgICAgICAgICAgc21vb3RoLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbW92ZVRvKHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgIHBhdGgucHVzaCh7IHR5cGU6ICdtb3ZlVG8nLCB4LCB5IH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbGluZVRvKHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHBhdGgucHVzaCh7IHR5cGU6ICdsaW5lVG8nLCB4LCB5IH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY3VydmVUbyhjeCwgY3ksIHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3VydmVUbycsIGN4LCBjeSwgeCwgeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjdWJpY0N1cnZlVG8oY3gsIGN5LCBzeCwgc3ksIHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJywgY3gsIGN5LCBzeCwgc3ksIHgsIHksXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZHJhd1JvdW5kUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBlbGxpcHNlV2lkdGggPSAwLCBlbGxpcHNlSGVpZ2h0ID0gMCkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5iZWdpblBhdGgoKTtcbiAgICAgICAgY29uc3QgdyA9IGVsbGlwc2VXaWR0aDtcbiAgICAgICAgY29uc3QgaCA9IGVsbGlwc2VIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGsgPSAwLjU1MjI4NDg7XG4gICAgICAgIGNvbnN0IG94ID0gKHcgLyAyKSAqIGs7XG4gICAgICAgIGNvbnN0IG95ID0gKGggLyAyKSAqIGs7XG4gICAgICAgIGNvbnN0IHhlID0geCArIHc7XG4gICAgICAgIGNvbnN0IHllID0geSArIGg7XG4gICAgICAgIGNvbnN0IHhtID0geCArIHcgLyAyO1xuICAgICAgICBjb25zdCB5bSA9IHkgKyBoIC8gMjtcbiAgICAgICAgY29uc3QgZHggPSB3aWR0aCAtIHc7XG4gICAgICAgIGNvbnN0IGR5ID0gaGVpZ2h0IC0gaDtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdtb3ZlVG8nLFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHk6IHltLFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHgsXG4gICAgICAgICAgICBjeTogeW0gLSBveSxcbiAgICAgICAgICAgIHN4OiB4bSAtIG94LFxuICAgICAgICAgICAgc3k6IHksXG4gICAgICAgICAgICB4OiB4bSxcbiAgICAgICAgICAgIHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVUbycsXG4gICAgICAgICAgICB4OiB4bSArIGR4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4bSArIG94ICsgZHgsXG4gICAgICAgICAgICBjeTogeSxcbiAgICAgICAgICAgIHN4OiB4ZSArIGR4LFxuICAgICAgICAgICAgc3k6IHltIC0gb3ksXG4gICAgICAgICAgICB4OiB4ZSArIGR4LFxuICAgICAgICAgICAgeTogeW0sXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVUbycsXG4gICAgICAgICAgICB4OiB4ZSArIGR4LFxuICAgICAgICAgICAgeTogeW0gKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4ZSArIGR4LFxuICAgICAgICAgICAgY3k6IHltICsgb3kgKyBkeSxcbiAgICAgICAgICAgIHN4OiB4bSArIG94ICsgZHgsXG4gICAgICAgICAgICBzeTogeWUgKyBkeSxcbiAgICAgICAgICAgIHg6IHhtICsgZHgsXG4gICAgICAgICAgICB5OiB5ZSArIGR5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeG0sXG4gICAgICAgICAgICB5OiB5ZSArIGR5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhtIC0gb3gsXG4gICAgICAgICAgICBjeTogeWUgKyBkeSxcbiAgICAgICAgICAgIHN4OiB4LFxuICAgICAgICAgICAgc3k6IHltICsgb3kgKyBkeSxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5OiB5bSArIGR5LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRyYXdSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAncmVjdGFuZ2xlJztcbiAgICAgICAgZGF0YS54ID0geDtcbiAgICAgICAgZGF0YS55ID0geTtcbiAgICAgICAgZGF0YS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBkYXRhLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRyYXdDaXJjbGUoeCwgeSwgcmFkaXVzKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ2VsbGlwc2UnO1xuICAgICAgICBkYXRhLnggPSB4O1xuICAgICAgICBkYXRhLnkgPSB5O1xuICAgICAgICBkYXRhLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRyYXdFbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAnZWxsaXBzZSc7XG4gICAgICAgIGRhdGEucmFkaXVzWCA9IHdpZHRoIC8gMjtcbiAgICAgICAgZGF0YS5yYWRpdXNZID0gaGVpZ2h0IC8gMjtcbiAgICAgICAgZGF0YS54ID0geCAtIGRhdGEucmFkaXVzWDtcbiAgICAgICAgZGF0YS55ID0geSAtIGRhdGEucmFkaXVzWTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5zaGFwZS5kYXRhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY3JlYXRlRGF0YSgpIHtcbiAgICAgICAgY29uc3QgeyBzaGFwZSwgZmlsbCwgc3Ryb2tlIH0gPSB0aGlzO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzaGFwZS5kYXRhKSkge1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzaGFwZS5kYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgc2hhcGUuZGF0YSA9IFtzaGFwZS5kYXRhXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNoYXBlLmRhdGEgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBncmFwaGljc0RhdGEgPSB7IHR5cGU6ICdwYXRoJywgZmlsbCwgc3Ryb2tlIH07XG4gICAgICAgIHNoYXBlLmRhdGEucHVzaChncmFwaGljc0RhdGEpO1xuICAgICAgICByZXR1cm4gZ3JhcGhpY3NEYXRhO1xuICAgIH1cbiAgICBiZWdpblBhdGgoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS5kYXRhID0gW107XG4gICAgICAgIHJldHVybiBkYXRhLmRhdGE7XG4gICAgfVxuICAgIGdldFBhdGgoKSB7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUgfSA9IHRoaXM7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzaGFwZS5kYXRhKSB8fCAhc2hhcGUuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHNoYXBlLmRhdGFbc2hhcGUuZGF0YS5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEuZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2RhdGEvZGF0YSc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvcGF0aCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvc3RyaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9zdHlsZSc7XG5leHBvcnQgKiBmcm9tICcuL3NoYXBlJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JhcGhpY3MnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMvc2hhcGUnO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IEJvdW5kcywgUmVjdGFuZ2xlIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcbmltcG9ydCB7IEdyYXBoaWNzRGF0YSB9IGZyb20gJy4vZGF0YS9kYXRhJztcbmV4cG9ydCBjb25zdCBTSEFQRSA9ICdzaGFwZSc7XG5jb25zdCBib3VuZHMgPSBCb3VuZHMuZW1wdHkoKTtcbmV4cG9ydCB2YXIgU2hhcGU7XG4oZnVuY3Rpb24gKFNoYXBlKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKHNoYXBlLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBzaGFwZTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBCb3VuZHMuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YVtpXSwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCb3VuZHMuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3aWR0aCA9IGJvdW5kcy5tYXhYIC0gYm91bmRzLm1pblg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGJvdW5kcy5tYXhZIC0gYm91bmRzLm1pblk7XG4gICAgICAgIGNvbnN0IHggPSBib3VuZHMubWluWCArIFBpdm90LmdldFgoc2hhcGUsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IGJvdW5kcy5taW5ZICsgUGl2b3QuZ2V0WShzaGFwZSwgaGVpZ2h0KTtcbiAgICAgICAgcmVzdWx0LnggPSB4O1xuICAgICAgICByZXN1bHQueSA9IHk7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHdpZHRoO1xuICAgICAgICByZXN1bHQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBTaGFwZS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShTaGFwZSB8fCAoU2hhcGUgPSB7fSkpO1xuY29uc3QgcmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIFNoYXBlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChTaGFwZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGhpdFRlc3Qoc2hhcGUsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGxvY2FsIH0gPSBlbmdpbmUucG9pbnRlcnM7XG4gICAgICAgIFNoYXBlLmNhbGN1bGF0ZUJvdW5kcyhzaGFwZSwgcmVjdGFuZ2xlKTtcbiAgICAgICAgcmV0dXJuIFJlY3RhbmdsZS5jb250YWlucyhyZWN0YW5nbGUsIGxvY2FsKTtcbiAgICB9XG4gICAgU2hhcGVFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoU0hBUEUsIGhpdFRlc3QpO1xuICAgICAgICBJbWFnZVJlc291cmNlLmluaXQoZW5naW5lKTtcbiAgICB9XG4gICAgU2hhcGVFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShTaGFwZUV4dGVuc2lvbiB8fCAoU2hhcGVFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IENhbnZhc1BhdHRlcm5zIH0gZnJvbSAnQGplbmcvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBGb250IH0gZnJvbSAnLi4vZGF0YS9mb250JztcbmltcG9ydCB7IFRleHRFeHRlbnNpb24sIFRFWFQsIFRleHQgfSBmcm9tICcuLi90ZXh0JztcbmltcG9ydCB7IFRleHRGb3JtYXQgfSBmcm9tICcuLi9kYXRhL2Zvcm1hdCc7XG5pbXBvcnQgeyBUZXh0TWV0cmljcyB9IGZyb20gJy4uL2RhdGEvbWV0cmljcyc7XG5jb25zdCBkZWZhdWx0VGV4dEZvcm1hdCA9IHt9O1xuY29uc3QgQ09SUkVDVElPTiA9IDAuODU7XG5leHBvcnQgdmFyIENhbnZhc1RleHRFeHRlbnNpb247XG4oZnVuY3Rpb24gKENhbnZhc1RleHRFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoY29tcG9uZW50LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBtYXRyaXgsIGNvbG9yVHJhbnNmb3JtIH0gPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoVGV4dC5pc1VwZGF0ZU1ldHJpY3MoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgVGV4dC51cGRhdGVNZXRyaWNzKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBtZXRyaWNzIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghbWV0cmljcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZm9ybWF0LCBib3JkZXIsIGJhY2tncm91bmQsIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIFRleHRGb3JtYXQuY29tYmluZShmb3JtYXQsIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQsIGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgY29uc3QgcmVhbFdpZHRoID0gd2lkdGggPz8gbWV0cmljcy53aWR0aDtcbiAgICAgICAgY29uc3QgcmVhbEhlaWdodCA9IGhlaWdodCA/PyBtZXRyaWNzLmhlaWdodDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IFBpdm90LmdldFgoY29tcG9uZW50LCByZWFsV2lkdGgpO1xuICAgICAgICBjb25zdCBvZmZzZXRZID0gUGl2b3QuZ2V0WShjb21wb25lbnQsIHJlYWxIZWlnaHQpO1xuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBlbmdpbmUucGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgIGlmIChiYWNrZ3JvdW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICcnO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihiYWNrZ3JvdW5kLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQucmVjdChvZmZzZXRYLCBvZmZzZXRZLCByZWFsV2lkdGgsIHJlYWxIZWlnaHQpO1xuICAgICAgICAgICAgY29udGV4dDJkLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihib3JkZXIsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcbiAgICAgICAgICAgIGNvbnRleHQyZC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5yZWN0KG9mZnNldFgsIG9mZnNldFksIHJlYWxXaWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dDJkLnRleHRCYXNlbGluZSA9ICdhbHBoYWJldGljJztcbiAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gJyc7XG4gICAgICAgIGNvbnN0IHNpbXBsZSA9IFRleHQuaXNTaW1wbGUoY29tcG9uZW50KTtcbiAgICAgICAgaWYgKHNpbXBsZSkge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGNvbXBvbmVudC50ZXh0O1xuICAgICAgICAgICAgY29uc3QgeyBzaXplLCBjb2xvciwgYWxwaGEsIGxlYWRpbmcsIGxldHRlclNwYWNpbmcsIH0gPSBkZWZhdWx0VGV4dEZvcm1hdDtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRGb250ID0gRm9udC5nZXRGb250KGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbFNpemUgPSBzaXplICogQ09SUkVDVElPTjtcbiAgICAgICAgICAgIGNvbnN0IGFsaWduVmFsdWUgPSBUZXh0Rm9ybWF0LmdldEFsaWduVmFsdWUoZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICAgICAgY29udGV4dDJkLmZvbnQgPSBGb250LmdldFN0eWxlKGRlZmF1bHRGb250LCBzaXplKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oY29sb3IsIGFscGhhLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBsZXQgeCA9IG9mZnNldFggKyBhbGlnblZhbHVlID8gYWxpZ25WYWx1ZSAqIChyZWFsV2lkdGggLSBUZXh0TWV0cmljcy5nZXRTaW1wbGVXaWR0aChkZWZhdWx0VGV4dEZvcm1hdCwgdGV4dCwgMCkpIDogMDtcbiAgICAgICAgICAgIGxldCB5ID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHRleHRbaV07XG4gICAgICAgICAgICAgICAgaWYgKHN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGFsaWduVmFsdWUgPyBhbGlnblZhbHVlICogKHJlYWxXaWR0aCAtIFRleHRNZXRyaWNzLmdldFNpbXBsZVdpZHRoKGRlZmF1bHRUZXh0Rm9ybWF0LCB0ZXh0LCBpICsgMSkpIDogMDtcbiAgICAgICAgICAgICAgICAgICAgeSArPSBzaXplICsgbGVhZGluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSB0ZXh0W2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShkZWZhdWx0Rm9udCwgc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIGxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5maWxsVGV4dChzeW1ib2wsIHgsIHkgKyBzeW1ib2xTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgeCArPSBhZHZhbmNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB5ID0gMDtcbiAgICAgICAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGlnblZlcnRpY2FsVmFsdWUgPSBUZXh0Rm9ybWF0LmdldFZlcnRpY2FsQWxpZ25WYWx1ZShkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgICAgICAgICAgeSA9IChoZWlnaHQgLSBtZXRyaWNzLmhlaWdodCkgKiBhbGlnblZlcnRpY2FsVmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHkgKz0gb2Zmc2V0WTtcbiAgICAgICAgICAgIGNvbnN0IHsgbGluZXMgfSA9IG1ldHJpY3M7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChsaW5lLnN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gbGluZS5zeW1ib2xzWzBdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbGlnblZhbHVlID0gVGV4dEZvcm1hdC5nZXRBbGlnblZhbHVlKGZpcnN0LmZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gKHJlYWxXaWR0aCAtIGxpbmUud2lkdGgpICogYWxpZ25WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4ICs9IG9mZnNldFg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc3ltYm9scyB9ID0gbGluZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZUhlaWdodCA9IGxpbmUuaGVpZ2h0ICogQ09SUkVDVElPTjtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzeW1ib2xzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHN5bWJvbC5mb3JtYXQuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsaWduU3ltYm9sVmFsdWUgPSBUZXh0Rm9ybWF0LmdldFZlcnRpY2FsQWxpZ25WYWx1ZShzeW1ib2wuZm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbFNpemUgPSBzaXplICogQ09SUkVDVElPTjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvbnQgPSBGb250LmdldEZvbnQoc3ltYm9sLmZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0MmQuZm9udCA9IEZvbnQuZ2V0U3R5bGUoc3ltYm9sRm9udCwgc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKHN5bWJvbC5mb3JtYXQuY29sb3IsIHN5bWJvbC5mb3JtYXQuYWxwaGEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5maWxsVGV4dChzeW1ib2wuc3ltYm9sLCB4LCB5ICsgc3ltYm9sU2l6ZSArIGFsaWduU3ltYm9sVmFsdWUgKiAobGluZUhlaWdodCAtIHN5bWJvbFNpemUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gc3ltYm9sLmFkdmFuY2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeSArPSBsaW5lLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNUZXh0RXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBUZXh0RXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChURVhULCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNUZXh0RXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ2FudmFzVGV4dEV4dGVuc2lvbiB8fCAoQ2FudmFzVGV4dEV4dGVuc2lvbiA9IHt9KSk7XG4iLCJjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmV4cG9ydCBjb25zdCBFTSA9IDEwMjQ7XG5jb25zdCBmb250cyA9IG5ldyBNYXAoKTtcbmV4cG9ydCB2YXIgRm9udDtcbihmdW5jdGlvbiAoRm9udCkge1xuICAgIGZ1bmN0aW9uIGdldFN0eWxlKGZvbnQsIHNpemUpIHtcbiAgICAgICAgcmV0dXJuIGZvbnQubmFtZS5yZXBsYWNlKCclJywgc2l6ZS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgRm9udC5nZXRTdHlsZSA9IGdldFN0eWxlO1xuICAgIGZ1bmN0aW9uIG1lYXN1cmVUZXh0KGZvbnQsIHNpemUsIHRleHQpIHtcbiAgICAgICAgY29udGV4dC5mb250ID0gZ2V0U3R5bGUoZm9udCwgc2l6ZSk7XG4gICAgICAgIHJldHVybiBjb250ZXh0Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xuICAgIH1cbiAgICBGb250Lm1lYXN1cmVUZXh0ID0gbWVhc3VyZVRleHQ7XG4gICAgZnVuY3Rpb24gZ2V0Q2hhcldpZHRoKGZvbnQsIGNoYXIpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gZm9udC53aWR0aHMuZ2V0KGNoYXIpO1xuICAgICAgICBpZiAoIXdpZHRoKSB7XG4gICAgICAgICAgICB3aWR0aCA9IG1lYXN1cmVUZXh0KGZvbnQsIEVNLCBjaGFyKTtcbiAgICAgICAgICAgIGZvbnQud2lkdGhzLnNldChjaGFyLCB3aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cbiAgICBGb250LmdldENoYXJXaWR0aCA9IGdldENoYXJXaWR0aDtcbiAgICBmdW5jdGlvbiBnZXRLZXJuaW5nKGZvbnQsIGZpcnN0LCBzZWNvbmQpIHtcbiAgICAgICAgY29uc3QgcGFpciA9IGZpcnN0ICsgc2Vjb25kO1xuICAgICAgICBsZXQga2VybmluZyA9IGZvbnQua2VybmluZ3MuZ2V0KHBhaXIpO1xuICAgICAgICBpZiAoIWtlcm5pbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoU2Vjb25kID0gZ2V0Q2hhcldpZHRoKGZvbnQsIHNlY29uZCk7XG4gICAgICAgICAgICBjb25zdCB3aWR0aFRvdGFsID0gbWVhc3VyZVRleHQoZm9udCwgRU0sIGZpcnN0ICsgc2Vjb25kKTtcbiAgICAgICAgICAgIGtlcm5pbmcgPSB3aWR0aFRvdGFsIC0gd2lkdGhTZWNvbmQ7XG4gICAgICAgICAgICBmb250Lmtlcm5pbmdzLnNldChwYWlyLCBrZXJuaW5nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2VybmluZztcbiAgICB9XG4gICAgRm9udC5nZXRLZXJuaW5nID0gZ2V0S2VybmluZztcbiAgICBmdW5jdGlvbiBnZXRBZHZhbmNlKGZvbnQsIHNpemUsIGZpcnN0LCBzZWNvbmQpIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBzaXplIC8gRU07XG4gICAgICAgIGNvbnN0IHdpZHRoID0gZ2V0Q2hhcldpZHRoKGZvbnQsIGZpcnN0KTtcbiAgICAgICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgICAgIHJldHVybiB3aWR0aCAqIHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtlcm5pbmcgPSBnZXRLZXJuaW5nKGZvbnQsIGZpcnN0LCBzZWNvbmQpO1xuICAgICAgICByZXR1cm4ga2VybmluZyAqIHNjYWxlO1xuICAgIH1cbiAgICBGb250LmdldEFkdmFuY2UgPSBnZXRBZHZhbmNlO1xuICAgIGZ1bmN0aW9uIGdldEZvbnQoZm9ybWF0KSB7XG4gICAgICAgIGxldCBuYW1lID0gJyc7XG4gICAgICAgIGlmIChmb3JtYXQuYm9sZCkge1xuICAgICAgICAgICAgbmFtZSArPSAnYm9sZCAnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQuaXRhbGljKSB7XG4gICAgICAgICAgICBuYW1lICs9ICdpdGFsaWMgJztcbiAgICAgICAgfVxuICAgICAgICBuYW1lICs9IGAlcHggJHtmb3JtYXQuZm9udH1gO1xuICAgICAgICBsZXQgZm9udCA9IGZvbnRzLmdldChuYW1lKTtcbiAgICAgICAgaWYgKCFmb250KSB7XG4gICAgICAgICAgICBmb250ID0ge1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgd2lkdGhzOiBuZXcgTWFwKCksXG4gICAgICAgICAgICAgICAga2VybmluZ3M6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb250cy5zZXQobmFtZSwgZm9udCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvbnQ7XG4gICAgfVxuICAgIEZvbnQuZ2V0Rm9udCA9IGdldEZvbnQ7XG59KShGb250IHx8IChGb250ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgVGV4dEZvcm1hdDtcbihmdW5jdGlvbiAoVGV4dEZvcm1hdCkge1xuICAgIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQgPSB7XG4gICAgICAgIGZvbnQ6ICdhcmlhbCcsXG4gICAgICAgIHNpemU6IDE1LFxuICAgICAgICBjb2xvcjogMCxcbiAgICAgICAgYWxwaGE6IDEsXG4gICAgICAgIGJvbGQ6IGZhbHNlLFxuICAgICAgICBpdGFsaWM6IGZhbHNlLFxuICAgICAgICB1bmRlcmxpbmU6IGZhbHNlLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwLFxuICAgICAgICBsZWFkaW5nOiAwLFxuICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGNvbWJpbmUoc291cmNlLCBkZWZhdWx0Rm9ybWF0LCByZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0LmZvbnQgPSBzb3VyY2U/LmZvbnQgPz8gZGVmYXVsdEZvcm1hdC5mb250O1xuICAgICAgICByZXN1bHQuc2l6ZSA9IHNvdXJjZT8uc2l6ZSA/PyBkZWZhdWx0Rm9ybWF0LnNpemU7XG4gICAgICAgIHJlc3VsdC5jb2xvciA9IHNvdXJjZT8uY29sb3IgPz8gZGVmYXVsdEZvcm1hdC5jb2xvcjtcbiAgICAgICAgcmVzdWx0LmFscGhhID0gc291cmNlPy5hbHBoYSA/PyBkZWZhdWx0Rm9ybWF0LmFscGhhO1xuICAgICAgICByZXN1bHQuYm9sZCA9IHNvdXJjZT8uYm9sZCA/PyBkZWZhdWx0Rm9ybWF0LmJvbGQ7XG4gICAgICAgIHJlc3VsdC5pdGFsaWMgPSBzb3VyY2U/Lml0YWxpYyA/PyBkZWZhdWx0Rm9ybWF0Lml0YWxpYztcbiAgICAgICAgcmVzdWx0LnVuZGVybGluZSA9IHNvdXJjZT8udW5kZXJsaW5lID8/IGRlZmF1bHRGb3JtYXQudW5kZXJsaW5lO1xuICAgICAgICByZXN1bHQubGV0dGVyU3BhY2luZyA9IHNvdXJjZT8ubGV0dGVyU3BhY2luZyA/PyBkZWZhdWx0Rm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgICAgIHJlc3VsdC5sZWFkaW5nID0gc291cmNlPy5sZWFkaW5nID8/IGRlZmF1bHRGb3JtYXQubGVhZGluZztcbiAgICAgICAgcmVzdWx0LmFsaWduID0gc291cmNlPy5hbGlnbiA/PyBkZWZhdWx0Rm9ybWF0LmFsaWduO1xuICAgICAgICByZXN1bHQudmVydGljYWxBbGlnbiA9IHNvdXJjZT8udmVydGljYWxBbGlnbiA/PyBkZWZhdWx0Rm9ybWF0LnZlcnRpY2FsQWxpZ247XG4gICAgfVxuICAgIFRleHRGb3JtYXQuY29tYmluZSA9IGNvbWJpbmU7XG4gICAgZnVuY3Rpb24gY29weShzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICB0YXJnZXQuZm9udCA9IHNvdXJjZS5mb250O1xuICAgICAgICB0YXJnZXQuc2l6ZSA9IHNvdXJjZS5zaXplO1xuICAgICAgICB0YXJnZXQuY29sb3IgPSBzb3VyY2UuY29sb3I7XG4gICAgICAgIHRhcmdldC5hbHBoYSA9IHNvdXJjZS5hbHBoYTtcbiAgICAgICAgdGFyZ2V0LmJvbGQgPSBzb3VyY2UuYm9sZDtcbiAgICAgICAgdGFyZ2V0Lml0YWxpYyA9IHNvdXJjZS5pdGFsaWM7XG4gICAgICAgIHRhcmdldC51bmRlcmxpbmUgPSBzb3VyY2UudW5kZXJsaW5lO1xuICAgICAgICB0YXJnZXQubGV0dGVyU3BhY2luZyA9IHNvdXJjZS5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICB0YXJnZXQubGVhZGluZyA9IHNvdXJjZS5sZWFkaW5nO1xuICAgICAgICB0YXJnZXQuYWxpZ24gPSBzb3VyY2UuYWxpZ247XG4gICAgICAgIHRhcmdldC52ZXJ0aWNhbEFsaWduID0gc291cmNlLnZlcnRpY2FsQWxpZ247XG4gICAgfVxuICAgIFRleHRGb3JtYXQuY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gZ2V0QWxpZ25WYWx1ZShmb3JtYXQpIHtcbiAgICAgICAgc3dpdGNoIChmb3JtYXQ/LmFsaWduKSB7XG4gICAgICAgICAgICBjYXNlICdsZWZ0JzogcmV0dXJuIDA7XG4gICAgICAgICAgICBjYXNlICdjZW50ZXInOiByZXR1cm4gMC41O1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOiByZXR1cm4gMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRGb3JtYXQuZ2V0QWxpZ25WYWx1ZSA9IGdldEFsaWduVmFsdWU7XG4gICAgZnVuY3Rpb24gZ2V0VmVydGljYWxBbGlnblZhbHVlKGZvcm1hdCkge1xuICAgICAgICBzd2l0Y2ggKGZvcm1hdD8udmVydGljYWxBbGlnbikge1xuICAgICAgICAgICAgY2FzZSAndG9wJzogcmV0dXJuIDA7XG4gICAgICAgICAgICBjYXNlICdtaWRkbGUnOiByZXR1cm4gMC41O1xuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzogcmV0dXJuIDE7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmdldFZlcnRpY2FsQWxpZ25WYWx1ZSA9IGdldFZlcnRpY2FsQWxpZ25WYWx1ZTtcbn0pKFRleHRGb3JtYXQgfHwgKFRleHRGb3JtYXQgPSB7fSkpO1xuIiwiaW1wb3J0IHsgRm9udCB9IGZyb20gJy4vZm9udCc7XG5pbXBvcnQgeyBUZXh0Rm9ybWF0IH0gZnJvbSAnLi9mb3JtYXQnO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uL3RleHQnO1xuY29uc3QgZGVmYXVsdFRleHRGb3JtYXQgPSB7fTtcbmV4cG9ydCB2YXIgVGV4dExpbmU7XG4oZnVuY3Rpb24gKFRleHRMaW5lKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3ltYm9sczogW10sXG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgVGV4dExpbmUuY3JlYXRlID0gY3JlYXRlO1xuICAgIGZ1bmN0aW9uIGVtcHR5KGxpbmUpIHtcbiAgICAgICAgbGluZS5zeW1ib2xzLmxlbmd0aCA9IDA7XG4gICAgICAgIGxpbmUud2lkdGggPSAwO1xuICAgICAgICBsaW5lLmhlaWdodCA9IDA7XG4gICAgfVxuICAgIFRleHRMaW5lLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gYWRkKGxpbmUsIHN5bWJvbCkge1xuICAgICAgICBsaW5lLnN5bWJvbHMucHVzaChzeW1ib2wpO1xuICAgICAgICBsaW5lLndpZHRoICs9IHN5bWJvbC5hZHZhbmNlO1xuICAgICAgICBsaW5lLmhlaWdodCA9IE1hdGgubWF4KGxpbmUuaGVpZ2h0LCBzeW1ib2wuZm9ybWF0LnNpemUgKyBzeW1ib2wuZm9ybWF0LmxlYWRpbmcpO1xuICAgIH1cbiAgICBUZXh0TGluZS5hZGQgPSBhZGQ7XG4gICAgZnVuY3Rpb24gY29uY2F0KHRhcmdldCwgc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2Uuc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRhcmdldC5zeW1ib2xzLnB1c2goLi4uc291cmNlLnN5bWJvbHMpO1xuICAgICAgICAgICAgdGFyZ2V0LndpZHRoICs9IHNvdXJjZS53aWR0aDtcbiAgICAgICAgICAgIHRhcmdldC5oZWlnaHQgPSBNYXRoLm1heCh0YXJnZXQuaGVpZ2h0LCBzb3VyY2UuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0TGluZS5jb25jYXQgPSBjb25jYXQ7XG4gICAgZnVuY3Rpb24gY29ycmVjdFdpZHRoKGxpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzeW1ib2xzIH0gPSBsaW5lO1xuICAgICAgICBpZiAoc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBzeW1ib2xzW3N5bWJvbHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAoL1xccy8udGVzdChsYXN0LnN5bWJvbCkpIHtcbiAgICAgICAgICAgICAgICBzeW1ib2xzLnBvcCgpO1xuICAgICAgICAgICAgICAgIGxpbmUud2lkdGggLT0gbGFzdC5hZHZhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRMaW5lLmNvcnJlY3RXaWR0aCA9IGNvcnJlY3RXaWR0aDtcbiAgICBmdW5jdGlvbiBjb3JyZWN0SGVpZ2h0KGxpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzeW1ib2xzIH0gPSBsaW5lO1xuICAgICAgICBpZiAoc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbMF07XG4gICAgICAgICAgICBsaW5lLmhlaWdodCAtPSBzeW1ib2wuZm9ybWF0LmxlYWRpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dExpbmUuY29ycmVjdEhlaWdodCA9IGNvcnJlY3RIZWlnaHQ7XG59KShUZXh0TGluZSB8fCAoVGV4dExpbmUgPSB7fSkpO1xuZXhwb3J0IHZhciBUZXh0TWV0cmljcztcbihmdW5jdGlvbiAoVGV4dE1ldHJpY3MpIHtcbiAgICBmdW5jdGlvbiBnZXRTeW1ib2xzKGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCB7IHRleHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCF0ZXh0IHx8ICF0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBUZXh0Rm9ybWF0LmNvbWJpbmUoY29tcG9uZW50LmZvcm1hdCwgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCwgZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBjb25zdCBzeW1ib2xzID0gW107XG4gICAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvcm1hdCA9IHt9O1xuICAgICAgICAgICAgVGV4dEZvcm1hdC5jb3B5KGRlZmF1bHRUZXh0Rm9ybWF0LCBzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9udCA9IEZvbnQuZ2V0Rm9udChzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gdGV4dFtpICsgMV07XG4gICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShzeW1ib2xGb250LCBzeW1ib2xGb3JtYXQuc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIHN5bWJvbEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgIHN5bWJvbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgYWR2YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBzeW1ib2xGb3JtYXQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0ZXh0KSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYmxvY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvcm1hdCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBUZXh0Rm9ybWF0LmNvcHkoZGVmYXVsdFRleHRGb3JtYXQsIHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvbnQgPSBGb250LmdldEZvbnQoc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBibG9jay5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gYmxvY2tbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gYmxvY2tbaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShzeW1ib2xGb250LCBzeW1ib2xGb3JtYXQuc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIHN5bWJvbEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9scy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHN5bWJvbEZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb3JtYXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgVGV4dEZvcm1hdC5jb21iaW5lKGJsb2NrLCBkZWZhdWx0VGV4dEZvcm1hdCwgc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9udCA9IEZvbnQuZ2V0Rm9udChzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJsb2NrLnRleHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IGJsb2NrLnRleHRbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gYmxvY2sudGV4dFtqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKHN5bWJvbEZvbnQsIHN5bWJvbEZvcm1hdC5zaXplLCBzeW1ib2wsIHN5bWJvbE5leHQpICsgc3ltYm9sRm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZHZhbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogc3ltYm9sRm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN5bWJvbHM7XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldFN5bWJvbHMgPSBnZXRTeW1ib2xzO1xuICAgIGZ1bmN0aW9uIGdldExpbmVzKGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBzeW1ib2xzID0gZ2V0U3ltYm9scyhjb21wb25lbnQpO1xuICAgICAgICBpZiAoIXN5bWJvbHMgfHwgIXN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIHdvcmRXcmFwID0gZmFsc2UgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgbXVsdGlsaW5lID0gVGV4dC5pc011bHRpbGluZShjb21wb25lbnQpO1xuICAgICAgICBjb25zdCBsaW5lcyA9IFtdO1xuICAgICAgICBsZXQgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICBpZiAobXVsdGlsaW5lKSB7XG4gICAgICAgICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgICAgICAgICBpZiAod29yZFdyYXApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd29yZCA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sLnN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5jb25jYXQobGluZSwgd29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuZW1wdHkod29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQod29yZCwgc3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGluZS53aWR0aCArIHdvcmQud2lkdGggPiB3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKC9cXHMvLnRlc3Qoc3ltYm9sLnN5bWJvbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuY29uY2F0KGxpbmUsIHdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5lbXB0eSh3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuY29uY2F0KGxpbmUsIHdvcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbC5zeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChsaW5lLndpZHRoICsgc3ltYm9sLmFkdmFuY2UgPiB3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZChsaW5lLCBzeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKGxpbmUsIHN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbC5zeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKGxpbmUsIHN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2ldO1xuICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZChsaW5lLCBzeW1ib2wpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5lLnN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICAgICAgVGV4dExpbmUuY29ycmVjdFdpZHRoKGxpbmUpO1xuICAgICAgICAgICAgICAgIGlmICghbGluZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5oZWlnaHQgPSBkZWZhdWx0VGV4dEZvcm1hdC5zaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbmUgPSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIFRleHRMaW5lLmNvcnJlY3RIZWlnaHQobGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH1cbiAgICBUZXh0TWV0cmljcy5nZXRMaW5lcyA9IGdldExpbmVzO1xuICAgIGZ1bmN0aW9uIGdldE1ldHJpY3MoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gZ2V0TGluZXMoY29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFsaW5lcyB8fCAhbGluZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1ldHJpY3MgPSB7XG4gICAgICAgICAgICBsaW5lcyxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICBtZXRyaWNzLndpZHRoID0gTWF0aC5tYXgobWV0cmljcy53aWR0aCwgbGluZS53aWR0aCk7XG4gICAgICAgICAgICBtZXRyaWNzLmhlaWdodCArPSBsaW5lLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWV0cmljcztcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0TWV0cmljcyA9IGdldE1ldHJpY3M7XG4gICAgZnVuY3Rpb24gZ2V0U2ltcGxlTWV0cmljcyhjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICh0eXBlb2YgdGV4dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgVGV4dEZvcm1hdC5jb21iaW5lKGNvbXBvbmVudC5mb3JtYXQsIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQsIGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgY29uc3QgeyBzaXplLCBsZXR0ZXJTcGFjaW5nLCBsZWFkaW5nIH0gPSBkZWZhdWx0VGV4dEZvcm1hdDtcbiAgICAgICAgY29uc3QgZm9udCA9IEZvbnQuZ2V0Rm9udChkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICAgIGxldCBoZWlnaHQgPSBzaXplO1xuICAgICAgICBsZXQgbGluZVdpZHRoID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2wgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgaWYgKHN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgKz0gc2l6ZSArIGxlYWRpbmc7XG4gICAgICAgICAgICAgICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCwgbGluZVdpZHRoKTtcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IHRleHRbaSArIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2UoZm9udCwgc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIGxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgbGluZVdpZHRoICs9IGFkdmFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCwgbGluZVdpZHRoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBUZXh0TWV0cmljcy5nZXRTaW1wbGVNZXRyaWNzID0gZ2V0U2ltcGxlTWV0cmljcztcbiAgICBmdW5jdGlvbiBnZXRTaW1wbGVXaWR0aChmb3JtYXQsIHRleHQsIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA+PSB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgVGV4dEZvcm1hdC5jb21iaW5lKGZvcm1hdCwgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCwgZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBjb25zdCB7IHNpemUsIGxldHRlclNwYWNpbmcgfSA9IGRlZmF1bHRUZXh0Rm9ybWF0O1xuICAgICAgICBjb25zdCBmb250ID0gRm9udC5nZXRGb250KGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgbGV0IHdpZHRoID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gdGV4dFtpXTtcbiAgICAgICAgICAgIGlmIChzeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IHRleHRbaSArIDFdO1xuICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShmb250LCBzaXplLCBzeW1ib2wsIHN5bWJvbE5leHQpICsgbGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgIHdpZHRoICs9IGFkdmFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cbiAgICBUZXh0TWV0cmljcy5nZXRTaW1wbGVXaWR0aCA9IGdldFNpbXBsZVdpZHRoO1xufSkoVGV4dE1ldHJpY3MgfHwgKFRleHRNZXRyaWNzID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvZm9ybWF0JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9mb250JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9tZXRyaWNzJztcbmV4cG9ydCAqIGZyb20gJy4vY2FudmFzL3RleHQnO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgVGV4dE1ldHJpY3MgfSBmcm9tICcuL2RhdGEvbWV0cmljcyc7XG5leHBvcnQgY29uc3QgVEVYVCA9ICd0ZXh0JztcbmV4cG9ydCB2YXIgVGV4dDtcbihmdW5jdGlvbiAoVGV4dCkge1xuICAgIGZ1bmN0aW9uIGdldFRleHQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0ZXh0KSkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYmxvY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBibG9jay50ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBUZXh0LmdldFRleHQgPSBnZXRUZXh0O1xuICAgIGZ1bmN0aW9uIGlzVXBkYXRlTWV0cmljcyhjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC51cGRhdGVNZXRyaWNzID8/IHRydWU7XG4gICAgfVxuICAgIFRleHQuaXNVcGRhdGVNZXRyaWNzID0gaXNVcGRhdGVNZXRyaWNzO1xuICAgIGZ1bmN0aW9uIGlzQXV0b1NpemUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiAhY29tcG9uZW50LndpZHRoICYmICFjb21wb25lbnQuaGVpZ2h0O1xuICAgIH1cbiAgICBUZXh0LmlzQXV0b1NpemUgPSBpc0F1dG9TaXplO1xuICAgIGZ1bmN0aW9uIGlzU2ltcGxlKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGNvbXBvbmVudC50ZXh0ID09PSAnc3RyaW5nJyAmJiBpc0F1dG9TaXplKGNvbXBvbmVudCk7XG4gICAgfVxuICAgIFRleHQuaXNTaW1wbGUgPSBpc1NpbXBsZTtcbiAgICBmdW5jdGlvbiBpc011bHRpbGluZShjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5tdWx0aWxpbmUgPz8gdHJ1ZTtcbiAgICB9XG4gICAgVGV4dC5pc011bHRpbGluZSA9IGlzTXVsdGlsaW5lO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZU1ldHJpY3MoY29tcG9uZW50KSB7XG4gICAgICAgIGlmIChpc1NpbXBsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICBjb21wb25lbnQubWV0cmljcyA9IFRleHRNZXRyaWNzLmdldFNpbXBsZU1ldHJpY3MoY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5tZXRyaWNzID0gVGV4dE1ldHJpY3MuZ2V0TWV0cmljcyhjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHQudXBkYXRlTWV0cmljcyA9IHVwZGF0ZU1ldHJpY3M7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGNvbXBvbmVudCwgYm91bmRzKSB7XG4gICAgICAgIGlmIChpc1VwZGF0ZU1ldHJpY3MoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgdXBkYXRlTWV0cmljcyhjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbWV0cmljcyB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIW1ldHJpY3MpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCF3aWR0aCkge1xuICAgICAgICAgICAgd2lkdGggPSBtZXRyaWNzLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaGVpZ2h0KSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBtZXRyaWNzLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChjb21wb25lbnQsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoY29tcG9uZW50LCBoZWlnaHQpO1xuICAgICAgICBib3VuZHMueCA9IHg7XG4gICAgICAgIGJvdW5kcy55ID0geTtcbiAgICAgICAgYm91bmRzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGJvdW5kcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIFRleHQuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoVGV4dCB8fCAoVGV4dCA9IHt9KSk7XG5jb25zdCBib3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgVGV4dEV4dGVuc2lvbjtcbihmdW5jdGlvbiAoVGV4dEV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGhpdFRlc3QodGV4dCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgbG9jYWwgfSA9IGVuZ2luZS5wb2ludGVycztcbiAgICAgICAgVGV4dC5jYWxjdWxhdGVCb3VuZHModGV4dCwgYm91bmRzKTtcbiAgICAgICAgcmV0dXJuIFJlY3RhbmdsZS5jb250YWlucyhib3VuZHMsIGxvY2FsKTtcbiAgICB9XG4gICAgVGV4dEV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChURVhULCBoaXRUZXN0KTtcbiAgICB9XG4gICAgVGV4dEV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFRleHRFeHRlbnNpb24gfHwgKFRleHRFeHRlbnNpb24gPSB7fSkpO1xuIiwiZXhwb3J0IGNvbnN0IExJTkVBUiA9ICdsaW5lYXInO1xuZXhwb3J0IGNvbnN0IFFVQURSQVRJQyA9ICdxdWFkcmF0aWMnO1xuZXhwb3J0IGNvbnN0IFFVQURSQVRJQ19JTiA9ICdxdWFkcmF0aWNpbic7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDX09VVCA9ICdxdWFkcmF0aWNvdXQnO1xuZXhwb3J0IGNvbnN0IENVQklDID0gJ2N1YmljJztcbmV4cG9ydCBjb25zdCBDVUJJQ19JTiA9ICdjdWJpY2luJztcbmV4cG9ydCBjb25zdCBDVUJJQ19PVVQgPSAnY3ViaWNvdXQnO1xuZXhwb3J0IGNvbnN0IFFVQVJUSUMgPSAncXVhcnRpYyc7XG5leHBvcnQgY29uc3QgUVVBUlRJQ19JTiA9ICdxdWFydGljaW4nO1xuZXhwb3J0IGNvbnN0IFFVQVJUSUNfT1VUID0gJ3F1YXJ0aWNvdXQnO1xuZXhwb3J0IGNvbnN0IFFVSU5USUMgPSAncXVpbnRpYyc7XG5leHBvcnQgY29uc3QgUVVJTlRJQ19JTiA9ICdxdWludGljaW4nO1xuZXhwb3J0IGNvbnN0IFFVSU5USUNfT1VUID0gJ3F1aW50aWNvdXQnO1xuZXhwb3J0IGNvbnN0IFNJTlVTT0lEQUwgPSAncXVpbnRpYyc7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTF9JTiA9ICdxdWludGljaW4nO1xuZXhwb3J0IGNvbnN0IFNJTlVTT0lEQUxfT1VUID0gJ3F1aW50aWNvdXQnO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMID0gJ2V4cG9uZW50aWFsJztcbmV4cG9ydCBjb25zdCBFWFBPTkVOVElBTF9JTiA9ICdleHBvbmVudGlhbGluJztcbmV4cG9ydCBjb25zdCBFWFBPTkVOVElBTF9PVVQgPSAnZXhwb25lbnRpYWxvdXQnO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSID0gJ2NpcmN1bGFyJztcbmV4cG9ydCBjb25zdCBDSVJDVUxBUl9JTiA9ICdjaXJjdWxhcmluJztcbmV4cG9ydCBjb25zdCBDSVJDVUxBUl9PVVQgPSAnY2lyY3VsYXJvdXQnO1xuZXhwb3J0IGNvbnN0IEVMQVNUSUMgPSAnZWxhc3RpYyc7XG5leHBvcnQgY29uc3QgRUxBU1RJQ19JTiA9ICdlbGFzdGljaW4nO1xuZXhwb3J0IGNvbnN0IEVMQVNUSUNfT1VUID0gJ2VsYXN0aWNvdXQnO1xuZXhwb3J0IGNvbnN0IEJBQ0sgPSAnYmFjayc7XG5leHBvcnQgY29uc3QgQkFDS19JTiA9ICdiYWNraW4nO1xuZXhwb3J0IGNvbnN0IEJBQ0tfT1VUID0gJ2JhY2tvdXQnO1xuZXhwb3J0IGNvbnN0IEJPVU5DRSA9ICdib3VuY2UnO1xuZXhwb3J0IGNvbnN0IEJPVU5DRV9JTiA9ICdib3VuY2Vpbic7XG5leHBvcnQgY29uc3QgQk9VTkNFX09VVCA9ICdib3VuY2VvdXQnO1xuZXhwb3J0IGNvbnN0IGVhc2luZyA9IHtcbiAgICBbTElORUFSXTogKHZhbHVlKSA9PiB2YWx1ZSxcbiAgICBbUVVBRFJBVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTAuNSAqICgtLXZhbHVlICogKHZhbHVlIC0gMikgLSAxKTtcbiAgICB9LFxuICAgIFtRVUFEUkFUSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVBRFJBVElDX09VVF06ICh2YWx1ZSkgPT4gKHZhbHVlICogKDIgLSB2YWx1ZSkpLFxuICAgIFtDVUJJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKyAyKTtcbiAgICB9LFxuICAgIFtDVUJJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW0NVQklDX09VVF06ICh2YWx1ZSkgPT4gKC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMSksXG4gICAgW1FVQVJUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgLSAyKTtcbiAgICB9LFxuICAgIFtRVUFSVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUFSVElDX09VVF06ICh2YWx1ZSkgPT4gKDEgLSAtLXZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVJTlRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDIpO1xuICAgIH0sXG4gICAgW1FVSU5USUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVJTlRJQ19PVVRdOiAodmFsdWUpID0+ICgtLXZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAxKSxcbiAgICBbU0lOVVNPSURBTF06ICh2YWx1ZSkgPT4gKDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIHZhbHVlKSkpLFxuICAgIFtTSU5VU09JREFMX0lOXTogKHZhbHVlKSA9PiAoMSAtIE1hdGguY29zKCh2YWx1ZSAqIE1hdGguUEkpIC8gMikpLFxuICAgIFtTSU5VU09JREFMX09VVF06ICh2YWx1ZSkgPT4gKE1hdGguc2luKCh2YWx1ZSAqIE1hdGguUEkpIC8gMikpLFxuICAgIFtFWFBPTkVOVElBTF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiBNYXRoLnBvdygxMDI0LCB2YWx1ZSAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoLU1hdGgucG93KDIsIC0xMCAqICh2YWx1ZSAtIDEpKSArIDIpO1xuICAgIH0sXG4gICAgW0VYUE9ORU5USUFMX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgPT09IDAgPyAwIDogTWF0aC5wb3coMTAyNCwgdmFsdWUgLSAxKSksXG4gICAgW0VYUE9ORU5USUFMX09VVF06ICh2YWx1ZSkgPT4gKHZhbHVlID09PSAxID8gMSA6IDEgLSBNYXRoLnBvdygyLCAtMTAgKiB2YWx1ZSkpLFxuICAgIFtDSVJDVUxBUl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSB2YWx1ZSAqIHZhbHVlKSAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAodmFsdWUgLT0gMikgKiB2YWx1ZSkgKyAxKTtcbiAgICB9LFxuICAgIFtDSVJDVUxBUl9JTl06ICh2YWx1ZSkgPT4gKDEgLSBNYXRoLnNxcnQoMSAtIHZhbHVlICogdmFsdWUpKSxcbiAgICBbQ0lSQ1VMQVJfT1VUXTogKHZhbHVlKSA9PiBNYXRoLnNxcnQoMSAtIC0tdmFsdWUgKiB2YWx1ZSksXG4gICAgW0VMQVNUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlICo9IDI7XG4gICAgICAgIGlmICh2YWx1ZSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAtMC41ICogTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiBNYXRoLnBvdygyLCAtMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpICsgMTtcbiAgICB9LFxuICAgIFtFTEFTVElDX0lOXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLU1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcbiAgICB9LFxuICAgIFtFTEFTVElDX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGgucG93KDIsIC0xMCAqIHZhbHVlKSAqIE1hdGguc2luKCh2YWx1ZSAtIDAuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuICAgIH0sXG4gICAgW0JBQ0tdOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTggKiAxLjUyNTtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiAodmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgLSBzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgKyBzKSArIDIpO1xuICAgIH0sXG4gICAgW0JBQ0tfSU5dOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTg7XG4gICAgICAgIHJldHVybiB2YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSAtIHMpO1xuICAgIH0sXG4gICAgW0JBQ0tfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gLS12YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSArIHMpICsgMTtcbiAgICB9LFxuICAgIFtCT1VOQ0VdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMC41KSB7XG4gICAgICAgICAgICByZXR1cm4gZWFzaW5nW0JPVU5DRV9JTl0odmFsdWUgKiAyKSAqIDAuNTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWFzaW5nW0JPVU5DRV9PVVRdKHZhbHVlICogMiAtIDEpICogMC41ICsgMC41O1xuICAgIH0sXG4gICAgW0JPVU5DRV9JTl06ICh2YWx1ZSkgPT4gKDEgLSBlYXNpbmdbQk9VTkNFX09VVF0oMSAtIHZhbHVlKSksXG4gICAgW0JPVU5DRV9PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMSAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA8IDIgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDEuNSAvIDIuNzUpICogdmFsdWUgKyAwLjc1O1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA8IDIuNSAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMi4yNSAvIDIuNzUpICogdmFsdWUgKyAwLjkzNzU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAyLjYyNSAvIDIuNzUpICogdmFsdWUgKyAwLjk4NDM3NTtcbiAgICB9LFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdHdlZW4nO1xuZXhwb3J0ICogZnJvbSAnLi9lYXNpbmcnO1xuIiwiaW1wb3J0IHsgZWFzaW5nLCBMSU5FQVIgfSBmcm9tICcuL2Vhc2luZyc7XG5leHBvcnQgY29uc3QgVFdFRU4gPSAndHdlZW4nO1xuZXhwb3J0IHZhciBUd2VlbkV4dGVuc2lvbjtcbihmdW5jdGlvbiAoVHdlZW5FeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29tcG9uZW50LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyB0d2VlbiB9ID0gY29tcG9uZW50O1xuICAgICAgICBjb25zdCB7IHBoYXNlcyB9ID0gdHdlZW47XG4gICAgICAgIGlmICghcGhhc2VzPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdBbmltYXRpb24gcGFydHMgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR3ZWVuLnRpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdHdlZW4udGltZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdHdlZW4udGltZSArPSBlbmdpbmUudXBkYXRlci50aW1lO1xuICAgICAgICBjb25zdCB7IHRpbWUgfSA9IHR3ZWVuO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgcGhhc2VzLmZvckVhY2goKHBoYXNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXBoYXNlLnRpbWUpIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnQW5pbWF0aW9uIHRpbWUgbm90IHNldCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaGFzZS5vZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHBoYXNlLm9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVhc2luZ05hbWUgPSBwaGFzZT8uZWFzaW5nPy50b0xvd2VyQ2FzZSgpID8/IExJTkVBUjtcbiAgICAgICAgICAgIGNvbnN0IGVhc2luZ01ldGhvZCA9IGVhc2luZ1tlYXNpbmdOYW1lXTtcbiAgICAgICAgICAgIGlmICghZWFzaW5nTWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoYFVua25vd24gZWFzaW5nIHR5cGU6ICR7ZWFzaW5nfWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKHRpbWUgLSBvZmZzZXQpIC8gcGhhc2UudGltZTtcbiAgICAgICAgICAgIG9mZnNldCArPSBwaGFzZS50aW1lO1xuICAgICAgICAgICAgaWYgKHZhbHVlIDwgMCB8fCB2YWx1ZSA+IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlYXNpbmdWYWx1ZSA9IGVhc2luZ01ldGhvZCh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoIXBoYXNlLnRvKSB7XG4gICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ0FuaW1hdGlvbiBcInRvXCIgc3RhdGUgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwaGFzZS5mcm9tKSB7XG4gICAgICAgICAgICAgICAgcGhhc2UuZnJvbSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB0bywgZnJvbSB9ID0gcGhhc2U7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGNvbXBvbmVudDtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRvKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZnJvbVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbVtrZXldID0gc3RhdGVba2V5XSA/PyAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBmcm9tVmFsdWUgPSBmcm9tW2tleV07XG4gICAgICAgICAgICAgICAgY29uc3QgdG9WYWx1ZSA9IHRvW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmcm9tVmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiB0b1ZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZVZhbHVlID0gZnJvbVZhbHVlICsgZWFzaW5nVmFsdWUgKiAodG9WYWx1ZSAtIGZyb21WYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlW2tleV0gPSBzdGF0ZVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHR3ZWVuLmxvb3AgJiYgdHdlZW4udGltZSA+IG9mZnNldCkge1xuICAgICAgICAgICAgdHdlZW4udGltZSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVHdlZW5FeHRlbnNpb24udXBkYXRlID0gdXBkYXRlO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnByb3BlcnRpZXMuc2V0KFRXRUVOLCB1cGRhdGUpO1xuICAgIH1cbiAgICBUd2VlbkV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFR3ZWVuRXh0ZW5zaW9uIHx8IChUd2VlbkV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBBQklMSVRZX1dPTEYgfSBmcm9tICcuL2Fzc2V0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY3Vyc2l2ZSgpIHtcblx0Y29uc3QgY29udGFpbmVyID0ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdHg6IDMwLFxuXHRcdFx0eTogMzAsXG5cdFx0XHRzY2FsZVg6IDAuOSxcblx0XHRcdHNjYWxlWTogMC45LFxuXHRcdFx0cm90YXRpb246IDAuMixcblx0XHRcdGFscGhhOiAwLjksXG5cdFx0XHRjaGlsZHJlbjogW3tcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBBQklMSVRZX1dPTEYsXG5cdFx0XHRcdHNjYWxlOiAwLjMsXG5cdFx0XHR9XSxcblx0XHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0XHR0aGlzLnJvdGF0aW9uICs9IHRpbWUgKiAwLjA1O1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXG5cdGNvbnRhaW5lci5jaGlsZHJlbi5jaGlsZHJlbi5wdXNoKGNvbnRhaW5lciBhcyBuZXZlcik7XG5cblx0cmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsImNvbnN0IEFTU0VUUyA9ICdhc3NldHMvJztcblxuZXhwb3J0IGNvbnN0IEFOSU1BTElTVCA9ICdpZDphbmltYWxpc3QnO1xuZXhwb3J0IGNvbnN0IEFSQ0hFUiA9ICdpZDphcmNoZXInO1xuXG5leHBvcnQgY29uc3QgQU5JTUFMSVNUX0lNQUdFID0gYCR7QVNTRVRTfUFuaW1hbGlzdEZveDFfaW1hZ2UucG5nYDtcbmV4cG9ydCBjb25zdCBBUkNIRVJfSU1BR0UgPSBgJHtBU1NFVFN9QXJjaGVyMl9odW50ZXJfaW1hZ2UucG5nYDtcblxuZXhwb3J0IGNvbnN0IEFCSUxJVFlfRk9YID0gYCR7QVNTRVRTfUFuaW1hbGlzdEFiaWxpdHlfRm94LnBuZ2A7XG5leHBvcnQgY29uc3QgQUJJTElUWV9XT0xGID0gYCR7QVNTRVRTfUFuaW1hbGlzdEFiaWxpdHlfV29sZi5wbmdgO1xuXG5leHBvcnQgY29uc3QgQkFDS0dST1VORCA9IGAke0FTU0VUU31qdW5nbGVfYmFja2dyb3VuZC5qcGdgO1xuXG5leHBvcnQgY29uc3QgVEVTVF9DQU5WQVMgPSAndGVzdC5jYW52YXMnO1xuXG5leHBvcnQgY29uc3QgU0NFTkUgPSBgJHtBU1NFVFN9L3NjZW5lLmpzb25gO1xuIiwiaW1wb3J0IHsgQ2FudmFzRW5naW5lIH0gZnJvbSAnQGplbmcvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBFbmdpbmVNb2R1bGUgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IENhbnZhc1RleHRFeHRlbnNpb24gfSBmcm9tICdAamVuZy90ZXh0JztcbmltcG9ydCB7IEN1c3RvbUltYWdlRXh0ZW5zaW9uIH0gZnJvbSAnLi9pbWFnZSc7XG5pbXBvcnQgQ3VzdG9tUGxhdGZvcm0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUVuZ2luZSBleHRlbmRzIENhbnZhc0VuZ2luZSB7XG5cdGNvbnN0cnVjdG9yKG1vZHVsZTogRW5naW5lTW9kdWxlID0ge30pIHtcblx0XHRtb2R1bGUuUGxhdGZvcm0gPSBtb2R1bGUuUGxhdGZvcm0gPz8gQ3VzdG9tUGxhdGZvcm07XG5cblx0XHRzdXBlcihtb2R1bGUpO1xuXG5cdFx0Q2FudmFzVGV4dEV4dGVuc2lvbi5pbml0KHRoaXMpO1xuXHRcdEN1c3RvbUltYWdlRXh0ZW5zaW9uLmluaXQodGhpcyk7XG5cdH1cbn1cbiIsImltcG9ydCB7IENhbnZhc0VuZ2luZSwgQ2FudmFzUGxhdGZvcm0gfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBJbWFnZUV4dGVuc2lvbiwgSU1BR0UsIEltYWdlIH0gZnJvbSAnQGplbmcvaW1hZ2UnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5cbmV4cG9ydCBuYW1lc3BhY2UgQ3VzdG9tSW1hZ2VFeHRlbnNpb24ge1xuXHRleHBvcnQgZnVuY3Rpb24gcmVuZGVyKGltYWdlOiBJbWFnZSwgZW5naW5lOiBDYW52YXNFbmdpbmUpOiB2b2lkIHtcblx0XHRpZiAoIWltYWdlLnNyYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHsgbWF0cml4LCBjb2xvclRyYW5zZm9ybSB9ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcblxuXHRcdGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoaW1hZ2Uuc3JjKSBhcyBJbWFnZVJlc291cmNlIHwgbnVsbDtcblxuXHRcdGlmICghcmVzb3VyY2U/LmxvYWRlZCB8fCAhcmVzb3VyY2U/LmltYWdlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29udGV4dDJkID0gKGVuZ2luZS5wbGF0Zm9ybSBhcyBDYW52YXNQbGF0Zm9ybSkuZ2V0Q29udGV4dCgpO1xuXG5cdFx0Y29udGV4dDJkLnNldFRyYW5zZm9ybShcblx0XHRcdG1hdHJpeC5hLFxuXHRcdFx0bWF0cml4LmIsXG5cdFx0XHRtYXRyaXguYyxcblx0XHRcdG1hdHJpeC5kLFxuXHRcdFx0bWF0cml4LnR4LFxuXHRcdFx0bWF0cml4LnR5LFxuXHRcdCk7XG5cblx0XHRjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuXHRcdGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG5cdFx0Y29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG5cblx0XHRjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcblx0XHRjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnbGlnaHRncmF5Jztcblx0XHRjb250ZXh0MmQuc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcblx0fVxuXG5cdGV4cG9ydCBmdW5jdGlvbiBpbml0KGVuZ2luZTogQ2FudmFzRW5naW5lKSB7XG5cdFx0SW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuXHRcdGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoSU1BR0UsIHJlbmRlcik7XG5cdH1cbn1cbiIsImltcG9ydCB7IENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnQGplbmcvY2FudmFzLWVuZ2luZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVBsYXRmb3JtIGV4dGVuZHMgQ2FudmFzUGxhdGZvcm0ge1xuXHRjbGVhcigpIHtcblx0XHRjb25zdCBjb250ZXh0MmQgPSB0aGlzLmdldENvbnRleHQoKTtcblx0XHRjb250ZXh0MmQuZmlsbFN0eWxlID0gJ2JsYWNrJztcblx0XHRjb250ZXh0MmQuc2V0VHJhbnNmb3JtKCk7XG5cdFx0Y29udGV4dDJkLmZpbGxSZWN0KDAsIDAsIGNvbnRleHQyZC5jYW52YXMud2lkdGgsIGNvbnRleHQyZC5jYW52YXMuaGVpZ2h0KTtcblx0XHRjb250ZXh0MmQuZmlsbFN0eWxlID0gJyc7XG5cdH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZSB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVJlc291cmNlTWFuYWdlciB7XG5cdHJlYWRvbmx5IGFsaWFzZXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXHRyZWFkb25seSByZXNvdXJjZXMgPSBuZXcgTWFwPHN0cmluZywgSW1hZ2VSZXNvdXJjZT4oKTtcblxuXHRyZXNvbHZlID0gKGFzc2V0OiBzdHJpbmcsIGVuZ2luZTogRW5naW5lKTogSW1hZ2VSZXNvdXJjZSB8IG51bGwgPT4ge1xuXHRcdGlmIChhc3NldC5pbmRleE9mKCdpZDonKSA9PT0gMCkge1xuXHRcdFx0Y29uc3QgaWQgPSBhc3NldC5zbGljZSgzKTtcblx0XHRcdGxldCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VzLmdldChpZCkgYXMgSW1hZ2VSZXNvdXJjZTtcblx0XHRcdGlmICghcmVzb3VyY2UpIHtcblx0XHRcdFx0Y29uc3QgdXJsID0gdGhpcy5hbGlhc2VzLmdldChpZCk7XG5cdFx0XHRcdGlmICh1cmwpIHtcblx0XHRcdFx0XHRyZXNvdXJjZSA9IEltYWdlUmVzb3VyY2UucmVzb2x2ZSh1cmwsIGVuZ2luZSkgYXMgSW1hZ2VSZXNvdXJjZTtcblx0XHRcdFx0XHR0aGlzLnJlc291cmNlcy5zZXQoaWQsIHJlc291cmNlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbmdpbmUuZGVidWcud2FybmluZyhgUmVzb3VyY2Ugd2l0aCBpZDogJHthc3NldH0gbm90IGZvdW5kYCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZXNvdXJjZTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRpbml0KGVuZ2luZTogRW5naW5lKSB7XG5cdFx0ZW5naW5lLnJlc291cmNlcy5yZXNvbHZlcnMuYWRkKHRoaXMucmVzb2x2ZSk7XG5cdH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgU3RhdGlzdGljcyB7XG5cdGdldFJlbmRlclRpbWUoKTogbnVtYmVyO1xuXHRnZXRVcGRhdGVUaW1lKCk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZwcyhzdGF0aXN0aWNzOiBTdGF0aXN0aWNzKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHRleHQ6ICdmcHMnLFxuXHRcdGZyYW1lczogMCxcblx0XHRmcmFtZVRpbWU6IDAsXG5cdFx0dXBkYXRlVGltZTogMCxcblx0XHRyZW5kZXJUaW1lOiAwLFxuXHRcdGZvcm1hdDoge1xuXHRcdFx0c2l6ZTogMjAsXG5cdFx0XHRjb2xvcjogMHhmZmZmZmYsXG5cdFx0fSxcblx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMuZnJhbWVUaW1lICs9IHRpbWU7XG5cdFx0XHR0aGlzLnVwZGF0ZVRpbWUgKz0gc3RhdGlzdGljcy5nZXRVcGRhdGVUaW1lKCk7XG5cdFx0XHR0aGlzLnJlbmRlclRpbWUgKz0gc3RhdGlzdGljcy5nZXRSZW5kZXJUaW1lKCk7XG5cdFx0XHR0aGlzLmZyYW1lcysrO1xuXHRcdFx0aWYgKHRoaXMuZnJhbWVUaW1lID49IDEpIHtcblx0XHRcdFx0Y29uc3QgZnJhbWVUaW1lID0gTWF0aC5jZWlsKDEwMDAgKiB0aGlzLmZyYW1lVGltZSAvIHRoaXMuZnJhbWVzKTtcblx0XHRcdFx0Y29uc3QgdXBkYXRlVGltZSA9ICh0aGlzLnVwZGF0ZVRpbWUgLyB0aGlzLmZyYW1lcykudG9GaXhlZCgyKTtcblx0XHRcdFx0Y29uc3QgcmVuZGVyVGltZSA9ICh0aGlzLnJlbmRlclRpbWUgLyB0aGlzLmZyYW1lcykudG9GaXhlZCgyKTtcblx0XHRcdFx0dGhpcy50ZXh0ID0gYGZwczogJHt0aGlzLmZyYW1lc30sICR7ZnJhbWVUaW1lfSBtc1xcbnVwZGF0ZTogJHt1cGRhdGVUaW1lfSBtc1xcbnJlbmRlcjogJHtyZW5kZXJUaW1lfSBtc2A7XG5cdFx0XHRcdHRoaXMuZnJhbWVUaW1lID0gMDtcblx0XHRcdFx0dGhpcy51cGRhdGVUaW1lID0gMDtcblx0XHRcdFx0dGhpcy5yZW5kZXJUaW1lID0gMDtcblx0XHRcdFx0dGhpcy5mcmFtZXMgPSAwO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7XG5cdEFCSUxJVFlfRk9YLCBBQklMSVRZX1dPTEYsIEFOSU1BTElTVCwgQVJDSEVSLCBCQUNLR1JPVU5ELCBTQ0VORSxcbn0gZnJvbSAnLi9hc3NldHMnO1xuaW1wb3J0IGFydGlmYWN0IGZyb20gJy4vYXJ0aWZhY3QnO1xuaW1wb3J0IHsgZnBzLCBTdGF0aXN0aWNzIH0gZnJvbSAnLi9mcHMnO1xuaW1wb3J0IHsgdW5pdCwgVW5pdFByb3BlcnRpZXMgfSBmcm9tICcuL3VuaXQnO1xuaW1wb3J0IHsgcHJlbG9hZGVyLCBQcmVsb2FkZXJJbmZvIH0gZnJvbSAnLi9wcmVsb2FkZXInO1xuXG5pbnRlcmZhY2UgTWFpbiB7XG5cdHN0YXJ0KCk6IHZvaWQ7XG5cdFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuaW50ZXJmYWNlIE1haW5Qcm9wZXJ0aWVzIGV4dGVuZHMgU3RhdGlzdGljcyB7XG5cdGdldENhbnZhc1dpZHRoKCk6IG51bWJlcjtcblx0Z2V0Q2FudmFzSGVpZ2h0KCk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbihwYXJhbWV0ZXJzOiBNYWluUHJvcGVydGllcyk6IE1haW4ge1xuXHRmdW5jdGlvbiBvblVuaXRDbGljayhkYXRhOiBVbml0UHJvcGVydGllcykge1xuXHRcdGRhdGEuaGVhbHRoID0gTWF0aC5yYW5kb20oKTtcblx0XHRjb25zb2xlLmxvZygnb25Vbml0Q2xpY2snLCBkYXRhLm5hbWUpO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IHtcblx0XHR0eXBlOiAnbG9hZGVyJyxcblx0XHR2aXNpYmxlOiBmYWxzZSxcblx0XHRlbmFibGVkOiBmYWxzZSxcblx0XHRvbkxvYWRlZCgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdiYWNrZ3JvdW5kIGxvYWRlZCcpO1xuXHRcdFx0dGhpcy52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0fSxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0YmFja2dyb3VuZDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEJBQ0tHUk9VTkQsXG5cdFx0XHRcdHNjYWxlWDogMSxcblx0XHRcdFx0c2NhbGVZOiAxLFxuXHRcdFx0fSxcblx0XHRcdGZpZ3VyZToge1xuXHRcdFx0XHR0eXBlOiAnc2hhcGUnLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3JlY3RhbmdsZScsXG5cdFx0XHRcdFx0eDogMjAsXG5cdFx0XHRcdFx0eTogMjAsXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCxcblx0XHRcdFx0XHRoZWlnaHQ6IDUwLFxuXHRcdFx0XHRcdGZpbGw6IDB4ZmYwMGZmLFxuXHRcdFx0XHRcdHN0cm9rZTogMHgwMDAwZmYsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0c2hhcGVzOiB7XG5cdFx0XHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0XHRcdGRhdGE6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAnZWxsaXBzZScsXG5cdFx0XHRcdFx0XHR4OiAxMDAsXG5cdFx0XHRcdFx0XHR5OiAxMDAsXG5cdFx0XHRcdFx0XHRyYWRpdXM6IDUwLFxuXHRcdFx0XHRcdFx0ZmlsbDogeyB0eXBlOiAnc29saWQnLCBjb2xvcjogMHhmZmZmMDAsIGFscGhhOiAxIH0sXG5cdFx0XHRcdFx0XHRzdHJva2U6IHsgZmlsbDogMHgwMDAwZmYsIHRoaWNrbmVzczogMTAgfSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdwYXRoJyxcblx0XHRcdFx0XHRcdGRhdGE6ICdNIDExMCwgMTEwIEggMTkwIFYgMTkwIEggMTEwIFonLFxuXHRcdFx0XHRcdFx0ZmlsbDogMHg5OTAwMDAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAncGF0aCcsXG5cdFx0XHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ21vdmVUbycsIHg6IDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMTAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDEwMCwgeTogMTAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDAsIHk6IDEwMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0ZmlsbDogeyB0eXBlOiAnc29saWQnLCBjb2xvcjogMHg5OTk5OTksIGFscGhhOiAwLjYgfSxcblx0XHRcdFx0XHRcdHN0cm9rZTogMHgwMDAwMDAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHR1bml0czoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHR1bml0KHtcblx0XHRcdFx0XHRcdG5hbWU6ICdBcmNoZXInLCBoZWFsdGg6IDEsIGltYWdlOiBBUkNIRVIsIG9uQ2xpY2s6IG9uVW5pdENsaWNrLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdHVuaXQoe1xuXHRcdFx0XHRcdFx0bmFtZTogJ0FuaW1hbGlzdCcsIGhlYWx0aDogMSwgaW1hZ2U6IEFOSU1BTElTVCwgb25DbGljazogb25Vbml0Q2xpY2ssXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0YXJ0aWZhY3Q6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdHg6IDMwMCxcblx0XHRcdFx0eTogMzUwLFxuXHRcdFx0XHRjaGlsZHJlbjogYXJ0aWZhY3QoKSxcblx0XHRcdH0sXG5cdFx0XHRtYXA6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0eTogNDUwLFxuXHRcdFx0XHRzY2FsZVg6IDAuMixcblx0XHRcdFx0c2NhbGVZOiAwLjIsXG5cdFx0XHRcdGFscGhhOiAwLjUsXG5cdFx0XHRcdHNyYzogJ3Rlc3QuY2FudmFzJyxcblx0XHRcdFx0b25Qb2ludGVyT3ZlcigpIHtcblx0XHRcdFx0XHR0aGlzLmFscGhhID0gMTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b25Qb2ludGVyT3V0KCkge1xuXHRcdFx0XHRcdHRoaXMuYWxwaGEgPSAwLjU7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YWJpbGl0eUZveDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEFCSUxJVFlfRk9YLFxuXHRcdFx0XHR4OiA0NTAsXG5cdFx0XHRcdHk6IDUwMCxcblx0XHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdFx0dGludDoge1xuXHRcdFx0XHRcdGNvbG9yOiAweDAwZmYwMCxcblx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0fSBhcyBhbnksXG5cdFx0XHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0XHRcdGlmICh0aGlzLnRpbnQpIHtcblx0XHRcdFx0XHRcdHRoaXMudGludC52YWx1ZSArPSB0aW1lO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMudGludC52YWx1ZSA+PSAxKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudGludC52YWx1ZSA9IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duKGU6IGFueSkge1xuXHRcdFx0XHRcdGlmICh0aGlzLnRpbnQpIHtcblx0XHRcdFx0XHRcdHRoaXMudGludCA9IG51bGw7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMudGludCA9IHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IDB4MDBmZjAwLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmb3gnLCBlKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRhYmlsaXR5V29sZjoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0eDogMzUwLFxuXHRcdFx0XHR5OiA0MDAsXG5cdFx0XHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0XHRzcmM6IEFCSUxJVFlfV09MRixcblx0XHRcdFx0XHRzY2FsZTogMC41LFxuXHRcdFx0XHRcdGFscGhhOiAxLFxuXHRcdFx0XHRcdHR3ZWVuOiB7XG5cdFx0XHRcdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0XHRcdFx0cGhhc2VzOiBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHg6IDIwMCB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAnY3ViaWNvdXQnLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeTogMjAwLCBhbHBoYTogMC41IH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6ICdxdWFkcmF0aWNJbicsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB4OiAwLCBhbHBoYTogMSB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAncXVhZHJhdGljT3V0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRmcHM6IGZwcyhwYXJhbWV0ZXJzKSxcblx0XHR9LFxuXHR9O1xuXG5cdGNvbnN0IHByZWxvYWRlckluZm86IFByZWxvYWRlckluZm8gPSB7XG5cdFx0Z2V0V2lkdGg6IHBhcmFtZXRlcnMuZ2V0Q2FudmFzV2lkdGgsXG5cdFx0Z2V0SGVpZ2h0OiBwYXJhbWV0ZXJzLmdldENhbnZhc0hlaWdodCxcblx0XHRnZXRQcm9ncmVzcygpIHtcblx0XHRcdHJldHVybiBMb2FkZXIuZ2V0TG9hZGluZ1Byb2dyZXNzKGNvbnRlbnQpO1xuXHRcdH0sXG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0Y29udGVudCxcblx0XHRcdHByZWxvYWRlcjogcHJlbG9hZGVyKHByZWxvYWRlckluZm8pLFxuXHRcdFx0c2NlbmU6IHtcblx0XHRcdFx0dHlwZTogJ3NjZW5lJywgeDogMzAwLCBzcmM6IFNDRU5FLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdG9uVXBkYXRlKCkge1xuXHRcdFx0Y29uc3QgaXNMb2FkZWQgPSAhdGhpcy5jaGlsZHJlbi5jb250ZW50LnZpc2libGU7XG5cdFx0XHR0aGlzLmNoaWxkcmVuLnByZWxvYWRlci52aXNpYmxlID0gaXNMb2FkZWQ7XG5cdFx0XHR0aGlzLmNoaWxkcmVuLnByZWxvYWRlci5lbmFibGVkID0gaXNMb2FkZWQ7XG5cdFx0fSxcblx0XHRzdGFydCgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdzdGFydCcpO1xuXHRcdH0sXG5cdH07XG59XG4iLCJpbXBvcnQgeyBTaGFwZSB9IGZyb20gJ0BqZW5nL3NoYXBlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcmVsb2FkZXJJbmZvIHtcblx0Z2V0UHJvZ3Jlc3MoKTogbnVtYmVyO1xuXHRnZXRXaWR0aCgpOiBudW1iZXI7XG5cdGdldEhlaWdodCgpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkZXIoaW5mbzogUHJlbG9hZGVySW5mbykge1xuXHRjb25zdCBoZWlnaHQgPSAyMDtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnc2hhcGUnLFxuXHRcdHNjYWxlWDogMSxcblx0XHR5OiBpbmZvLmdldEhlaWdodCgpIC0gaGVpZ2h0LFxuXHRcdGRhdGE6IHtcblx0XHRcdHR5cGU6ICdyZWN0YW5nbGUnLFxuXHRcdFx0d2lkdGg6IDEsXG5cdFx0XHRoZWlnaHQsXG5cdFx0XHRmaWxsOiAweGZmMDAwMCxcblx0XHR9LFxuXHRcdG9uVXBkYXRlKCkge1xuXHRcdFx0dGhpcy5zY2FsZVghICs9IChpbmZvLmdldFdpZHRoKCkgKiBpbmZvLmdldFByb2dyZXNzKCkgLSB0aGlzLnNjYWxlWCEpIC8gMjtcblx0XHR9LFxuXHR9IGFzIFNoYXBlO1xufVxuIiwiY29uc3QgU1BFRUQgPSAxMDA7XG5cbmludGVyZmFjZSBVbml0IHtcblx0W2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRQcm9wZXJ0aWVzIHtcblx0bmFtZTogc3RyaW5nLFxuXHRoZWFsdGg6IG51bWJlcixcblx0aW1hZ2U6IHN0cmluZyxcblx0b25DbGljazogKGRhdGE6IFVuaXRQcm9wZXJ0aWVzKSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBvblByb3BzVXBkYXRlKHByb3BzOiBhbnksIGNhbGxiYWNrOiAodGltZTogbnVtYmVyKSA9PiB2b2lkKSB7XG5cdGNvbnN0IGNvcHkgPSB7IC4uLnByb3BzIH07XG5cdHJldHVybiAodGltZTogbnVtYmVyKSA9PiB7XG5cdFx0Ly8gY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKTtcblx0XHRsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuXHRcdGZvciAoY29uc3Qga2V5IGluIHByb3BzKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5cdFx0XHRpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRpZiAoY29weVtrZXldICE9PSBwcm9wc1trZXldKSB7XG5cdFx0XHRcdFx0Y29weVtrZXldID0gcHJvcHNba2V5XTtcblx0XHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VkKSB7XG5cdFx0XHRjYWxsYmFjayh0aW1lKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIHJ1bk9uUHJvcHNVcGRhdGUocHJvcHM6IGFueSwgY29tcG9uZW50OiBhbnkpIHtcblx0Y29tcG9uZW50Lm9uVXBkYXRlID0gb25Qcm9wc1VwZGF0ZShwcm9wcywgY29tcG9uZW50Lm9uVXBkYXRlLmJpbmQoY29tcG9uZW50KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bml0KHByb3BzOiBVbml0UHJvcGVydGllcyk6IFVuaXQge1xuXHRmdW5jdGlvbiBnZXRUaXRsZSgpIHtcblx0XHRyZXR1cm4gYCR7cHJvcHMubmFtZX1cXG4ke01hdGgucm91bmQocHJvcHMuaGVhbHRoICogMTAwKX0lYDtcblx0fVxuXG5cdGNvbnN0IHVuaXRWaWV3ID0ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdHg6IDUwICsgTWF0aC5yYW5kb20oKSAqIDQwMCxcblx0XHR5OiAyMDAsXG5cdFx0cm90YXRpb246IDAsXG5cdFx0dXBkYXRlTW92ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMueCArPSB0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCAqIHRpbWUgKiBTUEVFRDtcblx0XHRcdGlmICh0aGlzLnggPCA1MCkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCA9IDE7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMueCA+IDQwMCkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCA9IC0xO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZU1vdmUodGltZSk7XG5cdFx0fSxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0dGV4dDoge1xuXHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHRcdHRleHQ6IGdldFRpdGxlKCksXG5cdFx0XHRcdGZvcm1hdDoge1xuXHRcdFx0XHRcdHNpemU6IDE1LFxuXHRcdFx0XHRcdGNvbG9yOiAweGZmZGRkZCxcblx0XHRcdFx0XHRhbGlnbjogJ2NlbnRlcicsXG5cdFx0XHRcdFx0dmVydGljYWxBbGlnbjogJ21pZGRsZScsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJvcmRlcjogMHgwMGZmMDAsXG5cdFx0XHRcdHk6IC0zMCxcblx0XHRcdFx0aGVpZ2h0OiAzNSxcblx0XHRcdFx0cGl2b3RYOiAwLjUsXG5cdFx0XHRcdG9uUG9pbnRlckRvd246ICgpID0+IHtcblx0XHRcdFx0XHRwcm9wcy5vbkNsaWNrKHByb3BzKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b25VcGRhdGUoKSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gZ2V0VGl0bGUoKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRpbWFnZToge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IHByb3BzLmltYWdlLFxuXHRcdFx0XHRzY2FsZVg6IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEsXG5cdFx0XHRcdHBpdm90WDogMC41LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duOiAoKSA9PiB7XG5cdFx0XHRcdFx0cHJvcHMub25DbGljayhwcm9wcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cblx0cnVuT25Qcm9wc1VwZGF0ZShwcm9wcywgdW5pdFZpZXcuY2hpbGRyZW4udGV4dCk7XG5cblx0cmV0dXJuIHVuaXRWaWV3O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBNb3VzZUV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgVHdlZW5FeHRlbnNpb24gfSBmcm9tICdAamVuZy90d2Vlbic7XG5pbXBvcnQgeyBDYW52YXNUZXh0RXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvdGV4dCc7XG5pbXBvcnQgeyBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvaW1hZ2UnO1xuaW1wb3J0IHsgQ2FudmFzU2hhcGVFeHRlbnNpb24gfSBmcm9tICdAamVuZy9zaGFwZSc7XG5pbXBvcnQgeyBDYW52YXNFbmdpbmUgfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgU2NlbmVFeHRlbnNpb24gfSBmcm9tICdAamVuZy9zY2VuZSc7XG5pbXBvcnQgQ3VzdG9tUmVzb3VyY2VNYW5hZ2VyIGZyb20gJy4vZW5naW5lL3Jlc291cmNlcyc7XG5pbXBvcnQgQ3VzdG9tRW5naW5lIGZyb20gJy4vZW5naW5lL2VuZ2luZSc7XG5pbXBvcnQgbWFpbiBmcm9tICcuL21haW4nO1xuaW1wb3J0IHtcblx0QU5JTUFMSVNULCBBTklNQUxJU1RfSU1BR0UsIEFSQ0hFUiwgQVJDSEVSX0lNQUdFLCBURVNUX0NBTlZBUyxcbn0gZnJvbSAnLi9hc3NldHMnO1xuXG4vLyBwYWdlXG5kb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpbiA9ICcwJztcbmRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZyA9ICcwJztcblxuLy8gYmFzaWMgZW5naW5lXG5jb25zdCBlbmdpbmUgPSBuZXcgQ2FudmFzRW5naW5lKCk7XG5DYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbkNhbnZhc1RleHRFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuQ2FudmFzU2hhcGVFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuVHdlZW5FeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuU2NlbmVFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuTW91c2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuZW5naW5lLnNjcmVlbi5mdWxsc2NyZWVuID0gdHJ1ZTtcbmVuZ2luZS50aWNrZXIucGxheSgpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbmdpbmUucGxhdGZvcm0udmlldyk7XG5cbmNvbnN0IHBhcmFtZXRlcnMgPSB7XG5cdGdldFVwZGF0ZVRpbWUoKSB7XG5cdFx0cmV0dXJuIGVuZ2luZS51cGRhdGVyLmVsYXBzZWRUaW1lO1xuXHR9LFxuXHRnZXRSZW5kZXJUaW1lKCkge1xuXHRcdHJldHVybiBlbmdpbmUucmVuZGVyZXIuZWxhcHNlZFRpbWU7XG5cdH0sXG5cdGdldENhbnZhc1dpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIGVuZ2luZS5zY3JlZW4uZ2V0V2lkdGgoKTtcblx0fSxcblx0Z2V0Q2FudmFzSGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIGVuZ2luZS5zY3JlZW4uZ2V0SGVpZ2h0KCk7XG5cdH0sXG59O1xuXG4vLyBhcHBsaWNhdGlvblxuY29uc3QgYXBwID0gbWFpbihwYXJhbWV0ZXJzKTtcbmFwcC5zdGFydCgpO1xuZW5naW5lLnJvb3QgPSBhcHAgYXMgYW55IGFzIENvbXBvbmVudDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5jb25zb2xlLmxvZyhhcHApO1xuXG4vLyB0ZXN0IHBhdXNlXG5zZXRUaW1lb3V0KCgpID0+IGVuZ2luZS50aWNrZXIucGF1c2UoKSwgNTAwMCk7XG5zZXRUaW1lb3V0KCgpID0+IGVuZ2luZS50aWNrZXIucGxheSgpLCAxMDAwMCk7XG5cbi8vIGN1c3RvbSBlbmdpbmVcbmNvbnN0IGN1c3RvbUVuZ2luZSA9IG5ldyBDdXN0b21FbmdpbmUoKTtcbmN1c3RvbUVuZ2luZS5zY3JlZW4uZnVsbHNjcmVlbiA9IGZhbHNlO1xuY3VzdG9tRW5naW5lLnNjcmVlbi5oZWlnaHQgPSA2MDA7XG5jdXN0b21FbmdpbmUudXBkYXRlci5lbmFibGVkID0gZmFsc2U7XG5jdXN0b21FbmdpbmUucm9vdCA9IGVuZ2luZS5yb290O1xuY3VzdG9tRW5naW5lLnRpY2tlci5wbGF5KCk7XG5jdXN0b21FbmdpbmUucGxhdGZvcm0udmlldy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5jdXN0b21FbmdpbmUucGxhdGZvcm0udmlldy5zdHlsZS50b3AgPSAnMHB4JztcbmN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3LnN0eWxlLmxlZnQgPSAnNjAwcHgnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjdXN0b21FbmdpbmUucGxhdGZvcm0udmlldyk7XG5cbi8vIC8vIHNldCBjdXN0b20gcmVzb3VyY2VcbmVuZ2luZS5yZXNvdXJjZXMucmVzb3VyY2VzLnNldChcblx0VEVTVF9DQU5WQVMsXG5cdHtcblx0XHRhc3NldDogVEVTVF9DQU5WQVMsXG5cdFx0aW1hZ2U6IGN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3LFxuXHRcdGxvYWRlZDogdHJ1ZSxcblx0fSBhcyBJbWFnZVJlc291cmNlLFxuKTtcbmN1c3RvbUVuZ2luZS5yZXNvdXJjZXMucmVzb3VyY2VzLnNldChcblx0VEVTVF9DQU5WQVMsXG5cdHtcblx0XHRhc3NldDogVEVTVF9DQU5WQVMsXG5cdFx0aW1hZ2U6IGVuZ2luZS5wbGF0Zm9ybS52aWV3LFxuXHRcdGxvYWRlZDogdHJ1ZSxcblx0fSBhcyBJbWFnZVJlc291cmNlLFxuKTtcblxuLy8gY3VzdG9tIHJlc291cmNlIHJlc29sdmVyXG5jb25zdCByZXNvdXJjZU1hbmFnZXIgPSBuZXcgQ3VzdG9tUmVzb3VyY2VNYW5hZ2VyKCk7XG5yZXNvdXJjZU1hbmFnZXIuYWxpYXNlcy5zZXQoQVJDSEVSLnJlcGxhY2UoJ2lkOicsICcnKSwgQVJDSEVSX0lNQUdFKTtcbnJlc291cmNlTWFuYWdlci5hbGlhc2VzLnNldChBTklNQUxJU1QucmVwbGFjZSgnaWQ6JywgJycpLCBBTklNQUxJU1RfSU1BR0UpO1xucmVzb3VyY2VNYW5hZ2VyLmluaXQoZW5naW5lKTtcbnJlc291cmNlTWFuYWdlci5pbml0KGN1c3RvbUVuZ2luZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9