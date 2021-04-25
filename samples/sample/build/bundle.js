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
      var font = defaultTextFormat.font,
          size = defaultTextFormat.size,
          color = defaultTextFormat.color,
          alpha = defaultTextFormat.alpha,
          leading = defaultTextFormat.leading,
          letterSpacing = defaultTextFormat.letterSpacing;
      var defaultFont = _data_font__WEBPACK_IMPORTED_MODULE_2__.Font.getFont(font);
      var symbolSize = size * CORRECTION;
      context2d.font = _data_font__WEBPACK_IMPORTED_MODULE_2__.Font.getStyleFont(font, size);
      context2d.fillStyle = _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_1__.CanvasPatterns.colorPattern(color, alpha, colorTransform);
      var x = offsetX;

      for (var i = 0; i < text.length; i++) {
        var symbol = text[i];

        if (symbol === '\n') {
          x = offsetX;
          y += size + leading;
        } else {
          var symbolNext = text[i + 1];
          var advance = _data_font__WEBPACK_IMPORTED_MODULE_2__.Font.getAdvance(defaultFont, size, symbol, symbolNext) + letterSpacing;
          context2d.fillText(symbol, x, y + symbolSize);
          x += advance;
        }
      }
    } else {
      var _metrics = metrics,
          lines = _metrics.lines;

      for (var _i = 0; _i < lines.length; _i++) {
        var line = lines[_i];

        if (line.symbols.length) {
          var first = line.symbols[0];
          var alignValue = _data_format__WEBPACK_IMPORTED_MODULE_4__.TextFormat.getAlignValue(first.format);

          var _x = (realWidth - line.width) * alignValue;

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

            context2d.font = _data_font__WEBPACK_IMPORTED_MODULE_2__.Font.getStyleFont(_symbol.format.font, _size);
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

  function getSimpleMetrics(component) {
    var text = component.text;

    if (typeof text !== 'string') {
      return undefined;
    }

    _format__WEBPACK_IMPORTED_MODULE_1__.TextFormat.combine(component.format, _format__WEBPACK_IMPORTED_MODULE_1__.TextFormat.defaultTextFormat, defaultTextFormat);
    var size = defaultTextFormat.size,
        letterSpacing = defaultTextFormat.letterSpacing,
        leading = defaultTextFormat.leading;
    var font = _font__WEBPACK_IMPORTED_MODULE_0__.Font.getFont(defaultTextFormat.font);
    var width = 0;
    var height = size;

    for (var i = 0; i < text.length; i++) {
      var symbol = text[i];

      if (symbol === '\n') {
        height += size + leading;
        width = 0;
      } else {
        var symbolNext = text[i + 1];
        var advance = _font__WEBPACK_IMPORTED_MODULE_0__.Font.getAdvance(font, size, symbol, symbolNext) + letterSpacing;
        width += advance;
      }
    }

    return {
      width: width,
      height: height
    };
  }

  TextMetrics.getSimpleMetrics = getSimpleMetrics;
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
/* harmony import */ var _data_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/format */ "../../packages/text/dist/data/format.js");
/* harmony import */ var _data_metrics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/metrics */ "../../packages/text/dist/data/metrics.js");




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
    return typeof component.text === 'string' && isAutoSize(component) && _data_format__WEBPACK_IMPORTED_MODULE_2__.TextFormat.getAlignValue(component.format) === 0;
  }

  Text.isSimple = isSimple;

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
    var metrics;

    if (Text.isSimple(component)) {
      metrics = _data_metrics__WEBPACK_IMPORTED_MODULE_3__.TextMetrics.getSimpleMetrics(component);
    } else {
      metrics = _data_metrics__WEBPACK_IMPORTED_MODULE_3__.TextMetrics.getMetrics(component);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jYW52YXMtZW5naW5lL2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NhbnZhcy1lbmdpbmUvZGlzdC9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvY29tcG9uZW50cy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9jb3JlL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvcmUvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvcGl2b3QuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9leHRlbnNpb25zL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9leHRlbnNpb25zL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvdXBkYXRlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL2RlYnVnLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvcG9pbnRlcnMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3RpY2tlci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3VwZGF0ZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2lucHV0L21vdXNlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvYm91bmRzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvY29sb3ItdHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9wb2ludC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvaW1hZ2UvZGlzdC9jYW52YXMtaW1hZ2UtY29sb3IuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvY2FudmFzLWltYWdlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9pbWFnZS9kaXN0L2ltYWdlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9pbWFnZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9yZXNvdXJjZXMvZGlzdC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvcmVzb3VyY2VzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3Jlc291cmNlcy9kaXN0L3N0cmluZy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2NlbmUvZGlzdC9zY2VuZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvZWxsaXBzZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvcGF0aC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9zaGFwZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvc3RyaW5nLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9zdHlsZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9kYXRhL2RhdGEuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvZGF0YS9wYXRoLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2RhdGEvc3RyaW5nLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2dyYXBoaWNzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L3NoYXBlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvY2FudmFzL3RleHQuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC9kYXRhL2ZvbnQuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC9kYXRhL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2RhdGEvbWV0cmljcy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvdGV4dC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdHdlZW4vZGlzdC9lYXNpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3R3ZWVuL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3R3ZWVuL2Rpc3QvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2FydGlmYWN0LnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9hc3NldHMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2VuZ2luZS9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2VuZ2luZS9pbWFnZS50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvZW5naW5lL3BsYXRmb3JtLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9lbmdpbmUvcmVzb3VyY2VzLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9mcHMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL3ByZWxvYWRlci50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvdW5pdC50cyIsIndlYnBhY2s6Ly9zYW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2FtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zYW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiQ2FudmFzRW5naW5lIiwibW9kdWxlIiwiUGxhdGZvcm0iLCJDYW52YXNQbGF0Zm9ybSIsIkVuZ2luZSIsInBvaW50MSIsIlBvaW50IiwicG9pbnQyIiwiQ2FudmFzUGF0dGVybnMiLCJjb2xvclBhdHRlcm4iLCJjb2xvciIsImFscGhhIiwiY3QiLCJyIiwiZyIsImIiLCJhIiwiQ29sb3JUcmFuc2Zvcm0iLCJyZWRNdWx0aXBsaWVyIiwicmVkT2Zmc2V0IiwiZ3JlZW5NdWx0aXBsaWVyIiwiZ3JlZW5PZmZzZXQiLCJibHVlTXVsdGlwbGllciIsImJsdWVPZmZzZXQiLCJhbHBoYU11bHRpcGxpZXIiLCJhbHBoYU9mZnNldCIsImFkZEdyYWRpZW50Q29sb3JzIiwicGF0dGVybiIsImNvbG9ycyIsImFscGhhcyIsInJhdGlvcyIsImNvbG9yVHJhbnNmb3JtIiwiaSIsImxlbmd0aCIsInJnYiIsInJhdGlvIiwiYWRkQ29sb3JTdG9wIiwicmFkaWFsR3JhZGllbnRQYXR0ZXJuIiwibWF0cml4IiwiY29udGV4dCIsIngiLCJ5IiwiTWF0cml4IiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJ0eCIsInR5IiwiTWF0aCIsImFicyIsImxpbmVhckdyYWRpZW50UGF0dGVybiIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYml0bWFwUGF0dGVybiIsImltYWdlIiwicmVwZWF0IiwiY3JlYXRlUGF0dGVybiIsImFyZ3VtZW50cyIsInZpZXciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0cyIsImdldENvbnRleHQiLCJjdXN0b21Db250ZXh0cyIsInB1c2giLCJwb3AiLCJlbmdpbmUiLCJkZWJ1ZyIsIndhcm5pbmciLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImNsZWFyIiwidXBkYXRlU2l6ZSIsInNldFRyYW5zZm9ybSIsImNsZWFyUmVjdCIsInNjcmVlbiIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwicGl4ZWxSYXRpbyIsImdldFBpeGVsUmF0aW8iLCJ2aWV3V2lkdGgiLCJmbG9vciIsInZpZXdIZWlnaHQiLCJzdHlsZSIsIkNPTlRBSU5FUiIsIkNvbnRhaW5lciIsIm51bUNoaWxkcmVuIiwiY29udGFpbmVyIiwiY2hpbGRyZW4iLCJBcnJheSIsImlzQXJyYXkiLCJ0eXBlIiwia2V5cyIsIk9iamVjdCIsIkNvbnRhaW5lckV4dGVuc2lvbiIsInJlbmRlciIsInJlbmRlcmVyIiwiZGVwdGgiLCJjb21wb25lbnQiLCJyZW5kZXJDb21wb25lbnQiLCJjb21wb25lbnRzTWFwIiwidXBkYXRlIiwidXBkYXRlciIsInVwZGF0ZUNvbXBvbmVudCIsImhpdFRlc3QiLCJwb2ludGVyRXZlbnRzIiwicG9pbnRlcnMiLCJyZXN1bHQiLCJkaXNwYXRjaENvbXBvbmVudCIsImxvYWRlZCIsImxvYWRpbmciLCJwcm9ncmVzcyIsImNvbXBvbmVudENvbnRleHQiLCJpbml0IiwiY29tcG9uZW50cyIsInNldCIsIkxPQURFUiIsIkxvYWRlciIsImdldExvYWRpbmdQcm9ncmVzcyIsImxvYWRlciIsImxvYWRpbmdQcm9ncmVzcyIsImlzTG9hZGVkIiwibmVlZExvYWRpbmdDaGVjayIsImxvYWRpbmdDaGVjayIsIkxvYWRlckV4dGVuc2lvbiIsIm9uTG9hZGVkIiwiQ29tcG9uZW50cyIsIlNjcmVlbiIsIlVwZGF0ZXIiLCJMb2FkaW5nIiwiUmVuZGVyZXIiLCJQb2ludGVycyIsIlRpY2tlciIsIkRlYnVnIiwiUmVzb3VyY2VzIiwicGxhdGZvcm0iLCJ0aWNrZXIiLCJyZXNvdXJjZXMiLCJFbmdpbmVGZWF0dXJlIiwiRGlzcGxheSIsImlzVmlzaWJsZSIsInZpc2libGUiLCJQaXZvdCIsImdldFgiLCJwaXZvdCIsInBpdm90WCIsImdldFkiLCJwaXZvdFkiLCJoYXNWYWx1ZXMiLCJoYW5kbGVyc01hcCIsInBvaW50ZXJEb3duIiwicG9pbnRlclVwIiwicG9pbnRlck1vdmUiLCJwb2ludGVyT3ZlciIsInBvaW50ZXJPdXQiLCJQb2ludGVyIiwiaXNQb2ludGVyT3ZlciIsInBvaW50ZXIiLCJpc1BvaW50ZXJFbmFibGVkIiwicG9pbnRlckVuYWJsZWQiLCJkaXNwYXRjaEV2ZW50IiwiaWQiLCJoYW5kbGVyTmFtZSIsImV2ZW50IiwiVHJhbnNmb3JtIiwiZ2V0TWF0cml4IiwidHJhbnNmb3JtIiwiYyIsImQiLCJyb3RhdGlvbiIsInNjYWxlWCIsInNjYWxlIiwic2NhbGVZIiwiY29zIiwic2luIiwiZ2V0Q29sb3JUcmFuc2Zvcm0iLCJ0aW50IiwidmFsdWUiLCJ2YWx1ZUludmVydGVkIiwiYnJpZ2h0bmVzcyIsInVuZGVmaW5lZCIsInBlcmNlbnQiLCJvZmZzZXQiLCJVcGRhdGUiLCJpc0VuYWJsZWQiLCJlbmFibGVkIiwidGltZSIsIm9uVXBkYXRlIiwicHJvcGVydGllcyIsIk1hcCIsImVycm9ycyIsIndhcm5pbmdzIiwiY29uc29sZSIsImxvZyIsImFyZ3MiLCJTdHJpbmciLCJjb3VudCIsImdldCIsImVycm9yIiwid2FybiIsImVsYXBzZWRUaW1lIiwiaGFuZGxlciIsInJvb3QiLCJzdGFydFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImdsb2JhbCIsImxvY2FsIiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJiYXNlIiwicGFyZW50IiwiYmVnaW4iLCJlbmQiLCJSZXNvdXJjZSIsImdldFByb2dyZXNzIiwicmVzb3VyY2UiLCJieXRlc1RvdGFsIiwiYnl0ZXNMb2FkZWQiLCJyZXNvbHZlcnMiLCJTZXQiLCJhc3NldCIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1bGxzY3JlZW4iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiZnJhbWVSYXRlIiwicGF1c2VkIiwidXBkYXRlRnJhbWUiLCJjdXJyZW50VGltZSIsImRlbHRhVGltZSIsInVwZGF0ZU5leHRGcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZVByb3BlcnRpZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJjbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRMZWZ0IiwiY2xpZW50WSIsInRvcCIsImNsaWVudFRvcCIsImRpc3BhdGNoIiwicHJldmVudERlZmF1bHQiLCJNb3VzZUV4dGVuc2lvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJCb3VuZHMiLCJlbXB0eSIsIm1pblgiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJtaW5ZIiwibWF4WCIsIk1JTl9WQUxVRSIsIm1heFkiLCJzZXRFbXB0eSIsImJvdW5kcyIsImlzRW1wdHkiLCJ0b1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInRlc3RYIiwidGVzdFkiLCJ0ZXN0IiwidGVzdFBvaW50IiwicG9pbnQiLCJpc0VtcHR5V2l0aEFscGhhIiwiY29weSIsImZyb20iLCJ0byIsImNvbmNhdCIsImN0MSIsImN0MCIsIm1hdHJpeDAiLCJtYXRyaXgxIiwiZ2V0RGV0ZXJtaW5hbnQiLCJpbnZlcnQiLCJkZXRlcm1pbmFudCIsInRyYW5zZm9ybVBvaW50IiwidHJhbnNmb3JtUG9pbnRMb2NhbCIsInRyYW5zZm9ybUludmVyc2VQb2ludCIsInRyYW5zZm9ybUJvdW5kcyIsInJ4IiwicnkiLCJyciIsInJiIiwibngxIiwibnkxIiwibngyIiwibnkyIiwibngzIiwibnkzIiwibng0Iiwibnk0IiwicmlnaHQiLCJib3R0b20iLCJzcXJ0IiwiYW5nbGUiLCJhdGFuMiIsImVxdWFscyIsInBvaW50MCIsInNvdXJjZSIsInRhcmdldCIsIm5vcm1hbGl6ZSIsInRoaWNrbmVzcyIsImRpc3RhbmNlIiwiZHgiLCJkeSIsImludGVycG9sYXRlIiwicG9sYXIiLCJSZWN0YW5nbGUiLCJpbnRlcnNlY3Rpb24iLCJjb250YWlucyIsInJvdW5kIiwic2NyZWVuQm91bmRzIiwiQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiIsInNyYyIsImNvbnRleHQyZCIsImdsb2JhbEFscGhhIiwiZHJhd0ltYWdlIiwiY3VzdG9tQ29udGV4dCIsImNyZWF0ZUN1c3RvbUNvbnRleHQiLCJpbWFnZURhdGEiLCJnZXRJbWFnZURhdGEiLCJybSIsImdtIiwiYm0iLCJhbSIsInJvIiwiZ28iLCJibyIsImFvIiwiZGF0YSIsInB1dEltYWdlRGF0YSIsImRlc3Ryb3lDdXN0b21Db250ZXh0IiwiSW1hZ2VFeHRlbnNpb24iLCJJTUFHRSIsIkNhbnZhc0ltYWdlRXh0ZW5zaW9uIiwiSW1hZ2UiLCJjYWxjdWxhdGVCb3VuZHMiLCJJbWFnZVJlc291cmNlIiwiZXh0ZW5zaW9uIiwic3BsaXQiLCJvbmxvYWQiLCJvbmVycm9yIiwiZSIsImFkZCIsIlN0cmluZ1Jlc291cmNlIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwib25wcm9ncmVzcyIsInRvdGFsIiwicmVzcG9uc2VUZXh0Iiwic2VuZCIsIlNDRU5FIiwiU2NlbmVFeHRlbnNpb24iLCJzY2VuZSIsIkpTT04iLCJwYXJzZSIsIm1lc3NhZ2UiLCJQSV8yIiwiUEkiLCJhcHBseUVsbGlwc2UiLCJoYXNGaWxsIiwicmFkaXVzIiwicmFkaXVzWCIsInJhZGl1c1kiLCJiZWdpblBhdGgiLCJlbGxpcHNlIiwiY2xvc2VQYXRoIiwiYXBwbHlDb21tYW5kIiwiY29tbWFuZCIsIm1vdmVUbyIsImxpbmVUbyIsImN1cnZlVG8iLCJxdWFkcmF0aWNDdXJ2ZVRvIiwiY3giLCJjeSIsImN1YmljQ3VydmVUbyIsImJlemllckN1cnZlVG8iLCJzeCIsInN5IiwiYXBwbHlQYXRoIiwiYXBwbHlSZWN0YW5nbGUiLCJyZWN0IiwicmVuZGVyR3JhcGhpY3MiLCJmaWxsIiwic3Ryb2tlIiwiaGFzU3Ryb2tlIiwiZXhpc3QiLCJwYXRoIiwiYXBwbHlTdHJpbmciLCJzZXRGaWxsU3R5bGUiLCJzZXRTdHJva2VTdHlsZSIsIkNhbnZhc1NoYXBlRXh0ZW5zaW9uIiwic2hhcGUiLCJTaGFwZSIsIlNoYXBlRXh0ZW5zaW9uIiwiU0hBUEUiLCJyZWFkZXIiLCJHcmFwaGljc1N0cmluZ1JlYWRlciIsInNldFBhdGgiLCJyZWFkTmV4dCIsImdldENvbW1hbmQiLCJlbXB0eU1hdHJpeCIsImVtcHR5QXJyYXkiLCJnZXRDYW52YXNQYXR0ZXJuIiwic29saWQiLCJtbCIsImNsIiwiYWwiLCJybCIsIm1yIiwiY3IiLCJhciIsImJpdG1hcEZpbGwiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsImxpbmVDYXAiLCJsaW5lSm9pbiIsIm1pdGVyTGltaXQiLCJjYXBzIiwiam9pbnRzIiwiUmVjdGFuZ2xlRGF0YSIsIkVsbGlwc2VEYXRhIiwiUGF0aERhdGEiLCJwYXRoRGF0YSIsIkdyYXBoaWNzU3RyaW5nIiwiUGF0aENvbW1hbmQiLCJHcmFwaGljc0RhdGEiLCJOVU1CRVJTX0NPVU5UIiwiTSIsIm0iLCJMIiwibCIsIkgiLCJoIiwiViIsInYiLCJDIiwiUyIsInMiLCJRIiwicSIsIlQiLCJ0IiwiQ09NTUFORF9SRUdFWCIsIk5VTUJFUl9SRUdFWCIsIkdyYXBoaWNzU3RyaW5nU3RyZWFtIiwiYnVmZmVyIiwic3ltYm9sUmVnZXgiLCJsYXN0SW5kZXgiLCJzeW1ib2xNYXRjaCIsImV4ZWMiLCJzeW1ib2wiLCJudW1iZXJNYXRjaCIsInBhcnNlRmxvYXQiLCJzdHJlYW0iLCJjb21tYW5kRXhpc3RzIiwibGFzdFgiLCJsYXN0WSIsImxhc3RDWCIsImxhc3RDWSIsImdldEJ1ZmZlciIsImUwIiwiZTEiLCJlMiIsImUzIiwiZTQiLCJlNSIsIkdyYXBoaWNzIiwic21vb3RoIiwic3ByZWFkIiwiaW50ZXJwb2xhdGlvbiIsImZvY2FsUG9pbnRSYXRpbyIsInBpeGVsSGludGluZyIsInNjYWxlTW9kZSIsImdldFBhdGgiLCJlbGxpcHNlV2lkdGgiLCJlbGxpcHNlSGVpZ2h0IiwidyIsImsiLCJveCIsIm95IiwieGUiLCJ5ZSIsInhtIiwieW0iLCJjcmVhdGVEYXRhIiwiZ3JhcGhpY3NEYXRhIiwiZ2V0R3JhcGhpY3MiLCJkZWZhdWx0VGV4dEZvcm1hdCIsIkNPUlJFQ1RJT04iLCJDYW52YXNUZXh0RXh0ZW5zaW9uIiwibWV0cmljcyIsInNpbXBsZSIsIlRleHQiLCJUZXh0TWV0cmljcyIsImZvcm1hdCIsImJvcmRlciIsImJhY2tncm91bmQiLCJUZXh0Rm9ybWF0IiwicmVhbFdpZHRoIiwicmVhbEhlaWdodCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiYWxpZ25WZXJ0aWNhbFZhbHVlIiwidGV4dEJhc2VsaW5lIiwidGV4dCIsImZvbnQiLCJzaXplIiwibGVhZGluZyIsImxldHRlclNwYWNpbmciLCJkZWZhdWx0Rm9udCIsIkZvbnQiLCJzeW1ib2xTaXplIiwic3ltYm9sTmV4dCIsImFkdmFuY2UiLCJmaWxsVGV4dCIsImxpbmVzIiwibGluZSIsInN5bWJvbHMiLCJmaXJzdCIsImFsaWduVmFsdWUiLCJsaW5lSGVpZ2h0IiwiaiIsImFsaWduU3ltYm9sVmFsdWUiLCJUZXh0RXh0ZW5zaW9uIiwiVEVYVCIsIkVNIiwiZm9udHMiLCJnZXRTdHlsZUZvbnQiLCJtZWFzdXJlVGV4dCIsImdldENoYXJXaWR0aCIsImNoYXIiLCJ3aWR0aHMiLCJuYW1lIiwiZ2V0S2VybmluZyIsInNlY29uZCIsInBhaXIiLCJrZXJuaW5nIiwia2VybmluZ3MiLCJ3aWR0aFNlY29uZCIsIndpZHRoVG90YWwiLCJnZXRBZHZhbmNlIiwiZ2V0Rm9udCIsImJvbGQiLCJpdGFsaWMiLCJ1bmRlcmxpbmUiLCJhbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJjb21iaW5lIiwiZGVmYXVsdEZvcm1hdCIsImdldEFsaWduVmFsdWUiLCJnZXRWZXJ0aWNhbEFsaWduVmFsdWUiLCJUZXh0TGluZSIsImNyZWF0ZSIsIm1heCIsImNvcnJlY3RXaWR0aCIsImxhc3QiLCJjb3JyZWN0SGVpZ2h0IiwiZ2V0U3ltYm9scyIsInN5bWJvbEZvcm1hdCIsInN5bWJvbEZvbnQiLCJibG9jayIsImdldExpbmVzIiwid29yZFdyYXAiLCJtdWx0aWxpbmUiLCJ3b3JkIiwiZ2V0TWV0cmljcyIsImdldFNpbXBsZU1ldHJpY3MiLCJnZXRUZXh0IiwiaXNBdXRvU2l6ZSIsImlzU2ltcGxlIiwiaXNXb3JkV3JhcCIsImlzTXVsdGlsaW5lIiwiTElORUFSIiwiUVVBRFJBVElDIiwiUVVBRFJBVElDX0lOIiwiUVVBRFJBVElDX09VVCIsIkNVQklDIiwiQ1VCSUNfSU4iLCJDVUJJQ19PVVQiLCJRVUFSVElDIiwiUVVBUlRJQ19JTiIsIlFVQVJUSUNfT1VUIiwiUVVJTlRJQyIsIlFVSU5USUNfSU4iLCJRVUlOVElDX09VVCIsIlNJTlVTT0lEQUwiLCJTSU5VU09JREFMX0lOIiwiU0lOVVNPSURBTF9PVVQiLCJFWFBPTkVOVElBTCIsIkVYUE9ORU5USUFMX0lOIiwiRVhQT05FTlRJQUxfT1VUIiwiQ0lSQ1VMQVIiLCJDSVJDVUxBUl9JTiIsIkNJUkNVTEFSX09VVCIsIkVMQVNUSUMiLCJFTEFTVElDX0lOIiwiRUxBU1RJQ19PVVQiLCJCQUNLIiwiQkFDS19JTiIsIkJBQ0tfT1VUIiwiQk9VTkNFIiwiQk9VTkNFX0lOIiwiQk9VTkNFX09VVCIsImVhc2luZyIsInBvdyIsIlRXRUVOIiwiVHdlZW5FeHRlbnNpb24iLCJ0d2VlbiIsInBoYXNlcyIsInBoYXNlIiwiZWFzaW5nTmFtZSIsInRvTG93ZXJDYXNlIiwiZWFzaW5nTWV0aG9kIiwiZWFzaW5nVmFsdWUiLCJzdGF0ZSIsImtleSIsImZyb21WYWx1ZSIsInRvVmFsdWUiLCJzdGF0ZVZhbHVlIiwibG9vcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNPLElBQU1BLFlBQWI7QUFBQTs7QUFBQTs7QUFDSSwwQkFBeUI7QUFBQTs7QUFBQSxRQUFiQyxNQUFhLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3JCQSxVQUFNLENBQUNDLFFBQVAsdUJBQWtCRCxNQUFNLENBQUNDLFFBQXpCLCtEQUFxQ0MscURBQXJDO0FBRHFCLDZCQUVmRixNQUZlO0FBR3hCOztBQUpMO0FBQUEsRUFBa0NHLDhDQUFsQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBLElBQU1DLE1BQU0sR0FBR0MsbURBQUEsRUFBZjtBQUNBLElBQU1DLE1BQU0sR0FBR0QsbURBQUEsRUFBZjtBQUNPLElBQUlFLGNBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxjQUFWLEVBQTBCO0FBQ3ZCLFdBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCQyxLQUE3QixFQUFvQ0MsRUFBcEMsRUFBd0M7QUFDcEMsUUFBSUMsQ0FBQyxHQUFHSCxLQUFLLElBQUksRUFBVCxHQUFjLElBQXRCO0FBQ0EsUUFBSUksQ0FBQyxHQUFHSixLQUFLLElBQUksQ0FBVCxHQUFhLElBQXJCO0FBQ0EsUUFBSUssQ0FBQyxHQUFHTCxLQUFLLEdBQUcsSUFBaEI7QUFDQSxRQUFJTSxDQUFDLEdBQUdMLEtBQUssR0FBRyxJQUFoQjs7QUFDQSxRQUFJLENBQUNNLDhEQUFBLENBQXVCTCxFQUF2QixDQUFMLEVBQWlDO0FBQzdCQyxPQUFDLEdBQUlBLENBQUMsR0FBR0QsRUFBRSxDQUFDTSxhQUFQLEdBQXVCTixFQUFFLENBQUNPLFNBQTNCLEdBQXdDLElBQTVDO0FBQ0FMLE9BQUMsR0FBSUEsQ0FBQyxHQUFHRixFQUFFLENBQUNRLGVBQVAsR0FBeUJSLEVBQUUsQ0FB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QUUsRUFBRSxDQUFDLEVBQUUsaURBQVksQ0FBQyxDQUFDO0FBQ3JFLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNEQUFpQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxvREFBZSxDQUFDLENBQUM7QUFDM0UsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVuZ2luZSB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQ2FudmFzUGxhdGZvcm0gfSBmcm9tICcuL3BsYXRmb3JtJztcbmV4cG9ydCBjbGFzcyBDYW52YXNFbmdpbmUgZXh0ZW5kcyBFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1vZHVsZSA9IHt9KSB7XG4gICAgICAgIG1vZHVsZS5QbGF0Zm9ybSA9IG1vZHVsZS5QbGF0Zm9ybSA/PyBDYW52YXNQbGF0Zm9ybTtcbiAgICAgICAgc3VwZXIobW9kdWxlKTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3BhdHRlcm5zJztcbmV4cG9ydCAqIGZyb20gJy4vcGxhdGZvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9lbmdpbmUnO1xuIiwiaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0sIE1hdHJpeCwgUG9pbnQgfSBmcm9tICdAamVuZy9nZW9tJztcbmNvbnN0IHBvaW50MSA9IFBvaW50LmVtcHR5KCk7XG5jb25zdCBwb2ludDIgPSBQb2ludC5lbXB0eSgpO1xuZXhwb3J0IHZhciBDYW52YXNQYXR0ZXJucztcbihmdW5jdGlvbiAoQ2FudmFzUGF0dGVybnMpIHtcbiAgICBmdW5jdGlvbiBjb2xvclBhdHRlcm4oY29sb3IsIGFscGhhLCBjdCkge1xuICAgICAgICBsZXQgciA9IGNvbG9yID4+IDE2ICYgMHhmZjtcbiAgICAgICAgbGV0IGcgPSBjb2xvciA+PiA4ICYgMHhmZjtcbiAgICAgICAgbGV0IGIgPSBjb2xvciAmIDB4ZmY7XG4gICAgICAgIGxldCBhID0gYWxwaGEgKiAweGZmO1xuICAgICAgICBpZiAoIUNvbG9yVHJhbnNmb3JtLmlzRW1wdHkoY3QpKSB7XG4gICAgICAgICAgICByID0gKHIgKiBjdC5yZWRNdWx0aXBsaWVyICsgY3QucmVkT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBnID0gKGcgKiBjdC5ncmVlbk11bHRpcGxpZXIgKyBjdC5ncmVlbk9mZnNldCkgJiAweGZmO1xuICAgICAgICAgICAgYiA9IChiICogY3QuYmx1ZU11bHRpcGxpZXIgKyBjdC5ibHVlT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBhID0gKGEgKiBjdC5hbHBoYU11bHRpcGxpZXIgKyBjdC5hbHBoYU9mZnNldCkgJiAweGZmO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhIDwgMHhmZikge1xuICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YSAvIDB4ZmZ9KWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4gPSBjb2xvclBhdHRlcm47XG4gICAgZnVuY3Rpb24gYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJnYiA9IGNvbG9yc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGFscGhhID0gYWxwaGFzW2ldO1xuICAgICAgICAgICAgbGV0IHJhdGlvID0gcmF0aW9zW2ldIC8gMHhGRjtcbiAgICAgICAgICAgIGlmIChyYXRpbyA8IDApXG4gICAgICAgICAgICAgICAgcmF0aW8gPSAwO1xuICAgICAgICAgICAgaWYgKHJhdGlvID4gMSlcbiAgICAgICAgICAgICAgICByYXRpbyA9IDE7XG4gICAgICAgICAgICBwYXR0ZXJuLmFkZENvbG9yU3RvcChyYXRpbywgY29sb3JQYXR0ZXJuKHJnYiwgYWxwaGEsIGNvbG9yVHJhbnNmb3JtKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMuYWRkR3JhZGllbnRDb2xvcnMgPSBhZGRHcmFkaWVudENvbG9ycztcbiAgICBmdW5jdGlvbiByYWRpYWxHcmFkaWVudFBhdHRlcm4obWF0cml4LCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCkge1xuICAgICAgICBwb2ludDEueCA9IDE2MzguNDtcbiAgICAgICAgcG9pbnQxLnkgPSAwO1xuICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludDEsIHBvaW50MSk7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KG1hdHJpeC50eCwgbWF0cml4LnR5LCAwLCBtYXRyaXgudHgsIG1hdHJpeC50eSwgTWF0aC5hYnMoKHBvaW50MS54IC0gbWF0cml4LnR4KSAvIDIpKTtcbiAgICAgICAgYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMucmFkaWFsR3JhZGllbnRQYXR0ZXJuID0gcmFkaWFsR3JhZGllbnRQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGxpbmVhckdyYWRpZW50UGF0dGVybihtYXRyaXgsIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgICAgIHBvaW50MS54ID0gLTgxOS4yO1xuICAgICAgICBwb2ludDEueSA9IDA7XG4gICAgICAgIHBvaW50Mi54ID0gODE5LjI7XG4gICAgICAgIHBvaW50Mi55ID0gMDtcbiAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgcG9pbnQxLCBwb2ludDEpO1xuICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludDIsIHBvaW50Mik7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KHBvaW50MS54LCBwb2ludDEueSwgcG9pbnQyLngsIHBvaW50Mi55KTtcbiAgICAgICAgYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMubGluZWFyR3JhZGllbnRQYXR0ZXJuID0gbGluZWFyR3JhZGllbnRQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGJpdG1hcFBhdHRlcm4oaW1hZ2UsIHJlcGVhdCwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVQYXR0ZXJuKGltYWdlLCByZXBlYXQgPyAncmVwZWF0JyA6ICdub25lJyk7XG4gICAgICAgIGlmIChwYXR0ZXJuKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmJpdG1hcFBhdHRlcm4gPSBiaXRtYXBQYXR0ZXJuO1xufSkoQ2FudmFzUGF0dGVybnMgfHwgKENhbnZhc1BhdHRlcm5zID0ge30pKTtcbiIsImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGplbmcvY29yZSc7XG5leHBvcnQgY2xhc3MgQ2FudmFzUGxhdGZvcm0gZXh0ZW5kcyBQbGF0Zm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW3RoaXMudmlldy5nZXRDb250ZXh0KCcyZCcpXTtcbiAgICAgICAgdGhpcy5jdXN0b21Db250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0c1t0aGlzLmNvbnRleHRzLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgICBzYXZlQ29udGV4dChjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dHMucHVzaChjb250ZXh0KTtcbiAgICB9XG4gICAgcmVzdG9yZUNvbnRleHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdUcnlpbmcgdG8gcmVzdG9yZSBtYWluIGNvbnRleHQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVDdXN0b21Db250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dDtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tQ29udGV4dHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gdGhpcy5jdXN0b21Db250ZXh0cy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy52aWV3O1xuICAgICAgICBpZiAoY29udGV4dC5jYW52YXMud2lkdGggIT09IHdpZHRoKSB7XG4gICAgICAgICAgICBjb250ZXh0LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZXh0LmNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgICAgICAgY29udGV4dC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICBkZXN0cm95Q3VzdG9tQ29udGV4dChjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY3VzdG9tQ29udGV4dHMucHVzaChjb250ZXh0KTtcbiAgICB9XG4gICAgYmVnaW4oKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdmlldy53aWR0aCwgdmlldy5oZWlnaHQpO1xuICAgIH1cbiAgICB1cGRhdGVTaXplKCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRXaWR0aCgpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0SGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW8gPSB0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0UGl4ZWxSYXRpbygpO1xuICAgICAgICBjb25zdCB2aWV3V2lkdGggPSBNYXRoLmZsb29yKHdpZHRoICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHZpZXdIZWlnaHQgPSBNYXRoLmZsb29yKGhlaWdodCAqIHBpeGVsUmF0aW8pO1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IHRoaXM7XG4gICAgICAgIGlmICh2aWV3LndpZHRoICE9PSB2aWV3V2lkdGggfHwgdmlldy5oZWlnaHQgIT09IHZpZXdIZWlnaHQpIHtcbiAgICAgICAgICAgIHZpZXcud2lkdGggPSB2aWV3V2lkdGg7XG4gICAgICAgICAgICB2aWV3LmhlaWdodCA9IHZpZXdIZWlnaHQ7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IENPTlRBSU5FUiA9ICdjb250YWluZXInO1xuZXhwb3J0IHZhciBDb250YWluZXI7XG4oZnVuY3Rpb24gKENvbnRhaW5lcikge1xuICAgIGZ1bmN0aW9uIG51bUNoaWxkcmVuKGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgcmV0dXJuIGtleXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBDb250YWluZXIubnVtQ2hpbGRyZW4gPSBudW1DaGlsZHJlbjtcbn0pKENvbnRhaW5lciB8fCAoQ29udGFpbmVyID0ge30pKTtcbmV4cG9ydCB2YXIgQ29udGFpbmVyRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDb250YWluZXJFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHJlbmRlcmVyIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJlci5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyB1cGRhdGVyIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgdXBkYXRlci5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlci5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi51cGRhdGUgPSB1cGRhdGU7XG4gICAgZnVuY3Rpb24gaGl0VGVzdChjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgcG9pbnRlcnM6IHBvaW50ZXJFdmVudHMgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcG9pbnRlckV2ZW50cy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50ZXJFdmVudHMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcG9pbnRlckV2ZW50cy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0ga2V5cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwb2ludGVyRXZlbnRzLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9pbnRlckV2ZW50cy5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGxvYWRlZChjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgbG9hZGluZyB9ID0gZW5naW5lO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIGxvYWRpbmcuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyArPSBjb21wb25lbnRDb250ZXh0LnByb2dyZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnRDb250ZXh0LmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyAvPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgbG9hZGluZy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gbG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IGNvbXBvbmVudENvbnRleHQucHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSBjb21wb25lbnRDb250ZXh0LmxvYWRlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gbG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzICs9IGNvbXBvbmVudENvbnRleHQucHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudENvbnRleHQubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzIC89IGtleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2FkaW5nLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLmxvYWRlZCA9IGxvYWRlZDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy51cGRhdGUuc2V0KENPTlRBSU5FUiwgdXBkYXRlKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChDT05UQUlORVIsIHJlbmRlcik7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KENPTlRBSU5FUiwgaGl0VGVzdCk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5zZXQoQ09OVEFJTkVSLCBsb2FkZWQpO1xuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDb250YWluZXJFeHRlbnNpb24gfHwgKENvbnRhaW5lckV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBDb250YWluZXJFeHRlbnNpb24gfSBmcm9tICcuL2NvbnRhaW5lcic7XG5leHBvcnQgY29uc3QgTE9BREVSID0gJ2xvYWRlcic7XG5leHBvcnQgdmFyIExvYWRlcjtcbihmdW5jdGlvbiAoTG9hZGVyKSB7XG4gICAgZnVuY3Rpb24gZ2V0TG9hZGluZ1Byb2dyZXNzKGxvYWRlcikge1xuICAgICAgICByZXR1cm4gbG9hZGVyLmxvYWRpbmdQcm9ncmVzcyA/PyAwO1xuICAgIH1cbiAgICBMb2FkZXIuZ2V0TG9hZGluZ1Byb2dyZXNzID0gZ2V0TG9hZGluZ1Byb2dyZXNzO1xuICAgIGZ1bmN0aW9uIGlzTG9hZGVkKGxvYWRlcikge1xuICAgICAgICByZXR1cm4gbG9hZGVyLmxvYWRlZCA/PyBmYWxzZTtcbiAgICB9XG4gICAgTG9hZGVyLmlzTG9hZGVkID0gaXNMb2FkZWQ7XG4gICAgZnVuY3Rpb24gbmVlZExvYWRpbmdDaGVjayhsb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRlci5sb2FkaW5nQ2hlY2sgPz8gdHJ1ZTtcbiAgICB9XG4gICAgTG9hZGVyLm5lZWRMb2FkaW5nQ2hlY2sgPSBuZWVkTG9hZGluZ0NoZWNrO1xufSkoTG9hZGVyIHx8IChMb2FkZXIgPSB7fSkpO1xuZXhwb3J0IHZhciBMb2FkZXJFeHRlbnNpb247XG4oZnVuY3Rpb24gKExvYWRlckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGxvYWRlZChsb2FkZXIsIGVuZ2luZSkge1xuICAgICAgICBpZiAoIUxvYWRlci5uZWVkTG9hZGluZ0NoZWNrKGxvYWRlcikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBDb250YWluZXJFeHRlbnNpb24ubG9hZGVkKGxvYWRlciwgZW5naW5lKTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5sb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgbG9hZGVyLmxvYWRpbmdQcm9ncmVzcyA9IGNvbnRleHQucHJvZ3Jlc3M7XG4gICAgICAgIGlmIChjb250ZXh0LmxvYWRlZCAmJiAhbG9hZGVyLmxvYWRlZCkge1xuICAgICAgICAgICAgbG9hZGVyLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAobG9hZGVyLm9uTG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVyLm9uTG9hZGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgTG9hZGVyRXh0ZW5zaW9uLmxvYWRlZCA9IGxvYWRlZDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy51cGRhdGUuc2V0KExPQURFUiwgQ29udGFpbmVyRXh0ZW5zaW9uLnVwZGF0ZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoTE9BREVSLCBDb250YWluZXJFeHRlbnNpb24ucmVuZGVyKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoTE9BREVSLCBDb250YWluZXJFeHRlbnNpb24uaGl0VGVzdCk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5zZXQoTE9BREVSLCBsb2FkZWQpO1xuICAgIH1cbiAgICBMb2FkZXJFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShMb2FkZXJFeHRlbnNpb24gfHwgKExvYWRlckV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3JlbmRlcmVyJztcbmltcG9ydCB7IFVwZGF0ZXIgfSBmcm9tICcuLi9mZWF0dXJlcy91cGRhdGVyJztcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICcuLi9mZWF0dXJlcy9sb2FkaW5nJztcbmltcG9ydCB7IFNjcmVlbiB9IGZyb20gJy4uL2ZlYXR1cmVzL3NjcmVlbic7XG5pbXBvcnQgeyBQb2ludGVycyB9IGZyb20gJy4uL2ZlYXR1cmVzL3BvaW50ZXJzJztcbmltcG9ydCB7IFRpY2tlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3RpY2tlcic7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL2ZlYXR1cmVzL3BsYXRmb3JtJztcbmltcG9ydCB7IENvbnRhaW5lckV4dGVuc2lvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmltcG9ydCB7IERlYnVnIH0gZnJvbSAnLi4vZmVhdHVyZXMvZGVidWcnO1xuaW1wb3J0IHsgUmVzb3VyY2VzIH0gZnJvbSAnLi4vZmVhdHVyZXMvcmVzb3VyY2VzJztcbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuLi9mZWF0dXJlcy9jb21wb25lbnRzJztcbmltcG9ydCB7IExvYWRlckV4dGVuc2lvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGVyJztcbmV4cG9ydCBjbGFzcyBFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1vZHVsZSA9IHt9KSB7XG4gICAgICAgIHRoaXMuZGVwdGggPSAzMjtcbiAgICAgICAgbW9kdWxlLkNvbXBvbmVudHMgPSBtb2R1bGUuQ29tcG9uZW50cyA/PyBDb21wb25lbnRzO1xuICAgICAgICBtb2R1bGUuU2NyZWVuID0gbW9kdWxlLlNjcmVlbiA/PyBTY3JlZW47XG4gICAgICAgIG1vZHVsZS5QbGF0Zm9ybSA9IG1vZHVsZS5QbGF0Zm9ybSA/PyBQbGF0Zm9ybTtcbiAgICAgICAgbW9kdWxlLlVwZGF0ZXIgPSBtb2R1bGUuVXBkYXRlciA/PyBVcGRhdGVyO1xuICAgICAgICBtb2R1bGUuTG9hZGluZyA9IG1vZHVsZS5Mb2FkaW5nID8/IExvYWRpbmc7XG4gICAgICAgIG1vZHVsZS5SZW5kZXJlciA9IG1vZHVsZS5SZW5kZXJlciA/PyBSZW5kZXJlcjtcbiAgICAgICAgbW9kdWxlLlBvaW50ZXJzID0gbW9kdWxlLlBvaW50ZXJzID8/IFBvaW50ZXJzO1xuICAgICAgICBtb2R1bGUuVGlja2VyID0gbW9kdWxlLlRpY2tlciA/PyBUaWNrZXI7XG4gICAgICAgIG1vZHVsZS5EZWJ1ZyA9IG1vZHVsZS5EZWJ1ZyA/PyBEZWJ1ZztcbiAgICAgICAgbW9kdWxlLlJlc291cmNlcyA9IG1vZHVsZS5SZXNvdXJjZXMgPz8gUmVzb3VyY2VzO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBuZXcgbW9kdWxlLkNvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgbW9kdWxlLlNjcmVlbigpO1xuICAgICAgICB0aGlzLnBsYXRmb3JtID0gbmV3IG1vZHVsZS5QbGF0Zm9ybSh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVyID0gbmV3IG1vZHVsZS5VcGRhdGVyKHRoaXMpO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBuZXcgbW9kdWxlLkxvYWRpbmcodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgbW9kdWxlLlJlbmRlcmVyKHRoaXMpO1xuICAgICAgICB0aGlzLnBvaW50ZXJzID0gbmV3IG1vZHVsZS5Qb2ludGVycyh0aGlzKTtcbiAgICAgICAgdGhpcy50aWNrZXIgPSBuZXcgbW9kdWxlLlRpY2tlcih0aGlzKTtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IG5ldyBtb2R1bGUuRGVidWcoKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgbW9kdWxlLlJlc291cmNlcyh0aGlzKTtcbiAgICAgICAgQ29udGFpbmVyRXh0ZW5zaW9uLmluaXQodGhpcyk7XG4gICAgICAgIExvYWRlckV4dGVuc2lvbi5pbml0KHRoaXMpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgfVxufVxuIiwiZXhwb3J0IHZhciBEaXNwbGF5O1xuKGZ1bmN0aW9uIChEaXNwbGF5KSB7XG4gICAgZnVuY3Rpb24gaXNWaXNpYmxlKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LnZpc2libGUgPz8gdHJ1ZTtcbiAgICB9XG4gICAgRGlzcGxheS5pc1Zpc2libGUgPSBpc1Zpc2libGU7XG59KShEaXNwbGF5IHx8IChEaXNwbGF5ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUGl2b3Q7XG4oZnVuY3Rpb24gKFBpdm90KSB7XG4gICAgZnVuY3Rpb24gZ2V0WChwaXZvdCwgd2lkdGgpIHtcbiAgICAgICAgY29uc3QgeyBwaXZvdFggfSA9IHBpdm90O1xuICAgICAgICBpZiAocGl2b3RYKSB7XG4gICAgICAgICAgICByZXR1cm4gLXBpdm90WCAqIHdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBQaXZvdC5nZXRYID0gZ2V0WDtcbiAgICBmdW5jdGlvbiBnZXRZKHBpdm90LCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgeyBwaXZvdFkgfSA9IHBpdm90O1xuICAgICAgICBpZiAocGl2b3RZKSB7XG4gICAgICAgICAgICByZXR1cm4gLXBpdm90WSAqIGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgUGl2b3QuZ2V0WSA9IGdldFk7XG4gICAgZnVuY3Rpb24gaGFzVmFsdWVzKHBpdm90KSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RYLCBwaXZvdFkgfSA9IHBpdm90O1xuICAgICAgICByZXR1cm4gISFwaXZvdFggfHwgISFwaXZvdFk7XG4gICAgfVxuICAgIFBpdm90Lmhhc1ZhbHVlcyA9IGhhc1ZhbHVlcztcbn0pKFBpdm90IHx8IChQaXZvdCA9IHt9KSk7XG4iLCJjb25zdCBoYW5kbGVyc01hcCA9IHtcbiAgICBwb2ludGVyRG93bjogJ29uUG9pbnRlckRvd24nLFxuICAgIHBvaW50ZXJVcDogJ29uUG9pbnRlclVwJyxcbiAgICBwb2ludGVyTW92ZTogJ29uUG9pbnRlck1vdmUnLFxuICAgIHBvaW50ZXJPdmVyOiAnb25Qb2ludGVyT3ZlcicsXG4gICAgcG9pbnRlck91dDogJ29uUG9pbnRlck91dCcsXG59O1xuZXhwb3J0IHZhciBQb2ludGVyO1xuKGZ1bmN0aW9uIChQb2ludGVyKSB7XG4gICAgZnVuY3Rpb24gaXNQb2ludGVyT3Zlcihwb2ludGVyKSB7XG4gICAgICAgIHJldHVybiAhIXBvaW50ZXIucG9pbnRlck92ZXI7XG4gICAgfVxuICAgIFBvaW50ZXIuaXNQb2ludGVyT3ZlciA9IGlzUG9pbnRlck92ZXI7XG4gICAgZnVuY3Rpb24gaXNQb2ludGVyRW5hYmxlZChwb2ludGVyKSB7XG4gICAgICAgIHJldHVybiBwb2ludGVyLnBvaW50ZXJFbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIFBvaW50ZXIuaXNQb2ludGVyRW5hYmxlZCA9IGlzUG9pbnRlckVuYWJsZWQ7XG4gICAgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChwb2ludGVyLCB0eXBlLCB4LCB5LCBpZCkge1xuICAgICAgICBjb25zdCBoYW5kbGVyTmFtZSA9IGhhbmRsZXJzTWFwW3R5cGVdO1xuICAgICAgICBpZiAoaGFuZGxlck5hbWUgJiYgcG9pbnRlcltoYW5kbGVyTmFtZV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICAgICAgICAgIHR5cGUsIHgsIHksIGlkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHBvaW50ZXJbaGFuZGxlck5hbWVdKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xufSkoUG9pbnRlciB8fCAoUG9pbnRlciA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFRyYW5zZm9ybTtcbihmdW5jdGlvbiAoVHJhbnNmb3JtKSB7XG4gICAgZnVuY3Rpb24gZ2V0TWF0cml4KHRyYW5zZm9ybSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChtYXRyaXgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gbWF0cml4LmEgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gbWF0cml4LmIgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gbWF0cml4LmMgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gbWF0cml4LmQgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC50eCA9IG1hdHJpeC50eCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LnR5ID0gbWF0cml4LnR5ID8/IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb3RhdGlvbiB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBjb25zdCBzY2FsZVggPSB0cmFuc2Zvcm0uc2NhbGVYID8/IHRyYW5zZm9ybS5zY2FsZSA/PyAxO1xuICAgICAgICBjb25zdCBzY2FsZVkgPSB0cmFuc2Zvcm0uc2NhbGVZID8/IHRyYW5zZm9ybS5zY2FsZSA/PyAxO1xuICAgICAgICByZXN1bHQudHggPSB0cmFuc2Zvcm0ueCA/PyAwO1xuICAgICAgICByZXN1bHQudHkgPSB0cmFuc2Zvcm0ueSA/PyAwO1xuICAgICAgICBpZiAocm90YXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKHJvdGF0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKHJvdGF0aW9uKTtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gY29zICogc2NhbGVYO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSBzaW4gKiBzY2FsZVg7XG4gICAgICAgICAgICByZXN1bHQuYyA9IC1zaW4gKiBzY2FsZVk7XG4gICAgICAgICAgICByZXN1bHQuZCA9IGNvcyAqIHNjYWxlWTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYSA9IHNjYWxlWDtcbiAgICAgICAgcmVzdWx0LmIgPSAwO1xuICAgICAgICByZXN1bHQuYyA9IDA7XG4gICAgICAgIHJlc3VsdC5kID0gc2NhbGVZO1xuICAgIH1cbiAgICBUcmFuc2Zvcm0uZ2V0TWF0cml4ID0gZ2V0TWF0cml4O1xuICAgIGZ1bmN0aW9uIGdldENvbG9yVHJhbnNmb3JtKHRyYW5zZm9ybSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtKSB7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLnJlZE11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5ncmVlbk11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmJsdWVNdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLnJlZE9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5PZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFscGhhID0gdHJhbnNmb3JtLmFscGhhID8/IDE7XG4gICAgICAgIGNvbnN0IHsgdGludCB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAodGludCkge1xuICAgICAgICAgICAgY29uc3QgeyBjb2xvciA9IDAsIHZhbHVlID0gMSB9ID0gdGludDtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlSW52ZXJ0ZWQgPSAxIC0gdmFsdWU7XG4gICAgICAgICAgICBjb25zdCByID0gKGNvbG9yID4+IDE2KSAmIDB4ZmY7XG4gICAgICAgICAgICBjb25zdCBnID0gKGNvbG9yID4+IDgpICYgMHhmZjtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBjb2xvciAmIDB4ZmY7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGE7XG4gICAgICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHZhbHVlSW52ZXJ0ZWQ7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IHZhbHVlSW52ZXJ0ZWQ7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IHIgKiB2YWx1ZTtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IGcgKiB2YWx1ZTtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gYiAqIHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB7IGJyaWdodG5lc3MgfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKGJyaWdodG5lc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGJyaWdodG5lc3MgPiAxKSB7XG4gICAgICAgICAgICAgICAgYnJpZ2h0bmVzcyA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChicmlnaHRuZXNzIDwgLTEpIHtcbiAgICAgICAgICAgICAgICBicmlnaHRuZXNzID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gMSAtIE1hdGguYWJzKGJyaWdodG5lc3MpO1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgICAgICBpZiAoYnJpZ2h0bmVzcyA+IDApIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBicmlnaHRuZXNzICogMjU1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGFscGhhO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSBwZXJjZW50O1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IHBlcmNlbnQ7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSBwZXJjZW50O1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGE7XG4gICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IDA7XG4gICAgfVxuICAgIFRyYW5zZm9ybS5nZXRDb2xvclRyYW5zZm9ybSA9IGdldENvbG9yVHJhbnNmb3JtO1xufSkoVHJhbnNmb3JtIHx8IChUcmFuc2Zvcm0gPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBVcGRhdGU7XG4oZnVuY3Rpb24gKFVwZGF0ZSkge1xuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5lbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIFVwZGF0ZS5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbXBvbmVudCwgdGltZSkge1xuICAgICAgICBpZiAoY29tcG9uZW50Lm9uVXBkYXRlKSB7XG4gICAgICAgICAgICBjb21wb25lbnQub25VcGRhdGUodGltZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVXBkYXRlLnVwZGF0ZSA9IHVwZGF0ZTtcbn0pKFVwZGF0ZSB8fCAoVXBkYXRlID0ge30pKTtcbiIsImV4cG9ydCBjbGFzcyBDb21wb25lbnRzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlbmRlciA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy51cGRhdGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuaGl0VGVzdCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSBuZXcgTWFwKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIERlYnVnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMud2FybmluZ3MgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIGxvZyguLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gICAgfVxuICAgIGVycm9yKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5lcnJvcnMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICB0aGlzLmVycm9ycy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG4gICAgd2FybmluZyguLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoYXJncyk7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMud2FybmluZ3MuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMud2FybmluZ3Muc2V0KGlkLCBjb3VudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgTG9hZGluZyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdID0gY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQocm9vdCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB9XG4gICAgYmVnaW4oKSB7XG4gICAgfVxuICAgIGVuZCgpIHtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNYXRyaXgsIFBvaW50IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy9kaXNwbGF5JztcbmltcG9ydCB7IFBvaW50ZXIgfSBmcm9tICcuLi9leHRlbnNpb25zL3BvaW50ZXInO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgUG9pbnRlcnMgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2xvYmFsID0gUG9pbnQuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5sb2NhbCA9IFBvaW50LmVtcHR5KCk7XG4gICAgICAgIHRoaXMucG9pbnRlcklkID0gMDtcbiAgICAgICAgdGhpcy5wb2ludGVyVHlwZSA9ICdwb2ludGVyRG93bic7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgbWF0cml4OiBNYXRyaXguZW1wdHkoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdID0gY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgZGlzcGF0Y2godHlwZSwgeCwgeSwgaWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvY2FsLnggPSB4O1xuICAgICAgICB0aGlzLmxvY2FsLnkgPSB5O1xuICAgICAgICB0aGlzLmdsb2JhbC54ID0geDtcbiAgICAgICAgdGhpcy5nbG9iYWwueSA9IHk7XG4gICAgICAgIHRoaXMucG9pbnRlcklkID0gaWQ7XG4gICAgICAgIHRoaXMucG9pbnRlclR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgY29uc3QgYmFzZSA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBNYXRyaXguc2V0RW1wdHkoYmFzZS5tYXRyaXgpO1xuICAgICAgICB0aGlzLmRlcHRoKys7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDb21wb25lbnQocm9vdCwgYmFzZSk7XG4gICAgfVxuICAgIGRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgcGFyZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIURpc3BsYXkuaXNWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVBvaW50ZXIuaXNQb2ludGVyRW5hYmxlZChjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgICAgIE1hdHJpeC5jb25jYXQocGFyZW50Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1JbnZlcnNlUG9pbnQoY29udGV4dC5tYXRyaXgsIHRoaXMuZ2xvYmFsLCB0aGlzLmxvY2FsKTtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5sb2NhbDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgdGhpcy5wb2ludGVyVHlwZSwgeCwgeSwgdGhpcy5wb2ludGVySWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRlclR5cGUgPT09ICdwb2ludGVyTW92ZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmICFjb21wb25lbnQucG9pbnRlck92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdmVyJywgeCwgeSwgdGhpcy5wb2ludGVySWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghcmVzdWx0ICYmIGNvbXBvbmVudC5wb2ludGVyT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCAncG9pbnRlck91dCcsIHgsIHksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnBvaW50ZXJPdmVyID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0sIE1hdHJpeCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvZGlzcGxheSc7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9leHRlbnNpb25zL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgbWF0cml4OiBNYXRyaXguZW1wdHkoKSxcbiAgICAgICAgICAgICAgICBjb2xvclRyYW5zZm9ybTogQ29sb3JUcmFuc2Zvcm0uZW1wdHkoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdID0gY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgcGFyZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIURpc3BsYXkuaXNWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIFRyYW5zZm9ybS5nZXRNYXRyaXgoY29tcG9uZW50LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgIFRyYW5zZm9ybS5nZXRDb2xvclRyYW5zZm9ybShjb21wb25lbnQsIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBNYXRyaXguY29uY2F0KHBhcmVudC5tYXRyaXgsIGNvbnRleHQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgIENvbG9yVHJhbnNmb3JtLmNvbmNhdChwYXJlbnQuY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLmVuZ2luZS5wbGF0Zm9ybS5iZWdpbigpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgY29uc3QgYmFzZSA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLmRlcHRoKys7XG4gICAgICAgIE1hdHJpeC5jb3B5KHRoaXMuZW5naW5lLnNjcmVlbi5nZXRNYXRyaXgoKSwgYmFzZS5tYXRyaXgpO1xuICAgICAgICBDb2xvclRyYW5zZm9ybS5zZXRFbXB0eShiYXNlLmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQocm9vdCwgYmFzZSk7XG4gICAgICAgIHRoaXMuZW5naW5lLnBsYXRmb3JtLmVuZCgpO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydFRpbWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgdmFyIFJlc291cmNlO1xuKGZ1bmN0aW9uIChSZXNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIGdldFByb2dyZXNzKHJlc291cmNlKSB7XG4gICAgICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNvdXJjZS5sb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNvdXJjZS5ieXRlc1RvdGFsID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlLmJ5dGVzTG9hZGVkIC8gcmVzb3VyY2UuYnl0ZXNUb3RhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgUmVzb3VyY2UuZ2V0UHJvZ3Jlc3MgPSBnZXRQcm9ncmVzcztcbn0pKFJlc291cmNlIHx8IChSZXNvdXJjZSA9IHt9KSk7XG5leHBvcnQgY2xhc3MgUmVzb3VyY2VzIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlc29sdmVycyA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgZ2V0KGFzc2V0KSB7XG4gICAgICAgIGlmICghYXNzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VzLmdldChhc3NldCk7XG4gICAgICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHJlc291cmNlID0gdGhpcy5yZXNvbHZlKGFzc2V0KTtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzLnNldChhc3NldCwgcmVzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICB9XG4gICAgcmVzb2x2ZShhc3NldCkge1xuICAgICAgICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHJlc29sdmVyKGFzc2V0LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgICAgICBpZiAocmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmdpbmUuZGVidWcud2FybmluZyhgUmVzb3VyY2Ugbm90IHJlc29sdmVkOiAke2Fzc2V0fWApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNYXRyaXggfSBmcm9tICdAamVuZy9nZW9tJztcbmV4cG9ydCBjbGFzcyBTY3JlZW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLndpZHRoID0gNDAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDQwMDtcbiAgICAgICAgdGhpcy5waXhlbFJhdGlvID0gMDtcbiAgICAgICAgdGhpcy5mdWxsc2NyZWVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWF0cml4ID0gTWF0cml4LmVtcHR5KCk7XG4gICAgfVxuICAgIGdldE1hdHJpeCgpIHtcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHRoaXMuZ2V0UGl4ZWxSYXRpbygpO1xuICAgICAgICB0aGlzLm1hdHJpeC5hID0gcGl4ZWxSYXRpbztcbiAgICAgICAgdGhpcy5tYXRyaXguZCA9IHBpeGVsUmF0aW87XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeDtcbiAgICB9XG4gICAgZ2V0V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZ1bGxzY3JlZW4gPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHRoaXMud2lkdGg7XG4gICAgfVxuICAgIGdldEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVsbHNjcmVlbiA/IHdpbmRvdy5pbm5lckhlaWdodCA6IHRoaXMuaGVpZ2h0O1xuICAgIH1cbiAgICBnZXRQaXhlbFJhdGlvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5waXhlbFJhdGlvID4gMCA/IHRoaXMucGl4ZWxSYXRpbyA6IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID8/IDE7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRpY2tlciB7XG4gICAgY29uc3RydWN0b3IoZW5naW5lKSB7XG4gICAgICAgIHRoaXMuZnJhbWVSYXRlID0gMDtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9ICh0aW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS51cGRhdGVyLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmxvYWRpbmcudXBkYXRlKCk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5yZW5kZXJlci5yZW5kZXIoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVGcmFtZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSAoY3VycmVudFRpbWUgLSB0aGlzLnRpbWUpIC8gMTAwMDtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmV4dEZyYW1lKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgIH1cbiAgICBnZXQgaXNQYXVzZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhdXNlZDtcbiAgICB9XG4gICAgcGxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU5leHRGcmFtZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB1cGRhdGVOZXh0RnJhbWUoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZUZyYW1lKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBVcGRhdGUgfSBmcm9tICcuLi9leHRlbnNpb25zL3VwZGF0ZSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBVcGRhdGVyIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KHJvb3QpO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydFRpbWU7XG4gICAgfVxuICAgIHVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVXBkYXRlLmlzRW5hYmxlZChjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzKGNvbXBvbmVudCk7XG4gICAgICAgIFVwZGF0ZS51cGRhdGUoY29tcG9uZW50LCB0aGlzLnRpbWUpO1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy51cGRhdGUuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlUHJvcGVydGllcyhjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5lbmdpbmUuY29tcG9uZW50cy5wcm9wZXJ0aWVzLmZvckVhY2goKGhhbmRsZXIsIHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50W3Byb3BlcnR5XSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvbG9hZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9lbmdpbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9jb21wb25lbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvZGVidWcnO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9wbGF0Zm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3BvaW50ZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcmVuZGVyZXInO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9yZXNvdXJjZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9zY3JlZW4nO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy90aWNrZXInO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy91cGRhdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vaW5wdXQvbW91c2UnO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL2Rpc3BsYXknO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3Bpdm90JztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9zb3VyY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3RyYW5zZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvdXBkYXRlJztcbiIsImZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgdHlwZSkge1xuICAgIGNvbnN0IHsgdmlldyB9ID0gZW5naW5lLnBsYXRmb3JtO1xuICAgIGNvbnN0IGNsaWVudFJlY3QgPSB2aWV3LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gY2xpZW50UmVjdC5sZWZ0IC0gdmlldy5jbGllbnRMZWZ0O1xuICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gY2xpZW50UmVjdC50b3AgLSB2aWV3LmNsaWVudFRvcDtcbiAgICBlbmdpbmUucG9pbnRlcnMuZGlzcGF0Y2godHlwZSwgeCwgeSwgMCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cbmV4cG9ydCB2YXIgTW91c2VFeHRlbnNpb247XG4oZnVuY3Rpb24gKE1vdXNlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyB2aWV3IH0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyRG93bicpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyVXAnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyTW92ZScpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgTW91c2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShNb3VzZUV4dGVuc2lvbiB8fCAoTW91c2VFeHRlbnNpb24gPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBCb3VuZHM7XG4oZnVuY3Rpb24gKEJvdW5kcykge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWluWDogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG1pblk6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtYXhYOiBOdW1iZXIuTUlOX1ZBTFVFLFxuICAgICAgICAgICAgbWF4WTogTnVtYmVyLk1JTl9WQUxVRSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQm91bmRzLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkoYm91bmRzKSB7XG4gICAgICAgIGJvdW5kcy5taW5YID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1pblkgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWF4WCA9IE51bWJlci5NSU5fVkFMVUU7XG4gICAgICAgIGJvdW5kcy5tYXhZID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICB9XG4gICAgQm91bmRzLnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShib3VuZHMpIHtcbiAgICAgICAgcmV0dXJuIGJvdW5kcy5taW5YID09PSBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWluWSA9PT0gTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1heFggPT09IE51bWJlci5NSU5fVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5tYXhZID09PSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgIH1cbiAgICBCb3VuZHMuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gdG9SZWN0YW5nbGUoYm91bmRzLCByZWN0YW5nbGUpIHtcbiAgICAgICAgY29uc3QgeyBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB9ID0gYm91bmRzO1xuICAgICAgICByZWN0YW5nbGUueCA9IG1pblg7XG4gICAgICAgIHJlY3RhbmdsZS55ID0gbWluWTtcbiAgICAgICAgcmVjdGFuZ2xlLndpZHRoID0gbWF4WCAtIG1pblg7XG4gICAgICAgIHJlY3RhbmdsZS5oZWlnaHQgPSBtYXhZIC0gbWluWTtcbiAgICB9XG4gICAgQm91bmRzLnRvUmVjdGFuZ2xlID0gdG9SZWN0YW5nbGU7XG4gICAgZnVuY3Rpb24gdGVzdFgoYm91bmRzLCB4KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFggPSB0ZXN0WDtcbiAgICBmdW5jdGlvbiB0ZXN0WShib3VuZHMsIHkpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0WSA9IHRlc3RZO1xuICAgIGZ1bmN0aW9uIHRlc3QoYm91bmRzLCB4LCB5KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3QgPSB0ZXN0O1xuICAgIGZ1bmN0aW9uIHRlc3RQb2ludChib3VuZHMsIHBvaW50KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RQb2ludCA9IHRlc3RQb2ludDtcbn0pKEJvdW5kcyB8fCAoQm91bmRzID0ge30pKTtcbiIsImV4cG9ydCB2YXIgQ29sb3JUcmFuc2Zvcm07XG4oZnVuY3Rpb24gKENvbG9yVHJhbnNmb3JtKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbHBoYU11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICByZWRNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgZ3JlZW5NdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYmx1ZU11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBhbHBoYU9mZnNldDogMCxcbiAgICAgICAgICAgIHJlZE9mZnNldDogMCxcbiAgICAgICAgICAgIGdyZWVuT2Zmc2V0OiAwLFxuICAgICAgICAgICAgYmx1ZU9mZnNldDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KGN0KSB7XG4gICAgICAgIHJldHVybiBjdC5yZWRNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmJsdWVNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LnJlZE9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5PZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmJsdWVPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmFscGhhT2Zmc2V0ID09PSAwO1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5V2l0aEFscGhhKGN0KSB7XG4gICAgICAgIHJldHVybiBjdC5yZWRNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmJsdWVNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5yZWRPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmdyZWVuT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ibHVlT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU9mZnNldCA9PT0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eVdpdGhBbHBoYSA9IGlzRW1wdHlXaXRoQWxwaGE7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkoY3QpIHtcbiAgICAgICAgY3QucmVkTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LmdyZWVuTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LmJsdWVNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuYWxwaGFNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QucmVkT2Zmc2V0ID0gMDtcbiAgICAgICAgY3QuZ3JlZW5PZmZzZXQgPSAwO1xuICAgICAgICBjdC5ibHVlT2Zmc2V0ID0gMDtcbiAgICAgICAgY3QuYWxwaGFPZmZzZXQgPSAwO1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoZnJvbSwgdG8pIHtcbiAgICAgICAgdG8uYWxwaGFNdWx0aXBsaWVyID0gZnJvbS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIHRvLnJlZE11bHRpcGxpZXIgPSBmcm9tLnJlZE11bHRpcGxpZXI7XG4gICAgICAgIHRvLmdyZWVuTXVsdGlwbGllciA9IGZyb20uZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICB0by5ibHVlTXVsdGlwbGllciA9IGZyb20uYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIHRvLmFscGhhT2Zmc2V0ID0gZnJvbS5hbHBoYU9mZnNldDtcbiAgICAgICAgdG8ucmVkT2Zmc2V0ID0gZnJvbS5yZWRPZmZzZXQ7XG4gICAgICAgIHRvLmdyZWVuT2Zmc2V0ID0gZnJvbS5ncmVlbk9mZnNldDtcbiAgICAgICAgdG8uYmx1ZU9mZnNldCA9IGZyb20uYmx1ZU9mZnNldDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gY29uY2F0KGN0MSwgY3QwLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgYWxwaGFNdWx0aXBsaWVyID0gY3QxLmFscGhhTXVsdGlwbGllciAqIGN0MC5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IHJlZE11bHRpcGxpZXIgPSBjdDEucmVkTXVsdGlwbGllciAqIGN0MC5yZWRNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBncmVlbk11bHRpcGxpZXIgPSBjdDEuZ3JlZW5NdWx0aXBsaWVyICogY3QwLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgYmx1ZU11bHRpcGxpZXIgPSBjdDEuYmx1ZU11bHRpcGxpZXIgKiBjdDAuYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGFscGhhT2Zmc2V0ID0gY3QxLmFscGhhTXVsdGlwbGllciAqIGN0MC5hbHBoYU9mZnNldCArIGN0MS5hbHBoYU9mZnNldDtcbiAgICAgICAgY29uc3QgcmVkT2Zmc2V0ID0gY3QxLnJlZE11bHRpcGxpZXIgKiBjdDAucmVkT2Zmc2V0ICsgY3QxLnJlZE9mZnNldDtcbiAgICAgICAgY29uc3QgZ3JlZW5PZmZzZXQgPSBjdDEuZ3JlZW5NdWx0aXBsaWVyICogY3QwLmdyZWVuT2Zmc2V0ICsgY3QxLmdyZWVuT2Zmc2V0O1xuICAgICAgICBjb25zdCBibHVlT2Zmc2V0ID0gY3QxLmJsdWVNdWx0aXBsaWVyICogY3QwLmJsdWVPZmZzZXQgKyBjdDEuYmx1ZU9mZnNldDtcbiAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSByZWRNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSBibHVlTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gYWxwaGFPZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSByZWRPZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IGdyZWVuT2Zmc2V0O1xuICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGJsdWVPZmZzZXQ7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmNvbmNhdCA9IGNvbmNhdDtcbn0pKENvbG9yVHJhbnNmb3JtIHx8IChDb2xvclRyYW5zZm9ybSA9IHt9KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbG9yLXRyYW5zZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2JvdW5kcyc7XG5leHBvcnQgKiBmcm9tICcuL21hdHJpeCc7XG5leHBvcnQgKiBmcm9tICcuL3BvaW50JztcbmV4cG9ydCAqIGZyb20gJy4vcmVjdGFuZ2xlJztcbiIsImV4cG9ydCB2YXIgTWF0cml4O1xuKGZ1bmN0aW9uIChNYXRyaXgpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGE6IDEsXG4gICAgICAgICAgICBiOiAwLFxuICAgICAgICAgICAgYzogMCxcbiAgICAgICAgICAgIGQ6IDEsXG4gICAgICAgICAgICB0eDogMCxcbiAgICAgICAgICAgIHR5OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBNYXRyaXguZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KG1hdHJpeCkge1xuICAgICAgICByZXR1cm4gbWF0cml4LmEgPT09IDFcbiAgICAgICAgICAgICYmIG1hdHJpeC5iID09PSAwXG4gICAgICAgICAgICAmJiBtYXRyaXguYyA9PT0gMFxuICAgICAgICAgICAgJiYgbWF0cml4LmQgPT09IDFcbiAgICAgICAgICAgICYmIG1hdHJpeC50eCA9PT0gMFxuICAgICAgICAgICAgJiYgbWF0cml4LnR5ID09PSAwO1xuICAgIH1cbiAgICBNYXRyaXguaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkobWF0cml4KSB7XG4gICAgICAgIG1hdHJpeC5hID0gMTtcbiAgICAgICAgbWF0cml4LmIgPSAwO1xuICAgICAgICBtYXRyaXguYyA9IDA7XG4gICAgICAgIG1hdHJpeC5kID0gMTtcbiAgICAgICAgbWF0cml4LnR4ID0gMDtcbiAgICAgICAgbWF0cml4LnR5ID0gMDtcbiAgICB9XG4gICAgTWF0cml4LnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gY29weShmcm9tLCB0bykge1xuICAgICAgICB0by5hID0gZnJvbS5hO1xuICAgICAgICB0by5iID0gZnJvbS5iO1xuICAgICAgICB0by5jID0gZnJvbS5jO1xuICAgICAgICB0by5kID0gZnJvbS5kO1xuICAgICAgICB0by50eCA9IGZyb20udHg7XG4gICAgICAgIHRvLnR5ID0gZnJvbS50eTtcbiAgICB9XG4gICAgTWF0cml4LmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIGNvbmNhdChtYXRyaXgwLCBtYXRyaXgxLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgYSA9IG1hdHJpeDEuYSAqIG1hdHJpeDAuYSArIG1hdHJpeDEuYiAqIG1hdHJpeDAuYztcbiAgICAgICAgY29uc3QgYiA9IG1hdHJpeDEuYSAqIG1hdHJpeDAuYiArIG1hdHJpeDEuYiAqIG1hdHJpeDAuZDtcbiAgICAgICAgY29uc3QgYyA9IG1hdHJpeDEuYyAqIG1hdHJpeDAuYSArIG1hdHJpeDEuZCAqIG1hdHJpeDAuYztcbiAgICAgICAgY29uc3QgZCA9IG1hdHJpeDEuYyAqIG1hdHJpeDAuYiArIG1hdHJpeDEuZCAqIG1hdHJpeDAuZDtcbiAgICAgICAgY29uc3QgdHggPSBtYXRyaXgxLnR4ICogbWF0cml4MC5hICsgbWF0cml4MS50eSAqIG1hdHJpeDAuYyArIG1hdHJpeDAudHg7XG4gICAgICAgIGNvbnN0IHR5ID0gbWF0cml4MS50eCAqIG1hdHJpeDAuYiArIG1hdHJpeDEudHkgKiBtYXRyaXgwLmQgKyBtYXRyaXgwLnR5O1xuICAgICAgICByZXN1bHQuYSA9IGE7XG4gICAgICAgIHJlc3VsdC5iID0gYjtcbiAgICAgICAgcmVzdWx0LmMgPSBjO1xuICAgICAgICByZXN1bHQuZCA9IGQ7XG4gICAgICAgIHJlc3VsdC50eCA9IHR4O1xuICAgICAgICByZXN1bHQudHkgPSB0eTtcbiAgICB9XG4gICAgTWF0cml4LmNvbmNhdCA9IGNvbmNhdDtcbiAgICBmdW5jdGlvbiBnZXREZXRlcm1pbmFudChtYXRyaXgpIHtcbiAgICAgICAgcmV0dXJuIG1hdHJpeC5hICogbWF0cml4LmQgLSBtYXRyaXguYiAqIG1hdHJpeC5jO1xuICAgIH1cbiAgICBNYXRyaXguZ2V0RGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudDtcbiAgICBmdW5jdGlvbiBpbnZlcnQobWF0cml4LCByZXN1bHQpIHtcbiAgICAgICAgbGV0IGRldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KTtcbiAgICAgICAgaWYgKGRldGVybWluYW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQuYSA9IDA7XG4gICAgICAgICAgICByZXN1bHQuYiA9IDA7XG4gICAgICAgICAgICByZXN1bHQuYyA9IDA7XG4gICAgICAgICAgICByZXN1bHQuZCA9IDA7XG4gICAgICAgICAgICByZXN1bHQudHggPSAtbWF0cml4LnR4O1xuICAgICAgICAgICAgcmVzdWx0LnR5ID0gLW1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRldGVybWluYW50ID0gMS4wIC8gZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuYSA9IG1hdHJpeC5hICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuYiA9IC1tYXRyaXguYiAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAtbWF0cml4LmMgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gbWF0cml4LmQgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC50eCA9IC1yZXN1bHQuYSAqIG1hdHJpeC50eCAtIHJlc3VsdC5jICogbWF0cml4LnR5O1xuICAgICAgICAgICAgcmVzdWx0LnR5ID0gLXJlc3VsdC5iICogbWF0cml4LnR4IC0gcmVzdWx0LmQgKiBtYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTWF0cml4LmludmVydCA9IGludmVydDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmVzdWx0LnggPSB4ICogbWF0cml4LmEgKyB5ICogbWF0cml4LmMgKyBtYXRyaXgudHg7XG4gICAgICAgIHJlc3VsdC55ID0geCAqIG1hdHJpeC5iICsgeSAqIG1hdHJpeC5kICsgbWF0cml4LnR5O1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQgPSB0cmFuc2Zvcm1Qb2ludDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Qb2ludExvY2FsKG1hdHJpeCwgcG9pbnQsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICByZXN1bHQueCA9IHggKiBtYXRyaXguYSArIHkgKiBtYXRyaXguYztcbiAgICAgICAgcmVzdWx0LnkgPSB4ICogbWF0cml4LmIgKyB5ICogbWF0cml4LmQ7XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludExvY2FsID0gdHJhbnNmb3JtUG9pbnRMb2NhbDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1JbnZlcnNlUG9pbnQobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGxldCBkZXRlcm1pbmFudCA9IGdldERldGVybWluYW50KG1hdHJpeCk7XG4gICAgICAgIGlmIChkZXRlcm1pbmFudCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0LnggPSAtbWF0cml4LnR4O1xuICAgICAgICAgICAgcmVzdWx0LnkgPSAtbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGV0ZXJtaW5hbnQgPSAxIC8gZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICAgICAgcmVzdWx0LnggPSBkZXRlcm1pbmFudCAqIChtYXRyaXguYyAqIChtYXRyaXgudHkgLSB5KSArIG1hdHJpeC5kICogKHggLSBtYXRyaXgudHgpKTtcbiAgICAgICAgICAgIHJlc3VsdC55ID0gZGV0ZXJtaW5hbnQgKiAobWF0cml4LmEgKiAoeSAtIG1hdHJpeC50eSkgKyBtYXRyaXguYiAqIChtYXRyaXgudHggLSB4KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybUludmVyc2VQb2ludCA9IHRyYW5zZm9ybUludmVyc2VQb2ludDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Cb3VuZHMobWF0cml4LCBib3VuZHMsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGEsIGIsIGMsIGQsIHR4LCB0eSwgfSA9IG1hdHJpeDtcbiAgICAgICAgY29uc3QgcnggPSBib3VuZHMueDtcbiAgICAgICAgY29uc3QgcnkgPSBib3VuZHMueTtcbiAgICAgICAgY29uc3QgcnIgPSByeCArIGJvdW5kcy53aWR0aDtcbiAgICAgICAgY29uc3QgcmIgPSByeSArIGJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IG54MSA9IHJ4ICogYSArIHJ5ICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTEgPSByeCAqIGIgKyByeSAqIGQgKyB0eTtcbiAgICAgICAgY29uc3QgbngyID0gcnIgKiBhICsgcnkgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MiA9IHJyICogYiArIHJ5ICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDMgPSByciAqIGEgKyByYiAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkzID0gcnIgKiBiICsgcmIgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54NCA9IHJ4ICogYSArIHJiICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTQgPSByeCAqIGIgKyByYiAqIGQgKyB0eTtcbiAgICAgICAgbGV0IGxlZnQgPSBueDE7XG4gICAgICAgIGlmIChsZWZ0ID4gbngyKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbngyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0ID4gbngzKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbngzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0ID4gbng0KSB7XG4gICAgICAgICAgICBsZWZ0ID0gbng0O1xuICAgICAgICB9XG4gICAgICAgIGxldCB0b3AgPSBueTE7XG4gICAgICAgIGlmICh0b3AgPiBueTIpIHtcbiAgICAgICAgICAgIHRvcCA9IG55MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9wID4gbnkzKSB7XG4gICAgICAgICAgICB0b3AgPSBueTM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcCA+IG55NCkge1xuICAgICAgICAgICAgdG9wID0gbnk0O1xuICAgICAgICB9XG4gICAgICAgIGxldCByaWdodCA9IG54MTtcbiAgICAgICAgaWYgKHJpZ2h0IDwgbngyKSB7XG4gICAgICAgICAgICByaWdodCA9IG54MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgPCBueDMpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbngzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCA8IG54NCkge1xuICAgICAgICAgICAgcmlnaHQgPSBueDQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJvdHRvbSA9IG55MTtcbiAgICAgICAgaWYgKGJvdHRvbSA8IG55Mikge1xuICAgICAgICAgICAgYm90dG9tID0gbnkyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3R0b20gPCBueTMpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55MztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tIDwgbnk0KSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTQ7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnggPSBsZWZ0O1xuICAgICAgICByZXN1bHQueSA9IHRvcDtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgICAgICByZXN1bHQuaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtQm91bmRzID0gdHJhbnNmb3JtQm91bmRzO1xufSkoTWF0cml4IHx8IChNYXRyaXggPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBQb2ludDtcbihmdW5jdGlvbiAoUG9pbnQpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgIH1cbiAgICBQb2ludC5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGxlbmd0aChwb2ludCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH1cbiAgICBQb2ludC5sZW5ndGggPSBsZW5ndGg7XG4gICAgZnVuY3Rpb24gYW5nbGUocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIocG9pbnQueSwgcG9pbnQueCk7XG4gICAgfVxuICAgIFBvaW50LmFuZ2xlID0gYW5nbGU7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShwb2ludCkge1xuICAgICAgICByZXR1cm4gcG9pbnQueCA9PT0gMCAmJiBwb2ludC55ID09PSAwO1xuICAgIH1cbiAgICBQb2ludC5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBlcXVhbHMocG9pbnQwLCBwb2ludDEpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50MC54ID09PSBwb2ludDEueCAmJiBwb2ludDAueSA9PT0gcG9pbnQxLnk7XG4gICAgfVxuICAgIFBvaW50LmVxdWFscyA9IGVxdWFscztcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShwb2ludCkge1xuICAgICAgICBwb2ludC54ID0gMDtcbiAgICAgICAgcG9pbnQueSA9IDA7XG4gICAgfVxuICAgIFBvaW50LnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gY29weShzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICB0YXJnZXQueCA9IHNvdXJjZS54O1xuICAgICAgICB0YXJnZXQueSA9IHNvdXJjZS55O1xuICAgIH1cbiAgICBQb2ludC5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBub3JtYWxpemUocG9pbnQsIHRoaWNrbmVzcykge1xuICAgICAgICBsZXQgdmFsdWUgPSBsZW5ndGgocG9pbnQpO1xuICAgICAgICBpZiAodmFsdWUgPiAwKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaWNrbmVzcyAvIHZhbHVlO1xuICAgICAgICAgICAgcG9pbnQueCAqPSB2YWx1ZTtcbiAgICAgICAgICAgIHBvaW50LnkgKj0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUG9pbnQubm9ybWFsaXplID0gbm9ybWFsaXplO1xuICAgIGZ1bmN0aW9uIGRpc3RhbmNlKHBvaW50MCwgcG9pbnQxKSB7XG4gICAgICAgIGNvbnN0IGR4ID0gcG9pbnQwLnggLSBwb2ludDEueDtcbiAgICAgICAgY29uc3QgZHkgPSBwb2ludDAueSAtIHBvaW50MS55O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICB9XG4gICAgUG9pbnQuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICBmdW5jdGlvbiBpbnRlcnBvbGF0ZShiZWdpbiwgZW5kLCB2YWx1ZSwgcmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdC54ID0gYmVnaW4ueCArIHZhbHVlICogKGVuZC54IC0gYmVnaW4ueCk7XG4gICAgICAgIHJlc3VsdC55ID0gYmVnaW4ueSArIHZhbHVlICogKGVuZC55IC0gYmVnaW4ueSk7XG4gICAgfVxuICAgIFBvaW50LmludGVycG9sYXRlID0gaW50ZXJwb2xhdGU7XG4gICAgZnVuY3Rpb24gcG9sYXIocG9pbnQsIGxlbmd0aCwgYW5nbGUpIHtcbiAgICAgICAgcG9pbnQueCA9IGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKTtcbiAgICAgICAgcG9pbnQueSA9IGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKTtcbiAgICB9XG4gICAgUG9pbnQucG9sYXIgPSBwb2xhcjtcbn0pKFBvaW50IHx8IChQb2ludCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFJlY3RhbmdsZTtcbihmdW5jdGlvbiAoUmVjdGFuZ2xlKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShyZWN0YW5nbGUpIHtcbiAgICAgICAgcmVjdGFuZ2xlLnggPSAwO1xuICAgICAgICByZWN0YW5nbGUueSA9IDA7XG4gICAgICAgIHJlY3RhbmdsZS53aWR0aCA9IDA7XG4gICAgICAgIHJlY3RhbmdsZS5oZWlnaHQgPSAwO1xuICAgIH1cbiAgICBSZWN0YW5nbGUuc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBpbnRlcnNlY3Rpb24oc291cmNlLCB0YXJnZXQsIHJlc3VsdCkge1xuICAgICAgICBsZXQgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB9ID0gc291cmNlO1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGFyZ2V0Lng7XG4gICAgICAgIGNvbnN0IHRvcCA9IHRhcmdldC55O1xuICAgICAgICBjb25zdCByaWdodCA9IHRhcmdldC54ICsgdGFyZ2V0LndpZHRoO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0YXJnZXQueSArIHRhcmdldC5oZWlnaHQ7XG4gICAgICAgIGlmICh4IDwgbGVmdCkge1xuICAgICAgICAgICAgd2lkdGggLT0gbGVmdCAtIHg7XG4gICAgICAgICAgICB4ID0gbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCArIHdpZHRoID4gcmlnaHQpIHtcbiAgICAgICAgICAgIHdpZHRoID0gcmlnaHQgLSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh5IDwgdG9wKSB7XG4gICAgICAgICAgICBoZWlnaHQgLT0gdG9wIC0geTtcbiAgICAgICAgICAgIHkgPSB0b3A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgKyBoZWlnaHQgPiBib3R0b20pIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGJvdHRvbSAtIHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgICAgICAgd2lkdGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC54ID0geDtcbiAgICAgICAgcmVzdWx0LnkgPSB5O1xuICAgICAgICByZXN1bHQud2lkdGggPSB3aWR0aDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbjtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KHJlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlLndpZHRoID09PSAwIHx8IHJlY3RhbmdsZS5oZWlnaHQgPT09IDA7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBjb250YWlucyhyZWN0YW5nbGUsIHBvaW50KSB7XG4gICAgICAgIHJldHVybiByZWN0YW5nbGUueCA8IHBvaW50LnhcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS54ICsgcmVjdGFuZ2xlLndpZHRoID4gcG9pbnQueFxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnkgPCBwb2ludC55XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueSArIHJlY3RhbmdsZS5oZWlnaHQgPiBwb2ludC55O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuY29udGFpbnMgPSBjb250YWlucztcbiAgICBmdW5jdGlvbiByb3VuZChyZWN0YW5nbGUpIHtcbiAgICAgICAgcmVjdGFuZ2xlLnggPSBNYXRoLnJvdW5kKHJlY3RhbmdsZS54KTtcbiAgICAgICAgcmVjdGFuZ2xlLnkgPSBNYXRoLnJvdW5kKHJlY3RhbmdsZS55KTtcbiAgICAgICAgcmVjdGFuZ2xlLndpZHRoID0gTWF0aC5yb3VuZChyZWN0YW5nbGUud2lkdGgpO1xuICAgICAgICByZWN0YW5nbGUuaGVpZ2h0ID0gTWF0aC5yb3VuZChyZWN0YW5nbGUuaGVpZ2h0KTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLnJvdW5kID0gcm91bmQ7XG59KShSZWN0YW5nbGUgfHwgKFJlY3RhbmdsZSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0sIE1hdHJpeCwgUmVjdGFuZ2xlIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBJbWFnZUV4dGVuc2lvbiwgSU1BR0UgfSBmcm9tICcuL2ltYWdlJztcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuY29uc3Qgc2NyZWVuQm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb247XG4oZnVuY3Rpb24gKENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICAgICAgY29uc3QgcGxhdGZvcm0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IHBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgICAgIGlmIChDb2xvclRyYW5zZm9ybS5pc0VtcHR5V2l0aEFscGhhKGNvbG9yVHJhbnNmb3JtKSkge1xuICAgICAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjdXN0b21Db250ZXh0ID0gcGxhdGZvcm0uY3JlYXRlQ3VzdG9tQ29udGV4dCgpO1xuICAgICAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICAgICAgYm91bmRzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybUJvdW5kcyhtYXRyaXgsIGJvdW5kcywgYm91bmRzKTtcbiAgICAgICAgICAgIGlmIChSZWN0YW5nbGUuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2NyZWVuQm91bmRzLndpZHRoID0gY3VzdG9tQ29udGV4dC5jYW52YXMud2lkdGg7XG4gICAgICAgICAgICBzY3JlZW5Cb3VuZHMuaGVpZ2h0ID0gY3VzdG9tQ29udGV4dC5jYW52YXMuaGVpZ2h0O1xuICAgICAgICAgICAgUmVjdGFuZ2xlLmludGVyc2VjdGlvbihib3VuZHMsIHNjcmVlbkJvdW5kcywgYm91bmRzKTtcbiAgICAgICAgICAgIGlmIChSZWN0YW5nbGUuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVjdGFuZ2xlLnJvdW5kKGJvdW5kcyk7XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LnNldFRyYW5zZm9ybSgpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5jbGVhclJlY3QoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGN1c3RvbUNvbnRleHQuZ2V0SW1hZ2VEYXRhKGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnN0IHJtID0gY29sb3JUcmFuc2Zvcm0ucmVkTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IGdtID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3QgYm0gPSBjb2xvclRyYW5zZm9ybS5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IGFtID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3Qgcm8gPSBjb2xvclRyYW5zZm9ybS5yZWRPZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBnbyA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgYm8gPSBjb2xvclRyYW5zZm9ybS5ibHVlT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgYW8gPSBjb2xvclRyYW5zZm9ybS5hbHBoYU9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gaW1hZ2VEYXRhO1xuICAgICAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IGRhdGE7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogcm0gKyBybztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogZ20gKyBnbztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogYm0gKyBibztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogYW0gKyBhbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgYm91bmRzLngsIGJvdW5kcy55KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKGN1c3RvbUNvbnRleHQuY2FudmFzLCBib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCwgYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgcGxhdGZvcm0uZGVzdHJveUN1c3RvbUNvbnRleHQoY3VzdG9tQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgSW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KElNQUdFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiB8fCAoQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VFeHRlbnNpb24sIElNQUdFIH0gZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgdmFyIENhbnZhc0ltYWdlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNJbWFnZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihpbWFnZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBpbWFnZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IGVuZ2luZS5wbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgSW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KElNQUdFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc0ltYWdlRXh0ZW5zaW9uIHx8IChDYW52YXNJbWFnZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCwgUmVzb3VyY2UsIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuZXhwb3J0IGNvbnN0IElNQUdFID0gJ2ltYWdlJztcbmV4cG9ydCB2YXIgSW1hZ2U7XG4oZnVuY3Rpb24gKEltYWdlKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGltYWdlLCBib3VuZHMsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgIGJvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBJbWFnZS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShJbWFnZSB8fCAoSW1hZ2UgPSB7fSkpO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIEltYWdlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChJbWFnZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGhpdFRlc3QoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGxvY2FsIH0gPSBlbmdpbmUucG9pbnRlcnM7XG4gICAgICAgIEltYWdlLmNhbGN1bGF0ZUJvdW5kcyhpbWFnZSwgYm91bmRzLCBlbmdpbmUpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKGJvdW5kcywgbG9jYWwpO1xuICAgIH1cbiAgICBJbWFnZUV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBsb2FkZWQoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLmxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSBSZXNvdXJjZS5nZXRQcm9ncmVzcyhyZXNvdXJjZSk7XG4gICAgICAgIGNvbnRleHQubG9hZGVkID0gISFyZXNvdXJjZT8ubG9hZGVkICYmICEhcmVzb3VyY2U/LmltYWdlO1xuICAgIH1cbiAgICBJbWFnZUV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoSU1BR0UsIGhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KElNQUdFLCBsb2FkZWQpO1xuICAgICAgICBJbWFnZVJlc291cmNlLmluaXQoZW5naW5lKTtcbiAgICB9XG4gICAgSW1hZ2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShJbWFnZUV4dGVuc2lvbiB8fCAoSW1hZ2VFeHRlbnNpb24gPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy1pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy1pbWFnZS1jb2xvcic7XG4iLCJleHBvcnQgdmFyIEltYWdlUmVzb3VyY2U7XG4oZnVuY3Rpb24gKEltYWdlUmVzb3VyY2UpIHtcbiAgICBmdW5jdGlvbiByZXNvbHZlKGFzc2V0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gYXNzZXQuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgICAgc3dpdGNoIChleHRlbnNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3BuZyc6XG4gICAgICAgICAgICBjYXNlICdqcGcnOlxuICAgICAgICAgICAgY2FzZSAnd2VicCc6XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBieXRlc0xvYWRlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNUb3RhbDogMCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gYXNzZXQ7XG4gICAgICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaW1hZ2UgbG9hZGVkOiAke2Fzc2V0fWApO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5pbWFnZSA9IGltYWdlO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdpbWFnZSBsb2FkIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBJbWFnZVJlc291cmNlLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvbHZlKTtcbiAgICB9XG4gICAgSW1hZ2VSZXNvdXJjZS5pbml0ID0gaW5pdDtcbn0pKEltYWdlUmVzb3VyY2UgfHwgKEltYWdlUmVzb3VyY2UgPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmluZyc7XG4iLCJleHBvcnQgdmFyIFN0cmluZ1Jlc291cmNlO1xuKGZ1bmN0aW9uIChTdHJpbmdSZXNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIHJlc29sdmUoYXNzZXQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBleHRlbnNpb24gPSBhc3NldC5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgICBzd2l0Y2ggKGV4dGVuc2lvbikge1xuICAgICAgICAgICAgY2FzZSAndHh0JzpcbiAgICAgICAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0ge1xuICAgICAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNMb2FkZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzVG90YWw6IDAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgYXNzZXQsIHRydWUpO1xuICAgICAgICAgICAgICAgIHhoci5vbnByb2dyZXNzID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuYnl0ZXNMb2FkZWQgPSBlLmxvYWRlZDtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuYnl0ZXNUb3RhbCA9IGUudG90YWw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgc3RyaW5nIGxvYWRlZDogJHthc3NldH1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuZGF0YSA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmJ5dGVzTG9hZGVkID0gcmVzb3VyY2UuYnl0ZXNUb3RhbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5vbmVycm9yID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ3N0cmluZyBsb2FkIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFN0cmluZ1Jlc291cmNlLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvbHZlKTtcbiAgICB9XG4gICAgU3RyaW5nUmVzb3VyY2UuaW5pdCA9IGluaXQ7XG59KShTdHJpbmdSZXNvdXJjZSB8fCAoU3RyaW5nUmVzb3VyY2UgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUmVzb3VyY2UsIENvbnRhaW5lckV4dGVuc2lvbiwgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IFN0cmluZ1Jlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcbmV4cG9ydCBjb25zdCBTQ0VORSA9ICdzY2VuZSc7XG5leHBvcnQgdmFyIFNjZW5lRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChTY2VuZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGxvYWRlZChzY2VuZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUubG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGlmIChzY2VuZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgQ29udGFpbmVyRXh0ZW5zaW9uLmxvYWRlZChzY2VuZSwgZW5naW5lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc3JjIH0gPSBzY2VuZTtcbiAgICAgICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSBSZXNvdXJjZS5nZXRQcm9ncmVzcyhyZXNvdXJjZSk7XG4gICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9ICEhcmVzb3VyY2U/LmxvYWRlZCAmJiAhIXJlc291cmNlPy5kYXRhO1xuICAgICAgICAgICAgaWYgKHJlc291cmNlICYmIHJlc291cmNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5jaGlsZHJlbiA9IEpTT04ucGFyc2UocmVzb3VyY2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBzY2VuZSBwYXJzaW5nIGVycm9yOiAke2UubWVzc2FnZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgU2NlbmVFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KFNDRU5FLCBDb250YWluZXJFeHRlbnNpb24uaGl0VGVzdCk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoU0NFTkUsIENvbnRhaW5lckV4dGVuc2lvbi5yZW5kZXIpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy51cGRhdGUuc2V0KFNDRU5FLCBDb250YWluZXJFeHRlbnNpb24udXBkYXRlKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChTQ0VORSwgbG9hZGVkKTtcbiAgICAgICAgU3RyaW5nUmVzb3VyY2UuaW5pdChlbmdpbmUpO1xuICAgIH1cbiAgICBTY2VuZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFNjZW5lRXh0ZW5zaW9uIHx8IChTY2VuZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJjb25zdCBQSV8yID0gTWF0aC5QSSAqIDI7XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlFbGxpcHNlKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgcmFkaXVzID0gMCwgcmFkaXVzWCwgcmFkaXVzWSwgfSA9IGRhdGE7XG4gICAgY29uc3QgcnggPSByYWRpdXNYID8/IHJhZGl1cztcbiAgICBjb25zdCByeSA9IHJhZGl1c1kgPz8gcmFkaXVzO1xuICAgIGlmIChyeCA9PT0gMCB8fCByeSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5lbGxpcHNlKHgsIHksIHJ4LCByeSwgMCwgMCwgUElfMik7XG4gICAgaWYgKGhhc0ZpbGwpIHtcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYXBwbHlDb21tYW5kKGNvbW1hbmQsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IGNvbW1hbmQ7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21vdmVUbyc6XG4gICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8obW92ZVRvLnggPz8gMCwgbW92ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbGluZVRvJzpcbiAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhsaW5lVG8ueCA/PyAwLCBsaW5lVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjdXJ2ZVRvJzpcbiAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvKGN1cnZlVG8uY3ggPz8gMCwgY3VydmVUby5jeSA/PyAwLCBjdXJ2ZVRvLnggPz8gMCwgY3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2N1YmljQ3VydmVUbyc6XG4gICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKGN1YmljQ3VydmVUby5jeCA/PyAwLCBjdWJpY0N1cnZlVG8uY3kgPz8gMCwgY3ViaWNDdXJ2ZVRvLnN4ID8/IDAsIGN1YmljQ3VydmVUby5zeSA/PyAwLCBjdWJpY0N1cnZlVG8ueCA/PyAwLCBjdWJpY0N1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGF0aChkYXRhLCBoYXNGaWxsLCBjb250ZXh0KSB7XG4gICAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBkYXRhW2ldO1xuICAgICAgICBhcHBseUNvbW1hbmQoY29tbWFuZCwgY29udGV4dCk7XG4gICAgfVxuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UmVjdGFuZ2xlKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgd2lkdGggPSAwLCBoZWlnaHQgPSAwLCB9ID0gZGF0YTtcbiAgICBpZiAod2lkdGggPT09IDAgfHwgaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LnJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgaWYgKGhhc0ZpbGwpIHtcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgTWF0cml4LCBQb2ludCwgUmVjdGFuZ2xlLCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgU2hhcGVFeHRlbnNpb24sIFNIQVBFLCBTaGFwZSB9IGZyb20gJy4uL3NoYXBlJztcbmltcG9ydCB7IGFwcGx5UmVjdGFuZ2xlIH0gZnJvbSAnLi9yZWN0YW5nbGUnO1xuaW1wb3J0IHsgYXBwbHlFbGxpcHNlIH0gZnJvbSAnLi9lbGxpcHNlJztcbmltcG9ydCB7IGFwcGx5UGF0aCB9IGZyb20gJy4vcGF0aCc7XG5pbXBvcnQgeyBhcHBseVN0cmluZyB9IGZyb20gJy4vc3RyaW5nJztcbmltcG9ydCB7IHNldEZpbGxTdHlsZSwgc2V0U3Ryb2tlU3R5bGUgfSBmcm9tICcuL3N0eWxlJztcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuY29uc3Qgb2Zmc2V0ID0gUG9pbnQuZW1wdHkoKTtcbmZ1bmN0aW9uIHJlbmRlckdyYXBoaWNzKGRhdGEsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpIHtcbiAgICBjb25zdCB7IGZpbGwsIHN0cm9rZSB9ID0gZGF0YTtcbiAgICBjb25zdCBoYXNGaWxsID0gISFmaWxsIHx8IGZpbGwgPT09IDA7XG4gICAgY29uc3QgaGFzU3Ryb2tlID0gISFzdHJva2UgfHwgc3Ryb2tlID09PSAwO1xuICAgIGlmICghaGFzRmlsbCAmJiAhaGFzU3Ryb2tlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGV4aXN0ID0gdHJ1ZTtcbiAgICBjb25zdCB7IHR5cGUgfSA9IGRhdGE7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICBleGlzdCA9IGFwcGx5UmVjdGFuZ2xlKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgICAgICAgZXhpc3QgPSBhcHBseUVsbGlwc2UoZGF0YSwgaGFzRmlsbCwgY29udGV4dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGF0aCc6XG4gICAgICAgICAgICBjb25zdCBwYXRoID0gZGF0YTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGF0aC5kYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlTdHJpbmcocGF0aC5kYXRhLCBoYXNGaWxsLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocGF0aC5kYXRhKSkge1xuICAgICAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlQYXRoKHBhdGguZGF0YSwgaGFzRmlsbCwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKCFleGlzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIHNldEZpbGxTdHlsZShmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbiAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgfVxuICAgIGlmIChoYXNTdHJva2UpIHtcbiAgICAgICAgc2V0U3Ryb2tlU3R5bGUoc3Ryb2tlLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB9XG59XG5leHBvcnQgdmFyIENhbnZhc1NoYXBlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNTaGFwZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihzaGFwZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gc2hhcGU7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBQb2ludC5zZXRFbXB0eShvZmZzZXQpO1xuICAgICAgICBpZiAoUGl2b3QuaGFzVmFsdWVzKHNoYXBlKSkge1xuICAgICAgICAgICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzKHNoYXBlLCBib3VuZHMpO1xuICAgICAgICAgICAgaWYgKFJlY3RhbmdsZS5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmZzZXQueCA9IFBpdm90LmdldFgoc2hhcGUsIGJvdW5kcy53aWR0aCk7XG4gICAgICAgICAgICBvZmZzZXQueSA9IFBpdm90LmdldFkoc2hhcGUsIGJvdW5kcy53aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gZW5naW5lLnBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChQb2ludC5pc0VtcHR5KG9mZnNldCkpIHtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludExvY2FsKG1hdHJpeCwgb2Zmc2V0LCBvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCArIG9mZnNldC54LCBtYXRyaXgudHkgKyBvZmZzZXQueSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZW5kZXJHcmFwaGljcyhkYXRhW2ldLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dDJkLCBlbmdpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmVuZGVyR3JhcGhpY3MoZGF0YSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQyZCwgZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNTaGFwZUV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgU2hhcGVFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KFNIQVBFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNTaGFwZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc1NoYXBlRXh0ZW5zaW9uIHx8IChDYW52YXNTaGFwZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBHcmFwaGljc1N0cmluZ1JlYWRlciB9IGZyb20gJy4uL2RhdGEvc3RyaW5nJztcbmltcG9ydCB7IGFwcGx5Q29tbWFuZCB9IGZyb20gJy4vcGF0aCc7XG5jb25zdCByZWFkZXIgPSBuZXcgR3JhcGhpY3NTdHJpbmdSZWFkZXIoKTtcbmV4cG9ydCBmdW5jdGlvbiBhcHBseVN0cmluZyhkYXRhLCBoYXNGaWxsLCBjb250ZXh0KSB7XG4gICAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgcmVhZGVyLnNldFBhdGgoZGF0YSk7XG4gICAgd2hpbGUgKHJlYWRlci5yZWFkTmV4dCgpKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSByZWFkZXIuZ2V0Q29tbWFuZCgpO1xuICAgICAgICBpZiAoY29tbWFuZCkge1xuICAgICAgICAgICAgYXBwbHlDb21tYW5kKGNvbW1hbmQsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgQ2FudmFzUGF0dGVybnMgfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IE1hdHJpeCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuY29uc3QgZW1wdHlNYXRyaXggPSBNYXRyaXguZW1wdHkoKTtcbmNvbnN0IGVtcHR5QXJyYXkgPSBbXTtcbmZ1bmN0aW9uIGdldENhbnZhc1BhdHRlcm4oZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihmaWxsLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgc3dpdGNoIChmaWxsLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NvbGlkJzpcbiAgICAgICAgICAgICAgICBjb25zdCBzb2xpZCA9IGZpbGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihzb2xpZC5jb2xvciA/PyAwLCBzb2xpZC5hbHBoYSA/PyAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBjYXNlICdsaW5lYXInOlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgbWF0cml4OiBtbCA9IGVtcHR5TWF0cml4LCBjb2xvcnM6IGNsID0gZW1wdHlBcnJheSwgYWxwaGFzOiBhbCA9IGVtcHR5QXJyYXksIHJhdGlvczogcmwgPSBlbXB0eUFycmF5LCB9ID0gZmlsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMubGluZWFyR3JhZGllbnRQYXR0ZXJuKG1sLCBjbCwgYWwsIHJsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCk7XG4gICAgICAgICAgICBjYXNlICdyYWRpYWwnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgbWF0cml4OiBtciA9IGVtcHR5TWF0cml4LCBjb2xvcnM6IGNyID0gZW1wdHlBcnJheSwgYWxwaGFzOiBhciA9IGVtcHR5QXJyYXksIHJhdGlvczogcnIgPSBlbXB0eUFycmF5LCB9ID0gZmlsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMucmFkaWFsR3JhZGllbnRQYXR0ZXJuKG1yLCBjciwgYXIsIHJyLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCk7XG4gICAgICAgICAgICBjYXNlICdiaXRtYXAnOlxuICAgICAgICAgICAgICAgIGNvbnN0IGJpdG1hcEZpbGwgPSBmaWxsO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVwZWF0ID0gdHJ1ZSwgc3JjIH0gPSBiaXRtYXBGaWxsO1xuICAgICAgICAgICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIENhbnZhc1BhdHRlcm5zLmJpdG1hcFBhdHRlcm4ocmVzb3VyY2UuaW1hZ2UsIHJlcGVhdCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWxsU3R5bGUoZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZ2V0Q2FudmFzUGF0dGVybihmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHJva2VTdHlsZShzdHJva2UsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpIHtcbiAgICBpZiAodHlwZW9mIHN0cm9rZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihzdHJva2UsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjb250ZXh0LmxpbmVDYXAgPSAncm91bmQnO1xuICAgICAgICBjb250ZXh0LmxpbmVKb2luID0gJ3JvdW5kJztcbiAgICAgICAgY29udGV4dC5taXRlckxpbWl0ID0gMTA7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBzdHJva2UgPT09ICdvYmplY3QnICYmIHN0cm9rZS5maWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGdldENhbnZhc1BhdHRlcm4oc3Ryb2tlLmZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHN0cm9rZS50aGlja25lc3MgPz8gMTtcbiAgICAgICAgY29udGV4dC5saW5lQ2FwID0gc3Ryb2tlLmNhcHMgPz8gJ3JvdW5kJztcbiAgICAgICAgY29udGV4dC5saW5lSm9pbiA9IHN0cm9rZS5qb2ludHMgPz8gJ3JvdW5kJztcbiAgICAgICAgY29udGV4dC5taXRlckxpbWl0ID0gc3Ryb2tlLm1pdGVyTGltaXQgPz8gMTA7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQm91bmRzIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBQYXRoQ29tbWFuZCB9IGZyb20gJy4vcGF0aCc7XG5pbXBvcnQgeyBHcmFwaGljc1N0cmluZyB9IGZyb20gJy4vc3RyaW5nJztcbmV4cG9ydCB2YXIgUmVjdGFuZ2xlRGF0YTtcbihmdW5jdGlvbiAoUmVjdGFuZ2xlRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHdpZHRoID0gMCwgaGVpZ2h0ID0gMCwgfSA9IGRhdGE7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCwgeSk7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShSZWN0YW5nbGVEYXRhIHx8IChSZWN0YW5nbGVEYXRhID0ge30pKTtcbmV4cG9ydCB2YXIgRWxsaXBzZURhdGE7XG4oZnVuY3Rpb24gKEVsbGlwc2VEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgcmFkaXVzID0gMCwgcmFkaXVzWCwgcmFkaXVzWSwgfSA9IGRhdGE7XG4gICAgICAgIGNvbnN0IHJ4ID0gcmFkaXVzWCA/PyByYWRpdXM7XG4gICAgICAgIGNvbnN0IHJ5ID0gcmFkaXVzWSA/PyByYWRpdXM7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCAtIHJ4LCB5IC0gcnkpO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHggKyByeCwgeSArIHJ5KTtcbiAgICB9XG4gICAgRWxsaXBzZURhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoRWxsaXBzZURhdGEgfHwgKEVsbGlwc2VEYXRhID0ge30pKTtcbmV4cG9ydCB2YXIgUGF0aERhdGE7XG4oZnVuY3Rpb24gKFBhdGhEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKHBhdGhEYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBwYXRoRGF0YTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgR3JhcGhpY3NTdHJpbmcuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IGRhdGFbaV07XG4gICAgICAgICAgICAgICAgUGF0aENvbW1hbmQuY2FsY3VsYXRlQm91bmRzKGNvbW1hbmQsIGJvdW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgUGF0aERhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoUGF0aERhdGEgfHwgKFBhdGhEYXRhID0ge30pKTtcbmV4cG9ydCB2YXIgR3JhcGhpY3NEYXRhO1xuKGZ1bmN0aW9uIChHcmFwaGljc0RhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gZGF0YTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdyZWN0YW5nbGUnOlxuICAgICAgICAgICAgICAgIFJlY3RhbmdsZURhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbGxpcHNlJzpcbiAgICAgICAgICAgICAgICBFbGxpcHNlRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3BhdGgnOlxuICAgICAgICAgICAgICAgIFBhdGhEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBHcmFwaGljc0RhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoR3JhcGhpY3NEYXRhIHx8IChHcmFwaGljc0RhdGEgPSB7fSkpO1xuIiwiaW1wb3J0IHsgQm91bmRzIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5leHBvcnQgdmFyIFBhdGhDb21tYW5kO1xuKGZ1bmN0aW9uIChQYXRoQ29tbWFuZCkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBwYXRoO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ21vdmVUbyc6XG4gICAgICAgICAgICBjYXNlICdsaW5lVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBtb3ZlVG8ueCA/PyAwLCBtb3ZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1cnZlVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3VydmVUby5jeCA/PyAwLCBjdXJ2ZVRvLmN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3VydmVUby54ID8/IDAsIGN1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1YmljQ3VydmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby5jeCA/PyAwLCBjdWJpY0N1cnZlVG8uY3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8uc3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLnN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLnggPz8gMCwgY3ViaWNDdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFBhdGhDb21tYW5kIHx8IChQYXRoQ29tbWFuZCA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQYXRoQ29tbWFuZCwgfSBmcm9tICcuL3BhdGgnO1xuY29uc3QgTlVNQkVSU19DT1VOVCA9IHtcbiAgICBNOiAyLFxuICAgIG06IDIsXG4gICAgTDogMixcbiAgICBsOiAyLFxuICAgIEg6IDEsXG4gICAgaDogMSxcbiAgICBWOiAxLFxuICAgIHY6IDEsXG4gICAgQzogNixcbiAgICBjOiA2LFxuICAgIFM6IDQsXG4gICAgczogNCxcbiAgICBROiA0LFxuICAgIHE6IDQsXG4gICAgVDogMixcbiAgICB0OiAyLFxufTtcbmNvbnN0IENPTU1BTkRfUkVHRVggPSAvW01tTGxIaFZ2Q2NTc1FxVHRdLztcbmNvbnN0IE5VTUJFUl9SRUdFWCA9IC9bLStdP1tcXGQuXSsvO1xuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU3RyaW5nU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gJyc7XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IG51bGw7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICB0aGlzLnN5bWJvbFJlZ2V4ID0gL1tNbUxsSGhWdkNjU3NRcVR0XXxbLStdP1tcXGQuXSsvZztcbiAgICB9XG4gICAgc2V0UGF0aChwYXRoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMuc3ltYm9sUmVnZXgubGFzdEluZGV4ID0gMDtcbiAgICB9XG4gICAgZ2V0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZDtcbiAgICB9XG4gICAgZ2V0QnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWZmZXI7XG4gICAgfVxuICAgIHJlYWROZXh0KCkge1xuICAgICAgICBjb25zdCB7IGxhc3RJbmRleCB9ID0gdGhpcy5zeW1ib2xSZWdleDtcbiAgICAgICAgY29uc3Qgc3ltYm9sTWF0Y2ggPSB0aGlzLnN5bWJvbFJlZ2V4LmV4ZWModGhpcy5wYXRoKTtcbiAgICAgICAgaWYgKCFzeW1ib2xNYXRjaCkge1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xNYXRjaFswXTtcbiAgICAgICAgaWYgKENPTU1BTkRfUkVHRVgudGVzdChzeW1ib2wpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBzeW1ib2w7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoTlVNQkVSX1JFR0VYLnRlc3Qoc3ltYm9sKSkge1xuICAgICAgICAgICAgdGhpcy5zeW1ib2xSZWdleC5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jb21tYW5kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY291bnQgPSBOVU1CRVJTX0NPVU5UW3RoaXMuY29tbWFuZF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyTWF0Y2ggPSB0aGlzLnN5bWJvbFJlZ2V4LmV4ZWModGhpcy5wYXRoKTtcbiAgICAgICAgICAgIGlmIChudW1iZXJNYXRjaCAmJiBOVU1CRVJfUkVHRVgudGVzdChudW1iZXJNYXRjaFswXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlcltpXSA9IHBhcnNlRmxvYXQobnVtYmVyTWF0Y2hbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR3JhcGhpY3NTdHJpbmdSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0cmVhbSA9IG5ldyBHcmFwaGljc1N0cmluZ1N0cmVhbSgpO1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSB7IHR5cGU6ICdtb3ZlVG8nIH07XG4gICAgICAgIHRoaXMuY29tbWFuZEV4aXN0cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0WSA9IDA7XG4gICAgICAgIHRoaXMubGFzdENYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0Q1kgPSAwO1xuICAgIH1cbiAgICBzZXRQYXRoKHBhdGgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0uc2V0UGF0aChwYXRoKTtcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgICAgIHRoaXMubGFzdFkgPSAwO1xuICAgICAgICB0aGlzLmxhc3RDWCA9IDA7XG4gICAgICAgIHRoaXMubGFzdENZID0gMDtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gZmFsc2U7XG4gICAgfVxuICAgIGdldENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRFeGlzdHMgPyB0aGlzLmNvbW1hbmQgOiBudWxsO1xuICAgIH1cbiAgICByZWFkTmV4dCgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0ucmVhZE5leHQoKTtcbiAgICAgICAgdGhpcy5wYXJzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kRXhpc3RzO1xuICAgIH1cbiAgICBwYXJzZSgpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMuc3RyZWFtLmdldENvbW1hbmQoKTtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gISFjb21tYW5kO1xuICAgICAgICBpZiAoIXRoaXMuY29tbWFuZEV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuc3RyZWFtLmdldEJ1ZmZlcigpO1xuICAgICAgICBjb25zdCBbZTAsIGUxLCBlMiwgZTMsIGU0LCBlNSxdID0gYnVmZmVyO1xuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbW92ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ21vdmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gZTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IGU0O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGU1O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTQgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGU1ICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IHRoaXMubGFzdENZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGUzICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gdGhpcy5sYXN0Q1k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IHJlYWRlciA9IG5ldyBHcmFwaGljc1N0cmluZ1JlYWRlcigpO1xuZXhwb3J0IHZhciBHcmFwaGljc1N0cmluZztcbihmdW5jdGlvbiAoR3JhcGhpY3NTdHJpbmcpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aCwgYm91bmRzKSB7XG4gICAgICAgIHJlYWRlci5zZXRQYXRoKHBhdGgpO1xuICAgICAgICB3aGlsZSAocmVhZGVyLnJlYWROZXh0KCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSByZWFkZXIuZ2V0Q29tbWFuZCgpO1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc1N0cmluZyB8fCAoR3JhcGhpY3NTdHJpbmcgPSB7fSkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhpY3Mge1xuICAgIGNvbnN0cnVjdG9yKHNoYXBlKSB7XG4gICAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZTtcbiAgICB9XG4gICAgYmVnaW5GaWxsKGNvbG9yID0gMCwgYWxwaGEgPSAxKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBiZWdpbkJpdG1hcEZpbGwoc3JjLCBtYXRyaXgsIHJlcGVhdCA9IHRydWUsIHNtb290aCA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdiaXRtYXAnLFxuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgcmVwZWF0LFxuICAgICAgICAgICAgc21vb3RoLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBiZWdpbkdyYWRpZW50RmlsbCh0eXBlLCBjb2xvciwgYWxwaGEsIHJhdGlvLCBtYXRyaXgsIHNwcmVhZCA9ICdyZXBlYXQnLCBpbnRlcnBvbGF0aW9uID0gJ3JnYicsIGZvY2FsUG9pbnRSYXRpbyA9IDApIHtcbiAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHNwcmVhZCxcbiAgICAgICAgICAgIGludGVycG9sYXRpb24sXG4gICAgICAgICAgICBmb2NhbFBvaW50UmF0aW8sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxpbmVTdHlsZSh0aGlja25lc3MgPSAwLCBjb2xvciA9IDAsIGFscGhhID0gMSwgcGl4ZWxIaW50aW5nID0gZmFsc2UsIHNjYWxlTW9kZSA9ICdub25lJywgY2FwcyA9ICdyb3VuZCcsIGpvaW50cyA9ICdyb3VuZCcsIG1pdGVyTGltaXQgPSAzKSB7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0ge1xuICAgICAgICAgICAgdGhpY2tuZXNzLFxuICAgICAgICAgICAgcGl4ZWxIaW50aW5nLFxuICAgICAgICAgICAgc2NhbGVNb2RlLFxuICAgICAgICAgICAgY2FwcyxcbiAgICAgICAgICAgIGpvaW50cyxcbiAgICAgICAgICAgIG1pdGVyTGltaXQsXG4gICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxpbmVHcmFkaWVudFN0eWxlKHR5cGUsIGNvbG9yLCBhbHBoYSwgcmF0aW8sIG1hdHJpeCwgc3ByZWFkID0gJ3JlcGVhdCcsIGludGVycG9sYXRpb24gPSAncmdiJywgZm9jYWxQb2ludFJhdGlvID0gMCkge1xuICAgICAgICBpZiAoIXRoaXMuc3Ryb2tlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHJva2UuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICBzcHJlYWQsXG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9uLFxuICAgICAgICAgICAgZm9jYWxQb2ludFJhdGlvLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsaW5lQml0bWFwU3R5bGUoc3JjLCBtYXRyaXgsIHJlcGVhdCA9IHRydWUsIHNtb290aCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy5zdHJva2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0cm9rZS5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ2JpdG1hcCcsXG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICBzbW9vdGgsXG4gICAgICAgIH07XG4gICAgfVxuICAgIG1vdmVUbyh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICBwYXRoLnB1c2goeyB0eXBlOiAnbW92ZVRvJywgeCwgeSB9KTtcbiAgICB9XG4gICAgbGluZVRvKHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goeyB0eXBlOiAnbGluZVRvJywgeCwgeSB9KTtcbiAgICB9XG4gICAgY3VydmVUbyhjeCwgY3ksIHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1cnZlVG8nLCBjeCwgY3ksIHgsIHksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjdWJpY0N1cnZlVG8oY3gsIGN5LCBzeCwgc3ksIHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1cnZlVG8nLCBjeCwgY3ksIHN4LCBzeSwgeCwgeSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdSb3VuZFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgZWxsaXBzZVdpZHRoID0gMCwgZWxsaXBzZUhlaWdodCA9IDApIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnN0IHcgPSBlbGxpcHNlV2lkdGg7XG4gICAgICAgIGNvbnN0IGggPSBlbGxpcHNlSGVpZ2h0O1xuICAgICAgICBjb25zdCBrID0gMC41NTIyODQ4O1xuICAgICAgICBjb25zdCBveCA9ICh3IC8gMikgKiBrO1xuICAgICAgICBjb25zdCBveSA9IChoIC8gMikgKiBrO1xuICAgICAgICBjb25zdCB4ZSA9IHggKyB3O1xuICAgICAgICBjb25zdCB5ZSA9IHkgKyBoO1xuICAgICAgICBjb25zdCB4bSA9IHggKyB3IC8gMjtcbiAgICAgICAgY29uc3QgeW0gPSB5ICsgaCAvIDI7XG4gICAgICAgIGNvbnN0IGR4ID0gd2lkdGggLSB3O1xuICAgICAgICBjb25zdCBkeSA9IGhlaWdodCAtIGg7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbW92ZVRvJyxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5OiB5bSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4LFxuICAgICAgICAgICAgY3k6IHltIC0gb3ksXG4gICAgICAgICAgICBzeDogeG0gLSBveCxcbiAgICAgICAgICAgIHN5OiB5LFxuICAgICAgICAgICAgeDogeG0sXG4gICAgICAgICAgICB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeG0gKyBkeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeG0gKyBveCArIGR4LFxuICAgICAgICAgICAgY3k6IHksXG4gICAgICAgICAgICBzeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHN5OiB5bSAtIG95LFxuICAgICAgICAgICAgeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHk6IHltLFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHk6IHltICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeGUgKyBkeCxcbiAgICAgICAgICAgIGN5OiB5bSArIG95ICsgZHksXG4gICAgICAgICAgICBzeDogeG0gKyBveCArIGR4LFxuICAgICAgICAgICAgc3k6IHllICsgZHksXG4gICAgICAgICAgICB4OiB4bSArIGR4LFxuICAgICAgICAgICAgeTogeWUgKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhtLFxuICAgICAgICAgICAgeTogeWUgKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4bSAtIG94LFxuICAgICAgICAgICAgY3k6IHllICsgZHksXG4gICAgICAgICAgICBzeDogeCxcbiAgICAgICAgICAgIHN5OiB5bSArIG95ICsgZHksXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeTogeW0gKyBkeSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAncmVjdGFuZ2xlJztcbiAgICAgICAgZGF0YS54ID0geDtcbiAgICAgICAgZGF0YS55ID0geTtcbiAgICAgICAgZGF0YS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBkYXRhLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgZHJhd0NpcmNsZSh4LCB5LCByYWRpdXMpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAnZWxsaXBzZSc7XG4gICAgICAgIGRhdGEueCA9IHg7XG4gICAgICAgIGRhdGEueSA9IHk7XG4gICAgICAgIGRhdGEucmFkaXVzID0gcmFkaXVzO1xuICAgIH1cbiAgICBkcmF3RWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ2VsbGlwc2UnO1xuICAgICAgICBkYXRhLnJhZGl1c1ggPSB3aWR0aCAvIDI7XG4gICAgICAgIGRhdGEucmFkaXVzWSA9IGhlaWdodCAvIDI7XG4gICAgICAgIGRhdGEueCA9IHggLSBkYXRhLnJhZGl1c1g7XG4gICAgICAgIGRhdGEueSA9IHkgLSBkYXRhLnJhZGl1c1k7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5zaGFwZS5kYXRhO1xuICAgIH1cbiAgICBjcmVhdGVEYXRhKCkge1xuICAgICAgICBjb25zdCB7IHNoYXBlLCBmaWxsLCBzdHJva2UgfSA9IHRoaXM7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNoYXBlLmRhdGEpKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHNoYXBlLmRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBzaGFwZS5kYXRhID0gW3NoYXBlLmRhdGFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hhcGUuZGF0YSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyYXBoaWNzRGF0YSA9IHsgdHlwZTogJ3BhdGgnLCBmaWxsLCBzdHJva2UgfTtcbiAgICAgICAgc2hhcGUuZGF0YS5wdXNoKGdyYXBoaWNzRGF0YSk7XG4gICAgICAgIHJldHVybiBncmFwaGljc0RhdGE7XG4gICAgfVxuICAgIGJlZ2luUGF0aCgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLmRhdGEgPSBbXTtcbiAgICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcbiAgICB9XG4gICAgZ2V0UGF0aCgpIHtcbiAgICAgICAgY29uc3QgeyBzaGFwZSB9ID0gdGhpcztcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNoYXBlLmRhdGEpIHx8ICFzaGFwZS5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gc2hhcGUuZGF0YVtzaGFwZS5kYXRhLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5kYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YS5kYXRhO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vZGF0YS9kYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9wYXRoJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9zdHJpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL3N0eWxlJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JhcGhpY3MnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFwZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy9zaGFwZSc7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQm91bmRzLCBSZWN0YW5nbGUgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgR3JhcGhpY3NEYXRhIH0gZnJvbSAnLi9kYXRhL2RhdGEnO1xuaW1wb3J0IEdyYXBoaWNzIGZyb20gJy4vZ3JhcGhpY3MnO1xuZXhwb3J0IGNvbnN0IFNIQVBFID0gJ3NoYXBlJztcbmNvbnN0IGJvdW5kcyA9IEJvdW5kcy5lbXB0eSgpO1xuZXhwb3J0IHZhciBTaGFwZTtcbihmdW5jdGlvbiAoU2hhcGUpIHtcbiAgICBmdW5jdGlvbiBnZXRHcmFwaGljcyhzaGFwZSkge1xuICAgICAgICByZXR1cm4gbmV3IEdyYXBoaWNzKHNoYXBlKTtcbiAgICB9XG4gICAgU2hhcGUuZ2V0R3JhcGhpY3MgPSBnZXRHcmFwaGljcztcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoc2hhcGUsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHNoYXBlO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEJvdW5kcy5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhW2ldLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJvdW5kcy5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdpZHRoID0gYm91bmRzLm1heFggLSBib3VuZHMubWluWDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gYm91bmRzLm1heFkgLSBib3VuZHMubWluWTtcbiAgICAgICAgY29uc3QgeCA9IGJvdW5kcy5taW5YICsgUGl2b3QuZ2V0WChzaGFwZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gYm91bmRzLm1pblkgKyBQaXZvdC5nZXRZKHNoYXBlLCBoZWlnaHQpO1xuICAgICAgICByZXN1bHQueCA9IHg7XG4gICAgICAgIHJlc3VsdC55ID0geTtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIFNoYXBlLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFNoYXBlIHx8IChTaGFwZSA9IHt9KSk7XG5jb25zdCByZWN0YW5nbGUgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgU2hhcGVFeHRlbnNpb247XG4oZnVuY3Rpb24gKFNoYXBlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdChzaGFwZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgbG9jYWwgfSA9IGVuZ2luZS5wb2ludGVycztcbiAgICAgICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzKHNoYXBlLCByZWN0YW5nbGUpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKHJlY3RhbmdsZSwgbG9jYWwpO1xuICAgIH1cbiAgICBTaGFwZUV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChTSEFQRSwgaGl0VGVzdCk7XG4gICAgICAgIEltYWdlUmVzb3VyY2UuaW5pdChlbmdpbmUpO1xuICAgIH1cbiAgICBTaGFwZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFNoYXBlRXh0ZW5zaW9uIHx8IChTaGFwZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQ2FudmFzUGF0dGVybnMgfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IEZvbnQgfSBmcm9tICcuLi9kYXRhL2ZvbnQnO1xuaW1wb3J0IHsgVGV4dEV4dGVuc2lvbiwgVEVYVCwgVGV4dCB9IGZyb20gJy4uL3RleHQnO1xuaW1wb3J0IHsgVGV4dEZvcm1hdCB9IGZyb20gJy4uL2RhdGEvZm9ybWF0JztcbmltcG9ydCB7IFRleHRNZXRyaWNzIH0gZnJvbSAnLi4vZGF0YS9tZXRyaWNzJztcbmNvbnN0IGRlZmF1bHRUZXh0Rm9ybWF0ID0ge307XG5jb25zdCBDT1JSRUNUSU9OID0gMC44NTtcbmV4cG9ydCB2YXIgQ2FudmFzVGV4dEV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzVGV4dEV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihjb21wb25lbnQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IG1hdHJpeCwgY29sb3JUcmFuc2Zvcm0gfSA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtZXRyaWNzO1xuICAgICAgICBjb25zdCBzaW1wbGUgPSBUZXh0LmlzU2ltcGxlKGNvbXBvbmVudCk7XG4gICAgICAgIGlmIChzaW1wbGUpIHtcbiAgICAgICAgICAgIG1ldHJpY3MgPSBUZXh0TWV0cmljcy5nZXRTaW1wbGVNZXRyaWNzKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtZXRyaWNzID0gVGV4dE1ldHJpY3MuZ2V0TWV0cmljcyhjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWV0cmljcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZm9ybWF0LCBib3JkZXIsIGJhY2tncm91bmQsIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIFRleHRGb3JtYXQuY29tYmluZShmb3JtYXQsIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQsIGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgY29uc3QgcmVhbFdpZHRoID0gd2lkdGggPz8gbWV0cmljcy53aWR0aDtcbiAgICAgICAgY29uc3QgcmVhbEhlaWdodCA9IGhlaWdodCA/PyBtZXRyaWNzLmhlaWdodDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IFBpdm90LmdldFgoY29tcG9uZW50LCByZWFsV2lkdGgpO1xuICAgICAgICBjb25zdCBvZmZzZXRZID0gUGl2b3QuZ2V0WShjb21wb25lbnQsIHJlYWxIZWlnaHQpO1xuICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFsaWduVmVydGljYWxWYWx1ZSA9IFRleHRGb3JtYXQuZ2V0VmVydGljYWxBbGlnblZhbHVlKGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgICAgIHkgPSAoaGVpZ2h0IC0gbWV0cmljcy5oZWlnaHQpICogYWxpZ25WZXJ0aWNhbFZhbHVlO1xuICAgICAgICAgICAgaWYgKHkgPCAwKSB7XG4gICAgICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeSArPSBvZmZzZXRZO1xuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBlbmdpbmUucGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgIGlmIChiYWNrZ3JvdW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICcnO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihiYWNrZ3JvdW5kLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQucmVjdChvZmZzZXRYLCBvZmZzZXRZLCByZWFsV2lkdGgsIHJlYWxIZWlnaHQpO1xuICAgICAgICAgICAgY29udGV4dDJkLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihib3JkZXIsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcbiAgICAgICAgICAgIGNvbnRleHQyZC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5yZWN0KG9mZnNldFgsIG9mZnNldFksIHJlYWxXaWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dDJkLnRleHRCYXNlbGluZSA9ICdhbHBoYWJldGljJztcbiAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gJyc7XG4gICAgICAgIGlmIChzaW1wbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBjb21wb25lbnQudGV4dDtcbiAgICAgICAgICAgIGNvbnN0IHsgZm9udCwgc2l6ZSwgY29sb3IsIGFscGhhLCBsZWFkaW5nLCBsZXR0ZXJTcGFjaW5nLCB9ID0gZGVmYXVsdFRleHRGb3JtYXQ7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0Rm9udCA9IEZvbnQuZ2V0Rm9udChmb250KTtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbFNpemUgPSBzaXplICogQ09SUkVDVElPTjtcbiAgICAgICAgICAgIGNvbnRleHQyZC5mb250ID0gRm9udC5nZXRTdHlsZUZvbnQoZm9udCwgc2l6ZSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGNvbG9yLCBhbHBoYSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgbGV0IHggPSBvZmZzZXRYO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICBpZiAoc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICB4ID0gb2Zmc2V0WDtcbiAgICAgICAgICAgICAgICAgICAgeSArPSBzaXplICsgbGVhZGluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSB0ZXh0W2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShkZWZhdWx0Rm9udCwgc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIGxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5maWxsVGV4dChzeW1ib2wsIHgsIHkgKyBzeW1ib2xTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgeCArPSBhZHZhbmNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbGluZXMgfSA9IG1ldHJpY3M7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChsaW5lLnN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gbGluZS5zeW1ib2xzWzBdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbGlnblZhbHVlID0gVGV4dEZvcm1hdC5nZXRBbGlnblZhbHVlKGZpcnN0LmZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gKHJlYWxXaWR0aCAtIGxpbmUud2lkdGgpICogYWxpZ25WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4ICs9IG9mZnNldFg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc3ltYm9scyB9ID0gbGluZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZUhlaWdodCA9IGxpbmUuaGVpZ2h0ICogQ09SUkVDVElPTjtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzeW1ib2xzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHN5bWJvbC5mb3JtYXQuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsaWduU3ltYm9sVmFsdWUgPSBUZXh0Rm9ybWF0LmdldFZlcnRpY2FsQWxpZ25WYWx1ZShzeW1ib2wuZm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbFNpemUgPSBzaXplICogQ09SUkVDVElPTjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5mb250ID0gRm9udC5nZXRTdHlsZUZvbnQoc3ltYm9sLmZvcm1hdC5mb250LCBzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oc3ltYm9sLmZvcm1hdC5jb2xvciwgc3ltYm9sLmZvcm1hdC5hbHBoYSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDJkLmZpbGxUZXh0KHN5bWJvbC5zeW1ib2wsIHgsIHkgKyBzeW1ib2xTaXplICsgYWxpZ25TeW1ib2xWYWx1ZSAqIChsaW5lSGVpZ2h0IC0gc3ltYm9sU2l6ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgeCArPSBzeW1ib2wuYWR2YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB5ICs9IGxpbmUuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc1RleHRFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIFRleHRFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KFRFWFQsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc1RleHRFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNUZXh0RXh0ZW5zaW9uIHx8IChDYW52YXNUZXh0RXh0ZW5zaW9uID0ge30pKTtcbiIsImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuZXhwb3J0IGNvbnN0IEVNID0gMTAyNDtcbmNvbnN0IGZvbnRzID0gbmV3IE1hcCgpO1xuZXhwb3J0IHZhciBGb250O1xuKGZ1bmN0aW9uIChGb250KSB7XG4gICAgZnVuY3Rpb24gZ2V0U3R5bGVGb250KGZvbnQsIHNpemUpIHtcbiAgICAgICAgcmV0dXJuIGAke3NpemV9cHggJHtmb250fWA7XG4gICAgfVxuICAgIEZvbnQuZ2V0U3R5bGVGb250ID0gZ2V0U3R5bGVGb250O1xuICAgIGZ1bmN0aW9uIG1lYXN1cmVUZXh0KGZvbnQsIHNpemUsIHRleHQpIHtcbiAgICAgICAgY29udGV4dC5mb250ID0gZ2V0U3R5bGVGb250KGZvbnQsIHNpemUpO1xuICAgICAgICByZXR1cm4gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcbiAgICB9XG4gICAgRm9udC5tZWFzdXJlVGV4dCA9IG1lYXN1cmVUZXh0O1xuICAgIGZ1bmN0aW9uIGdldENoYXJXaWR0aChmb250LCBjaGFyKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IGZvbnQud2lkdGhzLmdldChjaGFyKTtcbiAgICAgICAgaWYgKCF3aWR0aCkge1xuICAgICAgICAgICAgd2lkdGggPSBtZWFzdXJlVGV4dChmb250Lm5hbWUsIEVNLCBjaGFyKTtcbiAgICAgICAgICAgIGZvbnQud2lkdGhzLnNldChjaGFyLCB3aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cbiAgICBGb250LmdldENoYXJXaWR0aCA9IGdldENoYXJXaWR0aDtcbiAgICBmdW5jdGlvbiBnZXRLZXJuaW5nKGZvbnQsIGZpcnN0LCBzZWNvbmQpIHtcbiAgICAgICAgY29uc3QgcGFpciA9IGZpcnN0ICsgc2Vjb25kO1xuICAgICAgICBsZXQga2VybmluZyA9IGZvbnQua2VybmluZ3MuZ2V0KHBhaXIpO1xuICAgICAgICBpZiAoIWtlcm5pbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoU2Vjb25kID0gZ2V0Q2hhcldpZHRoKGZvbnQsIHNlY29uZCk7XG4gICAgICAgICAgICBjb25zdCB3aWR0aFRvdGFsID0gbWVhc3VyZVRleHQoZm9udC5uYW1lLCBFTSwgZmlyc3QgKyBzZWNvbmQpO1xuICAgICAgICAgICAga2VybmluZyA9IHdpZHRoVG90YWwgLSB3aWR0aFNlY29uZDtcbiAgICAgICAgICAgIGZvbnQua2VybmluZ3Muc2V0KHBhaXIsIGtlcm5pbmcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXJuaW5nO1xuICAgIH1cbiAgICBGb250LmdldEtlcm5pbmcgPSBnZXRLZXJuaW5nO1xuICAgIGZ1bmN0aW9uIGdldEFkdmFuY2UoZm9udCwgc2l6ZSwgZmlyc3QsIHNlY29uZCkge1xuICAgICAgICBjb25zdCBzY2FsZSA9IHNpemUgLyBFTTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBnZXRDaGFyV2lkdGgoZm9udCwgZmlyc3QpO1xuICAgICAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpZHRoICogc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2VybmluZyA9IGdldEtlcm5pbmcoZm9udCwgZmlyc3QsIHNlY29uZCk7XG4gICAgICAgIHJldHVybiBrZXJuaW5nICogc2NhbGU7XG4gICAgfVxuICAgIEZvbnQuZ2V0QWR2YW5jZSA9IGdldEFkdmFuY2U7XG4gICAgZnVuY3Rpb24gZ2V0Rm9udChuYW1lKSB7XG4gICAgICAgIGxldCBmb250ID0gZm9udHMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoIWZvbnQpIHtcbiAgICAgICAgICAgIGZvbnQgPSB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB3aWR0aHM6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgICAgICBrZXJuaW5nczogbmV3IE1hcCgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvbnRzLnNldChuYW1lLCBmb250KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9udDtcbiAgICB9XG4gICAgRm9udC5nZXRGb250ID0gZ2V0Rm9udDtcbn0pKEZvbnQgfHwgKEZvbnQgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBUZXh0Rm9ybWF0O1xuKGZ1bmN0aW9uIChUZXh0Rm9ybWF0KSB7XG4gICAgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCA9IHtcbiAgICAgICAgZm9udDogJ2FyaWFsJyxcbiAgICAgICAgc2l6ZTogMTUsXG4gICAgICAgIGNvbG9yOiAwLFxuICAgICAgICBhbHBoYTogMSxcbiAgICAgICAgYm9sZDogZmFsc2UsXG4gICAgICAgIGl0YWxpYzogZmFsc2UsXG4gICAgICAgIHVuZGVybGluZTogZmFsc2UsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgICAgIGxlYWRpbmc6IDAsXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgIH07XG4gICAgZnVuY3Rpb24gY29tYmluZShzb3VyY2UsIGRlZmF1bHRGb3JtYXQsIHJlc3VsdCkge1xuICAgICAgICByZXN1bHQuZm9udCA9IHNvdXJjZT8uZm9udCA/PyBkZWZhdWx0Rm9ybWF0LmZvbnQ7XG4gICAgICAgIHJlc3VsdC5zaXplID0gc291cmNlPy5zaXplID8/IGRlZmF1bHRGb3JtYXQuc2l6ZTtcbiAgICAgICAgcmVzdWx0LmNvbG9yID0gc291cmNlPy5jb2xvciA/PyBkZWZhdWx0Rm9ybWF0LmNvbG9yO1xuICAgICAgICByZXN1bHQuYWxwaGEgPSBzb3VyY2U/LmFscGhhID8/IGRlZmF1bHRGb3JtYXQuYWxwaGE7XG4gICAgICAgIHJlc3VsdC5ib2xkID0gc291cmNlPy5ib2xkID8/IGRlZmF1bHRGb3JtYXQuYm9sZDtcbiAgICAgICAgcmVzdWx0Lml0YWxpYyA9IHNvdXJjZT8uaXRhbGljID8/IGRlZmF1bHRGb3JtYXQuaXRhbGljO1xuICAgICAgICByZXN1bHQudW5kZXJsaW5lID0gc291cmNlPy51bmRlcmxpbmUgPz8gZGVmYXVsdEZvcm1hdC51bmRlcmxpbmU7XG4gICAgICAgIHJlc3VsdC5sZXR0ZXJTcGFjaW5nID0gc291cmNlPy5sZXR0ZXJTcGFjaW5nID8/IGRlZmF1bHRGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgcmVzdWx0LmxlYWRpbmcgPSBzb3VyY2U/LmxlYWRpbmcgPz8gZGVmYXVsdEZvcm1hdC5sZWFkaW5nO1xuICAgICAgICByZXN1bHQuYWxpZ24gPSBzb3VyY2U/LmFsaWduID8/IGRlZmF1bHRGb3JtYXQuYWxpZ247XG4gICAgICAgIHJlc3VsdC52ZXJ0aWNhbEFsaWduID0gc291cmNlPy52ZXJ0aWNhbEFsaWduID8/IGRlZmF1bHRGb3JtYXQudmVydGljYWxBbGlnbjtcbiAgICB9XG4gICAgVGV4dEZvcm1hdC5jb21iaW5lID0gY29tYmluZTtcbiAgICBmdW5jdGlvbiBjb3B5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5mb250ID0gc291cmNlLmZvbnQ7XG4gICAgICAgIHRhcmdldC5zaXplID0gc291cmNlLnNpemU7XG4gICAgICAgIHRhcmdldC5jb2xvciA9IHNvdXJjZS5jb2xvcjtcbiAgICAgICAgdGFyZ2V0LmFscGhhID0gc291cmNlLmFscGhhO1xuICAgICAgICB0YXJnZXQuYm9sZCA9IHNvdXJjZS5ib2xkO1xuICAgICAgICB0YXJnZXQuaXRhbGljID0gc291cmNlLml0YWxpYztcbiAgICAgICAgdGFyZ2V0LnVuZGVybGluZSA9IHNvdXJjZS51bmRlcmxpbmU7XG4gICAgICAgIHRhcmdldC5sZXR0ZXJTcGFjaW5nID0gc291cmNlLmxldHRlclNwYWNpbmc7XG4gICAgICAgIHRhcmdldC5sZWFkaW5nID0gc291cmNlLmxlYWRpbmc7XG4gICAgICAgIHRhcmdldC5hbGlnbiA9IHNvdXJjZS5hbGlnbjtcbiAgICAgICAgdGFyZ2V0LnZlcnRpY2FsQWxpZ24gPSBzb3VyY2UudmVydGljYWxBbGlnbjtcbiAgICB9XG4gICAgVGV4dEZvcm1hdC5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBnZXRBbGlnblZhbHVlKGZvcm1hdCkge1xuICAgICAgICBzd2l0Y2ggKGZvcm1hdD8uYWxpZ24pIHtcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOiByZXR1cm4gMDtcbiAgICAgICAgICAgIGNhc2UgJ2NlbnRlcic6IHJldHVybiAwLjU7XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6IHJldHVybiAxO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dEZvcm1hdC5nZXRBbGlnblZhbHVlID0gZ2V0QWxpZ25WYWx1ZTtcbiAgICBmdW5jdGlvbiBnZXRWZXJ0aWNhbEFsaWduVmFsdWUoZm9ybWF0KSB7XG4gICAgICAgIHN3aXRjaCAoZm9ybWF0Py52ZXJ0aWNhbEFsaWduKSB7XG4gICAgICAgICAgICBjYXNlICd0b3AnOiByZXR1cm4gMDtcbiAgICAgICAgICAgIGNhc2UgJ21pZGRsZSc6IHJldHVybiAwLjU7XG4gICAgICAgICAgICBjYXNlICdib3R0b20nOiByZXR1cm4gMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRGb3JtYXQuZ2V0VmVydGljYWxBbGlnblZhbHVlID0gZ2V0VmVydGljYWxBbGlnblZhbHVlO1xufSkoVGV4dEZvcm1hdCB8fCAoVGV4dEZvcm1hdCA9IHt9KSk7XG4iLCJpbXBvcnQgeyBGb250IH0gZnJvbSAnLi9mb250JztcbmltcG9ydCB7IFRleHRGb3JtYXQgfSBmcm9tICcuL2Zvcm1hdCc7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vdGV4dCc7XG5jb25zdCBkZWZhdWx0VGV4dEZvcm1hdCA9IHt9O1xuZXhwb3J0IHZhciBUZXh0TGluZTtcbihmdW5jdGlvbiAoVGV4dExpbmUpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzeW1ib2xzOiBbXSxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBUZXh0TGluZS5jcmVhdGUgPSBjcmVhdGU7XG4gICAgZnVuY3Rpb24gZW1wdHkobGluZSkge1xuICAgICAgICBsaW5lLnN5bWJvbHMubGVuZ3RoID0gMDtcbiAgICAgICAgbGluZS53aWR0aCA9IDA7XG4gICAgICAgIGxpbmUuaGVpZ2h0ID0gMDtcbiAgICB9XG4gICAgVGV4dExpbmUuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBhZGQobGluZSwgc3ltYm9sKSB7XG4gICAgICAgIGxpbmUuc3ltYm9scy5wdXNoKHN5bWJvbCk7XG4gICAgICAgIGxpbmUud2lkdGggKz0gc3ltYm9sLmFkdmFuY2U7XG4gICAgICAgIGxpbmUuaGVpZ2h0ID0gTWF0aC5tYXgobGluZS5oZWlnaHQsIHN5bWJvbC5mb3JtYXQuc2l6ZSArIHN5bWJvbC5mb3JtYXQubGVhZGluZyk7XG4gICAgfVxuICAgIFRleHRMaW5lLmFkZCA9IGFkZDtcbiAgICBmdW5jdGlvbiBjb25jYXQodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5zeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGFyZ2V0LnN5bWJvbHMucHVzaCguLi5zb3VyY2Uuc3ltYm9scyk7XG4gICAgICAgICAgICB0YXJnZXQud2lkdGggKz0gc291cmNlLndpZHRoO1xuICAgICAgICAgICAgdGFyZ2V0LmhlaWdodCA9IE1hdGgubWF4KHRhcmdldC5oZWlnaHQsIHNvdXJjZS5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRMaW5lLmNvbmNhdCA9IGNvbmNhdDtcbiAgICBmdW5jdGlvbiBjb3JyZWN0V2lkdGgobGluZSkge1xuICAgICAgICBjb25zdCB7IHN5bWJvbHMgfSA9IGxpbmU7XG4gICAgICAgIGlmIChzeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgbGFzdCA9IHN5bWJvbHNbc3ltYm9scy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmICgvXFxzLy50ZXN0KGxhc3Quc3ltYm9sKSkge1xuICAgICAgICAgICAgICAgIHN5bWJvbHMucG9wKCk7XG4gICAgICAgICAgICAgICAgbGluZS53aWR0aCAtPSBsYXN0LmFkdmFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dExpbmUuY29ycmVjdFdpZHRoID0gY29ycmVjdFdpZHRoO1xuICAgIGZ1bmN0aW9uIGNvcnJlY3RIZWlnaHQobGluZSkge1xuICAgICAgICBjb25zdCB7IHN5bWJvbHMgfSA9IGxpbmU7XG4gICAgICAgIGlmIChzeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1swXTtcbiAgICAgICAgICAgIGxpbmUuaGVpZ2h0IC09IHN5bWJvbC5mb3JtYXQubGVhZGluZztcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0TGluZS5jb3JyZWN0SGVpZ2h0ID0gY29ycmVjdEhlaWdodDtcbn0pKFRleHRMaW5lIHx8IChUZXh0TGluZSA9IHt9KSk7XG5leHBvcnQgdmFyIFRleHRNZXRyaWNzO1xuKGZ1bmN0aW9uIChUZXh0TWV0cmljcykge1xuICAgIGZ1bmN0aW9uIGdldFN5bWJvbHMoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXRleHQgfHwgIXRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIFRleHRGb3JtYXQuY29tYmluZShjb21wb25lbnQuZm9ybWF0LCBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LCBkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGNvbnN0IHN5bWJvbHMgPSBbXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9ybWF0ID0ge307XG4gICAgICAgICAgICBUZXh0Rm9ybWF0LmNvcHkoZGVmYXVsdFRleHRGb3JtYXQsIHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2xGb250ID0gRm9udC5nZXRGb250KHN5bWJvbEZvcm1hdC5mb250KTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHRleHRbaV07XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IHRleHRbaSArIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2Uoc3ltYm9sRm9udCwgc3ltYm9sRm9ybWF0LnNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBzeW1ib2xGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICBzeW1ib2xzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgIGFkdmFuY2UsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogc3ltYm9sRm9ybWF0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGV4dCkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJsb2NrID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb3JtYXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgVGV4dEZvcm1hdC5jb3B5KGRlZmF1bHRUZXh0Rm9ybWF0LCBzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb250ID0gRm9udC5nZXRGb250KHN5bWJvbEZvcm1hdC5mb250KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBibG9jay5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gYmxvY2tbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gYmxvY2tbaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShzeW1ib2xGb250LCBzeW1ib2xGb3JtYXQuc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIHN5bWJvbEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9scy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHN5bWJvbEZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb3JtYXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgVGV4dEZvcm1hdC5jb21iaW5lKGJsb2NrLCBkZWZhdWx0VGV4dEZvcm1hdCwgc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9udCA9IEZvbnQuZ2V0Rm9udChzeW1ib2xGb3JtYXQuZm9udCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYmxvY2sudGV4dC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gYmxvY2sudGV4dFtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSBibG9jay50ZXh0W2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2Uoc3ltYm9sRm9udCwgc3ltYm9sRm9ybWF0LnNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBzeW1ib2xGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBzeW1ib2xGb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3ltYm9scztcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0U3ltYm9scyA9IGdldFN5bWJvbHM7XG4gICAgZnVuY3Rpb24gZ2V0TGluZXMoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHN5bWJvbHMgPSBnZXRTeW1ib2xzKGNvbXBvbmVudCk7XG4gICAgICAgIGlmICghc3ltYm9scyB8fCAhc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCB9ID0gY29tcG9uZW50O1xuICAgICAgICBjb25zdCB3b3JkV3JhcCA9IFRleHQuaXNXb3JkV3JhcChjb21wb25lbnQpO1xuICAgICAgICBjb25zdCBtdWx0aWxpbmUgPSBUZXh0LmlzTXVsdGlsaW5lKGNvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gW107XG4gICAgICAgIGxldCBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgIGlmIChtdWx0aWxpbmUpIHtcbiAgICAgICAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICAgICAgICAgIGlmICh3b3JkV3JhcCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB3b3JkID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2wuc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmNvbmNhdChsaW5lLCB3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5lbXB0eSh3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZCh3b3JkLCBzeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5lLndpZHRoICsgd29yZC53aWR0aCA+IHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoL1xccy8udGVzdChzeW1ib2wuc3ltYm9sKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5jb25jYXQobGluZSwgd29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmVtcHR5KHdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5jb25jYXQobGluZSwgd29yZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sLnN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpbmUud2lkdGggKyBzeW1ib2wuYWR2YW5jZSA+IHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKGxpbmUsIHN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQobGluZSwgc3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sLnN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQobGluZSwgc3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbaV07XG4gICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKGxpbmUsIHN5bWJvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmUuc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgICAgICBUZXh0TGluZS5jb3JyZWN0V2lkdGgobGluZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFsaW5lLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBsaW5lLmhlaWdodCA9IGRlZmF1bHRUZXh0Rm9ybWF0LnNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGluZSA9IGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgVGV4dExpbmUuY29ycmVjdEhlaWdodChsaW5lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldExpbmVzID0gZ2V0TGluZXM7XG4gICAgZnVuY3Rpb24gZ2V0TWV0cmljcyhjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBnZXRMaW5lcyhjb21wb25lbnQpO1xuICAgICAgICBpZiAoIWxpbmVzIHx8ICFsaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWV0cmljcyA9IHtcbiAgICAgICAgICAgIGxpbmVzLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgIG1ldHJpY3Mud2lkdGggPSBNYXRoLm1heChtZXRyaWNzLndpZHRoLCBsaW5lLndpZHRoKTtcbiAgICAgICAgICAgIG1ldHJpY3MuaGVpZ2h0ICs9IGxpbmUuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXRyaWNzO1xuICAgIH1cbiAgICBUZXh0TWV0cmljcy5nZXRNZXRyaWNzID0gZ2V0TWV0cmljcztcbiAgICBmdW5jdGlvbiBnZXRTaW1wbGVNZXRyaWNzKGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCB7IHRleHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBUZXh0Rm9ybWF0LmNvbWJpbmUoY29tcG9uZW50LmZvcm1hdCwgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCwgZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBjb25zdCB7IHNpemUsIGxldHRlclNwYWNpbmcsIGxlYWRpbmcgfSA9IGRlZmF1bHRUZXh0Rm9ybWF0O1xuICAgICAgICBjb25zdCBmb250ID0gRm9udC5nZXRGb250KGRlZmF1bHRUZXh0Rm9ybWF0LmZvbnQpO1xuICAgICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gc2l6ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2wgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgaWYgKHN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgKz0gc2l6ZSArIGxlYWRpbmc7XG4gICAgICAgICAgICAgICAgd2lkdGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IHRleHRbaSArIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2UoZm9udCwgc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIGxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gYWR2YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldFNpbXBsZU1ldHJpY3MgPSBnZXRTaW1wbGVNZXRyaWNzO1xufSkoVGV4dE1ldHJpY3MgfHwgKFRleHRNZXRyaWNzID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvZm9ybWF0JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9mb250JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9tZXRyaWNzJztcbmV4cG9ydCAqIGZyb20gJy4vY2FudmFzL3RleHQnO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgVGV4dEZvcm1hdCB9IGZyb20gJy4vZGF0YS9mb3JtYXQnO1xuaW1wb3J0IHsgVGV4dE1ldHJpY3MgfSBmcm9tICcuL2RhdGEvbWV0cmljcyc7XG5leHBvcnQgY29uc3QgVEVYVCA9ICd0ZXh0JztcbmV4cG9ydCB2YXIgVGV4dDtcbihmdW5jdGlvbiAoVGV4dCkge1xuICAgIGZ1bmN0aW9uIGdldFRleHQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0ZXh0KSkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYmxvY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBibG9jay50ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBUZXh0LmdldFRleHQgPSBnZXRUZXh0O1xuICAgIGZ1bmN0aW9uIGlzQXV0b1NpemUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiAhY29tcG9uZW50LndpZHRoICYmICFjb21wb25lbnQuaGVpZ2h0O1xuICAgIH1cbiAgICBUZXh0LmlzQXV0b1NpemUgPSBpc0F1dG9TaXplO1xuICAgIGZ1bmN0aW9uIGlzU2ltcGxlKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGNvbXBvbmVudC50ZXh0ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgJiYgaXNBdXRvU2l6ZShjb21wb25lbnQpXG4gICAgICAgICAgICAmJiBUZXh0Rm9ybWF0LmdldEFsaWduVmFsdWUoY29tcG9uZW50LmZvcm1hdCkgPT09IDA7XG4gICAgfVxuICAgIFRleHQuaXNTaW1wbGUgPSBpc1NpbXBsZTtcbiAgICBmdW5jdGlvbiBpc1dvcmRXcmFwKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LndvcmRXcmFwID8/IHRydWU7XG4gICAgfVxuICAgIFRleHQuaXNXb3JkV3JhcCA9IGlzV29yZFdyYXA7XG4gICAgZnVuY3Rpb24gaXNNdWx0aWxpbmUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQubXVsdGlsaW5lID8/IHRydWU7XG4gICAgfVxuICAgIFRleHQuaXNNdWx0aWxpbmUgPSBpc011bHRpbGluZTtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoY29tcG9uZW50LCBib3VuZHMpIHtcbiAgICAgICAgbGV0IG1ldHJpY3M7XG4gICAgICAgIGlmIChUZXh0LmlzU2ltcGxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIG1ldHJpY3MgPSBUZXh0TWV0cmljcy5nZXRTaW1wbGVNZXRyaWNzKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtZXRyaWNzID0gVGV4dE1ldHJpY3MuZ2V0TWV0cmljcyhjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWV0cmljcykge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHsgd2lkdGgsIGhlaWdodCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXdpZHRoKSB7XG4gICAgICAgICAgICB3aWR0aCA9IG1ldHJpY3Mud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoZWlnaHQpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IG1ldHJpY3MuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGNvbXBvbmVudCwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShjb21wb25lbnQsIGhlaWdodCk7XG4gICAgICAgIGJvdW5kcy54ID0geDtcbiAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgYm91bmRzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgVGV4dC5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShUZXh0IHx8IChUZXh0ID0ge30pKTtcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBUZXh0RXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChUZXh0RXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdCh0ZXh0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBsb2NhbCB9ID0gZW5naW5lLnBvaW50ZXJzO1xuICAgICAgICBUZXh0LmNhbGN1bGF0ZUJvdW5kcyh0ZXh0LCBib3VuZHMpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKGJvdW5kcywgbG9jYWwpO1xuICAgIH1cbiAgICBUZXh0RXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KFRFWFQsIGhpdFRlc3QpO1xuICAgIH1cbiAgICBUZXh0RXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoVGV4dEV4dGVuc2lvbiB8fCAoVGV4dEV4dGVuc2lvbiA9IHt9KSk7XG4iLCJleHBvcnQgY29uc3QgTElORUFSID0gJ2xpbmVhcic7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDID0gJ3F1YWRyYXRpYyc7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDX0lOID0gJ3F1YWRyYXRpY2luJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUNfT1VUID0gJ3F1YWRyYXRpY291dCc7XG5leHBvcnQgY29uc3QgQ1VCSUMgPSAnY3ViaWMnO1xuZXhwb3J0IGNvbnN0IENVQklDX0lOID0gJ2N1YmljaW4nO1xuZXhwb3J0IGNvbnN0IENVQklDX09VVCA9ICdjdWJpY291dCc7XG5leHBvcnQgY29uc3QgUVVBUlRJQyA9ICdxdWFydGljJztcbmV4cG9ydCBjb25zdCBRVUFSVElDX0lOID0gJ3F1YXJ0aWNpbic7XG5leHBvcnQgY29uc3QgUVVBUlRJQ19PVVQgPSAncXVhcnRpY291dCc7XG5leHBvcnQgY29uc3QgUVVJTlRJQyA9ICdxdWludGljJztcbmV4cG9ydCBjb25zdCBRVUlOVElDX0lOID0gJ3F1aW50aWNpbic7XG5leHBvcnQgY29uc3QgUVVJTlRJQ19PVVQgPSAncXVpbnRpY291dCc7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTCA9ICdxdWludGljJztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMX0lOID0gJ3F1aW50aWNpbic7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTF9PVVQgPSAncXVpbnRpY291dCc7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUwgPSAnZXhwb25lbnRpYWwnO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMX0lOID0gJ2V4cG9uZW50aWFsaW4nO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMX09VVCA9ICdleHBvbmVudGlhbG91dCc7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVIgPSAnY2lyY3VsYXInO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSX0lOID0gJ2NpcmN1bGFyaW4nO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSX09VVCA9ICdjaXJjdWxhcm91dCc7XG5leHBvcnQgY29uc3QgRUxBU1RJQyA9ICdlbGFzdGljJztcbmV4cG9ydCBjb25zdCBFTEFTVElDX0lOID0gJ2VsYXN0aWNpbic7XG5leHBvcnQgY29uc3QgRUxBU1RJQ19PVVQgPSAnZWxhc3RpY291dCc7XG5leHBvcnQgY29uc3QgQkFDSyA9ICdiYWNrJztcbmV4cG9ydCBjb25zdCBCQUNLX0lOID0gJ2JhY2tpbic7XG5leHBvcnQgY29uc3QgQkFDS19PVVQgPSAnYmFja291dCc7XG5leHBvcnQgY29uc3QgQk9VTkNFID0gJ2JvdW5jZSc7XG5leHBvcnQgY29uc3QgQk9VTkNFX0lOID0gJ2JvdW5jZWluJztcbmV4cG9ydCBjb25zdCBCT1VOQ0VfT1VUID0gJ2JvdW5jZW91dCc7XG5leHBvcnQgY29uc3QgZWFzaW5nID0ge1xuICAgIFtMSU5FQVJdOiAodmFsdWUpID0+IHZhbHVlLFxuICAgIFtRVUFEUkFUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMC41ICogKC0tdmFsdWUgKiAodmFsdWUgLSAyKSAtIDEpO1xuICAgIH0sXG4gICAgW1FVQURSQVRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUFEUkFUSUNfT1VUXTogKHZhbHVlKSA9PiAodmFsdWUgKiAoMiAtIHZhbHVlKSksXG4gICAgW0NVQklDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSArIDIpO1xuICAgIH0sXG4gICAgW0NVQklDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbQ1VCSUNfT1VUXTogKHZhbHVlKSA9PiAoLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAxKSxcbiAgICBbUVVBUlRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAtIDIpO1xuICAgIH0sXG4gICAgW1FVQVJUSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVQVJUSUNfT1VUXTogKHZhbHVlKSA9PiAoMSAtIC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUlOVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMik7XG4gICAgfSxcbiAgICBbUVVJTlRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUlOVElDX09VVF06ICh2YWx1ZSkgPT4gKC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDEpLFxuICAgIFtTSU5VU09JREFMXTogKHZhbHVlKSA9PiAoMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogdmFsdWUpKSksXG4gICAgW1NJTlVTT0lEQUxfSU5dOiAodmFsdWUpID0+ICgxIC0gTWF0aC5jb3MoKHZhbHVlICogTWF0aC5QSSkgLyAyKSksXG4gICAgW1NJTlVTT0lEQUxfT1VUXTogKHZhbHVlKSA9PiAoTWF0aC5zaW4oKHZhbHVlICogTWF0aC5QSSkgLyAyKSksXG4gICAgW0VYUE9ORU5USUFMXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDEwMjQsIHZhbHVlIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogKHZhbHVlIC0gMSkpICsgMik7XG4gICAgfSxcbiAgICBbRVhQT05FTlRJQUxfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gMCA/IDAgOiBNYXRoLnBvdygxMDI0LCB2YWx1ZSAtIDEpKSxcbiAgICBbRVhQT05FTlRJQUxfT1VUXTogKHZhbHVlKSA9PiAodmFsdWUgPT09IDEgPyAxIDogMSAtIE1hdGgucG93KDIsIC0xMCAqIHZhbHVlKSksXG4gICAgW0NJUkNVTEFSXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHZhbHVlICogdmFsdWUpIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh2YWx1ZSAtPSAyKSAqIHZhbHVlKSArIDEpO1xuICAgIH0sXG4gICAgW0NJUkNVTEFSX0lOXTogKHZhbHVlKSA9PiAoMSAtIE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkpLFxuICAgIFtDSVJDVUxBUl9PVVRdOiAodmFsdWUpID0+IE1hdGguc3FydCgxIC0gLS12YWx1ZSAqIHZhbHVlKSxcbiAgICBbRUxBU1RJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgKj0gMjtcbiAgICAgICAgaWYgKHZhbHVlIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiBNYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDIsIC0xMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuICAgIH0sXG4gICAgW0VMQVNUSUNfSU5dOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuICAgIH0sXG4gICAgW0VMQVNUSUNfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5wb3coMiwgLTEwICogdmFsdWUpICogTWF0aC5zaW4oKHZhbHVlIC0gMC4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG4gICAgfSxcbiAgICBbQkFDS106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1OCAqIDEuNTI1O1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqICh2YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSAtIHMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSArIHMpICsgMik7XG4gICAgfSxcbiAgICBbQkFDS19JTl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICAgICAgcmV0dXJuIHZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlIC0gcyk7XG4gICAgfSxcbiAgICBbQkFDS19PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTg7XG4gICAgICAgIHJldHVybiAtLXZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlICsgcykgKyAxO1xuICAgIH0sXG4gICAgW0JPVU5DRV06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPCAwLjUpIHtcbiAgICAgICAgICAgIHJldHVybiBlYXNpbmdbQk9VTkNFX0lOXSh2YWx1ZSAqIDIpICogMC41O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlYXNpbmdbQk9VTkNFX09VVF0odmFsdWUgKiAyIC0gMSkgKiAwLjUgKyAwLjU7XG4gICAgfSxcbiAgICBbQk9VTkNFX0lOXTogKHZhbHVlKSA9PiAoMSAtIGVhc2luZ1tCT1VOQ0VfT1VUXSgxIC0gdmFsdWUpKSxcbiAgICBbQk9VTkNFX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPCAxIC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgMiAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMS41IC8gMi43NSkgKiB2YWx1ZSArIDAuNzU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgMi41IC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAyLjI1IC8gMi43NSkgKiB2YWx1ZSArIDAuOTM3NTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDIuNjI1IC8gMi43NSkgKiB2YWx1ZSArIDAuOTg0Mzc1O1xuICAgIH0sXG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi90d2Vlbic7XG5leHBvcnQgKiBmcm9tICcuL2Vhc2luZyc7XG4iLCJpbXBvcnQgeyBlYXNpbmcsIExJTkVBUiB9IGZyb20gJy4vZWFzaW5nJztcbmV4cG9ydCBjb25zdCBUV0VFTiA9ICd0d2Vlbic7XG5leHBvcnQgdmFyIFR3ZWVuRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChUd2VlbkV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHVwZGF0ZShjb21wb25lbnQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHR3ZWVuIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IHsgcGhhc2VzIH0gPSB0d2VlbjtcbiAgICAgICAgaWYgKCFwaGFzZXM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ0FuaW1hdGlvbiBwYXJ0cyBub3QgZm91bmQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHdlZW4udGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0d2Vlbi50aW1lICs9IGVuZ2luZS51cGRhdGVyLnRpbWU7XG4gICAgICAgIGNvbnN0IHsgdGltZSB9ID0gdHdlZW47XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBwaGFzZXMuZm9yRWFjaCgocGhhc2UpID0+IHtcbiAgICAgICAgICAgIGlmICghcGhhc2UudGltZSkge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdBbmltYXRpb24gdGltZSBub3Qgc2V0Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBoYXNlLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gcGhhc2Uub2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZWFzaW5nTmFtZSA9IHBoYXNlPy5lYXNpbmc/LnRvTG93ZXJDYXNlKCkgPz8gTElORUFSO1xuICAgICAgICAgICAgY29uc3QgZWFzaW5nTWV0aG9kID0gZWFzaW5nW2Vhc2luZ05hbWVdO1xuICAgICAgICAgICAgaWYgKCFlYXNpbmdNZXRob2QpIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZyhgVW5rbm93biBlYXNpbmcgdHlwZTogJHtlYXNpbmd9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAodGltZSAtIG9mZnNldCkgLyBwaGFzZS50aW1lO1xuICAgICAgICAgICAgb2Zmc2V0ICs9IHBoYXNlLnRpbWU7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCAwIHx8IHZhbHVlID4gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVhc2luZ1ZhbHVlID0gZWFzaW5nTWV0aG9kKHZhbHVlKTtcbiAgICAgICAgICAgIGlmICghcGhhc2UudG8pIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnQW5pbWF0aW9uIFwidG9cIiBzdGF0ZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBoYXNlLmZyb20pIHtcbiAgICAgICAgICAgICAgICBwaGFzZS5mcm9tID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHRvLCBmcm9tIH0gPSBwaGFzZTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gY29tcG9uZW50O1xuICAgICAgICAgICAgT2JqZWN0LmtleXModG8pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmcm9tW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tW2tleV0gPSBzdGF0ZVtrZXldID8/IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGZyb21WYWx1ZSA9IGZyb21ba2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b1ZhbHVlID0gdG9ba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZyb21WYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHRvVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlVmFsdWUgPSBmcm9tVmFsdWUgKyBlYXNpbmdWYWx1ZSAqICh0b1ZhbHVlIC0gZnJvbVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IHN0YXRlVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodHdlZW4ubG9vcCAmJiB0d2Vlbi50aW1lID4gb2Zmc2V0KSB7XG4gICAgICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUd2VlbkV4dGVuc2lvbi51cGRhdGUgPSB1cGRhdGU7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucHJvcGVydGllcy5zZXQoVFdFRU4sIHVwZGF0ZSk7XG4gICAgfVxuICAgIFR3ZWVuRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoVHdlZW5FeHRlbnNpb24gfHwgKFR3ZWVuRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IEFCSUxJVFlfV09MRiB9IGZyb20gJy4vYXNzZXRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjdXJzaXZlKCkge1xuXHRjb25zdCBjb250YWluZXIgPSB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0eDogMzAsXG5cdFx0XHR5OiAzMCxcblx0XHRcdHNjYWxlWDogMC45LFxuXHRcdFx0c2NhbGVZOiAwLjksXG5cdFx0XHRyb3RhdGlvbjogMC4yLFxuXHRcdFx0YWxwaGE6IDAuOSxcblx0XHRcdGNoaWxkcmVuOiBbe1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEFCSUxJVFlfV09MRixcblx0XHRcdFx0c2NhbGU6IDAuMyxcblx0XHRcdH1dLFxuXHRcdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHRcdHRoaXMucm90YXRpb24gKz0gdGltZSAqIDAuMDU7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cblx0Y29udGFpbmVyLmNoaWxkcmVuLmNoaWxkcmVuLnB1c2goY29udGFpbmVyIGFzIG5ldmVyKTtcblxuXHRyZXR1cm4gY29udGFpbmVyO1xufVxuIiwiY29uc3QgQVNTRVRTID0gJ2Fzc2V0cy8nO1xuXG5leHBvcnQgY29uc3QgQU5JTUFMSVNUID0gJ2lkOmFuaW1hbGlzdCc7XG5leHBvcnQgY29uc3QgQVJDSEVSID0gJ2lkOmFyY2hlcic7XG5cbmV4cG9ydCBjb25zdCBBTklNQUxJU1RfSU1BR0UgPSBgJHtBU1NFVFN9QW5pbWFsaXN0Rm94MV9pbWFnZS5wbmdgO1xuZXhwb3J0IGNvbnN0IEFSQ0hFUl9JTUFHRSA9IGAke0FTU0VUU31BcmNoZXIyX2h1bnRlcl9pbWFnZS5wbmdgO1xuXG5leHBvcnQgY29uc3QgQUJJTElUWV9GT1ggPSBgJHtBU1NFVFN9QW5pbWFsaXN0QWJpbGl0eV9Gb3gucG5nYDtcbmV4cG9ydCBjb25zdCBBQklMSVRZX1dPTEYgPSBgJHtBU1NFVFN9QW5pbWFsaXN0QWJpbGl0eV9Xb2xmLnBuZ2A7XG5cbmV4cG9ydCBjb25zdCBCQUNLR1JPVU5EID0gYCR7QVNTRVRTfWp1bmdsZV9iYWNrZ3JvdW5kLmpwZ2A7XG5cbmV4cG9ydCBjb25zdCBURVNUX0NBTlZBUyA9ICd0ZXN0LmNhbnZhcyc7XG5cbmV4cG9ydCBjb25zdCBTQ0VORSA9IGAke0FTU0VUU30vc2NlbmUuanNvbmA7XG4iLCJpbXBvcnQgeyBDYW52YXNFbmdpbmUgfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IEVuZ2luZU1vZHVsZSB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQ2FudmFzVGV4dEV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3RleHQnO1xuaW1wb3J0IHsgQ3VzdG9tSW1hZ2VFeHRlbnNpb24gfSBmcm9tICcuL2ltYWdlJztcbmltcG9ydCBDdXN0b21QbGF0Zm9ybSBmcm9tICcuL3BsYXRmb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tRW5naW5lIGV4dGVuZHMgQ2FudmFzRW5naW5lIHtcblx0Y29uc3RydWN0b3IobW9kdWxlOiBFbmdpbmVNb2R1bGUgPSB7fSkge1xuXHRcdG1vZHVsZS5QbGF0Zm9ybSA9IG1vZHVsZS5QbGF0Zm9ybSA/PyBDdXN0b21QbGF0Zm9ybTtcblxuXHRcdHN1cGVyKG1vZHVsZSk7XG5cblx0XHRDYW52YXNUZXh0RXh0ZW5zaW9uLmluaXQodGhpcyk7XG5cdFx0Q3VzdG9tSW1hZ2VFeHRlbnNpb24uaW5pdCh0aGlzKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzRW5naW5lLCBDYW52YXNQbGF0Zm9ybSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSwgSW1hZ2UgfSBmcm9tICdAamVuZy9pbWFnZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcblxuZXhwb3J0IG5hbWVzcGFjZSBDdXN0b21JbWFnZUV4dGVuc2lvbiB7XG5cdGV4cG9ydCBmdW5jdGlvbiByZW5kZXIoaW1hZ2U6IEltYWdlLCBlbmdpbmU6IENhbnZhc0VuZ2luZSk6IHZvaWQge1xuXHRcdGlmICghaW1hZ2Uuc3JjKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgeyBtYXRyaXgsIGNvbG9yVHJhbnNmb3JtIH0gPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuXG5cdFx0aWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChpbWFnZS5zcmMpIGFzIEltYWdlUmVzb3VyY2UgfCBudWxsO1xuXG5cdFx0aWYgKCFyZXNvdXJjZT8ubG9hZGVkIHx8ICFyZXNvdXJjZT8uaW1hZ2UpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBjb250ZXh0MmQgPSAoZW5naW5lLnBsYXRmb3JtIGFzIENhbnZhc1BsYXRmb3JtKS5nZXRDb250ZXh0KCk7XG5cblx0XHRjb250ZXh0MmQuc2V0VHJhbnNmb3JtKFxuXHRcdFx0bWF0cml4LmEsXG5cdFx0XHRtYXRyaXguYixcblx0XHRcdG1hdHJpeC5jLFxuXHRcdFx0bWF0cml4LmQsXG5cdFx0XHRtYXRyaXgudHgsXG5cdFx0XHRtYXRyaXgudHksXG5cdFx0KTtcblxuXHRcdGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG5cdFx0Y29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcblx0XHRjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcblxuXHRcdGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG5cdFx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuXHRcdGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICdsaWdodGdyYXknO1xuXHRcdGNvbnRleHQyZC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuXHR9XG5cblx0ZXhwb3J0IGZ1bmN0aW9uIGluaXQoZW5naW5lOiBDYW52YXNFbmdpbmUpIHtcblx0XHRJbWFnZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5cdFx0ZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChJTUFHRSwgcmVuZGVyKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzUGxhdGZvcm0gfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tUGxhdGZvcm0gZXh0ZW5kcyBDYW52YXNQbGF0Zm9ybSB7XG5cdGNsZWFyKCkge1xuXHRcdGNvbnN0IGNvbnRleHQyZCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnYmxhY2snO1xuXHRcdGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcblx0XHRjb250ZXh0MmQuZmlsbFJlY3QoMCwgMCwgY29udGV4dDJkLmNhbnZhcy53aWR0aCwgY29udGV4dDJkLmNhbnZhcy5oZWlnaHQpO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcblx0fVxufVxuIiwiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tUmVzb3VyY2VNYW5hZ2VyIHtcblx0cmVhZG9ubHkgYWxpYXNlcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cdHJlYWRvbmx5IHJlc291cmNlcyA9IG5ldyBNYXA8c3RyaW5nLCBJbWFnZVJlc291cmNlPigpO1xuXG5cdHJlc29sdmUgPSAoYXNzZXQ6IHN0cmluZywgZW5naW5lOiBFbmdpbmUpOiBJbWFnZVJlc291cmNlIHwgbnVsbCA9PiB7XG5cdFx0aWYgKGFzc2V0LmluZGV4T2YoJ2lkOicpID09PSAwKSB7XG5cdFx0XHRjb25zdCBpZCA9IGFzc2V0LnNsaWNlKDMpO1xuXHRcdFx0bGV0IHJlc291cmNlID0gdGhpcy5yZXNvdXJjZXMuZ2V0KGlkKSBhcyBJbWFnZVJlc291cmNlO1xuXHRcdFx0aWYgKCFyZXNvdXJjZSkge1xuXHRcdFx0XHRjb25zdCB1cmwgPSB0aGlzLmFsaWFzZXMuZ2V0KGlkKTtcblx0XHRcdFx0aWYgKHVybCkge1xuXHRcdFx0XHRcdHJlc291cmNlID0gSW1hZ2VSZXNvdXJjZS5yZXNvbHZlKHVybCwgZW5naW5lKSBhcyBJbWFnZVJlc291cmNlO1xuXHRcdFx0XHRcdHRoaXMucmVzb3VyY2VzLnNldChpZCwgcmVzb3VyY2UpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBSZXNvdXJjZSB3aXRoIGlkOiAke2Fzc2V0fSBub3QgZm91bmRgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc291cmNlO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGluaXQoZW5naW5lOiBFbmdpbmUpIHtcblx0XHRlbmdpbmUucmVzb3VyY2VzLnJlc29sdmVycy5hZGQodGhpcy5yZXNvbHZlKTtcblx0fVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBTdGF0aXN0aWNzIHtcblx0Z2V0UmVuZGVyVGltZSgpOiBudW1iZXI7XG5cdGdldFVwZGF0ZVRpbWUoKTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnBzKHN0YXRpc3RpY3M6IFN0YXRpc3RpY3MpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0dGV4dDogJ2ZwcycsXG5cdFx0ZnJhbWVzOiAwLFxuXHRcdGZyYW1lVGltZTogMCxcblx0XHR1cGRhdGVUaW1lOiAwLFxuXHRcdHJlbmRlclRpbWU6IDAsXG5cdFx0Zm9ybWF0OiB7XG5cdFx0XHRzaXplOiAyMCxcblx0XHRcdGNvbG9yOiAweGZmZmZmZixcblx0XHR9LFxuXHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0dGhpcy5mcmFtZVRpbWUgKz0gdGltZTtcblx0XHRcdHRoaXMudXBkYXRlVGltZSArPSBzdGF0aXN0aWNzLmdldFVwZGF0ZVRpbWUoKTtcblx0XHRcdHRoaXMucmVuZGVyVGltZSArPSBzdGF0aXN0aWNzLmdldFJlbmRlclRpbWUoKTtcblx0XHRcdHRoaXMuZnJhbWVzKys7XG5cdFx0XHRpZiAodGhpcy5mcmFtZVRpbWUgPj0gMSkge1xuXHRcdFx0XHRjb25zdCBmcmFtZVRpbWUgPSBNYXRoLmNlaWwoMTAwMCAqIHRoaXMuZnJhbWVUaW1lIC8gdGhpcy5mcmFtZXMpO1xuXHRcdFx0XHRjb25zdCB1cGRhdGVUaW1lID0gKHRoaXMudXBkYXRlVGltZSAvIHRoaXMuZnJhbWVzKS50b0ZpeGVkKDIpO1xuXHRcdFx0XHRjb25zdCByZW5kZXJUaW1lID0gKHRoaXMucmVuZGVyVGltZSAvIHRoaXMuZnJhbWVzKS50b0ZpeGVkKDIpO1xuXHRcdFx0XHR0aGlzLnRleHQgPSBgZnBzOiAke3RoaXMuZnJhbWVzfSwgJHtmcmFtZVRpbWV9IG1zXFxudXBkYXRlOiAke3VwZGF0ZVRpbWV9IG1zXFxucmVuZGVyOiAke3JlbmRlclRpbWV9IG1zYDtcblx0XHRcdFx0dGhpcy5mcmFtZVRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZVRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLnJlbmRlclRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLmZyYW1lcyA9IDA7XG5cdFx0XHR9XG5cdFx0fSxcblx0fTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCB7IExvYWRlciB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHtcblx0QUJJTElUWV9GT1gsIEFCSUxJVFlfV09MRiwgQU5JTUFMSVNULCBBUkNIRVIsIEJBQ0tHUk9VTkQsIFNDRU5FLFxufSBmcm9tICcuL2Fzc2V0cyc7XG5pbXBvcnQgYXJ0aWZhY3QgZnJvbSAnLi9hcnRpZmFjdCc7XG5pbXBvcnQgeyBmcHMsIFN0YXRpc3RpY3MgfSBmcm9tICcuL2Zwcyc7XG5pbXBvcnQgeyB1bml0LCBVbml0UHJvcGVydGllcyB9IGZyb20gJy4vdW5pdCc7XG5pbXBvcnQgeyBwcmVsb2FkZXIsIFByZWxvYWRlckluZm8gfSBmcm9tICcuL3ByZWxvYWRlcic7XG5cbmludGVyZmFjZSBNYWluIHtcblx0c3RhcnQoKTogdm9pZDtcblx0W2tleTogc3RyaW5nXTogYW55O1xufVxuXG5pbnRlcmZhY2UgTWFpblByb3BlcnRpZXMgZXh0ZW5kcyBTdGF0aXN0aWNzIHtcblx0Z2V0Q2FudmFzV2lkdGgoKTogbnVtYmVyO1xuXHRnZXRDYW52YXNIZWlnaHQoKTogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKHBhcmFtZXRlcnM6IE1haW5Qcm9wZXJ0aWVzKTogTWFpbiB7XG5cdGZ1bmN0aW9uIG9uVW5pdENsaWNrKGRhdGE6IFVuaXRQcm9wZXJ0aWVzKSB7XG5cdFx0ZGF0YS5oZWFsdGggPSBNYXRoLnJhbmRvbSgpO1xuXHRcdGNvbnNvbGUubG9nKCdvblVuaXRDbGljaycsIGRhdGEubmFtZSk7XG5cdH1cblxuXHRjb25zdCBjb250ZW50ID0ge1xuXHRcdHR5cGU6ICdsb2FkZXInLFxuXHRcdHZpc2libGU6IGZhbHNlLFxuXHRcdGVuYWJsZWQ6IGZhbHNlLFxuXHRcdG9uTG9hZGVkKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2JhY2tncm91bmQgbG9hZGVkJyk7XG5cdFx0XHR0aGlzLnZpc2libGUgPSB0cnVlO1xuXHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQkFDS0dST1VORCxcblx0XHRcdFx0c2NhbGVYOiAxLFxuXHRcdFx0XHRzY2FsZVk6IDEsXG5cdFx0XHR9LFxuXHRcdFx0ZmlndXJlOiB7XG5cdFx0XHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHR0eXBlOiAncmVjdGFuZ2xlJyxcblx0XHRcdFx0XHR4OiAyMCxcblx0XHRcdFx0XHR5OiAyMCxcblx0XHRcdFx0XHR3aWR0aDogMTAwLFxuXHRcdFx0XHRcdGhlaWdodDogNTAsXG5cdFx0XHRcdFx0ZmlsbDogMHhmZjAwZmYsXG5cdFx0XHRcdFx0c3Ryb2tlOiAweDAwMDBmZixcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRzaGFwZXM6IHtcblx0XHRcdFx0dHlwZTogJ3NoYXBlJyxcblx0XHRcdFx0ZGF0YTogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdlbGxpcHNlJyxcblx0XHRcdFx0XHRcdHg6IDEwMCxcblx0XHRcdFx0XHRcdHk6IDEwMCxcblx0XHRcdFx0XHRcdHJhZGl1czogNTAsXG5cdFx0XHRcdFx0XHRmaWxsOiB7IHR5cGU6ICdzb2xpZCcsIGNvbG9yOiAweGZmZmYwMCwgYWxwaGE6IDEgfSxcblx0XHRcdFx0XHRcdHN0cm9rZTogeyBmaWxsOiAweDAwMDBmZiwgdGhpY2tuZXNzOiAxMCB9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ3BhdGgnLFxuXHRcdFx0XHRcdFx0ZGF0YTogJ00gMTEwLCAxMTAgSCAxOTAgViAxOTAgSCAxMTAgWicsXG5cdFx0XHRcdFx0XHRmaWxsOiAweDk5MDAwMCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdwYXRoJyxcblx0XHRcdFx0XHRcdGRhdGE6IFtcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbW92ZVRvJywgeDogMCwgeTogMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAxMDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMTAwLCB5OiAxMDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMCwgeTogMTAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRmaWxsOiB7IHR5cGU6ICdzb2xpZCcsIGNvbG9yOiAweDk5OTk5OSwgYWxwaGE6IDAuNiB9LFxuXHRcdFx0XHRcdFx0c3Ryb2tlOiAweDAwMDAwMCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHVuaXRzOiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdHVuaXQoe1xuXHRcdFx0XHRcdFx0bmFtZTogJ0FyY2hlcicsIGhlYWx0aDogMSwgaW1hZ2U6IEFSQ0hFUiwgb25DbGljazogb25Vbml0Q2xpY2ssXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0dW5pdCh7XG5cdFx0XHRcdFx0XHRuYW1lOiAnQW5pbWFsaXN0JywgaGVhbHRoOiAxLCBpbWFnZTogQU5JTUFMSVNULCBvbkNsaWNrOiBvblVuaXRDbGljayxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHRhcnRpZmFjdDoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0eDogMzAwLFxuXHRcdFx0XHR5OiAzNTAsXG5cdFx0XHRcdGNoaWxkcmVuOiBhcnRpZmFjdCgpLFxuXHRcdFx0fSxcblx0XHRcdG1hcDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHR5OiA0NTAsXG5cdFx0XHRcdHNjYWxlWDogMC4yLFxuXHRcdFx0XHRzY2FsZVk6IDAuMixcblx0XHRcdFx0YWxwaGE6IDAuNSxcblx0XHRcdFx0c3JjOiAndGVzdC5jYW52YXMnLFxuXHRcdFx0XHRvblBvaW50ZXJPdmVyKCkge1xuXHRcdFx0XHRcdHRoaXMuYWxwaGEgPSAxO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblBvaW50ZXJPdXQoKSB7XG5cdFx0XHRcdFx0dGhpcy5hbHBoYSA9IDAuNTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRhYmlsaXR5Rm94OiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQUJJTElUWV9GT1gsXG5cdFx0XHRcdHg6IDQ1MCxcblx0XHRcdFx0eTogNTAwLFxuXHRcdFx0XHRzY2FsZTogMC41LFxuXHRcdFx0XHR0aW50OiB7XG5cdFx0XHRcdFx0Y29sb3I6IDB4MDBmZjAwLFxuXHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHR9IGFzIGFueSxcblx0XHRcdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMudGludCkge1xuXHRcdFx0XHRcdFx0dGhpcy50aW50LnZhbHVlICs9IHRpbWU7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy50aW50LnZhbHVlID49IDEpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy50aW50LnZhbHVlID0gMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uUG9pbnRlckRvd24oZTogYW55KSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMudGludCkge1xuXHRcdFx0XHRcdFx0dGhpcy50aW50ID0gbnVsbDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy50aW50ID0ge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogMHgwMGZmMDAsXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2ZveCcsIGUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGFiaWxpdHlXb2xmOiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHR4OiAzNTAsXG5cdFx0XHRcdHk6IDQwMCxcblx0XHRcdFx0Y2hpbGRyZW46IHtcblx0XHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRcdHNyYzogQUJJTElUWV9XT0xGLFxuXHRcdFx0XHRcdHNjYWxlOiAwLjUsXG5cdFx0XHRcdFx0YWxwaGE6IDEsXG5cdFx0XHRcdFx0dHdlZW46IHtcblx0XHRcdFx0XHRcdGxvb3A6IHRydWUsXG5cdFx0XHRcdFx0XHRwaGFzZXM6IFtcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeDogMjAwIH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6ICdjdWJpY291dCcsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB5OiAyMDAsIGFscGhhOiAwLjUgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ3F1YWRyYXRpY0luJyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHg6IDAsIGFscGhhOiAxIH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6ICdxdWFkcmF0aWNPdXQnLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeTogMCB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGZwczogZnBzKHBhcmFtZXRlcnMpLFxuXHRcdH0sXG5cdH07XG5cblx0Y29uc3QgcHJlbG9hZGVySW5mbzogUHJlbG9hZGVySW5mbyA9IHtcblx0XHRnZXRXaWR0aDogcGFyYW1ldGVycy5nZXRDYW52YXNXaWR0aCxcblx0XHRnZXRIZWlnaHQ6IHBhcmFtZXRlcnMuZ2V0Q2FudmFzSGVpZ2h0LFxuXHRcdGdldFByb2dyZXNzKCkge1xuXHRcdFx0cmV0dXJuIExvYWRlci5nZXRMb2FkaW5nUHJvZ3Jlc3MoY29udGVudCk7XG5cdFx0fSxcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRjb250ZW50LFxuXHRcdFx0cHJlbG9hZGVyOiBwcmVsb2FkZXIocHJlbG9hZGVySW5mbyksXG5cdFx0XHRzY2VuZToge1xuXHRcdFx0XHR0eXBlOiAnc2NlbmUnLCB4OiAzMDAsIHNyYzogU0NFTkUsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0b25VcGRhdGUoKSB7XG5cdFx0XHRjb25zdCBpc0xvYWRlZCA9ICF0aGlzLmNoaWxkcmVuLmNvbnRlbnQudmlzaWJsZTtcblx0XHRcdHRoaXMuY2hpbGRyZW4ucHJlbG9hZGVyLnZpc2libGUgPSBpc0xvYWRlZDtcblx0XHRcdHRoaXMuY2hpbGRyZW4ucHJlbG9hZGVyLmVuYWJsZWQgPSBpc0xvYWRlZDtcblx0XHR9LFxuXHRcdHN0YXJ0KCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ3N0YXJ0Jyk7XG5cdFx0fSxcblx0fTtcbn1cbiIsImltcG9ydCB7IFNoYXBlIH0gZnJvbSAnQGplbmcvc2hhcGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByZWxvYWRlckluZm8ge1xuXHRnZXRQcm9ncmVzcygpOiBudW1iZXI7XG5cdGdldFdpZHRoKCk6IG51bWJlcjtcblx0Z2V0SGVpZ2h0KCk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWRlcihpbmZvOiBQcmVsb2FkZXJJbmZvKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ3NoYXBlJyxcblx0XHRzY2FsZVg6IDEsXG5cdFx0eTogaW5mby5nZXRIZWlnaHQoKSAtIDIwLFxuXHRcdGRhdGE6IHtcblx0XHRcdHR5cGU6ICdyZWN0YW5nbGUnLFxuXHRcdFx0d2lkdGg6IDEsXG5cdFx0XHRoZWlnaHQ6IDIwLFxuXHRcdFx0ZmlsbDogMHhmZjAwMDAsXG5cdFx0fSxcblx0XHRvblVwZGF0ZSgpIHtcblx0XHRcdHRoaXMuc2NhbGVYID0gdGhpcy5zY2FsZVggPz8gMDtcblx0XHRcdHRoaXMuc2NhbGVYICs9IChpbmZvLmdldFdpZHRoKCkgKiBpbmZvLmdldFByb2dyZXNzKCkgLSB0aGlzLnNjYWxlWCkgLyAyO1xuXHRcdH0sXG5cdH0gYXMgU2hhcGU7XG59XG4iLCJjb25zdCBTUEVFRCA9IDEwMDtcblxuaW50ZXJmYWNlIFVuaXQge1xuXHRba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdFByb3BlcnRpZXMge1xuXHRuYW1lOiBzdHJpbmcsXG5cdGhlYWx0aDogbnVtYmVyLFxuXHRpbWFnZTogc3RyaW5nLFxuXHRvbkNsaWNrOiAoZGF0YTogVW5pdFByb3BlcnRpZXMpID0+IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIG9uUHJvcHNVcGRhdGUocHJvcHM6IGFueSwgY2FsbGJhY2s6ICh0aW1lOiBudW1iZXIpID0+IHZvaWQpIHtcblx0Y29uc3QgY29weSA9IHsgLi4ucHJvcHMgfTtcblx0cmV0dXJuICh0aW1lOiBudW1iZXIpID0+IHtcblx0XHQvLyBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpO1xuXHRcdGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gcHJvcHMpIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcblx0XHRcdGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdGlmIChjb3B5W2tleV0gIT09IHByb3BzW2tleV0pIHtcblx0XHRcdFx0XHRjb3B5W2tleV0gPSBwcm9wc1trZXldO1xuXHRcdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZWQpIHtcblx0XHRcdGNhbGxiYWNrKHRpbWUpO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gcnVuT25Qcm9wc1VwZGF0ZShwcm9wczogYW55LCBjb21wb25lbnQ6IGFueSkge1xuXHRjb21wb25lbnQub25VcGRhdGUgPSBvblByb3BzVXBkYXRlKHByb3BzLCBjb21wb25lbnQub25VcGRhdGUuYmluZChjb21wb25lbnQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXQocHJvcHM6IFVuaXRQcm9wZXJ0aWVzKTogVW5pdCB7XG5cdGZ1bmN0aW9uIGdldFRpdGxlKCkge1xuXHRcdHJldHVybiBgJHtwcm9wcy5uYW1lfVxcbiR7TWF0aC5yb3VuZChwcm9wcy5oZWFsdGggKiAxMDApfSVgO1xuXHR9XG5cblx0Y29uc3QgdW5pdFZpZXcgPSB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0eDogNTAgKyBNYXRoLnJhbmRvbSgpICogNDAwLFxuXHRcdHk6IDIwMCxcblx0XHRyb3RhdGlvbjogMCxcblx0XHR1cGRhdGVNb3ZlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0dGhpcy54ICs9IHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYICogdGltZSAqIFNQRUVEO1xuXHRcdFx0aWYgKHRoaXMueCA8IDUwKSB7XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYID0gMTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy54ID4gNDAwKSB7XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYID0gLTE7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMudXBkYXRlTW92ZSh0aW1lKTtcblx0XHR9LFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHR0ZXh0OiB7XG5cdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0dGV4dDogZ2V0VGl0bGUoKSxcblx0XHRcdFx0Zm9ybWF0OiB7XG5cdFx0XHRcdFx0c2l6ZTogMTUsXG5cdFx0XHRcdFx0Y29sb3I6IDB4ZmZkZGRkLFxuXHRcdFx0XHRcdGFsaWduOiAnY2VudGVyJyxcblx0XHRcdFx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0Ym9yZGVyOiAweDAwZmYwMCxcblx0XHRcdFx0eTogLTMwLFxuXHRcdFx0XHRoZWlnaHQ6IDM1LFxuXHRcdFx0XHRwaXZvdFg6IDAuNSxcblx0XHRcdFx0b25Qb2ludGVyRG93bjogKCkgPT4ge1xuXHRcdFx0XHRcdHByb3BzLm9uQ2xpY2socHJvcHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblVwZGF0ZSgpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQgPSBnZXRUaXRsZSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogcHJvcHMuaW1hZ2UsXG5cdFx0XHRcdHNjYWxlWDogTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSxcblx0XHRcdFx0cGl2b3RYOiAwLjUsXG5cdFx0XHRcdG9uUG9pbnRlckRvd246ICgpID0+IHtcblx0XHRcdFx0XHRwcm9wcy5vbkNsaWNrKHByb3BzKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblxuXHRydW5PblByb3BzVXBkYXRlKHByb3BzLCB1bml0Vmlldy5jaGlsZHJlbi50ZXh0KTtcblxuXHRyZXR1cm4gdW5pdFZpZXc7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgeyBDb21wb25lbnQsIE1vdXNlRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBUd2VlbkV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3R3ZWVuJztcbmltcG9ydCB7IENhbnZhc1RleHRFeHRlbnNpb24gfSBmcm9tICdAamVuZy90ZXh0JztcbmltcG9ydCB7IENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gfSBmcm9tICdAamVuZy9pbWFnZSc7XG5pbXBvcnQgeyBDYW52YXNTaGFwZUV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3NoYXBlJztcbmltcG9ydCB7IENhbnZhc0VuZ2luZSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBTY2VuZUV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3NjZW5lJztcbmltcG9ydCBDdXN0b21SZXNvdXJjZU1hbmFnZXIgZnJvbSAnLi9lbmdpbmUvcmVzb3VyY2VzJztcbmltcG9ydCBDdXN0b21FbmdpbmUgZnJvbSAnLi9lbmdpbmUvZW5naW5lJztcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbic7XG5pbXBvcnQge1xuXHRBTklNQUxJU1QsIEFOSU1BTElTVF9JTUFHRSwgQVJDSEVSLCBBUkNIRVJfSU1BR0UsIFRFU1RfQ0FOVkFTLFxufSBmcm9tICcuL2Fzc2V0cyc7XG5cbi8vIHBhZ2VcbmRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gJzAnO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nID0gJzAnO1xuXG4vLyBiYXNpYyBlbmdpbmVcbmNvbnN0IGVuZ2luZSA9IG5ldyBDYW52YXNFbmdpbmUoKTtcbkNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuQ2FudmFzVGV4dEV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5DYW52YXNTaGFwZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5Ud2VlbkV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5TY2VuZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5Nb3VzZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5lbmdpbmUuc2NyZWVuLmZ1bGxzY3JlZW4gPSB0cnVlO1xuZW5naW5lLnRpY2tlci5wbGF5KCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVuZ2luZS5wbGF0Zm9ybS52aWV3KTtcblxuY29uc3QgcGFyYW1ldGVycyA9IHtcblx0Z2V0VXBkYXRlVGltZSgpIHtcblx0XHRyZXR1cm4gZW5naW5lLnVwZGF0ZXIuZWxhcHNlZFRpbWU7XG5cdH0sXG5cdGdldFJlbmRlclRpbWUoKSB7XG5cdFx0cmV0dXJuIGVuZ2luZS5yZW5kZXJlci5lbGFwc2VkVGltZTtcblx0fSxcblx0Z2V0Q2FudmFzV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZW5naW5lLnNjcmVlbi5nZXRXaWR0aCgpO1xuXHR9LFxuXHRnZXRDYW52YXNIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZW5naW5lLnNjcmVlbi5nZXRIZWlnaHQoKTtcblx0fSxcbn07XG5cbi8vIGFwcGxpY2F0aW9uXG5jb25zdCBhcHAgPSBtYWluKHBhcmFtZXRlcnMpO1xuYXBwLnN0YXJ0KCk7XG5lbmdpbmUucm9vdCA9IGFwcCBhcyBhbnkgYXMgQ29tcG9uZW50O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbmNvbnNvbGUubG9nKGFwcCk7XG5cbi8vIHRlc3QgcGF1c2VcbnNldFRpbWVvdXQoKCkgPT4gZW5naW5lLnRpY2tlci5wYXVzZSgpLCA1MDAwKTtcbnNldFRpbWVvdXQoKCkgPT4gZW5naW5lLnRpY2tlci5wbGF5KCksIDEwMDAwKTtcblxuLy8gY3VzdG9tIGVuZ2luZVxuY29uc3QgY3VzdG9tRW5naW5lID0gbmV3IEN1c3RvbUVuZ2luZSgpO1xuY3VzdG9tRW5naW5lLnNjcmVlbi5mdWxsc2NyZWVuID0gZmFsc2U7XG5jdXN0b21FbmdpbmUuc2NyZWVuLmhlaWdodCA9IDYwMDtcbmN1c3RvbUVuZ2luZS51cGRhdGVyLmVuYWJsZWQgPSBmYWxzZTtcbmN1c3RvbUVuZ2luZS5yb290ID0gZW5naW5lLnJvb3Q7XG5jdXN0b21FbmdpbmUudGlja2VyLnBsYXkoKTtcbmN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbmN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3LnN0eWxlLnRvcCA9ICcwcHgnO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUubGVmdCA9ICc2MDBweCc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3KTtcblxuLy8gLy8gc2V0IGN1c3RvbSByZXNvdXJjZVxuZW5naW5lLnJlc291cmNlcy5yZXNvdXJjZXMuc2V0KFxuXHRURVNUX0NBTlZBUyxcblx0e1xuXHRcdGFzc2V0OiBURVNUX0NBTlZBUyxcblx0XHRpbWFnZTogY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcsXG5cdFx0bG9hZGVkOiB0cnVlLFxuXHR9IGFzIEltYWdlUmVzb3VyY2UsXG4pO1xuY3VzdG9tRW5naW5lLnJlc291cmNlcy5yZXNvdXJjZXMuc2V0KFxuXHRURVNUX0NBTlZBUyxcblx0e1xuXHRcdGFzc2V0OiBURVNUX0NBTlZBUyxcblx0XHRpbWFnZTogZW5naW5lLnBsYXRmb3JtLnZpZXcsXG5cdFx0bG9hZGVkOiB0cnVlLFxuXHR9IGFzIEltYWdlUmVzb3VyY2UsXG4pO1xuXG4vLyBjdXN0b20gcmVzb3VyY2UgcmVzb2x2ZXJcbmNvbnN0IHJlc291cmNlTWFuYWdlciA9IG5ldyBDdXN0b21SZXNvdXJjZU1hbmFnZXIoKTtcbnJlc291cmNlTWFuYWdlci5hbGlhc2VzLnNldChBUkNIRVIucmVwbGFjZSgnaWQ6JywgJycpLCBBUkNIRVJfSU1BR0UpO1xucmVzb3VyY2VNYW5hZ2VyLmFsaWFzZXMuc2V0KEFOSU1BTElTVC5yZXBsYWNlKCdpZDonLCAnJyksIEFOSU1BTElTVF9JTUFHRSk7XG5yZXNvdXJjZU1hbmFnZXIuaW5pdChlbmdpbmUpO1xucmVzb3VyY2VNYW5hZ2VyLmluaXQoY3VzdG9tRW5naW5lKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=