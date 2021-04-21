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
/* harmony import */ var _e2d_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/core */ "../../packages/core/dist/index.js");
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
}(_e2d_core__WEBPACK_IMPORTED_MODULE_0__.Engine);

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
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../../packages/geom/dist/index.js");

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

/***/ "../../packages/canvas-engine/dist/platform.js":
/*!*****************************************************!*\
  !*** ../../packages/canvas-engine/dist/platform.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasPlatform": () => (/* binding */ CanvasPlatform)
/* harmony export */ });
/* harmony import */ var _e2d_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/core */ "../../packages/core/dist/index.js");
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
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../../packages/geom/dist/index.js");
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
    _this.global = _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Point.empty();
    _this.local = _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Point.empty();
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
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.concat(parent.matrix, context.matrix, context.matrix);
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.transformInversePoint(context.matrix, this.global, this.local);
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
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../../packages/geom/dist/index.js");
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

      if (!_extensions_display__WEBPACK_IMPORTED_MODULE_1__.Display.isVisible(component)) {
        return;
      }

      var context = this.getContext();
      _extensions_transform__WEBPACK_IMPORTED_MODULE_2__.Transform.getMatrix(component, context.matrix);
      _extensions_transform__WEBPACK_IMPORTED_MODULE_2__.Transform.getColorTransform(component, context.colorTransform);
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
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../../packages/geom/dist/index.js");
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

/***/ "../../packages/image/dist/canvas-image-color.js":
/*!*******************************************************!*\
  !*** ../../packages/image/dist/canvas-image-color.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasImageColorExtension": () => (/* binding */ CanvasImageColorExtension)
/* harmony export */ });
/* harmony import */ var _e2d_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/core */ "../../packages/core/dist/index.js");
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/geom */ "../../packages/geom/dist/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "../../packages/image/dist/image.js");



var bounds = _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.empty();
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
/* harmony import */ var _e2d_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/core */ "../../packages/core/dist/index.js");
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
/* harmony import */ var _e2d_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/core */ "../../packages/core/dist/index.js");
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/geom */ "../../packages/geom/dist/index.js");
/* harmony import */ var _e2d_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @e2d/resources */ "../../packages/resources/dist/index.js");



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

    if (!(resource !== null && resource !== void 0 && resource.image)) {
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
    var local = engine.pointers.local;
    Image.calculateBounds(image, bounds, engine);
    return _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.contains(bounds, local);
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
    context.progress = _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Resource.getProgress(resource);
    context.loaded = !!(resource !== null && resource !== void 0 && resource.loaded) && !!(resource !== null && resource !== void 0 && resource.image);
  }

  ImageExtension.loaded = loaded;

  function init(engine) {
    engine.components.hitTest.set(IMAGE, hitTest);
    engine.components.loaded.set(IMAGE, loaded);
    _e2d_resources__WEBPACK_IMPORTED_MODULE_2__.ImageResource.init(engine);
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
/* harmony import */ var _e2d_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/image */ "../../packages/image/dist/index.js");
/* harmony import */ var _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/canvas-engine */ "../../packages/canvas-engine/dist/index.js");


