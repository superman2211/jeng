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
/* harmony export */   "CONTAINER": () => (/* binding */ CONTAINER),
/* harmony export */   "ContainerExtension": () => (/* binding */ ContainerExtension)
/* harmony export */ });
/* unused harmony export Container */
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
/* harmony export */   "Resources": () => (/* binding */ Resources)
/* harmony export */ });
/* unused harmony export Resource */
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
/* harmony export */   "CONTAINER": () => (/* reexport safe */ _components_container__WEBPACK_IMPORTED_MODULE_1__.CONTAINER),
/* harmony export */   "Engine": () => (/* reexport safe */ _core_engine__WEBPACK_IMPORTED_MODULE_3__.Engine),
/* harmony export */   "Platform": () => (/* reexport safe */ _features_platform__WEBPACK_IMPORTED_MODULE_7__.Platform),
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

/* unused harmony export MouseExtension */
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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var emptyArray = [];
var domMatrix = new DOMMatrix();

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
            matrix = bitmapFill.matrix;

        if (!src) {
          return '';
        }

        var resource = engine.resources.get(src);

        if (resource !== null && resource !== void 0 && resource.image) {
          var pattern = _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns.bitmapPattern(resource.image, repeat, context);

          if (pattern && matrix) {
            var _matrix$a, _matrix$b, _matrix$c, _matrix$d, _matrix$tx, _matrix$ty;

            domMatrix.a = (_matrix$a = matrix.a) !== null && _matrix$a !== void 0 ? _matrix$a : 1;
            domMatrix.b = (_matrix$b = matrix.b) !== null && _matrix$b !== void 0 ? _matrix$b : 0;
            domMatrix.c = (_matrix$c = matrix.c) !== null && _matrix$c !== void 0 ? _matrix$c : 0;
            domMatrix.d = (_matrix$d = matrix.d) !== null && _matrix$d !== void 0 ? _matrix$d : 1;
            domMatrix.e = (_matrix$tx = matrix.tx) !== null && _matrix$tx !== void 0 ? _matrix$tx : 0;
            domMatrix.f = (_matrix$ty = matrix.ty) !== null && _matrix$ty !== void 0 ? _matrix$ty : 0;
            pattern.setTransform(domMatrix);
          }

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Graphics)
/* harmony export */ });
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
    value: function lineGradientStyle(type, color, alpha, ratio) {
      var matrix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : emptyMatrix;

      if (!this.stroke) {
        return;
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

/***/ "../../packages/shape/dist/index.js":
/*!******************************************!*\
  !*** ../../packages/shape/dist/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SHAPE": () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_5__.SHAPE),
/* harmony export */   "CanvasShapeExtension": () => (/* reexport safe */ _canvas_shape__WEBPACK_IMPORTED_MODULE_6__.CanvasShapeExtension)
/* harmony export */ });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/data */ "../../packages/shape/dist/data/data.js");
/* harmony import */ var _data_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/path */ "../../packages/shape/dist/data/path.js");
/* harmony import */ var _data_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/string */ "../../packages/shape/dist/data/string.js");
/* harmony import */ var _data_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/style */ "../../packages/shape/dist/data/style.js");
/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphics */ "../../packages/shape/dist/graphics.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shape */ "../../packages/shape/dist/shape.js");
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
/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphics */ "../../packages/shape/dist/graphics.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






var SHAPE = 'shape';
var bounds = _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Bounds.empty();
var Shape;

(function (Shape) {
  function getGraphics(shape) {
    return new _graphics__WEBPACK_IMPORTED_MODULE_4__.default(shape);
  }

  Shape.getGraphics = getGraphics;

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
/* harmony import */ var _jeng_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/shape */ "../../packages/shape/dist/index.js");
/* harmony import */ var _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jeng/canvas-engine */ "../../packages/canvas-engine/dist/index.js");
/* harmony import */ var _jeng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jeng/core */ "../../packages/core/dist/index.js");



