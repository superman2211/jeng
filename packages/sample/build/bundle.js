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

/***/ "../core/dist/components/loader.js":
/*!*****************************************!*\
  !*** ../core/dist/components/loader.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": () => (/* binding */ Loader),
/* harmony export */   "LoaderExtension": () => (/* binding */ LoaderExtension)
/* harmony export */ });
/* unused harmony export LOADER */
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "../core/dist/components/container.js");

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
/* harmony import */ var _features_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/loading */ "../core/dist/features/loading.js");
/* harmony import */ var _features_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/screen */ "../core/dist/features/screen.js");
/* harmony import */ var _features_pointer_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/pointer-events */ "../core/dist/features/pointer-events.js");
/* harmony import */ var _features_ticker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../features/ticker */ "../core/dist/features/ticker.js");
/* harmony import */ var _features_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../features/platform */ "../core/dist/features/platform.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/container */ "../core/dist/components/container.js");
/* harmony import */ var _features_debug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../features/debug */ "../core/dist/features/debug.js");
/* harmony import */ var _features_resources__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../features/resources */ "../core/dist/features/resources.js");
/* harmony import */ var _features_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../features/components */ "../core/dist/features/components.js");
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/loader */ "../core/dist/components/loader.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }













var Engine = function Engine() {
  var _module$Components, _module$Screen, _module$Platform, _module$Updater, _module$Loading, _module$Renderer, _module$PointerEvents, _module$Ticker, _module$Debug, _module$Resources;

  var module = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, Engine);

  this.depth = 32;
  module.Components = (_module$Components = module.Components) !== null && _module$Components !== void 0 ? _module$Components : _features_components__WEBPACK_IMPORTED_MODULE_10__.Components;
  module.Screen = (_module$Screen = module.Screen) !== null && _module$Screen !== void 0 ? _module$Screen : _features_screen__WEBPACK_IMPORTED_MODULE_3__.Screen;
  module.Platform = (_module$Platform = module.Platform) !== null && _module$Platform !== void 0 ? _module$Platform : _features_platform__WEBPACK_IMPORTED_MODULE_6__.Platform;
  module.Updater = (_module$Updater = module.Updater) !== null && _module$Updater !== void 0 ? _module$Updater : _features_updater__WEBPACK_IMPORTED_MODULE_1__.Updater;
  module.Loading = (_module$Loading = module.Loading) !== null && _module$Loading !== void 0 ? _module$Loading : _features_loading__WEBPACK_IMPORTED_MODULE_2__.Loading;
  module.Renderer = (_module$Renderer = module.Renderer) !== null && _module$Renderer !== void 0 ? _module$Renderer : _features_renderer__WEBPACK_IMPORTED_MODULE_0__.Renderer;
  module.PointerEvents = (_module$PointerEvents = module.PointerEvents) !== null && _module$PointerEvents !== void 0 ? _module$PointerEvents : _features_pointer_events__WEBPACK_IMPORTED_MODULE_4__.PointerEvents;
  module.Ticker = (_module$Ticker = module.Ticker) !== null && _module$Ticker !== void 0 ? _module$Ticker : _features_ticker__WEBPACK_IMPORTED_MODULE_5__.Ticker;
  module.Debug = (_module$Debug = module.Debug) !== null && _module$Debug !== void 0 ? _module$Debug : _features_debug__WEBPACK_IMPORTED_MODULE_8__.Debug;
  module.Resources = (_module$Resources = module.Resources) !== null && _module$Resources !== void 0 ? _module$Resources : _features_resources__WEBPACK_IMPORTED_MODULE_9__.Resources;
  this.components = new module.Components();
  this.screen = new module.Screen();
  this.platform = new module.Platform(this);
  this.updater = new module.Updater(this);
  this.loading = new module.Loading(this);
  this.renderer = new module.Renderer(this);
  this.pointerEvents = new module.PointerEvents(this);
  this.ticker = new module.Ticker(this);
  this.debug = new module.Debug();
  this.resources = new module.Resources(this);
  _components_container__WEBPACK_IMPORTED_MODULE_7__.ContainerExtension.init(this);
  _components_loader__WEBPACK_IMPORTED_MODULE_11__.LoaderExtension.init(this);
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

/***/ "../core/dist/extensions/display.js":
/*!******************************************!*\
  !*** ../core/dist/extensions/display.js ***!
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

/***/ "../core/dist/extensions/pivot.js":
/*!****************************************!*\
  !*** ../core/dist/extensions/pivot.js ***!
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

/***/ "../core/dist/extensions/pointer.js":
/*!******************************************!*\
  !*** ../core/dist/extensions/pointer.js ***!
  \******************************************/
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

/***/ "../core/dist/extensions/source.js":
/*!*****************************************!*\
  !*** ../core/dist/extensions/source.js ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "../core/dist/extensions/transform.js":
/*!********************************************!*\
  !*** ../core/dist/extensions/transform.js ***!
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

/***/ "../core/dist/extensions/update.js":
/*!*****************************************!*\
  !*** ../core/dist/extensions/update.js ***!
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

/***/ "../core/dist/features/loading.js":
/*!****************************************!*\
  !*** ../core/dist/features/loading.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loading": () => (/* binding */ Loading)
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
/* harmony import */ var _extensions_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extensions/display */ "../core/dist/extensions/display.js");
/* harmony import */ var _extensions_pointer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extensions/pointer */ "../core/dist/extensions/pointer.js");
/* harmony import */ var _extensions_transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../extensions/transform */ "../core/dist/extensions/transform.js");
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
/* harmony import */ var _extensions_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extensions/display */ "../core/dist/extensions/display.js");
/* harmony import */ var _extensions_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extensions/transform */ "../core/dist/extensions/transform.js");
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

/***/ "../core/dist/features/updater.js":
/*!****************************************!*\
  !*** ../core/dist/features/updater.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Updater": () => (/* binding */ Updater)
/* harmony export */ });
/* harmony import */ var _extensions_update__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extensions/update */ "../core/dist/extensions/update.js");
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

/***/ "../core/dist/index.js":
/*!*****************************!*\
  !*** ../core/dist/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": () => (/* reexport safe */ _components_loader__WEBPACK_IMPORTED_MODULE_2__.Loader),
/* harmony export */   "Engine": () => (/* reexport safe */ _core_engine__WEBPACK_IMPORTED_MODULE_3__.Engine),
/* harmony export */   "Platform": () => (/* reexport safe */ _features_platform__WEBPACK_IMPORTED_MODULE_7__.Platform),
/* harmony export */   "MouseExtension": () => (/* reexport safe */ _input_mouse__WEBPACK_IMPORTED_MODULE_14__.MouseExtension),
/* harmony export */   "Pivot": () => (/* reexport safe */ _extensions_pivot__WEBPACK_IMPORTED_MODULE_16__.Pivot)
/* harmony export */ });
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/component */ "../core/dist/components/component.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/container */ "../core/dist/components/container.js");
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/loader */ "../core/dist/components/loader.js");
/* harmony import */ var _core_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/engine */ "../core/dist/core/engine.js");
/* harmony import */ var _features_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/components */ "../core/dist/features/components.js");
/* harmony import */ var _features_debug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/debug */ "../core/dist/features/debug.js");
/* harmony import */ var _core_feature__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/feature */ "../core/dist/core/feature.js");
/* harmony import */ var _features_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/platform */ "../core/dist/features/platform.js");
/* harmony import */ var _features_pointer_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/pointer-events */ "../core/dist/features/pointer-events.js");
/* harmony import */ var _features_renderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/renderer */ "../core/dist/features/renderer.js");
/* harmony import */ var _features_resources__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/resources */ "../core/dist/features/resources.js");
/* harmony import */ var _features_screen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/screen */ "../core/dist/features/screen.js");
/* harmony import */ var _features_ticker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/ticker */ "../core/dist/features/ticker.js");
/* harmony import */ var _features_updater__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features/updater */ "../core/dist/features/updater.js");
/* harmony import */ var _input_mouse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./input/mouse */ "../core/dist/input/mouse.js");
/* harmony import */ var _extensions_display__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./extensions/display */ "../core/dist/extensions/display.js");
/* harmony import */ var _extensions_pivot__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./extensions/pivot */ "../core/dist/extensions/pivot.js");
/* harmony import */ var _extensions_source__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./extensions/source */ "../core/dist/extensions/source.js");
/* harmony import */ var _extensions_transform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./extensions/transform */ "../core/dist/extensions/transform.js");
/* harmony import */ var _extensions_update__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./extensions/update */ "../core/dist/extensions/update.js");





















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
    var local = engine.pointerEvents.local;
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

    if (!(resource !== null && resource !== void 0 && resource.loaded) || !(resource !== null && resource !== void 0 && resource.image)) {
      context.progress = 0;
      context.loaded = false;
    } else {
      context.progress = 1;
      context.loaded = true;
    }
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
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var emptyMatrix = _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Matrix.empty();
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
        var bitmapFill = fill;
        var _bitmapFill$repeat = bitmapFill.repeat,
            repeat = _bitmapFill$repeat === void 0 ? true : _bitmapFill$repeat,
            src = bitmapFill.src;

        if (!src) {
          return '';
        }

        var resource = engine.resources.get(src);

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
    this.numberRegex = /[-+]?[\d.]+/g;
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
/* harmony import */ var _e2d_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/core */ "../core/dist/index.js");
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
            return _e2d_core__WEBPACK_IMPORTED_MODULE_0__.Loader.getLoadingProgress(content);
        },
    };
    return {
        type: 'container',
        children: {
            content,
            preloader: (0,_preloader__WEBPACK_IMPORTED_MODULE_5__.preloader)(preloaderInfo),
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
const app = (0,_main__WEBPACK_IMPORTED_MODULE_6__.default)(parameters);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jYW52YXMtZW5naW5lL2Rpc3QvZW5naW5lLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NhbnZhcy1lbmdpbmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jYW52YXMtZW5naW5lL2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY2FudmFzLWVuZ2luZS9kaXN0L3BsYXRmb3JtLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvY29tcG9uZW50cy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2NvcmUvZW5naW5lLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9jb3JlL2ZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2V4dGVuc2lvbnMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy9waXZvdC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy9wb2ludGVyLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9leHRlbnNpb25zL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ZlYXR1cmVzL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ZlYXR1cmVzL2RlYnVnLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9mZWF0dXJlcy9sb2FkaW5nLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9mZWF0dXJlcy9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvZmVhdHVyZXMvcG9pbnRlci1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ZlYXR1cmVzL3JlbmRlcmVyLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9mZWF0dXJlcy9yZXNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY29yZS9kaXN0L2ZlYXR1cmVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvZmVhdHVyZXMvdGlja2VyLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9mZWF0dXJlcy91cGRhdGVyLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NvcmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jb3JlL2Rpc3QvaW5wdXQvbW91c2UuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZ2VvbS9kaXN0L2JvdW5kcy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9nZW9tL2Rpc3QvY29sb3ItdHJhbnNmb3JtLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9nZW9tL2Rpc3QvbWF0cml4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9wb2ludC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9nZW9tL2Rpc3QvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2ltYWdlL2Rpc3QvY2FudmFzLWltYWdlLWNvbG9yLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2ltYWdlL2Rpc3QvY2FudmFzLWltYWdlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2ltYWdlL2Rpc3QvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vaW1hZ2UvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9yZXNvdXJjZXMvZGlzdC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2NhbnZhcy9lbGxpcHNlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvY2FudmFzL3BhdGguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vc2hhcGUvZGlzdC9jYW52YXMvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvY2FudmFzL3NoYXBlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvY2FudmFzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2NhbnZhcy9zdHlsZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2RhdGEvZGF0YS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2RhdGEvcGF0aC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2RhdGEvc3RyaW5nLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvZ3JhcGhpY3MuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vc2hhcGUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L3NoYXBlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3RleHQvZGlzdC9jYW52YXMtdGV4dC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90ZXh0L2Rpc3QvZm9udC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90ZXh0L2Rpc3QvZm9ybWF0LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3RleHQvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90ZXh0L2Rpc3QvdGV4dC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90d2Vlbi9kaXN0L2Vhc2luZy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90d2Vlbi9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3R3ZWVuL2Rpc3QvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvYXJ0aWZhY3QudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvYXNzZXRzLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2VuZ2luZS9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvZW5naW5lL2ltYWdlLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2VuZ2luZS9wbGF0Zm9ybS50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9lbmdpbmUvcmVzb3VyY2VzLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2Zwcy50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9tYWluLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL3ByZWxvYWRlci50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy91bml0LnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BlMmQvc2FtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbIkNhbnZhc0VuZ2luZSIsIm1vZHVsZSIsIlBsYXRmb3JtIiwiQ2FudmFzUGxhdGZvcm0iLCJFbmdpbmUiLCJwb2ludDEiLCJQb2ludCIsInBvaW50MiIsIkNhbnZhc1BhdHRlcm5zIiwiY29sb3JQYXR0ZXJuIiwiY29sb3IiLCJhbHBoYSIsImN0IiwiciIsImciLCJiIiwiYSIsIkNvbG9yVHJhbnNmb3JtIiwicmVkTXVsdGlwbGllciIsInJlZE9mZnNldCIsImdyZWVuTXVsdGlwbGllciIsImdyZWVuT2Zmc2V0IiwiYmx1ZU11bHRpcGxpZXIiLCJibHVlT2Zmc2V0IiwiYWxwaGFNdWx0aXBsaWVyIiwiYWxwaGFPZmZzZXQiLCJhZGRHcmFkaWVudENvbG9ycyIsInBhdHRlcm4iLCJjb2xvcnMiLCJhbHBoYXMiLCJyYXRpb3MiLCJjb2xvclRyYW5zZm9ybSIsImkiLCJsZW5ndGgiLCJyZ2IiLCJyYXRpbyIsImFkZENvbG9yU3RvcCIsInJhZGlhbEdyYWRpZW50UGF0dGVybiIsIm1hdHJpeCIsImNvbnRleHQiLCJ4IiwieSIsIk1hdHJpeCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwidHgiLCJ0eSIsIk1hdGgiLCJhYnMiLCJsaW5lYXJHcmFkaWVudFBhdHRlcm4iLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImJpdG1hcFBhdHRlcm4iLCJpbWFnZSIsInJlcGVhdCIsImNyZWF0ZVBhdHRlcm4iLCJhcmd1bWVudHMiLCJ2aWV3IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dHMiLCJnZXRDb250ZXh0IiwiY3VzdG9tQ29udGV4dHMiLCJwdXNoIiwicG9wIiwiZW5naW5lIiwiZGVidWciLCJ3YXJuaW5nIiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJjbGVhciIsInVwZGF0ZVNpemUiLCJzZXRUcmFuc2Zvcm0iLCJjbGVhclJlY3QiLCJzY3JlZW4iLCJnZXRXaWR0aCIsImdldEhlaWdodCIsInBpeGVsUmF0aW8iLCJnZXRQaXhlbFJhdGlvIiwidmlld1dpZHRoIiwiZmxvb3IiLCJ2aWV3SGVpZ2h0Iiwic3R5bGUiLCJDT05UQUlORVIiLCJDb250YWluZXIiLCJudW1DaGlsZHJlbiIsImNvbnRhaW5lciIsImNoaWxkcmVuIiwiQXJyYXkiLCJpc0FycmF5IiwidHlwZSIsImtleXMiLCJPYmplY3QiLCJDb250YWluZXJFeHRlbnNpb24iLCJyZW5kZXIiLCJyZW5kZXJlciIsImRlcHRoIiwiY29tcG9uZW50IiwicmVuZGVyQ29tcG9uZW50IiwiY29tcG9uZW50c01hcCIsInVwZGF0ZSIsInVwZGF0ZXIiLCJ1cGRhdGVDb21wb25lbnQiLCJoaXRUZXN0IiwicG9pbnRlckV2ZW50cyIsInJlc3VsdCIsImRpc3BhdGNoQ29tcG9uZW50IiwibG9hZGVkIiwibG9hZGluZyIsInByb2dyZXNzIiwiY29tcG9uZW50Q29udGV4dCIsImluaXQiLCJjb21wb25lbnRzIiwic2V0IiwiTE9BREVSIiwiTG9hZGVyIiwiZ2V0TG9hZGluZ1Byb2dyZXNzIiwibG9hZGVyIiwibG9hZGluZ1Byb2dyZXNzIiwiaXNMb2FkZWQiLCJuZWVkTG9hZGluZ0NoZWNrIiwibG9hZGluZ0NoZWNrIiwiTG9hZGVyRXh0ZW5zaW9uIiwib25Mb2FkZWQiLCJDb21wb25lbnRzIiwiU2NyZWVuIiwiVXBkYXRlciIsIkxvYWRpbmciLCJSZW5kZXJlciIsIlBvaW50ZXJFdmVudHMiLCJUaWNrZXIiLCJEZWJ1ZyIsIlJlc291cmNlcyIsInBsYXRmb3JtIiwidGlja2VyIiwicmVzb3VyY2VzIiwiRW5naW5lRmVhdHVyZSIsIkRpc3BsYXkiLCJpc1Zpc2libGUiLCJ2aXNpYmxlIiwiUGl2b3QiLCJnZXRYIiwicGl2b3QiLCJwaXZvdFgiLCJnZXRZIiwicGl2b3RZIiwiaGFzVmFsdWVzIiwiaGFuZGxlcnNNYXAiLCJwb2ludGVyRG93biIsInBvaW50ZXJVcCIsInBvaW50ZXJNb3ZlIiwicG9pbnRlck92ZXIiLCJwb2ludGVyT3V0IiwiUG9pbnRlciIsImlzUG9pbnRlck92ZXIiLCJwb2ludGVyIiwiaXNQb2ludGVyRW5hYmxlZCIsInBvaW50ZXJFbmFibGVkIiwiZGlzcGF0Y2hFdmVudCIsImlkIiwiaGFuZGxlck5hbWUiLCJldmVudCIsIlRyYW5zZm9ybSIsImdldE1hdHJpeCIsInRyYW5zZm9ybSIsImMiLCJkIiwicm90YXRpb24iLCJzY2FsZVgiLCJzY2FsZSIsInNjYWxlWSIsImNvcyIsInNpbiIsImdldENvbG9yVHJhbnNmb3JtIiwidGludCIsInZhbHVlIiwidmFsdWVJbnZlcnRlZCIsIlVwZGF0ZSIsImlzRW5hYmxlZCIsImVuYWJsZWQiLCJ0aW1lIiwib25VcGRhdGUiLCJwcm9wZXJ0aWVzIiwiTWFwIiwiZXJyb3JzIiwid2FybmluZ3MiLCJjb25zb2xlIiwibG9nIiwiYXJncyIsIlN0cmluZyIsImNvdW50IiwiZ2V0IiwiZXJyb3IiLCJ3YXJuIiwiZWxhcHNlZFRpbWUiLCJoYW5kbGVyIiwicm9vdCIsInN0YXJ0VGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiZ2xvYmFsIiwibG9jYWwiLCJwb2ludGVySWQiLCJwb2ludGVyVHlwZSIsImJhc2UiLCJwYXJlbnQiLCJiZWdpbiIsImVuZCIsInJlc29sdmVycyIsIlNldCIsImFzc2V0IiwicmVzb3VyY2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdWxsc2NyZWVuIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZGV2aWNlUGl4ZWxSYXRpbyIsImZyYW1lUmF0ZSIsInBhdXNlZCIsInVwZGF0ZUZyYW1lIiwiY3VycmVudFRpbWUiLCJkZWx0YVRpbWUiLCJ1cGRhdGVOZXh0RnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGVQcm9wZXJ0aWVzIiwiZm9yRWFjaCIsInByb3BlcnR5IiwiY2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50TGVmdCIsImNsaWVudFkiLCJ0b3AiLCJjbGllbnRUb3AiLCJkaXNwYXRjaCIsInByZXZlbnREZWZhdWx0IiwiTW91c2VFeHRlbnNpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiQm91bmRzIiwiZW1wdHkiLCJtaW5YIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwibWluWSIsIm1heFgiLCJNSU5fVkFMVUUiLCJtYXhZIiwic2V0RW1wdHkiLCJib3VuZHMiLCJpc0VtcHR5IiwidG9SZWN0YW5nbGUiLCJyZWN0YW5nbGUiLCJ0ZXN0WCIsInRlc3RZIiwidGVzdCIsInRlc3RQb2ludCIsInBvaW50IiwiaXNFbXB0eVdpdGhBbHBoYSIsImNvcHkiLCJmcm9tIiwidG8iLCJjb25jYXQiLCJjdDEiLCJjdDAiLCJtYXRyaXgwIiwibWF0cml4MSIsImdldERldGVybWluYW50IiwiaW52ZXJ0IiwiZGV0ZXJtaW5hbnQiLCJ0cmFuc2Zvcm1Qb2ludCIsInRyYW5zZm9ybVBvaW50TG9jYWwiLCJ0cmFuc2Zvcm1JbnZlcnNlUG9pbnQiLCJ0cmFuc2Zvcm1Cb3VuZHMiLCJyeCIsInJ5IiwicnIiLCJyYiIsIm54MSIsIm55MSIsIm54MiIsIm55MiIsIm54MyIsIm55MyIsIm54NCIsIm55NCIsInJpZ2h0IiwiYm90dG9tIiwic3FydCIsImFuZ2xlIiwiYXRhbjIiLCJlcXVhbHMiLCJwb2ludDAiLCJzb3VyY2UiLCJ0YXJnZXQiLCJub3JtYWxpemUiLCJ0aGlja25lc3MiLCJkaXN0YW5jZSIsImR4IiwiZHkiLCJpbnRlcnBvbGF0ZSIsInBvbGFyIiwiUmVjdGFuZ2xlIiwiY29udGFpbnMiLCJDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uIiwic3JjIiwiY29udGV4dDJkIiwiZ2xvYmFsQWxwaGEiLCJkcmF3SW1hZ2UiLCJjdXN0b21Db250ZXh0IiwiY3JlYXRlQ3VzdG9tQ29udGV4dCIsImltYWdlRGF0YSIsImdldEltYWdlRGF0YSIsInJtIiwiZ20iLCJibSIsImFtIiwicm8iLCJnbyIsImJvIiwiYW8iLCJkYXRhIiwicHV0SW1hZ2VEYXRhIiwiZGVzdHJveUN1c3RvbUNvbnRleHQiLCJJbWFnZUV4dGVuc2lvbiIsIklNQUdFIiwiQ2FudmFzSW1hZ2VFeHRlbnNpb24iLCJJbWFnZSIsImNhbGN1bGF0ZUJvdW5kcyIsIkltYWdlUmVzb3VyY2UiLCJleHRlbnNpb24iLCJzcGxpdCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJlIiwiYWRkIiwiUElfMiIsIlBJIiwiYXBwbHlFbGxpcHNlIiwicmFkaXVzIiwicmFkaXVzWCIsInJhZGl1c1kiLCJiZWdpblBhdGgiLCJlbGxpcHNlIiwiY2xvc2VQYXRoIiwiYXBwbHlDb21tYW5kIiwiY29tbWFuZCIsIm1vdmVUbyIsImxpbmVUbyIsImN1cnZlVG8iLCJxdWFkcmF0aWNDdXJ2ZVRvIiwiY3giLCJjeSIsImN1YmljQ3VydmVUbyIsImJlemllckN1cnZlVG8iLCJzeCIsInN5IiwiYXBwbHlQYXRoIiwiYXBwbHlSZWN0YW5nbGUiLCJyZWN0Iiwib2Zmc2V0IiwicmVuZGVyR3JhcGhpY3MiLCJmaWxsIiwic3Ryb2tlIiwiaGFzRmlsbCIsImhhc1N0cm9rZSIsImV4aXN0IiwicGF0aCIsImFwcGx5U3RyaW5nIiwic2V0RmlsbFN0eWxlIiwic2V0U3Ryb2tlU3R5bGUiLCJDYW52YXNTaGFwZUV4dGVuc2lvbiIsInNoYXBlIiwiU2hhcGUiLCJTaGFwZUV4dGVuc2lvbiIsIlNIQVBFIiwicmVhZGVyIiwiR3JhcGhpY3NTdHJpbmdSZWFkZXIiLCJzZXRQYXRoIiwicmVhZE5leHQiLCJnZXRDb21tYW5kIiwiZW1wdHlNYXRyaXgiLCJlbXB0eUFycmF5IiwiZ2V0Q2FudmFzUGF0dGVybiIsInNvbGlkIiwibWwiLCJjbCIsImFsIiwicmwiLCJtciIsImNyIiwiYXIiLCJiaXRtYXBGaWxsIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJsaW5lQ2FwIiwibGluZUpvaW4iLCJtaXRlckxpbWl0IiwidW5kZWZpbmVkIiwiY2FwcyIsImpvaW50cyIsIlJlY3RhbmdsZURhdGEiLCJFbGxpcHNlRGF0YSIsIlBhdGhEYXRhIiwicGF0aERhdGEiLCJHcmFwaGljc1N0cmluZyIsIlBhdGhDb21tYW5kIiwiR3JhcGhpY3NEYXRhIiwiTlVNQkVSU19DT1VOVCIsIk0iLCJtIiwiTCIsImwiLCJIIiwiaCIsIlYiLCJ2IiwiQyIsIlMiLCJzIiwiUSIsInEiLCJUIiwidCIsIkdyYXBoaWNzU3RyaW5nU3RyZWFtIiwiYnVmZmVyIiwiY29tbWFuZFJlZ2V4IiwibnVtYmVyUmVnZXgiLCJsYXN0SW5kZXgiLCJjb21tYW5kTWF0Y2giLCJleGVjIiwiaW5kZXgiLCJudW1iZXJNYXRjaCIsInBhcnNlRmxvYXQiLCJzdHJlYW0iLCJjb21tYW5kRXhpc3RzIiwibGFzdFgiLCJsYXN0WSIsImxhc3RDWCIsImxhc3RDWSIsInBhcnNlIiwiZ2V0QnVmZmVyIiwiZTAiLCJlMSIsImUyIiwiZTMiLCJlNCIsImU1IiwiR3JhcGhpY3MiLCJzbW9vdGgiLCJzcHJlYWQiLCJpbnRlcnBvbGF0aW9uIiwiZm9jYWxQb2ludFJhdGlvIiwicGl4ZWxIaW50aW5nIiwic2NhbGVNb2RlIiwiZ2V0UGF0aCIsImVsbGlwc2VXaWR0aCIsImVsbGlwc2VIZWlnaHQiLCJ3IiwiayIsIm94Iiwib3kiLCJ4ZSIsInllIiwieG0iLCJ5bSIsImNyZWF0ZURhdGEiLCJncmFwaGljc0RhdGEiLCJnZXRHcmFwaGljcyIsInZhbGlkVGV4dEZvcm1hdCIsIkNhbnZhc1RleHRFeHRlbnNpb24iLCJ0ZXh0IiwibGluZXMiLCJ0ZXh0Rm9ybWF0IiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsIlRleHRGb3JtYXQiLCJmb3JtYXRTaXplIiwic2l6ZSIsImZvcm1hdExldHRlclNwYWNpbmciLCJsZXR0ZXJTcGFjaW5nIiwiZm9ybWF0TGVhZGluZyIsImxlYWRpbmciLCJmb250IiwiRm9udCIsInRleHRXaWR0aCIsInRleHRIZWlnaHQiLCJyZWFsV2lkdGgiLCJyZWFsSGVpZ2h0Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJhbGlnblZlcnRpY2FsVmFsdWUiLCJ2ZXJ0aWNhbEFsaWduIiwidGV4dEJhc2VsaW5lIiwibGluZSIsImFsaWduVmFsdWUiLCJhbGlnbiIsImoiLCJmaXJzdCIsImNoYXJBdCIsInNlY29uZCIsImFkdmFuY2UiLCJmaWxsVGV4dCIsIlRleHRFeHRlbnNpb24iLCJURVhUIiwiRU0iLCJmb250cyIsImdldFN0eWxlRm9udCIsIm1lYXN1cmVUZXh0IiwiZ2V0Q2hhcldpZHRoIiwiY2hhciIsIndpZHRocyIsIm5hbWUiLCJnZXRLZXJuaW5nIiwicGFpciIsImtlcm5pbmciLCJrZXJuaW5ncyIsIndpZHRoU2Vjb25kIiwid2lkdGhUb3RhbCIsImdldEFkdmFuY2UiLCJnZXRGb250IiwiZ2V0TGluZVdpZHRoIiwiZm9ybWF0IiwiZ2V0VGV4dFdpZHRoIiwiZ2V0VGV4dEhlaWdodCIsImRlZmF1bHRUZXh0Rm9ybWF0IiwiYm9sZCIsIml0YWxpYyIsInVuZGVybGluZSIsImdldFZhbGlkVGV4dEZvcm1hdCIsImdldEFsaWduVmFsdWUiLCJnZXRWZXJ0aWNhbEFsaWduVmFsdWUiLCJUZXh0IiwiTElORUFSIiwiUVVBRFJBVElDIiwiUVVBRFJBVElDX0lOIiwiUVVBRFJBVElDX09VVCIsIkNVQklDIiwiQ1VCSUNfSU4iLCJDVUJJQ19PVVQiLCJRVUFSVElDIiwiUVVBUlRJQ19JTiIsIlFVQVJUSUNfT1VUIiwiUVVJTlRJQyIsIlFVSU5USUNfSU4iLCJRVUlOVElDX09VVCIsIlNJTlVTT0lEQUwiLCJTSU5VU09JREFMX0lOIiwiU0lOVVNPSURBTF9PVVQiLCJFWFBPTkVOVElBTCIsIkVYUE9ORU5USUFMX0lOIiwiRVhQT05FTlRJQUxfT1VUIiwiQ0lSQ1VMQVIiLCJDSVJDVUxBUl9JTiIsIkNJUkNVTEFSX09VVCIsIkVMQVNUSUMiLCJFTEFTVElDX0lOIiwiRUxBU1RJQ19PVVQiLCJCQUNLIiwiQkFDS19JTiIsIkJBQ0tfT1VUIiwiQk9VTkNFIiwiQk9VTkNFX0lOIiwiQk9VTkNFX09VVCIsImVhc2luZyIsInBvdyIsIlRXRUVOIiwiVHdlZW5FeHRlbnNpb24iLCJ0d2VlbiIsInBoYXNlcyIsInBoYXNlIiwiZWFzaW5nTmFtZSIsInRvTG93ZXJDYXNlIiwiZWFzaW5nTWV0aG9kIiwiZWFzaW5nVmFsdWUiLCJzdGF0ZSIsImtleSIsImZyb21WYWx1ZSIsInRvVmFsdWUiLCJzdGF0ZVZhbHVlIiwibG9vcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNPLElBQU1BLFlBQWI7QUFBQTs7QUFBQTs7QUFDSSwwQkFBeUI7QUFBQTs7QUFBQSxRQUFiQyxNQUFhLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3JCQSxVQUFNLENBQUNDLFFBQVAsdUJBQWtCRCxNQUFNLENBQUNDLFFBQXpCLCtEQUFxQ0MscURBQXJDO0FBRHFCLDZCQUVmRixNQUZlO0FBR3hCOztBQUpMO0FBQUEsRUFBa0NHLDZDQUFsQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBLElBQU1DLE1BQU0sR0FBR0Msa0RBQUEsRUFBZjtBQUNBLElBQU1DLE1BQU0sR0FBR0Qsa0RBQUEsRUFBZjtBQUNPLElBQUlFLGNBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxjQUFWLEVBQTBCO0FBQ3ZCLFdBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCQyxLQUE3QixFQUFvQ0MsRUFBcEMsRUFBd0M7QUFDcEMsUUFBSUMsQ0FBQyxHQUFHSCxLQUFLLElBQUksRUFBVCxHQUFjLElBQXRCO0FBQ0EsUUFBSUksQ0FBQyxHQUFHSixLQUFLLElBQUksQ0FBVCxHQUFhLElBQXJCO0FBQ0EsUUFBSUssQ0FBQyxHQUFHTCxLQUFLLEdBQUcsSUFBaEI7QUFDQSxRQUFJTSxDQUFDLEdBQUdMLEtBQUssR0FBRyxJQUFoQjs7QUFDQSxRQUFJLENBQUNNLDZEQUFBLENBQXVCTCxFQUF2QixDQUFMLEVBQWlDO0FBQzdCQyxPQUFDLEdBQUlBLENBQUMsR0FBR0QsRUFBRSxDQUFDTSxhQUFQLEdBQXVCTixFQUFFLENBQUNPLFNBQTNCLEdBQXdDLElBQTVDO0FBQ0FMLE9BQUMsR0FBSUEsQ0FBQyxHQUFHRixFQUFFLENBQUNRLGVBQVAsR0FBeUJSLEVBQUUsQ0FBQ1MsV0FBN0IsR0FBNEMsSUFBaEQ7QUFDQU4sT0FBQyxHQUFJQSxDQUFDLEdBQUdILEVBQUUsQ0FBQ1UsY0FBUCxHQUF3QlYsRUFBRSxDQUFDVyxVQUE1QixHQUEwQyxJQUE5QztBQUNBUCxPQUFDLEdBQUlBLENBQUMsR0FBR0osRUFBRSxDQUFDWSxlQUFQLEdBQXlCWixFQUFFLENBQUNhLFdBQTdCLEdBQTRDLElBQWhEO0FBQ0g7O0FBQ0QsUUFBSVQsQ0FBQyxHQUFHLElBQVIsRUFBYztBQUNWLDRCQUFlSCxDQUFmLGVBQXFCQyxDQUFyQixlQUEyQkMsQ0FBM0IsZUFBaUNDLENBQUMsR0FBRyxJQUFyQztBQUNIOztBQUNELHlCQUFjSCxDQUFkLGVBQW9CQyxDQUFwQixlQUEwQkMsQ0FBMUI7QUFDSDs7QUFDRFAsZ0JBQWMsQ0FBQ0MsWUFBZixHQUE4QkEsWUFBOUI7O0FBQ0EsV0FBU2lCLGlCQUFULENBQTJCQyxPQUEzQixFQUFvQ0MsTUFBcEMsRUFBNENDLE1BQTVDLEVBQW9EQyxNQUFwRCxFQUE0REMsY0FBNUQsRUFBNEU7QUFDeEUsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixNQUFNLENBQUNLLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLFVBQU1FLEdBQUcsR0FBR04sTUFBTSxDQUFDSSxDQUFELENBQWxCO0FBQ0EsVUFBTXJCLEtBQUssR0FBR2tCLE1BQU0sQ0FBQ0csQ0FBRCxDQUFwQjtBQUNBLFVBQUlHLEtBQUssR0FBR0wsTUFBTSxDQUFDRSxDQUFELENBQU4sR0FBWSxJQUF4QjtBQUNBLFVBQUlHLEtBQUssR0FBRyxDQUFaLEVBQ0lBLEtBQUssR0FBRyxDQUFSO0FBQ0osVUFBSUEsS0FBSyxHQUFHLENBQVosRUFDSUEsS0FBSyxHQUFHLENBQVI7QUFDSlIsYUFBTyxDQUFDUyxZQUFSLENBQXFCRCxLQUFyQixFQUE0QjFCLFlBQVksQ0FBQ3lCLEdBQUQsRUFBTXZCLEtBQU4sRUFBYW9CLGNBQWIsQ0FBeEM7QUFDSDtBQUNKOztBQUNEdkIsZ0JBQWMsQ0FBQ2tCLGlCQUFmLEdBQW1DQSxpQkFBbkM7O0FBQ0EsV0FBU1cscUJBQVQsQ0FBK0JDLE1BQS9CLEVBQXVDVixNQUF2QyxFQUErQ0MsTUFBL0MsRUFBdURDLE1BQXZELEVBQStEQyxjQUEvRCxFQUErRVEsT0FBL0UsRUFBd0Y7QUFDcEZsQyxVQUFNLENBQUNtQyxDQUFQLEdBQVcsTUFBWDtBQUNBbkMsVUFBTSxDQUFDb0MsQ0FBUCxHQUFXLENBQVg7QUFDQUMsZ0VBQUEsQ0FBc0JKLE1BQXRCLEVBQThCakMsTUFBOUIsRUFBc0NBLE1BQXRDO0FBQ0EsUUFBTXNCLE9BQU8sR0FBR1ksT0FBTyxDQUFDSSxvQkFBUixDQUE2QkwsTUFBTSxDQUFDTSxFQUFwQyxFQUF3Q04sTUFBTSxDQUFDTyxFQUEvQyxFQUFtRCxDQUFuRCxFQUFzRFAsTUFBTSxDQUFDTSxFQUE3RCxFQUFpRU4sTUFBTSxDQUFDTyxFQUF4RSxFQUE0RUMsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBQzFDLE1BQU0sQ0FBQ21DLENBQVAsR0FBV0YsTUFBTSxDQUFDTSxFQUFuQixJQUF5QixDQUFsQyxDQUE1RSxDQUFoQjtBQUNBbEIscUJBQWlCLENBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFrQkMsTUFBbEIsRUFBMEJDLE1BQTFCLEVBQWtDQyxjQUFsQyxDQUFqQjtBQUNBLFdBQU9KLE9BQVA7QUFDSDs7QUFDRG5CLGdCQUFjLENBQUM2QixxQkFBZixHQUF1Q0EscUJBQXZDOztBQUNBLFdBQVNXLHFCQUFULENBQStCVixNQUEvQixFQUF1Q1YsTUFBdkMsRUFBK0NDLE1BQS9DLEVBQXVEQyxNQUF2RCxFQUErREMsY0FBL0QsRUFBK0VRLE9BQS9FLEVBQXdGO0FBQ3BGbEMsVUFBTSxDQUFDbUMsQ0FBUCxHQUFXLENBQUMsS0FBWjtBQUNBbkMsVUFBTSxDQUFDb0MsQ0FBUCxHQUFXLENBQVg7QUFDQWxDLFVBQU0sQ0FBQ2lDLENBQVAsR0FBVyxLQUFYO0FBQ0FqQyxVQUFNLENBQUNrQyxDQUFQLEdBQVcsQ0FBWDtBQUNBQyxnRUFBQSxDQUFzQkosTUFBdEIsRUFBOEJqQyxNQUE5QixFQUFzQ0EsTUFBdEM7QUFDQXFDLGdFQUFBLENBQXNCSixNQUF0QixFQUE4Qi9CLE1BQTlCLEVBQXNDQSxNQUF0QztBQUNBLFFBQU1vQixPQUFPLEdBQUdZLE9BQU8sQ0FBQ1Usb0JBQVIsQ0FBNkI1QyxNQUFNLENBQUNtQyxDQUFwQyxFQUF1Q25DLE1BQU0sQ0FBQ29DLENBQTlDLEVBQWlEbEMsTUFBTSxDQUFDaUMsQ0FBeEQsRUFBMkRqQyxNQUFNLENBQUNrQyxDQUFsRSxDQUFoQjtBQUNBZixxQkFBaUIsQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQWtCQyxNQUFsQixFQUEwQkMsTUFBMUIsRUFBa0NDLGNBQWxDLENBQWpCO0FBQ0EsV0FBT0osT0FBUDtBQUNIOztBQUNEbkIsZ0JBQWMsQ0FBQ3dDLHFCQUFmLEdBQXVDQSxxQkFBdkM7O0FBQ0EsV0FBU0UsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEJDLE1BQTlCLEVBQXNDYixPQUF0QyxFQUErQztBQUMzQyxRQUFNWixPQUFPLEdBQUdZLE9BQU8sQ0FBQ2MsYUFBUixDQUFzQkYsS0FBdEIsRUFBNkJDLE1BQU0sR0FBRyxRQUFILEdBQWMsTUFBakQsQ0FBaEI7O0FBQ0EsUUFBSXpCLE9BQUosRUFBYTtBQUNULGFBQU9BLE9BQVA7QUFDSDs7QUFDRCxXQUFPLEVBQVA7QUFDSDs7QUFDRG5CLGdCQUFjLENBQUMwQyxhQUFmLEdBQStCQSxhQUEvQjtBQUNILENBNURELEVBNERHMUMsY0FBYyxLQUFLQSxjQUFjLEdBQUcsRUFBdEIsQ0E1RGpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ08sSUFBTUwsY0FBYjtBQUFBOztBQUFBOztBQUNJLDRCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsK0JBQVNtRCxTQUFUO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsQ0FBQyxNQUFLSCxJQUFMLENBQVVJLFVBQVYsQ0FBcUIsSUFBckIsQ0FBRCxDQUFoQjtBQUNBLFVBQUtDLGNBQUwsR0FBc0IsRUFBdEI7QUFKVTtBQUtiOztBQU5MO0FBQUE7QUFBQSxXQU9JLHNCQUFhO0FBQ1QsYUFBTyxLQUFLRixRQUFMLENBQWMsS0FBS0EsUUFBTCxDQUFjekIsTUFBZCxHQUF1QixDQUFyQyxDQUFQO0FBQ0g7QUFUTDtBQUFBO0FBQUEsV0FVSSxxQkFBWU0sT0FBWixFQUFxQjtBQUNqQixXQUFLbUIsUUFBTCxDQUFjRyxJQUFkLENBQW1CdEIsT0FBbkI7QUFDSDtBQVpMO0FBQUE7QUFBQSxXQWFJLDBCQUFpQjtBQUNiLFVBQUksS0FBS21CLFFBQUwsQ0FBY3pCLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUIsYUFBS3lCLFFBQUwsQ0FBY0ksR0FBZDtBQUNILE9BRkQsTUFHSztBQUNELGFBQUtDLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkMsT0FBbEIsQ0FBMEIsZ0NBQTFCO0FBQ0g7QUFDSjtBQXBCTDtBQUFBO0FBQUEsV0FxQkksK0JBQXNCO0FBQ2xCLFVBQUkxQixPQUFKOztBQUNBLFVBQUksS0FBS3FCLGNBQUwsQ0FBb0IzQixNQUF4QixFQUFnQztBQUM1Qk0sZUFBTyxHQUFHLEtBQUtxQixjQUFMLENBQW9CRSxHQUFwQixFQUFWO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsWUFBTUksTUFBTSxHQUFHVixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBbEIsZUFBTyxHQUFHMkIsTUFBTSxDQUFDUCxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFDSDs7QUFSaUIsdUJBU1EsS0FBS0osSUFUYjtBQUFBLFVBU1ZZLEtBVFUsY0FTVkEsS0FUVTtBQUFBLFVBU0hDLE1BVEcsY0FTSEEsTUFURzs7QUFVbEIsVUFBSTdCLE9BQU8sQ0FBQzJCLE1BQVIsQ0FBZUMsS0FBZixLQUF5QkEsS0FBN0IsRUFBb0M7QUFDaEM1QixlQUFPLENBQUMyQixNQUFSLENBQWVDLEtBQWYsR0FBdUJBLEtBQXZCO0FBQ0g7O0FBQ0QsVUFBSTVCLE9BQU8sQ0FBQzJCLE1BQVIsQ0FBZUUsTUFBZixLQUEwQkEsTUFBOUIsRUFBc0M7QUFDbEM3QixlQUFPLENBQUMyQixNQUFSLENBQWVFLE1BQWYsR0FBd0JBLE1BQXhCO0FBQ0g7O0FBQ0QsYUFBTzdCLE9BQVA7QUFDSDtBQXRDTDtBQUFBO0FBQUEsV0F1Q0ksOEJBQXFCQSxPQUFyQixFQUE4QjtBQUMxQixXQUFLcUIsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUJ0QixPQUF6QjtBQUNIO0FBekNMO0FBQUE7QUFBQSxXQTBDSSxpQkFBUTtBQUNKLFdBQUs4QixLQUFMO0FBQ0EsV0FBS0MsVUFBTDtBQUNIO0FBN0NMO0FBQUE7QUFBQSxXQThDSSxpQkFBUTtBQUFBLFVBQ0lmLElBREosR0FDYSxJQURiLENBQ0lBLElBREo7QUFFSixVQUFNaEIsT0FBTyxHQUFHLEtBQUtvQixVQUFMLEVBQWhCO0FBQ0FwQixhQUFPLENBQUNnQyxZQUFSO0FBQ0FoQyxhQUFPLENBQUNpQyxTQUFSLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCakIsSUFBSSxDQUFDWSxLQUE3QixFQUFvQ1osSUFBSSxDQUFDYSxNQUF6QztBQUNIO0FBbkRMO0FBQUE7QUFBQSxXQW9ESSxzQkFBYTtBQUNULFVBQU1ELEtBQUssR0FBRyxLQUFLSixNQUFMLENBQVlVLE1BQVosQ0FBbUJDLFFBQW5CLEVBQWQ7QUFDQSxVQUFNTixNQUFNLEdBQUcsS0FBS0wsTUFBTCxDQUFZVSxNQUFaLENBQW1CRSxTQUFuQixFQUFmO0FBQ0EsVUFBTUMsVUFBVSxHQUFHLEtBQUtiLE1BQUwsQ0FBWVUsTUFBWixDQUFtQkksYUFBbkIsRUFBbkI7QUFDQSxVQUFNQyxTQUFTLEdBQUdoQyxJQUFJLENBQUNpQyxLQUFMLENBQVdaLEtBQUssR0FBR1MsVUFBbkIsQ0FBbEI7QUFDQSxVQUFNSSxVQUFVLEdBQUdsQyxJQUFJLENBQUNpQyxLQUFMLENBQVdYLE1BQU0sR0FBR1EsVUFBcEIsQ0FBbkI7QUFMUyxVQU1EckIsSUFOQyxHQU1RLElBTlIsQ0FNREEsSUFOQzs7QUFPVCxVQUFJQSxJQUFJLENBQUNZLEtBQUwsS0FBZVcsU0FBZixJQUE0QnZCLElBQUksQ0FBQ2EsTUFBTCxLQUFnQlksVUFBaEQsRUFBNEQ7QUFDeER6QixZQUFJLENBQUNZLEtBQUwsR0FBYVcsU0FBYjtBQUNBdkIsWUFBSSxDQUFDYSxNQUFMLEdBQWNZLFVBQWQ7QUFDQXpCLFlBQUksQ0FBQzBCLEtBQUwsQ0FBV2QsS0FBWCxhQUFzQkEsS0FBdEI7QUFDQVosWUFBSSxDQUFDMEIsS0FBTCxDQUFXYixNQUFYLGFBQXVCQSxNQUF2QjtBQUNIO0FBQ0o7QUFqRUw7O0FBQUE7QUFBQSxFQUFvQ2xFLCtDQUFwQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNETyxJQUFNZ0YsU0FBUyxHQUFHLFdBQWxCO0FBQ0EsSUFBSUMsU0FBSjs7QUFDUCxDQUFDLFVBQVVBLFNBQVYsRUFBcUI7QUFDbEIsV0FBU0MsV0FBVCxDQUFxQkMsU0FBckIsRUFBZ0M7QUFBQSxRQUNwQkMsUUFEb0IsR0FDUEQsU0FETyxDQUNwQkMsUUFEb0I7O0FBRTVCLFFBQUlBLFFBQUosRUFBYztBQUNWLFVBQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixRQUFkLENBQUosRUFBNkI7QUFDekIsZUFBT0EsUUFBUSxDQUFDckQsTUFBaEI7QUFDSDs7QUFDRCxVQUFJcUQsUUFBUSxDQUFDRyxJQUFiLEVBQW1CO0FBQ2YsZUFBTyxDQUFQO0FBQ0g7O0FBQ0QsVUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWUosUUFBWixDQUFiO0FBQ0EsYUFBT0ksSUFBSSxDQUFDekQsTUFBWjtBQUNIOztBQUNELFdBQU8sQ0FBUDtBQUNIOztBQUNEa0QsV0FBUyxDQUFDQyxXQUFWLEdBQXdCQSxXQUF4QjtBQUNILENBaEJELEVBZ0JHRCxTQUFTLEtBQUtBLFNBQVMsR0FBRyxFQUFqQixDQWhCWjs7QUFpQk8sSUFBSVMsa0JBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxrQkFBVixFQUE4QjtBQUMzQixXQUFTQyxNQUFULENBQWdCUixTQUFoQixFQUEyQnRCLE1BQTNCLEVBQW1DO0FBQUEsUUFDdkJ1QixRQUR1QixHQUNWRCxTQURVLENBQ3ZCQyxRQUR1QjtBQUFBLFFBRXZCUSxRQUZ1QixHQUVWL0IsTUFGVSxDQUV2QitCLFFBRnVCOztBQUcvQixRQUFJUixRQUFKLEVBQWM7QUFDVixVQUFNL0MsT0FBTyxHQUFHdUQsUUFBUSxDQUFDbkMsVUFBVCxFQUFoQjtBQUNBbUMsY0FBUSxDQUFDQyxLQUFUOztBQUNBLFVBQUlSLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixRQUFkLENBQUosRUFBNkI7QUFDekIsYUFBSyxJQUFJdEQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3NELFFBQVEsQ0FBQ3JELE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDLGNBQU1nRSxTQUFTLEdBQUdWLFFBQVEsQ0FBQ3RELENBQUQsQ0FBMUI7QUFDQThELGtCQUFRLENBQUNHLGVBQVQsQ0FBeUJELFNBQXpCLEVBQW9DekQsT0FBcEM7QUFDSDtBQUNKLE9BTEQsTUFNSyxJQUFJK0MsUUFBUSxDQUFDRyxJQUFiLEVBQW1CO0FBQ3BCLFlBQU1PLFVBQVMsR0FBR1YsUUFBbEI7QUFDQVEsZ0JBQVEsQ0FBQ0csZUFBVCxDQUF5QkQsVUFBekIsRUFBb0N6RCxPQUFwQztBQUNILE9BSEksTUFJQTtBQUNELFlBQU0yRCxhQUFhLEdBQUdaLFFBQXRCO0FBQ0EsWUFBTUksSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWVEsYUFBWixDQUFiOztBQUNBLGFBQUssSUFBSWxFLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUcwRCxJQUFJLENBQUN6RCxNQUF6QixFQUFpQ0QsRUFBQyxFQUFsQyxFQUFzQztBQUNsQyxjQUFNZ0UsV0FBUyxHQUFHRSxhQUFhLENBQUNSLElBQUksQ0FBQzFELEVBQUQsQ0FBTCxDQUEvQjtBQUNBOEQsa0JBQVEsQ0FBQ0csZUFBVCxDQUF5QkQsV0FBekIsRUFBb0N6RCxPQUFwQztBQUNIO0FBQ0o7O0FBQ0R1RCxjQUFRLENBQUNDLEtBQVQ7QUFDSDtBQUNKOztBQUNESCxvQkFBa0IsQ0FBQ0MsTUFBbkIsR0FBNEJBLE1BQTVCOztBQUNBLFdBQVNNLE1BQVQsQ0FBZ0JkLFNBQWhCLEVBQTJCdEIsTUFBM0IsRUFBbUM7QUFBQSxRQUN2QnVCLFFBRHVCLEdBQ1ZELFNBRFUsQ0FDdkJDLFFBRHVCO0FBQUEsUUFFdkJjLE9BRnVCLEdBRVhyQyxNQUZXLENBRXZCcUMsT0FGdUI7O0FBRy9CLFFBQUlkLFFBQUosRUFBYztBQUNWYyxhQUFPLENBQUNMLEtBQVI7O0FBQ0EsVUFBSVIsS0FBSyxDQUFDQyxPQUFOLENBQWNGLFFBQWQsQ0FBSixFQUE2QjtBQUN6QixhQUFLLElBQUl0RCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHc0QsUUFBUSxDQUFDckQsTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7QUFDdEMsY0FBTWdFLFNBQVMsR0FBR1YsUUFBUSxDQUFDdEQsQ0FBRCxDQUExQjtBQUNBb0UsaUJBQU8sQ0FBQ0MsZUFBUixDQUF3QkwsU0FBeEI7QUFDSDtBQUNKLE9BTEQsTUFNSyxJQUFJVixRQUFRLENBQUNHLElBQWIsRUFBbUI7QUFDcEIsWUFBTU8sV0FBUyxHQUFHVixRQUFsQjtBQUNBYyxlQUFPLENBQUNDLGVBQVIsQ0FBd0JMLFdBQXhCO0FBQ0gsT0FISSxNQUlBO0FBQ0QsWUFBTUUsYUFBYSxHQUFHWixRQUF0QjtBQUNBLFlBQU1JLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlRLGFBQVosQ0FBYjs7QUFDQSxhQUFLLElBQUlsRSxHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHMEQsSUFBSSxDQUFDekQsTUFBekIsRUFBaUNELEdBQUMsRUFBbEMsRUFBc0M7QUFDbEMsY0FBTWdFLFdBQVMsR0FBR0UsYUFBYSxDQUFDUixJQUFJLENBQUMxRCxHQUFELENBQUwsQ0FBL0I7QUFDQW9FLGlCQUFPLENBQUNDLGVBQVIsQ0FBd0JMLFdBQXhCO0FBQ0g7QUFDSjs7QUFDREksYUFBTyxDQUFDTCxLQUFSO0FBQ0g7QUFDSjs7QUFDREgsb0JBQWtCLENBQUNPLE1BQW5CLEdBQTRCQSxNQUE1Qjs7QUFDQSxXQUFTRyxPQUFULENBQWlCakIsU0FBakIsRUFBNEJ0QixNQUE1QixFQUFvQztBQUFBLFFBQ3hCdUIsUUFEd0IsR0FDWEQsU0FEVyxDQUN4QkMsUUFEd0I7QUFBQSxRQUV4QmlCLGFBRndCLEdBRU54QyxNQUZNLENBRXhCd0MsYUFGd0I7O0FBR2hDLFFBQUlqQixRQUFKLEVBQWM7QUFDVixVQUFNL0MsT0FBTyxHQUFHZ0UsYUFBYSxDQUFDNUMsVUFBZCxFQUFoQjtBQUNBNEMsbUJBQWEsQ0FBQ1IsS0FBZDs7QUFDQSxVQUFJUixLQUFLLENBQUNDLE9BQU4sQ0FBY0YsUUFBZCxDQUFKLEVBQTZCO0FBQ3pCLGFBQUssSUFBSXRELENBQUMsR0FBR3NELFFBQVEsQ0FBQ3JELE1BQVQsR0FBa0IsQ0FBL0IsRUFBa0NELENBQUMsSUFBSSxDQUF2QyxFQUEwQ0EsQ0FBQyxFQUEzQyxFQUErQztBQUMzQyxjQUFNZ0UsU0FBUyxHQUFHVixRQUFRLENBQUN0RCxDQUFELENBQTFCO0FBQ0EsY0FBTXdFLE1BQU0sR0FBR0QsYUFBYSxDQUFDRSxpQkFBZCxDQUFnQ1QsU0FBaEMsRUFBMkN6RCxPQUEzQyxDQUFmOztBQUNBLGNBQUlpRSxNQUFKLEVBQVk7QUFDUixtQkFBTyxJQUFQO0FBQ0g7QUFDSjtBQUNKLE9BUkQsTUFTSyxJQUFJbEIsUUFBUSxDQUFDRyxJQUFiLEVBQW1CO0FBQ3BCLFlBQU1PLFdBQVMsR0FBR1YsUUFBbEI7O0FBQ0EsWUFBTWtCLE9BQU0sR0FBR0QsYUFBYSxDQUFDRSxpQkFBZCxDQUFnQ1QsV0FBaEMsRUFBMkN6RCxPQUEzQyxDQUFmOztBQUNBLFlBQUlpRSxPQUFKLEVBQVk7QUFDUixpQkFBTyxJQUFQO0FBQ0g7QUFDSixPQU5JLE1BT0E7QUFDRCxZQUFNTixhQUFhLEdBQUdaLFFBQXRCO0FBQ0EsWUFBTUksSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWVEsYUFBWixDQUFiOztBQUNBLGFBQUssSUFBSWxFLEdBQUMsR0FBRzBELElBQUksQ0FBQ3pELE1BQUwsR0FBYyxDQUEzQixFQUE4QkQsR0FBQyxJQUFJLENBQW5DLEVBQXNDQSxHQUFDLEVBQXZDLEVBQTJDO0FBQ3ZDLGNBQU1nRSxXQUFTLEdBQUdFLGFBQWEsQ0FBQ1IsSUFBSSxDQUFDMUQsR0FBRCxDQUFMLENBQS9COztBQUNBLGNBQU13RSxRQUFNLEdBQUdELGFBQWEsQ0FBQ0UsaUJBQWQsQ0FBZ0NULFdBQWhDLEVBQTJDekQsT0FBM0MsQ0FBZjs7QUFDQSxjQUFJaUUsUUFBSixFQUFZO0FBQ1IsbUJBQU8sSUFBUDtBQUNIO0FBQ0o7QUFDSjs7QUFDREQsbUJBQWEsQ0FBQ1IsS0FBZDtBQUNIOztBQUNELFdBQU8sS0FBUDtBQUNIOztBQUNESCxvQkFBa0IsQ0FBQ1UsT0FBbkIsR0FBNkJBLE9BQTdCOztBQUNBLFdBQVNJLE1BQVQsQ0FBZ0JyQixTQUFoQixFQUEyQnRCLE1BQTNCLEVBQW1DO0FBQUEsUUFDdkJ1QixRQUR1QixHQUNWRCxTQURVLENBQ3ZCQyxRQUR1QjtBQUFBLFFBRXZCcUIsT0FGdUIsR0FFWDVDLE1BRlcsQ0FFdkI0QyxPQUZ1Qjs7QUFHL0IsUUFBSXJCLFFBQUosRUFBYztBQUNWLFVBQU0vQyxPQUFPLEdBQUdvRSxPQUFPLENBQUNoRCxVQUFSLEVBQWhCO0FBQ0FnRCxhQUFPLENBQUNaLEtBQVI7O0FBQ0EsVUFBSVIsS0FBSyxDQUFDQyxPQUFOLENBQWNGLFFBQWQsQ0FBSixFQUE2QjtBQUN6QixZQUFJQSxRQUFRLENBQUNyRCxNQUFiLEVBQXFCO0FBQ2pCTSxpQkFBTyxDQUFDcUUsUUFBUixHQUFtQixDQUFuQjtBQUNBckUsaUJBQU8sQ0FBQ21FLE1BQVIsR0FBaUIsSUFBakI7O0FBQ0EsZUFBSyxJQUFJMUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3NELFFBQVEsQ0FBQ3JELE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDLGdCQUFNZ0UsU0FBUyxHQUFHVixRQUFRLENBQUN0RCxDQUFELENBQTFCO0FBQ0EyRSxtQkFBTyxDQUFDTixlQUFSLENBQXdCTCxTQUF4QjtBQUNBLGdCQUFNYSxnQkFBZ0IsR0FBR0YsT0FBTyxDQUFDaEQsVUFBUixFQUF6QjtBQUNBcEIsbUJBQU8sQ0FBQ3FFLFFBQVIsSUFBb0JDLGdCQUFnQixDQUFDRCxRQUFyQzs7QUFDQSxnQkFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsTUFBdEIsRUFBOEI7QUFDMUJuRSxxQkFBTyxDQUFDbUUsTUFBUixHQUFpQixLQUFqQjtBQUNIO0FBQ0o7O0FBQ0RuRSxpQkFBTyxDQUFDcUUsUUFBUixJQUFvQnRCLFFBQVEsQ0FBQ3JELE1BQTdCO0FBQ0gsU0FiRCxNQWNLO0FBQ0RNLGlCQUFPLENBQUNxRSxRQUFSLEdBQW1CLENBQW5CO0FBQ0g7QUFDSixPQWxCRCxNQW1CSyxJQUFJdEIsUUFBUSxDQUFDRyxJQUFiLEVBQW1CO0FBQ3BCLFlBQU1PLFdBQVMsR0FBR1YsUUFBbEI7QUFDQXFCLGVBQU8sQ0FBQ04sZUFBUixDQUF3QkwsV0FBeEI7O0FBQ0EsWUFBTWEsaUJBQWdCLEdBQUdGLE9BQU8sQ0FBQ2hELFVBQVIsRUFBekI7O0FBQ0FwQixlQUFPLENBQUNxRSxRQUFSLEdBQW1CQyxpQkFBZ0IsQ0FBQ0QsUUFBcEM7QUFDQXJFLGVBQU8sQ0FBQ21FLE1BQVIsR0FBaUJHLGlCQUFnQixDQUFDSCxNQUFsQztBQUNILE9BTkksTUFPQTtBQUNELFlBQU1SLGFBQWEsR0FBR1osUUFBdEI7QUFDQSxZQUFNSSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZUSxhQUFaLENBQWI7O0FBQ0EsWUFBSVIsSUFBSSxDQUFDekQsTUFBVCxFQUFpQjtBQUNiTSxpQkFBTyxDQUFDcUUsUUFBUixHQUFtQixDQUFuQjtBQUNBckUsaUJBQU8sQ0FBQ21FLE1BQVIsR0FBaUIsSUFBakI7O0FBQ0EsZUFBSyxJQUFJMUUsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBRzBELElBQUksQ0FBQ3pELE1BQXpCLEVBQWlDRCxHQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLGdCQUFNZ0UsV0FBUyxHQUFHRSxhQUFhLENBQUNSLElBQUksQ0FBQzFELEdBQUQsQ0FBTCxDQUEvQjtBQUNBMkUsbUJBQU8sQ0FBQ04sZUFBUixDQUF3QkwsV0FBeEI7O0FBQ0EsZ0JBQU1hLGtCQUFnQixHQUFHRixPQUFPLENBQUNoRCxVQUFSLEVBQXpCOztBQUNBcEIsbUJBQU8sQ0FBQ3FFLFFBQVIsSUFBb0JDLGtCQUFnQixDQUFDRCxRQUFyQzs7QUFDQSxnQkFBSSxDQUFDQyxrQkFBZ0IsQ0FBQ0gsTUFBdEIsRUFBOEI7QUFDMUJuRSxxQkFBTyxDQUFDbUUsTUFBUixHQUFpQixLQUFqQjtBQUNIO0FBQ0o7O0FBQ0RuRSxpQkFBTyxDQUFDcUUsUUFBUixJQUFvQmxCLElBQUksQ0FBQ3pELE1BQXpCO0FBQ0gsU0FiRCxNQWNLO0FBQ0RNLGlCQUFPLENBQUNxRSxRQUFSLEdBQW1CLENBQW5CO0FBQ0FyRSxpQkFBTyxDQUFDbUUsTUFBUixHQUFpQixJQUFqQjtBQUNIO0FBQ0o7O0FBQ0RDLGFBQU8sQ0FBQ1osS0FBUjtBQUNIO0FBQ0o7O0FBQ0RILG9CQUFrQixDQUFDYyxNQUFuQixHQUE0QkEsTUFBNUI7O0FBQ0EsV0FBU0ksSUFBVCxDQUFjL0MsTUFBZCxFQUFzQjtBQUNsQkEsVUFBTSxDQUFDZ0QsVUFBUCxDQUFrQlosTUFBbEIsQ0FBeUJhLEdBQXpCLENBQTZCOUIsU0FBN0IsRUFBd0NpQixNQUF4QztBQUNBcEMsVUFBTSxDQUFDZ0QsVUFBUCxDQUFrQmxCLE1BQWxCLENBQXlCbUIsR0FBekIsQ0FBNkI5QixTQUE3QixFQUF3Q1csTUFBeEM7QUFDQTlCLFVBQU0sQ0FBQ2dELFVBQVAsQ0FBa0JULE9BQWxCLENBQTBCVSxHQUExQixDQUE4QjlCLFNBQTlCLEVBQXlDb0IsT0FBekM7QUFDQXZDLFVBQU0sQ0FBQ2dELFVBQVAsQ0FBa0JMLE1BQWxCLENBQXlCTSxHQUF6QixDQUE2QjlCLFNBQTdCLEVBQXdDd0IsTUFBeEM7QUFDSDs7QUFDRGQsb0JBQWtCLENBQUNrQixJQUFuQixHQUEwQkEsSUFBMUI7QUFDSCxDQS9KRCxFQStKR2xCLGtCQUFrQixLQUFLQSxrQkFBa0IsR0FBRyxFQUExQixDQS9KckIsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNPLElBQU1xQixNQUFNLEdBQUcsUUFBZjtBQUNBLElBQUlDLE1BQUo7O0FBQ1AsQ0FBQyxVQUFVQSxNQUFWLEVBQWtCO0FBQ2YsV0FBU0Msa0JBQVQsQ0FBNEJDLE1BQTVCLEVBQW9DO0FBQUE7O0FBQ2hDLG9DQUFPQSxNQUFNLENBQUNDLGVBQWQseUVBQWlDLENBQWpDO0FBQ0g7O0FBQ0RILFFBQU0sQ0FBQ0Msa0JBQVAsR0FBNEJBLGtCQUE1Qjs7QUFDQSxXQUFTRyxRQUFULENBQWtCRixNQUFsQixFQUEwQjtBQUFBOztBQUN0Qiw2QkFBT0EsTUFBTSxDQUFDVixNQUFkLDJEQUF3QixLQUF4QjtBQUNIOztBQUNEUSxRQUFNLENBQUNJLFFBQVAsR0FBa0JBLFFBQWxCOztBQUNBLFdBQVNDLGdCQUFULENBQTBCSCxNQUExQixFQUFrQztBQUFBOztBQUM5QixtQ0FBT0EsTUFBTSxDQUFDSSxZQUFkLHVFQUE4QixJQUE5QjtBQUNIOztBQUNETixRQUFNLENBQUNLLGdCQUFQLEdBQTBCQSxnQkFBMUI7QUFDSCxDQWJELEVBYUdMLE1BQU0sS0FBS0EsTUFBTSxHQUFHLEVBQWQsQ0FiVDs7QUFjTyxJQUFJTyxlQUFKOztBQUNQLENBQUMsVUFBVUEsZUFBVixFQUEyQjtBQUN4QixXQUFTZixNQUFULENBQWdCVSxNQUFoQixFQUF3QnJELE1BQXhCLEVBQWdDO0FBQzVCLFFBQUksQ0FBQ21ELE1BQU0sQ0FBQ0ssZ0JBQVAsQ0FBd0JILE1BQXhCLENBQUwsRUFBc0M7QUFDbEM7QUFDSDs7QUFDRHhCLHFFQUFBLENBQTBCd0IsTUFBMUIsRUFBa0NyRCxNQUFsQztBQUNBLFFBQU14QixPQUFPLEdBQUd3QixNQUFNLENBQUM0QyxPQUFQLENBQWVoRCxVQUFmLEVBQWhCO0FBQ0F5RCxVQUFNLENBQUNDLGVBQVAsR0FBeUI5RSxPQUFPLENBQUNxRSxRQUFqQzs7QUFDQSxRQUFJckUsT0FBTyxDQUFDbUUsTUFBUixJQUFrQixDQUFDVSxNQUFNLENBQUNWLE1BQTlCLEVBQXNDO0FBQ2xDVSxZQUFNLENBQUNWLE1BQVAsR0FBZ0IsSUFBaEI7O0FBQ0EsVUFBSVUsTUFBTSxDQUFDTSxRQUFYLEVBQXFCO0FBQ2pCTixjQUFNLENBQUNNLFFBQVA7QUFDSDtBQUNKO0FBQ0o7O0FBQ0RELGlCQUFlLENBQUNmLE1BQWhCLEdBQXlCQSxNQUF6Qjs7QUFDQSxXQUFTSSxJQUFULENBQWMvQyxNQUFkLEVBQXNCO0FBQ2xCQSxVQUFNLENBQUNnRCxVQUFQLENBQWtCWixNQUFsQixDQUF5QmEsR0FBekIsQ0FBNkJDLE1BQTdCLEVBQXFDckIsaUVBQXJDO0FBQ0E3QixVQUFNLENBQUNnRCxVQUFQLENBQWtCbEIsTUFBbEIsQ0FBeUJtQixHQUF6QixDQUE2QkMsTUFBN0IsRUFBcUNyQixpRUFBckM7QUFDQTdCLFVBQU0sQ0FBQ2dELFVBQVAsQ0FBa0JULE9BQWxCLENBQTBCVSxHQUExQixDQUE4QkMsTUFBOUIsRUFBc0NyQixrRUFBdEM7QUFDQTdCLFVBQU0sQ0FBQ2dELFVBQVAsQ0FBa0JMLE1BQWxCLENBQXlCTSxHQUF6QixDQUE2QkMsTUFBN0IsRUFBcUNQLE1BQXJDO0FBQ0g7O0FBQ0RlLGlCQUFlLENBQUNYLElBQWhCLEdBQXVCQSxJQUF2QjtBQUNILENBdkJELEVBdUJHVyxlQUFlLEtBQUtBLGVBQWUsR0FBRyxFQUF2QixDQXZCbEIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1ySCxNQUFiLEdBQ0ksa0JBQXlCO0FBQUE7O0FBQUEsTUFBYkgsTUFBYSx1RUFBSixFQUFJOztBQUFBOztBQUNyQixPQUFLOEYsS0FBTCxHQUFhLEVBQWI7QUFDQTlGLFFBQU0sQ0FBQzBILFVBQVAseUJBQW9CMUgsTUFBTSxDQUFDMEgsVUFBM0IsbUVBQXlDQSw2REFBekM7QUFDQTFILFFBQU0sQ0FBQzJILE1BQVAscUJBQWdCM0gsTUFBTSxDQUFDMkgsTUFBdkIsMkRBQWlDQSxvREFBakM7QUFDQTNILFFBQU0sQ0FBQ0MsUUFBUCx1QkFBa0JELE1BQU0sQ0FBQ0MsUUFBekIsK0RBQXFDQSx3REFBckM7QUFDQUQsUUFBTSxDQUFDNEgsT0FBUCxzQkFBaUI1SCxNQUFNLENBQUM0SCxPQUF4Qiw2REFBbUNBLHNEQUFuQztBQUNBNUgsUUFBTSxDQUFDNkgsT0FBUCxzQkFBaUI3SCxNQUFNLENBQUM2SCxPQUF4Qiw2REFBbUNBLHNEQUFuQztBQUNBN0gsUUFBTSxDQUFDOEgsUUFBUCx1QkFBa0I5SCxNQUFNLENBQUM4SCxRQUF6QiwrREFBcUNBLHdEQUFyQztBQUNBOUgsUUFBTSxDQUFDK0gsYUFBUCw0QkFBdUIvSCxNQUFNLENBQUMrSCxhQUE5Qix5RUFBK0NBLG1FQUEvQztBQUNBL0gsUUFBTSxDQUFDZ0ksTUFBUCxxQkFBZ0JoSSxNQUFNLENBQUNnSSxNQUF2QiwyREFBaUNBLG9EQUFqQztBQUNBaEksUUFBTSxDQUFDaUksS0FBUCxvQkFBZWpJLE1BQU0sQ0FBQ2lJLEtBQXRCLHlEQUErQkEsa0RBQS9CO0FBQ0FqSSxRQUFNLENBQUNrSSxTQUFQLHdCQUFtQmxJLE1BQU0sQ0FBQ2tJLFNBQTFCLGlFQUF1Q0EsMERBQXZDO0FBQ0EsT0FBS3BCLFVBQUwsR0FBa0IsSUFBSTlHLE1BQU0sQ0FBQzBILFVBQVgsRUFBbEI7QUFDQSxPQUFLbEQsTUFBTCxHQUFjLElBQUl4RSxNQUFNLENBQUMySCxNQUFYLEVBQWQ7QUFDQSxPQUFLUSxRQUFMLEdBQWdCLElBQUluSSxNQUFNLENBQUNDLFFBQVgsQ0FBb0IsSUFBcEIsQ0FBaEI7QUFDQSxPQUFLa0csT0FBTCxHQUFlLElBQUluRyxNQUFNLENBQUM0SCxPQUFYLENBQW1CLElBQW5CLENBQWY7QUFDQSxPQUFLbEIsT0FBTCxHQUFlLElBQUkxRyxNQUFNLENBQUM2SCxPQUFYLENBQW1CLElBQW5CLENBQWY7QUFDQSxPQUFLaEMsUUFBTCxHQUFnQixJQUFJN0YsTUFBTSxDQUFDOEgsUUFBWCxDQUFvQixJQUFwQixDQUFoQjtBQUNBLE9BQUt4QixhQUFMLEdBQXFCLElBQUl0RyxNQUFNLENBQUMrSCxhQUFYLENBQXlCLElBQXpCLENBQXJCO0FBQ0EsT0FBS0ssTUFBTCxHQUFjLElBQUlwSSxNQUFNLENBQUNnSSxNQUFYLENBQWtCLElBQWxCLENBQWQ7QUFDQSxPQUFLakUsS0FBTCxHQUFhLElBQUkvRCxNQUFNLENBQUNpSSxLQUFYLEVBQWI7QUFDQSxPQUFLSSxTQUFMLEdBQWlCLElBQUlySSxNQUFNLENBQUNrSSxTQUFYLENBQXFCLElBQXJCLENBQWpCO0FBQ0F2Qyw0RUFBQSxDQUF3QixJQUF4QjtBQUNBNkIsdUVBQUEsQ0FBcUIsSUFBckI7QUFDSCxDQXpCTCxDOzs7Ozs7Ozs7Ozs7Ozs7QUNaTyxJQUFNYyxhQUFiLEdBQ0ksdUJBQVl4RSxNQUFaLEVBQW9CO0FBQUE7O0FBQ2hCLE9BQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNILENBSEwsQzs7Ozs7Ozs7Ozs7OztBQ0FPLElBQUl5RSxPQUFKOztBQUNQLENBQUMsVUFBVUEsT0FBVixFQUFtQjtBQUNoQixXQUFTQyxTQUFULENBQW1CekMsU0FBbkIsRUFBOEI7QUFBQTs7QUFDMUIsaUNBQU9BLFNBQVMsQ0FBQzBDLE9BQWpCLG1FQUE0QixJQUE1QjtBQUNIOztBQUNERixTQUFPLENBQUNDLFNBQVIsR0FBb0JBLFNBQXBCO0FBQ0gsQ0FMRCxFQUtHRCxPQUFPLEtBQUtBLE9BQU8sR0FBRyxFQUFmLENBTFYsRTs7Ozs7Ozs7Ozs7OztBQ0RPLElBQUlHLEtBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxLQUFWLEVBQWlCO0FBQ2QsV0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQXFCMUUsS0FBckIsRUFBNEI7QUFBQSxRQUNoQjJFLE1BRGdCLEdBQ0xELEtBREssQ0FDaEJDLE1BRGdCOztBQUV4QixRQUFJQSxNQUFKLEVBQVk7QUFDUixhQUFPLENBQUNBLE1BQUQsR0FBVTNFLEtBQWpCO0FBQ0g7O0FBQ0QsV0FBTyxDQUFQO0FBQ0g7O0FBQ0R3RSxPQUFLLENBQUNDLElBQU4sR0FBYUEsSUFBYjs7QUFDQSxXQUFTRyxJQUFULENBQWNGLEtBQWQsRUFBcUJ6RSxNQUFyQixFQUE2QjtBQUFBLFFBQ2pCNEUsTUFEaUIsR0FDTkgsS0FETSxDQUNqQkcsTUFEaUI7O0FBRXpCLFFBQUlBLE1BQUosRUFBWTtBQUNSLGFBQU8sQ0FBQ0EsTUFBRCxHQUFVNUUsTUFBakI7QUFDSDs7QUFDRCxXQUFPLENBQVA7QUFDSDs7QUFDRHVFLE9BQUssQ0FBQ0ksSUFBTixHQUFhQSxJQUFiOztBQUNBLFdBQVNFLFNBQVQsQ0FBbUJKLEtBQW5CLEVBQTBCO0FBQUEsUUFDZEMsTUFEYyxHQUNLRCxLQURMLENBQ2RDLE1BRGM7QUFBQSxRQUNORSxNQURNLEdBQ0tILEtBREwsQ0FDTkcsTUFETTtBQUV0QixXQUFPLENBQUMsQ0FBQ0YsTUFBRixJQUFZLENBQUMsQ0FBQ0UsTUFBckI7QUFDSDs7QUFDREwsT0FBSyxDQUFDTSxTQUFOLEdBQWtCQSxTQUFsQjtBQUNILENBdEJELEVBc0JHTixLQUFLLEtBQUtBLEtBQUssR0FBRyxFQUFiLENBdEJSLEU7Ozs7Ozs7Ozs7Ozs7QUNEQSxJQUFNTyxXQUFXLEdBQUc7QUFDaEJDLGFBQVcsRUFBRSxlQURHO0FBRWhCQyxXQUFTLEVBQUUsYUFGSztBQUdoQkMsYUFBVyxFQUFFLGVBSEc7QUFJaEJDLGFBQVcsRUFBRSxlQUpHO0FBS2hCQyxZQUFVLEVBQUU7QUFMSSxDQUFwQjtBQU9PLElBQUlDLE9BQUo7O0FBQ1AsQ0FBQyxVQUFVQSxPQUFWLEVBQW1CO0FBQ2hCLFdBQVNDLGFBQVQsQ0FBdUJDLE9BQXZCLEVBQWdDO0FBQzVCLFdBQU8sQ0FBQyxDQUFDQSxPQUFPLENBQUNKLFdBQWpCO0FBQ0g7O0FBQ0RFLFNBQU8sQ0FBQ0MsYUFBUixHQUF3QkEsYUFBeEI7O0FBQ0EsV0FBU0UsZ0JBQVQsQ0FBMEJELE9BQTFCLEVBQW1DO0FBQUE7O0FBQy9CLG9DQUFPQSxPQUFPLENBQUNFLGNBQWYseUVBQWlDLElBQWpDO0FBQ0g7O0FBQ0RKLFNBQU8sQ0FBQ0csZ0JBQVIsR0FBMkJBLGdCQUEzQjs7QUFDQSxXQUFTRSxhQUFULENBQXVCSCxPQUF2QixFQUFnQ2pFLElBQWhDLEVBQXNDakQsQ0FBdEMsRUFBeUNDLENBQXpDLEVBQTRDcUgsRUFBNUMsRUFBZ0Q7QUFDNUMsUUFBTUMsV0FBVyxHQUFHYixXQUFXLENBQUN6RCxJQUFELENBQS9COztBQUNBLFFBQUlzRSxXQUFXLElBQUlMLE9BQU8sQ0FBQ0ssV0FBRCxDQUExQixFQUF5QztBQUNyQyxVQUFNQyxLQUFLLEdBQUc7QUFDVnZFLFlBQUksRUFBSkEsSUFEVTtBQUNKakQsU0FBQyxFQUFEQSxDQURJO0FBQ0RDLFNBQUMsRUFBREEsQ0FEQztBQUNFcUgsVUFBRSxFQUFGQTtBQURGLE9BQWQ7QUFHQUosYUFBTyxDQUFDSyxXQUFELENBQVAsQ0FBcUJDLEtBQXJCO0FBQ0g7QUFDSjs7QUFDRFIsU0FBTyxDQUFDSyxhQUFSLEdBQXdCQSxhQUF4QjtBQUNILENBbkJELEVBbUJHTCxPQUFPLEtBQUtBLE9BQU8sR0FBRyxFQUFmLENBbkJWLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUk8sSUFBSVMsU0FBSjs7QUFDUCxDQUFDLFVBQVVBLFNBQVYsRUFBcUI7QUFDbEIsV0FBU0MsU0FBVCxDQUFtQkMsU0FBbkIsRUFBOEIzRCxNQUE5QixFQUFzQztBQUFBOztBQUFBLFFBQzFCbEUsTUFEMEIsR0FDZjZILFNBRGUsQ0FDMUI3SCxNQUQwQjs7QUFFbEMsUUFBSUEsTUFBSixFQUFZO0FBQUE7O0FBQ1JrRSxZQUFNLENBQUN4RixDQUFQLGdCQUFXc0IsTUFBTSxDQUFDdEIsQ0FBbEIsaURBQXVCLENBQXZCO0FBQ0F3RixZQUFNLENBQUN6RixDQUFQLGdCQUFXdUIsTUFBTSxDQUFDdkIsQ0FBbEIsaURBQXVCLENBQXZCO0FBQ0F5RixZQUFNLENBQUM0RCxDQUFQLGdCQUFXOUgsTUFBTSxDQUFDOEgsQ0FBbEIsaURBQXVCLENBQXZCO0FBQ0E1RCxZQUFNLENBQUM2RCxDQUFQLGdCQUFXL0gsTUFBTSxDQUFDK0gsQ0FBbEIsaURBQXVCLENBQXZCO0FBQ0E3RCxZQUFNLENBQUM1RCxFQUFQLGlCQUFZTixNQUFNLENBQUNNLEVBQW5CLG1EQUF5QixDQUF6QjtBQUNBNEQsWUFBTSxDQUFDM0QsRUFBUCxpQkFBWVAsTUFBTSxDQUFDTyxFQUFuQixtREFBeUIsQ0FBekI7QUFDQTtBQUNIOztBQVZpQyxRQVcxQnlILFFBWDBCLEdBV2JILFNBWGEsQ0FXMUJHLFFBWDBCO0FBWWxDLFFBQU1DLE1BQU0sZ0NBQUdKLFNBQVMsQ0FBQ0ksTUFBYixpRUFBdUJKLFNBQVMsQ0FBQ0ssS0FBakMsdUNBQTBDLENBQXREO0FBQ0EsUUFBTUMsTUFBTSxpQ0FBR04sU0FBUyxDQUFDTSxNQUFiLGlFQUF1Qk4sU0FBUyxDQUFDSyxLQUFqQyx5Q0FBMEMsQ0FBdEQ7QUFDQWhFLFVBQU0sQ0FBQzVELEVBQVAsbUJBQVl1SCxTQUFTLENBQUMzSCxDQUF0Qix1REFBMkIsQ0FBM0I7QUFDQWdFLFVBQU0sQ0FBQzNELEVBQVAsbUJBQVlzSCxTQUFTLENBQUMxSCxDQUF0Qix1REFBMkIsQ0FBM0I7O0FBQ0EsUUFBSTZILFFBQUosRUFBYztBQUNWLFVBQU1JLEdBQUcsR0FBRzVILElBQUksQ0FBQzRILEdBQUwsQ0FBU0osUUFBVCxDQUFaO0FBQ0EsVUFBTUssR0FBRyxHQUFHN0gsSUFBSSxDQUFDNkgsR0FBTCxDQUFTTCxRQUFULENBQVo7QUFDQTlELFlBQU0sQ0FBQ3hGLENBQVAsR0FBVzBKLEdBQUcsR0FBR0gsTUFBakI7QUFDQS9ELFlBQU0sQ0FBQ3pGLENBQVAsR0FBVzRKLEdBQUcsR0FBR0osTUFBakI7QUFDQS9ELFlBQU0sQ0FBQzRELENBQVAsR0FBVyxDQUFDTyxHQUFELEdBQU9GLE1BQWxCO0FBQ0FqRSxZQUFNLENBQUM2RCxDQUFQLEdBQVdLLEdBQUcsR0FBR0QsTUFBakI7QUFDQTtBQUNIOztBQUNEakUsVUFBTSxDQUFDeEYsQ0FBUCxHQUFXdUosTUFBWDtBQUNBL0QsVUFBTSxDQUFDekYsQ0FBUCxHQUFXLENBQVg7QUFDQXlGLFVBQU0sQ0FBQzRELENBQVAsR0FBVyxDQUFYO0FBQ0E1RCxVQUFNLENBQUM2RCxDQUFQLEdBQVdJLE1BQVg7QUFDSDs7QUFDRFIsV0FBUyxDQUFDQyxTQUFWLEdBQXNCQSxTQUF0Qjs7QUFDQSxXQUFTVSxpQkFBVCxDQUEyQlQsU0FBM0IsRUFBc0MzRCxNQUF0QyxFQUE4QztBQUFBOztBQUFBLFFBQ2xDekUsY0FEa0MsR0FDZm9JLFNBRGUsQ0FDbENwSSxjQURrQzs7QUFFMUMsUUFBSUEsY0FBSixFQUFvQjtBQUFBOztBQUNoQnlFLFlBQU0sQ0FBQ2hGLGVBQVAsNEJBQXlCTyxjQUFjLENBQUNQLGVBQXhDLHlFQUEyRCxDQUEzRDtBQUNBZ0YsWUFBTSxDQUFDdEYsYUFBUCw0QkFBdUJhLGNBQWMsQ0FBQ2IsYUFBdEMseUVBQXVELENBQXZEO0FBQ0FzRixZQUFNLENBQUNwRixlQUFQLDRCQUF5QlcsY0FBYyxDQUFDWCxlQUF4Qyx5RUFBMkQsQ0FBM0Q7QUFDQW9GLFlBQU0sQ0FBQ2xGLGNBQVAsNEJBQXdCUyxjQUFjLENBQUNULGNBQXZDLHlFQUF5RCxDQUF6RDtBQUNBa0YsWUFBTSxDQUFDL0UsV0FBUCw2QkFBcUJNLGNBQWMsQ0FBQ04sV0FBcEMsMkVBQW1ELENBQW5EO0FBQ0ErRSxZQUFNLENBQUNyRixTQUFQLDRCQUFtQlksY0FBYyxDQUFDWixTQUFsQyx5RUFBK0MsQ0FBL0M7QUFDQXFGLFlBQU0sQ0FBQ25GLFdBQVAsNkJBQXFCVSxjQUFjLENBQUNWLFdBQXBDLDJFQUFtRCxDQUFuRDtBQUNBbUYsWUFBTSxDQUFDakYsVUFBUCw0QkFBb0JRLGNBQWMsQ0FBQ1IsVUFBbkMseUVBQWlELENBQWpEO0FBQ0E7QUFDSDs7QUFaeUMsUUFhbENzSixJQWJrQyxHQWF6QlYsU0FieUIsQ0FhbENVLElBYmtDOztBQWMxQyxRQUFJQSxJQUFKLEVBQVU7QUFBQTs7QUFBQSx3QkFDMkJBLElBRDNCLENBQ0VuSyxLQURGO0FBQUEsVUFDRUEsS0FERiw0QkFDVSxDQURWO0FBQUEsd0JBQzJCbUssSUFEM0IsQ0FDYUMsS0FEYjtBQUFBLFVBQ2FBLEtBRGIsNEJBQ3FCLENBRHJCO0FBRU4sVUFBTUMsYUFBYSxHQUFHLElBQUlELEtBQTFCO0FBQ0EsVUFBTWpLLENBQUMsR0FBSUgsS0FBSyxJQUFJLEVBQVYsR0FBZ0IsSUFBMUI7QUFDQSxVQUFNSSxDQUFDLEdBQUlKLEtBQUssSUFBSSxDQUFWLEdBQWUsSUFBekI7QUFDQSxVQUFNSyxDQUFDLEdBQUdMLEtBQUssR0FBRyxJQUFsQjtBQUNBOEYsWUFBTSxDQUFDaEYsZUFBUCx1QkFBeUIySSxTQUFTLENBQUN4SixLQUFuQywrREFBNEMsQ0FBNUM7QUFDQTZGLFlBQU0sQ0FBQ3RGLGFBQVAsR0FBdUI2SixhQUF2QjtBQUNBdkUsWUFBTSxDQUFDcEYsZUFBUCxHQUF5QjJKLGFBQXpCO0FBQ0F2RSxZQUFNLENBQUNsRixjQUFQLEdBQXdCeUosYUFBeEI7QUFDQXZFLFlBQU0sQ0FBQy9FLFdBQVAsR0FBcUIsQ0FBckI7QUFDQStFLFlBQU0sQ0FBQ3JGLFNBQVAsR0FBbUJOLENBQUMsR0FBR2lLLEtBQXZCO0FBQ0F0RSxZQUFNLENBQUNuRixXQUFQLEdBQXFCUCxDQUFDLEdBQUdnSyxLQUF6QjtBQUNBdEUsWUFBTSxDQUFDakYsVUFBUCxHQUFvQlIsQ0FBQyxHQUFHK0osS0FBeEI7QUFDQTtBQUNIOztBQUNEdEUsVUFBTSxDQUFDaEYsZUFBUCx3QkFBeUIySSxTQUFTLENBQUN4SixLQUFuQyxpRUFBNEMsQ0FBNUM7QUFDQTZGLFVBQU0sQ0FBQ3RGLGFBQVAsR0FBdUIsQ0FBdkI7QUFDQXNGLFVBQU0sQ0FBQ3BGLGVBQVAsR0FBeUIsQ0FBekI7QUFDQW9GLFVBQU0sQ0FBQ2xGLGNBQVAsR0FBd0IsQ0FBeEI7QUFDQWtGLFVBQU0sQ0FBQy9FLFdBQVAsR0FBcUIsQ0FBckI7QUFDQStFLFVBQU0sQ0FBQ3JGLFNBQVAsR0FBbUIsQ0FBbkI7QUFDQXFGLFVBQU0sQ0FBQ25GLFdBQVAsR0FBcUIsQ0FBckI7QUFDQW1GLFVBQU0sQ0FBQ2pGLFVBQVAsR0FBb0IsQ0FBcEI7QUFDSDs7QUFDRDBJLFdBQVMsQ0FBQ1csaUJBQVYsR0FBOEJBLGlCQUE5QjtBQUNILENBeEVELEVBd0VHWCxTQUFTLEtBQUtBLFNBQVMsR0FBRyxFQUFqQixDQXhFWixFOzs7Ozs7Ozs7Ozs7O0FDRE8sSUFBSWUsTUFBSjs7QUFDUCxDQUFDLFVBQVVBLE1BQVYsRUFBa0I7QUFDZixXQUFTQyxTQUFULENBQW1CakYsU0FBbkIsRUFBOEI7QUFBQTs7QUFDMUIsaUNBQU9BLFNBQVMsQ0FBQ2tGLE9BQWpCLG1FQUE0QixJQUE1QjtBQUNIOztBQUNERixRQUFNLENBQUNDLFNBQVAsR0FBbUJBLFNBQW5COztBQUNBLFdBQVM5RSxNQUFULENBQWdCSCxTQUFoQixFQUEyQm1GLElBQTNCLEVBQWlDO0FBQzdCLFFBQUluRixTQUFTLENBQUNvRixRQUFkLEVBQXdCO0FBQ3BCcEYsZUFBUyxDQUFDb0YsUUFBVixDQUFtQkQsSUFBbkI7QUFDSDtBQUNKOztBQUNESCxRQUFNLENBQUM3RSxNQUFQLEdBQWdCQSxNQUFoQjtBQUNILENBWEQsRUFXRzZFLE1BQU0sS0FBS0EsTUFBTSxHQUFHLEVBQWQsQ0FYVCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNETyxJQUFNckQsVUFBYixHQUNJLHNCQUFjO0FBQUE7O0FBQ1YsT0FBSzBELFVBQUwsR0FBa0IsSUFBSUMsR0FBSixFQUFsQjtBQUNBLE9BQUt6RixNQUFMLEdBQWMsSUFBSXlGLEdBQUosRUFBZDtBQUNBLE9BQUtuRixNQUFMLEdBQWMsSUFBSW1GLEdBQUosRUFBZDtBQUNBLE9BQUtoRixPQUFMLEdBQWUsSUFBSWdGLEdBQUosRUFBZjtBQUNBLE9BQUs1RSxNQUFMLEdBQWMsSUFBSTRFLEdBQUosRUFBZDtBQUNILENBUEwsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLElBQU1wRCxLQUFiO0FBQ0ksbUJBQWM7QUFBQTs7QUFDVixTQUFLcUQsTUFBTCxHQUFjLElBQUlELEdBQUosRUFBZDtBQUNBLFNBQUtFLFFBQUwsR0FBZ0IsSUFBSUYsR0FBSixFQUFoQjtBQUNBLFNBQUtKLE9BQUwsR0FBZSxJQUFmO0FBQ0g7O0FBTEw7QUFBQTtBQUFBLFdBTUksZUFBYTtBQUFBOztBQUNULFVBQUksQ0FBQyxLQUFLQSxPQUFWLEVBQW1CO0FBQ2Y7QUFDSDs7QUFDRCxrQkFBQU8sT0FBTyxFQUFDQyxHQUFSO0FBQ0g7QUFYTDtBQUFBO0FBQUEsV0FZSSxpQkFBZTtBQUNYLFVBQUksQ0FBQyxLQUFLUixPQUFWLEVBQW1CO0FBQ2Y7QUFDSDs7QUFIVSx3Q0FBTlMsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBSVgsVUFBTTdCLEVBQUUsR0FBRzhCLE1BQU0sQ0FBQ0QsSUFBRCxDQUFqQjtBQUNBLFVBQUlFLEtBQUssR0FBRyxLQUFLTixNQUFMLENBQVlPLEdBQVosQ0FBZ0JoQyxFQUFoQixDQUFaOztBQUNBLFVBQUksQ0FBQytCLEtBQUwsRUFBWTtBQUFBOztBQUNSQSxhQUFLLEdBQUcsQ0FBUjs7QUFDQSxxQkFBQUosT0FBTyxFQUFDTSxLQUFSLGtCQUFpQkosSUFBakI7QUFDSDs7QUFDREUsV0FBSztBQUNMLFdBQUtOLE1BQUwsQ0FBWXZFLEdBQVosQ0FBZ0I4QyxFQUFoQixFQUFvQitCLEtBQXBCO0FBQ0g7QUF4Qkw7QUFBQTtBQUFBLFdBeUJJLG1CQUFpQjtBQUNiLFVBQUksQ0FBQyxLQUFLWCxPQUFWLEVBQW1CO0FBQ2Y7QUFDSDs7QUFIWSx5Q0FBTlMsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBSWIsVUFBTTdCLEVBQUUsR0FBRzhCLE1BQU0sQ0FBQ0QsSUFBRCxDQUFqQjtBQUNBLFVBQUlFLEtBQUssR0FBRyxLQUFLTCxRQUFMLENBQWNNLEdBQWQsQ0FBa0JoQyxFQUFsQixDQUFaOztBQUNBLFVBQUksQ0FBQytCLEtBQUwsRUFBWTtBQUFBOztBQUNSQSxhQUFLLEdBQUcsQ0FBUjs7QUFDQSxxQkFBQUosT0FBTyxFQUFDTyxJQUFSLGtCQUFnQkwsSUFBaEI7QUFDSDs7QUFDREUsV0FBSztBQUNMLFdBQUtMLFFBQUwsQ0FBY3hFLEdBQWQsQ0FBa0I4QyxFQUFsQixFQUFzQitCLEtBQXRCO0FBQ0g7QUFyQ0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNPLElBQU0vRCxPQUFiO0FBQUE7O0FBQUE7O0FBQ0kscUJBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBU3hFLFNBQVQ7QUFDQSxVQUFLeUMsS0FBTCxHQUFhLENBQWI7QUFDQSxVQUFLa0csV0FBTCxHQUFtQixDQUFuQjtBQUNBLFVBQUtmLE9BQUwsR0FBZSxJQUFmO0FBQ0EsVUFBS3hILFFBQUwsR0FBZ0IsRUFBaEI7QUFMVTtBQU1iOztBQVBMO0FBQUE7QUFBQSxXQVFJLHNCQUFhO0FBQ1QsVUFBSW5CLE9BQU8sR0FBRyxLQUFLbUIsUUFBTCxDQUFjLEtBQUtxQyxLQUFuQixDQUFkOztBQUNBLFVBQUksQ0FBQ3hELE9BQUwsRUFBYztBQUNWQSxlQUFPLEdBQUc7QUFDTnFFLGtCQUFRLEVBQUUsQ0FESjtBQUVORixnQkFBTSxFQUFFO0FBRkYsU0FBVjtBQUlBLGFBQUtoRCxRQUFMLENBQWMsS0FBS3FDLEtBQW5CLElBQTRCeEQsT0FBNUI7QUFDSDs7QUFDRCxhQUFPQSxPQUFQO0FBQ0g7QUFsQkw7QUFBQTtBQUFBLFdBbUJJLHlCQUFnQnlELFNBQWhCLEVBQTJCO0FBQ3ZCLFVBQU16RCxPQUFPLEdBQUcsS0FBS29CLFVBQUwsRUFBaEI7QUFDQXBCLGFBQU8sQ0FBQ3FFLFFBQVIsR0FBbUIsQ0FBbkI7QUFDQXJFLGFBQU8sQ0FBQ21FLE1BQVIsR0FBaUIsSUFBakI7O0FBQ0EsVUFBSSxLQUFLWCxLQUFMLEdBQWEsS0FBS2hDLE1BQUwsQ0FBWWdDLEtBQTdCLEVBQW9DO0FBQ2hDO0FBQ0g7O0FBQ0QsVUFBTW1HLE9BQU8sR0FBRyxLQUFLbkksTUFBTCxDQUFZZ0QsVUFBWixDQUF1QkwsTUFBdkIsQ0FBOEJvRixHQUE5QixDQUFrQzlGLFNBQVMsQ0FBQ1AsSUFBNUMsQ0FBaEI7O0FBQ0EsVUFBSXlHLE9BQUosRUFBYTtBQUNUQSxlQUFPLENBQUNsRyxTQUFELEVBQVksS0FBS2pDLE1BQWpCLENBQVA7QUFDSDtBQUNKO0FBOUJMO0FBQUE7QUFBQSxXQStCSSxrQkFBUztBQUNMLFVBQUksQ0FBQyxLQUFLbUgsT0FBVixFQUFtQjtBQUNmO0FBQ0g7O0FBSEksVUFJR2lCLElBSkgsR0FJWSxLQUFLcEksTUFKakIsQ0FJR29JLElBSkg7O0FBS0wsVUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUDtBQUNIOztBQUNELFVBQU1DLFNBQVMsR0FBR0MsV0FBVyxDQUFDQyxHQUFaLEVBQWxCO0FBQ0EsV0FBS3ZHLEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBS00sZUFBTCxDQUFxQjhGLElBQXJCO0FBQ0EsV0FBS0YsV0FBTCxHQUFtQkksV0FBVyxDQUFDQyxHQUFaLEtBQW9CRixTQUF2QztBQUNIO0FBM0NMOztBQUFBO0FBQUEsRUFBNkI3RCx3REFBN0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDTyxJQUFNckksUUFBYjtBQUFBOztBQUFBOztBQUNJLHNCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsK0JBQVNvRCxTQUFUO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUZVO0FBR2I7O0FBSkw7QUFBQTtBQUFBLFdBS0ksaUJBQVEsQ0FDUDtBQU5MO0FBQUE7QUFBQSxXQU9JLGVBQU0sQ0FDTDtBQVJMOztBQUFBO0FBQUEsRUFBOEI4RSx3REFBOUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNUCxhQUFiO0FBQUE7O0FBQUE7O0FBQ0ksMkJBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBUzFFLFNBQVQ7QUFDQSxVQUFLeUMsS0FBTCxHQUFhLENBQWI7QUFDQSxVQUFLbUYsT0FBTCxHQUFlLElBQWY7QUFDQSxVQUFLcUIsTUFBTCxHQUFjak0sa0RBQUEsRUFBZDtBQUNBLFVBQUtrTSxLQUFMLEdBQWFsTSxrREFBQSxFQUFiO0FBQ0EsVUFBS21NLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLGFBQW5CO0FBQ0EsVUFBS2hKLFFBQUwsR0FBZ0IsRUFBaEI7QUFSVTtBQVNiOztBQVZMO0FBQUE7QUFBQSxXQVdJLHNCQUFhO0FBQ1QsVUFBSW5CLE9BQU8sR0FBRyxLQUFLbUIsUUFBTCxDQUFjLEtBQUtxQyxLQUFuQixDQUFkOztBQUNBLFVBQUksQ0FBQ3hELE9BQUwsRUFBYztBQUNWQSxlQUFPLEdBQUc7QUFDTkQsZ0JBQU0sRUFBRUksbURBQUE7QUFERixTQUFWO0FBR0EsYUFBS2dCLFFBQUwsQ0FBYyxLQUFLcUMsS0FBbkIsSUFBNEJ4RCxPQUE1QjtBQUNIOztBQUNELGFBQU9BLE9BQVA7QUFDSDtBQXBCTDtBQUFBO0FBQUEsV0FxQkksa0JBQVNrRCxJQUFULEVBQWVqRCxDQUFmLEVBQWtCQyxDQUFsQixFQUFxQnFILEVBQXJCLEVBQXlCO0FBQ3JCLFVBQUksQ0FBQyxLQUFLb0IsT0FBVixFQUFtQjtBQUNmO0FBQ0g7O0FBSG9CLFVBSWJpQixJQUphLEdBSUosS0FBS3BJLE1BSkQsQ0FJYm9JLElBSmE7O0FBS3JCLFVBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1A7QUFDSDs7QUFDRCxXQUFLSyxLQUFMLENBQVdoSyxDQUFYLEdBQWVBLENBQWY7QUFDQSxXQUFLZ0ssS0FBTCxDQUFXL0osQ0FBWCxHQUFlQSxDQUFmO0FBQ0EsV0FBSzhKLE1BQUwsQ0FBWS9KLENBQVosR0FBZ0JBLENBQWhCO0FBQ0EsV0FBSytKLE1BQUwsQ0FBWTlKLENBQVosR0FBZ0JBLENBQWhCO0FBQ0EsV0FBS2dLLFNBQUwsR0FBaUIzQyxFQUFqQjtBQUNBLFdBQUs0QyxXQUFMLEdBQW1CakgsSUFBbkI7QUFDQSxXQUFLTSxLQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQU00RyxJQUFJLEdBQUcsS0FBS2hKLFVBQUwsRUFBYjtBQUNBakIsNERBQUEsQ0FBZ0JpSyxJQUFJLENBQUNySyxNQUFyQjtBQUNBLFdBQUt5RCxLQUFMO0FBQ0EsV0FBS1UsaUJBQUwsQ0FBdUIwRixJQUF2QixFQUE2QlEsSUFBN0I7QUFDSDtBQXhDTDtBQUFBO0FBQUEsV0F5Q0ksMkJBQWtCM0csU0FBbEIsRUFBNkI0RyxNQUE3QixFQUFxQztBQUNqQyxVQUFJLEtBQUs3RyxLQUFMLEdBQWEsS0FBS2hDLE1BQUwsQ0FBWWdDLEtBQTdCLEVBQW9DO0FBQ2hDLGVBQU8sS0FBUDtBQUNIOztBQUNELFVBQUksQ0FBQ3lDLGtFQUFBLENBQWtCeEMsU0FBbEIsQ0FBTCxFQUFtQztBQUMvQixlQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFJLENBQUN3RCx5RUFBQSxDQUF5QnhELFNBQXpCLENBQUwsRUFBMEM7QUFDdEMsZUFBTyxLQUFQO0FBQ0g7O0FBQ0QsVUFBTWtHLE9BQU8sR0FBRyxLQUFLbkksTUFBTCxDQUFZZ0QsVUFBWixDQUF1QlQsT0FBdkIsQ0FBK0J3RixHQUEvQixDQUFtQzlGLFNBQVMsQ0FBQ1AsSUFBN0MsQ0FBaEI7O0FBQ0EsVUFBSXlHLE9BQUosRUFBYTtBQUNULFlBQU0zSixPQUFPLEdBQUcsS0FBS29CLFVBQUwsRUFBaEI7QUFDQXNHLDhFQUFBLENBQW9CakUsU0FBcEIsRUFBK0J6RCxPQUFPLENBQUNELE1BQXZDO0FBQ0FJLDREQUFBLENBQWNrSyxNQUFNLENBQUN0SyxNQUFyQixFQUE2QkMsT0FBTyxDQUFDRCxNQUFyQyxFQUE2Q0MsT0FBTyxDQUFDRCxNQUFyRDtBQUNBSSwyRUFBQSxDQUE2QkgsT0FBTyxDQUFDRCxNQUFyQyxFQUE2QyxLQUFLaUssTUFBbEQsRUFBMEQsS0FBS0MsS0FBL0Q7QUFKUywwQkFLUSxLQUFLQSxLQUxiO0FBQUEsWUFLRGhLLENBTEMsZUFLREEsQ0FMQztBQUFBLFlBS0VDLENBTEYsZUFLRUEsQ0FMRjtBQU1ULFlBQU0rRCxNQUFNLEdBQUcwRixPQUFPLENBQUNsRyxTQUFELEVBQVksS0FBS2pDLE1BQWpCLENBQXRCOztBQUNBLFlBQUl5QyxNQUFKLEVBQVk7QUFDUmdELGdGQUFBLENBQXNCeEQsU0FBdEIsRUFBaUMsS0FBSzBHLFdBQXRDLEVBQW1EbEssQ0FBbkQsRUFBc0RDLENBQXRELEVBQXlELEtBQUtnSyxTQUE5RDtBQUNIOztBQUNELFlBQUksS0FBS0MsV0FBTCxLQUFxQixhQUF6QixFQUF3QztBQUNwQyxjQUFJbEcsTUFBTSxJQUFJLENBQUNSLFNBQVMsQ0FBQ3NELFdBQXpCLEVBQXNDO0FBQ2xDRSxrRkFBQSxDQUFzQnhELFNBQXRCLEVBQWlDLGFBQWpDLEVBQWdEeEQsQ0FBaEQsRUFBbURDLENBQW5ELEVBQXNELEtBQUtnSyxTQUEzRDtBQUNILFdBRkQsTUFHSyxJQUFJLENBQUNqRyxNQUFELElBQVdSLFNBQVMsQ0FBQ3NELFdBQXpCLEVBQXNDO0FBQ3ZDRSxrRkFBQSxDQUFzQnhELFNBQXRCLEVBQWlDLFlBQWpDLEVBQStDeEQsQ0FBL0MsRUFBa0RDLENBQWxELEVBQXFELEtBQUtnSyxTQUExRDtBQUNIOztBQUNEekcsbUJBQVMsQ0FBQ3NELFdBQVYsR0FBd0I5QyxNQUF4QjtBQUNIOztBQUNELGVBQU9BLE1BQVA7QUFDSDs7QUFDRCxhQUFPLEtBQVA7QUFDSDtBQTFFTDs7QUFBQTtBQUFBLEVBQW1DK0Isd0RBQW5DLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTVIsUUFBYjtBQUFBOztBQUFBOztBQUNJLHNCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsK0JBQVN6RSxTQUFUO0FBQ0EsVUFBS3lDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsVUFBS2tHLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxVQUFLZixPQUFMLEdBQWUsSUFBZjtBQUNBLFVBQUt4SCxRQUFMLEdBQWdCLEVBQWhCO0FBTFU7QUFNYjs7QUFQTDtBQUFBO0FBQUEsV0FRSSxzQkFBYTtBQUNULFVBQUluQixPQUFPLEdBQUcsS0FBS21CLFFBQUwsQ0FBYyxLQUFLcUMsS0FBbkIsQ0FBZDs7QUFDQSxVQUFJLENBQUN4RCxPQUFMLEVBQWM7QUFDVkEsZUFBTyxHQUFHO0FBQ05ELGdCQUFNLEVBQUVJLG1EQUFBLEVBREY7QUFFTlgsd0JBQWMsRUFBRWQsMkRBQUE7QUFGVixTQUFWO0FBSUEsYUFBS3lDLFFBQUwsQ0FBYyxLQUFLcUMsS0FBbkIsSUFBNEJ4RCxPQUE1QjtBQUNIOztBQUNELGFBQU9BLE9BQVA7QUFDSDtBQWxCTDtBQUFBO0FBQUEsV0FtQkkseUJBQWdCeUQsU0FBaEIsRUFBMkI0RyxNQUEzQixFQUFtQztBQUMvQixVQUFJLEtBQUs3RyxLQUFMLEdBQWEsS0FBS2hDLE1BQUwsQ0FBWWdDLEtBQTdCLEVBQW9DO0FBQ2hDO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDeUMsa0VBQUEsQ0FBa0J4QyxTQUFsQixDQUFMLEVBQW1DO0FBQy9CO0FBQ0g7O0FBQ0QsVUFBTXpELE9BQU8sR0FBRyxLQUFLb0IsVUFBTCxFQUFoQjtBQUNBc0csNEVBQUEsQ0FBb0JqRSxTQUFwQixFQUErQnpELE9BQU8sQ0FBQ0QsTUFBdkM7QUFDQTJILG9GQUFBLENBQTRCakUsU0FBNUIsRUFBdUN6RCxPQUFPLENBQUNSLGNBQS9DO0FBQ0FXLDBEQUFBLENBQWNrSyxNQUFNLENBQUN0SyxNQUFyQixFQUE2QkMsT0FBTyxDQUFDRCxNQUFyQyxFQUE2Q0MsT0FBTyxDQUFDRCxNQUFyRDtBQUNBckIsa0VBQUEsQ0FBc0IyTCxNQUFNLENBQUM3SyxjQUE3QixFQUE2Q1EsT0FBTyxDQUFDUixjQUFyRCxFQUFxRVEsT0FBTyxDQUFDUixjQUE3RTtBQUNBLFVBQU1tSyxPQUFPLEdBQUcsS0FBS25JLE1BQUwsQ0FBWWdELFVBQVosQ0FBdUJsQixNQUF2QixDQUE4QmlHLEdBQTlCLENBQWtDOUYsU0FBUyxDQUFDUCxJQUE1QyxDQUFoQjs7QUFDQSxVQUFJeUcsT0FBSixFQUFhO0FBQ1RBLGVBQU8sQ0FBQ2xHLFNBQUQsRUFBWSxLQUFLakMsTUFBakIsQ0FBUDtBQUNIO0FBQ0o7QUFuQ0w7QUFBQTtBQUFBLFdBb0NJLGtCQUFTO0FBQ0wsVUFBSSxDQUFDLEtBQUttSCxPQUFWLEVBQW1CO0FBQ2Y7QUFDSDs7QUFISSxVQUlHaUIsSUFKSCxHQUlZLEtBQUtwSSxNQUpqQixDQUlHb0ksSUFKSDs7QUFLTCxVQUFJLENBQUNBLElBQUwsRUFBVztBQUNQO0FBQ0g7O0FBQ0QsVUFBTUMsU0FBUyxHQUFHQyxXQUFXLENBQUNDLEdBQVosRUFBbEI7QUFDQSxXQUFLdkksTUFBTCxDQUFZcUUsUUFBWixDQUFxQnlFLEtBQXJCO0FBQ0EsV0FBSzlHLEtBQUwsR0FBYSxDQUFiO0FBQ0EsVUFBTTRHLElBQUksR0FBRyxLQUFLaEosVUFBTCxFQUFiO0FBQ0EsV0FBS29DLEtBQUw7QUFDQXJELHdEQUFBLENBQVksS0FBS3FCLE1BQUwsQ0FBWVUsTUFBWixDQUFtQnlGLFNBQW5CLEVBQVosRUFBNEN5QyxJQUFJLENBQUNySyxNQUFqRDtBQUNBckIsb0VBQUEsQ0FBd0IwTCxJQUFJLENBQUM1SyxjQUE3QjtBQUNBLFdBQUtrRSxlQUFMLENBQXFCa0csSUFBckIsRUFBMkJRLElBQTNCO0FBQ0EsV0FBSzVJLE1BQUwsQ0FBWXFFLFFBQVosQ0FBcUIwRSxHQUFyQjtBQUNBLFdBQUtiLFdBQUwsR0FBbUJJLFdBQVcsQ0FBQ0MsR0FBWixLQUFvQkYsU0FBdkM7QUFDSDtBQXRETDs7QUFBQTtBQUFBLEVBQThCN0Qsd0RBQTlCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ08sSUFBTUosU0FBYjtBQUFBOztBQUFBOztBQUNJLHVCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsK0JBQVM3RSxTQUFUO0FBQ0EsVUFBS2dGLFNBQUwsR0FBaUIsSUFBSWdELEdBQUosRUFBakI7QUFDQSxVQUFLeUIsU0FBTCxHQUFpQixJQUFJQyxHQUFKLEVBQWpCO0FBSFU7QUFJYjs7QUFMTDtBQUFBO0FBQUEsV0FNSSxhQUFJQyxLQUFKLEVBQVc7QUFDUCxVQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNSLGVBQU8sSUFBUDtBQUNIOztBQUNELFVBQUlDLFFBQVEsR0FBRyxLQUFLNUUsU0FBTCxDQUFld0QsR0FBZixDQUFtQm1CLEtBQW5CLENBQWY7O0FBQ0EsVUFBSSxDQUFDQyxRQUFMLEVBQWU7QUFDWEEsZ0JBQVEsR0FBRyxLQUFLQyxPQUFMLENBQWFGLEtBQWIsQ0FBWDtBQUNBLGFBQUszRSxTQUFMLENBQWV0QixHQUFmLENBQW1CaUcsS0FBbkIsRUFBMEJDLFFBQTFCO0FBQ0g7O0FBQ0QsYUFBT0EsUUFBUDtBQUNIO0FBaEJMO0FBQUE7QUFBQSxXQWlCSSxpQkFBUUQsS0FBUixFQUFlO0FBQUEsaURBQ1ksS0FBS0YsU0FEakI7QUFBQTs7QUFBQTtBQUNYLDREQUF1QztBQUFBLGNBQTVCSyxRQUE0QjtBQUNuQyxjQUFNRixRQUFRLEdBQUdFLFFBQVEsQ0FBQ0gsS0FBRCxFQUFRLEtBQUtsSixNQUFiLENBQXpCOztBQUNBLGNBQUltSixRQUFKLEVBQWM7QUFDVixtQkFBT0EsUUFBUDtBQUNIO0FBQ0o7QUFOVTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU9YLFdBQUtuSixNQUFMLENBQVlDLEtBQVosQ0FBa0JDLE9BQWxCLGtDQUFvRGdKLEtBQXBEO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUExQkw7O0FBQUE7QUFBQSxFQUErQjFFLHdEQUEvQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ08sSUFBTVgsTUFBYjtBQUNJLG9CQUFjO0FBQUE7O0FBQ1YsU0FBS3pELEtBQUwsR0FBYSxHQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEdBQWQ7QUFDQSxTQUFLUSxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS3lJLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLL0ssTUFBTCxHQUFjSSxtREFBQSxFQUFkO0FBQ0g7O0FBUEw7QUFBQTtBQUFBLFdBUUkscUJBQVk7QUFDUixVQUFNa0MsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBbkI7QUFDQSxXQUFLdkMsTUFBTCxDQUFZdEIsQ0FBWixHQUFnQjRELFVBQWhCO0FBQ0EsV0FBS3RDLE1BQUwsQ0FBWStILENBQVosR0FBZ0J6RixVQUFoQjtBQUNBLGFBQU8sS0FBS3RDLE1BQVo7QUFDSDtBQWJMO0FBQUE7QUFBQSxXQWNJLG9CQUFXO0FBQ1AsYUFBTyxLQUFLK0ssVUFBTCxHQUFrQkMsTUFBTSxDQUFDQyxVQUF6QixHQUFzQyxLQUFLcEosS0FBbEQ7QUFDSDtBQWhCTDtBQUFBO0FBQUEsV0FpQkkscUJBQVk7QUFDUixhQUFPLEtBQUtrSixVQUFMLEdBQWtCQyxNQUFNLENBQUNFLFdBQXpCLEdBQXVDLEtBQUtwSixNQUFuRDtBQUNIO0FBbkJMO0FBQUE7QUFBQSxXQW9CSSx5QkFBZ0I7QUFBQTs7QUFDWixhQUFPLEtBQUtRLFVBQUwsR0FBa0IsQ0FBbEIsR0FBc0IsS0FBS0EsVUFBM0IsNEJBQXdDMEksTUFBTSxDQUFDRyxnQkFBL0MseUVBQW1FLENBQTFFO0FBQ0g7QUF0Qkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRE8sSUFBTXhGLE1BQWI7QUFDSSxrQkFBWWxFLE1BQVosRUFBb0I7QUFBQTs7QUFBQTs7QUFDaEIsU0FBSzJKLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUt4QyxJQUFMLEdBQVksQ0FBWjs7QUFDQSxTQUFLaEYsTUFBTCxHQUFjLFVBQUNnRixJQUFELEVBQVU7QUFDcEIsVUFBSSxLQUFJLENBQUN3QyxNQUFULEVBQWlCO0FBQ2I7QUFDSDs7QUFDRCxXQUFJLENBQUM1SixNQUFMLENBQVlxQyxPQUFaLENBQW9CRCxNQUFwQixDQUEyQmdGLElBQTNCOztBQUNBLFdBQUksQ0FBQ3BILE1BQUwsQ0FBWTRDLE9BQVosQ0FBb0JSLE1BQXBCOztBQUNBLFdBQUksQ0FBQ3BDLE1BQUwsQ0FBWStCLFFBQVosQ0FBcUJELE1BQXJCO0FBQ0gsS0FQRDs7QUFRQSxTQUFLK0gsV0FBTCxHQUFtQixZQUFNO0FBQ3JCLFVBQU1DLFdBQVcsR0FBR3hCLFdBQVcsQ0FBQ0MsR0FBWixFQUFwQjtBQUNBLFVBQU13QixTQUFTLEdBQUcsQ0FBQ0QsV0FBVyxHQUFHLEtBQUksQ0FBQzFDLElBQXBCLElBQTRCLElBQTlDO0FBQ0EsV0FBSSxDQUFDQSxJQUFMLEdBQVkwQyxXQUFaOztBQUNBLFdBQUksQ0FBQzFILE1BQUwsQ0FBWTJILFNBQVo7O0FBQ0EsV0FBSSxDQUFDQyxlQUFMO0FBQ0gsS0FORDs7QUFPQSxTQUFLaEssTUFBTCxHQUFjQSxNQUFkO0FBQ0g7O0FBckJMO0FBQUE7QUFBQSxTQXNCSSxlQUFlO0FBQ1gsYUFBTyxLQUFLNEosTUFBWjtBQUNIO0FBeEJMO0FBQUE7QUFBQSxXQXlCSSxnQkFBTztBQUNILFVBQUksS0FBS0EsTUFBVCxFQUFpQjtBQUNiLGFBQUt4QyxJQUFMLEdBQVlrQixXQUFXLENBQUNDLEdBQVosRUFBWjtBQUNBLGFBQUtxQixNQUFMLEdBQWMsS0FBZDtBQUNBLGFBQUtJLGVBQUw7QUFDSDtBQUNKO0FBL0JMO0FBQUE7QUFBQSxXQWdDSSxpQkFBUTtBQUNKLFdBQUtKLE1BQUwsR0FBYyxLQUFkO0FBQ0g7QUFsQ0w7QUFBQTtBQUFBLFdBbUNJLDJCQUFrQjtBQUNkSywyQkFBcUIsQ0FBQyxLQUFLSixXQUFOLENBQXJCO0FBQ0g7QUFyQ0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNPLElBQU0vRixPQUFiO0FBQUE7O0FBQUE7O0FBQ0kscUJBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBU3ZFLFNBQVQ7QUFDQSxVQUFLeUMsS0FBTCxHQUFhLENBQWI7QUFDQSxVQUFLb0YsSUFBTCxHQUFZLENBQVo7QUFDQSxVQUFLYyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsVUFBS2YsT0FBTCxHQUFlLElBQWY7QUFMVTtBQU1iOztBQVBMO0FBQUE7QUFBQSxXQVFJLGdCQUFPQyxJQUFQLEVBQWE7QUFDVCxVQUFJLENBQUMsS0FBS0QsT0FBVixFQUFtQjtBQUNmO0FBQ0g7O0FBSFEsVUFJRGlCLElBSkMsR0FJUSxLQUFLcEksTUFKYixDQUlEb0ksSUFKQzs7QUFLVCxVQUFJLENBQUNBLElBQUwsRUFBVztBQUNQO0FBQ0g7O0FBQ0QsV0FBS3BHLEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBS29GLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQU1pQixTQUFTLEdBQUdDLFdBQVcsQ0FBQ0MsR0FBWixFQUFsQjtBQUNBLFdBQUtqRyxlQUFMLENBQXFCOEYsSUFBckI7QUFDQSxXQUFLRixXQUFMLEdBQW1CSSxXQUFXLENBQUNDLEdBQVosS0FBb0JGLFNBQXZDO0FBQ0g7QUFyQkw7QUFBQTtBQUFBLFdBc0JJLHlCQUFnQnBHLFNBQWhCLEVBQTJCO0FBQ3ZCLFVBQUksS0FBS0QsS0FBTCxHQUFhLEtBQUtoQyxNQUFMLENBQVlnQyxLQUE3QixFQUFvQztBQUNoQztBQUNIOztBQUNELFVBQUksQ0FBQ2lGLGdFQUFBLENBQWlCaEYsU0FBakIsQ0FBTCxFQUFrQztBQUM5QjtBQUNIOztBQUNELFdBQUtpSSxnQkFBTCxDQUFzQmpJLFNBQXRCO0FBQ0FnRixtRUFBQSxDQUFjaEYsU0FBZCxFQUF5QixLQUFLbUYsSUFBOUI7QUFDQSxVQUFNZSxPQUFPLEdBQUcsS0FBS25JLE1BQUwsQ0FBWWdELFVBQVosQ0FBdUJaLE1BQXZCLENBQThCMkYsR0FBOUIsQ0FBa0M5RixTQUFTLENBQUNQLElBQTVDLENBQWhCOztBQUNBLFVBQUl5RyxPQUFKLEVBQWE7QUFDVEEsZUFBTyxDQUFDbEcsU0FBRCxFQUFZLEtBQUtqQyxNQUFqQixDQUFQO0FBQ0g7QUFDSjtBQW5DTDtBQUFBO0FBQUEsV0FvQ0ksMEJBQWlCaUMsU0FBakIsRUFBNEI7QUFBQTs7QUFDeEIsV0FBS2pDLE1BQUwsQ0FBWWdELFVBQVosQ0FBdUJzRSxVQUF2QixDQUFrQzZDLE9BQWxDLENBQTBDLFVBQUNoQyxPQUFELEVBQVVpQyxRQUFWLEVBQXVCO0FBQzdELFlBQUluSSxTQUFTLENBQUNtSSxRQUFELENBQWIsRUFBeUI7QUFDckJqQyxpQkFBTyxDQUFDbEcsU0FBRCxFQUFZLE1BQUksQ0FBQ2pDLE1BQWpCLENBQVA7QUFDSDtBQUNKLE9BSkQ7QUFLSDtBQTFDTDs7QUFBQTtBQUFBLEVBQTZCd0Usd0RBQTdCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQkEsU0FBU3NCLGFBQVQsQ0FBdUI5RixNQUF2QixFQUErQmlHLEtBQS9CLEVBQXNDdkUsSUFBdEMsRUFBNEM7QUFBQSxNQUNoQ2xDLElBRGdDLEdBQ3ZCUSxNQUFNLENBQUNxRSxRQURnQixDQUNoQzdFLElBRGdDO0FBRXhDLE1BQU02SyxVQUFVLEdBQUc3SyxJQUFJLENBQUM4SyxxQkFBTCxFQUFuQjtBQUNBLE1BQU03TCxDQUFDLEdBQUd3SCxLQUFLLENBQUNzRSxPQUFOLEdBQWdCRixVQUFVLENBQUNHLElBQTNCLEdBQWtDaEwsSUFBSSxDQUFDaUwsVUFBakQ7QUFDQSxNQUFNL0wsQ0FBQyxHQUFHdUgsS0FBSyxDQUFDeUUsT0FBTixHQUFnQkwsVUFBVSxDQUFDTSxHQUEzQixHQUFpQ25MLElBQUksQ0FBQ29MLFNBQWhEO0FBQ0E1SyxRQUFNLENBQUN3QyxhQUFQLENBQXFCcUksUUFBckIsQ0FBOEJuSixJQUE5QixFQUFvQ2pELENBQXBDLEVBQXVDQyxDQUF2QyxFQUEwQyxDQUExQztBQUNBdUgsT0FBSyxDQUFDNkUsY0FBTjtBQUNIOztBQUNNLElBQUlDLGNBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxjQUFWLEVBQTBCO0FBQ3ZCLFdBQVNoSSxJQUFULENBQWMvQyxNQUFkLEVBQXNCO0FBQUEsUUFDVlIsSUFEVSxHQUNEUSxNQUFNLENBQUNxRSxRQUROLENBQ1Y3RSxJQURVO0FBRWxCQSxRQUFJLENBQUN3TCxnQkFBTCxDQUFzQixXQUF0QixFQUFtQyxVQUFDL0UsS0FBRCxFQUFXO0FBQzFDSCxtQkFBYSxDQUFDOUYsTUFBRCxFQUFTaUcsS0FBVCxFQUFnQixhQUFoQixDQUFiO0FBQ0gsS0FGRDtBQUdBekcsUUFBSSxDQUFDd0wsZ0JBQUwsQ0FBc0IsU0FBdEIsRUFBaUMsVUFBQy9FLEtBQUQsRUFBVztBQUN4Q0gsbUJBQWEsQ0FBQzlGLE1BQUQsRUFBU2lHLEtBQVQsRUFBZ0IsV0FBaEIsQ0FBYjtBQUNILEtBRkQ7QUFHQXpHLFFBQUksQ0FBQ3dMLGdCQUFMLENBQXNCLFdBQXRCLEVBQW1DLFVBQUMvRSxLQUFELEVBQVc7QUFDMUNILG1CQUFhLENBQUM5RixNQUFELEVBQVNpRyxLQUFULEVBQWdCLGFBQWhCLENBQWI7QUFDSCxLQUZEO0FBR0g7O0FBQ0Q4RSxnQkFBYyxDQUFDaEksSUFBZixHQUFzQkEsSUFBdEI7QUFDSCxDQWRELEVBY0dnSSxjQUFjLEtBQUtBLGNBQWMsR0FBRyxFQUF0QixDQWRqQixFOzs7Ozs7Ozs7Ozs7O0FDVE8sSUFBSUUsTUFBSjs7QUFDUCxDQUFDLFVBQVVBLE1BQVYsRUFBa0I7QUFDZixXQUFTQyxLQUFULEdBQWlCO0FBQ2IsV0FBTztBQUNIQyxVQUFJLEVBQUVDLE1BQU0sQ0FBQ0MsU0FEVjtBQUVIQyxVQUFJLEVBQUVGLE1BQU0sQ0FBQ0MsU0FGVjtBQUdIRSxVQUFJLEVBQUVILE1BQU0sQ0FBQ0ksU0FIVjtBQUlIQyxVQUFJLEVBQUVMLE1BQU0sQ0FBQ0k7QUFKVixLQUFQO0FBTUg7O0FBQ0RQLFFBQU0sQ0FBQ0MsS0FBUCxHQUFlQSxLQUFmOztBQUNBLFdBQVNRLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3RCQSxVQUFNLENBQUNSLElBQVAsR0FBY0MsTUFBTSxDQUFDQyxTQUFyQjtBQUNBTSxVQUFNLENBQUNMLElBQVAsR0FBY0YsTUFBTSxDQUFDQyxTQUFyQjtBQUNBTSxVQUFNLENBQUNKLElBQVAsR0FBY0gsTUFBTSxDQUFDSSxTQUFyQjtBQUNBRyxVQUFNLENBQUNGLElBQVAsR0FBY0wsTUFBTSxDQUFDSSxTQUFyQjtBQUNIOztBQUNEUCxRQUFNLENBQUNTLFFBQVAsR0FBa0JBLFFBQWxCOztBQUNBLFdBQVNFLE9BQVQsQ0FBaUJELE1BQWpCLEVBQXlCO0FBQ3JCLFdBQU9BLE1BQU0sQ0FBQ1IsSUFBUCxLQUFnQkMsTUFBTSxDQUFDQyxTQUF2QixJQUNBTSxNQUFNLENBQUNMLElBQVAsS0FBZ0JGLE1BQU0sQ0FBQ0MsU0FEdkIsSUFFQU0sTUFBTSxDQUFDSixJQUFQLEtBQWdCSCxNQUFNLENBQUNJLFNBRnZCLElBR0FHLE1BQU0sQ0FBQ0YsSUFBUCxLQUFnQkwsTUFBTSxDQUFDSSxTQUg5QjtBQUlIOztBQUNEUCxRQUFNLENBQUNXLE9BQVAsR0FBaUJBLE9BQWpCOztBQUNBLFdBQVNDLFdBQVQsQ0FBcUJGLE1BQXJCLEVBQTZCRyxTQUE3QixFQUF3QztBQUFBLFFBQzVCWCxJQUQ0QixHQUNBUSxNQURBLENBQzVCUixJQUQ0QjtBQUFBLFFBQ3RCRyxJQURzQixHQUNBSyxNQURBLENBQ3RCTCxJQURzQjtBQUFBLFFBQ2hCQyxJQURnQixHQUNBSSxNQURBLENBQ2hCSixJQURnQjtBQUFBLFFBQ1ZFLElBRFUsR0FDQUUsTUFEQSxDQUNWRixJQURVO0FBRXBDSyxhQUFTLENBQUNyTixDQUFWLEdBQWMwTSxJQUFkO0FBQ0FXLGFBQVMsQ0FBQ3BOLENBQVYsR0FBYzRNLElBQWQ7QUFDQVEsYUFBUyxDQUFDMUwsS0FBVixHQUFrQm1MLElBQUksR0FBR0osSUFBekI7QUFDQVcsYUFBUyxDQUFDekwsTUFBVixHQUFtQm9MLElBQUksR0FBR0gsSUFBMUI7QUFDSDs7QUFDREwsUUFBTSxDQUFDWSxXQUFQLEdBQXFCQSxXQUFyQjs7QUFDQSxXQUFTRSxLQUFULENBQWVKLE1BQWYsRUFBdUJsTixDQUF2QixFQUEwQjtBQUN0QixRQUFJa04sTUFBTSxDQUFDUixJQUFQLEdBQWMxTSxDQUFsQixFQUFxQjtBQUNqQmtOLFlBQU0sQ0FBQ1IsSUFBUCxHQUFjMU0sQ0FBZDtBQUNILEtBRkQsTUFHSyxJQUFJa04sTUFBTSxDQUFDSixJQUFQLEdBQWM5TSxDQUFsQixFQUFxQjtBQUN0QmtOLFlBQU0sQ0FBQ0osSUFBUCxHQUFjOU0sQ0FBZDtBQUNIO0FBQ0o7O0FBQ0R3TSxRQUFNLENBQUNjLEtBQVAsR0FBZUEsS0FBZjs7QUFDQSxXQUFTQyxLQUFULENBQWVMLE1BQWYsRUFBdUJqTixDQUF2QixFQUEwQjtBQUN0QixRQUFJaU4sTUFBTSxDQUFDTCxJQUFQLEdBQWM1TSxDQUFsQixFQUFxQjtBQUNqQmlOLFlBQU0sQ0FBQ0wsSUFBUCxHQUFjNU0sQ0FBZDtBQUNILEtBRkQsTUFHSyxJQUFJaU4sTUFBTSxDQUFDRixJQUFQLEdBQWMvTSxDQUFsQixFQUFxQjtBQUN0QmlOLFlBQU0sQ0FBQ0YsSUFBUCxHQUFjL00sQ0FBZDtBQUNIO0FBQ0o7O0FBQ0R1TSxRQUFNLENBQUNlLEtBQVAsR0FBZUEsS0FBZjs7QUFDQSxXQUFTQyxJQUFULENBQWNOLE1BQWQsRUFBc0JsTixDQUF0QixFQUF5QkMsQ0FBekIsRUFBNEI7QUFDeEIsUUFBSWlOLE1BQU0sQ0FBQ1IsSUFBUCxHQUFjMU0sQ0FBbEIsRUFBcUI7QUFDakJrTixZQUFNLENBQUNSLElBQVAsR0FBYzFNLENBQWQ7QUFDSCxLQUZELE1BR0ssSUFBSWtOLE1BQU0sQ0FBQ0osSUFBUCxHQUFjOU0sQ0FBbEIsRUFBcUI7QUFDdEJrTixZQUFNLENBQUNKLElBQVAsR0FBYzlNLENBQWQ7QUFDSDs7QUFDRCxRQUFJa04sTUFBTSxDQUFDTCxJQUFQLEdBQWM1TSxDQUFsQixFQUFxQjtBQUNqQmlOLFlBQU0sQ0FBQ0wsSUFBUCxHQUFjNU0sQ0FBZDtBQUNILEtBRkQsTUFHSyxJQUFJaU4sTUFBTSxDQUFDRixJQUFQLEdBQWMvTSxDQUFsQixFQUFxQjtBQUN0QmlOLFlBQU0sQ0FBQ0YsSUFBUCxHQUFjL00sQ0FBZDtBQUNIO0FBQ0o7O0FBQ0R1TSxRQUFNLENBQUNnQixJQUFQLEdBQWNBLElBQWQ7O0FBQ0EsV0FBU0MsU0FBVCxDQUFtQlAsTUFBbkIsRUFBMkJRLEtBQTNCLEVBQWtDO0FBQUEsUUFDdEIxTixDQURzQixHQUNiME4sS0FEYSxDQUN0QjFOLENBRHNCO0FBQUEsUUFDbkJDLENBRG1CLEdBQ2J5TixLQURhLENBQ25Cek4sQ0FEbUI7O0FBRTlCLFFBQUlpTixNQUFNLENBQUNSLElBQVAsR0FBYzFNLENBQWxCLEVBQXFCO0FBQ2pCa04sWUFBTSxDQUFDUixJQUFQLEdBQWMxTSxDQUFkO0FBQ0gsS0FGRCxNQUdLLElBQUlrTixNQUFNLENBQUNKLElBQVAsR0FBYzlNLENBQWxCLEVBQXFCO0FBQ3RCa04sWUFBTSxDQUFDSixJQUFQLEdBQWM5TSxDQUFkO0FBQ0g7O0FBQ0QsUUFBSWtOLE1BQU0sQ0FBQ0wsSUFBUCxHQUFjNU0sQ0FBbEIsRUFBcUI7QUFDakJpTixZQUFNLENBQUNMLElBQVAsR0FBYzVNLENBQWQ7QUFDSCxLQUZELE1BR0ssSUFBSWlOLE1BQU0sQ0FBQ0YsSUFBUCxHQUFjL00sQ0FBbEIsRUFBcUI7QUFDdEJpTixZQUFNLENBQUNGLElBQVAsR0FBYy9NLENBQWQ7QUFDSDtBQUNKOztBQUNEdU0sUUFBTSxDQUFDaUIsU0FBUCxHQUFtQkEsU0FBbkI7QUFDSCxDQWpGRCxFQWlGR2pCLE1BQU0sS0FBS0EsTUFBTSxHQUFHLEVBQWQsQ0FqRlQsRTs7Ozs7Ozs7Ozs7OztBQ0RPLElBQUkvTixjQUFKOztBQUNQLENBQUMsVUFBVUEsY0FBVixFQUEwQjtBQUN2QixXQUFTZ08sS0FBVCxHQUFpQjtBQUNiLFdBQU87QUFDSHpOLHFCQUFlLEVBQUUsQ0FEZDtBQUVITixtQkFBYSxFQUFFLENBRlo7QUFHSEUscUJBQWUsRUFBRSxDQUhkO0FBSUhFLG9CQUFjLEVBQUUsQ0FKYjtBQUtIRyxpQkFBVyxFQUFFLENBTFY7QUFNSE4sZUFBUyxFQUFFLENBTlI7QUFPSEUsaUJBQVcsRUFBRSxDQVBWO0FBUUhFLGdCQUFVLEVBQUU7QUFSVCxLQUFQO0FBVUg7O0FBQ0ROLGdCQUFjLENBQUNnTyxLQUFmLEdBQXVCQSxLQUF2Qjs7QUFDQSxXQUFTVSxPQUFULENBQWlCL08sRUFBakIsRUFBcUI7QUFDakIsV0FBT0EsRUFBRSxDQUFDTSxhQUFILEtBQXFCLENBQXJCLElBQ0FOLEVBQUUsQ0FBQ1EsZUFBSCxLQUF1QixDQUR2QixJQUVBUixFQUFFLENBQUNVLGNBQUgsS0FBc0IsQ0FGdEIsSUFHQVYsRUFBRSxDQUFDWSxlQUFILEtBQXVCLENBSHZCLElBSUFaLEVBQUUsQ0FBQ08sU0FBSCxLQUFpQixDQUpqQixJQUtBUCxFQUFFLENBQUNTLFdBQUgsS0FBbUIsQ0FMbkIsSUFNQVQsRUFBRSxDQUFDVyxVQUFILEtBQWtCLENBTmxCLElBT0FYLEVBQUUsQ0FBQ2EsV0FBSCxLQUFtQixDQVAxQjtBQVFIOztBQUNEUixnQkFBYyxDQUFDME8sT0FBZixHQUF5QkEsT0FBekI7O0FBQ0EsV0FBU1EsZ0JBQVQsQ0FBMEJ2UCxFQUExQixFQUE4QjtBQUMxQixXQUFPQSxFQUFFLENBQUNNLGFBQUgsS0FBcUIsQ0FBckIsSUFDQU4sRUFBRSxDQUFDUSxlQUFILEtBQXVCLENBRHZCLElBRUFSLEVBQUUsQ0FBQ1UsY0FBSCxLQUFzQixDQUZ0QixJQUdBVixFQUFFLENBQUNPLFNBQUgsS0FBaUIsQ0FIakIsSUFJQVAsRUFBRSxDQUFDUyxXQUFILEtBQW1CLENBSm5CLElBS0FULEVBQUUsQ0FBQ1csVUFBSCxLQUFrQixDQUxsQixJQU1BWCxFQUFFLENBQUNhLFdBQUgsS0FBbUIsQ0FOMUI7QUFPSDs7QUFDRFIsZ0JBQWMsQ0FBQ2tQLGdCQUFmLEdBQWtDQSxnQkFBbEM7O0FBQ0EsV0FBU1YsUUFBVCxDQUFrQjdPLEVBQWxCLEVBQXNCO0FBQ2xCQSxNQUFFLENBQUNNLGFBQUgsR0FBbUIsQ0FBbkI7QUFDQU4sTUFBRSxDQUFDUSxlQUFILEdBQXFCLENBQXJCO0FBQ0FSLE1BQUUsQ0FBQ1UsY0FBSCxHQUFvQixDQUFwQjtBQUNBVixNQUFFLENBQUNZLGVBQUgsR0FBcUIsQ0FBckI7QUFDQVosTUFBRSxDQUFDTyxTQUFILEdBQWUsQ0FBZjtBQUNBUCxNQUFFLENBQUNTLFdBQUgsR0FBaUIsQ0FBakI7QUFDQVQsTUFBRSxDQUFDVyxVQUFILEdBQWdCLENBQWhCO0FBQ0FYLE1BQUUsQ0FBQ2EsV0FBSCxHQUFpQixDQUFqQjtBQUNIOztBQUNEUixnQkFBYyxDQUFDd08sUUFBZixHQUEwQkEsUUFBMUI7O0FBQ0EsV0FBU1csSUFBVCxDQUFjQyxJQUFkLEVBQW9CQyxFQUFwQixFQUF3QjtBQUNwQkEsTUFBRSxDQUFDOU8sZUFBSCxHQUFxQjZPLElBQUksQ0FBQzdPLGVBQTFCO0FBQ0E4TyxNQUFFLENBQUNwUCxhQUFILEdBQW1CbVAsSUFBSSxDQUFDblAsYUFBeEI7QUFDQW9QLE1BQUUsQ0FBQ2xQLGVBQUgsR0FBcUJpUCxJQUFJLENBQUNqUCxlQUExQjtBQUNBa1AsTUFBRSxDQUFDaFAsY0FBSCxHQUFvQitPLElBQUksQ0FBQy9PLGNBQXpCO0FBQ0FnUCxNQUFFLENBQUM3TyxXQUFILEdBQWlCNE8sSUFBSSxDQUFDNU8sV0FBdEI7QUFDQTZPLE1BQUUsQ0FBQ25QLFNBQUgsR0FBZWtQLElBQUksQ0FBQ2xQLFNBQXBCO0FBQ0FtUCxNQUFFLENBQUNqUCxXQUFILEdBQWlCZ1AsSUFBSSxDQUFDaFAsV0FBdEI7QUFDQWlQLE1BQUUsQ0FBQy9PLFVBQUgsR0FBZ0I4TyxJQUFJLENBQUM5TyxVQUFyQjtBQUNIOztBQUNETixnQkFBYyxDQUFDbVAsSUFBZixHQUFzQkEsSUFBdEI7O0FBQ0EsV0FBU0csTUFBVCxDQUFnQkMsR0FBaEIsRUFBcUJDLEdBQXJCLEVBQTBCakssTUFBMUIsRUFBa0M7QUFDOUIsUUFBTWhGLGVBQWUsR0FBR2dQLEdBQUcsQ0FBQ2hQLGVBQUosR0FBc0JpUCxHQUFHLENBQUNqUCxlQUFsRDtBQUNBLFFBQU1OLGFBQWEsR0FBR3NQLEdBQUcsQ0FBQ3RQLGFBQUosR0FBb0J1UCxHQUFHLENBQUN2UCxhQUE5QztBQUNBLFFBQU1FLGVBQWUsR0FBR29QLEdBQUcsQ0FBQ3BQLGVBQUosR0FBc0JxUCxHQUFHLENBQUNyUCxlQUFsRDtBQUNBLFFBQU1FLGNBQWMsR0FBR2tQLEdBQUcsQ0FBQ2xQLGNBQUosR0FBcUJtUCxHQUFHLENBQUNuUCxjQUFoRDtBQUNBLFFBQU1HLFdBQVcsR0FBRytPLEdBQUcsQ0FBQ2hQLGVBQUosR0FBc0JpUCxHQUFHLENBQUNoUCxXQUExQixHQUF3Q2dQLEdBQUcsQ0FBQ2hQLFdBQWhFO0FBQ0EsUUFBTU4sU0FBUyxHQUFHcVAsR0FBRyxDQUFDdFAsYUFBSixHQUFvQnVQLEdBQUcsQ0FBQ3RQLFNBQXhCLEdBQW9Dc1AsR0FBRyxDQUFDdFAsU0FBMUQ7QUFDQSxRQUFNRSxXQUFXLEdBQUdtUCxHQUFHLENBQUNwUCxlQUFKLEdBQXNCcVAsR0FBRyxDQUFDcFAsV0FBMUIsR0FBd0NvUCxHQUFHLENBQUNwUCxXQUFoRTtBQUNBLFFBQU1FLFVBQVUsR0FBR2lQLEdBQUcsQ0FBQ2xQLGNBQUosR0FBcUJtUCxHQUFHLENBQUNsUCxVQUF6QixHQUFzQ2tQLEdBQUcsQ0FBQ2xQLFVBQTdEO0FBQ0FpRixVQUFNLENBQUNoRixlQUFQLEdBQXlCQSxlQUF6QjtBQUNBZ0YsVUFBTSxDQUFDdEYsYUFBUCxHQUF1QkEsYUFBdkI7QUFDQXNGLFVBQU0sQ0FBQ3BGLGVBQVAsR0FBeUJBLGVBQXpCO0FBQ0FvRixVQUFNLENBQUNsRixjQUFQLEdBQXdCQSxjQUF4QjtBQUNBa0YsVUFBTSxDQUFDL0UsV0FBUCxHQUFxQkEsV0FBckI7QUFDQStFLFVBQU0sQ0FBQ3JGLFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0FxRixVQUFNLENBQUNuRixXQUFQLEdBQXFCQSxXQUFyQjtBQUNBbUYsVUFBTSxDQUFDakYsVUFBUCxHQUFvQkEsVUFBcEI7QUFDSDs7QUFDRE4sZ0JBQWMsQ0FBQ3NQLE1BQWYsR0FBd0JBLE1BQXhCO0FBQ0gsQ0E1RUQsRUE0RUd0UCxjQUFjLEtBQUtBLGNBQWMsR0FBRyxFQUF0QixDQTVFakIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hPLElBQUl5QixNQUFKOztBQUNQLENBQUMsVUFBVUEsTUFBVixFQUFrQjtBQUNmLFdBQVN1TSxLQUFULEdBQWlCO0FBQ2IsV0FBTztBQUNIak8sT0FBQyxFQUFFLENBREE7QUFFSEQsT0FBQyxFQUFFLENBRkE7QUFHSHFKLE9BQUMsRUFBRSxDQUhBO0FBSUhDLE9BQUMsRUFBRSxDQUpBO0FBS0h6SCxRQUFFLEVBQUUsQ0FMRDtBQU1IQyxRQUFFLEVBQUU7QUFORCxLQUFQO0FBUUg7O0FBQ0RILFFBQU0sQ0FBQ3VNLEtBQVAsR0FBZUEsS0FBZjs7QUFDQSxXQUFTVSxPQUFULENBQWlCck4sTUFBakIsRUFBeUI7QUFDckIsV0FBT0EsTUFBTSxDQUFDdEIsQ0FBUCxLQUFhLENBQWIsSUFDQXNCLE1BQU0sQ0FBQ3ZCLENBQVAsS0FBYSxDQURiLElBRUF1QixNQUFNLENBQUM4SCxDQUFQLEtBQWEsQ0FGYixJQUdBOUgsTUFBTSxDQUFDK0gsQ0FBUCxLQUFhLENBSGIsSUFJQS9ILE1BQU0sQ0FBQ00sRUFBUCxLQUFjLENBSmQsSUFLQU4sTUFBTSxDQUFDTyxFQUFQLEtBQWMsQ0FMckI7QUFNSDs7QUFDREgsUUFBTSxDQUFDaU4sT0FBUCxHQUFpQkEsT0FBakI7O0FBQ0EsV0FBU0YsUUFBVCxDQUFrQm5OLE1BQWxCLEVBQTBCO0FBQ3RCQSxVQUFNLENBQUN0QixDQUFQLEdBQVcsQ0FBWDtBQUNBc0IsVUFBTSxDQUFDdkIsQ0FBUCxHQUFXLENBQVg7QUFDQXVCLFVBQU0sQ0FBQzhILENBQVAsR0FBVyxDQUFYO0FBQ0E5SCxVQUFNLENBQUMrSCxDQUFQLEdBQVcsQ0FBWDtBQUNBL0gsVUFBTSxDQUFDTSxFQUFQLEdBQVksQ0FBWjtBQUNBTixVQUFNLENBQUNPLEVBQVAsR0FBWSxDQUFaO0FBQ0g7O0FBQ0RILFFBQU0sQ0FBQytNLFFBQVAsR0FBa0JBLFFBQWxCOztBQUNBLFdBQVNXLElBQVQsQ0FBY0MsSUFBZCxFQUFvQkMsRUFBcEIsRUFBd0I7QUFDcEJBLE1BQUUsQ0FBQ3RQLENBQUgsR0FBT3FQLElBQUksQ0FBQ3JQLENBQVo7QUFDQXNQLE1BQUUsQ0FBQ3ZQLENBQUgsR0FBT3NQLElBQUksQ0FBQ3RQLENBQVo7QUFDQXVQLE1BQUUsQ0FBQ2xHLENBQUgsR0FBT2lHLElBQUksQ0FBQ2pHLENBQVo7QUFDQWtHLE1BQUUsQ0FBQ2pHLENBQUgsR0FBT2dHLElBQUksQ0FBQ2hHLENBQVo7QUFDQWlHLE1BQUUsQ0FBQzFOLEVBQUgsR0FBUXlOLElBQUksQ0FBQ3pOLEVBQWI7QUFDQTBOLE1BQUUsQ0FBQ3pOLEVBQUgsR0FBUXdOLElBQUksQ0FBQ3hOLEVBQWI7QUFDSDs7QUFDREgsUUFBTSxDQUFDME4sSUFBUCxHQUFjQSxJQUFkOztBQUNBLFdBQVNHLE1BQVQsQ0FBZ0JHLE9BQWhCLEVBQXlCQyxPQUF6QixFQUFrQ25LLE1BQWxDLEVBQTBDO0FBQ3RDLFFBQU14RixDQUFDLEdBQUcyUCxPQUFPLENBQUMzUCxDQUFSLEdBQVkwUCxPQUFPLENBQUMxUCxDQUFwQixHQUF3QjJQLE9BQU8sQ0FBQzVQLENBQVIsR0FBWTJQLE9BQU8sQ0FBQ3RHLENBQXREO0FBQ0EsUUFBTXJKLENBQUMsR0FBRzRQLE9BQU8sQ0FBQzNQLENBQVIsR0FBWTBQLE9BQU8sQ0FBQzNQLENBQXBCLEdBQXdCNFAsT0FBTyxDQUFDNVAsQ0FBUixHQUFZMlAsT0FBTyxDQUFDckcsQ0FBdEQ7QUFDQSxRQUFNRCxDQUFDLEdBQUd1RyxPQUFPLENBQUN2RyxDQUFSLEdBQVlzRyxPQUFPLENBQUMxUCxDQUFwQixHQUF3QjJQLE9BQU8sQ0FBQ3RHLENBQVIsR0FBWXFHLE9BQU8sQ0FBQ3RHLENBQXREO0FBQ0EsUUFBTUMsQ0FBQyxHQUFHc0csT0FBTyxDQUFDdkcsQ0FBUixHQUFZc0csT0FBTyxDQUFDM1AsQ0FBcEIsR0FBd0I0UCxPQUFPLENBQUN0RyxDQUFSLEdBQVlxRyxPQUFPLENBQUNyRyxDQUF0RDtBQUNBLFFBQU16SCxFQUFFLEdBQUcrTixPQUFPLENBQUMvTixFQUFSLEdBQWE4TixPQUFPLENBQUMxUCxDQUFyQixHQUF5QjJQLE9BQU8sQ0FBQzlOLEVBQVIsR0FBYTZOLE9BQU8sQ0FBQ3RHLENBQTlDLEdBQWtEc0csT0FBTyxDQUFDOU4sRUFBckU7QUFDQSxRQUFNQyxFQUFFLEdBQUc4TixPQUFPLENBQUMvTixFQUFSLEdBQWE4TixPQUFPLENBQUMzUCxDQUFyQixHQUF5QjRQLE9BQU8sQ0FBQzlOLEVBQVIsR0FBYTZOLE9BQU8sQ0FBQ3JHLENBQTlDLEdBQWtEcUcsT0FBTyxDQUFDN04sRUFBckU7QUFDQTJELFVBQU0sQ0FBQ3hGLENBQVAsR0FBV0EsQ0FBWDtBQUNBd0YsVUFBTSxDQUFDekYsQ0FBUCxHQUFXQSxDQUFYO0FBQ0F5RixVQUFNLENBQUM0RCxDQUFQLEdBQVdBLENBQVg7QUFDQTVELFVBQU0sQ0FBQzZELENBQVAsR0FBV0EsQ0FBWDtBQUNBN0QsVUFBTSxDQUFDNUQsRUFBUCxHQUFZQSxFQUFaO0FBQ0E0RCxVQUFNLENBQUMzRCxFQUFQLEdBQVlBLEVBQVo7QUFDSDs7QUFDREgsUUFBTSxDQUFDNk4sTUFBUCxHQUFnQkEsTUFBaEI7O0FBQ0EsV0FBU0ssY0FBVCxDQUF3QnRPLE1BQXhCLEVBQWdDO0FBQzVCLFdBQU9BLE1BQU0sQ0FBQ3RCLENBQVAsR0FBV3NCLE1BQU0sQ0FBQytILENBQWxCLEdBQXNCL0gsTUFBTSxDQUFDdkIsQ0FBUCxHQUFXdUIsTUFBTSxDQUFDOEgsQ0FBL0M7QUFDSDs7QUFDRDFILFFBQU0sQ0FBQ2tPLGNBQVAsR0FBd0JBLGNBQXhCOztBQUNBLFdBQVNDLE1BQVQsQ0FBZ0J2TyxNQUFoQixFQUF3QmtFLE1BQXhCLEVBQWdDO0FBQzVCLFFBQUlzSyxXQUFXLEdBQUdGLGNBQWMsQ0FBQ3RPLE1BQUQsQ0FBaEM7O0FBQ0EsUUFBSXdPLFdBQVcsS0FBSyxDQUFwQixFQUF1QjtBQUNuQnRLLFlBQU0sQ0FBQ3hGLENBQVAsR0FBVyxDQUFYO0FBQ0F3RixZQUFNLENBQUN6RixDQUFQLEdBQVcsQ0FBWDtBQUNBeUYsWUFBTSxDQUFDNEQsQ0FBUCxHQUFXLENBQVg7QUFDQTVELFlBQU0sQ0FBQzZELENBQVAsR0FBVyxDQUFYO0FBQ0E3RCxZQUFNLENBQUM1RCxFQUFQLEdBQVksQ0FBQ04sTUFBTSxDQUFDTSxFQUFwQjtBQUNBNEQsWUFBTSxDQUFDM0QsRUFBUCxHQUFZLENBQUNQLE1BQU0sQ0FBQ08sRUFBcEI7QUFDSCxLQVBELE1BUUs7QUFDRGlPLGlCQUFXLEdBQUcsTUFBTUEsV0FBcEI7QUFDQXRLLFlBQU0sQ0FBQ3hGLENBQVAsR0FBV3NCLE1BQU0sQ0FBQ3RCLENBQVAsR0FBVzhQLFdBQXRCO0FBQ0F0SyxZQUFNLENBQUN6RixDQUFQLEdBQVcsQ0FBQ3VCLE1BQU0sQ0FBQ3ZCLENBQVIsR0FBWStQLFdBQXZCO0FBQ0F0SyxZQUFNLENBQUM0RCxDQUFQLEdBQVcsQ0FBQzlILE1BQU0sQ0FBQzhILENBQVIsR0FBWTBHLFdBQXZCO0FBQ0F0SyxZQUFNLENBQUM2RCxDQUFQLEdBQVcvSCxNQUFNLENBQUMrSCxDQUFQLEdBQVd5RyxXQUF0QjtBQUNBdEssWUFBTSxDQUFDNUQsRUFBUCxHQUFZLENBQUM0RCxNQUFNLENBQUN4RixDQUFSLEdBQVlzQixNQUFNLENBQUNNLEVBQW5CLEdBQXdCNEQsTUFBTSxDQUFDNEQsQ0FBUCxHQUFXOUgsTUFBTSxDQUFDTyxFQUF0RDtBQUNBMkQsWUFBTSxDQUFDM0QsRUFBUCxHQUFZLENBQUMyRCxNQUFNLENBQUN6RixDQUFSLEdBQVl1QixNQUFNLENBQUNNLEVBQW5CLEdBQXdCNEQsTUFBTSxDQUFDNkQsQ0FBUCxHQUFXL0gsTUFBTSxDQUFDTyxFQUF0RDtBQUNIO0FBQ0o7O0FBQ0RILFFBQU0sQ0FBQ21PLE1BQVAsR0FBZ0JBLE1BQWhCOztBQUNBLFdBQVNFLGNBQVQsQ0FBd0J6TyxNQUF4QixFQUFnQzROLEtBQWhDLEVBQXVDMUosTUFBdkMsRUFBK0M7QUFBQSxRQUNuQ2hFLENBRG1DLEdBQzFCME4sS0FEMEIsQ0FDbkMxTixDQURtQztBQUFBLFFBQ2hDQyxDQURnQyxHQUMxQnlOLEtBRDBCLENBQ2hDek4sQ0FEZ0M7QUFFM0MrRCxVQUFNLENBQUNoRSxDQUFQLEdBQVdBLENBQUMsR0FBR0YsTUFBTSxDQUFDdEIsQ0FBWCxHQUFleUIsQ0FBQyxHQUFHSCxNQUFNLENBQUM4SCxDQUExQixHQUE4QjlILE1BQU0sQ0FBQ00sRUFBaEQ7QUFDQTRELFVBQU0sQ0FBQy9ELENBQVAsR0FBV0QsQ0FBQyxHQUFHRixNQUFNLENBQUN2QixDQUFYLEdBQWUwQixDQUFDLEdBQUdILE1BQU0sQ0FBQytILENBQTFCLEdBQThCL0gsTUFBTSxDQUFDTyxFQUFoRDtBQUNIOztBQUNESCxRQUFNLENBQUNxTyxjQUFQLEdBQXdCQSxjQUF4Qjs7QUFDQSxXQUFTQyxtQkFBVCxDQUE2QjFPLE1BQTdCLEVBQXFDNE4sS0FBckMsRUFBNEMxSixNQUE1QyxFQUFvRDtBQUFBLFFBQ3hDaEUsQ0FEd0MsR0FDL0IwTixLQUQrQixDQUN4QzFOLENBRHdDO0FBQUEsUUFDckNDLENBRHFDLEdBQy9CeU4sS0FEK0IsQ0FDckN6TixDQURxQztBQUVoRCtELFVBQU0sQ0FBQ2hFLENBQVAsR0FBV0EsQ0FBQyxHQUFHRixNQUFNLENBQUN0QixDQUFYLEdBQWV5QixDQUFDLEdBQUdILE1BQU0sQ0FBQzhILENBQXJDO0FBQ0E1RCxVQUFNLENBQUMvRCxDQUFQLEdBQVdELENBQUMsR0FBR0YsTUFBTSxDQUFDdkIsQ0FBWCxHQUFlMEIsQ0FBQyxHQUFHSCxNQUFNLENBQUMrSCxDQUFyQztBQUNIOztBQUNEM0gsUUFBTSxDQUFDc08sbUJBQVAsR0FBNkJBLG1CQUE3Qjs7QUFDQSxXQUFTQyxxQkFBVCxDQUErQjNPLE1BQS9CLEVBQXVDNE4sS0FBdkMsRUFBOEMxSixNQUE5QyxFQUFzRDtBQUNsRCxRQUFJc0ssV0FBVyxHQUFHRixjQUFjLENBQUN0TyxNQUFELENBQWhDOztBQUNBLFFBQUl3TyxXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFDbkJ0SyxZQUFNLENBQUNoRSxDQUFQLEdBQVcsQ0FBQ0YsTUFBTSxDQUFDTSxFQUFuQjtBQUNBNEQsWUFBTSxDQUFDL0QsQ0FBUCxHQUFXLENBQUNILE1BQU0sQ0FBQ08sRUFBbkI7QUFDSCxLQUhELE1BSUs7QUFDRGlPLGlCQUFXLEdBQUcsSUFBSUEsV0FBbEI7QUFEQyxVQUVPdE8sQ0FGUCxHQUVnQjBOLEtBRmhCLENBRU8xTixDQUZQO0FBQUEsVUFFVUMsQ0FGVixHQUVnQnlOLEtBRmhCLENBRVV6TixDQUZWO0FBR0QrRCxZQUFNLENBQUNoRSxDQUFQLEdBQVdzTyxXQUFXLElBQUl4TyxNQUFNLENBQUM4SCxDQUFQLElBQVk5SCxNQUFNLENBQUNPLEVBQVAsR0FBWUosQ0FBeEIsSUFBNkJILE1BQU0sQ0FBQytILENBQVAsSUFBWTdILENBQUMsR0FBR0YsTUFBTSxDQUFDTSxFQUF2QixDQUFqQyxDQUF0QjtBQUNBNEQsWUFBTSxDQUFDL0QsQ0FBUCxHQUFXcU8sV0FBVyxJQUFJeE8sTUFBTSxDQUFDdEIsQ0FBUCxJQUFZeUIsQ0FBQyxHQUFHSCxNQUFNLENBQUNPLEVBQXZCLElBQTZCUCxNQUFNLENBQUN2QixDQUFQLElBQVl1QixNQUFNLENBQUNNLEVBQVAsR0FBWUosQ0FBeEIsQ0FBakMsQ0FBdEI7QUFDSDtBQUNKOztBQUNERSxRQUFNLENBQUN1TyxxQkFBUCxHQUErQkEscUJBQS9COztBQUNBLFdBQVNDLGVBQVQsQ0FBeUI1TyxNQUF6QixFQUFpQ29OLE1BQWpDLEVBQXlDbEosTUFBekMsRUFBaUQ7QUFBQSxRQUNyQ3hGLENBRHFDLEdBQ2JzQixNQURhLENBQ3JDdEIsQ0FEcUM7QUFBQSxRQUNsQ0QsQ0FEa0MsR0FDYnVCLE1BRGEsQ0FDbEN2QixDQURrQztBQUFBLFFBQy9CcUosQ0FEK0IsR0FDYjlILE1BRGEsQ0FDL0I4SCxDQUQrQjtBQUFBLFFBQzVCQyxDQUQ0QixHQUNiL0gsTUFEYSxDQUM1QitILENBRDRCO0FBQUEsUUFDekJ6SCxFQUR5QixHQUNiTixNQURhLENBQ3pCTSxFQUR5QjtBQUFBLFFBQ3JCQyxFQURxQixHQUNiUCxNQURhLENBQ3JCTyxFQURxQjtBQUU3QyxRQUFNc08sRUFBRSxHQUFHekIsTUFBTSxDQUFDbE4sQ0FBbEI7QUFDQSxRQUFNNE8sRUFBRSxHQUFHMUIsTUFBTSxDQUFDak4sQ0FBbEI7QUFDQSxRQUFNNE8sRUFBRSxHQUFHRixFQUFFLEdBQUd6QixNQUFNLENBQUN2TCxLQUF2QjtBQUNBLFFBQU1tTixFQUFFLEdBQUdGLEVBQUUsR0FBRzFCLE1BQU0sQ0FBQ3RMLE1BQXZCO0FBQ0EsUUFBTW1OLEdBQUcsR0FBR0osRUFBRSxHQUFHblEsQ0FBTCxHQUFTb1EsRUFBRSxHQUFHaEgsQ0FBZCxHQUFrQnhILEVBQTlCO0FBQ0EsUUFBTTRPLEdBQUcsR0FBR0wsRUFBRSxHQUFHcFEsQ0FBTCxHQUFTcVEsRUFBRSxHQUFHL0csQ0FBZCxHQUFrQnhILEVBQTlCO0FBQ0EsUUFBTTRPLEdBQUcsR0FBR0osRUFBRSxHQUFHclEsQ0FBTCxHQUFTb1EsRUFBRSxHQUFHaEgsQ0FBZCxHQUFrQnhILEVBQTlCO0FBQ0EsUUFBTThPLEdBQUcsR0FBR0wsRUFBRSxHQUFHdFEsQ0FBTCxHQUFTcVEsRUFBRSxHQUFHL0csQ0FBZCxHQUFrQnhILEVBQTlCO0FBQ0EsUUFBTThPLEdBQUcsR0FBR04sRUFBRSxHQUFHclEsQ0FBTCxHQUFTc1EsRUFBRSxHQUFHbEgsQ0FBZCxHQUFrQnhILEVBQTlCO0FBQ0EsUUFBTWdQLEdBQUcsR0FBR1AsRUFBRSxHQUFHdFEsQ0FBTCxHQUFTdVEsRUFBRSxHQUFHakgsQ0FBZCxHQUFrQnhILEVBQTlCO0FBQ0EsUUFBTWdQLEdBQUcsR0FBR1YsRUFBRSxHQUFHblEsQ0FBTCxHQUFTc1EsRUFBRSxHQUFHbEgsQ0FBZCxHQUFrQnhILEVBQTlCO0FBQ0EsUUFBTWtQLEdBQUcsR0FBR1gsRUFBRSxHQUFHcFEsQ0FBTCxHQUFTdVEsRUFBRSxHQUFHakgsQ0FBZCxHQUFrQnhILEVBQTlCO0FBQ0EsUUFBSTBMLElBQUksR0FBR2dELEdBQVg7O0FBQ0EsUUFBSWhELElBQUksR0FBR2tELEdBQVgsRUFBZ0I7QUFDWmxELFVBQUksR0FBR2tELEdBQVA7QUFDSDs7QUFDRCxRQUFJbEQsSUFBSSxHQUFHb0QsR0FBWCxFQUFnQjtBQUNacEQsVUFBSSxHQUFHb0QsR0FBUDtBQUNIOztBQUNELFFBQUlwRCxJQUFJLEdBQUdzRCxHQUFYLEVBQWdCO0FBQ1p0RCxVQUFJLEdBQUdzRCxHQUFQO0FBQ0g7O0FBQ0QsUUFBSW5ELEdBQUcsR0FBRzhDLEdBQVY7O0FBQ0EsUUFBSTlDLEdBQUcsR0FBR2dELEdBQVYsRUFBZTtBQUNYaEQsU0FBRyxHQUFHZ0QsR0FBTjtBQUNIOztBQUNELFFBQUloRCxHQUFHLEdBQUdrRCxHQUFWLEVBQWU7QUFDWGxELFNBQUcsR0FBR2tELEdBQU47QUFDSDs7QUFDRCxRQUFJbEQsR0FBRyxHQUFHb0QsR0FBVixFQUFlO0FBQ1hwRCxTQUFHLEdBQUdvRCxHQUFOO0FBQ0g7O0FBQ0QsUUFBSUMsS0FBSyxHQUFHUixHQUFaOztBQUNBLFFBQUlRLEtBQUssR0FBR04sR0FBWixFQUFpQjtBQUNiTSxXQUFLLEdBQUdOLEdBQVI7QUFDSDs7QUFDRCxRQUFJTSxLQUFLLEdBQUdKLEdBQVosRUFBaUI7QUFDYkksV0FBSyxHQUFHSixHQUFSO0FBQ0g7O0FBQ0QsUUFBSUksS0FBSyxHQUFHRixHQUFaLEVBQWlCO0FBQ2JFLFdBQUssR0FBR0YsR0FBUjtBQUNIOztBQUNELFFBQUlHLE1BQU0sR0FBR1IsR0FBYjs7QUFDQSxRQUFJUSxNQUFNLEdBQUdOLEdBQWIsRUFBa0I7QUFDZE0sWUFBTSxHQUFHTixHQUFUO0FBQ0g7O0FBQ0QsUUFBSU0sTUFBTSxHQUFHSixHQUFiLEVBQWtCO0FBQ2RJLFlBQU0sR0FBR0osR0FBVDtBQUNIOztBQUNELFFBQUlJLE1BQU0sR0FBR0YsR0FBYixFQUFrQjtBQUNkRSxZQUFNLEdBQUdGLEdBQVQ7QUFDSDs7QUFDRHRMLFVBQU0sQ0FBQ2hFLENBQVAsR0FBVytMLElBQVg7QUFDQS9ILFVBQU0sQ0FBQy9ELENBQVAsR0FBV2lNLEdBQVg7QUFDQWxJLFVBQU0sQ0FBQ3JDLEtBQVAsR0FBZTROLEtBQUssR0FBR3hELElBQXZCO0FBQ0EvSCxVQUFNLENBQUNwQyxNQUFQLEdBQWdCNE4sTUFBTSxHQUFHdEQsR0FBekI7QUFDSDs7QUFDRGhNLFFBQU0sQ0FBQ3dPLGVBQVAsR0FBeUJBLGVBQXpCO0FBQ0gsQ0FyS0QsRUFxS0d4TyxNQUFNLEtBQUtBLE1BQU0sR0FBRyxFQUFkLENBcktULEU7Ozs7Ozs7Ozs7Ozs7QUNETyxJQUFJcEMsS0FBSjs7QUFDUCxDQUFDLFVBQVVBLEtBQVYsRUFBaUI7QUFDZCxXQUFTMk8sS0FBVCxHQUFpQjtBQUNiLFdBQU87QUFBRXpNLE9BQUMsRUFBRSxDQUFMO0FBQVFDLE9BQUMsRUFBRTtBQUFYLEtBQVA7QUFDSDs7QUFDRG5DLE9BQUssQ0FBQzJPLEtBQU4sR0FBY0EsS0FBZDs7QUFDQSxXQUFTaE4sTUFBVCxDQUFnQmlPLEtBQWhCLEVBQXVCO0FBQUEsUUFDWDFOLENBRFcsR0FDRjBOLEtBREUsQ0FDWDFOLENBRFc7QUFBQSxRQUNSQyxDQURRLEdBQ0Z5TixLQURFLENBQ1J6TixDQURRO0FBRW5CLFdBQU9LLElBQUksQ0FBQ21QLElBQUwsQ0FBVXpQLENBQUMsR0FBR0EsQ0FBSixHQUFRQyxDQUFDLEdBQUdBLENBQXRCLENBQVA7QUFDSDs7QUFDRG5DLE9BQUssQ0FBQzJCLE1BQU4sR0FBZUEsTUFBZjs7QUFDQSxXQUFTaVEsS0FBVCxDQUFlaEMsS0FBZixFQUFzQjtBQUNsQixXQUFPcE4sSUFBSSxDQUFDcVAsS0FBTCxDQUFXakMsS0FBSyxDQUFDek4sQ0FBakIsRUFBb0J5TixLQUFLLENBQUMxTixDQUExQixDQUFQO0FBQ0g7O0FBQ0RsQyxPQUFLLENBQUM0UixLQUFOLEdBQWNBLEtBQWQ7O0FBQ0EsV0FBU3ZDLE9BQVQsQ0FBaUJPLEtBQWpCLEVBQXdCO0FBQ3BCLFdBQU9BLEtBQUssQ0FBQzFOLENBQU4sS0FBWSxDQUFaLElBQWlCME4sS0FBSyxDQUFDek4sQ0FBTixLQUFZLENBQXBDO0FBQ0g7O0FBQ0RuQyxPQUFLLENBQUNxUCxPQUFOLEdBQWdCQSxPQUFoQjs7QUFDQSxXQUFTeUMsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0JoUyxNQUF4QixFQUFnQztBQUM1QixXQUFPZ1MsTUFBTSxDQUFDN1AsQ0FBUCxLQUFhbkMsTUFBTSxDQUFDbUMsQ0FBcEIsSUFBeUI2UCxNQUFNLENBQUM1UCxDQUFQLEtBQWFwQyxNQUFNLENBQUNvQyxDQUFwRDtBQUNIOztBQUNEbkMsT0FBSyxDQUFDOFIsTUFBTixHQUFlQSxNQUFmOztBQUNBLFdBQVMzQyxRQUFULENBQWtCUyxLQUFsQixFQUF5QjtBQUNyQkEsU0FBSyxDQUFDMU4sQ0FBTixHQUFVLENBQVY7QUFDQTBOLFNBQUssQ0FBQ3pOLENBQU4sR0FBVSxDQUFWO0FBQ0g7O0FBQ0RuQyxPQUFLLENBQUNtUCxRQUFOLEdBQWlCQSxRQUFqQjs7QUFDQSxXQUFTVyxJQUFULENBQWNrQyxNQUFkLEVBQXNCQyxNQUF0QixFQUE4QjtBQUMxQkEsVUFBTSxDQUFDL1AsQ0FBUCxHQUFXOFAsTUFBTSxDQUFDOVAsQ0FBbEI7QUFDQStQLFVBQU0sQ0FBQzlQLENBQVAsR0FBVzZQLE1BQU0sQ0FBQzdQLENBQWxCO0FBQ0g7O0FBQ0RuQyxPQUFLLENBQUM4UCxJQUFOLEdBQWFBLElBQWI7O0FBQ0EsV0FBU29DLFNBQVQsQ0FBbUJ0QyxLQUFuQixFQUEwQnVDLFNBQTFCLEVBQXFDO0FBQ2pDLFFBQUkzSCxLQUFLLEdBQUc3SSxNQUFNLENBQUNpTyxLQUFELENBQWxCOztBQUNBLFFBQUlwRixLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ1hBLFdBQUssR0FBRzJILFNBQVMsR0FBRzNILEtBQXBCO0FBQ0FvRixXQUFLLENBQUMxTixDQUFOLElBQVdzSSxLQUFYO0FBQ0FvRixXQUFLLENBQUN6TixDQUFOLElBQVdxSSxLQUFYO0FBQ0g7QUFDSjs7QUFDRHhLLE9BQUssQ0FBQ2tTLFNBQU4sR0FBa0JBLFNBQWxCOztBQUNBLFdBQVNFLFFBQVQsQ0FBa0JMLE1BQWxCLEVBQTBCaFMsTUFBMUIsRUFBa0M7QUFDOUIsUUFBTXNTLEVBQUUsR0FBR04sTUFBTSxDQUFDN1AsQ0FBUCxHQUFXbkMsTUFBTSxDQUFDbUMsQ0FBN0I7QUFDQSxRQUFNb1EsRUFBRSxHQUFHUCxNQUFNLENBQUM1UCxDQUFQLEdBQVdwQyxNQUFNLENBQUNvQyxDQUE3QjtBQUNBLFdBQU9LLElBQUksQ0FBQ21QLElBQUwsQ0FBVVUsRUFBRSxHQUFHQSxFQUFMLEdBQVVDLEVBQUUsR0FBR0EsRUFBekIsQ0FBUDtBQUNIOztBQUNEdFMsT0FBSyxDQUFDb1MsUUFBTixHQUFpQkEsUUFBakI7O0FBQ0EsV0FBU0csV0FBVCxDQUFxQmhHLEtBQXJCLEVBQTRCQyxHQUE1QixFQUFpQ2hDLEtBQWpDLEVBQXdDdEUsTUFBeEMsRUFBZ0Q7QUFDNUNBLFVBQU0sQ0FBQ2hFLENBQVAsR0FBV3FLLEtBQUssQ0FBQ3JLLENBQU4sR0FBVXNJLEtBQUssSUFBSWdDLEdBQUcsQ0FBQ3RLLENBQUosR0FBUXFLLEtBQUssQ0FBQ3JLLENBQWxCLENBQTFCO0FBQ0FnRSxVQUFNLENBQUMvRCxDQUFQLEdBQVdvSyxLQUFLLENBQUNwSyxDQUFOLEdBQVVxSSxLQUFLLElBQUlnQyxHQUFHLENBQUNySyxDQUFKLEdBQVFvSyxLQUFLLENBQUNwSyxDQUFsQixDQUExQjtBQUNIOztBQUNEbkMsT0FBSyxDQUFDdVMsV0FBTixHQUFvQkEsV0FBcEI7O0FBQ0EsV0FBU0MsS0FBVCxDQUFlNUMsS0FBZixFQUFzQmpPLE1BQXRCLEVBQThCaVEsS0FBOUIsRUFBcUM7QUFDakNoQyxTQUFLLENBQUMxTixDQUFOLEdBQVVQLE1BQU0sR0FBR2EsSUFBSSxDQUFDNEgsR0FBTCxDQUFTd0gsS0FBVCxDQUFuQjtBQUNBaEMsU0FBSyxDQUFDek4sQ0FBTixHQUFVUixNQUFNLEdBQUdhLElBQUksQ0FBQzZILEdBQUwsQ0FBU3VILEtBQVQsQ0FBbkI7QUFDSDs7QUFDRDVSLE9BQUssQ0FBQ3dTLEtBQU4sR0FBY0EsS0FBZDtBQUNILENBekRELEVBeURHeFMsS0FBSyxLQUFLQSxLQUFLLEdBQUcsRUFBYixDQXpEUixFOzs7Ozs7Ozs7Ozs7O0FDRE8sSUFBSXlTLFNBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxTQUFWLEVBQXFCO0FBQ2xCLFdBQVM5RCxLQUFULEdBQWlCO0FBQ2IsV0FBTztBQUNIek0sT0FBQyxFQUFFLENBREE7QUFDR0MsT0FBQyxFQUFFLENBRE47QUFDUzBCLFdBQUssRUFBRSxDQURoQjtBQUNtQkMsWUFBTSxFQUFFO0FBRDNCLEtBQVA7QUFHSDs7QUFDRDJPLFdBQVMsQ0FBQzlELEtBQVYsR0FBa0JBLEtBQWxCOztBQUNBLFdBQVNRLFFBQVQsQ0FBa0JJLFNBQWxCLEVBQTZCO0FBQ3pCQSxhQUFTLENBQUNyTixDQUFWLEdBQWMsQ0FBZDtBQUNBcU4sYUFBUyxDQUFDcE4sQ0FBVixHQUFjLENBQWQ7QUFDQW9OLGFBQVMsQ0FBQzFMLEtBQVYsR0FBa0IsQ0FBbEI7QUFDQTBMLGFBQVMsQ0FBQ3pMLE1BQVYsR0FBbUIsQ0FBbkI7QUFDSDs7QUFDRDJPLFdBQVMsQ0FBQ3RELFFBQVYsR0FBcUJBLFFBQXJCOztBQUNBLFdBQVNFLE9BQVQsQ0FBaUJFLFNBQWpCLEVBQTRCO0FBQ3hCLFdBQU9BLFNBQVMsQ0FBQzFMLEtBQVYsS0FBb0IsQ0FBcEIsSUFBeUIwTCxTQUFTLENBQUN6TCxNQUFWLEtBQXFCLENBQXJEO0FBQ0g7O0FBQ0QyTyxXQUFTLENBQUNwRCxPQUFWLEdBQW9CQSxPQUFwQjs7QUFDQSxXQUFTcUQsUUFBVCxDQUFrQm5ELFNBQWxCLEVBQTZCSyxLQUE3QixFQUFvQztBQUNoQyxXQUFPTCxTQUFTLENBQUNyTixDQUFWLEdBQWMwTixLQUFLLENBQUMxTixDQUFwQixJQUNBcU4sU0FBUyxDQUFDck4sQ0FBVixHQUFjcU4sU0FBUyxDQUFDMUwsS0FBeEIsR0FBZ0MrTCxLQUFLLENBQUMxTixDQUR0QyxJQUVBcU4sU0FBUyxDQUFDcE4sQ0FBVixHQUFjeU4sS0FBSyxDQUFDek4sQ0FGcEIsSUFHQW9OLFNBQVMsQ0FBQ3BOLENBQVYsR0FBY29OLFNBQVMsQ0FBQ3pMLE1BQXhCLEdBQWlDOEwsS0FBSyxDQUFDek4sQ0FIOUM7QUFJSDs7QUFDRHNRLFdBQVMsQ0FBQ0MsUUFBVixHQUFxQkEsUUFBckI7QUFDSCxDQXpCRCxFQXlCR0QsU0FBUyxLQUFLQSxTQUFTLEdBQUcsRUFBakIsQ0F6QlosRTs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBLElBQU1yRCxNQUFNLEdBQUdxRCxzREFBQSxFQUFmO0FBQ08sSUFBSUUseUJBQUo7O0FBQ1AsQ0FBQyxVQUFVQSx5QkFBVixFQUFxQztBQUNsQyxXQUFTcE4sTUFBVCxDQUFnQjFDLEtBQWhCLEVBQXVCWSxNQUF2QixFQUErQjtBQUFBLFFBQ25CbVAsR0FEbUIsR0FDWC9QLEtBRFcsQ0FDbkIrUCxHQURtQjs7QUFFM0IsUUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTjtBQUNIOztBQUNELFFBQU1oRyxRQUFRLEdBQUduSixNQUFNLENBQUN1RSxTQUFQLENBQWlCd0QsR0FBakIsQ0FBcUJvSCxHQUFyQixDQUFqQjs7QUFDQSxRQUFJLEVBQUNoRyxRQUFELGFBQUNBLFFBQUQsZUFBQ0EsUUFBUSxDQUFFL0osS0FBWCxDQUFKLEVBQXNCO0FBQ2xCO0FBQ0g7O0FBQ0QsUUFBTVosT0FBTyxHQUFHd0IsTUFBTSxDQUFDK0IsUUFBUCxDQUFnQm5DLFVBQWhCLEVBQWhCO0FBVDJCLFFBVW5CNUIsY0FWbUIsR0FVQVEsT0FWQSxDQVVuQlIsY0FWbUI7O0FBVzNCLFFBQUlBLGNBQWMsQ0FBQ1AsZUFBZixJQUFrQyxDQUF0QyxFQUF5QztBQUNyQztBQUNIOztBQWIwQixRQWNuQmMsTUFkbUIsR0FjUkMsT0FkUSxDQWNuQkQsTUFkbUI7QUFlM0IsUUFBTThGLFFBQVEsR0FBR3JFLE1BQU0sQ0FBQ3FFLFFBQXhCO0FBQ0EsUUFBTStLLFNBQVMsR0FBRy9LLFFBQVEsQ0FBQ3pFLFVBQVQsRUFBbEI7QUFoQjJCLDBCQWlCRHVKLFFBQVEsQ0FBQy9KLEtBakJSO0FBQUEsUUFpQm5CZ0IsS0FqQm1CLG1CQWlCbkJBLEtBakJtQjtBQUFBLFFBaUJaQyxNQWpCWSxtQkFpQlpBLE1BakJZO0FBa0IzQixRQUFNNUIsQ0FBQyxHQUFHbUcsaURBQUEsQ0FBV3hGLEtBQVgsRUFBa0JnQixLQUFsQixDQUFWO0FBQ0EsUUFBTTFCLENBQUMsR0FBR2tHLGlEQUFBLENBQVd4RixLQUFYLEVBQWtCaUIsTUFBbEIsQ0FBVjs7QUFDQSxRQUFJbkQsc0VBQUEsQ0FBZ0NjLGNBQWhDLENBQUosRUFBcUQ7QUFDakRvUixlQUFTLENBQUM1TyxZQUFWLENBQXVCakMsTUFBTSxDQUFDdEIsQ0FBOUIsRUFBaUNzQixNQUFNLENBQUN2QixDQUF4QyxFQUEyQ3VCLE1BQU0sQ0FBQzhILENBQWxELEVBQXFEOUgsTUFBTSxDQUFDK0gsQ0FBNUQsRUFBK0QvSCxNQUFNLENBQUNNLEVBQXRFLEVBQTBFTixNQUFNLENBQUNPLEVBQWpGO0FBQ0FzUSxlQUFTLENBQUNDLFdBQVYsR0FBd0JyUixjQUFjLENBQUNQLGVBQXZDO0FBQ0EyUixlQUFTLENBQUNFLFNBQVYsQ0FBb0JuRyxRQUFRLENBQUMvSixLQUE3QixFQUFvQ1gsQ0FBcEMsRUFBdUNDLENBQXZDO0FBQ0gsS0FKRCxNQUtLO0FBQ0QsVUFBTTZRLGFBQWEsR0FBR2xMLFFBQVEsQ0FBQ21MLG1CQUFULEVBQXRCO0FBQ0E3RCxZQUFNLENBQUNsTixDQUFQLEdBQVdBLENBQVg7QUFDQWtOLFlBQU0sQ0FBQ2pOLENBQVAsR0FBV0EsQ0FBWDtBQUNBaU4sWUFBTSxDQUFDdkwsS0FBUCxHQUFlQSxLQUFmO0FBQ0F1TCxZQUFNLENBQUN0TCxNQUFQLEdBQWdCQSxNQUFoQjtBQUNBMUIsbUVBQUEsQ0FBdUJKLE1BQXZCLEVBQStCb04sTUFBL0IsRUFBdUNBLE1BQXZDOztBQUNBLFVBQUlxRCx3REFBQSxDQUFrQnJELE1BQWxCLENBQUosRUFBK0I7QUFDM0I7QUFDSDs7QUFDRDRELG1CQUFhLENBQUM5TyxTQUFkLENBQXdCa0wsTUFBTSxDQUFDbE4sQ0FBL0IsRUFBa0NrTixNQUFNLENBQUNqTixDQUF6QyxFQUE0Q2lOLE1BQU0sQ0FBQ3ZMLEtBQW5ELEVBQTBEdUwsTUFBTSxDQUFDdEwsTUFBakU7QUFDQWtQLG1CQUFhLENBQUMvTyxZQUFkLENBQTJCakMsTUFBTSxDQUFDdEIsQ0FBbEMsRUFBcUNzQixNQUFNLENBQUN2QixDQUE1QyxFQUErQ3VCLE1BQU0sQ0FBQzhILENBQXRELEVBQXlEOUgsTUFBTSxDQUFDK0gsQ0FBaEUsRUFBbUUvSCxNQUFNLENBQUNNLEVBQTFFLEVBQThFTixNQUFNLENBQUNPLEVBQXJGO0FBQ0F5USxtQkFBYSxDQUFDRCxTQUFkLENBQXdCbkcsUUFBUSxDQUFDL0osS0FBakMsRUFBd0NYLENBQXhDLEVBQTJDQyxDQUEzQztBQUNBLFVBQU0rUSxTQUFTLEdBQUdGLGFBQWEsQ0FBQ0csWUFBZCxDQUEyQi9ELE1BQU0sQ0FBQ2xOLENBQWxDLEVBQXFDa04sTUFBTSxDQUFDak4sQ0FBNUMsRUFBK0NpTixNQUFNLENBQUN2TCxLQUF0RCxFQUE2RHVMLE1BQU0sQ0FBQ3RMLE1BQXBFLENBQWxCO0FBQ0EsVUFBTXNQLEVBQUUsR0FBRzNSLGNBQWMsQ0FBQ2IsYUFBMUI7QUFDQSxVQUFNeVMsRUFBRSxHQUFHNVIsY0FBYyxDQUFDWCxlQUExQjtBQUNBLFVBQU13UyxFQUFFLEdBQUc3UixjQUFjLENBQUNULGNBQTFCO0FBQ0EsVUFBTXVTLEVBQUUsR0FBRzlSLGNBQWMsQ0FBQ1AsZUFBMUI7QUFDQSxVQUFNc1MsRUFBRSxHQUFHL1IsY0FBYyxDQUFDWixTQUExQjtBQUNBLFVBQU00UyxFQUFFLEdBQUdoUyxjQUFjLENBQUNWLFdBQTFCO0FBQ0EsVUFBTTJTLEVBQUUsR0FBR2pTLGNBQWMsQ0FBQ1IsVUFBMUI7QUFDQSxVQUFNMFMsRUFBRSxHQUFHbFMsY0FBYyxDQUFDTixXQUExQjtBQXJCQyxVQXNCT3lTLElBdEJQLEdBc0JnQlYsU0F0QmhCLENBc0JPVSxJQXRCUDtBQUFBLFVBdUJPalMsTUF2QlAsR0F1QmtCaVMsSUF2QmxCLENBdUJPalMsTUF2QlA7O0FBd0JELFdBQUssSUFBSUQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0MsTUFBcEIsR0FBNkI7QUFDekJpUyxZQUFJLENBQUNsUyxDQUFELENBQUosR0FBVWtTLElBQUksQ0FBQ2xTLENBQUMsRUFBRixDQUFKLEdBQVkwUixFQUFaLEdBQWlCSSxFQUEzQjtBQUNBSSxZQUFJLENBQUNsUyxDQUFELENBQUosR0FBVWtTLElBQUksQ0FBQ2xTLENBQUMsRUFBRixDQUFKLEdBQVkyUixFQUFaLEdBQWlCSSxFQUEzQjtBQUNBRyxZQUFJLENBQUNsUyxDQUFELENBQUosR0FBVWtTLElBQUksQ0FBQ2xTLENBQUMsRUFBRixDQUFKLEdBQVk0UixFQUFaLEdBQWlCSSxFQUEzQjtBQUNBRSxZQUFJLENBQUNsUyxDQUFELENBQUosR0FBVWtTLElBQUksQ0FBQ2xTLENBQUMsRUFBRixDQUFKLEdBQVk2UixFQUFaLEdBQWlCSSxFQUEzQjtBQUNIOztBQUNEWCxtQkFBYSxDQUFDYSxZQUFkLENBQTJCWCxTQUEzQixFQUFzQzlELE1BQU0sQ0FBQ2xOLENBQTdDLEVBQWdEa04sTUFBTSxDQUFDak4sQ0FBdkQ7QUFDQTBRLGVBQVMsQ0FBQzVPLFlBQVY7QUFDQTRPLGVBQVMsQ0FBQ0MsV0FBVixHQUF3QixDQUF4QjtBQUNBRCxlQUFTLENBQUNFLFNBQVYsQ0FBb0JDLGFBQWEsQ0FBQ3BQLE1BQWxDLEVBQTBDd0wsTUFBTSxDQUFDbE4sQ0FBakQsRUFBb0RrTixNQUFNLENBQUNqTixDQUEzRCxFQUE4RGlOLE1BQU0sQ0FBQ3ZMLEtBQXJFLEVBQTRFdUwsTUFBTSxDQUFDdEwsTUFBbkYsRUFBMkZzTCxNQUFNLENBQUNsTixDQUFsRyxFQUFxR2tOLE1BQU0sQ0FBQ2pOLENBQTVHLEVBQStHaU4sTUFBTSxDQUFDdkwsS0FBdEgsRUFBNkh1TCxNQUFNLENBQUN0TCxNQUFwSTtBQUNBZ0UsY0FBUSxDQUFDZ00sb0JBQVQsQ0FBOEJkLGFBQTlCO0FBQ0g7QUFDSjs7QUFDREwsMkJBQXlCLENBQUNwTixNQUExQixHQUFtQ0EsTUFBbkM7O0FBQ0EsV0FBU2lCLElBQVQsQ0FBYy9DLE1BQWQsRUFBc0I7QUFDbEJzUSwyREFBQSxDQUFvQnRRLE1BQXBCO0FBQ0FBLFVBQU0sQ0FBQ2dELFVBQVAsQ0FBa0JsQixNQUFsQixDQUF5Qm1CLEdBQXpCLENBQTZCc04seUNBQTdCLEVBQW9Dek8sTUFBcEM7QUFDSDs7QUFDRG9OLDJCQUF5QixDQUFDbk0sSUFBMUIsR0FBaUNBLElBQWpDO0FBQ0gsQ0FyRUQsRUFxRUdtTSx5QkFBeUIsS0FBS0EseUJBQXlCLEdBQUcsRUFBakMsQ0FyRTVCLEU7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ08sSUFBSXNCLG9CQUFKOztBQUNQLENBQUMsVUFBVUEsb0JBQVYsRUFBZ0M7QUFDN0IsV0FBUzFPLE1BQVQsQ0FBZ0IxQyxLQUFoQixFQUF1QlksTUFBdkIsRUFBK0I7QUFBQSxRQUNuQm1QLEdBRG1CLEdBQ1gvUCxLQURXLENBQ25CK1AsR0FEbUI7O0FBRTNCLFFBQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ047QUFDSDs7QUFDRCxRQUFNaEcsUUFBUSxHQUFHbkosTUFBTSxDQUFDdUUsU0FBUCxDQUFpQndELEdBQWpCLENBQXFCb0gsR0FBckIsQ0FBakI7O0FBQ0EsUUFBSSxFQUFDaEcsUUFBRCxhQUFDQSxRQUFELGVBQUNBLFFBQVEsQ0FBRS9KLEtBQVgsQ0FBSixFQUFzQjtBQUNsQjtBQUNIOztBQUNELFFBQU1aLE9BQU8sR0FBR3dCLE1BQU0sQ0FBQytCLFFBQVAsQ0FBZ0JuQyxVQUFoQixFQUFoQjtBQVQyQixRQVVuQjVCLGNBVm1CLEdBVUFRLE9BVkEsQ0FVbkJSLGNBVm1COztBQVczQixRQUFJQSxjQUFjLENBQUNQLGVBQWYsSUFBa0MsQ0FBdEMsRUFBeUM7QUFDckM7QUFDSDs7QUFDRCxRQUFNMlIsU0FBUyxHQUFHcFAsTUFBTSxDQUFDcUUsUUFBUCxDQUFnQnpFLFVBQWhCLEVBQWxCO0FBZDJCLFFBZW5CckIsTUFmbUIsR0FlUkMsT0FmUSxDQWVuQkQsTUFmbUI7QUFnQjNCNlEsYUFBUyxDQUFDNU8sWUFBVixDQUF1QmpDLE1BQU0sQ0FBQ3RCLENBQTlCLEVBQWlDc0IsTUFBTSxDQUFDdkIsQ0FBeEMsRUFBMkN1QixNQUFNLENBQUM4SCxDQUFsRCxFQUFxRDlILE1BQU0sQ0FBQytILENBQTVELEVBQStEL0gsTUFBTSxDQUFDTSxFQUF0RSxFQUEwRU4sTUFBTSxDQUFDTyxFQUFqRjtBQWhCMkIsMEJBaUJEcUssUUFBUSxDQUFDL0osS0FqQlI7QUFBQSxRQWlCbkJnQixLQWpCbUIsbUJBaUJuQkEsS0FqQm1CO0FBQUEsUUFpQlpDLE1BakJZLG1CQWlCWkEsTUFqQlk7QUFrQjNCLFFBQU01QixDQUFDLEdBQUdtRyxpREFBQSxDQUFXeEYsS0FBWCxFQUFrQmdCLEtBQWxCLENBQVY7QUFDQSxRQUFNMUIsQ0FBQyxHQUFHa0csaURBQUEsQ0FBV3hGLEtBQVgsRUFBa0JpQixNQUFsQixDQUFWO0FBQ0ErTyxhQUFTLENBQUNDLFdBQVYsR0FBd0JyUixjQUFjLENBQUNQLGVBQXZDO0FBQ0EyUixhQUFTLENBQUNFLFNBQVYsQ0FBb0JuRyxRQUFRLENBQUMvSixLQUE3QixFQUFvQ1gsQ0FBcEMsRUFBdUNDLENBQXZDO0FBQ0g7O0FBQ0Q4UixzQkFBb0IsQ0FBQzFPLE1BQXJCLEdBQThCQSxNQUE5Qjs7QUFDQSxXQUFTaUIsSUFBVCxDQUFjL0MsTUFBZCxFQUFzQjtBQUNsQnNRLDJEQUFBLENBQW9CdFEsTUFBcEI7QUFDQUEsVUFBTSxDQUFDZ0QsVUFBUCxDQUFrQmxCLE1BQWxCLENBQXlCbUIsR0FBekIsQ0FBNkJzTix5Q0FBN0IsRUFBb0N6TyxNQUFwQztBQUNIOztBQUNEME8sc0JBQW9CLENBQUN6TixJQUFyQixHQUE0QkEsSUFBNUI7QUFDSCxDQTlCRCxFQThCR3lOLG9CQUFvQixLQUFLQSxvQkFBb0IsR0FBRyxFQUE1QixDQTlCdkIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ08sSUFBTUQsS0FBSyxHQUFHLE9BQWQ7QUFDQSxJQUFJRSxLQUFKOztBQUNQLENBQUMsVUFBVUEsS0FBVixFQUFpQjtBQUNkLFdBQVNDLGVBQVQsQ0FBeUJ0UixLQUF6QixFQUFnQ3VNLE1BQWhDLEVBQXdDM0wsTUFBeEMsRUFBZ0Q7QUFBQSxRQUNwQ21QLEdBRG9DLEdBQzVCL1AsS0FENEIsQ0FDcEMrUCxHQURvQzs7QUFFNUMsUUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTkgsK0RBQUEsQ0FBbUJyRCxNQUFuQjtBQUNBO0FBQ0g7O0FBQ0QsUUFBTXhDLFFBQVEsR0FBR25KLE1BQU0sQ0FBQ3VFLFNBQVAsQ0FBaUJ3RCxHQUFqQixDQUFxQm9ILEdBQXJCLENBQWpCOztBQUNBLFFBQUksRUFBQ2hHLFFBQUQsYUFBQ0EsUUFBRCxlQUFDQSxRQUFRLENBQUUvSixLQUFYLENBQUosRUFBc0I7QUFDbEI0UCwrREFBQSxDQUFtQnJELE1BQW5CO0FBQ0E7QUFDSDs7QUFWMkMsMEJBV2xCeEMsUUFBUSxDQUFDL0osS0FYUztBQUFBLFFBV3BDZ0IsS0FYb0MsbUJBV3BDQSxLQVhvQztBQUFBLFFBVzdCQyxNQVg2QixtQkFXN0JBLE1BWDZCO0FBWTVDLFFBQU01QixDQUFDLEdBQUdtRyxpREFBQSxDQUFXeEYsS0FBWCxFQUFrQmdCLEtBQWxCLENBQVY7QUFDQSxRQUFNMUIsQ0FBQyxHQUFHa0csaURBQUEsQ0FBV3hGLEtBQVgsRUFBa0JpQixNQUFsQixDQUFWO0FBQ0FzTCxVQUFNLENBQUNsTixDQUFQLEdBQVdBLENBQVg7QUFDQWtOLFVBQU0sQ0FBQ2pOLENBQVAsR0FBV0EsQ0FBWDtBQUNBaU4sVUFBTSxDQUFDdkwsS0FBUCxHQUFlQSxLQUFmO0FBQ0F1TCxVQUFNLENBQUN0TCxNQUFQLEdBQWdCQSxNQUFoQjtBQUNIOztBQUNEb1EsT0FBSyxDQUFDQyxlQUFOLEdBQXdCQSxlQUF4QjtBQUNILENBckJELEVBcUJHRCxLQUFLLEtBQUtBLEtBQUssR0FBRyxFQUFiLENBckJSOztBQXNCQSxJQUFNOUUsTUFBTSxHQUFHcUQsc0RBQUEsRUFBZjtBQUNPLElBQUlzQixjQUFKOztBQUNQLENBQUMsVUFBVUEsY0FBVixFQUEwQjtBQUN2QixXQUFTL04sT0FBVCxDQUFpQm5ELEtBQWpCLEVBQXdCWSxNQUF4QixFQUFnQztBQUFBLFFBQ3BCeUksS0FEb0IsR0FDVnpJLE1BQU0sQ0FBQ3dDLGFBREcsQ0FDcEJpRyxLQURvQjtBQUU1QmdJLFNBQUssQ0FBQ0MsZUFBTixDQUFzQnRSLEtBQXRCLEVBQTZCdU0sTUFBN0IsRUFBcUMzTCxNQUFyQztBQUNBLFdBQU9nUCx5REFBQSxDQUFtQnJELE1BQW5CLEVBQTJCbEQsS0FBM0IsQ0FBUDtBQUNIOztBQUNENkgsZ0JBQWMsQ0FBQy9OLE9BQWYsR0FBeUJBLE9BQXpCOztBQUNBLFdBQVNJLE1BQVQsQ0FBZ0J2RCxLQUFoQixFQUF1QlksTUFBdkIsRUFBK0I7QUFDM0IsUUFBTXhCLE9BQU8sR0FBR3dCLE1BQU0sQ0FBQzRDLE9BQVAsQ0FBZWhELFVBQWYsRUFBaEI7QUFEMkIsUUFFbkJ1UCxHQUZtQixHQUVYL1AsS0FGVyxDQUVuQitQLEdBRm1COztBQUczQixRQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNOM1EsYUFBTyxDQUFDcUUsUUFBUixHQUFtQixDQUFuQjtBQUNBckUsYUFBTyxDQUFDbUUsTUFBUixHQUFpQixJQUFqQjtBQUNBO0FBQ0g7O0FBQ0QsUUFBTXdHLFFBQVEsR0FBR25KLE1BQU0sQ0FBQ3VFLFNBQVAsQ0FBaUJ3RCxHQUFqQixDQUFxQm9ILEdBQXJCLENBQWpCOztBQUNBLFFBQUksRUFBQ2hHLFFBQUQsYUFBQ0EsUUFBRCxlQUFDQSxRQUFRLENBQUV4RyxNQUFYLEtBQXFCLEVBQUN3RyxRQUFELGFBQUNBLFFBQUQsZUFBQ0EsUUFBUSxDQUFFL0osS0FBWCxDQUF6QixFQUEyQztBQUN2Q1osYUFBTyxDQUFDcUUsUUFBUixHQUFtQixDQUFuQjtBQUNBckUsYUFBTyxDQUFDbUUsTUFBUixHQUFpQixLQUFqQjtBQUNILEtBSEQsTUFJSztBQUNEbkUsYUFBTyxDQUFDcUUsUUFBUixHQUFtQixDQUFuQjtBQUNBckUsYUFBTyxDQUFDbUUsTUFBUixHQUFpQixJQUFqQjtBQUNIO0FBQ0o7O0FBQ0QyTixnQkFBYyxDQUFDM04sTUFBZixHQUF3QkEsTUFBeEI7O0FBQ0EsV0FBU0ksSUFBVCxDQUFjL0MsTUFBZCxFQUFzQjtBQUNsQkEsVUFBTSxDQUFDZ0QsVUFBUCxDQUFrQlQsT0FBbEIsQ0FBMEJVLEdBQTFCLENBQThCc04sS0FBOUIsRUFBcUNoTyxPQUFyQztBQUNBdkMsVUFBTSxDQUFDZ0QsVUFBUCxDQUFrQkwsTUFBbEIsQ0FBeUJNLEdBQXpCLENBQTZCc04sS0FBN0IsRUFBb0M1TixNQUFwQztBQUNBZ08sa0VBQUEsQ0FBbUIzUSxNQUFuQjtBQUNIOztBQUNEc1EsZ0JBQWMsQ0FBQ3ZOLElBQWYsR0FBc0JBLElBQXRCO0FBQ0gsQ0FoQ0QsRUFnQ0d1TixjQUFjLEtBQUtBLGNBQWMsR0FBRyxFQUF0QixDQWhDakIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDRE8sSUFBSUssYUFBSjs7QUFDUCxDQUFDLFVBQVVBLGFBQVYsRUFBeUI7QUFDdEIsV0FBU3ZILE9BQVQsQ0FBaUJGLEtBQWpCLEVBQXdCbEosTUFBeEIsRUFBZ0M7QUFDNUIsUUFBTTRRLFNBQVMsR0FBRzFILEtBQUssQ0FBQzJILEtBQU4sQ0FBWSxHQUFaLEVBQWlCOVEsR0FBakIsRUFBbEI7O0FBQ0EsWUFBUTZRLFNBQVI7QUFDSSxXQUFLLEtBQUw7QUFDQSxXQUFLLEtBQUw7QUFDSSxZQUFNekgsUUFBUSxHQUFHO0FBQ2JELGVBQUssRUFBTEEsS0FEYTtBQUVidkcsZ0JBQU0sRUFBRSxLQUZLO0FBR2J2RCxlQUFLLEVBQUU7QUFITSxTQUFqQjtBQUtBLFlBQU1BLEtBQUssR0FBR0ssUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQU4sYUFBSyxDQUFDK1AsR0FBTixHQUFZakcsS0FBWjs7QUFDQTlKLGFBQUssQ0FBQzBSLE1BQU4sR0FBZSxZQUFNO0FBQ2pCcEosaUJBQU8sQ0FBQ0MsR0FBUix5QkFBNkJ1QixLQUE3QjtBQUNBQyxrQkFBUSxDQUFDL0osS0FBVCxHQUFpQkEsS0FBakI7QUFDQStKLGtCQUFRLENBQUN4RyxNQUFULEdBQWtCLElBQWxCO0FBQ0gsU0FKRDs7QUFLQXZELGFBQUssQ0FBQzJSLE9BQU4sR0FBZ0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ25CaFIsZ0JBQU0sQ0FBQ0MsS0FBUCxDQUFhQyxPQUFiLENBQXFCLGtCQUFyQixFQUF5QzhRLENBQXpDO0FBQ0gsU0FGRDs7QUFHQSxlQUFPN0gsUUFBUDs7QUFDSjtBQUNJO0FBcEJSOztBQXNCQSxXQUFPLElBQVA7QUFDSDs7QUFDRHdILGVBQWEsQ0FBQ3ZILE9BQWQsR0FBd0JBLE9BQXhCOztBQUNBLFdBQVNyRyxJQUFULENBQWMvQyxNQUFkLEVBQXNCO0FBQ2xCQSxVQUFNLENBQUN1RSxTQUFQLENBQWlCeUUsU0FBakIsQ0FBMkJpSSxHQUEzQixDQUErQjdILE9BQS9CO0FBQ0g7O0FBQ0R1SCxlQUFhLENBQUM1TixJQUFkLEdBQXFCQSxJQUFyQjtBQUNILENBaENELEVBZ0NHNE4sYUFBYSxLQUFLQSxhQUFhLEdBQUcsRUFBckIsQ0FoQ2hCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBLElBQU1PLElBQUksR0FBR25TLElBQUksQ0FBQ29TLEVBQUwsR0FBVSxDQUF2QjtBQUNPLFNBQVNDLFlBQVQsQ0FBc0JqQixJQUF0QixFQUE0QjNSLE9BQTVCLEVBQXFDO0FBQUEsZ0JBQ2dCMlIsSUFEaEIsQ0FDaEMxUixDQURnQztBQUFBLE1BQ2hDQSxDQURnQyx3QkFDNUIsQ0FENEI7QUFBQSxnQkFDZ0IwUixJQURoQixDQUN6QnpSLENBRHlCO0FBQUEsTUFDekJBLENBRHlCLHdCQUNyQixDQURxQjtBQUFBLHFCQUNnQnlSLElBRGhCLENBQ2xCa0IsTUFEa0I7QUFBQSxNQUNsQkEsTUFEa0IsNkJBQ1QsQ0FEUztBQUFBLE1BQ05DLE9BRE0sR0FDZ0JuQixJQURoQixDQUNObUIsT0FETTtBQUFBLE1BQ0dDLE9BREgsR0FDZ0JwQixJQURoQixDQUNHb0IsT0FESDtBQUV4QyxNQUFNbkUsRUFBRSxHQUFHa0UsT0FBSCxhQUFHQSxPQUFILGNBQUdBLE9BQUgsR0FBY0QsTUFBdEI7QUFDQSxNQUFNaEUsRUFBRSxHQUFHa0UsT0FBSCxhQUFHQSxPQUFILGNBQUdBLE9BQUgsR0FBY0YsTUFBdEI7O0FBQ0EsTUFBSWpFLEVBQUUsS0FBSyxDQUFQLElBQVlDLEVBQUUsS0FBSyxDQUF2QixFQUEwQjtBQUN0QixXQUFPLEtBQVA7QUFDSDs7QUFDRDdPLFNBQU8sQ0FBQ2dULFNBQVI7QUFDQWhULFNBQU8sQ0FBQ2lULE9BQVIsQ0FBZ0JoVCxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0IwTyxFQUF0QixFQUEwQkMsRUFBMUIsRUFBOEIsQ0FBOUIsRUFBaUMsQ0FBakMsRUFBb0M2RCxJQUFwQztBQUNBMVMsU0FBTyxDQUFDa1QsU0FBUjtBQUNBLFNBQU8sSUFBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7O0FDWk0sU0FBU0MsWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0JwVCxPQUEvQixFQUF3QztBQUFBOztBQUFBLE1BQ25Da0QsSUFEbUMsR0FDMUJrUSxPQUQwQixDQUNuQ2xRLElBRG1DOztBQUUzQyxVQUFRQSxJQUFSO0FBQ0ksU0FBSyxRQUFMO0FBQ0ksVUFBTW1RLE1BQU0sR0FBR0QsT0FBZjtBQUNBcFQsYUFBTyxDQUFDcVQsTUFBUixjQUFlQSxNQUFNLENBQUNwVCxDQUF0QixpREFBMkIsQ0FBM0IsZUFBOEJvVCxNQUFNLENBQUNuVCxDQUFyQyxpREFBMEMsQ0FBMUM7QUFDQTs7QUFDSixTQUFLLFFBQUw7QUFDSSxVQUFNb1QsTUFBTSxHQUFHRixPQUFmO0FBQ0FwVCxhQUFPLENBQUNzVCxNQUFSLGNBQWVBLE1BQU0sQ0FBQ3JULENBQXRCLGlEQUEyQixDQUEzQixlQUE4QnFULE1BQU0sQ0FBQ3BULENBQXJDLGlEQUEwQyxDQUExQztBQUNBOztBQUNKLFNBQUssU0FBTDtBQUNJLFVBQU1xVCxPQUFPLEdBQUdILE9BQWhCO0FBQ0FwVCxhQUFPLENBQUN3VCxnQkFBUixnQkFBeUJELE9BQU8sQ0FBQ0UsRUFBakMscURBQXVDLENBQXZDLGlCQUEwQ0YsT0FBTyxDQUFDRyxFQUFsRCxxREFBd0QsQ0FBeEQsZ0JBQTJESCxPQUFPLENBQUN0VCxDQUFuRSxtREFBd0UsQ0FBeEUsZ0JBQTJFc1QsT0FBTyxDQUFDclQsQ0FBbkYsbURBQXdGLENBQXhGO0FBQ0E7O0FBQ0osU0FBSyxjQUFMO0FBQ0ksVUFBTXlULFlBQVksR0FBR1AsT0FBckI7QUFDQXBULGFBQU8sQ0FBQzRULGFBQVIscUJBQXNCRCxZQUFZLENBQUNGLEVBQW5DLCtEQUF5QyxDQUF6QyxzQkFBNENFLFlBQVksQ0FBQ0QsRUFBekQsK0RBQStELENBQS9ELHNCQUFrRUMsWUFBWSxDQUFDRSxFQUEvRSwrREFBcUYsQ0FBckYsc0JBQXdGRixZQUFZLENBQUNHLEVBQXJHLCtEQUEyRyxDQUEzRyxxQkFBOEdILFlBQVksQ0FBQzFULENBQTNILDZEQUFnSSxDQUFoSSxxQkFBbUkwVCxZQUFZLENBQUN6VCxDQUFoSiw2REFBcUosQ0FBcko7QUFDQTs7QUFDSjtBQUNJO0FBbEJSO0FBb0JIO0FBQ00sU0FBUzZULFNBQVQsQ0FBbUJwQyxJQUFuQixFQUF5QjNSLE9BQXpCLEVBQWtDO0FBQ3JDLE1BQUksQ0FBQzJSLElBQUksQ0FBQ2pTLE1BQVYsRUFBa0I7QUFDZCxXQUFPLEtBQVA7QUFDSDs7QUFDRE0sU0FBTyxDQUFDZ1QsU0FBUjs7QUFDQSxPQUFLLElBQUl2VCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHa1MsSUFBSSxDQUFDalMsTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsUUFBTTJULE9BQU8sR0FBR3pCLElBQUksQ0FBQ2xTLENBQUQsQ0FBcEI7QUFDQTBULGdCQUFZLENBQUNDLE9BQUQsRUFBVXBULE9BQVYsQ0FBWjtBQUNIOztBQUNEQSxTQUFPLENBQUNrVCxTQUFSO0FBQ0EsU0FBTyxJQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQ2xDTSxTQUFTYyxjQUFULENBQXdCckMsSUFBeEIsRUFBOEIzUixPQUE5QixFQUF1QztBQUFBLGdCQUNPMlIsSUFEUCxDQUNsQzFSLENBRGtDO0FBQUEsTUFDbENBLENBRGtDLHdCQUM5QixDQUQ4QjtBQUFBLGdCQUNPMFIsSUFEUCxDQUMzQnpSLENBRDJCO0FBQUEsTUFDM0JBLENBRDJCLHdCQUN2QixDQUR1QjtBQUFBLG9CQUNPeVIsSUFEUCxDQUNwQi9QLEtBRG9CO0FBQUEsTUFDcEJBLEtBRG9CLDRCQUNaLENBRFk7QUFBQSxxQkFDTytQLElBRFAsQ0FDVDlQLE1BRFM7QUFBQSxNQUNUQSxNQURTLDZCQUNBLENBREE7O0FBRTFDLE1BQUlELEtBQUssS0FBSyxDQUFWLElBQWVDLE1BQU0sS0FBSyxDQUE5QixFQUFpQztBQUM3QixXQUFPLEtBQVA7QUFDSDs7QUFDRDdCLFNBQU8sQ0FBQ2dULFNBQVI7QUFDQWhULFNBQU8sQ0FBQ2lVLElBQVIsQ0FBYWhVLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CMEIsS0FBbkIsRUFBMEJDLE1BQTFCO0FBQ0E3QixTQUFPLENBQUNrVCxTQUFSO0FBQ0EsU0FBTyxJQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNURDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTS9GLE1BQU0sR0FBR3FELHNEQUFBLEVBQWY7QUFDQSxJQUFNMEQsTUFBTSxHQUFHblcsa0RBQUEsRUFBZjs7QUFDQSxTQUFTb1csY0FBVCxDQUF3QnhDLElBQXhCLEVBQThCblMsY0FBOUIsRUFBOENRLE9BQTlDLEVBQXVEd0IsTUFBdkQsRUFBK0Q7QUFBQSxNQUNuRDRTLElBRG1ELEdBQ2xDekMsSUFEa0MsQ0FDbkR5QyxJQURtRDtBQUFBLE1BQzdDQyxNQUQ2QyxHQUNsQzFDLElBRGtDLENBQzdDMEMsTUFENkM7QUFFM0QsTUFBTUMsT0FBTyxHQUFHLENBQUMsQ0FBQ0YsSUFBRixJQUFVQSxJQUFJLEtBQUssQ0FBbkM7QUFDQSxNQUFNRyxTQUFTLEdBQUcsQ0FBQyxDQUFDRixNQUFGLElBQVlBLE1BQU0sS0FBSyxDQUF6Qzs7QUFDQSxNQUFJLENBQUNDLE9BQUQsSUFBWSxDQUFDQyxTQUFqQixFQUE0QjtBQUN4QjtBQUNIOztBQUNELE1BQUlDLEtBQUssR0FBRyxJQUFaO0FBUDJELE1BUW5EdFIsSUFSbUQsR0FRMUN5TyxJQVIwQyxDQVFuRHpPLElBUm1EOztBQVMzRCxVQUFRQSxJQUFSO0FBQ0ksU0FBSyxXQUFMO0FBQ0lzUixXQUFLLEdBQUdSLDBEQUFjLENBQUNyQyxJQUFELEVBQU8zUixPQUFQLENBQXRCO0FBQ0E7O0FBQ0osU0FBSyxTQUFMO0FBQ0l3VSxXQUFLLEdBQUc1QixzREFBWSxDQUFDakIsSUFBRCxFQUFPM1IsT0FBUCxDQUFwQjtBQUNBOztBQUNKLFNBQUssTUFBTDtBQUNJLFVBQU15VSxJQUFJLEdBQUc5QyxJQUFiOztBQUNBLFVBQUksT0FBTzhDLElBQUksQ0FBQzlDLElBQVosS0FBcUIsUUFBekIsRUFBbUM7QUFDL0I2QyxhQUFLLEdBQUdFLG9EQUFXLENBQUNELElBQUksQ0FBQzlDLElBQU4sRUFBWTNSLE9BQVosQ0FBbkI7QUFDSCxPQUZELE1BR0ssSUFBSWdELEtBQUssQ0FBQ0MsT0FBTixDQUFjd1IsSUFBSSxDQUFDOUMsSUFBbkIsQ0FBSixFQUE4QjtBQUMvQjZDLGFBQUssR0FBR1QsZ0RBQVMsQ0FBQ1UsSUFBSSxDQUFDOUMsSUFBTixFQUFZM1IsT0FBWixDQUFqQjtBQUNILE9BRkksTUFHQTtBQUNEd1UsYUFBSyxHQUFHLEtBQVI7QUFDSDs7QUFDRDs7QUFDSjtBQUNJO0FBcEJSOztBQXNCQSxNQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNSO0FBQ0g7O0FBQ0QsTUFBSUYsT0FBSixFQUFhO0FBQ1RLLHdEQUFZLENBQUNQLElBQUQsRUFBTzVVLGNBQVAsRUFBdUJRLE9BQXZCLEVBQWdDd0IsTUFBaEMsQ0FBWjtBQUNBeEIsV0FBTyxDQUFDb1UsSUFBUjtBQUNIOztBQUNELE1BQUlHLFNBQUosRUFBZTtBQUNYSywwREFBYyxDQUFDUCxNQUFELEVBQVM3VSxjQUFULEVBQXlCUSxPQUF6QixFQUFrQ3dCLE1BQWxDLENBQWQ7QUFDQXhCLFdBQU8sQ0FBQ3FVLE1BQVI7QUFDSDtBQUNKOztBQUNNLElBQUlRLG9CQUFKOztBQUNQLENBQUMsVUFBVUEsb0JBQVYsRUFBZ0M7QUFDN0IsV0FBU3ZSLE1BQVQsQ0FBZ0J3UixLQUFoQixFQUF1QnRULE1BQXZCLEVBQStCO0FBQUEsUUFDbkJtUSxJQURtQixHQUNWbUQsS0FEVSxDQUNuQm5ELElBRG1COztBQUUzQixRQUFJLENBQUNBLElBQUwsRUFBVztBQUNQO0FBQ0g7O0FBQ0QsUUFBTTNSLE9BQU8sR0FBR3dCLE1BQU0sQ0FBQytCLFFBQVAsQ0FBZ0JuQyxVQUFoQixFQUFoQjtBQUwyQixRQU1uQjVCLGNBTm1CLEdBTUFRLE9BTkEsQ0FNbkJSLGNBTm1COztBQU8zQixRQUFJQSxjQUFjLENBQUNQLGVBQWYsSUFBa0MsQ0FBdEMsRUFBeUM7QUFDckM7QUFDSDs7QUFDRGxCLHlEQUFBLENBQWVtVyxNQUFmOztBQUNBLFFBQUk5TixzREFBQSxDQUFnQjBPLEtBQWhCLENBQUosRUFBNEI7QUFDeEJDLCtEQUFBLENBQXNCRCxLQUF0QixFQUE2QjNILE1BQTdCOztBQUNBLFVBQUlxRCx3REFBQSxDQUFrQnJELE1BQWxCLENBQUosRUFBK0I7QUFDM0I7QUFDSDs7QUFDRCtHLFlBQU0sQ0FBQ2pVLENBQVAsR0FBV21HLGlEQUFBLENBQVcwTyxLQUFYLEVBQWtCM0gsTUFBTSxDQUFDdkwsS0FBekIsQ0FBWDtBQUNBc1MsWUFBTSxDQUFDaFUsQ0FBUCxHQUFXa0csaURBQUEsQ0FBVzBPLEtBQVgsRUFBa0IzSCxNQUFNLENBQUN2TCxLQUF6QixDQUFYO0FBQ0g7O0FBQ0QsUUFBTWdQLFNBQVMsR0FBR3BQLE1BQU0sQ0FBQ3FFLFFBQVAsQ0FBZ0J6RSxVQUFoQixFQUFsQjtBQUNBd1AsYUFBUyxDQUFDQyxXQUFWLEdBQXdCLENBQXhCO0FBcEIyQixRQXFCbkI5USxNQXJCbUIsR0FxQlJDLE9BckJRLENBcUJuQkQsTUFyQm1COztBQXNCM0IsUUFBSWhDLG9EQUFBLENBQWNtVyxNQUFkLENBQUosRUFBMkI7QUFDdkIvVCx1RUFBQSxDQUEyQkosTUFBM0IsRUFBbUNtVSxNQUFuQyxFQUEyQ0EsTUFBM0M7QUFDSDs7QUFDRHRELGFBQVMsQ0FBQzVPLFlBQVYsQ0FBdUJqQyxNQUFNLENBQUN0QixDQUE5QixFQUFpQ3NCLE1BQU0sQ0FBQ3ZCLENBQXhDLEVBQTJDdUIsTUFBTSxDQUFDOEgsQ0FBbEQsRUFBcUQ5SCxNQUFNLENBQUMrSCxDQUE1RCxFQUErRC9ILE1BQU0sQ0FBQ00sRUFBUCxHQUFZNlQsTUFBTSxDQUFDalUsQ0FBbEYsRUFBcUZGLE1BQU0sQ0FBQ08sRUFBUCxHQUFZNFQsTUFBTSxDQUFDaFUsQ0FBeEc7O0FBQ0EsUUFBSThDLEtBQUssQ0FBQ0MsT0FBTixDQUFjME8sSUFBZCxDQUFKLEVBQXlCO0FBQ3JCLFdBQUssSUFBSWxTLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdrUyxJQUFJLENBQUNqUyxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQzBVLHNCQUFjLENBQUN4QyxJQUFJLENBQUNsUyxDQUFELENBQUwsRUFBVUQsY0FBVixFQUEwQm9SLFNBQTFCLEVBQXFDcFAsTUFBckMsQ0FBZDtBQUNIO0FBQ0osS0FKRCxNQUtLLElBQUksUUFBT21RLElBQVAsTUFBZ0IsUUFBcEIsRUFBOEI7QUFDL0J3QyxvQkFBYyxDQUFDeEMsSUFBRCxFQUFPblMsY0FBUCxFQUF1Qm9SLFNBQXZCLEVBQWtDcFAsTUFBbEMsQ0FBZDtBQUNIO0FBQ0o7O0FBQ0RxVCxzQkFBb0IsQ0FBQ3ZSLE1BQXJCLEdBQThCQSxNQUE5Qjs7QUFDQSxXQUFTaUIsSUFBVCxDQUFjL0MsTUFBZCxFQUFzQjtBQUNsQndULDJEQUFBLENBQW9CeFQsTUFBcEI7QUFDQUEsVUFBTSxDQUFDZ0QsVUFBUCxDQUFrQmxCLE1BQWxCLENBQXlCbUIsR0FBekIsQ0FBNkJ3USx5Q0FBN0IsRUFBb0MzUixNQUFwQztBQUNIOztBQUNEdVIsc0JBQW9CLENBQUN0USxJQUFyQixHQUE0QkEsSUFBNUI7QUFDSCxDQTFDRCxFQTBDR3NRLG9CQUFvQixLQUFLQSxvQkFBb0IsR0FBRyxFQUE1QixDQTFDdkIsRTs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFDQSxJQUFNSyxNQUFNLEdBQUcsSUFBSUMsOERBQUosRUFBZjtBQUNPLFNBQVNULFdBQVQsQ0FBcUIvQyxJQUFyQixFQUEyQjNSLE9BQTNCLEVBQW9DO0FBQ3ZDLE1BQUksQ0FBQzJSLElBQUksQ0FBQ2pTLE1BQVYsRUFBa0I7QUFDZCxXQUFPLEtBQVA7QUFDSDs7QUFDRE0sU0FBTyxDQUFDZ1QsU0FBUjtBQUNBa0MsUUFBTSxDQUFDRSxPQUFQLENBQWV6RCxJQUFmOztBQUNBLFNBQU91RCxNQUFNLENBQUNHLFFBQVAsRUFBUCxFQUEwQjtBQUN0QixRQUFNakMsT0FBTyxHQUFHOEIsTUFBTSxDQUFDSSxVQUFQLEVBQWhCOztBQUNBLFFBQUlsQyxPQUFKLEVBQWE7QUFDVEQseURBQVksQ0FBQ0MsT0FBRCxFQUFVcFQsT0FBVixDQUFaO0FBQ0g7QUFDSjs7QUFDREEsU0FBTyxDQUFDa1QsU0FBUjtBQUNBLFNBQU8sSUFBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCRDtBQUNBO0FBQ0EsSUFBTXFDLFdBQVcsR0FBR3BWLG1EQUFBLEVBQXBCO0FBQ0EsSUFBTXFWLFVBQVUsR0FBRyxFQUFuQjs7QUFDQSxTQUFTQyxnQkFBVCxDQUEwQnJCLElBQTFCLEVBQWdDNVUsY0FBaEMsRUFBZ0RRLE9BQWhELEVBQXlEd0IsTUFBekQsRUFBaUU7QUFBQTs7QUFDN0QsTUFBSSxPQUFPNFMsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUMxQixXQUFPblcsMkVBQUEsQ0FBNEJtVyxJQUE1QixFQUFrQyxDQUFsQyxFQUFxQzVVLGNBQXJDLENBQVA7QUFDSDs7QUFDRCxNQUFJLFFBQU80VSxJQUFQLE1BQWdCLFFBQXBCLEVBQThCO0FBQzFCLFlBQVFBLElBQUksQ0FBQ2xSLElBQWI7QUFDSSxXQUFLLE9BQUw7QUFDSSxZQUFNd1MsS0FBSyxHQUFHdEIsSUFBZDtBQUNBLGVBQU9uVywyRUFBQSxpQkFBNEJ5WCxLQUFLLENBQUN2WCxLQUFsQyx1REFBMkMsQ0FBM0Msa0JBQThDdVgsS0FBSyxDQUFDdFgsS0FBcEQsdURBQTZELENBQTdELEVBQWdFb0IsY0FBaEUsQ0FBUDs7QUFDSixXQUFLLFFBQUw7QUFBQSwyQkFDcUg0VSxJQURySCxDQUNZclUsTUFEWjtBQUFBLFlBQ29CNFYsRUFEcEIsNkJBQ3lCSixXQUR6QjtBQUFBLDJCQUNxSG5CLElBRHJILENBQ3NDL1UsTUFEdEM7QUFBQSxZQUM4Q3VXLEVBRDlDLDZCQUNtREosVUFEbkQ7QUFBQSwyQkFDcUhwQixJQURySCxDQUMrRDlVLE1BRC9EO0FBQUEsWUFDdUV1VyxFQUR2RSw2QkFDNEVMLFVBRDVFO0FBQUEsMkJBQ3FIcEIsSUFEckgsQ0FDd0Y3VSxNQUR4RjtBQUFBLFlBQ2dHdVcsRUFEaEcsNkJBQ3FHTixVQURyRztBQUVJLGVBQU92WCxvRkFBQSxDQUFxQzBYLEVBQXJDLEVBQXlDQyxFQUF6QyxFQUE2Q0MsRUFBN0MsRUFBaURDLEVBQWpELEVBQXFEdFcsY0FBckQsRUFBcUVRLE9BQXJFLENBQVA7O0FBQ0osV0FBSyxRQUFMO0FBQUEsNEJBQ3FIb1UsSUFEckgsQ0FDWXJVLE1BRFo7QUFBQSxZQUNvQmdXLEVBRHBCLDhCQUN5QlIsV0FEekI7QUFBQSw0QkFDcUhuQixJQURySCxDQUNzQy9VLE1BRHRDO0FBQUEsWUFDOEMyVyxFQUQ5Qyw4QkFDbURSLFVBRG5EO0FBQUEsNEJBQ3FIcEIsSUFEckgsQ0FDK0Q5VSxNQUQvRDtBQUFBLFlBQ3VFMlcsRUFEdkUsOEJBQzRFVCxVQUQ1RTtBQUFBLDRCQUNxSHBCLElBRHJILENBQ3dGN1UsTUFEeEY7QUFBQSxZQUNnR3VQLEVBRGhHLDhCQUNxRzBHLFVBRHJHO0FBRUksZUFBT3ZYLG9GQUFBLENBQXFDOFgsRUFBckMsRUFBeUNDLEVBQXpDLEVBQTZDQyxFQUE3QyxFQUFpRG5ILEVBQWpELEVBQXFEdFAsY0FBckQsRUFBcUVRLE9BQXJFLENBQVA7O0FBQ0osV0FBSyxRQUFMO0FBQ0ksWUFBTWtXLFVBQVUsR0FBRzlCLElBQW5CO0FBREosaUNBRW1DOEIsVUFGbkMsQ0FFWXJWLE1BRlo7QUFBQSxZQUVZQSxNQUZaLG1DQUVxQixJQUZyQjtBQUFBLFlBRTJCOFAsR0FGM0IsR0FFbUN1RixVQUZuQyxDQUUyQnZGLEdBRjNCOztBQUdJLFlBQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04saUJBQU8sRUFBUDtBQUNIOztBQUNELFlBQU1oRyxRQUFRLEdBQUduSixNQUFNLENBQUN1RSxTQUFQLENBQWlCd0QsR0FBakIsQ0FBcUJvSCxHQUFyQixDQUFqQjs7QUFDQSxZQUFJaEcsUUFBSixhQUFJQSxRQUFKLGVBQUlBLFFBQVEsQ0FBRS9KLEtBQWQsRUFBcUI7QUFDakIsaUJBQU8zQyw0RUFBQSxDQUE2QjBNLFFBQVEsQ0FBQy9KLEtBQXRDLEVBQTZDQyxNQUE3QyxFQUFxRGIsT0FBckQsQ0FBUDtBQUNIOztBQUNELGVBQU8sRUFBUDs7QUFDSjtBQUNJLGVBQU8sRUFBUDtBQXRCUjtBQXdCSDs7QUFDRCxTQUFPLEVBQVA7QUFDSDs7QUFDTSxTQUFTMlUsWUFBVCxDQUFzQlAsSUFBdEIsRUFBNEI1VSxjQUE1QixFQUE0Q1EsT0FBNUMsRUFBcUR3QixNQUFyRCxFQUE2RDtBQUNoRXhCLFNBQU8sQ0FBQ21XLFNBQVIsR0FBb0JWLGdCQUFnQixDQUFDckIsSUFBRCxFQUFPNVUsY0FBUCxFQUF1QlEsT0FBdkIsRUFBZ0N3QixNQUFoQyxDQUFwQztBQUNIO0FBQ00sU0FBU29ULGNBQVQsQ0FBd0JQLE1BQXhCLEVBQWdDN1UsY0FBaEMsRUFBZ0RRLE9BQWhELEVBQXlEd0IsTUFBekQsRUFBaUU7QUFDcEUsTUFBSSxPQUFPNlMsTUFBUCxLQUFrQixRQUF0QixFQUFnQztBQUM1QnJVLFdBQU8sQ0FBQ29XLFdBQVIsR0FBc0JuWSwyRUFBQSxDQUE0Qm9XLE1BQTVCLEVBQW9DLENBQXBDLEVBQXVDN1UsY0FBdkMsQ0FBdEI7QUFDQVEsV0FBTyxDQUFDcVcsU0FBUixHQUFvQixDQUFwQjtBQUNBclcsV0FBTyxDQUFDc1csT0FBUixHQUFrQixPQUFsQjtBQUNBdFcsV0FBTyxDQUFDdVcsUUFBUixHQUFtQixPQUFuQjtBQUNBdlcsV0FBTyxDQUFDd1csVUFBUixHQUFxQixFQUFyQjtBQUNILEdBTkQsTUFPSyxJQUFJLFFBQU9uQyxNQUFQLE1BQWtCLFFBQWxCLElBQThCQSxNQUFNLENBQUNELElBQVAsS0FBZ0JxQyxTQUFsRCxFQUE2RDtBQUFBOztBQUM5RHpXLFdBQU8sQ0FBQ29XLFdBQVIsR0FBc0JYLGdCQUFnQixDQUFDcEIsTUFBTSxDQUFDRCxJQUFSLEVBQWM1VSxjQUFkLEVBQThCUSxPQUE5QixFQUF1Q3dCLE1BQXZDLENBQXRDO0FBQ0F4QixXQUFPLENBQUNxVyxTQUFSLHdCQUFvQmhDLE1BQU0sQ0FBQ25FLFNBQTNCLGlFQUF3QyxDQUF4QztBQUNBbFEsV0FBTyxDQUFDc1csT0FBUixtQkFBa0JqQyxNQUFNLENBQUNxQyxJQUF6Qix1REFBaUMsT0FBakM7QUFDQTFXLFdBQU8sQ0FBQ3VXLFFBQVIscUJBQW1CbEMsTUFBTSxDQUFDc0MsTUFBMUIsMkRBQW9DLE9BQXBDO0FBQ0EzVyxXQUFPLENBQUN3VyxVQUFSLHlCQUFxQm5DLE1BQU0sQ0FBQ21DLFVBQTVCLG1FQUEwQyxFQUExQztBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REQ7QUFDQTtBQUNBO0FBQ08sSUFBSUksYUFBSjs7QUFDUCxDQUFDLFVBQVVBLGFBQVYsRUFBeUI7QUFDdEIsV0FBUzFFLGVBQVQsQ0FBeUJQLElBQXpCLEVBQStCeEUsTUFBL0IsRUFBdUM7QUFBQSxrQkFDY3dFLElBRGQsQ0FDM0IxUixDQUQyQjtBQUFBLFFBQzNCQSxDQUQyQix3QkFDdkIsQ0FEdUI7QUFBQSxrQkFDYzBSLElBRGQsQ0FDcEJ6UixDQURvQjtBQUFBLFFBQ3BCQSxDQURvQix3QkFDaEIsQ0FEZ0I7QUFBQSxzQkFDY3lSLElBRGQsQ0FDYi9QLEtBRGE7QUFBQSxRQUNiQSxLQURhLDRCQUNMLENBREs7QUFBQSx1QkFDYytQLElBRGQsQ0FDRjlQLE1BREU7QUFBQSxRQUNGQSxNQURFLDZCQUNPLENBRFA7QUFFbkM0SyxzREFBQSxDQUFZVSxNQUFaLEVBQW9CbE4sQ0FBcEIsRUFBdUJDLENBQXZCO0FBQ0F1TSxzREFBQSxDQUFZVSxNQUFaLEVBQW9CbE4sQ0FBQyxHQUFHMkIsS0FBeEIsRUFBK0IxQixDQUFDLEdBQUcyQixNQUFuQztBQUNIOztBQUNEK1UsZUFBYSxDQUFDMUUsZUFBZCxHQUFnQ0EsZUFBaEM7QUFDSCxDQVBELEVBT0cwRSxhQUFhLEtBQUtBLGFBQWEsR0FBRyxFQUFyQixDQVBoQjs7QUFRTyxJQUFJQyxXQUFKOztBQUNQLENBQUMsVUFBVUEsV0FBVixFQUF1QjtBQUNwQixXQUFTM0UsZUFBVCxDQUF5QlAsSUFBekIsRUFBK0J4RSxNQUEvQixFQUF1QztBQUFBLG1CQUNxQndFLElBRHJCLENBQzNCMVIsQ0FEMkI7QUFBQSxRQUMzQkEsQ0FEMkIseUJBQ3ZCLENBRHVCO0FBQUEsbUJBQ3FCMFIsSUFEckIsQ0FDcEJ6UixDQURvQjtBQUFBLFFBQ3BCQSxDQURvQix5QkFDaEIsQ0FEZ0I7QUFBQSx1QkFDcUJ5UixJQURyQixDQUNia0IsTUFEYTtBQUFBLFFBQ2JBLE1BRGEsNkJBQ0osQ0FESTtBQUFBLFFBQ0RDLE9BREMsR0FDcUJuQixJQURyQixDQUNEbUIsT0FEQztBQUFBLFFBQ1FDLE9BRFIsR0FDcUJwQixJQURyQixDQUNRb0IsT0FEUjtBQUVuQyxRQUFNbkUsRUFBRSxHQUFHa0UsT0FBSCxhQUFHQSxPQUFILGNBQUdBLE9BQUgsR0FBY0QsTUFBdEI7QUFDQSxRQUFNaEUsRUFBRSxHQUFHa0UsT0FBSCxhQUFHQSxPQUFILGNBQUdBLE9BQUgsR0FBY0YsTUFBdEI7QUFDQXBHLHNEQUFBLENBQVlVLE1BQVosRUFBb0JsTixDQUFDLEdBQUcyTyxFQUF4QixFQUE0QjFPLENBQUMsR0FBRzJPLEVBQWhDO0FBQ0FwQyxzREFBQSxDQUFZVSxNQUFaLEVBQW9CbE4sQ0FBQyxHQUFHMk8sRUFBeEIsRUFBNEIxTyxDQUFDLEdBQUcyTyxFQUFoQztBQUNIOztBQUNEZ0ksYUFBVyxDQUFDM0UsZUFBWixHQUE4QkEsZUFBOUI7QUFDSCxDQVRELEVBU0cyRSxXQUFXLEtBQUtBLFdBQVcsR0FBRyxFQUFuQixDQVRkOztBQVVPLElBQUlDLFFBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxRQUFWLEVBQW9CO0FBQ2pCLFdBQVM1RSxlQUFULENBQXlCNkUsUUFBekIsRUFBbUM1SixNQUFuQyxFQUEyQztBQUFBLFFBQy9Cd0UsSUFEK0IsR0FDdEJvRixRQURzQixDQUMvQnBGLElBRCtCOztBQUV2QyxRQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDMUJxRix5RUFBQSxDQUErQnJGLElBQS9CLEVBQXFDeEUsTUFBckM7QUFDSCxLQUZELE1BR0ssSUFBSW5LLEtBQUssQ0FBQ0MsT0FBTixDQUFjME8sSUFBZCxDQUFKLEVBQXlCO0FBQzFCLFdBQUssSUFBSWxTLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdrUyxJQUFJLENBQUNqUyxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxZQUFNMlQsT0FBTyxHQUFHekIsSUFBSSxDQUFDbFMsQ0FBRCxDQUFwQjtBQUNBd1gsc0VBQUEsQ0FBNEI3RCxPQUE1QixFQUFxQ2pHLE1BQXJDO0FBQ0g7QUFDSjtBQUNKOztBQUNEMkosVUFBUSxDQUFDNUUsZUFBVCxHQUEyQkEsZUFBM0I7QUFDSCxDQWRELEVBY0c0RSxRQUFRLEtBQUtBLFFBQVEsR0FBRyxFQUFoQixDQWRYOztBQWVPLElBQUlJLFlBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxZQUFWLEVBQXdCO0FBQ3JCLFdBQVNoRixlQUFULENBQXlCUCxJQUF6QixFQUErQnhFLE1BQS9CLEVBQXVDO0FBQUEsUUFDM0JqSyxJQUQyQixHQUNsQnlPLElBRGtCLENBQzNCek8sSUFEMkI7O0FBRW5DLFlBQVFBLElBQVI7QUFDSSxXQUFLLFdBQUw7QUFDSTBULHFCQUFhLENBQUMxRSxlQUFkLENBQThCUCxJQUE5QixFQUFvQ3hFLE1BQXBDO0FBQ0E7O0FBQ0osV0FBSyxTQUFMO0FBQ0kwSixtQkFBVyxDQUFDM0UsZUFBWixDQUE0QlAsSUFBNUIsRUFBa0N4RSxNQUFsQztBQUNBOztBQUNKLFdBQUssTUFBTDtBQUNJMkosZ0JBQVEsQ0FBQzVFLGVBQVQsQ0FBeUJQLElBQXpCLEVBQStCeEUsTUFBL0I7QUFDQTs7QUFDSjtBQUNJO0FBWFI7QUFhSDs7QUFDRCtKLGNBQVksQ0FBQ2hGLGVBQWIsR0FBK0JBLGVBQS9CO0FBQ0gsQ0FsQkQsRUFrQkdnRixZQUFZLEtBQUtBLFlBQVksR0FBRyxFQUFwQixDQWxCZixFOzs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNPLElBQUlELFdBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxXQUFWLEVBQXVCO0FBQ3BCLFdBQVMvRSxlQUFULENBQXlCdUMsSUFBekIsRUFBK0J0SCxNQUEvQixFQUF1QztBQUFBOztBQUFBLFFBQzNCakssSUFEMkIsR0FDbEJ1UixJQURrQixDQUMzQnZSLElBRDJCOztBQUVuQyxZQUFRQSxJQUFSO0FBQ0ksV0FBSyxRQUFMO0FBQ0EsV0FBSyxRQUFMO0FBQ0ksWUFBTW1RLE1BQU0sR0FBR29CLElBQWY7QUFDQWhJLDBEQUFBLENBQVlVLE1BQVosZUFBb0JrRyxNQUFNLENBQUNwVCxDQUEzQixpREFBZ0MsQ0FBaEMsZUFBbUNvVCxNQUFNLENBQUNuVCxDQUExQyxpREFBK0MsQ0FBL0M7QUFDQTs7QUFDSixXQUFLLFNBQUw7QUFDSSxZQUFNcVQsT0FBTyxHQUFHa0IsSUFBaEI7QUFDQWhJLDBEQUFBLENBQVlVLE1BQVosaUJBQW9Cb0csT0FBTyxDQUFDRSxFQUE1QixxREFBa0MsQ0FBbEMsaUJBQXFDRixPQUFPLENBQUNHLEVBQTdDLHFEQUFtRCxDQUFuRDtBQUNBakgsMERBQUEsQ0FBWVUsTUFBWixnQkFBb0JvRyxPQUFPLENBQUN0VCxDQUE1QixtREFBaUMsQ0FBakMsZ0JBQW9Dc1QsT0FBTyxDQUFDclQsQ0FBNUMsbURBQWlELENBQWpEO0FBQ0E7O0FBQ0osV0FBSyxjQUFMO0FBQ0ksWUFBTXlULFlBQVksR0FBR2MsSUFBckI7QUFDQWhJLDBEQUFBLENBQVlVLE1BQVosc0JBQW9Cd0csWUFBWSxDQUFDRixFQUFqQywrREFBdUMsQ0FBdkMsc0JBQTBDRSxZQUFZLENBQUNELEVBQXZELCtEQUE2RCxDQUE3RDtBQUNBakgsMERBQUEsQ0FBWVUsTUFBWixzQkFBb0J3RyxZQUFZLENBQUNFLEVBQWpDLCtEQUF1QyxDQUF2QyxzQkFBMENGLFlBQVksQ0FBQ0csRUFBdkQsK0RBQTZELENBQTdEO0FBQ0FySCwwREFBQSxDQUFZVSxNQUFaLHFCQUFvQndHLFlBQVksQ0FBQzFULENBQWpDLDZEQUFzQyxDQUF0QyxxQkFBeUMwVCxZQUFZLENBQUN6VCxDQUF0RCw2REFBMkQsQ0FBM0Q7QUFDQTs7QUFDSjtBQUNJO0FBbEJSO0FBb0JIOztBQUNEK1csYUFBVyxDQUFDL0UsZUFBWixHQUE4QkEsZUFBOUI7QUFDSCxDQXpCRCxFQXlCRytFLFdBQVcsS0FBS0EsV0FBVyxHQUFHLEVBQW5CLENBekJkLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBLElBQU1FLGFBQWEsR0FBRztBQUNsQkMsR0FBQyxFQUFFLENBRGU7QUFFbEJDLEdBQUMsRUFBRSxDQUZlO0FBR2xCQyxHQUFDLEVBQUUsQ0FIZTtBQUlsQkMsR0FBQyxFQUFFLENBSmU7QUFLbEJDLEdBQUMsRUFBRSxDQUxlO0FBTWxCQyxHQUFDLEVBQUUsQ0FOZTtBQU9sQkMsR0FBQyxFQUFFLENBUGU7QUFRbEJDLEdBQUMsRUFBRSxDQVJlO0FBU2xCQyxHQUFDLEVBQUUsQ0FUZTtBQVVsQi9QLEdBQUMsRUFBRSxDQVZlO0FBV2xCZ1EsR0FBQyxFQUFFLENBWGU7QUFZbEJDLEdBQUMsRUFBRSxDQVplO0FBYWxCQyxHQUFDLEVBQUUsQ0FiZTtBQWNsQkMsR0FBQyxFQUFFLENBZGU7QUFlbEJDLEdBQUMsRUFBRSxDQWZlO0FBZ0JsQkMsR0FBQyxFQUFFO0FBaEJlLENBQXRCO0FBa0JPLElBQU1DLG9CQUFiO0FBQ0ksa0NBQWM7QUFBQTs7QUFDVixTQUFLMUQsSUFBTCxHQUFZLEVBQVo7QUFDQSxTQUFLckIsT0FBTCxHQUFlLElBQWY7QUFDQSxTQUFLZ0YsTUFBTCxHQUFjLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBZDtBQUNBLFNBQUtDLFlBQUwsR0FBb0IscUJBQXBCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixjQUFuQjtBQUNIOztBQVBMO0FBQUE7QUFBQSxXQVFJLGlCQUFRN0QsSUFBUixFQUFjO0FBQ1YsV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsV0FBSzRELFlBQUwsQ0FBa0JFLFNBQWxCLEdBQThCLENBQTlCO0FBQ0g7QUFYTDtBQUFBO0FBQUEsV0FZSSxzQkFBYTtBQUNULGFBQU8sS0FBS25GLE9BQVo7QUFDSDtBQWRMO0FBQUE7QUFBQSxXQWVJLHFCQUFZO0FBQ1IsYUFBTyxLQUFLZ0YsTUFBWjtBQUNIO0FBakJMO0FBQUE7QUFBQSxXQWtCSSxvQkFBVztBQUNQLFVBQU1JLFlBQVksR0FBRyxLQUFLSCxZQUFMLENBQWtCSSxJQUFsQixDQUF1QixLQUFLaEUsSUFBNUIsQ0FBckI7O0FBQ0EsVUFBSStELFlBQUosRUFBa0I7QUFDZCxhQUFLcEYsT0FBTCxHQUFlb0YsWUFBWSxDQUFDLENBQUQsQ0FBM0I7QUFDQSxZQUFNbFAsS0FBSyxHQUFHNk4sYUFBYSxDQUFDLEtBQUsvRCxPQUFOLENBQTNCO0FBQ0EsYUFBS2tGLFdBQUwsQ0FBaUJDLFNBQWpCLEdBQTZCQyxZQUFZLENBQUNFLEtBQTFDOztBQUNBLGFBQUssSUFBSWpaLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc2SixLQUFwQixFQUEyQjdKLENBQUMsRUFBNUIsRUFBZ0M7QUFDNUIsY0FBTWtaLFdBQVcsR0FBRyxLQUFLTCxXQUFMLENBQWlCRyxJQUFqQixDQUFzQixLQUFLaEUsSUFBM0IsQ0FBcEI7O0FBQ0EsY0FBSWtFLFdBQUosRUFBaUI7QUFDYixpQkFBS1AsTUFBTCxDQUFZM1ksQ0FBWixJQUFpQm1aLFVBQVUsQ0FBQ0QsV0FBVyxDQUFDLENBQUQsQ0FBWixDQUEzQjtBQUNILFdBRkQsTUFHSztBQUNEO0FBQ0g7QUFDSjtBQUNKLE9BYkQsTUFjSztBQUNELGFBQUt2RixPQUFMLEdBQWUsSUFBZjtBQUNIO0FBQ0o7QUFyQ0w7O0FBQUE7QUFBQTtBQXVDTyxJQUFNK0Isb0JBQWI7QUFDSSxrQ0FBYztBQUFBOztBQUNWLFNBQUswRCxNQUFMLEdBQWMsSUFBSVYsb0JBQUosRUFBZDtBQUNBLFNBQUsvRSxPQUFMLEdBQWU7QUFBRWxRLFVBQUksRUFBRTtBQUFSLEtBQWY7QUFDQSxTQUFLNFYsYUFBTCxHQUFxQixLQUFyQjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0g7O0FBVEw7QUFBQTtBQUFBLFdBVUksaUJBQVF6RSxJQUFSLEVBQWM7QUFDVixXQUFLb0UsTUFBTCxDQUFZekQsT0FBWixDQUFvQlgsSUFBcEI7QUFDQSxXQUFLc0UsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxXQUFLSixhQUFMLEdBQXFCLEtBQXJCO0FBQ0g7QUFqQkw7QUFBQTtBQUFBLFdBa0JJLHNCQUFhO0FBQ1QsYUFBTyxLQUFLQSxhQUFMLEdBQXFCLEtBQUsxRixPQUExQixHQUFvQyxJQUEzQztBQUNIO0FBcEJMO0FBQUE7QUFBQSxXQXFCSSxvQkFBVztBQUNQLFdBQUt5RixNQUFMLENBQVl4RCxRQUFaO0FBQ0EsV0FBSzhELEtBQUw7QUFDQSxhQUFPLEtBQUtMLGFBQVo7QUFDSDtBQXpCTDtBQUFBO0FBQUEsV0EwQkksaUJBQVE7QUFDSixVQUFNMUYsT0FBTyxHQUFHLEtBQUt5RixNQUFMLENBQVl2RCxVQUFaLEVBQWhCO0FBQ0EsV0FBS3dELGFBQUwsR0FBcUIsQ0FBQyxDQUFDMUYsT0FBdkI7O0FBQ0EsVUFBSSxDQUFDLEtBQUswRixhQUFWLEVBQXlCO0FBQ3JCO0FBQ0g7O0FBQ0QsVUFBTVYsTUFBTSxHQUFHLEtBQUtTLE1BQUwsQ0FBWU8sU0FBWixFQUFmOztBQU5JLG1DQU84QmhCLE1BUDlCO0FBQUEsVUFPR2lCLEVBUEg7QUFBQSxVQU9PQyxFQVBQO0FBQUEsVUFPV0MsRUFQWDtBQUFBLFVBT2VDLEVBUGY7QUFBQSxVQU9tQkMsRUFQbkI7QUFBQSxVQU91QkMsRUFQdkI7O0FBUUosY0FBUXRHLE9BQVI7QUFDSSxhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLQSxPQUFMLENBQWFsUSxJQUFiLEdBQW9CLFFBQXBCO0FBQ0EsZ0JBQU1tUSxNQUFNLEdBQUcsS0FBS0QsT0FBcEI7QUFDQUMsa0JBQU0sQ0FBQ3BULENBQVAsR0FBV29aLEVBQVg7QUFDQWhHLGtCQUFNLENBQUNuVCxDQUFQLEdBQVdvWixFQUFYO0FBQ0EsaUJBQUtQLEtBQUwsR0FBYTFGLE1BQU0sQ0FBQ3BULENBQXBCO0FBQ0EsaUJBQUsrWSxLQUFMLEdBQWEzRixNQUFNLENBQUNuVCxDQUFwQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS2tULE9BQUwsQ0FBYWxRLElBQWIsR0FBb0IsUUFBcEI7QUFDQSxnQkFBTW1RLE9BQU0sR0FBRyxLQUFLRCxPQUFwQjtBQUNBQyxtQkFBTSxDQUFDcFQsQ0FBUCxHQUFXb1osRUFBRSxHQUFHLEtBQUtOLEtBQXJCO0FBQ0ExRixtQkFBTSxDQUFDblQsQ0FBUCxHQUFXb1osRUFBRSxHQUFHLEtBQUtOLEtBQXJCO0FBQ0EsaUJBQUtELEtBQUwsR0FBYTFGLE9BQU0sQ0FBQ3BULENBQXBCO0FBQ0EsaUJBQUsrWSxLQUFMLEdBQWEzRixPQUFNLENBQUNuVCxDQUFwQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS2tULE9BQUwsQ0FBYWxRLElBQWIsR0FBb0IsUUFBcEI7QUFDQSxnQkFBTW9RLE1BQU0sR0FBRyxLQUFLRixPQUFwQjtBQUNBRSxrQkFBTSxDQUFDclQsQ0FBUCxHQUFXb1osRUFBWDtBQUNBL0Ysa0JBQU0sQ0FBQ3BULENBQVAsR0FBV29aLEVBQVg7QUFDQSxpQkFBS1AsS0FBTCxHQUFhekYsTUFBTSxDQUFDclQsQ0FBcEI7QUFDQSxpQkFBSytZLEtBQUwsR0FBYTFGLE1BQU0sQ0FBQ3BULENBQXBCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLa1QsT0FBTCxDQUFhbFEsSUFBYixHQUFvQixRQUFwQjtBQUNBLGdCQUFNb1EsT0FBTSxHQUFHLEtBQUtGLE9BQXBCO0FBQ0FFLG1CQUFNLENBQUNyVCxDQUFQLEdBQVdvWixFQUFFLEdBQUcsS0FBS04sS0FBckI7QUFDQXpGLG1CQUFNLENBQUNwVCxDQUFQLEdBQVdvWixFQUFFLEdBQUcsS0FBS04sS0FBckI7QUFDQSxpQkFBS0QsS0FBTCxHQUFhekYsT0FBTSxDQUFDclQsQ0FBcEI7QUFDQSxpQkFBSytZLEtBQUwsR0FBYTFGLE9BQU0sQ0FBQ3BULENBQXBCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLa1QsT0FBTCxDQUFhbFEsSUFBYixHQUFvQixRQUFwQjtBQUNBLGdCQUFNb1EsUUFBTSxHQUFHLEtBQUtGLE9BQXBCO0FBQ0FFLG9CQUFNLENBQUNyVCxDQUFQLEdBQVdvWixFQUFYO0FBQ0EvRixvQkFBTSxDQUFDcFQsQ0FBUCxHQUFXLEtBQUs4WSxLQUFoQjtBQUNBLGlCQUFLRCxLQUFMLEdBQWF6RixRQUFNLENBQUNyVCxDQUFwQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS21ULE9BQUwsQ0FBYWxRLElBQWIsR0FBb0IsUUFBcEI7QUFDQSxnQkFBTW9RLFFBQU0sR0FBRyxLQUFLRixPQUFwQjtBQUNBRSxvQkFBTSxDQUFDclQsQ0FBUCxHQUFXb1osRUFBRSxHQUFHLEtBQUtOLEtBQXJCO0FBQ0F6RixvQkFBTSxDQUFDcFQsQ0FBUCxHQUFXLEtBQUs4WSxLQUFoQjtBQUNBLGlCQUFLRCxLQUFMLEdBQWF6RixRQUFNLENBQUNyVCxDQUFwQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS21ULE9BQUwsQ0FBYWxRLElBQWIsR0FBb0IsUUFBcEI7QUFDQSxnQkFBTW9RLFFBQU0sR0FBRyxLQUFLRixPQUFwQjtBQUNBRSxvQkFBTSxDQUFDclQsQ0FBUCxHQUFXLEtBQUs4WSxLQUFoQjtBQUNBekYsb0JBQU0sQ0FBQ3BULENBQVAsR0FBV21aLEVBQVg7QUFDQSxpQkFBS0wsS0FBTCxHQUFhMUYsUUFBTSxDQUFDcFQsQ0FBcEI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUtrVCxPQUFMLENBQWFsUSxJQUFiLEdBQW9CLFFBQXBCO0FBQ0EsZ0JBQU1vUSxRQUFNLEdBQUcsS0FBS0YsT0FBcEI7QUFDQUUsb0JBQU0sQ0FBQ3JULENBQVAsR0FBVyxLQUFLOFksS0FBaEI7QUFDQXpGLG9CQUFNLENBQUNwVCxDQUFQLEdBQVdtWixFQUFFLEdBQUcsS0FBS0wsS0FBckI7QUFDQSxpQkFBS0EsS0FBTCxHQUFhMUYsUUFBTSxDQUFDcFQsQ0FBcEI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUtrVCxPQUFMLENBQWFsUSxJQUFiLEdBQW9CLGNBQXBCO0FBQ0EsZ0JBQU15USxZQUFZLEdBQUcsS0FBS1AsT0FBMUI7QUFDQU8sd0JBQVksQ0FBQ0YsRUFBYixHQUFrQjRGLEVBQWxCO0FBQ0ExRix3QkFBWSxDQUFDRCxFQUFiLEdBQWtCNEYsRUFBbEI7QUFDQTNGLHdCQUFZLENBQUNFLEVBQWIsR0FBa0IwRixFQUFsQjtBQUNBNUYsd0JBQVksQ0FBQ0csRUFBYixHQUFrQjBGLEVBQWxCO0FBQ0E3Rix3QkFBWSxDQUFDMVQsQ0FBYixHQUFpQndaLEVBQWpCO0FBQ0E5Rix3QkFBWSxDQUFDelQsQ0FBYixHQUFpQndaLEVBQWpCO0FBQ0EsaUJBQUtULE1BQUwsR0FBY3RGLFlBQVksQ0FBQzFULENBQWIsSUFBa0IwVCxZQUFZLENBQUNFLEVBQWIsR0FBa0JGLFlBQVksQ0FBQzFULENBQWpELENBQWQ7QUFDQSxpQkFBS2laLE1BQUwsR0FBY3ZGLFlBQVksQ0FBQ3pULENBQWIsSUFBa0J5VCxZQUFZLENBQUNHLEVBQWIsR0FBa0JILFlBQVksQ0FBQ3pULENBQWpELENBQWQ7QUFDQSxpQkFBSzZZLEtBQUwsR0FBYXBGLFlBQVksQ0FBQzFULENBQTFCO0FBQ0EsaUJBQUsrWSxLQUFMLEdBQWFyRixZQUFZLENBQUN6VCxDQUExQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS2tULE9BQUwsQ0FBYWxRLElBQWIsR0FBb0IsY0FBcEI7QUFDQSxnQkFBTXlRLGFBQVksR0FBRyxLQUFLUCxPQUExQjtBQUNBTyx5QkFBWSxDQUFDRixFQUFiLEdBQWtCNEYsRUFBRSxHQUFHLEtBQUtOLEtBQTVCO0FBQ0FwRix5QkFBWSxDQUFDRCxFQUFiLEdBQWtCNEYsRUFBRSxHQUFHLEtBQUtOLEtBQTVCO0FBQ0FyRix5QkFBWSxDQUFDRSxFQUFiLEdBQWtCMEYsRUFBRSxHQUFHLEtBQUtSLEtBQTVCO0FBQ0FwRix5QkFBWSxDQUFDRyxFQUFiLEdBQWtCMEYsRUFBRSxHQUFHLEtBQUtSLEtBQTVCO0FBQ0FyRix5QkFBWSxDQUFDMVQsQ0FBYixHQUFpQndaLEVBQUUsR0FBRyxLQUFLVixLQUEzQjtBQUNBcEYseUJBQVksQ0FBQ3pULENBQWIsR0FBaUJ3WixFQUFFLEdBQUcsS0FBS1YsS0FBM0I7QUFDQSxpQkFBS0MsTUFBTCxHQUFjdEYsYUFBWSxDQUFDMVQsQ0FBYixJQUFrQjBULGFBQVksQ0FBQ0UsRUFBYixHQUFrQkYsYUFBWSxDQUFDMVQsQ0FBakQsQ0FBZDtBQUNBLGlCQUFLaVosTUFBTCxHQUFjdkYsYUFBWSxDQUFDelQsQ0FBYixJQUFrQnlULGFBQVksQ0FBQ0csRUFBYixHQUFrQkgsYUFBWSxDQUFDelQsQ0FBakQsQ0FBZDtBQUNBLGlCQUFLNlksS0FBTCxHQUFhcEYsYUFBWSxDQUFDMVQsQ0FBMUI7QUFDQSxpQkFBSytZLEtBQUwsR0FBYXJGLGFBQVksQ0FBQ3pULENBQTFCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLa1QsT0FBTCxDQUFhbFEsSUFBYixHQUFvQixjQUFwQjtBQUNBLGdCQUFNeVEsY0FBWSxHQUFHLEtBQUtQLE9BQTFCO0FBQ0FPLDBCQUFZLENBQUNGLEVBQWIsR0FBa0IsS0FBS3dGLE1BQXZCO0FBQ0F0RiwwQkFBWSxDQUFDRCxFQUFiLEdBQWtCLEtBQUt3RixNQUF2QjtBQUNBdkYsMEJBQVksQ0FBQ0UsRUFBYixHQUFrQndGLEVBQWxCO0FBQ0ExRiwwQkFBWSxDQUFDRyxFQUFiLEdBQWtCd0YsRUFBbEI7QUFDQTNGLDBCQUFZLENBQUMxVCxDQUFiLEdBQWlCc1osRUFBakI7QUFDQTVGLDBCQUFZLENBQUN6VCxDQUFiLEdBQWlCc1osRUFBakI7QUFDQSxpQkFBS1AsTUFBTCxHQUFjdEYsY0FBWSxDQUFDMVQsQ0FBYixJQUFrQjBULGNBQVksQ0FBQ0UsRUFBYixHQUFrQkYsY0FBWSxDQUFDMVQsQ0FBakQsQ0FBZDtBQUNBLGlCQUFLaVosTUFBTCxHQUFjdkYsY0FBWSxDQUFDelQsQ0FBYixJQUFrQnlULGNBQVksQ0FBQ0csRUFBYixHQUFrQkgsY0FBWSxDQUFDelQsQ0FBakQsQ0FBZDtBQUNBLGlCQUFLNlksS0FBTCxHQUFhcEYsY0FBWSxDQUFDMVQsQ0FBMUI7QUFDQSxpQkFBSytZLEtBQUwsR0FBYXJGLGNBQVksQ0FBQ3pULENBQTFCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLa1QsT0FBTCxDQUFhbFEsSUFBYixHQUFvQixjQUFwQjtBQUNBLGdCQUFNeVEsY0FBWSxHQUFHLEtBQUtQLE9BQTFCO0FBQ0FPLDBCQUFZLENBQUNGLEVBQWIsR0FBa0IsS0FBS3dGLE1BQXZCO0FBQ0F0RiwwQkFBWSxDQUFDRCxFQUFiLEdBQWtCLEtBQUt3RixNQUF2QjtBQUNBdkYsMEJBQVksQ0FBQ0UsRUFBYixHQUFrQndGLEVBQUUsR0FBRyxLQUFLTixLQUE1QjtBQUNBcEYsMEJBQVksQ0FBQ0csRUFBYixHQUFrQndGLEVBQUUsR0FBRyxLQUFLTixLQUE1QjtBQUNBckYsMEJBQVksQ0FBQzFULENBQWIsR0FBaUJzWixFQUFFLEdBQUcsS0FBS1IsS0FBM0I7QUFDQXBGLDBCQUFZLENBQUN6VCxDQUFiLEdBQWlCc1osRUFBRSxHQUFHLEtBQUtSLEtBQTNCO0FBQ0EsaUJBQUtDLE1BQUwsR0FBY3RGLGNBQVksQ0FBQzFULENBQWIsSUFBa0IwVCxjQUFZLENBQUNFLEVBQWIsR0FBa0JGLGNBQVksQ0FBQzFULENBQWpELENBQWQ7QUFDQSxpQkFBS2laLE1BQUwsR0FBY3ZGLGNBQVksQ0FBQ3pULENBQWIsSUFBa0J5VCxjQUFZLENBQUNHLEVBQWIsR0FBa0JILGNBQVksQ0FBQ3pULENBQWpELENBQWQ7QUFDQSxpQkFBSzZZLEtBQUwsR0FBYXBGLGNBQVksQ0FBQzFULENBQTFCO0FBQ0EsaUJBQUsrWSxLQUFMLEdBQWFyRixjQUFZLENBQUN6VCxDQUExQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS2tULE9BQUwsQ0FBYWxRLElBQWIsR0FBb0IsU0FBcEI7QUFDQSxnQkFBTXFRLE9BQU8sR0FBRyxLQUFLSCxPQUFyQjtBQUNBRyxtQkFBTyxDQUFDRSxFQUFSLEdBQWE0RixFQUFiO0FBQ0E5RixtQkFBTyxDQUFDRyxFQUFSLEdBQWE0RixFQUFiO0FBQ0EvRixtQkFBTyxDQUFDdFQsQ0FBUixHQUFZc1osRUFBWjtBQUNBaEcsbUJBQU8sQ0FBQ3JULENBQVIsR0FBWXNaLEVBQVo7QUFDQSxpQkFBS1AsTUFBTCxHQUFjMUYsT0FBTyxDQUFDdFQsQ0FBUixJQUFhc1QsT0FBTyxDQUFDRSxFQUFSLEdBQWFGLE9BQU8sQ0FBQ3RULENBQWxDLENBQWQ7QUFDQSxpQkFBS2laLE1BQUwsR0FBYzNGLE9BQU8sQ0FBQ3JULENBQVIsSUFBYXFULE9BQU8sQ0FBQ0csRUFBUixHQUFhSCxPQUFPLENBQUNyVCxDQUFsQyxDQUFkO0FBQ0EsaUJBQUs2WSxLQUFMLEdBQWF4RixPQUFPLENBQUN0VCxDQUFyQjtBQUNBLGlCQUFLK1ksS0FBTCxHQUFhekYsT0FBTyxDQUFDclQsQ0FBckI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUtrVCxPQUFMLENBQWFsUSxJQUFiLEdBQW9CLFNBQXBCO0FBQ0EsZ0JBQU1xUSxRQUFPLEdBQUcsS0FBS0gsT0FBckI7QUFDQUcsb0JBQU8sQ0FBQ0UsRUFBUixHQUFhNEYsRUFBRSxHQUFHLEtBQUtOLEtBQXZCO0FBQ0F4RixvQkFBTyxDQUFDRyxFQUFSLEdBQWE0RixFQUFFLEdBQUcsS0FBS04sS0FBdkI7QUFDQXpGLG9CQUFPLENBQUN0VCxDQUFSLEdBQVlzWixFQUFFLEdBQUcsS0FBS1IsS0FBdEI7QUFDQXhGLG9CQUFPLENBQUNyVCxDQUFSLEdBQVlzWixFQUFFLEdBQUcsS0FBS1IsS0FBdEI7QUFDQSxpQkFBS0MsTUFBTCxHQUFjMUYsUUFBTyxDQUFDdFQsQ0FBUixJQUFhc1QsUUFBTyxDQUFDRSxFQUFSLEdBQWFGLFFBQU8sQ0FBQ3RULENBQWxDLENBQWQ7QUFDQSxpQkFBS2laLE1BQUwsR0FBYzNGLFFBQU8sQ0FBQ3JULENBQVIsSUFBYXFULFFBQU8sQ0FBQ0csRUFBUixHQUFhSCxRQUFPLENBQUNyVCxDQUFsQyxDQUFkO0FBQ0EsaUJBQUs2WSxLQUFMLEdBQWF4RixRQUFPLENBQUN0VCxDQUFyQjtBQUNBLGlCQUFLK1ksS0FBTCxHQUFhekYsUUFBTyxDQUFDclQsQ0FBckI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUtrVCxPQUFMLENBQWFsUSxJQUFiLEdBQW9CLFNBQXBCO0FBQ0EsZ0JBQU1xUSxTQUFPLEdBQUcsS0FBS0gsT0FBckI7QUFDQUcscUJBQU8sQ0FBQ0UsRUFBUixHQUFhLEtBQUt3RixNQUFsQjtBQUNBMUYscUJBQU8sQ0FBQ0csRUFBUixHQUFhLEtBQUt3RixNQUFsQjtBQUNBM0YscUJBQU8sQ0FBQ3RULENBQVIsR0FBWW9aLEVBQVo7QUFDQTlGLHFCQUFPLENBQUNyVCxDQUFSLEdBQVlvWixFQUFaO0FBQ0EsaUJBQUtMLE1BQUwsR0FBYzFGLFNBQU8sQ0FBQ3RULENBQVIsSUFBYXNULFNBQU8sQ0FBQ0UsRUFBUixHQUFhRixTQUFPLENBQUN0VCxDQUFsQyxDQUFkO0FBQ0EsaUJBQUtpWixNQUFMLEdBQWMzRixTQUFPLENBQUNyVCxDQUFSLElBQWFxVCxTQUFPLENBQUNHLEVBQVIsR0FBYUgsU0FBTyxDQUFDclQsQ0FBbEMsQ0FBZDtBQUNBLGlCQUFLNlksS0FBTCxHQUFheEYsU0FBTyxDQUFDdFQsQ0FBckI7QUFDQSxpQkFBSytZLEtBQUwsR0FBYXpGLFNBQU8sQ0FBQ3JULENBQXJCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLa1QsT0FBTCxDQUFhbFEsSUFBYixHQUFvQixTQUFwQjtBQUNBLGdCQUFNcVEsU0FBTyxHQUFHLEtBQUtILE9BQXJCO0FBQ0FHLHFCQUFPLENBQUNFLEVBQVIsR0FBYSxLQUFLd0YsTUFBbEI7QUFDQTFGLHFCQUFPLENBQUNHLEVBQVIsR0FBYSxLQUFLd0YsTUFBbEI7QUFDQTNGLHFCQUFPLENBQUN0VCxDQUFSLEdBQVlvWixFQUFFLEdBQUcsS0FBS04sS0FBdEI7QUFDQXhGLHFCQUFPLENBQUNyVCxDQUFSLEdBQVlvWixFQUFFLEdBQUcsS0FBS04sS0FBdEI7QUFDQSxpQkFBS0MsTUFBTCxHQUFjMUYsU0FBTyxDQUFDdFQsQ0FBUixJQUFhc1QsU0FBTyxDQUFDRSxFQUFSLEdBQWFGLFNBQU8sQ0FBQ3RULENBQWxDLENBQWQ7QUFDQSxpQkFBS2laLE1BQUwsR0FBYzNGLFNBQU8sQ0FBQ3JULENBQVIsSUFBYXFULFNBQU8sQ0FBQ0csRUFBUixHQUFhSCxTQUFPLENBQUNyVCxDQUFsQyxDQUFkO0FBQ0EsaUJBQUs2WSxLQUFMLEdBQWF4RixTQUFPLENBQUN0VCxDQUFyQjtBQUNBLGlCQUFLK1ksS0FBTCxHQUFhekYsU0FBTyxDQUFDclQsQ0FBckI7QUFDSDtBQUNEOztBQUNKO0FBQ0k7QUF0TVI7QUF3TUg7QUExT0w7O0FBQUE7QUFBQTtBQTRPQSxJQUFNZ1YsTUFBTSxHQUFHLElBQUlDLG9CQUFKLEVBQWY7QUFDTyxJQUFJNkIsY0FBSjs7QUFDUCxDQUFDLFVBQVVBLGNBQVYsRUFBMEI7QUFDdkIsV0FBUzlFLGVBQVQsQ0FBeUJ1QyxJQUF6QixFQUErQnRILE1BQS9CLEVBQXVDO0FBQ25DK0gsVUFBTSxDQUFDRSxPQUFQLENBQWVYLElBQWY7O0FBQ0EsV0FBT1MsTUFBTSxDQUFDRyxRQUFQLEVBQVAsRUFBMEI7QUFDdEIsVUFBTWpDLE9BQU8sR0FBRzhCLE1BQU0sQ0FBQ0ksVUFBUCxFQUFoQjs7QUFDQSxVQUFJbEMsT0FBSixFQUFhO0FBQ1Q2RCxzRUFBQSxDQUE0QjdELE9BQTVCLEVBQXFDakcsTUFBckM7QUFDSDtBQUNKO0FBQ0o7O0FBQ0Q2SixnQkFBYyxDQUFDOUUsZUFBZixHQUFpQ0EsZUFBakM7QUFDSCxDQVhELEVBV0c4RSxjQUFjLEtBQUtBLGNBQWMsR0FBRyxFQUF0QixDQVhqQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDeFNxQjJDLFE7QUFDakIsb0JBQVk3RSxLQUFaLEVBQW1CO0FBQUE7O0FBQ2YsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7Ozs7V0FDRCxxQkFBZ0M7QUFBQSxVQUF0QjNXLEtBQXNCLHVFQUFkLENBQWM7QUFBQSxVQUFYQyxLQUFXLHVFQUFILENBQUc7QUFDNUIsV0FBS2dXLElBQUwsR0FBWTtBQUNSbFIsWUFBSSxFQUFFLE9BREU7QUFFUi9FLGFBQUssRUFBTEEsS0FGUTtBQUdSQyxhQUFLLEVBQUxBO0FBSFEsT0FBWjtBQUtIOzs7V0FDRCx5QkFBZ0J1UyxHQUFoQixFQUFxQjVRLE1BQXJCLEVBQTREO0FBQUEsVUFBL0JjLE1BQStCLHVFQUF0QixJQUFzQjtBQUFBLFVBQWhCK1ksTUFBZ0IsdUVBQVAsS0FBTztBQUN4RCxXQUFLeEYsSUFBTCxHQUFZO0FBQ1JsUixZQUFJLEVBQUUsUUFERTtBQUVSeU4sV0FBRyxFQUFIQSxHQUZRO0FBR1I1USxjQUFNLEVBQU5BLE1BSFE7QUFJUmMsY0FBTSxFQUFOQSxNQUpRO0FBS1IrWSxjQUFNLEVBQU5BO0FBTFEsT0FBWjtBQU9IOzs7V0FDRCwyQkFBa0IxVyxJQUFsQixFQUF3Qi9FLEtBQXhCLEVBQStCQyxLQUEvQixFQUFzQ3dCLEtBQXRDLEVBQTZDRyxNQUE3QyxFQUFvSDtBQUFBLFVBQS9EOFosTUFBK0QsdUVBQXRELFFBQXNEO0FBQUEsVUFBNUNDLGFBQTRDLHVFQUE1QixLQUE0QjtBQUFBLFVBQXJCQyxlQUFxQix1RUFBSCxDQUFHO0FBQ2hILFdBQUszRixJQUFMLEdBQVk7QUFDUmxSLFlBQUksRUFBSkEsSUFEUTtBQUVSL0UsYUFBSyxFQUFMQSxLQUZRO0FBR1JDLGFBQUssRUFBTEEsS0FIUTtBQUlSd0IsYUFBSyxFQUFMQSxLQUpRO0FBS1JHLGNBQU0sRUFBTkEsTUFMUTtBQU1SOFosY0FBTSxFQUFOQSxNQU5RO0FBT1JDLHFCQUFhLEVBQWJBLGFBUFE7QUFRUkMsdUJBQWUsRUFBZkE7QUFSUSxPQUFaO0FBVUg7OztXQUNELHFCQUEySTtBQUFBLFVBQWpJN0osU0FBaUksdUVBQXJILENBQXFIO0FBQUEsVUFBbEgvUixLQUFrSCx1RUFBMUcsQ0FBMEc7QUFBQSxVQUF2R0MsS0FBdUcsdUVBQS9GLENBQStGO0FBQUEsVUFBNUY0YixZQUE0Rix1RUFBN0UsS0FBNkU7QUFBQSxVQUF0RUMsU0FBc0UsdUVBQTFELE1BQTBEO0FBQUEsVUFBbER2RCxJQUFrRCx1RUFBM0MsT0FBMkM7QUFBQSxVQUFsQ0MsTUFBa0MsdUVBQXpCLE9BQXlCO0FBQUEsVUFBaEJILFVBQWdCLHVFQUFILENBQUc7QUFDdkksV0FBS25DLE1BQUwsR0FBYztBQUNWbkUsaUJBQVMsRUFBVEEsU0FEVTtBQUVWOEosb0JBQVksRUFBWkEsWUFGVTtBQUdWQyxpQkFBUyxFQUFUQSxTQUhVO0FBSVZ2RCxZQUFJLEVBQUpBLElBSlU7QUFLVkMsY0FBTSxFQUFOQSxNQUxVO0FBTVZILGtCQUFVLEVBQVZBLFVBTlU7QUFPVnBDLFlBQUksRUFBRTtBQUNGbFIsY0FBSSxFQUFFLE9BREo7QUFFRi9FLGVBQUssRUFBTEEsS0FGRTtBQUdGQyxlQUFLLEVBQUxBO0FBSEU7QUFQSSxPQUFkO0FBYUg7OztXQUNELDJCQUFrQjhFLElBQWxCLEVBQXdCL0UsS0FBeEIsRUFBK0JDLEtBQS9CLEVBQXNDd0IsS0FBdEMsRUFBNkNHLE1BQTdDLEVBQW9IO0FBQUEsVUFBL0Q4WixNQUErRCx1RUFBdEQsUUFBc0Q7QUFBQSxVQUE1Q0MsYUFBNEMsdUVBQTVCLEtBQTRCO0FBQUEsVUFBckJDLGVBQXFCLHVFQUFILENBQUc7O0FBQ2hILFVBQUksQ0FBQyxLQUFLMUYsTUFBVixFQUFrQjtBQUNkO0FBQ0g7O0FBQ0QsV0FBS0EsTUFBTCxDQUFZRCxJQUFaLEdBQW1CO0FBQ2ZsUixZQUFJLEVBQUpBLElBRGU7QUFFZi9FLGFBQUssRUFBTEEsS0FGZTtBQUdmQyxhQUFLLEVBQUxBLEtBSGU7QUFJZndCLGFBQUssRUFBTEEsS0FKZTtBQUtmRyxjQUFNLEVBQU5BLE1BTGU7QUFNZjhaLGNBQU0sRUFBTkEsTUFOZTtBQU9mQyxxQkFBYSxFQUFiQSxhQVBlO0FBUWZDLHVCQUFlLEVBQWZBO0FBUmUsT0FBbkI7QUFVSDs7O1dBQ0QseUJBQWdCcEosR0FBaEIsRUFBcUI1USxNQUFyQixFQUE0RDtBQUFBLFVBQS9CYyxNQUErQix1RUFBdEIsSUFBc0I7QUFBQSxVQUFoQitZLE1BQWdCLHVFQUFQLEtBQU87O0FBQ3hELFVBQUksQ0FBQyxLQUFLdkYsTUFBVixFQUFrQjtBQUNkO0FBQ0g7O0FBQ0QsV0FBS0EsTUFBTCxDQUFZRCxJQUFaLEdBQW1CO0FBQ2ZsUixZQUFJLEVBQUUsUUFEUztBQUVmeU4sV0FBRyxFQUFIQSxHQUZlO0FBR2Y1USxjQUFNLEVBQU5BLE1BSGU7QUFJZmMsY0FBTSxFQUFOQSxNQUplO0FBS2YrWSxjQUFNLEVBQU5BO0FBTGUsT0FBbkI7QUFPSDs7O1dBQ0QsZ0JBQU8zWixDQUFQLEVBQVVDLENBQVYsRUFBYTtBQUNULFVBQU11VSxJQUFJLEdBQUcsS0FBS3pCLFNBQUwsRUFBYjtBQUNBeUIsVUFBSSxDQUFDblQsSUFBTCxDQUFVO0FBQUU0QixZQUFJLEVBQUUsUUFBUjtBQUFrQmpELFNBQUMsRUFBREEsQ0FBbEI7QUFBcUJDLFNBQUMsRUFBREE7QUFBckIsT0FBVjtBQUNIOzs7V0FDRCxnQkFBT0QsQ0FBUCxFQUFVQyxDQUFWLEVBQWE7QUFDVCxVQUFNdVUsSUFBSSxHQUFHLEtBQUt5RixPQUFMLEVBQWI7O0FBQ0EsVUFBSSxDQUFDekYsSUFBTCxFQUFXO0FBQ1A7QUFDSDs7QUFDREEsVUFBSSxDQUFDblQsSUFBTCxDQUFVO0FBQUU0QixZQUFJLEVBQUUsUUFBUjtBQUFrQmpELFNBQUMsRUFBREEsQ0FBbEI7QUFBcUJDLFNBQUMsRUFBREE7QUFBckIsT0FBVjtBQUNIOzs7V0FDRCxpQkFBUXVULEVBQVIsRUFBWUMsRUFBWixFQUFnQnpULENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQjtBQUNsQixVQUFNdVUsSUFBSSxHQUFHLEtBQUt5RixPQUFMLEVBQWI7O0FBQ0EsVUFBSSxDQUFDekYsSUFBTCxFQUFXO0FBQ1A7QUFDSDs7QUFDREEsVUFBSSxDQUFDblQsSUFBTCxDQUFVO0FBQ040QixZQUFJLEVBQUUsU0FEQTtBQUNXdVEsVUFBRSxFQUFGQSxFQURYO0FBQ2VDLFVBQUUsRUFBRkEsRUFEZjtBQUNtQnpULFNBQUMsRUFBREEsQ0FEbkI7QUFDc0JDLFNBQUMsRUFBREE7QUFEdEIsT0FBVjtBQUdIOzs7V0FDRCxzQkFBYXVULEVBQWIsRUFBaUJDLEVBQWpCLEVBQXFCRyxFQUFyQixFQUF5QkMsRUFBekIsRUFBNkI3VCxDQUE3QixFQUFnQ0MsQ0FBaEMsRUFBbUM7QUFDL0IsVUFBTXVVLElBQUksR0FBRyxLQUFLeUYsT0FBTCxFQUFiOztBQUNBLFVBQUksQ0FBQ3pGLElBQUwsRUFBVztBQUNQO0FBQ0g7O0FBQ0RBLFVBQUksQ0FBQ25ULElBQUwsQ0FBVTtBQUNONEIsWUFBSSxFQUFFLFNBREE7QUFDV3VRLFVBQUUsRUFBRkEsRUFEWDtBQUNlQyxVQUFFLEVBQUZBLEVBRGY7QUFDbUJHLFVBQUUsRUFBRkEsRUFEbkI7QUFDdUJDLFVBQUUsRUFBRkEsRUFEdkI7QUFDMkI3VCxTQUFDLEVBQURBLENBRDNCO0FBQzhCQyxTQUFDLEVBQURBO0FBRDlCLE9BQVY7QUFHSDs7O1dBQ0QsdUJBQWNELENBQWQsRUFBaUJDLENBQWpCLEVBQW9CMEIsS0FBcEIsRUFBMkJDLE1BQTNCLEVBQXdFO0FBQUEsVUFBckNzWSxZQUFxQyx1RUFBdEIsQ0FBc0I7QUFBQSxVQUFuQkMsYUFBbUIsdUVBQUgsQ0FBRztBQUNwRSxVQUFNM0YsSUFBSSxHQUFHLEtBQUt6QixTQUFMLEVBQWI7QUFDQSxVQUFNcUgsQ0FBQyxHQUFHRixZQUFWO0FBQ0EsVUFBTTFDLENBQUMsR0FBRzJDLGFBQVY7QUFDQSxVQUFNRSxDQUFDLEdBQUcsU0FBVjtBQUNBLFVBQU1DLEVBQUUsR0FBSUYsQ0FBQyxHQUFHLENBQUwsR0FBVUMsQ0FBckI7QUFDQSxVQUFNRSxFQUFFLEdBQUkvQyxDQUFDLEdBQUcsQ0FBTCxHQUFVNkMsQ0FBckI7QUFDQSxVQUFNRyxFQUFFLEdBQUd4YSxDQUFDLEdBQUdvYSxDQUFmO0FBQ0EsVUFBTUssRUFBRSxHQUFHeGEsQ0FBQyxHQUFHdVgsQ0FBZjtBQUNBLFVBQU1rRCxFQUFFLEdBQUcxYSxDQUFDLEdBQUdvYSxDQUFDLEdBQUcsQ0FBbkI7QUFDQSxVQUFNTyxFQUFFLEdBQUcxYSxDQUFDLEdBQUd1WCxDQUFDLEdBQUcsQ0FBbkI7QUFDQSxVQUFNckgsRUFBRSxHQUFHeE8sS0FBSyxHQUFHeVksQ0FBbkI7QUFDQSxVQUFNaEssRUFBRSxHQUFHeE8sTUFBTSxHQUFHNFYsQ0FBcEI7QUFDQWhELFVBQUksQ0FBQ25ULElBQUwsQ0FBVTtBQUNONEIsWUFBSSxFQUFFLFFBREE7QUFFTmpELFNBQUMsRUFBREEsQ0FGTTtBQUdOQyxTQUFDLEVBQUUwYTtBQUhHLE9BQVY7QUFLQW5HLFVBQUksQ0FBQ25ULElBQUwsQ0FBVTtBQUNONEIsWUFBSSxFQUFFLGNBREE7QUFFTnVRLFVBQUUsRUFBRXhULENBRkU7QUFHTnlULFVBQUUsRUFBRWtILEVBQUUsR0FBR0osRUFISDtBQUlOM0csVUFBRSxFQUFFOEcsRUFBRSxHQUFHSixFQUpIO0FBS056RyxVQUFFLEVBQUU1VCxDQUxFO0FBTU5ELFNBQUMsRUFBRTBhLEVBTkc7QUFPTnphLFNBQUMsRUFBREE7QUFQTSxPQUFWO0FBU0F1VSxVQUFJLENBQUNuVCxJQUFMLENBQVU7QUFDTjRCLFlBQUksRUFBRSxRQURBO0FBRU5qRCxTQUFDLEVBQUUwYSxFQUFFLEdBQUd2SyxFQUZGO0FBR05sUSxTQUFDLEVBQURBO0FBSE0sT0FBVjtBQUtBdVUsVUFBSSxDQUFDblQsSUFBTCxDQUFVO0FBQ040QixZQUFJLEVBQUUsY0FEQTtBQUVOdVEsVUFBRSxFQUFFa0gsRUFBRSxHQUFHSixFQUFMLEdBQVVuSyxFQUZSO0FBR05zRCxVQUFFLEVBQUV4VCxDQUhFO0FBSU4yVCxVQUFFLEVBQUU0RyxFQUFFLEdBQUdySyxFQUpIO0FBS04wRCxVQUFFLEVBQUU4RyxFQUFFLEdBQUdKLEVBTEg7QUFNTnZhLFNBQUMsRUFBRXdhLEVBQUUsR0FBR3JLLEVBTkY7QUFPTmxRLFNBQUMsRUFBRTBhO0FBUEcsT0FBVjtBQVNBbkcsVUFBSSxDQUFDblQsSUFBTCxDQUFVO0FBQ040QixZQUFJLEVBQUUsUUFEQTtBQUVOakQsU0FBQyxFQUFFd2EsRUFBRSxHQUFHckssRUFGRjtBQUdObFEsU0FBQyxFQUFFMGEsRUFBRSxHQUFHdks7QUFIRixPQUFWO0FBS0FvRSxVQUFJLENBQUNuVCxJQUFMLENBQVU7QUFDTjRCLFlBQUksRUFBRSxjQURBO0FBRU51USxVQUFFLEVBQUVnSCxFQUFFLEdBQUdySyxFQUZIO0FBR05zRCxVQUFFLEVBQUVrSCxFQUFFLEdBQUdKLEVBQUwsR0FBVW5LLEVBSFI7QUFJTndELFVBQUUsRUFBRThHLEVBQUUsR0FBR0osRUFBTCxHQUFVbkssRUFKUjtBQUtOMEQsVUFBRSxFQUFFNEcsRUFBRSxHQUFHckssRUFMSDtBQU1OcFEsU0FBQyxFQUFFMGEsRUFBRSxHQUFHdkssRUFORjtBQU9ObFEsU0FBQyxFQUFFd2EsRUFBRSxHQUFHcks7QUFQRixPQUFWO0FBU0FvRSxVQUFJLENBQUNuVCxJQUFMLENBQVU7QUFDTjRCLFlBQUksRUFBRSxRQURBO0FBRU5qRCxTQUFDLEVBQUUwYSxFQUZHO0FBR056YSxTQUFDLEVBQUV3YSxFQUFFLEdBQUdySztBQUhGLE9BQVY7QUFLQW9FLFVBQUksQ0FBQ25ULElBQUwsQ0FBVTtBQUNONEIsWUFBSSxFQUFFLGNBREE7QUFFTnVRLFVBQUUsRUFBRWtILEVBQUUsR0FBR0osRUFGSDtBQUdON0csVUFBRSxFQUFFZ0gsRUFBRSxHQUFHckssRUFISDtBQUlOd0QsVUFBRSxFQUFFNVQsQ0FKRTtBQUtONlQsVUFBRSxFQUFFOEcsRUFBRSxHQUFHSixFQUFMLEdBQVVuSyxFQUxSO0FBTU5wUSxTQUFDLEVBQURBLENBTk07QUFPTkMsU0FBQyxFQUFFMGEsRUFBRSxHQUFHdks7QUFQRixPQUFWO0FBU0g7OztXQUNELGtCQUFTcFEsQ0FBVCxFQUFZQyxDQUFaLEVBQWUwQixLQUFmLEVBQXNCQyxNQUF0QixFQUE4QjtBQUMxQixVQUFNOFAsSUFBSSxHQUFHLEtBQUtrSixVQUFMLEVBQWI7QUFDQWxKLFVBQUksQ0FBQ3pPLElBQUwsR0FBWSxXQUFaO0FBQ0F5TyxVQUFJLENBQUMxUixDQUFMLEdBQVNBLENBQVQ7QUFDQTBSLFVBQUksQ0FBQ3pSLENBQUwsR0FBU0EsQ0FBVDtBQUNBeVIsVUFBSSxDQUFDL1AsS0FBTCxHQUFhQSxLQUFiO0FBQ0ErUCxVQUFJLENBQUM5UCxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7O1dBQ0Qsb0JBQVc1QixDQUFYLEVBQWNDLENBQWQsRUFBaUIyUyxNQUFqQixFQUF5QjtBQUNyQixVQUFNbEIsSUFBSSxHQUFHLEtBQUtrSixVQUFMLEVBQWI7QUFDQWxKLFVBQUksQ0FBQ3pPLElBQUwsR0FBWSxTQUFaO0FBQ0F5TyxVQUFJLENBQUMxUixDQUFMLEdBQVNBLENBQVQ7QUFDQTBSLFVBQUksQ0FBQ3pSLENBQUwsR0FBU0EsQ0FBVDtBQUNBeVIsVUFBSSxDQUFDa0IsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7OztXQUNELHFCQUFZNVMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCMEIsS0FBbEIsRUFBeUJDLE1BQXpCLEVBQWlDO0FBQzdCLFVBQU04UCxJQUFJLEdBQUcsS0FBS2tKLFVBQUwsRUFBYjtBQUNBbEosVUFBSSxDQUFDek8sSUFBTCxHQUFZLFNBQVo7QUFDQXlPLFVBQUksQ0FBQ21CLE9BQUwsR0FBZWxSLEtBQUssR0FBRyxDQUF2QjtBQUNBK1AsVUFBSSxDQUFDb0IsT0FBTCxHQUFlbFIsTUFBTSxHQUFHLENBQXhCO0FBQ0E4UCxVQUFJLENBQUMxUixDQUFMLEdBQVNBLENBQUMsR0FBRzBSLElBQUksQ0FBQ21CLE9BQWxCO0FBQ0FuQixVQUFJLENBQUN6UixDQUFMLEdBQVNBLENBQUMsR0FBR3lSLElBQUksQ0FBQ29CLE9BQWxCO0FBQ0g7OztXQUNELGlCQUFRO0FBQ0osYUFBTyxLQUFLK0IsS0FBTCxDQUFXbkQsSUFBbEI7QUFDSDs7O1dBQ0Qsc0JBQWE7QUFBQSxVQUNEbUQsS0FEQyxHQUN1QixJQUR2QixDQUNEQSxLQURDO0FBQUEsVUFDTVYsSUFETixHQUN1QixJQUR2QixDQUNNQSxJQUROO0FBQUEsVUFDWUMsTUFEWixHQUN1QixJQUR2QixDQUNZQSxNQURaOztBQUVULFVBQUlyUixLQUFLLENBQUNDLE9BQU4sQ0FBYzZSLEtBQUssQ0FBQ25ELElBQXBCLENBQUosRUFBK0IsQ0FDOUIsQ0FERCxNQUVLLElBQUksUUFBT21ELEtBQUssQ0FBQ25ELElBQWIsTUFBc0IsUUFBMUIsRUFBb0M7QUFDckNtRCxhQUFLLENBQUNuRCxJQUFOLEdBQWEsQ0FBQ21ELEtBQUssQ0FBQ25ELElBQVAsQ0FBYjtBQUNILE9BRkksTUFHQTtBQUNEbUQsYUFBSyxDQUFDbkQsSUFBTixHQUFhLEVBQWI7QUFDSDs7QUFDRCxVQUFNbUosWUFBWSxHQUFHO0FBQUU1WCxZQUFJLEVBQUUsTUFBUjtBQUFnQmtSLFlBQUksRUFBSkEsSUFBaEI7QUFBc0JDLGNBQU0sRUFBTkE7QUFBdEIsT0FBckI7QUFDQVMsV0FBSyxDQUFDbkQsSUFBTixDQUFXclEsSUFBWCxDQUFnQndaLFlBQWhCO0FBQ0EsYUFBT0EsWUFBUDtBQUNIOzs7V0FDRCxxQkFBWTtBQUNSLFVBQU1uSixJQUFJLEdBQUcsS0FBS2tKLFVBQUwsRUFBYjtBQUNBbEosVUFBSSxDQUFDQSxJQUFMLEdBQVksRUFBWjtBQUNBLGFBQU9BLElBQUksQ0FBQ0EsSUFBWjtBQUNIOzs7V0FDRCxtQkFBVTtBQUFBLFVBQ0VtRCxLQURGLEdBQ1ksSUFEWixDQUNFQSxLQURGOztBQUVOLFVBQUksQ0FBQzlSLEtBQUssQ0FBQ0MsT0FBTixDQUFjNlIsS0FBSyxDQUFDbkQsSUFBcEIsQ0FBRCxJQUE4QixDQUFDbUQsS0FBSyxDQUFDbkQsSUFBTixDQUFXalMsTUFBOUMsRUFBc0Q7QUFDbEQsZUFBTytXLFNBQVA7QUFDSDs7QUFDRCxVQUFNOUUsSUFBSSxHQUFHbUQsS0FBSyxDQUFDbkQsSUFBTixDQUFXbUQsS0FBSyxDQUFDbkQsSUFBTixDQUFXalMsTUFBWCxHQUFvQixDQUEvQixDQUFiOztBQUNBLFVBQUksQ0FBQ3NELEtBQUssQ0FBQ0MsT0FBTixDQUFjME8sSUFBSSxDQUFDQSxJQUFuQixDQUFMLEVBQStCO0FBQzNCLGVBQU84RSxTQUFQO0FBQ0g7O0FBQ0QsYUFBTzlFLElBQUksQ0FBQ0EsSUFBWjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BPTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1zRCxLQUFLLEdBQUcsT0FBZDtBQUNQLElBQU05SCxNQUFNLEdBQUdWLG1EQUFBLEVBQWY7QUFDTyxJQUFJc0ksS0FBSjs7QUFDUCxDQUFDLFVBQVVBLEtBQVYsRUFBaUI7QUFDZCxXQUFTZ0csV0FBVCxDQUFxQmpHLEtBQXJCLEVBQTRCO0FBQ3hCLFdBQU8sSUFBSTZFLDhDQUFKLENBQWE3RSxLQUFiLENBQVA7QUFDSDs7QUFDREMsT0FBSyxDQUFDZ0csV0FBTixHQUFvQkEsV0FBcEI7O0FBQ0EsV0FBUzdJLGVBQVQsQ0FBeUI0QyxLQUF6QixFQUFnQzdRLE1BQWhDLEVBQXdDO0FBQUEsUUFDNUIwTixJQUQ0QixHQUNuQm1ELEtBRG1CLENBQzVCbkQsSUFENEI7O0FBRXBDLFFBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1BuQiwrREFBQSxDQUFtQnZNLE1BQW5CO0FBQ0E7QUFDSDs7QUFDRHdJLDBEQUFBLENBQWdCVSxNQUFoQjs7QUFDQSxRQUFJbkssS0FBSyxDQUFDQyxPQUFOLENBQWMwTyxJQUFkLENBQUosRUFBeUI7QUFDckIsV0FBSyxJQUFJbFMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2tTLElBQUksQ0FBQ2pTLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDeVgsNEVBQUEsQ0FBNkJ2RixJQUFJLENBQUNsUyxDQUFELENBQWpDLEVBQXNDME4sTUFBdEM7QUFDSDtBQUNKLEtBSkQsTUFLSyxJQUFJLFFBQU93RSxJQUFQLE1BQWdCLFFBQXBCLEVBQThCO0FBQy9CdUYsMEVBQUEsQ0FBNkJ2RixJQUE3QixFQUFtQ3hFLE1BQW5DO0FBQ0gsS0FGSSxNQUdBO0FBQ0RxRCwrREFBQSxDQUFtQnZNLE1BQW5CO0FBQ0E7QUFDSDs7QUFDRCxRQUFJd0kscURBQUEsQ0FBZVUsTUFBZixDQUFKLEVBQTRCO0FBQ3hCcUQsK0RBQUEsQ0FBbUJ2TSxNQUFuQjtBQUNBO0FBQ0g7O0FBQ0QsUUFBTXJDLEtBQUssR0FBR3VMLE1BQU0sQ0FBQ0osSUFBUCxHQUFjSSxNQUFNLENBQUNSLElBQW5DO0FBQ0EsUUFBTTlLLE1BQU0sR0FBR3NMLE1BQU0sQ0FBQ0YsSUFBUCxHQUFjRSxNQUFNLENBQUNMLElBQXBDO0FBQ0EsUUFBTTdNLENBQUMsR0FBR2tOLE1BQU0sQ0FBQ1IsSUFBUCxHQUFjdkcsaURBQUEsQ0FBVzBPLEtBQVgsRUFBa0JsVCxLQUFsQixDQUF4QjtBQUNBLFFBQU0xQixDQUFDLEdBQUdpTixNQUFNLENBQUNMLElBQVAsR0FBYzFHLGlEQUFBLENBQVcwTyxLQUFYLEVBQWtCalQsTUFBbEIsQ0FBeEI7QUFDQW9DLFVBQU0sQ0FBQ2hFLENBQVAsR0FBV0EsQ0FBWDtBQUNBZ0UsVUFBTSxDQUFDL0QsQ0FBUCxHQUFXQSxDQUFYO0FBQ0ErRCxVQUFNLENBQUNyQyxLQUFQLEdBQWVBLEtBQWY7QUFDQXFDLFVBQU0sQ0FBQ3BDLE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0g7O0FBQ0RrVCxPQUFLLENBQUM3QyxlQUFOLEdBQXdCQSxlQUF4QjtBQUNILENBdENELEVBc0NHNkMsS0FBSyxLQUFLQSxLQUFLLEdBQUcsRUFBYixDQXRDUjs7QUF1Q0EsSUFBTXpILFNBQVMsR0FBR2tELHNEQUFBLEVBQWxCO0FBQ08sSUFBSXdFLGNBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxjQUFWLEVBQTBCO0FBQ3ZCLFdBQVNqUixPQUFULENBQWlCK1EsS0FBakIsRUFBd0J0VCxNQUF4QixFQUFnQztBQUFBLFFBQ3BCeUksS0FEb0IsR0FDVnpJLE1BQU0sQ0FBQ3dDLGFBREcsQ0FDcEJpRyxLQURvQjtBQUU1QjhLLFNBQUssQ0FBQzdDLGVBQU4sQ0FBc0I0QyxLQUF0QixFQUE2QnhILFNBQTdCO0FBQ0EsV0FBT2tELHlEQUFBLENBQW1CbEQsU0FBbkIsRUFBOEJyRCxLQUE5QixDQUFQO0FBQ0g7O0FBQ0QrSyxnQkFBYyxDQUFDalIsT0FBZixHQUF5QkEsT0FBekI7O0FBQ0EsV0FBU1EsSUFBVCxDQUFjL0MsTUFBZCxFQUFzQjtBQUNsQkEsVUFBTSxDQUFDZ0QsVUFBUCxDQUFrQlQsT0FBbEIsQ0FBMEJVLEdBQTFCLENBQThCd1EsS0FBOUIsRUFBcUNsUixPQUFyQztBQUNBb08sa0VBQUEsQ0FBbUIzUSxNQUFuQjtBQUNIOztBQUNEd1QsZ0JBQWMsQ0FBQ3pRLElBQWYsR0FBc0JBLElBQXRCO0FBQ0gsQ0FaRCxFQVlHeVEsY0FBYyxLQUFLQSxjQUFjLEdBQUcsRUFBdEIsQ0FaakIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNZ0csZUFBZSxHQUFHLEVBQXhCO0FBQ08sSUFBSUMsbUJBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxtQkFBVixFQUErQjtBQUM1QixXQUFTM1gsTUFBVCxDQUFnQkcsU0FBaEIsRUFBMkJqQyxNQUEzQixFQUFtQztBQUFBLFFBQ3ZCMFosSUFEdUIsR0FDZHpYLFNBRGMsQ0FDdkJ5WCxJQUR1Qjs7QUFFL0IsUUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUDtBQUNIOztBQUo4QixnQ0FLSTFaLE1BQU0sQ0FBQytCLFFBQVAsQ0FBZ0JuQyxVQUFoQixFQUxKO0FBQUEsUUFLdkJyQixNQUx1Qix5QkFLdkJBLE1BTHVCO0FBQUEsUUFLZlAsY0FMZSx5QkFLZkEsY0FMZTs7QUFNL0IsUUFBSUEsY0FBYyxDQUFDUCxlQUFmLElBQWtDLENBQXRDLEVBQXlDO0FBQ3JDO0FBQ0g7O0FBQ0QsUUFBTWtjLEtBQUssR0FBR0QsSUFBSSxDQUFDN0ksS0FBTCxDQUFXLElBQVgsQ0FBZDtBQVQrQixRQVV2QnpRLEtBVnVCLEdBVTRCNkIsU0FWNUIsQ0FVdkI3QixLQVZ1QjtBQUFBLFFBVWhCQyxNQVZnQixHQVU0QjRCLFNBVjVCLENBVWhCNUIsTUFWZ0I7QUFBQSxRQVVSdVosVUFWUSxHQVU0QjNYLFNBVjVCLENBVVIyWCxVQVZRO0FBQUEsUUFVSUMsTUFWSixHQVU0QjVYLFNBVjVCLENBVUk0WCxNQVZKO0FBQUEsUUFVWUMsVUFWWixHQVU0QjdYLFNBVjVCLENBVVk2WCxVQVZaO0FBVy9CQyxzRUFBQSxDQUE4QkgsVUFBOUIsRUFBMENKLGVBQTFDO0FBQ0EsUUFBTVEsVUFBVSxHQUFHUixlQUFlLENBQUNTLElBQW5DO0FBQ0EsUUFBTUMsbUJBQW1CLEdBQUdWLGVBQWUsQ0FBQ1csYUFBNUM7QUFDQSxRQUFNQyxhQUFhLEdBQUdaLGVBQWUsQ0FBQ2EsT0FBdEM7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLCtDQUFBLENBQWFmLGVBQWUsQ0FBQ2MsSUFBN0IsQ0FBYjtBQUNBLFFBQU1sTCxTQUFTLEdBQUdwUCxNQUFNLENBQUNxRSxRQUFQLENBQWdCekUsVUFBaEIsRUFBbEI7QUFDQSxRQUFNNGEsU0FBUyxHQUFHRCxvREFBQSxDQUFrQkQsSUFBbEIsRUFBd0JkLGVBQXhCLEVBQXlDRyxLQUF6QyxDQUFsQjtBQUNBLFFBQU1jLFVBQVUsR0FBR0YscURBQUEsQ0FBbUJmLGVBQW5CLEVBQW9DRyxLQUFwQyxDQUFuQjtBQUNBLFFBQU1lLFNBQVMsR0FBR3RhLEtBQUgsYUFBR0EsS0FBSCxjQUFHQSxLQUFILEdBQVlvYSxTQUEzQjtBQUNBLFFBQU1HLFVBQVUsR0FBR3RhLE1BQUgsYUFBR0EsTUFBSCxjQUFHQSxNQUFILEdBQWFvYSxVQUE3QjtBQUNBLFFBQU1HLE9BQU8sR0FBR2hXLGlEQUFBLENBQVczQyxTQUFYLEVBQXNCeVksU0FBdEIsQ0FBaEI7QUFDQSxRQUFNRyxPQUFPLEdBQUdqVyxpREFBQSxDQUFXM0MsU0FBWCxFQUFzQjBZLFVBQXRCLENBQWhCO0FBQ0EsUUFBSWpjLENBQUMsR0FBRyxDQUFSOztBQUNBLFFBQUkyQixNQUFKLEVBQVk7QUFDUixVQUFNeWEsa0JBQWtCLEdBQUdmLHFFQUFBLENBQWlDUCxlQUFlLENBQUN1QixhQUFqRCxDQUEzQjtBQUNBcmMsT0FBQyxHQUFHLENBQUMyQixNQUFNLEdBQUdvYSxVQUFWLElBQXdCSyxrQkFBNUI7O0FBQ0EsVUFBSXBjLENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDUEEsU0FBQyxHQUFHLENBQUo7QUFDSDtBQUNKOztBQUNEMFEsYUFBUyxDQUFDNU8sWUFBVixDQUF1QmpDLE1BQU0sQ0FBQ3RCLENBQTlCLEVBQWlDc0IsTUFBTSxDQUFDdkIsQ0FBeEMsRUFBMkN1QixNQUFNLENBQUM4SCxDQUFsRCxFQUFxRDlILE1BQU0sQ0FBQytILENBQTVELEVBQStEL0gsTUFBTSxDQUFDTSxFQUF0RSxFQUEwRU4sTUFBTSxDQUFDTyxFQUFqRjtBQUNBc1EsYUFBUyxDQUFDQyxXQUFWLEdBQXdCLENBQXhCOztBQUNBLFFBQUl5SyxVQUFVLEtBQUs3RSxTQUFuQixFQUE4QjtBQUMxQjdGLGVBQVMsQ0FBQ3dGLFdBQVYsR0FBd0IsRUFBeEI7QUFDQXhGLGVBQVMsQ0FBQ3VGLFNBQVYsR0FBc0JsWSwyRUFBQSxDQUE0QnFkLFVBQTVCLEVBQXdDLENBQXhDLEVBQTJDOWIsY0FBM0MsQ0FBdEI7QUFDQW9SLGVBQVMsQ0FBQ29DLFNBQVY7QUFDQXBDLGVBQVMsQ0FBQ3FELElBQVYsQ0FBZW1JLE9BQWYsRUFBd0JDLE9BQXhCLEVBQWlDSCxTQUFqQyxFQUE0Q0MsVUFBNUM7QUFDQXZMLGVBQVMsQ0FBQ3NDLFNBQVY7QUFDQXRDLGVBQVMsQ0FBQ3dELElBQVY7QUFDSDs7QUFDRCxRQUFJaUgsTUFBTSxLQUFLNUUsU0FBZixFQUEwQjtBQUN0QjdGLGVBQVMsQ0FBQ3dGLFdBQVYsR0FBd0JuWSwyRUFBQSxDQUE0Qm9kLE1BQTVCLEVBQW9DLENBQXBDLEVBQXVDN2IsY0FBdkMsQ0FBeEI7QUFDQW9SLGVBQVMsQ0FBQ3VGLFNBQVYsR0FBc0IsRUFBdEI7QUFDQXZGLGVBQVMsQ0FBQ29DLFNBQVY7QUFDQXBDLGVBQVMsQ0FBQ3FELElBQVYsQ0FBZW1JLE9BQWYsRUFBd0JDLE9BQXhCLEVBQWlDSCxTQUFqQyxFQUE0Q0MsVUFBNUM7QUFDQXZMLGVBQVMsQ0FBQ3NDLFNBQVY7QUFDQXRDLGVBQVMsQ0FBQ3lELE1BQVY7QUFDSDs7QUFDRHpELGFBQVMsQ0FBQ2tMLElBQVYsR0FBaUJDLG9EQUFBLENBQWtCZixlQUFlLENBQUNjLElBQWxDLEVBQXdDTixVQUF4QyxDQUFqQjtBQUNBNUssYUFBUyxDQUFDNEwsWUFBVixHQUF5QixZQUF6QjtBQUNBNUwsYUFBUyxDQUFDd0YsV0FBVixHQUF3QixFQUF4QjtBQUNBeEYsYUFBUyxDQUFDdUYsU0FBVixHQUFzQmxZLDJFQUFBLENBQTRCK2MsZUFBZSxDQUFDN2MsS0FBNUMsRUFBbUQ2YyxlQUFlLENBQUM1YyxLQUFuRSxFQUEwRW9CLGNBQTFFLENBQXRCO0FBQ0FVLEtBQUMsSUFBSW1jLE9BQUw7O0FBQ0EsU0FBSyxJQUFJNWMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzBiLEtBQUssQ0FBQ3piLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ25DLFVBQU1nZCxJQUFJLEdBQUd0QixLQUFLLENBQUMxYixDQUFELENBQWxCO0FBQ0EsVUFBTTRXLFNBQVMsR0FBRzBGLG9EQUFBLENBQWtCRCxJQUFsQixFQUF3QmQsZUFBeEIsRUFBeUN5QixJQUF6QyxDQUFsQjtBQUNBLFVBQU1DLFVBQVUsR0FBR25CLDZEQUFBLENBQXlCUCxlQUFlLENBQUMyQixLQUF6QyxDQUFuQjtBQUNBLFVBQUkxYyxDQUFDLEdBQUcsQ0FBQ2ljLFNBQVMsR0FBRzdGLFNBQWIsSUFBMEJxRyxVQUFsQzs7QUFDQSxVQUFJemMsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNQQSxTQUFDLEdBQUcsQ0FBSjtBQUNIOztBQUNEQSxPQUFDLElBQUltYyxPQUFMOztBQUNBLFdBQUssSUFBSVEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsSUFBSSxDQUFDL2MsTUFBekIsRUFBaUNrZCxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFlBQU1DLEtBQUssR0FBR0osSUFBSSxDQUFDSyxNQUFMLENBQVlGLENBQVosQ0FBZDtBQUNBLFlBQU1HLE1BQU0sR0FBR04sSUFBSSxDQUFDSyxNQUFMLENBQVlGLENBQUMsR0FBRyxDQUFoQixDQUFmO0FBQ0EsWUFBTUksT0FBTyxHQUFHakIsa0RBQUEsQ0FBZ0JELElBQWhCLEVBQXNCTixVQUF0QixFQUFrQ3FCLEtBQWxDLEVBQXlDRSxNQUF6QyxDQUFoQjtBQUNBbk0saUJBQVMsQ0FBQ3FNLFFBQVYsQ0FBbUJKLEtBQW5CLEVBQTBCNWMsQ0FBMUIsRUFBNkJDLENBQUMsR0FBR3NiLFVBQWpDO0FBQ0F2YixTQUFDLElBQUkrYyxPQUFPLEdBQUd0QixtQkFBZjtBQUNIOztBQUNEeGIsT0FBQyxJQUFJc2IsVUFBVSxHQUFHSSxhQUFsQjtBQUNIO0FBQ0o7O0FBQ0RYLHFCQUFtQixDQUFDM1gsTUFBcEIsR0FBNkJBLE1BQTdCOztBQUNBLFdBQVNpQixJQUFULENBQWMvQyxNQUFkLEVBQXNCO0FBQ2xCMGIseURBQUEsQ0FBbUIxYixNQUFuQjtBQUNBQSxVQUFNLENBQUNnRCxVQUFQLENBQWtCbEIsTUFBbEIsQ0FBeUJtQixHQUF6QixDQUE2QjBZLHVDQUE3QixFQUFtQzdaLE1BQW5DO0FBQ0g7O0FBQ0QyWCxxQkFBbUIsQ0FBQzFXLElBQXBCLEdBQTJCQSxJQUEzQjtBQUNILENBaEZELEVBZ0ZHMFcsbUJBQW1CLEtBQUtBLG1CQUFtQixHQUFHLEVBQTNCLENBaEZ0QixFOzs7Ozs7Ozs7Ozs7OztBQ1BBLElBQU10WixNQUFNLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0EsSUFBTWxCLE9BQU8sR0FBRzJCLE1BQU0sQ0FBQ1AsVUFBUCxDQUFrQixJQUFsQixDQUFoQjtBQUNPLElBQU1nYyxFQUFFLEdBQUcsSUFBWDtBQUNQLElBQU1DLEtBQUssR0FBRyxJQUFJdFUsR0FBSixFQUFkO0FBQ08sSUFBSWdULElBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxJQUFWLEVBQWdCO0FBQ2IsV0FBU3VCLFlBQVQsQ0FBc0J4QixJQUF0QixFQUE0QkwsSUFBNUIsRUFBa0M7QUFDOUIscUJBQVVBLElBQVYsZ0JBQW9CSyxJQUFwQjtBQUNIOztBQUNEQyxNQUFJLENBQUN1QixZQUFMLEdBQW9CQSxZQUFwQjs7QUFDQSxXQUFTQyxXQUFULENBQXFCekIsSUFBckIsRUFBMkJMLElBQTNCLEVBQWlDUCxJQUFqQyxFQUF1QztBQUNuQ2xiLFdBQU8sQ0FBQzhiLElBQVIsR0FBZXdCLFlBQVksQ0FBQ3hCLElBQUQsRUFBT0wsSUFBUCxDQUEzQjtBQUNBLFdBQU96YixPQUFPLENBQUN1ZCxXQUFSLENBQW9CckMsSUFBcEIsRUFBMEJ0WixLQUFqQztBQUNIOztBQUNEbWEsTUFBSSxDQUFDd0IsV0FBTCxHQUFtQkEsV0FBbkI7O0FBQ0EsV0FBU0MsWUFBVCxDQUFzQjFCLElBQXRCLEVBQTRCMkIsS0FBNUIsRUFBa0M7QUFDOUIsUUFBSTdiLEtBQUssR0FBR2thLElBQUksQ0FBQzRCLE1BQUwsQ0FBWW5VLEdBQVosQ0FBZ0JrVSxLQUFoQixDQUFaOztBQUNBLFFBQUksQ0FBQzdiLEtBQUwsRUFBWTtBQUNSQSxXQUFLLEdBQUcyYixXQUFXLENBQUN6QixJQUFJLENBQUM2QixJQUFOLEVBQVlQLEVBQVosRUFBZ0JLLEtBQWhCLENBQW5CO0FBQ0EzQixVQUFJLENBQUM0QixNQUFMLENBQVlqWixHQUFaLENBQWdCZ1osS0FBaEIsRUFBc0I3YixLQUF0QjtBQUNIOztBQUNELFdBQU9BLEtBQVA7QUFDSDs7QUFDRG1hLE1BQUksQ0FBQ3lCLFlBQUwsR0FBb0JBLFlBQXBCOztBQUNBLFdBQVNJLFVBQVQsQ0FBb0I5QixJQUFwQixFQUEwQmUsS0FBMUIsRUFBaUNFLE1BQWpDLEVBQXlDO0FBQ3JDLFFBQU1jLElBQUksR0FBR2hCLEtBQUssR0FBR0UsTUFBckI7QUFDQSxRQUFJZSxPQUFPLEdBQUdoQyxJQUFJLENBQUNpQyxRQUFMLENBQWN4VSxHQUFkLENBQWtCc1UsSUFBbEIsQ0FBZDs7QUFDQSxRQUFJLENBQUNDLE9BQUwsRUFBYztBQUNWLFVBQU1FLFdBQVcsR0FBR1IsWUFBWSxDQUFDMUIsSUFBRCxFQUFPaUIsTUFBUCxDQUFoQztBQUNBLFVBQU1rQixVQUFVLEdBQUdWLFdBQVcsQ0FBQ3pCLElBQUksQ0FBQzZCLElBQU4sRUFBWVAsRUFBWixFQUFnQlAsS0FBSyxHQUFHRSxNQUF4QixDQUE5QjtBQUNBZSxhQUFPLEdBQUdHLFVBQVUsR0FBR0QsV0FBdkI7QUFDQWxDLFVBQUksQ0FBQ2lDLFFBQUwsQ0FBY3RaLEdBQWQsQ0FBa0JvWixJQUFsQixFQUF3QkMsT0FBeEI7QUFDSDs7QUFDRCxXQUFPQSxPQUFQO0FBQ0g7O0FBQ0QvQixNQUFJLENBQUM2QixVQUFMLEdBQWtCQSxVQUFsQjs7QUFDQSxXQUFTTSxVQUFULENBQW9CcEMsSUFBcEIsRUFBMEJMLElBQTFCLEVBQWdDb0IsS0FBaEMsRUFBdUNFLE1BQXZDLEVBQStDO0FBQzNDLFFBQU05VSxLQUFLLEdBQUd3VCxJQUFJLEdBQUcyQixFQUFyQjtBQUNBLFFBQU14YixLQUFLLEdBQUc0YixZQUFZLENBQUMxQixJQUFELEVBQU9lLEtBQVAsQ0FBMUI7O0FBQ0EsUUFBSSxDQUFDRSxNQUFMLEVBQWE7QUFDVCxhQUFPbmIsS0FBSyxHQUFHcUcsS0FBZjtBQUNIOztBQUNELFFBQU02VixPQUFPLEdBQUdGLFVBQVUsQ0FBQzlCLElBQUQsRUFBT2UsS0FBUCxFQUFjRSxNQUFkLENBQTFCO0FBQ0EsV0FBT2UsT0FBTyxHQUFHN1YsS0FBakI7QUFDSDs7QUFDRDhULE1BQUksQ0FBQ21DLFVBQUwsR0FBa0JBLFVBQWxCOztBQUNBLFdBQVNDLE9BQVQsQ0FBaUJSLElBQWpCLEVBQXVCO0FBQ25CLFFBQUk3QixJQUFJLEdBQUd1QixLQUFLLENBQUM5VCxHQUFOLENBQVVvVSxJQUFWLENBQVg7O0FBQ0EsUUFBSSxDQUFDN0IsSUFBTCxFQUFXO0FBQ1BBLFVBQUksR0FBRztBQUNINkIsWUFBSSxFQUFKQSxJQURHO0FBRUhELGNBQU0sRUFBRSxJQUFJM1UsR0FBSixFQUZMO0FBR0hnVixnQkFBUSxFQUFFLElBQUloVixHQUFKO0FBSFAsT0FBUDtBQUtBc1UsV0FBSyxDQUFDNVksR0FBTixDQUFVa1osSUFBVixFQUFnQjdCLElBQWhCO0FBQ0g7O0FBQ0QsV0FBT0EsSUFBUDtBQUNIOztBQUNEQyxNQUFJLENBQUNvQyxPQUFMLEdBQWVBLE9BQWY7O0FBQ0EsV0FBU0MsWUFBVCxDQUFzQnRDLElBQXRCLEVBQTRCdUMsTUFBNUIsRUFBb0M1QixJQUFwQyxFQUEwQztBQUN0QyxRQUFJN2EsS0FBSyxHQUFHLENBQVo7O0FBQ0EsU0FBSyxJQUFJbkMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2dkLElBQUksQ0FBQy9jLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFVBQU1vZCxLQUFLLEdBQUdKLElBQUksQ0FBQ0ssTUFBTCxDQUFZcmQsQ0FBWixDQUFkO0FBQ0EsVUFBTXNkLE1BQU0sR0FBR04sSUFBSSxDQUFDSyxNQUFMLENBQVlyZCxDQUFDLEdBQUcsQ0FBaEIsQ0FBZjtBQUNBLFVBQU11ZCxPQUFPLEdBQUdrQixVQUFVLENBQUNwQyxJQUFELEVBQU91QyxNQUFNLENBQUM1QyxJQUFkLEVBQW9Cb0IsS0FBcEIsRUFBMkJFLE1BQTNCLENBQTFCO0FBQ0FuYixXQUFLLElBQUlvYixPQUFUO0FBQ0g7O0FBQ0QsUUFBSXFCLE1BQU0sQ0FBQzFDLGFBQVAsSUFBd0JjLElBQUksQ0FBQy9jLE1BQUwsR0FBYyxDQUExQyxFQUE2QztBQUN6Q2tDLFdBQUssSUFBSXljLE1BQU0sQ0FBQzFDLGFBQVAsSUFBd0JjLElBQUksQ0FBQy9jLE1BQUwsR0FBYyxDQUF0QyxDQUFUO0FBQ0g7O0FBQ0QsV0FBT2tDLEtBQVA7QUFDSDs7QUFDRG1hLE1BQUksQ0FBQ3FDLFlBQUwsR0FBb0JBLFlBQXBCOztBQUNBLFdBQVNFLFlBQVQsQ0FBc0J4QyxJQUF0QixFQUE0QnVDLE1BQTVCLEVBQW9DbEQsS0FBcEMsRUFBMkM7QUFDdkMsUUFBSXZaLEtBQUssR0FBRyxDQUFaOztBQUNBLFNBQUssSUFBSW5DLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcwYixLQUFLLENBQUN6YixNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxVQUFNZ2QsSUFBSSxHQUFHdEIsS0FBSyxDQUFDMWIsQ0FBRCxDQUFsQjtBQUNBLFVBQU00VyxTQUFTLEdBQUcrSCxZQUFZLENBQUN0QyxJQUFELEVBQU91QyxNQUFQLEVBQWU1QixJQUFmLENBQTlCOztBQUNBLFVBQUk3YSxLQUFLLEdBQUd5VSxTQUFaLEVBQXVCO0FBQ25CelUsYUFBSyxHQUFHeVUsU0FBUjtBQUNIO0FBQ0o7O0FBQ0QsV0FBT3pVLEtBQVA7QUFDSDs7QUFDRG1hLE1BQUksQ0FBQ3VDLFlBQUwsR0FBb0JBLFlBQXBCOztBQUNBLFdBQVNDLGFBQVQsQ0FBdUJGLE1BQXZCLEVBQStCbEQsS0FBL0IsRUFBc0M7QUFDbEMsUUFBSXRaLE1BQU0sR0FBR3djLE1BQU0sQ0FBQzVDLElBQVAsR0FBY04sS0FBSyxDQUFDemIsTUFBakM7O0FBQ0EsUUFBSTJlLE1BQU0sQ0FBQ3hDLE9BQVAsSUFBa0JWLEtBQUssQ0FBQ3piLE1BQU4sR0FBZSxDQUFyQyxFQUF3QztBQUNwQ21DLFlBQU0sSUFBSXdjLE1BQU0sQ0FBQ3hDLE9BQVAsSUFBa0JWLEtBQUssQ0FBQ3piLE1BQU4sR0FBZSxDQUFqQyxDQUFWO0FBQ0g7O0FBQ0QsV0FBT21DLE1BQVA7QUFDSDs7QUFDRGthLE1BQUksQ0FBQ3dDLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0gsQ0F4RkQsRUF3Rkd4QyxJQUFJLEtBQUtBLElBQUksR0FBRyxFQUFaLENBeEZQLEU7Ozs7Ozs7Ozs7Ozs7QUNMTyxJQUFJUixVQUFKOztBQUNQLENBQUMsVUFBVUEsVUFBVixFQUFzQjtBQUNuQkEsWUFBVSxDQUFDaUQsaUJBQVgsR0FBK0I7QUFDM0IxQyxRQUFJLEVBQUUsT0FEcUI7QUFFM0JMLFFBQUksRUFBRSxFQUZxQjtBQUczQnRkLFNBQUssRUFBRSxDQUhvQjtBQUkzQkMsU0FBSyxFQUFFLENBSm9CO0FBSzNCcWdCLFFBQUksRUFBRSxLQUxxQjtBQU0zQkMsVUFBTSxFQUFFLEtBTm1CO0FBTzNCQyxhQUFTLEVBQUUsS0FQZ0I7QUFRM0JoRCxpQkFBYSxFQUFFLENBUlk7QUFTM0JFLFdBQU8sRUFBRSxDQVRrQjtBQVUzQmMsU0FBSyxFQUFFLE1BVm9CO0FBVzNCSixpQkFBYSxFQUFFO0FBWFksR0FBL0I7O0FBYUEsV0FBU3FDLGtCQUFULENBQTRCN08sTUFBNUIsRUFBb0M5TCxNQUFwQyxFQUE0QztBQUFBOztBQUN4Q0EsVUFBTSxDQUFDNlgsSUFBUCxtQkFBYy9MLE1BQWQsYUFBY0EsTUFBZCx1QkFBY0EsTUFBTSxDQUFFK0wsSUFBdEIsdURBQThCUCxVQUFVLENBQUNpRCxpQkFBWCxDQUE2QjFDLElBQTNEO0FBQ0E3WCxVQUFNLENBQUN3WCxJQUFQLG1CQUFjMUwsTUFBZCxhQUFjQSxNQUFkLHVCQUFjQSxNQUFNLENBQUUwTCxJQUF0Qix1REFBOEJGLFVBQVUsQ0FBQ2lELGlCQUFYLENBQTZCL0MsSUFBM0Q7QUFDQXhYLFVBQU0sQ0FBQzlGLEtBQVAsb0JBQWU0UixNQUFmLGFBQWVBLE1BQWYsdUJBQWVBLE1BQU0sQ0FBRTVSLEtBQXZCLHlEQUFnQ29kLFVBQVUsQ0FBQ2lELGlCQUFYLENBQTZCcmdCLEtBQTdEO0FBQ0E4RixVQUFNLENBQUM3RixLQUFQLG9CQUFlMlIsTUFBZixhQUFlQSxNQUFmLHVCQUFlQSxNQUFNLENBQUUzUixLQUF2Qix5REFBZ0NtZCxVQUFVLENBQUNpRCxpQkFBWCxDQUE2QnBnQixLQUE3RDtBQUNBNkYsVUFBTSxDQUFDd2EsSUFBUCxtQkFBYzFPLE1BQWQsYUFBY0EsTUFBZCx1QkFBY0EsTUFBTSxDQUFFME8sSUFBdEIsdURBQThCbEQsVUFBVSxDQUFDaUQsaUJBQVgsQ0FBNkJDLElBQTNEO0FBQ0F4YSxVQUFNLENBQUN5YSxNQUFQLHFCQUFnQjNPLE1BQWhCLGFBQWdCQSxNQUFoQix1QkFBZ0JBLE1BQU0sQ0FBRTJPLE1BQXhCLDJEQUFrQ25ELFVBQVUsQ0FBQ2lELGlCQUFYLENBQTZCRSxNQUEvRDtBQUNBemEsVUFBTSxDQUFDMGEsU0FBUCx3QkFBbUI1TyxNQUFuQixhQUFtQkEsTUFBbkIsdUJBQW1CQSxNQUFNLENBQUU0TyxTQUEzQixpRUFBd0NwRCxVQUFVLENBQUNpRCxpQkFBWCxDQUE2QkcsU0FBckU7QUFDQTFhLFVBQU0sQ0FBQzBYLGFBQVAsNEJBQXVCNUwsTUFBdkIsYUFBdUJBLE1BQXZCLHVCQUF1QkEsTUFBTSxDQUFFNEwsYUFBL0IseUVBQWdESixVQUFVLENBQUNpRCxpQkFBWCxDQUE2QjdDLGFBQTdFO0FBQ0ExWCxVQUFNLENBQUM0WCxPQUFQLHNCQUFpQjlMLE1BQWpCLGFBQWlCQSxNQUFqQix1QkFBaUJBLE1BQU0sQ0FBRThMLE9BQXpCLDZEQUFvQ04sVUFBVSxDQUFDaUQsaUJBQVgsQ0FBNkIzQyxPQUFqRTtBQUNBNVgsVUFBTSxDQUFDMFksS0FBUCxvQkFBZTVNLE1BQWYsYUFBZUEsTUFBZix1QkFBZUEsTUFBTSxDQUFFNE0sS0FBdkIseURBQWdDcEIsVUFBVSxDQUFDaUQsaUJBQVgsQ0FBNkI3QixLQUE3RDtBQUNBMVksVUFBTSxDQUFDc1ksYUFBUCw0QkFBdUJ4TSxNQUF2QixhQUF1QkEsTUFBdkIsdUJBQXVCQSxNQUFNLENBQUV3TSxhQUEvQix5RUFBZ0RoQixVQUFVLENBQUNpRCxpQkFBWCxDQUE2QmpDLGFBQTdFO0FBQ0g7O0FBQ0RoQixZQUFVLENBQUNxRCxrQkFBWCxHQUFnQ0Esa0JBQWhDOztBQUNBLFdBQVNDLGFBQVQsQ0FBdUJsQyxLQUF2QixFQUE4QjtBQUMxQixZQUFRQSxLQUFSO0FBQ0ksV0FBSyxNQUFMO0FBQWEsZUFBTyxDQUFQOztBQUNiLFdBQUssUUFBTDtBQUFlLGVBQU8sR0FBUDs7QUFDZixXQUFLLE9BQUw7QUFBYyxlQUFPLENBQVA7O0FBQ2Q7QUFBUyxlQUFPLENBQVA7QUFKYjtBQU1IOztBQUNEcEIsWUFBVSxDQUFDc0QsYUFBWCxHQUEyQkEsYUFBM0I7O0FBQ0EsV0FBU0MscUJBQVQsQ0FBK0JuQyxLQUEvQixFQUFzQztBQUNsQyxZQUFRQSxLQUFSO0FBQ0ksV0FBSyxLQUFMO0FBQVksZUFBTyxDQUFQOztBQUNaLFdBQUssUUFBTDtBQUFlLGVBQU8sR0FBUDs7QUFDZixXQUFLLFFBQUw7QUFBZSxlQUFPLENBQVA7O0FBQ2Y7QUFBUyxlQUFPLENBQVA7QUFKYjtBQU1IOztBQUNEcEIsWUFBVSxDQUFDdUQscUJBQVgsR0FBbUNBLHFCQUFuQztBQUNILENBOUNELEVBOENHdkQsVUFBVSxLQUFLQSxVQUFVLEdBQUcsRUFBbEIsQ0E5Q2IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNNEIsSUFBSSxHQUFHLE1BQWI7QUFDUCxJQUFNbkMsZUFBZSxHQUFHLEVBQXhCO0FBQ08sSUFBSStELElBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxJQUFWLEVBQWdCO0FBQ2IsV0FBUzdNLGVBQVQsQ0FBeUJ6TyxTQUF6QixFQUFvQzBKLE1BQXBDLEVBQTRDO0FBQUEsUUFDaEMrTixJQURnQyxHQUN2QnpYLFNBRHVCLENBQ2hDeVgsSUFEZ0M7O0FBRXhDLFFBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1AxSywrREFBQSxDQUFtQnJELE1BQW5CO0FBQ0E7QUFDSDs7QUFDRCxRQUFNZ08sS0FBSyxHQUFHRCxJQUFJLENBQUM3SSxLQUFMLENBQVcsSUFBWCxDQUFkO0FBTndDLFFBT2xDelEsS0FQa0MsR0FPaEI2QixTQVBnQixDQU9sQzdCLEtBUGtDO0FBQUEsUUFPM0JDLE1BUDJCLEdBT2hCNEIsU0FQZ0IsQ0FPM0I1QixNQVAyQjtBQUFBLFFBUWhDdVosVUFSZ0MsR0FRakIzWCxTQVJpQixDQVFoQzJYLFVBUmdDO0FBU3hDRyxzRUFBQSxDQUE4QkgsVUFBOUIsRUFBMENKLGVBQTFDOztBQUNBLFFBQUksQ0FBQ3BaLEtBQUwsRUFBWTtBQUNSLFVBQU1rYSxJQUFJLEdBQUdDLCtDQUFBLENBQWFmLGVBQWUsQ0FBQ2MsSUFBN0IsQ0FBYjtBQUNBbGEsV0FBSyxHQUFHbWEsb0RBQUEsQ0FBa0JELElBQWxCLEVBQXdCZCxlQUF4QixFQUF5Q0csS0FBekMsQ0FBUjtBQUNIOztBQUNELFFBQUksQ0FBQ3RaLE1BQUwsRUFBYTtBQUNUQSxZQUFNLEdBQUdrYSxxREFBQSxDQUFtQmYsZUFBbkIsRUFBb0NHLEtBQXBDLENBQVQ7QUFDSDs7QUFDRCxRQUFNbGIsQ0FBQyxHQUFHbUcsaURBQUEsQ0FBVzNDLFNBQVgsRUFBc0I3QixLQUF0QixDQUFWO0FBQ0EsUUFBTTFCLENBQUMsR0FBR2tHLGlEQUFBLENBQVczQyxTQUFYLEVBQXNCNUIsTUFBdEIsQ0FBVjtBQUNBc0wsVUFBTSxDQUFDbE4sQ0FBUCxHQUFXQSxDQUFYO0FBQ0FrTixVQUFNLENBQUNqTixDQUFQLEdBQVdBLENBQVg7QUFDQWlOLFVBQU0sQ0FBQ3ZMLEtBQVAsR0FBZUEsS0FBZjtBQUNBdUwsVUFBTSxDQUFDdEwsTUFBUCxHQUFnQkEsTUFBaEI7QUFDSDs7QUFDRGtkLE1BQUksQ0FBQzdNLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0gsQ0ExQkQsRUEwQkc2TSxJQUFJLEtBQUtBLElBQUksR0FBRyxFQUFaLENBMUJQOztBQTJCQSxJQUFNNVIsTUFBTSxHQUFHcUQsc0RBQUEsRUFBZjtBQUNPLElBQUkwTSxhQUFKOztBQUNQLENBQUMsVUFBVUEsYUFBVixFQUF5QjtBQUN0QixXQUFTblosT0FBVCxDQUFpQm1YLElBQWpCLEVBQXVCMVosTUFBdkIsRUFBK0I7QUFBQSxRQUNuQnlJLEtBRG1CLEdBQ1R6SSxNQUFNLENBQUN3QyxhQURFLENBQ25CaUcsS0FEbUI7QUFFM0I4VSxRQUFJLENBQUM3TSxlQUFMLENBQXFCZ0osSUFBckIsRUFBMkIvTixNQUEzQjtBQUNBLFdBQU9xRCx5REFBQSxDQUFtQnJELE1BQW5CLEVBQTJCbEQsS0FBM0IsQ0FBUDtBQUNIOztBQUNEaVQsZUFBYSxDQUFDblosT0FBZCxHQUF3QkEsT0FBeEI7O0FBQ0EsV0FBU1EsSUFBVCxDQUFjL0MsTUFBZCxFQUFzQjtBQUNsQkEsVUFBTSxDQUFDZ0QsVUFBUCxDQUFrQlQsT0FBbEIsQ0FBMEJVLEdBQTFCLENBQThCMFksSUFBOUIsRUFBb0NwWixPQUFwQztBQUNIOztBQUNEbVosZUFBYSxDQUFDM1ksSUFBZCxHQUFxQkEsSUFBckI7QUFDSCxDQVhELEVBV0cyWSxhQUFhLEtBQUtBLGFBQWEsR0FBRyxFQUFyQixDQVhoQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENPLElBQU04QixNQUFNLEdBQUcsUUFBZjtBQUNBLElBQU1DLFNBQVMsR0FBRyxXQUFsQjtBQUNBLElBQU1DLFlBQVksR0FBRyxhQUFyQjtBQUNBLElBQU1DLGFBQWEsR0FBRyxjQUF0QjtBQUNBLElBQU1DLEtBQUssR0FBRyxPQUFkO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFNBQWpCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFVBQWxCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFlBQXBCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFlBQXBCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQW5CO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFdBQXRCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLFlBQXZCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGVBQXZCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGdCQUF4QjtBQUNBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxZQUFwQjtBQUNBLElBQU1DLFlBQVksR0FBRyxhQUFyQjtBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxZQUFwQjtBQUNBLElBQU1DLElBQUksR0FBRyxNQUFiO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFFBQWhCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFNBQWpCO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLFFBQWY7QUFDQSxJQUFNQyxTQUFTLEdBQUcsVUFBbEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxJQUFNQyxNQUFNLDJDQUNkL0IsTUFEYyxFQUNMLFVBQUN6VyxLQUFEO0FBQUEsU0FBV0EsS0FBWDtBQUFBLENBREssNEJBRWQwVyxTQUZjLEVBRUYsVUFBQzFXLEtBQUQsRUFBVztBQUNwQixNQUFJLENBQUNBLEtBQUssSUFBSSxDQUFWLElBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsV0FBTyxNQUFNQSxLQUFOLEdBQWNBLEtBQXJCO0FBQ0g7O0FBQ0QsU0FBTyxDQUFDLEdBQUQsSUFBUSxFQUFFQSxLQUFGLElBQVdBLEtBQUssR0FBRyxDQUFuQixJQUF3QixDQUFoQyxDQUFQO0FBQ0gsQ0FQYyw0QkFRZDJXLFlBUmMsRUFRQyxVQUFDM1csS0FBRDtBQUFBLFNBQVlBLEtBQUssR0FBR0EsS0FBcEI7QUFBQSxDQVJELDRCQVNkNFcsYUFUYyxFQVNFLFVBQUM1VyxLQUFEO0FBQUEsU0FBWUEsS0FBSyxJQUFJLElBQUlBLEtBQVIsQ0FBakI7QUFBQSxDQVRGLDRCQVVkNlcsS0FWYyxFQVVOLFVBQUM3VyxLQUFELEVBQVc7QUFDaEIsTUFBSSxDQUFDQSxLQUFLLElBQUksQ0FBVixJQUFlLENBQW5CLEVBQXNCO0FBQ2xCLFdBQU8sTUFBTUEsS0FBTixHQUFjQSxLQUFkLEdBQXNCQSxLQUE3QjtBQUNIOztBQUNELFNBQU8sT0FBTyxDQUFDQSxLQUFLLElBQUksQ0FBVixJQUFlQSxLQUFmLEdBQXVCQSxLQUF2QixHQUErQixDQUF0QyxDQUFQO0FBQ0gsQ0FmYyw0QkFnQmQ4VyxRQWhCYyxFQWdCSCxVQUFDOVcsS0FBRDtBQUFBLFNBQVlBLEtBQUssR0FBR0EsS0FBUixHQUFnQkEsS0FBNUI7QUFBQSxDQWhCRyw0QkFpQmQrVyxTQWpCYyxFQWlCRixVQUFDL1csS0FBRDtBQUFBLFNBQVksRUFBRUEsS0FBRixHQUFVQSxLQUFWLEdBQWtCQSxLQUFsQixHQUEwQixDQUF0QztBQUFBLENBakJFLDRCQWtCZGdYLE9BbEJjLEVBa0JKLFVBQUNoWCxLQUFELEVBQVc7QUFDbEIsTUFBSSxDQUFDQSxLQUFLLElBQUksQ0FBVixJQUFlLENBQW5CLEVBQXNCO0FBQ2xCLFdBQU8sTUFBTUEsS0FBTixHQUFjQSxLQUFkLEdBQXNCQSxLQUF0QixHQUE4QkEsS0FBckM7QUFDSDs7QUFDRCxTQUFPLENBQUMsR0FBRCxJQUFRLENBQUNBLEtBQUssSUFBSSxDQUFWLElBQWVBLEtBQWYsR0FBdUJBLEtBQXZCLEdBQStCQSxLQUEvQixHQUF1QyxDQUEvQyxDQUFQO0FBQ0gsQ0F2QmMsNEJBd0JkaVgsVUF4QmMsRUF3QkQsVUFBQ2pYLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLEdBQUdBLEtBQVIsR0FBZ0JBLEtBQWhCLEdBQXdCQSxLQUFwQztBQUFBLENBeEJDLDRCQXlCZGtYLFdBekJjLEVBeUJBLFVBQUNsWCxLQUFEO0FBQUEsU0FBWSxJQUFJLEVBQUVBLEtBQUYsR0FBVUEsS0FBVixHQUFrQkEsS0FBbEIsR0FBMEJBLEtBQTFDO0FBQUEsQ0F6QkEsNEJBMEJkbVgsT0ExQmMsRUEwQkosVUFBQ25YLEtBQUQsRUFBVztBQUNsQixNQUFJLENBQUNBLEtBQUssSUFBSSxDQUFWLElBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsV0FBTyxNQUFNQSxLQUFOLEdBQWNBLEtBQWQsR0FBc0JBLEtBQXRCLEdBQThCQSxLQUE5QixHQUFzQ0EsS0FBN0M7QUFDSDs7QUFDRCxTQUFPLE9BQU8sQ0FBQ0EsS0FBSyxJQUFJLENBQVYsSUFBZUEsS0FBZixHQUF1QkEsS0FBdkIsR0FBK0JBLEtBQS9CLEdBQXVDQSxLQUF2QyxHQUErQyxDQUF0RCxDQUFQO0FBQ0gsQ0EvQmMsNEJBZ0Nkb1gsVUFoQ2MsRUFnQ0QsVUFBQ3BYLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLEdBQUdBLEtBQVIsR0FBZ0JBLEtBQWhCLEdBQXdCQSxLQUF4QixHQUFnQ0EsS0FBNUM7QUFBQSxDQWhDQyw0QkFpQ2RxWCxXQWpDYyxFQWlDQSxVQUFDclgsS0FBRDtBQUFBLFNBQVksRUFBRUEsS0FBRixHQUFVQSxLQUFWLEdBQWtCQSxLQUFsQixHQUEwQkEsS0FBMUIsR0FBa0NBLEtBQWxDLEdBQTBDLENBQXREO0FBQUEsQ0FqQ0EsNEJBa0Nkc1gsVUFsQ2MsRUFrQ0QsVUFBQ3RYLEtBQUQ7QUFBQSxTQUFZLE9BQU8sSUFBSWhJLElBQUksQ0FBQzRILEdBQUwsQ0FBUzVILElBQUksQ0FBQ29TLEVBQUwsR0FBVXBLLEtBQW5CLENBQVgsQ0FBWjtBQUFBLENBbENDLDRCQW1DZHVYLGFBbkNjLEVBbUNFLFVBQUN2WCxLQUFEO0FBQUEsU0FBWSxJQUFJaEksSUFBSSxDQUFDNEgsR0FBTCxDQUFVSSxLQUFLLEdBQUdoSSxJQUFJLENBQUNvUyxFQUFkLEdBQW9CLENBQTdCLENBQWhCO0FBQUEsQ0FuQ0YsNEJBb0Nkb04sY0FwQ2MsRUFvQ0csVUFBQ3hYLEtBQUQ7QUFBQSxTQUFZaEksSUFBSSxDQUFDNkgsR0FBTCxDQUFVRyxLQUFLLEdBQUdoSSxJQUFJLENBQUNvUyxFQUFkLEdBQW9CLENBQTdCLENBQVo7QUFBQSxDQXBDSCw0QkFxQ2RxTixXQXJDYyxFQXFDQSxVQUFDelgsS0FBRCxFQUFXO0FBQ3RCLE1BQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2IsV0FBTyxDQUFQO0FBQ0g7O0FBQ0QsTUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixXQUFPLENBQVA7QUFDSDs7QUFDRCxNQUFJLENBQUNBLEtBQUssSUFBSSxDQUFWLElBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsV0FBTyxNQUFNaEksSUFBSSxDQUFDeWdCLEdBQUwsQ0FBUyxJQUFULEVBQWV6WSxLQUFLLEdBQUcsQ0FBdkIsQ0FBYjtBQUNIOztBQUNELFNBQU8sT0FBTyxDQUFDaEksSUFBSSxDQUFDeWdCLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFELElBQU96WSxLQUFLLEdBQUcsQ0FBZixDQUFaLENBQUQsR0FBa0MsQ0FBekMsQ0FBUDtBQUNILENBaERjLDRCQWlEZDBYLGNBakRjLEVBaURHLFVBQUMxWCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxLQUFLLENBQVYsR0FBYyxDQUFkLEdBQWtCaEksSUFBSSxDQUFDeWdCLEdBQUwsQ0FBUyxJQUFULEVBQWV6WSxLQUFLLEdBQUcsQ0FBdkIsQ0FBOUI7QUFBQSxDQWpESCw0QkFrRGQyWCxlQWxEYyxFQWtESSxVQUFDM1gsS0FBRDtBQUFBLFNBQVlBLEtBQUssS0FBSyxDQUFWLEdBQWMsQ0FBZCxHQUFrQixJQUFJaEksSUFBSSxDQUFDeWdCLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFELEdBQU16WSxLQUFsQixDQUFsQztBQUFBLENBbERKLDRCQW1EZDRYLFFBbkRjLEVBbURILFVBQUM1WCxLQUFELEVBQVc7QUFDbkIsTUFBSSxDQUFDQSxLQUFLLElBQUksQ0FBVixJQUFlLENBQW5CLEVBQXNCO0FBQ2xCLFdBQU8sQ0FBQyxHQUFELElBQVFoSSxJQUFJLENBQUNtUCxJQUFMLENBQVUsSUFBSW5ILEtBQUssR0FBR0EsS0FBdEIsSUFBK0IsQ0FBdkMsQ0FBUDtBQUNIOztBQUNELFNBQU8sT0FBT2hJLElBQUksQ0FBQ21QLElBQUwsQ0FBVSxJQUFJLENBQUNuSCxLQUFLLElBQUksQ0FBVixJQUFlQSxLQUE3QixJQUFzQyxDQUE3QyxDQUFQO0FBQ0gsQ0F4RGMsNEJBeURkNlgsV0F6RGMsRUF5REEsVUFBQzdYLEtBQUQ7QUFBQSxTQUFZLElBQUloSSxJQUFJLENBQUNtUCxJQUFMLENBQVUsSUFBSW5ILEtBQUssR0FBR0EsS0FBdEIsQ0FBaEI7QUFBQSxDQXpEQSw0QkEwRGQ4WCxZQTFEYyxFQTBEQyxVQUFDOVgsS0FBRDtBQUFBLFNBQVdoSSxJQUFJLENBQUNtUCxJQUFMLENBQVUsSUFBSSxFQUFFbkgsS0FBRixHQUFVQSxLQUF4QixDQUFYO0FBQUEsQ0ExREQsNEJBMkRkK1gsT0EzRGMsRUEyREosVUFBQy9YLEtBQUQsRUFBVztBQUNsQixNQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLFdBQU8sQ0FBUDtBQUNIOztBQUNELE1BQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2IsV0FBTyxDQUFQO0FBQ0g7O0FBQ0RBLE9BQUssSUFBSSxDQUFUOztBQUNBLE1BQUlBLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDWCxXQUFPLENBQUMsR0FBRCxHQUFPaEksSUFBSSxDQUFDeWdCLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBTXpZLEtBQUssR0FBRyxDQUFkLENBQVosQ0FBUCxHQUF1Q2hJLElBQUksQ0FBQzZILEdBQUwsQ0FBUyxDQUFDRyxLQUFLLEdBQUcsR0FBVCxJQUFnQixDQUFoQixHQUFvQmhJLElBQUksQ0FBQ29TLEVBQWxDLENBQTlDO0FBQ0g7O0FBQ0QsU0FBTyxNQUFNcFMsSUFBSSxDQUFDeWdCLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFELElBQU96WSxLQUFLLEdBQUcsQ0FBZixDQUFaLENBQU4sR0FBdUNoSSxJQUFJLENBQUM2SCxHQUFMLENBQVMsQ0FBQ0csS0FBSyxHQUFHLEdBQVQsSUFBZ0IsQ0FBaEIsR0FBb0JoSSxJQUFJLENBQUNvUyxFQUFsQyxDQUF2QyxHQUErRSxDQUF0RjtBQUNILENBdkVjLDRCQXdFZDROLFVBeEVjLEVBd0VELFVBQUNoWSxLQUFELEVBQVc7QUFDckIsTUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixXQUFPLENBQVA7QUFDSDs7QUFDRCxNQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLFdBQU8sQ0FBUDtBQUNIOztBQUNELFNBQU8sQ0FBQ2hJLElBQUksQ0FBQ3lnQixHQUFMLENBQVMsQ0FBVCxFQUFZLE1BQU16WSxLQUFLLEdBQUcsQ0FBZCxDQUFaLENBQUQsR0FBaUNoSSxJQUFJLENBQUM2SCxHQUFMLENBQVMsQ0FBQ0csS0FBSyxHQUFHLEdBQVQsSUFBZ0IsQ0FBaEIsR0FBb0JoSSxJQUFJLENBQUNvUyxFQUFsQyxDQUF4QztBQUNILENBaEZjLDRCQWlGZDZOLFdBakZjLEVBaUZBLFVBQUNqWSxLQUFELEVBQVc7QUFDdEIsTUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixXQUFPLENBQVA7QUFDSDs7QUFDRCxNQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLFdBQU8sQ0FBUDtBQUNIOztBQUNELFNBQU9oSSxJQUFJLENBQUN5Z0IsR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFDLEVBQUQsR0FBTXpZLEtBQWxCLElBQTJCaEksSUFBSSxDQUFDNkgsR0FBTCxDQUFTLENBQUNHLEtBQUssR0FBRyxHQUFULElBQWdCLENBQWhCLEdBQW9CaEksSUFBSSxDQUFDb1MsRUFBbEMsQ0FBM0IsR0FBbUUsQ0FBMUU7QUFDSCxDQXpGYyw0QkEwRmQ4TixJQTFGYyxFQTBGUCxVQUFDbFksS0FBRCxFQUFXO0FBQ2YsTUFBTXVQLENBQUMsR0FBRyxVQUFVLEtBQXBCOztBQUNBLE1BQUksQ0FBQ3ZQLEtBQUssSUFBSSxDQUFWLElBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsV0FBTyxPQUFPQSxLQUFLLEdBQUdBLEtBQVIsSUFBaUIsQ0FBQ3VQLENBQUMsR0FBRyxDQUFMLElBQVV2UCxLQUFWLEdBQWtCdVAsQ0FBbkMsQ0FBUCxDQUFQO0FBQ0g7O0FBQ0QsU0FBTyxPQUFPLENBQUN2UCxLQUFLLElBQUksQ0FBVixJQUFlQSxLQUFmLElBQXdCLENBQUN1UCxDQUFDLEdBQUcsQ0FBTCxJQUFVdlAsS0FBVixHQUFrQnVQLENBQTFDLElBQStDLENBQXRELENBQVA7QUFDSCxDQWhHYyw0QkFpR2Q0SSxPQWpHYyxFQWlHSixVQUFDblksS0FBRCxFQUFXO0FBQ2xCLE1BQU11UCxDQUFDLEdBQUcsT0FBVjtBQUNBLFNBQU92UCxLQUFLLEdBQUdBLEtBQVIsSUFBaUIsQ0FBQ3VQLENBQUMsR0FBRyxDQUFMLElBQVV2UCxLQUFWLEdBQWtCdVAsQ0FBbkMsQ0FBUDtBQUNILENBcEdjLDRCQXFHZDZJLFFBckdjLEVBcUdILFVBQUNwWSxLQUFELEVBQVc7QUFDbkIsTUFBTXVQLENBQUMsR0FBRyxPQUFWO0FBQ0EsU0FBTyxFQUFFdlAsS0FBRixHQUFVQSxLQUFWLElBQW1CLENBQUN1UCxDQUFDLEdBQUcsQ0FBTCxJQUFVdlAsS0FBVixHQUFrQnVQLENBQXJDLElBQTBDLENBQWpEO0FBQ0gsQ0F4R2MsNEJBeUdkOEksTUF6R2MsRUF5R0wsVUFBQ3JZLEtBQUQsRUFBVztBQUNqQixNQUFJQSxLQUFLLEdBQUcsR0FBWixFQUFpQjtBQUNiLFdBQU93WSxNQUFNLENBQUNGLFNBQUQsQ0FBTixDQUFrQnRZLEtBQUssR0FBRyxDQUExQixJQUErQixHQUF0QztBQUNIOztBQUNELFNBQU93WSxNQUFNLENBQUNELFVBQUQsQ0FBTixDQUFtQnZZLEtBQUssR0FBRyxDQUFSLEdBQVksQ0FBL0IsSUFBb0MsR0FBcEMsR0FBMEMsR0FBakQ7QUFDSCxDQTlHYyw0QkErR2RzWSxTQS9HYyxFQStHRixVQUFDdFksS0FBRDtBQUFBLFNBQVksSUFBSXdZLE1BQU0sQ0FBQ0QsVUFBRCxDQUFOLENBQW1CLElBQUl2WSxLQUF2QixDQUFoQjtBQUFBLENBL0dFLDRCQWdIZHVZLFVBaEhjLEVBZ0hELFVBQUN2WSxLQUFELEVBQVc7QUFDckIsTUFBSUEsS0FBSyxHQUFHLElBQUksSUFBaEIsRUFBc0I7QUFDbEIsV0FBTyxTQUFTQSxLQUFULEdBQWlCQSxLQUF4QjtBQUNIOztBQUNELE1BQUlBLEtBQUssR0FBRyxJQUFJLElBQWhCLEVBQXNCO0FBQ2xCLFdBQU8sVUFBVUEsS0FBSyxJQUFJLE1BQU0sSUFBekIsSUFBaUNBLEtBQWpDLEdBQXlDLElBQWhEO0FBQ0g7O0FBQ0QsTUFBSUEsS0FBSyxHQUFHLE1BQU0sSUFBbEIsRUFBd0I7QUFDcEIsV0FBTyxVQUFVQSxLQUFLLElBQUksT0FBTyxJQUExQixJQUFrQ0EsS0FBbEMsR0FBMEMsTUFBakQ7QUFDSDs7QUFDRCxTQUFPLFVBQVVBLEtBQUssSUFBSSxRQUFRLElBQTNCLElBQW1DQSxLQUFuQyxHQUEyQyxRQUFsRDtBQUNILENBM0hjLFdBQVosQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JQOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDTyxJQUFNMFksS0FBSyxHQUFHLE9BQWQ7QUFDQSxJQUFJQyxjQUFKOztBQUNQLENBQUMsVUFBVUEsY0FBVixFQUEwQjtBQUN2QixXQUFTdGQsTUFBVCxDQUFnQkgsU0FBaEIsRUFBMkJqQyxNQUEzQixFQUFtQztBQUFBLFFBQ3ZCMmYsS0FEdUIsR0FDYjFkLFNBRGEsQ0FDdkIwZCxLQUR1QjtBQUFBLFFBRXZCQyxNQUZ1QixHQUVaRCxLQUZZLENBRXZCQyxNQUZ1Qjs7QUFHL0IsUUFBSSxFQUFDQSxNQUFELGFBQUNBLE1BQUQsZUFBQ0EsTUFBTSxDQUFFMWhCLE1BQVQsQ0FBSixFQUFxQjtBQUNqQjhCLFlBQU0sQ0FBQ0MsS0FBUCxDQUFhQyxPQUFiLENBQXFCLDJCQUFyQjtBQUNBO0FBQ0g7O0FBQ0QsUUFBSXlmLEtBQUssQ0FBQ3ZZLElBQU4sS0FBZTZOLFNBQW5CLEVBQThCO0FBQzFCMEssV0FBSyxDQUFDdlksSUFBTixHQUFhLENBQWI7QUFDSDs7QUFDRHVZLFNBQUssQ0FBQ3ZZLElBQU4sSUFBY3BILE1BQU0sQ0FBQ3FDLE9BQVAsQ0FBZStFLElBQTdCO0FBVitCLFFBV3ZCQSxJQVh1QixHQVdkdVksS0FYYyxDQVd2QnZZLElBWHVCO0FBWS9CLFFBQUlzTCxNQUFNLEdBQUcsQ0FBYjtBQUNBa04sVUFBTSxDQUFDelYsT0FBUCxDQUFlLFVBQUMwVixLQUFELEVBQVc7QUFBQTs7QUFDdEIsVUFBSSxDQUFDQSxLQUFLLENBQUN6WSxJQUFYLEVBQWlCO0FBQ2JwSCxjQUFNLENBQUNDLEtBQVAsQ0FBYUMsT0FBYixDQUFxQix3QkFBckI7QUFDQTtBQUNIOztBQUNELFVBQUkyZixLQUFLLENBQUNuTixNQUFOLEtBQWlCdUMsU0FBckIsRUFBZ0M7QUFDNUJ2QyxjQUFNLEdBQUdtTixLQUFLLENBQUNuTixNQUFmO0FBQ0g7O0FBQ0QsVUFBTW9OLFVBQVUsNEJBQUdELEtBQUgsYUFBR0EsS0FBSCx3Q0FBR0EsS0FBSyxDQUFFTixNQUFWLGtEQUFHLGNBQWVRLFdBQWYsRUFBSCx5RUFBbUN2QywyQ0FBbkQ7QUFDQSxVQUFNd0MsWUFBWSxHQUFHVCwyQ0FBTSxDQUFDTyxVQUFELENBQTNCOztBQUNBLFVBQUksQ0FBQ0UsWUFBTCxFQUFtQjtBQUNmaGdCLGNBQU0sQ0FBQ0MsS0FBUCxDQUFhQyxPQUFiLGdDQUE2Q3FmLDJDQUE3QztBQUNBO0FBQ0g7O0FBQ0QsVUFBTXhZLEtBQUssR0FBRyxDQUFDSyxJQUFJLEdBQUdzTCxNQUFSLElBQWtCbU4sS0FBSyxDQUFDelksSUFBdEM7QUFDQXNMLFlBQU0sSUFBSW1OLEtBQUssQ0FBQ3pZLElBQWhCOztBQUNBLFVBQUlMLEtBQUssR0FBRyxDQUFSLElBQWFBLEtBQUssR0FBRyxDQUF6QixFQUE0QjtBQUN4QjtBQUNIOztBQUNELFVBQU1rWixXQUFXLEdBQUdELFlBQVksQ0FBQ2paLEtBQUQsQ0FBaEM7O0FBQ0EsVUFBSSxDQUFDOFksS0FBSyxDQUFDdFQsRUFBWCxFQUFlO0FBQ1h2TSxjQUFNLENBQUNDLEtBQVAsQ0FBYUMsT0FBYixDQUFxQixnQ0FBckI7QUFDQTtBQUNIOztBQUNELFVBQUksQ0FBQzJmLEtBQUssQ0FBQ3ZULElBQVgsRUFBaUI7QUFDYnVULGFBQUssQ0FBQ3ZULElBQU4sR0FBYSxFQUFiO0FBQ0g7O0FBMUJxQixVQTJCZEMsRUEzQmMsR0EyQkRzVCxLQTNCQyxDQTJCZHRULEVBM0JjO0FBQUEsVUEyQlZELElBM0JVLEdBMkJEdVQsS0EzQkMsQ0EyQlZ2VCxJQTNCVTtBQTRCdEIsVUFBTTRULEtBQUssR0FBR2plLFNBQWQ7QUFDQUwsWUFBTSxDQUFDRCxJQUFQLENBQVk0SyxFQUFaLEVBQWdCcEMsT0FBaEIsQ0FBd0IsVUFBQ2dXLEdBQUQsRUFBUztBQUM3QixZQUFJN1QsSUFBSSxDQUFDNlQsR0FBRCxDQUFKLEtBQWNsTCxTQUFsQixFQUE2QjtBQUFBOztBQUN6QjNJLGNBQUksQ0FBQzZULEdBQUQsQ0FBSixpQkFBWUQsS0FBSyxDQUFDQyxHQUFELENBQWpCLG1EQUEwQixDQUExQjtBQUNIOztBQUNELFlBQU1DLFNBQVMsR0FBRzlULElBQUksQ0FBQzZULEdBQUQsQ0FBdEI7QUFDQSxZQUFNRSxPQUFPLEdBQUc5VCxFQUFFLENBQUM0VCxHQUFELENBQWxCOztBQUNBLFlBQUksT0FBT0MsU0FBUCxLQUFxQixRQUFyQixJQUFpQyxPQUFPQyxPQUFQLEtBQW1CLFFBQXhELEVBQWtFO0FBQzlELGNBQU1DLFVBQVUsR0FBR0YsU0FBUyxHQUFHSCxXQUFXLElBQUlJLE9BQU8sR0FBR0QsU0FBZCxDQUExQztBQUNBRixlQUFLLENBQUNDLEdBQUQsQ0FBTCxHQUFhRyxVQUFiO0FBQ0g7QUFDSixPQVZEO0FBV0gsS0F4Q0Q7O0FBeUNBLFFBQUlYLEtBQUssQ0FBQ1ksSUFBTixJQUFjWixLQUFLLENBQUN2WSxJQUFOLEdBQWFzTCxNQUEvQixFQUF1QztBQUNuQ2lOLFdBQUssQ0FBQ3ZZLElBQU4sR0FBYSxDQUFiO0FBQ0g7QUFDSjs7QUFDRHNZLGdCQUFjLENBQUN0ZCxNQUFmLEdBQXdCQSxNQUF4Qjs7QUFDQSxXQUFTVyxJQUFULENBQWMvQyxNQUFkLEVBQXNCO0FBQ2xCQSxVQUFNLENBQUNnRCxVQUFQLENBQWtCc0UsVUFBbEIsQ0FBNkJyRSxHQUE3QixDQUFpQ3djLEtBQWpDLEVBQXdDcmQsTUFBeEM7QUFDSDs7QUFDRHNkLGdCQUFjLENBQUMzYyxJQUFmLEdBQXNCQSxJQUF0QjtBQUNILENBaEVELEVBZ0VHMmMsY0FBYyxLQUFLQSxjQUFjLEdBQUcsRUFBdEIsQ0FoRWpCLEU7Ozs7Ozs7Ozs7Ozs7O0FDSHdDO0FBRXpCLFNBQVMsU0FBUztJQUNoQyxNQUFNLFNBQVMsR0FBRztRQUNqQixJQUFJLEVBQUUsV0FBVztRQUNqQixRQUFRLEVBQUU7WUFDVCxJQUFJLEVBQUUsV0FBVztZQUNqQixDQUFDLEVBQUUsRUFBRTtZQUNMLENBQUMsRUFBRSxFQUFFO1lBQ0wsTUFBTSxFQUFFLEdBQUc7WUFDWCxNQUFNLEVBQUUsR0FBRztZQUNYLFFBQVEsRUFBRSxHQUFHO1lBQ2IsS0FBSyxFQUFFLEdBQUc7WUFDVixRQUFRLEVBQUUsQ0FBQztvQkFDVixJQUFJLEVBQUUsT0FBTztvQkFDYixHQUFHLEVBQUUsaURBQVk7b0JBQ2pCLEtBQUssRUFBRSxHQUFHO2lCQUNWLENBQUM7WUFDRixRQUFRLENBQUMsSUFBWTtnQkFDcEIsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQzlCLENBQUM7U0FDRDtLQUNELENBQUM7SUFFRixTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBa0IsQ0FBQyxDQUFDO0lBRXJELE9BQU8sU0FBUyxDQUFDO0FBQ2xCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCRCxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUM7QUFFeEIsTUFBTSxTQUFTLEdBQUcsY0FBYyxDQUFDO0FBQ2pDLE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQztBQUUzQixNQUFNLGVBQWUsR0FBRyxHQUFHLFlBQVkseUJBQXlCLENBQUM7QUFDakUsTUFBTSxZQUFZLEdBQUcsR0FBRyxZQUFZLDBCQUEwQixDQUFDO0FBRS9ELE1BQU0sV0FBVyxHQUFHLEdBQUcsWUFBWSwwQkFBMEIsQ0FBQztBQUM5RCxNQUFNLFlBQVksR0FBRyxHQUFHLFlBQVksMkJBQTJCLENBQUM7QUFFaEUsTUFBTSxVQUFVLEdBQUcsR0FBRyxZQUFZLHVCQUF1QixDQUFDO0FBRTFELE1BQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYlM7QUFFRjtBQUNEO0FBQ1A7QUFFekIsTUFBTSxZQUFhLFNBQVEsNERBQVk7SUFDckQsWUFBWSxTQUF1QixFQUFFO1FBQ3BDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsSUFBSSw4Q0FBYyxDQUFDO1FBRXBELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVkLCtEQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLDZEQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDRDs7Ozs7Ozs7Ozs7Ozs7OztBQ2RpQztBQUN3QjtBQUduRCxJQUFVLG9CQUFvQixDQTJDcEM7QUEzQ0QsV0FBaUIsb0JBQW9CO0lBQ3BDLFNBQWdCLE1BQU0sQ0FBQyxLQUFZLEVBQUUsTUFBb0I7UUFDeEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDZixPQUFPO1NBQ1A7UUFFRCxNQUFNLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFaEUsSUFBSSxjQUFjLENBQUMsZUFBZSxJQUFJLENBQUMsRUFBRTtZQUN4QyxPQUFPO1NBQ1A7UUFFRCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUF5QixDQUFDO1FBRXpFLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRTtZQUMxQyxPQUFPO1NBQ1A7UUFFRCxNQUFNLFNBQVMsR0FBSSxNQUFNLENBQUMsUUFBMkIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVuRSxTQUFTLENBQUMsWUFBWSxDQUNyQixNQUFNLENBQUMsQ0FBQyxFQUNSLE1BQU0sQ0FBQyxDQUFDLEVBQ1IsTUFBTSxDQUFDLENBQUMsRUFDUixNQUFNLENBQUMsQ0FBQyxFQUNSLE1BQU0sQ0FBQyxFQUFFLEVBQ1QsTUFBTSxDQUFDLEVBQUUsQ0FDVCxDQUFDO1FBRUYsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxHQUFHLGlEQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxHQUFHLGlEQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXBDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLFNBQVMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ3BDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQXBDZSwyQkFBTSxTQW9DckI7SUFFRCxTQUFnQixJQUFJLENBQUMsTUFBb0I7UUFDeEMsMkRBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDZDQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUhlLHlCQUFJLE9BR25CO0FBQ0YsQ0FBQyxFQTNDZ0Isb0JBQW9CLEtBQXBCLG9CQUFvQixRQTJDcEM7Ozs7Ozs7Ozs7Ozs7OztBQ2hEbUQ7QUFFckMsTUFBTSxjQUFlLFNBQVEsOERBQWM7SUFDekQsS0FBSztRQUNKLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQyxTQUFTLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUM5QixTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUUsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztDQUNEOzs7Ozs7Ozs7Ozs7Ozs7QUNUOEM7QUFFaEMsTUFBTSxxQkFBcUI7SUFBMUM7UUFDVSxZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDcEMsY0FBUyxHQUFHLElBQUksR0FBRyxFQUF5QixDQUFDO1FBRXRELFlBQU8sR0FBRyxDQUFDLEtBQWEsRUFBRSxNQUFjLEVBQXdCLEVBQUU7WUFDakUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDL0IsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFrQixDQUFDO2dCQUN2RCxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNkLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLEdBQUcsRUFBRTt3QkFDUixRQUFRLEdBQUcsaUVBQXFCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBa0IsQ0FBQzt3QkFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3FCQUNqQzt5QkFBTTt3QkFDTixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsS0FBSyxZQUFZLENBQUMsQ0FBQztxQkFDN0Q7aUJBQ0Q7Z0JBQ0QsT0FBTyxRQUFRLENBQUM7YUFDaEI7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNiLENBQUM7SUFLRixDQUFDO0lBSEEsSUFBSSxDQUFDLE1BQWM7UUFDbEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0Q7Ozs7Ozs7Ozs7Ozs7O0FDdkJNLFNBQVMsR0FBRyxDQUFDLFVBQXNCO0lBQ3pDLE9BQU87UUFDTixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLENBQUM7UUFDVCxTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxDQUFDO1FBQ2IsVUFBVSxFQUFFLENBQUM7UUFDYixVQUFVLEVBQUU7WUFDWCxJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxRQUFRO1NBQ2Y7UUFDRCxRQUFRLENBQUMsSUFBWTtZQUNwQixJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM5QyxJQUFJLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM5QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFO2dCQUN4QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDakUsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLGdCQUFnQixVQUFVLGdCQUFnQixVQUFVLEtBQUssQ0FBQztnQkFDdkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDaEI7UUFDRixDQUFDO0tBQ0QsQ0FBQztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNrQztBQUdqQjtBQUNnQjtBQUNNO0FBQ007QUFDUztBQVl4QyxTQUFTLElBQUksQ0FBQyxVQUEwQjtJQUN0RCxTQUFTLFdBQVcsQ0FBQyxJQUFvQjtRQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELE1BQU0sT0FBTyxHQUFHO1FBQ2YsSUFBSSxFQUFFLFFBQVE7UUFDZCxPQUFPLEVBQUUsS0FBSztRQUNkLE9BQU8sRUFBRSxLQUFLO1FBQ2QsUUFBUTtZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDO1FBQ0QsUUFBUSxFQUFFO1lBQ1QsVUFBVSxFQUFFO2dCQUNYLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSwrQ0FBVTtnQkFDZixNQUFNLEVBQUUsQ0FBQztnQkFDVCxNQUFNLEVBQUUsQ0FBQzthQUNUO1lBQ0QsTUFBTSxFQUFFO2dCQUNQLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRTtvQkFDTCxJQUFJLEVBQUUsV0FBVztvQkFDakIsQ0FBQyxFQUFFLEVBQUU7b0JBQ0wsQ0FBQyxFQUFFLEVBQUU7b0JBQ0wsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsTUFBTSxFQUFFLEVBQUU7b0JBQ1YsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsTUFBTSxFQUFFLFFBQVE7aUJBQ2hCO2FBQ0Q7WUFDRCxNQUFNLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFO29CQUNMO3dCQUNDLElBQUksRUFBRSxTQUFTO3dCQUNmLENBQUMsRUFBRSxHQUFHO3dCQUNOLENBQUMsRUFBRSxHQUFHO3dCQUNOLE1BQU0sRUFBRSxFQUFFO3dCQUNWLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO3dCQUNsRCxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7cUJBQ3pDO29CQUNEO3dCQUNDLElBQUksRUFBRSxNQUFNO3dCQUNaLElBQUksRUFBRSxnQ0FBZ0M7d0JBQ3RDLElBQUksRUFBRSxRQUFRO3FCQUNkO29CQUNEO3dCQUNDLElBQUksRUFBRSxNQUFNO3dCQUNaLElBQUksRUFBRTs0QkFDTCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzRCQUM5QixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzRCQUNoQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFOzRCQUNsQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFOzRCQUNoQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO3lCQUM5Qjt3QkFDRCxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTt3QkFDcEQsTUFBTSxFQUFFLFFBQVE7cUJBQ2hCO2lCQUNEO2FBQ0Q7WUFDRCxLQUFLLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRTtvQkFDVCwyQ0FBSSxDQUFDO3dCQUNKLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsMkNBQU0sRUFBRSxPQUFPLEVBQUUsV0FBVztxQkFDOUQsQ0FBQztvQkFDRiwyQ0FBSSxDQUFDO3dCQUNKLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsOENBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVztxQkFDcEUsQ0FBQztpQkFDRjthQUNEO1lBQ0QsUUFBUSxFQUFFO2dCQUNULElBQUksRUFBRSxXQUFXO2dCQUNqQixDQUFDLEVBQUUsR0FBRztnQkFDTixDQUFDLEVBQUUsR0FBRztnQkFDTixRQUFRLEVBQUUsa0RBQVEsRUFBRTthQUNwQjtZQUNELEdBQUcsRUFBRTtnQkFDSixJQUFJLEVBQUUsT0FBTztnQkFDYixDQUFDLEVBQUUsR0FBRztnQkFDTixNQUFNLEVBQUUsR0FBRztnQkFDWCxNQUFNLEVBQUUsR0FBRztnQkFDWCxLQUFLLEVBQUUsR0FBRztnQkFDVixHQUFHLEVBQUUsYUFBYTtnQkFDbEIsYUFBYTtvQkFDWixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsQ0FBQztnQkFDRCxZQUFZO29CQUNYLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNsQixDQUFDO2FBQ0Q7WUFDRCxVQUFVLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsR0FBRyxFQUFFLGdEQUFXO2dCQUNoQixDQUFDLEVBQUUsR0FBRztnQkFDTixDQUFDLEVBQUUsR0FBRztnQkFDTixLQUFLLEVBQUUsR0FBRztnQkFDVixJQUFJLEVBQUU7b0JBQ0wsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsS0FBSyxFQUFFLENBQUM7aUJBQ0Q7Z0JBQ1IsUUFBUSxDQUFDLElBQVk7b0JBQ3BCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTt3QkFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7d0JBQ3hCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFOzRCQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7eUJBQ3BCO3FCQUNEO2dCQUNGLENBQUM7Z0JBQ0QsYUFBYSxDQUFDLENBQU07b0JBQ25CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTt3QkFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztxQkFDakI7eUJBQU07d0JBQ04sSUFBSSxDQUFDLElBQUksR0FBRzs0QkFDWCxLQUFLLEVBQUUsUUFBUTs0QkFDZixLQUFLLEVBQUUsQ0FBQzt5QkFDUixDQUFDO3FCQUNGO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixDQUFDO2FBQ0Q7WUFDRCxXQUFXLEVBQUU7Z0JBQ1osSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLENBQUMsRUFBRSxHQUFHO2dCQUNOLENBQUMsRUFBRSxHQUFHO2dCQUNOLFFBQVEsRUFBRTtvQkFDVCxJQUFJLEVBQUUsT0FBTztvQkFDYixHQUFHLEVBQUUsaURBQVk7b0JBQ2pCLEtBQUssRUFBRSxHQUFHO29CQUNWLEtBQUssRUFBRSxDQUFDO29CQUNSLEtBQUssRUFBRTt3QkFDTixJQUFJLEVBQUUsSUFBSTt3QkFDVixNQUFNLEVBQUU7NEJBQ1A7Z0NBQ0MsSUFBSSxFQUFFLENBQUM7Z0NBQ1AsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTs2QkFDZDs0QkFDRDtnQ0FDQyxNQUFNLEVBQUUsVUFBVTtnQ0FDbEIsSUFBSSxFQUFFLENBQUM7Z0NBQ1AsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFOzZCQUMxQjs0QkFDRDtnQ0FDQyxNQUFNLEVBQUUsYUFBYTtnQ0FDckIsSUFBSSxFQUFFLENBQUM7Z0NBQ1AsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFOzZCQUN0Qjs0QkFDRDtnQ0FDQyxNQUFNLEVBQUUsY0FBYztnQ0FDdEIsSUFBSSxFQUFFLENBQUM7Z0NBQ1AsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTs2QkFDWjt5QkFDRDtxQkFDRDtpQkFDRDthQUNEO1lBQ0QsR0FBRyxFQUFFLHlDQUFHLENBQUMsVUFBVSxDQUFDO1NBQ3BCO0tBQ0QsQ0FBQztJQUVGLE1BQU0sYUFBYSxHQUFrQjtRQUNwQyxRQUFRLEVBQUUsVUFBVSxDQUFDLGNBQWM7UUFDbkMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxlQUFlO1FBQ3JDLFdBQVc7WUFDVixPQUFPLGdFQUF5QixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLENBQUM7S0FDRCxDQUFDO0lBRUYsT0FBTztRQUNOLElBQUksRUFBRSxXQUFXO1FBQ2pCLFFBQVEsRUFBRTtZQUNULE9BQU87WUFDUCxTQUFTLEVBQUUscURBQVMsQ0FBQyxhQUFhLENBQUM7U0FDbkM7UUFDRCxRQUFRO1lBQ1AsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztZQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBQzVDLENBQUM7UUFDRCxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QixDQUFDO0tBQ0QsQ0FBQztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDdk1NLFNBQVMsU0FBUyxDQUFDLElBQW1CO0lBQzVDLE9BQU87UUFDTixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxDQUFDO1FBQ1QsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFO1FBQ3hCLElBQUksRUFBRTtZQUNMLElBQUksRUFBRSxXQUFXO1lBQ2pCLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLEVBQUU7WUFDVixJQUFJLEVBQUUsUUFBUTtTQUNkO1FBQ0QsUUFBUTtZQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6RSxDQUFDO0tBQ1EsQ0FBQztBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDeEJELE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztBQWFsQixTQUFTLGFBQWEsQ0FBQyxLQUFVLEVBQUUsUUFBZ0M7SUFDbEUsTUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDO0lBQzFCLE9BQU8sQ0FBQyxJQUFZLEVBQUUsRUFBRTtRQUV2QixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFFcEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7WUFFeEIsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM5QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLE9BQU8sR0FBRyxJQUFJLENBQUM7aUJBQ2Y7YUFDRDtTQUNEO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDWixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDZjtJQUNGLENBQUMsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLEtBQVUsRUFBRSxTQUFjO0lBQ25ELFNBQVMsQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQy9FLENBQUM7QUFFTSxTQUFTLElBQUksQ0FBQyxLQUFxQjtJQUN6QyxTQUFTLFFBQVE7UUFDaEIsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7SUFDNUQsQ0FBQztJQUVELE1BQU0sUUFBUSxHQUFHO1FBQ2hCLElBQUksRUFBRSxXQUFXO1FBQ2pCLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUc7UUFDM0IsQ0FBQyxFQUFFLEdBQUc7UUFDTixRQUFRLEVBQUUsQ0FBQztRQUNYLFVBQVUsQ0FBQyxJQUFZO1lBQ3RCLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7WUFDcEQsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUMvQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFO2dCQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7UUFDRixDQUFDO1FBQ0QsUUFBUSxDQUFDLElBQVk7WUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixDQUFDO1FBQ0QsUUFBUSxFQUFFO1lBQ1QsSUFBSSxFQUFFO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxRQUFRLEVBQUU7Z0JBQ2hCLFVBQVUsRUFBRTtvQkFDWCxJQUFJLEVBQUUsRUFBRTtvQkFDUixLQUFLLEVBQUUsUUFBUTtvQkFDZixLQUFLLEVBQUUsUUFBUTtvQkFDZixhQUFhLEVBQUUsUUFBUTtpQkFDdkI7Z0JBQ0QsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsYUFBYSxFQUFFLEdBQUcsRUFBRTtvQkFDbkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztnQkFDRCxRQUFRO29CQUNQLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7YUFDRDtZQUNELEtBQUssRUFBRTtnQkFDTixJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUs7Z0JBQ2hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsYUFBYSxFQUFFLEdBQUcsRUFBRTtvQkFDbkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEIsQ0FBQzthQUNEO1NBQ0Q7S0FDRCxDQUFDO0lBRUYsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFaEQsT0FBTyxRQUFRLENBQUM7QUFDakIsQ0FBQzs7Ozs7OztVQ2hHRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzRDtBQUNWO0FBQ0k7QUFDTztBQUNMO0FBQ0E7QUFFSztBQUNaO0FBQ2pCO0FBR1I7QUFHbEIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUNqQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBR2xDLE1BQU0sTUFBTSxHQUFHLElBQUksNERBQVksRUFBRSxDQUFDO0FBQ2xDLHNFQUE4QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLCtEQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLGlFQUF5QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLDJEQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVCLDBEQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUNoQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFaEQsTUFBTSxVQUFVLEdBQUc7SUFDbEIsYUFBYTtRQUNaLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELGFBQWE7UUFDWixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxjQUFjO1FBQ2IsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDRCxlQUFlO1FBQ2QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Q0FDRCxDQUFDO0FBR0YsTUFBTSxHQUFHLEdBQUcsOENBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM3QixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDWixNQUFNLENBQUMsSUFBSSxHQUFHLEdBQXVCLENBQUM7QUFFdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUdqQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5QyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUc5QyxNQUFNLFlBQVksR0FBRyxJQUFJLG1EQUFZLEVBQUUsQ0FBQztBQUN4QyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDdkMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ2pDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUNyQyxZQUFZLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDaEMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMzQixZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztBQUN2RCxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztBQUM3QyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUNoRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBR3RELE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FDN0IsZ0RBQVcsRUFDWDtJQUNDLEtBQUssRUFBRSxnREFBVztJQUNsQixLQUFLLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJO0lBQ2pDLE1BQU0sRUFBRSxJQUFJO0NBQ0ssQ0FDbEIsQ0FBQztBQUNGLFlBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FDbkMsZ0RBQVcsRUFDWDtJQUNDLEtBQUssRUFBRSxnREFBVztJQUNsQixLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJO0lBQzNCLE1BQU0sRUFBRSxJQUFJO0NBQ0ssQ0FDbEIsQ0FBQztBQUdGLE1BQU0sZUFBZSxHQUFHLElBQUksc0RBQXFCLEVBQUUsQ0FBQztBQUNwRCxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBYyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxpREFBWSxDQUFDLENBQUM7QUFDckUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0RBQWlCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLG9EQUFlLENBQUMsQ0FBQztBQUMzRSxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5leHBvcnQgY2xhc3MgQ2FudmFzRW5naW5lIGV4dGVuZHMgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGUgPSB7fSkge1xuICAgICAgICBtb2R1bGUuUGxhdGZvcm0gPSBtb2R1bGUuUGxhdGZvcm0gPz8gQ2FudmFzUGxhdGZvcm07XG4gICAgICAgIHN1cGVyKG1vZHVsZSk7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9wYXR0ZXJucyc7XG5leHBvcnQgKiBmcm9tICcuL3BsYXRmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZW5naW5lJztcbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXgsIFBvaW50IH0gZnJvbSAnQGUyZC9nZW9tJztcbmNvbnN0IHBvaW50MSA9IFBvaW50LmVtcHR5KCk7XG5jb25zdCBwb2ludDIgPSBQb2ludC5lbXB0eSgpO1xuZXhwb3J0IHZhciBDYW52YXNQYXR0ZXJucztcbihmdW5jdGlvbiAoQ2FudmFzUGF0dGVybnMpIHtcbiAgICBmdW5jdGlvbiBjb2xvclBhdHRlcm4oY29sb3IsIGFscGhhLCBjdCkge1xuICAgICAgICBsZXQgciA9IGNvbG9yID4+IDE2ICYgMHhmZjtcbiAgICAgICAgbGV0IGcgPSBjb2xvciA+PiA4ICYgMHhmZjtcbiAgICAgICAgbGV0IGIgPSBjb2xvciAmIDB4ZmY7XG4gICAgICAgIGxldCBhID0gYWxwaGEgKiAweGZmO1xuICAgICAgICBpZiAoIUNvbG9yVHJhbnNmb3JtLmlzRW1wdHkoY3QpKSB7XG4gICAgICAgICAgICByID0gKHIgKiBjdC5yZWRNdWx0aXBsaWVyICsgY3QucmVkT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBnID0gKGcgKiBjdC5ncmVlbk11bHRpcGxpZXIgKyBjdC5ncmVlbk9mZnNldCkgJiAweGZmO1xuICAgICAgICAgICAgYiA9IChiICogY3QuYmx1ZU11bHRpcGxpZXIgKyBjdC5ibHVlT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBhID0gKGEgKiBjdC5hbHBoYU11bHRpcGxpZXIgKyBjdC5hbHBoYU9mZnNldCkgJiAweGZmO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhIDwgMHhmZikge1xuICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YSAvIDB4ZmZ9KWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4gPSBjb2xvclBhdHRlcm47XG4gICAgZnVuY3Rpb24gYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJnYiA9IGNvbG9yc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGFscGhhID0gYWxwaGFzW2ldO1xuICAgICAgICAgICAgbGV0IHJhdGlvID0gcmF0aW9zW2ldIC8gMHhGRjtcbiAgICAgICAgICAgIGlmIChyYXRpbyA8IDApXG4gICAgICAgICAgICAgICAgcmF0aW8gPSAwO1xuICAgICAgICAgICAgaWYgKHJhdGlvID4gMSlcbiAgICAgICAgICAgICAgICByYXRpbyA9IDE7XG4gICAgICAgICAgICBwYXR0ZXJuLmFkZENvbG9yU3RvcChyYXRpbywgY29sb3JQYXR0ZXJuKHJnYiwgYWxwaGEsIGNvbG9yVHJhbnNmb3JtKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMuYWRkR3JhZGllbnRDb2xvcnMgPSBhZGRHcmFkaWVudENvbG9ycztcbiAgICBmdW5jdGlvbiByYWRpYWxHcmFkaWVudFBhdHRlcm4obWF0cml4LCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCkge1xuICAgICAgICBwb2ludDEueCA9IDE2MzguNDtcbiAgICAgICAgcG9pbnQxLnkgPSAwO1xuICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludDEsIHBvaW50MSk7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KG1hdHJpeC50eCwgbWF0cml4LnR5LCAwLCBtYXRyaXgudHgsIG1hdHJpeC50eSwgTWF0aC5hYnMoKHBvaW50MS54IC0gbWF0cml4LnR4KSAvIDIpKTtcbiAgICAgICAgYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMucmFkaWFsR3JhZGllbnRQYXR0ZXJuID0gcmFkaWFsR3JhZGllbnRQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGxpbmVhckdyYWRpZW50UGF0dGVybihtYXRyaXgsIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgICAgIHBvaW50MS54ID0gLTgxOS4yO1xuICAgICAgICBwb2ludDEueSA9IDA7XG4gICAgICAgIHBvaW50Mi54ID0gODE5LjI7XG4gICAgICAgIHBvaW50Mi55ID0gMDtcbiAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgcG9pbnQxLCBwb2ludDEpO1xuICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludDIsIHBvaW50Mik7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KHBvaW50MS54LCBwb2ludDEueSwgcG9pbnQyLngsIHBvaW50Mi55KTtcbiAgICAgICAgYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMubGluZWFyR3JhZGllbnRQYXR0ZXJuID0gbGluZWFyR3JhZGllbnRQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGJpdG1hcFBhdHRlcm4oaW1hZ2UsIHJlcGVhdCwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVQYXR0ZXJuKGltYWdlLCByZXBlYXQgPyAncmVwZWF0JyA6ICdub25lJyk7XG4gICAgICAgIGlmIChwYXR0ZXJuKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmJpdG1hcFBhdHRlcm4gPSBiaXRtYXBQYXR0ZXJuO1xufSkoQ2FudmFzUGF0dGVybnMgfHwgKENhbnZhc1BhdHRlcm5zID0ge30pKTtcbiIsImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGUyZC9jb3JlJztcbmV4cG9ydCBjbGFzcyBDYW52YXNQbGF0Zm9ybSBleHRlbmRzIFBsYXRmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbdGhpcy52aWV3LmdldENvbnRleHQoJzJkJyldO1xuICAgICAgICB0aGlzLmN1c3RvbUNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRzW3RoaXMuY29udGV4dHMubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIHNhdmVDb250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICByZXN0b3JlQ29udGV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0cy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmRlYnVnLndhcm5pbmcoJ1RyeWluZyB0byByZXN0b3JlIG1haW4gY29udGV4dCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUN1c3RvbUNvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0O1xuICAgICAgICBpZiAodGhpcy5jdXN0b21Db250ZXh0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmN1c3RvbUNvbnRleHRzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnZpZXc7XG4gICAgICAgIGlmIChjb250ZXh0LmNhbnZhcy53aWR0aCAhPT0gd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRleHQuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgICBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIGRlc3Ryb3lDdXN0b21Db250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jdXN0b21Db250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICBiZWdpbigpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgpO1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB2aWV3LndpZHRoLCB2aWV3LmhlaWdodCk7XG4gICAgfVxuICAgIHVwZGF0ZVNpemUoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbmdpbmUuc2NyZWVuLmdldFdpZHRoKCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRIZWlnaHQoKTtcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIGNvbnN0IHZpZXdXaWR0aCA9IE1hdGguZmxvb3Iod2lkdGggKiBwaXhlbFJhdGlvKTtcbiAgICAgICAgY29uc3Qgdmlld0hlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgaWYgKHZpZXcud2lkdGggIT09IHZpZXdXaWR0aCB8fCB2aWV3LmhlaWdodCAhPT0gdmlld0hlaWdodCkge1xuICAgICAgICAgICAgdmlldy53aWR0aCA9IHZpZXdXaWR0aDtcbiAgICAgICAgICAgIHZpZXcuaGVpZ2h0ID0gdmlld0hlaWdodDtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ09OVEFJTkVSID0gJ2NvbnRhaW5lcic7XG5leHBvcnQgdmFyIENvbnRhaW5lcjtcbihmdW5jdGlvbiAoQ29udGFpbmVyKSB7XG4gICAgZnVuY3Rpb24gbnVtQ2hpbGRyZW4oY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbik7XG4gICAgICAgICAgICByZXR1cm4ga2V5cy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIENvbnRhaW5lci5udW1DaGlsZHJlbiA9IG51bUNoaWxkcmVuO1xufSkoQ29udGFpbmVyIHx8IChDb250YWluZXIgPSB7fSkpO1xuZXhwb3J0IHZhciBDb250YWluZXJFeHRlbnNpb247XG4oZnVuY3Rpb24gKENvbnRhaW5lckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgcmVuZGVyZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgcmVuZGVyZXIuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlcmVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHVwZGF0ZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBwb2ludGVyRXZlbnRzIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHBvaW50ZXJFdmVudHMuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgcG9pbnRlckV2ZW50cy5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwb2ludGVyRXZlbnRzLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50ZXJFdmVudHMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGtleXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcG9pbnRlckV2ZW50cy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHMuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBsb2FkZWQoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IGxvYWRpbmcgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gbG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICBsb2FkaW5nLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgKz0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50Q29udGV4dC5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgLz0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGxvYWRpbmcudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSBjb21wb25lbnRDb250ZXh0LnByb2dyZXNzO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gY29tcG9uZW50Q29udGV4dC5sb2FkZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyArPSBjb21wb25lbnRDb250ZXh0LnByb2dyZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnRDb250ZXh0LmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyAvPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9hZGluZy5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLnNldChDT05UQUlORVIsIHVwZGF0ZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoQ09OVEFJTkVSLCByZW5kZXIpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChDT05UQUlORVIsIGhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KENPTlRBSU5FUiwgbG9hZGVkKTtcbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ29udGFpbmVyRXh0ZW5zaW9uIHx8IChDb250YWluZXJFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgQ29udGFpbmVyRXh0ZW5zaW9uIH0gZnJvbSAnLi9jb250YWluZXInO1xuZXhwb3J0IGNvbnN0IExPQURFUiA9ICdsb2FkZXInO1xuZXhwb3J0IHZhciBMb2FkZXI7XG4oZnVuY3Rpb24gKExvYWRlcikge1xuICAgIGZ1bmN0aW9uIGdldExvYWRpbmdQcm9ncmVzcyhsb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRlci5sb2FkaW5nUHJvZ3Jlc3MgPz8gMDtcbiAgICB9XG4gICAgTG9hZGVyLmdldExvYWRpbmdQcm9ncmVzcyA9IGdldExvYWRpbmdQcm9ncmVzcztcbiAgICBmdW5jdGlvbiBpc0xvYWRlZChsb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRlci5sb2FkZWQgPz8gZmFsc2U7XG4gICAgfVxuICAgIExvYWRlci5pc0xvYWRlZCA9IGlzTG9hZGVkO1xuICAgIGZ1bmN0aW9uIG5lZWRMb2FkaW5nQ2hlY2sobG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZGluZ0NoZWNrID8/IHRydWU7XG4gICAgfVxuICAgIExvYWRlci5uZWVkTG9hZGluZ0NoZWNrID0gbmVlZExvYWRpbmdDaGVjaztcbn0pKExvYWRlciB8fCAoTG9hZGVyID0ge30pKTtcbmV4cG9ydCB2YXIgTG9hZGVyRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChMb2FkZXJFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBsb2FkZWQobG9hZGVyLCBlbmdpbmUpIHtcbiAgICAgICAgaWYgKCFMb2FkZXIubmVlZExvYWRpbmdDaGVjayhsb2FkZXIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQ29udGFpbmVyRXh0ZW5zaW9uLmxvYWRlZChsb2FkZXIsIGVuZ2luZSk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUubG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGxvYWRlci5sb2FkaW5nUHJvZ3Jlc3MgPSBjb250ZXh0LnByb2dyZXNzO1xuICAgICAgICBpZiAoY29udGV4dC5sb2FkZWQgJiYgIWxvYWRlci5sb2FkZWQpIHtcbiAgICAgICAgICAgIGxvYWRlci5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGxvYWRlci5vbkxvYWRlZCkge1xuICAgICAgICAgICAgICAgIGxvYWRlci5vbkxvYWRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIExvYWRlckV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLnNldChMT0FERVIsIENvbnRhaW5lckV4dGVuc2lvbi51cGRhdGUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KExPQURFUiwgQ29udGFpbmVyRXh0ZW5zaW9uLnJlbmRlcik7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KExPQURFUiwgQ29udGFpbmVyRXh0ZW5zaW9uLmhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KExPQURFUiwgbG9hZGVkKTtcbiAgICB9XG4gICAgTG9hZGVyRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoTG9hZGVyRXh0ZW5zaW9uIHx8IChMb2FkZXJFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuLi9mZWF0dXJlcy9yZW5kZXJlcic7XG5pbXBvcnQgeyBVcGRhdGVyIH0gZnJvbSAnLi4vZmVhdHVyZXMvdXBkYXRlcic7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi4vZmVhdHVyZXMvbG9hZGluZyc7XG5pbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuLi9mZWF0dXJlcy9zY3JlZW4nO1xuaW1wb3J0IHsgUG9pbnRlckV2ZW50cyB9IGZyb20gJy4uL2ZlYXR1cmVzL3BvaW50ZXItZXZlbnRzJztcbmltcG9ydCB7IFRpY2tlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3RpY2tlcic7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL2ZlYXR1cmVzL3BsYXRmb3JtJztcbmltcG9ydCB7IENvbnRhaW5lckV4dGVuc2lvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmltcG9ydCB7IERlYnVnIH0gZnJvbSAnLi4vZmVhdHVyZXMvZGVidWcnO1xuaW1wb3J0IHsgUmVzb3VyY2VzIH0gZnJvbSAnLi4vZmVhdHVyZXMvcmVzb3VyY2VzJztcbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuLi9mZWF0dXJlcy9jb21wb25lbnRzJztcbmltcG9ydCB7IExvYWRlckV4dGVuc2lvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGVyJztcbmV4cG9ydCBjbGFzcyBFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1vZHVsZSA9IHt9KSB7XG4gICAgICAgIHRoaXMuZGVwdGggPSAzMjtcbiAgICAgICAgbW9kdWxlLkNvbXBvbmVudHMgPSBtb2R1bGUuQ29tcG9uZW50cyA/PyBDb21wb25lbnRzO1xuICAgICAgICBtb2R1bGUuU2NyZWVuID0gbW9kdWxlLlNjcmVlbiA/PyBTY3JlZW47XG4gICAgICAgIG1vZHVsZS5QbGF0Zm9ybSA9IG1vZHVsZS5QbGF0Zm9ybSA/PyBQbGF0Zm9ybTtcbiAgICAgICAgbW9kdWxlLlVwZGF0ZXIgPSBtb2R1bGUuVXBkYXRlciA/PyBVcGRhdGVyO1xuICAgICAgICBtb2R1bGUuTG9hZGluZyA9IG1vZHVsZS5Mb2FkaW5nID8/IExvYWRpbmc7XG4gICAgICAgIG1vZHVsZS5SZW5kZXJlciA9IG1vZHVsZS5SZW5kZXJlciA/PyBSZW5kZXJlcjtcbiAgICAgICAgbW9kdWxlLlBvaW50ZXJFdmVudHMgPSBtb2R1bGUuUG9pbnRlckV2ZW50cyA/PyBQb2ludGVyRXZlbnRzO1xuICAgICAgICBtb2R1bGUuVGlja2VyID0gbW9kdWxlLlRpY2tlciA/PyBUaWNrZXI7XG4gICAgICAgIG1vZHVsZS5EZWJ1ZyA9IG1vZHVsZS5EZWJ1ZyA/PyBEZWJ1ZztcbiAgICAgICAgbW9kdWxlLlJlc291cmNlcyA9IG1vZHVsZS5SZXNvdXJjZXMgPz8gUmVzb3VyY2VzO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBuZXcgbW9kdWxlLkNvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgbW9kdWxlLlNjcmVlbigpO1xuICAgICAgICB0aGlzLnBsYXRmb3JtID0gbmV3IG1vZHVsZS5QbGF0Zm9ybSh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVyID0gbmV3IG1vZHVsZS5VcGRhdGVyKHRoaXMpO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBuZXcgbW9kdWxlLkxvYWRpbmcodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgbW9kdWxlLlJlbmRlcmVyKHRoaXMpO1xuICAgICAgICB0aGlzLnBvaW50ZXJFdmVudHMgPSBuZXcgbW9kdWxlLlBvaW50ZXJFdmVudHModGhpcyk7XG4gICAgICAgIHRoaXMudGlja2VyID0gbmV3IG1vZHVsZS5UaWNrZXIodGhpcyk7XG4gICAgICAgIHRoaXMuZGVidWcgPSBuZXcgbW9kdWxlLkRlYnVnKCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IG1vZHVsZS5SZXNvdXJjZXModGhpcyk7XG4gICAgICAgIENvbnRhaW5lckV4dGVuc2lvbi5pbml0KHRoaXMpO1xuICAgICAgICBMb2FkZXJFeHRlbnNpb24uaW5pdCh0aGlzKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoZW5naW5lKSB7XG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgIH1cbn1cbiIsImV4cG9ydCB2YXIgRGlzcGxheTtcbihmdW5jdGlvbiAoRGlzcGxheSkge1xuICAgIGZ1bmN0aW9uIGlzVmlzaWJsZShjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC52aXNpYmxlID8/IHRydWU7XG4gICAgfVxuICAgIERpc3BsYXkuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xufSkoRGlzcGxheSB8fCAoRGlzcGxheSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFBpdm90O1xuKGZ1bmN0aW9uIChQaXZvdCkge1xuICAgIGZ1bmN0aW9uIGdldFgocGl2b3QsIHdpZHRoKSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RYIH0gPSBwaXZvdDtcbiAgICAgICAgaWYgKHBpdm90WCkge1xuICAgICAgICAgICAgcmV0dXJuIC1waXZvdFggKiB3aWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgUGl2b3QuZ2V0WCA9IGdldFg7XG4gICAgZnVuY3Rpb24gZ2V0WShwaXZvdCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RZIH0gPSBwaXZvdDtcbiAgICAgICAgaWYgKHBpdm90WSkge1xuICAgICAgICAgICAgcmV0dXJuIC1waXZvdFkgKiBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFkgPSBnZXRZO1xuICAgIGZ1bmN0aW9uIGhhc1ZhbHVlcyhwaXZvdCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WCwgcGl2b3RZIH0gPSBwaXZvdDtcbiAgICAgICAgcmV0dXJuICEhcGl2b3RYIHx8ICEhcGl2b3RZO1xuICAgIH1cbiAgICBQaXZvdC5oYXNWYWx1ZXMgPSBoYXNWYWx1ZXM7XG59KShQaXZvdCB8fCAoUGl2b3QgPSB7fSkpO1xuIiwiY29uc3QgaGFuZGxlcnNNYXAgPSB7XG4gICAgcG9pbnRlckRvd246ICdvblBvaW50ZXJEb3duJyxcbiAgICBwb2ludGVyVXA6ICdvblBvaW50ZXJVcCcsXG4gICAgcG9pbnRlck1vdmU6ICdvblBvaW50ZXJNb3ZlJyxcbiAgICBwb2ludGVyT3ZlcjogJ29uUG9pbnRlck92ZXInLFxuICAgIHBvaW50ZXJPdXQ6ICdvblBvaW50ZXJPdXQnLFxufTtcbmV4cG9ydCB2YXIgUG9pbnRlcjtcbihmdW5jdGlvbiAoUG9pbnRlcikge1xuICAgIGZ1bmN0aW9uIGlzUG9pbnRlck92ZXIocG9pbnRlcikge1xuICAgICAgICByZXR1cm4gISFwb2ludGVyLnBvaW50ZXJPdmVyO1xuICAgIH1cbiAgICBQb2ludGVyLmlzUG9pbnRlck92ZXIgPSBpc1BvaW50ZXJPdmVyO1xuICAgIGZ1bmN0aW9uIGlzUG9pbnRlckVuYWJsZWQocG9pbnRlcikge1xuICAgICAgICByZXR1cm4gcG9pbnRlci5wb2ludGVyRW5hYmxlZCA/PyB0cnVlO1xuICAgIH1cbiAgICBQb2ludGVyLmlzUG9pbnRlckVuYWJsZWQgPSBpc1BvaW50ZXJFbmFibGVkO1xuICAgIGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQocG9pbnRlciwgdHlwZSwgeCwgeSwgaWQpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlck5hbWUgPSBoYW5kbGVyc01hcFt0eXBlXTtcbiAgICAgICAgaWYgKGhhbmRsZXJOYW1lICYmIHBvaW50ZXJbaGFuZGxlck5hbWVdKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlLCB4LCB5LCBpZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwb2ludGVyW2hhbmRsZXJOYW1lXShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbn0pKFBvaW50ZXIgfHwgKFBvaW50ZXIgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBUcmFuc2Zvcm07XG4oZnVuY3Rpb24gKFRyYW5zZm9ybSkge1xuICAgIGZ1bmN0aW9uIGdldE1hdHJpeCh0cmFuc2Zvcm0sIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAobWF0cml4KSB7XG4gICAgICAgICAgICByZXN1bHQuYSA9IG1hdHJpeC5hID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYiA9IG1hdHJpeC5iID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuYyA9IG1hdHJpeC5jID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuZCA9IG1hdHJpeC5kID8/IDE7XG4gICAgICAgICAgICByZXN1bHQudHggPSBtYXRyaXgudHggPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IG1hdHJpeC50eSA/PyAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm90YXRpb24gfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gdHJhbnNmb3JtLnNjYWxlWCA/PyB0cmFuc2Zvcm0uc2NhbGUgPz8gMTtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gdHJhbnNmb3JtLnNjYWxlWSA/PyB0cmFuc2Zvcm0uc2NhbGUgPz8gMTtcbiAgICAgICAgcmVzdWx0LnR4ID0gdHJhbnNmb3JtLnggPz8gMDtcbiAgICAgICAgcmVzdWx0LnR5ID0gdHJhbnNmb3JtLnkgPz8gMDtcbiAgICAgICAgaWYgKHJvdGF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gICAgICAgICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihyb3RhdGlvbik7XG4gICAgICAgICAgICByZXN1bHQuYSA9IGNvcyAqIHNjYWxlWDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gc2luICogc2NhbGVYO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAtc2luICogc2NhbGVZO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBjb3MgKiBzY2FsZVk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmEgPSBzY2FsZVg7XG4gICAgICAgIHJlc3VsdC5iID0gMDtcbiAgICAgICAgcmVzdWx0LmMgPSAwO1xuICAgICAgICByZXN1bHQuZCA9IHNjYWxlWTtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldE1hdHJpeCA9IGdldE1hdHJpeDtcbiAgICBmdW5jdGlvbiBnZXRDb2xvclRyYW5zZm9ybSh0cmFuc2Zvcm0sIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybSkge1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5yZWRNdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5NdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5ibHVlTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5yZWRPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmJsdWVPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHRpbnQgfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKHRpbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY29sb3IgPSAwLCB2YWx1ZSA9IDEgfSA9IHRpbnQ7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZUludmVydGVkID0gMSAtIHZhbHVlO1xuICAgICAgICAgICAgY29uc3QgciA9IChjb2xvciA+PiAxNikgJiAweGZmO1xuICAgICAgICAgICAgY29uc3QgZyA9IChjb2xvciA+PiA4KSAmIDB4ZmY7XG4gICAgICAgICAgICBjb25zdCBiID0gY29sb3IgJiAweGZmO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IHRyYW5zZm9ybS5hbHBoYSA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IHZhbHVlSW52ZXJ0ZWQ7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSByICogdmFsdWU7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBnICogdmFsdWU7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGIgKiB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gdHJhbnNmb3JtLmFscGhhID8/IDE7XG4gICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IDA7XG4gICAgfVxuICAgIFRyYW5zZm9ybS5nZXRDb2xvclRyYW5zZm9ybSA9IGdldENvbG9yVHJhbnNmb3JtO1xufSkoVHJhbnNmb3JtIHx8IChUcmFuc2Zvcm0gPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBVcGRhdGU7XG4oZnVuY3Rpb24gKFVwZGF0ZSkge1xuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5lbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIFVwZGF0ZS5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbXBvbmVudCwgdGltZSkge1xuICAgICAgICBpZiAoY29tcG9uZW50Lm9uVXBkYXRlKSB7XG4gICAgICAgICAgICBjb21wb25lbnQub25VcGRhdGUodGltZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVXBkYXRlLnVwZGF0ZSA9IHVwZGF0ZTtcbn0pKFVwZGF0ZSB8fCAoVXBkYXRlID0ge30pKTtcbiIsImV4cG9ydCBjbGFzcyBDb21wb25lbnRzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlbmRlciA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy51cGRhdGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuaGl0VGVzdCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSBuZXcgTWFwKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIERlYnVnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMud2FybmluZ3MgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIGxvZyguLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gICAgfVxuICAgIGVycm9yKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5lcnJvcnMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICB0aGlzLmVycm9ycy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG4gICAgd2FybmluZyguLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoYXJncyk7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMud2FybmluZ3MuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMud2FybmluZ3Muc2V0KGlkLCBjb3VudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgTG9hZGluZyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdID0gY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQocm9vdCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB9XG4gICAgYmVnaW4oKSB7XG4gICAgfVxuICAgIGVuZCgpIHtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNYXRyaXgsIFBvaW50IH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuLi9leHRlbnNpb25zL2Rpc3BsYXknO1xuaW1wb3J0IHsgUG9pbnRlciB9IGZyb20gJy4uL2V4dGVuc2lvbnMvcG9pbnRlcic7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9leHRlbnNpb25zL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBQb2ludGVyRXZlbnRzIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmdsb2JhbCA9IFBvaW50LmVtcHR5KCk7XG4gICAgICAgIHRoaXMubG9jYWwgPSBQb2ludC5lbXB0eSgpO1xuICAgICAgICB0aGlzLnBvaW50ZXJJZCA9IDA7XG4gICAgICAgIHRoaXMucG9pbnRlclR5cGUgPSAncG9pbnRlckRvd24nO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXTtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIG1hdHJpeDogTWF0cml4LmVtcHR5KCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXSA9IGNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIGRpc3BhdGNoKHR5cGUsIHgsIHksIGlkKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2NhbC54ID0geDtcbiAgICAgICAgdGhpcy5sb2NhbC55ID0geTtcbiAgICAgICAgdGhpcy5nbG9iYWwueCA9IHg7XG4gICAgICAgIHRoaXMuZ2xvYmFsLnkgPSB5O1xuICAgICAgICB0aGlzLnBvaW50ZXJJZCA9IGlkO1xuICAgICAgICB0aGlzLnBvaW50ZXJUeXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgTWF0cml4LnNldEVtcHR5KGJhc2UubWF0cml4KTtcbiAgICAgICAgdGhpcy5kZXB0aCsrO1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ29tcG9uZW50KHJvb3QsIGJhc2UpO1xuICAgIH1cbiAgICBkaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFEaXNwbGF5LmlzVmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFQb2ludGVyLmlzUG9pbnRlckVuYWJsZWQoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3QuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIFRyYW5zZm9ybS5nZXRNYXRyaXgoY29tcG9uZW50LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgICAgICBNYXRyaXguY29uY2F0KHBhcmVudC5tYXRyaXgsIGNvbnRleHQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50KGNvbnRleHQubWF0cml4LCB0aGlzLmdsb2JhbCwgdGhpcy5sb2NhbCk7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMubG9jYWw7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsIHRoaXMucG9pbnRlclR5cGUsIHgsIHksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJUeXBlID09PSAncG9pbnRlck1vdmUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiAhY29tcG9uZW50LnBvaW50ZXJPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3ZlcicsIHgsIHksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXJlc3VsdCAmJiBjb21wb25lbnQucG9pbnRlck92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdXQnLCB4LCB5LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wb2ludGVyT3ZlciA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXggfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvZGlzcGxheSc7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9leHRlbnNpb25zL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgbWF0cml4OiBNYXRyaXguZW1wdHkoKSxcbiAgICAgICAgICAgICAgICBjb2xvclRyYW5zZm9ybTogQ29sb3JUcmFuc2Zvcm0uZW1wdHkoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdID0gY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgcGFyZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIURpc3BsYXkuaXNWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIFRyYW5zZm9ybS5nZXRNYXRyaXgoY29tcG9uZW50LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgIFRyYW5zZm9ybS5nZXRDb2xvclRyYW5zZm9ybShjb21wb25lbnQsIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBNYXRyaXguY29uY2F0KHBhcmVudC5tYXRyaXgsIGNvbnRleHQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgIENvbG9yVHJhbnNmb3JtLmNvbmNhdChwYXJlbnQuY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLmVuZ2luZS5wbGF0Zm9ybS5iZWdpbigpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgY29uc3QgYmFzZSA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLmRlcHRoKys7XG4gICAgICAgIE1hdHJpeC5jb3B5KHRoaXMuZW5naW5lLnNjcmVlbi5nZXRNYXRyaXgoKSwgYmFzZS5tYXRyaXgpO1xuICAgICAgICBDb2xvclRyYW5zZm9ybS5zZXRFbXB0eShiYXNlLmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQocm9vdCwgYmFzZSk7XG4gICAgICAgIHRoaXMuZW5naW5lLnBsYXRmb3JtLmVuZCgpO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydFRpbWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgUmVzb3VyY2VzIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlc29sdmVycyA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgZ2V0KGFzc2V0KSB7XG4gICAgICAgIGlmICghYXNzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VzLmdldChhc3NldCk7XG4gICAgICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHJlc291cmNlID0gdGhpcy5yZXNvbHZlKGFzc2V0KTtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzLnNldChhc3NldCwgcmVzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICB9XG4gICAgcmVzb2x2ZShhc3NldCkge1xuICAgICAgICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHJlc29sdmVyKGFzc2V0LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgICAgICBpZiAocmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmdpbmUuZGVidWcud2FybmluZyhgUmVzb3VyY2Ugbm90IHJlc29sdmVkOiAke2Fzc2V0fWApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNYXRyaXggfSBmcm9tICdAZTJkL2dlb20nO1xuZXhwb3J0IGNsYXNzIFNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSA0MDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDAwO1xuICAgICAgICB0aGlzLnBpeGVsUmF0aW8gPSAwO1xuICAgICAgICB0aGlzLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXRyaXggPSBNYXRyaXguZW1wdHkoKTtcbiAgICB9XG4gICAgZ2V0TWF0cml4KCkge1xuICAgICAgICBjb25zdCBwaXhlbFJhdGlvID0gdGhpcy5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIHRoaXMubWF0cml4LmEgPSBwaXhlbFJhdGlvO1xuICAgICAgICB0aGlzLm1hdHJpeC5kID0gcGl4ZWxSYXRpbztcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICAgIH1cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVsbHNjcmVlbiA/IHdpbmRvdy5pbm5lcldpZHRoIDogdGhpcy53aWR0aDtcbiAgICB9XG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuID8gd2luZG93LmlubmVySGVpZ2h0IDogdGhpcy5oZWlnaHQ7XG4gICAgfVxuICAgIGdldFBpeGVsUmF0aW8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpeGVsUmF0aW8gPiAwID8gdGhpcy5waXhlbFJhdGlvIDogd2luZG93LmRldmljZVBpeGVsUmF0aW8gPz8gMTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGlja2VyIHtcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICAgICAgdGhpcy5mcmFtZVJhdGUgPSAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnVwZGF0ZXIudXBkYXRlKHRpbWUpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUubG9hZGluZy51cGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlbmRlcmVyLnJlbmRlcigpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZUZyYW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IChjdXJyZW50VGltZSAtIHRoaXMudGltZSkgLyAxMDAwO1xuICAgICAgICAgICAgdGhpcy50aW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOZXh0RnJhbWUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgfVxuICAgIGdldCBpc1BhdXNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGF1c2VkO1xuICAgIH1cbiAgICBwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmV4dEZyYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHVwZGF0ZU5leHRGcmFtZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlRnJhbWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFVwZGF0ZSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdXBkYXRlJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFVwZGF0ZXIgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQocm9vdCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG4gICAgdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFVcGRhdGUuaXNFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoY29tcG9uZW50KTtcbiAgICAgICAgVXBkYXRlLnVwZGF0ZShjb21wb25lbnQsIHRoaXMudGltZSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVQcm9wZXJ0aWVzKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnByb3BlcnRpZXMuZm9yRWFjaCgoaGFuZGxlciwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRbcHJvcGVydHldKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9sb2FkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2VuZ2luZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL2NvbXBvbmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9kZWJ1Zyc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3BsYXRmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcG9pbnRlci1ldmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9yZW5kZXJlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3Jlc291cmNlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3NjcmVlbic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3RpY2tlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3VwZGF0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pbnB1dC9tb3VzZSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvZGlzcGxheSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvcGl2b3QnO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3NvdXJjZSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvdHJhbnNmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy91cGRhdGUnO1xuIiwiZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCB0eXBlKSB7XG4gICAgY29uc3QgeyB2aWV3IH0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgY29uc3QgY2xpZW50UmVjdCA9IHZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSBjbGllbnRSZWN0LmxlZnQgLSB2aWV3LmNsaWVudExlZnQ7XG4gICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSBjbGllbnRSZWN0LnRvcCAtIHZpZXcuY2xpZW50VG9wO1xuICAgIGVuZ2luZS5wb2ludGVyRXZlbnRzLmRpc3BhdGNoKHR5cGUsIHgsIHksIDApO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5leHBvcnQgdmFyIE1vdXNlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChNb3VzZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gZW5naW5lLnBsYXRmb3JtO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckRvd24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlclVwJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlck1vdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE1vdXNlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoTW91c2VFeHRlbnNpb24gfHwgKE1vdXNlRXh0ZW5zaW9uID0ge30pKTtcbiIsImV4cG9ydCB2YXIgQm91bmRzO1xuKGZ1bmN0aW9uIChCb3VuZHMpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1pblg6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtaW5ZOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWF4WDogTnVtYmVyLk1JTl9WQUxVRSxcbiAgICAgICAgICAgIG1heFk6IE51bWJlci5NSU5fVkFMVUUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIEJvdW5kcy5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KGJvdW5kcykge1xuICAgICAgICBib3VuZHMubWluWCA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGJvdW5kcy5taW5ZID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1heFggPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWF4WSA9IE51bWJlci5NSU5fVkFMVUU7XG4gICAgfVxuICAgIEJvdW5kcy5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkoYm91bmRzKSB7XG4gICAgICAgIHJldHVybiBib3VuZHMubWluWCA9PT0gTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1pblkgPT09IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5tYXhYID09PSBOdW1iZXIuTUlOX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWF4WSA9PT0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICB9XG4gICAgQm91bmRzLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIHRvUmVjdGFuZ2xlKGJvdW5kcywgcmVjdGFuZ2xlKSB7XG4gICAgICAgIGNvbnN0IHsgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgfSA9IGJvdW5kcztcbiAgICAgICAgcmVjdGFuZ2xlLnggPSBtaW5YO1xuICAgICAgICByZWN0YW5nbGUueSA9IG1pblk7XG4gICAgICAgIHJlY3RhbmdsZS53aWR0aCA9IG1heFggLSBtaW5YO1xuICAgICAgICByZWN0YW5nbGUuaGVpZ2h0ID0gbWF4WSAtIG1pblk7XG4gICAgfVxuICAgIEJvdW5kcy50b1JlY3RhbmdsZSA9IHRvUmVjdGFuZ2xlO1xuICAgIGZ1bmN0aW9uIHRlc3RYKGJvdW5kcywgeCkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RYID0gdGVzdFg7XG4gICAgZnVuY3Rpb24gdGVzdFkoYm91bmRzLCB5KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFkgPSB0ZXN0WTtcbiAgICBmdW5jdGlvbiB0ZXN0KGJvdW5kcywgeCwgeSkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0ID0gdGVzdDtcbiAgICBmdW5jdGlvbiB0ZXN0UG9pbnQoYm91bmRzLCBwb2ludCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0UG9pbnQgPSB0ZXN0UG9pbnQ7XG59KShCb3VuZHMgfHwgKEJvdW5kcyA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIENvbG9yVHJhbnNmb3JtO1xuKGZ1bmN0aW9uIChDb2xvclRyYW5zZm9ybSkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxwaGFNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgcmVkTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGdyZWVuTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGJsdWVNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYWxwaGFPZmZzZXQ6IDAsXG4gICAgICAgICAgICByZWRPZmZzZXQ6IDAsXG4gICAgICAgICAgICBncmVlbk9mZnNldDogMCxcbiAgICAgICAgICAgIGJsdWVPZmZzZXQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShjdCkge1xuICAgICAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5NdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ibHVlTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYWxwaGFNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5yZWRPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmdyZWVuT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ibHVlT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU9mZnNldCA9PT0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eVdpdGhBbHBoYShjdCkge1xuICAgICAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5NdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ibHVlTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYmx1ZU9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmlzRW1wdHlXaXRoQWxwaGEgPSBpc0VtcHR5V2l0aEFscGhhO1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KGN0KSB7XG4gICAgICAgIGN0LnJlZE11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5ncmVlbk11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5ibHVlTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LmFscGhhTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LnJlZE9mZnNldCA9IDA7XG4gICAgICAgIGN0LmdyZWVuT2Zmc2V0ID0gMDtcbiAgICAgICAgY3QuYmx1ZU9mZnNldCA9IDA7XG4gICAgICAgIGN0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KGZyb20sIHRvKSB7XG4gICAgICAgIHRvLmFscGhhTXVsdGlwbGllciA9IGZyb20uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICB0by5yZWRNdWx0aXBsaWVyID0gZnJvbS5yZWRNdWx0aXBsaWVyO1xuICAgICAgICB0by5ncmVlbk11bHRpcGxpZXIgPSBmcm9tLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgdG8uYmx1ZU11bHRpcGxpZXIgPSBmcm9tLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICB0by5hbHBoYU9mZnNldCA9IGZyb20uYWxwaGFPZmZzZXQ7XG4gICAgICAgIHRvLnJlZE9mZnNldCA9IGZyb20ucmVkT2Zmc2V0O1xuICAgICAgICB0by5ncmVlbk9mZnNldCA9IGZyb20uZ3JlZW5PZmZzZXQ7XG4gICAgICAgIHRvLmJsdWVPZmZzZXQgPSBmcm9tLmJsdWVPZmZzZXQ7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIGNvbmNhdChjdDEsIGN0MCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGFscGhhTXVsdGlwbGllciA9IGN0MS5hbHBoYU11bHRpcGxpZXIgKiBjdDAuYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCByZWRNdWx0aXBsaWVyID0gY3QxLnJlZE11bHRpcGxpZXIgKiBjdDAucmVkTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgZ3JlZW5NdWx0aXBsaWVyID0gY3QxLmdyZWVuTXVsdGlwbGllciAqIGN0MC5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGJsdWVNdWx0aXBsaWVyID0gY3QxLmJsdWVNdWx0aXBsaWVyICogY3QwLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBhbHBoYU9mZnNldCA9IGN0MS5hbHBoYU11bHRpcGxpZXIgKiBjdDAuYWxwaGFPZmZzZXQgKyBjdDAuYWxwaGFPZmZzZXQ7XG4gICAgICAgIGNvbnN0IHJlZE9mZnNldCA9IGN0MS5yZWRNdWx0aXBsaWVyICogY3QwLnJlZE9mZnNldCArIGN0MC5yZWRPZmZzZXQ7XG4gICAgICAgIGNvbnN0IGdyZWVuT2Zmc2V0ID0gY3QxLmdyZWVuTXVsdGlwbGllciAqIGN0MC5ncmVlbk9mZnNldCArIGN0MC5ncmVlbk9mZnNldDtcbiAgICAgICAgY29uc3QgYmx1ZU9mZnNldCA9IGN0MS5ibHVlTXVsdGlwbGllciAqIGN0MC5ibHVlT2Zmc2V0ICsgY3QwLmJsdWVPZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gcmVkTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IGdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IGFscGhhT2Zmc2V0O1xuICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gcmVkT2Zmc2V0O1xuICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBncmVlbk9mZnNldDtcbiAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBibHVlT2Zmc2V0O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5jb25jYXQgPSBjb25jYXQ7XG59KShDb2xvclRyYW5zZm9ybSB8fCAoQ29sb3JUcmFuc2Zvcm0gPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9jb2xvci10cmFuc2Zvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9ib3VuZHMnO1xuZXhwb3J0ICogZnJvbSAnLi9tYXRyaXgnO1xuZXhwb3J0ICogZnJvbSAnLi9wb2ludCc7XG5leHBvcnQgKiBmcm9tICcuL3JlY3RhbmdsZSc7XG4iLCJleHBvcnQgdmFyIE1hdHJpeDtcbihmdW5jdGlvbiAoTWF0cml4KSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiAxLFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGM6IDAsXG4gICAgICAgICAgICBkOiAxLFxuICAgICAgICAgICAgdHg6IDAsXG4gICAgICAgICAgICB0eTogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTWF0cml4LmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShtYXRyaXgpIHtcbiAgICAgICAgcmV0dXJuIG1hdHJpeC5hID09PSAxXG4gICAgICAgICAgICAmJiBtYXRyaXguYiA9PT0gMFxuICAgICAgICAgICAgJiYgbWF0cml4LmMgPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC5kID09PSAxXG4gICAgICAgICAgICAmJiBtYXRyaXgudHggPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC50eSA9PT0gMDtcbiAgICB9XG4gICAgTWF0cml4LmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KG1hdHJpeCkge1xuICAgICAgICBtYXRyaXguYSA9IDE7XG4gICAgICAgIG1hdHJpeC5iID0gMDtcbiAgICAgICAgbWF0cml4LmMgPSAwO1xuICAgICAgICBtYXRyaXguZCA9IDE7XG4gICAgICAgIG1hdHJpeC50eCA9IDA7XG4gICAgICAgIG1hdHJpeC50eSA9IDA7XG4gICAgfVxuICAgIE1hdHJpeC5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoZnJvbSwgdG8pIHtcbiAgICAgICAgdG8uYSA9IGZyb20uYTtcbiAgICAgICAgdG8uYiA9IGZyb20uYjtcbiAgICAgICAgdG8uYyA9IGZyb20uYztcbiAgICAgICAgdG8uZCA9IGZyb20uZDtcbiAgICAgICAgdG8udHggPSBmcm9tLnR4O1xuICAgICAgICB0by50eSA9IGZyb20udHk7XG4gICAgfVxuICAgIE1hdHJpeC5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBjb25jYXQobWF0cml4MCwgbWF0cml4MSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGEgPSBtYXRyaXgxLmEgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmM7XG4gICAgICAgIGNvbnN0IGIgPSBtYXRyaXgxLmEgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmQ7XG4gICAgICAgIGNvbnN0IGMgPSBtYXRyaXgxLmMgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmM7XG4gICAgICAgIGNvbnN0IGQgPSBtYXRyaXgxLmMgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmQ7XG4gICAgICAgIGNvbnN0IHR4ID0gbWF0cml4MS50eCAqIG1hdHJpeDAuYSArIG1hdHJpeDEudHkgKiBtYXRyaXgwLmMgKyBtYXRyaXgwLnR4O1xuICAgICAgICBjb25zdCB0eSA9IG1hdHJpeDEudHggKiBtYXRyaXgwLmIgKyBtYXRyaXgxLnR5ICogbWF0cml4MC5kICsgbWF0cml4MC50eTtcbiAgICAgICAgcmVzdWx0LmEgPSBhO1xuICAgICAgICByZXN1bHQuYiA9IGI7XG4gICAgICAgIHJlc3VsdC5jID0gYztcbiAgICAgICAgcmVzdWx0LmQgPSBkO1xuICAgICAgICByZXN1bHQudHggPSB0eDtcbiAgICAgICAgcmVzdWx0LnR5ID0gdHk7XG4gICAgfVxuICAgIE1hdHJpeC5jb25jYXQgPSBjb25jYXQ7XG4gICAgZnVuY3Rpb24gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KSB7XG4gICAgICAgIHJldHVybiBtYXRyaXguYSAqIG1hdHJpeC5kIC0gbWF0cml4LmIgKiBtYXRyaXguYztcbiAgICB9XG4gICAgTWF0cml4LmdldERldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQ7XG4gICAgZnVuY3Rpb24gaW52ZXJ0KG1hdHJpeCwgcmVzdWx0KSB7XG4gICAgICAgIGxldCBkZXRlcm1pbmFudCA9IGdldERldGVybWluYW50KG1hdHJpeCk7XG4gICAgICAgIGlmIChkZXRlcm1pbmFudCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0LmEgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gLW1hdHJpeC50eDtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IC1tYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCA9IDEuMCAvIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBtYXRyaXguYSAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmIgPSAtbWF0cml4LmIgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gLW1hdHJpeC5jICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuZCA9IG1hdHJpeC5kICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQudHggPSAtcmVzdWx0LmEgKiBtYXRyaXgudHggLSByZXN1bHQuYyAqIG1hdHJpeC50eTtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IC1yZXN1bHQuYiAqIG1hdHJpeC50eCAtIHJlc3VsdC5kICogbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hdHJpeC5pbnZlcnQgPSBpbnZlcnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJlc3VsdC54ID0geCAqIG1hdHJpeC5hICsgeSAqIG1hdHJpeC5jICsgbWF0cml4LnR4O1xuICAgICAgICByZXN1bHQueSA9IHggKiBtYXRyaXguYiArIHkgKiBtYXRyaXguZCArIG1hdHJpeC50eTtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybVBvaW50ID0gdHJhbnNmb3JtUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnRMb2NhbChtYXRyaXgsIHBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmVzdWx0LnggPSB4ICogbWF0cml4LmEgKyB5ICogbWF0cml4LmM7XG4gICAgICAgIHJlc3VsdC55ID0geCAqIG1hdHJpeC5iICsgeSAqIG1hdHJpeC5kO1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnRMb2NhbCA9IHRyYW5zZm9ybVBvaW50TG9jYWw7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtSW52ZXJzZVBvaW50KG1hdHJpeCwgcG9pbnQsIHJlc3VsdCkge1xuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudChtYXRyaXgpO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC54ID0gLW1hdHJpeC50eDtcbiAgICAgICAgICAgIHJlc3VsdC55ID0gLW1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRldGVybWluYW50ID0gMSAvIGRldGVybWluYW50O1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgICAgIHJlc3VsdC54ID0gZGV0ZXJtaW5hbnQgKiAobWF0cml4LmMgKiAobWF0cml4LnR5IC0geSkgKyBtYXRyaXguZCAqICh4IC0gbWF0cml4LnR4KSk7XG4gICAgICAgICAgICByZXN1bHQueSA9IGRldGVybWluYW50ICogKG1hdHJpeC5hICogKHkgLSBtYXRyaXgudHkpICsgbWF0cml4LmIgKiAobWF0cml4LnR4IC0geCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1JbnZlcnNlUG9pbnQgPSB0cmFuc2Zvcm1JbnZlcnNlUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtQm91bmRzKG1hdHJpeCwgYm91bmRzLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBhLCBiLCBjLCBkLCB0eCwgdHksIH0gPSBtYXRyaXg7XG4gICAgICAgIGNvbnN0IHJ4ID0gYm91bmRzLng7XG4gICAgICAgIGNvbnN0IHJ5ID0gYm91bmRzLnk7XG4gICAgICAgIGNvbnN0IHJyID0gcnggKyBib3VuZHMud2lkdGg7XG4gICAgICAgIGNvbnN0IHJiID0gcnkgKyBib3VuZHMuaGVpZ2h0O1xuICAgICAgICBjb25zdCBueDEgPSByeCAqIGEgKyByeSAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkxID0gcnggKiBiICsgcnkgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54MiA9IHJyICogYSArIHJ5ICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTIgPSByciAqIGIgKyByeSAqIGQgKyB0eTtcbiAgICAgICAgY29uc3QgbngzID0gcnIgKiBhICsgcmIgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MyA9IHJyICogYiArIHJiICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDQgPSByeCAqIGEgKyByYiAqIGMgKyB0eDtcbiAgICAgICAgY29uc3Qgbnk0ID0gcnggKiBiICsgcmIgKiBkICsgdHk7XG4gICAgICAgIGxldCBsZWZ0ID0gbngxO1xuICAgICAgICBpZiAobGVmdCA+IG54Mikge1xuICAgICAgICAgICAgbGVmdCA9IG54MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54Mykge1xuICAgICAgICAgICAgbGVmdCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54NCkge1xuICAgICAgICAgICAgbGVmdCA9IG54NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9wID0gbnkxO1xuICAgICAgICBpZiAodG9wID4gbnkyKSB7XG4gICAgICAgICAgICB0b3AgPSBueTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcCA+IG55Mykge1xuICAgICAgICAgICAgdG9wID0gbnkzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3AgPiBueTQpIHtcbiAgICAgICAgICAgIHRvcCA9IG55NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmlnaHQgPSBueDE7XG4gICAgICAgIGlmIChyaWdodCA8IG54Mikge1xuICAgICAgICAgICAgcmlnaHQgPSBueDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0IDwgbngzKSB7XG4gICAgICAgICAgICByaWdodCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgPCBueDQpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbng0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBib3R0b20gPSBueTE7XG4gICAgICAgIGlmIChib3R0b20gPCBueTIpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tIDwgbnkzKSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdHRvbSA8IG55NCkge1xuICAgICAgICAgICAgYm90dG9tID0gbnk0O1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC54ID0gbGVmdDtcbiAgICAgICAgcmVzdWx0LnkgPSB0b3A7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGJvdHRvbSAtIHRvcDtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybUJvdW5kcyA9IHRyYW5zZm9ybUJvdW5kcztcbn0pKE1hdHJpeCB8fCAoTWF0cml4ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUG9pbnQ7XG4oZnVuY3Rpb24gKFBvaW50KSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG4gICAgUG9pbnQuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBsZW5ndGgocG9pbnQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9XG4gICAgUG9pbnQubGVuZ3RoID0gbGVuZ3RoO1xuICAgIGZ1bmN0aW9uIGFuZ2xlKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHBvaW50LnksIHBvaW50LngpO1xuICAgIH1cbiAgICBQb2ludC5hbmdsZSA9IGFuZ2xlO1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMDtcbiAgICB9XG4gICAgUG9pbnQuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gZXF1YWxzKHBvaW50MCwgcG9pbnQxKSB7XG4gICAgICAgIHJldHVybiBwb2ludDAueCA9PT0gcG9pbnQxLnggJiYgcG9pbnQwLnkgPT09IHBvaW50MS55O1xuICAgIH1cbiAgICBQb2ludC5lcXVhbHMgPSBlcXVhbHM7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkocG9pbnQpIHtcbiAgICAgICAgcG9pbnQueCA9IDA7XG4gICAgICAgIHBvaW50LnkgPSAwO1xuICAgIH1cbiAgICBQb2ludC5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LnggPSBzb3VyY2UueDtcbiAgICAgICAgdGFyZ2V0LnkgPSBzb3VyY2UueTtcbiAgICB9XG4gICAgUG9pbnQuY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gbm9ybWFsaXplKHBvaW50LCB0aGlja25lc3MpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gbGVuZ3RoKHBvaW50KTtcbiAgICAgICAgaWYgKHZhbHVlID4gMCkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlja25lc3MgLyB2YWx1ZTtcbiAgICAgICAgICAgIHBvaW50LnggKj0gdmFsdWU7XG4gICAgICAgICAgICBwb2ludC55ICo9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBvaW50Lm5vcm1hbGl6ZSA9IG5vcm1hbGl6ZTtcbiAgICBmdW5jdGlvbiBkaXN0YW5jZShwb2ludDAsIHBvaW50MSkge1xuICAgICAgICBjb25zdCBkeCA9IHBvaW50MC54IC0gcG9pbnQxLng7XG4gICAgICAgIGNvbnN0IGR5ID0gcG9pbnQwLnkgLSBwb2ludDEueTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuICAgIFBvaW50LmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgZnVuY3Rpb24gaW50ZXJwb2xhdGUoYmVnaW4sIGVuZCwgdmFsdWUsIHJlc3VsdCkge1xuICAgICAgICByZXN1bHQueCA9IGJlZ2luLnggKyB2YWx1ZSAqIChlbmQueCAtIGJlZ2luLngpO1xuICAgICAgICByZXN1bHQueSA9IGJlZ2luLnkgKyB2YWx1ZSAqIChlbmQueSAtIGJlZ2luLnkpO1xuICAgIH1cbiAgICBQb2ludC5pbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlO1xuICAgIGZ1bmN0aW9uIHBvbGFyKHBvaW50LCBsZW5ndGgsIGFuZ2xlKSB7XG4gICAgICAgIHBvaW50LnggPSBsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIHBvaW50LnkgPSBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgfVxuICAgIFBvaW50LnBvbGFyID0gcG9sYXI7XG59KShQb2ludCB8fCAoUG9pbnQgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBSZWN0YW5nbGU7XG4oZnVuY3Rpb24gKFJlY3RhbmdsZSkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJlY3RhbmdsZS54ID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLnkgPSAwO1xuICAgICAgICByZWN0YW5nbGUud2lkdGggPSAwO1xuICAgICAgICByZWN0YW5nbGUuaGVpZ2h0ID0gMDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShyZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZS53aWR0aCA9PT0gMCB8fCByZWN0YW5nbGUuaGVpZ2h0ID09PSAwO1xuICAgIH1cbiAgICBSZWN0YW5nbGUuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gY29udGFpbnMocmVjdGFuZ2xlLCBwb2ludCkge1xuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlLnggPCBwb2ludC54XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueCArIHJlY3RhbmdsZS53aWR0aCA+IHBvaW50LnhcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS55IDwgcG9pbnQueVxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnkgKyByZWN0YW5nbGUuaGVpZ2h0ID4gcG9pbnQueTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmNvbnRhaW5zID0gY29udGFpbnM7XG59KShSZWN0YW5nbGUgfHwgKFJlY3RhbmdsZSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BlMmQvY29yZSc7XG5pbXBvcnQgeyBDb2xvclRyYW5zZm9ybSwgTWF0cml4LCBSZWN0YW5nbGUgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgSW1hZ2VFeHRlbnNpb24sIElNQUdFIH0gZnJvbSAnLi9pbWFnZSc7XG5jb25zdCBib3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihpbWFnZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBpbWFnZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gcGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgaWYgKENvbG9yVHJhbnNmb3JtLmlzRW1wdHlXaXRoQWxwaGEoY29sb3JUcmFuc2Zvcm0pKSB7XG4gICAgICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUNvbnRleHQgPSBwbGF0Zm9ybS5jcmVhdGVDdXN0b21Db250ZXh0KCk7XG4gICAgICAgICAgICBib3VuZHMueCA9IHg7XG4gICAgICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIGJvdW5kcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtQm91bmRzKG1hdHJpeCwgYm91bmRzLCBib3VuZHMpO1xuICAgICAgICAgICAgaWYgKFJlY3RhbmdsZS5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LmNsZWFyUmVjdChib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gY3VzdG9tQ29udGV4dC5nZXRJbWFnZURhdGEoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgY29uc3Qgcm0gPSBjb2xvclRyYW5zZm9ybS5yZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3QgZ20gPSBjb2xvclRyYW5zZm9ybS5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBibSA9IGNvbG9yVHJhbnNmb3JtLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3QgYW0gPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBybyA9IGNvbG9yVHJhbnNmb3JtLnJlZE9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGdvID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5PZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBibyA9IGNvbG9yVHJhbnNmb3JtLmJsdWVPZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBhbyA9IGNvbG9yVHJhbnNmb3JtLmFscGhhT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBpbWFnZURhdGE7XG4gICAgICAgICAgICBjb25zdCB7IGxlbmd0aCB9ID0gZGF0YTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOykge1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBybSArIHJvO1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBnbSArIGdvO1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBibSArIGJvO1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBhbSArIGFvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCBib3VuZHMueCwgYm91bmRzLnkpO1xuICAgICAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybSgpO1xuICAgICAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UoY3VzdG9tQ29udGV4dC5jYW52YXMsIGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0LCBib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBwbGF0Zm9ybS5kZXN0cm95Q3VzdG9tQ29udGV4dChjdXN0b21Db250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBJbWFnZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoSU1BR0UsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uIHx8IChDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSB9IGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0IHZhciBDYW52YXNJbWFnZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzSW1hZ2VFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBlbmdpbmUucGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIEltYWdlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChJTUFHRSwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNJbWFnZUV4dGVuc2lvbiB8fCAoQ2FudmFzSW1hZ2VFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QsIH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGUyZC9yZXNvdXJjZXMnO1xuZXhwb3J0IGNvbnN0IElNQUdFID0gJ2ltYWdlJztcbmV4cG9ydCB2YXIgSW1hZ2U7XG4oZnVuY3Rpb24gKEltYWdlKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGltYWdlLCBib3VuZHMsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgIGJvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBJbWFnZS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShJbWFnZSB8fCAoSW1hZ2UgPSB7fSkpO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIEltYWdlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChJbWFnZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGhpdFRlc3QoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGxvY2FsIH0gPSBlbmdpbmUucG9pbnRlckV2ZW50cztcbiAgICAgICAgSW1hZ2UuY2FsY3VsYXRlQm91bmRzKGltYWdlLCBib3VuZHMsIGVuZ2luZSk7XG4gICAgICAgIHJldHVybiBSZWN0YW5nbGUuY29udGFpbnMoYm91bmRzLCBsb2NhbCk7XG4gICAgfVxuICAgIEltYWdlRXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGxvYWRlZChpbWFnZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUubG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBpbWFnZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZT8ubG9hZGVkIHx8ICFyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIEltYWdlRXh0ZW5zaW9uLmxvYWRlZCA9IGxvYWRlZDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChJTUFHRSwgaGl0VGVzdCk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5zZXQoSU1BR0UsIGxvYWRlZCk7XG4gICAgICAgIEltYWdlUmVzb3VyY2UuaW5pdChlbmdpbmUpO1xuICAgIH1cbiAgICBJbWFnZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKEltYWdlRXh0ZW5zaW9uIHx8IChJbWFnZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2ltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vY2FudmFzLWltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vY2FudmFzLWltYWdlLWNvbG9yJztcbiIsImV4cG9ydCB2YXIgSW1hZ2VSZXNvdXJjZTtcbihmdW5jdGlvbiAoSW1hZ2VSZXNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIHJlc29sdmUoYXNzZXQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBleHRlbnNpb24gPSBhc3NldC5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgICBzd2l0Y2ggKGV4dGVuc2lvbikge1xuICAgICAgICAgICAgY2FzZSAncG5nJzpcbiAgICAgICAgICAgIGNhc2UgJ2pwZyc6XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gYXNzZXQ7XG4gICAgICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaW1hZ2UgbG9hZGVkOiAke2Fzc2V0fWApO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5pbWFnZSA9IGltYWdlO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdpbWFnZSBsb2FkIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBJbWFnZVJlc291cmNlLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvbHZlKTtcbiAgICB9XG4gICAgSW1hZ2VSZXNvdXJjZS5pbml0ID0gaW5pdDtcbn0pKEltYWdlUmVzb3VyY2UgfHwgKEltYWdlUmVzb3VyY2UgPSB7fSkpO1xuIiwiY29uc3QgUElfMiA9IE1hdGguUEkgKiAyO1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5RWxsaXBzZShkYXRhLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHJhZGl1cyA9IDAsIHJhZGl1c1gsIHJhZGl1c1ksIH0gPSBkYXRhO1xuICAgIGNvbnN0IHJ4ID0gcmFkaXVzWCA/PyByYWRpdXM7XG4gICAgY29uc3QgcnkgPSByYWRpdXNZID8/IHJhZGl1cztcbiAgICBpZiAocnggPT09IDAgfHwgcnkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQuZWxsaXBzZSh4LCB5LCByeCwgcnksIDAsIDAsIFBJXzIpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYXBwbHlDb21tYW5kKGNvbW1hbmQsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IGNvbW1hbmQ7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21vdmVUbyc6XG4gICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8obW92ZVRvLnggPz8gMCwgbW92ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbGluZVRvJzpcbiAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhsaW5lVG8ueCA/PyAwLCBsaW5lVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjdXJ2ZVRvJzpcbiAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvKGN1cnZlVG8uY3ggPz8gMCwgY3VydmVUby5jeSA/PyAwLCBjdXJ2ZVRvLnggPz8gMCwgY3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2N1YmljQ3VydmVUbyc6XG4gICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKGN1YmljQ3VydmVUby5jeCA/PyAwLCBjdWJpY0N1cnZlVG8uY3kgPz8gMCwgY3ViaWNDdXJ2ZVRvLnN4ID8/IDAsIGN1YmljQ3VydmVUby5zeSA/PyAwLCBjdWJpY0N1cnZlVG8ueCA/PyAwLCBjdWJpY0N1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGF0aChkYXRhLCBjb250ZXh0KSB7XG4gICAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBkYXRhW2ldO1xuICAgICAgICBhcHBseUNvbW1hbmQoY29tbWFuZCwgY29udGV4dCk7XG4gICAgfVxuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYXBwbHlSZWN0YW5nbGUoZGF0YSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCB3aWR0aCA9IDAsIGhlaWdodCA9IDAsIH0gPSBkYXRhO1xuICAgIGlmICh3aWR0aCA9PT0gMCB8fCBoZWlnaHQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAZTJkL2NvcmUnO1xuaW1wb3J0IHsgTWF0cml4LCBQb2ludCwgUmVjdGFuZ2xlLCB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBTaGFwZUV4dGVuc2lvbiwgU0hBUEUsIFNoYXBlIH0gZnJvbSAnLi4vc2hhcGUnO1xuaW1wb3J0IHsgYXBwbHlSZWN0YW5nbGUgfSBmcm9tICcuL3JlY3RhbmdsZSc7XG5pbXBvcnQgeyBhcHBseUVsbGlwc2UgfSBmcm9tICcuL2VsbGlwc2UnO1xuaW1wb3J0IHsgYXBwbHlQYXRoIH0gZnJvbSAnLi9wYXRoJztcbmltcG9ydCB7IGFwcGx5U3RyaW5nIH0gZnJvbSAnLi9zdHJpbmcnO1xuaW1wb3J0IHsgc2V0RmlsbFN0eWxlLCBzZXRTdHJva2VTdHlsZSB9IGZyb20gJy4vc3R5bGUnO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5jb25zdCBvZmZzZXQgPSBQb2ludC5lbXB0eSgpO1xuZnVuY3Rpb24gcmVuZGVyR3JhcGhpY3MoZGF0YSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGNvbnN0IHsgZmlsbCwgc3Ryb2tlIH0gPSBkYXRhO1xuICAgIGNvbnN0IGhhc0ZpbGwgPSAhIWZpbGwgfHwgZmlsbCA9PT0gMDtcbiAgICBjb25zdCBoYXNTdHJva2UgPSAhIXN0cm9rZSB8fCBzdHJva2UgPT09IDA7XG4gICAgaWYgKCFoYXNGaWxsICYmICFoYXNTdHJva2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZXhpc3QgPSB0cnVlO1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gZGF0YTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAncmVjdGFuZ2xlJzpcbiAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlSZWN0YW5nbGUoZGF0YSwgY29udGV4dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICAgICAgICBleGlzdCA9IGFwcGx5RWxsaXBzZShkYXRhLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYXRoJzpcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBkYXRhO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXRoLmRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgZXhpc3QgPSBhcHBseVN0cmluZyhwYXRoLmRhdGEsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwYXRoLmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgZXhpc3QgPSBhcHBseVBhdGgocGF0aC5kYXRhLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4aXN0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoIWV4aXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGhhc0ZpbGwpIHtcbiAgICAgICAgc2V0RmlsbFN0eWxlKGZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpO1xuICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICB9XG4gICAgaWYgKGhhc1N0cm9rZSkge1xuICAgICAgICBzZXRTdHJva2VTdHlsZShzdHJva2UsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpO1xuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIH1cbn1cbmV4cG9ydCB2YXIgQ2FudmFzU2hhcGVFeHRlbnNpb247XG4oZnVuY3Rpb24gKENhbnZhc1NoYXBlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKHNoYXBlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBzaGFwZTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFBvaW50LnNldEVtcHR5KG9mZnNldCk7XG4gICAgICAgIGlmIChQaXZvdC5oYXNWYWx1ZXMoc2hhcGUpKSB7XG4gICAgICAgICAgICBTaGFwZS5jYWxjdWxhdGVCb3VuZHMoc2hhcGUsIGJvdW5kcyk7XG4gICAgICAgICAgICBpZiAoUmVjdGFuZ2xlLmlzRW1wdHkoYm91bmRzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9mZnNldC54ID0gUGl2b3QuZ2V0WChzaGFwZSwgYm91bmRzLndpZHRoKTtcbiAgICAgICAgICAgIG9mZnNldC55ID0gUGl2b3QuZ2V0WShzaGFwZSwgYm91bmRzLndpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBlbmdpbmUucGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICAgICAgaWYgKFBvaW50LmlzRW1wdHkob2Zmc2V0KSkge1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50TG9jYWwobWF0cml4LCBvZmZzZXQsIG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4ICsgb2Zmc2V0LngsIG1hdHJpeC50eSArIG9mZnNldC55KTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlbmRlckdyYXBoaWNzKGRhdGFbaV0sIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0MmQsIGVuZ2luZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZW5kZXJHcmFwaGljcyhkYXRhLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dDJkLCBlbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc1NoYXBlRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBTaGFwZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoU0hBUEUsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc1NoYXBlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ2FudmFzU2hhcGVFeHRlbnNpb24gfHwgKENhbnZhc1NoYXBlRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IEdyYXBoaWNzU3RyaW5nUmVhZGVyIH0gZnJvbSAnLi4vZGF0YS9zdHJpbmcnO1xuaW1wb3J0IHsgYXBwbHlDb21tYW5kIH0gZnJvbSAnLi9wYXRoJztcbmNvbnN0IHJlYWRlciA9IG5ldyBHcmFwaGljc1N0cmluZ1JlYWRlcigpO1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5U3RyaW5nKGRhdGEsIGNvbnRleHQpIHtcbiAgICBpZiAoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICByZWFkZXIuc2V0UGF0aChkYXRhKTtcbiAgICB3aGlsZSAocmVhZGVyLnJlYWROZXh0KCkpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHJlYWRlci5nZXRDb21tYW5kKCk7XG4gICAgICAgIGlmIChjb21tYW5kKSB7XG4gICAgICAgICAgICBhcHBseUNvbW1hbmQoY29tbWFuZCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IENhbnZhc1BhdHRlcm5zIH0gZnJvbSAnQGUyZC9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IE1hdHJpeCB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5jb25zdCBlbXB0eU1hdHJpeCA9IE1hdHJpeC5lbXB0eSgpO1xuY29uc3QgZW1wdHlBcnJheSA9IFtdO1xuZnVuY3Rpb24gZ2V0Q2FudmFzUGF0dGVybihmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgaWYgKHR5cGVvZiBmaWxsID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGZpbGwsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBmaWxsID09PSAnb2JqZWN0Jykge1xuICAgICAgICBzd2l0Y2ggKGZpbGwudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc29saWQnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHNvbGlkID0gZmlsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKHNvbGlkLmNvbG9yID8/IDAsIHNvbGlkLmFscGhhID8/IDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGNhc2UgJ2xpbmVhcic6XG4gICAgICAgICAgICAgICAgY29uc3QgeyBtYXRyaXg6IG1sID0gZW1wdHlNYXRyaXgsIGNvbG9yczogY2wgPSBlbXB0eUFycmF5LCBhbHBoYXM6IGFsID0gZW1wdHlBcnJheSwgcmF0aW9zOiBybCA9IGVtcHR5QXJyYXksIH0gPSBmaWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5saW5lYXJHcmFkaWVudFBhdHRlcm4obWwsIGNsLCBhbCwgcmwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGNhc2UgJ3JhZGlhbCc6XG4gICAgICAgICAgICAgICAgY29uc3QgeyBtYXRyaXg6IG1yID0gZW1wdHlNYXRyaXgsIGNvbG9yczogY3IgPSBlbXB0eUFycmF5LCBhbHBoYXM6IGFyID0gZW1wdHlBcnJheSwgcmF0aW9zOiByciA9IGVtcHR5QXJyYXksIH0gPSBmaWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5yYWRpYWxHcmFkaWVudFBhdHRlcm4obXIsIGNyLCBhciwgcnIsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGNhc2UgJ2JpdG1hcCc6XG4gICAgICAgICAgICAgICAgY29uc3QgYml0bWFwRmlsbCA9IGZpbGw7XG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXBlYXQgPSB0cnVlLCBzcmMgfSA9IGJpdG1hcEZpbGw7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMuYml0bWFwUGF0dGVybihyZXNvdXJjZS5pbWFnZSwgcmVwZWF0LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbGxTdHlsZShmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBnZXRDYW52YXNQYXR0ZXJuKGZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0cm9rZVN0eWxlKHN0cm9rZSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGlmICh0eXBlb2Ygc3Ryb2tlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKHN0cm9rZSwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGNvbnRleHQubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgICAgIGNvbnRleHQubGluZUpvaW4gPSAncm91bmQnO1xuICAgICAgICBjb250ZXh0Lm1pdGVyTGltaXQgPSAxMDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHN0cm9rZSA9PT0gJ29iamVjdCcgJiYgc3Ryb2tlLmZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gZ2V0Q2FudmFzUGF0dGVybihzdHJva2UuZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gc3Ryb2tlLnRoaWNrbmVzcyA/PyAxO1xuICAgICAgICBjb250ZXh0LmxpbmVDYXAgPSBzdHJva2UuY2FwcyA/PyAncm91bmQnO1xuICAgICAgICBjb250ZXh0LmxpbmVKb2luID0gc3Ryb2tlLmpvaW50cyA/PyAncm91bmQnO1xuICAgICAgICBjb250ZXh0Lm1pdGVyTGltaXQgPSBzdHJva2UubWl0ZXJMaW1pdCA/PyAxMDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgUGF0aENvbW1hbmQgfSBmcm9tICcuL3BhdGgnO1xuaW1wb3J0IHsgR3JhcGhpY3NTdHJpbmcgfSBmcm9tICcuL3N0cmluZyc7XG5leHBvcnQgdmFyIFJlY3RhbmdsZURhdGE7XG4oZnVuY3Rpb24gKFJlY3RhbmdsZURhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCB3aWR0aCA9IDAsIGhlaWdodCA9IDAsIH0gPSBkYXRhO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHgsIHkpO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHggKyB3aWR0aCwgeSArIGhlaWdodCk7XG4gICAgfVxuICAgIFJlY3RhbmdsZURhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoUmVjdGFuZ2xlRGF0YSB8fCAoUmVjdGFuZ2xlRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIEVsbGlwc2VEYXRhO1xuKGZ1bmN0aW9uIChFbGxpcHNlRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHJhZGl1cyA9IDAsIHJhZGl1c1gsIHJhZGl1c1ksIH0gPSBkYXRhO1xuICAgICAgICBjb25zdCByeCA9IHJhZGl1c1ggPz8gcmFkaXVzO1xuICAgICAgICBjb25zdCByeSA9IHJhZGl1c1kgPz8gcmFkaXVzO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHggLSByeCwgeSAtIHJ5KTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4ICsgcngsIHkgKyByeSk7XG4gICAgfVxuICAgIEVsbGlwc2VEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEVsbGlwc2VEYXRhIHx8IChFbGxpcHNlRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIFBhdGhEYXRhO1xuKGZ1bmN0aW9uIChQYXRoRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoRGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcGF0aERhdGE7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIEdyYXBoaWNzU3RyaW5nLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBkYXRhW2ldO1xuICAgICAgICAgICAgICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyhjb21tYW5kLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFBhdGhEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFBhdGhEYXRhIHx8IChQYXRoRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIEdyYXBoaWNzRGF0YTtcbihmdW5jdGlvbiAoR3JhcGhpY3NEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IGRhdGE7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAncmVjdGFuZ2xlJzpcbiAgICAgICAgICAgICAgICBSZWN0YW5nbGVEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICAgICAgICAgICAgRWxsaXBzZURhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwYXRoJzpcbiAgICAgICAgICAgICAgICBQYXRoRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEdyYXBoaWNzRGF0YSB8fCAoR3JhcGhpY3NEYXRhID0ge30pKTtcbiIsImltcG9ydCB7IEJvdW5kcyB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5leHBvcnQgdmFyIFBhdGhDb21tYW5kO1xuKGZ1bmN0aW9uIChQYXRoQ29tbWFuZCkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBwYXRoO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ21vdmVUbyc6XG4gICAgICAgICAgICBjYXNlICdsaW5lVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBtb3ZlVG8ueCA/PyAwLCBtb3ZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1cnZlVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3VydmVUby5jeCA/PyAwLCBjdXJ2ZVRvLmN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3VydmVUby54ID8/IDAsIGN1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1YmljQ3VydmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby5jeCA/PyAwLCBjdWJpY0N1cnZlVG8uY3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8uc3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLnN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLnggPz8gMCwgY3ViaWNDdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFBhdGhDb21tYW5kIHx8IChQYXRoQ29tbWFuZCA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQYXRoQ29tbWFuZCwgfSBmcm9tICcuL3BhdGgnO1xuY29uc3QgTlVNQkVSU19DT1VOVCA9IHtcbiAgICBNOiAyLFxuICAgIG06IDIsXG4gICAgTDogMixcbiAgICBsOiAyLFxuICAgIEg6IDEsXG4gICAgaDogMSxcbiAgICBWOiAxLFxuICAgIHY6IDEsXG4gICAgQzogNixcbiAgICBjOiA2LFxuICAgIFM6IDQsXG4gICAgczogNCxcbiAgICBROiA0LFxuICAgIHE6IDQsXG4gICAgVDogMixcbiAgICB0OiAyLFxufTtcbmV4cG9ydCBjbGFzcyBHcmFwaGljc1N0cmluZ1N0cmVhbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9ICcnO1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgdGhpcy5jb21tYW5kUmVnZXggPSAvW01tTGxIaFZ2Q2NTc1FxVHRdL2c7XG4gICAgICAgIHRoaXMubnVtYmVyUmVnZXggPSAvWy0rXT9bXFxkLl0rL2c7XG4gICAgfVxuICAgIHNldFBhdGgocGF0aCkge1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLmNvbW1hbmRSZWdleC5sYXN0SW5kZXggPSAwO1xuICAgIH1cbiAgICBnZXRDb21tYW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kO1xuICAgIH1cbiAgICBnZXRCdWZmZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlcjtcbiAgICB9XG4gICAgcmVhZE5leHQoKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmRNYXRjaCA9IHRoaXMuY29tbWFuZFJlZ2V4LmV4ZWModGhpcy5wYXRoKTtcbiAgICAgICAgaWYgKGNvbW1hbmRNYXRjaCkge1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kID0gY29tbWFuZE1hdGNoWzBdO1xuICAgICAgICAgICAgY29uc3QgY291bnQgPSBOVU1CRVJTX0NPVU5UW3RoaXMuY29tbWFuZF07XG4gICAgICAgICAgICB0aGlzLm51bWJlclJlZ2V4Lmxhc3RJbmRleCA9IGNvbW1hbmRNYXRjaC5pbmRleDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlck1hdGNoID0gdGhpcy5udW1iZXJSZWdleC5leGVjKHRoaXMucGF0aCk7XG4gICAgICAgICAgICAgICAgaWYgKG51bWJlck1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyW2ldID0gcGFyc2VGbG9hdChudW1iZXJNYXRjaFswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU3RyaW5nUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBuZXcgR3JhcGhpY3NTdHJpbmdTdHJlYW0oKTtcbiAgICAgICAgdGhpcy5jb21tYW5kID0geyB0eXBlOiAnbW92ZVRvJyB9O1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgICAgIHRoaXMubGFzdFkgPSAwO1xuICAgICAgICB0aGlzLmxhc3RDWCA9IDA7XG4gICAgICAgIHRoaXMubGFzdENZID0gMDtcbiAgICB9XG4gICAgc2V0UGF0aChwYXRoKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtLnNldFBhdGgocGF0aCk7XG4gICAgICAgIHRoaXMubGFzdFggPSAwO1xuICAgICAgICB0aGlzLmxhc3RZID0gMDtcbiAgICAgICAgdGhpcy5sYXN0Q1ggPSAwO1xuICAgICAgICB0aGlzLmxhc3RDWSA9IDA7XG4gICAgICAgIHRoaXMuY29tbWFuZEV4aXN0cyA9IGZhbHNlO1xuICAgIH1cbiAgICBnZXRDb21tYW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kRXhpc3RzID8gdGhpcy5jb21tYW5kIDogbnVsbDtcbiAgICB9XG4gICAgcmVhZE5leHQoKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtLnJlYWROZXh0KCk7XG4gICAgICAgIHRoaXMucGFyc2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZEV4aXN0cztcbiAgICB9XG4gICAgcGFyc2UoKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSB0aGlzLnN0cmVhbS5nZXRDb21tYW5kKCk7XG4gICAgICAgIHRoaXMuY29tbWFuZEV4aXN0cyA9ICEhY29tbWFuZDtcbiAgICAgICAgaWYgKCF0aGlzLmNvbW1hbmRFeGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidWZmZXIgPSB0aGlzLnN0cmVhbS5nZXRCdWZmZXIoKTtcbiAgICAgICAgY29uc3QgW2UwLCBlMSwgZTIsIGUzLCBlNCwgZTUsXSA9IGJ1ZmZlcjtcbiAgICAgICAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ21vdmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnkgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IG1vdmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbW92ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdtb3ZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby54ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IG1vdmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbW92ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBsaW5lVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBsaW5lVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBsaW5lVG8ueDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1YnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd2JzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IGUwICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeCA9IGUyO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMztcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSBlNDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnkgPSBlNTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeCA9IGUyICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0gZTMgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IGU0ICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnkgPSBlNSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IGUyO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSB0aGlzLmxhc3RDWDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0gdGhpcy5sYXN0Q1k7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IGUyICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnkgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IGUyO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSBlMztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdXJ2ZVRvLnggLSAoY3VydmVUby5jeCAtIGN1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3VydmVUby55IC0gKGN1cnZlVG8uY3kgLSBjdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IGUyICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0gZTMgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gdGhpcy5sYXN0Q1k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdXJ2ZVRvLnggLSAoY3VydmVUby5jeCAtIGN1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3VydmVUby55IC0gKGN1cnZlVG8uY3kgLSBjdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSB0aGlzLmxhc3RDWDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IHRoaXMubGFzdENZO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdXJ2ZVRvLnggLSAoY3VydmVUby5jeCAtIGN1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3VydmVUby55IC0gKGN1cnZlVG8uY3kgLSBjdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5jb25zdCByZWFkZXIgPSBuZXcgR3JhcGhpY3NTdHJpbmdSZWFkZXIoKTtcbmV4cG9ydCB2YXIgR3JhcGhpY3NTdHJpbmc7XG4oZnVuY3Rpb24gKEdyYXBoaWNzU3RyaW5nKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKHBhdGgsIGJvdW5kcykge1xuICAgICAgICByZWFkZXIuc2V0UGF0aChwYXRoKTtcbiAgICAgICAgd2hpbGUgKHJlYWRlci5yZWFkTmV4dCgpKSB7XG4gICAgICAgICAgICBjb25zdCBjb21tYW5kID0gcmVhZGVyLmdldENvbW1hbmQoKTtcbiAgICAgICAgICAgIGlmIChjb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgUGF0aENvbW1hbmQuY2FsY3VsYXRlQm91bmRzKGNvbW1hbmQsIGJvdW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgR3JhcGhpY3NTdHJpbmcuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoR3JhcGhpY3NTdHJpbmcgfHwgKEdyYXBoaWNzU3RyaW5nID0ge30pKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoaWNzIHtcbiAgICBjb25zdHJ1Y3RvcihzaGFwZSkge1xuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGU7XG4gICAgfVxuICAgIGJlZ2luRmlsbChjb2xvciA9IDAsIGFscGhhID0gMSkge1xuICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAnc29saWQnLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYmVnaW5CaXRtYXBGaWxsKHNyYywgbWF0cml4LCByZXBlYXQgPSB0cnVlLCBzbW9vdGggPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAnYml0bWFwJyxcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHJlcGVhdCxcbiAgICAgICAgICAgIHNtb290aCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYmVnaW5HcmFkaWVudEZpbGwodHlwZSwgY29sb3IsIGFscGhhLCByYXRpbywgbWF0cml4LCBzcHJlYWQgPSAncmVwZWF0JywgaW50ZXJwb2xhdGlvbiA9ICdyZ2InLCBmb2NhbFBvaW50UmF0aW8gPSAwKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICBzcHJlYWQsXG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9uLFxuICAgICAgICAgICAgZm9jYWxQb2ludFJhdGlvLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsaW5lU3R5bGUodGhpY2tuZXNzID0gMCwgY29sb3IgPSAwLCBhbHBoYSA9IDEsIHBpeGVsSGludGluZyA9IGZhbHNlLCBzY2FsZU1vZGUgPSAnbm9uZScsIGNhcHMgPSAncm91bmQnLCBqb2ludHMgPSAncm91bmQnLCBtaXRlckxpbWl0ID0gMykge1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHtcbiAgICAgICAgICAgIHRoaWNrbmVzcyxcbiAgICAgICAgICAgIHBpeGVsSGludGluZyxcbiAgICAgICAgICAgIHNjYWxlTW9kZSxcbiAgICAgICAgICAgIGNhcHMsXG4gICAgICAgICAgICBqb2ludHMsXG4gICAgICAgICAgICBtaXRlckxpbWl0LFxuICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsaW5lR3JhZGllbnRTdHlsZSh0eXBlLCBjb2xvciwgYWxwaGEsIHJhdGlvLCBtYXRyaXgsIHNwcmVhZCA9ICdyZXBlYXQnLCBpbnRlcnBvbGF0aW9uID0gJ3JnYicsIGZvY2FsUG9pbnRSYXRpbyA9IDApIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0cm9rZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Ryb2tlLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgc3ByZWFkLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGlvbixcbiAgICAgICAgICAgIGZvY2FsUG9pbnRSYXRpbyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGluZUJpdG1hcFN0eWxlKHNyYywgbWF0cml4LCByZXBlYXQgPSB0cnVlLCBzbW9vdGggPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXRoaXMuc3Ryb2tlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHJva2UuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdiaXRtYXAnLFxuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgcmVwZWF0LFxuICAgICAgICAgICAgc21vb3RoLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBtb3ZlVG8oeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5iZWdpblBhdGgoKTtcbiAgICAgICAgcGF0aC5wdXNoKHsgdHlwZTogJ21vdmVUbycsIHgsIHkgfSk7XG4gICAgfVxuICAgIGxpbmVUbyh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHsgdHlwZTogJ2xpbmVUbycsIHgsIHkgfSk7XG4gICAgfVxuICAgIGN1cnZlVG8oY3gsIGN5LCB4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdXJ2ZVRvJywgY3gsIGN5LCB4LCB5LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY3ViaWNDdXJ2ZVRvKGN4LCBjeSwgc3gsIHN5LCB4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdXJ2ZVRvJywgY3gsIGN5LCBzeCwgc3ksIHgsIHksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkcmF3Um91bmRSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIGVsbGlwc2VXaWR0aCA9IDAsIGVsbGlwc2VIZWlnaHQgPSAwKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICBjb25zdCB3ID0gZWxsaXBzZVdpZHRoO1xuICAgICAgICBjb25zdCBoID0gZWxsaXBzZUhlaWdodDtcbiAgICAgICAgY29uc3QgayA9IDAuNTUyMjg0ODtcbiAgICAgICAgY29uc3Qgb3ggPSAodyAvIDIpICogaztcbiAgICAgICAgY29uc3Qgb3kgPSAoaCAvIDIpICogaztcbiAgICAgICAgY29uc3QgeGUgPSB4ICsgdztcbiAgICAgICAgY29uc3QgeWUgPSB5ICsgaDtcbiAgICAgICAgY29uc3QgeG0gPSB4ICsgdyAvIDI7XG4gICAgICAgIGNvbnN0IHltID0geSArIGggLyAyO1xuICAgICAgICBjb25zdCBkeCA9IHdpZHRoIC0gdztcbiAgICAgICAgY29uc3QgZHkgPSBoZWlnaHQgLSBoO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ21vdmVUbycsXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeTogeW0sXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeCxcbiAgICAgICAgICAgIGN5OiB5bSAtIG95LFxuICAgICAgICAgICAgc3g6IHhtIC0gb3gsXG4gICAgICAgICAgICBzeTogeSxcbiAgICAgICAgICAgIHg6IHhtLFxuICAgICAgICAgICAgeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhtICsgZHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhtICsgb3ggKyBkeCxcbiAgICAgICAgICAgIGN5OiB5LFxuICAgICAgICAgICAgc3g6IHhlICsgZHgsXG4gICAgICAgICAgICBzeTogeW0gLSBveSxcbiAgICAgICAgICAgIHg6IHhlICsgZHgsXG4gICAgICAgICAgICB5OiB5bSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhlICsgZHgsXG4gICAgICAgICAgICB5OiB5bSArIGR5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhlICsgZHgsXG4gICAgICAgICAgICBjeTogeW0gKyBveSArIGR5LFxuICAgICAgICAgICAgc3g6IHhtICsgb3ggKyBkeCxcbiAgICAgICAgICAgIHN5OiB5ZSArIGR5LFxuICAgICAgICAgICAgeDogeG0gKyBkeCxcbiAgICAgICAgICAgIHk6IHllICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVUbycsXG4gICAgICAgICAgICB4OiB4bSxcbiAgICAgICAgICAgIHk6IHllICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeG0gLSBveCxcbiAgICAgICAgICAgIGN5OiB5ZSArIGR5LFxuICAgICAgICAgICAgc3g6IHgsXG4gICAgICAgICAgICBzeTogeW0gKyBveSArIGR5LFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHk6IHltICsgZHksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkcmF3UmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ3JlY3RhbmdsZSc7XG4gICAgICAgIGRhdGEueCA9IHg7XG4gICAgICAgIGRhdGEueSA9IHk7XG4gICAgICAgIGRhdGEud2lkdGggPSB3aWR0aDtcbiAgICAgICAgZGF0YS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIGRyYXdDaXJjbGUoeCwgeSwgcmFkaXVzKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ2VsbGlwc2UnO1xuICAgICAgICBkYXRhLnggPSB4O1xuICAgICAgICBkYXRhLnkgPSB5O1xuICAgICAgICBkYXRhLnJhZGl1cyA9IHJhZGl1cztcbiAgICB9XG4gICAgZHJhd0VsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEudHlwZSA9ICdlbGxpcHNlJztcbiAgICAgICAgZGF0YS5yYWRpdXNYID0gd2lkdGggLyAyO1xuICAgICAgICBkYXRhLnJhZGl1c1kgPSBoZWlnaHQgLyAyO1xuICAgICAgICBkYXRhLnggPSB4IC0gZGF0YS5yYWRpdXNYO1xuICAgICAgICBkYXRhLnkgPSB5IC0gZGF0YS5yYWRpdXNZO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2hhcGUuZGF0YTtcbiAgICB9XG4gICAgY3JlYXRlRGF0YSgpIHtcbiAgICAgICAgY29uc3QgeyBzaGFwZSwgZmlsbCwgc3Ryb2tlIH0gPSB0aGlzO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzaGFwZS5kYXRhKSkge1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzaGFwZS5kYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgc2hhcGUuZGF0YSA9IFtzaGFwZS5kYXRhXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNoYXBlLmRhdGEgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBncmFwaGljc0RhdGEgPSB7IHR5cGU6ICdwYXRoJywgZmlsbCwgc3Ryb2tlIH07XG4gICAgICAgIHNoYXBlLmRhdGEucHVzaChncmFwaGljc0RhdGEpO1xuICAgICAgICByZXR1cm4gZ3JhcGhpY3NEYXRhO1xuICAgIH1cbiAgICBiZWdpblBhdGgoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS5kYXRhID0gW107XG4gICAgICAgIHJldHVybiBkYXRhLmRhdGE7XG4gICAgfVxuICAgIGdldFBhdGgoKSB7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUgfSA9IHRoaXM7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzaGFwZS5kYXRhKSB8fCAhc2hhcGUuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHNoYXBlLmRhdGFbc2hhcGUuZGF0YS5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEuZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2RhdGEvZGF0YSc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvcGF0aCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvc3RyaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9zdHlsZSc7XG5leHBvcnQgKiBmcm9tICcuL2dyYXBoaWNzJztcbmV4cG9ydCAqIGZyb20gJy4vc2hhcGUnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMvc2hhcGUnO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAZTJkL2NvcmUnO1xuaW1wb3J0IHsgQm91bmRzLCBSZWN0YW5nbGUgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BlMmQvcmVzb3VyY2VzJztcbmltcG9ydCB7IEdyYXBoaWNzRGF0YSB9IGZyb20gJy4vZGF0YS9kYXRhJztcbmltcG9ydCBHcmFwaGljcyBmcm9tICcuL2dyYXBoaWNzJztcbmV4cG9ydCBjb25zdCBTSEFQRSA9ICdzaGFwZSc7XG5jb25zdCBib3VuZHMgPSBCb3VuZHMuZW1wdHkoKTtcbmV4cG9ydCB2YXIgU2hhcGU7XG4oZnVuY3Rpb24gKFNoYXBlKSB7XG4gICAgZnVuY3Rpb24gZ2V0R3JhcGhpY3Moc2hhcGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaGljcyhzaGFwZSk7XG4gICAgfVxuICAgIFNoYXBlLmdldEdyYXBoaWNzID0gZ2V0R3JhcGhpY3M7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKHNoYXBlLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBzaGFwZTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBCb3VuZHMuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YVtpXSwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCb3VuZHMuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3aWR0aCA9IGJvdW5kcy5tYXhYIC0gYm91bmRzLm1pblg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGJvdW5kcy5tYXhZIC0gYm91bmRzLm1pblk7XG4gICAgICAgIGNvbnN0IHggPSBib3VuZHMubWluWCArIFBpdm90LmdldFgoc2hhcGUsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IGJvdW5kcy5taW5ZICsgUGl2b3QuZ2V0WShzaGFwZSwgaGVpZ2h0KTtcbiAgICAgICAgcmVzdWx0LnggPSB4O1xuICAgICAgICByZXN1bHQueSA9IHk7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHdpZHRoO1xuICAgICAgICByZXN1bHQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBTaGFwZS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShTaGFwZSB8fCAoU2hhcGUgPSB7fSkpO1xuY29uc3QgcmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIFNoYXBlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChTaGFwZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGhpdFRlc3Qoc2hhcGUsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGxvY2FsIH0gPSBlbmdpbmUucG9pbnRlckV2ZW50cztcbiAgICAgICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzKHNoYXBlLCByZWN0YW5nbGUpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKHJlY3RhbmdsZSwgbG9jYWwpO1xuICAgIH1cbiAgICBTaGFwZUV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChTSEFQRSwgaGl0VGVzdCk7XG4gICAgICAgIEltYWdlUmVzb3VyY2UuaW5pdChlbmdpbmUpO1xuICAgIH1cbiAgICBTaGFwZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFNoYXBlRXh0ZW5zaW9uIHx8IChTaGFwZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BlMmQvY29yZSc7XG5pbXBvcnQgeyBDYW52YXNQYXR0ZXJucyB9IGZyb20gJ0BlMmQvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBGb250IH0gZnJvbSAnLi9mb250JztcbmltcG9ydCB7IFRleHRFeHRlbnNpb24sIFRFWFQgfSBmcm9tICcuL3RleHQnO1xuaW1wb3J0IHsgVGV4dEZvcm1hdCB9IGZyb20gJy4vZm9ybWF0JztcbmNvbnN0IHZhbGlkVGV4dEZvcm1hdCA9IHt9O1xuZXhwb3J0IHZhciBDYW52YXNUZXh0RXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNUZXh0RXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKGNvbXBvbmVudCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG1hdHJpeCwgY29sb3JUcmFuc2Zvcm0gfSA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdGV4dEZvcm1hdCwgYm9yZGVyLCBiYWNrZ3JvdW5kLCB9ID0gY29tcG9uZW50O1xuICAgICAgICBUZXh0Rm9ybWF0LmdldFZhbGlkVGV4dEZvcm1hdCh0ZXh0Rm9ybWF0LCB2YWxpZFRleHRGb3JtYXQpO1xuICAgICAgICBjb25zdCBmb3JtYXRTaXplID0gdmFsaWRUZXh0Rm9ybWF0LnNpemU7XG4gICAgICAgIGNvbnN0IGZvcm1hdExldHRlclNwYWNpbmcgPSB2YWxpZFRleHRGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgY29uc3QgZm9ybWF0TGVhZGluZyA9IHZhbGlkVGV4dEZvcm1hdC5sZWFkaW5nO1xuICAgICAgICBjb25zdCBmb250ID0gRm9udC5nZXRGb250KHZhbGlkVGV4dEZvcm1hdC5mb250KTtcbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gZW5naW5lLnBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgdGV4dFdpZHRoID0gRm9udC5nZXRUZXh0V2lkdGgoZm9udCwgdmFsaWRUZXh0Rm9ybWF0LCBsaW5lcyk7XG4gICAgICAgIGNvbnN0IHRleHRIZWlnaHQgPSBGb250LmdldFRleHRIZWlnaHQodmFsaWRUZXh0Rm9ybWF0LCBsaW5lcyk7XG4gICAgICAgIGNvbnN0IHJlYWxXaWR0aCA9IHdpZHRoID8/IHRleHRXaWR0aDtcbiAgICAgICAgY29uc3QgcmVhbEhlaWdodCA9IGhlaWdodCA/PyB0ZXh0SGVpZ2h0O1xuICAgICAgICBjb25zdCBvZmZzZXRYID0gUGl2b3QuZ2V0WChjb21wb25lbnQsIHJlYWxXaWR0aCk7XG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSBQaXZvdC5nZXRZKGNvbXBvbmVudCwgcmVhbEhlaWdodCk7XG4gICAgICAgIGxldCB5ID0gMDtcbiAgICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICAgICAgY29uc3QgYWxpZ25WZXJ0aWNhbFZhbHVlID0gVGV4dEZvcm1hdC5nZXRWZXJ0aWNhbEFsaWduVmFsdWUodmFsaWRUZXh0Rm9ybWF0LnZlcnRpY2FsQWxpZ24pO1xuICAgICAgICAgICAgeSA9IChoZWlnaHQgLSB0ZXh0SGVpZ2h0KSAqIGFsaWduVmVydGljYWxWYWx1ZTtcbiAgICAgICAgICAgIGlmICh5IDwgMCkge1xuICAgICAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgaWYgKGJhY2tncm91bmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gJyc7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGJhY2tncm91bmQsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5yZWN0KG9mZnNldFgsIG9mZnNldFksIHJlYWxXaWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGJvcmRlciwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuICAgICAgICAgICAgY29udGV4dDJkLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLnJlY3Qob2Zmc2V0WCwgb2Zmc2V0WSwgcmVhbFdpZHRoLCByZWFsSGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0MmQuZm9udCA9IEZvbnQuZ2V0U3R5bGVGb250KHZhbGlkVGV4dEZvcm1hdC5mb250LCBmb3JtYXRTaXplKTtcbiAgICAgICAgY29udGV4dDJkLnRleHRCYXNlbGluZSA9ICdhbHBoYWJldGljJztcbiAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gJyc7XG4gICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4odmFsaWRUZXh0Rm9ybWF0LmNvbG9yLCB2YWxpZFRleHRGb3JtYXQuYWxwaGEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgeSArPSBvZmZzZXRZO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICBjb25zdCBsaW5lV2lkdGggPSBGb250LmdldExpbmVXaWR0aChmb250LCB2YWxpZFRleHRGb3JtYXQsIGxpbmUpO1xuICAgICAgICAgICAgY29uc3QgYWxpZ25WYWx1ZSA9IFRleHRGb3JtYXQuZ2V0QWxpZ25WYWx1ZSh2YWxpZFRleHRGb3JtYXQuYWxpZ24pO1xuICAgICAgICAgICAgbGV0IHggPSAocmVhbFdpZHRoIC0gbGluZVdpZHRoKSAqIGFsaWduVmFsdWU7XG4gICAgICAgICAgICBpZiAoeCA8IDApIHtcbiAgICAgICAgICAgICAgICB4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHggKz0gb2Zmc2V0WDtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGluZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gbGluZS5jaGFyQXQoaik7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kID0gbGluZS5jaGFyQXQoaiArIDEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2UoZm9udCwgZm9ybWF0U2l6ZSwgZmlyc3QsIHNlY29uZCk7XG4gICAgICAgICAgICAgICAgY29udGV4dDJkLmZpbGxUZXh0KGZpcnN0LCB4LCB5ICsgZm9ybWF0U2l6ZSk7XG4gICAgICAgICAgICAgICAgeCArPSBhZHZhbmNlICsgZm9ybWF0TGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHkgKz0gZm9ybWF0U2l6ZSArIGZvcm1hdExlYWRpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzVGV4dEV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgVGV4dEV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoVEVYVCwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzVGV4dEV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc1RleHRFeHRlbnNpb24gfHwgKENhbnZhc1RleHRFeHRlbnNpb24gPSB7fSkpO1xuIiwiY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5leHBvcnQgY29uc3QgRU0gPSAxMDI0O1xuY29uc3QgZm9udHMgPSBuZXcgTWFwKCk7XG5leHBvcnQgdmFyIEZvbnQ7XG4oZnVuY3Rpb24gKEZvbnQpIHtcbiAgICBmdW5jdGlvbiBnZXRTdHlsZUZvbnQoZm9udCwgc2l6ZSkge1xuICAgICAgICByZXR1cm4gYCR7c2l6ZX1weCAke2ZvbnR9YDtcbiAgICB9XG4gICAgRm9udC5nZXRTdHlsZUZvbnQgPSBnZXRTdHlsZUZvbnQ7XG4gICAgZnVuY3Rpb24gbWVhc3VyZVRleHQoZm9udCwgc2l6ZSwgdGV4dCkge1xuICAgICAgICBjb250ZXh0LmZvbnQgPSBnZXRTdHlsZUZvbnQoZm9udCwgc2l6ZSk7XG4gICAgICAgIHJldHVybiBjb250ZXh0Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xuICAgIH1cbiAgICBGb250Lm1lYXN1cmVUZXh0ID0gbWVhc3VyZVRleHQ7XG4gICAgZnVuY3Rpb24gZ2V0Q2hhcldpZHRoKGZvbnQsIGNoYXIpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gZm9udC53aWR0aHMuZ2V0KGNoYXIpO1xuICAgICAgICBpZiAoIXdpZHRoKSB7XG4gICAgICAgICAgICB3aWR0aCA9IG1lYXN1cmVUZXh0KGZvbnQubmFtZSwgRU0sIGNoYXIpO1xuICAgICAgICAgICAgZm9udC53aWR0aHMuc2V0KGNoYXIsIHdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfVxuICAgIEZvbnQuZ2V0Q2hhcldpZHRoID0gZ2V0Q2hhcldpZHRoO1xuICAgIGZ1bmN0aW9uIGdldEtlcm5pbmcoZm9udCwgZmlyc3QsIHNlY29uZCkge1xuICAgICAgICBjb25zdCBwYWlyID0gZmlyc3QgKyBzZWNvbmQ7XG4gICAgICAgIGxldCBrZXJuaW5nID0gZm9udC5rZXJuaW5ncy5nZXQocGFpcik7XG4gICAgICAgIGlmICgha2VybmluZykge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGhTZWNvbmQgPSBnZXRDaGFyV2lkdGgoZm9udCwgc2Vjb25kKTtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoVG90YWwgPSBtZWFzdXJlVGV4dChmb250Lm5hbWUsIEVNLCBmaXJzdCArIHNlY29uZCk7XG4gICAgICAgICAgICBrZXJuaW5nID0gd2lkdGhUb3RhbCAtIHdpZHRoU2Vjb25kO1xuICAgICAgICAgICAgZm9udC5rZXJuaW5ncy5zZXQocGFpciwga2VybmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtlcm5pbmc7XG4gICAgfVxuICAgIEZvbnQuZ2V0S2VybmluZyA9IGdldEtlcm5pbmc7XG4gICAgZnVuY3Rpb24gZ2V0QWR2YW5jZShmb250LCBzaXplLCBmaXJzdCwgc2Vjb25kKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gc2l6ZSAvIEVNO1xuICAgICAgICBjb25zdCB3aWR0aCA9IGdldENoYXJXaWR0aChmb250LCBmaXJzdCk7XG4gICAgICAgIGlmICghc2Vjb25kKSB7XG4gICAgICAgICAgICByZXR1cm4gd2lkdGggKiBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXJuaW5nID0gZ2V0S2VybmluZyhmb250LCBmaXJzdCwgc2Vjb25kKTtcbiAgICAgICAgcmV0dXJuIGtlcm5pbmcgKiBzY2FsZTtcbiAgICB9XG4gICAgRm9udC5nZXRBZHZhbmNlID0gZ2V0QWR2YW5jZTtcbiAgICBmdW5jdGlvbiBnZXRGb250KG5hbWUpIHtcbiAgICAgICAgbGV0IGZvbnQgPSBmb250cy5nZXQobmFtZSk7XG4gICAgICAgIGlmICghZm9udCkge1xuICAgICAgICAgICAgZm9udCA9IHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHdpZHRoczogbmV3IE1hcCgpLFxuICAgICAgICAgICAgICAgIGtlcm5pbmdzOiBuZXcgTWFwKCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9udHMuc2V0KG5hbWUsIGZvbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb250O1xuICAgIH1cbiAgICBGb250LmdldEZvbnQgPSBnZXRGb250O1xuICAgIGZ1bmN0aW9uIGdldExpbmVXaWR0aChmb250LCBmb3JtYXQsIGxpbmUpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdCA9IGxpbmUuY2hhckF0KGkpO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kID0gbGluZS5jaGFyQXQoaSArIDEpO1xuICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IGdldEFkdmFuY2UoZm9udCwgZm9ybWF0LnNpemUsIGZpcnN0LCBzZWNvbmQpO1xuICAgICAgICAgICAgd2lkdGggKz0gYWR2YW5jZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0LmxldHRlclNwYWNpbmcgJiYgbGluZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB3aWR0aCArPSBmb3JtYXQubGV0dGVyU3BhY2luZyAqIChsaW5lLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gICAgRm9udC5nZXRMaW5lV2lkdGggPSBnZXRMaW5lV2lkdGg7XG4gICAgZnVuY3Rpb24gZ2V0VGV4dFdpZHRoKGZvbnQsIGZvcm1hdCwgbGluZXMpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgY29uc3QgbGluZVdpZHRoID0gZ2V0TGluZVdpZHRoKGZvbnQsIGZvcm1hdCwgbGluZSk7XG4gICAgICAgICAgICBpZiAod2lkdGggPCBsaW5lV2lkdGgpIHtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfVxuICAgIEZvbnQuZ2V0VGV4dFdpZHRoID0gZ2V0VGV4dFdpZHRoO1xuICAgIGZ1bmN0aW9uIGdldFRleHRIZWlnaHQoZm9ybWF0LCBsaW5lcykge1xuICAgICAgICBsZXQgaGVpZ2h0ID0gZm9ybWF0LnNpemUgKiBsaW5lcy5sZW5ndGg7XG4gICAgICAgIGlmIChmb3JtYXQubGVhZGluZyAmJiBsaW5lcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBoZWlnaHQgKz0gZm9ybWF0LmxlYWRpbmcgKiAobGluZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICB9XG4gICAgRm9udC5nZXRUZXh0SGVpZ2h0ID0gZ2V0VGV4dEhlaWdodDtcbn0pKEZvbnQgfHwgKEZvbnQgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBUZXh0Rm9ybWF0O1xuKGZ1bmN0aW9uIChUZXh0Rm9ybWF0KSB7XG4gICAgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCA9IHtcbiAgICAgICAgZm9udDogJ2FyaWFsJyxcbiAgICAgICAgc2l6ZTogMTUsXG4gICAgICAgIGNvbG9yOiAwLFxuICAgICAgICBhbHBoYTogMSxcbiAgICAgICAgYm9sZDogZmFsc2UsXG4gICAgICAgIGl0YWxpYzogZmFsc2UsXG4gICAgICAgIHVuZGVybGluZTogZmFsc2UsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgICAgIGxlYWRpbmc6IDAsXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgIH07XG4gICAgZnVuY3Rpb24gZ2V0VmFsaWRUZXh0Rm9ybWF0KHNvdXJjZSwgcmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdC5mb250ID0gc291cmNlPy5mb250ID8/IFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQuZm9udDtcbiAgICAgICAgcmVzdWx0LnNpemUgPSBzb3VyY2U/LnNpemUgPz8gVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdC5zaXplO1xuICAgICAgICByZXN1bHQuY29sb3IgPSBzb3VyY2U/LmNvbG9yID8/IFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQuY29sb3I7XG4gICAgICAgIHJlc3VsdC5hbHBoYSA9IHNvdXJjZT8uYWxwaGEgPz8gVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdC5hbHBoYTtcbiAgICAgICAgcmVzdWx0LmJvbGQgPSBzb3VyY2U/LmJvbGQgPz8gVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdC5ib2xkO1xuICAgICAgICByZXN1bHQuaXRhbGljID0gc291cmNlPy5pdGFsaWMgPz8gVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdC5pdGFsaWM7XG4gICAgICAgIHJlc3VsdC51bmRlcmxpbmUgPSBzb3VyY2U/LnVuZGVybGluZSA/PyBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LnVuZGVybGluZTtcbiAgICAgICAgcmVzdWx0LmxldHRlclNwYWNpbmcgPSBzb3VyY2U/LmxldHRlclNwYWNpbmcgPz8gVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICByZXN1bHQubGVhZGluZyA9IHNvdXJjZT8ubGVhZGluZyA/PyBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LmxlYWRpbmc7XG4gICAgICAgIHJlc3VsdC5hbGlnbiA9IHNvdXJjZT8uYWxpZ24gPz8gVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdC5hbGlnbjtcbiAgICAgICAgcmVzdWx0LnZlcnRpY2FsQWxpZ24gPSBzb3VyY2U/LnZlcnRpY2FsQWxpZ24gPz8gVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdC52ZXJ0aWNhbEFsaWduO1xuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmdldFZhbGlkVGV4dEZvcm1hdCA9IGdldFZhbGlkVGV4dEZvcm1hdDtcbiAgICBmdW5jdGlvbiBnZXRBbGlnblZhbHVlKGFsaWduKSB7XG4gICAgICAgIHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOiByZXR1cm4gMDtcbiAgICAgICAgICAgIGNhc2UgJ2NlbnRlcic6IHJldHVybiAwLjU7XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6IHJldHVybiAxO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dEZvcm1hdC5nZXRBbGlnblZhbHVlID0gZ2V0QWxpZ25WYWx1ZTtcbiAgICBmdW5jdGlvbiBnZXRWZXJ0aWNhbEFsaWduVmFsdWUoYWxpZ24pIHtcbiAgICAgICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgICAgICAgY2FzZSAndG9wJzogcmV0dXJuIDA7XG4gICAgICAgICAgICBjYXNlICdtaWRkbGUnOiByZXR1cm4gMC41O1xuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzogcmV0dXJuIDE7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmdldFZlcnRpY2FsQWxpZ25WYWx1ZSA9IGdldFZlcnRpY2FsQWxpZ25WYWx1ZTtcbn0pKFRleHRGb3JtYXQgfHwgKFRleHRGb3JtYXQgPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi90ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vZm9ybWF0JztcbmV4cG9ydCAqIGZyb20gJy4vZm9udCc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy10ZXh0JztcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBUZXh0Rm9ybWF0IH0gZnJvbSAnLi9mb3JtYXQnO1xuaW1wb3J0IHsgRm9udCB9IGZyb20gJy4vZm9udCc7XG5leHBvcnQgY29uc3QgVEVYVCA9ICd0ZXh0JztcbmNvbnN0IHZhbGlkVGV4dEZvcm1hdCA9IHt9O1xuZXhwb3J0IHZhciBUZXh0O1xuKGZ1bmN0aW9uIChUZXh0KSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGNvbXBvbmVudCwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGxldCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgeyB0ZXh0Rm9ybWF0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIFRleHRGb3JtYXQuZ2V0VmFsaWRUZXh0Rm9ybWF0KHRleHRGb3JtYXQsIHZhbGlkVGV4dEZvcm1hdCk7XG4gICAgICAgIGlmICghd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvbnQgPSBGb250LmdldEZvbnQodmFsaWRUZXh0Rm9ybWF0LmZvbnQpO1xuICAgICAgICAgICAgd2lkdGggPSBGb250LmdldFRleHRXaWR0aChmb250LCB2YWxpZFRleHRGb3JtYXQsIGxpbmVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhlaWdodCkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gRm9udC5nZXRUZXh0SGVpZ2h0KHZhbGlkVGV4dEZvcm1hdCwgbGluZXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGNvbXBvbmVudCwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShjb21wb25lbnQsIGhlaWdodCk7XG4gICAgICAgIGJvdW5kcy54ID0geDtcbiAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgYm91bmRzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgVGV4dC5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShUZXh0IHx8IChUZXh0ID0ge30pKTtcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBUZXh0RXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChUZXh0RXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdCh0ZXh0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBsb2NhbCB9ID0gZW5naW5lLnBvaW50ZXJFdmVudHM7XG4gICAgICAgIFRleHQuY2FsY3VsYXRlQm91bmRzKHRleHQsIGJvdW5kcyk7XG4gICAgICAgIHJldHVybiBSZWN0YW5nbGUuY29udGFpbnMoYm91bmRzLCBsb2NhbCk7XG4gICAgfVxuICAgIFRleHRFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoVEVYVCwgaGl0VGVzdCk7XG4gICAgfVxuICAgIFRleHRFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShUZXh0RXh0ZW5zaW9uIHx8IChUZXh0RXh0ZW5zaW9uID0ge30pKTtcbiIsImV4cG9ydCBjb25zdCBMSU5FQVIgPSAnbGluZWFyJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUMgPSAncXVhZHJhdGljJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUNfSU4gPSAncXVhZHJhdGljaW4nO1xuZXhwb3J0IGNvbnN0IFFVQURSQVRJQ19PVVQgPSAncXVhZHJhdGljb3V0JztcbmV4cG9ydCBjb25zdCBDVUJJQyA9ICdjdWJpYyc7XG5leHBvcnQgY29uc3QgQ1VCSUNfSU4gPSAnY3ViaWNpbic7XG5leHBvcnQgY29uc3QgQ1VCSUNfT1VUID0gJ2N1Ymljb3V0JztcbmV4cG9ydCBjb25zdCBRVUFSVElDID0gJ3F1YXJ0aWMnO1xuZXhwb3J0IGNvbnN0IFFVQVJUSUNfSU4gPSAncXVhcnRpY2luJztcbmV4cG9ydCBjb25zdCBRVUFSVElDX09VVCA9ICdxdWFydGljb3V0JztcbmV4cG9ydCBjb25zdCBRVUlOVElDID0gJ3F1aW50aWMnO1xuZXhwb3J0IGNvbnN0IFFVSU5USUNfSU4gPSAncXVpbnRpY2luJztcbmV4cG9ydCBjb25zdCBRVUlOVElDX09VVCA9ICdxdWludGljb3V0JztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMID0gJ3F1aW50aWMnO1xuZXhwb3J0IGNvbnN0IFNJTlVTT0lEQUxfSU4gPSAncXVpbnRpY2luJztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMX09VVCA9ICdxdWludGljb3V0JztcbmV4cG9ydCBjb25zdCBFWFBPTkVOVElBTCA9ICdleHBvbmVudGlhbCc7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUxfSU4gPSAnZXhwb25lbnRpYWxpbic7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUxfT1VUID0gJ2V4cG9uZW50aWFsb3V0JztcbmV4cG9ydCBjb25zdCBDSVJDVUxBUiA9ICdjaXJjdWxhcic7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVJfSU4gPSAnY2lyY3VsYXJpbic7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVJfT1VUID0gJ2NpcmN1bGFyb3V0JztcbmV4cG9ydCBjb25zdCBFTEFTVElDID0gJ2VsYXN0aWMnO1xuZXhwb3J0IGNvbnN0IEVMQVNUSUNfSU4gPSAnZWxhc3RpY2luJztcbmV4cG9ydCBjb25zdCBFTEFTVElDX09VVCA9ICdlbGFzdGljb3V0JztcbmV4cG9ydCBjb25zdCBCQUNLID0gJ2JhY2snO1xuZXhwb3J0IGNvbnN0IEJBQ0tfSU4gPSAnYmFja2luJztcbmV4cG9ydCBjb25zdCBCQUNLX09VVCA9ICdiYWNrb3V0JztcbmV4cG9ydCBjb25zdCBCT1VOQ0UgPSAnYm91bmNlJztcbmV4cG9ydCBjb25zdCBCT1VOQ0VfSU4gPSAnYm91bmNlaW4nO1xuZXhwb3J0IGNvbnN0IEJPVU5DRV9PVVQgPSAnYm91bmNlb3V0JztcbmV4cG9ydCBjb25zdCBlYXNpbmcgPSB7XG4gICAgW0xJTkVBUl06ICh2YWx1ZSkgPT4gdmFsdWUsXG4gICAgW1FVQURSQVRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoLS12YWx1ZSAqICh2YWx1ZSAtIDIpIC0gMSk7XG4gICAgfSxcbiAgICBbUVVBRFJBVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVQURSQVRJQ19PVVRdOiAodmFsdWUpID0+ICh2YWx1ZSAqICgyIC0gdmFsdWUpKSxcbiAgICBbQ1VCSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqIHZhbHVlICsgMik7XG4gICAgfSxcbiAgICBbQ1VCSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtDVUJJQ19PVVRdOiAodmFsdWUpID0+ICgtLXZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDEpLFxuICAgIFtRVUFSVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlIC0gMik7XG4gICAgfSxcbiAgICBbUVVBUlRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVBUlRJQ19PVVRdOiAodmFsdWUpID0+ICgxIC0gLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVSU5USUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAyKTtcbiAgICB9LFxuICAgIFtRVUlOVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVSU5USUNfT1VUXTogKHZhbHVlKSA9PiAoLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMSksXG4gICAgW1NJTlVTT0lEQUxdOiAodmFsdWUpID0+ICgwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiB2YWx1ZSkpKSxcbiAgICBbU0lOVVNPSURBTF9JTl06ICh2YWx1ZSkgPT4gKDEgLSBNYXRoLmNvcygodmFsdWUgKiBNYXRoLlBJKSAvIDIpKSxcbiAgICBbU0lOVVNPSURBTF9PVVRdOiAodmFsdWUpID0+IChNYXRoLnNpbigodmFsdWUgKiBNYXRoLlBJKSAvIDIpKSxcbiAgICBbRVhQT05FTlRJQUxdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogTWF0aC5wb3coMTAyNCwgdmFsdWUgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKC1NYXRoLnBvdygyLCAtMTAgKiAodmFsdWUgLSAxKSkgKyAyKTtcbiAgICB9LFxuICAgIFtFWFBPTkVOVElBTF9JTl06ICh2YWx1ZSkgPT4gKHZhbHVlID09PSAwID8gMCA6IE1hdGgucG93KDEwMjQsIHZhbHVlIC0gMSkpLFxuICAgIFtFWFBPTkVOVElBTF9PVVRdOiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coMiwgLTEwICogdmFsdWUpKSxcbiAgICBbQ0lSQ1VMQVJdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHZhbHVlIC09IDIpICogdmFsdWUpICsgMSk7XG4gICAgfSxcbiAgICBbQ0lSQ1VMQVJfSU5dOiAodmFsdWUpID0+ICgxIC0gTWF0aC5zcXJ0KDEgLSB2YWx1ZSAqIHZhbHVlKSksXG4gICAgW0NJUkNVTEFSX09VVF06ICh2YWx1ZSkgPT4gTWF0aC5zcXJ0KDEgLSAtLXZhbHVlICogdmFsdWUpLFxuICAgIFtFTEFTVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSAqPSAyO1xuICAgICAgICBpZiAodmFsdWUgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gLTAuNSAqIE1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogTWF0aC5wb3coMiwgLTEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG4gICAgfSxcbiAgICBbRUxBU1RJQ19JTl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC1NYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG4gICAgfSxcbiAgICBbRUxBU1RJQ19PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLnBvdygyLCAtMTAgKiB2YWx1ZSkgKiBNYXRoLnNpbigodmFsdWUgLSAwLjEpICogNSAqIE1hdGguUEkpICsgMTtcbiAgICB9LFxuICAgIFtCQUNLXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4ICogMS41MjU7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogKHZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlIC0gcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlICsgcykgKyAyKTtcbiAgICB9LFxuICAgIFtCQUNLX0lOXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gdmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgLSBzKTtcbiAgICB9LFxuICAgIFtCQUNLX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICAgICAgcmV0dXJuIC0tdmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgKyBzKSArIDE7XG4gICAgfSxcbiAgICBbQk9VTkNFXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDAuNSkge1xuICAgICAgICAgICAgcmV0dXJuIGVhc2luZ1tCT1VOQ0VfSU5dKHZhbHVlICogMikgKiAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVhc2luZ1tCT1VOQ0VfT1VUXSh2YWx1ZSAqIDIgLSAxKSAqIDAuNSArIDAuNTtcbiAgICB9LFxuICAgIFtCT1VOQ0VfSU5dOiAodmFsdWUpID0+ICgxIC0gZWFzaW5nW0JPVU5DRV9PVVRdKDEgLSB2YWx1ZSkpLFxuICAgIFtCT1VOQ0VfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDEgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPCAyIC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAxLjUgLyAyLjc1KSAqIHZhbHVlICsgMC43NTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPCAyLjUgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDIuMjUgLyAyLjc1KSAqIHZhbHVlICsgMC45Mzc1O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMi42MjUgLyAyLjc1KSAqIHZhbHVlICsgMC45ODQzNzU7XG4gICAgfSxcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3R3ZWVuJztcbmV4cG9ydCAqIGZyb20gJy4vZWFzaW5nJztcbiIsImltcG9ydCB7IGVhc2luZywgTElORUFSIH0gZnJvbSAnLi9lYXNpbmcnO1xuZXhwb3J0IGNvbnN0IFRXRUVOID0gJ3R3ZWVuJztcbmV4cG9ydCB2YXIgVHdlZW5FeHRlbnNpb247XG4oZnVuY3Rpb24gKFR3ZWVuRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbXBvbmVudCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgdHdlZW4gfSA9IGNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgeyBwaGFzZXMgfSA9IHR3ZWVuO1xuICAgICAgICBpZiAoIXBoYXNlcz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnQW5pbWF0aW9uIHBhcnRzIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0d2Vlbi50aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHR3ZWVuLnRpbWUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHR3ZWVuLnRpbWUgKz0gZW5naW5lLnVwZGF0ZXIudGltZTtcbiAgICAgICAgY29uc3QgeyB0aW1lIH0gPSB0d2VlbjtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIHBoYXNlcy5mb3JFYWNoKChwaGFzZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFwaGFzZS50aW1lKSB7XG4gICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ0FuaW1hdGlvbiB0aW1lIG5vdCBzZXQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGhhc2Uub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBwaGFzZS5vZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlYXNpbmdOYW1lID0gcGhhc2U/LmVhc2luZz8udG9Mb3dlckNhc2UoKSA/PyBMSU5FQVI7XG4gICAgICAgICAgICBjb25zdCBlYXNpbmdNZXRob2QgPSBlYXNpbmdbZWFzaW5nTmFtZV07XG4gICAgICAgICAgICBpZiAoIWVhc2luZ01ldGhvZCkge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBVbmtub3duIGVhc2luZyB0eXBlOiAke2Vhc2luZ31gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICh0aW1lIC0gb2Zmc2V0KSAvIHBoYXNlLnRpbWU7XG4gICAgICAgICAgICBvZmZzZXQgKz0gcGhhc2UudGltZTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IDAgfHwgdmFsdWUgPiAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZWFzaW5nVmFsdWUgPSBlYXNpbmdNZXRob2QodmFsdWUpO1xuICAgICAgICAgICAgaWYgKCFwaGFzZS50bykge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdBbmltYXRpb24gXCJ0b1wiIHN0YXRlIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcGhhc2UuZnJvbSkge1xuICAgICAgICAgICAgICAgIHBoYXNlLmZyb20gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdG8sIGZyb20gfSA9IHBoYXNlO1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBjb21wb25lbnQ7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0bykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZyb21ba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21ba2V5XSA9IHN0YXRlW2tleV0gPz8gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZnJvbVZhbHVlID0gZnJvbVtrZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvVmFsdWUgPSB0b1trZXldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZnJvbVZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdG9WYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVWYWx1ZSA9IGZyb21WYWx1ZSArIGVhc2luZ1ZhbHVlICogKHRvVmFsdWUgLSBmcm9tVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gc3RhdGVWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0d2Vlbi5sb29wICYmIHR3ZWVuLnRpbWUgPiBvZmZzZXQpIHtcbiAgICAgICAgICAgIHR3ZWVuLnRpbWUgPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFR3ZWVuRXh0ZW5zaW9uLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5wcm9wZXJ0aWVzLnNldChUV0VFTiwgdXBkYXRlKTtcbiAgICB9XG4gICAgVHdlZW5FeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShUd2VlbkV4dGVuc2lvbiB8fCAoVHdlZW5FeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgQUJJTElUWV9XT0xGIH0gZnJvbSAnLi9hc3NldHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN1cnNpdmUoKSB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHR4OiAzMCxcblx0XHRcdHk6IDMwLFxuXHRcdFx0c2NhbGVYOiAwLjksXG5cdFx0XHRzY2FsZVk6IDAuOSxcblx0XHRcdHJvdGF0aW9uOiAwLjIsXG5cdFx0XHRhbHBoYTogMC45LFxuXHRcdFx0Y2hpbGRyZW46IFt7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQUJJTElUWV9XT0xGLFxuXHRcdFx0XHRzY2FsZTogMC4zLFxuXHRcdFx0fV0sXG5cdFx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdFx0dGhpcy5yb3RhdGlvbiArPSB0aW1lICogMC4wNTtcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblxuXHRjb250YWluZXIuY2hpbGRyZW4uY2hpbGRyZW4ucHVzaChjb250YWluZXIgYXMgbmV2ZXIpO1xuXG5cdHJldHVybiBjb250YWluZXI7XG59XG4iLCJjb25zdCBJTUFHRV9BU1NFVFMgPSAnYXNzZXRzLyc7XG5cbmV4cG9ydCBjb25zdCBBTklNQUxJU1QgPSAnaWQ6YW5pbWFsaXN0JztcbmV4cG9ydCBjb25zdCBBUkNIRVIgPSAnaWQ6YXJjaGVyJztcblxuZXhwb3J0IGNvbnN0IEFOSU1BTElTVF9JTUFHRSA9IGAke0lNQUdFX0FTU0VUU31BbmltYWxpc3RGb3gxX2ltYWdlLnBuZ2A7XG5leHBvcnQgY29uc3QgQVJDSEVSX0lNQUdFID0gYCR7SU1BR0VfQVNTRVRTfUFyY2hlcjJfaHVudGVyX2ltYWdlLnBuZ2A7XG5cbmV4cG9ydCBjb25zdCBBQklMSVRZX0ZPWCA9IGAke0lNQUdFX0FTU0VUU31BbmltYWxpc3RBYmlsaXR5X0ZveC5wbmdgO1xuZXhwb3J0IGNvbnN0IEFCSUxJVFlfV09MRiA9IGAke0lNQUdFX0FTU0VUU31BbmltYWxpc3RBYmlsaXR5X1dvbGYucG5nYDtcblxuZXhwb3J0IGNvbnN0IEJBQ0tHUk9VTkQgPSBgJHtJTUFHRV9BU1NFVFN9anVuZ2xlX2JhY2tncm91bmQuanBnYDtcblxuZXhwb3J0IGNvbnN0IFRFU1RfQ0FOVkFTID0gJ3Rlc3QuY2FudmFzJztcbiIsImltcG9ydCB7IENhbnZhc0VuZ2luZSB9IGZyb20gJ0BlMmQvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBFbmdpbmVNb2R1bGUgfSBmcm9tICdAZTJkL2NvcmUnO1xuaW1wb3J0IHsgQ2FudmFzVGV4dEV4dGVuc2lvbiB9IGZyb20gJ0BlMmQvdGV4dCc7XG5pbXBvcnQgeyBDdXN0b21JbWFnZUV4dGVuc2lvbiB9IGZyb20gJy4vaW1hZ2UnO1xuaW1wb3J0IEN1c3RvbVBsYXRmb3JtIGZyb20gJy4vcGxhdGZvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21FbmdpbmUgZXh0ZW5kcyBDYW52YXNFbmdpbmUge1xuXHRjb25zdHJ1Y3Rvcihtb2R1bGU6IEVuZ2luZU1vZHVsZSA9IHt9KSB7XG5cdFx0bW9kdWxlLlBsYXRmb3JtID0gbW9kdWxlLlBsYXRmb3JtID8/IEN1c3RvbVBsYXRmb3JtO1xuXG5cdFx0c3VwZXIobW9kdWxlKTtcblxuXHRcdENhbnZhc1RleHRFeHRlbnNpb24uaW5pdCh0aGlzKTtcblx0XHRDdXN0b21JbWFnZUV4dGVuc2lvbi5pbml0KHRoaXMpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDYW52YXNFbmdpbmUsIENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnQGUyZC9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSwgSW1hZ2UgfSBmcm9tICdAZTJkL2ltYWdlJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAZTJkL3Jlc291cmNlcyc7XG5cbmV4cG9ydCBuYW1lc3BhY2UgQ3VzdG9tSW1hZ2VFeHRlbnNpb24ge1xuXHRleHBvcnQgZnVuY3Rpb24gcmVuZGVyKGltYWdlOiBJbWFnZSwgZW5naW5lOiBDYW52YXNFbmdpbmUpOiB2b2lkIHtcblx0XHRpZiAoIWltYWdlLnNyYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHsgbWF0cml4LCBjb2xvclRyYW5zZm9ybSB9ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcblxuXHRcdGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoaW1hZ2Uuc3JjKSBhcyBJbWFnZVJlc291cmNlIHwgbnVsbDtcblxuXHRcdGlmICghcmVzb3VyY2U/LmxvYWRlZCB8fCAhcmVzb3VyY2U/LmltYWdlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29udGV4dDJkID0gKGVuZ2luZS5wbGF0Zm9ybSBhcyBDYW52YXNQbGF0Zm9ybSkuZ2V0Q29udGV4dCgpO1xuXG5cdFx0Y29udGV4dDJkLnNldFRyYW5zZm9ybShcblx0XHRcdG1hdHJpeC5hLFxuXHRcdFx0bWF0cml4LmIsXG5cdFx0XHRtYXRyaXguYyxcblx0XHRcdG1hdHJpeC5kLFxuXHRcdFx0bWF0cml4LnR4LFxuXHRcdFx0bWF0cml4LnR5LFxuXHRcdCk7XG5cblx0XHRjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuXHRcdGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG5cdFx0Y29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG5cblx0XHRjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcblx0XHRjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnbGlnaHRncmF5Jztcblx0XHRjb250ZXh0MmQuc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcblx0fVxuXG5cdGV4cG9ydCBmdW5jdGlvbiBpbml0KGVuZ2luZTogQ2FudmFzRW5naW5lKSB7XG5cdFx0SW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuXHRcdGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoSU1BR0UsIHJlbmRlcik7XG5cdH1cbn1cbiIsImltcG9ydCB7IENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnQGUyZC9jYW52YXMtZW5naW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tUGxhdGZvcm0gZXh0ZW5kcyBDYW52YXNQbGF0Zm9ybSB7XG5cdGNsZWFyKCkge1xuXHRcdGNvbnN0IGNvbnRleHQyZCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnYmxhY2snO1xuXHRcdGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcblx0XHRjb250ZXh0MmQuZmlsbFJlY3QoMCwgMCwgY29udGV4dDJkLmNhbnZhcy53aWR0aCwgY29udGV4dDJkLmNhbnZhcy5oZWlnaHQpO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcblx0fVxufVxuIiwiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAZTJkL3Jlc291cmNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVJlc291cmNlTWFuYWdlciB7XG5cdHJlYWRvbmx5IGFsaWFzZXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXHRyZWFkb25seSByZXNvdXJjZXMgPSBuZXcgTWFwPHN0cmluZywgSW1hZ2VSZXNvdXJjZT4oKTtcblxuXHRyZXNvbHZlID0gKGFzc2V0OiBzdHJpbmcsIGVuZ2luZTogRW5naW5lKTogSW1hZ2VSZXNvdXJjZSB8IG51bGwgPT4ge1xuXHRcdGlmIChhc3NldC5pbmRleE9mKCdpZDonKSA9PT0gMCkge1xuXHRcdFx0Y29uc3QgaWQgPSBhc3NldC5zbGljZSgzKTtcblx0XHRcdGxldCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VzLmdldChpZCkgYXMgSW1hZ2VSZXNvdXJjZTtcblx0XHRcdGlmICghcmVzb3VyY2UpIHtcblx0XHRcdFx0Y29uc3QgdXJsID0gdGhpcy5hbGlhc2VzLmdldChpZCk7XG5cdFx0XHRcdGlmICh1cmwpIHtcblx0XHRcdFx0XHRyZXNvdXJjZSA9IEltYWdlUmVzb3VyY2UucmVzb2x2ZSh1cmwsIGVuZ2luZSkgYXMgSW1hZ2VSZXNvdXJjZTtcblx0XHRcdFx0XHR0aGlzLnJlc291cmNlcy5zZXQoaWQsIHJlc291cmNlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbmdpbmUuZGVidWcud2FybmluZyhgUmVzb3VyY2Ugd2l0aCBpZDogJHthc3NldH0gbm90IGZvdW5kYCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZXNvdXJjZTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRpbml0KGVuZ2luZTogRW5naW5lKSB7XG5cdFx0ZW5naW5lLnJlc291cmNlcy5yZXNvbHZlcnMuYWRkKHRoaXMucmVzb2x2ZSk7XG5cdH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgU3RhdGlzdGljcyB7XG5cdGdldFJlbmRlclRpbWUoKTogbnVtYmVyO1xuXHRnZXRVcGRhdGVUaW1lKCk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZwcyhzdGF0aXN0aWNzOiBTdGF0aXN0aWNzKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHRleHQ6ICdmcHMnLFxuXHRcdGZyYW1lczogMCxcblx0XHRmcmFtZVRpbWU6IDAsXG5cdFx0dXBkYXRlVGltZTogMCxcblx0XHRyZW5kZXJUaW1lOiAwLFxuXHRcdHRleHRGb3JtYXQ6IHtcblx0XHRcdHNpemU6IDIwLFxuXHRcdFx0Y29sb3I6IDB4ZmZmZmZmLFxuXHRcdH0sXG5cdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLmZyYW1lVGltZSArPSB0aW1lO1xuXHRcdFx0dGhpcy51cGRhdGVUaW1lICs9IHN0YXRpc3RpY3MuZ2V0VXBkYXRlVGltZSgpO1xuXHRcdFx0dGhpcy5yZW5kZXJUaW1lICs9IHN0YXRpc3RpY3MuZ2V0UmVuZGVyVGltZSgpO1xuXHRcdFx0dGhpcy5mcmFtZXMrKztcblx0XHRcdGlmICh0aGlzLmZyYW1lVGltZSA+PSAxKSB7XG5cdFx0XHRcdGNvbnN0IGZyYW1lVGltZSA9IE1hdGguY2VpbCgxMDAwICogdGhpcy5mcmFtZVRpbWUgLyB0aGlzLmZyYW1lcyk7XG5cdFx0XHRcdGNvbnN0IHVwZGF0ZVRpbWUgPSAodGhpcy51cGRhdGVUaW1lIC8gdGhpcy5mcmFtZXMpLnRvRml4ZWQoMik7XG5cdFx0XHRcdGNvbnN0IHJlbmRlclRpbWUgPSAodGhpcy5yZW5kZXJUaW1lIC8gdGhpcy5mcmFtZXMpLnRvRml4ZWQoMik7XG5cdFx0XHRcdHRoaXMudGV4dCA9IGBmcHM6ICR7dGhpcy5mcmFtZXN9LCAke2ZyYW1lVGltZX0gbXNcXG51cGRhdGU6ICR7dXBkYXRlVGltZX0gbXNcXG5yZW5kZXI6ICR7cmVuZGVyVGltZX0gbXNgO1xuXHRcdFx0XHR0aGlzLmZyYW1lVGltZSA9IDA7XG5cdFx0XHRcdHRoaXMudXBkYXRlVGltZSA9IDA7XG5cdFx0XHRcdHRoaXMucmVuZGVyVGltZSA9IDA7XG5cdFx0XHRcdHRoaXMuZnJhbWVzID0gMDtcblx0XHRcdH1cblx0XHR9LFxuXHR9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnQGUyZC9jb3JlJztcbmltcG9ydCB7XG5cdEFCSUxJVFlfRk9YLCBBQklMSVRZX1dPTEYsIEFOSU1BTElTVCwgQVJDSEVSLCBCQUNLR1JPVU5ELFxufSBmcm9tICcuL2Fzc2V0cyc7XG5pbXBvcnQgYXJ0aWZhY3QgZnJvbSAnLi9hcnRpZmFjdCc7XG5pbXBvcnQgeyBmcHMsIFN0YXRpc3RpY3MgfSBmcm9tICcuL2Zwcyc7XG5pbXBvcnQgeyB1bml0LCBVbml0UHJvcGVydGllcyB9IGZyb20gJy4vdW5pdCc7XG5pbXBvcnQgeyBwcmVsb2FkZXIsIFByZWxvYWRlckluZm8gfSBmcm9tICcuL3ByZWxvYWRlcic7XG5cbmludGVyZmFjZSBNYWluIHtcblx0c3RhcnQoKTogdm9pZDtcblx0W2tleTogc3RyaW5nXTogYW55O1xufVxuXG5pbnRlcmZhY2UgTWFpblByb3BlcnRpZXMgZXh0ZW5kcyBTdGF0aXN0aWNzIHtcblx0Z2V0Q2FudmFzV2lkdGgoKTogbnVtYmVyO1xuXHRnZXRDYW52YXNIZWlnaHQoKTogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKHBhcmFtZXRlcnM6IE1haW5Qcm9wZXJ0aWVzKTogTWFpbiB7XG5cdGZ1bmN0aW9uIG9uVW5pdENsaWNrKGRhdGE6IFVuaXRQcm9wZXJ0aWVzKSB7XG5cdFx0ZGF0YS5oZWFsdGggPSBNYXRoLnJhbmRvbSgpO1xuXHRcdGNvbnNvbGUubG9nKCdvblVuaXRDbGljaycsIGRhdGEubmFtZSk7XG5cdH1cblxuXHRjb25zdCBjb250ZW50ID0ge1xuXHRcdHR5cGU6ICdsb2FkZXInLFxuXHRcdHZpc2libGU6IGZhbHNlLFxuXHRcdGVuYWJsZWQ6IGZhbHNlLFxuXHRcdG9uTG9hZGVkKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2JhY2tncm91bmQgbG9hZGVkJyk7XG5cdFx0XHR0aGlzLnZpc2libGUgPSB0cnVlO1xuXHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQkFDS0dST1VORCxcblx0XHRcdFx0c2NhbGVYOiAxLFxuXHRcdFx0XHRzY2FsZVk6IDEsXG5cdFx0XHR9LFxuXHRcdFx0ZmlndXJlOiB7XG5cdFx0XHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHR0eXBlOiAncmVjdGFuZ2xlJyxcblx0XHRcdFx0XHR4OiAyMCxcblx0XHRcdFx0XHR5OiAyMCxcblx0XHRcdFx0XHR3aWR0aDogMTAwLFxuXHRcdFx0XHRcdGhlaWdodDogNTAsXG5cdFx0XHRcdFx0ZmlsbDogMHhmZjAwZmYsXG5cdFx0XHRcdFx0c3Ryb2tlOiAweDAwMDBmZixcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRzaGFwZXM6IHtcblx0XHRcdFx0dHlwZTogJ3NoYXBlJyxcblx0XHRcdFx0ZGF0YTogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdlbGxpcHNlJyxcblx0XHRcdFx0XHRcdHg6IDEwMCxcblx0XHRcdFx0XHRcdHk6IDEwMCxcblx0XHRcdFx0XHRcdHJhZGl1czogNTAsXG5cdFx0XHRcdFx0XHRmaWxsOiB7IHR5cGU6ICdzb2xpZCcsIGNvbG9yOiAweGZmZmYwMCwgYWxwaGE6IDEgfSxcblx0XHRcdFx0XHRcdHN0cm9rZTogeyBmaWxsOiAweDAwMDBmZiwgdGhpY2tuZXNzOiAxMCB9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ3BhdGgnLFxuXHRcdFx0XHRcdFx0ZGF0YTogJ00gMTEwLCAxMTAgSCAxOTAgViAxOTAgSCAxMTAgWicsXG5cdFx0XHRcdFx0XHRmaWxsOiAweDk5MDAwMCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdwYXRoJyxcblx0XHRcdFx0XHRcdGRhdGE6IFtcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbW92ZVRvJywgeDogMCwgeTogMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAxMDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMTAwLCB5OiAxMDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMCwgeTogMTAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRmaWxsOiB7IHR5cGU6ICdzb2xpZCcsIGNvbG9yOiAweDk5OTk5OSwgYWxwaGE6IDAuNiB9LFxuXHRcdFx0XHRcdFx0c3Ryb2tlOiAweDAwMDAwMCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHVuaXRzOiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdHVuaXQoe1xuXHRcdFx0XHRcdFx0bmFtZTogJ0FyY2hlcicsIGhlYWx0aDogMSwgaW1hZ2U6IEFSQ0hFUiwgb25DbGljazogb25Vbml0Q2xpY2ssXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0dW5pdCh7XG5cdFx0XHRcdFx0XHRuYW1lOiAnQW5pbWFsaXN0JywgaGVhbHRoOiAxLCBpbWFnZTogQU5JTUFMSVNULCBvbkNsaWNrOiBvblVuaXRDbGljayxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHRhcnRpZmFjdDoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0eDogMzAwLFxuXHRcdFx0XHR5OiAzNTAsXG5cdFx0XHRcdGNoaWxkcmVuOiBhcnRpZmFjdCgpLFxuXHRcdFx0fSxcblx0XHRcdG1hcDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHR5OiA0NTAsXG5cdFx0XHRcdHNjYWxlWDogMC4yLFxuXHRcdFx0XHRzY2FsZVk6IDAuMixcblx0XHRcdFx0YWxwaGE6IDAuNSxcblx0XHRcdFx0c3JjOiAndGVzdC5jYW52YXMnLFxuXHRcdFx0XHRvblBvaW50ZXJPdmVyKCkge1xuXHRcdFx0XHRcdHRoaXMuYWxwaGEgPSAxO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblBvaW50ZXJPdXQoKSB7XG5cdFx0XHRcdFx0dGhpcy5hbHBoYSA9IDAuNTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRhYmlsaXR5Rm94OiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQUJJTElUWV9GT1gsXG5cdFx0XHRcdHg6IDQ1MCxcblx0XHRcdFx0eTogNTAwLFxuXHRcdFx0XHRzY2FsZTogMC41LFxuXHRcdFx0XHR0aW50OiB7XG5cdFx0XHRcdFx0Y29sb3I6IDB4MDBmZjAwLFxuXHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHR9IGFzIGFueSxcblx0XHRcdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMudGludCkge1xuXHRcdFx0XHRcdFx0dGhpcy50aW50LnZhbHVlICs9IHRpbWU7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy50aW50LnZhbHVlID49IDEpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy50aW50LnZhbHVlID0gMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uUG9pbnRlckRvd24oZTogYW55KSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMudGludCkge1xuXHRcdFx0XHRcdFx0dGhpcy50aW50ID0gbnVsbDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy50aW50ID0ge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogMHgwMGZmMDAsXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2ZveCcsIGUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGFiaWxpdHlXb2xmOiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHR4OiAzNTAsXG5cdFx0XHRcdHk6IDQwMCxcblx0XHRcdFx0Y2hpbGRyZW46IHtcblx0XHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRcdHNyYzogQUJJTElUWV9XT0xGLFxuXHRcdFx0XHRcdHNjYWxlOiAwLjUsXG5cdFx0XHRcdFx0YWxwaGE6IDEsXG5cdFx0XHRcdFx0dHdlZW46IHtcblx0XHRcdFx0XHRcdGxvb3A6IHRydWUsXG5cdFx0XHRcdFx0XHRwaGFzZXM6IFtcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeDogMjAwIH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6ICdjdWJpY291dCcsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB5OiAyMDAsIGFscGhhOiAwLjUgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ3F1YWRyYXRpY0luJyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHg6IDAsIGFscGhhOiAxIH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6ICdxdWFkcmF0aWNPdXQnLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeTogMCB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGZwczogZnBzKHBhcmFtZXRlcnMpLFxuXHRcdH0sXG5cdH07XG5cblx0Y29uc3QgcHJlbG9hZGVySW5mbzogUHJlbG9hZGVySW5mbyA9IHtcblx0XHRnZXRXaWR0aDogcGFyYW1ldGVycy5nZXRDYW52YXNXaWR0aCxcblx0XHRnZXRIZWlnaHQ6IHBhcmFtZXRlcnMuZ2V0Q2FudmFzSGVpZ2h0LFxuXHRcdGdldFByb2dyZXNzKCkge1xuXHRcdFx0cmV0dXJuIExvYWRlci5nZXRMb2FkaW5nUHJvZ3Jlc3MoY29udGVudCk7XG5cdFx0fSxcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRjb250ZW50LFxuXHRcdFx0cHJlbG9hZGVyOiBwcmVsb2FkZXIocHJlbG9hZGVySW5mbyksXG5cdFx0fSxcblx0XHRvblVwZGF0ZSgpIHtcblx0XHRcdGNvbnN0IGlzTG9hZGVkID0gIXRoaXMuY2hpbGRyZW4uY29udGVudC52aXNpYmxlO1xuXHRcdFx0dGhpcy5jaGlsZHJlbi5wcmVsb2FkZXIudmlzaWJsZSA9IGlzTG9hZGVkO1xuXHRcdFx0dGhpcy5jaGlsZHJlbi5wcmVsb2FkZXIuZW5hYmxlZCA9IGlzTG9hZGVkO1xuXHRcdH0sXG5cdFx0c3RhcnQoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnc3RhcnQnKTtcblx0XHR9LFxuXHR9O1xufVxuIiwiaW1wb3J0IHsgU2hhcGUgfSBmcm9tICdAZTJkL3NoYXBlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcmVsb2FkZXJJbmZvIHtcblx0Z2V0UHJvZ3Jlc3MoKTogbnVtYmVyO1xuXHRnZXRXaWR0aCgpOiBudW1iZXI7XG5cdGdldEhlaWdodCgpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkZXIoaW5mbzogUHJlbG9hZGVySW5mbykge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0c2NhbGVYOiAxLFxuXHRcdHk6IGluZm8uZ2V0SGVpZ2h0KCkgLSAyMCxcblx0XHRkYXRhOiB7XG5cdFx0XHR0eXBlOiAncmVjdGFuZ2xlJyxcblx0XHRcdHdpZHRoOiAxLFxuXHRcdFx0aGVpZ2h0OiAyMCxcblx0XHRcdGZpbGw6IDB4ZmYwMDAwLFxuXHRcdH0sXG5cdFx0b25VcGRhdGUoKSB7XG5cdFx0XHR0aGlzLnNjYWxlWCA9IHRoaXMuc2NhbGVYID8/IDA7XG5cdFx0XHR0aGlzLnNjYWxlWCArPSAoaW5mby5nZXRXaWR0aCgpICogaW5mby5nZXRQcm9ncmVzcygpIC0gdGhpcy5zY2FsZVgpIC8gMjtcblx0XHR9LFxuXHR9IGFzIFNoYXBlO1xufVxuIiwiY29uc3QgU1BFRUQgPSAxMDA7XG5cbmludGVyZmFjZSBVbml0IHtcblx0W2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRQcm9wZXJ0aWVzIHtcblx0bmFtZTogc3RyaW5nLFxuXHRoZWFsdGg6IG51bWJlcixcblx0aW1hZ2U6IHN0cmluZyxcblx0b25DbGljazogKGRhdGE6IFVuaXRQcm9wZXJ0aWVzKSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBvblByb3BzVXBkYXRlKHByb3BzOiBhbnksIGNhbGxiYWNrOiAodGltZTogbnVtYmVyKSA9PiB2b2lkKSB7XG5cdGNvbnN0IGNvcHkgPSB7IC4uLnByb3BzIH07XG5cdHJldHVybiAodGltZTogbnVtYmVyKSA9PiB7XG5cdFx0Ly8gY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKTtcblx0XHRsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuXHRcdGZvciAoY29uc3Qga2V5IGluIHByb3BzKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5cdFx0XHRpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRpZiAoY29weVtrZXldICE9PSBwcm9wc1trZXldKSB7XG5cdFx0XHRcdFx0Y29weVtrZXldID0gcHJvcHNba2V5XTtcblx0XHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VkKSB7XG5cdFx0XHRjYWxsYmFjayh0aW1lKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIHJ1bk9uUHJvcHNVcGRhdGUocHJvcHM6IGFueSwgY29tcG9uZW50OiBhbnkpIHtcblx0Y29tcG9uZW50Lm9uVXBkYXRlID0gb25Qcm9wc1VwZGF0ZShwcm9wcywgY29tcG9uZW50Lm9uVXBkYXRlLmJpbmQoY29tcG9uZW50KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bml0KHByb3BzOiBVbml0UHJvcGVydGllcyk6IFVuaXQge1xuXHRmdW5jdGlvbiBnZXRUaXRsZSgpIHtcblx0XHRyZXR1cm4gYCR7cHJvcHMubmFtZX1cXG4ke01hdGgucm91bmQocHJvcHMuaGVhbHRoICogMTAwKX0lYDtcblx0fVxuXG5cdGNvbnN0IHVuaXRWaWV3ID0ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdHg6IDUwICsgTWF0aC5yYW5kb20oKSAqIDQwMCxcblx0XHR5OiAyMDAsXG5cdFx0cm90YXRpb246IDAsXG5cdFx0dXBkYXRlTW92ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMueCArPSB0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCAqIHRpbWUgKiBTUEVFRDtcblx0XHRcdGlmICh0aGlzLnggPCA1MCkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCA9IDE7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMueCA+IDQwMCkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCA9IC0xO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZU1vdmUodGltZSk7XG5cdFx0fSxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0dGV4dDoge1xuXHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHRcdHRleHQ6IGdldFRpdGxlKCksXG5cdFx0XHRcdHRleHRGb3JtYXQ6IHtcblx0XHRcdFx0XHRzaXplOiAxNSxcblx0XHRcdFx0XHRjb2xvcjogMHhmZmRkZGQsXG5cdFx0XHRcdFx0YWxpZ246ICdjZW50ZXInLFxuXHRcdFx0XHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRib3JkZXI6IDB4MDBmZjAwLFxuXHRcdFx0XHR5OiAtMzAsXG5cdFx0XHRcdGhlaWdodDogMzUsXG5cdFx0XHRcdHBpdm90WDogMC41LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duOiAoKSA9PiB7XG5cdFx0XHRcdFx0cHJvcHMub25DbGljayhwcm9wcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uVXBkYXRlKCkge1xuXHRcdFx0XHRcdHRoaXMudGV4dCA9IGdldFRpdGxlKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBwcm9wcy5pbWFnZSxcblx0XHRcdFx0c2NhbGVYOiBNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xLFxuXHRcdFx0XHRwaXZvdFg6IDAuNSxcblx0XHRcdFx0b25Qb2ludGVyRG93bjogKCkgPT4ge1xuXHRcdFx0XHRcdHByb3BzLm9uQ2xpY2socHJvcHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXG5cdHJ1bk9uUHJvcHNVcGRhdGUocHJvcHMsIHVuaXRWaWV3LmNoaWxkcmVuLnRleHQpO1xuXG5cdHJldHVybiB1bml0Vmlldztcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCB7IENvbXBvbmVudCwgTW91c2VFeHRlbnNpb24gfSBmcm9tICdAZTJkL2NvcmUnO1xuaW1wb3J0IHsgVHdlZW5FeHRlbnNpb24gfSBmcm9tICdAZTJkL3R3ZWVuJztcbmltcG9ydCB7IENhbnZhc1RleHRFeHRlbnNpb24gfSBmcm9tICdAZTJkL3RleHQnO1xuaW1wb3J0IHsgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiB9IGZyb20gJ0BlMmQvaW1hZ2UnO1xuaW1wb3J0IHsgQ2FudmFzU2hhcGVFeHRlbnNpb24gfSBmcm9tICdAZTJkL3NoYXBlJztcbmltcG9ydCB7IENhbnZhc0VuZ2luZSB9IGZyb20gJ0BlMmQvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGUyZC9yZXNvdXJjZXMnO1xuaW1wb3J0IEN1c3RvbVJlc291cmNlTWFuYWdlciBmcm9tICcuL2VuZ2luZS9yZXNvdXJjZXMnO1xuaW1wb3J0IEN1c3RvbUVuZ2luZSBmcm9tICcuL2VuZ2luZS9lbmdpbmUnO1xuaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluJztcbmltcG9ydCB7XG5cdEFOSU1BTElTVCwgQU5JTUFMSVNUX0lNQUdFLCBBUkNIRVIsIEFSQ0hFUl9JTUFHRSwgVEVTVF9DQU5WQVMsXG59IGZyb20gJy4vYXNzZXRzJztcblxuLy8gcGFnZVxuZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAnMCc7XG5kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSAnMCc7XG5cbi8vIGJhc2ljIGVuZ2luZVxuY29uc3QgZW5naW5lID0gbmV3IENhbnZhc0VuZ2luZSgpO1xuQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5DYW52YXNUZXh0RXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbkNhbnZhc1NoYXBlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcblR3ZWVuRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbk1vdXNlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbmVuZ2luZS5zY3JlZW4uZnVsbHNjcmVlbiA9IHRydWU7XG5lbmdpbmUudGlja2VyLnBsYXkoKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZW5naW5lLnBsYXRmb3JtLnZpZXcpO1xuXG5jb25zdCBwYXJhbWV0ZXJzID0ge1xuXHRnZXRVcGRhdGVUaW1lKCkge1xuXHRcdHJldHVybiBlbmdpbmUudXBkYXRlci5lbGFwc2VkVGltZTtcblx0fSxcblx0Z2V0UmVuZGVyVGltZSgpIHtcblx0XHRyZXR1cm4gZW5naW5lLnJlbmRlcmVyLmVsYXBzZWRUaW1lO1xuXHR9LFxuXHRnZXRDYW52YXNXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiBlbmdpbmUuc2NyZWVuLmdldFdpZHRoKCk7XG5cdH0sXG5cdGdldENhbnZhc0hlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiBlbmdpbmUuc2NyZWVuLmdldEhlaWdodCgpO1xuXHR9LFxufTtcblxuLy8gYXBwbGljYXRpb25cbmNvbnN0IGFwcCA9IG1haW4ocGFyYW1ldGVycyk7XG5hcHAuc3RhcnQoKTtcbmVuZ2luZS5yb290ID0gYXBwIGFzIGFueSBhcyBDb21wb25lbnQ7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuY29uc29sZS5sb2coYXBwKTtcblxuLy8gdGVzdCBwYXVzZVxuc2V0VGltZW91dCgoKSA9PiBlbmdpbmUudGlja2VyLnBhdXNlKCksIDUwMDApO1xuc2V0VGltZW91dCgoKSA9PiBlbmdpbmUudGlja2VyLnBsYXkoKSwgMTAwMDApO1xuXG4vLyBjdXN0b20gZW5naW5lXG5jb25zdCBjdXN0b21FbmdpbmUgPSBuZXcgQ3VzdG9tRW5naW5lKCk7XG5jdXN0b21FbmdpbmUuc2NyZWVuLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbmN1c3RvbUVuZ2luZS5zY3JlZW4uaGVpZ2h0ID0gNjAwO1xuY3VzdG9tRW5naW5lLnVwZGF0ZXIuZW5hYmxlZCA9IGZhbHNlO1xuY3VzdG9tRW5naW5lLnJvb3QgPSBlbmdpbmUucm9vdDtcbmN1c3RvbUVuZ2luZS50aWNrZXIucGxheSgpO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUudG9wID0gJzBweCc7XG5jdXN0b21FbmdpbmUucGxhdGZvcm0udmlldy5zdHlsZS5sZWZ0ID0gJzYwMHB4JztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcpO1xuXG4vLyAvLyBzZXQgY3VzdG9tIHJlc291cmNlXG5lbmdpbmUucmVzb3VyY2VzLnJlc291cmNlcy5zZXQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBjdXN0b21FbmdpbmUucGxhdGZvcm0udmlldyxcblx0XHRsb2FkZWQ6IHRydWUsXG5cdH0gYXMgSW1hZ2VSZXNvdXJjZSxcbik7XG5jdXN0b21FbmdpbmUucmVzb3VyY2VzLnJlc291cmNlcy5zZXQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBlbmdpbmUucGxhdGZvcm0udmlldyxcblx0XHRsb2FkZWQ6IHRydWUsXG5cdH0gYXMgSW1hZ2VSZXNvdXJjZSxcbik7XG5cbi8vIGN1c3RvbSByZXNvdXJjZSByZXNvbHZlclxuY29uc3QgcmVzb3VyY2VNYW5hZ2VyID0gbmV3IEN1c3RvbVJlc291cmNlTWFuYWdlcigpO1xucmVzb3VyY2VNYW5hZ2VyLmFsaWFzZXMuc2V0KEFSQ0hFUi5yZXBsYWNlKCdpZDonLCAnJyksIEFSQ0hFUl9JTUFHRSk7XG5yZXNvdXJjZU1hbmFnZXIuYWxpYXNlcy5zZXQoQU5JTUFMSVNULnJlcGxhY2UoJ2lkOicsICcnKSwgQU5JTUFMSVNUX0lNQUdFKTtcbnJlc291cmNlTWFuYWdlci5pbml0KGVuZ2luZSk7XG5yZXNvdXJjZU1hbmFnZXIuaW5pdChjdXN0b21FbmdpbmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==