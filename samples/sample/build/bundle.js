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

var domMatrix;
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

      if (!domMatrix) {
        domMatrix = new DOMMatrix();
      }

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
      this.dispatchComponent(root, base);
    }
  }, {
    key: "dispatchComponent",
    value: function dispatchComponent(component, parent) {
      if (this.depth > this.engine.depth) {
        return false;
      }

      if (!_extensions_display__WEBPACK_IMPORTED_MODULE_1__.Display.isVisible(component)) {
        return false;
      }

      if (!_extensions_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.isPointerEnabled(component)) {
        return false;
      }

      var handler = this.engine.components.hitTest.get(component.type);

      if (handler) {
        var context = this.getContext();
        _extensions_transform__WEBPACK_IMPORTED_MODULE_3__.Transform.getMatrix(component, context.matrix);
        _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.concat(parent.matrix, context.matrix, context.matrix);
        _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.transformInversePoint(context.matrix, this.global, this.local);
        var _this$local = this.local,
            x = _this$local.x,
            y = _this$local.y;
        var result = handler(component, this.engine);

        if (result) {
          _extensions_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, this.pointerType, x, y, this.pointerId);
        }

        if (this.pointerType === 'pointerMove') {
          if (result && !component.pointerOver) {
            _extensions_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, 'pointerOver', x, y, this.pointerId);
          } else if (!result && component.pointerOver) {
            _extensions_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, 'pointerOut', x, y, this.pointerId);
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
/* harmony export */   "MouseExtension": () => (/* reexport safe */ _input_mouse__WEBPACK_IMPORTED_MODULE_14__.MouseExtension),
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
/* harmony import */ var _input_mouse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./input/mouse */ "../../packages/core/dist/input/mouse.js");
/* harmony import */ var _extensions_display__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./extensions/display */ "../../packages/core/dist/extensions/display.js");
/* harmony import */ var _extensions_pivot__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./extensions/pivot */ "../../packages/core/dist/extensions/pivot.js");
/* harmony import */ var _extensions_source__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./extensions/source */ "../../packages/core/dist/extensions/source.js");
/* harmony import */ var _extensions_transform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./extensions/transform */ "../../packages/core/dist/extensions/transform.js");
/* harmony import */ var _extensions_update__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./extensions/update */ "../../packages/core/dist/extensions/update.js");





















/***/ }),

/***/ "../../packages/core/dist/input/mouse.js":
/*!***********************************************!*\
  !*** ../../packages/core/dist/input/mouse.js ***!
  \***********************************************/
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

/***/ "../../packages/shape/dist/index.js":
/*!******************************************!*\
  !*** ../../packages/shape/dist/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasShapeExtension": () => (/* reexport safe */ _canvas_shape__WEBPACK_IMPORTED_MODULE_5__.CanvasShapeExtension)
