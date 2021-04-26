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

var point1 = _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Point.empty();
var point2 = _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Point.empty();
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
    _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.transformPoint(matrix, point1, point1);
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
    _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.transformPoint(matrix, point1, point1);
    _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.transformPoint(matrix, point2, point2);
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

    var metrics;
    var simple = _text__WEBPACK_IMPORTED_MODULE_3__.Text.isSimple(component);

    if (simple) {
      metrics = _data_metrics__WEBPACK_IMPORTED_MODULE_5__.TextMetrics.getSimpleMetrics(component);
    } else {
      metrics = _data_metrics__WEBPACK_IMPORTED_MODULE_5__.TextMetrics.getMetrics(component);
    }

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
    var y = 0;

    if (height) {
      var alignVerticalValue = _data_format__WEBPACK_IMPORTED_MODULE_4__.TextFormat.getVerticalAlignValue(defaultTextFormat);
      y = (height - metrics.height) * alignVerticalValue;

      if (y < 0) {
        y = 0;
      }
    }

    y += offsetY;
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
      engine.debug.warning('rich text');
      var _metrics = metrics,
          lines = _metrics.lines;

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
            context2d.fillText(_symbol.symbol, _x, y + _symbolSize + alignSymbolValue * (lineHeight - _symbolSize));
            _x += _symbol.advance;
          }
        }

        y += line.height;
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
/* harmony export */   "TEXT": () => (/* reexport safe */ _text__WEBPACK_IMPORTED_MODULE_0__.TEXT),
/* harmony export */   "TextMetrics": () => (/* reexport safe */ _data_metrics__WEBPACK_IMPORTED_MODULE_3__.TextMetrics),
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

  function calculateBounds(component, bounds) {
    var metrics;

    if (Text.isSimple(component)) {
      metrics = _data_metrics__WEBPACK_IMPORTED_MODULE_2__.TextMetrics.getSimpleMetrics(component);
    } else {
      metrics = _data_metrics__WEBPACK_IMPORTED_MODULE_2__.TextMetrics.getMetrics(component);
    }

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
/* harmony import */ var _jeng_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/text */ "../../packages/text/dist/index.js");
/* harmony import */ var _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jeng/canvas-engine */ "../../packages/canvas-engine/dist/index.js");
/* harmony import */ var _jeng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jeng/core */ "../../packages/core/dist/index.js");



const engine = new _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_1__.CanvasEngine();
_jeng_text__WEBPACK_IMPORTED_MODULE_0__.CanvasTextExtension.init(engine);
engine.screen.fullscreen = true;
engine.ticker.play();
document.body.appendChild(engine.platform.view);
function positionTexts(texts) {
    const x = 20;
    let y = 20;
    texts.forEach((text) => {
        text.x = x;
        text.y = y;
        const height = text.height ?? _jeng_text__WEBPACK_IMPORTED_MODULE_0__.TextMetrics.getMetrics(text)?.height ?? 0;
        y += 10 + height;
    });
    return texts;
}
const text = 'Lorem ipsum dolor sit amet,\nconsectetur adipiscing\nelit.';
const app = {
    type: _jeng_core__WEBPACK_IMPORTED_MODULE_2__.CONTAINER,
    children: positionTexts([
        {
            type: _jeng_text__WEBPACK_IMPORTED_MODULE_0__.TEXT,
            text,
            format: {
                font: 'arial',
                size: 20,
                color: 0x229933,
            },
            border: 0x229933,
        },
        {
            type: _jeng_text__WEBPACK_IMPORTED_MODULE_0__.TEXT,
            text,
            format: {
                font: 'arial',
                size: 20,
                color: 0x229933,
                italic: true,
            },
            border: 0x229933,
        },
        {
            type: _jeng_text__WEBPACK_IMPORTED_MODULE_0__.TEXT,
            text,
            format: {
                font: 'arial',
                size: 20,
                color: 0x229933,
                bold: true,
            },
            border: 0x229933,
        },
        {
            type: _jeng_text__WEBPACK_IMPORTED_MODULE_0__.TEXT,
            text,
            format: {
                font: 'times new roman',
                size: 20,
                color: 0x332299,
            },
            border: 0x332299,
        },
        {
            type: _jeng_text__WEBPACK_IMPORTED_MODULE_0__.TEXT,
            text,
            format: {
                font: 'times new roman',
                size: 20,
                color: 0x332299,
                italic: true,
            },
            border: 0x332299,
        },
        {
            type: _jeng_text__WEBPACK_IMPORTED_MODULE_0__.TEXT,
            text,
            format: {
                font: 'times new roman',
                size: 20,
                color: 0x332299,
                bold: true,
            },
            border: 0x332299,
        },
        {
            type: _jeng_text__WEBPACK_IMPORTED_MODULE_0__.TEXT,
            text,
            format: {
                font: 'arial',
                size: 20,
                color: 0x993322,
                align: 'center',
                letterSpacing: 1,
                leading: 1,
            },
            border: 0x993322,
        },
    ]),
};
engine.root = app;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LXNpbXBsZS8uLi9wYWNrYWdlcy9jYW52YXMtZW5naW5lL2Rpc3QvZW5naW5lLmpzIiwid2VicGFjazovL3RleHQtc2ltcGxlLy4uL3BhY2thZ2VzL2NhbnZhcy1lbmdpbmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXh0LXNpbXBsZS8uLi9wYWNrYWdlcy9jYW52YXMtZW5naW5lL2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vdGV4dC1zaW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L3BsYXRmb3JtLmpzIiwid2VicGFjazovL3RleHQtc2ltcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9jb21wb25lbnRzL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90ZXh0LXNpbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvY29tcG9uZW50cy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdGV4dC1zaW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvcmUvZW5naW5lLmpzIiwid2VicGFjazovL3RleHQtc2ltcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9jb3JlL2ZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vdGV4dC1zaW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZXh0LXNpbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy9waXZvdC5qcyIsIndlYnBhY2s6Ly90ZXh0LXNpbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy9wb2ludGVyLmpzIiwid2VicGFjazovL3RleHQtc2ltcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9leHRlbnNpb25zL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZXh0LXNpbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vdGV4dC1zaW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vdGV4dC1zaW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL2RlYnVnLmpzIiwid2VicGFjazovL3RleHQtc2ltcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9sb2FkaW5nLmpzIiwid2VicGFjazovL3RleHQtc2ltcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly90ZXh0LXNpbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvcG9pbnRlcnMuanMiLCJ3ZWJwYWNrOi8vdGV4dC1zaW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3JlbmRlcmVyLmpzIiwid2VicGFjazovL3RleHQtc2ltcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9yZXNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vdGV4dC1zaW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly90ZXh0LXNpbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvdGlja2VyLmpzIiwid2VicGFjazovL3RleHQtc2ltcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy91cGRhdGVyLmpzIiwid2VicGFjazovL3RleHQtc2ltcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXh0LXNpbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvaW5wdXQvbW91c2UuanMiLCJ3ZWJwYWNrOi8vdGV4dC1zaW1wbGUvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L2JvdW5kcy5qcyIsIndlYnBhY2s6Ly90ZXh0LXNpbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvY29sb3ItdHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RleHQtc2ltcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXh0LXNpbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvbWF0cml4LmpzIiwid2VicGFjazovL3RleHQtc2ltcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9wb2ludC5qcyIsIndlYnBhY2s6Ly90ZXh0LXNpbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL3RleHQtc2ltcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC9jYW52YXMvdGV4dC5qcyIsIndlYnBhY2s6Ly90ZXh0LXNpbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvZGF0YS9mb250LmpzIiwid2VicGFjazovL3RleHQtc2ltcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC9kYXRhL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly90ZXh0LXNpbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvZGF0YS9tZXRyaWNzLmpzIiwid2VicGFjazovL3RleHQtc2ltcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXh0LXNpbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvdGV4dC5qcyIsIndlYnBhY2s6Ly90ZXh0LXNpbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXh0LXNpbXBsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGV4dC1zaW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZXh0LXNpbXBsZS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJDYW52YXNFbmdpbmUiLCJtb2R1bGUiLCJQbGF0Zm9ybSIsIkNhbnZhc1BsYXRmb3JtIiwiRW5naW5lIiwicG9pbnQxIiwiUG9pbnQiLCJwb2ludDIiLCJDYW52YXNQYXR0ZXJucyIsImNvbG9yUGF0dGVybiIsImNvbG9yIiwiYWxwaGEiLCJjdCIsInIiLCJnIiwiYiIsImEiLCJDb2xvclRyYW5zZm9ybSIsInJlZE11bHRpcGxpZXIiLCJyZWRPZmZzZXQiLCJncmVlbk11bHRpcGxpZXIiLCJncmVlbk9mZnNldCIsImJsdWVNdWx0aXBsaWVyIiwiYmx1ZU9mZnNldCIsImFscGhhTXVsdGlwbGllciIsImFscGhhT2Zmc2V0IiwiYWRkR3JhZGllbnRDb2xvcnMiLCJwYXR0ZXJuIiwiY29sb3JzIiwiYWxwaGFzIiwicmF0aW9zIiwiY29sb3JUcmFuc2Zvcm0iLCJpIiwibGVuZ3RoIiwicmdiIiwicmF0aW8iLCJhZGRDb2xvclN0b3AiLCJyYWRpYWxHcmFkaWVudFBhdHRlcm4iLCJtYXRyaXgiLCJjb250ZXh0IiwieCIsInkiLCJNYXRyaXgiLCJjcmVhdGVSYWRpYWxHcmFkaWVudCIsInR4IiwidHkiLCJNYXRoIiwiYWJzIiwibGluZWFyR3JhZGllbnRQYXR0ZXJuIiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJiaXRtYXBQYXR0ZXJuIiwiaW1hZ2UiLCJyZXBlYXQiLCJjcmVhdGVQYXR0ZXJuIiwiYXJndW1lbnRzIiwidmlldyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHRzIiwiZ2V0Q29udGV4dCIsImN1c3RvbUNvbnRleHRzIiwicHVzaCIsInBvcCIsImVuZ2luZSIsImRlYnVnIiwid2FybmluZyIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwiY2xlYXIiLCJ1cGRhdGVTaXplIiwic2V0VHJhbnNmb3JtIiwiY2xlYXJSZWN0Iiwic2NyZWVuIiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJwaXhlbFJhdGlvIiwiZ2V0UGl4ZWxSYXRpbyIsInZpZXdXaWR0aCIsImZsb29yIiwidmlld0hlaWdodCIsInN0eWxlIiwiQ09OVEFJTkVSIiwiQ29udGFpbmVyIiwibnVtQ2hpbGRyZW4iLCJjb250YWluZXIiLCJjaGlsZHJlbiIsIkFycmF5IiwiaXNBcnJheSIsInR5cGUiLCJrZXlzIiwiT2JqZWN0IiwiQ29udGFpbmVyRXh0ZW5zaW9uIiwicmVuZGVyIiwicmVuZGVyZXIiLCJkZXB0aCIsImNvbXBvbmVudCIsInJlbmRlckNvbXBvbmVudCIsImNvbXBvbmVudHNNYXAiLCJ1cGRhdGUiLCJ1cGRhdGVyIiwidXBkYXRlQ29tcG9uZW50IiwiaGl0VGVzdCIsInBvaW50ZXJFdmVudHMiLCJwb2ludGVycyIsInJlc3VsdCIsImRpc3BhdGNoQ29tcG9uZW50IiwibG9hZGVkIiwibG9hZGluZyIsInByb2dyZXNzIiwiY29tcG9uZW50Q29udGV4dCIsImluaXQiLCJjb21wb25lbnRzIiwic2V0IiwiTE9BREVSIiwiTG9hZGVyIiwiZ2V0TG9hZGluZ1Byb2dyZXNzIiwibG9hZGVyIiwibG9hZGluZ1Byb2dyZXNzIiwiaXNMb2FkZWQiLCJuZWVkTG9hZGluZ0NoZWNrIiwibG9hZGluZ0NoZWNrIiwiTG9hZGVyRXh0ZW5zaW9uIiwib25Mb2FkZWQiLCJDb21wb25lbnRzIiwiU2NyZWVuIiwiVXBkYXRlciIsIkxvYWRpbmciLCJSZW5kZXJlciIsIlBvaW50ZXJzIiwiVGlja2VyIiwiRGVidWciLCJSZXNvdXJjZXMiLCJwbGF0Zm9ybSIsInRpY2tlciIsInJlc291cmNlcyIsIkVuZ2luZUZlYXR1cmUiLCJEaXNwbGF5IiwiaXNWaXNpYmxlIiwidmlzaWJsZSIsIlBpdm90IiwiZ2V0WCIsInBpdm90IiwicGl2b3RYIiwiZ2V0WSIsInBpdm90WSIsImhhc1ZhbHVlcyIsImhhbmRsZXJzTWFwIiwicG9pbnRlckRvd24iLCJwb2ludGVyVXAiLCJwb2ludGVyTW92ZSIsInBvaW50ZXJPdmVyIiwicG9pbnRlck91dCIsIlBvaW50ZXIiLCJpc1BvaW50ZXJPdmVyIiwicG9pbnRlciIsImlzUG9pbnRlckVuYWJsZWQiLCJwb2ludGVyRW5hYmxlZCIsImRpc3BhdGNoRXZlbnQiLCJpZCIsImhhbmRsZXJOYW1lIiwiZXZlbnQiLCJUcmFuc2Zvcm0iLCJnZXRNYXRyaXgiLCJ0cmFuc2Zvcm0iLCJjIiwiZCIsInJvdGF0aW9uIiwic2NhbGVYIiwic2NhbGUiLCJzY2FsZVkiLCJjb3MiLCJzaW4iLCJnZXRDb2xvclRyYW5zZm9ybSIsInRpbnQiLCJ2YWx1ZSIsInZhbHVlSW52ZXJ0ZWQiLCJicmlnaHRuZXNzIiwidW5kZWZpbmVkIiwicGVyY2VudCIsIm9mZnNldCIsIlVwZGF0ZSIsImlzRW5hYmxlZCIsImVuYWJsZWQiLCJ0aW1lIiwib25VcGRhdGUiLCJwcm9wZXJ0aWVzIiwiTWFwIiwiZXJyb3JzIiwid2FybmluZ3MiLCJjb25zb2xlIiwibG9nIiwiYXJncyIsIlN0cmluZyIsImNvdW50IiwiZ2V0IiwiZXJyb3IiLCJ3YXJuIiwiZWxhcHNlZFRpbWUiLCJoYW5kbGVyIiwicm9vdCIsInN0YXJ0VGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiZ2xvYmFsIiwibG9jYWwiLCJwb2ludGVySWQiLCJwb2ludGVyVHlwZSIsImJhc2UiLCJwYXJlbnQiLCJiZWdpbiIsImVuZCIsIlJlc291cmNlIiwiZ2V0UHJvZ3Jlc3MiLCJyZXNvdXJjZSIsImJ5dGVzVG90YWwiLCJieXRlc0xvYWRlZCIsInJlc29sdmVycyIsIlNldCIsImFzc2V0IiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnVsbHNjcmVlbiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRldmljZVBpeGVsUmF0aW8iLCJmcmFtZVJhdGUiLCJwYXVzZWQiLCJ1cGRhdGVGcmFtZSIsImN1cnJlbnRUaW1lIiwiZGVsdGFUaW1lIiwidXBkYXRlTmV4dEZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlUHJvcGVydGllcyIsImZvckVhY2giLCJwcm9wZXJ0eSIsImNsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudExlZnQiLCJjbGllbnRZIiwidG9wIiwiY2xpZW50VG9wIiwiZGlzcGF0Y2giLCJwcmV2ZW50RGVmYXVsdCIsIk1vdXNlRXh0ZW5zaW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkJvdW5kcyIsImVtcHR5IiwibWluWCIsIk51bWJlciIsIk1BWF9WQUxVRSIsIm1pblkiLCJtYXhYIiwiTUlOX1ZBTFVFIiwibWF4WSIsInNldEVtcHR5IiwiYm91bmRzIiwiaXNFbXB0eSIsInRvUmVjdGFuZ2xlIiwicmVjdGFuZ2xlIiwidGVzdFgiLCJ0ZXN0WSIsInRlc3QiLCJ0ZXN0UG9pbnQiLCJwb2ludCIsImlzRW1wdHlXaXRoQWxwaGEiLCJjb3B5IiwiZnJvbSIsInRvIiwiY29uY2F0IiwiY3QxIiwiY3QwIiwibWF0cml4MCIsIm1hdHJpeDEiLCJnZXREZXRlcm1pbmFudCIsImludmVydCIsImRldGVybWluYW50IiwidHJhbnNmb3JtUG9pbnQiLCJ0cmFuc2Zvcm1Qb2ludExvY2FsIiwidHJhbnNmb3JtSW52ZXJzZVBvaW50IiwidHJhbnNmb3JtQm91bmRzIiwicngiLCJyeSIsInJyIiwicmIiLCJueDEiLCJueTEiLCJueDIiLCJueTIiLCJueDMiLCJueTMiLCJueDQiLCJueTQiLCJyaWdodCIsImJvdHRvbSIsInNxcnQiLCJhbmdsZSIsImF0YW4yIiwiZXF1YWxzIiwicG9pbnQwIiwic291cmNlIiwidGFyZ2V0Iiwibm9ybWFsaXplIiwidGhpY2tuZXNzIiwiZGlzdGFuY2UiLCJkeCIsImR5IiwiaW50ZXJwb2xhdGUiLCJwb2xhciIsIlJlY3RhbmdsZSIsImludGVyc2VjdGlvbiIsImNvbnRhaW5zIiwicm91bmQiLCJkZWZhdWx0VGV4dEZvcm1hdCIsIkNPUlJFQ1RJT04iLCJDYW52YXNUZXh0RXh0ZW5zaW9uIiwibWV0cmljcyIsInNpbXBsZSIsIlRleHQiLCJUZXh0TWV0cmljcyIsImZvcm1hdCIsImJvcmRlciIsImJhY2tncm91bmQiLCJUZXh0Rm9ybWF0IiwicmVhbFdpZHRoIiwicmVhbEhlaWdodCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiYWxpZ25WZXJ0aWNhbFZhbHVlIiwiY29udGV4dDJkIiwiZ2xvYmFsQWxwaGEiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsInJlY3QiLCJjbG9zZVBhdGgiLCJmaWxsIiwic3Ryb2tlIiwidGV4dEJhc2VsaW5lIiwidGV4dCIsInNpemUiLCJsZWFkaW5nIiwibGV0dGVyU3BhY2luZyIsImRlZmF1bHRGb250IiwiRm9udCIsInN5bWJvbFNpemUiLCJhbGlnblZhbHVlIiwiZm9udCIsInN5bWJvbCIsInN5bWJvbE5leHQiLCJhZHZhbmNlIiwiZmlsbFRleHQiLCJsaW5lcyIsImxpbmUiLCJzeW1ib2xzIiwiZmlyc3QiLCJsaW5lSGVpZ2h0IiwiaiIsImFsaWduU3ltYm9sVmFsdWUiLCJzeW1ib2xGb250IiwiVGV4dEV4dGVuc2lvbiIsIlRFWFQiLCJFTSIsImZvbnRzIiwiZ2V0U3R5bGUiLCJuYW1lIiwicmVwbGFjZSIsInRvU3RyaW5nIiwibWVhc3VyZVRleHQiLCJnZXRDaGFyV2lkdGgiLCJjaGFyIiwid2lkdGhzIiwiZ2V0S2VybmluZyIsInNlY29uZCIsInBhaXIiLCJrZXJuaW5nIiwia2VybmluZ3MiLCJ3aWR0aFNlY29uZCIsIndpZHRoVG90YWwiLCJnZXRBZHZhbmNlIiwiZ2V0Rm9udCIsImJvbGQiLCJpdGFsaWMiLCJ1bmRlcmxpbmUiLCJhbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJjb21iaW5lIiwiZGVmYXVsdEZvcm1hdCIsImdldEFsaWduVmFsdWUiLCJnZXRWZXJ0aWNhbEFsaWduVmFsdWUiLCJUZXh0TGluZSIsImNyZWF0ZSIsImFkZCIsIm1heCIsImNvcnJlY3RXaWR0aCIsImxhc3QiLCJjb3JyZWN0SGVpZ2h0IiwiZ2V0U3ltYm9scyIsInN5bWJvbEZvcm1hdCIsImJsb2NrIiwiZ2V0TGluZXMiLCJ3b3JkV3JhcCIsIm11bHRpbGluZSIsIndvcmQiLCJnZXRNZXRyaWNzIiwiZ2V0U2ltcGxlTWV0cmljcyIsImxpbmVXaWR0aCIsImdldFNpbXBsZVdpZHRoIiwiaW5kZXgiLCJnZXRUZXh0IiwiaXNBdXRvU2l6ZSIsImlzU2ltcGxlIiwiaXNNdWx0aWxpbmUiLCJjYWxjdWxhdGVCb3VuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTyxJQUFNQSxZQUFiO0FBQUE7O0FBQUE7O0FBQ0ksMEJBQXlCO0FBQUE7O0FBQUEsUUFBYkMsTUFBYSx1RUFBSixFQUFJOztBQUFBOztBQUNyQkEsVUFBTSxDQUFDQyxRQUFQLHVCQUFrQkQsTUFBTSxDQUFDQyxRQUF6QiwrREFBcUNDLHFEQUFyQztBQURxQiw2QkFFZkYsTUFGZTtBQUd4Qjs7QUFKTDtBQUFBLEVBQWtDRyw4Q0FBbEMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBLElBQU1DLE1BQU0sR0FBR0MsbURBQUEsRUFBZjtBQUNBLElBQU1DLE1BQU0sR0FBR0QsbURBQUEsRUFBZjtBQUNPLElBQUlFLGNBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxjQUFWLEVBQTBCO0FBQ3ZCLFdBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCQyxLQUE3QixFQUFvQ0MsRUFBcEMsRUFBd0M7QUFDcEMsUUFBSUMsQ0FBQyxHQUFHSCxLQUFLLElBQUksRUFBVCxHQUFjLElBQXRCO0FBQ0EsUUFBSUksQ0FBQyxHQUFHSixLQUFLLElBQUksQ0FBVCxHQUFhLElBQXJCO0FBQ0EsUUFBSUssQ0FBQyxHQUFHTCxLQUFLLEdBQUcsSUFBaEI7QUFDQSxRQUFJTSxDQUFDLEdBQUdMLEtBQUssR0FBRyxJQUFoQjs7QUFDQSxRQUFJLENBQUNNLDhEQUFBLENBQXVCTCxFQUF2QixDQUFMLEVBQWlDO0FBQzdCQyxPQUFDLEdBQUlBLENBQUMsR0FBR0QsRUFBRSxDQUFDTSxhQUFQLEdBQXVCTixFQUFFLENBQUNPLFNBQTNCLEdBQXdDLElBQTVDO0FBQ0FMLE9BQUMsR0FBSUEsQ0FBQyxHQUFHRixFQUFFLENBQUNRLGVBQVAsR0FBeUJSLEVBQUUsQ0FBQ1MsV0FBN0IsR0FBNEMsSUFBaEQ7QUFDQU4sT0FBQyxHQUFJQSxDQUFDLEdBQUdILEVBQUUsQ0FBQ1UsY0FBUCxHQUF3QlYsRUFBRSxDQUFDVyxVQUE1QixHQUEwQyxJQUE5QztBQUNBUCxPQUFDLEdBQUlBLENBQUMsR0FBR0osRUFBRSxDQUFDWSxlQUFQLEdBQXlCWixFQUFFLENBQUNhLFdBQTdCLEdBQTRDLElBQWhEO0FBQ0g7O0FBQ0QsUUFBSVQsQ0FBQyxHQUFHLElBQVIsRUFBYztBQUNWLDRCQUFlSCxDQUFmLGVBQXFCQyxDQUFyQixlQUEyQkMsQ0FBM0IsZUFBaUNDLENBQUMsR0FBRyxJQUFyQztBQUNIOztBQUNELHlCQUFjSCxDQUFkLGVBQW9CQyxDQUFwQixlQUEwQkMsQ0FBMUI7QUFDSDs7QUFDRFAsZ0JBQWMsQ0FBQ0MsWUFBZixHQUE4QkEsWUFBOUI7O0FBQ0EsV0FBU2lCLGlCQUFULENBQTJCQyxPQUEzQixFQUFvQ0MsTUFBcEMsRUFBNENDLE1BQTVDLEVBQW9EQyxNQUFwRCxFQUE0REMsY0FBNUQsRUFBNEU7QUFDeEUsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixNQUFNLENBQUNLLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLFVBQU1FLEdBQUcsR0FBR04sTUFBTSxDQUFDSSxDQUFELENBQWxCO0FBQ0EsVUFBTXJCLEtBQUssR0FBR2tCLE1BQU0sQ0FBQ0csQ0FBRCxDQUFwQjtBQUNBLFVBQUlHLEtBQUssR0FBR0wsTUFBTSxDQUFDRSxDQUFELENBQU4sR0FBWSxJQUF4QjtBQUNBLFVBQUlHLEtBQUssR0FBRyxDQUFaLEVBQ0lBLEtBQUssR0FBRyxDQUFSO0FBQ0osVUFBSUEsS0FBSyxHQUFHLENBQVosRUFDSUEsS0FBSyxHQUFHLENBQVI7QUFDSlIsYUFBTyxDQUFDUyxZQUFSLENBQXFCRCxLQUFyQixFQUE0QjFCLFlBQVksQ0FBQ3lCLEdBQUQsRUFBTXZCLEtBQU4sRUFBYW9CLGNBQWIsQ0FBeEM7QUFDSDtBQUNKOztBQUNEdkIsZ0JBQWMsQ0FBQ2tCLGlCQUFmLEdBQW1DQSxpQkFBbkM7O0FBQ0EsV0FBU1cscUJBQVQsQ0FBK0JDLE1BQS9CLEVBQXVDVixNQUF2QyxFQUErQ0MsTUFBL0MsRUFBdURDLE1BQXZELEVBQStEQyxjQUEvRCxFQUErRVEsT0FBL0UsRUFBd0Y7QUFDcEZsQyxVQUFNLENBQUNtQyxDQUFQLEdBQVcsTUFBWDtBQUNBbkMsVUFBTSxDQUFDb0MsQ0FBUCxHQUFXLENBQVg7QUFDQUMsaUVBQUEsQ0FBc0JKLE1BQXRCLEVBQThCakMsTUFBOUIsRUFBc0NBLE1BQXRDO0FBQ0EsUUFBTXNCLE9BQU8sR0FBR1ksT0FBTyxDQUFDSSxvQkFBUixDQUE2QkwsTUFBTSxDQUFDTSxFQUFwQyxFQUF3Q04sTUFBTSxDQUFDTyxFQUEvQyxFQUFtRCxDQUFuRCxFQUFzRFAsTUFBTSxDQUFDTSxFQUE3RCxFQUFpRU4sTUFBTSxDQUFDTyxFQUF4RSxFQUE0RUMsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBQzFDLE1BQU0sQ0FBQ21DLENBQVAsR0FBV0YsTUFBTSxDQUFDTSxFQUFuQixJQUF5QixDQUFsQyxDQUE1RSxDQUFoQjtBQUNBbEIscUJBQWlCLENBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFrQkMsTUFBbEIsRUFBMEJDLE1BQTFCLEVBQWtDQyxjQUFsQyxDQUFqQjtBQUNBLFdBQU9KLE9BQVA7QUFDSDs7QUFDRG5CLGdCQUFjLENBQUM2QixxQkFBZixHQUF1Q0EscUJBQXZDOztBQUNBLFdBQVNXLHFCQUFULENBQStCVixNQUEvQixFQUF1Q1YsTUFBdkMsRUFBK0NDLE1BQS9DLEVBQXVEQyxNQUF2RCxFQUErREMsY0FBL0QsRUFBK0VRLE9BQS9FLEVBQXdGO0FBQ3BGbEMsVUFBTSxDQUFDbUMsQ0FBUCxHQUFXLENBQUMsS0FBWjtBQUNBbkMsVUFBTSxDQUFDb0MsQ0FBUCxHQUFXLENBQVg7QUFDQWxDLFVBQU0sQ0FBQ2lDLENBQVAsR0FBVyxLQUFYO0FBQ0FqQyxVQUFNLENBQUNrQyxDQUFQLEdBQVcsQ0FBWDtBQUNBQyxpRUFBQSxDQUFzQkosTUFBdEIsRUFBOEJqQyxNQUE5QixFQUFzQ0EsTUFBdEM7QUFDQXFDLGlFQUFBLENBQXNCSixNQUF0QixFQUE4Qi9CLE1BQTlCLEVBQXNDQSxNQUF0QztBQUNBLFFBQU1vQixPQUFPLEdBQUdZLE9BQU8sQ0FBQ1Usb0JBQVIsQ0FBNkI1QyxNQUFNLENBQUNtQyxDQUFwQyxFQUF1Q25DLE1BQU0sQ0FBQ29DLENBQTlDLEVBQWlEbEMsTUFBTSxDQUFDaUMsQ0FBeEQsRUFBMkRqQyxNQUFNLENBQUNrQyxDQUFsRSxDQUFoQjtBQUNBZixxQkFBaUIsQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQWtCQyxNQUFsQixFQUEwQkMsTUFBMUIsRUFBa0NDLGNBQWxDLENBQWpCO0FBQ0EsV0FBT0osT0FBUDtBQUNIOztBQUNEbkIsZ0JBQWMsQ0FBQ3dDLHFCQUFmLEdBQXVDQSxxQkFBdkM7O0FBQ0EsV0FBU0UsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEJDLE1BQTlCLEVBQXNDYixPQUF0QyxFQUErQztBQUMzQyxRQUFNWixPQUFPLEdBQUdZLE9BQU8sQ0FBQ2MsYUFBUixDQUFzQkYsS0FBdEIsRUFBNkJDLE1BQU0sR0FBRyxRQUFILEdBQWMsTUFBakQsQ0FBaEI7O0FBQ0EsUUFBSXpCLE9BQUosRUFBYTtBQUNULGFBQU9BLE9BQVA7QUFDSDs7QUFDRCxXQUFPLEVBQVA7QUFDSDs7QUFDRG5CLGdCQUFjLENBQUMwQyxhQUFmLEdBQStCQSxhQUEvQjtBQUNILENBNURELEVBNERHMUMsY0FBYyxLQUFLQSxjQUFjLEdBQUcsRUFBdEIsQ0E1RGpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ08sSUFBTUwsY0FBYjtBQUFBOztBQUFBOztBQUNJLDRCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsK0JBQVNtRCxTQUFUO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsQ0FBQyxNQUFLSCxJQUFMLENBQVVJLFVBQVYsQ0FBcUIsSUFBckIsQ0FBRCxDQUFoQjtBQUNBLFVBQUtDLGNBQUwsR0FBc0IsRUFBdEI7QUFKVTtBQUtiOztBQU5MO0FBQUE7QUFBQSxXQU9JLHNCQUFhO0FBQ1QsYUFBTyxLQUFLRixRQUFMLENBQWMsS0FBS0EsUUFBTCxDQUFjekIsTUFBZCxHQUF1QixDQUFyQyxDQUFQO0FBQ0g7QUFUTDtBQUFBO0FBQUEsV0FVSSxxQkFBWU0sT0FBWixFQUFxQjtBQUNqQixXQUFLbUIsUUFBTCxDQUFjRyxJQUFkLENBQW1CdEIsT0FBbkI7QUFDSDtBQVpMO0FBQUE7QUFBQSxXQWFJLDBCQUFpQjtBQUNiLFVBQUksS0FBS21CLFFBQUwsQ0FBY3pCLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUIsYUFBS3lCLFFBQUwsQ0FBY0ksR0FBZDtBQUNILE9BRkQsTUFHSztBQUNELGFBQUtDLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkMsT0FBbEIsQ0FBMEIsZ0NBQTFCO0FBQ0g7QUFDSjtBQXBCTDtBQUFBO0FBQUEsV0FxQkksK0JBQXNCO0FBQ2xCLFVBQUkxQixPQUFKOztBQUNBLFVBQUksS0FBS3FCLGNBQUwsQ0FBb0IzQixNQUF4QixFQUFnQztBQUM1Qk0sZUFBTyxHQUFHLEtBQUtxQixjQUFMLENBQW9CRSxHQUFwQixFQUFWO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsWUFBTUksTUFBTSxHQUFHVixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBbEIsZUFBTyxHQUFHMkIsTUFBTSxDQUFDUCxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFDSDs7QUFSaUIsdUJBU1EsS0FBS0osSUFUYjtBQUFBLFVBU1ZZLEtBVFUsY0FTVkEsS0FUVTtBQUFBLFVBU0hDLE1BVEcsY0FTSEEsTUFURzs7QUFVbEIsVUFBSTdCLE9BQU8sQ0FBQzJCLE1BQVIsQ0FBZUMsS0FBZixLQUF5QkEsS0FBN0IsRUFBb0M7QUFDaEM1QixlQUFPLENBQUMyQixNQUFSLENBQWVDLEtBQWYsR0FBdUJBLEtBQXZCO0FBQ0g7O0FBQ0QsVUFBSTVCLE9BQU8sQ0FBQzJCLE1BQVIsQ0FBZUUsTUFBZixLQUEwQkEsTUFBOUIsRUFBc0M7QUFDbEM3QixlQUFPLENBQUMyQixNQUFSLENBQWVFLE1BQWYsR0FBd0JBLE1BQXhCO0FBQ0g7O0FBQ0QsYUFBTzdCLE9BQVA7QUFDSDtBQXRDTDtBQUFBO0FBQUEsV0F1Q0ksOEJBQXFCQSxPQUFyQixFQUE4QjtBQUMxQixXQUFLcUIsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUJ0QixPQUF6QjtBQUNIO0FBekNMO0FBQUE7QUFBQSxXQTBDSSxpQkFBUTtBQUNKLFdBQUs4QixLQUFMO0FBQ0EsV0FBS0MsVUFBTDtBQUNIO0FBN0NMO0FBQUE7QUFBQSxXQThDSSxpQkFBUTtBQUFBLFVBQ0lmLElBREosR0FDYSxJQURiLENBQ0lBLElBREo7QUFFSixVQUFNaEIsT0FBTyxHQUFHLEtBQUtvQixVQUFMLEVBQWhCO0FBQ0FwQixhQUFPLENBQUNnQyxZQUFSO0FBQ0FoQyxhQUFPLENBQUNpQyxTQUFSLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCakIsSUFBSSxDQUFDWSxLQUE3QixFQUFvQ1osSUFBSSxDQUFDYSxNQUF6QztBQUNIO0FBbkRMO0FBQUE7QUFBQSxXQW9ESSxzQkFBYTtBQUNULFVBQU1ELEtBQUssR0FBRyxLQUFLSixNQUFMLENBQVlVLE1BQVosQ0FBbUJDLFFBQW5CLEVBQWQ7QUFDQSxVQUFNTixNQUFNLEdBQUcsS0FBS0wsTUFBTCxDQUFZVSxNQUFaLENBQW1CRSxTQUFuQixFQUFmO0FBQ0EsVUFBTUMsVUFBVSxHQUFHLEtBQUtiLE1BQUwsQ0FBWVUsTUFBWixDQUFtQkksYUFBbkIsRUFBbkI7QUFDQSxVQUFNQyxTQUFTLEdBQUdoQyxJQUFJLENBQUNpQyxLQUFMLENBQVdaLEtBQUssR0FBR1MsVUFBbkIsQ0FBbEI7QUFDQSxVQUFNSSxVQUFVLEdBQUdsQyxJQUFJLENBQUNpQyxLQUFMLENBQVdYLE1BQU0sR0FBR1EsVUFBcEIsQ0FBbkI7QUFMUyxVQU1EckIsSUFOQyxHQU1RLElBTlIsQ0FNREEsSUFOQzs7QUFPVCxVQUFJQSxJQUFJLENBQUNZLEtBQUwsS0FBZVcsU0FBZixJQUE0QnZCLElBQUksQ0FBQ2EsTUFBTCxLQUFnQlksVUFBaEQsRUFBNEQ7QUFDeER6QixZQUFJLENBQUNZLEtBQUwsR0FBYVcsU0FBYjtBQUNBdkIsWUFBSSxDQUFDYSxNQUFMLEdBQWNZLFVBQWQ7QUFDQXpCLFlBQUksQ0FBQzBCLEtBQUwsQ0FBV2QsS0FBWCxhQUFzQkEsS0FBdEI7QUFDQVosWUFBSSxDQUFDMEIsS0FBTCxDQUFXYixNQUFYLGFBQXVCQSxNQUF2QjtBQUNIO0FBQ0o7QUFqRUw7O0FBQUE7QUFBQSxFQUFvQ2xFLGdEQUFwQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRE8sSUFBTWdGLFNBQVMsR0FBRyxXQUFsQjtBQUNBLElBQUlDLFNBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxTQUFWLEVBQXFCO0FBQ2xCLFdBQVNDLFdBQVQsQ0FBcUJDLFNBQXJCLEVBQWdDO0FBQUEsUUFDcEJDLFFBRG9CLEdBQ1BELFNBRE8sQ0FDcEJDLFFBRG9COztBQUU1QixRQUFJQSxRQUFKLEVBQWM7QUFDVixVQUFJQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsUUFBZCxDQUFKLEVBQTZCO0FBQ3pCLGVBQU9BLFFBQVEsQ0FBQ3JELE1BQWhCO0FBQ0g7O0FBQ0QsVUFBSXFELFFBQVEsQ0FBQ0csSUFBYixFQUFtQjtBQUNmLGVBQU8sQ0FBUDtBQUNIOztBQUNELFVBQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlKLFFBQVosQ0FBYjtBQUNBLGFBQU9JLElBQUksQ0FBQ3pELE1BQVo7QUFDSDs7QUFDRCxXQUFPLENBQVA7QUFDSDs7QUFDRGtELFdBQVMsQ0FBQ0MsV0FBVixHQUF3QkEsV0FBeEI7QUFDSCxDQWhCRCxFQWdCR0QsU0FBUyxLQUFLQSxTQUFTLEdBQUcsRUFBakIsQ0FoQlo7O0FBaUJPLElBQUlTLGtCQUFKOztBQUNQLENBQUMsVUFBVUEsa0JBQVYsRUFBOEI7QUFDM0IsV0FBU0MsTUFBVCxDQUFnQlIsU0FBaEIsRUFBMkJ0QixNQUEzQixFQUFtQztBQUFBLFFBQ3ZCdUIsUUFEdUIsR0FDVkQsU0FEVSxDQUN2QkMsUUFEdUI7QUFBQSxRQUV2QlEsUUFGdUIsR0FFVi9CLE1BRlUsQ0FFdkIrQixRQUZ1Qjs7QUFHL0IsUUFBSVIsUUFBSixFQUFjO0FBQ1YsVUFBTS9DLE9BQU8sR0FBR3VELFFBQVEsQ0FBQ25DLFVBQVQsRUFBaEI7QUFDQW1DLGNBQVEsQ0FBQ0MsS0FBVDs7QUFDQSxVQUFJUixLQUFLLENBQUNDLE9BQU4sQ0FBY0YsUUFBZCxDQUFKLEVBQTZCO0FBQ3pCLGFBQUssSUFBSXRELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdzRCxRQUFRLENBQUNyRCxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztBQUN0QyxjQUFNZ0UsU0FBUyxHQUFHVixRQUFRLENBQUN0RCxDQUFELENBQTFCO0FBQ0E4RCxrQkFBUSxDQUFDRyxlQUFULENBQXlCRCxTQUF6QixFQUFvQ3pELE9BQXBDO0FBQ0g7QUFDSixPQUxELE1BTUssSUFBSStDLFFBQVEsQ0FBQ0csSUFBYixFQUFtQjtBQUNwQixZQUFNTyxVQUFTLEdBQUdWLFFBQWxCO0FBQ0FRLGdCQUFRLENBQUNHLGVBQVQsQ0FBeUJELFVBQXpCLEVBQW9DekQsT0FBcEM7QUFDSCxPQUhJLE1BSUE7QUFDRCxZQUFNMkQsYUFBYSxHQUFHWixRQUF0QjtBQUNBLFlBQU1JLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlRLGFBQVosQ0FBYjs7QUFDQSxhQUFLLElBQUlsRSxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHMEQsSUFBSSxDQUFDekQsTUFBekIsRUFBaUNELEVBQUMsRUFBbEMsRUFBc0M7QUFDbEMsY0FBTWdFLFdBQVMsR0FBR0UsYUFBYSxDQUFDUixJQUFJLENBQUMxRCxFQUFELENBQUwsQ0FBL0I7QUFDQThELGtCQUFRLENBQUNHLGVBQVQsQ0FBeUJELFdBQXpCLEVBQW9DekQsT0FBcEM7QUFDSDtBQUNKOztBQUNEdUQsY0FBUSxDQUFDQyxLQUFUO0FBQ0g7QUFDSjs7QUFDREgsb0JBQWtCLENBQUNDLE1BQW5CLEdBQTRCQSxNQUE1Qjs7QUFDQSxXQUFTTSxNQUFULENBQWdCZCxTQUFoQixFQUEyQnRCLE1BQTNCLEVBQW1DO0FBQUEsUUFDdkJ1QixRQUR1QixHQUNWRCxTQURVLENBQ3ZCQyxRQUR1QjtBQUFBLFFBRXZCYyxPQUZ1QixHQUVYckMsTUFGVyxDQUV2QnFDLE9BRnVCOztBQUcvQixRQUFJZCxRQUFKLEVBQWM7QUFDVmMsYUFBTyxDQUFDTCxLQUFSOztBQUNBLFVBQUlSLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixRQUFkLENBQUosRUFBNkI7QUFDekIsYUFBSyxJQUFJdEQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3NELFFBQVEsQ0FBQ3JELE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDLGNBQU1nRSxTQUFTLEdBQUdWLFFBQVEsQ0FBQ3RELENBQUQsQ0FBMUI7QUFDQW9FLGlCQUFPLENBQUNDLGVBQVIsQ0FBd0JMLFNBQXhCO0FBQ0g7QUFDSixPQUxELE1BTUssSUFBSVYsUUFBUSxDQUFDRyxJQUFiLEVBQW1CO0FBQ3BCLFlBQU1PLFdBQVMsR0FBR1YsUUFBbEI7QUFDQWMsZUFBTyxDQUFDQyxlQUFSLENBQXdCTCxXQUF4QjtBQUNILE9BSEksTUFJQTtBQUNELFlBQU1FLGFBQWEsR0FBR1osUUFBdEI7QUFDQSxZQUFNSSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZUSxhQUFaLENBQWI7O0FBQ0EsYUFBSyxJQUFJbEUsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBRzBELElBQUksQ0FBQ3pELE1BQXpCLEVBQWlDRCxHQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLGNBQU1nRSxXQUFTLEdBQUdFLGFBQWEsQ0FBQ1IsSUFBSSxDQUFDMUQsR0FBRCxDQUFMLENBQS9CO0FBQ0FvRSxpQkFBTyxDQUFDQyxlQUFSLENBQXdCTCxXQUF4QjtBQUNIO0FBQ0o7O0FBQ0RJLGFBQU8sQ0FBQ0wsS0FBUjtBQUNIO0FBQ0o7O0FBQ0RILG9CQUFrQixDQUFDTyxNQUFuQixHQUE0QkEsTUFBNUI7O0FBQ0EsV0FBU0csT0FBVCxDQUFpQmpCLFNBQWpCLEVBQTRCdEIsTUFBNUIsRUFBb0M7QUFBQSxRQUN4QnVCLFFBRHdCLEdBQ1hELFNBRFcsQ0FDeEJDLFFBRHdCO0FBQUEsUUFFZGlCLGFBRmMsR0FFSXhDLE1BRkosQ0FFeEJ5QyxRQUZ3Qjs7QUFHaEMsUUFBSWxCLFFBQUosRUFBYztBQUNWLFVBQU0vQyxPQUFPLEdBQUdnRSxhQUFhLENBQUM1QyxVQUFkLEVBQWhCO0FBQ0E0QyxtQkFBYSxDQUFDUixLQUFkOztBQUNBLFVBQUlSLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixRQUFkLENBQUosRUFBNkI7QUFDekIsYUFBSyxJQUFJdEQsQ0FBQyxHQUFHc0QsUUFBUSxDQUFDckQsTUFBVCxHQUFrQixDQUEvQixFQUFrQ0QsQ0FBQyxJQUFJLENBQXZDLEVBQTBDQSxDQUFDLEVBQTNDLEVBQStDO0FBQzNDLGNBQU1nRSxTQUFTLEdBQUdWLFFBQVEsQ0FBQ3RELENBQUQsQ0FBMUI7QUFDQSxjQUFNeUUsTUFBTSxHQUFHRixhQUFhLENBQUNHLGlCQUFkLENBQWdDVixTQUFoQyxFQUEyQ3pELE9BQTNDLENBQWY7O0FBQ0EsY0FBSWtFLE1BQUosRUFBWTtBQUNSLG1CQUFPLElBQVA7QUFDSDtBQUNKO0FBQ0osT0FSRCxNQVNLLElBQUluQixRQUFRLENBQUNHLElBQWIsRUFBbUI7QUFDcEIsWUFBTU8sV0FBUyxHQUFHVixRQUFsQjs7QUFDQSxZQUFNbUIsT0FBTSxHQUFHRixhQUFhLENBQUNHLGlCQUFkLENBQWdDVixXQUFoQyxFQUEyQ3pELE9BQTNDLENBQWY7O0FBQ0EsWUFBSWtFLE9BQUosRUFBWTtBQUNSLGlCQUFPLElBQVA7QUFDSDtBQUNKLE9BTkksTUFPQTtBQUNELFlBQU1QLGFBQWEsR0FBR1osUUFBdEI7QUFDQSxZQUFNSSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZUSxhQUFaLENBQWI7O0FBQ0EsYUFBSyxJQUFJbEUsR0FBQyxHQUFHMEQsSUFBSSxDQUFDekQsTUFBTCxHQUFjLENBQTNCLEVBQThCRCxHQUFDLElBQUksQ0FBbkMsRUFBc0NBLEdBQUMsRUFBdkMsRUFBMkM7QUFDdkMsY0FBTWdFLFdBQVMsR0FBR0UsYUFBYSxDQUFDUixJQUFJLENBQUMxRCxHQUFELENBQUwsQ0FBL0I7O0FBQ0EsY0FBTXlFLFFBQU0sR0FBR0YsYUFBYSxDQUFDRyxpQkFBZCxDQUFnQ1YsV0FBaEMsRUFBMkN6RCxPQUEzQyxDQUFmOztBQUNBLGNBQUlrRSxRQUFKLEVBQVk7QUFDUixtQkFBTyxJQUFQO0FBQ0g7QUFDSjtBQUNKOztBQUNERixtQkFBYSxDQUFDUixLQUFkO0FBQ0g7O0FBQ0QsV0FBTyxLQUFQO0FBQ0g7O0FBQ0RILG9CQUFrQixDQUFDVSxPQUFuQixHQUE2QkEsT0FBN0I7O0FBQ0EsV0FBU0ssTUFBVCxDQUFnQnRCLFNBQWhCLEVBQTJCdEIsTUFBM0IsRUFBbUM7QUFBQSxRQUN2QnVCLFFBRHVCLEdBQ1ZELFNBRFUsQ0FDdkJDLFFBRHVCO0FBQUEsUUFFdkJzQixPQUZ1QixHQUVYN0MsTUFGVyxDQUV2QjZDLE9BRnVCOztBQUcvQixRQUFJdEIsUUFBSixFQUFjO0FBQ1YsVUFBTS9DLE9BQU8sR0FBR3FFLE9BQU8sQ0FBQ2pELFVBQVIsRUFBaEI7QUFDQWlELGFBQU8sQ0FBQ2IsS0FBUjs7QUFDQSxVQUFJUixLQUFLLENBQUNDLE9BQU4sQ0FBY0YsUUFBZCxDQUFKLEVBQTZCO0FBQ3pCLFlBQUlBLFFBQVEsQ0FBQ3JELE1BQWIsRUFBcUI7QUFDakJNLGlCQUFPLENBQUNzRSxRQUFSLEdBQW1CLENBQW5CO0FBQ0F0RSxpQkFBTyxDQUFDb0UsTUFBUixHQUFpQixJQUFqQjs7QUFDQSxlQUFLLElBQUkzRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHc0QsUUFBUSxDQUFDckQsTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7QUFDdEMsZ0JBQU1nRSxTQUFTLEdBQUdWLFFBQVEsQ0FBQ3RELENBQUQsQ0FBMUI7QUFDQTRFLG1CQUFPLENBQUNQLGVBQVIsQ0FBd0JMLFNBQXhCO0FBQ0EsZ0JBQU1jLGdCQUFnQixHQUFHRixPQUFPLENBQUNqRCxVQUFSLEVBQXpCO0FBQ0FwQixtQkFBTyxDQUFDc0UsUUFBUixJQUFvQkMsZ0JBQWdCLENBQUNELFFBQXJDOztBQUNBLGdCQUFJLENBQUNDLGdCQUFnQixDQUFDSCxNQUF0QixFQUE4QjtBQUMxQnBFLHFCQUFPLENBQUNvRSxNQUFSLEdBQWlCLEtBQWpCO0FBQ0g7QUFDSjs7QUFDRHBFLGlCQUFPLENBQUNzRSxRQUFSLElBQW9CdkIsUUFBUSxDQUFDckQsTUFBN0I7QUFDSCxTQWJELE1BY0s7QUFDRE0saUJBQU8sQ0FBQ3NFLFFBQVIsR0FBbUIsQ0FBbkI7QUFDSDtBQUNKLE9BbEJELE1BbUJLLElBQUl2QixRQUFRLENBQUNHLElBQWIsRUFBbUI7QUFDcEIsWUFBTU8sV0FBUyxHQUFHVixRQUFsQjtBQUNBc0IsZUFBTyxDQUFDUCxlQUFSLENBQXdCTCxXQUF4Qjs7QUFDQSxZQUFNYyxpQkFBZ0IsR0FBR0YsT0FBTyxDQUFDakQsVUFBUixFQUF6Qjs7QUFDQXBCLGVBQU8sQ0FBQ3NFLFFBQVIsR0FBbUJDLGlCQUFnQixDQUFDRCxRQUFwQztBQUNBdEUsZUFBTyxDQUFDb0UsTUFBUixHQUFpQkcsaUJBQWdCLENBQUNILE1BQWxDO0FBQ0gsT0FOSSxNQU9BO0FBQ0QsWUFBTVQsYUFBYSxHQUFHWixRQUF0QjtBQUNBLFlBQU1JLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlRLGFBQVosQ0FBYjs7QUFDQSxZQUFJUixJQUFJLENBQUN6RCxNQUFULEVBQWlCO0FBQ2JNLGlCQUFPLENBQUNzRSxRQUFSLEdBQW1CLENBQW5CO0FBQ0F0RSxpQkFBTyxDQUFDb0UsTUFBUixHQUFpQixJQUFqQjs7QUFDQSxlQUFLLElBQUkzRSxHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHMEQsSUFBSSxDQUFDekQsTUFBekIsRUFBaUNELEdBQUMsRUFBbEMsRUFBc0M7QUFDbEMsZ0JBQU1nRSxXQUFTLEdBQUdFLGFBQWEsQ0FBQ1IsSUFBSSxDQUFDMUQsR0FBRCxDQUFMLENBQS9CO0FBQ0E0RSxtQkFBTyxDQUFDUCxlQUFSLENBQXdCTCxXQUF4Qjs7QUFDQSxnQkFBTWMsa0JBQWdCLEdBQUdGLE9BQU8sQ0FBQ2pELFVBQVIsRUFBekI7O0FBQ0FwQixtQkFBTyxDQUFDc0UsUUFBUixJQUFvQkMsa0JBQWdCLENBQUNELFFBQXJDOztBQUNBLGdCQUFJLENBQUNDLGtCQUFnQixDQUFDSCxNQUF0QixFQUE4QjtBQUMxQnBFLHFCQUFPLENBQUNvRSxNQUFSLEdBQWlCLEtBQWpCO0FBQ0g7QUFDSjs7QUFDRHBFLGlCQUFPLENBQUNzRSxRQUFSLElBQW9CbkIsSUFBSSxDQUFDekQsTUFBekI7QUFDSCxTQWJELE1BY0s7QUFDRE0saUJBQU8sQ0FBQ3NFLFFBQVIsR0FBbUIsQ0FBbkI7QUFDQXRFLGlCQUFPLENBQUNvRSxNQUFSLEdBQWlCLElBQWpCO0FBQ0g7QUFDSjs7QUFDREMsYUFBTyxDQUFDYixLQUFSO0FBQ0g7QUFDSjs7QUFDREgsb0JBQWtCLENBQUNlLE1BQW5CLEdBQTRCQSxNQUE1Qjs7QUFDQSxXQUFTSSxJQUFULENBQWNoRCxNQUFkLEVBQXNCO0FBQ2xCQSxVQUFNLENBQUNpRCxVQUFQLENBQWtCYixNQUFsQixDQUF5QmMsR0FBekIsQ0FBNkIvQixTQUE3QixFQUF3Q2lCLE1BQXhDO0FBQ0FwQyxVQUFNLENBQUNpRCxVQUFQLENBQWtCbkIsTUFBbEIsQ0FBeUJvQixHQUF6QixDQUE2Qi9CLFNBQTdCLEVBQXdDVyxNQUF4QztBQUNBOUIsVUFBTSxDQUFDaUQsVUFBUCxDQUFrQlYsT0FBbEIsQ0FBMEJXLEdBQTFCLENBQThCL0IsU0FBOUIsRUFBeUNvQixPQUF6QztBQUNBdkMsVUFBTSxDQUFDaUQsVUFBUCxDQUFrQkwsTUFBbEIsQ0FBeUJNLEdBQXpCLENBQTZCL0IsU0FBN0IsRUFBd0N5QixNQUF4QztBQUNIOztBQUNEZixvQkFBa0IsQ0FBQ21CLElBQW5CLEdBQTBCQSxJQUExQjtBQUNILENBL0pELEVBK0pHbkIsa0JBQWtCLEtBQUtBLGtCQUFrQixHQUFHLEVBQTFCLENBL0pyQixFOzs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDTyxJQUFNc0IsTUFBTSxHQUFHLFFBQWY7QUFDQSxJQUFJQyxNQUFKOztBQUNQLENBQUMsVUFBVUEsTUFBVixFQUFrQjtBQUNmLFdBQVNDLGtCQUFULENBQTRCQyxNQUE1QixFQUFvQztBQUFBOztBQUNoQyxvQ0FBT0EsTUFBTSxDQUFDQyxlQUFkLHlFQUFpQyxDQUFqQztBQUNIOztBQUNESCxRQUFNLENBQUNDLGtCQUFQLEdBQTRCQSxrQkFBNUI7O0FBQ0EsV0FBU0csUUFBVCxDQUFrQkYsTUFBbEIsRUFBMEI7QUFBQTs7QUFDdEIsNkJBQU9BLE1BQU0sQ0FBQ1YsTUFBZCwyREFBd0IsS0FBeEI7QUFDSDs7QUFDRFEsUUFBTSxDQUFDSSxRQUFQLEdBQWtCQSxRQUFsQjs7QUFDQSxXQUFTQyxnQkFBVCxDQUEwQkgsTUFBMUIsRUFBa0M7QUFBQTs7QUFDOUIsbUNBQU9BLE1BQU0sQ0FBQ0ksWUFBZCx1RUFBOEIsSUFBOUI7QUFDSDs7QUFDRE4sUUFBTSxDQUFDSyxnQkFBUCxHQUEwQkEsZ0JBQTFCO0FBQ0gsQ0FiRCxFQWFHTCxNQUFNLEtBQUtBLE1BQU0sR0FBRyxFQUFkLENBYlQ7O0FBY08sSUFBSU8sZUFBSjs7QUFDUCxDQUFDLFVBQVVBLGVBQVYsRUFBMkI7QUFDeEIsV0FBU2YsTUFBVCxDQUFnQlUsTUFBaEIsRUFBd0J0RCxNQUF4QixFQUFnQztBQUM1QixRQUFJLENBQUNvRCxNQUFNLENBQUNLLGdCQUFQLENBQXdCSCxNQUF4QixDQUFMLEVBQXNDO0FBQ2xDO0FBQ0g7O0FBQ0R6QixxRUFBQSxDQUEwQnlCLE1BQTFCLEVBQWtDdEQsTUFBbEM7QUFDQSxRQUFNeEIsT0FBTyxHQUFHd0IsTUFBTSxDQUFDNkMsT0FBUCxDQUFlakQsVUFBZixFQUFoQjtBQUNBMEQsVUFBTSxDQUFDQyxlQUFQLEdBQXlCL0UsT0FBTyxDQUFDc0UsUUFBakM7O0FBQ0EsUUFBSXRFLE9BQU8sQ0FBQ29FLE1BQVIsSUFBa0IsQ0FBQ1UsTUFBTSxDQUFDVixNQUE5QixFQUFzQztBQUNsQ1UsWUFBTSxDQUFDVixNQUFQLEdBQWdCLElBQWhCOztBQUNBLFVBQUlVLE1BQU0sQ0FBQ00sUUFBWCxFQUFxQjtBQUNqQk4sY0FBTSxDQUFDTSxRQUFQO0FBQ0g7QUFDSjtBQUNKOztBQUNERCxpQkFBZSxDQUFDZixNQUFoQixHQUF5QkEsTUFBekI7O0FBQ0EsV0FBU0ksSUFBVCxDQUFjaEQsTUFBZCxFQUFzQjtBQUNsQkEsVUFBTSxDQUFDaUQsVUFBUCxDQUFrQmIsTUFBbEIsQ0FBeUJjLEdBQXpCLENBQTZCQyxNQUE3QixFQUFxQ3RCLGlFQUFyQztBQUNBN0IsVUFBTSxDQUFDaUQsVUFBUCxDQUFrQm5CLE1BQWxCLENBQXlCb0IsR0FBekIsQ0FBNkJDLE1BQTdCLEVBQXFDdEIsaUVBQXJDO0FBQ0E3QixVQUFNLENBQUNpRCxVQUFQLENBQWtCVixPQUFsQixDQUEwQlcsR0FBMUIsQ0FBOEJDLE1BQTlCLEVBQXNDdEIsa0VBQXRDO0FBQ0E3QixVQUFNLENBQUNpRCxVQUFQLENBQWtCTCxNQUFsQixDQUF5Qk0sR0FBekIsQ0FBNkJDLE1BQTdCLEVBQXFDUCxNQUFyQztBQUNIOztBQUNEZSxpQkFBZSxDQUFDWCxJQUFoQixHQUF1QkEsSUFBdkI7QUFDSCxDQXZCRCxFQXVCR1csZUFBZSxLQUFLQSxlQUFlLEdBQUcsRUFBdkIsQ0F2QmxCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNdEgsTUFBYixHQUNJLGtCQUF5QjtBQUFBOztBQUFBLE1BQWJILE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDckIsT0FBSzhGLEtBQUwsR0FBYSxFQUFiO0FBQ0E5RixRQUFNLENBQUMySCxVQUFQLHlCQUFvQjNILE1BQU0sQ0FBQzJILFVBQTNCLG1FQUF5Q0EsNkRBQXpDO0FBQ0EzSCxRQUFNLENBQUM0SCxNQUFQLHFCQUFnQjVILE1BQU0sQ0FBQzRILE1BQXZCLDJEQUFpQ0Esb0RBQWpDO0FBQ0E1SCxRQUFNLENBQUNDLFFBQVAsdUJBQWtCRCxNQUFNLENBQUNDLFFBQXpCLCtEQUFxQ0Esd0RBQXJDO0FBQ0FELFFBQU0sQ0FBQzZILE9BQVAsc0JBQWlCN0gsTUFBTSxDQUFDNkgsT0FBeEIsNkRBQW1DQSxzREFBbkM7QUFDQTdILFFBQU0sQ0FBQzhILE9BQVAsc0JBQWlCOUgsTUFBTSxDQUFDOEgsT0FBeEIsNkRBQW1DQSxzREFBbkM7QUFDQTlILFFBQU0sQ0FBQytILFFBQVAsdUJBQWtCL0gsTUFBTSxDQUFDK0gsUUFBekIsK0RBQXFDQSx3REFBckM7QUFDQS9ILFFBQU0sQ0FBQ2dJLFFBQVAsdUJBQWtCaEksTUFBTSxDQUFDZ0ksUUFBekIsK0RBQXFDQSx3REFBckM7QUFDQWhJLFFBQU0sQ0FBQ2lJLE1BQVAscUJBQWdCakksTUFBTSxDQUFDaUksTUFBdkIsMkRBQWlDQSxvREFBakM7QUFDQWpJLFFBQU0sQ0FBQ2tJLEtBQVAsb0JBQWVsSSxNQUFNLENBQUNrSSxLQUF0Qix5REFBK0JBLGtEQUEvQjtBQUNBbEksUUFBTSxDQUFDbUksU0FBUCx3QkFBbUJuSSxNQUFNLENBQUNtSSxTQUExQixpRUFBdUNBLDBEQUF2QztBQUNBLE9BQUtwQixVQUFMLEdBQWtCLElBQUkvRyxNQUFNLENBQUMySCxVQUFYLEVBQWxCO0FBQ0EsT0FBS25ELE1BQUwsR0FBYyxJQUFJeEUsTUFBTSxDQUFDNEgsTUFBWCxFQUFkO0FBQ0EsT0FBS1EsUUFBTCxHQUFnQixJQUFJcEksTUFBTSxDQUFDQyxRQUFYLENBQW9CLElBQXBCLENBQWhCO0FBQ0EsT0FBS2tHLE9BQUwsR0FBZSxJQUFJbkcsTUFBTSxDQUFDNkgsT0FBWCxDQUFtQixJQUFuQixDQUFmO0FBQ0EsT0FBS2xCLE9BQUwsR0FBZSxJQUFJM0csTUFBTSxDQUFDOEgsT0FBWCxDQUFtQixJQUFuQixDQUFmO0FBQ0EsT0FBS2pDLFFBQUwsR0FBZ0IsSUFBSTdGLE1BQU0sQ0FBQytILFFBQVgsQ0FBb0IsSUFBcEIsQ0FBaEI7QUFDQSxPQUFLeEIsUUFBTCxHQUFnQixJQUFJdkcsTUFBTSxDQUFDZ0ksUUFBWCxDQUFvQixJQUFwQixDQUFoQjtBQUNBLE9BQUtLLE1BQUwsR0FBYyxJQUFJckksTUFBTSxDQUFDaUksTUFBWCxDQUFrQixJQUFsQixDQUFkO0FBQ0EsT0FBS2xFLEtBQUwsR0FBYSxJQUFJL0QsTUFBTSxDQUFDa0ksS0FBWCxFQUFiO0FBQ0EsT0FBS0ksU0FBTCxHQUFpQixJQUFJdEksTUFBTSxDQUFDbUksU0FBWCxDQUFxQixJQUFyQixDQUFqQjtBQUNBeEMsNEVBQUEsQ0FBd0IsSUFBeEI7QUFDQThCLHVFQUFBLENBQXFCLElBQXJCO0FBQ0gsQ0F6QkwsQzs7Ozs7Ozs7Ozs7Ozs7O0FDWk8sSUFBTWMsYUFBYixHQUNJLHVCQUFZekUsTUFBWixFQUFvQjtBQUFBOztBQUNoQixPQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDSCxDQUhMLEM7Ozs7Ozs7Ozs7Ozs7QUNBTyxJQUFJMEUsT0FBSjs7QUFDUCxDQUFDLFVBQVVBLE9BQVYsRUFBbUI7QUFDaEIsV0FBU0MsU0FBVCxDQUFtQjFDLFNBQW5CLEVBQThCO0FBQUE7O0FBQzFCLGlDQUFPQSxTQUFTLENBQUMyQyxPQUFqQixtRUFBNEIsSUFBNUI7QUFDSDs7QUFDREYsU0FBTyxDQUFDQyxTQUFSLEdBQW9CQSxTQUFwQjtBQUNILENBTEQsRUFLR0QsT0FBTyxLQUFLQSxPQUFPLEdBQUcsRUFBZixDQUxWLEU7Ozs7Ozs7Ozs7Ozs7QUNETyxJQUFJRyxLQUFKOztBQUNQLENBQUMsVUFBVUEsS0FBVixFQUFpQjtBQUNkLFdBQVNDLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjNFLEtBQXJCLEVBQTRCO0FBQUEsUUFDaEI0RSxNQURnQixHQUNMRCxLQURLLENBQ2hCQyxNQURnQjs7QUFFeEIsUUFBSUEsTUFBSixFQUFZO0FBQ1IsYUFBTyxDQUFDQSxNQUFELEdBQVU1RSxLQUFqQjtBQUNIOztBQUNELFdBQU8sQ0FBUDtBQUNIOztBQUNEeUUsT0FBSyxDQUFDQyxJQUFOLEdBQWFBLElBQWI7O0FBQ0EsV0FBU0csSUFBVCxDQUFjRixLQUFkLEVBQXFCMUUsTUFBckIsRUFBNkI7QUFBQSxRQUNqQjZFLE1BRGlCLEdBQ05ILEtBRE0sQ0FDakJHLE1BRGlCOztBQUV6QixRQUFJQSxNQUFKLEVBQVk7QUFDUixhQUFPLENBQUNBLE1BQUQsR0FBVTdFLE1BQWpCO0FBQ0g7O0FBQ0QsV0FBTyxDQUFQO0FBQ0g7O0FBQ0R3RSxPQUFLLENBQUNJLElBQU4sR0FBYUEsSUFBYjs7QUFDQSxXQUFTRSxTQUFULENBQW1CSixLQUFuQixFQUEwQjtBQUFBLFFBQ2RDLE1BRGMsR0FDS0QsS0FETCxDQUNkQyxNQURjO0FBQUEsUUFDTkUsTUFETSxHQUNLSCxLQURMLENBQ05HLE1BRE07QUFFdEIsV0FBTyxDQUFDLENBQUNGLE1BQUYsSUFBWSxDQUFDLENBQUNFLE1BQXJCO0FBQ0g7O0FBQ0RMLE9BQUssQ0FBQ00sU0FBTixHQUFrQkEsU0FBbEI7QUFDSCxDQXRCRCxFQXNCR04sS0FBSyxLQUFLQSxLQUFLLEdBQUcsRUFBYixDQXRCUixFOzs7Ozs7Ozs7Ozs7O0FDREEsSUFBTU8sV0FBVyxHQUFHO0FBQ2hCQyxhQUFXLEVBQUUsZUFERztBQUVoQkMsV0FBUyxFQUFFLGFBRks7QUFHaEJDLGFBQVcsRUFBRSxlQUhHO0FBSWhCQyxhQUFXLEVBQUUsZUFKRztBQUtoQkMsWUFBVSxFQUFFO0FBTEksQ0FBcEI7QUFPTyxJQUFJQyxPQUFKOztBQUNQLENBQUMsVUFBVUEsT0FBVixFQUFtQjtBQUNoQixXQUFTQyxhQUFULENBQXVCQyxPQUF2QixFQUFnQztBQUM1QixXQUFPLENBQUMsQ0FBQ0EsT0FBTyxDQUFDSixXQUFqQjtBQUNIOztBQUNERSxTQUFPLENBQUNDLGFBQVIsR0FBd0JBLGFBQXhCOztBQUNBLFdBQVNFLGdCQUFULENBQTBCRCxPQUExQixFQUFtQztBQUFBOztBQUMvQixvQ0FBT0EsT0FBTyxDQUFDRSxjQUFmLHlFQUFpQyxJQUFqQztBQUNIOztBQUNESixTQUFPLENBQUNHLGdCQUFSLEdBQTJCQSxnQkFBM0I7O0FBQ0EsV0FBU0UsYUFBVCxDQUF1QkgsT0FBdkIsRUFBZ0NsRSxJQUFoQyxFQUFzQ2pELENBQXRDLEVBQXlDQyxDQUF6QyxFQUE0Q3NILEVBQTVDLEVBQWdEO0FBQzVDLFFBQU1DLFdBQVcsR0FBR2IsV0FBVyxDQUFDMUQsSUFBRCxDQUEvQjs7QUFDQSxRQUFJdUUsV0FBVyxJQUFJTCxPQUFPLENBQUNLLFdBQUQsQ0FBMUIsRUFBeUM7QUFDckMsVUFBTUMsS0FBSyxHQUFHO0FBQ1Z4RSxZQUFJLEVBQUpBLElBRFU7QUFDSmpELFNBQUMsRUFBREEsQ0FESTtBQUNEQyxTQUFDLEVBQURBLENBREM7QUFDRXNILFVBQUUsRUFBRkE7QUFERixPQUFkO0FBR0FKLGFBQU8sQ0FBQ0ssV0FBRCxDQUFQLENBQXFCQyxLQUFyQjtBQUNIO0FBQ0o7O0FBQ0RSLFNBQU8sQ0FBQ0ssYUFBUixHQUF3QkEsYUFBeEI7QUFDSCxDQW5CRCxFQW1CR0wsT0FBTyxLQUFLQSxPQUFPLEdBQUcsRUFBZixDQW5CVixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JPLElBQUlTLFNBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxTQUFWLEVBQXFCO0FBQ2xCLFdBQVNDLFNBQVQsQ0FBbUJDLFNBQW5CLEVBQThCM0QsTUFBOUIsRUFBc0M7QUFBQTs7QUFBQSxRQUMxQm5FLE1BRDBCLEdBQ2Y4SCxTQURlLENBQzFCOUgsTUFEMEI7O0FBRWxDLFFBQUlBLE1BQUosRUFBWTtBQUFBOztBQUNSbUUsWUFBTSxDQUFDekYsQ0FBUCxnQkFBV3NCLE1BQU0sQ0FBQ3RCLENBQWxCLGlEQUF1QixDQUF2QjtBQUNBeUYsWUFBTSxDQUFDMUYsQ0FBUCxnQkFBV3VCLE1BQU0sQ0FBQ3ZCLENBQWxCLGlEQUF1QixDQUF2QjtBQUNBMEYsWUFBTSxDQUFDNEQsQ0FBUCxnQkFBVy9ILE1BQU0sQ0FBQytILENBQWxCLGlEQUF1QixDQUF2QjtBQUNBNUQsWUFBTSxDQUFDNkQsQ0FBUCxnQkFBV2hJLE1BQU0sQ0FBQ2dJLENBQWxCLGlEQUF1QixDQUF2QjtBQUNBN0QsWUFBTSxDQUFDN0QsRUFBUCxpQkFBWU4sTUFBTSxDQUFDTSxFQUFuQixtREFBeUIsQ0FBekI7QUFDQTZELFlBQU0sQ0FBQzVELEVBQVAsaUJBQVlQLE1BQU0sQ0FBQ08sRUFBbkIsbURBQXlCLENBQXpCO0FBQ0E7QUFDSDs7QUFWaUMsUUFXMUIwSCxRQVgwQixHQVdiSCxTQVhhLENBVzFCRyxRQVgwQjtBQVlsQyxRQUFNQyxNQUFNLGdDQUFHSixTQUFTLENBQUNJLE1BQWIsaUVBQXVCSixTQUFTLENBQUNLLEtBQWpDLHVDQUEwQyxDQUF0RDtBQUNBLFFBQU1DLE1BQU0saUNBQUdOLFNBQVMsQ0FBQ00sTUFBYixpRUFBdUJOLFNBQVMsQ0FBQ0ssS0FBakMseUNBQTBDLENBQXREO0FBQ0FoRSxVQUFNLENBQUM3RCxFQUFQLG1CQUFZd0gsU0FBUyxDQUFDNUgsQ0FBdEIsdURBQTJCLENBQTNCO0FBQ0FpRSxVQUFNLENBQUM1RCxFQUFQLG1CQUFZdUgsU0FBUyxDQUFDM0gsQ0FBdEIsdURBQTJCLENBQTNCOztBQUNBLFFBQUk4SCxRQUFKLEVBQWM7QUFDVixVQUFNSSxHQUFHLEdBQUc3SCxJQUFJLENBQUM2SCxHQUFMLENBQVNKLFFBQVQsQ0FBWjtBQUNBLFVBQU1LLEdBQUcsR0FBRzlILElBQUksQ0FBQzhILEdBQUwsQ0FBU0wsUUFBVCxDQUFaO0FBQ0E5RCxZQUFNLENBQUN6RixDQUFQLEdBQVcySixHQUFHLEdBQUdILE1BQWpCO0FBQ0EvRCxZQUFNLENBQUMxRixDQUFQLEdBQVc2SixHQUFHLEdBQUdKLE1BQWpCO0FBQ0EvRCxZQUFNLENBQUM0RCxDQUFQLEdBQVcsQ0FBQ08sR0FBRCxHQUFPRixNQUFsQjtBQUNBakUsWUFBTSxDQUFDNkQsQ0FBUCxHQUFXSyxHQUFHLEdBQUdELE1BQWpCO0FBQ0E7QUFDSDs7QUFDRGpFLFVBQU0sQ0FBQ3pGLENBQVAsR0FBV3dKLE1BQVg7QUFDQS9ELFVBQU0sQ0FBQzFGLENBQVAsR0FBVyxDQUFYO0FBQ0EwRixVQUFNLENBQUM0RCxDQUFQLEdBQVcsQ0FBWDtBQUNBNUQsVUFBTSxDQUFDNkQsQ0FBUCxHQUFXSSxNQUFYO0FBQ0g7O0FBQ0RSLFdBQVMsQ0FBQ0MsU0FBVixHQUFzQkEsU0FBdEI7O0FBQ0EsV0FBU1UsaUJBQVQsQ0FBMkJULFNBQTNCLEVBQXNDM0QsTUFBdEMsRUFBOEM7QUFBQTs7QUFBQSxRQUNsQzFFLGNBRGtDLEdBQ2ZxSSxTQURlLENBQ2xDckksY0FEa0M7O0FBRTFDLFFBQUlBLGNBQUosRUFBb0I7QUFBQTs7QUFDaEIwRSxZQUFNLENBQUNqRixlQUFQLDRCQUF5Qk8sY0FBYyxDQUFDUCxlQUF4Qyx5RUFBMkQsQ0FBM0Q7QUFDQWlGLFlBQU0sQ0FBQ3ZGLGFBQVAsNEJBQXVCYSxjQUFjLENBQUNiLGFBQXRDLHlFQUF1RCxDQUF2RDtBQUNBdUYsWUFBTSxDQUFDckYsZUFBUCw0QkFBeUJXLGNBQWMsQ0FBQ1gsZUFBeEMseUVBQTJELENBQTNEO0FBQ0FxRixZQUFNLENBQUNuRixjQUFQLDRCQUF3QlMsY0FBYyxDQUFDVCxjQUF2Qyx5RUFBeUQsQ0FBekQ7QUFDQW1GLFlBQU0sQ0FBQ2hGLFdBQVAsNkJBQXFCTSxjQUFjLENBQUNOLFdBQXBDLDJFQUFtRCxDQUFuRDtBQUNBZ0YsWUFBTSxDQUFDdEYsU0FBUCw0QkFBbUJZLGNBQWMsQ0FBQ1osU0FBbEMseUVBQStDLENBQS9DO0FBQ0FzRixZQUFNLENBQUNwRixXQUFQLDZCQUFxQlUsY0FBYyxDQUFDVixXQUFwQywyRUFBbUQsQ0FBbkQ7QUFDQW9GLFlBQU0sQ0FBQ2xGLFVBQVAsNEJBQW9CUSxjQUFjLENBQUNSLFVBQW5DLHlFQUFpRCxDQUFqRDtBQUNBO0FBQ0g7O0FBQ0QsUUFBTVosS0FBSyx1QkFBR3lKLFNBQVMsQ0FBQ3pKLEtBQWIsK0RBQXNCLENBQWpDO0FBYjBDLFFBY2xDbUssSUFka0MsR0FjekJWLFNBZHlCLENBY2xDVSxJQWRrQzs7QUFlMUMsUUFBSUEsSUFBSixFQUFVO0FBQUEsd0JBQzJCQSxJQUQzQixDQUNFcEssS0FERjtBQUFBLFVBQ0VBLEtBREYsNEJBQ1UsQ0FEVjtBQUFBLHdCQUMyQm9LLElBRDNCLENBQ2FDLEtBRGI7QUFBQSxVQUNhQSxLQURiLDRCQUNxQixDQURyQjtBQUVOLFVBQU1DLGFBQWEsR0FBRyxJQUFJRCxLQUExQjtBQUNBLFVBQU1sSyxDQUFDLEdBQUlILEtBQUssSUFBSSxFQUFWLEdBQWdCLElBQTFCO0FBQ0EsVUFBTUksQ0FBQyxHQUFJSixLQUFLLElBQUksQ0FBVixHQUFlLElBQXpCO0FBQ0EsVUFBTUssQ0FBQyxHQUFHTCxLQUFLLEdBQUcsSUFBbEI7QUFDQStGLFlBQU0sQ0FBQ2pGLGVBQVAsR0FBeUJiLEtBQXpCO0FBQ0E4RixZQUFNLENBQUN2RixhQUFQLEdBQXVCOEosYUFBdkI7QUFDQXZFLFlBQU0sQ0FBQ3JGLGVBQVAsR0FBeUI0SixhQUF6QjtBQUNBdkUsWUFBTSxDQUFDbkYsY0FBUCxHQUF3QjBKLGFBQXhCO0FBQ0F2RSxZQUFNLENBQUNoRixXQUFQLEdBQXFCLENBQXJCO0FBQ0FnRixZQUFNLENBQUN0RixTQUFQLEdBQW1CTixDQUFDLEdBQUdrSyxLQUF2QjtBQUNBdEUsWUFBTSxDQUFDcEYsV0FBUCxHQUFxQlAsQ0FBQyxHQUFHaUssS0FBekI7QUFDQXRFLFlBQU0sQ0FBQ2xGLFVBQVAsR0FBb0JSLENBQUMsR0FBR2dLLEtBQXhCO0FBQ0E7QUFDSDs7QUE5QnlDLFFBK0JwQ0UsVUEvQm9DLEdBK0JyQmIsU0EvQnFCLENBK0JwQ2EsVUEvQm9DOztBQWdDMUMsUUFBSUEsVUFBVSxLQUFLQyxTQUFuQixFQUE4QjtBQUMxQixVQUFJRCxVQUFVLEdBQUcsQ0FBakIsRUFBb0I7QUFDaEJBLGtCQUFVLEdBQUcsQ0FBYjtBQUNILE9BRkQsTUFHSyxJQUFJQSxVQUFVLEdBQUcsQ0FBQyxDQUFsQixFQUFxQjtBQUN0QkEsa0JBQVUsR0FBRyxDQUFDLENBQWQ7QUFDSDs7QUFDRCxVQUFNRSxPQUFPLEdBQUcsSUFBSXJJLElBQUksQ0FBQ0MsR0FBTCxDQUFTa0ksVUFBVCxDQUFwQjtBQUNBLFVBQUlHLE1BQU0sR0FBRyxDQUFiOztBQUNBLFVBQUlILFVBQVUsR0FBRyxDQUFqQixFQUFvQjtBQUNoQkcsY0FBTSxHQUFHSCxVQUFVLEdBQUcsR0FBdEI7QUFDSDs7QUFDRHhFLFlBQU0sQ0FBQ2pGLGVBQVAsR0FBeUJiLEtBQXpCO0FBQ0E4RixZQUFNLENBQUN2RixhQUFQLEdBQXVCaUssT0FBdkI7QUFDQTFFLFlBQU0sQ0FBQ3JGLGVBQVAsR0FBeUIrSixPQUF6QjtBQUNBMUUsWUFBTSxDQUFDbkYsY0FBUCxHQUF3QjZKLE9BQXhCO0FBQ0ExRSxZQUFNLENBQUNoRixXQUFQLEdBQXFCLENBQXJCO0FBQ0FnRixZQUFNLENBQUN0RixTQUFQLEdBQW1CaUssTUFBbkI7QUFDQTNFLFlBQU0sQ0FBQ3BGLFdBQVAsR0FBcUIrSixNQUFyQjtBQUNBM0UsWUFBTSxDQUFDbEYsVUFBUCxHQUFvQjZKLE1BQXBCO0FBQ0E7QUFDSDs7QUFDRDNFLFVBQU0sQ0FBQ2pGLGVBQVAsR0FBeUJiLEtBQXpCO0FBQ0E4RixVQUFNLENBQUN2RixhQUFQLEdBQXVCLENBQXZCO0FBQ0F1RixVQUFNLENBQUNyRixlQUFQLEdBQXlCLENBQXpCO0FBQ0FxRixVQUFNLENBQUNuRixjQUFQLEdBQXdCLENBQXhCO0FBQ0FtRixVQUFNLENBQUNoRixXQUFQLEdBQXFCLENBQXJCO0FBQ0FnRixVQUFNLENBQUN0RixTQUFQLEdBQW1CLENBQW5CO0FBQ0FzRixVQUFNLENBQUNwRixXQUFQLEdBQXFCLENBQXJCO0FBQ0FvRixVQUFNLENBQUNsRixVQUFQLEdBQW9CLENBQXBCO0FBQ0g7O0FBQ0QySSxXQUFTLENBQUNXLGlCQUFWLEdBQThCQSxpQkFBOUI7QUFDSCxDQWhHRCxFQWdHR1gsU0FBUyxLQUFLQSxTQUFTLEdBQUcsRUFBakIsQ0FoR1osRTs7Ozs7Ozs7Ozs7OztBQ0RPLElBQUltQixNQUFKOztBQUNQLENBQUMsVUFBVUEsTUFBVixFQUFrQjtBQUNmLFdBQVNDLFNBQVQsQ0FBbUJ0RixTQUFuQixFQUE4QjtBQUFBOztBQUMxQixpQ0FBT0EsU0FBUyxDQUFDdUYsT0FBakIsbUVBQTRCLElBQTVCO0FBQ0g7O0FBQ0RGLFFBQU0sQ0FBQ0MsU0FBUCxHQUFtQkEsU0FBbkI7O0FBQ0EsV0FBU25GLE1BQVQsQ0FBZ0JILFNBQWhCLEVBQTJCd0YsSUFBM0IsRUFBaUM7QUFDN0IsUUFBSXhGLFNBQVMsQ0FBQ3lGLFFBQWQsRUFBd0I7QUFDcEJ6RixlQUFTLENBQUN5RixRQUFWLENBQW1CRCxJQUFuQjtBQUNIO0FBQ0o7O0FBQ0RILFFBQU0sQ0FBQ2xGLE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0gsQ0FYRCxFQVdHa0YsTUFBTSxLQUFLQSxNQUFNLEdBQUcsRUFBZCxDQVhULEU7Ozs7Ozs7Ozs7Ozs7OztBQ0RPLElBQU16RCxVQUFiLEdBQ0ksc0JBQWM7QUFBQTs7QUFDVixPQUFLOEQsVUFBTCxHQUFrQixJQUFJQyxHQUFKLEVBQWxCO0FBQ0EsT0FBSzlGLE1BQUwsR0FBYyxJQUFJOEYsR0FBSixFQUFkO0FBQ0EsT0FBS3hGLE1BQUwsR0FBYyxJQUFJd0YsR0FBSixFQUFkO0FBQ0EsT0FBS3JGLE9BQUwsR0FBZSxJQUFJcUYsR0FBSixFQUFmO0FBQ0EsT0FBS2hGLE1BQUwsR0FBYyxJQUFJZ0YsR0FBSixFQUFkO0FBQ0gsQ0FQTCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQU8sSUFBTXhELEtBQWI7QUFDSSxtQkFBYztBQUFBOztBQUNWLFNBQUt5RCxNQUFMLEdBQWMsSUFBSUQsR0FBSixFQUFkO0FBQ0EsU0FBS0UsUUFBTCxHQUFnQixJQUFJRixHQUFKLEVBQWhCO0FBQ0EsU0FBS0osT0FBTCxHQUFlLElBQWY7QUFDSDs7QUFMTDtBQUFBO0FBQUEsV0FNSSxlQUFhO0FBQUE7O0FBQ1QsVUFBSSxDQUFDLEtBQUtBLE9BQVYsRUFBbUI7QUFDZjtBQUNIOztBQUNELGtCQUFBTyxPQUFPLEVBQUNDLEdBQVI7QUFDSDtBQVhMO0FBQUE7QUFBQSxXQVlJLGlCQUFlO0FBQ1gsVUFBSSxDQUFDLEtBQUtSLE9BQVYsRUFBbUI7QUFDZjtBQUNIOztBQUhVLHdDQUFOUyxJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFJWCxVQUFNakMsRUFBRSxHQUFHa0MsTUFBTSxDQUFDRCxJQUFELENBQWpCO0FBQ0EsVUFBSUUsS0FBSyxHQUFHLEtBQUtOLE1BQUwsQ0FBWU8sR0FBWixDQUFnQnBDLEVBQWhCLENBQVo7O0FBQ0EsVUFBSSxDQUFDbUMsS0FBTCxFQUFZO0FBQUE7O0FBQ1JBLGFBQUssR0FBRyxDQUFSOztBQUNBLHFCQUFBSixPQUFPLEVBQUNNLEtBQVIsa0JBQWlCSixJQUFqQjtBQUNIOztBQUNERSxXQUFLO0FBQ0wsV0FBS04sTUFBTCxDQUFZM0UsR0FBWixDQUFnQjhDLEVBQWhCLEVBQW9CbUMsS0FBcEI7QUFDSDtBQXhCTDtBQUFBO0FBQUEsV0F5QkksbUJBQWlCO0FBQ2IsVUFBSSxDQUFDLEtBQUtYLE9BQVYsRUFBbUI7QUFDZjtBQUNIOztBQUhZLHlDQUFOUyxJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFJYixVQUFNakMsRUFBRSxHQUFHa0MsTUFBTSxDQUFDRCxJQUFELENBQWpCO0FBQ0EsVUFBSUUsS0FBSyxHQUFHLEtBQUtMLFFBQUwsQ0FBY00sR0FBZCxDQUFrQnBDLEVBQWxCLENBQVo7O0FBQ0EsVUFBSSxDQUFDbUMsS0FBTCxFQUFZO0FBQUE7O0FBQ1JBLGFBQUssR0FBRyxDQUFSOztBQUNBLHFCQUFBSixPQUFPLEVBQUNPLElBQVIsa0JBQWdCTCxJQUFoQjtBQUNIOztBQUNERSxXQUFLO0FBQ0wsV0FBS0wsUUFBTCxDQUFjNUUsR0FBZCxDQUFrQjhDLEVBQWxCLEVBQXNCbUMsS0FBdEI7QUFDSDtBQXJDTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ08sSUFBTW5FLE9BQWI7QUFBQTs7QUFBQTs7QUFDSSxxQkFBYztBQUFBOztBQUFBOztBQUNWLCtCQUFTekUsU0FBVDtBQUNBLFVBQUt5QyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQUt1RyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsVUFBS2YsT0FBTCxHQUFlLElBQWY7QUFDQSxVQUFLN0gsUUFBTCxHQUFnQixFQUFoQjtBQUxVO0FBTWI7O0FBUEw7QUFBQTtBQUFBLFdBUUksc0JBQWE7QUFDVCxVQUFJbkIsT0FBTyxHQUFHLEtBQUttQixRQUFMLENBQWMsS0FBS3FDLEtBQW5CLENBQWQ7O0FBQ0EsVUFBSSxDQUFDeEQsT0FBTCxFQUFjO0FBQ1ZBLGVBQU8sR0FBRztBQUNOc0Usa0JBQVEsRUFBRSxDQURKO0FBRU5GLGdCQUFNLEVBQUU7QUFGRixTQUFWO0FBSUEsYUFBS2pELFFBQUwsQ0FBYyxLQUFLcUMsS0FBbkIsSUFBNEJ4RCxPQUE1QjtBQUNIOztBQUNELGFBQU9BLE9BQVA7QUFDSDtBQWxCTDtBQUFBO0FBQUEsV0FtQkkseUJBQWdCeUQsU0FBaEIsRUFBMkI7QUFDdkIsVUFBTXpELE9BQU8sR0FBRyxLQUFLb0IsVUFBTCxFQUFoQjtBQUNBcEIsYUFBTyxDQUFDc0UsUUFBUixHQUFtQixDQUFuQjtBQUNBdEUsYUFBTyxDQUFDb0UsTUFBUixHQUFpQixJQUFqQjs7QUFDQSxVQUFJLEtBQUtaLEtBQUwsR0FBYSxLQUFLaEMsTUFBTCxDQUFZZ0MsS0FBN0IsRUFBb0M7QUFDaEM7QUFDSDs7QUFDRCxVQUFNd0csT0FBTyxHQUFHLEtBQUt4SSxNQUFMLENBQVlpRCxVQUFaLENBQXVCTCxNQUF2QixDQUE4QndGLEdBQTlCLENBQWtDbkcsU0FBUyxDQUFDUCxJQUE1QyxDQUFoQjs7QUFDQSxVQUFJOEcsT0FBSixFQUFhO0FBQ1RBLGVBQU8sQ0FBQ3ZHLFNBQUQsRUFBWSxLQUFLakMsTUFBakIsQ0FBUDtBQUNIO0FBQ0o7QUE5Qkw7QUFBQTtBQUFBLFdBK0JJLGtCQUFTO0FBQ0wsVUFBSSxDQUFDLEtBQUt3SCxPQUFWLEVBQW1CO0FBQ2Y7QUFDSDs7QUFISSxVQUlHaUIsSUFKSCxHQUlZLEtBQUt6SSxNQUpqQixDQUlHeUksSUFKSDs7QUFLTCxVQUFJLENBQUNBLElBQUwsRUFBVztBQUNQO0FBQ0g7O0FBQ0QsVUFBTUMsU0FBUyxHQUFHQyxXQUFXLENBQUNDLEdBQVosRUFBbEI7QUFDQSxXQUFLNUcsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLTSxlQUFMLENBQXFCbUcsSUFBckI7QUFDQSxXQUFLRixXQUFMLEdBQW1CSSxXQUFXLENBQUNDLEdBQVosS0FBb0JGLFNBQXZDO0FBQ0g7QUEzQ0w7O0FBQUE7QUFBQSxFQUE2QmpFLHdEQUE3QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNPLElBQU10SSxRQUFiO0FBQUE7O0FBQUE7O0FBQ0ksc0JBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBU29ELFNBQVQ7QUFDQSxVQUFLQyxJQUFMLEdBQVlDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBRlU7QUFHYjs7QUFKTDtBQUFBO0FBQUEsV0FLSSxpQkFBUSxDQUNQO0FBTkw7QUFBQTtBQUFBLFdBT0ksZUFBTSxDQUNMO0FBUkw7O0FBQUE7QUFBQSxFQUE4QitFLHdEQUE5QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1QLFFBQWI7QUFBQTs7QUFBQTs7QUFDSSxzQkFBYztBQUFBOztBQUFBOztBQUNWLCtCQUFTM0UsU0FBVDtBQUNBLFVBQUt5QyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQUt3RixPQUFMLEdBQWUsSUFBZjtBQUNBLFVBQUtxQixNQUFMLEdBQWN0TSxtREFBQSxFQUFkO0FBQ0EsVUFBS3VNLEtBQUwsR0FBYXZNLG1EQUFBLEVBQWI7QUFDQSxVQUFLd00sU0FBTCxHQUFpQixDQUFqQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsYUFBbkI7QUFDQSxVQUFLckosUUFBTCxHQUFnQixFQUFoQjtBQVJVO0FBU2I7O0FBVkw7QUFBQTtBQUFBLFdBV0ksc0JBQWE7QUFDVCxVQUFJbkIsT0FBTyxHQUFHLEtBQUttQixRQUFMLENBQWMsS0FBS3FDLEtBQW5CLENBQWQ7O0FBQ0EsVUFBSSxDQUFDeEQsT0FBTCxFQUFjO0FBQ1ZBLGVBQU8sR0FBRztBQUNORCxnQkFBTSxFQUFFSSxvREFBQTtBQURGLFNBQVY7QUFHQSxhQUFLZ0IsUUFBTCxDQUFjLEtBQUtxQyxLQUFuQixJQUE0QnhELE9BQTVCO0FBQ0g7O0FBQ0QsYUFBT0EsT0FBUDtBQUNIO0FBcEJMO0FBQUE7QUFBQSxXQXFCSSxrQkFBU2tELElBQVQsRUFBZWpELENBQWYsRUFBa0JDLENBQWxCLEVBQXFCc0gsRUFBckIsRUFBeUI7QUFDckIsVUFBSSxDQUFDLEtBQUt3QixPQUFWLEVBQW1CO0FBQ2Y7QUFDSDs7QUFIb0IsVUFJYmlCLElBSmEsR0FJSixLQUFLekksTUFKRCxDQUlieUksSUFKYTs7QUFLckIsVUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUDtBQUNIOztBQUNELFdBQUtLLEtBQUwsQ0FBV3JLLENBQVgsR0FBZUEsQ0FBZjtBQUNBLFdBQUtxSyxLQUFMLENBQVdwSyxDQUFYLEdBQWVBLENBQWY7QUFDQSxXQUFLbUssTUFBTCxDQUFZcEssQ0FBWixHQUFnQkEsQ0FBaEI7QUFDQSxXQUFLb0ssTUFBTCxDQUFZbkssQ0FBWixHQUFnQkEsQ0FBaEI7QUFDQSxXQUFLcUssU0FBTCxHQUFpQi9DLEVBQWpCO0FBQ0EsV0FBS2dELFdBQUwsR0FBbUJ0SCxJQUFuQjtBQUNBLFdBQUtNLEtBQUwsR0FBYSxDQUFiO0FBQ0EsVUFBTWlILElBQUksR0FBRyxLQUFLckosVUFBTCxFQUFiO0FBQ0FqQiw2REFBQSxDQUFnQnNLLElBQUksQ0FBQzFLLE1BQXJCO0FBQ0EsV0FBS3lELEtBQUw7QUFDQSxXQUFLVyxpQkFBTCxDQUF1QjhGLElBQXZCLEVBQTZCUSxJQUE3QjtBQUNIO0FBeENMO0FBQUE7QUFBQSxXQXlDSSwyQkFBa0JoSCxTQUFsQixFQUE2QmlILE1BQTdCLEVBQXFDO0FBQ2pDLFVBQUksS0FBS2xILEtBQUwsR0FBYSxLQUFLaEMsTUFBTCxDQUFZZ0MsS0FBN0IsRUFBb0M7QUFDaEMsZUFBTyxLQUFQO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDMEMsa0VBQUEsQ0FBa0J6QyxTQUFsQixDQUFMLEVBQW1DO0FBQy9CLGVBQU8sS0FBUDtBQUNIOztBQUNELFVBQUksQ0FBQ3lELHlFQUFBLENBQXlCekQsU0FBekIsQ0FBTCxFQUEwQztBQUN0QyxlQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFNdUcsT0FBTyxHQUFHLEtBQUt4SSxNQUFMLENBQVlpRCxVQUFaLENBQXVCVixPQUF2QixDQUErQjZGLEdBQS9CLENBQW1DbkcsU0FBUyxDQUFDUCxJQUE3QyxDQUFoQjs7QUFDQSxVQUFJOEcsT0FBSixFQUFhO0FBQ1QsWUFBTWhLLE9BQU8sR0FBRyxLQUFLb0IsVUFBTCxFQUFoQjtBQUNBdUcsOEVBQUEsQ0FBb0JsRSxTQUFwQixFQUErQnpELE9BQU8sQ0FBQ0QsTUFBdkM7QUFDQUksNkRBQUEsQ0FBY3VLLE1BQU0sQ0FBQzNLLE1BQXJCLEVBQTZCQyxPQUFPLENBQUNELE1BQXJDLEVBQTZDQyxPQUFPLENBQUNELE1BQXJEO0FBQ0FJLDRFQUFBLENBQTZCSCxPQUFPLENBQUNELE1BQXJDLEVBQTZDLEtBQUtzSyxNQUFsRCxFQUEwRCxLQUFLQyxLQUEvRDtBQUpTLDBCQUtRLEtBQUtBLEtBTGI7QUFBQSxZQUtEckssQ0FMQyxlQUtEQSxDQUxDO0FBQUEsWUFLRUMsQ0FMRixlQUtFQSxDQUxGO0FBTVQsWUFBTWdFLE1BQU0sR0FBRzhGLE9BQU8sQ0FBQ3ZHLFNBQUQsRUFBWSxLQUFLakMsTUFBakIsQ0FBdEI7O0FBQ0EsWUFBSTBDLE1BQUosRUFBWTtBQUNSZ0QsZ0ZBQUEsQ0FBc0J6RCxTQUF0QixFQUFpQyxLQUFLK0csV0FBdEMsRUFBbUR2SyxDQUFuRCxFQUFzREMsQ0FBdEQsRUFBeUQsS0FBS3FLLFNBQTlEO0FBQ0g7O0FBQ0QsWUFBSSxLQUFLQyxXQUFMLEtBQXFCLGFBQXpCLEVBQXdDO0FBQ3BDLGNBQUl0RyxNQUFNLElBQUksQ0FBQ1QsU0FBUyxDQUFDdUQsV0FBekIsRUFBc0M7QUFDbENFLGtGQUFBLENBQXNCekQsU0FBdEIsRUFBaUMsYUFBakMsRUFBZ0R4RCxDQUFoRCxFQUFtREMsQ0FBbkQsRUFBc0QsS0FBS3FLLFNBQTNEO0FBQ0gsV0FGRCxNQUdLLElBQUksQ0FBQ3JHLE1BQUQsSUFBV1QsU0FBUyxDQUFDdUQsV0FBekIsRUFBc0M7QUFDdkNFLGtGQUFBLENBQXNCekQsU0FBdEIsRUFBaUMsWUFBakMsRUFBK0N4RCxDQUEvQyxFQUFrREMsQ0FBbEQsRUFBcUQsS0FBS3FLLFNBQTFEO0FBQ0g7O0FBQ0Q5RyxtQkFBUyxDQUFDdUQsV0FBVixHQUF3QjlDLE1BQXhCO0FBQ0g7O0FBQ0QsZUFBT0EsTUFBUDtBQUNIOztBQUNELGFBQU8sS0FBUDtBQUNIO0FBMUVMOztBQUFBO0FBQUEsRUFBOEIrQix3REFBOUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNUixRQUFiO0FBQUE7O0FBQUE7O0FBQ0ksc0JBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBUzFFLFNBQVQ7QUFDQSxVQUFLeUMsS0FBTCxHQUFhLENBQWI7QUFDQSxVQUFLdUcsV0FBTCxHQUFtQixDQUFuQjtBQUNBLFVBQUtmLE9BQUwsR0FBZSxJQUFmO0FBQ0EsVUFBSzdILFFBQUwsR0FBZ0IsRUFBaEI7QUFMVTtBQU1iOztBQVBMO0FBQUE7QUFBQSxXQVFJLHNCQUFhO0FBQ1QsVUFBSW5CLE9BQU8sR0FBRyxLQUFLbUIsUUFBTCxDQUFjLEtBQUtxQyxLQUFuQixDQUFkOztBQUNBLFVBQUksQ0FBQ3hELE9BQUwsRUFBYztBQUNWQSxlQUFPLEdBQUc7QUFDTkQsZ0JBQU0sRUFBRUksb0RBQUEsRUFERjtBQUVOWCx3QkFBYyxFQUFFZCw0REFBQTtBQUZWLFNBQVY7QUFJQSxhQUFLeUMsUUFBTCxDQUFjLEtBQUtxQyxLQUFuQixJQUE0QnhELE9BQTVCO0FBQ0g7O0FBQ0QsYUFBT0EsT0FBUDtBQUNIO0FBbEJMO0FBQUE7QUFBQSxXQW1CSSx5QkFBZ0J5RCxTQUFoQixFQUEyQmlILE1BQTNCLEVBQW1DO0FBQy9CLFVBQUksS0FBS2xILEtBQUwsR0FBYSxLQUFLaEMsTUFBTCxDQUFZZ0MsS0FBN0IsRUFBb0M7QUFDaEM7QUFDSDs7QUFDRCxVQUFJLENBQUMwQyxrRUFBQSxDQUFrQnpDLFNBQWxCLENBQUwsRUFBbUM7QUFDL0I7QUFDSDs7QUFDRCxVQUFNekQsT0FBTyxHQUFHLEtBQUtvQixVQUFMLEVBQWhCO0FBQ0F1Ryw0RUFBQSxDQUFvQmxFLFNBQXBCLEVBQStCekQsT0FBTyxDQUFDRCxNQUF2QztBQUNBNEgsb0ZBQUEsQ0FBNEJsRSxTQUE1QixFQUF1Q3pELE9BQU8sQ0FBQ1IsY0FBL0M7QUFDQVcsMkRBQUEsQ0FBY3VLLE1BQU0sQ0FBQzNLLE1BQXJCLEVBQTZCQyxPQUFPLENBQUNELE1BQXJDLEVBQTZDQyxPQUFPLENBQUNELE1BQXJEO0FBQ0FyQixtRUFBQSxDQUFzQmdNLE1BQU0sQ0FBQ2xMLGNBQTdCLEVBQTZDUSxPQUFPLENBQUNSLGNBQXJELEVBQXFFUSxPQUFPLENBQUNSLGNBQTdFO0FBQ0EsVUFBTXdLLE9BQU8sR0FBRyxLQUFLeEksTUFBTCxDQUFZaUQsVUFBWixDQUF1Qm5CLE1BQXZCLENBQThCc0csR0FBOUIsQ0FBa0NuRyxTQUFTLENBQUNQLElBQTVDLENBQWhCOztBQUNBLFVBQUk4RyxPQUFKLEVBQWE7QUFDVEEsZUFBTyxDQUFDdkcsU0FBRCxFQUFZLEtBQUtqQyxNQUFqQixDQUFQO0FBQ0g7QUFDSjtBQW5DTDtBQUFBO0FBQUEsV0FvQ0ksa0JBQVM7QUFDTCxVQUFJLENBQUMsS0FBS3dILE9BQVYsRUFBbUI7QUFDZjtBQUNIOztBQUhJLFVBSUdpQixJQUpILEdBSVksS0FBS3pJLE1BSmpCLENBSUd5SSxJQUpIOztBQUtMLFVBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1A7QUFDSDs7QUFDRCxVQUFNQyxTQUFTLEdBQUdDLFdBQVcsQ0FBQ0MsR0FBWixFQUFsQjtBQUNBLFdBQUs1SSxNQUFMLENBQVlzRSxRQUFaLENBQXFCNkUsS0FBckI7QUFDQSxXQUFLbkgsS0FBTCxHQUFhLENBQWI7QUFDQSxVQUFNaUgsSUFBSSxHQUFHLEtBQUtySixVQUFMLEVBQWI7QUFDQSxXQUFLb0MsS0FBTDtBQUNBckQseURBQUEsQ0FBWSxLQUFLcUIsTUFBTCxDQUFZVSxNQUFaLENBQW1CMEYsU0FBbkIsRUFBWixFQUE0QzZDLElBQUksQ0FBQzFLLE1BQWpEO0FBQ0FyQixxRUFBQSxDQUF3QitMLElBQUksQ0FBQ2pMLGNBQTdCO0FBQ0EsV0FBS2tFLGVBQUwsQ0FBcUJ1RyxJQUFyQixFQUEyQlEsSUFBM0I7QUFDQSxXQUFLakosTUFBTCxDQUFZc0UsUUFBWixDQUFxQjhFLEdBQXJCO0FBQ0EsV0FBS2IsV0FBTCxHQUFtQkksV0FBVyxDQUFDQyxHQUFaLEtBQW9CRixTQUF2QztBQUNIO0FBdERMOztBQUFBO0FBQUEsRUFBOEJqRSx3REFBOUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ08sSUFBSTRFLFFBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxRQUFWLEVBQW9CO0FBQ2pCLFdBQVNDLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQStCO0FBQzNCLFFBQUksQ0FBQ0EsUUFBTCxFQUFlO0FBQ1gsYUFBTyxDQUFQO0FBQ0g7O0FBQ0QsUUFBSUEsUUFBUSxDQUFDM0csTUFBYixFQUFxQjtBQUNqQixhQUFPLENBQVA7QUFDSDs7QUFDRCxRQUFJMkcsUUFBUSxDQUFDQyxVQUFULEdBQXNCLENBQTFCLEVBQTZCO0FBQ3pCLGFBQU9ELFFBQVEsQ0FBQ0UsV0FBVCxHQUF1QkYsUUFBUSxDQUFDQyxVQUF2QztBQUNIOztBQUNELFdBQU8sQ0FBUDtBQUNIOztBQUNESCxVQUFRLENBQUNDLFdBQVQsR0FBdUJBLFdBQXZCO0FBQ0gsQ0FkRCxFQWNHRCxRQUFRLEtBQUtBLFFBQVEsR0FBRyxFQUFoQixDQWRYOztBQWVPLElBQU1oRixTQUFiO0FBQUE7O0FBQUE7O0FBQ0ksdUJBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBUzlFLFNBQVQ7QUFDQSxVQUFLaUYsU0FBTCxHQUFpQixJQUFJb0QsR0FBSixFQUFqQjtBQUNBLFVBQUs4QixTQUFMLEdBQWlCLElBQUlDLEdBQUosRUFBakI7QUFIVTtBQUliOztBQUxMO0FBQUE7QUFBQSxXQU1JLGFBQUlDLEtBQUosRUFBVztBQUNQLFVBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1IsZUFBTyxJQUFQO0FBQ0g7O0FBQ0QsVUFBSUwsUUFBUSxHQUFHLEtBQUsvRSxTQUFMLENBQWU0RCxHQUFmLENBQW1Cd0IsS0FBbkIsQ0FBZjs7QUFDQSxVQUFJLENBQUNMLFFBQUwsRUFBZTtBQUNYQSxnQkFBUSxHQUFHLEtBQUtNLE9BQUwsQ0FBYUQsS0FBYixDQUFYO0FBQ0EsYUFBS3BGLFNBQUwsQ0FBZXRCLEdBQWYsQ0FBbUIwRyxLQUFuQixFQUEwQkwsUUFBMUI7QUFDSDs7QUFDRCxhQUFPQSxRQUFQO0FBQ0g7QUFoQkw7QUFBQTtBQUFBLFdBaUJJLGlCQUFRSyxLQUFSLEVBQWU7QUFBQSxpREFDWSxLQUFLRixTQURqQjtBQUFBOztBQUFBO0FBQ1gsNERBQXVDO0FBQUEsY0FBNUJJLFFBQTRCO0FBQ25DLGNBQU1QLFFBQVEsR0FBR08sUUFBUSxDQUFDRixLQUFELEVBQVEsS0FBSzVKLE1BQWIsQ0FBekI7O0FBQ0EsY0FBSXVKLFFBQUosRUFBYztBQUNWLG1CQUFPQSxRQUFQO0FBQ0g7QUFDSjtBQU5VO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT1gsV0FBS3ZKLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkMsT0FBbEIsa0NBQW9EMEosS0FBcEQ7QUFDQSxhQUFPLElBQVA7QUFDSDtBQTFCTDs7QUFBQTtBQUFBLEVBQStCbkYsd0RBQS9CLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ08sSUFBTVgsTUFBYjtBQUNJLG9CQUFjO0FBQUE7O0FBQ1YsU0FBSzFELEtBQUwsR0FBYSxHQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEdBQWQ7QUFDQSxTQUFLUSxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS2tKLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLeEwsTUFBTCxHQUFjSSxvREFBQSxFQUFkO0FBQ0g7O0FBUEw7QUFBQTtBQUFBLFdBUUkscUJBQVk7QUFDUixVQUFNa0MsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBbkI7QUFDQSxXQUFLdkMsTUFBTCxDQUFZdEIsQ0FBWixHQUFnQjRELFVBQWhCO0FBQ0EsV0FBS3RDLE1BQUwsQ0FBWWdJLENBQVosR0FBZ0IxRixVQUFoQjtBQUNBLGFBQU8sS0FBS3RDLE1BQVo7QUFDSDtBQWJMO0FBQUE7QUFBQSxXQWNJLG9CQUFXO0FBQ1AsYUFBTyxLQUFLd0wsVUFBTCxHQUFrQkMsTUFBTSxDQUFDQyxVQUF6QixHQUFzQyxLQUFLN0osS0FBbEQ7QUFDSDtBQWhCTDtBQUFBO0FBQUEsV0FpQkkscUJBQVk7QUFDUixhQUFPLEtBQUsySixVQUFMLEdBQWtCQyxNQUFNLENBQUNFLFdBQXpCLEdBQXVDLEtBQUs3SixNQUFuRDtBQUNIO0FBbkJMO0FBQUE7QUFBQSxXQW9CSSx5QkFBZ0I7QUFBQTs7QUFDWixhQUFPLEtBQUtRLFVBQUwsR0FBa0IsQ0FBbEIsR0FBc0IsS0FBS0EsVUFBM0IsNEJBQXdDbUosTUFBTSxDQUFDRyxnQkFBL0MseUVBQW1FLENBQTFFO0FBQ0g7QUF0Qkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRE8sSUFBTWhHLE1BQWI7QUFDSSxrQkFBWW5FLE1BQVosRUFBb0I7QUFBQTs7QUFBQTs7QUFDaEIsU0FBS29LLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUs1QyxJQUFMLEdBQVksQ0FBWjs7QUFDQSxTQUFLckYsTUFBTCxHQUFjLFVBQUNxRixJQUFELEVBQVU7QUFDcEIsVUFBSSxLQUFJLENBQUM0QyxNQUFULEVBQWlCO0FBQ2I7QUFDSDs7QUFDRCxXQUFJLENBQUNySyxNQUFMLENBQVlxQyxPQUFaLENBQW9CRCxNQUFwQixDQUEyQnFGLElBQTNCOztBQUNBLFdBQUksQ0FBQ3pILE1BQUwsQ0FBWTZDLE9BQVosQ0FBb0JULE1BQXBCOztBQUNBLFdBQUksQ0FBQ3BDLE1BQUwsQ0FBWStCLFFBQVosQ0FBcUJELE1BQXJCO0FBQ0gsS0FQRDs7QUFRQSxTQUFLd0ksV0FBTCxHQUFtQixZQUFNO0FBQ3JCLFVBQU1DLFdBQVcsR0FBRzVCLFdBQVcsQ0FBQ0MsR0FBWixFQUFwQjtBQUNBLFVBQU00QixTQUFTLEdBQUcsQ0FBQ0QsV0FBVyxHQUFHLEtBQUksQ0FBQzlDLElBQXBCLElBQTRCLElBQTlDO0FBQ0EsV0FBSSxDQUFDQSxJQUFMLEdBQVk4QyxXQUFaOztBQUNBLFdBQUksQ0FBQ25JLE1BQUwsQ0FBWW9JLFNBQVo7O0FBQ0EsV0FBSSxDQUFDQyxlQUFMO0FBQ0gsS0FORDs7QUFPQSxTQUFLekssTUFBTCxHQUFjQSxNQUFkO0FBQ0g7O0FBckJMO0FBQUE7QUFBQSxTQXNCSSxlQUFlO0FBQ1gsYUFBTyxLQUFLcUssTUFBWjtBQUNIO0FBeEJMO0FBQUE7QUFBQSxXQXlCSSxnQkFBTztBQUNILFVBQUksS0FBS0EsTUFBVCxFQUFpQjtBQUNiLGFBQUs1QyxJQUFMLEdBQVlrQixXQUFXLENBQUNDLEdBQVosRUFBWjtBQUNBLGFBQUt5QixNQUFMLEdBQWMsS0FBZDtBQUNBLGFBQUtJLGVBQUw7QUFDSDtBQUNKO0FBL0JMO0FBQUE7QUFBQSxXQWdDSSxpQkFBUTtBQUNKLFdBQUtKLE1BQUwsR0FBYyxLQUFkO0FBQ0g7QUFsQ0w7QUFBQTtBQUFBLFdBbUNJLDJCQUFrQjtBQUNkSywyQkFBcUIsQ0FBQyxLQUFLSixXQUFOLENBQXJCO0FBQ0g7QUFyQ0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNPLElBQU12RyxPQUFiO0FBQUE7O0FBQUE7O0FBQ0kscUJBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBU3hFLFNBQVQ7QUFDQSxVQUFLeUMsS0FBTCxHQUFhLENBQWI7QUFDQSxVQUFLeUYsSUFBTCxHQUFZLENBQVo7QUFDQSxVQUFLYyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsVUFBS2YsT0FBTCxHQUFlLElBQWY7QUFMVTtBQU1iOztBQVBMO0FBQUE7QUFBQSxXQVFJLGdCQUFPQyxJQUFQLEVBQWE7QUFDVCxVQUFJLENBQUMsS0FBS0QsT0FBVixFQUFtQjtBQUNmO0FBQ0g7O0FBSFEsVUFJRGlCLElBSkMsR0FJUSxLQUFLekksTUFKYixDQUlEeUksSUFKQzs7QUFLVCxVQUFJLENBQUNBLElBQUwsRUFBVztBQUNQO0FBQ0g7O0FBQ0QsV0FBS3pHLEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBS3lGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQU1pQixTQUFTLEdBQUdDLFdBQVcsQ0FBQ0MsR0FBWixFQUFsQjtBQUNBLFdBQUt0RyxlQUFMLENBQXFCbUcsSUFBckI7QUFDQSxXQUFLRixXQUFMLEdBQW1CSSxXQUFXLENBQUNDLEdBQVosS0FBb0JGLFNBQXZDO0FBQ0g7QUFyQkw7QUFBQTtBQUFBLFdBc0JJLHlCQUFnQnpHLFNBQWhCLEVBQTJCO0FBQ3ZCLFVBQUksS0FBS0QsS0FBTCxHQUFhLEtBQUtoQyxNQUFMLENBQVlnQyxLQUE3QixFQUFvQztBQUNoQztBQUNIOztBQUNELFVBQUksQ0FBQ3NGLGdFQUFBLENBQWlCckYsU0FBakIsQ0FBTCxFQUFrQztBQUM5QjtBQUNIOztBQUNELFdBQUswSSxnQkFBTCxDQUFzQjFJLFNBQXRCO0FBQ0FxRixtRUFBQSxDQUFjckYsU0FBZCxFQUF5QixLQUFLd0YsSUFBOUI7QUFDQSxVQUFNZSxPQUFPLEdBQUcsS0FBS3hJLE1BQUwsQ0FBWWlELFVBQVosQ0FBdUJiLE1BQXZCLENBQThCZ0csR0FBOUIsQ0FBa0NuRyxTQUFTLENBQUNQLElBQTVDLENBQWhCOztBQUNBLFVBQUk4RyxPQUFKLEVBQWE7QUFDVEEsZUFBTyxDQUFDdkcsU0FBRCxFQUFZLEtBQUtqQyxNQUFqQixDQUFQO0FBQ0g7QUFDSjtBQW5DTDtBQUFBO0FBQUEsV0FvQ0ksMEJBQWlCaUMsU0FBakIsRUFBNEI7QUFBQTs7QUFDeEIsV0FBS2pDLE1BQUwsQ0FBWWlELFVBQVosQ0FBdUIwRSxVQUF2QixDQUFrQ2lELE9BQWxDLENBQTBDLFVBQUNwQyxPQUFELEVBQVVxQyxRQUFWLEVBQXVCO0FBQzdELFlBQUk1SSxTQUFTLENBQUM0SSxRQUFELENBQWIsRUFBeUI7QUFDckJyQyxpQkFBTyxDQUFDdkcsU0FBRCxFQUFZLE1BQUksQ0FBQ2pDLE1BQWpCLENBQVA7QUFDSDtBQUNKLE9BSkQ7QUFLSDtBQTFDTDs7QUFBQTtBQUFBLEVBQTZCeUUsd0RBQTdCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsQkEsU0FBU3NCLGFBQVQsQ0FBdUIvRixNQUF2QixFQUErQmtHLEtBQS9CLEVBQXNDeEUsSUFBdEMsRUFBNEM7QUFBQSxNQUNoQ2xDLElBRGdDLEdBQ3ZCUSxNQUFNLENBQUNzRSxRQURnQixDQUNoQzlFLElBRGdDO0FBRXhDLE1BQU1zTCxVQUFVLEdBQUd0TCxJQUFJLENBQUN1TCxxQkFBTCxFQUFuQjtBQUNBLE1BQU10TSxDQUFDLEdBQUd5SCxLQUFLLENBQUM4RSxPQUFOLEdBQWdCRixVQUFVLENBQUNHLElBQTNCLEdBQWtDekwsSUFBSSxDQUFDMEwsVUFBakQ7QUFDQSxNQUFNeE0sQ0FBQyxHQUFHd0gsS0FBSyxDQUFDaUYsT0FBTixHQUFnQkwsVUFBVSxDQUFDTSxHQUEzQixHQUFpQzVMLElBQUksQ0FBQzZMLFNBQWhEO0FBQ0FyTCxRQUFNLENBQUN5QyxRQUFQLENBQWdCNkksUUFBaEIsQ0FBeUI1SixJQUF6QixFQUErQmpELENBQS9CLEVBQWtDQyxDQUFsQyxFQUFxQyxDQUFyQztBQUNBd0gsT0FBSyxDQUFDcUYsY0FBTjtBQUNIOztBQUNNLElBQUlDLGNBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxjQUFWLEVBQTBCO0FBQ3ZCLFdBQVN4SSxJQUFULENBQWNoRCxNQUFkLEVBQXNCO0FBQUEsUUFDVlIsSUFEVSxHQUNEUSxNQUFNLENBQUNzRSxRQUROLENBQ1Y5RSxJQURVO0FBRWxCQSxRQUFJLENBQUNpTSxnQkFBTCxDQUFzQixXQUF0QixFQUFtQyxVQUFDdkYsS0FBRCxFQUFXO0FBQzFDSCxtQkFBYSxDQUFDL0YsTUFBRCxFQUFTa0csS0FBVCxFQUFnQixhQUFoQixDQUFiO0FBQ0gsS0FGRDtBQUdBMUcsUUFBSSxDQUFDaU0sZ0JBQUwsQ0FBc0IsU0FBdEIsRUFBaUMsVUFBQ3ZGLEtBQUQsRUFBVztBQUN4Q0gsbUJBQWEsQ0FBQy9GLE1BQUQsRUFBU2tHLEtBQVQsRUFBZ0IsV0FBaEIsQ0FBYjtBQUNILEtBRkQ7QUFHQTFHLFFBQUksQ0FBQ2lNLGdCQUFMLENBQXNCLFdBQXRCLEVBQW1DLFVBQUN2RixLQUFELEVBQVc7QUFDMUNILG1CQUFhLENBQUMvRixNQUFELEVBQVNrRyxLQUFULEVBQWdCLGFBQWhCLENBQWI7QUFDSCxLQUZEO0FBR0g7O0FBQ0RzRixnQkFBYyxDQUFDeEksSUFBZixHQUFzQkEsSUFBdEI7QUFDSCxDQWRELEVBY0d3SSxjQUFjLEtBQUtBLGNBQWMsR0FBRyxFQUF0QixDQWRqQixFOzs7Ozs7Ozs7OztBQ1RPLElBQUlFLE1BQUo7O0FBQ1AsQ0FBQyxVQUFVQSxNQUFWLEVBQWtCO0FBQ2YsV0FBU0MsS0FBVCxHQUFpQjtBQUNiLFdBQU87QUFDSEMsVUFBSSxFQUFFQyxNQUFNLENBQUNDLFNBRFY7QUFFSEMsVUFBSSxFQUFFRixNQUFNLENBQUNDLFNBRlY7QUFHSEUsVUFBSSxFQUFFSCxNQUFNLENBQUNJLFNBSFY7QUFJSEMsVUFBSSxFQUFFTCxNQUFNLENBQUNJO0FBSlYsS0FBUDtBQU1IOztBQUNEUCxRQUFNLENBQUNDLEtBQVAsR0FBZUEsS0FBZjs7QUFDQSxXQUFTUSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtBQUN0QkEsVUFBTSxDQUFDUixJQUFQLEdBQWNDLE1BQU0sQ0FBQ0MsU0FBckI7QUFDQU0sVUFBTSxDQUFDTCxJQUFQLEdBQWNGLE1BQU0sQ0FBQ0MsU0FBckI7QUFDQU0sVUFBTSxDQUFDSixJQUFQLEdBQWNILE1BQU0sQ0FBQ0ksU0FBckI7QUFDQUcsVUFBTSxDQUFDRixJQUFQLEdBQWNMLE1BQU0sQ0FBQ0ksU0FBckI7QUFDSDs7QUFDRFAsUUFBTSxDQUFDUyxRQUFQLEdBQWtCQSxRQUFsQjs7QUFDQSxXQUFTRSxPQUFULENBQWlCRCxNQUFqQixFQUF5QjtBQUNyQixXQUFPQSxNQUFNLENBQUNSLElBQVAsS0FBZ0JDLE1BQU0sQ0FBQ0MsU0FBdkIsSUFDQU0sTUFBTSxDQUFDTCxJQUFQLEtBQWdCRixNQUFNLENBQUNDLFNBRHZCLElBRUFNLE1BQU0sQ0FBQ0osSUFBUCxLQUFnQkgsTUFBTSxDQUFDSSxTQUZ2QixJQUdBRyxNQUFNLENBQUNGLElBQVAsS0FBZ0JMLE1BQU0sQ0FBQ0ksU0FIOUI7QUFJSDs7QUFDRFAsUUFBTSxDQUFDVyxPQUFQLEdBQWlCQSxPQUFqQjs7QUFDQSxXQUFTQyxXQUFULENBQXFCRixNQUFyQixFQUE2QkcsU0FBN0IsRUFBd0M7QUFBQSxRQUM1QlgsSUFENEIsR0FDQVEsTUFEQSxDQUM1QlIsSUFENEI7QUFBQSxRQUN0QkcsSUFEc0IsR0FDQUssTUFEQSxDQUN0QkwsSUFEc0I7QUFBQSxRQUNoQkMsSUFEZ0IsR0FDQUksTUFEQSxDQUNoQkosSUFEZ0I7QUFBQSxRQUNWRSxJQURVLEdBQ0FFLE1BREEsQ0FDVkYsSUFEVTtBQUVwQ0ssYUFBUyxDQUFDOU4sQ0FBVixHQUFjbU4sSUFBZDtBQUNBVyxhQUFTLENBQUM3TixDQUFWLEdBQWNxTixJQUFkO0FBQ0FRLGFBQVMsQ0FBQ25NLEtBQVYsR0FBa0I0TCxJQUFJLEdBQUdKLElBQXpCO0FBQ0FXLGFBQVMsQ0FBQ2xNLE1BQVYsR0FBbUI2TCxJQUFJLEdBQUdILElBQTFCO0FBQ0g7O0FBQ0RMLFFBQU0sQ0FBQ1ksV0FBUCxHQUFxQkEsV0FBckI7O0FBQ0EsV0FBU0UsS0FBVCxDQUFlSixNQUFmLEVBQXVCM04sQ0FBdkIsRUFBMEI7QUFDdEIsUUFBSTJOLE1BQU0sQ0FBQ1IsSUFBUCxHQUFjbk4sQ0FBbEIsRUFBcUI7QUFDakIyTixZQUFNLENBQUNSLElBQVAsR0FBY25OLENBQWQ7QUFDSCxLQUZELE1BR0ssSUFBSTJOLE1BQU0sQ0FBQ0osSUFBUCxHQUFjdk4sQ0FBbEIsRUFBcUI7QUFDdEIyTixZQUFNLENBQUNKLElBQVAsR0FBY3ZOLENBQWQ7QUFDSDtBQUNKOztBQUNEaU4sUUFBTSxDQUFDYyxLQUFQLEdBQWVBLEtBQWY7O0FBQ0EsV0FBU0MsS0FBVCxDQUFlTCxNQUFmLEVBQXVCMU4sQ0FBdkIsRUFBMEI7QUFDdEIsUUFBSTBOLE1BQU0sQ0FBQ0wsSUFBUCxHQUFjck4sQ0FBbEIsRUFBcUI7QUFDakIwTixZQUFNLENBQUNMLElBQVAsR0FBY3JOLENBQWQ7QUFDSCxLQUZELE1BR0ssSUFBSTBOLE1BQU0sQ0FBQ0YsSUFBUCxHQUFjeE4sQ0FBbEIsRUFBcUI7QUFDdEIwTixZQUFNLENBQUNGLElBQVAsR0FBY3hOLENBQWQ7QUFDSDtBQUNKOztBQUNEZ04sUUFBTSxDQUFDZSxLQUFQLEdBQWVBLEtBQWY7O0FBQ0EsV0FBU0MsSUFBVCxDQUFjTixNQUFkLEVBQXNCM04sQ0FBdEIsRUFBeUJDLENBQXpCLEVBQTRCO0FBQ3hCLFFBQUkwTixNQUFNLENBQUNSLElBQVAsR0FBY25OLENBQWxCLEVBQXFCO0FBQ2pCMk4sWUFBTSxDQUFDUixJQUFQLEdBQWNuTixDQUFkO0FBQ0gsS0FGRCxNQUdLLElBQUkyTixNQUFNLENBQUNKLElBQVAsR0FBY3ZOLENBQWxCLEVBQXFCO0FBQ3RCMk4sWUFBTSxDQUFDSixJQUFQLEdBQWN2TixDQUFkO0FBQ0g7O0FBQ0QsUUFBSTJOLE1BQU0sQ0FBQ0wsSUFBUCxHQUFjck4sQ0FBbEIsRUFBcUI7QUFDakIwTixZQUFNLENBQUNMLElBQVAsR0FBY3JOLENBQWQ7QUFDSCxLQUZELE1BR0ssSUFBSTBOLE1BQU0sQ0FBQ0YsSUFBUCxHQUFjeE4sQ0FBbEIsRUFBcUI7QUFDdEIwTixZQUFNLENBQUNGLElBQVAsR0FBY3hOLENBQWQ7QUFDSDtBQUNKOztBQUNEZ04sUUFBTSxDQUFDZ0IsSUFBUCxHQUFjQSxJQUFkOztBQUNBLFdBQVNDLFNBQVQsQ0FBbUJQLE1BQW5CLEVBQTJCUSxLQUEzQixFQUFrQztBQUFBLFFBQ3RCbk8sQ0FEc0IsR0FDYm1PLEtBRGEsQ0FDdEJuTyxDQURzQjtBQUFBLFFBQ25CQyxDQURtQixHQUNia08sS0FEYSxDQUNuQmxPLENBRG1COztBQUU5QixRQUFJME4sTUFBTSxDQUFDUixJQUFQLEdBQWNuTixDQUFsQixFQUFxQjtBQUNqQjJOLFlBQU0sQ0FBQ1IsSUFBUCxHQUFjbk4sQ0FBZDtBQUNILEtBRkQsTUFHSyxJQUFJMk4sTUFBTSxDQUFDSixJQUFQLEdBQWN2TixDQUFsQixFQUFxQjtBQUN0QjJOLFlBQU0sQ0FBQ0osSUFBUCxHQUFjdk4sQ0FBZDtBQUNIOztBQUNELFFBQUkyTixNQUFNLENBQUNMLElBQVAsR0FBY3JOLENBQWxCLEVBQXFCO0FBQ2pCME4sWUFBTSxDQUFDTCxJQUFQLEdBQWNyTixDQUFkO0FBQ0gsS0FGRCxNQUdLLElBQUkwTixNQUFNLENBQUNGLElBQVAsR0FBY3hOLENBQWxCLEVBQXFCO0FBQ3RCME4sWUFBTSxDQUFDRixJQUFQLEdBQWN4TixDQUFkO0FBQ0g7QUFDSjs7QUFDRGdOLFFBQU0sQ0FBQ2lCLFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0gsQ0FqRkQsRUFpRkdqQixNQUFNLEtBQUtBLE1BQU0sR0FBRyxFQUFkLENBakZULEU7Ozs7Ozs7Ozs7Ozs7QUNETyxJQUFJeE8sY0FBSjs7QUFDUCxDQUFDLFVBQVVBLGNBQVYsRUFBMEI7QUFDdkIsV0FBU3lPLEtBQVQsR0FBaUI7QUFDYixXQUFPO0FBQ0hsTyxxQkFBZSxFQUFFLENBRGQ7QUFFSE4sbUJBQWEsRUFBRSxDQUZaO0FBR0hFLHFCQUFlLEVBQUUsQ0FIZDtBQUlIRSxvQkFBYyxFQUFFLENBSmI7QUFLSEcsaUJBQVcsRUFBRSxDQUxWO0FBTUhOLGVBQVMsRUFBRSxDQU5SO0FBT0hFLGlCQUFXLEVBQUUsQ0FQVjtBQVFIRSxnQkFBVSxFQUFFO0FBUlQsS0FBUDtBQVVIOztBQUNETixnQkFBYyxDQUFDeU8sS0FBZixHQUF1QkEsS0FBdkI7O0FBQ0EsV0FBU1UsT0FBVCxDQUFpQnhQLEVBQWpCLEVBQXFCO0FBQ2pCLFdBQU9BLEVBQUUsQ0FBQ00sYUFBSCxLQUFxQixDQUFyQixJQUNBTixFQUFFLENBQUNRLGVBQUgsS0FBdUIsQ0FEdkIsSUFFQVIsRUFBRSxDQUFDVSxjQUFILEtBQXNCLENBRnRCLElBR0FWLEVBQUUsQ0FBQ1ksZUFBSCxLQUF1QixDQUh2QixJQUlBWixFQUFFLENBQUNPLFNBQUgsS0FBaUIsQ0FKakIsSUFLQVAsRUFBRSxDQUFDUyxXQUFILEtBQW1CLENBTG5CLElBTUFULEVBQUUsQ0FBQ1csVUFBSCxLQUFrQixDQU5sQixJQU9BWCxFQUFFLENBQUNhLFdBQUgsS0FBbUIsQ0FQMUI7QUFRSDs7QUFDRFIsZ0JBQWMsQ0FBQ21QLE9BQWYsR0FBeUJBLE9BQXpCOztBQUNBLFdBQVNRLGdCQUFULENBQTBCaFEsRUFBMUIsRUFBOEI7QUFDMUIsV0FBT0EsRUFBRSxDQUFDTSxhQUFILEtBQXFCLENBQXJCLElBQ0FOLEVBQUUsQ0FBQ1EsZUFBSCxLQUF1QixDQUR2QixJQUVBUixFQUFFLENBQUNVLGNBQUgsS0FBc0IsQ0FGdEIsSUFHQVYsRUFBRSxDQUFDTyxTQUFILEtBQWlCLENBSGpCLElBSUFQLEVBQUUsQ0FBQ1MsV0FBSCxLQUFtQixDQUpuQixJQUtBVCxFQUFFLENBQUNXLFVBQUgsS0FBa0IsQ0FMbEIsSUFNQVgsRUFBRSxDQUFDYSxXQUFILEtBQW1CLENBTjFCO0FBT0g7O0FBQ0RSLGdCQUFjLENBQUMyUCxnQkFBZixHQUFrQ0EsZ0JBQWxDOztBQUNBLFdBQVNWLFFBQVQsQ0FBa0J0UCxFQUFsQixFQUFzQjtBQUNsQkEsTUFBRSxDQUFDTSxhQUFILEdBQW1CLENBQW5CO0FBQ0FOLE1BQUUsQ0FBQ1EsZUFBSCxHQUFxQixDQUFyQjtBQUNBUixNQUFFLENBQUNVLGNBQUgsR0FBb0IsQ0FBcEI7QUFDQVYsTUFBRSxDQUFDWSxlQUFILEdBQXFCLENBQXJCO0FBQ0FaLE1BQUUsQ0FBQ08sU0FBSCxHQUFlLENBQWY7QUFDQVAsTUFBRSxDQUFDUyxXQUFILEdBQWlCLENBQWpCO0FBQ0FULE1BQUUsQ0FBQ1csVUFBSCxHQUFnQixDQUFoQjtBQUNBWCxNQUFFLENBQUNhLFdBQUgsR0FBaUIsQ0FBakI7QUFDSDs7QUFDRFIsZ0JBQWMsQ0FBQ2lQLFFBQWYsR0FBMEJBLFFBQTFCOztBQUNBLFdBQVNXLElBQVQsQ0FBY0MsSUFBZCxFQUFvQkMsRUFBcEIsRUFBd0I7QUFDcEJBLE1BQUUsQ0FBQ3ZQLGVBQUgsR0FBcUJzUCxJQUFJLENBQUN0UCxlQUExQjtBQUNBdVAsTUFBRSxDQUFDN1AsYUFBSCxHQUFtQjRQLElBQUksQ0FBQzVQLGFBQXhCO0FBQ0E2UCxNQUFFLENBQUMzUCxlQUFILEdBQXFCMFAsSUFBSSxDQUFDMVAsZUFBMUI7QUFDQTJQLE1BQUUsQ0FBQ3pQLGNBQUgsR0FBb0J3UCxJQUFJLENBQUN4UCxjQUF6QjtBQUNBeVAsTUFBRSxDQUFDdFAsV0FBSCxHQUFpQnFQLElBQUksQ0FBQ3JQLFdBQXRCO0FBQ0FzUCxNQUFFLENBQUM1UCxTQUFILEdBQWUyUCxJQUFJLENBQUMzUCxTQUFwQjtBQUNBNFAsTUFBRSxDQUFDMVAsV0FBSCxHQUFpQnlQLElBQUksQ0FBQ3pQLFdBQXRCO0FBQ0EwUCxNQUFFLENBQUN4UCxVQUFILEdBQWdCdVAsSUFBSSxDQUFDdlAsVUFBckI7QUFDSDs7QUFDRE4sZ0JBQWMsQ0FBQzRQLElBQWYsR0FBc0JBLElBQXRCOztBQUNBLFdBQVNHLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCQyxHQUFyQixFQUEwQnpLLE1BQTFCLEVBQWtDO0FBQzlCLFFBQU1qRixlQUFlLEdBQUd5UCxHQUFHLENBQUN6UCxlQUFKLEdBQXNCMFAsR0FBRyxDQUFDMVAsZUFBbEQ7QUFDQSxRQUFNTixhQUFhLEdBQUcrUCxHQUFHLENBQUMvUCxhQUFKLEdBQW9CZ1EsR0FBRyxDQUFDaFEsYUFBOUM7QUFDQSxRQUFNRSxlQUFlLEdBQUc2UCxHQUFHLENBQUM3UCxlQUFKLEdBQXNCOFAsR0FBRyxDQUFDOVAsZUFBbEQ7QUFDQSxRQUFNRSxjQUFjLEdBQUcyUCxHQUFHLENBQUMzUCxjQUFKLEdBQXFCNFAsR0FBRyxDQUFDNVAsY0FBaEQ7QUFDQSxRQUFNRyxXQUFXLEdBQUd3UCxHQUFHLENBQUN6UCxlQUFKLEdBQXNCMFAsR0FBRyxDQUFDelAsV0FBMUIsR0FBd0N3UCxHQUFHLENBQUN4UCxXQUFoRTtBQUNBLFFBQU1OLFNBQVMsR0FBRzhQLEdBQUcsQ0FBQy9QLGFBQUosR0FBb0JnUSxHQUFHLENBQUMvUCxTQUF4QixHQUFvQzhQLEdBQUcsQ0FBQzlQLFNBQTFEO0FBQ0EsUUFBTUUsV0FBVyxHQUFHNFAsR0FBRyxDQUFDN1AsZUFBSixHQUFzQjhQLEdBQUcsQ0FBQzdQLFdBQTFCLEdBQXdDNFAsR0FBRyxDQUFDNVAsV0FBaEU7QUFDQSxRQUFNRSxVQUFVLEdBQUcwUCxHQUFHLENBQUMzUCxjQUFKLEdBQXFCNFAsR0FBRyxDQUFDM1AsVUFBekIsR0FBc0MwUCxHQUFHLENBQUMxUCxVQUE3RDtBQUNBa0YsVUFBTSxDQUFDakYsZUFBUCxHQUF5QkEsZUFBekI7QUFDQWlGLFVBQU0sQ0FBQ3ZGLGFBQVAsR0FBdUJBLGFBQXZCO0FBQ0F1RixVQUFNLENBQUNyRixlQUFQLEdBQXlCQSxlQUF6QjtBQUNBcUYsVUFBTSxDQUFDbkYsY0FBUCxHQUF3QkEsY0FBeEI7QUFDQW1GLFVBQU0sQ0FBQ2hGLFdBQVAsR0FBcUJBLFdBQXJCO0FBQ0FnRixVQUFNLENBQUN0RixTQUFQLEdBQW1CQSxTQUFuQjtBQUNBc0YsVUFBTSxDQUFDcEYsV0FBUCxHQUFxQkEsV0FBckI7QUFDQW9GLFVBQU0sQ0FBQ2xGLFVBQVAsR0FBb0JBLFVBQXBCO0FBQ0g7O0FBQ0ROLGdCQUFjLENBQUMrUCxNQUFmLEdBQXdCQSxNQUF4QjtBQUNILENBNUVELEVBNEVHL1AsY0FBYyxLQUFLQSxjQUFjLEdBQUcsRUFBdEIsQ0E1RWpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hPLElBQUl5QixNQUFKOztBQUNQLENBQUMsVUFBVUEsTUFBVixFQUFrQjtBQUNmLFdBQVNnTixLQUFULEdBQWlCO0FBQ2IsV0FBTztBQUNIMU8sT0FBQyxFQUFFLENBREE7QUFFSEQsT0FBQyxFQUFFLENBRkE7QUFHSHNKLE9BQUMsRUFBRSxDQUhBO0FBSUhDLE9BQUMsRUFBRSxDQUpBO0FBS0gxSCxRQUFFLEVBQUUsQ0FMRDtBQU1IQyxRQUFFLEVBQUU7QUFORCxLQUFQO0FBUUg7O0FBQ0RILFFBQU0sQ0FBQ2dOLEtBQVAsR0FBZUEsS0FBZjs7QUFDQSxXQUFTVSxPQUFULENBQWlCOU4sTUFBakIsRUFBeUI7QUFDckIsV0FBT0EsTUFBTSxDQUFDdEIsQ0FBUCxLQUFhLENBQWIsSUFDQXNCLE1BQU0sQ0FBQ3ZCLENBQVAsS0FBYSxDQURiLElBRUF1QixNQUFNLENBQUMrSCxDQUFQLEtBQWEsQ0FGYixJQUdBL0gsTUFBTSxDQUFDZ0ksQ0FBUCxLQUFhLENBSGIsSUFJQWhJLE1BQU0sQ0FBQ00sRUFBUCxLQUFjLENBSmQsSUFLQU4sTUFBTSxDQUFDTyxFQUFQLEtBQWMsQ0FMckI7QUFNSDs7QUFDREgsUUFBTSxDQUFDME4sT0FBUCxHQUFpQkEsT0FBakI7O0FBQ0EsV0FBU0YsUUFBVCxDQUFrQjVOLE1BQWxCLEVBQTBCO0FBQ3RCQSxVQUFNLENBQUN0QixDQUFQLEdBQVcsQ0FBWDtBQUNBc0IsVUFBTSxDQUFDdkIsQ0FBUCxHQUFXLENBQVg7QUFDQXVCLFVBQU0sQ0FBQytILENBQVAsR0FBVyxDQUFYO0FBQ0EvSCxVQUFNLENBQUNnSSxDQUFQLEdBQVcsQ0FBWDtBQUNBaEksVUFBTSxDQUFDTSxFQUFQLEdBQVksQ0FBWjtBQUNBTixVQUFNLENBQUNPLEVBQVAsR0FBWSxDQUFaO0FBQ0g7O0FBQ0RILFFBQU0sQ0FBQ3dOLFFBQVAsR0FBa0JBLFFBQWxCOztBQUNBLFdBQVNXLElBQVQsQ0FBY0MsSUFBZCxFQUFvQkMsRUFBcEIsRUFBd0I7QUFDcEJBLE1BQUUsQ0FBQy9QLENBQUgsR0FBTzhQLElBQUksQ0FBQzlQLENBQVo7QUFDQStQLE1BQUUsQ0FBQ2hRLENBQUgsR0FBTytQLElBQUksQ0FBQy9QLENBQVo7QUFDQWdRLE1BQUUsQ0FBQzFHLENBQUgsR0FBT3lHLElBQUksQ0FBQ3pHLENBQVo7QUFDQTBHLE1BQUUsQ0FBQ3pHLENBQUgsR0FBT3dHLElBQUksQ0FBQ3hHLENBQVo7QUFDQXlHLE1BQUUsQ0FBQ25PLEVBQUgsR0FBUWtPLElBQUksQ0FBQ2xPLEVBQWI7QUFDQW1PLE1BQUUsQ0FBQ2xPLEVBQUgsR0FBUWlPLElBQUksQ0FBQ2pPLEVBQWI7QUFDSDs7QUFDREgsUUFBTSxDQUFDbU8sSUFBUCxHQUFjQSxJQUFkOztBQUNBLFdBQVNHLE1BQVQsQ0FBZ0JHLE9BQWhCLEVBQXlCQyxPQUF6QixFQUFrQzNLLE1BQWxDLEVBQTBDO0FBQ3RDLFFBQU16RixDQUFDLEdBQUdvUSxPQUFPLENBQUNwUSxDQUFSLEdBQVltUSxPQUFPLENBQUNuUSxDQUFwQixHQUF3Qm9RLE9BQU8sQ0FBQ3JRLENBQVIsR0FBWW9RLE9BQU8sQ0FBQzlHLENBQXREO0FBQ0EsUUFBTXRKLENBQUMsR0FBR3FRLE9BQU8sQ0FBQ3BRLENBQVIsR0FBWW1RLE9BQU8sQ0FBQ3BRLENBQXBCLEdBQXdCcVEsT0FBTyxDQUFDclEsQ0FBUixHQUFZb1EsT0FBTyxDQUFDN0csQ0FBdEQ7QUFDQSxRQUFNRCxDQUFDLEdBQUcrRyxPQUFPLENBQUMvRyxDQUFSLEdBQVk4RyxPQUFPLENBQUNuUSxDQUFwQixHQUF3Qm9RLE9BQU8sQ0FBQzlHLENBQVIsR0FBWTZHLE9BQU8sQ0FBQzlHLENBQXREO0FBQ0EsUUFBTUMsQ0FBQyxHQUFHOEcsT0FBTyxDQUFDL0csQ0FBUixHQUFZOEcsT0FBTyxDQUFDcFEsQ0FBcEIsR0FBd0JxUSxPQUFPLENBQUM5RyxDQUFSLEdBQVk2RyxPQUFPLENBQUM3RyxDQUF0RDtBQUNBLFFBQU0xSCxFQUFFLEdBQUd3TyxPQUFPLENBQUN4TyxFQUFSLEdBQWF1TyxPQUFPLENBQUNuUSxDQUFyQixHQUF5Qm9RLE9BQU8sQ0FBQ3ZPLEVBQVIsR0FBYXNPLE9BQU8sQ0FBQzlHLENBQTlDLEdBQWtEOEcsT0FBTyxDQUFDdk8sRUFBckU7QUFDQSxRQUFNQyxFQUFFLEdBQUd1TyxPQUFPLENBQUN4TyxFQUFSLEdBQWF1TyxPQUFPLENBQUNwUSxDQUFyQixHQUF5QnFRLE9BQU8sQ0FBQ3ZPLEVBQVIsR0FBYXNPLE9BQU8sQ0FBQzdHLENBQTlDLEdBQWtENkcsT0FBTyxDQUFDdE8sRUFBckU7QUFDQTRELFVBQU0sQ0FBQ3pGLENBQVAsR0FBV0EsQ0FBWDtBQUNBeUYsVUFBTSxDQUFDMUYsQ0FBUCxHQUFXQSxDQUFYO0FBQ0EwRixVQUFNLENBQUM0RCxDQUFQLEdBQVdBLENBQVg7QUFDQTVELFVBQU0sQ0FBQzZELENBQVAsR0FBV0EsQ0FBWDtBQUNBN0QsVUFBTSxDQUFDN0QsRUFBUCxHQUFZQSxFQUFaO0FBQ0E2RCxVQUFNLENBQUM1RCxFQUFQLEdBQVlBLEVBQVo7QUFDSDs7QUFDREgsUUFBTSxDQUFDc08sTUFBUCxHQUFnQkEsTUFBaEI7O0FBQ0EsV0FBU0ssY0FBVCxDQUF3Qi9PLE1BQXhCLEVBQWdDO0FBQzVCLFdBQU9BLE1BQU0sQ0FBQ3RCLENBQVAsR0FBV3NCLE1BQU0sQ0FBQ2dJLENBQWxCLEdBQXNCaEksTUFBTSxDQUFDdkIsQ0FBUCxHQUFXdUIsTUFBTSxDQUFDK0gsQ0FBL0M7QUFDSDs7QUFDRDNILFFBQU0sQ0FBQzJPLGNBQVAsR0FBd0JBLGNBQXhCOztBQUNBLFdBQVNDLE1BQVQsQ0FBZ0JoUCxNQUFoQixFQUF3Qm1FLE1BQXhCLEVBQWdDO0FBQzVCLFFBQUk4SyxXQUFXLEdBQUdGLGNBQWMsQ0FBQy9PLE1BQUQsQ0FBaEM7O0FBQ0EsUUFBSWlQLFdBQVcsS0FBSyxDQUFwQixFQUF1QjtBQUNuQjlLLFlBQU0sQ0FBQ3pGLENBQVAsR0FBVyxDQUFYO0FBQ0F5RixZQUFNLENBQUMxRixDQUFQLEdBQVcsQ0FBWDtBQUNBMEYsWUFBTSxDQUFDNEQsQ0FBUCxHQUFXLENBQVg7QUFDQTVELFlBQU0sQ0FBQzZELENBQVAsR0FBVyxDQUFYO0FBQ0E3RCxZQUFNLENBQUM3RCxFQUFQLEdBQVksQ0FBQ04sTUFBTSxDQUFDTSxFQUFwQjtBQUNBNkQsWUFBTSxDQUFDNUQsRUFBUCxHQUFZLENBQUNQLE1BQU0sQ0FBQ08sRUFBcEI7QUFDSCxLQVBELE1BUUs7QUFDRDBPLGlCQUFXLEdBQUcsTUFBTUEsV0FBcEI7QUFDQTlLLFlBQU0sQ0FBQ3pGLENBQVAsR0FBV3NCLE1BQU0sQ0FBQ3RCLENBQVAsR0FBV3VRLFdBQXRCO0FBQ0E5SyxZQUFNLENBQUMxRixDQUFQLEdBQVcsQ0FBQ3VCLE1BQU0sQ0FBQ3ZCLENBQVIsR0FBWXdRLFdBQXZCO0FBQ0E5SyxZQUFNLENBQUM0RCxDQUFQLEdBQVcsQ0FBQy9ILE1BQU0sQ0FBQytILENBQVIsR0FBWWtILFdBQXZCO0FBQ0E5SyxZQUFNLENBQUM2RCxDQUFQLEdBQVdoSSxNQUFNLENBQUNnSSxDQUFQLEdBQVdpSCxXQUF0QjtBQUNBOUssWUFBTSxDQUFDN0QsRUFBUCxHQUFZLENBQUM2RCxNQUFNLENBQUN6RixDQUFSLEdBQVlzQixNQUFNLENBQUNNLEVBQW5CLEdBQXdCNkQsTUFBTSxDQUFDNEQsQ0FBUCxHQUFXL0gsTUFBTSxDQUFDTyxFQUF0RDtBQUNBNEQsWUFBTSxDQUFDNUQsRUFBUCxHQUFZLENBQUM0RCxNQUFNLENBQUMxRixDQUFSLEdBQVl1QixNQUFNLENBQUNNLEVBQW5CLEdBQXdCNkQsTUFBTSxDQUFDNkQsQ0FBUCxHQUFXaEksTUFBTSxDQUFDTyxFQUF0RDtBQUNIO0FBQ0o7O0FBQ0RILFFBQU0sQ0FBQzRPLE1BQVAsR0FBZ0JBLE1BQWhCOztBQUNBLFdBQVNFLGNBQVQsQ0FBd0JsUCxNQUF4QixFQUFnQ3FPLEtBQWhDLEVBQXVDbEssTUFBdkMsRUFBK0M7QUFBQSxRQUNuQ2pFLENBRG1DLEdBQzFCbU8sS0FEMEIsQ0FDbkNuTyxDQURtQztBQUFBLFFBQ2hDQyxDQURnQyxHQUMxQmtPLEtBRDBCLENBQ2hDbE8sQ0FEZ0M7QUFFM0NnRSxVQUFNLENBQUNqRSxDQUFQLEdBQVdBLENBQUMsR0FBR0YsTUFBTSxDQUFDdEIsQ0FBWCxHQUFleUIsQ0FBQyxHQUFHSCxNQUFNLENBQUMrSCxDQUExQixHQUE4Qi9ILE1BQU0sQ0FBQ00sRUFBaEQ7QUFDQTZELFVBQU0sQ0FBQ2hFLENBQVAsR0FBV0QsQ0FBQyxHQUFHRixNQUFNLENBQUN2QixDQUFYLEdBQWUwQixDQUFDLEdBQUdILE1BQU0sQ0FBQ2dJLENBQTFCLEdBQThCaEksTUFBTSxDQUFDTyxFQUFoRDtBQUNIOztBQUNESCxRQUFNLENBQUM4TyxjQUFQLEdBQXdCQSxjQUF4Qjs7QUFDQSxXQUFTQyxtQkFBVCxDQUE2Qm5QLE1BQTdCLEVBQXFDcU8sS0FBckMsRUFBNENsSyxNQUE1QyxFQUFvRDtBQUFBLFFBQ3hDakUsQ0FEd0MsR0FDL0JtTyxLQUQrQixDQUN4Q25PLENBRHdDO0FBQUEsUUFDckNDLENBRHFDLEdBQy9Ca08sS0FEK0IsQ0FDckNsTyxDQURxQztBQUVoRGdFLFVBQU0sQ0FBQ2pFLENBQVAsR0FBV0EsQ0FBQyxHQUFHRixNQUFNLENBQUN0QixDQUFYLEdBQWV5QixDQUFDLEdBQUdILE1BQU0sQ0FBQytILENBQXJDO0FBQ0E1RCxVQUFNLENBQUNoRSxDQUFQLEdBQVdELENBQUMsR0FBR0YsTUFBTSxDQUFDdkIsQ0FBWCxHQUFlMEIsQ0FBQyxHQUFHSCxNQUFNLENBQUNnSSxDQUFyQztBQUNIOztBQUNENUgsUUFBTSxDQUFDK08sbUJBQVAsR0FBNkJBLG1CQUE3Qjs7QUFDQSxXQUFTQyxxQkFBVCxDQUErQnBQLE1BQS9CLEVBQXVDcU8sS0FBdkMsRUFBOENsSyxNQUE5QyxFQUFzRDtBQUNsRCxRQUFJOEssV0FBVyxHQUFHRixjQUFjLENBQUMvTyxNQUFELENBQWhDOztBQUNBLFFBQUlpUCxXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFDbkI5SyxZQUFNLENBQUNqRSxDQUFQLEdBQVcsQ0FBQ0YsTUFBTSxDQUFDTSxFQUFuQjtBQUNBNkQsWUFBTSxDQUFDaEUsQ0FBUCxHQUFXLENBQUNILE1BQU0sQ0FBQ08sRUFBbkI7QUFDSCxLQUhELE1BSUs7QUFDRDBPLGlCQUFXLEdBQUcsSUFBSUEsV0FBbEI7QUFEQyxVQUVPL08sQ0FGUCxHQUVnQm1PLEtBRmhCLENBRU9uTyxDQUZQO0FBQUEsVUFFVUMsQ0FGVixHQUVnQmtPLEtBRmhCLENBRVVsTyxDQUZWO0FBR0RnRSxZQUFNLENBQUNqRSxDQUFQLEdBQVcrTyxXQUFXLElBQUlqUCxNQUFNLENBQUMrSCxDQUFQLElBQVkvSCxNQUFNLENBQUNPLEVBQVAsR0FBWUosQ0FBeEIsSUFBNkJILE1BQU0sQ0FBQ2dJLENBQVAsSUFBWTlILENBQUMsR0FBR0YsTUFBTSxDQUFDTSxFQUF2QixDQUFqQyxDQUF0QjtBQUNBNkQsWUFBTSxDQUFDaEUsQ0FBUCxHQUFXOE8sV0FBVyxJQUFJalAsTUFBTSxDQUFDdEIsQ0FBUCxJQUFZeUIsQ0FBQyxHQUFHSCxNQUFNLENBQUNPLEVBQXZCLElBQTZCUCxNQUFNLENBQUN2QixDQUFQLElBQVl1QixNQUFNLENBQUNNLEVBQVAsR0FBWUosQ0FBeEIsQ0FBakMsQ0FBdEI7QUFDSDtBQUNKOztBQUNERSxRQUFNLENBQUNnUCxxQkFBUCxHQUErQkEscUJBQS9COztBQUNBLFdBQVNDLGVBQVQsQ0FBeUJyUCxNQUF6QixFQUFpQzZOLE1BQWpDLEVBQXlDMUosTUFBekMsRUFBaUQ7QUFBQSxRQUNyQ3pGLENBRHFDLEdBQ2JzQixNQURhLENBQ3JDdEIsQ0FEcUM7QUFBQSxRQUNsQ0QsQ0FEa0MsR0FDYnVCLE1BRGEsQ0FDbEN2QixDQURrQztBQUFBLFFBQy9Cc0osQ0FEK0IsR0FDYi9ILE1BRGEsQ0FDL0IrSCxDQUQrQjtBQUFBLFFBQzVCQyxDQUQ0QixHQUNiaEksTUFEYSxDQUM1QmdJLENBRDRCO0FBQUEsUUFDekIxSCxFQUR5QixHQUNiTixNQURhLENBQ3pCTSxFQUR5QjtBQUFBLFFBQ3JCQyxFQURxQixHQUNiUCxNQURhLENBQ3JCTyxFQURxQjtBQUU3QyxRQUFNK08sRUFBRSxHQUFHekIsTUFBTSxDQUFDM04sQ0FBbEI7QUFDQSxRQUFNcVAsRUFBRSxHQUFHMUIsTUFBTSxDQUFDMU4sQ0FBbEI7QUFDQSxRQUFNcVAsRUFBRSxHQUFHRixFQUFFLEdBQUd6QixNQUFNLENBQUNoTSxLQUF2QjtBQUNBLFFBQU00TixFQUFFLEdBQUdGLEVBQUUsR0FBRzFCLE1BQU0sQ0FBQy9MLE1BQXZCO0FBQ0EsUUFBTTROLEdBQUcsR0FBR0osRUFBRSxHQUFHNVEsQ0FBTCxHQUFTNlEsRUFBRSxHQUFHeEgsQ0FBZCxHQUFrQnpILEVBQTlCO0FBQ0EsUUFBTXFQLEdBQUcsR0FBR0wsRUFBRSxHQUFHN1EsQ0FBTCxHQUFTOFEsRUFBRSxHQUFHdkgsQ0FBZCxHQUFrQnpILEVBQTlCO0FBQ0EsUUFBTXFQLEdBQUcsR0FBR0osRUFBRSxHQUFHOVEsQ0FBTCxHQUFTNlEsRUFBRSxHQUFHeEgsQ0FBZCxHQUFrQnpILEVBQTlCO0FBQ0EsUUFBTXVQLEdBQUcsR0FBR0wsRUFBRSxHQUFHL1EsQ0FBTCxHQUFTOFEsRUFBRSxHQUFHdkgsQ0FBZCxHQUFrQnpILEVBQTlCO0FBQ0EsUUFBTXVQLEdBQUcsR0FBR04sRUFBRSxHQUFHOVEsQ0FBTCxHQUFTK1EsRUFBRSxHQUFHMUgsQ0FBZCxHQUFrQnpILEVBQTlCO0FBQ0EsUUFBTXlQLEdBQUcsR0FBR1AsRUFBRSxHQUFHL1EsQ0FBTCxHQUFTZ1IsRUFBRSxHQUFHekgsQ0FBZCxHQUFrQnpILEVBQTlCO0FBQ0EsUUFBTXlQLEdBQUcsR0FBR1YsRUFBRSxHQUFHNVEsQ0FBTCxHQUFTK1EsRUFBRSxHQUFHMUgsQ0FBZCxHQUFrQnpILEVBQTlCO0FBQ0EsUUFBTTJQLEdBQUcsR0FBR1gsRUFBRSxHQUFHN1EsQ0FBTCxHQUFTZ1IsRUFBRSxHQUFHekgsQ0FBZCxHQUFrQnpILEVBQTlCO0FBQ0EsUUFBSW1NLElBQUksR0FBR2dELEdBQVg7O0FBQ0EsUUFBSWhELElBQUksR0FBR2tELEdBQVgsRUFBZ0I7QUFDWmxELFVBQUksR0FBR2tELEdBQVA7QUFDSDs7QUFDRCxRQUFJbEQsSUFBSSxHQUFHb0QsR0FBWCxFQUFnQjtBQUNacEQsVUFBSSxHQUFHb0QsR0FBUDtBQUNIOztBQUNELFFBQUlwRCxJQUFJLEdBQUdzRCxHQUFYLEVBQWdCO0FBQ1p0RCxVQUFJLEdBQUdzRCxHQUFQO0FBQ0g7O0FBQ0QsUUFBSW5ELEdBQUcsR0FBRzhDLEdBQVY7O0FBQ0EsUUFBSTlDLEdBQUcsR0FBR2dELEdBQVYsRUFBZTtBQUNYaEQsU0FBRyxHQUFHZ0QsR0FBTjtBQUNIOztBQUNELFFBQUloRCxHQUFHLEdBQUdrRCxHQUFWLEVBQWU7QUFDWGxELFNBQUcsR0FBR2tELEdBQU47QUFDSDs7QUFDRCxRQUFJbEQsR0FBRyxHQUFHb0QsR0FBVixFQUFlO0FBQ1hwRCxTQUFHLEdBQUdvRCxHQUFOO0FBQ0g7O0FBQ0QsUUFBSUMsS0FBSyxHQUFHUixHQUFaOztBQUNBLFFBQUlRLEtBQUssR0FBR04sR0FBWixFQUFpQjtBQUNiTSxXQUFLLEdBQUdOLEdBQVI7QUFDSDs7QUFDRCxRQUFJTSxLQUFLLEdBQUdKLEdBQVosRUFBaUI7QUFDYkksV0FBSyxHQUFHSixHQUFSO0FBQ0g7O0FBQ0QsUUFBSUksS0FBSyxHQUFHRixHQUFaLEVBQWlCO0FBQ2JFLFdBQUssR0FBR0YsR0FBUjtBQUNIOztBQUNELFFBQUlHLE1BQU0sR0FBR1IsR0FBYjs7QUFDQSxRQUFJUSxNQUFNLEdBQUdOLEdBQWIsRUFBa0I7QUFDZE0sWUFBTSxHQUFHTixHQUFUO0FBQ0g7O0FBQ0QsUUFBSU0sTUFBTSxHQUFHSixHQUFiLEVBQWtCO0FBQ2RJLFlBQU0sR0FBR0osR0FBVDtBQUNIOztBQUNELFFBQUlJLE1BQU0sR0FBR0YsR0FBYixFQUFrQjtBQUNkRSxZQUFNLEdBQUdGLEdBQVQ7QUFDSDs7QUFDRDlMLFVBQU0sQ0FBQ2pFLENBQVAsR0FBV3dNLElBQVg7QUFDQXZJLFVBQU0sQ0FBQ2hFLENBQVAsR0FBVzBNLEdBQVg7QUFDQTFJLFVBQU0sQ0FBQ3RDLEtBQVAsR0FBZXFPLEtBQUssR0FBR3hELElBQXZCO0FBQ0F2SSxVQUFNLENBQUNyQyxNQUFQLEdBQWdCcU8sTUFBTSxHQUFHdEQsR0FBekI7QUFDSDs7QUFDRHpNLFFBQU0sQ0FBQ2lQLGVBQVAsR0FBeUJBLGVBQXpCO0FBQ0gsQ0FyS0QsRUFxS0dqUCxNQUFNLEtBQUtBLE1BQU0sR0FBRyxFQUFkLENBcktULEU7Ozs7Ozs7Ozs7Ozs7QUNETyxJQUFJcEMsS0FBSjs7QUFDUCxDQUFDLFVBQVVBLEtBQVYsRUFBaUI7QUFDZCxXQUFTb1AsS0FBVCxHQUFpQjtBQUNiLFdBQU87QUFBRWxOLE9BQUMsRUFBRSxDQUFMO0FBQVFDLE9BQUMsRUFBRTtBQUFYLEtBQVA7QUFDSDs7QUFDRG5DLE9BQUssQ0FBQ29QLEtBQU4sR0FBY0EsS0FBZDs7QUFDQSxXQUFTek4sTUFBVCxDQUFnQjBPLEtBQWhCLEVBQXVCO0FBQUEsUUFDWG5PLENBRFcsR0FDRm1PLEtBREUsQ0FDWG5PLENBRFc7QUFBQSxRQUNSQyxDQURRLEdBQ0ZrTyxLQURFLENBQ1JsTyxDQURRO0FBRW5CLFdBQU9LLElBQUksQ0FBQzRQLElBQUwsQ0FBVWxRLENBQUMsR0FBR0EsQ0FBSixHQUFRQyxDQUFDLEdBQUdBLENBQXRCLENBQVA7QUFDSDs7QUFDRG5DLE9BQUssQ0FBQzJCLE1BQU4sR0FBZUEsTUFBZjs7QUFDQSxXQUFTMFEsS0FBVCxDQUFlaEMsS0FBZixFQUFzQjtBQUNsQixXQUFPN04sSUFBSSxDQUFDOFAsS0FBTCxDQUFXakMsS0FBSyxDQUFDbE8sQ0FBakIsRUFBb0JrTyxLQUFLLENBQUNuTyxDQUExQixDQUFQO0FBQ0g7O0FBQ0RsQyxPQUFLLENBQUNxUyxLQUFOLEdBQWNBLEtBQWQ7O0FBQ0EsV0FBU3ZDLE9BQVQsQ0FBaUJPLEtBQWpCLEVBQXdCO0FBQ3BCLFdBQU9BLEtBQUssQ0FBQ25PLENBQU4sS0FBWSxDQUFaLElBQWlCbU8sS0FBSyxDQUFDbE8sQ0FBTixLQUFZLENBQXBDO0FBQ0g7O0FBQ0RuQyxPQUFLLENBQUM4UCxPQUFOLEdBQWdCQSxPQUFoQjs7QUFDQSxXQUFTeUMsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0J6UyxNQUF4QixFQUFnQztBQUM1QixXQUFPeVMsTUFBTSxDQUFDdFEsQ0FBUCxLQUFhbkMsTUFBTSxDQUFDbUMsQ0FBcEIsSUFBeUJzUSxNQUFNLENBQUNyUSxDQUFQLEtBQWFwQyxNQUFNLENBQUNvQyxDQUFwRDtBQUNIOztBQUNEbkMsT0FBSyxDQUFDdVMsTUFBTixHQUFlQSxNQUFmOztBQUNBLFdBQVMzQyxRQUFULENBQWtCUyxLQUFsQixFQUF5QjtBQUNyQkEsU0FBSyxDQUFDbk8sQ0FBTixHQUFVLENBQVY7QUFDQW1PLFNBQUssQ0FBQ2xPLENBQU4sR0FBVSxDQUFWO0FBQ0g7O0FBQ0RuQyxPQUFLLENBQUM0UCxRQUFOLEdBQWlCQSxRQUFqQjs7QUFDQSxXQUFTVyxJQUFULENBQWNrQyxNQUFkLEVBQXNCQyxNQUF0QixFQUE4QjtBQUMxQkEsVUFBTSxDQUFDeFEsQ0FBUCxHQUFXdVEsTUFBTSxDQUFDdlEsQ0FBbEI7QUFDQXdRLFVBQU0sQ0FBQ3ZRLENBQVAsR0FBV3NRLE1BQU0sQ0FBQ3RRLENBQWxCO0FBQ0g7O0FBQ0RuQyxPQUFLLENBQUN1USxJQUFOLEdBQWFBLElBQWI7O0FBQ0EsV0FBU29DLFNBQVQsQ0FBbUJ0QyxLQUFuQixFQUEwQnVDLFNBQTFCLEVBQXFDO0FBQ2pDLFFBQUluSSxLQUFLLEdBQUc5SSxNQUFNLENBQUMwTyxLQUFELENBQWxCOztBQUNBLFFBQUk1RixLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ1hBLFdBQUssR0FBR21JLFNBQVMsR0FBR25JLEtBQXBCO0FBQ0E0RixXQUFLLENBQUNuTyxDQUFOLElBQVd1SSxLQUFYO0FBQ0E0RixXQUFLLENBQUNsTyxDQUFOLElBQVdzSSxLQUFYO0FBQ0g7QUFDSjs7QUFDRHpLLE9BQUssQ0FBQzJTLFNBQU4sR0FBa0JBLFNBQWxCOztBQUNBLFdBQVNFLFFBQVQsQ0FBa0JMLE1BQWxCLEVBQTBCelMsTUFBMUIsRUFBa0M7QUFDOUIsUUFBTStTLEVBQUUsR0FBR04sTUFBTSxDQUFDdFEsQ0FBUCxHQUFXbkMsTUFBTSxDQUFDbUMsQ0FBN0I7QUFDQSxRQUFNNlEsRUFBRSxHQUFHUCxNQUFNLENBQUNyUSxDQUFQLEdBQVdwQyxNQUFNLENBQUNvQyxDQUE3QjtBQUNBLFdBQU9LLElBQUksQ0FBQzRQLElBQUwsQ0FBVVUsRUFBRSxHQUFHQSxFQUFMLEdBQVVDLEVBQUUsR0FBR0EsRUFBekIsQ0FBUDtBQUNIOztBQUNEL1MsT0FBSyxDQUFDNlMsUUFBTixHQUFpQkEsUUFBakI7O0FBQ0EsV0FBU0csV0FBVCxDQUFxQnBHLEtBQXJCLEVBQTRCQyxHQUE1QixFQUFpQ3BDLEtBQWpDLEVBQXdDdEUsTUFBeEMsRUFBZ0Q7QUFDNUNBLFVBQU0sQ0FBQ2pFLENBQVAsR0FBVzBLLEtBQUssQ0FBQzFLLENBQU4sR0FBVXVJLEtBQUssSUFBSW9DLEdBQUcsQ0FBQzNLLENBQUosR0FBUTBLLEtBQUssQ0FBQzFLLENBQWxCLENBQTFCO0FBQ0FpRSxVQUFNLENBQUNoRSxDQUFQLEdBQVd5SyxLQUFLLENBQUN6SyxDQUFOLEdBQVVzSSxLQUFLLElBQUlvQyxHQUFHLENBQUMxSyxDQUFKLEdBQVF5SyxLQUFLLENBQUN6SyxDQUFsQixDQUExQjtBQUNIOztBQUNEbkMsT0FBSyxDQUFDZ1QsV0FBTixHQUFvQkEsV0FBcEI7O0FBQ0EsV0FBU0MsS0FBVCxDQUFlNUMsS0FBZixFQUFzQjFPLE1BQXRCLEVBQThCMFEsS0FBOUIsRUFBcUM7QUFDakNoQyxTQUFLLENBQUNuTyxDQUFOLEdBQVVQLE1BQU0sR0FBR2EsSUFBSSxDQUFDNkgsR0FBTCxDQUFTZ0ksS0FBVCxDQUFuQjtBQUNBaEMsU0FBSyxDQUFDbE8sQ0FBTixHQUFVUixNQUFNLEdBQUdhLElBQUksQ0FBQzhILEdBQUwsQ0FBUytILEtBQVQsQ0FBbkI7QUFDSDs7QUFDRHJTLE9BQUssQ0FBQ2lULEtBQU4sR0FBY0EsS0FBZDtBQUNILENBekRELEVBeURHalQsS0FBSyxLQUFLQSxLQUFLLEdBQUcsRUFBYixDQXpEUixFOzs7Ozs7Ozs7Ozs7O0FDRE8sSUFBSWtULFNBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxTQUFWLEVBQXFCO0FBQ2xCLFdBQVM5RCxLQUFULEdBQWlCO0FBQ2IsV0FBTztBQUNIbE4sT0FBQyxFQUFFLENBREE7QUFDR0MsT0FBQyxFQUFFLENBRE47QUFDUzBCLFdBQUssRUFBRSxDQURoQjtBQUNtQkMsWUFBTSxFQUFFO0FBRDNCLEtBQVA7QUFHSDs7QUFDRG9QLFdBQVMsQ0FBQzlELEtBQVYsR0FBa0JBLEtBQWxCOztBQUNBLFdBQVNRLFFBQVQsQ0FBa0JJLFNBQWxCLEVBQTZCO0FBQ3pCQSxhQUFTLENBQUM5TixDQUFWLEdBQWMsQ0FBZDtBQUNBOE4sYUFBUyxDQUFDN04sQ0FBVixHQUFjLENBQWQ7QUFDQTZOLGFBQVMsQ0FBQ25NLEtBQVYsR0FBa0IsQ0FBbEI7QUFDQW1NLGFBQVMsQ0FBQ2xNLE1BQVYsR0FBbUIsQ0FBbkI7QUFDSDs7QUFDRG9QLFdBQVMsQ0FBQ3RELFFBQVYsR0FBcUJBLFFBQXJCOztBQUNBLFdBQVN1RCxZQUFULENBQXNCVixNQUF0QixFQUE4QkMsTUFBOUIsRUFBc0N2TSxNQUF0QyxFQUE4QztBQUFBLFFBQ3BDakUsQ0FEb0MsR0FDWHVRLE1BRFcsQ0FDcEN2USxDQURvQztBQUFBLFFBQ2pDQyxDQURpQyxHQUNYc1EsTUFEVyxDQUNqQ3RRLENBRGlDO0FBQUEsUUFDOUIwQixLQUQ4QixHQUNYNE8sTUFEVyxDQUM5QjVPLEtBRDhCO0FBQUEsUUFDdkJDLE1BRHVCLEdBQ1gyTyxNQURXLENBQ3ZCM08sTUFEdUI7QUFFMUMsUUFBTTRLLElBQUksR0FBR2dFLE1BQU0sQ0FBQ3hRLENBQXBCO0FBQ0EsUUFBTTJNLEdBQUcsR0FBRzZELE1BQU0sQ0FBQ3ZRLENBQW5CO0FBQ0EsUUFBTStQLEtBQUssR0FBR1EsTUFBTSxDQUFDeFEsQ0FBUCxHQUFXd1EsTUFBTSxDQUFDN08sS0FBaEM7QUFDQSxRQUFNc08sTUFBTSxHQUFHTyxNQUFNLENBQUN2USxDQUFQLEdBQVd1USxNQUFNLENBQUM1TyxNQUFqQzs7QUFDQSxRQUFJNUIsQ0FBQyxHQUFHd00sSUFBUixFQUFjO0FBQ1Y3SyxXQUFLLElBQUk2SyxJQUFJLEdBQUd4TSxDQUFoQjtBQUNBQSxPQUFDLEdBQUd3TSxJQUFKO0FBQ0g7O0FBQ0QsUUFBSXhNLENBQUMsR0FBRzJCLEtBQUosR0FBWXFPLEtBQWhCLEVBQXVCO0FBQ25Cck8sV0FBSyxHQUFHcU8sS0FBSyxHQUFHaFEsQ0FBaEI7QUFDSDs7QUFDRCxRQUFJQyxDQUFDLEdBQUcwTSxHQUFSLEVBQWE7QUFDVC9LLFlBQU0sSUFBSStLLEdBQUcsR0FBRzFNLENBQWhCO0FBQ0FBLE9BQUMsR0FBRzBNLEdBQUo7QUFDSDs7QUFDRCxRQUFJMU0sQ0FBQyxHQUFHMkIsTUFBSixHQUFhcU8sTUFBakIsRUFBeUI7QUFDckJyTyxZQUFNLEdBQUdxTyxNQUFNLEdBQUdoUSxDQUFsQjtBQUNIOztBQUNELFFBQUkwQixLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ1hBLFdBQUssR0FBRyxDQUFSO0FBQ0g7O0FBQ0QsUUFBSUMsTUFBTSxHQUFHLENBQWIsRUFBZ0I7QUFDWkEsWUFBTSxHQUFHLENBQVQ7QUFDSDs7QUFDRHFDLFVBQU0sQ0FBQ2pFLENBQVAsR0FBV0EsQ0FBWDtBQUNBaUUsVUFBTSxDQUFDaEUsQ0FBUCxHQUFXQSxDQUFYO0FBQ0FnRSxVQUFNLENBQUN0QyxLQUFQLEdBQWVBLEtBQWY7QUFDQXNDLFVBQU0sQ0FBQ3JDLE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0g7O0FBQ0RvUCxXQUFTLENBQUNDLFlBQVYsR0FBeUJBLFlBQXpCOztBQUNBLFdBQVNyRCxPQUFULENBQWlCRSxTQUFqQixFQUE0QjtBQUN4QixXQUFPQSxTQUFTLENBQUNuTSxLQUFWLEtBQW9CLENBQXBCLElBQXlCbU0sU0FBUyxDQUFDbE0sTUFBVixLQUFxQixDQUFyRDtBQUNIOztBQUNEb1AsV0FBUyxDQUFDcEQsT0FBVixHQUFvQkEsT0FBcEI7O0FBQ0EsV0FBU3NELFFBQVQsQ0FBa0JwRCxTQUFsQixFQUE2QkssS0FBN0IsRUFBb0M7QUFDaEMsV0FBT0wsU0FBUyxDQUFDOU4sQ0FBVixHQUFjbU8sS0FBSyxDQUFDbk8sQ0FBcEIsSUFDQThOLFNBQVMsQ0FBQzlOLENBQVYsR0FBYzhOLFNBQVMsQ0FBQ25NLEtBQXhCLEdBQWdDd00sS0FBSyxDQUFDbk8sQ0FEdEMsSUFFQThOLFNBQVMsQ0FBQzdOLENBQVYsR0FBY2tPLEtBQUssQ0FBQ2xPLENBRnBCLElBR0E2TixTQUFTLENBQUM3TixDQUFWLEdBQWM2TixTQUFTLENBQUNsTSxNQUF4QixHQUFpQ3VNLEtBQUssQ0FBQ2xPLENBSDlDO0FBSUg7O0FBQ0QrUSxXQUFTLENBQUNFLFFBQVYsR0FBcUJBLFFBQXJCOztBQUNBLFdBQVNDLEtBQVQsQ0FBZXJELFNBQWYsRUFBMEI7QUFDdEJBLGFBQVMsQ0FBQzlOLENBQVYsR0FBY00sSUFBSSxDQUFDNlEsS0FBTCxDQUFXckQsU0FBUyxDQUFDOU4sQ0FBckIsQ0FBZDtBQUNBOE4sYUFBUyxDQUFDN04sQ0FBVixHQUFjSyxJQUFJLENBQUM2USxLQUFMLENBQVdyRCxTQUFTLENBQUM3TixDQUFyQixDQUFkO0FBQ0E2TixhQUFTLENBQUNuTSxLQUFWLEdBQWtCckIsSUFBSSxDQUFDNlEsS0FBTCxDQUFXckQsU0FBUyxDQUFDbk0sS0FBckIsQ0FBbEI7QUFDQW1NLGFBQVMsQ0FBQ2xNLE1BQVYsR0FBbUJ0QixJQUFJLENBQUM2USxLQUFMLENBQVdyRCxTQUFTLENBQUNsTSxNQUFyQixDQUFuQjtBQUNIOztBQUNEb1AsV0FBUyxDQUFDRyxLQUFWLEdBQWtCQSxLQUFsQjtBQUNILENBaEVELEVBZ0VHSCxTQUFTLEtBQUtBLFNBQVMsR0FBRyxFQUFqQixDQWhFWixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUksaUJBQWlCLEdBQUcsRUFBMUI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsSUFBbkI7QUFDTyxJQUFJQyxtQkFBSjs7QUFDUCxDQUFDLFVBQVVBLG1CQUFWLEVBQStCO0FBQzVCLFdBQVNqTyxNQUFULENBQWdCRyxTQUFoQixFQUEyQmpDLE1BQTNCLEVBQW1DO0FBQUEsZ0NBQ0lBLE1BQU0sQ0FBQytCLFFBQVAsQ0FBZ0JuQyxVQUFoQixFQURKO0FBQUEsUUFDdkJyQixNQUR1Qix5QkFDdkJBLE1BRHVCO0FBQUEsUUFDZlAsY0FEZSx5QkFDZkEsY0FEZTs7QUFFL0IsUUFBSUEsY0FBYyxDQUFDUCxlQUFmLElBQWtDLENBQXRDLEVBQXlDO0FBQ3JDO0FBQ0g7O0FBQ0QsUUFBSXVTLE9BQUo7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLGdEQUFBLENBQWNqTyxTQUFkLENBQWY7O0FBQ0EsUUFBSWdPLE1BQUosRUFBWTtBQUNSRCxhQUFPLEdBQUdHLHVFQUFBLENBQTZCbE8sU0FBN0IsQ0FBVjtBQUNILEtBRkQsTUFHSztBQUNEK04sYUFBTyxHQUFHRyxpRUFBQSxDQUF1QmxPLFNBQXZCLENBQVY7QUFDSDs7QUFDRCxRQUFJLENBQUMrTixPQUFMLEVBQWM7QUFDVjtBQUNIOztBQWY4QixRQWdCdkI1UCxLQWhCdUIsR0FnQndCNkIsU0FoQnhCLENBZ0J2QjdCLEtBaEJ1QjtBQUFBLFFBZ0JoQkMsTUFoQmdCLEdBZ0J3QjRCLFNBaEJ4QixDQWdCaEI1QixNQWhCZ0I7QUFBQSxRQWdCUitQLE1BaEJRLEdBZ0J3Qm5PLFNBaEJ4QixDQWdCUm1PLE1BaEJRO0FBQUEsUUFnQkFDLE1BaEJBLEdBZ0J3QnBPLFNBaEJ4QixDQWdCQW9PLE1BaEJBO0FBQUEsUUFnQlFDLFVBaEJSLEdBZ0J3QnJPLFNBaEJ4QixDQWdCUXFPLFVBaEJSO0FBaUIvQkMsZ0VBQUEsQ0FBbUJILE1BQW5CLEVBQTJCRyxzRUFBM0IsRUFBeURWLGlCQUF6RDtBQUNBLFFBQU1XLFNBQVMsR0FBR3BRLEtBQUgsYUFBR0EsS0FBSCxjQUFHQSxLQUFILEdBQVk0UCxPQUFPLENBQUM1UCxLQUFuQztBQUNBLFFBQU1xUSxVQUFVLEdBQUdwUSxNQUFILGFBQUdBLE1BQUgsY0FBR0EsTUFBSCxHQUFhMlAsT0FBTyxDQUFDM1AsTUFBckM7QUFDQSxRQUFNcVEsT0FBTyxHQUFHN0wsa0RBQUEsQ0FBVzVDLFNBQVgsRUFBc0J1TyxTQUF0QixDQUFoQjtBQUNBLFFBQU1HLE9BQU8sR0FBRzlMLGtEQUFBLENBQVc1QyxTQUFYLEVBQXNCd08sVUFBdEIsQ0FBaEI7QUFDQSxRQUFJL1IsQ0FBQyxHQUFHLENBQVI7O0FBQ0EsUUFBSTJCLE1BQUosRUFBWTtBQUNSLFVBQU11USxrQkFBa0IsR0FBR0wsMEVBQUEsQ0FBaUNWLGlCQUFqQyxDQUEzQjtBQUNBblIsT0FBQyxHQUFHLENBQUMyQixNQUFNLEdBQUcyUCxPQUFPLENBQUMzUCxNQUFsQixJQUE0QnVRLGtCQUFoQzs7QUFDQSxVQUFJbFMsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNQQSxTQUFDLEdBQUcsQ0FBSjtBQUNIO0FBQ0o7O0FBQ0RBLEtBQUMsSUFBSWlTLE9BQUw7QUFDQSxRQUFNRSxTQUFTLEdBQUc3USxNQUFNLENBQUNzRSxRQUFQLENBQWdCMUUsVUFBaEIsRUFBbEI7QUFDQWlSLGFBQVMsQ0FBQ3JRLFlBQVYsQ0FBdUJqQyxNQUFNLENBQUN0QixDQUE5QixFQUFpQ3NCLE1BQU0sQ0FBQ3ZCLENBQXhDLEVBQTJDdUIsTUFBTSxDQUFDK0gsQ0FBbEQsRUFBcUQvSCxNQUFNLENBQUNnSSxDQUE1RCxFQUErRGhJLE1BQU0sQ0FBQ00sRUFBdEUsRUFBMEVOLE1BQU0sQ0FBQ08sRUFBakY7QUFDQStSLGFBQVMsQ0FBQ0MsV0FBVixHQUF3QixDQUF4Qjs7QUFDQSxRQUFJUixVQUFVLEtBQUtuSixTQUFuQixFQUE4QjtBQUMxQjBKLGVBQVMsQ0FBQ0UsV0FBVixHQUF3QixFQUF4QjtBQUNBRixlQUFTLENBQUNHLFNBQVYsR0FBc0J2VSw0RUFBQSxDQUE0QjZULFVBQTVCLEVBQXdDLENBQXhDLEVBQTJDdFMsY0FBM0MsQ0FBdEI7QUFDQTZTLGVBQVMsQ0FBQ0ksU0FBVjtBQUNBSixlQUFTLENBQUNLLElBQVYsQ0FBZVIsT0FBZixFQUF3QkMsT0FBeEIsRUFBaUNILFNBQWpDLEVBQTRDQyxVQUE1QztBQUNBSSxlQUFTLENBQUNNLFNBQVY7QUFDQU4sZUFBUyxDQUFDTyxJQUFWO0FBQ0g7O0FBQ0QsUUFBSWYsTUFBTSxLQUFLbEosU0FBZixFQUEwQjtBQUN0QjBKLGVBQVMsQ0FBQ0UsV0FBVixHQUF3QnRVLDRFQUFBLENBQTRCNFQsTUFBNUIsRUFBb0MsQ0FBcEMsRUFBdUNyUyxjQUF2QyxDQUF4QjtBQUNBNlMsZUFBUyxDQUFDRyxTQUFWLEdBQXNCLEVBQXRCO0FBQ0FILGVBQVMsQ0FBQ0ksU0FBVjtBQUNBSixlQUFTLENBQUNLLElBQVYsQ0FBZVIsT0FBZixFQUF3QkMsT0FBeEIsRUFBaUNILFNBQWpDLEVBQTRDQyxVQUE1QztBQUNBSSxlQUFTLENBQUNNLFNBQVY7QUFDQU4sZUFBUyxDQUFDUSxNQUFWO0FBQ0g7O0FBQ0RSLGFBQVMsQ0FBQ1MsWUFBVixHQUF5QixZQUF6QjtBQUNBVCxhQUFTLENBQUNFLFdBQVYsR0FBd0IsRUFBeEI7O0FBQ0EsUUFBSWQsTUFBSixFQUFZO0FBQ1IsVUFBTXNCLElBQUksR0FBR3RQLFNBQVMsQ0FBQ3NQLElBQXZCO0FBRFEsVUFFQUMsSUFGQSxHQUVnRDNCLGlCQUZoRCxDQUVBMkIsSUFGQTtBQUFBLFVBRU03VSxLQUZOLEdBRWdEa1QsaUJBRmhELENBRU1sVCxLQUZOO0FBQUEsVUFFYUMsS0FGYixHQUVnRGlULGlCQUZoRCxDQUVhalQsS0FGYjtBQUFBLFVBRW9CNlUsT0FGcEIsR0FFZ0Q1QixpQkFGaEQsQ0FFb0I0QixPQUZwQjtBQUFBLFVBRTZCQyxhQUY3QixHQUVnRDdCLGlCQUZoRCxDQUU2QjZCLGFBRjdCO0FBR1IsVUFBTUMsV0FBVyxHQUFHQyxvREFBQSxDQUFhL0IsaUJBQWIsQ0FBcEI7QUFDQSxVQUFNZ0MsVUFBVSxHQUFHTCxJQUFJLEdBQUcxQixVQUExQjtBQUNBLFVBQU1nQyxVQUFVLEdBQUd2QixrRUFBQSxDQUF5QlYsaUJBQXpCLENBQW5CO0FBQ0FnQixlQUFTLENBQUNrQixJQUFWLEdBQWlCSCxxREFBQSxDQUFjRCxXQUFkLEVBQTJCSCxJQUEzQixDQUFqQjtBQUNBWCxlQUFTLENBQUNHLFNBQVYsR0FBc0J2VSw0RUFBQSxDQUE0QkUsS0FBNUIsRUFBbUNDLEtBQW5DLEVBQTBDb0IsY0FBMUMsQ0FBdEI7QUFDQSxVQUFJUyxDQUFDLEdBQUdpUyxPQUFPLEdBQUdvQixVQUFWLEdBQXVCQSxVQUFVLElBQUl0QixTQUFTLEdBQUdMLHFFQUFBLENBQTJCTixpQkFBM0IsRUFBOEMwQixJQUE5QyxFQUFvRCxDQUFwRCxDQUFoQixDQUFqQyxHQUEyRyxDQUFuSDs7QUFDQSxXQUFLLElBQUl0VCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHc1QsSUFBSSxDQUFDclQsTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsWUFBTStULE1BQU0sR0FBR1QsSUFBSSxDQUFDdFQsQ0FBRCxDQUFuQjs7QUFDQSxZQUFJK1QsTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDakJ2VCxXQUFDLEdBQUdxVCxVQUFVLEdBQUdBLFVBQVUsSUFBSXRCLFNBQVMsR0FBR0wscUVBQUEsQ0FBMkJOLGlCQUEzQixFQUE4QzBCLElBQTlDLEVBQW9EdFQsQ0FBQyxHQUFHLENBQXhELENBQWhCLENBQWIsR0FBMkYsQ0FBekc7QUFDQVMsV0FBQyxJQUFJOFMsSUFBSSxHQUFHQyxPQUFaO0FBQ0gsU0FIRCxNQUlLO0FBQ0QsY0FBTVEsVUFBVSxHQUFHVixJQUFJLENBQUN0VCxDQUFDLEdBQUcsQ0FBTCxDQUF2QjtBQUNBLGNBQU1pVSxPQUFPLEdBQUdOLHVEQUFBLENBQWdCRCxXQUFoQixFQUE2QkgsSUFBN0IsRUFBbUNRLE1BQW5DLEVBQTJDQyxVQUEzQyxJQUF5RFAsYUFBekU7QUFDQWIsbUJBQVMsQ0FBQ3NCLFFBQVYsQ0FBbUJILE1BQW5CLEVBQTJCdlQsQ0FBM0IsRUFBOEJDLENBQUMsR0FBR21ULFVBQWxDO0FBQ0FwVCxXQUFDLElBQUl5VCxPQUFMO0FBQ0g7QUFDSjtBQUNKLEtBdEJELE1BdUJLO0FBQ0RsUyxZQUFNLENBQUNDLEtBQVAsQ0FBYUMsT0FBYixDQUFxQixXQUFyQjtBQURDLHFCQUVpQjhQLE9BRmpCO0FBQUEsVUFFT29DLEtBRlAsWUFFT0EsS0FGUDs7QUFHRCxXQUFLLElBQUluVSxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHbVUsS0FBSyxDQUFDbFUsTUFBMUIsRUFBa0NELEVBQUMsRUFBbkMsRUFBdUM7QUFDbkMsWUFBTW9VLElBQUksR0FBR0QsS0FBSyxDQUFDblUsRUFBRCxDQUFsQjs7QUFDQSxZQUFJb1UsSUFBSSxDQUFDQyxPQUFMLENBQWFwVSxNQUFqQixFQUF5QjtBQUNyQixjQUFNcVUsS0FBSyxHQUFHRixJQUFJLENBQUNDLE9BQUwsQ0FBYSxDQUFiLENBQWQ7O0FBQ0EsY0FBTVIsV0FBVSxHQUFHdkIsa0VBQUEsQ0FBeUJnQyxLQUFLLENBQUNuQyxNQUEvQixDQUFuQjs7QUFDQSxjQUFJM1IsRUFBQyxHQUFHLENBQUMrUixTQUFTLEdBQUc2QixJQUFJLENBQUNqUyxLQUFsQixJQUEyQjBSLFdBQW5DOztBQUNBLGNBQUlyVCxFQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1BBLGNBQUMsR0FBRyxDQUFKO0FBQ0g7O0FBQ0RBLFlBQUMsSUFBSWlTLE9BQUw7QUFQcUIsY0FRYjRCLE9BUmEsR0FRREQsSUFSQyxDQVFiQyxPQVJhO0FBU3JCLGNBQU1FLFVBQVUsR0FBR0gsSUFBSSxDQUFDaFMsTUFBTCxHQUFjeVAsVUFBakM7O0FBQ0EsZUFBSyxJQUFJMkMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsT0FBTyxDQUFDcFUsTUFBNUIsRUFBb0N1VSxDQUFDLEVBQXJDLEVBQXlDO0FBQ3JDLGdCQUFNVCxPQUFNLEdBQUdNLE9BQU8sQ0FBQ0csQ0FBRCxDQUF0QjtBQUNBLGdCQUFNakIsS0FBSSxHQUFHUSxPQUFNLENBQUM1QixNQUFQLENBQWNvQixJQUEzQjtBQUNBLGdCQUFNa0IsZ0JBQWdCLEdBQUduQywwRUFBQSxDQUFpQ3lCLE9BQU0sQ0FBQzVCLE1BQXhDLENBQXpCOztBQUNBLGdCQUFNeUIsV0FBVSxHQUFHTCxLQUFJLEdBQUcxQixVQUExQjs7QUFDQSxnQkFBTTZDLFVBQVUsR0FBR2Ysb0RBQUEsQ0FBYUksT0FBTSxDQUFDNUIsTUFBcEIsQ0FBbkI7QUFDQVMscUJBQVMsQ0FBQ2tCLElBQVYsR0FBaUJILHFEQUFBLENBQWNlLFVBQWQsRUFBMEJuQixLQUExQixDQUFqQjtBQUNBWCxxQkFBUyxDQUFDRyxTQUFWLEdBQXNCdlUsNEVBQUEsQ0FBNEJ1VixPQUFNLENBQUM1QixNQUFQLENBQWN6VCxLQUExQyxFQUFpRHFWLE9BQU0sQ0FBQzVCLE1BQVAsQ0FBY3hULEtBQS9ELEVBQXNFb0IsY0FBdEUsQ0FBdEI7QUFDQTZTLHFCQUFTLENBQUNzQixRQUFWLENBQW1CSCxPQUFNLENBQUNBLE1BQTFCLEVBQWtDdlQsRUFBbEMsRUFBcUNDLENBQUMsR0FBR21ULFdBQUosR0FBaUJhLGdCQUFnQixJQUFJRixVQUFVLEdBQUdYLFdBQWpCLENBQXRFO0FBQ0FwVCxjQUFDLElBQUl1VCxPQUFNLENBQUNFLE9BQVo7QUFDSDtBQUNKOztBQUNEeFQsU0FBQyxJQUFJMlQsSUFBSSxDQUFDaFMsTUFBVjtBQUNIO0FBQ0o7QUFDSjs7QUFDRDBQLHFCQUFtQixDQUFDak8sTUFBcEIsR0FBNkJBLE1BQTdCOztBQUNBLFdBQVNrQixJQUFULENBQWNoRCxNQUFkLEVBQXNCO0FBQ2xCNFMseURBQUEsQ0FBbUI1UyxNQUFuQjtBQUNBQSxVQUFNLENBQUNpRCxVQUFQLENBQWtCbkIsTUFBbEIsQ0FBeUJvQixHQUF6QixDQUE2QjJQLHVDQUE3QixFQUFtQy9RLE1BQW5DO0FBQ0g7O0FBQ0RpTyxxQkFBbUIsQ0FBQy9NLElBQXBCLEdBQTJCQSxJQUEzQjtBQUNILENBakhELEVBaUhHK00sbUJBQW1CLEtBQUtBLG1CQUFtQixHQUFHLEVBQTNCLENBakh0QixFOzs7Ozs7Ozs7Ozs7OztBQ1RBLElBQU01UCxNQUFNLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0EsSUFBTWxCLE9BQU8sR0FBRzJCLE1BQU0sQ0FBQ1AsVUFBUCxDQUFrQixJQUFsQixDQUFoQjtBQUNPLElBQU1rVCxFQUFFLEdBQUcsSUFBWDtBQUNQLElBQU1DLEtBQUssR0FBRyxJQUFJbkwsR0FBSixFQUFkO0FBQ08sSUFBSWdLLElBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxJQUFWLEVBQWdCO0FBQ2IsV0FBU29CLFFBQVQsQ0FBa0JqQixJQUFsQixFQUF3QlAsSUFBeEIsRUFBOEI7QUFDMUIsV0FBT08sSUFBSSxDQUFDa0IsSUFBTCxDQUFVQyxPQUFWLENBQWtCLEdBQWxCLEVBQXVCMUIsSUFBSSxDQUFDMkIsUUFBTCxFQUF2QixDQUFQO0FBQ0g7O0FBQ0R2QixNQUFJLENBQUNvQixRQUFMLEdBQWdCQSxRQUFoQjs7QUFDQSxXQUFTSSxXQUFULENBQXFCckIsSUFBckIsRUFBMkJQLElBQTNCLEVBQWlDRCxJQUFqQyxFQUF1QztBQUNuQy9TLFdBQU8sQ0FBQ3VULElBQVIsR0FBZWlCLFFBQVEsQ0FBQ2pCLElBQUQsRUFBT1AsSUFBUCxDQUF2QjtBQUNBLFdBQU9oVCxPQUFPLENBQUM0VSxXQUFSLENBQW9CN0IsSUFBcEIsRUFBMEJuUixLQUFqQztBQUNIOztBQUNEd1IsTUFBSSxDQUFDd0IsV0FBTCxHQUFtQkEsV0FBbkI7O0FBQ0EsV0FBU0MsWUFBVCxDQUFzQnRCLElBQXRCLEVBQTRCdUIsS0FBNUIsRUFBa0M7QUFDOUIsUUFBSWxULEtBQUssR0FBRzJSLElBQUksQ0FBQ3dCLE1BQUwsQ0FBWW5MLEdBQVosQ0FBZ0JrTCxLQUFoQixDQUFaOztBQUNBLFFBQUksQ0FBQ2xULEtBQUwsRUFBWTtBQUNSQSxXQUFLLEdBQUdnVCxXQUFXLENBQUNyQixJQUFELEVBQU9lLEVBQVAsRUFBV1EsS0FBWCxDQUFuQjtBQUNBdkIsVUFBSSxDQUFDd0IsTUFBTCxDQUFZclEsR0FBWixDQUFnQm9RLEtBQWhCLEVBQXNCbFQsS0FBdEI7QUFDSDs7QUFDRCxXQUFPQSxLQUFQO0FBQ0g7O0FBQ0R3UixNQUFJLENBQUN5QixZQUFMLEdBQW9CQSxZQUFwQjs7QUFDQSxXQUFTRyxVQUFULENBQW9CekIsSUFBcEIsRUFBMEJRLEtBQTFCLEVBQWlDa0IsTUFBakMsRUFBeUM7QUFDckMsUUFBTUMsSUFBSSxHQUFHbkIsS0FBSyxHQUFHa0IsTUFBckI7QUFDQSxRQUFJRSxPQUFPLEdBQUc1QixJQUFJLENBQUM2QixRQUFMLENBQWN4TCxHQUFkLENBQWtCc0wsSUFBbEIsQ0FBZDs7QUFDQSxRQUFJLENBQUNDLE9BQUwsRUFBYztBQUNWLFVBQU1FLFdBQVcsR0FBR1IsWUFBWSxDQUFDdEIsSUFBRCxFQUFPMEIsTUFBUCxDQUFoQztBQUNBLFVBQU1LLFVBQVUsR0FBR1YsV0FBVyxDQUFDckIsSUFBRCxFQUFPZSxFQUFQLEVBQVdQLEtBQUssR0FBR2tCLE1BQW5CLENBQTlCO0FBQ0FFLGFBQU8sR0FBR0csVUFBVSxHQUFHRCxXQUF2QjtBQUNBOUIsVUFBSSxDQUFDNkIsUUFBTCxDQUFjMVEsR0FBZCxDQUFrQndRLElBQWxCLEVBQXdCQyxPQUF4QjtBQUNIOztBQUNELFdBQU9BLE9BQVA7QUFDSDs7QUFDRC9CLE1BQUksQ0FBQzRCLFVBQUwsR0FBa0JBLFVBQWxCOztBQUNBLFdBQVNPLFVBQVQsQ0FBb0JoQyxJQUFwQixFQUEwQlAsSUFBMUIsRUFBZ0NlLEtBQWhDLEVBQXVDa0IsTUFBdkMsRUFBK0M7QUFDM0MsUUFBTS9NLEtBQUssR0FBRzhLLElBQUksR0FBR3NCLEVBQXJCO0FBQ0EsUUFBTTFTLEtBQUssR0FBR2lULFlBQVksQ0FBQ3RCLElBQUQsRUFBT1EsS0FBUCxDQUExQjs7QUFDQSxRQUFJLENBQUNrQixNQUFMLEVBQWE7QUFDVCxhQUFPclQsS0FBSyxHQUFHc0csS0FBZjtBQUNIOztBQUNELFFBQU1pTixPQUFPLEdBQUdILFVBQVUsQ0FBQ3pCLElBQUQsRUFBT1EsS0FBUCxFQUFja0IsTUFBZCxDQUExQjtBQUNBLFdBQU9FLE9BQU8sR0FBR2pOLEtBQWpCO0FBQ0g7O0FBQ0RrTCxNQUFJLENBQUNtQyxVQUFMLEdBQWtCQSxVQUFsQjs7QUFDQSxXQUFTQyxPQUFULENBQWlCNUQsTUFBakIsRUFBeUI7QUFDckIsUUFBSTZDLElBQUksR0FBRyxFQUFYOztBQUNBLFFBQUk3QyxNQUFNLENBQUM2RCxJQUFYLEVBQWlCO0FBQ2JoQixVQUFJLElBQUksT0FBUjtBQUNIOztBQUNELFFBQUk3QyxNQUFNLENBQUM4RCxNQUFYLEVBQW1CO0FBQ2ZqQixVQUFJLElBQUksU0FBUjtBQUNIOztBQUNEQSxRQUFJLGtCQUFXN0MsTUFBTSxDQUFDMkIsSUFBbEIsQ0FBSjtBQUNBLFFBQUlBLElBQUksR0FBR2dCLEtBQUssQ0FBQzNLLEdBQU4sQ0FBVTZLLElBQVYsQ0FBWDs7QUFDQSxRQUFJLENBQUNsQixJQUFMLEVBQVc7QUFDUEEsVUFBSSxHQUFHO0FBQ0hrQixZQUFJLEVBQUpBLElBREc7QUFFSE0sY0FBTSxFQUFFLElBQUkzTCxHQUFKLEVBRkw7QUFHSGdNLGdCQUFRLEVBQUUsSUFBSWhNLEdBQUo7QUFIUCxPQUFQO0FBS0FtTCxXQUFLLENBQUM3UCxHQUFOLENBQVUrUCxJQUFWLEVBQWdCbEIsSUFBaEI7QUFDSDs7QUFDRCxXQUFPQSxJQUFQO0FBQ0g7O0FBQ0RILE1BQUksQ0FBQ29DLE9BQUwsR0FBZUEsT0FBZjtBQUNILENBOURELEVBOERHcEMsSUFBSSxLQUFLQSxJQUFJLEdBQUcsRUFBWixDQTlEUCxFOzs7Ozs7Ozs7Ozs7O0FDTE8sSUFBSXJCLFVBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxVQUFWLEVBQXNCO0FBQ25CQSxZQUFVLENBQUNWLGlCQUFYLEdBQStCO0FBQzNCa0MsUUFBSSxFQUFFLE9BRHFCO0FBRTNCUCxRQUFJLEVBQUUsRUFGcUI7QUFHM0I3VSxTQUFLLEVBQUUsQ0FIb0I7QUFJM0JDLFNBQUssRUFBRSxDQUpvQjtBQUszQnFYLFFBQUksRUFBRSxLQUxxQjtBQU0zQkMsVUFBTSxFQUFFLEtBTm1CO0FBTzNCQyxhQUFTLEVBQUUsS0FQZ0I7QUFRM0J6QyxpQkFBYSxFQUFFLENBUlk7QUFTM0JELFdBQU8sRUFBRSxDQVRrQjtBQVUzQjJDLFNBQUssRUFBRSxNQVZvQjtBQVczQkMsaUJBQWEsRUFBRTtBQVhZLEdBQS9COztBQWFBLFdBQVNDLE9BQVQsQ0FBaUJ0RixNQUFqQixFQUF5QnVGLGFBQXpCLEVBQXdDN1IsTUFBeEMsRUFBZ0Q7QUFBQTs7QUFDNUNBLFVBQU0sQ0FBQ3FQLElBQVAsbUJBQWMvQyxNQUFkLGFBQWNBLE1BQWQsdUJBQWNBLE1BQU0sQ0FBRStDLElBQXRCLHVEQUE4QndDLGFBQWEsQ0FBQ3hDLElBQTVDO0FBQ0FyUCxVQUFNLENBQUM4TyxJQUFQLG1CQUFjeEMsTUFBZCxhQUFjQSxNQUFkLHVCQUFjQSxNQUFNLENBQUV3QyxJQUF0Qix1REFBOEIrQyxhQUFhLENBQUMvQyxJQUE1QztBQUNBOU8sVUFBTSxDQUFDL0YsS0FBUCxvQkFBZXFTLE1BQWYsYUFBZUEsTUFBZix1QkFBZUEsTUFBTSxDQUFFclMsS0FBdkIseURBQWdDNFgsYUFBYSxDQUFDNVgsS0FBOUM7QUFDQStGLFVBQU0sQ0FBQzlGLEtBQVAsb0JBQWVvUyxNQUFmLGFBQWVBLE1BQWYsdUJBQWVBLE1BQU0sQ0FBRXBTLEtBQXZCLHlEQUFnQzJYLGFBQWEsQ0FBQzNYLEtBQTlDO0FBQ0E4RixVQUFNLENBQUN1UixJQUFQLG1CQUFjakYsTUFBZCxhQUFjQSxNQUFkLHVCQUFjQSxNQUFNLENBQUVpRixJQUF0Qix1REFBOEJNLGFBQWEsQ0FBQ04sSUFBNUM7QUFDQXZSLFVBQU0sQ0FBQ3dSLE1BQVAscUJBQWdCbEYsTUFBaEIsYUFBZ0JBLE1BQWhCLHVCQUFnQkEsTUFBTSxDQUFFa0YsTUFBeEIsMkRBQWtDSyxhQUFhLENBQUNMLE1BQWhEO0FBQ0F4UixVQUFNLENBQUN5UixTQUFQLHdCQUFtQm5GLE1BQW5CLGFBQW1CQSxNQUFuQix1QkFBbUJBLE1BQU0sQ0FBRW1GLFNBQTNCLGlFQUF3Q0ksYUFBYSxDQUFDSixTQUF0RDtBQUNBelIsVUFBTSxDQUFDZ1AsYUFBUCw0QkFBdUIxQyxNQUF2QixhQUF1QkEsTUFBdkIsdUJBQXVCQSxNQUFNLENBQUUwQyxhQUEvQix5RUFBZ0Q2QyxhQUFhLENBQUM3QyxhQUE5RDtBQUNBaFAsVUFBTSxDQUFDK08sT0FBUCxzQkFBaUJ6QyxNQUFqQixhQUFpQkEsTUFBakIsdUJBQWlCQSxNQUFNLENBQUV5QyxPQUF6Qiw2REFBb0M4QyxhQUFhLENBQUM5QyxPQUFsRDtBQUNBL08sVUFBTSxDQUFDMFIsS0FBUCxvQkFBZXBGLE1BQWYsYUFBZUEsTUFBZix1QkFBZUEsTUFBTSxDQUFFb0YsS0FBdkIseURBQWdDRyxhQUFhLENBQUNILEtBQTlDO0FBQ0ExUixVQUFNLENBQUMyUixhQUFQLDRCQUF1QnJGLE1BQXZCLGFBQXVCQSxNQUF2Qix1QkFBdUJBLE1BQU0sQ0FBRXFGLGFBQS9CLHlFQUFnREUsYUFBYSxDQUFDRixhQUE5RDtBQUNIOztBQUNEOUQsWUFBVSxDQUFDK0QsT0FBWCxHQUFxQkEsT0FBckI7O0FBQ0EsV0FBU3hILElBQVQsQ0FBY2tDLE1BQWQsRUFBc0JDLE1BQXRCLEVBQThCO0FBQzFCQSxVQUFNLENBQUM4QyxJQUFQLEdBQWMvQyxNQUFNLENBQUMrQyxJQUFyQjtBQUNBOUMsVUFBTSxDQUFDdUMsSUFBUCxHQUFjeEMsTUFBTSxDQUFDd0MsSUFBckI7QUFDQXZDLFVBQU0sQ0FBQ3RTLEtBQVAsR0FBZXFTLE1BQU0sQ0FBQ3JTLEtBQXRCO0FBQ0FzUyxVQUFNLENBQUNyUyxLQUFQLEdBQWVvUyxNQUFNLENBQUNwUyxLQUF0QjtBQUNBcVMsVUFBTSxDQUFDZ0YsSUFBUCxHQUFjakYsTUFBTSxDQUFDaUYsSUFBckI7QUFDQWhGLFVBQU0sQ0FBQ2lGLE1BQVAsR0FBZ0JsRixNQUFNLENBQUNrRixNQUF2QjtBQUNBakYsVUFBTSxDQUFDa0YsU0FBUCxHQUFtQm5GLE1BQU0sQ0FBQ21GLFNBQTFCO0FBQ0FsRixVQUFNLENBQUN5QyxhQUFQLEdBQXVCMUMsTUFBTSxDQUFDMEMsYUFBOUI7QUFDQXpDLFVBQU0sQ0FBQ3dDLE9BQVAsR0FBaUJ6QyxNQUFNLENBQUN5QyxPQUF4QjtBQUNBeEMsVUFBTSxDQUFDbUYsS0FBUCxHQUFlcEYsTUFBTSxDQUFDb0YsS0FBdEI7QUFDQW5GLFVBQU0sQ0FBQ29GLGFBQVAsR0FBdUJyRixNQUFNLENBQUNxRixhQUE5QjtBQUNIOztBQUNEOUQsWUFBVSxDQUFDekQsSUFBWCxHQUFrQkEsSUFBbEI7O0FBQ0EsV0FBUzBILGFBQVQsQ0FBdUJwRSxNQUF2QixFQUErQjtBQUMzQixZQUFRQSxNQUFSLGFBQVFBLE1BQVIsdUJBQVFBLE1BQU0sQ0FBRWdFLEtBQWhCO0FBQ0ksV0FBSyxNQUFMO0FBQWEsZUFBTyxDQUFQOztBQUNiLFdBQUssUUFBTDtBQUFlLGVBQU8sR0FBUDs7QUFDZixXQUFLLE9BQUw7QUFBYyxlQUFPLENBQVA7O0FBQ2Q7QUFBUyxlQUFPLENBQVA7QUFKYjtBQU1IOztBQUNEN0QsWUFBVSxDQUFDaUUsYUFBWCxHQUEyQkEsYUFBM0I7O0FBQ0EsV0FBU0MscUJBQVQsQ0FBK0JyRSxNQUEvQixFQUF1QztBQUNuQyxZQUFRQSxNQUFSLGFBQVFBLE1BQVIsdUJBQVFBLE1BQU0sQ0FBRWlFLGFBQWhCO0FBQ0ksV0FBSyxLQUFMO0FBQVksZUFBTyxDQUFQOztBQUNaLFdBQUssUUFBTDtBQUFlLGVBQU8sR0FBUDs7QUFDZixXQUFLLFFBQUw7QUFBZSxlQUFPLENBQVA7O0FBQ2Y7QUFBUyxlQUFPLENBQVA7QUFKYjtBQU1IOztBQUNEOUQsWUFBVSxDQUFDa0UscUJBQVgsR0FBbUNBLHFCQUFuQztBQUNILENBNURELEVBNERHbEUsVUFBVSxLQUFLQSxVQUFVLEdBQUcsRUFBbEIsQ0E1RGIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQSxJQUFNVixpQkFBaUIsR0FBRyxFQUExQjtBQUNPLElBQUk2RSxRQUFKOztBQUNQLENBQUMsVUFBVUEsUUFBVixFQUFvQjtBQUNqQixXQUFTQyxNQUFULEdBQWtCO0FBQ2QsV0FBTztBQUNIckMsYUFBTyxFQUFFLEVBRE47QUFFSGxTLFdBQUssRUFBRSxDQUZKO0FBR0hDLFlBQU0sRUFBRTtBQUhMLEtBQVA7QUFLSDs7QUFDRHFVLFVBQVEsQ0FBQ0MsTUFBVCxHQUFrQkEsTUFBbEI7O0FBQ0EsV0FBU2hKLEtBQVQsQ0FBZTBHLElBQWYsRUFBcUI7QUFDakJBLFFBQUksQ0FBQ0MsT0FBTCxDQUFhcFUsTUFBYixHQUFzQixDQUF0QjtBQUNBbVUsUUFBSSxDQUFDalMsS0FBTCxHQUFhLENBQWI7QUFDQWlTLFFBQUksQ0FBQ2hTLE1BQUwsR0FBYyxDQUFkO0FBQ0g7O0FBQ0RxVSxVQUFRLENBQUMvSSxLQUFULEdBQWlCQSxLQUFqQjs7QUFDQSxXQUFTaUosR0FBVCxDQUFhdkMsSUFBYixFQUFtQkwsTUFBbkIsRUFBMkI7QUFDdkJLLFFBQUksQ0FBQ0MsT0FBTCxDQUFheFMsSUFBYixDQUFrQmtTLE1BQWxCO0FBQ0FLLFFBQUksQ0FBQ2pTLEtBQUwsSUFBYzRSLE1BQU0sQ0FBQ0UsT0FBckI7QUFDQUcsUUFBSSxDQUFDaFMsTUFBTCxHQUFjdEIsSUFBSSxDQUFDOFYsR0FBTCxDQUFTeEMsSUFBSSxDQUFDaFMsTUFBZCxFQUFzQjJSLE1BQU0sQ0FBQzVCLE1BQVAsQ0FBY29CLElBQWQsR0FBcUJRLE1BQU0sQ0FBQzVCLE1BQVAsQ0FBY3FCLE9BQXpELENBQWQ7QUFDSDs7QUFDRGlELFVBQVEsQ0FBQ0UsR0FBVCxHQUFlQSxHQUFmOztBQUNBLFdBQVMzSCxNQUFULENBQWdCZ0MsTUFBaEIsRUFBd0JELE1BQXhCLEVBQWdDO0FBQzVCLFFBQUlBLE1BQU0sQ0FBQ3NELE9BQVAsQ0FBZXBVLE1BQW5CLEVBQTJCO0FBQUE7O0FBQ3ZCLHlCQUFBK1EsTUFBTSxDQUFDcUQsT0FBUCxFQUFleFMsSUFBZiwyQ0FBdUJrUCxNQUFNLENBQUNzRCxPQUE5Qjs7QUFDQXJELFlBQU0sQ0FBQzdPLEtBQVAsSUFBZ0I0TyxNQUFNLENBQUM1TyxLQUF2QjtBQUNBNk8sWUFBTSxDQUFDNU8sTUFBUCxHQUFnQnRCLElBQUksQ0FBQzhWLEdBQUwsQ0FBUzVGLE1BQU0sQ0FBQzVPLE1BQWhCLEVBQXdCMk8sTUFBTSxDQUFDM08sTUFBL0IsQ0FBaEI7QUFDSDtBQUNKOztBQUNEcVUsVUFBUSxDQUFDekgsTUFBVCxHQUFrQkEsTUFBbEI7O0FBQ0EsV0FBUzZILFlBQVQsQ0FBc0J6QyxJQUF0QixFQUE0QjtBQUFBLFFBQ2hCQyxPQURnQixHQUNKRCxJQURJLENBQ2hCQyxPQURnQjs7QUFFeEIsUUFBSUEsT0FBTyxDQUFDcFUsTUFBWixFQUFvQjtBQUNoQixVQUFNNlcsSUFBSSxHQUFHekMsT0FBTyxDQUFDQSxPQUFPLENBQUNwVSxNQUFSLEdBQWlCLENBQWxCLENBQXBCOztBQUNBLFVBQUksS0FBS3dPLElBQUwsQ0FBVXFJLElBQUksQ0FBQy9DLE1BQWYsQ0FBSixFQUE0QjtBQUN4Qk0sZUFBTyxDQUFDdlMsR0FBUjtBQUNBc1MsWUFBSSxDQUFDalMsS0FBTCxJQUFjMlUsSUFBSSxDQUFDN0MsT0FBbkI7QUFDSDtBQUNKO0FBQ0o7O0FBQ0R3QyxVQUFRLENBQUNJLFlBQVQsR0FBd0JBLFlBQXhCOztBQUNBLFdBQVNFLGFBQVQsQ0FBdUIzQyxJQUF2QixFQUE2QjtBQUFBLFFBQ2pCQyxPQURpQixHQUNMRCxJQURLLENBQ2pCQyxPQURpQjs7QUFFekIsUUFBSUEsT0FBTyxDQUFDcFUsTUFBWixFQUFvQjtBQUNoQixVQUFNOFQsTUFBTSxHQUFHTSxPQUFPLENBQUMsQ0FBRCxDQUF0QjtBQUNBRCxVQUFJLENBQUNoUyxNQUFMLElBQWUyUixNQUFNLENBQUM1QixNQUFQLENBQWNxQixPQUE3QjtBQUNIO0FBQ0o7O0FBQ0RpRCxVQUFRLENBQUNNLGFBQVQsR0FBeUJBLGFBQXpCO0FBQ0gsQ0FoREQsRUFnREdOLFFBQVEsS0FBS0EsUUFBUSxHQUFHLEVBQWhCLENBaERYOztBQWlETyxJQUFJdkUsV0FBSjs7QUFDUCxDQUFDLFVBQVVBLFdBQVYsRUFBdUI7QUFDcEIsV0FBUzhFLFVBQVQsQ0FBb0JoVCxTQUFwQixFQUErQjtBQUFBLFFBQ25Cc1AsSUFEbUIsR0FDVnRQLFNBRFUsQ0FDbkJzUCxJQURtQjs7QUFFM0IsUUFBSSxDQUFDQSxJQUFELElBQVMsQ0FBQ0EsSUFBSSxDQUFDclQsTUFBbkIsRUFBMkI7QUFDdkIsYUFBT2lKLFNBQVA7QUFDSDs7QUFDRG9KLDJEQUFBLENBQW1CdE8sU0FBUyxDQUFDbU8sTUFBN0IsRUFBcUNHLGlFQUFyQyxFQUFtRVYsaUJBQW5FO0FBQ0EsUUFBTXlDLE9BQU8sR0FBRyxFQUFoQjs7QUFDQSxRQUFJLE9BQU9mLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDMUIsVUFBTTJELFlBQVksR0FBRyxFQUFyQjtBQUNBM0UsMERBQUEsQ0FBZ0JWLGlCQUFoQixFQUFtQ3FGLFlBQW5DO0FBQ0EsVUFBTXZDLFVBQVUsR0FBR2YsK0NBQUEsQ0FBYXNELFlBQWIsQ0FBbkI7O0FBQ0EsV0FBSyxJQUFJalgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3NULElBQUksQ0FBQ3JULE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFlBQU0rVCxNQUFNLEdBQUdULElBQUksQ0FBQ3RULENBQUQsQ0FBbkI7QUFDQSxZQUFNZ1UsVUFBVSxHQUFHVixJQUFJLENBQUN0VCxDQUFDLEdBQUcsQ0FBTCxDQUF2QjtBQUNBLFlBQU1pVSxPQUFPLEdBQUdOLGtEQUFBLENBQWdCZSxVQUFoQixFQUE0QnVDLFlBQVksQ0FBQzFELElBQXpDLEVBQStDUSxNQUEvQyxFQUF1REMsVUFBdkQsSUFBcUVpRCxZQUFZLENBQUN4RCxhQUFsRztBQUNBWSxlQUFPLENBQUN4UyxJQUFSLENBQWE7QUFDVGtTLGdCQUFNLEVBQU5BLE1BRFM7QUFFVEUsaUJBQU8sRUFBUEEsT0FGUztBQUdUOUIsZ0JBQU0sRUFBRThFO0FBSEMsU0FBYjtBQUtIO0FBQ0osS0FkRCxNQWVLLElBQUkxVCxLQUFLLENBQUNDLE9BQU4sQ0FBYzhQLElBQWQsQ0FBSixFQUF5QjtBQUMxQixXQUFLLElBQUl0VCxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHc1QsSUFBSSxDQUFDclQsTUFBekIsRUFBaUNELEVBQUMsRUFBbEMsRUFBc0M7QUFDbEMsWUFBTWtYLEtBQUssR0FBRzVELElBQUksQ0FBQ3RULEVBQUQsQ0FBbEI7O0FBQ0EsWUFBSSxPQUFPa1gsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUMzQixjQUFNRCxhQUFZLEdBQUcsRUFBckI7QUFDQTNFLDhEQUFBLENBQWdCVixpQkFBaEIsRUFBbUNxRixhQUFuQzs7QUFDQSxjQUFNdkMsV0FBVSxHQUFHZiwrQ0FBQSxDQUFhc0QsYUFBYixDQUFuQjs7QUFDQSxlQUFLLElBQUl6QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMEMsS0FBSyxDQUFDalgsTUFBMUIsRUFBa0N1VSxDQUFDLEVBQW5DLEVBQXVDO0FBQ25DLGdCQUFNVCxPQUFNLEdBQUdtRCxLQUFLLENBQUMxQyxDQUFELENBQXBCO0FBQ0EsZ0JBQU1SLFdBQVUsR0FBR2tELEtBQUssQ0FBQzFDLENBQUMsR0FBRyxDQUFMLENBQXhCOztBQUNBLGdCQUFNUCxRQUFPLEdBQUdOLGtEQUFBLENBQWdCZSxXQUFoQixFQUE0QnVDLGFBQVksQ0FBQzFELElBQXpDLEVBQStDUSxPQUEvQyxFQUF1REMsV0FBdkQsSUFBcUVpRCxhQUFZLENBQUN4RCxhQUFsRzs7QUFDQVksbUJBQU8sQ0FBQ3hTLElBQVIsQ0FBYTtBQUNUa1Msb0JBQU0sRUFBTkEsT0FEUztBQUVURSxxQkFBTyxFQUFQQSxRQUZTO0FBR1Q5QixvQkFBTSxFQUFFOEU7QUFIQyxhQUFiO0FBS0g7QUFDSixTQWRELE1BZUs7QUFDRCxjQUFNQSxjQUFZLEdBQUcsRUFBckI7QUFDQTNFLGlFQUFBLENBQW1CNEUsS0FBbkIsRUFBMEJ0RixpQkFBMUIsRUFBNkNxRixjQUE3Qzs7QUFDQSxjQUFNdkMsWUFBVSxHQUFHZiwrQ0FBQSxDQUFhc0QsY0FBYixDQUFuQjs7QUFDQSxlQUFLLElBQUl6QyxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHMEMsS0FBSyxDQUFDNUQsSUFBTixDQUFXclQsTUFBL0IsRUFBdUN1VSxFQUFDLEVBQXhDLEVBQTRDO0FBQ3hDLGdCQUFNVCxRQUFNLEdBQUdtRCxLQUFLLENBQUM1RCxJQUFOLENBQVdrQixFQUFYLENBQWY7QUFDQSxnQkFBTVIsWUFBVSxHQUFHa0QsS0FBSyxDQUFDNUQsSUFBTixDQUFXa0IsRUFBQyxHQUFHLENBQWYsQ0FBbkI7O0FBQ0EsZ0JBQU1QLFNBQU8sR0FBR04sa0RBQUEsQ0FBZ0JlLFlBQWhCLEVBQTRCdUMsY0FBWSxDQUFDMUQsSUFBekMsRUFBK0NRLFFBQS9DLEVBQXVEQyxZQUF2RCxJQUFxRWlELGNBQVksQ0FBQ3hELGFBQWxHOztBQUNBWSxtQkFBTyxDQUFDeFMsSUFBUixDQUFhO0FBQ1RrUyxvQkFBTSxFQUFOQSxRQURTO0FBRVRFLHFCQUFPLEVBQVBBLFNBRlM7QUFHVDlCLG9CQUFNLEVBQUU4RTtBQUhDLGFBQWI7QUFLSDtBQUNKO0FBQ0o7QUFDSjs7QUFDRCxXQUFPNUMsT0FBUDtBQUNIOztBQUNEbkMsYUFBVyxDQUFDOEUsVUFBWixHQUF5QkEsVUFBekI7O0FBQ0EsV0FBU0csUUFBVCxDQUFrQm5ULFNBQWxCLEVBQTZCO0FBQ3pCLFFBQU1xUSxPQUFPLEdBQUcyQyxVQUFVLENBQUNoVCxTQUFELENBQTFCOztBQUNBLFFBQUksQ0FBQ3FRLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNwVSxNQUF6QixFQUFpQztBQUM3QixhQUFPaUosU0FBUDtBQUNIOztBQUp3QixRQUtqQi9HLEtBTGlCLEdBS1c2QixTQUxYLENBS2pCN0IsS0FMaUI7QUFBQSw4QkFLVzZCLFNBTFgsQ0FLVm9ULFFBTFU7QUFBQSxRQUtWQSxRQUxVLG9DQUtDLEtBTEQ7QUFNekIsUUFBTUMsU0FBUyxHQUFHcEYsbURBQUEsQ0FBaUJqTyxTQUFqQixDQUFsQjtBQUNBLFFBQU1tUSxLQUFLLEdBQUcsRUFBZDtBQUNBLFFBQUlDLElBQUksR0FBR3FDLFFBQVEsQ0FBQ0MsTUFBVCxFQUFYOztBQUNBLFFBQUlXLFNBQUosRUFBZTtBQUNYLFVBQUlsVixLQUFKLEVBQVc7QUFDUCxZQUFJaVYsUUFBSixFQUFjO0FBQ1YsY0FBTUUsSUFBSSxHQUFHYixRQUFRLENBQUNDLE1BQVQsRUFBYjs7QUFDQSxlQUFLLElBQUkxVyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHcVUsT0FBTyxDQUFDcFUsTUFBNUIsRUFBb0NELENBQUMsRUFBckMsRUFBeUM7QUFDckMsZ0JBQU0rVCxNQUFNLEdBQUdNLE9BQU8sQ0FBQ3JVLENBQUQsQ0FBdEI7O0FBQ0EsZ0JBQUkrVCxNQUFNLENBQUNBLE1BQVAsS0FBa0IsSUFBdEIsRUFBNEI7QUFDeEIwQyxzQkFBUSxDQUFDekgsTUFBVCxDQUFnQm9GLElBQWhCLEVBQXNCa0QsSUFBdEI7QUFDQW5ELG1CQUFLLENBQUN0UyxJQUFOLENBQVd1UyxJQUFYO0FBQ0FBLGtCQUFJLEdBQUdxQyxRQUFRLENBQUNDLE1BQVQsRUFBUDtBQUNBRCxzQkFBUSxDQUFDL0ksS0FBVCxDQUFlNEosSUFBZjtBQUNILGFBTEQsTUFNSztBQUNEYixzQkFBUSxDQUFDRSxHQUFULENBQWFXLElBQWIsRUFBbUJ2RCxNQUFuQjs7QUFDQSxrQkFBSUssSUFBSSxDQUFDalMsS0FBTCxHQUFhbVYsSUFBSSxDQUFDblYsS0FBbEIsR0FBMEJBLEtBQTlCLEVBQXFDO0FBQ2pDZ1MscUJBQUssQ0FBQ3RTLElBQU4sQ0FBV3VTLElBQVg7QUFDQUEsb0JBQUksR0FBR3FDLFFBQVEsQ0FBQ0MsTUFBVCxFQUFQO0FBQ0gsZUFIRCxNQUlLLElBQUksS0FBS2pJLElBQUwsQ0FBVXNGLE1BQU0sQ0FBQ0EsTUFBakIsQ0FBSixFQUE4QjtBQUMvQjBDLHdCQUFRLENBQUN6SCxNQUFULENBQWdCb0YsSUFBaEIsRUFBc0JrRCxJQUF0QjtBQUNBYix3QkFBUSxDQUFDL0ksS0FBVCxDQUFlNEosSUFBZjtBQUNIO0FBQ0o7QUFDSjs7QUFDRGIsa0JBQVEsQ0FBQ3pILE1BQVQsQ0FBZ0JvRixJQUFoQixFQUFzQmtELElBQXRCO0FBQ0gsU0F2QkQsTUF3Qks7QUFDRCxlQUFLLElBQUl0WCxHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHcVUsT0FBTyxDQUFDcFUsTUFBNUIsRUFBb0NELEdBQUMsRUFBckMsRUFBeUM7QUFDckMsZ0JBQU0rVCxRQUFNLEdBQUdNLE9BQU8sQ0FBQ3JVLEdBQUQsQ0FBdEI7O0FBQ0EsZ0JBQUkrVCxRQUFNLENBQUNBLE1BQVAsS0FBa0IsSUFBdEIsRUFBNEI7QUFDeEJJLG1CQUFLLENBQUN0UyxJQUFOLENBQVd1UyxJQUFYO0FBQ0FBLGtCQUFJLEdBQUdxQyxRQUFRLENBQUNDLE1BQVQsRUFBUDtBQUNILGFBSEQsTUFJSyxJQUFJdEMsSUFBSSxDQUFDalMsS0FBTCxHQUFhNFIsUUFBTSxDQUFDRSxPQUFwQixHQUE4QjlSLEtBQWxDLEVBQXlDO0FBQzFDZ1MsbUJBQUssQ0FBQ3RTLElBQU4sQ0FBV3VTLElBQVg7QUFDQUEsa0JBQUksR0FBR3FDLFFBQVEsQ0FBQ0MsTUFBVCxFQUFQO0FBQ0FELHNCQUFRLENBQUNFLEdBQVQsQ0FBYXZDLElBQWIsRUFBbUJMLFFBQW5CO0FBQ0gsYUFKSSxNQUtBO0FBQ0QwQyxzQkFBUSxDQUFDRSxHQUFULENBQWF2QyxJQUFiLEVBQW1CTCxRQUFuQjtBQUNIO0FBQ0o7QUFDSjtBQUNKLE9BMUNELE1BMkNLO0FBQ0QsYUFBSyxJQUFJL1QsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBR3FVLE9BQU8sQ0FBQ3BVLE1BQTVCLEVBQW9DRCxHQUFDLEVBQXJDLEVBQXlDO0FBQ3JDLGNBQU0rVCxRQUFNLEdBQUdNLE9BQU8sQ0FBQ3JVLEdBQUQsQ0FBdEI7O0FBQ0EsY0FBSStULFFBQU0sQ0FBQ0EsTUFBUCxLQUFrQixJQUF0QixFQUE0QjtBQUN4QkksaUJBQUssQ0FBQ3RTLElBQU4sQ0FBV3VTLElBQVg7QUFDQUEsZ0JBQUksR0FBR3FDLFFBQVEsQ0FBQ0MsTUFBVCxFQUFQO0FBQ0gsV0FIRCxNQUlLO0FBQ0RELG9CQUFRLENBQUNFLEdBQVQsQ0FBYXZDLElBQWIsRUFBbUJMLFFBQW5CO0FBQ0g7QUFDSjtBQUNKO0FBQ0osS0F4REQsTUF5REs7QUFDRCxXQUFLLElBQUkvVCxHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHcVUsT0FBTyxDQUFDcFUsTUFBNUIsRUFBb0NELEdBQUMsRUFBckMsRUFBeUM7QUFDckMsWUFBTStULFFBQU0sR0FBR00sT0FBTyxDQUFDclUsR0FBRCxDQUF0QjtBQUNBeVcsZ0JBQVEsQ0FBQ0UsR0FBVCxDQUFhdkMsSUFBYixFQUFtQkwsUUFBbkI7QUFDSDtBQUNKOztBQUNELFFBQUlLLElBQUksQ0FBQ0MsT0FBTCxDQUFhcFUsTUFBakIsRUFBeUI7QUFDckJrVSxXQUFLLENBQUN0UyxJQUFOLENBQVd1UyxJQUFYO0FBQ0g7O0FBQ0QsUUFBSUQsS0FBSyxDQUFDbFUsTUFBVixFQUFrQjtBQUNkLFdBQUssSUFBSUQsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBR21VLEtBQUssQ0FBQ2xVLE1BQTFCLEVBQWtDRCxHQUFDLEVBQW5DLEVBQXVDO0FBQ25Db1UsWUFBSSxHQUFHRCxLQUFLLENBQUNuVSxHQUFELENBQVo7QUFDQXlXLGdCQUFRLENBQUNJLFlBQVQsQ0FBc0J6QyxJQUF0Qjs7QUFDQSxZQUFJLENBQUNBLElBQUksQ0FBQ2hTLE1BQVYsRUFBa0I7QUFDZGdTLGNBQUksQ0FBQ2hTLE1BQUwsR0FBY3dQLGlCQUFpQixDQUFDMkIsSUFBaEM7QUFDSDtBQUNKOztBQUNEYSxVQUFJLEdBQUdELEtBQUssQ0FBQ0EsS0FBSyxDQUFDbFUsTUFBTixHQUFlLENBQWhCLENBQVo7QUFDQXdXLGNBQVEsQ0FBQ00sYUFBVCxDQUF1QjNDLElBQXZCO0FBQ0g7O0FBQ0QsV0FBT0QsS0FBUDtBQUNIOztBQUNEakMsYUFBVyxDQUFDaUYsUUFBWixHQUF1QkEsUUFBdkI7O0FBQ0EsV0FBU0ksVUFBVCxDQUFvQnZULFNBQXBCLEVBQStCO0FBQzNCLFFBQU1tUSxLQUFLLEdBQUdnRCxRQUFRLENBQUNuVCxTQUFELENBQXRCOztBQUNBLFFBQUksQ0FBQ21RLEtBQUQsSUFBVSxDQUFDQSxLQUFLLENBQUNsVSxNQUFyQixFQUE2QjtBQUN6QixhQUFPaUosU0FBUDtBQUNIOztBQUNELFFBQU02SSxPQUFPLEdBQUc7QUFDWm9DLFdBQUssRUFBTEEsS0FEWTtBQUVaaFMsV0FBSyxFQUFFLENBRks7QUFHWkMsWUFBTSxFQUFFO0FBSEksS0FBaEI7O0FBS0EsU0FBSyxJQUFJcEMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR21VLEtBQUssQ0FBQ2xVLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ25DLFVBQU1vVSxJQUFJLEdBQUdELEtBQUssQ0FBQ25VLENBQUQsQ0FBbEI7QUFDQStSLGFBQU8sQ0FBQzVQLEtBQVIsR0FBZ0JyQixJQUFJLENBQUM4VixHQUFMLENBQVM3RSxPQUFPLENBQUM1UCxLQUFqQixFQUF3QmlTLElBQUksQ0FBQ2pTLEtBQTdCLENBQWhCO0FBQ0E0UCxhQUFPLENBQUMzUCxNQUFSLElBQWtCZ1MsSUFBSSxDQUFDaFMsTUFBdkI7QUFDSDs7QUFDRCxXQUFPMlAsT0FBUDtBQUNIOztBQUNERyxhQUFXLENBQUNxRixVQUFaLEdBQXlCQSxVQUF6Qjs7QUFDQSxXQUFTQyxnQkFBVCxDQUEwQnhULFNBQTFCLEVBQXFDO0FBQUEsUUFDekJzUCxJQUR5QixHQUNoQnRQLFNBRGdCLENBQ3pCc1AsSUFEeUI7O0FBRWpDLFFBQUksT0FBT0EsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUMxQixhQUFPcEssU0FBUDtBQUNIOztBQUNEb0osMkRBQUEsQ0FBbUJ0TyxTQUFTLENBQUNtTyxNQUE3QixFQUFxQ0csaUVBQXJDLEVBQW1FVixpQkFBbkU7QUFMaUMsUUFNekIyQixJQU55QixHQU1RM0IsaUJBTlIsQ0FNekIyQixJQU55QjtBQUFBLFFBTW5CRSxhQU5tQixHQU1RN0IsaUJBTlIsQ0FNbkI2QixhQU5tQjtBQUFBLFFBTUpELE9BTkksR0FNUTVCLGlCQU5SLENBTUo0QixPQU5JO0FBT2pDLFFBQU1NLElBQUksR0FBR0gsK0NBQUEsQ0FBYS9CLGlCQUFiLENBQWI7QUFDQSxRQUFJelAsS0FBSyxHQUFHLENBQVo7QUFDQSxRQUFJQyxNQUFNLEdBQUdtUixJQUFiO0FBQ0EsUUFBSWtFLFNBQVMsR0FBRyxDQUFoQjs7QUFDQSxTQUFLLElBQUl6WCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHc1QsSUFBSSxDQUFDclQsTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsVUFBTStULE1BQU0sR0FBR1QsSUFBSSxDQUFDdFQsQ0FBRCxDQUFuQjs7QUFDQSxVQUFJK1QsTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDakIzUixjQUFNLElBQUltUixJQUFJLEdBQUdDLE9BQWpCO0FBQ0FyUixhQUFLLEdBQUdyQixJQUFJLENBQUM4VixHQUFMLENBQVN6VSxLQUFULEVBQWdCc1YsU0FBaEIsQ0FBUjtBQUNBQSxpQkFBUyxHQUFHLENBQVo7QUFDSCxPQUpELE1BS0s7QUFDRCxZQUFNekQsVUFBVSxHQUFHVixJQUFJLENBQUN0VCxDQUFDLEdBQUcsQ0FBTCxDQUF2QjtBQUNBLFlBQU1pVSxPQUFPLEdBQUdOLGtEQUFBLENBQWdCRyxJQUFoQixFQUFzQlAsSUFBdEIsRUFBNEJRLE1BQTVCLEVBQW9DQyxVQUFwQyxJQUFrRFAsYUFBbEU7QUFDQWdFLGlCQUFTLElBQUl4RCxPQUFiO0FBQ0g7QUFDSjs7QUFDRDlSLFNBQUssR0FBR3JCLElBQUksQ0FBQzhWLEdBQUwsQ0FBU3pVLEtBQVQsRUFBZ0JzVixTQUFoQixDQUFSO0FBQ0EsV0FBTztBQUNIdFYsV0FBSyxFQUFMQSxLQURHO0FBRUhDLFlBQU0sRUFBTkE7QUFGRyxLQUFQO0FBSUg7O0FBQ0Q4UCxhQUFXLENBQUNzRixnQkFBWixHQUErQkEsZ0JBQS9COztBQUNBLFdBQVNFLGNBQVQsQ0FBd0J2RixNQUF4QixFQUFnQ21CLElBQWhDLEVBQXNDcUUsS0FBdEMsRUFBNkM7QUFDekMsUUFBSUEsS0FBSyxJQUFJckUsSUFBSSxDQUFDclQsTUFBbEIsRUFBMEI7QUFDdEIsYUFBTyxDQUFQO0FBQ0g7O0FBSHdDLFFBSWpDc1QsSUFKaUMsR0FJVDNCLGlCQUpTLENBSWpDMkIsSUFKaUM7QUFBQSxRQUkzQkUsYUFKMkIsR0FJVDdCLGlCQUpTLENBSTNCNkIsYUFKMkI7QUFLekMsUUFBTUssSUFBSSxHQUFHSCwrQ0FBQSxDQUFhL0IsaUJBQWIsQ0FBYjtBQUNBLFFBQUl6UCxLQUFLLEdBQUcsQ0FBWjs7QUFDQSxTQUFLLElBQUluQyxDQUFDLEdBQUcyWCxLQUFiLEVBQW9CM1gsQ0FBQyxHQUFHc1QsSUFBSSxDQUFDclQsTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7QUFDdEMsVUFBTStULE1BQU0sR0FBR1QsSUFBSSxDQUFDdFQsQ0FBRCxDQUFuQjs7QUFDQSxVQUFJK1QsTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDakIsZUFBTzVSLEtBQVA7QUFDSDs7QUFDRCxVQUFNNlIsVUFBVSxHQUFHVixJQUFJLENBQUN0VCxDQUFDLEdBQUcsQ0FBTCxDQUF2QjtBQUNBLFVBQU1pVSxPQUFPLEdBQUdOLGtEQUFBLENBQWdCRyxJQUFoQixFQUFzQlAsSUFBdEIsRUFBNEJRLE1BQTVCLEVBQW9DQyxVQUFwQyxJQUFrRFAsYUFBbEU7QUFDQXRSLFdBQUssSUFBSThSLE9BQVQ7QUFDSDs7QUFDRCxXQUFPOVIsS0FBUDtBQUNIOztBQUNEK1AsYUFBVyxDQUFDd0YsY0FBWixHQUE2QkEsY0FBN0I7QUFDSCxDQTFORCxFQTBOR3hGLFdBQVcsS0FBS0EsV0FBVyxHQUFHLEVBQW5CLENBMU5kLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ08sSUFBTTBDLElBQUksR0FBRyxNQUFiO0FBQ0EsSUFBSTNDLElBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxJQUFWLEVBQWdCO0FBQ2IsV0FBUzJGLE9BQVQsQ0FBaUI1VCxTQUFqQixFQUE0QjtBQUFBLFFBQ2hCc1AsSUFEZ0IsR0FDUHRQLFNBRE8sQ0FDaEJzUCxJQURnQjs7QUFFeEIsUUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUCxhQUFPLEVBQVA7QUFDSDs7QUFDRCxRQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDMUIsYUFBT0EsSUFBUDtBQUNIOztBQUNELFFBQUkvUCxLQUFLLENBQUNDLE9BQU4sQ0FBYzhQLElBQWQsQ0FBSixFQUF5QjtBQUNyQixVQUFJN08sTUFBTSxHQUFHLEVBQWI7O0FBQ0EsV0FBSyxJQUFJekUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3NULElBQUksQ0FBQ3JULE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFlBQU1rWCxLQUFLLEdBQUc1RCxJQUFJLENBQUN0VCxDQUFELENBQWxCOztBQUNBLFlBQUksT0FBT2tYLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDM0J6UyxnQkFBTSxJQUFJeVMsS0FBVjtBQUNILFNBRkQsTUFHSztBQUNEelMsZ0JBQU0sSUFBSXlTLEtBQUssQ0FBQzVELElBQWhCO0FBQ0g7QUFDSjs7QUFDRCxhQUFPN08sTUFBUDtBQUNIOztBQUNELFdBQU8sRUFBUDtBQUNIOztBQUNEd04sTUFBSSxDQUFDMkYsT0FBTCxHQUFlQSxPQUFmOztBQUNBLFdBQVNDLFVBQVQsQ0FBb0I3VCxTQUFwQixFQUErQjtBQUMzQixXQUFPLENBQUNBLFNBQVMsQ0FBQzdCLEtBQVgsSUFBb0IsQ0FBQzZCLFNBQVMsQ0FBQzVCLE1BQXRDO0FBQ0g7O0FBQ0Q2UCxNQUFJLENBQUM0RixVQUFMLEdBQWtCQSxVQUFsQjs7QUFDQSxXQUFTQyxRQUFULENBQWtCOVQsU0FBbEIsRUFBNkI7QUFDekIsV0FBTyxPQUFPQSxTQUFTLENBQUNzUCxJQUFqQixLQUEwQixRQUExQixJQUFzQ3VFLFVBQVUsQ0FBQzdULFNBQUQsQ0FBdkQ7QUFDSDs7QUFDRGlPLE1BQUksQ0FBQzZGLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUNBLFdBQVNDLFdBQVQsQ0FBcUIvVCxTQUFyQixFQUFnQztBQUFBOztBQUM1QixtQ0FBT0EsU0FBUyxDQUFDcVQsU0FBakIsdUVBQThCLElBQTlCO0FBQ0g7O0FBQ0RwRixNQUFJLENBQUM4RixXQUFMLEdBQW1CQSxXQUFuQjs7QUFDQSxXQUFTQyxlQUFULENBQXlCaFUsU0FBekIsRUFBb0NtSyxNQUFwQyxFQUE0QztBQUN4QyxRQUFJNEQsT0FBSjs7QUFDQSxRQUFJRSxJQUFJLENBQUM2RixRQUFMLENBQWM5VCxTQUFkLENBQUosRUFBOEI7QUFDMUIrTixhQUFPLEdBQUdHLHVFQUFBLENBQTZCbE8sU0FBN0IsQ0FBVjtBQUNILEtBRkQsTUFHSztBQUNEK04sYUFBTyxHQUFHRyxpRUFBQSxDQUF1QmxPLFNBQXZCLENBQVY7QUFDSDs7QUFDRCxRQUFJLENBQUMrTixPQUFMLEVBQWM7QUFDVlAsZ0VBQUEsQ0FBbUJyRCxNQUFuQjtBQUNBO0FBQ0g7O0FBWHVDLFFBWWxDaE0sS0Faa0MsR0FZaEI2QixTQVpnQixDQVlsQzdCLEtBWmtDO0FBQUEsUUFZM0JDLE1BWjJCLEdBWWhCNEIsU0FaZ0IsQ0FZM0I1QixNQVoyQjs7QUFheEMsUUFBSSxDQUFDRCxLQUFMLEVBQVk7QUFDUkEsV0FBSyxHQUFHNFAsT0FBTyxDQUFDNVAsS0FBaEI7QUFDSDs7QUFDRCxRQUFJLENBQUNDLE1BQUwsRUFBYTtBQUNUQSxZQUFNLEdBQUcyUCxPQUFPLENBQUMzUCxNQUFqQjtBQUNIOztBQUNELFFBQU01QixDQUFDLEdBQUdvRyxrREFBQSxDQUFXNUMsU0FBWCxFQUFzQjdCLEtBQXRCLENBQVY7QUFDQSxRQUFNMUIsQ0FBQyxHQUFHbUcsa0RBQUEsQ0FBVzVDLFNBQVgsRUFBc0I1QixNQUF0QixDQUFWO0FBQ0ErTCxVQUFNLENBQUMzTixDQUFQLEdBQVdBLENBQVg7QUFDQTJOLFVBQU0sQ0FBQzFOLENBQVAsR0FBV0EsQ0FBWDtBQUNBME4sVUFBTSxDQUFDaE0sS0FBUCxHQUFlQSxLQUFmO0FBQ0FnTSxVQUFNLENBQUMvTCxNQUFQLEdBQWdCQSxNQUFoQjtBQUNIOztBQUNENlAsTUFBSSxDQUFDK0YsZUFBTCxHQUF1QkEsZUFBdkI7QUFDSCxDQWhFRCxFQWdFRy9GLElBQUksS0FBS0EsSUFBSSxHQUFHLEVBQVosQ0FoRVA7O0FBaUVBLElBQU05RCxNQUFNLEdBQUdxRCx1REFBQSxFQUFmO0FBQ08sSUFBSW1ELGFBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxhQUFWLEVBQXlCO0FBQ3RCLFdBQVNyUSxPQUFULENBQWlCZ1AsSUFBakIsRUFBdUJ2UixNQUF2QixFQUErQjtBQUFBLFFBQ25COEksS0FEbUIsR0FDVDlJLE1BQU0sQ0FBQ3lDLFFBREUsQ0FDbkJxRyxLQURtQjtBQUUzQm9ILFFBQUksQ0FBQytGLGVBQUwsQ0FBcUIxRSxJQUFyQixFQUEyQm5GLE1BQTNCO0FBQ0EsV0FBT3FELDBEQUFBLENBQW1CckQsTUFBbkIsRUFBMkJ0RCxLQUEzQixDQUFQO0FBQ0g7O0FBQ0Q4SixlQUFhLENBQUNyUSxPQUFkLEdBQXdCQSxPQUF4Qjs7QUFDQSxXQUFTUyxJQUFULENBQWNoRCxNQUFkLEVBQXNCO0FBQ2xCQSxVQUFNLENBQUNpRCxVQUFQLENBQWtCVixPQUFsQixDQUEwQlcsR0FBMUIsQ0FBOEIyUCxJQUE5QixFQUFvQ3RRLE9BQXBDO0FBQ0g7O0FBQ0RxUSxlQUFhLENBQUM1UCxJQUFkLEdBQXFCQSxJQUFyQjtBQUNILENBWEQsRUFXRzRQLGFBQWEsS0FBS0EsYUFBYSxHQUFHLEVBQXJCLENBWGhCLEU7Ozs7OztVQ3hFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7Ozs7Ozs7Ozs7O0FDRW9CO0FBQytCO0FBQ0Q7QUFHbEQsTUFBTSxNQUFNLEdBQUcsSUFBSSw2REFBWSxFQUFFLENBQUM7QUFFbEMsZ0VBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBRWhDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFFckIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUdoRCxTQUFTLGFBQWEsQ0FBQyxLQUFrQjtJQUN4QyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDWCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDdEIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksOERBQXNCLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUN4RSxDQUFDLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUNsQixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sS0FBSyxDQUFDO0FBQ2QsQ0FBQztBQUdELE1BQU0sSUFBSSxHQUFHLDREQUE0RCxDQUFDO0FBRzFFLE1BQU0sR0FBRyxHQUFjO0lBQ3RCLElBQUksRUFBRSxpREFBUztJQUNmLFFBQVEsRUFBRSxhQUFhLENBQUM7UUFDdkI7WUFDQyxJQUFJLEVBQUUsNENBQUk7WUFDVixJQUFJO1lBQ0osTUFBTSxFQUFFO2dCQUNQLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxFQUFFO2dCQUNSLEtBQUssRUFBRSxRQUFRO2FBQ2Y7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNSO1FBQ1Q7WUFDQyxJQUFJLEVBQUUsNENBQUk7WUFDVixJQUFJO1lBQ0osTUFBTSxFQUFFO2dCQUNQLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxFQUFFO2dCQUNSLEtBQUssRUFBRSxRQUFRO2dCQUNmLE1BQU0sRUFBRSxJQUFJO2FBQ1o7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNSO1FBQ1Q7WUFDQyxJQUFJLEVBQUUsNENBQUk7WUFDVixJQUFJO1lBQ0osTUFBTSxFQUFFO2dCQUNQLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxFQUFFO2dCQUNSLEtBQUssRUFBRSxRQUFRO2dCQUNmLElBQUksRUFBRSxJQUFJO2FBQ1Y7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNSO1FBQ1Q7WUFDQyxJQUFJLEVBQUUsNENBQUk7WUFDVixJQUFJO1lBQ0osTUFBTSxFQUFFO2dCQUNQLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLElBQUksRUFBRSxFQUFFO2dCQUNSLEtBQUssRUFBRSxRQUFRO2FBQ2Y7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNSO1FBQ1Q7WUFDQyxJQUFJLEVBQUUsNENBQUk7WUFDVixJQUFJO1lBQ0osTUFBTSxFQUFFO2dCQUNQLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLElBQUksRUFBRSxFQUFFO2dCQUNSLEtBQUssRUFBRSxRQUFRO2dCQUNmLE1BQU0sRUFBRSxJQUFJO2FBQ1o7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNSO1FBQ1Q7WUFDQyxJQUFJLEVBQUUsNENBQUk7WUFDVixJQUFJO1lBQ0osTUFBTSxFQUFFO2dCQUNQLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLElBQUksRUFBRSxFQUFFO2dCQUNSLEtBQUssRUFBRSxRQUFRO2dCQUNmLElBQUksRUFBRSxJQUFJO2FBQ1Y7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNSO1FBQ1Q7WUFDQyxJQUFJLEVBQUUsNENBQUk7WUFDVixJQUFJO1lBQ0osTUFBTSxFQUFFO2dCQUNQLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxFQUFFO2dCQUNSLEtBQUssRUFBRSxRQUFRO2dCQUNmLEtBQUssRUFBRSxRQUFRO2dCQUNmLGFBQWEsRUFBRSxDQUFDO2dCQUNoQixPQUFPLEVBQUUsQ0FBQzthQUNWO1lBQ0QsTUFBTSxFQUFFLFFBQVE7U0FDUjtLQUNULENBQUM7Q0FDRixDQUFDO0FBR0YsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBDYW52YXNQbGF0Zm9ybSB9IGZyb20gJy4vcGxhdGZvcm0nO1xuZXhwb3J0IGNsYXNzIENhbnZhc0VuZ2luZSBleHRlbmRzIEVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IobW9kdWxlID0ge30pIHtcbiAgICAgICAgbW9kdWxlLlBsYXRmb3JtID0gbW9kdWxlLlBsYXRmb3JtID8/IENhbnZhc1BsYXRmb3JtO1xuICAgICAgICBzdXBlcihtb2R1bGUpO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vcGF0dGVybnMnO1xuZXhwb3J0ICogZnJvbSAnLi9wbGF0Zm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2VuZ2luZSc7XG4iLCJpbXBvcnQgeyBDb2xvclRyYW5zZm9ybSwgTWF0cml4LCBQb2ludCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuY29uc3QgcG9pbnQxID0gUG9pbnQuZW1wdHkoKTtcbmNvbnN0IHBvaW50MiA9IFBvaW50LmVtcHR5KCk7XG5leHBvcnQgdmFyIENhbnZhc1BhdHRlcm5zO1xuKGZ1bmN0aW9uIChDYW52YXNQYXR0ZXJucykge1xuICAgIGZ1bmN0aW9uIGNvbG9yUGF0dGVybihjb2xvciwgYWxwaGEsIGN0KSB7XG4gICAgICAgIGxldCByID0gY29sb3IgPj4gMTYgJiAweGZmO1xuICAgICAgICBsZXQgZyA9IGNvbG9yID4+IDggJiAweGZmO1xuICAgICAgICBsZXQgYiA9IGNvbG9yICYgMHhmZjtcbiAgICAgICAgbGV0IGEgPSBhbHBoYSAqIDB4ZmY7XG4gICAgICAgIGlmICghQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eShjdCkpIHtcbiAgICAgICAgICAgIHIgPSAociAqIGN0LnJlZE11bHRpcGxpZXIgKyBjdC5yZWRPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIGcgPSAoZyAqIGN0LmdyZWVuTXVsdGlwbGllciArIGN0LmdyZWVuT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBiID0gKGIgKiBjdC5ibHVlTXVsdGlwbGllciArIGN0LmJsdWVPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIGEgPSAoYSAqIGN0LmFscGhhTXVsdGlwbGllciArIGN0LmFscGhhT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEgPCAweGZmKSB7XG4gICAgICAgICAgICByZXR1cm4gYHJnYmEoJHtyfSwgJHtnfSwgJHtifSwgJHthIC8gMHhmZn0pYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYHJnYigke3J9LCAke2d9LCAke2J9KWA7XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybiA9IGNvbG9yUGF0dGVybjtcbiAgICBmdW5jdGlvbiBhZGRHcmFkaWVudENvbG9ycyhwYXR0ZXJuLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmdiID0gY29sb3JzW2ldO1xuICAgICAgICAgICAgY29uc3QgYWxwaGEgPSBhbHBoYXNbaV07XG4gICAgICAgICAgICBsZXQgcmF0aW8gPSByYXRpb3NbaV0gLyAweEZGO1xuICAgICAgICAgICAgaWYgKHJhdGlvIDwgMClcbiAgICAgICAgICAgICAgICByYXRpbyA9IDA7XG4gICAgICAgICAgICBpZiAocmF0aW8gPiAxKVxuICAgICAgICAgICAgICAgIHJhdGlvID0gMTtcbiAgICAgICAgICAgIHBhdHRlcm4uYWRkQ29sb3JTdG9wKHJhdGlvLCBjb2xvclBhdHRlcm4ocmdiLCBhbHBoYSwgY29sb3JUcmFuc2Zvcm0pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5hZGRHcmFkaWVudENvbG9ycyA9IGFkZEdyYWRpZW50Q29sb3JzO1xuICAgIGZ1bmN0aW9uIHJhZGlhbEdyYWRpZW50UGF0dGVybihtYXRyaXgsIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgICAgIHBvaW50MS54ID0gMTYzOC40O1xuICAgICAgICBwb2ludDEueSA9IDA7XG4gICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHBvaW50MSwgcG9pbnQxKTtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQobWF0cml4LnR4LCBtYXRyaXgudHksIDAsIG1hdHJpeC50eCwgbWF0cml4LnR5LCBNYXRoLmFicygocG9pbnQxLnggLSBtYXRyaXgudHgpIC8gMikpO1xuICAgICAgICBhZGRHcmFkaWVudENvbG9ycyhwYXR0ZXJuLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5yYWRpYWxHcmFkaWVudFBhdHRlcm4gPSByYWRpYWxHcmFkaWVudFBhdHRlcm47XG4gICAgZnVuY3Rpb24gbGluZWFyR3JhZGllbnRQYXR0ZXJuKG1hdHJpeCwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgICAgICAgcG9pbnQxLnggPSAtODE5LjI7XG4gICAgICAgIHBvaW50MS55ID0gMDtcbiAgICAgICAgcG9pbnQyLnggPSA4MTkuMjtcbiAgICAgICAgcG9pbnQyLnkgPSAwO1xuICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludDEsIHBvaW50MSk7XG4gICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHBvaW50MiwgcG9pbnQyKTtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IGNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQocG9pbnQxLngsIHBvaW50MS55LCBwb2ludDIueCwgcG9pbnQyLnkpO1xuICAgICAgICBhZGRHcmFkaWVudENvbG9ycyhwYXR0ZXJuLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5saW5lYXJHcmFkaWVudFBhdHRlcm4gPSBsaW5lYXJHcmFkaWVudFBhdHRlcm47XG4gICAgZnVuY3Rpb24gYml0bWFwUGF0dGVybihpbWFnZSwgcmVwZWF0LCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVBhdHRlcm4oaW1hZ2UsIHJlcGVhdCA/ICdyZXBlYXQnIDogJ25vbmUnKTtcbiAgICAgICAgaWYgKHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMuYml0bWFwUGF0dGVybiA9IGJpdG1hcFBhdHRlcm47XG59KShDYW52YXNQYXR0ZXJucyB8fCAoQ2FudmFzUGF0dGVybnMgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAamVuZy9jb3JlJztcbmV4cG9ydCBjbGFzcyBDYW52YXNQbGF0Zm9ybSBleHRlbmRzIFBsYXRmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbdGhpcy52aWV3LmdldENvbnRleHQoJzJkJyldO1xuICAgICAgICB0aGlzLmN1c3RvbUNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRzW3RoaXMuY29udGV4dHMubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIHNhdmVDb250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICByZXN0b3JlQ29udGV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0cy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmRlYnVnLndhcm5pbmcoJ1RyeWluZyB0byByZXN0b3JlIG1haW4gY29udGV4dCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUN1c3RvbUNvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0O1xuICAgICAgICBpZiAodGhpcy5jdXN0b21Db250ZXh0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmN1c3RvbUNvbnRleHRzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnZpZXc7XG4gICAgICAgIGlmIChjb250ZXh0LmNhbnZhcy53aWR0aCAhPT0gd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRleHQuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgICBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIGRlc3Ryb3lDdXN0b21Db250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jdXN0b21Db250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICBiZWdpbigpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgpO1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB2aWV3LndpZHRoLCB2aWV3LmhlaWdodCk7XG4gICAgfVxuICAgIHVwZGF0ZVNpemUoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbmdpbmUuc2NyZWVuLmdldFdpZHRoKCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRIZWlnaHQoKTtcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIGNvbnN0IHZpZXdXaWR0aCA9IE1hdGguZmxvb3Iod2lkdGggKiBwaXhlbFJhdGlvKTtcbiAgICAgICAgY29uc3Qgdmlld0hlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgaWYgKHZpZXcud2lkdGggIT09IHZpZXdXaWR0aCB8fCB2aWV3LmhlaWdodCAhPT0gdmlld0hlaWdodCkge1xuICAgICAgICAgICAgdmlldy53aWR0aCA9IHZpZXdXaWR0aDtcbiAgICAgICAgICAgIHZpZXcuaGVpZ2h0ID0gdmlld0hlaWdodDtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ09OVEFJTkVSID0gJ2NvbnRhaW5lcic7XG5leHBvcnQgdmFyIENvbnRhaW5lcjtcbihmdW5jdGlvbiAoQ29udGFpbmVyKSB7XG4gICAgZnVuY3Rpb24gbnVtQ2hpbGRyZW4oY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbik7XG4gICAgICAgICAgICByZXR1cm4ga2V5cy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIENvbnRhaW5lci5udW1DaGlsZHJlbiA9IG51bUNoaWxkcmVuO1xufSkoQ29udGFpbmVyIHx8IChDb250YWluZXIgPSB7fSkpO1xuZXhwb3J0IHZhciBDb250YWluZXJFeHRlbnNpb247XG4oZnVuY3Rpb24gKENvbnRhaW5lckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgcmVuZGVyZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgcmVuZGVyZXIuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlcmVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHVwZGF0ZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBwb2ludGVyczogcG9pbnRlckV2ZW50cyB9ID0gZW5naW5lO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBwb2ludGVyRXZlbnRzLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHMuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcG9pbnRlckV2ZW50cy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwb2ludGVyRXZlbnRzLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBrZXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50ZXJFdmVudHMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBsb2FkaW5nIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgbG9hZGluZy5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gbG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzICs9IGNvbXBvbmVudENvbnRleHQucHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudENvbnRleHQubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzIC89IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBsb2FkaW5nLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGNvbXBvbmVudENvbnRleHQubG9hZGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgKz0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50Q29udGV4dC5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgLz0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvYWRpbmcuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5zZXQoQ09OVEFJTkVSLCB1cGRhdGUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KENPTlRBSU5FUiwgcmVuZGVyKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoQ09OVEFJTkVSLCBoaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChDT05UQUlORVIsIGxvYWRlZCk7XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENvbnRhaW5lckV4dGVuc2lvbiB8fCAoQ29udGFpbmVyRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IENvbnRhaW5lckV4dGVuc2lvbiB9IGZyb20gJy4vY29udGFpbmVyJztcbmV4cG9ydCBjb25zdCBMT0FERVIgPSAnbG9hZGVyJztcbmV4cG9ydCB2YXIgTG9hZGVyO1xuKGZ1bmN0aW9uIChMb2FkZXIpIHtcbiAgICBmdW5jdGlvbiBnZXRMb2FkaW5nUHJvZ3Jlc3MobG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZGluZ1Byb2dyZXNzID8/IDA7XG4gICAgfVxuICAgIExvYWRlci5nZXRMb2FkaW5nUHJvZ3Jlc3MgPSBnZXRMb2FkaW5nUHJvZ3Jlc3M7XG4gICAgZnVuY3Rpb24gaXNMb2FkZWQobG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZGVkID8/IGZhbHNlO1xuICAgIH1cbiAgICBMb2FkZXIuaXNMb2FkZWQgPSBpc0xvYWRlZDtcbiAgICBmdW5jdGlvbiBuZWVkTG9hZGluZ0NoZWNrKGxvYWRlcikge1xuICAgICAgICByZXR1cm4gbG9hZGVyLmxvYWRpbmdDaGVjayA/PyB0cnVlO1xuICAgIH1cbiAgICBMb2FkZXIubmVlZExvYWRpbmdDaGVjayA9IG5lZWRMb2FkaW5nQ2hlY2s7XG59KShMb2FkZXIgfHwgKExvYWRlciA9IHt9KSk7XG5leHBvcnQgdmFyIExvYWRlckV4dGVuc2lvbjtcbihmdW5jdGlvbiAoTG9hZGVyRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGxvYWRlciwgZW5naW5lKSB7XG4gICAgICAgIGlmICghTG9hZGVyLm5lZWRMb2FkaW5nQ2hlY2sobG9hZGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIENvbnRhaW5lckV4dGVuc2lvbi5sb2FkZWQobG9hZGVyLCBlbmdpbmUpO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLmxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICBsb2FkZXIubG9hZGluZ1Byb2dyZXNzID0gY29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgaWYgKGNvbnRleHQubG9hZGVkICYmICFsb2FkZXIubG9hZGVkKSB7XG4gICAgICAgICAgICBsb2FkZXIubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChsb2FkZXIub25Mb2FkZWQpIHtcbiAgICAgICAgICAgICAgICBsb2FkZXIub25Mb2FkZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBMb2FkZXJFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5zZXQoTE9BREVSLCBDb250YWluZXJFeHRlbnNpb24udXBkYXRlKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChMT0FERVIsIENvbnRhaW5lckV4dGVuc2lvbi5yZW5kZXIpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChMT0FERVIsIENvbnRhaW5lckV4dGVuc2lvbi5oaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChMT0FERVIsIGxvYWRlZCk7XG4gICAgfVxuICAgIExvYWRlckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKExvYWRlckV4dGVuc2lvbiB8fCAoTG9hZGVyRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vZmVhdHVyZXMvcmVuZGVyZXInO1xuaW1wb3J0IHsgVXBkYXRlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3VwZGF0ZXInO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4uL2ZlYXR1cmVzL2xvYWRpbmcnO1xuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi4vZmVhdHVyZXMvc2NyZWVuJztcbmltcG9ydCB7IFBvaW50ZXJzIH0gZnJvbSAnLi4vZmVhdHVyZXMvcG9pbnRlcnMnO1xuaW1wb3J0IHsgVGlja2VyIH0gZnJvbSAnLi4vZmVhdHVyZXMvdGlja2VyJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vZmVhdHVyZXMvcGxhdGZvcm0nO1xuaW1wb3J0IHsgQ29udGFpbmVyRXh0ZW5zaW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IHsgRGVidWcgfSBmcm9tICcuLi9mZWF0dXJlcy9kZWJ1Zyc7XG5pbXBvcnQgeyBSZXNvdXJjZXMgfSBmcm9tICcuLi9mZWF0dXJlcy9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4uL2ZlYXR1cmVzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkZXInO1xuZXhwb3J0IGNsYXNzIEVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IobW9kdWxlID0ge30pIHtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDMyO1xuICAgICAgICBtb2R1bGUuQ29tcG9uZW50cyA9IG1vZHVsZS5Db21wb25lbnRzID8/IENvbXBvbmVudHM7XG4gICAgICAgIG1vZHVsZS5TY3JlZW4gPSBtb2R1bGUuU2NyZWVuID8/IFNjcmVlbjtcbiAgICAgICAgbW9kdWxlLlBsYXRmb3JtID0gbW9kdWxlLlBsYXRmb3JtID8/IFBsYXRmb3JtO1xuICAgICAgICBtb2R1bGUuVXBkYXRlciA9IG1vZHVsZS5VcGRhdGVyID8/IFVwZGF0ZXI7XG4gICAgICAgIG1vZHVsZS5Mb2FkaW5nID0gbW9kdWxlLkxvYWRpbmcgPz8gTG9hZGluZztcbiAgICAgICAgbW9kdWxlLlJlbmRlcmVyID0gbW9kdWxlLlJlbmRlcmVyID8/IFJlbmRlcmVyO1xuICAgICAgICBtb2R1bGUuUG9pbnRlcnMgPSBtb2R1bGUuUG9pbnRlcnMgPz8gUG9pbnRlcnM7XG4gICAgICAgIG1vZHVsZS5UaWNrZXIgPSBtb2R1bGUuVGlja2VyID8/IFRpY2tlcjtcbiAgICAgICAgbW9kdWxlLkRlYnVnID0gbW9kdWxlLkRlYnVnID8/IERlYnVnO1xuICAgICAgICBtb2R1bGUuUmVzb3VyY2VzID0gbW9kdWxlLlJlc291cmNlcyA/PyBSZXNvdXJjZXM7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBtb2R1bGUuQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBtb2R1bGUuU2NyZWVuKCk7XG4gICAgICAgIHRoaXMucGxhdGZvcm0gPSBuZXcgbW9kdWxlLlBsYXRmb3JtKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZXIgPSBuZXcgbW9kdWxlLlVwZGF0ZXIodGhpcyk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IG5ldyBtb2R1bGUuTG9hZGluZyh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBtb2R1bGUuUmVuZGVyZXIodGhpcyk7XG4gICAgICAgIHRoaXMucG9pbnRlcnMgPSBuZXcgbW9kdWxlLlBvaW50ZXJzKHRoaXMpO1xuICAgICAgICB0aGlzLnRpY2tlciA9IG5ldyBtb2R1bGUuVGlja2VyKHRoaXMpO1xuICAgICAgICB0aGlzLmRlYnVnID0gbmV3IG1vZHVsZS5EZWJ1ZygpO1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IG5ldyBtb2R1bGUuUmVzb3VyY2VzKHRoaXMpO1xuICAgICAgICBDb250YWluZXJFeHRlbnNpb24uaW5pdCh0aGlzKTtcbiAgICAgICAgTG9hZGVyRXh0ZW5zaW9uLmluaXQodGhpcyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB9XG59XG4iLCJleHBvcnQgdmFyIERpc3BsYXk7XG4oZnVuY3Rpb24gKERpc3BsYXkpIHtcbiAgICBmdW5jdGlvbiBpc1Zpc2libGUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQudmlzaWJsZSA/PyB0cnVlO1xuICAgIH1cbiAgICBEaXNwbGF5LmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbn0pKERpc3BsYXkgfHwgKERpc3BsYXkgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBQaXZvdDtcbihmdW5jdGlvbiAoUGl2b3QpIHtcbiAgICBmdW5jdGlvbiBnZXRYKHBpdm90LCB3aWR0aCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WCB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFgpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RYICogd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFggPSBnZXRYO1xuICAgIGZ1bmN0aW9uIGdldFkocGl2b3QsIGhlaWdodCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WSB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFkpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RZICogaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBQaXZvdC5nZXRZID0gZ2V0WTtcbiAgICBmdW5jdGlvbiBoYXNWYWx1ZXMocGl2b3QpIHtcbiAgICAgICAgY29uc3QgeyBwaXZvdFgsIHBpdm90WSB9ID0gcGl2b3Q7XG4gICAgICAgIHJldHVybiAhIXBpdm90WCB8fCAhIXBpdm90WTtcbiAgICB9XG4gICAgUGl2b3QuaGFzVmFsdWVzID0gaGFzVmFsdWVzO1xufSkoUGl2b3QgfHwgKFBpdm90ID0ge30pKTtcbiIsImNvbnN0IGhhbmRsZXJzTWFwID0ge1xuICAgIHBvaW50ZXJEb3duOiAnb25Qb2ludGVyRG93bicsXG4gICAgcG9pbnRlclVwOiAnb25Qb2ludGVyVXAnLFxuICAgIHBvaW50ZXJNb3ZlOiAnb25Qb2ludGVyTW92ZScsXG4gICAgcG9pbnRlck92ZXI6ICdvblBvaW50ZXJPdmVyJyxcbiAgICBwb2ludGVyT3V0OiAnb25Qb2ludGVyT3V0Jyxcbn07XG5leHBvcnQgdmFyIFBvaW50ZXI7XG4oZnVuY3Rpb24gKFBvaW50ZXIpIHtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJPdmVyKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuICEhcG9pbnRlci5wb2ludGVyT3ZlcjtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJPdmVyID0gaXNQb2ludGVyT3ZlcjtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJFbmFibGVkKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50ZXIucG9pbnRlckVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkID0gaXNQb2ludGVyRW5hYmxlZDtcbiAgICBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KHBvaW50ZXIsIHR5cGUsIHgsIHksIGlkKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJOYW1lID0gaGFuZGxlcnNNYXBbdHlwZV07XG4gICAgICAgIGlmIChoYW5kbGVyTmFtZSAmJiBwb2ludGVyW2hhbmRsZXJOYW1lXSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZSwgeCwgeSwgaWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcG9pbnRlcltoYW5kbGVyTmFtZV0oZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG59KShQb2ludGVyIHx8IChQb2ludGVyID0ge30pKTtcbiIsImV4cG9ydCB2YXIgVHJhbnNmb3JtO1xuKGZ1bmN0aW9uIChUcmFuc2Zvcm0pIHtcbiAgICBmdW5jdGlvbiBnZXRNYXRyaXgodHJhbnNmb3JtLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKG1hdHJpeCkge1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBtYXRyaXguYSA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSBtYXRyaXguYiA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSBtYXRyaXguYyA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBtYXRyaXguZCA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gbWF0cml4LnR4ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQudHkgPSBtYXRyaXgudHkgPz8gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvdGF0aW9uIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHRyYW5zZm9ybS5zY2FsZVggPz8gdHJhbnNmb3JtLnNjYWxlID8/IDE7XG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IHRyYW5zZm9ybS5zY2FsZVkgPz8gdHJhbnNmb3JtLnNjYWxlID8/IDE7XG4gICAgICAgIHJlc3VsdC50eCA9IHRyYW5zZm9ybS54ID8/IDA7XG4gICAgICAgIHJlc3VsdC50eSA9IHRyYW5zZm9ybS55ID8/IDA7XG4gICAgICAgIGlmIChyb3RhdGlvbikge1xuICAgICAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3Mocm90YXRpb24pO1xuICAgICAgICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW4ocm90YXRpb24pO1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBjb3MgKiBzY2FsZVg7XG4gICAgICAgICAgICByZXN1bHQuYiA9IHNpbiAqIHNjYWxlWDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gLXNpbiAqIHNjYWxlWTtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gY29zICogc2NhbGVZO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hID0gc2NhbGVYO1xuICAgICAgICByZXN1bHQuYiA9IDA7XG4gICAgICAgIHJlc3VsdC5jID0gMDtcbiAgICAgICAgcmVzdWx0LmQgPSBzY2FsZVk7XG4gICAgfVxuICAgIFRyYW5zZm9ybS5nZXRNYXRyaXggPSBnZXRNYXRyaXg7XG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JUcmFuc2Zvcm0odHJhbnNmb3JtLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0ucmVkTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmFscGhhT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0ucmVkT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5ncmVlbk9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5ibHVlT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxwaGEgPSB0cmFuc2Zvcm0uYWxwaGEgPz8gMTtcbiAgICAgICAgY29uc3QgeyB0aW50IH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmICh0aW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IGNvbG9yID0gMCwgdmFsdWUgPSAxIH0gPSB0aW50O1xuICAgICAgICAgICAgY29uc3QgdmFsdWVJbnZlcnRlZCA9IDEgLSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHIgPSAoY29sb3IgPj4gMTYpICYgMHhmZjtcbiAgICAgICAgICAgIGNvbnN0IGcgPSAoY29sb3IgPj4gOCkgJiAweGZmO1xuICAgICAgICAgICAgY29uc3QgYiA9IGNvbG9yICYgMHhmZjtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYTtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gciAqIHZhbHVlO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gZyAqIHZhbHVlO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBiICogdmFsdWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHsgYnJpZ2h0bmVzcyB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAoYnJpZ2h0bmVzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoYnJpZ2h0bmVzcyA+IDEpIHtcbiAgICAgICAgICAgICAgICBicmlnaHRuZXNzID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGJyaWdodG5lc3MgPCAtMSkge1xuICAgICAgICAgICAgICAgIGJyaWdodG5lc3MgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSAxIC0gTWF0aC5hYnMoYnJpZ2h0bmVzcyk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIGlmIChicmlnaHRuZXNzID4gMCkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IGJyaWdodG5lc3MgKiAyNTU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGE7XG4gICAgICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHBlcmNlbnQ7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gcGVyY2VudDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IHBlcmNlbnQ7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYTtcbiAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSAxO1xuICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldENvbG9yVHJhbnNmb3JtID0gZ2V0Q29sb3JUcmFuc2Zvcm07XG59KShUcmFuc2Zvcm0gfHwgKFRyYW5zZm9ybSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFVwZGF0ZTtcbihmdW5jdGlvbiAoVXBkYXRlKSB7XG4gICAgZnVuY3Rpb24gaXNFbmFibGVkKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgVXBkYXRlLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29tcG9uZW50LCB0aW1lKSB7XG4gICAgICAgIGlmIChjb21wb25lbnQub25VcGRhdGUpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5vblVwZGF0ZSh0aW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBVcGRhdGUudXBkYXRlID0gdXBkYXRlO1xufSkoVXBkYXRlIHx8IChVcGRhdGUgPSB7fSkpO1xuIiwiZXhwb3J0IGNsYXNzIENvbXBvbmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVuZGVyID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5oaXRUZXN0ID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IG5ldyBNYXAoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRGVidWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy53YXJuaW5ncyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICB9XG4gICAgZXJyb3IoLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLmVycm9ycy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMuZXJyb3JzLnNldChpZCwgY291bnQpO1xuICAgIH1cbiAgICB3YXJuaW5nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy53YXJuaW5ncy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgdGhpcy53YXJuaW5ncy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChyb290KTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIH1cbiAgICBiZWdpbigpIHtcbiAgICB9XG4gICAgZW5kKCkge1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1hdHJpeCwgUG9pbnQgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuLi9leHRlbnNpb25zL2Rpc3BsYXknO1xuaW1wb3J0IHsgUG9pbnRlciB9IGZyb20gJy4uL2V4dGVuc2lvbnMvcG9pbnRlcic7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9leHRlbnNpb25zL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBQb2ludGVycyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nbG9iYWwgPSBQb2ludC5lbXB0eSgpO1xuICAgICAgICB0aGlzLmxvY2FsID0gUG9pbnQuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5wb2ludGVySWQgPSAwO1xuICAgICAgICB0aGlzLnBvaW50ZXJUeXBlID0gJ3BvaW50ZXJEb3duJztcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBtYXRyaXg6IE1hdHJpeC5lbXB0eSgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICBkaXNwYXRjaCh0eXBlLCB4LCB5LCBpZCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9jYWwueCA9IHg7XG4gICAgICAgIHRoaXMubG9jYWwueSA9IHk7XG4gICAgICAgIHRoaXMuZ2xvYmFsLnggPSB4O1xuICAgICAgICB0aGlzLmdsb2JhbC55ID0geTtcbiAgICAgICAgdGhpcy5wb2ludGVySWQgPSBpZDtcbiAgICAgICAgdGhpcy5wb2ludGVyVHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIE1hdHJpeC5zZXRFbXB0eShiYXNlLm1hdHJpeCk7XG4gICAgICAgIHRoaXMuZGVwdGgrKztcbiAgICAgICAgdGhpcy5kaXNwYXRjaENvbXBvbmVudChyb290LCBiYXNlKTtcbiAgICB9XG4gICAgZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBwYXJlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghRGlzcGxheS5pc1Zpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICBUcmFuc2Zvcm0uZ2V0TWF0cml4KGNvbXBvbmVudCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICAgICAgTWF0cml4LmNvbmNhdChwYXJlbnQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybUludmVyc2VQb2ludChjb250ZXh0Lm1hdHJpeCwgdGhpcy5nbG9iYWwsIHRoaXMubG9jYWwpO1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmxvY2FsO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCB0aGlzLnBvaW50ZXJUeXBlLCB4LCB5LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludGVyVHlwZSA9PT0gJ3BvaW50ZXJNb3ZlJykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgIWNvbXBvbmVudC5wb2ludGVyT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCAncG9pbnRlck92ZXInLCB4LCB5LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFyZXN1bHQgJiYgY29tcG9uZW50LnBvaW50ZXJPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3V0JywgeCwgeSwgdGhpcy5wb2ludGVySWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnQucG9pbnRlck92ZXIgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb2xvclRyYW5zZm9ybSwgTWF0cml4IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy9kaXNwbGF5JztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdHJhbnNmb3JtJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBtYXRyaXg6IE1hdHJpeC5lbXB0eSgpLFxuICAgICAgICAgICAgICAgIGNvbG9yVHJhbnNmb3JtOiBDb2xvclRyYW5zZm9ybS5lbXB0eSgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICByZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBwYXJlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghRGlzcGxheS5pc1Zpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgVHJhbnNmb3JtLmdldENvbG9yVHJhbnNmb3JtKGNvbXBvbmVudCwgY29udGV4dC5jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIE1hdHJpeC5jb25jYXQocGFyZW50Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgQ29sb3JUcmFuc2Zvcm0uY29uY2F0KHBhcmVudC5jb2xvclRyYW5zZm9ybSwgY29udGV4dC5jb2xvclRyYW5zZm9ybSwgY29udGV4dC5jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMuZW5naW5lLnBsYXRmb3JtLmJlZ2luKCk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuZGVwdGgrKztcbiAgICAgICAgTWF0cml4LmNvcHkodGhpcy5lbmdpbmUuc2NyZWVuLmdldE1hdHJpeCgpLCBiYXNlLm1hdHJpeCk7XG4gICAgICAgIENvbG9yVHJhbnNmb3JtLnNldEVtcHR5KGJhc2UuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudChyb290LCBiYXNlKTtcbiAgICAgICAgdGhpcy5lbmdpbmUucGxhdGZvcm0uZW5kKCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCB2YXIgUmVzb3VyY2U7XG4oZnVuY3Rpb24gKFJlc291cmNlKSB7XG4gICAgZnVuY3Rpb24gZ2V0UHJvZ3Jlc3MocmVzb3VyY2UpIHtcbiAgICAgICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc291cmNlLmxvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc291cmNlLmJ5dGVzVG90YWwgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2UuYnl0ZXNMb2FkZWQgLyByZXNvdXJjZS5ieXRlc1RvdGFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBSZXNvdXJjZS5nZXRQcm9ncmVzcyA9IGdldFByb2dyZXNzO1xufSkoUmVzb3VyY2UgfHwgKFJlc291cmNlID0ge30pKTtcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZXMgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVzb2x2ZXJzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBnZXQoYXNzZXQpIHtcbiAgICAgICAgaWYgKCFhc3NldCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc291cmNlID0gdGhpcy5yZXNvdXJjZXMuZ2V0KGFzc2V0KTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICAgICAgcmVzb3VyY2UgPSB0aGlzLnJlc29sdmUoYXNzZXQpO1xuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXMuc2V0KGFzc2V0LCByZXNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgIH1cbiAgICByZXNvbHZlKGFzc2V0KSB7XG4gICAgICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gcmVzb2x2ZXIoYXNzZXQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBSZXNvdXJjZSBub3QgcmVzb2x2ZWQ6ICR7YXNzZXR9YCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1hdHJpeCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuZXhwb3J0IGNsYXNzIFNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSA0MDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDAwO1xuICAgICAgICB0aGlzLnBpeGVsUmF0aW8gPSAwO1xuICAgICAgICB0aGlzLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXRyaXggPSBNYXRyaXguZW1wdHkoKTtcbiAgICB9XG4gICAgZ2V0TWF0cml4KCkge1xuICAgICAgICBjb25zdCBwaXhlbFJhdGlvID0gdGhpcy5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIHRoaXMubWF0cml4LmEgPSBwaXhlbFJhdGlvO1xuICAgICAgICB0aGlzLm1hdHJpeC5kID0gcGl4ZWxSYXRpbztcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICAgIH1cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVsbHNjcmVlbiA/IHdpbmRvdy5pbm5lcldpZHRoIDogdGhpcy53aWR0aDtcbiAgICB9XG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuID8gd2luZG93LmlubmVySGVpZ2h0IDogdGhpcy5oZWlnaHQ7XG4gICAgfVxuICAgIGdldFBpeGVsUmF0aW8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpeGVsUmF0aW8gPiAwID8gdGhpcy5waXhlbFJhdGlvIDogd2luZG93LmRldmljZVBpeGVsUmF0aW8gPz8gMTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGlja2VyIHtcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICAgICAgdGhpcy5mcmFtZVJhdGUgPSAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnVwZGF0ZXIudXBkYXRlKHRpbWUpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUubG9hZGluZy51cGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlbmRlcmVyLnJlbmRlcigpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZUZyYW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IChjdXJyZW50VGltZSAtIHRoaXMudGltZSkgLyAxMDAwO1xuICAgICAgICAgICAgdGhpcy50aW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOZXh0RnJhbWUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgfVxuICAgIGdldCBpc1BhdXNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGF1c2VkO1xuICAgIH1cbiAgICBwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmV4dEZyYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHVwZGF0ZU5leHRGcmFtZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlRnJhbWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFVwZGF0ZSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdXBkYXRlJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFVwZGF0ZXIgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQocm9vdCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG4gICAgdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFVcGRhdGUuaXNFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoY29tcG9uZW50KTtcbiAgICAgICAgVXBkYXRlLnVwZGF0ZShjb21wb25lbnQsIHRoaXMudGltZSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVQcm9wZXJ0aWVzKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnByb3BlcnRpZXMuZm9yRWFjaCgoaGFuZGxlciwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRbcHJvcGVydHldKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9sb2FkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2VuZ2luZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL2NvbXBvbmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9kZWJ1Zyc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3BsYXRmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcG9pbnRlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9yZW5kZXJlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3Jlc291cmNlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3NjcmVlbic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3RpY2tlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3VwZGF0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pbnB1dC9tb3VzZSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvZGlzcGxheSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvcGl2b3QnO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3NvdXJjZSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvdHJhbnNmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy91cGRhdGUnO1xuIiwiZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCB0eXBlKSB7XG4gICAgY29uc3QgeyB2aWV3IH0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgY29uc3QgY2xpZW50UmVjdCA9IHZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSBjbGllbnRSZWN0LmxlZnQgLSB2aWV3LmNsaWVudExlZnQ7XG4gICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSBjbGllbnRSZWN0LnRvcCAtIHZpZXcuY2xpZW50VG9wO1xuICAgIGVuZ2luZS5wb2ludGVycy5kaXNwYXRjaCh0eXBlLCB4LCB5LCAwKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZXhwb3J0IHZhciBNb3VzZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoTW91c2VFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJEb3duJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJVcCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJNb3ZlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBNb3VzZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKE1vdXNlRXh0ZW5zaW9uIHx8IChNb3VzZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIEJvdW5kcztcbihmdW5jdGlvbiAoQm91bmRzKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtaW5YOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWluWTogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG1heFg6IE51bWJlci5NSU5fVkFMVUUsXG4gICAgICAgICAgICBtYXhZOiBOdW1iZXIuTUlOX1ZBTFVFLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBCb3VuZHMuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShib3VuZHMpIHtcbiAgICAgICAgYm91bmRzLm1pblggPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWluWSA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGJvdW5kcy5tYXhYID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1heFkgPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgIH1cbiAgICBCb3VuZHMuc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KGJvdW5kcykge1xuICAgICAgICByZXR1cm4gYm91bmRzLm1pblggPT09IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5taW5ZID09PSBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWF4WCA9PT0gTnVtYmVyLk1JTl9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1heFkgPT09IE51bWJlci5NSU5fVkFMVUU7XG4gICAgfVxuICAgIEJvdW5kcy5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiB0b1JlY3RhbmdsZShib3VuZHMsIHJlY3RhbmdsZSkge1xuICAgICAgICBjb25zdCB7IG1pblgsIG1pblksIG1heFgsIG1heFksIH0gPSBib3VuZHM7XG4gICAgICAgIHJlY3RhbmdsZS54ID0gbWluWDtcbiAgICAgICAgcmVjdGFuZ2xlLnkgPSBtaW5ZO1xuICAgICAgICByZWN0YW5nbGUud2lkdGggPSBtYXhYIC0gbWluWDtcbiAgICAgICAgcmVjdGFuZ2xlLmhlaWdodCA9IG1heFkgLSBtaW5ZO1xuICAgIH1cbiAgICBCb3VuZHMudG9SZWN0YW5nbGUgPSB0b1JlY3RhbmdsZTtcbiAgICBmdW5jdGlvbiB0ZXN0WChib3VuZHMsIHgpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0WCA9IHRlc3RYO1xuICAgIGZ1bmN0aW9uIHRlc3RZKGJvdW5kcywgeSkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RZID0gdGVzdFk7XG4gICAgZnVuY3Rpb24gdGVzdChib3VuZHMsIHgsIHkpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdCA9IHRlc3Q7XG4gICAgZnVuY3Rpb24gdGVzdFBvaW50KGJvdW5kcywgcG9pbnQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFBvaW50ID0gdGVzdFBvaW50O1xufSkoQm91bmRzIHx8IChCb3VuZHMgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBDb2xvclRyYW5zZm9ybTtcbihmdW5jdGlvbiAoQ29sb3JUcmFuc2Zvcm0pIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFscGhhTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIHJlZE11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBncmVlbk11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBibHVlTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGFscGhhT2Zmc2V0OiAwLFxuICAgICAgICAgICAgcmVkT2Zmc2V0OiAwLFxuICAgICAgICAgICAgZ3JlZW5PZmZzZXQ6IDAsXG4gICAgICAgICAgICBibHVlT2Zmc2V0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkoY3QpIHtcbiAgICAgICAgcmV0dXJuIGN0LnJlZE11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmdyZWVuTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmFscGhhTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYmx1ZU9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHlXaXRoQWxwaGEoY3QpIHtcbiAgICAgICAgcmV0dXJuIGN0LnJlZE11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmdyZWVuTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LnJlZE9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5PZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmJsdWVPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmFscGhhT2Zmc2V0ID09PSAwO1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5pc0VtcHR5V2l0aEFscGhhID0gaXNFbXB0eVdpdGhBbHBoYTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShjdCkge1xuICAgICAgICBjdC5yZWRNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuZ3JlZW5NdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuYmx1ZU11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5hbHBoYU11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5yZWRPZmZzZXQgPSAwO1xuICAgICAgICBjdC5ncmVlbk9mZnNldCA9IDA7XG4gICAgICAgIGN0LmJsdWVPZmZzZXQgPSAwO1xuICAgICAgICBjdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gY29weShmcm9tLCB0bykge1xuICAgICAgICB0by5hbHBoYU11bHRpcGxpZXIgPSBmcm9tLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgdG8ucmVkTXVsdGlwbGllciA9IGZyb20ucmVkTXVsdGlwbGllcjtcbiAgICAgICAgdG8uZ3JlZW5NdWx0aXBsaWVyID0gZnJvbS5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIHRvLmJsdWVNdWx0aXBsaWVyID0gZnJvbS5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgdG8uYWxwaGFPZmZzZXQgPSBmcm9tLmFscGhhT2Zmc2V0O1xuICAgICAgICB0by5yZWRPZmZzZXQgPSBmcm9tLnJlZE9mZnNldDtcbiAgICAgICAgdG8uZ3JlZW5PZmZzZXQgPSBmcm9tLmdyZWVuT2Zmc2V0O1xuICAgICAgICB0by5ibHVlT2Zmc2V0ID0gZnJvbS5ibHVlT2Zmc2V0O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBjb25jYXQoY3QxLCBjdDAsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCBhbHBoYU11bHRpcGxpZXIgPSBjdDEuYWxwaGFNdWx0aXBsaWVyICogY3QwLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgcmVkTXVsdGlwbGllciA9IGN0MS5yZWRNdWx0aXBsaWVyICogY3QwLnJlZE11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGdyZWVuTXVsdGlwbGllciA9IGN0MS5ncmVlbk11bHRpcGxpZXIgKiBjdDAuZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBibHVlTXVsdGlwbGllciA9IGN0MS5ibHVlTXVsdGlwbGllciAqIGN0MC5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgYWxwaGFPZmZzZXQgPSBjdDEuYWxwaGFNdWx0aXBsaWVyICogY3QwLmFscGhhT2Zmc2V0ICsgY3QxLmFscGhhT2Zmc2V0O1xuICAgICAgICBjb25zdCByZWRPZmZzZXQgPSBjdDEucmVkTXVsdGlwbGllciAqIGN0MC5yZWRPZmZzZXQgKyBjdDEucmVkT2Zmc2V0O1xuICAgICAgICBjb25zdCBncmVlbk9mZnNldCA9IGN0MS5ncmVlbk11bHRpcGxpZXIgKiBjdDAuZ3JlZW5PZmZzZXQgKyBjdDEuZ3JlZW5PZmZzZXQ7XG4gICAgICAgIGNvbnN0IGJsdWVPZmZzZXQgPSBjdDEuYmx1ZU11bHRpcGxpZXIgKiBjdDAuYmx1ZU9mZnNldCArIGN0MS5ibHVlT2Zmc2V0O1xuICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHJlZE11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSBncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IGJsdWVNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSBhbHBoYU9mZnNldDtcbiAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IHJlZE9mZnNldDtcbiAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gZ3JlZW5PZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gYmx1ZU9mZnNldDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uY29uY2F0ID0gY29uY2F0O1xufSkoQ29sb3JUcmFuc2Zvcm0gfHwgKENvbG9yVHJhbnNmb3JtID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vY29sb3ItdHJhbnNmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vYm91bmRzJztcbmV4cG9ydCAqIGZyb20gJy4vbWF0cml4JztcbmV4cG9ydCAqIGZyb20gJy4vcG9pbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWN0YW5nbGUnO1xuIiwiZXhwb3J0IHZhciBNYXRyaXg7XG4oZnVuY3Rpb24gKE1hdHJpeCkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogMSxcbiAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICBjOiAwLFxuICAgICAgICAgICAgZDogMSxcbiAgICAgICAgICAgIHR4OiAwLFxuICAgICAgICAgICAgdHk6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIE1hdHJpeC5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkobWF0cml4KSB7XG4gICAgICAgIHJldHVybiBtYXRyaXguYSA9PT0gMVxuICAgICAgICAgICAgJiYgbWF0cml4LmIgPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC5jID09PSAwXG4gICAgICAgICAgICAmJiBtYXRyaXguZCA9PT0gMVxuICAgICAgICAgICAgJiYgbWF0cml4LnR4ID09PSAwXG4gICAgICAgICAgICAmJiBtYXRyaXgudHkgPT09IDA7XG4gICAgfVxuICAgIE1hdHJpeC5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShtYXRyaXgpIHtcbiAgICAgICAgbWF0cml4LmEgPSAxO1xuICAgICAgICBtYXRyaXguYiA9IDA7XG4gICAgICAgIG1hdHJpeC5jID0gMDtcbiAgICAgICAgbWF0cml4LmQgPSAxO1xuICAgICAgICBtYXRyaXgudHggPSAwO1xuICAgICAgICBtYXRyaXgudHkgPSAwO1xuICAgIH1cbiAgICBNYXRyaXguc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KGZyb20sIHRvKSB7XG4gICAgICAgIHRvLmEgPSBmcm9tLmE7XG4gICAgICAgIHRvLmIgPSBmcm9tLmI7XG4gICAgICAgIHRvLmMgPSBmcm9tLmM7XG4gICAgICAgIHRvLmQgPSBmcm9tLmQ7XG4gICAgICAgIHRvLnR4ID0gZnJvbS50eDtcbiAgICAgICAgdG8udHkgPSBmcm9tLnR5O1xuICAgIH1cbiAgICBNYXRyaXguY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gY29uY2F0KG1hdHJpeDAsIG1hdHJpeDEsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCBhID0gbWF0cml4MS5hICogbWF0cml4MC5hICsgbWF0cml4MS5iICogbWF0cml4MC5jO1xuICAgICAgICBjb25zdCBiID0gbWF0cml4MS5hICogbWF0cml4MC5iICsgbWF0cml4MS5iICogbWF0cml4MC5kO1xuICAgICAgICBjb25zdCBjID0gbWF0cml4MS5jICogbWF0cml4MC5hICsgbWF0cml4MS5kICogbWF0cml4MC5jO1xuICAgICAgICBjb25zdCBkID0gbWF0cml4MS5jICogbWF0cml4MC5iICsgbWF0cml4MS5kICogbWF0cml4MC5kO1xuICAgICAgICBjb25zdCB0eCA9IG1hdHJpeDEudHggKiBtYXRyaXgwLmEgKyBtYXRyaXgxLnR5ICogbWF0cml4MC5jICsgbWF0cml4MC50eDtcbiAgICAgICAgY29uc3QgdHkgPSBtYXRyaXgxLnR4ICogbWF0cml4MC5iICsgbWF0cml4MS50eSAqIG1hdHJpeDAuZCArIG1hdHJpeDAudHk7XG4gICAgICAgIHJlc3VsdC5hID0gYTtcbiAgICAgICAgcmVzdWx0LmIgPSBiO1xuICAgICAgICByZXN1bHQuYyA9IGM7XG4gICAgICAgIHJlc3VsdC5kID0gZDtcbiAgICAgICAgcmVzdWx0LnR4ID0gdHg7XG4gICAgICAgIHJlc3VsdC50eSA9IHR5O1xuICAgIH1cbiAgICBNYXRyaXguY29uY2F0ID0gY29uY2F0O1xuICAgIGZ1bmN0aW9uIGdldERldGVybWluYW50KG1hdHJpeCkge1xuICAgICAgICByZXR1cm4gbWF0cml4LmEgKiBtYXRyaXguZCAtIG1hdHJpeC5iICogbWF0cml4LmM7XG4gICAgfVxuICAgIE1hdHJpeC5nZXREZXRlcm1pbmFudCA9IGdldERldGVybWluYW50O1xuICAgIGZ1bmN0aW9uIGludmVydChtYXRyaXgsIHJlc3VsdCkge1xuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudChtYXRyaXgpO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC50eCA9IC1tYXRyaXgudHg7XG4gICAgICAgICAgICByZXN1bHQudHkgPSAtbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGV0ZXJtaW5hbnQgPSAxLjAgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gbWF0cml4LmEgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gLW1hdHJpeC5iICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuYyA9IC1tYXRyaXguYyAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBtYXRyaXguZCAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gLXJlc3VsdC5hICogbWF0cml4LnR4IC0gcmVzdWx0LmMgKiBtYXRyaXgudHk7XG4gICAgICAgICAgICByZXN1bHQudHkgPSAtcmVzdWx0LmIgKiBtYXRyaXgudHggLSByZXN1bHQuZCAqIG1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBNYXRyaXguaW52ZXJ0ID0gaW52ZXJ0O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50KG1hdHJpeCwgcG9pbnQsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICByZXN1bHQueCA9IHggKiBtYXRyaXguYSArIHkgKiBtYXRyaXguYyArIG1hdHJpeC50eDtcbiAgICAgICAgcmVzdWx0LnkgPSB4ICogbWF0cml4LmIgKyB5ICogbWF0cml4LmQgKyBtYXRyaXgudHk7XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludCA9IHRyYW5zZm9ybVBvaW50O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50TG9jYWwobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJlc3VsdC54ID0geCAqIG1hdHJpeC5hICsgeSAqIG1hdHJpeC5jO1xuICAgICAgICByZXN1bHQueSA9IHggKiBtYXRyaXguYiArIHkgKiBtYXRyaXguZDtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybVBvaW50TG9jYWwgPSB0cmFuc2Zvcm1Qb2ludExvY2FsO1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUludmVyc2VQb2ludChtYXRyaXgsIHBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgbGV0IGRldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KTtcbiAgICAgICAgaWYgKGRldGVybWluYW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQueCA9IC1tYXRyaXgudHg7XG4gICAgICAgICAgICByZXN1bHQueSA9IC1tYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCA9IDEgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgICAgICByZXN1bHQueCA9IGRldGVybWluYW50ICogKG1hdHJpeC5jICogKG1hdHJpeC50eSAtIHkpICsgbWF0cml4LmQgKiAoeCAtIG1hdHJpeC50eCkpO1xuICAgICAgICAgICAgcmVzdWx0LnkgPSBkZXRlcm1pbmFudCAqIChtYXRyaXguYSAqICh5IC0gbWF0cml4LnR5KSArIG1hdHJpeC5iICogKG1hdHJpeC50eCAtIHgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50ID0gdHJhbnNmb3JtSW52ZXJzZVBvaW50O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUJvdW5kcyhtYXRyaXgsIGJvdW5kcywgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgYSwgYiwgYywgZCwgdHgsIHR5LCB9ID0gbWF0cml4O1xuICAgICAgICBjb25zdCByeCA9IGJvdW5kcy54O1xuICAgICAgICBjb25zdCByeSA9IGJvdW5kcy55O1xuICAgICAgICBjb25zdCByciA9IHJ4ICsgYm91bmRzLndpZHRoO1xuICAgICAgICBjb25zdCByYiA9IHJ5ICsgYm91bmRzLmhlaWdodDtcbiAgICAgICAgY29uc3QgbngxID0gcnggKiBhICsgcnkgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MSA9IHJ4ICogYiArIHJ5ICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDIgPSByciAqIGEgKyByeSAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkyID0gcnIgKiBiICsgcnkgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54MyA9IHJyICogYSArIHJiICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTMgPSByciAqIGIgKyByYiAqIGQgKyB0eTtcbiAgICAgICAgY29uc3Qgbng0ID0gcnggKiBhICsgcmIgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55NCA9IHJ4ICogYiArIHJiICogZCArIHR5O1xuICAgICAgICBsZXQgbGVmdCA9IG54MTtcbiAgICAgICAgaWYgKGxlZnQgPiBueDIpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQgPiBueDMpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQgPiBueDQpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvcCA9IG55MTtcbiAgICAgICAgaWYgKHRvcCA+IG55Mikge1xuICAgICAgICAgICAgdG9wID0gbnkyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3AgPiBueTMpIHtcbiAgICAgICAgICAgIHRvcCA9IG55MztcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9wID4gbnk0KSB7XG4gICAgICAgICAgICB0b3AgPSBueTQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJpZ2h0ID0gbngxO1xuICAgICAgICBpZiAocmlnaHQgPCBueDIpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbngyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCA8IG54Mykge1xuICAgICAgICAgICAgcmlnaHQgPSBueDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0IDwgbng0KSB7XG4gICAgICAgICAgICByaWdodCA9IG54NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYm90dG9tID0gbnkxO1xuICAgICAgICBpZiAoYm90dG9tIDwgbnkyKSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdHRvbSA8IG55Mykge1xuICAgICAgICAgICAgYm90dG9tID0gbnkzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3R0b20gPCBueTQpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55NDtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQueCA9IGxlZnQ7XG4gICAgICAgIHJlc3VsdC55ID0gdG9wO1xuICAgICAgICByZXN1bHQud2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBib3R0b20gLSB0b3A7XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Cb3VuZHMgPSB0cmFuc2Zvcm1Cb3VuZHM7XG59KShNYXRyaXggfHwgKE1hdHJpeCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFBvaW50O1xuKGZ1bmN0aW9uIChQb2ludCkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuICAgIFBvaW50LmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gbGVuZ3RoKHBvaW50KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfVxuICAgIFBvaW50Lmxlbmd0aCA9IGxlbmd0aDtcbiAgICBmdW5jdGlvbiBhbmdsZShwb2ludCkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihwb2ludC55LCBwb2ludC54KTtcbiAgICB9XG4gICAgUG9pbnQuYW5nbGUgPSBhbmdsZTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludC54ID09PSAwICYmIHBvaW50LnkgPT09IDA7XG4gICAgfVxuICAgIFBvaW50LmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGVxdWFscyhwb2ludDAsIHBvaW50MSkge1xuICAgICAgICByZXR1cm4gcG9pbnQwLnggPT09IHBvaW50MS54ICYmIHBvaW50MC55ID09PSBwb2ludDEueTtcbiAgICB9XG4gICAgUG9pbnQuZXF1YWxzID0gZXF1YWxzO1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KHBvaW50KSB7XG4gICAgICAgIHBvaW50LnggPSAwO1xuICAgICAgICBwb2ludC55ID0gMDtcbiAgICB9XG4gICAgUG9pbnQuc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC54ID0gc291cmNlLng7XG4gICAgICAgIHRhcmdldC55ID0gc291cmNlLnk7XG4gICAgfVxuICAgIFBvaW50LmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZShwb2ludCwgdGhpY2tuZXNzKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGxlbmd0aChwb2ludCk7XG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpY2tuZXNzIC8gdmFsdWU7XG4gICAgICAgICAgICBwb2ludC54ICo9IHZhbHVlO1xuICAgICAgICAgICAgcG9pbnQueSAqPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQb2ludC5ub3JtYWxpemUgPSBub3JtYWxpemU7XG4gICAgZnVuY3Rpb24gZGlzdGFuY2UocG9pbnQwLCBwb2ludDEpIHtcbiAgICAgICAgY29uc3QgZHggPSBwb2ludDAueCAtIHBvaW50MS54O1xuICAgICAgICBjb25zdCBkeSA9IHBvaW50MC55IC0gcG9pbnQxLnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cbiAgICBQb2ludC5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIGZ1bmN0aW9uIGludGVycG9sYXRlKGJlZ2luLCBlbmQsIHZhbHVlLCByZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0LnggPSBiZWdpbi54ICsgdmFsdWUgKiAoZW5kLnggLSBiZWdpbi54KTtcbiAgICAgICAgcmVzdWx0LnkgPSBiZWdpbi55ICsgdmFsdWUgKiAoZW5kLnkgLSBiZWdpbi55KTtcbiAgICB9XG4gICAgUG9pbnQuaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcbiAgICBmdW5jdGlvbiBwb2xhcihwb2ludCwgbGVuZ3RoLCBhbmdsZSkge1xuICAgICAgICBwb2ludC54ID0gbGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgICBwb2ludC55ID0gbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIH1cbiAgICBQb2ludC5wb2xhciA9IHBvbGFyO1xufSkoUG9pbnQgfHwgKFBvaW50ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUmVjdGFuZ2xlO1xuKGZ1bmN0aW9uIChSZWN0YW5nbGUpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFJlY3RhbmdsZS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KHJlY3RhbmdsZSkge1xuICAgICAgICByZWN0YW5nbGUueCA9IDA7XG4gICAgICAgIHJlY3RhbmdsZS55ID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLndpZHRoID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLmhlaWdodCA9IDA7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGludGVyc2VjdGlvbihzb3VyY2UsIHRhcmdldCwgcmVzdWx0KSB7XG4gICAgICAgIGxldCB7IHgsIHksIHdpZHRoLCBoZWlnaHQsIH0gPSBzb3VyY2U7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0YXJnZXQueDtcbiAgICAgICAgY29uc3QgdG9wID0gdGFyZ2V0Lnk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGFyZ2V0LnggKyB0YXJnZXQud2lkdGg7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRhcmdldC55ICsgdGFyZ2V0LmhlaWdodDtcbiAgICAgICAgaWYgKHggPCBsZWZ0KSB7XG4gICAgICAgICAgICB3aWR0aCAtPSBsZWZ0IC0geDtcbiAgICAgICAgICAgIHggPSBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh4ICsgd2lkdGggPiByaWdodCkge1xuICAgICAgICAgICAgd2lkdGggPSByaWdodCAtIHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgPCB0b3ApIHtcbiAgICAgICAgICAgIGhlaWdodCAtPSB0b3AgLSB5O1xuICAgICAgICAgICAgeSA9IHRvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSArIGhlaWdodCA+IGJvdHRvbSkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gYm90dG9tIC0geTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgICAgICB3aWR0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICAgIGhlaWdodCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnggPSB4O1xuICAgICAgICByZXN1bHQueSA9IHk7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHdpZHRoO1xuICAgICAgICByZXN1bHQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuaW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uO1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0YW5nbGUud2lkdGggPT09IDAgfHwgcmVjdGFuZ2xlLmhlaWdodCA9PT0gMDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGNvbnRhaW5zKHJlY3RhbmdsZSwgcG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZS54IDwgcG9pbnQueFxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnggKyByZWN0YW5nbGUud2lkdGggPiBwb2ludC54XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueSA8IHBvaW50LnlcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS55ICsgcmVjdGFuZ2xlLmhlaWdodCA+IHBvaW50Lnk7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5jb250YWlucyA9IGNvbnRhaW5zO1xuICAgIGZ1bmN0aW9uIHJvdW5kKHJlY3RhbmdsZSkge1xuICAgICAgICByZWN0YW5nbGUueCA9IE1hdGgucm91bmQocmVjdGFuZ2xlLngpO1xuICAgICAgICByZWN0YW5nbGUueSA9IE1hdGgucm91bmQocmVjdGFuZ2xlLnkpO1xuICAgICAgICByZWN0YW5nbGUud2lkdGggPSBNYXRoLnJvdW5kKHJlY3RhbmdsZS53aWR0aCk7XG4gICAgICAgIHJlY3RhbmdsZS5oZWlnaHQgPSBNYXRoLnJvdW5kKHJlY3RhbmdsZS5oZWlnaHQpO1xuICAgIH1cbiAgICBSZWN0YW5nbGUucm91bmQgPSByb3VuZDtcbn0pKFJlY3RhbmdsZSB8fCAoUmVjdGFuZ2xlID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBDYW52YXNQYXR0ZXJucyB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgRm9udCB9IGZyb20gJy4uL2RhdGEvZm9udCc7XG5pbXBvcnQgeyBUZXh0RXh0ZW5zaW9uLCBURVhULCBUZXh0IH0gZnJvbSAnLi4vdGV4dCc7XG5pbXBvcnQgeyBUZXh0Rm9ybWF0IH0gZnJvbSAnLi4vZGF0YS9mb3JtYXQnO1xuaW1wb3J0IHsgVGV4dE1ldHJpY3MgfSBmcm9tICcuLi9kYXRhL21ldHJpY3MnO1xuY29uc3QgZGVmYXVsdFRleHRGb3JtYXQgPSB7fTtcbmNvbnN0IENPUlJFQ1RJT04gPSAwLjg1O1xuZXhwb3J0IHZhciBDYW52YXNUZXh0RXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNUZXh0RXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKGNvbXBvbmVudCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4LCBjb2xvclRyYW5zZm9ybSB9ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1ldHJpY3M7XG4gICAgICAgIGNvbnN0IHNpbXBsZSA9IFRleHQuaXNTaW1wbGUoY29tcG9uZW50KTtcbiAgICAgICAgaWYgKHNpbXBsZSkge1xuICAgICAgICAgICAgbWV0cmljcyA9IFRleHRNZXRyaWNzLmdldFNpbXBsZU1ldHJpY3MoY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1ldHJpY3MgPSBUZXh0TWV0cmljcy5nZXRNZXRyaWNzKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtZXRyaWNzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBmb3JtYXQsIGJvcmRlciwgYmFja2dyb3VuZCwgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgVGV4dEZvcm1hdC5jb21iaW5lKGZvcm1hdCwgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCwgZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBjb25zdCByZWFsV2lkdGggPSB3aWR0aCA/PyBtZXRyaWNzLndpZHRoO1xuICAgICAgICBjb25zdCByZWFsSGVpZ2h0ID0gaGVpZ2h0ID8/IG1ldHJpY3MuaGVpZ2h0O1xuICAgICAgICBjb25zdCBvZmZzZXRYID0gUGl2b3QuZ2V0WChjb21wb25lbnQsIHJlYWxXaWR0aCk7XG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSBQaXZvdC5nZXRZKGNvbXBvbmVudCwgcmVhbEhlaWdodCk7XG4gICAgICAgIGxldCB5ID0gMDtcbiAgICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICAgICAgY29uc3QgYWxpZ25WZXJ0aWNhbFZhbHVlID0gVGV4dEZvcm1hdC5nZXRWZXJ0aWNhbEFsaWduVmFsdWUoZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICAgICAgeSA9IChoZWlnaHQgLSBtZXRyaWNzLmhlaWdodCkgKiBhbGlnblZlcnRpY2FsVmFsdWU7XG4gICAgICAgICAgICBpZiAoeSA8IDApIHtcbiAgICAgICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB5ICs9IG9mZnNldFk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IGVuZ2luZS5wbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgaWYgKGJhY2tncm91bmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gJyc7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGJhY2tncm91bmQsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5yZWN0KG9mZnNldFgsIG9mZnNldFksIHJlYWxXaWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGJvcmRlciwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuICAgICAgICAgICAgY29udGV4dDJkLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLnJlY3Qob2Zmc2V0WCwgb2Zmc2V0WSwgcmVhbFdpZHRoLCByZWFsSGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0MmQudGV4dEJhc2VsaW5lID0gJ2FscGhhYmV0aWMnO1xuICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnJztcbiAgICAgICAgaWYgKHNpbXBsZSkge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGNvbXBvbmVudC50ZXh0O1xuICAgICAgICAgICAgY29uc3QgeyBzaXplLCBjb2xvciwgYWxwaGEsIGxlYWRpbmcsIGxldHRlclNwYWNpbmcsIH0gPSBkZWZhdWx0VGV4dEZvcm1hdDtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRGb250ID0gRm9udC5nZXRGb250KGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbFNpemUgPSBzaXplICogQ09SUkVDVElPTjtcbiAgICAgICAgICAgIGNvbnN0IGFsaWduVmFsdWUgPSBUZXh0Rm9ybWF0LmdldEFsaWduVmFsdWUoZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICAgICAgY29udGV4dDJkLmZvbnQgPSBGb250LmdldFN0eWxlKGRlZmF1bHRGb250LCBzaXplKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oY29sb3IsIGFscGhhLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBsZXQgeCA9IG9mZnNldFggKyBhbGlnblZhbHVlID8gYWxpZ25WYWx1ZSAqIChyZWFsV2lkdGggLSBUZXh0TWV0cmljcy5nZXRTaW1wbGVXaWR0aChkZWZhdWx0VGV4dEZvcm1hdCwgdGV4dCwgMCkpIDogMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHRleHRbaV07XG4gICAgICAgICAgICAgICAgaWYgKHN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGFsaWduVmFsdWUgPyBhbGlnblZhbHVlICogKHJlYWxXaWR0aCAtIFRleHRNZXRyaWNzLmdldFNpbXBsZVdpZHRoKGRlZmF1bHRUZXh0Rm9ybWF0LCB0ZXh0LCBpICsgMSkpIDogMDtcbiAgICAgICAgICAgICAgICAgICAgeSArPSBzaXplICsgbGVhZGluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSB0ZXh0W2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShkZWZhdWx0Rm9udCwgc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIGxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5maWxsVGV4dChzeW1ib2wsIHgsIHkgKyBzeW1ib2xTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgeCArPSBhZHZhbmNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdyaWNoIHRleHQnKTtcbiAgICAgICAgICAgIGNvbnN0IHsgbGluZXMgfSA9IG1ldHJpY3M7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChsaW5lLnN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gbGluZS5zeW1ib2xzWzBdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbGlnblZhbHVlID0gVGV4dEZvcm1hdC5nZXRBbGlnblZhbHVlKGZpcnN0LmZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gKHJlYWxXaWR0aCAtIGxpbmUud2lkdGgpICogYWxpZ25WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4ICs9IG9mZnNldFg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc3ltYm9scyB9ID0gbGluZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZUhlaWdodCA9IGxpbmUuaGVpZ2h0ICogQ09SUkVDVElPTjtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzeW1ib2xzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHN5bWJvbC5mb3JtYXQuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsaWduU3ltYm9sVmFsdWUgPSBUZXh0Rm9ybWF0LmdldFZlcnRpY2FsQWxpZ25WYWx1ZShzeW1ib2wuZm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbFNpemUgPSBzaXplICogQ09SUkVDVElPTjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvbnQgPSBGb250LmdldEZvbnQoc3ltYm9sLmZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0MmQuZm9udCA9IEZvbnQuZ2V0U3R5bGUoc3ltYm9sRm9udCwgc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKHN5bWJvbC5mb3JtYXQuY29sb3IsIHN5bWJvbC5mb3JtYXQuYWxwaGEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5maWxsVGV4dChzeW1ib2wuc3ltYm9sLCB4LCB5ICsgc3ltYm9sU2l6ZSArIGFsaWduU3ltYm9sVmFsdWUgKiAobGluZUhlaWdodCAtIHN5bWJvbFNpemUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gc3ltYm9sLmFkdmFuY2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeSArPSBsaW5lLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNUZXh0RXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBUZXh0RXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChURVhULCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNUZXh0RXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ2FudmFzVGV4dEV4dGVuc2lvbiB8fCAoQ2FudmFzVGV4dEV4dGVuc2lvbiA9IHt9KSk7XG4iLCJjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmV4cG9ydCBjb25zdCBFTSA9IDEwMjQ7XG5jb25zdCBmb250cyA9IG5ldyBNYXAoKTtcbmV4cG9ydCB2YXIgRm9udDtcbihmdW5jdGlvbiAoRm9udCkge1xuICAgIGZ1bmN0aW9uIGdldFN0eWxlKGZvbnQsIHNpemUpIHtcbiAgICAgICAgcmV0dXJuIGZvbnQubmFtZS5yZXBsYWNlKCclJywgc2l6ZS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgRm9udC5nZXRTdHlsZSA9IGdldFN0eWxlO1xuICAgIGZ1bmN0aW9uIG1lYXN1cmVUZXh0KGZvbnQsIHNpemUsIHRleHQpIHtcbiAgICAgICAgY29udGV4dC5mb250ID0gZ2V0U3R5bGUoZm9udCwgc2l6ZSk7XG4gICAgICAgIHJldHVybiBjb250ZXh0Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xuICAgIH1cbiAgICBGb250Lm1lYXN1cmVUZXh0ID0gbWVhc3VyZVRleHQ7XG4gICAgZnVuY3Rpb24gZ2V0Q2hhcldpZHRoKGZvbnQsIGNoYXIpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gZm9udC53aWR0aHMuZ2V0KGNoYXIpO1xuICAgICAgICBpZiAoIXdpZHRoKSB7XG4gICAgICAgICAgICB3aWR0aCA9IG1lYXN1cmVUZXh0KGZvbnQsIEVNLCBjaGFyKTtcbiAgICAgICAgICAgIGZvbnQud2lkdGhzLnNldChjaGFyLCB3aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cbiAgICBGb250LmdldENoYXJXaWR0aCA9IGdldENoYXJXaWR0aDtcbiAgICBmdW5jdGlvbiBnZXRLZXJuaW5nKGZvbnQsIGZpcnN0LCBzZWNvbmQpIHtcbiAgICAgICAgY29uc3QgcGFpciA9IGZpcnN0ICsgc2Vjb25kO1xuICAgICAgICBsZXQga2VybmluZyA9IGZvbnQua2VybmluZ3MuZ2V0KHBhaXIpO1xuICAgICAgICBpZiAoIWtlcm5pbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoU2Vjb25kID0gZ2V0Q2hhcldpZHRoKGZvbnQsIHNlY29uZCk7XG4gICAgICAgICAgICBjb25zdCB3aWR0aFRvdGFsID0gbWVhc3VyZVRleHQoZm9udCwgRU0sIGZpcnN0ICsgc2Vjb25kKTtcbiAgICAgICAgICAgIGtlcm5pbmcgPSB3aWR0aFRvdGFsIC0gd2lkdGhTZWNvbmQ7XG4gICAgICAgICAgICBmb250Lmtlcm5pbmdzLnNldChwYWlyLCBrZXJuaW5nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2VybmluZztcbiAgICB9XG4gICAgRm9udC5nZXRLZXJuaW5nID0gZ2V0S2VybmluZztcbiAgICBmdW5jdGlvbiBnZXRBZHZhbmNlKGZvbnQsIHNpemUsIGZpcnN0LCBzZWNvbmQpIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBzaXplIC8gRU07XG4gICAgICAgIGNvbnN0IHdpZHRoID0gZ2V0Q2hhcldpZHRoKGZvbnQsIGZpcnN0KTtcbiAgICAgICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgICAgIHJldHVybiB3aWR0aCAqIHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtlcm5pbmcgPSBnZXRLZXJuaW5nKGZvbnQsIGZpcnN0LCBzZWNvbmQpO1xuICAgICAgICByZXR1cm4ga2VybmluZyAqIHNjYWxlO1xuICAgIH1cbiAgICBGb250LmdldEFkdmFuY2UgPSBnZXRBZHZhbmNlO1xuICAgIGZ1bmN0aW9uIGdldEZvbnQoZm9ybWF0KSB7XG4gICAgICAgIGxldCBuYW1lID0gJyc7XG4gICAgICAgIGlmIChmb3JtYXQuYm9sZCkge1xuICAgICAgICAgICAgbmFtZSArPSAnYm9sZCAnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQuaXRhbGljKSB7XG4gICAgICAgICAgICBuYW1lICs9ICdpdGFsaWMgJztcbiAgICAgICAgfVxuICAgICAgICBuYW1lICs9IGAlcHggJHtmb3JtYXQuZm9udH1gO1xuICAgICAgICBsZXQgZm9udCA9IGZvbnRzLmdldChuYW1lKTtcbiAgICAgICAgaWYgKCFmb250KSB7XG4gICAgICAgICAgICBmb250ID0ge1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgd2lkdGhzOiBuZXcgTWFwKCksXG4gICAgICAgICAgICAgICAga2VybmluZ3M6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb250cy5zZXQobmFtZSwgZm9udCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvbnQ7XG4gICAgfVxuICAgIEZvbnQuZ2V0Rm9udCA9IGdldEZvbnQ7XG59KShGb250IHx8IChGb250ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgVGV4dEZvcm1hdDtcbihmdW5jdGlvbiAoVGV4dEZvcm1hdCkge1xuICAgIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQgPSB7XG4gICAgICAgIGZvbnQ6ICdhcmlhbCcsXG4gICAgICAgIHNpemU6IDE1LFxuICAgICAgICBjb2xvcjogMCxcbiAgICAgICAgYWxwaGE6IDEsXG4gICAgICAgIGJvbGQ6IGZhbHNlLFxuICAgICAgICBpdGFsaWM6IGZhbHNlLFxuICAgICAgICB1bmRlcmxpbmU6IGZhbHNlLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwLFxuICAgICAgICBsZWFkaW5nOiAwLFxuICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGNvbWJpbmUoc291cmNlLCBkZWZhdWx0Rm9ybWF0LCByZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0LmZvbnQgPSBzb3VyY2U/LmZvbnQgPz8gZGVmYXVsdEZvcm1hdC5mb250O1xuICAgICAgICByZXN1bHQuc2l6ZSA9IHNvdXJjZT8uc2l6ZSA/PyBkZWZhdWx0Rm9ybWF0LnNpemU7XG4gICAgICAgIHJlc3VsdC5jb2xvciA9IHNvdXJjZT8uY29sb3IgPz8gZGVmYXVsdEZvcm1hdC5jb2xvcjtcbiAgICAgICAgcmVzdWx0LmFscGhhID0gc291cmNlPy5hbHBoYSA/PyBkZWZhdWx0Rm9ybWF0LmFscGhhO1xuICAgICAgICByZXN1bHQuYm9sZCA9IHNvdXJjZT8uYm9sZCA/PyBkZWZhdWx0Rm9ybWF0LmJvbGQ7XG4gICAgICAgIHJlc3VsdC5pdGFsaWMgPSBzb3VyY2U/Lml0YWxpYyA/PyBkZWZhdWx0Rm9ybWF0Lml0YWxpYztcbiAgICAgICAgcmVzdWx0LnVuZGVybGluZSA9IHNvdXJjZT8udW5kZXJsaW5lID8/IGRlZmF1bHRGb3JtYXQudW5kZXJsaW5lO1xuICAgICAgICByZXN1bHQubGV0dGVyU3BhY2luZyA9IHNvdXJjZT8ubGV0dGVyU3BhY2luZyA/PyBkZWZhdWx0Rm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgICAgIHJlc3VsdC5sZWFkaW5nID0gc291cmNlPy5sZWFkaW5nID8/IGRlZmF1bHRGb3JtYXQubGVhZGluZztcbiAgICAgICAgcmVzdWx0LmFsaWduID0gc291cmNlPy5hbGlnbiA/PyBkZWZhdWx0Rm9ybWF0LmFsaWduO1xuICAgICAgICByZXN1bHQudmVydGljYWxBbGlnbiA9IHNvdXJjZT8udmVydGljYWxBbGlnbiA/PyBkZWZhdWx0Rm9ybWF0LnZlcnRpY2FsQWxpZ247XG4gICAgfVxuICAgIFRleHRGb3JtYXQuY29tYmluZSA9IGNvbWJpbmU7XG4gICAgZnVuY3Rpb24gY29weShzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICB0YXJnZXQuZm9udCA9IHNvdXJjZS5mb250O1xuICAgICAgICB0YXJnZXQuc2l6ZSA9IHNvdXJjZS5zaXplO1xuICAgICAgICB0YXJnZXQuY29sb3IgPSBzb3VyY2UuY29sb3I7XG4gICAgICAgIHRhcmdldC5hbHBoYSA9IHNvdXJjZS5hbHBoYTtcbiAgICAgICAgdGFyZ2V0LmJvbGQgPSBzb3VyY2UuYm9sZDtcbiAgICAgICAgdGFyZ2V0Lml0YWxpYyA9IHNvdXJjZS5pdGFsaWM7XG4gICAgICAgIHRhcmdldC51bmRlcmxpbmUgPSBzb3VyY2UudW5kZXJsaW5lO1xuICAgICAgICB0YXJnZXQubGV0dGVyU3BhY2luZyA9IHNvdXJjZS5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICB0YXJnZXQubGVhZGluZyA9IHNvdXJjZS5sZWFkaW5nO1xuICAgICAgICB0YXJnZXQuYWxpZ24gPSBzb3VyY2UuYWxpZ247XG4gICAgICAgIHRhcmdldC52ZXJ0aWNhbEFsaWduID0gc291cmNlLnZlcnRpY2FsQWxpZ247XG4gICAgfVxuICAgIFRleHRGb3JtYXQuY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gZ2V0QWxpZ25WYWx1ZShmb3JtYXQpIHtcbiAgICAgICAgc3dpdGNoIChmb3JtYXQ/LmFsaWduKSB7XG4gICAgICAgICAgICBjYXNlICdsZWZ0JzogcmV0dXJuIDA7XG4gICAgICAgICAgICBjYXNlICdjZW50ZXInOiByZXR1cm4gMC41O1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOiByZXR1cm4gMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRGb3JtYXQuZ2V0QWxpZ25WYWx1ZSA9IGdldEFsaWduVmFsdWU7XG4gICAgZnVuY3Rpb24gZ2V0VmVydGljYWxBbGlnblZhbHVlKGZvcm1hdCkge1xuICAgICAgICBzd2l0Y2ggKGZvcm1hdD8udmVydGljYWxBbGlnbikge1xuICAgICAgICAgICAgY2FzZSAndG9wJzogcmV0dXJuIDA7XG4gICAgICAgICAgICBjYXNlICdtaWRkbGUnOiByZXR1cm4gMC41O1xuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzogcmV0dXJuIDE7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmdldFZlcnRpY2FsQWxpZ25WYWx1ZSA9IGdldFZlcnRpY2FsQWxpZ25WYWx1ZTtcbn0pKFRleHRGb3JtYXQgfHwgKFRleHRGb3JtYXQgPSB7fSkpO1xuIiwiaW1wb3J0IHsgRm9udCB9IGZyb20gJy4vZm9udCc7XG5pbXBvcnQgeyBUZXh0Rm9ybWF0IH0gZnJvbSAnLi9mb3JtYXQnO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uL3RleHQnO1xuY29uc3QgZGVmYXVsdFRleHRGb3JtYXQgPSB7fTtcbmV4cG9ydCB2YXIgVGV4dExpbmU7XG4oZnVuY3Rpb24gKFRleHRMaW5lKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3ltYm9sczogW10sXG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgVGV4dExpbmUuY3JlYXRlID0gY3JlYXRlO1xuICAgIGZ1bmN0aW9uIGVtcHR5KGxpbmUpIHtcbiAgICAgICAgbGluZS5zeW1ib2xzLmxlbmd0aCA9IDA7XG4gICAgICAgIGxpbmUud2lkdGggPSAwO1xuICAgICAgICBsaW5lLmhlaWdodCA9IDA7XG4gICAgfVxuICAgIFRleHRMaW5lLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gYWRkKGxpbmUsIHN5bWJvbCkge1xuICAgICAgICBsaW5lLnN5bWJvbHMucHVzaChzeW1ib2wpO1xuICAgICAgICBsaW5lLndpZHRoICs9IHN5bWJvbC5hZHZhbmNlO1xuICAgICAgICBsaW5lLmhlaWdodCA9IE1hdGgubWF4KGxpbmUuaGVpZ2h0LCBzeW1ib2wuZm9ybWF0LnNpemUgKyBzeW1ib2wuZm9ybWF0LmxlYWRpbmcpO1xuICAgIH1cbiAgICBUZXh0TGluZS5hZGQgPSBhZGQ7XG4gICAgZnVuY3Rpb24gY29uY2F0KHRhcmdldCwgc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2Uuc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRhcmdldC5zeW1ib2xzLnB1c2goLi4uc291cmNlLnN5bWJvbHMpO1xuICAgICAgICAgICAgdGFyZ2V0LndpZHRoICs9IHNvdXJjZS53aWR0aDtcbiAgICAgICAgICAgIHRhcmdldC5oZWlnaHQgPSBNYXRoLm1heCh0YXJnZXQuaGVpZ2h0LCBzb3VyY2UuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0TGluZS5jb25jYXQgPSBjb25jYXQ7XG4gICAgZnVuY3Rpb24gY29ycmVjdFdpZHRoKGxpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzeW1ib2xzIH0gPSBsaW5lO1xuICAgICAgICBpZiAoc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBzeW1ib2xzW3N5bWJvbHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAoL1xccy8udGVzdChsYXN0LnN5bWJvbCkpIHtcbiAgICAgICAgICAgICAgICBzeW1ib2xzLnBvcCgpO1xuICAgICAgICAgICAgICAgIGxpbmUud2lkdGggLT0gbGFzdC5hZHZhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRMaW5lLmNvcnJlY3RXaWR0aCA9IGNvcnJlY3RXaWR0aDtcbiAgICBmdW5jdGlvbiBjb3JyZWN0SGVpZ2h0KGxpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzeW1ib2xzIH0gPSBsaW5lO1xuICAgICAgICBpZiAoc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbMF07XG4gICAgICAgICAgICBsaW5lLmhlaWdodCAtPSBzeW1ib2wuZm9ybWF0LmxlYWRpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dExpbmUuY29ycmVjdEhlaWdodCA9IGNvcnJlY3RIZWlnaHQ7XG59KShUZXh0TGluZSB8fCAoVGV4dExpbmUgPSB7fSkpO1xuZXhwb3J0IHZhciBUZXh0TWV0cmljcztcbihmdW5jdGlvbiAoVGV4dE1ldHJpY3MpIHtcbiAgICBmdW5jdGlvbiBnZXRTeW1ib2xzKGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCB7IHRleHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCF0ZXh0IHx8ICF0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBUZXh0Rm9ybWF0LmNvbWJpbmUoY29tcG9uZW50LmZvcm1hdCwgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCwgZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBjb25zdCBzeW1ib2xzID0gW107XG4gICAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvcm1hdCA9IHt9O1xuICAgICAgICAgICAgVGV4dEZvcm1hdC5jb3B5KGRlZmF1bHRUZXh0Rm9ybWF0LCBzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9udCA9IEZvbnQuZ2V0Rm9udChzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gdGV4dFtpICsgMV07XG4gICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShzeW1ib2xGb250LCBzeW1ib2xGb3JtYXQuc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIHN5bWJvbEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgIHN5bWJvbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgYWR2YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBzeW1ib2xGb3JtYXQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0ZXh0KSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYmxvY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvcm1hdCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBUZXh0Rm9ybWF0LmNvcHkoZGVmYXVsdFRleHRGb3JtYXQsIHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvbnQgPSBGb250LmdldEZvbnQoc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBibG9jay5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gYmxvY2tbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gYmxvY2tbaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShzeW1ib2xGb250LCBzeW1ib2xGb3JtYXQuc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIHN5bWJvbEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9scy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHN5bWJvbEZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb3JtYXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgVGV4dEZvcm1hdC5jb21iaW5lKGJsb2NrLCBkZWZhdWx0VGV4dEZvcm1hdCwgc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9udCA9IEZvbnQuZ2V0Rm9udChzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJsb2NrLnRleHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IGJsb2NrLnRleHRbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gYmxvY2sudGV4dFtqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKHN5bWJvbEZvbnQsIHN5bWJvbEZvcm1hdC5zaXplLCBzeW1ib2wsIHN5bWJvbE5leHQpICsgc3ltYm9sRm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZHZhbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogc3ltYm9sRm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN5bWJvbHM7XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldFN5bWJvbHMgPSBnZXRTeW1ib2xzO1xuICAgIGZ1bmN0aW9uIGdldExpbmVzKGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBzeW1ib2xzID0gZ2V0U3ltYm9scyhjb21wb25lbnQpO1xuICAgICAgICBpZiAoIXN5bWJvbHMgfHwgIXN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIHdvcmRXcmFwID0gZmFsc2UgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgbXVsdGlsaW5lID0gVGV4dC5pc011bHRpbGluZShjb21wb25lbnQpO1xuICAgICAgICBjb25zdCBsaW5lcyA9IFtdO1xuICAgICAgICBsZXQgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICBpZiAobXVsdGlsaW5lKSB7XG4gICAgICAgICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgICAgICAgICBpZiAod29yZFdyYXApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd29yZCA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sLnN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5jb25jYXQobGluZSwgd29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuZW1wdHkod29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQod29yZCwgc3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGluZS53aWR0aCArIHdvcmQud2lkdGggPiB3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKC9cXHMvLnRlc3Qoc3ltYm9sLnN5bWJvbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuY29uY2F0KGxpbmUsIHdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5lbXB0eSh3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuY29uY2F0KGxpbmUsIHdvcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbC5zeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChsaW5lLndpZHRoICsgc3ltYm9sLmFkdmFuY2UgPiB3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZChsaW5lLCBzeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKGxpbmUsIHN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbC5zeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKGxpbmUsIHN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2ldO1xuICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZChsaW5lLCBzeW1ib2wpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5lLnN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICAgICAgVGV4dExpbmUuY29ycmVjdFdpZHRoKGxpbmUpO1xuICAgICAgICAgICAgICAgIGlmICghbGluZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5oZWlnaHQgPSBkZWZhdWx0VGV4dEZvcm1hdC5zaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbmUgPSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIFRleHRMaW5lLmNvcnJlY3RIZWlnaHQobGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH1cbiAgICBUZXh0TWV0cmljcy5nZXRMaW5lcyA9IGdldExpbmVzO1xuICAgIGZ1bmN0aW9uIGdldE1ldHJpY3MoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gZ2V0TGluZXMoY29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFsaW5lcyB8fCAhbGluZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1ldHJpY3MgPSB7XG4gICAgICAgICAgICBsaW5lcyxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICBtZXRyaWNzLndpZHRoID0gTWF0aC5tYXgobWV0cmljcy53aWR0aCwgbGluZS53aWR0aCk7XG4gICAgICAgICAgICBtZXRyaWNzLmhlaWdodCArPSBsaW5lLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWV0cmljcztcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0TWV0cmljcyA9IGdldE1ldHJpY3M7XG4gICAgZnVuY3Rpb24gZ2V0U2ltcGxlTWV0cmljcyhjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICh0eXBlb2YgdGV4dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgVGV4dEZvcm1hdC5jb21iaW5lKGNvbXBvbmVudC5mb3JtYXQsIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQsIGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgY29uc3QgeyBzaXplLCBsZXR0ZXJTcGFjaW5nLCBsZWFkaW5nIH0gPSBkZWZhdWx0VGV4dEZvcm1hdDtcbiAgICAgICAgY29uc3QgZm9udCA9IEZvbnQuZ2V0Rm9udChkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICAgIGxldCBoZWlnaHQgPSBzaXplO1xuICAgICAgICBsZXQgbGluZVdpZHRoID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2wgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgaWYgKHN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgKz0gc2l6ZSArIGxlYWRpbmc7XG4gICAgICAgICAgICAgICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCwgbGluZVdpZHRoKTtcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IHRleHRbaSArIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2UoZm9udCwgc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIGxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgbGluZVdpZHRoICs9IGFkdmFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCwgbGluZVdpZHRoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBUZXh0TWV0cmljcy5nZXRTaW1wbGVNZXRyaWNzID0gZ2V0U2ltcGxlTWV0cmljcztcbiAgICBmdW5jdGlvbiBnZXRTaW1wbGVXaWR0aChmb3JtYXQsIHRleHQsIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA+PSB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzaXplLCBsZXR0ZXJTcGFjaW5nIH0gPSBkZWZhdWx0VGV4dEZvcm1hdDtcbiAgICAgICAgY29uc3QgZm9udCA9IEZvbnQuZ2V0Rm9udChkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHRleHRbaV07XG4gICAgICAgICAgICBpZiAoc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSB0ZXh0W2kgKyAxXTtcbiAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2UoZm9udCwgc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIGxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICB3aWR0aCArPSBhZHZhbmNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0U2ltcGxlV2lkdGggPSBnZXRTaW1wbGVXaWR0aDtcbn0pKFRleHRNZXRyaWNzIHx8IChUZXh0TWV0cmljcyA9IHt9KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL3RleHQnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL2Zvcm1hdCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvZm9udCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvbWV0cmljcyc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy90ZXh0JztcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IFRleHRNZXRyaWNzIH0gZnJvbSAnLi9kYXRhL21ldHJpY3MnO1xuZXhwb3J0IGNvbnN0IFRFWFQgPSAndGV4dCc7XG5leHBvcnQgdmFyIFRleHQ7XG4oZnVuY3Rpb24gKFRleHQpIHtcbiAgICBmdW5jdGlvbiBnZXRUZXh0KGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCB7IHRleHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGV4dCkpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJsb2NrID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gYmxvY2sudGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgVGV4dC5nZXRUZXh0ID0gZ2V0VGV4dDtcbiAgICBmdW5jdGlvbiBpc0F1dG9TaXplKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gIWNvbXBvbmVudC53aWR0aCAmJiAhY29tcG9uZW50LmhlaWdodDtcbiAgICB9XG4gICAgVGV4dC5pc0F1dG9TaXplID0gaXNBdXRvU2l6ZTtcbiAgICBmdW5jdGlvbiBpc1NpbXBsZShjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjb21wb25lbnQudGV4dCA9PT0gJ3N0cmluZycgJiYgaXNBdXRvU2l6ZShjb21wb25lbnQpO1xuICAgIH1cbiAgICBUZXh0LmlzU2ltcGxlID0gaXNTaW1wbGU7XG4gICAgZnVuY3Rpb24gaXNNdWx0aWxpbmUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQubXVsdGlsaW5lID8/IHRydWU7XG4gICAgfVxuICAgIFRleHQuaXNNdWx0aWxpbmUgPSBpc011bHRpbGluZTtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoY29tcG9uZW50LCBib3VuZHMpIHtcbiAgICAgICAgbGV0IG1ldHJpY3M7XG4gICAgICAgIGlmIChUZXh0LmlzU2ltcGxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIG1ldHJpY3MgPSBUZXh0TWV0cmljcy5nZXRTaW1wbGVNZXRyaWNzKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtZXRyaWNzID0gVGV4dE1ldHJpY3MuZ2V0TWV0cmljcyhjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWV0cmljcykge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHsgd2lkdGgsIGhlaWdodCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXdpZHRoKSB7XG4gICAgICAgICAgICB3aWR0aCA9IG1ldHJpY3Mud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoZWlnaHQpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IG1ldHJpY3MuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGNvbXBvbmVudCwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShjb21wb25lbnQsIGhlaWdodCk7XG4gICAgICAgIGJvdW5kcy54ID0geDtcbiAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgYm91bmRzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgVGV4dC5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShUZXh0IHx8IChUZXh0ID0ge30pKTtcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBUZXh0RXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChUZXh0RXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdCh0ZXh0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBsb2NhbCB9ID0gZW5naW5lLnBvaW50ZXJzO1xuICAgICAgICBUZXh0LmNhbGN1bGF0ZUJvdW5kcyh0ZXh0LCBib3VuZHMpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKGJvdW5kcywgbG9jYWwpO1xuICAgIH1cbiAgICBUZXh0RXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KFRFWFQsIGhpdFRlc3QpO1xuICAgIH1cbiAgICBUZXh0RXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoVGV4dEV4dGVuc2lvbiB8fCAoVGV4dEV4dGVuc2lvbiA9IHt9KSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQge1xuXHRDYW52YXNUZXh0RXh0ZW5zaW9uLCBUZXh0LCBUZXh0TWV0cmljcywgVEVYVCxcbn0gZnJvbSAnQGplbmcvdGV4dCc7XG5pbXBvcnQgeyBDYW52YXNFbmdpbmUgfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IENvbnRhaW5lciwgQ09OVEFJTkVSIH0gZnJvbSAnQGplbmcvY29yZSc7XG5cbi8vIGNyZWF0ZSBlbmdpbmVcbmNvbnN0IGVuZ2luZSA9IG5ldyBDYW52YXNFbmdpbmUoKTtcbi8vIGFkZCB0ZXh0IGV4dGVuc2lvblxuQ2FudmFzVGV4dEV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG4vLyBzZXQgZnVsbHNjcmVlbiBtb2RlXG5lbmdpbmUuc2NyZWVuLmZ1bGxzY3JlZW4gPSB0cnVlO1xuLy8gc3RhcnQgdXBkYXRlIGxvb3BcbmVuZ2luZS50aWNrZXIucGxheSgpO1xuLy8gYWRkIGVuZ2luZSB2aWV3IHRvIHBhZ2VcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZW5naW5lLnBsYXRmb3JtLnZpZXcpO1xuXG4vLyBwb3NpdGlvbmluZyB0ZXh0c1xuZnVuY3Rpb24gcG9zaXRpb25UZXh0cyh0ZXh0czogQXJyYXk8VGV4dD4pIHtcblx0Y29uc3QgeCA9IDIwO1xuXHRsZXQgeSA9IDIwO1xuXHR0ZXh0cy5mb3JFYWNoKCh0ZXh0KSA9PiB7XG5cdFx0dGV4dC54ID0geDtcblx0XHR0ZXh0LnkgPSB5O1xuXHRcdGNvbnN0IGhlaWdodCA9IHRleHQuaGVpZ2h0ID8/IFRleHRNZXRyaWNzLmdldE1ldHJpY3ModGV4dCk/LmhlaWdodCA/PyAwO1xuXHRcdHkgKz0gMTAgKyBoZWlnaHQ7XG5cdH0pO1xuXHRyZXR1cm4gdGV4dHM7XG59XG5cbi8vIHNpbXBsZSB0ZXh0XG5jb25zdCB0ZXh0ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LFxcbmNvbnNlY3RldHVyIGFkaXBpc2NpbmdcXG5lbGl0Lic7XG5cbi8vIGNyZWF0ZSBzaW1wbGUgYXBwXG5jb25zdCBhcHA6IENvbnRhaW5lciA9IHtcblx0dHlwZTogQ09OVEFJTkVSLFxuXHRjaGlsZHJlbjogcG9zaXRpb25UZXh0cyhbXG5cdFx0e1xuXHRcdFx0dHlwZTogVEVYVCxcblx0XHRcdHRleHQsXG5cdFx0XHRmb3JtYXQ6IHtcblx0XHRcdFx0Zm9udDogJ2FyaWFsJyxcblx0XHRcdFx0c2l6ZTogMjAsXG5cdFx0XHRcdGNvbG9yOiAweDIyOTkzMyxcblx0XHRcdH0sXG5cdFx0XHRib3JkZXI6IDB4MjI5OTMzLFxuXHRcdH0gYXMgVGV4dCxcblx0XHR7XG5cdFx0XHR0eXBlOiBURVhULFxuXHRcdFx0dGV4dCxcblx0XHRcdGZvcm1hdDoge1xuXHRcdFx0XHRmb250OiAnYXJpYWwnLFxuXHRcdFx0XHRzaXplOiAyMCxcblx0XHRcdFx0Y29sb3I6IDB4MjI5OTMzLFxuXHRcdFx0XHRpdGFsaWM6IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0Ym9yZGVyOiAweDIyOTkzMyxcblx0XHR9IGFzIFRleHQsXG5cdFx0e1xuXHRcdFx0dHlwZTogVEVYVCxcblx0XHRcdHRleHQsXG5cdFx0XHRmb3JtYXQ6IHtcblx0XHRcdFx0Zm9udDogJ2FyaWFsJyxcblx0XHRcdFx0c2l6ZTogMjAsXG5cdFx0XHRcdGNvbG9yOiAweDIyOTkzMyxcblx0XHRcdFx0Ym9sZDogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHRib3JkZXI6IDB4MjI5OTMzLFxuXHRcdH0gYXMgVGV4dCxcblx0XHR7XG5cdFx0XHR0eXBlOiBURVhULFxuXHRcdFx0dGV4dCxcblx0XHRcdGZvcm1hdDoge1xuXHRcdFx0XHRmb250OiAndGltZXMgbmV3IHJvbWFuJyxcblx0XHRcdFx0c2l6ZTogMjAsXG5cdFx0XHRcdGNvbG9yOiAweDMzMjI5OSxcblx0XHRcdH0sXG5cdFx0XHRib3JkZXI6IDB4MzMyMjk5LFxuXHRcdH0gYXMgVGV4dCxcblx0XHR7XG5cdFx0XHR0eXBlOiBURVhULFxuXHRcdFx0dGV4dCxcblx0XHRcdGZvcm1hdDoge1xuXHRcdFx0XHRmb250OiAndGltZXMgbmV3IHJvbWFuJyxcblx0XHRcdFx0c2l6ZTogMjAsXG5cdFx0XHRcdGNvbG9yOiAweDMzMjI5OSxcblx0XHRcdFx0aXRhbGljOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdGJvcmRlcjogMHgzMzIyOTksXG5cdFx0fSBhcyBUZXh0LFxuXHRcdHtcblx0XHRcdHR5cGU6IFRFWFQsXG5cdFx0XHR0ZXh0LFxuXHRcdFx0Zm9ybWF0OiB7XG5cdFx0XHRcdGZvbnQ6ICd0aW1lcyBuZXcgcm9tYW4nLFxuXHRcdFx0XHRzaXplOiAyMCxcblx0XHRcdFx0Y29sb3I6IDB4MzMyMjk5LFxuXHRcdFx0XHRib2xkOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdGJvcmRlcjogMHgzMzIyOTksXG5cdFx0fSBhcyBUZXh0LFxuXHRcdHtcblx0XHRcdHR5cGU6IFRFWFQsXG5cdFx0XHR0ZXh0LFxuXHRcdFx0Zm9ybWF0OiB7XG5cdFx0XHRcdGZvbnQ6ICdhcmlhbCcsXG5cdFx0XHRcdHNpemU6IDIwLFxuXHRcdFx0XHRjb2xvcjogMHg5OTMzMjIsXG5cdFx0XHRcdGFsaWduOiAnY2VudGVyJyxcblx0XHRcdFx0bGV0dGVyU3BhY2luZzogMSxcblx0XHRcdFx0bGVhZGluZzogMSxcblx0XHRcdH0sXG5cdFx0XHRib3JkZXI6IDB4OTkzMzIyLFxuXHRcdH0gYXMgVGV4dCxcblx0XSksXG59O1xuXG4vLyBhZGQgYXBwIGdyYXBoIHRvIGVuZ2luZVxuZW5naW5lLnJvb3QgPSBhcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9