const engine = new _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_1__.CanvasEngine();
_jeng_shape__WEBPACK_IMPORTED_MODULE_0__.CanvasShapeExtension.init(engine);
engine.screen.fullscreen = true;
engine.ticker.play();
document.body.appendChild(engine.platform.view);
engine.root = {
    type: _jeng_core__WEBPACK_IMPORTED_MODULE_2__.CONTAINER,
    children: {
        rectangle: {
            type: _jeng_shape__WEBPACK_IMPORTED_MODULE_0__.SHAPE,
            data: {
                type: 'rectangle',
                x: 20,
                y: 20,
                width: 100,
                height: 50,
                fill: {
                    type: 'linear',
                    beginX: 20,
                    endX: 120,
                    colors: [0xff0000, 0x00ff00, 0x0000ff],
                    alphas: [1, 0.5, 0.8],
                    ratios: [0, 0.3, 1],
                },
                stroke: 0x0000ff,
            },
        },
        ellipse: {
            type: _jeng_shape__WEBPACK_IMPORTED_MODULE_0__.SHAPE,
            x: 100,
            y: -30,
            data: {
                type: 'ellipse',
                x: 100,
                y: 100,
                radius: 50,
                fill: {
                    type: 'radial',
                    beginX: 80,
                    beginY: 80,
                    endRadius: 80,
                    colors: [0xffffff, 0xff0000, 0x0000ff],
                    alphas: [1, 0.5, 0.8],
                    ratios: [0, 0.3, 1],
                },
            },
        },
        heart: {
            type: _jeng_shape__WEBPACK_IMPORTED_MODULE_0__.SHAPE,
            x: 30,
            y: 120,
            scale: 2,
            data: {
                type: 'path',
                data: 'M 65,29 C 59,19 49,12 37,12 20,12 7,25 7,42 7,75 25,80 65,118 105,80 123,75 123,42 123,25 110,12 93,12 81,12 71,19 65,29 z',
                fill: {
                    type: 'bitmap',
                    matrix: {
                        a: 0.3,
                        b: 0,
                        c: 0,
                        d: 0.3,
                        tx: 30,
                        ty: 30,
                    },
                    src: 'assets/discharge.png',
                },
                stroke: 0,
            },
        },
    },
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGFwZS1hZHZhbmNlZC8uLi9wYWNrYWdlcy9jYW52YXMtZW5naW5lL2Rpc3QvZW5naW5lLmpzIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkLy4uL3BhY2thZ2VzL2NhbnZhcy1lbmdpbmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaGFwZS1hZHZhbmNlZC8uLi9wYWNrYWdlcy9jYW52YXMtZW5naW5lL2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vc2hhcGUtYWR2YW5jZWQvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L3BsYXRmb3JtLmpzIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9zaGFwZS1hZHZhbmNlZC8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvY29tcG9uZW50cy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vc2hhcGUtYWR2YW5jZWQvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvcmUvZW5naW5lLmpzIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9jb3JlL2ZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vc2hhcGUtYWR2YW5jZWQvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9zaGFwZS1hZHZhbmNlZC8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy9waXZvdC5qcyIsIndlYnBhY2s6Ly9zaGFwZS1hZHZhbmNlZC8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy9wb2ludGVyLmpzIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9leHRlbnNpb25zL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zaGFwZS1hZHZhbmNlZC8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vc2hhcGUtYWR2YW5jZWQvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vc2hhcGUtYWR2YW5jZWQvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL2RlYnVnLmpzIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9sb2FkaW5nLmpzIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9zaGFwZS1hZHZhbmNlZC8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvcG9pbnRlcnMuanMiLCJ3ZWJwYWNrOi8vc2hhcGUtYWR2YW5jZWQvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3JlbmRlcmVyLmpzIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9yZXNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vc2hhcGUtYWR2YW5jZWQvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9zaGFwZS1hZHZhbmNlZC8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvdGlja2VyLmpzIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy91cGRhdGVyLmpzIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaGFwZS1hZHZhbmNlZC8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvaW5wdXQvbW91c2UuanMiLCJ3ZWJwYWNrOi8vc2hhcGUtYWR2YW5jZWQvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L2JvdW5kcy5qcyIsIndlYnBhY2s6Ly9zaGFwZS1hZHZhbmNlZC8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvY29sb3ItdHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaGFwZS1hZHZhbmNlZC8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvbWF0cml4LmpzIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9wb2ludC5qcyIsIndlYnBhY2s6Ly9zaGFwZS1hZHZhbmNlZC8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkLy4uL3BhY2thZ2VzL3Jlc291cmNlcy9kaXN0L2ltYWdlLmpzIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkLy4uL3BhY2thZ2VzL3Jlc291cmNlcy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkLy4uL3BhY2thZ2VzL3Jlc291cmNlcy9kaXN0L3N0cmluZy5qcyIsIndlYnBhY2s6Ly9zaGFwZS1hZHZhbmNlZC8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9lbGxpcHNlLmpzIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvY2FudmFzL3BhdGguanMiLCJ3ZWJwYWNrOi8vc2hhcGUtYWR2YW5jZWQvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvY2FudmFzL3NoYXBlLmpzIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvY2FudmFzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9zaGFwZS1hZHZhbmNlZC8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9zdHlsZS5qcyIsIndlYnBhY2s6Ly9zaGFwZS1hZHZhbmNlZC8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2RhdGEvZGF0YS5qcyIsIndlYnBhY2s6Ly9zaGFwZS1hZHZhbmNlZC8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2RhdGEvcGF0aC5qcyIsIndlYnBhY2s6Ly9zaGFwZS1hZHZhbmNlZC8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2RhdGEvc3RyaW5nLmpzIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvZ3JhcGhpY3MuanMiLCJ3ZWJwYWNrOi8vc2hhcGUtYWR2YW5jZWQvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaGFwZS1hZHZhbmNlZC8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L3NoYXBlLmpzIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaGFwZS1hZHZhbmNlZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NoYXBlLWFkdmFuY2VkLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbIkNhbnZhc0VuZ2luZSIsIm1vZHVsZSIsIlBsYXRmb3JtIiwiQ2FudmFzUGxhdGZvcm0iLCJFbmdpbmUiLCJDYW52YXNQYXR0ZXJucyIsImNvbG9yUGF0dGVybiIsImNvbG9yIiwiYWxwaGEiLCJjdCIsInIiLCJnIiwiYiIsImEiLCJDb2xvclRyYW5zZm9ybSIsInJlZE11bHRpcGxpZXIiLCJyZWRPZmZzZXQiLCJncmVlbk11bHRpcGxpZXIiLCJncmVlbk9mZnNldCIsImJsdWVNdWx0aXBsaWVyIiwiYmx1ZU9mZnNldCIsImFscGhhTXVsdGlwbGllciIsImFscGhhT2Zmc2V0IiwiYWRkR3JhZGllbnRDb2xvcnMiLCJwYXR0ZXJuIiwiY29sb3JzIiwiYWxwaGFzIiwicmF0aW9zIiwiY29sb3JUcmFuc2Zvcm0iLCJpIiwibGVuZ3RoIiwicmF0aW8iLCJjb2xvclN0eWxlIiwiYWRkQ29sb3JTdG9wIiwicmFkaWFsR3JhZGllbnRQYXR0ZXJuIiwiYmVnaW5YIiwiYmVnaW5ZIiwiYmVnaW5SYWRpdXMiLCJlbmRYIiwiZW5kWSIsImVuZFJhZGl1cyIsImNvbnRleHQiLCJjcmVhdGVSYWRpYWxHcmFkaWVudCIsImxpbmVhckdyYWRpZW50UGF0dGVybiIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYml0bWFwUGF0dGVybiIsImltYWdlIiwicmVwZWF0IiwiY3JlYXRlUGF0dGVybiIsImFyZ3VtZW50cyIsInZpZXciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0cyIsImdldENvbnRleHQiLCJjdXN0b21Db250ZXh0cyIsInB1c2giLCJwb3AiLCJlbmdpbmUiLCJkZWJ1ZyIsIndhcm5pbmciLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImNsZWFyIiwidXBkYXRlU2l6ZSIsInNldFRyYW5zZm9ybSIsImNsZWFyUmVjdCIsInNjcmVlbiIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwicGl4ZWxSYXRpbyIsImdldFBpeGVsUmF0aW8iLCJ2aWV3V2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJ2aWV3SGVpZ2h0Iiwic3R5bGUiLCJDT05UQUlORVIiLCJDb250YWluZXIiLCJudW1DaGlsZHJlbiIsImNvbnRhaW5lciIsImNoaWxkcmVuIiwiQXJyYXkiLCJpc0FycmF5IiwidHlwZSIsImtleXMiLCJPYmplY3QiLCJDb250YWluZXJFeHRlbnNpb24iLCJyZW5kZXIiLCJyZW5kZXJlciIsImRlcHRoIiwiY29tcG9uZW50IiwicmVuZGVyQ29tcG9uZW50IiwiY29tcG9uZW50c01hcCIsInVwZGF0ZSIsInVwZGF0ZXIiLCJ1cGRhdGVDb21wb25lbnQiLCJoaXRUZXN0IiwicG9pbnRlckV2ZW50cyIsInBvaW50ZXJzIiwicmVzdWx0IiwiZGlzcGF0Y2hDb21wb25lbnQiLCJsb2FkZWQiLCJsb2FkaW5nIiwicHJvZ3Jlc3MiLCJjb21wb25lbnRDb250ZXh0IiwiaW5pdCIsImNvbXBvbmVudHMiLCJzZXQiLCJMT0FERVIiLCJMb2FkZXIiLCJnZXRMb2FkaW5nUHJvZ3Jlc3MiLCJsb2FkZXIiLCJsb2FkaW5nUHJvZ3Jlc3MiLCJpc0xvYWRlZCIsIm5lZWRMb2FkaW5nQ2hlY2siLCJsb2FkaW5nQ2hlY2siLCJMb2FkZXJFeHRlbnNpb24iLCJvbkxvYWRlZCIsIkNvbXBvbmVudHMiLCJTY3JlZW4iLCJVcGRhdGVyIiwiTG9hZGluZyIsIlJlbmRlcmVyIiwiUG9pbnRlcnMiLCJUaWNrZXIiLCJEZWJ1ZyIsIlJlc291cmNlcyIsInBsYXRmb3JtIiwidGlja2VyIiwicmVzb3VyY2VzIiwiRW5naW5lRmVhdHVyZSIsIkRpc3BsYXkiLCJpc1Zpc2libGUiLCJ2aXNpYmxlIiwiUGl2b3QiLCJnZXRYIiwicGl2b3QiLCJwaXZvdFgiLCJnZXRZIiwicGl2b3RZIiwiaGFzVmFsdWVzIiwiaGFuZGxlcnNNYXAiLCJwb2ludGVyRG93biIsInBvaW50ZXJVcCIsInBvaW50ZXJNb3ZlIiwicG9pbnRlck92ZXIiLCJwb2ludGVyT3V0IiwiUG9pbnRlciIsImlzUG9pbnRlck92ZXIiLCJwb2ludGVyIiwiaXNQb2ludGVyRW5hYmxlZCIsInBvaW50ZXJFbmFibGVkIiwiZGlzcGF0Y2hFdmVudCIsIngiLCJ5IiwiaWQiLCJoYW5kbGVyTmFtZSIsImV2ZW50IiwiVHJhbnNmb3JtIiwiZ2V0TWF0cml4IiwidHJhbnNmb3JtIiwibWF0cml4IiwiYyIsImQiLCJ0eCIsInR5Iiwicm90YXRpb24iLCJzY2FsZVgiLCJzY2FsZSIsInNjYWxlWSIsImNvcyIsInNpbiIsImdldENvbG9yVHJhbnNmb3JtIiwidGludCIsInZhbHVlIiwidmFsdWVJbnZlcnRlZCIsImJyaWdodG5lc3MiLCJ1bmRlZmluZWQiLCJwZXJjZW50IiwiYWJzIiwib2Zmc2V0IiwiVXBkYXRlIiwiaXNFbmFibGVkIiwiZW5hYmxlZCIsInRpbWUiLCJvblVwZGF0ZSIsInByb3BlcnRpZXMiLCJNYXAiLCJlcnJvcnMiLCJ3YXJuaW5ncyIsImNvbnNvbGUiLCJsb2ciLCJhcmdzIiwiU3RyaW5nIiwiY291bnQiLCJnZXQiLCJlcnJvciIsIndhcm4iLCJlbGFwc2VkVGltZSIsImhhbmRsZXIiLCJyb290Iiwic3RhcnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJnbG9iYWwiLCJQb2ludCIsImxvY2FsIiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJNYXRyaXgiLCJiYXNlIiwicGFyZW50IiwiYmVnaW4iLCJlbmQiLCJSZXNvdXJjZSIsImdldFByb2dyZXNzIiwicmVzb3VyY2UiLCJieXRlc1RvdGFsIiwiYnl0ZXNMb2FkZWQiLCJyZXNvbHZlcnMiLCJTZXQiLCJhc3NldCIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1bGxzY3JlZW4iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiZnJhbWVSYXRlIiwicGF1c2VkIiwidXBkYXRlRnJhbWUiLCJjdXJyZW50VGltZSIsImRlbHRhVGltZSIsInVwZGF0ZU5leHRGcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZVByb3BlcnRpZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJjbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRMZWZ0IiwiY2xpZW50WSIsInRvcCIsImNsaWVudFRvcCIsImRpc3BhdGNoIiwicHJldmVudERlZmF1bHQiLCJNb3VzZUV4dGVuc2lvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJCb3VuZHMiLCJlbXB0eSIsIm1pblgiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJtaW5ZIiwibWF4WCIsIk1JTl9WQUxVRSIsIm1heFkiLCJzZXRFbXB0eSIsImJvdW5kcyIsImlzRW1wdHkiLCJ0b1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInRlc3RYIiwidGVzdFkiLCJ0ZXN0IiwidGVzdFBvaW50IiwicG9pbnQiLCJpc0VtcHR5V2l0aEFscGhhIiwiY29weSIsImZyb20iLCJ0byIsImNvbmNhdCIsImN0MSIsImN0MCIsIm1hdHJpeDAiLCJtYXRyaXgxIiwiZ2V0RGV0ZXJtaW5hbnQiLCJpbnZlcnQiLCJkZXRlcm1pbmFudCIsInRyYW5zZm9ybVBvaW50IiwidHJhbnNmb3JtUG9pbnRMb2NhbCIsInRyYW5zZm9ybUludmVyc2VQb2ludCIsInRyYW5zZm9ybUJvdW5kcyIsInJ4IiwicnkiLCJyciIsInJiIiwibngxIiwibnkxIiwibngyIiwibnkyIiwibngzIiwibnkzIiwibng0Iiwibnk0IiwicmlnaHQiLCJib3R0b20iLCJzcXJ0IiwiYW5nbGUiLCJhdGFuMiIsImVxdWFscyIsInBvaW50MCIsInBvaW50MSIsInNvdXJjZSIsInRhcmdldCIsIm5vcm1hbGl6ZSIsInRoaWNrbmVzcyIsImRpc3RhbmNlIiwiZHgiLCJkeSIsImludGVycG9sYXRlIiwicG9sYXIiLCJSZWN0YW5nbGUiLCJpbnRlcnNlY3Rpb24iLCJjb250YWlucyIsInJvdW5kIiwiSW1hZ2VSZXNvdXJjZSIsImV4dGVuc2lvbiIsInNwbGl0Iiwic3JjIiwib25sb2FkIiwib25lcnJvciIsImUiLCJhZGQiLCJTdHJpbmdSZXNvdXJjZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ucHJvZ3Jlc3MiLCJ0b3RhbCIsImRhdGEiLCJyZXNwb25zZVRleHQiLCJzZW5kIiwiUElfMiIsIlBJIiwiYXBwbHlFbGxpcHNlIiwiaGFzRmlsbCIsInJhZGl1cyIsInJhZGl1c1giLCJyYWRpdXNZIiwiYmVnaW5QYXRoIiwiZWxsaXBzZSIsImNsb3NlUGF0aCIsImFwcGx5Q29tbWFuZCIsImNvbW1hbmQiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjdXJ2ZVRvIiwicXVhZHJhdGljQ3VydmVUbyIsImN4IiwiY3kiLCJjdWJpY0N1cnZlVG8iLCJiZXppZXJDdXJ2ZVRvIiwic3giLCJzeSIsImFwcGx5UGF0aCIsImFwcGx5UmVjdGFuZ2xlIiwicmVjdCIsInJlbmRlckdyYXBoaWNzIiwiZmlsbCIsInN0cm9rZSIsImhhc1N0cm9rZSIsImV4aXN0IiwicGF0aCIsImFwcGx5U3RyaW5nIiwic2V0RmlsbFN0eWxlIiwic2V0U3Ryb2tlU3R5bGUiLCJDYW52YXNTaGFwZUV4dGVuc2lvbiIsInNoYXBlIiwiU2hhcGUiLCJjb250ZXh0MmQiLCJnbG9iYWxBbHBoYSIsIlNoYXBlRXh0ZW5zaW9uIiwiU0hBUEUiLCJyZWFkZXIiLCJHcmFwaGljc1N0cmluZ1JlYWRlciIsInNldFBhdGgiLCJyZWFkTmV4dCIsImdldENvbW1hbmQiLCJlbXB0eUFycmF5IiwiZG9tTWF0cml4IiwiRE9NTWF0cml4IiwiZ2V0Q2FudmFzUGF0dGVybiIsInNvbGlkIiwibGluZWFyIiwicmFkaWFsIiwiYml0bWFwRmlsbCIsImYiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsImxpbmVDYXAiLCJsaW5lSm9pbiIsIm1pdGVyTGltaXQiLCJjYXBzIiwiam9pbnRzIiwiUmVjdGFuZ2xlRGF0YSIsImNhbGN1bGF0ZUJvdW5kcyIsIkVsbGlwc2VEYXRhIiwiUGF0aERhdGEiLCJwYXRoRGF0YSIsIkdyYXBoaWNzU3RyaW5nIiwiUGF0aENvbW1hbmQiLCJHcmFwaGljc0RhdGEiLCJOVU1CRVJTX0NPVU5UIiwiTSIsIm0iLCJMIiwibCIsIkgiLCJoIiwiViIsInYiLCJDIiwiUyIsInMiLCJRIiwicSIsIlQiLCJ0IiwiQ09NTUFORF9SRUdFWCIsIk5VTUJFUl9SRUdFWCIsIkdyYXBoaWNzU3RyaW5nU3RyZWFtIiwiYnVmZmVyIiwic3ltYm9sUmVnZXgiLCJsYXN0SW5kZXgiLCJzeW1ib2xNYXRjaCIsImV4ZWMiLCJzeW1ib2wiLCJudW1iZXJNYXRjaCIsInBhcnNlRmxvYXQiLCJzdHJlYW0iLCJjb21tYW5kRXhpc3RzIiwibGFzdFgiLCJsYXN0WSIsImxhc3RDWCIsImxhc3RDWSIsInBhcnNlIiwiZ2V0QnVmZmVyIiwiZTAiLCJlMSIsImUyIiwiZTMiLCJlNCIsImU1IiwidGVtcFBvaW50MCIsInRlbXBQb2ludDEiLCJlbXB0eU1hdHJpeCIsIkdyYXBoaWNzIiwic21vb3RoIiwicGl4ZWxIaW50aW5nIiwic2NhbGVNb2RlIiwiZ2V0UGF0aCIsImVsbGlwc2VXaWR0aCIsImVsbGlwc2VIZWlnaHQiLCJ3IiwiayIsIm94Iiwib3kiLCJ4ZSIsInllIiwieG0iLCJ5bSIsImNyZWF0ZURhdGEiLCJncmFwaGljc0RhdGEiLCJnZXRHcmFwaGljcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNPLElBQU1BLFlBQWI7QUFBQTs7QUFBQTs7QUFDSSwwQkFBeUI7QUFBQTs7QUFBQSxRQUFiQyxNQUFhLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3JCQSxVQUFNLENBQUNDLFFBQVAsdUJBQWtCRCxNQUFNLENBQUNDLFFBQXpCLCtEQUFxQ0MscURBQXJDO0FBRHFCLDZCQUVmRixNQUZlO0FBR3hCOztBQUpMO0FBQUEsRUFBa0NHLDhDQUFsQyxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ08sSUFBSUMsY0FBSjs7QUFDUCxDQUFDLFVBQVVBLGNBQVYsRUFBMEI7QUFDdkIsV0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkJDLEtBQTdCLEVBQW9DQyxFQUFwQyxFQUF3QztBQUNwQyxRQUFJQyxDQUFDLEdBQUdILEtBQUssSUFBSSxFQUFULEdBQWMsSUFBdEI7QUFDQSxRQUFJSSxDQUFDLEdBQUdKLEtBQUssSUFBSSxDQUFULEdBQWEsSUFBckI7QUFDQSxRQUFJSyxDQUFDLEdBQUdMLEtBQUssR0FBRyxJQUFoQjtBQUNBLFFBQUlNLENBQUMsR0FBR0wsS0FBSyxHQUFHLElBQWhCOztBQUNBLFFBQUksQ0FBQ00sOERBQUEsQ0FBdUJMLEVBQXZCLENBQUwsRUFBaUM7QUFDN0JDLE9BQUMsR0FBSUEsQ0FBQyxHQUFHRCxFQUFFLENBQUNNLGFBQVAs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QUFHLEVBQUUsR0FBRyxDQUFDO29CQUNyQixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztpQkFDbkI7YUFDRDtTQUNRO1FBQ1YsS0FBSyxFQUFFO1lBQ04sSUFBSSxFQUFFLDhDQUFLO1lBQ1gsQ0FBQyxFQUFFLEVBQUU7WUFDTCxDQUFDLEVBQUUsR0FBRztZQUNOLEtBQUssRUFBRSxDQUFDO1lBQ1IsSUFBSSxFQUFFO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSw0SEFBNEg7Z0JBQ2xJLElBQUksRUFBRTtvQkFDTCxJQUFJLEVBQUUsUUFBUTtvQkFDZCxNQUFNLEVBQUU7d0JBQ1AsQ0FBQyxFQUFFLEdBQUc7d0JBQ04sQ0FBQyxFQUFFLENBQUM7d0JBQ0osQ0FBQyxFQUFFLENBQUM7d0JBQ0osQ0FBQyxFQUFFLEdBQUc7d0JBQ04sRUFBRSxFQUFFLEVBQUU7d0JBQ04sRUFBRSxFQUFFLEVBQUU7cUJBQ047b0JBQ0QsR0FBRyxFQUFFLHNCQUFzQjtpQkFDM0I7Z0JBQ0QsTUFBTSxFQUFFLENBQUM7YUFDVDtTQUNRO0tBQ1Y7Q0FDWSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVuZ2luZSB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQ2FudmFzUGxhdGZvcm0gfSBmcm9tICcuL3BsYXRmb3JtJztcbmV4cG9ydCBjbGFzcyBDYW52YXNFbmdpbmUgZXh0ZW5kcyBFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1vZHVsZSA9IHt9KSB7XG4gICAgICAgIG1vZHVsZS5QbGF0Zm9ybSA9IG1vZHVsZS5QbGF0Zm9ybSA/PyBDYW52YXNQbGF0Zm9ybTtcbiAgICAgICAgc3VwZXIobW9kdWxlKTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3BhdHRlcm5zJztcbmV4cG9ydCAqIGZyb20gJy4vcGxhdGZvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9lbmdpbmUnO1xuIiwiaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0gfSBmcm9tICdAamVuZy9nZW9tJztcbmV4cG9ydCB2YXIgQ2FudmFzUGF0dGVybnM7XG4oZnVuY3Rpb24gKENhbnZhc1BhdHRlcm5zKSB7XG4gICAgZnVuY3Rpb24gY29sb3JQYXR0ZXJuKGNvbG9yLCBhbHBoYSwgY3QpIHtcbiAgICAgICAgbGV0IHIgPSBjb2xvciA+PiAxNiAmIDB4ZmY7XG4gICAgICAgIGxldCBnID0gY29sb3IgPj4gOCAmIDB4ZmY7XG4gICAgICAgIGxldCBiID0gY29sb3IgJiAweGZmO1xuICAgICAgICBsZXQgYSA9IGFscGhhICogMHhmZjtcbiAgICAgICAgaWYgKCFDb2xvclRyYW5zZm9ybS5pc0VtcHR5KGN0KSkge1xuICAgICAgICAgICAgciA9IChyICogY3QucmVkTXVsdGlwbGllciArIGN0LnJlZE9mZnNldCkgJiAweGZmO1xuICAgICAgICAgICAgZyA9IChnICogY3QuZ3JlZW5NdWx0aXBsaWVyICsgY3QuZ3JlZW5PZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIGIgPSAoYiAqIGN0LmJsdWVNdWx0aXBsaWVyICsgY3QuYmx1ZU9mZnNldCkgJiAweGZmO1xuICAgICAgICAgICAgYSA9IChhICogY3QuYWxwaGFNdWx0aXBsaWVyICsgY3QuYWxwaGFPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYSA8IDB4ZmYpIHtcbiAgICAgICAgICAgIHJldHVybiBgcmdiYSgke3J9LCAke2d9LCAke2J9LCAke2EgLyAweGZmfSlgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYDtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuID0gY29sb3JQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGFkZEdyYWRpZW50Q29sb3JzKHBhdHRlcm4sIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGNvbG9yc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGFscGhhID0gYWxwaGFzW2ldO1xuICAgICAgICAgICAgbGV0IHJhdGlvID0gcmF0aW9zW2ldO1xuICAgICAgICAgICAgaWYgKHJhdGlvIDwgMClcbiAgICAgICAgICAgICAgICByYXRpbyA9IDA7XG4gICAgICAgICAgICBpZiAocmF0aW8gPiAxKVxuICAgICAgICAgICAgICAgIHJhdGlvID0gMTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yU3R5bGUgPSBjb2xvclBhdHRlcm4oY29sb3IsIGFscGhhLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBwYXR0ZXJuLmFkZENvbG9yU3RvcChyYXRpbywgY29sb3JTdHlsZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMuYWRkR3JhZGllbnRDb2xvcnMgPSBhZGRHcmFkaWVudENvbG9ycztcbiAgICBmdW5jdGlvbiByYWRpYWxHcmFkaWVudFBhdHRlcm4oYmVnaW5YLCBiZWdpblksIGJlZ2luUmFkaXVzLCBlbmRYLCBlbmRZLCBlbmRSYWRpdXMsIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGJlZ2luWCwgYmVnaW5ZLCBiZWdpblJhZGl1cywgZW5kWCwgZW5kWSwgZW5kUmFkaXVzKTtcbiAgICAgICAgYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMucmFkaWFsR3JhZGllbnRQYXR0ZXJuID0gcmFkaWFsR3JhZGllbnRQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGxpbmVhckdyYWRpZW50UGF0dGVybihiZWdpblgsIGJlZ2luWSwgZW5kWCwgZW5kWSwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IGNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQoYmVnaW5YLCBiZWdpblksIGVuZFgsIGVuZFkpO1xuICAgICAgICBhZGRHcmFkaWVudENvbG9ycyhwYXR0ZXJuLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5saW5lYXJHcmFkaWVudFBhdHRlcm4gPSBsaW5lYXJHcmFkaWVudFBhdHRlcm47XG4gICAgZnVuY3Rpb24gYml0bWFwUGF0dGVybihpbWFnZSwgcmVwZWF0LCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVBhdHRlcm4oaW1hZ2UsIHJlcGVhdCA/ICdyZXBlYXQnIDogJ25vbmUnKTtcbiAgICAgICAgaWYgKHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMuYml0bWFwUGF0dGVybiA9IGJpdG1hcFBhdHRlcm47XG59KShDYW52YXNQYXR0ZXJucyB8fCAoQ2FudmFzUGF0dGVybnMgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAamVuZy9jb3JlJztcbmV4cG9ydCBjbGFzcyBDYW52YXNQbGF0Zm9ybSBleHRlbmRzIFBsYXRmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbdGhpcy52aWV3LmdldENvbnRleHQoJzJkJyldO1xuICAgICAgICB0aGlzLmN1c3RvbUNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRzW3RoaXMuY29udGV4dHMubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIHNhdmVDb250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICByZXN0b3JlQ29udGV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0cy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmRlYnVnLndhcm5pbmcoJ1RyeWluZyB0byByZXN0b3JlIG1haW4gY29udGV4dCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUN1c3RvbUNvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0O1xuICAgICAgICBpZiAodGhpcy5jdXN0b21Db250ZXh0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmN1c3RvbUNvbnRleHRzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnZpZXc7XG4gICAgICAgIGlmIChjb250ZXh0LmNhbnZhcy53aWR0aCAhPT0gd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRleHQuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgICBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIGRlc3Ryb3lDdXN0b21Db250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jdXN0b21Db250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICBiZWdpbigpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgpO1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB2aWV3LndpZHRoLCB2aWV3LmhlaWdodCk7XG4gICAgfVxuICAgIHVwZGF0ZVNpemUoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbmdpbmUuc2NyZWVuLmdldFdpZHRoKCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRIZWlnaHQoKTtcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIGNvbnN0IHZpZXdXaWR0aCA9IE1hdGguZmxvb3Iod2lkdGggKiBwaXhlbFJhdGlvKTtcbiAgICAgICAgY29uc3Qgdmlld0hlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgaWYgKHZpZXcud2lkdGggIT09IHZpZXdXaWR0aCB8fCB2aWV3LmhlaWdodCAhPT0gdmlld0hlaWdodCkge1xuICAgICAgICAgICAgdmlldy53aWR0aCA9IHZpZXdXaWR0aDtcbiAgICAgICAgICAgIHZpZXcuaGVpZ2h0ID0gdmlld0hlaWdodDtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ09OVEFJTkVSID0gJ2NvbnRhaW5lcic7XG5leHBvcnQgdmFyIENvbnRhaW5lcjtcbihmdW5jdGlvbiAoQ29udGFpbmVyKSB7XG4gICAgZnVuY3Rpb24gbnVtQ2hpbGRyZW4oY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbik7XG4gICAgICAgICAgICByZXR1cm4ga2V5cy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIENvbnRhaW5lci5udW1DaGlsZHJlbiA9IG51bUNoaWxkcmVuO1xufSkoQ29udGFpbmVyIHx8IChDb250YWluZXIgPSB7fSkpO1xuZXhwb3J0IHZhciBDb250YWluZXJFeHRlbnNpb247XG4oZnVuY3Rpb24gKENvbnRhaW5lckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgcmVuZGVyZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgcmVuZGVyZXIuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlcmVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHVwZGF0ZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBwb2ludGVyczogcG9pbnRlckV2ZW50cyB9ID0gZW5naW5lO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBwb2ludGVyRXZlbnRzLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHMuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcG9pbnRlckV2ZW50cy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwb2ludGVyRXZlbnRzLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBrZXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50ZXJFdmVudHMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBsb2FkaW5nIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgbG9hZGluZy5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gbG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzICs9IGNvbXBvbmVudENvbnRleHQucHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudENvbnRleHQubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzIC89IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBsb2FkaW5nLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGNvbXBvbmVudENvbnRleHQubG9hZGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgKz0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50Q29udGV4dC5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgLz0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvYWRpbmcuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5zZXQoQ09OVEFJTkVSLCB1cGRhdGUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KENPTlRBSU5FUiwgcmVuZGVyKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoQ09OVEFJTkVSLCBoaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChDT05UQUlORVIsIGxvYWRlZCk7XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENvbnRhaW5lckV4dGVuc2lvbiB8fCAoQ29udGFpbmVyRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IENvbnRhaW5lckV4dGVuc2lvbiB9IGZyb20gJy4vY29udGFpbmVyJztcbmV4cG9ydCBjb25zdCBMT0FERVIgPSAnbG9hZGVyJztcbmV4cG9ydCB2YXIgTG9hZGVyO1xuKGZ1bmN0aW9uIChMb2FkZXIpIHtcbiAgICBmdW5jdGlvbiBnZXRMb2FkaW5nUHJvZ3Jlc3MobG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZGluZ1Byb2dyZXNzID8/IDA7XG4gICAgfVxuICAgIExvYWRlci5nZXRMb2FkaW5nUHJvZ3Jlc3MgPSBnZXRMb2FkaW5nUHJvZ3Jlc3M7XG4gICAgZnVuY3Rpb24gaXNMb2FkZWQobG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZGVkID8/IGZhbHNlO1xuICAgIH1cbiAgICBMb2FkZXIuaXNMb2FkZWQgPSBpc0xvYWRlZDtcbiAgICBmdW5jdGlvbiBuZWVkTG9hZGluZ0NoZWNrKGxvYWRlcikge1xuICAgICAgICByZXR1cm4gbG9hZGVyLmxvYWRpbmdDaGVjayA/PyB0cnVlO1xuICAgIH1cbiAgICBMb2FkZXIubmVlZExvYWRpbmdDaGVjayA9IG5lZWRMb2FkaW5nQ2hlY2s7XG59KShMb2FkZXIgfHwgKExvYWRlciA9IHt9KSk7XG5leHBvcnQgdmFyIExvYWRlckV4dGVuc2lvbjtcbihmdW5jdGlvbiAoTG9hZGVyRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGxvYWRlciwgZW5naW5lKSB7XG4gICAgICAgIGlmICghTG9hZGVyLm5lZWRMb2FkaW5nQ2hlY2sobG9hZGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIENvbnRhaW5lckV4dGVuc2lvbi5sb2FkZWQobG9hZGVyLCBlbmdpbmUpO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLmxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICBsb2FkZXIubG9hZGluZ1Byb2dyZXNzID0gY29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgaWYgKGNvbnRleHQubG9hZGVkICYmICFsb2FkZXIubG9hZGVkKSB7XG4gICAgICAgICAgICBsb2FkZXIubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChsb2FkZXIub25Mb2FkZWQpIHtcbiAgICAgICAgICAgICAgICBsb2FkZXIub25Mb2FkZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBMb2FkZXJFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5zZXQoTE9BREVSLCBDb250YWluZXJFeHRlbnNpb24udXBkYXRlKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChMT0FERVIsIENvbnRhaW5lckV4dGVuc2lvbi5yZW5kZXIpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChMT0FERVIsIENvbnRhaW5lckV4dGVuc2lvbi5oaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChMT0FERVIsIGxvYWRlZCk7XG4gICAgfVxuICAgIExvYWRlckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKExvYWRlckV4dGVuc2lvbiB8fCAoTG9hZGVyRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vZmVhdHVyZXMvcmVuZGVyZXInO1xuaW1wb3J0IHsgVXBkYXRlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3VwZGF0ZXInO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4uL2ZlYXR1cmVzL2xvYWRpbmcnO1xuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi4vZmVhdHVyZXMvc2NyZWVuJztcbmltcG9ydCB7IFBvaW50ZXJzIH0gZnJvbSAnLi4vZmVhdHVyZXMvcG9pbnRlcnMnO1xuaW1wb3J0IHsgVGlja2VyIH0gZnJvbSAnLi4vZmVhdHVyZXMvdGlja2VyJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vZmVhdHVyZXMvcGxhdGZvcm0nO1xuaW1wb3J0IHsgQ29udGFpbmVyRXh0ZW5zaW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IHsgRGVidWcgfSBmcm9tICcuLi9mZWF0dXJlcy9kZWJ1Zyc7XG5pbXBvcnQgeyBSZXNvdXJjZXMgfSBmcm9tICcuLi9mZWF0dXJlcy9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4uL2ZlYXR1cmVzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkZXInO1xuZXhwb3J0IGNsYXNzIEVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IobW9kdWxlID0ge30pIHtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDMyO1xuICAgICAgICBtb2R1bGUuQ29tcG9uZW50cyA9IG1vZHVsZS5Db21wb25lbnRzID8/IENvbXBvbmVudHM7XG4gICAgICAgIG1vZHVsZS5TY3JlZW4gPSBtb2R1bGUuU2NyZWVuID8/IFNjcmVlbjtcbiAgICAgICAgbW9kdWxlLlBsYXRmb3JtID0gbW9kdWxlLlBsYXRmb3JtID8/IFBsYXRmb3JtO1xuICAgICAgICBtb2R1bGUuVXBkYXRlciA9IG1vZHVsZS5VcGRhdGVyID8/IFVwZGF0ZXI7XG4gICAgICAgIG1vZHVsZS5Mb2FkaW5nID0gbW9kdWxlLkxvYWRpbmcgPz8gTG9hZGluZztcbiAgICAgICAgbW9kdWxlLlJlbmRlcmVyID0gbW9kdWxlLlJlbmRlcmVyID8/IFJlbmRlcmVyO1xuICAgICAgICBtb2R1bGUuUG9pbnRlcnMgPSBtb2R1bGUuUG9pbnRlcnMgPz8gUG9pbnRlcnM7XG4gICAgICAgIG1vZHVsZS5UaWNrZXIgPSBtb2R1bGUuVGlja2VyID8/IFRpY2tlcjtcbiAgICAgICAgbW9kdWxlLkRlYnVnID0gbW9kdWxlLkRlYnVnID8/IERlYnVnO1xuICAgICAgICBtb2R1bGUuUmVzb3VyY2VzID0gbW9kdWxlLlJlc291cmNlcyA/PyBSZXNvdXJjZXM7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBtb2R1bGUuQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBtb2R1bGUuU2NyZWVuKCk7XG4gICAgICAgIHRoaXMucGxhdGZvcm0gPSBuZXcgbW9kdWxlLlBsYXRmb3JtKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZXIgPSBuZXcgbW9kdWxlLlVwZGF0ZXIodGhpcyk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IG5ldyBtb2R1bGUuTG9hZGluZyh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBtb2R1bGUuUmVuZGVyZXIodGhpcyk7XG4gICAgICAgIHRoaXMucG9pbnRlcnMgPSBuZXcgbW9kdWxlLlBvaW50ZXJzKHRoaXMpO1xuICAgICAgICB0aGlzLnRpY2tlciA9IG5ldyBtb2R1bGUuVGlja2VyKHRoaXMpO1xuICAgICAgICB0aGlzLmRlYnVnID0gbmV3IG1vZHVsZS5EZWJ1ZygpO1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IG5ldyBtb2R1bGUuUmVzb3VyY2VzKHRoaXMpO1xuICAgICAgICBDb250YWluZXJFeHRlbnNpb24uaW5pdCh0aGlzKTtcbiAgICAgICAgTG9hZGVyRXh0ZW5zaW9uLmluaXQodGhpcyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB9XG59XG4iLCJleHBvcnQgdmFyIERpc3BsYXk7XG4oZnVuY3Rpb24gKERpc3BsYXkpIHtcbiAgICBmdW5jdGlvbiBpc1Zpc2libGUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQudmlzaWJsZSA/PyB0cnVlO1xuICAgIH1cbiAgICBEaXNwbGF5LmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbn0pKERpc3BsYXkgfHwgKERpc3BsYXkgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBQaXZvdDtcbihmdW5jdGlvbiAoUGl2b3QpIHtcbiAgICBmdW5jdGlvbiBnZXRYKHBpdm90LCB3aWR0aCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WCB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFgpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RYICogd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFggPSBnZXRYO1xuICAgIGZ1bmN0aW9uIGdldFkocGl2b3QsIGhlaWdodCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WSB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFkpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RZICogaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBQaXZvdC5nZXRZID0gZ2V0WTtcbiAgICBmdW5jdGlvbiBoYXNWYWx1ZXMocGl2b3QpIHtcbiAgICAgICAgY29uc3QgeyBwaXZvdFgsIHBpdm90WSB9ID0gcGl2b3Q7XG4gICAgICAgIHJldHVybiAhIXBpdm90WCB8fCAhIXBpdm90WTtcbiAgICB9XG4gICAgUGl2b3QuaGFzVmFsdWVzID0gaGFzVmFsdWVzO1xufSkoUGl2b3QgfHwgKFBpdm90ID0ge30pKTtcbiIsImNvbnN0IGhhbmRsZXJzTWFwID0ge1xuICAgIHBvaW50ZXJEb3duOiAnb25Qb2ludGVyRG93bicsXG4gICAgcG9pbnRlclVwOiAnb25Qb2ludGVyVXAnLFxuICAgIHBvaW50ZXJNb3ZlOiAnb25Qb2ludGVyTW92ZScsXG4gICAgcG9pbnRlck92ZXI6ICdvblBvaW50ZXJPdmVyJyxcbiAgICBwb2ludGVyT3V0OiAnb25Qb2ludGVyT3V0Jyxcbn07XG5leHBvcnQgdmFyIFBvaW50ZXI7XG4oZnVuY3Rpb24gKFBvaW50ZXIpIHtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJPdmVyKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuICEhcG9pbnRlci5wb2ludGVyT3ZlcjtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJPdmVyID0gaXNQb2ludGVyT3ZlcjtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJFbmFibGVkKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50ZXIucG9pbnRlckVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkID0gaXNQb2ludGVyRW5hYmxlZDtcbiAgICBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KHBvaW50ZXIsIHR5cGUsIHgsIHksIGlkKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJOYW1lID0gaGFuZGxlcnNNYXBbdHlwZV07XG4gICAgICAgIGlmIChoYW5kbGVyTmFtZSAmJiBwb2ludGVyW2hhbmRsZXJOYW1lXSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZSwgeCwgeSwgaWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcG9pbnRlcltoYW5kbGVyTmFtZV0oZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG59KShQb2ludGVyIHx8IChQb2ludGVyID0ge30pKTtcbiIsImV4cG9ydCB2YXIgVHJhbnNmb3JtO1xuKGZ1bmN0aW9uIChUcmFuc2Zvcm0pIHtcbiAgICBmdW5jdGlvbiBnZXRNYXRyaXgodHJhbnNmb3JtLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKG1hdHJpeCkge1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBtYXRyaXguYSA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSBtYXRyaXguYiA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSBtYXRyaXguYyA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBtYXRyaXguZCA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gbWF0cml4LnR4ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQudHkgPSBtYXRyaXgudHkgPz8gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvdGF0aW9uIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHRyYW5zZm9ybS5zY2FsZVggPz8gdHJhbnNmb3JtLnNjYWxlID8/IDE7XG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IHRyYW5zZm9ybS5zY2FsZVkgPz8gdHJhbnNmb3JtLnNjYWxlID8/IDE7XG4gICAgICAgIHJlc3VsdC50eCA9IHRyYW5zZm9ybS54ID8/IDA7XG4gICAgICAgIHJlc3VsdC50eSA9IHRyYW5zZm9ybS55ID8/IDA7XG4gICAgICAgIGlmIChyb3RhdGlvbikge1xuICAgICAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3Mocm90YXRpb24pO1xuICAgICAgICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW4ocm90YXRpb24pO1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBjb3MgKiBzY2FsZVg7XG4gICAgICAgICAgICByZXN1bHQuYiA9IHNpbiAqIHNjYWxlWDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gLXNpbiAqIHNjYWxlWTtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gY29zICogc2NhbGVZO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hID0gc2NhbGVYO1xuICAgICAgICByZXN1bHQuYiA9IDA7XG4gICAgICAgIHJlc3VsdC5jID0gMDtcbiAgICAgICAgcmVzdWx0LmQgPSBzY2FsZVk7XG4gICAgfVxuICAgIFRyYW5zZm9ybS5nZXRNYXRyaXggPSBnZXRNYXRyaXg7XG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JUcmFuc2Zvcm0odHJhbnNmb3JtLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0ucmVkTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmFscGhhT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0ucmVkT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5ncmVlbk9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5ibHVlT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxwaGEgPSB0cmFuc2Zvcm0uYWxwaGEgPz8gMTtcbiAgICAgICAgY29uc3QgeyB0aW50IH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmICh0aW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IGNvbG9yID0gMCwgdmFsdWUgPSAxIH0gPSB0aW50O1xuICAgICAgICAgICAgY29uc3QgdmFsdWVJbnZlcnRlZCA9IDEgLSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHIgPSAoY29sb3IgPj4gMTYpICYgMHhmZjtcbiAgICAgICAgICAgIGNvbnN0IGcgPSAoY29sb3IgPj4gOCkgJiAweGZmO1xuICAgICAgICAgICAgY29uc3QgYiA9IGNvbG9yICYgMHhmZjtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYTtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gciAqIHZhbHVlO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gZyAqIHZhbHVlO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBiICogdmFsdWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHsgYnJpZ2h0bmVzcyB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAoYnJpZ2h0bmVzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoYnJpZ2h0bmVzcyA+IDEpIHtcbiAgICAgICAgICAgICAgICBicmlnaHRuZXNzID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGJyaWdodG5lc3MgPCAtMSkge1xuICAgICAgICAgICAgICAgIGJyaWdodG5lc3MgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSAxIC0gTWF0aC5hYnMoYnJpZ2h0bmVzcyk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIGlmIChicmlnaHRuZXNzID4gMCkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IGJyaWdodG5lc3MgKiAyNTU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGE7XG4gICAgICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHBlcmNlbnQ7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gcGVyY2VudDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IHBlcmNlbnQ7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYTtcbiAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSAxO1xuICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldENvbG9yVHJhbnNmb3JtID0gZ2V0Q29sb3JUcmFuc2Zvcm07XG59KShUcmFuc2Zvcm0gfHwgKFRyYW5zZm9ybSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFVwZGF0ZTtcbihmdW5jdGlvbiAoVXBkYXRlKSB7XG4gICAgZnVuY3Rpb24gaXNFbmFibGVkKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgVXBkYXRlLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29tcG9uZW50LCB0aW1lKSB7XG4gICAgICAgIGlmIChjb21wb25lbnQub25VcGRhdGUpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5vblVwZGF0ZSh0aW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBVcGRhdGUudXBkYXRlID0gdXBkYXRlO1xufSkoVXBkYXRlIHx8IChVcGRhdGUgPSB7fSkpO1xuIiwiZXhwb3J0IGNsYXNzIENvbXBvbmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVuZGVyID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5oaXRUZXN0ID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IG5ldyBNYXAoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRGVidWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy53YXJuaW5ncyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICB9XG4gICAgZXJyb3IoLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLmVycm9ycy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMuZXJyb3JzLnNldChpZCwgY291bnQpO1xuICAgIH1cbiAgICB3YXJuaW5nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy53YXJuaW5ncy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgdGhpcy53YXJuaW5ncy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChyb290KTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIH1cbiAgICBiZWdpbigpIHtcbiAgICB9XG4gICAgZW5kKCkge1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1hdHJpeCwgUG9pbnQgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuLi9leHRlbnNpb25zL2Rpc3BsYXknO1xuaW1wb3J0IHsgUG9pbnRlciB9IGZyb20gJy4uL2V4dGVuc2lvbnMvcG9pbnRlcic7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9leHRlbnNpb25zL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBQb2ludGVycyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nbG9iYWwgPSBQb2ludC5lbXB0eSgpO1xuICAgICAgICB0aGlzLmxvY2FsID0gUG9pbnQuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5wb2ludGVySWQgPSAwO1xuICAgICAgICB0aGlzLnBvaW50ZXJUeXBlID0gJ3BvaW50ZXJEb3duJztcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBtYXRyaXg6IE1hdHJpeC5lbXB0eSgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICBkaXNwYXRjaCh0eXBlLCB4LCB5LCBpZCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9jYWwueCA9IHg7XG4gICAgICAgIHRoaXMubG9jYWwueSA9IHk7XG4gICAgICAgIHRoaXMuZ2xvYmFsLnggPSB4O1xuICAgICAgICB0aGlzLmdsb2JhbC55ID0geTtcbiAgICAgICAgdGhpcy5wb2ludGVySWQgPSBpZDtcbiAgICAgICAgdGhpcy5wb2ludGVyVHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIE1hdHJpeC5zZXRFbXB0eShiYXNlLm1hdHJpeCk7XG4gICAgICAgIHRoaXMuZGVwdGgrKztcbiAgICAgICAgdGhpcy5kaXNwYXRjaENvbXBvbmVudChyb290LCBiYXNlKTtcbiAgICB9XG4gICAgZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBwYXJlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghRGlzcGxheS5pc1Zpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICBUcmFuc2Zvcm0uZ2V0TWF0cml4KGNvbXBvbmVudCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICAgICAgTWF0cml4LmNvbmNhdChwYXJlbnQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybUludmVyc2VQb2ludChjb250ZXh0Lm1hdHJpeCwgdGhpcy5nbG9iYWwsIHRoaXMubG9jYWwpO1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmxvY2FsO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCB0aGlzLnBvaW50ZXJUeXBlLCB4LCB5LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludGVyVHlwZSA9PT0gJ3BvaW50ZXJNb3ZlJykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgIWNvbXBvbmVudC5wb2ludGVyT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCAncG9pbnRlck92ZXInLCB4LCB5LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFyZXN1bHQgJiYgY29tcG9uZW50LnBvaW50ZXJPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3V0JywgeCwgeSwgdGhpcy5wb2ludGVySWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnQucG9pbnRlck92ZXIgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb2xvclRyYW5zZm9ybSwgTWF0cml4IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy9kaXNwbGF5JztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdHJhbnNmb3JtJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBtYXRyaXg6IE1hdHJpeC5lbXB0eSgpLFxuICAgICAgICAgICAgICAgIGNvbG9yVHJhbnNmb3JtOiBDb2xvclRyYW5zZm9ybS5lbXB0eSgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICByZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBwYXJlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghRGlzcGxheS5pc1Zpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgVHJhbnNmb3JtLmdldENvbG9yVHJhbnNmb3JtKGNvbXBvbmVudCwgY29udGV4dC5jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIE1hdHJpeC5jb25jYXQocGFyZW50Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgQ29sb3JUcmFuc2Zvcm0uY29uY2F0KHBhcmVudC5jb2xvclRyYW5zZm9ybSwgY29udGV4dC5jb2xvclRyYW5zZm9ybSwgY29udGV4dC5jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMuZW5naW5lLnBsYXRmb3JtLmJlZ2luKCk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuZGVwdGgrKztcbiAgICAgICAgTWF0cml4LmNvcHkodGhpcy5lbmdpbmUuc2NyZWVuLmdldE1hdHJpeCgpLCBiYXNlLm1hdHJpeCk7XG4gICAgICAgIENvbG9yVHJhbnNmb3JtLnNldEVtcHR5KGJhc2UuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudChyb290LCBiYXNlKTtcbiAgICAgICAgdGhpcy5lbmdpbmUucGxhdGZvcm0uZW5kKCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCB2YXIgUmVzb3VyY2U7XG4oZnVuY3Rpb24gKFJlc291cmNlKSB7XG4gICAgZnVuY3Rpb24gZ2V0UHJvZ3Jlc3MocmVzb3VyY2UpIHtcbiAgICAgICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc291cmNlLmxvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc291cmNlLmJ5dGVzVG90YWwgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2UuYnl0ZXNMb2FkZWQgLyByZXNvdXJjZS5ieXRlc1RvdGFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBSZXNvdXJjZS5nZXRQcm9ncmVzcyA9IGdldFByb2dyZXNzO1xufSkoUmVzb3VyY2UgfHwgKFJlc291cmNlID0ge30pKTtcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZXMgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVzb2x2ZXJzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBnZXQoYXNzZXQpIHtcbiAgICAgICAgaWYgKCFhc3NldCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc291cmNlID0gdGhpcy5yZXNvdXJjZXMuZ2V0KGFzc2V0KTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICAgICAgcmVzb3VyY2UgPSB0aGlzLnJlc29sdmUoYXNzZXQpO1xuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXMuc2V0KGFzc2V0LCByZXNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgIH1cbiAgICByZXNvbHZlKGFzc2V0KSB7XG4gICAgICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gcmVzb2x2ZXIoYXNzZXQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBSZXNvdXJjZSBub3QgcmVzb2x2ZWQ6ICR7YXNzZXR9YCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1hdHJpeCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuZXhwb3J0IGNsYXNzIFNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSA0MDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDAwO1xuICAgICAgICB0aGlzLnBpeGVsUmF0aW8gPSAwO1xuICAgICAgICB0aGlzLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXRyaXggPSBNYXRyaXguZW1wdHkoKTtcbiAgICB9XG4gICAgZ2V0TWF0cml4KCkge1xuICAgICAgICBjb25zdCBwaXhlbFJhdGlvID0gdGhpcy5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIHRoaXMubWF0cml4LmEgPSBwaXhlbFJhdGlvO1xuICAgICAgICB0aGlzLm1hdHJpeC5kID0gcGl4ZWxSYXRpbztcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICAgIH1cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVsbHNjcmVlbiA/IHdpbmRvdy5pbm5lcldpZHRoIDogdGhpcy53aWR0aDtcbiAgICB9XG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuID8gd2luZG93LmlubmVySGVpZ2h0IDogdGhpcy5oZWlnaHQ7XG4gICAgfVxuICAgIGdldFBpeGVsUmF0aW8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpeGVsUmF0aW8gPiAwID8gdGhpcy5waXhlbFJhdGlvIDogd2luZG93LmRldmljZVBpeGVsUmF0aW8gPz8gMTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGlja2VyIHtcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICAgICAgdGhpcy5mcmFtZVJhdGUgPSAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnVwZGF0ZXIudXBkYXRlKHRpbWUpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUubG9hZGluZy51cGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlbmRlcmVyLnJlbmRlcigpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZUZyYW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IChjdXJyZW50VGltZSAtIHRoaXMudGltZSkgLyAxMDAwO1xuICAgICAgICAgICAgdGhpcy50aW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOZXh0RnJhbWUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgfVxuICAgIGdldCBpc1BhdXNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGF1c2VkO1xuICAgIH1cbiAgICBwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmV4dEZyYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHVwZGF0ZU5leHRGcmFtZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlRnJhbWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFVwZGF0ZSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdXBkYXRlJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFVwZGF0ZXIgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQocm9vdCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG4gICAgdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFVcGRhdGUuaXNFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoY29tcG9uZW50KTtcbiAgICAgICAgVXBkYXRlLnVwZGF0ZShjb21wb25lbnQsIHRoaXMudGltZSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVQcm9wZXJ0aWVzKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnByb3BlcnRpZXMuZm9yRWFjaCgoaGFuZGxlciwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRbcHJvcGVydHldKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9sb2FkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2VuZ2luZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL2NvbXBvbmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9kZWJ1Zyc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3BsYXRmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcG9pbnRlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9yZW5kZXJlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3Jlc291cmNlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3NjcmVlbic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3RpY2tlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3VwZGF0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pbnB1dC9tb3VzZSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvZGlzcGxheSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvcGl2b3QnO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3NvdXJjZSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvdHJhbnNmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy91cGRhdGUnO1xuIiwiZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCB0eXBlKSB7XG4gICAgY29uc3QgeyB2aWV3IH0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgY29uc3QgY2xpZW50UmVjdCA9IHZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSBjbGllbnRSZWN0LmxlZnQgLSB2aWV3LmNsaWVudExlZnQ7XG4gICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSBjbGllbnRSZWN0LnRvcCAtIHZpZXcuY2xpZW50VG9wO1xuICAgIGVuZ2luZS5wb2ludGVycy5kaXNwYXRjaCh0eXBlLCB4LCB5LCAwKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZXhwb3J0IHZhciBNb3VzZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoTW91c2VFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJEb3duJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJVcCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJNb3ZlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBNb3VzZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKE1vdXNlRXh0ZW5zaW9uIHx8IChNb3VzZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIEJvdW5kcztcbihmdW5jdGlvbiAoQm91bmRzKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtaW5YOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWluWTogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG1heFg6IE51bWJlci5NSU5fVkFMVUUsXG4gICAgICAgICAgICBtYXhZOiBOdW1iZXIuTUlOX1ZBTFVFLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBCb3VuZHMuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShib3VuZHMpIHtcbiAgICAgICAgYm91bmRzLm1pblggPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWluWSA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGJvdW5kcy5tYXhYID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1heFkgPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgIH1cbiAgICBCb3VuZHMuc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KGJvdW5kcykge1xuICAgICAgICByZXR1cm4gYm91bmRzLm1pblggPT09IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5taW5ZID09PSBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWF4WCA9PT0gTnVtYmVyLk1JTl9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1heFkgPT09IE51bWJlci5NSU5fVkFMVUU7XG4gICAgfVxuICAgIEJvdW5kcy5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiB0b1JlY3RhbmdsZShib3VuZHMsIHJlY3RhbmdsZSkge1xuICAgICAgICBjb25zdCB7IG1pblgsIG1pblksIG1heFgsIG1heFksIH0gPSBib3VuZHM7XG4gICAgICAgIHJlY3RhbmdsZS54ID0gbWluWDtcbiAgICAgICAgcmVjdGFuZ2xlLnkgPSBtaW5ZO1xuICAgICAgICByZWN0YW5nbGUud2lkdGggPSBtYXhYIC0gbWluWDtcbiAgICAgICAgcmVjdGFuZ2xlLmhlaWdodCA9IG1heFkgLSBtaW5ZO1xuICAgIH1cbiAgICBCb3VuZHMudG9SZWN0YW5nbGUgPSB0b1JlY3RhbmdsZTtcbiAgICBmdW5jdGlvbiB0ZXN0WChib3VuZHMsIHgpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0WCA9IHRlc3RYO1xuICAgIGZ1bmN0aW9uIHRlc3RZKGJvdW5kcywgeSkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RZID0gdGVzdFk7XG4gICAgZnVuY3Rpb24gdGVzdChib3VuZHMsIHgsIHkpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdCA9IHRlc3Q7XG4gICAgZnVuY3Rpb24gdGVzdFBvaW50KGJvdW5kcywgcG9pbnQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFBvaW50ID0gdGVzdFBvaW50O1xufSkoQm91bmRzIHx8IChCb3VuZHMgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBDb2xvclRyYW5zZm9ybTtcbihmdW5jdGlvbiAoQ29sb3JUcmFuc2Zvcm0pIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFscGhhTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIHJlZE11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBncmVlbk11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBibHVlTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGFscGhhT2Zmc2V0OiAwLFxuICAgICAgICAgICAgcmVkT2Zmc2V0OiAwLFxuICAgICAgICAgICAgZ3JlZW5PZmZzZXQ6IDAsXG4gICAgICAgICAgICBibHVlT2Zmc2V0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkoY3QpIHtcbiAgICAgICAgcmV0dXJuIGN0LnJlZE11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmdyZWVuTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmFscGhhTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYmx1ZU9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHlXaXRoQWxwaGEoY3QpIHtcbiAgICAgICAgcmV0dXJuIGN0LnJlZE11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmdyZWVuTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LnJlZE9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5PZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmJsdWVPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmFscGhhT2Zmc2V0ID09PSAwO1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5pc0VtcHR5V2l0aEFscGhhID0gaXNFbXB0eVdpdGhBbHBoYTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShjdCkge1xuICAgICAgICBjdC5yZWRNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuZ3JlZW5NdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuYmx1ZU11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5hbHBoYU11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5yZWRPZmZzZXQgPSAwO1xuICAgICAgICBjdC5ncmVlbk9mZnNldCA9IDA7XG4gICAgICAgIGN0LmJsdWVPZmZzZXQgPSAwO1xuICAgICAgICBjdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gY29weShmcm9tLCB0bykge1xuICAgICAgICB0by5hbHBoYU11bHRpcGxpZXIgPSBmcm9tLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgdG8ucmVkTXVsdGlwbGllciA9IGZyb20ucmVkTXVsdGlwbGllcjtcbiAgICAgICAgdG8uZ3JlZW5NdWx0aXBsaWVyID0gZnJvbS5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIHRvLmJsdWVNdWx0aXBsaWVyID0gZnJvbS5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgdG8uYWxwaGFPZmZzZXQgPSBmcm9tLmFscGhhT2Zmc2V0O1xuICAgICAgICB0by5yZWRPZmZzZXQgPSBmcm9tLnJlZE9mZnNldDtcbiAgICAgICAgdG8uZ3JlZW5PZmZzZXQgPSBmcm9tLmdyZWVuT2Zmc2V0O1xuICAgICAgICB0by5ibHVlT2Zmc2V0ID0gZnJvbS5ibHVlT2Zmc2V0O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBjb25jYXQoY3QxLCBjdDAsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCBhbHBoYU11bHRpcGxpZXIgPSBjdDEuYWxwaGFNdWx0aXBsaWVyICogY3QwLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgcmVkTXVsdGlwbGllciA9IGN0MS5yZWRNdWx0aXBsaWVyICogY3QwLnJlZE11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGdyZWVuTXVsdGlwbGllciA9IGN0MS5ncmVlbk11bHRpcGxpZXIgKiBjdDAuZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBibHVlTXVsdGlwbGllciA9IGN0MS5ibHVlTXVsdGlwbGllciAqIGN0MC5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgYWxwaGFPZmZzZXQgPSBjdDEuYWxwaGFNdWx0aXBsaWVyICogY3QwLmFscGhhT2Zmc2V0ICsgY3QxLmFscGhhT2Zmc2V0O1xuICAgICAgICBjb25zdCByZWRPZmZzZXQgPSBjdDEucmVkTXVsdGlwbGllciAqIGN0MC5yZWRPZmZzZXQgKyBjdDEucmVkT2Zmc2V0O1xuICAgICAgICBjb25zdCBncmVlbk9mZnNldCA9IGN0MS5ncmVlbk11bHRpcGxpZXIgKiBjdDAuZ3JlZW5PZmZzZXQgKyBjdDEuZ3JlZW5PZmZzZXQ7XG4gICAgICAgIGNvbnN0IGJsdWVPZmZzZXQgPSBjdDEuYmx1ZU11bHRpcGxpZXIgKiBjdDAuYmx1ZU9mZnNldCArIGN0MS5ibHVlT2Zmc2V0O1xuICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHJlZE11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSBncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IGJsdWVNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSBhbHBoYU9mZnNldDtcbiAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IHJlZE9mZnNldDtcbiAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gZ3JlZW5PZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gYmx1ZU9mZnNldDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uY29uY2F0ID0gY29uY2F0O1xufSkoQ29sb3JUcmFuc2Zvcm0gfHwgKENvbG9yVHJhbnNmb3JtID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vY29sb3ItdHJhbnNmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vYm91bmRzJztcbmV4cG9ydCAqIGZyb20gJy4vbWF0cml4JztcbmV4cG9ydCAqIGZyb20gJy4vcG9pbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWN0YW5nbGUnO1xuIiwiZXhwb3J0IHZhciBNYXRyaXg7XG4oZnVuY3Rpb24gKE1hdHJpeCkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogMSxcbiAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICBjOiAwLFxuICAgICAgICAgICAgZDogMSxcbiAgICAgICAgICAgIHR4OiAwLFxuICAgICAgICAgICAgdHk6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIE1hdHJpeC5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkobWF0cml4KSB7XG4gICAgICAgIHJldHVybiBtYXRyaXguYSA9PT0gMVxuICAgICAgICAgICAgJiYgbWF0cml4LmIgPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC5jID09PSAwXG4gICAgICAgICAgICAmJiBtYXRyaXguZCA9PT0gMVxuICAgICAgICAgICAgJiYgbWF0cml4LnR4ID09PSAwXG4gICAgICAgICAgICAmJiBtYXRyaXgudHkgPT09IDA7XG4gICAgfVxuICAgIE1hdHJpeC5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShtYXRyaXgpIHtcbiAgICAgICAgbWF0cml4LmEgPSAxO1xuICAgICAgICBtYXRyaXguYiA9IDA7XG4gICAgICAgIG1hdHJpeC5jID0gMDtcbiAgICAgICAgbWF0cml4LmQgPSAxO1xuICAgICAgICBtYXRyaXgudHggPSAwO1xuICAgICAgICBtYXRyaXgudHkgPSAwO1xuICAgIH1cbiAgICBNYXRyaXguc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KGZyb20sIHRvKSB7XG4gICAgICAgIHRvLmEgPSBmcm9tLmE7XG4gICAgICAgIHRvLmIgPSBmcm9tLmI7XG4gICAgICAgIHRvLmMgPSBmcm9tLmM7XG4gICAgICAgIHRvLmQgPSBmcm9tLmQ7XG4gICAgICAgIHRvLnR4ID0gZnJvbS50eDtcbiAgICAgICAgdG8udHkgPSBmcm9tLnR5O1xuICAgIH1cbiAgICBNYXRyaXguY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gY29uY2F0KG1hdHJpeDAsIG1hdHJpeDEsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCBhID0gbWF0cml4MS5hICogbWF0cml4MC5hICsgbWF0cml4MS5iICogbWF0cml4MC5jO1xuICAgICAgICBjb25zdCBiID0gbWF0cml4MS5hICogbWF0cml4MC5iICsgbWF0cml4MS5iICogbWF0cml4MC5kO1xuICAgICAgICBjb25zdCBjID0gbWF0cml4MS5jICogbWF0cml4MC5hICsgbWF0cml4MS5kICogbWF0cml4MC5jO1xuICAgICAgICBjb25zdCBkID0gbWF0cml4MS5jICogbWF0cml4MC5iICsgbWF0cml4MS5kICogbWF0cml4MC5kO1xuICAgICAgICBjb25zdCB0eCA9IG1hdHJpeDEudHggKiBtYXRyaXgwLmEgKyBtYXRyaXgxLnR5ICogbWF0cml4MC5jICsgbWF0cml4MC50eDtcbiAgICAgICAgY29uc3QgdHkgPSBtYXRyaXgxLnR4ICogbWF0cml4MC5iICsgbWF0cml4MS50eSAqIG1hdHJpeDAuZCArIG1hdHJpeDAudHk7XG4gICAgICAgIHJlc3VsdC5hID0gYTtcbiAgICAgICAgcmVzdWx0LmIgPSBiO1xuICAgICAgICByZXN1bHQuYyA9IGM7XG4gICAgICAgIHJlc3VsdC5kID0gZDtcbiAgICAgICAgcmVzdWx0LnR4ID0gdHg7XG4gICAgICAgIHJlc3VsdC50eSA9IHR5O1xuICAgIH1cbiAgICBNYXRyaXguY29uY2F0ID0gY29uY2F0O1xuICAgIGZ1bmN0aW9uIGdldERldGVybWluYW50KG1hdHJpeCkge1xuICAgICAgICByZXR1cm4gbWF0cml4LmEgKiBtYXRyaXguZCAtIG1hdHJpeC5iICogbWF0cml4LmM7XG4gICAgfVxuICAgIE1hdHJpeC5nZXREZXRlcm1pbmFudCA9IGdldERldGVybWluYW50O1xuICAgIGZ1bmN0aW9uIGludmVydChtYXRyaXgsIHJlc3VsdCkge1xuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudChtYXRyaXgpO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC50eCA9IC1tYXRyaXgudHg7XG4gICAgICAgICAgICByZXN1bHQudHkgPSAtbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGV0ZXJtaW5hbnQgPSAxLjAgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gbWF0cml4LmEgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gLW1hdHJpeC5iICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuYyA9IC1tYXRyaXguYyAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBtYXRyaXguZCAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gLXJlc3VsdC5hICogbWF0cml4LnR4IC0gcmVzdWx0LmMgKiBtYXRyaXgudHk7XG4gICAgICAgICAgICByZXN1bHQudHkgPSAtcmVzdWx0LmIgKiBtYXRyaXgudHggLSByZXN1bHQuZCAqIG1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBNYXRyaXguaW52ZXJ0ID0gaW52ZXJ0O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50KG1hdHJpeCwgcG9pbnQsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICByZXN1bHQueCA9IHggKiBtYXRyaXguYSArIHkgKiBtYXRyaXguYyArIG1hdHJpeC50eDtcbiAgICAgICAgcmVzdWx0LnkgPSB4ICogbWF0cml4LmIgKyB5ICogbWF0cml4LmQgKyBtYXRyaXgudHk7XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludCA9IHRyYW5zZm9ybVBvaW50O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50TG9jYWwobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJlc3VsdC54ID0geCAqIG1hdHJpeC5hICsgeSAqIG1hdHJpeC5jO1xuICAgICAgICByZXN1bHQueSA9IHggKiBtYXRyaXguYiArIHkgKiBtYXRyaXguZDtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybVBvaW50TG9jYWwgPSB0cmFuc2Zvcm1Qb2ludExvY2FsO1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUludmVyc2VQb2ludChtYXRyaXgsIHBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgbGV0IGRldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KTtcbiAgICAgICAgaWYgKGRldGVybWluYW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQueCA9IC1tYXRyaXgudHg7XG4gICAgICAgICAgICByZXN1bHQueSA9IC1tYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCA9IDEgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgICAgICByZXN1bHQueCA9IGRldGVybWluYW50ICogKG1hdHJpeC5jICogKG1hdHJpeC50eSAtIHkpICsgbWF0cml4LmQgKiAoeCAtIG1hdHJpeC50eCkpO1xuICAgICAgICAgICAgcmVzdWx0LnkgPSBkZXRlcm1pbmFudCAqIChtYXRyaXguYSAqICh5IC0gbWF0cml4LnR5KSArIG1hdHJpeC5iICogKG1hdHJpeC50eCAtIHgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50ID0gdHJhbnNmb3JtSW52ZXJzZVBvaW50O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUJvdW5kcyhtYXRyaXgsIGJvdW5kcywgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgYSwgYiwgYywgZCwgdHgsIHR5LCB9ID0gbWF0cml4O1xuICAgICAgICBjb25zdCByeCA9IGJvdW5kcy54O1xuICAgICAgICBjb25zdCByeSA9IGJvdW5kcy55O1xuICAgICAgICBjb25zdCByciA9IHJ4ICsgYm91bmRzLndpZHRoO1xuICAgICAgICBjb25zdCByYiA9IHJ5ICsgYm91bmRzLmhlaWdodDtcbiAgICAgICAgY29uc3QgbngxID0gcnggKiBhICsgcnkgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MSA9IHJ4ICogYiArIHJ5ICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDIgPSByciAqIGEgKyByeSAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkyID0gcnIgKiBiICsgcnkgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54MyA9IHJyICogYSArIHJiICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTMgPSByciAqIGIgKyByYiAqIGQgKyB0eTtcbiAgICAgICAgY29uc3Qgbng0ID0gcnggKiBhICsgcmIgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55NCA9IHJ4ICogYiArIHJiICogZCArIHR5O1xuICAgICAgICBsZXQgbGVmdCA9IG54MTtcbiAgICAgICAgaWYgKGxlZnQgPiBueDIpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQgPiBueDMpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQgPiBueDQpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvcCA9IG55MTtcbiAgICAgICAgaWYgKHRvcCA+IG55Mikge1xuICAgICAgICAgICAgdG9wID0gbnkyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3AgPiBueTMpIHtcbiAgICAgICAgICAgIHRvcCA9IG55MztcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9wID4gbnk0KSB7XG4gICAgICAgICAgICB0b3AgPSBueTQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJpZ2h0ID0gbngxO1xuICAgICAgICBpZiAocmlnaHQgPCBueDIpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbngyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCA8IG54Mykge1xuICAgICAgICAgICAgcmlnaHQgPSBueDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0IDwgbng0KSB7XG4gICAgICAgICAgICByaWdodCA9IG54NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYm90dG9tID0gbnkxO1xuICAgICAgICBpZiAoYm90dG9tIDwgbnkyKSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdHRvbSA8IG55Mykge1xuICAgICAgICAgICAgYm90dG9tID0gbnkzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3R0b20gPCBueTQpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55NDtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQueCA9IGxlZnQ7XG4gICAgICAgIHJlc3VsdC55ID0gdG9wO1xuICAgICAgICByZXN1bHQud2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBib3R0b20gLSB0b3A7XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Cb3VuZHMgPSB0cmFuc2Zvcm1Cb3VuZHM7XG59KShNYXRyaXggfHwgKE1hdHJpeCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFBvaW50O1xuKGZ1bmN0aW9uIChQb2ludCkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuICAgIFBvaW50LmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gbGVuZ3RoKHBvaW50KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfVxuICAgIFBvaW50Lmxlbmd0aCA9IGxlbmd0aDtcbiAgICBmdW5jdGlvbiBhbmdsZShwb2ludCkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihwb2ludC55LCBwb2ludC54KTtcbiAgICB9XG4gICAgUG9pbnQuYW5nbGUgPSBhbmdsZTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludC54ID09PSAwICYmIHBvaW50LnkgPT09IDA7XG4gICAgfVxuICAgIFBvaW50LmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGVxdWFscyhwb2ludDAsIHBvaW50MSkge1xuICAgICAgICByZXR1cm4gcG9pbnQwLnggPT09IHBvaW50MS54ICYmIHBvaW50MC55ID09PSBwb2ludDEueTtcbiAgICB9XG4gICAgUG9pbnQuZXF1YWxzID0gZXF1YWxzO1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KHBvaW50KSB7XG4gICAgICAgIHBvaW50LnggPSAwO1xuICAgICAgICBwb2ludC55ID0gMDtcbiAgICB9XG4gICAgUG9pbnQuc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC54ID0gc291cmNlLng7XG4gICAgICAgIHRhcmdldC55ID0gc291cmNlLnk7XG4gICAgfVxuICAgIFBvaW50LmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZShwb2ludCwgdGhpY2tuZXNzKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGxlbmd0aChwb2ludCk7XG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpY2tuZXNzIC8gdmFsdWU7XG4gICAgICAgICAgICBwb2ludC54ICo9IHZhbHVlO1xuICAgICAgICAgICAgcG9pbnQueSAqPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQb2ludC5ub3JtYWxpemUgPSBub3JtYWxpemU7XG4gICAgZnVuY3Rpb24gZGlzdGFuY2UocG9pbnQwLCBwb2ludDEpIHtcbiAgICAgICAgY29uc3QgZHggPSBwb2ludDAueCAtIHBvaW50MS54O1xuICAgICAgICBjb25zdCBkeSA9IHBvaW50MC55IC0gcG9pbnQxLnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cbiAgICBQb2ludC5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIGZ1bmN0aW9uIGludGVycG9sYXRlKGJlZ2luLCBlbmQsIHZhbHVlLCByZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0LnggPSBiZWdpbi54ICsgdmFsdWUgKiAoZW5kLnggLSBiZWdpbi54KTtcbiAgICAgICAgcmVzdWx0LnkgPSBiZWdpbi55ICsgdmFsdWUgKiAoZW5kLnkgLSBiZWdpbi55KTtcbiAgICB9XG4gICAgUG9pbnQuaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcbiAgICBmdW5jdGlvbiBwb2xhcihwb2ludCwgbGVuZ3RoLCBhbmdsZSkge1xuICAgICAgICBwb2ludC54ID0gbGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgICBwb2ludC55ID0gbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIH1cbiAgICBQb2ludC5wb2xhciA9IHBvbGFyO1xufSkoUG9pbnQgfHwgKFBvaW50ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUmVjdGFuZ2xlO1xuKGZ1bmN0aW9uIChSZWN0YW5nbGUpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFJlY3RhbmdsZS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KHJlY3RhbmdsZSkge1xuICAgICAgICByZWN0YW5nbGUueCA9IDA7XG4gICAgICAgIHJlY3RhbmdsZS55ID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLndpZHRoID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLmhlaWdodCA9IDA7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGludGVyc2VjdGlvbihzb3VyY2UsIHRhcmdldCwgcmVzdWx0KSB7XG4gICAgICAgIGxldCB7IHgsIHksIHdpZHRoLCBoZWlnaHQsIH0gPSBzb3VyY2U7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0YXJnZXQueDtcbiAgICAgICAgY29uc3QgdG9wID0gdGFyZ2V0Lnk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGFyZ2V0LnggKyB0YXJnZXQud2lkdGg7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRhcmdldC55ICsgdGFyZ2V0LmhlaWdodDtcbiAgICAgICAgaWYgKHggPCBsZWZ0KSB7XG4gICAgICAgICAgICB3aWR0aCAtPSBsZWZ0IC0geDtcbiAgICAgICAgICAgIHggPSBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh4ICsgd2lkdGggPiByaWdodCkge1xuICAgICAgICAgICAgd2lkdGggPSByaWdodCAtIHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgPCB0b3ApIHtcbiAgICAgICAgICAgIGhlaWdodCAtPSB0b3AgLSB5O1xuICAgICAgICAgICAgeSA9IHRvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSArIGhlaWdodCA+IGJvdHRvbSkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gYm90dG9tIC0geTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgICAgICB3aWR0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICAgIGhlaWdodCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnggPSB4O1xuICAgICAgICByZXN1bHQueSA9IHk7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHdpZHRoO1xuICAgICAgICByZXN1bHQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuaW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uO1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0YW5nbGUud2lkdGggPT09IDAgfHwgcmVjdGFuZ2xlLmhlaWdodCA9PT0gMDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGNvbnRhaW5zKHJlY3RhbmdsZSwgcG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZS54IDwgcG9pbnQueFxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnggKyByZWN0YW5nbGUud2lkdGggPiBwb2ludC54XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueSA8IHBvaW50LnlcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS55ICsgcmVjdGFuZ2xlLmhlaWdodCA+IHBvaW50Lnk7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5jb250YWlucyA9IGNvbnRhaW5zO1xuICAgIGZ1bmN0aW9uIHJvdW5kKHJlY3RhbmdsZSkge1xuICAgICAgICByZWN0YW5nbGUueCA9IE1hdGgucm91bmQocmVjdGFuZ2xlLngpO1xuICAgICAgICByZWN0YW5nbGUueSA9IE1hdGgucm91bmQocmVjdGFuZ2xlLnkpO1xuICAgICAgICByZWN0YW5nbGUud2lkdGggPSBNYXRoLnJvdW5kKHJlY3RhbmdsZS53aWR0aCk7XG4gICAgICAgIHJlY3RhbmdsZS5oZWlnaHQgPSBNYXRoLnJvdW5kKHJlY3RhbmdsZS5oZWlnaHQpO1xuICAgIH1cbiAgICBSZWN0YW5nbGUucm91bmQgPSByb3VuZDtcbn0pKFJlY3RhbmdsZSB8fCAoUmVjdGFuZ2xlID0ge30pKTtcbiIsImV4cG9ydCB2YXIgSW1hZ2VSZXNvdXJjZTtcbihmdW5jdGlvbiAoSW1hZ2VSZXNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIHJlc29sdmUoYXNzZXQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBleHRlbnNpb24gPSBhc3NldC5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgICBzd2l0Y2ggKGV4dGVuc2lvbikge1xuICAgICAgICAgICAgY2FzZSAncG5nJzpcbiAgICAgICAgICAgIGNhc2UgJ2pwZyc6XG4gICAgICAgICAgICBjYXNlICd3ZWJwJzpcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzTG9hZGVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBieXRlc1RvdGFsOiAwLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBhc3NldDtcbiAgICAgICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBpbWFnZSBsb2FkZWQ6ICR7YXNzZXR9YCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmltYWdlID0gaW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ2ltYWdlIGxvYWQgZXJyb3InLCBlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIEltYWdlUmVzb3VyY2UucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLnJlc291cmNlcy5yZXNvbHZlcnMuYWRkKHJlc29sdmUpO1xuICAgIH1cbiAgICBJbWFnZVJlc291cmNlLmluaXQgPSBpbml0O1xufSkoSW1hZ2VSZXNvdXJjZSB8fCAoSW1hZ2VSZXNvdXJjZSA9IHt9KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2ltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vc3RyaW5nJztcbiIsImV4cG9ydCB2YXIgU3RyaW5nUmVzb3VyY2U7XG4oZnVuY3Rpb24gKFN0cmluZ1Jlc291cmNlKSB7XG4gICAgZnVuY3Rpb24gcmVzb2x2ZShhc3NldCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGFzc2V0LnNwbGl0KCcuJykucG9wKCk7XG4gICAgICAgIHN3aXRjaCAoZXh0ZW5zaW9uKSB7XG4gICAgICAgICAgICBjYXNlICd0eHQnOlxuICAgICAgICAgICAgY2FzZSAnanNvbic6XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBieXRlc0xvYWRlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNUb3RhbDogMCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCBhc3NldCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5ieXRlc0xvYWRlZCA9IGUubG9hZGVkO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5ieXRlc1RvdGFsID0gZS50b3RhbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzdHJpbmcgbG9hZGVkOiAke2Fzc2V0fWApO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5kYXRhID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuYnl0ZXNMb2FkZWQgPSByZXNvdXJjZS5ieXRlc1RvdGFsO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnc3RyaW5nIGxvYWQgZXJyb3InLCBlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgU3RyaW5nUmVzb3VyY2UucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLnJlc291cmNlcy5yZXNvbHZlcnMuYWRkKHJlc29sdmUpO1xuICAgIH1cbiAgICBTdHJpbmdSZXNvdXJjZS5pbml0ID0gaW5pdDtcbn0pKFN0cmluZ1Jlc291cmNlIHx8IChTdHJpbmdSZXNvdXJjZSA9IHt9KSk7XG4iLCJjb25zdCBQSV8yID0gTWF0aC5QSSAqIDI7XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlFbGxpcHNlKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgcmFkaXVzID0gMCwgcmFkaXVzWCwgcmFkaXVzWSwgfSA9IGRhdGE7XG4gICAgY29uc3QgcnggPSByYWRpdXNYID8/IHJhZGl1cztcbiAgICBjb25zdCByeSA9IHJhZGl1c1kgPz8gcmFkaXVzO1xuICAgIGlmIChyeCA9PT0gMCB8fCByeSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5lbGxpcHNlKHgsIHksIHJ4LCByeSwgMCwgMCwgUElfMik7XG4gICAgaWYgKGhhc0ZpbGwpIHtcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYXBwbHlDb21tYW5kKGNvbW1hbmQsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IGNvbW1hbmQ7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21vdmVUbyc6XG4gICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8obW92ZVRvLnggPz8gMCwgbW92ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbGluZVRvJzpcbiAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhsaW5lVG8ueCA/PyAwLCBsaW5lVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjdXJ2ZVRvJzpcbiAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvKGN1cnZlVG8uY3ggPz8gMCwgY3VydmVUby5jeSA/PyAwLCBjdXJ2ZVRvLnggPz8gMCwgY3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2N1YmljQ3VydmVUbyc6XG4gICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKGN1YmljQ3VydmVUby5jeCA/PyAwLCBjdWJpY0N1cnZlVG8uY3kgPz8gMCwgY3ViaWNDdXJ2ZVRvLnN4ID8/IDAsIGN1YmljQ3VydmVUby5zeSA/PyAwLCBjdWJpY0N1cnZlVG8ueCA/PyAwLCBjdWJpY0N1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGF0aChkYXRhLCBoYXNGaWxsLCBjb250ZXh0KSB7XG4gICAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBkYXRhW2ldO1xuICAgICAgICBhcHBseUNvbW1hbmQoY29tbWFuZCwgY29udGV4dCk7XG4gICAgfVxuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UmVjdGFuZ2xlKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgd2lkdGggPSAwLCBoZWlnaHQgPSAwLCB9ID0gZGF0YTtcbiAgICBpZiAod2lkdGggPT09IDAgfHwgaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LnJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgaWYgKGhhc0ZpbGwpIHtcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgTWF0cml4LCBQb2ludCwgUmVjdGFuZ2xlLCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgU2hhcGVFeHRlbnNpb24sIFNIQVBFLCBTaGFwZSB9IGZyb20gJy4uL3NoYXBlJztcbmltcG9ydCB7IGFwcGx5UmVjdGFuZ2xlIH0gZnJvbSAnLi9yZWN0YW5nbGUnO1xuaW1wb3J0IHsgYXBwbHlFbGxpcHNlIH0gZnJvbSAnLi9lbGxpcHNlJztcbmltcG9ydCB7IGFwcGx5UGF0aCB9IGZyb20gJy4vcGF0aCc7XG5pbXBvcnQgeyBhcHBseVN0cmluZyB9IGZyb20gJy4vc3RyaW5nJztcbmltcG9ydCB7IHNldEZpbGxTdHlsZSwgc2V0U3Ryb2tlU3R5bGUgfSBmcm9tICcuL3N0eWxlJztcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuY29uc3Qgb2Zmc2V0ID0gUG9pbnQuZW1wdHkoKTtcbmZ1bmN0aW9uIHJlbmRlckdyYXBoaWNzKGRhdGEsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpIHtcbiAgICBjb25zdCB7IGZpbGwsIHN0cm9rZSB9ID0gZGF0YTtcbiAgICBjb25zdCBoYXNGaWxsID0gISFmaWxsIHx8IGZpbGwgPT09IDA7XG4gICAgY29uc3QgaGFzU3Ryb2tlID0gISFzdHJva2UgfHwgc3Ryb2tlID09PSAwO1xuICAgIGlmICghaGFzRmlsbCAmJiAhaGFzU3Ryb2tlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGV4aXN0ID0gdHJ1ZTtcbiAgICBjb25zdCB7IHR5cGUgfSA9IGRhdGE7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICBleGlzdCA9IGFwcGx5UmVjdGFuZ2xlKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgICAgICAgZXhpc3QgPSBhcHBseUVsbGlwc2UoZGF0YSwgaGFzRmlsbCwgY29udGV4dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGF0aCc6XG4gICAgICAgICAgICBjb25zdCBwYXRoID0gZGF0YTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGF0aC5kYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlTdHJpbmcocGF0aC5kYXRhLCBoYXNGaWxsLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocGF0aC5kYXRhKSkge1xuICAgICAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlQYXRoKHBhdGguZGF0YSwgaGFzRmlsbCwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKCFleGlzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIHNldEZpbGxTdHlsZShmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbiAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgfVxuICAgIGlmIChoYXNTdHJva2UpIHtcbiAgICAgICAgc2V0U3Ryb2tlU3R5bGUoc3Ryb2tlLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB9XG59XG5leHBvcnQgdmFyIENhbnZhc1NoYXBlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNTaGFwZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihzaGFwZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gc2hhcGU7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBQb2ludC5zZXRFbXB0eShvZmZzZXQpO1xuICAgICAgICBpZiAoUGl2b3QuaGFzVmFsdWVzKHNoYXBlKSkge1xuICAgICAgICAgICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzKHNoYXBlLCBib3VuZHMpO1xuICAgICAgICAgICAgaWYgKFJlY3RhbmdsZS5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmZzZXQueCA9IFBpdm90LmdldFgoc2hhcGUsIGJvdW5kcy53aWR0aCk7XG4gICAgICAgICAgICBvZmZzZXQueSA9IFBpdm90LmdldFkoc2hhcGUsIGJvdW5kcy53aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gZW5naW5lLnBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChQb2ludC5pc0VtcHR5KG9mZnNldCkpIHtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludExvY2FsKG1hdHJpeCwgb2Zmc2V0LCBvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCArIG9mZnNldC54LCBtYXRyaXgudHkgKyBvZmZzZXQueSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZW5kZXJHcmFwaGljcyhkYXRhW2ldLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dDJkLCBlbmdpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmVuZGVyR3JhcGhpY3MoZGF0YSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQyZCwgZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNTaGFwZUV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgU2hhcGVFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KFNIQVBFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNTaGFwZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc1NoYXBlRXh0ZW5zaW9uIHx8IChDYW52YXNTaGFwZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBHcmFwaGljc1N0cmluZ1JlYWRlciB9IGZyb20gJy4uL2RhdGEvc3RyaW5nJztcbmltcG9ydCB7IGFwcGx5Q29tbWFuZCB9IGZyb20gJy4vcGF0aCc7XG5jb25zdCByZWFkZXIgPSBuZXcgR3JhcGhpY3NTdHJpbmdSZWFkZXIoKTtcbmV4cG9ydCBmdW5jdGlvbiBhcHBseVN0cmluZyhkYXRhLCBoYXNGaWxsLCBjb250ZXh0KSB7XG4gICAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgcmVhZGVyLnNldFBhdGgoZGF0YSk7XG4gICAgd2hpbGUgKHJlYWRlci5yZWFkTmV4dCgpKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSByZWFkZXIuZ2V0Q29tbWFuZCgpO1xuICAgICAgICBpZiAoY29tbWFuZCkge1xuICAgICAgICAgICAgYXBwbHlDb21tYW5kKGNvbW1hbmQsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgQ2FudmFzUGF0dGVybnMgfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmNvbnN0IGVtcHR5QXJyYXkgPSBbXTtcbmNvbnN0IGRvbU1hdHJpeCA9IG5ldyBET01NYXRyaXgoKTtcbmZ1bmN0aW9uIGdldENhbnZhc1BhdHRlcm4oZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihmaWxsLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgc3dpdGNoIChmaWxsLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NvbGlkJzpcbiAgICAgICAgICAgICAgICBjb25zdCBzb2xpZCA9IGZpbGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihzb2xpZC5jb2xvciA/PyAwLCBzb2xpZC5hbHBoYSA/PyAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBjYXNlICdsaW5lYXInOlxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVhciA9IGZpbGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbnZhc1BhdHRlcm5zLmxpbmVhckdyYWRpZW50UGF0dGVybihsaW5lYXIuYmVnaW5YID8/IDAsIGxpbmVhci5iZWdpblkgPz8gMCwgbGluZWFyLmVuZFggPz8gMCwgbGluZWFyLmVuZFkgPz8gMCwgbGluZWFyLmNvbG9ycyA/PyBlbXB0eUFycmF5LCBsaW5lYXIuYWxwaGFzID8/IGVtcHR5QXJyYXksIGxpbmVhci5yYXRpb3MgPz8gZW1wdHlBcnJheSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQpO1xuICAgICAgICAgICAgY2FzZSAncmFkaWFsJzpcbiAgICAgICAgICAgICAgICBjb25zdCByYWRpYWwgPSBmaWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5yYWRpYWxHcmFkaWVudFBhdHRlcm4ocmFkaWFsLmJlZ2luWCA/PyAwLCByYWRpYWwuYmVnaW5ZID8/IDAsIHJhZGlhbC5iZWdpblJhZGl1cyA/PyAwLCByYWRpYWwuZW5kWCA/PyByYWRpYWwuYmVnaW5YID8/IDAsIHJhZGlhbC5lbmRZID8/IHJhZGlhbC5iZWdpblkgPz8gMCwgcmFkaWFsLmVuZFJhZGl1cyA/PyAwLCByYWRpYWwuY29sb3JzID8/IGVtcHR5QXJyYXksIHJhZGlhbC5hbHBoYXMgPz8gZW1wdHlBcnJheSwgcmFkaWFsLnJhdGlvcyA/PyBlbXB0eUFycmF5LCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCk7XG4gICAgICAgICAgICBjYXNlICdiaXRtYXAnOlxuICAgICAgICAgICAgICAgIGNvbnN0IGJpdG1hcEZpbGwgPSBmaWxsO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVwZWF0ID0gdHJ1ZSwgc3JjLCBtYXRyaXggfSA9IGJpdG1hcEZpbGw7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gQ2FudmFzUGF0dGVybnMuYml0bWFwUGF0dGVybihyZXNvdXJjZS5pbWFnZSwgcmVwZWF0LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhdHRlcm4gJiYgbWF0cml4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21NYXRyaXguYSA9IG1hdHJpeC5hID8/IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21NYXRyaXguYiA9IG1hdHJpeC5iID8/IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21NYXRyaXguYyA9IG1hdHJpeC5jID8/IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21NYXRyaXguZCA9IG1hdHJpeC5kID8/IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21NYXRyaXguZSA9IG1hdHJpeC50eCA/PyAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tTWF0cml4LmYgPSBtYXRyaXgudHkgPz8gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm4uc2V0VHJhbnNmb3JtKGRvbU1hdHJpeCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWxsU3R5bGUoZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZ2V0Q2FudmFzUGF0dGVybihmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHJva2VTdHlsZShzdHJva2UsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpIHtcbiAgICBpZiAodHlwZW9mIHN0cm9rZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihzdHJva2UsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjb250ZXh0LmxpbmVDYXAgPSAncm91bmQnO1xuICAgICAgICBjb250ZXh0LmxpbmVKb2luID0gJ3JvdW5kJztcbiAgICAgICAgY29udGV4dC5taXRlckxpbWl0ID0gMTA7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBzdHJva2UgPT09ICdvYmplY3QnICYmIHN0cm9rZS5maWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGdldENhbnZhc1BhdHRlcm4oc3Ryb2tlLmZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHN0cm9rZS50aGlja25lc3MgPz8gMTtcbiAgICAgICAgY29udGV4dC5saW5lQ2FwID0gc3Ryb2tlLmNhcHMgPz8gJ3JvdW5kJztcbiAgICAgICAgY29udGV4dC5saW5lSm9pbiA9IHN0cm9rZS5qb2ludHMgPz8gJ3JvdW5kJztcbiAgICAgICAgY29udGV4dC5taXRlckxpbWl0ID0gc3Ryb2tlLm1pdGVyTGltaXQgPz8gMTA7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQm91bmRzIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBQYXRoQ29tbWFuZCB9IGZyb20gJy4vcGF0aCc7XG5pbXBvcnQgeyBHcmFwaGljc1N0cmluZyB9IGZyb20gJy4vc3RyaW5nJztcbmV4cG9ydCB2YXIgUmVjdGFuZ2xlRGF0YTtcbihmdW5jdGlvbiAoUmVjdGFuZ2xlRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHdpZHRoID0gMCwgaGVpZ2h0ID0gMCwgfSA9IGRhdGE7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCwgeSk7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShSZWN0YW5nbGVEYXRhIHx8IChSZWN0YW5nbGVEYXRhID0ge30pKTtcbmV4cG9ydCB2YXIgRWxsaXBzZURhdGE7XG4oZnVuY3Rpb24gKEVsbGlwc2VEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgcmFkaXVzID0gMCwgcmFkaXVzWCwgcmFkaXVzWSwgfSA9IGRhdGE7XG4gICAgICAgIGNvbnN0IHJ4ID0gcmFkaXVzWCA/PyByYWRpdXM7XG4gICAgICAgIGNvbnN0IHJ5ID0gcmFkaXVzWSA/PyByYWRpdXM7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCAtIHJ4LCB5IC0gcnkpO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHggKyByeCwgeSArIHJ5KTtcbiAgICB9XG4gICAgRWxsaXBzZURhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoRWxsaXBzZURhdGEgfHwgKEVsbGlwc2VEYXRhID0ge30pKTtcbmV4cG9ydCB2YXIgUGF0aERhdGE7XG4oZnVuY3Rpb24gKFBhdGhEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKHBhdGhEYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBwYXRoRGF0YTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgR3JhcGhpY3NTdHJpbmcuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IGRhdGFbaV07XG4gICAgICAgICAgICAgICAgUGF0aENvbW1hbmQuY2FsY3VsYXRlQm91bmRzKGNvbW1hbmQsIGJvdW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgUGF0aERhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoUGF0aERhdGEgfHwgKFBhdGhEYXRhID0ge30pKTtcbmV4cG9ydCB2YXIgR3JhcGhpY3NEYXRhO1xuKGZ1bmN0aW9uIChHcmFwaGljc0RhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gZGF0YTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdyZWN0YW5nbGUnOlxuICAgICAgICAgICAgICAgIFJlY3RhbmdsZURhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbGxpcHNlJzpcbiAgICAgICAgICAgICAgICBFbGxpcHNlRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3BhdGgnOlxuICAgICAgICAgICAgICAgIFBhdGhEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBHcmFwaGljc0RhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoR3JhcGhpY3NEYXRhIHx8IChHcmFwaGljc0RhdGEgPSB7fSkpO1xuIiwiaW1wb3J0IHsgQm91bmRzIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5leHBvcnQgdmFyIFBhdGhDb21tYW5kO1xuKGZ1bmN0aW9uIChQYXRoQ29tbWFuZCkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBwYXRoO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ21vdmVUbyc6XG4gICAgICAgICAgICBjYXNlICdsaW5lVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBtb3ZlVG8ueCA/PyAwLCBtb3ZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1cnZlVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3VydmVUby5jeCA/PyAwLCBjdXJ2ZVRvLmN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3VydmVUby54ID8/IDAsIGN1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1YmljQ3VydmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby5jeCA/PyAwLCBjdWJpY0N1cnZlVG8uY3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8uc3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLnN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLnggPz8gMCwgY3ViaWNDdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFBhdGhDb21tYW5kIHx8IChQYXRoQ29tbWFuZCA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQYXRoQ29tbWFuZCwgfSBmcm9tICcuL3BhdGgnO1xuY29uc3QgTlVNQkVSU19DT1VOVCA9IHtcbiAgICBNOiAyLFxuICAgIG06IDIsXG4gICAgTDogMixcbiAgICBsOiAyLFxuICAgIEg6IDEsXG4gICAgaDogMSxcbiAgICBWOiAxLFxuICAgIHY6IDEsXG4gICAgQzogNixcbiAgICBjOiA2LFxuICAgIFM6IDQsXG4gICAgczogNCxcbiAgICBROiA0LFxuICAgIHE6IDQsXG4gICAgVDogMixcbiAgICB0OiAyLFxufTtcbmNvbnN0IENPTU1BTkRfUkVHRVggPSAvW01tTGxIaFZ2Q2NTc1FxVHRdLztcbmNvbnN0IE5VTUJFUl9SRUdFWCA9IC9bLStdP1tcXGQuXSsvO1xuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU3RyaW5nU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gJyc7XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IG51bGw7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICB0aGlzLnN5bWJvbFJlZ2V4ID0gL1tNbUxsSGhWdkNjU3NRcVR0XXxbLStdP1tcXGQuXSsvZztcbiAgICB9XG4gICAgc2V0UGF0aChwYXRoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMuc3ltYm9sUmVnZXgubGFzdEluZGV4ID0gMDtcbiAgICB9XG4gICAgZ2V0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZDtcbiAgICB9XG4gICAgZ2V0QnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWZmZXI7XG4gICAgfVxuICAgIHJlYWROZXh0KCkge1xuICAgICAgICBjb25zdCB7IGxhc3RJbmRleCB9ID0gdGhpcy5zeW1ib2xSZWdleDtcbiAgICAgICAgY29uc3Qgc3ltYm9sTWF0Y2ggPSB0aGlzLnN5bWJvbFJlZ2V4LmV4ZWModGhpcy5wYXRoKTtcbiAgICAgICAgaWYgKCFzeW1ib2xNYXRjaCkge1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xNYXRjaFswXTtcbiAgICAgICAgaWYgKENPTU1BTkRfUkVHRVgudGVzdChzeW1ib2wpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBzeW1ib2w7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoTlVNQkVSX1JFR0VYLnRlc3Qoc3ltYm9sKSkge1xuICAgICAgICAgICAgdGhpcy5zeW1ib2xSZWdleC5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jb21tYW5kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY291bnQgPSBOVU1CRVJTX0NPVU5UW3RoaXMuY29tbWFuZF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyTWF0Y2ggPSB0aGlzLnN5bWJvbFJlZ2V4LmV4ZWModGhpcy5wYXRoKTtcbiAgICAgICAgICAgIGlmIChudW1iZXJNYXRjaCAmJiBOVU1CRVJfUkVHRVgudGVzdChudW1iZXJNYXRjaFswXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlcltpXSA9IHBhcnNlRmxvYXQobnVtYmVyTWF0Y2hbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR3JhcGhpY3NTdHJpbmdSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0cmVhbSA9IG5ldyBHcmFwaGljc1N0cmluZ1N0cmVhbSgpO1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSB7IHR5cGU6ICdtb3ZlVG8nIH07XG4gICAgICAgIHRoaXMuY29tbWFuZEV4aXN0cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0WSA9IDA7XG4gICAgICAgIHRoaXMubGFzdENYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0Q1kgPSAwO1xuICAgIH1cbiAgICBzZXRQYXRoKHBhdGgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0uc2V0UGF0aChwYXRoKTtcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgICAgIHRoaXMubGFzdFkgPSAwO1xuICAgICAgICB0aGlzLmxhc3RDWCA9IDA7XG4gICAgICAgIHRoaXMubGFzdENZID0gMDtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gZmFsc2U7XG4gICAgfVxuICAgIGdldENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRFeGlzdHMgPyB0aGlzLmNvbW1hbmQgOiBudWxsO1xuICAgIH1cbiAgICByZWFkTmV4dCgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0ucmVhZE5leHQoKTtcbiAgICAgICAgdGhpcy5wYXJzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kRXhpc3RzO1xuICAgIH1cbiAgICBwYXJzZSgpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMuc3RyZWFtLmdldENvbW1hbmQoKTtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gISFjb21tYW5kO1xuICAgICAgICBpZiAoIXRoaXMuY29tbWFuZEV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuc3RyZWFtLmdldEJ1ZmZlcigpO1xuICAgICAgICBjb25zdCBbZTAsIGUxLCBlMiwgZTMsIGU0LCBlNSxdID0gYnVmZmVyO1xuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbW92ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ21vdmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gZTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IGU0O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGU1O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTQgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGU1ICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IHRoaXMubGFzdENZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGUzICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gdGhpcy5sYXN0Q1k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IHJlYWRlciA9IG5ldyBHcmFwaGljc1N0cmluZ1JlYWRlcigpO1xuZXhwb3J0IHZhciBHcmFwaGljc1N0cmluZztcbihmdW5jdGlvbiAoR3JhcGhpY3NTdHJpbmcpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aCwgYm91bmRzKSB7XG4gICAgICAgIHJlYWRlci5zZXRQYXRoKHBhdGgpO1xuICAgICAgICB3aGlsZSAocmVhZGVyLnJlYWROZXh0KCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSByZWFkZXIuZ2V0Q29tbWFuZCgpO1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc1N0cmluZyB8fCAoR3JhcGhpY3NTdHJpbmcgPSB7fSkpO1xuIiwiaW1wb3J0IHsgTWF0cml4LCBQb2ludCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuY29uc3QgdGVtcFBvaW50MCA9IFBvaW50LmVtcHR5KCk7XG5jb25zdCB0ZW1wUG9pbnQxID0gUG9pbnQuZW1wdHkoKTtcbmNvbnN0IGVtcHR5TWF0cml4ID0gTWF0cml4LmVtcHR5KCk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaGljcyB7XG4gICAgY29uc3RydWN0b3Ioc2hhcGUpIHtcbiAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlO1xuICAgIH1cbiAgICBiZWdpbkZpbGwoY29sb3IgPSAwLCBhbHBoYSA9IDEpIHtcbiAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGJlZ2luQml0bWFwRmlsbChzcmMsIG1hdHJpeCwgcmVwZWF0ID0gdHJ1ZSwgc21vb3RoID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ2JpdG1hcCcsXG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICBzbW9vdGgsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGJlZ2luR3JhZGllbnRGaWxsKHR5cGUsIGNvbG9yLCBhbHBoYSwgcmF0aW8sIG1hdHJpeCkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmVhcicpIHtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueCA9IC04MTkuMjtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueSA9IDA7XG4gICAgICAgICAgICB0ZW1wUG9pbnQxLnggPSA4MTkuMjtcbiAgICAgICAgICAgIHRlbXBQb2ludDEueSA9IDA7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCB0ZW1wUG9pbnQwLCB0ZW1wUG9pbnQwKTtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHRlbXBQb2ludDEsIHRlbXBQb2ludDEpO1xuICAgICAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICAgICAgYmVnaW5YOiB0ZW1wUG9pbnQwLngsXG4gICAgICAgICAgICAgICAgYmVnaW5ZOiB0ZW1wUG9pbnQwLnksXG4gICAgICAgICAgICAgICAgZW5kWDogdGVtcFBvaW50MS54LFxuICAgICAgICAgICAgICAgIGVuZFk6IHRlbXBQb2ludDEueSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnggPSAxNjM4LjQ7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnkgPSAwO1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgdGVtcFBvaW50MCwgdGVtcFBvaW50MCk7XG4gICAgICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgICAgICBiZWdpblg6IHRlbXBQb2ludDAueCxcbiAgICAgICAgICAgICAgICBiZWdpblk6IHRlbXBQb2ludDAueSxcbiAgICAgICAgICAgICAgICBiZWdpblJhZGl1czogMCxcbiAgICAgICAgICAgICAgICBlbmRYOiB0ZW1wUG9pbnQwLngsXG4gICAgICAgICAgICAgICAgZW5kWTogdGVtcFBvaW50MC55LFxuICAgICAgICAgICAgICAgIGVuZFJhZGl1czogTWF0aC5hYnMoKHRlbXBQb2ludDAueCAtIG1hdHJpeC50eCkgLyAyKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGluZVN0eWxlKHRoaWNrbmVzcyA9IDAsIGNvbG9yID0gMCwgYWxwaGEgPSAxLCBwaXhlbEhpbnRpbmcgPSBmYWxzZSwgc2NhbGVNb2RlID0gJ25vbmUnLCBjYXBzID0gJ3JvdW5kJywgam9pbnRzID0gJ3JvdW5kJywgbWl0ZXJMaW1pdCA9IDMpIHtcbiAgICAgICAgdGhpcy5zdHJva2UgPSB7XG4gICAgICAgICAgICB0aGlja25lc3MsXG4gICAgICAgICAgICBwaXhlbEhpbnRpbmcsXG4gICAgICAgICAgICBzY2FsZU1vZGUsXG4gICAgICAgICAgICBjYXBzLFxuICAgICAgICAgICAgam9pbnRzLFxuICAgICAgICAgICAgbWl0ZXJMaW1pdCxcbiAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc29saWQnLFxuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGluZUdyYWRpZW50U3R5bGUodHlwZSwgY29sb3IsIGFscGhhLCByYXRpbywgbWF0cml4ID0gZW1wdHlNYXRyaXgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0cm9rZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnbGluZWFyJykge1xuICAgICAgICAgICAgdGVtcFBvaW50MC54ID0gLTgxOS4yO1xuICAgICAgICAgICAgdGVtcFBvaW50MC55ID0gMDtcbiAgICAgICAgICAgIHRlbXBQb2ludDEueCA9IDgxOS4yO1xuICAgICAgICAgICAgdGVtcFBvaW50MS55ID0gMDtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHRlbXBQb2ludDAsIHRlbXBQb2ludDApO1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgdGVtcFBvaW50MSwgdGVtcFBvaW50MSk7XG4gICAgICAgICAgICB0aGlzLnN0cm9rZS5maWxsID0ge1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICAgICAgYmVnaW5YOiB0ZW1wUG9pbnQwLngsXG4gICAgICAgICAgICAgICAgYmVnaW5ZOiB0ZW1wUG9pbnQwLnksXG4gICAgICAgICAgICAgICAgZW5kWDogdGVtcFBvaW50MS54LFxuICAgICAgICAgICAgICAgIGVuZFk6IHRlbXBQb2ludDEueSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnggPSAxNjM4LjQ7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnkgPSAwO1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgdGVtcFBvaW50MCwgdGVtcFBvaW50MCk7XG4gICAgICAgICAgICB0aGlzLnN0cm9rZS5maWxsID0ge1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICAgICAgYmVnaW5YOiB0ZW1wUG9pbnQwLngsXG4gICAgICAgICAgICAgICAgYmVnaW5ZOiB0ZW1wUG9pbnQwLnksXG4gICAgICAgICAgICAgICAgYmVnaW5SYWRpdXM6IDAsXG4gICAgICAgICAgICAgICAgZW5kWDogdGVtcFBvaW50MC54LFxuICAgICAgICAgICAgICAgIGVuZFk6IHRlbXBQb2ludDAueSxcbiAgICAgICAgICAgICAgICBlbmRSYWRpdXM6IE1hdGguYWJzKCh0ZW1wUG9pbnQwLnggLSBtYXRyaXgudHgpIC8gMiksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGxpbmVCaXRtYXBTdHlsZShzcmMsIG1hdHJpeCwgcmVwZWF0ID0gdHJ1ZSwgc21vb3RoID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0cm9rZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Ryb2tlLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAnYml0bWFwJyxcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHJlcGVhdCxcbiAgICAgICAgICAgIHNtb290aCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbW92ZVRvKHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgIHBhdGgucHVzaCh7IHR5cGU6ICdtb3ZlVG8nLCB4LCB5IH0pO1xuICAgIH1cbiAgICBsaW5lVG8oeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhdGgucHVzaCh7IHR5cGU6ICdsaW5lVG8nLCB4LCB5IH0pO1xuICAgIH1cbiAgICBjdXJ2ZVRvKGN4LCBjeSwgeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3VydmVUbycsIGN4LCBjeSwgeCwgeSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGN1YmljQ3VydmVUbyhjeCwgY3ksIHN4LCBzeSwgeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3VydmVUbycsIGN4LCBjeSwgc3gsIHN5LCB4LCB5LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZHJhd1JvdW5kUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBlbGxpcHNlV2lkdGggPSAwLCBlbGxpcHNlSGVpZ2h0ID0gMCkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5iZWdpblBhdGgoKTtcbiAgICAgICAgY29uc3QgdyA9IGVsbGlwc2VXaWR0aDtcbiAgICAgICAgY29uc3QgaCA9IGVsbGlwc2VIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGsgPSAwLjU1MjI4NDg7XG4gICAgICAgIGNvbnN0IG94ID0gKHcgLyAyKSAqIGs7XG4gICAgICAgIGNvbnN0IG95ID0gKGggLyAyKSAqIGs7XG4gICAgICAgIGNvbnN0IHhlID0geCArIHc7XG4gICAgICAgIGNvbnN0IHllID0geSArIGg7XG4gICAgICAgIGNvbnN0IHhtID0geCArIHcgLyAyO1xuICAgICAgICBjb25zdCB5bSA9IHkgKyBoIC8gMjtcbiAgICAgICAgY29uc3QgZHggPSB3aWR0aCAtIHc7XG4gICAgICAgIGNvbnN0IGR5ID0gaGVpZ2h0IC0gaDtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdtb3ZlVG8nLFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHk6IHltLFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHgsXG4gICAgICAgICAgICBjeTogeW0gLSBveSxcbiAgICAgICAgICAgIHN4OiB4bSAtIG94LFxuICAgICAgICAgICAgc3k6IHksXG4gICAgICAgICAgICB4OiB4bSxcbiAgICAgICAgICAgIHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVUbycsXG4gICAgICAgICAgICB4OiB4bSArIGR4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4bSArIG94ICsgZHgsXG4gICAgICAgICAgICBjeTogeSxcbiAgICAgICAgICAgIHN4OiB4ZSArIGR4LFxuICAgICAgICAgICAgc3k6IHltIC0gb3ksXG4gICAgICAgICAgICB4OiB4ZSArIGR4LFxuICAgICAgICAgICAgeTogeW0sXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVUbycsXG4gICAgICAgICAgICB4OiB4ZSArIGR4LFxuICAgICAgICAgICAgeTogeW0gKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4ZSArIGR4LFxuICAgICAgICAgICAgY3k6IHltICsgb3kgKyBkeSxcbiAgICAgICAgICAgIHN4OiB4bSArIG94ICsgZHgsXG4gICAgICAgICAgICBzeTogeWUgKyBkeSxcbiAgICAgICAgICAgIHg6IHhtICsgZHgsXG4gICAgICAgICAgICB5OiB5ZSArIGR5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeG0sXG4gICAgICAgICAgICB5OiB5ZSArIGR5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhtIC0gb3gsXG4gICAgICAgICAgICBjeTogeWUgKyBkeSxcbiAgICAgICAgICAgIHN4OiB4LFxuICAgICAgICAgICAgc3k6IHltICsgb3kgKyBkeSxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5OiB5bSArIGR5LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZHJhd1JlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEudHlwZSA9ICdyZWN0YW5nbGUnO1xuICAgICAgICBkYXRhLnggPSB4O1xuICAgICAgICBkYXRhLnkgPSB5O1xuICAgICAgICBkYXRhLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGRhdGEuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBkcmF3Q2lyY2xlKHgsIHksIHJhZGl1cykge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEudHlwZSA9ICdlbGxpcHNlJztcbiAgICAgICAgZGF0YS54ID0geDtcbiAgICAgICAgZGF0YS55ID0geTtcbiAgICAgICAgZGF0YS5yYWRpdXMgPSByYWRpdXM7XG4gICAgfVxuICAgIGRyYXdFbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAnZWxsaXBzZSc7XG4gICAgICAgIGRhdGEucmFkaXVzWCA9IHdpZHRoIC8gMjtcbiAgICAgICAgZGF0YS5yYWRpdXNZID0gaGVpZ2h0IC8gMjtcbiAgICAgICAgZGF0YS54ID0geCAtIGRhdGEucmFkaXVzWDtcbiAgICAgICAgZGF0YS55ID0geSAtIGRhdGEucmFkaXVzWTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNoYXBlLmRhdGE7XG4gICAgfVxuICAgIGNyZWF0ZURhdGEoKSB7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUsIGZpbGwsIHN0cm9rZSB9ID0gdGhpcztcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2hhcGUuZGF0YSkpIHtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc2hhcGUuZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHNoYXBlLmRhdGEgPSBbc2hhcGUuZGF0YV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaGFwZS5kYXRhID0gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ3JhcGhpY3NEYXRhID0geyB0eXBlOiAncGF0aCcsIGZpbGwsIHN0cm9rZSB9O1xuICAgICAgICBzaGFwZS5kYXRhLnB1c2goZ3JhcGhpY3NEYXRhKTtcbiAgICAgICAgcmV0dXJuIGdyYXBoaWNzRGF0YTtcbiAgICB9XG4gICAgYmVnaW5QYXRoKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEuZGF0YSA9IFtdO1xuICAgICAgICByZXR1cm4gZGF0YS5kYXRhO1xuICAgIH1cbiAgICBnZXRQYXRoKCkge1xuICAgICAgICBjb25zdCB7IHNoYXBlIH0gPSB0aGlzO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2hhcGUuZGF0YSkgfHwgIXNoYXBlLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBzaGFwZS5kYXRhW3NoYXBlLmRhdGEubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLmRhdGEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhLmRhdGE7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9kYXRhL2RhdGEnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL3BhdGgnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL3N0cmluZyc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvc3R5bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9ncmFwaGljcyc7XG5leHBvcnQgKiBmcm9tICcuL3NoYXBlJztcbmV4cG9ydCAqIGZyb20gJy4vY2FudmFzL3NoYXBlJztcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBCb3VuZHMsIFJlY3RhbmdsZSB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBHcmFwaGljc0RhdGEgfSBmcm9tICcuL2RhdGEvZGF0YSc7XG5pbXBvcnQgR3JhcGhpY3MgZnJvbSAnLi9ncmFwaGljcyc7XG5leHBvcnQgY29uc3QgU0hBUEUgPSAnc2hhcGUnO1xuY29uc3QgYm91bmRzID0gQm91bmRzLmVtcHR5KCk7XG5leHBvcnQgdmFyIFNoYXBlO1xuKGZ1bmN0aW9uIChTaGFwZSkge1xuICAgIGZ1bmN0aW9uIGdldEdyYXBoaWNzKHNoYXBlKSB7XG4gICAgICAgIHJldHVybiBuZXcgR3JhcGhpY3Moc2hhcGUpO1xuICAgIH1cbiAgICBTaGFwZS5nZXRHcmFwaGljcyA9IGdldEdyYXBoaWNzO1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhzaGFwZSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gc2hhcGU7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQm91bmRzLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBHcmFwaGljc0RhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGFbaV0sIGJvdW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBHcmFwaGljc0RhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQm91bmRzLmlzRW1wdHkoYm91bmRzKSkge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgd2lkdGggPSBib3VuZHMubWF4WCAtIGJvdW5kcy5taW5YO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBib3VuZHMubWF4WSAtIGJvdW5kcy5taW5ZO1xuICAgICAgICBjb25zdCB4ID0gYm91bmRzLm1pblggKyBQaXZvdC5nZXRYKHNoYXBlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBib3VuZHMubWluWSArIFBpdm90LmdldFkoc2hhcGUsIGhlaWdodCk7XG4gICAgICAgIHJlc3VsdC54ID0geDtcbiAgICAgICAgcmVzdWx0LnkgPSB5O1xuICAgICAgICByZXN1bHQud2lkdGggPSB3aWR0aDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoU2hhcGUgfHwgKFNoYXBlID0ge30pKTtcbmNvbnN0IHJlY3RhbmdsZSA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBTaGFwZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoU2hhcGVFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KHNoYXBlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBsb2NhbCB9ID0gZW5naW5lLnBvaW50ZXJzO1xuICAgICAgICBTaGFwZS5jYWxjdWxhdGVCb3VuZHMoc2hhcGUsIHJlY3RhbmdsZSk7XG4gICAgICAgIHJldHVybiBSZWN0YW5nbGUuY29udGFpbnMocmVjdGFuZ2xlLCBsb2NhbCk7XG4gICAgfVxuICAgIFNoYXBlRXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KFNIQVBFLCBoaXRUZXN0KTtcbiAgICAgICAgSW1hZ2VSZXNvdXJjZS5pbml0KGVuZ2luZSk7XG4gICAgfVxuICAgIFNoYXBlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoU2hhcGVFeHRlbnNpb24gfHwgKFNoYXBlRXh0ZW5zaW9uID0ge30pKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCB7XG5cdENhbnZhc1NoYXBlRXh0ZW5zaW9uLCBTaGFwZSwgU0hBUEUsXG59IGZyb20gJ0BqZW5nL3NoYXBlJztcbmltcG9ydCB7IENhbnZhc0VuZ2luZSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBDT05UQUlORVIgfSBmcm9tICdAamVuZy9jb3JlJztcblxuLy8gY3JlYXRlIGVuZ2luZVxuY29uc3QgZW5naW5lID0gbmV3IENhbnZhc0VuZ2luZSgpO1xuLy8gYWRkIHNoYXBlIGV4dGVuc2lvblxuQ2FudmFzU2hhcGVFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuLy8gc2V0IGZ1bGxzY3JlZW4gbW9kZVxuZW5naW5lLnNjcmVlbi5mdWxsc2NyZWVuID0gdHJ1ZTtcbi8vIHN0YXJ0IHVwZGF0ZSBsb29wXG5lbmdpbmUudGlja2VyLnBsYXkoKTtcbi8vIGFkZCBlbmdpbmUgdmlldyB0byBwYWdlXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVuZ2luZS5wbGF0Zm9ybS52aWV3KTtcblxuLy8gY3JlYXRlIHNpbXBsZSBhcHAgd2l0aCBzaGFwZXNcbmVuZ2luZS5yb290ID0ge1xuXHR0eXBlOiBDT05UQUlORVIsXG5cdGNoaWxkcmVuOiB7XG5cdFx0cmVjdGFuZ2xlOiB7XG5cdFx0XHR0eXBlOiBTSEFQRSxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0dHlwZTogJ3JlY3RhbmdsZScsXG5cdFx0XHRcdHg6IDIwLFxuXHRcdFx0XHR5OiAyMCxcblx0XHRcdFx0d2lkdGg6IDEwMCxcblx0XHRcdFx0aGVpZ2h0OiA1MCxcblx0XHRcdFx0ZmlsbDoge1xuXHRcdFx0XHRcdHR5cGU6ICdsaW5lYXInLFxuXHRcdFx0XHRcdGJlZ2luWDogMjAsXG5cdFx0XHRcdFx0ZW5kWDogMTIwLFxuXHRcdFx0XHRcdGNvbG9yczogWzB4ZmYwMDAwLCAweDAwZmYwMCwgMHgwMDAwZmZdLFxuXHRcdFx0XHRcdGFscGhhczogWzEsIDAuNSwgMC44XSxcblx0XHRcdFx0XHRyYXRpb3M6IFswLCAwLjMsIDFdLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdHJva2U6IDB4MDAwMGZmLFxuXHRcdFx0fSxcblx0XHR9IGFzIFNoYXBlLFxuXHRcdGVsbGlwc2U6IHtcblx0XHRcdHR5cGU6IFNIQVBFLFxuXHRcdFx0eDogMTAwLFxuXHRcdFx0eTogLTMwLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHR0eXBlOiAnZWxsaXBzZScsXG5cdFx0XHRcdHg6IDEwMCxcblx0XHRcdFx0eTogMTAwLFxuXHRcdFx0XHRyYWRpdXM6IDUwLFxuXHRcdFx0XHRmaWxsOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3JhZGlhbCcsXG5cdFx0XHRcdFx0YmVnaW5YOiA4MCxcblx0XHRcdFx0XHRiZWdpblk6IDgwLFxuXHRcdFx0XHRcdGVuZFJhZGl1czogODAsXG5cdFx0XHRcdFx0Y29sb3JzOiBbMHhmZmZmZmYsIDB4ZmYwMDAwLCAweDAwMDBmZl0sXG5cdFx0XHRcdFx0YWxwaGFzOiBbMSwgMC41LCAwLjhdLFxuXHRcdFx0XHRcdHJhdGlvczogWzAsIDAuMywgMV0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0gYXMgU2hhcGUsXG5cdFx0aGVhcnQ6IHtcblx0XHRcdHR5cGU6IFNIQVBFLFxuXHRcdFx0eDogMzAsXG5cdFx0XHR5OiAxMjAsXG5cdFx0XHRzY2FsZTogMixcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0dHlwZTogJ3BhdGgnLFxuXHRcdFx0XHRkYXRhOiAnTSA2NSwyOSBDIDU5LDE5IDQ5LDEyIDM3LDEyIDIwLDEyIDcsMjUgNyw0MiA3LDc1IDI1LDgwIDY1LDExOCAxMDUsODAgMTIzLDc1IDEyMyw0MiAxMjMsMjUgMTEwLDEyIDkzLDEyIDgxLDEyIDcxLDE5IDY1LDI5IHonLFxuXHRcdFx0XHRmaWxsOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2JpdG1hcCcsXG5cdFx0XHRcdFx0bWF0cml4OiB7XG5cdFx0XHRcdFx0XHRhOiAwLjMsXG5cdFx0XHRcdFx0XHRiOiAwLFxuXHRcdFx0XHRcdFx0YzogMCxcblx0XHRcdFx0XHRcdGQ6IDAuMyxcblx0XHRcdFx0XHRcdHR4OiAzMCxcblx0XHRcdFx0XHRcdHR5OiAzMCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNyYzogJ2Fzc2V0cy9kaXNjaGFyZ2UucG5nJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0c3Ryb2tlOiAwLFxuXHRcdFx0fSxcblx0XHR9IGFzIFNoYXBlLFxuXHR9LFxufSBhcyBDb250YWluZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9