/* harmony export */ });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/data */ "../../packages/shape/dist/data/data.js");
/* harmony import */ var _data_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/path */ "../../packages/shape/dist/data/path.js");
/* harmony import */ var _data_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/string */ "../../packages/shape/dist/data/string.js");
/* harmony import */ var _data_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/style */ "../../packages/shape/dist/data/style.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shape */ "../../packages/shape/dist/shape.js");
/* harmony import */ var _canvas_shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./canvas/shape */ "../../packages/shape/dist/canvas/shape.js");







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
    return {
        type: 'shape',
        scaleX: 1,
        y: info.getHeight() - 20,
        data: {
            type: 'rectangle',
            width: 1,
            height: 20,
            fill: 0xff0000,
        },
        onUpdate() {
            this.scaleX = this.scaleX ?? 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jYW52YXMtZW5naW5lL2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NhbnZhcy1lbmdpbmUvZGlzdC9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvY29tcG9uZW50cy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9jb3JlL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvcmUvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvcGl2b3QuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9leHRlbnNpb25zL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9leHRlbnNpb25zL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvdXBkYXRlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL2RlYnVnLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvcG9pbnRlcnMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3RpY2tlci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3VwZGF0ZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2lucHV0L21vdXNlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvYm91bmRzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvY29sb3ItdHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9wb2ludC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvaW1hZ2UvZGlzdC9jYW52YXMtaW1hZ2UtY29sb3IuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvY2FudmFzLWltYWdlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9pbWFnZS9kaXN0L2ltYWdlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9pbWFnZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9yZXNvdXJjZXMvZGlzdC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvcmVzb3VyY2VzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3Jlc291cmNlcy9kaXN0L3N0cmluZy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2NlbmUvZGlzdC9zY2VuZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvZWxsaXBzZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvcGF0aC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9zaGFwZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvc3RyaW5nLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9zdHlsZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9kYXRhL2RhdGEuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvZGF0YS9wYXRoLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2RhdGEvc3RyaW5nLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L3NoYXBlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvY2FudmFzL3RleHQuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC9kYXRhL2ZvbnQuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC9kYXRhL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2RhdGEvbWV0cmljcy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvdGV4dC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdHdlZW4vZGlzdC9lYXNpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3R3ZWVuL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3R3ZWVuL2Rpc3QvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2FydGlmYWN0LnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9hc3NldHMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2VuZ2luZS9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2VuZ2luZS9pbWFnZS50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvZW5naW5lL3BsYXRmb3JtLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9lbmdpbmUvcmVzb3VyY2VzLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9mcHMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL3ByZWxvYWRlci50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvdW5pdC50cyIsIndlYnBhY2s6Ly9zYW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2FtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zYW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiQ2FudmFzRW5naW5lIiwibW9kdWxlIiwiUGxhdGZvcm0iLCJDYW52YXNQbGF0Zm9ybSIsIkVuZ2luZSIsImRvbU1hdHJpeCIsIkNhbnZhc1BhdHRlcm5zIiwiY29sb3JQYXR0ZXJuIiwiY29sb3IiLCJhbHBoYSIsImN0IiwiciIsImciLCJiIiwiYSIsIkNvbG9yVHJhbnNmb3JtIiwicmVkTXVsdGlwbGllciIsInJlZE9mZnNldCIsImdyZWVuTXVsdGlwbGllciIsImdyZWVuT2Zmc2V0IiwiYmx1ZU11bHRpcGxpZXIiLCJibHVlT2Zmc2V0IiwiYWxwaGFNdWx0aXBsaWVyIiwiYWxwaGFPZmZzZXQiLCJhZGRHcmFkaWVudENvbG9ycyIsInBhdHRlcm4iLCJjb2xvcnMiLCJhbHBoYXMiLCJyYXRpb3MiLCJjb2xvclRyYW5zZm9ybSIsImkiLCJsZW5ndGgiLCJyYXRpbyIsImNvbG9yU3R5bGUiLCJhZGRDb2xvclN0b3AiLCJyYWRpYWxHcmFkaWVudFBhdHRlcm4iLCJiZWdpblgiLCJiZWdpblkiLCJiZWdpblJhZGl1cyIsImVuZFgiLCJlbmRZIiwiZW5kUmFkaXVzIiwiY29udGV4dCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwibGluZWFyR3JhZGllbnRQYXR0ZXJuIiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJiaXRtYXBQYXR0ZXJuIiwiaW1hZ2UiLCJyZXBlYXQiLCJtYXRyaXgiLCJjcmVhdGVQYXR0ZXJuIiwiRE9NTWF0cml4IiwiYyIsImQiLCJlIiwidHgiLCJmIiwidHkiLCJzZXRUcmFuc2Zvcm0iLCJhcmd1bWVudHMiLCJ2aWV3IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dHMiLCJnZXRDb250ZXh0IiwiY3VzdG9tQ29udGV4dHMiLCJwdXNoIiwicG9wIiwiZW5naW5lIiwiZGVidWciLCJ3YXJuaW5nIiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJjbGVhciIsInVwZGF0ZVNpemUiLCJjbGVhclJlY3QiLCJzY3JlZW4iLCJnZXRXaWR0aCIsImdldEhlaWdodCIsInBpeGVsUmF0aW8iLCJnZXRQaXhlbFJhdGlvIiwidmlld1dpZHRoIiwiTWF0aCIsImZsb29yIiwidmlld0hlaWdodCIsInN0eWxlIiwiQ09OVEFJTkVSIiwiQ29udGFpbmVyIiwibnVtQ2hpbGRyZW4iLCJjb250YWluZXIiLCJjaGlsZHJlbiIsIkFycmF5IiwiaXNBcnJheSIsInR5cGUiLCJrZXlzIiwiT2JqZWN0IiwiQ29udGFpbmVyRXh0ZW5zaW9uIiwicmVuZGVyIiwicmVuZGVyZXIiLCJkZXB0aCIsImNvbXBvbmVudCIsInJlbmRlckNvbXBvbmVudCIsImNvbXBvbmVudHNNYXAiLCJ1cGRhdGUiLCJ1cGRhdGVyIiwidXBkYXRlQ29tcG9uZW50IiwiaGl0VGVzdCIsInBvaW50ZXJFdmVudHMiLCJwb2ludGVycyIsInJlc3VsdCIsImRpc3BhdGNoQ29tcG9uZW50IiwibG9hZGVkIiwibG9hZGluZyIsInByb2dyZXNzIiwiY29tcG9uZW50Q29udGV4dCIsImluaXQiLCJjb21wb25lbnRzIiwic2V0IiwiTE9BREVSIiwiTG9hZGVyIiwiZ2V0TG9hZGluZ1Byb2dyZXNzIiwibG9hZGVyIiwibG9hZGluZ1Byb2dyZXNzIiwiaXNMb2FkZWQiLCJuZWVkTG9hZGluZ0NoZWNrIiwibG9hZGluZ0NoZWNrIiwiTG9hZGVyRXh0ZW5zaW9uIiwib25Mb2FkZWQiLCJDb21wb25lbnRzIiwiU2NyZWVuIiwiVXBkYXRlciIsIkxvYWRpbmciLCJSZW5kZXJlciIsIlBvaW50ZXJzIiwiVGlja2VyIiwiRGVidWciLCJSZXNvdXJjZXMiLCJwbGF0Zm9ybSIsInRpY2tlciIsInJlc291cmNlcyIsIkVuZ2luZUZlYXR1cmUiLCJEaXNwbGF5IiwiaXNWaXNpYmxlIiwidmlzaWJsZSIsIlBpdm90IiwiZ2V0WCIsInBpdm90IiwicGl2b3RYIiwiZ2V0WSIsInBpdm90WSIsImhhc1ZhbHVlcyIsImhhbmRsZXJzTWFwIiwicG9pbnRlckRvd24iLCJwb2ludGVyVXAiLCJwb2ludGVyTW92ZSIsInBvaW50ZXJPdmVyIiwicG9pbnRlck91dCIsIlBvaW50ZXIiLCJpc1BvaW50ZXJPdmVyIiwicG9pbnRlciIsImlzUG9pbnRlckVuYWJsZWQiLCJwb2ludGVyRW5hYmxlZCIsImRpc3BhdGNoRXZlbnQiLCJ4IiwieSIsImlkIiwiaGFuZGxlck5hbWUiLCJldmVudCIsIlRyYW5zZm9ybSIsImdldE1hdHJpeCIsInRyYW5zZm9ybSIsInJvdGF0aW9uIiwic2NhbGVYIiwic2NhbGUiLCJzY2FsZVkiLCJjb3MiLCJzaW4iLCJnZXRDb2xvclRyYW5zZm9ybSIsInRpbnQiLCJ2YWx1ZSIsInZhbHVlSW52ZXJ0ZWQiLCJicmlnaHRuZXNzIiwidW5kZWZpbmVkIiwicGVyY2VudCIsImFicyIsIm9mZnNldCIsIlVwZGF0ZSIsImlzRW5hYmxlZCIsImVuYWJsZWQiLCJ0aW1lIiwib25VcGRhdGUiLCJwcm9wZXJ0aWVzIiwiTWFwIiwiZXJyb3JzIiwid2FybmluZ3MiLCJjb25zb2xlIiwibG9nIiwiYXJncyIsIlN0cmluZyIsImNvdW50IiwiZ2V0IiwiZXJyb3IiLCJ3YXJuIiwiZWxhcHNlZFRpbWUiLCJoYW5kbGVyIiwicm9vdCIsInN0YXJ0VGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiZ2xvYmFsIiwiUG9pbnQiLCJsb2NhbCIsInBvaW50ZXJJZCIsInBvaW50ZXJUeXBlIiwiTWF0cml4IiwiYmFzZSIsInBhcmVudCIsImJlZ2luIiwiZW5kIiwiUmVzb3VyY2UiLCJnZXRQcm9ncmVzcyIsInJlc291cmNlIiwiYnl0ZXNUb3RhbCIsImJ5dGVzTG9hZGVkIiwicmVzb2x2ZXJzIiwiU2V0IiwiYXNzZXQiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdWxsc2NyZWVuIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZGV2aWNlUGl4ZWxSYXRpbyIsImZyYW1lUmF0ZSIsInBhdXNlZCIsInVwZGF0ZUZyYW1lIiwiY3VycmVudFRpbWUiLCJkZWx0YVRpbWUiLCJ1cGRhdGVOZXh0RnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGVQcm9wZXJ0aWVzIiwiZm9yRWFjaCIsInByb3BlcnR5IiwiY2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50TGVmdCIsImNsaWVudFkiLCJ0b3AiLCJjbGllbnRUb3AiLCJkaXNwYXRjaCIsInByZXZlbnREZWZhdWx0IiwiTW91c2VFeHRlbnNpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiQm91bmRzIiwiZW1wdHkiLCJtaW5YIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwibWluWSIsIm1heFgiLCJNSU5fVkFMVUUiLCJtYXhZIiwic2V0RW1wdHkiLCJib3VuZHMiLCJpc0VtcHR5IiwidG9SZWN0YW5nbGUiLCJyZWN0YW5nbGUiLCJ0ZXN0WCIsInRlc3RZIiwidGVzdCIsInRlc3RQb2ludCIsInBvaW50IiwiaXNFbXB0eVdpdGhBbHBoYSIsImNvcHkiLCJmcm9tIiwidG8iLCJjb25jYXQiLCJjdDEiLCJjdDAiLCJtYXRyaXgwIiwibWF0cml4MSIsImdldERldGVybWluYW50IiwiaW52ZXJ0IiwiZGV0ZXJtaW5hbnQiLCJ0cmFuc2Zvcm1Qb2ludCIsInRyYW5zZm9ybVBvaW50TG9jYWwiLCJ0cmFuc2Zvcm1JbnZlcnNlUG9pbnQiLCJ0cmFuc2Zvcm1Cb3VuZHMiLCJyeCIsInJ5IiwicnIiLCJyYiIsIm54MSIsIm55MSIsIm54MiIsIm55MiIsIm54MyIsIm55MyIsIm54NCIsIm55NCIsInJpZ2h0IiwiYm90dG9tIiwic3FydCIsImFuZ2xlIiwiYXRhbjIiLCJlcXVhbHMiLCJwb2ludDAiLCJwb2ludDEiLCJzb3VyY2UiLCJ0YXJnZXQiLCJub3JtYWxpemUiLCJ0aGlja25lc3MiLCJkaXN0YW5jZSIsImR4IiwiZHkiLCJpbnRlcnBvbGF0ZSIsInBvbGFyIiwiUmVjdGFuZ2xlIiwiaW50ZXJzZWN0aW9uIiwiY29udGFpbnMiLCJyb3VuZCIsInNjcmVlbkJvdW5kcyIsIkNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24iLCJzcmMiLCJjb250ZXh0MmQiLCJnbG9iYWxBbHBoYSIsImRyYXdJbWFnZSIsImN1c3RvbUNvbnRleHQiLCJjcmVhdGVDdXN0b21Db250ZXh0IiwiaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwicm0iLCJnbSIsImJtIiwiYW0iLCJybyIsImdvIiwiYm8iLCJhbyIsImRhdGEiLCJwdXRJbWFnZURhdGEiLCJkZXN0cm95Q3VzdG9tQ29udGV4dCIsIkltYWdlRXh0ZW5zaW9uIiwiSU1BR0UiLCJDYW52YXNJbWFnZUV4dGVuc2lvbiIsIkltYWdlIiwiY2FsY3VsYXRlQm91bmRzIiwiSW1hZ2VSZXNvdXJjZSIsImV4dGVuc2lvbiIsInNwbGl0Iiwib25sb2FkIiwib25lcnJvciIsImFkZCIsIlN0cmluZ1Jlc291cmNlIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwib25wcm9ncmVzcyIsInRvdGFsIiwicmVzcG9uc2VUZXh0Iiwic2VuZCIsIlNDRU5FIiwiU2NlbmVFeHRlbnNpb24iLCJzY2VuZSIsIkpTT04iLCJwYXJzZSIsIm1lc3NhZ2UiLCJQSV8yIiwiUEkiLCJhcHBseUVsbGlwc2UiLCJoYXNGaWxsIiwicmFkaXVzIiwicmFkaXVzWCIsInJhZGl1c1kiLCJiZWdpblBhdGgiLCJlbGxpcHNlIiwiY2xvc2VQYXRoIiwiYXBwbHlDb21tYW5kIiwiY29tbWFuZCIsIm1vdmVUbyIsImxpbmVUbyIsImN1cnZlVG8iLCJxdWFkcmF0aWNDdXJ2ZVRvIiwiY3giLCJjeSIsImN1YmljQ3VydmVUbyIsImJlemllckN1cnZlVG8iLCJzeCIsInN5IiwiYXBwbHlQYXRoIiwiYXBwbHlSZWN0YW5nbGUiLCJyZWN0IiwicmVuZGVyR3JhcGhpY3MiLCJmaWxsIiwic3Ryb2tlIiwiaGFzU3Ryb2tlIiwiZXhpc3QiLCJwYXRoIiwiYXBwbHlTdHJpbmciLCJzZXRGaWxsU3R5bGUiLCJzZXRTdHJva2VTdHlsZSIsIkNhbnZhc1NoYXBlRXh0ZW5zaW9uIiwic2hhcGUiLCJTaGFwZSIsIlNoYXBlRXh0ZW5zaW9uIiwiU0hBUEUiLCJyZWFkZXIiLCJHcmFwaGljc1N0cmluZ1JlYWRlciIsInNldFBhdGgiLCJyZWFkTmV4dCIsImdldENvbW1hbmQiLCJlbXB0eUFycmF5IiwiZW1wdHlNYXRyaXgiLCJnZXRDYW52YXNQYXR0ZXJuIiwic29saWQiLCJsaW5lYXIiLCJyYWRpYWwiLCJiaXRtYXBGaWxsIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJsaW5lQ2FwIiwibGluZUpvaW4iLCJtaXRlckxpbWl0IiwiY2FwcyIsImpvaW50cyIsIlJlY3RhbmdsZURhdGEiLCJFbGxpcHNlRGF0YSIsIlBhdGhEYXRhIiwicGF0aERhdGEiLCJHcmFwaGljc1N0cmluZyIsIlBhdGhDb21tYW5kIiwiR3JhcGhpY3NEYXRhIiwiTlVNQkVSU19DT1VOVCIsIk0iLCJtIiwiTCIsImwiLCJIIiwiaCIsIlYiLCJ2IiwiQyIsIlMiLCJzIiwiUSIsInEiLCJUIiwidCIsIkNPTU1BTkRfUkVHRVgiLCJOVU1CRVJfUkVHRVgiLCJHcmFwaGljc1N0cmluZ1N0cmVhbSIsImJ1ZmZlciIsInN5bWJvbFJlZ2V4IiwibGFzdEluZGV4Iiwic3ltYm9sTWF0Y2giLCJleGVjIiwic3ltYm9sIiwibnVtYmVyTWF0Y2giLCJwYXJzZUZsb2F0Iiwic3RyZWFtIiwiY29tbWFuZEV4aXN0cyIsImxhc3RYIiwibGFzdFkiLCJsYXN0Q1giLCJsYXN0Q1kiLCJnZXRCdWZmZXIiLCJlMCIsImUxIiwiZTIiLCJlMyIsImU0IiwiZTUiLCJkZWZhdWx0VGV4dEZvcm1hdCIsIkNPUlJFQ1RJT04iLCJDYW52YXNUZXh0RXh0ZW5zaW9uIiwiVGV4dCIsIm1ldHJpY3MiLCJmb3JtYXQiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiVGV4dEZvcm1hdCIsInJlYWxXaWR0aCIsInJlYWxIZWlnaHQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInRleHRCYXNlbGluZSIsInNpbXBsZSIsInRleHQiLCJzaXplIiwibGVhZGluZyIsImxldHRlclNwYWNpbmciLCJkZWZhdWx0Rm9udCIsIkZvbnQiLCJzeW1ib2xTaXplIiwiYWxpZ25WYWx1ZSIsImZvbnQiLCJUZXh0TWV0cmljcyIsInN5bWJvbE5leHQiLCJhZHZhbmNlIiwiZmlsbFRleHQiLCJhbGlnblZlcnRpY2FsVmFsdWUiLCJsaW5lcyIsImxpbmUiLCJzeW1ib2xzIiwiZmlyc3QiLCJsaW5lSGVpZ2h0IiwiaiIsImFsaWduU3ltYm9sVmFsdWUiLCJzeW1ib2xGb250IiwiVGV4dEV4dGVuc2lvbiIsIlRFWFQiLCJFTSIsImZvbnRzIiwiZ2V0U3R5bGUiLCJuYW1lIiwicmVwbGFjZSIsInRvU3RyaW5nIiwibWVhc3VyZVRleHQiLCJnZXRDaGFyV2lkdGgiLCJjaGFyIiwid2lkdGhzIiwiZ2V0S2VybmluZyIsInNlY29uZCIsInBhaXIiLCJrZXJuaW5nIiwia2VybmluZ3MiLCJ3aWR0aFNlY29uZCIsIndpZHRoVG90YWwiLCJnZXRBZHZhbmNlIiwiZ2V0Rm9udCIsImJvbGQiLCJpdGFsaWMiLCJ1bmRlcmxpbmUiLCJhbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJjb21iaW5lIiwiZGVmYXVsdEZvcm1hdCIsImdldEFsaWduVmFsdWUiLCJnZXRWZXJ0aWNhbEFsaWduVmFsdWUiLCJUZXh0TGluZSIsImNyZWF0ZSIsIm1heCIsImNvcnJlY3RXaWR0aCIsImxhc3QiLCJjb3JyZWN0SGVpZ2h0IiwiZ2V0U3ltYm9scyIsInN5bWJvbEZvcm1hdCIsImJsb2NrIiwiZ2V0TGluZXMiLCJ3b3JkV3JhcCIsIm11bHRpbGluZSIsIndvcmQiLCJnZXRNZXRyaWNzIiwiZ2V0U2ltcGxlTWV0cmljcyIsImdldFNpbXBsZVdpZHRoIiwiaW5kZXgiLCJnZXRUZXh0IiwiaXNVcGRhdGVNZXRyaWNzIiwidXBkYXRlTWV0cmljcyIsImlzQXV0b1NpemUiLCJpc1NpbXBsZSIsImlzTXVsdGlsaW5lIiwiTElORUFSIiwiUVVBRFJBVElDIiwiUVVBRFJBVElDX0lOIiwiUVVBRFJBVElDX09VVCIsIkNVQklDIiwiQ1VCSUNfSU4iLCJDVUJJQ19PVVQiLCJRVUFSVElDIiwiUVVBUlRJQ19JTiIsIlFVQVJUSUNfT1VUIiwiUVVJTlRJQyIsIlFVSU5USUNfSU4iLCJRVUlOVElDX09VVCIsIlNJTlVTT0lEQUwiLCJTSU5VU09JREFMX0lOIiwiU0lOVVNPSURBTF9PVVQiLCJFWFBPTkVOVElBTCIsIkVYUE9ORU5USUFMX0lOIiwiRVhQT05FTlRJQUxfT1VUIiwiQ0lSQ1VMQVIiLCJDSVJDVUxBUl9JTiIsIkNJUkNVTEFSX09VVCIsIkVMQVNUSUMiLCJFTEFTVElDX0lOIiwiRUxBU1RJQ19PVVQiLCJCQUNLIiwiQkFDS19JTiIsIkJBQ0tfT1VUIiwiQk9VTkNFIiwiQk9VTkNFX0lOIiwiQk9VTkNFX09VVCIsImVhc2luZyIsInBvdyIsIlRXRUVOIiwiVHdlZW5FeHRlbnNpb24iLCJ0d2VlbiIsInBoYXNlcyIsInBoYXNlIiwiZWFzaW5nTmFtZSIsInRvTG93ZXJDYXNlIiwiZWFzaW5nTWV0aG9kIiwiZWFzaW5nVmFsdWUiLCJzdGF0ZSIsImtleSIsImZyb21WYWx1ZSIsInRvVmFsdWUiLCJzdGF0ZVZhbHVlIiwibG9vcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNPLElB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LENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQzdCLGdEQUFXLEVBQ1g7SUFDQyxLQUFLLEVBQUUsZ0RBQVc7SUFDbEIsS0FBSyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSTtJQUNqQyxNQUFNLEVBQUUsSUFBSTtDQUNLLENBQ2xCLENBQUM7QUFDRixZQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQ25DLGdEQUFXLEVBQ1g7SUFDQyxLQUFLLEVBQUUsZ0RBQVc7SUFDbEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSTtJQUMzQixNQUFNLEVBQUUsSUFBSTtDQUNLLENBQ2xCLENBQUM7QUFHRixNQUFNLGVBQWUsR0FBRyxJQUFJLHVEQUFxQixFQUFFLENBQUM7QUFDcEQsZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbURBQWMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsaURBQVksQ0FBQyxDQUFDO0FBQ3JFLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNEQUFpQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxvREFBZSxDQUFDLENBQUM7QUFDM0UsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVuZ2luZSB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQ2FudmFzUGxhdGZvcm0gfSBmcm9tICcuL3BsYXRmb3JtJztcbmV4cG9ydCBjbGFzcyBDYW52YXNFbmdpbmUgZXh0ZW5kcyBFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1vZHVsZSA9IHt9KSB7XG4gICAgICAgIG1vZHVsZS5QbGF0Zm9ybSA9IG1vZHVsZS5QbGF0Zm9ybSA/PyBDYW52YXNQbGF0Zm9ybTtcbiAgICAgICAgc3VwZXIobW9kdWxlKTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3BhdHRlcm5zJztcbmV4cG9ydCAqIGZyb20gJy4vcGxhdGZvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9lbmdpbmUnO1xuIiwiaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0gfSBmcm9tICdAamVuZy9nZW9tJztcbmxldCBkb21NYXRyaXg7XG5leHBvcnQgdmFyIENhbnZhc1BhdHRlcm5zO1xuKGZ1bmN0aW9uIChDYW52YXNQYXR0ZXJucykge1xuICAgIGZ1bmN0aW9uIGNvbG9yUGF0dGVybihjb2xvciwgYWxwaGEsIGN0KSB7XG4gICAgICAgIGxldCByID0gY29sb3IgPj4gMTYgJiAweGZmO1xuICAgICAgICBsZXQgZyA9IGNvbG9yID4+IDggJiAweGZmO1xuICAgICAgICBsZXQgYiA9IGNvbG9yICYgMHhmZjtcbiAgICAgICAgbGV0IGEgPSBhbHBoYSAqIDB4ZmY7XG4gICAgICAgIGlmICghQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eShjdCkpIHtcbiAgICAgICAgICAgIHIgPSAociAqIGN0LnJlZE11bHRpcGxpZXIgKyBjdC5yZWRPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIGcgPSAoZyAqIGN0LmdyZWVuTXVsdGlwbGllciArIGN0LmdyZWVuT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBiID0gKGIgKiBjdC5ibHVlTXVsdGlwbGllciArIGN0LmJsdWVPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIGEgPSAoYSAqIGN0LmFscGhhTXVsdGlwbGllciArIGN0LmFscGhhT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEgPCAweGZmKSB7XG4gICAgICAgICAgICByZXR1cm4gYHJnYmEoJHtyfSwgJHtnfSwgJHtifSwgJHthIC8gMHhmZn0pYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYHJnYigke3J9LCAke2d9LCAke2J9KWA7XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybiA9IGNvbG9yUGF0dGVybjtcbiAgICBmdW5jdGlvbiBhZGRHcmFkaWVudENvbG9ycyhwYXR0ZXJuLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBjb2xvcnNbaV07XG4gICAgICAgICAgICBjb25zdCBhbHBoYSA9IGFscGhhc1tpXTtcbiAgICAgICAgICAgIGxldCByYXRpbyA9IHJhdGlvc1tpXTtcbiAgICAgICAgICAgIGlmIChyYXRpbyA8IDApXG4gICAgICAgICAgICAgICAgcmF0aW8gPSAwO1xuICAgICAgICAgICAgaWYgKHJhdGlvID4gMSlcbiAgICAgICAgICAgICAgICByYXRpbyA9IDE7XG4gICAgICAgICAgICBjb25zdCBjb2xvclN0eWxlID0gY29sb3JQYXR0ZXJuKGNvbG9yLCBhbHBoYSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgcGF0dGVybi5hZGRDb2xvclN0b3AocmF0aW8sIGNvbG9yU3R5bGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmFkZEdyYWRpZW50Q29sb3JzID0gYWRkR3JhZGllbnRDb2xvcnM7XG4gICAgZnVuY3Rpb24gcmFkaWFsR3JhZGllbnRQYXR0ZXJuKGJlZ2luWCwgYmVnaW5ZLCBiZWdpblJhZGl1cywgZW5kWCwgZW5kWSwgZW5kUmFkaXVzLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudChiZWdpblgsIGJlZ2luWSwgYmVnaW5SYWRpdXMsIGVuZFgsIGVuZFksIGVuZFJhZGl1cyk7XG4gICAgICAgIGFkZEdyYWRpZW50Q29sb3JzKHBhdHRlcm4sIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLnJhZGlhbEdyYWRpZW50UGF0dGVybiA9IHJhZGlhbEdyYWRpZW50UGF0dGVybjtcbiAgICBmdW5jdGlvbiBsaW5lYXJHcmFkaWVudFBhdHRlcm4oYmVnaW5YLCBiZWdpblksIGVuZFgsIGVuZFksIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KGJlZ2luWCwgYmVnaW5ZLCBlbmRYLCBlbmRZKTtcbiAgICAgICAgYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMubGluZWFyR3JhZGllbnRQYXR0ZXJuID0gbGluZWFyR3JhZGllbnRQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGJpdG1hcFBhdHRlcm4oaW1hZ2UsIHJlcGVhdCwgbWF0cml4LCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVBhdHRlcm4oaW1hZ2UsIHJlcGVhdCA/ICdyZXBlYXQnIDogJ25vbmUnKTtcbiAgICAgICAgaWYgKHBhdHRlcm4pIHtcbiAgICAgICAgICAgIGlmICghZG9tTWF0cml4KSB7XG4gICAgICAgICAgICAgICAgZG9tTWF0cml4ID0gbmV3IERPTU1hdHJpeCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9tTWF0cml4LmEgPSBtYXRyaXguYSA/PyAxO1xuICAgICAgICAgICAgZG9tTWF0cml4LmIgPSBtYXRyaXguYiA/PyAwO1xuICAgICAgICAgICAgZG9tTWF0cml4LmMgPSBtYXRyaXguYyA/PyAwO1xuICAgICAgICAgICAgZG9tTWF0cml4LmQgPSBtYXRyaXguZCA/PyAxO1xuICAgICAgICAgICAgZG9tTWF0cml4LmUgPSBtYXRyaXgudHggPz8gMDtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5mID0gbWF0cml4LnR5ID8/IDA7XG4gICAgICAgICAgICBwYXR0ZXJuLnNldFRyYW5zZm9ybShkb21NYXRyaXgpO1xuICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5iaXRtYXBQYXR0ZXJuID0gYml0bWFwUGF0dGVybjtcbn0pKENhbnZhc1BhdHRlcm5zIHx8IChDYW52YXNQYXR0ZXJucyA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuZXhwb3J0IGNsYXNzIENhbnZhc1BsYXRmb3JtIGV4dGVuZHMgUGxhdGZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFt0aGlzLnZpZXcuZ2V0Q29udGV4dCgnMmQnKV07XG4gICAgICAgIHRoaXMuY3VzdG9tQ29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dHNbdGhpcy5jb250ZXh0cy5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgc2F2ZUNvbnRleHQoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHRzLnB1c2goY29udGV4dCk7XG4gICAgfVxuICAgIHJlc3RvcmVDb250ZXh0KCkge1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZGVidWcud2FybmluZygnVHJ5aW5nIHRvIHJlc3RvcmUgbWFpbiBjb250ZXh0Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlQ3VzdG9tQ29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQ7XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbUNvbnRleHRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHRoaXMuY3VzdG9tQ29udGV4dHMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMudmlldztcbiAgICAgICAgaWYgKGNvbnRleHQuY2FudmFzLndpZHRoICE9PSB3aWR0aCkge1xuICAgICAgICAgICAgY29udGV4dC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGV4dC5jYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgZGVzdHJveUN1c3RvbUNvbnRleHQoY29udGV4dCkge1xuICAgICAgICB0aGlzLmN1c3RvbUNvbnRleHRzLnB1c2goY29udGV4dCk7XG4gICAgfVxuICAgIGJlZ2luKCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgY29uc3QgeyB2aWV3IH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHZpZXcud2lkdGgsIHZpZXcuaGVpZ2h0KTtcbiAgICB9XG4gICAgdXBkYXRlU2l6ZSgpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0V2lkdGgoKTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5lbmdpbmUuc2NyZWVuLmdldEhlaWdodCgpO1xuICAgICAgICBjb25zdCBwaXhlbFJhdGlvID0gdGhpcy5lbmdpbmUuc2NyZWVuLmdldFBpeGVsUmF0aW8oKTtcbiAgICAgICAgY29uc3Qgdmlld1dpZHRoID0gTWF0aC5mbG9vcih3aWR0aCAqIHBpeGVsUmF0aW8pO1xuICAgICAgICBjb25zdCB2aWV3SGVpZ2h0ID0gTWF0aC5mbG9vcihoZWlnaHQgKiBwaXhlbFJhdGlvKTtcbiAgICAgICAgY29uc3QgeyB2aWV3IH0gPSB0aGlzO1xuICAgICAgICBpZiAodmlldy53aWR0aCAhPT0gdmlld1dpZHRoIHx8IHZpZXcuaGVpZ2h0ICE9PSB2aWV3SGVpZ2h0KSB7XG4gICAgICAgICAgICB2aWV3LndpZHRoID0gdmlld1dpZHRoO1xuICAgICAgICAgICAgdmlldy5oZWlnaHQgPSB2aWV3SGVpZ2h0O1xuICAgICAgICAgICAgdmlldy5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDT05UQUlORVIgPSAnY29udGFpbmVyJztcbmV4cG9ydCB2YXIgQ29udGFpbmVyO1xuKGZ1bmN0aW9uIChDb250YWluZXIpIHtcbiAgICBmdW5jdGlvbiBudW1DaGlsZHJlbihjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIHJldHVybiBrZXlzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgQ29udGFpbmVyLm51bUNoaWxkcmVuID0gbnVtQ2hpbGRyZW47XG59KShDb250YWluZXIgfHwgKENvbnRhaW5lciA9IHt9KSk7XG5leHBvcnQgdmFyIENvbnRhaW5lckV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ29udGFpbmVyRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyByZW5kZXJlciB9ID0gZW5naW5lO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICByZW5kZXJlci5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyZXIuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZShjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgdXBkYXRlciB9ID0gZW5naW5lO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHVwZGF0ZXIuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIHVwZGF0ZXIudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZXIuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24udXBkYXRlID0gdXBkYXRlO1xuICAgIGZ1bmN0aW9uIGhpdFRlc3QoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHBvaW50ZXJzOiBwb2ludGVyRXZlbnRzIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHBvaW50ZXJFdmVudHMuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgcG9pbnRlckV2ZW50cy5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwb2ludGVyRXZlbnRzLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50ZXJFdmVudHMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGtleXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcG9pbnRlckV2ZW50cy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHMuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBsb2FkZWQoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IGxvYWRpbmcgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gbG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICBsb2FkaW5nLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgKz0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50Q29udGV4dC5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgLz0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGxvYWRpbmcudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSBjb21wb25lbnRDb250ZXh0LnByb2dyZXNzO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gY29tcG9uZW50Q29udGV4dC5sb2FkZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyArPSBjb21wb25lbnRDb250ZXh0LnByb2dyZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnRDb250ZXh0LmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyAvPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9hZGluZy5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLnNldChDT05UQUlORVIsIHVwZGF0ZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoQ09OVEFJTkVSLCByZW5kZXIpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChDT05UQUlORVIsIGhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KENPTlRBSU5FUiwgbG9hZGVkKTtcbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ29udGFpbmVyRXh0ZW5zaW9uIHx8IChDb250YWluZXJFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgQ29udGFpbmVyRXh0ZW5zaW9uIH0gZnJvbSAnLi9jb250YWluZXInO1xuZXhwb3J0IGNvbnN0IExPQURFUiA9ICdsb2FkZXInO1xuZXhwb3J0IHZhciBMb2FkZXI7XG4oZnVuY3Rpb24gKExvYWRlcikge1xuICAgIGZ1bmN0aW9uIGdldExvYWRpbmdQcm9ncmVzcyhsb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRlci5sb2FkaW5nUHJvZ3Jlc3MgPz8gMDtcbiAgICB9XG4gICAgTG9hZGVyLmdldExvYWRpbmdQcm9ncmVzcyA9IGdldExvYWRpbmdQcm9ncmVzcztcbiAgICBmdW5jdGlvbiBpc0xvYWRlZChsb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRlci5sb2FkZWQgPz8gZmFsc2U7XG4gICAgfVxuICAgIExvYWRlci5pc0xvYWRlZCA9IGlzTG9hZGVkO1xuICAgIGZ1bmN0aW9uIG5lZWRMb2FkaW5nQ2hlY2sobG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZGluZ0NoZWNrID8/IHRydWU7XG4gICAgfVxuICAgIExvYWRlci5uZWVkTG9hZGluZ0NoZWNrID0gbmVlZExvYWRpbmdDaGVjaztcbn0pKExvYWRlciB8fCAoTG9hZGVyID0ge30pKTtcbmV4cG9ydCB2YXIgTG9hZGVyRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChMb2FkZXJFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBsb2FkZWQobG9hZGVyLCBlbmdpbmUpIHtcbiAgICAgICAgaWYgKCFMb2FkZXIubmVlZExvYWRpbmdDaGVjayhsb2FkZXIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQ29udGFpbmVyRXh0ZW5zaW9uLmxvYWRlZChsb2FkZXIsIGVuZ2luZSk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUubG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGxvYWRlci5sb2FkaW5nUHJvZ3Jlc3MgPSBjb250ZXh0LnByb2dyZXNzO1xuICAgICAgICBpZiAoY29udGV4dC5sb2FkZWQgJiYgIWxvYWRlci5sb2FkZWQpIHtcbiAgICAgICAgICAgIGxvYWRlci5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGxvYWRlci5vbkxvYWRlZCkge1xuICAgICAgICAgICAgICAgIGxvYWRlci5vbkxvYWRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIExvYWRlckV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLnNldChMT0FERVIsIENvbnRhaW5lckV4dGVuc2lvbi51cGRhdGUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KExPQURFUiwgQ29udGFpbmVyRXh0ZW5zaW9uLnJlbmRlcik7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KExPQURFUiwgQ29udGFpbmVyRXh0ZW5zaW9uLmhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KExPQURFUiwgbG9hZGVkKTtcbiAgICB9XG4gICAgTG9hZGVyRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoTG9hZGVyRXh0ZW5zaW9uIHx8IChMb2FkZXJFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuLi9mZWF0dXJlcy9yZW5kZXJlcic7XG5pbXBvcnQgeyBVcGRhdGVyIH0gZnJvbSAnLi4vZmVhdHVyZXMvdXBkYXRlcic7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi4vZmVhdHVyZXMvbG9hZGluZyc7XG5pbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuLi9mZWF0dXJlcy9zY3JlZW4nO1xuaW1wb3J0IHsgUG9pbnRlcnMgfSBmcm9tICcuLi9mZWF0dXJlcy9wb2ludGVycyc7XG5pbXBvcnQgeyBUaWNrZXIgfSBmcm9tICcuLi9mZWF0dXJlcy90aWNrZXInO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9mZWF0dXJlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDb250YWluZXJFeHRlbnNpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4uL2ZlYXR1cmVzL2RlYnVnJztcbmltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gJy4uL2ZlYXR1cmVzL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi4vZmVhdHVyZXMvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMb2FkZXJFeHRlbnNpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRlcic7XG5leHBvcnQgY2xhc3MgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGUgPSB7fSkge1xuICAgICAgICB0aGlzLmRlcHRoID0gMzI7XG4gICAgICAgIG1vZHVsZS5Db21wb25lbnRzID0gbW9kdWxlLkNvbXBvbmVudHMgPz8gQ29tcG9uZW50cztcbiAgICAgICAgbW9kdWxlLlNjcmVlbiA9IG1vZHVsZS5TY3JlZW4gPz8gU2NyZWVuO1xuICAgICAgICBtb2R1bGUuUGxhdGZvcm0gPSBtb2R1bGUuUGxhdGZvcm0gPz8gUGxhdGZvcm07XG4gICAgICAgIG1vZHVsZS5VcGRhdGVyID0gbW9kdWxlLlVwZGF0ZXIgPz8gVXBkYXRlcjtcbiAgICAgICAgbW9kdWxlLkxvYWRpbmcgPSBtb2R1bGUuTG9hZGluZyA/PyBMb2FkaW5nO1xuICAgICAgICBtb2R1bGUuUmVuZGVyZXIgPSBtb2R1bGUuUmVuZGVyZXIgPz8gUmVuZGVyZXI7XG4gICAgICAgIG1vZHVsZS5Qb2ludGVycyA9IG1vZHVsZS5Qb2ludGVycyA/PyBQb2ludGVycztcbiAgICAgICAgbW9kdWxlLlRpY2tlciA9IG1vZHVsZS5UaWNrZXIgPz8gVGlja2VyO1xuICAgICAgICBtb2R1bGUuRGVidWcgPSBtb2R1bGUuRGVidWcgPz8gRGVidWc7XG4gICAgICAgIG1vZHVsZS5SZXNvdXJjZXMgPSBtb2R1bGUuUmVzb3VyY2VzID8/IFJlc291cmNlcztcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gbmV3IG1vZHVsZS5Db21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IG1vZHVsZS5TY3JlZW4oKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybSA9IG5ldyBtb2R1bGUuUGxhdGZvcm0odGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlciA9IG5ldyBtb2R1bGUuVXBkYXRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gbmV3IG1vZHVsZS5Mb2FkaW5nKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IG1vZHVsZS5SZW5kZXJlcih0aGlzKTtcbiAgICAgICAgdGhpcy5wb2ludGVycyA9IG5ldyBtb2R1bGUuUG9pbnRlcnModGhpcyk7XG4gICAgICAgIHRoaXMudGlja2VyID0gbmV3IG1vZHVsZS5UaWNrZXIodGhpcyk7XG4gICAgICAgIHRoaXMuZGVidWcgPSBuZXcgbW9kdWxlLkRlYnVnKCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IG1vZHVsZS5SZXNvdXJjZXModGhpcyk7XG4gICAgICAgIENvbnRhaW5lckV4dGVuc2lvbi5pbml0KHRoaXMpO1xuICAgICAgICBMb2FkZXJFeHRlbnNpb24uaW5pdCh0aGlzKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoZW5naW5lKSB7XG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgIH1cbn1cbiIsImV4cG9ydCB2YXIgRGlzcGxheTtcbihmdW5jdGlvbiAoRGlzcGxheSkge1xuICAgIGZ1bmN0aW9uIGlzVmlzaWJsZShjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC52aXNpYmxlID8/IHRydWU7XG4gICAgfVxuICAgIERpc3BsYXkuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xufSkoRGlzcGxheSB8fCAoRGlzcGxheSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFBpdm90O1xuKGZ1bmN0aW9uIChQaXZvdCkge1xuICAgIGZ1bmN0aW9uIGdldFgocGl2b3QsIHdpZHRoKSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RYIH0gPSBwaXZvdDtcbiAgICAgICAgaWYgKHBpdm90WCkge1xuICAgICAgICAgICAgcmV0dXJuIC1waXZvdFggKiB3aWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgUGl2b3QuZ2V0WCA9IGdldFg7XG4gICAgZnVuY3Rpb24gZ2V0WShwaXZvdCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RZIH0gPSBwaXZvdDtcbiAgICAgICAgaWYgKHBpdm90WSkge1xuICAgICAgICAgICAgcmV0dXJuIC1waXZvdFkgKiBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFkgPSBnZXRZO1xuICAgIGZ1bmN0aW9uIGhhc1ZhbHVlcyhwaXZvdCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WCwgcGl2b3RZIH0gPSBwaXZvdDtcbiAgICAgICAgcmV0dXJuICEhcGl2b3RYIHx8ICEhcGl2b3RZO1xuICAgIH1cbiAgICBQaXZvdC5oYXNWYWx1ZXMgPSBoYXNWYWx1ZXM7XG59KShQaXZvdCB8fCAoUGl2b3QgPSB7fSkpO1xuIiwiY29uc3QgaGFuZGxlcnNNYXAgPSB7XG4gICAgcG9pbnRlckRvd246ICdvblBvaW50ZXJEb3duJyxcbiAgICBwb2ludGVyVXA6ICdvblBvaW50ZXJVcCcsXG4gICAgcG9pbnRlck1vdmU6ICdvblBvaW50ZXJNb3ZlJyxcbiAgICBwb2ludGVyT3ZlcjogJ29uUG9pbnRlck92ZXInLFxuICAgIHBvaW50ZXJPdXQ6ICdvblBvaW50ZXJPdXQnLFxufTtcbmV4cG9ydCB2YXIgUG9pbnRlcjtcbihmdW5jdGlvbiAoUG9pbnRlcikge1xuICAgIGZ1bmN0aW9uIGlzUG9pbnRlck92ZXIocG9pbnRlcikge1xuICAgICAgICByZXR1cm4gISFwb2ludGVyLnBvaW50ZXJPdmVyO1xuICAgIH1cbiAgICBQb2ludGVyLmlzUG9pbnRlck92ZXIgPSBpc1BvaW50ZXJPdmVyO1xuICAgIGZ1bmN0aW9uIGlzUG9pbnRlckVuYWJsZWQocG9pbnRlcikge1xuICAgICAgICByZXR1cm4gcG9pbnRlci5wb2ludGVyRW5hYmxlZCA/PyB0cnVlO1xuICAgIH1cbiAgICBQb2ludGVyLmlzUG9pbnRlckVuYWJsZWQgPSBpc1BvaW50ZXJFbmFibGVkO1xuICAgIGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQocG9pbnRlciwgdHlwZSwgeCwgeSwgaWQpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlck5hbWUgPSBoYW5kbGVyc01hcFt0eXBlXTtcbiAgICAgICAgaWYgKGhhbmRsZXJOYW1lICYmIHBvaW50ZXJbaGFuZGxlck5hbWVdKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlLCB4LCB5LCBpZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwb2ludGVyW2hhbmRsZXJOYW1lXShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbn0pKFBvaW50ZXIgfHwgKFBvaW50ZXIgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBUcmFuc2Zvcm07XG4oZnVuY3Rpb24gKFRyYW5zZm9ybSkge1xuICAgIGZ1bmN0aW9uIGdldE1hdHJpeCh0cmFuc2Zvcm0sIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAobWF0cml4KSB7XG4gICAgICAgICAgICByZXN1bHQuYSA9IG1hdHJpeC5hID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYiA9IG1hdHJpeC5iID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuYyA9IG1hdHJpeC5jID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuZCA9IG1hdHJpeC5kID8/IDE7XG4gICAgICAgICAgICByZXN1bHQudHggPSBtYXRyaXgudHggPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IG1hdHJpeC50eSA/PyAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm90YXRpb24gfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gdHJhbnNmb3JtLnNjYWxlWCA/PyB0cmFuc2Zvcm0uc2NhbGUgPz8gMTtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gdHJhbnNmb3JtLnNjYWxlWSA/PyB0cmFuc2Zvcm0uc2NhbGUgPz8gMTtcbiAgICAgICAgcmVzdWx0LnR4ID0gdHJhbnNmb3JtLnggPz8gMDtcbiAgICAgICAgcmVzdWx0LnR5ID0gdHJhbnNmb3JtLnkgPz8gMDtcbiAgICAgICAgaWYgKHJvdGF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gICAgICAgICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihyb3RhdGlvbik7XG4gICAgICAgICAgICByZXN1bHQuYSA9IGNvcyAqIHNjYWxlWDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gc2luICogc2NhbGVYO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAtc2luICogc2NhbGVZO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBjb3MgKiBzY2FsZVk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmEgPSBzY2FsZVg7XG4gICAgICAgIHJlc3VsdC5iID0gMDtcbiAgICAgICAgcmVzdWx0LmMgPSAwO1xuICAgICAgICByZXN1bHQuZCA9IHNjYWxlWTtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldE1hdHJpeCA9IGdldE1hdHJpeDtcbiAgICBmdW5jdGlvbiBnZXRDb2xvclRyYW5zZm9ybSh0cmFuc2Zvcm0sIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybSkge1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5yZWRNdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5NdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5ibHVlTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5yZWRPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmJsdWVPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbHBoYSA9IHRyYW5zZm9ybS5hbHBoYSA/PyAxO1xuICAgICAgICBjb25zdCB7IHRpbnQgfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKHRpbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY29sb3IgPSAwLCB2YWx1ZSA9IDEgfSA9IHRpbnQ7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZUludmVydGVkID0gMSAtIHZhbHVlO1xuICAgICAgICAgICAgY29uc3QgciA9IChjb2xvciA+PiAxNikgJiAweGZmO1xuICAgICAgICAgICAgY29uc3QgZyA9IChjb2xvciA+PiA4KSAmIDB4ZmY7XG4gICAgICAgICAgICBjb25zdCBiID0gY29sb3IgJiAweGZmO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGFscGhhO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IHZhbHVlSW52ZXJ0ZWQ7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSByICogdmFsdWU7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBnICogdmFsdWU7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGIgKiB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgeyBicmlnaHRuZXNzIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChicmlnaHRuZXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChicmlnaHRuZXNzID4gMSkge1xuICAgICAgICAgICAgICAgIGJyaWdodG5lc3MgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYnJpZ2h0bmVzcyA8IC0xKSB7XG4gICAgICAgICAgICAgICAgYnJpZ2h0bmVzcyA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IDEgLSBNYXRoLmFicyhicmlnaHRuZXNzKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgaWYgKGJyaWdodG5lc3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gYnJpZ2h0bmVzcyAqIDI1NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYTtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gcGVyY2VudDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSBwZXJjZW50O1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gcGVyY2VudDtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGFscGhhO1xuICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSAxO1xuICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSAxO1xuICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gMDtcbiAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gMDtcbiAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSAwO1xuICAgIH1cbiAgICBUcmFuc2Zvcm0uZ2V0Q29sb3JUcmFuc2Zvcm0gPSBnZXRDb2xvclRyYW5zZm9ybTtcbn0pKFRyYW5zZm9ybSB8fCAoVHJhbnNmb3JtID0ge30pKTtcbiIsImV4cG9ydCB2YXIgVXBkYXRlO1xuKGZ1bmN0aW9uIChVcGRhdGUpIHtcbiAgICBmdW5jdGlvbiBpc0VuYWJsZWQoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuZW5hYmxlZCA/PyB0cnVlO1xuICAgIH1cbiAgICBVcGRhdGUuaXNFbmFibGVkID0gaXNFbmFibGVkO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZShjb21wb25lbnQsIHRpbWUpIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5vblVwZGF0ZSkge1xuICAgICAgICAgICAgY29tcG9uZW50Lm9uVXBkYXRlKHRpbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFVwZGF0ZS51cGRhdGUgPSB1cGRhdGU7XG59KShVcGRhdGUgfHwgKFVwZGF0ZSA9IHt9KSk7XG4iLCJleHBvcnQgY2xhc3MgQ29tcG9uZW50cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmhpdFRlc3QgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMubG9hZGVkID0gbmV3IE1hcCgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBEZWJ1ZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLndhcm5pbmdzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBsb2coLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuICAgIH1cbiAgICBlcnJvciguLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoYXJncyk7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuZXJyb3JzLmdldChpZCk7XG4gICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgdGhpcy5lcnJvcnMuc2V0KGlkLCBjb3VudCk7XG4gICAgfVxuICAgIHdhcm5pbmcoLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLndhcm5pbmdzLmdldChpZCk7XG4gICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICB0aGlzLndhcm5pbmdzLnNldChpZCwgY291bnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXTtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXSA9IGNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIHVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KHJvb3QpO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydFRpbWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgUGxhdGZvcm0gZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgfVxuICAgIGJlZ2luKCkge1xuICAgIH1cbiAgICBlbmQoKSB7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTWF0cml4LCBQb2ludCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvZGlzcGxheSc7XG5pbXBvcnQgeyBQb2ludGVyIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy9wb2ludGVyJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdHJhbnNmb3JtJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFBvaW50ZXJzIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmdsb2JhbCA9IFBvaW50LmVtcHR5KCk7XG4gICAgICAgIHRoaXMubG9jYWwgPSBQb2ludC5lbXB0eSgpO1xuICAgICAgICB0aGlzLnBvaW50ZXJJZCA9IDA7XG4gICAgICAgIHRoaXMucG9pbnRlclR5cGUgPSAncG9pbnRlckRvd24nO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXTtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIG1hdHJpeDogTWF0cml4LmVtcHR5KCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXSA9IGNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIGRpc3BhdGNoKHR5cGUsIHgsIHksIGlkKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2NhbC54ID0geDtcbiAgICAgICAgdGhpcy5sb2NhbC55ID0geTtcbiAgICAgICAgdGhpcy5nbG9iYWwueCA9IHg7XG4gICAgICAgIHRoaXMuZ2xvYmFsLnkgPSB5O1xuICAgICAgICB0aGlzLnBvaW50ZXJJZCA9IGlkO1xuICAgICAgICB0aGlzLnBvaW50ZXJUeXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgTWF0cml4LnNldEVtcHR5KGJhc2UubWF0cml4KTtcbiAgICAgICAgdGhpcy5kZXB0aCsrO1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ29tcG9uZW50KHJvb3QsIGJhc2UpO1xuICAgIH1cbiAgICBkaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFEaXNwbGF5LmlzVmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFQb2ludGVyLmlzUG9pbnRlckVuYWJsZWQoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3QuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIFRyYW5zZm9ybS5nZXRNYXRyaXgoY29tcG9uZW50LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgICAgICBNYXRyaXguY29uY2F0KHBhcmVudC5tYXRyaXgsIGNvbnRleHQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50KGNvbnRleHQubWF0cml4LCB0aGlzLmdsb2JhbCwgdGhpcy5sb2NhbCk7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMubG9jYWw7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsIHRoaXMucG9pbnRlclR5cGUsIHgsIHksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJUeXBlID09PSAncG9pbnRlck1vdmUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiAhY29tcG9uZW50LnBvaW50ZXJPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3ZlcicsIHgsIHksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXJlc3VsdCAmJiBjb21wb25lbnQucG9pbnRlck92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdXQnLCB4LCB5LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wb2ludGVyT3ZlciA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXggfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuLi9leHRlbnNpb25zL2Rpc3BsYXknO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgUmVuZGVyZXIgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXTtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIG1hdHJpeDogTWF0cml4LmVtcHR5KCksXG4gICAgICAgICAgICAgICAgY29sb3JUcmFuc2Zvcm06IENvbG9yVHJhbnNmb3JtLmVtcHR5KCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXSA9IGNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFEaXNwbGF5LmlzVmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBUcmFuc2Zvcm0uZ2V0TWF0cml4KGNvbXBvbmVudCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICBUcmFuc2Zvcm0uZ2V0Q29sb3JUcmFuc2Zvcm0oY29tcG9uZW50LCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgTWF0cml4LmNvbmNhdChwYXJlbnQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICBDb2xvclRyYW5zZm9ybS5jb25jYXQocGFyZW50LmNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy5lbmdpbmUucGxhdGZvcm0uYmVnaW4oKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5kZXB0aCsrO1xuICAgICAgICBNYXRyaXguY29weSh0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0TWF0cml4KCksIGJhc2UubWF0cml4KTtcbiAgICAgICAgQ29sb3JUcmFuc2Zvcm0uc2V0RW1wdHkoYmFzZS5jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50KHJvb3QsIGJhc2UpO1xuICAgICAgICB0aGlzLmVuZ2luZS5wbGF0Zm9ybS5lbmQoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IHZhciBSZXNvdXJjZTtcbihmdW5jdGlvbiAoUmVzb3VyY2UpIHtcbiAgICBmdW5jdGlvbiBnZXRQcm9ncmVzcyhyZXNvdXJjZSkge1xuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzb3VyY2UubG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzb3VyY2UuYnl0ZXNUb3RhbCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvdXJjZS5ieXRlc0xvYWRlZCAvIHJlc291cmNlLmJ5dGVzVG90YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFJlc291cmNlLmdldFByb2dyZXNzID0gZ2V0UHJvZ3Jlc3M7XG59KShSZXNvdXJjZSB8fCAoUmVzb3VyY2UgPSB7fSkpO1xuZXhwb3J0IGNsYXNzIFJlc291cmNlcyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZXNvbHZlcnMgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIGdldChhc3NldCkge1xuICAgICAgICBpZiAoIWFzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzb3VyY2UgPSB0aGlzLnJlc291cmNlcy5nZXQoYXNzZXQpO1xuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICByZXNvdXJjZSA9IHRoaXMucmVzb2x2ZShhc3NldCk7XG4gICAgICAgICAgICB0aGlzLnJlc291cmNlcy5zZXQoYXNzZXQsIHJlc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgfVxuICAgIHJlc29sdmUoYXNzZXQpIHtcbiAgICAgICAgZm9yIChjb25zdCByZXNvbHZlciBvZiB0aGlzLnJlc29sdmVycykge1xuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSByZXNvbHZlcihhc3NldCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgaWYgKHJlc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5naW5lLmRlYnVnLndhcm5pbmcoYFJlc291cmNlIG5vdCByZXNvbHZlZDogJHthc3NldH1gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IDQwMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA0MDA7XG4gICAgICAgIHRoaXMucGl4ZWxSYXRpbyA9IDA7XG4gICAgICAgIHRoaXMuZnVsbHNjcmVlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1hdHJpeCA9IE1hdHJpeC5lbXB0eSgpO1xuICAgIH1cbiAgICBnZXRNYXRyaXgoKSB7XG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW8gPSB0aGlzLmdldFBpeGVsUmF0aW8oKTtcbiAgICAgICAgdGhpcy5tYXRyaXguYSA9IHBpeGVsUmF0aW87XG4gICAgICAgIHRoaXMubWF0cml4LmQgPSBwaXhlbFJhdGlvO1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gICAgfVxuICAgIGdldFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuID8gd2luZG93LmlubmVyV2lkdGggOiB0aGlzLndpZHRoO1xuICAgIH1cbiAgICBnZXRIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZ1bGxzY3JlZW4gPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB0aGlzLmhlaWdodDtcbiAgICB9XG4gICAgZ2V0UGl4ZWxSYXRpbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGl4ZWxSYXRpbyA+IDAgPyB0aGlzLnBpeGVsUmF0aW8gOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA/PyAxO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUaWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xuICAgICAgICB0aGlzLmZyYW1lUmF0ZSA9IDA7XG4gICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGUgPSAodGltZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbmdpbmUudXBkYXRlci51cGRhdGUodGltZSk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5sb2FkaW5nLnVwZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVuZGVyZXIucmVuZGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlRnJhbWUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gKGN1cnJlbnRUaW1lIC0gdGhpcy50aW1lKSAvIDEwMDA7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKGRlbHRhVGltZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU5leHRGcmFtZSgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB9XG4gICAgZ2V0IGlzUGF1c2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXVzZWQ7XG4gICAgfVxuICAgIHBsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOZXh0RnJhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdXBkYXRlTmV4dEZyYW1lKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVGcmFtZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVXBkYXRlIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy91cGRhdGUnO1xuaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgVXBkYXRlciBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChyb290KTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbiAgICB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVVwZGF0ZS5pc0VuYWJsZWQoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllcyhjb21wb25lbnQpO1xuICAgICAgICBVcGRhdGUudXBkYXRlKGNvbXBvbmVudCwgdGhpcy50aW1lKTtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVByb3BlcnRpZXMoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZW5naW5lLmNvbXBvbmVudHMucHJvcGVydGllcy5mb3JFYWNoKChoYW5kbGVyLCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudFtwcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2xvYWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvZW5naW5lJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvY29tcG9uZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL2RlYnVnJztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcGxhdGZvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9wb2ludGVycyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3JlbmRlcmVyJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcmVzb3VyY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvc2NyZWVuJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvdGlja2VyJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvdXBkYXRlcic7XG5leHBvcnQgKiBmcm9tICcuL2lucHV0L21vdXNlJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9kaXNwbGF5JztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9waXZvdCc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvc291cmNlJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy90cmFuc2Zvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3VwZGF0ZSc7XG4iLCJmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsIHR5cGUpIHtcbiAgICBjb25zdCB7IHZpZXcgfSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICBjb25zdCBjbGllbnRSZWN0ID0gdmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIGNsaWVudFJlY3QubGVmdCAtIHZpZXcuY2xpZW50TGVmdDtcbiAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIGNsaWVudFJlY3QudG9wIC0gdmlldy5jbGllbnRUb3A7XG4gICAgZW5naW5lLnBvaW50ZXJzLmRpc3BhdGNoKHR5cGUsIHgsIHksIDApO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5leHBvcnQgdmFyIE1vdXNlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChNb3VzZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gZW5naW5lLnBsYXRmb3JtO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckRvd24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlclVwJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlck1vdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE1vdXNlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoTW91c2VFeHRlbnNpb24gfHwgKE1vdXNlRXh0ZW5zaW9uID0ge30pKTtcbiIsImV4cG9ydCB2YXIgQm91bmRzO1xuKGZ1bmN0aW9uIChCb3VuZHMpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1pblg6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtaW5ZOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWF4WDogTnVtYmVyLk1JTl9WQUxVRSxcbiAgICAgICAgICAgIG1heFk6IE51bWJlci5NSU5fVkFMVUUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIEJvdW5kcy5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KGJvdW5kcykge1xuICAgICAgICBib3VuZHMubWluWCA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGJvdW5kcy5taW5ZID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1heFggPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWF4WSA9IE51bWJlci5NSU5fVkFMVUU7XG4gICAgfVxuICAgIEJvdW5kcy5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkoYm91bmRzKSB7XG4gICAgICAgIHJldHVybiBib3VuZHMubWluWCA9PT0gTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1pblkgPT09IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5tYXhYID09PSBOdW1iZXIuTUlOX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWF4WSA9PT0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICB9XG4gICAgQm91bmRzLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIHRvUmVjdGFuZ2xlKGJvdW5kcywgcmVjdGFuZ2xlKSB7XG4gICAgICAgIGNvbnN0IHsgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgfSA9IGJvdW5kcztcbiAgICAgICAgcmVjdGFuZ2xlLnggPSBtaW5YO1xuICAgICAgICByZWN0YW5nbGUueSA9IG1pblk7XG4gICAgICAgIHJlY3RhbmdsZS53aWR0aCA9IG1heFggLSBtaW5YO1xuICAgICAgICByZWN0YW5nbGUuaGVpZ2h0ID0gbWF4WSAtIG1pblk7XG4gICAgfVxuICAgIEJvdW5kcy50b1JlY3RhbmdsZSA9IHRvUmVjdGFuZ2xlO1xuICAgIGZ1bmN0aW9uIHRlc3RYKGJvdW5kcywgeCkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RYID0gdGVzdFg7XG4gICAgZnVuY3Rpb24gdGVzdFkoYm91bmRzLCB5KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFkgPSB0ZXN0WTtcbiAgICBmdW5jdGlvbiB0ZXN0KGJvdW5kcywgeCwgeSkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0ID0gdGVzdDtcbiAgICBmdW5jdGlvbiB0ZXN0UG9pbnQoYm91bmRzLCBwb2ludCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0UG9pbnQgPSB0ZXN0UG9pbnQ7XG59KShCb3VuZHMgfHwgKEJvdW5kcyA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIENvbG9yVHJhbnNmb3JtO1xuKGZ1bmN0aW9uIChDb2xvclRyYW5zZm9ybSkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxwaGFNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgcmVkTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGdyZWVuTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGJsdWVNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYWxwaGFPZmZzZXQ6IDAsXG4gICAgICAgICAgICByZWRPZmZzZXQ6IDAsXG4gICAgICAgICAgICBncmVlbk9mZnNldDogMCxcbiAgICAgICAgICAgIGJsdWVPZmZzZXQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShjdCkge1xuICAgICAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5NdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ibHVlTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYWxwaGFNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5yZWRPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmdyZWVuT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ibHVlT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU9mZnNldCA9PT0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eVdpdGhBbHBoYShjdCkge1xuICAgICAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5NdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ibHVlTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYmx1ZU9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmlzRW1wdHlXaXRoQWxwaGEgPSBpc0VtcHR5V2l0aEFscGhhO1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KGN0KSB7XG4gICAgICAgIGN0LnJlZE11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5ncmVlbk11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5ibHVlTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LmFscGhhTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LnJlZE9mZnNldCA9IDA7XG4gICAgICAgIGN0LmdyZWVuT2Zmc2V0ID0gMDtcbiAgICAgICAgY3QuYmx1ZU9mZnNldCA9IDA7XG4gICAgICAgIGN0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KGZyb20sIHRvKSB7XG4gICAgICAgIHRvLmFscGhhTXVsdGlwbGllciA9IGZyb20uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICB0by5yZWRNdWx0aXBsaWVyID0gZnJvbS5yZWRNdWx0aXBsaWVyO1xuICAgICAgICB0by5ncmVlbk11bHRpcGxpZXIgPSBmcm9tLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgdG8uYmx1ZU11bHRpcGxpZXIgPSBmcm9tLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICB0by5hbHBoYU9mZnNldCA9IGZyb20uYWxwaGFPZmZzZXQ7XG4gICAgICAgIHRvLnJlZE9mZnNldCA9IGZyb20ucmVkT2Zmc2V0O1xuICAgICAgICB0by5ncmVlbk9mZnNldCA9IGZyb20uZ3JlZW5PZmZzZXQ7XG4gICAgICAgIHRvLmJsdWVPZmZzZXQgPSBmcm9tLmJsdWVPZmZzZXQ7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIGNvbmNhdChjdDEsIGN0MCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGFscGhhTXVsdGlwbGllciA9IGN0MS5hbHBoYU11bHRpcGxpZXIgKiBjdDAuYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCByZWRNdWx0aXBsaWVyID0gY3QxLnJlZE11bHRpcGxpZXIgKiBjdDAucmVkTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgZ3JlZW5NdWx0aXBsaWVyID0gY3QxLmdyZWVuTXVsdGlwbGllciAqIGN0MC5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGJsdWVNdWx0aXBsaWVyID0gY3QxLmJsdWVNdWx0aXBsaWVyICogY3QwLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBhbHBoYU9mZnNldCA9IGN0MS5hbHBoYU11bHRpcGxpZXIgKiBjdDAuYWxwaGFPZmZzZXQgKyBjdDEuYWxwaGFPZmZzZXQ7XG4gICAgICAgIGNvbnN0IHJlZE9mZnNldCA9IGN0MS5yZWRNdWx0aXBsaWVyICogY3QwLnJlZE9mZnNldCArIGN0MS5yZWRPZmZzZXQ7XG4gICAgICAgIGNvbnN0IGdyZWVuT2Zmc2V0ID0gY3QxLmdyZWVuTXVsdGlwbGllciAqIGN0MC5ncmVlbk9mZnNldCArIGN0MS5ncmVlbk9mZnNldDtcbiAgICAgICAgY29uc3QgYmx1ZU9mZnNldCA9IGN0MS5ibHVlTXVsdGlwbGllciAqIGN0MC5ibHVlT2Zmc2V0ICsgY3QxLmJsdWVPZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gcmVkTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IGdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IGFscGhhT2Zmc2V0O1xuICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gcmVkT2Zmc2V0O1xuICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBncmVlbk9mZnNldDtcbiAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBibHVlT2Zmc2V0O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5jb25jYXQgPSBjb25jYXQ7XG59KShDb2xvclRyYW5zZm9ybSB8fCAoQ29sb3JUcmFuc2Zvcm0gPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9jb2xvci10cmFuc2Zvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9ib3VuZHMnO1xuZXhwb3J0ICogZnJvbSAnLi9tYXRyaXgnO1xuZXhwb3J0ICogZnJvbSAnLi9wb2ludCc7XG5leHBvcnQgKiBmcm9tICcuL3JlY3RhbmdsZSc7XG4iLCJleHBvcnQgdmFyIE1hdHJpeDtcbihmdW5jdGlvbiAoTWF0cml4KSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiAxLFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGM6IDAsXG4gICAgICAgICAgICBkOiAxLFxuICAgICAgICAgICAgdHg6IDAsXG4gICAgICAgICAgICB0eTogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTWF0cml4LmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShtYXRyaXgpIHtcbiAgICAgICAgcmV0dXJuIG1hdHJpeC5hID09PSAxXG4gICAgICAgICAgICAmJiBtYXRyaXguYiA9PT0gMFxuICAgICAgICAgICAgJiYgbWF0cml4LmMgPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC5kID09PSAxXG4gICAgICAgICAgICAmJiBtYXRyaXgudHggPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC50eSA9PT0gMDtcbiAgICB9XG4gICAgTWF0cml4LmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KG1hdHJpeCkge1xuICAgICAgICBtYXRyaXguYSA9IDE7XG4gICAgICAgIG1hdHJpeC5iID0gMDtcbiAgICAgICAgbWF0cml4LmMgPSAwO1xuICAgICAgICBtYXRyaXguZCA9IDE7XG4gICAgICAgIG1hdHJpeC50eCA9IDA7XG4gICAgICAgIG1hdHJpeC50eSA9IDA7XG4gICAgfVxuICAgIE1hdHJpeC5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoZnJvbSwgdG8pIHtcbiAgICAgICAgdG8uYSA9IGZyb20uYTtcbiAgICAgICAgdG8uYiA9IGZyb20uYjtcbiAgICAgICAgdG8uYyA9IGZyb20uYztcbiAgICAgICAgdG8uZCA9IGZyb20uZDtcbiAgICAgICAgdG8udHggPSBmcm9tLnR4O1xuICAgICAgICB0by50eSA9IGZyb20udHk7XG4gICAgfVxuICAgIE1hdHJpeC5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBjb25jYXQobWF0cml4MCwgbWF0cml4MSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGEgPSBtYXRyaXgxLmEgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmM7XG4gICAgICAgIGNvbnN0IGIgPSBtYXRyaXgxLmEgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmQ7XG4gICAgICAgIGNvbnN0IGMgPSBtYXRyaXgxLmMgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmM7XG4gICAgICAgIGNvbnN0IGQgPSBtYXRyaXgxLmMgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmQ7XG4gICAgICAgIGNvbnN0IHR4ID0gbWF0cml4MS50eCAqIG1hdHJpeDAuYSArIG1hdHJpeDEudHkgKiBtYXRyaXgwLmMgKyBtYXRyaXgwLnR4O1xuICAgICAgICBjb25zdCB0eSA9IG1hdHJpeDEudHggKiBtYXRyaXgwLmIgKyBtYXRyaXgxLnR5ICogbWF0cml4MC5kICsgbWF0cml4MC50eTtcbiAgICAgICAgcmVzdWx0LmEgPSBhO1xuICAgICAgICByZXN1bHQuYiA9IGI7XG4gICAgICAgIHJlc3VsdC5jID0gYztcbiAgICAgICAgcmVzdWx0LmQgPSBkO1xuICAgICAgICByZXN1bHQudHggPSB0eDtcbiAgICAgICAgcmVzdWx0LnR5ID0gdHk7XG4gICAgfVxuICAgIE1hdHJpeC5jb25jYXQgPSBjb25jYXQ7XG4gICAgZnVuY3Rpb24gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KSB7XG4gICAgICAgIHJldHVybiBtYXRyaXguYSAqIG1hdHJpeC5kIC0gbWF0cml4LmIgKiBtYXRyaXguYztcbiAgICB9XG4gICAgTWF0cml4LmdldERldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQ7XG4gICAgZnVuY3Rpb24gaW52ZXJ0KG1hdHJpeCwgcmVzdWx0KSB7XG4gICAgICAgIGxldCBkZXRlcm1pbmFudCA9IGdldERldGVybWluYW50KG1hdHJpeCk7XG4gICAgICAgIGlmIChkZXRlcm1pbmFudCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0LmEgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gLW1hdHJpeC50eDtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IC1tYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCA9IDEuMCAvIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBtYXRyaXguYSAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmIgPSAtbWF0cml4LmIgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gLW1hdHJpeC5jICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuZCA9IG1hdHJpeC5kICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQudHggPSAtcmVzdWx0LmEgKiBtYXRyaXgudHggLSByZXN1bHQuYyAqIG1hdHJpeC50eTtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IC1yZXN1bHQuYiAqIG1hdHJpeC50eCAtIHJlc3VsdC5kICogbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hdHJpeC5pbnZlcnQgPSBpbnZlcnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJlc3VsdC54ID0geCAqIG1hdHJpeC5hICsgeSAqIG1hdHJpeC5jICsgbWF0cml4LnR4O1xuICAgICAgICByZXN1bHQueSA9IHggKiBtYXRyaXguYiArIHkgKiBtYXRyaXguZCArIG1hdHJpeC50eTtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybVBvaW50ID0gdHJhbnNmb3JtUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnRMb2NhbChtYXRyaXgsIHBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmVzdWx0LnggPSB4ICogbWF0cml4LmEgKyB5ICogbWF0cml4LmM7XG4gICAgICAgIHJlc3VsdC55ID0geCAqIG1hdHJpeC5iICsgeSAqIG1hdHJpeC5kO1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnRMb2NhbCA9IHRyYW5zZm9ybVBvaW50TG9jYWw7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtSW52ZXJzZVBvaW50KG1hdHJpeCwgcG9pbnQsIHJlc3VsdCkge1xuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudChtYXRyaXgpO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC54ID0gLW1hdHJpeC50eDtcbiAgICAgICAgICAgIHJlc3VsdC55ID0gLW1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRldGVybWluYW50ID0gMSAvIGRldGVybWluYW50O1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgICAgIHJlc3VsdC54ID0gZGV0ZXJtaW5hbnQgKiAobWF0cml4LmMgKiAobWF0cml4LnR5IC0geSkgKyBtYXRyaXguZCAqICh4IC0gbWF0cml4LnR4KSk7XG4gICAgICAgICAgICByZXN1bHQueSA9IGRldGVybWluYW50ICogKG1hdHJpeC5hICogKHkgLSBtYXRyaXgudHkpICsgbWF0cml4LmIgKiAobWF0cml4LnR4IC0geCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1JbnZlcnNlUG9pbnQgPSB0cmFuc2Zvcm1JbnZlcnNlUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtQm91bmRzKG1hdHJpeCwgYm91bmRzLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBhLCBiLCBjLCBkLCB0eCwgdHksIH0gPSBtYXRyaXg7XG4gICAgICAgIGNvbnN0IHJ4ID0gYm91bmRzLng7XG4gICAgICAgIGNvbnN0IHJ5ID0gYm91bmRzLnk7XG4gICAgICAgIGNvbnN0IHJyID0gcnggKyBib3VuZHMud2lkdGg7XG4gICAgICAgIGNvbnN0IHJiID0gcnkgKyBib3VuZHMuaGVpZ2h0O1xuICAgICAgICBjb25zdCBueDEgPSByeCAqIGEgKyByeSAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkxID0gcnggKiBiICsgcnkgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54MiA9IHJyICogYSArIHJ5ICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTIgPSByciAqIGIgKyByeSAqIGQgKyB0eTtcbiAgICAgICAgY29uc3QgbngzID0gcnIgKiBhICsgcmIgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MyA9IHJyICogYiArIHJiICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDQgPSByeCAqIGEgKyByYiAqIGMgKyB0eDtcbiAgICAgICAgY29uc3Qgbnk0ID0gcnggKiBiICsgcmIgKiBkICsgdHk7XG4gICAgICAgIGxldCBsZWZ0ID0gbngxO1xuICAgICAgICBpZiAobGVmdCA+IG54Mikge1xuICAgICAgICAgICAgbGVmdCA9IG54MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54Mykge1xuICAgICAgICAgICAgbGVmdCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54NCkge1xuICAgICAgICAgICAgbGVmdCA9IG54NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9wID0gbnkxO1xuICAgICAgICBpZiAodG9wID4gbnkyKSB7XG4gICAgICAgICAgICB0b3AgPSBueTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcCA+IG55Mykge1xuICAgICAgICAgICAgdG9wID0gbnkzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3AgPiBueTQpIHtcbiAgICAgICAgICAgIHRvcCA9IG55NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmlnaHQgPSBueDE7XG4gICAgICAgIGlmIChyaWdodCA8IG54Mikge1xuICAgICAgICAgICAgcmlnaHQgPSBueDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0IDwgbngzKSB7XG4gICAgICAgICAgICByaWdodCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgPCBueDQpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbng0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBib3R0b20gPSBueTE7XG4gICAgICAgIGlmIChib3R0b20gPCBueTIpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tIDwgbnkzKSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdHRvbSA8IG55NCkge1xuICAgICAgICAgICAgYm90dG9tID0gbnk0O1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC54ID0gbGVmdDtcbiAgICAgICAgcmVzdWx0LnkgPSB0b3A7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGJvdHRvbSAtIHRvcDtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybUJvdW5kcyA9IHRyYW5zZm9ybUJvdW5kcztcbn0pKE1hdHJpeCB8fCAoTWF0cml4ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUG9pbnQ7XG4oZnVuY3Rpb24gKFBvaW50KSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG4gICAgUG9pbnQuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBsZW5ndGgocG9pbnQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9XG4gICAgUG9pbnQubGVuZ3RoID0gbGVuZ3RoO1xuICAgIGZ1bmN0aW9uIGFuZ2xlKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHBvaW50LnksIHBvaW50LngpO1xuICAgIH1cbiAgICBQb2ludC5hbmdsZSA9IGFuZ2xlO1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMDtcbiAgICB9XG4gICAgUG9pbnQuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gZXF1YWxzKHBvaW50MCwgcG9pbnQxKSB7XG4gICAgICAgIHJldHVybiBwb2ludDAueCA9PT0gcG9pbnQxLnggJiYgcG9pbnQwLnkgPT09IHBvaW50MS55O1xuICAgIH1cbiAgICBQb2ludC5lcXVhbHMgPSBlcXVhbHM7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkocG9pbnQpIHtcbiAgICAgICAgcG9pbnQueCA9IDA7XG4gICAgICAgIHBvaW50LnkgPSAwO1xuICAgIH1cbiAgICBQb2ludC5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LnggPSBzb3VyY2UueDtcbiAgICAgICAgdGFyZ2V0LnkgPSBzb3VyY2UueTtcbiAgICB9XG4gICAgUG9pbnQuY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gbm9ybWFsaXplKHBvaW50LCB0aGlja25lc3MpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gbGVuZ3RoKHBvaW50KTtcbiAgICAgICAgaWYgKHZhbHVlID4gMCkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlja25lc3MgLyB2YWx1ZTtcbiAgICAgICAgICAgIHBvaW50LnggKj0gdmFsdWU7XG4gICAgICAgICAgICBwb2ludC55ICo9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBvaW50Lm5vcm1hbGl6ZSA9IG5vcm1hbGl6ZTtcbiAgICBmdW5jdGlvbiBkaXN0YW5jZShwb2ludDAsIHBvaW50MSkge1xuICAgICAgICBjb25zdCBkeCA9IHBvaW50MC54IC0gcG9pbnQxLng7XG4gICAgICAgIGNvbnN0IGR5ID0gcG9pbnQwLnkgLSBwb2ludDEueTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuICAgIFBvaW50LmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgZnVuY3Rpb24gaW50ZXJwb2xhdGUoYmVnaW4sIGVuZCwgdmFsdWUsIHJlc3VsdCkge1xuICAgICAgICByZXN1bHQueCA9IGJlZ2luLnggKyB2YWx1ZSAqIChlbmQueCAtIGJlZ2luLngpO1xuICAgICAgICByZXN1bHQueSA9IGJlZ2luLnkgKyB2YWx1ZSAqIChlbmQueSAtIGJlZ2luLnkpO1xuICAgIH1cbiAgICBQb2ludC5pbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlO1xuICAgIGZ1bmN0aW9uIHBvbGFyKHBvaW50LCBsZW5ndGgsIGFuZ2xlKSB7XG4gICAgICAgIHBvaW50LnggPSBsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIHBvaW50LnkgPSBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgfVxuICAgIFBvaW50LnBvbGFyID0gcG9sYXI7XG59KShQb2ludCB8fCAoUG9pbnQgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBSZWN0YW5nbGU7XG4oZnVuY3Rpb24gKFJlY3RhbmdsZSkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJlY3RhbmdsZS54ID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLnkgPSAwO1xuICAgICAgICByZWN0YW5nbGUud2lkdGggPSAwO1xuICAgICAgICByZWN0YW5nbGUuaGVpZ2h0ID0gMDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gaW50ZXJzZWN0aW9uKHNvdXJjZSwgdGFyZ2V0LCByZXN1bHQpIHtcbiAgICAgICAgbGV0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCwgfSA9IHNvdXJjZTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRhcmdldC54O1xuICAgICAgICBjb25zdCB0b3AgPSB0YXJnZXQueTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0YXJnZXQueCArIHRhcmdldC53aWR0aDtcbiAgICAgICAgY29uc3QgYm90dG9tID0gdGFyZ2V0LnkgKyB0YXJnZXQuaGVpZ2h0O1xuICAgICAgICBpZiAoeCA8IGxlZnQpIHtcbiAgICAgICAgICAgIHdpZHRoIC09IGxlZnQgLSB4O1xuICAgICAgICAgICAgeCA9IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggKyB3aWR0aCA+IHJpZ2h0KSB7XG4gICAgICAgICAgICB3aWR0aCA9IHJpZ2h0IC0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSA8IHRvcCkge1xuICAgICAgICAgICAgaGVpZ2h0IC09IHRvcCAtIHk7XG4gICAgICAgICAgICB5ID0gdG9wO1xuICAgICAgICB9XG4gICAgICAgIGlmICh5ICsgaGVpZ2h0ID4gYm90dG9tKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBib3R0b20gLSB5O1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aWR0aCA8IDApIHtcbiAgICAgICAgICAgIHdpZHRoID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQueCA9IHg7XG4gICAgICAgIHJlc3VsdC55ID0geTtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5pbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb247XG4gICAgZnVuY3Rpb24gaXNFbXB0eShyZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZS53aWR0aCA9PT0gMCB8fCByZWN0YW5nbGUuaGVpZ2h0ID09PSAwO1xuICAgIH1cbiAgICBSZWN0YW5nbGUuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gY29udGFpbnMocmVjdGFuZ2xlLCBwb2ludCkge1xuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlLnggPCBwb2ludC54XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueCArIHJlY3RhbmdsZS53aWR0aCA+IHBvaW50LnhcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS55IDwgcG9pbnQueVxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnkgKyByZWN0YW5nbGUuaGVpZ2h0ID4gcG9pbnQueTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmNvbnRhaW5zID0gY29udGFpbnM7XG4gICAgZnVuY3Rpb24gcm91bmQocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJlY3RhbmdsZS54ID0gTWF0aC5yb3VuZChyZWN0YW5nbGUueCk7XG4gICAgICAgIHJlY3RhbmdsZS55ID0gTWF0aC5yb3VuZChyZWN0YW5nbGUueSk7XG4gICAgICAgIHJlY3RhbmdsZS53aWR0aCA9IE1hdGgucm91bmQocmVjdGFuZ2xlLndpZHRoKTtcbiAgICAgICAgcmVjdGFuZ2xlLmhlaWdodCA9IE1hdGgucm91bmQocmVjdGFuZ2xlLmhlaWdodCk7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5yb3VuZCA9IHJvdW5kO1xufSkoUmVjdGFuZ2xlIHx8IChSZWN0YW5nbGUgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXgsIFJlY3RhbmdsZSB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgSW1hZ2VFeHRlbnNpb24sIElNQUdFIH0gZnJvbSAnLi9pbWFnZSc7XG5jb25zdCBib3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmNvbnN0IHNjcmVlbkJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IGltYWdlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IGNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gZW5naW5lLnBsYXRmb3JtO1xuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBwbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgICAgICBpZiAoQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eVdpdGhBbHBoYShjb2xvclRyYW5zZm9ybSkpIHtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tQ29udGV4dCA9IHBsYXRmb3JtLmNyZWF0ZUN1c3RvbUNvbnRleHQoKTtcbiAgICAgICAgICAgIGJvdW5kcy54ID0geDtcbiAgICAgICAgICAgIGJvdW5kcy55ID0geTtcbiAgICAgICAgICAgIGJvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgYm91bmRzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Cb3VuZHMobWF0cml4LCBib3VuZHMsIGJvdW5kcyk7XG4gICAgICAgICAgICBpZiAoUmVjdGFuZ2xlLmlzRW1wdHkoYm91bmRzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNjcmVlbkJvdW5kcy53aWR0aCA9IGN1c3RvbUNvbnRleHQuY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgc2NyZWVuQm91bmRzLmhlaWdodCA9IGN1c3RvbUNvbnRleHQuY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5pbnRlcnNlY3Rpb24oYm91bmRzLCBzY3JlZW5Cb3VuZHMsIGJvdW5kcyk7XG4gICAgICAgICAgICBpZiAoUmVjdGFuZ2xlLmlzRW1wdHkoYm91bmRzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJlY3RhbmdsZS5yb3VuZChib3VuZHMpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuY2xlYXJSZWN0KGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBjdXN0b21Db250ZXh0LmdldEltYWdlRGF0YShib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBjb25zdCBybSA9IGNvbG9yVHJhbnNmb3JtLnJlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBnbSA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IGJtID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBhbSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IHJvID0gY29sb3JUcmFuc2Zvcm0ucmVkT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgZ28gPSBjb2xvclRyYW5zZm9ybS5ncmVlbk9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGJvID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGFvID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFPZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGltYWdlRGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBkYXRhO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIHJtICsgcm87XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGdtICsgZ287XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGJtICsgYm87XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGFtICsgYW87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIGJvdW5kcy54LCBib3VuZHMueSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZShjdXN0b21Db250ZXh0LmNhbnZhcywgYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQsIGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHBsYXRmb3JtLmRlc3Ryb3lDdXN0b21Db250ZXh0KGN1c3RvbUNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIEltYWdlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChJTUFHRSwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gfHwgKENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSB9IGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0IHZhciBDYW52YXNJbWFnZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzSW1hZ2VFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBlbmdpbmUucGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIEltYWdlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChJTUFHRSwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNJbWFnZUV4dGVuc2lvbiB8fCAoQ2FudmFzSW1hZ2VFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QsIFJlc291cmNlLCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcbmV4cG9ydCBjb25zdCBJTUFHRSA9ICdpbWFnZSc7XG5leHBvcnQgdmFyIEltYWdlO1xuKGZ1bmN0aW9uIChJbWFnZSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhpbWFnZSwgYm91bmRzLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IGltYWdlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgICAgIGJvdW5kcy54ID0geDtcbiAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgYm91bmRzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgSW1hZ2UuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoSW1hZ2UgfHwgKEltYWdlID0ge30pKTtcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBJbWFnZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoSW1hZ2VFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBsb2NhbCB9ID0gZW5naW5lLnBvaW50ZXJzO1xuICAgICAgICBJbWFnZS5jYWxjdWxhdGVCb3VuZHMoaW1hZ2UsIGJvdW5kcywgZW5naW5lKTtcbiAgICAgICAgcmV0dXJuIFJlY3RhbmdsZS5jb250YWlucyhib3VuZHMsIGxvY2FsKTtcbiAgICB9XG4gICAgSW1hZ2VFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5sb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IGltYWdlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gUmVzb3VyY2UuZ2V0UHJvZ3Jlc3MocmVzb3VyY2UpO1xuICAgICAgICBjb250ZXh0LmxvYWRlZCA9ICEhcmVzb3VyY2U/LmxvYWRlZCAmJiAhIXJlc291cmNlPy5pbWFnZTtcbiAgICB9XG4gICAgSW1hZ2VFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KElNQUdFLCBoaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChJTUFHRSwgbG9hZGVkKTtcbiAgICAgICAgSW1hZ2VSZXNvdXJjZS5pbml0KGVuZ2luZSk7XG4gICAgfVxuICAgIEltYWdlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoSW1hZ2VFeHRlbnNpb24gfHwgKEltYWdlRXh0ZW5zaW9uID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMtaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMtaW1hZ2UtY29sb3InO1xuIiwiZXhwb3J0IHZhciBJbWFnZVJlc291cmNlO1xuKGZ1bmN0aW9uIChJbWFnZVJlc291cmNlKSB7XG4gICAgZnVuY3Rpb24gcmVzb2x2ZShhc3NldCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGFzc2V0LnNwbGl0KCcuJykucG9wKCk7XG4gICAgICAgIHN3aXRjaCAoZXh0ZW5zaW9uKSB7XG4gICAgICAgICAgICBjYXNlICdwbmcnOlxuICAgICAgICAgICAgY2FzZSAnanBnJzpcbiAgICAgICAgICAgIGNhc2UgJ3dlYnAnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0ge1xuICAgICAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNMb2FkZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzVG90YWw6IDAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGFzc2V0O1xuICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGltYWdlIGxvYWRlZDogJHthc3NldH1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnaW1hZ2UgbG9hZCBlcnJvcicsIGUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgSW1hZ2VSZXNvdXJjZS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb2x2ZSk7XG4gICAgfVxuICAgIEltYWdlUmVzb3VyY2UuaW5pdCA9IGluaXQ7XG59KShJbWFnZVJlc291cmNlIHx8IChJbWFnZVJlc291cmNlID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJpbmcnO1xuIiwiZXhwb3J0IHZhciBTdHJpbmdSZXNvdXJjZTtcbihmdW5jdGlvbiAoU3RyaW5nUmVzb3VyY2UpIHtcbiAgICBmdW5jdGlvbiByZXNvbHZlKGFzc2V0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gYXNzZXQuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgICAgc3dpdGNoIChleHRlbnNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3R4dCc6XG4gICAgICAgICAgICBjYXNlICdqc29uJzpcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzTG9hZGVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBieXRlc1RvdGFsOiAwLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGFzc2V0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB4aHIub25wcm9ncmVzcyA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmJ5dGVzTG9hZGVkID0gZS5sb2FkZWQ7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmJ5dGVzVG90YWwgPSBlLnRvdGFsO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHN0cmluZyBsb2FkZWQ6ICR7YXNzZXR9YCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmRhdGEgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5ieXRlc0xvYWRlZCA9IHJlc291cmNlLmJ5dGVzVG90YWw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdzdHJpbmcgbG9hZCBlcnJvcicsIGUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBTdHJpbmdSZXNvdXJjZS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb2x2ZSk7XG4gICAgfVxuICAgIFN0cmluZ1Jlc291cmNlLmluaXQgPSBpbml0O1xufSkoU3RyaW5nUmVzb3VyY2UgfHwgKFN0cmluZ1Jlc291cmNlID0ge30pKTtcbiIsImltcG9ydCB7IFJlc291cmNlLCBDb250YWluZXJFeHRlbnNpb24sIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBTdHJpbmdSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5leHBvcnQgY29uc3QgU0NFTkUgPSAnc2NlbmUnO1xuZXhwb3J0IHZhciBTY2VuZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoU2NlbmVFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBsb2FkZWQoc2NlbmUsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLmxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICBpZiAoc2NlbmUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIENvbnRhaW5lckV4dGVuc2lvbi5sb2FkZWQoc2NlbmUsIGVuZ2luZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB7IHNyYyB9ID0gc2NlbmU7XG4gICAgICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gUmVzb3VyY2UuZ2V0UHJvZ3Jlc3MocmVzb3VyY2UpO1xuICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSAhIXJlc291cmNlPy5sb2FkZWQgJiYgISFyZXNvdXJjZT8uZGF0YTtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZSAmJiByZXNvdXJjZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUuY2hpbGRyZW4gPSBKU09OLnBhcnNlKHJlc291cmNlLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZyhgc2NlbmUgcGFyc2luZyBlcnJvcjogJHtlLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFNjZW5lRXh0ZW5zaW9uLmxvYWRlZCA9IGxvYWRlZDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChTQ0VORSwgQ29udGFpbmVyRXh0ZW5zaW9uLmhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KFNDRU5FLCBDb250YWluZXJFeHRlbnNpb24ucmVuZGVyKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLnNldChTQ0VORSwgQ29udGFpbmVyRXh0ZW5zaW9uLnVwZGF0ZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5zZXQoU0NFTkUsIGxvYWRlZCk7XG4gICAgICAgIFN0cmluZ1Jlc291cmNlLmluaXQoZW5naW5lKTtcbiAgICB9XG4gICAgU2NlbmVFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShTY2VuZUV4dGVuc2lvbiB8fCAoU2NlbmVFeHRlbnNpb24gPSB7fSkpO1xuIiwiY29uc3QgUElfMiA9IE1hdGguUEkgKiAyO1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5RWxsaXBzZShkYXRhLCBoYXNGaWxsLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHJhZGl1cyA9IDAsIHJhZGl1c1gsIHJhZGl1c1ksIH0gPSBkYXRhO1xuICAgIGNvbnN0IHJ4ID0gcmFkaXVzWCA/PyByYWRpdXM7XG4gICAgY29uc3QgcnkgPSByYWRpdXNZID8/IHJhZGl1cztcbiAgICBpZiAocnggPT09IDAgfHwgcnkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQuZWxsaXBzZSh4LCB5LCByeCwgcnksIDAsIDAsIFBJXzIpO1xuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q29tbWFuZChjb21tYW5kLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBjb21tYW5kO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtb3ZlVG8nOlxuICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKG1vdmVUby54ID8/IDAsIG1vdmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2xpbmVUbyc6XG4gICAgICAgICAgICBjb25zdCBsaW5lVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8obGluZVRvLnggPz8gMCwgbGluZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3VydmVUbyc6XG4gICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyhjdXJ2ZVRvLmN4ID8/IDAsIGN1cnZlVG8uY3kgPz8gMCwgY3VydmVUby54ID8/IDAsIGN1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjdWJpY0N1cnZlVG8nOlxuICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQuYmV6aWVyQ3VydmVUbyhjdWJpY0N1cnZlVG8uY3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLmN5ID8/IDAsIGN1YmljQ3VydmVUby5zeCA/PyAwLCBjdWJpY0N1cnZlVG8uc3kgPz8gMCwgY3ViaWNDdXJ2ZVRvLnggPz8gMCwgY3ViaWNDdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBhdGgoZGF0YSwgaGFzRmlsbCwgY29udGV4dCkge1xuICAgIGlmICghZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gZGF0YVtpXTtcbiAgICAgICAgYXBwbHlDb21tYW5kKGNvbW1hbmQsIGNvbnRleHQpO1xuICAgIH1cbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhcHBseVJlY3RhbmdsZShkYXRhLCBoYXNGaWxsLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHdpZHRoID0gMCwgaGVpZ2h0ID0gMCwgfSA9IGRhdGE7XG4gICAgaWYgKHdpZHRoID09PSAwIHx8IGhlaWdodCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IE1hdHJpeCwgUG9pbnQsIFJlY3RhbmdsZSwgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IFNoYXBlRXh0ZW5zaW9uLCBTSEFQRSwgU2hhcGUgfSBmcm9tICcuLi9zaGFwZSc7XG5pbXBvcnQgeyBhcHBseVJlY3RhbmdsZSB9IGZyb20gJy4vcmVjdGFuZ2xlJztcbmltcG9ydCB7IGFwcGx5RWxsaXBzZSB9IGZyb20gJy4vZWxsaXBzZSc7XG5pbXBvcnQgeyBhcHBseVBhdGggfSBmcm9tICcuL3BhdGgnO1xuaW1wb3J0IHsgYXBwbHlTdHJpbmcgfSBmcm9tICcuL3N0cmluZyc7XG5pbXBvcnQgeyBzZXRGaWxsU3R5bGUsIHNldFN0cm9rZVN0eWxlIH0gZnJvbSAnLi9zdHlsZSc7XG5jb25zdCBib3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmNvbnN0IG9mZnNldCA9IFBvaW50LmVtcHR5KCk7XG5mdW5jdGlvbiByZW5kZXJHcmFwaGljcyhkYXRhLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgY29uc3QgeyBmaWxsLCBzdHJva2UgfSA9IGRhdGE7XG4gICAgY29uc3QgaGFzRmlsbCA9ICEhZmlsbCB8fCBmaWxsID09PSAwO1xuICAgIGNvbnN0IGhhc1N0cm9rZSA9ICEhc3Ryb2tlIHx8IHN0cm9rZSA9PT0gMDtcbiAgICBpZiAoIWhhc0ZpbGwgJiYgIWhhc1N0cm9rZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBleGlzdCA9IHRydWU7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBkYXRhO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdyZWN0YW5nbGUnOlxuICAgICAgICAgICAgZXhpc3QgPSBhcHBseVJlY3RhbmdsZShkYXRhLCBoYXNGaWxsLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlbGxpcHNlJzpcbiAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlFbGxpcHNlKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BhdGgnOlxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGRhdGE7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhdGguZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IGFwcGx5U3RyaW5nKHBhdGguZGF0YSwgaGFzRmlsbCwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHBhdGguZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IGFwcGx5UGF0aChwYXRoLmRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhpc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICghZXhpc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBzZXRGaWxsU3R5bGUoZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIH1cbiAgICBpZiAoaGFzU3Ryb2tlKSB7XG4gICAgICAgIHNldFN0cm9rZVN0eWxlKHN0cm9rZSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxufVxuZXhwb3J0IHZhciBDYW52YXNTaGFwZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzU2hhcGVFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoc2hhcGUsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHNoYXBlO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgUG9pbnQuc2V0RW1wdHkob2Zmc2V0KTtcbiAgICAgICAgaWYgKFBpdm90Lmhhc1ZhbHVlcyhzaGFwZSkpIHtcbiAgICAgICAgICAgIFNoYXBlLmNhbGN1bGF0ZUJvdW5kcyhzaGFwZSwgYm91bmRzKTtcbiAgICAgICAgICAgIGlmIChSZWN0YW5nbGUuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2Zmc2V0LnggPSBQaXZvdC5nZXRYKHNoYXBlLCBib3VuZHMud2lkdGgpO1xuICAgICAgICAgICAgb2Zmc2V0LnkgPSBQaXZvdC5nZXRZKHNoYXBlLCBib3VuZHMud2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IGVuZ2luZS5wbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoUG9pbnQuaXNFbXB0eShvZmZzZXQpKSB7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnRMb2NhbChtYXRyaXgsIG9mZnNldCwgb2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHggKyBvZmZzZXQueCwgbWF0cml4LnR5ICsgb2Zmc2V0LnkpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyR3JhcGhpY3MoZGF0YVtpXSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQyZCwgZW5naW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJlbmRlckdyYXBoaWNzKGRhdGEsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0MmQsIGVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzU2hhcGVFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIFNoYXBlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChTSEFQRSwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzU2hhcGVFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNTaGFwZUV4dGVuc2lvbiB8fCAoQ2FudmFzU2hhcGVFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgR3JhcGhpY3NTdHJpbmdSZWFkZXIgfSBmcm9tICcuLi9kYXRhL3N0cmluZyc7XG5pbXBvcnQgeyBhcHBseUNvbW1hbmQgfSBmcm9tICcuL3BhdGgnO1xuY29uc3QgcmVhZGVyID0gbmV3IEdyYXBoaWNzU3RyaW5nUmVhZGVyKCk7XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlTdHJpbmcoZGF0YSwgaGFzRmlsbCwgY29udGV4dCkge1xuICAgIGlmICghZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHJlYWRlci5zZXRQYXRoKGRhdGEpO1xuICAgIHdoaWxlIChyZWFkZXIucmVhZE5leHQoKSkge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gcmVhZGVyLmdldENvbW1hbmQoKTtcbiAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGFwcGx5Q29tbWFuZChjb21tYW5kLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IENhbnZhc1BhdHRlcm5zIH0gZnJvbSAnQGplbmcvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBNYXRyaXggfSBmcm9tICdAamVuZy9nZW9tJztcbmNvbnN0IGVtcHR5QXJyYXkgPSBbXTtcbmNvbnN0IGVtcHR5TWF0cml4ID0gTWF0cml4LmVtcHR5KCk7XG5mdW5jdGlvbiBnZXRDYW52YXNQYXR0ZXJuKGZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpIHtcbiAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oZmlsbCwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHN3aXRjaCAoZmlsbC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzb2xpZCc6XG4gICAgICAgICAgICAgICAgY29uc3Qgc29saWQgPSBmaWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oc29saWQuY29sb3IgPz8gMCwgc29saWQuYWxwaGEgPz8gMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgY2FzZSAnbGluZWFyJzpcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lYXIgPSBmaWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5saW5lYXJHcmFkaWVudFBhdHRlcm4obGluZWFyLmJlZ2luWCA/PyAwLCBsaW5lYXIuYmVnaW5ZID8/IDAsIGxpbmVhci5lbmRYID8/IDAsIGxpbmVhci5lbmRZID8/IDAsIGxpbmVhci5jb2xvcnMgPz8gZW1wdHlBcnJheSwgbGluZWFyLmFscGhhcyA/PyBlbXB0eUFycmF5LCBsaW5lYXIucmF0aW9zID8/IGVtcHR5QXJyYXksIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGNhc2UgJ3JhZGlhbCc6XG4gICAgICAgICAgICAgICAgY29uc3QgcmFkaWFsID0gZmlsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMucmFkaWFsR3JhZGllbnRQYXR0ZXJuKHJhZGlhbC5iZWdpblggPz8gMCwgcmFkaWFsLmJlZ2luWSA/PyAwLCByYWRpYWwuYmVnaW5SYWRpdXMgPz8gMCwgcmFkaWFsLmVuZFggPz8gcmFkaWFsLmJlZ2luWCA/PyAwLCByYWRpYWwuZW5kWSA/PyByYWRpYWwuYmVnaW5ZID8/IDAsIHJhZGlhbC5lbmRSYWRpdXMgPz8gMCwgcmFkaWFsLmNvbG9ycyA/PyBlbXB0eUFycmF5LCByYWRpYWwuYWxwaGFzID8/IGVtcHR5QXJyYXksIHJhZGlhbC5yYXRpb3MgPz8gZW1wdHlBcnJheSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQpO1xuICAgICAgICAgICAgY2FzZSAnYml0bWFwJzpcbiAgICAgICAgICAgICAgICBjb25zdCBiaXRtYXBGaWxsID0gZmlsbDtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHJlcGVhdCA9IHRydWUsIHNyYywgbWF0cml4ID0gZW1wdHlNYXRyaXggfSA9IGJpdG1hcEZpbGw7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gQ2FudmFzUGF0dGVybnMuYml0bWFwUGF0dGVybihyZXNvdXJjZS5pbWFnZSwgcmVwZWF0LCBtYXRyaXgsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbGxTdHlsZShmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBnZXRDYW52YXNQYXR0ZXJuKGZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0cm9rZVN0eWxlKHN0cm9rZSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGlmICh0eXBlb2Ygc3Ryb2tlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKHN0cm9rZSwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGNvbnRleHQubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgICAgIGNvbnRleHQubGluZUpvaW4gPSAncm91bmQnO1xuICAgICAgICBjb250ZXh0Lm1pdGVyTGltaXQgPSAxMDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHN0cm9rZSA9PT0gJ29iamVjdCcgJiYgc3Ryb2tlLmZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gZ2V0Q2FudmFzUGF0dGVybihzdHJva2UuZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gc3Ryb2tlLnRoaWNrbmVzcyA/PyAxO1xuICAgICAgICBjb250ZXh0LmxpbmVDYXAgPSBzdHJva2UuY2FwcyA/PyAncm91bmQnO1xuICAgICAgICBjb250ZXh0LmxpbmVKb2luID0gc3Ryb2tlLmpvaW50cyA/PyAncm91bmQnO1xuICAgICAgICBjb250ZXh0Lm1pdGVyTGltaXQgPSBzdHJva2UubWl0ZXJMaW1pdCA/PyAxMDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IFBhdGhDb21tYW5kIH0gZnJvbSAnLi9wYXRoJztcbmltcG9ydCB7IEdyYXBoaWNzU3RyaW5nIH0gZnJvbSAnLi9zdHJpbmcnO1xuZXhwb3J0IHZhciBSZWN0YW5nbGVEYXRhO1xuKGZ1bmN0aW9uIChSZWN0YW5nbGVEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgd2lkdGggPSAwLCBoZWlnaHQgPSAwLCB9ID0gZGF0YTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4LCB5KTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQpO1xuICAgIH1cbiAgICBSZWN0YW5nbGVEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFJlY3RhbmdsZURhdGEgfHwgKFJlY3RhbmdsZURhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBFbGxpcHNlRGF0YTtcbihmdW5jdGlvbiAoRWxsaXBzZURhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCByYWRpdXMgPSAwLCByYWRpdXNYLCByYWRpdXNZLCB9ID0gZGF0YTtcbiAgICAgICAgY29uc3QgcnggPSByYWRpdXNYID8/IHJhZGl1cztcbiAgICAgICAgY29uc3QgcnkgPSByYWRpdXNZID8/IHJhZGl1cztcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4IC0gcngsIHkgLSByeSk7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCArIHJ4LCB5ICsgcnkpO1xuICAgIH1cbiAgICBFbGxpcHNlRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShFbGxpcHNlRGF0YSB8fCAoRWxsaXBzZURhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBQYXRoRGF0YTtcbihmdW5jdGlvbiAoUGF0aERhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aERhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHBhdGhEYXRhO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tYW5kID0gZGF0YVtpXTtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBQYXRoRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShQYXRoRGF0YSB8fCAoUGF0aERhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBHcmFwaGljc0RhdGE7XG4oZnVuY3Rpb24gKEdyYXBoaWNzRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBkYXRhO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICAgICAgUmVjdGFuZ2xlRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgICAgICAgICAgIEVsbGlwc2VEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGF0aCc6XG4gICAgICAgICAgICAgICAgUGF0aERhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc0RhdGEgfHwgKEdyYXBoaWNzRGF0YSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdAamVuZy9nZW9tJztcbmV4cG9ydCB2YXIgUGF0aENvbW1hbmQ7XG4oZnVuY3Rpb24gKFBhdGhDb21tYW5kKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKHBhdGgsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IHBhdGg7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbW92ZVRvJzpcbiAgICAgICAgICAgIGNhc2UgJ2xpbmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIG1vdmVUby54ID8/IDAsIG1vdmVUby55ID8/IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3VydmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdXJ2ZVRvLmN4ID8/IDAsIGN1cnZlVG8uY3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdXJ2ZVRvLnggPz8gMCwgY3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3ViaWNDdXJ2ZVRvJzpcbiAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLmN4ID8/IDAsIGN1YmljQ3VydmVUby5jeSA/PyAwKTtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby5zeCA/PyAwLCBjdWJpY0N1cnZlVG8uc3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8ueCA/PyAwLCBjdWJpY0N1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUGF0aENvbW1hbmQuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoUGF0aENvbW1hbmQgfHwgKFBhdGhDb21tYW5kID0ge30pKTtcbiIsImltcG9ydCB7IFBhdGhDb21tYW5kLCB9IGZyb20gJy4vcGF0aCc7XG5jb25zdCBOVU1CRVJTX0NPVU5UID0ge1xuICAgIE06IDIsXG4gICAgbTogMixcbiAgICBMOiAyLFxuICAgIGw6IDIsXG4gICAgSDogMSxcbiAgICBoOiAxLFxuICAgIFY6IDEsXG4gICAgdjogMSxcbiAgICBDOiA2LFxuICAgIGM6IDYsXG4gICAgUzogNCxcbiAgICBzOiA0LFxuICAgIFE6IDQsXG4gICAgcTogNCxcbiAgICBUOiAyLFxuICAgIHQ6IDIsXG59O1xuY29uc3QgQ09NTUFORF9SRUdFWCA9IC9bTW1MbEhoVnZDY1NzUXFUdF0vO1xuY29uc3QgTlVNQkVSX1JFR0VYID0gL1stK10/W1xcZC5dKy87XG5leHBvcnQgY2xhc3MgR3JhcGhpY3NTdHJpbmdTdHJlYW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBhdGggPSAnJztcbiAgICAgICAgdGhpcy5jb21tYW5kID0gbnVsbDtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIHRoaXMuc3ltYm9sUmVnZXggPSAvW01tTGxIaFZ2Q2NTc1FxVHRdfFstK10/W1xcZC5dKy9nO1xuICAgIH1cbiAgICBzZXRQYXRoKHBhdGgpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5zeW1ib2xSZWdleC5sYXN0SW5kZXggPSAwO1xuICAgIH1cbiAgICBnZXRDb21tYW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kO1xuICAgIH1cbiAgICBnZXRCdWZmZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlcjtcbiAgICB9XG4gICAgcmVhZE5leHQoKSB7XG4gICAgICAgIGNvbnN0IHsgbGFzdEluZGV4IH0gPSB0aGlzLnN5bWJvbFJlZ2V4O1xuICAgICAgICBjb25zdCBzeW1ib2xNYXRjaCA9IHRoaXMuc3ltYm9sUmVnZXguZXhlYyh0aGlzLnBhdGgpO1xuICAgICAgICBpZiAoIXN5bWJvbE1hdGNoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbE1hdGNoWzBdO1xuICAgICAgICBpZiAoQ09NTUFORF9SRUdFWC50ZXN0KHN5bWJvbCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZCA9IHN5bWJvbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChOVU1CRVJfUkVHRVgudGVzdChzeW1ib2wpKSB7XG4gICAgICAgICAgICB0aGlzLnN5bWJvbFJlZ2V4Lmxhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmNvbW1hbmQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb3VudCA9IE5VTUJFUlNfQ09VTlRbdGhpcy5jb21tYW5kXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJNYXRjaCA9IHRoaXMuc3ltYm9sUmVnZXguZXhlYyh0aGlzLnBhdGgpO1xuICAgICAgICAgICAgaWYgKG51bWJlck1hdGNoICYmIE5VTUJFUl9SRUdFWC50ZXN0KG51bWJlck1hdGNoWzBdKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyW2ldID0gcGFyc2VGbG9hdChudW1iZXJNYXRjaFswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBHcmFwaGljc1N0cmluZ1JlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtID0gbmV3IEdyYXBoaWNzU3RyaW5nU3RyZWFtKCk7XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IHsgdHlwZTogJ21vdmVUbycgfTtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFggPSAwO1xuICAgICAgICB0aGlzLmxhc3RZID0gMDtcbiAgICAgICAgdGhpcy5sYXN0Q1ggPSAwO1xuICAgICAgICB0aGlzLmxhc3RDWSA9IDA7XG4gICAgfVxuICAgIHNldFBhdGgocGF0aCkge1xuICAgICAgICB0aGlzLnN0cmVhbS5zZXRQYXRoKHBhdGgpO1xuICAgICAgICB0aGlzLmxhc3RYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0WSA9IDA7XG4gICAgICAgIHRoaXMubGFzdENYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0Q1kgPSAwO1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSBmYWxzZTtcbiAgICB9XG4gICAgZ2V0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZEV4aXN0cyA/IHRoaXMuY29tbWFuZCA6IG51bGw7XG4gICAgfVxuICAgIHJlYWROZXh0KCkge1xuICAgICAgICB0aGlzLnN0cmVhbS5yZWFkTmV4dCgpO1xuICAgICAgICB0aGlzLnBhcnNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRFeGlzdHM7XG4gICAgfVxuICAgIHBhcnNlKCkge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gdGhpcy5zdHJlYW0uZ2V0Q29tbWFuZCgpO1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSAhIWNvbW1hbmQ7XG4gICAgICAgIGlmICghdGhpcy5jb21tYW5kRXhpc3RzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy5zdHJlYW0uZ2V0QnVmZmVyKCk7XG4gICAgICAgIGNvbnN0IFtlMCwgZTEsIGUyLCBlMywgZTQsIGU1LF0gPSBidWZmZXI7XG4gICAgICAgIHN3aXRjaCAoY29tbWFuZCkge1xuICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdtb3ZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby55ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBtb3ZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IG1vdmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbW92ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnkgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBtb3ZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IG1vdmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBsaW5lVG8ueDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdWJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IGUwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndic6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMCArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMjtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0gZTM7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMiArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IGUzICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSBlNCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTUgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSB0aGlzLmxhc3RDWDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0gdGhpcy5sYXN0Q1k7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSBlMjtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnkgPSBlMztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IHRoaXMubGFzdENZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSBlMiArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTMgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSBlMjtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0gZTM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSBlMiArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUzICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdXJ2ZVRvLnggLSAoY3VydmVUby5jeCAtIGN1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3VydmVUby55IC0gKGN1cnZlVG8uY3kgLSBjdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSB0aGlzLmxhc3RDWDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IHRoaXMubGFzdENZO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuY29uc3QgcmVhZGVyID0gbmV3IEdyYXBoaWNzU3RyaW5nUmVhZGVyKCk7XG5leHBvcnQgdmFyIEdyYXBoaWNzU3RyaW5nO1xuKGZ1bmN0aW9uIChHcmFwaGljc1N0cmluZykge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoLCBib3VuZHMpIHtcbiAgICAgICAgcmVhZGVyLnNldFBhdGgocGF0aCk7XG4gICAgICAgIHdoaWxlIChyZWFkZXIucmVhZE5leHQoKSkge1xuICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IHJlYWRlci5nZXRDb21tYW5kKCk7XG4gICAgICAgICAgICBpZiAoY29tbWFuZCkge1xuICAgICAgICAgICAgICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyhjb21tYW5kLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIEdyYXBoaWNzU3RyaW5nLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEdyYXBoaWNzU3RyaW5nIHx8IChHcmFwaGljc1N0cmluZyA9IHt9KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2RhdGEvZGF0YSc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvcGF0aCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvc3RyaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9zdHlsZSc7XG5leHBvcnQgKiBmcm9tICcuL3NoYXBlJztcbmV4cG9ydCAqIGZyb20gJy4vY2FudmFzL3NoYXBlJztcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBCb3VuZHMsIFJlY3RhbmdsZSB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBHcmFwaGljc0RhdGEgfSBmcm9tICcuL2RhdGEvZGF0YSc7XG5leHBvcnQgY29uc3QgU0hBUEUgPSAnc2hhcGUnO1xuY29uc3QgYm91bmRzID0gQm91bmRzLmVtcHR5KCk7XG5leHBvcnQgdmFyIFNoYXBlO1xuKGZ1bmN0aW9uIChTaGFwZSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhzaGFwZSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gc2hhcGU7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQm91bmRzLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBHcmFwaGljc0RhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGFbaV0sIGJvdW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBHcmFwaGljc0RhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQm91bmRzLmlzRW1wdHkoYm91bmRzKSkge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgd2lkdGggPSBib3VuZHMubWF4WCAtIGJvdW5kcy5taW5YO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBib3VuZHMubWF4WSAtIGJvdW5kcy5taW5ZO1xuICAgICAgICBjb25zdCB4ID0gYm91bmRzLm1pblggKyBQaXZvdC5nZXRYKHNoYXBlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBib3VuZHMubWluWSArIFBpdm90LmdldFkoc2hhcGUsIGhlaWdodCk7XG4gICAgICAgIHJlc3VsdC54ID0geDtcbiAgICAgICAgcmVzdWx0LnkgPSB5O1xuICAgICAgICByZXN1bHQud2lkdGggPSB3aWR0aDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoU2hhcGUgfHwgKFNoYXBlID0ge30pKTtcbmNvbnN0IHJlY3RhbmdsZSA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBTaGFwZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoU2hhcGVFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KHNoYXBlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBsb2NhbCB9ID0gZW5naW5lLnBvaW50ZXJzO1xuICAgICAgICBTaGFwZS5jYWxjdWxhdGVCb3VuZHMoc2hhcGUsIHJlY3RhbmdsZSk7XG4gICAgICAgIHJldHVybiBSZWN0YW5nbGUuY29udGFpbnMocmVjdGFuZ2xlLCBsb2NhbCk7XG4gICAgfVxuICAgIFNoYXBlRXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KFNIQVBFLCBoaXRUZXN0KTtcbiAgICAgICAgSW1hZ2VSZXNvdXJjZS5pbml0KGVuZ2luZSk7XG4gICAgfVxuICAgIFNoYXBlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoU2hhcGVFeHRlbnNpb24gfHwgKFNoYXBlRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBDYW52YXNQYXR0ZXJucyB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgRm9udCB9IGZyb20gJy4uL2RhdGEvZm9udCc7XG5pbXBvcnQgeyBUZXh0RXh0ZW5zaW9uLCBURVhULCBUZXh0IH0gZnJvbSAnLi4vdGV4dCc7XG5pbXBvcnQgeyBUZXh0Rm9ybWF0IH0gZnJvbSAnLi4vZGF0YS9mb3JtYXQnO1xuaW1wb3J0IHsgVGV4dE1ldHJpY3MgfSBmcm9tICcuLi9kYXRhL21ldHJpY3MnO1xuY29uc3QgZGVmYXVsdFRleHRGb3JtYXQgPSB7fTtcbmNvbnN0IENPUlJFQ1RJT04gPSAwLjg1O1xuZXhwb3J0IHZhciBDYW52YXNUZXh0RXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNUZXh0RXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKGNvbXBvbmVudCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4LCBjb2xvclRyYW5zZm9ybSB9ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFRleHQuaXNVcGRhdGVNZXRyaWNzKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIFRleHQudXBkYXRlTWV0cmljcyhjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbWV0cmljcyB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIW1ldHJpY3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGZvcm1hdCwgYm9yZGVyLCBiYWNrZ3JvdW5kLCB9ID0gY29tcG9uZW50O1xuICAgICAgICBUZXh0Rm9ybWF0LmNvbWJpbmUoZm9ybWF0LCBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LCBkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGNvbnN0IHJlYWxXaWR0aCA9IHdpZHRoID8/IG1ldHJpY3Mud2lkdGg7XG4gICAgICAgIGNvbnN0IHJlYWxIZWlnaHQgPSBoZWlnaHQgPz8gbWV0cmljcy5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IG9mZnNldFggPSBQaXZvdC5nZXRYKGNvbXBvbmVudCwgcmVhbFdpZHRoKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IFBpdm90LmdldFkoY29tcG9uZW50LCByZWFsSGVpZ2h0KTtcbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gZW5naW5lLnBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICBpZiAoYmFja2dyb3VuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnJztcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oYmFja2dyb3VuZCwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgY29udGV4dDJkLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLnJlY3Qob2Zmc2V0WCwgb2Zmc2V0WSwgcmVhbFdpZHRoLCByZWFsSGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oYm9yZGVyLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gJyc7XG4gICAgICAgICAgICBjb250ZXh0MmQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQucmVjdChvZmZzZXRYLCBvZmZzZXRZLCByZWFsV2lkdGgsIHJlYWxIZWlnaHQpO1xuICAgICAgICAgICAgY29udGV4dDJkLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQyZC50ZXh0QmFzZWxpbmUgPSAnYWxwaGFiZXRpYyc7XG4gICAgICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICcnO1xuICAgICAgICBjb25zdCBzaW1wbGUgPSBUZXh0LmlzU2ltcGxlKGNvbXBvbmVudCk7XG4gICAgICAgIGlmIChzaW1wbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBjb21wb25lbnQudGV4dDtcbiAgICAgICAgICAgIGNvbnN0IHsgc2l6ZSwgY29sb3IsIGFscGhhLCBsZWFkaW5nLCBsZXR0ZXJTcGFjaW5nLCB9ID0gZGVmYXVsdFRleHRGb3JtYXQ7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0Rm9udCA9IEZvbnQuZ2V0Rm9udChkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2xTaXplID0gc2l6ZSAqIENPUlJFQ1RJT047XG4gICAgICAgICAgICBjb25zdCBhbGlnblZhbHVlID0gVGV4dEZvcm1hdC5nZXRBbGlnblZhbHVlKGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5mb250ID0gRm9udC5nZXRTdHlsZShkZWZhdWx0Rm9udCwgc2l6ZSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGNvbG9yLCBhbHBoYSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgbGV0IHggPSBvZmZzZXRYICsgYWxpZ25WYWx1ZSA/IGFsaWduVmFsdWUgKiAocmVhbFdpZHRoIC0gVGV4dE1ldHJpY3MuZ2V0U2ltcGxlV2lkdGgoZGVmYXVsdFRleHRGb3JtYXQsIHRleHQsIDApKSA6IDA7XG4gICAgICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgICAgIGlmIChzeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSBhbGlnblZhbHVlID8gYWxpZ25WYWx1ZSAqIChyZWFsV2lkdGggLSBUZXh0TWV0cmljcy5nZXRTaW1wbGVXaWR0aChkZWZhdWx0VGV4dEZvcm1hdCwgdGV4dCwgaSArIDEpKSA6IDA7XG4gICAgICAgICAgICAgICAgICAgIHkgKz0gc2l6ZSArIGxlYWRpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gdGV4dFtpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2UoZGVmYXVsdEZvbnQsIHNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBsZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0MmQuZmlsbFRleHQoc3ltYm9sLCB4LCB5ICsgc3ltYm9sU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIHggKz0gYWR2YW5jZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgICAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxpZ25WZXJ0aWNhbFZhbHVlID0gVGV4dEZvcm1hdC5nZXRWZXJ0aWNhbEFsaWduVmFsdWUoZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICAgICAgICAgIHkgPSAoaGVpZ2h0IC0gbWV0cmljcy5oZWlnaHQpICogYWxpZ25WZXJ0aWNhbFZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh5IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5ICs9IG9mZnNldFk7XG4gICAgICAgICAgICBjb25zdCB7IGxpbmVzIH0gPSBtZXRyaWNzO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAobGluZS5zeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdCA9IGxpbmUuc3ltYm9sc1swXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxpZ25WYWx1ZSA9IFRleHRGb3JtYXQuZ2V0QWxpZ25WYWx1ZShmaXJzdC5mb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IChyZWFsV2lkdGggLSBsaW5lLndpZHRoKSAqIGFsaWduVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeCArPSBvZmZzZXRYO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHN5bWJvbHMgfSA9IGxpbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVIZWlnaHQgPSBsaW5lLmhlaWdodCAqIENPUlJFQ1RJT047XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3ltYm9scy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSBzeW1ib2wuZm9ybWF0LnNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbGlnblN5bWJvbFZhbHVlID0gVGV4dEZvcm1hdC5nZXRWZXJ0aWNhbEFsaWduVmFsdWUoc3ltYm9sLmZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xTaXplID0gc2l6ZSAqIENPUlJFQ1RJT047XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb250ID0gRm9udC5nZXRGb250KHN5bWJvbC5mb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDJkLmZvbnQgPSBGb250LmdldFN0eWxlKHN5bWJvbEZvbnQsIHNpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihzeW1ib2wuZm9ybWF0LmNvbG9yLCBzeW1ib2wuZm9ybWF0LmFscGhhLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0MmQuZmlsbFRleHQoc3ltYm9sLnN5bWJvbCwgeCwgeSArIHN5bWJvbFNpemUgKyBhbGlnblN5bWJvbFZhbHVlICogKGxpbmVIZWlnaHQgLSBzeW1ib2xTaXplKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ICs9IHN5bWJvbC5hZHZhbmNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHkgKz0gbGluZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzVGV4dEV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgVGV4dEV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoVEVYVCwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzVGV4dEV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc1RleHRFeHRlbnNpb24gfHwgKENhbnZhc1RleHRFeHRlbnNpb24gPSB7fSkpO1xuIiwiY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5leHBvcnQgY29uc3QgRU0gPSAxMDI0O1xuY29uc3QgZm9udHMgPSBuZXcgTWFwKCk7XG5leHBvcnQgdmFyIEZvbnQ7XG4oZnVuY3Rpb24gKEZvbnQpIHtcbiAgICBmdW5jdGlvbiBnZXRTdHlsZShmb250LCBzaXplKSB7XG4gICAgICAgIHJldHVybiBmb250Lm5hbWUucmVwbGFjZSgnJScsIHNpemUudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIEZvbnQuZ2V0U3R5bGUgPSBnZXRTdHlsZTtcbiAgICBmdW5jdGlvbiBtZWFzdXJlVGV4dChmb250LCBzaXplLCB0ZXh0KSB7XG4gICAgICAgIGNvbnRleHQuZm9udCA9IGdldFN0eWxlKGZvbnQsIHNpemUpO1xuICAgICAgICByZXR1cm4gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcbiAgICB9XG4gICAgRm9udC5tZWFzdXJlVGV4dCA9IG1lYXN1cmVUZXh0O1xuICAgIGZ1bmN0aW9uIGdldENoYXJXaWR0aChmb250LCBjaGFyKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IGZvbnQud2lkdGhzLmdldChjaGFyKTtcbiAgICAgICAgaWYgKCF3aWR0aCkge1xuICAgICAgICAgICAgd2lkdGggPSBtZWFzdXJlVGV4dChmb250LCBFTSwgY2hhcik7XG4gICAgICAgICAgICBmb250LndpZHRocy5zZXQoY2hhciwgd2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gICAgRm9udC5nZXRDaGFyV2lkdGggPSBnZXRDaGFyV2lkdGg7XG4gICAgZnVuY3Rpb24gZ2V0S2VybmluZyhmb250LCBmaXJzdCwgc2Vjb25kKSB7XG4gICAgICAgIGNvbnN0IHBhaXIgPSBmaXJzdCArIHNlY29uZDtcbiAgICAgICAgbGV0IGtlcm5pbmcgPSBmb250Lmtlcm5pbmdzLmdldChwYWlyKTtcbiAgICAgICAgaWYgKCFrZXJuaW5nKSB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aFNlY29uZCA9IGdldENoYXJXaWR0aChmb250LCBzZWNvbmQpO1xuICAgICAgICAgICAgY29uc3Qgd2lkdGhUb3RhbCA9IG1lYXN1cmVUZXh0KGZvbnQsIEVNLCBmaXJzdCArIHNlY29uZCk7XG4gICAgICAgICAgICBrZXJuaW5nID0gd2lkdGhUb3RhbCAtIHdpZHRoU2Vjb25kO1xuICAgICAgICAgICAgZm9udC5rZXJuaW5ncy5zZXQocGFpciwga2VybmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtlcm5pbmc7XG4gICAgfVxuICAgIEZvbnQuZ2V0S2VybmluZyA9IGdldEtlcm5pbmc7XG4gICAgZnVuY3Rpb24gZ2V0QWR2YW5jZShmb250LCBzaXplLCBmaXJzdCwgc2Vjb25kKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gc2l6ZSAvIEVNO1xuICAgICAgICBjb25zdCB3aWR0aCA9IGdldENoYXJXaWR0aChmb250LCBmaXJzdCk7XG4gICAgICAgIGlmICghc2Vjb25kKSB7XG4gICAgICAgICAgICByZXR1cm4gd2lkdGggKiBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXJuaW5nID0gZ2V0S2VybmluZyhmb250LCBmaXJzdCwgc2Vjb25kKTtcbiAgICAgICAgcmV0dXJuIGtlcm5pbmcgKiBzY2FsZTtcbiAgICB9XG4gICAgRm9udC5nZXRBZHZhbmNlID0gZ2V0QWR2YW5jZTtcbiAgICBmdW5jdGlvbiBnZXRGb250KGZvcm1hdCkge1xuICAgICAgICBsZXQgbmFtZSA9ICcnO1xuICAgICAgICBpZiAoZm9ybWF0LmJvbGQpIHtcbiAgICAgICAgICAgIG5hbWUgKz0gJ2JvbGQgJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0Lml0YWxpYykge1xuICAgICAgICAgICAgbmFtZSArPSAnaXRhbGljICc7XG4gICAgICAgIH1cbiAgICAgICAgbmFtZSArPSBgJXB4ICR7Zm9ybWF0LmZvbnR9YDtcbiAgICAgICAgbGV0IGZvbnQgPSBmb250cy5nZXQobmFtZSk7XG4gICAgICAgIGlmICghZm9udCkge1xuICAgICAgICAgICAgZm9udCA9IHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHdpZHRoczogbmV3IE1hcCgpLFxuICAgICAgICAgICAgICAgIGtlcm5pbmdzOiBuZXcgTWFwKCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9udHMuc2V0KG5hbWUsIGZvbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb250O1xuICAgIH1cbiAgICBGb250LmdldEZvbnQgPSBnZXRGb250O1xufSkoRm9udCB8fCAoRm9udCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFRleHRGb3JtYXQ7XG4oZnVuY3Rpb24gKFRleHRGb3JtYXQpIHtcbiAgICBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0ID0ge1xuICAgICAgICBmb250OiAnYXJpYWwnLFxuICAgICAgICBzaXplOiAxNSxcbiAgICAgICAgY29sb3I6IDAsXG4gICAgICAgIGFscGhhOiAxLFxuICAgICAgICBib2xkOiBmYWxzZSxcbiAgICAgICAgaXRhbGljOiBmYWxzZSxcbiAgICAgICAgdW5kZXJsaW5lOiBmYWxzZSxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogMCxcbiAgICAgICAgbGVhZGluZzogMCxcbiAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgfTtcbiAgICBmdW5jdGlvbiBjb21iaW5lKHNvdXJjZSwgZGVmYXVsdEZvcm1hdCwgcmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdC5mb250ID0gc291cmNlPy5mb250ID8/IGRlZmF1bHRGb3JtYXQuZm9udDtcbiAgICAgICAgcmVzdWx0LnNpemUgPSBzb3VyY2U/LnNpemUgPz8gZGVmYXVsdEZvcm1hdC5zaXplO1xuICAgICAgICByZXN1bHQuY29sb3IgPSBzb3VyY2U/LmNvbG9yID8/IGRlZmF1bHRGb3JtYXQuY29sb3I7XG4gICAgICAgIHJlc3VsdC5hbHBoYSA9IHNvdXJjZT8uYWxwaGEgPz8gZGVmYXVsdEZvcm1hdC5hbHBoYTtcbiAgICAgICAgcmVzdWx0LmJvbGQgPSBzb3VyY2U/LmJvbGQgPz8gZGVmYXVsdEZvcm1hdC5ib2xkO1xuICAgICAgICByZXN1bHQuaXRhbGljID0gc291cmNlPy5pdGFsaWMgPz8gZGVmYXVsdEZvcm1hdC5pdGFsaWM7XG4gICAgICAgIHJlc3VsdC51bmRlcmxpbmUgPSBzb3VyY2U/LnVuZGVybGluZSA/PyBkZWZhdWx0Rm9ybWF0LnVuZGVybGluZTtcbiAgICAgICAgcmVzdWx0LmxldHRlclNwYWNpbmcgPSBzb3VyY2U/LmxldHRlclNwYWNpbmcgPz8gZGVmYXVsdEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICByZXN1bHQubGVhZGluZyA9IHNvdXJjZT8ubGVhZGluZyA/PyBkZWZhdWx0Rm9ybWF0LmxlYWRpbmc7XG4gICAgICAgIHJlc3VsdC5hbGlnbiA9IHNvdXJjZT8uYWxpZ24gPz8gZGVmYXVsdEZvcm1hdC5hbGlnbjtcbiAgICAgICAgcmVzdWx0LnZlcnRpY2FsQWxpZ24gPSBzb3VyY2U/LnZlcnRpY2FsQWxpZ24gPz8gZGVmYXVsdEZvcm1hdC52ZXJ0aWNhbEFsaWduO1xuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmNvbWJpbmUgPSBjb21iaW5lO1xuICAgIGZ1bmN0aW9uIGNvcHkoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LmZvbnQgPSBzb3VyY2UuZm9udDtcbiAgICAgICAgdGFyZ2V0LnNpemUgPSBzb3VyY2Uuc2l6ZTtcbiAgICAgICAgdGFyZ2V0LmNvbG9yID0gc291cmNlLmNvbG9yO1xuICAgICAgICB0YXJnZXQuYWxwaGEgPSBzb3VyY2UuYWxwaGE7XG4gICAgICAgIHRhcmdldC5ib2xkID0gc291cmNlLmJvbGQ7XG4gICAgICAgIHRhcmdldC5pdGFsaWMgPSBzb3VyY2UuaXRhbGljO1xuICAgICAgICB0YXJnZXQudW5kZXJsaW5lID0gc291cmNlLnVuZGVybGluZTtcbiAgICAgICAgdGFyZ2V0LmxldHRlclNwYWNpbmcgPSBzb3VyY2UubGV0dGVyU3BhY2luZztcbiAgICAgICAgdGFyZ2V0LmxlYWRpbmcgPSBzb3VyY2UubGVhZGluZztcbiAgICAgICAgdGFyZ2V0LmFsaWduID0gc291cmNlLmFsaWduO1xuICAgICAgICB0YXJnZXQudmVydGljYWxBbGlnbiA9IHNvdXJjZS52ZXJ0aWNhbEFsaWduO1xuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIGdldEFsaWduVmFsdWUoZm9ybWF0KSB7XG4gICAgICAgIHN3aXRjaCAoZm9ybWF0Py5hbGlnbikge1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6IHJldHVybiAwO1xuICAgICAgICAgICAgY2FzZSAnY2VudGVyJzogcmV0dXJuIDAuNTtcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzogcmV0dXJuIDE7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmdldEFsaWduVmFsdWUgPSBnZXRBbGlnblZhbHVlO1xuICAgIGZ1bmN0aW9uIGdldFZlcnRpY2FsQWxpZ25WYWx1ZShmb3JtYXQpIHtcbiAgICAgICAgc3dpdGNoIChmb3JtYXQ/LnZlcnRpY2FsQWxpZ24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6IHJldHVybiAwO1xuICAgICAgICAgICAgY2FzZSAnbWlkZGxlJzogcmV0dXJuIDAuNTtcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6IHJldHVybiAxO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dEZvcm1hdC5nZXRWZXJ0aWNhbEFsaWduVmFsdWUgPSBnZXRWZXJ0aWNhbEFsaWduVmFsdWU7XG59KShUZXh0Rm9ybWF0IHx8IChUZXh0Rm9ybWF0ID0ge30pKTtcbiIsImltcG9ydCB7IEZvbnQgfSBmcm9tICcuL2ZvbnQnO1xuaW1wb3J0IHsgVGV4dEZvcm1hdCB9IGZyb20gJy4vZm9ybWF0JztcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi90ZXh0JztcbmNvbnN0IGRlZmF1bHRUZXh0Rm9ybWF0ID0ge307XG5leHBvcnQgdmFyIFRleHRMaW5lO1xuKGZ1bmN0aW9uIChUZXh0TGluZSkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN5bWJvbHM6IFtdLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFRleHRMaW5lLmNyZWF0ZSA9IGNyZWF0ZTtcbiAgICBmdW5jdGlvbiBlbXB0eShsaW5lKSB7XG4gICAgICAgIGxpbmUuc3ltYm9scy5sZW5ndGggPSAwO1xuICAgICAgICBsaW5lLndpZHRoID0gMDtcbiAgICAgICAgbGluZS5oZWlnaHQgPSAwO1xuICAgIH1cbiAgICBUZXh0TGluZS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGFkZChsaW5lLCBzeW1ib2wpIHtcbiAgICAgICAgbGluZS5zeW1ib2xzLnB1c2goc3ltYm9sKTtcbiAgICAgICAgbGluZS53aWR0aCArPSBzeW1ib2wuYWR2YW5jZTtcbiAgICAgICAgbGluZS5oZWlnaHQgPSBNYXRoLm1heChsaW5lLmhlaWdodCwgc3ltYm9sLmZvcm1hdC5zaXplICsgc3ltYm9sLmZvcm1hdC5sZWFkaW5nKTtcbiAgICB9XG4gICAgVGV4dExpbmUuYWRkID0gYWRkO1xuICAgIGZ1bmN0aW9uIGNvbmNhdCh0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlLnN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0YXJnZXQuc3ltYm9scy5wdXNoKC4uLnNvdXJjZS5zeW1ib2xzKTtcbiAgICAgICAgICAgIHRhcmdldC53aWR0aCArPSBzb3VyY2Uud2lkdGg7XG4gICAgICAgICAgICB0YXJnZXQuaGVpZ2h0ID0gTWF0aC5tYXgodGFyZ2V0LmhlaWdodCwgc291cmNlLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dExpbmUuY29uY2F0ID0gY29uY2F0O1xuICAgIGZ1bmN0aW9uIGNvcnJlY3RXaWR0aChsaW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3ltYm9scyB9ID0gbGluZTtcbiAgICAgICAgaWYgKHN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0ID0gc3ltYm9sc1tzeW1ib2xzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKC9cXHMvLnRlc3QobGFzdC5zeW1ib2wpKSB7XG4gICAgICAgICAgICAgICAgc3ltYm9scy5wb3AoKTtcbiAgICAgICAgICAgICAgICBsaW5lLndpZHRoIC09IGxhc3QuYWR2YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0TGluZS5jb3JyZWN0V2lkdGggPSBjb3JyZWN0V2lkdGg7XG4gICAgZnVuY3Rpb24gY29ycmVjdEhlaWdodChsaW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3ltYm9scyB9ID0gbGluZTtcbiAgICAgICAgaWYgKHN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzWzBdO1xuICAgICAgICAgICAgbGluZS5oZWlnaHQgLT0gc3ltYm9sLmZvcm1hdC5sZWFkaW5nO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRMaW5lLmNvcnJlY3RIZWlnaHQgPSBjb3JyZWN0SGVpZ2h0O1xufSkoVGV4dExpbmUgfHwgKFRleHRMaW5lID0ge30pKTtcbmV4cG9ydCB2YXIgVGV4dE1ldHJpY3M7XG4oZnVuY3Rpb24gKFRleHRNZXRyaWNzKSB7XG4gICAgZnVuY3Rpb24gZ2V0U3ltYm9scyhjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghdGV4dCB8fCAhdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgVGV4dEZvcm1hdC5jb21iaW5lKGNvbXBvbmVudC5mb3JtYXQsIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQsIGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgY29uc3Qgc3ltYm9scyA9IFtdO1xuICAgICAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2xGb3JtYXQgPSB7fTtcbiAgICAgICAgICAgIFRleHRGb3JtYXQuY29weShkZWZhdWx0VGV4dEZvcm1hdCwgc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvbnQgPSBGb250LmdldEZvbnQoc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHRleHRbaV07XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IHRleHRbaSArIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2Uoc3ltYm9sRm9udCwgc3ltYm9sRm9ybWF0LnNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBzeW1ib2xGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICBzeW1ib2xzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgIGFkdmFuY2UsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogc3ltYm9sRm9ybWF0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGV4dCkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJsb2NrID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb3JtYXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgVGV4dEZvcm1hdC5jb3B5KGRlZmF1bHRUZXh0Rm9ybWF0LCBzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb250ID0gRm9udC5nZXRGb250KHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYmxvY2subGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IGJsb2NrW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IGJsb2NrW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2Uoc3ltYm9sRm9udCwgc3ltYm9sRm9ybWF0LnNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBzeW1ib2xGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBzeW1ib2xGb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9ybWF0ID0ge307XG4gICAgICAgICAgICAgICAgICAgIFRleHRGb3JtYXQuY29tYmluZShibG9jaywgZGVmYXVsdFRleHRGb3JtYXQsIHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvbnQgPSBGb250LmdldEZvbnQoc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBibG9jay50ZXh0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBibG9jay50ZXh0W2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IGJsb2NrLnRleHRbaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShzeW1ib2xGb250LCBzeW1ib2xGb3JtYXQuc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIHN5bWJvbEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9scy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHN5bWJvbEZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzeW1ib2xzO1xuICAgIH1cbiAgICBUZXh0TWV0cmljcy5nZXRTeW1ib2xzID0gZ2V0U3ltYm9scztcbiAgICBmdW5jdGlvbiBnZXRMaW5lcyhjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3Qgc3ltYm9scyA9IGdldFN5bWJvbHMoY29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFzeW1ib2xzIHx8ICFzeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCB3b3JkV3JhcCA9IGZhbHNlIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IG11bHRpbGluZSA9IFRleHQuaXNNdWx0aWxpbmUoY29tcG9uZW50KTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXTtcbiAgICAgICAgbGV0IGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgaWYgKG11bHRpbGluZSkge1xuICAgICAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdvcmRXcmFwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdvcmQgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbC5zeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuY29uY2F0KGxpbmUsIHdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmVtcHR5KHdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKHdvcmQsIHN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmUud2lkdGggKyB3b3JkLndpZHRoID4gd2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgvXFxzLy50ZXN0KHN5bWJvbC5zeW1ib2wpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmNvbmNhdChsaW5lLCB3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuZW1wdHkod29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmNvbmNhdChsaW5lLCB3b3JkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2wuc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobGluZS53aWR0aCArIHN5bWJvbC5hZHZhbmNlID4gd2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQobGluZSwgc3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZChsaW5lLCBzeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2wuc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZChsaW5lLCBzeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tpXTtcbiAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQobGluZSwgc3ltYm9sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobGluZS5zeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGluZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgICAgIFRleHRMaW5lLmNvcnJlY3RXaWR0aChsaW5lKTtcbiAgICAgICAgICAgICAgICBpZiAoIWxpbmUuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuaGVpZ2h0ID0gZGVmYXVsdFRleHRGb3JtYXQuc2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW5lID0gbGluZXNbbGluZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBUZXh0TGluZS5jb3JyZWN0SGVpZ2h0KGxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lcztcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0TGluZXMgPSBnZXRMaW5lcztcbiAgICBmdW5jdGlvbiBnZXRNZXRyaWNzKGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBsaW5lcyA9IGdldExpbmVzKGNvbXBvbmVudCk7XG4gICAgICAgIGlmICghbGluZXMgfHwgIWxpbmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXRyaWNzID0ge1xuICAgICAgICAgICAgbGluZXMsXG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgbWV0cmljcy53aWR0aCA9IE1hdGgubWF4KG1ldHJpY3Mud2lkdGgsIGxpbmUud2lkdGgpO1xuICAgICAgICAgICAgbWV0cmljcy5oZWlnaHQgKz0gbGluZS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldHJpY3M7XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldE1ldHJpY3MgPSBnZXRNZXRyaWNzO1xuICAgIGZ1bmN0aW9uIGdldFNpbXBsZU1ldHJpY3MoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAodHlwZW9mIHRleHQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIFRleHRGb3JtYXQuY29tYmluZShjb21wb25lbnQuZm9ybWF0LCBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LCBkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGNvbnN0IHsgc2l6ZSwgbGV0dGVyU3BhY2luZywgbGVhZGluZyB9ID0gZGVmYXVsdFRleHRGb3JtYXQ7XG4gICAgICAgIGNvbnN0IGZvbnQgPSBGb250LmdldEZvbnQoZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gc2l6ZTtcbiAgICAgICAgbGV0IGxpbmVXaWR0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gdGV4dFtpXTtcbiAgICAgICAgICAgIGlmIChzeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ICs9IHNpemUgKyBsZWFkaW5nO1xuICAgICAgICAgICAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGxpbmVXaWR0aCk7XG4gICAgICAgICAgICAgICAgbGluZVdpZHRoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSB0ZXh0W2kgKyAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKGZvbnQsIHNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBsZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgIGxpbmVXaWR0aCArPSBhZHZhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGxpbmVXaWR0aCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0U2ltcGxlTWV0cmljcyA9IGdldFNpbXBsZU1ldHJpY3M7XG4gICAgZnVuY3Rpb24gZ2V0U2ltcGxlV2lkdGgoZm9ybWF0LCB0ZXh0LCBpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPj0gdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIFRleHRGb3JtYXQuY29tYmluZShmb3JtYXQsIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQsIGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgY29uc3QgeyBzaXplLCBsZXR0ZXJTcGFjaW5nIH0gPSBkZWZhdWx0VGV4dEZvcm1hdDtcbiAgICAgICAgY29uc3QgZm9udCA9IEZvbnQuZ2V0Rm9udChkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHRleHRbaV07XG4gICAgICAgICAgICBpZiAoc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSB0ZXh0W2kgKyAxXTtcbiAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2UoZm9udCwgc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIGxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICB3aWR0aCArPSBhZHZhbmNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0U2ltcGxlV2lkdGggPSBnZXRTaW1wbGVXaWR0aDtcbn0pKFRleHRNZXRyaWNzIHx8IChUZXh0TWV0cmljcyA9IHt9KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL3RleHQnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL2Zvcm1hdCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvZm9udCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvbWV0cmljcyc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy90ZXh0JztcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IFRleHRNZXRyaWNzIH0gZnJvbSAnLi9kYXRhL21ldHJpY3MnO1xuZXhwb3J0IGNvbnN0IFRFWFQgPSAndGV4dCc7XG5leHBvcnQgdmFyIFRleHQ7XG4oZnVuY3Rpb24gKFRleHQpIHtcbiAgICBmdW5jdGlvbiBnZXRUZXh0KGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCB7IHRleHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGV4dCkpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJsb2NrID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gYmxvY2sudGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgVGV4dC5nZXRUZXh0ID0gZ2V0VGV4dDtcbiAgICBmdW5jdGlvbiBpc1VwZGF0ZU1ldHJpY3MoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQudXBkYXRlTWV0cmljcyA/PyB0cnVlO1xuICAgIH1cbiAgICBUZXh0LmlzVXBkYXRlTWV0cmljcyA9IGlzVXBkYXRlTWV0cmljcztcbiAgICBmdW5jdGlvbiBpc0F1dG9TaXplKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gIWNvbXBvbmVudC53aWR0aCAmJiAhY29tcG9uZW50LmhlaWdodDtcbiAgICB9XG4gICAgVGV4dC5pc0F1dG9TaXplID0gaXNBdXRvU2l6ZTtcbiAgICBmdW5jdGlvbiBpc1NpbXBsZShjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjb21wb25lbnQudGV4dCA9PT0gJ3N0cmluZycgJiYgaXNBdXRvU2l6ZShjb21wb25lbnQpO1xuICAgIH1cbiAgICBUZXh0LmlzU2ltcGxlID0gaXNTaW1wbGU7XG4gICAgZnVuY3Rpb24gaXNNdWx0aWxpbmUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQubXVsdGlsaW5lID8/IHRydWU7XG4gICAgfVxuICAgIFRleHQuaXNNdWx0aWxpbmUgPSBpc011bHRpbGluZTtcbiAgICBmdW5jdGlvbiB1cGRhdGVNZXRyaWNzKGNvbXBvbmVudCkge1xuICAgICAgICBpZiAoaXNTaW1wbGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgY29tcG9uZW50Lm1ldHJpY3MgPSBUZXh0TWV0cmljcy5nZXRTaW1wbGVNZXRyaWNzKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb21wb25lbnQubWV0cmljcyA9IFRleHRNZXRyaWNzLmdldE1ldHJpY3MoY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0LnVwZGF0ZU1ldHJpY3MgPSB1cGRhdGVNZXRyaWNzO1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhjb21wb25lbnQsIGJvdW5kcykge1xuICAgICAgICBpZiAoaXNVcGRhdGVNZXRyaWNzKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHVwZGF0ZU1ldHJpY3MoY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG1ldHJpY3MgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCFtZXRyaWNzKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghd2lkdGgpIHtcbiAgICAgICAgICAgIHdpZHRoID0gbWV0cmljcy53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhlaWdodCkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gbWV0cmljcy5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoY29tcG9uZW50LCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGNvbXBvbmVudCwgaGVpZ2h0KTtcbiAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgIGJvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBUZXh0LmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFRleHQgfHwgKFRleHQgPSB7fSkpO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIFRleHRFeHRlbnNpb247XG4oZnVuY3Rpb24gKFRleHRFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KHRleHQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGxvY2FsIH0gPSBlbmdpbmUucG9pbnRlcnM7XG4gICAgICAgIFRleHQuY2FsY3VsYXRlQm91bmRzKHRleHQsIGJvdW5kcyk7XG4gICAgICAgIHJldHVybiBSZWN0YW5nbGUuY29udGFpbnMoYm91bmRzLCBsb2NhbCk7XG4gICAgfVxuICAgIFRleHRFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoVEVYVCwgaGl0VGVzdCk7XG4gICAgfVxuICAgIFRleHRFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShUZXh0RXh0ZW5zaW9uIHx8IChUZXh0RXh0ZW5zaW9uID0ge30pKTtcbiIsImV4cG9ydCBjb25zdCBMSU5FQVIgPSAnbGluZWFyJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUMgPSAncXVhZHJhdGljJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUNfSU4gPSAncXVhZHJhdGljaW4nO1xuZXhwb3J0IGNvbnN0IFFVQURSQVRJQ19PVVQgPSAncXVhZHJhdGljb3V0JztcbmV4cG9ydCBjb25zdCBDVUJJQyA9ICdjdWJpYyc7XG5leHBvcnQgY29uc3QgQ1VCSUNfSU4gPSAnY3ViaWNpbic7XG5leHBvcnQgY29uc3QgQ1VCSUNfT1VUID0gJ2N1Ymljb3V0JztcbmV4cG9ydCBjb25zdCBRVUFSVElDID0gJ3F1YXJ0aWMnO1xuZXhwb3J0IGNvbnN0IFFVQVJUSUNfSU4gPSAncXVhcnRpY2luJztcbmV4cG9ydCBjb25zdCBRVUFSVElDX09VVCA9ICdxdWFydGljb3V0JztcbmV4cG9ydCBjb25zdCBRVUlOVElDID0gJ3F1aW50aWMnO1xuZXhwb3J0IGNvbnN0IFFVSU5USUNfSU4gPSAncXVpbnRpY2luJztcbmV4cG9ydCBjb25zdCBRVUlOVElDX09VVCA9ICdxdWludGljb3V0JztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMID0gJ3F1aW50aWMnO1xuZXhwb3J0IGNvbnN0IFNJTlVTT0lEQUxfSU4gPSAncXVpbnRpY2luJztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMX09VVCA9ICdxdWludGljb3V0JztcbmV4cG9ydCBjb25zdCBFWFBPTkVOVElBTCA9ICdleHBvbmVudGlhbCc7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUxfSU4gPSAnZXhwb25lbnRpYWxpbic7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUxfT1VUID0gJ2V4cG9uZW50aWFsb3V0JztcbmV4cG9ydCBjb25zdCBDSVJDVUxBUiA9ICdjaXJjdWxhcic7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVJfSU4gPSAnY2lyY3VsYXJpbic7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVJfT1VUID0gJ2NpcmN1bGFyb3V0JztcbmV4cG9ydCBjb25zdCBFTEFTVElDID0gJ2VsYXN0aWMnO1xuZXhwb3J0IGNvbnN0IEVMQVNUSUNfSU4gPSAnZWxhc3RpY2luJztcbmV4cG9ydCBjb25zdCBFTEFTVElDX09VVCA9ICdlbGFzdGljb3V0JztcbmV4cG9ydCBjb25zdCBCQUNLID0gJ2JhY2snO1xuZXhwb3J0IGNvbnN0IEJBQ0tfSU4gPSAnYmFja2luJztcbmV4cG9ydCBjb25zdCBCQUNLX09VVCA9ICdiYWNrb3V0JztcbmV4cG9ydCBjb25zdCBCT1VOQ0UgPSAnYm91bmNlJztcbmV4cG9ydCBjb25zdCBCT1VOQ0VfSU4gPSAnYm91bmNlaW4nO1xuZXhwb3J0IGNvbnN0IEJPVU5DRV9PVVQgPSAnYm91bmNlb3V0JztcbmV4cG9ydCBjb25zdCBlYXNpbmcgPSB7XG4gICAgW0xJTkVBUl06ICh2YWx1ZSkgPT4gdmFsdWUsXG4gICAgW1FVQURSQVRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoLS12YWx1ZSAqICh2YWx1ZSAtIDIpIC0gMSk7XG4gICAgfSxcbiAgICBbUVVBRFJBVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVQURSQVRJQ19PVVRdOiAodmFsdWUpID0+ICh2YWx1ZSAqICgyIC0gdmFsdWUpKSxcbiAgICBbQ1VCSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqIHZhbHVlICsgMik7XG4gICAgfSxcbiAgICBbQ1VCSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtDVUJJQ19PVVRdOiAodmFsdWUpID0+ICgtLXZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDEpLFxuICAgIFtRVUFSVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlIC0gMik7XG4gICAgfSxcbiAgICBbUVVBUlRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVBUlRJQ19PVVRdOiAodmFsdWUpID0+ICgxIC0gLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVSU5USUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAyKTtcbiAgICB9LFxuICAgIFtRVUlOVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVSU5USUNfT1VUXTogKHZhbHVlKSA9PiAoLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMSksXG4gICAgW1NJTlVTT0lEQUxdOiAodmFsdWUpID0+ICgwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiB2YWx1ZSkpKSxcbiAgICBbU0lOVVNPSURBTF9JTl06ICh2YWx1ZSkgPT4gKDEgLSBNYXRoLmNvcygodmFsdWUgKiBNYXRoLlBJKSAvIDIpKSxcbiAgICBbU0lOVVNPSURBTF9PVVRdOiAodmFsdWUpID0+IChNYXRoLnNpbigodmFsdWUgKiBNYXRoLlBJKSAvIDIpKSxcbiAgICBbRVhQT05FTlRJQUxdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogTWF0aC5wb3coMTAyNCwgdmFsdWUgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKC1NYXRoLnBvdygyLCAtMTAgKiAodmFsdWUgLSAxKSkgKyAyKTtcbiAgICB9LFxuICAgIFtFWFBPTkVOVElBTF9JTl06ICh2YWx1ZSkgPT4gKHZhbHVlID09PSAwID8gMCA6IE1hdGgucG93KDEwMjQsIHZhbHVlIC0gMSkpLFxuICAgIFtFWFBPTkVOVElBTF9PVVRdOiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coMiwgLTEwICogdmFsdWUpKSxcbiAgICBbQ0lSQ1VMQVJdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHZhbHVlIC09IDIpICogdmFsdWUpICsgMSk7XG4gICAgfSxcbiAgICBbQ0lSQ1VMQVJfSU5dOiAodmFsdWUpID0+ICgxIC0gTWF0aC5zcXJ0KDEgLSB2YWx1ZSAqIHZhbHVlKSksXG4gICAgW0NJUkNVTEFSX09VVF06ICh2YWx1ZSkgPT4gTWF0aC5zcXJ0KDEgLSAtLXZhbHVlICogdmFsdWUpLFxuICAgIFtFTEFTVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSAqPSAyO1xuICAgICAgICBpZiAodmFsdWUgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gLTAuNSAqIE1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogTWF0aC5wb3coMiwgLTEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG4gICAgfSxcbiAgICBbRUxBU1RJQ19JTl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC1NYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG4gICAgfSxcbiAgICBbRUxBU1RJQ19PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLnBvdygyLCAtMTAgKiB2YWx1ZSkgKiBNYXRoLnNpbigodmFsdWUgLSAwLjEpICogNSAqIE1hdGguUEkpICsgMTtcbiAgICB9LFxuICAgIFtCQUNLXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4ICogMS41MjU7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogKHZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlIC0gcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlICsgcykgKyAyKTtcbiAgICB9LFxuICAgIFtCQUNLX0lOXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gdmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgLSBzKTtcbiAgICB9LFxuICAgIFtCQUNLX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICAgICAgcmV0dXJuIC0tdmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgKyBzKSArIDE7XG4gICAgfSxcbiAgICBbQk9VTkNFXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDAuNSkge1xuICAgICAgICAgICAgcmV0dXJuIGVhc2luZ1tCT1VOQ0VfSU5dKHZhbHVlICogMikgKiAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVhc2luZ1tCT1VOQ0VfT1VUXSh2YWx1ZSAqIDIgLSAxKSAqIDAuNSArIDAuNTtcbiAgICB9LFxuICAgIFtCT1VOQ0VfSU5dOiAodmFsdWUpID0+ICgxIC0gZWFzaW5nW0JPVU5DRV9PVVRdKDEgLSB2YWx1ZSkpLFxuICAgIFtCT1VOQ0VfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDEgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPCAyIC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAxLjUgLyAyLjc1KSAqIHZhbHVlICsgMC43NTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPCAyLjUgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDIuMjUgLyAyLjc1KSAqIHZhbHVlICsgMC45Mzc1O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMi42MjUgLyAyLjc1KSAqIHZhbHVlICsgMC45ODQzNzU7XG4gICAgfSxcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3R3ZWVuJztcbmV4cG9ydCAqIGZyb20gJy4vZWFzaW5nJztcbiIsImltcG9ydCB7IGVhc2luZywgTElORUFSIH0gZnJvbSAnLi9lYXNpbmcnO1xuZXhwb3J0IGNvbnN0IFRXRUVOID0gJ3R3ZWVuJztcbmV4cG9ydCB2YXIgVHdlZW5FeHRlbnNpb247XG4oZnVuY3Rpb24gKFR3ZWVuRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbXBvbmVudCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgdHdlZW4gfSA9IGNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgeyBwaGFzZXMgfSA9IHR3ZWVuO1xuICAgICAgICBpZiAoIXBoYXNlcz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnQW5pbWF0aW9uIHBhcnRzIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0d2Vlbi50aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHR3ZWVuLnRpbWUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHR3ZWVuLnRpbWUgKz0gZW5naW5lLnVwZGF0ZXIudGltZTtcbiAgICAgICAgY29uc3QgeyB0aW1lIH0gPSB0d2VlbjtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIHBoYXNlcy5mb3JFYWNoKChwaGFzZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFwaGFzZS50aW1lKSB7XG4gICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ0FuaW1hdGlvbiB0aW1lIG5vdCBzZXQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGhhc2Uub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBwaGFzZS5vZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlYXNpbmdOYW1lID0gcGhhc2U/LmVhc2luZz8udG9Mb3dlckNhc2UoKSA/PyBMSU5FQVI7XG4gICAgICAgICAgICBjb25zdCBlYXNpbmdNZXRob2QgPSBlYXNpbmdbZWFzaW5nTmFtZV07XG4gICAgICAgICAgICBpZiAoIWVhc2luZ01ldGhvZCkge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBVbmtub3duIGVhc2luZyB0eXBlOiAke2Vhc2luZ31gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICh0aW1lIC0gb2Zmc2V0KSAvIHBoYXNlLnRpbWU7XG4gICAgICAgICAgICBvZmZzZXQgKz0gcGhhc2UudGltZTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IDAgfHwgdmFsdWUgPiAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZWFzaW5nVmFsdWUgPSBlYXNpbmdNZXRob2QodmFsdWUpO1xuICAgICAgICAgICAgaWYgKCFwaGFzZS50bykge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdBbmltYXRpb24gXCJ0b1wiIHN0YXRlIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcGhhc2UuZnJvbSkge1xuICAgICAgICAgICAgICAgIHBoYXNlLmZyb20gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdG8sIGZyb20gfSA9IHBoYXNlO1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBjb21wb25lbnQ7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0bykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZyb21ba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21ba2V5XSA9IHN0YXRlW2tleV0gPz8gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZnJvbVZhbHVlID0gZnJvbVtrZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvVmFsdWUgPSB0b1trZXldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZnJvbVZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdG9WYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVWYWx1ZSA9IGZyb21WYWx1ZSArIGVhc2luZ1ZhbHVlICogKHRvVmFsdWUgLSBmcm9tVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gc3RhdGVWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0d2Vlbi5sb29wICYmIHR3ZWVuLnRpbWUgPiBvZmZzZXQpIHtcbiAgICAgICAgICAgIHR3ZWVuLnRpbWUgPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFR3ZWVuRXh0ZW5zaW9uLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5wcm9wZXJ0aWVzLnNldChUV0VFTiwgdXBkYXRlKTtcbiAgICB9XG4gICAgVHdlZW5FeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShUd2VlbkV4dGVuc2lvbiB8fCAoVHdlZW5FeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgQUJJTElUWV9XT0xGIH0gZnJvbSAnLi9hc3NldHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN1cnNpdmUoKSB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHR4OiAzMCxcblx0XHRcdHk6IDMwLFxuXHRcdFx0c2NhbGVYOiAwLjksXG5cdFx0XHRzY2FsZVk6IDAuOSxcblx0XHRcdHJvdGF0aW9uOiAwLjIsXG5cdFx0XHRhbHBoYTogMC45LFxuXHRcdFx0Y2hpbGRyZW46IFt7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQUJJTElUWV9XT0xGLFxuXHRcdFx0XHRzY2FsZTogMC4zLFxuXHRcdFx0fV0sXG5cdFx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdFx0dGhpcy5yb3RhdGlvbiArPSB0aW1lICogMC4wNTtcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblxuXHRjb250YWluZXIuY2hpbGRyZW4uY2hpbGRyZW4ucHVzaChjb250YWluZXIgYXMgbmV2ZXIpO1xuXG5cdHJldHVybiBjb250YWluZXI7XG59XG4iLCJjb25zdCBBU1NFVFMgPSAnYXNzZXRzLyc7XG5cbmV4cG9ydCBjb25zdCBBTklNQUxJU1QgPSAnaWQ6YW5pbWFsaXN0JztcbmV4cG9ydCBjb25zdCBBUkNIRVIgPSAnaWQ6YXJjaGVyJztcblxuZXhwb3J0IGNvbnN0IEFOSU1BTElTVF9JTUFHRSA9IGAke0FTU0VUU31BbmltYWxpc3RGb3gxX2ltYWdlLnBuZ2A7XG5leHBvcnQgY29uc3QgQVJDSEVSX0lNQUdFID0gYCR7QVNTRVRTfUFyY2hlcjJfaHVudGVyX2ltYWdlLnBuZ2A7XG5cbmV4cG9ydCBjb25zdCBBQklMSVRZX0ZPWCA9IGAke0FTU0VUU31BbmltYWxpc3RBYmlsaXR5X0ZveC5wbmdgO1xuZXhwb3J0IGNvbnN0IEFCSUxJVFlfV09MRiA9IGAke0FTU0VUU31BbmltYWxpc3RBYmlsaXR5X1dvbGYucG5nYDtcblxuZXhwb3J0IGNvbnN0IEJBQ0tHUk9VTkQgPSBgJHtBU1NFVFN9anVuZ2xlX2JhY2tncm91bmQuanBnYDtcblxuZXhwb3J0IGNvbnN0IFRFU1RfQ0FOVkFTID0gJ3Rlc3QuY2FudmFzJztcblxuZXhwb3J0IGNvbnN0IFNDRU5FID0gYCR7QVNTRVRTfS9zY2VuZS5qc29uYDtcbiIsImltcG9ydCB7IENhbnZhc0VuZ2luZSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgRW5naW5lTW9kdWxlIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBDYW52YXNUZXh0RXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvdGV4dCc7XG5pbXBvcnQgeyBDdXN0b21JbWFnZUV4dGVuc2lvbiB9IGZyb20gJy4vaW1hZ2UnO1xuaW1wb3J0IEN1c3RvbVBsYXRmb3JtIGZyb20gJy4vcGxhdGZvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21FbmdpbmUgZXh0ZW5kcyBDYW52YXNFbmdpbmUge1xuXHRjb25zdHJ1Y3Rvcihtb2R1bGU6IEVuZ2luZU1vZHVsZSA9IHt9KSB7XG5cdFx0bW9kdWxlLlBsYXRmb3JtID0gbW9kdWxlLlBsYXRmb3JtID8/IEN1c3RvbVBsYXRmb3JtO1xuXG5cdFx0c3VwZXIobW9kdWxlKTtcblxuXHRcdENhbnZhc1RleHRFeHRlbnNpb24uaW5pdCh0aGlzKTtcblx0XHRDdXN0b21JbWFnZUV4dGVuc2lvbi5pbml0KHRoaXMpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDYW52YXNFbmdpbmUsIENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnQGplbmcvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VFeHRlbnNpb24sIElNQUdFLCBJbWFnZSB9IGZyb20gJ0BqZW5nL2ltYWdlJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuXG5leHBvcnQgbmFtZXNwYWNlIEN1c3RvbUltYWdlRXh0ZW5zaW9uIHtcblx0ZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihpbWFnZTogSW1hZ2UsIGVuZ2luZTogQ2FudmFzRW5naW5lKTogdm9pZCB7XG5cdFx0aWYgKCFpbWFnZS5zcmMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB7IG1hdHJpeCwgY29sb3JUcmFuc2Zvcm0gfSA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG5cblx0XHRpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KGltYWdlLnNyYykgYXMgSW1hZ2VSZXNvdXJjZSB8IG51bGw7XG5cblx0XHRpZiAoIXJlc291cmNlPy5sb2FkZWQgfHwgIXJlc291cmNlPy5pbWFnZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbnRleHQyZCA9IChlbmdpbmUucGxhdGZvcm0gYXMgQ2FudmFzUGxhdGZvcm0pLmdldENvbnRleHQoKTtcblxuXHRcdGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oXG5cdFx0XHRtYXRyaXguYSxcblx0XHRcdG1hdHJpeC5iLFxuXHRcdFx0bWF0cml4LmMsXG5cdFx0XHRtYXRyaXguZCxcblx0XHRcdG1hdHJpeC50eCxcblx0XHRcdG1hdHJpeC50eSxcblx0XHQpO1xuXG5cdFx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcblx0XHRjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuXHRcdGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuXG5cdFx0Y29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcblx0XHRjb250ZXh0MmQuZmlsbFN0eWxlID0gJyc7XG5cdFx0Y29udGV4dDJkLnN0cm9rZVN0eWxlID0gJ2xpZ2h0Z3JheSc7XG5cdFx0Y29udGV4dDJkLnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG5cdH1cblxuXHRleHBvcnQgZnVuY3Rpb24gaW5pdChlbmdpbmU6IENhbnZhc0VuZ2luZSkge1xuXHRcdEltYWdlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcblx0XHRlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KElNQUdFLCByZW5kZXIpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDYW52YXNQbGF0Zm9ybSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21QbGF0Zm9ybSBleHRlbmRzIENhbnZhc1BsYXRmb3JtIHtcblx0Y2xlYXIoKSB7XG5cdFx0Y29uc3QgY29udGV4dDJkID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cdFx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICdibGFjayc7XG5cdFx0Y29udGV4dDJkLnNldFRyYW5zZm9ybSgpO1xuXHRcdGNvbnRleHQyZC5maWxsUmVjdCgwLCAwLCBjb250ZXh0MmQuY2FudmFzLndpZHRoLCBjb250ZXh0MmQuY2FudmFzLmhlaWdodCk7XG5cdFx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21SZXNvdXJjZU1hbmFnZXIge1xuXHRyZWFkb25seSBhbGlhc2VzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblx0cmVhZG9ubHkgcmVzb3VyY2VzID0gbmV3IE1hcDxzdHJpbmcsIEltYWdlUmVzb3VyY2U+KCk7XG5cblx0cmVzb2x2ZSA9IChhc3NldDogc3RyaW5nLCBlbmdpbmU6IEVuZ2luZSk6IEltYWdlUmVzb3VyY2UgfCBudWxsID0+IHtcblx0XHRpZiAoYXNzZXQuaW5kZXhPZignaWQ6JykgPT09IDApIHtcblx0XHRcdGNvbnN0IGlkID0gYXNzZXQuc2xpY2UoMyk7XG5cdFx0XHRsZXQgcmVzb3VyY2UgPSB0aGlzLnJlc291cmNlcy5nZXQoaWQpIGFzIEltYWdlUmVzb3VyY2U7XG5cdFx0XHRpZiAoIXJlc291cmNlKSB7XG5cdFx0XHRcdGNvbnN0IHVybCA9IHRoaXMuYWxpYXNlcy5nZXQoaWQpO1xuXHRcdFx0XHRpZiAodXJsKSB7XG5cdFx0XHRcdFx0cmVzb3VyY2UgPSBJbWFnZVJlc291cmNlLnJlc29sdmUodXJsLCBlbmdpbmUpIGFzIEltYWdlUmVzb3VyY2U7XG5cdFx0XHRcdFx0dGhpcy5yZXNvdXJjZXMuc2V0KGlkLCByZXNvdXJjZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZW5naW5lLmRlYnVnLndhcm5pbmcoYFJlc291cmNlIHdpdGggaWQ6ICR7YXNzZXR9IG5vdCBmb3VuZGApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzb3VyY2U7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aW5pdChlbmdpbmU6IEVuZ2luZSkge1xuXHRcdGVuZ2luZS5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZCh0aGlzLnJlc29sdmUpO1xuXHR9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFN0YXRpc3RpY3Mge1xuXHRnZXRSZW5kZXJUaW1lKCk6IG51bWJlcjtcblx0Z2V0VXBkYXRlVGltZSgpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcHMoc3RhdGlzdGljczogU3RhdGlzdGljcykge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHR0ZXh0OiAnZnBzJyxcblx0XHRmcmFtZXM6IDAsXG5cdFx0ZnJhbWVUaW1lOiAwLFxuXHRcdHVwZGF0ZVRpbWU6IDAsXG5cdFx0cmVuZGVyVGltZTogMCxcblx0XHRmb3JtYXQ6IHtcblx0XHRcdHNpemU6IDIwLFxuXHRcdFx0Y29sb3I6IDB4ZmZmZmZmLFxuXHRcdH0sXG5cdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLmZyYW1lVGltZSArPSB0aW1lO1xuXHRcdFx0dGhpcy51cGRhdGVUaW1lICs9IHN0YXRpc3RpY3MuZ2V0VXBkYXRlVGltZSgpO1xuXHRcdFx0dGhpcy5yZW5kZXJUaW1lICs9IHN0YXRpc3RpY3MuZ2V0UmVuZGVyVGltZSgpO1xuXHRcdFx0dGhpcy5mcmFtZXMrKztcblx0XHRcdGlmICh0aGlzLmZyYW1lVGltZSA+PSAxKSB7XG5cdFx0XHRcdGNvbnN0IGZyYW1lVGltZSA9IE1hdGguY2VpbCgxMDAwICogdGhpcy5mcmFtZVRpbWUgLyB0aGlzLmZyYW1lcyk7XG5cdFx0XHRcdGNvbnN0IHVwZGF0ZVRpbWUgPSAodGhpcy51cGRhdGVUaW1lIC8gdGhpcy5mcmFtZXMpLnRvRml4ZWQoMik7XG5cdFx0XHRcdGNvbnN0IHJlbmRlclRpbWUgPSAodGhpcy5yZW5kZXJUaW1lIC8gdGhpcy5mcmFtZXMpLnRvRml4ZWQoMik7XG5cdFx0XHRcdHRoaXMudGV4dCA9IGBmcHM6ICR7dGhpcy5mcmFtZXN9LCAke2ZyYW1lVGltZX0gbXNcXG51cGRhdGU6ICR7dXBkYXRlVGltZX0gbXNcXG5yZW5kZXI6ICR7cmVuZGVyVGltZX0gbXNgO1xuXHRcdFx0XHR0aGlzLmZyYW1lVGltZSA9IDA7XG5cdFx0XHRcdHRoaXMudXBkYXRlVGltZSA9IDA7XG5cdFx0XHRcdHRoaXMucmVuZGVyVGltZSA9IDA7XG5cdFx0XHRcdHRoaXMuZnJhbWVzID0gMDtcblx0XHRcdH1cblx0XHR9LFxuXHR9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQge1xuXHRBQklMSVRZX0ZPWCwgQUJJTElUWV9XT0xGLCBBTklNQUxJU1QsIEFSQ0hFUiwgQkFDS0dST1VORCwgU0NFTkUsXG59IGZyb20gJy4vYXNzZXRzJztcbmltcG9ydCBhcnRpZmFjdCBmcm9tICcuL2FydGlmYWN0JztcbmltcG9ydCB7IGZwcywgU3RhdGlzdGljcyB9IGZyb20gJy4vZnBzJztcbmltcG9ydCB7IHVuaXQsIFVuaXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi91bml0JztcbmltcG9ydCB7IHByZWxvYWRlciwgUHJlbG9hZGVySW5mbyB9IGZyb20gJy4vcHJlbG9hZGVyJztcblxuaW50ZXJmYWNlIE1haW4ge1xuXHRzdGFydCgpOiB2b2lkO1xuXHRba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmludGVyZmFjZSBNYWluUHJvcGVydGllcyBleHRlbmRzIFN0YXRpc3RpY3Mge1xuXHRnZXRDYW52YXNXaWR0aCgpOiBudW1iZXI7XG5cdGdldENhbnZhc0hlaWdodCgpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4ocGFyYW1ldGVyczogTWFpblByb3BlcnRpZXMpOiBNYWluIHtcblx0ZnVuY3Rpb24gb25Vbml0Q2xpY2soZGF0YTogVW5pdFByb3BlcnRpZXMpIHtcblx0XHRkYXRhLmhlYWx0aCA9IE1hdGgucmFuZG9tKCk7XG5cdFx0Y29uc29sZS5sb2coJ29uVW5pdENsaWNrJywgZGF0YS5uYW1lKTtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSB7XG5cdFx0dHlwZTogJ2xvYWRlcicsXG5cdFx0dmlzaWJsZTogZmFsc2UsXG5cdFx0ZW5hYmxlZDogZmFsc2UsXG5cdFx0b25Mb2FkZWQoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnYmFja2dyb3VuZCBsb2FkZWQnKTtcblx0XHRcdHRoaXMudmlzaWJsZSA9IHRydWU7XG5cdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdH0sXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdGJhY2tncm91bmQ6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBCQUNLR1JPVU5ELFxuXHRcdFx0XHRzY2FsZVg6IDEsXG5cdFx0XHRcdHNjYWxlWTogMSxcblx0XHRcdH0sXG5cdFx0XHRmaWd1cmU6IHtcblx0XHRcdFx0dHlwZTogJ3NoYXBlJyxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdHR5cGU6ICdyZWN0YW5nbGUnLFxuXHRcdFx0XHRcdHg6IDIwLFxuXHRcdFx0XHRcdHk6IDIwLFxuXHRcdFx0XHRcdHdpZHRoOiAxMDAsXG5cdFx0XHRcdFx0aGVpZ2h0OiA1MCxcblx0XHRcdFx0XHRmaWxsOiAweGZmMDBmZixcblx0XHRcdFx0XHRzdHJva2U6IDB4MDAwMGZmLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHNoYXBlczoge1xuXHRcdFx0XHR0eXBlOiAnc2hhcGUnLFxuXHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ2VsbGlwc2UnLFxuXHRcdFx0XHRcdFx0eDogMTAwLFxuXHRcdFx0XHRcdFx0eTogMTAwLFxuXHRcdFx0XHRcdFx0cmFkaXVzOiA1MCxcblx0XHRcdFx0XHRcdGZpbGw6IHsgdHlwZTogJ3NvbGlkJywgY29sb3I6IDB4ZmZmZjAwLCBhbHBoYTogMSB9LFxuXHRcdFx0XHRcdFx0c3Ryb2tlOiB7IGZpbGw6IDB4MDAwMGZmLCB0aGlja25lc3M6IDEwIH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAncGF0aCcsXG5cdFx0XHRcdFx0XHRkYXRhOiAnTSAxMTAsIDExMCBIIDE5MCBWIDE5MCBIIDExMCBaJyxcblx0XHRcdFx0XHRcdGZpbGw6IDB4OTkwMDAwLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ3BhdGgnLFxuXHRcdFx0XHRcdFx0ZGF0YTogW1xuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdtb3ZlVG8nLCB4OiAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDEwMCwgeTogMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAxMDAsIHk6IDEwMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAwLCB5OiAxMDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMCwgeTogMCB9LFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdGZpbGw6IHsgdHlwZTogJ3NvbGlkJywgY29sb3I6IDB4OTk5OTk5LCBhbHBoYTogMC42IH0sXG5cdFx0XHRcdFx0XHRzdHJva2U6IDB4MDAwMDAwLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0dW5pdHM6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0dW5pdCh7XG5cdFx0XHRcdFx0XHRuYW1lOiAnQXJjaGVyJywgaGVhbHRoOiAxLCBpbWFnZTogQVJDSEVSLCBvbkNsaWNrOiBvblVuaXRDbGljayxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHR1bml0KHtcblx0XHRcdFx0XHRcdG5hbWU6ICdBbmltYWxpc3QnLCBoZWFsdGg6IDEsIGltYWdlOiBBTklNQUxJU1QsIG9uQ2xpY2s6IG9uVW5pdENsaWNrLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdGFydGlmYWN0OiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHR4OiAzMDAsXG5cdFx0XHRcdHk6IDM1MCxcblx0XHRcdFx0Y2hpbGRyZW46IGFydGlmYWN0KCksXG5cdFx0XHR9LFxuXHRcdFx0bWFwOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHk6IDQ1MCxcblx0XHRcdFx0c2NhbGVYOiAwLjIsXG5cdFx0XHRcdHNjYWxlWTogMC4yLFxuXHRcdFx0XHRhbHBoYTogMC41LFxuXHRcdFx0XHRzcmM6ICd0ZXN0LmNhbnZhcycsXG5cdFx0XHRcdG9uUG9pbnRlck92ZXIoKSB7XG5cdFx0XHRcdFx0dGhpcy5hbHBoYSA9IDE7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uUG9pbnRlck91dCgpIHtcblx0XHRcdFx0XHR0aGlzLmFscGhhID0gMC41O1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGFiaWxpdHlGb3g6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBBQklMSVRZX0ZPWCxcblx0XHRcdFx0eDogNDUwLFxuXHRcdFx0XHR5OiA1MDAsXG5cdFx0XHRcdHNjYWxlOiAwLjUsXG5cdFx0XHRcdHRpbnQ6IHtcblx0XHRcdFx0XHRjb2xvcjogMHgwMGZmMDAsXG5cdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdH0gYXMgYW55LFxuXHRcdFx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdFx0XHRpZiAodGhpcy50aW50KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQudmFsdWUgKz0gdGltZTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLnRpbnQudmFsdWUgPj0gMSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRpbnQudmFsdWUgPSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0b25Qb2ludGVyRG93bihlOiBhbnkpIHtcblx0XHRcdFx0XHRpZiAodGhpcy50aW50KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQgPSBudWxsO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQgPSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAweDAwZmYwMCxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZygnZm94JywgZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YWJpbGl0eVdvbGY6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdHg6IDM1MCxcblx0XHRcdFx0eTogNDAwLFxuXHRcdFx0XHRjaGlsZHJlbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdFx0c3JjOiBBQklMSVRZX1dPTEYsXG5cdFx0XHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdFx0XHRhbHBoYTogMSxcblx0XHRcdFx0XHR0d2Vlbjoge1xuXHRcdFx0XHRcdFx0bG9vcDogdHJ1ZSxcblx0XHRcdFx0XHRcdHBoYXNlczogW1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB4OiAyMDAgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ2N1Ymljb3V0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHk6IDIwMCwgYWxwaGE6IDAuNSB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAncXVhZHJhdGljSW4nLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeDogMCwgYWxwaGE6IDEgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ3F1YWRyYXRpY091dCcsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0ZnBzOiBmcHMocGFyYW1ldGVycyksXG5cdFx0fSxcblx0fTtcblxuXHRjb25zdCBwcmVsb2FkZXJJbmZvOiBQcmVsb2FkZXJJbmZvID0ge1xuXHRcdGdldFdpZHRoOiBwYXJhbWV0ZXJzLmdldENhbnZhc1dpZHRoLFxuXHRcdGdldEhlaWdodDogcGFyYW1ldGVycy5nZXRDYW52YXNIZWlnaHQsXG5cdFx0Z2V0UHJvZ3Jlc3MoKSB7XG5cdFx0XHRyZXR1cm4gTG9hZGVyLmdldExvYWRpbmdQcm9ncmVzcyhjb250ZW50KTtcblx0XHR9LFxuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdGNvbnRlbnQsXG5cdFx0XHRwcmVsb2FkZXI6IHByZWxvYWRlcihwcmVsb2FkZXJJbmZvKSxcblx0XHRcdHNjZW5lOiB7XG5cdFx0XHRcdHR5cGU6ICdzY2VuZScsIHg6IDMwMCwgc3JjOiBTQ0VORSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRvblVwZGF0ZSgpIHtcblx0XHRcdGNvbnN0IGlzTG9hZGVkID0gIXRoaXMuY2hpbGRyZW4uY29udGVudC52aXNpYmxlO1xuXHRcdFx0dGhpcy5jaGlsZHJlbi5wcmVsb2FkZXIudmlzaWJsZSA9IGlzTG9hZGVkO1xuXHRcdFx0dGhpcy5jaGlsZHJlbi5wcmVsb2FkZXIuZW5hYmxlZCA9IGlzTG9hZGVkO1xuXHRcdH0sXG5cdFx0c3RhcnQoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnc3RhcnQnKTtcblx0XHR9LFxuXHR9O1xufVxuIiwiaW1wb3J0IHsgU2hhcGUgfSBmcm9tICdAamVuZy9zaGFwZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJlbG9hZGVySW5mbyB7XG5cdGdldFByb2dyZXNzKCk6IG51bWJlcjtcblx0Z2V0V2lkdGgoKTogbnVtYmVyO1xuXHRnZXRIZWlnaHQoKTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZGVyKGluZm86IFByZWxvYWRlckluZm8pIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnc2hhcGUnLFxuXHRcdHNjYWxlWDogMSxcblx0XHR5OiBpbmZvLmdldEhlaWdodCgpIC0gMjAsXG5cdFx0ZGF0YToge1xuXHRcdFx0dHlwZTogJ3JlY3RhbmdsZScsXG5cdFx0XHR3aWR0aDogMSxcblx0XHRcdGhlaWdodDogMjAsXG5cdFx0XHRmaWxsOiAweGZmMDAwMCxcblx0XHR9LFxuXHRcdG9uVXBkYXRlKCkge1xuXHRcdFx0dGhpcy5zY2FsZVggPSB0aGlzLnNjYWxlWCA/PyAwO1xuXHRcdFx0dGhpcy5zY2FsZVggKz0gKGluZm8uZ2V0V2lkdGgoKSAqIGluZm8uZ2V0UHJvZ3Jlc3MoKSAtIHRoaXMuc2NhbGVYKSAvIDI7XG5cdFx0fSxcblx0fSBhcyBTaGFwZTtcbn1cbiIsImNvbnN0IFNQRUVEID0gMTAwO1xuXG5pbnRlcmZhY2UgVW5pdCB7XG5cdFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVbml0UHJvcGVydGllcyB7XG5cdG5hbWU6IHN0cmluZyxcblx0aGVhbHRoOiBudW1iZXIsXG5cdGltYWdlOiBzdHJpbmcsXG5cdG9uQ2xpY2s6IChkYXRhOiBVbml0UHJvcGVydGllcykgPT4gdm9pZDtcbn1cblxuZnVuY3Rpb24gb25Qcm9wc1VwZGF0ZShwcm9wczogYW55LCBjYWxsYmFjazogKHRpbWU6IG51bWJlcikgPT4gdm9pZCkge1xuXHRjb25zdCBjb3B5ID0geyAuLi5wcm9wcyB9O1xuXHRyZXR1cm4gKHRpbWU6IG51bWJlcikgPT4ge1xuXHRcdC8vIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG5cdFx0bGV0IGNoYW5nZWQgPSBmYWxzZTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcblx0XHRmb3IgKGNvbnN0IGtleSBpbiBwcm9wcykge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuXHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0aWYgKGNvcHlba2V5XSAhPT0gcHJvcHNba2V5XSkge1xuXHRcdFx0XHRcdGNvcHlba2V5XSA9IHByb3BzW2tleV07XG5cdFx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlZCkge1xuXHRcdFx0Y2FsbGJhY2sodGltZSk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBydW5PblByb3BzVXBkYXRlKHByb3BzOiBhbnksIGNvbXBvbmVudDogYW55KSB7XG5cdGNvbXBvbmVudC5vblVwZGF0ZSA9IG9uUHJvcHNVcGRhdGUocHJvcHMsIGNvbXBvbmVudC5vblVwZGF0ZS5iaW5kKGNvbXBvbmVudCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pdChwcm9wczogVW5pdFByb3BlcnRpZXMpOiBVbml0IHtcblx0ZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XG5cdFx0cmV0dXJuIGAke3Byb3BzLm5hbWV9XFxuJHtNYXRoLnJvdW5kKHByb3BzLmhlYWx0aCAqIDEwMCl9JWA7XG5cdH1cblxuXHRjb25zdCB1bml0VmlldyA9IHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHR4OiA1MCArIE1hdGgucmFuZG9tKCkgKiA0MDAsXG5cdFx0eTogMjAwLFxuXHRcdHJvdGF0aW9uOiAwLFxuXHRcdHVwZGF0ZU1vdmUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLnggKz0gdGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggKiB0aW1lICogU1BFRUQ7XG5cdFx0XHRpZiAodGhpcy54IDwgNTApIHtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggPSAxO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnggPiA0MDApIHtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggPSAtMTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0dGhpcy51cGRhdGVNb3ZlKHRpbWUpO1xuXHRcdH0sXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdHRleHQ6IHtcblx0XHRcdFx0dHlwZTogJ3RleHQnLFxuXHRcdFx0XHR0ZXh0OiBnZXRUaXRsZSgpLFxuXHRcdFx0XHRmb3JtYXQ6IHtcblx0XHRcdFx0XHRzaXplOiAxNSxcblx0XHRcdFx0XHRjb2xvcjogMHhmZmRkZGQsXG5cdFx0XHRcdFx0YWxpZ246ICdjZW50ZXInLFxuXHRcdFx0XHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRib3JkZXI6IDB4MDBmZjAwLFxuXHRcdFx0XHR5OiAtMzAsXG5cdFx0XHRcdGhlaWdodDogMzUsXG5cdFx0XHRcdHBpdm90WDogMC41LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duOiAoKSA9PiB7XG5cdFx0XHRcdFx0cHJvcHMub25DbGljayhwcm9wcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uVXBkYXRlKCkge1xuXHRcdFx0XHRcdHRoaXMudGV4dCA9IGdldFRpdGxlKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBwcm9wcy5pbWFnZSxcblx0XHRcdFx0c2NhbGVYOiBNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xLFxuXHRcdFx0XHRwaXZvdFg6IDAuNSxcblx0XHRcdFx0b25Qb2ludGVyRG93bjogKCkgPT4ge1xuXHRcdFx0XHRcdHByb3BzLm9uQ2xpY2socHJvcHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXG5cdHJ1bk9uUHJvcHNVcGRhdGUocHJvcHMsIHVuaXRWaWV3LmNoaWxkcmVuLnRleHQpO1xuXG5cdHJldHVybiB1bml0Vmlldztcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCB7IENvbXBvbmVudCwgTW91c2VFeHRlbnNpb24gfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IFR3ZWVuRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvdHdlZW4nO1xuaW1wb3J0IHsgQ2FudmFzVGV4dEV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3RleHQnO1xuaW1wb3J0IHsgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL2ltYWdlJztcbmltcG9ydCB7IENhbnZhc1NoYXBlRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvc2hhcGUnO1xuaW1wb3J0IHsgQ2FudmFzRW5naW5lIH0gZnJvbSAnQGplbmcvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcbmltcG9ydCB7IFNjZW5lRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvc2NlbmUnO1xuaW1wb3J0IEN1c3RvbVJlc291cmNlTWFuYWdlciBmcm9tICcuL2VuZ2luZS9yZXNvdXJjZXMnO1xuaW1wb3J0IEN1c3RvbUVuZ2luZSBmcm9tICcuL2VuZ2luZS9lbmdpbmUnO1xuaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluJztcbmltcG9ydCB7XG5cdEFOSU1BTElTVCwgQU5JTUFMSVNUX0lNQUdFLCBBUkNIRVIsIEFSQ0hFUl9JTUFHRSwgVEVTVF9DQU5WQVMsXG59IGZyb20gJy4vYXNzZXRzJztcblxuLy8gcGFnZVxuZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAnMCc7XG5kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSAnMCc7XG5cbi8vIGJhc2ljIGVuZ2luZVxuY29uc3QgZW5naW5lID0gbmV3IENhbnZhc0VuZ2luZSgpO1xuQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5DYW52YXNUZXh0RXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbkNhbnZhc1NoYXBlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcblR3ZWVuRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcblNjZW5lRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbk1vdXNlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbmVuZ2luZS5zY3JlZW4uZnVsbHNjcmVlbiA9IHRydWU7XG5lbmdpbmUudGlja2VyLnBsYXkoKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZW5naW5lLnBsYXRmb3JtLnZpZXcpO1xuXG5jb25zdCBwYXJhbWV0ZXJzID0ge1xuXHRnZXRVcGRhdGVUaW1lKCkge1xuXHRcdHJldHVybiBlbmdpbmUudXBkYXRlci5lbGFwc2VkVGltZTtcblx0fSxcblx0Z2V0UmVuZGVyVGltZSgpIHtcblx0XHRyZXR1cm4gZW5naW5lLnJlbmRlcmVyLmVsYXBzZWRUaW1lO1xuXHR9LFxuXHRnZXRDYW52YXNXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiBlbmdpbmUuc2NyZWVuLmdldFdpZHRoKCk7XG5cdH0sXG5cdGdldENhbnZhc0hlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiBlbmdpbmUuc2NyZWVuLmdldEhlaWdodCgpO1xuXHR9LFxufTtcblxuLy8gYXBwbGljYXRpb25cbmNvbnN0IGFwcCA9IG1haW4ocGFyYW1ldGVycyk7XG5hcHAuc3RhcnQoKTtcbmVuZ2luZS5yb290ID0gYXBwIGFzIGFueSBhcyBDb21wb25lbnQ7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuY29uc29sZS5sb2coYXBwKTtcblxuLy8gdGVzdCBwYXVzZVxuc2V0VGltZW91dCgoKSA9PiBlbmdpbmUudGlja2VyLnBhdXNlKCksIDUwMDApO1xuc2V0VGltZW91dCgoKSA9PiBlbmdpbmUudGlja2VyLnBsYXkoKSwgMTAwMDApO1xuXG4vLyBjdXN0b20gZW5naW5lXG5jb25zdCBjdXN0b21FbmdpbmUgPSBuZXcgQ3VzdG9tRW5naW5lKCk7XG5jdXN0b21FbmdpbmUuc2NyZWVuLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbmN1c3RvbUVuZ2luZS5zY3JlZW4uaGVpZ2h0ID0gNjAwO1xuY3VzdG9tRW5naW5lLnVwZGF0ZXIuZW5hYmxlZCA9IGZhbHNlO1xuY3VzdG9tRW5naW5lLnJvb3QgPSBlbmdpbmUucm9vdDtcbmN1c3RvbUVuZ2luZS50aWNrZXIucGxheSgpO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUudG9wID0gJzBweCc7XG5jdXN0b21FbmdpbmUucGxhdGZvcm0udmlldy5zdHlsZS5sZWZ0ID0gJzYwMHB4JztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcpO1xuXG4vLyAvLyBzZXQgY3VzdG9tIHJlc291cmNlXG5lbmdpbmUucmVzb3VyY2VzLnJlc291cmNlcy5zZXQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBjdXN0b21FbmdpbmUucGxhdGZvcm0udmlldyxcblx0XHRsb2FkZWQ6IHRydWUsXG5cdH0gYXMgSW1hZ2VSZXNvdXJjZSxcbik7XG5jdXN0b21FbmdpbmUucmVzb3VyY2VzLnJlc291cmNlcy5zZXQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBlbmdpbmUucGxhdGZvcm0udmlldyxcblx0XHRsb2FkZWQ6IHRydWUsXG5cdH0gYXMgSW1hZ2VSZXNvdXJjZSxcbik7XG5cbi8vIGN1c3RvbSByZXNvdXJjZSByZXNvbHZlclxuY29uc3QgcmVzb3VyY2VNYW5hZ2VyID0gbmV3IEN1c3RvbVJlc291cmNlTWFuYWdlcigpO1xucmVzb3VyY2VNYW5hZ2VyLmFsaWFzZXMuc2V0KEFSQ0hFUi5yZXBsYWNlKCdpZDonLCAnJyksIEFSQ0hFUl9JTUFHRSk7XG5yZXNvdXJjZU1hbmFnZXIuYWxpYXNlcy5zZXQoQU5JTUFMSVNULnJlcGxhY2UoJ2lkOicsICcnKSwgQU5JTUFMSVNUX0lNQUdFKTtcbnJlc291cmNlTWFuYWdlci5pbml0KGVuZ2luZSk7XG5yZXNvdXJjZU1hbmFnZXIuaW5pdChjdXN0b21FbmdpbmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==