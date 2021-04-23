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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jYW52YXMtZW5naW5lL2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NhbnZhcy1lbmdpbmUvZGlzdC9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvY29tcG9uZW50cy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9jb3JlL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvcmUvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvcGl2b3QuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9leHRlbnNpb25zL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9leHRlbnNpb25zL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvdXBkYXRlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL2RlYnVnLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvcG9pbnRlcnMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3RpY2tlci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3VwZGF0ZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2lucHV0L21vdXNlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvYm91bmRzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvY29sb3ItdHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9wb2ludC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvaW1hZ2UvZGlzdC9jYW52YXMtaW1hZ2UtY29sb3IuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvY2FudmFzLWltYWdlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9pbWFnZS9kaXN0L2ltYWdlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9pbWFnZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9yZXNvdXJjZXMvZGlzdC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvcmVzb3VyY2VzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3Jlc291cmNlcy9kaXN0L3N0cmluZy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2NlbmUvZGlzdC9zY2VuZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvZWxsaXBzZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvcGF0aC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9zaGFwZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9jYW52YXMvc3RyaW5nLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9zdHlsZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9kYXRhL2RhdGEuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvZGF0YS9wYXRoLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2RhdGEvc3RyaW5nLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2dyYXBoaWNzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L3NoYXBlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvY2FudmFzL3RleHQuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC9kYXRhL2ZvbnQuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC9kYXRhL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2RhdGEvbWV0cmljcy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvdGV4dC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdHdlZW4vZGlzdC9lYXNpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3R3ZWVuL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3R3ZWVuL2Rpc3QvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2FydGlmYWN0LnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9hc3NldHMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2VuZ2luZS9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2VuZ2luZS9pbWFnZS50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvZW5naW5lL3BsYXRmb3JtLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9lbmdpbmUvcmVzb3VyY2VzLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9mcHMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL3ByZWxvYWRlci50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvdW5pdC50cyIsIndlYnBhY2s6Ly9zYW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2FtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zYW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiQ2FudmFzRW5naW5lIiwibW9kdWxlIiwiUGxhdGZvcm0iLCJDYW52YXNQbGF0Zm9ybSIsIkVuZ2luZSIsInBvaW50MSIsIlBvaW50IiwicG9pbnQyIiwiQ2FudmFzUGF0dGVybnMiLCJjb2xvclBhdHRlcm4iLCJjb2xvciIsImFscGhhIiwiY3QiLCJyIiwiZyIsImIiLCJhIiwiQ29sb3JUcmFuc2Zvcm0iLCJyZWRNdWx0aXBsaWVyIiwicmVkT2Zmc2V0IiwiZ3JlZW5NdWx0aXBsaWVyIiwiZ3JlZW5PZmZzZXQiLCJibHVlTXVsdGlwbGllciIsImJsdWVPZmZzZXQiLCJhbHBoYU11bHRpcGxpZXIiLCJhbHBoYU9mZnNldCIsImFkZEdyYWRpZW50Q29sb3JzIiwicGF0dGVybiIsImNvbG9ycyIsImFscGhhcyIsInJhdGlvcyIsImNvbG9yVHJhbnNmb3JtIiwiaSIsImxlbmd0aCIsInJnYiIsInJhdGlvIiwiYWRkQ29sb3JTdG9wIiwicmFkaWFsR3JhZGllbnRQYXR0ZXJuIiwibWF0cml4IiwiY29udGV4dCIsIngiLCJ5IiwiTWF0cml4IiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJ0eCIsInR5IiwiTWF0aCIsImFicyIsImxpbmVhckdyYWRpZW50UGF0dGVybiIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYml0bWFwUGF0dGVybiIsImltYWdlIiwicmVwZWF0IiwiY3JlYXRlUGF0dGVybiIsImFyZ3VtZW50cyIsInZpZXciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0cyIsImdldENvbnRleHQiLCJjdXN0b21Db250ZXh0cyIsInB1c2giLCJwb3AiLCJlbmdpbmUiLCJkZWJ1ZyIsIndhcm5pbmciLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImNsZWFyIiwidXBkYXRlU2l6ZSIsInNldFRyYW5zZm9ybSIsImNsZWFyUmVjdCIsInNjcmVlbiIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwicGl4ZWxSYXRpbyIsImdldFBpeGVsUmF0aW8iLCJ2aWV3V2lkdGgiLCJmbG9vciIsInZpZXdIZWlnaHQiLCJzdHlsZSIsIkNPTlRBSU5FUiIsIkNvbnRhaW5lciIsIm51bUNoaWxkcmVuIiwiY29udGFpbmVyIiwiY2hpbGRyZW4iLCJBcnJheSIsImlzQXJyYXkiLCJ0eXBlIiwia2V5cyIsIk9iamVjdCIsIkNvbnRhaW5lckV4dGVuc2lvbiIsInJlbmRlciIsInJlbmRlcmVyIiwiZGVwdGgiLCJjb21wb25lbnQiLCJyZW5kZXJDb21wb25lbnQiLCJjb21wb25lbnRzTWFwIiwidXBkYXRlIiwidXBkYXRlciIsInVwZGF0ZUNvbXBvbmVudCIsImhpdFRlc3QiLCJwb2ludGVyRXZlbnRzIiwicG9pbnRlcnMiLCJyZXN1bHQiLCJkaXNwYXRjaENvbXBvbmVudCIsImxvYWRlZCIsImxvYWRpbmciLCJwcm9ncmVzcyIsImNvbXBvbmVudENvbnRleHQiLCJpbml0IiwiY29tcG9uZW50cyIsInNldCIsIkxPQURFUiIsIkxvYWRlciIsImdldExvYWRpbmdQcm9ncmVzcyIsImxvYWRlciIsImxvYWRpbmdQcm9ncmVzcyIsImlzTG9hZGVkIiwibmVlZExvYWRpbmdDaGVjayIsImxvYWRpbmdDaGVjayIsIkxvYWRlckV4dGVuc2lvbiIsIm9uTG9hZGVkIiwiQ29tcG9uZW50cyIsIlNjcmVlbiIsIlVwZGF0ZXIiLCJMb2FkaW5nIiwiUmVuZGVyZXIiLCJQb2ludGVycyIsIlRpY2tlciIsIkRlYnVnIiwiUmVzb3VyY2VzIiwicGxhdGZvcm0iLCJ0aWNrZXIiLCJyZXNvdXJjZXMiLCJFbmdpbmVGZWF0dXJlIiwiRGlzcGxheSIsImlzVmlzaWJsZSIsInZpc2libGUiLCJQaXZvdCIsImdldFgiLCJwaXZvdCIsInBpdm90WCIsImdldFkiLCJwaXZvdFkiLCJoYXNWYWx1ZXMiLCJoYW5kbGVyc01hcCIsInBvaW50ZXJEb3duIiwicG9pbnRlclVwIiwicG9pbnRlck1vdmUiLCJwb2ludGVyT3ZlciIsInBvaW50ZXJPdXQiLCJQb2ludGVyIiwiaXNQb2ludGVyT3ZlciIsInBvaW50ZXIiLCJpc1BvaW50ZXJFbmFibGVkIiwicG9pbnRlckVuYWJsZWQiLCJkaXNwYXRjaEV2ZW50IiwiaWQiLCJoYW5kbGVyTmFtZSIsImV2ZW50IiwiVHJhbnNmb3JtIiwiZ2V0TWF0cml4IiwidHJhbnNmb3JtIiwiYyIsImQiLCJyb3RhdGlvbiIsInNjYWxlWCIsInNjYWxlIiwic2NhbGVZIiwiY29zIiwic2luIiwiZ2V0Q29sb3JUcmFuc2Zvcm0iLCJ0aW50IiwidmFsdWUiLCJ2YWx1ZUludmVydGVkIiwiYnJpZ2h0bmVzcyIsInVuZGVmaW5lZCIsInBlcmNlbnQiLCJvZmZzZXQiLCJVcGRhdGUiLCJpc0VuYWJsZWQiLCJlbmFibGVkIiwidGltZSIsIm9uVXBkYXRlIiwicHJvcGVydGllcyIsIk1hcCIsImVycm9ycyIsIndhcm5pbmdzIiwiY29uc29sZSIsImxvZyIsImFyZ3MiLCJTdHJpbmciLCJjb3VudCIsImdldCIsImVycm9yIiwid2FybiIsImVsYXBzZWRUaW1lIiwiaGFuZGxlciIsInJvb3QiLCJzdGFydFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImdsb2JhbCIsImxvY2FsIiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJiYXNlIiwicGFyZW50IiwiYmVnaW4iLCJlbmQiLCJSZXNvdXJjZSIsImdldFByb2dyZXNzIiwicmVzb3VyY2UiLCJieXRlc1RvdGFsIiwiYnl0ZXNMb2FkZWQiLCJyZXNvbHZlcnMiLCJTZXQiLCJhc3NldCIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1bGxzY3JlZW4iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiZnJhbWVSYXRlIiwicGF1c2VkIiwidXBkYXRlRnJhbWUiLCJjdXJyZW50VGltZSIsImRlbHRhVGltZSIsInVwZGF0ZU5leHRGcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZVByb3BlcnRpZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJjbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRMZWZ0IiwiY2xpZW50WSIsInRvcCIsImNsaWVudFRvcCIsImRpc3BhdGNoIiwicHJldmVudERlZmF1bHQiLCJNb3VzZUV4dGVuc2lvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJCb3VuZHMiLCJlbXB0eSIsIm1pblgiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJtaW5ZIiwibWF4WCIsIk1JTl9WQUxVRSIsIm1heFkiLCJzZXRFbXB0eSIsImJvdW5kcyIsImlzRW1wdHkiLCJ0b1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInRlc3RYIiwidGVzdFkiLCJ0ZXN0IiwidGVzdFBvaW50IiwicG9pbnQiLCJpc0VtcHR5V2l0aEFscGhhIiwiY29weSIsImZyb20iLCJ0byIsImNvbmNhdCIsImN0MSIsImN0MCIsIm1hdHJpeDAiLCJtYXRyaXgxIiwiZ2V0RGV0ZXJtaW5hbnQiLCJpbnZlcnQiLCJkZXRlcm1pbmFudCIsInRyYW5zZm9ybVBvaW50IiwidHJhbnNmb3JtUG9pbnRMb2NhbCIsInRyYW5zZm9ybUludmVyc2VQb2ludCIsInRyYW5zZm9ybUJvdW5kcyIsInJ4IiwicnkiLCJyciIsInJiIiwibngxIiwibnkxIiwibngyIiwibnkyIiwibngzIiwibnkzIiwibng0Iiwibnk0IiwicmlnaHQiLCJib3R0b20iLCJzcXJ0IiwiYW5nbGUiLCJhdGFuMiIsImVxdWFscyIsInBvaW50MCIsInNvdXJjZSIsInRhcmdldCIsIm5vcm1hbGl6ZSIsInRoaWNrbmVzcyIsImRpc3RhbmNlIiwiZHgiLCJkeSIsImludGVycG9sYXRlIiwicG9sYXIiLCJSZWN0YW5nbGUiLCJpbnRlcnNlY3Rpb24iLCJjb250YWlucyIsInJvdW5kIiwic2NyZWVuQm91bmRzIiwiQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiIsInNyYyIsImNvbnRleHQyZCIsImdsb2JhbEFscGhhIiwiZHJhd0ltYWdlIiwiY3VzdG9tQ29udGV4dCIsImNyZWF0ZUN1c3RvbUNvbnRleHQiLCJpbWFnZURhdGEiLCJnZXRJbWFnZURhdGEiLCJybSIsImdtIiwiYm0iLCJhbSIsInJvIiwiZ28iLCJibyIsImFvIiwiZGF0YSIsInB1dEltYWdlRGF0YSIsImRlc3Ryb3lDdXN0b21Db250ZXh0IiwiSW1hZ2VFeHRlbnNpb24iLCJJTUFHRSIsIkNhbnZhc0ltYWdlRXh0ZW5zaW9uIiwiSW1hZ2UiLCJjYWxjdWxhdGVCb3VuZHMiLCJJbWFnZVJlc291cmNlIiwiZXh0ZW5zaW9uIiwic3BsaXQiLCJvbmxvYWQiLCJvbmVycm9yIiwiZSIsImFkZCIsIlN0cmluZ1Jlc291cmNlIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwib25wcm9ncmVzcyIsInRvdGFsIiwicmVzcG9uc2VUZXh0Iiwic2VuZCIsIlNDRU5FIiwiU2NlbmVFeHRlbnNpb24iLCJzY2VuZSIsIkpTT04iLCJwYXJzZSIsIm1lc3NhZ2UiLCJQSV8yIiwiUEkiLCJhcHBseUVsbGlwc2UiLCJyYWRpdXMiLCJyYWRpdXNYIiwicmFkaXVzWSIsImJlZ2luUGF0aCIsImVsbGlwc2UiLCJjbG9zZVBhdGgiLCJhcHBseUNvbW1hbmQiLCJjb21tYW5kIiwibW92ZVRvIiwibGluZVRvIiwiY3VydmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJjeCIsImN5IiwiY3ViaWNDdXJ2ZVRvIiwiYmV6aWVyQ3VydmVUbyIsInN4Iiwic3kiLCJhcHBseVBhdGgiLCJhcHBseVJlY3RhbmdsZSIsInJlY3QiLCJyZW5kZXJHcmFwaGljcyIsImZpbGwiLCJzdHJva2UiLCJoYXNGaWxsIiwiaGFzU3Ryb2tlIiwiZXhpc3QiLCJwYXRoIiwiYXBwbHlTdHJpbmciLCJzZXRGaWxsU3R5bGUiLCJzZXRTdHJva2VTdHlsZSIsIkNhbnZhc1NoYXBlRXh0ZW5zaW9uIiwic2hhcGUiLCJTaGFwZSIsIlNoYXBlRXh0ZW5zaW9uIiwiU0hBUEUiLCJyZWFkZXIiLCJHcmFwaGljc1N0cmluZ1JlYWRlciIsInNldFBhdGgiLCJyZWFkTmV4dCIsImdldENvbW1hbmQiLCJlbXB0eU1hdHJpeCIsImVtcHR5QXJyYXkiLCJnZXRDYW52YXNQYXR0ZXJuIiwic29saWQiLCJtbCIsImNsIiwiYWwiLCJybCIsIm1yIiwiY3IiLCJhciIsImJpdG1hcEZpbGwiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsImxpbmVDYXAiLCJsaW5lSm9pbiIsIm1pdGVyTGltaXQiLCJjYXBzIiwiam9pbnRzIiwiUmVjdGFuZ2xlRGF0YSIsIkVsbGlwc2VEYXRhIiwiUGF0aERhdGEiLCJwYXRoRGF0YSIsIkdyYXBoaWNzU3RyaW5nIiwiUGF0aENvbW1hbmQiLCJHcmFwaGljc0RhdGEiLCJOVU1CRVJTX0NPVU5UIiwiTSIsIm0iLCJMIiwibCIsIkgiLCJoIiwiViIsInYiLCJDIiwiUyIsInMiLCJRIiwicSIsIlQiLCJ0IiwiR3JhcGhpY3NTdHJpbmdTdHJlYW0iLCJidWZmZXIiLCJjb21tYW5kUmVnZXgiLCJudW1iZXJSZWdleCIsImxhc3RJbmRleCIsImNvbW1hbmRNYXRjaCIsImV4ZWMiLCJpbmRleCIsIm51bWJlck1hdGNoIiwicGFyc2VGbG9hdCIsInN0cmVhbSIsImNvbW1hbmRFeGlzdHMiLCJsYXN0WCIsImxhc3RZIiwibGFzdENYIiwibGFzdENZIiwiZ2V0QnVmZmVyIiwiZTAiLCJlMSIsImUyIiwiZTMiLCJlNCIsImU1IiwiR3JhcGhpY3MiLCJzbW9vdGgiLCJzcHJlYWQiLCJpbnRlcnBvbGF0aW9uIiwiZm9jYWxQb2ludFJhdGlvIiwicGl4ZWxIaW50aW5nIiwic2NhbGVNb2RlIiwiZ2V0UGF0aCIsImVsbGlwc2VXaWR0aCIsImVsbGlwc2VIZWlnaHQiLCJ3IiwiayIsIm94Iiwib3kiLCJ4ZSIsInllIiwieG0iLCJ5bSIsImNyZWF0ZURhdGEiLCJncmFwaGljc0RhdGEiLCJnZXRHcmFwaGljcyIsImRlZmF1bHRUZXh0Rm9ybWF0IiwiQ09SUkVDVElPTiIsIkNhbnZhc1RleHRFeHRlbnNpb24iLCJtZXRyaWNzIiwic2ltcGxlIiwiVGV4dCIsIlRleHRNZXRyaWNzIiwiZm9ybWF0IiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsIlRleHRGb3JtYXQiLCJyZWFsV2lkdGgiLCJyZWFsSGVpZ2h0Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJhbGlnblZlcnRpY2FsVmFsdWUiLCJ0ZXh0QmFzZWxpbmUiLCJ0ZXh0IiwiZm9udCIsInNpemUiLCJsZWFkaW5nIiwibGV0dGVyU3BhY2luZyIsImRlZmF1bHRGb250IiwiRm9udCIsInN5bWJvbFNpemUiLCJzeW1ib2wiLCJzeW1ib2xOZXh0IiwiYWR2YW5jZSIsImZpbGxUZXh0IiwibGluZXMiLCJsaW5lIiwic3ltYm9scyIsImZpcnN0IiwiYWxpZ25WYWx1ZSIsImxpbmVIZWlnaHQiLCJqIiwiYWxpZ25TeW1ib2xWYWx1ZSIsIlRleHRFeHRlbnNpb24iLCJURVhUIiwiRU0iLCJmb250cyIsImdldFN0eWxlRm9udCIsIm1lYXN1cmVUZXh0IiwiZ2V0Q2hhcldpZHRoIiwiY2hhciIsIndpZHRocyIsIm5hbWUiLCJnZXRLZXJuaW5nIiwic2Vjb25kIiwicGFpciIsImtlcm5pbmciLCJrZXJuaW5ncyIsIndpZHRoU2Vjb25kIiwid2lkdGhUb3RhbCIsImdldEFkdmFuY2UiLCJnZXRGb250IiwiYm9sZCIsIml0YWxpYyIsInVuZGVybGluZSIsImFsaWduIiwidmVydGljYWxBbGlnbiIsImNvbWJpbmUiLCJkZWZhdWx0Rm9ybWF0IiwiZ2V0QWxpZ25WYWx1ZSIsImdldFZlcnRpY2FsQWxpZ25WYWx1ZSIsIlRleHRMaW5lIiwiY3JlYXRlIiwibWF4IiwiY29ycmVjdFdpZHRoIiwibGFzdCIsImNvcnJlY3RIZWlnaHQiLCJnZXRTeW1ib2xzIiwic3ltYm9sRm9ybWF0Iiwic3ltYm9sRm9udCIsImJsb2NrIiwiZ2V0TGluZXMiLCJ3b3JkV3JhcCIsIm11bHRpbGluZSIsIndvcmQiLCJnZXRNZXRyaWNzIiwiZ2V0U2ltcGxlTWV0cmljcyIsImdldFRleHQiLCJpc0F1dG9TaXplIiwiaXNTaW1wbGUiLCJpc1dvcmRXcmFwIiwiaXNNdWx0aWxpbmUiLCJMSU5FQVIiLCJRVUFEUkFUSUMiLCJRVUFEUkFUSUNfSU4iLCJRVUFEUkFUSUNfT1VUIiwiQ1VCSUMiLCJDVUJJQ19JTiIsIkNVQklDX09VVCIsIlFVQVJUSUMiLCJRVUFSVElDX0lOIiwiUVVBUlRJQ19PVVQiLCJRVUlOVElDIiwiUVVJTlRJQ19JTiIsIlFVSU5USUNfT1VUIiwiU0lOVVNPSURBTCIsIlNJTlVTT0lEQUxfSU4iLCJTSU5VU09JREFMX09VVCIsIkVYUE9ORU5USUFMIiwiRVhQT05FTlRJQUxfSU4iLCJFWFBPTkVOVElBTF9PVVQiLCJDSVJDVUxBUiIsIkNJUkNVTEFSX0lOIiwiQ0lSQ1VMQVJfT1VUIiwiRUxBU1RJQyIsIkVMQVNUSUNfSU4iLCJFTEFTVElDX09VVCIsIkJBQ0siLCJCQUNLX0lOIiwiQkFDS19PVVQiLCJCT1VOQ0UiLCJCT1VOQ0VfSU4iLCJCT1VOQ0VfT1VUIiwiZWFzaW5nIiwicG93IiwiVFdFRU4iLCJUd2VlbkV4dGVuc2lvbiIsInR3ZWVuIiwicGhhc2VzIiwicGhhc2UiLCJlYXNpbmdOYW1lIiwidG9Mb3dlckNhc2UiLCJlYXNpbmdNZXRob2QiLCJlYXNpbmdWYWx1ZSIsInN0YXRlIiwia2V5IiwiZnJvbVZhbHVlIiwidG9WYWx1ZSIsInN0YXRlVmFsdWUiLCJsb29wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ08sSUFBTUEsWUFBYjtBQUFBOztBQUFBOztBQUNJLDBCQUF5QjtBQUFBOztBQUFBLFFBQWJDLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDckJBLFVBQU0sQ0FBQ0MsUUFBUCx1QkFBa0JELE1BQU0sQ0FBQ0MsUUFBekIsK0RBQXFDQyxxREFBckM7QUFEcUIsNkJBRWZGLE1BRmU7QUFHeEI7O0FBSkw7QUFBQSxFQUFrQ0csOENBQWxDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0EsSUFBTUMsTUFBTSxHQUFHQyxtREFBQSxFQUFmO0FBQ0EsSUFBTUMsTUFBTSxHQUFHRCxtREFBQSxFQUFmO0FBQ08sSUFBSUUsY0FBSjs7QUFDUCxDQUFDLFVBQVVBLGNBQVYsRUFBMEI7QUFDdkIsV0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkJDLEtBQTdCLEVBQW9DQyxFQUFwQyxFQUF3QztBQUNwQyxRQUFJQyxDQUFDLEdBQUdILEtBQUssSUFBSSxFQUFULEdBQWMsSUFBdEI7QUFDQSxRQUFJSSxDQUFDLEdBQUdKLEtBQUssSUFBSSxDQUFULEdBQWEsSUFBckI7QUFDQSxRQUFJSyxDQUFDLEdBQUdMLEtBQUssR0FBRyxJQUFoQjtBQUNBLFFBQUlNLENBQUMsR0FBR0wsS0FBSyxHQUFHLElBQWhCOztBQUNBLFFBQUksQ0FBQ00sOERBQUEsQ0FBdUJMLEVBQXZCLENBQUwsRUFBaUM7QUFDN0JDLE9BQUMsR0FBSUEsQ0FBQyxHQUFHRCxFQUFFLENBQUNNLGFBQVAsR0FBdUJOLEVBQUUsQ0FBQ08sU0FBM0IsR0FBd0MsSUFBNUM7QUFDQUwsT0FBQyxHQUFJQSxDQUFDLEdBQUdGLEVBQUUsQ0FBQ1EsZUFBUCxHQUF5QlIsRUFBRSxDQUFDUyxXQUE3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QUNLLENBQ2xCLENBQUM7QUFDRixZQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQ25DLGdEQUFXLEVBQ1g7SUFDQyxLQUFLLEVBQUUsZ0RBQVc7SUFDbEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSTtJQUMzQixNQUFNLEVBQUUsSUFBSTtDQUNLLENBQ2xCLENBQUM7QUFHRixNQUFNLGVBQWUsR0FBRyxJQUFJLHVEQUFxQixFQUFFLENBQUM7QUFDcEQsZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbURBQWMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsaURBQVksQ0FBQyxDQUFDO0FBQ3JFLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNEQUFpQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxvREFBZSxDQUFDLENBQUM7QUFDM0UsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVuZ2luZSB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQ2FudmFzUGxhdGZvcm0gfSBmcm9tICcuL3BsYXRmb3JtJztcbmV4cG9ydCBjbGFzcyBDYW52YXNFbmdpbmUgZXh0ZW5kcyBFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1vZHVsZSA9IHt9KSB7XG4gICAgICAgIG1vZHVsZS5QbGF0Zm9ybSA9IG1vZHVsZS5QbGF0Zm9ybSA/PyBDYW52YXNQbGF0Zm9ybTtcbiAgICAgICAgc3VwZXIobW9kdWxlKTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3BhdHRlcm5zJztcbmV4cG9ydCAqIGZyb20gJy4vcGxhdGZvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9lbmdpbmUnO1xuIiwiaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0sIE1hdHJpeCwgUG9pbnQgfSBmcm9tICdAamVuZy9nZW9tJztcbmNvbnN0IHBvaW50MSA9IFBvaW50LmVtcHR5KCk7XG5jb25zdCBwb2ludDIgPSBQb2ludC5lbXB0eSgpO1xuZXhwb3J0IHZhciBDYW52YXNQYXR0ZXJucztcbihmdW5jdGlvbiAoQ2FudmFzUGF0dGVybnMpIHtcbiAgICBmdW5jdGlvbiBjb2xvclBhdHRlcm4oY29sb3IsIGFscGhhLCBjdCkge1xuICAgICAgICBsZXQgciA9IGNvbG9yID4+IDE2ICYgMHhmZjtcbiAgICAgICAgbGV0IGcgPSBjb2xvciA+PiA4ICYgMHhmZjtcbiAgICAgICAgbGV0IGIgPSBjb2xvciAmIDB4ZmY7XG4gICAgICAgIGxldCBhID0gYWxwaGEgKiAweGZmO1xuICAgICAgICBpZiAoIUNvbG9yVHJhbnNmb3JtLmlzRW1wdHkoY3QpKSB7XG4gICAgICAgICAgICByID0gKHIgKiBjdC5yZWRNdWx0aXBsaWVyICsgY3QucmVkT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBnID0gKGcgKiBjdC5ncmVlbk11bHRpcGxpZXIgKyBjdC5ncmVlbk9mZnNldCkgJiAweGZmO1xuICAgICAgICAgICAgYiA9IChiICogY3QuYmx1ZU11bHRpcGxpZXIgKyBjdC5ibHVlT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBhID0gKGEgKiBjdC5hbHBoYU11bHRpcGxpZXIgKyBjdC5hbHBoYU9mZnNldCkgJiAweGZmO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhIDwgMHhmZikge1xuICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YSAvIDB4ZmZ9KWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4gPSBjb2xvclBhdHRlcm47XG4gICAgZnVuY3Rpb24gYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJnYiA9IGNvbG9yc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGFscGhhID0gYWxwaGFzW2ldO1xuICAgICAgICAgICAgbGV0IHJhdGlvID0gcmF0aW9zW2ldIC8gMHhGRjtcbiAgICAgICAgICAgIGlmIChyYXRpbyA8IDApXG4gICAgICAgICAgICAgICAgcmF0aW8gPSAwO1xuICAgICAgICAgICAgaWYgKHJhdGlvID4gMSlcbiAgICAgICAgICAgICAgICByYXRpbyA9IDE7XG4gICAgICAgICAgICBwYXR0ZXJuLmFkZENvbG9yU3RvcChyYXRpbywgY29sb3JQYXR0ZXJuKHJnYiwgYWxwaGEsIGNvbG9yVHJhbnNmb3JtKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMuYWRkR3JhZGllbnRDb2xvcnMgPSBhZGRHcmFkaWVudENvbG9ycztcbiAgICBmdW5jdGlvbiByYWRpYWxHcmFkaWVudFBhdHRlcm4obWF0cml4LCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCkge1xuICAgICAgICBwb2ludDEueCA9IDE2MzguNDtcbiAgICAgICAgcG9pbnQxLnkgPSAwO1xuICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludDEsIHBvaW50MSk7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KG1hdHJpeC50eCwgbWF0cml4LnR5LCAwLCBtYXRyaXgudHgsIG1hdHJpeC50eSwgTWF0aC5hYnMoKHBvaW50MS54IC0gbWF0cml4LnR4KSAvIDIpKTtcbiAgICAgICAgYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMucmFkaWFsR3JhZGllbnRQYXR0ZXJuID0gcmFkaWFsR3JhZGllbnRQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGxpbmVhckdyYWRpZW50UGF0dGVybihtYXRyaXgsIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgICAgIHBvaW50MS54ID0gLTgxOS4yO1xuICAgICAgICBwb2ludDEueSA9IDA7XG4gICAgICAgIHBvaW50Mi54ID0gODE5LjI7XG4gICAgICAgIHBvaW50Mi55ID0gMDtcbiAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgcG9pbnQxLCBwb2ludDEpO1xuICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludDIsIHBvaW50Mik7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KHBvaW50MS54LCBwb2ludDEueSwgcG9pbnQyLngsIHBvaW50Mi55KTtcbiAgICAgICAgYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMubGluZWFyR3JhZGllbnRQYXR0ZXJuID0gbGluZWFyR3JhZGllbnRQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGJpdG1hcFBhdHRlcm4oaW1hZ2UsIHJlcGVhdCwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVQYXR0ZXJuKGltYWdlLCByZXBlYXQgPyAncmVwZWF0JyA6ICdub25lJyk7XG4gICAgICAgIGlmIChwYXR0ZXJuKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmJpdG1hcFBhdHRlcm4gPSBiaXRtYXBQYXR0ZXJuO1xufSkoQ2FudmFzUGF0dGVybnMgfHwgKENhbnZhc1BhdHRlcm5zID0ge30pKTtcbiIsImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGplbmcvY29yZSc7XG5leHBvcnQgY2xhc3MgQ2FudmFzUGxhdGZvcm0gZXh0ZW5kcyBQbGF0Zm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW3RoaXMudmlldy5nZXRDb250ZXh0KCcyZCcpXTtcbiAgICAgICAgdGhpcy5jdXN0b21Db250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0c1t0aGlzLmNvbnRleHRzLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgICBzYXZlQ29udGV4dChjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dHMucHVzaChjb250ZXh0KTtcbiAgICB9XG4gICAgcmVzdG9yZUNvbnRleHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdUcnlpbmcgdG8gcmVzdG9yZSBtYWluIGNvbnRleHQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVDdXN0b21Db250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dDtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tQ29udGV4dHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gdGhpcy5jdXN0b21Db250ZXh0cy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy52aWV3O1xuICAgICAgICBpZiAoY29udGV4dC5jYW52YXMud2lkdGggIT09IHdpZHRoKSB7XG4gICAgICAgICAgICBjb250ZXh0LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZXh0LmNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgICAgICAgY29udGV4dC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICBkZXN0cm95Q3VzdG9tQ29udGV4dChjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY3VzdG9tQ29udGV4dHMucHVzaChjb250ZXh0KTtcbiAgICB9XG4gICAgYmVnaW4oKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdmlldy53aWR0aCwgdmlldy5oZWlnaHQpO1xuICAgIH1cbiAgICB1cGRhdGVTaXplKCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRXaWR0aCgpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0SGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW8gPSB0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0UGl4ZWxSYXRpbygpO1xuICAgICAgICBjb25zdCB2aWV3V2lkdGggPSBNYXRoLmZsb29yKHdpZHRoICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHZpZXdIZWlnaHQgPSBNYXRoLmZsb29yKGhlaWdodCAqIHBpeGVsUmF0aW8pO1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IHRoaXM7XG4gICAgICAgIGlmICh2aWV3LndpZHRoICE9PSB2aWV3V2lkdGggfHwgdmlldy5oZWlnaHQgIT09IHZpZXdIZWlnaHQpIHtcbiAgICAgICAgICAgIHZpZXcud2lkdGggPSB2aWV3V2lkdGg7XG4gICAgICAgICAgICB2aWV3LmhlaWdodCA9IHZpZXdIZWlnaHQ7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IENPTlRBSU5FUiA9ICdjb250YWluZXInO1xuZXhwb3J0IHZhciBDb250YWluZXI7XG4oZnVuY3Rpb24gKENvbnRhaW5lcikge1xuICAgIGZ1bmN0aW9uIG51bUNoaWxkcmVuKGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgcmV0dXJuIGtleXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBDb250YWluZXIubnVtQ2hpbGRyZW4gPSBudW1DaGlsZHJlbjtcbn0pKENvbnRhaW5lciB8fCAoQ29udGFpbmVyID0ge30pKTtcbmV4cG9ydCB2YXIgQ29udGFpbmVyRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDb250YWluZXJFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHJlbmRlcmVyIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJlci5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyB1cGRhdGVyIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgdXBkYXRlci5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlci5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi51cGRhdGUgPSB1cGRhdGU7XG4gICAgZnVuY3Rpb24gaGl0VGVzdChjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgcG9pbnRlcnM6IHBvaW50ZXJFdmVudHMgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcG9pbnRlckV2ZW50cy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBvaW50ZXJFdmVudHMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcG9pbnRlckV2ZW50cy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0ga2V5cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwb2ludGVyRXZlbnRzLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9pbnRlckV2ZW50cy5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGxvYWRlZChjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgbG9hZGluZyB9ID0gZW5naW5lO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIGxvYWRpbmcuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyArPSBjb21wb25lbnRDb250ZXh0LnByb2dyZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnRDb250ZXh0LmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyAvPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgbG9hZGluZy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gbG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IGNvbXBvbmVudENvbnRleHQucHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSBjb21wb25lbnRDb250ZXh0LmxvYWRlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gbG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzICs9IGNvbXBvbmVudENvbnRleHQucHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudENvbnRleHQubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzIC89IGtleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2FkaW5nLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLmxvYWRlZCA9IGxvYWRlZDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy51cGRhdGUuc2V0KENPTlRBSU5FUiwgdXBkYXRlKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChDT05UQUlORVIsIHJlbmRlcik7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KENPTlRBSU5FUiwgaGl0VGVzdCk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5zZXQoQ09OVEFJTkVSLCBsb2FkZWQpO1xuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDb250YWluZXJFeHRlbnNpb24gfHwgKENvbnRhaW5lckV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBDb250YWluZXJFeHRlbnNpb24gfSBmcm9tICcuL2NvbnRhaW5lcic7XG5leHBvcnQgY29uc3QgTE9BREVSID0gJ2xvYWRlcic7XG5leHBvcnQgdmFyIExvYWRlcjtcbihmdW5jdGlvbiAoTG9hZGVyKSB7XG4gICAgZnVuY3Rpb24gZ2V0TG9hZGluZ1Byb2dyZXNzKGxvYWRlcikge1xuICAgICAgICByZXR1cm4gbG9hZGVyLmxvYWRpbmdQcm9ncmVzcyA/PyAwO1xuICAgIH1cbiAgICBMb2FkZXIuZ2V0TG9hZGluZ1Byb2dyZXNzID0gZ2V0TG9hZGluZ1Byb2dyZXNzO1xuICAgIGZ1bmN0aW9uIGlzTG9hZGVkKGxvYWRlcikge1xuICAgICAgICByZXR1cm4gbG9hZGVyLmxvYWRlZCA/PyBmYWxzZTtcbiAgICB9XG4gICAgTG9hZGVyLmlzTG9hZGVkID0gaXNMb2FkZWQ7XG4gICAgZnVuY3Rpb24gbmVlZExvYWRpbmdDaGVjayhsb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRlci5sb2FkaW5nQ2hlY2sgPz8gdHJ1ZTtcbiAgICB9XG4gICAgTG9hZGVyLm5lZWRMb2FkaW5nQ2hlY2sgPSBuZWVkTG9hZGluZ0NoZWNrO1xufSkoTG9hZGVyIHx8IChMb2FkZXIgPSB7fSkpO1xuZXhwb3J0IHZhciBMb2FkZXJFeHRlbnNpb247XG4oZnVuY3Rpb24gKExvYWRlckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGxvYWRlZChsb2FkZXIsIGVuZ2luZSkge1xuICAgICAgICBpZiAoIUxvYWRlci5uZWVkTG9hZGluZ0NoZWNrKGxvYWRlcikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBDb250YWluZXJFeHRlbnNpb24ubG9hZGVkKGxvYWRlciwgZW5naW5lKTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5sb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgbG9hZGVyLmxvYWRpbmdQcm9ncmVzcyA9IGNvbnRleHQucHJvZ3Jlc3M7XG4gICAgICAgIGlmIChjb250ZXh0LmxvYWRlZCAmJiAhbG9hZGVyLmxvYWRlZCkge1xuICAgICAgICAgICAgbG9hZGVyLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAobG9hZGVyLm9uTG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVyLm9uTG9hZGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgTG9hZGVyRXh0ZW5zaW9uLmxvYWRlZCA9IGxvYWRlZDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy51cGRhdGUuc2V0KExPQURFUiwgQ29udGFpbmVyRXh0ZW5zaW9uLnVwZGF0ZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoTE9BREVSLCBDb250YWluZXJFeHRlbnNpb24ucmVuZGVyKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoTE9BREVSLCBDb250YWluZXJFeHRlbnNpb24uaGl0VGVzdCk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5zZXQoTE9BREVSLCBsb2FkZWQpO1xuICAgIH1cbiAgICBMb2FkZXJFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShMb2FkZXJFeHRlbnNpb24gfHwgKExvYWRlckV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3JlbmRlcmVyJztcbmltcG9ydCB7IFVwZGF0ZXIgfSBmcm9tICcuLi9mZWF0dXJlcy91cGRhdGVyJztcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICcuLi9mZWF0dXJlcy9sb2FkaW5nJztcbmltcG9ydCB7IFNjcmVlbiB9IGZyb20gJy4uL2ZlYXR1cmVzL3NjcmVlbic7XG5pbXBvcnQgeyBQb2ludGVycyB9IGZyb20gJy4uL2ZlYXR1cmVzL3BvaW50ZXJzJztcbmltcG9ydCB7IFRpY2tlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3RpY2tlcic7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL2ZlYXR1cmVzL3BsYXRmb3JtJztcbmltcG9ydCB7IENvbnRhaW5lckV4dGVuc2lvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmltcG9ydCB7IERlYnVnIH0gZnJvbSAnLi4vZmVhdHVyZXMvZGVidWcnO1xuaW1wb3J0IHsgUmVzb3VyY2VzIH0gZnJvbSAnLi4vZmVhdHVyZXMvcmVzb3VyY2VzJztcbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuLi9mZWF0dXJlcy9jb21wb25lbnRzJztcbmltcG9ydCB7IExvYWRlckV4dGVuc2lvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGVyJztcbmV4cG9ydCBjbGFzcyBFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1vZHVsZSA9IHt9KSB7XG4gICAgICAgIHRoaXMuZGVwdGggPSAzMjtcbiAgICAgICAgbW9kdWxlLkNvbXBvbmVudHMgPSBtb2R1bGUuQ29tcG9uZW50cyA/PyBDb21wb25lbnRzO1xuICAgICAgICBtb2R1bGUuU2NyZWVuID0gbW9kdWxlLlNjcmVlbiA/PyBTY3JlZW47XG4gICAgICAgIG1vZHVsZS5QbGF0Zm9ybSA9IG1vZHVsZS5QbGF0Zm9ybSA/PyBQbGF0Zm9ybTtcbiAgICAgICAgbW9kdWxlLlVwZGF0ZXIgPSBtb2R1bGUuVXBkYXRlciA/PyBVcGRhdGVyO1xuICAgICAgICBtb2R1bGUuTG9hZGluZyA9IG1vZHVsZS5Mb2FkaW5nID8/IExvYWRpbmc7XG4gICAgICAgIG1vZHVsZS5SZW5kZXJlciA9IG1vZHVsZS5SZW5kZXJlciA/PyBSZW5kZXJlcjtcbiAgICAgICAgbW9kdWxlLlBvaW50ZXJzID0gbW9kdWxlLlBvaW50ZXJzID8/IFBvaW50ZXJzO1xuICAgICAgICBtb2R1bGUuVGlja2VyID0gbW9kdWxlLlRpY2tlciA/PyBUaWNrZXI7XG4gICAgICAgIG1vZHVsZS5EZWJ1ZyA9IG1vZHVsZS5EZWJ1ZyA/PyBEZWJ1ZztcbiAgICAgICAgbW9kdWxlLlJlc291cmNlcyA9IG1vZHVsZS5SZXNvdXJjZXMgPz8gUmVzb3VyY2VzO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBuZXcgbW9kdWxlLkNvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgbW9kdWxlLlNjcmVlbigpO1xuICAgICAgICB0aGlzLnBsYXRmb3JtID0gbmV3IG1vZHVsZS5QbGF0Zm9ybSh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVyID0gbmV3IG1vZHVsZS5VcGRhdGVyKHRoaXMpO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBuZXcgbW9kdWxlLkxvYWRpbmcodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgbW9kdWxlLlJlbmRlcmVyKHRoaXMpO1xuICAgICAgICB0aGlzLnBvaW50ZXJzID0gbmV3IG1vZHVsZS5Qb2ludGVycyh0aGlzKTtcbiAgICAgICAgdGhpcy50aWNrZXIgPSBuZXcgbW9kdWxlLlRpY2tlcih0aGlzKTtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IG5ldyBtb2R1bGUuRGVidWcoKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgbW9kdWxlLlJlc291cmNlcyh0aGlzKTtcbiAgICAgICAgQ29udGFpbmVyRXh0ZW5zaW9uLmluaXQodGhpcyk7XG4gICAgICAgIExvYWRlckV4dGVuc2lvbi5pbml0KHRoaXMpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgfVxufVxuIiwiZXhwb3J0IHZhciBEaXNwbGF5O1xuKGZ1bmN0aW9uIChEaXNwbGF5KSB7XG4gICAgZnVuY3Rpb24gaXNWaXNpYmxlKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LnZpc2libGUgPz8gdHJ1ZTtcbiAgICB9XG4gICAgRGlzcGxheS5pc1Zpc2libGUgPSBpc1Zpc2libGU7XG59KShEaXNwbGF5IHx8IChEaXNwbGF5ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUGl2b3Q7XG4oZnVuY3Rpb24gKFBpdm90KSB7XG4gICAgZnVuY3Rpb24gZ2V0WChwaXZvdCwgd2lkdGgpIHtcbiAgICAgICAgY29uc3QgeyBwaXZvdFggfSA9IHBpdm90O1xuICAgICAgICBpZiAocGl2b3RYKSB7XG4gICAgICAgICAgICByZXR1cm4gLXBpdm90WCAqIHdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBQaXZvdC5nZXRYID0gZ2V0WDtcbiAgICBmdW5jdGlvbiBnZXRZKHBpdm90LCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgeyBwaXZvdFkgfSA9IHBpdm90O1xuICAgICAgICBpZiAocGl2b3RZKSB7XG4gICAgICAgICAgICByZXR1cm4gLXBpdm90WSAqIGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgUGl2b3QuZ2V0WSA9IGdldFk7XG4gICAgZnVuY3Rpb24gaGFzVmFsdWVzKHBpdm90KSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RYLCBwaXZvdFkgfSA9IHBpdm90O1xuICAgICAgICByZXR1cm4gISFwaXZvdFggfHwgISFwaXZvdFk7XG4gICAgfVxuICAgIFBpdm90Lmhhc1ZhbHVlcyA9IGhhc1ZhbHVlcztcbn0pKFBpdm90IHx8IChQaXZvdCA9IHt9KSk7XG4iLCJjb25zdCBoYW5kbGVyc01hcCA9IHtcbiAgICBwb2ludGVyRG93bjogJ29uUG9pbnRlckRvd24nLFxuICAgIHBvaW50ZXJVcDogJ29uUG9pbnRlclVwJyxcbiAgICBwb2ludGVyTW92ZTogJ29uUG9pbnRlck1vdmUnLFxuICAgIHBvaW50ZXJPdmVyOiAnb25Qb2ludGVyT3ZlcicsXG4gICAgcG9pbnRlck91dDogJ29uUG9pbnRlck91dCcsXG59O1xuZXhwb3J0IHZhciBQb2ludGVyO1xuKGZ1bmN0aW9uIChQb2ludGVyKSB7XG4gICAgZnVuY3Rpb24gaXNQb2ludGVyT3Zlcihwb2ludGVyKSB7XG4gICAgICAgIHJldHVybiAhIXBvaW50ZXIucG9pbnRlck92ZXI7XG4gICAgfVxuICAgIFBvaW50ZXIuaXNQb2ludGVyT3ZlciA9IGlzUG9pbnRlck92ZXI7XG4gICAgZnVuY3Rpb24gaXNQb2ludGVyRW5hYmxlZChwb2ludGVyKSB7XG4gICAgICAgIHJldHVybiBwb2ludGVyLnBvaW50ZXJFbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIFBvaW50ZXIuaXNQb2ludGVyRW5hYmxlZCA9IGlzUG9pbnRlckVuYWJsZWQ7XG4gICAgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChwb2ludGVyLCB0eXBlLCB4LCB5LCBpZCkge1xuICAgICAgICBjb25zdCBoYW5kbGVyTmFtZSA9IGhhbmRsZXJzTWFwW3R5cGVdO1xuICAgICAgICBpZiAoaGFuZGxlck5hbWUgJiYgcG9pbnRlcltoYW5kbGVyTmFtZV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICAgICAgICAgIHR5cGUsIHgsIHksIGlkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHBvaW50ZXJbaGFuZGxlck5hbWVdKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xufSkoUG9pbnRlciB8fCAoUG9pbnRlciA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFRyYW5zZm9ybTtcbihmdW5jdGlvbiAoVHJhbnNmb3JtKSB7XG4gICAgZnVuY3Rpb24gZ2V0TWF0cml4KHRyYW5zZm9ybSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChtYXRyaXgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gbWF0cml4LmEgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gbWF0cml4LmIgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gbWF0cml4LmMgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gbWF0cml4LmQgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC50eCA9IG1hdHJpeC50eCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LnR5ID0gbWF0cml4LnR5ID8/IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb3RhdGlvbiB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBjb25zdCBzY2FsZVggPSB0cmFuc2Zvcm0uc2NhbGVYID8/IHRyYW5zZm9ybS5zY2FsZSA/PyAxO1xuICAgICAgICBjb25zdCBzY2FsZVkgPSB0cmFuc2Zvcm0uc2NhbGVZID8/IHRyYW5zZm9ybS5zY2FsZSA/PyAxO1xuICAgICAgICByZXN1bHQudHggPSB0cmFuc2Zvcm0ueCA/PyAwO1xuICAgICAgICByZXN1bHQudHkgPSB0cmFuc2Zvcm0ueSA/PyAwO1xuICAgICAgICBpZiAocm90YXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKHJvdGF0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKHJvdGF0aW9uKTtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gY29zICogc2NhbGVYO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSBzaW4gKiBzY2FsZVg7XG4gICAgICAgICAgICByZXN1bHQuYyA9IC1zaW4gKiBzY2FsZVk7XG4gICAgICAgICAgICByZXN1bHQuZCA9IGNvcyAqIHNjYWxlWTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYSA9IHNjYWxlWDtcbiAgICAgICAgcmVzdWx0LmIgPSAwO1xuICAgICAgICByZXN1bHQuYyA9IDA7XG4gICAgICAgIHJlc3VsdC5kID0gc2NhbGVZO1xuICAgIH1cbiAgICBUcmFuc2Zvcm0uZ2V0TWF0cml4ID0gZ2V0TWF0cml4O1xuICAgIGZ1bmN0aW9uIGdldENvbG9yVHJhbnNmb3JtKHRyYW5zZm9ybSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtKSB7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLnJlZE11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5ncmVlbk11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmJsdWVNdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLnJlZE9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5PZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFscGhhID0gdHJhbnNmb3JtLmFscGhhID8/IDE7XG4gICAgICAgIGNvbnN0IHsgdGludCB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAodGludCkge1xuICAgICAgICAgICAgY29uc3QgeyBjb2xvciA9IDAsIHZhbHVlID0gMSB9ID0gdGludDtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlSW52ZXJ0ZWQgPSAxIC0gdmFsdWU7XG4gICAgICAgICAgICBjb25zdCByID0gKGNvbG9yID4+IDE2KSAmIDB4ZmY7XG4gICAgICAgICAgICBjb25zdCBnID0gKGNvbG9yID4+IDgpICYgMHhmZjtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBjb2xvciAmIDB4ZmY7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGE7XG4gICAgICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHZhbHVlSW52ZXJ0ZWQ7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IHZhbHVlSW52ZXJ0ZWQ7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IHIgKiB2YWx1ZTtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IGcgKiB2YWx1ZTtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gYiAqIHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB7IGJyaWdodG5lc3MgfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKGJyaWdodG5lc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGJyaWdodG5lc3MgPiAxKSB7XG4gICAgICAgICAgICAgICAgYnJpZ2h0bmVzcyA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChicmlnaHRuZXNzIDwgLTEpIHtcbiAgICAgICAgICAgICAgICBicmlnaHRuZXNzID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gMSAtIE1hdGguYWJzKGJyaWdodG5lc3MpO1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgICAgICBpZiAoYnJpZ2h0bmVzcyA+IDApIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBicmlnaHRuZXNzICogMjU1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGFscGhhO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSBwZXJjZW50O1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IHBlcmNlbnQ7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSBwZXJjZW50O1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGE7XG4gICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IDA7XG4gICAgfVxuICAgIFRyYW5zZm9ybS5nZXRDb2xvclRyYW5zZm9ybSA9IGdldENvbG9yVHJhbnNmb3JtO1xufSkoVHJhbnNmb3JtIHx8IChUcmFuc2Zvcm0gPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBVcGRhdGU7XG4oZnVuY3Rpb24gKFVwZGF0ZSkge1xuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5lbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIFVwZGF0ZS5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbXBvbmVudCwgdGltZSkge1xuICAgICAgICBpZiAoY29tcG9uZW50Lm9uVXBkYXRlKSB7XG4gICAgICAgICAgICBjb21wb25lbnQub25VcGRhdGUodGltZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVXBkYXRlLnVwZGF0ZSA9IHVwZGF0ZTtcbn0pKFVwZGF0ZSB8fCAoVXBkYXRlID0ge30pKTtcbiIsImV4cG9ydCBjbGFzcyBDb21wb25lbnRzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlbmRlciA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy51cGRhdGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuaGl0VGVzdCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSBuZXcgTWFwKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIERlYnVnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMud2FybmluZ3MgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIGxvZyguLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gICAgfVxuICAgIGVycm9yKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5lcnJvcnMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICB0aGlzLmVycm9ycy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG4gICAgd2FybmluZyguLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoYXJncyk7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMud2FybmluZ3MuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMud2FybmluZ3Muc2V0KGlkLCBjb3VudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgTG9hZGluZyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdID0gY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQocm9vdCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB9XG4gICAgYmVnaW4oKSB7XG4gICAgfVxuICAgIGVuZCgpIHtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNYXRyaXgsIFBvaW50IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy9kaXNwbGF5JztcbmltcG9ydCB7IFBvaW50ZXIgfSBmcm9tICcuLi9leHRlbnNpb25zL3BvaW50ZXInO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgUG9pbnRlcnMgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2xvYmFsID0gUG9pbnQuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5sb2NhbCA9IFBvaW50LmVtcHR5KCk7XG4gICAgICAgIHRoaXMucG9pbnRlcklkID0gMDtcbiAgICAgICAgdGhpcy5wb2ludGVyVHlwZSA9ICdwb2ludGVyRG93bic7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgbWF0cml4OiBNYXRyaXguZW1wdHkoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdID0gY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgZGlzcGF0Y2godHlwZSwgeCwgeSwgaWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvY2FsLnggPSB4O1xuICAgICAgICB0aGlzLmxvY2FsLnkgPSB5O1xuICAgICAgICB0aGlzLmdsb2JhbC54ID0geDtcbiAgICAgICAgdGhpcy5nbG9iYWwueSA9IHk7XG4gICAgICAgIHRoaXMucG9pbnRlcklkID0gaWQ7XG4gICAgICAgIHRoaXMucG9pbnRlclR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgY29uc3QgYmFzZSA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBNYXRyaXguc2V0RW1wdHkoYmFzZS5tYXRyaXgpO1xuICAgICAgICB0aGlzLmRlcHRoKys7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDb21wb25lbnQocm9vdCwgYmFzZSk7XG4gICAgfVxuICAgIGRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgcGFyZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIURpc3BsYXkuaXNWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVBvaW50ZXIuaXNQb2ludGVyRW5hYmxlZChjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgICAgIE1hdHJpeC5jb25jYXQocGFyZW50Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1JbnZlcnNlUG9pbnQoY29udGV4dC5tYXRyaXgsIHRoaXMuZ2xvYmFsLCB0aGlzLmxvY2FsKTtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5sb2NhbDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgdGhpcy5wb2ludGVyVHlwZSwgeCwgeSwgdGhpcy5wb2ludGVySWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRlclR5cGUgPT09ICdwb2ludGVyTW92ZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmICFjb21wb25lbnQucG9pbnRlck92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdmVyJywgeCwgeSwgdGhpcy5wb2ludGVySWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghcmVzdWx0ICYmIGNvbXBvbmVudC5wb2ludGVyT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCAncG9pbnRlck91dCcsIHgsIHksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnBvaW50ZXJPdmVyID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0sIE1hdHJpeCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvZGlzcGxheSc7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9leHRlbnNpb25zL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgbWF0cml4OiBNYXRyaXguZW1wdHkoKSxcbiAgICAgICAgICAgICAgICBjb2xvclRyYW5zZm9ybTogQ29sb3JUcmFuc2Zvcm0uZW1wdHkoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdID0gY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgcGFyZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIURpc3BsYXkuaXNWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIFRyYW5zZm9ybS5nZXRNYXRyaXgoY29tcG9uZW50LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgIFRyYW5zZm9ybS5nZXRDb2xvclRyYW5zZm9ybShjb21wb25lbnQsIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBNYXRyaXguY29uY2F0KHBhcmVudC5tYXRyaXgsIGNvbnRleHQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgIENvbG9yVHJhbnNmb3JtLmNvbmNhdChwYXJlbnQuY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLmVuZ2luZS5wbGF0Zm9ybS5iZWdpbigpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgY29uc3QgYmFzZSA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLmRlcHRoKys7XG4gICAgICAgIE1hdHJpeC5jb3B5KHRoaXMuZW5naW5lLnNjcmVlbi5nZXRNYXRyaXgoKSwgYmFzZS5tYXRyaXgpO1xuICAgICAgICBDb2xvclRyYW5zZm9ybS5zZXRFbXB0eShiYXNlLmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQocm9vdCwgYmFzZSk7XG4gICAgICAgIHRoaXMuZW5naW5lLnBsYXRmb3JtLmVuZCgpO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydFRpbWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgdmFyIFJlc291cmNlO1xuKGZ1bmN0aW9uIChSZXNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIGdldFByb2dyZXNzKHJlc291cmNlKSB7XG4gICAgICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNvdXJjZS5sb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNvdXJjZS5ieXRlc1RvdGFsID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlLmJ5dGVzTG9hZGVkIC8gcmVzb3VyY2UuYnl0ZXNUb3RhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgUmVzb3VyY2UuZ2V0UHJvZ3Jlc3MgPSBnZXRQcm9ncmVzcztcbn0pKFJlc291cmNlIHx8IChSZXNvdXJjZSA9IHt9KSk7XG5leHBvcnQgY2xhc3MgUmVzb3VyY2VzIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlc29sdmVycyA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgZ2V0KGFzc2V0KSB7XG4gICAgICAgIGlmICghYXNzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VzLmdldChhc3NldCk7XG4gICAgICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHJlc291cmNlID0gdGhpcy5yZXNvbHZlKGFzc2V0KTtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzLnNldChhc3NldCwgcmVzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICB9XG4gICAgcmVzb2x2ZShhc3NldCkge1xuICAgICAgICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHJlc29sdmVyKGFzc2V0LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgICAgICBpZiAocmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmdpbmUuZGVidWcud2FybmluZyhgUmVzb3VyY2Ugbm90IHJlc29sdmVkOiAke2Fzc2V0fWApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNYXRyaXggfSBmcm9tICdAamVuZy9nZW9tJztcbmV4cG9ydCBjbGFzcyBTY3JlZW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLndpZHRoID0gNDAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDQwMDtcbiAgICAgICAgdGhpcy5waXhlbFJhdGlvID0gMDtcbiAgICAgICAgdGhpcy5mdWxsc2NyZWVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWF0cml4ID0gTWF0cml4LmVtcHR5KCk7XG4gICAgfVxuICAgIGdldE1hdHJpeCgpIHtcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHRoaXMuZ2V0UGl4ZWxSYXRpbygpO1xuICAgICAgICB0aGlzLm1hdHJpeC5hID0gcGl4ZWxSYXRpbztcbiAgICAgICAgdGhpcy5tYXRyaXguZCA9IHBpeGVsUmF0aW87XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeDtcbiAgICB9XG4gICAgZ2V0V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZ1bGxzY3JlZW4gPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHRoaXMud2lkdGg7XG4gICAgfVxuICAgIGdldEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVsbHNjcmVlbiA/IHdpbmRvdy5pbm5lckhlaWdodCA6IHRoaXMuaGVpZ2h0O1xuICAgIH1cbiAgICBnZXRQaXhlbFJhdGlvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5waXhlbFJhdGlvID4gMCA/IHRoaXMucGl4ZWxSYXRpbyA6IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID8/IDE7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRpY2tlciB7XG4gICAgY29uc3RydWN0b3IoZW5naW5lKSB7XG4gICAgICAgIHRoaXMuZnJhbWVSYXRlID0gMDtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9ICh0aW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS51cGRhdGVyLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmxvYWRpbmcudXBkYXRlKCk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5yZW5kZXJlci5yZW5kZXIoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVGcmFtZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSAoY3VycmVudFRpbWUgLSB0aGlzLnRpbWUpIC8gMTAwMDtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmV4dEZyYW1lKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgIH1cbiAgICBnZXQgaXNQYXVzZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhdXNlZDtcbiAgICB9XG4gICAgcGxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU5leHRGcmFtZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB1cGRhdGVOZXh0RnJhbWUoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZUZyYW1lKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBVcGRhdGUgfSBmcm9tICcuLi9leHRlbnNpb25zL3VwZGF0ZSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBVcGRhdGVyIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KHJvb3QpO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydFRpbWU7XG4gICAgfVxuICAgIHVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVXBkYXRlLmlzRW5hYmxlZChjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzKGNvbXBvbmVudCk7XG4gICAgICAgIFVwZGF0ZS51cGRhdGUoY29tcG9uZW50LCB0aGlzLnRpbWUpO1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy51cGRhdGUuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlUHJvcGVydGllcyhjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5lbmdpbmUuY29tcG9uZW50cy5wcm9wZXJ0aWVzLmZvckVhY2goKGhhbmRsZXIsIHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50W3Byb3BlcnR5XSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvbG9hZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9lbmdpbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9jb21wb25lbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvZGVidWcnO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9wbGF0Zm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3BvaW50ZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcmVuZGVyZXInO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9yZXNvdXJjZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9zY3JlZW4nO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy90aWNrZXInO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy91cGRhdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vaW5wdXQvbW91c2UnO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL2Rpc3BsYXknO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3Bpdm90JztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9zb3VyY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3RyYW5zZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvdXBkYXRlJztcbiIsImZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgdHlwZSkge1xuICAgIGNvbnN0IHsgdmlldyB9ID0gZW5naW5lLnBsYXRmb3JtO1xuICAgIGNvbnN0IGNsaWVudFJlY3QgPSB2aWV3LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gY2xpZW50UmVjdC5sZWZ0IC0gdmlldy5jbGllbnRMZWZ0O1xuICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gY2xpZW50UmVjdC50b3AgLSB2aWV3LmNsaWVudFRvcDtcbiAgICBlbmdpbmUucG9pbnRlcnMuZGlzcGF0Y2godHlwZSwgeCwgeSwgMCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cbmV4cG9ydCB2YXIgTW91c2VFeHRlbnNpb247XG4oZnVuY3Rpb24gKE1vdXNlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyB2aWV3IH0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyRG93bicpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyVXAnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyTW92ZScpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgTW91c2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShNb3VzZUV4dGVuc2lvbiB8fCAoTW91c2VFeHRlbnNpb24gPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBCb3VuZHM7XG4oZnVuY3Rpb24gKEJvdW5kcykge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWluWDogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG1pblk6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtYXhYOiBOdW1iZXIuTUlOX1ZBTFVFLFxuICAgICAgICAgICAgbWF4WTogTnVtYmVyLk1JTl9WQUxVRSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQm91bmRzLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkoYm91bmRzKSB7XG4gICAgICAgIGJvdW5kcy5taW5YID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1pblkgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWF4WCA9IE51bWJlci5NSU5fVkFMVUU7XG4gICAgICAgIGJvdW5kcy5tYXhZID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICB9XG4gICAgQm91bmRzLnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShib3VuZHMpIHtcbiAgICAgICAgcmV0dXJuIGJvdW5kcy5taW5YID09PSBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWluWSA9PT0gTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1heFggPT09IE51bWJlci5NSU5fVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5tYXhZID09PSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgIH1cbiAgICBCb3VuZHMuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gdG9SZWN0YW5nbGUoYm91bmRzLCByZWN0YW5nbGUpIHtcbiAgICAgICAgY29uc3QgeyBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB9ID0gYm91bmRzO1xuICAgICAgICByZWN0YW5nbGUueCA9IG1pblg7XG4gICAgICAgIHJlY3RhbmdsZS55ID0gbWluWTtcbiAgICAgICAgcmVjdGFuZ2xlLndpZHRoID0gbWF4WCAtIG1pblg7XG4gICAgICAgIHJlY3RhbmdsZS5oZWlnaHQgPSBtYXhZIC0gbWluWTtcbiAgICB9XG4gICAgQm91bmRzLnRvUmVjdGFuZ2xlID0gdG9SZWN0YW5nbGU7XG4gICAgZnVuY3Rpb24gdGVzdFgoYm91bmRzLCB4KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFggPSB0ZXN0WDtcbiAgICBmdW5jdGlvbiB0ZXN0WShib3VuZHMsIHkpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0WSA9IHRlc3RZO1xuICAgIGZ1bmN0aW9uIHRlc3QoYm91bmRzLCB4LCB5KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3QgPSB0ZXN0O1xuICAgIGZ1bmN0aW9uIHRlc3RQb2ludChib3VuZHMsIHBvaW50KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RQb2ludCA9IHRlc3RQb2ludDtcbn0pKEJvdW5kcyB8fCAoQm91bmRzID0ge30pKTtcbiIsImV4cG9ydCB2YXIgQ29sb3JUcmFuc2Zvcm07XG4oZnVuY3Rpb24gKENvbG9yVHJhbnNmb3JtKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbHBoYU11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICByZWRNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgZ3JlZW5NdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYmx1ZU11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBhbHBoYU9mZnNldDogMCxcbiAgICAgICAgICAgIHJlZE9mZnNldDogMCxcbiAgICAgICAgICAgIGdyZWVuT2Zmc2V0OiAwLFxuICAgICAgICAgICAgYmx1ZU9mZnNldDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KGN0KSB7XG4gICAgICAgIHJldHVybiBjdC5yZWRNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmJsdWVNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LnJlZE9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5PZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmJsdWVPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmFscGhhT2Zmc2V0ID09PSAwO1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5V2l0aEFscGhhKGN0KSB7XG4gICAgICAgIHJldHVybiBjdC5yZWRNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmJsdWVNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5yZWRPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmdyZWVuT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ibHVlT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU9mZnNldCA9PT0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eVdpdGhBbHBoYSA9IGlzRW1wdHlXaXRoQWxwaGE7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkoY3QpIHtcbiAgICAgICAgY3QucmVkTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LmdyZWVuTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LmJsdWVNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuYWxwaGFNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QucmVkT2Zmc2V0ID0gMDtcbiAgICAgICAgY3QuZ3JlZW5PZmZzZXQgPSAwO1xuICAgICAgICBjdC5ibHVlT2Zmc2V0ID0gMDtcbiAgICAgICAgY3QuYWxwaGFPZmZzZXQgPSAwO1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoZnJvbSwgdG8pIHtcbiAgICAgICAgdG8uYWxwaGFNdWx0aXBsaWVyID0gZnJvbS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIHRvLnJlZE11bHRpcGxpZXIgPSBmcm9tLnJlZE11bHRpcGxpZXI7XG4gICAgICAgIHRvLmdyZWVuTXVsdGlwbGllciA9IGZyb20uZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICB0by5ibHVlTXVsdGlwbGllciA9IGZyb20uYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIHRvLmFscGhhT2Zmc2V0ID0gZnJvbS5hbHBoYU9mZnNldDtcbiAgICAgICAgdG8ucmVkT2Zmc2V0ID0gZnJvbS5yZWRPZmZzZXQ7XG4gICAgICAgIHRvLmdyZWVuT2Zmc2V0ID0gZnJvbS5ncmVlbk9mZnNldDtcbiAgICAgICAgdG8uYmx1ZU9mZnNldCA9IGZyb20uYmx1ZU9mZnNldDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gY29uY2F0KGN0MSwgY3QwLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgYWxwaGFNdWx0aXBsaWVyID0gY3QxLmFscGhhTXVsdGlwbGllciAqIGN0MC5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IHJlZE11bHRpcGxpZXIgPSBjdDEucmVkTXVsdGlwbGllciAqIGN0MC5yZWRNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBncmVlbk11bHRpcGxpZXIgPSBjdDEuZ3JlZW5NdWx0aXBsaWVyICogY3QwLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgYmx1ZU11bHRpcGxpZXIgPSBjdDEuYmx1ZU11bHRpcGxpZXIgKiBjdDAuYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGFscGhhT2Zmc2V0ID0gY3QxLmFscGhhTXVsdGlwbGllciAqIGN0MC5hbHBoYU9mZnNldCArIGN0MS5hbHBoYU9mZnNldDtcbiAgICAgICAgY29uc3QgcmVkT2Zmc2V0ID0gY3QxLnJlZE11bHRpcGxpZXIgKiBjdDAucmVkT2Zmc2V0ICsgY3QxLnJlZE9mZnNldDtcbiAgICAgICAgY29uc3QgZ3JlZW5PZmZzZXQgPSBjdDEuZ3JlZW5NdWx0aXBsaWVyICogY3QwLmdyZWVuT2Zmc2V0ICsgY3QxLmdyZWVuT2Zmc2V0O1xuICAgICAgICBjb25zdCBibHVlT2Zmc2V0ID0gY3QxLmJsdWVNdWx0aXBsaWVyICogY3QwLmJsdWVPZmZzZXQgKyBjdDEuYmx1ZU9mZnNldDtcbiAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSByZWRNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSBibHVlTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gYWxwaGFPZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSByZWRPZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IGdyZWVuT2Zmc2V0O1xuICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGJsdWVPZmZzZXQ7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmNvbmNhdCA9IGNvbmNhdDtcbn0pKENvbG9yVHJhbnNmb3JtIHx8IChDb2xvclRyYW5zZm9ybSA9IHt9KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbG9yLXRyYW5zZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2JvdW5kcyc7XG5leHBvcnQgKiBmcm9tICcuL21hdHJpeCc7XG5leHBvcnQgKiBmcm9tICcuL3BvaW50JztcbmV4cG9ydCAqIGZyb20gJy4vcmVjdGFuZ2xlJztcbiIsImV4cG9ydCB2YXIgTWF0cml4O1xuKGZ1bmN0aW9uIChNYXRyaXgpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGE6IDEsXG4gICAgICAgICAgICBiOiAwLFxuICAgICAgICAgICAgYzogMCxcbiAgICAgICAgICAgIGQ6IDEsXG4gICAgICAgICAgICB0eDogMCxcbiAgICAgICAgICAgIHR5OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBNYXRyaXguZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KG1hdHJpeCkge1xuICAgICAgICByZXR1cm4gbWF0cml4LmEgPT09IDFcbiAgICAgICAgICAgICYmIG1hdHJpeC5iID09PSAwXG4gICAgICAgICAgICAmJiBtYXRyaXguYyA9PT0gMFxuICAgICAgICAgICAgJiYgbWF0cml4LmQgPT09IDFcbiAgICAgICAgICAgICYmIG1hdHJpeC50eCA9PT0gMFxuICAgICAgICAgICAgJiYgbWF0cml4LnR5ID09PSAwO1xuICAgIH1cbiAgICBNYXRyaXguaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkobWF0cml4KSB7XG4gICAgICAgIG1hdHJpeC5hID0gMTtcbiAgICAgICAgbWF0cml4LmIgPSAwO1xuICAgICAgICBtYXRyaXguYyA9IDA7XG4gICAgICAgIG1hdHJpeC5kID0gMTtcbiAgICAgICAgbWF0cml4LnR4ID0gMDtcbiAgICAgICAgbWF0cml4LnR5ID0gMDtcbiAgICB9XG4gICAgTWF0cml4LnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gY29weShmcm9tLCB0bykge1xuICAgICAgICB0by5hID0gZnJvbS5hO1xuICAgICAgICB0by5iID0gZnJvbS5iO1xuICAgICAgICB0by5jID0gZnJvbS5jO1xuICAgICAgICB0by5kID0gZnJvbS5kO1xuICAgICAgICB0by50eCA9IGZyb20udHg7XG4gICAgICAgIHRvLnR5ID0gZnJvbS50eTtcbiAgICB9XG4gICAgTWF0cml4LmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIGNvbmNhdChtYXRyaXgwLCBtYXRyaXgxLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgYSA9IG1hdHJpeDEuYSAqIG1hdHJpeDAuYSArIG1hdHJpeDEuYiAqIG1hdHJpeDAuYztcbiAgICAgICAgY29uc3QgYiA9IG1hdHJpeDEuYSAqIG1hdHJpeDAuYiArIG1hdHJpeDEuYiAqIG1hdHJpeDAuZDtcbiAgICAgICAgY29uc3QgYyA9IG1hdHJpeDEuYyAqIG1hdHJpeDAuYSArIG1hdHJpeDEuZCAqIG1hdHJpeDAuYztcbiAgICAgICAgY29uc3QgZCA9IG1hdHJpeDEuYyAqIG1hdHJpeDAuYiArIG1hdHJpeDEuZCAqIG1hdHJpeDAuZDtcbiAgICAgICAgY29uc3QgdHggPSBtYXRyaXgxLnR4ICogbWF0cml4MC5hICsgbWF0cml4MS50eSAqIG1hdHJpeDAuYyArIG1hdHJpeDAudHg7XG4gICAgICAgIGNvbnN0IHR5ID0gbWF0cml4MS50eCAqIG1hdHJpeDAuYiArIG1hdHJpeDEudHkgKiBtYXRyaXgwLmQgKyBtYXRyaXgwLnR5O1xuICAgICAgICByZXN1bHQuYSA9IGE7XG4gICAgICAgIHJlc3VsdC5iID0gYjtcbiAgICAgICAgcmVzdWx0LmMgPSBjO1xuICAgICAgICByZXN1bHQuZCA9IGQ7XG4gICAgICAgIHJlc3VsdC50eCA9IHR4O1xuICAgICAgICByZXN1bHQudHkgPSB0eTtcbiAgICB9XG4gICAgTWF0cml4LmNvbmNhdCA9IGNvbmNhdDtcbiAgICBmdW5jdGlvbiBnZXREZXRlcm1pbmFudChtYXRyaXgpIHtcbiAgICAgICAgcmV0dXJuIG1hdHJpeC5hICogbWF0cml4LmQgLSBtYXRyaXguYiAqIG1hdHJpeC5jO1xuICAgIH1cbiAgICBNYXRyaXguZ2V0RGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudDtcbiAgICBmdW5jdGlvbiBpbnZlcnQobWF0cml4LCByZXN1bHQpIHtcbiAgICAgICAgbGV0IGRldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KTtcbiAgICAgICAgaWYgKGRldGVybWluYW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQuYSA9IDA7XG4gICAgICAgICAgICByZXN1bHQuYiA9IDA7XG4gICAgICAgICAgICByZXN1bHQuYyA9IDA7XG4gICAgICAgICAgICByZXN1bHQuZCA9IDA7XG4gICAgICAgICAgICByZXN1bHQudHggPSAtbWF0cml4LnR4O1xuICAgICAgICAgICAgcmVzdWx0LnR5ID0gLW1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRldGVybWluYW50ID0gMS4wIC8gZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuYSA9IG1hdHJpeC5hICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuYiA9IC1tYXRyaXguYiAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAtbWF0cml4LmMgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gbWF0cml4LmQgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC50eCA9IC1yZXN1bHQuYSAqIG1hdHJpeC50eCAtIHJlc3VsdC5jICogbWF0cml4LnR5O1xuICAgICAgICAgICAgcmVzdWx0LnR5ID0gLXJlc3VsdC5iICogbWF0cml4LnR4IC0gcmVzdWx0LmQgKiBtYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTWF0cml4LmludmVydCA9IGludmVydDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmVzdWx0LnggPSB4ICogbWF0cml4LmEgKyB5ICogbWF0cml4LmMgKyBtYXRyaXgudHg7XG4gICAgICAgIHJlc3VsdC55ID0geCAqIG1hdHJpeC5iICsgeSAqIG1hdHJpeC5kICsgbWF0cml4LnR5O1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQgPSB0cmFuc2Zvcm1Qb2ludDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Qb2ludExvY2FsKG1hdHJpeCwgcG9pbnQsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICByZXN1bHQueCA9IHggKiBtYXRyaXguYSArIHkgKiBtYXRyaXguYztcbiAgICAgICAgcmVzdWx0LnkgPSB4ICogbWF0cml4LmIgKyB5ICogbWF0cml4LmQ7XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludExvY2FsID0gdHJhbnNmb3JtUG9pbnRMb2NhbDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1JbnZlcnNlUG9pbnQobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGxldCBkZXRlcm1pbmFudCA9IGdldERldGVybWluYW50KG1hdHJpeCk7XG4gICAgICAgIGlmIChkZXRlcm1pbmFudCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0LnggPSAtbWF0cml4LnR4O1xuICAgICAgICAgICAgcmVzdWx0LnkgPSAtbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGV0ZXJtaW5hbnQgPSAxIC8gZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICAgICAgcmVzdWx0LnggPSBkZXRlcm1pbmFudCAqIChtYXRyaXguYyAqIChtYXRyaXgudHkgLSB5KSArIG1hdHJpeC5kICogKHggLSBtYXRyaXgudHgpKTtcbiAgICAgICAgICAgIHJlc3VsdC55ID0gZGV0ZXJtaW5hbnQgKiAobWF0cml4LmEgKiAoeSAtIG1hdHJpeC50eSkgKyBtYXRyaXguYiAqIChtYXRyaXgudHggLSB4KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybUludmVyc2VQb2ludCA9IHRyYW5zZm9ybUludmVyc2VQb2ludDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Cb3VuZHMobWF0cml4LCBib3VuZHMsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGEsIGIsIGMsIGQsIHR4LCB0eSwgfSA9IG1hdHJpeDtcbiAgICAgICAgY29uc3QgcnggPSBib3VuZHMueDtcbiAgICAgICAgY29uc3QgcnkgPSBib3VuZHMueTtcbiAgICAgICAgY29uc3QgcnIgPSByeCArIGJvdW5kcy53aWR0aDtcbiAgICAgICAgY29uc3QgcmIgPSByeSArIGJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IG54MSA9IHJ4ICogYSArIHJ5ICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTEgPSByeCAqIGIgKyByeSAqIGQgKyB0eTtcbiAgICAgICAgY29uc3QgbngyID0gcnIgKiBhICsgcnkgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MiA9IHJyICogYiArIHJ5ICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDMgPSByciAqIGEgKyByYiAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkzID0gcnIgKiBiICsgcmIgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54NCA9IHJ4ICogYSArIHJiICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTQgPSByeCAqIGIgKyByYiAqIGQgKyB0eTtcbiAgICAgICAgbGV0IGxlZnQgPSBueDE7XG4gICAgICAgIGlmIChsZWZ0ID4gbngyKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbngyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0ID4gbngzKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbngzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0ID4gbng0KSB7XG4gICAgICAgICAgICBsZWZ0ID0gbng0O1xuICAgICAgICB9XG4gICAgICAgIGxldCB0b3AgPSBueTE7XG4gICAgICAgIGlmICh0b3AgPiBueTIpIHtcbiAgICAgICAgICAgIHRvcCA9IG55MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9wID4gbnkzKSB7XG4gICAgICAgICAgICB0b3AgPSBueTM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcCA+IG55NCkge1xuICAgICAgICAgICAgdG9wID0gbnk0O1xuICAgICAgICB9XG4gICAgICAgIGxldCByaWdodCA9IG54MTtcbiAgICAgICAgaWYgKHJpZ2h0IDwgbngyKSB7XG4gICAgICAgICAgICByaWdodCA9IG54MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgPCBueDMpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbngzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCA8IG54NCkge1xuICAgICAgICAgICAgcmlnaHQgPSBueDQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJvdHRvbSA9IG55MTtcbiAgICAgICAgaWYgKGJvdHRvbSA8IG55Mikge1xuICAgICAgICAgICAgYm90dG9tID0gbnkyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3R0b20gPCBueTMpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55MztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tIDwgbnk0KSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTQ7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnggPSBsZWZ0O1xuICAgICAgICByZXN1bHQueSA9IHRvcDtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgICAgICByZXN1bHQuaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtQm91bmRzID0gdHJhbnNmb3JtQm91bmRzO1xufSkoTWF0cml4IHx8IChNYXRyaXggPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBQb2ludDtcbihmdW5jdGlvbiAoUG9pbnQpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgIH1cbiAgICBQb2ludC5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGxlbmd0aChwb2ludCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH1cbiAgICBQb2ludC5sZW5ndGggPSBsZW5ndGg7XG4gICAgZnVuY3Rpb24gYW5nbGUocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIocG9pbnQueSwgcG9pbnQueCk7XG4gICAgfVxuICAgIFBvaW50LmFuZ2xlID0gYW5nbGU7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShwb2ludCkge1xuICAgICAgICByZXR1cm4gcG9pbnQueCA9PT0gMCAmJiBwb2ludC55ID09PSAwO1xuICAgIH1cbiAgICBQb2ludC5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBlcXVhbHMocG9pbnQwLCBwb2ludDEpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50MC54ID09PSBwb2ludDEueCAmJiBwb2ludDAueSA9PT0gcG9pbnQxLnk7XG4gICAgfVxuICAgIFBvaW50LmVxdWFscyA9IGVxdWFscztcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShwb2ludCkge1xuICAgICAgICBwb2ludC54ID0gMDtcbiAgICAgICAgcG9pbnQueSA9IDA7XG4gICAgfVxuICAgIFBvaW50LnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gY29weShzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICB0YXJnZXQueCA9IHNvdXJjZS54O1xuICAgICAgICB0YXJnZXQueSA9IHNvdXJjZS55O1xuICAgIH1cbiAgICBQb2ludC5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBub3JtYWxpemUocG9pbnQsIHRoaWNrbmVzcykge1xuICAgICAgICBsZXQgdmFsdWUgPSBsZW5ndGgocG9pbnQpO1xuICAgICAgICBpZiAodmFsdWUgPiAwKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaWNrbmVzcyAvIHZhbHVlO1xuICAgICAgICAgICAgcG9pbnQueCAqPSB2YWx1ZTtcbiAgICAgICAgICAgIHBvaW50LnkgKj0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUG9pbnQubm9ybWFsaXplID0gbm9ybWFsaXplO1xuICAgIGZ1bmN0aW9uIGRpc3RhbmNlKHBvaW50MCwgcG9pbnQxKSB7XG4gICAgICAgIGNvbnN0IGR4ID0gcG9pbnQwLnggLSBwb2ludDEueDtcbiAgICAgICAgY29uc3QgZHkgPSBwb2ludDAueSAtIHBvaW50MS55O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICB9XG4gICAgUG9pbnQuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICBmdW5jdGlvbiBpbnRlcnBvbGF0ZShiZWdpbiwgZW5kLCB2YWx1ZSwgcmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdC54ID0gYmVnaW4ueCArIHZhbHVlICogKGVuZC54IC0gYmVnaW4ueCk7XG4gICAgICAgIHJlc3VsdC55ID0gYmVnaW4ueSArIHZhbHVlICogKGVuZC55IC0gYmVnaW4ueSk7XG4gICAgfVxuICAgIFBvaW50LmludGVycG9sYXRlID0gaW50ZXJwb2xhdGU7XG4gICAgZnVuY3Rpb24gcG9sYXIocG9pbnQsIGxlbmd0aCwgYW5nbGUpIHtcbiAgICAgICAgcG9pbnQueCA9IGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKTtcbiAgICAgICAgcG9pbnQueSA9IGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKTtcbiAgICB9XG4gICAgUG9pbnQucG9sYXIgPSBwb2xhcjtcbn0pKFBvaW50IHx8IChQb2ludCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFJlY3RhbmdsZTtcbihmdW5jdGlvbiAoUmVjdGFuZ2xlKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShyZWN0YW5nbGUpIHtcbiAgICAgICAgcmVjdGFuZ2xlLnggPSAwO1xuICAgICAgICByZWN0YW5nbGUueSA9IDA7XG4gICAgICAgIHJlY3RhbmdsZS53aWR0aCA9IDA7XG4gICAgICAgIHJlY3RhbmdsZS5oZWlnaHQgPSAwO1xuICAgIH1cbiAgICBSZWN0YW5nbGUuc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBpbnRlcnNlY3Rpb24oc291cmNlLCB0YXJnZXQsIHJlc3VsdCkge1xuICAgICAgICBsZXQgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB9ID0gc291cmNlO1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGFyZ2V0Lng7XG4gICAgICAgIGNvbnN0IHRvcCA9IHRhcmdldC55O1xuICAgICAgICBjb25zdCByaWdodCA9IHRhcmdldC54ICsgdGFyZ2V0LndpZHRoO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0YXJnZXQueSArIHRhcmdldC5oZWlnaHQ7XG4gICAgICAgIGlmICh4IDwgbGVmdCkge1xuICAgICAgICAgICAgd2lkdGggLT0gbGVmdCAtIHg7XG4gICAgICAgICAgICB4ID0gbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCArIHdpZHRoID4gcmlnaHQpIHtcbiAgICAgICAgICAgIHdpZHRoID0gcmlnaHQgLSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh5IDwgdG9wKSB7XG4gICAgICAgICAgICBoZWlnaHQgLT0gdG9wIC0geTtcbiAgICAgICAgICAgIHkgPSB0b3A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgKyBoZWlnaHQgPiBib3R0b20pIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGJvdHRvbSAtIHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgICAgICAgd2lkdGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC54ID0geDtcbiAgICAgICAgcmVzdWx0LnkgPSB5O1xuICAgICAgICByZXN1bHQud2lkdGggPSB3aWR0aDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbjtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KHJlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlLndpZHRoID09PSAwIHx8IHJlY3RhbmdsZS5oZWlnaHQgPT09IDA7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBjb250YWlucyhyZWN0YW5nbGUsIHBvaW50KSB7XG4gICAgICAgIHJldHVybiByZWN0YW5nbGUueCA8IHBvaW50LnhcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS54ICsgcmVjdGFuZ2xlLndpZHRoID4gcG9pbnQueFxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnkgPCBwb2ludC55XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueSArIHJlY3RhbmdsZS5oZWlnaHQgPiBwb2ludC55O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuY29udGFpbnMgPSBjb250YWlucztcbiAgICBmdW5jdGlvbiByb3VuZChyZWN0YW5nbGUpIHtcbiAgICAgICAgcmVjdGFuZ2xlLnggPSBNYXRoLnJvdW5kKHJlY3RhbmdsZS54KTtcbiAgICAgICAgcmVjdGFuZ2xlLnkgPSBNYXRoLnJvdW5kKHJlY3RhbmdsZS55KTtcbiAgICAgICAgcmVjdGFuZ2xlLndpZHRoID0gTWF0aC5yb3VuZChyZWN0YW5nbGUud2lkdGgpO1xuICAgICAgICByZWN0YW5nbGUuaGVpZ2h0ID0gTWF0aC5yb3VuZChyZWN0YW5nbGUuaGVpZ2h0KTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLnJvdW5kID0gcm91bmQ7XG59KShSZWN0YW5nbGUgfHwgKFJlY3RhbmdsZSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0sIE1hdHJpeCwgUmVjdGFuZ2xlIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBJbWFnZUV4dGVuc2lvbiwgSU1BR0UgfSBmcm9tICcuL2ltYWdlJztcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuY29uc3Qgc2NyZWVuQm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb247XG4oZnVuY3Rpb24gKENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICAgICAgY29uc3QgcGxhdGZvcm0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IHBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgICAgIGlmIChDb2xvclRyYW5zZm9ybS5pc0VtcHR5V2l0aEFscGhhKGNvbG9yVHJhbnNmb3JtKSkge1xuICAgICAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjdXN0b21Db250ZXh0ID0gcGxhdGZvcm0uY3JlYXRlQ3VzdG9tQ29udGV4dCgpO1xuICAgICAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICAgICAgYm91bmRzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybUJvdW5kcyhtYXRyaXgsIGJvdW5kcywgYm91bmRzKTtcbiAgICAgICAgICAgIGlmIChSZWN0YW5nbGUuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2NyZWVuQm91bmRzLndpZHRoID0gY3VzdG9tQ29udGV4dC5jYW52YXMud2lkdGg7XG4gICAgICAgICAgICBzY3JlZW5Cb3VuZHMuaGVpZ2h0ID0gY3VzdG9tQ29udGV4dC5jYW52YXMuaGVpZ2h0O1xuICAgICAgICAgICAgUmVjdGFuZ2xlLmludGVyc2VjdGlvbihib3VuZHMsIHNjcmVlbkJvdW5kcywgYm91bmRzKTtcbiAgICAgICAgICAgIGlmIChSZWN0YW5nbGUuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVjdGFuZ2xlLnJvdW5kKGJvdW5kcyk7XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LnNldFRyYW5zZm9ybSgpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5jbGVhclJlY3QoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGN1c3RvbUNvbnRleHQuZ2V0SW1hZ2VEYXRhKGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnN0IHJtID0gY29sb3JUcmFuc2Zvcm0ucmVkTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IGdtID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3QgYm0gPSBjb2xvclRyYW5zZm9ybS5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IGFtID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3Qgcm8gPSBjb2xvclRyYW5zZm9ybS5yZWRPZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBnbyA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgYm8gPSBjb2xvclRyYW5zZm9ybS5ibHVlT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgYW8gPSBjb2xvclRyYW5zZm9ybS5hbHBoYU9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gaW1hZ2VEYXRhO1xuICAgICAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IGRhdGE7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogcm0gKyBybztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogZ20gKyBnbztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogYm0gKyBibztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogYW0gKyBhbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgYm91bmRzLngsIGJvdW5kcy55KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKGN1c3RvbUNvbnRleHQuY2FudmFzLCBib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCwgYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgcGxhdGZvcm0uZGVzdHJveUN1c3RvbUNvbnRleHQoY3VzdG9tQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgSW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KElNQUdFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiB8fCAoQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VFeHRlbnNpb24sIElNQUdFIH0gZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgdmFyIENhbnZhc0ltYWdlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNJbWFnZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihpbWFnZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBpbWFnZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IGVuZ2luZS5wbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgSW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KElNQUdFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc0ltYWdlRXh0ZW5zaW9uIHx8IChDYW52YXNJbWFnZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCwgUmVzb3VyY2UsIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuZXhwb3J0IGNvbnN0IElNQUdFID0gJ2ltYWdlJztcbmV4cG9ydCB2YXIgSW1hZ2U7XG4oZnVuY3Rpb24gKEltYWdlKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGltYWdlLCBib3VuZHMsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgIGJvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBJbWFnZS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShJbWFnZSB8fCAoSW1hZ2UgPSB7fSkpO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIEltYWdlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChJbWFnZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGhpdFRlc3QoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGxvY2FsIH0gPSBlbmdpbmUucG9pbnRlcnM7XG4gICAgICAgIEltYWdlLmNhbGN1bGF0ZUJvdW5kcyhpbWFnZSwgYm91bmRzLCBlbmdpbmUpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKGJvdW5kcywgbG9jYWwpO1xuICAgIH1cbiAgICBJbWFnZUV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBsb2FkZWQoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLmxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSBSZXNvdXJjZS5nZXRQcm9ncmVzcyhyZXNvdXJjZSk7XG4gICAgICAgIGNvbnRleHQubG9hZGVkID0gISFyZXNvdXJjZT8ubG9hZGVkICYmICEhcmVzb3VyY2U/LmltYWdlO1xuICAgIH1cbiAgICBJbWFnZUV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoSU1BR0UsIGhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KElNQUdFLCBsb2FkZWQpO1xuICAgICAgICBJbWFnZVJlc291cmNlLmluaXQoZW5naW5lKTtcbiAgICB9XG4gICAgSW1hZ2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShJbWFnZUV4dGVuc2lvbiB8fCAoSW1hZ2VFeHRlbnNpb24gPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy1pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy1pbWFnZS1jb2xvcic7XG4iLCJleHBvcnQgdmFyIEltYWdlUmVzb3VyY2U7XG4oZnVuY3Rpb24gKEltYWdlUmVzb3VyY2UpIHtcbiAgICBmdW5jdGlvbiByZXNvbHZlKGFzc2V0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gYXNzZXQuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgICAgc3dpdGNoIChleHRlbnNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3BuZyc6XG4gICAgICAgICAgICBjYXNlICdqcGcnOlxuICAgICAgICAgICAgY2FzZSAnd2VicCc6XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBieXRlc0xvYWRlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNUb3RhbDogMCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gYXNzZXQ7XG4gICAgICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaW1hZ2UgbG9hZGVkOiAke2Fzc2V0fWApO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5pbWFnZSA9IGltYWdlO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdpbWFnZSBsb2FkIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBJbWFnZVJlc291cmNlLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvbHZlKTtcbiAgICB9XG4gICAgSW1hZ2VSZXNvdXJjZS5pbml0ID0gaW5pdDtcbn0pKEltYWdlUmVzb3VyY2UgfHwgKEltYWdlUmVzb3VyY2UgPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmluZyc7XG4iLCJleHBvcnQgdmFyIFN0cmluZ1Jlc291cmNlO1xuKGZ1bmN0aW9uIChTdHJpbmdSZXNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIHJlc29sdmUoYXNzZXQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBleHRlbnNpb24gPSBhc3NldC5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgICBzd2l0Y2ggKGV4dGVuc2lvbikge1xuICAgICAgICAgICAgY2FzZSAndHh0JzpcbiAgICAgICAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0ge1xuICAgICAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNMb2FkZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzVG90YWw6IDAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgYXNzZXQsIHRydWUpO1xuICAgICAgICAgICAgICAgIHhoci5vbnByb2dyZXNzID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuYnl0ZXNMb2FkZWQgPSBlLmxvYWRlZDtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuYnl0ZXNUb3RhbCA9IGUudG90YWw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgc3RyaW5nIGxvYWRlZDogJHthc3NldH1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuZGF0YSA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmJ5dGVzTG9hZGVkID0gcmVzb3VyY2UuYnl0ZXNUb3RhbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5vbmVycm9yID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ3N0cmluZyBsb2FkIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFN0cmluZ1Jlc291cmNlLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvbHZlKTtcbiAgICB9XG4gICAgU3RyaW5nUmVzb3VyY2UuaW5pdCA9IGluaXQ7XG59KShTdHJpbmdSZXNvdXJjZSB8fCAoU3RyaW5nUmVzb3VyY2UgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUmVzb3VyY2UsIENvbnRhaW5lckV4dGVuc2lvbiwgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IFN0cmluZ1Jlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcbmV4cG9ydCBjb25zdCBTQ0VORSA9ICdzY2VuZSc7XG5leHBvcnQgdmFyIFNjZW5lRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChTY2VuZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGxvYWRlZChzY2VuZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUubG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGlmIChzY2VuZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgQ29udGFpbmVyRXh0ZW5zaW9uLmxvYWRlZChzY2VuZSwgZW5naW5lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc3JjIH0gPSBzY2VuZTtcbiAgICAgICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSBSZXNvdXJjZS5nZXRQcm9ncmVzcyhyZXNvdXJjZSk7XG4gICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9ICEhcmVzb3VyY2U/LmxvYWRlZCAmJiAhIXJlc291cmNlPy5kYXRhO1xuICAgICAgICAgICAgaWYgKHJlc291cmNlICYmIHJlc291cmNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5jaGlsZHJlbiA9IEpTT04ucGFyc2UocmVzb3VyY2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBzY2VuZSBwYXJzaW5nIGVycm9yOiAke2UubWVzc2FnZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgU2NlbmVFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KFNDRU5FLCBDb250YWluZXJFeHRlbnNpb24uaGl0VGVzdCk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoU0NFTkUsIENvbnRhaW5lckV4dGVuc2lvbi5yZW5kZXIpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy51cGRhdGUuc2V0KFNDRU5FLCBDb250YWluZXJFeHRlbnNpb24udXBkYXRlKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChTQ0VORSwgbG9hZGVkKTtcbiAgICAgICAgU3RyaW5nUmVzb3VyY2UuaW5pdChlbmdpbmUpO1xuICAgIH1cbiAgICBTY2VuZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFNjZW5lRXh0ZW5zaW9uIHx8IChTY2VuZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJjb25zdCBQSV8yID0gTWF0aC5QSSAqIDI7XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlFbGxpcHNlKGRhdGEsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgcmFkaXVzID0gMCwgcmFkaXVzWCwgcmFkaXVzWSwgfSA9IGRhdGE7XG4gICAgY29uc3QgcnggPSByYWRpdXNYID8/IHJhZGl1cztcbiAgICBjb25zdCByeSA9IHJhZGl1c1kgPz8gcmFkaXVzO1xuICAgIGlmIChyeCA9PT0gMCB8fCByeSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5lbGxpcHNlKHgsIHksIHJ4LCByeSwgMCwgMCwgUElfMik7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhcHBseUNvbW1hbmQoY29tbWFuZCwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gY29tbWFuZDtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbW92ZVRvJzpcbiAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhtb3ZlVG8ueCA/PyAwLCBtb3ZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsaW5lVG8nOlxuICAgICAgICAgICAgY29uc3QgbGluZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKGxpbmVUby54ID8/IDAsIGxpbmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2N1cnZlVG8nOlxuICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8oY3VydmVUby5jeCA/PyAwLCBjdXJ2ZVRvLmN5ID8/IDAsIGN1cnZlVG8ueCA/PyAwLCBjdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3ViaWNDdXJ2ZVRvJzpcbiAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBjb250ZXh0LmJlemllckN1cnZlVG8oY3ViaWNDdXJ2ZVRvLmN4ID8/IDAsIGN1YmljQ3VydmVUby5jeSA/PyAwLCBjdWJpY0N1cnZlVG8uc3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLnN5ID8/IDAsIGN1YmljQ3VydmVUby54ID8/IDAsIGN1YmljQ3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXRoKGRhdGEsIGNvbnRleHQpIHtcbiAgICBpZiAoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IGRhdGFbaV07XG4gICAgICAgIGFwcGx5Q29tbWFuZChjb21tYW5kLCBjb250ZXh0KTtcbiAgICB9XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhcHBseVJlY3RhbmdsZShkYXRhLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHdpZHRoID0gMCwgaGVpZ2h0ID0gMCwgfSA9IGRhdGE7XG4gICAgaWYgKHdpZHRoID09PSAwIHx8IGhlaWdodCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgTWF0cml4LCBQb2ludCwgUmVjdGFuZ2xlLCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgU2hhcGVFeHRlbnNpb24sIFNIQVBFLCBTaGFwZSB9IGZyb20gJy4uL3NoYXBlJztcbmltcG9ydCB7IGFwcGx5UmVjdGFuZ2xlIH0gZnJvbSAnLi9yZWN0YW5nbGUnO1xuaW1wb3J0IHsgYXBwbHlFbGxpcHNlIH0gZnJvbSAnLi9lbGxpcHNlJztcbmltcG9ydCB7IGFwcGx5UGF0aCB9IGZyb20gJy4vcGF0aCc7XG5pbXBvcnQgeyBhcHBseVN0cmluZyB9IGZyb20gJy4vc3RyaW5nJztcbmltcG9ydCB7IHNldEZpbGxTdHlsZSwgc2V0U3Ryb2tlU3R5bGUgfSBmcm9tICcuL3N0eWxlJztcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuY29uc3Qgb2Zmc2V0ID0gUG9pbnQuZW1wdHkoKTtcbmZ1bmN0aW9uIHJlbmRlckdyYXBoaWNzKGRhdGEsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpIHtcbiAgICBjb25zdCB7IGZpbGwsIHN0cm9rZSB9ID0gZGF0YTtcbiAgICBjb25zdCBoYXNGaWxsID0gISFmaWxsIHx8IGZpbGwgPT09IDA7XG4gICAgY29uc3QgaGFzU3Ryb2tlID0gISFzdHJva2UgfHwgc3Ryb2tlID09PSAwO1xuICAgIGlmICghaGFzRmlsbCAmJiAhaGFzU3Ryb2tlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGV4aXN0ID0gdHJ1ZTtcbiAgICBjb25zdCB7IHR5cGUgfSA9IGRhdGE7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICBleGlzdCA9IGFwcGx5UmVjdGFuZ2xlKGRhdGEsIGNvbnRleHQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgICAgICAgZXhpc3QgPSBhcHBseUVsbGlwc2UoZGF0YSwgY29udGV4dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGF0aCc6XG4gICAgICAgICAgICBjb25zdCBwYXRoID0gZGF0YTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGF0aC5kYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlTdHJpbmcocGF0aC5kYXRhLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocGF0aC5kYXRhKSkge1xuICAgICAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlQYXRoKHBhdGguZGF0YSwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKCFleGlzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIHNldEZpbGxTdHlsZShmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbiAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgfVxuICAgIGlmIChoYXNTdHJva2UpIHtcbiAgICAgICAgc2V0U3Ryb2tlU3R5bGUoc3Ryb2tlLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB9XG59XG5leHBvcnQgdmFyIENhbnZhc1NoYXBlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNTaGFwZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihzaGFwZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gc2hhcGU7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBQb2ludC5zZXRFbXB0eShvZmZzZXQpO1xuICAgICAgICBpZiAoUGl2b3QuaGFzVmFsdWVzKHNoYXBlKSkge1xuICAgICAgICAgICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzKHNoYXBlLCBib3VuZHMpO1xuICAgICAgICAgICAgaWYgKFJlY3RhbmdsZS5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmZzZXQueCA9IFBpdm90LmdldFgoc2hhcGUsIGJvdW5kcy53aWR0aCk7XG4gICAgICAgICAgICBvZmZzZXQueSA9IFBpdm90LmdldFkoc2hhcGUsIGJvdW5kcy53aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gZW5naW5lLnBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChQb2ludC5pc0VtcHR5KG9mZnNldCkpIHtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludExvY2FsKG1hdHJpeCwgb2Zmc2V0LCBvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCArIG9mZnNldC54LCBtYXRyaXgudHkgKyBvZmZzZXQueSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZW5kZXJHcmFwaGljcyhkYXRhW2ldLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dDJkLCBlbmdpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmVuZGVyR3JhcGhpY3MoZGF0YSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQyZCwgZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNTaGFwZUV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgU2hhcGVFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KFNIQVBFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNTaGFwZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc1NoYXBlRXh0ZW5zaW9uIHx8IChDYW52YXNTaGFwZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBHcmFwaGljc1N0cmluZ1JlYWRlciB9IGZyb20gJy4uL2RhdGEvc3RyaW5nJztcbmltcG9ydCB7IGFwcGx5Q29tbWFuZCB9IGZyb20gJy4vcGF0aCc7XG5jb25zdCByZWFkZXIgPSBuZXcgR3JhcGhpY3NTdHJpbmdSZWFkZXIoKTtcbmV4cG9ydCBmdW5jdGlvbiBhcHBseVN0cmluZyhkYXRhLCBjb250ZXh0KSB7XG4gICAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgcmVhZGVyLnNldFBhdGgoZGF0YSk7XG4gICAgd2hpbGUgKHJlYWRlci5yZWFkTmV4dCgpKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSByZWFkZXIuZ2V0Q29tbWFuZCgpO1xuICAgICAgICBpZiAoY29tbWFuZCkge1xuICAgICAgICAgICAgYXBwbHlDb21tYW5kKGNvbW1hbmQsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBDYW52YXNQYXR0ZXJucyB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5jb25zdCBlbXB0eU1hdHJpeCA9IE1hdHJpeC5lbXB0eSgpO1xuY29uc3QgZW1wdHlBcnJheSA9IFtdO1xuZnVuY3Rpb24gZ2V0Q2FudmFzUGF0dGVybihmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgaWYgKHR5cGVvZiBmaWxsID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGZpbGwsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBmaWxsID09PSAnb2JqZWN0Jykge1xuICAgICAgICBzd2l0Y2ggKGZpbGwudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc29saWQnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHNvbGlkID0gZmlsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKHNvbGlkLmNvbG9yID8/IDAsIHNvbGlkLmFscGhhID8/IDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGNhc2UgJ2xpbmVhcic6XG4gICAgICAgICAgICAgICAgY29uc3QgeyBtYXRyaXg6IG1sID0gZW1wdHlNYXRyaXgsIGNvbG9yczogY2wgPSBlbXB0eUFycmF5LCBhbHBoYXM6IGFsID0gZW1wdHlBcnJheSwgcmF0aW9zOiBybCA9IGVtcHR5QXJyYXksIH0gPSBmaWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5saW5lYXJHcmFkaWVudFBhdHRlcm4obWwsIGNsLCBhbCwgcmwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGNhc2UgJ3JhZGlhbCc6XG4gICAgICAgICAgICAgICAgY29uc3QgeyBtYXRyaXg6IG1yID0gZW1wdHlNYXRyaXgsIGNvbG9yczogY3IgPSBlbXB0eUFycmF5LCBhbHBoYXM6IGFyID0gZW1wdHlBcnJheSwgcmF0aW9zOiByciA9IGVtcHR5QXJyYXksIH0gPSBmaWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5yYWRpYWxHcmFkaWVudFBhdHRlcm4obXIsIGNyLCBhciwgcnIsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGNhc2UgJ2JpdG1hcCc6XG4gICAgICAgICAgICAgICAgY29uc3QgYml0bWFwRmlsbCA9IGZpbGw7XG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXBlYXQgPSB0cnVlLCBzcmMgfSA9IGJpdG1hcEZpbGw7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMuYml0bWFwUGF0dGVybihyZXNvdXJjZS5pbWFnZSwgcmVwZWF0LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbGxTdHlsZShmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBnZXRDYW52YXNQYXR0ZXJuKGZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0cm9rZVN0eWxlKHN0cm9rZSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGlmICh0eXBlb2Ygc3Ryb2tlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKHN0cm9rZSwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGNvbnRleHQubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgICAgIGNvbnRleHQubGluZUpvaW4gPSAncm91bmQnO1xuICAgICAgICBjb250ZXh0Lm1pdGVyTGltaXQgPSAxMDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHN0cm9rZSA9PT0gJ29iamVjdCcgJiYgc3Ryb2tlLmZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gZ2V0Q2FudmFzUGF0dGVybihzdHJva2UuZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gc3Ryb2tlLnRoaWNrbmVzcyA/PyAxO1xuICAgICAgICBjb250ZXh0LmxpbmVDYXAgPSBzdHJva2UuY2FwcyA/PyAncm91bmQnO1xuICAgICAgICBjb250ZXh0LmxpbmVKb2luID0gc3Ryb2tlLmpvaW50cyA/PyAncm91bmQnO1xuICAgICAgICBjb250ZXh0Lm1pdGVyTGltaXQgPSBzdHJva2UubWl0ZXJMaW1pdCA/PyAxMDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IFBhdGhDb21tYW5kIH0gZnJvbSAnLi9wYXRoJztcbmltcG9ydCB7IEdyYXBoaWNzU3RyaW5nIH0gZnJvbSAnLi9zdHJpbmcnO1xuZXhwb3J0IHZhciBSZWN0YW5nbGVEYXRhO1xuKGZ1bmN0aW9uIChSZWN0YW5nbGVEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgd2lkdGggPSAwLCBoZWlnaHQgPSAwLCB9ID0gZGF0YTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4LCB5KTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQpO1xuICAgIH1cbiAgICBSZWN0YW5nbGVEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFJlY3RhbmdsZURhdGEgfHwgKFJlY3RhbmdsZURhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBFbGxpcHNlRGF0YTtcbihmdW5jdGlvbiAoRWxsaXBzZURhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCByYWRpdXMgPSAwLCByYWRpdXNYLCByYWRpdXNZLCB9ID0gZGF0YTtcbiAgICAgICAgY29uc3QgcnggPSByYWRpdXNYID8/IHJhZGl1cztcbiAgICAgICAgY29uc3QgcnkgPSByYWRpdXNZID8/IHJhZGl1cztcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4IC0gcngsIHkgLSByeSk7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCArIHJ4LCB5ICsgcnkpO1xuICAgIH1cbiAgICBFbGxpcHNlRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShFbGxpcHNlRGF0YSB8fCAoRWxsaXBzZURhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBQYXRoRGF0YTtcbihmdW5jdGlvbiAoUGF0aERhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aERhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHBhdGhEYXRhO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tYW5kID0gZGF0YVtpXTtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBQYXRoRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShQYXRoRGF0YSB8fCAoUGF0aERhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBHcmFwaGljc0RhdGE7XG4oZnVuY3Rpb24gKEdyYXBoaWNzRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBkYXRhO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICAgICAgUmVjdGFuZ2xlRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgICAgICAgICAgIEVsbGlwc2VEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGF0aCc6XG4gICAgICAgICAgICAgICAgUGF0aERhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc0RhdGEgfHwgKEdyYXBoaWNzRGF0YSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdAamVuZy9nZW9tJztcbmV4cG9ydCB2YXIgUGF0aENvbW1hbmQ7XG4oZnVuY3Rpb24gKFBhdGhDb21tYW5kKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKHBhdGgsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IHBhdGg7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbW92ZVRvJzpcbiAgICAgICAgICAgIGNhc2UgJ2xpbmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIG1vdmVUby54ID8/IDAsIG1vdmVUby55ID8/IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3VydmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdXJ2ZVRvLmN4ID8/IDAsIGN1cnZlVG8uY3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdXJ2ZVRvLnggPz8gMCwgY3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3ViaWNDdXJ2ZVRvJzpcbiAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLmN4ID8/IDAsIGN1YmljQ3VydmVUby5jeSA/PyAwKTtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby5zeCA/PyAwLCBjdWJpY0N1cnZlVG8uc3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8ueCA/PyAwLCBjdWJpY0N1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUGF0aENvbW1hbmQuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoUGF0aENvbW1hbmQgfHwgKFBhdGhDb21tYW5kID0ge30pKTtcbiIsImltcG9ydCB7IFBhdGhDb21tYW5kLCB9IGZyb20gJy4vcGF0aCc7XG5jb25zdCBOVU1CRVJTX0NPVU5UID0ge1xuICAgIE06IDIsXG4gICAgbTogMixcbiAgICBMOiAyLFxuICAgIGw6IDIsXG4gICAgSDogMSxcbiAgICBoOiAxLFxuICAgIFY6IDEsXG4gICAgdjogMSxcbiAgICBDOiA2LFxuICAgIGM6IDYsXG4gICAgUzogNCxcbiAgICBzOiA0LFxuICAgIFE6IDQsXG4gICAgcTogNCxcbiAgICBUOiAyLFxuICAgIHQ6IDIsXG59O1xuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU3RyaW5nU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gJyc7XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IG51bGw7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICB0aGlzLmNvbW1hbmRSZWdleCA9IC9bTW1MbEhoVnZDY1NzUXFUdF0vZztcbiAgICAgICAgdGhpcy5udW1iZXJSZWdleCA9IC9bLStdP1tcXGQuXSsvZztcbiAgICB9XG4gICAgc2V0UGF0aChwYXRoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMuY29tbWFuZFJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgfVxuICAgIGdldENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmQ7XG4gICAgfVxuICAgIGdldEJ1ZmZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyO1xuICAgIH1cbiAgICByZWFkTmV4dCgpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZE1hdGNoID0gdGhpcy5jb21tYW5kUmVnZXguZXhlYyh0aGlzLnBhdGgpO1xuICAgICAgICBpZiAoY29tbWFuZE1hdGNoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBjb21tYW5kTWF0Y2hbMF07XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IE5VTUJFUlNfQ09VTlRbdGhpcy5jb21tYW5kXTtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyUmVnZXgubGFzdEluZGV4ID0gY29tbWFuZE1hdGNoLmluZGV4O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbnVtYmVyTWF0Y2ggPSB0aGlzLm51bWJlclJlZ2V4LmV4ZWModGhpcy5wYXRoKTtcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWZmZXJbaV0gPSBwYXJzZUZsb2F0KG51bWJlck1hdGNoWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR3JhcGhpY3NTdHJpbmdSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0cmVhbSA9IG5ldyBHcmFwaGljc1N0cmluZ1N0cmVhbSgpO1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSB7IHR5cGU6ICdtb3ZlVG8nIH07XG4gICAgICAgIHRoaXMuY29tbWFuZEV4aXN0cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0WSA9IDA7XG4gICAgICAgIHRoaXMubGFzdENYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0Q1kgPSAwO1xuICAgIH1cbiAgICBzZXRQYXRoKHBhdGgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0uc2V0UGF0aChwYXRoKTtcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgICAgIHRoaXMubGFzdFkgPSAwO1xuICAgICAgICB0aGlzLmxhc3RDWCA9IDA7XG4gICAgICAgIHRoaXMubGFzdENZID0gMDtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gZmFsc2U7XG4gICAgfVxuICAgIGdldENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRFeGlzdHMgPyB0aGlzLmNvbW1hbmQgOiBudWxsO1xuICAgIH1cbiAgICByZWFkTmV4dCgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0ucmVhZE5leHQoKTtcbiAgICAgICAgdGhpcy5wYXJzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kRXhpc3RzO1xuICAgIH1cbiAgICBwYXJzZSgpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMuc3RyZWFtLmdldENvbW1hbmQoKTtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gISFjb21tYW5kO1xuICAgICAgICBpZiAoIXRoaXMuY29tbWFuZEV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuc3RyZWFtLmdldEJ1ZmZlcigpO1xuICAgICAgICBjb25zdCBbZTAsIGUxLCBlMiwgZTMsIGU0LCBlNSxdID0gYnVmZmVyO1xuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbW92ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ21vdmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gZTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IGU0O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGU1O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTQgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGU1ICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IHRoaXMubGFzdENZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGUzICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gdGhpcy5sYXN0Q1k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IHJlYWRlciA9IG5ldyBHcmFwaGljc1N0cmluZ1JlYWRlcigpO1xuZXhwb3J0IHZhciBHcmFwaGljc1N0cmluZztcbihmdW5jdGlvbiAoR3JhcGhpY3NTdHJpbmcpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aCwgYm91bmRzKSB7XG4gICAgICAgIHJlYWRlci5zZXRQYXRoKHBhdGgpO1xuICAgICAgICB3aGlsZSAocmVhZGVyLnJlYWROZXh0KCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSByZWFkZXIuZ2V0Q29tbWFuZCgpO1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc1N0cmluZyB8fCAoR3JhcGhpY3NTdHJpbmcgPSB7fSkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhpY3Mge1xuICAgIGNvbnN0cnVjdG9yKHNoYXBlKSB7XG4gICAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZTtcbiAgICB9XG4gICAgYmVnaW5GaWxsKGNvbG9yID0gMCwgYWxwaGEgPSAxKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBiZWdpbkJpdG1hcEZpbGwoc3JjLCBtYXRyaXgsIHJlcGVhdCA9IHRydWUsIHNtb290aCA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdiaXRtYXAnLFxuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgcmVwZWF0LFxuICAgICAgICAgICAgc21vb3RoLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBiZWdpbkdyYWRpZW50RmlsbCh0eXBlLCBjb2xvciwgYWxwaGEsIHJhdGlvLCBtYXRyaXgsIHNwcmVhZCA9ICdyZXBlYXQnLCBpbnRlcnBvbGF0aW9uID0gJ3JnYicsIGZvY2FsUG9pbnRSYXRpbyA9IDApIHtcbiAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHNwcmVhZCxcbiAgICAgICAgICAgIGludGVycG9sYXRpb24sXG4gICAgICAgICAgICBmb2NhbFBvaW50UmF0aW8sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxpbmVTdHlsZSh0aGlja25lc3MgPSAwLCBjb2xvciA9IDAsIGFscGhhID0gMSwgcGl4ZWxIaW50aW5nID0gZmFsc2UsIHNjYWxlTW9kZSA9ICdub25lJywgY2FwcyA9ICdyb3VuZCcsIGpvaW50cyA9ICdyb3VuZCcsIG1pdGVyTGltaXQgPSAzKSB7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0ge1xuICAgICAgICAgICAgdGhpY2tuZXNzLFxuICAgICAgICAgICAgcGl4ZWxIaW50aW5nLFxuICAgICAgICAgICAgc2NhbGVNb2RlLFxuICAgICAgICAgICAgY2FwcyxcbiAgICAgICAgICAgIGpvaW50cyxcbiAgICAgICAgICAgIG1pdGVyTGltaXQsXG4gICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxpbmVHcmFkaWVudFN0eWxlKHR5cGUsIGNvbG9yLCBhbHBoYSwgcmF0aW8sIG1hdHJpeCwgc3ByZWFkID0gJ3JlcGVhdCcsIGludGVycG9sYXRpb24gPSAncmdiJywgZm9jYWxQb2ludFJhdGlvID0gMCkge1xuICAgICAgICBpZiAoIXRoaXMuc3Ryb2tlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHJva2UuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICBzcHJlYWQsXG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9uLFxuICAgICAgICAgICAgZm9jYWxQb2ludFJhdGlvLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsaW5lQml0bWFwU3R5bGUoc3JjLCBtYXRyaXgsIHJlcGVhdCA9IHRydWUsIHNtb290aCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy5zdHJva2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0cm9rZS5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ2JpdG1hcCcsXG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICBzbW9vdGgsXG4gICAgICAgIH07XG4gICAgfVxuICAgIG1vdmVUbyh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICBwYXRoLnB1c2goeyB0eXBlOiAnbW92ZVRvJywgeCwgeSB9KTtcbiAgICB9XG4gICAgbGluZVRvKHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goeyB0eXBlOiAnbGluZVRvJywgeCwgeSB9KTtcbiAgICB9XG4gICAgY3VydmVUbyhjeCwgY3ksIHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1cnZlVG8nLCBjeCwgY3ksIHgsIHksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjdWJpY0N1cnZlVG8oY3gsIGN5LCBzeCwgc3ksIHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1cnZlVG8nLCBjeCwgY3ksIHN4LCBzeSwgeCwgeSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdSb3VuZFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgZWxsaXBzZVdpZHRoID0gMCwgZWxsaXBzZUhlaWdodCA9IDApIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnN0IHcgPSBlbGxpcHNlV2lkdGg7XG4gICAgICAgIGNvbnN0IGggPSBlbGxpcHNlSGVpZ2h0O1xuICAgICAgICBjb25zdCBrID0gMC41NTIyODQ4O1xuICAgICAgICBjb25zdCBveCA9ICh3IC8gMikgKiBrO1xuICAgICAgICBjb25zdCBveSA9IChoIC8gMikgKiBrO1xuICAgICAgICBjb25zdCB4ZSA9IHggKyB3O1xuICAgICAgICBjb25zdCB5ZSA9IHkgKyBoO1xuICAgICAgICBjb25zdCB4bSA9IHggKyB3IC8gMjtcbiAgICAgICAgY29uc3QgeW0gPSB5ICsgaCAvIDI7XG4gICAgICAgIGNvbnN0IGR4ID0gd2lkdGggLSB3O1xuICAgICAgICBjb25zdCBkeSA9IGhlaWdodCAtIGg7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbW92ZVRvJyxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5OiB5bSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4LFxuICAgICAgICAgICAgY3k6IHltIC0gb3ksXG4gICAgICAgICAgICBzeDogeG0gLSBveCxcbiAgICAgICAgICAgIHN5OiB5LFxuICAgICAgICAgICAgeDogeG0sXG4gICAgICAgICAgICB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeG0gKyBkeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeG0gKyBveCArIGR4LFxuICAgICAgICAgICAgY3k6IHksXG4gICAgICAgICAgICBzeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHN5OiB5bSAtIG95LFxuICAgICAgICAgICAgeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHk6IHltLFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHk6IHltICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeGUgKyBkeCxcbiAgICAgICAgICAgIGN5OiB5bSArIG95ICsgZHksXG4gICAgICAgICAgICBzeDogeG0gKyBveCArIGR4LFxuICAgICAgICAgICAgc3k6IHllICsgZHksXG4gICAgICAgICAgICB4OiB4bSArIGR4LFxuICAgICAgICAgICAgeTogeWUgKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhtLFxuICAgICAgICAgICAgeTogeWUgKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4bSAtIG94LFxuICAgICAgICAgICAgY3k6IHllICsgZHksXG4gICAgICAgICAgICBzeDogeCxcbiAgICAgICAgICAgIHN5OiB5bSArIG95ICsgZHksXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeTogeW0gKyBkeSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAncmVjdGFuZ2xlJztcbiAgICAgICAgZGF0YS54ID0geDtcbiAgICAgICAgZGF0YS55ID0geTtcbiAgICAgICAgZGF0YS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBkYXRhLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgZHJhd0NpcmNsZSh4LCB5LCByYWRpdXMpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAnZWxsaXBzZSc7XG4gICAgICAgIGRhdGEueCA9IHg7XG4gICAgICAgIGRhdGEueSA9IHk7XG4gICAgICAgIGRhdGEucmFkaXVzID0gcmFkaXVzO1xuICAgIH1cbiAgICBkcmF3RWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ2VsbGlwc2UnO1xuICAgICAgICBkYXRhLnJhZGl1c1ggPSB3aWR0aCAvIDI7XG4gICAgICAgIGRhdGEucmFkaXVzWSA9IGhlaWdodCAvIDI7XG4gICAgICAgIGRhdGEueCA9IHggLSBkYXRhLnJhZGl1c1g7XG4gICAgICAgIGRhdGEueSA9IHkgLSBkYXRhLnJhZGl1c1k7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5zaGFwZS5kYXRhO1xuICAgIH1cbiAgICBjcmVhdGVEYXRhKCkge1xuICAgICAgICBjb25zdCB7IHNoYXBlLCBmaWxsLCBzdHJva2UgfSA9IHRoaXM7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNoYXBlLmRhdGEpKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHNoYXBlLmRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBzaGFwZS5kYXRhID0gW3NoYXBlLmRhdGFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hhcGUuZGF0YSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyYXBoaWNzRGF0YSA9IHsgdHlwZTogJ3BhdGgnLCBmaWxsLCBzdHJva2UgfTtcbiAgICAgICAgc2hhcGUuZGF0YS5wdXNoKGdyYXBoaWNzRGF0YSk7XG4gICAgICAgIHJldHVybiBncmFwaGljc0RhdGE7XG4gICAgfVxuICAgIGJlZ2luUGF0aCgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLmRhdGEgPSBbXTtcbiAgICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcbiAgICB9XG4gICAgZ2V0UGF0aCgpIHtcbiAgICAgICAgY29uc3QgeyBzaGFwZSB9ID0gdGhpcztcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNoYXBlLmRhdGEpIHx8ICFzaGFwZS5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gc2hhcGUuZGF0YVtzaGFwZS5kYXRhLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5kYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YS5kYXRhO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vZGF0YS9kYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9wYXRoJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9zdHJpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL3N0eWxlJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JhcGhpY3MnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFwZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy9zaGFwZSc7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQm91bmRzLCBSZWN0YW5nbGUgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgR3JhcGhpY3NEYXRhIH0gZnJvbSAnLi9kYXRhL2RhdGEnO1xuaW1wb3J0IEdyYXBoaWNzIGZyb20gJy4vZ3JhcGhpY3MnO1xuZXhwb3J0IGNvbnN0IFNIQVBFID0gJ3NoYXBlJztcbmNvbnN0IGJvdW5kcyA9IEJvdW5kcy5lbXB0eSgpO1xuZXhwb3J0IHZhciBTaGFwZTtcbihmdW5jdGlvbiAoU2hhcGUpIHtcbiAgICBmdW5jdGlvbiBnZXRHcmFwaGljcyhzaGFwZSkge1xuICAgICAgICByZXR1cm4gbmV3IEdyYXBoaWNzKHNoYXBlKTtcbiAgICB9XG4gICAgU2hhcGUuZ2V0R3JhcGhpY3MgPSBnZXRHcmFwaGljcztcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoc2hhcGUsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHNoYXBlO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEJvdW5kcy5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhW2ldLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJvdW5kcy5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdpZHRoID0gYm91bmRzLm1heFggLSBib3VuZHMubWluWDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gYm91bmRzLm1heFkgLSBib3VuZHMubWluWTtcbiAgICAgICAgY29uc3QgeCA9IGJvdW5kcy5taW5YICsgUGl2b3QuZ2V0WChzaGFwZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gYm91bmRzLm1pblkgKyBQaXZvdC5nZXRZKHNoYXBlLCBoZWlnaHQpO1xuICAgICAgICByZXN1bHQueCA9IHg7XG4gICAgICAgIHJlc3VsdC55ID0geTtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIFNoYXBlLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFNoYXBlIHx8IChTaGFwZSA9IHt9KSk7XG5jb25zdCByZWN0YW5nbGUgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgU2hhcGVFeHRlbnNpb247XG4oZnVuY3Rpb24gKFNoYXBlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdChzaGFwZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgbG9jYWwgfSA9IGVuZ2luZS5wb2ludGVycztcbiAgICAgICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzKHNoYXBlLCByZWN0YW5nbGUpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKHJlY3RhbmdsZSwgbG9jYWwpO1xuICAgIH1cbiAgICBTaGFwZUV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChTSEFQRSwgaGl0VGVzdCk7XG4gICAgICAgIEltYWdlUmVzb3VyY2UuaW5pdChlbmdpbmUpO1xuICAgIH1cbiAgICBTaGFwZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFNoYXBlRXh0ZW5zaW9uIHx8IChTaGFwZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQ2FudmFzUGF0dGVybnMgfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IEZvbnQgfSBmcm9tICcuLi9kYXRhL2ZvbnQnO1xuaW1wb3J0IHsgVGV4dEV4dGVuc2lvbiwgVEVYVCwgVGV4dCB9IGZyb20gJy4uL3RleHQnO1xuaW1wb3J0IHsgVGV4dEZvcm1hdCB9IGZyb20gJy4uL2RhdGEvZm9ybWF0JztcbmltcG9ydCB7IFRleHRNZXRyaWNzIH0gZnJvbSAnLi4vZGF0YS9tZXRyaWNzJztcbmNvbnN0IGRlZmF1bHRUZXh0Rm9ybWF0ID0ge307XG5jb25zdCBDT1JSRUNUSU9OID0gMC44NTtcbmV4cG9ydCB2YXIgQ2FudmFzVGV4dEV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzVGV4dEV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihjb21wb25lbnQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IG1hdHJpeCwgY29sb3JUcmFuc2Zvcm0gfSA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtZXRyaWNzO1xuICAgICAgICBjb25zdCBzaW1wbGUgPSBUZXh0LmlzU2ltcGxlKGNvbXBvbmVudCk7XG4gICAgICAgIGlmIChzaW1wbGUpIHtcbiAgICAgICAgICAgIG1ldHJpY3MgPSBUZXh0TWV0cmljcy5nZXRTaW1wbGVNZXRyaWNzKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtZXRyaWNzID0gVGV4dE1ldHJpY3MuZ2V0TWV0cmljcyhjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWV0cmljcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZm9ybWF0LCBib3JkZXIsIGJhY2tncm91bmQsIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIFRleHRGb3JtYXQuY29tYmluZShmb3JtYXQsIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQsIGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgY29uc3QgcmVhbFdpZHRoID0gd2lkdGggPz8gbWV0cmljcy53aWR0aDtcbiAgICAgICAgY29uc3QgcmVhbEhlaWdodCA9IGhlaWdodCA/PyBtZXRyaWNzLmhlaWdodDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IFBpdm90LmdldFgoY29tcG9uZW50LCByZWFsV2lkdGgpO1xuICAgICAgICBjb25zdCBvZmZzZXRZID0gUGl2b3QuZ2V0WShjb21wb25lbnQsIHJlYWxIZWlnaHQpO1xuICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFsaWduVmVydGljYWxWYWx1ZSA9IFRleHRGb3JtYXQuZ2V0VmVydGljYWxBbGlnblZhbHVlKGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgICAgIHkgPSAoaGVpZ2h0IC0gbWV0cmljcy5oZWlnaHQpICogYWxpZ25WZXJ0aWNhbFZhbHVlO1xuICAgICAgICAgICAgaWYgKHkgPCAwKSB7XG4gICAgICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeSArPSBvZmZzZXRZO1xuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBlbmdpbmUucGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgIGlmIChiYWNrZ3JvdW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICcnO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihiYWNrZ3JvdW5kLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQucmVjdChvZmZzZXRYLCBvZmZzZXRZLCByZWFsV2lkdGgsIHJlYWxIZWlnaHQpO1xuICAgICAgICAgICAgY29udGV4dDJkLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihib3JkZXIsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcbiAgICAgICAgICAgIGNvbnRleHQyZC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5yZWN0KG9mZnNldFgsIG9mZnNldFksIHJlYWxXaWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dDJkLnRleHRCYXNlbGluZSA9ICdhbHBoYWJldGljJztcbiAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gJyc7XG4gICAgICAgIGlmIChzaW1wbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBjb21wb25lbnQudGV4dDtcbiAgICAgICAgICAgIGNvbnN0IHsgZm9udCwgc2l6ZSwgY29sb3IsIGFscGhhLCBsZWFkaW5nLCBsZXR0ZXJTcGFjaW5nLCB9ID0gZGVmYXVsdFRleHRGb3JtYXQ7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0Rm9udCA9IEZvbnQuZ2V0Rm9udChmb250KTtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbFNpemUgPSBzaXplICogQ09SUkVDVElPTjtcbiAgICAgICAgICAgIGNvbnRleHQyZC5mb250ID0gRm9udC5nZXRTdHlsZUZvbnQoZm9udCwgc2l6ZSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGNvbG9yLCBhbHBoYSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgbGV0IHggPSBvZmZzZXRYO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICBpZiAoc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICB4ID0gb2Zmc2V0WDtcbiAgICAgICAgICAgICAgICAgICAgeSArPSBzaXplICsgbGVhZGluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSB0ZXh0W2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShkZWZhdWx0Rm9udCwgc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIGxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5maWxsVGV4dChzeW1ib2wsIHgsIHkgKyBzeW1ib2xTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgeCArPSBhZHZhbmNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbGluZXMgfSA9IG1ldHJpY3M7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChsaW5lLnN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gbGluZS5zeW1ib2xzWzBdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbGlnblZhbHVlID0gVGV4dEZvcm1hdC5nZXRBbGlnblZhbHVlKGZpcnN0LmZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gKHJlYWxXaWR0aCAtIGxpbmUud2lkdGgpICogYWxpZ25WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4ICs9IG9mZnNldFg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc3ltYm9scyB9ID0gbGluZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZUhlaWdodCA9IGxpbmUuaGVpZ2h0ICogQ09SUkVDVElPTjtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzeW1ib2xzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHN5bWJvbC5mb3JtYXQuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsaWduU3ltYm9sVmFsdWUgPSBUZXh0Rm9ybWF0LmdldFZlcnRpY2FsQWxpZ25WYWx1ZShzeW1ib2wuZm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbFNpemUgPSBzaXplICogQ09SUkVDVElPTjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5mb250ID0gRm9udC5nZXRTdHlsZUZvbnQoc3ltYm9sLmZvcm1hdC5mb250LCBzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oc3ltYm9sLmZvcm1hdC5jb2xvciwgc3ltYm9sLmZvcm1hdC5hbHBoYSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDJkLmZpbGxUZXh0KHN5bWJvbC5zeW1ib2wsIHgsIHkgKyBzeW1ib2xTaXplICsgYWxpZ25TeW1ib2xWYWx1ZSAqIChsaW5lSGVpZ2h0IC0gc3ltYm9sU2l6ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgeCArPSBzeW1ib2wuYWR2YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB5ICs9IGxpbmUuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc1RleHRFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIFRleHRFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KFRFWFQsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc1RleHRFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNUZXh0RXh0ZW5zaW9uIHx8IChDYW52YXNUZXh0RXh0ZW5zaW9uID0ge30pKTtcbiIsImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuZXhwb3J0IGNvbnN0IEVNID0gMTAyNDtcbmNvbnN0IGZvbnRzID0gbmV3IE1hcCgpO1xuZXhwb3J0IHZhciBGb250O1xuKGZ1bmN0aW9uIChGb250KSB7XG4gICAgZnVuY3Rpb24gZ2V0U3R5bGVGb250KGZvbnQsIHNpemUpIHtcbiAgICAgICAgcmV0dXJuIGAke3NpemV9cHggJHtmb250fWA7XG4gICAgfVxuICAgIEZvbnQuZ2V0U3R5bGVGb250ID0gZ2V0U3R5bGVGb250O1xuICAgIGZ1bmN0aW9uIG1lYXN1cmVUZXh0KGZvbnQsIHNpemUsIHRleHQpIHtcbiAgICAgICAgY29udGV4dC5mb250ID0gZ2V0U3R5bGVGb250KGZvbnQsIHNpemUpO1xuICAgICAgICByZXR1cm4gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcbiAgICB9XG4gICAgRm9udC5tZWFzdXJlVGV4dCA9IG1lYXN1cmVUZXh0O1xuICAgIGZ1bmN0aW9uIGdldENoYXJXaWR0aChmb250LCBjaGFyKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IGZvbnQud2lkdGhzLmdldChjaGFyKTtcbiAgICAgICAgaWYgKCF3aWR0aCkge1xuICAgICAgICAgICAgd2lkdGggPSBtZWFzdXJlVGV4dChmb250Lm5hbWUsIEVNLCBjaGFyKTtcbiAgICAgICAgICAgIGZvbnQud2lkdGhzLnNldChjaGFyLCB3aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cbiAgICBGb250LmdldENoYXJXaWR0aCA9IGdldENoYXJXaWR0aDtcbiAgICBmdW5jdGlvbiBnZXRLZXJuaW5nKGZvbnQsIGZpcnN0LCBzZWNvbmQpIHtcbiAgICAgICAgY29uc3QgcGFpciA9IGZpcnN0ICsgc2Vjb25kO1xuICAgICAgICBsZXQga2VybmluZyA9IGZvbnQua2VybmluZ3MuZ2V0KHBhaXIpO1xuICAgICAgICBpZiAoIWtlcm5pbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoU2Vjb25kID0gZ2V0Q2hhcldpZHRoKGZvbnQsIHNlY29uZCk7XG4gICAgICAgICAgICBjb25zdCB3aWR0aFRvdGFsID0gbWVhc3VyZVRleHQoZm9udC5uYW1lLCBFTSwgZmlyc3QgKyBzZWNvbmQpO1xuICAgICAgICAgICAga2VybmluZyA9IHdpZHRoVG90YWwgLSB3aWR0aFNlY29uZDtcbiAgICAgICAgICAgIGZvbnQua2VybmluZ3Muc2V0KHBhaXIsIGtlcm5pbmcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXJuaW5nO1xuICAgIH1cbiAgICBGb250LmdldEtlcm5pbmcgPSBnZXRLZXJuaW5nO1xuICAgIGZ1bmN0aW9uIGdldEFkdmFuY2UoZm9udCwgc2l6ZSwgZmlyc3QsIHNlY29uZCkge1xuICAgICAgICBjb25zdCBzY2FsZSA9IHNpemUgLyBFTTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBnZXRDaGFyV2lkdGgoZm9udCwgZmlyc3QpO1xuICAgICAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpZHRoICogc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2VybmluZyA9IGdldEtlcm5pbmcoZm9udCwgZmlyc3QsIHNlY29uZCk7XG4gICAgICAgIHJldHVybiBrZXJuaW5nICogc2NhbGU7XG4gICAgfVxuICAgIEZvbnQuZ2V0QWR2YW5jZSA9IGdldEFkdmFuY2U7XG4gICAgZnVuY3Rpb24gZ2V0Rm9udChuYW1lKSB7XG4gICAgICAgIGxldCBmb250ID0gZm9udHMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoIWZvbnQpIHtcbiAgICAgICAgICAgIGZvbnQgPSB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB3aWR0aHM6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgICAgICBrZXJuaW5nczogbmV3IE1hcCgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvbnRzLnNldChuYW1lLCBmb250KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9udDtcbiAgICB9XG4gICAgRm9udC5nZXRGb250ID0gZ2V0Rm9udDtcbn0pKEZvbnQgfHwgKEZvbnQgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBUZXh0Rm9ybWF0O1xuKGZ1bmN0aW9uIChUZXh0Rm9ybWF0KSB7XG4gICAgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCA9IHtcbiAgICAgICAgZm9udDogJ2FyaWFsJyxcbiAgICAgICAgc2l6ZTogMTUsXG4gICAgICAgIGNvbG9yOiAwLFxuICAgICAgICBhbHBoYTogMSxcbiAgICAgICAgYm9sZDogZmFsc2UsXG4gICAgICAgIGl0YWxpYzogZmFsc2UsXG4gICAgICAgIHVuZGVybGluZTogZmFsc2UsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgICAgIGxlYWRpbmc6IDAsXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgIH07XG4gICAgZnVuY3Rpb24gY29tYmluZShzb3VyY2UsIGRlZmF1bHRGb3JtYXQsIHJlc3VsdCkge1xuICAgICAgICByZXN1bHQuZm9udCA9IHNvdXJjZT8uZm9udCA/PyBkZWZhdWx0Rm9ybWF0LmZvbnQ7XG4gICAgICAgIHJlc3VsdC5zaXplID0gc291cmNlPy5zaXplID8/IGRlZmF1bHRGb3JtYXQuc2l6ZTtcbiAgICAgICAgcmVzdWx0LmNvbG9yID0gc291cmNlPy5jb2xvciA/PyBkZWZhdWx0Rm9ybWF0LmNvbG9yO1xuICAgICAgICByZXN1bHQuYWxwaGEgPSBzb3VyY2U/LmFscGhhID8/IGRlZmF1bHRGb3JtYXQuYWxwaGE7XG4gICAgICAgIHJlc3VsdC5ib2xkID0gc291cmNlPy5ib2xkID8/IGRlZmF1bHRGb3JtYXQuYm9sZDtcbiAgICAgICAgcmVzdWx0Lml0YWxpYyA9IHNvdXJjZT8uaXRhbGljID8/IGRlZmF1bHRGb3JtYXQuaXRhbGljO1xuICAgICAgICByZXN1bHQudW5kZXJsaW5lID0gc291cmNlPy51bmRlcmxpbmUgPz8gZGVmYXVsdEZvcm1hdC51bmRlcmxpbmU7XG4gICAgICAgIHJlc3VsdC5sZXR0ZXJTcGFjaW5nID0gc291cmNlPy5sZXR0ZXJTcGFjaW5nID8/IGRlZmF1bHRGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgcmVzdWx0LmxlYWRpbmcgPSBzb3VyY2U/LmxlYWRpbmcgPz8gZGVmYXVsdEZvcm1hdC5sZWFkaW5nO1xuICAgICAgICByZXN1bHQuYWxpZ24gPSBzb3VyY2U/LmFsaWduID8/IGRlZmF1bHRGb3JtYXQuYWxpZ247XG4gICAgICAgIHJlc3VsdC52ZXJ0aWNhbEFsaWduID0gc291cmNlPy52ZXJ0aWNhbEFsaWduID8/IGRlZmF1bHRGb3JtYXQudmVydGljYWxBbGlnbjtcbiAgICB9XG4gICAgVGV4dEZvcm1hdC5jb21iaW5lID0gY29tYmluZTtcbiAgICBmdW5jdGlvbiBjb3B5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5mb250ID0gc291cmNlLmZvbnQ7XG4gICAgICAgIHRhcmdldC5zaXplID0gc291cmNlLnNpemU7XG4gICAgICAgIHRhcmdldC5jb2xvciA9IHNvdXJjZS5jb2xvcjtcbiAgICAgICAgdGFyZ2V0LmFscGhhID0gc291cmNlLmFscGhhO1xuICAgICAgICB0YXJnZXQuYm9sZCA9IHNvdXJjZS5ib2xkO1xuICAgICAgICB0YXJnZXQuaXRhbGljID0gc291cmNlLml0YWxpYztcbiAgICAgICAgdGFyZ2V0LnVuZGVybGluZSA9IHNvdXJjZS51bmRlcmxpbmU7XG4gICAgICAgIHRhcmdldC5sZXR0ZXJTcGFjaW5nID0gc291cmNlLmxldHRlclNwYWNpbmc7XG4gICAgICAgIHRhcmdldC5sZWFkaW5nID0gc291cmNlLmxlYWRpbmc7XG4gICAgICAgIHRhcmdldC5hbGlnbiA9IHNvdXJjZS5hbGlnbjtcbiAgICAgICAgdGFyZ2V0LnZlcnRpY2FsQWxpZ24gPSBzb3VyY2UudmVydGljYWxBbGlnbjtcbiAgICB9XG4gICAgVGV4dEZvcm1hdC5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBnZXRBbGlnblZhbHVlKGZvcm1hdCkge1xuICAgICAgICBzd2l0Y2ggKGZvcm1hdD8uYWxpZ24pIHtcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOiByZXR1cm4gMDtcbiAgICAgICAgICAgIGNhc2UgJ2NlbnRlcic6IHJldHVybiAwLjU7XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6IHJldHVybiAxO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dEZvcm1hdC5nZXRBbGlnblZhbHVlID0gZ2V0QWxpZ25WYWx1ZTtcbiAgICBmdW5jdGlvbiBnZXRWZXJ0aWNhbEFsaWduVmFsdWUoZm9ybWF0KSB7XG4gICAgICAgIHN3aXRjaCAoZm9ybWF0Py52ZXJ0aWNhbEFsaWduKSB7XG4gICAgICAgICAgICBjYXNlICd0b3AnOiByZXR1cm4gMDtcbiAgICAgICAgICAgIGNhc2UgJ21pZGRsZSc6IHJldHVybiAwLjU7XG4gICAgICAgICAgICBjYXNlICdib3R0b20nOiByZXR1cm4gMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRGb3JtYXQuZ2V0VmVydGljYWxBbGlnblZhbHVlID0gZ2V0VmVydGljYWxBbGlnblZhbHVlO1xufSkoVGV4dEZvcm1hdCB8fCAoVGV4dEZvcm1hdCA9IHt9KSk7XG4iLCJpbXBvcnQgeyBGb250IH0gZnJvbSAnLi9mb250JztcbmltcG9ydCB7IFRleHRGb3JtYXQgfSBmcm9tICcuL2Zvcm1hdCc7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vdGV4dCc7XG5jb25zdCBkZWZhdWx0VGV4dEZvcm1hdCA9IHt9O1xuZXhwb3J0IHZhciBUZXh0TGluZTtcbihmdW5jdGlvbiAoVGV4dExpbmUpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzeW1ib2xzOiBbXSxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBUZXh0TGluZS5jcmVhdGUgPSBjcmVhdGU7XG4gICAgZnVuY3Rpb24gZW1wdHkobGluZSkge1xuICAgICAgICBsaW5lLnN5bWJvbHMubGVuZ3RoID0gMDtcbiAgICAgICAgbGluZS53aWR0aCA9IDA7XG4gICAgICAgIGxpbmUuaGVpZ2h0ID0gMDtcbiAgICB9XG4gICAgVGV4dExpbmUuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBhZGQobGluZSwgc3ltYm9sKSB7XG4gICAgICAgIGxpbmUuc3ltYm9scy5wdXNoKHN5bWJvbCk7XG4gICAgICAgIGxpbmUud2lkdGggKz0gc3ltYm9sLmFkdmFuY2U7XG4gICAgICAgIGxpbmUuaGVpZ2h0ID0gTWF0aC5tYXgobGluZS5oZWlnaHQsIHN5bWJvbC5mb3JtYXQuc2l6ZSArIHN5bWJvbC5mb3JtYXQubGVhZGluZyk7XG4gICAgfVxuICAgIFRleHRMaW5lLmFkZCA9IGFkZDtcbiAgICBmdW5jdGlvbiBjb25jYXQodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5zeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGFyZ2V0LnN5bWJvbHMucHVzaCguLi5zb3VyY2Uuc3ltYm9scyk7XG4gICAgICAgICAgICB0YXJnZXQud2lkdGggKz0gc291cmNlLndpZHRoO1xuICAgICAgICAgICAgdGFyZ2V0LmhlaWdodCA9IE1hdGgubWF4KHRhcmdldC5oZWlnaHQsIHNvdXJjZS5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRMaW5lLmNvbmNhdCA9IGNvbmNhdDtcbiAgICBmdW5jdGlvbiBjb3JyZWN0V2lkdGgobGluZSkge1xuICAgICAgICBjb25zdCB7IHN5bWJvbHMgfSA9IGxpbmU7XG4gICAgICAgIGlmIChzeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgbGFzdCA9IHN5bWJvbHNbc3ltYm9scy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmICgvXFxzLy50ZXN0KGxhc3Quc3ltYm9sKSkge1xuICAgICAgICAgICAgICAgIHN5bWJvbHMucG9wKCk7XG4gICAgICAgICAgICAgICAgbGluZS53aWR0aCAtPSBsYXN0LmFkdmFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dExpbmUuY29ycmVjdFdpZHRoID0gY29ycmVjdFdpZHRoO1xuICAgIGZ1bmN0aW9uIGNvcnJlY3RIZWlnaHQobGluZSkge1xuICAgICAgICBjb25zdCB7IHN5bWJvbHMgfSA9IGxpbmU7XG4gICAgICAgIGlmIChzeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1swXTtcbiAgICAgICAgICAgIGxpbmUuaGVpZ2h0IC09IHN5bWJvbC5mb3JtYXQubGVhZGluZztcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0TGluZS5jb3JyZWN0SGVpZ2h0ID0gY29ycmVjdEhlaWdodDtcbn0pKFRleHRMaW5lIHx8IChUZXh0TGluZSA9IHt9KSk7XG5leHBvcnQgdmFyIFRleHRNZXRyaWNzO1xuKGZ1bmN0aW9uIChUZXh0TWV0cmljcykge1xuICAgIGZ1bmN0aW9uIGdldFN5bWJvbHMoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXRleHQgfHwgIXRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIFRleHRGb3JtYXQuY29tYmluZShjb21wb25lbnQuZm9ybWF0LCBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LCBkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGNvbnN0IHN5bWJvbHMgPSBbXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9ybWF0ID0ge307XG4gICAgICAgICAgICBUZXh0Rm9ybWF0LmNvcHkoZGVmYXVsdFRleHRGb3JtYXQsIHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2xGb250ID0gRm9udC5nZXRGb250KHN5bWJvbEZvcm1hdC5mb250KTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHRleHRbaV07XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IHRleHRbaSArIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2Uoc3ltYm9sRm9udCwgc3ltYm9sRm9ybWF0LnNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBzeW1ib2xGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICBzeW1ib2xzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgIGFkdmFuY2UsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogc3ltYm9sRm9ybWF0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGV4dCkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJsb2NrID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb3JtYXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgVGV4dEZvcm1hdC5jb3B5KGRlZmF1bHRUZXh0Rm9ybWF0LCBzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb250ID0gRm9udC5nZXRGb250KHN5bWJvbEZvcm1hdC5mb250KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBibG9jay5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gYmxvY2tbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gYmxvY2tbaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShzeW1ib2xGb250LCBzeW1ib2xGb3JtYXQuc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIHN5bWJvbEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9scy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHN5bWJvbEZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb3JtYXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgVGV4dEZvcm1hdC5jb21iaW5lKGJsb2NrLCBkZWZhdWx0VGV4dEZvcm1hdCwgc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9udCA9IEZvbnQuZ2V0Rm9udChzeW1ib2xGb3JtYXQuZm9udCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYmxvY2sudGV4dC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gYmxvY2sudGV4dFtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSBibG9jay50ZXh0W2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2Uoc3ltYm9sRm9udCwgc3ltYm9sRm9ybWF0LnNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBzeW1ib2xGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBzeW1ib2xGb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3ltYm9scztcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0U3ltYm9scyA9IGdldFN5bWJvbHM7XG4gICAgZnVuY3Rpb24gZ2V0TGluZXMoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHN5bWJvbHMgPSBnZXRTeW1ib2xzKGNvbXBvbmVudCk7XG4gICAgICAgIGlmICghc3ltYm9scyB8fCAhc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCB9ID0gY29tcG9uZW50O1xuICAgICAgICBjb25zdCB3b3JkV3JhcCA9IFRleHQuaXNXb3JkV3JhcChjb21wb25lbnQpO1xuICAgICAgICBjb25zdCBtdWx0aWxpbmUgPSBUZXh0LmlzTXVsdGlsaW5lKGNvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gW107XG4gICAgICAgIGxldCBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgIGlmIChtdWx0aWxpbmUpIHtcbiAgICAgICAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICAgICAgICAgIGlmICh3b3JkV3JhcCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB3b3JkID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2wuc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmNvbmNhdChsaW5lLCB3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5lbXB0eSh3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZCh3b3JkLCBzeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5lLndpZHRoICsgd29yZC53aWR0aCA+IHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoL1xccy8udGVzdChzeW1ib2wuc3ltYm9sKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5jb25jYXQobGluZSwgd29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmVtcHR5KHdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5jb25jYXQobGluZSwgd29yZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sLnN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpbmUud2lkdGggKyBzeW1ib2wuYWR2YW5jZSA+IHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKGxpbmUsIHN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQobGluZSwgc3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sLnN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQobGluZSwgc3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbaV07XG4gICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKGxpbmUsIHN5bWJvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmUuc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgICAgICBUZXh0TGluZS5jb3JyZWN0V2lkdGgobGluZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFsaW5lLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBsaW5lLmhlaWdodCA9IGRlZmF1bHRUZXh0Rm9ybWF0LnNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGluZSA9IGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgVGV4dExpbmUuY29ycmVjdEhlaWdodChsaW5lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldExpbmVzID0gZ2V0TGluZXM7XG4gICAgZnVuY3Rpb24gZ2V0TWV0cmljcyhjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBnZXRMaW5lcyhjb21wb25lbnQpO1xuICAgICAgICBpZiAoIWxpbmVzIHx8ICFsaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWV0cmljcyA9IHtcbiAgICAgICAgICAgIGxpbmVzLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgIG1ldHJpY3Mud2lkdGggPSBNYXRoLm1heChtZXRyaWNzLndpZHRoLCBsaW5lLndpZHRoKTtcbiAgICAgICAgICAgIG1ldHJpY3MuaGVpZ2h0ICs9IGxpbmUuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXRyaWNzO1xuICAgIH1cbiAgICBUZXh0TWV0cmljcy5nZXRNZXRyaWNzID0gZ2V0TWV0cmljcztcbiAgICBmdW5jdGlvbiBnZXRTaW1wbGVNZXRyaWNzKGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCB7IHRleHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBUZXh0Rm9ybWF0LmNvbWJpbmUoY29tcG9uZW50LmZvcm1hdCwgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCwgZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBjb25zdCB7IHNpemUsIGxldHRlclNwYWNpbmcsIGxlYWRpbmcgfSA9IGRlZmF1bHRUZXh0Rm9ybWF0O1xuICAgICAgICBjb25zdCBmb250ID0gRm9udC5nZXRGb250KGRlZmF1bHRUZXh0Rm9ybWF0LmZvbnQpO1xuICAgICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gc2l6ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2wgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgaWYgKHN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgKz0gc2l6ZSArIGxlYWRpbmc7XG4gICAgICAgICAgICAgICAgd2lkdGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IHRleHRbaSArIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2UoZm9udCwgc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIGxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gYWR2YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldFNpbXBsZU1ldHJpY3MgPSBnZXRTaW1wbGVNZXRyaWNzO1xufSkoVGV4dE1ldHJpY3MgfHwgKFRleHRNZXRyaWNzID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvZm9ybWF0JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9mb250JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9tZXRyaWNzJztcbmV4cG9ydCAqIGZyb20gJy4vY2FudmFzL3RleHQnO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgVGV4dEZvcm1hdCB9IGZyb20gJy4vZGF0YS9mb3JtYXQnO1xuaW1wb3J0IHsgVGV4dE1ldHJpY3MgfSBmcm9tICcuL2RhdGEvbWV0cmljcyc7XG5leHBvcnQgY29uc3QgVEVYVCA9ICd0ZXh0JztcbmV4cG9ydCB2YXIgVGV4dDtcbihmdW5jdGlvbiAoVGV4dCkge1xuICAgIGZ1bmN0aW9uIGdldFRleHQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0ZXh0KSkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYmxvY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBibG9jay50ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBUZXh0LmdldFRleHQgPSBnZXRUZXh0O1xuICAgIGZ1bmN0aW9uIGlzQXV0b1NpemUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiAhY29tcG9uZW50LndpZHRoICYmICFjb21wb25lbnQuaGVpZ2h0O1xuICAgIH1cbiAgICBUZXh0LmlzQXV0b1NpemUgPSBpc0F1dG9TaXplO1xuICAgIGZ1bmN0aW9uIGlzU2ltcGxlKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGNvbXBvbmVudC50ZXh0ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgJiYgaXNBdXRvU2l6ZShjb21wb25lbnQpXG4gICAgICAgICAgICAmJiBUZXh0Rm9ybWF0LmdldEFsaWduVmFsdWUoY29tcG9uZW50LmZvcm1hdCkgPT09IDA7XG4gICAgfVxuICAgIFRleHQuaXNTaW1wbGUgPSBpc1NpbXBsZTtcbiAgICBmdW5jdGlvbiBpc1dvcmRXcmFwKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LndvcmRXcmFwID8/IHRydWU7XG4gICAgfVxuICAgIFRleHQuaXNXb3JkV3JhcCA9IGlzV29yZFdyYXA7XG4gICAgZnVuY3Rpb24gaXNNdWx0aWxpbmUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQubXVsdGlsaW5lID8/IHRydWU7XG4gICAgfVxuICAgIFRleHQuaXNNdWx0aWxpbmUgPSBpc011bHRpbGluZTtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoY29tcG9uZW50LCBib3VuZHMpIHtcbiAgICAgICAgbGV0IG1ldHJpY3M7XG4gICAgICAgIGlmIChUZXh0LmlzU2ltcGxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIG1ldHJpY3MgPSBUZXh0TWV0cmljcy5nZXRTaW1wbGVNZXRyaWNzKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtZXRyaWNzID0gVGV4dE1ldHJpY3MuZ2V0TWV0cmljcyhjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWV0cmljcykge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHsgd2lkdGgsIGhlaWdodCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXdpZHRoKSB7XG4gICAgICAgICAgICB3aWR0aCA9IG1ldHJpY3Mud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoZWlnaHQpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IG1ldHJpY3MuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGNvbXBvbmVudCwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShjb21wb25lbnQsIGhlaWdodCk7XG4gICAgICAgIGJvdW5kcy54ID0geDtcbiAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgYm91bmRzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgVGV4dC5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShUZXh0IHx8IChUZXh0ID0ge30pKTtcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBUZXh0RXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChUZXh0RXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdCh0ZXh0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBsb2NhbCB9ID0gZW5naW5lLnBvaW50ZXJzO1xuICAgICAgICBUZXh0LmNhbGN1bGF0ZUJvdW5kcyh0ZXh0LCBib3VuZHMpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKGJvdW5kcywgbG9jYWwpO1xuICAgIH1cbiAgICBUZXh0RXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KFRFWFQsIGhpdFRlc3QpO1xuICAgIH1cbiAgICBUZXh0RXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoVGV4dEV4dGVuc2lvbiB8fCAoVGV4dEV4dGVuc2lvbiA9IHt9KSk7XG4iLCJleHBvcnQgY29uc3QgTElORUFSID0gJ2xpbmVhcic7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDID0gJ3F1YWRyYXRpYyc7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDX0lOID0gJ3F1YWRyYXRpY2luJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUNfT1VUID0gJ3F1YWRyYXRpY291dCc7XG5leHBvcnQgY29uc3QgQ1VCSUMgPSAnY3ViaWMnO1xuZXhwb3J0IGNvbnN0IENVQklDX0lOID0gJ2N1YmljaW4nO1xuZXhwb3J0IGNvbnN0IENVQklDX09VVCA9ICdjdWJpY291dCc7XG5leHBvcnQgY29uc3QgUVVBUlRJQyA9ICdxdWFydGljJztcbmV4cG9ydCBjb25zdCBRVUFSVElDX0lOID0gJ3F1YXJ0aWNpbic7XG5leHBvcnQgY29uc3QgUVVBUlRJQ19PVVQgPSAncXVhcnRpY291dCc7XG5leHBvcnQgY29uc3QgUVVJTlRJQyA9ICdxdWludGljJztcbmV4cG9ydCBjb25zdCBRVUlOVElDX0lOID0gJ3F1aW50aWNpbic7XG5leHBvcnQgY29uc3QgUVVJTlRJQ19PVVQgPSAncXVpbnRpY291dCc7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTCA9ICdxdWludGljJztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMX0lOID0gJ3F1aW50aWNpbic7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTF9PVVQgPSAncXVpbnRpY291dCc7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUwgPSAnZXhwb25lbnRpYWwnO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMX0lOID0gJ2V4cG9uZW50aWFsaW4nO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMX09VVCA9ICdleHBvbmVudGlhbG91dCc7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVIgPSAnY2lyY3VsYXInO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSX0lOID0gJ2NpcmN1bGFyaW4nO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSX09VVCA9ICdjaXJjdWxhcm91dCc7XG5leHBvcnQgY29uc3QgRUxBU1RJQyA9ICdlbGFzdGljJztcbmV4cG9ydCBjb25zdCBFTEFTVElDX0lOID0gJ2VsYXN0aWNpbic7XG5leHBvcnQgY29uc3QgRUxBU1RJQ19PVVQgPSAnZWxhc3RpY291dCc7XG5leHBvcnQgY29uc3QgQkFDSyA9ICdiYWNrJztcbmV4cG9ydCBjb25zdCBCQUNLX0lOID0gJ2JhY2tpbic7XG5leHBvcnQgY29uc3QgQkFDS19PVVQgPSAnYmFja291dCc7XG5leHBvcnQgY29uc3QgQk9VTkNFID0gJ2JvdW5jZSc7XG5leHBvcnQgY29uc3QgQk9VTkNFX0lOID0gJ2JvdW5jZWluJztcbmV4cG9ydCBjb25zdCBCT1VOQ0VfT1VUID0gJ2JvdW5jZW91dCc7XG5leHBvcnQgY29uc3QgZWFzaW5nID0ge1xuICAgIFtMSU5FQVJdOiAodmFsdWUpID0+IHZhbHVlLFxuICAgIFtRVUFEUkFUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMC41ICogKC0tdmFsdWUgKiAodmFsdWUgLSAyKSAtIDEpO1xuICAgIH0sXG4gICAgW1FVQURSQVRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUFEUkFUSUNfT1VUXTogKHZhbHVlKSA9PiAodmFsdWUgKiAoMiAtIHZhbHVlKSksXG4gICAgW0NVQklDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSArIDIpO1xuICAgIH0sXG4gICAgW0NVQklDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbQ1VCSUNfT1VUXTogKHZhbHVlKSA9PiAoLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAxKSxcbiAgICBbUVVBUlRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAtIDIpO1xuICAgIH0sXG4gICAgW1FVQVJUSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVQVJUSUNfT1VUXTogKHZhbHVlKSA9PiAoMSAtIC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUlOVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMik7XG4gICAgfSxcbiAgICBbUVVJTlRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUlOVElDX09VVF06ICh2YWx1ZSkgPT4gKC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDEpLFxuICAgIFtTSU5VU09JREFMXTogKHZhbHVlKSA9PiAoMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogdmFsdWUpKSksXG4gICAgW1NJTlVTT0lEQUxfSU5dOiAodmFsdWUpID0+ICgxIC0gTWF0aC5jb3MoKHZhbHVlICogTWF0aC5QSSkgLyAyKSksXG4gICAgW1NJTlVTT0lEQUxfT1VUXTogKHZhbHVlKSA9PiAoTWF0aC5zaW4oKHZhbHVlICogTWF0aC5QSSkgLyAyKSksXG4gICAgW0VYUE9ORU5USUFMXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDEwMjQsIHZhbHVlIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogKHZhbHVlIC0gMSkpICsgMik7XG4gICAgfSxcbiAgICBbRVhQT05FTlRJQUxfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gMCA/IDAgOiBNYXRoLnBvdygxMDI0LCB2YWx1ZSAtIDEpKSxcbiAgICBbRVhQT05FTlRJQUxfT1VUXTogKHZhbHVlKSA9PiAodmFsdWUgPT09IDEgPyAxIDogMSAtIE1hdGgucG93KDIsIC0xMCAqIHZhbHVlKSksXG4gICAgW0NJUkNVTEFSXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHZhbHVlICogdmFsdWUpIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh2YWx1ZSAtPSAyKSAqIHZhbHVlKSArIDEpO1xuICAgIH0sXG4gICAgW0NJUkNVTEFSX0lOXTogKHZhbHVlKSA9PiAoMSAtIE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkpLFxuICAgIFtDSVJDVUxBUl9PVVRdOiAodmFsdWUpID0+IE1hdGguc3FydCgxIC0gLS12YWx1ZSAqIHZhbHVlKSxcbiAgICBbRUxBU1RJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgKj0gMjtcbiAgICAgICAgaWYgKHZhbHVlIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiBNYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDIsIC0xMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuICAgIH0sXG4gICAgW0VMQVNUSUNfSU5dOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuICAgIH0sXG4gICAgW0VMQVNUSUNfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5wb3coMiwgLTEwICogdmFsdWUpICogTWF0aC5zaW4oKHZhbHVlIC0gMC4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG4gICAgfSxcbiAgICBbQkFDS106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1OCAqIDEuNTI1O1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqICh2YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSAtIHMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSArIHMpICsgMik7XG4gICAgfSxcbiAgICBbQkFDS19JTl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICAgICAgcmV0dXJuIHZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlIC0gcyk7XG4gICAgfSxcbiAgICBbQkFDS19PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTg7XG4gICAgICAgIHJldHVybiAtLXZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlICsgcykgKyAxO1xuICAgIH0sXG4gICAgW0JPVU5DRV06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPCAwLjUpIHtcbiAgICAgICAgICAgIHJldHVybiBlYXNpbmdbQk9VTkNFX0lOXSh2YWx1ZSAqIDIpICogMC41O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlYXNpbmdbQk9VTkNFX09VVF0odmFsdWUgKiAyIC0gMSkgKiAwLjUgKyAwLjU7XG4gICAgfSxcbiAgICBbQk9VTkNFX0lOXTogKHZhbHVlKSA9PiAoMSAtIGVhc2luZ1tCT1VOQ0VfT1VUXSgxIC0gdmFsdWUpKSxcbiAgICBbQk9VTkNFX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPCAxIC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgMiAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMS41IC8gMi43NSkgKiB2YWx1ZSArIDAuNzU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgMi41IC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAyLjI1IC8gMi43NSkgKiB2YWx1ZSArIDAuOTM3NTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDIuNjI1IC8gMi43NSkgKiB2YWx1ZSArIDAuOTg0Mzc1O1xuICAgIH0sXG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi90d2Vlbic7XG5leHBvcnQgKiBmcm9tICcuL2Vhc2luZyc7XG4iLCJpbXBvcnQgeyBlYXNpbmcsIExJTkVBUiB9IGZyb20gJy4vZWFzaW5nJztcbmV4cG9ydCBjb25zdCBUV0VFTiA9ICd0d2Vlbic7XG5leHBvcnQgdmFyIFR3ZWVuRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChUd2VlbkV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHVwZGF0ZShjb21wb25lbnQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHR3ZWVuIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IHsgcGhhc2VzIH0gPSB0d2VlbjtcbiAgICAgICAgaWYgKCFwaGFzZXM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ0FuaW1hdGlvbiBwYXJ0cyBub3QgZm91bmQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHdlZW4udGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0d2Vlbi50aW1lICs9IGVuZ2luZS51cGRhdGVyLnRpbWU7XG4gICAgICAgIGNvbnN0IHsgdGltZSB9ID0gdHdlZW47XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBwaGFzZXMuZm9yRWFjaCgocGhhc2UpID0+IHtcbiAgICAgICAgICAgIGlmICghcGhhc2UudGltZSkge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdBbmltYXRpb24gdGltZSBub3Qgc2V0Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBoYXNlLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gcGhhc2Uub2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZWFzaW5nTmFtZSA9IHBoYXNlPy5lYXNpbmc/LnRvTG93ZXJDYXNlKCkgPz8gTElORUFSO1xuICAgICAgICAgICAgY29uc3QgZWFzaW5nTWV0aG9kID0gZWFzaW5nW2Vhc2luZ05hbWVdO1xuICAgICAgICAgICAgaWYgKCFlYXNpbmdNZXRob2QpIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZyhgVW5rbm93biBlYXNpbmcgdHlwZTogJHtlYXNpbmd9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAodGltZSAtIG9mZnNldCkgLyBwaGFzZS50aW1lO1xuICAgICAgICAgICAgb2Zmc2V0ICs9IHBoYXNlLnRpbWU7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCAwIHx8IHZhbHVlID4gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVhc2luZ1ZhbHVlID0gZWFzaW5nTWV0aG9kKHZhbHVlKTtcbiAgICAgICAgICAgIGlmICghcGhhc2UudG8pIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnQW5pbWF0aW9uIFwidG9cIiBzdGF0ZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBoYXNlLmZyb20pIHtcbiAgICAgICAgICAgICAgICBwaGFzZS5mcm9tID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHRvLCBmcm9tIH0gPSBwaGFzZTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gY29tcG9uZW50O1xuICAgICAgICAgICAgT2JqZWN0LmtleXModG8pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmcm9tW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tW2tleV0gPSBzdGF0ZVtrZXldID8/IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGZyb21WYWx1ZSA9IGZyb21ba2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b1ZhbHVlID0gdG9ba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZyb21WYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHRvVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlVmFsdWUgPSBmcm9tVmFsdWUgKyBlYXNpbmdWYWx1ZSAqICh0b1ZhbHVlIC0gZnJvbVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IHN0YXRlVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodHdlZW4ubG9vcCAmJiB0d2Vlbi50aW1lID4gb2Zmc2V0KSB7XG4gICAgICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUd2VlbkV4dGVuc2lvbi51cGRhdGUgPSB1cGRhdGU7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucHJvcGVydGllcy5zZXQoVFdFRU4sIHVwZGF0ZSk7XG4gICAgfVxuICAgIFR3ZWVuRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoVHdlZW5FeHRlbnNpb24gfHwgKFR3ZWVuRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IEFCSUxJVFlfV09MRiB9IGZyb20gJy4vYXNzZXRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjdXJzaXZlKCkge1xuXHRjb25zdCBjb250YWluZXIgPSB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0eDogMzAsXG5cdFx0XHR5OiAzMCxcblx0XHRcdHNjYWxlWDogMC45LFxuXHRcdFx0c2NhbGVZOiAwLjksXG5cdFx0XHRyb3RhdGlvbjogMC4yLFxuXHRcdFx0YWxwaGE6IDAuOSxcblx0XHRcdGNoaWxkcmVuOiBbe1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEFCSUxJVFlfV09MRixcblx0XHRcdFx0c2NhbGU6IDAuMyxcblx0XHRcdH1dLFxuXHRcdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHRcdHRoaXMucm90YXRpb24gKz0gdGltZSAqIDAuMDU7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cblx0Y29udGFpbmVyLmNoaWxkcmVuLmNoaWxkcmVuLnB1c2goY29udGFpbmVyIGFzIG5ldmVyKTtcblxuXHRyZXR1cm4gY29udGFpbmVyO1xufVxuIiwiY29uc3QgQVNTRVRTID0gJ2Fzc2V0cy8nO1xuXG5leHBvcnQgY29uc3QgQU5JTUFMSVNUID0gJ2lkOmFuaW1hbGlzdCc7XG5leHBvcnQgY29uc3QgQVJDSEVSID0gJ2lkOmFyY2hlcic7XG5cbmV4cG9ydCBjb25zdCBBTklNQUxJU1RfSU1BR0UgPSBgJHtBU1NFVFN9QW5pbWFsaXN0Rm94MV9pbWFnZS5wbmdgO1xuZXhwb3J0IGNvbnN0IEFSQ0hFUl9JTUFHRSA9IGAke0FTU0VUU31BcmNoZXIyX2h1bnRlcl9pbWFnZS5wbmdgO1xuXG5leHBvcnQgY29uc3QgQUJJTElUWV9GT1ggPSBgJHtBU1NFVFN9QW5pbWFsaXN0QWJpbGl0eV9Gb3gucG5nYDtcbmV4cG9ydCBjb25zdCBBQklMSVRZX1dPTEYgPSBgJHtBU1NFVFN9QW5pbWFsaXN0QWJpbGl0eV9Xb2xmLnBuZ2A7XG5cbmV4cG9ydCBjb25zdCBCQUNLR1JPVU5EID0gYCR7QVNTRVRTfWp1bmdsZV9iYWNrZ3JvdW5kLmpwZ2A7XG5cbmV4cG9ydCBjb25zdCBURVNUX0NBTlZBUyA9ICd0ZXN0LmNhbnZhcyc7XG5cbmV4cG9ydCBjb25zdCBTQ0VORSA9IGAke0FTU0VUU30vc2NlbmUuanNvbmA7XG4iLCJpbXBvcnQgeyBDYW52YXNFbmdpbmUgfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IEVuZ2luZU1vZHVsZSB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQ2FudmFzVGV4dEV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3RleHQnO1xuaW1wb3J0IHsgQ3VzdG9tSW1hZ2VFeHRlbnNpb24gfSBmcm9tICcuL2ltYWdlJztcbmltcG9ydCBDdXN0b21QbGF0Zm9ybSBmcm9tICcuL3BsYXRmb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tRW5naW5lIGV4dGVuZHMgQ2FudmFzRW5naW5lIHtcblx0Y29uc3RydWN0b3IobW9kdWxlOiBFbmdpbmVNb2R1bGUgPSB7fSkge1xuXHRcdG1vZHVsZS5QbGF0Zm9ybSA9IG1vZHVsZS5QbGF0Zm9ybSA/PyBDdXN0b21QbGF0Zm9ybTtcblxuXHRcdHN1cGVyKG1vZHVsZSk7XG5cblx0XHRDYW52YXNUZXh0RXh0ZW5zaW9uLmluaXQodGhpcyk7XG5cdFx0Q3VzdG9tSW1hZ2VFeHRlbnNpb24uaW5pdCh0aGlzKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzRW5naW5lLCBDYW52YXNQbGF0Zm9ybSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSwgSW1hZ2UgfSBmcm9tICdAamVuZy9pbWFnZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcblxuZXhwb3J0IG5hbWVzcGFjZSBDdXN0b21JbWFnZUV4dGVuc2lvbiB7XG5cdGV4cG9ydCBmdW5jdGlvbiByZW5kZXIoaW1hZ2U6IEltYWdlLCBlbmdpbmU6IENhbnZhc0VuZ2luZSk6IHZvaWQge1xuXHRcdGlmICghaW1hZ2Uuc3JjKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgeyBtYXRyaXgsIGNvbG9yVHJhbnNmb3JtIH0gPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuXG5cdFx0aWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChpbWFnZS5zcmMpIGFzIEltYWdlUmVzb3VyY2UgfCBudWxsO1xuXG5cdFx0aWYgKCFyZXNvdXJjZT8ubG9hZGVkIHx8ICFyZXNvdXJjZT8uaW1hZ2UpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBjb250ZXh0MmQgPSAoZW5naW5lLnBsYXRmb3JtIGFzIENhbnZhc1BsYXRmb3JtKS5nZXRDb250ZXh0KCk7XG5cblx0XHRjb250ZXh0MmQuc2V0VHJhbnNmb3JtKFxuXHRcdFx0bWF0cml4LmEsXG5cdFx0XHRtYXRyaXguYixcblx0XHRcdG1hdHJpeC5jLFxuXHRcdFx0bWF0cml4LmQsXG5cdFx0XHRtYXRyaXgudHgsXG5cdFx0XHRtYXRyaXgudHksXG5cdFx0KTtcblxuXHRcdGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG5cdFx0Y29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcblx0XHRjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcblxuXHRcdGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG5cdFx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuXHRcdGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICdsaWdodGdyYXknO1xuXHRcdGNvbnRleHQyZC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuXHR9XG5cblx0ZXhwb3J0IGZ1bmN0aW9uIGluaXQoZW5naW5lOiBDYW52YXNFbmdpbmUpIHtcblx0XHRJbWFnZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5cdFx0ZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChJTUFHRSwgcmVuZGVyKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzUGxhdGZvcm0gfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tUGxhdGZvcm0gZXh0ZW5kcyBDYW52YXNQbGF0Zm9ybSB7XG5cdGNsZWFyKCkge1xuXHRcdGNvbnN0IGNvbnRleHQyZCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnYmxhY2snO1xuXHRcdGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcblx0XHRjb250ZXh0MmQuZmlsbFJlY3QoMCwgMCwgY29udGV4dDJkLmNhbnZhcy53aWR0aCwgY29udGV4dDJkLmNhbnZhcy5oZWlnaHQpO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcblx0fVxufVxuIiwiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tUmVzb3VyY2VNYW5hZ2VyIHtcblx0cmVhZG9ubHkgYWxpYXNlcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cdHJlYWRvbmx5IHJlc291cmNlcyA9IG5ldyBNYXA8c3RyaW5nLCBJbWFnZVJlc291cmNlPigpO1xuXG5cdHJlc29sdmUgPSAoYXNzZXQ6IHN0cmluZywgZW5naW5lOiBFbmdpbmUpOiBJbWFnZVJlc291cmNlIHwgbnVsbCA9PiB7XG5cdFx0aWYgKGFzc2V0LmluZGV4T2YoJ2lkOicpID09PSAwKSB7XG5cdFx0XHRjb25zdCBpZCA9IGFzc2V0LnNsaWNlKDMpO1xuXHRcdFx0bGV0IHJlc291cmNlID0gdGhpcy5yZXNvdXJjZXMuZ2V0KGlkKSBhcyBJbWFnZVJlc291cmNlO1xuXHRcdFx0aWYgKCFyZXNvdXJjZSkge1xuXHRcdFx0XHRjb25zdCB1cmwgPSB0aGlzLmFsaWFzZXMuZ2V0KGlkKTtcblx0XHRcdFx0aWYgKHVybCkge1xuXHRcdFx0XHRcdHJlc291cmNlID0gSW1hZ2VSZXNvdXJjZS5yZXNvbHZlKHVybCwgZW5naW5lKSBhcyBJbWFnZVJlc291cmNlO1xuXHRcdFx0XHRcdHRoaXMucmVzb3VyY2VzLnNldChpZCwgcmVzb3VyY2UpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBSZXNvdXJjZSB3aXRoIGlkOiAke2Fzc2V0fSBub3QgZm91bmRgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc291cmNlO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGluaXQoZW5naW5lOiBFbmdpbmUpIHtcblx0XHRlbmdpbmUucmVzb3VyY2VzLnJlc29sdmVycy5hZGQodGhpcy5yZXNvbHZlKTtcblx0fVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBTdGF0aXN0aWNzIHtcblx0Z2V0UmVuZGVyVGltZSgpOiBudW1iZXI7XG5cdGdldFVwZGF0ZVRpbWUoKTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnBzKHN0YXRpc3RpY3M6IFN0YXRpc3RpY3MpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0dGV4dDogJ2ZwcycsXG5cdFx0ZnJhbWVzOiAwLFxuXHRcdGZyYW1lVGltZTogMCxcblx0XHR1cGRhdGVUaW1lOiAwLFxuXHRcdHJlbmRlclRpbWU6IDAsXG5cdFx0Zm9ybWF0OiB7XG5cdFx0XHRzaXplOiAyMCxcblx0XHRcdGNvbG9yOiAweGZmZmZmZixcblx0XHR9LFxuXHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0dGhpcy5mcmFtZVRpbWUgKz0gdGltZTtcblx0XHRcdHRoaXMudXBkYXRlVGltZSArPSBzdGF0aXN0aWNzLmdldFVwZGF0ZVRpbWUoKTtcblx0XHRcdHRoaXMucmVuZGVyVGltZSArPSBzdGF0aXN0aWNzLmdldFJlbmRlclRpbWUoKTtcblx0XHRcdHRoaXMuZnJhbWVzKys7XG5cdFx0XHRpZiAodGhpcy5mcmFtZVRpbWUgPj0gMSkge1xuXHRcdFx0XHRjb25zdCBmcmFtZVRpbWUgPSBNYXRoLmNlaWwoMTAwMCAqIHRoaXMuZnJhbWVUaW1lIC8gdGhpcy5mcmFtZXMpO1xuXHRcdFx0XHRjb25zdCB1cGRhdGVUaW1lID0gKHRoaXMudXBkYXRlVGltZSAvIHRoaXMuZnJhbWVzKS50b0ZpeGVkKDIpO1xuXHRcdFx0XHRjb25zdCByZW5kZXJUaW1lID0gKHRoaXMucmVuZGVyVGltZSAvIHRoaXMuZnJhbWVzKS50b0ZpeGVkKDIpO1xuXHRcdFx0XHR0aGlzLnRleHQgPSBgZnBzOiAke3RoaXMuZnJhbWVzfSwgJHtmcmFtZVRpbWV9IG1zXFxudXBkYXRlOiAke3VwZGF0ZVRpbWV9IG1zXFxucmVuZGVyOiAke3JlbmRlclRpbWV9IG1zYDtcblx0XHRcdFx0dGhpcy5mcmFtZVRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZVRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLnJlbmRlclRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLmZyYW1lcyA9IDA7XG5cdFx0XHR9XG5cdFx0fSxcblx0fTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCB7IExvYWRlciB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHtcblx0QUJJTElUWV9GT1gsIEFCSUxJVFlfV09MRiwgQU5JTUFMSVNULCBBUkNIRVIsIEJBQ0tHUk9VTkQsIFNDRU5FLFxufSBmcm9tICcuL2Fzc2V0cyc7XG5pbXBvcnQgYXJ0aWZhY3QgZnJvbSAnLi9hcnRpZmFjdCc7XG5pbXBvcnQgeyBmcHMsIFN0YXRpc3RpY3MgfSBmcm9tICcuL2Zwcyc7XG5pbXBvcnQgeyB1bml0LCBVbml0UHJvcGVydGllcyB9IGZyb20gJy4vdW5pdCc7XG5pbXBvcnQgeyBwcmVsb2FkZXIsIFByZWxvYWRlckluZm8gfSBmcm9tICcuL3ByZWxvYWRlcic7XG5cbmludGVyZmFjZSBNYWluIHtcblx0c3RhcnQoKTogdm9pZDtcblx0W2tleTogc3RyaW5nXTogYW55O1xufVxuXG5pbnRlcmZhY2UgTWFpblByb3BlcnRpZXMgZXh0ZW5kcyBTdGF0aXN0aWNzIHtcblx0Z2V0Q2FudmFzV2lkdGgoKTogbnVtYmVyO1xuXHRnZXRDYW52YXNIZWlnaHQoKTogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKHBhcmFtZXRlcnM6IE1haW5Qcm9wZXJ0aWVzKTogTWFpbiB7XG5cdGZ1bmN0aW9uIG9uVW5pdENsaWNrKGRhdGE6IFVuaXRQcm9wZXJ0aWVzKSB7XG5cdFx0ZGF0YS5oZWFsdGggPSBNYXRoLnJhbmRvbSgpO1xuXHRcdGNvbnNvbGUubG9nKCdvblVuaXRDbGljaycsIGRhdGEubmFtZSk7XG5cdH1cblxuXHRjb25zdCBjb250ZW50ID0ge1xuXHRcdHR5cGU6ICdsb2FkZXInLFxuXHRcdHZpc2libGU6IGZhbHNlLFxuXHRcdGVuYWJsZWQ6IGZhbHNlLFxuXHRcdG9uTG9hZGVkKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2JhY2tncm91bmQgbG9hZGVkJyk7XG5cdFx0XHR0aGlzLnZpc2libGUgPSB0cnVlO1xuXHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQkFDS0dST1VORCxcblx0XHRcdFx0c2NhbGVYOiAxLFxuXHRcdFx0XHRzY2FsZVk6IDEsXG5cdFx0XHR9LFxuXHRcdFx0ZmlndXJlOiB7XG5cdFx0XHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHR0eXBlOiAncmVjdGFuZ2xlJyxcblx0XHRcdFx0XHR4OiAyMCxcblx0XHRcdFx0XHR5OiAyMCxcblx0XHRcdFx0XHR3aWR0aDogMTAwLFxuXHRcdFx0XHRcdGhlaWdodDogNTAsXG5cdFx0XHRcdFx0ZmlsbDogMHhmZjAwZmYsXG5cdFx0XHRcdFx0c3Ryb2tlOiAweDAwMDBmZixcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRzaGFwZXM6IHtcblx0XHRcdFx0dHlwZTogJ3NoYXBlJyxcblx0XHRcdFx0ZGF0YTogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdlbGxpcHNlJyxcblx0XHRcdFx0XHRcdHg6IDEwMCxcblx0XHRcdFx0XHRcdHk6IDEwMCxcblx0XHRcdFx0XHRcdHJhZGl1czogNTAsXG5cdFx0XHRcdFx0XHRmaWxsOiB7IHR5cGU6ICdzb2xpZCcsIGNvbG9yOiAweGZmZmYwMCwgYWxwaGE6IDEgfSxcblx0XHRcdFx0XHRcdHN0cm9rZTogeyBmaWxsOiAweDAwMDBmZiwgdGhpY2tuZXNzOiAxMCB9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ3BhdGgnLFxuXHRcdFx0XHRcdFx0ZGF0YTogJ00gMTEwLCAxMTAgSCAxOTAgViAxOTAgSCAxMTAgWicsXG5cdFx0XHRcdFx0XHRmaWxsOiAweDk5MDAwMCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdwYXRoJyxcblx0XHRcdFx0XHRcdGRhdGE6IFtcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbW92ZVRvJywgeDogMCwgeTogMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAxMDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMTAwLCB5OiAxMDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMCwgeTogMTAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRmaWxsOiB7IHR5cGU6ICdzb2xpZCcsIGNvbG9yOiAweDk5OTk5OSwgYWxwaGE6IDAuNiB9LFxuXHRcdFx0XHRcdFx0c3Ryb2tlOiAweDAwMDAwMCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHVuaXRzOiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdHVuaXQoe1xuXHRcdFx0XHRcdFx0bmFtZTogJ0FyY2hlcicsIGhlYWx0aDogMSwgaW1hZ2U6IEFSQ0hFUiwgb25DbGljazogb25Vbml0Q2xpY2ssXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0dW5pdCh7XG5cdFx0XHRcdFx0XHRuYW1lOiAnQW5pbWFsaXN0JywgaGVhbHRoOiAxLCBpbWFnZTogQU5JTUFMSVNULCBvbkNsaWNrOiBvblVuaXRDbGljayxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHRhcnRpZmFjdDoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0eDogMzAwLFxuXHRcdFx0XHR5OiAzNTAsXG5cdFx0XHRcdGNoaWxkcmVuOiBhcnRpZmFjdCgpLFxuXHRcdFx0fSxcblx0XHRcdG1hcDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHR5OiA0NTAsXG5cdFx0XHRcdHNjYWxlWDogMC4yLFxuXHRcdFx0XHRzY2FsZVk6IDAuMixcblx0XHRcdFx0YWxwaGE6IDAuNSxcblx0XHRcdFx0c3JjOiAndGVzdC5jYW52YXMnLFxuXHRcdFx0XHRvblBvaW50ZXJPdmVyKCkge1xuXHRcdFx0XHRcdHRoaXMuYWxwaGEgPSAxO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblBvaW50ZXJPdXQoKSB7XG5cdFx0XHRcdFx0dGhpcy5hbHBoYSA9IDAuNTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRhYmlsaXR5Rm94OiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQUJJTElUWV9GT1gsXG5cdFx0XHRcdHg6IDQ1MCxcblx0XHRcdFx0eTogNTAwLFxuXHRcdFx0XHRzY2FsZTogMC41LFxuXHRcdFx0XHR0aW50OiB7XG5cdFx0XHRcdFx0Y29sb3I6IDB4MDBmZjAwLFxuXHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHR9IGFzIGFueSxcblx0XHRcdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMudGludCkge1xuXHRcdFx0XHRcdFx0dGhpcy50aW50LnZhbHVlICs9IHRpbWU7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy50aW50LnZhbHVlID49IDEpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy50aW50LnZhbHVlID0gMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uUG9pbnRlckRvd24oZTogYW55KSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMudGludCkge1xuXHRcdFx0XHRcdFx0dGhpcy50aW50ID0gbnVsbDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy50aW50ID0ge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogMHgwMGZmMDAsXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2ZveCcsIGUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGFiaWxpdHlXb2xmOiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHR4OiAzNTAsXG5cdFx0XHRcdHk6IDQwMCxcblx0XHRcdFx0Y2hpbGRyZW46IHtcblx0XHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRcdHNyYzogQUJJTElUWV9XT0xGLFxuXHRcdFx0XHRcdHNjYWxlOiAwLjUsXG5cdFx0XHRcdFx0YWxwaGE6IDEsXG5cdFx0XHRcdFx0dHdlZW46IHtcblx0XHRcdFx0XHRcdGxvb3A6IHRydWUsXG5cdFx0XHRcdFx0XHRwaGFzZXM6IFtcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeDogMjAwIH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6ICdjdWJpY291dCcsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB5OiAyMDAsIGFscGhhOiAwLjUgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ3F1YWRyYXRpY0luJyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHg6IDAsIGFscGhhOiAxIH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6ICdxdWFkcmF0aWNPdXQnLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeTogMCB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGZwczogZnBzKHBhcmFtZXRlcnMpLFxuXHRcdH0sXG5cdH07XG5cblx0Y29uc3QgcHJlbG9hZGVySW5mbzogUHJlbG9hZGVySW5mbyA9IHtcblx0XHRnZXRXaWR0aDogcGFyYW1ldGVycy5nZXRDYW52YXNXaWR0aCxcblx0XHRnZXRIZWlnaHQ6IHBhcmFtZXRlcnMuZ2V0Q2FudmFzSGVpZ2h0LFxuXHRcdGdldFByb2dyZXNzKCkge1xuXHRcdFx0cmV0dXJuIExvYWRlci5nZXRMb2FkaW5nUHJvZ3Jlc3MoY29udGVudCk7XG5cdFx0fSxcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRjb250ZW50LFxuXHRcdFx0cHJlbG9hZGVyOiBwcmVsb2FkZXIocHJlbG9hZGVySW5mbyksXG5cdFx0XHRzY2VuZToge1xuXHRcdFx0XHR0eXBlOiAnc2NlbmUnLCB4OiAzMDAsIHNyYzogU0NFTkUsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0b25VcGRhdGUoKSB7XG5cdFx0XHRjb25zdCBpc0xvYWRlZCA9ICF0aGlzLmNoaWxkcmVuLmNvbnRlbnQudmlzaWJsZTtcblx0XHRcdHRoaXMuY2hpbGRyZW4ucHJlbG9hZGVyLnZpc2libGUgPSBpc0xvYWRlZDtcblx0XHRcdHRoaXMuY2hpbGRyZW4ucHJlbG9hZGVyLmVuYWJsZWQgPSBpc0xvYWRlZDtcblx0XHR9LFxuXHRcdHN0YXJ0KCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ3N0YXJ0Jyk7XG5cdFx0fSxcblx0fTtcbn1cbiIsImltcG9ydCB7IFNoYXBlIH0gZnJvbSAnQGplbmcvc2hhcGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByZWxvYWRlckluZm8ge1xuXHRnZXRQcm9ncmVzcygpOiBudW1iZXI7XG5cdGdldFdpZHRoKCk6IG51bWJlcjtcblx0Z2V0SGVpZ2h0KCk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWRlcihpbmZvOiBQcmVsb2FkZXJJbmZvKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ3NoYXBlJyxcblx0XHRzY2FsZVg6IDEsXG5cdFx0eTogaW5mby5nZXRIZWlnaHQoKSAtIDIwLFxuXHRcdGRhdGE6IHtcblx0XHRcdHR5cGU6ICdyZWN0YW5nbGUnLFxuXHRcdFx0d2lkdGg6IDEsXG5cdFx0XHRoZWlnaHQ6IDIwLFxuXHRcdFx0ZmlsbDogMHhmZjAwMDAsXG5cdFx0fSxcblx0XHRvblVwZGF0ZSgpIHtcblx0XHRcdHRoaXMuc2NhbGVYID0gdGhpcy5zY2FsZVggPz8gMDtcblx0XHRcdHRoaXMuc2NhbGVYICs9IChpbmZvLmdldFdpZHRoKCkgKiBpbmZvLmdldFByb2dyZXNzKCkgLSB0aGlzLnNjYWxlWCkgLyAyO1xuXHRcdH0sXG5cdH0gYXMgU2hhcGU7XG59XG4iLCJjb25zdCBTUEVFRCA9IDEwMDtcblxuaW50ZXJmYWNlIFVuaXQge1xuXHRba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdFByb3BlcnRpZXMge1xuXHRuYW1lOiBzdHJpbmcsXG5cdGhlYWx0aDogbnVtYmVyLFxuXHRpbWFnZTogc3RyaW5nLFxuXHRvbkNsaWNrOiAoZGF0YTogVW5pdFByb3BlcnRpZXMpID0+IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIG9uUHJvcHNVcGRhdGUocHJvcHM6IGFueSwgY2FsbGJhY2s6ICh0aW1lOiBudW1iZXIpID0+IHZvaWQpIHtcblx0Y29uc3QgY29weSA9IHsgLi4ucHJvcHMgfTtcblx0cmV0dXJuICh0aW1lOiBudW1iZXIpID0+IHtcblx0XHQvLyBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpO1xuXHRcdGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gcHJvcHMpIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcblx0XHRcdGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdGlmIChjb3B5W2tleV0gIT09IHByb3BzW2tleV0pIHtcblx0XHRcdFx0XHRjb3B5W2tleV0gPSBwcm9wc1trZXldO1xuXHRcdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZWQpIHtcblx0XHRcdGNhbGxiYWNrKHRpbWUpO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gcnVuT25Qcm9wc1VwZGF0ZShwcm9wczogYW55LCBjb21wb25lbnQ6IGFueSkge1xuXHRjb21wb25lbnQub25VcGRhdGUgPSBvblByb3BzVXBkYXRlKHByb3BzLCBjb21wb25lbnQub25VcGRhdGUuYmluZChjb21wb25lbnQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXQocHJvcHM6IFVuaXRQcm9wZXJ0aWVzKTogVW5pdCB7XG5cdGZ1bmN0aW9uIGdldFRpdGxlKCkge1xuXHRcdHJldHVybiBgJHtwcm9wcy5uYW1lfVxcbiR7TWF0aC5yb3VuZChwcm9wcy5oZWFsdGggKiAxMDApfSVgO1xuXHR9XG5cblx0Y29uc3QgdW5pdFZpZXcgPSB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0eDogNTAgKyBNYXRoLnJhbmRvbSgpICogNDAwLFxuXHRcdHk6IDIwMCxcblx0XHRyb3RhdGlvbjogMCxcblx0XHR1cGRhdGVNb3ZlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0dGhpcy54ICs9IHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYICogdGltZSAqIFNQRUVEO1xuXHRcdFx0aWYgKHRoaXMueCA8IDUwKSB7XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYID0gMTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy54ID4gNDAwKSB7XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYID0gLTE7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMudXBkYXRlTW92ZSh0aW1lKTtcblx0XHR9LFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHR0ZXh0OiB7XG5cdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0dGV4dDogZ2V0VGl0bGUoKSxcblx0XHRcdFx0Zm9ybWF0OiB7XG5cdFx0XHRcdFx0c2l6ZTogMTUsXG5cdFx0XHRcdFx0Y29sb3I6IDB4ZmZkZGRkLFxuXHRcdFx0XHRcdGFsaWduOiAnY2VudGVyJyxcblx0XHRcdFx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0Ym9yZGVyOiAweDAwZmYwMCxcblx0XHRcdFx0eTogLTMwLFxuXHRcdFx0XHRoZWlnaHQ6IDM1LFxuXHRcdFx0XHRwaXZvdFg6IDAuNSxcblx0XHRcdFx0b25Qb2ludGVyRG93bjogKCkgPT4ge1xuXHRcdFx0XHRcdHByb3BzLm9uQ2xpY2socHJvcHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblVwZGF0ZSgpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQgPSBnZXRUaXRsZSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogcHJvcHMuaW1hZ2UsXG5cdFx0XHRcdHNjYWxlWDogTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSxcblx0XHRcdFx0cGl2b3RYOiAwLjUsXG5cdFx0XHRcdG9uUG9pbnRlckRvd246ICgpID0+IHtcblx0XHRcdFx0XHRwcm9wcy5vbkNsaWNrKHByb3BzKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblxuXHRydW5PblByb3BzVXBkYXRlKHByb3BzLCB1bml0Vmlldy5jaGlsZHJlbi50ZXh0KTtcblxuXHRyZXR1cm4gdW5pdFZpZXc7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgeyBDb21wb25lbnQsIE1vdXNlRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBUd2VlbkV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3R3ZWVuJztcbmltcG9ydCB7IENhbnZhc1RleHRFeHRlbnNpb24gfSBmcm9tICdAamVuZy90ZXh0JztcbmltcG9ydCB7IENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gfSBmcm9tICdAamVuZy9pbWFnZSc7XG5pbXBvcnQgeyBDYW52YXNTaGFwZUV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3NoYXBlJztcbmltcG9ydCB7IENhbnZhc0VuZ2luZSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBTY2VuZUV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3NjZW5lJztcbmltcG9ydCBDdXN0b21SZXNvdXJjZU1hbmFnZXIgZnJvbSAnLi9lbmdpbmUvcmVzb3VyY2VzJztcbmltcG9ydCBDdXN0b21FbmdpbmUgZnJvbSAnLi9lbmdpbmUvZW5naW5lJztcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbic7XG5pbXBvcnQge1xuXHRBTklNQUxJU1QsIEFOSU1BTElTVF9JTUFHRSwgQVJDSEVSLCBBUkNIRVJfSU1BR0UsIFRFU1RfQ0FOVkFTLFxufSBmcm9tICcuL2Fzc2V0cyc7XG5cbi8vIHBhZ2VcbmRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gJzAnO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nID0gJzAnO1xuXG4vLyBiYXNpYyBlbmdpbmVcbmNvbnN0IGVuZ2luZSA9IG5ldyBDYW52YXNFbmdpbmUoKTtcbkNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuQ2FudmFzVGV4dEV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5DYW52YXNTaGFwZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5Ud2VlbkV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5TY2VuZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5Nb3VzZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5lbmdpbmUuc2NyZWVuLmZ1bGxzY3JlZW4gPSB0cnVlO1xuZW5naW5lLnRpY2tlci5wbGF5KCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVuZ2luZS5wbGF0Zm9ybS52aWV3KTtcblxuY29uc3QgcGFyYW1ldGVycyA9IHtcblx0Z2V0VXBkYXRlVGltZSgpIHtcblx0XHRyZXR1cm4gZW5naW5lLnVwZGF0ZXIuZWxhcHNlZFRpbWU7XG5cdH0sXG5cdGdldFJlbmRlclRpbWUoKSB7XG5cdFx0cmV0dXJuIGVuZ2luZS5yZW5kZXJlci5lbGFwc2VkVGltZTtcblx0fSxcblx0Z2V0Q2FudmFzV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZW5naW5lLnNjcmVlbi5nZXRXaWR0aCgpO1xuXHR9LFxuXHRnZXRDYW52YXNIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZW5naW5lLnNjcmVlbi5nZXRIZWlnaHQoKTtcblx0fSxcbn07XG5cbi8vIGFwcGxpY2F0aW9uXG5jb25zdCBhcHAgPSBtYWluKHBhcmFtZXRlcnMpO1xuYXBwLnN0YXJ0KCk7XG5lbmdpbmUucm9vdCA9IGFwcCBhcyBhbnkgYXMgQ29tcG9uZW50O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbmNvbnNvbGUubG9nKGFwcCk7XG5cbi8vIHRlc3QgcGF1c2VcbnNldFRpbWVvdXQoKCkgPT4gZW5naW5lLnRpY2tlci5wYXVzZSgpLCA1MDAwKTtcbnNldFRpbWVvdXQoKCkgPT4gZW5naW5lLnRpY2tlci5wbGF5KCksIDEwMDAwKTtcblxuLy8gY3VzdG9tIGVuZ2luZVxuY29uc3QgY3VzdG9tRW5naW5lID0gbmV3IEN1c3RvbUVuZ2luZSgpO1xuY3VzdG9tRW5naW5lLnNjcmVlbi5mdWxsc2NyZWVuID0gZmFsc2U7XG5jdXN0b21FbmdpbmUuc2NyZWVuLmhlaWdodCA9IDYwMDtcbmN1c3RvbUVuZ2luZS51cGRhdGVyLmVuYWJsZWQgPSBmYWxzZTtcbmN1c3RvbUVuZ2luZS5yb290ID0gZW5naW5lLnJvb3Q7XG5jdXN0b21FbmdpbmUudGlja2VyLnBsYXkoKTtcbmN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbmN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3LnN0eWxlLnRvcCA9ICcwcHgnO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUubGVmdCA9ICc2MDBweCc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3KTtcblxuLy8gLy8gc2V0IGN1c3RvbSByZXNvdXJjZVxuZW5naW5lLnJlc291cmNlcy5yZXNvdXJjZXMuc2V0KFxuXHRURVNUX0NBTlZBUyxcblx0e1xuXHRcdGFzc2V0OiBURVNUX0NBTlZBUyxcblx0XHRpbWFnZTogY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcsXG5cdFx0bG9hZGVkOiB0cnVlLFxuXHR9IGFzIEltYWdlUmVzb3VyY2UsXG4pO1xuY3VzdG9tRW5naW5lLnJlc291cmNlcy5yZXNvdXJjZXMuc2V0KFxuXHRURVNUX0NBTlZBUyxcblx0e1xuXHRcdGFzc2V0OiBURVNUX0NBTlZBUyxcblx0XHRpbWFnZTogZW5naW5lLnBsYXRmb3JtLnZpZXcsXG5cdFx0bG9hZGVkOiB0cnVlLFxuXHR9IGFzIEltYWdlUmVzb3VyY2UsXG4pO1xuXG4vLyBjdXN0b20gcmVzb3VyY2UgcmVzb2x2ZXJcbmNvbnN0IHJlc291cmNlTWFuYWdlciA9IG5ldyBDdXN0b21SZXNvdXJjZU1hbmFnZXIoKTtcbnJlc291cmNlTWFuYWdlci5hbGlhc2VzLnNldChBUkNIRVIucmVwbGFjZSgnaWQ6JywgJycpLCBBUkNIRVJfSU1BR0UpO1xucmVzb3VyY2VNYW5hZ2VyLmFsaWFzZXMuc2V0KEFOSU1BTElTVC5yZXBsYWNlKCdpZDonLCAnJyksIEFOSU1BTElTVF9JTUFHRSk7XG5yZXNvdXJjZU1hbmFnZXIuaW5pdChlbmdpbmUpO1xucmVzb3VyY2VNYW5hZ2VyLmluaXQoY3VzdG9tRW5naW5lKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=