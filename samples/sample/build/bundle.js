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

  function keyTest(container, engine) {
    var children = container.children;
    var keyboard = engine.keyboard;

    if (children) {
      keyboard.depth++;

      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          var component = children[i];
          keyboard.dispatchComponent(component);
        }
      } else if (children.type) {
        var _component7 = children;
        keyboard.dispatchComponent(_component7);
      } else {
        var componentsMap = children;
        var keys = Object.keys(componentsMap);

        for (var _i4 = 0; _i4 < keys.length; _i4++) {
          var _component8 = componentsMap[keys[_i4]];
          keyboard.dispatchComponent(_component8);
        }
      }

      keyboard.depth--;
    }
  }

  ContainerExtension.keyTest = keyTest;

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
        var _component9 = children;
        loading.updateComponent(_component9);

        var _componentContext = loading.getContext();

        context.progress = _componentContext.progress;
        context.loaded = _componentContext.loaded;
      } else {
        var componentsMap = children;
        var keys = Object.keys(componentsMap);

        if (keys.length) {
          context.progress = 0;
          context.loaded = true;

          for (var _i5 = 0; _i5 < keys.length; _i5++) {
            var _component10 = componentsMap[keys[_i5]];
            loading.updateComponent(_component10);

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
    engine.components.keyTest.set(CONTAINER, keyTest);
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
/* harmony import */ var _features_keyboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../features/keyboard */ "../../packages/core/dist/features/keyboard.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }














var Engine = function Engine() {
  var _module$Components, _module$Screen, _module$Platform, _module$Updater, _module$Loading, _module$Renderer, _module$Pointers, _module$Keyboard, _module$Ticker, _module$Debug, _module$Resources;

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
  module.Keyboard = (_module$Keyboard = module.Keyboard) !== null && _module$Keyboard !== void 0 ? _module$Keyboard : _features_keyboard__WEBPACK_IMPORTED_MODULE_12__.Keyboard;
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
  this.keyboard = new module.Keyboard(this);
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

/***/ "../../packages/core/dist/extensions/key.js":
/*!**************************************************!*\
  !*** ../../packages/core/dist/extensions/key.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Key": () => (/* binding */ Key)
/* harmony export */ });
var handlersMap = {
  keyDown: 'onKeyDown',
  keyPress: 'onKeyPress',
  keyUp: 'onKeyUp'
};
var Key;

(function (Key) {
  function isKeyEnabled(key) {
    var _key$keyEnabled;

    return (_key$keyEnabled = key.keyEnabled) !== null && _key$keyEnabled !== void 0 ? _key$keyEnabled : true;
  }

  Key.isKeyEnabled = isKeyEnabled;

  function dispatchEvent(component, event) {
    var handlerName = handlersMap[event.type];

    if (handlerName && component[handlerName]) {
      component[handlerName](event);
    }
  }

  Key.dispatchEvent = dispatchEvent;
})(Key || (Key = {}));

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
  this.keyTest = new Map();
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

    this.infos = new Map();
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
    key: "info",
    value: function info() {
      if (!this.enabled) {
        return;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var id = String(args);
      var count = this.infos.get(id);

      if (!count) {
        var _console2;

        count = 0;

        (_console2 = console).info.apply(_console2, args);
      }

      count++;
      this.infos.set(id, count);
    }
  }, {
    key: "error",
    value: function error() {
      if (!this.enabled) {
        return;
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var id = String(args);
      var count = this.errors.get(id);

      if (!count) {
        var _console3;

        count = 0;

        (_console3 = console).error.apply(_console3, args);
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

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var id = String(args);
      var count = this.warnings.get(id);

      if (!count) {
        var _console4;

        count = 0;

        (_console4 = console).warn.apply(_console4, args);
      }

      count++;
      this.warnings.set(id, count);
    }
  }]);

  return Debug;
}();

/***/ }),

/***/ "../../packages/core/dist/features/keyboard.js":
/*!*****************************************************!*\
  !*** ../../packages/core/dist/features/keyboard.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keyboard": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var _core_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/feature */ "../../packages/core/dist/core/feature.js");
/* harmony import */ var _extensions_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extensions/key */ "../../packages/core/dist/extensions/key.js");
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



var Keyboard = /*#__PURE__*/function (_EngineFeature) {
  _inherits(Keyboard, _EngineFeature);

  var _super = _createSuper(Keyboard);

  function Keyboard() {
    var _this;

    _classCallCheck(this, Keyboard);

    _this = _super.apply(this, arguments);
    _this.depth = 0;
    _this.enabled = true;
    return _this;
  }

  _createClass(Keyboard, [{
    key: "dispatch",
    value: function dispatch(event) {
      if (!this.enabled) {
        return;
      }

      var root = this.engine.root;

      if (!root) {
        return;
      }

      this.keyEvent = event;
      this.depth = 0;
      this.dispatchComponent(root);
    }
  }, {
    key: "dispatchComponent",
    value: function dispatchComponent(component) {
      if (this.depth > this.engine.depth) {
        return;
      }

      if (!_extensions_key__WEBPACK_IMPORTED_MODULE_1__.Key.isKeyEnabled(component)) {
        return;
      }

      var handler = this.engine.components.keyTest.get(component.type);

      if (handler) {
        handler(component, this.engine);
      }

      _extensions_key__WEBPACK_IMPORTED_MODULE_1__.Key.dispatchEvent(component, this.keyEvent);
    }
  }]);

  return Keyboard;
}(_core_feature__WEBPACK_IMPORTED_MODULE_0__.EngineFeature);

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
/* harmony export */   "Pivot": () => (/* reexport safe */ _extensions_pivot__WEBPACK_IMPORTED_MODULE_18__.Pivot)
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
/* harmony import */ var _interactive_keyboard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./interactive/keyboard */ "../../packages/core/dist/interactive/keyboard.js");
/* harmony import */ var _extensions_display__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./extensions/display */ "../../packages/core/dist/extensions/display.js");
/* harmony import */ var _extensions_pivot__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./extensions/pivot */ "../../packages/core/dist/extensions/pivot.js");
/* harmony import */ var _extensions_pointer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./extensions/pointer */ "../../packages/core/dist/extensions/pointer.js");
/* harmony import */ var _extensions_source__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./extensions/source */ "../../packages/core/dist/extensions/source.js");
/* harmony import */ var _extensions_transform__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./extensions/transform */ "../../packages/core/dist/extensions/transform.js");
/* harmony import */ var _extensions_update__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./extensions/update */ "../../packages/core/dist/extensions/update.js");
/* harmony import */ var _extensions_key__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./extensions/key */ "../../packages/core/dist/extensions/key.js");

























/***/ }),

/***/ "../../packages/core/dist/interactive/keyboard.js":
/*!********************************************************!*\
  !*** ../../packages/core/dist/interactive/keyboard.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export KeyboardExtension */
function dispatchEvent(engine, event, type) {
  var keyEvent = {
    type: type,
    key: event.key,
    code: event.code,
    ctrl: event.ctrlKey,
    alt: event.altKey,
    shift: event.shiftKey,
    repeat: event.repeat
  };
  engine.keyboard.dispatch(keyEvent);
  event.preventDefault();
}

var KeyboardExtension;

