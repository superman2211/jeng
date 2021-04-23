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
/* harmony import */ var _jeng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/core */ "../../packages/core/dist/index.js");
/* harmony import */ var _jeng_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jeng/geom */ "../../packages/geom/dist/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "../../packages/image/dist/image.js");



var bounds = _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.empty();
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

/***/ "../../packages/shape/dist/canvas/rectangle.js":
/*!*****************************************************!*\
  !*** ../../packages/shape/dist/canvas/rectangle.js ***!
  \*****************************************************/
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



var emptyMatrix = _jeng_geom__WEBPACK_IMPORTED_MODULE_1__.Matrix.empty();
var emptyArray = [];

function getCanvasPattern(fill, colorTransform, context, engine) {
  var _solid$color, _solid$alpha;

  if (typeof fill === 'number') {
    return _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns.colorPattern(fill, 1, colorTransform);
  }

  if (_typeof(fill) === 'object') {
    switch (fill.type) {
      case 'solid':
        var solid = fill;
        return _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns.colorPattern((_solid$color = solid.color) !== null && _solid$color !== void 0 ? _solid$color : 0, (_solid$alpha = solid.alpha) !== null && _solid$alpha !== void 0 ? _solid$alpha : 1, colorTransform);

      case 'linear':
        var _fill$matrix = fill.matrix,
            ml = _fill$matrix === void 0 ? emptyMatrix : _fill$matrix,
            _fill$colors = fill.colors,
            cl = _fill$colors === void 0 ? emptyArray : _fill$colors,
            _fill$alphas = fill.alphas,
            al = _fill$alphas === void 0 ? emptyArray : _fill$alphas,
            _fill$ratios = fill.ratios,
            rl = _fill$ratios === void 0 ? emptyArray : _fill$ratios;
        return _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns.linearGradientPattern(ml, cl, al, rl, colorTransform, context);

      case 'radial':
        var _fill$matrix2 = fill.matrix,
            mr = _fill$matrix2 === void 0 ? emptyMatrix : _fill$matrix2,
            _fill$colors2 = fill.colors,
            cr = _fill$colors2 === void 0 ? emptyArray : _fill$colors2,
            _fill$alphas2 = fill.alphas,
            ar = _fill$alphas2 === void 0 ? emptyArray : _fill$alphas2,
            _fill$ratios2 = fill.ratios,
            rr = _fill$ratios2 === void 0 ? emptyArray : _fill$ratios2;
        return _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns.radialGradientPattern(mr, cr, ar, rr, colorTransform, context);

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
          return _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns.bitmapPattern(resource.image, repeat, context);
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
    var metrics = _data_metrics__WEBPACK_IMPORTED_MODULE_5__.TextMetrics.getMetrics(component);

    if (!metrics) {
      return;
    }

    var _engine$renderer$getC = engine.renderer.getContext(),
        matrix = _engine$renderer$getC.matrix,
        colorTransform = _engine$renderer$getC.colorTransform;

    if (colorTransform.alphaMultiplier <= 0) {
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
    var lines = metrics.lines;
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

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];

      if (line.symbols.length) {
        var first = line.symbols[0];
        var alignValue = _data_format__WEBPACK_IMPORTED_MODULE_4__.TextFormat.getAlignValue(first.format);
        var x = (realWidth - line.width) * alignValue;

        if (x < 0) {
          x = 0;
        }

        x += offsetX;
        var symbols = line.symbols;
        var lineHeight = line.height * CORRECTION;

        for (var j = 0; j < symbols.length; j++) {
          var symbol = symbols[j];
          var size = symbol.format.size;
          var alignSymbolValue = _data_format__WEBPACK_IMPORTED_MODULE_4__.TextFormat.getVerticalAlignValue(symbol.format);
          var symbolSize = size * CORRECTION;
          context2d.font = _data_font__WEBPACK_IMPORTED_MODULE_2__.Font.getStyleFont(symbol.format.font, size);
          context2d.fillStyle = _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_1__.CanvasPatterns.colorPattern(symbol.format.color, symbol.format.alpha, colorTransform);
          context2d.fillText(symbol.symbol, x, y + symbolSize + alignSymbolValue * (lineHeight - symbolSize));
          x += symbol.advance;
        }
      }

      y += line.height;
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
    switch (format.align) {
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
    switch (format.verticalAlign) {
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
      var symbolFont = _font__WEBPACK_IMPORTED_MODULE_0__.Font.getFont(symbolFormat.font);

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

          var _symbolFont = _font__WEBPACK_IMPORTED_MODULE_0__.Font.getFont(_symbolFormat.font);

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

          var _symbolFont2 = _font__WEBPACK_IMPORTED_MODULE_0__.Font.getFont(_symbolFormat2.font);

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

    var width = component.width;
    var wordWrap = _text__WEBPACK_IMPORTED_MODULE_2__.Text.isWordWrap(component);
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

  function isAutoSize(component) {
    return !component.width && !component.height;
  }

  Text.isAutoSize = isAutoSize;

  function isWordWrap(component) {
    var _component$wordWrap;

    return (_component$wordWrap = component.wordWrap) !== null && _component$wordWrap !== void 0 ? _component$wordWrap : true;
  }

  Text.isWordWrap = isWordWrap;

  function isMultiline(component) {
    var _component$multiline;

    return (_component$multiline = component.multiline) !== null && _component$multiline !== void 0 ? _component$multiline : true;
  }

  Text.isMultiline = isMultiline;

  function calculateBounds(component, bounds) {
    var metrics = _data_metrics__WEBPACK_IMPORTED_MODULE_2__.TextMetrics.getMetrics(component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jYW52YXMtZW5naW5lL2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NhbnZhcy1lbmdpbmUvZGlzdC9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvY29tcG9uZW50cy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9jb3JlL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvcmUvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvcGl2b3QuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9leHRlbnNpb25zL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9leHRlbnNpb25zL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvdXBkYXRlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL2RlYnVnLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvcG9pbnRlcnMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3RpY2tlci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3VwZGF0ZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2lucHV0L21vdXNlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvYm91bmRzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvY29sb3ItdHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9wb2ludC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvaW1hZ2UvZGlzdC9jYW52YXMtaW1hZ2UtY29sb3IuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvY2FudmFzLWltYWdlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9pbWFnZS9kaXN0L2ltYWdlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9pbWFnZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9yZXNvdXJjZXMvZGlzdC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvcmVzb3VyY2VzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3Jlc291cmNlcy9kaXN0L3N0cmluZy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2NlbmUvZGlzdC9zY2VuZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvZWxsaXBzZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvcGF0aC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9zaGFwZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvc3RyaW5nLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9zdHlsZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9kYXRhL2RhdGEuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvZGF0YS9wYXRoLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2RhdGEvc3RyaW5nLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2dyYXBoaWNzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L3NoYXBlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvY2FudmFzL3RleHQuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC9kYXRhL2ZvbnQuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC9kYXRhL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2RhdGEvbWV0cmljcy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvdGV4dC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdHdlZW4vZGlzdC9lYXNpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3R3ZWVuL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3R3ZWVuL2Rpc3QvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2FydGlmYWN0LnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9hc3NldHMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2VuZ2luZS9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2VuZ2luZS9pbWFnZS50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvZW5naW5lL3BsYXRmb3JtLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9lbmdpbmUvcmVzb3VyY2VzLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9mcHMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL3ByZWxvYWRlci50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvdW5pdC50cyIsIndlYnBhY2s6Ly9zYW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2FtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zYW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiQ2FudmFzRW5naW5lIiwibW9kdWxlIiwiUGxhdGZvcm0iLCJDYW52YXNQbGF0Zm9ybSIsIkVuZ2luZSIsInBvaW50MSIsIlBvaW50IiwicG9pbnQyIiwiQ2FudmFzUGF0dGVybnMiLCJjb2xvclBhdHRlcm4iLCJjb2xvciIsImFscGhhIiwiY3QiLCJyIiwiZyIsImIiLCJhIiwiQ29sb3JUcmFuc2Zvcm0iLCJyZWRNdWx0aXBsaWVyIiwicmVkT2Zmc2V0IiwiZ3JlZW5NdWx0aXBsaWVyIiwiZ3JlZW5PZmZzZXQiLCJibHVlTXVsdGlwbGllciIsImJsdWVPZmZzZXQiLCJhbHBoYU11bHRpcGxpZXIiLCJhbHBoYU9mZnNldCIsImFkZEdyYWRpZW50Q29sb3JzIiwicGF0dGVybiIsImNvbG9ycyIsImFscGhhcyIsInJhdGlvcyIsImNvbG9yVHJhbnNmb3JtIiwiaSIsImxlbmd0aCIsInJnYiIsInJhdGlvIiwiYWRkQ29sb3JTdG9wIiwicmFkaWFsR3JhZGllbnRQYXR0ZXJuIiwibWF0cml4IiwiY29udGV4dCIsIngiLCJ5IiwiTWF0cml4IiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJ0eCIsInR5IiwiTWF0aCIsImFicyIsImxpbmVhckdyYWRpZW50UGF0dGVybiIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYml0bWFwUGF0dGVybiIsImltYWdlIiwicmVwZWF0IiwiY3JlYXRlUGF0dGVybiIsImFyZ3VtZW50cyIsInZpZXciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0cyIsImdldENvbnRleHQiLCJjdXN0b21Db250ZXh0cyIsInB1c2giLCJwb3AiLCJlbmdpbmUiLCJkZWJ1ZyIsIndhcm5pbmciLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImNsZWFyIiwidXBkYXRlU2l6ZSIsInNldFRyYW5zZm9ybSIsImNsZWFyUmVjdCIsInNjcmVlbiIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwicGl4ZWxSYXRpbyIsImdldFBpeGVsUmF0aW8iLCJ2aWV3V2lkdGgiLCJmbG9vciIsInZpZXdIZWlnaHQiLCJzdHlsZSIsIkNPTlRBSU5FUiIsIkNvbnRhaW5lciIsIm51bUNoaWxkcmVuIiwiY29udGFpbmVyIiwiY2hpbGRyZW4iLCJBcnJheSIsImlzQXJyYXkiLCJ0eXBlIiwia2V5cyIsIk9iamVjdCIsIkNvbnRhaW5lckV4dGVuc2lvbiIsInJlbmRlciIsInJlbmRlcmVyIiwiZGVwdGgiLCJjb21wb25lbnQiLCJyZW5kZXJDb21wb25lbnQiLCJjb21wb25lbnRzTWFwIiwidXBkYXRlIiwidXBkYXRlciIsInVwZGF0ZUNvbXBvbmVudCIsImhpdFRlc3QiLCJwb2ludGVyRXZlbnRzIiwicG9pbnRlcnMiLCJyZXN1bHQiLCJkaXNwYXRjaENvbXBvbmVudCIsImxvYWRlZCIsImxvYWRpbmciLCJwcm9ncmVzcyIsImNvbXBvbmVudENvbnRleHQiLCJpbml0IiwiY29tcG9uZW50cyIsInNldCIsIkxPQURFUiIsIkxvYWRlciIsImdldExvYWRpbmdQcm9ncmVzcyIsImxvYWRlciIsImxvYWRpbmdQcm9ncmVzcyIsImlzTG9hZGVkIiwibmVlZExvYWRpbmdDaGVjayIsImxvYWRpbmdDaGVjayIsIkxvYWRlckV4dGVuc2lvbiIsIm9uTG9hZGVkIiwiQ29tcG9uZW50cyIsIlNjcmVlbiIsIlVwZGF0ZXIiLCJMb2FkaW5nIiwiUmVuZGVyZXIiLCJQb2ludGVycyIsIlRpY2tlciIsIkRlYnVnIiwiUmVzb3VyY2VzIiwicGxhdGZvcm0iLCJ0aWNrZXIiLCJyZXNvdXJjZXMiLCJFbmdpbmVGZWF0dXJlIiwiRGlzcGxheSIsImlzVmlzaWJsZSIsInZpc2libGUiLCJQaXZvdCIsImdldFgiLCJwaXZvdCIsInBpdm90WCIsImdldFkiLCJwaXZvdFkiLCJoYXNWYWx1ZXMiLCJoYW5kbGVyc01hcCIsInBvaW50ZXJEb3duIiwicG9pbnRlclVwIiwicG9pbnRlck1vdmUiLCJwb2ludGVyT3ZlciIsInBvaW50ZXJPdXQiLCJQb2ludGVyIiwiaXNQb2ludGVyT3ZlciIsInBvaW50ZXIiLCJpc1BvaW50ZXJFbmFibGVkIiwicG9pbnRlckVuYWJsZWQiLCJkaXNwYXRjaEV2ZW50IiwiaWQiLCJoYW5kbGVyTmFtZSIsImV2ZW50IiwiVHJhbnNmb3JtIiwiZ2V0TWF0cml4IiwidHJhbnNmb3JtIiwiYyIsImQiLCJyb3RhdGlvbiIsInNjYWxlWCIsInNjYWxlIiwic2NhbGVZIiwiY29zIiwic2luIiwiZ2V0Q29sb3JUcmFuc2Zvcm0iLCJ0aW50IiwidmFsdWUiLCJ2YWx1ZUludmVydGVkIiwiYnJpZ2h0bmVzcyIsInVuZGVmaW5lZCIsInBlcmNlbnQiLCJvZmZzZXQiLCJVcGRhdGUiLCJpc0VuYWJsZWQiLCJlbmFibGVkIiwidGltZSIsIm9uVXBkYXRlIiwicHJvcGVydGllcyIsIk1hcCIsImVycm9ycyIsIndhcm5pbmdzIiwiY29uc29sZSIsImxvZyIsImFyZ3MiLCJTdHJpbmciLCJjb3VudCIsImdldCIsImVycm9yIiwid2FybiIsImVsYXBzZWRUaW1lIiwiaGFuZGxlciIsInJvb3QiLCJzdGFydFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImdsb2JhbCIsImxvY2FsIiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJiYXNlIiwicGFyZW50IiwiYmVnaW4iLCJlbmQiLCJSZXNvdXJjZSIsImdldFByb2dyZXNzIiwicmVzb3VyY2UiLCJieXRlc1RvdGFsIiwiYnl0ZXNMb2FkZWQiLCJyZXNvbHZlcnMiLCJTZXQiLCJhc3NldCIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1bGxzY3JlZW4iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiZnJhbWVSYXRlIiwicGF1c2VkIiwidXBkYXRlRnJhbWUiLCJjdXJyZW50VGltZSIsImRlbHRhVGltZSIsInVwZGF0ZU5leHRGcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZVByb3BlcnRpZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJjbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRMZWZ0IiwiY2xpZW50WSIsInRvcCIsImNsaWVudFRvcCIsImRpc3BhdGNoIiwicHJldmVudERlZmF1bHQiLCJNb3VzZUV4dGVuc2lvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJCb3VuZHMiLCJlbXB0eSIsIm1pblgiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJtaW5ZIiwibWF4WCIsIk1JTl9WQUxVRSIsIm1heFkiLCJzZXRFbXB0eSIsImJvdW5kcyIsImlzRW1wdHkiLCJ0b1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInRlc3RYIiwidGVzdFkiLCJ0ZXN0IiwidGVzdFBvaW50IiwicG9pbnQiLCJpc0VtcHR5V2l0aEFscGhhIiwiY29weSIsImZyb20iLCJ0byIsImNvbmNhdCIsImN0MSIsImN0MCIsIm1hdHJpeDAiLCJtYXRyaXgxIiwiZ2V0RGV0ZXJtaW5hbnQiLCJpbnZlcnQiLCJkZXRlcm1pbmFudCIsInRyYW5zZm9ybVBvaW50IiwidHJhbnNmb3JtUG9pbnRMb2NhbCIsInRyYW5zZm9ybUludmVyc2VQb2ludCIsInRyYW5zZm9ybUJvdW5kcyIsInJ4IiwicnkiLCJyciIsInJiIiwibngxIiwibnkxIiwibngyIiwibnkyIiwibngzIiwibnkzIiwibng0Iiwibnk0IiwicmlnaHQiLCJib3R0b20iLCJzcXJ0IiwiYW5nbGUiLCJhdGFuMiIsImVxdWFscyIsInBvaW50MCIsInNvdXJjZSIsInRhcmdldCIsIm5vcm1hbGl6ZSIsInRoaWNrbmVzcyIsImRpc3RhbmNlIiwiZHgiLCJkeSIsImludGVycG9sYXRlIiwicG9sYXIiLCJSZWN0YW5nbGUiLCJjb250YWlucyIsIkNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24iLCJzcmMiLCJjb250ZXh0MmQiLCJnbG9iYWxBbHBoYSIsImRyYXdJbWFnZSIsImN1c3RvbUNvbnRleHQiLCJjcmVhdGVDdXN0b21Db250ZXh0IiwiaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwicm0iLCJnbSIsImJtIiwiYW0iLCJybyIsImdvIiwiYm8iLCJhbyIsImRhdGEiLCJwdXRJbWFnZURhdGEiLCJkZXN0cm95Q3VzdG9tQ29udGV4dCIsIkltYWdlRXh0ZW5zaW9uIiwiSU1BR0UiLCJDYW52YXNJbWFnZUV4dGVuc2lvbiIsIkltYWdlIiwiY2FsY3VsYXRlQm91bmRzIiwiSW1hZ2VSZXNvdXJjZSIsImV4dGVuc2lvbiIsInNwbGl0Iiwib25sb2FkIiwib25lcnJvciIsImUiLCJhZGQiLCJTdHJpbmdSZXNvdXJjZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ucHJvZ3Jlc3MiLCJ0b3RhbCIsInJlc3BvbnNlVGV4dCIsInNlbmQiLCJTQ0VORSIsIlNjZW5lRXh0ZW5zaW9uIiwic2NlbmUiLCJKU09OIiwicGFyc2UiLCJtZXNzYWdlIiwiUElfMiIsIlBJIiwiYXBwbHlFbGxpcHNlIiwicmFkaXVzIiwicmFkaXVzWCIsInJhZGl1c1kiLCJiZWdpblBhdGgiLCJlbGxpcHNlIiwiY2xvc2VQYXRoIiwiYXBwbHlDb21tYW5kIiwiY29tbWFuZCIsIm1vdmVUbyIsImxpbmVUbyIsImN1cnZlVG8iLCJxdWFkcmF0aWNDdXJ2ZVRvIiwiY3giLCJjeSIsImN1YmljQ3VydmVUbyIsImJlemllckN1cnZlVG8iLCJzeCIsInN5IiwiYXBwbHlQYXRoIiwiYXBwbHlSZWN0YW5nbGUiLCJyZWN0IiwicmVuZGVyR3JhcGhpY3MiLCJmaWxsIiwic3Ryb2tlIiwiaGFzRmlsbCIsImhhc1N0cm9rZSIsImV4aXN0IiwicGF0aCIsImFwcGx5U3RyaW5nIiwic2V0RmlsbFN0eWxlIiwic2V0U3Ryb2tlU3R5bGUiLCJDYW52YXNTaGFwZUV4dGVuc2lvbiIsInNoYXBlIiwiU2hhcGUiLCJTaGFwZUV4dGVuc2lvbiIsIlNIQVBFIiwicmVhZGVyIiwiR3JhcGhpY3NTdHJpbmdSZWFkZXIiLCJzZXRQYXRoIiwicmVhZE5leHQiLCJnZXRDb21tYW5kIiwiZW1wdHlNYXRyaXgiLCJlbXB0eUFycmF5IiwiZ2V0Q2FudmFzUGF0dGVybiIsInNvbGlkIiwibWwiLCJjbCIsImFsIiwicmwiLCJtciIsImNyIiwiYXIiLCJiaXRtYXBGaWxsIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJsaW5lQ2FwIiwibGluZUpvaW4iLCJtaXRlckxpbWl0IiwiY2FwcyIsImpvaW50cyIsIlJlY3RhbmdsZURhdGEiLCJFbGxpcHNlRGF0YSIsIlBhdGhEYXRhIiwicGF0aERhdGEiLCJHcmFwaGljc1N0cmluZyIsIlBhdGhDb21tYW5kIiwiR3JhcGhpY3NEYXRhIiwiTlVNQkVSU19DT1VOVCIsIk0iLCJtIiwiTCIsImwiLCJIIiwiaCIsIlYiLCJ2IiwiQyIsIlMiLCJzIiwiUSIsInEiLCJUIiwidCIsIkdyYXBoaWNzU3RyaW5nU3RyZWFtIiwiYnVmZmVyIiwiY29tbWFuZFJlZ2V4IiwibnVtYmVyUmVnZXgiLCJsYXN0SW5kZXgiLCJjb21tYW5kTWF0Y2giLCJleGVjIiwiaW5kZXgiLCJudW1iZXJNYXRjaCIsInBhcnNlRmxvYXQiLCJzdHJlYW0iLCJjb21tYW5kRXhpc3RzIiwibGFzdFgiLCJsYXN0WSIsImxhc3RDWCIsImxhc3RDWSIsImdldEJ1ZmZlciIsImUwIiwiZTEiLCJlMiIsImUzIiwiZTQiLCJlNSIsIkdyYXBoaWNzIiwic21vb3RoIiwic3ByZWFkIiwiaW50ZXJwb2xhdGlvbiIsImZvY2FsUG9pbnRSYXRpbyIsInBpeGVsSGludGluZyIsInNjYWxlTW9kZSIsImdldFBhdGgiLCJlbGxpcHNlV2lkdGgiLCJlbGxpcHNlSGVpZ2h0IiwidyIsImsiLCJveCIsIm95IiwieGUiLCJ5ZSIsInhtIiwieW0iLCJjcmVhdGVEYXRhIiwiZ3JhcGhpY3NEYXRhIiwiZ2V0R3JhcGhpY3MiLCJkZWZhdWx0VGV4dEZvcm1hdCIsIkNPUlJFQ1RJT04iLCJDYW52YXNUZXh0RXh0ZW5zaW9uIiwibWV0cmljcyIsIlRleHRNZXRyaWNzIiwiZm9ybWF0IiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsIlRleHRGb3JtYXQiLCJyZWFsV2lkdGgiLCJyZWFsSGVpZ2h0Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJsaW5lcyIsImFsaWduVmVydGljYWxWYWx1ZSIsInRleHRCYXNlbGluZSIsImxpbmUiLCJzeW1ib2xzIiwiZmlyc3QiLCJhbGlnblZhbHVlIiwibGluZUhlaWdodCIsImoiLCJzeW1ib2wiLCJzaXplIiwiYWxpZ25TeW1ib2xWYWx1ZSIsInN5bWJvbFNpemUiLCJmb250IiwiRm9udCIsImZpbGxUZXh0IiwiYWR2YW5jZSIsIlRleHRFeHRlbnNpb24iLCJURVhUIiwiRU0iLCJmb250cyIsImdldFN0eWxlRm9udCIsIm1lYXN1cmVUZXh0IiwidGV4dCIsImdldENoYXJXaWR0aCIsImNoYXIiLCJ3aWR0aHMiLCJuYW1lIiwiZ2V0S2VybmluZyIsInNlY29uZCIsInBhaXIiLCJrZXJuaW5nIiwia2VybmluZ3MiLCJ3aWR0aFNlY29uZCIsIndpZHRoVG90YWwiLCJnZXRBZHZhbmNlIiwiZ2V0Rm9udCIsImJvbGQiLCJpdGFsaWMiLCJ1bmRlcmxpbmUiLCJsZXR0ZXJTcGFjaW5nIiwibGVhZGluZyIsImFsaWduIiwidmVydGljYWxBbGlnbiIsImNvbWJpbmUiLCJkZWZhdWx0Rm9ybWF0IiwiZ2V0QWxpZ25WYWx1ZSIsImdldFZlcnRpY2FsQWxpZ25WYWx1ZSIsIlRleHRMaW5lIiwiY3JlYXRlIiwibWF4IiwiY29ycmVjdFdpZHRoIiwibGFzdCIsImNvcnJlY3RIZWlnaHQiLCJnZXRTeW1ib2xzIiwic3ltYm9sRm9ybWF0Iiwic3ltYm9sRm9udCIsInN5bWJvbE5leHQiLCJibG9jayIsImdldExpbmVzIiwid29yZFdyYXAiLCJUZXh0IiwibXVsdGlsaW5lIiwid29yZCIsImdldE1ldHJpY3MiLCJnZXRUZXh0IiwiaXNBdXRvU2l6ZSIsImlzV29yZFdyYXAiLCJpc011bHRpbGluZSIsIkxJTkVBUiIsIlFVQURSQVRJQyIsIlFVQURSQVRJQ19JTiIsIlFVQURSQVRJQ19PVVQiLCJDVUJJQyIsIkNVQklDX0lOIiwiQ1VCSUNfT1VUIiwiUVVBUlRJQyIsIlFVQVJUSUNfSU4iLCJRVUFSVElDX09VVCIsIlFVSU5USUMiLCJRVUlOVElDX0lOIiwiUVVJTlRJQ19PVVQiLCJTSU5VU09JREFMIiwiU0lOVVNPSURBTF9JTiIsIlNJTlVTT0lEQUxfT1VUIiwiRVhQT05FTlRJQUwiLCJFWFBPTkVOVElBTF9JTiIsIkVYUE9ORU5USUFMX09VVCIsIkNJUkNVTEFSIiwiQ0lSQ1VMQVJfSU4iLCJDSVJDVUxBUl9PVVQiLCJFTEFTVElDIiwiRUxBU1RJQ19JTiIsIkVMQVNUSUNfT1VUIiwiQkFDSyIsIkJBQ0tfSU4iLCJCQUNLX09VVCIsIkJPVU5DRSIsIkJPVU5DRV9JTiIsIkJPVU5DRV9PVVQiLCJlYXNpbmciLCJwb3ciLCJUV0VFTiIsIlR3ZWVuRXh0ZW5zaW9uIiwidHdlZW4iLCJwaGFzZXMiLCJwaGFzZSIsImVhc2luZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImVhc2luZ01ldGhvZCIsImVhc2luZ1ZhbHVlIiwic3RhdGUiLCJrZXkiLCJmcm9tVmFsdWUiLCJ0b1ZhbHVlIiwic3RhdGVWYWx1ZSIsImxvb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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QUFHLElBQUksdURBQXFCLEVBQUUsQ0FBQztBQUNwRCxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBYyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxpREFBWSxDQUFDLENBQUM7QUFDckUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0RBQWlCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLG9EQUFlLENBQUMsQ0FBQztBQUMzRSxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBDYW52YXNQbGF0Zm9ybSB9IGZyb20gJy4vcGxhdGZvcm0nO1xuZXhwb3J0IGNsYXNzIENhbnZhc0VuZ2luZSBleHRlbmRzIEVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IobW9kdWxlID0ge30pIHtcbiAgICAgICAgbW9kdWxlLlBsYXRmb3JtID0gbW9kdWxlLlBsYXRmb3JtID8/IENhbnZhc1BsYXRmb3JtO1xuICAgICAgICBzdXBlcihtb2R1bGUpO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vcGF0dGVybnMnO1xuZXhwb3J0ICogZnJvbSAnLi9wbGF0Zm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2VuZ2luZSc7XG4iLCJpbXBvcnQgeyBDb2xvclRyYW5zZm9ybSwgTWF0cml4LCBQb2ludCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuY29uc3QgcG9pbnQxID0gUG9pbnQuZW1wdHkoKTtcbmNvbnN0IHBvaW50MiA9IFBvaW50LmVtcHR5KCk7XG5leHBvcnQgdmFyIENhbnZhc1BhdHRlcm5zO1xuKGZ1bmN0aW9uIChDYW52YXNQYXR0ZXJucykge1xuICAgIGZ1bmN0aW9uIGNvbG9yUGF0dGVybihjb2xvciwgYWxwaGEsIGN0KSB7XG4gICAgICAgIGxldCByID0gY29sb3IgPj4gMTYgJiAweGZmO1xuICAgICAgICBsZXQgZyA9IGNvbG9yID4+IDggJiAweGZmO1xuICAgICAgICBsZXQgYiA9IGNvbG9yICYgMHhmZjtcbiAgICAgICAgbGV0IGEgPSBhbHBoYSAqIDB4ZmY7XG4gICAgICAgIGlmICghQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eShjdCkpIHtcbiAgICAgICAgICAgIHIgPSAociAqIGN0LnJlZE11bHRpcGxpZXIgKyBjdC5yZWRPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIGcgPSAoZyAqIGN0LmdyZWVuTXVsdGlwbGllciArIGN0LmdyZWVuT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBiID0gKGIgKiBjdC5ibHVlTXVsdGlwbGllciArIGN0LmJsdWVPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIGEgPSAoYSAqIGN0LmFscGhhTXVsdGlwbGllciArIGN0LmFscGhhT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEgPCAweGZmKSB7XG4gICAgICAgICAgICByZXR1cm4gYHJnYmEoJHtyfSwgJHtnfSwgJHtifSwgJHthIC8gMHhmZn0pYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYHJnYigke3J9LCAke2d9LCAke2J9KWA7XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybiA9IGNvbG9yUGF0dGVybjtcbiAgICBmdW5jdGlvbiBhZGRHcmFkaWVudENvbG9ycyhwYXR0ZXJuLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmdiID0gY29sb3JzW2ldO1xuICAgICAgICAgICAgY29uc3QgYWxwaGEgPSBhbHBoYXNbaV07XG4gICAgICAgICAgICBsZXQgcmF0aW8gPSByYXRpb3NbaV0gLyAweEZGO1xuICAgICAgICAgICAgaWYgKHJhdGlvIDwgMClcbiAgICAgICAgICAgICAgICByYXRpbyA9IDA7XG4gICAgICAgICAgICBpZiAocmF0aW8gPiAxKVxuICAgICAgICAgICAgICAgIHJhdGlvID0gMTtcbiAgICAgICAgICAgIHBhdHRlcm4uYWRkQ29sb3JTdG9wKHJhdGlvLCBjb2xvclBhdHRlcm4ocmdiLCBhbHBoYSwgY29sb3JUcmFuc2Zvcm0pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5hZGRHcmFkaWVudENvbG9ycyA9IGFkZEdyYWRpZW50Q29sb3JzO1xuICAgIGZ1bmN0aW9uIHJhZGlhbEdyYWRpZW50UGF0dGVybihtYXRyaXgsIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgICAgIHBvaW50MS54ID0gMTYzOC40O1xuICAgICAgICBwb2ludDEueSA9IDA7XG4gICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHBvaW50MSwgcG9pbnQxKTtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQobWF0cml4LnR4LCBtYXRyaXgudHksIDAsIG1hdHJpeC50eCwgbWF0cml4LnR5LCBNYXRoLmFicygocG9pbnQxLnggLSBtYXRyaXgudHgpIC8gMikpO1xuICAgICAgICBhZGRHcmFkaWVudENvbG9ycyhwYXR0ZXJuLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5yYWRpYWxHcmFkaWVudFBhdHRlcm4gPSByYWRpYWxHcmFkaWVudFBhdHRlcm47XG4gICAgZnVuY3Rpb24gbGluZWFyR3JhZGllbnRQYXR0ZXJuKG1hdHJpeCwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgICAgICAgcG9pbnQxLnggPSAtODE5LjI7XG4gICAgICAgIHBvaW50MS55ID0gMDtcbiAgICAgICAgcG9pbnQyLnggPSA4MTkuMjtcbiAgICAgICAgcG9pbnQyLnkgPSAwO1xuICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludDEsIHBvaW50MSk7XG4gICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHBvaW50MiwgcG9pbnQyKTtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IGNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQocG9pbnQxLngsIHBvaW50MS55LCBwb2ludDIueCwgcG9pbnQyLnkpO1xuICAgICAgICBhZGRHcmFkaWVudENvbG9ycyhwYXR0ZXJuLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5saW5lYXJHcmFkaWVudFBhdHRlcm4gPSBsaW5lYXJHcmFkaWVudFBhdHRlcm47XG4gICAgZnVuY3Rpb24gYml0bWFwUGF0dGVybihpbWFnZSwgcmVwZWF0LCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVBhdHRlcm4oaW1hZ2UsIHJlcGVhdCA/ICdyZXBlYXQnIDogJ25vbmUnKTtcbiAgICAgICAgaWYgKHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMuYml0bWFwUGF0dGVybiA9IGJpdG1hcFBhdHRlcm47XG59KShDYW52YXNQYXR0ZXJucyB8fCAoQ2FudmFzUGF0dGVybnMgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAamVuZy9jb3JlJztcbmV4cG9ydCBjbGFzcyBDYW52YXNQbGF0Zm9ybSBleHRlbmRzIFBsYXRmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbdGhpcy52aWV3LmdldENvbnRleHQoJzJkJyldO1xuICAgICAgICB0aGlzLmN1c3RvbUNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRzW3RoaXMuY29udGV4dHMubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIHNhdmVDb250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICByZXN0b3JlQ29udGV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0cy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmRlYnVnLndhcm5pbmcoJ1RyeWluZyB0byByZXN0b3JlIG1haW4gY29udGV4dCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUN1c3RvbUNvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0O1xuICAgICAgICBpZiAodGhpcy5jdXN0b21Db250ZXh0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmN1c3RvbUNvbnRleHRzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnZpZXc7XG4gICAgICAgIGlmIChjb250ZXh0LmNhbnZhcy53aWR0aCAhPT0gd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRleHQuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgICBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIGRlc3Ryb3lDdXN0b21Db250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jdXN0b21Db250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICBiZWdpbigpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgpO1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB2aWV3LndpZHRoLCB2aWV3LmhlaWdodCk7XG4gICAgfVxuICAgIHVwZGF0ZVNpemUoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbmdpbmUuc2NyZWVuLmdldFdpZHRoKCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRIZWlnaHQoKTtcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIGNvbnN0IHZpZXdXaWR0aCA9IE1hdGguZmxvb3Iod2lkdGggKiBwaXhlbFJhdGlvKTtcbiAgICAgICAgY29uc3Qgdmlld0hlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgaWYgKHZpZXcud2lkdGggIT09IHZpZXdXaWR0aCB8fCB2aWV3LmhlaWdodCAhPT0gdmlld0hlaWdodCkge1xuICAgICAgICAgICAgdmlldy53aWR0aCA9IHZpZXdXaWR0aDtcbiAgICAgICAgICAgIHZpZXcuaGVpZ2h0ID0gdmlld0hlaWdodDtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ09OVEFJTkVSID0gJ2NvbnRhaW5lcic7XG5leHBvcnQgdmFyIENvbnRhaW5lcjtcbihmdW5jdGlvbiAoQ29udGFpbmVyKSB7XG4gICAgZnVuY3Rpb24gbnVtQ2hpbGRyZW4oY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbik7XG4gICAgICAgICAgICByZXR1cm4ga2V5cy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIENvbnRhaW5lci5udW1DaGlsZHJlbiA9IG51bUNoaWxkcmVuO1xufSkoQ29udGFpbmVyIHx8IChDb250YWluZXIgPSB7fSkpO1xuZXhwb3J0IHZhciBDb250YWluZXJFeHRlbnNpb247XG4oZnVuY3Rpb24gKENvbnRhaW5lckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgcmVuZGVyZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgcmVuZGVyZXIuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlcmVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHVwZGF0ZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBwb2ludGVyczogcG9pbnRlckV2ZW50cyB9ID0gZW5naW5lO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBwb2ludGVyRXZlbnRzLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHMuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcG9pbnRlckV2ZW50cy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwb2ludGVyRXZlbnRzLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBrZXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50ZXJFdmVudHMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBsb2FkaW5nIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgbG9hZGluZy5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gbG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzICs9IGNvbXBvbmVudENvbnRleHQucHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudENvbnRleHQubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzIC89IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBsb2FkaW5nLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGNvbXBvbmVudENvbnRleHQubG9hZGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgKz0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50Q29udGV4dC5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgLz0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvYWRpbmcuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5zZXQoQ09OVEFJTkVSLCB1cGRhdGUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KENPTlRBSU5FUiwgcmVuZGVyKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoQ09OVEFJTkVSLCBoaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChDT05UQUlORVIsIGxvYWRlZCk7XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENvbnRhaW5lckV4dGVuc2lvbiB8fCAoQ29udGFpbmVyRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IENvbnRhaW5lckV4dGVuc2lvbiB9IGZyb20gJy4vY29udGFpbmVyJztcbmV4cG9ydCBjb25zdCBMT0FERVIgPSAnbG9hZGVyJztcbmV4cG9ydCB2YXIgTG9hZGVyO1xuKGZ1bmN0aW9uIChMb2FkZXIpIHtcbiAgICBmdW5jdGlvbiBnZXRMb2FkaW5nUHJvZ3Jlc3MobG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZGluZ1Byb2dyZXNzID8/IDA7XG4gICAgfVxuICAgIExvYWRlci5nZXRMb2FkaW5nUHJvZ3Jlc3MgPSBnZXRMb2FkaW5nUHJvZ3Jlc3M7XG4gICAgZnVuY3Rpb24gaXNMb2FkZWQobG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZGVkID8/IGZhbHNlO1xuICAgIH1cbiAgICBMb2FkZXIuaXNMb2FkZWQgPSBpc0xvYWRlZDtcbiAgICBmdW5jdGlvbiBuZWVkTG9hZGluZ0NoZWNrKGxvYWRlcikge1xuICAgICAgICByZXR1cm4gbG9hZGVyLmxvYWRpbmdDaGVjayA/PyB0cnVlO1xuICAgIH1cbiAgICBMb2FkZXIubmVlZExvYWRpbmdDaGVjayA9IG5lZWRMb2FkaW5nQ2hlY2s7XG59KShMb2FkZXIgfHwgKExvYWRlciA9IHt9KSk7XG5leHBvcnQgdmFyIExvYWRlckV4dGVuc2lvbjtcbihmdW5jdGlvbiAoTG9hZGVyRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGxvYWRlciwgZW5naW5lKSB7XG4gICAgICAgIGlmICghTG9hZGVyLm5lZWRMb2FkaW5nQ2hlY2sobG9hZGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIENvbnRhaW5lckV4dGVuc2lvbi5sb2FkZWQobG9hZGVyLCBlbmdpbmUpO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLmxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICBsb2FkZXIubG9hZGluZ1Byb2dyZXNzID0gY29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgaWYgKGNvbnRleHQubG9hZGVkICYmICFsb2FkZXIubG9hZGVkKSB7XG4gICAgICAgICAgICBsb2FkZXIubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChsb2FkZXIub25Mb2FkZWQpIHtcbiAgICAgICAgICAgICAgICBsb2FkZXIub25Mb2FkZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBMb2FkZXJFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5zZXQoTE9BREVSLCBDb250YWluZXJFeHRlbnNpb24udXBkYXRlKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChMT0FERVIsIENvbnRhaW5lckV4dGVuc2lvbi5yZW5kZXIpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChMT0FERVIsIENvbnRhaW5lckV4dGVuc2lvbi5oaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChMT0FERVIsIGxvYWRlZCk7XG4gICAgfVxuICAgIExvYWRlckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKExvYWRlckV4dGVuc2lvbiB8fCAoTG9hZGVyRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vZmVhdHVyZXMvcmVuZGVyZXInO1xuaW1wb3J0IHsgVXBkYXRlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3VwZGF0ZXInO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4uL2ZlYXR1cmVzL2xvYWRpbmcnO1xuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi4vZmVhdHVyZXMvc2NyZWVuJztcbmltcG9ydCB7IFBvaW50ZXJzIH0gZnJvbSAnLi4vZmVhdHVyZXMvcG9pbnRlcnMnO1xuaW1wb3J0IHsgVGlja2VyIH0gZnJvbSAnLi4vZmVhdHVyZXMvdGlja2VyJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vZmVhdHVyZXMvcGxhdGZvcm0nO1xuaW1wb3J0IHsgQ29udGFpbmVyRXh0ZW5zaW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IHsgRGVidWcgfSBmcm9tICcuLi9mZWF0dXJlcy9kZWJ1Zyc7XG5pbXBvcnQgeyBSZXNvdXJjZXMgfSBmcm9tICcuLi9mZWF0dXJlcy9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4uL2ZlYXR1cmVzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkZXInO1xuZXhwb3J0IGNsYXNzIEVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IobW9kdWxlID0ge30pIHtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDMyO1xuICAgICAgICBtb2R1bGUuQ29tcG9uZW50cyA9IG1vZHVsZS5Db21wb25lbnRzID8/IENvbXBvbmVudHM7XG4gICAgICAgIG1vZHVsZS5TY3JlZW4gPSBtb2R1bGUuU2NyZWVuID8/IFNjcmVlbjtcbiAgICAgICAgbW9kdWxlLlBsYXRmb3JtID0gbW9kdWxlLlBsYXRmb3JtID8/IFBsYXRmb3JtO1xuICAgICAgICBtb2R1bGUuVXBkYXRlciA9IG1vZHVsZS5VcGRhdGVyID8/IFVwZGF0ZXI7XG4gICAgICAgIG1vZHVsZS5Mb2FkaW5nID0gbW9kdWxlLkxvYWRpbmcgPz8gTG9hZGluZztcbiAgICAgICAgbW9kdWxlLlJlbmRlcmVyID0gbW9kdWxlLlJlbmRlcmVyID8/IFJlbmRlcmVyO1xuICAgICAgICBtb2R1bGUuUG9pbnRlcnMgPSBtb2R1bGUuUG9pbnRlcnMgPz8gUG9pbnRlcnM7XG4gICAgICAgIG1vZHVsZS5UaWNrZXIgPSBtb2R1bGUuVGlja2VyID8/IFRpY2tlcjtcbiAgICAgICAgbW9kdWxlLkRlYnVnID0gbW9kdWxlLkRlYnVnID8/IERlYnVnO1xuICAgICAgICBtb2R1bGUuUmVzb3VyY2VzID0gbW9kdWxlLlJlc291cmNlcyA/PyBSZXNvdXJjZXM7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBtb2R1bGUuQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBtb2R1bGUuU2NyZWVuKCk7XG4gICAgICAgIHRoaXMucGxhdGZvcm0gPSBuZXcgbW9kdWxlLlBsYXRmb3JtKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZXIgPSBuZXcgbW9kdWxlLlVwZGF0ZXIodGhpcyk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IG5ldyBtb2R1bGUuTG9hZGluZyh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBtb2R1bGUuUmVuZGVyZXIodGhpcyk7XG4gICAgICAgIHRoaXMucG9pbnRlcnMgPSBuZXcgbW9kdWxlLlBvaW50ZXJzKHRoaXMpO1xuICAgICAgICB0aGlzLnRpY2tlciA9IG5ldyBtb2R1bGUuVGlja2VyKHRoaXMpO1xuICAgICAgICB0aGlzLmRlYnVnID0gbmV3IG1vZHVsZS5EZWJ1ZygpO1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IG5ldyBtb2R1bGUuUmVzb3VyY2VzKHRoaXMpO1xuICAgICAgICBDb250YWluZXJFeHRlbnNpb24uaW5pdCh0aGlzKTtcbiAgICAgICAgTG9hZGVyRXh0ZW5zaW9uLmluaXQodGhpcyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB9XG59XG4iLCJleHBvcnQgdmFyIERpc3BsYXk7XG4oZnVuY3Rpb24gKERpc3BsYXkpIHtcbiAgICBmdW5jdGlvbiBpc1Zpc2libGUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQudmlzaWJsZSA/PyB0cnVlO1xuICAgIH1cbiAgICBEaXNwbGF5LmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbn0pKERpc3BsYXkgfHwgKERpc3BsYXkgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBQaXZvdDtcbihmdW5jdGlvbiAoUGl2b3QpIHtcbiAgICBmdW5jdGlvbiBnZXRYKHBpdm90LCB3aWR0aCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WCB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFgpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RYICogd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFggPSBnZXRYO1xuICAgIGZ1bmN0aW9uIGdldFkocGl2b3QsIGhlaWdodCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WSB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFkpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RZICogaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBQaXZvdC5nZXRZID0gZ2V0WTtcbiAgICBmdW5jdGlvbiBoYXNWYWx1ZXMocGl2b3QpIHtcbiAgICAgICAgY29uc3QgeyBwaXZvdFgsIHBpdm90WSB9ID0gcGl2b3Q7XG4gICAgICAgIHJldHVybiAhIXBpdm90WCB8fCAhIXBpdm90WTtcbiAgICB9XG4gICAgUGl2b3QuaGFzVmFsdWVzID0gaGFzVmFsdWVzO1xufSkoUGl2b3QgfHwgKFBpdm90ID0ge30pKTtcbiIsImNvbnN0IGhhbmRsZXJzTWFwID0ge1xuICAgIHBvaW50ZXJEb3duOiAnb25Qb2ludGVyRG93bicsXG4gICAgcG9pbnRlclVwOiAnb25Qb2ludGVyVXAnLFxuICAgIHBvaW50ZXJNb3ZlOiAnb25Qb2ludGVyTW92ZScsXG4gICAgcG9pbnRlck92ZXI6ICdvblBvaW50ZXJPdmVyJyxcbiAgICBwb2ludGVyT3V0OiAnb25Qb2ludGVyT3V0Jyxcbn07XG5leHBvcnQgdmFyIFBvaW50ZXI7XG4oZnVuY3Rpb24gKFBvaW50ZXIpIHtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJPdmVyKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuICEhcG9pbnRlci5wb2ludGVyT3ZlcjtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJPdmVyID0gaXNQb2ludGVyT3ZlcjtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJFbmFibGVkKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50ZXIucG9pbnRlckVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkID0gaXNQb2ludGVyRW5hYmxlZDtcbiAgICBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KHBvaW50ZXIsIHR5cGUsIHgsIHksIGlkKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJOYW1lID0gaGFuZGxlcnNNYXBbdHlwZV07XG4gICAgICAgIGlmIChoYW5kbGVyTmFtZSAmJiBwb2ludGVyW2hhbmRsZXJOYW1lXSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZSwgeCwgeSwgaWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcG9pbnRlcltoYW5kbGVyTmFtZV0oZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG59KShQb2ludGVyIHx8IChQb2ludGVyID0ge30pKTtcbiIsImV4cG9ydCB2YXIgVHJhbnNmb3JtO1xuKGZ1bmN0aW9uIChUcmFuc2Zvcm0pIHtcbiAgICBmdW5jdGlvbiBnZXRNYXRyaXgodHJhbnNmb3JtLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKG1hdHJpeCkge1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBtYXRyaXguYSA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSBtYXRyaXguYiA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSBtYXRyaXguYyA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBtYXRyaXguZCA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gbWF0cml4LnR4ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQudHkgPSBtYXRyaXgudHkgPz8gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvdGF0aW9uIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHRyYW5zZm9ybS5zY2FsZVggPz8gdHJhbnNmb3JtLnNjYWxlID8/IDE7XG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IHRyYW5zZm9ybS5zY2FsZVkgPz8gdHJhbnNmb3JtLnNjYWxlID8/IDE7XG4gICAgICAgIHJlc3VsdC50eCA9IHRyYW5zZm9ybS54ID8/IDA7XG4gICAgICAgIHJlc3VsdC50eSA9IHRyYW5zZm9ybS55ID8/IDA7XG4gICAgICAgIGlmIChyb3RhdGlvbikge1xuICAgICAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3Mocm90YXRpb24pO1xuICAgICAgICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW4ocm90YXRpb24pO1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBjb3MgKiBzY2FsZVg7XG4gICAgICAgICAgICByZXN1bHQuYiA9IHNpbiAqIHNjYWxlWDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gLXNpbiAqIHNjYWxlWTtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gY29zICogc2NhbGVZO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hID0gc2NhbGVYO1xuICAgICAgICByZXN1bHQuYiA9IDA7XG4gICAgICAgIHJlc3VsdC5jID0gMDtcbiAgICAgICAgcmVzdWx0LmQgPSBzY2FsZVk7XG4gICAgfVxuICAgIFRyYW5zZm9ybS5nZXRNYXRyaXggPSBnZXRNYXRyaXg7XG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JUcmFuc2Zvcm0odHJhbnNmb3JtLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0ucmVkTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmFscGhhT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0ucmVkT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5ncmVlbk9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5ibHVlT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxwaGEgPSB0cmFuc2Zvcm0uYWxwaGEgPz8gMTtcbiAgICAgICAgY29uc3QgeyB0aW50IH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmICh0aW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IGNvbG9yID0gMCwgdmFsdWUgPSAxIH0gPSB0aW50O1xuICAgICAgICAgICAgY29uc3QgdmFsdWVJbnZlcnRlZCA9IDEgLSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHIgPSAoY29sb3IgPj4gMTYpICYgMHhmZjtcbiAgICAgICAgICAgIGNvbnN0IGcgPSAoY29sb3IgPj4gOCkgJiAweGZmO1xuICAgICAgICAgICAgY29uc3QgYiA9IGNvbG9yICYgMHhmZjtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYTtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gciAqIHZhbHVlO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gZyAqIHZhbHVlO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBiICogdmFsdWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHsgYnJpZ2h0bmVzcyB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAoYnJpZ2h0bmVzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoYnJpZ2h0bmVzcyA+IDEpIHtcbiAgICAgICAgICAgICAgICBicmlnaHRuZXNzID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGJyaWdodG5lc3MgPCAtMSkge1xuICAgICAgICAgICAgICAgIGJyaWdodG5lc3MgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSAxIC0gTWF0aC5hYnMoYnJpZ2h0bmVzcyk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIGlmIChicmlnaHRuZXNzID4gMCkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IGJyaWdodG5lc3MgKiAyNTU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGE7XG4gICAgICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHBlcmNlbnQ7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gcGVyY2VudDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IHBlcmNlbnQ7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYTtcbiAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSAxO1xuICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldENvbG9yVHJhbnNmb3JtID0gZ2V0Q29sb3JUcmFuc2Zvcm07XG59KShUcmFuc2Zvcm0gfHwgKFRyYW5zZm9ybSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFVwZGF0ZTtcbihmdW5jdGlvbiAoVXBkYXRlKSB7XG4gICAgZnVuY3Rpb24gaXNFbmFibGVkKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgVXBkYXRlLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29tcG9uZW50LCB0aW1lKSB7XG4gICAgICAgIGlmIChjb21wb25lbnQub25VcGRhdGUpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5vblVwZGF0ZSh0aW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBVcGRhdGUudXBkYXRlID0gdXBkYXRlO1xufSkoVXBkYXRlIHx8IChVcGRhdGUgPSB7fSkpO1xuIiwiZXhwb3J0IGNsYXNzIENvbXBvbmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVuZGVyID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5oaXRUZXN0ID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IG5ldyBNYXAoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRGVidWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy53YXJuaW5ncyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICB9XG4gICAgZXJyb3IoLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLmVycm9ycy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMuZXJyb3JzLnNldChpZCwgY291bnQpO1xuICAgIH1cbiAgICB3YXJuaW5nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy53YXJuaW5ncy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgdGhpcy53YXJuaW5ncy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChyb290KTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIH1cbiAgICBiZWdpbigpIHtcbiAgICB9XG4gICAgZW5kKCkge1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1hdHJpeCwgUG9pbnQgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuLi9leHRlbnNpb25zL2Rpc3BsYXknO1xuaW1wb3J0IHsgUG9pbnRlciB9IGZyb20gJy4uL2V4dGVuc2lvbnMvcG9pbnRlcic7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9leHRlbnNpb25zL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBQb2ludGVycyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nbG9iYWwgPSBQb2ludC5lbXB0eSgpO1xuICAgICAgICB0aGlzLmxvY2FsID0gUG9pbnQuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5wb2ludGVySWQgPSAwO1xuICAgICAgICB0aGlzLnBvaW50ZXJUeXBlID0gJ3BvaW50ZXJEb3duJztcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBtYXRyaXg6IE1hdHJpeC5lbXB0eSgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICBkaXNwYXRjaCh0eXBlLCB4LCB5LCBpZCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9jYWwueCA9IHg7XG4gICAgICAgIHRoaXMubG9jYWwueSA9IHk7XG4gICAgICAgIHRoaXMuZ2xvYmFsLnggPSB4O1xuICAgICAgICB0aGlzLmdsb2JhbC55ID0geTtcbiAgICAgICAgdGhpcy5wb2ludGVySWQgPSBpZDtcbiAgICAgICAgdGhpcy5wb2ludGVyVHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIE1hdHJpeC5zZXRFbXB0eShiYXNlLm1hdHJpeCk7XG4gICAgICAgIHRoaXMuZGVwdGgrKztcbiAgICAgICAgdGhpcy5kaXNwYXRjaENvbXBvbmVudChyb290LCBiYXNlKTtcbiAgICB9XG4gICAgZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBwYXJlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghRGlzcGxheS5pc1Zpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICBUcmFuc2Zvcm0uZ2V0TWF0cml4KGNvbXBvbmVudCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICAgICAgTWF0cml4LmNvbmNhdChwYXJlbnQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybUludmVyc2VQb2ludChjb250ZXh0Lm1hdHJpeCwgdGhpcy5nbG9iYWwsIHRoaXMubG9jYWwpO1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmxvY2FsO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCB0aGlzLnBvaW50ZXJUeXBlLCB4LCB5LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludGVyVHlwZSA9PT0gJ3BvaW50ZXJNb3ZlJykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgIWNvbXBvbmVudC5wb2ludGVyT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCAncG9pbnRlck92ZXInLCB4LCB5LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFyZXN1bHQgJiYgY29tcG9uZW50LnBvaW50ZXJPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3V0JywgeCwgeSwgdGhpcy5wb2ludGVySWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnQucG9pbnRlck92ZXIgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb2xvclRyYW5zZm9ybSwgTWF0cml4IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy9kaXNwbGF5JztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdHJhbnNmb3JtJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBtYXRyaXg6IE1hdHJpeC5lbXB0eSgpLFxuICAgICAgICAgICAgICAgIGNvbG9yVHJhbnNmb3JtOiBDb2xvclRyYW5zZm9ybS5lbXB0eSgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICByZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBwYXJlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghRGlzcGxheS5pc1Zpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgVHJhbnNmb3JtLmdldENvbG9yVHJhbnNmb3JtKGNvbXBvbmVudCwgY29udGV4dC5jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIE1hdHJpeC5jb25jYXQocGFyZW50Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgQ29sb3JUcmFuc2Zvcm0uY29uY2F0KHBhcmVudC5jb2xvclRyYW5zZm9ybSwgY29udGV4dC5jb2xvclRyYW5zZm9ybSwgY29udGV4dC5jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMuZW5naW5lLnBsYXRmb3JtLmJlZ2luKCk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuZGVwdGgrKztcbiAgICAgICAgTWF0cml4LmNvcHkodGhpcy5lbmdpbmUuc2NyZWVuLmdldE1hdHJpeCgpLCBiYXNlLm1hdHJpeCk7XG4gICAgICAgIENvbG9yVHJhbnNmb3JtLnNldEVtcHR5KGJhc2UuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudChyb290LCBiYXNlKTtcbiAgICAgICAgdGhpcy5lbmdpbmUucGxhdGZvcm0uZW5kKCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCB2YXIgUmVzb3VyY2U7XG4oZnVuY3Rpb24gKFJlc291cmNlKSB7XG4gICAgZnVuY3Rpb24gZ2V0UHJvZ3Jlc3MocmVzb3VyY2UpIHtcbiAgICAgICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc291cmNlLmxvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc291cmNlLmJ5dGVzVG90YWwgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2UuYnl0ZXNMb2FkZWQgLyByZXNvdXJjZS5ieXRlc1RvdGFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBSZXNvdXJjZS5nZXRQcm9ncmVzcyA9IGdldFByb2dyZXNzO1xufSkoUmVzb3VyY2UgfHwgKFJlc291cmNlID0ge30pKTtcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZXMgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVzb2x2ZXJzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBnZXQoYXNzZXQpIHtcbiAgICAgICAgaWYgKCFhc3NldCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc291cmNlID0gdGhpcy5yZXNvdXJjZXMuZ2V0KGFzc2V0KTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICAgICAgcmVzb3VyY2UgPSB0aGlzLnJlc29sdmUoYXNzZXQpO1xuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXMuc2V0KGFzc2V0LCByZXNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgIH1cbiAgICByZXNvbHZlKGFzc2V0KSB7XG4gICAgICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gcmVzb2x2ZXIoYXNzZXQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBSZXNvdXJjZSBub3QgcmVzb2x2ZWQ6ICR7YXNzZXR9YCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1hdHJpeCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuZXhwb3J0IGNsYXNzIFNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSA0MDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDAwO1xuICAgICAgICB0aGlzLnBpeGVsUmF0aW8gPSAwO1xuICAgICAgICB0aGlzLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXRyaXggPSBNYXRyaXguZW1wdHkoKTtcbiAgICB9XG4gICAgZ2V0TWF0cml4KCkge1xuICAgICAgICBjb25zdCBwaXhlbFJhdGlvID0gdGhpcy5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIHRoaXMubWF0cml4LmEgPSBwaXhlbFJhdGlvO1xuICAgICAgICB0aGlzLm1hdHJpeC5kID0gcGl4ZWxSYXRpbztcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICAgIH1cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVsbHNjcmVlbiA/IHdpbmRvdy5pbm5lcldpZHRoIDogdGhpcy53aWR0aDtcbiAgICB9XG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuID8gd2luZG93LmlubmVySGVpZ2h0IDogdGhpcy5oZWlnaHQ7XG4gICAgfVxuICAgIGdldFBpeGVsUmF0aW8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpeGVsUmF0aW8gPiAwID8gdGhpcy5waXhlbFJhdGlvIDogd2luZG93LmRldmljZVBpeGVsUmF0aW8gPz8gMTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGlja2VyIHtcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICAgICAgdGhpcy5mcmFtZVJhdGUgPSAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnVwZGF0ZXIudXBkYXRlKHRpbWUpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUubG9hZGluZy51cGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlbmRlcmVyLnJlbmRlcigpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZUZyYW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IChjdXJyZW50VGltZSAtIHRoaXMudGltZSkgLyAxMDAwO1xuICAgICAgICAgICAgdGhpcy50aW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOZXh0RnJhbWUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgfVxuICAgIGdldCBpc1BhdXNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGF1c2VkO1xuICAgIH1cbiAgICBwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmV4dEZyYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHVwZGF0ZU5leHRGcmFtZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlRnJhbWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFVwZGF0ZSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdXBkYXRlJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFVwZGF0ZXIgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQocm9vdCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG4gICAgdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFVcGRhdGUuaXNFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoY29tcG9uZW50KTtcbiAgICAgICAgVXBkYXRlLnVwZGF0ZShjb21wb25lbnQsIHRoaXMudGltZSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVQcm9wZXJ0aWVzKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnByb3BlcnRpZXMuZm9yRWFjaCgoaGFuZGxlciwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRbcHJvcGVydHldKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9sb2FkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2VuZ2luZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL2NvbXBvbmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9kZWJ1Zyc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3BsYXRmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcG9pbnRlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9yZW5kZXJlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3Jlc291cmNlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3NjcmVlbic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3RpY2tlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3VwZGF0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pbnB1dC9tb3VzZSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvZGlzcGxheSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvcGl2b3QnO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3NvdXJjZSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvdHJhbnNmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy91cGRhdGUnO1xuIiwiZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCB0eXBlKSB7XG4gICAgY29uc3QgeyB2aWV3IH0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgY29uc3QgY2xpZW50UmVjdCA9IHZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSBjbGllbnRSZWN0LmxlZnQgLSB2aWV3LmNsaWVudExlZnQ7XG4gICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSBjbGllbnRSZWN0LnRvcCAtIHZpZXcuY2xpZW50VG9wO1xuICAgIGVuZ2luZS5wb2ludGVycy5kaXNwYXRjaCh0eXBlLCB4LCB5LCAwKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZXhwb3J0IHZhciBNb3VzZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoTW91c2VFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJEb3duJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJVcCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJNb3ZlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBNb3VzZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKE1vdXNlRXh0ZW5zaW9uIHx8IChNb3VzZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIEJvdW5kcztcbihmdW5jdGlvbiAoQm91bmRzKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtaW5YOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWluWTogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG1heFg6IE51bWJlci5NSU5fVkFMVUUsXG4gICAgICAgICAgICBtYXhZOiBOdW1iZXIuTUlOX1ZBTFVFLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBCb3VuZHMuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShib3VuZHMpIHtcbiAgICAgICAgYm91bmRzLm1pblggPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWluWSA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGJvdW5kcy5tYXhYID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1heFkgPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgIH1cbiAgICBCb3VuZHMuc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KGJvdW5kcykge1xuICAgICAgICByZXR1cm4gYm91bmRzLm1pblggPT09IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5taW5ZID09PSBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWF4WCA9PT0gTnVtYmVyLk1JTl9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1heFkgPT09IE51bWJlci5NSU5fVkFMVUU7XG4gICAgfVxuICAgIEJvdW5kcy5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiB0b1JlY3RhbmdsZShib3VuZHMsIHJlY3RhbmdsZSkge1xuICAgICAgICBjb25zdCB7IG1pblgsIG1pblksIG1heFgsIG1heFksIH0gPSBib3VuZHM7XG4gICAgICAgIHJlY3RhbmdsZS54ID0gbWluWDtcbiAgICAgICAgcmVjdGFuZ2xlLnkgPSBtaW5ZO1xuICAgICAgICByZWN0YW5nbGUud2lkdGggPSBtYXhYIC0gbWluWDtcbiAgICAgICAgcmVjdGFuZ2xlLmhlaWdodCA9IG1heFkgLSBtaW5ZO1xuICAgIH1cbiAgICBCb3VuZHMudG9SZWN0YW5nbGUgPSB0b1JlY3RhbmdsZTtcbiAgICBmdW5jdGlvbiB0ZXN0WChib3VuZHMsIHgpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0WCA9IHRlc3RYO1xuICAgIGZ1bmN0aW9uIHRlc3RZKGJvdW5kcywgeSkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RZID0gdGVzdFk7XG4gICAgZnVuY3Rpb24gdGVzdChib3VuZHMsIHgsIHkpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdCA9IHRlc3Q7XG4gICAgZnVuY3Rpb24gdGVzdFBvaW50KGJvdW5kcywgcG9pbnQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFBvaW50ID0gdGVzdFBvaW50O1xufSkoQm91bmRzIHx8IChCb3VuZHMgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBDb2xvclRyYW5zZm9ybTtcbihmdW5jdGlvbiAoQ29sb3JUcmFuc2Zvcm0pIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFscGhhTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIHJlZE11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBncmVlbk11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBibHVlTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGFscGhhT2Zmc2V0OiAwLFxuICAgICAgICAgICAgcmVkT2Zmc2V0OiAwLFxuICAgICAgICAgICAgZ3JlZW5PZmZzZXQ6IDAsXG4gICAgICAgICAgICBibHVlT2Zmc2V0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkoY3QpIHtcbiAgICAgICAgcmV0dXJuIGN0LnJlZE11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmdyZWVuTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmFscGhhTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYmx1ZU9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHlXaXRoQWxwaGEoY3QpIHtcbiAgICAgICAgcmV0dXJuIGN0LnJlZE11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmdyZWVuTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LnJlZE9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5PZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmJsdWVPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmFscGhhT2Zmc2V0ID09PSAwO1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5pc0VtcHR5V2l0aEFscGhhID0gaXNFbXB0eVdpdGhBbHBoYTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShjdCkge1xuICAgICAgICBjdC5yZWRNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuZ3JlZW5NdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuYmx1ZU11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5hbHBoYU11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5yZWRPZmZzZXQgPSAwO1xuICAgICAgICBjdC5ncmVlbk9mZnNldCA9IDA7XG4gICAgICAgIGN0LmJsdWVPZmZzZXQgPSAwO1xuICAgICAgICBjdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gY29weShmcm9tLCB0bykge1xuICAgICAgICB0by5hbHBoYU11bHRpcGxpZXIgPSBmcm9tLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgdG8ucmVkTXVsdGlwbGllciA9IGZyb20ucmVkTXVsdGlwbGllcjtcbiAgICAgICAgdG8uZ3JlZW5NdWx0aXBsaWVyID0gZnJvbS5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIHRvLmJsdWVNdWx0aXBsaWVyID0gZnJvbS5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgdG8uYWxwaGFPZmZzZXQgPSBmcm9tLmFscGhhT2Zmc2V0O1xuICAgICAgICB0by5yZWRPZmZzZXQgPSBmcm9tLnJlZE9mZnNldDtcbiAgICAgICAgdG8uZ3JlZW5PZmZzZXQgPSBmcm9tLmdyZWVuT2Zmc2V0O1xuICAgICAgICB0by5ibHVlT2Zmc2V0ID0gZnJvbS5ibHVlT2Zmc2V0O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBjb25jYXQoY3QxLCBjdDAsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCBhbHBoYU11bHRpcGxpZXIgPSBjdDEuYWxwaGFNdWx0aXBsaWVyICogY3QwLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgcmVkTXVsdGlwbGllciA9IGN0MS5yZWRNdWx0aXBsaWVyICogY3QwLnJlZE11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGdyZWVuTXVsdGlwbGllciA9IGN0MS5ncmVlbk11bHRpcGxpZXIgKiBjdDAuZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBibHVlTXVsdGlwbGllciA9IGN0MS5ibHVlTXVsdGlwbGllciAqIGN0MC5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgYWxwaGFPZmZzZXQgPSBjdDEuYWxwaGFNdWx0aXBsaWVyICogY3QwLmFscGhhT2Zmc2V0ICsgY3QxLmFscGhhT2Zmc2V0O1xuICAgICAgICBjb25zdCByZWRPZmZzZXQgPSBjdDEucmVkTXVsdGlwbGllciAqIGN0MC5yZWRPZmZzZXQgKyBjdDEucmVkT2Zmc2V0O1xuICAgICAgICBjb25zdCBncmVlbk9mZnNldCA9IGN0MS5ncmVlbk11bHRpcGxpZXIgKiBjdDAuZ3JlZW5PZmZzZXQgKyBjdDEuZ3JlZW5PZmZzZXQ7XG4gICAgICAgIGNvbnN0IGJsdWVPZmZzZXQgPSBjdDEuYmx1ZU11bHRpcGxpZXIgKiBjdDAuYmx1ZU9mZnNldCArIGN0MS5ibHVlT2Zmc2V0O1xuICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHJlZE11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSBncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IGJsdWVNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSBhbHBoYU9mZnNldDtcbiAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IHJlZE9mZnNldDtcbiAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gZ3JlZW5PZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gYmx1ZU9mZnNldDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uY29uY2F0ID0gY29uY2F0O1xufSkoQ29sb3JUcmFuc2Zvcm0gfHwgKENvbG9yVHJhbnNmb3JtID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vY29sb3ItdHJhbnNmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vYm91bmRzJztcbmV4cG9ydCAqIGZyb20gJy4vbWF0cml4JztcbmV4cG9ydCAqIGZyb20gJy4vcG9pbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWN0YW5nbGUnO1xuIiwiZXhwb3J0IHZhciBNYXRyaXg7XG4oZnVuY3Rpb24gKE1hdHJpeCkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogMSxcbiAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICBjOiAwLFxuICAgICAgICAgICAgZDogMSxcbiAgICAgICAgICAgIHR4OiAwLFxuICAgICAgICAgICAgdHk6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIE1hdHJpeC5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkobWF0cml4KSB7XG4gICAgICAgIHJldHVybiBtYXRyaXguYSA9PT0gMVxuICAgICAgICAgICAgJiYgbWF0cml4LmIgPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC5jID09PSAwXG4gICAgICAgICAgICAmJiBtYXRyaXguZCA9PT0gMVxuICAgICAgICAgICAgJiYgbWF0cml4LnR4ID09PSAwXG4gICAgICAgICAgICAmJiBtYXRyaXgudHkgPT09IDA7XG4gICAgfVxuICAgIE1hdHJpeC5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShtYXRyaXgpIHtcbiAgICAgICAgbWF0cml4LmEgPSAxO1xuICAgICAgICBtYXRyaXguYiA9IDA7XG4gICAgICAgIG1hdHJpeC5jID0gMDtcbiAgICAgICAgbWF0cml4LmQgPSAxO1xuICAgICAgICBtYXRyaXgudHggPSAwO1xuICAgICAgICBtYXRyaXgudHkgPSAwO1xuICAgIH1cbiAgICBNYXRyaXguc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KGZyb20sIHRvKSB7XG4gICAgICAgIHRvLmEgPSBmcm9tLmE7XG4gICAgICAgIHRvLmIgPSBmcm9tLmI7XG4gICAgICAgIHRvLmMgPSBmcm9tLmM7XG4gICAgICAgIHRvLmQgPSBmcm9tLmQ7XG4gICAgICAgIHRvLnR4ID0gZnJvbS50eDtcbiAgICAgICAgdG8udHkgPSBmcm9tLnR5O1xuICAgIH1cbiAgICBNYXRyaXguY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gY29uY2F0KG1hdHJpeDAsIG1hdHJpeDEsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCBhID0gbWF0cml4MS5hICogbWF0cml4MC5hICsgbWF0cml4MS5iICogbWF0cml4MC5jO1xuICAgICAgICBjb25zdCBiID0gbWF0cml4MS5hICogbWF0cml4MC5iICsgbWF0cml4MS5iICogbWF0cml4MC5kO1xuICAgICAgICBjb25zdCBjID0gbWF0cml4MS5jICogbWF0cml4MC5hICsgbWF0cml4MS5kICogbWF0cml4MC5jO1xuICAgICAgICBjb25zdCBkID0gbWF0cml4MS5jICogbWF0cml4MC5iICsgbWF0cml4MS5kICogbWF0cml4MC5kO1xuICAgICAgICBjb25zdCB0eCA9IG1hdHJpeDEudHggKiBtYXRyaXgwLmEgKyBtYXRyaXgxLnR5ICogbWF0cml4MC5jICsgbWF0cml4MC50eDtcbiAgICAgICAgY29uc3QgdHkgPSBtYXRyaXgxLnR4ICogbWF0cml4MC5iICsgbWF0cml4MS50eSAqIG1hdHJpeDAuZCArIG1hdHJpeDAudHk7XG4gICAgICAgIHJlc3VsdC5hID0gYTtcbiAgICAgICAgcmVzdWx0LmIgPSBiO1xuICAgICAgICByZXN1bHQuYyA9IGM7XG4gICAgICAgIHJlc3VsdC5kID0gZDtcbiAgICAgICAgcmVzdWx0LnR4ID0gdHg7XG4gICAgICAgIHJlc3VsdC50eSA9IHR5O1xuICAgIH1cbiAgICBNYXRyaXguY29uY2F0ID0gY29uY2F0O1xuICAgIGZ1bmN0aW9uIGdldERldGVybWluYW50KG1hdHJpeCkge1xuICAgICAgICByZXR1cm4gbWF0cml4LmEgKiBtYXRyaXguZCAtIG1hdHJpeC5iICogbWF0cml4LmM7XG4gICAgfVxuICAgIE1hdHJpeC5nZXREZXRlcm1pbmFudCA9IGdldERldGVybWluYW50O1xuICAgIGZ1bmN0aW9uIGludmVydChtYXRyaXgsIHJlc3VsdCkge1xuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudChtYXRyaXgpO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC50eCA9IC1tYXRyaXgudHg7XG4gICAgICAgICAgICByZXN1bHQudHkgPSAtbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGV0ZXJtaW5hbnQgPSAxLjAgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gbWF0cml4LmEgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gLW1hdHJpeC5iICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuYyA9IC1tYXRyaXguYyAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBtYXRyaXguZCAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gLXJlc3VsdC5hICogbWF0cml4LnR4IC0gcmVzdWx0LmMgKiBtYXRyaXgudHk7XG4gICAgICAgICAgICByZXN1bHQudHkgPSAtcmVzdWx0LmIgKiBtYXRyaXgudHggLSByZXN1bHQuZCAqIG1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBNYXRyaXguaW52ZXJ0ID0gaW52ZXJ0O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50KG1hdHJpeCwgcG9pbnQsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICByZXN1bHQueCA9IHggKiBtYXRyaXguYSArIHkgKiBtYXRyaXguYyArIG1hdHJpeC50eDtcbiAgICAgICAgcmVzdWx0LnkgPSB4ICogbWF0cml4LmIgKyB5ICogbWF0cml4LmQgKyBtYXRyaXgudHk7XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludCA9IHRyYW5zZm9ybVBvaW50O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50TG9jYWwobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJlc3VsdC54ID0geCAqIG1hdHJpeC5hICsgeSAqIG1hdHJpeC5jO1xuICAgICAgICByZXN1bHQueSA9IHggKiBtYXRyaXguYiArIHkgKiBtYXRyaXguZDtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybVBvaW50TG9jYWwgPSB0cmFuc2Zvcm1Qb2ludExvY2FsO1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUludmVyc2VQb2ludChtYXRyaXgsIHBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgbGV0IGRldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KTtcbiAgICAgICAgaWYgKGRldGVybWluYW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQueCA9IC1tYXRyaXgudHg7XG4gICAgICAgICAgICByZXN1bHQueSA9IC1tYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCA9IDEgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgICAgICByZXN1bHQueCA9IGRldGVybWluYW50ICogKG1hdHJpeC5jICogKG1hdHJpeC50eSAtIHkpICsgbWF0cml4LmQgKiAoeCAtIG1hdHJpeC50eCkpO1xuICAgICAgICAgICAgcmVzdWx0LnkgPSBkZXRlcm1pbmFudCAqIChtYXRyaXguYSAqICh5IC0gbWF0cml4LnR5KSArIG1hdHJpeC5iICogKG1hdHJpeC50eCAtIHgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50ID0gdHJhbnNmb3JtSW52ZXJzZVBvaW50O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUJvdW5kcyhtYXRyaXgsIGJvdW5kcywgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgYSwgYiwgYywgZCwgdHgsIHR5LCB9ID0gbWF0cml4O1xuICAgICAgICBjb25zdCByeCA9IGJvdW5kcy54O1xuICAgICAgICBjb25zdCByeSA9IGJvdW5kcy55O1xuICAgICAgICBjb25zdCByciA9IHJ4ICsgYm91bmRzLndpZHRoO1xuICAgICAgICBjb25zdCByYiA9IHJ5ICsgYm91bmRzLmhlaWdodDtcbiAgICAgICAgY29uc3QgbngxID0gcnggKiBhICsgcnkgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MSA9IHJ4ICogYiArIHJ5ICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDIgPSByciAqIGEgKyByeSAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkyID0gcnIgKiBiICsgcnkgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54MyA9IHJyICogYSArIHJiICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTMgPSByciAqIGIgKyByYiAqIGQgKyB0eTtcbiAgICAgICAgY29uc3Qgbng0ID0gcnggKiBhICsgcmIgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55NCA9IHJ4ICogYiArIHJiICogZCArIHR5O1xuICAgICAgICBsZXQgbGVmdCA9IG54MTtcbiAgICAgICAgaWYgKGxlZnQgPiBueDIpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQgPiBueDMpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQgPiBueDQpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvcCA9IG55MTtcbiAgICAgICAgaWYgKHRvcCA+IG55Mikge1xuICAgICAgICAgICAgdG9wID0gbnkyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3AgPiBueTMpIHtcbiAgICAgICAgICAgIHRvcCA9IG55MztcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9wID4gbnk0KSB7XG4gICAgICAgICAgICB0b3AgPSBueTQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJpZ2h0ID0gbngxO1xuICAgICAgICBpZiAocmlnaHQgPCBueDIpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbngyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCA8IG54Mykge1xuICAgICAgICAgICAgcmlnaHQgPSBueDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0IDwgbng0KSB7XG4gICAgICAgICAgICByaWdodCA9IG54NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYm90dG9tID0gbnkxO1xuICAgICAgICBpZiAoYm90dG9tIDwgbnkyKSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdHRvbSA8IG55Mykge1xuICAgICAgICAgICAgYm90dG9tID0gbnkzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3R0b20gPCBueTQpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55NDtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQueCA9IGxlZnQ7XG4gICAgICAgIHJlc3VsdC55ID0gdG9wO1xuICAgICAgICByZXN1bHQud2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBib3R0b20gLSB0b3A7XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Cb3VuZHMgPSB0cmFuc2Zvcm1Cb3VuZHM7XG59KShNYXRyaXggfHwgKE1hdHJpeCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFBvaW50O1xuKGZ1bmN0aW9uIChQb2ludCkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuICAgIFBvaW50LmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gbGVuZ3RoKHBvaW50KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfVxuICAgIFBvaW50Lmxlbmd0aCA9IGxlbmd0aDtcbiAgICBmdW5jdGlvbiBhbmdsZShwb2ludCkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihwb2ludC55LCBwb2ludC54KTtcbiAgICB9XG4gICAgUG9pbnQuYW5nbGUgPSBhbmdsZTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludC54ID09PSAwICYmIHBvaW50LnkgPT09IDA7XG4gICAgfVxuICAgIFBvaW50LmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGVxdWFscyhwb2ludDAsIHBvaW50MSkge1xuICAgICAgICByZXR1cm4gcG9pbnQwLnggPT09IHBvaW50MS54ICYmIHBvaW50MC55ID09PSBwb2ludDEueTtcbiAgICB9XG4gICAgUG9pbnQuZXF1YWxzID0gZXF1YWxzO1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KHBvaW50KSB7XG4gICAgICAgIHBvaW50LnggPSAwO1xuICAgICAgICBwb2ludC55ID0gMDtcbiAgICB9XG4gICAgUG9pbnQuc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC54ID0gc291cmNlLng7XG4gICAgICAgIHRhcmdldC55ID0gc291cmNlLnk7XG4gICAgfVxuICAgIFBvaW50LmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZShwb2ludCwgdGhpY2tuZXNzKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGxlbmd0aChwb2ludCk7XG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpY2tuZXNzIC8gdmFsdWU7XG4gICAgICAgICAgICBwb2ludC54ICo9IHZhbHVlO1xuICAgICAgICAgICAgcG9pbnQueSAqPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQb2ludC5ub3JtYWxpemUgPSBub3JtYWxpemU7XG4gICAgZnVuY3Rpb24gZGlzdGFuY2UocG9pbnQwLCBwb2ludDEpIHtcbiAgICAgICAgY29uc3QgZHggPSBwb2ludDAueCAtIHBvaW50MS54O1xuICAgICAgICBjb25zdCBkeSA9IHBvaW50MC55IC0gcG9pbnQxLnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cbiAgICBQb2ludC5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIGZ1bmN0aW9uIGludGVycG9sYXRlKGJlZ2luLCBlbmQsIHZhbHVlLCByZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0LnggPSBiZWdpbi54ICsgdmFsdWUgKiAoZW5kLnggLSBiZWdpbi54KTtcbiAgICAgICAgcmVzdWx0LnkgPSBiZWdpbi55ICsgdmFsdWUgKiAoZW5kLnkgLSBiZWdpbi55KTtcbiAgICB9XG4gICAgUG9pbnQuaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcbiAgICBmdW5jdGlvbiBwb2xhcihwb2ludCwgbGVuZ3RoLCBhbmdsZSkge1xuICAgICAgICBwb2ludC54ID0gbGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgICBwb2ludC55ID0gbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIH1cbiAgICBQb2ludC5wb2xhciA9IHBvbGFyO1xufSkoUG9pbnQgfHwgKFBvaW50ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUmVjdGFuZ2xlO1xuKGZ1bmN0aW9uIChSZWN0YW5nbGUpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFJlY3RhbmdsZS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KHJlY3RhbmdsZSkge1xuICAgICAgICByZWN0YW5nbGUueCA9IDA7XG4gICAgICAgIHJlY3RhbmdsZS55ID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLndpZHRoID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLmhlaWdodCA9IDA7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0YW5nbGUud2lkdGggPT09IDAgfHwgcmVjdGFuZ2xlLmhlaWdodCA9PT0gMDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGNvbnRhaW5zKHJlY3RhbmdsZSwgcG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZS54IDwgcG9pbnQueFxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnggKyByZWN0YW5nbGUud2lkdGggPiBwb2ludC54XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueSA8IHBvaW50LnlcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS55ICsgcmVjdGFuZ2xlLmhlaWdodCA+IHBvaW50Lnk7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5jb250YWlucyA9IGNvbnRhaW5zO1xufSkoUmVjdGFuZ2xlIHx8IChSZWN0YW5nbGUgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXgsIFJlY3RhbmdsZSB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgSW1hZ2VFeHRlbnNpb24sIElNQUdFIH0gZnJvbSAnLi9pbWFnZSc7XG5jb25zdCBib3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihpbWFnZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBpbWFnZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gcGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgaWYgKENvbG9yVHJhbnNmb3JtLmlzRW1wdHlXaXRoQWxwaGEoY29sb3JUcmFuc2Zvcm0pKSB7XG4gICAgICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUNvbnRleHQgPSBwbGF0Zm9ybS5jcmVhdGVDdXN0b21Db250ZXh0KCk7XG4gICAgICAgICAgICBib3VuZHMueCA9IHg7XG4gICAgICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIGJvdW5kcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtQm91bmRzKG1hdHJpeCwgYm91bmRzLCBib3VuZHMpO1xuICAgICAgICAgICAgaWYgKFJlY3RhbmdsZS5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LnNldFRyYW5zZm9ybSgpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5jbGVhclJlY3QoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGN1c3RvbUNvbnRleHQuZ2V0SW1hZ2VEYXRhKGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnN0IHJtID0gY29sb3JUcmFuc2Zvcm0ucmVkTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IGdtID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3QgYm0gPSBjb2xvclRyYW5zZm9ybS5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IGFtID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3Qgcm8gPSBjb2xvclRyYW5zZm9ybS5yZWRPZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBnbyA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgYm8gPSBjb2xvclRyYW5zZm9ybS5ibHVlT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgYW8gPSBjb2xvclRyYW5zZm9ybS5hbHBoYU9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gaW1hZ2VEYXRhO1xuICAgICAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IGRhdGE7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogcm0gKyBybztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogZ20gKyBnbztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogYm0gKyBibztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogYW0gKyBhbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgYm91bmRzLngsIGJvdW5kcy55KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKGN1c3RvbUNvbnRleHQuY2FudmFzLCBib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCwgYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgcGxhdGZvcm0uZGVzdHJveUN1c3RvbUNvbnRleHQoY3VzdG9tQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgSW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KElNQUdFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiB8fCAoQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VFeHRlbnNpb24sIElNQUdFIH0gZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgdmFyIENhbnZhc0ltYWdlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNJbWFnZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihpbWFnZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBpbWFnZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IGVuZ2luZS5wbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgSW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KElNQUdFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc0ltYWdlRXh0ZW5zaW9uIHx8IChDYW52YXNJbWFnZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCwgUmVzb3VyY2UsIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuZXhwb3J0IGNvbnN0IElNQUdFID0gJ2ltYWdlJztcbmV4cG9ydCB2YXIgSW1hZ2U7XG4oZnVuY3Rpb24gKEltYWdlKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGltYWdlLCBib3VuZHMsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgIGJvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBJbWFnZS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShJbWFnZSB8fCAoSW1hZ2UgPSB7fSkpO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIEltYWdlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChJbWFnZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGhpdFRlc3QoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGxvY2FsIH0gPSBlbmdpbmUucG9pbnRlcnM7XG4gICAgICAgIEltYWdlLmNhbGN1bGF0ZUJvdW5kcyhpbWFnZSwgYm91bmRzLCBlbmdpbmUpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKGJvdW5kcywgbG9jYWwpO1xuICAgIH1cbiAgICBJbWFnZUV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBsb2FkZWQoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLmxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSBSZXNvdXJjZS5nZXRQcm9ncmVzcyhyZXNvdXJjZSk7XG4gICAgICAgIGNvbnRleHQubG9hZGVkID0gISFyZXNvdXJjZT8ubG9hZGVkICYmICEhcmVzb3VyY2U/LmltYWdlO1xuICAgIH1cbiAgICBJbWFnZUV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoSU1BR0UsIGhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KElNQUdFLCBsb2FkZWQpO1xuICAgICAgICBJbWFnZVJlc291cmNlLmluaXQoZW5naW5lKTtcbiAgICB9XG4gICAgSW1hZ2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShJbWFnZUV4dGVuc2lvbiB8fCAoSW1hZ2VFeHRlbnNpb24gPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy1pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy1pbWFnZS1jb2xvcic7XG4iLCJleHBvcnQgdmFyIEltYWdlUmVzb3VyY2U7XG4oZnVuY3Rpb24gKEltYWdlUmVzb3VyY2UpIHtcbiAgICBmdW5jdGlvbiByZXNvbHZlKGFzc2V0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gYXNzZXQuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgICAgc3dpdGNoIChleHRlbnNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3BuZyc6XG4gICAgICAgICAgICBjYXNlICdqcGcnOlxuICAgICAgICAgICAgY2FzZSAnd2VicCc6XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBieXRlc0xvYWRlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNUb3RhbDogMCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gYXNzZXQ7XG4gICAgICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaW1hZ2UgbG9hZGVkOiAke2Fzc2V0fWApO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5pbWFnZSA9IGltYWdlO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdpbWFnZSBsb2FkIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBJbWFnZVJlc291cmNlLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvbHZlKTtcbiAgICB9XG4gICAgSW1hZ2VSZXNvdXJjZS5pbml0ID0gaW5pdDtcbn0pKEltYWdlUmVzb3VyY2UgfHwgKEltYWdlUmVzb3VyY2UgPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmluZyc7XG4iLCJleHBvcnQgdmFyIFN0cmluZ1Jlc291cmNlO1xuKGZ1bmN0aW9uIChTdHJpbmdSZXNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIHJlc29sdmUoYXNzZXQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBleHRlbnNpb24gPSBhc3NldC5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgICBzd2l0Y2ggKGV4dGVuc2lvbikge1xuICAgICAgICAgICAgY2FzZSAndHh0JzpcbiAgICAgICAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0ge1xuICAgICAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNMb2FkZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzVG90YWw6IDAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgYXNzZXQsIHRydWUpO1xuICAgICAgICAgICAgICAgIHhoci5vbnByb2dyZXNzID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuYnl0ZXNMb2FkZWQgPSBlLmxvYWRlZDtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuYnl0ZXNUb3RhbCA9IGUudG90YWw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgc3RyaW5nIGxvYWRlZDogJHthc3NldH1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuZGF0YSA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmJ5dGVzTG9hZGVkID0gcmVzb3VyY2UuYnl0ZXNUb3RhbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5vbmVycm9yID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ3N0cmluZyBsb2FkIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFN0cmluZ1Jlc291cmNlLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvbHZlKTtcbiAgICB9XG4gICAgU3RyaW5nUmVzb3VyY2UuaW5pdCA9IGluaXQ7XG59KShTdHJpbmdSZXNvdXJjZSB8fCAoU3RyaW5nUmVzb3VyY2UgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUmVzb3VyY2UsIENvbnRhaW5lckV4dGVuc2lvbiwgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IFN0cmluZ1Jlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcbmV4cG9ydCBjb25zdCBTQ0VORSA9ICdzY2VuZSc7XG5leHBvcnQgdmFyIFNjZW5lRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChTY2VuZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGxvYWRlZChzY2VuZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUubG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGlmIChzY2VuZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgQ29udGFpbmVyRXh0ZW5zaW9uLmxvYWRlZChzY2VuZSwgZW5naW5lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc3JjIH0gPSBzY2VuZTtcbiAgICAgICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSBSZXNvdXJjZS5nZXRQcm9ncmVzcyhyZXNvdXJjZSk7XG4gICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9ICEhcmVzb3VyY2U/LmxvYWRlZCAmJiAhIXJlc291cmNlPy5kYXRhO1xuICAgICAgICAgICAgaWYgKHJlc291cmNlICYmIHJlc291cmNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5jaGlsZHJlbiA9IEpTT04ucGFyc2UocmVzb3VyY2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBzY2VuZSBwYXJzaW5nIGVycm9yOiAke2UubWVzc2FnZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgU2NlbmVFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KFNDRU5FLCBDb250YWluZXJFeHRlbnNpb24uaGl0VGVzdCk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoU0NFTkUsIENvbnRhaW5lckV4dGVuc2lvbi5yZW5kZXIpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy51cGRhdGUuc2V0KFNDRU5FLCBDb250YWluZXJFeHRlbnNpb24udXBkYXRlKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChTQ0VORSwgbG9hZGVkKTtcbiAgICAgICAgU3RyaW5nUmVzb3VyY2UuaW5pdChlbmdpbmUpO1xuICAgIH1cbiAgICBTY2VuZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFNjZW5lRXh0ZW5zaW9uIHx8IChTY2VuZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJjb25zdCBQSV8yID0gTWF0aC5QSSAqIDI7XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlFbGxpcHNlKGRhdGEsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgcmFkaXVzID0gMCwgcmFkaXVzWCwgcmFkaXVzWSwgfSA9IGRhdGE7XG4gICAgY29uc3QgcnggPSByYWRpdXNYID8/IHJhZGl1cztcbiAgICBjb25zdCByeSA9IHJhZGl1c1kgPz8gcmFkaXVzO1xuICAgIGlmIChyeCA9PT0gMCB8fCByeSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5lbGxpcHNlKHgsIHksIHJ4LCByeSwgMCwgMCwgUElfMik7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhcHBseUNvbW1hbmQoY29tbWFuZCwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gY29tbWFuZDtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbW92ZVRvJzpcbiAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhtb3ZlVG8ueCA/PyAwLCBtb3ZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsaW5lVG8nOlxuICAgICAgICAgICAgY29uc3QgbGluZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKGxpbmVUby54ID8/IDAsIGxpbmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2N1cnZlVG8nOlxuICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8oY3VydmVUby5jeCA/PyAwLCBjdXJ2ZVRvLmN5ID8/IDAsIGN1cnZlVG8ueCA/PyAwLCBjdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3ViaWNDdXJ2ZVRvJzpcbiAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBjb250ZXh0LmJlemllckN1cnZlVG8oY3ViaWNDdXJ2ZVRvLmN4ID8/IDAsIGN1YmljQ3VydmVUby5jeSA/PyAwLCBjdWJpY0N1cnZlVG8uc3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLnN5ID8/IDAsIGN1YmljQ3VydmVUby54ID8/IDAsIGN1YmljQ3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXRoKGRhdGEsIGNvbnRleHQpIHtcbiAgICBpZiAoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IGRhdGFbaV07XG4gICAgICAgIGFwcGx5Q29tbWFuZChjb21tYW5kLCBjb250ZXh0KTtcbiAgICB9XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhcHBseVJlY3RhbmdsZShkYXRhLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHdpZHRoID0gMCwgaGVpZ2h0ID0gMCwgfSA9IGRhdGE7XG4gICAgaWYgKHdpZHRoID09PSAwIHx8IGhlaWdodCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgTWF0cml4LCBQb2ludCwgUmVjdGFuZ2xlLCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgU2hhcGVFeHRlbnNpb24sIFNIQVBFLCBTaGFwZSB9IGZyb20gJy4uL3NoYXBlJztcbmltcG9ydCB7IGFwcGx5UmVjdGFuZ2xlIH0gZnJvbSAnLi9yZWN0YW5nbGUnO1xuaW1wb3J0IHsgYXBwbHlFbGxpcHNlIH0gZnJvbSAnLi9lbGxpcHNlJztcbmltcG9ydCB7IGFwcGx5UGF0aCB9IGZyb20gJy4vcGF0aCc7XG5pbXBvcnQgeyBhcHBseVN0cmluZyB9IGZyb20gJy4vc3RyaW5nJztcbmltcG9ydCB7IHNldEZpbGxTdHlsZSwgc2V0U3Ryb2tlU3R5bGUgfSBmcm9tICcuL3N0eWxlJztcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuY29uc3Qgb2Zmc2V0ID0gUG9pbnQuZW1wdHkoKTtcbmZ1bmN0aW9uIHJlbmRlckdyYXBoaWNzKGRhdGEsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpIHtcbiAgICBjb25zdCB7IGZpbGwsIHN0cm9rZSB9ID0gZGF0YTtcbiAgICBjb25zdCBoYXNGaWxsID0gISFmaWxsIHx8IGZpbGwgPT09IDA7XG4gICAgY29uc3QgaGFzU3Ryb2tlID0gISFzdHJva2UgfHwgc3Ryb2tlID09PSAwO1xuICAgIGlmICghaGFzRmlsbCAmJiAhaGFzU3Ryb2tlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGV4aXN0ID0gdHJ1ZTtcbiAgICBjb25zdCB7IHR5cGUgfSA9IGRhdGE7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICBleGlzdCA9IGFwcGx5UmVjdGFuZ2xlKGRhdGEsIGNvbnRleHQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgICAgICAgZXhpc3QgPSBhcHBseUVsbGlwc2UoZGF0YSwgY29udGV4dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGF0aCc6XG4gICAgICAgICAgICBjb25zdCBwYXRoID0gZGF0YTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGF0aC5kYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlTdHJpbmcocGF0aC5kYXRhLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocGF0aC5kYXRhKSkge1xuICAgICAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlQYXRoKHBhdGguZGF0YSwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKCFleGlzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIHNldEZpbGxTdHlsZShmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbiAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgfVxuICAgIGlmIChoYXNTdHJva2UpIHtcbiAgICAgICAgc2V0U3Ryb2tlU3R5bGUoc3Ryb2tlLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB9XG59XG5leHBvcnQgdmFyIENhbnZhc1NoYXBlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNTaGFwZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihzaGFwZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gc2hhcGU7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBQb2ludC5zZXRFbXB0eShvZmZzZXQpO1xuICAgICAgICBpZiAoUGl2b3QuaGFzVmFsdWVzKHNoYXBlKSkge1xuICAgICAgICAgICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzKHNoYXBlLCBib3VuZHMpO1xuICAgICAgICAgICAgaWYgKFJlY3RhbmdsZS5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmZzZXQueCA9IFBpdm90LmdldFgoc2hhcGUsIGJvdW5kcy53aWR0aCk7XG4gICAgICAgICAgICBvZmZzZXQueSA9IFBpdm90LmdldFkoc2hhcGUsIGJvdW5kcy53aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gZW5naW5lLnBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChQb2ludC5pc0VtcHR5KG9mZnNldCkpIHtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludExvY2FsKG1hdHJpeCwgb2Zmc2V0LCBvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCArIG9mZnNldC54LCBtYXRyaXgudHkgKyBvZmZzZXQueSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZW5kZXJHcmFwaGljcyhkYXRhW2ldLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dDJkLCBlbmdpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmVuZGVyR3JhcGhpY3MoZGF0YSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQyZCwgZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNTaGFwZUV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgU2hhcGVFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KFNIQVBFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNTaGFwZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc1NoYXBlRXh0ZW5zaW9uIHx8IChDYW52YXNTaGFwZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBHcmFwaGljc1N0cmluZ1JlYWRlciB9IGZyb20gJy4uL2RhdGEvc3RyaW5nJztcbmltcG9ydCB7IGFwcGx5Q29tbWFuZCB9IGZyb20gJy4vcGF0aCc7XG5jb25zdCByZWFkZXIgPSBuZXcgR3JhcGhpY3NTdHJpbmdSZWFkZXIoKTtcbmV4cG9ydCBmdW5jdGlvbiBhcHBseVN0cmluZyhkYXRhLCBjb250ZXh0KSB7XG4gICAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgcmVhZGVyLnNldFBhdGgoZGF0YSk7XG4gICAgd2hpbGUgKHJlYWRlci5yZWFkTmV4dCgpKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSByZWFkZXIuZ2V0Q29tbWFuZCgpO1xuICAgICAgICBpZiAoY29tbWFuZCkge1xuICAgICAgICAgICAgYXBwbHlDb21tYW5kKGNvbW1hbmQsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBDYW52YXNQYXR0ZXJucyB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5jb25zdCBlbXB0eU1hdHJpeCA9IE1hdHJpeC5lbXB0eSgpO1xuY29uc3QgZW1wdHlBcnJheSA9IFtdO1xuZnVuY3Rpb24gZ2V0Q2FudmFzUGF0dGVybihmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgaWYgKHR5cGVvZiBmaWxsID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGZpbGwsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBmaWxsID09PSAnb2JqZWN0Jykge1xuICAgICAgICBzd2l0Y2ggKGZpbGwudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc29saWQnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHNvbGlkID0gZmlsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKHNvbGlkLmNvbG9yID8/IDAsIHNvbGlkLmFscGhhID8/IDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGNhc2UgJ2xpbmVhcic6XG4gICAgICAgICAgICAgICAgY29uc3QgeyBtYXRyaXg6IG1sID0gZW1wdHlNYXRyaXgsIGNvbG9yczogY2wgPSBlbXB0eUFycmF5LCBhbHBoYXM6IGFsID0gZW1wdHlBcnJheSwgcmF0aW9zOiBybCA9IGVtcHR5QXJyYXksIH0gPSBmaWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5saW5lYXJHcmFkaWVudFBhdHRlcm4obWwsIGNsLCBhbCwgcmwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGNhc2UgJ3JhZGlhbCc6XG4gICAgICAgICAgICAgICAgY29uc3QgeyBtYXRyaXg6IG1yID0gZW1wdHlNYXRyaXgsIGNvbG9yczogY3IgPSBlbXB0eUFycmF5LCBhbHBoYXM6IGFyID0gZW1wdHlBcnJheSwgcmF0aW9zOiByciA9IGVtcHR5QXJyYXksIH0gPSBmaWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5yYWRpYWxHcmFkaWVudFBhdHRlcm4obXIsIGNyLCBhciwgcnIsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGNhc2UgJ2JpdG1hcCc6XG4gICAgICAgICAgICAgICAgY29uc3QgYml0bWFwRmlsbCA9IGZpbGw7XG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXBlYXQgPSB0cnVlLCBzcmMgfSA9IGJpdG1hcEZpbGw7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMuYml0bWFwUGF0dGVybihyZXNvdXJjZS5pbWFnZSwgcmVwZWF0LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbGxTdHlsZShmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBnZXRDYW52YXNQYXR0ZXJuKGZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0cm9rZVN0eWxlKHN0cm9rZSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGlmICh0eXBlb2Ygc3Ryb2tlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKHN0cm9rZSwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGNvbnRleHQubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgICAgIGNvbnRleHQubGluZUpvaW4gPSAncm91bmQnO1xuICAgICAgICBjb250ZXh0Lm1pdGVyTGltaXQgPSAxMDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHN0cm9rZSA9PT0gJ29iamVjdCcgJiYgc3Ryb2tlLmZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gZ2V0Q2FudmFzUGF0dGVybihzdHJva2UuZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gc3Ryb2tlLnRoaWNrbmVzcyA/PyAxO1xuICAgICAgICBjb250ZXh0LmxpbmVDYXAgPSBzdHJva2UuY2FwcyA/PyAncm91bmQnO1xuICAgICAgICBjb250ZXh0LmxpbmVKb2luID0gc3Ryb2tlLmpvaW50cyA/PyAncm91bmQnO1xuICAgICAgICBjb250ZXh0Lm1pdGVyTGltaXQgPSBzdHJva2UubWl0ZXJMaW1pdCA/PyAxMDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IFBhdGhDb21tYW5kIH0gZnJvbSAnLi9wYXRoJztcbmltcG9ydCB7IEdyYXBoaWNzU3RyaW5nIH0gZnJvbSAnLi9zdHJpbmcnO1xuZXhwb3J0IHZhciBSZWN0YW5nbGVEYXRhO1xuKGZ1bmN0aW9uIChSZWN0YW5nbGVEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgd2lkdGggPSAwLCBoZWlnaHQgPSAwLCB9ID0gZGF0YTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4LCB5KTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQpO1xuICAgIH1cbiAgICBSZWN0YW5nbGVEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFJlY3RhbmdsZURhdGEgfHwgKFJlY3RhbmdsZURhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBFbGxpcHNlRGF0YTtcbihmdW5jdGlvbiAoRWxsaXBzZURhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCByYWRpdXMgPSAwLCByYWRpdXNYLCByYWRpdXNZLCB9ID0gZGF0YTtcbiAgICAgICAgY29uc3QgcnggPSByYWRpdXNYID8/IHJhZGl1cztcbiAgICAgICAgY29uc3QgcnkgPSByYWRpdXNZID8/IHJhZGl1cztcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4IC0gcngsIHkgLSByeSk7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCArIHJ4LCB5ICsgcnkpO1xuICAgIH1cbiAgICBFbGxpcHNlRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShFbGxpcHNlRGF0YSB8fCAoRWxsaXBzZURhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBQYXRoRGF0YTtcbihmdW5jdGlvbiAoUGF0aERhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aERhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHBhdGhEYXRhO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tYW5kID0gZGF0YVtpXTtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBQYXRoRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShQYXRoRGF0YSB8fCAoUGF0aERhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBHcmFwaGljc0RhdGE7XG4oZnVuY3Rpb24gKEdyYXBoaWNzRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBkYXRhO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICAgICAgUmVjdGFuZ2xlRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgICAgICAgICAgIEVsbGlwc2VEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGF0aCc6XG4gICAgICAgICAgICAgICAgUGF0aERhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc0RhdGEgfHwgKEdyYXBoaWNzRGF0YSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdAamVuZy9nZW9tJztcbmV4cG9ydCB2YXIgUGF0aENvbW1hbmQ7XG4oZnVuY3Rpb24gKFBhdGhDb21tYW5kKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKHBhdGgsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IHBhdGg7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbW92ZVRvJzpcbiAgICAgICAgICAgIGNhc2UgJ2xpbmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIG1vdmVUby54ID8/IDAsIG1vdmVUby55ID8/IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3VydmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdXJ2ZVRvLmN4ID8/IDAsIGN1cnZlVG8uY3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdXJ2ZVRvLnggPz8gMCwgY3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3ViaWNDdXJ2ZVRvJzpcbiAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLmN4ID8/IDAsIGN1YmljQ3VydmVUby5jeSA/PyAwKTtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby5zeCA/PyAwLCBjdWJpY0N1cnZlVG8uc3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8ueCA/PyAwLCBjdWJpY0N1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUGF0aENvbW1hbmQuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoUGF0aENvbW1hbmQgfHwgKFBhdGhDb21tYW5kID0ge30pKTtcbiIsImltcG9ydCB7IFBhdGhDb21tYW5kLCB9IGZyb20gJy4vcGF0aCc7XG5jb25zdCBOVU1CRVJTX0NPVU5UID0ge1xuICAgIE06IDIsXG4gICAgbTogMixcbiAgICBMOiAyLFxuICAgIGw6IDIsXG4gICAgSDogMSxcbiAgICBoOiAxLFxuICAgIFY6IDEsXG4gICAgdjogMSxcbiAgICBDOiA2LFxuICAgIGM6IDYsXG4gICAgUzogNCxcbiAgICBzOiA0LFxuICAgIFE6IDQsXG4gICAgcTogNCxcbiAgICBUOiAyLFxuICAgIHQ6IDIsXG59O1xuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU3RyaW5nU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gJyc7XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IG51bGw7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICB0aGlzLmNvbW1hbmRSZWdleCA9IC9bTW1MbEhoVnZDY1NzUXFUdF0vZztcbiAgICAgICAgdGhpcy5udW1iZXJSZWdleCA9IC9bLStdP1tcXGQuXSsvZztcbiAgICB9XG4gICAgc2V0UGF0aChwYXRoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMuY29tbWFuZFJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgfVxuICAgIGdldENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmQ7XG4gICAgfVxuICAgIGdldEJ1ZmZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyO1xuICAgIH1cbiAgICByZWFkTmV4dCgpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZE1hdGNoID0gdGhpcy5jb21tYW5kUmVnZXguZXhlYyh0aGlzLnBhdGgpO1xuICAgICAgICBpZiAoY29tbWFuZE1hdGNoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBjb21tYW5kTWF0Y2hbMF07XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IE5VTUJFUlNfQ09VTlRbdGhpcy5jb21tYW5kXTtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyUmVnZXgubGFzdEluZGV4ID0gY29tbWFuZE1hdGNoLmluZGV4O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbnVtYmVyTWF0Y2ggPSB0aGlzLm51bWJlclJlZ2V4LmV4ZWModGhpcy5wYXRoKTtcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWZmZXJbaV0gPSBwYXJzZUZsb2F0KG51bWJlck1hdGNoWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR3JhcGhpY3NTdHJpbmdSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0cmVhbSA9IG5ldyBHcmFwaGljc1N0cmluZ1N0cmVhbSgpO1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSB7IHR5cGU6ICdtb3ZlVG8nIH07XG4gICAgICAgIHRoaXMuY29tbWFuZEV4aXN0cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0WSA9IDA7XG4gICAgICAgIHRoaXMubGFzdENYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0Q1kgPSAwO1xuICAgIH1cbiAgICBzZXRQYXRoKHBhdGgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0uc2V0UGF0aChwYXRoKTtcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgICAgIHRoaXMubGFzdFkgPSAwO1xuICAgICAgICB0aGlzLmxhc3RDWCA9IDA7XG4gICAgICAgIHRoaXMubGFzdENZID0gMDtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gZmFsc2U7XG4gICAgfVxuICAgIGdldENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRFeGlzdHMgPyB0aGlzLmNvbW1hbmQgOiBudWxsO1xuICAgIH1cbiAgICByZWFkTmV4dCgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0ucmVhZE5leHQoKTtcbiAgICAgICAgdGhpcy5wYXJzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kRXhpc3RzO1xuICAgIH1cbiAgICBwYXJzZSgpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMuc3RyZWFtLmdldENvbW1hbmQoKTtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gISFjb21tYW5kO1xuICAgICAgICBpZiAoIXRoaXMuY29tbWFuZEV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuc3RyZWFtLmdldEJ1ZmZlcigpO1xuICAgICAgICBjb25zdCBbZTAsIGUxLCBlMiwgZTMsIGU0LCBlNSxdID0gYnVmZmVyO1xuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbW92ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ21vdmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gZTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IGU0O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGU1O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTQgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGU1ICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IHRoaXMubGFzdENZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGUzICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gdGhpcy5sYXN0Q1k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IHJlYWRlciA9IG5ldyBHcmFwaGljc1N0cmluZ1JlYWRlcigpO1xuZXhwb3J0IHZhciBHcmFwaGljc1N0cmluZztcbihmdW5jdGlvbiAoR3JhcGhpY3NTdHJpbmcpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aCwgYm91bmRzKSB7XG4gICAgICAgIHJlYWRlci5zZXRQYXRoKHBhdGgpO1xuICAgICAgICB3aGlsZSAocmVhZGVyLnJlYWROZXh0KCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSByZWFkZXIuZ2V0Q29tbWFuZCgpO1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc1N0cmluZyB8fCAoR3JhcGhpY3NTdHJpbmcgPSB7fSkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhpY3Mge1xuICAgIGNvbnN0cnVjdG9yKHNoYXBlKSB7XG4gICAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZTtcbiAgICB9XG4gICAgYmVnaW5GaWxsKGNvbG9yID0gMCwgYWxwaGEgPSAxKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBiZWdpbkJpdG1hcEZpbGwoc3JjLCBtYXRyaXgsIHJlcGVhdCA9IHRydWUsIHNtb290aCA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdiaXRtYXAnLFxuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgcmVwZWF0LFxuICAgICAgICAgICAgc21vb3RoLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBiZWdpbkdyYWRpZW50RmlsbCh0eXBlLCBjb2xvciwgYWxwaGEsIHJhdGlvLCBtYXRyaXgsIHNwcmVhZCA9ICdyZXBlYXQnLCBpbnRlcnBvbGF0aW9uID0gJ3JnYicsIGZvY2FsUG9pbnRSYXRpbyA9IDApIHtcbiAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHNwcmVhZCxcbiAgICAgICAgICAgIGludGVycG9sYXRpb24sXG4gICAgICAgICAgICBmb2NhbFBvaW50UmF0aW8sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxpbmVTdHlsZSh0aGlja25lc3MgPSAwLCBjb2xvciA9IDAsIGFscGhhID0gMSwgcGl4ZWxIaW50aW5nID0gZmFsc2UsIHNjYWxlTW9kZSA9ICdub25lJywgY2FwcyA9ICdyb3VuZCcsIGpvaW50cyA9ICdyb3VuZCcsIG1pdGVyTGltaXQgPSAzKSB7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0ge1xuICAgICAgICAgICAgdGhpY2tuZXNzLFxuICAgICAgICAgICAgcGl4ZWxIaW50aW5nLFxuICAgICAgICAgICAgc2NhbGVNb2RlLFxuICAgICAgICAgICAgY2FwcyxcbiAgICAgICAgICAgIGpvaW50cyxcbiAgICAgICAgICAgIG1pdGVyTGltaXQsXG4gICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxpbmVHcmFkaWVudFN0eWxlKHR5cGUsIGNvbG9yLCBhbHBoYSwgcmF0aW8sIG1hdHJpeCwgc3ByZWFkID0gJ3JlcGVhdCcsIGludGVycG9sYXRpb24gPSAncmdiJywgZm9jYWxQb2ludFJhdGlvID0gMCkge1xuICAgICAgICBpZiAoIXRoaXMuc3Ryb2tlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHJva2UuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICBzcHJlYWQsXG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9uLFxuICAgICAgICAgICAgZm9jYWxQb2ludFJhdGlvLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsaW5lQml0bWFwU3R5bGUoc3JjLCBtYXRyaXgsIHJlcGVhdCA9IHRydWUsIHNtb290aCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy5zdHJva2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0cm9rZS5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ2JpdG1hcCcsXG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICBzbW9vdGgsXG4gICAgICAgIH07XG4gICAgfVxuICAgIG1vdmVUbyh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICBwYXRoLnB1c2goeyB0eXBlOiAnbW92ZVRvJywgeCwgeSB9KTtcbiAgICB9XG4gICAgbGluZVRvKHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goeyB0eXBlOiAnbGluZVRvJywgeCwgeSB9KTtcbiAgICB9XG4gICAgY3VydmVUbyhjeCwgY3ksIHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1cnZlVG8nLCBjeCwgY3ksIHgsIHksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjdWJpY0N1cnZlVG8oY3gsIGN5LCBzeCwgc3ksIHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1cnZlVG8nLCBjeCwgY3ksIHN4LCBzeSwgeCwgeSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdSb3VuZFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgZWxsaXBzZVdpZHRoID0gMCwgZWxsaXBzZUhlaWdodCA9IDApIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnN0IHcgPSBlbGxpcHNlV2lkdGg7XG4gICAgICAgIGNvbnN0IGggPSBlbGxpcHNlSGVpZ2h0O1xuICAgICAgICBjb25zdCBrID0gMC41NTIyODQ4O1xuICAgICAgICBjb25zdCBveCA9ICh3IC8gMikgKiBrO1xuICAgICAgICBjb25zdCBveSA9IChoIC8gMikgKiBrO1xuICAgICAgICBjb25zdCB4ZSA9IHggKyB3O1xuICAgICAgICBjb25zdCB5ZSA9IHkgKyBoO1xuICAgICAgICBjb25zdCB4bSA9IHggKyB3IC8gMjtcbiAgICAgICAgY29uc3QgeW0gPSB5ICsgaCAvIDI7XG4gICAgICAgIGNvbnN0IGR4ID0gd2lkdGggLSB3O1xuICAgICAgICBjb25zdCBkeSA9IGhlaWdodCAtIGg7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbW92ZVRvJyxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5OiB5bSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4LFxuICAgICAgICAgICAgY3k6IHltIC0gb3ksXG4gICAgICAgICAgICBzeDogeG0gLSBveCxcbiAgICAgICAgICAgIHN5OiB5LFxuICAgICAgICAgICAgeDogeG0sXG4gICAgICAgICAgICB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeG0gKyBkeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeG0gKyBveCArIGR4LFxuICAgICAgICAgICAgY3k6IHksXG4gICAgICAgICAgICBzeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHN5OiB5bSAtIG95LFxuICAgICAgICAgICAgeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHk6IHltLFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHk6IHltICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeGUgKyBkeCxcbiAgICAgICAgICAgIGN5OiB5bSArIG95ICsgZHksXG4gICAgICAgICAgICBzeDogeG0gKyBveCArIGR4LFxuICAgICAgICAgICAgc3k6IHllICsgZHksXG4gICAgICAgICAgICB4OiB4bSArIGR4LFxuICAgICAgICAgICAgeTogeWUgKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhtLFxuICAgICAgICAgICAgeTogeWUgKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4bSAtIG94LFxuICAgICAgICAgICAgY3k6IHllICsgZHksXG4gICAgICAgICAgICBzeDogeCxcbiAgICAgICAgICAgIHN5OiB5bSArIG95ICsgZHksXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeTogeW0gKyBkeSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAncmVjdGFuZ2xlJztcbiAgICAgICAgZGF0YS54ID0geDtcbiAgICAgICAgZGF0YS55ID0geTtcbiAgICAgICAgZGF0YS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBkYXRhLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgZHJhd0NpcmNsZSh4LCB5LCByYWRpdXMpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAnZWxsaXBzZSc7XG4gICAgICAgIGRhdGEueCA9IHg7XG4gICAgICAgIGRhdGEueSA9IHk7XG4gICAgICAgIGRhdGEucmFkaXVzID0gcmFkaXVzO1xuICAgIH1cbiAgICBkcmF3RWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ2VsbGlwc2UnO1xuICAgICAgICBkYXRhLnJhZGl1c1ggPSB3aWR0aCAvIDI7XG4gICAgICAgIGRhdGEucmFkaXVzWSA9IGhlaWdodCAvIDI7XG4gICAgICAgIGRhdGEueCA9IHggLSBkYXRhLnJhZGl1c1g7XG4gICAgICAgIGRhdGEueSA9IHkgLSBkYXRhLnJhZGl1c1k7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5zaGFwZS5kYXRhO1xuICAgIH1cbiAgICBjcmVhdGVEYXRhKCkge1xuICAgICAgICBjb25zdCB7IHNoYXBlLCBmaWxsLCBzdHJva2UgfSA9IHRoaXM7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNoYXBlLmRhdGEpKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHNoYXBlLmRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBzaGFwZS5kYXRhID0gW3NoYXBlLmRhdGFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hhcGUuZGF0YSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyYXBoaWNzRGF0YSA9IHsgdHlwZTogJ3BhdGgnLCBmaWxsLCBzdHJva2UgfTtcbiAgICAgICAgc2hhcGUuZGF0YS5wdXNoKGdyYXBoaWNzRGF0YSk7XG4gICAgICAgIHJldHVybiBncmFwaGljc0RhdGE7XG4gICAgfVxuICAgIGJlZ2luUGF0aCgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLmRhdGEgPSBbXTtcbiAgICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcbiAgICB9XG4gICAgZ2V0UGF0aCgpIHtcbiAgICAgICAgY29uc3QgeyBzaGFwZSB9ID0gdGhpcztcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNoYXBlLmRhdGEpIHx8ICFzaGFwZS5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gc2hhcGUuZGF0YVtzaGFwZS5kYXRhLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5kYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YS5kYXRhO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vZGF0YS9kYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9wYXRoJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9zdHJpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL3N0eWxlJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JhcGhpY3MnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFwZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy9zaGFwZSc7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQm91bmRzLCBSZWN0YW5nbGUgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgR3JhcGhpY3NEYXRhIH0gZnJvbSAnLi9kYXRhL2RhdGEnO1xuaW1wb3J0IEdyYXBoaWNzIGZyb20gJy4vZ3JhcGhpY3MnO1xuZXhwb3J0IGNvbnN0IFNIQVBFID0gJ3NoYXBlJztcbmNvbnN0IGJvdW5kcyA9IEJvdW5kcy5lbXB0eSgpO1xuZXhwb3J0IHZhciBTaGFwZTtcbihmdW5jdGlvbiAoU2hhcGUpIHtcbiAgICBmdW5jdGlvbiBnZXRHcmFwaGljcyhzaGFwZSkge1xuICAgICAgICByZXR1cm4gbmV3IEdyYXBoaWNzKHNoYXBlKTtcbiAgICB9XG4gICAgU2hhcGUuZ2V0R3JhcGhpY3MgPSBnZXRHcmFwaGljcztcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoc2hhcGUsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHNoYXBlO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEJvdW5kcy5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhW2ldLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJvdW5kcy5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdpZHRoID0gYm91bmRzLm1heFggLSBib3VuZHMubWluWDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gYm91bmRzLm1heFkgLSBib3VuZHMubWluWTtcbiAgICAgICAgY29uc3QgeCA9IGJvdW5kcy5taW5YICsgUGl2b3QuZ2V0WChzaGFwZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gYm91bmRzLm1pblkgKyBQaXZvdC5nZXRZKHNoYXBlLCBoZWlnaHQpO1xuICAgICAgICByZXN1bHQueCA9IHg7XG4gICAgICAgIHJlc3VsdC55ID0geTtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIFNoYXBlLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFNoYXBlIHx8IChTaGFwZSA9IHt9KSk7XG5jb25zdCByZWN0YW5nbGUgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgU2hhcGVFeHRlbnNpb247XG4oZnVuY3Rpb24gKFNoYXBlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdChzaGFwZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgbG9jYWwgfSA9IGVuZ2luZS5wb2ludGVycztcbiAgICAgICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzKHNoYXBlLCByZWN0YW5nbGUpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKHJlY3RhbmdsZSwgbG9jYWwpO1xuICAgIH1cbiAgICBTaGFwZUV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChTSEFQRSwgaGl0VGVzdCk7XG4gICAgICAgIEltYWdlUmVzb3VyY2UuaW5pdChlbmdpbmUpO1xuICAgIH1cbiAgICBTaGFwZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFNoYXBlRXh0ZW5zaW9uIHx8IChTaGFwZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQ2FudmFzUGF0dGVybnMgfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IEZvbnQgfSBmcm9tICcuLi9kYXRhL2ZvbnQnO1xuaW1wb3J0IHsgVGV4dEV4dGVuc2lvbiwgVEVYVCB9IGZyb20gJy4uL3RleHQnO1xuaW1wb3J0IHsgVGV4dEZvcm1hdCB9IGZyb20gJy4uL2RhdGEvZm9ybWF0JztcbmltcG9ydCB7IFRleHRNZXRyaWNzIH0gZnJvbSAnLi4vZGF0YS9tZXRyaWNzJztcbmNvbnN0IGRlZmF1bHRUZXh0Rm9ybWF0ID0ge307XG5jb25zdCBDT1JSRUNUSU9OID0gMC44NTtcbmV4cG9ydCB2YXIgQ2FudmFzVGV4dEV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzVGV4dEV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihjb21wb25lbnQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBtZXRyaWNzID0gVGV4dE1ldHJpY3MuZ2V0TWV0cmljcyhjb21wb25lbnQpO1xuICAgICAgICBpZiAoIW1ldHJpY3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG1hdHJpeCwgY29sb3JUcmFuc2Zvcm0gfSA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZm9ybWF0LCBib3JkZXIsIGJhY2tncm91bmQsIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIFRleHRGb3JtYXQuY29tYmluZShmb3JtYXQsIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQsIGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgY29uc3QgcmVhbFdpZHRoID0gd2lkdGggPz8gbWV0cmljcy53aWR0aDtcbiAgICAgICAgY29uc3QgcmVhbEhlaWdodCA9IGhlaWdodCA/PyBtZXRyaWNzLmhlaWdodDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IFBpdm90LmdldFgoY29tcG9uZW50LCByZWFsV2lkdGgpO1xuICAgICAgICBjb25zdCBvZmZzZXRZID0gUGl2b3QuZ2V0WShjb21wb25lbnQsIHJlYWxIZWlnaHQpO1xuICAgICAgICBjb25zdCB7IGxpbmVzIH0gPSBtZXRyaWNzO1xuICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFsaWduVmVydGljYWxWYWx1ZSA9IFRleHRGb3JtYXQuZ2V0VmVydGljYWxBbGlnblZhbHVlKGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgICAgIHkgPSAoaGVpZ2h0IC0gbWV0cmljcy5oZWlnaHQpICogYWxpZ25WZXJ0aWNhbFZhbHVlO1xuICAgICAgICAgICAgaWYgKHkgPCAwKSB7XG4gICAgICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeSArPSBvZmZzZXRZO1xuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBlbmdpbmUucGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgIGlmIChiYWNrZ3JvdW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICcnO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihiYWNrZ3JvdW5kLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQucmVjdChvZmZzZXRYLCBvZmZzZXRZLCByZWFsV2lkdGgsIHJlYWxIZWlnaHQpO1xuICAgICAgICAgICAgY29udGV4dDJkLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihib3JkZXIsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcbiAgICAgICAgICAgIGNvbnRleHQyZC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5yZWN0KG9mZnNldFgsIG9mZnNldFksIHJlYWxXaWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dDJkLnRleHRCYXNlbGluZSA9ICdhbHBoYWJldGljJztcbiAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgIGlmIChsaW5lLnN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3QgPSBsaW5lLnN5bWJvbHNbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgYWxpZ25WYWx1ZSA9IFRleHRGb3JtYXQuZ2V0QWxpZ25WYWx1ZShmaXJzdC5mb3JtYXQpO1xuICAgICAgICAgICAgICAgIGxldCB4ID0gKHJlYWxXaWR0aCAtIGxpbmUud2lkdGgpICogYWxpZ25WYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoeCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHggKz0gb2Zmc2V0WDtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHN5bWJvbHMgfSA9IGxpbmU7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZUhlaWdodCA9IGxpbmUuaGVpZ2h0ICogQ09SUkVDVElPTjtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN5bWJvbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHN5bWJvbC5mb3JtYXQuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxpZ25TeW1ib2xWYWx1ZSA9IFRleHRGb3JtYXQuZ2V0VmVydGljYWxBbGlnblZhbHVlKHN5bWJvbC5mb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xTaXplID0gc2l6ZSAqIENPUlJFQ1RJT047XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5mb250ID0gRm9udC5nZXRTdHlsZUZvbnQoc3ltYm9sLmZvcm1hdC5mb250LCBzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihzeW1ib2wuZm9ybWF0LmNvbG9yLCBzeW1ib2wuZm9ybWF0LmFscGhhLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5maWxsVGV4dChzeW1ib2wuc3ltYm9sLCB4LCB5ICsgc3ltYm9sU2l6ZSArIGFsaWduU3ltYm9sVmFsdWUgKiAobGluZUhlaWdodCAtIHN5bWJvbFNpemUpKTtcbiAgICAgICAgICAgICAgICAgICAgeCArPSBzeW1ib2wuYWR2YW5jZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5ICs9IGxpbmUuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc1RleHRFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIFRleHRFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KFRFWFQsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc1RleHRFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNUZXh0RXh0ZW5zaW9uIHx8IChDYW52YXNUZXh0RXh0ZW5zaW9uID0ge30pKTtcbiIsImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuZXhwb3J0IGNvbnN0IEVNID0gMTAyNDtcbmNvbnN0IGZvbnRzID0gbmV3IE1hcCgpO1xuZXhwb3J0IHZhciBGb250O1xuKGZ1bmN0aW9uIChGb250KSB7XG4gICAgZnVuY3Rpb24gZ2V0U3R5bGVGb250KGZvbnQsIHNpemUpIHtcbiAgICAgICAgcmV0dXJuIGAke3NpemV9cHggJHtmb250fWA7XG4gICAgfVxuICAgIEZvbnQuZ2V0U3R5bGVGb250ID0gZ2V0U3R5bGVGb250O1xuICAgIGZ1bmN0aW9uIG1lYXN1cmVUZXh0KGZvbnQsIHNpemUsIHRleHQpIHtcbiAgICAgICAgY29udGV4dC5mb250ID0gZ2V0U3R5bGVGb250KGZvbnQsIHNpemUpO1xuICAgICAgICByZXR1cm4gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcbiAgICB9XG4gICAgRm9udC5tZWFzdXJlVGV4dCA9IG1lYXN1cmVUZXh0O1xuICAgIGZ1bmN0aW9uIGdldENoYXJXaWR0aChmb250LCBjaGFyKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IGZvbnQud2lkdGhzLmdldChjaGFyKTtcbiAgICAgICAgaWYgKCF3aWR0aCkge1xuICAgICAgICAgICAgd2lkdGggPSBtZWFzdXJlVGV4dChmb250Lm5hbWUsIEVNLCBjaGFyKTtcbiAgICAgICAgICAgIGZvbnQud2lkdGhzLnNldChjaGFyLCB3aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cbiAgICBGb250LmdldENoYXJXaWR0aCA9IGdldENoYXJXaWR0aDtcbiAgICBmdW5jdGlvbiBnZXRLZXJuaW5nKGZvbnQsIGZpcnN0LCBzZWNvbmQpIHtcbiAgICAgICAgY29uc3QgcGFpciA9IGZpcnN0ICsgc2Vjb25kO1xuICAgICAgICBsZXQga2VybmluZyA9IGZvbnQua2VybmluZ3MuZ2V0KHBhaXIpO1xuICAgICAgICBpZiAoIWtlcm5pbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoU2Vjb25kID0gZ2V0Q2hhcldpZHRoKGZvbnQsIHNlY29uZCk7XG4gICAgICAgICAgICBjb25zdCB3aWR0aFRvdGFsID0gbWVhc3VyZVRleHQoZm9udC5uYW1lLCBFTSwgZmlyc3QgKyBzZWNvbmQpO1xuICAgICAgICAgICAga2VybmluZyA9IHdpZHRoVG90YWwgLSB3aWR0aFNlY29uZDtcbiAgICAgICAgICAgIGZvbnQua2VybmluZ3Muc2V0KHBhaXIsIGtlcm5pbmcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXJuaW5nO1xuICAgIH1cbiAgICBGb250LmdldEtlcm5pbmcgPSBnZXRLZXJuaW5nO1xuICAgIGZ1bmN0aW9uIGdldEFkdmFuY2UoZm9udCwgc2l6ZSwgZmlyc3QsIHNlY29uZCkge1xuICAgICAgICBjb25zdCBzY2FsZSA9IHNpemUgLyBFTTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBnZXRDaGFyV2lkdGgoZm9udCwgZmlyc3QpO1xuICAgICAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpZHRoICogc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2VybmluZyA9IGdldEtlcm5pbmcoZm9udCwgZmlyc3QsIHNlY29uZCk7XG4gICAgICAgIHJldHVybiBrZXJuaW5nICogc2NhbGU7XG4gICAgfVxuICAgIEZvbnQuZ2V0QWR2YW5jZSA9IGdldEFkdmFuY2U7XG4gICAgZnVuY3Rpb24gZ2V0Rm9udChuYW1lKSB7XG4gICAgICAgIGxldCBmb250ID0gZm9udHMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoIWZvbnQpIHtcbiAgICAgICAgICAgIGZvbnQgPSB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB3aWR0aHM6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgICAgICBrZXJuaW5nczogbmV3IE1hcCgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvbnRzLnNldChuYW1lLCBmb250KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9udDtcbiAgICB9XG4gICAgRm9udC5nZXRGb250ID0gZ2V0Rm9udDtcbn0pKEZvbnQgfHwgKEZvbnQgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBUZXh0Rm9ybWF0O1xuKGZ1bmN0aW9uIChUZXh0Rm9ybWF0KSB7XG4gICAgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCA9IHtcbiAgICAgICAgZm9udDogJ2FyaWFsJyxcbiAgICAgICAgc2l6ZTogMTUsXG4gICAgICAgIGNvbG9yOiAwLFxuICAgICAgICBhbHBoYTogMSxcbiAgICAgICAgYm9sZDogZmFsc2UsXG4gICAgICAgIGl0YWxpYzogZmFsc2UsXG4gICAgICAgIHVuZGVybGluZTogZmFsc2UsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgICAgIGxlYWRpbmc6IDAsXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgIH07XG4gICAgZnVuY3Rpb24gY29tYmluZShzb3VyY2UsIGRlZmF1bHRGb3JtYXQsIHJlc3VsdCkge1xuICAgICAgICByZXN1bHQuZm9udCA9IHNvdXJjZT8uZm9udCA/PyBkZWZhdWx0Rm9ybWF0LmZvbnQ7XG4gICAgICAgIHJlc3VsdC5zaXplID0gc291cmNlPy5zaXplID8/IGRlZmF1bHRGb3JtYXQuc2l6ZTtcbiAgICAgICAgcmVzdWx0LmNvbG9yID0gc291cmNlPy5jb2xvciA/PyBkZWZhdWx0Rm9ybWF0LmNvbG9yO1xuICAgICAgICByZXN1bHQuYWxwaGEgPSBzb3VyY2U/LmFscGhhID8/IGRlZmF1bHRGb3JtYXQuYWxwaGE7XG4gICAgICAgIHJlc3VsdC5ib2xkID0gc291cmNlPy5ib2xkID8/IGRlZmF1bHRGb3JtYXQuYm9sZDtcbiAgICAgICAgcmVzdWx0Lml0YWxpYyA9IHNvdXJjZT8uaXRhbGljID8/IGRlZmF1bHRGb3JtYXQuaXRhbGljO1xuICAgICAgICByZXN1bHQudW5kZXJsaW5lID0gc291cmNlPy51bmRlcmxpbmUgPz8gZGVmYXVsdEZvcm1hdC51bmRlcmxpbmU7XG4gICAgICAgIHJlc3VsdC5sZXR0ZXJTcGFjaW5nID0gc291cmNlPy5sZXR0ZXJTcGFjaW5nID8/IGRlZmF1bHRGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgcmVzdWx0LmxlYWRpbmcgPSBzb3VyY2U/LmxlYWRpbmcgPz8gZGVmYXVsdEZvcm1hdC5sZWFkaW5nO1xuICAgICAgICByZXN1bHQuYWxpZ24gPSBzb3VyY2U/LmFsaWduID8/IGRlZmF1bHRGb3JtYXQuYWxpZ247XG4gICAgICAgIHJlc3VsdC52ZXJ0aWNhbEFsaWduID0gc291cmNlPy52ZXJ0aWNhbEFsaWduID8/IGRlZmF1bHRGb3JtYXQudmVydGljYWxBbGlnbjtcbiAgICB9XG4gICAgVGV4dEZvcm1hdC5jb21iaW5lID0gY29tYmluZTtcbiAgICBmdW5jdGlvbiBjb3B5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5mb250ID0gc291cmNlLmZvbnQ7XG4gICAgICAgIHRhcmdldC5zaXplID0gc291cmNlLnNpemU7XG4gICAgICAgIHRhcmdldC5jb2xvciA9IHNvdXJjZS5jb2xvcjtcbiAgICAgICAgdGFyZ2V0LmFscGhhID0gc291cmNlLmFscGhhO1xuICAgICAgICB0YXJnZXQuYm9sZCA9IHNvdXJjZS5ib2xkO1xuICAgICAgICB0YXJnZXQuaXRhbGljID0gc291cmNlLml0YWxpYztcbiAgICAgICAgdGFyZ2V0LnVuZGVybGluZSA9IHNvdXJjZS51bmRlcmxpbmU7XG4gICAgICAgIHRhcmdldC5sZXR0ZXJTcGFjaW5nID0gc291cmNlLmxldHRlclNwYWNpbmc7XG4gICAgICAgIHRhcmdldC5sZWFkaW5nID0gc291cmNlLmxlYWRpbmc7XG4gICAgICAgIHRhcmdldC5hbGlnbiA9IHNvdXJjZS5hbGlnbjtcbiAgICAgICAgdGFyZ2V0LnZlcnRpY2FsQWxpZ24gPSBzb3VyY2UudmVydGljYWxBbGlnbjtcbiAgICB9XG4gICAgVGV4dEZvcm1hdC5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBnZXRBbGlnblZhbHVlKGZvcm1hdCkge1xuICAgICAgICBzd2l0Y2ggKGZvcm1hdC5hbGlnbikge1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6IHJldHVybiAwO1xuICAgICAgICAgICAgY2FzZSAnY2VudGVyJzogcmV0dXJuIDAuNTtcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzogcmV0dXJuIDE7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmdldEFsaWduVmFsdWUgPSBnZXRBbGlnblZhbHVlO1xuICAgIGZ1bmN0aW9uIGdldFZlcnRpY2FsQWxpZ25WYWx1ZShmb3JtYXQpIHtcbiAgICAgICAgc3dpdGNoIChmb3JtYXQudmVydGljYWxBbGlnbikge1xuICAgICAgICAgICAgY2FzZSAndG9wJzogcmV0dXJuIDA7XG4gICAgICAgICAgICBjYXNlICdtaWRkbGUnOiByZXR1cm4gMC41O1xuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzogcmV0dXJuIDE7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmdldFZlcnRpY2FsQWxpZ25WYWx1ZSA9IGdldFZlcnRpY2FsQWxpZ25WYWx1ZTtcbn0pKFRleHRGb3JtYXQgfHwgKFRleHRGb3JtYXQgPSB7fSkpO1xuIiwiaW1wb3J0IHsgRm9udCB9IGZyb20gJy4vZm9udCc7XG5pbXBvcnQgeyBUZXh0Rm9ybWF0IH0gZnJvbSAnLi9mb3JtYXQnO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uL3RleHQnO1xuY29uc3QgZGVmYXVsdFRleHRGb3JtYXQgPSB7fTtcbmV4cG9ydCB2YXIgVGV4dExpbmU7XG4oZnVuY3Rpb24gKFRleHRMaW5lKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3ltYm9sczogW10sXG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgVGV4dExpbmUuY3JlYXRlID0gY3JlYXRlO1xuICAgIGZ1bmN0aW9uIGVtcHR5KGxpbmUpIHtcbiAgICAgICAgbGluZS5zeW1ib2xzLmxlbmd0aCA9IDA7XG4gICAgICAgIGxpbmUud2lkdGggPSAwO1xuICAgICAgICBsaW5lLmhlaWdodCA9IDA7XG4gICAgfVxuICAgIFRleHRMaW5lLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gYWRkKGxpbmUsIHN5bWJvbCkge1xuICAgICAgICBsaW5lLnN5bWJvbHMucHVzaChzeW1ib2wpO1xuICAgICAgICBsaW5lLndpZHRoICs9IHN5bWJvbC5hZHZhbmNlO1xuICAgICAgICBsaW5lLmhlaWdodCA9IE1hdGgubWF4KGxpbmUuaGVpZ2h0LCBzeW1ib2wuZm9ybWF0LnNpemUgKyBzeW1ib2wuZm9ybWF0LmxlYWRpbmcpO1xuICAgIH1cbiAgICBUZXh0TGluZS5hZGQgPSBhZGQ7XG4gICAgZnVuY3Rpb24gY29uY2F0KHRhcmdldCwgc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2Uuc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRhcmdldC5zeW1ib2xzLnB1c2goLi4uc291cmNlLnN5bWJvbHMpO1xuICAgICAgICAgICAgdGFyZ2V0LndpZHRoICs9IHNvdXJjZS53aWR0aDtcbiAgICAgICAgICAgIHRhcmdldC5oZWlnaHQgPSBNYXRoLm1heCh0YXJnZXQuaGVpZ2h0LCBzb3VyY2UuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0TGluZS5jb25jYXQgPSBjb25jYXQ7XG4gICAgZnVuY3Rpb24gY29ycmVjdFdpZHRoKGxpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzeW1ib2xzIH0gPSBsaW5lO1xuICAgICAgICBpZiAoc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBzeW1ib2xzW3N5bWJvbHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAoL1xccy8udGVzdChsYXN0LnN5bWJvbCkpIHtcbiAgICAgICAgICAgICAgICBzeW1ib2xzLnBvcCgpO1xuICAgICAgICAgICAgICAgIGxpbmUud2lkdGggLT0gbGFzdC5hZHZhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRMaW5lLmNvcnJlY3RXaWR0aCA9IGNvcnJlY3RXaWR0aDtcbiAgICBmdW5jdGlvbiBjb3JyZWN0SGVpZ2h0KGxpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzeW1ib2xzIH0gPSBsaW5lO1xuICAgICAgICBpZiAoc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbMF07XG4gICAgICAgICAgICBsaW5lLmhlaWdodCAtPSBzeW1ib2wuZm9ybWF0LmxlYWRpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dExpbmUuY29ycmVjdEhlaWdodCA9IGNvcnJlY3RIZWlnaHQ7XG59KShUZXh0TGluZSB8fCAoVGV4dExpbmUgPSB7fSkpO1xuZXhwb3J0IHZhciBUZXh0TWV0cmljcztcbihmdW5jdGlvbiAoVGV4dE1ldHJpY3MpIHtcbiAgICBmdW5jdGlvbiBnZXRTeW1ib2xzKGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCB7IHRleHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCF0ZXh0IHx8ICF0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBUZXh0Rm9ybWF0LmNvbWJpbmUoY29tcG9uZW50LmZvcm1hdCwgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCwgZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBjb25zdCBzeW1ib2xzID0gW107XG4gICAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvcm1hdCA9IHt9O1xuICAgICAgICAgICAgVGV4dEZvcm1hdC5jb3B5KGRlZmF1bHRUZXh0Rm9ybWF0LCBzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9udCA9IEZvbnQuZ2V0Rm9udChzeW1ib2xGb3JtYXQuZm9udCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSB0ZXh0W2kgKyAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKHN5bWJvbEZvbnQsIHN5bWJvbEZvcm1hdC5zaXplLCBzeW1ib2wsIHN5bWJvbE5leHQpICsgc3ltYm9sRm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgc3ltYm9scy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICBhZHZhbmNlLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHN5bWJvbEZvcm1hdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRleHQpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IHRleHRbaV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBibG9jayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9ybWF0ID0ge307XG4gICAgICAgICAgICAgICAgICAgIFRleHRGb3JtYXQuY29weShkZWZhdWx0VGV4dEZvcm1hdCwgc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9udCA9IEZvbnQuZ2V0Rm9udChzeW1ib2xGb3JtYXQuZm9udCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYmxvY2subGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IGJsb2NrW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IGJsb2NrW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2Uoc3ltYm9sRm9udCwgc3ltYm9sRm9ybWF0LnNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBzeW1ib2xGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBzeW1ib2xGb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9ybWF0ID0ge307XG4gICAgICAgICAgICAgICAgICAgIFRleHRGb3JtYXQuY29tYmluZShibG9jaywgZGVmYXVsdFRleHRGb3JtYXQsIHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvbnQgPSBGb250LmdldEZvbnQoc3ltYm9sRm9ybWF0LmZvbnQpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJsb2NrLnRleHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IGJsb2NrLnRleHRbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gYmxvY2sudGV4dFtqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKHN5bWJvbEZvbnQsIHN5bWJvbEZvcm1hdC5zaXplLCBzeW1ib2wsIHN5bWJvbE5leHQpICsgc3ltYm9sRm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZHZhbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogc3ltYm9sRm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN5bWJvbHM7XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldFN5bWJvbHMgPSBnZXRTeW1ib2xzO1xuICAgIGZ1bmN0aW9uIGdldExpbmVzKGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBzeW1ib2xzID0gZ2V0U3ltYm9scyhjb21wb25lbnQpO1xuICAgICAgICBpZiAoIXN5bWJvbHMgfHwgIXN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgd2lkdGggfSA9IGNvbXBvbmVudDtcbiAgICAgICAgY29uc3Qgd29yZFdyYXAgPSBUZXh0LmlzV29yZFdyYXAoY29tcG9uZW50KTtcbiAgICAgICAgY29uc3QgbXVsdGlsaW5lID0gVGV4dC5pc011bHRpbGluZShjb21wb25lbnQpO1xuICAgICAgICBjb25zdCBsaW5lcyA9IFtdO1xuICAgICAgICBsZXQgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICBpZiAobXVsdGlsaW5lKSB7XG4gICAgICAgICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgICAgICAgICBpZiAod29yZFdyYXApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd29yZCA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sLnN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5jb25jYXQobGluZSwgd29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuZW1wdHkod29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQod29yZCwgc3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGluZS53aWR0aCArIHdvcmQud2lkdGggPiB3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKC9cXHMvLnRlc3Qoc3ltYm9sLnN5bWJvbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuY29uY2F0KGxpbmUsIHdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5lbXB0eSh3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuY29uY2F0KGxpbmUsIHdvcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbC5zeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChsaW5lLndpZHRoICsgc3ltYm9sLmFkdmFuY2UgPiB3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZChsaW5lLCBzeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKGxpbmUsIHN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbC5zeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKGxpbmUsIHN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2ldO1xuICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZChsaW5lLCBzeW1ib2wpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5lLnN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICAgICAgVGV4dExpbmUuY29ycmVjdFdpZHRoKGxpbmUpO1xuICAgICAgICAgICAgICAgIGlmICghbGluZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5oZWlnaHQgPSBkZWZhdWx0VGV4dEZvcm1hdC5zaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbmUgPSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIFRleHRMaW5lLmNvcnJlY3RIZWlnaHQobGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH1cbiAgICBUZXh0TWV0cmljcy5nZXRMaW5lcyA9IGdldExpbmVzO1xuICAgIGZ1bmN0aW9uIGdldE1ldHJpY3MoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gZ2V0TGluZXMoY29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFsaW5lcyB8fCAhbGluZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1ldHJpY3MgPSB7XG4gICAgICAgICAgICBsaW5lcyxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICBtZXRyaWNzLndpZHRoID0gTWF0aC5tYXgobWV0cmljcy53aWR0aCwgbGluZS53aWR0aCk7XG4gICAgICAgICAgICBtZXRyaWNzLmhlaWdodCArPSBsaW5lLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWV0cmljcztcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0TWV0cmljcyA9IGdldE1ldHJpY3M7XG59KShUZXh0TWV0cmljcyB8fCAoVGV4dE1ldHJpY3MgPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi90ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9mb3JtYXQnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL2ZvbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL21ldHJpY3MnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMvdGV4dCc7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBUZXh0TWV0cmljcyB9IGZyb20gJy4vZGF0YS9tZXRyaWNzJztcbmV4cG9ydCBjb25zdCBURVhUID0gJ3RleHQnO1xuZXhwb3J0IHZhciBUZXh0O1xuKGZ1bmN0aW9uIChUZXh0KSB7XG4gICAgZnVuY3Rpb24gZ2V0VGV4dChjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghdGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRleHQpKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IHRleHRbaV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBibG9jayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGJsb2NrLnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIFRleHQuZ2V0VGV4dCA9IGdldFRleHQ7XG4gICAgZnVuY3Rpb24gaXNBdXRvU2l6ZShjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuICFjb21wb25lbnQud2lkdGggJiYgIWNvbXBvbmVudC5oZWlnaHQ7XG4gICAgfVxuICAgIFRleHQuaXNBdXRvU2l6ZSA9IGlzQXV0b1NpemU7XG4gICAgZnVuY3Rpb24gaXNXb3JkV3JhcChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC53b3JkV3JhcCA/PyB0cnVlO1xuICAgIH1cbiAgICBUZXh0LmlzV29yZFdyYXAgPSBpc1dvcmRXcmFwO1xuICAgIGZ1bmN0aW9uIGlzTXVsdGlsaW5lKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50Lm11bHRpbGluZSA/PyB0cnVlO1xuICAgIH1cbiAgICBUZXh0LmlzTXVsdGlsaW5lID0gaXNNdWx0aWxpbmU7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGNvbXBvbmVudCwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IG1ldHJpY3MgPSBUZXh0TWV0cmljcy5nZXRNZXRyaWNzKGNvbXBvbmVudCk7XG4gICAgICAgIGlmICghbWV0cmljcykge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHsgd2lkdGgsIGhlaWdodCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXdpZHRoKSB7XG4gICAgICAgICAgICB3aWR0aCA9IG1ldHJpY3Mud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoZWlnaHQpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IG1ldHJpY3MuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGNvbXBvbmVudCwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShjb21wb25lbnQsIGhlaWdodCk7XG4gICAgICAgIGJvdW5kcy54ID0geDtcbiAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgYm91bmRzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgVGV4dC5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShUZXh0IHx8IChUZXh0ID0ge30pKTtcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBUZXh0RXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChUZXh0RXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdCh0ZXh0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBsb2NhbCB9ID0gZW5naW5lLnBvaW50ZXJzO1xuICAgICAgICBUZXh0LmNhbGN1bGF0ZUJvdW5kcyh0ZXh0LCBib3VuZHMpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKGJvdW5kcywgbG9jYWwpO1xuICAgIH1cbiAgICBUZXh0RXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KFRFWFQsIGhpdFRlc3QpO1xuICAgIH1cbiAgICBUZXh0RXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoVGV4dEV4dGVuc2lvbiB8fCAoVGV4dEV4dGVuc2lvbiA9IHt9KSk7XG4iLCJleHBvcnQgY29uc3QgTElORUFSID0gJ2xpbmVhcic7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDID0gJ3F1YWRyYXRpYyc7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDX0lOID0gJ3F1YWRyYXRpY2luJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUNfT1VUID0gJ3F1YWRyYXRpY291dCc7XG5leHBvcnQgY29uc3QgQ1VCSUMgPSAnY3ViaWMnO1xuZXhwb3J0IGNvbnN0IENVQklDX0lOID0gJ2N1YmljaW4nO1xuZXhwb3J0IGNvbnN0IENVQklDX09VVCA9ICdjdWJpY291dCc7XG5leHBvcnQgY29uc3QgUVVBUlRJQyA9ICdxdWFydGljJztcbmV4cG9ydCBjb25zdCBRVUFSVElDX0lOID0gJ3F1YXJ0aWNpbic7XG5leHBvcnQgY29uc3QgUVVBUlRJQ19PVVQgPSAncXVhcnRpY291dCc7XG5leHBvcnQgY29uc3QgUVVJTlRJQyA9ICdxdWludGljJztcbmV4cG9ydCBjb25zdCBRVUlOVElDX0lOID0gJ3F1aW50aWNpbic7XG5leHBvcnQgY29uc3QgUVVJTlRJQ19PVVQgPSAncXVpbnRpY291dCc7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTCA9ICdxdWludGljJztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMX0lOID0gJ3F1aW50aWNpbic7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTF9PVVQgPSAncXVpbnRpY291dCc7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUwgPSAnZXhwb25lbnRpYWwnO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMX0lOID0gJ2V4cG9uZW50aWFsaW4nO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMX09VVCA9ICdleHBvbmVudGlhbG91dCc7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVIgPSAnY2lyY3VsYXInO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSX0lOID0gJ2NpcmN1bGFyaW4nO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSX09VVCA9ICdjaXJjdWxhcm91dCc7XG5leHBvcnQgY29uc3QgRUxBU1RJQyA9ICdlbGFzdGljJztcbmV4cG9ydCBjb25zdCBFTEFTVElDX0lOID0gJ2VsYXN0aWNpbic7XG5leHBvcnQgY29uc3QgRUxBU1RJQ19PVVQgPSAnZWxhc3RpY291dCc7XG5leHBvcnQgY29uc3QgQkFDSyA9ICdiYWNrJztcbmV4cG9ydCBjb25zdCBCQUNLX0lOID0gJ2JhY2tpbic7XG5leHBvcnQgY29uc3QgQkFDS19PVVQgPSAnYmFja291dCc7XG5leHBvcnQgY29uc3QgQk9VTkNFID0gJ2JvdW5jZSc7XG5leHBvcnQgY29uc3QgQk9VTkNFX0lOID0gJ2JvdW5jZWluJztcbmV4cG9ydCBjb25zdCBCT1VOQ0VfT1VUID0gJ2JvdW5jZW91dCc7XG5leHBvcnQgY29uc3QgZWFzaW5nID0ge1xuICAgIFtMSU5FQVJdOiAodmFsdWUpID0+IHZhbHVlLFxuICAgIFtRVUFEUkFUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMC41ICogKC0tdmFsdWUgKiAodmFsdWUgLSAyKSAtIDEpO1xuICAgIH0sXG4gICAgW1FVQURSQVRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUFEUkFUSUNfT1VUXTogKHZhbHVlKSA9PiAodmFsdWUgKiAoMiAtIHZhbHVlKSksXG4gICAgW0NVQklDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSArIDIpO1xuICAgIH0sXG4gICAgW0NVQklDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbQ1VCSUNfT1VUXTogKHZhbHVlKSA9PiAoLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAxKSxcbiAgICBbUVVBUlRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAtIDIpO1xuICAgIH0sXG4gICAgW1FVQVJUSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVQVJUSUNfT1VUXTogKHZhbHVlKSA9PiAoMSAtIC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUlOVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMik7XG4gICAgfSxcbiAgICBbUVVJTlRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUlOVElDX09VVF06ICh2YWx1ZSkgPT4gKC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDEpLFxuICAgIFtTSU5VU09JREFMXTogKHZhbHVlKSA9PiAoMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogdmFsdWUpKSksXG4gICAgW1NJTlVTT0lEQUxfSU5dOiAodmFsdWUpID0+ICgxIC0gTWF0aC5jb3MoKHZhbHVlICogTWF0aC5QSSkgLyAyKSksXG4gICAgW1NJTlVTT0lEQUxfT1VUXTogKHZhbHVlKSA9PiAoTWF0aC5zaW4oKHZhbHVlICogTWF0aC5QSSkgLyAyKSksXG4gICAgW0VYUE9ORU5USUFMXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDEwMjQsIHZhbHVlIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogKHZhbHVlIC0gMSkpICsgMik7XG4gICAgfSxcbiAgICBbRVhQT05FTlRJQUxfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gMCA/IDAgOiBNYXRoLnBvdygxMDI0LCB2YWx1ZSAtIDEpKSxcbiAgICBbRVhQT05FTlRJQUxfT1VUXTogKHZhbHVlKSA9PiAodmFsdWUgPT09IDEgPyAxIDogMSAtIE1hdGgucG93KDIsIC0xMCAqIHZhbHVlKSksXG4gICAgW0NJUkNVTEFSXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHZhbHVlICogdmFsdWUpIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh2YWx1ZSAtPSAyKSAqIHZhbHVlKSArIDEpO1xuICAgIH0sXG4gICAgW0NJUkNVTEFSX0lOXTogKHZhbHVlKSA9PiAoMSAtIE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkpLFxuICAgIFtDSVJDVUxBUl9PVVRdOiAodmFsdWUpID0+IE1hdGguc3FydCgxIC0gLS12YWx1ZSAqIHZhbHVlKSxcbiAgICBbRUxBU1RJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgKj0gMjtcbiAgICAgICAgaWYgKHZhbHVlIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiBNYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDIsIC0xMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuICAgIH0sXG4gICAgW0VMQVNUSUNfSU5dOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuICAgIH0sXG4gICAgW0VMQVNUSUNfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5wb3coMiwgLTEwICogdmFsdWUpICogTWF0aC5zaW4oKHZhbHVlIC0gMC4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG4gICAgfSxcbiAgICBbQkFDS106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1OCAqIDEuNTI1O1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqICh2YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSAtIHMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSArIHMpICsgMik7XG4gICAgfSxcbiAgICBbQkFDS19JTl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICAgICAgcmV0dXJuIHZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlIC0gcyk7XG4gICAgfSxcbiAgICBbQkFDS19PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTg7XG4gICAgICAgIHJldHVybiAtLXZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlICsgcykgKyAxO1xuICAgIH0sXG4gICAgW0JPVU5DRV06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPCAwLjUpIHtcbiAgICAgICAgICAgIHJldHVybiBlYXNpbmdbQk9VTkNFX0lOXSh2YWx1ZSAqIDIpICogMC41O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlYXNpbmdbQk9VTkNFX09VVF0odmFsdWUgKiAyIC0gMSkgKiAwLjUgKyAwLjU7XG4gICAgfSxcbiAgICBbQk9VTkNFX0lOXTogKHZhbHVlKSA9PiAoMSAtIGVhc2luZ1tCT1VOQ0VfT1VUXSgxIC0gdmFsdWUpKSxcbiAgICBbQk9VTkNFX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPCAxIC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgMiAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMS41IC8gMi43NSkgKiB2YWx1ZSArIDAuNzU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgMi41IC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAyLjI1IC8gMi43NSkgKiB2YWx1ZSArIDAuOTM3NTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDIuNjI1IC8gMi43NSkgKiB2YWx1ZSArIDAuOTg0Mzc1O1xuICAgIH0sXG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi90d2Vlbic7XG5leHBvcnQgKiBmcm9tICcuL2Vhc2luZyc7XG4iLCJpbXBvcnQgeyBlYXNpbmcsIExJTkVBUiB9IGZyb20gJy4vZWFzaW5nJztcbmV4cG9ydCBjb25zdCBUV0VFTiA9ICd0d2Vlbic7XG5leHBvcnQgdmFyIFR3ZWVuRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChUd2VlbkV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHVwZGF0ZShjb21wb25lbnQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHR3ZWVuIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IHsgcGhhc2VzIH0gPSB0d2VlbjtcbiAgICAgICAgaWYgKCFwaGFzZXM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ0FuaW1hdGlvbiBwYXJ0cyBub3QgZm91bmQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHdlZW4udGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0d2Vlbi50aW1lICs9IGVuZ2luZS51cGRhdGVyLnRpbWU7XG4gICAgICAgIGNvbnN0IHsgdGltZSB9ID0gdHdlZW47XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBwaGFzZXMuZm9yRWFjaCgocGhhc2UpID0+IHtcbiAgICAgICAgICAgIGlmICghcGhhc2UudGltZSkge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdBbmltYXRpb24gdGltZSBub3Qgc2V0Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBoYXNlLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gcGhhc2Uub2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZWFzaW5nTmFtZSA9IHBoYXNlPy5lYXNpbmc/LnRvTG93ZXJDYXNlKCkgPz8gTElORUFSO1xuICAgICAgICAgICAgY29uc3QgZWFzaW5nTWV0aG9kID0gZWFzaW5nW2Vhc2luZ05hbWVdO1xuICAgICAgICAgICAgaWYgKCFlYXNpbmdNZXRob2QpIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZyhgVW5rbm93biBlYXNpbmcgdHlwZTogJHtlYXNpbmd9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAodGltZSAtIG9mZnNldCkgLyBwaGFzZS50aW1lO1xuICAgICAgICAgICAgb2Zmc2V0ICs9IHBoYXNlLnRpbWU7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCAwIHx8IHZhbHVlID4gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVhc2luZ1ZhbHVlID0gZWFzaW5nTWV0aG9kKHZhbHVlKTtcbiAgICAgICAgICAgIGlmICghcGhhc2UudG8pIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnQW5pbWF0aW9uIFwidG9cIiBzdGF0ZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBoYXNlLmZyb20pIHtcbiAgICAgICAgICAgICAgICBwaGFzZS5mcm9tID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHRvLCBmcm9tIH0gPSBwaGFzZTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gY29tcG9uZW50O1xuICAgICAgICAgICAgT2JqZWN0LmtleXModG8pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmcm9tW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tW2tleV0gPSBzdGF0ZVtrZXldID8/IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGZyb21WYWx1ZSA9IGZyb21ba2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b1ZhbHVlID0gdG9ba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZyb21WYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHRvVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlVmFsdWUgPSBmcm9tVmFsdWUgKyBlYXNpbmdWYWx1ZSAqICh0b1ZhbHVlIC0gZnJvbVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IHN0YXRlVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodHdlZW4ubG9vcCAmJiB0d2Vlbi50aW1lID4gb2Zmc2V0KSB7XG4gICAgICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUd2VlbkV4dGVuc2lvbi51cGRhdGUgPSB1cGRhdGU7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucHJvcGVydGllcy5zZXQoVFdFRU4sIHVwZGF0ZSk7XG4gICAgfVxuICAgIFR3ZWVuRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoVHdlZW5FeHRlbnNpb24gfHwgKFR3ZWVuRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IEFCSUxJVFlfV09MRiB9IGZyb20gJy4vYXNzZXRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjdXJzaXZlKCkge1xuXHRjb25zdCBjb250YWluZXIgPSB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0eDogMzAsXG5cdFx0XHR5OiAzMCxcblx0XHRcdHNjYWxlWDogMC45LFxuXHRcdFx0c2NhbGVZOiAwLjksXG5cdFx0XHRyb3RhdGlvbjogMC4yLFxuXHRcdFx0YWxwaGE6IDAuOSxcblx0XHRcdGNoaWxkcmVuOiBbe1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEFCSUxJVFlfV09MRixcblx0XHRcdFx0c2NhbGU6IDAuMyxcblx0XHRcdH1dLFxuXHRcdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHRcdHRoaXMucm90YXRpb24gKz0gdGltZSAqIDAuMDU7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cblx0Y29udGFpbmVyLmNoaWxkcmVuLmNoaWxkcmVuLnB1c2goY29udGFpbmVyIGFzIG5ldmVyKTtcblxuXHRyZXR1cm4gY29udGFpbmVyO1xufVxuIiwiY29uc3QgQVNTRVRTID0gJ2Fzc2V0cy8nO1xuXG5leHBvcnQgY29uc3QgQU5JTUFMSVNUID0gJ2lkOmFuaW1hbGlzdCc7XG5leHBvcnQgY29uc3QgQVJDSEVSID0gJ2lkOmFyY2hlcic7XG5cbmV4cG9ydCBjb25zdCBBTklNQUxJU1RfSU1BR0UgPSBgJHtBU1NFVFN9QW5pbWFsaXN0Rm94MV9pbWFnZS5wbmdgO1xuZXhwb3J0IGNvbnN0IEFSQ0hFUl9JTUFHRSA9IGAke0FTU0VUU31BcmNoZXIyX2h1bnRlcl9pbWFnZS5wbmdgO1xuXG5leHBvcnQgY29uc3QgQUJJTElUWV9GT1ggPSBgJHtBU1NFVFN9QW5pbWFsaXN0QWJpbGl0eV9Gb3gucG5nYDtcbmV4cG9ydCBjb25zdCBBQklMSVRZX1dPTEYgPSBgJHtBU1NFVFN9QW5pbWFsaXN0QWJpbGl0eV9Xb2xmLnBuZ2A7XG5cbmV4cG9ydCBjb25zdCBCQUNLR1JPVU5EID0gYCR7QVNTRVRTfWp1bmdsZV9iYWNrZ3JvdW5kLmpwZ2A7XG5cbmV4cG9ydCBjb25zdCBURVNUX0NBTlZBUyA9ICd0ZXN0LmNhbnZhcyc7XG5cbmV4cG9ydCBjb25zdCBTQ0VORSA9IGAke0FTU0VUU30vc2NlbmUuanNvbmA7XG4iLCJpbXBvcnQgeyBDYW52YXNFbmdpbmUgfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IEVuZ2luZU1vZHVsZSB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQ2FudmFzVGV4dEV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3RleHQnO1xuaW1wb3J0IHsgQ3VzdG9tSW1hZ2VFeHRlbnNpb24gfSBmcm9tICcuL2ltYWdlJztcbmltcG9ydCBDdXN0b21QbGF0Zm9ybSBmcm9tICcuL3BsYXRmb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tRW5naW5lIGV4dGVuZHMgQ2FudmFzRW5naW5lIHtcblx0Y29uc3RydWN0b3IobW9kdWxlOiBFbmdpbmVNb2R1bGUgPSB7fSkge1xuXHRcdG1vZHVsZS5QbGF0Zm9ybSA9IG1vZHVsZS5QbGF0Zm9ybSA/PyBDdXN0b21QbGF0Zm9ybTtcblxuXHRcdHN1cGVyKG1vZHVsZSk7XG5cblx0XHRDYW52YXNUZXh0RXh0ZW5zaW9uLmluaXQodGhpcyk7XG5cdFx0Q3VzdG9tSW1hZ2VFeHRlbnNpb24uaW5pdCh0aGlzKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzRW5naW5lLCBDYW52YXNQbGF0Zm9ybSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSwgSW1hZ2UgfSBmcm9tICdAamVuZy9pbWFnZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcblxuZXhwb3J0IG5hbWVzcGFjZSBDdXN0b21JbWFnZUV4dGVuc2lvbiB7XG5cdGV4cG9ydCBmdW5jdGlvbiByZW5kZXIoaW1hZ2U6IEltYWdlLCBlbmdpbmU6IENhbnZhc0VuZ2luZSk6IHZvaWQge1xuXHRcdGlmICghaW1hZ2Uuc3JjKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgeyBtYXRyaXgsIGNvbG9yVHJhbnNmb3JtIH0gPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuXG5cdFx0aWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChpbWFnZS5zcmMpIGFzIEltYWdlUmVzb3VyY2UgfCBudWxsO1xuXG5cdFx0aWYgKCFyZXNvdXJjZT8ubG9hZGVkIHx8ICFyZXNvdXJjZT8uaW1hZ2UpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBjb250ZXh0MmQgPSAoZW5naW5lLnBsYXRmb3JtIGFzIENhbnZhc1BsYXRmb3JtKS5nZXRDb250ZXh0KCk7XG5cblx0XHRjb250ZXh0MmQuc2V0VHJhbnNmb3JtKFxuXHRcdFx0bWF0cml4LmEsXG5cdFx0XHRtYXRyaXguYixcblx0XHRcdG1hdHJpeC5jLFxuXHRcdFx0bWF0cml4LmQsXG5cdFx0XHRtYXRyaXgudHgsXG5cdFx0XHRtYXRyaXgudHksXG5cdFx0KTtcblxuXHRcdGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG5cdFx0Y29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcblx0XHRjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcblxuXHRcdGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG5cdFx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuXHRcdGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICdsaWdodGdyYXknO1xuXHRcdGNvbnRleHQyZC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuXHR9XG5cblx0ZXhwb3J0IGZ1bmN0aW9uIGluaXQoZW5naW5lOiBDYW52YXNFbmdpbmUpIHtcblx0XHRJbWFnZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5cdFx0ZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChJTUFHRSwgcmVuZGVyKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzUGxhdGZvcm0gfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tUGxhdGZvcm0gZXh0ZW5kcyBDYW52YXNQbGF0Zm9ybSB7XG5cdGNsZWFyKCkge1xuXHRcdGNvbnN0IGNvbnRleHQyZCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnYmxhY2snO1xuXHRcdGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcblx0XHRjb250ZXh0MmQuZmlsbFJlY3QoMCwgMCwgY29udGV4dDJkLmNhbnZhcy53aWR0aCwgY29udGV4dDJkLmNhbnZhcy5oZWlnaHQpO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcblx0fVxufVxuIiwiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tUmVzb3VyY2VNYW5hZ2VyIHtcblx0cmVhZG9ubHkgYWxpYXNlcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cdHJlYWRvbmx5IHJlc291cmNlcyA9IG5ldyBNYXA8c3RyaW5nLCBJbWFnZVJlc291cmNlPigpO1xuXG5cdHJlc29sdmUgPSAoYXNzZXQ6IHN0cmluZywgZW5naW5lOiBFbmdpbmUpOiBJbWFnZVJlc291cmNlIHwgbnVsbCA9PiB7XG5cdFx0aWYgKGFzc2V0LmluZGV4T2YoJ2lkOicpID09PSAwKSB7XG5cdFx0XHRjb25zdCBpZCA9IGFzc2V0LnNsaWNlKDMpO1xuXHRcdFx0bGV0IHJlc291cmNlID0gdGhpcy5yZXNvdXJjZXMuZ2V0KGlkKSBhcyBJbWFnZVJlc291cmNlO1xuXHRcdFx0aWYgKCFyZXNvdXJjZSkge1xuXHRcdFx0XHRjb25zdCB1cmwgPSB0aGlzLmFsaWFzZXMuZ2V0KGlkKTtcblx0XHRcdFx0aWYgKHVybCkge1xuXHRcdFx0XHRcdHJlc291cmNlID0gSW1hZ2VSZXNvdXJjZS5yZXNvbHZlKHVybCwgZW5naW5lKSBhcyBJbWFnZVJlc291cmNlO1xuXHRcdFx0XHRcdHRoaXMucmVzb3VyY2VzLnNldChpZCwgcmVzb3VyY2UpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBSZXNvdXJjZSB3aXRoIGlkOiAke2Fzc2V0fSBub3QgZm91bmRgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc291cmNlO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGluaXQoZW5naW5lOiBFbmdpbmUpIHtcblx0XHRlbmdpbmUucmVzb3VyY2VzLnJlc29sdmVycy5hZGQodGhpcy5yZXNvbHZlKTtcblx0fVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBTdGF0aXN0aWNzIHtcblx0Z2V0UmVuZGVyVGltZSgpOiBudW1iZXI7XG5cdGdldFVwZGF0ZVRpbWUoKTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnBzKHN0YXRpc3RpY3M6IFN0YXRpc3RpY3MpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0dGV4dDogJ2ZwcycsXG5cdFx0ZnJhbWVzOiAwLFxuXHRcdGZyYW1lVGltZTogMCxcblx0XHR1cGRhdGVUaW1lOiAwLFxuXHRcdHJlbmRlclRpbWU6IDAsXG5cdFx0dGV4dEZvcm1hdDoge1xuXHRcdFx0c2l6ZTogMjAsXG5cdFx0XHRjb2xvcjogMHhmZmZmZmYsXG5cdFx0fSxcblx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMuZnJhbWVUaW1lICs9IHRpbWU7XG5cdFx0XHR0aGlzLnVwZGF0ZVRpbWUgKz0gc3RhdGlzdGljcy5nZXRVcGRhdGVUaW1lKCk7XG5cdFx0XHR0aGlzLnJlbmRlclRpbWUgKz0gc3RhdGlzdGljcy5nZXRSZW5kZXJUaW1lKCk7XG5cdFx0XHR0aGlzLmZyYW1lcysrO1xuXHRcdFx0aWYgKHRoaXMuZnJhbWVUaW1lID49IDEpIHtcblx0XHRcdFx0Y29uc3QgZnJhbWVUaW1lID0gTWF0aC5jZWlsKDEwMDAgKiB0aGlzLmZyYW1lVGltZSAvIHRoaXMuZnJhbWVzKTtcblx0XHRcdFx0Y29uc3QgdXBkYXRlVGltZSA9ICh0aGlzLnVwZGF0ZVRpbWUgLyB0aGlzLmZyYW1lcykudG9GaXhlZCgyKTtcblx0XHRcdFx0Y29uc3QgcmVuZGVyVGltZSA9ICh0aGlzLnJlbmRlclRpbWUgLyB0aGlzLmZyYW1lcykudG9GaXhlZCgyKTtcblx0XHRcdFx0dGhpcy50ZXh0ID0gYGZwczogJHt0aGlzLmZyYW1lc30sICR7ZnJhbWVUaW1lfSBtc1xcbnVwZGF0ZTogJHt1cGRhdGVUaW1lfSBtc1xcbnJlbmRlcjogJHtyZW5kZXJUaW1lfSBtc2A7XG5cdFx0XHRcdHRoaXMuZnJhbWVUaW1lID0gMDtcblx0XHRcdFx0dGhpcy51cGRhdGVUaW1lID0gMDtcblx0XHRcdFx0dGhpcy5yZW5kZXJUaW1lID0gMDtcblx0XHRcdFx0dGhpcy5mcmFtZXMgPSAwO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7XG5cdEFCSUxJVFlfRk9YLCBBQklMSVRZX1dPTEYsIEFOSU1BTElTVCwgQVJDSEVSLCBCQUNLR1JPVU5ELCBTQ0VORSxcbn0gZnJvbSAnLi9hc3NldHMnO1xuaW1wb3J0IGFydGlmYWN0IGZyb20gJy4vYXJ0aWZhY3QnO1xuaW1wb3J0IHsgZnBzLCBTdGF0aXN0aWNzIH0gZnJvbSAnLi9mcHMnO1xuaW1wb3J0IHsgdW5pdCwgVW5pdFByb3BlcnRpZXMgfSBmcm9tICcuL3VuaXQnO1xuaW1wb3J0IHsgcHJlbG9hZGVyLCBQcmVsb2FkZXJJbmZvIH0gZnJvbSAnLi9wcmVsb2FkZXInO1xuXG5pbnRlcmZhY2UgTWFpbiB7XG5cdHN0YXJ0KCk6IHZvaWQ7XG5cdFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuaW50ZXJmYWNlIE1haW5Qcm9wZXJ0aWVzIGV4dGVuZHMgU3RhdGlzdGljcyB7XG5cdGdldENhbnZhc1dpZHRoKCk6IG51bWJlcjtcblx0Z2V0Q2FudmFzSGVpZ2h0KCk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbihwYXJhbWV0ZXJzOiBNYWluUHJvcGVydGllcyk6IE1haW4ge1xuXHRmdW5jdGlvbiBvblVuaXRDbGljayhkYXRhOiBVbml0UHJvcGVydGllcykge1xuXHRcdGRhdGEuaGVhbHRoID0gTWF0aC5yYW5kb20oKTtcblx0XHRjb25zb2xlLmxvZygnb25Vbml0Q2xpY2snLCBkYXRhLm5hbWUpO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IHtcblx0XHR0eXBlOiAnbG9hZGVyJyxcblx0XHR2aXNpYmxlOiBmYWxzZSxcblx0XHRlbmFibGVkOiBmYWxzZSxcblx0XHRvbkxvYWRlZCgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdiYWNrZ3JvdW5kIGxvYWRlZCcpO1xuXHRcdFx0dGhpcy52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0fSxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0YmFja2dyb3VuZDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEJBQ0tHUk9VTkQsXG5cdFx0XHRcdHNjYWxlWDogMSxcblx0XHRcdFx0c2NhbGVZOiAxLFxuXHRcdFx0fSxcblx0XHRcdGZpZ3VyZToge1xuXHRcdFx0XHR0eXBlOiAnc2hhcGUnLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3JlY3RhbmdsZScsXG5cdFx0XHRcdFx0eDogMjAsXG5cdFx0XHRcdFx0eTogMjAsXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCxcblx0XHRcdFx0XHRoZWlnaHQ6IDUwLFxuXHRcdFx0XHRcdGZpbGw6IDB4ZmYwMGZmLFxuXHRcdFx0XHRcdHN0cm9rZTogMHgwMDAwZmYsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0c2hhcGVzOiB7XG5cdFx0XHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0XHRcdGRhdGE6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAnZWxsaXBzZScsXG5cdFx0XHRcdFx0XHR4OiAxMDAsXG5cdFx0XHRcdFx0XHR5OiAxMDAsXG5cdFx0XHRcdFx0XHRyYWRpdXM6IDUwLFxuXHRcdFx0XHRcdFx0ZmlsbDogeyB0eXBlOiAnc29saWQnLCBjb2xvcjogMHhmZmZmMDAsIGFscGhhOiAxIH0sXG5cdFx0XHRcdFx0XHRzdHJva2U6IHsgZmlsbDogMHgwMDAwZmYsIHRoaWNrbmVzczogMTAgfSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdwYXRoJyxcblx0XHRcdFx0XHRcdGRhdGE6ICdNIDExMCwgMTEwIEggMTkwIFYgMTkwIEggMTEwIFonLFxuXHRcdFx0XHRcdFx0ZmlsbDogMHg5OTAwMDAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAncGF0aCcsXG5cdFx0XHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ21vdmVUbycsIHg6IDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMTAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDEwMCwgeTogMTAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDAsIHk6IDEwMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0ZmlsbDogeyB0eXBlOiAnc29saWQnLCBjb2xvcjogMHg5OTk5OTksIGFscGhhOiAwLjYgfSxcblx0XHRcdFx0XHRcdHN0cm9rZTogMHgwMDAwMDAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHR1bml0czoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHR1bml0KHtcblx0XHRcdFx0XHRcdG5hbWU6ICdBcmNoZXInLCBoZWFsdGg6IDEsIGltYWdlOiBBUkNIRVIsIG9uQ2xpY2s6IG9uVW5pdENsaWNrLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdHVuaXQoe1xuXHRcdFx0XHRcdFx0bmFtZTogJ0FuaW1hbGlzdCcsIGhlYWx0aDogMSwgaW1hZ2U6IEFOSU1BTElTVCwgb25DbGljazogb25Vbml0Q2xpY2ssXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0YXJ0aWZhY3Q6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdHg6IDMwMCxcblx0XHRcdFx0eTogMzUwLFxuXHRcdFx0XHRjaGlsZHJlbjogYXJ0aWZhY3QoKSxcblx0XHRcdH0sXG5cdFx0XHRtYXA6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0eTogNDUwLFxuXHRcdFx0XHRzY2FsZVg6IDAuMixcblx0XHRcdFx0c2NhbGVZOiAwLjIsXG5cdFx0XHRcdGFscGhhOiAwLjUsXG5cdFx0XHRcdHNyYzogJ3Rlc3QuY2FudmFzJyxcblx0XHRcdFx0b25Qb2ludGVyT3ZlcigpIHtcblx0XHRcdFx0XHR0aGlzLmFscGhhID0gMTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b25Qb2ludGVyT3V0KCkge1xuXHRcdFx0XHRcdHRoaXMuYWxwaGEgPSAwLjU7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YWJpbGl0eUZveDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEFCSUxJVFlfRk9YLFxuXHRcdFx0XHR4OiA0NTAsXG5cdFx0XHRcdHk6IDUwMCxcblx0XHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdFx0dGludDoge1xuXHRcdFx0XHRcdGNvbG9yOiAweDAwZmYwMCxcblx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0fSBhcyBhbnksXG5cdFx0XHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0XHRcdGlmICh0aGlzLnRpbnQpIHtcblx0XHRcdFx0XHRcdHRoaXMudGludC52YWx1ZSArPSB0aW1lO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMudGludC52YWx1ZSA+PSAxKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudGludC52YWx1ZSA9IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duKGU6IGFueSkge1xuXHRcdFx0XHRcdGlmICh0aGlzLnRpbnQpIHtcblx0XHRcdFx0XHRcdHRoaXMudGludCA9IG51bGw7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMudGludCA9IHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IDB4MDBmZjAwLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmb3gnLCBlKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRhYmlsaXR5V29sZjoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0eDogMzUwLFxuXHRcdFx0XHR5OiA0MDAsXG5cdFx0XHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0XHRzcmM6IEFCSUxJVFlfV09MRixcblx0XHRcdFx0XHRzY2FsZTogMC41LFxuXHRcdFx0XHRcdGFscGhhOiAxLFxuXHRcdFx0XHRcdHR3ZWVuOiB7XG5cdFx0XHRcdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0XHRcdFx0cGhhc2VzOiBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHg6IDIwMCB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAnY3ViaWNvdXQnLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeTogMjAwLCBhbHBoYTogMC41IH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6ICdxdWFkcmF0aWNJbicsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB4OiAwLCBhbHBoYTogMSB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAncXVhZHJhdGljT3V0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRmcHM6IGZwcyhwYXJhbWV0ZXJzKSxcblx0XHR9LFxuXHR9O1xuXG5cdGNvbnN0IHByZWxvYWRlckluZm86IFByZWxvYWRlckluZm8gPSB7XG5cdFx0Z2V0V2lkdGg6IHBhcmFtZXRlcnMuZ2V0Q2FudmFzV2lkdGgsXG5cdFx0Z2V0SGVpZ2h0OiBwYXJhbWV0ZXJzLmdldENhbnZhc0hlaWdodCxcblx0XHRnZXRQcm9ncmVzcygpIHtcblx0XHRcdHJldHVybiBMb2FkZXIuZ2V0TG9hZGluZ1Byb2dyZXNzKGNvbnRlbnQpO1xuXHRcdH0sXG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0Y29udGVudCxcblx0XHRcdHByZWxvYWRlcjogcHJlbG9hZGVyKHByZWxvYWRlckluZm8pLFxuXHRcdFx0c2NlbmU6IHtcblx0XHRcdFx0dHlwZTogJ3NjZW5lJywgeDogMzAwLCBzcmM6IFNDRU5FLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdG9uVXBkYXRlKCkge1xuXHRcdFx0Y29uc3QgaXNMb2FkZWQgPSAhdGhpcy5jaGlsZHJlbi5jb250ZW50LnZpc2libGU7XG5cdFx0XHR0aGlzLmNoaWxkcmVuLnByZWxvYWRlci52aXNpYmxlID0gaXNMb2FkZWQ7XG5cdFx0XHR0aGlzLmNoaWxkcmVuLnByZWxvYWRlci5lbmFibGVkID0gaXNMb2FkZWQ7XG5cdFx0fSxcblx0XHRzdGFydCgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdzdGFydCcpO1xuXHRcdH0sXG5cdH07XG59XG4iLCJpbXBvcnQgeyBTaGFwZSB9IGZyb20gJ0BqZW5nL3NoYXBlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcmVsb2FkZXJJbmZvIHtcblx0Z2V0UHJvZ3Jlc3MoKTogbnVtYmVyO1xuXHRnZXRXaWR0aCgpOiBudW1iZXI7XG5cdGdldEhlaWdodCgpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkZXIoaW5mbzogUHJlbG9hZGVySW5mbykge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0c2NhbGVYOiAxLFxuXHRcdHk6IGluZm8uZ2V0SGVpZ2h0KCkgLSAyMCxcblx0XHRkYXRhOiB7XG5cdFx0XHR0eXBlOiAncmVjdGFuZ2xlJyxcblx0XHRcdHdpZHRoOiAxLFxuXHRcdFx0aGVpZ2h0OiAyMCxcblx0XHRcdGZpbGw6IDB4ZmYwMDAwLFxuXHRcdH0sXG5cdFx0b25VcGRhdGUoKSB7XG5cdFx0XHR0aGlzLnNjYWxlWCA9IHRoaXMuc2NhbGVYID8/IDA7XG5cdFx0XHR0aGlzLnNjYWxlWCArPSAoaW5mby5nZXRXaWR0aCgpICogaW5mby5nZXRQcm9ncmVzcygpIC0gdGhpcy5zY2FsZVgpIC8gMjtcblx0XHR9LFxuXHR9IGFzIFNoYXBlO1xufVxuIiwiY29uc3QgU1BFRUQgPSAxMDA7XG5cbmludGVyZmFjZSBVbml0IHtcblx0W2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRQcm9wZXJ0aWVzIHtcblx0bmFtZTogc3RyaW5nLFxuXHRoZWFsdGg6IG51bWJlcixcblx0aW1hZ2U6IHN0cmluZyxcblx0b25DbGljazogKGRhdGE6IFVuaXRQcm9wZXJ0aWVzKSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBvblByb3BzVXBkYXRlKHByb3BzOiBhbnksIGNhbGxiYWNrOiAodGltZTogbnVtYmVyKSA9PiB2b2lkKSB7XG5cdGNvbnN0IGNvcHkgPSB7IC4uLnByb3BzIH07XG5cdHJldHVybiAodGltZTogbnVtYmVyKSA9PiB7XG5cdFx0Ly8gY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKTtcblx0XHRsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuXHRcdGZvciAoY29uc3Qga2V5IGluIHByb3BzKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5cdFx0XHRpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRpZiAoY29weVtrZXldICE9PSBwcm9wc1trZXldKSB7XG5cdFx0XHRcdFx0Y29weVtrZXldID0gcHJvcHNba2V5XTtcblx0XHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VkKSB7XG5cdFx0XHRjYWxsYmFjayh0aW1lKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIHJ1bk9uUHJvcHNVcGRhdGUocHJvcHM6IGFueSwgY29tcG9uZW50OiBhbnkpIHtcblx0Y29tcG9uZW50Lm9uVXBkYXRlID0gb25Qcm9wc1VwZGF0ZShwcm9wcywgY29tcG9uZW50Lm9uVXBkYXRlLmJpbmQoY29tcG9uZW50KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bml0KHByb3BzOiBVbml0UHJvcGVydGllcyk6IFVuaXQge1xuXHRmdW5jdGlvbiBnZXRUaXRsZSgpIHtcblx0XHRyZXR1cm4gYCR7cHJvcHMubmFtZX1cXG4ke01hdGgucm91bmQocHJvcHMuaGVhbHRoICogMTAwKX0lYDtcblx0fVxuXG5cdGNvbnN0IHVuaXRWaWV3ID0ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdHg6IDUwICsgTWF0aC5yYW5kb20oKSAqIDQwMCxcblx0XHR5OiAyMDAsXG5cdFx0cm90YXRpb246IDAsXG5cdFx0dXBkYXRlTW92ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMueCArPSB0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCAqIHRpbWUgKiBTUEVFRDtcblx0XHRcdGlmICh0aGlzLnggPCA1MCkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCA9IDE7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMueCA+IDQwMCkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCA9IC0xO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZU1vdmUodGltZSk7XG5cdFx0fSxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0dGV4dDoge1xuXHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHRcdHRleHQ6IGdldFRpdGxlKCksXG5cdFx0XHRcdHRleHRGb3JtYXQ6IHtcblx0XHRcdFx0XHRzaXplOiAxNSxcblx0XHRcdFx0XHRjb2xvcjogMHhmZmRkZGQsXG5cdFx0XHRcdFx0YWxpZ246ICdjZW50ZXInLFxuXHRcdFx0XHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRib3JkZXI6IDB4MDBmZjAwLFxuXHRcdFx0XHR5OiAtMzAsXG5cdFx0XHRcdGhlaWdodDogMzUsXG5cdFx0XHRcdHBpdm90WDogMC41LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duOiAoKSA9PiB7XG5cdFx0XHRcdFx0cHJvcHMub25DbGljayhwcm9wcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uVXBkYXRlKCkge1xuXHRcdFx0XHRcdHRoaXMudGV4dCA9IGdldFRpdGxlKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBwcm9wcy5pbWFnZSxcblx0XHRcdFx0c2NhbGVYOiBNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xLFxuXHRcdFx0XHRwaXZvdFg6IDAuNSxcblx0XHRcdFx0b25Qb2ludGVyRG93bjogKCkgPT4ge1xuXHRcdFx0XHRcdHByb3BzLm9uQ2xpY2socHJvcHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXG5cdHJ1bk9uUHJvcHNVcGRhdGUocHJvcHMsIHVuaXRWaWV3LmNoaWxkcmVuLnRleHQpO1xuXG5cdHJldHVybiB1bml0Vmlldztcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCB7IENvbXBvbmVudCwgTW91c2VFeHRlbnNpb24gfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IFR3ZWVuRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvdHdlZW4nO1xuaW1wb3J0IHsgQ2FudmFzVGV4dEV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3RleHQnO1xuaW1wb3J0IHsgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL2ltYWdlJztcbmltcG9ydCB7IENhbnZhc1NoYXBlRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvc2hhcGUnO1xuaW1wb3J0IHsgQ2FudmFzRW5naW5lIH0gZnJvbSAnQGplbmcvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcbmltcG9ydCB7IFNjZW5lRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvc2NlbmUnO1xuaW1wb3J0IEN1c3RvbVJlc291cmNlTWFuYWdlciBmcm9tICcuL2VuZ2luZS9yZXNvdXJjZXMnO1xuaW1wb3J0IEN1c3RvbUVuZ2luZSBmcm9tICcuL2VuZ2luZS9lbmdpbmUnO1xuaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluJztcbmltcG9ydCB7XG5cdEFOSU1BTElTVCwgQU5JTUFMSVNUX0lNQUdFLCBBUkNIRVIsIEFSQ0hFUl9JTUFHRSwgVEVTVF9DQU5WQVMsXG59IGZyb20gJy4vYXNzZXRzJztcblxuLy8gcGFnZVxuZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAnMCc7XG5kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSAnMCc7XG5cbi8vIGJhc2ljIGVuZ2luZVxuY29uc3QgZW5naW5lID0gbmV3IENhbnZhc0VuZ2luZSgpO1xuQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5DYW52YXNUZXh0RXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbkNhbnZhc1NoYXBlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcblR3ZWVuRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcblNjZW5lRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbk1vdXNlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbmVuZ2luZS5zY3JlZW4uZnVsbHNjcmVlbiA9IHRydWU7XG5lbmdpbmUudGlja2VyLnBsYXkoKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZW5naW5lLnBsYXRmb3JtLnZpZXcpO1xuXG5jb25zdCBwYXJhbWV0ZXJzID0ge1xuXHRnZXRVcGRhdGVUaW1lKCkge1xuXHRcdHJldHVybiBlbmdpbmUudXBkYXRlci5lbGFwc2VkVGltZTtcblx0fSxcblx0Z2V0UmVuZGVyVGltZSgpIHtcblx0XHRyZXR1cm4gZW5naW5lLnJlbmRlcmVyLmVsYXBzZWRUaW1lO1xuXHR9LFxuXHRnZXRDYW52YXNXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiBlbmdpbmUuc2NyZWVuLmdldFdpZHRoKCk7XG5cdH0sXG5cdGdldENhbnZhc0hlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiBlbmdpbmUuc2NyZWVuLmdldEhlaWdodCgpO1xuXHR9LFxufTtcblxuLy8gYXBwbGljYXRpb25cbmNvbnN0IGFwcCA9IG1haW4ocGFyYW1ldGVycyk7XG5hcHAuc3RhcnQoKTtcbmVuZ2luZS5yb290ID0gYXBwIGFzIGFueSBhcyBDb21wb25lbnQ7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuY29uc29sZS5sb2coYXBwKTtcblxuLy8gdGVzdCBwYXVzZVxuc2V0VGltZW91dCgoKSA9PiBlbmdpbmUudGlja2VyLnBhdXNlKCksIDUwMDApO1xuc2V0VGltZW91dCgoKSA9PiBlbmdpbmUudGlja2VyLnBsYXkoKSwgMTAwMDApO1xuXG4vLyBjdXN0b20gZW5naW5lXG5jb25zdCBjdXN0b21FbmdpbmUgPSBuZXcgQ3VzdG9tRW5naW5lKCk7XG5jdXN0b21FbmdpbmUuc2NyZWVuLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbmN1c3RvbUVuZ2luZS5zY3JlZW4uaGVpZ2h0ID0gNjAwO1xuY3VzdG9tRW5naW5lLnVwZGF0ZXIuZW5hYmxlZCA9IGZhbHNlO1xuY3VzdG9tRW5naW5lLnJvb3QgPSBlbmdpbmUucm9vdDtcbmN1c3RvbUVuZ2luZS50aWNrZXIucGxheSgpO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUudG9wID0gJzBweCc7XG5jdXN0b21FbmdpbmUucGxhdGZvcm0udmlldy5zdHlsZS5sZWZ0ID0gJzYwMHB4JztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcpO1xuXG4vLyAvLyBzZXQgY3VzdG9tIHJlc291cmNlXG5lbmdpbmUucmVzb3VyY2VzLnJlc291cmNlcy5zZXQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBjdXN0b21FbmdpbmUucGxhdGZvcm0udmlldyxcblx0XHRsb2FkZWQ6IHRydWUsXG5cdH0gYXMgSW1hZ2VSZXNvdXJjZSxcbik7XG5jdXN0b21FbmdpbmUucmVzb3VyY2VzLnJlc291cmNlcy5zZXQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBlbmdpbmUucGxhdGZvcm0udmlldyxcblx0XHRsb2FkZWQ6IHRydWUsXG5cdH0gYXMgSW1hZ2VSZXNvdXJjZSxcbik7XG5cbi8vIGN1c3RvbSByZXNvdXJjZSByZXNvbHZlclxuY29uc3QgcmVzb3VyY2VNYW5hZ2VyID0gbmV3IEN1c3RvbVJlc291cmNlTWFuYWdlcigpO1xucmVzb3VyY2VNYW5hZ2VyLmFsaWFzZXMuc2V0KEFSQ0hFUi5yZXBsYWNlKCdpZDonLCAnJyksIEFSQ0hFUl9JTUFHRSk7XG5yZXNvdXJjZU1hbmFnZXIuYWxpYXNlcy5zZXQoQU5JTUFMSVNULnJlcGxhY2UoJ2lkOicsICcnKSwgQU5JTUFMSVNUX0lNQUdFKTtcbnJlc291cmNlTWFuYWdlci5pbml0KGVuZ2luZSk7XG5yZXNvdXJjZU1hbmFnZXIuaW5pdChjdXN0b21FbmdpbmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==