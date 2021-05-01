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
    var contains = _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.contains(bounds, local);

    if (contains) {
      if (image.pointerTestShape) {
        var resource = engine.resources.get(image.src);

        if (resource !== null && resource !== void 0 && resource.image) {
          var x = local.x - bounds.x;
          var y = local.y - bounds.y;

          if (resource.image instanceof HTMLCanvasElement) {
            var canvasContext = resource.image.getContext('2d');
            var imageData = canvasContext.getImageData(x, y, 1, 1);
            contains = imageData.data[3] > 0;
          } else {
            var platform = engine.platform;
            var customContext = platform.createCustomContext();
            customContext.setTransform();
            customContext.clearRect(0, 0, 1, 1);
            customContext.drawImage(resource.image, x, y, 1, 1, 0, 0, 1, 1);

            var _imageData = customContext.getImageData(0, 0, 1, 1);

            contains = _imageData.data[3] > 0;
            platform.destroyCustomContext(customContext);
          }
        } else {
          contains = false;
        }
      }
    }

    return contains;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jYW52YXMtZW5naW5lL2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NhbnZhcy1lbmdpbmUvZGlzdC9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvY29tcG9uZW50cy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9jb3JlL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvcmUvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvcGl2b3QuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9leHRlbnNpb25zL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9leHRlbnNpb25zL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvdXBkYXRlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL2RlYnVnLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvcG9pbnRlcnMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3RpY2tlci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3VwZGF0ZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ludGVyYWN0aXZlL21vdXNlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvaW50ZXJhY3RpdmUvdG91Y2guanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9ib3VuZHMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9jb2xvci10cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L21hdHJpeC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L3BvaW50LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9pbWFnZS9kaXN0L2NhbnZhcy1pbWFnZS1jb2xvci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvaW1hZ2UvZGlzdC9jYW52YXMtaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3Jlc291cmNlcy9kaXN0L2ltYWdlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9yZXNvdXJjZXMvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvcmVzb3VyY2VzL2Rpc3Qvc3RyaW5nLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zY2VuZS9kaXN0L3NjZW5lLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9lbGxpcHNlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9wYXRoLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvY2FudmFzL3NoYXBlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvY2FudmFzL3N0eWxlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2RhdGEvZGF0YS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9kYXRhL3BhdGguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvZGF0YS9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvZ3JhcGhpY3MuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3Qvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC9jYW52YXMvdGV4dC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2RhdGEvZm9udC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2RhdGEvZm9ybWF0LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvZGF0YS9tZXRyaWNzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC90ZXh0LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90d2Vlbi9kaXN0L2Vhc2luZy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdHdlZW4vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdHdlZW4vZGlzdC90d2Vlbi5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvYXJ0aWZhY3QudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2Fzc2V0cy50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvZW5naW5lL2VuZ2luZS50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvZW5naW5lL2ltYWdlLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9lbmdpbmUvcGxhdGZvcm0udHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2VuZ2luZS9yZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2Zwcy50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvcHJlbG9hZGVyLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy91bml0LnRzIiwid2VicGFjazovL3NhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zYW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJDYW52YXNFbmdpbmUiLCJtb2R1bGUiLCJQbGF0Zm9ybSIsIkNhbnZhc1BsYXRmb3JtIiwiRW5naW5lIiwiQ2FudmFzUGF0dGVybnMiLCJjb2xvclBhdHRlcm4iLCJjb2xvciIsImFscGhhIiwiY3QiLCJyIiwiZyIsImIiLCJhIiwiQ29sb3JUcmFuc2Zvcm0iLCJyZWRNdWx0aXBsaWVyIiwicmVkT2Zmc2V0IiwiZ3JlZW5NdWx0aXBsaWVyIiwiZ3JlZW5PZmZzZXQiLCJibHVlTXVsdGlwbGllciIsImJsdWVPZmZzZXQiLCJhbHBoYU11bHRpcGxpZXIiLCJhbHBoYU9mZnNldCIsImFkZEdyYWRpZW50Q29sb3JzIiwicGF0dGVybiIsImNvbG9ycyIsImFscGhhcyIsInJhdGlvcyIsImNvbG9yVHJhbnNmb3JtIiwiaSIsImxlbmd0aCIsInJhdGlvIiwiY29sb3JTdHlsZSIsImFkZENvbG9yU3RvcCIsInJhZGlhbEdyYWRpZW50UGF0dGVybiIsImJlZ2luWCIsImJlZ2luWSIsImJlZ2luUmFkaXVzIiwiZW5kWCIsImVuZFkiLCJlbmRSYWRpdXMiLCJjb250ZXh0IiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJsaW5lYXJHcmFkaWVudFBhdHRlcm4iLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImJpdG1hcFBhdHRlcm4iLCJpbWFnZSIsInJlcGVhdCIsIm1hdHJpeCIsImNyZWF0ZVBhdHRlcm4iLCJkb21NYXRyaXgiLCJET01NYXRyaXgiLCJjIiwiZCIsImUiLCJ0eCIsImYiLCJ0eSIsInNldFRyYW5zZm9ybSIsImFyZ3VtZW50cyIsInZpZXciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0cyIsImdldENvbnRleHQiLCJjdXN0b21Db250ZXh0cyIsInB1c2giLCJwb3AiLCJlbmdpbmUiLCJkZWJ1ZyIsIndhcm5pbmciLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImNsZWFyIiwidXBkYXRlU2l6ZSIsImNsZWFyUmVjdCIsInNjcmVlbiIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwicGl4ZWxSYXRpbyIsImdldFBpeGVsUmF0aW8iLCJ2aWV3V2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJ2aWV3SGVpZ2h0Iiwic3R5bGUiLCJDT05UQUlORVIiLCJDb250YWluZXIiLCJudW1DaGlsZHJlbiIsImNvbnRhaW5lciIsImNoaWxkcmVuIiwiQXJyYXkiLCJpc0FycmF5IiwidHlwZSIsImtleXMiLCJPYmplY3QiLCJDb250YWluZXJFeHRlbnNpb24iLCJyZW5kZXIiLCJyZW5kZXJlciIsImRlcHRoIiwiY29tcG9uZW50IiwicmVuZGVyQ29tcG9uZW50IiwiY29tcG9uZW50c01hcCIsInVwZGF0ZSIsInVwZGF0ZXIiLCJ1cGRhdGVDb21wb25lbnQiLCJoaXRUZXN0IiwicG9pbnRlcnMiLCJyZXN1bHQiLCJkaXNwYXRjaENvbXBvbmVudCIsImxvYWRlZCIsImxvYWRpbmciLCJwcm9ncmVzcyIsImNvbXBvbmVudENvbnRleHQiLCJpbml0IiwiY29tcG9uZW50cyIsInNldCIsIkxPQURFUiIsIkxvYWRlciIsImdldExvYWRpbmdQcm9ncmVzcyIsImxvYWRlciIsImxvYWRpbmdQcm9ncmVzcyIsImlzTG9hZGVkIiwibmVlZExvYWRpbmdDaGVjayIsImxvYWRpbmdDaGVjayIsIkxvYWRlckV4dGVuc2lvbiIsIm9uTG9hZGVkIiwiQ29tcG9uZW50cyIsIlNjcmVlbiIsIlVwZGF0ZXIiLCJMb2FkaW5nIiwiUmVuZGVyZXIiLCJQb2ludGVycyIsIlRpY2tlciIsIkRlYnVnIiwiUmVzb3VyY2VzIiwicGxhdGZvcm0iLCJ0aWNrZXIiLCJyZXNvdXJjZXMiLCJFbmdpbmVGZWF0dXJlIiwiRGlzcGxheSIsImlzVmlzaWJsZSIsInZpc2libGUiLCJQaXZvdCIsImdldFgiLCJwaXZvdCIsInBpdm90WCIsImdldFkiLCJwaXZvdFkiLCJoYXNWYWx1ZXMiLCJoYW5kbGVyc01hcCIsInBvaW50ZXJEb3duIiwicG9pbnRlclVwIiwicG9pbnRlck1vdmUiLCJwb2ludGVyQ2FuY2VsIiwicG9pbnRlck92ZXIiLCJwb2ludGVyT3V0IiwiUG9pbnRlciIsImlzUG9pbnRlckVuYWJsZWQiLCJwb2ludGVyIiwicG9pbnRlckVuYWJsZWQiLCJkaXNwYXRjaEV2ZW50IiwieCIsInkiLCJnbG9iYWxYIiwiZ2xvYmFsWSIsImlkIiwiaGFuZGxlck5hbWUiLCJldmVudCIsIlRyYW5zZm9ybSIsImdldE1hdHJpeCIsInRyYW5zZm9ybSIsInJvdGF0aW9uIiwic2NhbGVYIiwic2NhbGUiLCJzY2FsZVkiLCJjb3MiLCJzaW4iLCJnZXRDb2xvclRyYW5zZm9ybSIsInRpbnQiLCJ2YWx1ZSIsInZhbHVlSW52ZXJ0ZWQiLCJicmlnaHRuZXNzIiwidW5kZWZpbmVkIiwicGVyY2VudCIsImFicyIsIm9mZnNldCIsIlVwZGF0ZSIsImlzRW5hYmxlZCIsImVuYWJsZWQiLCJ0aW1lIiwib25VcGRhdGUiLCJwcm9wZXJ0aWVzIiwiTWFwIiwiZXJyb3JzIiwid2FybmluZ3MiLCJjb25zb2xlIiwibG9nIiwiYXJncyIsIlN0cmluZyIsImNvdW50IiwiZ2V0IiwiZXJyb3IiLCJ3YXJuIiwiZWxhcHNlZFRpbWUiLCJoYW5kbGVyIiwicm9vdCIsInN0YXJ0VGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiZ2xvYmFsIiwiUG9pbnQiLCJsb2NhbCIsInBvaW50ZXJJZCIsInBvaW50ZXJUeXBlIiwiTWF0cml4IiwiYmFzZSIsInBhcmVudCIsInBhcmVudFJlc3VsdCIsInVwZGF0ZUxvY2FsIiwiYmVnaW4iLCJlbmQiLCJSZXNvdXJjZSIsImdldFByb2dyZXNzIiwicmVzb3VyY2UiLCJieXRlc1RvdGFsIiwiYnl0ZXNMb2FkZWQiLCJyZXNvbHZlcnMiLCJTZXQiLCJhc3NldCIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1bGxzY3JlZW4iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiZnJhbWVSYXRlIiwicGF1c2VkIiwidXBkYXRlRnJhbWUiLCJjdXJyZW50VGltZSIsImRlbHRhVGltZSIsInVwZGF0ZU5leHRGcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZVByb3BlcnRpZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJjbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRMZWZ0IiwiY2xpZW50WSIsInRvcCIsImNsaWVudFRvcCIsImRpc3BhdGNoIiwicHJldmVudERlZmF1bHQiLCJNb3VzZUV4dGVuc2lvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGFuZ2VkVG91Y2hlcyIsInRvdWNoIiwiaWRlbnRpZmllciIsIlRvdWNoRXh0ZW5zaW9uIiwiQm91bmRzIiwiZW1wdHkiLCJtaW5YIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwibWluWSIsIm1heFgiLCJNSU5fVkFMVUUiLCJtYXhZIiwic2V0RW1wdHkiLCJib3VuZHMiLCJpc0VtcHR5IiwidG9SZWN0YW5nbGUiLCJyZWN0YW5nbGUiLCJ0ZXN0WCIsInRlc3RZIiwidGVzdCIsInRlc3RQb2ludCIsInBvaW50IiwiaXNFbXB0eVdpdGhBbHBoYSIsImNvcHkiLCJmcm9tIiwidG8iLCJjb25jYXQiLCJjdDEiLCJjdDAiLCJtYXRyaXgwIiwibWF0cml4MSIsImdldERldGVybWluYW50IiwiaW52ZXJ0IiwiZGV0ZXJtaW5hbnQiLCJ0cmFuc2Zvcm1Qb2ludCIsInRyYW5zZm9ybVBvaW50TG9jYWwiLCJ0cmFuc2Zvcm1JbnZlcnNlUG9pbnQiLCJ0cmFuc2Zvcm1Cb3VuZHMiLCJyeCIsInJ5IiwicnIiLCJyYiIsIm54MSIsIm55MSIsIm54MiIsIm55MiIsIm54MyIsIm55MyIsIm54NCIsIm55NCIsInJpZ2h0IiwiYm90dG9tIiwic3FydCIsImFuZ2xlIiwiYXRhbjIiLCJlcXVhbHMiLCJwb2ludDAiLCJwb2ludDEiLCJzb3VyY2UiLCJ0YXJnZXQiLCJub3JtYWxpemUiLCJ0aGlja25lc3MiLCJkaXN0YW5jZSIsImR4IiwiZHkiLCJpbnRlcnBvbGF0ZSIsInBvbGFyIiwiUmVjdGFuZ2xlIiwiaW50ZXJzZWN0aW9uIiwiY29udGFpbnMiLCJyb3VuZCIsInNjcmVlbkJvdW5kcyIsIkNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24iLCJzcmMiLCJjb250ZXh0MmQiLCJnbG9iYWxBbHBoYSIsImRyYXdJbWFnZSIsImN1c3RvbUNvbnRleHQiLCJjcmVhdGVDdXN0b21Db250ZXh0IiwiaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwicm0iLCJnbSIsImJtIiwiYW0iLCJybyIsImdvIiwiYm8iLCJhbyIsImRhdGEiLCJwdXRJbWFnZURhdGEiLCJkZXN0cm95Q3VzdG9tQ29udGV4dCIsIkltYWdlRXh0ZW5zaW9uIiwiSU1BR0UiLCJDYW52YXNJbWFnZUV4dGVuc2lvbiIsIkltYWdlIiwiY2FsY3VsYXRlQm91bmRzIiwicG9pbnRlclRlc3RTaGFwZSIsIkhUTUxDYW52YXNFbGVtZW50IiwiY2FudmFzQ29udGV4dCIsIkltYWdlUmVzb3VyY2UiLCJleHRlbnNpb24iLCJzcGxpdCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJhZGQiLCJTdHJpbmdSZXNvdXJjZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ucHJvZ3Jlc3MiLCJ0b3RhbCIsInJlc3BvbnNlVGV4dCIsInNlbmQiLCJTQ0VORSIsIlNjZW5lRXh0ZW5zaW9uIiwic2NlbmUiLCJKU09OIiwicGFyc2UiLCJtZXNzYWdlIiwiUElfMiIsIlBJIiwiYXBwbHlFbGxpcHNlIiwiaGFzRmlsbCIsInJhZGl1cyIsInJhZGl1c1giLCJyYWRpdXNZIiwiYmVnaW5QYXRoIiwiZWxsaXBzZSIsImNsb3NlUGF0aCIsImFwcGx5Q29tbWFuZCIsImNvbW1hbmQiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjdXJ2ZVRvIiwicXVhZHJhdGljQ3VydmVUbyIsImN4IiwiY3kiLCJjdWJpY0N1cnZlVG8iLCJiZXppZXJDdXJ2ZVRvIiwic3giLCJzeSIsImFwcGx5UGF0aCIsImFwcGx5UmVjdGFuZ2xlIiwicmVjdCIsInJlbmRlckdyYXBoaWNzIiwiZmlsbCIsInN0cm9rZSIsImhhc1N0cm9rZSIsImV4aXN0IiwicGF0aCIsImFwcGx5U3RyaW5nIiwic2V0RmlsbFN0eWxlIiwic2V0U3Ryb2tlU3R5bGUiLCJDYW52YXNTaGFwZUV4dGVuc2lvbiIsInNoYXBlIiwiU2hhcGUiLCJTaGFwZUV4dGVuc2lvbiIsIlNIQVBFIiwicmVhZGVyIiwiR3JhcGhpY3NTdHJpbmdSZWFkZXIiLCJzZXRQYXRoIiwicmVhZE5leHQiLCJnZXRDb21tYW5kIiwiZW1wdHlBcnJheSIsImVtcHR5TWF0cml4IiwiZ2V0Q2FudmFzUGF0dGVybiIsInNvbGlkIiwibGluZWFyIiwicmFkaWFsIiwiYml0bWFwRmlsbCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwibGluZUNhcCIsImxpbmVKb2luIiwibWl0ZXJMaW1pdCIsImNhcHMiLCJqb2ludHMiLCJSZWN0YW5nbGVEYXRhIiwiRWxsaXBzZURhdGEiLCJQYXRoRGF0YSIsInBhdGhEYXRhIiwiR3JhcGhpY3NTdHJpbmciLCJQYXRoQ29tbWFuZCIsIkdyYXBoaWNzRGF0YSIsIk5VTUJFUlNfQ09VTlQiLCJNIiwibSIsIkwiLCJsIiwiSCIsImgiLCJWIiwidiIsIkMiLCJTIiwicyIsIlEiLCJxIiwiVCIsInQiLCJDT01NQU5EX1JFR0VYIiwiTlVNQkVSX1JFR0VYIiwiR3JhcGhpY3NTdHJpbmdTdHJlYW0iLCJidWZmZXIiLCJzeW1ib2xSZWdleCIsImxhc3RJbmRleCIsInN5bWJvbE1hdGNoIiwiZXhlYyIsInN5bWJvbCIsIm51bWJlck1hdGNoIiwicGFyc2VGbG9hdCIsInN0cmVhbSIsImNvbW1hbmRFeGlzdHMiLCJsYXN0WCIsImxhc3RZIiwibGFzdENYIiwibGFzdENZIiwiZ2V0QnVmZmVyIiwiZTAiLCJlMSIsImUyIiwiZTMiLCJlNCIsImU1IiwidGVtcFBvaW50MCIsInRlbXBQb2ludDEiLCJHcmFwaGljcyIsInNtb290aCIsInBpeGVsSGludGluZyIsInNjYWxlTW9kZSIsImdldFBhdGgiLCJlbGxpcHNlV2lkdGgiLCJlbGxpcHNlSGVpZ2h0IiwidyIsImsiLCJveCIsIm95IiwieGUiLCJ5ZSIsInhtIiwieW0iLCJjcmVhdGVEYXRhIiwiZ3JhcGhpY3NEYXRhIiwiZGVmYXVsdFRleHRGb3JtYXQiLCJDT1JSRUNUSU9OIiwiQ2FudmFzVGV4dEV4dGVuc2lvbiIsIlRleHQiLCJtZXRyaWNzIiwiZm9ybWF0IiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsIlRleHRGb3JtYXQiLCJyZWFsV2lkdGgiLCJyZWFsSGVpZ2h0Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0ZXh0QmFzZWxpbmUiLCJzaW1wbGUiLCJ0ZXh0Iiwic2l6ZSIsImxlYWRpbmciLCJsZXR0ZXJTcGFjaW5nIiwiZGVmYXVsdEZvbnQiLCJGb250Iiwic3ltYm9sU2l6ZSIsImFsaWduVmFsdWUiLCJmb250IiwiVGV4dE1ldHJpY3MiLCJzeW1ib2xOZXh0IiwiYWR2YW5jZSIsImZpbGxUZXh0IiwiYWxpZ25WZXJ0aWNhbFZhbHVlIiwibGluZXMiLCJsaW5lIiwic3ltYm9scyIsImZpcnN0IiwibGluZUhlaWdodCIsImoiLCJhbGlnblN5bWJvbFZhbHVlIiwic3ltYm9sRm9udCIsIlRleHRFeHRlbnNpb24iLCJURVhUIiwiRU0iLCJmb250cyIsImdldFN0eWxlIiwibmFtZSIsInJlcGxhY2UiLCJ0b1N0cmluZyIsIm1lYXN1cmVUZXh0IiwiZ2V0Q2hhcldpZHRoIiwiY2hhciIsIndpZHRocyIsImdldEtlcm5pbmciLCJzZWNvbmQiLCJwYWlyIiwia2VybmluZyIsImtlcm5pbmdzIiwid2lkdGhTZWNvbmQiLCJ3aWR0aFRvdGFsIiwiZ2V0QWR2YW5jZSIsImdldEZvbnQiLCJib2xkIiwiaXRhbGljIiwidW5kZXJsaW5lIiwiYWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwiY29tYmluZSIsImRlZmF1bHRGb3JtYXQiLCJnZXRBbGlnblZhbHVlIiwiZ2V0VmVydGljYWxBbGlnblZhbHVlIiwiVGV4dExpbmUiLCJjcmVhdGUiLCJtYXgiLCJjb3JyZWN0V2lkdGgiLCJsYXN0IiwiY29ycmVjdEhlaWdodCIsImdldFN5bWJvbHMiLCJzeW1ib2xGb3JtYXQiLCJibG9jayIsImdldExpbmVzIiwid29yZFdyYXAiLCJtdWx0aWxpbmUiLCJ3b3JkIiwiZ2V0TWV0cmljcyIsImdldFNpbXBsZU1ldHJpY3MiLCJnZXRTaW1wbGVXaWR0aCIsImluZGV4IiwiZ2V0VGV4dCIsImlzVXBkYXRlTWV0cmljcyIsInVwZGF0ZU1ldHJpY3MiLCJpc0F1dG9TaXplIiwiaXNTaW1wbGUiLCJpc011bHRpbGluZSIsIkxJTkVBUiIsIlFVQURSQVRJQyIsIlFVQURSQVRJQ19JTiIsIlFVQURSQVRJQ19PVVQiLCJDVUJJQyIsIkNVQklDX0lOIiwiQ1VCSUNfT1VUIiwiUVVBUlRJQyIsIlFVQVJUSUNfSU4iLCJRVUFSVElDX09VVCIsIlFVSU5USUMiLCJRVUlOVElDX0lOIiwiUVVJTlRJQ19PVVQiLCJTSU5VU09JREFMIiwiU0lOVVNPSURBTF9JTiIsIlNJTlVTT0lEQUxfT1VUIiwiRVhQT05FTlRJQUwiLCJFWFBPTkVOVElBTF9JTiIsIkVYUE9ORU5USUFMX09VVCIsIkNJUkNVTEFSIiwiQ0lSQ1VMQVJfSU4iLCJDSVJDVUxBUl9PVVQiLCJFTEFTVElDIiwiRUxBU1RJQ19JTiIsIkVMQVNUSUNfT1VUIiwiQkFDSyIsIkJBQ0tfSU4iLCJCQUNLX09VVCIsIkJPVU5DRSIsIkJPVU5DRV9JTiIsIkJPVU5DRV9PVVQiLCJlYXNpbmciLCJwb3ciLCJUV0VFTiIsIlR3ZWVuRXh0ZW5zaW9uIiwidHdlZW4iLCJwaGFzZXMiLCJwaGFzZSIsImVhc2luZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImVhc2luZ01ldGhvZCIsImVhc2luZ1ZhbHVlIiwic3RhdGUiLCJrZXkiLCJmcm9tVmFsdWUiLCJ0b1ZhbHVlIiwic3RhdGVWYWx1ZSIsImxvb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTyxJQUFNQSxZQUFiO0FBQUE7O0FBQUE7O0FBQ0ksMEJBQXlCO0FBQUE7O0FBQUEsUUFBYkMsTUFBYSx1RUFBSixFQUFJOztBQUFBOztBQUNyQkEsVUFBTSxDQUFDQyxRQUFQLHVCQUFrQkQsTUFBTSxDQUFDQyxRQUF6QiwrREFBcUNDLHFEQUFyQztBQURxQiw2QkFFZkYsTUFGZTtBQUd4Qjs7QUFKTDtBQUFBLEVBQWtDRyw4Q0FBbEMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDTyxJQUFJQyxjQUFKOztBQUNQLENBQUMsVUFBVUEsY0FBVixFQUEwQjtBQUN2QixXQUFTQyxZQUFULENBQXNCQyxLQUF0QixFQUE2QkMsS0FBN0IsRUFBb0NDLEVBQXBDLEVBQXdDO0FBQ3BDLFFBQUlDLENBQUMsR0FBR0gsS0FBSyxJQUFJLEVBQVQsR0FBYyxJQUF0QjtBQUNBLFFBQUlJLENBQUMsR0FBR0osS0FBSyxJQUFJLENBQVQsR0FBYSxJQUFyQjtBQUNBLFFBQUlLLENBQUMsR0FBR0wsS0FBSyxHQUFHLElBQWhCO0FBQ0EsUUFBSU0sQ0FBQyxHQUFHTCxLQUFLLEdBQUcsSUFBaEI7O0FBQ0EsUUFBSSxDQUFDTSw4REFBQSxDQUF1QkwsRUFBdkIsQ0FBTCxFQUFpQztBQUM3QkMsT0FBQyxHQUFJQSxDQUFDLEdBQUdELEVBQUUsQ0FBQ00sYUFBUCxHQUF1Qk4sRUFBRSxDQUFDTyxTQUEzQixHQUF3QyxJQUE1QztBQUNBTCxPQUFDLEdBQUlBLENBQUMsR0FBR0YsRUFBRSxDQUFDUSxlQUFQLEdBQXlCUixFQUFFLENBQUNTLFdBQTdCLEdBQTRDLElBQWhEO0FBQ0FOLE9BQUMsR0FBSUEsQ0FBQyxHQUFHSCxFQUFFLENBQUNVLGNBQVAsR0FBd0JWLEVBQUUsQ0FBQ1csVUFBNUIsR0FBMEMsSUFBOUM7QUFDQVAsT0FBQyxHQUFJQSxDQUFDLEdBQUdKLEVBQUUsQ0FBQ1ksZUFBUCxHQUF5QlosRUFBRSxDQUFDYSxXQUE3QixHQUE0QyxJQUFoRDtBQUNIOztBQUNELFFBQUlULENBQUMsR0FBRyxJQUFSLEVBQWM7QUFDViw0QkFBZUgsQ0FBZixlQUFxQkMsQ0FBckIsZUFBMkJDLENBQTNCLGVBQWlDQyxDQUFDLEdBQUcsSUFBckM7QUFDSDs7QUFDRCx5QkFBY0gsQ0FBZCxlQUFvQkMsQ0FBcEIsZUFBMEJDLENBQTFCO0FBQ0g7O0FBQ0RQLGdCQUFjLENBQUNDLFlBQWYsR0FBOEJBLFlBQTlCOztBQUNBLFdBQVNpQixpQkFBVCxDQUEyQkMsT0FBM0IsRUFBb0NDLE1BQXBDLEVBQTRDQyxNQUE1QyxFQUFvREMsTUFBcEQsRUFBNERDLGNBQTVELEVBQTRFO0FBQ3hFLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osTUFBTSxDQUFDSyxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxVQUFNdEIsS0FBSyxHQUFHa0IsTUFBTSxDQUFDSSxDQUFELENBQXBCO0FBQ0EsVUFBTXJCLEtBQUssR0FBR2tCLE1BQU0sQ0FBQ0csQ0FBRCxDQUFwQjtBQUNBLFVBQUlFLEtBQUssR0FBR0osTUFBTSxDQUFDRSxDQUFELENBQWxCO0FBQ0EsVUFBSUUsS0FBSyxHQUFHLENBQVosRUFDSUEsS0FBSyxHQUFHLENBQVI7QUFDSixVQUFJQSxLQUFLLEdBQUcsQ0FBWixFQUNJQSxLQUFLLEdBQUcsQ0FBUjtBQUNKLFVBQU1DLFVBQVUsR0FBRzFCLFlBQVksQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWVvQixjQUFmLENBQS9CO0FBQ0FKLGFBQU8sQ0FBQ1MsWUFBUixDQUFxQkYsS0FBckIsRUFBNEJDLFVBQTVCO0FBQ0g7QUFDSjs7QUFDRDNCLGdCQUFjLENBQUNrQixpQkFBZixHQUFtQ0EsaUJBQW5DOztBQUNBLFdBQVNXLHFCQUFULENBQStCQyxNQUEvQixFQUF1Q0MsTUFBdkMsRUFBK0NDLFdBQS9DLEVBQTREQyxJQUE1RCxFQUFrRUMsSUFBbEUsRUFBd0VDLFNBQXhFLEVBQW1GZixNQUFuRixFQUEyRkMsTUFBM0YsRUFBbUdDLE1BQW5HLEVBQTJHQyxjQUEzRyxFQUEySGEsT0FBM0gsRUFBb0k7QUFDaEksUUFBTWpCLE9BQU8sR0FBR2lCLE9BQU8sQ0FBQ0Msb0JBQVIsQ0FBNkJQLE1BQTdCLEVBQXFDQyxNQUFyQyxFQUE2Q0MsV0FBN0MsRUFBMERDLElBQTFELEVBQWdFQyxJQUFoRSxFQUFzRUMsU0FBdEUsQ0FBaEI7QUFDQWpCLHFCQUFpQixDQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBa0JDLE1BQWxCLEVBQTBCQyxNQUExQixFQUFrQ0MsY0FBbEMsQ0FBakI7QUFDQSxXQUFPSixPQUFQO0FBQ0g7O0FBQ0RuQixnQkFBYyxDQUFDNkIscUJBQWYsR0FBdUNBLHFCQUF2Qzs7QUFDQSxXQUFTUyxxQkFBVCxDQUErQlIsTUFBL0IsRUFBdUNDLE1BQXZDLEVBQStDRSxJQUEvQyxFQUFxREMsSUFBckQsRUFBMkRkLE1BQTNELEVBQW1FQyxNQUFuRSxFQUEyRUMsTUFBM0UsRUFBbUZDLGNBQW5GLEVBQW1HYSxPQUFuRyxFQUE0RztBQUN4RyxRQUFNakIsT0FBTyxHQUFHaUIsT0FBTyxDQUFDRyxvQkFBUixDQUE2QlQsTUFBN0IsRUFBcUNDLE1BQXJDLEVBQTZDRSxJQUE3QyxFQUFtREMsSUFBbkQsQ0FBaEI7QUFDQWhCLHFCQUFpQixDQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBa0JDLE1BQWxCLEVBQTBCQyxNQUExQixFQUFrQ0MsY0FBbEMsQ0FBakI7QUFDQSxXQUFPSixPQUFQO0FBQ0g7O0FBQ0RuQixnQkFBYyxDQUFDc0MscUJBQWYsR0FBdUNBLHFCQUF2Qzs7QUFDQSxXQUFTRSxhQUFULENBQXVCQyxLQUF2QixFQUE4QkMsTUFBOUIsRUFBc0NDLE1BQXRDLEVBQThDUCxPQUE5QyxFQUF1RDtBQUNuRCxRQUFNakIsT0FBTyxHQUFHaUIsT0FBTyxDQUFDUSxhQUFSLENBQXNCSCxLQUF0QixFQUE2QkMsTUFBTSxHQUFHLFFBQUgsR0FBYyxNQUFqRCxDQUFoQjs7QUFDQSxRQUFJdkIsT0FBSixFQUFhO0FBQUE7O0FBQ1QsVUFBTTBCLFNBQVMsR0FBRyxJQUFJQyxTQUFKLEVBQWxCO0FBQ0FELGVBQVMsQ0FBQ3JDLENBQVYsZ0JBQWNtQyxNQUFNLENBQUNuQyxDQUFyQixpREFBMEIsQ0FBMUI7QUFDQXFDLGVBQVMsQ0FBQ3RDLENBQVYsZ0JBQWNvQyxNQUFNLENBQUNwQyxDQUFyQixpREFBMEIsQ0FBMUI7QUFDQXNDLGVBQVMsQ0FBQ0UsQ0FBVixnQkFBY0osTUFBTSxDQUFDSSxDQUFyQixpREFBMEIsQ0FBMUI7QUFDQUYsZUFBUyxDQUFDRyxDQUFWLGdCQUFjTCxNQUFNLENBQUNLLENBQXJCLGlEQUEwQixDQUExQjtBQUNBSCxlQUFTLENBQUNJLENBQVYsaUJBQWNOLE1BQU0sQ0FBQ08sRUFBckIsbURBQTJCLENBQTNCO0FBQ0FMLGVBQVMsQ0FBQ00sQ0FBVixpQkFBY1IsTUFBTSxDQUFDUyxFQUFyQixtREFBMkIsQ0FBM0I7QUFDQWpDLGFBQU8sQ0FBQ2tDLFlBQVIsQ0FBcUJSLFNBQXJCO0FBQ0EsYUFBTzFCLE9BQVA7QUFDSDs7QUFDRCxXQUFPLEVBQVA7QUFDSDs7QUFDRG5CLGdCQUFjLENBQUN3QyxhQUFmLEdBQStCQSxhQUEvQjtBQUNILENBNURELEVBNERHeEMsY0FBYyxLQUFLQSxjQUFjLEdBQUcsRUFBdEIsQ0E1RGpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ08sSUFBTUYsY0FBYjtBQUFBOztBQUFBOztBQUNJLDRCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsK0JBQVN3RCxTQUFUO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsQ0FBQyxNQUFLSCxJQUFMLENBQVVJLFVBQVYsQ0FBcUIsSUFBckIsQ0FBRCxDQUFoQjtBQUNBLFVBQUtDLGNBQUwsR0FBc0IsRUFBdEI7QUFKVTtBQUtiOztBQU5MO0FBQUE7QUFBQSxXQU9JLHNCQUFhO0FBQ1QsYUFBTyxLQUFLRixRQUFMLENBQWMsS0FBS0EsUUFBTCxDQUFjakMsTUFBZCxHQUF1QixDQUFyQyxDQUFQO0FBQ0g7QUFUTDtBQUFBO0FBQUEsV0FVSSxxQkFBWVcsT0FBWixFQUFxQjtBQUNqQixXQUFLc0IsUUFBTCxDQUFjRyxJQUFkLENBQW1CekIsT0FBbkI7QUFDSDtBQVpMO0FBQUE7QUFBQSxXQWFJLDBCQUFpQjtBQUNiLFVBQUksS0FBS3NCLFFBQUwsQ0FBY2pDLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUIsYUFBS2lDLFFBQUwsQ0FBY0ksR0FBZDtBQUNILE9BRkQsTUFHSztBQUNELGFBQUtDLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkMsT0FBbEIsQ0FBMEIsZ0NBQTFCO0FBQ0g7QUFDSjtBQXBCTDtBQUFBO0FBQUEsV0FxQkksK0JBQXNCO0FBQ2xCLFVBQUk3QixPQUFKOztBQUNBLFVBQUksS0FBS3dCLGNBQUwsQ0FBb0JuQyxNQUF4QixFQUFnQztBQUM1QlcsZUFBTyxHQUFHLEtBQUt3QixjQUFMLENBQW9CRSxHQUFwQixFQUFWO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsWUFBTUksTUFBTSxHQUFHVixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBckIsZUFBTyxHQUFHOEIsTUFBTSxDQUFDUCxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFDSDs7QUFSaUIsdUJBU1EsS0FBS0osSUFUYjtBQUFBLFVBU1ZZLEtBVFUsY0FTVkEsS0FUVTtBQUFBLFVBU0hDLE1BVEcsY0FTSEEsTUFURzs7QUFVbEIsVUFBSWhDLE9BQU8sQ0FBQzhCLE1BQVIsQ0FBZUMsS0FBZixLQUF5QkEsS0FBN0IsRUFBb0M7QUFDaEMvQixlQUFPLENBQUM4QixNQUFSLENBQWVDLEtBQWYsR0FBdUJBLEtBQXZCO0FBQ0g7O0FBQ0QsVUFBSS9CLE9BQU8sQ0FBQzhCLE1BQVIsQ0FBZUUsTUFBZixLQUEwQkEsTUFBOUIsRUFBc0M7QUFDbENoQyxlQUFPLENBQUM4QixNQUFSLENBQWVFLE1BQWYsR0FBd0JBLE1BQXhCO0FBQ0g7O0FBQ0QsYUFBT2hDLE9BQVA7QUFDSDtBQXRDTDtBQUFBO0FBQUEsV0F1Q0ksOEJBQXFCQSxPQUFyQixFQUE4QjtBQUMxQixXQUFLd0IsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUJ6QixPQUF6QjtBQUNIO0FBekNMO0FBQUE7QUFBQSxXQTBDSSxpQkFBUTtBQUNKLFdBQUtpQyxLQUFMO0FBQ0EsV0FBS0MsVUFBTDtBQUNIO0FBN0NMO0FBQUE7QUFBQSxXQThDSSxpQkFBUTtBQUFBLFVBQ0lmLElBREosR0FDYSxJQURiLENBQ0lBLElBREo7QUFFSixVQUFNbkIsT0FBTyxHQUFHLEtBQUt1QixVQUFMLEVBQWhCO0FBQ0F2QixhQUFPLENBQUNpQixZQUFSO0FBQ0FqQixhQUFPLENBQUNtQyxTQUFSLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCaEIsSUFBSSxDQUFDWSxLQUE3QixFQUFvQ1osSUFBSSxDQUFDYSxNQUF6QztBQUNIO0FBbkRMO0FBQUE7QUFBQSxXQW9ESSxzQkFBYTtBQUNULFVBQU1ELEtBQUssR0FBRyxLQUFLSixNQUFMLENBQVlTLE1BQVosQ0FBbUJDLFFBQW5CLEVBQWQ7QUFDQSxVQUFNTCxNQUFNLEdBQUcsS0FBS0wsTUFBTCxDQUFZUyxNQUFaLENBQW1CRSxTQUFuQixFQUFmO0FBQ0EsVUFBTUMsVUFBVSxHQUFHLEtBQUtaLE1BQUwsQ0FBWVMsTUFBWixDQUFtQkksYUFBbkIsRUFBbkI7QUFDQSxVQUFNQyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXWixLQUFLLEdBQUdRLFVBQW5CLENBQWxCO0FBQ0EsVUFBTUssVUFBVSxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBV1gsTUFBTSxHQUFHTyxVQUFwQixDQUFuQjtBQUxTLFVBTURwQixJQU5DLEdBTVEsSUFOUixDQU1EQSxJQU5DOztBQU9ULFVBQUlBLElBQUksQ0FBQ1ksS0FBTCxLQUFlVSxTQUFmLElBQTRCdEIsSUFBSSxDQUFDYSxNQUFMLEtBQWdCWSxVQUFoRCxFQUE0RDtBQUN4RHpCLFlBQUksQ0FBQ1ksS0FBTCxHQUFhVSxTQUFiO0FBQ0F0QixZQUFJLENBQUNhLE1BQUwsR0FBY1ksVUFBZDtBQUNBekIsWUFBSSxDQUFDMEIsS0FBTCxDQUFXZCxLQUFYLGFBQXNCQSxLQUF0QjtBQUNBWixZQUFJLENBQUMwQixLQUFMLENBQVdiLE1BQVgsYUFBdUJBLE1BQXZCO0FBQ0g7QUFDSjtBQWpFTDs7QUFBQTtBQUFBLEVBQW9DdkUsZ0RBQXBDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RPLElBQU1xRixTQUFTLEdBQUcsV0FBbEI7QUFDQSxJQUFJQyxTQUFKOztBQUNQLENBQUMsVUFBVUEsU0FBVixFQUFxQjtBQUNsQixXQUFTQyxXQUFULENBQXFCQyxTQUFyQixFQUFnQztBQUFBLFFBQ3BCQyxRQURvQixHQUNQRCxTQURPLENBQ3BCQyxRQURvQjs7QUFFNUIsUUFBSUEsUUFBSixFQUFjO0FBQ1YsVUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNGLFFBQWQsQ0FBSixFQUE2QjtBQUN6QixlQUFPQSxRQUFRLENBQUM3RCxNQUFoQjtBQUNIOztBQUNELFVBQUk2RCxRQUFRLENBQUNHLElBQWIsRUFBbUI7QUFDZixlQUFPLENBQVA7QUFDSDs7QUFDRCxVQUFNQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZSixRQUFaLENBQWI7QUFDQSxhQUFPSSxJQUFJLENBQUNqRSxNQUFaO0FBQ0g7O0FBQ0QsV0FBTyxDQUFQO0FBQ0g7O0FBQ0QwRCxXQUFTLENBQUNDLFdBQVYsR0FBd0JBLFdBQXhCO0FBQ0gsQ0FoQkQsRUFnQkdELFNBQVMsS0FBS0EsU0FBUyxHQUFHLEVBQWpCLENBaEJaOztBQWlCTyxJQUFJUyxrQkFBSjs7QUFDUCxDQUFDLFVBQVVBLGtCQUFWLEVBQThCO0FBQzNCLFdBQVNDLE1BQVQsQ0FBZ0JSLFNBQWhCLEVBQTJCdEIsTUFBM0IsRUFBbUM7QUFBQSxRQUN2QnVCLFFBRHVCLEdBQ1ZELFNBRFUsQ0FDdkJDLFFBRHVCO0FBQUEsUUFFdkJRLFFBRnVCLEdBRVYvQixNQUZVLENBRXZCK0IsUUFGdUI7O0FBRy9CLFFBQUlSLFFBQUosRUFBYztBQUNWLFVBQU1sRCxPQUFPLEdBQUcwRCxRQUFRLENBQUNuQyxVQUFULEVBQWhCO0FBQ0FtQyxjQUFRLENBQUNDLEtBQVQ7O0FBQ0EsVUFBSVIsS0FBSyxDQUFDQyxPQUFOLENBQWNGLFFBQWQsQ0FBSixFQUE2QjtBQUN6QixhQUFLLElBQUk5RCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHOEQsUUFBUSxDQUFDN0QsTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7QUFDdEMsY0FBTXdFLFNBQVMsR0FBR1YsUUFBUSxDQUFDOUQsQ0FBRCxDQUExQjtBQUNBc0Usa0JBQVEsQ0FBQ0csZUFBVCxDQUF5QkQsU0FBekIsRUFBb0M1RCxPQUFwQztBQUNIO0FBQ0osT0FMRCxNQU1LLElBQUlrRCxRQUFRLENBQUNHLElBQWIsRUFBbUI7QUFDcEIsWUFBTU8sVUFBUyxHQUFHVixRQUFsQjtBQUNBUSxnQkFBUSxDQUFDRyxlQUFULENBQXlCRCxVQUF6QixFQUFvQzVELE9BQXBDO0FBQ0gsT0FISSxNQUlBO0FBQ0QsWUFBTThELGFBQWEsR0FBR1osUUFBdEI7QUFDQSxZQUFNSSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZUSxhQUFaLENBQWI7O0FBQ0EsYUFBSyxJQUFJMUUsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR2tFLElBQUksQ0FBQ2pFLE1BQXpCLEVBQWlDRCxFQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLGNBQU13RSxXQUFTLEdBQUdFLGFBQWEsQ0FBQ1IsSUFBSSxDQUFDbEUsRUFBRCxDQUFMLENBQS9CO0FBQ0FzRSxrQkFBUSxDQUFDRyxlQUFULENBQXlCRCxXQUF6QixFQUFvQzVELE9BQXBDO0FBQ0g7QUFDSjs7QUFDRDBELGNBQVEsQ0FBQ0MsS0FBVDtBQUNIO0FBQ0o7O0FBQ0RILG9CQUFrQixDQUFDQyxNQUFuQixHQUE0QkEsTUFBNUI7O0FBQ0EsV0FBU00sTUFBVCxDQUFnQmQsU0FBaEIsRUFBMkJ0QixNQUEzQixFQUFtQztBQUFBLFFBQ3ZCdUIsUUFEdUIsR0FDVkQsU0FEVSxDQUN2QkMsUUFEdUI7QUFBQSxRQUV2QmMsT0FGdUIsR0FFWHJDLE1BRlcsQ0FFdkJxQyxPQUZ1Qjs7QUFHL0IsUUFBSWQsUUFBSixFQUFjO0FBQ1ZjLGFBQU8sQ0FBQ0wsS0FBUjs7QUFDQSxVQUFJUixLQUFLLENBQUNDLE9BQU4sQ0FBY0YsUUFBZCxDQUFKLEVBQTZCO0FBQ3pCLGFBQUssSUFBSTlELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc4RCxRQUFRLENBQUM3RCxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztBQUN0QyxjQUFNd0UsU0FBUyxHQUFHVixRQUFRLENBQUM5RCxDQUFELENBQTFCO0FBQ0E0RSxpQkFBTyxDQUFDQyxlQUFSLENBQXdCTCxTQUF4QjtBQUNIO0FBQ0osT0FMRCxNQU1LLElBQUlWLFFBQVEsQ0FBQ0csSUFBYixFQUFtQjtBQUNwQixZQUFNTyxXQUFTLEdBQUdWLFFBQWxCO0FBQ0FjLGVBQU8sQ0FBQ0MsZUFBUixDQUF3QkwsV0FBeEI7QUFDSCxPQUhJLE1BSUE7QUFDRCxZQUFNRSxhQUFhLEdBQUdaLFFBQXRCO0FBQ0EsWUFBTUksSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWVEsYUFBWixDQUFiOztBQUNBLGFBQUssSUFBSTFFLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUdrRSxJQUFJLENBQUNqRSxNQUF6QixFQUFpQ0QsR0FBQyxFQUFsQyxFQUFzQztBQUNsQyxjQUFNd0UsV0FBUyxHQUFHRSxhQUFhLENBQUNSLElBQUksQ0FBQ2xFLEdBQUQsQ0FBTCxDQUEvQjtBQUNBNEUsaUJBQU8sQ0FBQ0MsZUFBUixDQUF3QkwsV0FBeEI7QUFDSDtBQUNKOztBQUNESSxhQUFPLENBQUNMLEtBQVI7QUFDSDtBQUNKOztBQUNESCxvQkFBa0IsQ0FBQ08sTUFBbkIsR0FBNEJBLE1BQTVCOztBQUNBLFdBQVNHLE9BQVQsQ0FBaUJqQixTQUFqQixFQUE0QnRCLE1BQTVCLEVBQW9DO0FBQUEsUUFDeEJ1QixRQUR3QixHQUNYRCxTQURXLENBQ3hCQyxRQUR3QjtBQUFBLFFBRXhCaUIsUUFGd0IsR0FFWHhDLE1BRlcsQ0FFeEJ3QyxRQUZ3Qjs7QUFHaEMsUUFBSWpCLFFBQUosRUFBYztBQUNWLFVBQU1sRCxPQUFPLEdBQUdtRSxRQUFRLENBQUM1QyxVQUFULEVBQWhCO0FBQ0E0QyxjQUFRLENBQUNSLEtBQVQ7QUFDQSxVQUFJUyxNQUFNLEdBQUcsS0FBYjs7QUFDQSxVQUFJakIsS0FBSyxDQUFDQyxPQUFOLENBQWNGLFFBQWQsQ0FBSixFQUE2QjtBQUN6QixhQUFLLElBQUk5RCxDQUFDLEdBQUc4RCxRQUFRLENBQUM3RCxNQUFULEdBQWtCLENBQS9CLEVBQWtDRCxDQUFDLElBQUksQ0FBdkMsRUFBMENBLENBQUMsRUFBM0MsRUFBK0M7QUFDM0MsY0FBTXdFLFNBQVMsR0FBR1YsUUFBUSxDQUFDOUQsQ0FBRCxDQUExQjs7QUFDQSxjQUFJK0UsUUFBUSxDQUFDRSxpQkFBVCxDQUEyQlQsU0FBM0IsRUFBc0M1RCxPQUF0QyxFQUErQ29FLE1BQS9DLENBQUosRUFBNEQ7QUFDeERBLGtCQUFNLEdBQUcsSUFBVDtBQUNIO0FBQ0o7QUFDSixPQVBELE1BUUssSUFBSWxCLFFBQVEsQ0FBQ0csSUFBYixFQUFtQjtBQUNwQixZQUFNTyxXQUFTLEdBQUdWLFFBQWxCOztBQUNBLFlBQUlpQixRQUFRLENBQUNFLGlCQUFULENBQTJCVCxXQUEzQixFQUFzQzVELE9BQXRDLEVBQStDb0UsTUFBL0MsQ0FBSixFQUE0RDtBQUN4REEsZ0JBQU0sR0FBRyxJQUFUO0FBQ0g7QUFDSixPQUxJLE1BTUE7QUFDRCxZQUFNTixhQUFhLEdBQUdaLFFBQXRCO0FBQ0EsWUFBTUksSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWVEsYUFBWixDQUFiOztBQUNBLGFBQUssSUFBSTFFLEdBQUMsR0FBR2tFLElBQUksQ0FBQ2pFLE1BQUwsR0FBYyxDQUEzQixFQUE4QkQsR0FBQyxJQUFJLENBQW5DLEVBQXNDQSxHQUFDLEVBQXZDLEVBQTJDO0FBQ3ZDLGNBQU13RSxXQUFTLEdBQUdFLGFBQWEsQ0FBQ1IsSUFBSSxDQUFDbEUsR0FBRCxDQUFMLENBQS9COztBQUNBLGNBQUkrRSxRQUFRLENBQUNFLGlCQUFULENBQTJCVCxXQUEzQixFQUFzQzVELE9BQXRDLEVBQStDb0UsTUFBL0MsQ0FBSixFQUE0RDtBQUN4REEsa0JBQU0sR0FBRyxJQUFUO0FBQ0g7QUFDSjtBQUNKOztBQUNERCxjQUFRLENBQUNSLEtBQVQ7QUFDQSxhQUFPUyxNQUFQO0FBQ0g7O0FBQ0QsV0FBTyxLQUFQO0FBQ0g7O0FBQ0RaLG9CQUFrQixDQUFDVSxPQUFuQixHQUE2QkEsT0FBN0I7O0FBQ0EsV0FBU0ksTUFBVCxDQUFnQnJCLFNBQWhCLEVBQTJCdEIsTUFBM0IsRUFBbUM7QUFBQSxRQUN2QnVCLFFBRHVCLEdBQ1ZELFNBRFUsQ0FDdkJDLFFBRHVCO0FBQUEsUUFFdkJxQixPQUZ1QixHQUVYNUMsTUFGVyxDQUV2QjRDLE9BRnVCOztBQUcvQixRQUFJckIsUUFBSixFQUFjO0FBQ1YsVUFBTWxELE9BQU8sR0FBR3VFLE9BQU8sQ0FBQ2hELFVBQVIsRUFBaEI7QUFDQWdELGFBQU8sQ0FBQ1osS0FBUjs7QUFDQSxVQUFJUixLQUFLLENBQUNDLE9BQU4sQ0FBY0YsUUFBZCxDQUFKLEVBQTZCO0FBQ3pCLFlBQUlBLFFBQVEsQ0FBQzdELE1BQWIsRUFBcUI7QUFDakJXLGlCQUFPLENBQUN3RSxRQUFSLEdBQW1CLENBQW5CO0FBQ0F4RSxpQkFBTyxDQUFDc0UsTUFBUixHQUFpQixJQUFqQjs7QUFDQSxlQUFLLElBQUlsRixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHOEQsUUFBUSxDQUFDN0QsTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7QUFDdEMsZ0JBQU13RSxTQUFTLEdBQUdWLFFBQVEsQ0FBQzlELENBQUQsQ0FBMUI7QUFDQW1GLG1CQUFPLENBQUNOLGVBQVIsQ0FBd0JMLFNBQXhCO0FBQ0EsZ0JBQU1hLGdCQUFnQixHQUFHRixPQUFPLENBQUNoRCxVQUFSLEVBQXpCO0FBQ0F2QixtQkFBTyxDQUFDd0UsUUFBUixJQUFvQkMsZ0JBQWdCLENBQUNELFFBQXJDOztBQUNBLGdCQUFJLENBQUNDLGdCQUFnQixDQUFDSCxNQUF0QixFQUE4QjtBQUMxQnRFLHFCQUFPLENBQUNzRSxNQUFSLEdBQWlCLEtBQWpCO0FBQ0g7QUFDSjs7QUFDRHRFLGlCQUFPLENBQUN3RSxRQUFSLElBQW9CdEIsUUFBUSxDQUFDN0QsTUFBN0I7QUFDSCxTQWJELE1BY0s7QUFDRFcsaUJBQU8sQ0FBQ3dFLFFBQVIsR0FBbUIsQ0FBbkI7QUFDSDtBQUNKLE9BbEJELE1BbUJLLElBQUl0QixRQUFRLENBQUNHLElBQWIsRUFBbUI7QUFDcEIsWUFBTU8sV0FBUyxHQUFHVixRQUFsQjtBQUNBcUIsZUFBTyxDQUFDTixlQUFSLENBQXdCTCxXQUF4Qjs7QUFDQSxZQUFNYSxpQkFBZ0IsR0FBR0YsT0FBTyxDQUFDaEQsVUFBUixFQUF6Qjs7QUFDQXZCLGVBQU8sQ0FBQ3dFLFFBQVIsR0FBbUJDLGlCQUFnQixDQUFDRCxRQUFwQztBQUNBeEUsZUFBTyxDQUFDc0UsTUFBUixHQUFpQkcsaUJBQWdCLENBQUNILE1BQWxDO0FBQ0gsT0FOSSxNQU9BO0FBQ0QsWUFBTVIsYUFBYSxHQUFHWixRQUF0QjtBQUNBLFlBQU1JLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlRLGFBQVosQ0FBYjs7QUFDQSxZQUFJUixJQUFJLENBQUNqRSxNQUFULEVBQWlCO0FBQ2JXLGlCQUFPLENBQUN3RSxRQUFSLEdBQW1CLENBQW5CO0FBQ0F4RSxpQkFBTyxDQUFDc0UsTUFBUixHQUFpQixJQUFqQjs7QUFDQSxlQUFLLElBQUlsRixHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHa0UsSUFBSSxDQUFDakUsTUFBekIsRUFBaUNELEdBQUMsRUFBbEMsRUFBc0M7QUFDbEMsZ0JBQU13RSxXQUFTLEdBQUdFLGFBQWEsQ0FBQ1IsSUFBSSxDQUFDbEUsR0FBRCxDQUFMLENBQS9CO0FBQ0FtRixtQkFBTyxDQUFDTixlQUFSLENBQXdCTCxXQUF4Qjs7QUFDQSxnQkFBTWEsa0JBQWdCLEdBQUdGLE9BQU8sQ0FBQ2hELFVBQVIsRUFBekI7O0FBQ0F2QixtQkFBTyxDQUFDd0UsUUFBUixJQUFvQkMsa0JBQWdCLENBQUNELFFBQXJDOztBQUNBLGdCQUFJLENBQUNDLGtCQUFnQixDQUFDSCxNQUF0QixFQUE4QjtBQUMxQnRFLHFCQUFPLENBQUNzRSxNQUFSLEdBQWlCLEtBQWpCO0FBQ0g7QUFDSjs7QUFDRHRFLGlCQUFPLENBQUN3RSxRQUFSLElBQW9CbEIsSUFBSSxDQUFDakUsTUFBekI7QUFDSCxTQWJELE1BY0s7QUFDRFcsaUJBQU8sQ0FBQ3dFLFFBQVIsR0FBbUIsQ0FBbkI7QUFDQXhFLGlCQUFPLENBQUNzRSxNQUFSLEdBQWlCLElBQWpCO0FBQ0g7QUFDSjs7QUFDREMsYUFBTyxDQUFDWixLQUFSO0FBQ0g7QUFDSjs7QUFDREgsb0JBQWtCLENBQUNjLE1BQW5CLEdBQTRCQSxNQUE1Qjs7QUFDQSxXQUFTSSxJQUFULENBQWMvQyxNQUFkLEVBQXNCO0FBQ2xCQSxVQUFNLENBQUNnRCxVQUFQLENBQWtCWixNQUFsQixDQUF5QmEsR0FBekIsQ0FBNkI5QixTQUE3QixFQUF3Q2lCLE1BQXhDO0FBQ0FwQyxVQUFNLENBQUNnRCxVQUFQLENBQWtCbEIsTUFBbEIsQ0FBeUJtQixHQUF6QixDQUE2QjlCLFNBQTdCLEVBQXdDVyxNQUF4QztBQUNBOUIsVUFBTSxDQUFDZ0QsVUFBUCxDQUFrQlQsT0FBbEIsQ0FBMEJVLEdBQTFCLENBQThCOUIsU0FBOUIsRUFBeUNvQixPQUF6QztBQUNBdkMsVUFBTSxDQUFDZ0QsVUFBUCxDQUFrQkwsTUFBbEIsQ0FBeUJNLEdBQXpCLENBQTZCOUIsU0FBN0IsRUFBd0N3QixNQUF4QztBQUNIOztBQUNEZCxvQkFBa0IsQ0FBQ2tCLElBQW5CLEdBQTBCQSxJQUExQjtBQUNILENBOUpELEVBOEpHbEIsa0JBQWtCLEtBQUtBLGtCQUFrQixHQUFHLEVBQTFCLENBOUpyQixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ08sSUFBTXFCLE1BQU0sR0FBRyxRQUFmO0FBQ0EsSUFBSUMsTUFBSjs7QUFDUCxDQUFDLFVBQVVBLE1BQVYsRUFBa0I7QUFDZixXQUFTQyxrQkFBVCxDQUE0QkMsTUFBNUIsRUFBb0M7QUFBQTs7QUFDaEMsb0NBQU9BLE1BQU0sQ0FBQ0MsZUFBZCx5RUFBaUMsQ0FBakM7QUFDSDs7QUFDREgsUUFBTSxDQUFDQyxrQkFBUCxHQUE0QkEsa0JBQTVCOztBQUNBLFdBQVNHLFFBQVQsQ0FBa0JGLE1BQWxCLEVBQTBCO0FBQUE7O0FBQ3RCLDZCQUFPQSxNQUFNLENBQUNWLE1BQWQsMkRBQXdCLEtBQXhCO0FBQ0g7O0FBQ0RRLFFBQU0sQ0FBQ0ksUUFBUCxHQUFrQkEsUUFBbEI7O0FBQ0EsV0FBU0MsZ0JBQVQsQ0FBMEJILE1BQTFCLEVBQWtDO0FBQUE7O0FBQzlCLG1DQUFPQSxNQUFNLENBQUNJLFlBQWQsdUVBQThCLElBQTlCO0FBQ0g7O0FBQ0ROLFFBQU0sQ0FBQ0ssZ0JBQVAsR0FBMEJBLGdCQUExQjtBQUNILENBYkQsRUFhR0wsTUFBTSxLQUFLQSxNQUFNLEdBQUcsRUFBZCxDQWJUOztBQWNPLElBQUlPLGVBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxlQUFWLEVBQTJCO0FBQ3hCLFdBQVNmLE1BQVQsQ0FBZ0JVLE1BQWhCLEVBQXdCckQsTUFBeEIsRUFBZ0M7QUFDNUIsUUFBSSxDQUFDbUQsTUFBTSxDQUFDSyxnQkFBUCxDQUF3QkgsTUFBeEIsQ0FBTCxFQUFzQztBQUNsQztBQUNIOztBQUNEeEIscUVBQUEsQ0FBMEJ3QixNQUExQixFQUFrQ3JELE1BQWxDO0FBQ0EsUUFBTTNCLE9BQU8sR0FBRzJCLE1BQU0sQ0FBQzRDLE9BQVAsQ0FBZWhELFVBQWYsRUFBaEI7QUFDQXlELFVBQU0sQ0FBQ0MsZUFBUCxHQUF5QmpGLE9BQU8sQ0FBQ3dFLFFBQWpDOztBQUNBLFFBQUl4RSxPQUFPLENBQUNzRSxNQUFSLElBQWtCLENBQUNVLE1BQU0sQ0FBQ1YsTUFBOUIsRUFBc0M7QUFDbENVLFlBQU0sQ0FBQ1YsTUFBUCxHQUFnQixJQUFoQjs7QUFDQSxVQUFJVSxNQUFNLENBQUNNLFFBQVgsRUFBcUI7QUFDakJOLGNBQU0sQ0FBQ00sUUFBUDtBQUNIO0FBQ0o7QUFDSjs7QUFDREQsaUJBQWUsQ0FBQ2YsTUFBaEIsR0FBeUJBLE1BQXpCOztBQUNBLFdBQVNJLElBQVQsQ0FBYy9DLE1BQWQsRUFBc0I7QUFDbEJBLFVBQU0sQ0FBQ2dELFVBQVAsQ0FBa0JaLE1BQWxCLENBQXlCYSxHQUF6QixDQUE2QkMsTUFBN0IsRUFBcUNyQixpRUFBckM7QUFDQTdCLFVBQU0sQ0FBQ2dELFVBQVAsQ0FBa0JsQixNQUFsQixDQUF5Qm1CLEdBQXpCLENBQTZCQyxNQUE3QixFQUFxQ3JCLGlFQUFyQztBQUNBN0IsVUFBTSxDQUFDZ0QsVUFBUCxDQUFrQlQsT0FBbEIsQ0FBMEJVLEdBQTFCLENBQThCQyxNQUE5QixFQUFzQ3JCLGtFQUF0QztBQUNBN0IsVUFBTSxDQUFDZ0QsVUFBUCxDQUFrQkwsTUFBbEIsQ0FBeUJNLEdBQXpCLENBQTZCQyxNQUE3QixFQUFxQ1AsTUFBckM7QUFDSDs7QUFDRGUsaUJBQWUsQ0FBQ1gsSUFBaEIsR0FBdUJBLElBQXZCO0FBQ0gsQ0F2QkQsRUF1QkdXLGVBQWUsS0FBS0EsZUFBZSxHQUFHLEVBQXZCLENBdkJsQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTTFILE1BQWIsR0FDSSxrQkFBeUI7QUFBQTs7QUFBQSxNQUFiSCxNQUFhLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3JCLE9BQUttRyxLQUFMLEdBQWEsRUFBYjtBQUNBbkcsUUFBTSxDQUFDK0gsVUFBUCx5QkFBb0IvSCxNQUFNLENBQUMrSCxVQUEzQixtRUFBeUNBLDZEQUF6QztBQUNBL0gsUUFBTSxDQUFDZ0ksTUFBUCxxQkFBZ0JoSSxNQUFNLENBQUNnSSxNQUF2QiwyREFBaUNBLG9EQUFqQztBQUNBaEksUUFBTSxDQUFDQyxRQUFQLHVCQUFrQkQsTUFBTSxDQUFDQyxRQUF6QiwrREFBcUNBLHdEQUFyQztBQUNBRCxRQUFNLENBQUNpSSxPQUFQLHNCQUFpQmpJLE1BQU0sQ0FBQ2lJLE9BQXhCLDZEQUFtQ0Esc0RBQW5DO0FBQ0FqSSxRQUFNLENBQUNrSSxPQUFQLHNCQUFpQmxJLE1BQU0sQ0FBQ2tJLE9BQXhCLDZEQUFtQ0Esc0RBQW5DO0FBQ0FsSSxRQUFNLENBQUNtSSxRQUFQLHVCQUFrQm5JLE1BQU0sQ0FBQ21JLFFBQXpCLCtEQUFxQ0Esd0RBQXJDO0FBQ0FuSSxRQUFNLENBQUNvSSxRQUFQLHVCQUFrQnBJLE1BQU0sQ0FBQ29JLFFBQXpCLCtEQUFxQ0Esd0RBQXJDO0FBQ0FwSSxRQUFNLENBQUNxSSxNQUFQLHFCQUFnQnJJLE1BQU0sQ0FBQ3FJLE1BQXZCLDJEQUFpQ0Esb0RBQWpDO0FBQ0FySSxRQUFNLENBQUNzSSxLQUFQLG9CQUFldEksTUFBTSxDQUFDc0ksS0FBdEIseURBQStCQSxrREFBL0I7QUFDQXRJLFFBQU0sQ0FBQ3VJLFNBQVAsd0JBQW1CdkksTUFBTSxDQUFDdUksU0FBMUIsaUVBQXVDQSwwREFBdkM7QUFDQSxPQUFLcEIsVUFBTCxHQUFrQixJQUFJbkgsTUFBTSxDQUFDK0gsVUFBWCxFQUFsQjtBQUNBLE9BQUtuRCxNQUFMLEdBQWMsSUFBSTVFLE1BQU0sQ0FBQ2dJLE1BQVgsRUFBZDtBQUNBLE9BQUtRLFFBQUwsR0FBZ0IsSUFBSXhJLE1BQU0sQ0FBQ0MsUUFBWCxDQUFvQixJQUFwQixDQUFoQjtBQUNBLE9BQUt1RyxPQUFMLEdBQWUsSUFBSXhHLE1BQU0sQ0FBQ2lJLE9BQVgsQ0FBbUIsSUFBbkIsQ0FBZjtBQUNBLE9BQUtsQixPQUFMLEdBQWUsSUFBSS9HLE1BQU0sQ0FBQ2tJLE9BQVgsQ0FBbUIsSUFBbkIsQ0FBZjtBQUNBLE9BQUtoQyxRQUFMLEdBQWdCLElBQUlsRyxNQUFNLENBQUNtSSxRQUFYLENBQW9CLElBQXBCLENBQWhCO0FBQ0EsT0FBS3hCLFFBQUwsR0FBZ0IsSUFBSTNHLE1BQU0sQ0FBQ29JLFFBQVgsQ0FBb0IsSUFBcEIsQ0FBaEI7QUFDQSxPQUFLSyxNQUFMLEdBQWMsSUFBSXpJLE1BQU0sQ0FBQ3FJLE1BQVgsQ0FBa0IsSUFBbEIsQ0FBZDtBQUNBLE9BQUtqRSxLQUFMLEdBQWEsSUFBSXBFLE1BQU0sQ0FBQ3NJLEtBQVgsRUFBYjtBQUNBLE9BQUtJLFNBQUwsR0FBaUIsSUFBSTFJLE1BQU0sQ0FBQ3VJLFNBQVgsQ0FBcUIsSUFBckIsQ0FBakI7QUFDQXZDLDRFQUFBLENBQXdCLElBQXhCO0FBQ0E2Qix1RUFBQSxDQUFxQixJQUFyQjtBQUNILENBekJMLEM7Ozs7Ozs7Ozs7Ozs7OztBQ1pPLElBQU1jLGFBQWIsR0FDSSx1QkFBWXhFLE1BQVosRUFBb0I7QUFBQTs7QUFDaEIsT0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0gsQ0FITCxDOzs7Ozs7Ozs7Ozs7O0FDQU8sSUFBSXlFLE9BQUo7O0FBQ1AsQ0FBQyxVQUFVQSxPQUFWLEVBQW1CO0FBQ2hCLFdBQVNDLFNBQVQsQ0FBbUJ6QyxTQUFuQixFQUE4QjtBQUFBOztBQUMxQixpQ0FBT0EsU0FBUyxDQUFDMEMsT0FBakIsbUVBQTRCLElBQTVCO0FBQ0g7O0FBQ0RGLFNBQU8sQ0FBQ0MsU0FBUixHQUFvQkEsU0FBcEI7QUFDSCxDQUxELEVBS0dELE9BQU8sS0FBS0EsT0FBTyxHQUFHLEVBQWYsQ0FMVixFOzs7Ozs7Ozs7Ozs7O0FDRE8sSUFBSUcsS0FBSjs7QUFDUCxDQUFDLFVBQVVBLEtBQVYsRUFBaUI7QUFDZCxXQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUIxRSxLQUFyQixFQUE0QjtBQUFBLFFBQ2hCMkUsTUFEZ0IsR0FDTEQsS0FESyxDQUNoQkMsTUFEZ0I7O0FBRXhCLFFBQUlBLE1BQUosRUFBWTtBQUNSLGFBQU8sQ0FBQ0EsTUFBRCxHQUFVM0UsS0FBakI7QUFDSDs7QUFDRCxXQUFPLENBQVA7QUFDSDs7QUFDRHdFLE9BQUssQ0FBQ0MsSUFBTixHQUFhQSxJQUFiOztBQUNBLFdBQVNHLElBQVQsQ0FBY0YsS0FBZCxFQUFxQnpFLE1BQXJCLEVBQTZCO0FBQUEsUUFDakI0RSxNQURpQixHQUNOSCxLQURNLENBQ2pCRyxNQURpQjs7QUFFekIsUUFBSUEsTUFBSixFQUFZO0FBQ1IsYUFBTyxDQUFDQSxNQUFELEdBQVU1RSxNQUFqQjtBQUNIOztBQUNELFdBQU8sQ0FBUDtBQUNIOztBQUNEdUUsT0FBSyxDQUFDSSxJQUFOLEdBQWFBLElBQWI7O0FBQ0EsV0FBU0UsU0FBVCxDQUFtQkosS0FBbkIsRUFBMEI7QUFBQSxRQUNkQyxNQURjLEdBQ0tELEtBREwsQ0FDZEMsTUFEYztBQUFBLFFBQ05FLE1BRE0sR0FDS0gsS0FETCxDQUNORyxNQURNO0FBRXRCLFdBQU8sQ0FBQyxDQUFDRixNQUFGLElBQVksQ0FBQyxDQUFDRSxNQUFyQjtBQUNIOztBQUNETCxPQUFLLENBQUNNLFNBQU4sR0FBa0JBLFNBQWxCO0FBQ0gsQ0F0QkQsRUFzQkdOLEtBQUssS0FBS0EsS0FBSyxHQUFHLEVBQWIsQ0F0QlIsRTs7Ozs7Ozs7Ozs7OztBQ0RBLElBQU1PLFdBQVcsR0FBRztBQUNoQkMsYUFBVyxFQUFFLGVBREc7QUFFaEJDLFdBQVMsRUFBRSxhQUZLO0FBR2hCQyxhQUFXLEVBQUUsZUFIRztBQUloQkMsZUFBYSxFQUFFLGlCQUpDO0FBS2hCQyxhQUFXLEVBQUUsZUFMRztBQU1oQkMsWUFBVSxFQUFFO0FBTkksQ0FBcEI7QUFRTyxJQUFJQyxPQUFKOztBQUNQLENBQUMsVUFBVUEsT0FBVixFQUFtQjtBQUNoQixXQUFTQyxnQkFBVCxDQUEwQkMsT0FBMUIsRUFBbUM7QUFBQTs7QUFDL0Isb0NBQU9BLE9BQU8sQ0FBQ0MsY0FBZix5RUFBaUMsSUFBakM7QUFDSDs7QUFDREgsU0FBTyxDQUFDQyxnQkFBUixHQUEyQkEsZ0JBQTNCOztBQUNBLFdBQVNHLGFBQVQsQ0FBdUJGLE9BQXZCLEVBQWdDbEUsSUFBaEMsRUFBc0NxRSxDQUF0QyxFQUF5Q0MsQ0FBekMsRUFBNENDLE9BQTVDLEVBQXFEQyxPQUFyRCxFQUE4REMsRUFBOUQsRUFBa0U7QUFDOUQsUUFBTUMsV0FBVyxHQUFHakIsV0FBVyxDQUFDekQsSUFBRCxDQUEvQjs7QUFDQSxRQUFJMEUsV0FBVyxJQUFJUixPQUFPLENBQUNRLFdBQUQsQ0FBMUIsRUFBeUM7QUFDckMsVUFBTUMsS0FBSyxHQUFHO0FBQ1YzRSxZQUFJLEVBQUpBLElBRFU7QUFFVnFFLFNBQUMsRUFBREEsQ0FGVTtBQUdWQyxTQUFDLEVBQURBLENBSFU7QUFJVkMsZUFBTyxFQUFQQSxPQUpVO0FBS1ZDLGVBQU8sRUFBUEEsT0FMVTtBQU1WQyxVQUFFLEVBQUZBO0FBTlUsT0FBZDtBQVFBUCxhQUFPLENBQUNRLFdBQUQsQ0FBUCxDQUFxQkMsS0FBckI7QUFDSDtBQUNKOztBQUNEWCxTQUFPLENBQUNJLGFBQVIsR0FBd0JBLGFBQXhCO0FBQ0gsQ0FwQkQsRUFvQkdKLE9BQU8sS0FBS0EsT0FBTyxHQUFHLEVBQWYsQ0FwQlYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUTyxJQUFJWSxTQUFKOztBQUNQLENBQUMsVUFBVUEsU0FBVixFQUFxQjtBQUNsQixXQUFTQyxTQUFULENBQW1CQyxTQUFuQixFQUE4Qi9ELE1BQTlCLEVBQXNDO0FBQUE7O0FBQUEsUUFDMUI3RCxNQUQwQixHQUNmNEgsU0FEZSxDQUMxQjVILE1BRDBCOztBQUVsQyxRQUFJQSxNQUFKLEVBQVk7QUFBQTs7QUFDUjZELFlBQU0sQ0FBQ2hHLENBQVAsZ0JBQVdtQyxNQUFNLENBQUNuQyxDQUFsQixpREFBdUIsQ0FBdkI7QUFDQWdHLFlBQU0sQ0FBQ2pHLENBQVAsZ0JBQVdvQyxNQUFNLENBQUNwQyxDQUFsQixpREFBdUIsQ0FBdkI7QUFDQWlHLFlBQU0sQ0FBQ3pELENBQVAsZ0JBQVdKLE1BQU0sQ0FBQ0ksQ0FBbEIsaURBQXVCLENBQXZCO0FBQ0F5RCxZQUFNLENBQUN4RCxDQUFQLGdCQUFXTCxNQUFNLENBQUNLLENBQWxCLGlEQUF1QixDQUF2QjtBQUNBd0QsWUFBTSxDQUFDdEQsRUFBUCxpQkFBWVAsTUFBTSxDQUFDTyxFQUFuQixtREFBeUIsQ0FBekI7QUFDQXNELFlBQU0sQ0FBQ3BELEVBQVAsaUJBQVlULE1BQU0sQ0FBQ1MsRUFBbkIsbURBQXlCLENBQXpCO0FBQ0E7QUFDSDs7QUFWaUMsUUFXMUJvSCxRQVgwQixHQVdiRCxTQVhhLENBVzFCQyxRQVgwQjtBQVlsQyxRQUFNQyxNQUFNLGdDQUFHRixTQUFTLENBQUNFLE1BQWIsaUVBQXVCRixTQUFTLENBQUNHLEtBQWpDLHVDQUEwQyxDQUF0RDtBQUNBLFFBQU1DLE1BQU0saUNBQUdKLFNBQVMsQ0FBQ0ksTUFBYixpRUFBdUJKLFNBQVMsQ0FBQ0csS0FBakMseUNBQTBDLENBQXREO0FBQ0FsRSxVQUFNLENBQUN0RCxFQUFQLG1CQUFZcUgsU0FBUyxDQUFDVCxDQUF0Qix1REFBMkIsQ0FBM0I7QUFDQXRELFVBQU0sQ0FBQ3BELEVBQVAsbUJBQVltSCxTQUFTLENBQUNSLENBQXRCLHVEQUEyQixDQUEzQjs7QUFDQSxRQUFJUyxRQUFKLEVBQWM7QUFDVixVQUFNSSxHQUFHLEdBQUc5RixJQUFJLENBQUM4RixHQUFMLENBQVNKLFFBQVQsQ0FBWjtBQUNBLFVBQU1LLEdBQUcsR0FBRy9GLElBQUksQ0FBQytGLEdBQUwsQ0FBU0wsUUFBVCxDQUFaO0FBQ0FoRSxZQUFNLENBQUNoRyxDQUFQLEdBQVdvSyxHQUFHLEdBQUdILE1BQWpCO0FBQ0FqRSxZQUFNLENBQUNqRyxDQUFQLEdBQVdzSyxHQUFHLEdBQUdKLE1BQWpCO0FBQ0FqRSxZQUFNLENBQUN6RCxDQUFQLEdBQVcsQ0FBQzhILEdBQUQsR0FBT0YsTUFBbEI7QUFDQW5FLFlBQU0sQ0FBQ3hELENBQVAsR0FBVzRILEdBQUcsR0FBR0QsTUFBakI7QUFDQTtBQUNIOztBQUNEbkUsVUFBTSxDQUFDaEcsQ0FBUCxHQUFXaUssTUFBWDtBQUNBakUsVUFBTSxDQUFDakcsQ0FBUCxHQUFXLENBQVg7QUFDQWlHLFVBQU0sQ0FBQ3pELENBQVAsR0FBVyxDQUFYO0FBQ0F5RCxVQUFNLENBQUN4RCxDQUFQLEdBQVcySCxNQUFYO0FBQ0g7O0FBQ0ROLFdBQVMsQ0FBQ0MsU0FBVixHQUFzQkEsU0FBdEI7O0FBQ0EsV0FBU1EsaUJBQVQsQ0FBMkJQLFNBQTNCLEVBQXNDL0QsTUFBdEMsRUFBOEM7QUFBQTs7QUFBQSxRQUNsQ2pGLGNBRGtDLEdBQ2ZnSixTQURlLENBQ2xDaEosY0FEa0M7O0FBRTFDLFFBQUlBLGNBQUosRUFBb0I7QUFBQTs7QUFDaEJpRixZQUFNLENBQUN4RixlQUFQLDRCQUF5Qk8sY0FBYyxDQUFDUCxlQUF4Qyx5RUFBMkQsQ0FBM0Q7QUFDQXdGLFlBQU0sQ0FBQzlGLGFBQVAsNEJBQXVCYSxjQUFjLENBQUNiLGFBQXRDLHlFQUF1RCxDQUF2RDtBQUNBOEYsWUFBTSxDQUFDNUYsZUFBUCw0QkFBeUJXLGNBQWMsQ0FBQ1gsZUFBeEMseUVBQTJELENBQTNEO0FBQ0E0RixZQUFNLENBQUMxRixjQUFQLDRCQUF3QlMsY0FBYyxDQUFDVCxjQUF2Qyx5RUFBeUQsQ0FBekQ7QUFDQTBGLFlBQU0sQ0FBQ3ZGLFdBQVAsNkJBQXFCTSxjQUFjLENBQUNOLFdBQXBDLDJFQUFtRCxDQUFuRDtBQUNBdUYsWUFBTSxDQUFDN0YsU0FBUCw0QkFBbUJZLGNBQWMsQ0FBQ1osU0FBbEMseUVBQStDLENBQS9DO0FBQ0E2RixZQUFNLENBQUMzRixXQUFQLDZCQUFxQlUsY0FBYyxDQUFDVixXQUFwQywyRUFBbUQsQ0FBbkQ7QUFDQTJGLFlBQU0sQ0FBQ3pGLFVBQVAsNEJBQW9CUSxjQUFjLENBQUNSLFVBQW5DLHlFQUFpRCxDQUFqRDtBQUNBO0FBQ0g7O0FBQ0QsUUFBTVosS0FBSyx1QkFBR29LLFNBQVMsQ0FBQ3BLLEtBQWIsK0RBQXNCLENBQWpDO0FBYjBDLFFBY2xDNEssSUFka0MsR0FjekJSLFNBZHlCLENBY2xDUSxJQWRrQzs7QUFlMUMsUUFBSUEsSUFBSixFQUFVO0FBQUEsd0JBQzJCQSxJQUQzQixDQUNFN0ssS0FERjtBQUFBLFVBQ0VBLEtBREYsNEJBQ1UsQ0FEVjtBQUFBLHdCQUMyQjZLLElBRDNCLENBQ2FDLEtBRGI7QUFBQSxVQUNhQSxLQURiLDRCQUNxQixDQURyQjtBQUVOLFVBQU1DLGFBQWEsR0FBRyxJQUFJRCxLQUExQjtBQUNBLFVBQU0zSyxDQUFDLEdBQUlILEtBQUssSUFBSSxFQUFWLEdBQWdCLElBQTFCO0FBQ0EsVUFBTUksQ0FBQyxHQUFJSixLQUFLLElBQUksQ0FBVixHQUFlLElBQXpCO0FBQ0EsVUFBTUssQ0FBQyxHQUFHTCxLQUFLLEdBQUcsSUFBbEI7QUFDQXNHLFlBQU0sQ0FBQ3hGLGVBQVAsR0FBeUJiLEtBQXpCO0FBQ0FxRyxZQUFNLENBQUM5RixhQUFQLEdBQXVCdUssYUFBdkI7QUFDQXpFLFlBQU0sQ0FBQzVGLGVBQVAsR0FBeUJxSyxhQUF6QjtBQUNBekUsWUFBTSxDQUFDMUYsY0FBUCxHQUF3Qm1LLGFBQXhCO0FBQ0F6RSxZQUFNLENBQUN2RixXQUFQLEdBQXFCLENBQXJCO0FBQ0F1RixZQUFNLENBQUM3RixTQUFQLEdBQW1CTixDQUFDLEdBQUcySyxLQUF2QjtBQUNBeEUsWUFBTSxDQUFDM0YsV0FBUCxHQUFxQlAsQ0FBQyxHQUFHMEssS0FBekI7QUFDQXhFLFlBQU0sQ0FBQ3pGLFVBQVAsR0FBb0JSLENBQUMsR0FBR3lLLEtBQXhCO0FBQ0E7QUFDSDs7QUE5QnlDLFFBK0JwQ0UsVUEvQm9DLEdBK0JyQlgsU0EvQnFCLENBK0JwQ1csVUEvQm9DOztBQWdDMUMsUUFBSUEsVUFBVSxLQUFLQyxTQUFuQixFQUE4QjtBQUMxQixVQUFJRCxVQUFVLEdBQUcsQ0FBakIsRUFBb0I7QUFDaEJBLGtCQUFVLEdBQUcsQ0FBYjtBQUNILE9BRkQsTUFHSyxJQUFJQSxVQUFVLEdBQUcsQ0FBQyxDQUFsQixFQUFxQjtBQUN0QkEsa0JBQVUsR0FBRyxDQUFDLENBQWQ7QUFDSDs7QUFDRCxVQUFNRSxPQUFPLEdBQUcsSUFBSXRHLElBQUksQ0FBQ3VHLEdBQUwsQ0FBU0gsVUFBVCxDQUFwQjtBQUNBLFVBQUlJLE1BQU0sR0FBRyxDQUFiOztBQUNBLFVBQUlKLFVBQVUsR0FBRyxDQUFqQixFQUFvQjtBQUNoQkksY0FBTSxHQUFHSixVQUFVLEdBQUcsR0FBdEI7QUFDSDs7QUFDRDFFLFlBQU0sQ0FBQ3hGLGVBQVAsR0FBeUJiLEtBQXpCO0FBQ0FxRyxZQUFNLENBQUM5RixhQUFQLEdBQXVCMEssT0FBdkI7QUFDQTVFLFlBQU0sQ0FBQzVGLGVBQVAsR0FBeUJ3SyxPQUF6QjtBQUNBNUUsWUFBTSxDQUFDMUYsY0FBUCxHQUF3QnNLLE9BQXhCO0FBQ0E1RSxZQUFNLENBQUN2RixXQUFQLEdBQXFCLENBQXJCO0FBQ0F1RixZQUFNLENBQUM3RixTQUFQLEdBQW1CMkssTUFBbkI7QUFDQTlFLFlBQU0sQ0FBQzNGLFdBQVAsR0FBcUJ5SyxNQUFyQjtBQUNBOUUsWUFBTSxDQUFDekYsVUFBUCxHQUFvQnVLLE1BQXBCO0FBQ0E7QUFDSDs7QUFDRDlFLFVBQU0sQ0FBQ3hGLGVBQVAsR0FBeUJiLEtBQXpCO0FBQ0FxRyxVQUFNLENBQUM5RixhQUFQLEdBQXVCLENBQXZCO0FBQ0E4RixVQUFNLENBQUM1RixlQUFQLEdBQXlCLENBQXpCO0FBQ0E0RixVQUFNLENBQUMxRixjQUFQLEdBQXdCLENBQXhCO0FBQ0EwRixVQUFNLENBQUN2RixXQUFQLEdBQXFCLENBQXJCO0FBQ0F1RixVQUFNLENBQUM3RixTQUFQLEdBQW1CLENBQW5CO0FBQ0E2RixVQUFNLENBQUMzRixXQUFQLEdBQXFCLENBQXJCO0FBQ0EyRixVQUFNLENBQUN6RixVQUFQLEdBQW9CLENBQXBCO0FBQ0g7O0FBQ0RzSixXQUFTLENBQUNTLGlCQUFWLEdBQThCQSxpQkFBOUI7QUFDSCxDQWhHRCxFQWdHR1QsU0FBUyxLQUFLQSxTQUFTLEdBQUcsRUFBakIsQ0FoR1osRTs7Ozs7Ozs7Ozs7OztBQ0RPLElBQUlrQixNQUFKOztBQUNQLENBQUMsVUFBVUEsTUFBVixFQUFrQjtBQUNmLFdBQVNDLFNBQVQsQ0FBbUJ4RixTQUFuQixFQUE4QjtBQUFBOztBQUMxQixpQ0FBT0EsU0FBUyxDQUFDeUYsT0FBakIsbUVBQTRCLElBQTVCO0FBQ0g7O0FBQ0RGLFFBQU0sQ0FBQ0MsU0FBUCxHQUFtQkEsU0FBbkI7O0FBQ0EsV0FBU3JGLE1BQVQsQ0FBZ0JILFNBQWhCLEVBQTJCMEYsSUFBM0IsRUFBaUM7QUFDN0IsUUFBSTFGLFNBQVMsQ0FBQzJGLFFBQWQsRUFBd0I7QUFDcEIzRixlQUFTLENBQUMyRixRQUFWLENBQW1CRCxJQUFuQjtBQUNIO0FBQ0o7O0FBQ0RILFFBQU0sQ0FBQ3BGLE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0gsQ0FYRCxFQVdHb0YsTUFBTSxLQUFLQSxNQUFNLEdBQUcsRUFBZCxDQVhULEU7Ozs7Ozs7Ozs7Ozs7OztBQ0RPLElBQU01RCxVQUFiLEdBQ0ksc0JBQWM7QUFBQTs7QUFDVixPQUFLaUUsVUFBTCxHQUFrQixJQUFJQyxHQUFKLEVBQWxCO0FBQ0EsT0FBS2hHLE1BQUwsR0FBYyxJQUFJZ0csR0FBSixFQUFkO0FBQ0EsT0FBSzFGLE1BQUwsR0FBYyxJQUFJMEYsR0FBSixFQUFkO0FBQ0EsT0FBS3ZGLE9BQUwsR0FBZSxJQUFJdUYsR0FBSixFQUFmO0FBQ0EsT0FBS25GLE1BQUwsR0FBYyxJQUFJbUYsR0FBSixFQUFkO0FBQ0gsQ0FQTCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQU8sSUFBTTNELEtBQWI7QUFDSSxtQkFBYztBQUFBOztBQUNWLFNBQUs0RCxNQUFMLEdBQWMsSUFBSUQsR0FBSixFQUFkO0FBQ0EsU0FBS0UsUUFBTCxHQUFnQixJQUFJRixHQUFKLEVBQWhCO0FBQ0EsU0FBS0osT0FBTCxHQUFlLElBQWY7QUFDSDs7QUFMTDtBQUFBO0FBQUEsV0FNSSxlQUFhO0FBQUE7O0FBQ1QsVUFBSSxDQUFDLEtBQUtBLE9BQVYsRUFBbUI7QUFDZjtBQUNIOztBQUNELGtCQUFBTyxPQUFPLEVBQUNDLEdBQVI7QUFDSDtBQVhMO0FBQUE7QUFBQSxXQVlJLGlCQUFlO0FBQ1gsVUFBSSxDQUFDLEtBQUtSLE9BQVYsRUFBbUI7QUFDZjtBQUNIOztBQUhVLHdDQUFOUyxJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFJWCxVQUFNaEMsRUFBRSxHQUFHaUMsTUFBTSxDQUFDRCxJQUFELENBQWpCO0FBQ0EsVUFBSUUsS0FBSyxHQUFHLEtBQUtOLE1BQUwsQ0FBWU8sR0FBWixDQUFnQm5DLEVBQWhCLENBQVo7O0FBQ0EsVUFBSSxDQUFDa0MsS0FBTCxFQUFZO0FBQUE7O0FBQ1JBLGFBQUssR0FBRyxDQUFSOztBQUNBLHFCQUFBSixPQUFPLEVBQUNNLEtBQVIsa0JBQWlCSixJQUFqQjtBQUNIOztBQUNERSxXQUFLO0FBQ0wsV0FBS04sTUFBTCxDQUFZOUUsR0FBWixDQUFnQmtELEVBQWhCLEVBQW9Ca0MsS0FBcEI7QUFDSDtBQXhCTDtBQUFBO0FBQUEsV0F5QkksbUJBQWlCO0FBQ2IsVUFBSSxDQUFDLEtBQUtYLE9BQVYsRUFBbUI7QUFDZjtBQUNIOztBQUhZLHlDQUFOUyxJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFJYixVQUFNaEMsRUFBRSxHQUFHaUMsTUFBTSxDQUFDRCxJQUFELENBQWpCO0FBQ0EsVUFBSUUsS0FBSyxHQUFHLEtBQUtMLFFBQUwsQ0FBY00sR0FBZCxDQUFrQm5DLEVBQWxCLENBQVo7O0FBQ0EsVUFBSSxDQUFDa0MsS0FBTCxFQUFZO0FBQUE7O0FBQ1JBLGFBQUssR0FBRyxDQUFSOztBQUNBLHFCQUFBSixPQUFPLEVBQUNPLElBQVIsa0JBQWdCTCxJQUFoQjtBQUNIOztBQUNERSxXQUFLO0FBQ0wsV0FBS0wsUUFBTCxDQUFjL0UsR0FBZCxDQUFrQmtELEVBQWxCLEVBQXNCa0MsS0FBdEI7QUFDSDtBQXJDTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ08sSUFBTXRFLE9BQWI7QUFBQTs7QUFBQTs7QUFDSSxxQkFBYztBQUFBOztBQUFBOztBQUNWLCtCQUFTeEUsU0FBVDtBQUNBLFVBQUt5QyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQUt5RyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsVUFBS2YsT0FBTCxHQUFlLElBQWY7QUFDQSxVQUFLL0gsUUFBTCxHQUFnQixFQUFoQjtBQUxVO0FBTWI7O0FBUEw7QUFBQTtBQUFBLFdBUUksc0JBQWE7QUFDVCxVQUFJdEIsT0FBTyxHQUFHLEtBQUtzQixRQUFMLENBQWMsS0FBS3FDLEtBQW5CLENBQWQ7O0FBQ0EsVUFBSSxDQUFDM0QsT0FBTCxFQUFjO0FBQ1ZBLGVBQU8sR0FBRztBQUNOd0Usa0JBQVEsRUFBRSxDQURKO0FBRU5GLGdCQUFNLEVBQUU7QUFGRixTQUFWO0FBSUEsYUFBS2hELFFBQUwsQ0FBYyxLQUFLcUMsS0FBbkIsSUFBNEIzRCxPQUE1QjtBQUNIOztBQUNELGFBQU9BLE9BQVA7QUFDSDtBQWxCTDtBQUFBO0FBQUEsV0FtQkkseUJBQWdCNEQsU0FBaEIsRUFBMkI7QUFDdkIsVUFBTTVELE9BQU8sR0FBRyxLQUFLdUIsVUFBTCxFQUFoQjtBQUNBdkIsYUFBTyxDQUFDd0UsUUFBUixHQUFtQixDQUFuQjtBQUNBeEUsYUFBTyxDQUFDc0UsTUFBUixHQUFpQixJQUFqQjs7QUFDQSxVQUFJLEtBQUtYLEtBQUwsR0FBYSxLQUFLaEMsTUFBTCxDQUFZZ0MsS0FBN0IsRUFBb0M7QUFDaEM7QUFDSDs7QUFDRCxVQUFNMEcsT0FBTyxHQUFHLEtBQUsxSSxNQUFMLENBQVlnRCxVQUFaLENBQXVCTCxNQUF2QixDQUE4QjJGLEdBQTlCLENBQWtDckcsU0FBUyxDQUFDUCxJQUE1QyxDQUFoQjs7QUFDQSxVQUFJZ0gsT0FBSixFQUFhO0FBQ1RBLGVBQU8sQ0FBQ3pHLFNBQUQsRUFBWSxLQUFLakMsTUFBakIsQ0FBUDtBQUNIO0FBQ0o7QUE5Qkw7QUFBQTtBQUFBLFdBK0JJLGtCQUFTO0FBQ0wsVUFBSSxDQUFDLEtBQUswSCxPQUFWLEVBQW1CO0FBQ2Y7QUFDSDs7QUFISSxVQUlHaUIsSUFKSCxHQUlZLEtBQUszSSxNQUpqQixDQUlHMkksSUFKSDs7QUFLTCxVQUFJLENBQUNBLElBQUwsRUFBVztBQUNQO0FBQ0g7O0FBQ0QsVUFBTUMsU0FBUyxHQUFHQyxXQUFXLENBQUNDLEdBQVosRUFBbEI7QUFDQSxXQUFLOUcsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLTSxlQUFMLENBQXFCcUcsSUFBckI7QUFDQSxXQUFLRixXQUFMLEdBQW1CSSxXQUFXLENBQUNDLEdBQVosS0FBb0JGLFNBQXZDO0FBQ0g7QUEzQ0w7O0FBQUE7QUFBQSxFQUE2QnBFLHdEQUE3QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNPLElBQU0xSSxRQUFiO0FBQUE7O0FBQUE7O0FBQ0ksc0JBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBU3lELFNBQVQ7QUFDQSxVQUFLQyxJQUFMLEdBQVlDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBRlU7QUFHYjs7QUFKTDtBQUFBO0FBQUEsV0FLSSxpQkFBUSxDQUNQO0FBTkw7QUFBQTtBQUFBLFdBT0ksZUFBTSxDQUNMO0FBUkw7O0FBQUE7QUFBQSxFQUE4QjhFLHdEQUE5QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1QLFFBQWI7QUFBQTs7QUFBQTs7QUFDSSxzQkFBYztBQUFBOztBQUFBOztBQUNWLCtCQUFTMUUsU0FBVDtBQUNBLFVBQUt5QyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQUswRixPQUFMLEdBQWUsSUFBZjtBQUNBLFVBQUtxQixNQUFMLEdBQWNDLG1EQUFBLEVBQWQ7QUFDQSxVQUFLQyxLQUFMLEdBQWFELG1EQUFBLEVBQWI7QUFDQSxVQUFLRSxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixhQUFuQjtBQUNBLFVBQUt4SixRQUFMLEdBQWdCLEVBQWhCO0FBUlU7QUFTYjs7QUFWTDtBQUFBO0FBQUEsV0FXSSxzQkFBYTtBQUNULFVBQUl0QixPQUFPLEdBQUcsS0FBS3NCLFFBQUwsQ0FBYyxLQUFLcUMsS0FBbkIsQ0FBZDs7QUFDQSxVQUFJLENBQUMzRCxPQUFMLEVBQWM7QUFDVkEsZUFBTyxHQUFHO0FBQ05PLGdCQUFNLEVBQUV3SyxvREFBQTtBQURGLFNBQVY7QUFHQSxhQUFLekosUUFBTCxDQUFjLEtBQUtxQyxLQUFuQixJQUE0QjNELE9BQTVCO0FBQ0g7O0FBQ0QsYUFBT0EsT0FBUDtBQUNIO0FBcEJMO0FBQUE7QUFBQSxXQXFCSSxrQkFBU3FELElBQVQsRUFBZXFFLENBQWYsRUFBa0JDLENBQWxCLEVBQXFCRyxFQUFyQixFQUF5QjtBQUNyQixVQUFJLENBQUMsS0FBS3VCLE9BQVYsRUFBbUI7QUFDZjtBQUNIOztBQUhvQixVQUliaUIsSUFKYSxHQUlKLEtBQUszSSxNQUpELENBSWIySSxJQUphOztBQUtyQixVQUFJLENBQUNBLElBQUwsRUFBVztBQUNQO0FBQ0g7O0FBQ0QsV0FBS00sS0FBTCxDQUFXbEQsQ0FBWCxHQUFlQSxDQUFmO0FBQ0EsV0FBS2tELEtBQUwsQ0FBV2pELENBQVgsR0FBZUEsQ0FBZjtBQUNBLFdBQUsrQyxNQUFMLENBQVloRCxDQUFaLEdBQWdCQSxDQUFoQjtBQUNBLFdBQUtnRCxNQUFMLENBQVkvQyxDQUFaLEdBQWdCQSxDQUFoQjtBQUNBLFdBQUtrRCxTQUFMLEdBQWlCL0MsRUFBakI7QUFDQSxXQUFLZ0QsV0FBTCxHQUFtQnpILElBQW5CO0FBQ0EsV0FBS00sS0FBTCxHQUFhLENBQWI7QUFDQSxVQUFNcUgsSUFBSSxHQUFHLEtBQUt6SixVQUFMLEVBQWI7QUFDQXdKLDZEQUFBLENBQWdCQyxJQUFJLENBQUN6SyxNQUFyQjtBQUNBLFdBQUtvRCxLQUFMO0FBQ0EsV0FBS1UsaUJBQUwsQ0FBdUJpRyxJQUF2QixFQUE2QlUsSUFBN0IsRUFBbUMsS0FBbkM7QUFDSDtBQXhDTDtBQUFBO0FBQUEsV0F5Q0kscUJBQVlwSCxTQUFaLEVBQXVCcUgsTUFBdkIsRUFBK0I7QUFDM0IsVUFBTWpMLE9BQU8sR0FBRyxLQUFLdUIsVUFBTCxFQUFoQjtBQUNBMEcsNEVBQUEsQ0FBb0JyRSxTQUFwQixFQUErQjVELE9BQU8sQ0FBQ08sTUFBdkM7QUFDQXdLLDJEQUFBLENBQWNFLE1BQU0sQ0FBQzFLLE1BQXJCLEVBQTZCUCxPQUFPLENBQUNPLE1BQXJDLEVBQTZDUCxPQUFPLENBQUNPLE1BQXJEO0FBQ0F3SywwRUFBQSxDQUE2Qi9LLE9BQU8sQ0FBQ08sTUFBckMsRUFBNkMsS0FBS21LLE1BQWxELEVBQTBELEtBQUtFLEtBQS9EO0FBQ0g7QUE5Q0w7QUFBQTtBQUFBLFdBK0NJLDJCQUFrQmhILFNBQWxCLEVBQTZCcUgsTUFBN0IsRUFBcUNDLFlBQXJDLEVBQW1EO0FBQy9DLFVBQUksS0FBS3ZILEtBQUwsR0FBYSxLQUFLaEMsTUFBTCxDQUFZZ0MsS0FBN0IsRUFBb0M7QUFDaEMsZUFBTyxLQUFQO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDeUMsa0VBQUEsQ0FBa0J4QyxTQUFsQixDQUFMLEVBQW1DO0FBQy9CLGVBQU8sS0FBUDtBQUNIOztBQUNELFVBQUksQ0FBQ3lELHlFQUFBLENBQXlCekQsU0FBekIsQ0FBTCxFQUEwQztBQUN0QyxlQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFJc0gsWUFBSixFQUFrQjtBQUNkLFlBQUl0SCxTQUFTLENBQUN1RCxXQUFWLElBQXlCLEtBQUsyRCxXQUFMLEtBQXFCLGFBQWxELEVBQWlFO0FBQzdELGVBQUtLLFdBQUwsQ0FBaUJ2SCxTQUFqQixFQUE0QnFILE1BQTVCO0FBRDZELDRCQUU1QyxLQUFLTCxLQUZ1QztBQUFBLGNBRXJEbEQsQ0FGcUQsZUFFckRBLENBRnFEO0FBQUEsY0FFbERDLENBRmtELGVBRWxEQSxDQUZrRDtBQUc3RE4sZ0ZBQUEsQ0FBc0J6RCxTQUF0QixFQUFpQyxZQUFqQyxFQUErQzhELENBQS9DLEVBQWtEQyxDQUFsRCxFQUFxRCxLQUFLK0MsTUFBTCxDQUFZaEQsQ0FBakUsRUFBb0UsS0FBS2dELE1BQUwsQ0FBWS9DLENBQWhGLEVBQW1GLEtBQUtrRCxTQUF4RjtBQUNBakgsbUJBQVMsQ0FBQ3VELFdBQVYsR0FBd0IsS0FBeEI7QUFDSDs7QUFDRCxlQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFNa0QsT0FBTyxHQUFHLEtBQUsxSSxNQUFMLENBQVlnRCxVQUFaLENBQXVCVCxPQUF2QixDQUErQitGLEdBQS9CLENBQW1DckcsU0FBUyxDQUFDUCxJQUE3QyxDQUFoQjs7QUFDQSxVQUFJZ0gsT0FBSixFQUFhO0FBQ1QsYUFBS2MsV0FBTCxDQUFpQnZILFNBQWpCLEVBQTRCcUgsTUFBNUI7QUFEUywyQkFFUSxLQUFLTCxLQUZiO0FBQUEsWUFFRGxELEVBRkMsZ0JBRURBLENBRkM7QUFBQSxZQUVFQyxFQUZGLGdCQUVFQSxDQUZGO0FBR1QsWUFBTXZELE1BQU0sR0FBR2lHLE9BQU8sQ0FBQ3pHLFNBQUQsRUFBWSxLQUFLakMsTUFBakIsQ0FBdEI7O0FBQ0EsWUFBSXlDLE1BQUosRUFBWTtBQUNSaUQsZ0ZBQUEsQ0FBc0J6RCxTQUF0QixFQUFpQyxLQUFLa0gsV0FBdEMsRUFBbURwRCxFQUFuRCxFQUFzREMsRUFBdEQsRUFBeUQsS0FBSytDLE1BQUwsQ0FBWWhELENBQXJFLEVBQXdFLEtBQUtnRCxNQUFMLENBQVkvQyxDQUFwRixFQUF1RixLQUFLa0QsU0FBNUY7QUFDSDs7QUFDRCxZQUFJLEtBQUtDLFdBQUwsS0FBcUIsYUFBekIsRUFBd0M7QUFDcEMsY0FBSTFHLE1BQU0sSUFBSSxDQUFDUixTQUFTLENBQUN1RCxXQUF6QixFQUFzQztBQUNsQ0Usa0ZBQUEsQ0FBc0J6RCxTQUF0QixFQUFpQyxhQUFqQyxFQUFnRDhELEVBQWhELEVBQW1EQyxFQUFuRCxFQUFzRCxLQUFLK0MsTUFBTCxDQUFZaEQsQ0FBbEUsRUFBcUUsS0FBS2dELE1BQUwsQ0FBWS9DLENBQWpGLEVBQW9GLEtBQUtrRCxTQUF6RjtBQUNILFdBRkQsTUFHSyxJQUFJLENBQUN6RyxNQUFELElBQVdSLFNBQVMsQ0FBQ3VELFdBQXpCLEVBQXNDO0FBQ3ZDRSxrRkFBQSxDQUFzQnpELFNBQXRCLEVBQWlDLFlBQWpDLEVBQStDOEQsRUFBL0MsRUFBa0RDLEVBQWxELEVBQXFELEtBQUsrQyxNQUFMLENBQVloRCxDQUFqRSxFQUFvRSxLQUFLZ0QsTUFBTCxDQUFZL0MsQ0FBaEYsRUFBbUYsS0FBS2tELFNBQXhGO0FBQ0g7O0FBQ0RqSCxtQkFBUyxDQUFDdUQsV0FBVixHQUF3Qi9DLE1BQXhCO0FBQ0g7O0FBQ0QsZUFBT0EsTUFBUDtBQUNIOztBQUNELGFBQU8sS0FBUDtBQUNIO0FBdEZMOztBQUFBO0FBQUEsRUFBOEIrQix3REFBOUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNUixRQUFiO0FBQUE7O0FBQUE7O0FBQ0ksc0JBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBU3pFLFNBQVQ7QUFDQSxVQUFLeUMsS0FBTCxHQUFhLENBQWI7QUFDQSxVQUFLeUcsV0FBTCxHQUFtQixDQUFuQjtBQUNBLFVBQUtmLE9BQUwsR0FBZSxJQUFmO0FBQ0EsVUFBSy9ILFFBQUwsR0FBZ0IsRUFBaEI7QUFMVTtBQU1iOztBQVBMO0FBQUE7QUFBQSxXQVFJLHNCQUFhO0FBQ1QsVUFBSXRCLE9BQU8sR0FBRyxLQUFLc0IsUUFBTCxDQUFjLEtBQUtxQyxLQUFuQixDQUFkOztBQUNBLFVBQUksQ0FBQzNELE9BQUwsRUFBYztBQUNWQSxlQUFPLEdBQUc7QUFDTk8sZ0JBQU0sRUFBRXdLLG9EQUFBLEVBREY7QUFFTjVMLHdCQUFjLEVBQUVkLDREQUFBO0FBRlYsU0FBVjtBQUlBLGFBQUtpRCxRQUFMLENBQWMsS0FBS3FDLEtBQW5CLElBQTRCM0QsT0FBNUI7QUFDSDs7QUFDRCxhQUFPQSxPQUFQO0FBQ0g7QUFsQkw7QUFBQTtBQUFBLFdBbUJJLHlCQUFnQjRELFNBQWhCLEVBQTJCcUgsTUFBM0IsRUFBbUM7QUFDL0IsVUFBSSxLQUFLdEgsS0FBTCxHQUFhLEtBQUtoQyxNQUFMLENBQVlnQyxLQUE3QixFQUFvQztBQUNoQztBQUNIOztBQUNELFVBQUksQ0FBQ3lDLGtFQUFBLENBQWtCeEMsU0FBbEIsQ0FBTCxFQUFtQztBQUMvQjtBQUNIOztBQUNELFVBQU01RCxPQUFPLEdBQUcsS0FBS3VCLFVBQUwsRUFBaEI7QUFDQTBHLDRFQUFBLENBQW9CckUsU0FBcEIsRUFBK0I1RCxPQUFPLENBQUNPLE1BQXZDO0FBQ0EwSCxvRkFBQSxDQUE0QnJFLFNBQTVCLEVBQXVDNUQsT0FBTyxDQUFDYixjQUEvQztBQUNBNEwsMkRBQUEsQ0FBY0UsTUFBTSxDQUFDMUssTUFBckIsRUFBNkJQLE9BQU8sQ0FBQ08sTUFBckMsRUFBNkNQLE9BQU8sQ0FBQ08sTUFBckQ7QUFDQWxDLG1FQUFBLENBQXNCNE0sTUFBTSxDQUFDOUwsY0FBN0IsRUFBNkNhLE9BQU8sQ0FBQ2IsY0FBckQsRUFBcUVhLE9BQU8sQ0FBQ2IsY0FBN0U7QUFDQSxVQUFNa0wsT0FBTyxHQUFHLEtBQUsxSSxNQUFMLENBQVlnRCxVQUFaLENBQXVCbEIsTUFBdkIsQ0FBOEJ3RyxHQUE5QixDQUFrQ3JHLFNBQVMsQ0FBQ1AsSUFBNUMsQ0FBaEI7O0FBQ0EsVUFBSWdILE9BQUosRUFBYTtBQUNUQSxlQUFPLENBQUN6RyxTQUFELEVBQVksS0FBS2pDLE1BQWpCLENBQVA7QUFDSDtBQUNKO0FBbkNMO0FBQUE7QUFBQSxXQW9DSSxrQkFBUztBQUNMLFVBQUksQ0FBQyxLQUFLMEgsT0FBVixFQUFtQjtBQUNmO0FBQ0g7O0FBSEksVUFJR2lCLElBSkgsR0FJWSxLQUFLM0ksTUFKakIsQ0FJRzJJLElBSkg7O0FBS0wsVUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUDtBQUNIOztBQUNELFVBQU1DLFNBQVMsR0FBR0MsV0FBVyxDQUFDQyxHQUFaLEVBQWxCO0FBQ0EsV0FBSzlJLE1BQUwsQ0FBWXFFLFFBQVosQ0FBcUJvRixLQUFyQjtBQUNBLFdBQUt6SCxLQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQU1xSCxJQUFJLEdBQUcsS0FBS3pKLFVBQUwsRUFBYjtBQUNBLFdBQUtvQyxLQUFMO0FBQ0FvSCx5REFBQSxDQUFZLEtBQUtwSixNQUFMLENBQVlTLE1BQVosQ0FBbUI4RixTQUFuQixFQUFaLEVBQTRDOEMsSUFBSSxDQUFDekssTUFBakQ7QUFDQWxDLHFFQUFBLENBQXdCMk0sSUFBSSxDQUFDN0wsY0FBN0I7QUFDQSxXQUFLMEUsZUFBTCxDQUFxQnlHLElBQXJCLEVBQTJCVSxJQUEzQjtBQUNBLFdBQUtySixNQUFMLENBQVlxRSxRQUFaLENBQXFCcUYsR0FBckI7QUFDQSxXQUFLakIsV0FBTCxHQUFtQkksV0FBVyxDQUFDQyxHQUFaLEtBQW9CRixTQUF2QztBQUNIO0FBdERMOztBQUFBO0FBQUEsRUFBOEJwRSx3REFBOUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ08sSUFBSW1GLFFBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxRQUFWLEVBQW9CO0FBQ2pCLFdBQVNDLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQStCO0FBQzNCLFFBQUksQ0FBQ0EsUUFBTCxFQUFlO0FBQ1gsYUFBTyxDQUFQO0FBQ0g7O0FBQ0QsUUFBSUEsUUFBUSxDQUFDbEgsTUFBYixFQUFxQjtBQUNqQixhQUFPLENBQVA7QUFDSDs7QUFDRCxRQUFJa0gsUUFBUSxDQUFDQyxVQUFULEdBQXNCLENBQTFCLEVBQTZCO0FBQ3pCLGFBQU9ELFFBQVEsQ0FBQ0UsV0FBVCxHQUF1QkYsUUFBUSxDQUFDQyxVQUF2QztBQUNIOztBQUNELFdBQU8sQ0FBUDtBQUNIOztBQUNESCxVQUFRLENBQUNDLFdBQVQsR0FBdUJBLFdBQXZCO0FBQ0gsQ0FkRCxFQWNHRCxRQUFRLEtBQUtBLFFBQVEsR0FBRyxFQUFoQixDQWRYOztBQWVPLElBQU12RixTQUFiO0FBQUE7O0FBQUE7O0FBQ0ksdUJBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBUzdFLFNBQVQ7QUFDQSxVQUFLZ0YsU0FBTCxHQUFpQixJQUFJdUQsR0FBSixFQUFqQjtBQUNBLFVBQUtrQyxTQUFMLEdBQWlCLElBQUlDLEdBQUosRUFBakI7QUFIVTtBQUliOztBQUxMO0FBQUE7QUFBQSxXQU1JLGFBQUlDLEtBQUosRUFBVztBQUNQLFVBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1IsZUFBTyxJQUFQO0FBQ0g7O0FBQ0QsVUFBSUwsUUFBUSxHQUFHLEtBQUt0RixTQUFMLENBQWUrRCxHQUFmLENBQW1CNEIsS0FBbkIsQ0FBZjs7QUFDQSxVQUFJLENBQUNMLFFBQUwsRUFBZTtBQUNYQSxnQkFBUSxHQUFHLEtBQUtNLE9BQUwsQ0FBYUQsS0FBYixDQUFYO0FBQ0EsYUFBSzNGLFNBQUwsQ0FBZXRCLEdBQWYsQ0FBbUJpSCxLQUFuQixFQUEwQkwsUUFBMUI7QUFDSDs7QUFDRCxhQUFPQSxRQUFQO0FBQ0g7QUFoQkw7QUFBQTtBQUFBLFdBaUJJLGlCQUFRSyxLQUFSLEVBQWU7QUFBQSxpREFDWSxLQUFLRixTQURqQjtBQUFBOztBQUFBO0FBQ1gsNERBQXVDO0FBQUEsY0FBNUJJLFFBQTRCO0FBQ25DLGNBQU1QLFFBQVEsR0FBR08sUUFBUSxDQUFDRixLQUFELEVBQVEsS0FBS2xLLE1BQWIsQ0FBekI7O0FBQ0EsY0FBSTZKLFFBQUosRUFBYztBQUNWLG1CQUFPQSxRQUFQO0FBQ0g7QUFDSjtBQU5VO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT1gsV0FBSzdKLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkMsT0FBbEIsa0NBQW9EZ0ssS0FBcEQ7QUFDQSxhQUFPLElBQVA7QUFDSDtBQTFCTDs7QUFBQTtBQUFBLEVBQStCMUYsd0RBQS9CLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ08sSUFBTVgsTUFBYjtBQUNJLG9CQUFjO0FBQUE7O0FBQ1YsU0FBS3pELEtBQUwsR0FBYSxHQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEdBQWQ7QUFDQSxTQUFLTyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS3lKLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLekwsTUFBTCxHQUFjd0ssb0RBQUEsRUFBZDtBQUNIOztBQVBMO0FBQUE7QUFBQSxXQVFJLHFCQUFZO0FBQ1IsVUFBTXhJLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBQW5CO0FBQ0EsV0FBS2pDLE1BQUwsQ0FBWW5DLENBQVosR0FBZ0JtRSxVQUFoQjtBQUNBLFdBQUtoQyxNQUFMLENBQVlLLENBQVosR0FBZ0IyQixVQUFoQjtBQUNBLGFBQU8sS0FBS2hDLE1BQVo7QUFDSDtBQWJMO0FBQUE7QUFBQSxXQWNJLG9CQUFXO0FBQ1AsYUFBTyxLQUFLeUwsVUFBTCxHQUFrQkMsTUFBTSxDQUFDQyxVQUF6QixHQUFzQyxLQUFLbkssS0FBbEQ7QUFDSDtBQWhCTDtBQUFBO0FBQUEsV0FpQkkscUJBQVk7QUFDUixhQUFPLEtBQUtpSyxVQUFMLEdBQWtCQyxNQUFNLENBQUNFLFdBQXpCLEdBQXVDLEtBQUtuSyxNQUFuRDtBQUNIO0FBbkJMO0FBQUE7QUFBQSxXQW9CSSx5QkFBZ0I7QUFBQTs7QUFDWixhQUFPLEtBQUtPLFVBQUwsR0FBa0IsQ0FBbEIsR0FBc0IsS0FBS0EsVUFBM0IsNEJBQXdDMEosTUFBTSxDQUFDRyxnQkFBL0MseUVBQW1FLENBQTFFO0FBQ0g7QUF0Qkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRE8sSUFBTXZHLE1BQWI7QUFDSSxrQkFBWWxFLE1BQVosRUFBb0I7QUFBQTs7QUFBQTs7QUFDaEIsU0FBSzBLLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUtoRCxJQUFMLEdBQVksQ0FBWjs7QUFDQSxTQUFLdkYsTUFBTCxHQUFjLFVBQUN1RixJQUFELEVBQVU7QUFDcEIsVUFBSSxLQUFJLENBQUNnRCxNQUFULEVBQWlCO0FBQ2I7QUFDSDs7QUFDRCxXQUFJLENBQUMzSyxNQUFMLENBQVlxQyxPQUFaLENBQW9CRCxNQUFwQixDQUEyQnVGLElBQTNCOztBQUNBLFdBQUksQ0FBQzNILE1BQUwsQ0FBWTRDLE9BQVosQ0FBb0JSLE1BQXBCOztBQUNBLFdBQUksQ0FBQ3BDLE1BQUwsQ0FBWStCLFFBQVosQ0FBcUJELE1BQXJCO0FBQ0gsS0FQRDs7QUFRQSxTQUFLOEksV0FBTCxHQUFtQixZQUFNO0FBQ3JCLFVBQU1DLFdBQVcsR0FBR2hDLFdBQVcsQ0FBQ0MsR0FBWixFQUFwQjtBQUNBLFVBQU1nQyxTQUFTLEdBQUcsQ0FBQ0QsV0FBVyxHQUFHLEtBQUksQ0FBQ2xELElBQXBCLElBQTRCLElBQTlDO0FBQ0EsV0FBSSxDQUFDQSxJQUFMLEdBQVlrRCxXQUFaOztBQUNBLFdBQUksQ0FBQ3pJLE1BQUwsQ0FBWTBJLFNBQVo7O0FBQ0EsV0FBSSxDQUFDQyxlQUFMO0FBQ0gsS0FORDs7QUFPQSxTQUFLL0ssTUFBTCxHQUFjQSxNQUFkO0FBQ0g7O0FBckJMO0FBQUE7QUFBQSxTQXNCSSxlQUFlO0FBQ1gsYUFBTyxLQUFLMkssTUFBWjtBQUNIO0FBeEJMO0FBQUE7QUFBQSxXQXlCSSxnQkFBTztBQUNILFVBQUksS0FBS0EsTUFBVCxFQUFpQjtBQUNiLGFBQUtoRCxJQUFMLEdBQVlrQixXQUFXLENBQUNDLEdBQVosRUFBWjtBQUNBLGFBQUs2QixNQUFMLEdBQWMsS0FBZDtBQUNBLGFBQUtJLGVBQUw7QUFDSDtBQUNKO0FBL0JMO0FBQUE7QUFBQSxXQWdDSSxpQkFBUTtBQUNKLFdBQUtKLE1BQUwsR0FBYyxLQUFkO0FBQ0g7QUFsQ0w7QUFBQTtBQUFBLFdBbUNJLDJCQUFrQjtBQUNkSywyQkFBcUIsQ0FBQyxLQUFLSixXQUFOLENBQXJCO0FBQ0g7QUFyQ0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNPLElBQU05RyxPQUFiO0FBQUE7O0FBQUE7O0FBQ0kscUJBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBU3ZFLFNBQVQ7QUFDQSxVQUFLeUMsS0FBTCxHQUFhLENBQWI7QUFDQSxVQUFLMkYsSUFBTCxHQUFZLENBQVo7QUFDQSxVQUFLYyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsVUFBS2YsT0FBTCxHQUFlLElBQWY7QUFMVTtBQU1iOztBQVBMO0FBQUE7QUFBQSxXQVFJLGdCQUFPQyxJQUFQLEVBQWE7QUFDVCxVQUFJLENBQUMsS0FBS0QsT0FBVixFQUFtQjtBQUNmO0FBQ0g7O0FBSFEsVUFJRGlCLElBSkMsR0FJUSxLQUFLM0ksTUFKYixDQUlEMkksSUFKQzs7QUFLVCxVQUFJLENBQUNBLElBQUwsRUFBVztBQUNQO0FBQ0g7O0FBQ0QsV0FBSzNHLEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBSzJGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQU1pQixTQUFTLEdBQUdDLFdBQVcsQ0FBQ0MsR0FBWixFQUFsQjtBQUNBLFdBQUt4RyxlQUFMLENBQXFCcUcsSUFBckI7QUFDQSxXQUFLRixXQUFMLEdBQW1CSSxXQUFXLENBQUNDLEdBQVosS0FBb0JGLFNBQXZDO0FBQ0g7QUFyQkw7QUFBQTtBQUFBLFdBc0JJLHlCQUFnQjNHLFNBQWhCLEVBQTJCO0FBQ3ZCLFVBQUksS0FBS0QsS0FBTCxHQUFhLEtBQUtoQyxNQUFMLENBQVlnQyxLQUE3QixFQUFvQztBQUNoQztBQUNIOztBQUNELFVBQUksQ0FBQ3dGLGdFQUFBLENBQWlCdkYsU0FBakIsQ0FBTCxFQUFrQztBQUM5QjtBQUNIOztBQUNELFdBQUtnSixnQkFBTCxDQUFzQmhKLFNBQXRCO0FBQ0F1RixtRUFBQSxDQUFjdkYsU0FBZCxFQUF5QixLQUFLMEYsSUFBOUI7QUFDQSxVQUFNZSxPQUFPLEdBQUcsS0FBSzFJLE1BQUwsQ0FBWWdELFVBQVosQ0FBdUJaLE1BQXZCLENBQThCa0csR0FBOUIsQ0FBa0NyRyxTQUFTLENBQUNQLElBQTVDLENBQWhCOztBQUNBLFVBQUlnSCxPQUFKLEVBQWE7QUFDVEEsZUFBTyxDQUFDekcsU0FBRCxFQUFZLEtBQUtqQyxNQUFqQixDQUFQO0FBQ0g7QUFDSjtBQW5DTDtBQUFBO0FBQUEsV0FvQ0ksMEJBQWlCaUMsU0FBakIsRUFBNEI7QUFBQTs7QUFDeEIsV0FBS2pDLE1BQUwsQ0FBWWdELFVBQVosQ0FBdUI2RSxVQUF2QixDQUFrQ3FELE9BQWxDLENBQTBDLFVBQUN4QyxPQUFELEVBQVV5QyxRQUFWLEVBQXVCO0FBQzdELFlBQUlsSixTQUFTLENBQUNrSixRQUFELENBQWIsRUFBeUI7QUFDckJ6QyxpQkFBTyxDQUFDekcsU0FBRCxFQUFZLE1BQUksQ0FBQ2pDLE1BQWpCLENBQVA7QUFDSDtBQUNKLE9BSkQ7QUFLSDtBQTFDTDs7QUFBQTtBQUFBLEVBQTZCd0Usd0RBQTdCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BCQSxTQUFTc0IsYUFBVCxDQUF1QjlGLE1BQXZCLEVBQStCcUcsS0FBL0IsRUFBc0MzRSxJQUF0QyxFQUE0QztBQUFBLE1BQ2hDbEMsSUFEZ0MsR0FDdkJRLE1BQU0sQ0FBQ3FFLFFBRGdCLENBQ2hDN0UsSUFEZ0M7QUFFeEMsTUFBTTRMLFVBQVUsR0FBRzVMLElBQUksQ0FBQzZMLHFCQUFMLEVBQW5CO0FBQ0EsTUFBTXRGLENBQUMsR0FBR00sS0FBSyxDQUFDaUYsT0FBTixHQUFnQkYsVUFBVSxDQUFDRyxJQUEzQixHQUFrQy9MLElBQUksQ0FBQ2dNLFVBQWpEO0FBQ0EsTUFBTXhGLENBQUMsR0FBR0ssS0FBSyxDQUFDb0YsT0FBTixHQUFnQkwsVUFBVSxDQUFDTSxHQUEzQixHQUFpQ2xNLElBQUksQ0FBQ21NLFNBQWhEO0FBQ0EzTCxRQUFNLENBQUN3QyxRQUFQLENBQWdCb0osUUFBaEIsQ0FBeUJsSyxJQUF6QixFQUErQnFFLENBQS9CLEVBQWtDQyxDQUFsQyxFQUFxQyxDQUFyQztBQUNBSyxPQUFLLENBQUN3RixjQUFOO0FBQ0g7O0FBQ00sSUFBSUMsY0FBSjs7QUFDUCxDQUFDLFVBQVVBLGNBQVYsRUFBMEI7QUFDdkIsV0FBUy9JLElBQVQsQ0FBYy9DLE1BQWQsRUFBc0I7QUFBQSxRQUNWUixJQURVLEdBQ0RRLE1BQU0sQ0FBQ3FFLFFBRE4sQ0FDVjdFLElBRFU7QUFFbEJBLFFBQUksQ0FBQ3VNLGdCQUFMLENBQXNCLFdBQXRCLEVBQW1DLFVBQUMxRixLQUFELEVBQVc7QUFDMUNQLG1CQUFhLENBQUM5RixNQUFELEVBQVNxRyxLQUFULEVBQWdCLGFBQWhCLENBQWI7QUFDSCxLQUZEO0FBR0E3RyxRQUFJLENBQUN1TSxnQkFBTCxDQUFzQixTQUF0QixFQUFpQyxVQUFDMUYsS0FBRCxFQUFXO0FBQ3hDUCxtQkFBYSxDQUFDOUYsTUFBRCxFQUFTcUcsS0FBVCxFQUFnQixXQUFoQixDQUFiO0FBQ0gsS0FGRDtBQUdBN0csUUFBSSxDQUFDdU0sZ0JBQUwsQ0FBc0IsV0FBdEIsRUFBbUMsVUFBQzFGLEtBQUQsRUFBVztBQUMxQ1AsbUJBQWEsQ0FBQzlGLE1BQUQsRUFBU3FHLEtBQVQsRUFBZ0IsYUFBaEIsQ0FBYjtBQUNILEtBRkQ7QUFHQTdHLFFBQUksQ0FBQ3VNLGdCQUFMLENBQXNCLFlBQXRCLEVBQW9DLFVBQUMxRixLQUFELEVBQVc7QUFDM0NQLG1CQUFhLENBQUM5RixNQUFELEVBQVNxRyxLQUFULEVBQWdCLGVBQWhCLENBQWI7QUFDSCxLQUZEO0FBR0g7O0FBQ0R5RixnQkFBYyxDQUFDL0ksSUFBZixHQUFzQkEsSUFBdEI7QUFDSCxDQWpCRCxFQWlCRytJLGNBQWMsS0FBS0EsY0FBYyxHQUFHLEVBQXRCLENBakJqQixFOzs7Ozs7Ozs7OztBQ1RBLFNBQVNoRyxhQUFULENBQXVCOUYsTUFBdkIsRUFBK0JxRyxLQUEvQixFQUFzQzNFLElBQXRDLEVBQTRDO0FBQUEsTUFDaENsQyxJQURnQyxHQUN2QlEsTUFBTSxDQUFDcUUsUUFEZ0IsQ0FDaEM3RSxJQURnQztBQUV4QyxNQUFNNEwsVUFBVSxHQUFHNUwsSUFBSSxDQUFDNkwscUJBQUwsRUFBbkI7O0FBQ0EsT0FBSyxJQUFJNU4sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzRJLEtBQUssQ0FBQzJGLGNBQU4sQ0FBcUJ0TyxNQUF6QyxFQUFpREQsQ0FBQyxFQUFsRCxFQUFzRDtBQUNsRCxRQUFNd08sS0FBSyxHQUFHNUYsS0FBSyxDQUFDMkYsY0FBTixDQUFxQnZPLENBQXJCLENBQWQ7QUFDQSxRQUFNc0ksQ0FBQyxHQUFHa0csS0FBSyxDQUFDWCxPQUFOLEdBQWdCRixVQUFVLENBQUNHLElBQTNCLEdBQWtDL0wsSUFBSSxDQUFDZ00sVUFBakQ7QUFDQSxRQUFNeEYsQ0FBQyxHQUFHaUcsS0FBSyxDQUFDUixPQUFOLEdBQWdCTCxVQUFVLENBQUNNLEdBQTNCLEdBQWlDbE0sSUFBSSxDQUFDbU0sU0FBaEQ7QUFDQTNMLFVBQU0sQ0FBQ3dDLFFBQVAsQ0FBZ0JvSixRQUFoQixDQUF5QmxLLElBQXpCLEVBQStCcUUsQ0FBL0IsRUFBa0NDLENBQWxDLEVBQXFDaUcsS0FBSyxDQUFDQyxVQUEzQztBQUNIOztBQUNEN0YsT0FBSyxDQUFDd0YsY0FBTjtBQUNIOztBQUNNLElBQUlNLGNBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxjQUFWLEVBQTBCO0FBQ3ZCLFdBQVNwSixJQUFULENBQWMvQyxNQUFkLEVBQXNCO0FBQUEsUUFDVlIsSUFEVSxHQUNEUSxNQUFNLENBQUNxRSxRQUROLENBQ1Y3RSxJQURVO0FBRWxCQSxRQUFJLENBQUN1TSxnQkFBTCxDQUFzQixZQUF0QixFQUFvQyxVQUFDMUYsS0FBRCxFQUFXO0FBQzNDUCxtQkFBYSxDQUFDOUYsTUFBRCxFQUFTcUcsS0FBVCxFQUFnQixhQUFoQixDQUFiO0FBQ0gsS0FGRDtBQUdBN0csUUFBSSxDQUFDdU0sZ0JBQUwsQ0FBc0IsVUFBdEIsRUFBa0MsVUFBQzFGLEtBQUQsRUFBVztBQUN6Q1AsbUJBQWEsQ0FBQzlGLE1BQUQsRUFBU3FHLEtBQVQsRUFBZ0IsV0FBaEIsQ0FBYjtBQUNILEtBRkQ7QUFHQTdHLFFBQUksQ0FBQ3VNLGdCQUFMLENBQXNCLFdBQXRCLEVBQW1DLFVBQUMxRixLQUFELEVBQVc7QUFDMUNQLG1CQUFhLENBQUM5RixNQUFELEVBQVNxRyxLQUFULEVBQWdCLGFBQWhCLENBQWI7QUFDSCxLQUZEO0FBR0E3RyxRQUFJLENBQUN1TSxnQkFBTCxDQUFzQixhQUF0QixFQUFxQyxVQUFDMUYsS0FBRCxFQUFXO0FBQzVDUCxtQkFBYSxDQUFDOUYsTUFBRCxFQUFTcUcsS0FBVCxFQUFnQixlQUFoQixDQUFiO0FBQ0gsS0FGRDtBQUdIOztBQUNEOEYsZ0JBQWMsQ0FBQ3BKLElBQWYsR0FBc0JBLElBQXRCO0FBQ0gsQ0FqQkQsRUFpQkdvSixjQUFjLEtBQUtBLGNBQWMsR0FBRyxFQUF0QixDQWpCakIsRTs7Ozs7Ozs7Ozs7OztBQ1pPLElBQUlDLE1BQUo7O0FBQ1AsQ0FBQyxVQUFVQSxNQUFWLEVBQWtCO0FBQ2YsV0FBU0MsS0FBVCxHQUFpQjtBQUNiLFdBQU87QUFDSEMsVUFBSSxFQUFFQyxNQUFNLENBQUNDLFNBRFY7QUFFSEMsVUFBSSxFQUFFRixNQUFNLENBQUNDLFNBRlY7QUFHSEUsVUFBSSxFQUFFSCxNQUFNLENBQUNJLFNBSFY7QUFJSEMsVUFBSSxFQUFFTCxNQUFNLENBQUNJO0FBSlYsS0FBUDtBQU1IOztBQUNEUCxRQUFNLENBQUNDLEtBQVAsR0FBZUEsS0FBZjs7QUFDQSxXQUFTUSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtBQUN0QkEsVUFBTSxDQUFDUixJQUFQLEdBQWNDLE1BQU0sQ0FBQ0MsU0FBckI7QUFDQU0sVUFBTSxDQUFDTCxJQUFQLEdBQWNGLE1BQU0sQ0FBQ0MsU0FBckI7QUFDQU0sVUFBTSxDQUFDSixJQUFQLEdBQWNILE1BQU0sQ0FBQ0ksU0FBckI7QUFDQUcsVUFBTSxDQUFDRixJQUFQLEdBQWNMLE1BQU0sQ0FBQ0ksU0FBckI7QUFDSDs7QUFDRFAsUUFBTSxDQUFDUyxRQUFQLEdBQWtCQSxRQUFsQjs7QUFDQSxXQUFTRSxPQUFULENBQWlCRCxNQUFqQixFQUF5QjtBQUNyQixXQUFPQSxNQUFNLENBQUNSLElBQVAsS0FBZ0JDLE1BQU0sQ0FBQ0MsU0FBdkIsSUFDQU0sTUFBTSxDQUFDTCxJQUFQLEtBQWdCRixNQUFNLENBQUNDLFNBRHZCLElBRUFNLE1BQU0sQ0FBQ0osSUFBUCxLQUFnQkgsTUFBTSxDQUFDSSxTQUZ2QixJQUdBRyxNQUFNLENBQUNGLElBQVAsS0FBZ0JMLE1BQU0sQ0FBQ0ksU0FIOUI7QUFJSDs7QUFDRFAsUUFBTSxDQUFDVyxPQUFQLEdBQWlCQSxPQUFqQjs7QUFDQSxXQUFTQyxXQUFULENBQXFCRixNQUFyQixFQUE2QkcsU0FBN0IsRUFBd0M7QUFBQSxRQUM1QlgsSUFENEIsR0FDQVEsTUFEQSxDQUM1QlIsSUFENEI7QUFBQSxRQUN0QkcsSUFEc0IsR0FDQUssTUFEQSxDQUN0QkwsSUFEc0I7QUFBQSxRQUNoQkMsSUFEZ0IsR0FDQUksTUFEQSxDQUNoQkosSUFEZ0I7QUFBQSxRQUNWRSxJQURVLEdBQ0FFLE1BREEsQ0FDVkYsSUFEVTtBQUVwQ0ssYUFBUyxDQUFDbEgsQ0FBVixHQUFjdUcsSUFBZDtBQUNBVyxhQUFTLENBQUNqSCxDQUFWLEdBQWN5RyxJQUFkO0FBQ0FRLGFBQVMsQ0FBQzdNLEtBQVYsR0FBa0JzTSxJQUFJLEdBQUdKLElBQXpCO0FBQ0FXLGFBQVMsQ0FBQzVNLE1BQVYsR0FBbUJ1TSxJQUFJLEdBQUdILElBQTFCO0FBQ0g7O0FBQ0RMLFFBQU0sQ0FBQ1ksV0FBUCxHQUFxQkEsV0FBckI7O0FBQ0EsV0FBU0UsS0FBVCxDQUFlSixNQUFmLEVBQXVCL0csQ0FBdkIsRUFBMEI7QUFDdEIsUUFBSStHLE1BQU0sQ0FBQ1IsSUFBUCxHQUFjdkcsQ0FBbEIsRUFBcUI7QUFDakIrRyxZQUFNLENBQUNSLElBQVAsR0FBY3ZHLENBQWQ7QUFDSCxLQUZELE1BR0ssSUFBSStHLE1BQU0sQ0FBQ0osSUFBUCxHQUFjM0csQ0FBbEIsRUFBcUI7QUFDdEIrRyxZQUFNLENBQUNKLElBQVAsR0FBYzNHLENBQWQ7QUFDSDtBQUNKOztBQUNEcUcsUUFBTSxDQUFDYyxLQUFQLEdBQWVBLEtBQWY7O0FBQ0EsV0FBU0MsS0FBVCxDQUFlTCxNQUFmLEVBQXVCOUcsQ0FBdkIsRUFBMEI7QUFDdEIsUUFBSThHLE1BQU0sQ0FBQ0wsSUFBUCxHQUFjekcsQ0FBbEIsRUFBcUI7QUFDakI4RyxZQUFNLENBQUNMLElBQVAsR0FBY3pHLENBQWQ7QUFDSCxLQUZELE1BR0ssSUFBSThHLE1BQU0sQ0FBQ0YsSUFBUCxHQUFjNUcsQ0FBbEIsRUFBcUI7QUFDdEI4RyxZQUFNLENBQUNGLElBQVAsR0FBYzVHLENBQWQ7QUFDSDtBQUNKOztBQUNEb0csUUFBTSxDQUFDZSxLQUFQLEdBQWVBLEtBQWY7O0FBQ0EsV0FBU0MsSUFBVCxDQUFjTixNQUFkLEVBQXNCL0csQ0FBdEIsRUFBeUJDLENBQXpCLEVBQTRCO0FBQ3hCLFFBQUk4RyxNQUFNLENBQUNSLElBQVAsR0FBY3ZHLENBQWxCLEVBQXFCO0FBQ2pCK0csWUFBTSxDQUFDUixJQUFQLEdBQWN2RyxDQUFkO0FBQ0gsS0FGRCxNQUdLLElBQUkrRyxNQUFNLENBQUNKLElBQVAsR0FBYzNHLENBQWxCLEVBQXFCO0FBQ3RCK0csWUFBTSxDQUFDSixJQUFQLEdBQWMzRyxDQUFkO0FBQ0g7O0FBQ0QsUUFBSStHLE1BQU0sQ0FBQ0wsSUFBUCxHQUFjekcsQ0FBbEIsRUFBcUI7QUFDakI4RyxZQUFNLENBQUNMLElBQVAsR0FBY3pHLENBQWQ7QUFDSCxLQUZELE1BR0ssSUFBSThHLE1BQU0sQ0FBQ0YsSUFBUCxHQUFjNUcsQ0FBbEIsRUFBcUI7QUFDdEI4RyxZQUFNLENBQUNGLElBQVAsR0FBYzVHLENBQWQ7QUFDSDtBQUNKOztBQUNEb0csUUFBTSxDQUFDZ0IsSUFBUCxHQUFjQSxJQUFkOztBQUNBLFdBQVNDLFNBQVQsQ0FBbUJQLE1BQW5CLEVBQTJCUSxLQUEzQixFQUFrQztBQUFBLFFBQ3RCdkgsQ0FEc0IsR0FDYnVILEtBRGEsQ0FDdEJ2SCxDQURzQjtBQUFBLFFBQ25CQyxDQURtQixHQUNic0gsS0FEYSxDQUNuQnRILENBRG1COztBQUU5QixRQUFJOEcsTUFBTSxDQUFDUixJQUFQLEdBQWN2RyxDQUFsQixFQUFxQjtBQUNqQitHLFlBQU0sQ0FBQ1IsSUFBUCxHQUFjdkcsQ0FBZDtBQUNILEtBRkQsTUFHSyxJQUFJK0csTUFBTSxDQUFDSixJQUFQLEdBQWMzRyxDQUFsQixFQUFxQjtBQUN0QitHLFlBQU0sQ0FBQ0osSUFBUCxHQUFjM0csQ0FBZDtBQUNIOztBQUNELFFBQUkrRyxNQUFNLENBQUNMLElBQVAsR0FBY3pHLENBQWxCLEVBQXFCO0FBQ2pCOEcsWUFBTSxDQUFDTCxJQUFQLEdBQWN6RyxDQUFkO0FBQ0gsS0FGRCxNQUdLLElBQUk4RyxNQUFNLENBQUNGLElBQVAsR0FBYzVHLENBQWxCLEVBQXFCO0FBQ3RCOEcsWUFBTSxDQUFDRixJQUFQLEdBQWM1RyxDQUFkO0FBQ0g7QUFDSjs7QUFDRG9HLFFBQU0sQ0FBQ2lCLFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0gsQ0FqRkQsRUFpRkdqQixNQUFNLEtBQUtBLE1BQU0sR0FBRyxFQUFkLENBakZULEU7Ozs7Ozs7Ozs7Ozs7QUNETyxJQUFJMVAsY0FBSjs7QUFDUCxDQUFDLFVBQVVBLGNBQVYsRUFBMEI7QUFDdkIsV0FBUzJQLEtBQVQsR0FBaUI7QUFDYixXQUFPO0FBQ0hwUCxxQkFBZSxFQUFFLENBRGQ7QUFFSE4sbUJBQWEsRUFBRSxDQUZaO0FBR0hFLHFCQUFlLEVBQUUsQ0FIZDtBQUlIRSxvQkFBYyxFQUFFLENBSmI7QUFLSEcsaUJBQVcsRUFBRSxDQUxWO0FBTUhOLGVBQVMsRUFBRSxDQU5SO0FBT0hFLGlCQUFXLEVBQUUsQ0FQVjtBQVFIRSxnQkFBVSxFQUFFO0FBUlQsS0FBUDtBQVVIOztBQUNETixnQkFBYyxDQUFDMlAsS0FBZixHQUF1QkEsS0FBdkI7O0FBQ0EsV0FBU1UsT0FBVCxDQUFpQjFRLEVBQWpCLEVBQXFCO0FBQ2pCLFdBQU9BLEVBQUUsQ0FBQ00sYUFBSCxLQUFxQixDQUFyQixJQUNBTixFQUFFLENBQUNRLGVBQUgsS0FBdUIsQ0FEdkIsSUFFQVIsRUFBRSxDQUFDVSxjQUFILEtBQXNCLENBRnRCLElBR0FWLEVBQUUsQ0FBQ1ksZUFBSCxLQUF1QixDQUh2QixJQUlBWixFQUFFLENBQUNPLFNBQUgsS0FBaUIsQ0FKakIsSUFLQVAsRUFBRSxDQUFDUyxXQUFILEtBQW1CLENBTG5CLElBTUFULEVBQUUsQ0FBQ1csVUFBSCxLQUFrQixDQU5sQixJQU9BWCxFQUFFLENBQUNhLFdBQUgsS0FBbUIsQ0FQMUI7QUFRSDs7QUFDRFIsZ0JBQWMsQ0FBQ3FRLE9BQWYsR0FBeUJBLE9BQXpCOztBQUNBLFdBQVNRLGdCQUFULENBQTBCbFIsRUFBMUIsRUFBOEI7QUFDMUIsV0FBT0EsRUFBRSxDQUFDTSxhQUFILEtBQXFCLENBQXJCLElBQ0FOLEVBQUUsQ0FBQ1EsZUFBSCxLQUF1QixDQUR2QixJQUVBUixFQUFFLENBQUNVLGNBQUgsS0FBc0IsQ0FGdEIsSUFHQVYsRUFBRSxDQUFDTyxTQUFILEtBQWlCLENBSGpCLElBSUFQLEVBQUUsQ0FBQ1MsV0FBSCxLQUFtQixDQUpuQixJQUtBVCxFQUFFLENBQUNXLFVBQUgsS0FBa0IsQ0FMbEIsSUFNQVgsRUFBRSxDQUFDYSxXQUFILEtBQW1CLENBTjFCO0FBT0g7O0FBQ0RSLGdCQUFjLENBQUM2USxnQkFBZixHQUFrQ0EsZ0JBQWxDOztBQUNBLFdBQVNWLFFBQVQsQ0FBa0J4USxFQUFsQixFQUFzQjtBQUNsQkEsTUFBRSxDQUFDTSxhQUFILEdBQW1CLENBQW5CO0FBQ0FOLE1BQUUsQ0FBQ1EsZUFBSCxHQUFxQixDQUFyQjtBQUNBUixNQUFFLENBQUNVLGNBQUgsR0FBb0IsQ0FBcEI7QUFDQVYsTUFBRSxDQUFDWSxlQUFILEdBQXFCLENBQXJCO0FBQ0FaLE1BQUUsQ0FBQ08sU0FBSCxHQUFlLENBQWY7QUFDQVAsTUFBRSxDQUFDUyxXQUFILEdBQWlCLENBQWpCO0FBQ0FULE1BQUUsQ0FBQ1csVUFBSCxHQUFnQixDQUFoQjtBQUNBWCxNQUFFLENBQUNhLFdBQUgsR0FBaUIsQ0FBakI7QUFDSDs7QUFDRFIsZ0JBQWMsQ0FBQ21RLFFBQWYsR0FBMEJBLFFBQTFCOztBQUNBLFdBQVNXLElBQVQsQ0FBY0MsSUFBZCxFQUFvQkMsRUFBcEIsRUFBd0I7QUFDcEJBLE1BQUUsQ0FBQ3pRLGVBQUgsR0FBcUJ3USxJQUFJLENBQUN4USxlQUExQjtBQUNBeVEsTUFBRSxDQUFDL1EsYUFBSCxHQUFtQjhRLElBQUksQ0FBQzlRLGFBQXhCO0FBQ0ErUSxNQUFFLENBQUM3USxlQUFILEdBQXFCNFEsSUFBSSxDQUFDNVEsZUFBMUI7QUFDQTZRLE1BQUUsQ0FBQzNRLGNBQUgsR0FBb0IwUSxJQUFJLENBQUMxUSxjQUF6QjtBQUNBMlEsTUFBRSxDQUFDeFEsV0FBSCxHQUFpQnVRLElBQUksQ0FBQ3ZRLFdBQXRCO0FBQ0F3USxNQUFFLENBQUM5USxTQUFILEdBQWU2USxJQUFJLENBQUM3USxTQUFwQjtBQUNBOFEsTUFBRSxDQUFDNVEsV0FBSCxHQUFpQjJRLElBQUksQ0FBQzNRLFdBQXRCO0FBQ0E0USxNQUFFLENBQUMxUSxVQUFILEdBQWdCeVEsSUFBSSxDQUFDelEsVUFBckI7QUFDSDs7QUFDRE4sZ0JBQWMsQ0FBQzhRLElBQWYsR0FBc0JBLElBQXRCOztBQUNBLFdBQVNHLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCQyxHQUFyQixFQUEwQnBMLE1BQTFCLEVBQWtDO0FBQzlCLFFBQU14RixlQUFlLEdBQUcyUSxHQUFHLENBQUMzUSxlQUFKLEdBQXNCNFEsR0FBRyxDQUFDNVEsZUFBbEQ7QUFDQSxRQUFNTixhQUFhLEdBQUdpUixHQUFHLENBQUNqUixhQUFKLEdBQW9Ca1IsR0FBRyxDQUFDbFIsYUFBOUM7QUFDQSxRQUFNRSxlQUFlLEdBQUcrUSxHQUFHLENBQUMvUSxlQUFKLEdBQXNCZ1IsR0FBRyxDQUFDaFIsZUFBbEQ7QUFDQSxRQUFNRSxjQUFjLEdBQUc2USxHQUFHLENBQUM3USxjQUFKLEdBQXFCOFEsR0FBRyxDQUFDOVEsY0FBaEQ7QUFDQSxRQUFNRyxXQUFXLEdBQUcwUSxHQUFHLENBQUMzUSxlQUFKLEdBQXNCNFEsR0FBRyxDQUFDM1EsV0FBMUIsR0FBd0MwUSxHQUFHLENBQUMxUSxXQUFoRTtBQUNBLFFBQU1OLFNBQVMsR0FBR2dSLEdBQUcsQ0FBQ2pSLGFBQUosR0FBb0JrUixHQUFHLENBQUNqUixTQUF4QixHQUFvQ2dSLEdBQUcsQ0FBQ2hSLFNBQTFEO0FBQ0EsUUFBTUUsV0FBVyxHQUFHOFEsR0FBRyxDQUFDL1EsZUFBSixHQUFzQmdSLEdBQUcsQ0FBQy9RLFdBQTFCLEdBQXdDOFEsR0FBRyxDQUFDOVEsV0FBaEU7QUFDQSxRQUFNRSxVQUFVLEdBQUc0USxHQUFHLENBQUM3USxjQUFKLEdBQXFCOFEsR0FBRyxDQUFDN1EsVUFBekIsR0FBc0M0USxHQUFHLENBQUM1USxVQUE3RDtBQUNBeUYsVUFBTSxDQUFDeEYsZUFBUCxHQUF5QkEsZUFBekI7QUFDQXdGLFVBQU0sQ0FBQzlGLGFBQVAsR0FBdUJBLGFBQXZCO0FBQ0E4RixVQUFNLENBQUM1RixlQUFQLEdBQXlCQSxlQUF6QjtBQUNBNEYsVUFBTSxDQUFDMUYsY0FBUCxHQUF3QkEsY0FBeEI7QUFDQTBGLFVBQU0sQ0FBQ3ZGLFdBQVAsR0FBcUJBLFdBQXJCO0FBQ0F1RixVQUFNLENBQUM3RixTQUFQLEdBQW1CQSxTQUFuQjtBQUNBNkYsVUFBTSxDQUFDM0YsV0FBUCxHQUFxQkEsV0FBckI7QUFDQTJGLFVBQU0sQ0FBQ3pGLFVBQVAsR0FBb0JBLFVBQXBCO0FBQ0g7O0FBQ0ROLGdCQUFjLENBQUNpUixNQUFmLEdBQXdCQSxNQUF4QjtBQUNILENBNUVELEVBNEVHalIsY0FBYyxLQUFLQSxjQUFjLEdBQUcsRUFBdEIsQ0E1RWpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNITyxJQUFJME0sTUFBSjs7QUFDUCxDQUFDLFVBQVVBLE1BQVYsRUFBa0I7QUFDZixXQUFTaUQsS0FBVCxHQUFpQjtBQUNiLFdBQU87QUFDSDVQLE9BQUMsRUFBRSxDQURBO0FBRUhELE9BQUMsRUFBRSxDQUZBO0FBR0h3QyxPQUFDLEVBQUUsQ0FIQTtBQUlIQyxPQUFDLEVBQUUsQ0FKQTtBQUtIRSxRQUFFLEVBQUUsQ0FMRDtBQU1IRSxRQUFFLEVBQUU7QUFORCxLQUFQO0FBUUg7O0FBQ0QrSixRQUFNLENBQUNpRCxLQUFQLEdBQWVBLEtBQWY7O0FBQ0EsV0FBU1UsT0FBVCxDQUFpQm5PLE1BQWpCLEVBQXlCO0FBQ3JCLFdBQU9BLE1BQU0sQ0FBQ25DLENBQVAsS0FBYSxDQUFiLElBQ0FtQyxNQUFNLENBQUNwQyxDQUFQLEtBQWEsQ0FEYixJQUVBb0MsTUFBTSxDQUFDSSxDQUFQLEtBQWEsQ0FGYixJQUdBSixNQUFNLENBQUNLLENBQVAsS0FBYSxDQUhiLElBSUFMLE1BQU0sQ0FBQ08sRUFBUCxLQUFjLENBSmQsSUFLQVAsTUFBTSxDQUFDUyxFQUFQLEtBQWMsQ0FMckI7QUFNSDs7QUFDRCtKLFFBQU0sQ0FBQzJELE9BQVAsR0FBaUJBLE9BQWpCOztBQUNBLFdBQVNGLFFBQVQsQ0FBa0JqTyxNQUFsQixFQUEwQjtBQUN0QkEsVUFBTSxDQUFDbkMsQ0FBUCxHQUFXLENBQVg7QUFDQW1DLFVBQU0sQ0FBQ3BDLENBQVAsR0FBVyxDQUFYO0FBQ0FvQyxVQUFNLENBQUNJLENBQVAsR0FBVyxDQUFYO0FBQ0FKLFVBQU0sQ0FBQ0ssQ0FBUCxHQUFXLENBQVg7QUFDQUwsVUFBTSxDQUFDTyxFQUFQLEdBQVksQ0FBWjtBQUNBUCxVQUFNLENBQUNTLEVBQVAsR0FBWSxDQUFaO0FBQ0g7O0FBQ0QrSixRQUFNLENBQUN5RCxRQUFQLEdBQWtCQSxRQUFsQjs7QUFDQSxXQUFTVyxJQUFULENBQWNDLElBQWQsRUFBb0JDLEVBQXBCLEVBQXdCO0FBQ3BCQSxNQUFFLENBQUNqUixDQUFILEdBQU9nUixJQUFJLENBQUNoUixDQUFaO0FBQ0FpUixNQUFFLENBQUNsUixDQUFILEdBQU9pUixJQUFJLENBQUNqUixDQUFaO0FBQ0FrUixNQUFFLENBQUMxTyxDQUFILEdBQU95TyxJQUFJLENBQUN6TyxDQUFaO0FBQ0EwTyxNQUFFLENBQUN6TyxDQUFILEdBQU93TyxJQUFJLENBQUN4TyxDQUFaO0FBQ0F5TyxNQUFFLENBQUN2TyxFQUFILEdBQVFzTyxJQUFJLENBQUN0TyxFQUFiO0FBQ0F1TyxNQUFFLENBQUNyTyxFQUFILEdBQVFvTyxJQUFJLENBQUNwTyxFQUFiO0FBQ0g7O0FBQ0QrSixRQUFNLENBQUNvRSxJQUFQLEdBQWNBLElBQWQ7O0FBQ0EsV0FBU0csTUFBVCxDQUFnQkcsT0FBaEIsRUFBeUJDLE9BQXpCLEVBQWtDdEwsTUFBbEMsRUFBMEM7QUFDdEMsUUFBTWhHLENBQUMsR0FBR3NSLE9BQU8sQ0FBQ3RSLENBQVIsR0FBWXFSLE9BQU8sQ0FBQ3JSLENBQXBCLEdBQXdCc1IsT0FBTyxDQUFDdlIsQ0FBUixHQUFZc1IsT0FBTyxDQUFDOU8sQ0FBdEQ7QUFDQSxRQUFNeEMsQ0FBQyxHQUFHdVIsT0FBTyxDQUFDdFIsQ0FBUixHQUFZcVIsT0FBTyxDQUFDdFIsQ0FBcEIsR0FBd0J1UixPQUFPLENBQUN2UixDQUFSLEdBQVlzUixPQUFPLENBQUM3TyxDQUF0RDtBQUNBLFFBQU1ELENBQUMsR0FBRytPLE9BQU8sQ0FBQy9PLENBQVIsR0FBWThPLE9BQU8sQ0FBQ3JSLENBQXBCLEdBQXdCc1IsT0FBTyxDQUFDOU8sQ0FBUixHQUFZNk8sT0FBTyxDQUFDOU8sQ0FBdEQ7QUFDQSxRQUFNQyxDQUFDLEdBQUc4TyxPQUFPLENBQUMvTyxDQUFSLEdBQVk4TyxPQUFPLENBQUN0UixDQUFwQixHQUF3QnVSLE9BQU8sQ0FBQzlPLENBQVIsR0FBWTZPLE9BQU8sQ0FBQzdPLENBQXREO0FBQ0EsUUFBTUUsRUFBRSxHQUFHNE8sT0FBTyxDQUFDNU8sRUFBUixHQUFhMk8sT0FBTyxDQUFDclIsQ0FBckIsR0FBeUJzUixPQUFPLENBQUMxTyxFQUFSLEdBQWF5TyxPQUFPLENBQUM5TyxDQUE5QyxHQUFrRDhPLE9BQU8sQ0FBQzNPLEVBQXJFO0FBQ0EsUUFBTUUsRUFBRSxHQUFHME8sT0FBTyxDQUFDNU8sRUFBUixHQUFhMk8sT0FBTyxDQUFDdFIsQ0FBckIsR0FBeUJ1UixPQUFPLENBQUMxTyxFQUFSLEdBQWF5TyxPQUFPLENBQUM3TyxDQUE5QyxHQUFrRDZPLE9BQU8sQ0FBQ3pPLEVBQXJFO0FBQ0FvRCxVQUFNLENBQUNoRyxDQUFQLEdBQVdBLENBQVg7QUFDQWdHLFVBQU0sQ0FBQ2pHLENBQVAsR0FBV0EsQ0FBWDtBQUNBaUcsVUFBTSxDQUFDekQsQ0FBUCxHQUFXQSxDQUFYO0FBQ0F5RCxVQUFNLENBQUN4RCxDQUFQLEdBQVdBLENBQVg7QUFDQXdELFVBQU0sQ0FBQ3RELEVBQVAsR0FBWUEsRUFBWjtBQUNBc0QsVUFBTSxDQUFDcEQsRUFBUCxHQUFZQSxFQUFaO0FBQ0g7O0FBQ0QrSixRQUFNLENBQUN1RSxNQUFQLEdBQWdCQSxNQUFoQjs7QUFDQSxXQUFTSyxjQUFULENBQXdCcFAsTUFBeEIsRUFBZ0M7QUFDNUIsV0FBT0EsTUFBTSxDQUFDbkMsQ0FBUCxHQUFXbUMsTUFBTSxDQUFDSyxDQUFsQixHQUFzQkwsTUFBTSxDQUFDcEMsQ0FBUCxHQUFXb0MsTUFBTSxDQUFDSSxDQUEvQztBQUNIOztBQUNEb0ssUUFBTSxDQUFDNEUsY0FBUCxHQUF3QkEsY0FBeEI7O0FBQ0EsV0FBU0MsTUFBVCxDQUFnQnJQLE1BQWhCLEVBQXdCNkQsTUFBeEIsRUFBZ0M7QUFDNUIsUUFBSXlMLFdBQVcsR0FBR0YsY0FBYyxDQUFDcFAsTUFBRCxDQUFoQzs7QUFDQSxRQUFJc1AsV0FBVyxLQUFLLENBQXBCLEVBQXVCO0FBQ25CekwsWUFBTSxDQUFDaEcsQ0FBUCxHQUFXLENBQVg7QUFDQWdHLFlBQU0sQ0FBQ2pHLENBQVAsR0FBVyxDQUFYO0FBQ0FpRyxZQUFNLENBQUN6RCxDQUFQLEdBQVcsQ0FBWDtBQUNBeUQsWUFBTSxDQUFDeEQsQ0FBUCxHQUFXLENBQVg7QUFDQXdELFlBQU0sQ0FBQ3RELEVBQVAsR0FBWSxDQUFDUCxNQUFNLENBQUNPLEVBQXBCO0FBQ0FzRCxZQUFNLENBQUNwRCxFQUFQLEdBQVksQ0FBQ1QsTUFBTSxDQUFDUyxFQUFwQjtBQUNILEtBUEQsTUFRSztBQUNENk8saUJBQVcsR0FBRyxNQUFNQSxXQUFwQjtBQUNBekwsWUFBTSxDQUFDaEcsQ0FBUCxHQUFXbUMsTUFBTSxDQUFDbkMsQ0FBUCxHQUFXeVIsV0FBdEI7QUFDQXpMLFlBQU0sQ0FBQ2pHLENBQVAsR0FBVyxDQUFDb0MsTUFBTSxDQUFDcEMsQ0FBUixHQUFZMFIsV0FBdkI7QUFDQXpMLFlBQU0sQ0FBQ3pELENBQVAsR0FBVyxDQUFDSixNQUFNLENBQUNJLENBQVIsR0FBWWtQLFdBQXZCO0FBQ0F6TCxZQUFNLENBQUN4RCxDQUFQLEdBQVdMLE1BQU0sQ0FBQ0ssQ0FBUCxHQUFXaVAsV0FBdEI7QUFDQXpMLFlBQU0sQ0FBQ3RELEVBQVAsR0FBWSxDQUFDc0QsTUFBTSxDQUFDaEcsQ0FBUixHQUFZbUMsTUFBTSxDQUFDTyxFQUFuQixHQUF3QnNELE1BQU0sQ0FBQ3pELENBQVAsR0FBV0osTUFBTSxDQUFDUyxFQUF0RDtBQUNBb0QsWUFBTSxDQUFDcEQsRUFBUCxHQUFZLENBQUNvRCxNQUFNLENBQUNqRyxDQUFSLEdBQVlvQyxNQUFNLENBQUNPLEVBQW5CLEdBQXdCc0QsTUFBTSxDQUFDeEQsQ0FBUCxHQUFXTCxNQUFNLENBQUNTLEVBQXREO0FBQ0g7QUFDSjs7QUFDRCtKLFFBQU0sQ0FBQzZFLE1BQVAsR0FBZ0JBLE1BQWhCOztBQUNBLFdBQVNFLGNBQVQsQ0FBd0J2UCxNQUF4QixFQUFnQzBPLEtBQWhDLEVBQXVDN0ssTUFBdkMsRUFBK0M7QUFBQSxRQUNuQ3NELENBRG1DLEdBQzFCdUgsS0FEMEIsQ0FDbkN2SCxDQURtQztBQUFBLFFBQ2hDQyxDQURnQyxHQUMxQnNILEtBRDBCLENBQ2hDdEgsQ0FEZ0M7QUFFM0N2RCxVQUFNLENBQUNzRCxDQUFQLEdBQVdBLENBQUMsR0FBR25ILE1BQU0sQ0FBQ25DLENBQVgsR0FBZXVKLENBQUMsR0FBR3BILE1BQU0sQ0FBQ0ksQ0FBMUIsR0FBOEJKLE1BQU0sQ0FBQ08sRUFBaEQ7QUFDQXNELFVBQU0sQ0FBQ3VELENBQVAsR0FBV0QsQ0FBQyxHQUFHbkgsTUFBTSxDQUFDcEMsQ0FBWCxHQUFld0osQ0FBQyxHQUFHcEgsTUFBTSxDQUFDSyxDQUExQixHQUE4QkwsTUFBTSxDQUFDUyxFQUFoRDtBQUNIOztBQUNEK0osUUFBTSxDQUFDK0UsY0FBUCxHQUF3QkEsY0FBeEI7O0FBQ0EsV0FBU0MsbUJBQVQsQ0FBNkJ4UCxNQUE3QixFQUFxQzBPLEtBQXJDLEVBQTRDN0ssTUFBNUMsRUFBb0Q7QUFBQSxRQUN4Q3NELENBRHdDLEdBQy9CdUgsS0FEK0IsQ0FDeEN2SCxDQUR3QztBQUFBLFFBQ3JDQyxDQURxQyxHQUMvQnNILEtBRCtCLENBQ3JDdEgsQ0FEcUM7QUFFaER2RCxVQUFNLENBQUNzRCxDQUFQLEdBQVdBLENBQUMsR0FBR25ILE1BQU0sQ0FBQ25DLENBQVgsR0FBZXVKLENBQUMsR0FBR3BILE1BQU0sQ0FBQ0ksQ0FBckM7QUFDQXlELFVBQU0sQ0FBQ3VELENBQVAsR0FBV0QsQ0FBQyxHQUFHbkgsTUFBTSxDQUFDcEMsQ0FBWCxHQUFld0osQ0FBQyxHQUFHcEgsTUFBTSxDQUFDSyxDQUFyQztBQUNIOztBQUNEbUssUUFBTSxDQUFDZ0YsbUJBQVAsR0FBNkJBLG1CQUE3Qjs7QUFDQSxXQUFTQyxxQkFBVCxDQUErQnpQLE1BQS9CLEVBQXVDME8sS0FBdkMsRUFBOEM3SyxNQUE5QyxFQUFzRDtBQUNsRCxRQUFJeUwsV0FBVyxHQUFHRixjQUFjLENBQUNwUCxNQUFELENBQWhDOztBQUNBLFFBQUlzUCxXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFDbkJ6TCxZQUFNLENBQUNzRCxDQUFQLEdBQVcsQ0FBQ25ILE1BQU0sQ0FBQ08sRUFBbkI7QUFDQXNELFlBQU0sQ0FBQ3VELENBQVAsR0FBVyxDQUFDcEgsTUFBTSxDQUFDUyxFQUFuQjtBQUNILEtBSEQsTUFJSztBQUNENk8saUJBQVcsR0FBRyxJQUFJQSxXQUFsQjtBQURDLFVBRU9uSSxDQUZQLEdBRWdCdUgsS0FGaEIsQ0FFT3ZILENBRlA7QUFBQSxVQUVVQyxDQUZWLEdBRWdCc0gsS0FGaEIsQ0FFVXRILENBRlY7QUFHRHZELFlBQU0sQ0FBQ3NELENBQVAsR0FBV21JLFdBQVcsSUFBSXRQLE1BQU0sQ0FBQ0ksQ0FBUCxJQUFZSixNQUFNLENBQUNTLEVBQVAsR0FBWTJHLENBQXhCLElBQTZCcEgsTUFBTSxDQUFDSyxDQUFQLElBQVk4RyxDQUFDLEdBQUduSCxNQUFNLENBQUNPLEVBQXZCLENBQWpDLENBQXRCO0FBQ0FzRCxZQUFNLENBQUN1RCxDQUFQLEdBQVdrSSxXQUFXLElBQUl0UCxNQUFNLENBQUNuQyxDQUFQLElBQVl1SixDQUFDLEdBQUdwSCxNQUFNLENBQUNTLEVBQXZCLElBQTZCVCxNQUFNLENBQUNwQyxDQUFQLElBQVlvQyxNQUFNLENBQUNPLEVBQVAsR0FBWTRHLENBQXhCLENBQWpDLENBQXRCO0FBQ0g7QUFDSjs7QUFDRHFELFFBQU0sQ0FBQ2lGLHFCQUFQLEdBQStCQSxxQkFBL0I7O0FBQ0EsV0FBU0MsZUFBVCxDQUF5QjFQLE1BQXpCLEVBQWlDa08sTUFBakMsRUFBeUNySyxNQUF6QyxFQUFpRDtBQUFBLFFBQ3JDaEcsQ0FEcUMsR0FDYm1DLE1BRGEsQ0FDckNuQyxDQURxQztBQUFBLFFBQ2xDRCxDQURrQyxHQUNib0MsTUFEYSxDQUNsQ3BDLENBRGtDO0FBQUEsUUFDL0J3QyxDQUQrQixHQUNiSixNQURhLENBQy9CSSxDQUQrQjtBQUFBLFFBQzVCQyxDQUQ0QixHQUNiTCxNQURhLENBQzVCSyxDQUQ0QjtBQUFBLFFBQ3pCRSxFQUR5QixHQUNiUCxNQURhLENBQ3pCTyxFQUR5QjtBQUFBLFFBQ3JCRSxFQURxQixHQUNiVCxNQURhLENBQ3JCUyxFQURxQjtBQUU3QyxRQUFNa1AsRUFBRSxHQUFHekIsTUFBTSxDQUFDL0csQ0FBbEI7QUFDQSxRQUFNeUksRUFBRSxHQUFHMUIsTUFBTSxDQUFDOUcsQ0FBbEI7QUFDQSxRQUFNeUksRUFBRSxHQUFHRixFQUFFLEdBQUd6QixNQUFNLENBQUMxTSxLQUF2QjtBQUNBLFFBQU1zTyxFQUFFLEdBQUdGLEVBQUUsR0FBRzFCLE1BQU0sQ0FBQ3pNLE1BQXZCO0FBQ0EsUUFBTXNPLEdBQUcsR0FBR0osRUFBRSxHQUFHOVIsQ0FBTCxHQUFTK1IsRUFBRSxHQUFHeFAsQ0FBZCxHQUFrQkcsRUFBOUI7QUFDQSxRQUFNeVAsR0FBRyxHQUFHTCxFQUFFLEdBQUcvUixDQUFMLEdBQVNnUyxFQUFFLEdBQUd2UCxDQUFkLEdBQWtCSSxFQUE5QjtBQUNBLFFBQU13UCxHQUFHLEdBQUdKLEVBQUUsR0FBR2hTLENBQUwsR0FBUytSLEVBQUUsR0FBR3hQLENBQWQsR0FBa0JHLEVBQTlCO0FBQ0EsUUFBTTJQLEdBQUcsR0FBR0wsRUFBRSxHQUFHalMsQ0FBTCxHQUFTZ1MsRUFBRSxHQUFHdlAsQ0FBZCxHQUFrQkksRUFBOUI7QUFDQSxRQUFNMFAsR0FBRyxHQUFHTixFQUFFLEdBQUdoUyxDQUFMLEdBQVNpUyxFQUFFLEdBQUcxUCxDQUFkLEdBQWtCRyxFQUE5QjtBQUNBLFFBQU02UCxHQUFHLEdBQUdQLEVBQUUsR0FBR2pTLENBQUwsR0FBU2tTLEVBQUUsR0FBR3pQLENBQWQsR0FBa0JJLEVBQTlCO0FBQ0EsUUFBTTRQLEdBQUcsR0FBR1YsRUFBRSxHQUFHOVIsQ0FBTCxHQUFTaVMsRUFBRSxHQUFHMVAsQ0FBZCxHQUFrQkcsRUFBOUI7QUFDQSxRQUFNK1AsR0FBRyxHQUFHWCxFQUFFLEdBQUcvUixDQUFMLEdBQVNrUyxFQUFFLEdBQUd6UCxDQUFkLEdBQWtCSSxFQUE5QjtBQUNBLFFBQUlrTSxJQUFJLEdBQUdvRCxHQUFYOztBQUNBLFFBQUlwRCxJQUFJLEdBQUdzRCxHQUFYLEVBQWdCO0FBQ1p0RCxVQUFJLEdBQUdzRCxHQUFQO0FBQ0g7O0FBQ0QsUUFBSXRELElBQUksR0FBR3dELEdBQVgsRUFBZ0I7QUFDWnhELFVBQUksR0FBR3dELEdBQVA7QUFDSDs7QUFDRCxRQUFJeEQsSUFBSSxHQUFHMEQsR0FBWCxFQUFnQjtBQUNaMUQsVUFBSSxHQUFHMEQsR0FBUDtBQUNIOztBQUNELFFBQUl2RCxHQUFHLEdBQUdrRCxHQUFWOztBQUNBLFFBQUlsRCxHQUFHLEdBQUdvRCxHQUFWLEVBQWU7QUFDWHBELFNBQUcsR0FBR29ELEdBQU47QUFDSDs7QUFDRCxRQUFJcEQsR0FBRyxHQUFHc0QsR0FBVixFQUFlO0FBQ1h0RCxTQUFHLEdBQUdzRCxHQUFOO0FBQ0g7O0FBQ0QsUUFBSXRELEdBQUcsR0FBR3dELEdBQVYsRUFBZTtBQUNYeEQsU0FBRyxHQUFHd0QsR0FBTjtBQUNIOztBQUNELFFBQUlDLEtBQUssR0FBR1IsR0FBWjs7QUFDQSxRQUFJUSxLQUFLLEdBQUdOLEdBQVosRUFBaUI7QUFDYk0sV0FBSyxHQUFHTixHQUFSO0FBQ0g7O0FBQ0QsUUFBSU0sS0FBSyxHQUFHSixHQUFaLEVBQWlCO0FBQ2JJLFdBQUssR0FBR0osR0FBUjtBQUNIOztBQUNELFFBQUlJLEtBQUssR0FBR0YsR0FBWixFQUFpQjtBQUNiRSxXQUFLLEdBQUdGLEdBQVI7QUFDSDs7QUFDRCxRQUFJRyxNQUFNLEdBQUdSLEdBQWI7O0FBQ0EsUUFBSVEsTUFBTSxHQUFHTixHQUFiLEVBQWtCO0FBQ2RNLFlBQU0sR0FBR04sR0FBVDtBQUNIOztBQUNELFFBQUlNLE1BQU0sR0FBR0osR0FBYixFQUFrQjtBQUNkSSxZQUFNLEdBQUdKLEdBQVQ7QUFDSDs7QUFDRCxRQUFJSSxNQUFNLEdBQUdGLEdBQWIsRUFBa0I7QUFDZEUsWUFBTSxHQUFHRixHQUFUO0FBQ0g7O0FBQ0R6TSxVQUFNLENBQUNzRCxDQUFQLEdBQVd3RixJQUFYO0FBQ0E5SSxVQUFNLENBQUN1RCxDQUFQLEdBQVcwRixHQUFYO0FBQ0FqSixVQUFNLENBQUNyQyxLQUFQLEdBQWUrTyxLQUFLLEdBQUc1RCxJQUF2QjtBQUNBOUksVUFBTSxDQUFDcEMsTUFBUCxHQUFnQitPLE1BQU0sR0FBRzFELEdBQXpCO0FBQ0g7O0FBQ0R0QyxRQUFNLENBQUNrRixlQUFQLEdBQXlCQSxlQUF6QjtBQUNILENBcktELEVBcUtHbEYsTUFBTSxLQUFLQSxNQUFNLEdBQUcsRUFBZCxDQXJLVCxFOzs7Ozs7Ozs7Ozs7O0FDRE8sSUFBSUosS0FBSjs7QUFDUCxDQUFDLFVBQVVBLEtBQVYsRUFBaUI7QUFDZCxXQUFTcUQsS0FBVCxHQUFpQjtBQUNiLFdBQU87QUFBRXRHLE9BQUMsRUFBRSxDQUFMO0FBQVFDLE9BQUMsRUFBRTtBQUFYLEtBQVA7QUFDSDs7QUFDRGdELE9BQUssQ0FBQ3FELEtBQU4sR0FBY0EsS0FBZDs7QUFDQSxXQUFTM08sTUFBVCxDQUFnQjRQLEtBQWhCLEVBQXVCO0FBQUEsUUFDWHZILENBRFcsR0FDRnVILEtBREUsQ0FDWHZILENBRFc7QUFBQSxRQUNSQyxDQURRLEdBQ0ZzSCxLQURFLENBQ1J0SCxDQURRO0FBRW5CLFdBQU9qRixJQUFJLENBQUNzTyxJQUFMLENBQVV0SixDQUFDLEdBQUdBLENBQUosR0FBUUMsQ0FBQyxHQUFHQSxDQUF0QixDQUFQO0FBQ0g7O0FBQ0RnRCxPQUFLLENBQUN0TCxNQUFOLEdBQWVBLE1BQWY7O0FBQ0EsV0FBUzRSLEtBQVQsQ0FBZWhDLEtBQWYsRUFBc0I7QUFDbEIsV0FBT3ZNLElBQUksQ0FBQ3dPLEtBQUwsQ0FBV2pDLEtBQUssQ0FBQ3RILENBQWpCLEVBQW9Cc0gsS0FBSyxDQUFDdkgsQ0FBMUIsQ0FBUDtBQUNIOztBQUNEaUQsT0FBSyxDQUFDc0csS0FBTixHQUFjQSxLQUFkOztBQUNBLFdBQVN2QyxPQUFULENBQWlCTyxLQUFqQixFQUF3QjtBQUNwQixXQUFPQSxLQUFLLENBQUN2SCxDQUFOLEtBQVksQ0FBWixJQUFpQnVILEtBQUssQ0FBQ3RILENBQU4sS0FBWSxDQUFwQztBQUNIOztBQUNEZ0QsT0FBSyxDQUFDK0QsT0FBTixHQUFnQkEsT0FBaEI7O0FBQ0EsV0FBU3lDLE1BQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCQyxNQUF4QixFQUFnQztBQUM1QixXQUFPRCxNQUFNLENBQUMxSixDQUFQLEtBQWEySixNQUFNLENBQUMzSixDQUFwQixJQUF5QjBKLE1BQU0sQ0FBQ3pKLENBQVAsS0FBYTBKLE1BQU0sQ0FBQzFKLENBQXBEO0FBQ0g7O0FBQ0RnRCxPQUFLLENBQUN3RyxNQUFOLEdBQWVBLE1BQWY7O0FBQ0EsV0FBUzNDLFFBQVQsQ0FBa0JTLEtBQWxCLEVBQXlCO0FBQ3JCQSxTQUFLLENBQUN2SCxDQUFOLEdBQVUsQ0FBVjtBQUNBdUgsU0FBSyxDQUFDdEgsQ0FBTixHQUFVLENBQVY7QUFDSDs7QUFDRGdELE9BQUssQ0FBQzZELFFBQU4sR0FBaUJBLFFBQWpCOztBQUNBLFdBQVNXLElBQVQsQ0FBY21DLE1BQWQsRUFBc0JDLE1BQXRCLEVBQThCO0FBQzFCQSxVQUFNLENBQUM3SixDQUFQLEdBQVc0SixNQUFNLENBQUM1SixDQUFsQjtBQUNBNkosVUFBTSxDQUFDNUosQ0FBUCxHQUFXMkosTUFBTSxDQUFDM0osQ0FBbEI7QUFDSDs7QUFDRGdELE9BQUssQ0FBQ3dFLElBQU4sR0FBYUEsSUFBYjs7QUFDQSxXQUFTcUMsU0FBVCxDQUFtQnZDLEtBQW5CLEVBQTBCd0MsU0FBMUIsRUFBcUM7QUFDakMsUUFBSTdJLEtBQUssR0FBR3ZKLE1BQU0sQ0FBQzRQLEtBQUQsQ0FBbEI7O0FBQ0EsUUFBSXJHLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDWEEsV0FBSyxHQUFHNkksU0FBUyxHQUFHN0ksS0FBcEI7QUFDQXFHLFdBQUssQ0FBQ3ZILENBQU4sSUFBV2tCLEtBQVg7QUFDQXFHLFdBQUssQ0FBQ3RILENBQU4sSUFBV2lCLEtBQVg7QUFDSDtBQUNKOztBQUNEK0IsT0FBSyxDQUFDNkcsU0FBTixHQUFrQkEsU0FBbEI7O0FBQ0EsV0FBU0UsUUFBVCxDQUFrQk4sTUFBbEIsRUFBMEJDLE1BQTFCLEVBQWtDO0FBQzlCLFFBQU1NLEVBQUUsR0FBR1AsTUFBTSxDQUFDMUosQ0FBUCxHQUFXMkosTUFBTSxDQUFDM0osQ0FBN0I7QUFDQSxRQUFNa0ssRUFBRSxHQUFHUixNQUFNLENBQUN6SixDQUFQLEdBQVcwSixNQUFNLENBQUMxSixDQUE3QjtBQUNBLFdBQU9qRixJQUFJLENBQUNzTyxJQUFMLENBQVVXLEVBQUUsR0FBR0EsRUFBTCxHQUFVQyxFQUFFLEdBQUdBLEVBQXpCLENBQVA7QUFDSDs7QUFDRGpILE9BQUssQ0FBQytHLFFBQU4sR0FBaUJBLFFBQWpCOztBQUNBLFdBQVNHLFdBQVQsQ0FBcUJ6RyxLQUFyQixFQUE0QkMsR0FBNUIsRUFBaUN6QyxLQUFqQyxFQUF3Q3hFLE1BQXhDLEVBQWdEO0FBQzVDQSxVQUFNLENBQUNzRCxDQUFQLEdBQVcwRCxLQUFLLENBQUMxRCxDQUFOLEdBQVVrQixLQUFLLElBQUl5QyxHQUFHLENBQUMzRCxDQUFKLEdBQVEwRCxLQUFLLENBQUMxRCxDQUFsQixDQUExQjtBQUNBdEQsVUFBTSxDQUFDdUQsQ0FBUCxHQUFXeUQsS0FBSyxDQUFDekQsQ0FBTixHQUFVaUIsS0FBSyxJQUFJeUMsR0FBRyxDQUFDMUQsQ0FBSixHQUFReUQsS0FBSyxDQUFDekQsQ0FBbEIsQ0FBMUI7QUFDSDs7QUFDRGdELE9BQUssQ0FBQ2tILFdBQU4sR0FBb0JBLFdBQXBCOztBQUNBLFdBQVNDLEtBQVQsQ0FBZTdDLEtBQWYsRUFBc0I1UCxNQUF0QixFQUE4QjRSLEtBQTlCLEVBQXFDO0FBQ2pDaEMsU0FBSyxDQUFDdkgsQ0FBTixHQUFVckksTUFBTSxHQUFHcUQsSUFBSSxDQUFDOEYsR0FBTCxDQUFTeUksS0FBVCxDQUFuQjtBQUNBaEMsU0FBSyxDQUFDdEgsQ0FBTixHQUFVdEksTUFBTSxHQUFHcUQsSUFBSSxDQUFDK0YsR0FBTCxDQUFTd0ksS0FBVCxDQUFuQjtBQUNIOztBQUNEdEcsT0FBSyxDQUFDbUgsS0FBTixHQUFjQSxLQUFkO0FBQ0gsQ0F6REQsRUF5REduSCxLQUFLLEtBQUtBLEtBQUssR0FBRyxFQUFiLENBekRSLEU7Ozs7Ozs7Ozs7Ozs7QUNETyxJQUFJb0gsU0FBSjs7QUFDUCxDQUFDLFVBQVVBLFNBQVYsRUFBcUI7QUFDbEIsV0FBUy9ELEtBQVQsR0FBaUI7QUFDYixXQUFPO0FBQ0h0RyxPQUFDLEVBQUUsQ0FEQTtBQUNHQyxPQUFDLEVBQUUsQ0FETjtBQUNTNUYsV0FBSyxFQUFFLENBRGhCO0FBQ21CQyxZQUFNLEVBQUU7QUFEM0IsS0FBUDtBQUdIOztBQUNEK1AsV0FBUyxDQUFDL0QsS0FBVixHQUFrQkEsS0FBbEI7O0FBQ0EsV0FBU1EsUUFBVCxDQUFrQkksU0FBbEIsRUFBNkI7QUFDekJBLGFBQVMsQ0FBQ2xILENBQVYsR0FBYyxDQUFkO0FBQ0FrSCxhQUFTLENBQUNqSCxDQUFWLEdBQWMsQ0FBZDtBQUNBaUgsYUFBUyxDQUFDN00sS0FBVixHQUFrQixDQUFsQjtBQUNBNk0sYUFBUyxDQUFDNU0sTUFBVixHQUFtQixDQUFuQjtBQUNIOztBQUNEK1AsV0FBUyxDQUFDdkQsUUFBVixHQUFxQkEsUUFBckI7O0FBQ0EsV0FBU3dELFlBQVQsQ0FBc0JWLE1BQXRCLEVBQThCQyxNQUE5QixFQUFzQ25OLE1BQXRDLEVBQThDO0FBQUEsUUFDcENzRCxDQURvQyxHQUNYNEosTUFEVyxDQUNwQzVKLENBRG9DO0FBQUEsUUFDakNDLENBRGlDLEdBQ1gySixNQURXLENBQ2pDM0osQ0FEaUM7QUFBQSxRQUM5QjVGLEtBRDhCLEdBQ1h1UCxNQURXLENBQzlCdlAsS0FEOEI7QUFBQSxRQUN2QkMsTUFEdUIsR0FDWHNQLE1BRFcsQ0FDdkJ0UCxNQUR1QjtBQUUxQyxRQUFNa0wsSUFBSSxHQUFHcUUsTUFBTSxDQUFDN0osQ0FBcEI7QUFDQSxRQUFNMkYsR0FBRyxHQUFHa0UsTUFBTSxDQUFDNUosQ0FBbkI7QUFDQSxRQUFNbUosS0FBSyxHQUFHUyxNQUFNLENBQUM3SixDQUFQLEdBQVc2SixNQUFNLENBQUN4UCxLQUFoQztBQUNBLFFBQU1nUCxNQUFNLEdBQUdRLE1BQU0sQ0FBQzVKLENBQVAsR0FBVzRKLE1BQU0sQ0FBQ3ZQLE1BQWpDOztBQUNBLFFBQUkwRixDQUFDLEdBQUd3RixJQUFSLEVBQWM7QUFDVm5MLFdBQUssSUFBSW1MLElBQUksR0FBR3hGLENBQWhCO0FBQ0FBLE9BQUMsR0FBR3dGLElBQUo7QUFDSDs7QUFDRCxRQUFJeEYsQ0FBQyxHQUFHM0YsS0FBSixHQUFZK08sS0FBaEIsRUFBdUI7QUFDbkIvTyxXQUFLLEdBQUcrTyxLQUFLLEdBQUdwSixDQUFoQjtBQUNIOztBQUNELFFBQUlDLENBQUMsR0FBRzBGLEdBQVIsRUFBYTtBQUNUckwsWUFBTSxJQUFJcUwsR0FBRyxHQUFHMUYsQ0FBaEI7QUFDQUEsT0FBQyxHQUFHMEYsR0FBSjtBQUNIOztBQUNELFFBQUkxRixDQUFDLEdBQUczRixNQUFKLEdBQWErTyxNQUFqQixFQUF5QjtBQUNyQi9PLFlBQU0sR0FBRytPLE1BQU0sR0FBR3BKLENBQWxCO0FBQ0g7O0FBQ0QsUUFBSTVGLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDWEEsV0FBSyxHQUFHLENBQVI7QUFDSDs7QUFDRCxRQUFJQyxNQUFNLEdBQUcsQ0FBYixFQUFnQjtBQUNaQSxZQUFNLEdBQUcsQ0FBVDtBQUNIOztBQUNEb0MsVUFBTSxDQUFDc0QsQ0FBUCxHQUFXQSxDQUFYO0FBQ0F0RCxVQUFNLENBQUN1RCxDQUFQLEdBQVdBLENBQVg7QUFDQXZELFVBQU0sQ0FBQ3JDLEtBQVAsR0FBZUEsS0FBZjtBQUNBcUMsVUFBTSxDQUFDcEMsTUFBUCxHQUFnQkEsTUFBaEI7QUFDSDs7QUFDRCtQLFdBQVMsQ0FBQ0MsWUFBVixHQUF5QkEsWUFBekI7O0FBQ0EsV0FBU3RELE9BQVQsQ0FBaUJFLFNBQWpCLEVBQTRCO0FBQ3hCLFdBQU9BLFNBQVMsQ0FBQzdNLEtBQVYsS0FBb0IsQ0FBcEIsSUFBeUI2TSxTQUFTLENBQUM1TSxNQUFWLEtBQXFCLENBQXJEO0FBQ0g7O0FBQ0QrUCxXQUFTLENBQUNyRCxPQUFWLEdBQW9CQSxPQUFwQjs7QUFDQSxXQUFTdUQsUUFBVCxDQUFrQnJELFNBQWxCLEVBQTZCSyxLQUE3QixFQUFvQztBQUNoQyxXQUFPTCxTQUFTLENBQUNsSCxDQUFWLEdBQWN1SCxLQUFLLENBQUN2SCxDQUFwQixJQUNBa0gsU0FBUyxDQUFDbEgsQ0FBVixHQUFja0gsU0FBUyxDQUFDN00sS0FBeEIsR0FBZ0NrTixLQUFLLENBQUN2SCxDQUR0QyxJQUVBa0gsU0FBUyxDQUFDakgsQ0FBVixHQUFjc0gsS0FBSyxDQUFDdEgsQ0FGcEIsSUFHQWlILFNBQVMsQ0FBQ2pILENBQVYsR0FBY2lILFNBQVMsQ0FBQzVNLE1BQXhCLEdBQWlDaU4sS0FBSyxDQUFDdEgsQ0FIOUM7QUFJSDs7QUFDRG9LLFdBQVMsQ0FBQ0UsUUFBVixHQUFxQkEsUUFBckI7O0FBQ0EsV0FBU0MsS0FBVCxDQUFldEQsU0FBZixFQUEwQjtBQUN0QkEsYUFBUyxDQUFDbEgsQ0FBVixHQUFjaEYsSUFBSSxDQUFDd1AsS0FBTCxDQUFXdEQsU0FBUyxDQUFDbEgsQ0FBckIsQ0FBZDtBQUNBa0gsYUFBUyxDQUFDakgsQ0FBVixHQUFjakYsSUFBSSxDQUFDd1AsS0FBTCxDQUFXdEQsU0FBUyxDQUFDakgsQ0FBckIsQ0FBZDtBQUNBaUgsYUFBUyxDQUFDN00sS0FBVixHQUFrQlcsSUFBSSxDQUFDd1AsS0FBTCxDQUFXdEQsU0FBUyxDQUFDN00sS0FBckIsQ0FBbEI7QUFDQTZNLGFBQVMsQ0FBQzVNLE1BQVYsR0FBbUJVLElBQUksQ0FBQ3dQLEtBQUwsQ0FBV3RELFNBQVMsQ0FBQzVNLE1BQXJCLENBQW5CO0FBQ0g7O0FBQ0QrUCxXQUFTLENBQUNHLEtBQVYsR0FBa0JBLEtBQWxCO0FBQ0gsQ0FoRUQsRUFnRUdILFNBQVMsS0FBS0EsU0FBUyxHQUFHLEVBQWpCLENBaEVaLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQSxJQUFNdEQsTUFBTSxHQUFHc0QsdURBQUEsRUFBZjtBQUNBLElBQU1JLFlBQVksR0FBR0osdURBQUEsRUFBckI7QUFDTyxJQUFJSyx5QkFBSjs7QUFDUCxDQUFDLFVBQVVBLHlCQUFWLEVBQXFDO0FBQ2xDLFdBQVMzTyxNQUFULENBQWdCcEQsS0FBaEIsRUFBdUJzQixNQUF2QixFQUErQjtBQUFBLFFBQ25CMFEsR0FEbUIsR0FDWGhTLEtBRFcsQ0FDbkJnUyxHQURtQjs7QUFFM0IsUUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTjtBQUNIOztBQUNELFFBQU03RyxRQUFRLEdBQUc3SixNQUFNLENBQUN1RSxTQUFQLENBQWlCK0QsR0FBakIsQ0FBcUJvSSxHQUFyQixDQUFqQjs7QUFDQSxRQUFJLEVBQUM3RyxRQUFELGFBQUNBLFFBQUQsZUFBQ0EsUUFBUSxDQUFFbkwsS0FBWCxDQUFKLEVBQXNCO0FBQ2xCO0FBQ0g7O0FBQ0QsUUFBTUwsT0FBTyxHQUFHMkIsTUFBTSxDQUFDK0IsUUFBUCxDQUFnQm5DLFVBQWhCLEVBQWhCO0FBVDJCLFFBVW5CcEMsY0FWbUIsR0FVQWEsT0FWQSxDQVVuQmIsY0FWbUI7O0FBVzNCLFFBQUlBLGNBQWMsQ0FBQ1AsZUFBZixJQUFrQyxDQUF0QyxFQUF5QztBQUNyQztBQUNIOztBQWIwQixRQWNuQjJCLE1BZG1CLEdBY1JQLE9BZFEsQ0FjbkJPLE1BZG1CO0FBZTNCLFFBQU15RixRQUFRLEdBQUdyRSxNQUFNLENBQUNxRSxRQUF4QjtBQUNBLFFBQU1zTSxTQUFTLEdBQUd0TSxRQUFRLENBQUN6RSxVQUFULEVBQWxCO0FBaEIyQiwwQkFpQkRpSyxRQUFRLENBQUNuTCxLQWpCUjtBQUFBLFFBaUJuQjBCLEtBakJtQixtQkFpQm5CQSxLQWpCbUI7QUFBQSxRQWlCWkMsTUFqQlksbUJBaUJaQSxNQWpCWTtBQWtCM0IsUUFBTTBGLENBQUMsR0FBR25CLGtEQUFBLENBQVdsRyxLQUFYLEVBQWtCMEIsS0FBbEIsQ0FBVjtBQUNBLFFBQU00RixDQUFDLEdBQUdwQixrREFBQSxDQUFXbEcsS0FBWCxFQUFrQjJCLE1BQWxCLENBQVY7O0FBQ0EsUUFBSTNELHVFQUFBLENBQWdDYyxjQUFoQyxDQUFKLEVBQXFEO0FBQ2pEbVQsZUFBUyxDQUFDclIsWUFBVixDQUF1QlYsTUFBTSxDQUFDbkMsQ0FBOUIsRUFBaUNtQyxNQUFNLENBQUNwQyxDQUF4QyxFQUEyQ29DLE1BQU0sQ0FBQ0ksQ0FBbEQsRUFBcURKLE1BQU0sQ0FBQ0ssQ0FBNUQsRUFBK0RMLE1BQU0sQ0FBQ08sRUFBdEUsRUFBMEVQLE1BQU0sQ0FBQ1MsRUFBakY7QUFDQXNSLGVBQVMsQ0FBQ0MsV0FBVixHQUF3QnBULGNBQWMsQ0FBQ1AsZUFBdkM7QUFDQTBULGVBQVMsQ0FBQ0UsU0FBVixDQUFvQmhILFFBQVEsQ0FBQ25MLEtBQTdCLEVBQW9DcUgsQ0FBcEMsRUFBdUNDLENBQXZDO0FBQ0gsS0FKRCxNQUtLO0FBQ0QsVUFBTThLLGFBQWEsR0FBR3pNLFFBQVEsQ0FBQzBNLG1CQUFULEVBQXRCO0FBQ0FqRSxZQUFNLENBQUMvRyxDQUFQLEdBQVdBLENBQVg7QUFDQStHLFlBQU0sQ0FBQzlHLENBQVAsR0FBV0EsQ0FBWDtBQUNBOEcsWUFBTSxDQUFDMU0sS0FBUCxHQUFlQSxLQUFmO0FBQ0EwTSxZQUFNLENBQUN6TSxNQUFQLEdBQWdCQSxNQUFoQjtBQUNBK0ksb0VBQUEsQ0FBdUJ4SyxNQUF2QixFQUErQmtPLE1BQS9CLEVBQXVDQSxNQUF2Qzs7QUFDQSxVQUFJc0QseURBQUEsQ0FBa0J0RCxNQUFsQixDQUFKLEVBQStCO0FBQzNCO0FBQ0g7O0FBQ0QwRCxrQkFBWSxDQUFDcFEsS0FBYixHQUFxQjBRLGFBQWEsQ0FBQzNRLE1BQWQsQ0FBcUJDLEtBQTFDO0FBQ0FvUSxrQkFBWSxDQUFDblEsTUFBYixHQUFzQnlRLGFBQWEsQ0FBQzNRLE1BQWQsQ0FBcUJFLE1BQTNDO0FBQ0ErUCxvRUFBQSxDQUF1QnRELE1BQXZCLEVBQStCMEQsWUFBL0IsRUFBNkMxRCxNQUE3Qzs7QUFDQSxVQUFJc0QseURBQUEsQ0FBa0J0RCxNQUFsQixDQUFKLEVBQStCO0FBQzNCO0FBQ0g7O0FBQ0RzRCw2REFBQSxDQUFnQnRELE1BQWhCO0FBQ0FnRSxtQkFBYSxDQUFDeFIsWUFBZDtBQUNBd1IsbUJBQWEsQ0FBQ3RRLFNBQWQsQ0FBd0JzTSxNQUFNLENBQUMvRyxDQUEvQixFQUFrQytHLE1BQU0sQ0FBQzlHLENBQXpDLEVBQTRDOEcsTUFBTSxDQUFDMU0sS0FBbkQsRUFBMEQwTSxNQUFNLENBQUN6TSxNQUFqRTtBQUNBeVEsbUJBQWEsQ0FBQ3hSLFlBQWQsQ0FBMkJWLE1BQU0sQ0FBQ25DLENBQWxDLEVBQXFDbUMsTUFBTSxDQUFDcEMsQ0FBNUMsRUFBK0NvQyxNQUFNLENBQUNJLENBQXRELEVBQXlESixNQUFNLENBQUNLLENBQWhFLEVBQW1FTCxNQUFNLENBQUNPLEVBQTFFLEVBQThFUCxNQUFNLENBQUNTLEVBQXJGO0FBQ0F5UixtQkFBYSxDQUFDRCxTQUFkLENBQXdCaEgsUUFBUSxDQUFDbkwsS0FBakMsRUFBd0NxSCxDQUF4QyxFQUEyQ0MsQ0FBM0M7QUFDQSxVQUFNZ0wsU0FBUyxHQUFHRixhQUFhLENBQUNHLFlBQWQsQ0FBMkJuRSxNQUFNLENBQUMvRyxDQUFsQyxFQUFxQytHLE1BQU0sQ0FBQzlHLENBQTVDLEVBQStDOEcsTUFBTSxDQUFDMU0sS0FBdEQsRUFBNkQwTSxNQUFNLENBQUN6TSxNQUFwRSxDQUFsQjtBQUNBLFVBQU02USxFQUFFLEdBQUcxVCxjQUFjLENBQUNiLGFBQTFCO0FBQ0EsVUFBTXdVLEVBQUUsR0FBRzNULGNBQWMsQ0FBQ1gsZUFBMUI7QUFDQSxVQUFNdVUsRUFBRSxHQUFHNVQsY0FBYyxDQUFDVCxjQUExQjtBQUNBLFVBQU1zVSxFQUFFLEdBQUc3VCxjQUFjLENBQUNQLGVBQTFCO0FBQ0EsVUFBTXFVLEVBQUUsR0FBRzlULGNBQWMsQ0FBQ1osU0FBMUI7QUFDQSxVQUFNMlUsRUFBRSxHQUFHL1QsY0FBYyxDQUFDVixXQUExQjtBQUNBLFVBQU0wVSxFQUFFLEdBQUdoVSxjQUFjLENBQUNSLFVBQTFCO0FBQ0EsVUFBTXlVLEVBQUUsR0FBR2pVLGNBQWMsQ0FBQ04sV0FBMUI7QUE3QkMsVUE4Qk93VSxJQTlCUCxHQThCZ0JWLFNBOUJoQixDQThCT1UsSUE5QlA7QUFBQSxVQStCT2hVLE1BL0JQLEdBK0JrQmdVLElBL0JsQixDQStCT2hVLE1BL0JQOztBQWdDRCxXQUFLLElBQUlELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdDLE1BQXBCLEdBQTZCO0FBQ3pCZ1UsWUFBSSxDQUFDalUsQ0FBRCxDQUFKLEdBQVVpVSxJQUFJLENBQUNqVSxDQUFDLEVBQUYsQ0FBSixHQUFZeVQsRUFBWixHQUFpQkksRUFBM0I7QUFDQUksWUFBSSxDQUFDalUsQ0FBRCxDQUFKLEdBQVVpVSxJQUFJLENBQUNqVSxDQUFDLEVBQUYsQ0FBSixHQUFZMFQsRUFBWixHQUFpQkksRUFBM0I7QUFDQUcsWUFBSSxDQUFDalUsQ0FBRCxDQUFKLEdBQVVpVSxJQUFJLENBQUNqVSxDQUFDLEVBQUYsQ0FBSixHQUFZMlQsRUFBWixHQUFpQkksRUFBM0I7QUFDQUUsWUFBSSxDQUFDalUsQ0FBRCxDQUFKLEdBQVVpVSxJQUFJLENBQUNqVSxDQUFDLEVBQUYsQ0FBSixHQUFZNFQsRUFBWixHQUFpQkksRUFBM0I7QUFDSDs7QUFDRFgsbUJBQWEsQ0FBQ2EsWUFBZCxDQUEyQlgsU0FBM0IsRUFBc0NsRSxNQUFNLENBQUMvRyxDQUE3QyxFQUFnRCtHLE1BQU0sQ0FBQzlHLENBQXZEO0FBQ0EySyxlQUFTLENBQUNyUixZQUFWO0FBQ0FxUixlQUFTLENBQUNDLFdBQVYsR0FBd0IsQ0FBeEI7QUFDQUQsZUFBUyxDQUFDRSxTQUFWLENBQW9CQyxhQUFhLENBQUMzUSxNQUFsQyxFQUEwQzJNLE1BQU0sQ0FBQy9HLENBQWpELEVBQW9EK0csTUFBTSxDQUFDOUcsQ0FBM0QsRUFBOEQ4RyxNQUFNLENBQUMxTSxLQUFyRSxFQUE0RTBNLE1BQU0sQ0FBQ3pNLE1BQW5GLEVBQTJGeU0sTUFBTSxDQUFDL0csQ0FBbEcsRUFBcUcrRyxNQUFNLENBQUM5RyxDQUE1RyxFQUErRzhHLE1BQU0sQ0FBQzFNLEtBQXRILEVBQTZIME0sTUFBTSxDQUFDek0sTUFBcEk7QUFDQWdFLGNBQVEsQ0FBQ3VOLG9CQUFULENBQThCZCxhQUE5QjtBQUNIO0FBQ0o7O0FBQ0RMLDJCQUF5QixDQUFDM08sTUFBMUIsR0FBbUNBLE1BQW5DOztBQUNBLFdBQVNpQixJQUFULENBQWMvQyxNQUFkLEVBQXNCO0FBQ2xCNlIsMkRBQUEsQ0FBb0I3UixNQUFwQjtBQUNBQSxVQUFNLENBQUNnRCxVQUFQLENBQWtCbEIsTUFBbEIsQ0FBeUJtQixHQUF6QixDQUE2QjZPLHlDQUE3QixFQUFvQ2hRLE1BQXBDO0FBQ0g7O0FBQ0QyTywyQkFBeUIsQ0FBQzFOLElBQTFCLEdBQWlDQSxJQUFqQztBQUNILENBN0VELEVBNkVHME4seUJBQXlCLEtBQUtBLHlCQUF5QixHQUFHLEVBQWpDLENBN0U1QixFOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNPLElBQUlzQixvQkFBSjs7QUFDUCxDQUFDLFVBQVVBLG9CQUFWLEVBQWdDO0FBQzdCLFdBQVNqUSxNQUFULENBQWdCcEQsS0FBaEIsRUFBdUJzQixNQUF2QixFQUErQjtBQUFBLFFBQ25CMFEsR0FEbUIsR0FDWGhTLEtBRFcsQ0FDbkJnUyxHQURtQjs7QUFFM0IsUUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTjtBQUNIOztBQUNELFFBQU03RyxRQUFRLEdBQUc3SixNQUFNLENBQUN1RSxTQUFQLENBQWlCK0QsR0FBakIsQ0FBcUJvSSxHQUFyQixDQUFqQjs7QUFDQSxRQUFJLEVBQUM3RyxRQUFELGFBQUNBLFFBQUQsZUFBQ0EsUUFBUSxDQUFFbkwsS0FBWCxDQUFKLEVBQXNCO0FBQ2xCO0FBQ0g7O0FBQ0QsUUFBTUwsT0FBTyxHQUFHMkIsTUFBTSxDQUFDK0IsUUFBUCxDQUFnQm5DLFVBQWhCLEVBQWhCO0FBVDJCLFFBVW5CcEMsY0FWbUIsR0FVQWEsT0FWQSxDQVVuQmIsY0FWbUI7O0FBVzNCLFFBQUlBLGNBQWMsQ0FBQ1AsZUFBZixJQUFrQyxDQUF0QyxFQUF5QztBQUNyQztBQUNIOztBQUNELFFBQU0wVCxTQUFTLEdBQUczUSxNQUFNLENBQUNxRSxRQUFQLENBQWdCekUsVUFBaEIsRUFBbEI7QUFkMkIsUUFlbkJoQixNQWZtQixHQWVSUCxPQWZRLENBZW5CTyxNQWZtQjtBQWdCM0IrUixhQUFTLENBQUNyUixZQUFWLENBQXVCVixNQUFNLENBQUNuQyxDQUE5QixFQUFpQ21DLE1BQU0sQ0FBQ3BDLENBQXhDLEVBQTJDb0MsTUFBTSxDQUFDSSxDQUFsRCxFQUFxREosTUFBTSxDQUFDSyxDQUE1RCxFQUErREwsTUFBTSxDQUFDTyxFQUF0RSxFQUEwRVAsTUFBTSxDQUFDUyxFQUFqRjtBQWhCMkIsMEJBaUJEd0ssUUFBUSxDQUFDbkwsS0FqQlI7QUFBQSxRQWlCbkIwQixLQWpCbUIsbUJBaUJuQkEsS0FqQm1CO0FBQUEsUUFpQlpDLE1BakJZLG1CQWlCWkEsTUFqQlk7QUFrQjNCLFFBQU0wRixDQUFDLEdBQUduQixrREFBQSxDQUFXbEcsS0FBWCxFQUFrQjBCLEtBQWxCLENBQVY7QUFDQSxRQUFNNEYsQ0FBQyxHQUFHcEIsa0RBQUEsQ0FBV2xHLEtBQVgsRUFBa0IyQixNQUFsQixDQUFWO0FBQ0FzUSxhQUFTLENBQUNDLFdBQVYsR0FBd0JwVCxjQUFjLENBQUNQLGVBQXZDO0FBQ0EwVCxhQUFTLENBQUNFLFNBQVYsQ0FBb0JoSCxRQUFRLENBQUNuTCxLQUE3QixFQUFvQ3FILENBQXBDLEVBQXVDQyxDQUF2QztBQUNIOztBQUNEK0wsc0JBQW9CLENBQUNqUSxNQUFyQixHQUE4QkEsTUFBOUI7O0FBQ0EsV0FBU2lCLElBQVQsQ0FBYy9DLE1BQWQsRUFBc0I7QUFDbEI2UiwyREFBQSxDQUFvQjdSLE1BQXBCO0FBQ0FBLFVBQU0sQ0FBQ2dELFVBQVAsQ0FBa0JsQixNQUFsQixDQUF5Qm1CLEdBQXpCLENBQTZCNk8seUNBQTdCLEVBQW9DaFEsTUFBcEM7QUFDSDs7QUFDRGlRLHNCQUFvQixDQUFDaFAsSUFBckIsR0FBNEJBLElBQTVCO0FBQ0gsQ0E5QkQsRUE4QkdnUCxvQkFBb0IsS0FBS0Esb0JBQW9CLEdBQUcsRUFBNUIsQ0E5QnZCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNPLElBQU1ELEtBQUssR0FBRyxPQUFkO0FBQ0EsSUFBSUUsS0FBSjs7QUFDUCxDQUFDLFVBQVVBLEtBQVYsRUFBaUI7QUFDZCxXQUFTQyxlQUFULENBQXlCdlQsS0FBekIsRUFBZ0NvTyxNQUFoQyxFQUF3QzlNLE1BQXhDLEVBQWdEO0FBQUEsUUFDcEMwUSxHQURvQyxHQUM1QmhTLEtBRDRCLENBQ3BDZ1MsR0FEb0M7O0FBRTVDLFFBQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ05OLGdFQUFBLENBQW1CdEQsTUFBbkI7QUFDQTtBQUNIOztBQUNELFFBQU1qRCxRQUFRLEdBQUc3SixNQUFNLENBQUN1RSxTQUFQLENBQWlCK0QsR0FBakIsQ0FBcUJvSSxHQUFyQixDQUFqQjs7QUFDQSxRQUFJLEVBQUM3RyxRQUFELGFBQUNBLFFBQUQsZUFBQ0EsUUFBUSxDQUFFbkwsS0FBWCxDQUFKLEVBQXNCO0FBQ2xCMFIsZ0VBQUEsQ0FBbUJ0RCxNQUFuQjtBQUNBO0FBQ0g7O0FBVjJDLDBCQVdsQmpELFFBQVEsQ0FBQ25MLEtBWFM7QUFBQSxRQVdwQzBCLEtBWG9DLG1CQVdwQ0EsS0FYb0M7QUFBQSxRQVc3QkMsTUFYNkIsbUJBVzdCQSxNQVg2QjtBQVk1QyxRQUFNMEYsQ0FBQyxHQUFHbkIsa0RBQUEsQ0FBV2xHLEtBQVgsRUFBa0IwQixLQUFsQixDQUFWO0FBQ0EsUUFBTTRGLENBQUMsR0FBR3BCLGtEQUFBLENBQVdsRyxLQUFYLEVBQWtCMkIsTUFBbEIsQ0FBVjtBQUNBeU0sVUFBTSxDQUFDL0csQ0FBUCxHQUFXQSxDQUFYO0FBQ0ErRyxVQUFNLENBQUM5RyxDQUFQLEdBQVdBLENBQVg7QUFDQThHLFVBQU0sQ0FBQzFNLEtBQVAsR0FBZUEsS0FBZjtBQUNBME0sVUFBTSxDQUFDek0sTUFBUCxHQUFnQkEsTUFBaEI7QUFDSDs7QUFDRDJSLE9BQUssQ0FBQ0MsZUFBTixHQUF3QkEsZUFBeEI7QUFDSCxDQXJCRCxFQXFCR0QsS0FBSyxLQUFLQSxLQUFLLEdBQUcsRUFBYixDQXJCUjs7QUFzQkEsSUFBTWxGLE1BQU0sR0FBR3NELHVEQUFBLEVBQWY7QUFDTyxJQUFJeUIsY0FBSjs7QUFDUCxDQUFDLFVBQVVBLGNBQVYsRUFBMEI7QUFDdkIsV0FBU3RQLE9BQVQsQ0FBaUI3RCxLQUFqQixFQUF3QnNCLE1BQXhCLEVBQWdDO0FBQUEsUUFDcEJpSixLQURvQixHQUNWakosTUFBTSxDQUFDd0MsUUFERyxDQUNwQnlHLEtBRG9CO0FBRTVCK0ksU0FBSyxDQUFDQyxlQUFOLENBQXNCdlQsS0FBdEIsRUFBNkJvTyxNQUE3QixFQUFxQzlNLE1BQXJDO0FBQ0EsUUFBSXNRLFFBQVEsR0FBR0YsMERBQUEsQ0FBbUJ0RCxNQUFuQixFQUEyQjdELEtBQTNCLENBQWY7O0FBQ0EsUUFBSXFILFFBQUosRUFBYztBQUNWLFVBQUk1UixLQUFLLENBQUN3VCxnQkFBVixFQUE0QjtBQUN4QixZQUFNckksUUFBUSxHQUFHN0osTUFBTSxDQUFDdUUsU0FBUCxDQUFpQitELEdBQWpCLENBQXFCNUosS0FBSyxDQUFDZ1MsR0FBM0IsQ0FBakI7O0FBQ0EsWUFBSTdHLFFBQUosYUFBSUEsUUFBSixlQUFJQSxRQUFRLENBQUVuTCxLQUFkLEVBQXFCO0FBQ2pCLGNBQU1xSCxDQUFDLEdBQUdrRCxLQUFLLENBQUNsRCxDQUFOLEdBQVUrRyxNQUFNLENBQUMvRyxDQUEzQjtBQUNBLGNBQU1DLENBQUMsR0FBR2lELEtBQUssQ0FBQ2pELENBQU4sR0FBVThHLE1BQU0sQ0FBQzlHLENBQTNCOztBQUNBLGNBQUk2RCxRQUFRLENBQUNuTCxLQUFULFlBQTBCeVQsaUJBQTlCLEVBQWlEO0FBQzdDLGdCQUFNQyxhQUFhLEdBQUd2SSxRQUFRLENBQUNuTCxLQUFULENBQWVrQixVQUFmLENBQTBCLElBQTFCLENBQXRCO0FBQ0EsZ0JBQU1vUixTQUFTLEdBQUdvQixhQUFhLENBQUNuQixZQUFkLENBQTJCbEwsQ0FBM0IsRUFBOEJDLENBQTlCLEVBQWlDLENBQWpDLEVBQW9DLENBQXBDLENBQWxCO0FBQ0FzSyxvQkFBUSxHQUFHVSxTQUFTLENBQUNVLElBQVYsQ0FBZSxDQUFmLElBQW9CLENBQS9CO0FBQ0gsV0FKRCxNQUtLO0FBQ0QsZ0JBQU1yTixRQUFRLEdBQUdyRSxNQUFNLENBQUNxRSxRQUF4QjtBQUNBLGdCQUFNeU0sYUFBYSxHQUFHek0sUUFBUSxDQUFDME0sbUJBQVQsRUFBdEI7QUFDQUQseUJBQWEsQ0FBQ3hSLFlBQWQ7QUFDQXdSLHlCQUFhLENBQUN0USxTQUFkLENBQXdCLENBQXhCLEVBQTJCLENBQTNCLEVBQThCLENBQTlCLEVBQWlDLENBQWpDO0FBQ0FzUSx5QkFBYSxDQUFDRCxTQUFkLENBQXdCaEgsUUFBUSxDQUFDbkwsS0FBakMsRUFBd0NxSCxDQUF4QyxFQUEyQ0MsQ0FBM0MsRUFBOEMsQ0FBOUMsRUFBaUQsQ0FBakQsRUFBb0QsQ0FBcEQsRUFBdUQsQ0FBdkQsRUFBMEQsQ0FBMUQsRUFBNkQsQ0FBN0Q7O0FBQ0EsZ0JBQU1nTCxVQUFTLEdBQUdGLGFBQWEsQ0FBQ0csWUFBZCxDQUEyQixDQUEzQixFQUE4QixDQUE5QixFQUFpQyxDQUFqQyxFQUFvQyxDQUFwQyxDQUFsQjs7QUFDQVgsb0JBQVEsR0FBR1UsVUFBUyxDQUFDVSxJQUFWLENBQWUsQ0FBZixJQUFvQixDQUEvQjtBQUNBck4sb0JBQVEsQ0FBQ3VOLG9CQUFULENBQThCZCxhQUE5QjtBQUNIO0FBQ0osU0FsQkQsTUFtQks7QUFDRFIsa0JBQVEsR0FBRyxLQUFYO0FBQ0g7QUFDSjtBQUNKOztBQUNELFdBQU9BLFFBQVA7QUFDSDs7QUFDRHVCLGdCQUFjLENBQUN0UCxPQUFmLEdBQXlCQSxPQUF6Qjs7QUFDQSxXQUFTSSxNQUFULENBQWdCakUsS0FBaEIsRUFBdUJzQixNQUF2QixFQUErQjtBQUMzQixRQUFNM0IsT0FBTyxHQUFHMkIsTUFBTSxDQUFDNEMsT0FBUCxDQUFlaEQsVUFBZixFQUFoQjtBQUQyQixRQUVuQjhRLEdBRm1CLEdBRVhoUyxLQUZXLENBRW5CZ1MsR0FGbUI7O0FBRzNCLFFBQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ05yUyxhQUFPLENBQUN3RSxRQUFSLEdBQW1CLENBQW5CO0FBQ0F4RSxhQUFPLENBQUNzRSxNQUFSLEdBQWlCLElBQWpCO0FBQ0E7QUFDSDs7QUFDRCxRQUFNa0gsUUFBUSxHQUFHN0osTUFBTSxDQUFDdUUsU0FBUCxDQUFpQitELEdBQWpCLENBQXFCb0ksR0FBckIsQ0FBakI7QUFDQXJTLFdBQU8sQ0FBQ3dFLFFBQVIsR0FBbUI4Ryw0REFBQSxDQUFxQkUsUUFBckIsQ0FBbkI7QUFDQXhMLFdBQU8sQ0FBQ3NFLE1BQVIsR0FBaUIsQ0FBQyxFQUFDa0gsUUFBRCxhQUFDQSxRQUFELGVBQUNBLFFBQVEsQ0FBRWxILE1BQVgsQ0FBRCxJQUFzQixDQUFDLEVBQUNrSCxRQUFELGFBQUNBLFFBQUQsZUFBQ0EsUUFBUSxDQUFFbkwsS0FBWCxDQUF4QztBQUNIOztBQUNEbVQsZ0JBQWMsQ0FBQ2xQLE1BQWYsR0FBd0JBLE1BQXhCOztBQUNBLFdBQVNJLElBQVQsQ0FBYy9DLE1BQWQsRUFBc0I7QUFDbEJBLFVBQU0sQ0FBQ2dELFVBQVAsQ0FBa0JULE9BQWxCLENBQTBCVSxHQUExQixDQUE4QjZPLEtBQTlCLEVBQXFDdlAsT0FBckM7QUFDQXZDLFVBQU0sQ0FBQ2dELFVBQVAsQ0FBa0JMLE1BQWxCLENBQXlCTSxHQUF6QixDQUE2QjZPLEtBQTdCLEVBQW9DblAsTUFBcEM7QUFDQTBQLG1FQUFBLENBQW1CclMsTUFBbkI7QUFDSDs7QUFDRDZSLGdCQUFjLENBQUM5TyxJQUFmLEdBQXNCQSxJQUF0QjtBQUNILENBdERELEVBc0RHOE8sY0FBYyxLQUFLQSxjQUFjLEdBQUcsRUFBdEIsQ0F0RGpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RPLElBQUlRLGFBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxhQUFWLEVBQXlCO0FBQ3RCLFdBQVNsSSxPQUFULENBQWlCRCxLQUFqQixFQUF3QmxLLE1BQXhCLEVBQWdDO0FBQzVCLFFBQU1zUyxTQUFTLEdBQUdwSSxLQUFLLENBQUNxSSxLQUFOLENBQVksR0FBWixFQUFpQnhTLEdBQWpCLEVBQWxCOztBQUNBLFlBQVF1UyxTQUFSO0FBQ0ksV0FBSyxLQUFMO0FBQ0EsV0FBSyxLQUFMO0FBQ0EsV0FBSyxNQUFMO0FBQ0ksWUFBTXpJLFFBQVEsR0FBRztBQUNiSyxlQUFLLEVBQUxBLEtBRGE7QUFFYnZILGdCQUFNLEVBQUUsS0FGSztBQUdib0gscUJBQVcsRUFBRSxDQUhBO0FBSWJELG9CQUFVLEVBQUU7QUFKQyxTQUFqQjtBQU1BLFlBQU1wTCxLQUFLLEdBQUdlLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0FoQixhQUFLLENBQUNnUyxHQUFOLEdBQVl4RyxLQUFaOztBQUNBeEwsYUFBSyxDQUFDOFQsTUFBTixHQUFlLFlBQU07QUFDakJ2SyxpQkFBTyxDQUFDQyxHQUFSLHlCQUE2QmdDLEtBQTdCO0FBQ0FMLGtCQUFRLENBQUNuTCxLQUFULEdBQWlCQSxLQUFqQjtBQUNBbUwsa0JBQVEsQ0FBQ2xILE1BQVQsR0FBa0IsSUFBbEI7QUFDSCxTQUpEOztBQUtBakUsYUFBSyxDQUFDK1QsT0FBTixHQUFnQixVQUFDdlQsQ0FBRCxFQUFPO0FBQ25CYyxnQkFBTSxDQUFDQyxLQUFQLENBQWFDLE9BQWIsQ0FBcUIsa0JBQXJCLEVBQXlDaEIsQ0FBekM7QUFDSCxTQUZEOztBQUdBLGVBQU8ySyxRQUFQOztBQUNKO0FBQ0k7QUF0QlI7O0FBd0JBLFdBQU8sSUFBUDtBQUNIOztBQUNEd0ksZUFBYSxDQUFDbEksT0FBZCxHQUF3QkEsT0FBeEI7O0FBQ0EsV0FBU3BILElBQVQsQ0FBYy9DLE1BQWQsRUFBc0I7QUFDbEJBLFVBQU0sQ0FBQ3VFLFNBQVAsQ0FBaUJ5RixTQUFqQixDQUEyQjBJLEdBQTNCLENBQStCdkksT0FBL0I7QUFDSDs7QUFDRGtJLGVBQWEsQ0FBQ3RQLElBQWQsR0FBcUJBLElBQXJCO0FBQ0gsQ0FsQ0QsRUFrQ0dzUCxhQUFhLEtBQUtBLGFBQWEsR0FBRyxFQUFyQixDQWxDaEIsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOzs7Ozs7Ozs7Ozs7OztBQ0FPLElBQUlNLGNBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxjQUFWLEVBQTBCO0FBQ3ZCLFdBQVN4SSxPQUFULENBQWlCRCxLQUFqQixFQUF3QmxLLE1BQXhCLEVBQWdDO0FBQzVCLFFBQU1zUyxTQUFTLEdBQUdwSSxLQUFLLENBQUNxSSxLQUFOLENBQVksR0FBWixFQUFpQnhTLEdBQWpCLEVBQWxCOztBQUNBLFlBQVF1UyxTQUFSO0FBQ0ksV0FBSyxLQUFMO0FBQ0EsV0FBSyxNQUFMO0FBQ0ksWUFBTXpJLFFBQVEsR0FBRztBQUNiSyxlQUFLLEVBQUxBLEtBRGE7QUFFYnZILGdCQUFNLEVBQUUsS0FGSztBQUdib0gscUJBQVcsRUFBRSxDQUhBO0FBSWJELG9CQUFVLEVBQUU7QUFKQyxTQUFqQjtBQU1BLFlBQU04SSxHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFaO0FBQ0FELFdBQUcsQ0FBQ0UsSUFBSixDQUFTLEtBQVQsRUFBZ0I1SSxLQUFoQixFQUF1QixJQUF2Qjs7QUFDQTBJLFdBQUcsQ0FBQ0csVUFBSixHQUFpQixVQUFDN1QsQ0FBRCxFQUFPO0FBQ3BCMkssa0JBQVEsQ0FBQ0UsV0FBVCxHQUF1QjdLLENBQUMsQ0FBQ3lELE1BQXpCO0FBQ0FrSCxrQkFBUSxDQUFDQyxVQUFULEdBQXNCNUssQ0FBQyxDQUFDOFQsS0FBeEI7QUFDSCxTQUhEOztBQUlBSixXQUFHLENBQUNKLE1BQUosR0FBYSxZQUFNO0FBQ2Z2SyxpQkFBTyxDQUFDQyxHQUFSLDBCQUE4QmdDLEtBQTlCO0FBQ0FMLGtCQUFRLENBQUM2SCxJQUFULEdBQWdCa0IsR0FBRyxDQUFDSyxZQUFwQjtBQUNBcEosa0JBQVEsQ0FBQ2xILE1BQVQsR0FBa0IsSUFBbEI7QUFDQWtILGtCQUFRLENBQUNFLFdBQVQsR0FBdUJGLFFBQVEsQ0FBQ0MsVUFBaEM7QUFDSCxTQUxEOztBQU1BOEksV0FBRyxDQUFDSCxPQUFKLEdBQWMsVUFBQ3ZULENBQUQsRUFBTztBQUNqQmMsZ0JBQU0sQ0FBQ0MsS0FBUCxDQUFhQyxPQUFiLENBQXFCLG1CQUFyQixFQUEwQ2hCLENBQTFDO0FBQ0gsU0FGRDs7QUFHQTBULFdBQUcsQ0FBQ00sSUFBSjtBQUNBLGVBQU9ySixRQUFQOztBQUNKO0FBQ0k7QUEzQlI7O0FBNkJBLFdBQU8sSUFBUDtBQUNIOztBQUNEOEksZ0JBQWMsQ0FBQ3hJLE9BQWYsR0FBeUJBLE9BQXpCOztBQUNBLFdBQVNwSCxJQUFULENBQWMvQyxNQUFkLEVBQXNCO0FBQ2xCQSxVQUFNLENBQUN1RSxTQUFQLENBQWlCeUYsU0FBakIsQ0FBMkIwSSxHQUEzQixDQUErQnZJLE9BQS9CO0FBQ0g7O0FBQ0R3SSxnQkFBYyxDQUFDNVAsSUFBZixHQUFzQkEsSUFBdEI7QUFDSCxDQXZDRCxFQXVDRzRQLGNBQWMsS0FBS0EsY0FBYyxHQUFHLEVBQXRCLENBdkNqQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ08sSUFBTVEsS0FBSyxHQUFHLE9BQWQ7QUFDQSxJQUFJQyxjQUFKOztBQUNQLENBQUMsVUFBVUEsY0FBVixFQUEwQjtBQUN2QixXQUFTelEsTUFBVCxDQUFnQjBRLEtBQWhCLEVBQXVCclQsTUFBdkIsRUFBK0I7QUFDM0IsUUFBTTNCLE9BQU8sR0FBRzJCLE1BQU0sQ0FBQzRDLE9BQVAsQ0FBZWhELFVBQWYsRUFBaEI7O0FBQ0EsUUFBSXlULEtBQUssQ0FBQzlSLFFBQVYsRUFBb0I7QUFDaEJNLHVFQUFBLENBQTBCd1IsS0FBMUIsRUFBaUNyVCxNQUFqQztBQUNILEtBRkQsTUFHSztBQUFBLFVBQ08wUSxHQURQLEdBQ2UyQyxLQURmLENBQ08zQyxHQURQOztBQUVELFVBQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ05yUyxlQUFPLENBQUN3RSxRQUFSLEdBQW1CLENBQW5CO0FBQ0F4RSxlQUFPLENBQUNzRSxNQUFSLEdBQWlCLElBQWpCO0FBQ0E7QUFDSDs7QUFDRCxVQUFNa0gsUUFBUSxHQUFHN0osTUFBTSxDQUFDdUUsU0FBUCxDQUFpQitELEdBQWpCLENBQXFCb0ksR0FBckIsQ0FBakI7QUFDQXJTLGFBQU8sQ0FBQ3dFLFFBQVIsR0FBbUI4Ryw0REFBQSxDQUFxQkUsUUFBckIsQ0FBbkI7QUFDQXhMLGFBQU8sQ0FBQ3NFLE1BQVIsR0FBaUIsQ0FBQyxFQUFDa0gsUUFBRCxhQUFDQSxRQUFELGVBQUNBLFFBQVEsQ0FBRWxILE1BQVgsQ0FBRCxJQUFzQixDQUFDLEVBQUNrSCxRQUFELGFBQUNBLFFBQUQsZUFBQ0EsUUFBUSxDQUFFNkgsSUFBWCxDQUF4Qzs7QUFDQSxVQUFJN0gsUUFBUSxJQUFJQSxRQUFRLENBQUM2SCxJQUF6QixFQUErQjtBQUMzQixZQUFJO0FBQ0EyQixlQUFLLENBQUM5UixRQUFOLEdBQWlCK1IsSUFBSSxDQUFDQyxLQUFMLENBQVcxSixRQUFRLENBQUM2SCxJQUFwQixDQUFqQjtBQUNILFNBRkQsQ0FHQSxPQUFPeFMsQ0FBUCxFQUFVO0FBQ05jLGdCQUFNLENBQUNDLEtBQVAsQ0FBYUMsT0FBYixnQ0FBNkNoQixDQUFDLENBQUNzVSxPQUEvQztBQUNIO0FBQ0o7QUFDSjtBQUNKOztBQUNESixnQkFBYyxDQUFDelEsTUFBZixHQUF3QkEsTUFBeEI7O0FBQ0EsV0FBU0ksSUFBVCxDQUFjL0MsTUFBZCxFQUFzQjtBQUNsQkEsVUFBTSxDQUFDZ0QsVUFBUCxDQUFrQlQsT0FBbEIsQ0FBMEJVLEdBQTFCLENBQThCa1EsS0FBOUIsRUFBcUN0UixrRUFBckM7QUFDQTdCLFVBQU0sQ0FBQ2dELFVBQVAsQ0FBa0JsQixNQUFsQixDQUF5Qm1CLEdBQXpCLENBQTZCa1EsS0FBN0IsRUFBb0N0UixpRUFBcEM7QUFDQTdCLFVBQU0sQ0FBQ2dELFVBQVAsQ0FBa0JaLE1BQWxCLENBQXlCYSxHQUF6QixDQUE2QmtRLEtBQTdCLEVBQW9DdFIsaUVBQXBDO0FBQ0E3QixVQUFNLENBQUNnRCxVQUFQLENBQWtCTCxNQUFsQixDQUF5Qk0sR0FBekIsQ0FBNkJrUSxLQUE3QixFQUFvQ3hRLE1BQXBDO0FBQ0FnUSxvRUFBQSxDQUFvQjNTLE1BQXBCO0FBQ0g7O0FBQ0RvVCxnQkFBYyxDQUFDclEsSUFBZixHQUFzQkEsSUFBdEI7QUFDSCxDQW5DRCxFQW1DR3FRLGNBQWMsS0FBS0EsY0FBYyxHQUFHLEVBQXRCLENBbkNqQixFOzs7Ozs7Ozs7Ozs7O0FDSkEsSUFBTUssSUFBSSxHQUFHMVMsSUFBSSxDQUFDMlMsRUFBTCxHQUFVLENBQXZCO0FBQ08sU0FBU0MsWUFBVCxDQUFzQmpDLElBQXRCLEVBQTRCa0MsT0FBNUIsRUFBcUN2VixPQUFyQyxFQUE4QztBQUFBLGdCQUNPcVQsSUFEUCxDQUN6QzNMLENBRHlDO0FBQUEsTUFDekNBLENBRHlDLHdCQUNyQyxDQURxQztBQUFBLGdCQUNPMkwsSUFEUCxDQUNsQzFMLENBRGtDO0FBQUEsTUFDbENBLENBRGtDLHdCQUM5QixDQUQ4QjtBQUFBLHFCQUNPMEwsSUFEUCxDQUMzQm1DLE1BRDJCO0FBQUEsTUFDM0JBLE1BRDJCLDZCQUNsQixDQURrQjtBQUFBLE1BQ2ZDLE9BRGUsR0FDT3BDLElBRFAsQ0FDZm9DLE9BRGU7QUFBQSxNQUNOQyxPQURNLEdBQ09yQyxJQURQLENBQ05xQyxPQURNO0FBRWpELE1BQU14RixFQUFFLEdBQUd1RixPQUFILGFBQUdBLE9BQUgsY0FBR0EsT0FBSCxHQUFjRCxNQUF0QjtBQUNBLE1BQU1yRixFQUFFLEdBQUd1RixPQUFILGFBQUdBLE9BQUgsY0FBR0EsT0FBSCxHQUFjRixNQUF0Qjs7QUFDQSxNQUFJdEYsRUFBRSxLQUFLLENBQVAsSUFBWUMsRUFBRSxLQUFLLENBQXZCLEVBQTBCO0FBQ3RCLFdBQU8sS0FBUDtBQUNIOztBQUNEblEsU0FBTyxDQUFDMlYsU0FBUjtBQUNBM1YsU0FBTyxDQUFDNFYsT0FBUixDQUFnQmxPLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQnVJLEVBQXRCLEVBQTBCQyxFQUExQixFQUE4QixDQUE5QixFQUFpQyxDQUFqQyxFQUFvQ2lGLElBQXBDOztBQUNBLE1BQUlHLE9BQUosRUFBYTtBQUNUdlYsV0FBTyxDQUFDNlYsU0FBUjtBQUNIOztBQUNELFNBQU8sSUFBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7O0FDZE0sU0FBU0MsWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0IvVixPQUEvQixFQUF3QztBQUFBOztBQUFBLE1BQ25DcUQsSUFEbUMsR0FDMUIwUyxPQUQwQixDQUNuQzFTLElBRG1DOztBQUUzQyxVQUFRQSxJQUFSO0FBQ0ksU0FBSyxRQUFMO0FBQ0ksVUFBTTJTLE1BQU0sR0FBR0QsT0FBZjtBQUNBL1YsYUFBTyxDQUFDZ1csTUFBUixjQUFlQSxNQUFNLENBQUN0TyxDQUF0QixpREFBMkIsQ0FBM0IsZUFBOEJzTyxNQUFNLENBQUNyTyxDQUFyQyxpREFBMEMsQ0FBMUM7QUFDQTs7QUFDSixTQUFLLFFBQUw7QUFDSSxVQUFNc08sTUFBTSxHQUFHRixPQUFmO0FBQ0EvVixhQUFPLENBQUNpVyxNQUFSLGNBQWVBLE1BQU0sQ0FBQ3ZPLENBQXRCLGlEQUEyQixDQUEzQixlQUE4QnVPLE1BQU0sQ0FBQ3RPLENBQXJDLGlEQUEwQyxDQUExQztBQUNBOztBQUNKLFNBQUssU0FBTDtBQUNJLFVBQU11TyxPQUFPLEdBQUdILE9BQWhCO0FBQ0EvVixhQUFPLENBQUNtVyxnQkFBUixnQkFBeUJELE9BQU8sQ0FBQ0UsRUFBakMscURBQXVDLENBQXZDLGlCQUEwQ0YsT0FBTyxDQUFDRyxFQUFsRCxxREFBd0QsQ0FBeEQsZ0JBQTJESCxPQUFPLENBQUN4TyxDQUFuRSxtREFBd0UsQ0FBeEUsZ0JBQTJFd08sT0FBTyxDQUFDdk8sQ0FBbkYsbURBQXdGLENBQXhGO0FBQ0E7O0FBQ0osU0FBSyxjQUFMO0FBQ0ksVUFBTTJPLFlBQVksR0FBR1AsT0FBckI7QUFDQS9WLGFBQU8sQ0FBQ3VXLGFBQVIscUJBQXNCRCxZQUFZLENBQUNGLEVBQW5DLCtEQUF5QyxDQUF6QyxzQkFBNENFLFlBQVksQ0FBQ0QsRUFBekQsK0RBQStELENBQS9ELHNCQUFrRUMsWUFBWSxDQUFDRSxFQUEvRSwrREFBcUYsQ0FBckYsc0JBQXdGRixZQUFZLENBQUNHLEVBQXJHLCtEQUEyRyxDQUEzRyxxQkFBOEdILFlBQVksQ0FBQzVPLENBQTNILDZEQUFnSSxDQUFoSSxxQkFBbUk0TyxZQUFZLENBQUMzTyxDQUFoSiw2REFBcUosQ0FBcko7QUFDQTs7QUFDSjtBQUNJO0FBbEJSO0FBb0JIO0FBQ00sU0FBUytPLFNBQVQsQ0FBbUJyRCxJQUFuQixFQUF5QmtDLE9BQXpCLEVBQWtDdlYsT0FBbEMsRUFBMkM7QUFDOUMsTUFBSSxDQUFDcVQsSUFBSSxDQUFDaFUsTUFBVixFQUFrQjtBQUNkLFdBQU8sS0FBUDtBQUNIOztBQUNEVyxTQUFPLENBQUMyVixTQUFSOztBQUNBLE9BQUssSUFBSXZXLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdpVSxJQUFJLENBQUNoVSxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxRQUFNMlcsT0FBTyxHQUFHMUMsSUFBSSxDQUFDalUsQ0FBRCxDQUFwQjtBQUNBMFcsZ0JBQVksQ0FBQ0MsT0FBRCxFQUFVL1YsT0FBVixDQUFaO0FBQ0g7O0FBQ0QsTUFBSXVWLE9BQUosRUFBYTtBQUNUdlYsV0FBTyxDQUFDNlYsU0FBUjtBQUNIOztBQUNELFNBQU8sSUFBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUNwQ00sU0FBU2MsY0FBVCxDQUF3QnRELElBQXhCLEVBQThCa0MsT0FBOUIsRUFBdUN2VixPQUF2QyxFQUFnRDtBQUFBLGdCQUNGcVQsSUFERSxDQUMzQzNMLENBRDJDO0FBQUEsTUFDM0NBLENBRDJDLHdCQUN2QyxDQUR1QztBQUFBLGdCQUNGMkwsSUFERSxDQUNwQzFMLENBRG9DO0FBQUEsTUFDcENBLENBRG9DLHdCQUNoQyxDQURnQztBQUFBLG9CQUNGMEwsSUFERSxDQUM3QnRSLEtBRDZCO0FBQUEsTUFDN0JBLEtBRDZCLDRCQUNyQixDQURxQjtBQUFBLHFCQUNGc1IsSUFERSxDQUNsQnJSLE1BRGtCO0FBQUEsTUFDbEJBLE1BRGtCLDZCQUNULENBRFM7O0FBRW5ELE1BQUlELEtBQUssS0FBSyxDQUFWLElBQWVDLE1BQU0sS0FBSyxDQUE5QixFQUFpQztBQUM3QixXQUFPLEtBQVA7QUFDSDs7QUFDRGhDLFNBQU8sQ0FBQzJWLFNBQVI7QUFDQTNWLFNBQU8sQ0FBQzRXLElBQVIsQ0FBYWxQLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CNUYsS0FBbkIsRUFBMEJDLE1BQTFCOztBQUNBLE1BQUl1VCxPQUFKLEVBQWE7QUFDVHZWLFdBQU8sQ0FBQzZWLFNBQVI7QUFDSDs7QUFDRCxTQUFPLElBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNcEgsTUFBTSxHQUFHc0QsdURBQUEsRUFBZjtBQUNBLElBQU03SSxNQUFNLEdBQUd5QixtREFBQSxFQUFmOztBQUNBLFNBQVNrTSxjQUFULENBQXdCeEQsSUFBeEIsRUFBOEJsVSxjQUE5QixFQUE4Q2EsT0FBOUMsRUFBdUQyQixNQUF2RCxFQUErRDtBQUFBLE1BQ25EbVYsSUFEbUQsR0FDbEN6RCxJQURrQyxDQUNuRHlELElBRG1EO0FBQUEsTUFDN0NDLE1BRDZDLEdBQ2xDMUQsSUFEa0MsQ0FDN0MwRCxNQUQ2QztBQUUzRCxNQUFNeEIsT0FBTyxHQUFHLENBQUMsQ0FBQ3VCLElBQUYsSUFBVUEsSUFBSSxLQUFLLENBQW5DO0FBQ0EsTUFBTUUsU0FBUyxHQUFHLENBQUMsQ0FBQ0QsTUFBRixJQUFZQSxNQUFNLEtBQUssQ0FBekM7O0FBQ0EsTUFBSSxDQUFDeEIsT0FBRCxJQUFZLENBQUN5QixTQUFqQixFQUE0QjtBQUN4QjtBQUNIOztBQUNELE1BQUlDLEtBQUssR0FBRyxJQUFaO0FBUDJELE1BUW5ENVQsSUFSbUQsR0FRMUNnUSxJQVIwQyxDQVFuRGhRLElBUm1EOztBQVMzRCxVQUFRQSxJQUFSO0FBQ0ksU0FBSyxXQUFMO0FBQ0k0VCxXQUFLLEdBQUdOLDBEQUFjLENBQUN0RCxJQUFELEVBQU9rQyxPQUFQLEVBQWdCdlYsT0FBaEIsQ0FBdEI7QUFDQTs7QUFDSixTQUFLLFNBQUw7QUFDSWlYLFdBQUssR0FBRzNCLHNEQUFZLENBQUNqQyxJQUFELEVBQU9rQyxPQUFQLEVBQWdCdlYsT0FBaEIsQ0FBcEI7QUFDQTs7QUFDSixTQUFLLE1BQUw7QUFDSSxVQUFNa1gsSUFBSSxHQUFHN0QsSUFBYjs7QUFDQSxVQUFJLE9BQU82RCxJQUFJLENBQUM3RCxJQUFaLEtBQXFCLFFBQXpCLEVBQW1DO0FBQy9CNEQsYUFBSyxHQUFHRSxvREFBVyxDQUFDRCxJQUFJLENBQUM3RCxJQUFOLEVBQVlrQyxPQUFaLEVBQXFCdlYsT0FBckIsQ0FBbkI7QUFDSCxPQUZELE1BR0ssSUFBSW1ELEtBQUssQ0FBQ0MsT0FBTixDQUFjOFQsSUFBSSxDQUFDN0QsSUFBbkIsQ0FBSixFQUE4QjtBQUMvQjRELGFBQUssR0FBR1AsZ0RBQVMsQ0FBQ1EsSUFBSSxDQUFDN0QsSUFBTixFQUFZa0MsT0FBWixFQUFxQnZWLE9BQXJCLENBQWpCO0FBQ0gsT0FGSSxNQUdBO0FBQ0RpWCxhQUFLLEdBQUcsS0FBUjtBQUNIOztBQUNEOztBQUNKO0FBQ0k7QUFwQlI7O0FBc0JBLE1BQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1I7QUFDSDs7QUFDRCxNQUFJMUIsT0FBSixFQUFhO0FBQ1Q2Qix3REFBWSxDQUFDTixJQUFELEVBQU8zWCxjQUFQLEVBQXVCYSxPQUF2QixFQUFnQzJCLE1BQWhDLENBQVo7QUFDQTNCLFdBQU8sQ0FBQzhXLElBQVI7QUFDSDs7QUFDRCxNQUFJRSxTQUFKLEVBQWU7QUFDWEssMERBQWMsQ0FBQ04sTUFBRCxFQUFTNVgsY0FBVCxFQUF5QmEsT0FBekIsRUFBa0MyQixNQUFsQyxDQUFkO0FBQ0EzQixXQUFPLENBQUMrVyxNQUFSO0FBQ0g7QUFDSjs7QUFDTSxJQUFJTyxvQkFBSjs7QUFDUCxDQUFDLFVBQVVBLG9CQUFWLEVBQWdDO0FBQzdCLFdBQVM3VCxNQUFULENBQWdCOFQsS0FBaEIsRUFBdUI1VixNQUF2QixFQUErQjtBQUFBLFFBQ25CMFIsSUFEbUIsR0FDVmtFLEtBRFUsQ0FDbkJsRSxJQURtQjs7QUFFM0IsUUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUDtBQUNIOztBQUNELFFBQU1yVCxPQUFPLEdBQUcyQixNQUFNLENBQUMrQixRQUFQLENBQWdCbkMsVUFBaEIsRUFBaEI7QUFMMkIsUUFNbkJwQyxjQU5tQixHQU1BYSxPQU5BLENBTW5CYixjQU5tQjs7QUFPM0IsUUFBSUEsY0FBYyxDQUFDUCxlQUFmLElBQWtDLENBQXRDLEVBQXlDO0FBQ3JDO0FBQ0g7O0FBQ0QrTCwwREFBQSxDQUFlekIsTUFBZjs7QUFDQSxRQUFJM0MsdURBQUEsQ0FBZ0JnUixLQUFoQixDQUFKLEVBQTRCO0FBQ3hCQywrREFBQSxDQUFzQkQsS0FBdEIsRUFBNkI5SSxNQUE3Qjs7QUFDQSxVQUFJc0QseURBQUEsQ0FBa0J0RCxNQUFsQixDQUFKLEVBQStCO0FBQzNCO0FBQ0g7O0FBQ0R2RixZQUFNLENBQUN4QixDQUFQLEdBQVduQixrREFBQSxDQUFXZ1IsS0FBWCxFQUFrQjlJLE1BQU0sQ0FBQzFNLEtBQXpCLENBQVg7QUFDQW1ILFlBQU0sQ0FBQ3ZCLENBQVAsR0FBV3BCLGtEQUFBLENBQVdnUixLQUFYLEVBQWtCOUksTUFBTSxDQUFDMU0sS0FBekIsQ0FBWDtBQUNIOztBQUNELFFBQU11USxTQUFTLEdBQUczUSxNQUFNLENBQUNxRSxRQUFQLENBQWdCekUsVUFBaEIsRUFBbEI7QUFDQStRLGFBQVMsQ0FBQ0MsV0FBVixHQUF3QixDQUF4QjtBQXBCMkIsUUFxQm5CaFMsTUFyQm1CLEdBcUJSUCxPQXJCUSxDQXFCbkJPLE1BckJtQjs7QUFzQjNCLFFBQUlvSyxxREFBQSxDQUFjekIsTUFBZCxDQUFKLEVBQTJCO0FBQ3ZCNkIsd0VBQUEsQ0FBMkJ4SyxNQUEzQixFQUFtQzJJLE1BQW5DLEVBQTJDQSxNQUEzQztBQUNIOztBQUNEb0osYUFBUyxDQUFDclIsWUFBVixDQUF1QlYsTUFBTSxDQUFDbkMsQ0FBOUIsRUFBaUNtQyxNQUFNLENBQUNwQyxDQUF4QyxFQUEyQ29DLE1BQU0sQ0FBQ0ksQ0FBbEQsRUFBcURKLE1BQU0sQ0FBQ0ssQ0FBNUQsRUFBK0RMLE1BQU0sQ0FBQ08sRUFBUCxHQUFZb0ksTUFBTSxDQUFDeEIsQ0FBbEYsRUFBcUZuSCxNQUFNLENBQUNTLEVBQVAsR0FBWWtJLE1BQU0sQ0FBQ3ZCLENBQXhHOztBQUNBLFFBQUl4RSxLQUFLLENBQUNDLE9BQU4sQ0FBY2lRLElBQWQsQ0FBSixFQUF5QjtBQUNyQixXQUFLLElBQUlqVSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaVUsSUFBSSxDQUFDaFUsTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDbEN5WCxzQkFBYyxDQUFDeEQsSUFBSSxDQUFDalUsQ0FBRCxDQUFMLEVBQVVELGNBQVYsRUFBMEJtVCxTQUExQixFQUFxQzNRLE1BQXJDLENBQWQ7QUFDSDtBQUNKLEtBSkQsTUFLSyxJQUFJLFFBQU8wUixJQUFQLE1BQWdCLFFBQXBCLEVBQThCO0FBQy9Cd0Qsb0JBQWMsQ0FBQ3hELElBQUQsRUFBT2xVLGNBQVAsRUFBdUJtVCxTQUF2QixFQUFrQzNRLE1BQWxDLENBQWQ7QUFDSDtBQUNKOztBQUNEMlYsc0JBQW9CLENBQUM3VCxNQUFyQixHQUE4QkEsTUFBOUI7O0FBQ0EsV0FBU2lCLElBQVQsQ0FBYy9DLE1BQWQsRUFBc0I7QUFDbEI4ViwyREFBQSxDQUFvQjlWLE1BQXBCO0FBQ0FBLFVBQU0sQ0FBQ2dELFVBQVAsQ0FBa0JsQixNQUFsQixDQUF5Qm1CLEdBQXpCLENBQTZCOFMseUNBQTdCLEVBQW9DalUsTUFBcEM7QUFDSDs7QUFDRDZULHNCQUFvQixDQUFDNVMsSUFBckIsR0FBNEJBLElBQTVCO0FBQ0gsQ0ExQ0QsRUEwQ0c0UyxvQkFBb0IsS0FBS0Esb0JBQW9CLEdBQUcsRUFBNUIsQ0ExQ3ZCLEU7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQ0EsSUFBTUssTUFBTSxHQUFHLElBQUlDLDhEQUFKLEVBQWY7QUFDTyxTQUFTVCxXQUFULENBQXFCOUQsSUFBckIsRUFBMkJrQyxPQUEzQixFQUFvQ3ZWLE9BQXBDLEVBQTZDO0FBQ2hELE1BQUksQ0FBQ3FULElBQUksQ0FBQ2hVLE1BQVYsRUFBa0I7QUFDZCxXQUFPLEtBQVA7QUFDSDs7QUFDRFcsU0FBTyxDQUFDMlYsU0FBUjtBQUNBZ0MsUUFBTSxDQUFDRSxPQUFQLENBQWV4RSxJQUFmOztBQUNBLFNBQU9zRSxNQUFNLENBQUNHLFFBQVAsRUFBUCxFQUEwQjtBQUN0QixRQUFNL0IsT0FBTyxHQUFHNEIsTUFBTSxDQUFDSSxVQUFQLEVBQWhCOztBQUNBLFFBQUloQyxPQUFKLEVBQWE7QUFDVEQseURBQVksQ0FBQ0MsT0FBRCxFQUFVL1YsT0FBVixDQUFaO0FBQ0g7QUFDSjs7QUFDRCxNQUFJdVYsT0FBSixFQUFhO0FBQ1R2VixXQUFPLENBQUM2VixTQUFSO0FBQ0g7O0FBQ0QsU0FBTyxJQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJEO0FBQ0E7QUFDQSxJQUFNbUMsVUFBVSxHQUFHLEVBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHbE4sb0RBQUEsRUFBcEI7O0FBQ0EsU0FBU21OLGdCQUFULENBQTBCcEIsSUFBMUIsRUFBZ0MzWCxjQUFoQyxFQUFnRGEsT0FBaEQsRUFBeUQyQixNQUF6RCxFQUFpRTtBQUFBOztBQUM3RCxNQUFJLE9BQU9tVixJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzFCLFdBQU9sWiw0RUFBQSxDQUE0QmtaLElBQTVCLEVBQWtDLENBQWxDLEVBQXFDM1gsY0FBckMsQ0FBUDtBQUNIOztBQUNELE1BQUksUUFBTzJYLElBQVAsTUFBZ0IsUUFBcEIsRUFBOEI7QUFDMUIsWUFBUUEsSUFBSSxDQUFDelQsSUFBYjtBQUNJLFdBQUssT0FBTDtBQUNJLFlBQU04VSxLQUFLLEdBQUdyQixJQUFkO0FBQ0EsZUFBT2xaLDRFQUFBLGlCQUE0QnVhLEtBQUssQ0FBQ3JhLEtBQWxDLHVEQUEyQyxDQUEzQyxrQkFBOENxYSxLQUFLLENBQUNwYSxLQUFwRCx1REFBNkQsQ0FBN0QsRUFBZ0VvQixjQUFoRSxDQUFQOztBQUNKLFdBQUssUUFBTDtBQUNJLFlBQU1pWixNQUFNLEdBQUd0QixJQUFmO0FBQ0EsZUFBT2xaLHFGQUFBLG1CQUFxQ3dhLE1BQU0sQ0FBQzFZLE1BQTVDLDJEQUFzRCxDQUF0RCxvQkFBeUQwWSxNQUFNLENBQUN6WSxNQUFoRSwyREFBMEUsQ0FBMUUsa0JBQTZFeVksTUFBTSxDQUFDdlksSUFBcEYsdURBQTRGLENBQTVGLGtCQUErRnVZLE1BQU0sQ0FBQ3RZLElBQXRHLHVEQUE4RyxDQUE5RyxvQkFBaUhzWSxNQUFNLENBQUNwWixNQUF4SCwyREFBa0lnWixVQUFsSSxvQkFBOElJLE1BQU0sQ0FBQ25aLE1BQXJKLDJEQUErSitZLFVBQS9KLG9CQUEyS0ksTUFBTSxDQUFDbFosTUFBbEwsMkRBQTRMOFksVUFBNUwsRUFBd003WSxjQUF4TSxFQUF3TmEsT0FBeE4sQ0FBUDs7QUFDSixXQUFLLFFBQUw7QUFDSSxZQUFNcVksTUFBTSxHQUFHdkIsSUFBZjtBQUNBLGVBQU9sWixxRkFBQSxtQkFBcUN5YSxNQUFNLENBQUMzWSxNQUE1QywyREFBc0QsQ0FBdEQsb0JBQXlEMlksTUFBTSxDQUFDMVksTUFBaEUsMkRBQTBFLENBQTFFLHlCQUE2RTBZLE1BQU0sQ0FBQ3pZLFdBQXBGLHFFQUFtRyxDQUFuRywwQkFBc0d5WSxNQUFNLENBQUN4WSxJQUE3Ryx1REFBcUh3WSxNQUFNLENBQUMzWSxNQUE1SCx1Q0FBc0ksQ0FBdEksMkJBQXlJMlksTUFBTSxDQUFDdlksSUFBaEosdURBQXdKdVksTUFBTSxDQUFDMVksTUFBL0oseUNBQXlLLENBQXpLLHVCQUE0SzBZLE1BQU0sQ0FBQ3RZLFNBQW5MLGlFQUFnTSxDQUFoTSxvQkFBbU1zWSxNQUFNLENBQUNyWixNQUExTSwyREFBb05nWixVQUFwTixvQkFBZ09LLE1BQU0sQ0FBQ3BaLE1BQXZPLDJEQUFpUCtZLFVBQWpQLG9CQUE2UEssTUFBTSxDQUFDblosTUFBcFEsMkRBQThROFksVUFBOVEsRUFBMFI3WSxjQUExUixFQUEwU2EsT0FBMVMsQ0FBUDs7QUFDSixXQUFLLFFBQUw7QUFDSSxZQUFNc1ksVUFBVSxHQUFHeEIsSUFBbkI7QUFESixpQ0FFeUR3QixVQUZ6RCxDQUVZaFksTUFGWjtBQUFBLFlBRVlBLE1BRlosbUNBRXFCLElBRnJCO0FBQUEsWUFFMkIrUixHQUYzQixHQUV5RGlHLFVBRnpELENBRTJCakcsR0FGM0I7QUFBQSxpQ0FFeURpRyxVQUZ6RCxDQUVnQy9YLE1BRmhDO0FBQUEsWUFFZ0NBLE1BRmhDLG1DQUV5QzBYLFdBRnpDOztBQUdJLFlBQUksQ0FBQzVGLEdBQUwsRUFBVTtBQUNOLGlCQUFPLEVBQVA7QUFDSDs7QUFDRCxZQUFNN0csUUFBUSxHQUFHN0osTUFBTSxDQUFDdUUsU0FBUCxDQUFpQitELEdBQWpCLENBQXFCb0ksR0FBckIsQ0FBakI7O0FBQ0EsWUFBSTdHLFFBQUosYUFBSUEsUUFBSixlQUFJQSxRQUFRLENBQUVuTCxLQUFkLEVBQXFCO0FBQ2pCLGNBQU10QixPQUFPLEdBQUduQiw2RUFBQSxDQUE2QjROLFFBQVEsQ0FBQ25MLEtBQXRDLEVBQTZDQyxNQUE3QyxFQUFxREMsTUFBckQsRUFBNkRQLE9BQTdELENBQWhCO0FBQ0EsaUJBQU9qQixPQUFQO0FBQ0g7O0FBQ0QsZUFBTyxFQUFQOztBQUNKO0FBQ0ksZUFBTyxFQUFQO0FBdkJSO0FBeUJIOztBQUNELFNBQU8sRUFBUDtBQUNIOztBQUNNLFNBQVNxWSxZQUFULENBQXNCTixJQUF0QixFQUE0QjNYLGNBQTVCLEVBQTRDYSxPQUE1QyxFQUFxRDJCLE1BQXJELEVBQTZEO0FBQ2hFM0IsU0FBTyxDQUFDdVksU0FBUixHQUFvQkwsZ0JBQWdCLENBQUNwQixJQUFELEVBQU8zWCxjQUFQLEVBQXVCYSxPQUF2QixFQUFnQzJCLE1BQWhDLENBQXBDO0FBQ0g7QUFDTSxTQUFTMFYsY0FBVCxDQUF3Qk4sTUFBeEIsRUFBZ0M1WCxjQUFoQyxFQUFnRGEsT0FBaEQsRUFBeUQyQixNQUF6RCxFQUFpRTtBQUNwRSxNQUFJLE9BQU9vVixNQUFQLEtBQWtCLFFBQXRCLEVBQWdDO0FBQzVCL1csV0FBTyxDQUFDd1ksV0FBUixHQUFzQjVhLDRFQUFBLENBQTRCbVosTUFBNUIsRUFBb0MsQ0FBcEMsRUFBdUM1WCxjQUF2QyxDQUF0QjtBQUNBYSxXQUFPLENBQUN5WSxTQUFSLEdBQW9CLENBQXBCO0FBQ0F6WSxXQUFPLENBQUMwWSxPQUFSLEdBQWtCLE9BQWxCO0FBQ0ExWSxXQUFPLENBQUMyWSxRQUFSLEdBQW1CLE9BQW5CO0FBQ0EzWSxXQUFPLENBQUM0WSxVQUFSLEdBQXFCLEVBQXJCO0FBQ0gsR0FORCxNQU9LLElBQUksUUFBTzdCLE1BQVAsTUFBa0IsUUFBbEIsSUFBOEJBLE1BQU0sQ0FBQ0QsSUFBUCxLQUFnQi9OLFNBQWxELEVBQTZEO0FBQUE7O0FBQzlEL0ksV0FBTyxDQUFDd1ksV0FBUixHQUFzQk4sZ0JBQWdCLENBQUNuQixNQUFNLENBQUNELElBQVIsRUFBYzNYLGNBQWQsRUFBOEJhLE9BQTlCLEVBQXVDMkIsTUFBdkMsQ0FBdEM7QUFDQTNCLFdBQU8sQ0FBQ3lZLFNBQVIsd0JBQW9CMUIsTUFBTSxDQUFDdEYsU0FBM0IsaUVBQXdDLENBQXhDO0FBQ0F6UixXQUFPLENBQUMwWSxPQUFSLG1CQUFrQjNCLE1BQU0sQ0FBQzhCLElBQXpCLHVEQUFpQyxPQUFqQztBQUNBN1ksV0FBTyxDQUFDMlksUUFBUixxQkFBbUI1QixNQUFNLENBQUMrQixNQUExQiwyREFBb0MsT0FBcEM7QUFDQTlZLFdBQU8sQ0FBQzRZLFVBQVIseUJBQXFCN0IsTUFBTSxDQUFDNkIsVUFBNUIsbUVBQTBDLEVBQTFDO0FBQ0g7QUFDSixDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZERDtBQUNBO0FBQ0E7QUFDTyxJQUFJRyxhQUFKOztBQUNQLENBQUMsVUFBVUEsYUFBVixFQUF5QjtBQUN0QixXQUFTbkYsZUFBVCxDQUF5QlAsSUFBekIsRUFBK0I1RSxNQUEvQixFQUF1QztBQUFBLGtCQUNjNEUsSUFEZCxDQUMzQjNMLENBRDJCO0FBQUEsUUFDM0JBLENBRDJCLHdCQUN2QixDQUR1QjtBQUFBLGtCQUNjMkwsSUFEZCxDQUNwQjFMLENBRG9CO0FBQUEsUUFDcEJBLENBRG9CLHdCQUNoQixDQURnQjtBQUFBLHNCQUNjMEwsSUFEZCxDQUNidFIsS0FEYTtBQUFBLFFBQ2JBLEtBRGEsNEJBQ0wsQ0FESztBQUFBLHVCQUNjc1IsSUFEZCxDQUNGclIsTUFERTtBQUFBLFFBQ0ZBLE1BREUsNkJBQ08sQ0FEUDtBQUVuQytMLHVEQUFBLENBQVlVLE1BQVosRUFBb0IvRyxDQUFwQixFQUF1QkMsQ0FBdkI7QUFDQW9HLHVEQUFBLENBQVlVLE1BQVosRUFBb0IvRyxDQUFDLEdBQUczRixLQUF4QixFQUErQjRGLENBQUMsR0FBRzNGLE1BQW5DO0FBQ0g7O0FBQ0QrVyxlQUFhLENBQUNuRixlQUFkLEdBQWdDQSxlQUFoQztBQUNILENBUEQsRUFPR21GLGFBQWEsS0FBS0EsYUFBYSxHQUFHLEVBQXJCLENBUGhCOztBQVFPLElBQUlDLFdBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxXQUFWLEVBQXVCO0FBQ3BCLFdBQVNwRixlQUFULENBQXlCUCxJQUF6QixFQUErQjVFLE1BQS9CLEVBQXVDO0FBQUEsbUJBQ3FCNEUsSUFEckIsQ0FDM0IzTCxDQUQyQjtBQUFBLFFBQzNCQSxDQUQyQix5QkFDdkIsQ0FEdUI7QUFBQSxtQkFDcUIyTCxJQURyQixDQUNwQjFMLENBRG9CO0FBQUEsUUFDcEJBLENBRG9CLHlCQUNoQixDQURnQjtBQUFBLHVCQUNxQjBMLElBRHJCLENBQ2JtQyxNQURhO0FBQUEsUUFDYkEsTUFEYSw2QkFDSixDQURJO0FBQUEsUUFDREMsT0FEQyxHQUNxQnBDLElBRHJCLENBQ0RvQyxPQURDO0FBQUEsUUFDUUMsT0FEUixHQUNxQnJDLElBRHJCLENBQ1FxQyxPQURSO0FBRW5DLFFBQU14RixFQUFFLEdBQUd1RixPQUFILGFBQUdBLE9BQUgsY0FBR0EsT0FBSCxHQUFjRCxNQUF0QjtBQUNBLFFBQU1yRixFQUFFLEdBQUd1RixPQUFILGFBQUdBLE9BQUgsY0FBR0EsT0FBSCxHQUFjRixNQUF0QjtBQUNBekgsdURBQUEsQ0FBWVUsTUFBWixFQUFvQi9HLENBQUMsR0FBR3dJLEVBQXhCLEVBQTRCdkksQ0FBQyxHQUFHd0ksRUFBaEM7QUFDQXBDLHVEQUFBLENBQVlVLE1BQVosRUFBb0IvRyxDQUFDLEdBQUd3SSxFQUF4QixFQUE0QnZJLENBQUMsR0FBR3dJLEVBQWhDO0FBQ0g7O0FBQ0Q2SSxhQUFXLENBQUNwRixlQUFaLEdBQThCQSxlQUE5QjtBQUNILENBVEQsRUFTR29GLFdBQVcsS0FBS0EsV0FBVyxHQUFHLEVBQW5CLENBVGQ7O0FBVU8sSUFBSUMsUUFBSjs7QUFDUCxDQUFDLFVBQVVBLFFBQVYsRUFBb0I7QUFDakIsV0FBU3JGLGVBQVQsQ0FBeUJzRixRQUF6QixFQUFtQ3pLLE1BQW5DLEVBQTJDO0FBQUEsUUFDL0I0RSxJQUQrQixHQUN0QjZGLFFBRHNCLENBQy9CN0YsSUFEK0I7O0FBRXZDLFFBQUksT0FBT0EsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUMxQjhGLHlFQUFBLENBQStCOUYsSUFBL0IsRUFBcUM1RSxNQUFyQztBQUNILEtBRkQsTUFHSyxJQUFJdEwsS0FBSyxDQUFDQyxPQUFOLENBQWNpUSxJQUFkLENBQUosRUFBeUI7QUFDMUIsV0FBSyxJQUFJalUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2lVLElBQUksQ0FBQ2hVLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFlBQU0yVyxPQUFPLEdBQUcxQyxJQUFJLENBQUNqVSxDQUFELENBQXBCO0FBQ0FnYSxzRUFBQSxDQUE0QnJELE9BQTVCLEVBQXFDdEgsTUFBckM7QUFDSDtBQUNKO0FBQ0o7O0FBQ0R3SyxVQUFRLENBQUNyRixlQUFULEdBQTJCQSxlQUEzQjtBQUNILENBZEQsRUFjR3FGLFFBQVEsS0FBS0EsUUFBUSxHQUFHLEVBQWhCLENBZFg7O0FBZU8sSUFBSUksWUFBSjs7QUFDUCxDQUFDLFVBQVVBLFlBQVYsRUFBd0I7QUFDckIsV0FBU3pGLGVBQVQsQ0FBeUJQLElBQXpCLEVBQStCNUUsTUFBL0IsRUFBdUM7QUFBQSxRQUMzQnBMLElBRDJCLEdBQ2xCZ1EsSUFEa0IsQ0FDM0JoUSxJQUQyQjs7QUFFbkMsWUFBUUEsSUFBUjtBQUNJLFdBQUssV0FBTDtBQUNJMFYscUJBQWEsQ0FBQ25GLGVBQWQsQ0FBOEJQLElBQTlCLEVBQW9DNUUsTUFBcEM7QUFDQTs7QUFDSixXQUFLLFNBQUw7QUFDSXVLLG1CQUFXLENBQUNwRixlQUFaLENBQTRCUCxJQUE1QixFQUFrQzVFLE1BQWxDO0FBQ0E7O0FBQ0osV0FBSyxNQUFMO0FBQ0l3SyxnQkFBUSxDQUFDckYsZUFBVCxDQUF5QlAsSUFBekIsRUFBK0I1RSxNQUEvQjtBQUNBOztBQUNKO0FBQ0k7QUFYUjtBQWFIOztBQUNENEssY0FBWSxDQUFDekYsZUFBYixHQUErQkEsZUFBL0I7QUFDSCxDQWxCRCxFQWtCR3lGLFlBQVksS0FBS0EsWUFBWSxHQUFHLEVBQXBCLENBbEJmLEU7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ08sSUFBSUQsV0FBSjs7QUFDUCxDQUFDLFVBQVVBLFdBQVYsRUFBdUI7QUFDcEIsV0FBU3hGLGVBQVQsQ0FBeUJzRCxJQUF6QixFQUErQnpJLE1BQS9CLEVBQXVDO0FBQUE7O0FBQUEsUUFDM0JwTCxJQUQyQixHQUNsQjZULElBRGtCLENBQzNCN1QsSUFEMkI7O0FBRW5DLFlBQVFBLElBQVI7QUFDSSxXQUFLLFFBQUw7QUFDQSxXQUFLLFFBQUw7QUFDSSxZQUFNMlMsTUFBTSxHQUFHa0IsSUFBZjtBQUNBbkosMkRBQUEsQ0FBWVUsTUFBWixlQUFvQnVILE1BQU0sQ0FBQ3RPLENBQTNCLGlEQUFnQyxDQUFoQyxlQUFtQ3NPLE1BQU0sQ0FBQ3JPLENBQTFDLGlEQUErQyxDQUEvQztBQUNBOztBQUNKLFdBQUssU0FBTDtBQUNJLFlBQU11TyxPQUFPLEdBQUdnQixJQUFoQjtBQUNBbkosMkRBQUEsQ0FBWVUsTUFBWixpQkFBb0J5SCxPQUFPLENBQUNFLEVBQTVCLHFEQUFrQyxDQUFsQyxpQkFBcUNGLE9BQU8sQ0FBQ0csRUFBN0MscURBQW1ELENBQW5EO0FBQ0F0SSwyREFBQSxDQUFZVSxNQUFaLGdCQUFvQnlILE9BQU8sQ0FBQ3hPLENBQTVCLG1EQUFpQyxDQUFqQyxnQkFBb0N3TyxPQUFPLENBQUN2TyxDQUE1QyxtREFBaUQsQ0FBakQ7QUFDQTs7QUFDSixXQUFLLGNBQUw7QUFDSSxZQUFNMk8sWUFBWSxHQUFHWSxJQUFyQjtBQUNBbkosMkRBQUEsQ0FBWVUsTUFBWixzQkFBb0I2SCxZQUFZLENBQUNGLEVBQWpDLCtEQUF1QyxDQUF2QyxzQkFBMENFLFlBQVksQ0FBQ0QsRUFBdkQsK0RBQTZELENBQTdEO0FBQ0F0SSwyREFBQSxDQUFZVSxNQUFaLHNCQUFvQjZILFlBQVksQ0FBQ0UsRUFBakMsK0RBQXVDLENBQXZDLHNCQUEwQ0YsWUFBWSxDQUFDRyxFQUF2RCwrREFBNkQsQ0FBN0Q7QUFDQTFJLDJEQUFBLENBQVlVLE1BQVoscUJBQW9CNkgsWUFBWSxDQUFDNU8sQ0FBakMsNkRBQXNDLENBQXRDLHFCQUF5QzRPLFlBQVksQ0FBQzNPLENBQXRELDZEQUEyRCxDQUEzRDtBQUNBOztBQUNKO0FBQ0k7QUFsQlI7QUFvQkg7O0FBQ0R5UixhQUFXLENBQUN4RixlQUFaLEdBQThCQSxlQUE5QjtBQUNILENBekJELEVBeUJHd0YsV0FBVyxLQUFLQSxXQUFXLEdBQUcsRUFBbkIsQ0F6QmQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0EsSUFBTUUsYUFBYSxHQUFHO0FBQ2xCQyxHQUFDLEVBQUUsQ0FEZTtBQUVsQkMsR0FBQyxFQUFFLENBRmU7QUFHbEJDLEdBQUMsRUFBRSxDQUhlO0FBSWxCQyxHQUFDLEVBQUUsQ0FKZTtBQUtsQkMsR0FBQyxFQUFFLENBTGU7QUFNbEJDLEdBQUMsRUFBRSxDQU5lO0FBT2xCQyxHQUFDLEVBQUUsQ0FQZTtBQVFsQkMsR0FBQyxFQUFFLENBUmU7QUFTbEJDLEdBQUMsRUFBRSxDQVRlO0FBVWxCcFosR0FBQyxFQUFFLENBVmU7QUFXbEJxWixHQUFDLEVBQUUsQ0FYZTtBQVlsQkMsR0FBQyxFQUFFLENBWmU7QUFhbEJDLEdBQUMsRUFBRSxDQWJlO0FBY2xCQyxHQUFDLEVBQUUsQ0FkZTtBQWVsQkMsR0FBQyxFQUFFLENBZmU7QUFnQmxCQyxHQUFDLEVBQUU7QUFoQmUsQ0FBdEI7QUFrQkEsSUFBTUMsYUFBYSxHQUFHLG9CQUF0QjtBQUNBLElBQU1DLFlBQVksR0FBRyxhQUFyQjtBQUNPLElBQU1DLG9CQUFiO0FBQ0ksa0NBQWM7QUFBQTs7QUFDVixTQUFLdEQsSUFBTCxHQUFZLEVBQVo7QUFDQSxTQUFLbkIsT0FBTCxHQUFlLElBQWY7QUFDQSxTQUFLMEUsTUFBTCxHQUFjLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBZDtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsaUNBQW5CO0FBQ0g7O0FBTkw7QUFBQTtBQUFBLFdBT0ksaUJBQVF4RCxJQUFSLEVBQWM7QUFDVixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLd0QsV0FBTCxDQUFpQkMsU0FBakIsR0FBNkIsQ0FBN0I7QUFDSDtBQVZMO0FBQUE7QUFBQSxXQVdJLHNCQUFhO0FBQ1QsYUFBTyxLQUFLNUUsT0FBWjtBQUNIO0FBYkw7QUFBQTtBQUFBLFdBY0kscUJBQVk7QUFDUixhQUFPLEtBQUswRSxNQUFaO0FBQ0g7QUFoQkw7QUFBQTtBQUFBLFdBaUJJLG9CQUFXO0FBQUEsVUFDQ0UsU0FERCxHQUNlLEtBQUtELFdBRHBCLENBQ0NDLFNBREQ7QUFFUCxVQUFNQyxXQUFXLEdBQUcsS0FBS0YsV0FBTCxDQUFpQkcsSUFBakIsQ0FBc0IsS0FBSzNELElBQTNCLENBQXBCOztBQUNBLFVBQUksQ0FBQzBELFdBQUwsRUFBa0I7QUFDZCxhQUFLN0UsT0FBTCxHQUFlLElBQWY7QUFDQTtBQUNIOztBQUNELFVBQU0rRSxNQUFNLEdBQUdGLFdBQVcsQ0FBQyxDQUFELENBQTFCOztBQUNBLFVBQUlOLGFBQWEsQ0FBQ3ZMLElBQWQsQ0FBbUIrTCxNQUFuQixDQUFKLEVBQWdDO0FBQzVCLGFBQUsvRSxPQUFMLEdBQWUrRSxNQUFmO0FBQ0gsT0FGRCxNQUdLLElBQUlQLFlBQVksQ0FBQ3hMLElBQWIsQ0FBa0IrTCxNQUFsQixDQUFKLEVBQStCO0FBQ2hDLGFBQUtKLFdBQUwsQ0FBaUJDLFNBQWpCLEdBQTZCQSxTQUE3QjtBQUNILE9BRkksTUFHQTtBQUNELGFBQUs1RSxPQUFMLEdBQWUsSUFBZjtBQUNIOztBQUNELFVBQUksQ0FBQyxLQUFLQSxPQUFWLEVBQW1CO0FBQ2Y7QUFDSDs7QUFDRCxVQUFNL0wsS0FBSyxHQUFHc1AsYUFBYSxDQUFDLEtBQUt2RCxPQUFOLENBQTNCOztBQUNBLFdBQUssSUFBSTNXLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc0SyxLQUFwQixFQUEyQjVLLENBQUMsRUFBNUIsRUFBZ0M7QUFDNUIsWUFBTTJiLFdBQVcsR0FBRyxLQUFLTCxXQUFMLENBQWlCRyxJQUFqQixDQUFzQixLQUFLM0QsSUFBM0IsQ0FBcEI7O0FBQ0EsWUFBSTZELFdBQVcsSUFBSVIsWUFBWSxDQUFDeEwsSUFBYixDQUFrQmdNLFdBQVcsQ0FBQyxDQUFELENBQTdCLENBQW5CLEVBQXNEO0FBQ2xELGVBQUtOLE1BQUwsQ0FBWXJiLENBQVosSUFBaUI0YixVQUFVLENBQUNELFdBQVcsQ0FBQyxDQUFELENBQVosQ0FBM0I7QUFDSCxTQUZELE1BR0s7QUFDRDtBQUNIO0FBQ0o7QUFDSjtBQS9DTDs7QUFBQTtBQUFBO0FBaURPLElBQU1uRCxvQkFBYjtBQUNJLGtDQUFjO0FBQUE7O0FBQ1YsU0FBS3FELE1BQUwsR0FBYyxJQUFJVCxvQkFBSixFQUFkO0FBQ0EsU0FBS3pFLE9BQUwsR0FBZTtBQUFFMVMsVUFBSSxFQUFFO0FBQVIsS0FBZjtBQUNBLFNBQUs2WCxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDSDs7QUFUTDtBQUFBO0FBQUEsV0FVSSxpQkFBUXBFLElBQVIsRUFBYztBQUNWLFdBQUsrRCxNQUFMLENBQVlwRCxPQUFaLENBQW9CWCxJQUFwQjtBQUNBLFdBQUtpRSxLQUFMLEdBQWEsQ0FBYjtBQUNBLFdBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxXQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFdBQUtKLGFBQUwsR0FBcUIsS0FBckI7QUFDSDtBQWpCTDtBQUFBO0FBQUEsV0FrQkksc0JBQWE7QUFDVCxhQUFPLEtBQUtBLGFBQUwsR0FBcUIsS0FBS25GLE9BQTFCLEdBQW9DLElBQTNDO0FBQ0g7QUFwQkw7QUFBQTtBQUFBLFdBcUJJLG9CQUFXO0FBQ1AsV0FBS2tGLE1BQUwsQ0FBWW5ELFFBQVo7QUFDQSxXQUFLNUMsS0FBTDtBQUNBLGFBQU8sS0FBS2dHLGFBQVo7QUFDSDtBQXpCTDtBQUFBO0FBQUEsV0EwQkksaUJBQVE7QUFDSixVQUFNbkYsT0FBTyxHQUFHLEtBQUtrRixNQUFMLENBQVlsRCxVQUFaLEVBQWhCO0FBQ0EsV0FBS21ELGFBQUwsR0FBcUIsQ0FBQyxDQUFDbkYsT0FBdkI7O0FBQ0EsVUFBSSxDQUFDLEtBQUttRixhQUFWLEVBQXlCO0FBQ3JCO0FBQ0g7O0FBQ0QsVUFBTVQsTUFBTSxHQUFHLEtBQUtRLE1BQUwsQ0FBWU0sU0FBWixFQUFmOztBQU5JLG1DQU84QmQsTUFQOUI7QUFBQSxVQU9HZSxFQVBIO0FBQUEsVUFPT0MsRUFQUDtBQUFBLFVBT1dDLEVBUFg7QUFBQSxVQU9lQyxFQVBmO0FBQUEsVUFPbUJDLEVBUG5CO0FBQUEsVUFPdUJDLEVBUHZCOztBQVFKLGNBQVE5RixPQUFSO0FBQ0ksYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS0EsT0FBTCxDQUFhMVMsSUFBYixHQUFvQixRQUFwQjtBQUNBLGdCQUFNMlMsTUFBTSxHQUFHLEtBQUtELE9BQXBCO0FBQ0FDLGtCQUFNLENBQUN0TyxDQUFQLEdBQVc4VCxFQUFYO0FBQ0F4RixrQkFBTSxDQUFDck8sQ0FBUCxHQUFXOFQsRUFBWDtBQUNBLGlCQUFLTixLQUFMLEdBQWFuRixNQUFNLENBQUN0TyxDQUFwQjtBQUNBLGlCQUFLMFQsS0FBTCxHQUFhcEYsTUFBTSxDQUFDck8sQ0FBcEI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUtvTyxPQUFMLENBQWExUyxJQUFiLEdBQW9CLFFBQXBCO0FBQ0EsZ0JBQU0yUyxPQUFNLEdBQUcsS0FBS0QsT0FBcEI7QUFDQUMsbUJBQU0sQ0FBQ3RPLENBQVAsR0FBVzhULEVBQUUsR0FBRyxLQUFLTCxLQUFyQjtBQUNBbkYsbUJBQU0sQ0FBQ3JPLENBQVAsR0FBVzhULEVBQUUsR0FBRyxLQUFLTCxLQUFyQjtBQUNBLGlCQUFLRCxLQUFMLEdBQWFuRixPQUFNLENBQUN0TyxDQUFwQjtBQUNBLGlCQUFLMFQsS0FBTCxHQUFhcEYsT0FBTSxDQUFDck8sQ0FBcEI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUtvTyxPQUFMLENBQWExUyxJQUFiLEdBQW9CLFFBQXBCO0FBQ0EsZ0JBQU00UyxNQUFNLEdBQUcsS0FBS0YsT0FBcEI7QUFDQUUsa0JBQU0sQ0FBQ3ZPLENBQVAsR0FBVzhULEVBQVg7QUFDQXZGLGtCQUFNLENBQUN0TyxDQUFQLEdBQVc4VCxFQUFYO0FBQ0EsaUJBQUtOLEtBQUwsR0FBYWxGLE1BQU0sQ0FBQ3ZPLENBQXBCO0FBQ0EsaUJBQUswVCxLQUFMLEdBQWFuRixNQUFNLENBQUN0TyxDQUFwQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS29PLE9BQUwsQ0FBYTFTLElBQWIsR0FBb0IsUUFBcEI7QUFDQSxnQkFBTTRTLE9BQU0sR0FBRyxLQUFLRixPQUFwQjtBQUNBRSxtQkFBTSxDQUFDdk8sQ0FBUCxHQUFXOFQsRUFBRSxHQUFHLEtBQUtMLEtBQXJCO0FBQ0FsRixtQkFBTSxDQUFDdE8sQ0FBUCxHQUFXOFQsRUFBRSxHQUFHLEtBQUtMLEtBQXJCO0FBQ0EsaUJBQUtELEtBQUwsR0FBYWxGLE9BQU0sQ0FBQ3ZPLENBQXBCO0FBQ0EsaUJBQUswVCxLQUFMLEdBQWFuRixPQUFNLENBQUN0TyxDQUFwQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS29PLE9BQUwsQ0FBYTFTLElBQWIsR0FBb0IsUUFBcEI7QUFDQSxnQkFBTTRTLFFBQU0sR0FBRyxLQUFLRixPQUFwQjtBQUNBRSxvQkFBTSxDQUFDdk8sQ0FBUCxHQUFXOFQsRUFBWDtBQUNBdkYsb0JBQU0sQ0FBQ3RPLENBQVAsR0FBVyxLQUFLeVQsS0FBaEI7QUFDQSxpQkFBS0QsS0FBTCxHQUFhbEYsUUFBTSxDQUFDdk8sQ0FBcEI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUtxTyxPQUFMLENBQWExUyxJQUFiLEdBQW9CLFFBQXBCO0FBQ0EsZ0JBQU00UyxRQUFNLEdBQUcsS0FBS0YsT0FBcEI7QUFDQUUsb0JBQU0sQ0FBQ3ZPLENBQVAsR0FBVzhULEVBQUUsR0FBRyxLQUFLTCxLQUFyQjtBQUNBbEYsb0JBQU0sQ0FBQ3RPLENBQVAsR0FBVyxLQUFLeVQsS0FBaEI7QUFDQSxpQkFBS0QsS0FBTCxHQUFhbEYsUUFBTSxDQUFDdk8sQ0FBcEI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUtxTyxPQUFMLENBQWExUyxJQUFiLEdBQW9CLFFBQXBCO0FBQ0EsZ0JBQU00UyxRQUFNLEdBQUcsS0FBS0YsT0FBcEI7QUFDQUUsb0JBQU0sQ0FBQ3ZPLENBQVAsR0FBVyxLQUFLeVQsS0FBaEI7QUFDQWxGLG9CQUFNLENBQUN0TyxDQUFQLEdBQVc2VCxFQUFYO0FBQ0EsaUJBQUtKLEtBQUwsR0FBYW5GLFFBQU0sQ0FBQ3RPLENBQXBCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLb08sT0FBTCxDQUFhMVMsSUFBYixHQUFvQixRQUFwQjtBQUNBLGdCQUFNNFMsUUFBTSxHQUFHLEtBQUtGLE9BQXBCO0FBQ0FFLG9CQUFNLENBQUN2TyxDQUFQLEdBQVcsS0FBS3lULEtBQWhCO0FBQ0FsRixvQkFBTSxDQUFDdE8sQ0FBUCxHQUFXNlQsRUFBRSxHQUFHLEtBQUtKLEtBQXJCO0FBQ0EsaUJBQUtBLEtBQUwsR0FBYW5GLFFBQU0sQ0FBQ3RPLENBQXBCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLb08sT0FBTCxDQUFhMVMsSUFBYixHQUFvQixjQUFwQjtBQUNBLGdCQUFNaVQsWUFBWSxHQUFHLEtBQUtQLE9BQTFCO0FBQ0FPLHdCQUFZLENBQUNGLEVBQWIsR0FBa0JvRixFQUFsQjtBQUNBbEYsd0JBQVksQ0FBQ0QsRUFBYixHQUFrQm9GLEVBQWxCO0FBQ0FuRix3QkFBWSxDQUFDRSxFQUFiLEdBQWtCa0YsRUFBbEI7QUFDQXBGLHdCQUFZLENBQUNHLEVBQWIsR0FBa0JrRixFQUFsQjtBQUNBckYsd0JBQVksQ0FBQzVPLENBQWIsR0FBaUJrVSxFQUFqQjtBQUNBdEYsd0JBQVksQ0FBQzNPLENBQWIsR0FBaUJrVSxFQUFqQjtBQUNBLGlCQUFLUixNQUFMLEdBQWMvRSxZQUFZLENBQUM1TyxDQUFiLElBQWtCNE8sWUFBWSxDQUFDRSxFQUFiLEdBQWtCRixZQUFZLENBQUM1TyxDQUFqRCxDQUFkO0FBQ0EsaUJBQUs0VCxNQUFMLEdBQWNoRixZQUFZLENBQUMzTyxDQUFiLElBQWtCMk8sWUFBWSxDQUFDRyxFQUFiLEdBQWtCSCxZQUFZLENBQUMzTyxDQUFqRCxDQUFkO0FBQ0EsaUJBQUt3VCxLQUFMLEdBQWE3RSxZQUFZLENBQUM1TyxDQUExQjtBQUNBLGlCQUFLMFQsS0FBTCxHQUFhOUUsWUFBWSxDQUFDM08sQ0FBMUI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUtvTyxPQUFMLENBQWExUyxJQUFiLEdBQW9CLGNBQXBCO0FBQ0EsZ0JBQU1pVCxhQUFZLEdBQUcsS0FBS1AsT0FBMUI7QUFDQU8seUJBQVksQ0FBQ0YsRUFBYixHQUFrQm9GLEVBQUUsR0FBRyxLQUFLTCxLQUE1QjtBQUNBN0UseUJBQVksQ0FBQ0QsRUFBYixHQUFrQm9GLEVBQUUsR0FBRyxLQUFLTCxLQUE1QjtBQUNBOUUseUJBQVksQ0FBQ0UsRUFBYixHQUFrQmtGLEVBQUUsR0FBRyxLQUFLUCxLQUE1QjtBQUNBN0UseUJBQVksQ0FBQ0csRUFBYixHQUFrQmtGLEVBQUUsR0FBRyxLQUFLUCxLQUE1QjtBQUNBOUUseUJBQVksQ0FBQzVPLENBQWIsR0FBaUJrVSxFQUFFLEdBQUcsS0FBS1QsS0FBM0I7QUFDQTdFLHlCQUFZLENBQUMzTyxDQUFiLEdBQWlCa1UsRUFBRSxHQUFHLEtBQUtULEtBQTNCO0FBQ0EsaUJBQUtDLE1BQUwsR0FBYy9FLGFBQVksQ0FBQzVPLENBQWIsSUFBa0I0TyxhQUFZLENBQUNFLEVBQWIsR0FBa0JGLGFBQVksQ0FBQzVPLENBQWpELENBQWQ7QUFDQSxpQkFBSzRULE1BQUwsR0FBY2hGLGFBQVksQ0FBQzNPLENBQWIsSUFBa0IyTyxhQUFZLENBQUNHLEVBQWIsR0FBa0JILGFBQVksQ0FBQzNPLENBQWpELENBQWQ7QUFDQSxpQkFBS3dULEtBQUwsR0FBYTdFLGFBQVksQ0FBQzVPLENBQTFCO0FBQ0EsaUJBQUswVCxLQUFMLEdBQWE5RSxhQUFZLENBQUMzTyxDQUExQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS29PLE9BQUwsQ0FBYTFTLElBQWIsR0FBb0IsY0FBcEI7QUFDQSxnQkFBTWlULGNBQVksR0FBRyxLQUFLUCxPQUExQjtBQUNBTywwQkFBWSxDQUFDRixFQUFiLEdBQWtCLEtBQUtpRixNQUF2QjtBQUNBL0UsMEJBQVksQ0FBQ0QsRUFBYixHQUFrQixLQUFLaUYsTUFBdkI7QUFDQWhGLDBCQUFZLENBQUNFLEVBQWIsR0FBa0JnRixFQUFsQjtBQUNBbEYsMEJBQVksQ0FBQ0csRUFBYixHQUFrQmdGLEVBQWxCO0FBQ0FuRiwwQkFBWSxDQUFDNU8sQ0FBYixHQUFpQmdVLEVBQWpCO0FBQ0FwRiwwQkFBWSxDQUFDM08sQ0FBYixHQUFpQmdVLEVBQWpCO0FBQ0EsaUJBQUtOLE1BQUwsR0FBYy9FLGNBQVksQ0FBQzVPLENBQWIsSUFBa0I0TyxjQUFZLENBQUNFLEVBQWIsR0FBa0JGLGNBQVksQ0FBQzVPLENBQWpELENBQWQ7QUFDQSxpQkFBSzRULE1BQUwsR0FBY2hGLGNBQVksQ0FBQzNPLENBQWIsSUFBa0IyTyxjQUFZLENBQUNHLEVBQWIsR0FBa0JILGNBQVksQ0FBQzNPLENBQWpELENBQWQ7QUFDQSxpQkFBS3dULEtBQUwsR0FBYTdFLGNBQVksQ0FBQzVPLENBQTFCO0FBQ0EsaUJBQUswVCxLQUFMLEdBQWE5RSxjQUFZLENBQUMzTyxDQUExQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS29PLE9BQUwsQ0FBYTFTLElBQWIsR0FBb0IsY0FBcEI7QUFDQSxnQkFBTWlULGNBQVksR0FBRyxLQUFLUCxPQUExQjtBQUNBTywwQkFBWSxDQUFDRixFQUFiLEdBQWtCLEtBQUtpRixNQUF2QjtBQUNBL0UsMEJBQVksQ0FBQ0QsRUFBYixHQUFrQixLQUFLaUYsTUFBdkI7QUFDQWhGLDBCQUFZLENBQUNFLEVBQWIsR0FBa0JnRixFQUFFLEdBQUcsS0FBS0wsS0FBNUI7QUFDQTdFLDBCQUFZLENBQUNHLEVBQWIsR0FBa0JnRixFQUFFLEdBQUcsS0FBS0wsS0FBNUI7QUFDQTlFLDBCQUFZLENBQUM1TyxDQUFiLEdBQWlCZ1UsRUFBRSxHQUFHLEtBQUtQLEtBQTNCO0FBQ0E3RSwwQkFBWSxDQUFDM08sQ0FBYixHQUFpQmdVLEVBQUUsR0FBRyxLQUFLUCxLQUEzQjtBQUNBLGlCQUFLQyxNQUFMLEdBQWMvRSxjQUFZLENBQUM1TyxDQUFiLElBQWtCNE8sY0FBWSxDQUFDRSxFQUFiLEdBQWtCRixjQUFZLENBQUM1TyxDQUFqRCxDQUFkO0FBQ0EsaUJBQUs0VCxNQUFMLEdBQWNoRixjQUFZLENBQUMzTyxDQUFiLElBQWtCMk8sY0FBWSxDQUFDRyxFQUFiLEdBQWtCSCxjQUFZLENBQUMzTyxDQUFqRCxDQUFkO0FBQ0EsaUJBQUt3VCxLQUFMLEdBQWE3RSxjQUFZLENBQUM1TyxDQUExQjtBQUNBLGlCQUFLMFQsS0FBTCxHQUFhOUUsY0FBWSxDQUFDM08sQ0FBMUI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUtvTyxPQUFMLENBQWExUyxJQUFiLEdBQW9CLFNBQXBCO0FBQ0EsZ0JBQU02UyxPQUFPLEdBQUcsS0FBS0gsT0FBckI7QUFDQUcsbUJBQU8sQ0FBQ0UsRUFBUixHQUFhb0YsRUFBYjtBQUNBdEYsbUJBQU8sQ0FBQ0csRUFBUixHQUFhb0YsRUFBYjtBQUNBdkYsbUJBQU8sQ0FBQ3hPLENBQVIsR0FBWWdVLEVBQVo7QUFDQXhGLG1CQUFPLENBQUN2TyxDQUFSLEdBQVlnVSxFQUFaO0FBQ0EsaUJBQUtOLE1BQUwsR0FBY25GLE9BQU8sQ0FBQ3hPLENBQVIsSUFBYXdPLE9BQU8sQ0FBQ0UsRUFBUixHQUFhRixPQUFPLENBQUN4TyxDQUFsQyxDQUFkO0FBQ0EsaUJBQUs0VCxNQUFMLEdBQWNwRixPQUFPLENBQUN2TyxDQUFSLElBQWF1TyxPQUFPLENBQUNHLEVBQVIsR0FBYUgsT0FBTyxDQUFDdk8sQ0FBbEMsQ0FBZDtBQUNBLGlCQUFLd1QsS0FBTCxHQUFhakYsT0FBTyxDQUFDeE8sQ0FBckI7QUFDQSxpQkFBSzBULEtBQUwsR0FBYWxGLE9BQU8sQ0FBQ3ZPLENBQXJCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLb08sT0FBTCxDQUFhMVMsSUFBYixHQUFvQixTQUFwQjtBQUNBLGdCQUFNNlMsUUFBTyxHQUFHLEtBQUtILE9BQXJCO0FBQ0FHLG9CQUFPLENBQUNFLEVBQVIsR0FBYW9GLEVBQUUsR0FBRyxLQUFLTCxLQUF2QjtBQUNBakYsb0JBQU8sQ0FBQ0csRUFBUixHQUFhb0YsRUFBRSxHQUFHLEtBQUtMLEtBQXZCO0FBQ0FsRixvQkFBTyxDQUFDeE8sQ0FBUixHQUFZZ1UsRUFBRSxHQUFHLEtBQUtQLEtBQXRCO0FBQ0FqRixvQkFBTyxDQUFDdk8sQ0FBUixHQUFZZ1UsRUFBRSxHQUFHLEtBQUtQLEtBQXRCO0FBQ0EsaUJBQUtDLE1BQUwsR0FBY25GLFFBQU8sQ0FBQ3hPLENBQVIsSUFBYXdPLFFBQU8sQ0FBQ0UsRUFBUixHQUFhRixRQUFPLENBQUN4TyxDQUFsQyxDQUFkO0FBQ0EsaUJBQUs0VCxNQUFMLEdBQWNwRixRQUFPLENBQUN2TyxDQUFSLElBQWF1TyxRQUFPLENBQUNHLEVBQVIsR0FBYUgsUUFBTyxDQUFDdk8sQ0FBbEMsQ0FBZDtBQUNBLGlCQUFLd1QsS0FBTCxHQUFhakYsUUFBTyxDQUFDeE8sQ0FBckI7QUFDQSxpQkFBSzBULEtBQUwsR0FBYWxGLFFBQU8sQ0FBQ3ZPLENBQXJCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLb08sT0FBTCxDQUFhMVMsSUFBYixHQUFvQixTQUFwQjtBQUNBLGdCQUFNNlMsU0FBTyxHQUFHLEtBQUtILE9BQXJCO0FBQ0FHLHFCQUFPLENBQUNFLEVBQVIsR0FBYSxLQUFLaUYsTUFBbEI7QUFDQW5GLHFCQUFPLENBQUNHLEVBQVIsR0FBYSxLQUFLaUYsTUFBbEI7QUFDQXBGLHFCQUFPLENBQUN4TyxDQUFSLEdBQVk4VCxFQUFaO0FBQ0F0RixxQkFBTyxDQUFDdk8sQ0FBUixHQUFZOFQsRUFBWjtBQUNBLGlCQUFLSixNQUFMLEdBQWNuRixTQUFPLENBQUN4TyxDQUFSLElBQWF3TyxTQUFPLENBQUNFLEVBQVIsR0FBYUYsU0FBTyxDQUFDeE8sQ0FBbEMsQ0FBZDtBQUNBLGlCQUFLNFQsTUFBTCxHQUFjcEYsU0FBTyxDQUFDdk8sQ0FBUixJQUFhdU8sU0FBTyxDQUFDRyxFQUFSLEdBQWFILFNBQU8sQ0FBQ3ZPLENBQWxDLENBQWQ7QUFDQSxpQkFBS3dULEtBQUwsR0FBYWpGLFNBQU8sQ0FBQ3hPLENBQXJCO0FBQ0EsaUJBQUswVCxLQUFMLEdBQWFsRixTQUFPLENBQUN2TyxDQUFyQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS29PLE9BQUwsQ0FBYTFTLElBQWIsR0FBb0IsU0FBcEI7QUFDQSxnQkFBTTZTLFNBQU8sR0FBRyxLQUFLSCxPQUFyQjtBQUNBRyxxQkFBTyxDQUFDRSxFQUFSLEdBQWEsS0FBS2lGLE1BQWxCO0FBQ0FuRixxQkFBTyxDQUFDRyxFQUFSLEdBQWEsS0FBS2lGLE1BQWxCO0FBQ0FwRixxQkFBTyxDQUFDeE8sQ0FBUixHQUFZOFQsRUFBRSxHQUFHLEtBQUtMLEtBQXRCO0FBQ0FqRixxQkFBTyxDQUFDdk8sQ0FBUixHQUFZOFQsRUFBRSxHQUFHLEtBQUtMLEtBQXRCO0FBQ0EsaUJBQUtDLE1BQUwsR0FBY25GLFNBQU8sQ0FBQ3hPLENBQVIsSUFBYXdPLFNBQU8sQ0FBQ0UsRUFBUixHQUFhRixTQUFPLENBQUN4TyxDQUFsQyxDQUFkO0FBQ0EsaUJBQUs0VCxNQUFMLEdBQWNwRixTQUFPLENBQUN2TyxDQUFSLElBQWF1TyxTQUFPLENBQUNHLEVBQVIsR0FBYUgsU0FBTyxDQUFDdk8sQ0FBbEMsQ0FBZDtBQUNBLGlCQUFLd1QsS0FBTCxHQUFhakYsU0FBTyxDQUFDeE8sQ0FBckI7QUFDQSxpQkFBSzBULEtBQUwsR0FBYWxGLFNBQU8sQ0FBQ3ZPLENBQXJCO0FBQ0g7QUFDRDs7QUFDSjtBQUNJO0FBdE1SO0FBd01IO0FBMU9MOztBQUFBO0FBQUE7QUE0T0EsSUFBTWdRLE1BQU0sR0FBRyxJQUFJQyxvQkFBSixFQUFmO0FBQ08sSUFBSXVCLGNBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxjQUFWLEVBQTBCO0FBQ3ZCLFdBQVN2RixlQUFULENBQXlCc0QsSUFBekIsRUFBK0J6SSxNQUEvQixFQUF1QztBQUNuQ2tKLFVBQU0sQ0FBQ0UsT0FBUCxDQUFlWCxJQUFmOztBQUNBLFdBQU9TLE1BQU0sQ0FBQ0csUUFBUCxFQUFQLEVBQTBCO0FBQ3RCLFVBQU0vQixPQUFPLEdBQUc0QixNQUFNLENBQUNJLFVBQVAsRUFBaEI7O0FBQ0EsVUFBSWhDLE9BQUosRUFBYTtBQUNUcUQsc0VBQUEsQ0FBNEJyRCxPQUE1QixFQUFxQ3RILE1BQXJDO0FBQ0g7QUFDSjtBQUNKOztBQUNEMEssZ0JBQWMsQ0FBQ3ZGLGVBQWYsR0FBaUNBLGVBQWpDO0FBQ0gsQ0FYRCxFQVdHdUYsY0FBYyxLQUFLQSxjQUFjLEdBQUcsRUFBdEIsQ0FYakIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFRBO0FBQ0EsSUFBTTJDLFVBQVUsR0FBR25SLG1EQUFBLEVBQW5CO0FBQ0EsSUFBTW9SLFVBQVUsR0FBR3BSLG1EQUFBLEVBQW5CO0FBQ0EsSUFBTXNOLFdBQVcsR0FBR2xOLG9EQUFBLEVBQXBCO0FBQ08sSUFBTWlSLFFBQWI7QUFDSSxvQkFBWXpFLEtBQVosRUFBbUI7QUFBQTs7QUFDZixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDSDs7QUFITDtBQUFBO0FBQUEsV0FJSSxxQkFBZ0M7QUFBQSxVQUF0QnpaLEtBQXNCLHVFQUFkLENBQWM7QUFBQSxVQUFYQyxLQUFXLHVFQUFILENBQUc7QUFDNUIsV0FBSytZLElBQUwsR0FBWTtBQUNSelQsWUFBSSxFQUFFLE9BREU7QUFFUnZGLGFBQUssRUFBTEEsS0FGUTtBQUdSQyxhQUFLLEVBQUxBO0FBSFEsT0FBWjtBQUtBLGFBQU8sSUFBUDtBQUNIO0FBWEw7QUFBQTtBQUFBLFdBWUkseUJBQWdCc1UsR0FBaEIsRUFBcUI5UixNQUFyQixFQUE0RDtBQUFBLFVBQS9CRCxNQUErQix1RUFBdEIsSUFBc0I7QUFBQSxVQUFoQjJiLE1BQWdCLHVFQUFQLEtBQU87QUFDeEQsV0FBS25GLElBQUwsR0FBWTtBQUNSelQsWUFBSSxFQUFFLFFBREU7QUFFUmdQLFdBQUcsRUFBSEEsR0FGUTtBQUdSOVIsY0FBTSxFQUFOQSxNQUhRO0FBSVJELGNBQU0sRUFBTkEsTUFKUTtBQUtSMmIsY0FBTSxFQUFOQTtBQUxRLE9BQVo7QUFPQSxhQUFPLElBQVA7QUFDSDtBQXJCTDtBQUFBO0FBQUEsV0FzQkksMkJBQWtCNVksSUFBbEIsRUFBd0J2RixLQUF4QixFQUErQkMsS0FBL0IsRUFBc0N1QixLQUF0QyxFQUE2Q2lCLE1BQTdDLEVBQXFEO0FBQ2pELFVBQUk4QyxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNuQnlZLGtCQUFVLENBQUNwVSxDQUFYLEdBQWUsQ0FBQyxLQUFoQjtBQUNBb1Usa0JBQVUsQ0FBQ25VLENBQVgsR0FBZSxDQUFmO0FBQ0FvVSxrQkFBVSxDQUFDclUsQ0FBWCxHQUFlLEtBQWY7QUFDQXFVLGtCQUFVLENBQUNwVSxDQUFYLEdBQWUsQ0FBZjtBQUNBb0QscUVBQUEsQ0FBc0J4SyxNQUF0QixFQUE4QnViLFVBQTlCLEVBQTBDQSxVQUExQztBQUNBL1EscUVBQUEsQ0FBc0J4SyxNQUF0QixFQUE4QndiLFVBQTlCLEVBQTBDQSxVQUExQztBQUNBLGFBQUtqRixJQUFMLEdBQVk7QUFDUnpULGNBQUksRUFBSkEsSUFEUTtBQUVSdkYsZUFBSyxFQUFMQSxLQUZRO0FBR1JDLGVBQUssRUFBTEEsS0FIUTtBQUlSdUIsZUFBSyxFQUFMQSxLQUpRO0FBS1JJLGdCQUFNLEVBQUVvYyxVQUFVLENBQUNwVSxDQUxYO0FBTVIvSCxnQkFBTSxFQUFFbWMsVUFBVSxDQUFDblUsQ0FOWDtBQU9SOUgsY0FBSSxFQUFFa2MsVUFBVSxDQUFDclUsQ0FQVDtBQVFSNUgsY0FBSSxFQUFFaWMsVUFBVSxDQUFDcFU7QUFSVCxTQUFaO0FBVUgsT0FqQkQsTUFrQks7QUFDRG1VLGtCQUFVLENBQUNwVSxDQUFYLEdBQWUsTUFBZjtBQUNBb1Usa0JBQVUsQ0FBQ25VLENBQVgsR0FBZSxDQUFmO0FBQ0FvRCxxRUFBQSxDQUFzQnhLLE1BQXRCLEVBQThCdWIsVUFBOUIsRUFBMENBLFVBQTFDO0FBQ0EsYUFBS2hGLElBQUwsR0FBWTtBQUNSelQsY0FBSSxFQUFKQSxJQURRO0FBRVJ2RixlQUFLLEVBQUxBLEtBRlE7QUFHUkMsZUFBSyxFQUFMQSxLQUhRO0FBSVJ1QixlQUFLLEVBQUxBLEtBSlE7QUFLUkksZ0JBQU0sRUFBRW9jLFVBQVUsQ0FBQ3BVLENBTFg7QUFNUi9ILGdCQUFNLEVBQUVtYyxVQUFVLENBQUNuVSxDQU5YO0FBT1IvSCxxQkFBVyxFQUFFLENBUEw7QUFRUkMsY0FBSSxFQUFFaWMsVUFBVSxDQUFDcFUsQ0FSVDtBQVNSNUgsY0FBSSxFQUFFZ2MsVUFBVSxDQUFDblUsQ0FUVDtBQVVSNUgsbUJBQVMsRUFBRTJDLElBQUksQ0FBQ3VHLEdBQUwsQ0FBUyxDQUFDNlMsVUFBVSxDQUFDcFUsQ0FBWCxHQUFlbkgsTUFBTSxDQUFDTyxFQUF2QixJQUE2QixDQUF0QztBQVZILFNBQVo7QUFZSDs7QUFDRCxhQUFPLElBQVA7QUFDSDtBQTNETDtBQUFBO0FBQUEsV0E0REkscUJBQTJJO0FBQUEsVUFBakkyUSxTQUFpSSx1RUFBckgsQ0FBcUg7QUFBQSxVQUFsSDNULEtBQWtILHVFQUExRyxDQUEwRztBQUFBLFVBQXZHQyxLQUF1Ryx1RUFBL0YsQ0FBK0Y7QUFBQSxVQUE1Rm1lLFlBQTRGLHVFQUE3RSxLQUE2RTtBQUFBLFVBQXRFQyxTQUFzRSx1RUFBMUQsTUFBMEQ7QUFBQSxVQUFsRHRELElBQWtELHVFQUEzQyxPQUEyQztBQUFBLFVBQWxDQyxNQUFrQyx1RUFBekIsT0FBeUI7QUFBQSxVQUFoQkYsVUFBZ0IsdUVBQUgsQ0FBRztBQUN2SSxXQUFLN0IsTUFBTCxHQUFjO0FBQ1Z0RixpQkFBUyxFQUFUQSxTQURVO0FBRVZ5SyxvQkFBWSxFQUFaQSxZQUZVO0FBR1ZDLGlCQUFTLEVBQVRBLFNBSFU7QUFJVnRELFlBQUksRUFBSkEsSUFKVTtBQUtWQyxjQUFNLEVBQU5BLE1BTFU7QUFNVkYsa0JBQVUsRUFBVkEsVUFOVTtBQU9WOUIsWUFBSSxFQUFFO0FBQ0Z6VCxjQUFJLEVBQUUsT0FESjtBQUVGdkYsZUFBSyxFQUFMQSxLQUZFO0FBR0ZDLGVBQUssRUFBTEE7QUFIRTtBQVBJLE9BQWQ7QUFhQSxhQUFPLElBQVA7QUFDSDtBQTNFTDtBQUFBO0FBQUEsV0E0RUksMkJBQWtCc0YsSUFBbEIsRUFBd0J2RixLQUF4QixFQUErQkMsS0FBL0IsRUFBc0N1QixLQUF0QyxFQUFtRTtBQUFBLFVBQXRCaUIsTUFBc0IsdUVBQWIwWCxXQUFhOztBQUMvRCxVQUFJLENBQUMsS0FBS2xCLE1BQVYsRUFBa0I7QUFDZCxlQUFPLElBQVA7QUFDSDs7QUFDRCxVQUFJMVQsSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDbkJ5WSxrQkFBVSxDQUFDcFUsQ0FBWCxHQUFlLENBQUMsS0FBaEI7QUFDQW9VLGtCQUFVLENBQUNuVSxDQUFYLEdBQWUsQ0FBZjtBQUNBb1Usa0JBQVUsQ0FBQ3JVLENBQVgsR0FBZSxLQUFmO0FBQ0FxVSxrQkFBVSxDQUFDcFUsQ0FBWCxHQUFlLENBQWY7QUFDQW9ELHFFQUFBLENBQXNCeEssTUFBdEIsRUFBOEJ1YixVQUE5QixFQUEwQ0EsVUFBMUM7QUFDQS9RLHFFQUFBLENBQXNCeEssTUFBdEIsRUFBOEJ3YixVQUE5QixFQUEwQ0EsVUFBMUM7QUFDQSxhQUFLaEYsTUFBTCxDQUFZRCxJQUFaLEdBQW1CO0FBQ2Z6VCxjQUFJLEVBQUpBLElBRGU7QUFFZnZGLGVBQUssRUFBTEEsS0FGZTtBQUdmQyxlQUFLLEVBQUxBLEtBSGU7QUFJZnVCLGVBQUssRUFBTEEsS0FKZTtBQUtmSSxnQkFBTSxFQUFFb2MsVUFBVSxDQUFDcFUsQ0FMSjtBQU1mL0gsZ0JBQU0sRUFBRW1jLFVBQVUsQ0FBQ25VLENBTko7QUFPZjlILGNBQUksRUFBRWtjLFVBQVUsQ0FBQ3JVLENBUEY7QUFRZjVILGNBQUksRUFBRWljLFVBQVUsQ0FBQ3BVO0FBUkYsU0FBbkI7QUFVSCxPQWpCRCxNQWtCSztBQUNEbVUsa0JBQVUsQ0FBQ3BVLENBQVgsR0FBZSxNQUFmO0FBQ0FvVSxrQkFBVSxDQUFDblUsQ0FBWCxHQUFlLENBQWY7QUFDQW9ELHFFQUFBLENBQXNCeEssTUFBdEIsRUFBOEJ1YixVQUE5QixFQUEwQ0EsVUFBMUM7QUFDQSxhQUFLL0UsTUFBTCxDQUFZRCxJQUFaLEdBQW1CO0FBQ2Z6VCxjQUFJLEVBQUpBLElBRGU7QUFFZnZGLGVBQUssRUFBTEEsS0FGZTtBQUdmQyxlQUFLLEVBQUxBLEtBSGU7QUFJZnVCLGVBQUssRUFBTEEsS0FKZTtBQUtmSSxnQkFBTSxFQUFFb2MsVUFBVSxDQUFDcFUsQ0FMSjtBQU1mL0gsZ0JBQU0sRUFBRW1jLFVBQVUsQ0FBQ25VLENBTko7QUFPZi9ILHFCQUFXLEVBQUUsQ0FQRTtBQVFmQyxjQUFJLEVBQUVpYyxVQUFVLENBQUNwVSxDQVJGO0FBU2Y1SCxjQUFJLEVBQUVnYyxVQUFVLENBQUNuVSxDQVRGO0FBVWY1SCxtQkFBUyxFQUFFMkMsSUFBSSxDQUFDdUcsR0FBTCxDQUFTLENBQUM2UyxVQUFVLENBQUNwVSxDQUFYLEdBQWVuSCxNQUFNLENBQUNPLEVBQXZCLElBQTZCLENBQXRDO0FBVkksU0FBbkI7QUFZSDs7QUFDRCxhQUFPLElBQVA7QUFDSDtBQXBITDtBQUFBO0FBQUEsV0FxSEkseUJBQWdCdVIsR0FBaEIsRUFBcUI5UixNQUFyQixFQUE0RDtBQUFBLFVBQS9CRCxNQUErQix1RUFBdEIsSUFBc0I7QUFBQSxVQUFoQjJiLE1BQWdCLHVFQUFQLEtBQU87O0FBQ3hELFVBQUksQ0FBQyxLQUFLbEYsTUFBVixFQUFrQjtBQUNkLGVBQU8sSUFBUDtBQUNIOztBQUNELFdBQUtBLE1BQUwsQ0FBWUQsSUFBWixHQUFtQjtBQUNmelQsWUFBSSxFQUFFLFFBRFM7QUFFZmdQLFdBQUcsRUFBSEEsR0FGZTtBQUdmOVIsY0FBTSxFQUFOQSxNQUhlO0FBSWZELGNBQU0sRUFBTkEsTUFKZTtBQUtmMmIsY0FBTSxFQUFOQTtBQUxlLE9BQW5CO0FBT0EsYUFBTyxJQUFQO0FBQ0g7QUFqSUw7QUFBQTtBQUFBLFdBa0lJLGdCQUFPdlUsQ0FBUCxFQUFVQyxDQUFWLEVBQWE7QUFDVCxVQUFNdVAsSUFBSSxHQUFHLEtBQUt2QixTQUFMLEVBQWI7QUFDQXVCLFVBQUksQ0FBQ3pWLElBQUwsQ0FBVTtBQUFFNEIsWUFBSSxFQUFFLFFBQVI7QUFBa0JxRSxTQUFDLEVBQURBLENBQWxCO0FBQXFCQyxTQUFDLEVBQURBO0FBQXJCLE9BQVY7QUFDQSxhQUFPLElBQVA7QUFDSDtBQXRJTDtBQUFBO0FBQUEsV0F1SUksZ0JBQU9ELENBQVAsRUFBVUMsQ0FBVixFQUFhO0FBQ1QsVUFBTXVQLElBQUksR0FBRyxLQUFLa0YsT0FBTCxFQUFiOztBQUNBLFVBQUksQ0FBQ2xGLElBQUwsRUFBVztBQUNQLGVBQU8sSUFBUDtBQUNIOztBQUNEQSxVQUFJLENBQUN6VixJQUFMLENBQVU7QUFBRTRCLFlBQUksRUFBRSxRQUFSO0FBQWtCcUUsU0FBQyxFQUFEQSxDQUFsQjtBQUFxQkMsU0FBQyxFQUFEQTtBQUFyQixPQUFWO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUE5SUw7QUFBQTtBQUFBLFdBK0lJLGlCQUFReU8sRUFBUixFQUFZQyxFQUFaLEVBQWdCM08sQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCO0FBQ2xCLFVBQU11UCxJQUFJLEdBQUcsS0FBS2tGLE9BQUwsRUFBYjs7QUFDQSxVQUFJLENBQUNsRixJQUFMLEVBQVc7QUFDUCxlQUFPLElBQVA7QUFDSDs7QUFDREEsVUFBSSxDQUFDelYsSUFBTCxDQUFVO0FBQ040QixZQUFJLEVBQUUsU0FEQTtBQUNXK1MsVUFBRSxFQUFGQSxFQURYO0FBQ2VDLFVBQUUsRUFBRkEsRUFEZjtBQUNtQjNPLFNBQUMsRUFBREEsQ0FEbkI7QUFDc0JDLFNBQUMsRUFBREE7QUFEdEIsT0FBVjtBQUdBLGFBQU8sSUFBUDtBQUNIO0FBeEpMO0FBQUE7QUFBQSxXQXlKSSxzQkFBYXlPLEVBQWIsRUFBaUJDLEVBQWpCLEVBQXFCRyxFQUFyQixFQUF5QkMsRUFBekIsRUFBNkIvTyxDQUE3QixFQUFnQ0MsQ0FBaEMsRUFBbUM7QUFDL0IsVUFBTXVQLElBQUksR0FBRyxLQUFLa0YsT0FBTCxFQUFiOztBQUNBLFVBQUksQ0FBQ2xGLElBQUwsRUFBVztBQUNQLGVBQU8sSUFBUDtBQUNIOztBQUNEQSxVQUFJLENBQUN6VixJQUFMLENBQVU7QUFDTjRCLFlBQUksRUFBRSxjQURBO0FBQ2dCK1MsVUFBRSxFQUFGQSxFQURoQjtBQUNvQkMsVUFBRSxFQUFGQSxFQURwQjtBQUN3QkcsVUFBRSxFQUFGQSxFQUR4QjtBQUM0QkMsVUFBRSxFQUFGQSxFQUQ1QjtBQUNnQy9PLFNBQUMsRUFBREEsQ0FEaEM7QUFDbUNDLFNBQUMsRUFBREE7QUFEbkMsT0FBVjtBQUdBLGFBQU8sSUFBUDtBQUNIO0FBbEtMO0FBQUE7QUFBQSxXQW1LSSx1QkFBY0QsQ0FBZCxFQUFpQkMsQ0FBakIsRUFBb0I1RixLQUFwQixFQUEyQkMsTUFBM0IsRUFBd0U7QUFBQSxVQUFyQ3FhLFlBQXFDLHVFQUF0QixDQUFzQjtBQUFBLFVBQW5CQyxhQUFtQix1RUFBSCxDQUFHO0FBQ3BFLFVBQU1wRixJQUFJLEdBQUcsS0FBS3ZCLFNBQUwsRUFBYjtBQUNBLFVBQU00RyxDQUFDLEdBQUdGLFlBQVY7QUFDQSxVQUFNekMsQ0FBQyxHQUFHMEMsYUFBVjtBQUNBLFVBQU1FLENBQUMsR0FBRyxTQUFWO0FBQ0EsVUFBTUMsRUFBRSxHQUFJRixDQUFDLEdBQUcsQ0FBTCxHQUFVQyxDQUFyQjtBQUNBLFVBQU1FLEVBQUUsR0FBSTlDLENBQUMsR0FBRyxDQUFMLEdBQVU0QyxDQUFyQjtBQUNBLFVBQU1HLEVBQUUsR0FBR2pWLENBQUMsR0FBRzZVLENBQWY7QUFDQSxVQUFNSyxFQUFFLEdBQUdqVixDQUFDLEdBQUdpUyxDQUFmO0FBQ0EsVUFBTWlELEVBQUUsR0FBR25WLENBQUMsR0FBRzZVLENBQUMsR0FBRyxDQUFuQjtBQUNBLFVBQU1PLEVBQUUsR0FBR25WLENBQUMsR0FBR2lTLENBQUMsR0FBRyxDQUFuQjtBQUNBLFVBQU1qSSxFQUFFLEdBQUc1UCxLQUFLLEdBQUd3YSxDQUFuQjtBQUNBLFVBQU0zSyxFQUFFLEdBQUc1UCxNQUFNLEdBQUc0WCxDQUFwQjtBQUNBMUMsVUFBSSxDQUFDelYsSUFBTCxDQUFVO0FBQ040QixZQUFJLEVBQUUsUUFEQTtBQUVOcUUsU0FBQyxFQUFEQSxDQUZNO0FBR05DLFNBQUMsRUFBRW1WO0FBSEcsT0FBVjtBQUtBNUYsVUFBSSxDQUFDelYsSUFBTCxDQUFVO0FBQ040QixZQUFJLEVBQUUsY0FEQTtBQUVOK1MsVUFBRSxFQUFFMU8sQ0FGRTtBQUdOMk8sVUFBRSxFQUFFeUcsRUFBRSxHQUFHSixFQUhIO0FBSU5sRyxVQUFFLEVBQUVxRyxFQUFFLEdBQUdKLEVBSkg7QUFLTmhHLFVBQUUsRUFBRTlPLENBTEU7QUFNTkQsU0FBQyxFQUFFbVYsRUFORztBQU9ObFYsU0FBQyxFQUFEQTtBQVBNLE9BQVY7QUFTQXVQLFVBQUksQ0FBQ3pWLElBQUwsQ0FBVTtBQUNONEIsWUFBSSxFQUFFLFFBREE7QUFFTnFFLFNBQUMsRUFBRW1WLEVBQUUsR0FBR2xMLEVBRkY7QUFHTmhLLFNBQUMsRUFBREE7QUFITSxPQUFWO0FBS0F1UCxVQUFJLENBQUN6VixJQUFMLENBQVU7QUFDTjRCLFlBQUksRUFBRSxjQURBO0FBRU4rUyxVQUFFLEVBQUV5RyxFQUFFLEdBQUdKLEVBQUwsR0FBVTlLLEVBRlI7QUFHTjBFLFVBQUUsRUFBRTFPLENBSEU7QUFJTjZPLFVBQUUsRUFBRW1HLEVBQUUsR0FBR2hMLEVBSkg7QUFLTjhFLFVBQUUsRUFBRXFHLEVBQUUsR0FBR0osRUFMSDtBQU1OaFYsU0FBQyxFQUFFaVYsRUFBRSxHQUFHaEwsRUFORjtBQU9OaEssU0FBQyxFQUFFbVY7QUFQRyxPQUFWO0FBU0E1RixVQUFJLENBQUN6VixJQUFMLENBQVU7QUFDTjRCLFlBQUksRUFBRSxRQURBO0FBRU5xRSxTQUFDLEVBQUVpVixFQUFFLEdBQUdoTCxFQUZGO0FBR05oSyxTQUFDLEVBQUVtVixFQUFFLEdBQUdsTDtBQUhGLE9BQVY7QUFLQXNGLFVBQUksQ0FBQ3pWLElBQUwsQ0FBVTtBQUNONEIsWUFBSSxFQUFFLGNBREE7QUFFTitTLFVBQUUsRUFBRXVHLEVBQUUsR0FBR2hMLEVBRkg7QUFHTjBFLFVBQUUsRUFBRXlHLEVBQUUsR0FBR0osRUFBTCxHQUFVOUssRUFIUjtBQUlONEUsVUFBRSxFQUFFcUcsRUFBRSxHQUFHSixFQUFMLEdBQVU5SyxFQUpSO0FBS044RSxVQUFFLEVBQUVtRyxFQUFFLEdBQUdoTCxFQUxIO0FBTU5sSyxTQUFDLEVBQUVtVixFQUFFLEdBQUdsTCxFQU5GO0FBT05oSyxTQUFDLEVBQUVpVixFQUFFLEdBQUdoTDtBQVBGLE9BQVY7QUFTQXNGLFVBQUksQ0FBQ3pWLElBQUwsQ0FBVTtBQUNONEIsWUFBSSxFQUFFLFFBREE7QUFFTnFFLFNBQUMsRUFBRW1WLEVBRkc7QUFHTmxWLFNBQUMsRUFBRWlWLEVBQUUsR0FBR2hMO0FBSEYsT0FBVjtBQUtBc0YsVUFBSSxDQUFDelYsSUFBTCxDQUFVO0FBQ040QixZQUFJLEVBQUUsY0FEQTtBQUVOK1MsVUFBRSxFQUFFeUcsRUFBRSxHQUFHSixFQUZIO0FBR05wRyxVQUFFLEVBQUV1RyxFQUFFLEdBQUdoTCxFQUhIO0FBSU40RSxVQUFFLEVBQUU5TyxDQUpFO0FBS04rTyxVQUFFLEVBQUVxRyxFQUFFLEdBQUdKLEVBQUwsR0FBVTlLLEVBTFI7QUFNTmxLLFNBQUMsRUFBREEsQ0FOTTtBQU9OQyxTQUFDLEVBQUVtVixFQUFFLEdBQUdsTDtBQVBGLE9BQVY7QUFTQSxhQUFPLElBQVA7QUFDSDtBQXpPTDtBQUFBO0FBQUEsV0EwT0ksa0JBQVNsSyxDQUFULEVBQVlDLENBQVosRUFBZTVGLEtBQWYsRUFBc0JDLE1BQXRCLEVBQThCO0FBQzFCLFVBQU1xUixJQUFJLEdBQUcsS0FBSzBKLFVBQUwsRUFBYjtBQUNBMUosVUFBSSxDQUFDaFEsSUFBTCxHQUFZLFdBQVo7QUFDQWdRLFVBQUksQ0FBQzNMLENBQUwsR0FBU0EsQ0FBVDtBQUNBMkwsVUFBSSxDQUFDMUwsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EwTCxVQUFJLENBQUN0UixLQUFMLEdBQWFBLEtBQWI7QUFDQXNSLFVBQUksQ0FBQ3JSLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGFBQU8sSUFBUDtBQUNIO0FBbFBMO0FBQUE7QUFBQSxXQW1QSSxvQkFBVzBGLENBQVgsRUFBY0MsQ0FBZCxFQUFpQjZOLE1BQWpCLEVBQXlCO0FBQ3JCLFVBQU1uQyxJQUFJLEdBQUcsS0FBSzBKLFVBQUwsRUFBYjtBQUNBMUosVUFBSSxDQUFDaFEsSUFBTCxHQUFZLFNBQVo7QUFDQWdRLFVBQUksQ0FBQzNMLENBQUwsR0FBU0EsQ0FBVDtBQUNBMkwsVUFBSSxDQUFDMUwsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EwTCxVQUFJLENBQUNtQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxhQUFPLElBQVA7QUFDSDtBQTFQTDtBQUFBO0FBQUEsV0EyUEkscUJBQVk5TixDQUFaLEVBQWVDLENBQWYsRUFBa0I1RixLQUFsQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDN0IsVUFBTXFSLElBQUksR0FBRyxLQUFLMEosVUFBTCxFQUFiO0FBQ0ExSixVQUFJLENBQUNoUSxJQUFMLEdBQVksU0FBWjtBQUNBZ1EsVUFBSSxDQUFDb0MsT0FBTCxHQUFlMVQsS0FBSyxHQUFHLENBQXZCO0FBQ0FzUixVQUFJLENBQUNxQyxPQUFMLEdBQWUxVCxNQUFNLEdBQUcsQ0FBeEI7QUFDQXFSLFVBQUksQ0FBQzNMLENBQUwsR0FBU0EsQ0FBQyxHQUFHMkwsSUFBSSxDQUFDb0MsT0FBbEI7QUFDQXBDLFVBQUksQ0FBQzFMLENBQUwsR0FBU0EsQ0FBQyxHQUFHMEwsSUFBSSxDQUFDcUMsT0FBbEI7QUFDQSxhQUFPLElBQVA7QUFDSDtBQW5RTDtBQUFBO0FBQUEsV0FvUUksaUJBQVE7QUFDSixhQUFPLEtBQUs2QixLQUFMLENBQVdsRSxJQUFsQjtBQUNBLGFBQU8sSUFBUDtBQUNIO0FBdlFMO0FBQUE7QUFBQSxXQXdRSSxzQkFBYTtBQUFBLFVBQ0RrRSxLQURDLEdBQ3VCLElBRHZCLENBQ0RBLEtBREM7QUFBQSxVQUNNVCxJQUROLEdBQ3VCLElBRHZCLENBQ01BLElBRE47QUFBQSxVQUNZQyxNQURaLEdBQ3VCLElBRHZCLENBQ1lBLE1BRFo7O0FBRVQsVUFBSTVULEtBQUssQ0FBQ0MsT0FBTixDQUFjbVUsS0FBSyxDQUFDbEUsSUFBcEIsQ0FBSixFQUErQixDQUM5QixDQURELE1BRUssSUFBSSxRQUFPa0UsS0FBSyxDQUFDbEUsSUFBYixNQUFzQixRQUExQixFQUFvQztBQUNyQ2tFLGFBQUssQ0FBQ2xFLElBQU4sR0FBYSxDQUFDa0UsS0FBSyxDQUFDbEUsSUFBUCxDQUFiO0FBQ0gsT0FGSSxNQUdBO0FBQ0RrRSxhQUFLLENBQUNsRSxJQUFOLEdBQWEsRUFBYjtBQUNIOztBQUNELFVBQU0ySixZQUFZLEdBQUc7QUFBRTNaLFlBQUksRUFBRSxNQUFSO0FBQWdCeVQsWUFBSSxFQUFKQSxJQUFoQjtBQUFzQkMsY0FBTSxFQUFOQTtBQUF0QixPQUFyQjtBQUNBUSxXQUFLLENBQUNsRSxJQUFOLENBQVc1UixJQUFYLENBQWdCdWIsWUFBaEI7QUFDQSxhQUFPQSxZQUFQO0FBQ0g7QUFyUkw7QUFBQTtBQUFBLFdBc1JJLHFCQUFZO0FBQ1IsVUFBTTNKLElBQUksR0FBRyxLQUFLMEosVUFBTCxFQUFiO0FBQ0ExSixVQUFJLENBQUNBLElBQUwsR0FBWSxFQUFaO0FBQ0EsYUFBT0EsSUFBSSxDQUFDQSxJQUFaO0FBQ0g7QUExUkw7QUFBQTtBQUFBLFdBMlJJLG1CQUFVO0FBQUEsVUFDRWtFLEtBREYsR0FDWSxJQURaLENBQ0VBLEtBREY7O0FBRU4sVUFBSSxDQUFDcFUsS0FBSyxDQUFDQyxPQUFOLENBQWNtVSxLQUFLLENBQUNsRSxJQUFwQixDQUFELElBQThCLENBQUNrRSxLQUFLLENBQUNsRSxJQUFOLENBQVdoVSxNQUE5QyxFQUFzRDtBQUNsRCxlQUFPMEosU0FBUDtBQUNIOztBQUNELFVBQU1zSyxJQUFJLEdBQUdrRSxLQUFLLENBQUNsRSxJQUFOLENBQVdrRSxLQUFLLENBQUNsRSxJQUFOLENBQVdoVSxNQUFYLEdBQW9CLENBQS9CLENBQWI7O0FBQ0EsVUFBSSxDQUFDOEQsS0FBSyxDQUFDQyxPQUFOLENBQWNpUSxJQUFJLENBQUNBLElBQW5CLENBQUwsRUFBK0I7QUFDM0IsZUFBT3RLLFNBQVA7QUFDSDs7QUFDRCxhQUFPc0ssSUFBSSxDQUFDQSxJQUFaO0FBQ0g7QUFyU0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTXFFLEtBQUssR0FBRyxPQUFkO0FBQ1AsSUFBTWpKLE1BQU0sR0FBR1Ysb0RBQUEsRUFBZjtBQUNPLElBQUl5SixLQUFKOztBQUNQLENBQUMsVUFBVUEsS0FBVixFQUFpQjtBQUNkLFdBQVM1RCxlQUFULENBQXlCMkQsS0FBekIsRUFBZ0NuVCxNQUFoQyxFQUF3QztBQUFBLFFBQzVCaVAsSUFENEIsR0FDbkJrRSxLQURtQixDQUM1QmxFLElBRDRCOztBQUVwQyxRQUFJLENBQUNBLElBQUwsRUFBVztBQUNQdEIsZ0VBQUEsQ0FBbUIzTixNQUFuQjtBQUNBO0FBQ0g7O0FBQ0QySiwyREFBQSxDQUFnQlUsTUFBaEI7O0FBQ0EsUUFBSXRMLEtBQUssQ0FBQ0MsT0FBTixDQUFjaVEsSUFBZCxDQUFKLEVBQXlCO0FBQ3JCLFdBQUssSUFBSWpVLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdpVSxJQUFJLENBQUNoVSxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQ2lhLDRFQUFBLENBQTZCaEcsSUFBSSxDQUFDalUsQ0FBRCxDQUFqQyxFQUFzQ3FQLE1BQXRDO0FBQ0g7QUFDSixLQUpELE1BS0ssSUFBSSxRQUFPNEUsSUFBUCxNQUFnQixRQUFwQixFQUE4QjtBQUMvQmdHLDBFQUFBLENBQTZCaEcsSUFBN0IsRUFBbUM1RSxNQUFuQztBQUNILEtBRkksTUFHQTtBQUNEc0QsZ0VBQUEsQ0FBbUIzTixNQUFuQjtBQUNBO0FBQ0g7O0FBQ0QsUUFBSTJKLHNEQUFBLENBQWVVLE1BQWYsQ0FBSixFQUE0QjtBQUN4QnNELGdFQUFBLENBQW1CM04sTUFBbkI7QUFDQTtBQUNIOztBQUNELFFBQU1yQyxLQUFLLEdBQUcwTSxNQUFNLENBQUNKLElBQVAsR0FBY0ksTUFBTSxDQUFDUixJQUFuQztBQUNBLFFBQU1qTSxNQUFNLEdBQUd5TSxNQUFNLENBQUNGLElBQVAsR0FBY0UsTUFBTSxDQUFDTCxJQUFwQztBQUNBLFFBQU0xRyxDQUFDLEdBQUcrRyxNQUFNLENBQUNSLElBQVAsR0FBYzFILGtEQUFBLENBQVdnUixLQUFYLEVBQWtCeFYsS0FBbEIsQ0FBeEI7QUFDQSxRQUFNNEYsQ0FBQyxHQUFHOEcsTUFBTSxDQUFDTCxJQUFQLEdBQWM3SCxrREFBQSxDQUFXZ1IsS0FBWCxFQUFrQnZWLE1BQWxCLENBQXhCO0FBQ0FvQyxVQUFNLENBQUNzRCxDQUFQLEdBQVdBLENBQVg7QUFDQXRELFVBQU0sQ0FBQ3VELENBQVAsR0FBV0EsQ0FBWDtBQUNBdkQsVUFBTSxDQUFDckMsS0FBUCxHQUFlQSxLQUFmO0FBQ0FxQyxVQUFNLENBQUNwQyxNQUFQLEdBQWdCQSxNQUFoQjtBQUNIOztBQUNEd1YsT0FBSyxDQUFDNUQsZUFBTixHQUF3QkEsZUFBeEI7QUFDSCxDQWxDRCxFQWtDRzRELEtBQUssS0FBS0EsS0FBSyxHQUFHLEVBQWIsQ0FsQ1I7O0FBbUNBLElBQU01SSxTQUFTLEdBQUdtRCx1REFBQSxFQUFsQjtBQUNPLElBQUkwRixjQUFKOztBQUNQLENBQUMsVUFBVUEsY0FBVixFQUEwQjtBQUN2QixXQUFTdlQsT0FBVCxDQUFpQnFULEtBQWpCLEVBQXdCNVYsTUFBeEIsRUFBZ0M7QUFBQSxRQUNwQmlKLEtBRG9CLEdBQ1ZqSixNQUFNLENBQUN3QyxRQURHLENBQ3BCeUcsS0FEb0I7QUFFNUI0TSxTQUFLLENBQUM1RCxlQUFOLENBQXNCMkQsS0FBdEIsRUFBNkIzSSxTQUE3QjtBQUNBLFdBQU9tRCwwREFBQSxDQUFtQm5ELFNBQW5CLEVBQThCaEUsS0FBOUIsQ0FBUDtBQUNIOztBQUNENk0sZ0JBQWMsQ0FBQ3ZULE9BQWYsR0FBeUJBLE9BQXpCOztBQUNBLFdBQVNRLElBQVQsQ0FBYy9DLE1BQWQsRUFBc0I7QUFDbEJBLFVBQU0sQ0FBQ2dELFVBQVAsQ0FBa0JULE9BQWxCLENBQTBCVSxHQUExQixDQUE4QjhTLEtBQTlCLEVBQXFDeFQsT0FBckM7QUFDQThQLG1FQUFBLENBQW1CclMsTUFBbkI7QUFDSDs7QUFDRDhWLGdCQUFjLENBQUMvUyxJQUFmLEdBQXNCQSxJQUF0QjtBQUNILENBWkQsRUFZRytTLGNBQWMsS0FBS0EsY0FBYyxHQUFHLEVBQXRCLENBWmpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTXdGLGlCQUFpQixHQUFHLEVBQTFCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLElBQW5CO0FBQ08sSUFBSUMsbUJBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxtQkFBVixFQUErQjtBQUM1QixXQUFTMVosTUFBVCxDQUFnQkcsU0FBaEIsRUFBMkJqQyxNQUEzQixFQUFtQztBQUFBLGdDQUNJQSxNQUFNLENBQUMrQixRQUFQLENBQWdCbkMsVUFBaEIsRUFESjtBQUFBLFFBQ3ZCaEIsTUFEdUIseUJBQ3ZCQSxNQUR1QjtBQUFBLFFBQ2ZwQixjQURlLHlCQUNmQSxjQURlOztBQUUvQixRQUFJQSxjQUFjLENBQUNQLGVBQWYsSUFBa0MsQ0FBdEMsRUFBeUM7QUFDckM7QUFDSDs7QUFDRCxRQUFJd2UsdURBQUEsQ0FBcUJ4WixTQUFyQixDQUFKLEVBQXFDO0FBQ2pDd1osMkRBQUEsQ0FBbUJ4WixTQUFuQjtBQUNIOztBQVA4QixRQVF2QnlaLE9BUnVCLEdBUVh6WixTQVJXLENBUXZCeVosT0FSdUI7O0FBUy9CLFFBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1Y7QUFDSDs7QUFYOEIsUUFZdkJ0YixLQVp1QixHQVl3QjZCLFNBWnhCLENBWXZCN0IsS0FadUI7QUFBQSxRQVloQkMsTUFaZ0IsR0FZd0I0QixTQVp4QixDQVloQjVCLE1BWmdCO0FBQUEsUUFZUnNiLE1BWlEsR0FZd0IxWixTQVp4QixDQVlSMFosTUFaUTtBQUFBLFFBWUFDLE1BWkEsR0FZd0IzWixTQVp4QixDQVlBMlosTUFaQTtBQUFBLFFBWVFDLFVBWlIsR0FZd0I1WixTQVp4QixDQVlRNFosVUFaUjtBQWEvQkMsZ0VBQUEsQ0FBbUJILE1BQW5CLEVBQTJCRyxzRUFBM0IsRUFBeURSLGlCQUF6RDtBQUNBLFFBQU1TLFNBQVMsR0FBRzNiLEtBQUgsYUFBR0EsS0FBSCxjQUFHQSxLQUFILEdBQVlzYixPQUFPLENBQUN0YixLQUFuQztBQUNBLFFBQU00YixVQUFVLEdBQUczYixNQUFILGFBQUdBLE1BQUgsY0FBR0EsTUFBSCxHQUFhcWIsT0FBTyxDQUFDcmIsTUFBckM7QUFDQSxRQUFNNGIsT0FBTyxHQUFHclgsa0RBQUEsQ0FBVzNDLFNBQVgsRUFBc0I4WixTQUF0QixDQUFoQjtBQUNBLFFBQU1HLE9BQU8sR0FBR3RYLGtEQUFBLENBQVczQyxTQUFYLEVBQXNCK1osVUFBdEIsQ0FBaEI7QUFDQSxRQUFNckwsU0FBUyxHQUFHM1EsTUFBTSxDQUFDcUUsUUFBUCxDQUFnQnpFLFVBQWhCLEVBQWxCO0FBQ0ErUSxhQUFTLENBQUNyUixZQUFWLENBQXVCVixNQUFNLENBQUNuQyxDQUE5QixFQUFpQ21DLE1BQU0sQ0FBQ3BDLENBQXhDLEVBQTJDb0MsTUFBTSxDQUFDSSxDQUFsRCxFQUFxREosTUFBTSxDQUFDSyxDQUE1RCxFQUErREwsTUFBTSxDQUFDTyxFQUF0RSxFQUEwRVAsTUFBTSxDQUFDUyxFQUFqRjtBQUNBc1IsYUFBUyxDQUFDQyxXQUFWLEdBQXdCLENBQXhCOztBQUNBLFFBQUlpTCxVQUFVLEtBQUt6VSxTQUFuQixFQUE4QjtBQUMxQnVKLGVBQVMsQ0FBQ2tHLFdBQVYsR0FBd0IsRUFBeEI7QUFDQWxHLGVBQVMsQ0FBQ2lHLFNBQVYsR0FBc0IzYSw0RUFBQSxDQUE0QjRmLFVBQTVCLEVBQXdDLENBQXhDLEVBQTJDcmUsY0FBM0MsQ0FBdEI7QUFDQW1ULGVBQVMsQ0FBQ3FELFNBQVY7QUFDQXJELGVBQVMsQ0FBQ3NFLElBQVYsQ0FBZWdILE9BQWYsRUFBd0JDLE9BQXhCLEVBQWlDSCxTQUFqQyxFQUE0Q0MsVUFBNUM7QUFDQXJMLGVBQVMsQ0FBQ3VELFNBQVY7QUFDQXZELGVBQVMsQ0FBQ3dFLElBQVY7QUFDSDs7QUFDRCxRQUFJeUcsTUFBTSxLQUFLeFUsU0FBZixFQUEwQjtBQUN0QnVKLGVBQVMsQ0FBQ2tHLFdBQVYsR0FBd0I1YSw0RUFBQSxDQUE0QjJmLE1BQTVCLEVBQW9DLENBQXBDLEVBQXVDcGUsY0FBdkMsQ0FBeEI7QUFDQW1ULGVBQVMsQ0FBQ2lHLFNBQVYsR0FBc0IsRUFBdEI7QUFDQWpHLGVBQVMsQ0FBQ3FELFNBQVY7QUFDQXJELGVBQVMsQ0FBQ3NFLElBQVYsQ0FBZWdILE9BQWYsRUFBd0JDLE9BQXhCLEVBQWlDSCxTQUFqQyxFQUE0Q0MsVUFBNUM7QUFDQXJMLGVBQVMsQ0FBQ3VELFNBQVY7QUFDQXZELGVBQVMsQ0FBQ3lFLE1BQVY7QUFDSDs7QUFDRHpFLGFBQVMsQ0FBQ3dMLFlBQVYsR0FBeUIsWUFBekI7QUFDQXhMLGFBQVMsQ0FBQ2tHLFdBQVYsR0FBd0IsRUFBeEI7QUFDQSxRQUFNdUYsTUFBTSxHQUFHWCxnREFBQSxDQUFjeFosU0FBZCxDQUFmOztBQUNBLFFBQUltYSxNQUFKLEVBQVk7QUFDUixVQUFNQyxJQUFJLEdBQUdwYSxTQUFTLENBQUNvYSxJQUF2QjtBQURRLFVBRUFDLElBRkEsR0FFZ0RoQixpQkFGaEQsQ0FFQWdCLElBRkE7QUFBQSxVQUVNbmdCLEtBRk4sR0FFZ0RtZixpQkFGaEQsQ0FFTW5mLEtBRk47QUFBQSxVQUVhQyxLQUZiLEdBRWdEa2YsaUJBRmhELENBRWFsZixLQUZiO0FBQUEsVUFFb0JtZ0IsT0FGcEIsR0FFZ0RqQixpQkFGaEQsQ0FFb0JpQixPQUZwQjtBQUFBLFVBRTZCQyxhQUY3QixHQUVnRGxCLGlCQUZoRCxDQUU2QmtCLGFBRjdCO0FBR1IsVUFBTUMsV0FBVyxHQUFHQyxvREFBQSxDQUFhcEIsaUJBQWIsQ0FBcEI7QUFDQSxVQUFNcUIsVUFBVSxHQUFHTCxJQUFJLEdBQUdmLFVBQTFCO0FBQ0EsVUFBTXFCLFVBQVUsR0FBR2Qsa0VBQUEsQ0FBeUJSLGlCQUF6QixDQUFuQjtBQUNBM0ssZUFBUyxDQUFDa00sSUFBVixHQUFpQkgscURBQUEsQ0FBY0QsV0FBZCxFQUEyQkgsSUFBM0IsQ0FBakI7QUFDQTNMLGVBQVMsQ0FBQ2lHLFNBQVYsR0FBc0IzYSw0RUFBQSxDQUE0QkUsS0FBNUIsRUFBbUNDLEtBQW5DLEVBQTBDb0IsY0FBMUMsQ0FBdEI7QUFDQSxVQUFJdUksQ0FBQyxHQUFHa1csT0FBTyxHQUFHVyxVQUFWLEdBQXVCQSxVQUFVLElBQUliLFNBQVMsR0FBR2UscUVBQUEsQ0FBMkJ4QixpQkFBM0IsRUFBOENlLElBQTlDLEVBQW9ELENBQXBELENBQWhCLENBQWpDLEdBQTJHLENBQW5IO0FBQ0EsVUFBSXJXLENBQUMsR0FBRyxDQUFSOztBQUNBLFdBQUssSUFBSXZJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc0ZSxJQUFJLENBQUMzZSxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxZQUFNMGIsTUFBTSxHQUFHa0QsSUFBSSxDQUFDNWUsQ0FBRCxDQUFuQjs7QUFDQSxZQUFJMGIsTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDakJwVCxXQUFDLEdBQUc2VyxVQUFVLEdBQUdBLFVBQVUsSUFBSWIsU0FBUyxHQUFHZSxxRUFBQSxDQUEyQnhCLGlCQUEzQixFQUE4Q2UsSUFBOUMsRUFBb0Q1ZSxDQUFDLEdBQUcsQ0FBeEQsQ0FBaEIsQ0FBYixHQUEyRixDQUF6RztBQUNBdUksV0FBQyxJQUFJc1csSUFBSSxHQUFHQyxPQUFaO0FBQ0gsU0FIRCxNQUlLO0FBQ0QsY0FBTVEsVUFBVSxHQUFHVixJQUFJLENBQUM1ZSxDQUFDLEdBQUcsQ0FBTCxDQUF2QjtBQUNBLGNBQU11ZixPQUFPLEdBQUdOLHVEQUFBLENBQWdCRCxXQUFoQixFQUE2QkgsSUFBN0IsRUFBbUNuRCxNQUFuQyxFQUEyQzRELFVBQTNDLElBQXlEUCxhQUF6RTtBQUNBN0wsbUJBQVMsQ0FBQ3NNLFFBQVYsQ0FBbUI5RCxNQUFuQixFQUEyQnBULENBQTNCLEVBQThCQyxDQUFDLEdBQUcyVyxVQUFsQztBQUNBNVcsV0FBQyxJQUFJaVgsT0FBTDtBQUNIO0FBQ0o7QUFDSixLQXZCRCxNQXdCSztBQUNELFVBQUloWCxFQUFDLEdBQUcsQ0FBUjs7QUFDQSxVQUFJM0YsTUFBSixFQUFZO0FBQ1IsWUFBTTZjLGtCQUFrQixHQUFHcEIsMEVBQUEsQ0FBaUNSLGlCQUFqQyxDQUEzQjtBQUNBdFYsVUFBQyxHQUFHLENBQUMzRixNQUFNLEdBQUdxYixPQUFPLENBQUNyYixNQUFsQixJQUE0QjZjLGtCQUFoQzs7QUFDQSxZQUFJbFgsRUFBQyxHQUFHLENBQVIsRUFBVztBQUNQQSxZQUFDLEdBQUcsQ0FBSjtBQUNIO0FBQ0o7O0FBQ0RBLFFBQUMsSUFBSWtXLE9BQUw7QUFUQyxVQVVPaUIsS0FWUCxHQVVpQnpCLE9BVmpCLENBVU95QixLQVZQOztBQVdELFdBQUssSUFBSTFmLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUcwZixLQUFLLENBQUN6ZixNQUExQixFQUFrQ0QsRUFBQyxFQUFuQyxFQUF1QztBQUNuQyxZQUFNMmYsSUFBSSxHQUFHRCxLQUFLLENBQUMxZixFQUFELENBQWxCOztBQUNBLFlBQUkyZixJQUFJLENBQUNDLE9BQUwsQ0FBYTNmLE1BQWpCLEVBQXlCO0FBQ3JCLGNBQU00ZixLQUFLLEdBQUdGLElBQUksQ0FBQ0MsT0FBTCxDQUFhLENBQWIsQ0FBZDs7QUFDQSxjQUFNVCxXQUFVLEdBQUdkLGtFQUFBLENBQXlCd0IsS0FBSyxDQUFDM0IsTUFBL0IsQ0FBbkI7O0FBQ0EsY0FBSTVWLEVBQUMsR0FBRyxDQUFDZ1csU0FBUyxHQUFHcUIsSUFBSSxDQUFDaGQsS0FBbEIsSUFBMkJ3YyxXQUFuQzs7QUFDQSxjQUFJN1csRUFBQyxHQUFHLENBQVIsRUFBVztBQUNQQSxjQUFDLEdBQUcsQ0FBSjtBQUNIOztBQUNEQSxZQUFDLElBQUlrVyxPQUFMO0FBUHFCLGNBUWJvQixPQVJhLEdBUURELElBUkMsQ0FRYkMsT0FSYTtBQVNyQixjQUFNRSxVQUFVLEdBQUdILElBQUksQ0FBQy9jLE1BQUwsR0FBY2tiLFVBQWpDOztBQUNBLGVBQUssSUFBSWlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILE9BQU8sQ0FBQzNmLE1BQTVCLEVBQW9DOGYsQ0FBQyxFQUFyQyxFQUF5QztBQUNyQyxnQkFBTXJFLE9BQU0sR0FBR2tFLE9BQU8sQ0FBQ0csQ0FBRCxDQUF0QjtBQUNBLGdCQUFNbEIsS0FBSSxHQUFHbkQsT0FBTSxDQUFDd0MsTUFBUCxDQUFjVyxJQUEzQjtBQUNBLGdCQUFNbUIsZ0JBQWdCLEdBQUczQiwwRUFBQSxDQUFpQzNDLE9BQU0sQ0FBQ3dDLE1BQXhDLENBQXpCOztBQUNBLGdCQUFNZ0IsV0FBVSxHQUFHTCxLQUFJLEdBQUdmLFVBQTFCOztBQUNBLGdCQUFNbUMsVUFBVSxHQUFHaEIsb0RBQUEsQ0FBYXZELE9BQU0sQ0FBQ3dDLE1BQXBCLENBQW5CO0FBQ0FoTCxxQkFBUyxDQUFDa00sSUFBVixHQUFpQkgscURBQUEsQ0FBY2dCLFVBQWQsRUFBMEJwQixLQUExQixDQUFqQjtBQUNBM0wscUJBQVMsQ0FBQ2lHLFNBQVYsR0FBc0IzYSw0RUFBQSxDQUE0QmtkLE9BQU0sQ0FBQ3dDLE1BQVAsQ0FBY3hmLEtBQTFDLEVBQWlEZ2QsT0FBTSxDQUFDd0MsTUFBUCxDQUFjdmYsS0FBL0QsRUFBc0VvQixjQUF0RSxDQUF0QjtBQUNBbVQscUJBQVMsQ0FBQ3NNLFFBQVYsQ0FBbUI5RCxPQUFNLENBQUNBLE1BQTFCLEVBQWtDcFQsRUFBbEMsRUFBcUNDLEVBQUMsR0FBRzJXLFdBQUosR0FBaUJjLGdCQUFnQixJQUFJRixVQUFVLEdBQUdaLFdBQWpCLENBQXRFO0FBQ0E1VyxjQUFDLElBQUlvVCxPQUFNLENBQUM2RCxPQUFaO0FBQ0g7QUFDSjs7QUFDRGhYLFVBQUMsSUFBSW9YLElBQUksQ0FBQy9jLE1BQVY7QUFDSDtBQUNKO0FBQ0o7O0FBQ0RtYixxQkFBbUIsQ0FBQzFaLE1BQXBCLEdBQTZCQSxNQUE3Qjs7QUFDQSxXQUFTaUIsSUFBVCxDQUFjL0MsTUFBZCxFQUFzQjtBQUNsQjJkLHlEQUFBLENBQW1CM2QsTUFBbkI7QUFDQUEsVUFBTSxDQUFDZ0QsVUFBUCxDQUFrQmxCLE1BQWxCLENBQXlCbUIsR0FBekIsQ0FBNkIyYSx1Q0FBN0IsRUFBbUM5YixNQUFuQztBQUNIOztBQUNEMFoscUJBQW1CLENBQUN6WSxJQUFwQixHQUEyQkEsSUFBM0I7QUFDSCxDQTlHRCxFQThHR3lZLG1CQUFtQixLQUFLQSxtQkFBbUIsR0FBRyxFQUEzQixDQTlHdEIsRTs7Ozs7Ozs7Ozs7Ozs7QUNUQSxJQUFNcmIsTUFBTSxHQUFHVixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBLElBQU1yQixPQUFPLEdBQUc4QixNQUFNLENBQUNQLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBaEI7QUFDTyxJQUFNaWUsRUFBRSxHQUFHLElBQVg7QUFDUCxJQUFNQyxLQUFLLEdBQUcsSUFBSWhXLEdBQUosRUFBZDtBQUNPLElBQUk0VSxJQUFKOztBQUNQLENBQUMsVUFBVUEsSUFBVixFQUFnQjtBQUNiLFdBQVNxQixRQUFULENBQWtCbEIsSUFBbEIsRUFBd0JQLElBQXhCLEVBQThCO0FBQzFCLFdBQU9PLElBQUksQ0FBQ21CLElBQUwsQ0FBVUMsT0FBVixDQUFrQixHQUFsQixFQUF1QjNCLElBQUksQ0FBQzRCLFFBQUwsRUFBdkIsQ0FBUDtBQUNIOztBQUNEeEIsTUFBSSxDQUFDcUIsUUFBTCxHQUFnQkEsUUFBaEI7O0FBQ0EsV0FBU0ksV0FBVCxDQUFxQnRCLElBQXJCLEVBQTJCUCxJQUEzQixFQUFpQ0QsSUFBakMsRUFBdUM7QUFDbkNoZSxXQUFPLENBQUN3ZSxJQUFSLEdBQWVrQixRQUFRLENBQUNsQixJQUFELEVBQU9QLElBQVAsQ0FBdkI7QUFDQSxXQUFPamUsT0FBTyxDQUFDOGYsV0FBUixDQUFvQjlCLElBQXBCLEVBQTBCamMsS0FBakM7QUFDSDs7QUFDRHNjLE1BQUksQ0FBQ3lCLFdBQUwsR0FBbUJBLFdBQW5COztBQUNBLFdBQVNDLFlBQVQsQ0FBc0J2QixJQUF0QixFQUE0QndCLEtBQTVCLEVBQWtDO0FBQzlCLFFBQUlqZSxLQUFLLEdBQUd5YyxJQUFJLENBQUN5QixNQUFMLENBQVloVyxHQUFaLENBQWdCK1YsS0FBaEIsQ0FBWjs7QUFDQSxRQUFJLENBQUNqZSxLQUFMLEVBQVk7QUFDUkEsV0FBSyxHQUFHK2QsV0FBVyxDQUFDdEIsSUFBRCxFQUFPZ0IsRUFBUCxFQUFXUSxLQUFYLENBQW5CO0FBQ0F4QixVQUFJLENBQUN5QixNQUFMLENBQVlyYixHQUFaLENBQWdCb2IsS0FBaEIsRUFBc0JqZSxLQUF0QjtBQUNIOztBQUNELFdBQU9BLEtBQVA7QUFDSDs7QUFDRHNjLE1BQUksQ0FBQzBCLFlBQUwsR0FBb0JBLFlBQXBCOztBQUNBLFdBQVNHLFVBQVQsQ0FBb0IxQixJQUFwQixFQUEwQlMsS0FBMUIsRUFBaUNrQixNQUFqQyxFQUF5QztBQUNyQyxRQUFNQyxJQUFJLEdBQUduQixLQUFLLEdBQUdrQixNQUFyQjtBQUNBLFFBQUlFLE9BQU8sR0FBRzdCLElBQUksQ0FBQzhCLFFBQUwsQ0FBY3JXLEdBQWQsQ0FBa0JtVyxJQUFsQixDQUFkOztBQUNBLFFBQUksQ0FBQ0MsT0FBTCxFQUFjO0FBQ1YsVUFBTUUsV0FBVyxHQUFHUixZQUFZLENBQUN2QixJQUFELEVBQU8yQixNQUFQLENBQWhDO0FBQ0EsVUFBTUssVUFBVSxHQUFHVixXQUFXLENBQUN0QixJQUFELEVBQU9nQixFQUFQLEVBQVdQLEtBQUssR0FBR2tCLE1BQW5CLENBQTlCO0FBQ0FFLGFBQU8sR0FBR0csVUFBVSxHQUFHRCxXQUF2QjtBQUNBL0IsVUFBSSxDQUFDOEIsUUFBTCxDQUFjMWIsR0FBZCxDQUFrQndiLElBQWxCLEVBQXdCQyxPQUF4QjtBQUNIOztBQUNELFdBQU9BLE9BQVA7QUFDSDs7QUFDRGhDLE1BQUksQ0FBQzZCLFVBQUwsR0FBa0JBLFVBQWxCOztBQUNBLFdBQVNPLFVBQVQsQ0FBb0JqQyxJQUFwQixFQUEwQlAsSUFBMUIsRUFBZ0NnQixLQUFoQyxFQUF1Q2tCLE1BQXZDLEVBQStDO0FBQzNDLFFBQU03WCxLQUFLLEdBQUcyVixJQUFJLEdBQUd1QixFQUFyQjtBQUNBLFFBQU16ZCxLQUFLLEdBQUdnZSxZQUFZLENBQUN2QixJQUFELEVBQU9TLEtBQVAsQ0FBMUI7O0FBQ0EsUUFBSSxDQUFDa0IsTUFBTCxFQUFhO0FBQ1QsYUFBT3BlLEtBQUssR0FBR3VHLEtBQWY7QUFDSDs7QUFDRCxRQUFNK1gsT0FBTyxHQUFHSCxVQUFVLENBQUMxQixJQUFELEVBQU9TLEtBQVAsRUFBY2tCLE1BQWQsQ0FBMUI7QUFDQSxXQUFPRSxPQUFPLEdBQUcvWCxLQUFqQjtBQUNIOztBQUNEK1YsTUFBSSxDQUFDb0MsVUFBTCxHQUFrQkEsVUFBbEI7O0FBQ0EsV0FBU0MsT0FBVCxDQUFpQnBELE1BQWpCLEVBQXlCO0FBQ3JCLFFBQUlxQyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxRQUFJckMsTUFBTSxDQUFDcUQsSUFBWCxFQUFpQjtBQUNiaEIsVUFBSSxJQUFJLE9BQVI7QUFDSDs7QUFDRCxRQUFJckMsTUFBTSxDQUFDc0QsTUFBWCxFQUFtQjtBQUNmakIsVUFBSSxJQUFJLFNBQVI7QUFDSDs7QUFDREEsUUFBSSxrQkFBV3JDLE1BQU0sQ0FBQ2tCLElBQWxCLENBQUo7QUFDQSxRQUFJQSxJQUFJLEdBQUdpQixLQUFLLENBQUN4VixHQUFOLENBQVUwVixJQUFWLENBQVg7O0FBQ0EsUUFBSSxDQUFDbkIsSUFBTCxFQUFXO0FBQ1BBLFVBQUksR0FBRztBQUNIbUIsWUFBSSxFQUFKQSxJQURHO0FBRUhNLGNBQU0sRUFBRSxJQUFJeFcsR0FBSixFQUZMO0FBR0g2VyxnQkFBUSxFQUFFLElBQUk3VyxHQUFKO0FBSFAsT0FBUDtBQUtBZ1csV0FBSyxDQUFDN2EsR0FBTixDQUFVK2EsSUFBVixFQUFnQm5CLElBQWhCO0FBQ0g7O0FBQ0QsV0FBT0EsSUFBUDtBQUNIOztBQUNESCxNQUFJLENBQUNxQyxPQUFMLEdBQWVBLE9BQWY7QUFDSCxDQTlERCxFQThER3JDLElBQUksS0FBS0EsSUFBSSxHQUFHLEVBQVosQ0E5RFAsRTs7Ozs7Ozs7Ozs7OztBQ0xPLElBQUlaLFVBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxVQUFWLEVBQXNCO0FBQ25CQSxZQUFVLENBQUNSLGlCQUFYLEdBQStCO0FBQzNCdUIsUUFBSSxFQUFFLE9BRHFCO0FBRTNCUCxRQUFJLEVBQUUsRUFGcUI7QUFHM0JuZ0IsU0FBSyxFQUFFLENBSG9CO0FBSTNCQyxTQUFLLEVBQUUsQ0FKb0I7QUFLM0I0aUIsUUFBSSxFQUFFLEtBTHFCO0FBTTNCQyxVQUFNLEVBQUUsS0FObUI7QUFPM0JDLGFBQVMsRUFBRSxLQVBnQjtBQVEzQjFDLGlCQUFhLEVBQUUsQ0FSWTtBQVMzQkQsV0FBTyxFQUFFLENBVGtCO0FBVTNCNEMsU0FBSyxFQUFFLE1BVm9CO0FBVzNCQyxpQkFBYSxFQUFFO0FBWFksR0FBL0I7O0FBYUEsV0FBU0MsT0FBVCxDQUFpQjFQLE1BQWpCLEVBQXlCMlAsYUFBekIsRUFBd0M3YyxNQUF4QyxFQUFnRDtBQUFBOztBQUM1Q0EsVUFBTSxDQUFDb2EsSUFBUCxtQkFBY2xOLE1BQWQsYUFBY0EsTUFBZCx1QkFBY0EsTUFBTSxDQUFFa04sSUFBdEIsdURBQThCeUMsYUFBYSxDQUFDekMsSUFBNUM7QUFDQXBhLFVBQU0sQ0FBQzZaLElBQVAsbUJBQWMzTSxNQUFkLGFBQWNBLE1BQWQsdUJBQWNBLE1BQU0sQ0FBRTJNLElBQXRCLHVEQUE4QmdELGFBQWEsQ0FBQ2hELElBQTVDO0FBQ0E3WixVQUFNLENBQUN0RyxLQUFQLG9CQUFld1QsTUFBZixhQUFlQSxNQUFmLHVCQUFlQSxNQUFNLENBQUV4VCxLQUF2Qix5REFBZ0NtakIsYUFBYSxDQUFDbmpCLEtBQTlDO0FBQ0FzRyxVQUFNLENBQUNyRyxLQUFQLG9CQUFldVQsTUFBZixhQUFlQSxNQUFmLHVCQUFlQSxNQUFNLENBQUV2VCxLQUF2Qix5REFBZ0NrakIsYUFBYSxDQUFDbGpCLEtBQTlDO0FBQ0FxRyxVQUFNLENBQUN1YyxJQUFQLG1CQUFjclAsTUFBZCxhQUFjQSxNQUFkLHVCQUFjQSxNQUFNLENBQUVxUCxJQUF0Qix1REFBOEJNLGFBQWEsQ0FBQ04sSUFBNUM7QUFDQXZjLFVBQU0sQ0FBQ3djLE1BQVAscUJBQWdCdFAsTUFBaEIsYUFBZ0JBLE1BQWhCLHVCQUFnQkEsTUFBTSxDQUFFc1AsTUFBeEIsMkRBQWtDSyxhQUFhLENBQUNMLE1BQWhEO0FBQ0F4YyxVQUFNLENBQUN5YyxTQUFQLHdCQUFtQnZQLE1BQW5CLGFBQW1CQSxNQUFuQix1QkFBbUJBLE1BQU0sQ0FBRXVQLFNBQTNCLGlFQUF3Q0ksYUFBYSxDQUFDSixTQUF0RDtBQUNBemMsVUFBTSxDQUFDK1osYUFBUCw0QkFBdUI3TSxNQUF2QixhQUF1QkEsTUFBdkIsdUJBQXVCQSxNQUFNLENBQUU2TSxhQUEvQix5RUFBZ0Q4QyxhQUFhLENBQUM5QyxhQUE5RDtBQUNBL1osVUFBTSxDQUFDOFosT0FBUCxzQkFBaUI1TSxNQUFqQixhQUFpQkEsTUFBakIsdUJBQWlCQSxNQUFNLENBQUU0TSxPQUF6Qiw2REFBb0MrQyxhQUFhLENBQUMvQyxPQUFsRDtBQUNBOVosVUFBTSxDQUFDMGMsS0FBUCxvQkFBZXhQLE1BQWYsYUFBZUEsTUFBZix1QkFBZUEsTUFBTSxDQUFFd1AsS0FBdkIseURBQWdDRyxhQUFhLENBQUNILEtBQTlDO0FBQ0ExYyxVQUFNLENBQUMyYyxhQUFQLDRCQUF1QnpQLE1BQXZCLGFBQXVCQSxNQUF2Qix1QkFBdUJBLE1BQU0sQ0FBRXlQLGFBQS9CLHlFQUFnREUsYUFBYSxDQUFDRixhQUE5RDtBQUNIOztBQUNEdEQsWUFBVSxDQUFDdUQsT0FBWCxHQUFxQkEsT0FBckI7O0FBQ0EsV0FBUzdSLElBQVQsQ0FBY21DLE1BQWQsRUFBc0JDLE1BQXRCLEVBQThCO0FBQzFCQSxVQUFNLENBQUNpTixJQUFQLEdBQWNsTixNQUFNLENBQUNrTixJQUFyQjtBQUNBak4sVUFBTSxDQUFDME0sSUFBUCxHQUFjM00sTUFBTSxDQUFDMk0sSUFBckI7QUFDQTFNLFVBQU0sQ0FBQ3pULEtBQVAsR0FBZXdULE1BQU0sQ0FBQ3hULEtBQXRCO0FBQ0F5VCxVQUFNLENBQUN4VCxLQUFQLEdBQWV1VCxNQUFNLENBQUN2VCxLQUF0QjtBQUNBd1QsVUFBTSxDQUFDb1AsSUFBUCxHQUFjclAsTUFBTSxDQUFDcVAsSUFBckI7QUFDQXBQLFVBQU0sQ0FBQ3FQLE1BQVAsR0FBZ0J0UCxNQUFNLENBQUNzUCxNQUF2QjtBQUNBclAsVUFBTSxDQUFDc1AsU0FBUCxHQUFtQnZQLE1BQU0sQ0FBQ3VQLFNBQTFCO0FBQ0F0UCxVQUFNLENBQUM0TSxhQUFQLEdBQXVCN00sTUFBTSxDQUFDNk0sYUFBOUI7QUFDQTVNLFVBQU0sQ0FBQzJNLE9BQVAsR0FBaUI1TSxNQUFNLENBQUM0TSxPQUF4QjtBQUNBM00sVUFBTSxDQUFDdVAsS0FBUCxHQUFleFAsTUFBTSxDQUFDd1AsS0FBdEI7QUFDQXZQLFVBQU0sQ0FBQ3dQLGFBQVAsR0FBdUJ6UCxNQUFNLENBQUN5UCxhQUE5QjtBQUNIOztBQUNEdEQsWUFBVSxDQUFDdE8sSUFBWCxHQUFrQkEsSUFBbEI7O0FBQ0EsV0FBUytSLGFBQVQsQ0FBdUI1RCxNQUF2QixFQUErQjtBQUMzQixZQUFRQSxNQUFSLGFBQVFBLE1BQVIsdUJBQVFBLE1BQU0sQ0FBRXdELEtBQWhCO0FBQ0ksV0FBSyxNQUFMO0FBQWEsZUFBTyxDQUFQOztBQUNiLFdBQUssUUFBTDtBQUFlLGVBQU8sR0FBUDs7QUFDZixXQUFLLE9BQUw7QUFBYyxlQUFPLENBQVA7O0FBQ2Q7QUFBUyxlQUFPLENBQVA7QUFKYjtBQU1IOztBQUNEckQsWUFBVSxDQUFDeUQsYUFBWCxHQUEyQkEsYUFBM0I7O0FBQ0EsV0FBU0MscUJBQVQsQ0FBK0I3RCxNQUEvQixFQUF1QztBQUNuQyxZQUFRQSxNQUFSLGFBQVFBLE1BQVIsdUJBQVFBLE1BQU0sQ0FBRXlELGFBQWhCO0FBQ0ksV0FBSyxLQUFMO0FBQVksZUFBTyxDQUFQOztBQUNaLFdBQUssUUFBTDtBQUFlLGVBQU8sR0FBUDs7QUFDZixXQUFLLFFBQUw7QUFBZSxlQUFPLENBQVA7O0FBQ2Y7QUFBUyxlQUFPLENBQVA7QUFKYjtBQU1IOztBQUNEdEQsWUFBVSxDQUFDMEQscUJBQVgsR0FBbUNBLHFCQUFuQztBQUNILENBNURELEVBNERHMUQsVUFBVSxLQUFLQSxVQUFVLEdBQUcsRUFBbEIsQ0E1RGIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQSxJQUFNUixpQkFBaUIsR0FBRyxFQUExQjtBQUNPLElBQUltRSxRQUFKOztBQUNQLENBQUMsVUFBVUEsUUFBVixFQUFvQjtBQUNqQixXQUFTQyxNQUFULEdBQWtCO0FBQ2QsV0FBTztBQUNIckMsYUFBTyxFQUFFLEVBRE47QUFFSGpkLFdBQUssRUFBRSxDQUZKO0FBR0hDLFlBQU0sRUFBRTtBQUhMLEtBQVA7QUFLSDs7QUFDRG9mLFVBQVEsQ0FBQ0MsTUFBVCxHQUFrQkEsTUFBbEI7O0FBQ0EsV0FBU3JULEtBQVQsQ0FBZStRLElBQWYsRUFBcUI7QUFDakJBLFFBQUksQ0FBQ0MsT0FBTCxDQUFhM2YsTUFBYixHQUFzQixDQUF0QjtBQUNBMGYsUUFBSSxDQUFDaGQsS0FBTCxHQUFhLENBQWI7QUFDQWdkLFFBQUksQ0FBQy9jLE1BQUwsR0FBYyxDQUFkO0FBQ0g7O0FBQ0RvZixVQUFRLENBQUNwVCxLQUFULEdBQWlCQSxLQUFqQjs7QUFDQSxXQUFTcUcsR0FBVCxDQUFhMEssSUFBYixFQUFtQmpFLE1BQW5CLEVBQTJCO0FBQ3ZCaUUsUUFBSSxDQUFDQyxPQUFMLENBQWF2ZCxJQUFiLENBQWtCcVosTUFBbEI7QUFDQWlFLFFBQUksQ0FBQ2hkLEtBQUwsSUFBYytZLE1BQU0sQ0FBQzZELE9BQXJCO0FBQ0FJLFFBQUksQ0FBQy9jLE1BQUwsR0FBY1UsSUFBSSxDQUFDNGUsR0FBTCxDQUFTdkMsSUFBSSxDQUFDL2MsTUFBZCxFQUFzQjhZLE1BQU0sQ0FBQ3dDLE1BQVAsQ0FBY1csSUFBZCxHQUFxQm5ELE1BQU0sQ0FBQ3dDLE1BQVAsQ0FBY1ksT0FBekQsQ0FBZDtBQUNIOztBQUNEa0QsVUFBUSxDQUFDL00sR0FBVCxHQUFlQSxHQUFmOztBQUNBLFdBQVMvRSxNQUFULENBQWdCaUMsTUFBaEIsRUFBd0JELE1BQXhCLEVBQWdDO0FBQzVCLFFBQUlBLE1BQU0sQ0FBQzBOLE9BQVAsQ0FBZTNmLE1BQW5CLEVBQTJCO0FBQUE7O0FBQ3ZCLHlCQUFBa1MsTUFBTSxDQUFDeU4sT0FBUCxFQUFldmQsSUFBZiwyQ0FBdUI2UCxNQUFNLENBQUMwTixPQUE5Qjs7QUFDQXpOLFlBQU0sQ0FBQ3hQLEtBQVAsSUFBZ0J1UCxNQUFNLENBQUN2UCxLQUF2QjtBQUNBd1AsWUFBTSxDQUFDdlAsTUFBUCxHQUFnQlUsSUFBSSxDQUFDNGUsR0FBTCxDQUFTL1AsTUFBTSxDQUFDdlAsTUFBaEIsRUFBd0JzUCxNQUFNLENBQUN0UCxNQUEvQixDQUFoQjtBQUNIO0FBQ0o7O0FBQ0RvZixVQUFRLENBQUM5UixNQUFULEdBQWtCQSxNQUFsQjs7QUFDQSxXQUFTaVMsWUFBVCxDQUFzQnhDLElBQXRCLEVBQTRCO0FBQUEsUUFDaEJDLE9BRGdCLEdBQ0pELElBREksQ0FDaEJDLE9BRGdCOztBQUV4QixRQUFJQSxPQUFPLENBQUMzZixNQUFaLEVBQW9CO0FBQ2hCLFVBQU1taUIsSUFBSSxHQUFHeEMsT0FBTyxDQUFDQSxPQUFPLENBQUMzZixNQUFSLEdBQWlCLENBQWxCLENBQXBCOztBQUNBLFVBQUksS0FBSzBQLElBQUwsQ0FBVXlTLElBQUksQ0FBQzFHLE1BQWYsQ0FBSixFQUE0QjtBQUN4QmtFLGVBQU8sQ0FBQ3RkLEdBQVI7QUFDQXFkLFlBQUksQ0FBQ2hkLEtBQUwsSUFBY3lmLElBQUksQ0FBQzdDLE9BQW5CO0FBQ0g7QUFDSjtBQUNKOztBQUNEeUMsVUFBUSxDQUFDRyxZQUFULEdBQXdCQSxZQUF4Qjs7QUFDQSxXQUFTRSxhQUFULENBQXVCMUMsSUFBdkIsRUFBNkI7QUFBQSxRQUNqQkMsT0FEaUIsR0FDTEQsSUFESyxDQUNqQkMsT0FEaUI7O0FBRXpCLFFBQUlBLE9BQU8sQ0FBQzNmLE1BQVosRUFBb0I7QUFDaEIsVUFBTXliLE1BQU0sR0FBR2tFLE9BQU8sQ0FBQyxDQUFELENBQXRCO0FBQ0FELFVBQUksQ0FBQy9jLE1BQUwsSUFBZThZLE1BQU0sQ0FBQ3dDLE1BQVAsQ0FBY1ksT0FBN0I7QUFDSDtBQUNKOztBQUNEa0QsVUFBUSxDQUFDSyxhQUFULEdBQXlCQSxhQUF6QjtBQUNILENBaERELEVBZ0RHTCxRQUFRLEtBQUtBLFFBQVEsR0FBRyxFQUFoQixDQWhEWDs7QUFpRE8sSUFBSTNDLFdBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxXQUFWLEVBQXVCO0FBQ3BCLFdBQVNpRCxVQUFULENBQW9COWQsU0FBcEIsRUFBK0I7QUFBQSxRQUNuQm9hLElBRG1CLEdBQ1ZwYSxTQURVLENBQ25Cb2EsSUFEbUI7O0FBRTNCLFFBQUksQ0FBQ0EsSUFBRCxJQUFTLENBQUNBLElBQUksQ0FBQzNlLE1BQW5CLEVBQTJCO0FBQ3ZCLGFBQU8wSixTQUFQO0FBQ0g7O0FBQ0QwVSwyREFBQSxDQUFtQjdaLFNBQVMsQ0FBQzBaLE1BQTdCLEVBQXFDRyxpRUFBckMsRUFBbUVSLGlCQUFuRTtBQUNBLFFBQU0rQixPQUFPLEdBQUcsRUFBaEI7O0FBQ0EsUUFBSSxPQUFPaEIsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUMxQixVQUFNMkQsWUFBWSxHQUFHLEVBQXJCO0FBQ0FsRSwwREFBQSxDQUFnQlIsaUJBQWhCLEVBQW1DMEUsWUFBbkM7QUFDQSxVQUFNdEMsVUFBVSxHQUFHaEIsK0NBQUEsQ0FBYXNELFlBQWIsQ0FBbkI7O0FBQ0EsV0FBSyxJQUFJdmlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc0ZSxJQUFJLENBQUMzZSxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxZQUFNMGIsTUFBTSxHQUFHa0QsSUFBSSxDQUFDNWUsQ0FBRCxDQUFuQjtBQUNBLFlBQU1zZixVQUFVLEdBQUdWLElBQUksQ0FBQzVlLENBQUMsR0FBRyxDQUFMLENBQXZCO0FBQ0EsWUFBTXVmLE9BQU8sR0FBR04sa0RBQUEsQ0FBZ0JnQixVQUFoQixFQUE0QnNDLFlBQVksQ0FBQzFELElBQXpDLEVBQStDbkQsTUFBL0MsRUFBdUQ0RCxVQUF2RCxJQUFxRWlELFlBQVksQ0FBQ3hELGFBQWxHO0FBQ0FhLGVBQU8sQ0FBQ3ZkLElBQVIsQ0FBYTtBQUNUcVosZ0JBQU0sRUFBTkEsTUFEUztBQUVUNkQsaUJBQU8sRUFBUEEsT0FGUztBQUdUckIsZ0JBQU0sRUFBRXFFO0FBSEMsU0FBYjtBQUtIO0FBQ0osS0FkRCxNQWVLLElBQUl4ZSxLQUFLLENBQUNDLE9BQU4sQ0FBYzRhLElBQWQsQ0FBSixFQUF5QjtBQUMxQixXQUFLLElBQUk1ZSxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHNGUsSUFBSSxDQUFDM2UsTUFBekIsRUFBaUNELEVBQUMsRUFBbEMsRUFBc0M7QUFDbEMsWUFBTXdpQixLQUFLLEdBQUc1RCxJQUFJLENBQUM1ZSxFQUFELENBQWxCOztBQUNBLFlBQUksT0FBT3dpQixLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzNCLGNBQU1ELGFBQVksR0FBRyxFQUFyQjtBQUNBbEUsOERBQUEsQ0FBZ0JSLGlCQUFoQixFQUFtQzBFLGFBQW5DOztBQUNBLGNBQU10QyxXQUFVLEdBQUdoQiwrQ0FBQSxDQUFhc0QsYUFBYixDQUFuQjs7QUFDQSxlQUFLLElBQUl4QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeUMsS0FBSyxDQUFDdmlCLE1BQTFCLEVBQWtDOGYsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxnQkFBTXJFLE9BQU0sR0FBRzhHLEtBQUssQ0FBQ3pDLENBQUQsQ0FBcEI7QUFDQSxnQkFBTVQsV0FBVSxHQUFHa0QsS0FBSyxDQUFDekMsQ0FBQyxHQUFHLENBQUwsQ0FBeEI7O0FBQ0EsZ0JBQU1SLFFBQU8sR0FBR04sa0RBQUEsQ0FBZ0JnQixXQUFoQixFQUE0QnNDLGFBQVksQ0FBQzFELElBQXpDLEVBQStDbkQsT0FBL0MsRUFBdUQ0RCxXQUF2RCxJQUFxRWlELGFBQVksQ0FBQ3hELGFBQWxHOztBQUNBYSxtQkFBTyxDQUFDdmQsSUFBUixDQUFhO0FBQ1RxWixvQkFBTSxFQUFOQSxPQURTO0FBRVQ2RCxxQkFBTyxFQUFQQSxRQUZTO0FBR1RyQixvQkFBTSxFQUFFcUU7QUFIQyxhQUFiO0FBS0g7QUFDSixTQWRELE1BZUs7QUFDRCxjQUFNQSxjQUFZLEdBQUcsRUFBckI7QUFDQWxFLGlFQUFBLENBQW1CbUUsS0FBbkIsRUFBMEIzRSxpQkFBMUIsRUFBNkMwRSxjQUE3Qzs7QUFDQSxjQUFNdEMsWUFBVSxHQUFHaEIsK0NBQUEsQ0FBYXNELGNBQWIsQ0FBbkI7O0FBQ0EsZUFBSyxJQUFJeEMsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR3lDLEtBQUssQ0FBQzVELElBQU4sQ0FBVzNlLE1BQS9CLEVBQXVDOGYsRUFBQyxFQUF4QyxFQUE0QztBQUN4QyxnQkFBTXJFLFFBQU0sR0FBRzhHLEtBQUssQ0FBQzVELElBQU4sQ0FBV21CLEVBQVgsQ0FBZjtBQUNBLGdCQUFNVCxZQUFVLEdBQUdrRCxLQUFLLENBQUM1RCxJQUFOLENBQVdtQixFQUFDLEdBQUcsQ0FBZixDQUFuQjs7QUFDQSxnQkFBTVIsU0FBTyxHQUFHTixrREFBQSxDQUFnQmdCLFlBQWhCLEVBQTRCc0MsY0FBWSxDQUFDMUQsSUFBekMsRUFBK0NuRCxRQUEvQyxFQUF1RDRELFlBQXZELElBQXFFaUQsY0FBWSxDQUFDeEQsYUFBbEc7O0FBQ0FhLG1CQUFPLENBQUN2ZCxJQUFSLENBQWE7QUFDVHFaLG9CQUFNLEVBQU5BLFFBRFM7QUFFVDZELHFCQUFPLEVBQVBBLFNBRlM7QUFHVHJCLG9CQUFNLEVBQUVxRTtBQUhDLGFBQWI7QUFLSDtBQUNKO0FBQ0o7QUFDSjs7QUFDRCxXQUFPM0MsT0FBUDtBQUNIOztBQUNEUCxhQUFXLENBQUNpRCxVQUFaLEdBQXlCQSxVQUF6Qjs7QUFDQSxXQUFTRyxRQUFULENBQWtCamUsU0FBbEIsRUFBNkI7QUFDekIsUUFBTW9iLE9BQU8sR0FBRzBDLFVBQVUsQ0FBQzlkLFNBQUQsQ0FBMUI7O0FBQ0EsUUFBSSxDQUFDb2IsT0FBRCxJQUFZLENBQUNBLE9BQU8sQ0FBQzNmLE1BQXpCLEVBQWlDO0FBQzdCLGFBQU8wSixTQUFQO0FBQ0g7O0FBSndCLFFBS2pCaEgsS0FMaUIsR0FLVzZCLFNBTFgsQ0FLakI3QixLQUxpQjtBQUFBLDhCQUtXNkIsU0FMWCxDQUtWa2UsUUFMVTtBQUFBLFFBS1ZBLFFBTFUsb0NBS0MsS0FMRDtBQU16QixRQUFNQyxTQUFTLEdBQUczRSxtREFBQSxDQUFpQnhaLFNBQWpCLENBQWxCO0FBQ0EsUUFBTWtiLEtBQUssR0FBRyxFQUFkO0FBQ0EsUUFBSUMsSUFBSSxHQUFHcUMsUUFBUSxDQUFDQyxNQUFULEVBQVg7O0FBQ0EsUUFBSVUsU0FBSixFQUFlO0FBQ1gsVUFBSWhnQixLQUFKLEVBQVc7QUFDUCxZQUFJK2YsUUFBSixFQUFjO0FBQ1YsY0FBTUUsSUFBSSxHQUFHWixRQUFRLENBQUNDLE1BQVQsRUFBYjs7QUFDQSxlQUFLLElBQUlqaUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzRmLE9BQU8sQ0FBQzNmLE1BQTVCLEVBQW9DRCxDQUFDLEVBQXJDLEVBQXlDO0FBQ3JDLGdCQUFNMGIsTUFBTSxHQUFHa0UsT0FBTyxDQUFDNWYsQ0FBRCxDQUF0Qjs7QUFDQSxnQkFBSTBiLE1BQU0sQ0FBQ0EsTUFBUCxLQUFrQixJQUF0QixFQUE0QjtBQUN4QnNHLHNCQUFRLENBQUM5UixNQUFULENBQWdCeVAsSUFBaEIsRUFBc0JpRCxJQUF0QjtBQUNBbEQsbUJBQUssQ0FBQ3JkLElBQU4sQ0FBV3NkLElBQVg7QUFDQUEsa0JBQUksR0FBR3FDLFFBQVEsQ0FBQ0MsTUFBVCxFQUFQO0FBQ0FELHNCQUFRLENBQUNwVCxLQUFULENBQWVnVSxJQUFmO0FBQ0gsYUFMRCxNQU1LO0FBQ0RaLHNCQUFRLENBQUMvTSxHQUFULENBQWEyTixJQUFiLEVBQW1CbEgsTUFBbkI7O0FBQ0Esa0JBQUlpRSxJQUFJLENBQUNoZCxLQUFMLEdBQWFpZ0IsSUFBSSxDQUFDamdCLEtBQWxCLEdBQTBCQSxLQUE5QixFQUFxQztBQUNqQytjLHFCQUFLLENBQUNyZCxJQUFOLENBQVdzZCxJQUFYO0FBQ0FBLG9CQUFJLEdBQUdxQyxRQUFRLENBQUNDLE1BQVQsRUFBUDtBQUNILGVBSEQsTUFJSyxJQUFJLEtBQUt0UyxJQUFMLENBQVUrTCxNQUFNLENBQUNBLE1BQWpCLENBQUosRUFBOEI7QUFDL0JzRyx3QkFBUSxDQUFDOVIsTUFBVCxDQUFnQnlQLElBQWhCLEVBQXNCaUQsSUFBdEI7QUFDQVosd0JBQVEsQ0FBQ3BULEtBQVQsQ0FBZWdVLElBQWY7QUFDSDtBQUNKO0FBQ0o7O0FBQ0RaLGtCQUFRLENBQUM5UixNQUFULENBQWdCeVAsSUFBaEIsRUFBc0JpRCxJQUF0QjtBQUNILFNBdkJELE1Bd0JLO0FBQ0QsZUFBSyxJQUFJNWlCLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUc0ZixPQUFPLENBQUMzZixNQUE1QixFQUFvQ0QsR0FBQyxFQUFyQyxFQUF5QztBQUNyQyxnQkFBTTBiLFFBQU0sR0FBR2tFLE9BQU8sQ0FBQzVmLEdBQUQsQ0FBdEI7O0FBQ0EsZ0JBQUkwYixRQUFNLENBQUNBLE1BQVAsS0FBa0IsSUFBdEIsRUFBNEI7QUFDeEJnRSxtQkFBSyxDQUFDcmQsSUFBTixDQUFXc2QsSUFBWDtBQUNBQSxrQkFBSSxHQUFHcUMsUUFBUSxDQUFDQyxNQUFULEVBQVA7QUFDSCxhQUhELE1BSUssSUFBSXRDLElBQUksQ0FBQ2hkLEtBQUwsR0FBYStZLFFBQU0sQ0FBQzZELE9BQXBCLEdBQThCNWMsS0FBbEMsRUFBeUM7QUFDMUMrYyxtQkFBSyxDQUFDcmQsSUFBTixDQUFXc2QsSUFBWDtBQUNBQSxrQkFBSSxHQUFHcUMsUUFBUSxDQUFDQyxNQUFULEVBQVA7QUFDQUQsc0JBQVEsQ0FBQy9NLEdBQVQsQ0FBYTBLLElBQWIsRUFBbUJqRSxRQUFuQjtBQUNILGFBSkksTUFLQTtBQUNEc0csc0JBQVEsQ0FBQy9NLEdBQVQsQ0FBYTBLLElBQWIsRUFBbUJqRSxRQUFuQjtBQUNIO0FBQ0o7QUFDSjtBQUNKLE9BMUNELE1BMkNLO0FBQ0QsYUFBSyxJQUFJMWIsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBRzRmLE9BQU8sQ0FBQzNmLE1BQTVCLEVBQW9DRCxHQUFDLEVBQXJDLEVBQXlDO0FBQ3JDLGNBQU0wYixRQUFNLEdBQUdrRSxPQUFPLENBQUM1ZixHQUFELENBQXRCOztBQUNBLGNBQUkwYixRQUFNLENBQUNBLE1BQVAsS0FBa0IsSUFBdEIsRUFBNEI7QUFDeEJnRSxpQkFBSyxDQUFDcmQsSUFBTixDQUFXc2QsSUFBWDtBQUNBQSxnQkFBSSxHQUFHcUMsUUFBUSxDQUFDQyxNQUFULEVBQVA7QUFDSCxXQUhELE1BSUs7QUFDREQsb0JBQVEsQ0FBQy9NLEdBQVQsQ0FBYTBLLElBQWIsRUFBbUJqRSxRQUFuQjtBQUNIO0FBQ0o7QUFDSjtBQUNKLEtBeERELE1BeURLO0FBQ0QsV0FBSyxJQUFJMWIsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBRzRmLE9BQU8sQ0FBQzNmLE1BQTVCLEVBQW9DRCxHQUFDLEVBQXJDLEVBQXlDO0FBQ3JDLFlBQU0wYixRQUFNLEdBQUdrRSxPQUFPLENBQUM1ZixHQUFELENBQXRCO0FBQ0FnaUIsZ0JBQVEsQ0FBQy9NLEdBQVQsQ0FBYTBLLElBQWIsRUFBbUJqRSxRQUFuQjtBQUNIO0FBQ0o7O0FBQ0QsUUFBSWlFLElBQUksQ0FBQ0MsT0FBTCxDQUFhM2YsTUFBakIsRUFBeUI7QUFDckJ5ZixXQUFLLENBQUNyZCxJQUFOLENBQVdzZCxJQUFYO0FBQ0g7O0FBQ0QsUUFBSUQsS0FBSyxDQUFDemYsTUFBVixFQUFrQjtBQUNkLFdBQUssSUFBSUQsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBRzBmLEtBQUssQ0FBQ3pmLE1BQTFCLEVBQWtDRCxHQUFDLEVBQW5DLEVBQXVDO0FBQ25DMmYsWUFBSSxHQUFHRCxLQUFLLENBQUMxZixHQUFELENBQVo7QUFDQWdpQixnQkFBUSxDQUFDRyxZQUFULENBQXNCeEMsSUFBdEI7O0FBQ0EsWUFBSSxDQUFDQSxJQUFJLENBQUMvYyxNQUFWLEVBQWtCO0FBQ2QrYyxjQUFJLENBQUMvYyxNQUFMLEdBQWNpYixpQkFBaUIsQ0FBQ2dCLElBQWhDO0FBQ0g7QUFDSjs7QUFDRGMsVUFBSSxHQUFHRCxLQUFLLENBQUNBLEtBQUssQ0FBQ3pmLE1BQU4sR0FBZSxDQUFoQixDQUFaO0FBQ0EraEIsY0FBUSxDQUFDSyxhQUFULENBQXVCMUMsSUFBdkI7QUFDSDs7QUFDRCxXQUFPRCxLQUFQO0FBQ0g7O0FBQ0RMLGFBQVcsQ0FBQ29ELFFBQVosR0FBdUJBLFFBQXZCOztBQUNBLFdBQVNJLFVBQVQsQ0FBb0JyZSxTQUFwQixFQUErQjtBQUMzQixRQUFNa2IsS0FBSyxHQUFHK0MsUUFBUSxDQUFDamUsU0FBRCxDQUF0Qjs7QUFDQSxRQUFJLENBQUNrYixLQUFELElBQVUsQ0FBQ0EsS0FBSyxDQUFDemYsTUFBckIsRUFBNkI7QUFDekIsYUFBTzBKLFNBQVA7QUFDSDs7QUFDRCxRQUFNc1UsT0FBTyxHQUFHO0FBQ1p5QixXQUFLLEVBQUxBLEtBRFk7QUFFWi9jLFdBQUssRUFBRSxDQUZLO0FBR1pDLFlBQU0sRUFBRTtBQUhJLEtBQWhCOztBQUtBLFNBQUssSUFBSTVDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcwZixLQUFLLENBQUN6ZixNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxVQUFNMmYsSUFBSSxHQUFHRCxLQUFLLENBQUMxZixDQUFELENBQWxCO0FBQ0FpZSxhQUFPLENBQUN0YixLQUFSLEdBQWdCVyxJQUFJLENBQUM0ZSxHQUFMLENBQVNqRSxPQUFPLENBQUN0YixLQUFqQixFQUF3QmdkLElBQUksQ0FBQ2hkLEtBQTdCLENBQWhCO0FBQ0FzYixhQUFPLENBQUNyYixNQUFSLElBQWtCK2MsSUFBSSxDQUFDL2MsTUFBdkI7QUFDSDs7QUFDRCxXQUFPcWIsT0FBUDtBQUNIOztBQUNEb0IsYUFBVyxDQUFDd0QsVUFBWixHQUF5QkEsVUFBekI7O0FBQ0EsV0FBU0MsZ0JBQVQsQ0FBMEJ0ZSxTQUExQixFQUFxQztBQUFBLFFBQ3pCb2EsSUFEeUIsR0FDaEJwYSxTQURnQixDQUN6Qm9hLElBRHlCOztBQUVqQyxRQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDMUIsYUFBT2pWLFNBQVA7QUFDSDs7QUFDRDBVLDJEQUFBLENBQW1CN1osU0FBUyxDQUFDMFosTUFBN0IsRUFBcUNHLGlFQUFyQyxFQUFtRVIsaUJBQW5FO0FBTGlDLFFBTXpCZ0IsSUFOeUIsR0FNUWhCLGlCQU5SLENBTXpCZ0IsSUFOeUI7QUFBQSxRQU1uQkUsYUFObUIsR0FNUWxCLGlCQU5SLENBTW5Ca0IsYUFObUI7QUFBQSxRQU1KRCxPQU5JLEdBTVFqQixpQkFOUixDQU1KaUIsT0FOSTtBQU9qQyxRQUFNTSxJQUFJLEdBQUdILCtDQUFBLENBQWFwQixpQkFBYixDQUFiO0FBQ0EsUUFBSWxiLEtBQUssR0FBRyxDQUFaO0FBQ0EsUUFBSUMsTUFBTSxHQUFHaWMsSUFBYjtBQUNBLFFBQUl4RixTQUFTLEdBQUcsQ0FBaEI7O0FBQ0EsU0FBSyxJQUFJclosQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzRlLElBQUksQ0FBQzNlLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFVBQU0wYixNQUFNLEdBQUdrRCxJQUFJLENBQUM1ZSxDQUFELENBQW5COztBQUNBLFVBQUkwYixNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNqQjlZLGNBQU0sSUFBSWljLElBQUksR0FBR0MsT0FBakI7QUFDQW5jLGFBQUssR0FBR1csSUFBSSxDQUFDNGUsR0FBTCxDQUFTdmYsS0FBVCxFQUFnQjBXLFNBQWhCLENBQVI7QUFDQUEsaUJBQVMsR0FBRyxDQUFaO0FBQ0gsT0FKRCxNQUtLO0FBQ0QsWUFBTWlHLFVBQVUsR0FBR1YsSUFBSSxDQUFDNWUsQ0FBQyxHQUFHLENBQUwsQ0FBdkI7QUFDQSxZQUFNdWYsT0FBTyxHQUFHTixrREFBQSxDQUFnQkcsSUFBaEIsRUFBc0JQLElBQXRCLEVBQTRCbkQsTUFBNUIsRUFBb0M0RCxVQUFwQyxJQUFrRFAsYUFBbEU7QUFDQTFGLGlCQUFTLElBQUlrRyxPQUFiO0FBQ0g7QUFDSjs7QUFDRDVjLFNBQUssR0FBR1csSUFBSSxDQUFDNGUsR0FBTCxDQUFTdmYsS0FBVCxFQUFnQjBXLFNBQWhCLENBQVI7QUFDQSxXQUFPO0FBQ0gxVyxXQUFLLEVBQUxBLEtBREc7QUFFSEMsWUFBTSxFQUFOQTtBQUZHLEtBQVA7QUFJSDs7QUFDRHljLGFBQVcsQ0FBQ3lELGdCQUFaLEdBQStCQSxnQkFBL0I7O0FBQ0EsV0FBU0MsY0FBVCxDQUF3QjdFLE1BQXhCLEVBQWdDVSxJQUFoQyxFQUFzQ29FLEtBQXRDLEVBQTZDO0FBQ3pDLFFBQUlBLEtBQUssSUFBSXBFLElBQUksQ0FBQzNlLE1BQWxCLEVBQTBCO0FBQ3RCLGFBQU8sQ0FBUDtBQUNIOztBQUNEb2UsMkRBQUEsQ0FBbUJILE1BQW5CLEVBQTJCRyxpRUFBM0IsRUFBeURSLGlCQUF6RDtBQUp5QyxRQUtqQ2dCLElBTGlDLEdBS1RoQixpQkFMUyxDQUtqQ2dCLElBTGlDO0FBQUEsUUFLM0JFLGFBTDJCLEdBS1RsQixpQkFMUyxDQUszQmtCLGFBTDJCO0FBTXpDLFFBQU1LLElBQUksR0FBR0gsK0NBQUEsQ0FBYXBCLGlCQUFiLENBQWI7QUFDQSxRQUFJbGIsS0FBSyxHQUFHLENBQVo7O0FBQ0EsU0FBSyxJQUFJM0MsQ0FBQyxHQUFHZ2pCLEtBQWIsRUFBb0JoakIsQ0FBQyxHQUFHNGUsSUFBSSxDQUFDM2UsTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7QUFDdEMsVUFBTTBiLE1BQU0sR0FBR2tELElBQUksQ0FBQzVlLENBQUQsQ0FBbkI7O0FBQ0EsVUFBSTBiLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBQ2pCLGVBQU8vWSxLQUFQO0FBQ0g7O0FBQ0QsVUFBTTJjLFVBQVUsR0FBR1YsSUFBSSxDQUFDNWUsQ0FBQyxHQUFHLENBQUwsQ0FBdkI7QUFDQSxVQUFNdWYsT0FBTyxHQUFHTixrREFBQSxDQUFnQkcsSUFBaEIsRUFBc0JQLElBQXRCLEVBQTRCbkQsTUFBNUIsRUFBb0M0RCxVQUFwQyxJQUFrRFAsYUFBbEU7QUFDQXBjLFdBQUssSUFBSTRjLE9BQVQ7QUFDSDs7QUFDRCxXQUFPNWMsS0FBUDtBQUNIOztBQUNEMGMsYUFBVyxDQUFDMEQsY0FBWixHQUE2QkEsY0FBN0I7QUFDSCxDQTNORCxFQTJORzFELFdBQVcsS0FBS0EsV0FBVyxHQUFHLEVBQW5CLENBM05kLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNPLElBQU1jLElBQUksR0FBRyxNQUFiO0FBQ0EsSUFBSW5DLElBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxJQUFWLEVBQWdCO0FBQ2IsV0FBU2lGLE9BQVQsQ0FBaUJ6ZSxTQUFqQixFQUE0QjtBQUFBLFFBQ2hCb2EsSUFEZ0IsR0FDUHBhLFNBRE8sQ0FDaEJvYSxJQURnQjs7QUFFeEIsUUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUCxhQUFPLEVBQVA7QUFDSDs7QUFDRCxRQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDMUIsYUFBT0EsSUFBUDtBQUNIOztBQUNELFFBQUk3YSxLQUFLLENBQUNDLE9BQU4sQ0FBYzRhLElBQWQsQ0FBSixFQUF5QjtBQUNyQixVQUFJNVosTUFBTSxHQUFHLEVBQWI7O0FBQ0EsV0FBSyxJQUFJaEYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzRlLElBQUksQ0FBQzNlLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFlBQU13aUIsS0FBSyxHQUFHNUQsSUFBSSxDQUFDNWUsQ0FBRCxDQUFsQjs7QUFDQSxZQUFJLE9BQU93aUIsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUMzQnhkLGdCQUFNLElBQUl3ZCxLQUFWO0FBQ0gsU0FGRCxNQUdLO0FBQ0R4ZCxnQkFBTSxJQUFJd2QsS0FBSyxDQUFDNUQsSUFBaEI7QUFDSDtBQUNKOztBQUNELGFBQU81WixNQUFQO0FBQ0g7O0FBQ0QsV0FBTyxFQUFQO0FBQ0g7O0FBQ0RnWixNQUFJLENBQUNpRixPQUFMLEdBQWVBLE9BQWY7O0FBQ0EsV0FBU0MsZUFBVCxDQUF5QjFlLFNBQXpCLEVBQW9DO0FBQUE7O0FBQ2hDLG9DQUFPQSxTQUFTLENBQUMyZSxhQUFqQix5RUFBa0MsSUFBbEM7QUFDSDs7QUFDRG5GLE1BQUksQ0FBQ2tGLGVBQUwsR0FBdUJBLGVBQXZCOztBQUNBLFdBQVNFLFVBQVQsQ0FBb0I1ZSxTQUFwQixFQUErQjtBQUMzQixXQUFPLENBQUNBLFNBQVMsQ0FBQzdCLEtBQVgsSUFBb0IsQ0FBQzZCLFNBQVMsQ0FBQzVCLE1BQXRDO0FBQ0g7O0FBQ0RvYixNQUFJLENBQUNvRixVQUFMLEdBQWtCQSxVQUFsQjs7QUFDQSxXQUFTQyxRQUFULENBQWtCN2UsU0FBbEIsRUFBNkI7QUFDekIsV0FBTyxPQUFPQSxTQUFTLENBQUNvYSxJQUFqQixLQUEwQixRQUExQixJQUFzQ3dFLFVBQVUsQ0FBQzVlLFNBQUQsQ0FBdkQ7QUFDSDs7QUFDRHdaLE1BQUksQ0FBQ3FGLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUNBLFdBQVNDLFdBQVQsQ0FBcUI5ZSxTQUFyQixFQUFnQztBQUFBOztBQUM1QixtQ0FBT0EsU0FBUyxDQUFDbWUsU0FBakIsdUVBQThCLElBQTlCO0FBQ0g7O0FBQ0QzRSxNQUFJLENBQUNzRixXQUFMLEdBQW1CQSxXQUFuQjs7QUFDQSxXQUFTSCxhQUFULENBQXVCM2UsU0FBdkIsRUFBa0M7QUFDOUIsUUFBSTZlLFFBQVEsQ0FBQzdlLFNBQUQsQ0FBWixFQUF5QjtBQUNyQkEsZUFBUyxDQUFDeVosT0FBVixHQUFvQm9CLHVFQUFBLENBQTZCN2EsU0FBN0IsQ0FBcEI7QUFDSCxLQUZELE1BR0s7QUFDREEsZUFBUyxDQUFDeVosT0FBVixHQUFvQm9CLGlFQUFBLENBQXVCN2EsU0FBdkIsQ0FBcEI7QUFDSDtBQUNKOztBQUNEd1osTUFBSSxDQUFDbUYsYUFBTCxHQUFxQkEsYUFBckI7O0FBQ0EsV0FBUzNPLGVBQVQsQ0FBeUJoUSxTQUF6QixFQUFvQzZLLE1BQXBDLEVBQTRDO0FBQ3hDLFFBQUk2VCxlQUFlLENBQUMxZSxTQUFELENBQW5CLEVBQWdDO0FBQzVCMmUsbUJBQWEsQ0FBQzNlLFNBQUQsQ0FBYjtBQUNIOztBQUh1QyxRQUloQ3laLE9BSmdDLEdBSXBCelosU0FKb0IsQ0FJaEN5WixPQUpnQzs7QUFLeEMsUUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDVnRMLGdFQUFBLENBQW1CdEQsTUFBbkI7QUFDQTtBQUNIOztBQVJ1QyxRQVNsQzFNLEtBVGtDLEdBU2hCNkIsU0FUZ0IsQ0FTbEM3QixLQVRrQztBQUFBLFFBUzNCQyxNQVQyQixHQVNoQjRCLFNBVGdCLENBUzNCNUIsTUFUMkI7O0FBVXhDLFFBQUksQ0FBQ0QsS0FBTCxFQUFZO0FBQ1JBLFdBQUssR0FBR3NiLE9BQU8sQ0FBQ3RiLEtBQWhCO0FBQ0g7O0FBQ0QsUUFBSSxDQUFDQyxNQUFMLEVBQWE7QUFDVEEsWUFBTSxHQUFHcWIsT0FBTyxDQUFDcmIsTUFBakI7QUFDSDs7QUFDRCxRQUFNMEYsQ0FBQyxHQUFHbkIsa0RBQUEsQ0FBVzNDLFNBQVgsRUFBc0I3QixLQUF0QixDQUFWO0FBQ0EsUUFBTTRGLENBQUMsR0FBR3BCLGtEQUFBLENBQVczQyxTQUFYLEVBQXNCNUIsTUFBdEIsQ0FBVjtBQUNBeU0sVUFBTSxDQUFDL0csQ0FBUCxHQUFXQSxDQUFYO0FBQ0ErRyxVQUFNLENBQUM5RyxDQUFQLEdBQVdBLENBQVg7QUFDQThHLFVBQU0sQ0FBQzFNLEtBQVAsR0FBZUEsS0FBZjtBQUNBME0sVUFBTSxDQUFDek0sTUFBUCxHQUFnQkEsTUFBaEI7QUFDSDs7QUFDRG9iLE1BQUksQ0FBQ3hKLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0gsQ0ExRUQsRUEwRUd3SixJQUFJLEtBQUtBLElBQUksR0FBRyxFQUFaLENBMUVQOztBQTJFQSxJQUFNM08sTUFBTSxHQUFHc0QsdURBQUEsRUFBZjtBQUNPLElBQUl1TixhQUFKOztBQUNQLENBQUMsVUFBVUEsYUFBVixFQUF5QjtBQUN0QixXQUFTcGIsT0FBVCxDQUFpQjhaLElBQWpCLEVBQXVCcmMsTUFBdkIsRUFBK0I7QUFBQSxRQUNuQmlKLEtBRG1CLEdBQ1RqSixNQUFNLENBQUN3QyxRQURFLENBQ25CeUcsS0FEbUI7QUFFM0J3UyxRQUFJLENBQUN4SixlQUFMLENBQXFCb0ssSUFBckIsRUFBMkJ2UCxNQUEzQjtBQUNBLFdBQU9zRCwwREFBQSxDQUFtQnRELE1BQW5CLEVBQTJCN0QsS0FBM0IsQ0FBUDtBQUNIOztBQUNEMFUsZUFBYSxDQUFDcGIsT0FBZCxHQUF3QkEsT0FBeEI7O0FBQ0EsV0FBU1EsSUFBVCxDQUFjL0MsTUFBZCxFQUFzQjtBQUNsQkEsVUFBTSxDQUFDZ0QsVUFBUCxDQUFrQlQsT0FBbEIsQ0FBMEJVLEdBQTFCLENBQThCMmEsSUFBOUIsRUFBb0NyYixPQUFwQztBQUNIOztBQUNEb2IsZUFBYSxDQUFDNWEsSUFBZCxHQUFxQkEsSUFBckI7QUFDSCxDQVhELEVBV0c0YSxhQUFhLEtBQUtBLGFBQWEsR0FBRyxFQUFyQixDQVhoQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZPLElBQU1xRCxNQUFNLEdBQUcsUUFBZjtBQUNBLElBQU1DLFNBQVMsR0FBRyxXQUFsQjtBQUNBLElBQU1DLFlBQVksR0FBRyxhQUFyQjtBQUNBLElBQU1DLGFBQWEsR0FBRyxjQUF0QjtBQUNBLElBQU1DLEtBQUssR0FBRyxPQUFkO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFNBQWpCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFVBQWxCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFlBQXBCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFlBQXBCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQW5CO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFdBQXRCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLFlBQXZCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGVBQXZCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGdCQUF4QjtBQUNBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxZQUFwQjtBQUNBLElBQU1DLFlBQVksR0FBRyxhQUFyQjtBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxZQUFwQjtBQUNBLElBQU1DLElBQUksR0FBRyxNQUFiO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFFBQWhCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFNBQWpCO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLFFBQWY7QUFDQSxJQUFNQyxTQUFTLEdBQUcsVUFBbEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxJQUFNQyxNQUFNLDJDQUNkL0IsTUFEYyxFQUNMLFVBQUMvWixLQUFEO0FBQUEsU0FBV0EsS0FBWDtBQUFBLENBREssNEJBRWRnYSxTQUZjLEVBRUYsVUFBQ2hhLEtBQUQsRUFBVztBQUNwQixNQUFJLENBQUNBLEtBQUssSUFBSSxDQUFWLElBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsV0FBTyxNQUFNQSxLQUFOLEdBQWNBLEtBQXJCO0FBQ0g7O0FBQ0QsU0FBTyxDQUFDLEdBQUQsSUFBUSxFQUFFQSxLQUFGLElBQVdBLEtBQUssR0FBRyxDQUFuQixJQUF3QixDQUFoQyxDQUFQO0FBQ0gsQ0FQYyw0QkFRZGlhLFlBUmMsRUFRQyxVQUFDamEsS0FBRDtBQUFBLFNBQVlBLEtBQUssR0FBR0EsS0FBcEI7QUFBQSxDQVJELDRCQVNka2EsYUFUYyxFQVNFLFVBQUNsYSxLQUFEO0FBQUEsU0FBWUEsS0FBSyxJQUFJLElBQUlBLEtBQVIsQ0FBakI7QUFBQSxDQVRGLDRCQVVkbWEsS0FWYyxFQVVOLFVBQUNuYSxLQUFELEVBQVc7QUFDaEIsTUFBSSxDQUFDQSxLQUFLLElBQUksQ0FBVixJQUFlLENBQW5CLEVBQXNCO0FBQ2xCLFdBQU8sTUFBTUEsS0FBTixHQUFjQSxLQUFkLEdBQXNCQSxLQUE3QjtBQUNIOztBQUNELFNBQU8sT0FBTyxDQUFDQSxLQUFLLElBQUksQ0FBVixJQUFlQSxLQUFmLEdBQXVCQSxLQUF2QixHQUErQixDQUF0QyxDQUFQO0FBQ0gsQ0FmYyw0QkFnQmRvYSxRQWhCYyxFQWdCSCxVQUFDcGEsS0FBRDtBQUFBLFNBQVlBLEtBQUssR0FBR0EsS0FBUixHQUFnQkEsS0FBNUI7QUFBQSxDQWhCRyw0QkFpQmRxYSxTQWpCYyxFQWlCRixVQUFDcmEsS0FBRDtBQUFBLFNBQVksRUFBRUEsS0FBRixHQUFVQSxLQUFWLEdBQWtCQSxLQUFsQixHQUEwQixDQUF0QztBQUFBLENBakJFLDRCQWtCZHNhLE9BbEJjLEVBa0JKLFVBQUN0YSxLQUFELEVBQVc7QUFDbEIsTUFBSSxDQUFDQSxLQUFLLElBQUksQ0FBVixJQUFlLENBQW5CLEVBQXNCO0FBQ2xCLFdBQU8sTUFBTUEsS0FBTixHQUFjQSxLQUFkLEdBQXNCQSxLQUF0QixHQUE4QkEsS0FBckM7QUFDSDs7QUFDRCxTQUFPLENBQUMsR0FBRCxJQUFRLENBQUNBLEtBQUssSUFBSSxDQUFWLElBQWVBLEtBQWYsR0FBdUJBLEtBQXZCLEdBQStCQSxLQUEvQixHQUF1QyxDQUEvQyxDQUFQO0FBQ0gsQ0F2QmMsNEJBd0JkdWEsVUF4QmMsRUF3QkQsVUFBQ3ZhLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLEdBQUdBLEtBQVIsR0FBZ0JBLEtBQWhCLEdBQXdCQSxLQUFwQztBQUFBLENBeEJDLDRCQXlCZHdhLFdBekJjLEVBeUJBLFVBQUN4YSxLQUFEO0FBQUEsU0FBWSxJQUFJLEVBQUVBLEtBQUYsR0FBVUEsS0FBVixHQUFrQkEsS0FBbEIsR0FBMEJBLEtBQTFDO0FBQUEsQ0F6QkEsNEJBMEJkeWEsT0ExQmMsRUEwQkosVUFBQ3phLEtBQUQsRUFBVztBQUNsQixNQUFJLENBQUNBLEtBQUssSUFBSSxDQUFWLElBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsV0FBTyxNQUFNQSxLQUFOLEdBQWNBLEtBQWQsR0FBc0JBLEtBQXRCLEdBQThCQSxLQUE5QixHQUFzQ0EsS0FBN0M7QUFDSDs7QUFDRCxTQUFPLE9BQU8sQ0FBQ0EsS0FBSyxJQUFJLENBQVYsSUFBZUEsS0FBZixHQUF1QkEsS0FBdkIsR0FBK0JBLEtBQS9CLEdBQXVDQSxLQUF2QyxHQUErQyxDQUF0RCxDQUFQO0FBQ0gsQ0EvQmMsNEJBZ0NkMGEsVUFoQ2MsRUFnQ0QsVUFBQzFhLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLEdBQUdBLEtBQVIsR0FBZ0JBLEtBQWhCLEdBQXdCQSxLQUF4QixHQUFnQ0EsS0FBNUM7QUFBQSxDQWhDQyw0QkFpQ2QyYSxXQWpDYyxFQWlDQSxVQUFDM2EsS0FBRDtBQUFBLFNBQVksRUFBRUEsS0FBRixHQUFVQSxLQUFWLEdBQWtCQSxLQUFsQixHQUEwQkEsS0FBMUIsR0FBa0NBLEtBQWxDLEdBQTBDLENBQXREO0FBQUEsQ0FqQ0EsNEJBa0NkNGEsVUFsQ2MsRUFrQ0QsVUFBQzVhLEtBQUQ7QUFBQSxTQUFZLE9BQU8sSUFBSWxHLElBQUksQ0FBQzhGLEdBQUwsQ0FBUzlGLElBQUksQ0FBQzJTLEVBQUwsR0FBVXpNLEtBQW5CLENBQVgsQ0FBWjtBQUFBLENBbENDLDRCQW1DZDZhLGFBbkNjLEVBbUNFLFVBQUM3YSxLQUFEO0FBQUEsU0FBWSxJQUFJbEcsSUFBSSxDQUFDOEYsR0FBTCxDQUFVSSxLQUFLLEdBQUdsRyxJQUFJLENBQUMyUyxFQUFkLEdBQW9CLENBQTdCLENBQWhCO0FBQUEsQ0FuQ0YsNEJBb0NkcU8sY0FwQ2MsRUFvQ0csVUFBQzlhLEtBQUQ7QUFBQSxTQUFZbEcsSUFBSSxDQUFDK0YsR0FBTCxDQUFVRyxLQUFLLEdBQUdsRyxJQUFJLENBQUMyUyxFQUFkLEdBQW9CLENBQTdCLENBQVo7QUFBQSxDQXBDSCw0QkFxQ2RzTyxXQXJDYyxFQXFDQSxVQUFDL2EsS0FBRCxFQUFXO0FBQ3RCLE1BQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2IsV0FBTyxDQUFQO0FBQ0g7O0FBQ0QsTUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixXQUFPLENBQVA7QUFDSDs7QUFDRCxNQUFJLENBQUNBLEtBQUssSUFBSSxDQUFWLElBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsV0FBTyxNQUFNbEcsSUFBSSxDQUFDaWlCLEdBQUwsQ0FBUyxJQUFULEVBQWUvYixLQUFLLEdBQUcsQ0FBdkIsQ0FBYjtBQUNIOztBQUNELFNBQU8sT0FBTyxDQUFDbEcsSUFBSSxDQUFDaWlCLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFELElBQU8vYixLQUFLLEdBQUcsQ0FBZixDQUFaLENBQUQsR0FBa0MsQ0FBekMsQ0FBUDtBQUNILENBaERjLDRCQWlEZGdiLGNBakRjLEVBaURHLFVBQUNoYixLQUFEO0FBQUEsU0FBWUEsS0FBSyxLQUFLLENBQVYsR0FBYyxDQUFkLEdBQWtCbEcsSUFBSSxDQUFDaWlCLEdBQUwsQ0FBUyxJQUFULEVBQWUvYixLQUFLLEdBQUcsQ0FBdkIsQ0FBOUI7QUFBQSxDQWpESCw0QkFrRGRpYixlQWxEYyxFQWtESSxVQUFDamIsS0FBRDtBQUFBLFNBQVlBLEtBQUssS0FBSyxDQUFWLEdBQWMsQ0FBZCxHQUFrQixJQUFJbEcsSUFBSSxDQUFDaWlCLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFELEdBQU0vYixLQUFsQixDQUFsQztBQUFBLENBbERKLDRCQW1EZGtiLFFBbkRjLEVBbURILFVBQUNsYixLQUFELEVBQVc7QUFDbkIsTUFBSSxDQUFDQSxLQUFLLElBQUksQ0FBVixJQUFlLENBQW5CLEVBQXNCO0FBQ2xCLFdBQU8sQ0FBQyxHQUFELElBQVFsRyxJQUFJLENBQUNzTyxJQUFMLENBQVUsSUFBSXBJLEtBQUssR0FBR0EsS0FBdEIsSUFBK0IsQ0FBdkMsQ0FBUDtBQUNIOztBQUNELFNBQU8sT0FBT2xHLElBQUksQ0FBQ3NPLElBQUwsQ0FBVSxJQUFJLENBQUNwSSxLQUFLLElBQUksQ0FBVixJQUFlQSxLQUE3QixJQUFzQyxDQUE3QyxDQUFQO0FBQ0gsQ0F4RGMsNEJBeURkbWIsV0F6RGMsRUF5REEsVUFBQ25iLEtBQUQ7QUFBQSxTQUFZLElBQUlsRyxJQUFJLENBQUNzTyxJQUFMLENBQVUsSUFBSXBJLEtBQUssR0FBR0EsS0FBdEIsQ0FBaEI7QUFBQSxDQXpEQSw0QkEwRGRvYixZQTFEYyxFQTBEQyxVQUFDcGIsS0FBRDtBQUFBLFNBQVdsRyxJQUFJLENBQUNzTyxJQUFMLENBQVUsSUFBSSxFQUFFcEksS0FBRixHQUFVQSxLQUF4QixDQUFYO0FBQUEsQ0ExREQsNEJBMkRkcWIsT0EzRGMsRUEyREosVUFBQ3JiLEtBQUQsRUFBVztBQUNsQixNQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLFdBQU8sQ0FBUDtBQUNIOztBQUNELE1BQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2IsV0FBTyxDQUFQO0FBQ0g7O0FBQ0RBLE9BQUssSUFBSSxDQUFUOztBQUNBLE1BQUlBLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDWCxXQUFPLENBQUMsR0FBRCxHQUFPbEcsSUFBSSxDQUFDaWlCLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBTS9iLEtBQUssR0FBRyxDQUFkLENBQVosQ0FBUCxHQUF1Q2xHLElBQUksQ0FBQytGLEdBQUwsQ0FBUyxDQUFDRyxLQUFLLEdBQUcsR0FBVCxJQUFnQixDQUFoQixHQUFvQmxHLElBQUksQ0FBQzJTLEVBQWxDLENBQTlDO0FBQ0g7O0FBQ0QsU0FBTyxNQUFNM1MsSUFBSSxDQUFDaWlCLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFELElBQU8vYixLQUFLLEdBQUcsQ0FBZixDQUFaLENBQU4sR0FBdUNsRyxJQUFJLENBQUMrRixHQUFMLENBQVMsQ0FBQ0csS0FBSyxHQUFHLEdBQVQsSUFBZ0IsQ0FBaEIsR0FBb0JsRyxJQUFJLENBQUMyUyxFQUFsQyxDQUF2QyxHQUErRSxDQUF0RjtBQUNILENBdkVjLDRCQXdFZDZPLFVBeEVjLEVBd0VELFVBQUN0YixLQUFELEVBQVc7QUFDckIsTUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixXQUFPLENBQVA7QUFDSDs7QUFDRCxNQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLFdBQU8sQ0FBUDtBQUNIOztBQUNELFNBQU8sQ0FBQ2xHLElBQUksQ0FBQ2lpQixHQUFMLENBQVMsQ0FBVCxFQUFZLE1BQU0vYixLQUFLLEdBQUcsQ0FBZCxDQUFaLENBQUQsR0FBaUNsRyxJQUFJLENBQUMrRixHQUFMLENBQVMsQ0FBQ0csS0FBSyxHQUFHLEdBQVQsSUFBZ0IsQ0FBaEIsR0FBb0JsRyxJQUFJLENBQUMyUyxFQUFsQyxDQUF4QztBQUNILENBaEZjLDRCQWlGZDhPLFdBakZjLEVBaUZBLFVBQUN2YixLQUFELEVBQVc7QUFDdEIsTUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixXQUFPLENBQVA7QUFDSDs7QUFDRCxNQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLFdBQU8sQ0FBUDtBQUNIOztBQUNELFNBQU9sRyxJQUFJLENBQUNpaUIsR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFDLEVBQUQsR0FBTS9iLEtBQWxCLElBQTJCbEcsSUFBSSxDQUFDK0YsR0FBTCxDQUFTLENBQUNHLEtBQUssR0FBRyxHQUFULElBQWdCLENBQWhCLEdBQW9CbEcsSUFBSSxDQUFDMlMsRUFBbEMsQ0FBM0IsR0FBbUUsQ0FBMUU7QUFDSCxDQXpGYyw0QkEwRmQrTyxJQTFGYyxFQTBGUCxVQUFDeGIsS0FBRCxFQUFXO0FBQ2YsTUFBTXFSLENBQUMsR0FBRyxVQUFVLEtBQXBCOztBQUNBLE1BQUksQ0FBQ3JSLEtBQUssSUFBSSxDQUFWLElBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsV0FBTyxPQUFPQSxLQUFLLEdBQUdBLEtBQVIsSUFBaUIsQ0FBQ3FSLENBQUMsR0FBRyxDQUFMLElBQVVyUixLQUFWLEdBQWtCcVIsQ0FBbkMsQ0FBUCxDQUFQO0FBQ0g7O0FBQ0QsU0FBTyxPQUFPLENBQUNyUixLQUFLLElBQUksQ0FBVixJQUFlQSxLQUFmLElBQXdCLENBQUNxUixDQUFDLEdBQUcsQ0FBTCxJQUFVclIsS0FBVixHQUFrQnFSLENBQTFDLElBQStDLENBQXRELENBQVA7QUFDSCxDQWhHYyw0QkFpR2RvSyxPQWpHYyxFQWlHSixVQUFDemIsS0FBRCxFQUFXO0FBQ2xCLE1BQU1xUixDQUFDLEdBQUcsT0FBVjtBQUNBLFNBQU9yUixLQUFLLEdBQUdBLEtBQVIsSUFBaUIsQ0FBQ3FSLENBQUMsR0FBRyxDQUFMLElBQVVyUixLQUFWLEdBQWtCcVIsQ0FBbkMsQ0FBUDtBQUNILENBcEdjLDRCQXFHZHFLLFFBckdjLEVBcUdILFVBQUMxYixLQUFELEVBQVc7QUFDbkIsTUFBTXFSLENBQUMsR0FBRyxPQUFWO0FBQ0EsU0FBTyxFQUFFclIsS0FBRixHQUFVQSxLQUFWLElBQW1CLENBQUNxUixDQUFDLEdBQUcsQ0FBTCxJQUFVclIsS0FBVixHQUFrQnFSLENBQXJDLElBQTBDLENBQWpEO0FBQ0gsQ0F4R2MsNEJBeUdkc0ssTUF6R2MsRUF5R0wsVUFBQzNiLEtBQUQsRUFBVztBQUNqQixNQUFJQSxLQUFLLEdBQUcsR0FBWixFQUFpQjtBQUNiLFdBQU84YixNQUFNLENBQUNGLFNBQUQsQ0FBTixDQUFrQjViLEtBQUssR0FBRyxDQUExQixJQUErQixHQUF0QztBQUNIOztBQUNELFNBQU84YixNQUFNLENBQUNELFVBQUQsQ0FBTixDQUFtQjdiLEtBQUssR0FBRyxDQUFSLEdBQVksQ0FBL0IsSUFBb0MsR0FBcEMsR0FBMEMsR0FBakQ7QUFDSCxDQTlHYyw0QkErR2Q0YixTQS9HYyxFQStHRixVQUFDNWIsS0FBRDtBQUFBLFNBQVksSUFBSThiLE1BQU0sQ0FBQ0QsVUFBRCxDQUFOLENBQW1CLElBQUk3YixLQUF2QixDQUFoQjtBQUFBLENBL0dFLDRCQWdIZDZiLFVBaEhjLEVBZ0hELFVBQUM3YixLQUFELEVBQVc7QUFDckIsTUFBSUEsS0FBSyxHQUFHLElBQUksSUFBaEIsRUFBc0I7QUFDbEIsV0FBTyxTQUFTQSxLQUFULEdBQWlCQSxLQUF4QjtBQUNIOztBQUNELE1BQUlBLEtBQUssR0FBRyxJQUFJLElBQWhCLEVBQXNCO0FBQ2xCLFdBQU8sVUFBVUEsS0FBSyxJQUFJLE1BQU0sSUFBekIsSUFBaUNBLEtBQWpDLEdBQXlDLElBQWhEO0FBQ0g7O0FBQ0QsTUFBSUEsS0FBSyxHQUFHLE1BQU0sSUFBbEIsRUFBd0I7QUFDcEIsV0FBTyxVQUFVQSxLQUFLLElBQUksT0FBTyxJQUExQixJQUFrQ0EsS0FBbEMsR0FBMEMsTUFBakQ7QUFDSDs7QUFDRCxTQUFPLFVBQVVBLEtBQUssSUFBSSxRQUFRLElBQTNCLElBQW1DQSxLQUFuQyxHQUEyQyxRQUFsRDtBQUNILENBM0hjLFdBQVosQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JQOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDTyxJQUFNZ2MsS0FBSyxHQUFHLE9BQWQ7QUFDQSxJQUFJQyxjQUFKOztBQUNQLENBQUMsVUFBVUEsY0FBVixFQUEwQjtBQUN2QixXQUFTOWdCLE1BQVQsQ0FBZ0JILFNBQWhCLEVBQTJCakMsTUFBM0IsRUFBbUM7QUFBQSxRQUN2Qm1qQixLQUR1QixHQUNibGhCLFNBRGEsQ0FDdkJraEIsS0FEdUI7QUFBQSxRQUV2QkMsTUFGdUIsR0FFWkQsS0FGWSxDQUV2QkMsTUFGdUI7O0FBRy9CLFFBQUksRUFBQ0EsTUFBRCxhQUFDQSxNQUFELGVBQUNBLE1BQU0sQ0FBRTFsQixNQUFULENBQUosRUFBcUI7QUFDakJzQyxZQUFNLENBQUNDLEtBQVAsQ0FBYUMsT0FBYixDQUFxQiwyQkFBckI7QUFDQTtBQUNIOztBQUNELFFBQUlpakIsS0FBSyxDQUFDeGIsSUFBTixLQUFlUCxTQUFuQixFQUE4QjtBQUMxQitiLFdBQUssQ0FBQ3hiLElBQU4sR0FBYSxDQUFiO0FBQ0g7O0FBQ0R3YixTQUFLLENBQUN4YixJQUFOLElBQWMzSCxNQUFNLENBQUNxQyxPQUFQLENBQWVzRixJQUE3QjtBQVYrQixRQVd2QkEsSUFYdUIsR0FXZHdiLEtBWGMsQ0FXdkJ4YixJQVh1QjtBQVkvQixRQUFJSixNQUFNLEdBQUcsQ0FBYjtBQUNBNmIsVUFBTSxDQUFDbFksT0FBUCxDQUFlLFVBQUNtWSxLQUFELEVBQVc7QUFBQTs7QUFDdEIsVUFBSSxDQUFDQSxLQUFLLENBQUMxYixJQUFYLEVBQWlCO0FBQ2IzSCxjQUFNLENBQUNDLEtBQVAsQ0FBYUMsT0FBYixDQUFxQix3QkFBckI7QUFDQTtBQUNIOztBQUNELFVBQUltakIsS0FBSyxDQUFDOWIsTUFBTixLQUFpQkgsU0FBckIsRUFBZ0M7QUFDNUJHLGNBQU0sR0FBRzhiLEtBQUssQ0FBQzliLE1BQWY7QUFDSDs7QUFDRCxVQUFNK2IsVUFBVSw0QkFBR0QsS0FBSCxhQUFHQSxLQUFILHdDQUFHQSxLQUFLLENBQUVOLE1BQVYsa0RBQUcsY0FBZVEsV0FBZixFQUFILHlFQUFtQ3ZDLDJDQUFuRDtBQUNBLFVBQU13QyxZQUFZLEdBQUdULDJDQUFNLENBQUNPLFVBQUQsQ0FBM0I7O0FBQ0EsVUFBSSxDQUFDRSxZQUFMLEVBQW1CO0FBQ2Z4akIsY0FBTSxDQUFDQyxLQUFQLENBQWFDLE9BQWIsZ0NBQTZDNmlCLDJDQUE3QztBQUNBO0FBQ0g7O0FBQ0QsVUFBTTliLEtBQUssR0FBRyxDQUFDVSxJQUFJLEdBQUdKLE1BQVIsSUFBa0I4YixLQUFLLENBQUMxYixJQUF0QztBQUNBSixZQUFNLElBQUk4YixLQUFLLENBQUMxYixJQUFoQjs7QUFDQSxVQUFJVixLQUFLLEdBQUcsQ0FBUixJQUFhQSxLQUFLLEdBQUcsQ0FBekIsRUFBNEI7QUFDeEI7QUFDSDs7QUFDRCxVQUFNd2MsV0FBVyxHQUFHRCxZQUFZLENBQUN2YyxLQUFELENBQWhDOztBQUNBLFVBQUksQ0FBQ29jLEtBQUssQ0FBQzNWLEVBQVgsRUFBZTtBQUNYMU4sY0FBTSxDQUFDQyxLQUFQLENBQWFDLE9BQWIsQ0FBcUIsZ0NBQXJCO0FBQ0E7QUFDSDs7QUFDRCxVQUFJLENBQUNtakIsS0FBSyxDQUFDNVYsSUFBWCxFQUFpQjtBQUNiNFYsYUFBSyxDQUFDNVYsSUFBTixHQUFhLEVBQWI7QUFDSDs7QUExQnFCLFVBMkJkQyxFQTNCYyxHQTJCRDJWLEtBM0JDLENBMkJkM1YsRUEzQmM7QUFBQSxVQTJCVkQsSUEzQlUsR0EyQkQ0VixLQTNCQyxDQTJCVjVWLElBM0JVO0FBNEJ0QixVQUFNaVcsS0FBSyxHQUFHemhCLFNBQWQ7QUFDQUwsWUFBTSxDQUFDRCxJQUFQLENBQVkrTCxFQUFaLEVBQWdCeEMsT0FBaEIsQ0FBd0IsVUFBQ3lZLEdBQUQsRUFBUztBQUM3QixZQUFJbFcsSUFBSSxDQUFDa1csR0FBRCxDQUFKLEtBQWN2YyxTQUFsQixFQUE2QjtBQUFBOztBQUN6QnFHLGNBQUksQ0FBQ2tXLEdBQUQsQ0FBSixpQkFBWUQsS0FBSyxDQUFDQyxHQUFELENBQWpCLG1EQUEwQixDQUExQjtBQUNIOztBQUNELFlBQU1DLFNBQVMsR0FBR25XLElBQUksQ0FBQ2tXLEdBQUQsQ0FBdEI7QUFDQSxZQUFNRSxPQUFPLEdBQUduVyxFQUFFLENBQUNpVyxHQUFELENBQWxCOztBQUNBLFlBQUksT0FBT0MsU0FBUCxLQUFxQixRQUFyQixJQUFpQyxPQUFPQyxPQUFQLEtBQW1CLFFBQXhELEVBQWtFO0FBQzlELGNBQU1DLFVBQVUsR0FBR0YsU0FBUyxHQUFHSCxXQUFXLElBQUlJLE9BQU8sR0FBR0QsU0FBZCxDQUExQztBQUNBRixlQUFLLENBQUNDLEdBQUQsQ0FBTCxHQUFhRyxVQUFiO0FBQ0g7QUFDSixPQVZEO0FBV0gsS0F4Q0Q7O0FBeUNBLFFBQUlYLEtBQUssQ0FBQ1ksSUFBTixJQUFjWixLQUFLLENBQUN4YixJQUFOLEdBQWFKLE1BQS9CLEVBQXVDO0FBQ25DNGIsV0FBSyxDQUFDeGIsSUFBTixHQUFhLENBQWI7QUFDSDtBQUNKOztBQUNEdWIsZ0JBQWMsQ0FBQzlnQixNQUFmLEdBQXdCQSxNQUF4Qjs7QUFDQSxXQUFTVyxJQUFULENBQWMvQyxNQUFkLEVBQXNCO0FBQ2xCQSxVQUFNLENBQUNnRCxVQUFQLENBQWtCNkUsVUFBbEIsQ0FBNkI1RSxHQUE3QixDQUFpQ2dnQixLQUFqQyxFQUF3QzdnQixNQUF4QztBQUNIOztBQUNEOGdCLGdCQUFjLENBQUNuZ0IsSUFBZixHQUFzQkEsSUFBdEI7QUFDSCxDQWhFRCxFQWdFR21nQixjQUFjLEtBQUtBLGNBQWMsR0FBRyxFQUF0QixDQWhFakIsRTs7Ozs7Ozs7Ozs7Ozs7QUNId0M7QUFFekIsU0FBUyxTQUFTO0lBQ2hDLE1BQU0sU0FBUyxHQUFHO1FBQ2pCLElBQUksRUFBRSxXQUFXO1FBQ2pCLFFBQVEsRUFBRTtZQUNULElBQUksRUFBRSxXQUFXO1lBQ2pCLENBQUMsRUFBRSxFQUFFO1lBQ0wsQ0FBQyxFQUFFLEVBQUU7WUFDTCxNQUFNLEVBQUUsR0FBRztZQUNYLE1BQU0sRUFBRSxHQUFHO1lBQ1gsUUFBUSxFQUFFLEdBQUc7WUFDYixLQUFLLEVBQUUsR0FBRztZQUNWLFFBQVEsRUFBRSxDQUFDO29CQUNWLElBQUksRUFBRSxPQUFPO29CQUNiLEdBQUcsRUFBRSxpREFBWTtvQkFDakIsS0FBSyxFQUFFLEdBQUc7aUJBQ1YsQ0FBQztZQUNGLFFBQVEsQ0FBQyxJQUFZO2dCQUNwQixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7WUFDOUIsQ0FBQztTQUNEO0tBQ0QsQ0FBQztJQUVGLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFrQixDQUFDLENBQUM7SUFFckQsT0FBTyxTQUFTLENBQUM7QUFDbEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCRCxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUM7QUFFbEIsTUFBTSxTQUFTLEdBQUcsY0FBYyxDQUFDO0FBQ2pDLE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQztBQUUzQixNQUFNLGVBQWUsR0FBRyxHQUFHLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsTUFBTSxZQUFZLEdBQUcsR0FBRyxNQUFNLDBCQUEwQixDQUFDO0FBRXpELE1BQU0sV0FBVyxHQUFHLEdBQUcsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxNQUFNLFlBQVksR0FBRyxHQUFHLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsTUFBTSxVQUFVLEdBQUcsR0FBRyxNQUFNLHVCQUF1QixDQUFDO0FBRXBELE1BQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQztBQUVsQyxNQUFNLEtBQUssR0FBRyxHQUFHLE1BQU0sYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmTztBQUVGO0FBQ0Y7QUFDUDtBQUV6QixNQUFNLFlBQWEsU0FBUSw2REFBWTtJQUNyRCxZQUFZLFNBQXVCLEVBQUU7UUFDcEMsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxJQUFJLDhDQUFjLENBQUM7UUFFcEQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWQsZ0VBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsNkRBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNEOzs7Ozs7Ozs7Ozs7Ozs7O0FDZGtDO0FBQ3dCO0FBR3BELElBQVUsb0JBQW9CLENBMkNwQztBQTNDRCxXQUFpQixvQkFBb0I7SUFDcEMsU0FBZ0IsTUFBTSxDQUFDLEtBQVksRUFBRSxNQUFvQjtRQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNmLE9BQU87U0FDUDtRQUVELE1BQU0sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVoRSxJQUFJLGNBQWMsQ0FBQyxlQUFlLElBQUksQ0FBQyxFQUFFO1lBQ3hDLE9BQU87U0FDUDtRQUVELE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQXlCLENBQUM7UUFFekUsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFO1lBQzFDLE9BQU87U0FDUDtRQUVELE1BQU0sU0FBUyxHQUFJLE1BQU0sQ0FBQyxRQUEyQixDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRW5FLFNBQVMsQ0FBQyxZQUFZLENBQ3JCLE1BQU0sQ0FBQyxDQUFDLEVBQ1IsTUFBTSxDQUFDLENBQUMsRUFDUixNQUFNLENBQUMsQ0FBQyxFQUNSLE1BQU0sQ0FBQyxDQUFDLEVBQ1IsTUFBTSxDQUFDLEVBQUUsRUFDVCxNQUFNLENBQUMsRUFBRSxDQUNULENBQUM7UUFFRixNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDekMsTUFBTSxDQUFDLEdBQUcsa0RBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLEdBQUcsa0RBQVUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFcEMsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDMUIsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDekIsU0FBUyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDcEMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBcENlLDJCQUFNLFNBb0NyQjtJQUVELFNBQWdCLElBQUksQ0FBQyxNQUFvQjtRQUN4Qyw0REFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsOENBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBSGUseUJBQUksT0FHbkI7QUFDRixDQUFDLEVBM0NnQixvQkFBb0IsS0FBcEIsb0JBQW9CLFFBMkNwQzs7Ozs7Ozs7Ozs7Ozs7O0FDaERvRDtBQUV0QyxNQUFNLGNBQWUsU0FBUSwrREFBYztJQUN6RCxLQUFLO1FBQ0osTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QixTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRSxTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBQ0Q7Ozs7Ozs7Ozs7Ozs7OztBQ1QrQztBQUVqQyxNQUFNLHFCQUFxQjtJQUExQztRQUNVLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNwQyxjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQXlCLENBQUM7UUFFdEQsWUFBTyxHQUFHLENBQUMsS0FBYSxFQUFFLE1BQWMsRUFBd0IsRUFBRTtZQUNqRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMvQixNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQWtCLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2pDLElBQUksR0FBRyxFQUFFO3dCQUNSLFFBQVEsR0FBRyxrRUFBcUIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFrQixDQUFDO3dCQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBQ2pDO3lCQUFNO3dCQUNOLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLHFCQUFxQixLQUFLLFlBQVksQ0FBQyxDQUFDO3FCQUM3RDtpQkFDRDtnQkFDRCxPQUFPLFFBQVEsQ0FBQzthQUNoQjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQztJQUtGLENBQUM7SUFIQSxJQUFJLENBQUMsTUFBYztRQUNsQixNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDRDs7Ozs7Ozs7Ozs7Ozs7QUN2Qk0sU0FBUyxHQUFHLENBQUMsVUFBc0I7SUFDekMsT0FBTztRQUNOLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsQ0FBQztRQUNULFNBQVMsRUFBRSxDQUFDO1FBQ1osVUFBVSxFQUFFLENBQUM7UUFDYixVQUFVLEVBQUUsQ0FBQztRQUNiLE1BQU0sRUFBRTtZQUNQLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLFFBQVE7U0FDZjtRQUNELFFBQVEsQ0FBQyxJQUFZO1lBQ3BCLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzlDLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzlDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNqRSxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsZ0JBQWdCLFVBQVUsZ0JBQWdCLFVBQVUsS0FBSyxDQUFDO2dCQUN2RyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUNoQjtRQUNGLENBQUM7S0FDRCxDQUFDO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ21DO0FBR2xCO0FBQ2dCO0FBQ007QUFDTTtBQUNTO0FBWXhDLFNBQVMsSUFBSSxDQUFDLFVBQTBCO0lBQ3RELFNBQVMsV0FBVyxDQUFDLElBQW9CO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsTUFBTSxPQUFPLEdBQUc7UUFDZixJQUFJLEVBQUUsUUFBUTtRQUNkLE9BQU8sRUFBRSxLQUFLO1FBQ2QsT0FBTyxFQUFFLEtBQUs7UUFDZCxRQUFRO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7UUFDRCxRQUFRLEVBQUU7WUFDVCxVQUFVLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsR0FBRyxFQUFFLCtDQUFVO2dCQUNmLE1BQU0sRUFBRSxDQUFDO2dCQUNULE1BQU0sRUFBRSxDQUFDO2FBQ1Q7WUFDRCxNQUFNLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFO29CQUNMLElBQUksRUFBRSxXQUFXO29CQUNqQixDQUFDLEVBQUUsRUFBRTtvQkFDTCxDQUFDLEVBQUUsRUFBRTtvQkFDTCxLQUFLLEVBQUUsR0FBRztvQkFDVixNQUFNLEVBQUUsRUFBRTtvQkFDVixJQUFJLEVBQUUsUUFBUTtvQkFDZCxNQUFNLEVBQUUsUUFBUTtpQkFDaEI7YUFDRDtZQUNELE1BQU0sRUFBRTtnQkFDUCxJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUU7b0JBQ0w7d0JBQ0MsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsQ0FBQyxFQUFFLEdBQUc7d0JBQ04sQ0FBQyxFQUFFLEdBQUc7d0JBQ04sTUFBTSxFQUFFLEVBQUU7d0JBQ1YsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7d0JBQ2xELE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtxQkFDekM7b0JBQ0Q7d0JBQ0MsSUFBSSxFQUFFLE1BQU07d0JBQ1osSUFBSSxFQUFFLGdDQUFnQzt3QkFDdEMsSUFBSSxFQUFFLFFBQVE7cUJBQ2Q7b0JBQ0Q7d0JBQ0MsSUFBSSxFQUFFLE1BQU07d0JBQ1osSUFBSSxFQUFFOzRCQUNMLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7NEJBQzlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7NEJBQ2hDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUU7NEJBQ2xDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUU7NEJBQ2hDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7eUJBQzlCO3dCQUNELElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO3dCQUNwRCxNQUFNLEVBQUUsUUFBUTtxQkFDaEI7aUJBQ0Q7YUFDRDtZQUNELEtBQUssRUFBRTtnQkFDTixJQUFJLEVBQUUsV0FBVztnQkFDakIsUUFBUSxFQUFFO29CQUNULDJDQUFJLENBQUM7d0JBQ0osSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSwyQ0FBTSxFQUFFLE9BQU8sRUFBRSxXQUFXO3FCQUM5RCxDQUFDO29CQUNGLDJDQUFJLENBQUM7d0JBQ0osSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSw4Q0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXO3FCQUNwRSxDQUFDO2lCQUNGO2FBQ0Q7WUFDRCxRQUFRLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLENBQUMsRUFBRSxHQUFHO2dCQUNOLENBQUMsRUFBRSxHQUFHO2dCQUNOLFFBQVEsRUFBRSxrREFBUSxFQUFFO2FBQ3BCO1lBQ0QsR0FBRyxFQUFFO2dCQUNKLElBQUksRUFBRSxPQUFPO2dCQUNiLENBQUMsRUFBRSxHQUFHO2dCQUNOLE1BQU0sRUFBRSxHQUFHO2dCQUNYLE1BQU0sRUFBRSxHQUFHO2dCQUNYLEtBQUssRUFBRSxHQUFHO2dCQUNWLEdBQUcsRUFBRSxhQUFhO2dCQUNsQixhQUFhO29CQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixDQUFDO2dCQUNELFlBQVk7b0JBQ1gsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ2xCLENBQUM7YUFDRDtZQUNELFVBQVUsRUFBRTtnQkFDWCxJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsZ0RBQVc7Z0JBQ2hCLENBQUMsRUFBRSxHQUFHO2dCQUNOLENBQUMsRUFBRSxHQUFHO2dCQUNOLEtBQUssRUFBRSxHQUFHO2dCQUNWLElBQUksRUFBRTtvQkFDTCxLQUFLLEVBQUUsUUFBUTtvQkFDZixLQUFLLEVBQUUsQ0FBQztpQkFDRDtnQkFDUixRQUFRLENBQUMsSUFBWTtvQkFDcEIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQzt3QkFDeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7NEJBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzt5QkFDcEI7cUJBQ0Q7Z0JBQ0YsQ0FBQztnQkFDRCxhQUFhLENBQUMsQ0FBTTtvQkFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO3FCQUNqQjt5QkFBTTt3QkFDTixJQUFJLENBQUMsSUFBSSxHQUFHOzRCQUNYLEtBQUssRUFBRSxRQUFROzRCQUNmLEtBQUssRUFBRSxDQUFDO3lCQUNSLENBQUM7cUJBQ0Y7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7YUFDRDtZQUNELFdBQVcsRUFBRTtnQkFDWixJQUFJLEVBQUUsV0FBVztnQkFDakIsQ0FBQyxFQUFFLEdBQUc7Z0JBQ04sQ0FBQyxFQUFFLEdBQUc7Z0JBQ04sUUFBUSxFQUFFO29CQUNULElBQUksRUFBRSxPQUFPO29CQUNiLEdBQUcsRUFBRSxpREFBWTtvQkFDakIsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsS0FBSyxFQUFFLENBQUM7b0JBQ1IsS0FBSyxFQUFFO3dCQUNOLElBQUksRUFBRSxJQUFJO3dCQUNWLE1BQU0sRUFBRTs0QkFDUDtnQ0FDQyxJQUFJLEVBQUUsQ0FBQztnQ0FDUCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFOzZCQUNkOzRCQUNEO2dDQUNDLE1BQU0sRUFBRSxVQUFVO2dDQUNsQixJQUFJLEVBQUUsQ0FBQztnQ0FDUCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7NkJBQzFCOzRCQUNEO2dDQUNDLE1BQU0sRUFBRSxhQUFhO2dDQUNyQixJQUFJLEVBQUUsQ0FBQztnQ0FDUCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7NkJBQ3RCOzRCQUNEO2dDQUNDLE1BQU0sRUFBRSxjQUFjO2dDQUN0QixJQUFJLEVBQUUsQ0FBQztnQ0FDUCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzZCQUNaO3lCQUNEO3FCQUNEO2lCQUNEO2FBQ0Q7WUFDRCxHQUFHLEVBQUUseUNBQUcsQ0FBQyxVQUFVLENBQUM7U0FDcEI7S0FDRCxDQUFDO0lBRUYsTUFBTSxhQUFhLEdBQWtCO1FBQ3BDLFFBQVEsRUFBRSxVQUFVLENBQUMsY0FBYztRQUNuQyxTQUFTLEVBQUUsVUFBVSxDQUFDLGVBQWU7UUFDckMsV0FBVztZQUNWLE9BQU8saUVBQXlCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsQ0FBQztLQUNELENBQUM7SUFFRixPQUFPO1FBQ04sSUFBSSxFQUFFLFdBQVc7UUFDakIsUUFBUSxFQUFFO1lBQ1QsT0FBTztZQUNQLFNBQVMsRUFBRSxxREFBUyxDQUFDLGFBQWEsQ0FBQztZQUNuQyxLQUFLLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSwwQ0FBSzthQUNqQztTQUNEO1FBQ0QsUUFBUTtZQUNQLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7WUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUM1QyxDQUFDO1FBQ0QsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEIsQ0FBQztLQUNELENBQUM7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzFNTSxTQUFTLFNBQVMsQ0FBQyxJQUFtQjtJQUM1QyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsT0FBTztRQUNOLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLENBQUM7UUFDVCxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLE1BQU07UUFDNUIsSUFBSSxFQUFFO1lBQ0wsSUFBSSxFQUFFLFdBQVc7WUFDakIsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNO1lBQ04sSUFBSSxFQUFFLFFBQVE7U0FDZDtRQUNELFFBQVE7WUFDUCxJQUFJLENBQUMsTUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNFLENBQUM7S0FDUSxDQUFDO0FBQ1osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN4QkQsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBYWxCLFNBQVMsYUFBYSxDQUFDLEtBQVUsRUFBRSxRQUFnQztJQUNsRSxNQUFNLElBQUksR0FBRyxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7SUFDMUIsT0FBTyxDQUFDLElBQVksRUFBRSxFQUFFO1FBRXZCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztRQUVwQixLQUFLLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtZQUV4QixJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzlCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsT0FBTyxHQUFHLElBQUksQ0FBQztpQkFDZjthQUNEO1NBQ0Q7UUFFRCxJQUFJLE9BQU8sRUFBRTtZQUNaLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNmO0lBQ0YsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsZ0JBQWdCLENBQUMsS0FBVSxFQUFFLFNBQWM7SUFDbkQsU0FBUyxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDL0UsQ0FBQztBQUVNLFNBQVMsSUFBSSxDQUFDLEtBQXFCO0lBQ3pDLFNBQVMsUUFBUTtRQUNoQixPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUM1RCxDQUFDO0lBRUQsTUFBTSxRQUFRLEdBQUc7UUFDaEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRztRQUMzQixDQUFDLEVBQUUsR0FBRztRQUNOLFFBQVEsRUFBRSxDQUFDO1FBQ1gsVUFBVSxDQUFDLElBQVk7WUFDdEIsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNwRCxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQy9CO2lCQUFNLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNoQztRQUNGLENBQUM7UUFDRCxRQUFRLENBQUMsSUFBWTtZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxRQUFRLEVBQUU7WUFDVCxJQUFJLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLFFBQVEsRUFBRTtnQkFDaEIsTUFBTSxFQUFFO29CQUNQLElBQUksRUFBRSxFQUFFO29CQUNSLEtBQUssRUFBRSxRQUFRO29CQUNmLEtBQUssRUFBRSxRQUFRO29CQUNmLGFBQWEsRUFBRSxRQUFRO2lCQUN2QjtnQkFDRCxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDTixNQUFNLEVBQUUsRUFBRTtnQkFDVixNQUFNLEVBQUUsR0FBRztnQkFDWCxhQUFhLEVBQUUsR0FBRyxFQUFFO29CQUNuQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QixDQUFDO2dCQUNELFFBQVE7b0JBQ1AsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQzthQUNEO1lBQ0QsS0FBSyxFQUFFO2dCQUNOLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSxLQUFLLENBQUMsS0FBSztnQkFDaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxNQUFNLEVBQUUsR0FBRztnQkFDWCxhQUFhLEVBQUUsR0FBRyxFQUFFO29CQUNuQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QixDQUFDO2FBQ0Q7U0FDRDtLQUNELENBQUM7SUFFRixnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVoRCxPQUFPLFFBQVEsQ0FBQztBQUNqQixDQUFDOzs7Ozs7O1VDaEdEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F1RDtBQUNWO0FBQ0k7QUFDTztBQUNMO0FBQ0E7QUFFTjtBQUNVO0FBQ1o7QUFDakI7QUFHUjtBQUdsQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ2pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFHbEMsTUFBTSxNQUFNLEdBQUcsSUFBSSw2REFBWSxFQUFFLENBQUM7QUFDbEMsdUVBQThCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkMsZ0VBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakMsa0VBQXlCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbEMsNERBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUIsNERBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUIsMkRBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ2hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVoRCxNQUFNLFVBQVUsR0FBRztJQUNsQixhQUFhO1FBQ1osT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsYUFBYTtRQUNaLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7SUFDcEMsQ0FBQztJQUNELGNBQWM7UUFDYixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUNELGVBQWU7UUFDZCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEMsQ0FBQztDQUNELENBQUM7QUFHRixNQUFNLEdBQUcsR0FBRyw4Q0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzdCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNaLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBdUIsQ0FBQztBQUV0QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBR2pCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzlDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRzlDLE1BQU0sWUFBWSxHQUFHLElBQUksbURBQVksRUFBRSxDQUFDO0FBQ3hDLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUN2QyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDakMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3JDLFlBQVksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNoQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzNCLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0FBQ3ZELFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQzdDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQ2hELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFHdEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUM3QixnREFBVyxFQUNYO0lBQ0MsS0FBSyxFQUFFLGdEQUFXO0lBQ2xCLEtBQUssRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUk7SUFDakMsTUFBTSxFQUFFLElBQUk7Q0FDSyxDQUNsQixDQUFDO0FBQ0YsWUFBWSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUNuQyxnREFBVyxFQUNYO0lBQ0MsS0FBSyxFQUFFLGdEQUFXO0lBQ2xCLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUk7SUFDM0IsTUFBTSxFQUFFLElBQUk7Q0FDSyxDQUNsQixDQUFDO0FBR0YsTUFBTSxlQUFlLEdBQUcsSUFBSSx1REFBcUIsRUFBRSxDQUFDO0FBQ3BELGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLGlEQUFZLENBQUMsQ0FBQztBQUNyRSxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzREFBaUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsb0RBQWUsQ0FBQyxDQUFDO0FBQzNFLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5leHBvcnQgY2xhc3MgQ2FudmFzRW5naW5lIGV4dGVuZHMgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGUgPSB7fSkge1xuICAgICAgICBtb2R1bGUuUGxhdGZvcm0gPSBtb2R1bGUuUGxhdGZvcm0gPz8gQ2FudmFzUGxhdGZvcm07XG4gICAgICAgIHN1cGVyKG1vZHVsZSk7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9wYXR0ZXJucyc7XG5leHBvcnQgKiBmcm9tICcuL3BsYXRmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZW5naW5lJztcbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5leHBvcnQgdmFyIENhbnZhc1BhdHRlcm5zO1xuKGZ1bmN0aW9uIChDYW52YXNQYXR0ZXJucykge1xuICAgIGZ1bmN0aW9uIGNvbG9yUGF0dGVybihjb2xvciwgYWxwaGEsIGN0KSB7XG4gICAgICAgIGxldCByID0gY29sb3IgPj4gMTYgJiAweGZmO1xuICAgICAgICBsZXQgZyA9IGNvbG9yID4+IDggJiAweGZmO1xuICAgICAgICBsZXQgYiA9IGNvbG9yICYgMHhmZjtcbiAgICAgICAgbGV0IGEgPSBhbHBoYSAqIDB4ZmY7XG4gICAgICAgIGlmICghQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eShjdCkpIHtcbiAgICAgICAgICAgIHIgPSAociAqIGN0LnJlZE11bHRpcGxpZXIgKyBjdC5yZWRPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIGcgPSAoZyAqIGN0LmdyZWVuTXVsdGlwbGllciArIGN0LmdyZWVuT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBiID0gKGIgKiBjdC5ibHVlTXVsdGlwbGllciArIGN0LmJsdWVPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIGEgPSAoYSAqIGN0LmFscGhhTXVsdGlwbGllciArIGN0LmFscGhhT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEgPCAweGZmKSB7XG4gICAgICAgICAgICByZXR1cm4gYHJnYmEoJHtyfSwgJHtnfSwgJHtifSwgJHthIC8gMHhmZn0pYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYHJnYigke3J9LCAke2d9LCAke2J9KWA7XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybiA9IGNvbG9yUGF0dGVybjtcbiAgICBmdW5jdGlvbiBhZGRHcmFkaWVudENvbG9ycyhwYXR0ZXJuLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBjb2xvcnNbaV07XG4gICAgICAgICAgICBjb25zdCBhbHBoYSA9IGFscGhhc1tpXTtcbiAgICAgICAgICAgIGxldCByYXRpbyA9IHJhdGlvc1tpXTtcbiAgICAgICAgICAgIGlmIChyYXRpbyA8IDApXG4gICAgICAgICAgICAgICAgcmF0aW8gPSAwO1xuICAgICAgICAgICAgaWYgKHJhdGlvID4gMSlcbiAgICAgICAgICAgICAgICByYXRpbyA9IDE7XG4gICAgICAgICAgICBjb25zdCBjb2xvclN0eWxlID0gY29sb3JQYXR0ZXJuKGNvbG9yLCBhbHBoYSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgcGF0dGVybi5hZGRDb2xvclN0b3AocmF0aW8sIGNvbG9yU3R5bGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmFkZEdyYWRpZW50Q29sb3JzID0gYWRkR3JhZGllbnRDb2xvcnM7XG4gICAgZnVuY3Rpb24gcmFkaWFsR3JhZGllbnRQYXR0ZXJuKGJlZ2luWCwgYmVnaW5ZLCBiZWdpblJhZGl1cywgZW5kWCwgZW5kWSwgZW5kUmFkaXVzLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudChiZWdpblgsIGJlZ2luWSwgYmVnaW5SYWRpdXMsIGVuZFgsIGVuZFksIGVuZFJhZGl1cyk7XG4gICAgICAgIGFkZEdyYWRpZW50Q29sb3JzKHBhdHRlcm4sIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLnJhZGlhbEdyYWRpZW50UGF0dGVybiA9IHJhZGlhbEdyYWRpZW50UGF0dGVybjtcbiAgICBmdW5jdGlvbiBsaW5lYXJHcmFkaWVudFBhdHRlcm4oYmVnaW5YLCBiZWdpblksIGVuZFgsIGVuZFksIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KGJlZ2luWCwgYmVnaW5ZLCBlbmRYLCBlbmRZKTtcbiAgICAgICAgYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMubGluZWFyR3JhZGllbnRQYXR0ZXJuID0gbGluZWFyR3JhZGllbnRQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGJpdG1hcFBhdHRlcm4oaW1hZ2UsIHJlcGVhdCwgbWF0cml4LCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVBhdHRlcm4oaW1hZ2UsIHJlcGVhdCA/ICdyZXBlYXQnIDogJ25vbmUnKTtcbiAgICAgICAgaWYgKHBhdHRlcm4pIHtcbiAgICAgICAgICAgIGNvbnN0IGRvbU1hdHJpeCA9IG5ldyBET01NYXRyaXgoKTtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5hID0gbWF0cml4LmEgPz8gMTtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5iID0gbWF0cml4LmIgPz8gMDtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5jID0gbWF0cml4LmMgPz8gMDtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5kID0gbWF0cml4LmQgPz8gMTtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5lID0gbWF0cml4LnR4ID8/IDA7XG4gICAgICAgICAgICBkb21NYXRyaXguZiA9IG1hdHJpeC50eSA/PyAwO1xuICAgICAgICAgICAgcGF0dGVybi5zZXRUcmFuc2Zvcm0oZG9tTWF0cml4KTtcbiAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMuYml0bWFwUGF0dGVybiA9IGJpdG1hcFBhdHRlcm47XG59KShDYW52YXNQYXR0ZXJucyB8fCAoQ2FudmFzUGF0dGVybnMgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAamVuZy9jb3JlJztcbmV4cG9ydCBjbGFzcyBDYW52YXNQbGF0Zm9ybSBleHRlbmRzIFBsYXRmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbdGhpcy52aWV3LmdldENvbnRleHQoJzJkJyldO1xuICAgICAgICB0aGlzLmN1c3RvbUNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRzW3RoaXMuY29udGV4dHMubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIHNhdmVDb250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICByZXN0b3JlQ29udGV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0cy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmRlYnVnLndhcm5pbmcoJ1RyeWluZyB0byByZXN0b3JlIG1haW4gY29udGV4dCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUN1c3RvbUNvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0O1xuICAgICAgICBpZiAodGhpcy5jdXN0b21Db250ZXh0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmN1c3RvbUNvbnRleHRzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnZpZXc7XG4gICAgICAgIGlmIChjb250ZXh0LmNhbnZhcy53aWR0aCAhPT0gd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRleHQuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgICBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIGRlc3Ryb3lDdXN0b21Db250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jdXN0b21Db250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICBiZWdpbigpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgpO1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB2aWV3LndpZHRoLCB2aWV3LmhlaWdodCk7XG4gICAgfVxuICAgIHVwZGF0ZVNpemUoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbmdpbmUuc2NyZWVuLmdldFdpZHRoKCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRIZWlnaHQoKTtcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIGNvbnN0IHZpZXdXaWR0aCA9IE1hdGguZmxvb3Iod2lkdGggKiBwaXhlbFJhdGlvKTtcbiAgICAgICAgY29uc3Qgdmlld0hlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgaWYgKHZpZXcud2lkdGggIT09IHZpZXdXaWR0aCB8fCB2aWV3LmhlaWdodCAhPT0gdmlld0hlaWdodCkge1xuICAgICAgICAgICAgdmlldy53aWR0aCA9IHZpZXdXaWR0aDtcbiAgICAgICAgICAgIHZpZXcuaGVpZ2h0ID0gdmlld0hlaWdodDtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ09OVEFJTkVSID0gJ2NvbnRhaW5lcic7XG5leHBvcnQgdmFyIENvbnRhaW5lcjtcbihmdW5jdGlvbiAoQ29udGFpbmVyKSB7XG4gICAgZnVuY3Rpb24gbnVtQ2hpbGRyZW4oY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbik7XG4gICAgICAgICAgICByZXR1cm4ga2V5cy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIENvbnRhaW5lci5udW1DaGlsZHJlbiA9IG51bUNoaWxkcmVuO1xufSkoQ29udGFpbmVyIHx8IChDb250YWluZXIgPSB7fSkpO1xuZXhwb3J0IHZhciBDb250YWluZXJFeHRlbnNpb247XG4oZnVuY3Rpb24gKENvbnRhaW5lckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgcmVuZGVyZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgcmVuZGVyZXIuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlcmVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHVwZGF0ZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBwb2ludGVycyB9ID0gZW5naW5lO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBwb2ludGVycy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICBwb2ludGVycy5kZXB0aCsrO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnRlcnMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0LCByZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGlmIChwb2ludGVycy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQsIHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBrZXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2ludGVycy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQsIHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludGVycy5kZXB0aC0tO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBsb2FkZWQoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IGxvYWRpbmcgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gbG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICBsb2FkaW5nLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgKz0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50Q29udGV4dC5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgLz0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGxvYWRpbmcudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSBjb21wb25lbnRDb250ZXh0LnByb2dyZXNzO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gY29tcG9uZW50Q29udGV4dC5sb2FkZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyArPSBjb21wb25lbnRDb250ZXh0LnByb2dyZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnRDb250ZXh0LmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyAvPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9hZGluZy5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLnNldChDT05UQUlORVIsIHVwZGF0ZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoQ09OVEFJTkVSLCByZW5kZXIpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChDT05UQUlORVIsIGhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KENPTlRBSU5FUiwgbG9hZGVkKTtcbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ29udGFpbmVyRXh0ZW5zaW9uIHx8IChDb250YWluZXJFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgQ29udGFpbmVyRXh0ZW5zaW9uIH0gZnJvbSAnLi9jb250YWluZXInO1xuZXhwb3J0IGNvbnN0IExPQURFUiA9ICdsb2FkZXInO1xuZXhwb3J0IHZhciBMb2FkZXI7XG4oZnVuY3Rpb24gKExvYWRlcikge1xuICAgIGZ1bmN0aW9uIGdldExvYWRpbmdQcm9ncmVzcyhsb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRlci5sb2FkaW5nUHJvZ3Jlc3MgPz8gMDtcbiAgICB9XG4gICAgTG9hZGVyLmdldExvYWRpbmdQcm9ncmVzcyA9IGdldExvYWRpbmdQcm9ncmVzcztcbiAgICBmdW5jdGlvbiBpc0xvYWRlZChsb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRlci5sb2FkZWQgPz8gZmFsc2U7XG4gICAgfVxuICAgIExvYWRlci5pc0xvYWRlZCA9IGlzTG9hZGVkO1xuICAgIGZ1bmN0aW9uIG5lZWRMb2FkaW5nQ2hlY2sobG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZGluZ0NoZWNrID8/IHRydWU7XG4gICAgfVxuICAgIExvYWRlci5uZWVkTG9hZGluZ0NoZWNrID0gbmVlZExvYWRpbmdDaGVjaztcbn0pKExvYWRlciB8fCAoTG9hZGVyID0ge30pKTtcbmV4cG9ydCB2YXIgTG9hZGVyRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChMb2FkZXJFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBsb2FkZWQobG9hZGVyLCBlbmdpbmUpIHtcbiAgICAgICAgaWYgKCFMb2FkZXIubmVlZExvYWRpbmdDaGVjayhsb2FkZXIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQ29udGFpbmVyRXh0ZW5zaW9uLmxvYWRlZChsb2FkZXIsIGVuZ2luZSk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUubG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGxvYWRlci5sb2FkaW5nUHJvZ3Jlc3MgPSBjb250ZXh0LnByb2dyZXNzO1xuICAgICAgICBpZiAoY29udGV4dC5sb2FkZWQgJiYgIWxvYWRlci5sb2FkZWQpIHtcbiAgICAgICAgICAgIGxvYWRlci5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGxvYWRlci5vbkxvYWRlZCkge1xuICAgICAgICAgICAgICAgIGxvYWRlci5vbkxvYWRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIExvYWRlckV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLnNldChMT0FERVIsIENvbnRhaW5lckV4dGVuc2lvbi51cGRhdGUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KExPQURFUiwgQ29udGFpbmVyRXh0ZW5zaW9uLnJlbmRlcik7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KExPQURFUiwgQ29udGFpbmVyRXh0ZW5zaW9uLmhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KExPQURFUiwgbG9hZGVkKTtcbiAgICB9XG4gICAgTG9hZGVyRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoTG9hZGVyRXh0ZW5zaW9uIHx8IChMb2FkZXJFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuLi9mZWF0dXJlcy9yZW5kZXJlcic7XG5pbXBvcnQgeyBVcGRhdGVyIH0gZnJvbSAnLi4vZmVhdHVyZXMvdXBkYXRlcic7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi4vZmVhdHVyZXMvbG9hZGluZyc7XG5pbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuLi9mZWF0dXJlcy9zY3JlZW4nO1xuaW1wb3J0IHsgUG9pbnRlcnMgfSBmcm9tICcuLi9mZWF0dXJlcy9wb2ludGVycyc7XG5pbXBvcnQgeyBUaWNrZXIgfSBmcm9tICcuLi9mZWF0dXJlcy90aWNrZXInO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9mZWF0dXJlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDb250YWluZXJFeHRlbnNpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4uL2ZlYXR1cmVzL2RlYnVnJztcbmltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gJy4uL2ZlYXR1cmVzL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi4vZmVhdHVyZXMvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMb2FkZXJFeHRlbnNpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRlcic7XG5leHBvcnQgY2xhc3MgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGUgPSB7fSkge1xuICAgICAgICB0aGlzLmRlcHRoID0gMzI7XG4gICAgICAgIG1vZHVsZS5Db21wb25lbnRzID0gbW9kdWxlLkNvbXBvbmVudHMgPz8gQ29tcG9uZW50cztcbiAgICAgICAgbW9kdWxlLlNjcmVlbiA9IG1vZHVsZS5TY3JlZW4gPz8gU2NyZWVuO1xuICAgICAgICBtb2R1bGUuUGxhdGZvcm0gPSBtb2R1bGUuUGxhdGZvcm0gPz8gUGxhdGZvcm07XG4gICAgICAgIG1vZHVsZS5VcGRhdGVyID0gbW9kdWxlLlVwZGF0ZXIgPz8gVXBkYXRlcjtcbiAgICAgICAgbW9kdWxlLkxvYWRpbmcgPSBtb2R1bGUuTG9hZGluZyA/PyBMb2FkaW5nO1xuICAgICAgICBtb2R1bGUuUmVuZGVyZXIgPSBtb2R1bGUuUmVuZGVyZXIgPz8gUmVuZGVyZXI7XG4gICAgICAgIG1vZHVsZS5Qb2ludGVycyA9IG1vZHVsZS5Qb2ludGVycyA/PyBQb2ludGVycztcbiAgICAgICAgbW9kdWxlLlRpY2tlciA9IG1vZHVsZS5UaWNrZXIgPz8gVGlja2VyO1xuICAgICAgICBtb2R1bGUuRGVidWcgPSBtb2R1bGUuRGVidWcgPz8gRGVidWc7XG4gICAgICAgIG1vZHVsZS5SZXNvdXJjZXMgPSBtb2R1bGUuUmVzb3VyY2VzID8/IFJlc291cmNlcztcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gbmV3IG1vZHVsZS5Db21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IG1vZHVsZS5TY3JlZW4oKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybSA9IG5ldyBtb2R1bGUuUGxhdGZvcm0odGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlciA9IG5ldyBtb2R1bGUuVXBkYXRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gbmV3IG1vZHVsZS5Mb2FkaW5nKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IG1vZHVsZS5SZW5kZXJlcih0aGlzKTtcbiAgICAgICAgdGhpcy5wb2ludGVycyA9IG5ldyBtb2R1bGUuUG9pbnRlcnModGhpcyk7XG4gICAgICAgIHRoaXMudGlja2VyID0gbmV3IG1vZHVsZS5UaWNrZXIodGhpcyk7XG4gICAgICAgIHRoaXMuZGVidWcgPSBuZXcgbW9kdWxlLkRlYnVnKCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IG1vZHVsZS5SZXNvdXJjZXModGhpcyk7XG4gICAgICAgIENvbnRhaW5lckV4dGVuc2lvbi5pbml0KHRoaXMpO1xuICAgICAgICBMb2FkZXJFeHRlbnNpb24uaW5pdCh0aGlzKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoZW5naW5lKSB7XG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgIH1cbn1cbiIsImV4cG9ydCB2YXIgRGlzcGxheTtcbihmdW5jdGlvbiAoRGlzcGxheSkge1xuICAgIGZ1bmN0aW9uIGlzVmlzaWJsZShjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC52aXNpYmxlID8/IHRydWU7XG4gICAgfVxuICAgIERpc3BsYXkuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xufSkoRGlzcGxheSB8fCAoRGlzcGxheSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFBpdm90O1xuKGZ1bmN0aW9uIChQaXZvdCkge1xuICAgIGZ1bmN0aW9uIGdldFgocGl2b3QsIHdpZHRoKSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RYIH0gPSBwaXZvdDtcbiAgICAgICAgaWYgKHBpdm90WCkge1xuICAgICAgICAgICAgcmV0dXJuIC1waXZvdFggKiB3aWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgUGl2b3QuZ2V0WCA9IGdldFg7XG4gICAgZnVuY3Rpb24gZ2V0WShwaXZvdCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RZIH0gPSBwaXZvdDtcbiAgICAgICAgaWYgKHBpdm90WSkge1xuICAgICAgICAgICAgcmV0dXJuIC1waXZvdFkgKiBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFkgPSBnZXRZO1xuICAgIGZ1bmN0aW9uIGhhc1ZhbHVlcyhwaXZvdCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WCwgcGl2b3RZIH0gPSBwaXZvdDtcbiAgICAgICAgcmV0dXJuICEhcGl2b3RYIHx8ICEhcGl2b3RZO1xuICAgIH1cbiAgICBQaXZvdC5oYXNWYWx1ZXMgPSBoYXNWYWx1ZXM7XG59KShQaXZvdCB8fCAoUGl2b3QgPSB7fSkpO1xuIiwiY29uc3QgaGFuZGxlcnNNYXAgPSB7XG4gICAgcG9pbnRlckRvd246ICdvblBvaW50ZXJEb3duJyxcbiAgICBwb2ludGVyVXA6ICdvblBvaW50ZXJVcCcsXG4gICAgcG9pbnRlck1vdmU6ICdvblBvaW50ZXJNb3ZlJyxcbiAgICBwb2ludGVyQ2FuY2VsOiAnb25Qb2ludGVyQ2FuY2VsJyxcbiAgICBwb2ludGVyT3ZlcjogJ29uUG9pbnRlck92ZXInLFxuICAgIHBvaW50ZXJPdXQ6ICdvblBvaW50ZXJPdXQnLFxufTtcbmV4cG9ydCB2YXIgUG9pbnRlcjtcbihmdW5jdGlvbiAoUG9pbnRlcikge1xuICAgIGZ1bmN0aW9uIGlzUG9pbnRlckVuYWJsZWQocG9pbnRlcikge1xuICAgICAgICByZXR1cm4gcG9pbnRlci5wb2ludGVyRW5hYmxlZCA/PyB0cnVlO1xuICAgIH1cbiAgICBQb2ludGVyLmlzUG9pbnRlckVuYWJsZWQgPSBpc1BvaW50ZXJFbmFibGVkO1xuICAgIGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQocG9pbnRlciwgdHlwZSwgeCwgeSwgZ2xvYmFsWCwgZ2xvYmFsWSwgaWQpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlck5hbWUgPSBoYW5kbGVyc01hcFt0eXBlXTtcbiAgICAgICAgaWYgKGhhbmRsZXJOYW1lICYmIHBvaW50ZXJbaGFuZGxlck5hbWVdKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgeSxcbiAgICAgICAgICAgICAgICBnbG9iYWxYLFxuICAgICAgICAgICAgICAgIGdsb2JhbFksXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcG9pbnRlcltoYW5kbGVyTmFtZV0oZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG59KShQb2ludGVyIHx8IChQb2ludGVyID0ge30pKTtcbiIsImV4cG9ydCB2YXIgVHJhbnNmb3JtO1xuKGZ1bmN0aW9uIChUcmFuc2Zvcm0pIHtcbiAgICBmdW5jdGlvbiBnZXRNYXRyaXgodHJhbnNmb3JtLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKG1hdHJpeCkge1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBtYXRyaXguYSA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSBtYXRyaXguYiA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSBtYXRyaXguYyA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBtYXRyaXguZCA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gbWF0cml4LnR4ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQudHkgPSBtYXRyaXgudHkgPz8gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvdGF0aW9uIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHRyYW5zZm9ybS5zY2FsZVggPz8gdHJhbnNmb3JtLnNjYWxlID8/IDE7XG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IHRyYW5zZm9ybS5zY2FsZVkgPz8gdHJhbnNmb3JtLnNjYWxlID8/IDE7XG4gICAgICAgIHJlc3VsdC50eCA9IHRyYW5zZm9ybS54ID8/IDA7XG4gICAgICAgIHJlc3VsdC50eSA9IHRyYW5zZm9ybS55ID8/IDA7XG4gICAgICAgIGlmIChyb3RhdGlvbikge1xuICAgICAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3Mocm90YXRpb24pO1xuICAgICAgICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW4ocm90YXRpb24pO1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBjb3MgKiBzY2FsZVg7XG4gICAgICAgICAgICByZXN1bHQuYiA9IHNpbiAqIHNjYWxlWDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gLXNpbiAqIHNjYWxlWTtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gY29zICogc2NhbGVZO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hID0gc2NhbGVYO1xuICAgICAgICByZXN1bHQuYiA9IDA7XG4gICAgICAgIHJlc3VsdC5jID0gMDtcbiAgICAgICAgcmVzdWx0LmQgPSBzY2FsZVk7XG4gICAgfVxuICAgIFRyYW5zZm9ybS5nZXRNYXRyaXggPSBnZXRNYXRyaXg7XG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JUcmFuc2Zvcm0odHJhbnNmb3JtLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0ucmVkTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmFscGhhT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0ucmVkT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5ncmVlbk9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5ibHVlT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxwaGEgPSB0cmFuc2Zvcm0uYWxwaGEgPz8gMTtcbiAgICAgICAgY29uc3QgeyB0aW50IH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmICh0aW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IGNvbG9yID0gMCwgdmFsdWUgPSAxIH0gPSB0aW50O1xuICAgICAgICAgICAgY29uc3QgdmFsdWVJbnZlcnRlZCA9IDEgLSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHIgPSAoY29sb3IgPj4gMTYpICYgMHhmZjtcbiAgICAgICAgICAgIGNvbnN0IGcgPSAoY29sb3IgPj4gOCkgJiAweGZmO1xuICAgICAgICAgICAgY29uc3QgYiA9IGNvbG9yICYgMHhmZjtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYTtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gciAqIHZhbHVlO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gZyAqIHZhbHVlO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBiICogdmFsdWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHsgYnJpZ2h0bmVzcyB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAoYnJpZ2h0bmVzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoYnJpZ2h0bmVzcyA+IDEpIHtcbiAgICAgICAgICAgICAgICBicmlnaHRuZXNzID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGJyaWdodG5lc3MgPCAtMSkge1xuICAgICAgICAgICAgICAgIGJyaWdodG5lc3MgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSAxIC0gTWF0aC5hYnMoYnJpZ2h0bmVzcyk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIGlmIChicmlnaHRuZXNzID4gMCkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IGJyaWdodG5lc3MgKiAyNTU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGE7XG4gICAgICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHBlcmNlbnQ7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gcGVyY2VudDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IHBlcmNlbnQ7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYTtcbiAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSAxO1xuICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldENvbG9yVHJhbnNmb3JtID0gZ2V0Q29sb3JUcmFuc2Zvcm07XG59KShUcmFuc2Zvcm0gfHwgKFRyYW5zZm9ybSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFVwZGF0ZTtcbihmdW5jdGlvbiAoVXBkYXRlKSB7XG4gICAgZnVuY3Rpb24gaXNFbmFibGVkKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgVXBkYXRlLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29tcG9uZW50LCB0aW1lKSB7XG4gICAgICAgIGlmIChjb21wb25lbnQub25VcGRhdGUpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5vblVwZGF0ZSh0aW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBVcGRhdGUudXBkYXRlID0gdXBkYXRlO1xufSkoVXBkYXRlIHx8IChVcGRhdGUgPSB7fSkpO1xuIiwiZXhwb3J0IGNsYXNzIENvbXBvbmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVuZGVyID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5oaXRUZXN0ID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IG5ldyBNYXAoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRGVidWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy53YXJuaW5ncyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICB9XG4gICAgZXJyb3IoLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLmVycm9ycy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMuZXJyb3JzLnNldChpZCwgY291bnQpO1xuICAgIH1cbiAgICB3YXJuaW5nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy53YXJuaW5ncy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgdGhpcy53YXJuaW5ncy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChyb290KTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIH1cbiAgICBiZWdpbigpIHtcbiAgICB9XG4gICAgZW5kKCkge1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1hdHJpeCwgUG9pbnQgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuLi9leHRlbnNpb25zL2Rpc3BsYXknO1xuaW1wb3J0IHsgUG9pbnRlciB9IGZyb20gJy4uL2V4dGVuc2lvbnMvcG9pbnRlcic7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9leHRlbnNpb25zL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBQb2ludGVycyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nbG9iYWwgPSBQb2ludC5lbXB0eSgpO1xuICAgICAgICB0aGlzLmxvY2FsID0gUG9pbnQuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5wb2ludGVySWQgPSAwO1xuICAgICAgICB0aGlzLnBvaW50ZXJUeXBlID0gJ3BvaW50ZXJEb3duJztcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBtYXRyaXg6IE1hdHJpeC5lbXB0eSgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICBkaXNwYXRjaCh0eXBlLCB4LCB5LCBpZCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9jYWwueCA9IHg7XG4gICAgICAgIHRoaXMubG9jYWwueSA9IHk7XG4gICAgICAgIHRoaXMuZ2xvYmFsLnggPSB4O1xuICAgICAgICB0aGlzLmdsb2JhbC55ID0geTtcbiAgICAgICAgdGhpcy5wb2ludGVySWQgPSBpZDtcbiAgICAgICAgdGhpcy5wb2ludGVyVHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIE1hdHJpeC5zZXRFbXB0eShiYXNlLm1hdHJpeCk7XG4gICAgICAgIHRoaXMuZGVwdGgrKztcbiAgICAgICAgdGhpcy5kaXNwYXRjaENvbXBvbmVudChyb290LCBiYXNlLCBmYWxzZSk7XG4gICAgfVxuICAgIHVwZGF0ZUxvY2FsKGNvbXBvbmVudCwgcGFyZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgTWF0cml4LmNvbmNhdChwYXJlbnQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50KGNvbnRleHQubWF0cml4LCB0aGlzLmdsb2JhbCwgdGhpcy5sb2NhbCk7XG4gICAgfVxuICAgIGRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgcGFyZW50LCBwYXJlbnRSZXN1bHQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghRGlzcGxheS5pc1Zpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50UmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnBvaW50ZXJPdmVyICYmIHRoaXMucG9pbnRlclR5cGUgPT09ICdwb2ludGVyTW92ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxvY2FsKGNvbXBvbmVudCwgcGFyZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMubG9jYWw7XG4gICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdXQnLCB4LCB5LCB0aGlzLmdsb2JhbC54LCB0aGlzLmdsb2JhbC55LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnBvaW50ZXJPdmVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMb2NhbChjb21wb25lbnQsIHBhcmVudCk7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMubG9jYWw7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsIHRoaXMucG9pbnRlclR5cGUsIHgsIHksIHRoaXMuZ2xvYmFsLngsIHRoaXMuZ2xvYmFsLnksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJUeXBlID09PSAncG9pbnRlck1vdmUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiAhY29tcG9uZW50LnBvaW50ZXJPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3ZlcicsIHgsIHksIHRoaXMuZ2xvYmFsLngsIHRoaXMuZ2xvYmFsLnksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXJlc3VsdCAmJiBjb21wb25lbnQucG9pbnRlck92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdXQnLCB4LCB5LCB0aGlzLmdsb2JhbC54LCB0aGlzLmdsb2JhbC55LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wb2ludGVyT3ZlciA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXggfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuLi9leHRlbnNpb25zL2Rpc3BsYXknO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgUmVuZGVyZXIgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXTtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIG1hdHJpeDogTWF0cml4LmVtcHR5KCksXG4gICAgICAgICAgICAgICAgY29sb3JUcmFuc2Zvcm06IENvbG9yVHJhbnNmb3JtLmVtcHR5KCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXSA9IGNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFEaXNwbGF5LmlzVmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBUcmFuc2Zvcm0uZ2V0TWF0cml4KGNvbXBvbmVudCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICBUcmFuc2Zvcm0uZ2V0Q29sb3JUcmFuc2Zvcm0oY29tcG9uZW50LCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgTWF0cml4LmNvbmNhdChwYXJlbnQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICBDb2xvclRyYW5zZm9ybS5jb25jYXQocGFyZW50LmNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy5lbmdpbmUucGxhdGZvcm0uYmVnaW4oKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5kZXB0aCsrO1xuICAgICAgICBNYXRyaXguY29weSh0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0TWF0cml4KCksIGJhc2UubWF0cml4KTtcbiAgICAgICAgQ29sb3JUcmFuc2Zvcm0uc2V0RW1wdHkoYmFzZS5jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50KHJvb3QsIGJhc2UpO1xuICAgICAgICB0aGlzLmVuZ2luZS5wbGF0Zm9ybS5lbmQoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IHZhciBSZXNvdXJjZTtcbihmdW5jdGlvbiAoUmVzb3VyY2UpIHtcbiAgICBmdW5jdGlvbiBnZXRQcm9ncmVzcyhyZXNvdXJjZSkge1xuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzb3VyY2UubG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzb3VyY2UuYnl0ZXNUb3RhbCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvdXJjZS5ieXRlc0xvYWRlZCAvIHJlc291cmNlLmJ5dGVzVG90YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFJlc291cmNlLmdldFByb2dyZXNzID0gZ2V0UHJvZ3Jlc3M7XG59KShSZXNvdXJjZSB8fCAoUmVzb3VyY2UgPSB7fSkpO1xuZXhwb3J0IGNsYXNzIFJlc291cmNlcyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZXNvbHZlcnMgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIGdldChhc3NldCkge1xuICAgICAgICBpZiAoIWFzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzb3VyY2UgPSB0aGlzLnJlc291cmNlcy5nZXQoYXNzZXQpO1xuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICByZXNvdXJjZSA9IHRoaXMucmVzb2x2ZShhc3NldCk7XG4gICAgICAgICAgICB0aGlzLnJlc291cmNlcy5zZXQoYXNzZXQsIHJlc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgfVxuICAgIHJlc29sdmUoYXNzZXQpIHtcbiAgICAgICAgZm9yIChjb25zdCByZXNvbHZlciBvZiB0aGlzLnJlc29sdmVycykge1xuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSByZXNvbHZlcihhc3NldCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgaWYgKHJlc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5naW5lLmRlYnVnLndhcm5pbmcoYFJlc291cmNlIG5vdCByZXNvbHZlZDogJHthc3NldH1gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IDQwMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA0MDA7XG4gICAgICAgIHRoaXMucGl4ZWxSYXRpbyA9IDA7XG4gICAgICAgIHRoaXMuZnVsbHNjcmVlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1hdHJpeCA9IE1hdHJpeC5lbXB0eSgpO1xuICAgIH1cbiAgICBnZXRNYXRyaXgoKSB7XG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW8gPSB0aGlzLmdldFBpeGVsUmF0aW8oKTtcbiAgICAgICAgdGhpcy5tYXRyaXguYSA9IHBpeGVsUmF0aW87XG4gICAgICAgIHRoaXMubWF0cml4LmQgPSBwaXhlbFJhdGlvO1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gICAgfVxuICAgIGdldFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuID8gd2luZG93LmlubmVyV2lkdGggOiB0aGlzLndpZHRoO1xuICAgIH1cbiAgICBnZXRIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZ1bGxzY3JlZW4gPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB0aGlzLmhlaWdodDtcbiAgICB9XG4gICAgZ2V0UGl4ZWxSYXRpbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGl4ZWxSYXRpbyA+IDAgPyB0aGlzLnBpeGVsUmF0aW8gOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA/PyAxO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUaWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xuICAgICAgICB0aGlzLmZyYW1lUmF0ZSA9IDA7XG4gICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGUgPSAodGltZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbmdpbmUudXBkYXRlci51cGRhdGUodGltZSk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5sb2FkaW5nLnVwZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVuZGVyZXIucmVuZGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlRnJhbWUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gKGN1cnJlbnRUaW1lIC0gdGhpcy50aW1lKSAvIDEwMDA7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKGRlbHRhVGltZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU5leHRGcmFtZSgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB9XG4gICAgZ2V0IGlzUGF1c2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXVzZWQ7XG4gICAgfVxuICAgIHBsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOZXh0RnJhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdXBkYXRlTmV4dEZyYW1lKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVGcmFtZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVXBkYXRlIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy91cGRhdGUnO1xuaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgVXBkYXRlciBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChyb290KTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbiAgICB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVVwZGF0ZS5pc0VuYWJsZWQoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllcyhjb21wb25lbnQpO1xuICAgICAgICBVcGRhdGUudXBkYXRlKGNvbXBvbmVudCwgdGhpcy50aW1lKTtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVByb3BlcnRpZXMoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZW5naW5lLmNvbXBvbmVudHMucHJvcGVydGllcy5mb3JFYWNoKChoYW5kbGVyLCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudFtwcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2xvYWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvZW5naW5lJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvY29tcG9uZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL2RlYnVnJztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcGxhdGZvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9wb2ludGVycyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3JlbmRlcmVyJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcmVzb3VyY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvc2NyZWVuJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvdGlja2VyJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvdXBkYXRlcic7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyYWN0aXZlL21vdXNlJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJhY3RpdmUvdG91Y2gnO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL2Rpc3BsYXknO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3Bpdm90JztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9wb2ludGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9zb3VyY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3RyYW5zZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvdXBkYXRlJztcbiIsImZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgdHlwZSkge1xuICAgIGNvbnN0IHsgdmlldyB9ID0gZW5naW5lLnBsYXRmb3JtO1xuICAgIGNvbnN0IGNsaWVudFJlY3QgPSB2aWV3LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gY2xpZW50UmVjdC5sZWZ0IC0gdmlldy5jbGllbnRMZWZ0O1xuICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gY2xpZW50UmVjdC50b3AgLSB2aWV3LmNsaWVudFRvcDtcbiAgICBlbmdpbmUucG9pbnRlcnMuZGlzcGF0Y2godHlwZSwgeCwgeSwgMCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cbmV4cG9ydCB2YXIgTW91c2VFeHRlbnNpb247XG4oZnVuY3Rpb24gKE1vdXNlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyB2aWV3IH0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyRG93bicpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyVXAnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyTW92ZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyQ2FuY2VsJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBNb3VzZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKE1vdXNlRXh0ZW5zaW9uIHx8IChNb3VzZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsIHR5cGUpIHtcbiAgICBjb25zdCB7IHZpZXcgfSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICBjb25zdCBjbGllbnRSZWN0ID0gdmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV07XG4gICAgICAgIGNvbnN0IHggPSB0b3VjaC5jbGllbnRYIC0gY2xpZW50UmVjdC5sZWZ0IC0gdmlldy5jbGllbnRMZWZ0O1xuICAgICAgICBjb25zdCB5ID0gdG91Y2guY2xpZW50WSAtIGNsaWVudFJlY3QudG9wIC0gdmlldy5jbGllbnRUb3A7XG4gICAgICAgIGVuZ2luZS5wb2ludGVycy5kaXNwYXRjaCh0eXBlLCB4LCB5LCB0b3VjaC5pZGVudGlmaWVyKTtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cbmV4cG9ydCB2YXIgVG91Y2hFeHRlbnNpb247XG4oZnVuY3Rpb24gKFRvdWNoRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyB2aWV3IH0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckRvd24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJVcCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJNb3ZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyQ2FuY2VsJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBUb3VjaEV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFRvdWNoRXh0ZW5zaW9uIHx8IChUb3VjaEV4dGVuc2lvbiA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIEJvdW5kcztcbihmdW5jdGlvbiAoQm91bmRzKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtaW5YOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWluWTogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG1heFg6IE51bWJlci5NSU5fVkFMVUUsXG4gICAgICAgICAgICBtYXhZOiBOdW1iZXIuTUlOX1ZBTFVFLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBCb3VuZHMuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShib3VuZHMpIHtcbiAgICAgICAgYm91bmRzLm1pblggPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWluWSA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGJvdW5kcy5tYXhYID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1heFkgPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgIH1cbiAgICBCb3VuZHMuc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KGJvdW5kcykge1xuICAgICAgICByZXR1cm4gYm91bmRzLm1pblggPT09IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5taW5ZID09PSBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWF4WCA9PT0gTnVtYmVyLk1JTl9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1heFkgPT09IE51bWJlci5NSU5fVkFMVUU7XG4gICAgfVxuICAgIEJvdW5kcy5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiB0b1JlY3RhbmdsZShib3VuZHMsIHJlY3RhbmdsZSkge1xuICAgICAgICBjb25zdCB7IG1pblgsIG1pblksIG1heFgsIG1heFksIH0gPSBib3VuZHM7XG4gICAgICAgIHJlY3RhbmdsZS54ID0gbWluWDtcbiAgICAgICAgcmVjdGFuZ2xlLnkgPSBtaW5ZO1xuICAgICAgICByZWN0YW5nbGUud2lkdGggPSBtYXhYIC0gbWluWDtcbiAgICAgICAgcmVjdGFuZ2xlLmhlaWdodCA9IG1heFkgLSBtaW5ZO1xuICAgIH1cbiAgICBCb3VuZHMudG9SZWN0YW5nbGUgPSB0b1JlY3RhbmdsZTtcbiAgICBmdW5jdGlvbiB0ZXN0WChib3VuZHMsIHgpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0WCA9IHRlc3RYO1xuICAgIGZ1bmN0aW9uIHRlc3RZKGJvdW5kcywgeSkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RZID0gdGVzdFk7XG4gICAgZnVuY3Rpb24gdGVzdChib3VuZHMsIHgsIHkpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdCA9IHRlc3Q7XG4gICAgZnVuY3Rpb24gdGVzdFBvaW50KGJvdW5kcywgcG9pbnQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFBvaW50ID0gdGVzdFBvaW50O1xufSkoQm91bmRzIHx8IChCb3VuZHMgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBDb2xvclRyYW5zZm9ybTtcbihmdW5jdGlvbiAoQ29sb3JUcmFuc2Zvcm0pIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFscGhhTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIHJlZE11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBncmVlbk11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBibHVlTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGFscGhhT2Zmc2V0OiAwLFxuICAgICAgICAgICAgcmVkT2Zmc2V0OiAwLFxuICAgICAgICAgICAgZ3JlZW5PZmZzZXQ6IDAsXG4gICAgICAgICAgICBibHVlT2Zmc2V0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkoY3QpIHtcbiAgICAgICAgcmV0dXJuIGN0LnJlZE11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmdyZWVuTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmFscGhhTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYmx1ZU9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHlXaXRoQWxwaGEoY3QpIHtcbiAgICAgICAgcmV0dXJuIGN0LnJlZE11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmdyZWVuTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LnJlZE9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5PZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmJsdWVPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmFscGhhT2Zmc2V0ID09PSAwO1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5pc0VtcHR5V2l0aEFscGhhID0gaXNFbXB0eVdpdGhBbHBoYTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShjdCkge1xuICAgICAgICBjdC5yZWRNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuZ3JlZW5NdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuYmx1ZU11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5hbHBoYU11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5yZWRPZmZzZXQgPSAwO1xuICAgICAgICBjdC5ncmVlbk9mZnNldCA9IDA7XG4gICAgICAgIGN0LmJsdWVPZmZzZXQgPSAwO1xuICAgICAgICBjdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gY29weShmcm9tLCB0bykge1xuICAgICAgICB0by5hbHBoYU11bHRpcGxpZXIgPSBmcm9tLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgdG8ucmVkTXVsdGlwbGllciA9IGZyb20ucmVkTXVsdGlwbGllcjtcbiAgICAgICAgdG8uZ3JlZW5NdWx0aXBsaWVyID0gZnJvbS5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIHRvLmJsdWVNdWx0aXBsaWVyID0gZnJvbS5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgdG8uYWxwaGFPZmZzZXQgPSBmcm9tLmFscGhhT2Zmc2V0O1xuICAgICAgICB0by5yZWRPZmZzZXQgPSBmcm9tLnJlZE9mZnNldDtcbiAgICAgICAgdG8uZ3JlZW5PZmZzZXQgPSBmcm9tLmdyZWVuT2Zmc2V0O1xuICAgICAgICB0by5ibHVlT2Zmc2V0ID0gZnJvbS5ibHVlT2Zmc2V0O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBjb25jYXQoY3QxLCBjdDAsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCBhbHBoYU11bHRpcGxpZXIgPSBjdDEuYWxwaGFNdWx0aXBsaWVyICogY3QwLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgcmVkTXVsdGlwbGllciA9IGN0MS5yZWRNdWx0aXBsaWVyICogY3QwLnJlZE11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGdyZWVuTXVsdGlwbGllciA9IGN0MS5ncmVlbk11bHRpcGxpZXIgKiBjdDAuZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBibHVlTXVsdGlwbGllciA9IGN0MS5ibHVlTXVsdGlwbGllciAqIGN0MC5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgYWxwaGFPZmZzZXQgPSBjdDEuYWxwaGFNdWx0aXBsaWVyICogY3QwLmFscGhhT2Zmc2V0ICsgY3QxLmFscGhhT2Zmc2V0O1xuICAgICAgICBjb25zdCByZWRPZmZzZXQgPSBjdDEucmVkTXVsdGlwbGllciAqIGN0MC5yZWRPZmZzZXQgKyBjdDEucmVkT2Zmc2V0O1xuICAgICAgICBjb25zdCBncmVlbk9mZnNldCA9IGN0MS5ncmVlbk11bHRpcGxpZXIgKiBjdDAuZ3JlZW5PZmZzZXQgKyBjdDEuZ3JlZW5PZmZzZXQ7XG4gICAgICAgIGNvbnN0IGJsdWVPZmZzZXQgPSBjdDEuYmx1ZU11bHRpcGxpZXIgKiBjdDAuYmx1ZU9mZnNldCArIGN0MS5ibHVlT2Zmc2V0O1xuICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHJlZE11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSBncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IGJsdWVNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSBhbHBoYU9mZnNldDtcbiAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IHJlZE9mZnNldDtcbiAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gZ3JlZW5PZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gYmx1ZU9mZnNldDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uY29uY2F0ID0gY29uY2F0O1xufSkoQ29sb3JUcmFuc2Zvcm0gfHwgKENvbG9yVHJhbnNmb3JtID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vY29sb3ItdHJhbnNmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vYm91bmRzJztcbmV4cG9ydCAqIGZyb20gJy4vbWF0cml4JztcbmV4cG9ydCAqIGZyb20gJy4vcG9pbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWN0YW5nbGUnO1xuIiwiZXhwb3J0IHZhciBNYXRyaXg7XG4oZnVuY3Rpb24gKE1hdHJpeCkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogMSxcbiAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICBjOiAwLFxuICAgICAgICAgICAgZDogMSxcbiAgICAgICAgICAgIHR4OiAwLFxuICAgICAgICAgICAgdHk6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIE1hdHJpeC5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkobWF0cml4KSB7XG4gICAgICAgIHJldHVybiBtYXRyaXguYSA9PT0gMVxuICAgICAgICAgICAgJiYgbWF0cml4LmIgPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC5jID09PSAwXG4gICAgICAgICAgICAmJiBtYXRyaXguZCA9PT0gMVxuICAgICAgICAgICAgJiYgbWF0cml4LnR4ID09PSAwXG4gICAgICAgICAgICAmJiBtYXRyaXgudHkgPT09IDA7XG4gICAgfVxuICAgIE1hdHJpeC5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShtYXRyaXgpIHtcbiAgICAgICAgbWF0cml4LmEgPSAxO1xuICAgICAgICBtYXRyaXguYiA9IDA7XG4gICAgICAgIG1hdHJpeC5jID0gMDtcbiAgICAgICAgbWF0cml4LmQgPSAxO1xuICAgICAgICBtYXRyaXgudHggPSAwO1xuICAgICAgICBtYXRyaXgudHkgPSAwO1xuICAgIH1cbiAgICBNYXRyaXguc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KGZyb20sIHRvKSB7XG4gICAgICAgIHRvLmEgPSBmcm9tLmE7XG4gICAgICAgIHRvLmIgPSBmcm9tLmI7XG4gICAgICAgIHRvLmMgPSBmcm9tLmM7XG4gICAgICAgIHRvLmQgPSBmcm9tLmQ7XG4gICAgICAgIHRvLnR4ID0gZnJvbS50eDtcbiAgICAgICAgdG8udHkgPSBmcm9tLnR5O1xuICAgIH1cbiAgICBNYXRyaXguY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gY29uY2F0KG1hdHJpeDAsIG1hdHJpeDEsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCBhID0gbWF0cml4MS5hICogbWF0cml4MC5hICsgbWF0cml4MS5iICogbWF0cml4MC5jO1xuICAgICAgICBjb25zdCBiID0gbWF0cml4MS5hICogbWF0cml4MC5iICsgbWF0cml4MS5iICogbWF0cml4MC5kO1xuICAgICAgICBjb25zdCBjID0gbWF0cml4MS5jICogbWF0cml4MC5hICsgbWF0cml4MS5kICogbWF0cml4MC5jO1xuICAgICAgICBjb25zdCBkID0gbWF0cml4MS5jICogbWF0cml4MC5iICsgbWF0cml4MS5kICogbWF0cml4MC5kO1xuICAgICAgICBjb25zdCB0eCA9IG1hdHJpeDEudHggKiBtYXRyaXgwLmEgKyBtYXRyaXgxLnR5ICogbWF0cml4MC5jICsgbWF0cml4MC50eDtcbiAgICAgICAgY29uc3QgdHkgPSBtYXRyaXgxLnR4ICogbWF0cml4MC5iICsgbWF0cml4MS50eSAqIG1hdHJpeDAuZCArIG1hdHJpeDAudHk7XG4gICAgICAgIHJlc3VsdC5hID0gYTtcbiAgICAgICAgcmVzdWx0LmIgPSBiO1xuICAgICAgICByZXN1bHQuYyA9IGM7XG4gICAgICAgIHJlc3VsdC5kID0gZDtcbiAgICAgICAgcmVzdWx0LnR4ID0gdHg7XG4gICAgICAgIHJlc3VsdC50eSA9IHR5O1xuICAgIH1cbiAgICBNYXRyaXguY29uY2F0ID0gY29uY2F0O1xuICAgIGZ1bmN0aW9uIGdldERldGVybWluYW50KG1hdHJpeCkge1xuICAgICAgICByZXR1cm4gbWF0cml4LmEgKiBtYXRyaXguZCAtIG1hdHJpeC5iICogbWF0cml4LmM7XG4gICAgfVxuICAgIE1hdHJpeC5nZXREZXRlcm1pbmFudCA9IGdldERldGVybWluYW50O1xuICAgIGZ1bmN0aW9uIGludmVydChtYXRyaXgsIHJlc3VsdCkge1xuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudChtYXRyaXgpO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC50eCA9IC1tYXRyaXgudHg7XG4gICAgICAgICAgICByZXN1bHQudHkgPSAtbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGV0ZXJtaW5hbnQgPSAxLjAgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gbWF0cml4LmEgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gLW1hdHJpeC5iICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuYyA9IC1tYXRyaXguYyAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBtYXRyaXguZCAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gLXJlc3VsdC5hICogbWF0cml4LnR4IC0gcmVzdWx0LmMgKiBtYXRyaXgudHk7XG4gICAgICAgICAgICByZXN1bHQudHkgPSAtcmVzdWx0LmIgKiBtYXRyaXgudHggLSByZXN1bHQuZCAqIG1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBNYXRyaXguaW52ZXJ0ID0gaW52ZXJ0O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50KG1hdHJpeCwgcG9pbnQsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICByZXN1bHQueCA9IHggKiBtYXRyaXguYSArIHkgKiBtYXRyaXguYyArIG1hdHJpeC50eDtcbiAgICAgICAgcmVzdWx0LnkgPSB4ICogbWF0cml4LmIgKyB5ICogbWF0cml4LmQgKyBtYXRyaXgudHk7XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludCA9IHRyYW5zZm9ybVBvaW50O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50TG9jYWwobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJlc3VsdC54ID0geCAqIG1hdHJpeC5hICsgeSAqIG1hdHJpeC5jO1xuICAgICAgICByZXN1bHQueSA9IHggKiBtYXRyaXguYiArIHkgKiBtYXRyaXguZDtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybVBvaW50TG9jYWwgPSB0cmFuc2Zvcm1Qb2ludExvY2FsO1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUludmVyc2VQb2ludChtYXRyaXgsIHBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgbGV0IGRldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KTtcbiAgICAgICAgaWYgKGRldGVybWluYW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQueCA9IC1tYXRyaXgudHg7XG4gICAgICAgICAgICByZXN1bHQueSA9IC1tYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCA9IDEgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgICAgICByZXN1bHQueCA9IGRldGVybWluYW50ICogKG1hdHJpeC5jICogKG1hdHJpeC50eSAtIHkpICsgbWF0cml4LmQgKiAoeCAtIG1hdHJpeC50eCkpO1xuICAgICAgICAgICAgcmVzdWx0LnkgPSBkZXRlcm1pbmFudCAqIChtYXRyaXguYSAqICh5IC0gbWF0cml4LnR5KSArIG1hdHJpeC5iICogKG1hdHJpeC50eCAtIHgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50ID0gdHJhbnNmb3JtSW52ZXJzZVBvaW50O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUJvdW5kcyhtYXRyaXgsIGJvdW5kcywgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgYSwgYiwgYywgZCwgdHgsIHR5LCB9ID0gbWF0cml4O1xuICAgICAgICBjb25zdCByeCA9IGJvdW5kcy54O1xuICAgICAgICBjb25zdCByeSA9IGJvdW5kcy55O1xuICAgICAgICBjb25zdCByciA9IHJ4ICsgYm91bmRzLndpZHRoO1xuICAgICAgICBjb25zdCByYiA9IHJ5ICsgYm91bmRzLmhlaWdodDtcbiAgICAgICAgY29uc3QgbngxID0gcnggKiBhICsgcnkgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MSA9IHJ4ICogYiArIHJ5ICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDIgPSByciAqIGEgKyByeSAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkyID0gcnIgKiBiICsgcnkgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54MyA9IHJyICogYSArIHJiICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTMgPSByciAqIGIgKyByYiAqIGQgKyB0eTtcbiAgICAgICAgY29uc3Qgbng0ID0gcnggKiBhICsgcmIgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55NCA9IHJ4ICogYiArIHJiICogZCArIHR5O1xuICAgICAgICBsZXQgbGVmdCA9IG54MTtcbiAgICAgICAgaWYgKGxlZnQgPiBueDIpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQgPiBueDMpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQgPiBueDQpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvcCA9IG55MTtcbiAgICAgICAgaWYgKHRvcCA+IG55Mikge1xuICAgICAgICAgICAgdG9wID0gbnkyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3AgPiBueTMpIHtcbiAgICAgICAgICAgIHRvcCA9IG55MztcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9wID4gbnk0KSB7XG4gICAgICAgICAgICB0b3AgPSBueTQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJpZ2h0ID0gbngxO1xuICAgICAgICBpZiAocmlnaHQgPCBueDIpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbngyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCA8IG54Mykge1xuICAgICAgICAgICAgcmlnaHQgPSBueDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0IDwgbng0KSB7XG4gICAgICAgICAgICByaWdodCA9IG54NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYm90dG9tID0gbnkxO1xuICAgICAgICBpZiAoYm90dG9tIDwgbnkyKSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdHRvbSA8IG55Mykge1xuICAgICAgICAgICAgYm90dG9tID0gbnkzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3R0b20gPCBueTQpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55NDtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQueCA9IGxlZnQ7XG4gICAgICAgIHJlc3VsdC55ID0gdG9wO1xuICAgICAgICByZXN1bHQud2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBib3R0b20gLSB0b3A7XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Cb3VuZHMgPSB0cmFuc2Zvcm1Cb3VuZHM7XG59KShNYXRyaXggfHwgKE1hdHJpeCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFBvaW50O1xuKGZ1bmN0aW9uIChQb2ludCkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuICAgIFBvaW50LmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gbGVuZ3RoKHBvaW50KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfVxuICAgIFBvaW50Lmxlbmd0aCA9IGxlbmd0aDtcbiAgICBmdW5jdGlvbiBhbmdsZShwb2ludCkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihwb2ludC55LCBwb2ludC54KTtcbiAgICB9XG4gICAgUG9pbnQuYW5nbGUgPSBhbmdsZTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludC54ID09PSAwICYmIHBvaW50LnkgPT09IDA7XG4gICAgfVxuICAgIFBvaW50LmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGVxdWFscyhwb2ludDAsIHBvaW50MSkge1xuICAgICAgICByZXR1cm4gcG9pbnQwLnggPT09IHBvaW50MS54ICYmIHBvaW50MC55ID09PSBwb2ludDEueTtcbiAgICB9XG4gICAgUG9pbnQuZXF1YWxzID0gZXF1YWxzO1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KHBvaW50KSB7XG4gICAgICAgIHBvaW50LnggPSAwO1xuICAgICAgICBwb2ludC55ID0gMDtcbiAgICB9XG4gICAgUG9pbnQuc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC54ID0gc291cmNlLng7XG4gICAgICAgIHRhcmdldC55ID0gc291cmNlLnk7XG4gICAgfVxuICAgIFBvaW50LmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZShwb2ludCwgdGhpY2tuZXNzKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGxlbmd0aChwb2ludCk7XG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpY2tuZXNzIC8gdmFsdWU7XG4gICAgICAgICAgICBwb2ludC54ICo9IHZhbHVlO1xuICAgICAgICAgICAgcG9pbnQueSAqPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQb2ludC5ub3JtYWxpemUgPSBub3JtYWxpemU7XG4gICAgZnVuY3Rpb24gZGlzdGFuY2UocG9pbnQwLCBwb2ludDEpIHtcbiAgICAgICAgY29uc3QgZHggPSBwb2ludDAueCAtIHBvaW50MS54O1xuICAgICAgICBjb25zdCBkeSA9IHBvaW50MC55IC0gcG9pbnQxLnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cbiAgICBQb2ludC5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIGZ1bmN0aW9uIGludGVycG9sYXRlKGJlZ2luLCBlbmQsIHZhbHVlLCByZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0LnggPSBiZWdpbi54ICsgdmFsdWUgKiAoZW5kLnggLSBiZWdpbi54KTtcbiAgICAgICAgcmVzdWx0LnkgPSBiZWdpbi55ICsgdmFsdWUgKiAoZW5kLnkgLSBiZWdpbi55KTtcbiAgICB9XG4gICAgUG9pbnQuaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcbiAgICBmdW5jdGlvbiBwb2xhcihwb2ludCwgbGVuZ3RoLCBhbmdsZSkge1xuICAgICAgICBwb2ludC54ID0gbGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgICBwb2ludC55ID0gbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIH1cbiAgICBQb2ludC5wb2xhciA9IHBvbGFyO1xufSkoUG9pbnQgfHwgKFBvaW50ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUmVjdGFuZ2xlO1xuKGZ1bmN0aW9uIChSZWN0YW5nbGUpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFJlY3RhbmdsZS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KHJlY3RhbmdsZSkge1xuICAgICAgICByZWN0YW5nbGUueCA9IDA7XG4gICAgICAgIHJlY3RhbmdsZS55ID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLndpZHRoID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLmhlaWdodCA9IDA7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGludGVyc2VjdGlvbihzb3VyY2UsIHRhcmdldCwgcmVzdWx0KSB7XG4gICAgICAgIGxldCB7IHgsIHksIHdpZHRoLCBoZWlnaHQsIH0gPSBzb3VyY2U7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0YXJnZXQueDtcbiAgICAgICAgY29uc3QgdG9wID0gdGFyZ2V0Lnk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGFyZ2V0LnggKyB0YXJnZXQud2lkdGg7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRhcmdldC55ICsgdGFyZ2V0LmhlaWdodDtcbiAgICAgICAgaWYgKHggPCBsZWZ0KSB7XG4gICAgICAgICAgICB3aWR0aCAtPSBsZWZ0IC0geDtcbiAgICAgICAgICAgIHggPSBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh4ICsgd2lkdGggPiByaWdodCkge1xuICAgICAgICAgICAgd2lkdGggPSByaWdodCAtIHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgPCB0b3ApIHtcbiAgICAgICAgICAgIGhlaWdodCAtPSB0b3AgLSB5O1xuICAgICAgICAgICAgeSA9IHRvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSArIGhlaWdodCA+IGJvdHRvbSkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gYm90dG9tIC0geTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgICAgICB3aWR0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICAgIGhlaWdodCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnggPSB4O1xuICAgICAgICByZXN1bHQueSA9IHk7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHdpZHRoO1xuICAgICAgICByZXN1bHQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuaW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uO1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0YW5nbGUud2lkdGggPT09IDAgfHwgcmVjdGFuZ2xlLmhlaWdodCA9PT0gMDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGNvbnRhaW5zKHJlY3RhbmdsZSwgcG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZS54IDwgcG9pbnQueFxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnggKyByZWN0YW5nbGUud2lkdGggPiBwb2ludC54XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueSA8IHBvaW50LnlcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS55ICsgcmVjdGFuZ2xlLmhlaWdodCA+IHBvaW50Lnk7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5jb250YWlucyA9IGNvbnRhaW5zO1xuICAgIGZ1bmN0aW9uIHJvdW5kKHJlY3RhbmdsZSkge1xuICAgICAgICByZWN0YW5nbGUueCA9IE1hdGgucm91bmQocmVjdGFuZ2xlLngpO1xuICAgICAgICByZWN0YW5nbGUueSA9IE1hdGgucm91bmQocmVjdGFuZ2xlLnkpO1xuICAgICAgICByZWN0YW5nbGUud2lkdGggPSBNYXRoLnJvdW5kKHJlY3RhbmdsZS53aWR0aCk7XG4gICAgICAgIHJlY3RhbmdsZS5oZWlnaHQgPSBNYXRoLnJvdW5kKHJlY3RhbmdsZS5oZWlnaHQpO1xuICAgIH1cbiAgICBSZWN0YW5nbGUucm91bmQgPSByb3VuZDtcbn0pKFJlY3RhbmdsZSB8fCAoUmVjdGFuZ2xlID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBDb2xvclRyYW5zZm9ybSwgTWF0cml4LCBSZWN0YW5nbGUgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSB9IGZyb20gJy4vaW1hZ2UnO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5jb25zdCBzY3JlZW5Cb3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihpbWFnZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBpbWFnZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gcGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgaWYgKENvbG9yVHJhbnNmb3JtLmlzRW1wdHlXaXRoQWxwaGEoY29sb3JUcmFuc2Zvcm0pKSB7XG4gICAgICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUNvbnRleHQgPSBwbGF0Zm9ybS5jcmVhdGVDdXN0b21Db250ZXh0KCk7XG4gICAgICAgICAgICBib3VuZHMueCA9IHg7XG4gICAgICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIGJvdW5kcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtQm91bmRzKG1hdHJpeCwgYm91bmRzLCBib3VuZHMpO1xuICAgICAgICAgICAgaWYgKFJlY3RhbmdsZS5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzY3JlZW5Cb3VuZHMud2lkdGggPSBjdXN0b21Db250ZXh0LmNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIHNjcmVlbkJvdW5kcy5oZWlnaHQgPSBjdXN0b21Db250ZXh0LmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICBSZWN0YW5nbGUuaW50ZXJzZWN0aW9uKGJvdW5kcywgc2NyZWVuQm91bmRzLCBib3VuZHMpO1xuICAgICAgICAgICAgaWYgKFJlY3RhbmdsZS5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZWN0YW5nbGUucm91bmQoYm91bmRzKTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LmNsZWFyUmVjdChib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gY3VzdG9tQ29udGV4dC5nZXRJbWFnZURhdGEoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgY29uc3Qgcm0gPSBjb2xvclRyYW5zZm9ybS5yZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3QgZ20gPSBjb2xvclRyYW5zZm9ybS5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBibSA9IGNvbG9yVHJhbnNmb3JtLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3QgYW0gPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBybyA9IGNvbG9yVHJhbnNmb3JtLnJlZE9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGdvID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5PZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBibyA9IGNvbG9yVHJhbnNmb3JtLmJsdWVPZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBhbyA9IGNvbG9yVHJhbnNmb3JtLmFscGhhT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBpbWFnZURhdGE7XG4gICAgICAgICAgICBjb25zdCB7IGxlbmd0aCB9ID0gZGF0YTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOykge1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBybSArIHJvO1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBnbSArIGdvO1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBibSArIGJvO1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBhbSArIGFvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCBib3VuZHMueCwgYm91bmRzLnkpO1xuICAgICAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybSgpO1xuICAgICAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UoY3VzdG9tQ29udGV4dC5jYW52YXMsIGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0LCBib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBwbGF0Zm9ybS5kZXN0cm95Q3VzdG9tQ29udGV4dChjdXN0b21Db250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBJbWFnZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoSU1BR0UsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uIHx8IChDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBJbWFnZUV4dGVuc2lvbiwgSU1BR0UgfSBmcm9tICcuL2ltYWdlJztcbmV4cG9ydCB2YXIgQ2FudmFzSW1hZ2VFeHRlbnNpb247XG4oZnVuY3Rpb24gKENhbnZhc0ltYWdlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IGltYWdlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gZW5naW5lLnBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IGNvbnRleHQ7XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgfVxuICAgIENhbnZhc0ltYWdlRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBJbWFnZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoSU1BR0UsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc0ltYWdlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ2FudmFzSW1hZ2VFeHRlbnNpb24gfHwgKENhbnZhc0ltYWdlRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90LCBSZXNvdXJjZSwgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5leHBvcnQgY29uc3QgSU1BR0UgPSAnaW1hZ2UnO1xuZXhwb3J0IHZhciBJbWFnZTtcbihmdW5jdGlvbiAoSW1hZ2UpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoaW1hZ2UsIGJvdW5kcywgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBpbWFnZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgICAgICBib3VuZHMueCA9IHg7XG4gICAgICAgIGJvdW5kcy55ID0geTtcbiAgICAgICAgYm91bmRzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGJvdW5kcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIEltYWdlLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEltYWdlIHx8IChJbWFnZSA9IHt9KSk7XG5jb25zdCBib3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgSW1hZ2VFeHRlbnNpb247XG4oZnVuY3Rpb24gKEltYWdlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdChpbWFnZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgbG9jYWwgfSA9IGVuZ2luZS5wb2ludGVycztcbiAgICAgICAgSW1hZ2UuY2FsY3VsYXRlQm91bmRzKGltYWdlLCBib3VuZHMsIGVuZ2luZSk7XG4gICAgICAgIGxldCBjb250YWlucyA9IFJlY3RhbmdsZS5jb250YWlucyhib3VuZHMsIGxvY2FsKTtcbiAgICAgICAgaWYgKGNvbnRhaW5zKSB7XG4gICAgICAgICAgICBpZiAoaW1hZ2UucG9pbnRlclRlc3RTaGFwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoaW1hZ2Uuc3JjKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSBsb2NhbC54IC0gYm91bmRzLng7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBsb2NhbC55IC0gYm91bmRzLnk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNvdXJjZS5pbWFnZSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gcmVzb3VyY2UuaW1hZ2UuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGNhbnZhc0NvbnRleHQuZ2V0SW1hZ2VEYXRhKHgsIHksIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbnMgPSBpbWFnZURhdGEuZGF0YVszXSA+IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbUNvbnRleHQgPSBwbGF0Zm9ybS5jcmVhdGVDdXN0b21Db250ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21Db250ZXh0LnNldFRyYW5zZm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21Db250ZXh0LmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSwgMSwgMSwgMCwgMCwgMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBjdXN0b21Db250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gaW1hZ2VEYXRhLmRhdGFbM10gPiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm0uZGVzdHJveUN1c3RvbUNvbnRleHQoY3VzdG9tQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWlucztcbiAgICB9XG4gICAgSW1hZ2VFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5sb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IGltYWdlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gUmVzb3VyY2UuZ2V0UHJvZ3Jlc3MocmVzb3VyY2UpO1xuICAgICAgICBjb250ZXh0LmxvYWRlZCA9ICEhcmVzb3VyY2U/LmxvYWRlZCAmJiAhIXJlc291cmNlPy5pbWFnZTtcbiAgICB9XG4gICAgSW1hZ2VFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KElNQUdFLCBoaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChJTUFHRSwgbG9hZGVkKTtcbiAgICAgICAgSW1hZ2VSZXNvdXJjZS5pbml0KGVuZ2luZSk7XG4gICAgfVxuICAgIEltYWdlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoSW1hZ2VFeHRlbnNpb24gfHwgKEltYWdlRXh0ZW5zaW9uID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMtaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMtaW1hZ2UtY29sb3InO1xuIiwiZXhwb3J0IHZhciBJbWFnZVJlc291cmNlO1xuKGZ1bmN0aW9uIChJbWFnZVJlc291cmNlKSB7XG4gICAgZnVuY3Rpb24gcmVzb2x2ZShhc3NldCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGFzc2V0LnNwbGl0KCcuJykucG9wKCk7XG4gICAgICAgIHN3aXRjaCAoZXh0ZW5zaW9uKSB7XG4gICAgICAgICAgICBjYXNlICdwbmcnOlxuICAgICAgICAgICAgY2FzZSAnanBnJzpcbiAgICAgICAgICAgIGNhc2UgJ3dlYnAnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0ge1xuICAgICAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNMb2FkZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzVG90YWw6IDAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGFzc2V0O1xuICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGltYWdlIGxvYWRlZDogJHthc3NldH1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnaW1hZ2UgbG9hZCBlcnJvcicsIGUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgSW1hZ2VSZXNvdXJjZS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb2x2ZSk7XG4gICAgfVxuICAgIEltYWdlUmVzb3VyY2UuaW5pdCA9IGluaXQ7XG59KShJbWFnZVJlc291cmNlIHx8IChJbWFnZVJlc291cmNlID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJpbmcnO1xuIiwiZXhwb3J0IHZhciBTdHJpbmdSZXNvdXJjZTtcbihmdW5jdGlvbiAoU3RyaW5nUmVzb3VyY2UpIHtcbiAgICBmdW5jdGlvbiByZXNvbHZlKGFzc2V0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gYXNzZXQuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgICAgc3dpdGNoIChleHRlbnNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3R4dCc6XG4gICAgICAgICAgICBjYXNlICdqc29uJzpcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzTG9hZGVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBieXRlc1RvdGFsOiAwLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGFzc2V0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB4aHIub25wcm9ncmVzcyA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmJ5dGVzTG9hZGVkID0gZS5sb2FkZWQ7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmJ5dGVzVG90YWwgPSBlLnRvdGFsO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHN0cmluZyBsb2FkZWQ6ICR7YXNzZXR9YCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmRhdGEgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5ieXRlc0xvYWRlZCA9IHJlc291cmNlLmJ5dGVzVG90YWw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdzdHJpbmcgbG9hZCBlcnJvcicsIGUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBTdHJpbmdSZXNvdXJjZS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb2x2ZSk7XG4gICAgfVxuICAgIFN0cmluZ1Jlc291cmNlLmluaXQgPSBpbml0O1xufSkoU3RyaW5nUmVzb3VyY2UgfHwgKFN0cmluZ1Jlc291cmNlID0ge30pKTtcbiIsImltcG9ydCB7IFJlc291cmNlLCBDb250YWluZXJFeHRlbnNpb24sIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBTdHJpbmdSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5leHBvcnQgY29uc3QgU0NFTkUgPSAnc2NlbmUnO1xuZXhwb3J0IHZhciBTY2VuZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoU2NlbmVFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBsb2FkZWQoc2NlbmUsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLmxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICBpZiAoc2NlbmUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIENvbnRhaW5lckV4dGVuc2lvbi5sb2FkZWQoc2NlbmUsIGVuZ2luZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB7IHNyYyB9ID0gc2NlbmU7XG4gICAgICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gUmVzb3VyY2UuZ2V0UHJvZ3Jlc3MocmVzb3VyY2UpO1xuICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSAhIXJlc291cmNlPy5sb2FkZWQgJiYgISFyZXNvdXJjZT8uZGF0YTtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZSAmJiByZXNvdXJjZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUuY2hpbGRyZW4gPSBKU09OLnBhcnNlKHJlc291cmNlLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZyhgc2NlbmUgcGFyc2luZyBlcnJvcjogJHtlLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFNjZW5lRXh0ZW5zaW9uLmxvYWRlZCA9IGxvYWRlZDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChTQ0VORSwgQ29udGFpbmVyRXh0ZW5zaW9uLmhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KFNDRU5FLCBDb250YWluZXJFeHRlbnNpb24ucmVuZGVyKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLnNldChTQ0VORSwgQ29udGFpbmVyRXh0ZW5zaW9uLnVwZGF0ZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5zZXQoU0NFTkUsIGxvYWRlZCk7XG4gICAgICAgIFN0cmluZ1Jlc291cmNlLmluaXQoZW5naW5lKTtcbiAgICB9XG4gICAgU2NlbmVFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShTY2VuZUV4dGVuc2lvbiB8fCAoU2NlbmVFeHRlbnNpb24gPSB7fSkpO1xuIiwiY29uc3QgUElfMiA9IE1hdGguUEkgKiAyO1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5RWxsaXBzZShkYXRhLCBoYXNGaWxsLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHJhZGl1cyA9IDAsIHJhZGl1c1gsIHJhZGl1c1ksIH0gPSBkYXRhO1xuICAgIGNvbnN0IHJ4ID0gcmFkaXVzWCA/PyByYWRpdXM7XG4gICAgY29uc3QgcnkgPSByYWRpdXNZID8/IHJhZGl1cztcbiAgICBpZiAocnggPT09IDAgfHwgcnkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQuZWxsaXBzZSh4LCB5LCByeCwgcnksIDAsIDAsIFBJXzIpO1xuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q29tbWFuZChjb21tYW5kLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBjb21tYW5kO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtb3ZlVG8nOlxuICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKG1vdmVUby54ID8/IDAsIG1vdmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2xpbmVUbyc6XG4gICAgICAgICAgICBjb25zdCBsaW5lVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8obGluZVRvLnggPz8gMCwgbGluZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3VydmVUbyc6XG4gICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyhjdXJ2ZVRvLmN4ID8/IDAsIGN1cnZlVG8uY3kgPz8gMCwgY3VydmVUby54ID8/IDAsIGN1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjdWJpY0N1cnZlVG8nOlxuICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQuYmV6aWVyQ3VydmVUbyhjdWJpY0N1cnZlVG8uY3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLmN5ID8/IDAsIGN1YmljQ3VydmVUby5zeCA/PyAwLCBjdWJpY0N1cnZlVG8uc3kgPz8gMCwgY3ViaWNDdXJ2ZVRvLnggPz8gMCwgY3ViaWNDdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBhdGgoZGF0YSwgaGFzRmlsbCwgY29udGV4dCkge1xuICAgIGlmICghZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gZGF0YVtpXTtcbiAgICAgICAgYXBwbHlDb21tYW5kKGNvbW1hbmQsIGNvbnRleHQpO1xuICAgIH1cbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhcHBseVJlY3RhbmdsZShkYXRhLCBoYXNGaWxsLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHdpZHRoID0gMCwgaGVpZ2h0ID0gMCwgfSA9IGRhdGE7XG4gICAgaWYgKHdpZHRoID09PSAwIHx8IGhlaWdodCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IE1hdHJpeCwgUG9pbnQsIFJlY3RhbmdsZSwgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IFNoYXBlRXh0ZW5zaW9uLCBTSEFQRSwgU2hhcGUgfSBmcm9tICcuLi9zaGFwZSc7XG5pbXBvcnQgeyBhcHBseVJlY3RhbmdsZSB9IGZyb20gJy4vcmVjdGFuZ2xlJztcbmltcG9ydCB7IGFwcGx5RWxsaXBzZSB9IGZyb20gJy4vZWxsaXBzZSc7XG5pbXBvcnQgeyBhcHBseVBhdGggfSBmcm9tICcuL3BhdGgnO1xuaW1wb3J0IHsgYXBwbHlTdHJpbmcgfSBmcm9tICcuL3N0cmluZyc7XG5pbXBvcnQgeyBzZXRGaWxsU3R5bGUsIHNldFN0cm9rZVN0eWxlIH0gZnJvbSAnLi9zdHlsZSc7XG5jb25zdCBib3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmNvbnN0IG9mZnNldCA9IFBvaW50LmVtcHR5KCk7XG5mdW5jdGlvbiByZW5kZXJHcmFwaGljcyhkYXRhLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgY29uc3QgeyBmaWxsLCBzdHJva2UgfSA9IGRhdGE7XG4gICAgY29uc3QgaGFzRmlsbCA9ICEhZmlsbCB8fCBmaWxsID09PSAwO1xuICAgIGNvbnN0IGhhc1N0cm9rZSA9ICEhc3Ryb2tlIHx8IHN0cm9rZSA9PT0gMDtcbiAgICBpZiAoIWhhc0ZpbGwgJiYgIWhhc1N0cm9rZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBleGlzdCA9IHRydWU7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBkYXRhO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdyZWN0YW5nbGUnOlxuICAgICAgICAgICAgZXhpc3QgPSBhcHBseVJlY3RhbmdsZShkYXRhLCBoYXNGaWxsLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlbGxpcHNlJzpcbiAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlFbGxpcHNlKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BhdGgnOlxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGRhdGE7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhdGguZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IGFwcGx5U3RyaW5nKHBhdGguZGF0YSwgaGFzRmlsbCwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHBhdGguZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IGFwcGx5UGF0aChwYXRoLmRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhpc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICghZXhpc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBzZXRGaWxsU3R5bGUoZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIH1cbiAgICBpZiAoaGFzU3Ryb2tlKSB7XG4gICAgICAgIHNldFN0cm9rZVN0eWxlKHN0cm9rZSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxufVxuZXhwb3J0IHZhciBDYW52YXNTaGFwZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzU2hhcGVFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoc2hhcGUsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHNoYXBlO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgUG9pbnQuc2V0RW1wdHkob2Zmc2V0KTtcbiAgICAgICAgaWYgKFBpdm90Lmhhc1ZhbHVlcyhzaGFwZSkpIHtcbiAgICAgICAgICAgIFNoYXBlLmNhbGN1bGF0ZUJvdW5kcyhzaGFwZSwgYm91bmRzKTtcbiAgICAgICAgICAgIGlmIChSZWN0YW5nbGUuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2Zmc2V0LnggPSBQaXZvdC5nZXRYKHNoYXBlLCBib3VuZHMud2lkdGgpO1xuICAgICAgICAgICAgb2Zmc2V0LnkgPSBQaXZvdC5nZXRZKHNoYXBlLCBib3VuZHMud2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IGVuZ2luZS5wbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoUG9pbnQuaXNFbXB0eShvZmZzZXQpKSB7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnRMb2NhbChtYXRyaXgsIG9mZnNldCwgb2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHggKyBvZmZzZXQueCwgbWF0cml4LnR5ICsgb2Zmc2V0LnkpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyR3JhcGhpY3MoZGF0YVtpXSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQyZCwgZW5naW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJlbmRlckdyYXBoaWNzKGRhdGEsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0MmQsIGVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzU2hhcGVFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIFNoYXBlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChTSEFQRSwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzU2hhcGVFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNTaGFwZUV4dGVuc2lvbiB8fCAoQ2FudmFzU2hhcGVFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgR3JhcGhpY3NTdHJpbmdSZWFkZXIgfSBmcm9tICcuLi9kYXRhL3N0cmluZyc7XG5pbXBvcnQgeyBhcHBseUNvbW1hbmQgfSBmcm9tICcuL3BhdGgnO1xuY29uc3QgcmVhZGVyID0gbmV3IEdyYXBoaWNzU3RyaW5nUmVhZGVyKCk7XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlTdHJpbmcoZGF0YSwgaGFzRmlsbCwgY29udGV4dCkge1xuICAgIGlmICghZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHJlYWRlci5zZXRQYXRoKGRhdGEpO1xuICAgIHdoaWxlIChyZWFkZXIucmVhZE5leHQoKSkge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gcmVhZGVyLmdldENvbW1hbmQoKTtcbiAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGFwcGx5Q29tbWFuZChjb21tYW5kLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IENhbnZhc1BhdHRlcm5zIH0gZnJvbSAnQGplbmcvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBNYXRyaXggfSBmcm9tICdAamVuZy9nZW9tJztcbmNvbnN0IGVtcHR5QXJyYXkgPSBbXTtcbmNvbnN0IGVtcHR5TWF0cml4ID0gTWF0cml4LmVtcHR5KCk7XG5mdW5jdGlvbiBnZXRDYW52YXNQYXR0ZXJuKGZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpIHtcbiAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oZmlsbCwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHN3aXRjaCAoZmlsbC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzb2xpZCc6XG4gICAgICAgICAgICAgICAgY29uc3Qgc29saWQgPSBmaWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oc29saWQuY29sb3IgPz8gMCwgc29saWQuYWxwaGEgPz8gMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgY2FzZSAnbGluZWFyJzpcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lYXIgPSBmaWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5saW5lYXJHcmFkaWVudFBhdHRlcm4obGluZWFyLmJlZ2luWCA/PyAwLCBsaW5lYXIuYmVnaW5ZID8/IDAsIGxpbmVhci5lbmRYID8/IDAsIGxpbmVhci5lbmRZID8/IDAsIGxpbmVhci5jb2xvcnMgPz8gZW1wdHlBcnJheSwgbGluZWFyLmFscGhhcyA/PyBlbXB0eUFycmF5LCBsaW5lYXIucmF0aW9zID8/IGVtcHR5QXJyYXksIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGNhc2UgJ3JhZGlhbCc6XG4gICAgICAgICAgICAgICAgY29uc3QgcmFkaWFsID0gZmlsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMucmFkaWFsR3JhZGllbnRQYXR0ZXJuKHJhZGlhbC5iZWdpblggPz8gMCwgcmFkaWFsLmJlZ2luWSA/PyAwLCByYWRpYWwuYmVnaW5SYWRpdXMgPz8gMCwgcmFkaWFsLmVuZFggPz8gcmFkaWFsLmJlZ2luWCA/PyAwLCByYWRpYWwuZW5kWSA/PyByYWRpYWwuYmVnaW5ZID8/IDAsIHJhZGlhbC5lbmRSYWRpdXMgPz8gMCwgcmFkaWFsLmNvbG9ycyA/PyBlbXB0eUFycmF5LCByYWRpYWwuYWxwaGFzID8/IGVtcHR5QXJyYXksIHJhZGlhbC5yYXRpb3MgPz8gZW1wdHlBcnJheSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQpO1xuICAgICAgICAgICAgY2FzZSAnYml0bWFwJzpcbiAgICAgICAgICAgICAgICBjb25zdCBiaXRtYXBGaWxsID0gZmlsbDtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHJlcGVhdCA9IHRydWUsIHNyYywgbWF0cml4ID0gZW1wdHlNYXRyaXggfSA9IGJpdG1hcEZpbGw7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gQ2FudmFzUGF0dGVybnMuYml0bWFwUGF0dGVybihyZXNvdXJjZS5pbWFnZSwgcmVwZWF0LCBtYXRyaXgsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbGxTdHlsZShmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBnZXRDYW52YXNQYXR0ZXJuKGZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0cm9rZVN0eWxlKHN0cm9rZSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGlmICh0eXBlb2Ygc3Ryb2tlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKHN0cm9rZSwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGNvbnRleHQubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgICAgIGNvbnRleHQubGluZUpvaW4gPSAncm91bmQnO1xuICAgICAgICBjb250ZXh0Lm1pdGVyTGltaXQgPSAxMDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHN0cm9rZSA9PT0gJ29iamVjdCcgJiYgc3Ryb2tlLmZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gZ2V0Q2FudmFzUGF0dGVybihzdHJva2UuZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gc3Ryb2tlLnRoaWNrbmVzcyA/PyAxO1xuICAgICAgICBjb250ZXh0LmxpbmVDYXAgPSBzdHJva2UuY2FwcyA/PyAncm91bmQnO1xuICAgICAgICBjb250ZXh0LmxpbmVKb2luID0gc3Ryb2tlLmpvaW50cyA/PyAncm91bmQnO1xuICAgICAgICBjb250ZXh0Lm1pdGVyTGltaXQgPSBzdHJva2UubWl0ZXJMaW1pdCA/PyAxMDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IFBhdGhDb21tYW5kIH0gZnJvbSAnLi9wYXRoJztcbmltcG9ydCB7IEdyYXBoaWNzU3RyaW5nIH0gZnJvbSAnLi9zdHJpbmcnO1xuZXhwb3J0IHZhciBSZWN0YW5nbGVEYXRhO1xuKGZ1bmN0aW9uIChSZWN0YW5nbGVEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgd2lkdGggPSAwLCBoZWlnaHQgPSAwLCB9ID0gZGF0YTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4LCB5KTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQpO1xuICAgIH1cbiAgICBSZWN0YW5nbGVEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFJlY3RhbmdsZURhdGEgfHwgKFJlY3RhbmdsZURhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBFbGxpcHNlRGF0YTtcbihmdW5jdGlvbiAoRWxsaXBzZURhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCByYWRpdXMgPSAwLCByYWRpdXNYLCByYWRpdXNZLCB9ID0gZGF0YTtcbiAgICAgICAgY29uc3QgcnggPSByYWRpdXNYID8/IHJhZGl1cztcbiAgICAgICAgY29uc3QgcnkgPSByYWRpdXNZID8/IHJhZGl1cztcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4IC0gcngsIHkgLSByeSk7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCArIHJ4LCB5ICsgcnkpO1xuICAgIH1cbiAgICBFbGxpcHNlRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShFbGxpcHNlRGF0YSB8fCAoRWxsaXBzZURhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBQYXRoRGF0YTtcbihmdW5jdGlvbiAoUGF0aERhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aERhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHBhdGhEYXRhO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tYW5kID0gZGF0YVtpXTtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBQYXRoRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShQYXRoRGF0YSB8fCAoUGF0aERhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBHcmFwaGljc0RhdGE7XG4oZnVuY3Rpb24gKEdyYXBoaWNzRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBkYXRhO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICAgICAgUmVjdGFuZ2xlRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgICAgICAgICAgIEVsbGlwc2VEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGF0aCc6XG4gICAgICAgICAgICAgICAgUGF0aERhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc0RhdGEgfHwgKEdyYXBoaWNzRGF0YSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdAamVuZy9nZW9tJztcbmV4cG9ydCB2YXIgUGF0aENvbW1hbmQ7XG4oZnVuY3Rpb24gKFBhdGhDb21tYW5kKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKHBhdGgsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IHBhdGg7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbW92ZVRvJzpcbiAgICAgICAgICAgIGNhc2UgJ2xpbmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIG1vdmVUby54ID8/IDAsIG1vdmVUby55ID8/IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3VydmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdXJ2ZVRvLmN4ID8/IDAsIGN1cnZlVG8uY3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdXJ2ZVRvLnggPz8gMCwgY3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3ViaWNDdXJ2ZVRvJzpcbiAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLmN4ID8/IDAsIGN1YmljQ3VydmVUby5jeSA/PyAwKTtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby5zeCA/PyAwLCBjdWJpY0N1cnZlVG8uc3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8ueCA/PyAwLCBjdWJpY0N1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUGF0aENvbW1hbmQuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoUGF0aENvbW1hbmQgfHwgKFBhdGhDb21tYW5kID0ge30pKTtcbiIsImltcG9ydCB7IFBhdGhDb21tYW5kLCB9IGZyb20gJy4vcGF0aCc7XG5jb25zdCBOVU1CRVJTX0NPVU5UID0ge1xuICAgIE06IDIsXG4gICAgbTogMixcbiAgICBMOiAyLFxuICAgIGw6IDIsXG4gICAgSDogMSxcbiAgICBoOiAxLFxuICAgIFY6IDEsXG4gICAgdjogMSxcbiAgICBDOiA2LFxuICAgIGM6IDYsXG4gICAgUzogNCxcbiAgICBzOiA0LFxuICAgIFE6IDQsXG4gICAgcTogNCxcbiAgICBUOiAyLFxuICAgIHQ6IDIsXG59O1xuY29uc3QgQ09NTUFORF9SRUdFWCA9IC9bTW1MbEhoVnZDY1NzUXFUdF0vO1xuY29uc3QgTlVNQkVSX1JFR0VYID0gL1stK10/W1xcZC5dKy87XG5leHBvcnQgY2xhc3MgR3JhcGhpY3NTdHJpbmdTdHJlYW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBhdGggPSAnJztcbiAgICAgICAgdGhpcy5jb21tYW5kID0gbnVsbDtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIHRoaXMuc3ltYm9sUmVnZXggPSAvW01tTGxIaFZ2Q2NTc1FxVHRdfFstK10/W1xcZC5dKy9nO1xuICAgIH1cbiAgICBzZXRQYXRoKHBhdGgpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5zeW1ib2xSZWdleC5sYXN0SW5kZXggPSAwO1xuICAgIH1cbiAgICBnZXRDb21tYW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kO1xuICAgIH1cbiAgICBnZXRCdWZmZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlcjtcbiAgICB9XG4gICAgcmVhZE5leHQoKSB7XG4gICAgICAgIGNvbnN0IHsgbGFzdEluZGV4IH0gPSB0aGlzLnN5bWJvbFJlZ2V4O1xuICAgICAgICBjb25zdCBzeW1ib2xNYXRjaCA9IHRoaXMuc3ltYm9sUmVnZXguZXhlYyh0aGlzLnBhdGgpO1xuICAgICAgICBpZiAoIXN5bWJvbE1hdGNoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbE1hdGNoWzBdO1xuICAgICAgICBpZiAoQ09NTUFORF9SRUdFWC50ZXN0KHN5bWJvbCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZCA9IHN5bWJvbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChOVU1CRVJfUkVHRVgudGVzdChzeW1ib2wpKSB7XG4gICAgICAgICAgICB0aGlzLnN5bWJvbFJlZ2V4Lmxhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmNvbW1hbmQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb3VudCA9IE5VTUJFUlNfQ09VTlRbdGhpcy5jb21tYW5kXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJNYXRjaCA9IHRoaXMuc3ltYm9sUmVnZXguZXhlYyh0aGlzLnBhdGgpO1xuICAgICAgICAgICAgaWYgKG51bWJlck1hdGNoICYmIE5VTUJFUl9SRUdFWC50ZXN0KG51bWJlck1hdGNoWzBdKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyW2ldID0gcGFyc2VGbG9hdChudW1iZXJNYXRjaFswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBHcmFwaGljc1N0cmluZ1JlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtID0gbmV3IEdyYXBoaWNzU3RyaW5nU3RyZWFtKCk7XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IHsgdHlwZTogJ21vdmVUbycgfTtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFggPSAwO1xuICAgICAgICB0aGlzLmxhc3RZID0gMDtcbiAgICAgICAgdGhpcy5sYXN0Q1ggPSAwO1xuICAgICAgICB0aGlzLmxhc3RDWSA9IDA7XG4gICAgfVxuICAgIHNldFBhdGgocGF0aCkge1xuICAgICAgICB0aGlzLnN0cmVhbS5zZXRQYXRoKHBhdGgpO1xuICAgICAgICB0aGlzLmxhc3RYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0WSA9IDA7XG4gICAgICAgIHRoaXMubGFzdENYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0Q1kgPSAwO1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSBmYWxzZTtcbiAgICB9XG4gICAgZ2V0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZEV4aXN0cyA/IHRoaXMuY29tbWFuZCA6IG51bGw7XG4gICAgfVxuICAgIHJlYWROZXh0KCkge1xuICAgICAgICB0aGlzLnN0cmVhbS5yZWFkTmV4dCgpO1xuICAgICAgICB0aGlzLnBhcnNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRFeGlzdHM7XG4gICAgfVxuICAgIHBhcnNlKCkge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gdGhpcy5zdHJlYW0uZ2V0Q29tbWFuZCgpO1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSAhIWNvbW1hbmQ7XG4gICAgICAgIGlmICghdGhpcy5jb21tYW5kRXhpc3RzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy5zdHJlYW0uZ2V0QnVmZmVyKCk7XG4gICAgICAgIGNvbnN0IFtlMCwgZTEsIGUyLCBlMywgZTQsIGU1LF0gPSBidWZmZXI7XG4gICAgICAgIHN3aXRjaCAoY29tbWFuZCkge1xuICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdtb3ZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby55ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBtb3ZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IG1vdmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbW92ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnkgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBtb3ZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IG1vdmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBsaW5lVG8ueDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdWJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IGUwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndic6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMCArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMjtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0gZTM7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMiArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IGUzICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSBlNCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTUgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSB0aGlzLmxhc3RDWDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0gdGhpcy5sYXN0Q1k7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSBlMjtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnkgPSBlMztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IHRoaXMubGFzdENZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSBlMiArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTMgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSBlMjtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0gZTM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSBlMiArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUzICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdXJ2ZVRvLnggLSAoY3VydmVUby5jeCAtIGN1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3VydmVUby55IC0gKGN1cnZlVG8uY3kgLSBjdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSB0aGlzLmxhc3RDWDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IHRoaXMubGFzdENZO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuY29uc3QgcmVhZGVyID0gbmV3IEdyYXBoaWNzU3RyaW5nUmVhZGVyKCk7XG5leHBvcnQgdmFyIEdyYXBoaWNzU3RyaW5nO1xuKGZ1bmN0aW9uIChHcmFwaGljc1N0cmluZykge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoLCBib3VuZHMpIHtcbiAgICAgICAgcmVhZGVyLnNldFBhdGgocGF0aCk7XG4gICAgICAgIHdoaWxlIChyZWFkZXIucmVhZE5leHQoKSkge1xuICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IHJlYWRlci5nZXRDb21tYW5kKCk7XG4gICAgICAgICAgICBpZiAoY29tbWFuZCkge1xuICAgICAgICAgICAgICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyhjb21tYW5kLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIEdyYXBoaWNzU3RyaW5nLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEdyYXBoaWNzU3RyaW5nIHx8IChHcmFwaGljc1N0cmluZyA9IHt9KSk7XG4iLCJpbXBvcnQgeyBNYXRyaXgsIFBvaW50IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5jb25zdCB0ZW1wUG9pbnQwID0gUG9pbnQuZW1wdHkoKTtcbmNvbnN0IHRlbXBQb2ludDEgPSBQb2ludC5lbXB0eSgpO1xuY29uc3QgZW1wdHlNYXRyaXggPSBNYXRyaXguZW1wdHkoKTtcbmV4cG9ydCBjbGFzcyBHcmFwaGljcyB7XG4gICAgY29uc3RydWN0b3Ioc2hhcGUpIHtcbiAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlO1xuICAgIH1cbiAgICBiZWdpbkZpbGwoY29sb3IgPSAwLCBhbHBoYSA9IDEpIHtcbiAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBiZWdpbkJpdG1hcEZpbGwoc3JjLCBtYXRyaXgsIHJlcGVhdCA9IHRydWUsIHNtb290aCA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdiaXRtYXAnLFxuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgcmVwZWF0LFxuICAgICAgICAgICAgc21vb3RoLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYmVnaW5HcmFkaWVudEZpbGwodHlwZSwgY29sb3IsIGFscGhhLCByYXRpbywgbWF0cml4KSB7XG4gICAgICAgIGlmICh0eXBlID09PSAnbGluZWFyJykge1xuICAgICAgICAgICAgdGVtcFBvaW50MC54ID0gLTgxOS4yO1xuICAgICAgICAgICAgdGVtcFBvaW50MC55ID0gMDtcbiAgICAgICAgICAgIHRlbXBQb2ludDEueCA9IDgxOS4yO1xuICAgICAgICAgICAgdGVtcFBvaW50MS55ID0gMDtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHRlbXBQb2ludDAsIHRlbXBQb2ludDApO1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgdGVtcFBvaW50MSwgdGVtcFBvaW50MSk7XG4gICAgICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgICAgICBiZWdpblg6IHRlbXBQb2ludDAueCxcbiAgICAgICAgICAgICAgICBiZWdpblk6IHRlbXBQb2ludDAueSxcbiAgICAgICAgICAgICAgICBlbmRYOiB0ZW1wUG9pbnQxLngsXG4gICAgICAgICAgICAgICAgZW5kWTogdGVtcFBvaW50MS55LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueCA9IDE2MzguNDtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueSA9IDA7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCB0ZW1wUG9pbnQwLCB0ZW1wUG9pbnQwKTtcbiAgICAgICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgICAgICAgIGJlZ2luWDogdGVtcFBvaW50MC54LFxuICAgICAgICAgICAgICAgIGJlZ2luWTogdGVtcFBvaW50MC55LFxuICAgICAgICAgICAgICAgIGJlZ2luUmFkaXVzOiAwLFxuICAgICAgICAgICAgICAgIGVuZFg6IHRlbXBQb2ludDAueCxcbiAgICAgICAgICAgICAgICBlbmRZOiB0ZW1wUG9pbnQwLnksXG4gICAgICAgICAgICAgICAgZW5kUmFkaXVzOiBNYXRoLmFicygodGVtcFBvaW50MC54IC0gbWF0cml4LnR4KSAvIDIpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbGluZVN0eWxlKHRoaWNrbmVzcyA9IDAsIGNvbG9yID0gMCwgYWxwaGEgPSAxLCBwaXhlbEhpbnRpbmcgPSBmYWxzZSwgc2NhbGVNb2RlID0gJ25vbmUnLCBjYXBzID0gJ3JvdW5kJywgam9pbnRzID0gJ3JvdW5kJywgbWl0ZXJMaW1pdCA9IDMpIHtcbiAgICAgICAgdGhpcy5zdHJva2UgPSB7XG4gICAgICAgICAgICB0aGlja25lc3MsXG4gICAgICAgICAgICBwaXhlbEhpbnRpbmcsXG4gICAgICAgICAgICBzY2FsZU1vZGUsXG4gICAgICAgICAgICBjYXBzLFxuICAgICAgICAgICAgam9pbnRzLFxuICAgICAgICAgICAgbWl0ZXJMaW1pdCxcbiAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc29saWQnLFxuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGxpbmVHcmFkaWVudFN0eWxlKHR5cGUsIGNvbG9yLCBhbHBoYSwgcmF0aW8sIG1hdHJpeCA9IGVtcHR5TWF0cml4KSB7XG4gICAgICAgIGlmICghdGhpcy5zdHJva2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnbGluZWFyJykge1xuICAgICAgICAgICAgdGVtcFBvaW50MC54ID0gLTgxOS4yO1xuICAgICAgICAgICAgdGVtcFBvaW50MC55ID0gMDtcbiAgICAgICAgICAgIHRlbXBQb2ludDEueCA9IDgxOS4yO1xuICAgICAgICAgICAgdGVtcFBvaW50MS55ID0gMDtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHRlbXBQb2ludDAsIHRlbXBQb2ludDApO1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgdGVtcFBvaW50MSwgdGVtcFBvaW50MSk7XG4gICAgICAgICAgICB0aGlzLnN0cm9rZS5maWxsID0ge1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICAgICAgYmVnaW5YOiB0ZW1wUG9pbnQwLngsXG4gICAgICAgICAgICAgICAgYmVnaW5ZOiB0ZW1wUG9pbnQwLnksXG4gICAgICAgICAgICAgICAgZW5kWDogdGVtcFBvaW50MS54LFxuICAgICAgICAgICAgICAgIGVuZFk6IHRlbXBQb2ludDEueSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnggPSAxNjM4LjQ7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnkgPSAwO1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgdGVtcFBvaW50MCwgdGVtcFBvaW50MCk7XG4gICAgICAgICAgICB0aGlzLnN0cm9rZS5maWxsID0ge1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICAgICAgYmVnaW5YOiB0ZW1wUG9pbnQwLngsXG4gICAgICAgICAgICAgICAgYmVnaW5ZOiB0ZW1wUG9pbnQwLnksXG4gICAgICAgICAgICAgICAgYmVnaW5SYWRpdXM6IDAsXG4gICAgICAgICAgICAgICAgZW5kWDogdGVtcFBvaW50MC54LFxuICAgICAgICAgICAgICAgIGVuZFk6IHRlbXBQb2ludDAueSxcbiAgICAgICAgICAgICAgICBlbmRSYWRpdXM6IE1hdGguYWJzKCh0ZW1wUG9pbnQwLnggLSBtYXRyaXgudHgpIC8gMiksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBsaW5lQml0bWFwU3R5bGUoc3JjLCBtYXRyaXgsIHJlcGVhdCA9IHRydWUsIHNtb290aCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy5zdHJva2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Ryb2tlLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAnYml0bWFwJyxcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHJlcGVhdCxcbiAgICAgICAgICAgIHNtb290aCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG1vdmVUbyh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICBwYXRoLnB1c2goeyB0eXBlOiAnbW92ZVRvJywgeCwgeSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGxpbmVUbyh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goeyB0eXBlOiAnbGluZVRvJywgeCwgeSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGN1cnZlVG8oY3gsIGN5LCB4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1cnZlVG8nLCBjeCwgY3ksIHgsIHksXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY3ViaWNDdXJ2ZVRvKGN4LCBjeSwgc3gsIHN5LCB4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsIGN4LCBjeSwgc3gsIHN5LCB4LCB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRyYXdSb3VuZFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgZWxsaXBzZVdpZHRoID0gMCwgZWxsaXBzZUhlaWdodCA9IDApIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnN0IHcgPSBlbGxpcHNlV2lkdGg7XG4gICAgICAgIGNvbnN0IGggPSBlbGxpcHNlSGVpZ2h0O1xuICAgICAgICBjb25zdCBrID0gMC41NTIyODQ4O1xuICAgICAgICBjb25zdCBveCA9ICh3IC8gMikgKiBrO1xuICAgICAgICBjb25zdCBveSA9IChoIC8gMikgKiBrO1xuICAgICAgICBjb25zdCB4ZSA9IHggKyB3O1xuICAgICAgICBjb25zdCB5ZSA9IHkgKyBoO1xuICAgICAgICBjb25zdCB4bSA9IHggKyB3IC8gMjtcbiAgICAgICAgY29uc3QgeW0gPSB5ICsgaCAvIDI7XG4gICAgICAgIGNvbnN0IGR4ID0gd2lkdGggLSB3O1xuICAgICAgICBjb25zdCBkeSA9IGhlaWdodCAtIGg7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbW92ZVRvJyxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5OiB5bSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4LFxuICAgICAgICAgICAgY3k6IHltIC0gb3ksXG4gICAgICAgICAgICBzeDogeG0gLSBveCxcbiAgICAgICAgICAgIHN5OiB5LFxuICAgICAgICAgICAgeDogeG0sXG4gICAgICAgICAgICB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeG0gKyBkeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeG0gKyBveCArIGR4LFxuICAgICAgICAgICAgY3k6IHksXG4gICAgICAgICAgICBzeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHN5OiB5bSAtIG95LFxuICAgICAgICAgICAgeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHk6IHltLFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHk6IHltICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeGUgKyBkeCxcbiAgICAgICAgICAgIGN5OiB5bSArIG95ICsgZHksXG4gICAgICAgICAgICBzeDogeG0gKyBveCArIGR4LFxuICAgICAgICAgICAgc3k6IHllICsgZHksXG4gICAgICAgICAgICB4OiB4bSArIGR4LFxuICAgICAgICAgICAgeTogeWUgKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhtLFxuICAgICAgICAgICAgeTogeWUgKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4bSAtIG94LFxuICAgICAgICAgICAgY3k6IHllICsgZHksXG4gICAgICAgICAgICBzeDogeCxcbiAgICAgICAgICAgIHN5OiB5bSArIG95ICsgZHksXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeTogeW0gKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkcmF3UmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ3JlY3RhbmdsZSc7XG4gICAgICAgIGRhdGEueCA9IHg7XG4gICAgICAgIGRhdGEueSA9IHk7XG4gICAgICAgIGRhdGEud2lkdGggPSB3aWR0aDtcbiAgICAgICAgZGF0YS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkcmF3Q2lyY2xlKHgsIHksIHJhZGl1cykge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEudHlwZSA9ICdlbGxpcHNlJztcbiAgICAgICAgZGF0YS54ID0geDtcbiAgICAgICAgZGF0YS55ID0geTtcbiAgICAgICAgZGF0YS5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkcmF3RWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ2VsbGlwc2UnO1xuICAgICAgICBkYXRhLnJhZGl1c1ggPSB3aWR0aCAvIDI7XG4gICAgICAgIGRhdGEucmFkaXVzWSA9IGhlaWdodCAvIDI7XG4gICAgICAgIGRhdGEueCA9IHggLSBkYXRhLnJhZGl1c1g7XG4gICAgICAgIGRhdGEueSA9IHkgLSBkYXRhLnJhZGl1c1k7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2hhcGUuZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNyZWF0ZURhdGEoKSB7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUsIGZpbGwsIHN0cm9rZSB9ID0gdGhpcztcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2hhcGUuZGF0YSkpIHtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc2hhcGUuZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHNoYXBlLmRhdGEgPSBbc2hhcGUuZGF0YV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaGFwZS5kYXRhID0gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ3JhcGhpY3NEYXRhID0geyB0eXBlOiAncGF0aCcsIGZpbGwsIHN0cm9rZSB9O1xuICAgICAgICBzaGFwZS5kYXRhLnB1c2goZ3JhcGhpY3NEYXRhKTtcbiAgICAgICAgcmV0dXJuIGdyYXBoaWNzRGF0YTtcbiAgICB9XG4gICAgYmVnaW5QYXRoKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEuZGF0YSA9IFtdO1xuICAgICAgICByZXR1cm4gZGF0YS5kYXRhO1xuICAgIH1cbiAgICBnZXRQYXRoKCkge1xuICAgICAgICBjb25zdCB7IHNoYXBlIH0gPSB0aGlzO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2hhcGUuZGF0YSkgfHwgIXNoYXBlLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBzaGFwZS5kYXRhW3NoYXBlLmRhdGEubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLmRhdGEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhLmRhdGE7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9kYXRhL2RhdGEnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL3BhdGgnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL3N0cmluZyc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvc3R5bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFwZSc7XG5leHBvcnQgKiBmcm9tICcuL2dyYXBoaWNzJztcbmV4cG9ydCAqIGZyb20gJy4vY2FudmFzL3NoYXBlJztcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBCb3VuZHMsIFJlY3RhbmdsZSB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBHcmFwaGljc0RhdGEgfSBmcm9tICcuL2RhdGEvZGF0YSc7XG5leHBvcnQgY29uc3QgU0hBUEUgPSAnc2hhcGUnO1xuY29uc3QgYm91bmRzID0gQm91bmRzLmVtcHR5KCk7XG5leHBvcnQgdmFyIFNoYXBlO1xuKGZ1bmN0aW9uIChTaGFwZSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhzaGFwZSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gc2hhcGU7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQm91bmRzLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBHcmFwaGljc0RhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGFbaV0sIGJvdW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBHcmFwaGljc0RhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQm91bmRzLmlzRW1wdHkoYm91bmRzKSkge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgd2lkdGggPSBib3VuZHMubWF4WCAtIGJvdW5kcy5taW5YO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBib3VuZHMubWF4WSAtIGJvdW5kcy5taW5ZO1xuICAgICAgICBjb25zdCB4ID0gYm91bmRzLm1pblggKyBQaXZvdC5nZXRYKHNoYXBlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBib3VuZHMubWluWSArIFBpdm90LmdldFkoc2hhcGUsIGhlaWdodCk7XG4gICAgICAgIHJlc3VsdC54ID0geDtcbiAgICAgICAgcmVzdWx0LnkgPSB5O1xuICAgICAgICByZXN1bHQud2lkdGggPSB3aWR0aDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoU2hhcGUgfHwgKFNoYXBlID0ge30pKTtcbmNvbnN0IHJlY3RhbmdsZSA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBTaGFwZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoU2hhcGVFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KHNoYXBlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBsb2NhbCB9ID0gZW5naW5lLnBvaW50ZXJzO1xuICAgICAgICBTaGFwZS5jYWxjdWxhdGVCb3VuZHMoc2hhcGUsIHJlY3RhbmdsZSk7XG4gICAgICAgIHJldHVybiBSZWN0YW5nbGUuY29udGFpbnMocmVjdGFuZ2xlLCBsb2NhbCk7XG4gICAgfVxuICAgIFNoYXBlRXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KFNIQVBFLCBoaXRUZXN0KTtcbiAgICAgICAgSW1hZ2VSZXNvdXJjZS5pbml0KGVuZ2luZSk7XG4gICAgfVxuICAgIFNoYXBlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoU2hhcGVFeHRlbnNpb24gfHwgKFNoYXBlRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBDYW52YXNQYXR0ZXJucyB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgRm9udCB9IGZyb20gJy4uL2RhdGEvZm9udCc7XG5pbXBvcnQgeyBUZXh0RXh0ZW5zaW9uLCBURVhULCBUZXh0IH0gZnJvbSAnLi4vdGV4dCc7XG5pbXBvcnQgeyBUZXh0Rm9ybWF0IH0gZnJvbSAnLi4vZGF0YS9mb3JtYXQnO1xuaW1wb3J0IHsgVGV4dE1ldHJpY3MgfSBmcm9tICcuLi9kYXRhL21ldHJpY3MnO1xuY29uc3QgZGVmYXVsdFRleHRGb3JtYXQgPSB7fTtcbmNvbnN0IENPUlJFQ1RJT04gPSAwLjg1O1xuZXhwb3J0IHZhciBDYW52YXNUZXh0RXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNUZXh0RXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKGNvbXBvbmVudCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4LCBjb2xvclRyYW5zZm9ybSB9ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFRleHQuaXNVcGRhdGVNZXRyaWNzKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIFRleHQudXBkYXRlTWV0cmljcyhjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbWV0cmljcyB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIW1ldHJpY3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGZvcm1hdCwgYm9yZGVyLCBiYWNrZ3JvdW5kLCB9ID0gY29tcG9uZW50O1xuICAgICAgICBUZXh0Rm9ybWF0LmNvbWJpbmUoZm9ybWF0LCBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LCBkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGNvbnN0IHJlYWxXaWR0aCA9IHdpZHRoID8/IG1ldHJpY3Mud2lkdGg7XG4gICAgICAgIGNvbnN0IHJlYWxIZWlnaHQgPSBoZWlnaHQgPz8gbWV0cmljcy5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IG9mZnNldFggPSBQaXZvdC5nZXRYKGNvbXBvbmVudCwgcmVhbFdpZHRoKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IFBpdm90LmdldFkoY29tcG9uZW50LCByZWFsSGVpZ2h0KTtcbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gZW5naW5lLnBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICBpZiAoYmFja2dyb3VuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnJztcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oYmFja2dyb3VuZCwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgY29udGV4dDJkLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLnJlY3Qob2Zmc2V0WCwgb2Zmc2V0WSwgcmVhbFdpZHRoLCByZWFsSGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oYm9yZGVyLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gJyc7XG4gICAgICAgICAgICBjb250ZXh0MmQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQucmVjdChvZmZzZXRYLCBvZmZzZXRZLCByZWFsV2lkdGgsIHJlYWxIZWlnaHQpO1xuICAgICAgICAgICAgY29udGV4dDJkLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQyZC50ZXh0QmFzZWxpbmUgPSAnYWxwaGFiZXRpYyc7XG4gICAgICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICcnO1xuICAgICAgICBjb25zdCBzaW1wbGUgPSBUZXh0LmlzU2ltcGxlKGNvbXBvbmVudCk7XG4gICAgICAgIGlmIChzaW1wbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBjb21wb25lbnQudGV4dDtcbiAgICAgICAgICAgIGNvbnN0IHsgc2l6ZSwgY29sb3IsIGFscGhhLCBsZWFkaW5nLCBsZXR0ZXJTcGFjaW5nLCB9ID0gZGVmYXVsdFRleHRGb3JtYXQ7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0Rm9udCA9IEZvbnQuZ2V0Rm9udChkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2xTaXplID0gc2l6ZSAqIENPUlJFQ1RJT047XG4gICAgICAgICAgICBjb25zdCBhbGlnblZhbHVlID0gVGV4dEZvcm1hdC5nZXRBbGlnblZhbHVlKGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5mb250ID0gRm9udC5nZXRTdHlsZShkZWZhdWx0Rm9udCwgc2l6ZSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGNvbG9yLCBhbHBoYSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgbGV0IHggPSBvZmZzZXRYICsgYWxpZ25WYWx1ZSA/IGFsaWduVmFsdWUgKiAocmVhbFdpZHRoIC0gVGV4dE1ldHJpY3MuZ2V0U2ltcGxlV2lkdGgoZGVmYXVsdFRleHRGb3JtYXQsIHRleHQsIDApKSA6IDA7XG4gICAgICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgICAgIGlmIChzeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSBhbGlnblZhbHVlID8gYWxpZ25WYWx1ZSAqIChyZWFsV2lkdGggLSBUZXh0TWV0cmljcy5nZXRTaW1wbGVXaWR0aChkZWZhdWx0VGV4dEZvcm1hdCwgdGV4dCwgaSArIDEpKSA6IDA7XG4gICAgICAgICAgICAgICAgICAgIHkgKz0gc2l6ZSArIGxlYWRpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gdGV4dFtpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2UoZGVmYXVsdEZvbnQsIHNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBsZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0MmQuZmlsbFRleHQoc3ltYm9sLCB4LCB5ICsgc3ltYm9sU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIHggKz0gYWR2YW5jZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgICAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxpZ25WZXJ0aWNhbFZhbHVlID0gVGV4dEZvcm1hdC5nZXRWZXJ0aWNhbEFsaWduVmFsdWUoZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICAgICAgICAgIHkgPSAoaGVpZ2h0IC0gbWV0cmljcy5oZWlnaHQpICogYWxpZ25WZXJ0aWNhbFZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh5IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5ICs9IG9mZnNldFk7XG4gICAgICAgICAgICBjb25zdCB7IGxpbmVzIH0gPSBtZXRyaWNzO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAobGluZS5zeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdCA9IGxpbmUuc3ltYm9sc1swXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxpZ25WYWx1ZSA9IFRleHRGb3JtYXQuZ2V0QWxpZ25WYWx1ZShmaXJzdC5mb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IChyZWFsV2lkdGggLSBsaW5lLndpZHRoKSAqIGFsaWduVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeCArPSBvZmZzZXRYO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHN5bWJvbHMgfSA9IGxpbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVIZWlnaHQgPSBsaW5lLmhlaWdodCAqIENPUlJFQ1RJT047XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3ltYm9scy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSBzeW1ib2wuZm9ybWF0LnNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbGlnblN5bWJvbFZhbHVlID0gVGV4dEZvcm1hdC5nZXRWZXJ0aWNhbEFsaWduVmFsdWUoc3ltYm9sLmZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xTaXplID0gc2l6ZSAqIENPUlJFQ1RJT047XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb250ID0gRm9udC5nZXRGb250KHN5bWJvbC5mb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDJkLmZvbnQgPSBGb250LmdldFN0eWxlKHN5bWJvbEZvbnQsIHNpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihzeW1ib2wuZm9ybWF0LmNvbG9yLCBzeW1ib2wuZm9ybWF0LmFscGhhLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0MmQuZmlsbFRleHQoc3ltYm9sLnN5bWJvbCwgeCwgeSArIHN5bWJvbFNpemUgKyBhbGlnblN5bWJvbFZhbHVlICogKGxpbmVIZWlnaHQgLSBzeW1ib2xTaXplKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ICs9IHN5bWJvbC5hZHZhbmNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHkgKz0gbGluZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzVGV4dEV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgVGV4dEV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoVEVYVCwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzVGV4dEV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc1RleHRFeHRlbnNpb24gfHwgKENhbnZhc1RleHRFeHRlbnNpb24gPSB7fSkpO1xuIiwiY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5leHBvcnQgY29uc3QgRU0gPSAxMDI0O1xuY29uc3QgZm9udHMgPSBuZXcgTWFwKCk7XG5leHBvcnQgdmFyIEZvbnQ7XG4oZnVuY3Rpb24gKEZvbnQpIHtcbiAgICBmdW5jdGlvbiBnZXRTdHlsZShmb250LCBzaXplKSB7XG4gICAgICAgIHJldHVybiBmb250Lm5hbWUucmVwbGFjZSgnJScsIHNpemUudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIEZvbnQuZ2V0U3R5bGUgPSBnZXRTdHlsZTtcbiAgICBmdW5jdGlvbiBtZWFzdXJlVGV4dChmb250LCBzaXplLCB0ZXh0KSB7XG4gICAgICAgIGNvbnRleHQuZm9udCA9IGdldFN0eWxlKGZvbnQsIHNpemUpO1xuICAgICAgICByZXR1cm4gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcbiAgICB9XG4gICAgRm9udC5tZWFzdXJlVGV4dCA9IG1lYXN1cmVUZXh0O1xuICAgIGZ1bmN0aW9uIGdldENoYXJXaWR0aChmb250LCBjaGFyKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IGZvbnQud2lkdGhzLmdldChjaGFyKTtcbiAgICAgICAgaWYgKCF3aWR0aCkge1xuICAgICAgICAgICAgd2lkdGggPSBtZWFzdXJlVGV4dChmb250LCBFTSwgY2hhcik7XG4gICAgICAgICAgICBmb250LndpZHRocy5zZXQoY2hhciwgd2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gICAgRm9udC5nZXRDaGFyV2lkdGggPSBnZXRDaGFyV2lkdGg7XG4gICAgZnVuY3Rpb24gZ2V0S2VybmluZyhmb250LCBmaXJzdCwgc2Vjb25kKSB7XG4gICAgICAgIGNvbnN0IHBhaXIgPSBmaXJzdCArIHNlY29uZDtcbiAgICAgICAgbGV0IGtlcm5pbmcgPSBmb250Lmtlcm5pbmdzLmdldChwYWlyKTtcbiAgICAgICAgaWYgKCFrZXJuaW5nKSB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aFNlY29uZCA9IGdldENoYXJXaWR0aChmb250LCBzZWNvbmQpO1xuICAgICAgICAgICAgY29uc3Qgd2lkdGhUb3RhbCA9IG1lYXN1cmVUZXh0KGZvbnQsIEVNLCBmaXJzdCArIHNlY29uZCk7XG4gICAgICAgICAgICBrZXJuaW5nID0gd2lkdGhUb3RhbCAtIHdpZHRoU2Vjb25kO1xuICAgICAgICAgICAgZm9udC5rZXJuaW5ncy5zZXQocGFpciwga2VybmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtlcm5pbmc7XG4gICAgfVxuICAgIEZvbnQuZ2V0S2VybmluZyA9IGdldEtlcm5pbmc7XG4gICAgZnVuY3Rpb24gZ2V0QWR2YW5jZShmb250LCBzaXplLCBmaXJzdCwgc2Vjb25kKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gc2l6ZSAvIEVNO1xuICAgICAgICBjb25zdCB3aWR0aCA9IGdldENoYXJXaWR0aChmb250LCBmaXJzdCk7XG4gICAgICAgIGlmICghc2Vjb25kKSB7XG4gICAgICAgICAgICByZXR1cm4gd2lkdGggKiBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXJuaW5nID0gZ2V0S2VybmluZyhmb250LCBmaXJzdCwgc2Vjb25kKTtcbiAgICAgICAgcmV0dXJuIGtlcm5pbmcgKiBzY2FsZTtcbiAgICB9XG4gICAgRm9udC5nZXRBZHZhbmNlID0gZ2V0QWR2YW5jZTtcbiAgICBmdW5jdGlvbiBnZXRGb250KGZvcm1hdCkge1xuICAgICAgICBsZXQgbmFtZSA9ICcnO1xuICAgICAgICBpZiAoZm9ybWF0LmJvbGQpIHtcbiAgICAgICAgICAgIG5hbWUgKz0gJ2JvbGQgJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0Lml0YWxpYykge1xuICAgICAgICAgICAgbmFtZSArPSAnaXRhbGljICc7XG4gICAgICAgIH1cbiAgICAgICAgbmFtZSArPSBgJXB4ICR7Zm9ybWF0LmZvbnR9YDtcbiAgICAgICAgbGV0IGZvbnQgPSBmb250cy5nZXQobmFtZSk7XG4gICAgICAgIGlmICghZm9udCkge1xuICAgICAgICAgICAgZm9udCA9IHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHdpZHRoczogbmV3IE1hcCgpLFxuICAgICAgICAgICAgICAgIGtlcm5pbmdzOiBuZXcgTWFwKCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9udHMuc2V0KG5hbWUsIGZvbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb250O1xuICAgIH1cbiAgICBGb250LmdldEZvbnQgPSBnZXRGb250O1xufSkoRm9udCB8fCAoRm9udCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFRleHRGb3JtYXQ7XG4oZnVuY3Rpb24gKFRleHRGb3JtYXQpIHtcbiAgICBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0ID0ge1xuICAgICAgICBmb250OiAnYXJpYWwnLFxuICAgICAgICBzaXplOiAxNSxcbiAgICAgICAgY29sb3I6IDAsXG4gICAgICAgIGFscGhhOiAxLFxuICAgICAgICBib2xkOiBmYWxzZSxcbiAgICAgICAgaXRhbGljOiBmYWxzZSxcbiAgICAgICAgdW5kZXJsaW5lOiBmYWxzZSxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogMCxcbiAgICAgICAgbGVhZGluZzogMCxcbiAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgfTtcbiAgICBmdW5jdGlvbiBjb21iaW5lKHNvdXJjZSwgZGVmYXVsdEZvcm1hdCwgcmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdC5mb250ID0gc291cmNlPy5mb250ID8/IGRlZmF1bHRGb3JtYXQuZm9udDtcbiAgICAgICAgcmVzdWx0LnNpemUgPSBzb3VyY2U/LnNpemUgPz8gZGVmYXVsdEZvcm1hdC5zaXplO1xuICAgICAgICByZXN1bHQuY29sb3IgPSBzb3VyY2U/LmNvbG9yID8/IGRlZmF1bHRGb3JtYXQuY29sb3I7XG4gICAgICAgIHJlc3VsdC5hbHBoYSA9IHNvdXJjZT8uYWxwaGEgPz8gZGVmYXVsdEZvcm1hdC5hbHBoYTtcbiAgICAgICAgcmVzdWx0LmJvbGQgPSBzb3VyY2U/LmJvbGQgPz8gZGVmYXVsdEZvcm1hdC5ib2xkO1xuICAgICAgICByZXN1bHQuaXRhbGljID0gc291cmNlPy5pdGFsaWMgPz8gZGVmYXVsdEZvcm1hdC5pdGFsaWM7XG4gICAgICAgIHJlc3VsdC51bmRlcmxpbmUgPSBzb3VyY2U/LnVuZGVybGluZSA/PyBkZWZhdWx0Rm9ybWF0LnVuZGVybGluZTtcbiAgICAgICAgcmVzdWx0LmxldHRlclNwYWNpbmcgPSBzb3VyY2U/LmxldHRlclNwYWNpbmcgPz8gZGVmYXVsdEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICByZXN1bHQubGVhZGluZyA9IHNvdXJjZT8ubGVhZGluZyA/PyBkZWZhdWx0Rm9ybWF0LmxlYWRpbmc7XG4gICAgICAgIHJlc3VsdC5hbGlnbiA9IHNvdXJjZT8uYWxpZ24gPz8gZGVmYXVsdEZvcm1hdC5hbGlnbjtcbiAgICAgICAgcmVzdWx0LnZlcnRpY2FsQWxpZ24gPSBzb3VyY2U/LnZlcnRpY2FsQWxpZ24gPz8gZGVmYXVsdEZvcm1hdC52ZXJ0aWNhbEFsaWduO1xuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmNvbWJpbmUgPSBjb21iaW5lO1xuICAgIGZ1bmN0aW9uIGNvcHkoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LmZvbnQgPSBzb3VyY2UuZm9udDtcbiAgICAgICAgdGFyZ2V0LnNpemUgPSBzb3VyY2Uuc2l6ZTtcbiAgICAgICAgdGFyZ2V0LmNvbG9yID0gc291cmNlLmNvbG9yO1xuICAgICAgICB0YXJnZXQuYWxwaGEgPSBzb3VyY2UuYWxwaGE7XG4gICAgICAgIHRhcmdldC5ib2xkID0gc291cmNlLmJvbGQ7XG4gICAgICAgIHRhcmdldC5pdGFsaWMgPSBzb3VyY2UuaXRhbGljO1xuICAgICAgICB0YXJnZXQudW5kZXJsaW5lID0gc291cmNlLnVuZGVybGluZTtcbiAgICAgICAgdGFyZ2V0LmxldHRlclNwYWNpbmcgPSBzb3VyY2UubGV0dGVyU3BhY2luZztcbiAgICAgICAgdGFyZ2V0LmxlYWRpbmcgPSBzb3VyY2UubGVhZGluZztcbiAgICAgICAgdGFyZ2V0LmFsaWduID0gc291cmNlLmFsaWduO1xuICAgICAgICB0YXJnZXQudmVydGljYWxBbGlnbiA9IHNvdXJjZS52ZXJ0aWNhbEFsaWduO1xuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIGdldEFsaWduVmFsdWUoZm9ybWF0KSB7XG4gICAgICAgIHN3aXRjaCAoZm9ybWF0Py5hbGlnbikge1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6IHJldHVybiAwO1xuICAgICAgICAgICAgY2FzZSAnY2VudGVyJzogcmV0dXJuIDAuNTtcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzogcmV0dXJuIDE7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmdldEFsaWduVmFsdWUgPSBnZXRBbGlnblZhbHVlO1xuICAgIGZ1bmN0aW9uIGdldFZlcnRpY2FsQWxpZ25WYWx1ZShmb3JtYXQpIHtcbiAgICAgICAgc3dpdGNoIChmb3JtYXQ/LnZlcnRpY2FsQWxpZ24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6IHJldHVybiAwO1xuICAgICAgICAgICAgY2FzZSAnbWlkZGxlJzogcmV0dXJuIDAuNTtcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6IHJldHVybiAxO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dEZvcm1hdC5nZXRWZXJ0aWNhbEFsaWduVmFsdWUgPSBnZXRWZXJ0aWNhbEFsaWduVmFsdWU7XG59KShUZXh0Rm9ybWF0IHx8IChUZXh0Rm9ybWF0ID0ge30pKTtcbiIsImltcG9ydCB7IEZvbnQgfSBmcm9tICcuL2ZvbnQnO1xuaW1wb3J0IHsgVGV4dEZvcm1hdCB9IGZyb20gJy4vZm9ybWF0JztcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi90ZXh0JztcbmNvbnN0IGRlZmF1bHRUZXh0Rm9ybWF0ID0ge307XG5leHBvcnQgdmFyIFRleHRMaW5lO1xuKGZ1bmN0aW9uIChUZXh0TGluZSkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN5bWJvbHM6IFtdLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFRleHRMaW5lLmNyZWF0ZSA9IGNyZWF0ZTtcbiAgICBmdW5jdGlvbiBlbXB0eShsaW5lKSB7XG4gICAgICAgIGxpbmUuc3ltYm9scy5sZW5ndGggPSAwO1xuICAgICAgICBsaW5lLndpZHRoID0gMDtcbiAgICAgICAgbGluZS5oZWlnaHQgPSAwO1xuICAgIH1cbiAgICBUZXh0TGluZS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGFkZChsaW5lLCBzeW1ib2wpIHtcbiAgICAgICAgbGluZS5zeW1ib2xzLnB1c2goc3ltYm9sKTtcbiAgICAgICAgbGluZS53aWR0aCArPSBzeW1ib2wuYWR2YW5jZTtcbiAgICAgICAgbGluZS5oZWlnaHQgPSBNYXRoLm1heChsaW5lLmhlaWdodCwgc3ltYm9sLmZvcm1hdC5zaXplICsgc3ltYm9sLmZvcm1hdC5sZWFkaW5nKTtcbiAgICB9XG4gICAgVGV4dExpbmUuYWRkID0gYWRkO1xuICAgIGZ1bmN0aW9uIGNvbmNhdCh0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlLnN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0YXJnZXQuc3ltYm9scy5wdXNoKC4uLnNvdXJjZS5zeW1ib2xzKTtcbiAgICAgICAgICAgIHRhcmdldC53aWR0aCArPSBzb3VyY2Uud2lkdGg7XG4gICAgICAgICAgICB0YXJnZXQuaGVpZ2h0ID0gTWF0aC5tYXgodGFyZ2V0LmhlaWdodCwgc291cmNlLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dExpbmUuY29uY2F0ID0gY29uY2F0O1xuICAgIGZ1bmN0aW9uIGNvcnJlY3RXaWR0aChsaW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3ltYm9scyB9ID0gbGluZTtcbiAgICAgICAgaWYgKHN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0ID0gc3ltYm9sc1tzeW1ib2xzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKC9cXHMvLnRlc3QobGFzdC5zeW1ib2wpKSB7XG4gICAgICAgICAgICAgICAgc3ltYm9scy5wb3AoKTtcbiAgICAgICAgICAgICAgICBsaW5lLndpZHRoIC09IGxhc3QuYWR2YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0TGluZS5jb3JyZWN0V2lkdGggPSBjb3JyZWN0V2lkdGg7XG4gICAgZnVuY3Rpb24gY29ycmVjdEhlaWdodChsaW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3ltYm9scyB9ID0gbGluZTtcbiAgICAgICAgaWYgKHN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzWzBdO1xuICAgICAgICAgICAgbGluZS5oZWlnaHQgLT0gc3ltYm9sLmZvcm1hdC5sZWFkaW5nO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRMaW5lLmNvcnJlY3RIZWlnaHQgPSBjb3JyZWN0SGVpZ2h0O1xufSkoVGV4dExpbmUgfHwgKFRleHRMaW5lID0ge30pKTtcbmV4cG9ydCB2YXIgVGV4dE1ldHJpY3M7XG4oZnVuY3Rpb24gKFRleHRNZXRyaWNzKSB7XG4gICAgZnVuY3Rpb24gZ2V0U3ltYm9scyhjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghdGV4dCB8fCAhdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgVGV4dEZvcm1hdC5jb21iaW5lKGNvbXBvbmVudC5mb3JtYXQsIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQsIGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgY29uc3Qgc3ltYm9scyA9IFtdO1xuICAgICAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2xGb3JtYXQgPSB7fTtcbiAgICAgICAgICAgIFRleHRGb3JtYXQuY29weShkZWZhdWx0VGV4dEZvcm1hdCwgc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvbnQgPSBGb250LmdldEZvbnQoc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHRleHRbaV07XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IHRleHRbaSArIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2Uoc3ltYm9sRm9udCwgc3ltYm9sRm9ybWF0LnNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBzeW1ib2xGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICBzeW1ib2xzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgIGFkdmFuY2UsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogc3ltYm9sRm9ybWF0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGV4dCkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJsb2NrID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb3JtYXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgVGV4dEZvcm1hdC5jb3B5KGRlZmF1bHRUZXh0Rm9ybWF0LCBzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb250ID0gRm9udC5nZXRGb250KHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYmxvY2subGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IGJsb2NrW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IGJsb2NrW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2Uoc3ltYm9sRm9udCwgc3ltYm9sRm9ybWF0LnNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBzeW1ib2xGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBzeW1ib2xGb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9ybWF0ID0ge307XG4gICAgICAgICAgICAgICAgICAgIFRleHRGb3JtYXQuY29tYmluZShibG9jaywgZGVmYXVsdFRleHRGb3JtYXQsIHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvbnQgPSBGb250LmdldEZvbnQoc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBibG9jay50ZXh0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBibG9jay50ZXh0W2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IGJsb2NrLnRleHRbaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShzeW1ib2xGb250LCBzeW1ib2xGb3JtYXQuc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIHN5bWJvbEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9scy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHN5bWJvbEZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzeW1ib2xzO1xuICAgIH1cbiAgICBUZXh0TWV0cmljcy5nZXRTeW1ib2xzID0gZ2V0U3ltYm9scztcbiAgICBmdW5jdGlvbiBnZXRMaW5lcyhjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3Qgc3ltYm9scyA9IGdldFN5bWJvbHMoY29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFzeW1ib2xzIHx8ICFzeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCB3b3JkV3JhcCA9IGZhbHNlIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IG11bHRpbGluZSA9IFRleHQuaXNNdWx0aWxpbmUoY29tcG9uZW50KTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXTtcbiAgICAgICAgbGV0IGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgaWYgKG11bHRpbGluZSkge1xuICAgICAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdvcmRXcmFwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdvcmQgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbC5zeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuY29uY2F0KGxpbmUsIHdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmVtcHR5KHdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKHdvcmQsIHN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmUud2lkdGggKyB3b3JkLndpZHRoID4gd2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgvXFxzLy50ZXN0KHN5bWJvbC5zeW1ib2wpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmNvbmNhdChsaW5lLCB3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuZW1wdHkod29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmNvbmNhdChsaW5lLCB3b3JkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2wuc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobGluZS53aWR0aCArIHN5bWJvbC5hZHZhbmNlID4gd2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQobGluZSwgc3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZChsaW5lLCBzeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2wuc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZChsaW5lLCBzeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tpXTtcbiAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQobGluZSwgc3ltYm9sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobGluZS5zeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGluZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgICAgIFRleHRMaW5lLmNvcnJlY3RXaWR0aChsaW5lKTtcbiAgICAgICAgICAgICAgICBpZiAoIWxpbmUuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuaGVpZ2h0ID0gZGVmYXVsdFRleHRGb3JtYXQuc2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW5lID0gbGluZXNbbGluZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBUZXh0TGluZS5jb3JyZWN0SGVpZ2h0KGxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lcztcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0TGluZXMgPSBnZXRMaW5lcztcbiAgICBmdW5jdGlvbiBnZXRNZXRyaWNzKGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBsaW5lcyA9IGdldExpbmVzKGNvbXBvbmVudCk7XG4gICAgICAgIGlmICghbGluZXMgfHwgIWxpbmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXRyaWNzID0ge1xuICAgICAgICAgICAgbGluZXMsXG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgbWV0cmljcy53aWR0aCA9IE1hdGgubWF4KG1ldHJpY3Mud2lkdGgsIGxpbmUud2lkdGgpO1xuICAgICAgICAgICAgbWV0cmljcy5oZWlnaHQgKz0gbGluZS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldHJpY3M7XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldE1ldHJpY3MgPSBnZXRNZXRyaWNzO1xuICAgIGZ1bmN0aW9uIGdldFNpbXBsZU1ldHJpY3MoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAodHlwZW9mIHRleHQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIFRleHRGb3JtYXQuY29tYmluZShjb21wb25lbnQuZm9ybWF0LCBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LCBkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGNvbnN0IHsgc2l6ZSwgbGV0dGVyU3BhY2luZywgbGVhZGluZyB9ID0gZGVmYXVsdFRleHRGb3JtYXQ7XG4gICAgICAgIGNvbnN0IGZvbnQgPSBGb250LmdldEZvbnQoZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gc2l6ZTtcbiAgICAgICAgbGV0IGxpbmVXaWR0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gdGV4dFtpXTtcbiAgICAgICAgICAgIGlmIChzeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ICs9IHNpemUgKyBsZWFkaW5nO1xuICAgICAgICAgICAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGxpbmVXaWR0aCk7XG4gICAgICAgICAgICAgICAgbGluZVdpZHRoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSB0ZXh0W2kgKyAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKGZvbnQsIHNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBsZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgIGxpbmVXaWR0aCArPSBhZHZhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGxpbmVXaWR0aCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0U2ltcGxlTWV0cmljcyA9IGdldFNpbXBsZU1ldHJpY3M7XG4gICAgZnVuY3Rpb24gZ2V0U2ltcGxlV2lkdGgoZm9ybWF0LCB0ZXh0LCBpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPj0gdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIFRleHRGb3JtYXQuY29tYmluZShmb3JtYXQsIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQsIGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgY29uc3QgeyBzaXplLCBsZXR0ZXJTcGFjaW5nIH0gPSBkZWZhdWx0VGV4dEZvcm1hdDtcbiAgICAgICAgY29uc3QgZm9udCA9IEZvbnQuZ2V0Rm9udChkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHRleHRbaV07XG4gICAgICAgICAgICBpZiAoc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSB0ZXh0W2kgKyAxXTtcbiAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2UoZm9udCwgc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIGxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICB3aWR0aCArPSBhZHZhbmNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0U2ltcGxlV2lkdGggPSBnZXRTaW1wbGVXaWR0aDtcbn0pKFRleHRNZXRyaWNzIHx8IChUZXh0TWV0cmljcyA9IHt9KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL3RleHQnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL2Zvcm1hdCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvZm9udCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvbWV0cmljcyc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy90ZXh0JztcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IFRleHRNZXRyaWNzIH0gZnJvbSAnLi9kYXRhL21ldHJpY3MnO1xuZXhwb3J0IGNvbnN0IFRFWFQgPSAndGV4dCc7XG5leHBvcnQgdmFyIFRleHQ7XG4oZnVuY3Rpb24gKFRleHQpIHtcbiAgICBmdW5jdGlvbiBnZXRUZXh0KGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCB7IHRleHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGV4dCkpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJsb2NrID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gYmxvY2sudGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgVGV4dC5nZXRUZXh0ID0gZ2V0VGV4dDtcbiAgICBmdW5jdGlvbiBpc1VwZGF0ZU1ldHJpY3MoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQudXBkYXRlTWV0cmljcyA/PyB0cnVlO1xuICAgIH1cbiAgICBUZXh0LmlzVXBkYXRlTWV0cmljcyA9IGlzVXBkYXRlTWV0cmljcztcbiAgICBmdW5jdGlvbiBpc0F1dG9TaXplKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gIWNvbXBvbmVudC53aWR0aCAmJiAhY29tcG9uZW50LmhlaWdodDtcbiAgICB9XG4gICAgVGV4dC5pc0F1dG9TaXplID0gaXNBdXRvU2l6ZTtcbiAgICBmdW5jdGlvbiBpc1NpbXBsZShjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjb21wb25lbnQudGV4dCA9PT0gJ3N0cmluZycgJiYgaXNBdXRvU2l6ZShjb21wb25lbnQpO1xuICAgIH1cbiAgICBUZXh0LmlzU2ltcGxlID0gaXNTaW1wbGU7XG4gICAgZnVuY3Rpb24gaXNNdWx0aWxpbmUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQubXVsdGlsaW5lID8/IHRydWU7XG4gICAgfVxuICAgIFRleHQuaXNNdWx0aWxpbmUgPSBpc011bHRpbGluZTtcbiAgICBmdW5jdGlvbiB1cGRhdGVNZXRyaWNzKGNvbXBvbmVudCkge1xuICAgICAgICBpZiAoaXNTaW1wbGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgY29tcG9uZW50Lm1ldHJpY3MgPSBUZXh0TWV0cmljcy5nZXRTaW1wbGVNZXRyaWNzKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb21wb25lbnQubWV0cmljcyA9IFRleHRNZXRyaWNzLmdldE1ldHJpY3MoY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0LnVwZGF0ZU1ldHJpY3MgPSB1cGRhdGVNZXRyaWNzO1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhjb21wb25lbnQsIGJvdW5kcykge1xuICAgICAgICBpZiAoaXNVcGRhdGVNZXRyaWNzKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHVwZGF0ZU1ldHJpY3MoY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG1ldHJpY3MgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCFtZXRyaWNzKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghd2lkdGgpIHtcbiAgICAgICAgICAgIHdpZHRoID0gbWV0cmljcy53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhlaWdodCkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gbWV0cmljcy5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoY29tcG9uZW50LCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGNvbXBvbmVudCwgaGVpZ2h0KTtcbiAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgIGJvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBUZXh0LmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFRleHQgfHwgKFRleHQgPSB7fSkpO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIFRleHRFeHRlbnNpb247XG4oZnVuY3Rpb24gKFRleHRFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KHRleHQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGxvY2FsIH0gPSBlbmdpbmUucG9pbnRlcnM7XG4gICAgICAgIFRleHQuY2FsY3VsYXRlQm91bmRzKHRleHQsIGJvdW5kcyk7XG4gICAgICAgIHJldHVybiBSZWN0YW5nbGUuY29udGFpbnMoYm91bmRzLCBsb2NhbCk7XG4gICAgfVxuICAgIFRleHRFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoVEVYVCwgaGl0VGVzdCk7XG4gICAgfVxuICAgIFRleHRFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShUZXh0RXh0ZW5zaW9uIHx8IChUZXh0RXh0ZW5zaW9uID0ge30pKTtcbiIsImV4cG9ydCBjb25zdCBMSU5FQVIgPSAnbGluZWFyJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUMgPSAncXVhZHJhdGljJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUNfSU4gPSAncXVhZHJhdGljaW4nO1xuZXhwb3J0IGNvbnN0IFFVQURSQVRJQ19PVVQgPSAncXVhZHJhdGljb3V0JztcbmV4cG9ydCBjb25zdCBDVUJJQyA9ICdjdWJpYyc7XG5leHBvcnQgY29uc3QgQ1VCSUNfSU4gPSAnY3ViaWNpbic7XG5leHBvcnQgY29uc3QgQ1VCSUNfT1VUID0gJ2N1Ymljb3V0JztcbmV4cG9ydCBjb25zdCBRVUFSVElDID0gJ3F1YXJ0aWMnO1xuZXhwb3J0IGNvbnN0IFFVQVJUSUNfSU4gPSAncXVhcnRpY2luJztcbmV4cG9ydCBjb25zdCBRVUFSVElDX09VVCA9ICdxdWFydGljb3V0JztcbmV4cG9ydCBjb25zdCBRVUlOVElDID0gJ3F1aW50aWMnO1xuZXhwb3J0IGNvbnN0IFFVSU5USUNfSU4gPSAncXVpbnRpY2luJztcbmV4cG9ydCBjb25zdCBRVUlOVElDX09VVCA9ICdxdWludGljb3V0JztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMID0gJ3F1aW50aWMnO1xuZXhwb3J0IGNvbnN0IFNJTlVTT0lEQUxfSU4gPSAncXVpbnRpY2luJztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMX09VVCA9ICdxdWludGljb3V0JztcbmV4cG9ydCBjb25zdCBFWFBPTkVOVElBTCA9ICdleHBvbmVudGlhbCc7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUxfSU4gPSAnZXhwb25lbnRpYWxpbic7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUxfT1VUID0gJ2V4cG9uZW50aWFsb3V0JztcbmV4cG9ydCBjb25zdCBDSVJDVUxBUiA9ICdjaXJjdWxhcic7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVJfSU4gPSAnY2lyY3VsYXJpbic7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVJfT1VUID0gJ2NpcmN1bGFyb3V0JztcbmV4cG9ydCBjb25zdCBFTEFTVElDID0gJ2VsYXN0aWMnO1xuZXhwb3J0IGNvbnN0IEVMQVNUSUNfSU4gPSAnZWxhc3RpY2luJztcbmV4cG9ydCBjb25zdCBFTEFTVElDX09VVCA9ICdlbGFzdGljb3V0JztcbmV4cG9ydCBjb25zdCBCQUNLID0gJ2JhY2snO1xuZXhwb3J0IGNvbnN0IEJBQ0tfSU4gPSAnYmFja2luJztcbmV4cG9ydCBjb25zdCBCQUNLX09VVCA9ICdiYWNrb3V0JztcbmV4cG9ydCBjb25zdCBCT1VOQ0UgPSAnYm91bmNlJztcbmV4cG9ydCBjb25zdCBCT1VOQ0VfSU4gPSAnYm91bmNlaW4nO1xuZXhwb3J0IGNvbnN0IEJPVU5DRV9PVVQgPSAnYm91bmNlb3V0JztcbmV4cG9ydCBjb25zdCBlYXNpbmcgPSB7XG4gICAgW0xJTkVBUl06ICh2YWx1ZSkgPT4gdmFsdWUsXG4gICAgW1FVQURSQVRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoLS12YWx1ZSAqICh2YWx1ZSAtIDIpIC0gMSk7XG4gICAgfSxcbiAgICBbUVVBRFJBVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVQURSQVRJQ19PVVRdOiAodmFsdWUpID0+ICh2YWx1ZSAqICgyIC0gdmFsdWUpKSxcbiAgICBbQ1VCSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqIHZhbHVlICsgMik7XG4gICAgfSxcbiAgICBbQ1VCSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtDVUJJQ19PVVRdOiAodmFsdWUpID0+ICgtLXZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDEpLFxuICAgIFtRVUFSVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlIC0gMik7XG4gICAgfSxcbiAgICBbUVVBUlRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVBUlRJQ19PVVRdOiAodmFsdWUpID0+ICgxIC0gLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVSU5USUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAyKTtcbiAgICB9LFxuICAgIFtRVUlOVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVSU5USUNfT1VUXTogKHZhbHVlKSA9PiAoLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMSksXG4gICAgW1NJTlVTT0lEQUxdOiAodmFsdWUpID0+ICgwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiB2YWx1ZSkpKSxcbiAgICBbU0lOVVNPSURBTF9JTl06ICh2YWx1ZSkgPT4gKDEgLSBNYXRoLmNvcygodmFsdWUgKiBNYXRoLlBJKSAvIDIpKSxcbiAgICBbU0lOVVNPSURBTF9PVVRdOiAodmFsdWUpID0+IChNYXRoLnNpbigodmFsdWUgKiBNYXRoLlBJKSAvIDIpKSxcbiAgICBbRVhQT05FTlRJQUxdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogTWF0aC5wb3coMTAyNCwgdmFsdWUgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKC1NYXRoLnBvdygyLCAtMTAgKiAodmFsdWUgLSAxKSkgKyAyKTtcbiAgICB9LFxuICAgIFtFWFBPTkVOVElBTF9JTl06ICh2YWx1ZSkgPT4gKHZhbHVlID09PSAwID8gMCA6IE1hdGgucG93KDEwMjQsIHZhbHVlIC0gMSkpLFxuICAgIFtFWFBPTkVOVElBTF9PVVRdOiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coMiwgLTEwICogdmFsdWUpKSxcbiAgICBbQ0lSQ1VMQVJdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHZhbHVlIC09IDIpICogdmFsdWUpICsgMSk7XG4gICAgfSxcbiAgICBbQ0lSQ1VMQVJfSU5dOiAodmFsdWUpID0+ICgxIC0gTWF0aC5zcXJ0KDEgLSB2YWx1ZSAqIHZhbHVlKSksXG4gICAgW0NJUkNVTEFSX09VVF06ICh2YWx1ZSkgPT4gTWF0aC5zcXJ0KDEgLSAtLXZhbHVlICogdmFsdWUpLFxuICAgIFtFTEFTVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSAqPSAyO1xuICAgICAgICBpZiAodmFsdWUgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gLTAuNSAqIE1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogTWF0aC5wb3coMiwgLTEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG4gICAgfSxcbiAgICBbRUxBU1RJQ19JTl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC1NYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG4gICAgfSxcbiAgICBbRUxBU1RJQ19PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLnBvdygyLCAtMTAgKiB2YWx1ZSkgKiBNYXRoLnNpbigodmFsdWUgLSAwLjEpICogNSAqIE1hdGguUEkpICsgMTtcbiAgICB9LFxuICAgIFtCQUNLXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4ICogMS41MjU7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogKHZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlIC0gcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlICsgcykgKyAyKTtcbiAgICB9LFxuICAgIFtCQUNLX0lOXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gdmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgLSBzKTtcbiAgICB9LFxuICAgIFtCQUNLX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICAgICAgcmV0dXJuIC0tdmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgKyBzKSArIDE7XG4gICAgfSxcbiAgICBbQk9VTkNFXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDAuNSkge1xuICAgICAgICAgICAgcmV0dXJuIGVhc2luZ1tCT1VOQ0VfSU5dKHZhbHVlICogMikgKiAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVhc2luZ1tCT1VOQ0VfT1VUXSh2YWx1ZSAqIDIgLSAxKSAqIDAuNSArIDAuNTtcbiAgICB9LFxuICAgIFtCT1VOQ0VfSU5dOiAodmFsdWUpID0+ICgxIC0gZWFzaW5nW0JPVU5DRV9PVVRdKDEgLSB2YWx1ZSkpLFxuICAgIFtCT1VOQ0VfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDEgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPCAyIC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAxLjUgLyAyLjc1KSAqIHZhbHVlICsgMC43NTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPCAyLjUgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDIuMjUgLyAyLjc1KSAqIHZhbHVlICsgMC45Mzc1O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMi42MjUgLyAyLjc1KSAqIHZhbHVlICsgMC45ODQzNzU7XG4gICAgfSxcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3R3ZWVuJztcbmV4cG9ydCAqIGZyb20gJy4vZWFzaW5nJztcbiIsImltcG9ydCB7IGVhc2luZywgTElORUFSIH0gZnJvbSAnLi9lYXNpbmcnO1xuZXhwb3J0IGNvbnN0IFRXRUVOID0gJ3R3ZWVuJztcbmV4cG9ydCB2YXIgVHdlZW5FeHRlbnNpb247XG4oZnVuY3Rpb24gKFR3ZWVuRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbXBvbmVudCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgdHdlZW4gfSA9IGNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgeyBwaGFzZXMgfSA9IHR3ZWVuO1xuICAgICAgICBpZiAoIXBoYXNlcz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnQW5pbWF0aW9uIHBhcnRzIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0d2Vlbi50aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHR3ZWVuLnRpbWUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHR3ZWVuLnRpbWUgKz0gZW5naW5lLnVwZGF0ZXIudGltZTtcbiAgICAgICAgY29uc3QgeyB0aW1lIH0gPSB0d2VlbjtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIHBoYXNlcy5mb3JFYWNoKChwaGFzZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFwaGFzZS50aW1lKSB7XG4gICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ0FuaW1hdGlvbiB0aW1lIG5vdCBzZXQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGhhc2Uub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBwaGFzZS5vZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlYXNpbmdOYW1lID0gcGhhc2U/LmVhc2luZz8udG9Mb3dlckNhc2UoKSA/PyBMSU5FQVI7XG4gICAgICAgICAgICBjb25zdCBlYXNpbmdNZXRob2QgPSBlYXNpbmdbZWFzaW5nTmFtZV07XG4gICAgICAgICAgICBpZiAoIWVhc2luZ01ldGhvZCkge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBVbmtub3duIGVhc2luZyB0eXBlOiAke2Vhc2luZ31gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICh0aW1lIC0gb2Zmc2V0KSAvIHBoYXNlLnRpbWU7XG4gICAgICAgICAgICBvZmZzZXQgKz0gcGhhc2UudGltZTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IDAgfHwgdmFsdWUgPiAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZWFzaW5nVmFsdWUgPSBlYXNpbmdNZXRob2QodmFsdWUpO1xuICAgICAgICAgICAgaWYgKCFwaGFzZS50bykge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdBbmltYXRpb24gXCJ0b1wiIHN0YXRlIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcGhhc2UuZnJvbSkge1xuICAgICAgICAgICAgICAgIHBoYXNlLmZyb20gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdG8sIGZyb20gfSA9IHBoYXNlO1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBjb21wb25lbnQ7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0bykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZyb21ba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21ba2V5XSA9IHN0YXRlW2tleV0gPz8gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZnJvbVZhbHVlID0gZnJvbVtrZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvVmFsdWUgPSB0b1trZXldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZnJvbVZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdG9WYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVWYWx1ZSA9IGZyb21WYWx1ZSArIGVhc2luZ1ZhbHVlICogKHRvVmFsdWUgLSBmcm9tVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gc3RhdGVWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0d2Vlbi5sb29wICYmIHR3ZWVuLnRpbWUgPiBvZmZzZXQpIHtcbiAgICAgICAgICAgIHR3ZWVuLnRpbWUgPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFR3ZWVuRXh0ZW5zaW9uLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5wcm9wZXJ0aWVzLnNldChUV0VFTiwgdXBkYXRlKTtcbiAgICB9XG4gICAgVHdlZW5FeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShUd2VlbkV4dGVuc2lvbiB8fCAoVHdlZW5FeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgQUJJTElUWV9XT0xGIH0gZnJvbSAnLi9hc3NldHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN1cnNpdmUoKSB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHR4OiAzMCxcblx0XHRcdHk6IDMwLFxuXHRcdFx0c2NhbGVYOiAwLjksXG5cdFx0XHRzY2FsZVk6IDAuOSxcblx0XHRcdHJvdGF0aW9uOiAwLjIsXG5cdFx0XHRhbHBoYTogMC45LFxuXHRcdFx0Y2hpbGRyZW46IFt7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQUJJTElUWV9XT0xGLFxuXHRcdFx0XHRzY2FsZTogMC4zLFxuXHRcdFx0fV0sXG5cdFx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdFx0dGhpcy5yb3RhdGlvbiArPSB0aW1lICogMC4wNTtcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblxuXHRjb250YWluZXIuY2hpbGRyZW4uY2hpbGRyZW4ucHVzaChjb250YWluZXIgYXMgbmV2ZXIpO1xuXG5cdHJldHVybiBjb250YWluZXI7XG59XG4iLCJjb25zdCBBU1NFVFMgPSAnYXNzZXRzLyc7XG5cbmV4cG9ydCBjb25zdCBBTklNQUxJU1QgPSAnaWQ6YW5pbWFsaXN0JztcbmV4cG9ydCBjb25zdCBBUkNIRVIgPSAnaWQ6YXJjaGVyJztcblxuZXhwb3J0IGNvbnN0IEFOSU1BTElTVF9JTUFHRSA9IGAke0FTU0VUU31BbmltYWxpc3RGb3gxX2ltYWdlLnBuZ2A7XG5leHBvcnQgY29uc3QgQVJDSEVSX0lNQUdFID0gYCR7QVNTRVRTfUFyY2hlcjJfaHVudGVyX2ltYWdlLnBuZ2A7XG5cbmV4cG9ydCBjb25zdCBBQklMSVRZX0ZPWCA9IGAke0FTU0VUU31BbmltYWxpc3RBYmlsaXR5X0ZveC5wbmdgO1xuZXhwb3J0IGNvbnN0IEFCSUxJVFlfV09MRiA9IGAke0FTU0VUU31BbmltYWxpc3RBYmlsaXR5X1dvbGYucG5nYDtcblxuZXhwb3J0IGNvbnN0IEJBQ0tHUk9VTkQgPSBgJHtBU1NFVFN9anVuZ2xlX2JhY2tncm91bmQuanBnYDtcblxuZXhwb3J0IGNvbnN0IFRFU1RfQ0FOVkFTID0gJ3Rlc3QuY2FudmFzJztcblxuZXhwb3J0IGNvbnN0IFNDRU5FID0gYCR7QVNTRVRTfS9zY2VuZS5qc29uYDtcbiIsImltcG9ydCB7IENhbnZhc0VuZ2luZSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgRW5naW5lTW9kdWxlIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBDYW52YXNUZXh0RXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvdGV4dCc7XG5pbXBvcnQgeyBDdXN0b21JbWFnZUV4dGVuc2lvbiB9IGZyb20gJy4vaW1hZ2UnO1xuaW1wb3J0IEN1c3RvbVBsYXRmb3JtIGZyb20gJy4vcGxhdGZvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21FbmdpbmUgZXh0ZW5kcyBDYW52YXNFbmdpbmUge1xuXHRjb25zdHJ1Y3Rvcihtb2R1bGU6IEVuZ2luZU1vZHVsZSA9IHt9KSB7XG5cdFx0bW9kdWxlLlBsYXRmb3JtID0gbW9kdWxlLlBsYXRmb3JtID8/IEN1c3RvbVBsYXRmb3JtO1xuXG5cdFx0c3VwZXIobW9kdWxlKTtcblxuXHRcdENhbnZhc1RleHRFeHRlbnNpb24uaW5pdCh0aGlzKTtcblx0XHRDdXN0b21JbWFnZUV4dGVuc2lvbi5pbml0KHRoaXMpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDYW52YXNFbmdpbmUsIENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnQGplbmcvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VFeHRlbnNpb24sIElNQUdFLCBJbWFnZSB9IGZyb20gJ0BqZW5nL2ltYWdlJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuXG5leHBvcnQgbmFtZXNwYWNlIEN1c3RvbUltYWdlRXh0ZW5zaW9uIHtcblx0ZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihpbWFnZTogSW1hZ2UsIGVuZ2luZTogQ2FudmFzRW5naW5lKTogdm9pZCB7XG5cdFx0aWYgKCFpbWFnZS5zcmMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB7IG1hdHJpeCwgY29sb3JUcmFuc2Zvcm0gfSA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG5cblx0XHRpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KGltYWdlLnNyYykgYXMgSW1hZ2VSZXNvdXJjZSB8IG51bGw7XG5cblx0XHRpZiAoIXJlc291cmNlPy5sb2FkZWQgfHwgIXJlc291cmNlPy5pbWFnZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbnRleHQyZCA9IChlbmdpbmUucGxhdGZvcm0gYXMgQ2FudmFzUGxhdGZvcm0pLmdldENvbnRleHQoKTtcblxuXHRcdGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oXG5cdFx0XHRtYXRyaXguYSxcblx0XHRcdG1hdHJpeC5iLFxuXHRcdFx0bWF0cml4LmMsXG5cdFx0XHRtYXRyaXguZCxcblx0XHRcdG1hdHJpeC50eCxcblx0XHRcdG1hdHJpeC50eSxcblx0XHQpO1xuXG5cdFx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcblx0XHRjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuXHRcdGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuXG5cdFx0Y29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcblx0XHRjb250ZXh0MmQuZmlsbFN0eWxlID0gJyc7XG5cdFx0Y29udGV4dDJkLnN0cm9rZVN0eWxlID0gJ2xpZ2h0Z3JheSc7XG5cdFx0Y29udGV4dDJkLnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG5cdH1cblxuXHRleHBvcnQgZnVuY3Rpb24gaW5pdChlbmdpbmU6IENhbnZhc0VuZ2luZSkge1xuXHRcdEltYWdlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcblx0XHRlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KElNQUdFLCByZW5kZXIpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDYW52YXNQbGF0Zm9ybSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21QbGF0Zm9ybSBleHRlbmRzIENhbnZhc1BsYXRmb3JtIHtcblx0Y2xlYXIoKSB7XG5cdFx0Y29uc3QgY29udGV4dDJkID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cdFx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICdibGFjayc7XG5cdFx0Y29udGV4dDJkLnNldFRyYW5zZm9ybSgpO1xuXHRcdGNvbnRleHQyZC5maWxsUmVjdCgwLCAwLCBjb250ZXh0MmQuY2FudmFzLndpZHRoLCBjb250ZXh0MmQuY2FudmFzLmhlaWdodCk7XG5cdFx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21SZXNvdXJjZU1hbmFnZXIge1xuXHRyZWFkb25seSBhbGlhc2VzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblx0cmVhZG9ubHkgcmVzb3VyY2VzID0gbmV3IE1hcDxzdHJpbmcsIEltYWdlUmVzb3VyY2U+KCk7XG5cblx0cmVzb2x2ZSA9IChhc3NldDogc3RyaW5nLCBlbmdpbmU6IEVuZ2luZSk6IEltYWdlUmVzb3VyY2UgfCBudWxsID0+IHtcblx0XHRpZiAoYXNzZXQuaW5kZXhPZignaWQ6JykgPT09IDApIHtcblx0XHRcdGNvbnN0IGlkID0gYXNzZXQuc2xpY2UoMyk7XG5cdFx0XHRsZXQgcmVzb3VyY2UgPSB0aGlzLnJlc291cmNlcy5nZXQoaWQpIGFzIEltYWdlUmVzb3VyY2U7XG5cdFx0XHRpZiAoIXJlc291cmNlKSB7XG5cdFx0XHRcdGNvbnN0IHVybCA9IHRoaXMuYWxpYXNlcy5nZXQoaWQpO1xuXHRcdFx0XHRpZiAodXJsKSB7XG5cdFx0XHRcdFx0cmVzb3VyY2UgPSBJbWFnZVJlc291cmNlLnJlc29sdmUodXJsLCBlbmdpbmUpIGFzIEltYWdlUmVzb3VyY2U7XG5cdFx0XHRcdFx0dGhpcy5yZXNvdXJjZXMuc2V0KGlkLCByZXNvdXJjZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZW5naW5lLmRlYnVnLndhcm5pbmcoYFJlc291cmNlIHdpdGggaWQ6ICR7YXNzZXR9IG5vdCBmb3VuZGApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzb3VyY2U7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aW5pdChlbmdpbmU6IEVuZ2luZSkge1xuXHRcdGVuZ2luZS5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZCh0aGlzLnJlc29sdmUpO1xuXHR9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFN0YXRpc3RpY3Mge1xuXHRnZXRSZW5kZXJUaW1lKCk6IG51bWJlcjtcblx0Z2V0VXBkYXRlVGltZSgpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcHMoc3RhdGlzdGljczogU3RhdGlzdGljcykge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHR0ZXh0OiAnZnBzJyxcblx0XHRmcmFtZXM6IDAsXG5cdFx0ZnJhbWVUaW1lOiAwLFxuXHRcdHVwZGF0ZVRpbWU6IDAsXG5cdFx0cmVuZGVyVGltZTogMCxcblx0XHRmb3JtYXQ6IHtcblx0XHRcdHNpemU6IDIwLFxuXHRcdFx0Y29sb3I6IDB4ZmZmZmZmLFxuXHRcdH0sXG5cdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLmZyYW1lVGltZSArPSB0aW1lO1xuXHRcdFx0dGhpcy51cGRhdGVUaW1lICs9IHN0YXRpc3RpY3MuZ2V0VXBkYXRlVGltZSgpO1xuXHRcdFx0dGhpcy5yZW5kZXJUaW1lICs9IHN0YXRpc3RpY3MuZ2V0UmVuZGVyVGltZSgpO1xuXHRcdFx0dGhpcy5mcmFtZXMrKztcblx0XHRcdGlmICh0aGlzLmZyYW1lVGltZSA+PSAxKSB7XG5cdFx0XHRcdGNvbnN0IGZyYW1lVGltZSA9IE1hdGguY2VpbCgxMDAwICogdGhpcy5mcmFtZVRpbWUgLyB0aGlzLmZyYW1lcyk7XG5cdFx0XHRcdGNvbnN0IHVwZGF0ZVRpbWUgPSAodGhpcy51cGRhdGVUaW1lIC8gdGhpcy5mcmFtZXMpLnRvRml4ZWQoMik7XG5cdFx0XHRcdGNvbnN0IHJlbmRlclRpbWUgPSAodGhpcy5yZW5kZXJUaW1lIC8gdGhpcy5mcmFtZXMpLnRvRml4ZWQoMik7XG5cdFx0XHRcdHRoaXMudGV4dCA9IGBmcHM6ICR7dGhpcy5mcmFtZXN9LCAke2ZyYW1lVGltZX0gbXNcXG51cGRhdGU6ICR7dXBkYXRlVGltZX0gbXNcXG5yZW5kZXI6ICR7cmVuZGVyVGltZX0gbXNgO1xuXHRcdFx0XHR0aGlzLmZyYW1lVGltZSA9IDA7XG5cdFx0XHRcdHRoaXMudXBkYXRlVGltZSA9IDA7XG5cdFx0XHRcdHRoaXMucmVuZGVyVGltZSA9IDA7XG5cdFx0XHRcdHRoaXMuZnJhbWVzID0gMDtcblx0XHRcdH1cblx0XHR9LFxuXHR9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQge1xuXHRBQklMSVRZX0ZPWCwgQUJJTElUWV9XT0xGLCBBTklNQUxJU1QsIEFSQ0hFUiwgQkFDS0dST1VORCwgU0NFTkUsXG59IGZyb20gJy4vYXNzZXRzJztcbmltcG9ydCBhcnRpZmFjdCBmcm9tICcuL2FydGlmYWN0JztcbmltcG9ydCB7IGZwcywgU3RhdGlzdGljcyB9IGZyb20gJy4vZnBzJztcbmltcG9ydCB7IHVuaXQsIFVuaXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi91bml0JztcbmltcG9ydCB7IHByZWxvYWRlciwgUHJlbG9hZGVySW5mbyB9IGZyb20gJy4vcHJlbG9hZGVyJztcblxuaW50ZXJmYWNlIE1haW4ge1xuXHRzdGFydCgpOiB2b2lkO1xuXHRba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmludGVyZmFjZSBNYWluUHJvcGVydGllcyBleHRlbmRzIFN0YXRpc3RpY3Mge1xuXHRnZXRDYW52YXNXaWR0aCgpOiBudW1iZXI7XG5cdGdldENhbnZhc0hlaWdodCgpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4ocGFyYW1ldGVyczogTWFpblByb3BlcnRpZXMpOiBNYWluIHtcblx0ZnVuY3Rpb24gb25Vbml0Q2xpY2soZGF0YTogVW5pdFByb3BlcnRpZXMpIHtcblx0XHRkYXRhLmhlYWx0aCA9IE1hdGgucmFuZG9tKCk7XG5cdFx0Y29uc29sZS5sb2coJ29uVW5pdENsaWNrJywgZGF0YS5uYW1lKTtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSB7XG5cdFx0dHlwZTogJ2xvYWRlcicsXG5cdFx0dmlzaWJsZTogZmFsc2UsXG5cdFx0ZW5hYmxlZDogZmFsc2UsXG5cdFx0b25Mb2FkZWQoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnYmFja2dyb3VuZCBsb2FkZWQnKTtcblx0XHRcdHRoaXMudmlzaWJsZSA9IHRydWU7XG5cdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdH0sXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdGJhY2tncm91bmQ6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBCQUNLR1JPVU5ELFxuXHRcdFx0XHRzY2FsZVg6IDEsXG5cdFx0XHRcdHNjYWxlWTogMSxcblx0XHRcdH0sXG5cdFx0XHRmaWd1cmU6IHtcblx0XHRcdFx0dHlwZTogJ3NoYXBlJyxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdHR5cGU6ICdyZWN0YW5nbGUnLFxuXHRcdFx0XHRcdHg6IDIwLFxuXHRcdFx0XHRcdHk6IDIwLFxuXHRcdFx0XHRcdHdpZHRoOiAxMDAsXG5cdFx0XHRcdFx0aGVpZ2h0OiA1MCxcblx0XHRcdFx0XHRmaWxsOiAweGZmMDBmZixcblx0XHRcdFx0XHRzdHJva2U6IDB4MDAwMGZmLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHNoYXBlczoge1xuXHRcdFx0XHR0eXBlOiAnc2hhcGUnLFxuXHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ2VsbGlwc2UnLFxuXHRcdFx0XHRcdFx0eDogMTAwLFxuXHRcdFx0XHRcdFx0eTogMTAwLFxuXHRcdFx0XHRcdFx0cmFkaXVzOiA1MCxcblx0XHRcdFx0XHRcdGZpbGw6IHsgdHlwZTogJ3NvbGlkJywgY29sb3I6IDB4ZmZmZjAwLCBhbHBoYTogMSB9LFxuXHRcdFx0XHRcdFx0c3Ryb2tlOiB7IGZpbGw6IDB4MDAwMGZmLCB0aGlja25lc3M6IDEwIH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAncGF0aCcsXG5cdFx0XHRcdFx0XHRkYXRhOiAnTSAxMTAsIDExMCBIIDE5MCBWIDE5MCBIIDExMCBaJyxcblx0XHRcdFx0XHRcdGZpbGw6IDB4OTkwMDAwLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ3BhdGgnLFxuXHRcdFx0XHRcdFx0ZGF0YTogW1xuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdtb3ZlVG8nLCB4OiAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDEwMCwgeTogMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAxMDAsIHk6IDEwMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAwLCB5OiAxMDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMCwgeTogMCB9LFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdGZpbGw6IHsgdHlwZTogJ3NvbGlkJywgY29sb3I6IDB4OTk5OTk5LCBhbHBoYTogMC42IH0sXG5cdFx0XHRcdFx0XHRzdHJva2U6IDB4MDAwMDAwLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0dW5pdHM6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0dW5pdCh7XG5cdFx0XHRcdFx0XHRuYW1lOiAnQXJjaGVyJywgaGVhbHRoOiAxLCBpbWFnZTogQVJDSEVSLCBvbkNsaWNrOiBvblVuaXRDbGljayxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHR1bml0KHtcblx0XHRcdFx0XHRcdG5hbWU6ICdBbmltYWxpc3QnLCBoZWFsdGg6IDEsIGltYWdlOiBBTklNQUxJU1QsIG9uQ2xpY2s6IG9uVW5pdENsaWNrLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdGFydGlmYWN0OiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHR4OiAzMDAsXG5cdFx0XHRcdHk6IDM1MCxcblx0XHRcdFx0Y2hpbGRyZW46IGFydGlmYWN0KCksXG5cdFx0XHR9LFxuXHRcdFx0bWFwOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHk6IDQ1MCxcblx0XHRcdFx0c2NhbGVYOiAwLjIsXG5cdFx0XHRcdHNjYWxlWTogMC4yLFxuXHRcdFx0XHRhbHBoYTogMC41LFxuXHRcdFx0XHRzcmM6ICd0ZXN0LmNhbnZhcycsXG5cdFx0XHRcdG9uUG9pbnRlck92ZXIoKSB7XG5cdFx0XHRcdFx0dGhpcy5hbHBoYSA9IDE7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uUG9pbnRlck91dCgpIHtcblx0XHRcdFx0XHR0aGlzLmFscGhhID0gMC41O1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGFiaWxpdHlGb3g6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBBQklMSVRZX0ZPWCxcblx0XHRcdFx0eDogNDUwLFxuXHRcdFx0XHR5OiA1MDAsXG5cdFx0XHRcdHNjYWxlOiAwLjUsXG5cdFx0XHRcdHRpbnQ6IHtcblx0XHRcdFx0XHRjb2xvcjogMHgwMGZmMDAsXG5cdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdH0gYXMgYW55LFxuXHRcdFx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdFx0XHRpZiAodGhpcy50aW50KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQudmFsdWUgKz0gdGltZTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLnRpbnQudmFsdWUgPj0gMSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRpbnQudmFsdWUgPSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0b25Qb2ludGVyRG93bihlOiBhbnkpIHtcblx0XHRcdFx0XHRpZiAodGhpcy50aW50KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQgPSBudWxsO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQgPSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAweDAwZmYwMCxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZygnZm94JywgZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YWJpbGl0eVdvbGY6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdHg6IDM1MCxcblx0XHRcdFx0eTogNDAwLFxuXHRcdFx0XHRjaGlsZHJlbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdFx0c3JjOiBBQklMSVRZX1dPTEYsXG5cdFx0XHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdFx0XHRhbHBoYTogMSxcblx0XHRcdFx0XHR0d2Vlbjoge1xuXHRcdFx0XHRcdFx0bG9vcDogdHJ1ZSxcblx0XHRcdFx0XHRcdHBoYXNlczogW1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB4OiAyMDAgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ2N1Ymljb3V0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHk6IDIwMCwgYWxwaGE6IDAuNSB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAncXVhZHJhdGljSW4nLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeDogMCwgYWxwaGE6IDEgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ3F1YWRyYXRpY091dCcsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0ZnBzOiBmcHMocGFyYW1ldGVycyksXG5cdFx0fSxcblx0fTtcblxuXHRjb25zdCBwcmVsb2FkZXJJbmZvOiBQcmVsb2FkZXJJbmZvID0ge1xuXHRcdGdldFdpZHRoOiBwYXJhbWV0ZXJzLmdldENhbnZhc1dpZHRoLFxuXHRcdGdldEhlaWdodDogcGFyYW1ldGVycy5nZXRDYW52YXNIZWlnaHQsXG5cdFx0Z2V0UHJvZ3Jlc3MoKSB7XG5cdFx0XHRyZXR1cm4gTG9hZGVyLmdldExvYWRpbmdQcm9ncmVzcyhjb250ZW50KTtcblx0XHR9LFxuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdGNvbnRlbnQsXG5cdFx0XHRwcmVsb2FkZXI6IHByZWxvYWRlcihwcmVsb2FkZXJJbmZvKSxcblx0XHRcdHNjZW5lOiB7XG5cdFx0XHRcdHR5cGU6ICdzY2VuZScsIHg6IDMwMCwgc3JjOiBTQ0VORSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRvblVwZGF0ZSgpIHtcblx0XHRcdGNvbnN0IGlzTG9hZGVkID0gIXRoaXMuY2hpbGRyZW4uY29udGVudC52aXNpYmxlO1xuXHRcdFx0dGhpcy5jaGlsZHJlbi5wcmVsb2FkZXIudmlzaWJsZSA9IGlzTG9hZGVkO1xuXHRcdFx0dGhpcy5jaGlsZHJlbi5wcmVsb2FkZXIuZW5hYmxlZCA9IGlzTG9hZGVkO1xuXHRcdH0sXG5cdFx0c3RhcnQoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnc3RhcnQnKTtcblx0XHR9LFxuXHR9O1xufVxuIiwiaW1wb3J0IHsgU2hhcGUgfSBmcm9tICdAamVuZy9zaGFwZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJlbG9hZGVySW5mbyB7XG5cdGdldFByb2dyZXNzKCk6IG51bWJlcjtcblx0Z2V0V2lkdGgoKTogbnVtYmVyO1xuXHRnZXRIZWlnaHQoKTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZGVyKGluZm86IFByZWxvYWRlckluZm8pIHtcblx0Y29uc3QgaGVpZ2h0ID0gMjA7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ3NoYXBlJyxcblx0XHRzY2FsZVg6IDEsXG5cdFx0eTogaW5mby5nZXRIZWlnaHQoKSAtIGhlaWdodCxcblx0XHRkYXRhOiB7XG5cdFx0XHR0eXBlOiAncmVjdGFuZ2xlJyxcblx0XHRcdHdpZHRoOiAxLFxuXHRcdFx0aGVpZ2h0LFxuXHRcdFx0ZmlsbDogMHhmZjAwMDAsXG5cdFx0fSxcblx0XHRvblVwZGF0ZSgpIHtcblx0XHRcdHRoaXMuc2NhbGVYISArPSAoaW5mby5nZXRXaWR0aCgpICogaW5mby5nZXRQcm9ncmVzcygpIC0gdGhpcy5zY2FsZVghKSAvIDI7XG5cdFx0fSxcblx0fSBhcyBTaGFwZTtcbn1cbiIsImNvbnN0IFNQRUVEID0gMTAwO1xuXG5pbnRlcmZhY2UgVW5pdCB7XG5cdFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVbml0UHJvcGVydGllcyB7XG5cdG5hbWU6IHN0cmluZyxcblx0aGVhbHRoOiBudW1iZXIsXG5cdGltYWdlOiBzdHJpbmcsXG5cdG9uQ2xpY2s6IChkYXRhOiBVbml0UHJvcGVydGllcykgPT4gdm9pZDtcbn1cblxuZnVuY3Rpb24gb25Qcm9wc1VwZGF0ZShwcm9wczogYW55LCBjYWxsYmFjazogKHRpbWU6IG51bWJlcikgPT4gdm9pZCkge1xuXHRjb25zdCBjb3B5ID0geyAuLi5wcm9wcyB9O1xuXHRyZXR1cm4gKHRpbWU6IG51bWJlcikgPT4ge1xuXHRcdC8vIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG5cdFx0bGV0IGNoYW5nZWQgPSBmYWxzZTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcblx0XHRmb3IgKGNvbnN0IGtleSBpbiBwcm9wcykge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuXHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0aWYgKGNvcHlba2V5XSAhPT0gcHJvcHNba2V5XSkge1xuXHRcdFx0XHRcdGNvcHlba2V5XSA9IHByb3BzW2tleV07XG5cdFx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlZCkge1xuXHRcdFx0Y2FsbGJhY2sodGltZSk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBydW5PblByb3BzVXBkYXRlKHByb3BzOiBhbnksIGNvbXBvbmVudDogYW55KSB7XG5cdGNvbXBvbmVudC5vblVwZGF0ZSA9IG9uUHJvcHNVcGRhdGUocHJvcHMsIGNvbXBvbmVudC5vblVwZGF0ZS5iaW5kKGNvbXBvbmVudCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pdChwcm9wczogVW5pdFByb3BlcnRpZXMpOiBVbml0IHtcblx0ZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XG5cdFx0cmV0dXJuIGAke3Byb3BzLm5hbWV9XFxuJHtNYXRoLnJvdW5kKHByb3BzLmhlYWx0aCAqIDEwMCl9JWA7XG5cdH1cblxuXHRjb25zdCB1bml0VmlldyA9IHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHR4OiA1MCArIE1hdGgucmFuZG9tKCkgKiA0MDAsXG5cdFx0eTogMjAwLFxuXHRcdHJvdGF0aW9uOiAwLFxuXHRcdHVwZGF0ZU1vdmUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLnggKz0gdGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggKiB0aW1lICogU1BFRUQ7XG5cdFx0XHRpZiAodGhpcy54IDwgNTApIHtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggPSAxO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnggPiA0MDApIHtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggPSAtMTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0dGhpcy51cGRhdGVNb3ZlKHRpbWUpO1xuXHRcdH0sXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdHRleHQ6IHtcblx0XHRcdFx0dHlwZTogJ3RleHQnLFxuXHRcdFx0XHR0ZXh0OiBnZXRUaXRsZSgpLFxuXHRcdFx0XHRmb3JtYXQ6IHtcblx0XHRcdFx0XHRzaXplOiAxNSxcblx0XHRcdFx0XHRjb2xvcjogMHhmZmRkZGQsXG5cdFx0XHRcdFx0YWxpZ246ICdjZW50ZXInLFxuXHRcdFx0XHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRib3JkZXI6IDB4MDBmZjAwLFxuXHRcdFx0XHR5OiAtMzAsXG5cdFx0XHRcdGhlaWdodDogMzUsXG5cdFx0XHRcdHBpdm90WDogMC41LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duOiAoKSA9PiB7XG5cdFx0XHRcdFx0cHJvcHMub25DbGljayhwcm9wcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uVXBkYXRlKCkge1xuXHRcdFx0XHRcdHRoaXMudGV4dCA9IGdldFRpdGxlKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBwcm9wcy5pbWFnZSxcblx0XHRcdFx0c2NhbGVYOiBNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xLFxuXHRcdFx0XHRwaXZvdFg6IDAuNSxcblx0XHRcdFx0b25Qb2ludGVyRG93bjogKCkgPT4ge1xuXHRcdFx0XHRcdHByb3BzLm9uQ2xpY2socHJvcHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXG5cdHJ1bk9uUHJvcHNVcGRhdGUocHJvcHMsIHVuaXRWaWV3LmNoaWxkcmVuLnRleHQpO1xuXG5cdHJldHVybiB1bml0Vmlldztcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCB7IENvbXBvbmVudCwgTW91c2VFeHRlbnNpb24gfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IFR3ZWVuRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvdHdlZW4nO1xuaW1wb3J0IHsgQ2FudmFzVGV4dEV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3RleHQnO1xuaW1wb3J0IHsgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL2ltYWdlJztcbmltcG9ydCB7IENhbnZhc1NoYXBlRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvc2hhcGUnO1xuaW1wb3J0IHsgQ2FudmFzRW5naW5lIH0gZnJvbSAnQGplbmcvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcbmltcG9ydCB7IFNjZW5lRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvc2NlbmUnO1xuaW1wb3J0IEN1c3RvbVJlc291cmNlTWFuYWdlciBmcm9tICcuL2VuZ2luZS9yZXNvdXJjZXMnO1xuaW1wb3J0IEN1c3RvbUVuZ2luZSBmcm9tICcuL2VuZ2luZS9lbmdpbmUnO1xuaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluJztcbmltcG9ydCB7XG5cdEFOSU1BTElTVCwgQU5JTUFMSVNUX0lNQUdFLCBBUkNIRVIsIEFSQ0hFUl9JTUFHRSwgVEVTVF9DQU5WQVMsXG59IGZyb20gJy4vYXNzZXRzJztcblxuLy8gcGFnZVxuZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAnMCc7XG5kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSAnMCc7XG5cbi8vIGJhc2ljIGVuZ2luZVxuY29uc3QgZW5naW5lID0gbmV3IENhbnZhc0VuZ2luZSgpO1xuQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5DYW52YXNUZXh0RXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbkNhbnZhc1NoYXBlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcblR3ZWVuRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcblNjZW5lRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbk1vdXNlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbmVuZ2luZS5zY3JlZW4uZnVsbHNjcmVlbiA9IHRydWU7XG5lbmdpbmUudGlja2VyLnBsYXkoKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZW5naW5lLnBsYXRmb3JtLnZpZXcpO1xuXG5jb25zdCBwYXJhbWV0ZXJzID0ge1xuXHRnZXRVcGRhdGVUaW1lKCkge1xuXHRcdHJldHVybiBlbmdpbmUudXBkYXRlci5lbGFwc2VkVGltZTtcblx0fSxcblx0Z2V0UmVuZGVyVGltZSgpIHtcblx0XHRyZXR1cm4gZW5naW5lLnJlbmRlcmVyLmVsYXBzZWRUaW1lO1xuXHR9LFxuXHRnZXRDYW52YXNXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiBlbmdpbmUuc2NyZWVuLmdldFdpZHRoKCk7XG5cdH0sXG5cdGdldENhbnZhc0hlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiBlbmdpbmUuc2NyZWVuLmdldEhlaWdodCgpO1xuXHR9LFxufTtcblxuLy8gYXBwbGljYXRpb25cbmNvbnN0IGFwcCA9IG1haW4ocGFyYW1ldGVycyk7XG5hcHAuc3RhcnQoKTtcbmVuZ2luZS5yb290ID0gYXBwIGFzIGFueSBhcyBDb21wb25lbnQ7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuY29uc29sZS5sb2coYXBwKTtcblxuLy8gdGVzdCBwYXVzZVxuc2V0VGltZW91dCgoKSA9PiBlbmdpbmUudGlja2VyLnBhdXNlKCksIDUwMDApO1xuc2V0VGltZW91dCgoKSA9PiBlbmdpbmUudGlja2VyLnBsYXkoKSwgMTAwMDApO1xuXG4vLyBjdXN0b20gZW5naW5lXG5jb25zdCBjdXN0b21FbmdpbmUgPSBuZXcgQ3VzdG9tRW5naW5lKCk7XG5jdXN0b21FbmdpbmUuc2NyZWVuLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbmN1c3RvbUVuZ2luZS5zY3JlZW4uaGVpZ2h0ID0gNjAwO1xuY3VzdG9tRW5naW5lLnVwZGF0ZXIuZW5hYmxlZCA9IGZhbHNlO1xuY3VzdG9tRW5naW5lLnJvb3QgPSBlbmdpbmUucm9vdDtcbmN1c3RvbUVuZ2luZS50aWNrZXIucGxheSgpO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUudG9wID0gJzBweCc7XG5jdXN0b21FbmdpbmUucGxhdGZvcm0udmlldy5zdHlsZS5sZWZ0ID0gJzYwMHB4JztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcpO1xuXG4vLyAvLyBzZXQgY3VzdG9tIHJlc291cmNlXG5lbmdpbmUucmVzb3VyY2VzLnJlc291cmNlcy5zZXQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBjdXN0b21FbmdpbmUucGxhdGZvcm0udmlldyxcblx0XHRsb2FkZWQ6IHRydWUsXG5cdH0gYXMgSW1hZ2VSZXNvdXJjZSxcbik7XG5jdXN0b21FbmdpbmUucmVzb3VyY2VzLnJlc291cmNlcy5zZXQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBlbmdpbmUucGxhdGZvcm0udmlldyxcblx0XHRsb2FkZWQ6IHRydWUsXG5cdH0gYXMgSW1hZ2VSZXNvdXJjZSxcbik7XG5cbi8vIGN1c3RvbSByZXNvdXJjZSByZXNvbHZlclxuY29uc3QgcmVzb3VyY2VNYW5hZ2VyID0gbmV3IEN1c3RvbVJlc291cmNlTWFuYWdlcigpO1xucmVzb3VyY2VNYW5hZ2VyLmFsaWFzZXMuc2V0KEFSQ0hFUi5yZXBsYWNlKCdpZDonLCAnJyksIEFSQ0hFUl9JTUFHRSk7XG5yZXNvdXJjZU1hbmFnZXIuYWxpYXNlcy5zZXQoQU5JTUFMSVNULnJlcGxhY2UoJ2lkOicsICcnKSwgQU5JTUFMSVNUX0lNQUdFKTtcbnJlc291cmNlTWFuYWdlci5pbml0KGVuZ2luZSk7XG5yZXNvdXJjZU1hbmFnZXIuaW5pdChjdXN0b21FbmdpbmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==