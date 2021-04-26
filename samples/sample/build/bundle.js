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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jYW52YXMtZW5naW5lL2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NhbnZhcy1lbmdpbmUvZGlzdC9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvY29tcG9uZW50cy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9jb3JlL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvcmUvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvcGl2b3QuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9leHRlbnNpb25zL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9leHRlbnNpb25zL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvdXBkYXRlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL2RlYnVnLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvcG9pbnRlcnMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3RpY2tlci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3VwZGF0ZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2lucHV0L21vdXNlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvYm91bmRzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvY29sb3ItdHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9wb2ludC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvaW1hZ2UvZGlzdC9jYW52YXMtaW1hZ2UtY29sb3IuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvY2FudmFzLWltYWdlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9pbWFnZS9kaXN0L2ltYWdlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9pbWFnZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9yZXNvdXJjZXMvZGlzdC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvcmVzb3VyY2VzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3Jlc291cmNlcy9kaXN0L3N0cmluZy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2NlbmUvZGlzdC9zY2VuZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvZWxsaXBzZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvcGF0aC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9zaGFwZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvc3RyaW5nLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9zdHlsZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9kYXRhL2RhdGEuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvZGF0YS9wYXRoLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2RhdGEvc3RyaW5nLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2dyYXBoaWNzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L3NoYXBlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvY2FudmFzL3RleHQuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC9kYXRhL2ZvbnQuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC9kYXRhL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2RhdGEvbWV0cmljcy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvdGV4dC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdHdlZW4vZGlzdC9lYXNpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3R3ZWVuL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3R3ZWVuL2Rpc3QvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2FydGlmYWN0LnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9hc3NldHMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2VuZ2luZS9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2VuZ2luZS9pbWFnZS50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvZW5naW5lL3BsYXRmb3JtLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9lbmdpbmUvcmVzb3VyY2VzLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9mcHMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL3ByZWxvYWRlci50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvdW5pdC50cyIsIndlYnBhY2s6Ly9zYW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2FtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zYW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiQ2FudmFzRW5naW5lIiwibW9kdWxlIiwiUGxhdGZvcm0iLCJDYW52YXNQbGF0Zm9ybSIsIkVuZ2luZSIsInBvaW50MSIsIlBvaW50IiwicG9pbnQyIiwiQ2FudmFzUGF0dGVybnMiLCJjb2xvclBhdHRlcm4iLCJjb2xvciIsImFscGhhIiwiY3QiLCJyIiwiZyIsImIiLCJhIiwiQ29sb3JUcmFuc2Zvcm0iLCJyZWRNdWx0aXBsaWVyIiwicmVkT2Zmc2V0IiwiZ3JlZW5NdWx0aXBsaWVyIiwiZ3JlZW5PZmZzZXQiLCJibHVlTXVsdGlwbGllciIsImJsdWVPZmZzZXQiLCJhbHBoYU11bHRpcGxpZXIiLCJhbHBoYU9mZnNldCIsImFkZEdyYWRpZW50Q29sb3JzIiwicGF0dGVybiIsImNvbG9ycyIsImFscGhhcyIsInJhdGlvcyIsImNvbG9yVHJhbnNmb3JtIiwiaSIsImxlbmd0aCIsInJnYiIsInJhdGlvIiwiYWRkQ29sb3JTdG9wIiwicmFkaWFsR3JhZGllbnRQYXR0ZXJuIiwibWF0cml4IiwiY29udGV4dCIsIngiLCJ5IiwiTWF0cml4IiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJ0eCIsInR5IiwiTWF0aCIsImFicyIsImxpbmVhckdyYWRpZW50UGF0dGVybiIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYml0bWFwUGF0dGVybiIsImltYWdlIiwicmVwZWF0IiwiY3JlYXRlUGF0dGVybiIsImFyZ3VtZW50cyIsInZpZXciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0cyIsImdldENvbnRleHQiLCJjdXN0b21Db250ZXh0cyIsInB1c2giLCJwb3AiLCJlbmdpbmUiLCJkZWJ1ZyIsIndhcm5pbmciLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImNsZWFyIiwidXBkYXRlU2l6ZSIsInNldFRyYW5zZm9ybSIsImNsZWFyUmVjdCIsInNjcmVlbiIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwicGl4ZWxSYXRpbyIsImdldFBpeGVsUmF0aW8iLCJ2aWV3V2lkdGgiLCJmbG9vciIsInZpZXdIZWlnaHQiLCJzdHlsZSIsIkNPTlRBSU5FUiIsIkNvbnRhaW5lciIsIm51bUNoaWxkcmVuIiwiY29udGFpbmVyIiwiY2hpbGRyZW4iLCJBcnJheSIsImlzQXJyYXkiLCJ0eXBlIiwia2V5cyIsIk9iamVjdCIsIkNvbnRhaW5lckV4dGVuc2lvbiIsInJlbmRlciIsInJlbmRlcmVyIiwiZGVwdGgiLCJjb21wb25lbnQiLCJyZW5kZXJDb21wb25lbnQiLCJjb21wb25lbnRzTWFwIiwidXBkYXRlIiwidXBkYXRlciIsInVwZGF0ZUNvbXBvbmVudCIsImhpdFRlc3QiLCJwb2ludGVyRXZlbnRzIiwicG9pbnRlcnMiLCJyZXN1bHQiLCJkaXNwYXRjaENvbXBvbmVudCIsImxvYWRlZCIsImxvYWRpbmciLCJwcm9ncmVzcyIsImNvbXBvbmVudENvbnRleHQiLCJpbml0IiwiY29tcG9uZW50cyIsInNldCIsIkxPQURFUiIsIkxvYWRlciIsImdldExvYWRpbmdQcm9ncmVzcyIsImxvYWRlciIsImxvYWRpbmdQcm9ncmVzcyIsImlzTG9hZGVkIiwibmVlZExvYWRpbmdDaGVjayIsImxvYWRpbmdDaGVjayIsIkxvYWRlckV4dGVuc2lvbiIsIm9uTG9hZGVkIiwiQ29tcG9uZW50cyIsIlNjcmVlbiIsIlVwZGF0ZXIiLCJMb2FkaW5nIiwiUmVuZGVyZXIiLCJQb2ludGVycyIsIlRpY2tlciIsIkRlYnVnIiwiUmVzb3VyY2VzIiwicGxhdGZvcm0iLCJ0aWNrZXIiLCJyZXNvdXJjZXMiLCJFbmdpbmVGZWF0dXJlIiwiRGlzcGxheSIsImlzVmlzaWJsZSIsInZpc2libGUiLCJQaXZvdCIsImdldFgiLCJwaXZvdCIsInBpdm90WCIsImdldFkiLCJwaXZvdFkiLCJoYXNWYWx1ZXMiLCJoYW5kbGVyc01hcCIsInBvaW50ZXJEb3duIiwicG9pbnRlclVwIiwicG9pbnRlck1vdmUiLCJwb2ludGVyT3ZlciIsInBvaW50ZXJPdXQiLCJQb2ludGVyIiwiaXNQb2ludGVyT3ZlciIsInBvaW50ZXIiLCJpc1BvaW50ZXJFbmFibGVkIiwicG9pbnRlckVuYWJsZWQiLCJkaXNwYXRjaEV2ZW50IiwiaWQiLCJoYW5kbGVyTmFtZSIsImV2ZW50IiwiVHJhbnNmb3JtIiwiZ2V0TWF0cml4IiwidHJhbnNmb3JtIiwiYyIsImQiLCJyb3RhdGlvbiIsInNjYWxlWCIsInNjYWxlIiwic2NhbGVZIiwiY29zIiwic2luIiwiZ2V0Q29sb3JUcmFuc2Zvcm0iLCJ0aW50IiwidmFsdWUiLCJ2YWx1ZUludmVydGVkIiwiYnJpZ2h0bmVzcyIsInVuZGVmaW5lZCIsInBlcmNlbnQiLCJvZmZzZXQiLCJVcGRhdGUiLCJpc0VuYWJsZWQiLCJlbmFibGVkIiwidGltZSIsIm9uVXBkYXRlIiwicHJvcGVydGllcyIsIk1hcCIsImVycm9ycyIsIndhcm5pbmdzIiwiY29uc29sZSIsImxvZyIsImFyZ3MiLCJTdHJpbmciLCJjb3VudCIsImdldCIsImVycm9yIiwid2FybiIsImVsYXBzZWRUaW1lIiwiaGFuZGxlciIsInJvb3QiLCJzdGFydFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImdsb2JhbCIsImxvY2FsIiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJiYXNlIiwicGFyZW50IiwiYmVnaW4iLCJlbmQiLCJSZXNvdXJjZSIsImdldFByb2dyZXNzIiwicmVzb3VyY2UiLCJieXRlc1RvdGFsIiwiYnl0ZXNMb2FkZWQiLCJyZXNvbHZlcnMiLCJTZXQiLCJhc3NldCIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1bGxzY3JlZW4iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiZnJhbWVSYXRlIiwicGF1c2VkIiwidXBkYXRlRnJhbWUiLCJjdXJyZW50VGltZSIsImRlbHRhVGltZSIsInVwZGF0ZU5leHRGcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZVByb3BlcnRpZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJjbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRMZWZ0IiwiY2xpZW50WSIsInRvcCIsImNsaWVudFRvcCIsImRpc3BhdGNoIiwicHJldmVudERlZmF1bHQiLCJNb3VzZUV4dGVuc2lvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJCb3VuZHMiLCJlbXB0eSIsIm1pblgiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJtaW5ZIiwibWF4WCIsIk1JTl9WQUxVRSIsIm1heFkiLCJzZXRFbXB0eSIsImJvdW5kcyIsImlzRW1wdHkiLCJ0b1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInRlc3RYIiwidGVzdFkiLCJ0ZXN0IiwidGVzdFBvaW50IiwicG9pbnQiLCJpc0VtcHR5V2l0aEFscGhhIiwiY29weSIsImZyb20iLCJ0byIsImNvbmNhdCIsImN0MSIsImN0MCIsIm1hdHJpeDAiLCJtYXRyaXgxIiwiZ2V0RGV0ZXJtaW5hbnQiLCJpbnZlcnQiLCJkZXRlcm1pbmFudCIsInRyYW5zZm9ybVBvaW50IiwidHJhbnNmb3JtUG9pbnRMb2NhbCIsInRyYW5zZm9ybUludmVyc2VQb2ludCIsInRyYW5zZm9ybUJvdW5kcyIsInJ4IiwicnkiLCJyciIsInJiIiwibngxIiwibnkxIiwibngyIiwibnkyIiwibngzIiwibnkzIiwibng0Iiwibnk0IiwicmlnaHQiLCJib3R0b20iLCJzcXJ0IiwiYW5nbGUiLCJhdGFuMiIsImVxdWFscyIsInBvaW50MCIsInNvdXJjZSIsInRhcmdldCIsIm5vcm1hbGl6ZSIsInRoaWNrbmVzcyIsImRpc3RhbmNlIiwiZHgiLCJkeSIsImludGVycG9sYXRlIiwicG9sYXIiLCJSZWN0YW5nbGUiLCJpbnRlcnNlY3Rpb24iLCJjb250YWlucyIsInJvdW5kIiwic2NyZWVuQm91bmRzIiwiQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiIsInNyYyIsImNvbnRleHQyZCIsImdsb2JhbEFscGhhIiwiZHJhd0ltYWdlIiwiY3VzdG9tQ29udGV4dCIsImNyZWF0ZUN1c3RvbUNvbnRleHQiLCJpbWFnZURhdGEiLCJnZXRJbWFnZURhdGEiLCJybSIsImdtIiwiYm0iLCJhbSIsInJvIiwiZ28iLCJibyIsImFvIiwiZGF0YSIsInB1dEltYWdlRGF0YSIsImRlc3Ryb3lDdXN0b21Db250ZXh0IiwiSW1hZ2VFeHRlbnNpb24iLCJJTUFHRSIsIkNhbnZhc0ltYWdlRXh0ZW5zaW9uIiwiSW1hZ2UiLCJjYWxjdWxhdGVCb3VuZHMiLCJJbWFnZVJlc291cmNlIiwiZXh0ZW5zaW9uIiwic3BsaXQiLCJvbmxvYWQiLCJvbmVycm9yIiwiZSIsImFkZCIsIlN0cmluZ1Jlc291cmNlIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwib25wcm9ncmVzcyIsInRvdGFsIiwicmVzcG9uc2VUZXh0Iiwic2VuZCIsIlNDRU5FIiwiU2NlbmVFeHRlbnNpb24iLCJzY2VuZSIsIkpTT04iLCJwYXJzZSIsIm1lc3NhZ2UiLCJQSV8yIiwiUEkiLCJhcHBseUVsbGlwc2UiLCJoYXNGaWxsIiwicmFkaXVzIiwicmFkaXVzWCIsInJhZGl1c1kiLCJiZWdpblBhdGgiLCJlbGxpcHNlIiwiY2xvc2VQYXRoIiwiYXBwbHlDb21tYW5kIiwiY29tbWFuZCIsIm1vdmVUbyIsImxpbmVUbyIsImN1cnZlVG8iLCJxdWFkcmF0aWNDdXJ2ZVRvIiwiY3giLCJjeSIsImN1YmljQ3VydmVUbyIsImJlemllckN1cnZlVG8iLCJzeCIsInN5IiwiYXBwbHlQYXRoIiwiYXBwbHlSZWN0YW5nbGUiLCJyZWN0IiwicmVuZGVyR3JhcGhpY3MiLCJmaWxsIiwic3Ryb2tlIiwiaGFzU3Ryb2tlIiwiZXhpc3QiLCJwYXRoIiwiYXBwbHlTdHJpbmciLCJzZXRGaWxsU3R5bGUiLCJzZXRTdHJva2VTdHlsZSIsIkNhbnZhc1NoYXBlRXh0ZW5zaW9uIiwic2hhcGUiLCJTaGFwZSIsIlNoYXBlRXh0ZW5zaW9uIiwiU0hBUEUiLCJyZWFkZXIiLCJHcmFwaGljc1N0cmluZ1JlYWRlciIsInNldFBhdGgiLCJyZWFkTmV4dCIsImdldENvbW1hbmQiLCJlbXB0eU1hdHJpeCIsImVtcHR5QXJyYXkiLCJnZXRDYW52YXNQYXR0ZXJuIiwic29saWQiLCJtbCIsImNsIiwiYWwiLCJybCIsIm1yIiwiY3IiLCJhciIsImJpdG1hcEZpbGwiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsImxpbmVDYXAiLCJsaW5lSm9pbiIsIm1pdGVyTGltaXQiLCJjYXBzIiwiam9pbnRzIiwiUmVjdGFuZ2xlRGF0YSIsIkVsbGlwc2VEYXRhIiwiUGF0aERhdGEiLCJwYXRoRGF0YSIsIkdyYXBoaWNzU3RyaW5nIiwiUGF0aENvbW1hbmQiLCJHcmFwaGljc0RhdGEiLCJOVU1CRVJTX0NPVU5UIiwiTSIsIm0iLCJMIiwibCIsIkgiLCJoIiwiViIsInYiLCJDIiwiUyIsInMiLCJRIiwicSIsIlQiLCJ0IiwiQ09NTUFORF9SRUdFWCIsIk5VTUJFUl9SRUdFWCIsIkdyYXBoaWNzU3RyaW5nU3RyZWFtIiwiYnVmZmVyIiwic3ltYm9sUmVnZXgiLCJsYXN0SW5kZXgiLCJzeW1ib2xNYXRjaCIsImV4ZWMiLCJzeW1ib2wiLCJudW1iZXJNYXRjaCIsInBhcnNlRmxvYXQiLCJzdHJlYW0iLCJjb21tYW5kRXhpc3RzIiwibGFzdFgiLCJsYXN0WSIsImxhc3RDWCIsImxhc3RDWSIsImdldEJ1ZmZlciIsImUwIiwiZTEiLCJlMiIsImUzIiwiZTQiLCJlNSIsIkdyYXBoaWNzIiwic21vb3RoIiwic3ByZWFkIiwiaW50ZXJwb2xhdGlvbiIsImZvY2FsUG9pbnRSYXRpbyIsInBpeGVsSGludGluZyIsInNjYWxlTW9kZSIsImdldFBhdGgiLCJlbGxpcHNlV2lkdGgiLCJlbGxpcHNlSGVpZ2h0IiwidyIsImsiLCJveCIsIm95IiwieGUiLCJ5ZSIsInhtIiwieW0iLCJjcmVhdGVEYXRhIiwiZ3JhcGhpY3NEYXRhIiwiZ2V0R3JhcGhpY3MiLCJkZWZhdWx0VGV4dEZvcm1hdCIsIkNPUlJFQ1RJT04iLCJDYW52YXNUZXh0RXh0ZW5zaW9uIiwiVGV4dCIsIm1ldHJpY3MiLCJmb3JtYXQiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiVGV4dEZvcm1hdCIsInJlYWxXaWR0aCIsInJlYWxIZWlnaHQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInRleHRCYXNlbGluZSIsInNpbXBsZSIsInRleHQiLCJzaXplIiwibGVhZGluZyIsImxldHRlclNwYWNpbmciLCJkZWZhdWx0Rm9udCIsIkZvbnQiLCJzeW1ib2xTaXplIiwiYWxpZ25WYWx1ZSIsImZvbnQiLCJUZXh0TWV0cmljcyIsInN5bWJvbE5leHQiLCJhZHZhbmNlIiwiZmlsbFRleHQiLCJhbGlnblZlcnRpY2FsVmFsdWUiLCJsaW5lcyIsImxpbmUiLCJzeW1ib2xzIiwiZmlyc3QiLCJsaW5lSGVpZ2h0IiwiaiIsImFsaWduU3ltYm9sVmFsdWUiLCJzeW1ib2xGb250IiwiVGV4dEV4dGVuc2lvbiIsIlRFWFQiLCJFTSIsImZvbnRzIiwiZ2V0U3R5bGUiLCJuYW1lIiwicmVwbGFjZSIsInRvU3RyaW5nIiwibWVhc3VyZVRleHQiLCJnZXRDaGFyV2lkdGgiLCJjaGFyIiwid2lkdGhzIiwiZ2V0S2VybmluZyIsInNlY29uZCIsInBhaXIiLCJrZXJuaW5nIiwia2VybmluZ3MiLCJ3aWR0aFNlY29uZCIsIndpZHRoVG90YWwiLCJnZXRBZHZhbmNlIiwiZ2V0Rm9udCIsImJvbGQiLCJpdGFsaWMiLCJ1bmRlcmxpbmUiLCJhbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJjb21iaW5lIiwiZGVmYXVsdEZvcm1hdCIsImdldEFsaWduVmFsdWUiLCJnZXRWZXJ0aWNhbEFsaWduVmFsdWUiLCJUZXh0TGluZSIsImNyZWF0ZSIsIm1heCIsImNvcnJlY3RXaWR0aCIsImxhc3QiLCJjb3JyZWN0SGVpZ2h0IiwiZ2V0U3ltYm9scyIsInN5bWJvbEZvcm1hdCIsImJsb2NrIiwiZ2V0TGluZXMiLCJ3b3JkV3JhcCIsIm11bHRpbGluZSIsIndvcmQiLCJnZXRNZXRyaWNzIiwiZ2V0U2ltcGxlTWV0cmljcyIsImdldFNpbXBsZVdpZHRoIiwiaW5kZXgiLCJnZXRUZXh0IiwiaXNVcGRhdGVNZXRyaWNzIiwidXBkYXRlTWV0cmljcyIsImlzQXV0b1NpemUiLCJpc1NpbXBsZSIsImlzTXVsdGlsaW5lIiwiTElORUFSIiwiUVVBRFJBVElDIiwiUVVBRFJBVElDX0lOIiwiUVVBRFJBVElDX09VVCIsIkNVQklDIiwiQ1VCSUNfSU4iLCJDVUJJQ19PVVQiLCJRVUFSVElDIiwiUVVBUlRJQ19JTiIsIlFVQVJUSUNfT1VUIiwiUVVJTlRJQyIsIlFVSU5USUNfSU4iLCJRVUlOVElDX09VVCIsIlNJTlVTT0lEQUwiLCJTSU5VU09JREFMX0lOIiwiU0lOVVNPSURBTF9PVVQiLCJFWFBPTkVOVElBTCIsIkVYUE9ORU5USUFMX0lOIiwiRVhQT05FTlRJQUxfT1VUIiwiQ0lSQ1VMQVIiLCJDSVJDVUxBUl9JTiIsIkNJUkNVTEFSX09VVCIsIkVMQVNUSUMiLCJFTEFTVElDX0lOIiwiRUxBU1RJQ19PVVQiLCJCQUNLIiwiQkFDS19JTiIsIkJBQ0tfT1VUIiwiQk9VTkNFIiwiQk9VTkNFX0lOIiwiQk9VTkNFX09VVCIsImVhc2luZyIsInBvdyIsIlRXRUVOIiwiVHdlZW5FeHRlbnNpb24iLCJ0d2VlbiIsInBoYXNlcyIsInBoYXNlIiwiZWFzaW5nTmFtZSIsInRvTG93ZXJDYXNlIiwiZWFzaW5nTWV0aG9kIiwiZWFzaW5nVmFsdWUiLCJzdGF0ZSIsImtleSIsImZyb21WYWx1ZSIsInRvVmFsdWUiLCJzdGF0ZVZhbHVlIiwibG9vcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNPLElBQU1BLFlBQWI7QUFBQTs7QUFBQTs7QUFDSSwwQkFBeUI7QUFBQTs7QUFBQSxRQUFiQyxNQUFhLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3JCQSxVQUFNLENBQUNDLFFBQVAsdUJBQWtCRCxNQUFNLENBQUNDLFFBQXpCLCtEQUFxQ0MscURBQXJDO0FBRHFCLDZCQUVmRixNQUZlO0FBR3hCOztBQUpMO0FBQUEsRUFBa0NHLDhDQUFsQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBLElBQU1DLE1BQU0sR0FBR0MsbURBQUEsRUFBZjtBQUNBLElBQU1DLE1BQU0sR0FBR0QsbURBQUEsRUFBZjtBQUNPLElBQUlFLGNBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxjQUFWLEVBQTBCO0FBQ3ZCLFdBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCQyxLQUE3QixFQUFvQ0MsRUFBcEMsRUFBd0M7QUFDcEMsUUFBSUMsQ0FBQyxHQUFHSCxLQUFLLElBQUksRUFBVCxHQUFjLElBQXRCO0FBQ0EsUUFBSUksQ0FBQyxHQUFHSixLQUFLLElBQUksQ0FBVCxHQUFhLElBQXJCO0FBQ0EsUUFBSUssQ0FBQyxHQUFHTCxLQUFLLEdBQUcsSUFBaEI7QUFDQSxRQUFJTSxDQUFDLEdBQUdMLEtBQUssR0FBRyxJQUFoQjs7QUFDQSxRQUFJLENBQUNNLDhEQUFBLENBQXVCTCxFQUF2QixDQUFMLEVBQWlDO0FBQzdCQyxPQUFDLEdBQUlBLENBQUMsR0FBR0QsRUFBRSxDQUFDTSxhQUFQLEdBQXVCTixFQUFFLENBQUNPLFNBQTNCLEdBQXdDLElB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QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5leHBvcnQgY2xhc3MgQ2FudmFzRW5naW5lIGV4dGVuZHMgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGUgPSB7fSkge1xuICAgICAgICBtb2R1bGUuUGxhdGZvcm0gPSBtb2R1bGUuUGxhdGZvcm0gPz8gQ2FudmFzUGxhdGZvcm07XG4gICAgICAgIHN1cGVyKG1vZHVsZSk7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9wYXR0ZXJucyc7XG5leHBvcnQgKiBmcm9tICcuL3BsYXRmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZW5naW5lJztcbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXgsIFBvaW50IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5jb25zdCBwb2ludDEgPSBQb2ludC5lbXB0eSgpO1xuY29uc3QgcG9pbnQyID0gUG9pbnQuZW1wdHkoKTtcbmV4cG9ydCB2YXIgQ2FudmFzUGF0dGVybnM7XG4oZnVuY3Rpb24gKENhbnZhc1BhdHRlcm5zKSB7XG4gICAgZnVuY3Rpb24gY29sb3JQYXR0ZXJuKGNvbG9yLCBhbHBoYSwgY3QpIHtcbiAgICAgICAgbGV0IHIgPSBjb2xvciA+PiAxNiAmIDB4ZmY7XG4gICAgICAgIGxldCBnID0gY29sb3IgPj4gOCAmIDB4ZmY7XG4gICAgICAgIGxldCBiID0gY29sb3IgJiAweGZmO1xuICAgICAgICBsZXQgYSA9IGFscGhhICogMHhmZjtcbiAgICAgICAgaWYgKCFDb2xvclRyYW5zZm9ybS5pc0VtcHR5KGN0KSkge1xuICAgICAgICAgICAgciA9IChyICogY3QucmVkTXVsdGlwbGllciArIGN0LnJlZE9mZnNldCkgJiAweGZmO1xuICAgICAgICAgICAgZyA9IChnICogY3QuZ3JlZW5NdWx0aXBsaWVyICsgY3QuZ3JlZW5PZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIGIgPSAoYiAqIGN0LmJsdWVNdWx0aXBsaWVyICsgY3QuYmx1ZU9mZnNldCkgJiAweGZmO1xuICAgICAgICAgICAgYSA9IChhICogY3QuYWxwaGFNdWx0aXBsaWVyICsgY3QuYWxwaGFPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYSA8IDB4ZmYpIHtcbiAgICAgICAgICAgIHJldHVybiBgcmdiYSgke3J9LCAke2d9LCAke2J9LCAke2EgLyAweGZmfSlgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYDtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuID0gY29sb3JQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGFkZEdyYWRpZW50Q29sb3JzKHBhdHRlcm4sIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByZ2IgPSBjb2xvcnNbaV07XG4gICAgICAgICAgICBjb25zdCBhbHBoYSA9IGFscGhhc1tpXTtcbiAgICAgICAgICAgIGxldCByYXRpbyA9IHJhdGlvc1tpXSAvIDB4RkY7XG4gICAgICAgICAgICBpZiAocmF0aW8gPCAwKVxuICAgICAgICAgICAgICAgIHJhdGlvID0gMDtcbiAgICAgICAgICAgIGlmIChyYXRpbyA+IDEpXG4gICAgICAgICAgICAgICAgcmF0aW8gPSAxO1xuICAgICAgICAgICAgcGF0dGVybi5hZGRDb2xvclN0b3AocmF0aW8sIGNvbG9yUGF0dGVybihyZ2IsIGFscGhhLCBjb2xvclRyYW5zZm9ybSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmFkZEdyYWRpZW50Q29sb3JzID0gYWRkR3JhZGllbnRDb2xvcnM7XG4gICAgZnVuY3Rpb24gcmFkaWFsR3JhZGllbnRQYXR0ZXJuKG1hdHJpeCwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgICAgICAgcG9pbnQxLnggPSAxNjM4LjQ7XG4gICAgICAgIHBvaW50MS55ID0gMDtcbiAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgcG9pbnQxLCBwb2ludDEpO1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudChtYXRyaXgudHgsIG1hdHJpeC50eSwgMCwgbWF0cml4LnR4LCBtYXRyaXgudHksIE1hdGguYWJzKChwb2ludDEueCAtIG1hdHJpeC50eCkgLyAyKSk7XG4gICAgICAgIGFkZEdyYWRpZW50Q29sb3JzKHBhdHRlcm4sIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLnJhZGlhbEdyYWRpZW50UGF0dGVybiA9IHJhZGlhbEdyYWRpZW50UGF0dGVybjtcbiAgICBmdW5jdGlvbiBsaW5lYXJHcmFkaWVudFBhdHRlcm4obWF0cml4LCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCkge1xuICAgICAgICBwb2ludDEueCA9IC04MTkuMjtcbiAgICAgICAgcG9pbnQxLnkgPSAwO1xuICAgICAgICBwb2ludDIueCA9IDgxOS4yO1xuICAgICAgICBwb2ludDIueSA9IDA7XG4gICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHBvaW50MSwgcG9pbnQxKTtcbiAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgcG9pbnQyLCBwb2ludDIpO1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVMaW5lYXJHcmFkaWVudChwb2ludDEueCwgcG9pbnQxLnksIHBvaW50Mi54LCBwb2ludDIueSk7XG4gICAgICAgIGFkZEdyYWRpZW50Q29sb3JzKHBhdHRlcm4sIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmxpbmVhckdyYWRpZW50UGF0dGVybiA9IGxpbmVhckdyYWRpZW50UGF0dGVybjtcbiAgICBmdW5jdGlvbiBiaXRtYXBQYXR0ZXJuKGltYWdlLCByZXBlYXQsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IGNvbnRleHQuY3JlYXRlUGF0dGVybihpbWFnZSwgcmVwZWF0ID8gJ3JlcGVhdCcgOiAnbm9uZScpO1xuICAgICAgICBpZiAocGF0dGVybikge1xuICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5iaXRtYXBQYXR0ZXJuID0gYml0bWFwUGF0dGVybjtcbn0pKENhbnZhc1BhdHRlcm5zIHx8IChDYW52YXNQYXR0ZXJucyA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuZXhwb3J0IGNsYXNzIENhbnZhc1BsYXRmb3JtIGV4dGVuZHMgUGxhdGZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFt0aGlzLnZpZXcuZ2V0Q29udGV4dCgnMmQnKV07XG4gICAgICAgIHRoaXMuY3VzdG9tQ29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dHNbdGhpcy5jb250ZXh0cy5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgc2F2ZUNvbnRleHQoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHRzLnB1c2goY29udGV4dCk7XG4gICAgfVxuICAgIHJlc3RvcmVDb250ZXh0KCkge1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZGVidWcud2FybmluZygnVHJ5aW5nIHRvIHJlc3RvcmUgbWFpbiBjb250ZXh0Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlQ3VzdG9tQ29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQ7XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbUNvbnRleHRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHRoaXMuY3VzdG9tQ29udGV4dHMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMudmlldztcbiAgICAgICAgaWYgKGNvbnRleHQuY2FudmFzLndpZHRoICE9PSB3aWR0aCkge1xuICAgICAgICAgICAgY29udGV4dC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGV4dC5jYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgZGVzdHJveUN1c3RvbUNvbnRleHQoY29udGV4dCkge1xuICAgICAgICB0aGlzLmN1c3RvbUNvbnRleHRzLnB1c2goY29udGV4dCk7XG4gICAgfVxuICAgIGJlZ2luKCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgY29uc3QgeyB2aWV3IH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHZpZXcud2lkdGgsIHZpZXcuaGVpZ2h0KTtcbiAgICB9XG4gICAgdXBkYXRlU2l6ZSgpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0V2lkdGgoKTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5lbmdpbmUuc2NyZWVuLmdldEhlaWdodCgpO1xuICAgICAgICBjb25zdCBwaXhlbFJhdGlvID0gdGhpcy5lbmdpbmUuc2NyZWVuLmdldFBpeGVsUmF0aW8oKTtcbiAgICAgICAgY29uc3Qgdmlld1dpZHRoID0gTWF0aC5mbG9vcih3aWR0aCAqIHBpeGVsUmF0aW8pO1xuICAgICAgICBjb25zdCB2aWV3SGVpZ2h0ID0gTWF0aC5mbG9vcihoZWlnaHQgKiBwaXhlbFJhdGlvKTtcbiAgICAgICAgY29uc3QgeyB2aWV3IH0gPSB0aGlzO1xuICAgICAgICBpZiAodmlldy53aWR0aCAhPT0gdmlld1dpZHRoIHx8IHZpZXcuaGVpZ2h0ICE9PSB2aWV3SGVpZ2h0KSB7XG4gICAgICAgICAgICB2aWV3LndpZHRoID0gdmlld1dpZHRoO1xuICAgICAgICAgICAgdmlldy5oZWlnaHQgPSB2aWV3SGVpZ2h0O1xuICAgICAgICAgICAgdmlldy5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDT05UQUlORVIgPSAnY29udGFpbmVyJztcbmV4cG9ydCB2YXIgQ29udGFpbmVyO1xuKGZ1bmN0aW9uIChDb250YWluZXIpIHtcbiAgICBmdW5jdGlvbiBudW1DaGlsZHJlbihjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIHJldHVybiBrZXlzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgQ29udGFpbmVyLm51bUNoaWxkcmVuID0gbnVtQ2hpbGRyZW47XG59KShDb250YWluZXIgfHwgKENvbnRhaW5lciA9IHt9KSk7XG5leHBvcnQgdmFyIENvbnRhaW5lckV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ29udGFpbmVyRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyByZW5kZXJlciB9ID0gZW5naW5lO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICByZW5kZXJlci5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyZXIuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZShjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgdXBkYXRlciB9ID0gZW5naW5lO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHVwZGF0ZXIuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIHVwZGF0ZXIudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZXIuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24udXBkYXRlID0gdXBkYXRlO1xuICAgIGZ1bmN0aW9uIGhpdFRlc3QoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHBvaW50ZXJzOiBwb2ludGVyRXZlbnRzIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHBvaW50ZXJFdmVudHMuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgcG9pbnRlckV2ZW50cy5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwb2ludGVyRXZlbnRzLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50ZXJFdmVudHMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGtleXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcG9pbnRlckV2ZW50cy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHMuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBsb2FkZWQoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IGxvYWRpbmcgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gbG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICBsb2FkaW5nLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgKz0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50Q29udGV4dC5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgLz0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGxvYWRpbmcudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSBjb21wb25lbnRDb250ZXh0LnByb2dyZXNzO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gY29tcG9uZW50Q29udGV4dC5sb2FkZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyArPSBjb21wb25lbnRDb250ZXh0LnByb2dyZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnRDb250ZXh0LmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyAvPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9hZGluZy5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLnNldChDT05UQUlORVIsIHVwZGF0ZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoQ09OVEFJTkVSLCByZW5kZXIpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChDT05UQUlORVIsIGhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KENPTlRBSU5FUiwgbG9hZGVkKTtcbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ29udGFpbmVyRXh0ZW5zaW9uIHx8IChDb250YWluZXJFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgQ29udGFpbmVyRXh0ZW5zaW9uIH0gZnJvbSAnLi9jb250YWluZXInO1xuZXhwb3J0IGNvbnN0IExPQURFUiA9ICdsb2FkZXInO1xuZXhwb3J0IHZhciBMb2FkZXI7XG4oZnVuY3Rpb24gKExvYWRlcikge1xuICAgIGZ1bmN0aW9uIGdldExvYWRpbmdQcm9ncmVzcyhsb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRlci5sb2FkaW5nUHJvZ3Jlc3MgPz8gMDtcbiAgICB9XG4gICAgTG9hZGVyLmdldExvYWRpbmdQcm9ncmVzcyA9IGdldExvYWRpbmdQcm9ncmVzcztcbiAgICBmdW5jdGlvbiBpc0xvYWRlZChsb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRlci5sb2FkZWQgPz8gZmFsc2U7XG4gICAgfVxuICAgIExvYWRlci5pc0xvYWRlZCA9IGlzTG9hZGVkO1xuICAgIGZ1bmN0aW9uIG5lZWRMb2FkaW5nQ2hlY2sobG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZGluZ0NoZWNrID8/IHRydWU7XG4gICAgfVxuICAgIExvYWRlci5uZWVkTG9hZGluZ0NoZWNrID0gbmVlZExvYWRpbmdDaGVjaztcbn0pKExvYWRlciB8fCAoTG9hZGVyID0ge30pKTtcbmV4cG9ydCB2YXIgTG9hZGVyRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChMb2FkZXJFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBsb2FkZWQobG9hZGVyLCBlbmdpbmUpIHtcbiAgICAgICAgaWYgKCFMb2FkZXIubmVlZExvYWRpbmdDaGVjayhsb2FkZXIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQ29udGFpbmVyRXh0ZW5zaW9uLmxvYWRlZChsb2FkZXIsIGVuZ2luZSk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUubG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGxvYWRlci5sb2FkaW5nUHJvZ3Jlc3MgPSBjb250ZXh0LnByb2dyZXNzO1xuICAgICAgICBpZiAoY29udGV4dC5sb2FkZWQgJiYgIWxvYWRlci5sb2FkZWQpIHtcbiAgICAgICAgICAgIGxvYWRlci5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGxvYWRlci5vbkxvYWRlZCkge1xuICAgICAgICAgICAgICAgIGxvYWRlci5vbkxvYWRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIExvYWRlckV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLnNldChMT0FERVIsIENvbnRhaW5lckV4dGVuc2lvbi51cGRhdGUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KExPQURFUiwgQ29udGFpbmVyRXh0ZW5zaW9uLnJlbmRlcik7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KExPQURFUiwgQ29udGFpbmVyRXh0ZW5zaW9uLmhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KExPQURFUiwgbG9hZGVkKTtcbiAgICB9XG4gICAgTG9hZGVyRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoTG9hZGVyRXh0ZW5zaW9uIHx8IChMb2FkZXJFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuLi9mZWF0dXJlcy9yZW5kZXJlcic7XG5pbXBvcnQgeyBVcGRhdGVyIH0gZnJvbSAnLi4vZmVhdHVyZXMvdXBkYXRlcic7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi4vZmVhdHVyZXMvbG9hZGluZyc7XG5pbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuLi9mZWF0dXJlcy9zY3JlZW4nO1xuaW1wb3J0IHsgUG9pbnRlcnMgfSBmcm9tICcuLi9mZWF0dXJlcy9wb2ludGVycyc7XG5pbXBvcnQgeyBUaWNrZXIgfSBmcm9tICcuLi9mZWF0dXJlcy90aWNrZXInO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9mZWF0dXJlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDb250YWluZXJFeHRlbnNpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4uL2ZlYXR1cmVzL2RlYnVnJztcbmltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gJy4uL2ZlYXR1cmVzL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi4vZmVhdHVyZXMvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMb2FkZXJFeHRlbnNpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRlcic7XG5leHBvcnQgY2xhc3MgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGUgPSB7fSkge1xuICAgICAgICB0aGlzLmRlcHRoID0gMzI7XG4gICAgICAgIG1vZHVsZS5Db21wb25lbnRzID0gbW9kdWxlLkNvbXBvbmVudHMgPz8gQ29tcG9uZW50cztcbiAgICAgICAgbW9kdWxlLlNjcmVlbiA9IG1vZHVsZS5TY3JlZW4gPz8gU2NyZWVuO1xuICAgICAgICBtb2R1bGUuUGxhdGZvcm0gPSBtb2R1bGUuUGxhdGZvcm0gPz8gUGxhdGZvcm07XG4gICAgICAgIG1vZHVsZS5VcGRhdGVyID0gbW9kdWxlLlVwZGF0ZXIgPz8gVXBkYXRlcjtcbiAgICAgICAgbW9kdWxlLkxvYWRpbmcgPSBtb2R1bGUuTG9hZGluZyA/PyBMb2FkaW5nO1xuICAgICAgICBtb2R1bGUuUmVuZGVyZXIgPSBtb2R1bGUuUmVuZGVyZXIgPz8gUmVuZGVyZXI7XG4gICAgICAgIG1vZHVsZS5Qb2ludGVycyA9IG1vZHVsZS5Qb2ludGVycyA/PyBQb2ludGVycztcbiAgICAgICAgbW9kdWxlLlRpY2tlciA9IG1vZHVsZS5UaWNrZXIgPz8gVGlja2VyO1xuICAgICAgICBtb2R1bGUuRGVidWcgPSBtb2R1bGUuRGVidWcgPz8gRGVidWc7XG4gICAgICAgIG1vZHVsZS5SZXNvdXJjZXMgPSBtb2R1bGUuUmVzb3VyY2VzID8/IFJlc291cmNlcztcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gbmV3IG1vZHVsZS5Db21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IG1vZHVsZS5TY3JlZW4oKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybSA9IG5ldyBtb2R1bGUuUGxhdGZvcm0odGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlciA9IG5ldyBtb2R1bGUuVXBkYXRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gbmV3IG1vZHVsZS5Mb2FkaW5nKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IG1vZHVsZS5SZW5kZXJlcih0aGlzKTtcbiAgICAgICAgdGhpcy5wb2ludGVycyA9IG5ldyBtb2R1bGUuUG9pbnRlcnModGhpcyk7XG4gICAgICAgIHRoaXMudGlja2VyID0gbmV3IG1vZHVsZS5UaWNrZXIodGhpcyk7XG4gICAgICAgIHRoaXMuZGVidWcgPSBuZXcgbW9kdWxlLkRlYnVnKCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IG1vZHVsZS5SZXNvdXJjZXModGhpcyk7XG4gICAgICAgIENvbnRhaW5lckV4dGVuc2lvbi5pbml0KHRoaXMpO1xuICAgICAgICBMb2FkZXJFeHRlbnNpb24uaW5pdCh0aGlzKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoZW5naW5lKSB7XG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgIH1cbn1cbiIsImV4cG9ydCB2YXIgRGlzcGxheTtcbihmdW5jdGlvbiAoRGlzcGxheSkge1xuICAgIGZ1bmN0aW9uIGlzVmlzaWJsZShjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC52aXNpYmxlID8/IHRydWU7XG4gICAgfVxuICAgIERpc3BsYXkuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xufSkoRGlzcGxheSB8fCAoRGlzcGxheSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFBpdm90O1xuKGZ1bmN0aW9uIChQaXZvdCkge1xuICAgIGZ1bmN0aW9uIGdldFgocGl2b3QsIHdpZHRoKSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RYIH0gPSBwaXZvdDtcbiAgICAgICAgaWYgKHBpdm90WCkge1xuICAgICAgICAgICAgcmV0dXJuIC1waXZvdFggKiB3aWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgUGl2b3QuZ2V0WCA9IGdldFg7XG4gICAgZnVuY3Rpb24gZ2V0WShwaXZvdCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RZIH0gPSBwaXZvdDtcbiAgICAgICAgaWYgKHBpdm90WSkge1xuICAgICAgICAgICAgcmV0dXJuIC1waXZvdFkgKiBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFkgPSBnZXRZO1xuICAgIGZ1bmN0aW9uIGhhc1ZhbHVlcyhwaXZvdCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WCwgcGl2b3RZIH0gPSBwaXZvdDtcbiAgICAgICAgcmV0dXJuICEhcGl2b3RYIHx8ICEhcGl2b3RZO1xuICAgIH1cbiAgICBQaXZvdC5oYXNWYWx1ZXMgPSBoYXNWYWx1ZXM7XG59KShQaXZvdCB8fCAoUGl2b3QgPSB7fSkpO1xuIiwiY29uc3QgaGFuZGxlcnNNYXAgPSB7XG4gICAgcG9pbnRlckRvd246ICdvblBvaW50ZXJEb3duJyxcbiAgICBwb2ludGVyVXA6ICdvblBvaW50ZXJVcCcsXG4gICAgcG9pbnRlck1vdmU6ICdvblBvaW50ZXJNb3ZlJyxcbiAgICBwb2ludGVyT3ZlcjogJ29uUG9pbnRlck92ZXInLFxuICAgIHBvaW50ZXJPdXQ6ICdvblBvaW50ZXJPdXQnLFxufTtcbmV4cG9ydCB2YXIgUG9pbnRlcjtcbihmdW5jdGlvbiAoUG9pbnRlcikge1xuICAgIGZ1bmN0aW9uIGlzUG9pbnRlck92ZXIocG9pbnRlcikge1xuICAgICAgICByZXR1cm4gISFwb2ludGVyLnBvaW50ZXJPdmVyO1xuICAgIH1cbiAgICBQb2ludGVyLmlzUG9pbnRlck92ZXIgPSBpc1BvaW50ZXJPdmVyO1xuICAgIGZ1bmN0aW9uIGlzUG9pbnRlckVuYWJsZWQocG9pbnRlcikge1xuICAgICAgICByZXR1cm4gcG9pbnRlci5wb2ludGVyRW5hYmxlZCA/PyB0cnVlO1xuICAgIH1cbiAgICBQb2ludGVyLmlzUG9pbnRlckVuYWJsZWQgPSBpc1BvaW50ZXJFbmFibGVkO1xuICAgIGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQocG9pbnRlciwgdHlwZSwgeCwgeSwgaWQpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlck5hbWUgPSBoYW5kbGVyc01hcFt0eXBlXTtcbiAgICAgICAgaWYgKGhhbmRsZXJOYW1lICYmIHBvaW50ZXJbaGFuZGxlck5hbWVdKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlLCB4LCB5LCBpZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwb2ludGVyW2hhbmRsZXJOYW1lXShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbn0pKFBvaW50ZXIgfHwgKFBvaW50ZXIgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBUcmFuc2Zvcm07XG4oZnVuY3Rpb24gKFRyYW5zZm9ybSkge1xuICAgIGZ1bmN0aW9uIGdldE1hdHJpeCh0cmFuc2Zvcm0sIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAobWF0cml4KSB7XG4gICAgICAgICAgICByZXN1bHQuYSA9IG1hdHJpeC5hID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYiA9IG1hdHJpeC5iID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuYyA9IG1hdHJpeC5jID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuZCA9IG1hdHJpeC5kID8/IDE7XG4gICAgICAgICAgICByZXN1bHQudHggPSBtYXRyaXgudHggPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IG1hdHJpeC50eSA/PyAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm90YXRpb24gfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gdHJhbnNmb3JtLnNjYWxlWCA/PyB0cmFuc2Zvcm0uc2NhbGUgPz8gMTtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gdHJhbnNmb3JtLnNjYWxlWSA/PyB0cmFuc2Zvcm0uc2NhbGUgPz8gMTtcbiAgICAgICAgcmVzdWx0LnR4ID0gdHJhbnNmb3JtLnggPz8gMDtcbiAgICAgICAgcmVzdWx0LnR5ID0gdHJhbnNmb3JtLnkgPz8gMDtcbiAgICAgICAgaWYgKHJvdGF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gICAgICAgICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihyb3RhdGlvbik7XG4gICAgICAgICAgICByZXN1bHQuYSA9IGNvcyAqIHNjYWxlWDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gc2luICogc2NhbGVYO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAtc2luICogc2NhbGVZO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBjb3MgKiBzY2FsZVk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmEgPSBzY2FsZVg7XG4gICAgICAgIHJlc3VsdC5iID0gMDtcbiAgICAgICAgcmVzdWx0LmMgPSAwO1xuICAgICAgICByZXN1bHQuZCA9IHNjYWxlWTtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldE1hdHJpeCA9IGdldE1hdHJpeDtcbiAgICBmdW5jdGlvbiBnZXRDb2xvclRyYW5zZm9ybSh0cmFuc2Zvcm0sIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybSkge1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5yZWRNdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5NdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5ibHVlTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5yZWRPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmJsdWVPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbHBoYSA9IHRyYW5zZm9ybS5hbHBoYSA/PyAxO1xuICAgICAgICBjb25zdCB7IHRpbnQgfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKHRpbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY29sb3IgPSAwLCB2YWx1ZSA9IDEgfSA9IHRpbnQ7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZUludmVydGVkID0gMSAtIHZhbHVlO1xuICAgICAgICAgICAgY29uc3QgciA9IChjb2xvciA+PiAxNikgJiAweGZmO1xuICAgICAgICAgICAgY29uc3QgZyA9IChjb2xvciA+PiA4KSAmIDB4ZmY7XG4gICAgICAgICAgICBjb25zdCBiID0gY29sb3IgJiAweGZmO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGFscGhhO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IHZhbHVlSW52ZXJ0ZWQ7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSByICogdmFsdWU7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBnICogdmFsdWU7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGIgKiB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgeyBicmlnaHRuZXNzIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChicmlnaHRuZXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChicmlnaHRuZXNzID4gMSkge1xuICAgICAgICAgICAgICAgIGJyaWdodG5lc3MgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYnJpZ2h0bmVzcyA8IC0xKSB7XG4gICAgICAgICAgICAgICAgYnJpZ2h0bmVzcyA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IDEgLSBNYXRoLmFicyhicmlnaHRuZXNzKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgaWYgKGJyaWdodG5lc3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gYnJpZ2h0bmVzcyAqIDI1NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYTtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gcGVyY2VudDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSBwZXJjZW50O1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gcGVyY2VudDtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGFscGhhO1xuICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSAxO1xuICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSAxO1xuICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gMDtcbiAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gMDtcbiAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSAwO1xuICAgIH1cbiAgICBUcmFuc2Zvcm0uZ2V0Q29sb3JUcmFuc2Zvcm0gPSBnZXRDb2xvclRyYW5zZm9ybTtcbn0pKFRyYW5zZm9ybSB8fCAoVHJhbnNmb3JtID0ge30pKTtcbiIsImV4cG9ydCB2YXIgVXBkYXRlO1xuKGZ1bmN0aW9uIChVcGRhdGUpIHtcbiAgICBmdW5jdGlvbiBpc0VuYWJsZWQoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuZW5hYmxlZCA/PyB0cnVlO1xuICAgIH1cbiAgICBVcGRhdGUuaXNFbmFibGVkID0gaXNFbmFibGVkO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZShjb21wb25lbnQsIHRpbWUpIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5vblVwZGF0ZSkge1xuICAgICAgICAgICAgY29tcG9uZW50Lm9uVXBkYXRlKHRpbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFVwZGF0ZS51cGRhdGUgPSB1cGRhdGU7XG59KShVcGRhdGUgfHwgKFVwZGF0ZSA9IHt9KSk7XG4iLCJleHBvcnQgY2xhc3MgQ29tcG9uZW50cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmhpdFRlc3QgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMubG9hZGVkID0gbmV3IE1hcCgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBEZWJ1ZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLndhcm5pbmdzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBsb2coLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuICAgIH1cbiAgICBlcnJvciguLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoYXJncyk7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuZXJyb3JzLmdldChpZCk7XG4gICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgdGhpcy5lcnJvcnMuc2V0KGlkLCBjb3VudCk7XG4gICAgfVxuICAgIHdhcm5pbmcoLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLndhcm5pbmdzLmdldChpZCk7XG4gICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICB0aGlzLndhcm5pbmdzLnNldChpZCwgY291bnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXTtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXSA9IGNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIHVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KHJvb3QpO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydFRpbWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgUGxhdGZvcm0gZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgfVxuICAgIGJlZ2luKCkge1xuICAgIH1cbiAgICBlbmQoKSB7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTWF0cml4LCBQb2ludCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvZGlzcGxheSc7XG5pbXBvcnQgeyBQb2ludGVyIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy9wb2ludGVyJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdHJhbnNmb3JtJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFBvaW50ZXJzIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmdsb2JhbCA9IFBvaW50LmVtcHR5KCk7XG4gICAgICAgIHRoaXMubG9jYWwgPSBQb2ludC5lbXB0eSgpO1xuICAgICAgICB0aGlzLnBvaW50ZXJJZCA9IDA7XG4gICAgICAgIHRoaXMucG9pbnRlclR5cGUgPSAncG9pbnRlckRvd24nO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXTtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIG1hdHJpeDogTWF0cml4LmVtcHR5KCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXSA9IGNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIGRpc3BhdGNoKHR5cGUsIHgsIHksIGlkKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2NhbC54ID0geDtcbiAgICAgICAgdGhpcy5sb2NhbC55ID0geTtcbiAgICAgICAgdGhpcy5nbG9iYWwueCA9IHg7XG4gICAgICAgIHRoaXMuZ2xvYmFsLnkgPSB5O1xuICAgICAgICB0aGlzLnBvaW50ZXJJZCA9IGlkO1xuICAgICAgICB0aGlzLnBvaW50ZXJUeXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgTWF0cml4LnNldEVtcHR5KGJhc2UubWF0cml4KTtcbiAgICAgICAgdGhpcy5kZXB0aCsrO1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ29tcG9uZW50KHJvb3QsIGJhc2UpO1xuICAgIH1cbiAgICBkaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFEaXNwbGF5LmlzVmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFQb2ludGVyLmlzUG9pbnRlckVuYWJsZWQoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3QuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIFRyYW5zZm9ybS5nZXRNYXRyaXgoY29tcG9uZW50LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgICAgICBNYXRyaXguY29uY2F0KHBhcmVudC5tYXRyaXgsIGNvbnRleHQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50KGNvbnRleHQubWF0cml4LCB0aGlzLmdsb2JhbCwgdGhpcy5sb2NhbCk7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMubG9jYWw7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsIHRoaXMucG9pbnRlclR5cGUsIHgsIHksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJUeXBlID09PSAncG9pbnRlck1vdmUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiAhY29tcG9uZW50LnBvaW50ZXJPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3ZlcicsIHgsIHksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXJlc3VsdCAmJiBjb21wb25lbnQucG9pbnRlck92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdXQnLCB4LCB5LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wb2ludGVyT3ZlciA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXggfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuLi9leHRlbnNpb25zL2Rpc3BsYXknO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgUmVuZGVyZXIgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXTtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIG1hdHJpeDogTWF0cml4LmVtcHR5KCksXG4gICAgICAgICAgICAgICAgY29sb3JUcmFuc2Zvcm06IENvbG9yVHJhbnNmb3JtLmVtcHR5KCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXSA9IGNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFEaXNwbGF5LmlzVmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBUcmFuc2Zvcm0uZ2V0TWF0cml4KGNvbXBvbmVudCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICBUcmFuc2Zvcm0uZ2V0Q29sb3JUcmFuc2Zvcm0oY29tcG9uZW50LCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgTWF0cml4LmNvbmNhdChwYXJlbnQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICBDb2xvclRyYW5zZm9ybS5jb25jYXQocGFyZW50LmNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy5lbmdpbmUucGxhdGZvcm0uYmVnaW4oKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5kZXB0aCsrO1xuICAgICAgICBNYXRyaXguY29weSh0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0TWF0cml4KCksIGJhc2UubWF0cml4KTtcbiAgICAgICAgQ29sb3JUcmFuc2Zvcm0uc2V0RW1wdHkoYmFzZS5jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50KHJvb3QsIGJhc2UpO1xuICAgICAgICB0aGlzLmVuZ2luZS5wbGF0Zm9ybS5lbmQoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IHZhciBSZXNvdXJjZTtcbihmdW5jdGlvbiAoUmVzb3VyY2UpIHtcbiAgICBmdW5jdGlvbiBnZXRQcm9ncmVzcyhyZXNvdXJjZSkge1xuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzb3VyY2UubG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzb3VyY2UuYnl0ZXNUb3RhbCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvdXJjZS5ieXRlc0xvYWRlZCAvIHJlc291cmNlLmJ5dGVzVG90YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFJlc291cmNlLmdldFByb2dyZXNzID0gZ2V0UHJvZ3Jlc3M7XG59KShSZXNvdXJjZSB8fCAoUmVzb3VyY2UgPSB7fSkpO1xuZXhwb3J0IGNsYXNzIFJlc291cmNlcyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZXNvbHZlcnMgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIGdldChhc3NldCkge1xuICAgICAgICBpZiAoIWFzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzb3VyY2UgPSB0aGlzLnJlc291cmNlcy5nZXQoYXNzZXQpO1xuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICByZXNvdXJjZSA9IHRoaXMucmVzb2x2ZShhc3NldCk7XG4gICAgICAgICAgICB0aGlzLnJlc291cmNlcy5zZXQoYXNzZXQsIHJlc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgfVxuICAgIHJlc29sdmUoYXNzZXQpIHtcbiAgICAgICAgZm9yIChjb25zdCByZXNvbHZlciBvZiB0aGlzLnJlc29sdmVycykge1xuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSByZXNvbHZlcihhc3NldCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgaWYgKHJlc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5naW5lLmRlYnVnLndhcm5pbmcoYFJlc291cmNlIG5vdCByZXNvbHZlZDogJHthc3NldH1gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IDQwMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA0MDA7XG4gICAgICAgIHRoaXMucGl4ZWxSYXRpbyA9IDA7XG4gICAgICAgIHRoaXMuZnVsbHNjcmVlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1hdHJpeCA9IE1hdHJpeC5lbXB0eSgpO1xuICAgIH1cbiAgICBnZXRNYXRyaXgoKSB7XG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW8gPSB0aGlzLmdldFBpeGVsUmF0aW8oKTtcbiAgICAgICAgdGhpcy5tYXRyaXguYSA9IHBpeGVsUmF0aW87XG4gICAgICAgIHRoaXMubWF0cml4LmQgPSBwaXhlbFJhdGlvO1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gICAgfVxuICAgIGdldFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuID8gd2luZG93LmlubmVyV2lkdGggOiB0aGlzLndpZHRoO1xuICAgIH1cbiAgICBnZXRIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZ1bGxzY3JlZW4gPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB0aGlzLmhlaWdodDtcbiAgICB9XG4gICAgZ2V0UGl4ZWxSYXRpbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGl4ZWxSYXRpbyA+IDAgPyB0aGlzLnBpeGVsUmF0aW8gOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA/PyAxO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUaWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xuICAgICAgICB0aGlzLmZyYW1lUmF0ZSA9IDA7XG4gICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGUgPSAodGltZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbmdpbmUudXBkYXRlci51cGRhdGUodGltZSk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5sb2FkaW5nLnVwZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVuZGVyZXIucmVuZGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlRnJhbWUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gKGN1cnJlbnRUaW1lIC0gdGhpcy50aW1lKSAvIDEwMDA7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKGRlbHRhVGltZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU5leHRGcmFtZSgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB9XG4gICAgZ2V0IGlzUGF1c2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXVzZWQ7XG4gICAgfVxuICAgIHBsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOZXh0RnJhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdXBkYXRlTmV4dEZyYW1lKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVGcmFtZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVXBkYXRlIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy91cGRhdGUnO1xuaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgVXBkYXRlciBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChyb290KTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbiAgICB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVVwZGF0ZS5pc0VuYWJsZWQoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllcyhjb21wb25lbnQpO1xuICAgICAgICBVcGRhdGUudXBkYXRlKGNvbXBvbmVudCwgdGhpcy50aW1lKTtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVByb3BlcnRpZXMoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZW5naW5lLmNvbXBvbmVudHMucHJvcGVydGllcy5mb3JFYWNoKChoYW5kbGVyLCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudFtwcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2xvYWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvZW5naW5lJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvY29tcG9uZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL2RlYnVnJztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcGxhdGZvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9wb2ludGVycyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3JlbmRlcmVyJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcmVzb3VyY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvc2NyZWVuJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvdGlja2VyJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvdXBkYXRlcic7XG5leHBvcnQgKiBmcm9tICcuL2lucHV0L21vdXNlJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9kaXNwbGF5JztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9waXZvdCc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvc291cmNlJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy90cmFuc2Zvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3VwZGF0ZSc7XG4iLCJmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsIHR5cGUpIHtcbiAgICBjb25zdCB7IHZpZXcgfSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICBjb25zdCBjbGllbnRSZWN0ID0gdmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIGNsaWVudFJlY3QubGVmdCAtIHZpZXcuY2xpZW50TGVmdDtcbiAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIGNsaWVudFJlY3QudG9wIC0gdmlldy5jbGllbnRUb3A7XG4gICAgZW5naW5lLnBvaW50ZXJzLmRpc3BhdGNoKHR5cGUsIHgsIHksIDApO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5leHBvcnQgdmFyIE1vdXNlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChNb3VzZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gZW5naW5lLnBsYXRmb3JtO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckRvd24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlclVwJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlck1vdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE1vdXNlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoTW91c2VFeHRlbnNpb24gfHwgKE1vdXNlRXh0ZW5zaW9uID0ge30pKTtcbiIsImV4cG9ydCB2YXIgQm91bmRzO1xuKGZ1bmN0aW9uIChCb3VuZHMpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1pblg6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtaW5ZOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWF4WDogTnVtYmVyLk1JTl9WQUxVRSxcbiAgICAgICAgICAgIG1heFk6IE51bWJlci5NSU5fVkFMVUUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIEJvdW5kcy5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KGJvdW5kcykge1xuICAgICAgICBib3VuZHMubWluWCA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGJvdW5kcy5taW5ZID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1heFggPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWF4WSA9IE51bWJlci5NSU5fVkFMVUU7XG4gICAgfVxuICAgIEJvdW5kcy5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkoYm91bmRzKSB7XG4gICAgICAgIHJldHVybiBib3VuZHMubWluWCA9PT0gTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1pblkgPT09IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5tYXhYID09PSBOdW1iZXIuTUlOX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWF4WSA9PT0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICB9XG4gICAgQm91bmRzLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIHRvUmVjdGFuZ2xlKGJvdW5kcywgcmVjdGFuZ2xlKSB7XG4gICAgICAgIGNvbnN0IHsgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgfSA9IGJvdW5kcztcbiAgICAgICAgcmVjdGFuZ2xlLnggPSBtaW5YO1xuICAgICAgICByZWN0YW5nbGUueSA9IG1pblk7XG4gICAgICAgIHJlY3RhbmdsZS53aWR0aCA9IG1heFggLSBtaW5YO1xuICAgICAgICByZWN0YW5nbGUuaGVpZ2h0ID0gbWF4WSAtIG1pblk7XG4gICAgfVxuICAgIEJvdW5kcy50b1JlY3RhbmdsZSA9IHRvUmVjdGFuZ2xlO1xuICAgIGZ1bmN0aW9uIHRlc3RYKGJvdW5kcywgeCkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RYID0gdGVzdFg7XG4gICAgZnVuY3Rpb24gdGVzdFkoYm91bmRzLCB5KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFkgPSB0ZXN0WTtcbiAgICBmdW5jdGlvbiB0ZXN0KGJvdW5kcywgeCwgeSkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0ID0gdGVzdDtcbiAgICBmdW5jdGlvbiB0ZXN0UG9pbnQoYm91bmRzLCBwb2ludCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0UG9pbnQgPSB0ZXN0UG9pbnQ7XG59KShCb3VuZHMgfHwgKEJvdW5kcyA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIENvbG9yVHJhbnNmb3JtO1xuKGZ1bmN0aW9uIChDb2xvclRyYW5zZm9ybSkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxwaGFNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgcmVkTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGdyZWVuTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGJsdWVNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYWxwaGFPZmZzZXQ6IDAsXG4gICAgICAgICAgICByZWRPZmZzZXQ6IDAsXG4gICAgICAgICAgICBncmVlbk9mZnNldDogMCxcbiAgICAgICAgICAgIGJsdWVPZmZzZXQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShjdCkge1xuICAgICAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5NdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ibHVlTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYWxwaGFNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5yZWRPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmdyZWVuT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ibHVlT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU9mZnNldCA9PT0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eVdpdGhBbHBoYShjdCkge1xuICAgICAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5NdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ibHVlTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYmx1ZU9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmlzRW1wdHlXaXRoQWxwaGEgPSBpc0VtcHR5V2l0aEFscGhhO1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KGN0KSB7XG4gICAgICAgIGN0LnJlZE11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5ncmVlbk11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5ibHVlTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LmFscGhhTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LnJlZE9mZnNldCA9IDA7XG4gICAgICAgIGN0LmdyZWVuT2Zmc2V0ID0gMDtcbiAgICAgICAgY3QuYmx1ZU9mZnNldCA9IDA7XG4gICAgICAgIGN0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KGZyb20sIHRvKSB7XG4gICAgICAgIHRvLmFscGhhTXVsdGlwbGllciA9IGZyb20uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICB0by5yZWRNdWx0aXBsaWVyID0gZnJvbS5yZWRNdWx0aXBsaWVyO1xuICAgICAgICB0by5ncmVlbk11bHRpcGxpZXIgPSBmcm9tLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgdG8uYmx1ZU11bHRpcGxpZXIgPSBmcm9tLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICB0by5hbHBoYU9mZnNldCA9IGZyb20uYWxwaGFPZmZzZXQ7XG4gICAgICAgIHRvLnJlZE9mZnNldCA9IGZyb20ucmVkT2Zmc2V0O1xuICAgICAgICB0by5ncmVlbk9mZnNldCA9IGZyb20uZ3JlZW5PZmZzZXQ7XG4gICAgICAgIHRvLmJsdWVPZmZzZXQgPSBmcm9tLmJsdWVPZmZzZXQ7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIGNvbmNhdChjdDEsIGN0MCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGFscGhhTXVsdGlwbGllciA9IGN0MS5hbHBoYU11bHRpcGxpZXIgKiBjdDAuYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCByZWRNdWx0aXBsaWVyID0gY3QxLnJlZE11bHRpcGxpZXIgKiBjdDAucmVkTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgZ3JlZW5NdWx0aXBsaWVyID0gY3QxLmdyZWVuTXVsdGlwbGllciAqIGN0MC5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGJsdWVNdWx0aXBsaWVyID0gY3QxLmJsdWVNdWx0aXBsaWVyICogY3QwLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBhbHBoYU9mZnNldCA9IGN0MS5hbHBoYU11bHRpcGxpZXIgKiBjdDAuYWxwaGFPZmZzZXQgKyBjdDEuYWxwaGFPZmZzZXQ7XG4gICAgICAgIGNvbnN0IHJlZE9mZnNldCA9IGN0MS5yZWRNdWx0aXBsaWVyICogY3QwLnJlZE9mZnNldCArIGN0MS5yZWRPZmZzZXQ7XG4gICAgICAgIGNvbnN0IGdyZWVuT2Zmc2V0ID0gY3QxLmdyZWVuTXVsdGlwbGllciAqIGN0MC5ncmVlbk9mZnNldCArIGN0MS5ncmVlbk9mZnNldDtcbiAgICAgICAgY29uc3QgYmx1ZU9mZnNldCA9IGN0MS5ibHVlTXVsdGlwbGllciAqIGN0MC5ibHVlT2Zmc2V0ICsgY3QxLmJsdWVPZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gcmVkTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IGdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IGFscGhhT2Zmc2V0O1xuICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gcmVkT2Zmc2V0O1xuICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBncmVlbk9mZnNldDtcbiAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBibHVlT2Zmc2V0O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5jb25jYXQgPSBjb25jYXQ7XG59KShDb2xvclRyYW5zZm9ybSB8fCAoQ29sb3JUcmFuc2Zvcm0gPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9jb2xvci10cmFuc2Zvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9ib3VuZHMnO1xuZXhwb3J0ICogZnJvbSAnLi9tYXRyaXgnO1xuZXhwb3J0ICogZnJvbSAnLi9wb2ludCc7XG5leHBvcnQgKiBmcm9tICcuL3JlY3RhbmdsZSc7XG4iLCJleHBvcnQgdmFyIE1hdHJpeDtcbihmdW5jdGlvbiAoTWF0cml4KSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiAxLFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGM6IDAsXG4gICAgICAgICAgICBkOiAxLFxuICAgICAgICAgICAgdHg6IDAsXG4gICAgICAgICAgICB0eTogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTWF0cml4LmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShtYXRyaXgpIHtcbiAgICAgICAgcmV0dXJuIG1hdHJpeC5hID09PSAxXG4gICAgICAgICAgICAmJiBtYXRyaXguYiA9PT0gMFxuICAgICAgICAgICAgJiYgbWF0cml4LmMgPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC5kID09PSAxXG4gICAgICAgICAgICAmJiBtYXRyaXgudHggPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC50eSA9PT0gMDtcbiAgICB9XG4gICAgTWF0cml4LmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KG1hdHJpeCkge1xuICAgICAgICBtYXRyaXguYSA9IDE7XG4gICAgICAgIG1hdHJpeC5iID0gMDtcbiAgICAgICAgbWF0cml4LmMgPSAwO1xuICAgICAgICBtYXRyaXguZCA9IDE7XG4gICAgICAgIG1hdHJpeC50eCA9IDA7XG4gICAgICAgIG1hdHJpeC50eSA9IDA7XG4gICAgfVxuICAgIE1hdHJpeC5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoZnJvbSwgdG8pIHtcbiAgICAgICAgdG8uYSA9IGZyb20uYTtcbiAgICAgICAgdG8uYiA9IGZyb20uYjtcbiAgICAgICAgdG8uYyA9IGZyb20uYztcbiAgICAgICAgdG8uZCA9IGZyb20uZDtcbiAgICAgICAgdG8udHggPSBmcm9tLnR4O1xuICAgICAgICB0by50eSA9IGZyb20udHk7XG4gICAgfVxuICAgIE1hdHJpeC5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBjb25jYXQobWF0cml4MCwgbWF0cml4MSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGEgPSBtYXRyaXgxLmEgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmM7XG4gICAgICAgIGNvbnN0IGIgPSBtYXRyaXgxLmEgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmQ7XG4gICAgICAgIGNvbnN0IGMgPSBtYXRyaXgxLmMgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmM7XG4gICAgICAgIGNvbnN0IGQgPSBtYXRyaXgxLmMgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmQ7XG4gICAgICAgIGNvbnN0IHR4ID0gbWF0cml4MS50eCAqIG1hdHJpeDAuYSArIG1hdHJpeDEudHkgKiBtYXRyaXgwLmMgKyBtYXRyaXgwLnR4O1xuICAgICAgICBjb25zdCB0eSA9IG1hdHJpeDEudHggKiBtYXRyaXgwLmIgKyBtYXRyaXgxLnR5ICogbWF0cml4MC5kICsgbWF0cml4MC50eTtcbiAgICAgICAgcmVzdWx0LmEgPSBhO1xuICAgICAgICByZXN1bHQuYiA9IGI7XG4gICAgICAgIHJlc3VsdC5jID0gYztcbiAgICAgICAgcmVzdWx0LmQgPSBkO1xuICAgICAgICByZXN1bHQudHggPSB0eDtcbiAgICAgICAgcmVzdWx0LnR5ID0gdHk7XG4gICAgfVxuICAgIE1hdHJpeC5jb25jYXQgPSBjb25jYXQ7XG4gICAgZnVuY3Rpb24gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KSB7XG4gICAgICAgIHJldHVybiBtYXRyaXguYSAqIG1hdHJpeC5kIC0gbWF0cml4LmIgKiBtYXRyaXguYztcbiAgICB9XG4gICAgTWF0cml4LmdldERldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQ7XG4gICAgZnVuY3Rpb24gaW52ZXJ0KG1hdHJpeCwgcmVzdWx0KSB7XG4gICAgICAgIGxldCBkZXRlcm1pbmFudCA9IGdldERldGVybWluYW50KG1hdHJpeCk7XG4gICAgICAgIGlmIChkZXRlcm1pbmFudCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0LmEgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gLW1hdHJpeC50eDtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IC1tYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCA9IDEuMCAvIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBtYXRyaXguYSAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmIgPSAtbWF0cml4LmIgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gLW1hdHJpeC5jICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuZCA9IG1hdHJpeC5kICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQudHggPSAtcmVzdWx0LmEgKiBtYXRyaXgudHggLSByZXN1bHQuYyAqIG1hdHJpeC50eTtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IC1yZXN1bHQuYiAqIG1hdHJpeC50eCAtIHJlc3VsdC5kICogbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hdHJpeC5pbnZlcnQgPSBpbnZlcnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJlc3VsdC54ID0geCAqIG1hdHJpeC5hICsgeSAqIG1hdHJpeC5jICsgbWF0cml4LnR4O1xuICAgICAgICByZXN1bHQueSA9IHggKiBtYXRyaXguYiArIHkgKiBtYXRyaXguZCArIG1hdHJpeC50eTtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybVBvaW50ID0gdHJhbnNmb3JtUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnRMb2NhbChtYXRyaXgsIHBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmVzdWx0LnggPSB4ICogbWF0cml4LmEgKyB5ICogbWF0cml4LmM7XG4gICAgICAgIHJlc3VsdC55ID0geCAqIG1hdHJpeC5iICsgeSAqIG1hdHJpeC5kO1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnRMb2NhbCA9IHRyYW5zZm9ybVBvaW50TG9jYWw7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtSW52ZXJzZVBvaW50KG1hdHJpeCwgcG9pbnQsIHJlc3VsdCkge1xuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudChtYXRyaXgpO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC54ID0gLW1hdHJpeC50eDtcbiAgICAgICAgICAgIHJlc3VsdC55ID0gLW1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRldGVybWluYW50ID0gMSAvIGRldGVybWluYW50O1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgICAgIHJlc3VsdC54ID0gZGV0ZXJtaW5hbnQgKiAobWF0cml4LmMgKiAobWF0cml4LnR5IC0geSkgKyBtYXRyaXguZCAqICh4IC0gbWF0cml4LnR4KSk7XG4gICAgICAgICAgICByZXN1bHQueSA9IGRldGVybWluYW50ICogKG1hdHJpeC5hICogKHkgLSBtYXRyaXgudHkpICsgbWF0cml4LmIgKiAobWF0cml4LnR4IC0geCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1JbnZlcnNlUG9pbnQgPSB0cmFuc2Zvcm1JbnZlcnNlUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtQm91bmRzKG1hdHJpeCwgYm91bmRzLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBhLCBiLCBjLCBkLCB0eCwgdHksIH0gPSBtYXRyaXg7XG4gICAgICAgIGNvbnN0IHJ4ID0gYm91bmRzLng7XG4gICAgICAgIGNvbnN0IHJ5ID0gYm91bmRzLnk7XG4gICAgICAgIGNvbnN0IHJyID0gcnggKyBib3VuZHMud2lkdGg7XG4gICAgICAgIGNvbnN0IHJiID0gcnkgKyBib3VuZHMuaGVpZ2h0O1xuICAgICAgICBjb25zdCBueDEgPSByeCAqIGEgKyByeSAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkxID0gcnggKiBiICsgcnkgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54MiA9IHJyICogYSArIHJ5ICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTIgPSByciAqIGIgKyByeSAqIGQgKyB0eTtcbiAgICAgICAgY29uc3QgbngzID0gcnIgKiBhICsgcmIgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MyA9IHJyICogYiArIHJiICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDQgPSByeCAqIGEgKyByYiAqIGMgKyB0eDtcbiAgICAgICAgY29uc3Qgbnk0ID0gcnggKiBiICsgcmIgKiBkICsgdHk7XG4gICAgICAgIGxldCBsZWZ0ID0gbngxO1xuICAgICAgICBpZiAobGVmdCA+IG54Mikge1xuICAgICAgICAgICAgbGVmdCA9IG54MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54Mykge1xuICAgICAgICAgICAgbGVmdCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54NCkge1xuICAgICAgICAgICAgbGVmdCA9IG54NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9wID0gbnkxO1xuICAgICAgICBpZiAodG9wID4gbnkyKSB7XG4gICAgICAgICAgICB0b3AgPSBueTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcCA+IG55Mykge1xuICAgICAgICAgICAgdG9wID0gbnkzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3AgPiBueTQpIHtcbiAgICAgICAgICAgIHRvcCA9IG55NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmlnaHQgPSBueDE7XG4gICAgICAgIGlmIChyaWdodCA8IG54Mikge1xuICAgICAgICAgICAgcmlnaHQgPSBueDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0IDwgbngzKSB7XG4gICAgICAgICAgICByaWdodCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgPCBueDQpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbng0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBib3R0b20gPSBueTE7XG4gICAgICAgIGlmIChib3R0b20gPCBueTIpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tIDwgbnkzKSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdHRvbSA8IG55NCkge1xuICAgICAgICAgICAgYm90dG9tID0gbnk0O1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC54ID0gbGVmdDtcbiAgICAgICAgcmVzdWx0LnkgPSB0b3A7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGJvdHRvbSAtIHRvcDtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybUJvdW5kcyA9IHRyYW5zZm9ybUJvdW5kcztcbn0pKE1hdHJpeCB8fCAoTWF0cml4ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUG9pbnQ7XG4oZnVuY3Rpb24gKFBvaW50KSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG4gICAgUG9pbnQuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBsZW5ndGgocG9pbnQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9XG4gICAgUG9pbnQubGVuZ3RoID0gbGVuZ3RoO1xuICAgIGZ1bmN0aW9uIGFuZ2xlKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHBvaW50LnksIHBvaW50LngpO1xuICAgIH1cbiAgICBQb2ludC5hbmdsZSA9IGFuZ2xlO1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMDtcbiAgICB9XG4gICAgUG9pbnQuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gZXF1YWxzKHBvaW50MCwgcG9pbnQxKSB7XG4gICAgICAgIHJldHVybiBwb2ludDAueCA9PT0gcG9pbnQxLnggJiYgcG9pbnQwLnkgPT09IHBvaW50MS55O1xuICAgIH1cbiAgICBQb2ludC5lcXVhbHMgPSBlcXVhbHM7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkocG9pbnQpIHtcbiAgICAgICAgcG9pbnQueCA9IDA7XG4gICAgICAgIHBvaW50LnkgPSAwO1xuICAgIH1cbiAgICBQb2ludC5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LnggPSBzb3VyY2UueDtcbiAgICAgICAgdGFyZ2V0LnkgPSBzb3VyY2UueTtcbiAgICB9XG4gICAgUG9pbnQuY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gbm9ybWFsaXplKHBvaW50LCB0aGlja25lc3MpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gbGVuZ3RoKHBvaW50KTtcbiAgICAgICAgaWYgKHZhbHVlID4gMCkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlja25lc3MgLyB2YWx1ZTtcbiAgICAgICAgICAgIHBvaW50LnggKj0gdmFsdWU7XG4gICAgICAgICAgICBwb2ludC55ICo9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBvaW50Lm5vcm1hbGl6ZSA9IG5vcm1hbGl6ZTtcbiAgICBmdW5jdGlvbiBkaXN0YW5jZShwb2ludDAsIHBvaW50MSkge1xuICAgICAgICBjb25zdCBkeCA9IHBvaW50MC54IC0gcG9pbnQxLng7XG4gICAgICAgIGNvbnN0IGR5ID0gcG9pbnQwLnkgLSBwb2ludDEueTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuICAgIFBvaW50LmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgZnVuY3Rpb24gaW50ZXJwb2xhdGUoYmVnaW4sIGVuZCwgdmFsdWUsIHJlc3VsdCkge1xuICAgICAgICByZXN1bHQueCA9IGJlZ2luLnggKyB2YWx1ZSAqIChlbmQueCAtIGJlZ2luLngpO1xuICAgICAgICByZXN1bHQueSA9IGJlZ2luLnkgKyB2YWx1ZSAqIChlbmQueSAtIGJlZ2luLnkpO1xuICAgIH1cbiAgICBQb2ludC5pbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlO1xuICAgIGZ1bmN0aW9uIHBvbGFyKHBvaW50LCBsZW5ndGgsIGFuZ2xlKSB7XG4gICAgICAgIHBvaW50LnggPSBsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIHBvaW50LnkgPSBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgfVxuICAgIFBvaW50LnBvbGFyID0gcG9sYXI7XG59KShQb2ludCB8fCAoUG9pbnQgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBSZWN0YW5nbGU7XG4oZnVuY3Rpb24gKFJlY3RhbmdsZSkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJlY3RhbmdsZS54ID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLnkgPSAwO1xuICAgICAgICByZWN0YW5nbGUud2lkdGggPSAwO1xuICAgICAgICByZWN0YW5nbGUuaGVpZ2h0ID0gMDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gaW50ZXJzZWN0aW9uKHNvdXJjZSwgdGFyZ2V0LCByZXN1bHQpIHtcbiAgICAgICAgbGV0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCwgfSA9IHNvdXJjZTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRhcmdldC54O1xuICAgICAgICBjb25zdCB0b3AgPSB0YXJnZXQueTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0YXJnZXQueCArIHRhcmdldC53aWR0aDtcbiAgICAgICAgY29uc3QgYm90dG9tID0gdGFyZ2V0LnkgKyB0YXJnZXQuaGVpZ2h0O1xuICAgICAgICBpZiAoeCA8IGxlZnQpIHtcbiAgICAgICAgICAgIHdpZHRoIC09IGxlZnQgLSB4O1xuICAgICAgICAgICAgeCA9IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggKyB3aWR0aCA+IHJpZ2h0KSB7XG4gICAgICAgICAgICB3aWR0aCA9IHJpZ2h0IC0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSA8IHRvcCkge1xuICAgICAgICAgICAgaGVpZ2h0IC09IHRvcCAtIHk7XG4gICAgICAgICAgICB5ID0gdG9wO1xuICAgICAgICB9XG4gICAgICAgIGlmICh5ICsgaGVpZ2h0ID4gYm90dG9tKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBib3R0b20gLSB5O1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aWR0aCA8IDApIHtcbiAgICAgICAgICAgIHdpZHRoID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQueCA9IHg7XG4gICAgICAgIHJlc3VsdC55ID0geTtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5pbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb247XG4gICAgZnVuY3Rpb24gaXNFbXB0eShyZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZS53aWR0aCA9PT0gMCB8fCByZWN0YW5nbGUuaGVpZ2h0ID09PSAwO1xuICAgIH1cbiAgICBSZWN0YW5nbGUuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gY29udGFpbnMocmVjdGFuZ2xlLCBwb2ludCkge1xuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlLnggPCBwb2ludC54XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueCArIHJlY3RhbmdsZS53aWR0aCA+IHBvaW50LnhcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS55IDwgcG9pbnQueVxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnkgKyByZWN0YW5nbGUuaGVpZ2h0ID4gcG9pbnQueTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmNvbnRhaW5zID0gY29udGFpbnM7XG4gICAgZnVuY3Rpb24gcm91bmQocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJlY3RhbmdsZS54ID0gTWF0aC5yb3VuZChyZWN0YW5nbGUueCk7XG4gICAgICAgIHJlY3RhbmdsZS55ID0gTWF0aC5yb3VuZChyZWN0YW5nbGUueSk7XG4gICAgICAgIHJlY3RhbmdsZS53aWR0aCA9IE1hdGgucm91bmQocmVjdGFuZ2xlLndpZHRoKTtcbiAgICAgICAgcmVjdGFuZ2xlLmhlaWdodCA9IE1hdGgucm91bmQocmVjdGFuZ2xlLmhlaWdodCk7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5yb3VuZCA9IHJvdW5kO1xufSkoUmVjdGFuZ2xlIHx8IChSZWN0YW5nbGUgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXgsIFJlY3RhbmdsZSB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgSW1hZ2VFeHRlbnNpb24sIElNQUdFIH0gZnJvbSAnLi9pbWFnZSc7XG5jb25zdCBib3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmNvbnN0IHNjcmVlbkJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IGltYWdlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IGNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gZW5naW5lLnBsYXRmb3JtO1xuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBwbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgICAgICBpZiAoQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eVdpdGhBbHBoYShjb2xvclRyYW5zZm9ybSkpIHtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tQ29udGV4dCA9IHBsYXRmb3JtLmNyZWF0ZUN1c3RvbUNvbnRleHQoKTtcbiAgICAgICAgICAgIGJvdW5kcy54ID0geDtcbiAgICAgICAgICAgIGJvdW5kcy55ID0geTtcbiAgICAgICAgICAgIGJvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgYm91bmRzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Cb3VuZHMobWF0cml4LCBib3VuZHMsIGJvdW5kcyk7XG4gICAgICAgICAgICBpZiAoUmVjdGFuZ2xlLmlzRW1wdHkoYm91bmRzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNjcmVlbkJvdW5kcy53aWR0aCA9IGN1c3RvbUNvbnRleHQuY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgc2NyZWVuQm91bmRzLmhlaWdodCA9IGN1c3RvbUNvbnRleHQuY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5pbnRlcnNlY3Rpb24oYm91bmRzLCBzY3JlZW5Cb3VuZHMsIGJvdW5kcyk7XG4gICAgICAgICAgICBpZiAoUmVjdGFuZ2xlLmlzRW1wdHkoYm91bmRzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJlY3RhbmdsZS5yb3VuZChib3VuZHMpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuY2xlYXJSZWN0KGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBjdXN0b21Db250ZXh0LmdldEltYWdlRGF0YShib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBjb25zdCBybSA9IGNvbG9yVHJhbnNmb3JtLnJlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBnbSA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IGJtID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBhbSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IHJvID0gY29sb3JUcmFuc2Zvcm0ucmVkT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgZ28gPSBjb2xvclRyYW5zZm9ybS5ncmVlbk9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGJvID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGFvID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFPZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGltYWdlRGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBkYXRhO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIHJtICsgcm87XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGdtICsgZ287XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGJtICsgYm87XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGFtICsgYW87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIGJvdW5kcy54LCBib3VuZHMueSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZShjdXN0b21Db250ZXh0LmNhbnZhcywgYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQsIGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHBsYXRmb3JtLmRlc3Ryb3lDdXN0b21Db250ZXh0KGN1c3RvbUNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIEltYWdlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChJTUFHRSwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gfHwgKENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSB9IGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0IHZhciBDYW52YXNJbWFnZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzSW1hZ2VFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBlbmdpbmUucGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIEltYWdlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChJTUFHRSwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNJbWFnZUV4dGVuc2lvbiB8fCAoQ2FudmFzSW1hZ2VFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QsIFJlc291cmNlLCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcbmV4cG9ydCBjb25zdCBJTUFHRSA9ICdpbWFnZSc7XG5leHBvcnQgdmFyIEltYWdlO1xuKGZ1bmN0aW9uIChJbWFnZSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhpbWFnZSwgYm91bmRzLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IGltYWdlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgICAgIGJvdW5kcy54ID0geDtcbiAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgYm91bmRzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgSW1hZ2UuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoSW1hZ2UgfHwgKEltYWdlID0ge30pKTtcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBJbWFnZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoSW1hZ2VFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBsb2NhbCB9ID0gZW5naW5lLnBvaW50ZXJzO1xuICAgICAgICBJbWFnZS5jYWxjdWxhdGVCb3VuZHMoaW1hZ2UsIGJvdW5kcywgZW5naW5lKTtcbiAgICAgICAgcmV0dXJuIFJlY3RhbmdsZS5jb250YWlucyhib3VuZHMsIGxvY2FsKTtcbiAgICB9XG4gICAgSW1hZ2VFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5sb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IGltYWdlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gUmVzb3VyY2UuZ2V0UHJvZ3Jlc3MocmVzb3VyY2UpO1xuICAgICAgICBjb250ZXh0LmxvYWRlZCA9ICEhcmVzb3VyY2U/LmxvYWRlZCAmJiAhIXJlc291cmNlPy5pbWFnZTtcbiAgICB9XG4gICAgSW1hZ2VFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KElNQUdFLCBoaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChJTUFHRSwgbG9hZGVkKTtcbiAgICAgICAgSW1hZ2VSZXNvdXJjZS5pbml0KGVuZ2luZSk7XG4gICAgfVxuICAgIEltYWdlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoSW1hZ2VFeHRlbnNpb24gfHwgKEltYWdlRXh0ZW5zaW9uID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMtaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMtaW1hZ2UtY29sb3InO1xuIiwiZXhwb3J0IHZhciBJbWFnZVJlc291cmNlO1xuKGZ1bmN0aW9uIChJbWFnZVJlc291cmNlKSB7XG4gICAgZnVuY3Rpb24gcmVzb2x2ZShhc3NldCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGFzc2V0LnNwbGl0KCcuJykucG9wKCk7XG4gICAgICAgIHN3aXRjaCAoZXh0ZW5zaW9uKSB7XG4gICAgICAgICAgICBjYXNlICdwbmcnOlxuICAgICAgICAgICAgY2FzZSAnanBnJzpcbiAgICAgICAgICAgIGNhc2UgJ3dlYnAnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0ge1xuICAgICAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNMb2FkZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzVG90YWw6IDAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGFzc2V0O1xuICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGltYWdlIGxvYWRlZDogJHthc3NldH1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnaW1hZ2UgbG9hZCBlcnJvcicsIGUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgSW1hZ2VSZXNvdXJjZS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb2x2ZSk7XG4gICAgfVxuICAgIEltYWdlUmVzb3VyY2UuaW5pdCA9IGluaXQ7XG59KShJbWFnZVJlc291cmNlIHx8IChJbWFnZVJlc291cmNlID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJpbmcnO1xuIiwiZXhwb3J0IHZhciBTdHJpbmdSZXNvdXJjZTtcbihmdW5jdGlvbiAoU3RyaW5nUmVzb3VyY2UpIHtcbiAgICBmdW5jdGlvbiByZXNvbHZlKGFzc2V0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gYXNzZXQuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgICAgc3dpdGNoIChleHRlbnNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3R4dCc6XG4gICAgICAgICAgICBjYXNlICdqc29uJzpcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzTG9hZGVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBieXRlc1RvdGFsOiAwLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGFzc2V0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB4aHIub25wcm9ncmVzcyA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmJ5dGVzTG9hZGVkID0gZS5sb2FkZWQ7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmJ5dGVzVG90YWwgPSBlLnRvdGFsO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHN0cmluZyBsb2FkZWQ6ICR7YXNzZXR9YCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmRhdGEgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5ieXRlc0xvYWRlZCA9IHJlc291cmNlLmJ5dGVzVG90YWw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdzdHJpbmcgbG9hZCBlcnJvcicsIGUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBTdHJpbmdSZXNvdXJjZS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb2x2ZSk7XG4gICAgfVxuICAgIFN0cmluZ1Jlc291cmNlLmluaXQgPSBpbml0O1xufSkoU3RyaW5nUmVzb3VyY2UgfHwgKFN0cmluZ1Jlc291cmNlID0ge30pKTtcbiIsImltcG9ydCB7IFJlc291cmNlLCBDb250YWluZXJFeHRlbnNpb24sIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBTdHJpbmdSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5leHBvcnQgY29uc3QgU0NFTkUgPSAnc2NlbmUnO1xuZXhwb3J0IHZhciBTY2VuZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoU2NlbmVFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBsb2FkZWQoc2NlbmUsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLmxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICBpZiAoc2NlbmUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIENvbnRhaW5lckV4dGVuc2lvbi5sb2FkZWQoc2NlbmUsIGVuZ2luZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB7IHNyYyB9ID0gc2NlbmU7XG4gICAgICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gUmVzb3VyY2UuZ2V0UHJvZ3Jlc3MocmVzb3VyY2UpO1xuICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSAhIXJlc291cmNlPy5sb2FkZWQgJiYgISFyZXNvdXJjZT8uZGF0YTtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZSAmJiByZXNvdXJjZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUuY2hpbGRyZW4gPSBKU09OLnBhcnNlKHJlc291cmNlLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZyhgc2NlbmUgcGFyc2luZyBlcnJvcjogJHtlLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFNjZW5lRXh0ZW5zaW9uLmxvYWRlZCA9IGxvYWRlZDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChTQ0VORSwgQ29udGFpbmVyRXh0ZW5zaW9uLmhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KFNDRU5FLCBDb250YWluZXJFeHRlbnNpb24ucmVuZGVyKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLnNldChTQ0VORSwgQ29udGFpbmVyRXh0ZW5zaW9uLnVwZGF0ZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5zZXQoU0NFTkUsIGxvYWRlZCk7XG4gICAgICAgIFN0cmluZ1Jlc291cmNlLmluaXQoZW5naW5lKTtcbiAgICB9XG4gICAgU2NlbmVFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShTY2VuZUV4dGVuc2lvbiB8fCAoU2NlbmVFeHRlbnNpb24gPSB7fSkpO1xuIiwiY29uc3QgUElfMiA9IE1hdGguUEkgKiAyO1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5RWxsaXBzZShkYXRhLCBoYXNGaWxsLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHJhZGl1cyA9IDAsIHJhZGl1c1gsIHJhZGl1c1ksIH0gPSBkYXRhO1xuICAgIGNvbnN0IHJ4ID0gcmFkaXVzWCA/PyByYWRpdXM7XG4gICAgY29uc3QgcnkgPSByYWRpdXNZID8/IHJhZGl1cztcbiAgICBpZiAocnggPT09IDAgfHwgcnkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQuZWxsaXBzZSh4LCB5LCByeCwgcnksIDAsIDAsIFBJXzIpO1xuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q29tbWFuZChjb21tYW5kLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBjb21tYW5kO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtb3ZlVG8nOlxuICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKG1vdmVUby54ID8/IDAsIG1vdmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2xpbmVUbyc6XG4gICAgICAgICAgICBjb25zdCBsaW5lVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8obGluZVRvLnggPz8gMCwgbGluZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3VydmVUbyc6XG4gICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyhjdXJ2ZVRvLmN4ID8/IDAsIGN1cnZlVG8uY3kgPz8gMCwgY3VydmVUby54ID8/IDAsIGN1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjdWJpY0N1cnZlVG8nOlxuICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQuYmV6aWVyQ3VydmVUbyhjdWJpY0N1cnZlVG8uY3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLmN5ID8/IDAsIGN1YmljQ3VydmVUby5zeCA/PyAwLCBjdWJpY0N1cnZlVG8uc3kgPz8gMCwgY3ViaWNDdXJ2ZVRvLnggPz8gMCwgY3ViaWNDdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBhdGgoZGF0YSwgaGFzRmlsbCwgY29udGV4dCkge1xuICAgIGlmICghZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gZGF0YVtpXTtcbiAgICAgICAgYXBwbHlDb21tYW5kKGNvbW1hbmQsIGNvbnRleHQpO1xuICAgIH1cbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhcHBseVJlY3RhbmdsZShkYXRhLCBoYXNGaWxsLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHdpZHRoID0gMCwgaGVpZ2h0ID0gMCwgfSA9IGRhdGE7XG4gICAgaWYgKHdpZHRoID09PSAwIHx8IGhlaWdodCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IE1hdHJpeCwgUG9pbnQsIFJlY3RhbmdsZSwgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IFNoYXBlRXh0ZW5zaW9uLCBTSEFQRSwgU2hhcGUgfSBmcm9tICcuLi9zaGFwZSc7XG5pbXBvcnQgeyBhcHBseVJlY3RhbmdsZSB9IGZyb20gJy4vcmVjdGFuZ2xlJztcbmltcG9ydCB7IGFwcGx5RWxsaXBzZSB9IGZyb20gJy4vZWxsaXBzZSc7XG5pbXBvcnQgeyBhcHBseVBhdGggfSBmcm9tICcuL3BhdGgnO1xuaW1wb3J0IHsgYXBwbHlTdHJpbmcgfSBmcm9tICcuL3N0cmluZyc7XG5pbXBvcnQgeyBzZXRGaWxsU3R5bGUsIHNldFN0cm9rZVN0eWxlIH0gZnJvbSAnLi9zdHlsZSc7XG5jb25zdCBib3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmNvbnN0IG9mZnNldCA9IFBvaW50LmVtcHR5KCk7XG5mdW5jdGlvbiByZW5kZXJHcmFwaGljcyhkYXRhLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgY29uc3QgeyBmaWxsLCBzdHJva2UgfSA9IGRhdGE7XG4gICAgY29uc3QgaGFzRmlsbCA9ICEhZmlsbCB8fCBmaWxsID09PSAwO1xuICAgIGNvbnN0IGhhc1N0cm9rZSA9ICEhc3Ryb2tlIHx8IHN0cm9rZSA9PT0gMDtcbiAgICBpZiAoIWhhc0ZpbGwgJiYgIWhhc1N0cm9rZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBleGlzdCA9IHRydWU7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBkYXRhO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdyZWN0YW5nbGUnOlxuICAgICAgICAgICAgZXhpc3QgPSBhcHBseVJlY3RhbmdsZShkYXRhLCBoYXNGaWxsLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlbGxpcHNlJzpcbiAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlFbGxpcHNlKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BhdGgnOlxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGRhdGE7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhdGguZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IGFwcGx5U3RyaW5nKHBhdGguZGF0YSwgaGFzRmlsbCwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHBhdGguZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IGFwcGx5UGF0aChwYXRoLmRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhpc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICghZXhpc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBzZXRGaWxsU3R5bGUoZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIH1cbiAgICBpZiAoaGFzU3Ryb2tlKSB7XG4gICAgICAgIHNldFN0cm9rZVN0eWxlKHN0cm9rZSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxufVxuZXhwb3J0IHZhciBDYW52YXNTaGFwZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzU2hhcGVFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoc2hhcGUsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHNoYXBlO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgUG9pbnQuc2V0RW1wdHkob2Zmc2V0KTtcbiAgICAgICAgaWYgKFBpdm90Lmhhc1ZhbHVlcyhzaGFwZSkpIHtcbiAgICAgICAgICAgIFNoYXBlLmNhbGN1bGF0ZUJvdW5kcyhzaGFwZSwgYm91bmRzKTtcbiAgICAgICAgICAgIGlmIChSZWN0YW5nbGUuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2Zmc2V0LnggPSBQaXZvdC5nZXRYKHNoYXBlLCBib3VuZHMud2lkdGgpO1xuICAgICAgICAgICAgb2Zmc2V0LnkgPSBQaXZvdC5nZXRZKHNoYXBlLCBib3VuZHMud2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IGVuZ2luZS5wbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoUG9pbnQuaXNFbXB0eShvZmZzZXQpKSB7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnRMb2NhbChtYXRyaXgsIG9mZnNldCwgb2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHggKyBvZmZzZXQueCwgbWF0cml4LnR5ICsgb2Zmc2V0LnkpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyR3JhcGhpY3MoZGF0YVtpXSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQyZCwgZW5naW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJlbmRlckdyYXBoaWNzKGRhdGEsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0MmQsIGVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzU2hhcGVFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIFNoYXBlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChTSEFQRSwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzU2hhcGVFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNTaGFwZUV4dGVuc2lvbiB8fCAoQ2FudmFzU2hhcGVFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgR3JhcGhpY3NTdHJpbmdSZWFkZXIgfSBmcm9tICcuLi9kYXRhL3N0cmluZyc7XG5pbXBvcnQgeyBhcHBseUNvbW1hbmQgfSBmcm9tICcuL3BhdGgnO1xuY29uc3QgcmVhZGVyID0gbmV3IEdyYXBoaWNzU3RyaW5nUmVhZGVyKCk7XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlTdHJpbmcoZGF0YSwgaGFzRmlsbCwgY29udGV4dCkge1xuICAgIGlmICghZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHJlYWRlci5zZXRQYXRoKGRhdGEpO1xuICAgIHdoaWxlIChyZWFkZXIucmVhZE5leHQoKSkge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gcmVhZGVyLmdldENvbW1hbmQoKTtcbiAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGFwcGx5Q29tbWFuZChjb21tYW5kLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IENhbnZhc1BhdHRlcm5zIH0gZnJvbSAnQGplbmcvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBNYXRyaXggfSBmcm9tICdAamVuZy9nZW9tJztcbmNvbnN0IGVtcHR5TWF0cml4ID0gTWF0cml4LmVtcHR5KCk7XG5jb25zdCBlbXB0eUFycmF5ID0gW107XG5mdW5jdGlvbiBnZXRDYW52YXNQYXR0ZXJuKGZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpIHtcbiAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oZmlsbCwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHN3aXRjaCAoZmlsbC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzb2xpZCc6XG4gICAgICAgICAgICAgICAgY29uc3Qgc29saWQgPSBmaWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oc29saWQuY29sb3IgPz8gMCwgc29saWQuYWxwaGEgPz8gMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgY2FzZSAnbGluZWFyJzpcbiAgICAgICAgICAgICAgICBjb25zdCB7IG1hdHJpeDogbWwgPSBlbXB0eU1hdHJpeCwgY29sb3JzOiBjbCA9IGVtcHR5QXJyYXksIGFscGhhczogYWwgPSBlbXB0eUFycmF5LCByYXRpb3M6IHJsID0gZW1wdHlBcnJheSwgfSA9IGZpbGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbnZhc1BhdHRlcm5zLmxpbmVhckdyYWRpZW50UGF0dGVybihtbCwgY2wsIGFsLCBybCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQpO1xuICAgICAgICAgICAgY2FzZSAncmFkaWFsJzpcbiAgICAgICAgICAgICAgICBjb25zdCB7IG1hdHJpeDogbXIgPSBlbXB0eU1hdHJpeCwgY29sb3JzOiBjciA9IGVtcHR5QXJyYXksIGFscGhhczogYXIgPSBlbXB0eUFycmF5LCByYXRpb3M6IHJyID0gZW1wdHlBcnJheSwgfSA9IGZpbGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbnZhc1BhdHRlcm5zLnJhZGlhbEdyYWRpZW50UGF0dGVybihtciwgY3IsIGFyLCByciwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQpO1xuICAgICAgICAgICAgY2FzZSAnYml0bWFwJzpcbiAgICAgICAgICAgICAgICBjb25zdCBiaXRtYXBGaWxsID0gZmlsbDtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHJlcGVhdCA9IHRydWUsIHNyYyB9ID0gYml0bWFwRmlsbDtcbiAgICAgICAgICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5iaXRtYXBQYXR0ZXJuKHJlc291cmNlLmltYWdlLCByZXBlYXQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RmlsbFN0eWxlKGZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpIHtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGdldENhbnZhc1BhdHRlcm4oZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0U3Ryb2tlU3R5bGUoc3Ryb2tlLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgaWYgKHR5cGVvZiBzdHJva2UgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oc3Ryb2tlLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICAgICAgY29udGV4dC5saW5lQ2FwID0gJ3JvdW5kJztcbiAgICAgICAgY29udGV4dC5saW5lSm9pbiA9ICdyb3VuZCc7XG4gICAgICAgIGNvbnRleHQubWl0ZXJMaW1pdCA9IDEwO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2Ygc3Ryb2tlID09PSAnb2JqZWN0JyAmJiBzdHJva2UuZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBnZXRDYW52YXNQYXR0ZXJuKHN0cm9rZS5maWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBzdHJva2UudGhpY2tuZXNzID8/IDE7XG4gICAgICAgIGNvbnRleHQubGluZUNhcCA9IHN0cm9rZS5jYXBzID8/ICdyb3VuZCc7XG4gICAgICAgIGNvbnRleHQubGluZUpvaW4gPSBzdHJva2Uuam9pbnRzID8/ICdyb3VuZCc7XG4gICAgICAgIGNvbnRleHQubWl0ZXJMaW1pdCA9IHN0cm9rZS5taXRlckxpbWl0ID8/IDEwO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJvdW5kcyB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgUGF0aENvbW1hbmQgfSBmcm9tICcuL3BhdGgnO1xuaW1wb3J0IHsgR3JhcGhpY3NTdHJpbmcgfSBmcm9tICcuL3N0cmluZyc7XG5leHBvcnQgdmFyIFJlY3RhbmdsZURhdGE7XG4oZnVuY3Rpb24gKFJlY3RhbmdsZURhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCB3aWR0aCA9IDAsIGhlaWdodCA9IDAsIH0gPSBkYXRhO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHgsIHkpO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHggKyB3aWR0aCwgeSArIGhlaWdodCk7XG4gICAgfVxuICAgIFJlY3RhbmdsZURhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoUmVjdGFuZ2xlRGF0YSB8fCAoUmVjdGFuZ2xlRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIEVsbGlwc2VEYXRhO1xuKGZ1bmN0aW9uIChFbGxpcHNlRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHJhZGl1cyA9IDAsIHJhZGl1c1gsIHJhZGl1c1ksIH0gPSBkYXRhO1xuICAgICAgICBjb25zdCByeCA9IHJhZGl1c1ggPz8gcmFkaXVzO1xuICAgICAgICBjb25zdCByeSA9IHJhZGl1c1kgPz8gcmFkaXVzO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHggLSByeCwgeSAtIHJ5KTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4ICsgcngsIHkgKyByeSk7XG4gICAgfVxuICAgIEVsbGlwc2VEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEVsbGlwc2VEYXRhIHx8IChFbGxpcHNlRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIFBhdGhEYXRhO1xuKGZ1bmN0aW9uIChQYXRoRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoRGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcGF0aERhdGE7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIEdyYXBoaWNzU3RyaW5nLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBkYXRhW2ldO1xuICAgICAgICAgICAgICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyhjb21tYW5kLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFBhdGhEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFBhdGhEYXRhIHx8IChQYXRoRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIEdyYXBoaWNzRGF0YTtcbihmdW5jdGlvbiAoR3JhcGhpY3NEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IGRhdGE7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAncmVjdGFuZ2xlJzpcbiAgICAgICAgICAgICAgICBSZWN0YW5nbGVEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICAgICAgICAgICAgRWxsaXBzZURhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwYXRoJzpcbiAgICAgICAgICAgICAgICBQYXRoRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEdyYXBoaWNzRGF0YSB8fCAoR3JhcGhpY3NEYXRhID0ge30pKTtcbiIsImltcG9ydCB7IEJvdW5kcyB9IGZyb20gJ0BqZW5nL2dlb20nO1xuZXhwb3J0IHZhciBQYXRoQ29tbWFuZDtcbihmdW5jdGlvbiAoUGF0aENvbW1hbmQpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aCwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gcGF0aDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdtb3ZlVG8nOlxuICAgICAgICAgICAgY2FzZSAnbGluZVRvJzpcbiAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgbW92ZVRvLnggPz8gMCwgbW92ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjdXJ2ZVRvJzpcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1cnZlVG8uY3ggPz8gMCwgY3VydmVUby5jeSA/PyAwKTtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1cnZlVG8ueCA/PyAwLCBjdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjdWJpY0N1cnZlVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8uY3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLmN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLnN4ID8/IDAsIGN1YmljQ3VydmVUby5zeSA/PyAwKTtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby54ID8/IDAsIGN1YmljQ3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShQYXRoQ29tbWFuZCB8fCAoUGF0aENvbW1hbmQgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGF0aENvbW1hbmQsIH0gZnJvbSAnLi9wYXRoJztcbmNvbnN0IE5VTUJFUlNfQ09VTlQgPSB7XG4gICAgTTogMixcbiAgICBtOiAyLFxuICAgIEw6IDIsXG4gICAgbDogMixcbiAgICBIOiAxLFxuICAgIGg6IDEsXG4gICAgVjogMSxcbiAgICB2OiAxLFxuICAgIEM6IDYsXG4gICAgYzogNixcbiAgICBTOiA0LFxuICAgIHM6IDQsXG4gICAgUTogNCxcbiAgICBxOiA0LFxuICAgIFQ6IDIsXG4gICAgdDogMixcbn07XG5jb25zdCBDT01NQU5EX1JFR0VYID0gL1tNbUxsSGhWdkNjU3NRcVR0XS87XG5jb25zdCBOVU1CRVJfUkVHRVggPSAvWy0rXT9bXFxkLl0rLztcbmV4cG9ydCBjbGFzcyBHcmFwaGljc1N0cmluZ1N0cmVhbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9ICcnO1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgdGhpcy5zeW1ib2xSZWdleCA9IC9bTW1MbEhoVnZDY1NzUXFUdF18Wy0rXT9bXFxkLl0rL2c7XG4gICAgfVxuICAgIHNldFBhdGgocGF0aCkge1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLnN5bWJvbFJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgfVxuICAgIGdldENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmQ7XG4gICAgfVxuICAgIGdldEJ1ZmZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyO1xuICAgIH1cbiAgICByZWFkTmV4dCgpIHtcbiAgICAgICAgY29uc3QgeyBsYXN0SW5kZXggfSA9IHRoaXMuc3ltYm9sUmVnZXg7XG4gICAgICAgIGNvbnN0IHN5bWJvbE1hdGNoID0gdGhpcy5zeW1ib2xSZWdleC5leGVjKHRoaXMucGF0aCk7XG4gICAgICAgIGlmICghc3ltYm9sTWF0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sTWF0Y2hbMF07XG4gICAgICAgIGlmIChDT01NQU5EX1JFR0VYLnRlc3Qoc3ltYm9sKSkge1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kID0gc3ltYm9sO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKE5VTUJFUl9SRUdFWC50ZXN0KHN5bWJvbCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sUmVnZXgubGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY29tbWFuZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvdW50ID0gTlVNQkVSU19DT1VOVFt0aGlzLmNvbW1hbmRdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlck1hdGNoID0gdGhpcy5zeW1ib2xSZWdleC5leGVjKHRoaXMucGF0aCk7XG4gICAgICAgICAgICBpZiAobnVtYmVyTWF0Y2ggJiYgTlVNQkVSX1JFR0VYLnRlc3QobnVtYmVyTWF0Y2hbMF0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWZmZXJbaV0gPSBwYXJzZUZsb2F0KG51bWJlck1hdGNoWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU3RyaW5nUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBuZXcgR3JhcGhpY3NTdHJpbmdTdHJlYW0oKTtcbiAgICAgICAgdGhpcy5jb21tYW5kID0geyB0eXBlOiAnbW92ZVRvJyB9O1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgICAgIHRoaXMubGFzdFkgPSAwO1xuICAgICAgICB0aGlzLmxhc3RDWCA9IDA7XG4gICAgICAgIHRoaXMubGFzdENZID0gMDtcbiAgICB9XG4gICAgc2V0UGF0aChwYXRoKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtLnNldFBhdGgocGF0aCk7XG4gICAgICAgIHRoaXMubGFzdFggPSAwO1xuICAgICAgICB0aGlzLmxhc3RZID0gMDtcbiAgICAgICAgdGhpcy5sYXN0Q1ggPSAwO1xuICAgICAgICB0aGlzLmxhc3RDWSA9IDA7XG4gICAgICAgIHRoaXMuY29tbWFuZEV4aXN0cyA9IGZhbHNlO1xuICAgIH1cbiAgICBnZXRDb21tYW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kRXhpc3RzID8gdGhpcy5jb21tYW5kIDogbnVsbDtcbiAgICB9XG4gICAgcmVhZE5leHQoKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtLnJlYWROZXh0KCk7XG4gICAgICAgIHRoaXMucGFyc2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZEV4aXN0cztcbiAgICB9XG4gICAgcGFyc2UoKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSB0aGlzLnN0cmVhbS5nZXRDb21tYW5kKCk7XG4gICAgICAgIHRoaXMuY29tbWFuZEV4aXN0cyA9ICEhY29tbWFuZDtcbiAgICAgICAgaWYgKCF0aGlzLmNvbW1hbmRFeGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidWZmZXIgPSB0aGlzLnN0cmVhbS5nZXRCdWZmZXIoKTtcbiAgICAgICAgY29uc3QgW2UwLCBlMSwgZTIsIGUzLCBlNCwgZTUsXSA9IGJ1ZmZlcjtcbiAgICAgICAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ21vdmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnkgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IG1vdmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbW92ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdtb3ZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby54ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IG1vdmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbW92ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBsaW5lVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBsaW5lVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBsaW5lVG8ueDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1YnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd2JzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IGUwICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeCA9IGUyO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMztcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSBlNDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnkgPSBlNTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeCA9IGUyICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0gZTMgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IGU0ICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnkgPSBlNSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IGUyO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSB0aGlzLmxhc3RDWDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0gdGhpcy5sYXN0Q1k7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IGUyICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnkgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IGUyO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSBlMztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdXJ2ZVRvLnggLSAoY3VydmVUby5jeCAtIGN1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3VydmVUby55IC0gKGN1cnZlVG8uY3kgLSBjdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IGUyICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0gZTMgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gdGhpcy5sYXN0Q1k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdXJ2ZVRvLnggLSAoY3VydmVUby5jeCAtIGN1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3VydmVUby55IC0gKGN1cnZlVG8uY3kgLSBjdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSB0aGlzLmxhc3RDWDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IHRoaXMubGFzdENZO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdXJ2ZVRvLnggLSAoY3VydmVUby5jeCAtIGN1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3VydmVUby55IC0gKGN1cnZlVG8uY3kgLSBjdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5jb25zdCByZWFkZXIgPSBuZXcgR3JhcGhpY3NTdHJpbmdSZWFkZXIoKTtcbmV4cG9ydCB2YXIgR3JhcGhpY3NTdHJpbmc7XG4oZnVuY3Rpb24gKEdyYXBoaWNzU3RyaW5nKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKHBhdGgsIGJvdW5kcykge1xuICAgICAgICByZWFkZXIuc2V0UGF0aChwYXRoKTtcbiAgICAgICAgd2hpbGUgKHJlYWRlci5yZWFkTmV4dCgpKSB7XG4gICAgICAgICAgICBjb25zdCBjb21tYW5kID0gcmVhZGVyLmdldENvbW1hbmQoKTtcbiAgICAgICAgICAgIGlmIChjb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgUGF0aENvbW1hbmQuY2FsY3VsYXRlQm91bmRzKGNvbW1hbmQsIGJvdW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgR3JhcGhpY3NTdHJpbmcuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoR3JhcGhpY3NTdHJpbmcgfHwgKEdyYXBoaWNzU3RyaW5nID0ge30pKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoaWNzIHtcbiAgICBjb25zdHJ1Y3RvcihzaGFwZSkge1xuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGU7XG4gICAgfVxuICAgIGJlZ2luRmlsbChjb2xvciA9IDAsIGFscGhhID0gMSkge1xuICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAnc29saWQnLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYmVnaW5CaXRtYXBGaWxsKHNyYywgbWF0cml4LCByZXBlYXQgPSB0cnVlLCBzbW9vdGggPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAnYml0bWFwJyxcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHJlcGVhdCxcbiAgICAgICAgICAgIHNtb290aCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYmVnaW5HcmFkaWVudEZpbGwodHlwZSwgY29sb3IsIGFscGhhLCByYXRpbywgbWF0cml4LCBzcHJlYWQgPSAncmVwZWF0JywgaW50ZXJwb2xhdGlvbiA9ICdyZ2InLCBmb2NhbFBvaW50UmF0aW8gPSAwKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICBzcHJlYWQsXG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9uLFxuICAgICAgICAgICAgZm9jYWxQb2ludFJhdGlvLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsaW5lU3R5bGUodGhpY2tuZXNzID0gMCwgY29sb3IgPSAwLCBhbHBoYSA9IDEsIHBpeGVsSGludGluZyA9IGZhbHNlLCBzY2FsZU1vZGUgPSAnbm9uZScsIGNhcHMgPSAncm91bmQnLCBqb2ludHMgPSAncm91bmQnLCBtaXRlckxpbWl0ID0gMykge1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHtcbiAgICAgICAgICAgIHRoaWNrbmVzcyxcbiAgICAgICAgICAgIHBpeGVsSGludGluZyxcbiAgICAgICAgICAgIHNjYWxlTW9kZSxcbiAgICAgICAgICAgIGNhcHMsXG4gICAgICAgICAgICBqb2ludHMsXG4gICAgICAgICAgICBtaXRlckxpbWl0LFxuICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsaW5lR3JhZGllbnRTdHlsZSh0eXBlLCBjb2xvciwgYWxwaGEsIHJhdGlvLCBtYXRyaXgsIHNwcmVhZCA9ICdyZXBlYXQnLCBpbnRlcnBvbGF0aW9uID0gJ3JnYicsIGZvY2FsUG9pbnRSYXRpbyA9IDApIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0cm9rZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Ryb2tlLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgc3ByZWFkLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGlvbixcbiAgICAgICAgICAgIGZvY2FsUG9pbnRSYXRpbyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGluZUJpdG1hcFN0eWxlKHNyYywgbWF0cml4LCByZXBlYXQgPSB0cnVlLCBzbW9vdGggPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXRoaXMuc3Ryb2tlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHJva2UuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdiaXRtYXAnLFxuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgcmVwZWF0LFxuICAgICAgICAgICAgc21vb3RoLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBtb3ZlVG8oeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5iZWdpblBhdGgoKTtcbiAgICAgICAgcGF0aC5wdXNoKHsgdHlwZTogJ21vdmVUbycsIHgsIHkgfSk7XG4gICAgfVxuICAgIGxpbmVUbyh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHsgdHlwZTogJ2xpbmVUbycsIHgsIHkgfSk7XG4gICAgfVxuICAgIGN1cnZlVG8oY3gsIGN5LCB4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdXJ2ZVRvJywgY3gsIGN5LCB4LCB5LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY3ViaWNDdXJ2ZVRvKGN4LCBjeSwgc3gsIHN5LCB4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdXJ2ZVRvJywgY3gsIGN5LCBzeCwgc3ksIHgsIHksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkcmF3Um91bmRSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIGVsbGlwc2VXaWR0aCA9IDAsIGVsbGlwc2VIZWlnaHQgPSAwKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICBjb25zdCB3ID0gZWxsaXBzZVdpZHRoO1xuICAgICAgICBjb25zdCBoID0gZWxsaXBzZUhlaWdodDtcbiAgICAgICAgY29uc3QgayA9IDAuNTUyMjg0ODtcbiAgICAgICAgY29uc3Qgb3ggPSAodyAvIDIpICogaztcbiAgICAgICAgY29uc3Qgb3kgPSAoaCAvIDIpICogaztcbiAgICAgICAgY29uc3QgeGUgPSB4ICsgdztcbiAgICAgICAgY29uc3QgeWUgPSB5ICsgaDtcbiAgICAgICAgY29uc3QgeG0gPSB4ICsgdyAvIDI7XG4gICAgICAgIGNvbnN0IHltID0geSArIGggLyAyO1xuICAgICAgICBjb25zdCBkeCA9IHdpZHRoIC0gdztcbiAgICAgICAgY29uc3QgZHkgPSBoZWlnaHQgLSBoO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ21vdmVUbycsXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeTogeW0sXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeCxcbiAgICAgICAgICAgIGN5OiB5bSAtIG95LFxuICAgICAgICAgICAgc3g6IHhtIC0gb3gsXG4gICAgICAgICAgICBzeTogeSxcbiAgICAgICAgICAgIHg6IHhtLFxuICAgICAgICAgICAgeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhtICsgZHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhtICsgb3ggKyBkeCxcbiAgICAgICAgICAgIGN5OiB5LFxuICAgICAgICAgICAgc3g6IHhlICsgZHgsXG4gICAgICAgICAgICBzeTogeW0gLSBveSxcbiAgICAgICAgICAgIHg6IHhlICsgZHgsXG4gICAgICAgICAgICB5OiB5bSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhlICsgZHgsXG4gICAgICAgICAgICB5OiB5bSArIGR5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhlICsgZHgsXG4gICAgICAgICAgICBjeTogeW0gKyBveSArIGR5LFxuICAgICAgICAgICAgc3g6IHhtICsgb3ggKyBkeCxcbiAgICAgICAgICAgIHN5OiB5ZSArIGR5LFxuICAgICAgICAgICAgeDogeG0gKyBkeCxcbiAgICAgICAgICAgIHk6IHllICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVUbycsXG4gICAgICAgICAgICB4OiB4bSxcbiAgICAgICAgICAgIHk6IHllICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeG0gLSBveCxcbiAgICAgICAgICAgIGN5OiB5ZSArIGR5LFxuICAgICAgICAgICAgc3g6IHgsXG4gICAgICAgICAgICBzeTogeW0gKyBveSArIGR5LFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHk6IHltICsgZHksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkcmF3UmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ3JlY3RhbmdsZSc7XG4gICAgICAgIGRhdGEueCA9IHg7XG4gICAgICAgIGRhdGEueSA9IHk7XG4gICAgICAgIGRhdGEud2lkdGggPSB3aWR0aDtcbiAgICAgICAgZGF0YS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIGRyYXdDaXJjbGUoeCwgeSwgcmFkaXVzKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ2VsbGlwc2UnO1xuICAgICAgICBkYXRhLnggPSB4O1xuICAgICAgICBkYXRhLnkgPSB5O1xuICAgICAgICBkYXRhLnJhZGl1cyA9IHJhZGl1cztcbiAgICB9XG4gICAgZHJhd0VsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEudHlwZSA9ICdlbGxpcHNlJztcbiAgICAgICAgZGF0YS5yYWRpdXNYID0gd2lkdGggLyAyO1xuICAgICAgICBkYXRhLnJhZGl1c1kgPSBoZWlnaHQgLyAyO1xuICAgICAgICBkYXRhLnggPSB4IC0gZGF0YS5yYWRpdXNYO1xuICAgICAgICBkYXRhLnkgPSB5IC0gZGF0YS5yYWRpdXNZO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2hhcGUuZGF0YTtcbiAgICB9XG4gICAgY3JlYXRlRGF0YSgpIHtcbiAgICAgICAgY29uc3QgeyBzaGFwZSwgZmlsbCwgc3Ryb2tlIH0gPSB0aGlzO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzaGFwZS5kYXRhKSkge1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzaGFwZS5kYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgc2hhcGUuZGF0YSA9IFtzaGFwZS5kYXRhXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNoYXBlLmRhdGEgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBncmFwaGljc0RhdGEgPSB7IHR5cGU6ICdwYXRoJywgZmlsbCwgc3Ryb2tlIH07XG4gICAgICAgIHNoYXBlLmRhdGEucHVzaChncmFwaGljc0RhdGEpO1xuICAgICAgICByZXR1cm4gZ3JhcGhpY3NEYXRhO1xuICAgIH1cbiAgICBiZWdpblBhdGgoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS5kYXRhID0gW107XG4gICAgICAgIHJldHVybiBkYXRhLmRhdGE7XG4gICAgfVxuICAgIGdldFBhdGgoKSB7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUgfSA9IHRoaXM7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzaGFwZS5kYXRhKSB8fCAhc2hhcGUuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHNoYXBlLmRhdGFbc2hhcGUuZGF0YS5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEuZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2RhdGEvZGF0YSc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvcGF0aCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvc3RyaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9zdHlsZSc7XG5leHBvcnQgKiBmcm9tICcuL2dyYXBoaWNzJztcbmV4cG9ydCAqIGZyb20gJy4vc2hhcGUnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMvc2hhcGUnO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IEJvdW5kcywgUmVjdGFuZ2xlIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcbmltcG9ydCB7IEdyYXBoaWNzRGF0YSB9IGZyb20gJy4vZGF0YS9kYXRhJztcbmltcG9ydCBHcmFwaGljcyBmcm9tICcuL2dyYXBoaWNzJztcbmV4cG9ydCBjb25zdCBTSEFQRSA9ICdzaGFwZSc7XG5jb25zdCBib3VuZHMgPSBCb3VuZHMuZW1wdHkoKTtcbmV4cG9ydCB2YXIgU2hhcGU7XG4oZnVuY3Rpb24gKFNoYXBlKSB7XG4gICAgZnVuY3Rpb24gZ2V0R3JhcGhpY3Moc2hhcGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaGljcyhzaGFwZSk7XG4gICAgfVxuICAgIFNoYXBlLmdldEdyYXBoaWNzID0gZ2V0R3JhcGhpY3M7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKHNoYXBlLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBzaGFwZTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBCb3VuZHMuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YVtpXSwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCb3VuZHMuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3aWR0aCA9IGJvdW5kcy5tYXhYIC0gYm91bmRzLm1pblg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGJvdW5kcy5tYXhZIC0gYm91bmRzLm1pblk7XG4gICAgICAgIGNvbnN0IHggPSBib3VuZHMubWluWCArIFBpdm90LmdldFgoc2hhcGUsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IGJvdW5kcy5taW5ZICsgUGl2b3QuZ2V0WShzaGFwZSwgaGVpZ2h0KTtcbiAgICAgICAgcmVzdWx0LnggPSB4O1xuICAgICAgICByZXN1bHQueSA9IHk7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHdpZHRoO1xuICAgICAgICByZXN1bHQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBTaGFwZS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShTaGFwZSB8fCAoU2hhcGUgPSB7fSkpO1xuY29uc3QgcmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIFNoYXBlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChTaGFwZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGhpdFRlc3Qoc2hhcGUsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGxvY2FsIH0gPSBlbmdpbmUucG9pbnRlcnM7XG4gICAgICAgIFNoYXBlLmNhbGN1bGF0ZUJvdW5kcyhzaGFwZSwgcmVjdGFuZ2xlKTtcbiAgICAgICAgcmV0dXJuIFJlY3RhbmdsZS5jb250YWlucyhyZWN0YW5nbGUsIGxvY2FsKTtcbiAgICB9XG4gICAgU2hhcGVFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoU0hBUEUsIGhpdFRlc3QpO1xuICAgICAgICBJbWFnZVJlc291cmNlLmluaXQoZW5naW5lKTtcbiAgICB9XG4gICAgU2hhcGVFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShTaGFwZUV4dGVuc2lvbiB8fCAoU2hhcGVFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IENhbnZhc1BhdHRlcm5zIH0gZnJvbSAnQGplbmcvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBGb250IH0gZnJvbSAnLi4vZGF0YS9mb250JztcbmltcG9ydCB7IFRleHRFeHRlbnNpb24sIFRFWFQsIFRleHQgfSBmcm9tICcuLi90ZXh0JztcbmltcG9ydCB7IFRleHRGb3JtYXQgfSBmcm9tICcuLi9kYXRhL2Zvcm1hdCc7XG5pbXBvcnQgeyBUZXh0TWV0cmljcyB9IGZyb20gJy4uL2RhdGEvbWV0cmljcyc7XG5jb25zdCBkZWZhdWx0VGV4dEZvcm1hdCA9IHt9O1xuY29uc3QgQ09SUkVDVElPTiA9IDAuODU7XG5leHBvcnQgdmFyIENhbnZhc1RleHRFeHRlbnNpb247XG4oZnVuY3Rpb24gKENhbnZhc1RleHRFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoY29tcG9uZW50LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBtYXRyaXgsIGNvbG9yVHJhbnNmb3JtIH0gPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoVGV4dC5pc1VwZGF0ZU1ldHJpY3MoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgVGV4dC51cGRhdGVNZXRyaWNzKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBtZXRyaWNzIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghbWV0cmljcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZm9ybWF0LCBib3JkZXIsIGJhY2tncm91bmQsIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIFRleHRGb3JtYXQuY29tYmluZShmb3JtYXQsIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQsIGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgY29uc3QgcmVhbFdpZHRoID0gd2lkdGggPz8gbWV0cmljcy53aWR0aDtcbiAgICAgICAgY29uc3QgcmVhbEhlaWdodCA9IGhlaWdodCA/PyBtZXRyaWNzLmhlaWdodDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IFBpdm90LmdldFgoY29tcG9uZW50LCByZWFsV2lkdGgpO1xuICAgICAgICBjb25zdCBvZmZzZXRZID0gUGl2b3QuZ2V0WShjb21wb25lbnQsIHJlYWxIZWlnaHQpO1xuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBlbmdpbmUucGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgIGlmIChiYWNrZ3JvdW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICcnO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihiYWNrZ3JvdW5kLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQucmVjdChvZmZzZXRYLCBvZmZzZXRZLCByZWFsV2lkdGgsIHJlYWxIZWlnaHQpO1xuICAgICAgICAgICAgY29udGV4dDJkLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihib3JkZXIsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcbiAgICAgICAgICAgIGNvbnRleHQyZC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5yZWN0KG9mZnNldFgsIG9mZnNldFksIHJlYWxXaWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dDJkLnRleHRCYXNlbGluZSA9ICdhbHBoYWJldGljJztcbiAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gJyc7XG4gICAgICAgIGNvbnN0IHNpbXBsZSA9IFRleHQuaXNTaW1wbGUoY29tcG9uZW50KTtcbiAgICAgICAgaWYgKHNpbXBsZSkge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGNvbXBvbmVudC50ZXh0O1xuICAgICAgICAgICAgY29uc3QgeyBzaXplLCBjb2xvciwgYWxwaGEsIGxlYWRpbmcsIGxldHRlclNwYWNpbmcsIH0gPSBkZWZhdWx0VGV4dEZvcm1hdDtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRGb250ID0gRm9udC5nZXRGb250KGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbFNpemUgPSBzaXplICogQ09SUkVDVElPTjtcbiAgICAgICAgICAgIGNvbnN0IGFsaWduVmFsdWUgPSBUZXh0Rm9ybWF0LmdldEFsaWduVmFsdWUoZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICAgICAgY29udGV4dDJkLmZvbnQgPSBGb250LmdldFN0eWxlKGRlZmF1bHRGb250LCBzaXplKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oY29sb3IsIGFscGhhLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBsZXQgeCA9IG9mZnNldFggKyBhbGlnblZhbHVlID8gYWxpZ25WYWx1ZSAqIChyZWFsV2lkdGggLSBUZXh0TWV0cmljcy5nZXRTaW1wbGVXaWR0aChkZWZhdWx0VGV4dEZvcm1hdCwgdGV4dCwgMCkpIDogMDtcbiAgICAgICAgICAgIGxldCB5ID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHRleHRbaV07XG4gICAgICAgICAgICAgICAgaWYgKHN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGFsaWduVmFsdWUgPyBhbGlnblZhbHVlICogKHJlYWxXaWR0aCAtIFRleHRNZXRyaWNzLmdldFNpbXBsZVdpZHRoKGRlZmF1bHRUZXh0Rm9ybWF0LCB0ZXh0LCBpICsgMSkpIDogMDtcbiAgICAgICAgICAgICAgICAgICAgeSArPSBzaXplICsgbGVhZGluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSB0ZXh0W2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShkZWZhdWx0Rm9udCwgc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIGxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5maWxsVGV4dChzeW1ib2wsIHgsIHkgKyBzeW1ib2xTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgeCArPSBhZHZhbmNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB5ID0gMDtcbiAgICAgICAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGlnblZlcnRpY2FsVmFsdWUgPSBUZXh0Rm9ybWF0LmdldFZlcnRpY2FsQWxpZ25WYWx1ZShkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgICAgICAgICAgeSA9IChoZWlnaHQgLSBtZXRyaWNzLmhlaWdodCkgKiBhbGlnblZlcnRpY2FsVmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHkgKz0gb2Zmc2V0WTtcbiAgICAgICAgICAgIGNvbnN0IHsgbGluZXMgfSA9IG1ldHJpY3M7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChsaW5lLnN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gbGluZS5zeW1ib2xzWzBdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbGlnblZhbHVlID0gVGV4dEZvcm1hdC5nZXRBbGlnblZhbHVlKGZpcnN0LmZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gKHJlYWxXaWR0aCAtIGxpbmUud2lkdGgpICogYWxpZ25WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4ICs9IG9mZnNldFg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc3ltYm9scyB9ID0gbGluZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZUhlaWdodCA9IGxpbmUuaGVpZ2h0ICogQ09SUkVDVElPTjtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzeW1ib2xzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHN5bWJvbC5mb3JtYXQuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsaWduU3ltYm9sVmFsdWUgPSBUZXh0Rm9ybWF0LmdldFZlcnRpY2FsQWxpZ25WYWx1ZShzeW1ib2wuZm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbFNpemUgPSBzaXplICogQ09SUkVDVElPTjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvbnQgPSBGb250LmdldEZvbnQoc3ltYm9sLmZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0MmQuZm9udCA9IEZvbnQuZ2V0U3R5bGUoc3ltYm9sRm9udCwgc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKHN5bWJvbC5mb3JtYXQuY29sb3IsIHN5bWJvbC5mb3JtYXQuYWxwaGEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5maWxsVGV4dChzeW1ib2wuc3ltYm9sLCB4LCB5ICsgc3ltYm9sU2l6ZSArIGFsaWduU3ltYm9sVmFsdWUgKiAobGluZUhlaWdodCAtIHN5bWJvbFNpemUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gc3ltYm9sLmFkdmFuY2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeSArPSBsaW5lLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNUZXh0RXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBUZXh0RXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChURVhULCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNUZXh0RXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ2FudmFzVGV4dEV4dGVuc2lvbiB8fCAoQ2FudmFzVGV4dEV4dGVuc2lvbiA9IHt9KSk7XG4iLCJjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmV4cG9ydCBjb25zdCBFTSA9IDEwMjQ7XG5jb25zdCBmb250cyA9IG5ldyBNYXAoKTtcbmV4cG9ydCB2YXIgRm9udDtcbihmdW5jdGlvbiAoRm9udCkge1xuICAgIGZ1bmN0aW9uIGdldFN0eWxlKGZvbnQsIHNpemUpIHtcbiAgICAgICAgcmV0dXJuIGZvbnQubmFtZS5yZXBsYWNlKCclJywgc2l6ZS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgRm9udC5nZXRTdHlsZSA9IGdldFN0eWxlO1xuICAgIGZ1bmN0aW9uIG1lYXN1cmVUZXh0KGZvbnQsIHNpemUsIHRleHQpIHtcbiAgICAgICAgY29udGV4dC5mb250ID0gZ2V0U3R5bGUoZm9udCwgc2l6ZSk7XG4gICAgICAgIHJldHVybiBjb250ZXh0Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xuICAgIH1cbiAgICBGb250Lm1lYXN1cmVUZXh0ID0gbWVhc3VyZVRleHQ7XG4gICAgZnVuY3Rpb24gZ2V0Q2hhcldpZHRoKGZvbnQsIGNoYXIpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gZm9udC53aWR0aHMuZ2V0KGNoYXIpO1xuICAgICAgICBpZiAoIXdpZHRoKSB7XG4gICAgICAgICAgICB3aWR0aCA9IG1lYXN1cmVUZXh0KGZvbnQsIEVNLCBjaGFyKTtcbiAgICAgICAgICAgIGZvbnQud2lkdGhzLnNldChjaGFyLCB3aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cbiAgICBGb250LmdldENoYXJXaWR0aCA9IGdldENoYXJXaWR0aDtcbiAgICBmdW5jdGlvbiBnZXRLZXJuaW5nKGZvbnQsIGZpcnN0LCBzZWNvbmQpIHtcbiAgICAgICAgY29uc3QgcGFpciA9IGZpcnN0ICsgc2Vjb25kO1xuICAgICAgICBsZXQga2VybmluZyA9IGZvbnQua2VybmluZ3MuZ2V0KHBhaXIpO1xuICAgICAgICBpZiAoIWtlcm5pbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoU2Vjb25kID0gZ2V0Q2hhcldpZHRoKGZvbnQsIHNlY29uZCk7XG4gICAgICAgICAgICBjb25zdCB3aWR0aFRvdGFsID0gbWVhc3VyZVRleHQoZm9udCwgRU0sIGZpcnN0ICsgc2Vjb25kKTtcbiAgICAgICAgICAgIGtlcm5pbmcgPSB3aWR0aFRvdGFsIC0gd2lkdGhTZWNvbmQ7XG4gICAgICAgICAgICBmb250Lmtlcm5pbmdzLnNldChwYWlyLCBrZXJuaW5nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2VybmluZztcbiAgICB9XG4gICAgRm9udC5nZXRLZXJuaW5nID0gZ2V0S2VybmluZztcbiAgICBmdW5jdGlvbiBnZXRBZHZhbmNlKGZvbnQsIHNpemUsIGZpcnN0LCBzZWNvbmQpIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBzaXplIC8gRU07XG4gICAgICAgIGNvbnN0IHdpZHRoID0gZ2V0Q2hhcldpZHRoKGZvbnQsIGZpcnN0KTtcbiAgICAgICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgICAgIHJldHVybiB3aWR0aCAqIHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtlcm5pbmcgPSBnZXRLZXJuaW5nKGZvbnQsIGZpcnN0LCBzZWNvbmQpO1xuICAgICAgICByZXR1cm4ga2VybmluZyAqIHNjYWxlO1xuICAgIH1cbiAgICBGb250LmdldEFkdmFuY2UgPSBnZXRBZHZhbmNlO1xuICAgIGZ1bmN0aW9uIGdldEZvbnQoZm9ybWF0KSB7XG4gICAgICAgIGxldCBuYW1lID0gJyc7XG4gICAgICAgIGlmIChmb3JtYXQuYm9sZCkge1xuICAgICAgICAgICAgbmFtZSArPSAnYm9sZCAnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQuaXRhbGljKSB7XG4gICAgICAgICAgICBuYW1lICs9ICdpdGFsaWMgJztcbiAgICAgICAgfVxuICAgICAgICBuYW1lICs9IGAlcHggJHtmb3JtYXQuZm9udH1gO1xuICAgICAgICBsZXQgZm9udCA9IGZvbnRzLmdldChuYW1lKTtcbiAgICAgICAgaWYgKCFmb250KSB7XG4gICAgICAgICAgICBmb250ID0ge1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgd2lkdGhzOiBuZXcgTWFwKCksXG4gICAgICAgICAgICAgICAga2VybmluZ3M6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb250cy5zZXQobmFtZSwgZm9udCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvbnQ7XG4gICAgfVxuICAgIEZvbnQuZ2V0Rm9udCA9IGdldEZvbnQ7XG59KShGb250IHx8IChGb250ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgVGV4dEZvcm1hdDtcbihmdW5jdGlvbiAoVGV4dEZvcm1hdCkge1xuICAgIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQgPSB7XG4gICAgICAgIGZvbnQ6ICdhcmlhbCcsXG4gICAgICAgIHNpemU6IDE1LFxuICAgICAgICBjb2xvcjogMCxcbiAgICAgICAgYWxwaGE6IDEsXG4gICAgICAgIGJvbGQ6IGZhbHNlLFxuICAgICAgICBpdGFsaWM6IGZhbHNlLFxuICAgICAgICB1bmRlcmxpbmU6IGZhbHNlLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwLFxuICAgICAgICBsZWFkaW5nOiAwLFxuICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGNvbWJpbmUoc291cmNlLCBkZWZhdWx0Rm9ybWF0LCByZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0LmZvbnQgPSBzb3VyY2U/LmZvbnQgPz8gZGVmYXVsdEZvcm1hdC5mb250O1xuICAgICAgICByZXN1bHQuc2l6ZSA9IHNvdXJjZT8uc2l6ZSA/PyBkZWZhdWx0Rm9ybWF0LnNpemU7XG4gICAgICAgIHJlc3VsdC5jb2xvciA9IHNvdXJjZT8uY29sb3IgPz8gZGVmYXVsdEZvcm1hdC5jb2xvcjtcbiAgICAgICAgcmVzdWx0LmFscGhhID0gc291cmNlPy5hbHBoYSA/PyBkZWZhdWx0Rm9ybWF0LmFscGhhO1xuICAgICAgICByZXN1bHQuYm9sZCA9IHNvdXJjZT8uYm9sZCA/PyBkZWZhdWx0Rm9ybWF0LmJvbGQ7XG4gICAgICAgIHJlc3VsdC5pdGFsaWMgPSBzb3VyY2U/Lml0YWxpYyA/PyBkZWZhdWx0Rm9ybWF0Lml0YWxpYztcbiAgICAgICAgcmVzdWx0LnVuZGVybGluZSA9IHNvdXJjZT8udW5kZXJsaW5lID8/IGRlZmF1bHRGb3JtYXQudW5kZXJsaW5lO1xuICAgICAgICByZXN1bHQubGV0dGVyU3BhY2luZyA9IHNvdXJjZT8ubGV0dGVyU3BhY2luZyA/PyBkZWZhdWx0Rm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgICAgIHJlc3VsdC5sZWFkaW5nID0gc291cmNlPy5sZWFkaW5nID8/IGRlZmF1bHRGb3JtYXQubGVhZGluZztcbiAgICAgICAgcmVzdWx0LmFsaWduID0gc291cmNlPy5hbGlnbiA/PyBkZWZhdWx0Rm9ybWF0LmFsaWduO1xuICAgICAgICByZXN1bHQudmVydGljYWxBbGlnbiA9IHNvdXJjZT8udmVydGljYWxBbGlnbiA/PyBkZWZhdWx0Rm9ybWF0LnZlcnRpY2FsQWxpZ247XG4gICAgfVxuICAgIFRleHRGb3JtYXQuY29tYmluZSA9IGNvbWJpbmU7XG4gICAgZnVuY3Rpb24gY29weShzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICB0YXJnZXQuZm9udCA9IHNvdXJjZS5mb250O1xuICAgICAgICB0YXJnZXQuc2l6ZSA9IHNvdXJjZS5zaXplO1xuICAgICAgICB0YXJnZXQuY29sb3IgPSBzb3VyY2UuY29sb3I7XG4gICAgICAgIHRhcmdldC5hbHBoYSA9IHNvdXJjZS5hbHBoYTtcbiAgICAgICAgdGFyZ2V0LmJvbGQgPSBzb3VyY2UuYm9sZDtcbiAgICAgICAgdGFyZ2V0Lml0YWxpYyA9IHNvdXJjZS5pdGFsaWM7XG4gICAgICAgIHRhcmdldC51bmRlcmxpbmUgPSBzb3VyY2UudW5kZXJsaW5lO1xuICAgICAgICB0YXJnZXQubGV0dGVyU3BhY2luZyA9IHNvdXJjZS5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICB0YXJnZXQubGVhZGluZyA9IHNvdXJjZS5sZWFkaW5nO1xuICAgICAgICB0YXJnZXQuYWxpZ24gPSBzb3VyY2UuYWxpZ247XG4gICAgICAgIHRhcmdldC52ZXJ0aWNhbEFsaWduID0gc291cmNlLnZlcnRpY2FsQWxpZ247XG4gICAgfVxuICAgIFRleHRGb3JtYXQuY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gZ2V0QWxpZ25WYWx1ZShmb3JtYXQpIHtcbiAgICAgICAgc3dpdGNoIChmb3JtYXQ/LmFsaWduKSB7XG4gICAgICAgICAgICBjYXNlICdsZWZ0JzogcmV0dXJuIDA7XG4gICAgICAgICAgICBjYXNlICdjZW50ZXInOiByZXR1cm4gMC41O1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOiByZXR1cm4gMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRGb3JtYXQuZ2V0QWxpZ25WYWx1ZSA9IGdldEFsaWduVmFsdWU7XG4gICAgZnVuY3Rpb24gZ2V0VmVydGljYWxBbGlnblZhbHVlKGZvcm1hdCkge1xuICAgICAgICBzd2l0Y2ggKGZvcm1hdD8udmVydGljYWxBbGlnbikge1xuICAgICAgICAgICAgY2FzZSAndG9wJzogcmV0dXJuIDA7XG4gICAgICAgICAgICBjYXNlICdtaWRkbGUnOiByZXR1cm4gMC41O1xuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzogcmV0dXJuIDE7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmdldFZlcnRpY2FsQWxpZ25WYWx1ZSA9IGdldFZlcnRpY2FsQWxpZ25WYWx1ZTtcbn0pKFRleHRGb3JtYXQgfHwgKFRleHRGb3JtYXQgPSB7fSkpO1xuIiwiaW1wb3J0IHsgRm9udCB9IGZyb20gJy4vZm9udCc7XG5pbXBvcnQgeyBUZXh0Rm9ybWF0IH0gZnJvbSAnLi9mb3JtYXQnO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uL3RleHQnO1xuY29uc3QgZGVmYXVsdFRleHRGb3JtYXQgPSB7fTtcbmV4cG9ydCB2YXIgVGV4dExpbmU7XG4oZnVuY3Rpb24gKFRleHRMaW5lKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3ltYm9sczogW10sXG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgVGV4dExpbmUuY3JlYXRlID0gY3JlYXRlO1xuICAgIGZ1bmN0aW9uIGVtcHR5KGxpbmUpIHtcbiAgICAgICAgbGluZS5zeW1ib2xzLmxlbmd0aCA9IDA7XG4gICAgICAgIGxpbmUud2lkdGggPSAwO1xuICAgICAgICBsaW5lLmhlaWdodCA9IDA7XG4gICAgfVxuICAgIFRleHRMaW5lLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gYWRkKGxpbmUsIHN5bWJvbCkge1xuICAgICAgICBsaW5lLnN5bWJvbHMucHVzaChzeW1ib2wpO1xuICAgICAgICBsaW5lLndpZHRoICs9IHN5bWJvbC5hZHZhbmNlO1xuICAgICAgICBsaW5lLmhlaWdodCA9IE1hdGgubWF4KGxpbmUuaGVpZ2h0LCBzeW1ib2wuZm9ybWF0LnNpemUgKyBzeW1ib2wuZm9ybWF0LmxlYWRpbmcpO1xuICAgIH1cbiAgICBUZXh0TGluZS5hZGQgPSBhZGQ7XG4gICAgZnVuY3Rpb24gY29uY2F0KHRhcmdldCwgc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2Uuc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRhcmdldC5zeW1ib2xzLnB1c2goLi4uc291cmNlLnN5bWJvbHMpO1xuICAgICAgICAgICAgdGFyZ2V0LndpZHRoICs9IHNvdXJjZS53aWR0aDtcbiAgICAgICAgICAgIHRhcmdldC5oZWlnaHQgPSBNYXRoLm1heCh0YXJnZXQuaGVpZ2h0LCBzb3VyY2UuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0TGluZS5jb25jYXQgPSBjb25jYXQ7XG4gICAgZnVuY3Rpb24gY29ycmVjdFdpZHRoKGxpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzeW1ib2xzIH0gPSBsaW5lO1xuICAgICAgICBpZiAoc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBzeW1ib2xzW3N5bWJvbHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAoL1xccy8udGVzdChsYXN0LnN5bWJvbCkpIHtcbiAgICAgICAgICAgICAgICBzeW1ib2xzLnBvcCgpO1xuICAgICAgICAgICAgICAgIGxpbmUud2lkdGggLT0gbGFzdC5hZHZhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRMaW5lLmNvcnJlY3RXaWR0aCA9IGNvcnJlY3RXaWR0aDtcbiAgICBmdW5jdGlvbiBjb3JyZWN0SGVpZ2h0KGxpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzeW1ib2xzIH0gPSBsaW5lO1xuICAgICAgICBpZiAoc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbMF07XG4gICAgICAgICAgICBsaW5lLmhlaWdodCAtPSBzeW1ib2wuZm9ybWF0LmxlYWRpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dExpbmUuY29ycmVjdEhlaWdodCA9IGNvcnJlY3RIZWlnaHQ7XG59KShUZXh0TGluZSB8fCAoVGV4dExpbmUgPSB7fSkpO1xuZXhwb3J0IHZhciBUZXh0TWV0cmljcztcbihmdW5jdGlvbiAoVGV4dE1ldHJpY3MpIHtcbiAgICBmdW5jdGlvbiBnZXRTeW1ib2xzKGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCB7IHRleHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCF0ZXh0IHx8ICF0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBUZXh0Rm9ybWF0LmNvbWJpbmUoY29tcG9uZW50LmZvcm1hdCwgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCwgZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBjb25zdCBzeW1ib2xzID0gW107XG4gICAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvcm1hdCA9IHt9O1xuICAgICAgICAgICAgVGV4dEZvcm1hdC5jb3B5KGRlZmF1bHRUZXh0Rm9ybWF0LCBzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9udCA9IEZvbnQuZ2V0Rm9udChzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gdGV4dFtpICsgMV07XG4gICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShzeW1ib2xGb250LCBzeW1ib2xGb3JtYXQuc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIHN5bWJvbEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgIHN5bWJvbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgYWR2YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBzeW1ib2xGb3JtYXQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0ZXh0KSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYmxvY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvcm1hdCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBUZXh0Rm9ybWF0LmNvcHkoZGVmYXVsdFRleHRGb3JtYXQsIHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvbnQgPSBGb250LmdldEZvbnQoc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBibG9jay5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gYmxvY2tbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gYmxvY2tbaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShzeW1ib2xGb250LCBzeW1ib2xGb3JtYXQuc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIHN5bWJvbEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9scy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHN5bWJvbEZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb3JtYXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgVGV4dEZvcm1hdC5jb21iaW5lKGJsb2NrLCBkZWZhdWx0VGV4dEZvcm1hdCwgc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9udCA9IEZvbnQuZ2V0Rm9udChzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJsb2NrLnRleHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IGJsb2NrLnRleHRbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gYmxvY2sudGV4dFtqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKHN5bWJvbEZvbnQsIHN5bWJvbEZvcm1hdC5zaXplLCBzeW1ib2wsIHN5bWJvbE5leHQpICsgc3ltYm9sRm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZHZhbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogc3ltYm9sRm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN5bWJvbHM7XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldFN5bWJvbHMgPSBnZXRTeW1ib2xzO1xuICAgIGZ1bmN0aW9uIGdldExpbmVzKGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBzeW1ib2xzID0gZ2V0U3ltYm9scyhjb21wb25lbnQpO1xuICAgICAgICBpZiAoIXN5bWJvbHMgfHwgIXN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIHdvcmRXcmFwID0gZmFsc2UgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgbXVsdGlsaW5lID0gVGV4dC5pc011bHRpbGluZShjb21wb25lbnQpO1xuICAgICAgICBjb25zdCBsaW5lcyA9IFtdO1xuICAgICAgICBsZXQgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICBpZiAobXVsdGlsaW5lKSB7XG4gICAgICAgICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgICAgICAgICBpZiAod29yZFdyYXApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd29yZCA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sLnN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5jb25jYXQobGluZSwgd29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuZW1wdHkod29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQod29yZCwgc3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGluZS53aWR0aCArIHdvcmQud2lkdGggPiB3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKC9cXHMvLnRlc3Qoc3ltYm9sLnN5bWJvbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuY29uY2F0KGxpbmUsIHdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5lbXB0eSh3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuY29uY2F0KGxpbmUsIHdvcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbC5zeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChsaW5lLndpZHRoICsgc3ltYm9sLmFkdmFuY2UgPiB3aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZChsaW5lLCBzeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKGxpbmUsIHN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbC5zeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKGxpbmUsIHN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2ldO1xuICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZChsaW5lLCBzeW1ib2wpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5lLnN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICAgICAgVGV4dExpbmUuY29ycmVjdFdpZHRoKGxpbmUpO1xuICAgICAgICAgICAgICAgIGlmICghbGluZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5oZWlnaHQgPSBkZWZhdWx0VGV4dEZvcm1hdC5zaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbmUgPSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIFRleHRMaW5lLmNvcnJlY3RIZWlnaHQobGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH1cbiAgICBUZXh0TWV0cmljcy5nZXRMaW5lcyA9IGdldExpbmVzO1xuICAgIGZ1bmN0aW9uIGdldE1ldHJpY3MoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gZ2V0TGluZXMoY29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFsaW5lcyB8fCAhbGluZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1ldHJpY3MgPSB7XG4gICAgICAgICAgICBsaW5lcyxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICBtZXRyaWNzLndpZHRoID0gTWF0aC5tYXgobWV0cmljcy53aWR0aCwgbGluZS53aWR0aCk7XG4gICAgICAgICAgICBtZXRyaWNzLmhlaWdodCArPSBsaW5lLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWV0cmljcztcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0TWV0cmljcyA9IGdldE1ldHJpY3M7XG4gICAgZnVuY3Rpb24gZ2V0U2ltcGxlTWV0cmljcyhjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICh0eXBlb2YgdGV4dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgVGV4dEZvcm1hdC5jb21iaW5lKGNvbXBvbmVudC5mb3JtYXQsIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQsIGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgY29uc3QgeyBzaXplLCBsZXR0ZXJTcGFjaW5nLCBsZWFkaW5nIH0gPSBkZWZhdWx0VGV4dEZvcm1hdDtcbiAgICAgICAgY29uc3QgZm9udCA9IEZvbnQuZ2V0Rm9udChkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICAgIGxldCBoZWlnaHQgPSBzaXplO1xuICAgICAgICBsZXQgbGluZVdpZHRoID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2wgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgaWYgKHN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgKz0gc2l6ZSArIGxlYWRpbmc7XG4gICAgICAgICAgICAgICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCwgbGluZVdpZHRoKTtcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IHRleHRbaSArIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2UoZm9udCwgc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIGxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgbGluZVdpZHRoICs9IGFkdmFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCwgbGluZVdpZHRoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBUZXh0TWV0cmljcy5nZXRTaW1wbGVNZXRyaWNzID0gZ2V0U2ltcGxlTWV0cmljcztcbiAgICBmdW5jdGlvbiBnZXRTaW1wbGVXaWR0aChmb3JtYXQsIHRleHQsIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA+PSB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgVGV4dEZvcm1hdC5jb21iaW5lKGZvcm1hdCwgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCwgZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBjb25zdCB7IHNpemUsIGxldHRlclNwYWNpbmcgfSA9IGRlZmF1bHRUZXh0Rm9ybWF0O1xuICAgICAgICBjb25zdCBmb250ID0gRm9udC5nZXRGb250KGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgbGV0IHdpZHRoID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gdGV4dFtpXTtcbiAgICAgICAgICAgIGlmIChzeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IHRleHRbaSArIDFdO1xuICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShmb250LCBzaXplLCBzeW1ib2wsIHN5bWJvbE5leHQpICsgbGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgIHdpZHRoICs9IGFkdmFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cbiAgICBUZXh0TWV0cmljcy5nZXRTaW1wbGVXaWR0aCA9IGdldFNpbXBsZVdpZHRoO1xufSkoVGV4dE1ldHJpY3MgfHwgKFRleHRNZXRyaWNzID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvZm9ybWF0JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9mb250JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9tZXRyaWNzJztcbmV4cG9ydCAqIGZyb20gJy4vY2FudmFzL3RleHQnO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgVGV4dE1ldHJpY3MgfSBmcm9tICcuL2RhdGEvbWV0cmljcyc7XG5leHBvcnQgY29uc3QgVEVYVCA9ICd0ZXh0JztcbmV4cG9ydCB2YXIgVGV4dDtcbihmdW5jdGlvbiAoVGV4dCkge1xuICAgIGZ1bmN0aW9uIGdldFRleHQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0ZXh0KSkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYmxvY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBibG9jay50ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBUZXh0LmdldFRleHQgPSBnZXRUZXh0O1xuICAgIGZ1bmN0aW9uIGlzVXBkYXRlTWV0cmljcyhjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC51cGRhdGVNZXRyaWNzID8/IHRydWU7XG4gICAgfVxuICAgIFRleHQuaXNVcGRhdGVNZXRyaWNzID0gaXNVcGRhdGVNZXRyaWNzO1xuICAgIGZ1bmN0aW9uIGlzQXV0b1NpemUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiAhY29tcG9uZW50LndpZHRoICYmICFjb21wb25lbnQuaGVpZ2h0O1xuICAgIH1cbiAgICBUZXh0LmlzQXV0b1NpemUgPSBpc0F1dG9TaXplO1xuICAgIGZ1bmN0aW9uIGlzU2ltcGxlKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGNvbXBvbmVudC50ZXh0ID09PSAnc3RyaW5nJyAmJiBpc0F1dG9TaXplKGNvbXBvbmVudCk7XG4gICAgfVxuICAgIFRleHQuaXNTaW1wbGUgPSBpc1NpbXBsZTtcbiAgICBmdW5jdGlvbiBpc011bHRpbGluZShjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5tdWx0aWxpbmUgPz8gdHJ1ZTtcbiAgICB9XG4gICAgVGV4dC5pc011bHRpbGluZSA9IGlzTXVsdGlsaW5lO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZU1ldHJpY3MoY29tcG9uZW50KSB7XG4gICAgICAgIGlmIChpc1NpbXBsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICBjb21wb25lbnQubWV0cmljcyA9IFRleHRNZXRyaWNzLmdldFNpbXBsZU1ldHJpY3MoY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5tZXRyaWNzID0gVGV4dE1ldHJpY3MuZ2V0TWV0cmljcyhjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHQudXBkYXRlTWV0cmljcyA9IHVwZGF0ZU1ldHJpY3M7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGNvbXBvbmVudCwgYm91bmRzKSB7XG4gICAgICAgIGlmIChpc1VwZGF0ZU1ldHJpY3MoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgdXBkYXRlTWV0cmljcyhjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbWV0cmljcyB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIW1ldHJpY3MpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCF3aWR0aCkge1xuICAgICAgICAgICAgd2lkdGggPSBtZXRyaWNzLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaGVpZ2h0KSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBtZXRyaWNzLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChjb21wb25lbnQsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoY29tcG9uZW50LCBoZWlnaHQpO1xuICAgICAgICBib3VuZHMueCA9IHg7XG4gICAgICAgIGJvdW5kcy55ID0geTtcbiAgICAgICAgYm91bmRzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGJvdW5kcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIFRleHQuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoVGV4dCB8fCAoVGV4dCA9IHt9KSk7XG5jb25zdCBib3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgVGV4dEV4dGVuc2lvbjtcbihmdW5jdGlvbiAoVGV4dEV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGhpdFRlc3QodGV4dCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgbG9jYWwgfSA9IGVuZ2luZS5wb2ludGVycztcbiAgICAgICAgVGV4dC5jYWxjdWxhdGVCb3VuZHModGV4dCwgYm91bmRzKTtcbiAgICAgICAgcmV0dXJuIFJlY3RhbmdsZS5jb250YWlucyhib3VuZHMsIGxvY2FsKTtcbiAgICB9XG4gICAgVGV4dEV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChURVhULCBoaXRUZXN0KTtcbiAgICB9XG4gICAgVGV4dEV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFRleHRFeHRlbnNpb24gfHwgKFRleHRFeHRlbnNpb24gPSB7fSkpO1xuIiwiZXhwb3J0IGNvbnN0IExJTkVBUiA9ICdsaW5lYXInO1xuZXhwb3J0IGNvbnN0IFFVQURSQVRJQyA9ICdxdWFkcmF0aWMnO1xuZXhwb3J0IGNvbnN0IFFVQURSQVRJQ19JTiA9ICdxdWFkcmF0aWNpbic7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDX09VVCA9ICdxdWFkcmF0aWNvdXQnO1xuZXhwb3J0IGNvbnN0IENVQklDID0gJ2N1YmljJztcbmV4cG9ydCBjb25zdCBDVUJJQ19JTiA9ICdjdWJpY2luJztcbmV4cG9ydCBjb25zdCBDVUJJQ19PVVQgPSAnY3ViaWNvdXQnO1xuZXhwb3J0IGNvbnN0IFFVQVJUSUMgPSAncXVhcnRpYyc7XG5leHBvcnQgY29uc3QgUVVBUlRJQ19JTiA9ICdxdWFydGljaW4nO1xuZXhwb3J0IGNvbnN0IFFVQVJUSUNfT1VUID0gJ3F1YXJ0aWNvdXQnO1xuZXhwb3J0IGNvbnN0IFFVSU5USUMgPSAncXVpbnRpYyc7XG5leHBvcnQgY29uc3QgUVVJTlRJQ19JTiA9ICdxdWludGljaW4nO1xuZXhwb3J0IGNvbnN0IFFVSU5USUNfT1VUID0gJ3F1aW50aWNvdXQnO1xuZXhwb3J0IGNvbnN0IFNJTlVTT0lEQUwgPSAncXVpbnRpYyc7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTF9JTiA9ICdxdWludGljaW4nO1xuZXhwb3J0IGNvbnN0IFNJTlVTT0lEQUxfT1VUID0gJ3F1aW50aWNvdXQnO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMID0gJ2V4cG9uZW50aWFsJztcbmV4cG9ydCBjb25zdCBFWFBPTkVOVElBTF9JTiA9ICdleHBvbmVudGlhbGluJztcbmV4cG9ydCBjb25zdCBFWFBPTkVOVElBTF9PVVQgPSAnZXhwb25lbnRpYWxvdXQnO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSID0gJ2NpcmN1bGFyJztcbmV4cG9ydCBjb25zdCBDSVJDVUxBUl9JTiA9ICdjaXJjdWxhcmluJztcbmV4cG9ydCBjb25zdCBDSVJDVUxBUl9PVVQgPSAnY2lyY3VsYXJvdXQnO1xuZXhwb3J0IGNvbnN0IEVMQVNUSUMgPSAnZWxhc3RpYyc7XG5leHBvcnQgY29uc3QgRUxBU1RJQ19JTiA9ICdlbGFzdGljaW4nO1xuZXhwb3J0IGNvbnN0IEVMQVNUSUNfT1VUID0gJ2VsYXN0aWNvdXQnO1xuZXhwb3J0IGNvbnN0IEJBQ0sgPSAnYmFjayc7XG5leHBvcnQgY29uc3QgQkFDS19JTiA9ICdiYWNraW4nO1xuZXhwb3J0IGNvbnN0IEJBQ0tfT1VUID0gJ2JhY2tvdXQnO1xuZXhwb3J0IGNvbnN0IEJPVU5DRSA9ICdib3VuY2UnO1xuZXhwb3J0IGNvbnN0IEJPVU5DRV9JTiA9ICdib3VuY2Vpbic7XG5leHBvcnQgY29uc3QgQk9VTkNFX09VVCA9ICdib3VuY2VvdXQnO1xuZXhwb3J0IGNvbnN0IGVhc2luZyA9IHtcbiAgICBbTElORUFSXTogKHZhbHVlKSA9PiB2YWx1ZSxcbiAgICBbUVVBRFJBVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTAuNSAqICgtLXZhbHVlICogKHZhbHVlIC0gMikgLSAxKTtcbiAgICB9LFxuICAgIFtRVUFEUkFUSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVBRFJBVElDX09VVF06ICh2YWx1ZSkgPT4gKHZhbHVlICogKDIgLSB2YWx1ZSkpLFxuICAgIFtDVUJJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKyAyKTtcbiAgICB9LFxuICAgIFtDVUJJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW0NVQklDX09VVF06ICh2YWx1ZSkgPT4gKC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMSksXG4gICAgW1FVQVJUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgLSAyKTtcbiAgICB9LFxuICAgIFtRVUFSVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUFSVElDX09VVF06ICh2YWx1ZSkgPT4gKDEgLSAtLXZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVJTlRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDIpO1xuICAgIH0sXG4gICAgW1FVSU5USUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVJTlRJQ19PVVRdOiAodmFsdWUpID0+ICgtLXZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAxKSxcbiAgICBbU0lOVVNPSURBTF06ICh2YWx1ZSkgPT4gKDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIHZhbHVlKSkpLFxuICAgIFtTSU5VU09JREFMX0lOXTogKHZhbHVlKSA9PiAoMSAtIE1hdGguY29zKCh2YWx1ZSAqIE1hdGguUEkpIC8gMikpLFxuICAgIFtTSU5VU09JREFMX09VVF06ICh2YWx1ZSkgPT4gKE1hdGguc2luKCh2YWx1ZSAqIE1hdGguUEkpIC8gMikpLFxuICAgIFtFWFBPTkVOVElBTF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiBNYXRoLnBvdygxMDI0LCB2YWx1ZSAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoLU1hdGgucG93KDIsIC0xMCAqICh2YWx1ZSAtIDEpKSArIDIpO1xuICAgIH0sXG4gICAgW0VYUE9ORU5USUFMX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgPT09IDAgPyAwIDogTWF0aC5wb3coMTAyNCwgdmFsdWUgLSAxKSksXG4gICAgW0VYUE9ORU5USUFMX09VVF06ICh2YWx1ZSkgPT4gKHZhbHVlID09PSAxID8gMSA6IDEgLSBNYXRoLnBvdygyLCAtMTAgKiB2YWx1ZSkpLFxuICAgIFtDSVJDVUxBUl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSB2YWx1ZSAqIHZhbHVlKSAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAodmFsdWUgLT0gMikgKiB2YWx1ZSkgKyAxKTtcbiAgICB9LFxuICAgIFtDSVJDVUxBUl9JTl06ICh2YWx1ZSkgPT4gKDEgLSBNYXRoLnNxcnQoMSAtIHZhbHVlICogdmFsdWUpKSxcbiAgICBbQ0lSQ1VMQVJfT1VUXTogKHZhbHVlKSA9PiBNYXRoLnNxcnQoMSAtIC0tdmFsdWUgKiB2YWx1ZSksXG4gICAgW0VMQVNUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlICo9IDI7XG4gICAgICAgIGlmICh2YWx1ZSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAtMC41ICogTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiBNYXRoLnBvdygyLCAtMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpICsgMTtcbiAgICB9LFxuICAgIFtFTEFTVElDX0lOXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLU1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcbiAgICB9LFxuICAgIFtFTEFTVElDX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGgucG93KDIsIC0xMCAqIHZhbHVlKSAqIE1hdGguc2luKCh2YWx1ZSAtIDAuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuICAgIH0sXG4gICAgW0JBQ0tdOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTggKiAxLjUyNTtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiAodmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgLSBzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgKyBzKSArIDIpO1xuICAgIH0sXG4gICAgW0JBQ0tfSU5dOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTg7XG4gICAgICAgIHJldHVybiB2YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSAtIHMpO1xuICAgIH0sXG4gICAgW0JBQ0tfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gLS12YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSArIHMpICsgMTtcbiAgICB9LFxuICAgIFtCT1VOQ0VdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMC41KSB7XG4gICAgICAgICAgICByZXR1cm4gZWFzaW5nW0JPVU5DRV9JTl0odmFsdWUgKiAyKSAqIDAuNTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWFzaW5nW0JPVU5DRV9PVVRdKHZhbHVlICogMiAtIDEpICogMC41ICsgMC41O1xuICAgIH0sXG4gICAgW0JPVU5DRV9JTl06ICh2YWx1ZSkgPT4gKDEgLSBlYXNpbmdbQk9VTkNFX09VVF0oMSAtIHZhbHVlKSksXG4gICAgW0JPVU5DRV9PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMSAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA8IDIgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDEuNSAvIDIuNzUpICogdmFsdWUgKyAwLjc1O1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA8IDIuNSAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMi4yNSAvIDIuNzUpICogdmFsdWUgKyAwLjkzNzU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAyLjYyNSAvIDIuNzUpICogdmFsdWUgKyAwLjk4NDM3NTtcbiAgICB9LFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdHdlZW4nO1xuZXhwb3J0ICogZnJvbSAnLi9lYXNpbmcnO1xuIiwiaW1wb3J0IHsgZWFzaW5nLCBMSU5FQVIgfSBmcm9tICcuL2Vhc2luZyc7XG5leHBvcnQgY29uc3QgVFdFRU4gPSAndHdlZW4nO1xuZXhwb3J0IHZhciBUd2VlbkV4dGVuc2lvbjtcbihmdW5jdGlvbiAoVHdlZW5FeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29tcG9uZW50LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyB0d2VlbiB9ID0gY29tcG9uZW50O1xuICAgICAgICBjb25zdCB7IHBoYXNlcyB9ID0gdHdlZW47XG4gICAgICAgIGlmICghcGhhc2VzPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdBbmltYXRpb24gcGFydHMgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR3ZWVuLnRpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdHdlZW4udGltZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdHdlZW4udGltZSArPSBlbmdpbmUudXBkYXRlci50aW1lO1xuICAgICAgICBjb25zdCB7IHRpbWUgfSA9IHR3ZWVuO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgcGhhc2VzLmZvckVhY2goKHBoYXNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXBoYXNlLnRpbWUpIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnQW5pbWF0aW9uIHRpbWUgbm90IHNldCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaGFzZS5vZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHBoYXNlLm9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVhc2luZ05hbWUgPSBwaGFzZT8uZWFzaW5nPy50b0xvd2VyQ2FzZSgpID8/IExJTkVBUjtcbiAgICAgICAgICAgIGNvbnN0IGVhc2luZ01ldGhvZCA9IGVhc2luZ1tlYXNpbmdOYW1lXTtcbiAgICAgICAgICAgIGlmICghZWFzaW5nTWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoYFVua25vd24gZWFzaW5nIHR5cGU6ICR7ZWFzaW5nfWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKHRpbWUgLSBvZmZzZXQpIC8gcGhhc2UudGltZTtcbiAgICAgICAgICAgIG9mZnNldCArPSBwaGFzZS50aW1lO1xuICAgICAgICAgICAgaWYgKHZhbHVlIDwgMCB8fCB2YWx1ZSA+IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlYXNpbmdWYWx1ZSA9IGVhc2luZ01ldGhvZCh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoIXBoYXNlLnRvKSB7XG4gICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ0FuaW1hdGlvbiBcInRvXCIgc3RhdGUgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwaGFzZS5mcm9tKSB7XG4gICAgICAgICAgICAgICAgcGhhc2UuZnJvbSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB0bywgZnJvbSB9ID0gcGhhc2U7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGNvbXBvbmVudDtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRvKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZnJvbVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbVtrZXldID0gc3RhdGVba2V5XSA/PyAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBmcm9tVmFsdWUgPSBmcm9tW2tleV07XG4gICAgICAgICAgICAgICAgY29uc3QgdG9WYWx1ZSA9IHRvW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmcm9tVmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiB0b1ZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZVZhbHVlID0gZnJvbVZhbHVlICsgZWFzaW5nVmFsdWUgKiAodG9WYWx1ZSAtIGZyb21WYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlW2tleV0gPSBzdGF0ZVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHR3ZWVuLmxvb3AgJiYgdHdlZW4udGltZSA+IG9mZnNldCkge1xuICAgICAgICAgICAgdHdlZW4udGltZSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVHdlZW5FeHRlbnNpb24udXBkYXRlID0gdXBkYXRlO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnByb3BlcnRpZXMuc2V0KFRXRUVOLCB1cGRhdGUpO1xuICAgIH1cbiAgICBUd2VlbkV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFR3ZWVuRXh0ZW5zaW9uIHx8IChUd2VlbkV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBBQklMSVRZX1dPTEYgfSBmcm9tICcuL2Fzc2V0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY3Vyc2l2ZSgpIHtcblx0Y29uc3QgY29udGFpbmVyID0ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdHg6IDMwLFxuXHRcdFx0eTogMzAsXG5cdFx0XHRzY2FsZVg6IDAuOSxcblx0XHRcdHNjYWxlWTogMC45LFxuXHRcdFx0cm90YXRpb246IDAuMixcblx0XHRcdGFscGhhOiAwLjksXG5cdFx0XHRjaGlsZHJlbjogW3tcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBBQklMSVRZX1dPTEYsXG5cdFx0XHRcdHNjYWxlOiAwLjMsXG5cdFx0XHR9XSxcblx0XHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0XHR0aGlzLnJvdGF0aW9uICs9IHRpbWUgKiAwLjA1O1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXG5cdGNvbnRhaW5lci5jaGlsZHJlbi5jaGlsZHJlbi5wdXNoKGNvbnRhaW5lciBhcyBuZXZlcik7XG5cblx0cmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsImNvbnN0IEFTU0VUUyA9ICdhc3NldHMvJztcblxuZXhwb3J0IGNvbnN0IEFOSU1BTElTVCA9ICdpZDphbmltYWxpc3QnO1xuZXhwb3J0IGNvbnN0IEFSQ0hFUiA9ICdpZDphcmNoZXInO1xuXG5leHBvcnQgY29uc3QgQU5JTUFMSVNUX0lNQUdFID0gYCR7QVNTRVRTfUFuaW1hbGlzdEZveDFfaW1hZ2UucG5nYDtcbmV4cG9ydCBjb25zdCBBUkNIRVJfSU1BR0UgPSBgJHtBU1NFVFN9QXJjaGVyMl9odW50ZXJfaW1hZ2UucG5nYDtcblxuZXhwb3J0IGNvbnN0IEFCSUxJVFlfRk9YID0gYCR7QVNTRVRTfUFuaW1hbGlzdEFiaWxpdHlfRm94LnBuZ2A7XG5leHBvcnQgY29uc3QgQUJJTElUWV9XT0xGID0gYCR7QVNTRVRTfUFuaW1hbGlzdEFiaWxpdHlfV29sZi5wbmdgO1xuXG5leHBvcnQgY29uc3QgQkFDS0dST1VORCA9IGAke0FTU0VUU31qdW5nbGVfYmFja2dyb3VuZC5qcGdgO1xuXG5leHBvcnQgY29uc3QgVEVTVF9DQU5WQVMgPSAndGVzdC5jYW52YXMnO1xuXG5leHBvcnQgY29uc3QgU0NFTkUgPSBgJHtBU1NFVFN9L3NjZW5lLmpzb25gO1xuIiwiaW1wb3J0IHsgQ2FudmFzRW5naW5lIH0gZnJvbSAnQGplbmcvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBFbmdpbmVNb2R1bGUgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IENhbnZhc1RleHRFeHRlbnNpb24gfSBmcm9tICdAamVuZy90ZXh0JztcbmltcG9ydCB7IEN1c3RvbUltYWdlRXh0ZW5zaW9uIH0gZnJvbSAnLi9pbWFnZSc7XG5pbXBvcnQgQ3VzdG9tUGxhdGZvcm0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUVuZ2luZSBleHRlbmRzIENhbnZhc0VuZ2luZSB7XG5cdGNvbnN0cnVjdG9yKG1vZHVsZTogRW5naW5lTW9kdWxlID0ge30pIHtcblx0XHRtb2R1bGUuUGxhdGZvcm0gPSBtb2R1bGUuUGxhdGZvcm0gPz8gQ3VzdG9tUGxhdGZvcm07XG5cblx0XHRzdXBlcihtb2R1bGUpO1xuXG5cdFx0Q2FudmFzVGV4dEV4dGVuc2lvbi5pbml0KHRoaXMpO1xuXHRcdEN1c3RvbUltYWdlRXh0ZW5zaW9uLmluaXQodGhpcyk7XG5cdH1cbn1cbiIsImltcG9ydCB7IENhbnZhc0VuZ2luZSwgQ2FudmFzUGxhdGZvcm0gfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBJbWFnZUV4dGVuc2lvbiwgSU1BR0UsIEltYWdlIH0gZnJvbSAnQGplbmcvaW1hZ2UnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5cbmV4cG9ydCBuYW1lc3BhY2UgQ3VzdG9tSW1hZ2VFeHRlbnNpb24ge1xuXHRleHBvcnQgZnVuY3Rpb24gcmVuZGVyKGltYWdlOiBJbWFnZSwgZW5naW5lOiBDYW52YXNFbmdpbmUpOiB2b2lkIHtcblx0XHRpZiAoIWltYWdlLnNyYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHsgbWF0cml4LCBjb2xvclRyYW5zZm9ybSB9ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcblxuXHRcdGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoaW1hZ2Uuc3JjKSBhcyBJbWFnZVJlc291cmNlIHwgbnVsbDtcblxuXHRcdGlmICghcmVzb3VyY2U/LmxvYWRlZCB8fCAhcmVzb3VyY2U/LmltYWdlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29udGV4dDJkID0gKGVuZ2luZS5wbGF0Zm9ybSBhcyBDYW52YXNQbGF0Zm9ybSkuZ2V0Q29udGV4dCgpO1xuXG5cdFx0Y29udGV4dDJkLnNldFRyYW5zZm9ybShcblx0XHRcdG1hdHJpeC5hLFxuXHRcdFx0bWF0cml4LmIsXG5cdFx0XHRtYXRyaXguYyxcblx0XHRcdG1hdHJpeC5kLFxuXHRcdFx0bWF0cml4LnR4LFxuXHRcdFx0bWF0cml4LnR5LFxuXHRcdCk7XG5cblx0XHRjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuXHRcdGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG5cdFx0Y29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG5cblx0XHRjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcblx0XHRjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnbGlnaHRncmF5Jztcblx0XHRjb250ZXh0MmQuc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcblx0fVxuXG5cdGV4cG9ydCBmdW5jdGlvbiBpbml0KGVuZ2luZTogQ2FudmFzRW5naW5lKSB7XG5cdFx0SW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuXHRcdGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoSU1BR0UsIHJlbmRlcik7XG5cdH1cbn1cbiIsImltcG9ydCB7IENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnQGplbmcvY2FudmFzLWVuZ2luZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVBsYXRmb3JtIGV4dGVuZHMgQ2FudmFzUGxhdGZvcm0ge1xuXHRjbGVhcigpIHtcblx0XHRjb25zdCBjb250ZXh0MmQgPSB0aGlzLmdldENvbnRleHQoKTtcblx0XHRjb250ZXh0MmQuZmlsbFN0eWxlID0gJ2JsYWNrJztcblx0XHRjb250ZXh0MmQuc2V0VHJhbnNmb3JtKCk7XG5cdFx0Y29udGV4dDJkLmZpbGxSZWN0KDAsIDAsIGNvbnRleHQyZC5jYW52YXMud2lkdGgsIGNvbnRleHQyZC5jYW52YXMuaGVpZ2h0KTtcblx0XHRjb250ZXh0MmQuZmlsbFN0eWxlID0gJyc7XG5cdH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZSB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVJlc291cmNlTWFuYWdlciB7XG5cdHJlYWRvbmx5IGFsaWFzZXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXHRyZWFkb25seSByZXNvdXJjZXMgPSBuZXcgTWFwPHN0cmluZywgSW1hZ2VSZXNvdXJjZT4oKTtcblxuXHRyZXNvbHZlID0gKGFzc2V0OiBzdHJpbmcsIGVuZ2luZTogRW5naW5lKTogSW1hZ2VSZXNvdXJjZSB8IG51bGwgPT4ge1xuXHRcdGlmIChhc3NldC5pbmRleE9mKCdpZDonKSA9PT0gMCkge1xuXHRcdFx0Y29uc3QgaWQgPSBhc3NldC5zbGljZSgzKTtcblx0XHRcdGxldCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VzLmdldChpZCkgYXMgSW1hZ2VSZXNvdXJjZTtcblx0XHRcdGlmICghcmVzb3VyY2UpIHtcblx0XHRcdFx0Y29uc3QgdXJsID0gdGhpcy5hbGlhc2VzLmdldChpZCk7XG5cdFx0XHRcdGlmICh1cmwpIHtcblx0XHRcdFx0XHRyZXNvdXJjZSA9IEltYWdlUmVzb3VyY2UucmVzb2x2ZSh1cmwsIGVuZ2luZSkgYXMgSW1hZ2VSZXNvdXJjZTtcblx0XHRcdFx0XHR0aGlzLnJlc291cmNlcy5zZXQoaWQsIHJlc291cmNlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbmdpbmUuZGVidWcud2FybmluZyhgUmVzb3VyY2Ugd2l0aCBpZDogJHthc3NldH0gbm90IGZvdW5kYCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZXNvdXJjZTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRpbml0KGVuZ2luZTogRW5naW5lKSB7XG5cdFx0ZW5naW5lLnJlc291cmNlcy5yZXNvbHZlcnMuYWRkKHRoaXMucmVzb2x2ZSk7XG5cdH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgU3RhdGlzdGljcyB7XG5cdGdldFJlbmRlclRpbWUoKTogbnVtYmVyO1xuXHRnZXRVcGRhdGVUaW1lKCk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZwcyhzdGF0aXN0aWNzOiBTdGF0aXN0aWNzKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHRleHQ6ICdmcHMnLFxuXHRcdGZyYW1lczogMCxcblx0XHRmcmFtZVRpbWU6IDAsXG5cdFx0dXBkYXRlVGltZTogMCxcblx0XHRyZW5kZXJUaW1lOiAwLFxuXHRcdGZvcm1hdDoge1xuXHRcdFx0c2l6ZTogMjAsXG5cdFx0XHRjb2xvcjogMHhmZmZmZmYsXG5cdFx0fSxcblx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMuZnJhbWVUaW1lICs9IHRpbWU7XG5cdFx0XHR0aGlzLnVwZGF0ZVRpbWUgKz0gc3RhdGlzdGljcy5nZXRVcGRhdGVUaW1lKCk7XG5cdFx0XHR0aGlzLnJlbmRlclRpbWUgKz0gc3RhdGlzdGljcy5nZXRSZW5kZXJUaW1lKCk7XG5cdFx0XHR0aGlzLmZyYW1lcysrO1xuXHRcdFx0aWYgKHRoaXMuZnJhbWVUaW1lID49IDEpIHtcblx0XHRcdFx0Y29uc3QgZnJhbWVUaW1lID0gTWF0aC5jZWlsKDEwMDAgKiB0aGlzLmZyYW1lVGltZSAvIHRoaXMuZnJhbWVzKTtcblx0XHRcdFx0Y29uc3QgdXBkYXRlVGltZSA9ICh0aGlzLnVwZGF0ZVRpbWUgLyB0aGlzLmZyYW1lcykudG9GaXhlZCgyKTtcblx0XHRcdFx0Y29uc3QgcmVuZGVyVGltZSA9ICh0aGlzLnJlbmRlclRpbWUgLyB0aGlzLmZyYW1lcykudG9GaXhlZCgyKTtcblx0XHRcdFx0dGhpcy50ZXh0ID0gYGZwczogJHt0aGlzLmZyYW1lc30sICR7ZnJhbWVUaW1lfSBtc1xcbnVwZGF0ZTogJHt1cGRhdGVUaW1lfSBtc1xcbnJlbmRlcjogJHtyZW5kZXJUaW1lfSBtc2A7XG5cdFx0XHRcdHRoaXMuZnJhbWVUaW1lID0gMDtcblx0XHRcdFx0dGhpcy51cGRhdGVUaW1lID0gMDtcblx0XHRcdFx0dGhpcy5yZW5kZXJUaW1lID0gMDtcblx0XHRcdFx0dGhpcy5mcmFtZXMgPSAwO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7XG5cdEFCSUxJVFlfRk9YLCBBQklMSVRZX1dPTEYsIEFOSU1BTElTVCwgQVJDSEVSLCBCQUNLR1JPVU5ELCBTQ0VORSxcbn0gZnJvbSAnLi9hc3NldHMnO1xuaW1wb3J0IGFydGlmYWN0IGZyb20gJy4vYXJ0aWZhY3QnO1xuaW1wb3J0IHsgZnBzLCBTdGF0aXN0aWNzIH0gZnJvbSAnLi9mcHMnO1xuaW1wb3J0IHsgdW5pdCwgVW5pdFByb3BlcnRpZXMgfSBmcm9tICcuL3VuaXQnO1xuaW1wb3J0IHsgcHJlbG9hZGVyLCBQcmVsb2FkZXJJbmZvIH0gZnJvbSAnLi9wcmVsb2FkZXInO1xuXG5pbnRlcmZhY2UgTWFpbiB7XG5cdHN0YXJ0KCk6IHZvaWQ7XG5cdFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuaW50ZXJmYWNlIE1haW5Qcm9wZXJ0aWVzIGV4dGVuZHMgU3RhdGlzdGljcyB7XG5cdGdldENhbnZhc1dpZHRoKCk6IG51bWJlcjtcblx0Z2V0Q2FudmFzSGVpZ2h0KCk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbihwYXJhbWV0ZXJzOiBNYWluUHJvcGVydGllcyk6IE1haW4ge1xuXHRmdW5jdGlvbiBvblVuaXRDbGljayhkYXRhOiBVbml0UHJvcGVydGllcykge1xuXHRcdGRhdGEuaGVhbHRoID0gTWF0aC5yYW5kb20oKTtcblx0XHRjb25zb2xlLmxvZygnb25Vbml0Q2xpY2snLCBkYXRhLm5hbWUpO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IHtcblx0XHR0eXBlOiAnbG9hZGVyJyxcblx0XHR2aXNpYmxlOiBmYWxzZSxcblx0XHRlbmFibGVkOiBmYWxzZSxcblx0XHRvbkxvYWRlZCgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdiYWNrZ3JvdW5kIGxvYWRlZCcpO1xuXHRcdFx0dGhpcy52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0fSxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0YmFja2dyb3VuZDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEJBQ0tHUk9VTkQsXG5cdFx0XHRcdHNjYWxlWDogMSxcblx0XHRcdFx0c2NhbGVZOiAxLFxuXHRcdFx0fSxcblx0XHRcdGZpZ3VyZToge1xuXHRcdFx0XHR0eXBlOiAnc2hhcGUnLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3JlY3RhbmdsZScsXG5cdFx0XHRcdFx0eDogMjAsXG5cdFx0XHRcdFx0eTogMjAsXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCxcblx0XHRcdFx0XHRoZWlnaHQ6IDUwLFxuXHRcdFx0XHRcdGZpbGw6IDB4ZmYwMGZmLFxuXHRcdFx0XHRcdHN0cm9rZTogMHgwMDAwZmYsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0c2hhcGVzOiB7XG5cdFx0XHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0XHRcdGRhdGE6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAnZWxsaXBzZScsXG5cdFx0XHRcdFx0XHR4OiAxMDAsXG5cdFx0XHRcdFx0XHR5OiAxMDAsXG5cdFx0XHRcdFx0XHRyYWRpdXM6IDUwLFxuXHRcdFx0XHRcdFx0ZmlsbDogeyB0eXBlOiAnc29saWQnLCBjb2xvcjogMHhmZmZmMDAsIGFscGhhOiAxIH0sXG5cdFx0XHRcdFx0XHRzdHJva2U6IHsgZmlsbDogMHgwMDAwZmYsIHRoaWNrbmVzczogMTAgfSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdwYXRoJyxcblx0XHRcdFx0XHRcdGRhdGE6ICdNIDExMCwgMTEwIEggMTkwIFYgMTkwIEggMTEwIFonLFxuXHRcdFx0XHRcdFx0ZmlsbDogMHg5OTAwMDAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAncGF0aCcsXG5cdFx0XHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ21vdmVUbycsIHg6IDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMTAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDEwMCwgeTogMTAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDAsIHk6IDEwMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0ZmlsbDogeyB0eXBlOiAnc29saWQnLCBjb2xvcjogMHg5OTk5OTksIGFscGhhOiAwLjYgfSxcblx0XHRcdFx0XHRcdHN0cm9rZTogMHgwMDAwMDAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHR1bml0czoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHR1bml0KHtcblx0XHRcdFx0XHRcdG5hbWU6ICdBcmNoZXInLCBoZWFsdGg6IDEsIGltYWdlOiBBUkNIRVIsIG9uQ2xpY2s6IG9uVW5pdENsaWNrLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdHVuaXQoe1xuXHRcdFx0XHRcdFx0bmFtZTogJ0FuaW1hbGlzdCcsIGhlYWx0aDogMSwgaW1hZ2U6IEFOSU1BTElTVCwgb25DbGljazogb25Vbml0Q2xpY2ssXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0YXJ0aWZhY3Q6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdHg6IDMwMCxcblx0XHRcdFx0eTogMzUwLFxuXHRcdFx0XHRjaGlsZHJlbjogYXJ0aWZhY3QoKSxcblx0XHRcdH0sXG5cdFx0XHRtYXA6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0eTogNDUwLFxuXHRcdFx0XHRzY2FsZVg6IDAuMixcblx0XHRcdFx0c2NhbGVZOiAwLjIsXG5cdFx0XHRcdGFscGhhOiAwLjUsXG5cdFx0XHRcdHNyYzogJ3Rlc3QuY2FudmFzJyxcblx0XHRcdFx0b25Qb2ludGVyT3ZlcigpIHtcblx0XHRcdFx0XHR0aGlzLmFscGhhID0gMTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b25Qb2ludGVyT3V0KCkge1xuXHRcdFx0XHRcdHRoaXMuYWxwaGEgPSAwLjU7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YWJpbGl0eUZveDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEFCSUxJVFlfRk9YLFxuXHRcdFx0XHR4OiA0NTAsXG5cdFx0XHRcdHk6IDUwMCxcblx0XHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdFx0dGludDoge1xuXHRcdFx0XHRcdGNvbG9yOiAweDAwZmYwMCxcblx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0fSBhcyBhbnksXG5cdFx0XHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0XHRcdGlmICh0aGlzLnRpbnQpIHtcblx0XHRcdFx0XHRcdHRoaXMudGludC52YWx1ZSArPSB0aW1lO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMudGludC52YWx1ZSA+PSAxKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudGludC52YWx1ZSA9IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duKGU6IGFueSkge1xuXHRcdFx0XHRcdGlmICh0aGlzLnRpbnQpIHtcblx0XHRcdFx0XHRcdHRoaXMudGludCA9IG51bGw7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMudGludCA9IHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IDB4MDBmZjAwLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmb3gnLCBlKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRhYmlsaXR5V29sZjoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0eDogMzUwLFxuXHRcdFx0XHR5OiA0MDAsXG5cdFx0XHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0XHRzcmM6IEFCSUxJVFlfV09MRixcblx0XHRcdFx0XHRzY2FsZTogMC41LFxuXHRcdFx0XHRcdGFscGhhOiAxLFxuXHRcdFx0XHRcdHR3ZWVuOiB7XG5cdFx0XHRcdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0XHRcdFx0cGhhc2VzOiBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHg6IDIwMCB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAnY3ViaWNvdXQnLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeTogMjAwLCBhbHBoYTogMC41IH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6ICdxdWFkcmF0aWNJbicsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB4OiAwLCBhbHBoYTogMSB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAncXVhZHJhdGljT3V0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRmcHM6IGZwcyhwYXJhbWV0ZXJzKSxcblx0XHR9LFxuXHR9O1xuXG5cdGNvbnN0IHByZWxvYWRlckluZm86IFByZWxvYWRlckluZm8gPSB7XG5cdFx0Z2V0V2lkdGg6IHBhcmFtZXRlcnMuZ2V0Q2FudmFzV2lkdGgsXG5cdFx0Z2V0SGVpZ2h0OiBwYXJhbWV0ZXJzLmdldENhbnZhc0hlaWdodCxcblx0XHRnZXRQcm9ncmVzcygpIHtcblx0XHRcdHJldHVybiBMb2FkZXIuZ2V0TG9hZGluZ1Byb2dyZXNzKGNvbnRlbnQpO1xuXHRcdH0sXG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0Y29udGVudCxcblx0XHRcdHByZWxvYWRlcjogcHJlbG9hZGVyKHByZWxvYWRlckluZm8pLFxuXHRcdFx0c2NlbmU6IHtcblx0XHRcdFx0dHlwZTogJ3NjZW5lJywgeDogMzAwLCBzcmM6IFNDRU5FLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdG9uVXBkYXRlKCkge1xuXHRcdFx0Y29uc3QgaXNMb2FkZWQgPSAhdGhpcy5jaGlsZHJlbi5jb250ZW50LnZpc2libGU7XG5cdFx0XHR0aGlzLmNoaWxkcmVuLnByZWxvYWRlci52aXNpYmxlID0gaXNMb2FkZWQ7XG5cdFx0XHR0aGlzLmNoaWxkcmVuLnByZWxvYWRlci5lbmFibGVkID0gaXNMb2FkZWQ7XG5cdFx0fSxcblx0XHRzdGFydCgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdzdGFydCcpO1xuXHRcdH0sXG5cdH07XG59XG4iLCJpbXBvcnQgeyBTaGFwZSB9IGZyb20gJ0BqZW5nL3NoYXBlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcmVsb2FkZXJJbmZvIHtcblx0Z2V0UHJvZ3Jlc3MoKTogbnVtYmVyO1xuXHRnZXRXaWR0aCgpOiBudW1iZXI7XG5cdGdldEhlaWdodCgpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkZXIoaW5mbzogUHJlbG9hZGVySW5mbykge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0c2NhbGVYOiAxLFxuXHRcdHk6IGluZm8uZ2V0SGVpZ2h0KCkgLSAyMCxcblx0XHRkYXRhOiB7XG5cdFx0XHR0eXBlOiAncmVjdGFuZ2xlJyxcblx0XHRcdHdpZHRoOiAxLFxuXHRcdFx0aGVpZ2h0OiAyMCxcblx0XHRcdGZpbGw6IDB4ZmYwMDAwLFxuXHRcdH0sXG5cdFx0b25VcGRhdGUoKSB7XG5cdFx0XHR0aGlzLnNjYWxlWCA9IHRoaXMuc2NhbGVYID8/IDA7XG5cdFx0XHR0aGlzLnNjYWxlWCArPSAoaW5mby5nZXRXaWR0aCgpICogaW5mby5nZXRQcm9ncmVzcygpIC0gdGhpcy5zY2FsZVgpIC8gMjtcblx0XHR9LFxuXHR9IGFzIFNoYXBlO1xufVxuIiwiY29uc3QgU1BFRUQgPSAxMDA7XG5cbmludGVyZmFjZSBVbml0IHtcblx0W2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRQcm9wZXJ0aWVzIHtcblx0bmFtZTogc3RyaW5nLFxuXHRoZWFsdGg6IG51bWJlcixcblx0aW1hZ2U6IHN0cmluZyxcblx0b25DbGljazogKGRhdGE6IFVuaXRQcm9wZXJ0aWVzKSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBvblByb3BzVXBkYXRlKHByb3BzOiBhbnksIGNhbGxiYWNrOiAodGltZTogbnVtYmVyKSA9PiB2b2lkKSB7XG5cdGNvbnN0IGNvcHkgPSB7IC4uLnByb3BzIH07XG5cdHJldHVybiAodGltZTogbnVtYmVyKSA9PiB7XG5cdFx0Ly8gY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKTtcblx0XHRsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuXHRcdGZvciAoY29uc3Qga2V5IGluIHByb3BzKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5cdFx0XHRpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRpZiAoY29weVtrZXldICE9PSBwcm9wc1trZXldKSB7XG5cdFx0XHRcdFx0Y29weVtrZXldID0gcHJvcHNba2V5XTtcblx0XHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VkKSB7XG5cdFx0XHRjYWxsYmFjayh0aW1lKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIHJ1bk9uUHJvcHNVcGRhdGUocHJvcHM6IGFueSwgY29tcG9uZW50OiBhbnkpIHtcblx0Y29tcG9uZW50Lm9uVXBkYXRlID0gb25Qcm9wc1VwZGF0ZShwcm9wcywgY29tcG9uZW50Lm9uVXBkYXRlLmJpbmQoY29tcG9uZW50KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bml0KHByb3BzOiBVbml0UHJvcGVydGllcyk6IFVuaXQge1xuXHRmdW5jdGlvbiBnZXRUaXRsZSgpIHtcblx0XHRyZXR1cm4gYCR7cHJvcHMubmFtZX1cXG4ke01hdGgucm91bmQocHJvcHMuaGVhbHRoICogMTAwKX0lYDtcblx0fVxuXG5cdGNvbnN0IHVuaXRWaWV3ID0ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdHg6IDUwICsgTWF0aC5yYW5kb20oKSAqIDQwMCxcblx0XHR5OiAyMDAsXG5cdFx0cm90YXRpb246IDAsXG5cdFx0dXBkYXRlTW92ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMueCArPSB0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCAqIHRpbWUgKiBTUEVFRDtcblx0XHRcdGlmICh0aGlzLnggPCA1MCkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCA9IDE7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMueCA+IDQwMCkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCA9IC0xO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZU1vdmUodGltZSk7XG5cdFx0fSxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0dGV4dDoge1xuXHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHRcdHRleHQ6IGdldFRpdGxlKCksXG5cdFx0XHRcdGZvcm1hdDoge1xuXHRcdFx0XHRcdHNpemU6IDE1LFxuXHRcdFx0XHRcdGNvbG9yOiAweGZmZGRkZCxcblx0XHRcdFx0XHRhbGlnbjogJ2NlbnRlcicsXG5cdFx0XHRcdFx0dmVydGljYWxBbGlnbjogJ21pZGRsZScsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJvcmRlcjogMHgwMGZmMDAsXG5cdFx0XHRcdHk6IC0zMCxcblx0XHRcdFx0aGVpZ2h0OiAzNSxcblx0XHRcdFx0cGl2b3RYOiAwLjUsXG5cdFx0XHRcdG9uUG9pbnRlckRvd246ICgpID0+IHtcblx0XHRcdFx0XHRwcm9wcy5vbkNsaWNrKHByb3BzKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b25VcGRhdGUoKSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gZ2V0VGl0bGUoKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRpbWFnZToge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IHByb3BzLmltYWdlLFxuXHRcdFx0XHRzY2FsZVg6IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEsXG5cdFx0XHRcdHBpdm90WDogMC41LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duOiAoKSA9PiB7XG5cdFx0XHRcdFx0cHJvcHMub25DbGljayhwcm9wcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cblx0cnVuT25Qcm9wc1VwZGF0ZShwcm9wcywgdW5pdFZpZXcuY2hpbGRyZW4udGV4dCk7XG5cblx0cmV0dXJuIHVuaXRWaWV3O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBNb3VzZUV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgVHdlZW5FeHRlbnNpb24gfSBmcm9tICdAamVuZy90d2Vlbic7XG5pbXBvcnQgeyBDYW52YXNUZXh0RXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvdGV4dCc7XG5pbXBvcnQgeyBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvaW1hZ2UnO1xuaW1wb3J0IHsgQ2FudmFzU2hhcGVFeHRlbnNpb24gfSBmcm9tICdAamVuZy9zaGFwZSc7XG5pbXBvcnQgeyBDYW52YXNFbmdpbmUgfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgU2NlbmVFeHRlbnNpb24gfSBmcm9tICdAamVuZy9zY2VuZSc7XG5pbXBvcnQgQ3VzdG9tUmVzb3VyY2VNYW5hZ2VyIGZyb20gJy4vZW5naW5lL3Jlc291cmNlcyc7XG5pbXBvcnQgQ3VzdG9tRW5naW5lIGZyb20gJy4vZW5naW5lL2VuZ2luZSc7XG5pbXBvcnQgbWFpbiBmcm9tICcuL21haW4nO1xuaW1wb3J0IHtcblx0QU5JTUFMSVNULCBBTklNQUxJU1RfSU1BR0UsIEFSQ0hFUiwgQVJDSEVSX0lNQUdFLCBURVNUX0NBTlZBUyxcbn0gZnJvbSAnLi9hc3NldHMnO1xuXG4vLyBwYWdlXG5kb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpbiA9ICcwJztcbmRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZyA9ICcwJztcblxuLy8gYmFzaWMgZW5naW5lXG5jb25zdCBlbmdpbmUgPSBuZXcgQ2FudmFzRW5naW5lKCk7XG5DYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbkNhbnZhc1RleHRFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuQ2FudmFzU2hhcGVFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuVHdlZW5FeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuU2NlbmVFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuTW91c2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuZW5naW5lLnNjcmVlbi5mdWxsc2NyZWVuID0gdHJ1ZTtcbmVuZ2luZS50aWNrZXIucGxheSgpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbmdpbmUucGxhdGZvcm0udmlldyk7XG5cbmNvbnN0IHBhcmFtZXRlcnMgPSB7XG5cdGdldFVwZGF0ZVRpbWUoKSB7XG5cdFx0cmV0dXJuIGVuZ2luZS51cGRhdGVyLmVsYXBzZWRUaW1lO1xuXHR9LFxuXHRnZXRSZW5kZXJUaW1lKCkge1xuXHRcdHJldHVybiBlbmdpbmUucmVuZGVyZXIuZWxhcHNlZFRpbWU7XG5cdH0sXG5cdGdldENhbnZhc1dpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIGVuZ2luZS5zY3JlZW4uZ2V0V2lkdGgoKTtcblx0fSxcblx0Z2V0Q2FudmFzSGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIGVuZ2luZS5zY3JlZW4uZ2V0SGVpZ2h0KCk7XG5cdH0sXG59O1xuXG4vLyBhcHBsaWNhdGlvblxuY29uc3QgYXBwID0gbWFpbihwYXJhbWV0ZXJzKTtcbmFwcC5zdGFydCgpO1xuZW5naW5lLnJvb3QgPSBhcHAgYXMgYW55IGFzIENvbXBvbmVudDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5jb25zb2xlLmxvZyhhcHApO1xuXG4vLyB0ZXN0IHBhdXNlXG5zZXRUaW1lb3V0KCgpID0+IGVuZ2luZS50aWNrZXIucGF1c2UoKSwgNTAwMCk7XG5zZXRUaW1lb3V0KCgpID0+IGVuZ2luZS50aWNrZXIucGxheSgpLCAxMDAwMCk7XG5cbi8vIGN1c3RvbSBlbmdpbmVcbmNvbnN0IGN1c3RvbUVuZ2luZSA9IG5ldyBDdXN0b21FbmdpbmUoKTtcbmN1c3RvbUVuZ2luZS5zY3JlZW4uZnVsbHNjcmVlbiA9IGZhbHNlO1xuY3VzdG9tRW5naW5lLnNjcmVlbi5oZWlnaHQgPSA2MDA7XG5jdXN0b21FbmdpbmUudXBkYXRlci5lbmFibGVkID0gZmFsc2U7XG5jdXN0b21FbmdpbmUucm9vdCA9IGVuZ2luZS5yb290O1xuY3VzdG9tRW5naW5lLnRpY2tlci5wbGF5KCk7XG5jdXN0b21FbmdpbmUucGxhdGZvcm0udmlldy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5jdXN0b21FbmdpbmUucGxhdGZvcm0udmlldy5zdHlsZS50b3AgPSAnMHB4JztcbmN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3LnN0eWxlLmxlZnQgPSAnNjAwcHgnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjdXN0b21FbmdpbmUucGxhdGZvcm0udmlldyk7XG5cbi8vIC8vIHNldCBjdXN0b20gcmVzb3VyY2VcbmVuZ2luZS5yZXNvdXJjZXMucmVzb3VyY2VzLnNldChcblx0VEVTVF9DQU5WQVMsXG5cdHtcblx0XHRhc3NldDogVEVTVF9DQU5WQVMsXG5cdFx0aW1hZ2U6IGN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3LFxuXHRcdGxvYWRlZDogdHJ1ZSxcblx0fSBhcyBJbWFnZVJlc291cmNlLFxuKTtcbmN1c3RvbUVuZ2luZS5yZXNvdXJjZXMucmVzb3VyY2VzLnNldChcblx0VEVTVF9DQU5WQVMsXG5cdHtcblx0XHRhc3NldDogVEVTVF9DQU5WQVMsXG5cdFx0aW1hZ2U6IGVuZ2luZS5wbGF0Zm9ybS52aWV3LFxuXHRcdGxvYWRlZDogdHJ1ZSxcblx0fSBhcyBJbWFnZVJlc291cmNlLFxuKTtcblxuLy8gY3VzdG9tIHJlc291cmNlIHJlc29sdmVyXG5jb25zdCByZXNvdXJjZU1hbmFnZXIgPSBuZXcgQ3VzdG9tUmVzb3VyY2VNYW5hZ2VyKCk7XG5yZXNvdXJjZU1hbmFnZXIuYWxpYXNlcy5zZXQoQVJDSEVSLnJlcGxhY2UoJ2lkOicsICcnKSwgQVJDSEVSX0lNQUdFKTtcbnJlc291cmNlTWFuYWdlci5hbGlhc2VzLnNldChBTklNQUxJU1QucmVwbGFjZSgnaWQ6JywgJycpLCBBTklNQUxJU1RfSU1BR0UpO1xucmVzb3VyY2VNYW5hZ2VyLmluaXQoZW5naW5lKTtcbnJlc291cmNlTWFuYWdlci5pbml0KGN1c3RvbUVuZ2luZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9