const engine = new _e2d_canvas_engine__WEBPACK_IMPORTED_MODULE_1__.CanvasEngine();
_e2d_image__WEBPACK_IMPORTED_MODULE_0__.CanvasImageColorExtension.init(engine);
engine.screen.fullscreen = true;
engine.ticker.play();
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.appendChild(engine.platform.view);
const ring = {
    type: 'image',
    src: 'assets/Rings_promo_mythic.png',
    scale: 0.4,
};
const transforms = [
    {},
    { alpha: 0.2 },
    { tint: { color: 0xff0000, value: 0.5 } },
    { brightness: 0.5 },
    { brightness: 0 },
    { brightness: -0.5 },
];
engine.root = {
    type: 'container',
    children: transforms.map((transform, index) => ({
        ...transform,
        type: 'container',
        children: ring,
        x: 20 + 150 * (index % 3),
        y: 20 + 120 * ((index / 3) | 0),
    })),
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZS1jb2xvci8uLi9wYWNrYWdlcy9jYW52YXMtZW5naW5lL2Rpc3QvZW5naW5lLmpzIiwid2VicGFjazovL2ltYWdlLWNvbG9yLy4uL3BhY2thZ2VzL2NhbnZhcy1lbmdpbmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbWFnZS1jb2xvci8uLi9wYWNrYWdlcy9jYW52YXMtZW5naW5lL2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY29sb3IvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L3BsYXRmb3JtLmpzIiwid2VicGFjazovL2ltYWdlLWNvbG9yLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9pbWFnZS1jb2xvci8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvY29tcG9uZW50cy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY29sb3IvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvcmUvZW5naW5lLmpzIiwid2VicGFjazovL2ltYWdlLWNvbG9yLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9jb3JlL2ZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY29sb3IvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9pbWFnZS1jb2xvci8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy9waXZvdC5qcyIsIndlYnBhY2s6Ly9pbWFnZS1jb2xvci8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy9wb2ludGVyLmpzIiwid2VicGFjazovL2ltYWdlLWNvbG9yLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9leHRlbnNpb25zL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9pbWFnZS1jb2xvci8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY29sb3IvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY29sb3IvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL2RlYnVnLmpzIiwid2VicGFjazovL2ltYWdlLWNvbG9yLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9sb2FkaW5nLmpzIiwid2VicGFjazovL2ltYWdlLWNvbG9yLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9pbWFnZS1jb2xvci8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvcG9pbnRlcnMuanMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY29sb3IvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3JlbmRlcmVyLmpzIiwid2VicGFjazovL2ltYWdlLWNvbG9yLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9yZXNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY29sb3IvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9pbWFnZS1jb2xvci8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvdGlja2VyLmpzIiwid2VicGFjazovL2ltYWdlLWNvbG9yLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy91cGRhdGVyLmpzIiwid2VicGFjazovL2ltYWdlLWNvbG9yLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbWFnZS1jb2xvci8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvaW5wdXQvbW91c2UuanMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY29sb3IvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L2JvdW5kcy5qcyIsIndlYnBhY2s6Ly9pbWFnZS1jb2xvci8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvY29sb3ItdHJhbnNmb3JtLmpzIiwid2VicGFjazovL2ltYWdlLWNvbG9yLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbWFnZS1jb2xvci8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvbWF0cml4LmpzIiwid2VicGFjazovL2ltYWdlLWNvbG9yLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9wb2ludC5qcyIsIndlYnBhY2s6Ly9pbWFnZS1jb2xvci8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL2ltYWdlLWNvbG9yLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvY2FudmFzLWltYWdlLWNvbG9yLmpzIiwid2VicGFjazovL2ltYWdlLWNvbG9yLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvY2FudmFzLWltYWdlLmpzIiwid2VicGFjazovL2ltYWdlLWNvbG9yLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY29sb3IvLi4vcGFja2FnZXMvaW1hZ2UvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbWFnZS1jb2xvci8uLi9wYWNrYWdlcy9yZXNvdXJjZXMvZGlzdC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9pbWFnZS1jb2xvci8uLi9wYWNrYWdlcy9yZXNvdXJjZXMvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbWFnZS1jb2xvci8uLi9wYWNrYWdlcy9yZXNvdXJjZXMvZGlzdC9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY29sb3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW1hZ2UtY29sb3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ltYWdlLWNvbG9yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaW1hZ2UtY29sb3IvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiQ2FudmFzRW5naW5lIiwibW9kdWxlIiwiUGxhdGZvcm0iLCJDYW52YXNQbGF0Zm9ybSIsIkVuZ2luZSIsInBvaW50MSIsIlBvaW50IiwicG9pbnQyIiwiQ2FudmFzUGF0dGVybnMiLCJjb2xvclBhdHRlcm4iLCJjb2xvciIsImFscGhhIiwiY3QiLCJyIiwiZyIsImIiLCJhIiwiQ29sb3JUcmFuc2Zvcm0iLCJyZWRNdWx0aXBsaWVyIiwicmVkT2Zmc2V0IiwiZ3JlZW5NdWx0aXBsaWVyIiwiZ3JlZW5PZmZzZXQiLCJibHVlTXVsdGlwbGllciIsImJsdWVPZmZzZXQiLCJhbHBoYU11bHRpcGxpZXIiLCJhbHBoYU9mZnNldCIsImFkZEdyYWRpZW50Q29sb3JzIiwicGF0dGVybiIsImNvbG9ycyIsImFscGhhcyIsInJhdGlvcyIsImNvbG9yVHJhbnNmb3JtIiwiaSIsImxlbmd0aCIsInJnYiIsInJhdGlvIiwiYWRkQ29sb3JTdG9wIiwicmFkaWFsR3JhZGllbnRQYXR0ZXJuIiwibWF0cml4IiwiY29udGV4dCIsIngiLCJ5IiwiTWF0cml4IiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJ0eCIsInR5IiwiTWF0aCIsImFicyIsImxpbmVhckdyYWRpZW50UGF0dGVybiIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYml0bWFwUGF0dGVybiIsImltYWdlIiwicmVwZWF0IiwiY3JlYXRlUGF0dGVybiIsImFyZ3VtZW50cyIsInZpZXciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0cyIsImdldENvbnRleHQiLCJjdXN0b21Db250ZXh0cyIsInB1c2giLCJwb3AiLCJlbmdpbmUiLCJkZWJ1ZyIsIndhcm5pbmciLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImNsZWFyIiwidXBkYXRlU2l6ZSIsInNldFRyYW5zZm9ybSIsImNsZWFyUmVjdCIsInNjcmVlbiIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwicGl4ZWxSYXRpbyIsImdldFBpeGVsUmF0aW8iLCJ2aWV3V2lkdGgiLCJmbG9vciIsInZpZXdIZWlnaHQiLCJzdHlsZSIsIkNPTlRBSU5FUiIsIkNvbnRhaW5lciIsIm51bUNoaWxkcmVuIiwiY29udGFpbmVyIiwiY2hpbGRyZW4iLCJBcnJheSIsImlzQXJyYXkiLCJ0eXBlIiwia2V5cyIsIk9iamVjdCIsIkNvbnRhaW5lckV4dGVuc2lvbiIsInJlbmRlciIsInJlbmRlcmVyIiwiZGVwdGgiLCJjb21wb25lbnQiLCJyZW5kZXJDb21wb25lbnQiLCJjb21wb25lbnRzTWFwIiwidXBkYXRlIiwidXBkYXRlciIsInVwZGF0ZUNvbXBvbmVudCIsImhpdFRlc3QiLCJwb2ludGVyRXZlbnRzIiwicG9pbnRlcnMiLCJyZXN1bHQiLCJkaXNwYXRjaENvbXBvbmVudCIsImxvYWRlZCIsImxvYWRpbmciLCJwcm9ncmVzcyIsImNvbXBvbmVudENvbnRleHQiLCJpbml0IiwiY29tcG9uZW50cyIsInNldCIsIkxPQURFUiIsIkxvYWRlciIsImdldExvYWRpbmdQcm9ncmVzcyIsImxvYWRlciIsImxvYWRpbmdQcm9ncmVzcyIsImlzTG9hZGVkIiwibmVlZExvYWRpbmdDaGVjayIsImxvYWRpbmdDaGVjayIsIkxvYWRlckV4dGVuc2lvbiIsIm9uTG9hZGVkIiwiQ29tcG9uZW50cyIsIlNjcmVlbiIsIlVwZGF0ZXIiLCJMb2FkaW5nIiwiUmVuZGVyZXIiLCJQb2ludGVycyIsIlRpY2tlciIsIkRlYnVnIiwiUmVzb3VyY2VzIiwicGxhdGZvcm0iLCJ0aWNrZXIiLCJyZXNvdXJjZXMiLCJFbmdpbmVGZWF0dXJlIiwiRGlzcGxheSIsImlzVmlzaWJsZSIsInZpc2libGUiLCJQaXZvdCIsImdldFgiLCJwaXZvdCIsInBpdm90WCIsImdldFkiLCJwaXZvdFkiLCJoYXNWYWx1ZXMiLCJoYW5kbGVyc01hcCIsInBvaW50ZXJEb3duIiwicG9pbnRlclVwIiwicG9pbnRlck1vdmUiLCJwb2ludGVyT3ZlciIsInBvaW50ZXJPdXQiLCJQb2ludGVyIiwiaXNQb2ludGVyT3ZlciIsInBvaW50ZXIiLCJpc1BvaW50ZXJFbmFibGVkIiwicG9pbnRlckVuYWJsZWQiLCJkaXNwYXRjaEV2ZW50IiwiaWQiLCJoYW5kbGVyTmFtZSIsImV2ZW50IiwiVHJhbnNmb3JtIiwiZ2V0TWF0cml4IiwidHJhbnNmb3JtIiwiYyIsImQiLCJyb3RhdGlvbiIsInNjYWxlWCIsInNjYWxlIiwic2NhbGVZIiwiY29zIiwic2luIiwiZ2V0Q29sb3JUcmFuc2Zvcm0iLCJ0aW50IiwidmFsdWUiLCJ2YWx1ZUludmVydGVkIiwiYnJpZ2h0bmVzcyIsInVuZGVmaW5lZCIsInBlcmNlbnQiLCJvZmZzZXQiLCJVcGRhdGUiLCJpc0VuYWJsZWQiLCJlbmFibGVkIiwidGltZSIsIm9uVXBkYXRlIiwicHJvcGVydGllcyIsIk1hcCIsImVycm9ycyIsIndhcm5pbmdzIiwiY29uc29sZSIsImxvZyIsImFyZ3MiLCJTdHJpbmciLCJjb3VudCIsImdldCIsImVycm9yIiwid2FybiIsImVsYXBzZWRUaW1lIiwiaGFuZGxlciIsInJvb3QiLCJzdGFydFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImdsb2JhbCIsImxvY2FsIiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJiYXNlIiwicGFyZW50IiwiYmVnaW4iLCJlbmQiLCJSZXNvdXJjZSIsImdldFByb2dyZXNzIiwicmVzb3VyY2UiLCJieXRlc1RvdGFsIiwiYnl0ZXNMb2FkZWQiLCJyZXNvbHZlcnMiLCJTZXQiLCJhc3NldCIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1bGxzY3JlZW4iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiZnJhbWVSYXRlIiwicGF1c2VkIiwidXBkYXRlRnJhbWUiLCJjdXJyZW50VGltZSIsImRlbHRhVGltZSIsInVwZGF0ZU5leHRGcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZVByb3BlcnRpZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJjbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRMZWZ0IiwiY2xpZW50WSIsInRvcCIsImNsaWVudFRvcCIsImRpc3BhdGNoIiwicHJldmVudERlZmF1bHQiLCJNb3VzZUV4dGVuc2lvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJCb3VuZHMiLCJlbXB0eSIsIm1pblgiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJtaW5ZIiwibWF4WCIsIk1JTl9WQUxVRSIsIm1heFkiLCJzZXRFbXB0eSIsImJvdW5kcyIsImlzRW1wdHkiLCJ0b1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInRlc3RYIiwidGVzdFkiLCJ0ZXN0IiwidGVzdFBvaW50IiwicG9pbnQiLCJpc0VtcHR5V2l0aEFscGhhIiwiY29weSIsImZyb20iLCJ0byIsImNvbmNhdCIsImN0MSIsImN0MCIsIm1hdHJpeDAiLCJtYXRyaXgxIiwiZ2V0RGV0ZXJtaW5hbnQiLCJpbnZlcnQiLCJkZXRlcm1pbmFudCIsInRyYW5zZm9ybVBvaW50IiwidHJhbnNmb3JtUG9pbnRMb2NhbCIsInRyYW5zZm9ybUludmVyc2VQb2ludCIsInRyYW5zZm9ybUJvdW5kcyIsInJ4IiwicnkiLCJyciIsInJiIiwibngxIiwibnkxIiwibngyIiwibnkyIiwibngzIiwibnkzIiwibng0Iiwibnk0IiwicmlnaHQiLCJib3R0b20iLCJzcXJ0IiwiYW5nbGUiLCJhdGFuMiIsImVxdWFscyIsInBvaW50MCIsInNvdXJjZSIsInRhcmdldCIsIm5vcm1hbGl6ZSIsInRoaWNrbmVzcyIsImRpc3RhbmNlIiwiZHgiLCJkeSIsImludGVycG9sYXRlIiwicG9sYXIiLCJSZWN0YW5nbGUiLCJjb250YWlucyIsIkNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24iLCJzcmMiLCJjb250ZXh0MmQiLCJnbG9iYWxBbHBoYSIsImRyYXdJbWFnZSIsImN1c3RvbUNvbnRleHQiLCJjcmVhdGVDdXN0b21Db250ZXh0IiwiaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwicm0iLCJnbSIsImJtIiwiYW0iLCJybyIsImdvIiwiYm8iLCJhbyIsImRhdGEiLCJwdXRJbWFnZURhdGEiLCJkZXN0cm95Q3VzdG9tQ29udGV4dCIsIkltYWdlRXh0ZW5zaW9uIiwiSU1BR0UiLCJDYW52YXNJbWFnZUV4dGVuc2lvbiIsIkltYWdlIiwiY2FsY3VsYXRlQm91bmRzIiwiSW1hZ2VSZXNvdXJjZSIsImV4dGVuc2lvbiIsInNwbGl0Iiwib25sb2FkIiwib25lcnJvciIsImUiLCJhZGQiLCJTdHJpbmdSZXNvdXJjZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ucHJvZ3Jlc3MiLCJ0b3RhbCIsInJlc3BvbnNlVGV4dCIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTyxJQUFNQSxZQUFiO0FBQUE7O0FBQUE7O0FBQ0ksMEJBQXlCO0FBQUE7O0FBQUEsUUFBYkMsTUFBYSx1RUFBSixFQUFJOztBQUFBOztBQUNyQkEsVUFBTSxDQUFDQyxRQUFQLHVCQUFrQkQsTUFBTSxDQUFDQyxRQUF6QiwrREFBcUNDLHFEQUFyQztBQURxQiw2QkFFZkYsTUFGZTtBQUd4Qjs7QUFKTDtBQUFBLEVBQWtDRyw2Q0FBbEMsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBLElBQU1DLE1BQU0sR0FBR0Msa0RBQUEsRUFBZjtBQUNBLElBQU1DLE1BQU0sR0FBR0Qsa0RBQUEsRUFBZjtBQUNPLElBQUlFLGNBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxjQUFWLEVBQTBCO0FBQ3ZCLFdBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCQyxLQUE3QixFQUFvQ0MsRUFBcEMsRUFBd0M7QUFDcEMsUUFBSUMsQ0FBQyxHQUFHSCxLQUFLLElBQUksRUFBVCxHQUFjLElBQXRCO0FBQ0EsUUFBSUksQ0FBQyxHQUFHSixLQUFLLElBQUksQ0FBVCxHQUFhLElBQXJCO0FBQ0EsUUFBSUssQ0FBQyxHQUFHTCxLQUFLLEdBQUcsSUFBaEI7QUFDQSxRQUFJTSxDQUFDLEdBQUdMLEtBQUssR0FBRyxJQUFoQjs7QUFDQSxRQUFJLENBQUNNLDZEQUFBLENBQXVCTCxFQUF2QixDQUFMLEVBQWlDO0FBQzdCQyxPQUFDLEdBQUlBLENBQUMsR0FBR0QsRUFBRSxDQUFDTSxhQUFQLEdBQXVCTixFQUFFLENBQUNPLFNBQTNCLEdBQXdDLElBQTVDO0FBQ0FMLE9BQUMsR0FBSUEsQ0FBQyxHQUFHRixFQUFFLENBQUNRLGVBQVAsR0FBeUJSLEVBQUUsQ0FBQ1MsV0FBN0IsR0FBNEMsSUFBaEQ7QUFDQU4sT0FBQyxHQUFJQSxDQUFDLEdBQUdILEVBQUUsQ0FBQ1UsY0FBUCxHQUF3QlYsRUFBRSxDQUFDVyxVQUE1QixHQUEwQyxJQUE5QztBQUNBUCxPQUFDLEdBQUlBLENBQUMsR0FBR0osRUFBRSxDQUFDWSxlQUFQLEdBQXlCWixFQUFFLENBQUNhLFdBQTdCLEdBQTRDLElBQWhEO0FBQ0g7O0FBQ0QsUUFBSVQsQ0FBQyxHQUFHLElBQVIsRUFBYztBQUNWLDRCQUFlSCxDQUFmLGVBQXFCQyxDQUFyQixlQUEyQkMsQ0FBM0IsZUFBaUNDLENBQUMsR0FBRyxJQUFyQztBQUNIOztBQUNELHlCQUFjSCxDQUFkLGVBQW9CQyxDQUFwQixlQUEwQkMsQ0FBMUI7QUFDSDs7QUFDRFAsZ0JBQWMsQ0FBQ0MsWUFBZixHQUE4QkEsWUFBOUI7O0FBQ0EsV0FBU2lCLGlCQUFULENBQTJCQyxPQUEzQixFQUFvQ0MsTUFBcEMsRUFBNENDLE1BQTVDLEVBQW9EQyxNQUFwRCxFQUE0REMsY0FBNUQsRUFBNEU7QUFDeEUsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixNQUFNLENBQUNLLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLFVBQU1FLEdBQUcsR0FBR04sTUFBTSxDQUFDSSxDQUFELENBQWxCO0FBQ0EsVUFBTXJCLEtBQUssR0FBR2tCLE1BQU0sQ0FBQ0csQ0FBRCxDQUFwQjtBQUNBLFVBQUlHLEtBQUssR0FBR0wsTUFBTSxDQUFDRSxDQUFELENBQU4sR0FBWSxJQUF4QjtBQUNBLFVBQUlHLEtBQUssR0FBRyxDQUFaLEVBQ0lBLEtBQUssR0FBRyxDQUFSO0FBQ0osVUFBSUEsS0FBSyxHQUFHLENBQVosRUFDSUEsS0FBSyxHQUFHLENBQVI7QUFDSlIsYUFBTyxDQUFDUyxZQUFSLENBQXFCRCxLQUFyQixFQUE0QjFCLFlBQVksQ0FBQ3lCLEdBQUQsRUFBTXZCLEtBQU4sRUFBYW9CLGNBQWIsQ0FBeEM7QUFDSDtBQUNKOztBQUNEdkIsZ0JBQWMsQ0FBQ2tCLGlCQUFmLEdBQW1DQSxpQkFBbkM7O0FBQ0EsV0FBU1cscUJBQVQsQ0FBK0JDLE1BQS9CLEVBQXVDVixNQUF2QyxFQUErQ0MsTUFBL0MsRUFBdURDLE1BQXZELEVBQStEQyxjQUEvRCxFQUErRVEsT0FBL0UsRUFBd0Y7QUFDcEZsQyxVQUFNLENBQUNtQyxDQUFQLEdBQVcsTUFBWDtBQUNBbkMsVUFBTSxDQUFDb0MsQ0FBUCxHQUFXLENBQVg7QUFDQUMsZ0VBQUEsQ0FBc0JKLE1BQXRCLEVBQThCakMsTUFBOUIsRUFBc0NBLE1BQXRDO0FBQ0EsUUFBTXNCLE9BQU8sR0FBR1ksT0FBTyxDQUFDSSxvQkFBUixDQUE2QkwsTUFBTSxDQUFDTSxFQUFwQyxFQUF3Q04sTUFBTSxDQUFDTyxFQUEvQyxFQUFtRCxDQUFuRCxFQUFzRFAsTUFBTSxDQUFDTSxFQUE3RCxFQUFpRU4sTUFBTSxDQUFDTyxFQUF4RSxFQUE0RUMsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBQzFDLE1BQU0sQ0FBQ21DLENBQVAsR0FBV0YsTUFBTSxDQUFDTSxFQUFuQixJQUF5QixDQUFsQyxDQUE1RSxDQUFoQjtBQUNBbEIscUJBQWlCLENBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFrQkMsTUFBbEIsRUFBMEJDLE1BQTFCLEVBQWtDQyxjQUFsQyxDQUFqQjtBQUNBLFdBQU9KLE9BQVA7QUFDSDs7QUFDRG5CLGdCQUFjLENBQUM2QixxQkFBZixHQUF1Q0EscUJBQXZDOztBQUNBLFdBQVNXLHFCQUFULENBQStCVixNQUEvQixFQUF1Q1YsTUFBdkMsRUFBK0NDLE1BQS9DLEVBQXVEQyxNQUF2RCxFQUErREMsY0FBL0QsRUFBK0VRLE9BQS9FLEVBQXdGO0FBQ3BGbEMsVUFBTSxDQUFDbUMsQ0FBUCxHQUFXLENBQUMsS0FBWjtBQUNBbkMsVUFBTSxDQUFDb0MsQ0FBUCxHQUFXLENBQVg7QUFDQWxDLFVBQU0sQ0FBQ2lDLENBQVAsR0FBVyxLQUFYO0FBQ0FqQyxVQUFNLENBQUNrQyxDQUFQLEdBQVcsQ0FBWDtBQUNBQyxnRUFBQSxDQUFzQkosTUFBdEIsRUFBOEJqQyxNQUE5QixFQUFzQ0EsTUFBdEM7QUFDQXFDLGdFQUFBLENBQXNCSixNQUF0QixFQUE4Qi9CLE1BQTlCLEVBQXNDQSxNQUF0QztBQUNBLFFBQU1vQixPQUFPLEdBQUdZLE9BQU8sQ0FBQ1Usb0JBQVIsQ0FBNkI1QyxNQUFNLENBQUNtQyxDQUFwQyxFQUF1Q25DLE1BQU0sQ0FBQ29DLENBQTlDLEVBQWlEbEMsTUFBTSxDQUFDaUMsQ0FBeEQsRUFBMkRqQyxNQUFNLENBQUNrQyxDQUFsRSxDQUFoQjtBQUNBZixxQkFBaUIsQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQWtCQyxNQUFsQixFQUEwQkMsTUFBMUIsRUFBa0NDLGNBQWxDLENBQWpCO0FBQ0EsV0FBT0osT0FBUDtBQUNIOztBQUNEbkIsZ0JBQWMsQ0FBQ3dDLHFCQUFmLEdBQXVDQSxxQkFBdkM7O0FBQ0EsV0FBU0UsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEJDLE1BQTlCLEVBQXNDYixPQUF0QyxFQUErQztBQUMzQyxRQUFNWixPQUFPLEdBQUdZLE9BQU8sQ0FBQ2MsYUFBUixDQUFzQkYsS0FBdEIsRUFBNkJDLE1BQU0sR0FBRyxRQUFILEdBQWMsTUFBakQsQ0FBaEI7O0FBQ0EsUUFBSXpCLE9BQUosRUFBYTtBQUNULGFBQU9BLE9BQVA7QUFDSDs7QUFDRCxXQUFPLEVBQVA7QUFDSDs7QUFDRG5CLGdCQUFjLENBQUMwQyxhQUFmLEdBQStCQSxhQUEvQjtBQUNILENBNURELEVBNERHMUMsY0FBYyxLQUFLQSxjQUFjLEdBQUcsRUFBdEIsQ0E1RGpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ08sSUFBTUwsY0FBYjtBQUFBOztBQUFBOztBQUNJLDRCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsK0JBQVNtRCxTQUFUO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsQ0FBQyxNQUFLSCxJQUFMLENBQVVJLFVBQVYsQ0FBcUIsSUFBckIsQ0FBRCxDQUFoQjtBQUNBLFVBQUtDLGNBQUwsR0FBc0IsRUFBdEI7QUFKVTtBQUtiOztBQU5MO0FBQUE7QUFBQSxXQU9JLHNCQUFhO0FBQ1QsYUFBTyxLQUFLRixRQUFMLENBQWMsS0FBS0EsUUFBTCxDQUFjekIsTUFBZCxHQUF1QixDQUFyQyxDQUFQO0FBQ0g7QUFUTDtBQUFBO0FBQUEsV0FVSSxxQkFBWU0sT0FBWixFQUFxQjtBQUNqQixXQUFLbUIsUUFBTCxDQUFjRyxJQUFkLENBQW1CdEIsT0FBbkI7QUFDSDtBQVpMO0FBQUE7QUFBQSxXQWFJLDBCQUFpQjtBQUNiLFVBQUksS0FBS21CLFFBQUwsQ0FBY3pCLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUIsYUFBS3lCLFFBQUwsQ0FBY0ksR0FBZDtBQUNILE9BRkQsTUFHSztBQUNELGFBQUtDLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkMsT0FBbEIsQ0FBMEIsZ0NBQTFCO0FBQ0g7QUFDSjtBQXBCTDtBQUFBO0FBQUEsV0FxQkksK0JBQXNCO0FBQ2xCLFVBQUkxQixPQUFKOztBQUNBLFVBQUksS0FBS3FCLGNBQUwsQ0FBb0IzQixNQUF4QixFQUFnQztBQUM1Qk0sZUFBTyxHQUFHLEtBQUtxQixjQUFMLENBQW9CRSxHQUFwQixFQUFWO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsWUFBTUksTUFBTSxHQUFHVixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBbEIsZUFBTyxHQUFHMkIsTUFBTSxDQUFDUCxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFDSDs7QUFSaUIsdUJBU1EsS0FBS0osSUFUYjtBQUFBLFVBU1ZZLEtBVFUsY0FTVkEsS0FUVTtBQUFBLFVBU0hDLE1BVEcsY0FTSEEsTUFURzs7QUFVbEIsVUFBSTdCLE9BQU8sQ0FBQzJCLE1BQVIsQ0FBZUMsS0FBZixLQUF5QkEsS0FBN0IsRUFBb0M7QUFDaEM1QixlQUFPLENBQUMyQixNQUFSLENBQWVDLEtBQWYsR0FBdUJBLEtBQXZCO0FBQ0g7O0FBQ0QsVUFBSTVCLE9BQU8sQ0FBQzJCLE1BQVIsQ0FBZUUsTUFBZixLQUEwQkEsTUFBOUIsRUFBc0M7QUFDbEM3QixlQUFPLENBQUMyQixNQUFSLENBQWVFLE1BQWYsR0FBd0JBLE1BQXhCO0FBQ0g7O0FBQ0QsYUFBTzdCLE9BQVA7QUFDSDtBQXRDTDtBQUFBO0FBQUEsV0F1Q0ksOEJBQXFCQSxPQUFyQixFQUE4QjtBQUMxQixXQUFLcUIsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUJ0QixPQUF6QjtBQUNIO0FBekNMO0FBQUE7QUFBQSxXQTBDSSxpQkFBUTtBQUNKLFdBQUs4QixLQUFMO0FBQ0EsV0FBS0MsVUFBTDtBQUNIO0FBN0NMO0FBQUE7QUFBQSxXQThDSSxpQkFBUTtBQUFBLFVBQ0lmLElBREosR0FDYSxJQURiLENBQ0lBLElBREo7QUFFSixVQUFNaEIsT0FBTyxHQUFHLEtBQUtvQixVQUFMLEVBQWhCO0FBQ0FwQixhQUFPLENBQUNnQyxZQUFSO0FBQ0FoQyxhQUFPLENBQUNpQyxTQUFSLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCakIsSUFBSSxDQUFDWSxLQUE3QixFQUFvQ1osSUFBSSxDQUFDYSxNQUF6QztBQUNIO0FBbkRMO0FBQUE7QUFBQSxXQW9ESSxzQkFBYTtBQUNULFVBQU1ELEtBQUssR0FBRyxLQUFLSixNQUFMLENBQVlVLE1BQVosQ0FBbUJDLFFBQW5CLEVBQWQ7QUFDQSxVQUFNTixNQUFNLEdBQUcsS0FBS0wsTUFBTCxDQUFZVSxNQUFaLENBQW1CRSxTQUFuQixFQUFmO0FBQ0EsVUFBTUMsVUFBVSxHQUFHLEtBQUtiLE1BQUwsQ0FBWVUsTUFBWixDQUFtQkksYUFBbkIsRUFBbkI7QUFDQSxVQUFNQyxTQUFTLEdBQUdoQyxJQUFJLENBQUNpQyxLQUFMLENBQVdaLEtBQUssR0FBR1MsVUFBbkIsQ0FBbEI7QUFDQSxVQUFNSSxVQUFVLEdBQUdsQyxJQUFJLENBQUNpQyxLQUFMLENBQVdYLE1BQU0sR0FBR1EsVUFBcEIsQ0FBbkI7QUFMUyxVQU1EckIsSUFOQyxHQU1RLElBTlIsQ0FNREEsSUFOQzs7QUFPVCxVQUFJQSxJQUFJLENBQUNZLEtBQUwsS0FBZVcsU0FBZixJQUE0QnZCLElBQUksQ0FBQ2EsTUFBTCxLQUFnQlksVUFBaEQsRUFBNEQ7QUFDeER6QixZQUFJLENBQUNZLEtBQUwsR0FBYVcsU0FBYjtBQUNBdkIsWUFBSSxDQUFDYSxNQUFMLEdBQWNZLFVBQWQ7QUFDQXpCLFlBQUksQ0FBQzBCLEtBQUwsQ0FBV2QsS0FBWCxhQUFzQkEsS0FBdEI7QUFDQVosWUFBSSxDQUFDMEIsS0FBTCxDQUFXYixNQUFYLGFBQXVCQSxNQUF2QjtBQUNIO0FBQ0o7QUFqRUw7O0FBQUE7QUFBQSxFQUFvQ2xFLCtDQUFwQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNETyxJQUFNZ0YsU0FBUyxHQUFHLFdBQWxCO0FBQ0EsSUFBSUMsU0FBSjs7QUFDUCxDQUFDLFVBQVVBLFNBQVYsRUFBcUI7QUFDbEIsV0FBU0MsV0FBVCxDQUFxQkMsU0FBckIsRUFBZ0M7QUFBQSxRQUNwQkMsUUFEb0IsR0FDUEQsU0FETyxDQUNwQkMsUUFEb0I7O0FBRTVCLFFBQUlBLFFBQUosRUFBYztBQUNWLFVBQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixRQUFkLENBQUosRUFBNkI7QUFDekIsZUFBT0EsUUFBUSxDQUFDckQsTUFBaEI7QUFDSDs7QUFDRCxVQUFJcUQsUUFBUSxDQUFDRyxJQUFiLEVBQW1CO0FBQ2YsZUFBTyxDQUFQO0FBQ0g7O0FBQ0QsVUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWUosUUFBWixDQUFiO0FBQ0EsYUFBT0ksSUFBSSxDQUFDekQsTUFBWjtBQUNIOztBQUNELFdBQU8sQ0FBUDtBQUNIOztBQUNEa0QsV0FBUyxDQUFDQyxXQUFWLEdBQXdCQSxXQUF4QjtBQUNILENBaEJELEVBZ0JHRCxTQUFTLEtBQUtBLFNBQVMsR0FBRyxFQUFqQixDQWhCWjs7QUFpQk8sSUFBSVMsa0JBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxrQkFBVixFQUE4QjtBQUMzQixXQUFTQyxNQUFULENBQWdCUixTQUFoQixFQUEyQnRCLE1BQTNCLEVBQW1DO0FBQUEsUUFDdkJ1QixRQUR1QixHQUNWRCxTQURVLENBQ3ZCQyxRQUR1QjtBQUFBLFFBRXZCUSxRQUZ1QixHQUVWL0IsTUFGVSxDQUV2QitCLFFBRnVCOztBQUcvQixRQUFJUixRQUFKLEVBQWM7QUFDVixVQUFNL0MsT0FBTyxHQUFHdUQsUUFBUSxDQUFDbkMsVUFBVCxFQUFoQjtBQUNBbUMsY0FBUSxDQUFDQyxLQUFUOztBQUNBLFVBQUlSLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixRQUFkLENBQUosRUFBNkI7QUFDekIsYUFBSyxJQUFJdEQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3NELFFBQVEsQ0FBQ3JELE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDLGNBQU1nRSxTQUFTLEdBQUdWLFFBQVEsQ0FBQ3RELENBQUQsQ0FBMUI7QUFDQThELGtCQUFRLENBQUNHLGVBQVQsQ0FBeUJELFNBQXpCLEVBQW9DekQsT0FBcEM7QUFDSDtBQUNKLE9BTEQsTUFNSyxJQUFJK0MsUUFBUSxDQUFDRyxJQUFiLEVBQW1CO0FBQ3BCLFlBQU1PLFVBQVMsR0FBR1YsUUFBbEI7QUFDQVEsZ0JBQVEsQ0FBQ0csZUFBVCxDQUF5QkQsVUFBekIsRUFBb0N6RCxPQUFwQztBQUNILE9BSEksTUFJQTtBQUNELFlBQU0yRCxhQUFhLEdBQUdaLFFBQXRCO0FBQ0EsWUFBTUksSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWVEsYUFBWixDQUFiOztBQUNBLGFBQUssSUFBSWxFLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUcwRCxJQUFJLENBQUN6RCxNQUF6QixFQUFpQ0QsRUFBQyxFQUFsQyxFQUFzQztBQUNsQyxjQUFNZ0UsV0FBUyxHQUFHRSxhQUFhLENBQUNSLElBQUksQ0FBQzFELEVBQUQsQ0FBTCxDQUEvQjtBQUNBOEQsa0JBQVEsQ0FBQ0csZUFBVCxDQUF5QkQsV0FBekIsRUFBb0N6RCxPQUFwQztBQUNIO0FBQ0o7O0FBQ0R1RCxjQUFRLENBQUNDLEtBQVQ7QUFDSDtBQUNKOztBQUNESCxvQkFBa0IsQ0FBQ0MsTUFBbkIsR0FBNEJBLE1BQTVCOztBQUNBLFdBQVNNLE1BQVQsQ0FBZ0JkLFNBQWhCLEVBQTJCdEIsTUFBM0IsRUFBbUM7QUFBQSxRQUN2QnVCLFFBRHVCLEdBQ1ZELFNBRFUsQ0FDdkJDLFFBRHVCO0FBQUEsUUFFdkJjLE9BRnVCLEdBRVhyQyxNQUZXLENBRXZCcUMsT0FGdUI7O0FBRy9CLFFBQUlkLFFBQUosRUFBYztBQUNWYyxhQUFPLENBQUNMLEtBQVI7O0FBQ0EsVUFBSVIsS0FBSyxDQUFDQyxPQUFOLENBQWNGLFFBQWQsQ0FBSixFQUE2QjtBQUN6QixhQUFLLElBQUl0RCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHc0QsUUFBUSxDQUFDckQsTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7QUFDdEMsY0FBTWdFLFNBQVMsR0FBR1YsUUFBUSxDQUFDdEQsQ0FBRCxDQUExQjtBQUNBb0UsaUJBQU8sQ0FBQ0MsZUFBUixDQUF3QkwsU0FBeEI7QUFDSDtBQUNKLE9BTEQsTUFNSyxJQUFJVixRQUFRLENBQUNHLElBQWIsRUFBbUI7QUFDcEIsWUFBTU8sV0FBUyxHQUFHVixRQUFsQjtBQUNBYyxlQUFPLENBQUNDLGVBQVIsQ0FBd0JMLFdBQXhCO0FBQ0gsT0FISSxNQUlBO0FBQ0QsWUFBTUUsYUFBYSxHQUFHWixRQUF0QjtBQUNBLFlBQU1JLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlRLGFBQVosQ0FBYjs7QUFDQSxhQUFLLElBQUlsRSxHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHMEQsSUFBSSxDQUFDekQsTUFBekIsRUFBaUNELEdBQUMsRUFBbEMsRUFBc0M7QUFDbEMsY0FBTWdFLFdBQVMsR0FBR0UsYUFBYSxDQUFDUixJQUFJLENBQUMxRCxHQUFELENBQUwsQ0FBL0I7QUFDQW9FLGlCQUFPLENBQUNDLGVBQVIsQ0FBd0JMLFdBQXhCO0FBQ0g7QUFDSjs7QUFDREksYUFBTyxDQUFDTCxLQUFSO0FBQ0g7QUFDSjs7QUFDREgsb0JBQWtCLENBQUNPLE1BQW5CLEdBQTRCQSxNQUE1Qjs7QUFDQSxXQUFTRyxPQUFULENBQWlCakIsU0FBakIsRUFBNEJ0QixNQUE1QixFQUFvQztBQUFBLFFBQ3hCdUIsUUFEd0IsR0FDWEQsU0FEVyxDQUN4QkMsUUFEd0I7QUFBQSxRQUVkaUIsYUFGYyxHQUVJeEMsTUFGSixDQUV4QnlDLFFBRndCOztBQUdoQyxRQUFJbEIsUUFBSixFQUFjO0FBQ1YsVUFBTS9DLE9BQU8sR0FBR2dFLGFBQWEsQ0FBQzVDLFVBQWQsRUFBaEI7QUFDQTRDLG1CQUFhLENBQUNSLEtBQWQ7O0FBQ0EsVUFBSVIsS0FBSyxDQUFDQyxPQUFOLENBQWNGLFFBQWQsQ0FBSixFQUE2QjtBQUN6QixhQUFLLElBQUl0RCxDQUFDLEdBQUdzRCxRQUFRLENBQUNyRCxNQUFULEdBQWtCLENBQS9CLEVBQWtDRCxDQUFDLElBQUksQ0FBdkMsRUFBMENBLENBQUMsRUFBM0MsRUFBK0M7QUFDM0MsY0FBTWdFLFNBQVMsR0FBR1YsUUFBUSxDQUFDdEQsQ0FBRCxDQUExQjtBQUNBLGNBQU15RSxNQUFNLEdBQUdGLGFBQWEsQ0FBQ0csaUJBQWQsQ0FBZ0NWLFNBQWhDLEVBQTJDekQsT0FBM0MsQ0FBZjs7QUFDQSxjQUFJa0UsTUFBSixFQUFZO0FBQ1IsbUJBQU8sSUFBUDtBQUNIO0FBQ0o7QUFDSixPQVJELE1BU0ssSUFBSW5CLFFBQVEsQ0FBQ0csSUFBYixFQUFtQjtBQUNwQixZQUFNTyxXQUFTLEdBQUdWLFFBQWxCOztBQUNBLFlBQU1tQixPQUFNLEdBQUdGLGFBQWEsQ0FBQ0csaUJBQWQsQ0FBZ0NWLFdBQWhDLEVBQTJDekQsT0FBM0MsQ0FBZjs7QUFDQSxZQUFJa0UsT0FBSixFQUFZO0FBQ1IsaUJBQU8sSUFBUDtBQUNIO0FBQ0osT0FOSSxNQU9BO0FBQ0QsWUFBTVAsYUFBYSxHQUFHWixRQUF0QjtBQUNBLFlBQU1JLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlRLGFBQVosQ0FBYjs7QUFDQSxhQUFLLElBQUlsRSxHQUFDLEdBQUcwRCxJQUFJLENBQUN6RCxNQUFMLEdBQWMsQ0FBM0IsRUFBOEJELEdBQUMsSUFBSSxDQUFuQyxFQUFzQ0EsR0FBQyxFQUF2QyxFQUEyQztBQUN2QyxjQUFNZ0UsV0FBUyxHQUFHRSxhQUFhLENBQUNSLElBQUksQ0FBQzFELEdBQUQsQ0FBTCxDQUEvQjs7QUFDQSxjQUFNeUUsUUFBTSxHQUFHRixhQUFhLENBQUNHLGlCQUFkLENBQWdDVixXQUFoQyxFQUEyQ3pELE9BQTNDLENBQWY7O0FBQ0EsY0FBSWtFLFFBQUosRUFBWTtBQUNSLG1CQUFPLElBQVA7QUFDSDtBQUNKO0FBQ0o7O0FBQ0RGLG1CQUFhLENBQUNSLEtBQWQ7QUFDSDs7QUFDRCxXQUFPLEtBQVA7QUFDSDs7QUFDREgsb0JBQWtCLENBQUNVLE9BQW5CLEdBQTZCQSxPQUE3Qjs7QUFDQSxXQUFTSyxNQUFULENBQWdCdEIsU0FBaEIsRUFBMkJ0QixNQUEzQixFQUFtQztBQUFBLFFBQ3ZCdUIsUUFEdUIsR0FDVkQsU0FEVSxDQUN2QkMsUUFEdUI7QUFBQSxRQUV2QnNCLE9BRnVCLEdBRVg3QyxNQUZXLENBRXZCNkMsT0FGdUI7O0FBRy9CLFFBQUl0QixRQUFKLEVBQWM7QUFDVixVQUFNL0MsT0FBTyxHQUFHcUUsT0FBTyxDQUFDakQsVUFBUixFQUFoQjtBQUNBaUQsYUFBTyxDQUFDYixLQUFSOztBQUNBLFVBQUlSLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixRQUFkLENBQUosRUFBNkI7QUFDekIsWUFBSUEsUUFBUSxDQUFDckQsTUFBYixFQUFxQjtBQUNqQk0saUJBQU8sQ0FBQ3NFLFFBQVIsR0FBbUIsQ0FBbkI7QUFDQXRFLGlCQUFPLENBQUNvRSxNQUFSLEdBQWlCLElBQWpCOztBQUNBLGVBQUssSUFBSTNFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdzRCxRQUFRLENBQUNyRCxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztBQUN0QyxnQkFBTWdFLFNBQVMsR0FBR1YsUUFBUSxDQUFDdEQsQ0FBRCxDQUExQjtBQUNBNEUsbUJBQU8sQ0FBQ1AsZUFBUixDQUF3QkwsU0FBeEI7QUFDQSxnQkFBTWMsZ0JBQWdCLEdBQUdGLE9BQU8sQ0FBQ2pELFVBQVIsRUFBekI7QUFDQXBCLG1CQUFPLENBQUNzRSxRQUFSLElBQW9CQyxnQkFBZ0IsQ0FBQ0QsUUFBckM7O0FBQ0EsZ0JBQUksQ0FBQ0MsZ0JBQWdCLENBQUNILE1BQXRCLEVBQThCO0FBQzFCcEUscUJBQU8sQ0FBQ29FLE1BQVIsR0FBaUIsS0FBakI7QUFDSDtBQUNKOztBQUNEcEUsaUJBQU8sQ0FBQ3NFLFFBQVIsSUFBb0J2QixRQUFRLENBQUNyRCxNQUE3QjtBQUNILFNBYkQsTUFjSztBQUNETSxpQkFBTyxDQUFDc0UsUUFBUixHQUFtQixDQUFuQjtBQUNIO0FBQ0osT0FsQkQsTUFtQkssSUFBSXZCLFFBQVEsQ0FBQ0csSUFBYixFQUFtQjtBQUNwQixZQUFNTyxXQUFTLEdBQUdWLFFBQWxCO0FBQ0FzQixlQUFPLENBQUNQLGVBQVIsQ0FBd0JMLFdBQXhCOztBQUNBLFlBQU1jLGlCQUFnQixHQUFHRixPQUFPLENBQUNqRCxVQUFSLEVBQXpCOztBQUNBcEIsZUFBTyxDQUFDc0UsUUFBUixHQUFtQkMsaUJBQWdCLENBQUNELFFBQXBDO0FBQ0F0RSxlQUFPLENBQUNvRSxNQUFSLEdBQWlCRyxpQkFBZ0IsQ0FBQ0gsTUFBbEM7QUFDSCxPQU5JLE1BT0E7QUFDRCxZQUFNVCxhQUFhLEdBQUdaLFFBQXRCO0FBQ0EsWUFBTUksSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWVEsYUFBWixDQUFiOztBQUNBLFlBQUlSLElBQUksQ0FBQ3pELE1BQVQsRUFBaUI7QUFDYk0saUJBQU8sQ0FBQ3NFLFFBQVIsR0FBbUIsQ0FBbkI7QUFDQXRFLGlCQUFPLENBQUNvRSxNQUFSLEdBQWlCLElBQWpCOztBQUNBLGVBQUssSUFBSTNFLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUcwRCxJQUFJLENBQUN6RCxNQUF6QixFQUFpQ0QsR0FBQyxFQUFsQyxFQUFzQztBQUNsQyxnQkFBTWdFLFdBQVMsR0FBR0UsYUFBYSxDQUFDUixJQUFJLENBQUMxRCxHQUFELENBQUwsQ0FBL0I7QUFDQTRFLG1CQUFPLENBQUNQLGVBQVIsQ0FBd0JMLFdBQXhCOztBQUNBLGdCQUFNYyxrQkFBZ0IsR0FBR0YsT0FBTyxDQUFDakQsVUFBUixFQUF6Qjs7QUFDQXBCLG1CQUFPLENBQUNzRSxRQUFSLElBQW9CQyxrQkFBZ0IsQ0FBQ0QsUUFBckM7O0FBQ0EsZ0JBQUksQ0FBQ0Msa0JBQWdCLENBQUNILE1BQXRCLEVBQThCO0FBQzFCcEUscUJBQU8sQ0FBQ29FLE1BQVIsR0FBaUIsS0FBakI7QUFDSDtBQUNKOztBQUNEcEUsaUJBQU8sQ0FBQ3NFLFFBQVIsSUFBb0JuQixJQUFJLENBQUN6RCxNQUF6QjtBQUNILFNBYkQsTUFjSztBQUNETSxpQkFBTyxDQUFDc0UsUUFBUixHQUFtQixDQUFuQjtBQUNBdEUsaUJBQU8sQ0FBQ29FLE1BQVIsR0FBaUIsSUFBakI7QUFDSDtBQUNKOztBQUNEQyxhQUFPLENBQUNiLEtBQVI7QUFDSDtBQUNKOztBQUNESCxvQkFBa0IsQ0FBQ2UsTUFBbkIsR0FBNEJBLE1BQTVCOztBQUNBLFdBQVNJLElBQVQsQ0FBY2hELE1BQWQsRUFBc0I7QUFDbEJBLFVBQU0sQ0FBQ2lELFVBQVAsQ0FBa0JiLE1BQWxCLENBQXlCYyxHQUF6QixDQUE2Qi9CLFNBQTdCLEVBQXdDaUIsTUFBeEM7QUFDQXBDLFVBQU0sQ0FBQ2lELFVBQVAsQ0FBa0JuQixNQUFsQixDQUF5Qm9CLEdBQXpCLENBQTZCL0IsU0FBN0IsRUFBd0NXLE1BQXhDO0FBQ0E5QixVQUFNLENBQUNpRCxVQUFQLENBQWtCVixPQUFsQixDQUEwQlcsR0FBMUIsQ0FBOEIvQixTQUE5QixFQUF5Q29CLE9BQXpDO0FBQ0F2QyxVQUFNLENBQUNpRCxVQUFQLENBQWtCTCxNQUFsQixDQUF5Qk0sR0FBekIsQ0FBNkIvQixTQUE3QixFQUF3Q3lCLE1BQXhDO0FBQ0g7O0FBQ0RmLG9CQUFrQixDQUFDbUIsSUFBbkIsR0FBMEJBLElBQTFCO0FBQ0gsQ0EvSkQsRUErSkduQixrQkFBa0IsS0FBS0Esa0JBQWtCLEdBQUcsRUFBMUIsQ0EvSnJCLEU7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNPLElBQU1zQixNQUFNLEdBQUcsUUFBZjtBQUNBLElBQUlDLE1BQUo7O0FBQ1AsQ0FBQyxVQUFVQSxNQUFWLEVBQWtCO0FBQ2YsV0FBU0Msa0JBQVQsQ0FBNEJDLE1BQTVCLEVBQW9DO0FBQUE7O0FBQ2hDLG9DQUFPQSxNQUFNLENBQUNDLGVBQWQseUVBQWlDLENBQWpDO0FBQ0g7O0FBQ0RILFFBQU0sQ0FBQ0Msa0JBQVAsR0FBNEJBLGtCQUE1Qjs7QUFDQSxXQUFTRyxRQUFULENBQWtCRixNQUFsQixFQUEwQjtBQUFBOztBQUN0Qiw2QkFBT0EsTUFBTSxDQUFDVixNQUFkLDJEQUF3QixLQUF4QjtBQUNIOztBQUNEUSxRQUFNLENBQUNJLFFBQVAsR0FBa0JBLFFBQWxCOztBQUNBLFdBQVNDLGdCQUFULENBQTBCSCxNQUExQixFQUFrQztBQUFBOztBQUM5QixtQ0FBT0EsTUFBTSxDQUFDSSxZQUFkLHVFQUE4QixJQUE5QjtBQUNIOztBQUNETixRQUFNLENBQUNLLGdCQUFQLEdBQTBCQSxnQkFBMUI7QUFDSCxDQWJELEVBYUdMLE1BQU0sS0FBS0EsTUFBTSxHQUFHLEVBQWQsQ0FiVDs7QUFjTyxJQUFJTyxlQUFKOztBQUNQLENBQUMsVUFBVUEsZUFBVixFQUEyQjtBQUN4QixXQUFTZixNQUFULENBQWdCVSxNQUFoQixFQUF3QnRELE1BQXhCLEVBQWdDO0FBQzVCLFFBQUksQ0FBQ29ELE1BQU0sQ0FBQ0ssZ0JBQVAsQ0FBd0JILE1BQXhCLENBQUwsRUFBc0M7QUFDbEM7QUFDSDs7QUFDRHpCLHFFQUFBLENBQTBCeUIsTUFBMUIsRUFBa0N0RCxNQUFsQztBQUNBLFFBQU14QixPQUFPLEdBQUd3QixNQUFNLENBQUM2QyxPQUFQLENBQWVqRCxVQUFmLEVBQWhCO0FBQ0EwRCxVQUFNLENBQUNDLGVBQVAsR0FBeUIvRSxPQUFPLENBQUNzRSxRQUFqQzs7QUFDQSxRQUFJdEUsT0FBTyxDQUFDb0UsTUFBUixJQUFrQixDQUFDVSxNQUFNLENBQUNWLE1BQTlCLEVBQXNDO0FBQ2xDVSxZQUFNLENBQUNWLE1BQVAsR0FBZ0IsSUFBaEI7O0FBQ0EsVUFBSVUsTUFBTSxDQUFDTSxRQUFYLEVBQXFCO0FBQ2pCTixjQUFNLENBQUNNLFFBQVA7QUFDSDtBQUNKO0FBQ0o7O0FBQ0RELGlCQUFlLENBQUNmLE1BQWhCLEdBQXlCQSxNQUF6Qjs7QUFDQSxXQUFTSSxJQUFULENBQWNoRCxNQUFkLEVBQXNCO0FBQ2xCQSxVQUFNLENBQUNpRCxVQUFQLENBQWtCYixNQUFsQixDQUF5QmMsR0FBekIsQ0FBNkJDLE1BQTdCLEVBQXFDdEIsaUVBQXJDO0FBQ0E3QixVQUFNLENBQUNpRCxVQUFQLENBQWtCbkIsTUFBbEIsQ0FBeUJvQixHQUF6QixDQUE2QkMsTUFBN0IsRUFBcUN0QixpRUFBckM7QUFDQTdCLFVBQU0sQ0FBQ2lELFVBQVAsQ0FBa0JWLE9BQWxCLENBQTBCVyxHQUExQixDQUE4QkMsTUFBOUIsRUFBc0N0QixrRUFBdEM7QUFDQTdCLFVBQU0sQ0FBQ2lELFVBQVAsQ0FBa0JMLE1BQWxCLENBQXlCTSxHQUF6QixDQUE2QkMsTUFBN0IsRUFBcUNQLE1BQXJDO0FBQ0g7O0FBQ0RlLGlCQUFlLENBQUNYLElBQWhCLEdBQXVCQSxJQUF2QjtBQUNILENBdkJELEVBdUJHVyxlQUFlLEtBQUtBLGVBQWUsR0FBRyxFQUF2QixDQXZCbEIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU10SCxNQUFiLEdBQ0ksa0JBQXlCO0FBQUE7O0FBQUEsTUFBYkgsTUFBYSx1RUFBSixFQUFJOztBQUFBOztBQUNyQixPQUFLOEYsS0FBTCxHQUFhLEVBQWI7QUFDQTlGLFFBQU0sQ0FBQzJILFVBQVAseUJBQW9CM0gsTUFBTSxDQUFDMkgsVUFBM0IsbUVBQXlDQSw2REFBekM7QUFDQTNILFFBQU0sQ0FBQzRILE1BQVAscUJBQWdCNUgsTUFBTSxDQUFDNEgsTUFBdkIsMkRBQWlDQSxvREFBakM7QUFDQTVILFFBQU0sQ0FBQ0MsUUFBUCx1QkFBa0JELE1BQU0sQ0FBQ0MsUUFBekIsK0RBQXFDQSx3REFBckM7QUFDQUQsUUFBTSxDQUFDNkgsT0FBUCxzQkFBaUI3SCxNQUFNLENBQUM2SCxPQUF4Qiw2REFBbUNBLHNEQUFuQztBQUNBN0gsUUFBTSxDQUFDOEgsT0FBUCxzQkFBaUI5SCxNQUFNLENBQUM4SCxPQUF4Qiw2REFBbUNBLHNEQUFuQztBQUNBOUgsUUFBTSxDQUFDK0gsUUFBUCx1QkFBa0IvSCxNQUFNLENBQUMrSCxRQUF6QiwrREFBcUNBLHdEQUFyQztBQUNBL0gsUUFBTSxDQUFDZ0ksUUFBUCx1QkFBa0JoSSxNQUFNLENBQUNnSSxRQUF6QiwrREFBcUNBLHdEQUFyQztBQUNBaEksUUFBTSxDQUFDaUksTUFBUCxxQkFBZ0JqSSxNQUFNLENBQUNpSSxNQUF2QiwyREFBaUNBLG9EQUFqQztBQUNBakksUUFBTSxDQUFDa0ksS0FBUCxvQkFBZWxJLE1BQU0sQ0FBQ2tJLEtBQXRCLHlEQUErQkEsa0RBQS9CO0FBQ0FsSSxRQUFNLENBQUNtSSxTQUFQLHdCQUFtQm5JLE1BQU0sQ0FBQ21JLFNBQTFCLGlFQUF1Q0EsMERBQXZDO0FBQ0EsT0FBS3BCLFVBQUwsR0FBa0IsSUFBSS9HLE1BQU0sQ0FBQzJILFVBQVgsRUFBbEI7QUFDQSxPQUFLbkQsTUFBTCxHQUFjLElBQUl4RSxNQUFNLENBQUM0SCxNQUFYLEVBQWQ7QUFDQSxPQUFLUSxRQUFMLEdBQWdCLElBQUlwSSxNQUFNLENBQUNDLFFBQVgsQ0FBb0IsSUFBcEIsQ0FBaEI7QUFDQSxPQUFLa0csT0FBTCxHQUFlLElBQUluRyxNQUFNLENBQUM2SCxPQUFYLENBQW1CLElBQW5CLENBQWY7QUFDQSxPQUFLbEIsT0FBTCxHQUFlLElBQUkzRyxNQUFNLENBQUM4SCxPQUFYLENBQW1CLElBQW5CLENBQWY7QUFDQSxPQUFLakMsUUFBTCxHQUFnQixJQUFJN0YsTUFBTSxDQUFDK0gsUUFBWCxDQUFvQixJQUFwQixDQUFoQjtBQUNBLE9BQUt4QixRQUFMLEdBQWdCLElBQUl2RyxNQUFNLENBQUNnSSxRQUFYLENBQW9CLElBQXBCLENBQWhCO0FBQ0EsT0FBS0ssTUFBTCxHQUFjLElBQUlySSxNQUFNLENBQUNpSSxNQUFYLENBQWtCLElBQWxCLENBQWQ7QUFDQSxPQUFLbEUsS0FBTCxHQUFhLElBQUkvRCxNQUFNLENBQUNrSSxLQUFYLEVBQWI7QUFDQSxPQUFLSSxTQUFMLEdBQWlCLElBQUl0SSxNQUFNLENBQUNtSSxTQUFYLENBQXFCLElBQXJCLENBQWpCO0FBQ0F4Qyw0RUFBQSxDQUF3QixJQUF4QjtBQUNBOEIsdUVBQUEsQ0FBcUIsSUFBckI7QUFDSCxDQXpCTCxDOzs7Ozs7Ozs7Ozs7Ozs7QUNaTyxJQUFNYyxhQUFiLEdBQ0ksdUJBQVl6RSxNQUFaLEVBQW9CO0FBQUE7O0FBQ2hCLE9BQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNILENBSEwsQzs7Ozs7Ozs7Ozs7OztBQ0FPLElBQUkwRSxPQUFKOztBQUNQLENBQUMsVUFBVUEsT0FBVixFQUFtQjtBQUNoQixXQUFTQyxTQUFULENBQW1CMUMsU0FBbkIsRUFBOEI7QUFBQTs7QUFDMUIsaUNBQU9BLFNBQVMsQ0FBQzJDLE9BQWpCLG1FQUE0QixJQUE1QjtBQUNIOztBQUNERixTQUFPLENBQUNDLFNBQVIsR0FBb0JBLFNBQXBCO0FBQ0gsQ0FMRCxFQUtHRCxPQUFPLEtBQUtBLE9BQU8sR0FBRyxFQUFmLENBTFYsRTs7Ozs7Ozs7Ozs7OztBQ0RPLElBQUlHLEtBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxLQUFWLEVBQWlCO0FBQ2QsV0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQXFCM0UsS0FBckIsRUFBNEI7QUFBQSxRQUNoQjRFLE1BRGdCLEdBQ0xELEtBREssQ0FDaEJDLE1BRGdCOztBQUV4QixRQUFJQSxNQUFKLEVBQVk7QUFDUixhQUFPLENBQUNBLE1BQUQsR0FBVTVFLEtBQWpCO0FBQ0g7O0FBQ0QsV0FBTyxDQUFQO0FBQ0g7O0FBQ0R5RSxPQUFLLENBQUNDLElBQU4sR0FBYUEsSUFBYjs7QUFDQSxXQUFTRyxJQUFULENBQWNGLEtBQWQsRUFBcUIxRSxNQUFyQixFQUE2QjtBQUFBLFFBQ2pCNkUsTUFEaUIsR0FDTkgsS0FETSxDQUNqQkcsTUFEaUI7O0FBRXpCLFFBQUlBLE1BQUosRUFBWTtBQUNSLGFBQU8sQ0FBQ0EsTUFBRCxHQUFVN0UsTUFBakI7QUFDSDs7QUFDRCxXQUFPLENBQVA7QUFDSDs7QUFDRHdFLE9BQUssQ0FBQ0ksSUFBTixHQUFhQSxJQUFiOztBQUNBLFdBQVNFLFNBQVQsQ0FBbUJKLEtBQW5CLEVBQTBCO0FBQUEsUUFDZEMsTUFEYyxHQUNLRCxLQURMLENBQ2RDLE1BRGM7QUFBQSxRQUNORSxNQURNLEdBQ0tILEtBREwsQ0FDTkcsTUFETTtBQUV0QixXQUFPLENBQUMsQ0FBQ0YsTUFBRixJQUFZLENBQUMsQ0FBQ0UsTUFBckI7QUFDSDs7QUFDREwsT0FBSyxDQUFDTSxTQUFOLEdBQWtCQSxTQUFsQjtBQUNILENBdEJELEVBc0JHTixLQUFLLEtBQUtBLEtBQUssR0FBRyxFQUFiLENBdEJSLEU7Ozs7Ozs7Ozs7Ozs7QUNEQSxJQUFNTyxXQUFXLEdBQUc7QUFDaEJDLGFBQVcsRUFBRSxlQURHO0FBRWhCQyxXQUFTLEVBQUUsYUFGSztBQUdoQkMsYUFBVyxFQUFFLGVBSEc7QUFJaEJDLGFBQVcsRUFBRSxlQUpHO0FBS2hCQyxZQUFVLEVBQUU7QUFMSSxDQUFwQjtBQU9PLElBQUlDLE9BQUo7O0FBQ1AsQ0FBQyxVQUFVQSxPQUFWLEVBQW1CO0FBQ2hCLFdBQVNDLGFBQVQsQ0FBdUJDLE9BQXZCLEVBQWdDO0FBQzVCLFdBQU8sQ0FBQyxDQUFDQSxPQUFPLENBQUNKLFdBQWpCO0FBQ0g7O0FBQ0RFLFNBQU8sQ0FBQ0MsYUFBUixHQUF3QkEsYUFBeEI7O0FBQ0EsV0FBU0UsZ0JBQVQsQ0FBMEJELE9BQTFCLEVBQW1DO0FBQUE7O0FBQy9CLG9DQUFPQSxPQUFPLENBQUNFLGNBQWYseUVBQWlDLElBQWpDO0FBQ0g7O0FBQ0RKLFNBQU8sQ0FBQ0csZ0JBQVIsR0FBMkJBLGdCQUEzQjs7QUFDQSxXQUFTRSxhQUFULENBQXVCSCxPQUF2QixFQUFnQ2xFLElBQWhDLEVBQXNDakQsQ0FBdEMsRUFBeUNDLENBQXpDLEVBQTRDc0gsRUFBNUMsRUFBZ0Q7QUFDNUMsUUFBTUMsV0FBVyxHQUFHYixXQUFXLENBQUMxRCxJQUFELENBQS9COztBQUNBLFFBQUl1RSxXQUFXLElBQUlMLE9BQU8sQ0FBQ0ssV0FBRCxDQUExQixFQUF5QztBQUNyQyxVQUFNQyxLQUFLLEdBQUc7QUFDVnhFLFlBQUksRUFBSkEsSUFEVTtBQUNKakQsU0FBQyxFQUFEQSxDQURJO0FBQ0RDLFNBQUMsRUFBREEsQ0FEQztBQUNFc0gsVUFBRSxFQUFGQTtBQURGLE9BQWQ7QUFHQUosYUFBTyxDQUFDSyxXQUFELENBQVAsQ0FBcUJDLEtBQXJCO0FBQ0g7QUFDSjs7QUFDRFIsU0FBTyxDQUFDSyxhQUFSLEdBQXdCQSxhQUF4QjtBQUNILENBbkJELEVBbUJHTCxPQUFPLEtBQUtBLE9BQU8sR0FBRyxFQUFmLENBbkJWLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUk8sSUFBSVMsU0FBSjs7QUFDUCxDQUFDLFVBQVVBLFNBQVYsRUFBcUI7QUFDbEIsV0FBU0MsU0FBVCxDQUFtQkMsU0FBbkIsRUFBOEIzRCxNQUE5QixFQUFzQztBQUFBOztBQUFBLFFBQzFCbkUsTUFEMEIsR0FDZjhILFNBRGUsQ0FDMUI5SCxNQUQwQjs7QUFFbEMsUUFBSUEsTUFBSixFQUFZO0FBQUE7O0FBQ1JtRSxZQUFNLENBQUN6RixDQUFQLGdCQUFXc0IsTUFBTSxDQUFDdEIsQ0FBbEIsaURBQXVCLENBQXZCO0FBQ0F5RixZQUFNLENBQUMxRixDQUFQLGdCQUFXdUIsTUFBTSxDQUFDdkIsQ0FBbEIsaURBQXVCLENBQXZCO0FBQ0EwRixZQUFNLENBQUM0RCxDQUFQLGdCQUFXL0gsTUFBTSxDQUFDK0gsQ0FBbEIsaURBQXVCLENBQXZCO0FBQ0E1RCxZQUFNLENBQUM2RCxDQUFQLGdCQUFXaEksTUFBTSxDQUFDZ0ksQ0FBbEIsaURBQXVCLENBQXZCO0FBQ0E3RCxZQUFNLENBQUM3RCxFQUFQLGlCQUFZTixNQUFNLENBQUNNLEVBQW5CLG1EQUF5QixDQUF6QjtBQUNBNkQsWUFBTSxDQUFDNUQsRUFBUCxpQkFBWVAsTUFBTSxDQUFDTyxFQUFuQixtREFBeUIsQ0FBekI7QUFDQTtBQUNIOztBQVZpQyxRQVcxQjBILFFBWDBCLEdBV2JILFNBWGEsQ0FXMUJHLFFBWDBCO0FBWWxDLFFBQU1DLE1BQU0sZ0NBQUdKLFNBQVMsQ0FBQ0ksTUFBYixpRUFBdUJKLFNBQVMsQ0FBQ0ssS0FBakMsdUNBQTBDLENBQXREO0FBQ0EsUUFBTUMsTUFBTSxpQ0FBR04sU0FBUyxDQUFDTSxNQUFiLGlFQUF1Qk4sU0FBUyxDQUFDSyxLQUFqQyx5Q0FBMEMsQ0FBdEQ7QUFDQWhFLFVBQU0sQ0FBQzdELEVBQVAsbUJBQVl3SCxTQUFTLENBQUM1SCxDQUF0Qix1REFBMkIsQ0FBM0I7QUFDQWlFLFVBQU0sQ0FBQzVELEVBQVAsbUJBQVl1SCxTQUFTLENBQUMzSCxDQUF0Qix1REFBMkIsQ0FBM0I7O0FBQ0EsUUFBSThILFFBQUosRUFBYztBQUNWLFVBQU1JLEdBQUcsR0FBRzdILElBQUksQ0FBQzZILEdBQUwsQ0FBU0osUUFBVCxDQUFaO0FBQ0EsVUFBTUssR0FBRyxHQUFHOUgsSUFBSSxDQUFDOEgsR0FBTCxDQUFTTCxRQUFULENBQVo7QUFDQTlELFlBQU0sQ0FBQ3pGLENBQVAsR0FBVzJKLEdBQUcsR0FBR0gsTUFBakI7QUFDQS9ELFlBQU0sQ0FBQzFGLENBQVAsR0FBVzZKLEdBQUcsR0FBR0osTUFBakI7QUFDQS9ELFlBQU0sQ0FBQzRELENBQVAsR0FBVyxDQUFDTyxHQUFELEdBQU9GLE1BQWxCO0FBQ0FqRSxZQUFNLENBQUM2RCxDQUFQLEdBQVdLLEdBQUcsR0FBR0QsTUFBakI7QUFDQTtBQUNIOztBQUNEakUsVUFBTSxDQUFDekYsQ0FBUCxHQUFXd0osTUFBWDtBQUNBL0QsVUFBTSxDQUFDMUYsQ0FBUCxHQUFXLENBQVg7QUFDQTBGLFVBQU0sQ0FBQzRELENBQVAsR0FBVyxDQUFYO0FBQ0E1RCxVQUFNLENBQUM2RCxDQUFQLEdBQVdJLE1BQVg7QUFDSDs7QUFDRFIsV0FBUyxDQUFDQyxTQUFWLEdBQXNCQSxTQUF0Qjs7QUFDQSxXQUFTVSxpQkFBVCxDQUEyQlQsU0FBM0IsRUFBc0MzRCxNQUF0QyxFQUE4QztBQUFBOztBQUFBLFFBQ2xDMUUsY0FEa0MsR0FDZnFJLFNBRGUsQ0FDbENySSxjQURrQzs7QUFFMUMsUUFBSUEsY0FBSixFQUFvQjtBQUFBOztBQUNoQjBFLFlBQU0sQ0FBQ2pGLGVBQVAsNEJBQXlCTyxjQUFjLENBQUNQLGVBQXhDLHlFQUEyRCxDQUEzRDtBQUNBaUYsWUFBTSxDQUFDdkYsYUFBUCw0QkFBdUJhLGNBQWMsQ0FBQ2IsYUFBdEMseUVBQXVELENBQXZEO0FBQ0F1RixZQUFNLENBQUNyRixlQUFQLDRCQUF5QlcsY0FBYyxDQUFDWCxlQUF4Qyx5RUFBMkQsQ0FBM0Q7QUFDQXFGLFlBQU0sQ0FBQ25GLGNBQVAsNEJBQXdCUyxjQUFjLENBQUNULGNBQXZDLHlFQUF5RCxDQUF6RDtBQUNBbUYsWUFBTSxDQUFDaEYsV0FBUCw2QkFBcUJNLGNBQWMsQ0FBQ04sV0FBcEMsMkVBQW1ELENBQW5EO0FBQ0FnRixZQUFNLENBQUN0RixTQUFQLDRCQUFtQlksY0FBYyxDQUFDWixTQUFsQyx5RUFBK0MsQ0FBL0M7QUFDQXNGLFlBQU0sQ0FBQ3BGLFdBQVAsNkJBQXFCVSxjQUFjLENBQUNWLFdBQXBDLDJFQUFtRCxDQUFuRDtBQUNBb0YsWUFBTSxDQUFDbEYsVUFBUCw0QkFBb0JRLGNBQWMsQ0FBQ1IsVUFBbkMseUVBQWlELENBQWpEO0FBQ0E7QUFDSDs7QUFDRCxRQUFNWixLQUFLLHVCQUFHeUosU0FBUyxDQUFDekosS0FBYiwrREFBc0IsQ0FBakM7QUFiMEMsUUFjbENtSyxJQWRrQyxHQWN6QlYsU0FkeUIsQ0FjbENVLElBZGtDOztBQWUxQyxRQUFJQSxJQUFKLEVBQVU7QUFBQSx3QkFDMkJBLElBRDNCLENBQ0VwSyxLQURGO0FBQUEsVUFDRUEsS0FERiw0QkFDVSxDQURWO0FBQUEsd0JBQzJCb0ssSUFEM0IsQ0FDYUMsS0FEYjtBQUFBLFVBQ2FBLEtBRGIsNEJBQ3FCLENBRHJCO0FBRU4sVUFBTUMsYUFBYSxHQUFHLElBQUlELEtBQTFCO0FBQ0EsVUFBTWxLLENBQUMsR0FBSUgsS0FBSyxJQUFJLEVBQVYsR0FBZ0IsSUFBMUI7QUFDQSxVQUFNSSxDQUFDLEdBQUlKLEtBQUssSUFBSSxDQUFWLEdBQWUsSUFBekI7QUFDQSxVQUFNSyxDQUFDLEdBQUdMLEtBQUssR0FBRyxJQUFsQjtBQUNBK0YsWUFBTSxDQUFDakYsZUFBUCxHQUF5QmIsS0FBekI7QUFDQThGLFlBQU0sQ0FBQ3ZGLGFBQVAsR0FBdUI4SixhQUF2QjtBQUNBdkUsWUFBTSxDQUFDckYsZUFBUCxHQUF5QjRKLGFBQXpCO0FBQ0F2RSxZQUFNLENBQUNuRixjQUFQLEdBQXdCMEosYUFBeEI7QUFDQXZFLFlBQU0sQ0FBQ2hGLFdBQVAsR0FBcUIsQ0FBckI7QUFDQWdGLFlBQU0sQ0FBQ3RGLFNBQVAsR0FBbUJOLENBQUMsR0FBR2tLLEtBQXZCO0FBQ0F0RSxZQUFNLENBQUNwRixXQUFQLEdBQXFCUCxDQUFDLEdBQUdpSyxLQUF6QjtBQUNBdEUsWUFBTSxDQUFDbEYsVUFBUCxHQUFvQlIsQ0FBQyxHQUFHZ0ssS0FBeEI7QUFDQTtBQUNIOztBQTlCeUMsUUErQnBDRSxVQS9Cb0MsR0ErQnJCYixTQS9CcUIsQ0ErQnBDYSxVQS9Cb0M7O0FBZ0MxQyxRQUFJQSxVQUFVLEtBQUtDLFNBQW5CLEVBQThCO0FBQzFCLFVBQUlELFVBQVUsR0FBRyxDQUFqQixFQUFvQjtBQUNoQkEsa0JBQVUsR0FBRyxDQUFiO0FBQ0gsT0FGRCxNQUdLLElBQUlBLFVBQVUsR0FBRyxDQUFDLENBQWxCLEVBQXFCO0FBQ3RCQSxrQkFBVSxHQUFHLENBQUMsQ0FBZDtBQUNIOztBQUNELFVBQU1FLE9BQU8sR0FBRyxJQUFJckksSUFBSSxDQUFDQyxHQUFMLENBQVNrSSxVQUFULENBQXBCO0FBQ0EsVUFBSUcsTUFBTSxHQUFHLENBQWI7O0FBQ0EsVUFBSUgsVUFBVSxHQUFHLENBQWpCLEVBQW9CO0FBQ2hCRyxjQUFNLEdBQUdILFVBQVUsR0FBRyxHQUF0QjtBQUNIOztBQUNEeEUsWUFBTSxDQUFDakYsZUFBUCxHQUF5QmIsS0FBekI7QUFDQThGLFlBQU0sQ0FBQ3ZGLGFBQVAsR0FBdUJpSyxPQUF2QjtBQUNBMUUsWUFBTSxDQUFDckYsZUFBUCxHQUF5QitKLE9BQXpCO0FBQ0ExRSxZQUFNLENBQUNuRixjQUFQLEdBQXdCNkosT0FBeEI7QUFDQTFFLFlBQU0sQ0FBQ2hGLFdBQVAsR0FBcUIsQ0FBckI7QUFDQWdGLFlBQU0sQ0FBQ3RGLFNBQVAsR0FBbUJpSyxNQUFuQjtBQUNBM0UsWUFBTSxDQUFDcEYsV0FBUCxHQUFxQitKLE1BQXJCO0FBQ0EzRSxZQUFNLENBQUNsRixVQUFQLEdBQW9CNkosTUFBcEI7QUFDQTtBQUNIOztBQUNEM0UsVUFBTSxDQUFDakYsZUFBUCxHQUF5QmIsS0FBekI7QUFDQThGLFVBQU0sQ0FBQ3ZGLGFBQVAsR0FBdUIsQ0FBdkI7QUFDQXVGLFVBQU0sQ0FBQ3JGLGVBQVAsR0FBeUIsQ0FBekI7QUFDQXFGLFVBQU0sQ0FBQ25GLGNBQVAsR0FBd0IsQ0FBeEI7QUFDQW1GLFVBQU0sQ0FBQ2hGLFdBQVAsR0FBcUIsQ0FBckI7QUFDQWdGLFVBQU0sQ0FBQ3RGLFNBQVAsR0FBbUIsQ0FBbkI7QUFDQXNGLFVBQU0sQ0FBQ3BGLFdBQVAsR0FBcUIsQ0FBckI7QUFDQW9GLFVBQU0sQ0FBQ2xGLFVBQVAsR0FBb0IsQ0FBcEI7QUFDSDs7QUFDRDJJLFdBQVMsQ0FBQ1csaUJBQVYsR0FBOEJBLGlCQUE5QjtBQUNILENBaEdELEVBZ0dHWCxTQUFTLEtBQUtBLFNBQVMsR0FBRyxFQUFqQixDQWhHWixFOzs7Ozs7Ozs7Ozs7O0FDRE8sSUFBSW1CLE1BQUo7O0FBQ1AsQ0FBQyxVQUFVQSxNQUFWLEVBQWtCO0FBQ2YsV0FBU0MsU0FBVCxDQUFtQnRGLFNBQW5CLEVBQThCO0FBQUE7O0FBQzFCLGlDQUFPQSxTQUFTLENBQUN1RixPQUFqQixtRUFBNEIsSUFBNUI7QUFDSDs7QUFDREYsUUFBTSxDQUFDQyxTQUFQLEdBQW1CQSxTQUFuQjs7QUFDQSxXQUFTbkYsTUFBVCxDQUFnQkgsU0FBaEIsRUFBMkJ3RixJQUEzQixFQUFpQztBQUM3QixRQUFJeEYsU0FBUyxDQUFDeUYsUUFBZCxFQUF3QjtBQUNwQnpGLGVBQVMsQ0FBQ3lGLFFBQVYsQ0FBbUJELElBQW5CO0FBQ0g7QUFDSjs7QUFDREgsUUFBTSxDQUFDbEYsTUFBUCxHQUFnQkEsTUFBaEI7QUFDSCxDQVhELEVBV0drRixNQUFNLEtBQUtBLE1BQU0sR0FBRyxFQUFkLENBWFQsRTs7Ozs7Ozs7Ozs7Ozs7O0FDRE8sSUFBTXpELFVBQWIsR0FDSSxzQkFBYztBQUFBOztBQUNWLE9BQUs4RCxVQUFMLEdBQWtCLElBQUlDLEdBQUosRUFBbEI7QUFDQSxPQUFLOUYsTUFBTCxHQUFjLElBQUk4RixHQUFKLEVBQWQ7QUFDQSxPQUFLeEYsTUFBTCxHQUFjLElBQUl3RixHQUFKLEVBQWQ7QUFDQSxPQUFLckYsT0FBTCxHQUFlLElBQUlxRixHQUFKLEVBQWY7QUFDQSxPQUFLaEYsTUFBTCxHQUFjLElBQUlnRixHQUFKLEVBQWQ7QUFDSCxDQVBMLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTyxJQUFNeEQsS0FBYjtBQUNJLG1CQUFjO0FBQUE7O0FBQ1YsU0FBS3lELE1BQUwsR0FBYyxJQUFJRCxHQUFKLEVBQWQ7QUFDQSxTQUFLRSxRQUFMLEdBQWdCLElBQUlGLEdBQUosRUFBaEI7QUFDQSxTQUFLSixPQUFMLEdBQWUsSUFBZjtBQUNIOztBQUxMO0FBQUE7QUFBQSxXQU1JLGVBQWE7QUFBQTs7QUFDVCxVQUFJLENBQUMsS0FBS0EsT0FBVixFQUFtQjtBQUNmO0FBQ0g7O0FBQ0Qsa0JBQUFPLE9BQU8sRUFBQ0MsR0FBUjtBQUNIO0FBWEw7QUFBQTtBQUFBLFdBWUksaUJBQWU7QUFDWCxVQUFJLENBQUMsS0FBS1IsT0FBVixFQUFtQjtBQUNmO0FBQ0g7O0FBSFUsd0NBQU5TLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUlYLFVBQU1qQyxFQUFFLEdBQUdrQyxNQUFNLENBQUNELElBQUQsQ0FBakI7QUFDQSxVQUFJRSxLQUFLLEdBQUcsS0FBS04sTUFBTCxDQUFZTyxHQUFaLENBQWdCcEMsRUFBaEIsQ0FBWjs7QUFDQSxVQUFJLENBQUNtQyxLQUFMLEVBQVk7QUFBQTs7QUFDUkEsYUFBSyxHQUFHLENBQVI7O0FBQ0EscUJBQUFKLE9BQU8sRUFBQ00sS0FBUixrQkFBaUJKLElBQWpCO0FBQ0g7O0FBQ0RFLFdBQUs7QUFDTCxXQUFLTixNQUFMLENBQVkzRSxHQUFaLENBQWdCOEMsRUFBaEIsRUFBb0JtQyxLQUFwQjtBQUNIO0FBeEJMO0FBQUE7QUFBQSxXQXlCSSxtQkFBaUI7QUFDYixVQUFJLENBQUMsS0FBS1gsT0FBVixFQUFtQjtBQUNmO0FBQ0g7O0FBSFkseUNBQU5TLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUliLFVBQU1qQyxFQUFFLEdBQUdrQyxNQUFNLENBQUNELElBQUQsQ0FBakI7QUFDQSxVQUFJRSxLQUFLLEdBQUcsS0FBS0wsUUFBTCxDQUFjTSxHQUFkLENBQWtCcEMsRUFBbEIsQ0FBWjs7QUFDQSxVQUFJLENBQUNtQyxLQUFMLEVBQVk7QUFBQTs7QUFDUkEsYUFBSyxHQUFHLENBQVI7O0FBQ0EscUJBQUFKLE9BQU8sRUFBQ08sSUFBUixrQkFBZ0JMLElBQWhCO0FBQ0g7O0FBQ0RFLFdBQUs7QUFDTCxXQUFLTCxRQUFMLENBQWM1RSxHQUFkLENBQWtCOEMsRUFBbEIsRUFBc0JtQyxLQUF0QjtBQUNIO0FBckNMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDTyxJQUFNbkUsT0FBYjtBQUFBOztBQUFBOztBQUNJLHFCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsK0JBQVN6RSxTQUFUO0FBQ0EsVUFBS3lDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsVUFBS3VHLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxVQUFLZixPQUFMLEdBQWUsSUFBZjtBQUNBLFVBQUs3SCxRQUFMLEdBQWdCLEVBQWhCO0FBTFU7QUFNYjs7QUFQTDtBQUFBO0FBQUEsV0FRSSxzQkFBYTtBQUNULFVBQUluQixPQUFPLEdBQUcsS0FBS21CLFFBQUwsQ0FBYyxLQUFLcUMsS0FBbkIsQ0FBZDs7QUFDQSxVQUFJLENBQUN4RCxPQUFMLEVBQWM7QUFDVkEsZUFBTyxHQUFHO0FBQ05zRSxrQkFBUSxFQUFFLENBREo7QUFFTkYsZ0JBQU0sRUFBRTtBQUZGLFNBQVY7QUFJQSxhQUFLakQsUUFBTCxDQUFjLEtBQUtxQyxLQUFuQixJQUE0QnhELE9BQTVCO0FBQ0g7O0FBQ0QsYUFBT0EsT0FBUDtBQUNIO0FBbEJMO0FBQUE7QUFBQSxXQW1CSSx5QkFBZ0J5RCxTQUFoQixFQUEyQjtBQUN2QixVQUFNekQsT0FBTyxHQUFHLEtBQUtvQixVQUFMLEVBQWhCO0FBQ0FwQixhQUFPLENBQUNzRSxRQUFSLEdBQW1CLENBQW5CO0FBQ0F0RSxhQUFPLENBQUNvRSxNQUFSLEdBQWlCLElBQWpCOztBQUNBLFVBQUksS0FBS1osS0FBTCxHQUFhLEtBQUtoQyxNQUFMLENBQVlnQyxLQUE3QixFQUFvQztBQUNoQztBQUNIOztBQUNELFVBQU13RyxPQUFPLEdBQUcsS0FBS3hJLE1BQUwsQ0FBWWlELFVBQVosQ0FBdUJMLE1BQXZCLENBQThCd0YsR0FBOUIsQ0FBa0NuRyxTQUFTLENBQUNQLElBQTVDLENBQWhCOztBQUNBLFVBQUk4RyxPQUFKLEVBQWE7QUFDVEEsZUFBTyxDQUFDdkcsU0FBRCxFQUFZLEtBQUtqQyxNQUFqQixDQUFQO0FBQ0g7QUFDSjtBQTlCTDtBQUFBO0FBQUEsV0ErQkksa0JBQVM7QUFDTCxVQUFJLENBQUMsS0FBS3dILE9BQVYsRUFBbUI7QUFDZjtBQUNIOztBQUhJLFVBSUdpQixJQUpILEdBSVksS0FBS3pJLE1BSmpCLENBSUd5SSxJQUpIOztBQUtMLFVBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1A7QUFDSDs7QUFDRCxVQUFNQyxTQUFTLEdBQUdDLFdBQVcsQ0FBQ0MsR0FBWixFQUFsQjtBQUNBLFdBQUs1RyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFdBQUtNLGVBQUwsQ0FBcUJtRyxJQUFyQjtBQUNBLFdBQUtGLFdBQUwsR0FBbUJJLFdBQVcsQ0FBQ0MsR0FBWixLQUFvQkYsU0FBdkM7QUFDSDtBQTNDTDs7QUFBQTtBQUFBLEVBQTZCakUsd0RBQTdCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ08sSUFBTXRJLFFBQWI7QUFBQTs7QUFBQTs7QUFDSSxzQkFBYztBQUFBOztBQUFBOztBQUNWLCtCQUFTb0QsU0FBVDtBQUNBLFVBQUtDLElBQUwsR0FBWUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFGVTtBQUdiOztBQUpMO0FBQUE7QUFBQSxXQUtJLGlCQUFRLENBQ1A7QUFOTDtBQUFBO0FBQUEsV0FPSSxlQUFNLENBQ0w7QUFSTDs7QUFBQTtBQUFBLEVBQThCK0Usd0RBQTlCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTVAsUUFBYjtBQUFBOztBQUFBOztBQUNJLHNCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsK0JBQVMzRSxTQUFUO0FBQ0EsVUFBS3lDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsVUFBS3dGLE9BQUwsR0FBZSxJQUFmO0FBQ0EsVUFBS3FCLE1BQUwsR0FBY3RNLGtEQUFBLEVBQWQ7QUFDQSxVQUFLdU0sS0FBTCxHQUFhdk0sa0RBQUEsRUFBYjtBQUNBLFVBQUt3TSxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixhQUFuQjtBQUNBLFVBQUtySixRQUFMLEdBQWdCLEVBQWhCO0FBUlU7QUFTYjs7QUFWTDtBQUFBO0FBQUEsV0FXSSxzQkFBYTtBQUNULFVBQUluQixPQUFPLEdBQUcsS0FBS21CLFFBQUwsQ0FBYyxLQUFLcUMsS0FBbkIsQ0FBZDs7QUFDQSxVQUFJLENBQUN4RCxPQUFMLEVBQWM7QUFDVkEsZUFBTyxHQUFHO0FBQ05ELGdCQUFNLEVBQUVJLG1EQUFBO0FBREYsU0FBVjtBQUdBLGFBQUtnQixRQUFMLENBQWMsS0FBS3FDLEtBQW5CLElBQTRCeEQsT0FBNUI7QUFDSDs7QUFDRCxhQUFPQSxPQUFQO0FBQ0g7QUFwQkw7QUFBQTtBQUFBLFdBcUJJLGtCQUFTa0QsSUFBVCxFQUFlakQsQ0FBZixFQUFrQkMsQ0FBbEIsRUFBcUJzSCxFQUFyQixFQUF5QjtBQUNyQixVQUFJLENBQUMsS0FBS3dCLE9BQVYsRUFBbUI7QUFDZjtBQUNIOztBQUhvQixVQUliaUIsSUFKYSxHQUlKLEtBQUt6SSxNQUpELENBSWJ5SSxJQUphOztBQUtyQixVQUFJLENBQUNBLElBQUwsRUFBVztBQUNQO0FBQ0g7O0FBQ0QsV0FBS0ssS0FBTCxDQUFXckssQ0FBWCxHQUFlQSxDQUFmO0FBQ0EsV0FBS3FLLEtBQUwsQ0FBV3BLLENBQVgsR0FBZUEsQ0FBZjtBQUNBLFdBQUttSyxNQUFMLENBQVlwSyxDQUFaLEdBQWdCQSxDQUFoQjtBQUNBLFdBQUtvSyxNQUFMLENBQVluSyxDQUFaLEdBQWdCQSxDQUFoQjtBQUNBLFdBQUtxSyxTQUFMLEdBQWlCL0MsRUFBakI7QUFDQSxXQUFLZ0QsV0FBTCxHQUFtQnRILElBQW5CO0FBQ0EsV0FBS00sS0FBTCxHQUFhLENBQWI7QUFDQSxVQUFNaUgsSUFBSSxHQUFHLEtBQUtySixVQUFMLEVBQWI7QUFDQWpCLDREQUFBLENBQWdCc0ssSUFBSSxDQUFDMUssTUFBckI7QUFDQSxXQUFLeUQsS0FBTDtBQUNBLFdBQUtXLGlCQUFMLENBQXVCOEYsSUFBdkIsRUFBNkJRLElBQTdCO0FBQ0g7QUF4Q0w7QUFBQTtBQUFBLFdBeUNJLDJCQUFrQmhILFNBQWxCLEVBQTZCaUgsTUFBN0IsRUFBcUM7QUFDakMsVUFBSSxLQUFLbEgsS0FBTCxHQUFhLEtBQUtoQyxNQUFMLENBQVlnQyxLQUE3QixFQUFvQztBQUNoQyxlQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFJLENBQUMwQyxrRUFBQSxDQUFrQnpDLFNBQWxCLENBQUwsRUFBbUM7QUFDL0IsZUFBTyxLQUFQO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDeUQseUVBQUEsQ0FBeUJ6RCxTQUF6QixDQUFMLEVBQTBDO0FBQ3RDLGVBQU8sS0FBUDtBQUNIOztBQUNELFVBQU11RyxPQUFPLEdBQUcsS0FBS3hJLE1BQUwsQ0FBWWlELFVBQVosQ0FBdUJWLE9BQXZCLENBQStCNkYsR0FBL0IsQ0FBbUNuRyxTQUFTLENBQUNQLElBQTdDLENBQWhCOztBQUNBLFVBQUk4RyxPQUFKLEVBQWE7QUFDVCxZQUFNaEssT0FBTyxHQUFHLEtBQUtvQixVQUFMLEVBQWhCO0FBQ0F1Ryw4RUFBQSxDQUFvQmxFLFNBQXBCLEVBQStCekQsT0FBTyxDQUFDRCxNQUF2QztBQUNBSSw0REFBQSxDQUFjdUssTUFBTSxDQUFDM0ssTUFBckIsRUFBNkJDLE9BQU8sQ0FBQ0QsTUFBckMsRUFBNkNDLE9BQU8sQ0FBQ0QsTUFBckQ7QUFDQUksMkVBQUEsQ0FBNkJILE9BQU8sQ0FBQ0QsTUFBckMsRUFBNkMsS0FBS3NLLE1BQWxELEVBQTBELEtBQUtDLEtBQS9EO0FBSlMsMEJBS1EsS0FBS0EsS0FMYjtBQUFBLFlBS0RySyxDQUxDLGVBS0RBLENBTEM7QUFBQSxZQUtFQyxDQUxGLGVBS0VBLENBTEY7QUFNVCxZQUFNZ0UsTUFBTSxHQUFHOEYsT0FBTyxDQUFDdkcsU0FBRCxFQUFZLEtBQUtqQyxNQUFqQixDQUF0Qjs7QUFDQSxZQUFJMEMsTUFBSixFQUFZO0FBQ1JnRCxnRkFBQSxDQUFzQnpELFNBQXRCLEVBQWlDLEtBQUsrRyxXQUF0QyxFQUFtRHZLLENBQW5ELEVBQXNEQyxDQUF0RCxFQUF5RCxLQUFLcUssU0FBOUQ7QUFDSDs7QUFDRCxZQUFJLEtBQUtDLFdBQUwsS0FBcUIsYUFBekIsRUFBd0M7QUFDcEMsY0FBSXRHLE1BQU0sSUFBSSxDQUFDVCxTQUFTLENBQUN1RCxXQUF6QixFQUFzQztBQUNsQ0Usa0ZBQUEsQ0FBc0J6RCxTQUF0QixFQUFpQyxhQUFqQyxFQUFnRHhELENBQWhELEVBQW1EQyxDQUFuRCxFQUFzRCxLQUFLcUssU0FBM0Q7QUFDSCxXQUZELE1BR0ssSUFBSSxDQUFDckcsTUFBRCxJQUFXVCxTQUFTLENBQUN1RCxXQUF6QixFQUFzQztBQUN2Q0Usa0ZBQUEsQ0FBc0J6RCxTQUF0QixFQUFpQyxZQUFqQyxFQUErQ3hELENBQS9DLEVBQWtEQyxDQUFsRCxFQUFxRCxLQUFLcUssU0FBMUQ7QUFDSDs7QUFDRDlHLG1CQUFTLENBQUN1RCxXQUFWLEdBQXdCOUMsTUFBeEI7QUFDSDs7QUFDRCxlQUFPQSxNQUFQO0FBQ0g7O0FBQ0QsYUFBTyxLQUFQO0FBQ0g7QUExRUw7O0FBQUE7QUFBQSxFQUE4QitCLHdEQUE5QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1SLFFBQWI7QUFBQTs7QUFBQTs7QUFDSSxzQkFBYztBQUFBOztBQUFBOztBQUNWLCtCQUFTMUUsU0FBVDtBQUNBLFVBQUt5QyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQUt1RyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsVUFBS2YsT0FBTCxHQUFlLElBQWY7QUFDQSxVQUFLN0gsUUFBTCxHQUFnQixFQUFoQjtBQUxVO0FBTWI7O0FBUEw7QUFBQTtBQUFBLFdBUUksc0JBQWE7QUFDVCxVQUFJbkIsT0FBTyxHQUFHLEtBQUttQixRQUFMLENBQWMsS0FBS3FDLEtBQW5CLENBQWQ7O0FBQ0EsVUFBSSxDQUFDeEQsT0FBTCxFQUFjO0FBQ1ZBLGVBQU8sR0FBRztBQUNORCxnQkFBTSxFQUFFSSxtREFBQSxFQURGO0FBRU5YLHdCQUFjLEVBQUVkLDJEQUFBO0FBRlYsU0FBVjtBQUlBLGFBQUt5QyxRQUFMLENBQWMsS0FBS3FDLEtBQW5CLElBQTRCeEQsT0FBNUI7QUFDSDs7QUFDRCxhQUFPQSxPQUFQO0FBQ0g7QUFsQkw7QUFBQTtBQUFBLFdBbUJJLHlCQUFnQnlELFNBQWhCLEVBQTJCaUgsTUFBM0IsRUFBbUM7QUFDL0IsVUFBSSxLQUFLbEgsS0FBTCxHQUFhLEtBQUtoQyxNQUFMLENBQVlnQyxLQUE3QixFQUFvQztBQUNoQztBQUNIOztBQUNELFVBQUksQ0FBQzBDLGtFQUFBLENBQWtCekMsU0FBbEIsQ0FBTCxFQUFtQztBQUMvQjtBQUNIOztBQUNELFVBQU16RCxPQUFPLEdBQUcsS0FBS29CLFVBQUwsRUFBaEI7QUFDQXVHLDRFQUFBLENBQW9CbEUsU0FBcEIsRUFBK0J6RCxPQUFPLENBQUNELE1BQXZDO0FBQ0E0SCxvRkFBQSxDQUE0QmxFLFNBQTVCLEVBQXVDekQsT0FBTyxDQUFDUixjQUEvQztBQUNBVywwREFBQSxDQUFjdUssTUFBTSxDQUFDM0ssTUFBckIsRUFBNkJDLE9BQU8sQ0FBQ0QsTUFBckMsRUFBNkNDLE9BQU8sQ0FBQ0QsTUFBckQ7QUFDQXJCLGtFQUFBLENBQXNCZ00sTUFBTSxDQUFDbEwsY0FBN0IsRUFBNkNRLE9BQU8sQ0FBQ1IsY0FBckQsRUFBcUVRLE9BQU8sQ0FBQ1IsY0FBN0U7QUFDQSxVQUFNd0ssT0FBTyxHQUFHLEtBQUt4SSxNQUFMLENBQVlpRCxVQUFaLENBQXVCbkIsTUFBdkIsQ0FBOEJzRyxHQUE5QixDQUFrQ25HLFNBQVMsQ0FBQ1AsSUFBNUMsQ0FBaEI7O0FBQ0EsVUFBSThHLE9BQUosRUFBYTtBQUNUQSxlQUFPLENBQUN2RyxTQUFELEVBQVksS0FBS2pDLE1BQWpCLENBQVA7QUFDSDtBQUNKO0FBbkNMO0FBQUE7QUFBQSxXQW9DSSxrQkFBUztBQUNMLFVBQUksQ0FBQyxLQUFLd0gsT0FBVixFQUFtQjtBQUNmO0FBQ0g7O0FBSEksVUFJR2lCLElBSkgsR0FJWSxLQUFLekksTUFKakIsQ0FJR3lJLElBSkg7O0FBS0wsVUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUDtBQUNIOztBQUNELFVBQU1DLFNBQVMsR0FBR0MsV0FBVyxDQUFDQyxHQUFaLEVBQWxCO0FBQ0EsV0FBSzVJLE1BQUwsQ0FBWXNFLFFBQVosQ0FBcUI2RSxLQUFyQjtBQUNBLFdBQUtuSCxLQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQU1pSCxJQUFJLEdBQUcsS0FBS3JKLFVBQUwsRUFBYjtBQUNBLFdBQUtvQyxLQUFMO0FBQ0FyRCx3REFBQSxDQUFZLEtBQUtxQixNQUFMLENBQVlVLE1BQVosQ0FBbUIwRixTQUFuQixFQUFaLEVBQTRDNkMsSUFBSSxDQUFDMUssTUFBakQ7QUFDQXJCLG9FQUFBLENBQXdCK0wsSUFBSSxDQUFDakwsY0FBN0I7QUFDQSxXQUFLa0UsZUFBTCxDQUFxQnVHLElBQXJCLEVBQTJCUSxJQUEzQjtBQUNBLFdBQUtqSixNQUFMLENBQVlzRSxRQUFaLENBQXFCOEUsR0FBckI7QUFDQSxXQUFLYixXQUFMLEdBQW1CSSxXQUFXLENBQUNDLEdBQVosS0FBb0JGLFNBQXZDO0FBQ0g7QUF0REw7O0FBQUE7QUFBQSxFQUE4QmpFLHdEQUE5QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDTyxJQUFJNEUsUUFBSjs7QUFDUCxDQUFDLFVBQVVBLFFBQVYsRUFBb0I7QUFDakIsV0FBU0MsV0FBVCxDQUFxQkMsUUFBckIsRUFBK0I7QUFDM0IsUUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDWCxhQUFPLENBQVA7QUFDSDs7QUFDRCxRQUFJQSxRQUFRLENBQUMzRyxNQUFiLEVBQXFCO0FBQ2pCLGFBQU8sQ0FBUDtBQUNIOztBQUNELFFBQUkyRyxRQUFRLENBQUNDLFVBQVQsR0FBc0IsQ0FBMUIsRUFBNkI7QUFDekIsYUFBT0QsUUFBUSxDQUFDRSxXQUFULEdBQXVCRixRQUFRLENBQUNDLFVBQXZDO0FBQ0g7O0FBQ0QsV0FBTyxDQUFQO0FBQ0g7O0FBQ0RILFVBQVEsQ0FBQ0MsV0FBVCxHQUF1QkEsV0FBdkI7QUFDSCxDQWRELEVBY0dELFFBQVEsS0FBS0EsUUFBUSxHQUFHLEVBQWhCLENBZFg7O0FBZU8sSUFBTWhGLFNBQWI7QUFBQTs7QUFBQTs7QUFDSSx1QkFBYztBQUFBOztBQUFBOztBQUNWLCtCQUFTOUUsU0FBVDtBQUNBLFVBQUtpRixTQUFMLEdBQWlCLElBQUlvRCxHQUFKLEVBQWpCO0FBQ0EsVUFBSzhCLFNBQUwsR0FBaUIsSUFBSUMsR0FBSixFQUFqQjtBQUhVO0FBSWI7O0FBTEw7QUFBQTtBQUFBLFdBTUksYUFBSUMsS0FBSixFQUFXO0FBQ1AsVUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDUixlQUFPLElBQVA7QUFDSDs7QUFDRCxVQUFJTCxRQUFRLEdBQUcsS0FBSy9FLFNBQUwsQ0FBZTRELEdBQWYsQ0FBbUJ3QixLQUFuQixDQUFmOztBQUNBLFVBQUksQ0FBQ0wsUUFBTCxFQUFlO0FBQ1hBLGdCQUFRLEdBQUcsS0FBS00sT0FBTCxDQUFhRCxLQUFiLENBQVg7QUFDQSxhQUFLcEYsU0FBTCxDQUFldEIsR0FBZixDQUFtQjBHLEtBQW5CLEVBQTBCTCxRQUExQjtBQUNIOztBQUNELGFBQU9BLFFBQVA7QUFDSDtBQWhCTDtBQUFBO0FBQUEsV0FpQkksaUJBQVFLLEtBQVIsRUFBZTtBQUFBLGlEQUNZLEtBQUtGLFNBRGpCO0FBQUE7O0FBQUE7QUFDWCw0REFBdUM7QUFBQSxjQUE1QkksUUFBNEI7QUFDbkMsY0FBTVAsUUFBUSxHQUFHTyxRQUFRLENBQUNGLEtBQUQsRUFBUSxLQUFLNUosTUFBYixDQUF6Qjs7QUFDQSxjQUFJdUosUUFBSixFQUFjO0FBQ1YsbUJBQU9BLFFBQVA7QUFDSDtBQUNKO0FBTlU7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPWCxXQUFLdkosTUFBTCxDQUFZQyxLQUFaLENBQWtCQyxPQUFsQixrQ0FBb0QwSixLQUFwRDtBQUNBLGFBQU8sSUFBUDtBQUNIO0FBMUJMOztBQUFBO0FBQUEsRUFBK0JuRix3REFBL0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDTyxJQUFNWCxNQUFiO0FBQ0ksb0JBQWM7QUFBQTs7QUFDVixTQUFLMUQsS0FBTCxHQUFhLEdBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsR0FBZDtBQUNBLFNBQUtRLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLa0osVUFBTCxHQUFrQixLQUFsQjtBQUNBLFNBQUt4TCxNQUFMLEdBQWNJLG1EQUFBLEVBQWQ7QUFDSDs7QUFQTDtBQUFBO0FBQUEsV0FRSSxxQkFBWTtBQUNSLFVBQU1rQyxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjtBQUNBLFdBQUt2QyxNQUFMLENBQVl0QixDQUFaLEdBQWdCNEQsVUFBaEI7QUFDQSxXQUFLdEMsTUFBTCxDQUFZZ0ksQ0FBWixHQUFnQjFGLFVBQWhCO0FBQ0EsYUFBTyxLQUFLdEMsTUFBWjtBQUNIO0FBYkw7QUFBQTtBQUFBLFdBY0ksb0JBQVc7QUFDUCxhQUFPLEtBQUt3TCxVQUFMLEdBQWtCQyxNQUFNLENBQUNDLFVBQXpCLEdBQXNDLEtBQUs3SixLQUFsRDtBQUNIO0FBaEJMO0FBQUE7QUFBQSxXQWlCSSxxQkFBWTtBQUNSLGFBQU8sS0FBSzJKLFVBQUwsR0FBa0JDLE1BQU0sQ0FBQ0UsV0FBekIsR0FBdUMsS0FBSzdKLE1BQW5EO0FBQ0g7QUFuQkw7QUFBQTtBQUFBLFdBb0JJLHlCQUFnQjtBQUFBOztBQUNaLGFBQU8sS0FBS1EsVUFBTCxHQUFrQixDQUFsQixHQUFzQixLQUFLQSxVQUEzQiw0QkFBd0NtSixNQUFNLENBQUNHLGdCQUEvQyx5RUFBbUUsQ0FBMUU7QUFDSDtBQXRCTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNETyxJQUFNaEcsTUFBYjtBQUNJLGtCQUFZbkUsTUFBWixFQUFvQjtBQUFBOztBQUFBOztBQUNoQixTQUFLb0ssU0FBTCxHQUFpQixDQUFqQjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0EsU0FBSzVDLElBQUwsR0FBWSxDQUFaOztBQUNBLFNBQUtyRixNQUFMLEdBQWMsVUFBQ3FGLElBQUQsRUFBVTtBQUNwQixVQUFJLEtBQUksQ0FBQzRDLE1BQVQsRUFBaUI7QUFDYjtBQUNIOztBQUNELFdBQUksQ0FBQ3JLLE1BQUwsQ0FBWXFDLE9BQVosQ0FBb0JELE1BQXBCLENBQTJCcUYsSUFBM0I7O0FBQ0EsV0FBSSxDQUFDekgsTUFBTCxDQUFZNkMsT0FBWixDQUFvQlQsTUFBcEI7O0FBQ0EsV0FBSSxDQUFDcEMsTUFBTCxDQUFZK0IsUUFBWixDQUFxQkQsTUFBckI7QUFDSCxLQVBEOztBQVFBLFNBQUt3SSxXQUFMLEdBQW1CLFlBQU07QUFDckIsVUFBTUMsV0FBVyxHQUFHNUIsV0FBVyxDQUFDQyxHQUFaLEVBQXBCO0FBQ0EsVUFBTTRCLFNBQVMsR0FBRyxDQUFDRCxXQUFXLEdBQUcsS0FBSSxDQUFDOUMsSUFBcEIsSUFBNEIsSUFBOUM7QUFDQSxXQUFJLENBQUNBLElBQUwsR0FBWThDLFdBQVo7O0FBQ0EsV0FBSSxDQUFDbkksTUFBTCxDQUFZb0ksU0FBWjs7QUFDQSxXQUFJLENBQUNDLGVBQUw7QUFDSCxLQU5EOztBQU9BLFNBQUt6SyxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7QUFyQkw7QUFBQTtBQUFBLFNBc0JJLGVBQWU7QUFDWCxhQUFPLEtBQUtxSyxNQUFaO0FBQ0g7QUF4Qkw7QUFBQTtBQUFBLFdBeUJJLGdCQUFPO0FBQ0gsVUFBSSxLQUFLQSxNQUFULEVBQWlCO0FBQ2IsYUFBSzVDLElBQUwsR0FBWWtCLFdBQVcsQ0FBQ0MsR0FBWixFQUFaO0FBQ0EsYUFBS3lCLE1BQUwsR0FBYyxLQUFkO0FBQ0EsYUFBS0ksZUFBTDtBQUNIO0FBQ0o7QUEvQkw7QUFBQTtBQUFBLFdBZ0NJLGlCQUFRO0FBQ0osV0FBS0osTUFBTCxHQUFjLEtBQWQ7QUFDSDtBQWxDTDtBQUFBO0FBQUEsV0FtQ0ksMkJBQWtCO0FBQ2RLLDJCQUFxQixDQUFDLEtBQUtKLFdBQU4sQ0FBckI7QUFDSDtBQXJDTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ08sSUFBTXZHLE9BQWI7QUFBQTs7QUFBQTs7QUFDSSxxQkFBYztBQUFBOztBQUFBOztBQUNWLCtCQUFTeEUsU0FBVDtBQUNBLFVBQUt5QyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQUt5RixJQUFMLEdBQVksQ0FBWjtBQUNBLFVBQUtjLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxVQUFLZixPQUFMLEdBQWUsSUFBZjtBQUxVO0FBTWI7O0FBUEw7QUFBQTtBQUFBLFdBUUksZ0JBQU9DLElBQVAsRUFBYTtBQUNULFVBQUksQ0FBQyxLQUFLRCxPQUFWLEVBQW1CO0FBQ2Y7QUFDSDs7QUFIUSxVQUlEaUIsSUFKQyxHQUlRLEtBQUt6SSxNQUpiLENBSUR5SSxJQUpDOztBQUtULFVBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1A7QUFDSDs7QUFDRCxXQUFLekcsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLeUYsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBTWlCLFNBQVMsR0FBR0MsV0FBVyxDQUFDQyxHQUFaLEVBQWxCO0FBQ0EsV0FBS3RHLGVBQUwsQ0FBcUJtRyxJQUFyQjtBQUNBLFdBQUtGLFdBQUwsR0FBbUJJLFdBQVcsQ0FBQ0MsR0FBWixLQUFvQkYsU0FBdkM7QUFDSDtBQXJCTDtBQUFBO0FBQUEsV0FzQkkseUJBQWdCekcsU0FBaEIsRUFBMkI7QUFDdkIsVUFBSSxLQUFLRCxLQUFMLEdBQWEsS0FBS2hDLE1BQUwsQ0FBWWdDLEtBQTdCLEVBQW9DO0FBQ2hDO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDc0YsZ0VBQUEsQ0FBaUJyRixTQUFqQixDQUFMLEVBQWtDO0FBQzlCO0FBQ0g7O0FBQ0QsV0FBSzBJLGdCQUFMLENBQXNCMUksU0FBdEI7QUFDQXFGLG1FQUFBLENBQWNyRixTQUFkLEVBQXlCLEtBQUt3RixJQUE5QjtBQUNBLFVBQU1lLE9BQU8sR0FBRyxLQUFLeEksTUFBTCxDQUFZaUQsVUFBWixDQUF1QmIsTUFBdkIsQ0FBOEJnRyxHQUE5QixDQUFrQ25HLFNBQVMsQ0FBQ1AsSUFBNUMsQ0FBaEI7O0FBQ0EsVUFBSThHLE9BQUosRUFBYTtBQUNUQSxlQUFPLENBQUN2RyxTQUFELEVBQVksS0FBS2pDLE1BQWpCLENBQVA7QUFDSDtBQUNKO0FBbkNMO0FBQUE7QUFBQSxXQW9DSSwwQkFBaUJpQyxTQUFqQixFQUE0QjtBQUFBOztBQUN4QixXQUFLakMsTUFBTCxDQUFZaUQsVUFBWixDQUF1QjBFLFVBQXZCLENBQWtDaUQsT0FBbEMsQ0FBMEMsVUFBQ3BDLE9BQUQsRUFBVXFDLFFBQVYsRUFBdUI7QUFDN0QsWUFBSTVJLFNBQVMsQ0FBQzRJLFFBQUQsQ0FBYixFQUF5QjtBQUNyQnJDLGlCQUFPLENBQUN2RyxTQUFELEVBQVksTUFBSSxDQUFDakMsTUFBakIsQ0FBUDtBQUNIO0FBQ0osT0FKRDtBQUtIO0FBMUNMOztBQUFBO0FBQUEsRUFBNkJ5RSx3REFBN0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xCQSxTQUFTc0IsYUFBVCxDQUF1Qi9GLE1BQXZCLEVBQStCa0csS0FBL0IsRUFBc0N4RSxJQUF0QyxFQUE0QztBQUFBLE1BQ2hDbEMsSUFEZ0MsR0FDdkJRLE1BQU0sQ0FBQ3NFLFFBRGdCLENBQ2hDOUUsSUFEZ0M7QUFFeEMsTUFBTXNMLFVBQVUsR0FBR3RMLElBQUksQ0FBQ3VMLHFCQUFMLEVBQW5CO0FBQ0EsTUFBTXRNLENBQUMsR0FBR3lILEtBQUssQ0FBQzhFLE9BQU4sR0FBZ0JGLFVBQVUsQ0FBQ0csSUFBM0IsR0FBa0N6TCxJQUFJLENBQUMwTCxVQUFqRDtBQUNBLE1BQU14TSxDQUFDLEdBQUd3SCxLQUFLLENBQUNpRixPQUFOLEdBQWdCTCxVQUFVLENBQUNNLEdBQTNCLEdBQWlDNUwsSUFBSSxDQUFDNkwsU0FBaEQ7QUFDQXJMLFFBQU0sQ0FBQ3lDLFFBQVAsQ0FBZ0I2SSxRQUFoQixDQUF5QjVKLElBQXpCLEVBQStCakQsQ0FBL0IsRUFBa0NDLENBQWxDLEVBQXFDLENBQXJDO0FBQ0F3SCxPQUFLLENBQUNxRixjQUFOO0FBQ0g7O0FBQ00sSUFBSUMsY0FBSjs7QUFDUCxDQUFDLFVBQVVBLGNBQVYsRUFBMEI7QUFDdkIsV0FBU3hJLElBQVQsQ0FBY2hELE1BQWQsRUFBc0I7QUFBQSxRQUNWUixJQURVLEdBQ0RRLE1BQU0sQ0FBQ3NFLFFBRE4sQ0FDVjlFLElBRFU7QUFFbEJBLFFBQUksQ0FBQ2lNLGdCQUFMLENBQXNCLFdBQXRCLEVBQW1DLFVBQUN2RixLQUFELEVBQVc7QUFDMUNILG1CQUFhLENBQUMvRixNQUFELEVBQVNrRyxLQUFULEVBQWdCLGFBQWhCLENBQWI7QUFDSCxLQUZEO0FBR0ExRyxRQUFJLENBQUNpTSxnQkFBTCxDQUFzQixTQUF0QixFQUFpQyxVQUFDdkYsS0FBRCxFQUFXO0FBQ3hDSCxtQkFBYSxDQUFDL0YsTUFBRCxFQUFTa0csS0FBVCxFQUFnQixXQUFoQixDQUFiO0FBQ0gsS0FGRDtBQUdBMUcsUUFBSSxDQUFDaU0sZ0JBQUwsQ0FBc0IsV0FBdEIsRUFBbUMsVUFBQ3ZGLEtBQUQsRUFBVztBQUMxQ0gsbUJBQWEsQ0FBQy9GLE1BQUQsRUFBU2tHLEtBQVQsRUFBZ0IsYUFBaEIsQ0FBYjtBQUNILEtBRkQ7QUFHSDs7QUFDRHNGLGdCQUFjLENBQUN4SSxJQUFmLEdBQXNCQSxJQUF0QjtBQUNILENBZEQsRUFjR3dJLGNBQWMsS0FBS0EsY0FBYyxHQUFHLEVBQXRCLENBZGpCLEU7Ozs7Ozs7Ozs7O0FDVE8sSUFBSUUsTUFBSjs7QUFDUCxDQUFDLFVBQVVBLE1BQVYsRUFBa0I7QUFDZixXQUFTQyxLQUFULEdBQWlCO0FBQ2IsV0FBTztBQUNIQyxVQUFJLEVBQUVDLE1BQU0sQ0FBQ0MsU0FEVjtBQUVIQyxVQUFJLEVBQUVGLE1BQU0sQ0FBQ0MsU0FGVjtBQUdIRSxVQUFJLEVBQUVILE1BQU0sQ0FBQ0ksU0FIVjtBQUlIQyxVQUFJLEVBQUVMLE1BQU0sQ0FBQ0k7QUFKVixLQUFQO0FBTUg7O0FBQ0RQLFFBQU0sQ0FBQ0MsS0FBUCxHQUFlQSxLQUFmOztBQUNBLFdBQVNRLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3RCQSxVQUFNLENBQUNSLElBQVAsR0FBY0MsTUFBTSxDQUFDQyxTQUFyQjtBQUNBTSxVQUFNLENBQUNMLElBQVAsR0FBY0YsTUFBTSxDQUFDQyxTQUFyQjtBQUNBTSxVQUFNLENBQUNKLElBQVAsR0FBY0gsTUFBTSxDQUFDSSxTQUFyQjtBQUNBRyxVQUFNLENBQUNGLElBQVAsR0FBY0wsTUFBTSxDQUFDSSxTQUFyQjtBQUNIOztBQUNEUCxRQUFNLENBQUNTLFFBQVAsR0FBa0JBLFFBQWxCOztBQUNBLFdBQVNFLE9BQVQsQ0FBaUJELE1BQWpCLEVBQXlCO0FBQ3JCLFdBQU9BLE1BQU0sQ0FBQ1IsSUFBUCxLQUFnQkMsTUFBTSxDQUFDQyxTQUF2QixJQUNBTSxNQUFNLENBQUNMLElBQVAsS0FBZ0JGLE1BQU0sQ0FBQ0MsU0FEdkIsSUFFQU0sTUFBTSxDQUFDSixJQUFQLEtBQWdCSCxNQUFNLENBQUNJLFNBRnZCLElBR0FHLE1BQU0sQ0FBQ0YsSUFBUCxLQUFnQkwsTUFBTSxDQUFDSSxTQUg5QjtBQUlIOztBQUNEUCxRQUFNLENBQUNXLE9BQVAsR0FBaUJBLE9BQWpCOztBQUNBLFdBQVNDLFdBQVQsQ0FBcUJGLE1BQXJCLEVBQTZCRyxTQUE3QixFQUF3QztBQUFBLFFBQzVCWCxJQUQ0QixHQUNBUSxNQURBLENBQzVCUixJQUQ0QjtBQUFBLFFBQ3RCRyxJQURzQixHQUNBSyxNQURBLENBQ3RCTCxJQURzQjtBQUFBLFFBQ2hCQyxJQURnQixHQUNBSSxNQURBLENBQ2hCSixJQURnQjtBQUFBLFFBQ1ZFLElBRFUsR0FDQUUsTUFEQSxDQUNWRixJQURVO0FBRXBDSyxhQUFTLENBQUM5TixDQUFWLEdBQWNtTixJQUFkO0FBQ0FXLGFBQVMsQ0FBQzdOLENBQVYsR0FBY3FOLElBQWQ7QUFDQVEsYUFBUyxDQUFDbk0sS0FBVixHQUFrQjRMLElBQUksR0FBR0osSUFBekI7QUFDQVcsYUFBUyxDQUFDbE0sTUFBVixHQUFtQjZMLElBQUksR0FBR0gsSUFBMUI7QUFDSDs7QUFDREwsUUFBTSxDQUFDWSxXQUFQLEdBQXFCQSxXQUFyQjs7QUFDQSxXQUFTRSxLQUFULENBQWVKLE1BQWYsRUFBdUIzTixDQUF2QixFQUEwQjtBQUN0QixRQUFJMk4sTUFBTSxDQUFDUixJQUFQLEdBQWNuTixDQUFsQixFQUFxQjtBQUNqQjJOLFlBQU0sQ0FBQ1IsSUFBUCxHQUFjbk4sQ0FBZDtBQUNILEtBRkQsTUFHSyxJQUFJMk4sTUFBTSxDQUFDSixJQUFQLEdBQWN2TixDQUFsQixFQUFxQjtBQUN0QjJOLFlBQU0sQ0FBQ0osSUFBUCxHQUFjdk4sQ0FBZDtBQUNIO0FBQ0o7O0FBQ0RpTixRQUFNLENBQUNjLEtBQVAsR0FBZUEsS0FBZjs7QUFDQSxXQUFTQyxLQUFULENBQWVMLE1BQWYsRUFBdUIxTixDQUF2QixFQUEwQjtBQUN0QixRQUFJME4sTUFBTSxDQUFDTCxJQUFQLEdBQWNyTixDQUFsQixFQUFxQjtBQUNqQjBOLFlBQU0sQ0FBQ0wsSUFBUCxHQUFjck4sQ0FBZDtBQUNILEtBRkQsTUFHSyxJQUFJME4sTUFBTSxDQUFDRixJQUFQLEdBQWN4TixDQUFsQixFQUFxQjtBQUN0QjBOLFlBQU0sQ0FBQ0YsSUFBUCxHQUFjeE4sQ0FBZDtBQUNIO0FBQ0o7O0FBQ0RnTixRQUFNLENBQUNlLEtBQVAsR0FBZUEsS0FBZjs7QUFDQSxXQUFTQyxJQUFULENBQWNOLE1BQWQsRUFBc0IzTixDQUF0QixFQUF5QkMsQ0FBekIsRUFBNEI7QUFDeEIsUUFBSTBOLE1BQU0sQ0FBQ1IsSUFBUCxHQUFjbk4sQ0FBbEIsRUFBcUI7QUFDakIyTixZQUFNLENBQUNSLElBQVAsR0FBY25OLENBQWQ7QUFDSCxLQUZELE1BR0ssSUFBSTJOLE1BQU0sQ0FBQ0osSUFBUCxHQUFjdk4sQ0FBbEIsRUFBcUI7QUFDdEIyTixZQUFNLENBQUNKLElBQVAsR0FBY3ZOLENBQWQ7QUFDSDs7QUFDRCxRQUFJMk4sTUFBTSxDQUFDTCxJQUFQLEdBQWNyTixDQUFsQixFQUFxQjtBQUNqQjBOLFlBQU0sQ0FBQ0wsSUFBUCxHQUFjck4sQ0FBZDtBQUNILEtBRkQsTUFHSyxJQUFJME4sTUFBTSxDQUFDRixJQUFQLEdBQWN4TixDQUFsQixFQUFxQjtBQUN0QjBOLFlBQU0sQ0FBQ0YsSUFBUCxHQUFjeE4sQ0FBZDtBQUNIO0FBQ0o7O0FBQ0RnTixRQUFNLENBQUNnQixJQUFQLEdBQWNBLElBQWQ7O0FBQ0EsV0FBU0MsU0FBVCxDQUFtQlAsTUFBbkIsRUFBMkJRLEtBQTNCLEVBQWtDO0FBQUEsUUFDdEJuTyxDQURzQixHQUNibU8sS0FEYSxDQUN0Qm5PLENBRHNCO0FBQUEsUUFDbkJDLENBRG1CLEdBQ2JrTyxLQURhLENBQ25CbE8sQ0FEbUI7O0FBRTlCLFFBQUkwTixNQUFNLENBQUNSLElBQVAsR0FBY25OLENBQWxCLEVBQXFCO0FBQ2pCMk4sWUFBTSxDQUFDUixJQUFQLEdBQWNuTixDQUFkO0FBQ0gsS0FGRCxNQUdLLElBQUkyTixNQUFNLENBQUNKLElBQVAsR0FBY3ZOLENBQWxCLEVBQXFCO0FBQ3RCMk4sWUFBTSxDQUFDSixJQUFQLEdBQWN2TixDQUFkO0FBQ0g7O0FBQ0QsUUFBSTJOLE1BQU0sQ0FBQ0wsSUFBUCxHQUFjck4sQ0FBbEIsRUFBcUI7QUFDakIwTixZQUFNLENBQUNMLElBQVAsR0FBY3JOLENBQWQ7QUFDSCxLQUZELE1BR0ssSUFBSTBOLE1BQU0sQ0FBQ0YsSUFBUCxHQUFjeE4sQ0FBbEIsRUFBcUI7QUFDdEIwTixZQUFNLENBQUNGLElBQVAsR0FBY3hOLENBQWQ7QUFDSDtBQUNKOztBQUNEZ04sUUFBTSxDQUFDaUIsU0FBUCxHQUFtQkEsU0FBbkI7QUFDSCxDQWpGRCxFQWlGR2pCLE1BQU0sS0FBS0EsTUFBTSxHQUFHLEVBQWQsQ0FqRlQsRTs7Ozs7Ozs7Ozs7OztBQ0RPLElBQUl4TyxjQUFKOztBQUNQLENBQUMsVUFBVUEsY0FBVixFQUEwQjtBQUN2QixXQUFTeU8sS0FBVCxHQUFpQjtBQUNiLFdBQU87QUFDSGxPLHFCQUFlLEVBQUUsQ0FEZDtBQUVITixtQkFBYSxFQUFFLENBRlo7QUFHSEUscUJBQWUsRUFBRSxDQUhkO0FBSUhFLG9CQUFjLEVBQUUsQ0FKYjtBQUtIRyxpQkFBVyxFQUFFLENBTFY7QUFNSE4sZUFBUyxFQUFFLENBTlI7QUFPSEUsaUJBQVcsRUFBRSxDQVBWO0FBUUhFLGdCQUFVLEVBQUU7QUFSVCxLQUFQO0FBVUg7O0FBQ0ROLGdCQUFjLENBQUN5TyxLQUFmLEdBQXVCQSxLQUF2Qjs7QUFDQSxXQUFTVSxPQUFULENBQWlCeFAsRUFBakIsRUFBcUI7QUFDakIsV0FBT0EsRUFBRSxDQUFDTSxhQUFILEtBQXFCLENBQXJCLElBQ0FOLEVBQUUsQ0FBQ1EsZUFBSCxLQUF1QixDQUR2QixJQUVBUixFQUFFLENBQUNVLGNBQUgsS0FBc0IsQ0FGdEIsSUFHQVYsRUFBRSxDQUFDWSxlQUFILEtBQXVCLENBSHZCLElBSUFaLEVBQUUsQ0FBQ08sU0FBSCxLQUFpQixDQUpqQixJQUtBUCxFQUFFLENBQUNTLFdBQUgsS0FBbUIsQ0FMbkIsSUFNQVQsRUFBRSxDQUFDVyxVQUFILEtBQWtCLENBTmxCLElBT0FYLEVBQUUsQ0FBQ2EsV0FBSCxLQUFtQixDQVAxQjtBQVFIOztBQUNEUixnQkFBYyxDQUFDbVAsT0FBZixHQUF5QkEsT0FBekI7O0FBQ0EsV0FBU1EsZ0JBQVQsQ0FBMEJoUSxFQUExQixFQUE4QjtBQUMxQixXQUFPQSxFQUFFLENBQUNNLGFBQUgsS0FBcUIsQ0FBckIsSUFDQU4sRUFBRSxDQUFDUSxlQUFILEtBQXVCLENBRHZCLElBRUFSLEVBQUUsQ0FBQ1UsY0FBSCxLQUFzQixDQUZ0QixJQUdBVixFQUFFLENBQUNPLFNBQUgsS0FBaUIsQ0FIakIsSUFJQVAsRUFBRSxDQUFDUyxXQUFILEtBQW1CLENBSm5CLElBS0FULEVBQUUsQ0FBQ1csVUFBSCxLQUFrQixDQUxsQixJQU1BWCxFQUFFLENBQUNhLFdBQUgsS0FBbUIsQ0FOMUI7QUFPSDs7QUFDRFIsZ0JBQWMsQ0FBQzJQLGdCQUFmLEdBQWtDQSxnQkFBbEM7O0FBQ0EsV0FBU1YsUUFBVCxDQUFrQnRQLEVBQWxCLEVBQXNCO0FBQ2xCQSxNQUFFLENBQUNNLGFBQUgsR0FBbUIsQ0FBbkI7QUFDQU4sTUFBRSxDQUFDUSxlQUFILEdBQXFCLENBQXJCO0FBQ0FSLE1BQUUsQ0FBQ1UsY0FBSCxHQUFvQixDQUFwQjtBQUNBVixNQUFFLENBQUNZLGVBQUgsR0FBcUIsQ0FBckI7QUFDQVosTUFBRSxDQUFDTyxTQUFILEdBQWUsQ0FBZjtBQUNBUCxNQUFFLENBQUNTLFdBQUgsR0FBaUIsQ0FBakI7QUFDQVQsTUFBRSxDQUFDVyxVQUFILEdBQWdCLENBQWhCO0FBQ0FYLE1BQUUsQ0FBQ2EsV0FBSCxHQUFpQixDQUFqQjtBQUNIOztBQUNEUixnQkFBYyxDQUFDaVAsUUFBZixHQUEwQkEsUUFBMUI7O0FBQ0EsV0FBU1csSUFBVCxDQUFjQyxJQUFkLEVBQW9CQyxFQUFwQixFQUF3QjtBQUNwQkEsTUFBRSxDQUFDdlAsZUFBSCxHQUFxQnNQLElBQUksQ0FBQ3RQLGVBQTFCO0FBQ0F1UCxNQUFFLENBQUM3UCxhQUFILEdBQW1CNFAsSUFBSSxDQUFDNVAsYUFBeEI7QUFDQTZQLE1BQUUsQ0FBQzNQLGVBQUgsR0FBcUIwUCxJQUFJLENBQUMxUCxlQUExQjtBQUNBMlAsTUFBRSxDQUFDelAsY0FBSCxHQUFvQndQLElBQUksQ0FBQ3hQLGNBQXpCO0FBQ0F5UCxNQUFFLENBQUN0UCxXQUFILEdBQWlCcVAsSUFBSSxDQUFDclAsV0FBdEI7QUFDQXNQLE1BQUUsQ0FBQzVQLFNBQUgsR0FBZTJQLElBQUksQ0FBQzNQLFNBQXBCO0FBQ0E0UCxNQUFFLENBQUMxUCxXQUFILEdBQWlCeVAsSUFBSSxDQUFDelAsV0FBdEI7QUFDQTBQLE1BQUUsQ0FBQ3hQLFVBQUgsR0FBZ0J1UCxJQUFJLENBQUN2UCxVQUFyQjtBQUNIOztBQUNETixnQkFBYyxDQUFDNFAsSUFBZixHQUFzQkEsSUFBdEI7O0FBQ0EsV0FBU0csTUFBVCxDQUFnQkMsR0FBaEIsRUFBcUJDLEdBQXJCLEVBQTBCekssTUFBMUIsRUFBa0M7QUFDOUIsUUFBTWpGLGVBQWUsR0FBR3lQLEdBQUcsQ0FBQ3pQLGVBQUosR0FBc0IwUCxHQUFHLENBQUMxUCxlQUFsRDtBQUNBLFFBQU1OLGFBQWEsR0FBRytQLEdBQUcsQ0FBQy9QLGFBQUosR0FBb0JnUSxHQUFHLENBQUNoUSxhQUE5QztBQUNBLFFBQU1FLGVBQWUsR0FBRzZQLEdBQUcsQ0FBQzdQLGVBQUosR0FBc0I4UCxHQUFHLENBQUM5UCxlQUFsRDtBQUNBLFFBQU1FLGNBQWMsR0FBRzJQLEdBQUcsQ0FBQzNQLGNBQUosR0FBcUI0UCxHQUFHLENBQUM1UCxjQUFoRDtBQUNBLFFBQU1HLFdBQVcsR0FBR3dQLEdBQUcsQ0FBQ3pQLGVBQUosR0FBc0IwUCxHQUFHLENBQUN6UCxXQUExQixHQUF3Q3dQLEdBQUcsQ0FBQ3hQLFdBQWhFO0FBQ0EsUUFBTU4sU0FBUyxHQUFHOFAsR0FBRyxDQUFDL1AsYUFBSixHQUFvQmdRLEdBQUcsQ0FBQy9QLFNBQXhCLEdBQW9DOFAsR0FBRyxDQUFDOVAsU0FBMUQ7QUFDQSxRQUFNRSxXQUFXLEdBQUc0UCxHQUFHLENBQUM3UCxlQUFKLEdBQXNCOFAsR0FBRyxDQUFDN1AsV0FBMUIsR0FBd0M0UCxHQUFHLENBQUM1UCxXQUFoRTtBQUNBLFFBQU1FLFVBQVUsR0FBRzBQLEdBQUcsQ0FBQzNQLGNBQUosR0FBcUI0UCxHQUFHLENBQUMzUCxVQUF6QixHQUFzQzBQLEdBQUcsQ0FBQzFQLFVBQTdEO0FBQ0FrRixVQUFNLENBQUNqRixlQUFQLEdBQXlCQSxlQUF6QjtBQUNBaUYsVUFBTSxDQUFDdkYsYUFBUCxHQUF1QkEsYUFBdkI7QUFDQXVGLFVBQU0sQ0FBQ3JGLGVBQVAsR0FBeUJBLGVBQXpCO0FBQ0FxRixVQUFNLENBQUNuRixjQUFQLEdBQXdCQSxjQUF4QjtBQUNBbUYsVUFBTSxDQUFDaEYsV0FBUCxHQUFxQkEsV0FBckI7QUFDQWdGLFVBQU0sQ0FBQ3RGLFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0FzRixVQUFNLENBQUNwRixXQUFQLEdBQXFCQSxXQUFyQjtBQUNBb0YsVUFBTSxDQUFDbEYsVUFBUCxHQUFvQkEsVUFBcEI7QUFDSDs7QUFDRE4sZ0JBQWMsQ0FBQytQLE1BQWYsR0FBd0JBLE1BQXhCO0FBQ0gsQ0E1RUQsRUE0RUcvUCxjQUFjLEtBQUtBLGNBQWMsR0FBRyxFQUF0QixDQTVFakIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSE8sSUFBSXlCLE1BQUo7O0FBQ1AsQ0FBQyxVQUFVQSxNQUFWLEVBQWtCO0FBQ2YsV0FBU2dOLEtBQVQsR0FBaUI7QUFDYixXQUFPO0FBQ0gxTyxPQUFDLEVBQUUsQ0FEQTtBQUVIRCxPQUFDLEVBQUUsQ0FGQTtBQUdIc0osT0FBQyxFQUFFLENBSEE7QUFJSEMsT0FBQyxFQUFFLENBSkE7QUFLSDFILFFBQUUsRUFBRSxDQUxEO0FBTUhDLFFBQUUsRUFBRTtBQU5ELEtBQVA7QUFRSDs7QUFDREgsUUFBTSxDQUFDZ04sS0FBUCxHQUFlQSxLQUFmOztBQUNBLFdBQVNVLE9BQVQsQ0FBaUI5TixNQUFqQixFQUF5QjtBQUNyQixXQUFPQSxNQUFNLENBQUN0QixDQUFQLEtBQWEsQ0FBYixJQUNBc0IsTUFBTSxDQUFDdkIsQ0FBUCxLQUFhLENBRGIsSUFFQXVCLE1BQU0sQ0FBQytILENBQVAsS0FBYSxDQUZiLElBR0EvSCxNQUFNLENBQUNnSSxDQUFQLEtBQWEsQ0FIYixJQUlBaEksTUFBTSxDQUFDTSxFQUFQLEtBQWMsQ0FKZCxJQUtBTixNQUFNLENBQUNPLEVBQVAsS0FBYyxDQUxyQjtBQU1IOztBQUNESCxRQUFNLENBQUMwTixPQUFQLEdBQWlCQSxPQUFqQjs7QUFDQSxXQUFTRixRQUFULENBQWtCNU4sTUFBbEIsRUFBMEI7QUFDdEJBLFVBQU0sQ0FBQ3RCLENBQVAsR0FBVyxDQUFYO0FBQ0FzQixVQUFNLENBQUN2QixDQUFQLEdBQVcsQ0FBWDtBQUNBdUIsVUFBTSxDQUFDK0gsQ0FBUCxHQUFXLENBQVg7QUFDQS9ILFVBQU0sQ0FBQ2dJLENBQVAsR0FBVyxDQUFYO0FBQ0FoSSxVQUFNLENBQUNNLEVBQVAsR0FBWSxDQUFaO0FBQ0FOLFVBQU0sQ0FBQ08sRUFBUCxHQUFZLENBQVo7QUFDSDs7QUFDREgsUUFBTSxDQUFDd04sUUFBUCxHQUFrQkEsUUFBbEI7O0FBQ0EsV0FBU1csSUFBVCxDQUFjQyxJQUFkLEVBQW9CQyxFQUFwQixFQUF3QjtBQUNwQkEsTUFBRSxDQUFDL1AsQ0FBSCxHQUFPOFAsSUFBSSxDQUFDOVAsQ0FBWjtBQUNBK1AsTUFBRSxDQUFDaFEsQ0FBSCxHQUFPK1AsSUFBSSxDQUFDL1AsQ0FBWjtBQUNBZ1EsTUFBRSxDQUFDMUcsQ0FBSCxHQUFPeUcsSUFBSSxDQUFDekcsQ0FBWjtBQUNBMEcsTUFBRSxDQUFDekcsQ0FBSCxHQUFPd0csSUFBSSxDQUFDeEcsQ0FBWjtBQUNBeUcsTUFBRSxDQUFDbk8sRUFBSCxHQUFRa08sSUFBSSxDQUFDbE8sRUFBYjtBQUNBbU8sTUFBRSxDQUFDbE8sRUFBSCxHQUFRaU8sSUFBSSxDQUFDak8sRUFBYjtBQUNIOztBQUNESCxRQUFNLENBQUNtTyxJQUFQLEdBQWNBLElBQWQ7O0FBQ0EsV0FBU0csTUFBVCxDQUFnQkcsT0FBaEIsRUFBeUJDLE9BQXpCLEVBQWtDM0ssTUFBbEMsRUFBMEM7QUFDdEMsUUFBTXpGLENBQUMsR0FBR29RLE9BQU8sQ0FBQ3BRLENBQVIsR0FBWW1RLE9BQU8sQ0FBQ25RLENBQXBCLEdBQXdCb1EsT0FBTyxDQUFDclEsQ0FBUixHQUFZb1EsT0FBTyxDQUFDOUcsQ0FBdEQ7QUFDQSxRQUFNdEosQ0FBQyxHQUFHcVEsT0FBTyxDQUFDcFEsQ0FBUixHQUFZbVEsT0FBTyxDQUFDcFEsQ0FBcEIsR0FBd0JxUSxPQUFPLENBQUNyUSxDQUFSLEdBQVlvUSxPQUFPLENBQUM3RyxDQUF0RDtBQUNBLFFBQU1ELENBQUMsR0FBRytHLE9BQU8sQ0FBQy9HLENBQVIsR0FBWThHLE9BQU8sQ0FBQ25RLENBQXBCLEdBQXdCb1EsT0FBTyxDQUFDOUcsQ0FBUixHQUFZNkcsT0FBTyxDQUFDOUcsQ0FBdEQ7QUFDQSxRQUFNQyxDQUFDLEdBQUc4RyxPQUFPLENBQUMvRyxDQUFSLEdBQVk4RyxPQUFPLENBQUNwUSxDQUFwQixHQUF3QnFRLE9BQU8sQ0FBQzlHLENBQVIsR0FBWTZHLE9BQU8sQ0FBQzdHLENBQXREO0FBQ0EsUUFBTTFILEVBQUUsR0FBR3dPLE9BQU8sQ0FBQ3hPLEVBQVIsR0FBYXVPLE9BQU8sQ0FBQ25RLENBQXJCLEdBQXlCb1EsT0FBTyxDQUFDdk8sRUFBUixHQUFhc08sT0FBTyxDQUFDOUcsQ0FBOUMsR0FBa0Q4RyxPQUFPLENBQUN2TyxFQUFyRTtBQUNBLFFBQU1DLEVBQUUsR0FBR3VPLE9BQU8sQ0FBQ3hPLEVBQVIsR0FBYXVPLE9BQU8sQ0FBQ3BRLENBQXJCLEdBQXlCcVEsT0FBTyxDQUFDdk8sRUFBUixHQUFhc08sT0FBTyxDQUFDN0csQ0FBOUMsR0FBa0Q2RyxPQUFPLENBQUN0TyxFQUFyRTtBQUNBNEQsVUFBTSxDQUFDekYsQ0FBUCxHQUFXQSxDQUFYO0FBQ0F5RixVQUFNLENBQUMxRixDQUFQLEdBQVdBLENBQVg7QUFDQTBGLFVBQU0sQ0FBQzRELENBQVAsR0FBV0EsQ0FBWDtBQUNBNUQsVUFBTSxDQUFDNkQsQ0FBUCxHQUFXQSxDQUFYO0FBQ0E3RCxVQUFNLENBQUM3RCxFQUFQLEdBQVlBLEVBQVo7QUFDQTZELFVBQU0sQ0FBQzVELEVBQVAsR0FBWUEsRUFBWjtBQUNIOztBQUNESCxRQUFNLENBQUNzTyxNQUFQLEdBQWdCQSxNQUFoQjs7QUFDQSxXQUFTSyxjQUFULENBQXdCL08sTUFBeEIsRUFBZ0M7QUFDNUIsV0FBT0EsTUFBTSxDQUFDdEIsQ0FBUCxHQUFXc0IsTUFBTSxDQUFDZ0ksQ0FBbEIsR0FBc0JoSSxNQUFNLENBQUN2QixDQUFQLEdBQVd1QixNQUFNLENBQUMrSCxDQUEvQztBQUNIOztBQUNEM0gsUUFBTSxDQUFDMk8sY0FBUCxHQUF3QkEsY0FBeEI7O0FBQ0EsV0FBU0MsTUFBVCxDQUFnQmhQLE1BQWhCLEVBQXdCbUUsTUFBeEIsRUFBZ0M7QUFDNUIsUUFBSThLLFdBQVcsR0FBR0YsY0FBYyxDQUFDL08sTUFBRCxDQUFoQzs7QUFDQSxRQUFJaVAsV0FBVyxLQUFLLENBQXBCLEVBQXVCO0FBQ25COUssWUFBTSxDQUFDekYsQ0FBUCxHQUFXLENBQVg7QUFDQXlGLFlBQU0sQ0FBQzFGLENBQVAsR0FBVyxDQUFYO0FBQ0EwRixZQUFNLENBQUM0RCxDQUFQLEdBQVcsQ0FBWDtBQUNBNUQsWUFBTSxDQUFDNkQsQ0FBUCxHQUFXLENBQVg7QUFDQTdELFlBQU0sQ0FBQzdELEVBQVAsR0FBWSxDQUFDTixNQUFNLENBQUNNLEVBQXBCO0FBQ0E2RCxZQUFNLENBQUM1RCxFQUFQLEdBQVksQ0FBQ1AsTUFBTSxDQUFDTyxFQUFwQjtBQUNILEtBUEQsTUFRSztBQUNEME8saUJBQVcsR0FBRyxNQUFNQSxXQUFwQjtBQUNBOUssWUFBTSxDQUFDekYsQ0FBUCxHQUFXc0IsTUFBTSxDQUFDdEIsQ0FBUCxHQUFXdVEsV0FBdEI7QUFDQTlLLFlBQU0sQ0FBQzFGLENBQVAsR0FBVyxDQUFDdUIsTUFBTSxDQUFDdkIsQ0FBUixHQUFZd1EsV0FBdkI7QUFDQTlLLFlBQU0sQ0FBQzRELENBQVAsR0FBVyxDQUFDL0gsTUFBTSxDQUFDK0gsQ0FBUixHQUFZa0gsV0FBdkI7QUFDQTlLLFlBQU0sQ0FBQzZELENBQVAsR0FBV2hJLE1BQU0sQ0FBQ2dJLENBQVAsR0FBV2lILFdBQXRCO0FBQ0E5SyxZQUFNLENBQUM3RCxFQUFQLEdBQVksQ0FBQzZELE1BQU0sQ0FBQ3pGLENBQVIsR0FBWXNCLE1BQU0sQ0FBQ00sRUFBbkIsR0FBd0I2RCxNQUFNLENBQUM0RCxDQUFQLEdBQVcvSCxNQUFNLENBQUNPLEVBQXREO0FBQ0E0RCxZQUFNLENBQUM1RCxFQUFQLEdBQVksQ0FBQzRELE1BQU0sQ0FBQzFGLENBQVIsR0FBWXVCLE1BQU0sQ0FBQ00sRUFBbkIsR0FBd0I2RCxNQUFNLENBQUM2RCxDQUFQLEdBQVdoSSxNQUFNLENBQUNPLEVBQXREO0FBQ0g7QUFDSjs7QUFDREgsUUFBTSxDQUFDNE8sTUFBUCxHQUFnQkEsTUFBaEI7O0FBQ0EsV0FBU0UsY0FBVCxDQUF3QmxQLE1BQXhCLEVBQWdDcU8sS0FBaEMsRUFBdUNsSyxNQUF2QyxFQUErQztBQUFBLFFBQ25DakUsQ0FEbUMsR0FDMUJtTyxLQUQwQixDQUNuQ25PLENBRG1DO0FBQUEsUUFDaENDLENBRGdDLEdBQzFCa08sS0FEMEIsQ0FDaENsTyxDQURnQztBQUUzQ2dFLFVBQU0sQ0FBQ2pFLENBQVAsR0FBV0EsQ0FBQyxHQUFHRixNQUFNLENBQUN0QixDQUFYLEdBQWV5QixDQUFDLEdBQUdILE1BQU0sQ0FBQytILENBQTFCLEdBQThCL0gsTUFBTSxDQUFDTSxFQUFoRDtBQUNBNkQsVUFBTSxDQUFDaEUsQ0FBUCxHQUFXRCxDQUFDLEdBQUdGLE1BQU0sQ0FBQ3ZCLENBQVgsR0FBZTBCLENBQUMsR0FBR0gsTUFBTSxDQUFDZ0ksQ0FBMUIsR0FBOEJoSSxNQUFNLENBQUNPLEVBQWhEO0FBQ0g7O0FBQ0RILFFBQU0sQ0FBQzhPLGNBQVAsR0FBd0JBLGNBQXhCOztBQUNBLFdBQVNDLG1CQUFULENBQTZCblAsTUFBN0IsRUFBcUNxTyxLQUFyQyxFQUE0Q2xLLE1BQTVDLEVBQW9EO0FBQUEsUUFDeENqRSxDQUR3QyxHQUMvQm1PLEtBRCtCLENBQ3hDbk8sQ0FEd0M7QUFBQSxRQUNyQ0MsQ0FEcUMsR0FDL0JrTyxLQUQrQixDQUNyQ2xPLENBRHFDO0FBRWhEZ0UsVUFBTSxDQUFDakUsQ0FBUCxHQUFXQSxDQUFDLEdBQUdGLE1BQU0sQ0FBQ3RCLENBQVgsR0FBZXlCLENBQUMsR0FBR0gsTUFBTSxDQUFDK0gsQ0FBckM7QUFDQTVELFVBQU0sQ0FBQ2hFLENBQVAsR0FBV0QsQ0FBQyxHQUFHRixNQUFNLENBQUN2QixDQUFYLEdBQWUwQixDQUFDLEdBQUdILE1BQU0sQ0FBQ2dJLENBQXJDO0FBQ0g7O0FBQ0Q1SCxRQUFNLENBQUMrTyxtQkFBUCxHQUE2QkEsbUJBQTdCOztBQUNBLFdBQVNDLHFCQUFULENBQStCcFAsTUFBL0IsRUFBdUNxTyxLQUF2QyxFQUE4Q2xLLE1BQTlDLEVBQXNEO0FBQ2xELFFBQUk4SyxXQUFXLEdBQUdGLGNBQWMsQ0FBQy9PLE1BQUQsQ0FBaEM7O0FBQ0EsUUFBSWlQLFdBQVcsS0FBSyxDQUFwQixFQUF1QjtBQUNuQjlLLFlBQU0sQ0FBQ2pFLENBQVAsR0FBVyxDQUFDRixNQUFNLENBQUNNLEVBQW5CO0FBQ0E2RCxZQUFNLENBQUNoRSxDQUFQLEdBQVcsQ0FBQ0gsTUFBTSxDQUFDTyxFQUFuQjtBQUNILEtBSEQsTUFJSztBQUNEME8saUJBQVcsR0FBRyxJQUFJQSxXQUFsQjtBQURDLFVBRU8vTyxDQUZQLEdBRWdCbU8sS0FGaEIsQ0FFT25PLENBRlA7QUFBQSxVQUVVQyxDQUZWLEdBRWdCa08sS0FGaEIsQ0FFVWxPLENBRlY7QUFHRGdFLFlBQU0sQ0FBQ2pFLENBQVAsR0FBVytPLFdBQVcsSUFBSWpQLE1BQU0sQ0FBQytILENBQVAsSUFBWS9ILE1BQU0sQ0FBQ08sRUFBUCxHQUFZSixDQUF4QixJQUE2QkgsTUFBTSxDQUFDZ0ksQ0FBUCxJQUFZOUgsQ0FBQyxHQUFHRixNQUFNLENBQUNNLEVBQXZCLENBQWpDLENBQXRCO0FBQ0E2RCxZQUFNLENBQUNoRSxDQUFQLEdBQVc4TyxXQUFXLElBQUlqUCxNQUFNLENBQUN0QixDQUFQLElBQVl5QixDQUFDLEdBQUdILE1BQU0sQ0FBQ08sRUFBdkIsSUFBNkJQLE1BQU0sQ0FBQ3ZCLENBQVAsSUFBWXVCLE1BQU0sQ0FBQ00sRUFBUCxHQUFZSixDQUF4QixDQUFqQyxDQUF0QjtBQUNIO0FBQ0o7O0FBQ0RFLFFBQU0sQ0FBQ2dQLHFCQUFQLEdBQStCQSxxQkFBL0I7O0FBQ0EsV0FBU0MsZUFBVCxDQUF5QnJQLE1BQXpCLEVBQWlDNk4sTUFBakMsRUFBeUMxSixNQUF6QyxFQUFpRDtBQUFBLFFBQ3JDekYsQ0FEcUMsR0FDYnNCLE1BRGEsQ0FDckN0QixDQURxQztBQUFBLFFBQ2xDRCxDQURrQyxHQUNidUIsTUFEYSxDQUNsQ3ZCLENBRGtDO0FBQUEsUUFDL0JzSixDQUQrQixHQUNiL0gsTUFEYSxDQUMvQitILENBRCtCO0FBQUEsUUFDNUJDLENBRDRCLEdBQ2JoSSxNQURhLENBQzVCZ0ksQ0FENEI7QUFBQSxRQUN6QjFILEVBRHlCLEdBQ2JOLE1BRGEsQ0FDekJNLEVBRHlCO0FBQUEsUUFDckJDLEVBRHFCLEdBQ2JQLE1BRGEsQ0FDckJPLEVBRHFCO0FBRTdDLFFBQU0rTyxFQUFFLEdBQUd6QixNQUFNLENBQUMzTixDQUFsQjtBQUNBLFFBQU1xUCxFQUFFLEdBQUcxQixNQUFNLENBQUMxTixDQUFsQjtBQUNBLFFBQU1xUCxFQUFFLEdBQUdGLEVBQUUsR0FBR3pCLE1BQU0sQ0FBQ2hNLEtBQXZCO0FBQ0EsUUFBTTROLEVBQUUsR0FBR0YsRUFBRSxHQUFHMUIsTUFBTSxDQUFDL0wsTUFBdkI7QUFDQSxRQUFNNE4sR0FBRyxHQUFHSixFQUFFLEdBQUc1USxDQUFMLEdBQVM2USxFQUFFLEdBQUd4SCxDQUFkLEdBQWtCekgsRUFBOUI7QUFDQSxRQUFNcVAsR0FBRyxHQUFHTCxFQUFFLEdBQUc3USxDQUFMLEdBQVM4USxFQUFFLEdBQUd2SCxDQUFkLEdBQWtCekgsRUFBOUI7QUFDQSxRQUFNcVAsR0FBRyxHQUFHSixFQUFFLEdBQUc5USxDQUFMLEdBQVM2USxFQUFFLEdBQUd4SCxDQUFkLEdBQWtCekgsRUFBOUI7QUFDQSxRQUFNdVAsR0FBRyxHQUFHTCxFQUFFLEdBQUcvUSxDQUFMLEdBQVM4USxFQUFFLEdBQUd2SCxDQUFkLEdBQWtCekgsRUFBOUI7QUFDQSxRQUFNdVAsR0FBRyxHQUFHTixFQUFFLEdBQUc5USxDQUFMLEdBQVMrUSxFQUFFLEdBQUcxSCxDQUFkLEdBQWtCekgsRUFBOUI7QUFDQSxRQUFNeVAsR0FBRyxHQUFHUCxFQUFFLEdBQUcvUSxDQUFMLEdBQVNnUixFQUFFLEdBQUd6SCxDQUFkLEdBQWtCekgsRUFBOUI7QUFDQSxRQUFNeVAsR0FBRyxHQUFHVixFQUFFLEdBQUc1USxDQUFMLEdBQVMrUSxFQUFFLEdBQUcxSCxDQUFkLEdBQWtCekgsRUFBOUI7QUFDQSxRQUFNMlAsR0FBRyxHQUFHWCxFQUFFLEdBQUc3USxDQUFMLEdBQVNnUixFQUFFLEdBQUd6SCxDQUFkLEdBQWtCekgsRUFBOUI7QUFDQSxRQUFJbU0sSUFBSSxHQUFHZ0QsR0FBWDs7QUFDQSxRQUFJaEQsSUFBSSxHQUFHa0QsR0FBWCxFQUFnQjtBQUNabEQsVUFBSSxHQUFHa0QsR0FBUDtBQUNIOztBQUNELFFBQUlsRCxJQUFJLEdBQUdvRCxHQUFYLEVBQWdCO0FBQ1pwRCxVQUFJLEdBQUdvRCxHQUFQO0FBQ0g7O0FBQ0QsUUFBSXBELElBQUksR0FBR3NELEdBQVgsRUFBZ0I7QUFDWnRELFVBQUksR0FBR3NELEdBQVA7QUFDSDs7QUFDRCxRQUFJbkQsR0FBRyxHQUFHOEMsR0FBVjs7QUFDQSxRQUFJOUMsR0FBRyxHQUFHZ0QsR0FBVixFQUFlO0FBQ1hoRCxTQUFHLEdBQUdnRCxHQUFOO0FBQ0g7O0FBQ0QsUUFBSWhELEdBQUcsR0FBR2tELEdBQVYsRUFBZTtBQUNYbEQsU0FBRyxHQUFHa0QsR0FBTjtBQUNIOztBQUNELFFBQUlsRCxHQUFHLEdBQUdvRCxHQUFWLEVBQWU7QUFDWHBELFNBQUcsR0FBR29ELEdBQU47QUFDSDs7QUFDRCxRQUFJQyxLQUFLLEdBQUdSLEdBQVo7O0FBQ0EsUUFBSVEsS0FBSyxHQUFHTixHQUFaLEVBQWlCO0FBQ2JNLFdBQUssR0FBR04sR0FBUjtBQUNIOztBQUNELFFBQUlNLEtBQUssR0FBR0osR0FBWixFQUFpQjtBQUNiSSxXQUFLLEdBQUdKLEdBQVI7QUFDSDs7QUFDRCxRQUFJSSxLQUFLLEdBQUdGLEdBQVosRUFBaUI7QUFDYkUsV0FBSyxHQUFHRixHQUFSO0FBQ0g7O0FBQ0QsUUFBSUcsTUFBTSxHQUFHUixHQUFiOztBQUNBLFFBQUlRLE1BQU0sR0FBR04sR0FBYixFQUFrQjtBQUNkTSxZQUFNLEdBQUdOLEdBQVQ7QUFDSDs7QUFDRCxRQUFJTSxNQUFNLEdBQUdKLEdBQWIsRUFBa0I7QUFDZEksWUFBTSxHQUFHSixHQUFUO0FBQ0g7O0FBQ0QsUUFBSUksTUFBTSxHQUFHRixHQUFiLEVBQWtCO0FBQ2RFLFlBQU0sR0FBR0YsR0FBVDtBQUNIOztBQUNEOUwsVUFBTSxDQUFDakUsQ0FBUCxHQUFXd00sSUFBWDtBQUNBdkksVUFBTSxDQUFDaEUsQ0FBUCxHQUFXME0sR0FBWDtBQUNBMUksVUFBTSxDQUFDdEMsS0FBUCxHQUFlcU8sS0FBSyxHQUFHeEQsSUFBdkI7QUFDQXZJLFVBQU0sQ0FBQ3JDLE1BQVAsR0FBZ0JxTyxNQUFNLEdBQUd0RCxHQUF6QjtBQUNIOztBQUNEek0sUUFBTSxDQUFDaVAsZUFBUCxHQUF5QkEsZUFBekI7QUFDSCxDQXJLRCxFQXFLR2pQLE1BQU0sS0FBS0EsTUFBTSxHQUFHLEVBQWQsQ0FyS1QsRTs7Ozs7Ozs7Ozs7OztBQ0RPLElBQUlwQyxLQUFKOztBQUNQLENBQUMsVUFBVUEsS0FBVixFQUFpQjtBQUNkLFdBQVNvUCxLQUFULEdBQWlCO0FBQ2IsV0FBTztBQUFFbE4sT0FBQyxFQUFFLENBQUw7QUFBUUMsT0FBQyxFQUFFO0FBQVgsS0FBUDtBQUNIOztBQUNEbkMsT0FBSyxDQUFDb1AsS0FBTixHQUFjQSxLQUFkOztBQUNBLFdBQVN6TixNQUFULENBQWdCME8sS0FBaEIsRUFBdUI7QUFBQSxRQUNYbk8sQ0FEVyxHQUNGbU8sS0FERSxDQUNYbk8sQ0FEVztBQUFBLFFBQ1JDLENBRFEsR0FDRmtPLEtBREUsQ0FDUmxPLENBRFE7QUFFbkIsV0FBT0ssSUFBSSxDQUFDNFAsSUFBTCxDQUFVbFEsQ0FBQyxHQUFHQSxDQUFKLEdBQVFDLENBQUMsR0FBR0EsQ0FBdEIsQ0FBUDtBQUNIOztBQUNEbkMsT0FBSyxDQUFDMkIsTUFBTixHQUFlQSxNQUFmOztBQUNBLFdBQVMwUSxLQUFULENBQWVoQyxLQUFmLEVBQXNCO0FBQ2xCLFdBQU83TixJQUFJLENBQUM4UCxLQUFMLENBQVdqQyxLQUFLLENBQUNsTyxDQUFqQixFQUFvQmtPLEtBQUssQ0FBQ25PLENBQTFCLENBQVA7QUFDSDs7QUFDRGxDLE9BQUssQ0FBQ3FTLEtBQU4sR0FBY0EsS0FBZDs7QUFDQSxXQUFTdkMsT0FBVCxDQUFpQk8sS0FBakIsRUFBd0I7QUFDcEIsV0FBT0EsS0FBSyxDQUFDbk8sQ0FBTixLQUFZLENBQVosSUFBaUJtTyxLQUFLLENBQUNsTyxDQUFOLEtBQVksQ0FBcEM7QUFDSDs7QUFDRG5DLE9BQUssQ0FBQzhQLE9BQU4sR0FBZ0JBLE9BQWhCOztBQUNBLFdBQVN5QyxNQUFULENBQWdCQyxNQUFoQixFQUF3QnpTLE1BQXhCLEVBQWdDO0FBQzVCLFdBQU95UyxNQUFNLENBQUN0USxDQUFQLEtBQWFuQyxNQUFNLENBQUNtQyxDQUFwQixJQUF5QnNRLE1BQU0sQ0FBQ3JRLENBQVAsS0FBYXBDLE1BQU0sQ0FBQ29DLENBQXBEO0FBQ0g7O0FBQ0RuQyxPQUFLLENBQUN1UyxNQUFOLEdBQWVBLE1BQWY7O0FBQ0EsV0FBUzNDLFFBQVQsQ0FBa0JTLEtBQWxCLEVBQXlCO0FBQ3JCQSxTQUFLLENBQUNuTyxDQUFOLEdBQVUsQ0FBVjtBQUNBbU8sU0FBSyxDQUFDbE8sQ0FBTixHQUFVLENBQVY7QUFDSDs7QUFDRG5DLE9BQUssQ0FBQzRQLFFBQU4sR0FBaUJBLFFBQWpCOztBQUNBLFdBQVNXLElBQVQsQ0FBY2tDLE1BQWQsRUFBc0JDLE1BQXRCLEVBQThCO0FBQzFCQSxVQUFNLENBQUN4USxDQUFQLEdBQVd1USxNQUFNLENBQUN2USxDQUFsQjtBQUNBd1EsVUFBTSxDQUFDdlEsQ0FBUCxHQUFXc1EsTUFBTSxDQUFDdFEsQ0FBbEI7QUFDSDs7QUFDRG5DLE9BQUssQ0FBQ3VRLElBQU4sR0FBYUEsSUFBYjs7QUFDQSxXQUFTb0MsU0FBVCxDQUFtQnRDLEtBQW5CLEVBQTBCdUMsU0FBMUIsRUFBcUM7QUFDakMsUUFBSW5JLEtBQUssR0FBRzlJLE1BQU0sQ0FBQzBPLEtBQUQsQ0FBbEI7O0FBQ0EsUUFBSTVGLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDWEEsV0FBSyxHQUFHbUksU0FBUyxHQUFHbkksS0FBcEI7QUFDQTRGLFdBQUssQ0FBQ25PLENBQU4sSUFBV3VJLEtBQVg7QUFDQTRGLFdBQUssQ0FBQ2xPLENBQU4sSUFBV3NJLEtBQVg7QUFDSDtBQUNKOztBQUNEekssT0FBSyxDQUFDMlMsU0FBTixHQUFrQkEsU0FBbEI7O0FBQ0EsV0FBU0UsUUFBVCxDQUFrQkwsTUFBbEIsRUFBMEJ6UyxNQUExQixFQUFrQztBQUM5QixRQUFNK1MsRUFBRSxHQUFHTixNQUFNLENBQUN0USxDQUFQLEdBQVduQyxNQUFNLENBQUNtQyxDQUE3QjtBQUNBLFFBQU02USxFQUFFLEdBQUdQLE1BQU0sQ0FBQ3JRLENBQVAsR0FBV3BDLE1BQU0sQ0FBQ29DLENBQTdCO0FBQ0EsV0FBT0ssSUFBSSxDQUFDNFAsSUFBTCxDQUFVVSxFQUFFLEdBQUdBLEVBQUwsR0FBVUMsRUFBRSxHQUFHQSxFQUF6QixDQUFQO0FBQ0g7O0FBQ0QvUyxPQUFLLENBQUM2UyxRQUFOLEdBQWlCQSxRQUFqQjs7QUFDQSxXQUFTRyxXQUFULENBQXFCcEcsS0FBckIsRUFBNEJDLEdBQTVCLEVBQWlDcEMsS0FBakMsRUFBd0N0RSxNQUF4QyxFQUFnRDtBQUM1Q0EsVUFBTSxDQUFDakUsQ0FBUCxHQUFXMEssS0FBSyxDQUFDMUssQ0FBTixHQUFVdUksS0FBSyxJQUFJb0MsR0FBRyxDQUFDM0ssQ0FBSixHQUFRMEssS0FBSyxDQUFDMUssQ0FBbEIsQ0FBMUI7QUFDQWlFLFVBQU0sQ0FBQ2hFLENBQVAsR0FBV3lLLEtBQUssQ0FBQ3pLLENBQU4sR0FBVXNJLEtBQUssSUFBSW9DLEdBQUcsQ0FBQzFLLENBQUosR0FBUXlLLEtBQUssQ0FBQ3pLLENBQWxCLENBQTFCO0FBQ0g7O0FBQ0RuQyxPQUFLLENBQUNnVCxXQUFOLEdBQW9CQSxXQUFwQjs7QUFDQSxXQUFTQyxLQUFULENBQWU1QyxLQUFmLEVBQXNCMU8sTUFBdEIsRUFBOEIwUSxLQUE5QixFQUFxQztBQUNqQ2hDLFNBQUssQ0FBQ25PLENBQU4sR0FBVVAsTUFBTSxHQUFHYSxJQUFJLENBQUM2SCxHQUFMLENBQVNnSSxLQUFULENBQW5CO0FBQ0FoQyxTQUFLLENBQUNsTyxDQUFOLEdBQVVSLE1BQU0sR0FBR2EsSUFBSSxDQUFDOEgsR0FBTCxDQUFTK0gsS0FBVCxDQUFuQjtBQUNIOztBQUNEclMsT0FBSyxDQUFDaVQsS0FBTixHQUFjQSxLQUFkO0FBQ0gsQ0F6REQsRUF5REdqVCxLQUFLLEtBQUtBLEtBQUssR0FBRyxFQUFiLENBekRSLEU7Ozs7Ozs7Ozs7Ozs7QUNETyxJQUFJa1QsU0FBSjs7QUFDUCxDQUFDLFVBQVVBLFNBQVYsRUFBcUI7QUFDbEIsV0FBUzlELEtBQVQsR0FBaUI7QUFDYixXQUFPO0FBQ0hsTixPQUFDLEVBQUUsQ0FEQTtBQUNHQyxPQUFDLEVBQUUsQ0FETjtBQUNTMEIsV0FBSyxFQUFFLENBRGhCO0FBQ21CQyxZQUFNLEVBQUU7QUFEM0IsS0FBUDtBQUdIOztBQUNEb1AsV0FBUyxDQUFDOUQsS0FBVixHQUFrQkEsS0FBbEI7O0FBQ0EsV0FBU1EsUUFBVCxDQUFrQkksU0FBbEIsRUFBNkI7QUFDekJBLGFBQVMsQ0FBQzlOLENBQVYsR0FBYyxDQUFkO0FBQ0E4TixhQUFTLENBQUM3TixDQUFWLEdBQWMsQ0FBZDtBQUNBNk4sYUFBUyxDQUFDbk0sS0FBVixHQUFrQixDQUFsQjtBQUNBbU0sYUFBUyxDQUFDbE0sTUFBVixHQUFtQixDQUFuQjtBQUNIOztBQUNEb1AsV0FBUyxDQUFDdEQsUUFBVixHQUFxQkEsUUFBckI7O0FBQ0EsV0FBU0UsT0FBVCxDQUFpQkUsU0FBakIsRUFBNEI7QUFDeEIsV0FBT0EsU0FBUyxDQUFDbk0sS0FBVixLQUFvQixDQUFwQixJQUF5Qm1NLFNBQVMsQ0FBQ2xNLE1BQVYsS0FBcUIsQ0FBckQ7QUFDSDs7QUFDRG9QLFdBQVMsQ0FBQ3BELE9BQVYsR0FBb0JBLE9BQXBCOztBQUNBLFdBQVNxRCxRQUFULENBQWtCbkQsU0FBbEIsRUFBNkJLLEtBQTdCLEVBQW9DO0FBQ2hDLFdBQU9MLFNBQVMsQ0FBQzlOLENBQVYsR0FBY21PLEtBQUssQ0FBQ25PLENBQXBCLElBQ0E4TixTQUFTLENBQUM5TixDQUFWLEdBQWM4TixTQUFTLENBQUNuTSxLQUF4QixHQUFnQ3dNLEtBQUssQ0FBQ25PLENBRHRDLElBRUE4TixTQUFTLENBQUM3TixDQUFWLEdBQWNrTyxLQUFLLENBQUNsTyxDQUZwQixJQUdBNk4sU0FBUyxDQUFDN04sQ0FBVixHQUFjNk4sU0FBUyxDQUFDbE0sTUFBeEIsR0FBaUN1TSxLQUFLLENBQUNsTyxDQUg5QztBQUlIOztBQUNEK1EsV0FBUyxDQUFDQyxRQUFWLEdBQXFCQSxRQUFyQjtBQUNILENBekJELEVBeUJHRCxTQUFTLEtBQUtBLFNBQVMsR0FBRyxFQUFqQixDQXpCWixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0EsSUFBTXJELE1BQU0sR0FBR3FELHNEQUFBLEVBQWY7QUFDTyxJQUFJRSx5QkFBSjs7QUFDUCxDQUFDLFVBQVVBLHlCQUFWLEVBQXFDO0FBQ2xDLFdBQVM3TixNQUFULENBQWdCMUMsS0FBaEIsRUFBdUJZLE1BQXZCLEVBQStCO0FBQUEsUUFDbkI0UCxHQURtQixHQUNYeFEsS0FEVyxDQUNuQndRLEdBRG1COztBQUUzQixRQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNOO0FBQ0g7O0FBQ0QsUUFBTXJHLFFBQVEsR0FBR3ZKLE1BQU0sQ0FBQ3dFLFNBQVAsQ0FBaUI0RCxHQUFqQixDQUFxQndILEdBQXJCLENBQWpCOztBQUNBLFFBQUksRUFBQ3JHLFFBQUQsYUFBQ0EsUUFBRCxlQUFDQSxRQUFRLENBQUVuSyxLQUFYLENBQUosRUFBc0I7QUFDbEI7QUFDSDs7QUFDRCxRQUFNWixPQUFPLEdBQUd3QixNQUFNLENBQUMrQixRQUFQLENBQWdCbkMsVUFBaEIsRUFBaEI7QUFUMkIsUUFVbkI1QixjQVZtQixHQVVBUSxPQVZBLENBVW5CUixjQVZtQjs7QUFXM0IsUUFBSUEsY0FBYyxDQUFDUCxlQUFmLElBQWtDLENBQXRDLEVBQXlDO0FBQ3JDO0FBQ0g7O0FBYjBCLFFBY25CYyxNQWRtQixHQWNSQyxPQWRRLENBY25CRCxNQWRtQjtBQWUzQixRQUFNK0YsUUFBUSxHQUFHdEUsTUFBTSxDQUFDc0UsUUFBeEI7QUFDQSxRQUFNdUwsU0FBUyxHQUFHdkwsUUFBUSxDQUFDMUUsVUFBVCxFQUFsQjtBQWhCMkIsMEJBaUJEMkosUUFBUSxDQUFDbkssS0FqQlI7QUFBQSxRQWlCbkJnQixLQWpCbUIsbUJBaUJuQkEsS0FqQm1CO0FBQUEsUUFpQlpDLE1BakJZLG1CQWlCWkEsTUFqQlk7QUFrQjNCLFFBQU01QixDQUFDLEdBQUdvRyxpREFBQSxDQUFXekYsS0FBWCxFQUFrQmdCLEtBQWxCLENBQVY7QUFDQSxRQUFNMUIsQ0FBQyxHQUFHbUcsaURBQUEsQ0FBV3pGLEtBQVgsRUFBa0JpQixNQUFsQixDQUFWOztBQUNBLFFBQUluRCxzRUFBQSxDQUFnQ2MsY0FBaEMsQ0FBSixFQUFxRDtBQUNqRDZSLGVBQVMsQ0FBQ3JQLFlBQVYsQ0FBdUJqQyxNQUFNLENBQUN0QixDQUE5QixFQUFpQ3NCLE1BQU0sQ0FBQ3ZCLENBQXhDLEVBQTJDdUIsTUFBTSxDQUFDK0gsQ0FBbEQsRUFBcUQvSCxNQUFNLENBQUNnSSxDQUE1RCxFQUErRGhJLE1BQU0sQ0FBQ00sRUFBdEUsRUFBMEVOLE1BQU0sQ0FBQ08sRUFBakY7QUFDQStRLGVBQVMsQ0FBQ0MsV0FBVixHQUF3QjlSLGNBQWMsQ0FBQ1AsZUFBdkM7QUFDQW9TLGVBQVMsQ0FBQ0UsU0FBVixDQUFvQnhHLFFBQVEsQ0FBQ25LLEtBQTdCLEVBQW9DWCxDQUFwQyxFQUF1Q0MsQ0FBdkM7QUFDSCxLQUpELE1BS0s7QUFDRCxVQUFNc1IsYUFBYSxHQUFHMUwsUUFBUSxDQUFDMkwsbUJBQVQsRUFBdEI7QUFDQTdELFlBQU0sQ0FBQzNOLENBQVAsR0FBV0EsQ0FBWDtBQUNBMk4sWUFBTSxDQUFDMU4sQ0FBUCxHQUFXQSxDQUFYO0FBQ0EwTixZQUFNLENBQUNoTSxLQUFQLEdBQWVBLEtBQWY7QUFDQWdNLFlBQU0sQ0FBQy9MLE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0ExQixtRUFBQSxDQUF1QkosTUFBdkIsRUFBK0I2TixNQUEvQixFQUF1Q0EsTUFBdkM7O0FBQ0EsVUFBSXFELHdEQUFBLENBQWtCckQsTUFBbEIsQ0FBSixFQUErQjtBQUMzQjtBQUNIOztBQUNENEQsbUJBQWEsQ0FBQ3hQLFlBQWQ7QUFDQXdQLG1CQUFhLENBQUN2UCxTQUFkLENBQXdCMkwsTUFBTSxDQUFDM04sQ0FBL0IsRUFBa0MyTixNQUFNLENBQUMxTixDQUF6QyxFQUE0QzBOLE1BQU0sQ0FBQ2hNLEtBQW5ELEVBQTBEZ00sTUFBTSxDQUFDL0wsTUFBakU7QUFDQTJQLG1CQUFhLENBQUN4UCxZQUFkLENBQTJCakMsTUFBTSxDQUFDdEIsQ0FBbEMsRUFBcUNzQixNQUFNLENBQUN2QixDQUE1QyxFQUErQ3VCLE1BQU0sQ0FBQytILENBQXRELEVBQXlEL0gsTUFBTSxDQUFDZ0ksQ0FBaEUsRUFBbUVoSSxNQUFNLENBQUNNLEVBQTFFLEVBQThFTixNQUFNLENBQUNPLEVBQXJGO0FBQ0FrUixtQkFBYSxDQUFDRCxTQUFkLENBQXdCeEcsUUFBUSxDQUFDbkssS0FBakMsRUFBd0NYLENBQXhDLEVBQTJDQyxDQUEzQztBQUNBLFVBQU13UixTQUFTLEdBQUdGLGFBQWEsQ0FBQ0csWUFBZCxDQUEyQi9ELE1BQU0sQ0FBQzNOLENBQWxDLEVBQXFDMk4sTUFBTSxDQUFDMU4sQ0FBNUMsRUFBK0MwTixNQUFNLENBQUNoTSxLQUF0RCxFQUE2RGdNLE1BQU0sQ0FBQy9MLE1BQXBFLENBQWxCO0FBQ0EsVUFBTStQLEVBQUUsR0FBR3BTLGNBQWMsQ0FBQ2IsYUFBMUI7QUFDQSxVQUFNa1QsRUFBRSxHQUFHclMsY0FBYyxDQUFDWCxlQUExQjtBQUNBLFVBQU1pVCxFQUFFLEdBQUd0UyxjQUFjLENBQUNULGNBQTFCO0FBQ0EsVUFBTWdULEVBQUUsR0FBR3ZTLGNBQWMsQ0FBQ1AsZUFBMUI7QUFDQSxVQUFNK1MsRUFBRSxHQUFHeFMsY0FBYyxDQUFDWixTQUExQjtBQUNBLFVBQU1xVCxFQUFFLEdBQUd6UyxjQUFjLENBQUNWLFdBQTFCO0FBQ0EsVUFBTW9ULEVBQUUsR0FBRzFTLGNBQWMsQ0FBQ1IsVUFBMUI7QUFDQSxVQUFNbVQsRUFBRSxHQUFHM1MsY0FBYyxDQUFDTixXQUExQjtBQXRCQyxVQXVCT2tULElBdkJQLEdBdUJnQlYsU0F2QmhCLENBdUJPVSxJQXZCUDtBQUFBLFVBd0JPMVMsTUF4QlAsR0F3QmtCMFMsSUF4QmxCLENBd0JPMVMsTUF4QlA7O0FBeUJELFdBQUssSUFBSUQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0MsTUFBcEIsR0FBNkI7QUFDekIwUyxZQUFJLENBQUMzUyxDQUFELENBQUosR0FBVTJTLElBQUksQ0FBQzNTLENBQUMsRUFBRixDQUFKLEdBQVltUyxFQUFaLEdBQWlCSSxFQUEzQjtBQUNBSSxZQUFJLENBQUMzUyxDQUFELENBQUosR0FBVTJTLElBQUksQ0FBQzNTLENBQUMsRUFBRixDQUFKLEdBQVlvUyxFQUFaLEdBQWlCSSxFQUEzQjtBQUNBRyxZQUFJLENBQUMzUyxDQUFELENBQUosR0FBVTJTLElBQUksQ0FBQzNTLENBQUMsRUFBRixDQUFKLEdBQVlxUyxFQUFaLEdBQWlCSSxFQUEzQjtBQUNBRSxZQUFJLENBQUMzUyxDQUFELENBQUosR0FBVTJTLElBQUksQ0FBQzNTLENBQUMsRUFBRixDQUFKLEdBQVlzUyxFQUFaLEdBQWlCSSxFQUEzQjtBQUNIOztBQUNEWCxtQkFBYSxDQUFDYSxZQUFkLENBQTJCWCxTQUEzQixFQUFzQzlELE1BQU0sQ0FBQzNOLENBQTdDLEVBQWdEMk4sTUFBTSxDQUFDMU4sQ0FBdkQ7QUFDQW1SLGVBQVMsQ0FBQ3JQLFlBQVY7QUFDQXFQLGVBQVMsQ0FBQ0MsV0FBVixHQUF3QixDQUF4QjtBQUNBRCxlQUFTLENBQUNFLFNBQVYsQ0FBb0JDLGFBQWEsQ0FBQzdQLE1BQWxDLEVBQTBDaU0sTUFBTSxDQUFDM04sQ0FBakQsRUFBb0QyTixNQUFNLENBQUMxTixDQUEzRCxFQUE4RDBOLE1BQU0sQ0FBQ2hNLEtBQXJFLEVBQTRFZ00sTUFBTSxDQUFDL0wsTUFBbkYsRUFBMkYrTCxNQUFNLENBQUMzTixDQUFsRyxFQUFxRzJOLE1BQU0sQ0FBQzFOLENBQTVHLEVBQStHME4sTUFBTSxDQUFDaE0sS0FBdEgsRUFBNkhnTSxNQUFNLENBQUMvTCxNQUFwSTtBQUNBaUUsY0FBUSxDQUFDd00sb0JBQVQsQ0FBOEJkLGFBQTlCO0FBQ0g7QUFDSjs7QUFDREwsMkJBQXlCLENBQUM3TixNQUExQixHQUFtQ0EsTUFBbkM7O0FBQ0EsV0FBU2tCLElBQVQsQ0FBY2hELE1BQWQsRUFBc0I7QUFDbEIrUSwyREFBQSxDQUFvQi9RLE1BQXBCO0FBQ0FBLFVBQU0sQ0FBQ2lELFVBQVAsQ0FBa0JuQixNQUFsQixDQUF5Qm9CLEdBQXpCLENBQTZCOE4seUNBQTdCLEVBQW9DbFAsTUFBcEM7QUFDSDs7QUFDRDZOLDJCQUF5QixDQUFDM00sSUFBMUIsR0FBaUNBLElBQWpDO0FBQ0gsQ0F0RUQsRUFzRUcyTSx5QkFBeUIsS0FBS0EseUJBQXlCLEdBQUcsRUFBakMsQ0F0RTVCLEU7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ08sSUFBSXNCLG9CQUFKOztBQUNQLENBQUMsVUFBVUEsb0JBQVYsRUFBZ0M7QUFDN0IsV0FBU25QLE1BQVQsQ0FBZ0IxQyxLQUFoQixFQUF1QlksTUFBdkIsRUFBK0I7QUFBQSxRQUNuQjRQLEdBRG1CLEdBQ1h4USxLQURXLENBQ25Cd1EsR0FEbUI7O0FBRTNCLFFBQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ047QUFDSDs7QUFDRCxRQUFNckcsUUFBUSxHQUFHdkosTUFBTSxDQUFDd0UsU0FBUCxDQUFpQjRELEdBQWpCLENBQXFCd0gsR0FBckIsQ0FBakI7O0FBQ0EsUUFBSSxFQUFDckcsUUFBRCxhQUFDQSxRQUFELGVBQUNBLFFBQVEsQ0FBRW5LLEtBQVgsQ0FBSixFQUFzQjtBQUNsQjtBQUNIOztBQUNELFFBQU1aLE9BQU8sR0FBR3dCLE1BQU0sQ0FBQytCLFFBQVAsQ0FBZ0JuQyxVQUFoQixFQUFoQjtBQVQyQixRQVVuQjVCLGNBVm1CLEdBVUFRLE9BVkEsQ0FVbkJSLGNBVm1COztBQVczQixRQUFJQSxjQUFjLENBQUNQLGVBQWYsSUFBa0MsQ0FBdEMsRUFBeUM7QUFDckM7QUFDSDs7QUFDRCxRQUFNb1MsU0FBUyxHQUFHN1AsTUFBTSxDQUFDc0UsUUFBUCxDQUFnQjFFLFVBQWhCLEVBQWxCO0FBZDJCLFFBZW5CckIsTUFmbUIsR0FlUkMsT0FmUSxDQWVuQkQsTUFmbUI7QUFnQjNCc1IsYUFBUyxDQUFDclAsWUFBVixDQUF1QmpDLE1BQU0sQ0FBQ3RCLENBQTlCLEVBQWlDc0IsTUFBTSxDQUFDdkIsQ0FBeEMsRUFBMkN1QixNQUFNLENBQUMrSCxDQUFsRCxFQUFxRC9ILE1BQU0sQ0FBQ2dJLENBQTVELEVBQStEaEksTUFBTSxDQUFDTSxFQUF0RSxFQUEwRU4sTUFBTSxDQUFDTyxFQUFqRjtBQWhCMkIsMEJBaUJEeUssUUFBUSxDQUFDbkssS0FqQlI7QUFBQSxRQWlCbkJnQixLQWpCbUIsbUJBaUJuQkEsS0FqQm1CO0FBQUEsUUFpQlpDLE1BakJZLG1CQWlCWkEsTUFqQlk7QUFrQjNCLFFBQU01QixDQUFDLEdBQUdvRyxpREFBQSxDQUFXekYsS0FBWCxFQUFrQmdCLEtBQWxCLENBQVY7QUFDQSxRQUFNMUIsQ0FBQyxHQUFHbUcsaURBQUEsQ0FBV3pGLEtBQVgsRUFBa0JpQixNQUFsQixDQUFWO0FBQ0F3UCxhQUFTLENBQUNDLFdBQVYsR0FBd0I5UixjQUFjLENBQUNQLGVBQXZDO0FBQ0FvUyxhQUFTLENBQUNFLFNBQVYsQ0FBb0J4RyxRQUFRLENBQUNuSyxLQUE3QixFQUFvQ1gsQ0FBcEMsRUFBdUNDLENBQXZDO0FBQ0g7O0FBQ0R1UyxzQkFBb0IsQ0FBQ25QLE1BQXJCLEdBQThCQSxNQUE5Qjs7QUFDQSxXQUFTa0IsSUFBVCxDQUFjaEQsTUFBZCxFQUFzQjtBQUNsQitRLDJEQUFBLENBQW9CL1EsTUFBcEI7QUFDQUEsVUFBTSxDQUFDaUQsVUFBUCxDQUFrQm5CLE1BQWxCLENBQXlCb0IsR0FBekIsQ0FBNkI4Tix5Q0FBN0IsRUFBb0NsUCxNQUFwQztBQUNIOztBQUNEbVAsc0JBQW9CLENBQUNqTyxJQUFyQixHQUE0QkEsSUFBNUI7QUFDSCxDQTlCRCxFQThCR2lPLG9CQUFvQixLQUFLQSxvQkFBb0IsR0FBRyxFQUE1QixDQTlCdkIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ08sSUFBTUQsS0FBSyxHQUFHLE9BQWQ7QUFDQSxJQUFJRSxLQUFKOztBQUNQLENBQUMsVUFBVUEsS0FBVixFQUFpQjtBQUNkLFdBQVNDLGVBQVQsQ0FBeUIvUixLQUF6QixFQUFnQ2dOLE1BQWhDLEVBQXdDcE0sTUFBeEMsRUFBZ0Q7QUFBQSxRQUNwQzRQLEdBRG9DLEdBQzVCeFEsS0FENEIsQ0FDcEN3USxHQURvQzs7QUFFNUMsUUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTkgsK0RBQUEsQ0FBbUJyRCxNQUFuQjtBQUNBO0FBQ0g7O0FBQ0QsUUFBTTdDLFFBQVEsR0FBR3ZKLE1BQU0sQ0FBQ3dFLFNBQVAsQ0FBaUI0RCxHQUFqQixDQUFxQndILEdBQXJCLENBQWpCOztBQUNBLFFBQUksRUFBQ3JHLFFBQUQsYUFBQ0EsUUFBRCxlQUFDQSxRQUFRLENBQUVuSyxLQUFYLENBQUosRUFBc0I7QUFDbEJxUSwrREFBQSxDQUFtQnJELE1BQW5CO0FBQ0E7QUFDSDs7QUFWMkMsMEJBV2xCN0MsUUFBUSxDQUFDbkssS0FYUztBQUFBLFFBV3BDZ0IsS0FYb0MsbUJBV3BDQSxLQVhvQztBQUFBLFFBVzdCQyxNQVg2QixtQkFXN0JBLE1BWDZCO0FBWTVDLFFBQU01QixDQUFDLEdBQUdvRyxpREFBQSxDQUFXekYsS0FBWCxFQUFrQmdCLEtBQWxCLENBQVY7QUFDQSxRQUFNMUIsQ0FBQyxHQUFHbUcsaURBQUEsQ0FBV3pGLEtBQVgsRUFBa0JpQixNQUFsQixDQUFWO0FBQ0ErTCxVQUFNLENBQUMzTixDQUFQLEdBQVdBLENBQVg7QUFDQTJOLFVBQU0sQ0FBQzFOLENBQVAsR0FBV0EsQ0FBWDtBQUNBME4sVUFBTSxDQUFDaE0sS0FBUCxHQUFlQSxLQUFmO0FBQ0FnTSxVQUFNLENBQUMvTCxNQUFQLEdBQWdCQSxNQUFoQjtBQUNIOztBQUNENlEsT0FBSyxDQUFDQyxlQUFOLEdBQXdCQSxlQUF4QjtBQUNILENBckJELEVBcUJHRCxLQUFLLEtBQUtBLEtBQUssR0FBRyxFQUFiLENBckJSOztBQXNCQSxJQUFNOUUsTUFBTSxHQUFHcUQsc0RBQUEsRUFBZjtBQUNPLElBQUlzQixjQUFKOztBQUNQLENBQUMsVUFBVUEsY0FBVixFQUEwQjtBQUN2QixXQUFTeE8sT0FBVCxDQUFpQm5ELEtBQWpCLEVBQXdCWSxNQUF4QixFQUFnQztBQUFBLFFBQ3BCOEksS0FEb0IsR0FDVjlJLE1BQU0sQ0FBQ3lDLFFBREcsQ0FDcEJxRyxLQURvQjtBQUU1Qm9JLFNBQUssQ0FBQ0MsZUFBTixDQUFzQi9SLEtBQXRCLEVBQTZCZ04sTUFBN0IsRUFBcUNwTSxNQUFyQztBQUNBLFdBQU95UCx5REFBQSxDQUFtQnJELE1BQW5CLEVBQTJCdEQsS0FBM0IsQ0FBUDtBQUNIOztBQUNEaUksZ0JBQWMsQ0FBQ3hPLE9BQWYsR0FBeUJBLE9BQXpCOztBQUNBLFdBQVNLLE1BQVQsQ0FBZ0J4RCxLQUFoQixFQUF1QlksTUFBdkIsRUFBK0I7QUFDM0IsUUFBTXhCLE9BQU8sR0FBR3dCLE1BQU0sQ0FBQzZDLE9BQVAsQ0FBZWpELFVBQWYsRUFBaEI7QUFEMkIsUUFFbkJnUSxHQUZtQixHQUVYeFEsS0FGVyxDQUVuQndRLEdBRm1COztBQUczQixRQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNOcFIsYUFBTyxDQUFDc0UsUUFBUixHQUFtQixDQUFuQjtBQUNBdEUsYUFBTyxDQUFDb0UsTUFBUixHQUFpQixJQUFqQjtBQUNBO0FBQ0g7O0FBQ0QsUUFBTTJHLFFBQVEsR0FBR3ZKLE1BQU0sQ0FBQ3dFLFNBQVAsQ0FBaUI0RCxHQUFqQixDQUFxQndILEdBQXJCLENBQWpCO0FBQ0FwUixXQUFPLENBQUNzRSxRQUFSLEdBQW1CdUcsMkRBQUEsQ0FBcUJFLFFBQXJCLENBQW5CO0FBQ0EvSyxXQUFPLENBQUNvRSxNQUFSLEdBQWlCLENBQUMsRUFBQzJHLFFBQUQsYUFBQ0EsUUFBRCxlQUFDQSxRQUFRLENBQUUzRyxNQUFYLENBQUQsSUFBc0IsQ0FBQyxFQUFDMkcsUUFBRCxhQUFDQSxRQUFELGVBQUNBLFFBQVEsQ0FBRW5LLEtBQVgsQ0FBeEM7QUFDSDs7QUFDRDJSLGdCQUFjLENBQUNuTyxNQUFmLEdBQXdCQSxNQUF4Qjs7QUFDQSxXQUFTSSxJQUFULENBQWNoRCxNQUFkLEVBQXNCO0FBQ2xCQSxVQUFNLENBQUNpRCxVQUFQLENBQWtCVixPQUFsQixDQUEwQlcsR0FBMUIsQ0FBOEI4TixLQUE5QixFQUFxQ3pPLE9BQXJDO0FBQ0F2QyxVQUFNLENBQUNpRCxVQUFQLENBQWtCTCxNQUFsQixDQUF5Qk0sR0FBekIsQ0FBNkI4TixLQUE3QixFQUFvQ3BPLE1BQXBDO0FBQ0F3TyxrRUFBQSxDQUFtQnBSLE1BQW5CO0FBQ0g7O0FBQ0QrUSxnQkFBYyxDQUFDL04sSUFBZixHQUFzQkEsSUFBdEI7QUFDSCxDQTFCRCxFQTBCRytOLGNBQWMsS0FBS0EsY0FBYyxHQUFHLEVBQXRCLENBMUJqQixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDRE8sSUFBSUssYUFBSjs7QUFDUCxDQUFDLFVBQVVBLGFBQVYsRUFBeUI7QUFDdEIsV0FBU3ZILE9BQVQsQ0FBaUJELEtBQWpCLEVBQXdCNUosTUFBeEIsRUFBZ0M7QUFDNUIsUUFBTXFSLFNBQVMsR0FBR3pILEtBQUssQ0FBQzBILEtBQU4sQ0FBWSxHQUFaLEVBQWlCdlIsR0FBakIsRUFBbEI7O0FBQ0EsWUFBUXNSLFNBQVI7QUFDSSxXQUFLLEtBQUw7QUFDQSxXQUFLLEtBQUw7QUFDQSxXQUFLLE1BQUw7QUFDSSxZQUFNOUgsUUFBUSxHQUFHO0FBQ2JLLGVBQUssRUFBTEEsS0FEYTtBQUViaEgsZ0JBQU0sRUFBRSxLQUZLO0FBR2I2RyxxQkFBVyxFQUFFLENBSEE7QUFJYkQsb0JBQVUsRUFBRTtBQUpDLFNBQWpCO0FBTUEsWUFBTXBLLEtBQUssR0FBR0ssUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQU4sYUFBSyxDQUFDd1EsR0FBTixHQUFZaEcsS0FBWjs7QUFDQXhLLGFBQUssQ0FBQ21TLE1BQU4sR0FBZSxZQUFNO0FBQ2pCeEosaUJBQU8sQ0FBQ0MsR0FBUix5QkFBNkI0QixLQUE3QjtBQUNBTCxrQkFBUSxDQUFDbkssS0FBVCxHQUFpQkEsS0FBakI7QUFDQW1LLGtCQUFRLENBQUMzRyxNQUFULEdBQWtCLElBQWxCO0FBQ0gsU0FKRDs7QUFLQXhELGFBQUssQ0FBQ29TLE9BQU4sR0FBZ0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ25CelIsZ0JBQU0sQ0FBQ0MsS0FBUCxDQUFhQyxPQUFiLENBQXFCLGtCQUFyQixFQUF5Q3VSLENBQXpDO0FBQ0gsU0FGRDs7QUFHQSxlQUFPbEksUUFBUDs7QUFDSjtBQUNJO0FBdEJSOztBQXdCQSxXQUFPLElBQVA7QUFDSDs7QUFDRDZILGVBQWEsQ0FBQ3ZILE9BQWQsR0FBd0JBLE9BQXhCOztBQUNBLFdBQVM3RyxJQUFULENBQWNoRCxNQUFkLEVBQXNCO0FBQ2xCQSxVQUFNLENBQUN3RSxTQUFQLENBQWlCa0YsU0FBakIsQ0FBMkJnSSxHQUEzQixDQUErQjdILE9BQS9CO0FBQ0g7O0FBQ0R1SCxlQUFhLENBQUNwTyxJQUFkLEdBQXFCQSxJQUFyQjtBQUNILENBbENELEVBa0NHb08sYUFBYSxLQUFLQSxhQUFhLEdBQUcsRUFBckIsQ0FsQ2hCLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOzs7Ozs7Ozs7Ozs7QUNBTyxJQUFJTyxjQUFKOztBQUNQLENBQUMsVUFBVUEsY0FBVixFQUEwQjtBQUN2QixXQUFTOUgsT0FBVCxDQUFpQkQsS0FBakIsRUFBd0I1SixNQUF4QixFQUFnQztBQUM1QixRQUFNcVIsU0FBUyxHQUFHekgsS0FBSyxDQUFDMEgsS0FBTixDQUFZLEdBQVosRUFBaUJ2UixHQUFqQixFQUFsQjs7QUFDQSxZQUFRc1IsU0FBUjtBQUNJLFdBQUssS0FBTDtBQUNBLFdBQUssTUFBTDtBQUNJLFlBQU05SCxRQUFRLEdBQUc7QUFDYkssZUFBSyxFQUFMQSxLQURhO0FBRWJoSCxnQkFBTSxFQUFFLEtBRks7QUFHYjZHLHFCQUFXLEVBQUUsQ0FIQTtBQUliRCxvQkFBVSxFQUFFO0FBSkMsU0FBakI7QUFNQSxZQUFNb0ksR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBWjtBQUNBRCxXQUFHLENBQUNFLElBQUosQ0FBUyxLQUFULEVBQWdCbEksS0FBaEIsRUFBdUIsSUFBdkI7O0FBQ0FnSSxXQUFHLENBQUNHLFVBQUosR0FBaUIsVUFBQ04sQ0FBRCxFQUFPO0FBQ3BCbEksa0JBQVEsQ0FBQ0UsV0FBVCxHQUF1QmdJLENBQUMsQ0FBQzdPLE1BQXpCO0FBQ0EyRyxrQkFBUSxDQUFDQyxVQUFULEdBQXNCaUksQ0FBQyxDQUFDTyxLQUF4QjtBQUNILFNBSEQ7O0FBSUFKLFdBQUcsQ0FBQ0wsTUFBSixHQUFhLFlBQU07QUFDZnhKLGlCQUFPLENBQUNDLEdBQVIsMEJBQThCNEIsS0FBOUI7QUFDQUwsa0JBQVEsQ0FBQ3FILElBQVQsR0FBZ0JnQixHQUFHLENBQUNLLFlBQXBCO0FBQ0ExSSxrQkFBUSxDQUFDM0csTUFBVCxHQUFrQixJQUFsQjtBQUNBMkcsa0JBQVEsQ0FBQ0UsV0FBVCxHQUF1QkYsUUFBUSxDQUFDQyxVQUFoQztBQUNILFNBTEQ7O0FBTUFvSSxXQUFHLENBQUNKLE9BQUosR0FBYyxVQUFDQyxDQUFELEVBQU87QUFDakJ6UixnQkFBTSxDQUFDQyxLQUFQLENBQWFDLE9BQWIsQ0FBcUIsbUJBQXJCLEVBQTBDdVIsQ0FBMUM7QUFDSCxTQUZEOztBQUdBRyxXQUFHLENBQUNNLElBQUo7QUFDQSxlQUFPM0ksUUFBUDs7QUFDSjtBQUNJO0FBM0JSOztBQTZCQSxXQUFPLElBQVA7QUFDSDs7QUFDRG9JLGdCQUFjLENBQUM5SCxPQUFmLEdBQXlCQSxPQUF6Qjs7QUFDQSxXQUFTN0csSUFBVCxDQUFjaEQsTUFBZCxFQUFzQjtBQUNsQkEsVUFBTSxDQUFDd0UsU0FBUCxDQUFpQmtGLFNBQWpCLENBQTJCZ0ksR0FBM0IsQ0FBK0I3SCxPQUEvQjtBQUNIOztBQUNEOEgsZ0JBQWMsQ0FBQzNPLElBQWYsR0FBc0JBLElBQXRCO0FBQ0gsQ0F2Q0QsRUF1Q0cyTyxjQUFjLEtBQUtBLGNBQWMsR0FBRyxFQUF0QixDQXZDakIsRTs7Ozs7O1VDREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7Ozs7Ozs7O0FDQThEO0FBQ1o7QUFJbEQsTUFBTSxNQUFNLEdBQUcsSUFBSSw0REFBWSxFQUFFLENBQUM7QUFFbEMsc0VBQThCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBRWhDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFHckIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUNqQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBRWxDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFaEQsTUFBTSxJQUFJLEdBQUc7SUFDWixJQUFJLEVBQUUsT0FBTztJQUNiLEdBQUcsRUFBRSwrQkFBK0I7SUFDcEMsS0FBSyxFQUFFLEdBQUc7Q0FDRCxDQUFDO0FBRVgsTUFBTSxVQUFVLEdBQXFCO0lBQ3BDLEVBQUU7SUFDRixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDZCxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3pDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRTtJQUNuQixFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUU7SUFDakIsRUFBRSxVQUFVLEVBQUUsQ0FBQyxHQUFHLEVBQUU7Q0FDcEIsQ0FBQztBQUdGLE1BQU0sQ0FBQyxJQUFJLEdBQUc7SUFDYixJQUFJLEVBQUUsV0FBVztJQUNqQixRQUFRLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDL0MsR0FBRyxTQUFTO1FBQ1osSUFBSSxFQUFFLFdBQVc7UUFDakIsUUFBUSxFQUFFLElBQUk7UUFDZCxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakIsRUFBQztDQUNILENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5leHBvcnQgY2xhc3MgQ2FudmFzRW5naW5lIGV4dGVuZHMgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGUgPSB7fSkge1xuICAgICAgICBtb2R1bGUuUGxhdGZvcm0gPSBtb2R1bGUuUGxhdGZvcm0gPz8gQ2FudmFzUGxhdGZvcm07XG4gICAgICAgIHN1cGVyKG1vZHVsZSk7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9wYXR0ZXJucyc7XG5leHBvcnQgKiBmcm9tICcuL3BsYXRmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZW5naW5lJztcbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXgsIFBvaW50IH0gZnJvbSAnQGUyZC9nZW9tJztcbmNvbnN0IHBvaW50MSA9IFBvaW50LmVtcHR5KCk7XG5jb25zdCBwb2ludDIgPSBQb2ludC5lbXB0eSgpO1xuZXhwb3J0IHZhciBDYW52YXNQYXR0ZXJucztcbihmdW5jdGlvbiAoQ2FudmFzUGF0dGVybnMpIHtcbiAgICBmdW5jdGlvbiBjb2xvclBhdHRlcm4oY29sb3IsIGFscGhhLCBjdCkge1xuICAgICAgICBsZXQgciA9IGNvbG9yID4+IDE2ICYgMHhmZjtcbiAgICAgICAgbGV0IGcgPSBjb2xvciA+PiA4ICYgMHhmZjtcbiAgICAgICAgbGV0IGIgPSBjb2xvciAmIDB4ZmY7XG4gICAgICAgIGxldCBhID0gYWxwaGEgKiAweGZmO1xuICAgICAgICBpZiAoIUNvbG9yVHJhbnNmb3JtLmlzRW1wdHkoY3QpKSB7XG4gICAgICAgICAgICByID0gKHIgKiBjdC5yZWRNdWx0aXBsaWVyICsgY3QucmVkT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBnID0gKGcgKiBjdC5ncmVlbk11bHRpcGxpZXIgKyBjdC5ncmVlbk9mZnNldCkgJiAweGZmO1xuICAgICAgICAgICAgYiA9IChiICogY3QuYmx1ZU11bHRpcGxpZXIgKyBjdC5ibHVlT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBhID0gKGEgKiBjdC5hbHBoYU11bHRpcGxpZXIgKyBjdC5hbHBoYU9mZnNldCkgJiAweGZmO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhIDwgMHhmZikge1xuICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YSAvIDB4ZmZ9KWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4gPSBjb2xvclBhdHRlcm47XG4gICAgZnVuY3Rpb24gYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJnYiA9IGNvbG9yc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGFscGhhID0gYWxwaGFzW2ldO1xuICAgICAgICAgICAgbGV0IHJhdGlvID0gcmF0aW9zW2ldIC8gMHhGRjtcbiAgICAgICAgICAgIGlmIChyYXRpbyA8IDApXG4gICAgICAgICAgICAgICAgcmF0aW8gPSAwO1xuICAgICAgICAgICAgaWYgKHJhdGlvID4gMSlcbiAgICAgICAgICAgICAgICByYXRpbyA9IDE7XG4gICAgICAgICAgICBwYXR0ZXJuLmFkZENvbG9yU3RvcChyYXRpbywgY29sb3JQYXR0ZXJuKHJnYiwgYWxwaGEsIGNvbG9yVHJhbnNmb3JtKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMuYWRkR3JhZGllbnRDb2xvcnMgPSBhZGRHcmFkaWVudENvbG9ycztcbiAgICBmdW5jdGlvbiByYWRpYWxHcmFkaWVudFBhdHRlcm4obWF0cml4LCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCkge1xuICAgICAgICBwb2ludDEueCA9IDE2MzguNDtcbiAgICAgICAgcG9pbnQxLnkgPSAwO1xuICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludDEsIHBvaW50MSk7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KG1hdHJpeC50eCwgbWF0cml4LnR5LCAwLCBtYXRyaXgudHgsIG1hdHJpeC50eSwgTWF0aC5hYnMoKHBvaW50MS54IC0gbWF0cml4LnR4KSAvIDIpKTtcbiAgICAgICAgYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMucmFkaWFsR3JhZGllbnRQYXR0ZXJuID0gcmFkaWFsR3JhZGllbnRQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGxpbmVhckdyYWRpZW50UGF0dGVybihtYXRyaXgsIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgICAgIHBvaW50MS54ID0gLTgxOS4yO1xuICAgICAgICBwb2ludDEueSA9IDA7XG4gICAgICAgIHBvaW50Mi54ID0gODE5LjI7XG4gICAgICAgIHBvaW50Mi55ID0gMDtcbiAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgcG9pbnQxLCBwb2ludDEpO1xuICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludDIsIHBvaW50Mik7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KHBvaW50MS54LCBwb2ludDEueSwgcG9pbnQyLngsIHBvaW50Mi55KTtcbiAgICAgICAgYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMubGluZWFyR3JhZGllbnRQYXR0ZXJuID0gbGluZWFyR3JhZGllbnRQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGJpdG1hcFBhdHRlcm4oaW1hZ2UsIHJlcGVhdCwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVQYXR0ZXJuKGltYWdlLCByZXBlYXQgPyAncmVwZWF0JyA6ICdub25lJyk7XG4gICAgICAgIGlmIChwYXR0ZXJuKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmJpdG1hcFBhdHRlcm4gPSBiaXRtYXBQYXR0ZXJuO1xufSkoQ2FudmFzUGF0dGVybnMgfHwgKENhbnZhc1BhdHRlcm5zID0ge30pKTtcbiIsImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGUyZC9jb3JlJztcbmV4cG9ydCBjbGFzcyBDYW52YXNQbGF0Zm9ybSBleHRlbmRzIFBsYXRmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbdGhpcy52aWV3LmdldENvbnRleHQoJzJkJyldO1xuICAgICAgICB0aGlzLmN1c3RvbUNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRzW3RoaXMuY29udGV4dHMubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIHNhdmVDb250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICByZXN0b3JlQ29udGV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0cy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmRlYnVnLndhcm5pbmcoJ1RyeWluZyB0byByZXN0b3JlIG1haW4gY29udGV4dCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUN1c3RvbUNvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0O1xuICAgICAgICBpZiAodGhpcy5jdXN0b21Db250ZXh0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmN1c3RvbUNvbnRleHRzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnZpZXc7XG4gICAgICAgIGlmIChjb250ZXh0LmNhbnZhcy53aWR0aCAhPT0gd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRleHQuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgICBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIGRlc3Ryb3lDdXN0b21Db250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jdXN0b21Db250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICBiZWdpbigpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgpO1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB2aWV3LndpZHRoLCB2aWV3LmhlaWdodCk7XG4gICAgfVxuICAgIHVwZGF0ZVNpemUoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbmdpbmUuc2NyZWVuLmdldFdpZHRoKCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRIZWlnaHQoKTtcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIGNvbnN0IHZpZXdXaWR0aCA9IE1hdGguZmxvb3Iod2lkdGggKiBwaXhlbFJhdGlvKTtcbiAgICAgICAgY29uc3Qgdmlld0hlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgaWYgKHZpZXcud2lkdGggIT09IHZpZXdXaWR0aCB8fCB2aWV3LmhlaWdodCAhPT0gdmlld0hlaWdodCkge1xuICAgICAgICAgICAgdmlldy53aWR0aCA9IHZpZXdXaWR0aDtcbiAgICAgICAgICAgIHZpZXcuaGVpZ2h0ID0gdmlld0hlaWdodDtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ09OVEFJTkVSID0gJ2NvbnRhaW5lcic7XG5leHBvcnQgdmFyIENvbnRhaW5lcjtcbihmdW5jdGlvbiAoQ29udGFpbmVyKSB7XG4gICAgZnVuY3Rpb24gbnVtQ2hpbGRyZW4oY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbik7XG4gICAgICAgICAgICByZXR1cm4ga2V5cy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIENvbnRhaW5lci5udW1DaGlsZHJlbiA9IG51bUNoaWxkcmVuO1xufSkoQ29udGFpbmVyIHx8IChDb250YWluZXIgPSB7fSkpO1xuZXhwb3J0IHZhciBDb250YWluZXJFeHRlbnNpb247XG4oZnVuY3Rpb24gKENvbnRhaW5lckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgcmVuZGVyZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgcmVuZGVyZXIuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlcmVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHVwZGF0ZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBwb2ludGVyczogcG9pbnRlckV2ZW50cyB9ID0gZW5naW5lO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBwb2ludGVyRXZlbnRzLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHMuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcG9pbnRlckV2ZW50cy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwb2ludGVyRXZlbnRzLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBrZXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50ZXJFdmVudHMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBsb2FkaW5nIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgbG9hZGluZy5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gbG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzICs9IGNvbXBvbmVudENvbnRleHQucHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudENvbnRleHQubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzIC89IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBsb2FkaW5nLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGNvbXBvbmVudENvbnRleHQubG9hZGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgKz0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50Q29udGV4dC5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgLz0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvYWRpbmcuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5zZXQoQ09OVEFJTkVSLCB1cGRhdGUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KENPTlRBSU5FUiwgcmVuZGVyKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoQ09OVEFJTkVSLCBoaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChDT05UQUlORVIsIGxvYWRlZCk7XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENvbnRhaW5lckV4dGVuc2lvbiB8fCAoQ29udGFpbmVyRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IENvbnRhaW5lckV4dGVuc2lvbiB9IGZyb20gJy4vY29udGFpbmVyJztcbmV4cG9ydCBjb25zdCBMT0FERVIgPSAnbG9hZGVyJztcbmV4cG9ydCB2YXIgTG9hZGVyO1xuKGZ1bmN0aW9uIChMb2FkZXIpIHtcbiAgICBmdW5jdGlvbiBnZXRMb2FkaW5nUHJvZ3Jlc3MobG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZGluZ1Byb2dyZXNzID8/IDA7XG4gICAgfVxuICAgIExvYWRlci5nZXRMb2FkaW5nUHJvZ3Jlc3MgPSBnZXRMb2FkaW5nUHJvZ3Jlc3M7XG4gICAgZnVuY3Rpb24gaXNMb2FkZWQobG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZGVkID8/IGZhbHNlO1xuICAgIH1cbiAgICBMb2FkZXIuaXNMb2FkZWQgPSBpc0xvYWRlZDtcbiAgICBmdW5jdGlvbiBuZWVkTG9hZGluZ0NoZWNrKGxvYWRlcikge1xuICAgICAgICByZXR1cm4gbG9hZGVyLmxvYWRpbmdDaGVjayA/PyB0cnVlO1xuICAgIH1cbiAgICBMb2FkZXIubmVlZExvYWRpbmdDaGVjayA9IG5lZWRMb2FkaW5nQ2hlY2s7XG59KShMb2FkZXIgfHwgKExvYWRlciA9IHt9KSk7XG5leHBvcnQgdmFyIExvYWRlckV4dGVuc2lvbjtcbihmdW5jdGlvbiAoTG9hZGVyRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGxvYWRlciwgZW5naW5lKSB7XG4gICAgICAgIGlmICghTG9hZGVyLm5lZWRMb2FkaW5nQ2hlY2sobG9hZGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIENvbnRhaW5lckV4dGVuc2lvbi5sb2FkZWQobG9hZGVyLCBlbmdpbmUpO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLmxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICBsb2FkZXIubG9hZGluZ1Byb2dyZXNzID0gY29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgaWYgKGNvbnRleHQubG9hZGVkICYmICFsb2FkZXIubG9hZGVkKSB7XG4gICAgICAgICAgICBsb2FkZXIubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChsb2FkZXIub25Mb2FkZWQpIHtcbiAgICAgICAgICAgICAgICBsb2FkZXIub25Mb2FkZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBMb2FkZXJFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5zZXQoTE9BREVSLCBDb250YWluZXJFeHRlbnNpb24udXBkYXRlKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChMT0FERVIsIENvbnRhaW5lckV4dGVuc2lvbi5yZW5kZXIpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChMT0FERVIsIENvbnRhaW5lckV4dGVuc2lvbi5oaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChMT0FERVIsIGxvYWRlZCk7XG4gICAgfVxuICAgIExvYWRlckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKExvYWRlckV4dGVuc2lvbiB8fCAoTG9hZGVyRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vZmVhdHVyZXMvcmVuZGVyZXInO1xuaW1wb3J0IHsgVXBkYXRlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3VwZGF0ZXInO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4uL2ZlYXR1cmVzL2xvYWRpbmcnO1xuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi4vZmVhdHVyZXMvc2NyZWVuJztcbmltcG9ydCB7IFBvaW50ZXJzIH0gZnJvbSAnLi4vZmVhdHVyZXMvcG9pbnRlcnMnO1xuaW1wb3J0IHsgVGlja2VyIH0gZnJvbSAnLi4vZmVhdHVyZXMvdGlja2VyJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vZmVhdHVyZXMvcGxhdGZvcm0nO1xuaW1wb3J0IHsgQ29udGFpbmVyRXh0ZW5zaW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IHsgRGVidWcgfSBmcm9tICcuLi9mZWF0dXJlcy9kZWJ1Zyc7XG5pbXBvcnQgeyBSZXNvdXJjZXMgfSBmcm9tICcuLi9mZWF0dXJlcy9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4uL2ZlYXR1cmVzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkZXInO1xuZXhwb3J0IGNsYXNzIEVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IobW9kdWxlID0ge30pIHtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDMyO1xuICAgICAgICBtb2R1bGUuQ29tcG9uZW50cyA9IG1vZHVsZS5Db21wb25lbnRzID8/IENvbXBvbmVudHM7XG4gICAgICAgIG1vZHVsZS5TY3JlZW4gPSBtb2R1bGUuU2NyZWVuID8/IFNjcmVlbjtcbiAgICAgICAgbW9kdWxlLlBsYXRmb3JtID0gbW9kdWxlLlBsYXRmb3JtID8/IFBsYXRmb3JtO1xuICAgICAgICBtb2R1bGUuVXBkYXRlciA9IG1vZHVsZS5VcGRhdGVyID8/IFVwZGF0ZXI7XG4gICAgICAgIG1vZHVsZS5Mb2FkaW5nID0gbW9kdWxlLkxvYWRpbmcgPz8gTG9hZGluZztcbiAgICAgICAgbW9kdWxlLlJlbmRlcmVyID0gbW9kdWxlLlJlbmRlcmVyID8/IFJlbmRlcmVyO1xuICAgICAgICBtb2R1bGUuUG9pbnRlcnMgPSBtb2R1bGUuUG9pbnRlcnMgPz8gUG9pbnRlcnM7XG4gICAgICAgIG1vZHVsZS5UaWNrZXIgPSBtb2R1bGUuVGlja2VyID8/IFRpY2tlcjtcbiAgICAgICAgbW9kdWxlLkRlYnVnID0gbW9kdWxlLkRlYnVnID8/IERlYnVnO1xuICAgICAgICBtb2R1bGUuUmVzb3VyY2VzID0gbW9kdWxlLlJlc291cmNlcyA/PyBSZXNvdXJjZXM7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBtb2R1bGUuQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBtb2R1bGUuU2NyZWVuKCk7XG4gICAgICAgIHRoaXMucGxhdGZvcm0gPSBuZXcgbW9kdWxlLlBsYXRmb3JtKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZXIgPSBuZXcgbW9kdWxlLlVwZGF0ZXIodGhpcyk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IG5ldyBtb2R1bGUuTG9hZGluZyh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBtb2R1bGUuUmVuZGVyZXIodGhpcyk7XG4gICAgICAgIHRoaXMucG9pbnRlcnMgPSBuZXcgbW9kdWxlLlBvaW50ZXJzKHRoaXMpO1xuICAgICAgICB0aGlzLnRpY2tlciA9IG5ldyBtb2R1bGUuVGlja2VyKHRoaXMpO1xuICAgICAgICB0aGlzLmRlYnVnID0gbmV3IG1vZHVsZS5EZWJ1ZygpO1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IG5ldyBtb2R1bGUuUmVzb3VyY2VzKHRoaXMpO1xuICAgICAgICBDb250YWluZXJFeHRlbnNpb24uaW5pdCh0aGlzKTtcbiAgICAgICAgTG9hZGVyRXh0ZW5zaW9uLmluaXQodGhpcyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB9XG59XG4iLCJleHBvcnQgdmFyIERpc3BsYXk7XG4oZnVuY3Rpb24gKERpc3BsYXkpIHtcbiAgICBmdW5jdGlvbiBpc1Zpc2libGUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQudmlzaWJsZSA/PyB0cnVlO1xuICAgIH1cbiAgICBEaXNwbGF5LmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbn0pKERpc3BsYXkgfHwgKERpc3BsYXkgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBQaXZvdDtcbihmdW5jdGlvbiAoUGl2b3QpIHtcbiAgICBmdW5jdGlvbiBnZXRYKHBpdm90LCB3aWR0aCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WCB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFgpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RYICogd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFggPSBnZXRYO1xuICAgIGZ1bmN0aW9uIGdldFkocGl2b3QsIGhlaWdodCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WSB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFkpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RZICogaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBQaXZvdC5nZXRZID0gZ2V0WTtcbiAgICBmdW5jdGlvbiBoYXNWYWx1ZXMocGl2b3QpIHtcbiAgICAgICAgY29uc3QgeyBwaXZvdFgsIHBpdm90WSB9ID0gcGl2b3Q7XG4gICAgICAgIHJldHVybiAhIXBpdm90WCB8fCAhIXBpdm90WTtcbiAgICB9XG4gICAgUGl2b3QuaGFzVmFsdWVzID0gaGFzVmFsdWVzO1xufSkoUGl2b3QgfHwgKFBpdm90ID0ge30pKTtcbiIsImNvbnN0IGhhbmRsZXJzTWFwID0ge1xuICAgIHBvaW50ZXJEb3duOiAnb25Qb2ludGVyRG93bicsXG4gICAgcG9pbnRlclVwOiAnb25Qb2ludGVyVXAnLFxuICAgIHBvaW50ZXJNb3ZlOiAnb25Qb2ludGVyTW92ZScsXG4gICAgcG9pbnRlck92ZXI6ICdvblBvaW50ZXJPdmVyJyxcbiAgICBwb2ludGVyT3V0OiAnb25Qb2ludGVyT3V0Jyxcbn07XG5leHBvcnQgdmFyIFBvaW50ZXI7XG4oZnVuY3Rpb24gKFBvaW50ZXIpIHtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJPdmVyKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuICEhcG9pbnRlci5wb2ludGVyT3ZlcjtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJPdmVyID0gaXNQb2ludGVyT3ZlcjtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJFbmFibGVkKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50ZXIucG9pbnRlckVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkID0gaXNQb2ludGVyRW5hYmxlZDtcbiAgICBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KHBvaW50ZXIsIHR5cGUsIHgsIHksIGlkKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJOYW1lID0gaGFuZGxlcnNNYXBbdHlwZV07XG4gICAgICAgIGlmIChoYW5kbGVyTmFtZSAmJiBwb2ludGVyW2hhbmRsZXJOYW1lXSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZSwgeCwgeSwgaWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcG9pbnRlcltoYW5kbGVyTmFtZV0oZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG59KShQb2ludGVyIHx8IChQb2ludGVyID0ge30pKTtcbiIsImV4cG9ydCB2YXIgVHJhbnNmb3JtO1xuKGZ1bmN0aW9uIChUcmFuc2Zvcm0pIHtcbiAgICBmdW5jdGlvbiBnZXRNYXRyaXgodHJhbnNmb3JtLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKG1hdHJpeCkge1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBtYXRyaXguYSA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSBtYXRyaXguYiA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSBtYXRyaXguYyA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBtYXRyaXguZCA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gbWF0cml4LnR4ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQudHkgPSBtYXRyaXgudHkgPz8gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvdGF0aW9uIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHRyYW5zZm9ybS5zY2FsZVggPz8gdHJhbnNmb3JtLnNjYWxlID8/IDE7XG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IHRyYW5zZm9ybS5zY2FsZVkgPz8gdHJhbnNmb3JtLnNjYWxlID8/IDE7XG4gICAgICAgIHJlc3VsdC50eCA9IHRyYW5zZm9ybS54ID8/IDA7XG4gICAgICAgIHJlc3VsdC50eSA9IHRyYW5zZm9ybS55ID8/IDA7XG4gICAgICAgIGlmIChyb3RhdGlvbikge1xuICAgICAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3Mocm90YXRpb24pO1xuICAgICAgICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW4ocm90YXRpb24pO1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBjb3MgKiBzY2FsZVg7XG4gICAgICAgICAgICByZXN1bHQuYiA9IHNpbiAqIHNjYWxlWDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gLXNpbiAqIHNjYWxlWTtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gY29zICogc2NhbGVZO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hID0gc2NhbGVYO1xuICAgICAgICByZXN1bHQuYiA9IDA7XG4gICAgICAgIHJlc3VsdC5jID0gMDtcbiAgICAgICAgcmVzdWx0LmQgPSBzY2FsZVk7XG4gICAgfVxuICAgIFRyYW5zZm9ybS5nZXRNYXRyaXggPSBnZXRNYXRyaXg7XG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JUcmFuc2Zvcm0odHJhbnNmb3JtLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0ucmVkTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmFscGhhT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0ucmVkT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5ncmVlbk9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5ibHVlT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxwaGEgPSB0cmFuc2Zvcm0uYWxwaGEgPz8gMTtcbiAgICAgICAgY29uc3QgeyB0aW50IH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmICh0aW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IGNvbG9yID0gMCwgdmFsdWUgPSAxIH0gPSB0aW50O1xuICAgICAgICAgICAgY29uc3QgdmFsdWVJbnZlcnRlZCA9IDEgLSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHIgPSAoY29sb3IgPj4gMTYpICYgMHhmZjtcbiAgICAgICAgICAgIGNvbnN0IGcgPSAoY29sb3IgPj4gOCkgJiAweGZmO1xuICAgICAgICAgICAgY29uc3QgYiA9IGNvbG9yICYgMHhmZjtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYTtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gciAqIHZhbHVlO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gZyAqIHZhbHVlO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBiICogdmFsdWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHsgYnJpZ2h0bmVzcyB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAoYnJpZ2h0bmVzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoYnJpZ2h0bmVzcyA+IDEpIHtcbiAgICAgICAgICAgICAgICBicmlnaHRuZXNzID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGJyaWdodG5lc3MgPCAtMSkge1xuICAgICAgICAgICAgICAgIGJyaWdodG5lc3MgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSAxIC0gTWF0aC5hYnMoYnJpZ2h0bmVzcyk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIGlmIChicmlnaHRuZXNzID4gMCkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IGJyaWdodG5lc3MgKiAyNTU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGE7XG4gICAgICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHBlcmNlbnQ7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gcGVyY2VudDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IHBlcmNlbnQ7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYTtcbiAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSAxO1xuICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldENvbG9yVHJhbnNmb3JtID0gZ2V0Q29sb3JUcmFuc2Zvcm07XG59KShUcmFuc2Zvcm0gfHwgKFRyYW5zZm9ybSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFVwZGF0ZTtcbihmdW5jdGlvbiAoVXBkYXRlKSB7XG4gICAgZnVuY3Rpb24gaXNFbmFibGVkKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgVXBkYXRlLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29tcG9uZW50LCB0aW1lKSB7XG4gICAgICAgIGlmIChjb21wb25lbnQub25VcGRhdGUpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5vblVwZGF0ZSh0aW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBVcGRhdGUudXBkYXRlID0gdXBkYXRlO1xufSkoVXBkYXRlIHx8IChVcGRhdGUgPSB7fSkpO1xuIiwiZXhwb3J0IGNsYXNzIENvbXBvbmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVuZGVyID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5oaXRUZXN0ID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IG5ldyBNYXAoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRGVidWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy53YXJuaW5ncyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICB9XG4gICAgZXJyb3IoLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLmVycm9ycy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMuZXJyb3JzLnNldChpZCwgY291bnQpO1xuICAgIH1cbiAgICB3YXJuaW5nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy53YXJuaW5ncy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgdGhpcy53YXJuaW5ncy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChyb290KTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIH1cbiAgICBiZWdpbigpIHtcbiAgICB9XG4gICAgZW5kKCkge1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1hdHJpeCwgUG9pbnQgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvZGlzcGxheSc7XG5pbXBvcnQgeyBQb2ludGVyIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy9wb2ludGVyJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdHJhbnNmb3JtJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFBvaW50ZXJzIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmdsb2JhbCA9IFBvaW50LmVtcHR5KCk7XG4gICAgICAgIHRoaXMubG9jYWwgPSBQb2ludC5lbXB0eSgpO1xuICAgICAgICB0aGlzLnBvaW50ZXJJZCA9IDA7XG4gICAgICAgIHRoaXMucG9pbnRlclR5cGUgPSAncG9pbnRlckRvd24nO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXTtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIG1hdHJpeDogTWF0cml4LmVtcHR5KCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXSA9IGNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIGRpc3BhdGNoKHR5cGUsIHgsIHksIGlkKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2NhbC54ID0geDtcbiAgICAgICAgdGhpcy5sb2NhbC55ID0geTtcbiAgICAgICAgdGhpcy5nbG9iYWwueCA9IHg7XG4gICAgICAgIHRoaXMuZ2xvYmFsLnkgPSB5O1xuICAgICAgICB0aGlzLnBvaW50ZXJJZCA9IGlkO1xuICAgICAgICB0aGlzLnBvaW50ZXJUeXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgTWF0cml4LnNldEVtcHR5KGJhc2UubWF0cml4KTtcbiAgICAgICAgdGhpcy5kZXB0aCsrO1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ29tcG9uZW50KHJvb3QsIGJhc2UpO1xuICAgIH1cbiAgICBkaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFEaXNwbGF5LmlzVmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFQb2ludGVyLmlzUG9pbnRlckVuYWJsZWQoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3QuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIFRyYW5zZm9ybS5nZXRNYXRyaXgoY29tcG9uZW50LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgICAgICBNYXRyaXguY29uY2F0KHBhcmVudC5tYXRyaXgsIGNvbnRleHQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50KGNvbnRleHQubWF0cml4LCB0aGlzLmdsb2JhbCwgdGhpcy5sb2NhbCk7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMubG9jYWw7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsIHRoaXMucG9pbnRlclR5cGUsIHgsIHksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJUeXBlID09PSAncG9pbnRlck1vdmUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiAhY29tcG9uZW50LnBvaW50ZXJPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3ZlcicsIHgsIHksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXJlc3VsdCAmJiBjb21wb25lbnQucG9pbnRlck92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdXQnLCB4LCB5LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wb2ludGVyT3ZlciA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXggfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvZGlzcGxheSc7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9leHRlbnNpb25zL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgbWF0cml4OiBNYXRyaXguZW1wdHkoKSxcbiAgICAgICAgICAgICAgICBjb2xvclRyYW5zZm9ybTogQ29sb3JUcmFuc2Zvcm0uZW1wdHkoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdID0gY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgcGFyZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIURpc3BsYXkuaXNWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIFRyYW5zZm9ybS5nZXRNYXRyaXgoY29tcG9uZW50LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgIFRyYW5zZm9ybS5nZXRDb2xvclRyYW5zZm9ybShjb21wb25lbnQsIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBNYXRyaXguY29uY2F0KHBhcmVudC5tYXRyaXgsIGNvbnRleHQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgIENvbG9yVHJhbnNmb3JtLmNvbmNhdChwYXJlbnQuY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLmVuZ2luZS5wbGF0Zm9ybS5iZWdpbigpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgY29uc3QgYmFzZSA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLmRlcHRoKys7XG4gICAgICAgIE1hdHJpeC5jb3B5KHRoaXMuZW5naW5lLnNjcmVlbi5nZXRNYXRyaXgoKSwgYmFzZS5tYXRyaXgpO1xuICAgICAgICBDb2xvclRyYW5zZm9ybS5zZXRFbXB0eShiYXNlLmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQocm9vdCwgYmFzZSk7XG4gICAgICAgIHRoaXMuZW5naW5lLnBsYXRmb3JtLmVuZCgpO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydFRpbWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgdmFyIFJlc291cmNlO1xuKGZ1bmN0aW9uIChSZXNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIGdldFByb2dyZXNzKHJlc291cmNlKSB7XG4gICAgICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNvdXJjZS5sb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNvdXJjZS5ieXRlc1RvdGFsID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlLmJ5dGVzTG9hZGVkIC8gcmVzb3VyY2UuYnl0ZXNUb3RhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgUmVzb3VyY2UuZ2V0UHJvZ3Jlc3MgPSBnZXRQcm9ncmVzcztcbn0pKFJlc291cmNlIHx8IChSZXNvdXJjZSA9IHt9KSk7XG5leHBvcnQgY2xhc3MgUmVzb3VyY2VzIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlc29sdmVycyA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgZ2V0KGFzc2V0KSB7XG4gICAgICAgIGlmICghYXNzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VzLmdldChhc3NldCk7XG4gICAgICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHJlc291cmNlID0gdGhpcy5yZXNvbHZlKGFzc2V0KTtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzLnNldChhc3NldCwgcmVzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICB9XG4gICAgcmVzb2x2ZShhc3NldCkge1xuICAgICAgICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHJlc29sdmVyKGFzc2V0LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgICAgICBpZiAocmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmdpbmUuZGVidWcud2FybmluZyhgUmVzb3VyY2Ugbm90IHJlc29sdmVkOiAke2Fzc2V0fWApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNYXRyaXggfSBmcm9tICdAZTJkL2dlb20nO1xuZXhwb3J0IGNsYXNzIFNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSA0MDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDAwO1xuICAgICAgICB0aGlzLnBpeGVsUmF0aW8gPSAwO1xuICAgICAgICB0aGlzLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXRyaXggPSBNYXRyaXguZW1wdHkoKTtcbiAgICB9XG4gICAgZ2V0TWF0cml4KCkge1xuICAgICAgICBjb25zdCBwaXhlbFJhdGlvID0gdGhpcy5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIHRoaXMubWF0cml4LmEgPSBwaXhlbFJhdGlvO1xuICAgICAgICB0aGlzLm1hdHJpeC5kID0gcGl4ZWxSYXRpbztcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICAgIH1cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVsbHNjcmVlbiA/IHdpbmRvdy5pbm5lcldpZHRoIDogdGhpcy53aWR0aDtcbiAgICB9XG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuID8gd2luZG93LmlubmVySGVpZ2h0IDogdGhpcy5oZWlnaHQ7XG4gICAgfVxuICAgIGdldFBpeGVsUmF0aW8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpeGVsUmF0aW8gPiAwID8gdGhpcy5waXhlbFJhdGlvIDogd2luZG93LmRldmljZVBpeGVsUmF0aW8gPz8gMTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGlja2VyIHtcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICAgICAgdGhpcy5mcmFtZVJhdGUgPSAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnVwZGF0ZXIudXBkYXRlKHRpbWUpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUubG9hZGluZy51cGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlbmRlcmVyLnJlbmRlcigpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZUZyYW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IChjdXJyZW50VGltZSAtIHRoaXMudGltZSkgLyAxMDAwO1xuICAgICAgICAgICAgdGhpcy50aW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOZXh0RnJhbWUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgfVxuICAgIGdldCBpc1BhdXNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGF1c2VkO1xuICAgIH1cbiAgICBwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmV4dEZyYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHVwZGF0ZU5leHRGcmFtZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlRnJhbWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFVwZGF0ZSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdXBkYXRlJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFVwZGF0ZXIgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQocm9vdCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG4gICAgdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFVcGRhdGUuaXNFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoY29tcG9uZW50KTtcbiAgICAgICAgVXBkYXRlLnVwZGF0ZShjb21wb25lbnQsIHRoaXMudGltZSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVQcm9wZXJ0aWVzKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnByb3BlcnRpZXMuZm9yRWFjaCgoaGFuZGxlciwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRbcHJvcGVydHldKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9sb2FkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2VuZ2luZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL2NvbXBvbmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9kZWJ1Zyc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3BsYXRmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcG9pbnRlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9yZW5kZXJlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3Jlc291cmNlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3NjcmVlbic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3RpY2tlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3VwZGF0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pbnB1dC9tb3VzZSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvZGlzcGxheSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvcGl2b3QnO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3NvdXJjZSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvdHJhbnNmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy91cGRhdGUnO1xuIiwiZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCB0eXBlKSB7XG4gICAgY29uc3QgeyB2aWV3IH0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgY29uc3QgY2xpZW50UmVjdCA9IHZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSBjbGllbnRSZWN0LmxlZnQgLSB2aWV3LmNsaWVudExlZnQ7XG4gICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSBjbGllbnRSZWN0LnRvcCAtIHZpZXcuY2xpZW50VG9wO1xuICAgIGVuZ2luZS5wb2ludGVycy5kaXNwYXRjaCh0eXBlLCB4LCB5LCAwKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZXhwb3J0IHZhciBNb3VzZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoTW91c2VFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJEb3duJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJVcCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJNb3ZlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBNb3VzZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKE1vdXNlRXh0ZW5zaW9uIHx8IChNb3VzZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIEJvdW5kcztcbihmdW5jdGlvbiAoQm91bmRzKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtaW5YOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWluWTogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG1heFg6IE51bWJlci5NSU5fVkFMVUUsXG4gICAgICAgICAgICBtYXhZOiBOdW1iZXIuTUlOX1ZBTFVFLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBCb3VuZHMuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShib3VuZHMpIHtcbiAgICAgICAgYm91bmRzLm1pblggPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWluWSA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGJvdW5kcy5tYXhYID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1heFkgPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgIH1cbiAgICBCb3VuZHMuc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KGJvdW5kcykge1xuICAgICAgICByZXR1cm4gYm91bmRzLm1pblggPT09IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5taW5ZID09PSBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWF4WCA9PT0gTnVtYmVyLk1JTl9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1heFkgPT09IE51bWJlci5NSU5fVkFMVUU7XG4gICAgfVxuICAgIEJvdW5kcy5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiB0b1JlY3RhbmdsZShib3VuZHMsIHJlY3RhbmdsZSkge1xuICAgICAgICBjb25zdCB7IG1pblgsIG1pblksIG1heFgsIG1heFksIH0gPSBib3VuZHM7XG4gICAgICAgIHJlY3RhbmdsZS54ID0gbWluWDtcbiAgICAgICAgcmVjdGFuZ2xlLnkgPSBtaW5ZO1xuICAgICAgICByZWN0YW5nbGUud2lkdGggPSBtYXhYIC0gbWluWDtcbiAgICAgICAgcmVjdGFuZ2xlLmhlaWdodCA9IG1heFkgLSBtaW5ZO1xuICAgIH1cbiAgICBCb3VuZHMudG9SZWN0YW5nbGUgPSB0b1JlY3RhbmdsZTtcbiAgICBmdW5jdGlvbiB0ZXN0WChib3VuZHMsIHgpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0WCA9IHRlc3RYO1xuICAgIGZ1bmN0aW9uIHRlc3RZKGJvdW5kcywgeSkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RZID0gdGVzdFk7XG4gICAgZnVuY3Rpb24gdGVzdChib3VuZHMsIHgsIHkpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdCA9IHRlc3Q7XG4gICAgZnVuY3Rpb24gdGVzdFBvaW50KGJvdW5kcywgcG9pbnQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFBvaW50ID0gdGVzdFBvaW50O1xufSkoQm91bmRzIHx8IChCb3VuZHMgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBDb2xvclRyYW5zZm9ybTtcbihmdW5jdGlvbiAoQ29sb3JUcmFuc2Zvcm0pIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFscGhhTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIHJlZE11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBncmVlbk11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBibHVlTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGFscGhhT2Zmc2V0OiAwLFxuICAgICAgICAgICAgcmVkT2Zmc2V0OiAwLFxuICAgICAgICAgICAgZ3JlZW5PZmZzZXQ6IDAsXG4gICAgICAgICAgICBibHVlT2Zmc2V0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkoY3QpIHtcbiAgICAgICAgcmV0dXJuIGN0LnJlZE11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmdyZWVuTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmFscGhhTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYmx1ZU9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHlXaXRoQWxwaGEoY3QpIHtcbiAgICAgICAgcmV0dXJuIGN0LnJlZE11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmdyZWVuTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LnJlZE9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5PZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmJsdWVPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmFscGhhT2Zmc2V0ID09PSAwO1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5pc0VtcHR5V2l0aEFscGhhID0gaXNFbXB0eVdpdGhBbHBoYTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShjdCkge1xuICAgICAgICBjdC5yZWRNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuZ3JlZW5NdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuYmx1ZU11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5hbHBoYU11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5yZWRPZmZzZXQgPSAwO1xuICAgICAgICBjdC5ncmVlbk9mZnNldCA9IDA7XG4gICAgICAgIGN0LmJsdWVPZmZzZXQgPSAwO1xuICAgICAgICBjdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gY29weShmcm9tLCB0bykge1xuICAgICAgICB0by5hbHBoYU11bHRpcGxpZXIgPSBmcm9tLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgdG8ucmVkTXVsdGlwbGllciA9IGZyb20ucmVkTXVsdGlwbGllcjtcbiAgICAgICAgdG8uZ3JlZW5NdWx0aXBsaWVyID0gZnJvbS5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIHRvLmJsdWVNdWx0aXBsaWVyID0gZnJvbS5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgdG8uYWxwaGFPZmZzZXQgPSBmcm9tLmFscGhhT2Zmc2V0O1xuICAgICAgICB0by5yZWRPZmZzZXQgPSBmcm9tLnJlZE9mZnNldDtcbiAgICAgICAgdG8uZ3JlZW5PZmZzZXQgPSBmcm9tLmdyZWVuT2Zmc2V0O1xuICAgICAgICB0by5ibHVlT2Zmc2V0ID0gZnJvbS5ibHVlT2Zmc2V0O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBjb25jYXQoY3QxLCBjdDAsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCBhbHBoYU11bHRpcGxpZXIgPSBjdDEuYWxwaGFNdWx0aXBsaWVyICogY3QwLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgcmVkTXVsdGlwbGllciA9IGN0MS5yZWRNdWx0aXBsaWVyICogY3QwLnJlZE11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGdyZWVuTXVsdGlwbGllciA9IGN0MS5ncmVlbk11bHRpcGxpZXIgKiBjdDAuZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBibHVlTXVsdGlwbGllciA9IGN0MS5ibHVlTXVsdGlwbGllciAqIGN0MC5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgYWxwaGFPZmZzZXQgPSBjdDEuYWxwaGFNdWx0aXBsaWVyICogY3QwLmFscGhhT2Zmc2V0ICsgY3QxLmFscGhhT2Zmc2V0O1xuICAgICAgICBjb25zdCByZWRPZmZzZXQgPSBjdDEucmVkTXVsdGlwbGllciAqIGN0MC5yZWRPZmZzZXQgKyBjdDEucmVkT2Zmc2V0O1xuICAgICAgICBjb25zdCBncmVlbk9mZnNldCA9IGN0MS5ncmVlbk11bHRpcGxpZXIgKiBjdDAuZ3JlZW5PZmZzZXQgKyBjdDEuZ3JlZW5PZmZzZXQ7XG4gICAgICAgIGNvbnN0IGJsdWVPZmZzZXQgPSBjdDEuYmx1ZU11bHRpcGxpZXIgKiBjdDAuYmx1ZU9mZnNldCArIGN0MS5ibHVlT2Zmc2V0O1xuICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHJlZE11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSBncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IGJsdWVNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSBhbHBoYU9mZnNldDtcbiAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IHJlZE9mZnNldDtcbiAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gZ3JlZW5PZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gYmx1ZU9mZnNldDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uY29uY2F0ID0gY29uY2F0O1xufSkoQ29sb3JUcmFuc2Zvcm0gfHwgKENvbG9yVHJhbnNmb3JtID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vY29sb3ItdHJhbnNmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vYm91bmRzJztcbmV4cG9ydCAqIGZyb20gJy4vbWF0cml4JztcbmV4cG9ydCAqIGZyb20gJy4vcG9pbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWN0YW5nbGUnO1xuIiwiZXhwb3J0IHZhciBNYXRyaXg7XG4oZnVuY3Rpb24gKE1hdHJpeCkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogMSxcbiAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICBjOiAwLFxuICAgICAgICAgICAgZDogMSxcbiAgICAgICAgICAgIHR4OiAwLFxuICAgICAgICAgICAgdHk6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIE1hdHJpeC5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkobWF0cml4KSB7XG4gICAgICAgIHJldHVybiBtYXRyaXguYSA9PT0gMVxuICAgICAgICAgICAgJiYgbWF0cml4LmIgPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC5jID09PSAwXG4gICAgICAgICAgICAmJiBtYXRyaXguZCA9PT0gMVxuICAgICAgICAgICAgJiYgbWF0cml4LnR4ID09PSAwXG4gICAgICAgICAgICAmJiBtYXRyaXgudHkgPT09IDA7XG4gICAgfVxuICAgIE1hdHJpeC5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShtYXRyaXgpIHtcbiAgICAgICAgbWF0cml4LmEgPSAxO1xuICAgICAgICBtYXRyaXguYiA9IDA7XG4gICAgICAgIG1hdHJpeC5jID0gMDtcbiAgICAgICAgbWF0cml4LmQgPSAxO1xuICAgICAgICBtYXRyaXgudHggPSAwO1xuICAgICAgICBtYXRyaXgudHkgPSAwO1xuICAgIH1cbiAgICBNYXRyaXguc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KGZyb20sIHRvKSB7XG4gICAgICAgIHRvLmEgPSBmcm9tLmE7XG4gICAgICAgIHRvLmIgPSBmcm9tLmI7XG4gICAgICAgIHRvLmMgPSBmcm9tLmM7XG4gICAgICAgIHRvLmQgPSBmcm9tLmQ7XG4gICAgICAgIHRvLnR4ID0gZnJvbS50eDtcbiAgICAgICAgdG8udHkgPSBmcm9tLnR5O1xuICAgIH1cbiAgICBNYXRyaXguY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gY29uY2F0KG1hdHJpeDAsIG1hdHJpeDEsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCBhID0gbWF0cml4MS5hICogbWF0cml4MC5hICsgbWF0cml4MS5iICogbWF0cml4MC5jO1xuICAgICAgICBjb25zdCBiID0gbWF0cml4MS5hICogbWF0cml4MC5iICsgbWF0cml4MS5iICogbWF0cml4MC5kO1xuICAgICAgICBjb25zdCBjID0gbWF0cml4MS5jICogbWF0cml4MC5hICsgbWF0cml4MS5kICogbWF0cml4MC5jO1xuICAgICAgICBjb25zdCBkID0gbWF0cml4MS5jICogbWF0cml4MC5iICsgbWF0cml4MS5kICogbWF0cml4MC5kO1xuICAgICAgICBjb25zdCB0eCA9IG1hdHJpeDEudHggKiBtYXRyaXgwLmEgKyBtYXRyaXgxLnR5ICogbWF0cml4MC5jICsgbWF0cml4MC50eDtcbiAgICAgICAgY29uc3QgdHkgPSBtYXRyaXgxLnR4ICogbWF0cml4MC5iICsgbWF0cml4MS50eSAqIG1hdHJpeDAuZCArIG1hdHJpeDAudHk7XG4gICAgICAgIHJlc3VsdC5hID0gYTtcbiAgICAgICAgcmVzdWx0LmIgPSBiO1xuICAgICAgICByZXN1bHQuYyA9IGM7XG4gICAgICAgIHJlc3VsdC5kID0gZDtcbiAgICAgICAgcmVzdWx0LnR4ID0gdHg7XG4gICAgICAgIHJlc3VsdC50eSA9IHR5O1xuICAgIH1cbiAgICBNYXRyaXguY29uY2F0ID0gY29uY2F0O1xuICAgIGZ1bmN0aW9uIGdldERldGVybWluYW50KG1hdHJpeCkge1xuICAgICAgICByZXR1cm4gbWF0cml4LmEgKiBtYXRyaXguZCAtIG1hdHJpeC5iICogbWF0cml4LmM7XG4gICAgfVxuICAgIE1hdHJpeC5nZXREZXRlcm1pbmFudCA9IGdldERldGVybWluYW50O1xuICAgIGZ1bmN0aW9uIGludmVydChtYXRyaXgsIHJlc3VsdCkge1xuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudChtYXRyaXgpO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC50eCA9IC1tYXRyaXgudHg7XG4gICAgICAgICAgICByZXN1bHQudHkgPSAtbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGV0ZXJtaW5hbnQgPSAxLjAgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gbWF0cml4LmEgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gLW1hdHJpeC5iICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuYyA9IC1tYXRyaXguYyAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBtYXRyaXguZCAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gLXJlc3VsdC5hICogbWF0cml4LnR4IC0gcmVzdWx0LmMgKiBtYXRyaXgudHk7XG4gICAgICAgICAgICByZXN1bHQudHkgPSAtcmVzdWx0LmIgKiBtYXRyaXgudHggLSByZXN1bHQuZCAqIG1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBNYXRyaXguaW52ZXJ0ID0gaW52ZXJ0O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50KG1hdHJpeCwgcG9pbnQsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICByZXN1bHQueCA9IHggKiBtYXRyaXguYSArIHkgKiBtYXRyaXguYyArIG1hdHJpeC50eDtcbiAgICAgICAgcmVzdWx0LnkgPSB4ICogbWF0cml4LmIgKyB5ICogbWF0cml4LmQgKyBtYXRyaXgudHk7XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludCA9IHRyYW5zZm9ybVBvaW50O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50TG9jYWwobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJlc3VsdC54ID0geCAqIG1hdHJpeC5hICsgeSAqIG1hdHJpeC5jO1xuICAgICAgICByZXN1bHQueSA9IHggKiBtYXRyaXguYiArIHkgKiBtYXRyaXguZDtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybVBvaW50TG9jYWwgPSB0cmFuc2Zvcm1Qb2ludExvY2FsO1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUludmVyc2VQb2ludChtYXRyaXgsIHBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgbGV0IGRldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KTtcbiAgICAgICAgaWYgKGRldGVybWluYW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQueCA9IC1tYXRyaXgudHg7XG4gICAgICAgICAgICByZXN1bHQueSA9IC1tYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCA9IDEgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgICAgICByZXN1bHQueCA9IGRldGVybWluYW50ICogKG1hdHJpeC5jICogKG1hdHJpeC50eSAtIHkpICsgbWF0cml4LmQgKiAoeCAtIG1hdHJpeC50eCkpO1xuICAgICAgICAgICAgcmVzdWx0LnkgPSBkZXRlcm1pbmFudCAqIChtYXRyaXguYSAqICh5IC0gbWF0cml4LnR5KSArIG1hdHJpeC5iICogKG1hdHJpeC50eCAtIHgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50ID0gdHJhbnNmb3JtSW52ZXJzZVBvaW50O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUJvdW5kcyhtYXRyaXgsIGJvdW5kcywgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgYSwgYiwgYywgZCwgdHgsIHR5LCB9ID0gbWF0cml4O1xuICAgICAgICBjb25zdCByeCA9IGJvdW5kcy54O1xuICAgICAgICBjb25zdCByeSA9IGJvdW5kcy55O1xuICAgICAgICBjb25zdCByciA9IHJ4ICsgYm91bmRzLndpZHRoO1xuICAgICAgICBjb25zdCByYiA9IHJ5ICsgYm91bmRzLmhlaWdodDtcbiAgICAgICAgY29uc3QgbngxID0gcnggKiBhICsgcnkgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MSA9IHJ4ICogYiArIHJ5ICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDIgPSByciAqIGEgKyByeSAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkyID0gcnIgKiBiICsgcnkgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54MyA9IHJyICogYSArIHJiICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTMgPSByciAqIGIgKyByYiAqIGQgKyB0eTtcbiAgICAgICAgY29uc3Qgbng0ID0gcnggKiBhICsgcmIgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55NCA9IHJ4ICogYiArIHJiICogZCArIHR5O1xuICAgICAgICBsZXQgbGVmdCA9IG54MTtcbiAgICAgICAgaWYgKGxlZnQgPiBueDIpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQgPiBueDMpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQgPiBueDQpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvcCA9IG55MTtcbiAgICAgICAgaWYgKHRvcCA+IG55Mikge1xuICAgICAgICAgICAgdG9wID0gbnkyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3AgPiBueTMpIHtcbiAgICAgICAgICAgIHRvcCA9IG55MztcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9wID4gbnk0KSB7XG4gICAgICAgICAgICB0b3AgPSBueTQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJpZ2h0ID0gbngxO1xuICAgICAgICBpZiAocmlnaHQgPCBueDIpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbngyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCA8IG54Mykge1xuICAgICAgICAgICAgcmlnaHQgPSBueDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0IDwgbng0KSB7XG4gICAgICAgICAgICByaWdodCA9IG54NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYm90dG9tID0gbnkxO1xuICAgICAgICBpZiAoYm90dG9tIDwgbnkyKSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdHRvbSA8IG55Mykge1xuICAgICAgICAgICAgYm90dG9tID0gbnkzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3R0b20gPCBueTQpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55NDtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQueCA9IGxlZnQ7XG4gICAgICAgIHJlc3VsdC55ID0gdG9wO1xuICAgICAgICByZXN1bHQud2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBib3R0b20gLSB0b3A7XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Cb3VuZHMgPSB0cmFuc2Zvcm1Cb3VuZHM7XG59KShNYXRyaXggfHwgKE1hdHJpeCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFBvaW50O1xuKGZ1bmN0aW9uIChQb2ludCkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuICAgIFBvaW50LmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gbGVuZ3RoKHBvaW50KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfVxuICAgIFBvaW50Lmxlbmd0aCA9IGxlbmd0aDtcbiAgICBmdW5jdGlvbiBhbmdsZShwb2ludCkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihwb2ludC55LCBwb2ludC54KTtcbiAgICB9XG4gICAgUG9pbnQuYW5nbGUgPSBhbmdsZTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludC54ID09PSAwICYmIHBvaW50LnkgPT09IDA7XG4gICAgfVxuICAgIFBvaW50LmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGVxdWFscyhwb2ludDAsIHBvaW50MSkge1xuICAgICAgICByZXR1cm4gcG9pbnQwLnggPT09IHBvaW50MS54ICYmIHBvaW50MC55ID09PSBwb2ludDEueTtcbiAgICB9XG4gICAgUG9pbnQuZXF1YWxzID0gZXF1YWxzO1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KHBvaW50KSB7XG4gICAgICAgIHBvaW50LnggPSAwO1xuICAgICAgICBwb2ludC55ID0gMDtcbiAgICB9XG4gICAgUG9pbnQuc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC54ID0gc291cmNlLng7XG4gICAgICAgIHRhcmdldC55ID0gc291cmNlLnk7XG4gICAgfVxuICAgIFBvaW50LmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZShwb2ludCwgdGhpY2tuZXNzKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGxlbmd0aChwb2ludCk7XG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpY2tuZXNzIC8gdmFsdWU7XG4gICAgICAgICAgICBwb2ludC54ICo9IHZhbHVlO1xuICAgICAgICAgICAgcG9pbnQueSAqPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQb2ludC5ub3JtYWxpemUgPSBub3JtYWxpemU7XG4gICAgZnVuY3Rpb24gZGlzdGFuY2UocG9pbnQwLCBwb2ludDEpIHtcbiAgICAgICAgY29uc3QgZHggPSBwb2ludDAueCAtIHBvaW50MS54O1xuICAgICAgICBjb25zdCBkeSA9IHBvaW50MC55IC0gcG9pbnQxLnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cbiAgICBQb2ludC5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIGZ1bmN0aW9uIGludGVycG9sYXRlKGJlZ2luLCBlbmQsIHZhbHVlLCByZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0LnggPSBiZWdpbi54ICsgdmFsdWUgKiAoZW5kLnggLSBiZWdpbi54KTtcbiAgICAgICAgcmVzdWx0LnkgPSBiZWdpbi55ICsgdmFsdWUgKiAoZW5kLnkgLSBiZWdpbi55KTtcbiAgICB9XG4gICAgUG9pbnQuaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcbiAgICBmdW5jdGlvbiBwb2xhcihwb2ludCwgbGVuZ3RoLCBhbmdsZSkge1xuICAgICAgICBwb2ludC54ID0gbGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgICBwb2ludC55ID0gbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIH1cbiAgICBQb2ludC5wb2xhciA9IHBvbGFyO1xufSkoUG9pbnQgfHwgKFBvaW50ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUmVjdGFuZ2xlO1xuKGZ1bmN0aW9uIChSZWN0YW5nbGUpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFJlY3RhbmdsZS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KHJlY3RhbmdsZSkge1xuICAgICAgICByZWN0YW5nbGUueCA9IDA7XG4gICAgICAgIHJlY3RhbmdsZS55ID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLndpZHRoID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLmhlaWdodCA9IDA7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0YW5nbGUud2lkdGggPT09IDAgfHwgcmVjdGFuZ2xlLmhlaWdodCA9PT0gMDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGNvbnRhaW5zKHJlY3RhbmdsZSwgcG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZS54IDwgcG9pbnQueFxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnggKyByZWN0YW5nbGUud2lkdGggPiBwb2ludC54XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueSA8IHBvaW50LnlcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS55ICsgcmVjdGFuZ2xlLmhlaWdodCA+IHBvaW50Lnk7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5jb250YWlucyA9IGNvbnRhaW5zO1xufSkoUmVjdGFuZ2xlIHx8IChSZWN0YW5nbGUgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAZTJkL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0sIE1hdHJpeCwgUmVjdGFuZ2xlIH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSB9IGZyb20gJy4vaW1hZ2UnO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb247XG4oZnVuY3Rpb24gKENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICAgICAgY29uc3QgcGxhdGZvcm0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IHBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgICAgIGlmIChDb2xvclRyYW5zZm9ybS5pc0VtcHR5V2l0aEFscGhhKGNvbG9yVHJhbnNmb3JtKSkge1xuICAgICAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjdXN0b21Db250ZXh0ID0gcGxhdGZvcm0uY3JlYXRlQ3VzdG9tQ29udGV4dCgpO1xuICAgICAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICAgICAgYm91bmRzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybUJvdW5kcyhtYXRyaXgsIGJvdW5kcywgYm91bmRzKTtcbiAgICAgICAgICAgIGlmIChSZWN0YW5nbGUuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuY2xlYXJSZWN0KGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBjdXN0b21Db250ZXh0LmdldEltYWdlRGF0YShib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBjb25zdCBybSA9IGNvbG9yVHJhbnNmb3JtLnJlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBnbSA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IGJtID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBhbSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IHJvID0gY29sb3JUcmFuc2Zvcm0ucmVkT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgZ28gPSBjb2xvclRyYW5zZm9ybS5ncmVlbk9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGJvID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGFvID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFPZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGltYWdlRGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBkYXRhO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIHJtICsgcm87XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGdtICsgZ287XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGJtICsgYm87XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGFtICsgYW87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIGJvdW5kcy54LCBib3VuZHMueSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZShjdXN0b21Db250ZXh0LmNhbnZhcywgYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQsIGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHBsYXRmb3JtLmRlc3Ryb3lDdXN0b21Db250ZXh0KGN1c3RvbUNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIEltYWdlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChJTUFHRSwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gfHwgKENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAZTJkL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VFeHRlbnNpb24sIElNQUdFIH0gZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgdmFyIENhbnZhc0ltYWdlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNJbWFnZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihpbWFnZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBpbWFnZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IGVuZ2luZS5wbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgSW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KElNQUdFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc0ltYWdlRXh0ZW5zaW9uIHx8IChDYW52YXNJbWFnZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCwgUmVzb3VyY2UsIH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGUyZC9yZXNvdXJjZXMnO1xuZXhwb3J0IGNvbnN0IElNQUdFID0gJ2ltYWdlJztcbmV4cG9ydCB2YXIgSW1hZ2U7XG4oZnVuY3Rpb24gKEltYWdlKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGltYWdlLCBib3VuZHMsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgIGJvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBJbWFnZS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShJbWFnZSB8fCAoSW1hZ2UgPSB7fSkpO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIEltYWdlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChJbWFnZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGhpdFRlc3QoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGxvY2FsIH0gPSBlbmdpbmUucG9pbnRlcnM7XG4gICAgICAgIEltYWdlLmNhbGN1bGF0ZUJvdW5kcyhpbWFnZSwgYm91bmRzLCBlbmdpbmUpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKGJvdW5kcywgbG9jYWwpO1xuICAgIH1cbiAgICBJbWFnZUV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBsb2FkZWQoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLmxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSBSZXNvdXJjZS5nZXRQcm9ncmVzcyhyZXNvdXJjZSk7XG4gICAgICAgIGNvbnRleHQubG9hZGVkID0gISFyZXNvdXJjZT8ubG9hZGVkICYmICEhcmVzb3VyY2U/LmltYWdlO1xuICAgIH1cbiAgICBJbWFnZUV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoSU1BR0UsIGhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KElNQUdFLCBsb2FkZWQpO1xuICAgICAgICBJbWFnZVJlc291cmNlLmluaXQoZW5naW5lKTtcbiAgICB9XG4gICAgSW1hZ2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShJbWFnZUV4dGVuc2lvbiB8fCAoSW1hZ2VFeHRlbnNpb24gPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy1pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy1pbWFnZS1jb2xvcic7XG4iLCJleHBvcnQgdmFyIEltYWdlUmVzb3VyY2U7XG4oZnVuY3Rpb24gKEltYWdlUmVzb3VyY2UpIHtcbiAgICBmdW5jdGlvbiByZXNvbHZlKGFzc2V0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gYXNzZXQuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgICAgc3dpdGNoIChleHRlbnNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3BuZyc6XG4gICAgICAgICAgICBjYXNlICdqcGcnOlxuICAgICAgICAgICAgY2FzZSAnd2VicCc6XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBieXRlc0xvYWRlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNUb3RhbDogMCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gYXNzZXQ7XG4gICAgICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaW1hZ2UgbG9hZGVkOiAke2Fzc2V0fWApO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5pbWFnZSA9IGltYWdlO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdpbWFnZSBsb2FkIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBJbWFnZVJlc291cmNlLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvbHZlKTtcbiAgICB9XG4gICAgSW1hZ2VSZXNvdXJjZS5pbml0ID0gaW5pdDtcbn0pKEltYWdlUmVzb3VyY2UgfHwgKEltYWdlUmVzb3VyY2UgPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmluZyc7XG4iLCJleHBvcnQgdmFyIFN0cmluZ1Jlc291cmNlO1xuKGZ1bmN0aW9uIChTdHJpbmdSZXNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIHJlc29sdmUoYXNzZXQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBleHRlbnNpb24gPSBhc3NldC5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgICBzd2l0Y2ggKGV4dGVuc2lvbikge1xuICAgICAgICAgICAgY2FzZSAndHh0JzpcbiAgICAgICAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0ge1xuICAgICAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNMb2FkZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzVG90YWw6IDAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgYXNzZXQsIHRydWUpO1xuICAgICAgICAgICAgICAgIHhoci5vbnByb2dyZXNzID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuYnl0ZXNMb2FkZWQgPSBlLmxvYWRlZDtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuYnl0ZXNUb3RhbCA9IGUudG90YWw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgc3RyaW5nIGxvYWRlZDogJHthc3NldH1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuZGF0YSA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmJ5dGVzTG9hZGVkID0gcmVzb3VyY2UuYnl0ZXNUb3RhbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5vbmVycm9yID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ3N0cmluZyBsb2FkIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFN0cmluZ1Jlc291cmNlLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvbHZlKTtcbiAgICB9XG4gICAgU3RyaW5nUmVzb3VyY2UuaW5pdCA9IGluaXQ7XG59KShTdHJpbmdSZXNvdXJjZSB8fCAoU3RyaW5nUmVzb3VyY2UgPSB7fSkpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0IHsgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiwgSW1hZ2UgfSBmcm9tICdAZTJkL2ltYWdlJztcbmltcG9ydCB7IENhbnZhc0VuZ2luZSB9IGZyb20gJ0BlMmQvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBDb250YWluZXIsIFRyYW5zZm9ybSB9IGZyb20gJ0BlMmQvY29yZSc7XG5cbi8vIGNyZWF0ZSBlbmdpbmVcbmNvbnN0IGVuZ2luZSA9IG5ldyBDYW52YXNFbmdpbmUoKTtcbi8vIGFkZCBpbWFnZSBleHRlbnNpb25cbkNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuLy8gc2V0IGZ1bGxzY3JlZW4gbW9kZVxuZW5naW5lLnNjcmVlbi5mdWxsc2NyZWVuID0gdHJ1ZTtcbi8vIHN0YXJ0IHVwZGF0ZSBsb29wXG5lbmdpbmUudGlja2VyLnBsYXkoKTtcblxuLy8gc2V0dXAgcGFnZVxuZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAnMCc7XG5kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSAnMCc7XG4vLyBhZGQgZW5naW5lIHZpZXcgdG8gcGFnZVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbmdpbmUucGxhdGZvcm0udmlldyk7XG5cbmNvbnN0IHJpbmcgPSB7XG5cdHR5cGU6ICdpbWFnZScsXG5cdHNyYzogJ2Fzc2V0cy9SaW5nc19wcm9tb19teXRoaWMucG5nJyxcblx0c2NhbGU6IDAuNCxcbn0gYXMgSW1hZ2U7XG5cbmNvbnN0IHRyYW5zZm9ybXM6IEFycmF5PFRyYW5zZm9ybT4gPSBbXG5cdHt9LFxuXHR7IGFscGhhOiAwLjIgfSxcblx0eyB0aW50OiB7IGNvbG9yOiAweGZmMDAwMCwgdmFsdWU6IDAuNSB9IH0sXG5cdHsgYnJpZ2h0bmVzczogMC41IH0sXG5cdHsgYnJpZ2h0bmVzczogMCB9LFxuXHR7IGJyaWdodG5lc3M6IC0wLjUgfSxcbl07XG5cbi8vIGNyZWF0ZSBjb250YWluZXIgd2l0aCBpbWFnZVxuZW5naW5lLnJvb3QgPSB7XG5cdHR5cGU6ICdjb250YWluZXInLFxuXHRjaGlsZHJlbjogdHJhbnNmb3Jtcy5tYXAoKHRyYW5zZm9ybSwgaW5kZXgpID0+ICh7XG5cdFx0Li4udHJhbnNmb3JtLFxuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdGNoaWxkcmVuOiByaW5nLFxuXHRcdHg6IDIwICsgMTUwICogKGluZGV4ICUgMyksXG5cdFx0eTogMjAgKyAxMjAgKiAoKGluZGV4IC8gMykgfCAwKSxcblx0fSBhcyBDb250YWluZXIpKSxcbn0gYXMgQ29udGFpbmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==