(function (KeyboardExtension) {
  function init(engine) {
    document.addEventListener('keydown', function (event) {
      dispatchEvent(engine, event, 'keyDown');
    });
    document.addEventListener('keypress', function (event) {
      dispatchEvent(engine, event, 'keyPress');
    });
    document.addEventListener('keyup', function (event) {
      dispatchEvent(engine, event, 'keyUp');
    });
  }

  KeyboardExtension.init = init;
})(KeyboardExtension || (KeyboardExtension = {}));

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
          engine.debug.log("image loaded: ".concat(asset));
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
          engine.debug.log("string loaded: ".concat(asset));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jYW52YXMtZW5naW5lL2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NhbnZhcy1lbmdpbmUvZGlzdC9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvY29tcG9uZW50cy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9jb3JlL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvcmUvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMva2V5LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy9waXZvdC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvdHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9jb21wb25lbnRzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3BvaW50ZXJzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9yZXNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy90aWNrZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy91cGRhdGVyLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9pbnRlcmFjdGl2ZS9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ludGVyYWN0aXZlL21vdXNlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvaW50ZXJhY3RpdmUvdG91Y2guanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9ib3VuZHMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9jb2xvci10cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L21hdHJpeC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L3BvaW50LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9pbWFnZS9kaXN0L2NhbnZhcy1pbWFnZS1jb2xvci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvaW1hZ2UvZGlzdC9jYW52YXMtaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3Jlc291cmNlcy9kaXN0L2ltYWdlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9yZXNvdXJjZXMvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvcmVzb3VyY2VzL2Rpc3Qvc3RyaW5nLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zY2VuZS9kaXN0L3NjZW5lLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9lbGxpcHNlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9wYXRoLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvY2FudmFzL3NoYXBlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvY2FudmFzL3N0eWxlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2RhdGEvZGF0YS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9kYXRhL3BhdGguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvZGF0YS9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvZ3JhcGhpY3MuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3Qvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC9jYW52YXMvdGV4dC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2RhdGEvZm9udC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2RhdGEvZm9ybWF0LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvZGF0YS9tZXRyaWNzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC90ZXh0LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90d2Vlbi9kaXN0L2Vhc2luZy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdHdlZW4vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdHdlZW4vZGlzdC90d2Vlbi5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvYXJ0aWZhY3QudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2Fzc2V0cy50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvZW5naW5lL2VuZ2luZS50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvZW5naW5lL2ltYWdlLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9lbmdpbmUvcGxhdGZvcm0udHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2VuZ2luZS9yZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2Zwcy50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvcHJlbG9hZGVyLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy91bml0LnRzIiwid2VicGFjazovL3NhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zYW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJDYW52YXNFbmdpbmUiLCJtb2R1bGUiLCJQbGF0Zm9ybSIsIkNhbnZhc1BsYXRmb3JtIiwiRW5naW5lIiwiQ2FudmFzUGF0dGVybnMiLCJjb2xvclBhdHRlcm4iLCJjb2xvciIsImFscGhhIiwiY3QiLCJyIiwiZyIsImIiLCJhIiwiQ29sb3JUcmFuc2Zvcm0iLCJyZWRNdWx0aXBsaWVyIiwicmVkT2Zmc2V0IiwiZ3JlZW5NdWx0aXBsaWVyIiwiZ3JlZW5PZmZzZXQiLCJibHVlTXVsdGlwbGllciIsImJsdWVPZmZzZXQiLCJhbHBoYU11bHRpcGxpZXIiLCJhbHBoYU9mZnNldCIsImFkZEdyYWRpZW50Q29sb3JzIiwicGF0dGVybiIsImNvbG9ycyIsImFscGhhcyIsInJhdGlvcyIsImNvbG9yVHJhbnNmb3JtIiwiaSIsImxlbmd0aCIsInJhdGlvIiwiY29sb3JTdHlsZSIsImFkZENvbG9yU3RvcCIsInJhZGlhbEdyYWRpZW50UGF0dGVybiIsImJlZ2luWCIsImJlZ2luWSIsImJlZ2luUmFkaXVzIiwiZW5kWCIsImVuZFkiLCJlbmRSYWRpdXMiLCJjb250ZXh0IiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJsaW5lYXJHcmFkaWVudFBhdHRlcm4iLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImJpdG1hcFBhdHRlcm4iLCJpbWFnZSIsInJlcGVhdCIsIm1hdHJpeCIsImNyZWF0ZVBhdHRlcm4iLCJkb21NYXRyaXgiLCJET01NYXRyaXgiLCJjIiwiZCIsImUiLCJ0eCIsImYiLCJ0eSIsInNldFRyYW5zZm9ybSIsImFyZ3VtZW50cyIsInZpZXciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0cyIsImdldENvbnRleHQiLCJjdXN0b21Db250ZXh0cyIsInB1c2giLCJwb3AiLCJlbmdpbmUiLCJkZWJ1ZyIsIndhcm5pbmciLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImNsZWFyIiwidXBkYXRlU2l6ZSIsImNsZWFyUmVjdCIsInNjcmVlbiIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwicGl4ZWxSYXRpbyIsImdldFBpeGVsUmF0aW8iLCJ2aWV3V2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJ2aWV3SGVpZ2h0Iiwic3R5bGUiLCJDT05UQUlORVIiLCJDb250YWluZXIiLCJudW1DaGlsZHJlbiIsImNvbnRhaW5lciIsImNoaWxkcmVuIiwiQXJyYXkiLCJpc0FycmF5IiwidHlwZSIsImtleXMiLCJPYmplY3QiLCJDb250YWluZXJFeHRlbnNpb24iLCJyZW5kZXIiLCJyZW5kZXJlciIsImRlcHRoIiwiY29tcG9uZW50IiwicmVuZGVyQ29tcG9uZW50IiwiY29tcG9uZW50c01hcCIsInVwZGF0ZSIsInVwZGF0ZXIiLCJ1cGRhdGVDb21wb25lbnQiLCJoaXRUZXN0IiwicG9pbnRlcnMiLCJyZXN1bHQiLCJkaXNwYXRjaENvbXBvbmVudCIsImtleVRlc3QiLCJrZXlib2FyZCIsImxvYWRlZCIsImxvYWRpbmciLCJwcm9ncmVzcyIsImNvbXBvbmVudENvbnRleHQiLCJpbml0IiwiY29tcG9uZW50cyIsInNldCIsIkxPQURFUiIsIkxvYWRlciIsImdldExvYWRpbmdQcm9ncmVzcyIsImxvYWRlciIsImxvYWRpbmdQcm9ncmVzcyIsImlzTG9hZGVkIiwibmVlZExvYWRpbmdDaGVjayIsImxvYWRpbmdDaGVjayIsIkxvYWRlckV4dGVuc2lvbiIsIm9uTG9hZGVkIiwiQ29tcG9uZW50cyIsIlNjcmVlbiIsIlVwZGF0ZXIiLCJMb2FkaW5nIiwiUmVuZGVyZXIiLCJQb2ludGVycyIsIktleWJvYXJkIiwiVGlja2VyIiwiRGVidWciLCJSZXNvdXJjZXMiLCJwbGF0Zm9ybSIsInRpY2tlciIsInJlc291cmNlcyIsIkVuZ2luZUZlYXR1cmUiLCJEaXNwbGF5IiwiaXNWaXNpYmxlIiwidmlzaWJsZSIsImhhbmRsZXJzTWFwIiwia2V5RG93biIsImtleVByZXNzIiwia2V5VXAiLCJLZXkiLCJpc0tleUVuYWJsZWQiLCJrZXkiLCJrZXlFbmFibGVkIiwiZGlzcGF0Y2hFdmVudCIsImV2ZW50IiwiaGFuZGxlck5hbWUiLCJQaXZvdCIsImdldFgiLCJwaXZvdCIsInBpdm90WCIsImdldFkiLCJwaXZvdFkiLCJoYXNWYWx1ZXMiLCJwb2ludGVyRG93biIsInBvaW50ZXJVcCIsInBvaW50ZXJNb3ZlIiwicG9pbnRlckNhbmNlbCIsInBvaW50ZXJPdmVyIiwicG9pbnRlck91dCIsIlBvaW50ZXIiLCJpc1BvaW50ZXJFbmFibGVkIiwicG9pbnRlciIsInBvaW50ZXJFbmFibGVkIiwieCIsInkiLCJnbG9iYWxYIiwiZ2xvYmFsWSIsImlkIiwiVHJhbnNmb3JtIiwiZ2V0TWF0cml4IiwidHJhbnNmb3JtIiwicm90YXRpb24iLCJzY2FsZVgiLCJzY2FsZSIsInNjYWxlWSIsImNvcyIsInNpbiIsImdldENvbG9yVHJhbnNmb3JtIiwidGludCIsInZhbHVlIiwidmFsdWVJbnZlcnRlZCIsImJyaWdodG5lc3MiLCJ1bmRlZmluZWQiLCJwZXJjZW50IiwiYWJzIiwib2Zmc2V0IiwiVXBkYXRlIiwiaXNFbmFibGVkIiwiZW5hYmxlZCIsInRpbWUiLCJvblVwZGF0ZSIsInByb3BlcnRpZXMiLCJNYXAiLCJpbmZvcyIsImVycm9ycyIsIndhcm5pbmdzIiwiY29uc29sZSIsImxvZyIsImFyZ3MiLCJTdHJpbmciLCJjb3VudCIsImdldCIsImluZm8iLCJlcnJvciIsIndhcm4iLCJyb290Iiwia2V5RXZlbnQiLCJoYW5kbGVyIiwiZWxhcHNlZFRpbWUiLCJzdGFydFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImdsb2JhbCIsIlBvaW50IiwibG9jYWwiLCJwb2ludGVySWQiLCJwb2ludGVyVHlwZSIsIk1hdHJpeCIsImJhc2UiLCJwYXJlbnQiLCJwYXJlbnRSZXN1bHQiLCJ1cGRhdGVMb2NhbCIsImJlZ2luIiwiZW5kIiwiUmVzb3VyY2UiLCJnZXRQcm9ncmVzcyIsInJlc291cmNlIiwiYnl0ZXNUb3RhbCIsImJ5dGVzTG9hZGVkIiwicmVzb2x2ZXJzIiwiU2V0IiwiYXNzZXQiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdWxsc2NyZWVuIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZGV2aWNlUGl4ZWxSYXRpbyIsImZyYW1lUmF0ZSIsInBhdXNlZCIsInVwZGF0ZUZyYW1lIiwiY3VycmVudFRpbWUiLCJkZWx0YVRpbWUiLCJ1cGRhdGVOZXh0RnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGVQcm9wZXJ0aWVzIiwiZm9yRWFjaCIsInByb3BlcnR5IiwiY29kZSIsImN0cmwiLCJjdHJsS2V5IiwiYWx0IiwiYWx0S2V5Iiwic2hpZnQiLCJzaGlmdEtleSIsImRpc3BhdGNoIiwicHJldmVudERlZmF1bHQiLCJLZXlib2FyZEV4dGVuc2lvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRMZWZ0IiwiY2xpZW50WSIsInRvcCIsImNsaWVudFRvcCIsIk1vdXNlRXh0ZW5zaW9uIiwiY2hhbmdlZFRvdWNoZXMiLCJ0b3VjaCIsImlkZW50aWZpZXIiLCJUb3VjaEV4dGVuc2lvbiIsIkJvdW5kcyIsImVtcHR5IiwibWluWCIsIk51bWJlciIsIk1BWF9WQUxVRSIsIm1pblkiLCJtYXhYIiwiTUlOX1ZBTFVFIiwibWF4WSIsInNldEVtcHR5IiwiYm91bmRzIiwiaXNFbXB0eSIsInRvUmVjdGFuZ2xlIiwicmVjdGFuZ2xlIiwidGVzdFgiLCJ0ZXN0WSIsInRlc3QiLCJ0ZXN0UG9pbnQiLCJwb2ludCIsImlzRW1wdHlXaXRoQWxwaGEiLCJjb3B5IiwiZnJvbSIsInRvIiwiY29uY2F0IiwiY3QxIiwiY3QwIiwibWF0cml4MCIsIm1hdHJpeDEiLCJnZXREZXRlcm1pbmFudCIsImludmVydCIsImRldGVybWluYW50IiwidHJhbnNmb3JtUG9pbnQiLCJ0cmFuc2Zvcm1Qb2ludExvY2FsIiwidHJhbnNmb3JtSW52ZXJzZVBvaW50IiwidHJhbnNmb3JtQm91bmRzIiwicngiLCJyeSIsInJyIiwicmIiLCJueDEiLCJueTEiLCJueDIiLCJueTIiLCJueDMiLCJueTMiLCJueDQiLCJueTQiLCJyaWdodCIsImJvdHRvbSIsInNxcnQiLCJhbmdsZSIsImF0YW4yIiwiZXF1YWxzIiwicG9pbnQwIiwicG9pbnQxIiwic291cmNlIiwidGFyZ2V0Iiwibm9ybWFsaXplIiwidGhpY2tuZXNzIiwiZGlzdGFuY2UiLCJkeCIsImR5IiwiaW50ZXJwb2xhdGUiLCJwb2xhciIsIlJlY3RhbmdsZSIsImludGVyc2VjdGlvbiIsImNvbnRhaW5zIiwicm91bmQiLCJzY3JlZW5Cb3VuZHMiLCJDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uIiwic3JjIiwiY29udGV4dDJkIiwiZ2xvYmFsQWxwaGEiLCJkcmF3SW1hZ2UiLCJjdXN0b21Db250ZXh0IiwiY3JlYXRlQ3VzdG9tQ29udGV4dCIsImltYWdlRGF0YSIsImdldEltYWdlRGF0YSIsInJtIiwiZ20iLCJibSIsImFtIiwicm8iLCJnbyIsImJvIiwiYW8iLCJkYXRhIiwicHV0SW1hZ2VEYXRhIiwiZGVzdHJveUN1c3RvbUNvbnRleHQiLCJJbWFnZUV4dGVuc2lvbiIsIklNQUdFIiwiQ2FudmFzSW1hZ2VFeHRlbnNpb24iLCJJbWFnZSIsImNhbGN1bGF0ZUJvdW5kcyIsInBvaW50ZXJUZXN0U2hhcGUiLCJIVE1MQ2FudmFzRWxlbWVudCIsImNhbnZhc0NvbnRleHQiLCJJbWFnZVJlc291cmNlIiwiZXh0ZW5zaW9uIiwic3BsaXQiLCJvbmxvYWQiLCJvbmVycm9yIiwiYWRkIiwiU3RyaW5nUmVzb3VyY2UiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJvbnByb2dyZXNzIiwidG90YWwiLCJyZXNwb25zZVRleHQiLCJzZW5kIiwiU0NFTkUiLCJTY2VuZUV4dGVuc2lvbiIsInNjZW5lIiwiSlNPTiIsInBhcnNlIiwibWVzc2FnZSIsIlBJXzIiLCJQSSIsImFwcGx5RWxsaXBzZSIsImhhc0ZpbGwiLCJyYWRpdXMiLCJyYWRpdXNYIiwicmFkaXVzWSIsImJlZ2luUGF0aCIsImVsbGlwc2UiLCJjbG9zZVBhdGgiLCJhcHBseUNvbW1hbmQiLCJjb21tYW5kIiwibW92ZVRvIiwibGluZVRvIiwiY3VydmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJjeCIsImN5IiwiY3ViaWNDdXJ2ZVRvIiwiYmV6aWVyQ3VydmVUbyIsInN4Iiwic3kiLCJhcHBseVBhdGgiLCJhcHBseVJlY3RhbmdsZSIsInJlY3QiLCJyZW5kZXJHcmFwaGljcyIsImZpbGwiLCJzdHJva2UiLCJoYXNTdHJva2UiLCJleGlzdCIsInBhdGgiLCJhcHBseVN0cmluZyIsInNldEZpbGxTdHlsZSIsInNldFN0cm9rZVN0eWxlIiwiQ2FudmFzU2hhcGVFeHRlbnNpb24iLCJzaGFwZSIsIlNoYXBlIiwiU2hhcGVFeHRlbnNpb24iLCJTSEFQRSIsInJlYWRlciIsIkdyYXBoaWNzU3RyaW5nUmVhZGVyIiwic2V0UGF0aCIsInJlYWROZXh0IiwiZ2V0Q29tbWFuZCIsImVtcHR5QXJyYXkiLCJlbXB0eU1hdHJpeCIsImdldENhbnZhc1BhdHRlcm4iLCJzb2xpZCIsImxpbmVhciIsInJhZGlhbCIsImJpdG1hcEZpbGwiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsImxpbmVDYXAiLCJsaW5lSm9pbiIsIm1pdGVyTGltaXQiLCJjYXBzIiwiam9pbnRzIiwiUmVjdGFuZ2xlRGF0YSIsIkVsbGlwc2VEYXRhIiwiUGF0aERhdGEiLCJwYXRoRGF0YSIsIkdyYXBoaWNzU3RyaW5nIiwiUGF0aENvbW1hbmQiLCJHcmFwaGljc0RhdGEiLCJOVU1CRVJTX0NPVU5UIiwiTSIsIm0iLCJMIiwibCIsIkgiLCJoIiwiViIsInYiLCJDIiwiUyIsInMiLCJRIiwicSIsIlQiLCJ0IiwiQ09NTUFORF9SRUdFWCIsIk5VTUJFUl9SRUdFWCIsIkdyYXBoaWNzU3RyaW5nU3RyZWFtIiwiYnVmZmVyIiwic3ltYm9sUmVnZXgiLCJsYXN0SW5kZXgiLCJzeW1ib2xNYXRjaCIsImV4ZWMiLCJzeW1ib2wiLCJudW1iZXJNYXRjaCIsInBhcnNlRmxvYXQiLCJzdHJlYW0iLCJjb21tYW5kRXhpc3RzIiwibGFzdFgiLCJsYXN0WSIsImxhc3RDWCIsImxhc3RDWSIsImdldEJ1ZmZlciIsImUwIiwiZTEiLCJlMiIsImUzIiwiZTQiLCJlNSIsInRlbXBQb2ludDAiLCJ0ZW1wUG9pbnQxIiwiR3JhcGhpY3MiLCJzbW9vdGgiLCJwaXhlbEhpbnRpbmciLCJzY2FsZU1vZGUiLCJnZXRQYXRoIiwiZWxsaXBzZVdpZHRoIiwiZWxsaXBzZUhlaWdodCIsInciLCJrIiwib3giLCJveSIsInhlIiwieWUiLCJ4bSIsInltIiwiY3JlYXRlRGF0YSIsImdyYXBoaWNzRGF0YSIsImRlZmF1bHRUZXh0Rm9ybWF0IiwiQ09SUkVDVElPTiIsIkNhbnZhc1RleHRFeHRlbnNpb24iLCJUZXh0IiwibWV0cmljcyIsImZvcm1hdCIsImJvcmRlciIsImJhY2tncm91bmQiLCJUZXh0Rm9ybWF0IiwicmVhbFdpZHRoIiwicmVhbEhlaWdodCIsIm9mZnNldFgiLCJvZmZzZXRZIiwidGV4dEJhc2VsaW5lIiwic2ltcGxlIiwidGV4dCIsInNpemUiLCJsZWFkaW5nIiwibGV0dGVyU3BhY2luZyIsImRlZmF1bHRGb250IiwiRm9udCIsInN5bWJvbFNpemUiLCJhbGlnblZhbHVlIiwiZm9udCIsIlRleHRNZXRyaWNzIiwic3ltYm9sTmV4dCIsImFkdmFuY2UiLCJmaWxsVGV4dCIsImFsaWduVmVydGljYWxWYWx1ZSIsImxpbmVzIiwibGluZSIsInN5bWJvbHMiLCJmaXJzdCIsImxpbmVIZWlnaHQiLCJqIiwiYWxpZ25TeW1ib2xWYWx1ZSIsInN5bWJvbEZvbnQiLCJUZXh0RXh0ZW5zaW9uIiwiVEVYVCIsIkVNIiwiZm9udHMiLCJnZXRTdHlsZSIsIm5hbWUiLCJyZXBsYWNlIiwidG9TdHJpbmciLCJtZWFzdXJlVGV4dCIsImdldENoYXJXaWR0aCIsImNoYXIiLCJ3aWR0aHMiLCJnZXRLZXJuaW5nIiwic2Vjb25kIiwicGFpciIsImtlcm5pbmciLCJrZXJuaW5ncyIsIndpZHRoU2Vjb25kIiwid2lkdGhUb3RhbCIsImdldEFkdmFuY2UiLCJnZXRGb250IiwiYm9sZCIsIml0YWxpYyIsInVuZGVybGluZSIsImFsaWduIiwidmVydGljYWxBbGlnbiIsImNvbWJpbmUiLCJkZWZhdWx0Rm9ybWF0IiwiZ2V0QWxpZ25WYWx1ZSIsImdldFZlcnRpY2FsQWxpZ25WYWx1ZSIsIlRleHRMaW5lIiwiY3JlYXRlIiwibWF4IiwiY29ycmVjdFdpZHRoIiwibGFzdCIsImNvcnJlY3RIZWlnaHQiLCJnZXRTeW1ib2xzIiwic3ltYm9sRm9ybWF0IiwiYmxvY2siLCJnZXRMaW5lcyIsIndvcmRXcmFwIiwibXVsdGlsaW5lIiwid29yZCIsImdldE1ldHJpY3MiLCJnZXRTaW1wbGVNZXRyaWNzIiwiZ2V0U2ltcGxlV2lkdGgiLCJpbmRleCIsImdldFRleHQiLCJpc1VwZGF0ZU1ldHJpY3MiLCJ1cGRhdGVNZXRyaWNzIiwiaXNBdXRvU2l6ZSIsImlzU2ltcGxlIiwiaXNNdWx0aWxpbmUiLCJMSU5FQVIiLCJRVUFEUkFUSUMiLCJRVUFEUkFUSUNfSU4iLCJRVUFEUkFUSUNfT1VUIiwiQ1VCSUMiLCJDVUJJQ19JTiIsIkNVQklDX09VVCIsIlFVQVJUSUMiLCJRVUFSVElDX0lOIiwiUVVBUlRJQ19PVVQiLCJRVUlOVElDIiwiUVVJTlRJQ19JTiIsIlFVSU5USUNfT1VUIiwiU0lOVVNPSURBTCIsIlNJTlVTT0lEQUxfSU4iLCJTSU5VU09JREFMX09VVCIsIkVYUE9ORU5USUFMIiwiRVhQT05FTlRJQUxfSU4iLCJFWFBPTkVOVElBTF9PVVQiLCJDSVJDVUxBUiIsIkNJUkNVTEFSX0lOIiwiQ0lSQ1VMQVJfT1VUIiwiRUxBU1RJQyIsIkVMQVNUSUNfSU4iLCJFTEFTVElDX09VVCIsIkJBQ0siLCJCQUNLX0lOIiwiQkFDS19PVVQiLCJCT1VOQ0UiLCJCT1VOQ0VfSU4iLCJCT1VOQ0VfT1VUIiwiZWFzaW5nIiwicG93IiwiVFdFRU4iLCJUd2VlbkV4dGVuc2lvbiIsInR3ZWVuIiwicGhhc2VzIiwicGhhc2UiLCJlYXNpbmdOYW1lIiwidG9Mb3dlckNhc2UiLCJlYXNpbmdNZXRob2QiLCJlYXNpbmdWYWx1ZSIsInN0YXRlIiwiZnJvbVZhbHVlIiwidG9WYWx1ZSIsInN0YXRlVmFsdWUiLCJsb29wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ08sSUFBTUEsWUFBYjtBQUFBOztBQUFBOztBQUNJLDBCQUF5QjtBQUFBOztBQUFBLFFBQWJDLE1BQWEsdUVBQUosRUFBSTs7QUFB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QUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQ2hELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFHdEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUM3QixnREFBVyxFQUNYO0lBQ0MsS0FBSyxFQUFFLGdEQUFXO0lBQ2xCLEtBQUssRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUk7SUFDakMsTUFBTSxFQUFFLElBQUk7Q0FDSyxDQUNsQixDQUFDO0FBQ0YsWUFBWSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUNuQyxnREFBVyxFQUNYO0lBQ0MsS0FBSyxFQUFFLGdEQUFXO0lBQ2xCLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUk7SUFDM0IsTUFBTSxFQUFFLElBQUk7Q0FDSyxDQUNsQixDQUFDO0FBR0YsTUFBTSxlQUFlLEdBQUcsSUFBSSx1REFBcUIsRUFBRSxDQUFDO0FBQ3BELGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLGlEQUFZLENBQUMsQ0FBQztBQUNyRSxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzREFBaUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsb0RBQWUsQ0FBQyxDQUFDO0FBQzNFLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5leHBvcnQgY2xhc3MgQ2FudmFzRW5naW5lIGV4dGVuZHMgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGUgPSB7fSkge1xuICAgICAgICBtb2R1bGUuUGxhdGZvcm0gPSBtb2R1bGUuUGxhdGZvcm0gPz8gQ2FudmFzUGxhdGZvcm07XG4gICAgICAgIHN1cGVyKG1vZHVsZSk7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9wYXR0ZXJucyc7XG5leHBvcnQgKiBmcm9tICcuL3BsYXRmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZW5naW5lJztcbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5leHBvcnQgdmFyIENhbnZhc1BhdHRlcm5zO1xuKGZ1bmN0aW9uIChDYW52YXNQYXR0ZXJucykge1xuICAgIGZ1bmN0aW9uIGNvbG9yUGF0dGVybihjb2xvciwgYWxwaGEsIGN0KSB7XG4gICAgICAgIGxldCByID0gY29sb3IgPj4gMTYgJiAweGZmO1xuICAgICAgICBsZXQgZyA9IGNvbG9yID4+IDggJiAweGZmO1xuICAgICAgICBsZXQgYiA9IGNvbG9yICYgMHhmZjtcbiAgICAgICAgbGV0IGEgPSBhbHBoYSAqIDB4ZmY7XG4gICAgICAgIGlmICghQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eShjdCkpIHtcbiAgICAgICAgICAgIHIgPSAociAqIGN0LnJlZE11bHRpcGxpZXIgKyBjdC5yZWRPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIGcgPSAoZyAqIGN0LmdyZWVuTXVsdGlwbGllciArIGN0LmdyZWVuT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBiID0gKGIgKiBjdC5ibHVlTXVsdGlwbGllciArIGN0LmJsdWVPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIGEgPSAoYSAqIGN0LmFscGhhTXVsdGlwbGllciArIGN0LmFscGhhT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEgPCAweGZmKSB7XG4gICAgICAgICAgICByZXR1cm4gYHJnYmEoJHtyfSwgJHtnfSwgJHtifSwgJHthIC8gMHhmZn0pYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYHJnYigke3J9LCAke2d9LCAke2J9KWA7XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybiA9IGNvbG9yUGF0dGVybjtcbiAgICBmdW5jdGlvbiBhZGRHcmFkaWVudENvbG9ycyhwYXR0ZXJuLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBjb2xvcnNbaV07XG4gICAgICAgICAgICBjb25zdCBhbHBoYSA9IGFscGhhc1tpXTtcbiAgICAgICAgICAgIGxldCByYXRpbyA9IHJhdGlvc1tpXTtcbiAgICAgICAgICAgIGlmIChyYXRpbyA8IDApXG4gICAgICAgICAgICAgICAgcmF0aW8gPSAwO1xuICAgICAgICAgICAgaWYgKHJhdGlvID4gMSlcbiAgICAgICAgICAgICAgICByYXRpbyA9IDE7XG4gICAgICAgICAgICBjb25zdCBjb2xvclN0eWxlID0gY29sb3JQYXR0ZXJuKGNvbG9yLCBhbHBoYSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgcGF0dGVybi5hZGRDb2xvclN0b3AocmF0aW8sIGNvbG9yU3R5bGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmFkZEdyYWRpZW50Q29sb3JzID0gYWRkR3JhZGllbnRDb2xvcnM7XG4gICAgZnVuY3Rpb24gcmFkaWFsR3JhZGllbnRQYXR0ZXJuKGJlZ2luWCwgYmVnaW5ZLCBiZWdpblJhZGl1cywgZW5kWCwgZW5kWSwgZW5kUmFkaXVzLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudChiZWdpblgsIGJlZ2luWSwgYmVnaW5SYWRpdXMsIGVuZFgsIGVuZFksIGVuZFJhZGl1cyk7XG4gICAgICAgIGFkZEdyYWRpZW50Q29sb3JzKHBhdHRlcm4sIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLnJhZGlhbEdyYWRpZW50UGF0dGVybiA9IHJhZGlhbEdyYWRpZW50UGF0dGVybjtcbiAgICBmdW5jdGlvbiBsaW5lYXJHcmFkaWVudFBhdHRlcm4oYmVnaW5YLCBiZWdpblksIGVuZFgsIGVuZFksIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KGJlZ2luWCwgYmVnaW5ZLCBlbmRYLCBlbmRZKTtcbiAgICAgICAgYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMubGluZWFyR3JhZGllbnRQYXR0ZXJuID0gbGluZWFyR3JhZGllbnRQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGJpdG1hcFBhdHRlcm4oaW1hZ2UsIHJlcGVhdCwgbWF0cml4LCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVBhdHRlcm4oaW1hZ2UsIHJlcGVhdCA/ICdyZXBlYXQnIDogJ25vbmUnKTtcbiAgICAgICAgaWYgKHBhdHRlcm4pIHtcbiAgICAgICAgICAgIGNvbnN0IGRvbU1hdHJpeCA9IG5ldyBET01NYXRyaXgoKTtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5hID0gbWF0cml4LmEgPz8gMTtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5iID0gbWF0cml4LmIgPz8gMDtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5jID0gbWF0cml4LmMgPz8gMDtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5kID0gbWF0cml4LmQgPz8gMTtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5lID0gbWF0cml4LnR4ID8/IDA7XG4gICAgICAgICAgICBkb21NYXRyaXguZiA9IG1hdHJpeC50eSA/PyAwO1xuICAgICAgICAgICAgcGF0dGVybi5zZXRUcmFuc2Zvcm0oZG9tTWF0cml4KTtcbiAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMuYml0bWFwUGF0dGVybiA9IGJpdG1hcFBhdHRlcm47XG59KShDYW52YXNQYXR0ZXJucyB8fCAoQ2FudmFzUGF0dGVybnMgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAamVuZy9jb3JlJztcbmV4cG9ydCBjbGFzcyBDYW52YXNQbGF0Zm9ybSBleHRlbmRzIFBsYXRmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbdGhpcy52aWV3LmdldENvbnRleHQoJzJkJyldO1xuICAgICAgICB0aGlzLmN1c3RvbUNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRzW3RoaXMuY29udGV4dHMubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIHNhdmVDb250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICByZXN0b3JlQ29udGV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0cy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmRlYnVnLndhcm5pbmcoJ1RyeWluZyB0byByZXN0b3JlIG1haW4gY29udGV4dCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUN1c3RvbUNvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0O1xuICAgICAgICBpZiAodGhpcy5jdXN0b21Db250ZXh0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmN1c3RvbUNvbnRleHRzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnZpZXc7XG4gICAgICAgIGlmIChjb250ZXh0LmNhbnZhcy53aWR0aCAhPT0gd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRleHQuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgICBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIGRlc3Ryb3lDdXN0b21Db250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jdXN0b21Db250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICBiZWdpbigpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgpO1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB2aWV3LndpZHRoLCB2aWV3LmhlaWdodCk7XG4gICAgfVxuICAgIHVwZGF0ZVNpemUoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbmdpbmUuc2NyZWVuLmdldFdpZHRoKCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRIZWlnaHQoKTtcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIGNvbnN0IHZpZXdXaWR0aCA9IE1hdGguZmxvb3Iod2lkdGggKiBwaXhlbFJhdGlvKTtcbiAgICAgICAgY29uc3Qgdmlld0hlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgaWYgKHZpZXcud2lkdGggIT09IHZpZXdXaWR0aCB8fCB2aWV3LmhlaWdodCAhPT0gdmlld0hlaWdodCkge1xuICAgICAgICAgICAgdmlldy53aWR0aCA9IHZpZXdXaWR0aDtcbiAgICAgICAgICAgIHZpZXcuaGVpZ2h0ID0gdmlld0hlaWdodDtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ09OVEFJTkVSID0gJ2NvbnRhaW5lcic7XG5leHBvcnQgdmFyIENvbnRhaW5lcjtcbihmdW5jdGlvbiAoQ29udGFpbmVyKSB7XG4gICAgZnVuY3Rpb24gbnVtQ2hpbGRyZW4oY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbik7XG4gICAgICAgICAgICByZXR1cm4ga2V5cy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIENvbnRhaW5lci5udW1DaGlsZHJlbiA9IG51bUNoaWxkcmVuO1xufSkoQ29udGFpbmVyIHx8IChDb250YWluZXIgPSB7fSkpO1xuZXhwb3J0IHZhciBDb250YWluZXJFeHRlbnNpb247XG4oZnVuY3Rpb24gKENvbnRhaW5lckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgcmVuZGVyZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgcmVuZGVyZXIuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlcmVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHVwZGF0ZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBwb2ludGVycyB9ID0gZW5naW5lO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBwb2ludGVycy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICBwb2ludGVycy5kZXB0aCsrO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnRlcnMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0LCByZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGlmIChwb2ludGVycy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQsIHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBrZXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2ludGVycy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQsIHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludGVycy5kZXB0aC0tO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBrZXlUZXN0KGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBrZXlib2FyZCB9ID0gZW5naW5lO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGtleWJvYXJkLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICBrZXlib2FyZC5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBrZXlib2FyZC5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlib2FyZC5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5rZXlUZXN0ID0ga2V5VGVzdDtcbiAgICBmdW5jdGlvbiBsb2FkZWQoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IGxvYWRpbmcgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gbG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICBsb2FkaW5nLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgKz0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50Q29udGV4dC5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgLz0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGxvYWRpbmcudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSBjb21wb25lbnRDb250ZXh0LnByb2dyZXNzO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gY29tcG9uZW50Q29udGV4dC5sb2FkZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyArPSBjb21wb25lbnRDb250ZXh0LnByb2dyZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnRDb250ZXh0LmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyAvPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9hZGluZy5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLnNldChDT05UQUlORVIsIHVwZGF0ZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoQ09OVEFJTkVSLCByZW5kZXIpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChDT05UQUlORVIsIGhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5rZXlUZXN0LnNldChDT05UQUlORVIsIGtleVRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KENPTlRBSU5FUiwgbG9hZGVkKTtcbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ29udGFpbmVyRXh0ZW5zaW9uIHx8IChDb250YWluZXJFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgQ29udGFpbmVyRXh0ZW5zaW9uIH0gZnJvbSAnLi9jb250YWluZXInO1xuZXhwb3J0IGNvbnN0IExPQURFUiA9ICdsb2FkZXInO1xuZXhwb3J0IHZhciBMb2FkZXI7XG4oZnVuY3Rpb24gKExvYWRlcikge1xuICAgIGZ1bmN0aW9uIGdldExvYWRpbmdQcm9ncmVzcyhsb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRlci5sb2FkaW5nUHJvZ3Jlc3MgPz8gMDtcbiAgICB9XG4gICAgTG9hZGVyLmdldExvYWRpbmdQcm9ncmVzcyA9IGdldExvYWRpbmdQcm9ncmVzcztcbiAgICBmdW5jdGlvbiBpc0xvYWRlZChsb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRlci5sb2FkZWQgPz8gZmFsc2U7XG4gICAgfVxuICAgIExvYWRlci5pc0xvYWRlZCA9IGlzTG9hZGVkO1xuICAgIGZ1bmN0aW9uIG5lZWRMb2FkaW5nQ2hlY2sobG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZGluZ0NoZWNrID8/IHRydWU7XG4gICAgfVxuICAgIExvYWRlci5uZWVkTG9hZGluZ0NoZWNrID0gbmVlZExvYWRpbmdDaGVjaztcbn0pKExvYWRlciB8fCAoTG9hZGVyID0ge30pKTtcbmV4cG9ydCB2YXIgTG9hZGVyRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChMb2FkZXJFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBsb2FkZWQobG9hZGVyLCBlbmdpbmUpIHtcbiAgICAgICAgaWYgKCFMb2FkZXIubmVlZExvYWRpbmdDaGVjayhsb2FkZXIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQ29udGFpbmVyRXh0ZW5zaW9uLmxvYWRlZChsb2FkZXIsIGVuZ2luZSk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUubG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGxvYWRlci5sb2FkaW5nUHJvZ3Jlc3MgPSBjb250ZXh0LnByb2dyZXNzO1xuICAgICAgICBpZiAoY29udGV4dC5sb2FkZWQgJiYgIWxvYWRlci5sb2FkZWQpIHtcbiAgICAgICAgICAgIGxvYWRlci5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGxvYWRlci5vbkxvYWRlZCkge1xuICAgICAgICAgICAgICAgIGxvYWRlci5vbkxvYWRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIExvYWRlckV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLnNldChMT0FERVIsIENvbnRhaW5lckV4dGVuc2lvbi51cGRhdGUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KExPQURFUiwgQ29udGFpbmVyRXh0ZW5zaW9uLnJlbmRlcik7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KExPQURFUiwgQ29udGFpbmVyRXh0ZW5zaW9uLmhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KExPQURFUiwgbG9hZGVkKTtcbiAgICB9XG4gICAgTG9hZGVyRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoTG9hZGVyRXh0ZW5zaW9uIHx8IChMb2FkZXJFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuLi9mZWF0dXJlcy9yZW5kZXJlcic7XG5pbXBvcnQgeyBVcGRhdGVyIH0gZnJvbSAnLi4vZmVhdHVyZXMvdXBkYXRlcic7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi4vZmVhdHVyZXMvbG9hZGluZyc7XG5pbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuLi9mZWF0dXJlcy9zY3JlZW4nO1xuaW1wb3J0IHsgUG9pbnRlcnMgfSBmcm9tICcuLi9mZWF0dXJlcy9wb2ludGVycyc7XG5pbXBvcnQgeyBUaWNrZXIgfSBmcm9tICcuLi9mZWF0dXJlcy90aWNrZXInO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9mZWF0dXJlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDb250YWluZXJFeHRlbnNpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4uL2ZlYXR1cmVzL2RlYnVnJztcbmltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gJy4uL2ZlYXR1cmVzL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi4vZmVhdHVyZXMvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMb2FkZXJFeHRlbnNpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRlcic7XG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJy4uL2ZlYXR1cmVzL2tleWJvYXJkJztcbmV4cG9ydCBjbGFzcyBFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1vZHVsZSA9IHt9KSB7XG4gICAgICAgIHRoaXMuZGVwdGggPSAzMjtcbiAgICAgICAgbW9kdWxlLkNvbXBvbmVudHMgPSBtb2R1bGUuQ29tcG9uZW50cyA/PyBDb21wb25lbnRzO1xuICAgICAgICBtb2R1bGUuU2NyZWVuID0gbW9kdWxlLlNjcmVlbiA/PyBTY3JlZW47XG4gICAgICAgIG1vZHVsZS5QbGF0Zm9ybSA9IG1vZHVsZS5QbGF0Zm9ybSA/PyBQbGF0Zm9ybTtcbiAgICAgICAgbW9kdWxlLlVwZGF0ZXIgPSBtb2R1bGUuVXBkYXRlciA/PyBVcGRhdGVyO1xuICAgICAgICBtb2R1bGUuTG9hZGluZyA9IG1vZHVsZS5Mb2FkaW5nID8/IExvYWRpbmc7XG4gICAgICAgIG1vZHVsZS5SZW5kZXJlciA9IG1vZHVsZS5SZW5kZXJlciA/PyBSZW5kZXJlcjtcbiAgICAgICAgbW9kdWxlLlBvaW50ZXJzID0gbW9kdWxlLlBvaW50ZXJzID8/IFBvaW50ZXJzO1xuICAgICAgICBtb2R1bGUuS2V5Ym9hcmQgPSBtb2R1bGUuS2V5Ym9hcmQgPz8gS2V5Ym9hcmQ7XG4gICAgICAgIG1vZHVsZS5UaWNrZXIgPSBtb2R1bGUuVGlja2VyID8/IFRpY2tlcjtcbiAgICAgICAgbW9kdWxlLkRlYnVnID0gbW9kdWxlLkRlYnVnID8/IERlYnVnO1xuICAgICAgICBtb2R1bGUuUmVzb3VyY2VzID0gbW9kdWxlLlJlc291cmNlcyA/PyBSZXNvdXJjZXM7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBtb2R1bGUuQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBtb2R1bGUuU2NyZWVuKCk7XG4gICAgICAgIHRoaXMucGxhdGZvcm0gPSBuZXcgbW9kdWxlLlBsYXRmb3JtKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZXIgPSBuZXcgbW9kdWxlLlVwZGF0ZXIodGhpcyk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IG5ldyBtb2R1bGUuTG9hZGluZyh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBtb2R1bGUuUmVuZGVyZXIodGhpcyk7XG4gICAgICAgIHRoaXMucG9pbnRlcnMgPSBuZXcgbW9kdWxlLlBvaW50ZXJzKHRoaXMpO1xuICAgICAgICB0aGlzLmtleWJvYXJkID0gbmV3IG1vZHVsZS5LZXlib2FyZCh0aGlzKTtcbiAgICAgICAgdGhpcy50aWNrZXIgPSBuZXcgbW9kdWxlLlRpY2tlcih0aGlzKTtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IG5ldyBtb2R1bGUuRGVidWcoKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgbW9kdWxlLlJlc291cmNlcyh0aGlzKTtcbiAgICAgICAgQ29udGFpbmVyRXh0ZW5zaW9uLmluaXQodGhpcyk7XG4gICAgICAgIExvYWRlckV4dGVuc2lvbi5pbml0KHRoaXMpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgfVxufVxuIiwiZXhwb3J0IHZhciBEaXNwbGF5O1xuKGZ1bmN0aW9uIChEaXNwbGF5KSB7XG4gICAgZnVuY3Rpb24gaXNWaXNpYmxlKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LnZpc2libGUgPz8gdHJ1ZTtcbiAgICB9XG4gICAgRGlzcGxheS5pc1Zpc2libGUgPSBpc1Zpc2libGU7XG59KShEaXNwbGF5IHx8IChEaXNwbGF5ID0ge30pKTtcbiIsImNvbnN0IGhhbmRsZXJzTWFwID0ge1xuICAgIGtleURvd246ICdvbktleURvd24nLFxuICAgIGtleVByZXNzOiAnb25LZXlQcmVzcycsXG4gICAga2V5VXA6ICdvbktleVVwJyxcbn07XG5leHBvcnQgdmFyIEtleTtcbihmdW5jdGlvbiAoS2V5KSB7XG4gICAgZnVuY3Rpb24gaXNLZXlFbmFibGVkKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5LmtleUVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgS2V5LmlzS2V5RW5hYmxlZCA9IGlzS2V5RW5hYmxlZDtcbiAgICBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgZXZlbnQpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlck5hbWUgPSBoYW5kbGVyc01hcFtldmVudC50eXBlXTtcbiAgICAgICAgaWYgKGhhbmRsZXJOYW1lICYmIGNvbXBvbmVudFtoYW5kbGVyTmFtZV0pIHtcbiAgICAgICAgICAgIGNvbXBvbmVudFtoYW5kbGVyTmFtZV0oZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEtleS5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbn0pKEtleSB8fCAoS2V5ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUGl2b3Q7XG4oZnVuY3Rpb24gKFBpdm90KSB7XG4gICAgZnVuY3Rpb24gZ2V0WChwaXZvdCwgd2lkdGgpIHtcbiAgICAgICAgY29uc3QgeyBwaXZvdFggfSA9IHBpdm90O1xuICAgICAgICBpZiAocGl2b3RYKSB7XG4gICAgICAgICAgICByZXR1cm4gLXBpdm90WCAqIHdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBQaXZvdC5nZXRYID0gZ2V0WDtcbiAgICBmdW5jdGlvbiBnZXRZKHBpdm90LCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgeyBwaXZvdFkgfSA9IHBpdm90O1xuICAgICAgICBpZiAocGl2b3RZKSB7XG4gICAgICAgICAgICByZXR1cm4gLXBpdm90WSAqIGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgUGl2b3QuZ2V0WSA9IGdldFk7XG4gICAgZnVuY3Rpb24gaGFzVmFsdWVzKHBpdm90KSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RYLCBwaXZvdFkgfSA9IHBpdm90O1xuICAgICAgICByZXR1cm4gISFwaXZvdFggfHwgISFwaXZvdFk7XG4gICAgfVxuICAgIFBpdm90Lmhhc1ZhbHVlcyA9IGhhc1ZhbHVlcztcbn0pKFBpdm90IHx8IChQaXZvdCA9IHt9KSk7XG4iLCJjb25zdCBoYW5kbGVyc01hcCA9IHtcbiAgICBwb2ludGVyRG93bjogJ29uUG9pbnRlckRvd24nLFxuICAgIHBvaW50ZXJVcDogJ29uUG9pbnRlclVwJyxcbiAgICBwb2ludGVyTW92ZTogJ29uUG9pbnRlck1vdmUnLFxuICAgIHBvaW50ZXJDYW5jZWw6ICdvblBvaW50ZXJDYW5jZWwnLFxuICAgIHBvaW50ZXJPdmVyOiAnb25Qb2ludGVyT3ZlcicsXG4gICAgcG9pbnRlck91dDogJ29uUG9pbnRlck91dCcsXG59O1xuZXhwb3J0IHZhciBQb2ludGVyO1xuKGZ1bmN0aW9uIChQb2ludGVyKSB7XG4gICAgZnVuY3Rpb24gaXNQb2ludGVyRW5hYmxlZChwb2ludGVyKSB7XG4gICAgICAgIHJldHVybiBwb2ludGVyLnBvaW50ZXJFbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIFBvaW50ZXIuaXNQb2ludGVyRW5hYmxlZCA9IGlzUG9pbnRlckVuYWJsZWQ7XG4gICAgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChwb2ludGVyLCB0eXBlLCB4LCB5LCBnbG9iYWxYLCBnbG9iYWxZLCBpZCkge1xuICAgICAgICBjb25zdCBoYW5kbGVyTmFtZSA9IGhhbmRsZXJzTWFwW3R5cGVdO1xuICAgICAgICBpZiAoaGFuZGxlck5hbWUgJiYgcG9pbnRlcltoYW5kbGVyTmFtZV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICAgIGdsb2JhbFgsXG4gICAgICAgICAgICAgICAgZ2xvYmFsWSxcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwb2ludGVyW2hhbmRsZXJOYW1lXShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbn0pKFBvaW50ZXIgfHwgKFBvaW50ZXIgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBUcmFuc2Zvcm07XG4oZnVuY3Rpb24gKFRyYW5zZm9ybSkge1xuICAgIGZ1bmN0aW9uIGdldE1hdHJpeCh0cmFuc2Zvcm0sIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAobWF0cml4KSB7XG4gICAgICAgICAgICByZXN1bHQuYSA9IG1hdHJpeC5hID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYiA9IG1hdHJpeC5iID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuYyA9IG1hdHJpeC5jID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuZCA9IG1hdHJpeC5kID8/IDE7XG4gICAgICAgICAgICByZXN1bHQudHggPSBtYXRyaXgudHggPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IG1hdHJpeC50eSA/PyAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm90YXRpb24gfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gdHJhbnNmb3JtLnNjYWxlWCA/PyB0cmFuc2Zvcm0uc2NhbGUgPz8gMTtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gdHJhbnNmb3JtLnNjYWxlWSA/PyB0cmFuc2Zvcm0uc2NhbGUgPz8gMTtcbiAgICAgICAgcmVzdWx0LnR4ID0gdHJhbnNmb3JtLnggPz8gMDtcbiAgICAgICAgcmVzdWx0LnR5ID0gdHJhbnNmb3JtLnkgPz8gMDtcbiAgICAgICAgaWYgKHJvdGF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gICAgICAgICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihyb3RhdGlvbik7XG4gICAgICAgICAgICByZXN1bHQuYSA9IGNvcyAqIHNjYWxlWDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gc2luICogc2NhbGVYO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAtc2luICogc2NhbGVZO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBjb3MgKiBzY2FsZVk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmEgPSBzY2FsZVg7XG4gICAgICAgIHJlc3VsdC5iID0gMDtcbiAgICAgICAgcmVzdWx0LmMgPSAwO1xuICAgICAgICByZXN1bHQuZCA9IHNjYWxlWTtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldE1hdHJpeCA9IGdldE1hdHJpeDtcbiAgICBmdW5jdGlvbiBnZXRDb2xvclRyYW5zZm9ybSh0cmFuc2Zvcm0sIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybSkge1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5yZWRNdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5NdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5ibHVlTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5yZWRPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmJsdWVPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbHBoYSA9IHRyYW5zZm9ybS5hbHBoYSA/PyAxO1xuICAgICAgICBjb25zdCB7IHRpbnQgfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKHRpbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY29sb3IgPSAwLCB2YWx1ZSA9IDEgfSA9IHRpbnQ7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZUludmVydGVkID0gMSAtIHZhbHVlO1xuICAgICAgICAgICAgY29uc3QgciA9IChjb2xvciA+PiAxNikgJiAweGZmO1xuICAgICAgICAgICAgY29uc3QgZyA9IChjb2xvciA+PiA4KSAmIDB4ZmY7XG4gICAgICAgICAgICBjb25zdCBiID0gY29sb3IgJiAweGZmO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGFscGhhO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IHZhbHVlSW52ZXJ0ZWQ7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSByICogdmFsdWU7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBnICogdmFsdWU7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGIgKiB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgeyBicmlnaHRuZXNzIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChicmlnaHRuZXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChicmlnaHRuZXNzID4gMSkge1xuICAgICAgICAgICAgICAgIGJyaWdodG5lc3MgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYnJpZ2h0bmVzcyA8IC0xKSB7XG4gICAgICAgICAgICAgICAgYnJpZ2h0bmVzcyA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IDEgLSBNYXRoLmFicyhicmlnaHRuZXNzKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgaWYgKGJyaWdodG5lc3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gYnJpZ2h0bmVzcyAqIDI1NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYTtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gcGVyY2VudDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSBwZXJjZW50O1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gcGVyY2VudDtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGFscGhhO1xuICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSAxO1xuICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSAxO1xuICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gMDtcbiAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gMDtcbiAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSAwO1xuICAgIH1cbiAgICBUcmFuc2Zvcm0uZ2V0Q29sb3JUcmFuc2Zvcm0gPSBnZXRDb2xvclRyYW5zZm9ybTtcbn0pKFRyYW5zZm9ybSB8fCAoVHJhbnNmb3JtID0ge30pKTtcbiIsImV4cG9ydCB2YXIgVXBkYXRlO1xuKGZ1bmN0aW9uIChVcGRhdGUpIHtcbiAgICBmdW5jdGlvbiBpc0VuYWJsZWQoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuZW5hYmxlZCA/PyB0cnVlO1xuICAgIH1cbiAgICBVcGRhdGUuaXNFbmFibGVkID0gaXNFbmFibGVkO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZShjb21wb25lbnQsIHRpbWUpIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5vblVwZGF0ZSkge1xuICAgICAgICAgICAgY29tcG9uZW50Lm9uVXBkYXRlKHRpbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFVwZGF0ZS51cGRhdGUgPSB1cGRhdGU7XG59KShVcGRhdGUgfHwgKFVwZGF0ZSA9IHt9KSk7XG4iLCJleHBvcnQgY2xhc3MgQ29tcG9uZW50cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmhpdFRlc3QgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMua2V5VGVzdCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSBuZXcgTWFwKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIERlYnVnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbmZvcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMud2FybmluZ3MgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIGxvZyguLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gICAgfVxuICAgIGluZm8oLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLmluZm9zLmdldChpZCk7XG4gICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICB0aGlzLmluZm9zLnNldChpZCwgY291bnQpO1xuICAgIH1cbiAgICBlcnJvciguLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoYXJncyk7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuZXJyb3JzLmdldChpZCk7XG4gICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgdGhpcy5lcnJvcnMuc2V0KGlkLCBjb3VudCk7XG4gICAgfVxuICAgIHdhcm5pbmcoLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLndhcm5pbmdzLmdldChpZCk7XG4gICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICB0aGlzLndhcm5pbmdzLnNldChpZCwgY291bnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuaW1wb3J0IHsgS2V5IH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy9rZXknO1xuZXhwb3J0IGNsYXNzIEtleWJvYXJkIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBkaXNwYXRjaChldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua2V5RXZlbnQgPSBldmVudDtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDb21wb25lbnQocm9vdCk7XG4gICAgfVxuICAgIGRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFLZXkuaXNLZXlFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy5rZXlUZXN0LmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgICAgIEtleS5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgdGhpcy5rZXlFdmVudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgTG9hZGluZyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdID0gY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQocm9vdCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB9XG4gICAgYmVnaW4oKSB7XG4gICAgfVxuICAgIGVuZCgpIHtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNYXRyaXgsIFBvaW50IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy9kaXNwbGF5JztcbmltcG9ydCB7IFBvaW50ZXIgfSBmcm9tICcuLi9leHRlbnNpb25zL3BvaW50ZXInO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgUG9pbnRlcnMgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2xvYmFsID0gUG9pbnQuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5sb2NhbCA9IFBvaW50LmVtcHR5KCk7XG4gICAgICAgIHRoaXMucG9pbnRlcklkID0gMDtcbiAgICAgICAgdGhpcy5wb2ludGVyVHlwZSA9ICdwb2ludGVyRG93bic7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgbWF0cml4OiBNYXRyaXguZW1wdHkoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdID0gY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgZGlzcGF0Y2godHlwZSwgeCwgeSwgaWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvY2FsLnggPSB4O1xuICAgICAgICB0aGlzLmxvY2FsLnkgPSB5O1xuICAgICAgICB0aGlzLmdsb2JhbC54ID0geDtcbiAgICAgICAgdGhpcy5nbG9iYWwueSA9IHk7XG4gICAgICAgIHRoaXMucG9pbnRlcklkID0gaWQ7XG4gICAgICAgIHRoaXMucG9pbnRlclR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgY29uc3QgYmFzZSA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBNYXRyaXguc2V0RW1wdHkoYmFzZS5tYXRyaXgpO1xuICAgICAgICB0aGlzLmRlcHRoKys7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDb21wb25lbnQocm9vdCwgYmFzZSwgZmFsc2UpO1xuICAgIH1cbiAgICB1cGRhdGVMb2NhbChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIFRyYW5zZm9ybS5nZXRNYXRyaXgoY29tcG9uZW50LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgIE1hdHJpeC5jb25jYXQocGFyZW50Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgTWF0cml4LnRyYW5zZm9ybUludmVyc2VQb2ludChjb250ZXh0Lm1hdHJpeCwgdGhpcy5nbG9iYWwsIHRoaXMubG9jYWwpO1xuICAgIH1cbiAgICBkaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIHBhcmVudCwgcGFyZW50UmVzdWx0KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIURpc3BsYXkuaXNWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVBvaW50ZXIuaXNQb2ludGVyRW5hYmxlZChjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudFJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5wb2ludGVyT3ZlciAmJiB0aGlzLnBvaW50ZXJUeXBlID09PSAncG9pbnRlck1vdmUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMb2NhbChjb21wb25lbnQsIHBhcmVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmxvY2FsO1xuICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3V0JywgeCwgeSwgdGhpcy5nbG9iYWwueCwgdGhpcy5nbG9iYWwueSwgdGhpcy5wb2ludGVySWQpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wb2ludGVyT3ZlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3QuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTG9jYWwoY29tcG9uZW50LCBwYXJlbnQpO1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmxvY2FsO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCB0aGlzLnBvaW50ZXJUeXBlLCB4LCB5LCB0aGlzLmdsb2JhbC54LCB0aGlzLmdsb2JhbC55LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludGVyVHlwZSA9PT0gJ3BvaW50ZXJNb3ZlJykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgIWNvbXBvbmVudC5wb2ludGVyT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCAncG9pbnRlck92ZXInLCB4LCB5LCB0aGlzLmdsb2JhbC54LCB0aGlzLmdsb2JhbC55LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFyZXN1bHQgJiYgY29tcG9uZW50LnBvaW50ZXJPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3V0JywgeCwgeSwgdGhpcy5nbG9iYWwueCwgdGhpcy5nbG9iYWwueSwgdGhpcy5wb2ludGVySWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnQucG9pbnRlck92ZXIgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb2xvclRyYW5zZm9ybSwgTWF0cml4IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy9kaXNwbGF5JztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdHJhbnNmb3JtJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBtYXRyaXg6IE1hdHJpeC5lbXB0eSgpLFxuICAgICAgICAgICAgICAgIGNvbG9yVHJhbnNmb3JtOiBDb2xvclRyYW5zZm9ybS5lbXB0eSgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICByZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBwYXJlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghRGlzcGxheS5pc1Zpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgVHJhbnNmb3JtLmdldENvbG9yVHJhbnNmb3JtKGNvbXBvbmVudCwgY29udGV4dC5jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIE1hdHJpeC5jb25jYXQocGFyZW50Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgQ29sb3JUcmFuc2Zvcm0uY29uY2F0KHBhcmVudC5jb2xvclRyYW5zZm9ybSwgY29udGV4dC5jb2xvclRyYW5zZm9ybSwgY29udGV4dC5jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMuZW5naW5lLnBsYXRmb3JtLmJlZ2luKCk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuZGVwdGgrKztcbiAgICAgICAgTWF0cml4LmNvcHkodGhpcy5lbmdpbmUuc2NyZWVuLmdldE1hdHJpeCgpLCBiYXNlLm1hdHJpeCk7XG4gICAgICAgIENvbG9yVHJhbnNmb3JtLnNldEVtcHR5KGJhc2UuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudChyb290LCBiYXNlKTtcbiAgICAgICAgdGhpcy5lbmdpbmUucGxhdGZvcm0uZW5kKCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCB2YXIgUmVzb3VyY2U7XG4oZnVuY3Rpb24gKFJlc291cmNlKSB7XG4gICAgZnVuY3Rpb24gZ2V0UHJvZ3Jlc3MocmVzb3VyY2UpIHtcbiAgICAgICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc291cmNlLmxvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc291cmNlLmJ5dGVzVG90YWwgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2UuYnl0ZXNMb2FkZWQgLyByZXNvdXJjZS5ieXRlc1RvdGFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBSZXNvdXJjZS5nZXRQcm9ncmVzcyA9IGdldFByb2dyZXNzO1xufSkoUmVzb3VyY2UgfHwgKFJlc291cmNlID0ge30pKTtcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZXMgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVzb2x2ZXJzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBnZXQoYXNzZXQpIHtcbiAgICAgICAgaWYgKCFhc3NldCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc291cmNlID0gdGhpcy5yZXNvdXJjZXMuZ2V0KGFzc2V0KTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICAgICAgcmVzb3VyY2UgPSB0aGlzLnJlc29sdmUoYXNzZXQpO1xuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXMuc2V0KGFzc2V0LCByZXNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgIH1cbiAgICByZXNvbHZlKGFzc2V0KSB7XG4gICAgICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gcmVzb2x2ZXIoYXNzZXQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBSZXNvdXJjZSBub3QgcmVzb2x2ZWQ6ICR7YXNzZXR9YCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1hdHJpeCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuZXhwb3J0IGNsYXNzIFNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSA0MDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDAwO1xuICAgICAgICB0aGlzLnBpeGVsUmF0aW8gPSAwO1xuICAgICAgICB0aGlzLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXRyaXggPSBNYXRyaXguZW1wdHkoKTtcbiAgICB9XG4gICAgZ2V0TWF0cml4KCkge1xuICAgICAgICBjb25zdCBwaXhlbFJhdGlvID0gdGhpcy5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIHRoaXMubWF0cml4LmEgPSBwaXhlbFJhdGlvO1xuICAgICAgICB0aGlzLm1hdHJpeC5kID0gcGl4ZWxSYXRpbztcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICAgIH1cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVsbHNjcmVlbiA/IHdpbmRvdy5pbm5lcldpZHRoIDogdGhpcy53aWR0aDtcbiAgICB9XG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuID8gd2luZG93LmlubmVySGVpZ2h0IDogdGhpcy5oZWlnaHQ7XG4gICAgfVxuICAgIGdldFBpeGVsUmF0aW8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpeGVsUmF0aW8gPiAwID8gdGhpcy5waXhlbFJhdGlvIDogd2luZG93LmRldmljZVBpeGVsUmF0aW8gPz8gMTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGlja2VyIHtcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICAgICAgdGhpcy5mcmFtZVJhdGUgPSAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnVwZGF0ZXIudXBkYXRlKHRpbWUpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUubG9hZGluZy51cGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlbmRlcmVyLnJlbmRlcigpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZUZyYW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IChjdXJyZW50VGltZSAtIHRoaXMudGltZSkgLyAxMDAwO1xuICAgICAgICAgICAgdGhpcy50aW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOZXh0RnJhbWUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgfVxuICAgIGdldCBpc1BhdXNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGF1c2VkO1xuICAgIH1cbiAgICBwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmV4dEZyYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHVwZGF0ZU5leHRGcmFtZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlRnJhbWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFVwZGF0ZSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdXBkYXRlJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFVwZGF0ZXIgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQocm9vdCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG4gICAgdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFVcGRhdGUuaXNFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoY29tcG9uZW50KTtcbiAgICAgICAgVXBkYXRlLnVwZGF0ZShjb21wb25lbnQsIHRoaXMudGltZSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVQcm9wZXJ0aWVzKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnByb3BlcnRpZXMuZm9yRWFjaCgoaGFuZGxlciwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRbcHJvcGVydHldKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9sb2FkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2VuZ2luZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL2NvbXBvbmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9kZWJ1Zyc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3BsYXRmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcG9pbnRlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9yZW5kZXJlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3Jlc291cmNlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3NjcmVlbic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3RpY2tlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3VwZGF0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmFjdGl2ZS9tb3VzZSc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyYWN0aXZlL3RvdWNoJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJhY3RpdmUva2V5Ym9hcmQnO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL2Rpc3BsYXknO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3Bpdm90JztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9wb2ludGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9zb3VyY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3RyYW5zZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvdXBkYXRlJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9rZXknO1xuIiwiZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCB0eXBlKSB7XG4gICAgY29uc3Qga2V5RXZlbnQgPSB7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIGtleTogZXZlbnQua2V5LFxuICAgICAgICBjb2RlOiBldmVudC5jb2RlLFxuICAgICAgICBjdHJsOiBldmVudC5jdHJsS2V5LFxuICAgICAgICBhbHQ6IGV2ZW50LmFsdEtleSxcbiAgICAgICAgc2hpZnQ6IGV2ZW50LnNoaWZ0S2V5LFxuICAgICAgICByZXBlYXQ6IGV2ZW50LnJlcGVhdCxcbiAgICB9O1xuICAgIGVuZ2luZS5rZXlib2FyZC5kaXNwYXRjaChrZXlFdmVudCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cbmV4cG9ydCB2YXIgS2V5Ym9hcmRFeHRlbnNpb247XG4oZnVuY3Rpb24gKEtleWJvYXJkRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAna2V5RG93bicpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ2tleVByZXNzJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAna2V5VXAnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIEtleWJvYXJkRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoS2V5Ym9hcmRFeHRlbnNpb24gfHwgKEtleWJvYXJkRXh0ZW5zaW9uID0ge30pKTtcbiIsImZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgdHlwZSkge1xuICAgIGNvbnN0IHsgdmlldyB9ID0gZW5naW5lLnBsYXRmb3JtO1xuICAgIGNvbnN0IGNsaWVudFJlY3QgPSB2aWV3LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gY2xpZW50UmVjdC5sZWZ0IC0gdmlldy5jbGllbnRMZWZ0O1xuICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gY2xpZW50UmVjdC50b3AgLSB2aWV3LmNsaWVudFRvcDtcbiAgICBlbmdpbmUucG9pbnRlcnMuZGlzcGF0Y2godHlwZSwgeCwgeSwgMCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cbmV4cG9ydCB2YXIgTW91c2VFeHRlbnNpb247XG4oZnVuY3Rpb24gKE1vdXNlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyB2aWV3IH0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyRG93bicpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyVXAnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyTW92ZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyQ2FuY2VsJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBNb3VzZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKE1vdXNlRXh0ZW5zaW9uIHx8IChNb3VzZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsIHR5cGUpIHtcbiAgICBjb25zdCB7IHZpZXcgfSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICBjb25zdCBjbGllbnRSZWN0ID0gdmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV07XG4gICAgICAgIGNvbnN0IHggPSB0b3VjaC5jbGllbnRYIC0gY2xpZW50UmVjdC5sZWZ0IC0gdmlldy5jbGllbnRMZWZ0O1xuICAgICAgICBjb25zdCB5ID0gdG91Y2guY2xpZW50WSAtIGNsaWVudFJlY3QudG9wIC0gdmlldy5jbGllbnRUb3A7XG4gICAgICAgIGVuZ2luZS5wb2ludGVycy5kaXNwYXRjaCh0eXBlLCB4LCB5LCB0b3VjaC5pZGVudGlmaWVyKTtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cbmV4cG9ydCB2YXIgVG91Y2hFeHRlbnNpb247XG4oZnVuY3Rpb24gKFRvdWNoRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyB2aWV3IH0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckRvd24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJVcCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJNb3ZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyQ2FuY2VsJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBUb3VjaEV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFRvdWNoRXh0ZW5zaW9uIHx8IChUb3VjaEV4dGVuc2lvbiA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIEJvdW5kcztcbihmdW5jdGlvbiAoQm91bmRzKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtaW5YOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWluWTogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG1heFg6IE51bWJlci5NSU5fVkFMVUUsXG4gICAgICAgICAgICBtYXhZOiBOdW1iZXIuTUlOX1ZBTFVFLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBCb3VuZHMuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShib3VuZHMpIHtcbiAgICAgICAgYm91bmRzLm1pblggPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWluWSA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGJvdW5kcy5tYXhYID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1heFkgPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgIH1cbiAgICBCb3VuZHMuc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KGJvdW5kcykge1xuICAgICAgICByZXR1cm4gYm91bmRzLm1pblggPT09IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5taW5ZID09PSBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWF4WCA9PT0gTnVtYmVyLk1JTl9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1heFkgPT09IE51bWJlci5NSU5fVkFMVUU7XG4gICAgfVxuICAgIEJvdW5kcy5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiB0b1JlY3RhbmdsZShib3VuZHMsIHJlY3RhbmdsZSkge1xuICAgICAgICBjb25zdCB7IG1pblgsIG1pblksIG1heFgsIG1heFksIH0gPSBib3VuZHM7XG4gICAgICAgIHJlY3RhbmdsZS54ID0gbWluWDtcbiAgICAgICAgcmVjdGFuZ2xlLnkgPSBtaW5ZO1xuICAgICAgICByZWN0YW5nbGUud2lkdGggPSBtYXhYIC0gbWluWDtcbiAgICAgICAgcmVjdGFuZ2xlLmhlaWdodCA9IG1heFkgLSBtaW5ZO1xuICAgIH1cbiAgICBCb3VuZHMudG9SZWN0YW5nbGUgPSB0b1JlY3RhbmdsZTtcbiAgICBmdW5jdGlvbiB0ZXN0WChib3VuZHMsIHgpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0WCA9IHRlc3RYO1xuICAgIGZ1bmN0aW9uIHRlc3RZKGJvdW5kcywgeSkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RZID0gdGVzdFk7XG4gICAgZnVuY3Rpb24gdGVzdChib3VuZHMsIHgsIHkpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdCA9IHRlc3Q7XG4gICAgZnVuY3Rpb24gdGVzdFBvaW50KGJvdW5kcywgcG9pbnQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFBvaW50ID0gdGVzdFBvaW50O1xufSkoQm91bmRzIHx8IChCb3VuZHMgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBDb2xvclRyYW5zZm9ybTtcbihmdW5jdGlvbiAoQ29sb3JUcmFuc2Zvcm0pIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFscGhhTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIHJlZE11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBncmVlbk11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBibHVlTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGFscGhhT2Zmc2V0OiAwLFxuICAgICAgICAgICAgcmVkT2Zmc2V0OiAwLFxuICAgICAgICAgICAgZ3JlZW5PZmZzZXQ6IDAsXG4gICAgICAgICAgICBibHVlT2Zmc2V0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkoY3QpIHtcbiAgICAgICAgcmV0dXJuIGN0LnJlZE11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmdyZWVuTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmFscGhhTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYmx1ZU9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHlXaXRoQWxwaGEoY3QpIHtcbiAgICAgICAgcmV0dXJuIGN0LnJlZE11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmdyZWVuTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LnJlZE9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5PZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmJsdWVPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmFscGhhT2Zmc2V0ID09PSAwO1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5pc0VtcHR5V2l0aEFscGhhID0gaXNFbXB0eVdpdGhBbHBoYTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShjdCkge1xuICAgICAgICBjdC5yZWRNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuZ3JlZW5NdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuYmx1ZU11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5hbHBoYU11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5yZWRPZmZzZXQgPSAwO1xuICAgICAgICBjdC5ncmVlbk9mZnNldCA9IDA7XG4gICAgICAgIGN0LmJsdWVPZmZzZXQgPSAwO1xuICAgICAgICBjdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gY29weShmcm9tLCB0bykge1xuICAgICAgICB0by5hbHBoYU11bHRpcGxpZXIgPSBmcm9tLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgdG8ucmVkTXVsdGlwbGllciA9IGZyb20ucmVkTXVsdGlwbGllcjtcbiAgICAgICAgdG8uZ3JlZW5NdWx0aXBsaWVyID0gZnJvbS5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIHRvLmJsdWVNdWx0aXBsaWVyID0gZnJvbS5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgdG8uYWxwaGFPZmZzZXQgPSBmcm9tLmFscGhhT2Zmc2V0O1xuICAgICAgICB0by5yZWRPZmZzZXQgPSBmcm9tLnJlZE9mZnNldDtcbiAgICAgICAgdG8uZ3JlZW5PZmZzZXQgPSBmcm9tLmdyZWVuT2Zmc2V0O1xuICAgICAgICB0by5ibHVlT2Zmc2V0ID0gZnJvbS5ibHVlT2Zmc2V0O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBjb25jYXQoY3QxLCBjdDAsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCBhbHBoYU11bHRpcGxpZXIgPSBjdDEuYWxwaGFNdWx0aXBsaWVyICogY3QwLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgcmVkTXVsdGlwbGllciA9IGN0MS5yZWRNdWx0aXBsaWVyICogY3QwLnJlZE11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGdyZWVuTXVsdGlwbGllciA9IGN0MS5ncmVlbk11bHRpcGxpZXIgKiBjdDAuZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBibHVlTXVsdGlwbGllciA9IGN0MS5ibHVlTXVsdGlwbGllciAqIGN0MC5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgYWxwaGFPZmZzZXQgPSBjdDEuYWxwaGFNdWx0aXBsaWVyICogY3QwLmFscGhhT2Zmc2V0ICsgY3QxLmFscGhhT2Zmc2V0O1xuICAgICAgICBjb25zdCByZWRPZmZzZXQgPSBjdDEucmVkTXVsdGlwbGllciAqIGN0MC5yZWRPZmZzZXQgKyBjdDEucmVkT2Zmc2V0O1xuICAgICAgICBjb25zdCBncmVlbk9mZnNldCA9IGN0MS5ncmVlbk11bHRpcGxpZXIgKiBjdDAuZ3JlZW5PZmZzZXQgKyBjdDEuZ3JlZW5PZmZzZXQ7XG4gICAgICAgIGNvbnN0IGJsdWVPZmZzZXQgPSBjdDEuYmx1ZU11bHRpcGxpZXIgKiBjdDAuYmx1ZU9mZnNldCArIGN0MS5ibHVlT2Zmc2V0O1xuICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHJlZE11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSBncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IGJsdWVNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSBhbHBoYU9mZnNldDtcbiAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IHJlZE9mZnNldDtcbiAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gZ3JlZW5PZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gYmx1ZU9mZnNldDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uY29uY2F0ID0gY29uY2F0O1xufSkoQ29sb3JUcmFuc2Zvcm0gfHwgKENvbG9yVHJhbnNmb3JtID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vY29sb3ItdHJhbnNmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vYm91bmRzJztcbmV4cG9ydCAqIGZyb20gJy4vbWF0cml4JztcbmV4cG9ydCAqIGZyb20gJy4vcG9pbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWN0YW5nbGUnO1xuIiwiZXhwb3J0IHZhciBNYXRyaXg7XG4oZnVuY3Rpb24gKE1hdHJpeCkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogMSxcbiAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICBjOiAwLFxuICAgICAgICAgICAgZDogMSxcbiAgICAgICAgICAgIHR4OiAwLFxuICAgICAgICAgICAgdHk6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIE1hdHJpeC5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkobWF0cml4KSB7XG4gICAgICAgIHJldHVybiBtYXRyaXguYSA9PT0gMVxuICAgICAgICAgICAgJiYgbWF0cml4LmIgPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC5jID09PSAwXG4gICAgICAgICAgICAmJiBtYXRyaXguZCA9PT0gMVxuICAgICAgICAgICAgJiYgbWF0cml4LnR4ID09PSAwXG4gICAgICAgICAgICAmJiBtYXRyaXgudHkgPT09IDA7XG4gICAgfVxuICAgIE1hdHJpeC5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShtYXRyaXgpIHtcbiAgICAgICAgbWF0cml4LmEgPSAxO1xuICAgICAgICBtYXRyaXguYiA9IDA7XG4gICAgICAgIG1hdHJpeC5jID0gMDtcbiAgICAgICAgbWF0cml4LmQgPSAxO1xuICAgICAgICBtYXRyaXgudHggPSAwO1xuICAgICAgICBtYXRyaXgudHkgPSAwO1xuICAgIH1cbiAgICBNYXRyaXguc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KGZyb20sIHRvKSB7XG4gICAgICAgIHRvLmEgPSBmcm9tLmE7XG4gICAgICAgIHRvLmIgPSBmcm9tLmI7XG4gICAgICAgIHRvLmMgPSBmcm9tLmM7XG4gICAgICAgIHRvLmQgPSBmcm9tLmQ7XG4gICAgICAgIHRvLnR4ID0gZnJvbS50eDtcbiAgICAgICAgdG8udHkgPSBmcm9tLnR5O1xuICAgIH1cbiAgICBNYXRyaXguY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gY29uY2F0KG1hdHJpeDAsIG1hdHJpeDEsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCBhID0gbWF0cml4MS5hICogbWF0cml4MC5hICsgbWF0cml4MS5iICogbWF0cml4MC5jO1xuICAgICAgICBjb25zdCBiID0gbWF0cml4MS5hICogbWF0cml4MC5iICsgbWF0cml4MS5iICogbWF0cml4MC5kO1xuICAgICAgICBjb25zdCBjID0gbWF0cml4MS5jICogbWF0cml4MC5hICsgbWF0cml4MS5kICogbWF0cml4MC5jO1xuICAgICAgICBjb25zdCBkID0gbWF0cml4MS5jICogbWF0cml4MC5iICsgbWF0cml4MS5kICogbWF0cml4MC5kO1xuICAgICAgICBjb25zdCB0eCA9IG1hdHJpeDEudHggKiBtYXRyaXgwLmEgKyBtYXRyaXgxLnR5ICogbWF0cml4MC5jICsgbWF0cml4MC50eDtcbiAgICAgICAgY29uc3QgdHkgPSBtYXRyaXgxLnR4ICogbWF0cml4MC5iICsgbWF0cml4MS50eSAqIG1hdHJpeDAuZCArIG1hdHJpeDAudHk7XG4gICAgICAgIHJlc3VsdC5hID0gYTtcbiAgICAgICAgcmVzdWx0LmIgPSBiO1xuICAgICAgICByZXN1bHQuYyA9IGM7XG4gICAgICAgIHJlc3VsdC5kID0gZDtcbiAgICAgICAgcmVzdWx0LnR4ID0gdHg7XG4gICAgICAgIHJlc3VsdC50eSA9IHR5O1xuICAgIH1cbiAgICBNYXRyaXguY29uY2F0ID0gY29uY2F0O1xuICAgIGZ1bmN0aW9uIGdldERldGVybWluYW50KG1hdHJpeCkge1xuICAgICAgICByZXR1cm4gbWF0cml4LmEgKiBtYXRyaXguZCAtIG1hdHJpeC5iICogbWF0cml4LmM7XG4gICAgfVxuICAgIE1hdHJpeC5nZXREZXRlcm1pbmFudCA9IGdldERldGVybWluYW50O1xuICAgIGZ1bmN0aW9uIGludmVydChtYXRyaXgsIHJlc3VsdCkge1xuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudChtYXRyaXgpO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC50eCA9IC1tYXRyaXgudHg7XG4gICAgICAgICAgICByZXN1bHQudHkgPSAtbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGV0ZXJtaW5hbnQgPSAxLjAgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gbWF0cml4LmEgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gLW1hdHJpeC5iICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuYyA9IC1tYXRyaXguYyAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBtYXRyaXguZCAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gLXJlc3VsdC5hICogbWF0cml4LnR4IC0gcmVzdWx0LmMgKiBtYXRyaXgudHk7XG4gICAgICAgICAgICByZXN1bHQudHkgPSAtcmVzdWx0LmIgKiBtYXRyaXgudHggLSByZXN1bHQuZCAqIG1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBNYXRyaXguaW52ZXJ0ID0gaW52ZXJ0O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50KG1hdHJpeCwgcG9pbnQsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICByZXN1bHQueCA9IHggKiBtYXRyaXguYSArIHkgKiBtYXRyaXguYyArIG1hdHJpeC50eDtcbiAgICAgICAgcmVzdWx0LnkgPSB4ICogbWF0cml4LmIgKyB5ICogbWF0cml4LmQgKyBtYXRyaXgudHk7XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludCA9IHRyYW5zZm9ybVBvaW50O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50TG9jYWwobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJlc3VsdC54ID0geCAqIG1hdHJpeC5hICsgeSAqIG1hdHJpeC5jO1xuICAgICAgICByZXN1bHQueSA9IHggKiBtYXRyaXguYiArIHkgKiBtYXRyaXguZDtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybVBvaW50TG9jYWwgPSB0cmFuc2Zvcm1Qb2ludExvY2FsO1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUludmVyc2VQb2ludChtYXRyaXgsIHBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgbGV0IGRldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KTtcbiAgICAgICAgaWYgKGRldGVybWluYW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQueCA9IC1tYXRyaXgudHg7XG4gICAgICAgICAgICByZXN1bHQueSA9IC1tYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCA9IDEgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgICAgICByZXN1bHQueCA9IGRldGVybWluYW50ICogKG1hdHJpeC5jICogKG1hdHJpeC50eSAtIHkpICsgbWF0cml4LmQgKiAoeCAtIG1hdHJpeC50eCkpO1xuICAgICAgICAgICAgcmVzdWx0LnkgPSBkZXRlcm1pbmFudCAqIChtYXRyaXguYSAqICh5IC0gbWF0cml4LnR5KSArIG1hdHJpeC5iICogKG1hdHJpeC50eCAtIHgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50ID0gdHJhbnNmb3JtSW52ZXJzZVBvaW50O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUJvdW5kcyhtYXRyaXgsIGJvdW5kcywgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgYSwgYiwgYywgZCwgdHgsIHR5LCB9ID0gbWF0cml4O1xuICAgICAgICBjb25zdCByeCA9IGJvdW5kcy54O1xuICAgICAgICBjb25zdCByeSA9IGJvdW5kcy55O1xuICAgICAgICBjb25zdCByciA9IHJ4ICsgYm91bmRzLndpZHRoO1xuICAgICAgICBjb25zdCByYiA9IHJ5ICsgYm91bmRzLmhlaWdodDtcbiAgICAgICAgY29uc3QgbngxID0gcnggKiBhICsgcnkgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MSA9IHJ4ICogYiArIHJ5ICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDIgPSByciAqIGEgKyByeSAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkyID0gcnIgKiBiICsgcnkgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54MyA9IHJyICogYSArIHJiICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTMgPSByciAqIGIgKyByYiAqIGQgKyB0eTtcbiAgICAgICAgY29uc3Qgbng0ID0gcnggKiBhICsgcmIgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55NCA9IHJ4ICogYiArIHJiICogZCArIHR5O1xuICAgICAgICBsZXQgbGVmdCA9IG54MTtcbiAgICAgICAgaWYgKGxlZnQgPiBueDIpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQgPiBueDMpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQgPiBueDQpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvcCA9IG55MTtcbiAgICAgICAgaWYgKHRvcCA+IG55Mikge1xuICAgICAgICAgICAgdG9wID0gbnkyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3AgPiBueTMpIHtcbiAgICAgICAgICAgIHRvcCA9IG55MztcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9wID4gbnk0KSB7XG4gICAgICAgICAgICB0b3AgPSBueTQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJpZ2h0ID0gbngxO1xuICAgICAgICBpZiAocmlnaHQgPCBueDIpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbngyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCA8IG54Mykge1xuICAgICAgICAgICAgcmlnaHQgPSBueDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0IDwgbng0KSB7XG4gICAgICAgICAgICByaWdodCA9IG54NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYm90dG9tID0gbnkxO1xuICAgICAgICBpZiAoYm90dG9tIDwgbnkyKSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdHRvbSA8IG55Mykge1xuICAgICAgICAgICAgYm90dG9tID0gbnkzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3R0b20gPCBueTQpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55NDtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQueCA9IGxlZnQ7XG4gICAgICAgIHJlc3VsdC55ID0gdG9wO1xuICAgICAgICByZXN1bHQud2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBib3R0b20gLSB0b3A7XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Cb3VuZHMgPSB0cmFuc2Zvcm1Cb3VuZHM7XG59KShNYXRyaXggfHwgKE1hdHJpeCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFBvaW50O1xuKGZ1bmN0aW9uIChQb2ludCkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuICAgIFBvaW50LmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gbGVuZ3RoKHBvaW50KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfVxuICAgIFBvaW50Lmxlbmd0aCA9IGxlbmd0aDtcbiAgICBmdW5jdGlvbiBhbmdsZShwb2ludCkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihwb2ludC55LCBwb2ludC54KTtcbiAgICB9XG4gICAgUG9pbnQuYW5nbGUgPSBhbmdsZTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludC54ID09PSAwICYmIHBvaW50LnkgPT09IDA7XG4gICAgfVxuICAgIFBvaW50LmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGVxdWFscyhwb2ludDAsIHBvaW50MSkge1xuICAgICAgICByZXR1cm4gcG9pbnQwLnggPT09IHBvaW50MS54ICYmIHBvaW50MC55ID09PSBwb2ludDEueTtcbiAgICB9XG4gICAgUG9pbnQuZXF1YWxzID0gZXF1YWxzO1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KHBvaW50KSB7XG4gICAgICAgIHBvaW50LnggPSAwO1xuICAgICAgICBwb2ludC55ID0gMDtcbiAgICB9XG4gICAgUG9pbnQuc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC54ID0gc291cmNlLng7XG4gICAgICAgIHRhcmdldC55ID0gc291cmNlLnk7XG4gICAgfVxuICAgIFBvaW50LmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZShwb2ludCwgdGhpY2tuZXNzKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGxlbmd0aChwb2ludCk7XG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpY2tuZXNzIC8gdmFsdWU7XG4gICAgICAgICAgICBwb2ludC54ICo9IHZhbHVlO1xuICAgICAgICAgICAgcG9pbnQueSAqPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQb2ludC5ub3JtYWxpemUgPSBub3JtYWxpemU7XG4gICAgZnVuY3Rpb24gZGlzdGFuY2UocG9pbnQwLCBwb2ludDEpIHtcbiAgICAgICAgY29uc3QgZHggPSBwb2ludDAueCAtIHBvaW50MS54O1xuICAgICAgICBjb25zdCBkeSA9IHBvaW50MC55IC0gcG9pbnQxLnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cbiAgICBQb2ludC5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIGZ1bmN0aW9uIGludGVycG9sYXRlKGJlZ2luLCBlbmQsIHZhbHVlLCByZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0LnggPSBiZWdpbi54ICsgdmFsdWUgKiAoZW5kLnggLSBiZWdpbi54KTtcbiAgICAgICAgcmVzdWx0LnkgPSBiZWdpbi55ICsgdmFsdWUgKiAoZW5kLnkgLSBiZWdpbi55KTtcbiAgICB9XG4gICAgUG9pbnQuaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcbiAgICBmdW5jdGlvbiBwb2xhcihwb2ludCwgbGVuZ3RoLCBhbmdsZSkge1xuICAgICAgICBwb2ludC54ID0gbGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgICBwb2ludC55ID0gbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIH1cbiAgICBQb2ludC5wb2xhciA9IHBvbGFyO1xufSkoUG9pbnQgfHwgKFBvaW50ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUmVjdGFuZ2xlO1xuKGZ1bmN0aW9uIChSZWN0YW5nbGUpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFJlY3RhbmdsZS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KHJlY3RhbmdsZSkge1xuICAgICAgICByZWN0YW5nbGUueCA9IDA7XG4gICAgICAgIHJlY3RhbmdsZS55ID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLndpZHRoID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLmhlaWdodCA9IDA7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGludGVyc2VjdGlvbihzb3VyY2UsIHRhcmdldCwgcmVzdWx0KSB7XG4gICAgICAgIGxldCB7IHgsIHksIHdpZHRoLCBoZWlnaHQsIH0gPSBzb3VyY2U7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0YXJnZXQueDtcbiAgICAgICAgY29uc3QgdG9wID0gdGFyZ2V0Lnk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGFyZ2V0LnggKyB0YXJnZXQud2lkdGg7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRhcmdldC55ICsgdGFyZ2V0LmhlaWdodDtcbiAgICAgICAgaWYgKHggPCBsZWZ0KSB7XG4gICAgICAgICAgICB3aWR0aCAtPSBsZWZ0IC0geDtcbiAgICAgICAgICAgIHggPSBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh4ICsgd2lkdGggPiByaWdodCkge1xuICAgICAgICAgICAgd2lkdGggPSByaWdodCAtIHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgPCB0b3ApIHtcbiAgICAgICAgICAgIGhlaWdodCAtPSB0b3AgLSB5O1xuICAgICAgICAgICAgeSA9IHRvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSArIGhlaWdodCA+IGJvdHRvbSkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gYm90dG9tIC0geTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgICAgICB3aWR0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICAgIGhlaWdodCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnggPSB4O1xuICAgICAgICByZXN1bHQueSA9IHk7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHdpZHRoO1xuICAgICAgICByZXN1bHQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuaW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uO1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0YW5nbGUud2lkdGggPT09IDAgfHwgcmVjdGFuZ2xlLmhlaWdodCA9PT0gMDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGNvbnRhaW5zKHJlY3RhbmdsZSwgcG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZS54IDwgcG9pbnQueFxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnggKyByZWN0YW5nbGUud2lkdGggPiBwb2ludC54XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueSA8IHBvaW50LnlcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS55ICsgcmVjdGFuZ2xlLmhlaWdodCA+IHBvaW50Lnk7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5jb250YWlucyA9IGNvbnRhaW5zO1xuICAgIGZ1bmN0aW9uIHJvdW5kKHJlY3RhbmdsZSkge1xuICAgICAgICByZWN0YW5nbGUueCA9IE1hdGgucm91bmQocmVjdGFuZ2xlLngpO1xuICAgICAgICByZWN0YW5nbGUueSA9IE1hdGgucm91bmQocmVjdGFuZ2xlLnkpO1xuICAgICAgICByZWN0YW5nbGUud2lkdGggPSBNYXRoLnJvdW5kKHJlY3RhbmdsZS53aWR0aCk7XG4gICAgICAgIHJlY3RhbmdsZS5oZWlnaHQgPSBNYXRoLnJvdW5kKHJlY3RhbmdsZS5oZWlnaHQpO1xuICAgIH1cbiAgICBSZWN0YW5nbGUucm91bmQgPSByb3VuZDtcbn0pKFJlY3RhbmdsZSB8fCAoUmVjdGFuZ2xlID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBDb2xvclRyYW5zZm9ybSwgTWF0cml4LCBSZWN0YW5nbGUgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSB9IGZyb20gJy4vaW1hZ2UnO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5jb25zdCBzY3JlZW5Cb3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihpbWFnZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBpbWFnZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gcGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgaWYgKENvbG9yVHJhbnNmb3JtLmlzRW1wdHlXaXRoQWxwaGEoY29sb3JUcmFuc2Zvcm0pKSB7XG4gICAgICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUNvbnRleHQgPSBwbGF0Zm9ybS5jcmVhdGVDdXN0b21Db250ZXh0KCk7XG4gICAgICAgICAgICBib3VuZHMueCA9IHg7XG4gICAgICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIGJvdW5kcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtQm91bmRzKG1hdHJpeCwgYm91bmRzLCBib3VuZHMpO1xuICAgICAgICAgICAgaWYgKFJlY3RhbmdsZS5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzY3JlZW5Cb3VuZHMud2lkdGggPSBjdXN0b21Db250ZXh0LmNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIHNjcmVlbkJvdW5kcy5oZWlnaHQgPSBjdXN0b21Db250ZXh0LmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICBSZWN0YW5nbGUuaW50ZXJzZWN0aW9uKGJvdW5kcywgc2NyZWVuQm91bmRzLCBib3VuZHMpO1xuICAgICAgICAgICAgaWYgKFJlY3RhbmdsZS5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZWN0YW5nbGUucm91bmQoYm91bmRzKTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LmNsZWFyUmVjdChib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gY3VzdG9tQ29udGV4dC5nZXRJbWFnZURhdGEoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgY29uc3Qgcm0gPSBjb2xvclRyYW5zZm9ybS5yZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3QgZ20gPSBjb2xvclRyYW5zZm9ybS5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBibSA9IGNvbG9yVHJhbnNmb3JtLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3QgYW0gPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBybyA9IGNvbG9yVHJhbnNmb3JtLnJlZE9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGdvID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5PZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBibyA9IGNvbG9yVHJhbnNmb3JtLmJsdWVPZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBhbyA9IGNvbG9yVHJhbnNmb3JtLmFscGhhT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBpbWFnZURhdGE7XG4gICAgICAgICAgICBjb25zdCB7IGxlbmd0aCB9ID0gZGF0YTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOykge1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBybSArIHJvO1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBnbSArIGdvO1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBibSArIGJvO1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBhbSArIGFvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCBib3VuZHMueCwgYm91bmRzLnkpO1xuICAgICAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybSgpO1xuICAgICAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UoY3VzdG9tQ29udGV4dC5jYW52YXMsIGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0LCBib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBwbGF0Zm9ybS5kZXN0cm95Q3VzdG9tQ29udGV4dChjdXN0b21Db250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBJbWFnZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoSU1BR0UsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uIHx8IChDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBJbWFnZUV4dGVuc2lvbiwgSU1BR0UgfSBmcm9tICcuL2ltYWdlJztcbmV4cG9ydCB2YXIgQ2FudmFzSW1hZ2VFeHRlbnNpb247XG4oZnVuY3Rpb24gKENhbnZhc0ltYWdlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IGltYWdlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gZW5naW5lLnBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IGNvbnRleHQ7XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgfVxuICAgIENhbnZhc0ltYWdlRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBJbWFnZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoSU1BR0UsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc0ltYWdlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ2FudmFzSW1hZ2VFeHRlbnNpb24gfHwgKENhbnZhc0ltYWdlRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90LCBSZXNvdXJjZSwgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5leHBvcnQgY29uc3QgSU1BR0UgPSAnaW1hZ2UnO1xuZXhwb3J0IHZhciBJbWFnZTtcbihmdW5jdGlvbiAoSW1hZ2UpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoaW1hZ2UsIGJvdW5kcywgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBpbWFnZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgICAgICBib3VuZHMueCA9IHg7XG4gICAgICAgIGJvdW5kcy55ID0geTtcbiAgICAgICAgYm91bmRzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGJvdW5kcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIEltYWdlLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEltYWdlIHx8IChJbWFnZSA9IHt9KSk7XG5jb25zdCBib3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgSW1hZ2VFeHRlbnNpb247XG4oZnVuY3Rpb24gKEltYWdlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdChpbWFnZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgbG9jYWwgfSA9IGVuZ2luZS5wb2ludGVycztcbiAgICAgICAgSW1hZ2UuY2FsY3VsYXRlQm91bmRzKGltYWdlLCBib3VuZHMsIGVuZ2luZSk7XG4gICAgICAgIGxldCBjb250YWlucyA9IFJlY3RhbmdsZS5jb250YWlucyhib3VuZHMsIGxvY2FsKTtcbiAgICAgICAgaWYgKGNvbnRhaW5zKSB7XG4gICAgICAgICAgICBpZiAoaW1hZ2UucG9pbnRlclRlc3RTaGFwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoaW1hZ2Uuc3JjKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSBsb2NhbC54IC0gYm91bmRzLng7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBsb2NhbC55IC0gYm91bmRzLnk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNvdXJjZS5pbWFnZSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gcmVzb3VyY2UuaW1hZ2UuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGNhbnZhc0NvbnRleHQuZ2V0SW1hZ2VEYXRhKHgsIHksIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbnMgPSBpbWFnZURhdGEuZGF0YVszXSA+IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbUNvbnRleHQgPSBwbGF0Zm9ybS5jcmVhdGVDdXN0b21Db250ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21Db250ZXh0LnNldFRyYW5zZm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21Db250ZXh0LmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSwgMSwgMSwgMCwgMCwgMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBjdXN0b21Db250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gaW1hZ2VEYXRhLmRhdGFbM10gPiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm0uZGVzdHJveUN1c3RvbUNvbnRleHQoY3VzdG9tQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWlucztcbiAgICB9XG4gICAgSW1hZ2VFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5sb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IGltYWdlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gUmVzb3VyY2UuZ2V0UHJvZ3Jlc3MocmVzb3VyY2UpO1xuICAgICAgICBjb250ZXh0LmxvYWRlZCA9ICEhcmVzb3VyY2U/LmxvYWRlZCAmJiAhIXJlc291cmNlPy5pbWFnZTtcbiAgICB9XG4gICAgSW1hZ2VFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KElNQUdFLCBoaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChJTUFHRSwgbG9hZGVkKTtcbiAgICAgICAgSW1hZ2VSZXNvdXJjZS5pbml0KGVuZ2luZSk7XG4gICAgfVxuICAgIEltYWdlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoSW1hZ2VFeHRlbnNpb24gfHwgKEltYWdlRXh0ZW5zaW9uID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMtaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMtaW1hZ2UtY29sb3InO1xuIiwiZXhwb3J0IHZhciBJbWFnZVJlc291cmNlO1xuKGZ1bmN0aW9uIChJbWFnZVJlc291cmNlKSB7XG4gICAgZnVuY3Rpb24gcmVzb2x2ZShhc3NldCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGFzc2V0LnNwbGl0KCcuJykucG9wKCk7XG4gICAgICAgIHN3aXRjaCAoZXh0ZW5zaW9uKSB7XG4gICAgICAgICAgICBjYXNlICdwbmcnOlxuICAgICAgICAgICAgY2FzZSAnanBnJzpcbiAgICAgICAgICAgIGNhc2UgJ3dlYnAnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0ge1xuICAgICAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNMb2FkZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzVG90YWw6IDAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGFzc2V0O1xuICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLmxvZyhgaW1hZ2UgbG9hZGVkOiAke2Fzc2V0fWApO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5pbWFnZSA9IGltYWdlO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdpbWFnZSBsb2FkIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBJbWFnZVJlc291cmNlLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvbHZlKTtcbiAgICB9XG4gICAgSW1hZ2VSZXNvdXJjZS5pbml0ID0gaW5pdDtcbn0pKEltYWdlUmVzb3VyY2UgfHwgKEltYWdlUmVzb3VyY2UgPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmluZyc7XG4iLCJleHBvcnQgdmFyIFN0cmluZ1Jlc291cmNlO1xuKGZ1bmN0aW9uIChTdHJpbmdSZXNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIHJlc29sdmUoYXNzZXQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBleHRlbnNpb24gPSBhc3NldC5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgICBzd2l0Y2ggKGV4dGVuc2lvbikge1xuICAgICAgICAgICAgY2FzZSAndHh0JzpcbiAgICAgICAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0ge1xuICAgICAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNMb2FkZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzVG90YWw6IDAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgYXNzZXQsIHRydWUpO1xuICAgICAgICAgICAgICAgIHhoci5vbnByb2dyZXNzID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuYnl0ZXNMb2FkZWQgPSBlLmxvYWRlZDtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuYnl0ZXNUb3RhbCA9IGUudG90YWw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcubG9nKGBzdHJpbmcgbG9hZGVkOiAke2Fzc2V0fWApO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5kYXRhID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuYnl0ZXNMb2FkZWQgPSByZXNvdXJjZS5ieXRlc1RvdGFsO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnc3RyaW5nIGxvYWQgZXJyb3InLCBlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgU3RyaW5nUmVzb3VyY2UucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLnJlc291cmNlcy5yZXNvbHZlcnMuYWRkKHJlc29sdmUpO1xuICAgIH1cbiAgICBTdHJpbmdSZXNvdXJjZS5pbml0ID0gaW5pdDtcbn0pKFN0cmluZ1Jlc291cmNlIHx8IChTdHJpbmdSZXNvdXJjZSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBSZXNvdXJjZSwgQ29udGFpbmVyRXh0ZW5zaW9uLCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgU3RyaW5nUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuZXhwb3J0IGNvbnN0IFNDRU5FID0gJ3NjZW5lJztcbmV4cG9ydCB2YXIgU2NlbmVFeHRlbnNpb247XG4oZnVuY3Rpb24gKFNjZW5lRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gbG9hZGVkKHNjZW5lLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5sb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgaWYgKHNjZW5lLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBDb250YWluZXJFeHRlbnNpb24ubG9hZGVkKHNjZW5lLCBlbmdpbmUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeyBzcmMgfSA9IHNjZW5lO1xuICAgICAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IFJlc291cmNlLmdldFByb2dyZXNzKHJlc291cmNlKTtcbiAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gISFyZXNvdXJjZT8ubG9hZGVkICYmICEhcmVzb3VyY2U/LmRhdGE7XG4gICAgICAgICAgICBpZiAocmVzb3VyY2UgJiYgcmVzb3VyY2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLmNoaWxkcmVuID0gSlNPTi5wYXJzZShyZXNvdXJjZS5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoYHNjZW5lIHBhcnNpbmcgZXJyb3I6ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBTY2VuZUV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoU0NFTkUsIENvbnRhaW5lckV4dGVuc2lvbi5oaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChTQ0VORSwgQ29udGFpbmVyRXh0ZW5zaW9uLnJlbmRlcik7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5zZXQoU0NFTkUsIENvbnRhaW5lckV4dGVuc2lvbi51cGRhdGUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KFNDRU5FLCBsb2FkZWQpO1xuICAgICAgICBTdHJpbmdSZXNvdXJjZS5pbml0KGVuZ2luZSk7XG4gICAgfVxuICAgIFNjZW5lRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoU2NlbmVFeHRlbnNpb24gfHwgKFNjZW5lRXh0ZW5zaW9uID0ge30pKTtcbiIsImNvbnN0IFBJXzIgPSBNYXRoLlBJICogMjtcbmV4cG9ydCBmdW5jdGlvbiBhcHBseUVsbGlwc2UoZGF0YSwgaGFzRmlsbCwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCByYWRpdXMgPSAwLCByYWRpdXNYLCByYWRpdXNZLCB9ID0gZGF0YTtcbiAgICBjb25zdCByeCA9IHJhZGl1c1ggPz8gcmFkaXVzO1xuICAgIGNvbnN0IHJ5ID0gcmFkaXVzWSA/PyByYWRpdXM7XG4gICAgaWYgKHJ4ID09PSAwIHx8IHJ5ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmVsbGlwc2UoeCwgeSwgcngsIHJ5LCAwLCAwLCBQSV8yKTtcbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhcHBseUNvbW1hbmQoY29tbWFuZCwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gY29tbWFuZDtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbW92ZVRvJzpcbiAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhtb3ZlVG8ueCA/PyAwLCBtb3ZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsaW5lVG8nOlxuICAgICAgICAgICAgY29uc3QgbGluZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKGxpbmVUby54ID8/IDAsIGxpbmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2N1cnZlVG8nOlxuICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8oY3VydmVUby5jeCA/PyAwLCBjdXJ2ZVRvLmN5ID8/IDAsIGN1cnZlVG8ueCA/PyAwLCBjdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3ViaWNDdXJ2ZVRvJzpcbiAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBjb250ZXh0LmJlemllckN1cnZlVG8oY3ViaWNDdXJ2ZVRvLmN4ID8/IDAsIGN1YmljQ3VydmVUby5jeSA/PyAwLCBjdWJpY0N1cnZlVG8uc3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLnN5ID8/IDAsIGN1YmljQ3VydmVUby54ID8/IDAsIGN1YmljQ3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXRoKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpIHtcbiAgICBpZiAoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IGRhdGFbaV07XG4gICAgICAgIGFwcGx5Q29tbWFuZChjb21tYW5kLCBjb250ZXh0KTtcbiAgICB9XG4gICAgaWYgKGhhc0ZpbGwpIHtcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYXBwbHlSZWN0YW5nbGUoZGF0YSwgaGFzRmlsbCwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCB3aWR0aCA9IDAsIGhlaWdodCA9IDAsIH0gPSBkYXRhO1xuICAgIGlmICh3aWR0aCA9PT0gMCB8fCBoZWlnaHQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBNYXRyaXgsIFBvaW50LCBSZWN0YW5nbGUsIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBTaGFwZUV4dGVuc2lvbiwgU0hBUEUsIFNoYXBlIH0gZnJvbSAnLi4vc2hhcGUnO1xuaW1wb3J0IHsgYXBwbHlSZWN0YW5nbGUgfSBmcm9tICcuL3JlY3RhbmdsZSc7XG5pbXBvcnQgeyBhcHBseUVsbGlwc2UgfSBmcm9tICcuL2VsbGlwc2UnO1xuaW1wb3J0IHsgYXBwbHlQYXRoIH0gZnJvbSAnLi9wYXRoJztcbmltcG9ydCB7IGFwcGx5U3RyaW5nIH0gZnJvbSAnLi9zdHJpbmcnO1xuaW1wb3J0IHsgc2V0RmlsbFN0eWxlLCBzZXRTdHJva2VTdHlsZSB9IGZyb20gJy4vc3R5bGUnO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5jb25zdCBvZmZzZXQgPSBQb2ludC5lbXB0eSgpO1xuZnVuY3Rpb24gcmVuZGVyR3JhcGhpY3MoZGF0YSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGNvbnN0IHsgZmlsbCwgc3Ryb2tlIH0gPSBkYXRhO1xuICAgIGNvbnN0IGhhc0ZpbGwgPSAhIWZpbGwgfHwgZmlsbCA9PT0gMDtcbiAgICBjb25zdCBoYXNTdHJva2UgPSAhIXN0cm9rZSB8fCBzdHJva2UgPT09IDA7XG4gICAgaWYgKCFoYXNGaWxsICYmICFoYXNTdHJva2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZXhpc3QgPSB0cnVlO1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gZGF0YTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAncmVjdGFuZ2xlJzpcbiAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlSZWN0YW5nbGUoZGF0YSwgaGFzRmlsbCwgY29udGV4dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICAgICAgICBleGlzdCA9IGFwcGx5RWxsaXBzZShkYXRhLCBoYXNGaWxsLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYXRoJzpcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBkYXRhO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXRoLmRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgZXhpc3QgPSBhcHBseVN0cmluZyhwYXRoLmRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwYXRoLmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgZXhpc3QgPSBhcHBseVBhdGgocGF0aC5kYXRhLCBoYXNGaWxsLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4aXN0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoIWV4aXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGhhc0ZpbGwpIHtcbiAgICAgICAgc2V0RmlsbFN0eWxlKGZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpO1xuICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICB9XG4gICAgaWYgKGhhc1N0cm9rZSkge1xuICAgICAgICBzZXRTdHJva2VTdHlsZShzdHJva2UsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpO1xuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIH1cbn1cbmV4cG9ydCB2YXIgQ2FudmFzU2hhcGVFeHRlbnNpb247XG4oZnVuY3Rpb24gKENhbnZhc1NoYXBlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKHNoYXBlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBzaGFwZTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFBvaW50LnNldEVtcHR5KG9mZnNldCk7XG4gICAgICAgIGlmIChQaXZvdC5oYXNWYWx1ZXMoc2hhcGUpKSB7XG4gICAgICAgICAgICBTaGFwZS5jYWxjdWxhdGVCb3VuZHMoc2hhcGUsIGJvdW5kcyk7XG4gICAgICAgICAgICBpZiAoUmVjdGFuZ2xlLmlzRW1wdHkoYm91bmRzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9mZnNldC54ID0gUGl2b3QuZ2V0WChzaGFwZSwgYm91bmRzLndpZHRoKTtcbiAgICAgICAgICAgIG9mZnNldC55ID0gUGl2b3QuZ2V0WShzaGFwZSwgYm91bmRzLndpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBlbmdpbmUucGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICAgICAgaWYgKFBvaW50LmlzRW1wdHkob2Zmc2V0KSkge1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50TG9jYWwobWF0cml4LCBvZmZzZXQsIG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4ICsgb2Zmc2V0LngsIG1hdHJpeC50eSArIG9mZnNldC55KTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlbmRlckdyYXBoaWNzKGRhdGFbaV0sIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0MmQsIGVuZ2luZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZW5kZXJHcmFwaGljcyhkYXRhLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dDJkLCBlbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc1NoYXBlRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBTaGFwZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoU0hBUEUsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc1NoYXBlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ2FudmFzU2hhcGVFeHRlbnNpb24gfHwgKENhbnZhc1NoYXBlRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IEdyYXBoaWNzU3RyaW5nUmVhZGVyIH0gZnJvbSAnLi4vZGF0YS9zdHJpbmcnO1xuaW1wb3J0IHsgYXBwbHlDb21tYW5kIH0gZnJvbSAnLi9wYXRoJztcbmNvbnN0IHJlYWRlciA9IG5ldyBHcmFwaGljc1N0cmluZ1JlYWRlcigpO1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5U3RyaW5nKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpIHtcbiAgICBpZiAoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICByZWFkZXIuc2V0UGF0aChkYXRhKTtcbiAgICB3aGlsZSAocmVhZGVyLnJlYWROZXh0KCkpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHJlYWRlci5nZXRDb21tYW5kKCk7XG4gICAgICAgIGlmIChjb21tYW5kKSB7XG4gICAgICAgICAgICBhcHBseUNvbW1hbmQoY29tbWFuZCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhhc0ZpbGwpIHtcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBDYW52YXNQYXR0ZXJucyB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5jb25zdCBlbXB0eUFycmF5ID0gW107XG5jb25zdCBlbXB0eU1hdHJpeCA9IE1hdHJpeC5lbXB0eSgpO1xuZnVuY3Rpb24gZ2V0Q2FudmFzUGF0dGVybihmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgaWYgKHR5cGVvZiBmaWxsID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGZpbGwsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBmaWxsID09PSAnb2JqZWN0Jykge1xuICAgICAgICBzd2l0Y2ggKGZpbGwudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc29saWQnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHNvbGlkID0gZmlsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKHNvbGlkLmNvbG9yID8/IDAsIHNvbGlkLmFscGhhID8/IDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGNhc2UgJ2xpbmVhcic6XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZWFyID0gZmlsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMubGluZWFyR3JhZGllbnRQYXR0ZXJuKGxpbmVhci5iZWdpblggPz8gMCwgbGluZWFyLmJlZ2luWSA/PyAwLCBsaW5lYXIuZW5kWCA/PyAwLCBsaW5lYXIuZW5kWSA/PyAwLCBsaW5lYXIuY29sb3JzID8/IGVtcHR5QXJyYXksIGxpbmVhci5hbHBoYXMgPz8gZW1wdHlBcnJheSwgbGluZWFyLnJhdGlvcyA/PyBlbXB0eUFycmF5LCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCk7XG4gICAgICAgICAgICBjYXNlICdyYWRpYWwnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZGlhbCA9IGZpbGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbnZhc1BhdHRlcm5zLnJhZGlhbEdyYWRpZW50UGF0dGVybihyYWRpYWwuYmVnaW5YID8/IDAsIHJhZGlhbC5iZWdpblkgPz8gMCwgcmFkaWFsLmJlZ2luUmFkaXVzID8/IDAsIHJhZGlhbC5lbmRYID8/IHJhZGlhbC5iZWdpblggPz8gMCwgcmFkaWFsLmVuZFkgPz8gcmFkaWFsLmJlZ2luWSA/PyAwLCByYWRpYWwuZW5kUmFkaXVzID8/IDAsIHJhZGlhbC5jb2xvcnMgPz8gZW1wdHlBcnJheSwgcmFkaWFsLmFscGhhcyA/PyBlbXB0eUFycmF5LCByYWRpYWwucmF0aW9zID8/IGVtcHR5QXJyYXksIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGNhc2UgJ2JpdG1hcCc6XG4gICAgICAgICAgICAgICAgY29uc3QgYml0bWFwRmlsbCA9IGZpbGw7XG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXBlYXQgPSB0cnVlLCBzcmMsIG1hdHJpeCA9IGVtcHR5TWF0cml4IH0gPSBiaXRtYXBGaWxsO1xuICAgICAgICAgICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0dGVybiA9IENhbnZhc1BhdHRlcm5zLmJpdG1hcFBhdHRlcm4ocmVzb3VyY2UuaW1hZ2UsIHJlcGVhdCwgbWF0cml4LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWxsU3R5bGUoZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZ2V0Q2FudmFzUGF0dGVybihmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHJva2VTdHlsZShzdHJva2UsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpIHtcbiAgICBpZiAodHlwZW9mIHN0cm9rZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihzdHJva2UsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjb250ZXh0LmxpbmVDYXAgPSAncm91bmQnO1xuICAgICAgICBjb250ZXh0LmxpbmVKb2luID0gJ3JvdW5kJztcbiAgICAgICAgY29udGV4dC5taXRlckxpbWl0ID0gMTA7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBzdHJva2UgPT09ICdvYmplY3QnICYmIHN0cm9rZS5maWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGdldENhbnZhc1BhdHRlcm4oc3Ryb2tlLmZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHN0cm9rZS50aGlja25lc3MgPz8gMTtcbiAgICAgICAgY29udGV4dC5saW5lQ2FwID0gc3Ryb2tlLmNhcHMgPz8gJ3JvdW5kJztcbiAgICAgICAgY29udGV4dC5saW5lSm9pbiA9IHN0cm9rZS5qb2ludHMgPz8gJ3JvdW5kJztcbiAgICAgICAgY29udGV4dC5taXRlckxpbWl0ID0gc3Ryb2tlLm1pdGVyTGltaXQgPz8gMTA7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQm91bmRzIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBQYXRoQ29tbWFuZCB9IGZyb20gJy4vcGF0aCc7XG5pbXBvcnQgeyBHcmFwaGljc1N0cmluZyB9IGZyb20gJy4vc3RyaW5nJztcbmV4cG9ydCB2YXIgUmVjdGFuZ2xlRGF0YTtcbihmdW5jdGlvbiAoUmVjdGFuZ2xlRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHdpZHRoID0gMCwgaGVpZ2h0ID0gMCwgfSA9IGRhdGE7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCwgeSk7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShSZWN0YW5nbGVEYXRhIHx8IChSZWN0YW5nbGVEYXRhID0ge30pKTtcbmV4cG9ydCB2YXIgRWxsaXBzZURhdGE7XG4oZnVuY3Rpb24gKEVsbGlwc2VEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgcmFkaXVzID0gMCwgcmFkaXVzWCwgcmFkaXVzWSwgfSA9IGRhdGE7XG4gICAgICAgIGNvbnN0IHJ4ID0gcmFkaXVzWCA/PyByYWRpdXM7XG4gICAgICAgIGNvbnN0IHJ5ID0gcmFkaXVzWSA/PyByYWRpdXM7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCAtIHJ4LCB5IC0gcnkpO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHggKyByeCwgeSArIHJ5KTtcbiAgICB9XG4gICAgRWxsaXBzZURhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoRWxsaXBzZURhdGEgfHwgKEVsbGlwc2VEYXRhID0ge30pKTtcbmV4cG9ydCB2YXIgUGF0aERhdGE7XG4oZnVuY3Rpb24gKFBhdGhEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKHBhdGhEYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBwYXRoRGF0YTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgR3JhcGhpY3NTdHJpbmcuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IGRhdGFbaV07XG4gICAgICAgICAgICAgICAgUGF0aENvbW1hbmQuY2FsY3VsYXRlQm91bmRzKGNvbW1hbmQsIGJvdW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgUGF0aERhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoUGF0aERhdGEgfHwgKFBhdGhEYXRhID0ge30pKTtcbmV4cG9ydCB2YXIgR3JhcGhpY3NEYXRhO1xuKGZ1bmN0aW9uIChHcmFwaGljc0RhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gZGF0YTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdyZWN0YW5nbGUnOlxuICAgICAgICAgICAgICAgIFJlY3RhbmdsZURhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbGxpcHNlJzpcbiAgICAgICAgICAgICAgICBFbGxpcHNlRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3BhdGgnOlxuICAgICAgICAgICAgICAgIFBhdGhEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBHcmFwaGljc0RhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoR3JhcGhpY3NEYXRhIHx8IChHcmFwaGljc0RhdGEgPSB7fSkpO1xuIiwiaW1wb3J0IHsgQm91bmRzIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5leHBvcnQgdmFyIFBhdGhDb21tYW5kO1xuKGZ1bmN0aW9uIChQYXRoQ29tbWFuZCkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBwYXRoO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ21vdmVUbyc6XG4gICAgICAgICAgICBjYXNlICdsaW5lVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBtb3ZlVG8ueCA/PyAwLCBtb3ZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1cnZlVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3VydmVUby5jeCA/PyAwLCBjdXJ2ZVRvLmN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3VydmVUby54ID8/IDAsIGN1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1YmljQ3VydmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby5jeCA/PyAwLCBjdWJpY0N1cnZlVG8uY3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8uc3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLnN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLnggPz8gMCwgY3ViaWNDdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFBhdGhDb21tYW5kIHx8IChQYXRoQ29tbWFuZCA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQYXRoQ29tbWFuZCwgfSBmcm9tICcuL3BhdGgnO1xuY29uc3QgTlVNQkVSU19DT1VOVCA9IHtcbiAgICBNOiAyLFxuICAgIG06IDIsXG4gICAgTDogMixcbiAgICBsOiAyLFxuICAgIEg6IDEsXG4gICAgaDogMSxcbiAgICBWOiAxLFxuICAgIHY6IDEsXG4gICAgQzogNixcbiAgICBjOiA2LFxuICAgIFM6IDQsXG4gICAgczogNCxcbiAgICBROiA0LFxuICAgIHE6IDQsXG4gICAgVDogMixcbiAgICB0OiAyLFxufTtcbmNvbnN0IENPTU1BTkRfUkVHRVggPSAvW01tTGxIaFZ2Q2NTc1FxVHRdLztcbmNvbnN0IE5VTUJFUl9SRUdFWCA9IC9bLStdP1tcXGQuXSsvO1xuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU3RyaW5nU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gJyc7XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IG51bGw7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICB0aGlzLnN5bWJvbFJlZ2V4ID0gL1tNbUxsSGhWdkNjU3NRcVR0XXxbLStdP1tcXGQuXSsvZztcbiAgICB9XG4gICAgc2V0UGF0aChwYXRoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMuc3ltYm9sUmVnZXgubGFzdEluZGV4ID0gMDtcbiAgICB9XG4gICAgZ2V0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZDtcbiAgICB9XG4gICAgZ2V0QnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWZmZXI7XG4gICAgfVxuICAgIHJlYWROZXh0KCkge1xuICAgICAgICBjb25zdCB7IGxhc3RJbmRleCB9ID0gdGhpcy5zeW1ib2xSZWdleDtcbiAgICAgICAgY29uc3Qgc3ltYm9sTWF0Y2ggPSB0aGlzLnN5bWJvbFJlZ2V4LmV4ZWModGhpcy5wYXRoKTtcbiAgICAgICAgaWYgKCFzeW1ib2xNYXRjaCkge1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xNYXRjaFswXTtcbiAgICAgICAgaWYgKENPTU1BTkRfUkVHRVgudGVzdChzeW1ib2wpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBzeW1ib2w7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoTlVNQkVSX1JFR0VYLnRlc3Qoc3ltYm9sKSkge1xuICAgICAgICAgICAgdGhpcy5zeW1ib2xSZWdleC5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jb21tYW5kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY291bnQgPSBOVU1CRVJTX0NPVU5UW3RoaXMuY29tbWFuZF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyTWF0Y2ggPSB0aGlzLnN5bWJvbFJlZ2V4LmV4ZWModGhpcy5wYXRoKTtcbiAgICAgICAgICAgIGlmIChudW1iZXJNYXRjaCAmJiBOVU1CRVJfUkVHRVgudGVzdChudW1iZXJNYXRjaFswXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlcltpXSA9IHBhcnNlRmxvYXQobnVtYmVyTWF0Y2hbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR3JhcGhpY3NTdHJpbmdSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0cmVhbSA9IG5ldyBHcmFwaGljc1N0cmluZ1N0cmVhbSgpO1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSB7IHR5cGU6ICdtb3ZlVG8nIH07XG4gICAgICAgIHRoaXMuY29tbWFuZEV4aXN0cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0WSA9IDA7XG4gICAgICAgIHRoaXMubGFzdENYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0Q1kgPSAwO1xuICAgIH1cbiAgICBzZXRQYXRoKHBhdGgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0uc2V0UGF0aChwYXRoKTtcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgICAgIHRoaXMubGFzdFkgPSAwO1xuICAgICAgICB0aGlzLmxhc3RDWCA9IDA7XG4gICAgICAgIHRoaXMubGFzdENZID0gMDtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gZmFsc2U7XG4gICAgfVxuICAgIGdldENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRFeGlzdHMgPyB0aGlzLmNvbW1hbmQgOiBudWxsO1xuICAgIH1cbiAgICByZWFkTmV4dCgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0ucmVhZE5leHQoKTtcbiAgICAgICAgdGhpcy5wYXJzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kRXhpc3RzO1xuICAgIH1cbiAgICBwYXJzZSgpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMuc3RyZWFtLmdldENvbW1hbmQoKTtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gISFjb21tYW5kO1xuICAgICAgICBpZiAoIXRoaXMuY29tbWFuZEV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuc3RyZWFtLmdldEJ1ZmZlcigpO1xuICAgICAgICBjb25zdCBbZTAsIGUxLCBlMiwgZTMsIGU0LCBlNSxdID0gYnVmZmVyO1xuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbW92ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ21vdmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gZTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IGU0O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGU1O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTQgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGU1ICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IHRoaXMubGFzdENZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGUzICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gdGhpcy5sYXN0Q1k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IHJlYWRlciA9IG5ldyBHcmFwaGljc1N0cmluZ1JlYWRlcigpO1xuZXhwb3J0IHZhciBHcmFwaGljc1N0cmluZztcbihmdW5jdGlvbiAoR3JhcGhpY3NTdHJpbmcpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aCwgYm91bmRzKSB7XG4gICAgICAgIHJlYWRlci5zZXRQYXRoKHBhdGgpO1xuICAgICAgICB3aGlsZSAocmVhZGVyLnJlYWROZXh0KCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSByZWFkZXIuZ2V0Q29tbWFuZCgpO1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc1N0cmluZyB8fCAoR3JhcGhpY3NTdHJpbmcgPSB7fSkpO1xuIiwiaW1wb3J0IHsgTWF0cml4LCBQb2ludCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuY29uc3QgdGVtcFBvaW50MCA9IFBvaW50LmVtcHR5KCk7XG5jb25zdCB0ZW1wUG9pbnQxID0gUG9pbnQuZW1wdHkoKTtcbmNvbnN0IGVtcHR5TWF0cml4ID0gTWF0cml4LmVtcHR5KCk7XG5leHBvcnQgY2xhc3MgR3JhcGhpY3Mge1xuICAgIGNvbnN0cnVjdG9yKHNoYXBlKSB7XG4gICAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZTtcbiAgICB9XG4gICAgYmVnaW5GaWxsKGNvbG9yID0gMCwgYWxwaGEgPSAxKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYmVnaW5CaXRtYXBGaWxsKHNyYywgbWF0cml4LCByZXBlYXQgPSB0cnVlLCBzbW9vdGggPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAnYml0bWFwJyxcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHJlcGVhdCxcbiAgICAgICAgICAgIHNtb290aCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGJlZ2luR3JhZGllbnRGaWxsKHR5cGUsIGNvbG9yLCBhbHBoYSwgcmF0aW8sIG1hdHJpeCkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmVhcicpIHtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueCA9IC04MTkuMjtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueSA9IDA7XG4gICAgICAgICAgICB0ZW1wUG9pbnQxLnggPSA4MTkuMjtcbiAgICAgICAgICAgIHRlbXBQb2ludDEueSA9IDA7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCB0ZW1wUG9pbnQwLCB0ZW1wUG9pbnQwKTtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHRlbXBQb2ludDEsIHRlbXBQb2ludDEpO1xuICAgICAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICAgICAgYmVnaW5YOiB0ZW1wUG9pbnQwLngsXG4gICAgICAgICAgICAgICAgYmVnaW5ZOiB0ZW1wUG9pbnQwLnksXG4gICAgICAgICAgICAgICAgZW5kWDogdGVtcFBvaW50MS54LFxuICAgICAgICAgICAgICAgIGVuZFk6IHRlbXBQb2ludDEueSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnggPSAxNjM4LjQ7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnkgPSAwO1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgdGVtcFBvaW50MCwgdGVtcFBvaW50MCk7XG4gICAgICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgICAgICBiZWdpblg6IHRlbXBQb2ludDAueCxcbiAgICAgICAgICAgICAgICBiZWdpblk6IHRlbXBQb2ludDAueSxcbiAgICAgICAgICAgICAgICBiZWdpblJhZGl1czogMCxcbiAgICAgICAgICAgICAgICBlbmRYOiB0ZW1wUG9pbnQwLngsXG4gICAgICAgICAgICAgICAgZW5kWTogdGVtcFBvaW50MC55LFxuICAgICAgICAgICAgICAgIGVuZFJhZGl1czogTWF0aC5hYnMoKHRlbXBQb2ludDAueCAtIG1hdHJpeC50eCkgLyAyKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGxpbmVTdHlsZSh0aGlja25lc3MgPSAwLCBjb2xvciA9IDAsIGFscGhhID0gMSwgcGl4ZWxIaW50aW5nID0gZmFsc2UsIHNjYWxlTW9kZSA9ICdub25lJywgY2FwcyA9ICdyb3VuZCcsIGpvaW50cyA9ICdyb3VuZCcsIG1pdGVyTGltaXQgPSAzKSB7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0ge1xuICAgICAgICAgICAgdGhpY2tuZXNzLFxuICAgICAgICAgICAgcGl4ZWxIaW50aW5nLFxuICAgICAgICAgICAgc2NhbGVNb2RlLFxuICAgICAgICAgICAgY2FwcyxcbiAgICAgICAgICAgIGpvaW50cyxcbiAgICAgICAgICAgIG1pdGVyTGltaXQsXG4gICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBsaW5lR3JhZGllbnRTdHlsZSh0eXBlLCBjb2xvciwgYWxwaGEsIHJhdGlvLCBtYXRyaXggPSBlbXB0eU1hdHJpeCkge1xuICAgICAgICBpZiAoIXRoaXMuc3Ryb2tlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmVhcicpIHtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueCA9IC04MTkuMjtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueSA9IDA7XG4gICAgICAgICAgICB0ZW1wUG9pbnQxLnggPSA4MTkuMjtcbiAgICAgICAgICAgIHRlbXBQb2ludDEueSA9IDA7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCB0ZW1wUG9pbnQwLCB0ZW1wUG9pbnQwKTtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHRlbXBQb2ludDEsIHRlbXBQb2ludDEpO1xuICAgICAgICAgICAgdGhpcy5zdHJva2UuZmlsbCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgICAgICAgIGJlZ2luWDogdGVtcFBvaW50MC54LFxuICAgICAgICAgICAgICAgIGJlZ2luWTogdGVtcFBvaW50MC55LFxuICAgICAgICAgICAgICAgIGVuZFg6IHRlbXBQb2ludDEueCxcbiAgICAgICAgICAgICAgICBlbmRZOiB0ZW1wUG9pbnQxLnksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGVtcFBvaW50MC54ID0gMTYzOC40O1xuICAgICAgICAgICAgdGVtcFBvaW50MC55ID0gMDtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHRlbXBQb2ludDAsIHRlbXBQb2ludDApO1xuICAgICAgICAgICAgdGhpcy5zdHJva2UuZmlsbCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgICAgICAgIGJlZ2luWDogdGVtcFBvaW50MC54LFxuICAgICAgICAgICAgICAgIGJlZ2luWTogdGVtcFBvaW50MC55LFxuICAgICAgICAgICAgICAgIGJlZ2luUmFkaXVzOiAwLFxuICAgICAgICAgICAgICAgIGVuZFg6IHRlbXBQb2ludDAueCxcbiAgICAgICAgICAgICAgICBlbmRZOiB0ZW1wUG9pbnQwLnksXG4gICAgICAgICAgICAgICAgZW5kUmFkaXVzOiBNYXRoLmFicygodGVtcFBvaW50MC54IC0gbWF0cml4LnR4KSAvIDIpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbGluZUJpdG1hcFN0eWxlKHNyYywgbWF0cml4LCByZXBlYXQgPSB0cnVlLCBzbW9vdGggPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXRoaXMuc3Ryb2tlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0cm9rZS5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ2JpdG1hcCcsXG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICBzbW9vdGgsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBtb3ZlVG8oeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5iZWdpblBhdGgoKTtcbiAgICAgICAgcGF0aC5wdXNoKHsgdHlwZTogJ21vdmVUbycsIHgsIHkgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBsaW5lVG8oeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHsgdHlwZTogJ2xpbmVUbycsIHgsIHkgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjdXJ2ZVRvKGN4LCBjeSwgeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdXJ2ZVRvJywgY3gsIGN5LCB4LCB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGN1YmljQ3VydmVUbyhjeCwgY3ksIHN4LCBzeSwgeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLCBjeCwgY3ksIHN4LCBzeSwgeCwgeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkcmF3Um91bmRSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIGVsbGlwc2VXaWR0aCA9IDAsIGVsbGlwc2VIZWlnaHQgPSAwKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICBjb25zdCB3ID0gZWxsaXBzZVdpZHRoO1xuICAgICAgICBjb25zdCBoID0gZWxsaXBzZUhlaWdodDtcbiAgICAgICAgY29uc3QgayA9IDAuNTUyMjg0ODtcbiAgICAgICAgY29uc3Qgb3ggPSAodyAvIDIpICogaztcbiAgICAgICAgY29uc3Qgb3kgPSAoaCAvIDIpICogaztcbiAgICAgICAgY29uc3QgeGUgPSB4ICsgdztcbiAgICAgICAgY29uc3QgeWUgPSB5ICsgaDtcbiAgICAgICAgY29uc3QgeG0gPSB4ICsgdyAvIDI7XG4gICAgICAgIGNvbnN0IHltID0geSArIGggLyAyO1xuICAgICAgICBjb25zdCBkeCA9IHdpZHRoIC0gdztcbiAgICAgICAgY29uc3QgZHkgPSBoZWlnaHQgLSBoO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ21vdmVUbycsXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeTogeW0sXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeCxcbiAgICAgICAgICAgIGN5OiB5bSAtIG95LFxuICAgICAgICAgICAgc3g6IHhtIC0gb3gsXG4gICAgICAgICAgICBzeTogeSxcbiAgICAgICAgICAgIHg6IHhtLFxuICAgICAgICAgICAgeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhtICsgZHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhtICsgb3ggKyBkeCxcbiAgICAgICAgICAgIGN5OiB5LFxuICAgICAgICAgICAgc3g6IHhlICsgZHgsXG4gICAgICAgICAgICBzeTogeW0gLSBveSxcbiAgICAgICAgICAgIHg6IHhlICsgZHgsXG4gICAgICAgICAgICB5OiB5bSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhlICsgZHgsXG4gICAgICAgICAgICB5OiB5bSArIGR5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhlICsgZHgsXG4gICAgICAgICAgICBjeTogeW0gKyBveSArIGR5LFxuICAgICAgICAgICAgc3g6IHhtICsgb3ggKyBkeCxcbiAgICAgICAgICAgIHN5OiB5ZSArIGR5LFxuICAgICAgICAgICAgeDogeG0gKyBkeCxcbiAgICAgICAgICAgIHk6IHllICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVUbycsXG4gICAgICAgICAgICB4OiB4bSxcbiAgICAgICAgICAgIHk6IHllICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeG0gLSBveCxcbiAgICAgICAgICAgIGN5OiB5ZSArIGR5LFxuICAgICAgICAgICAgc3g6IHgsXG4gICAgICAgICAgICBzeTogeW0gKyBveSArIGR5LFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHk6IHltICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZHJhd1JlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEudHlwZSA9ICdyZWN0YW5nbGUnO1xuICAgICAgICBkYXRhLnggPSB4O1xuICAgICAgICBkYXRhLnkgPSB5O1xuICAgICAgICBkYXRhLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGRhdGEuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZHJhd0NpcmNsZSh4LCB5LCByYWRpdXMpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAnZWxsaXBzZSc7XG4gICAgICAgIGRhdGEueCA9IHg7XG4gICAgICAgIGRhdGEueSA9IHk7XG4gICAgICAgIGRhdGEucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZHJhd0VsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEudHlwZSA9ICdlbGxpcHNlJztcbiAgICAgICAgZGF0YS5yYWRpdXNYID0gd2lkdGggLyAyO1xuICAgICAgICBkYXRhLnJhZGl1c1kgPSBoZWlnaHQgLyAyO1xuICAgICAgICBkYXRhLnggPSB4IC0gZGF0YS5yYWRpdXNYO1xuICAgICAgICBkYXRhLnkgPSB5IC0gZGF0YS5yYWRpdXNZO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNoYXBlLmRhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjcmVhdGVEYXRhKCkge1xuICAgICAgICBjb25zdCB7IHNoYXBlLCBmaWxsLCBzdHJva2UgfSA9IHRoaXM7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNoYXBlLmRhdGEpKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHNoYXBlLmRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBzaGFwZS5kYXRhID0gW3NoYXBlLmRhdGFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hhcGUuZGF0YSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyYXBoaWNzRGF0YSA9IHsgdHlwZTogJ3BhdGgnLCBmaWxsLCBzdHJva2UgfTtcbiAgICAgICAgc2hhcGUuZGF0YS5wdXNoKGdyYXBoaWNzRGF0YSk7XG4gICAgICAgIHJldHVybiBncmFwaGljc0RhdGE7XG4gICAgfVxuICAgIGJlZ2luUGF0aCgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLmRhdGEgPSBbXTtcbiAgICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcbiAgICB9XG4gICAgZ2V0UGF0aCgpIHtcbiAgICAgICAgY29uc3QgeyBzaGFwZSB9ID0gdGhpcztcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNoYXBlLmRhdGEpIHx8ICFzaGFwZS5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gc2hhcGUuZGF0YVtzaGFwZS5kYXRhLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5kYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YS5kYXRhO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vZGF0YS9kYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9wYXRoJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9zdHJpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL3N0eWxlJztcbmV4cG9ydCAqIGZyb20gJy4vc2hhcGUnO1xuZXhwb3J0ICogZnJvbSAnLi9ncmFwaGljcyc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy9zaGFwZSc7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQm91bmRzLCBSZWN0YW5nbGUgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgR3JhcGhpY3NEYXRhIH0gZnJvbSAnLi9kYXRhL2RhdGEnO1xuZXhwb3J0IGNvbnN0IFNIQVBFID0gJ3NoYXBlJztcbmNvbnN0IGJvdW5kcyA9IEJvdW5kcy5lbXB0eSgpO1xuZXhwb3J0IHZhciBTaGFwZTtcbihmdW5jdGlvbiAoU2hhcGUpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoc2hhcGUsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHNoYXBlO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEJvdW5kcy5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhW2ldLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJvdW5kcy5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdpZHRoID0gYm91bmRzLm1heFggLSBib3VuZHMubWluWDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gYm91bmRzLm1heFkgLSBib3VuZHMubWluWTtcbiAgICAgICAgY29uc3QgeCA9IGJvdW5kcy5taW5YICsgUGl2b3QuZ2V0WChzaGFwZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gYm91bmRzLm1pblkgKyBQaXZvdC5nZXRZKHNoYXBlLCBoZWlnaHQpO1xuICAgICAgICByZXN1bHQueCA9IHg7XG4gICAgICAgIHJlc3VsdC55ID0geTtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIFNoYXBlLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFNoYXBlIHx8IChTaGFwZSA9IHt9KSk7XG5jb25zdCByZWN0YW5nbGUgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgU2hhcGVFeHRlbnNpb247XG4oZnVuY3Rpb24gKFNoYXBlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdChzaGFwZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgbG9jYWwgfSA9IGVuZ2luZS5wb2ludGVycztcbiAgICAgICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzKHNoYXBlLCByZWN0YW5nbGUpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKHJlY3RhbmdsZSwgbG9jYWwpO1xuICAgIH1cbiAgICBTaGFwZUV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChTSEFQRSwgaGl0VGVzdCk7XG4gICAgICAgIEltYWdlUmVzb3VyY2UuaW5pdChlbmdpbmUpO1xuICAgIH1cbiAgICBTaGFwZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFNoYXBlRXh0ZW5zaW9uIHx8IChTaGFwZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQ2FudmFzUGF0dGVybnMgfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IEZvbnQgfSBmcm9tICcuLi9kYXRhL2ZvbnQnO1xuaW1wb3J0IHsgVGV4dEV4dGVuc2lvbiwgVEVYVCwgVGV4dCB9IGZyb20gJy4uL3RleHQnO1xuaW1wb3J0IHsgVGV4dEZvcm1hdCB9IGZyb20gJy4uL2RhdGEvZm9ybWF0JztcbmltcG9ydCB7IFRleHRNZXRyaWNzIH0gZnJvbSAnLi4vZGF0YS9tZXRyaWNzJztcbmNvbnN0IGRlZmF1bHRUZXh0Rm9ybWF0ID0ge307XG5jb25zdCBDT1JSRUNUSU9OID0gMC44NTtcbmV4cG9ydCB2YXIgQ2FudmFzVGV4dEV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzVGV4dEV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihjb21wb25lbnQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IG1hdHJpeCwgY29sb3JUcmFuc2Zvcm0gfSA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChUZXh0LmlzVXBkYXRlTWV0cmljcyhjb21wb25lbnQpKSB7XG4gICAgICAgICAgICBUZXh0LnVwZGF0ZU1ldHJpY3MoY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG1ldHJpY3MgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCFtZXRyaWNzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBmb3JtYXQsIGJvcmRlciwgYmFja2dyb3VuZCwgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgVGV4dEZvcm1hdC5jb21iaW5lKGZvcm1hdCwgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCwgZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBjb25zdCByZWFsV2lkdGggPSB3aWR0aCA/PyBtZXRyaWNzLndpZHRoO1xuICAgICAgICBjb25zdCByZWFsSGVpZ2h0ID0gaGVpZ2h0ID8/IG1ldHJpY3MuaGVpZ2h0O1xuICAgICAgICBjb25zdCBvZmZzZXRYID0gUGl2b3QuZ2V0WChjb21wb25lbnQsIHJlYWxXaWR0aCk7XG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSBQaXZvdC5nZXRZKGNvbXBvbmVudCwgcmVhbEhlaWdodCk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IGVuZ2luZS5wbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgaWYgKGJhY2tncm91bmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gJyc7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGJhY2tncm91bmQsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5yZWN0KG9mZnNldFgsIG9mZnNldFksIHJlYWxXaWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGJvcmRlciwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuICAgICAgICAgICAgY29udGV4dDJkLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLnJlY3Qob2Zmc2V0WCwgb2Zmc2V0WSwgcmVhbFdpZHRoLCByZWFsSGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0MmQudGV4dEJhc2VsaW5lID0gJ2FscGhhYmV0aWMnO1xuICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnJztcbiAgICAgICAgY29uc3Qgc2ltcGxlID0gVGV4dC5pc1NpbXBsZShjb21wb25lbnQpO1xuICAgICAgICBpZiAoc2ltcGxlKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gY29tcG9uZW50LnRleHQ7XG4gICAgICAgICAgICBjb25zdCB7IHNpemUsIGNvbG9yLCBhbHBoYSwgbGVhZGluZywgbGV0dGVyU3BhY2luZywgfSA9IGRlZmF1bHRUZXh0Rm9ybWF0O1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdEZvbnQgPSBGb250LmdldEZvbnQoZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sU2l6ZSA9IHNpemUgKiBDT1JSRUNUSU9OO1xuICAgICAgICAgICAgY29uc3QgYWxpZ25WYWx1ZSA9IFRleHRGb3JtYXQuZ2V0QWxpZ25WYWx1ZShkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZm9udCA9IEZvbnQuZ2V0U3R5bGUoZGVmYXVsdEZvbnQsIHNpemUpO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihjb2xvciwgYWxwaGEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGxldCB4ID0gb2Zmc2V0WCArIGFsaWduVmFsdWUgPyBhbGlnblZhbHVlICogKHJlYWxXaWR0aCAtIFRleHRNZXRyaWNzLmdldFNpbXBsZVdpZHRoKGRlZmF1bHRUZXh0Rm9ybWF0LCB0ZXh0LCAwKSkgOiAwO1xuICAgICAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICBpZiAoc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICB4ID0gYWxpZ25WYWx1ZSA/IGFsaWduVmFsdWUgKiAocmVhbFdpZHRoIC0gVGV4dE1ldHJpY3MuZ2V0U2ltcGxlV2lkdGgoZGVmYXVsdFRleHRGb3JtYXQsIHRleHQsIGkgKyAxKSkgOiAwO1xuICAgICAgICAgICAgICAgICAgICB5ICs9IHNpemUgKyBsZWFkaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IHRleHRbaSArIDFdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKGRlZmF1bHRGb250LCBzaXplLCBzeW1ib2wsIHN5bWJvbE5leHQpICsgbGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDJkLmZpbGxUZXh0KHN5bWJvbCwgeCwgeSArIHN5bWJvbFNpemUpO1xuICAgICAgICAgICAgICAgICAgICB4ICs9IGFkdmFuY2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsaWduVmVydGljYWxWYWx1ZSA9IFRleHRGb3JtYXQuZ2V0VmVydGljYWxBbGlnblZhbHVlKGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgICAgICAgICB5ID0gKGhlaWdodCAtIG1ldHJpY3MuaGVpZ2h0KSAqIGFsaWduVmVydGljYWxWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoeSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeSArPSBvZmZzZXRZO1xuICAgICAgICAgICAgY29uc3QgeyBsaW5lcyB9ID0gbWV0cmljcztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGxpbmUuc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3QgPSBsaW5lLnN5bWJvbHNbMF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsaWduVmFsdWUgPSBUZXh0Rm9ybWF0LmdldEFsaWduVmFsdWUoZmlyc3QuZm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSAocmVhbFdpZHRoIC0gbGluZS53aWR0aCkgKiBhbGlnblZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHggKz0gb2Zmc2V0WDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzeW1ib2xzIH0gPSBsaW5lO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lSGVpZ2h0ID0gbGluZS5oZWlnaHQgKiBDT1JSRUNUSU9OO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN5bWJvbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gc3ltYm9sLmZvcm1hdC5zaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxpZ25TeW1ib2xWYWx1ZSA9IFRleHRGb3JtYXQuZ2V0VmVydGljYWxBbGlnblZhbHVlKHN5bWJvbC5mb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sU2l6ZSA9IHNpemUgKiBDT1JSRUNUSU9OO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9udCA9IEZvbnQuZ2V0Rm9udChzeW1ib2wuZm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5mb250ID0gRm9udC5nZXRTdHlsZShzeW1ib2xGb250LCBzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oc3ltYm9sLmZvcm1hdC5jb2xvciwgc3ltYm9sLmZvcm1hdC5hbHBoYSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDJkLmZpbGxUZXh0KHN5bWJvbC5zeW1ib2wsIHgsIHkgKyBzeW1ib2xTaXplICsgYWxpZ25TeW1ib2xWYWx1ZSAqIChsaW5lSGVpZ2h0IC0gc3ltYm9sU2l6ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgeCArPSBzeW1ib2wuYWR2YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB5ICs9IGxpbmUuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc1RleHRFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIFRleHRFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KFRFWFQsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc1RleHRFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNUZXh0RXh0ZW5zaW9uIHx8IChDYW52YXNUZXh0RXh0ZW5zaW9uID0ge30pKTtcbiIsImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuZXhwb3J0IGNvbnN0IEVNID0gMTAyNDtcbmNvbnN0IGZvbnRzID0gbmV3IE1hcCgpO1xuZXhwb3J0IHZhciBGb250O1xuKGZ1bmN0aW9uIChGb250KSB7XG4gICAgZnVuY3Rpb24gZ2V0U3R5bGUoZm9udCwgc2l6ZSkge1xuICAgICAgICByZXR1cm4gZm9udC5uYW1lLnJlcGxhY2UoJyUnLCBzaXplLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBGb250LmdldFN0eWxlID0gZ2V0U3R5bGU7XG4gICAgZnVuY3Rpb24gbWVhc3VyZVRleHQoZm9udCwgc2l6ZSwgdGV4dCkge1xuICAgICAgICBjb250ZXh0LmZvbnQgPSBnZXRTdHlsZShmb250LCBzaXplKTtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gICAgfVxuICAgIEZvbnQubWVhc3VyZVRleHQgPSBtZWFzdXJlVGV4dDtcbiAgICBmdW5jdGlvbiBnZXRDaGFyV2lkdGgoZm9udCwgY2hhcikge1xuICAgICAgICBsZXQgd2lkdGggPSBmb250LndpZHRocy5nZXQoY2hhcik7XG4gICAgICAgIGlmICghd2lkdGgpIHtcbiAgICAgICAgICAgIHdpZHRoID0gbWVhc3VyZVRleHQoZm9udCwgRU0sIGNoYXIpO1xuICAgICAgICAgICAgZm9udC53aWR0aHMuc2V0KGNoYXIsIHdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfVxuICAgIEZvbnQuZ2V0Q2hhcldpZHRoID0gZ2V0Q2hhcldpZHRoO1xuICAgIGZ1bmN0aW9uIGdldEtlcm5pbmcoZm9udCwgZmlyc3QsIHNlY29uZCkge1xuICAgICAgICBjb25zdCBwYWlyID0gZmlyc3QgKyBzZWNvbmQ7XG4gICAgICAgIGxldCBrZXJuaW5nID0gZm9udC5rZXJuaW5ncy5nZXQocGFpcik7XG4gICAgICAgIGlmICgha2VybmluZykge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGhTZWNvbmQgPSBnZXRDaGFyV2lkdGgoZm9udCwgc2Vjb25kKTtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoVG90YWwgPSBtZWFzdXJlVGV4dChmb250LCBFTSwgZmlyc3QgKyBzZWNvbmQpO1xuICAgICAgICAgICAga2VybmluZyA9IHdpZHRoVG90YWwgLSB3aWR0aFNlY29uZDtcbiAgICAgICAgICAgIGZvbnQua2VybmluZ3Muc2V0KHBhaXIsIGtlcm5pbmcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXJuaW5nO1xuICAgIH1cbiAgICBGb250LmdldEtlcm5pbmcgPSBnZXRLZXJuaW5nO1xuICAgIGZ1bmN0aW9uIGdldEFkdmFuY2UoZm9udCwgc2l6ZSwgZmlyc3QsIHNlY29uZCkge1xuICAgICAgICBjb25zdCBzY2FsZSA9IHNpemUgLyBFTTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBnZXRDaGFyV2lkdGgoZm9udCwgZmlyc3QpO1xuICAgICAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpZHRoICogc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2VybmluZyA9IGdldEtlcm5pbmcoZm9udCwgZmlyc3QsIHNlY29uZCk7XG4gICAgICAgIHJldHVybiBrZXJuaW5nICogc2NhbGU7XG4gICAgfVxuICAgIEZvbnQuZ2V0QWR2YW5jZSA9IGdldEFkdmFuY2U7XG4gICAgZnVuY3Rpb24gZ2V0Rm9udChmb3JtYXQpIHtcbiAgICAgICAgbGV0IG5hbWUgPSAnJztcbiAgICAgICAgaWYgKGZvcm1hdC5ib2xkKSB7XG4gICAgICAgICAgICBuYW1lICs9ICdib2xkICc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdC5pdGFsaWMpIHtcbiAgICAgICAgICAgIG5hbWUgKz0gJ2l0YWxpYyAnO1xuICAgICAgICB9XG4gICAgICAgIG5hbWUgKz0gYCVweCAke2Zvcm1hdC5mb250fWA7XG4gICAgICAgIGxldCBmb250ID0gZm9udHMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoIWZvbnQpIHtcbiAgICAgICAgICAgIGZvbnQgPSB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB3aWR0aHM6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgICAgICBrZXJuaW5nczogbmV3IE1hcCgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvbnRzLnNldChuYW1lLCBmb250KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9udDtcbiAgICB9XG4gICAgRm9udC5nZXRGb250ID0gZ2V0Rm9udDtcbn0pKEZvbnQgfHwgKEZvbnQgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBUZXh0Rm9ybWF0O1xuKGZ1bmN0aW9uIChUZXh0Rm9ybWF0KSB7XG4gICAgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCA9IHtcbiAgICAgICAgZm9udDogJ2FyaWFsJyxcbiAgICAgICAgc2l6ZTogMTUsXG4gICAgICAgIGNvbG9yOiAwLFxuICAgICAgICBhbHBoYTogMSxcbiAgICAgICAgYm9sZDogZmFsc2UsXG4gICAgICAgIGl0YWxpYzogZmFsc2UsXG4gICAgICAgIHVuZGVybGluZTogZmFsc2UsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgICAgIGxlYWRpbmc6IDAsXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgIH07XG4gICAgZnVuY3Rpb24gY29tYmluZShzb3VyY2UsIGRlZmF1bHRGb3JtYXQsIHJlc3VsdCkge1xuICAgICAgICByZXN1bHQuZm9udCA9IHNvdXJjZT8uZm9udCA/PyBkZWZhdWx0Rm9ybWF0LmZvbnQ7XG4gICAgICAgIHJlc3VsdC5zaXplID0gc291cmNlPy5zaXplID8/IGRlZmF1bHRGb3JtYXQuc2l6ZTtcbiAgICAgICAgcmVzdWx0LmNvbG9yID0gc291cmNlPy5jb2xvciA/PyBkZWZhdWx0Rm9ybWF0LmNvbG9yO1xuICAgICAgICByZXN1bHQuYWxwaGEgPSBzb3VyY2U/LmFscGhhID8/IGRlZmF1bHRGb3JtYXQuYWxwaGE7XG4gICAgICAgIHJlc3VsdC5ib2xkID0gc291cmNlPy5ib2xkID8/IGRlZmF1bHRGb3JtYXQuYm9sZDtcbiAgICAgICAgcmVzdWx0Lml0YWxpYyA9IHNvdXJjZT8uaXRhbGljID8/IGRlZmF1bHRGb3JtYXQuaXRhbGljO1xuICAgICAgICByZXN1bHQudW5kZXJsaW5lID0gc291cmNlPy51bmRlcmxpbmUgPz8gZGVmYXVsdEZvcm1hdC51bmRlcmxpbmU7XG4gICAgICAgIHJlc3VsdC5sZXR0ZXJTcGFjaW5nID0gc291cmNlPy5sZXR0ZXJTcGFjaW5nID8/IGRlZmF1bHRGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgcmVzdWx0LmxlYWRpbmcgPSBzb3VyY2U/LmxlYWRpbmcgPz8gZGVmYXVsdEZvcm1hdC5sZWFkaW5nO1xuICAgICAgICByZXN1bHQuYWxpZ24gPSBzb3VyY2U/LmFsaWduID8/IGRlZmF1bHRGb3JtYXQuYWxpZ247XG4gICAgICAgIHJlc3VsdC52ZXJ0aWNhbEFsaWduID0gc291cmNlPy52ZXJ0aWNhbEFsaWduID8/IGRlZmF1bHRGb3JtYXQudmVydGljYWxBbGlnbjtcbiAgICB9XG4gICAgVGV4dEZvcm1hdC5jb21iaW5lID0gY29tYmluZTtcbiAgICBmdW5jdGlvbiBjb3B5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5mb250ID0gc291cmNlLmZvbnQ7XG4gICAgICAgIHRhcmdldC5zaXplID0gc291cmNlLnNpemU7XG4gICAgICAgIHRhcmdldC5jb2xvciA9IHNvdXJjZS5jb2xvcjtcbiAgICAgICAgdGFyZ2V0LmFscGhhID0gc291cmNlLmFscGhhO1xuICAgICAgICB0YXJnZXQuYm9sZCA9IHNvdXJjZS5ib2xkO1xuICAgICAgICB0YXJnZXQuaXRhbGljID0gc291cmNlLml0YWxpYztcbiAgICAgICAgdGFyZ2V0LnVuZGVybGluZSA9IHNvdXJjZS51bmRlcmxpbmU7XG4gICAgICAgIHRhcmdldC5sZXR0ZXJTcGFjaW5nID0gc291cmNlLmxldHRlclNwYWNpbmc7XG4gICAgICAgIHRhcmdldC5sZWFkaW5nID0gc291cmNlLmxlYWRpbmc7XG4gICAgICAgIHRhcmdldC5hbGlnbiA9IHNvdXJjZS5hbGlnbjtcbiAgICAgICAgdGFyZ2V0LnZlcnRpY2FsQWxpZ24gPSBzb3VyY2UudmVydGljYWxBbGlnbjtcbiAgICB9XG4gICAgVGV4dEZvcm1hdC5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBnZXRBbGlnblZhbHVlKGZvcm1hdCkge1xuICAgICAgICBzd2l0Y2ggKGZvcm1hdD8uYWxpZ24pIHtcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOiByZXR1cm4gMDtcbiAgICAgICAgICAgIGNhc2UgJ2NlbnRlcic6IHJldHVybiAwLjU7XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6IHJldHVybiAxO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dEZvcm1hdC5nZXRBbGlnblZhbHVlID0gZ2V0QWxpZ25WYWx1ZTtcbiAgICBmdW5jdGlvbiBnZXRWZXJ0aWNhbEFsaWduVmFsdWUoZm9ybWF0KSB7XG4gICAgICAgIHN3aXRjaCAoZm9ybWF0Py52ZXJ0aWNhbEFsaWduKSB7XG4gICAgICAgICAgICBjYXNlICd0b3AnOiByZXR1cm4gMDtcbiAgICAgICAgICAgIGNhc2UgJ21pZGRsZSc6IHJldHVybiAwLjU7XG4gICAgICAgICAgICBjYXNlICdib3R0b20nOiByZXR1cm4gMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRGb3JtYXQuZ2V0VmVydGljYWxBbGlnblZhbHVlID0gZ2V0VmVydGljYWxBbGlnblZhbHVlO1xufSkoVGV4dEZvcm1hdCB8fCAoVGV4dEZvcm1hdCA9IHt9KSk7XG4iLCJpbXBvcnQgeyBGb250IH0gZnJvbSAnLi9mb250JztcbmltcG9ydCB7IFRleHRGb3JtYXQgfSBmcm9tICcuL2Zvcm1hdCc7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vdGV4dCc7XG5jb25zdCBkZWZhdWx0VGV4dEZvcm1hdCA9IHt9O1xuZXhwb3J0IHZhciBUZXh0TGluZTtcbihmdW5jdGlvbiAoVGV4dExpbmUpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzeW1ib2xzOiBbXSxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBUZXh0TGluZS5jcmVhdGUgPSBjcmVhdGU7XG4gICAgZnVuY3Rpb24gZW1wdHkobGluZSkge1xuICAgICAgICBsaW5lLnN5bWJvbHMubGVuZ3RoID0gMDtcbiAgICAgICAgbGluZS53aWR0aCA9IDA7XG4gICAgICAgIGxpbmUuaGVpZ2h0ID0gMDtcbiAgICB9XG4gICAgVGV4dExpbmUuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBhZGQobGluZSwgc3ltYm9sKSB7XG4gICAgICAgIGxpbmUuc3ltYm9scy5wdXNoKHN5bWJvbCk7XG4gICAgICAgIGxpbmUud2lkdGggKz0gc3ltYm9sLmFkdmFuY2U7XG4gICAgICAgIGxpbmUuaGVpZ2h0ID0gTWF0aC5tYXgobGluZS5oZWlnaHQsIHN5bWJvbC5mb3JtYXQuc2l6ZSArIHN5bWJvbC5mb3JtYXQubGVhZGluZyk7XG4gICAgfVxuICAgIFRleHRMaW5lLmFkZCA9IGFkZDtcbiAgICBmdW5jdGlvbiBjb25jYXQodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5zeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGFyZ2V0LnN5bWJvbHMucHVzaCguLi5zb3VyY2Uuc3ltYm9scyk7XG4gICAgICAgICAgICB0YXJnZXQud2lkdGggKz0gc291cmNlLndpZHRoO1xuICAgICAgICAgICAgdGFyZ2V0LmhlaWdodCA9IE1hdGgubWF4KHRhcmdldC5oZWlnaHQsIHNvdXJjZS5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRMaW5lLmNvbmNhdCA9IGNvbmNhdDtcbiAgICBmdW5jdGlvbiBjb3JyZWN0V2lkdGgobGluZSkge1xuICAgICAgICBjb25zdCB7IHN5bWJvbHMgfSA9IGxpbmU7XG4gICAgICAgIGlmIChzeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgbGFzdCA9IHN5bWJvbHNbc3ltYm9scy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmICgvXFxzLy50ZXN0KGxhc3Quc3ltYm9sKSkge1xuICAgICAgICAgICAgICAgIHN5bWJvbHMucG9wKCk7XG4gICAgICAgICAgICAgICAgbGluZS53aWR0aCAtPSBsYXN0LmFkdmFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dExpbmUuY29ycmVjdFdpZHRoID0gY29ycmVjdFdpZHRoO1xuICAgIGZ1bmN0aW9uIGNvcnJlY3RIZWlnaHQobGluZSkge1xuICAgICAgICBjb25zdCB7IHN5bWJvbHMgfSA9IGxpbmU7XG4gICAgICAgIGlmIChzeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1swXTtcbiAgICAgICAgICAgIGxpbmUuaGVpZ2h0IC09IHN5bWJvbC5mb3JtYXQubGVhZGluZztcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0TGluZS5jb3JyZWN0SGVpZ2h0ID0gY29ycmVjdEhlaWdodDtcbn0pKFRleHRMaW5lIHx8IChUZXh0TGluZSA9IHt9KSk7XG5leHBvcnQgdmFyIFRleHRNZXRyaWNzO1xuKGZ1bmN0aW9uIChUZXh0TWV0cmljcykge1xuICAgIGZ1bmN0aW9uIGdldFN5bWJvbHMoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXRleHQgfHwgIXRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIFRleHRGb3JtYXQuY29tYmluZShjb21wb25lbnQuZm9ybWF0LCBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LCBkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGNvbnN0IHN5bWJvbHMgPSBbXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9ybWF0ID0ge307XG4gICAgICAgICAgICBUZXh0Rm9ybWF0LmNvcHkoZGVmYXVsdFRleHRGb3JtYXQsIHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2xGb250ID0gRm9udC5nZXRGb250KHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSB0ZXh0W2kgKyAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKHN5bWJvbEZvbnQsIHN5bWJvbEZvcm1hdC5zaXplLCBzeW1ib2wsIHN5bWJvbE5leHQpICsgc3ltYm9sRm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgc3ltYm9scy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICBhZHZhbmNlLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHN5bWJvbEZvcm1hdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRleHQpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IHRleHRbaV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBibG9jayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9ybWF0ID0ge307XG4gICAgICAgICAgICAgICAgICAgIFRleHRGb3JtYXQuY29weShkZWZhdWx0VGV4dEZvcm1hdCwgc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9udCA9IEZvbnQuZ2V0Rm9udChzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJsb2NrLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBibG9ja1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSBibG9ja1tqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKHN5bWJvbEZvbnQsIHN5bWJvbEZvcm1hdC5zaXplLCBzeW1ib2wsIHN5bWJvbE5leHQpICsgc3ltYm9sRm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZHZhbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogc3ltYm9sRm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvcm1hdCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBUZXh0Rm9ybWF0LmNvbWJpbmUoYmxvY2ssIGRlZmF1bHRUZXh0Rm9ybWF0LCBzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb250ID0gRm9udC5nZXRGb250KHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYmxvY2sudGV4dC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gYmxvY2sudGV4dFtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSBibG9jay50ZXh0W2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2Uoc3ltYm9sRm9udCwgc3ltYm9sRm9ybWF0LnNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBzeW1ib2xGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBzeW1ib2xGb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3ltYm9scztcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0U3ltYm9scyA9IGdldFN5bWJvbHM7XG4gICAgZnVuY3Rpb24gZ2V0TGluZXMoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHN5bWJvbHMgPSBnZXRTeW1ib2xzKGNvbXBvbmVudCk7XG4gICAgICAgIGlmICghc3ltYm9scyB8fCAhc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgd29yZFdyYXAgPSBmYWxzZSB9ID0gY29tcG9uZW50O1xuICAgICAgICBjb25zdCBtdWx0aWxpbmUgPSBUZXh0LmlzTXVsdGlsaW5lKGNvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gW107XG4gICAgICAgIGxldCBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgIGlmIChtdWx0aWxpbmUpIHtcbiAgICAgICAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICAgICAgICAgIGlmICh3b3JkV3JhcCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB3b3JkID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2wuc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmNvbmNhdChsaW5lLCB3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5lbXB0eSh3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZCh3b3JkLCBzeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5lLndpZHRoICsgd29yZC53aWR0aCA+IHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoL1xccy8udGVzdChzeW1ib2wuc3ltYm9sKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5jb25jYXQobGluZSwgd29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmVtcHR5KHdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5jb25jYXQobGluZSwgd29yZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sLnN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpbmUud2lkdGggKyBzeW1ib2wuYWR2YW5jZSA+IHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKGxpbmUsIHN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQobGluZSwgc3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sLnN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQobGluZSwgc3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbaV07XG4gICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKGxpbmUsIHN5bWJvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmUuc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgICAgICBUZXh0TGluZS5jb3JyZWN0V2lkdGgobGluZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFsaW5lLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBsaW5lLmhlaWdodCA9IGRlZmF1bHRUZXh0Rm9ybWF0LnNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGluZSA9IGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgVGV4dExpbmUuY29ycmVjdEhlaWdodChsaW5lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldExpbmVzID0gZ2V0TGluZXM7XG4gICAgZnVuY3Rpb24gZ2V0TWV0cmljcyhjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBnZXRMaW5lcyhjb21wb25lbnQpO1xuICAgICAgICBpZiAoIWxpbmVzIHx8ICFsaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWV0cmljcyA9IHtcbiAgICAgICAgICAgIGxpbmVzLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgIG1ldHJpY3Mud2lkdGggPSBNYXRoLm1heChtZXRyaWNzLndpZHRoLCBsaW5lLndpZHRoKTtcbiAgICAgICAgICAgIG1ldHJpY3MuaGVpZ2h0ICs9IGxpbmUuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXRyaWNzO1xuICAgIH1cbiAgICBUZXh0TWV0cmljcy5nZXRNZXRyaWNzID0gZ2V0TWV0cmljcztcbiAgICBmdW5jdGlvbiBnZXRTaW1wbGVNZXRyaWNzKGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCB7IHRleHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBUZXh0Rm9ybWF0LmNvbWJpbmUoY29tcG9uZW50LmZvcm1hdCwgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCwgZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBjb25zdCB7IHNpemUsIGxldHRlclNwYWNpbmcsIGxlYWRpbmcgfSA9IGRlZmF1bHRUZXh0Rm9ybWF0O1xuICAgICAgICBjb25zdCBmb250ID0gRm9udC5nZXRGb250KGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgbGV0IHdpZHRoID0gMDtcbiAgICAgICAgbGV0IGhlaWdodCA9IHNpemU7XG4gICAgICAgIGxldCBsaW5lV2lkdGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHRleHRbaV07XG4gICAgICAgICAgICBpZiAoc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgIGhlaWdodCArPSBzaXplICsgbGVhZGluZztcbiAgICAgICAgICAgICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBsaW5lV2lkdGgpO1xuICAgICAgICAgICAgICAgIGxpbmVXaWR0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gdGV4dFtpICsgMV07XG4gICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShmb250LCBzaXplLCBzeW1ib2wsIHN5bWJvbE5leHQpICsgbGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGggKz0gYWR2YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBsaW5lV2lkdGgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldFNpbXBsZU1ldHJpY3MgPSBnZXRTaW1wbGVNZXRyaWNzO1xuICAgIGZ1bmN0aW9uIGdldFNpbXBsZVdpZHRoKGZvcm1hdCwgdGV4dCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID49IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBUZXh0Rm9ybWF0LmNvbWJpbmUoZm9ybWF0LCBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LCBkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGNvbnN0IHsgc2l6ZSwgbGV0dGVyU3BhY2luZyB9ID0gZGVmYXVsdFRleHRGb3JtYXQ7XG4gICAgICAgIGNvbnN0IGZvbnQgPSBGb250LmdldEZvbnQoZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2wgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgaWYgKHN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gdGV4dFtpICsgMV07XG4gICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKGZvbnQsIHNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBsZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgd2lkdGggKz0gYWR2YW5jZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldFNpbXBsZVdpZHRoID0gZ2V0U2ltcGxlV2lkdGg7XG59KShUZXh0TWV0cmljcyB8fCAoVGV4dE1ldHJpY3MgPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi90ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9mb3JtYXQnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL2ZvbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL21ldHJpY3MnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMvdGV4dCc7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBUZXh0TWV0cmljcyB9IGZyb20gJy4vZGF0YS9tZXRyaWNzJztcbmV4cG9ydCBjb25zdCBURVhUID0gJ3RleHQnO1xuZXhwb3J0IHZhciBUZXh0O1xuKGZ1bmN0aW9uIChUZXh0KSB7XG4gICAgZnVuY3Rpb24gZ2V0VGV4dChjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghdGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRleHQpKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IHRleHRbaV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBibG9jayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGJsb2NrLnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIFRleHQuZ2V0VGV4dCA9IGdldFRleHQ7XG4gICAgZnVuY3Rpb24gaXNVcGRhdGVNZXRyaWNzKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LnVwZGF0ZU1ldHJpY3MgPz8gdHJ1ZTtcbiAgICB9XG4gICAgVGV4dC5pc1VwZGF0ZU1ldHJpY3MgPSBpc1VwZGF0ZU1ldHJpY3M7XG4gICAgZnVuY3Rpb24gaXNBdXRvU2l6ZShjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuICFjb21wb25lbnQud2lkdGggJiYgIWNvbXBvbmVudC5oZWlnaHQ7XG4gICAgfVxuICAgIFRleHQuaXNBdXRvU2l6ZSA9IGlzQXV0b1NpemU7XG4gICAgZnVuY3Rpb24gaXNTaW1wbGUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgY29tcG9uZW50LnRleHQgPT09ICdzdHJpbmcnICYmIGlzQXV0b1NpemUoY29tcG9uZW50KTtcbiAgICB9XG4gICAgVGV4dC5pc1NpbXBsZSA9IGlzU2ltcGxlO1xuICAgIGZ1bmN0aW9uIGlzTXVsdGlsaW5lKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50Lm11bHRpbGluZSA/PyB0cnVlO1xuICAgIH1cbiAgICBUZXh0LmlzTXVsdGlsaW5lID0gaXNNdWx0aWxpbmU7XG4gICAgZnVuY3Rpb24gdXBkYXRlTWV0cmljcyhjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKGlzU2ltcGxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5tZXRyaWNzID0gVGV4dE1ldHJpY3MuZ2V0U2ltcGxlTWV0cmljcyhjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29tcG9uZW50Lm1ldHJpY3MgPSBUZXh0TWV0cmljcy5nZXRNZXRyaWNzKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dC51cGRhdGVNZXRyaWNzID0gdXBkYXRlTWV0cmljcztcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoY29tcG9uZW50LCBib3VuZHMpIHtcbiAgICAgICAgaWYgKGlzVXBkYXRlTWV0cmljcyhjb21wb25lbnQpKSB7XG4gICAgICAgICAgICB1cGRhdGVNZXRyaWNzKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBtZXRyaWNzIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghbWV0cmljcykge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHsgd2lkdGgsIGhlaWdodCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXdpZHRoKSB7XG4gICAgICAgICAgICB3aWR0aCA9IG1ldHJpY3Mud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoZWlnaHQpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IG1ldHJpY3MuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGNvbXBvbmVudCwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShjb21wb25lbnQsIGhlaWdodCk7XG4gICAgICAgIGJvdW5kcy54ID0geDtcbiAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgYm91bmRzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgVGV4dC5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShUZXh0IHx8IChUZXh0ID0ge30pKTtcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBUZXh0RXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChUZXh0RXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdCh0ZXh0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBsb2NhbCB9ID0gZW5naW5lLnBvaW50ZXJzO1xuICAgICAgICBUZXh0LmNhbGN1bGF0ZUJvdW5kcyh0ZXh0LCBib3VuZHMpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKGJvdW5kcywgbG9jYWwpO1xuICAgIH1cbiAgICBUZXh0RXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KFRFWFQsIGhpdFRlc3QpO1xuICAgIH1cbiAgICBUZXh0RXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoVGV4dEV4dGVuc2lvbiB8fCAoVGV4dEV4dGVuc2lvbiA9IHt9KSk7XG4iLCJleHBvcnQgY29uc3QgTElORUFSID0gJ2xpbmVhcic7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDID0gJ3F1YWRyYXRpYyc7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDX0lOID0gJ3F1YWRyYXRpY2luJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUNfT1VUID0gJ3F1YWRyYXRpY291dCc7XG5leHBvcnQgY29uc3QgQ1VCSUMgPSAnY3ViaWMnO1xuZXhwb3J0IGNvbnN0IENVQklDX0lOID0gJ2N1YmljaW4nO1xuZXhwb3J0IGNvbnN0IENVQklDX09VVCA9ICdjdWJpY291dCc7XG5leHBvcnQgY29uc3QgUVVBUlRJQyA9ICdxdWFydGljJztcbmV4cG9ydCBjb25zdCBRVUFSVElDX0lOID0gJ3F1YXJ0aWNpbic7XG5leHBvcnQgY29uc3QgUVVBUlRJQ19PVVQgPSAncXVhcnRpY291dCc7XG5leHBvcnQgY29uc3QgUVVJTlRJQyA9ICdxdWludGljJztcbmV4cG9ydCBjb25zdCBRVUlOVElDX0lOID0gJ3F1aW50aWNpbic7XG5leHBvcnQgY29uc3QgUVVJTlRJQ19PVVQgPSAncXVpbnRpY291dCc7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTCA9ICdxdWludGljJztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMX0lOID0gJ3F1aW50aWNpbic7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTF9PVVQgPSAncXVpbnRpY291dCc7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUwgPSAnZXhwb25lbnRpYWwnO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMX0lOID0gJ2V4cG9uZW50aWFsaW4nO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMX09VVCA9ICdleHBvbmVudGlhbG91dCc7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVIgPSAnY2lyY3VsYXInO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSX0lOID0gJ2NpcmN1bGFyaW4nO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSX09VVCA9ICdjaXJjdWxhcm91dCc7XG5leHBvcnQgY29uc3QgRUxBU1RJQyA9ICdlbGFzdGljJztcbmV4cG9ydCBjb25zdCBFTEFTVElDX0lOID0gJ2VsYXN0aWNpbic7XG5leHBvcnQgY29uc3QgRUxBU1RJQ19PVVQgPSAnZWxhc3RpY291dCc7XG5leHBvcnQgY29uc3QgQkFDSyA9ICdiYWNrJztcbmV4cG9ydCBjb25zdCBCQUNLX0lOID0gJ2JhY2tpbic7XG5leHBvcnQgY29uc3QgQkFDS19PVVQgPSAnYmFja291dCc7XG5leHBvcnQgY29uc3QgQk9VTkNFID0gJ2JvdW5jZSc7XG5leHBvcnQgY29uc3QgQk9VTkNFX0lOID0gJ2JvdW5jZWluJztcbmV4cG9ydCBjb25zdCBCT1VOQ0VfT1VUID0gJ2JvdW5jZW91dCc7XG5leHBvcnQgY29uc3QgZWFzaW5nID0ge1xuICAgIFtMSU5FQVJdOiAodmFsdWUpID0+IHZhbHVlLFxuICAgIFtRVUFEUkFUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMC41ICogKC0tdmFsdWUgKiAodmFsdWUgLSAyKSAtIDEpO1xuICAgIH0sXG4gICAgW1FVQURSQVRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUFEUkFUSUNfT1VUXTogKHZhbHVlKSA9PiAodmFsdWUgKiAoMiAtIHZhbHVlKSksXG4gICAgW0NVQklDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSArIDIpO1xuICAgIH0sXG4gICAgW0NVQklDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbQ1VCSUNfT1VUXTogKHZhbHVlKSA9PiAoLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAxKSxcbiAgICBbUVVBUlRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAtIDIpO1xuICAgIH0sXG4gICAgW1FVQVJUSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVQVJUSUNfT1VUXTogKHZhbHVlKSA9PiAoMSAtIC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUlOVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMik7XG4gICAgfSxcbiAgICBbUVVJTlRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUlOVElDX09VVF06ICh2YWx1ZSkgPT4gKC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDEpLFxuICAgIFtTSU5VU09JREFMXTogKHZhbHVlKSA9PiAoMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogdmFsdWUpKSksXG4gICAgW1NJTlVTT0lEQUxfSU5dOiAodmFsdWUpID0+ICgxIC0gTWF0aC5jb3MoKHZhbHVlICogTWF0aC5QSSkgLyAyKSksXG4gICAgW1NJTlVTT0lEQUxfT1VUXTogKHZhbHVlKSA9PiAoTWF0aC5zaW4oKHZhbHVlICogTWF0aC5QSSkgLyAyKSksXG4gICAgW0VYUE9ORU5USUFMXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDEwMjQsIHZhbHVlIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogKHZhbHVlIC0gMSkpICsgMik7XG4gICAgfSxcbiAgICBbRVhQT05FTlRJQUxfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gMCA/IDAgOiBNYXRoLnBvdygxMDI0LCB2YWx1ZSAtIDEpKSxcbiAgICBbRVhQT05FTlRJQUxfT1VUXTogKHZhbHVlKSA9PiAodmFsdWUgPT09IDEgPyAxIDogMSAtIE1hdGgucG93KDIsIC0xMCAqIHZhbHVlKSksXG4gICAgW0NJUkNVTEFSXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHZhbHVlICogdmFsdWUpIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh2YWx1ZSAtPSAyKSAqIHZhbHVlKSArIDEpO1xuICAgIH0sXG4gICAgW0NJUkNVTEFSX0lOXTogKHZhbHVlKSA9PiAoMSAtIE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkpLFxuICAgIFtDSVJDVUxBUl9PVVRdOiAodmFsdWUpID0+IE1hdGguc3FydCgxIC0gLS12YWx1ZSAqIHZhbHVlKSxcbiAgICBbRUxBU1RJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgKj0gMjtcbiAgICAgICAgaWYgKHZhbHVlIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiBNYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDIsIC0xMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuICAgIH0sXG4gICAgW0VMQVNUSUNfSU5dOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuICAgIH0sXG4gICAgW0VMQVNUSUNfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5wb3coMiwgLTEwICogdmFsdWUpICogTWF0aC5zaW4oKHZhbHVlIC0gMC4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG4gICAgfSxcbiAgICBbQkFDS106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1OCAqIDEuNTI1O1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqICh2YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSAtIHMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSArIHMpICsgMik7XG4gICAgfSxcbiAgICBbQkFDS19JTl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICAgICAgcmV0dXJuIHZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlIC0gcyk7XG4gICAgfSxcbiAgICBbQkFDS19PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTg7XG4gICAgICAgIHJldHVybiAtLXZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlICsgcykgKyAxO1xuICAgIH0sXG4gICAgW0JPVU5DRV06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPCAwLjUpIHtcbiAgICAgICAgICAgIHJldHVybiBlYXNpbmdbQk9VTkNFX0lOXSh2YWx1ZSAqIDIpICogMC41O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlYXNpbmdbQk9VTkNFX09VVF0odmFsdWUgKiAyIC0gMSkgKiAwLjUgKyAwLjU7XG4gICAgfSxcbiAgICBbQk9VTkNFX0lOXTogKHZhbHVlKSA9PiAoMSAtIGVhc2luZ1tCT1VOQ0VfT1VUXSgxIC0gdmFsdWUpKSxcbiAgICBbQk9VTkNFX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPCAxIC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgMiAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMS41IC8gMi43NSkgKiB2YWx1ZSArIDAuNzU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgMi41IC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAyLjI1IC8gMi43NSkgKiB2YWx1ZSArIDAuOTM3NTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDIuNjI1IC8gMi43NSkgKiB2YWx1ZSArIDAuOTg0Mzc1O1xuICAgIH0sXG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi90d2Vlbic7XG5leHBvcnQgKiBmcm9tICcuL2Vhc2luZyc7XG4iLCJpbXBvcnQgeyBlYXNpbmcsIExJTkVBUiB9IGZyb20gJy4vZWFzaW5nJztcbmV4cG9ydCBjb25zdCBUV0VFTiA9ICd0d2Vlbic7XG5leHBvcnQgdmFyIFR3ZWVuRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChUd2VlbkV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHVwZGF0ZShjb21wb25lbnQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHR3ZWVuIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IHsgcGhhc2VzIH0gPSB0d2VlbjtcbiAgICAgICAgaWYgKCFwaGFzZXM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ0FuaW1hdGlvbiBwYXJ0cyBub3QgZm91bmQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHdlZW4udGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0d2Vlbi50aW1lICs9IGVuZ2luZS51cGRhdGVyLnRpbWU7XG4gICAgICAgIGNvbnN0IHsgdGltZSB9ID0gdHdlZW47XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBwaGFzZXMuZm9yRWFjaCgocGhhc2UpID0+IHtcbiAgICAgICAgICAgIGlmICghcGhhc2UudGltZSkge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdBbmltYXRpb24gdGltZSBub3Qgc2V0Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBoYXNlLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gcGhhc2Uub2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZWFzaW5nTmFtZSA9IHBoYXNlPy5lYXNpbmc/LnRvTG93ZXJDYXNlKCkgPz8gTElORUFSO1xuICAgICAgICAgICAgY29uc3QgZWFzaW5nTWV0aG9kID0gZWFzaW5nW2Vhc2luZ05hbWVdO1xuICAgICAgICAgICAgaWYgKCFlYXNpbmdNZXRob2QpIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZyhgVW5rbm93biBlYXNpbmcgdHlwZTogJHtlYXNpbmd9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAodGltZSAtIG9mZnNldCkgLyBwaGFzZS50aW1lO1xuICAgICAgICAgICAgb2Zmc2V0ICs9IHBoYXNlLnRpbWU7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCAwIHx8IHZhbHVlID4gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVhc2luZ1ZhbHVlID0gZWFzaW5nTWV0aG9kKHZhbHVlKTtcbiAgICAgICAgICAgIGlmICghcGhhc2UudG8pIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnQW5pbWF0aW9uIFwidG9cIiBzdGF0ZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBoYXNlLmZyb20pIHtcbiAgICAgICAgICAgICAgICBwaGFzZS5mcm9tID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHRvLCBmcm9tIH0gPSBwaGFzZTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gY29tcG9uZW50O1xuICAgICAgICAgICAgT2JqZWN0LmtleXModG8pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmcm9tW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tW2tleV0gPSBzdGF0ZVtrZXldID8/IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGZyb21WYWx1ZSA9IGZyb21ba2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b1ZhbHVlID0gdG9ba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZyb21WYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHRvVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlVmFsdWUgPSBmcm9tVmFsdWUgKyBlYXNpbmdWYWx1ZSAqICh0b1ZhbHVlIC0gZnJvbVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IHN0YXRlVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodHdlZW4ubG9vcCAmJiB0d2Vlbi50aW1lID4gb2Zmc2V0KSB7XG4gICAgICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUd2VlbkV4dGVuc2lvbi51cGRhdGUgPSB1cGRhdGU7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucHJvcGVydGllcy5zZXQoVFdFRU4sIHVwZGF0ZSk7XG4gICAgfVxuICAgIFR3ZWVuRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoVHdlZW5FeHRlbnNpb24gfHwgKFR3ZWVuRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IEFCSUxJVFlfV09MRiB9IGZyb20gJy4vYXNzZXRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjdXJzaXZlKCkge1xuXHRjb25zdCBjb250YWluZXIgPSB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0eDogMzAsXG5cdFx0XHR5OiAzMCxcblx0XHRcdHNjYWxlWDogMC45LFxuXHRcdFx0c2NhbGVZOiAwLjksXG5cdFx0XHRyb3RhdGlvbjogMC4yLFxuXHRcdFx0YWxwaGE6IDAuOSxcblx0XHRcdGNoaWxkcmVuOiBbe1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEFCSUxJVFlfV09MRixcblx0XHRcdFx0c2NhbGU6IDAuMyxcblx0XHRcdH1dLFxuXHRcdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHRcdHRoaXMucm90YXRpb24gKz0gdGltZSAqIDAuMDU7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cblx0Y29udGFpbmVyLmNoaWxkcmVuLmNoaWxkcmVuLnB1c2goY29udGFpbmVyIGFzIG5ldmVyKTtcblxuXHRyZXR1cm4gY29udGFpbmVyO1xufVxuIiwiY29uc3QgQVNTRVRTID0gJ2Fzc2V0cy8nO1xuXG5leHBvcnQgY29uc3QgQU5JTUFMSVNUID0gJ2lkOmFuaW1hbGlzdCc7XG5leHBvcnQgY29uc3QgQVJDSEVSID0gJ2lkOmFyY2hlcic7XG5cbmV4cG9ydCBjb25zdCBBTklNQUxJU1RfSU1BR0UgPSBgJHtBU1NFVFN9QW5pbWFsaXN0Rm94MV9pbWFnZS5wbmdgO1xuZXhwb3J0IGNvbnN0IEFSQ0hFUl9JTUFHRSA9IGAke0FTU0VUU31BcmNoZXIyX2h1bnRlcl9pbWFnZS5wbmdgO1xuXG5leHBvcnQgY29uc3QgQUJJTElUWV9GT1ggPSBgJHtBU1NFVFN9QW5pbWFsaXN0QWJpbGl0eV9Gb3gucG5nYDtcbmV4cG9ydCBjb25zdCBBQklMSVRZX1dPTEYgPSBgJHtBU1NFVFN9QW5pbWFsaXN0QWJpbGl0eV9Xb2xmLnBuZ2A7XG5cbmV4cG9ydCBjb25zdCBCQUNLR1JPVU5EID0gYCR7QVNTRVRTfWp1bmdsZV9iYWNrZ3JvdW5kLmpwZ2A7XG5cbmV4cG9ydCBjb25zdCBURVNUX0NBTlZBUyA9ICd0ZXN0LmNhbnZhcyc7XG5cbmV4cG9ydCBjb25zdCBTQ0VORSA9IGAke0FTU0VUU30vc2NlbmUuanNvbmA7XG4iLCJpbXBvcnQgeyBDYW52YXNFbmdpbmUgfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IEVuZ2luZU1vZHVsZSB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQ2FudmFzVGV4dEV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3RleHQnO1xuaW1wb3J0IHsgQ3VzdG9tSW1hZ2VFeHRlbnNpb24gfSBmcm9tICcuL2ltYWdlJztcbmltcG9ydCBDdXN0b21QbGF0Zm9ybSBmcm9tICcuL3BsYXRmb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tRW5naW5lIGV4dGVuZHMgQ2FudmFzRW5naW5lIHtcblx0Y29uc3RydWN0b3IobW9kdWxlOiBFbmdpbmVNb2R1bGUgPSB7fSkge1xuXHRcdG1vZHVsZS5QbGF0Zm9ybSA9IG1vZHVsZS5QbGF0Zm9ybSA/PyBDdXN0b21QbGF0Zm9ybTtcblxuXHRcdHN1cGVyKG1vZHVsZSk7XG5cblx0XHRDYW52YXNUZXh0RXh0ZW5zaW9uLmluaXQodGhpcyk7XG5cdFx0Q3VzdG9tSW1hZ2VFeHRlbnNpb24uaW5pdCh0aGlzKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzRW5naW5lLCBDYW52YXNQbGF0Zm9ybSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSwgSW1hZ2UgfSBmcm9tICdAamVuZy9pbWFnZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcblxuZXhwb3J0IG5hbWVzcGFjZSBDdXN0b21JbWFnZUV4dGVuc2lvbiB7XG5cdGV4cG9ydCBmdW5jdGlvbiByZW5kZXIoaW1hZ2U6IEltYWdlLCBlbmdpbmU6IENhbnZhc0VuZ2luZSk6IHZvaWQge1xuXHRcdGlmICghaW1hZ2Uuc3JjKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgeyBtYXRyaXgsIGNvbG9yVHJhbnNmb3JtIH0gPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuXG5cdFx0aWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChpbWFnZS5zcmMpIGFzIEltYWdlUmVzb3VyY2UgfCBudWxsO1xuXG5cdFx0aWYgKCFyZXNvdXJjZT8ubG9hZGVkIHx8ICFyZXNvdXJjZT8uaW1hZ2UpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBjb250ZXh0MmQgPSAoZW5naW5lLnBsYXRmb3JtIGFzIENhbnZhc1BsYXRmb3JtKS5nZXRDb250ZXh0KCk7XG5cblx0XHRjb250ZXh0MmQuc2V0VHJhbnNmb3JtKFxuXHRcdFx0bWF0cml4LmEsXG5cdFx0XHRtYXRyaXguYixcblx0XHRcdG1hdHJpeC5jLFxuXHRcdFx0bWF0cml4LmQsXG5cdFx0XHRtYXRyaXgudHgsXG5cdFx0XHRtYXRyaXgudHksXG5cdFx0KTtcblxuXHRcdGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG5cdFx0Y29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcblx0XHRjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcblxuXHRcdGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG5cdFx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuXHRcdGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICdsaWdodGdyYXknO1xuXHRcdGNvbnRleHQyZC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuXHR9XG5cblx0ZXhwb3J0IGZ1bmN0aW9uIGluaXQoZW5naW5lOiBDYW52YXNFbmdpbmUpIHtcblx0XHRJbWFnZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5cdFx0ZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChJTUFHRSwgcmVuZGVyKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzUGxhdGZvcm0gfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tUGxhdGZvcm0gZXh0ZW5kcyBDYW52YXNQbGF0Zm9ybSB7XG5cdGNsZWFyKCkge1xuXHRcdGNvbnN0IGNvbnRleHQyZCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnYmxhY2snO1xuXHRcdGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcblx0XHRjb250ZXh0MmQuZmlsbFJlY3QoMCwgMCwgY29udGV4dDJkLmNhbnZhcy53aWR0aCwgY29udGV4dDJkLmNhbnZhcy5oZWlnaHQpO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcblx0fVxufVxuIiwiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tUmVzb3VyY2VNYW5hZ2VyIHtcblx0cmVhZG9ubHkgYWxpYXNlcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cdHJlYWRvbmx5IHJlc291cmNlcyA9IG5ldyBNYXA8c3RyaW5nLCBJbWFnZVJlc291cmNlPigpO1xuXG5cdHJlc29sdmUgPSAoYXNzZXQ6IHN0cmluZywgZW5naW5lOiBFbmdpbmUpOiBJbWFnZVJlc291cmNlIHwgbnVsbCA9PiB7XG5cdFx0aWYgKGFzc2V0LmluZGV4T2YoJ2lkOicpID09PSAwKSB7XG5cdFx0XHRjb25zdCBpZCA9IGFzc2V0LnNsaWNlKDMpO1xuXHRcdFx0bGV0IHJlc291cmNlID0gdGhpcy5yZXNvdXJjZXMuZ2V0KGlkKSBhcyBJbWFnZVJlc291cmNlO1xuXHRcdFx0aWYgKCFyZXNvdXJjZSkge1xuXHRcdFx0XHRjb25zdCB1cmwgPSB0aGlzLmFsaWFzZXMuZ2V0KGlkKTtcblx0XHRcdFx0aWYgKHVybCkge1xuXHRcdFx0XHRcdHJlc291cmNlID0gSW1hZ2VSZXNvdXJjZS5yZXNvbHZlKHVybCwgZW5naW5lKSBhcyBJbWFnZVJlc291cmNlO1xuXHRcdFx0XHRcdHRoaXMucmVzb3VyY2VzLnNldChpZCwgcmVzb3VyY2UpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBSZXNvdXJjZSB3aXRoIGlkOiAke2Fzc2V0fSBub3QgZm91bmRgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc291cmNlO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGluaXQoZW5naW5lOiBFbmdpbmUpIHtcblx0XHRlbmdpbmUucmVzb3VyY2VzLnJlc29sdmVycy5hZGQodGhpcy5yZXNvbHZlKTtcblx0fVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBTdGF0aXN0aWNzIHtcblx0Z2V0UmVuZGVyVGltZSgpOiBudW1iZXI7XG5cdGdldFVwZGF0ZVRpbWUoKTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnBzKHN0YXRpc3RpY3M6IFN0YXRpc3RpY3MpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0dGV4dDogJ2ZwcycsXG5cdFx0ZnJhbWVzOiAwLFxuXHRcdGZyYW1lVGltZTogMCxcblx0XHR1cGRhdGVUaW1lOiAwLFxuXHRcdHJlbmRlclRpbWU6IDAsXG5cdFx0Zm9ybWF0OiB7XG5cdFx0XHRzaXplOiAyMCxcblx0XHRcdGNvbG9yOiAweGZmZmZmZixcblx0XHR9LFxuXHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0dGhpcy5mcmFtZVRpbWUgKz0gdGltZTtcblx0XHRcdHRoaXMudXBkYXRlVGltZSArPSBzdGF0aXN0aWNzLmdldFVwZGF0ZVRpbWUoKTtcblx0XHRcdHRoaXMucmVuZGVyVGltZSArPSBzdGF0aXN0aWNzLmdldFJlbmRlclRpbWUoKTtcblx0XHRcdHRoaXMuZnJhbWVzKys7XG5cdFx0XHRpZiAodGhpcy5mcmFtZVRpbWUgPj0gMSkge1xuXHRcdFx0XHRjb25zdCBmcmFtZVRpbWUgPSBNYXRoLmNlaWwoMTAwMCAqIHRoaXMuZnJhbWVUaW1lIC8gdGhpcy5mcmFtZXMpO1xuXHRcdFx0XHRjb25zdCB1cGRhdGVUaW1lID0gKHRoaXMudXBkYXRlVGltZSAvIHRoaXMuZnJhbWVzKS50b0ZpeGVkKDIpO1xuXHRcdFx0XHRjb25zdCByZW5kZXJUaW1lID0gKHRoaXMucmVuZGVyVGltZSAvIHRoaXMuZnJhbWVzKS50b0ZpeGVkKDIpO1xuXHRcdFx0XHR0aGlzLnRleHQgPSBgZnBzOiAke3RoaXMuZnJhbWVzfSwgJHtmcmFtZVRpbWV9IG1zXFxudXBkYXRlOiAke3VwZGF0ZVRpbWV9IG1zXFxucmVuZGVyOiAke3JlbmRlclRpbWV9IG1zYDtcblx0XHRcdFx0dGhpcy5mcmFtZVRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZVRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLnJlbmRlclRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLmZyYW1lcyA9IDA7XG5cdFx0XHR9XG5cdFx0fSxcblx0fTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCB7IExvYWRlciB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHtcblx0QUJJTElUWV9GT1gsIEFCSUxJVFlfV09MRiwgQU5JTUFMSVNULCBBUkNIRVIsIEJBQ0tHUk9VTkQsIFNDRU5FLFxufSBmcm9tICcuL2Fzc2V0cyc7XG5pbXBvcnQgYXJ0aWZhY3QgZnJvbSAnLi9hcnRpZmFjdCc7XG5pbXBvcnQgeyBmcHMsIFN0YXRpc3RpY3MgfSBmcm9tICcuL2Zwcyc7XG5pbXBvcnQgeyB1bml0LCBVbml0UHJvcGVydGllcyB9IGZyb20gJy4vdW5pdCc7XG5pbXBvcnQgeyBwcmVsb2FkZXIsIFByZWxvYWRlckluZm8gfSBmcm9tICcuL3ByZWxvYWRlcic7XG5cbmludGVyZmFjZSBNYWluIHtcblx0c3RhcnQoKTogdm9pZDtcblx0W2tleTogc3RyaW5nXTogYW55O1xufVxuXG5pbnRlcmZhY2UgTWFpblByb3BlcnRpZXMgZXh0ZW5kcyBTdGF0aXN0aWNzIHtcblx0Z2V0Q2FudmFzV2lkdGgoKTogbnVtYmVyO1xuXHRnZXRDYW52YXNIZWlnaHQoKTogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKHBhcmFtZXRlcnM6IE1haW5Qcm9wZXJ0aWVzKTogTWFpbiB7XG5cdGZ1bmN0aW9uIG9uVW5pdENsaWNrKGRhdGE6IFVuaXRQcm9wZXJ0aWVzKSB7XG5cdFx0ZGF0YS5oZWFsdGggPSBNYXRoLnJhbmRvbSgpO1xuXHRcdGNvbnNvbGUubG9nKCdvblVuaXRDbGljaycsIGRhdGEubmFtZSk7XG5cdH1cblxuXHRjb25zdCBjb250ZW50ID0ge1xuXHRcdHR5cGU6ICdsb2FkZXInLFxuXHRcdHZpc2libGU6IGZhbHNlLFxuXHRcdGVuYWJsZWQ6IGZhbHNlLFxuXHRcdG9uTG9hZGVkKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2JhY2tncm91bmQgbG9hZGVkJyk7XG5cdFx0XHR0aGlzLnZpc2libGUgPSB0cnVlO1xuXHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQkFDS0dST1VORCxcblx0XHRcdFx0c2NhbGVYOiAxLFxuXHRcdFx0XHRzY2FsZVk6IDEsXG5cdFx0XHR9LFxuXHRcdFx0ZmlndXJlOiB7XG5cdFx0XHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHR0eXBlOiAncmVjdGFuZ2xlJyxcblx0XHRcdFx0XHR4OiAyMCxcblx0XHRcdFx0XHR5OiAyMCxcblx0XHRcdFx0XHR3aWR0aDogMTAwLFxuXHRcdFx0XHRcdGhlaWdodDogNTAsXG5cdFx0XHRcdFx0ZmlsbDogMHhmZjAwZmYsXG5cdFx0XHRcdFx0c3Ryb2tlOiAweDAwMDBmZixcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRzaGFwZXM6IHtcblx0XHRcdFx0dHlwZTogJ3NoYXBlJyxcblx0XHRcdFx0ZGF0YTogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdlbGxpcHNlJyxcblx0XHRcdFx0XHRcdHg6IDEwMCxcblx0XHRcdFx0XHRcdHk6IDEwMCxcblx0XHRcdFx0XHRcdHJhZGl1czogNTAsXG5cdFx0XHRcdFx0XHRmaWxsOiB7IHR5cGU6ICdzb2xpZCcsIGNvbG9yOiAweGZmZmYwMCwgYWxwaGE6IDEgfSxcblx0XHRcdFx0XHRcdHN0cm9rZTogeyBmaWxsOiAweDAwMDBmZiwgdGhpY2tuZXNzOiAxMCB9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ3BhdGgnLFxuXHRcdFx0XHRcdFx0ZGF0YTogJ00gMTEwLCAxMTAgSCAxOTAgViAxOTAgSCAxMTAgWicsXG5cdFx0XHRcdFx0XHRmaWxsOiAweDk5MDAwMCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdwYXRoJyxcblx0XHRcdFx0XHRcdGRhdGE6IFtcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbW92ZVRvJywgeDogMCwgeTogMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAxMDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMTAwLCB5OiAxMDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMCwgeTogMTAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRmaWxsOiB7IHR5cGU6ICdzb2xpZCcsIGNvbG9yOiAweDk5OTk5OSwgYWxwaGE6IDAuNiB9LFxuXHRcdFx0XHRcdFx0c3Ryb2tlOiAweDAwMDAwMCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHVuaXRzOiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdHVuaXQoe1xuXHRcdFx0XHRcdFx0bmFtZTogJ0FyY2hlcicsIGhlYWx0aDogMSwgaW1hZ2U6IEFSQ0hFUiwgb25DbGljazogb25Vbml0Q2xpY2ssXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0dW5pdCh7XG5cdFx0XHRcdFx0XHRuYW1lOiAnQW5pbWFsaXN0JywgaGVhbHRoOiAxLCBpbWFnZTogQU5JTUFMSVNULCBvbkNsaWNrOiBvblVuaXRDbGljayxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHRhcnRpZmFjdDoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0eDogMzAwLFxuXHRcdFx0XHR5OiAzNTAsXG5cdFx0XHRcdGNoaWxkcmVuOiBhcnRpZmFjdCgpLFxuXHRcdFx0fSxcblx0XHRcdG1hcDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHR5OiA0NTAsXG5cdFx0XHRcdHNjYWxlWDogMC4yLFxuXHRcdFx0XHRzY2FsZVk6IDAuMixcblx0XHRcdFx0YWxwaGE6IDAuNSxcblx0XHRcdFx0c3JjOiAndGVzdC5jYW52YXMnLFxuXHRcdFx0XHRvblBvaW50ZXJPdmVyKCkge1xuXHRcdFx0XHRcdHRoaXMuYWxwaGEgPSAxO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblBvaW50ZXJPdXQoKSB7XG5cdFx0XHRcdFx0dGhpcy5hbHBoYSA9IDAuNTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRhYmlsaXR5Rm94OiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQUJJTElUWV9GT1gsXG5cdFx0XHRcdHg6IDQ1MCxcblx0XHRcdFx0eTogNTAwLFxuXHRcdFx0XHRzY2FsZTogMC41LFxuXHRcdFx0XHR0aW50OiB7XG5cdFx0XHRcdFx0Y29sb3I6IDB4MDBmZjAwLFxuXHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHR9IGFzIGFueSxcblx0XHRcdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMudGludCkge1xuXHRcdFx0XHRcdFx0dGhpcy50aW50LnZhbHVlICs9IHRpbWU7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy50aW50LnZhbHVlID49IDEpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy50aW50LnZhbHVlID0gMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uUG9pbnRlckRvd24oZTogYW55KSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMudGludCkge1xuXHRcdFx0XHRcdFx0dGhpcy50aW50ID0gbnVsbDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy50aW50ID0ge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogMHgwMGZmMDAsXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2ZveCcsIGUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGFiaWxpdHlXb2xmOiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHR4OiAzNTAsXG5cdFx0XHRcdHk6IDQwMCxcblx0XHRcdFx0Y2hpbGRyZW46IHtcblx0XHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRcdHNyYzogQUJJTElUWV9XT0xGLFxuXHRcdFx0XHRcdHNjYWxlOiAwLjUsXG5cdFx0XHRcdFx0YWxwaGE6IDEsXG5cdFx0XHRcdFx0dHdlZW46IHtcblx0XHRcdFx0XHRcdGxvb3A6IHRydWUsXG5cdFx0XHRcdFx0XHRwaGFzZXM6IFtcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeDogMjAwIH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6ICdjdWJpY291dCcsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB5OiAyMDAsIGFscGhhOiAwLjUgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ3F1YWRyYXRpY0luJyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHg6IDAsIGFscGhhOiAxIH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6ICdxdWFkcmF0aWNPdXQnLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeTogMCB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGZwczogZnBzKHBhcmFtZXRlcnMpLFxuXHRcdH0sXG5cdH07XG5cblx0Y29uc3QgcHJlbG9hZGVySW5mbzogUHJlbG9hZGVySW5mbyA9IHtcblx0XHRnZXRXaWR0aDogcGFyYW1ldGVycy5nZXRDYW52YXNXaWR0aCxcblx0XHRnZXRIZWlnaHQ6IHBhcmFtZXRlcnMuZ2V0Q2FudmFzSGVpZ2h0LFxuXHRcdGdldFByb2dyZXNzKCkge1xuXHRcdFx0cmV0dXJuIExvYWRlci5nZXRMb2FkaW5nUHJvZ3Jlc3MoY29udGVudCk7XG5cdFx0fSxcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRjb250ZW50LFxuXHRcdFx0cHJlbG9hZGVyOiBwcmVsb2FkZXIocHJlbG9hZGVySW5mbyksXG5cdFx0XHRzY2VuZToge1xuXHRcdFx0XHR0eXBlOiAnc2NlbmUnLCB4OiAzMDAsIHNyYzogU0NFTkUsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0b25VcGRhdGUoKSB7XG5cdFx0XHRjb25zdCBpc0xvYWRlZCA9ICF0aGlzLmNoaWxkcmVuLmNvbnRlbnQudmlzaWJsZTtcblx0XHRcdHRoaXMuY2hpbGRyZW4ucHJlbG9hZGVyLnZpc2libGUgPSBpc0xvYWRlZDtcblx0XHRcdHRoaXMuY2hpbGRyZW4ucHJlbG9hZGVyLmVuYWJsZWQgPSBpc0xvYWRlZDtcblx0XHR9LFxuXHRcdHN0YXJ0KCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ3N0YXJ0Jyk7XG5cdFx0fSxcblx0fTtcbn1cbiIsImltcG9ydCB7IFNoYXBlIH0gZnJvbSAnQGplbmcvc2hhcGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByZWxvYWRlckluZm8ge1xuXHRnZXRQcm9ncmVzcygpOiBudW1iZXI7XG5cdGdldFdpZHRoKCk6IG51bWJlcjtcblx0Z2V0SGVpZ2h0KCk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWRlcihpbmZvOiBQcmVsb2FkZXJJbmZvKSB7XG5cdGNvbnN0IGhlaWdodCA9IDIwO1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0c2NhbGVYOiAxLFxuXHRcdHk6IGluZm8uZ2V0SGVpZ2h0KCkgLSBoZWlnaHQsXG5cdFx0ZGF0YToge1xuXHRcdFx0dHlwZTogJ3JlY3RhbmdsZScsXG5cdFx0XHR3aWR0aDogMSxcblx0XHRcdGhlaWdodCxcblx0XHRcdGZpbGw6IDB4ZmYwMDAwLFxuXHRcdH0sXG5cdFx0b25VcGRhdGUoKSB7XG5cdFx0XHR0aGlzLnNjYWxlWCEgKz0gKGluZm8uZ2V0V2lkdGgoKSAqIGluZm8uZ2V0UHJvZ3Jlc3MoKSAtIHRoaXMuc2NhbGVYISkgLyAyO1xuXHRcdH0sXG5cdH0gYXMgU2hhcGU7XG59XG4iLCJjb25zdCBTUEVFRCA9IDEwMDtcblxuaW50ZXJmYWNlIFVuaXQge1xuXHRba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdFByb3BlcnRpZXMge1xuXHRuYW1lOiBzdHJpbmcsXG5cdGhlYWx0aDogbnVtYmVyLFxuXHRpbWFnZTogc3RyaW5nLFxuXHRvbkNsaWNrOiAoZGF0YTogVW5pdFByb3BlcnRpZXMpID0+IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIG9uUHJvcHNVcGRhdGUocHJvcHM6IGFueSwgY2FsbGJhY2s6ICh0aW1lOiBudW1iZXIpID0+IHZvaWQpIHtcblx0Y29uc3QgY29weSA9IHsgLi4ucHJvcHMgfTtcblx0cmV0dXJuICh0aW1lOiBudW1iZXIpID0+IHtcblx0XHQvLyBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpO1xuXHRcdGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gcHJvcHMpIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcblx0XHRcdGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdGlmIChjb3B5W2tleV0gIT09IHByb3BzW2tleV0pIHtcblx0XHRcdFx0XHRjb3B5W2tleV0gPSBwcm9wc1trZXldO1xuXHRcdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZWQpIHtcblx0XHRcdGNhbGxiYWNrKHRpbWUpO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gcnVuT25Qcm9wc1VwZGF0ZShwcm9wczogYW55LCBjb21wb25lbnQ6IGFueSkge1xuXHRjb21wb25lbnQub25VcGRhdGUgPSBvblByb3BzVXBkYXRlKHByb3BzLCBjb21wb25lbnQub25VcGRhdGUuYmluZChjb21wb25lbnQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXQocHJvcHM6IFVuaXRQcm9wZXJ0aWVzKTogVW5pdCB7XG5cdGZ1bmN0aW9uIGdldFRpdGxlKCkge1xuXHRcdHJldHVybiBgJHtwcm9wcy5uYW1lfVxcbiR7TWF0aC5yb3VuZChwcm9wcy5oZWFsdGggKiAxMDApfSVgO1xuXHR9XG5cblx0Y29uc3QgdW5pdFZpZXcgPSB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0eDogNTAgKyBNYXRoLnJhbmRvbSgpICogNDAwLFxuXHRcdHk6IDIwMCxcblx0XHRyb3RhdGlvbjogMCxcblx0XHR1cGRhdGVNb3ZlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0dGhpcy54ICs9IHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYICogdGltZSAqIFNQRUVEO1xuXHRcdFx0aWYgKHRoaXMueCA8IDUwKSB7XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYID0gMTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy54ID4gNDAwKSB7XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW4uaW1hZ2Uuc2NhbGVYID0gLTE7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMudXBkYXRlTW92ZSh0aW1lKTtcblx0XHR9LFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHR0ZXh0OiB7XG5cdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0dGV4dDogZ2V0VGl0bGUoKSxcblx0XHRcdFx0Zm9ybWF0OiB7XG5cdFx0XHRcdFx0c2l6ZTogMTUsXG5cdFx0XHRcdFx0Y29sb3I6IDB4ZmZkZGRkLFxuXHRcdFx0XHRcdGFsaWduOiAnY2VudGVyJyxcblx0XHRcdFx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0Ym9yZGVyOiAweDAwZmYwMCxcblx0XHRcdFx0eTogLTMwLFxuXHRcdFx0XHRoZWlnaHQ6IDM1LFxuXHRcdFx0XHRwaXZvdFg6IDAuNSxcblx0XHRcdFx0b25Qb2ludGVyRG93bjogKCkgPT4ge1xuXHRcdFx0XHRcdHByb3BzLm9uQ2xpY2socHJvcHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblVwZGF0ZSgpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQgPSBnZXRUaXRsZSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogcHJvcHMuaW1hZ2UsXG5cdFx0XHRcdHNjYWxlWDogTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSxcblx0XHRcdFx0cGl2b3RYOiAwLjUsXG5cdFx0XHRcdG9uUG9pbnRlckRvd246ICgpID0+IHtcblx0XHRcdFx0XHRwcm9wcy5vbkNsaWNrKHByb3BzKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblxuXHRydW5PblByb3BzVXBkYXRlKHByb3BzLCB1bml0Vmlldy5jaGlsZHJlbi50ZXh0KTtcblxuXHRyZXR1cm4gdW5pdFZpZXc7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgeyBDb21wb25lbnQsIE1vdXNlRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBUd2VlbkV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3R3ZWVuJztcbmltcG9ydCB7IENhbnZhc1RleHRFeHRlbnNpb24gfSBmcm9tICdAamVuZy90ZXh0JztcbmltcG9ydCB7IENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gfSBmcm9tICdAamVuZy9pbWFnZSc7XG5pbXBvcnQgeyBDYW52YXNTaGFwZUV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3NoYXBlJztcbmltcG9ydCB7IENhbnZhc0VuZ2luZSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBTY2VuZUV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3NjZW5lJztcbmltcG9ydCBDdXN0b21SZXNvdXJjZU1hbmFnZXIgZnJvbSAnLi9lbmdpbmUvcmVzb3VyY2VzJztcbmltcG9ydCBDdXN0b21FbmdpbmUgZnJvbSAnLi9lbmdpbmUvZW5naW5lJztcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbic7XG5pbXBvcnQge1xuXHRBTklNQUxJU1QsIEFOSU1BTElTVF9JTUFHRSwgQVJDSEVSLCBBUkNIRVJfSU1BR0UsIFRFU1RfQ0FOVkFTLFxufSBmcm9tICcuL2Fzc2V0cyc7XG5cbi8vIHBhZ2VcbmRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gJzAnO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nID0gJzAnO1xuXG4vLyBiYXNpYyBlbmdpbmVcbmNvbnN0IGVuZ2luZSA9IG5ldyBDYW52YXNFbmdpbmUoKTtcbkNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuQ2FudmFzVGV4dEV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5DYW52YXNTaGFwZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5Ud2VlbkV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5TY2VuZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5Nb3VzZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5lbmdpbmUuc2NyZWVuLmZ1bGxzY3JlZW4gPSB0cnVlO1xuZW5naW5lLnRpY2tlci5wbGF5KCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVuZ2luZS5wbGF0Zm9ybS52aWV3KTtcblxuY29uc3QgcGFyYW1ldGVycyA9IHtcblx0Z2V0VXBkYXRlVGltZSgpIHtcblx0XHRyZXR1cm4gZW5naW5lLnVwZGF0ZXIuZWxhcHNlZFRpbWU7XG5cdH0sXG5cdGdldFJlbmRlclRpbWUoKSB7XG5cdFx0cmV0dXJuIGVuZ2luZS5yZW5kZXJlci5lbGFwc2VkVGltZTtcblx0fSxcblx0Z2V0Q2FudmFzV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZW5naW5lLnNjcmVlbi5nZXRXaWR0aCgpO1xuXHR9LFxuXHRnZXRDYW52YXNIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZW5naW5lLnNjcmVlbi5nZXRIZWlnaHQoKTtcblx0fSxcbn07XG5cbi8vIGFwcGxpY2F0aW9uXG5jb25zdCBhcHAgPSBtYWluKHBhcmFtZXRlcnMpO1xuYXBwLnN0YXJ0KCk7XG5lbmdpbmUucm9vdCA9IGFwcCBhcyBhbnkgYXMgQ29tcG9uZW50O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbmNvbnNvbGUubG9nKGFwcCk7XG5cbi8vIHRlc3QgcGF1c2VcbnNldFRpbWVvdXQoKCkgPT4gZW5naW5lLnRpY2tlci5wYXVzZSgpLCA1MDAwKTtcbnNldFRpbWVvdXQoKCkgPT4gZW5naW5lLnRpY2tlci5wbGF5KCksIDEwMDAwKTtcblxuLy8gY3VzdG9tIGVuZ2luZVxuY29uc3QgY3VzdG9tRW5naW5lID0gbmV3IEN1c3RvbUVuZ2luZSgpO1xuY3VzdG9tRW5naW5lLnNjcmVlbi5mdWxsc2NyZWVuID0gZmFsc2U7XG5jdXN0b21FbmdpbmUuc2NyZWVuLmhlaWdodCA9IDYwMDtcbmN1c3RvbUVuZ2luZS51cGRhdGVyLmVuYWJsZWQgPSBmYWxzZTtcbmN1c3RvbUVuZ2luZS5yb290ID0gZW5naW5lLnJvb3Q7XG5jdXN0b21FbmdpbmUudGlja2VyLnBsYXkoKTtcbmN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbmN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3LnN0eWxlLnRvcCA9ICcwcHgnO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUubGVmdCA9ICc2MDBweCc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3KTtcblxuLy8gLy8gc2V0IGN1c3RvbSByZXNvdXJjZVxuZW5naW5lLnJlc291cmNlcy5yZXNvdXJjZXMuc2V0KFxuXHRURVNUX0NBTlZBUyxcblx0e1xuXHRcdGFzc2V0OiBURVNUX0NBTlZBUyxcblx0XHRpbWFnZTogY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcsXG5cdFx0bG9hZGVkOiB0cnVlLFxuXHR9IGFzIEltYWdlUmVzb3VyY2UsXG4pO1xuY3VzdG9tRW5naW5lLnJlc291cmNlcy5yZXNvdXJjZXMuc2V0KFxuXHRURVNUX0NBTlZBUyxcblx0e1xuXHRcdGFzc2V0OiBURVNUX0NBTlZBUyxcblx0XHRpbWFnZTogZW5naW5lLnBsYXRmb3JtLnZpZXcsXG5cdFx0bG9hZGVkOiB0cnVlLFxuXHR9IGFzIEltYWdlUmVzb3VyY2UsXG4pO1xuXG4vLyBjdXN0b20gcmVzb3VyY2UgcmVzb2x2ZXJcbmNvbnN0IHJlc291cmNlTWFuYWdlciA9IG5ldyBDdXN0b21SZXNvdXJjZU1hbmFnZXIoKTtcbnJlc291cmNlTWFuYWdlci5hbGlhc2VzLnNldChBUkNIRVIucmVwbGFjZSgnaWQ6JywgJycpLCBBUkNIRVJfSU1BR0UpO1xucmVzb3VyY2VNYW5hZ2VyLmFsaWFzZXMuc2V0KEFOSU1BTElTVC5yZXBsYWNlKCdpZDonLCAnJyksIEFOSU1BTElTVF9JTUFHRSk7XG5yZXNvdXJjZU1hbmFnZXIuaW5pdChlbmdpbmUpO1xucmVzb3VyY2VNYW5hZ2VyLmluaXQoY3VzdG9tRW5naW5lKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=