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
/* harmony import */ var _jeng_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jeng/web */ "../../packages/web/dist/index.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform */ "../../packages/canvas-engine/dist/platform.js");
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
    var _this;

    _classCallCheck(this, CanvasEngine);

    _this = _super.call(this);
    _this.platform = new _platform__WEBPACK_IMPORTED_MODULE_2__.CanvasPlatform(_assertThisInitialized(_this));
    _this.screen = new _jeng_web__WEBPACK_IMPORTED_MODULE_1__.WebScreen(_assertThisInitialized(_this));
    return _this;
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
/* harmony import */ var _jeng_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/web */ "../../packages/web/dist/index.js");
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


var CanvasPlatform = /*#__PURE__*/function (_WebPlatform) {
  _inherits(CanvasPlatform, _WebPlatform);

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
    key: "end",
    value: function end() {}
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
}(_jeng_web__WEBPACK_IMPORTED_MODULE_0__.WebPlatform);

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
/* harmony import */ var _features_pointers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/pointers */ "../../packages/core/dist/features/pointers.js");
/* harmony import */ var _features_ticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/ticker */ "../../packages/core/dist/features/ticker.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/container */ "../../packages/core/dist/components/container.js");
/* harmony import */ var _features_debug__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../features/debug */ "../../packages/core/dist/features/debug.js");
/* harmony import */ var _features_resources__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../features/resources */ "../../packages/core/dist/features/resources.js");
/* harmony import */ var _features_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../features/components */ "../../packages/core/dist/features/components.js");
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/loader */ "../../packages/core/dist/components/loader.js");
/* harmony import */ var _features_keyboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../features/keyboard */ "../../packages/core/dist/features/keyboard.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }












var Engine = function Engine() {
  _classCallCheck(this, Engine);

  this.depth = 32;
  this.components = new _features_components__WEBPACK_IMPORTED_MODULE_8__.Components(this);
  this.updater = new _features_updater__WEBPACK_IMPORTED_MODULE_1__.Updater(this);
  this.loading = new _features_loading__WEBPACK_IMPORTED_MODULE_2__.Loading(this);
  this.renderer = new _features_renderer__WEBPACK_IMPORTED_MODULE_0__.Renderer(this);
  this.pointers = new _features_pointers__WEBPACK_IMPORTED_MODULE_3__.Pointers(this);
  this.keyboard = new _features_keyboard__WEBPACK_IMPORTED_MODULE_10__.Keyboard(this);
  this.ticker = new _features_ticker__WEBPACK_IMPORTED_MODULE_4__.Ticker(this);
  this.debug = new _features_debug__WEBPACK_IMPORTED_MODULE_6__.Debug(this);
  this.resources = new _features_resources__WEBPACK_IMPORTED_MODULE_7__.Resources(this);
  _components_container__WEBPACK_IMPORTED_MODULE_5__.ContainerExtension.init(this);
  _components_loader__WEBPACK_IMPORTED_MODULE_9__.LoaderExtension.init(this);
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
/* harmony import */ var _core_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/feature */ "../../packages/core/dist/core/feature.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Components = /*#__PURE__*/function (_EngineFeature) {
  _inherits(Components, _EngineFeature);

  var _super = _createSuper(Components);

  function Components() {
    var _this;

    _classCallCheck(this, Components);

    _this = _super.apply(this, arguments);
    _this.properties = new Map();
    _this.render = new Map();
    _this.update = new Map();
    _this.hitTest = new Map();
    _this.keyTest = new Map();
    _this.loaded = new Map();
    return _this;
  }

  return Components;
}(_core_feature__WEBPACK_IMPORTED_MODULE_0__.EngineFeature);

/***/ }),

/***/ "../../packages/core/dist/features/debug.js":
/*!**************************************************!*\
  !*** ../../packages/core/dist/features/debug.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Debug": () => (/* binding */ Debug)
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


var Debug = /*#__PURE__*/function (_EngineFeature) {
  _inherits(Debug, _EngineFeature);

  var _super = _createSuper(Debug);

  function Debug() {
    var _this;

    _classCallCheck(this, Debug);

    _this = _super.apply(this, arguments);
    _this.infos = new Map();
    _this.errors = new Map();
    _this.warnings = new Map();
    _this.enabled = true;
    return _this;
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
}(_core_feature__WEBPACK_IMPORTED_MODULE_0__.EngineFeature);

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
    _classCallCheck(this, Platform);

    return _super.apply(this, arguments);
  }

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



var Screen = /*#__PURE__*/function (_EngineFeature) {
  _inherits(Screen, _EngineFeature);

  var _super = _createSuper(Screen);

  function Screen() {
    var _this;

    _classCallCheck(this, Screen);

    _this = _super.apply(this, arguments);
    _this.width = 400;
    _this.height = 400;
    _this.pixelRatio = 0;
    _this.fullscreen = false;
    _this.matrix = _jeng_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.empty();
    return _this;
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
      return this.fullscreen ? this.getWindowWidth() : this.width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.fullscreen ? this.getWindowHeight() : this.height;
    }
  }, {
    key: "getPixelRatio",
    value: function getPixelRatio() {
      return this.pixelRatio > 0 ? this.pixelRatio : this.getWindowPixelRatio();
    }
  }]);

  return Screen;
}(_core_feature__WEBPACK_IMPORTED_MODULE_1__.EngineFeature);

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
/* harmony export */   "Screen": () => (/* reexport safe */ _features_screen__WEBPACK_IMPORTED_MODULE_11__.Screen),
/* harmony export */   "Pivot": () => (/* reexport safe */ _extensions_pivot__WEBPACK_IMPORTED_MODULE_15__.Pivot)
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
/* harmony import */ var _extensions_display__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./extensions/display */ "../../packages/core/dist/extensions/display.js");
/* harmony import */ var _extensions_pivot__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./extensions/pivot */ "../../packages/core/dist/extensions/pivot.js");
/* harmony import */ var _extensions_pointer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./extensions/pointer */ "../../packages/core/dist/extensions/pointer.js");
/* harmony import */ var _extensions_source__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./extensions/source */ "../../packages/core/dist/extensions/source.js");
/* harmony import */ var _extensions_transform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./extensions/transform */ "../../packages/core/dist/extensions/transform.js");
/* harmony import */ var _extensions_update__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./extensions/update */ "../../packages/core/dist/extensions/update.js");
/* harmony import */ var _extensions_key__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./extensions/key */ "../../packages/core/dist/extensions/key.js");






















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

/***/ "../../packages/web/dist/features/platform.js":
/*!****************************************************!*\
  !*** ../../packages/web/dist/features/platform.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebPlatform": () => (/* binding */ WebPlatform)
/* harmony export */ });
/* harmony import */ var _jeng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/core */ "../../packages/core/dist/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var WebPlatform = /*#__PURE__*/function (_Platform) {
  _inherits(WebPlatform, _Platform);

  var _super = _createSuper(WebPlatform);

  function WebPlatform() {
    _classCallCheck(this, WebPlatform);

    return _super.apply(this, arguments);
  }

  return WebPlatform;
}(_jeng_core__WEBPACK_IMPORTED_MODULE_0__.Platform);

/***/ }),

/***/ "../../packages/web/dist/features/screen.js":
/*!**************************************************!*\
  !*** ../../packages/web/dist/features/screen.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebScreen": () => (/* binding */ WebScreen)
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


var WebScreen = /*#__PURE__*/function (_Screen) {
  _inherits(WebScreen, _Screen);

  var _super = _createSuper(WebScreen);

  function WebScreen() {
    _classCallCheck(this, WebScreen);

    return _super.apply(this, arguments);
  }

  _createClass(WebScreen, [{
    key: "getWindowWidth",
    value: function getWindowWidth() {
      return window.innerWidth;
    }
  }, {
    key: "getWindowHeight",
    value: function getWindowHeight() {
      return window.innerHeight;
    }
  }, {
    key: "getWindowPixelRatio",
    value: function getWindowPixelRatio() {
      var _window$devicePixelRa;

      return (_window$devicePixelRa = window.devicePixelRatio) !== null && _window$devicePixelRa !== void 0 ? _window$devicePixelRa : 1;
    }
  }]);

  return WebScreen;
}(_jeng_core__WEBPACK_IMPORTED_MODULE_0__.Screen);

/***/ }),

/***/ "../../packages/web/dist/index.js":
/*!****************************************!*\
  !*** ../../packages/web/dist/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebScreen": () => (/* reexport safe */ _features_screen__WEBPACK_IMPORTED_MODULE_0__.WebScreen),
/* harmony export */   "MouseExtension": () => (/* reexport safe */ _interactive_mouse__WEBPACK_IMPORTED_MODULE_2__.MouseExtension),
/* harmony export */   "WebPlatform": () => (/* reexport safe */ _features_platform__WEBPACK_IMPORTED_MODULE_4__.WebPlatform)
/* harmony export */ });
/* harmony import */ var _features_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/screen */ "../../packages/web/dist/features/screen.js");
/* harmony import */ var _interactive_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive/keyboard */ "../../packages/web/dist/interactive/keyboard.js");
/* harmony import */ var _interactive_mouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive/mouse */ "../../packages/web/dist/interactive/mouse.js");
/* harmony import */ var _interactive_touch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive/touch */ "../../packages/web/dist/interactive/touch.js");
/* harmony import */ var _features_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/platform */ "../../packages/web/dist/features/platform.js");






/***/ }),

/***/ "../../packages/web/dist/interactive/keyboard.js":
/*!*******************************************************!*\
  !*** ../../packages/web/dist/interactive/keyboard.js ***!
  \*******************************************************/
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

/***/ "../../packages/web/dist/interactive/mouse.js":
/*!****************************************************!*\
  !*** ../../packages/web/dist/interactive/mouse.js ***!
  \****************************************************/
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

/***/ "../../packages/web/dist/interactive/touch.js":
/*!****************************************************!*\
  !*** ../../packages/web/dist/interactive/touch.js ***!
  \****************************************************/
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
    constructor() {
        super();
        this.platform = new _platform__WEBPACK_IMPORTED_MODULE_2__.default(this);
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
/* harmony import */ var _jeng_tween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jeng/tween */ "../../packages/tween/dist/index.js");
/* harmony import */ var _jeng_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jeng/text */ "../../packages/text/dist/index.js");
/* harmony import */ var _jeng_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jeng/image */ "../../packages/image/dist/index.js");
/* harmony import */ var _jeng_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jeng/shape */ "../../packages/shape/dist/index.js");
/* harmony import */ var _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jeng/canvas-engine */ "../../packages/canvas-engine/dist/index.js");
/* harmony import */ var _jeng_scene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jeng/scene */ "../../packages/scene/dist/index.js");
/* harmony import */ var _jeng_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jeng/web */ "../../packages/web/dist/index.js");
/* harmony import */ var _engine_resources__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./engine/resources */ "./src/engine/resources.ts");
/* harmony import */ var _engine_engine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./engine/engine */ "./src/engine/engine.ts");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main */ "./src/main.ts");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets */ "./src/assets.ts");











document.body.style.margin = '0';
document.body.style.padding = '0';
const engine = new _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_4__.CanvasEngine();
_jeng_image__WEBPACK_IMPORTED_MODULE_2__.CanvasImageColorExtension.init(engine);
_jeng_text__WEBPACK_IMPORTED_MODULE_1__.CanvasTextExtension.init(engine);
_jeng_shape__WEBPACK_IMPORTED_MODULE_3__.CanvasShapeExtension.init(engine);
_jeng_tween__WEBPACK_IMPORTED_MODULE_0__.TweenExtension.init(engine);
_jeng_scene__WEBPACK_IMPORTED_MODULE_5__.SceneExtension.init(engine);
_jeng_web__WEBPACK_IMPORTED_MODULE_6__.MouseExtension.init(engine);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jYW52YXMtZW5naW5lL2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NhbnZhcy1lbmdpbmUvZGlzdC9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvY29tcG9uZW50cy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9jb3JlL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvcmUvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMva2V5LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy9waXZvdC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvdHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9jb21wb25lbnRzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3BvaW50ZXJzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9yZXNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy90aWNrZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy91cGRhdGVyLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9ib3VuZHMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9jb2xvci10cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L21hdHJpeC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L3BvaW50LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9pbWFnZS9kaXN0L2NhbnZhcy1pbWFnZS1jb2xvci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvaW1hZ2UvZGlzdC9jYW52YXMtaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3Jlc291cmNlcy9kaXN0L2ltYWdlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9yZXNvdXJjZXMvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvcmVzb3VyY2VzL2Rpc3Qvc3RyaW5nLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zY2VuZS9kaXN0L3NjZW5lLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9lbGxpcHNlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9wYXRoLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvY2FudmFzL3NoYXBlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvY2FudmFzL3N0eWxlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2RhdGEvZGF0YS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9kYXRhL3BhdGguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvZGF0YS9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvZ3JhcGhpY3MuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3Qvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC9jYW52YXMvdGV4dC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2RhdGEvZm9udC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2RhdGEvZm9ybWF0LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvZGF0YS9tZXRyaWNzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC90ZXh0LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90d2Vlbi9kaXN0L2Vhc2luZy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdHdlZW4vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdHdlZW4vZGlzdC90d2Vlbi5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvd2ViL2Rpc3QvZmVhdHVyZXMvcGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3dlYi9kaXN0L2ZlYXR1cmVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvd2ViL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3dlYi9kaXN0L2ludGVyYWN0aXZlL2tleWJvYXJkLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy93ZWIvZGlzdC9pbnRlcmFjdGl2ZS9tb3VzZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvd2ViL2Rpc3QvaW50ZXJhY3RpdmUvdG91Y2guanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2FydGlmYWN0LnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9hc3NldHMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2VuZ2luZS9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2VuZ2luZS9pbWFnZS50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvZW5naW5lL3BsYXRmb3JtLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9lbmdpbmUvcmVzb3VyY2VzLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9mcHMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL3ByZWxvYWRlci50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvdW5pdC50cyIsIndlYnBhY2s6Ly9zYW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2FtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zYW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiQ2FudmFzRW5naW5lIiwicGxhdGZvcm0iLCJDYW52YXNQbGF0Zm9ybSIsInNjcmVlbiIsIldlYlNjcmVlbiIsIkVuZ2luZSIsIkNhbnZhc1BhdHRlcm5zIiwiY29sb3JQYXR0ZXJuIiwiY29sb3IiLCJhbHBoYSIsImN0IiwiciIsImciLCJiIiwiYSIsIkNvbG9yVHJhbnNmb3JtIiwicmVkTXVsdGlwbGllciIsInJlZE9mZnNldCIsImdyZWVuTXVsdGlwbGllciIsImdyZWVuT2Zmc2V0IiwiYmx1ZU11bHRpcGxpZXIiLCJibHVlT2Zmc2V0IiwiYWxwaGFNdWx0aXBsaWVyIiwiYWxwaGFPZmZzZXQiLCJhZGRHcmFkaWVudENvbG9ycyIsInBhdHRlcm4iLCJjb2xvcnMiLCJhbHBoYXMiLCJyYXRpb3MiLCJjb2xvclRyYW5zZm9ybSIsImkiLCJsZW5ndGgiLCJyYXRpbyIsImNvbG9yU3R5bGUiLCJhZGRDb2xvclN0b3AiLCJyYWRpYWxHcmFkaWVudFBhdHRlcm4iLCJiZWdpblgiLCJiZWdpblkiLCJiZWdpblJhZGl1cyIsImVuZFgiLCJlbmRZIiwiZW5kUmFkaXVzIiwiY29udGV4dCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwibGluZWFyR3JhZGllbnRQYXR0ZXJuIiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJiaXRtYXBQYXR0ZXJuIiwiaW1hZ2UiLCJyZXBlYXQiLCJtYXRyaXgiLCJjcmVhdGVQYXR0ZXJuIiwiZG9tTWF0cml4IiwiRE9NTWF0cml4IiwiYyIsImQiLCJlIiwidHgiLCJmIiwidHkiLCJzZXRUcmFuc2Zvcm0iLCJhcmd1bWVudHMiLCJ2aWV3IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dHMiLCJnZXRDb250ZXh0IiwiY3VzdG9tQ29udGV4dHMiLCJwdXNoIiwicG9wIiwiZW5naW5lIiwiZGVidWciLCJ3YXJuaW5nIiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJjbGVhciIsInVwZGF0ZVNpemUiLCJjbGVhclJlY3QiLCJnZXRXaWR0aCIsImdldEhlaWdodCIsInBpeGVsUmF0aW8iLCJnZXRQaXhlbFJhdGlvIiwidmlld1dpZHRoIiwiTWF0aCIsImZsb29yIiwidmlld0hlaWdodCIsInN0eWxlIiwiV2ViUGxhdGZvcm0iLCJDT05UQUlORVIiLCJDb250YWluZXIiLCJudW1DaGlsZHJlbiIsImNvbnRhaW5lciIsImNoaWxkcmVuIiwiQXJyYXkiLCJpc0FycmF5IiwidHlwZSIsImtleXMiLCJPYmplY3QiLCJDb250YWluZXJFeHRlbnNpb24iLCJyZW5kZXIiLCJyZW5kZXJlciIsImRlcHRoIiwiY29tcG9uZW50IiwicmVuZGVyQ29tcG9uZW50IiwiY29tcG9uZW50c01hcCIsInVwZGF0ZSIsInVwZGF0ZXIiLCJ1cGRhdGVDb21wb25lbnQiLCJoaXRUZXN0IiwicG9pbnRlcnMiLCJyZXN1bHQiLCJkaXNwYXRjaENvbXBvbmVudCIsImtleVRlc3QiLCJrZXlib2FyZCIsImxvYWRlZCIsImxvYWRpbmciLCJwcm9ncmVzcyIsImNvbXBvbmVudENvbnRleHQiLCJpbml0IiwiY29tcG9uZW50cyIsInNldCIsIkxPQURFUiIsIkxvYWRlciIsImdldExvYWRpbmdQcm9ncmVzcyIsImxvYWRlciIsImxvYWRpbmdQcm9ncmVzcyIsImlzTG9hZGVkIiwibmVlZExvYWRpbmdDaGVjayIsImxvYWRpbmdDaGVjayIsIkxvYWRlckV4dGVuc2lvbiIsIm9uTG9hZGVkIiwiQ29tcG9uZW50cyIsIlVwZGF0ZXIiLCJMb2FkaW5nIiwiUmVuZGVyZXIiLCJQb2ludGVycyIsIktleWJvYXJkIiwidGlja2VyIiwiVGlja2VyIiwiRGVidWciLCJyZXNvdXJjZXMiLCJSZXNvdXJjZXMiLCJFbmdpbmVGZWF0dXJlIiwiRGlzcGxheSIsImlzVmlzaWJsZSIsInZpc2libGUiLCJoYW5kbGVyc01hcCIsImtleURvd24iLCJrZXlQcmVzcyIsImtleVVwIiwiS2V5IiwiaXNLZXlFbmFibGVkIiwia2V5Iiwia2V5RW5hYmxlZCIsImRpc3BhdGNoRXZlbnQiLCJldmVudCIsImhhbmRsZXJOYW1lIiwiUGl2b3QiLCJnZXRYIiwicGl2b3QiLCJwaXZvdFgiLCJnZXRZIiwicGl2b3RZIiwiaGFzVmFsdWVzIiwicG9pbnRlckRvd24iLCJwb2ludGVyVXAiLCJwb2ludGVyTW92ZSIsInBvaW50ZXJDYW5jZWwiLCJwb2ludGVyT3ZlciIsInBvaW50ZXJPdXQiLCJQb2ludGVyIiwiaXNQb2ludGVyRW5hYmxlZCIsInBvaW50ZXIiLCJwb2ludGVyRW5hYmxlZCIsIngiLCJ5IiwiZ2xvYmFsWCIsImdsb2JhbFkiLCJpZCIsIlRyYW5zZm9ybSIsImdldE1hdHJpeCIsInRyYW5zZm9ybSIsInJvdGF0aW9uIiwic2NhbGVYIiwic2NhbGUiLCJzY2FsZVkiLCJjb3MiLCJzaW4iLCJnZXRDb2xvclRyYW5zZm9ybSIsInRpbnQiLCJ2YWx1ZSIsInZhbHVlSW52ZXJ0ZWQiLCJicmlnaHRuZXNzIiwidW5kZWZpbmVkIiwicGVyY2VudCIsImFicyIsIm9mZnNldCIsIlVwZGF0ZSIsImlzRW5hYmxlZCIsImVuYWJsZWQiLCJ0aW1lIiwib25VcGRhdGUiLCJwcm9wZXJ0aWVzIiwiTWFwIiwiaW5mb3MiLCJlcnJvcnMiLCJ3YXJuaW5ncyIsImNvbnNvbGUiLCJsb2ciLCJhcmdzIiwiU3RyaW5nIiwiY291bnQiLCJnZXQiLCJpbmZvIiwiZXJyb3IiLCJ3YXJuIiwicm9vdCIsImtleUV2ZW50IiwiaGFuZGxlciIsImVsYXBzZWRUaW1lIiwic3RhcnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJQbGF0Zm9ybSIsImdsb2JhbCIsIlBvaW50IiwibG9jYWwiLCJwb2ludGVySWQiLCJwb2ludGVyVHlwZSIsIk1hdHJpeCIsImJhc2UiLCJwYXJlbnQiLCJwYXJlbnRSZXN1bHQiLCJ1cGRhdGVMb2NhbCIsImJlZ2luIiwiZW5kIiwiUmVzb3VyY2UiLCJnZXRQcm9ncmVzcyIsInJlc291cmNlIiwiYnl0ZXNUb3RhbCIsImJ5dGVzTG9hZGVkIiwicmVzb2x2ZXJzIiwiU2V0IiwiYXNzZXQiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJTY3JlZW4iLCJmdWxsc2NyZWVuIiwiZ2V0V2luZG93V2lkdGgiLCJnZXRXaW5kb3dIZWlnaHQiLCJnZXRXaW5kb3dQaXhlbFJhdGlvIiwiZnJhbWVSYXRlIiwicGF1c2VkIiwidXBkYXRlRnJhbWUiLCJjdXJyZW50VGltZSIsImRlbHRhVGltZSIsInVwZGF0ZU5leHRGcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZVByb3BlcnRpZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJCb3VuZHMiLCJlbXB0eSIsIm1pblgiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJtaW5ZIiwibWF4WCIsIk1JTl9WQUxVRSIsIm1heFkiLCJzZXRFbXB0eSIsImJvdW5kcyIsImlzRW1wdHkiLCJ0b1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInRlc3RYIiwidGVzdFkiLCJ0ZXN0IiwidGVzdFBvaW50IiwicG9pbnQiLCJpc0VtcHR5V2l0aEFscGhhIiwiY29weSIsImZyb20iLCJ0byIsImNvbmNhdCIsImN0MSIsImN0MCIsIm1hdHJpeDAiLCJtYXRyaXgxIiwiZ2V0RGV0ZXJtaW5hbnQiLCJpbnZlcnQiLCJkZXRlcm1pbmFudCIsInRyYW5zZm9ybVBvaW50IiwidHJhbnNmb3JtUG9pbnRMb2NhbCIsInRyYW5zZm9ybUludmVyc2VQb2ludCIsInRyYW5zZm9ybUJvdW5kcyIsInJ4IiwicnkiLCJyciIsInJiIiwibngxIiwibnkxIiwibngyIiwibnkyIiwibngzIiwibnkzIiwibng0Iiwibnk0IiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwic3FydCIsImFuZ2xlIiwiYXRhbjIiLCJlcXVhbHMiLCJwb2ludDAiLCJwb2ludDEiLCJzb3VyY2UiLCJ0YXJnZXQiLCJub3JtYWxpemUiLCJ0aGlja25lc3MiLCJkaXN0YW5jZSIsImR4IiwiZHkiLCJpbnRlcnBvbGF0ZSIsInBvbGFyIiwiUmVjdGFuZ2xlIiwiaW50ZXJzZWN0aW9uIiwiY29udGFpbnMiLCJyb3VuZCIsInNjcmVlbkJvdW5kcyIsIkNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24iLCJzcmMiLCJjb250ZXh0MmQiLCJnbG9iYWxBbHBoYSIsImRyYXdJbWFnZSIsImN1c3RvbUNvbnRleHQiLCJjcmVhdGVDdXN0b21Db250ZXh0IiwiaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwicm0iLCJnbSIsImJtIiwiYW0iLCJybyIsImdvIiwiYm8iLCJhbyIsImRhdGEiLCJwdXRJbWFnZURhdGEiLCJkZXN0cm95Q3VzdG9tQ29udGV4dCIsIkltYWdlRXh0ZW5zaW9uIiwiSU1BR0UiLCJDYW52YXNJbWFnZUV4dGVuc2lvbiIsIkltYWdlIiwiY2FsY3VsYXRlQm91bmRzIiwicG9pbnRlclRlc3RTaGFwZSIsIkhUTUxDYW52YXNFbGVtZW50IiwiY2FudmFzQ29udGV4dCIsIkltYWdlUmVzb3VyY2UiLCJleHRlbnNpb24iLCJzcGxpdCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJhZGQiLCJTdHJpbmdSZXNvdXJjZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ucHJvZ3Jlc3MiLCJ0b3RhbCIsInJlc3BvbnNlVGV4dCIsInNlbmQiLCJTQ0VORSIsIlNjZW5lRXh0ZW5zaW9uIiwic2NlbmUiLCJKU09OIiwicGFyc2UiLCJtZXNzYWdlIiwiUElfMiIsIlBJIiwiYXBwbHlFbGxpcHNlIiwiaGFzRmlsbCIsInJhZGl1cyIsInJhZGl1c1giLCJyYWRpdXNZIiwiYmVnaW5QYXRoIiwiZWxsaXBzZSIsImNsb3NlUGF0aCIsImFwcGx5Q29tbWFuZCIsImNvbW1hbmQiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjdXJ2ZVRvIiwicXVhZHJhdGljQ3VydmVUbyIsImN4IiwiY3kiLCJjdWJpY0N1cnZlVG8iLCJiZXppZXJDdXJ2ZVRvIiwic3giLCJzeSIsImFwcGx5UGF0aCIsImFwcGx5UmVjdGFuZ2xlIiwicmVjdCIsInJlbmRlckdyYXBoaWNzIiwiZmlsbCIsInN0cm9rZSIsImhhc1N0cm9rZSIsImV4aXN0IiwicGF0aCIsImFwcGx5U3RyaW5nIiwic2V0RmlsbFN0eWxlIiwic2V0U3Ryb2tlU3R5bGUiLCJDYW52YXNTaGFwZUV4dGVuc2lvbiIsInNoYXBlIiwiU2hhcGUiLCJTaGFwZUV4dGVuc2lvbiIsIlNIQVBFIiwicmVhZGVyIiwiR3JhcGhpY3NTdHJpbmdSZWFkZXIiLCJzZXRQYXRoIiwicmVhZE5leHQiLCJnZXRDb21tYW5kIiwiZW1wdHlBcnJheSIsImVtcHR5TWF0cml4IiwiZ2V0Q2FudmFzUGF0dGVybiIsInNvbGlkIiwibGluZWFyIiwicmFkaWFsIiwiYml0bWFwRmlsbCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwibGluZUNhcCIsImxpbmVKb2luIiwibWl0ZXJMaW1pdCIsImNhcHMiLCJqb2ludHMiLCJSZWN0YW5nbGVEYXRhIiwiRWxsaXBzZURhdGEiLCJQYXRoRGF0YSIsInBhdGhEYXRhIiwiR3JhcGhpY3NTdHJpbmciLCJQYXRoQ29tbWFuZCIsIkdyYXBoaWNzRGF0YSIsIk5VTUJFUlNfQ09VTlQiLCJNIiwibSIsIkwiLCJsIiwiSCIsImgiLCJWIiwidiIsIkMiLCJTIiwicyIsIlEiLCJxIiwiVCIsInQiLCJDT01NQU5EX1JFR0VYIiwiTlVNQkVSX1JFR0VYIiwiR3JhcGhpY3NTdHJpbmdTdHJlYW0iLCJidWZmZXIiLCJzeW1ib2xSZWdleCIsImxhc3RJbmRleCIsInN5bWJvbE1hdGNoIiwiZXhlYyIsInN5bWJvbCIsIm51bWJlck1hdGNoIiwicGFyc2VGbG9hdCIsInN0cmVhbSIsImNvbW1hbmRFeGlzdHMiLCJsYXN0WCIsImxhc3RZIiwibGFzdENYIiwibGFzdENZIiwiZ2V0QnVmZmVyIiwiZTAiLCJlMSIsImUyIiwiZTMiLCJlNCIsImU1IiwidGVtcFBvaW50MCIsInRlbXBQb2ludDEiLCJHcmFwaGljcyIsInNtb290aCIsInBpeGVsSGludGluZyIsInNjYWxlTW9kZSIsImdldFBhdGgiLCJlbGxpcHNlV2lkdGgiLCJlbGxpcHNlSGVpZ2h0IiwidyIsImsiLCJveCIsIm95IiwieGUiLCJ5ZSIsInhtIiwieW0iLCJjcmVhdGVEYXRhIiwiZ3JhcGhpY3NEYXRhIiwiZGVmYXVsdFRleHRGb3JtYXQiLCJDT1JSRUNUSU9OIiwiQ2FudmFzVGV4dEV4dGVuc2lvbiIsIlRleHQiLCJtZXRyaWNzIiwiZm9ybWF0IiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsIlRleHRGb3JtYXQiLCJyZWFsV2lkdGgiLCJyZWFsSGVpZ2h0Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0ZXh0QmFzZWxpbmUiLCJzaW1wbGUiLCJ0ZXh0Iiwic2l6ZSIsImxlYWRpbmciLCJsZXR0ZXJTcGFjaW5nIiwiZGVmYXVsdEZvbnQiLCJGb250Iiwic3ltYm9sU2l6ZSIsImFsaWduVmFsdWUiLCJmb250IiwiVGV4dE1ldHJpY3MiLCJzeW1ib2xOZXh0IiwiYWR2YW5jZSIsImZpbGxUZXh0IiwiYWxpZ25WZXJ0aWNhbFZhbHVlIiwibGluZXMiLCJsaW5lIiwic3ltYm9scyIsImZpcnN0IiwibGluZUhlaWdodCIsImoiLCJhbGlnblN5bWJvbFZhbHVlIiwic3ltYm9sRm9udCIsIlRleHRFeHRlbnNpb24iLCJURVhUIiwiRU0iLCJmb250cyIsImdldFN0eWxlIiwibmFtZSIsInJlcGxhY2UiLCJ0b1N0cmluZyIsIm1lYXN1cmVUZXh0IiwiZ2V0Q2hhcldpZHRoIiwiY2hhciIsIndpZHRocyIsImdldEtlcm5pbmciLCJzZWNvbmQiLCJwYWlyIiwia2VybmluZyIsImtlcm5pbmdzIiwid2lkdGhTZWNvbmQiLCJ3aWR0aFRvdGFsIiwiZ2V0QWR2YW5jZSIsImdldEZvbnQiLCJib2xkIiwiaXRhbGljIiwidW5kZXJsaW5lIiwiYWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwiY29tYmluZSIsImRlZmF1bHRGb3JtYXQiLCJnZXRBbGlnblZhbHVlIiwiZ2V0VmVydGljYWxBbGlnblZhbHVlIiwiVGV4dExpbmUiLCJjcmVhdGUiLCJtYXgiLCJjb3JyZWN0V2lkdGgiLCJsYXN0IiwiY29ycmVjdEhlaWdodCIsImdldFN5bWJvbHMiLCJzeW1ib2xGb3JtYXQiLCJibG9jayIsImdldExpbmVzIiwid29yZFdyYXAiLCJtdWx0aWxpbmUiLCJ3b3JkIiwiZ2V0TWV0cmljcyIsImdldFNpbXBsZU1ldHJpY3MiLCJnZXRTaW1wbGVXaWR0aCIsImluZGV4IiwiZ2V0VGV4dCIsImlzVXBkYXRlTWV0cmljcyIsInVwZGF0ZU1ldHJpY3MiLCJpc0F1dG9TaXplIiwiaXNTaW1wbGUiLCJpc011bHRpbGluZSIsIkxJTkVBUiIsIlFVQURSQVRJQyIsIlFVQURSQVRJQ19JTiIsIlFVQURSQVRJQ19PVVQiLCJDVUJJQyIsIkNVQklDX0lOIiwiQ1VCSUNfT1VUIiwiUVVBUlRJQyIsIlFVQVJUSUNfSU4iLCJRVUFSVElDX09VVCIsIlFVSU5USUMiLCJRVUlOVElDX0lOIiwiUVVJTlRJQ19PVVQiLCJTSU5VU09JREFMIiwiU0lOVVNPSURBTF9JTiIsIlNJTlVTT0lEQUxfT1VUIiwiRVhQT05FTlRJQUwiLCJFWFBPTkVOVElBTF9JTiIsIkVYUE9ORU5USUFMX09VVCIsIkNJUkNVTEFSIiwiQ0lSQ1VMQVJfSU4iLCJDSVJDVUxBUl9PVVQiLCJFTEFTVElDIiwiRUxBU1RJQ19JTiIsIkVMQVNUSUNfT1VUIiwiQkFDSyIsIkJBQ0tfSU4iLCJCQUNLX09VVCIsIkJPVU5DRSIsIkJPVU5DRV9JTiIsIkJPVU5DRV9PVVQiLCJlYXNpbmciLCJwb3ciLCJUV0VFTiIsIlR3ZWVuRXh0ZW5zaW9uIiwidHdlZW4iLCJwaGFzZXMiLCJwaGFzZSIsImVhc2luZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImVhc2luZ01ldGhvZCIsImVhc2luZ1ZhbHVlIiwic3RhdGUiLCJmcm9tVmFsdWUiLCJ0b1ZhbHVlIiwic3RhdGVWYWx1ZSIsImxvb3AiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiY29kZSIsImN0cmwiLCJjdHJsS2V5IiwiYWx0IiwiYWx0S2V5Iiwic2hpZnQiLCJzaGlmdEtleSIsImRpc3BhdGNoIiwicHJldmVudERlZmF1bHQiLCJLZXlib2FyZEV4dGVuc2lvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImNsaWVudExlZnQiLCJjbGllbnRZIiwiY2xpZW50VG9wIiwiTW91c2VFeHRlbnNpb24iLCJjaGFuZ2VkVG91Y2hlcyIsInRvdWNoIiwiaWRlbnRpZmllciIsIlRvdWNoRXh0ZW5zaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsWUFBYjtBQUFBOztBQUFBOztBQUNJLDBCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLElBQUlDLHFEQUFKLCtCQUFoQjtBQUNBLFVBQUtDLE1BQUwsR0FBYyxJQUFJQyxnREFBSiwrQkFBZDtBQUhVO0FBSWI7O0FBTEw7QUFBQSxFQUFrQ0MsOENBQWxDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ08sSUFBSUMsY0FBSjs7QUFDUCxDQUFDLFVBQVVBLGNBQVYsRUFBMEI7QUFDdkIsV0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkJDLEtBQTdCLEVBQW9DQyxFQUFwQyxFQUF3QztBQUNwQyxRQUFJQyxDQUFDLEdBQUdILEtBQUssSUFBSSxFQUFULEdBQWMsSUFBdEI7QUFDQSxRQUFJSSxDQUFDLEdBQUdKLEtBQUssSUFBSSxDQUFULEdBQWEsSUFBckI7QUFDQSxRQUFJSyxDQUFDLEdBQUdMLEtBQUssR0FBRyxJQUFoQjtBQUNBLFFBQUlNLENBQUMsR0FBR0wsS0FBSyxHQUFHLElBQWhCOztBQUNBLFFBQUksQ0FBQ00sOERBQUEsQ0FBdUJMLEVBQXZCLENBQUwsRUFBaUM7QUFDN0JDLE9BQUMsR0FBSUEsQ0FBQyxHQUFHRCxFQUFFLENBQUNNLGFBQVAsR0FBdUJOLEVBQUUsQ0FBQ08sU0FBM0IsR0FBd0MsSUFBNUM7QUFDQUwsT0FBQyxHQUFJQSxDQUFDLEdBQUdGLEVBQUUsQ0FBQ1EsZUFBUCxHQUF5QlIsRUFBRSxDQUFDUyxXQUE3QixHQUE0QyxJQUFoRDtBQUNBTixPQUFDLEdBQUlBLENBQUMsR0FB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bkMsZ0RBQVcsRUFDWDtJQUNDLEtBQUssRUFBRSxnREFBVztJQUNsQixLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJO0lBQzNCLE1BQU0sRUFBRSxJQUFJO0NBQ0ssQ0FDbEIsQ0FBQztBQUdGLE1BQU0sZUFBZSxHQUFHLElBQUksdURBQXFCLEVBQUUsQ0FBQztBQUNwRCxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBYyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxpREFBWSxDQUFDLENBQUM7QUFDckUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0RBQWlCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLG9EQUFlLENBQUMsQ0FBQztBQUMzRSxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBXZWJTY3JlZW4gfSBmcm9tICdAamVuZy93ZWInO1xuaW1wb3J0IHsgQ2FudmFzUGxhdGZvcm0gfSBmcm9tICcuL3BsYXRmb3JtJztcbmV4cG9ydCBjbGFzcyBDYW52YXNFbmdpbmUgZXh0ZW5kcyBFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBsYXRmb3JtID0gbmV3IENhbnZhc1BsYXRmb3JtKHRoaXMpO1xuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBXZWJTY3JlZW4odGhpcyk7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9wYXR0ZXJucyc7XG5leHBvcnQgKiBmcm9tICcuL3BsYXRmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZW5naW5lJztcbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5leHBvcnQgdmFyIENhbnZhc1BhdHRlcm5zO1xuKGZ1bmN0aW9uIChDYW52YXNQYXR0ZXJucykge1xuICAgIGZ1bmN0aW9uIGNvbG9yUGF0dGVybihjb2xvciwgYWxwaGEsIGN0KSB7XG4gICAgICAgIGxldCByID0gY29sb3IgPj4gMTYgJiAweGZmO1xuICAgICAgICBsZXQgZyA9IGNvbG9yID4+IDggJiAweGZmO1xuICAgICAgICBsZXQgYiA9IGNvbG9yICYgMHhmZjtcbiAgICAgICAgbGV0IGEgPSBhbHBoYSAqIDB4ZmY7XG4gICAgICAgIGlmICghQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eShjdCkpIHtcbiAgICAgICAgICAgIHIgPSAociAqIGN0LnJlZE11bHRpcGxpZXIgKyBjdC5yZWRPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIGcgPSAoZyAqIGN0LmdyZWVuTXVsdGlwbGllciArIGN0LmdyZWVuT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBiID0gKGIgKiBjdC5ibHVlTXVsdGlwbGllciArIGN0LmJsdWVPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIGEgPSAoYSAqIGN0LmFscGhhTXVsdGlwbGllciArIGN0LmFscGhhT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEgPCAweGZmKSB7XG4gICAgICAgICAgICByZXR1cm4gYHJnYmEoJHtyfSwgJHtnfSwgJHtifSwgJHthIC8gMHhmZn0pYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYHJnYigke3J9LCAke2d9LCAke2J9KWA7XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybiA9IGNvbG9yUGF0dGVybjtcbiAgICBmdW5jdGlvbiBhZGRHcmFkaWVudENvbG9ycyhwYXR0ZXJuLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBjb2xvcnNbaV07XG4gICAgICAgICAgICBjb25zdCBhbHBoYSA9IGFscGhhc1tpXTtcbiAgICAgICAgICAgIGxldCByYXRpbyA9IHJhdGlvc1tpXTtcbiAgICAgICAgICAgIGlmIChyYXRpbyA8IDApXG4gICAgICAgICAgICAgICAgcmF0aW8gPSAwO1xuICAgICAgICAgICAgaWYgKHJhdGlvID4gMSlcbiAgICAgICAgICAgICAgICByYXRpbyA9IDE7XG4gICAgICAgICAgICBjb25zdCBjb2xvclN0eWxlID0gY29sb3JQYXR0ZXJuKGNvbG9yLCBhbHBoYSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgcGF0dGVybi5hZGRDb2xvclN0b3AocmF0aW8sIGNvbG9yU3R5bGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmFkZEdyYWRpZW50Q29sb3JzID0gYWRkR3JhZGllbnRDb2xvcnM7XG4gICAgZnVuY3Rpb24gcmFkaWFsR3JhZGllbnRQYXR0ZXJuKGJlZ2luWCwgYmVnaW5ZLCBiZWdpblJhZGl1cywgZW5kWCwgZW5kWSwgZW5kUmFkaXVzLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudChiZWdpblgsIGJlZ2luWSwgYmVnaW5SYWRpdXMsIGVuZFgsIGVuZFksIGVuZFJhZGl1cyk7XG4gICAgICAgIGFkZEdyYWRpZW50Q29sb3JzKHBhdHRlcm4sIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLnJhZGlhbEdyYWRpZW50UGF0dGVybiA9IHJhZGlhbEdyYWRpZW50UGF0dGVybjtcbiAgICBmdW5jdGlvbiBsaW5lYXJHcmFkaWVudFBhdHRlcm4oYmVnaW5YLCBiZWdpblksIGVuZFgsIGVuZFksIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KGJlZ2luWCwgYmVnaW5ZLCBlbmRYLCBlbmRZKTtcbiAgICAgICAgYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMubGluZWFyR3JhZGllbnRQYXR0ZXJuID0gbGluZWFyR3JhZGllbnRQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGJpdG1hcFBhdHRlcm4oaW1hZ2UsIHJlcGVhdCwgbWF0cml4LCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVBhdHRlcm4oaW1hZ2UsIHJlcGVhdCA/ICdyZXBlYXQnIDogJ25vbmUnKTtcbiAgICAgICAgaWYgKHBhdHRlcm4pIHtcbiAgICAgICAgICAgIGNvbnN0IGRvbU1hdHJpeCA9IG5ldyBET01NYXRyaXgoKTtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5hID0gbWF0cml4LmEgPz8gMTtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5iID0gbWF0cml4LmIgPz8gMDtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5jID0gbWF0cml4LmMgPz8gMDtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5kID0gbWF0cml4LmQgPz8gMTtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5lID0gbWF0cml4LnR4ID8/IDA7XG4gICAgICAgICAgICBkb21NYXRyaXguZiA9IG1hdHJpeC50eSA/PyAwO1xuICAgICAgICAgICAgcGF0dGVybi5zZXRUcmFuc2Zvcm0oZG9tTWF0cml4KTtcbiAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMuYml0bWFwUGF0dGVybiA9IGJpdG1hcFBhdHRlcm47XG59KShDYW52YXNQYXR0ZXJucyB8fCAoQ2FudmFzUGF0dGVybnMgPSB7fSkpO1xuIiwiaW1wb3J0IHsgV2ViUGxhdGZvcm0gfSBmcm9tICdAamVuZy93ZWInO1xuZXhwb3J0IGNsYXNzIENhbnZhc1BsYXRmb3JtIGV4dGVuZHMgV2ViUGxhdGZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFt0aGlzLnZpZXcuZ2V0Q29udGV4dCgnMmQnKV07XG4gICAgICAgIHRoaXMuY3VzdG9tQ29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dHNbdGhpcy5jb250ZXh0cy5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgc2F2ZUNvbnRleHQoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHRzLnB1c2goY29udGV4dCk7XG4gICAgfVxuICAgIHJlc3RvcmVDb250ZXh0KCkge1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZGVidWcud2FybmluZygnVHJ5aW5nIHRvIHJlc3RvcmUgbWFpbiBjb250ZXh0Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlQ3VzdG9tQ29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQ7XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbUNvbnRleHRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHRoaXMuY3VzdG9tQ29udGV4dHMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMudmlldztcbiAgICAgICAgaWYgKGNvbnRleHQuY2FudmFzLndpZHRoICE9PSB3aWR0aCkge1xuICAgICAgICAgICAgY29udGV4dC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGV4dC5jYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgZGVzdHJveUN1c3RvbUNvbnRleHQoY29udGV4dCkge1xuICAgICAgICB0aGlzLmN1c3RvbUNvbnRleHRzLnB1c2goY29udGV4dCk7XG4gICAgfVxuICAgIGJlZ2luKCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgIH1cbiAgICBlbmQoKSB7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdmlldy53aWR0aCwgdmlldy5oZWlnaHQpO1xuICAgIH1cbiAgICB1cGRhdGVTaXplKCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRXaWR0aCgpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0SGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW8gPSB0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0UGl4ZWxSYXRpbygpO1xuICAgICAgICBjb25zdCB2aWV3V2lkdGggPSBNYXRoLmZsb29yKHdpZHRoICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHZpZXdIZWlnaHQgPSBNYXRoLmZsb29yKGhlaWdodCAqIHBpeGVsUmF0aW8pO1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IHRoaXM7XG4gICAgICAgIGlmICh2aWV3LndpZHRoICE9PSB2aWV3V2lkdGggfHwgdmlldy5oZWlnaHQgIT09IHZpZXdIZWlnaHQpIHtcbiAgICAgICAgICAgIHZpZXcud2lkdGggPSB2aWV3V2lkdGg7XG4gICAgICAgICAgICB2aWV3LmhlaWdodCA9IHZpZXdIZWlnaHQ7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IENPTlRBSU5FUiA9ICdjb250YWluZXInO1xuZXhwb3J0IHZhciBDb250YWluZXI7XG4oZnVuY3Rpb24gKENvbnRhaW5lcikge1xuICAgIGZ1bmN0aW9uIG51bUNoaWxkcmVuKGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgcmV0dXJuIGtleXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBDb250YWluZXIubnVtQ2hpbGRyZW4gPSBudW1DaGlsZHJlbjtcbn0pKENvbnRhaW5lciB8fCAoQ29udGFpbmVyID0ge30pKTtcbmV4cG9ydCB2YXIgQ29udGFpbmVyRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDb250YWluZXJFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHJlbmRlcmVyIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJlci5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyB1cGRhdGVyIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgdXBkYXRlci5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlci5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi51cGRhdGUgPSB1cGRhdGU7XG4gICAgZnVuY3Rpb24gaGl0VGVzdChjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgcG9pbnRlcnMgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcG9pbnRlcnMuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgcG9pbnRlcnMuZGVwdGgrKztcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50ZXJzLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCwgcmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnRlcnMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0LCByZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0ga2V5cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnRlcnMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0LCByZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9pbnRlcnMuZGVwdGgtLTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24ga2V5VGVzdChjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsga2V5Ym9hcmQgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBrZXlib2FyZC5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAga2V5Ym9hcmQuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIGtleWJvYXJkLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5Ym9hcmQuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24ua2V5VGVzdCA9IGtleVRlc3Q7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBsb2FkaW5nIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgbG9hZGluZy5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gbG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzICs9IGNvbXBvbmVudENvbnRleHQucHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudENvbnRleHQubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzIC89IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBsb2FkaW5nLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGNvbXBvbmVudENvbnRleHQubG9hZGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgKz0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50Q29udGV4dC5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgLz0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvYWRpbmcuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5zZXQoQ09OVEFJTkVSLCB1cGRhdGUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KENPTlRBSU5FUiwgcmVuZGVyKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoQ09OVEFJTkVSLCBoaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMua2V5VGVzdC5zZXQoQ09OVEFJTkVSLCBrZXlUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChDT05UQUlORVIsIGxvYWRlZCk7XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENvbnRhaW5lckV4dGVuc2lvbiB8fCAoQ29udGFpbmVyRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IENvbnRhaW5lckV4dGVuc2lvbiB9IGZyb20gJy4vY29udGFpbmVyJztcbmV4cG9ydCBjb25zdCBMT0FERVIgPSAnbG9hZGVyJztcbmV4cG9ydCB2YXIgTG9hZGVyO1xuKGZ1bmN0aW9uIChMb2FkZXIpIHtcbiAgICBmdW5jdGlvbiBnZXRMb2FkaW5nUHJvZ3Jlc3MobG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZGluZ1Byb2dyZXNzID8/IDA7XG4gICAgfVxuICAgIExvYWRlci5nZXRMb2FkaW5nUHJvZ3Jlc3MgPSBnZXRMb2FkaW5nUHJvZ3Jlc3M7XG4gICAgZnVuY3Rpb24gaXNMb2FkZWQobG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZGVkID8/IGZhbHNlO1xuICAgIH1cbiAgICBMb2FkZXIuaXNMb2FkZWQgPSBpc0xvYWRlZDtcbiAgICBmdW5jdGlvbiBuZWVkTG9hZGluZ0NoZWNrKGxvYWRlcikge1xuICAgICAgICByZXR1cm4gbG9hZGVyLmxvYWRpbmdDaGVjayA/PyB0cnVlO1xuICAgIH1cbiAgICBMb2FkZXIubmVlZExvYWRpbmdDaGVjayA9IG5lZWRMb2FkaW5nQ2hlY2s7XG59KShMb2FkZXIgfHwgKExvYWRlciA9IHt9KSk7XG5leHBvcnQgdmFyIExvYWRlckV4dGVuc2lvbjtcbihmdW5jdGlvbiAoTG9hZGVyRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGxvYWRlciwgZW5naW5lKSB7XG4gICAgICAgIGlmICghTG9hZGVyLm5lZWRMb2FkaW5nQ2hlY2sobG9hZGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIENvbnRhaW5lckV4dGVuc2lvbi5sb2FkZWQobG9hZGVyLCBlbmdpbmUpO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLmxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICBsb2FkZXIubG9hZGluZ1Byb2dyZXNzID0gY29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgaWYgKGNvbnRleHQubG9hZGVkICYmICFsb2FkZXIubG9hZGVkKSB7XG4gICAgICAgICAgICBsb2FkZXIubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChsb2FkZXIub25Mb2FkZWQpIHtcbiAgICAgICAgICAgICAgICBsb2FkZXIub25Mb2FkZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBMb2FkZXJFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5zZXQoTE9BREVSLCBDb250YWluZXJFeHRlbnNpb24udXBkYXRlKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChMT0FERVIsIENvbnRhaW5lckV4dGVuc2lvbi5yZW5kZXIpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChMT0FERVIsIENvbnRhaW5lckV4dGVuc2lvbi5oaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChMT0FERVIsIGxvYWRlZCk7XG4gICAgfVxuICAgIExvYWRlckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKExvYWRlckV4dGVuc2lvbiB8fCAoTG9hZGVyRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vZmVhdHVyZXMvcmVuZGVyZXInO1xuaW1wb3J0IHsgVXBkYXRlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3VwZGF0ZXInO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4uL2ZlYXR1cmVzL2xvYWRpbmcnO1xuaW1wb3J0IHsgUG9pbnRlcnMgfSBmcm9tICcuLi9mZWF0dXJlcy9wb2ludGVycyc7XG5pbXBvcnQgeyBUaWNrZXIgfSBmcm9tICcuLi9mZWF0dXJlcy90aWNrZXInO1xuaW1wb3J0IHsgQ29udGFpbmVyRXh0ZW5zaW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInO1xuaW1wb3J0IHsgRGVidWcgfSBmcm9tICcuLi9mZWF0dXJlcy9kZWJ1Zyc7XG5pbXBvcnQgeyBSZXNvdXJjZXMgfSBmcm9tICcuLi9mZWF0dXJlcy9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4uL2ZlYXR1cmVzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkZXInO1xuaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICcuLi9mZWF0dXJlcy9rZXlib2FyZCc7XG5leHBvcnQgY2xhc3MgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDMyO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBuZXcgQ29tcG9uZW50cyh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVyID0gbmV3IFVwZGF0ZXIodGhpcyk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IG5ldyBMb2FkaW5nKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMpO1xuICAgICAgICB0aGlzLnBvaW50ZXJzID0gbmV3IFBvaW50ZXJzKHRoaXMpO1xuICAgICAgICB0aGlzLmtleWJvYXJkID0gbmV3IEtleWJvYXJkKHRoaXMpO1xuICAgICAgICB0aGlzLnRpY2tlciA9IG5ldyBUaWNrZXIodGhpcyk7XG4gICAgICAgIHRoaXMuZGVidWcgPSBuZXcgRGVidWcodGhpcyk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IFJlc291cmNlcyh0aGlzKTtcbiAgICAgICAgQ29udGFpbmVyRXh0ZW5zaW9uLmluaXQodGhpcyk7XG4gICAgICAgIExvYWRlckV4dGVuc2lvbi5pbml0KHRoaXMpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgfVxufVxuIiwiZXhwb3J0IHZhciBEaXNwbGF5O1xuKGZ1bmN0aW9uIChEaXNwbGF5KSB7XG4gICAgZnVuY3Rpb24gaXNWaXNpYmxlKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LnZpc2libGUgPz8gdHJ1ZTtcbiAgICB9XG4gICAgRGlzcGxheS5pc1Zpc2libGUgPSBpc1Zpc2libGU7XG59KShEaXNwbGF5IHx8IChEaXNwbGF5ID0ge30pKTtcbiIsImNvbnN0IGhhbmRsZXJzTWFwID0ge1xuICAgIGtleURvd246ICdvbktleURvd24nLFxuICAgIGtleVByZXNzOiAnb25LZXlQcmVzcycsXG4gICAga2V5VXA6ICdvbktleVVwJyxcbn07XG5leHBvcnQgdmFyIEtleTtcbihmdW5jdGlvbiAoS2V5KSB7XG4gICAgZnVuY3Rpb24gaXNLZXlFbmFibGVkKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5LmtleUVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgS2V5LmlzS2V5RW5hYmxlZCA9IGlzS2V5RW5hYmxlZDtcbiAgICBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgZXZlbnQpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlck5hbWUgPSBoYW5kbGVyc01hcFtldmVudC50eXBlXTtcbiAgICAgICAgaWYgKGhhbmRsZXJOYW1lICYmIGNvbXBvbmVudFtoYW5kbGVyTmFtZV0pIHtcbiAgICAgICAgICAgIGNvbXBvbmVudFtoYW5kbGVyTmFtZV0oZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEtleS5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbn0pKEtleSB8fCAoS2V5ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUGl2b3Q7XG4oZnVuY3Rpb24gKFBpdm90KSB7XG4gICAgZnVuY3Rpb24gZ2V0WChwaXZvdCwgd2lkdGgpIHtcbiAgICAgICAgY29uc3QgeyBwaXZvdFggfSA9IHBpdm90O1xuICAgICAgICBpZiAocGl2b3RYKSB7XG4gICAgICAgICAgICByZXR1cm4gLXBpdm90WCAqIHdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBQaXZvdC5nZXRYID0gZ2V0WDtcbiAgICBmdW5jdGlvbiBnZXRZKHBpdm90LCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgeyBwaXZvdFkgfSA9IHBpdm90O1xuICAgICAgICBpZiAocGl2b3RZKSB7XG4gICAgICAgICAgICByZXR1cm4gLXBpdm90WSAqIGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgUGl2b3QuZ2V0WSA9IGdldFk7XG4gICAgZnVuY3Rpb24gaGFzVmFsdWVzKHBpdm90KSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RYLCBwaXZvdFkgfSA9IHBpdm90O1xuICAgICAgICByZXR1cm4gISFwaXZvdFggfHwgISFwaXZvdFk7XG4gICAgfVxuICAgIFBpdm90Lmhhc1ZhbHVlcyA9IGhhc1ZhbHVlcztcbn0pKFBpdm90IHx8IChQaXZvdCA9IHt9KSk7XG4iLCJjb25zdCBoYW5kbGVyc01hcCA9IHtcbiAgICBwb2ludGVyRG93bjogJ29uUG9pbnRlckRvd24nLFxuICAgIHBvaW50ZXJVcDogJ29uUG9pbnRlclVwJyxcbiAgICBwb2ludGVyTW92ZTogJ29uUG9pbnRlck1vdmUnLFxuICAgIHBvaW50ZXJDYW5jZWw6ICdvblBvaW50ZXJDYW5jZWwnLFxuICAgIHBvaW50ZXJPdmVyOiAnb25Qb2ludGVyT3ZlcicsXG4gICAgcG9pbnRlck91dDogJ29uUG9pbnRlck91dCcsXG59O1xuZXhwb3J0IHZhciBQb2ludGVyO1xuKGZ1bmN0aW9uIChQb2ludGVyKSB7XG4gICAgZnVuY3Rpb24gaXNQb2ludGVyRW5hYmxlZChwb2ludGVyKSB7XG4gICAgICAgIHJldHVybiBwb2ludGVyLnBvaW50ZXJFbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIFBvaW50ZXIuaXNQb2ludGVyRW5hYmxlZCA9IGlzUG9pbnRlckVuYWJsZWQ7XG4gICAgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChwb2ludGVyLCB0eXBlLCB4LCB5LCBnbG9iYWxYLCBnbG9iYWxZLCBpZCkge1xuICAgICAgICBjb25zdCBoYW5kbGVyTmFtZSA9IGhhbmRsZXJzTWFwW3R5cGVdO1xuICAgICAgICBpZiAoaGFuZGxlck5hbWUgJiYgcG9pbnRlcltoYW5kbGVyTmFtZV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICAgIGdsb2JhbFgsXG4gICAgICAgICAgICAgICAgZ2xvYmFsWSxcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwb2ludGVyW2hhbmRsZXJOYW1lXShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbn0pKFBvaW50ZXIgfHwgKFBvaW50ZXIgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBUcmFuc2Zvcm07XG4oZnVuY3Rpb24gKFRyYW5zZm9ybSkge1xuICAgIGZ1bmN0aW9uIGdldE1hdHJpeCh0cmFuc2Zvcm0sIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAobWF0cml4KSB7XG4gICAgICAgICAgICByZXN1bHQuYSA9IG1hdHJpeC5hID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYiA9IG1hdHJpeC5iID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuYyA9IG1hdHJpeC5jID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuZCA9IG1hdHJpeC5kID8/IDE7XG4gICAgICAgICAgICByZXN1bHQudHggPSBtYXRyaXgudHggPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IG1hdHJpeC50eSA/PyAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm90YXRpb24gfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gdHJhbnNmb3JtLnNjYWxlWCA/PyB0cmFuc2Zvcm0uc2NhbGUgPz8gMTtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gdHJhbnNmb3JtLnNjYWxlWSA/PyB0cmFuc2Zvcm0uc2NhbGUgPz8gMTtcbiAgICAgICAgcmVzdWx0LnR4ID0gdHJhbnNmb3JtLnggPz8gMDtcbiAgICAgICAgcmVzdWx0LnR5ID0gdHJhbnNmb3JtLnkgPz8gMDtcbiAgICAgICAgaWYgKHJvdGF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gICAgICAgICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihyb3RhdGlvbik7XG4gICAgICAgICAgICByZXN1bHQuYSA9IGNvcyAqIHNjYWxlWDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gc2luICogc2NhbGVYO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAtc2luICogc2NhbGVZO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBjb3MgKiBzY2FsZVk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmEgPSBzY2FsZVg7XG4gICAgICAgIHJlc3VsdC5iID0gMDtcbiAgICAgICAgcmVzdWx0LmMgPSAwO1xuICAgICAgICByZXN1bHQuZCA9IHNjYWxlWTtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldE1hdHJpeCA9IGdldE1hdHJpeDtcbiAgICBmdW5jdGlvbiBnZXRDb2xvclRyYW5zZm9ybSh0cmFuc2Zvcm0sIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybSkge1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5yZWRNdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5NdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5ibHVlTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5yZWRPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmJsdWVPZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbHBoYSA9IHRyYW5zZm9ybS5hbHBoYSA/PyAxO1xuICAgICAgICBjb25zdCB7IHRpbnQgfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKHRpbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY29sb3IgPSAwLCB2YWx1ZSA9IDEgfSA9IHRpbnQ7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZUludmVydGVkID0gMSAtIHZhbHVlO1xuICAgICAgICAgICAgY29uc3QgciA9IChjb2xvciA+PiAxNikgJiAweGZmO1xuICAgICAgICAgICAgY29uc3QgZyA9IChjb2xvciA+PiA4KSAmIDB4ZmY7XG4gICAgICAgICAgICBjb25zdCBiID0gY29sb3IgJiAweGZmO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGFscGhhO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IHZhbHVlSW52ZXJ0ZWQ7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSByICogdmFsdWU7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBnICogdmFsdWU7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGIgKiB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgeyBicmlnaHRuZXNzIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChicmlnaHRuZXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChicmlnaHRuZXNzID4gMSkge1xuICAgICAgICAgICAgICAgIGJyaWdodG5lc3MgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYnJpZ2h0bmVzcyA8IC0xKSB7XG4gICAgICAgICAgICAgICAgYnJpZ2h0bmVzcyA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IDEgLSBNYXRoLmFicyhicmlnaHRuZXNzKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgaWYgKGJyaWdodG5lc3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gYnJpZ2h0bmVzcyAqIDI1NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYTtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gcGVyY2VudDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSBwZXJjZW50O1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gcGVyY2VudDtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGFscGhhO1xuICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSAxO1xuICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSAxO1xuICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gMDtcbiAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gMDtcbiAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSAwO1xuICAgIH1cbiAgICBUcmFuc2Zvcm0uZ2V0Q29sb3JUcmFuc2Zvcm0gPSBnZXRDb2xvclRyYW5zZm9ybTtcbn0pKFRyYW5zZm9ybSB8fCAoVHJhbnNmb3JtID0ge30pKTtcbiIsImV4cG9ydCB2YXIgVXBkYXRlO1xuKGZ1bmN0aW9uIChVcGRhdGUpIHtcbiAgICBmdW5jdGlvbiBpc0VuYWJsZWQoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQuZW5hYmxlZCA/PyB0cnVlO1xuICAgIH1cbiAgICBVcGRhdGUuaXNFbmFibGVkID0gaXNFbmFibGVkO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZShjb21wb25lbnQsIHRpbWUpIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5vblVwZGF0ZSkge1xuICAgICAgICAgICAgY29tcG9uZW50Lm9uVXBkYXRlKHRpbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFVwZGF0ZS51cGRhdGUgPSB1cGRhdGU7XG59KShVcGRhdGUgfHwgKFVwZGF0ZSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRzIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmhpdFRlc3QgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMua2V5VGVzdCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSBuZXcgTWFwKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgRGVidWcgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5pbmZvcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMud2FybmluZ3MgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIGxvZyguLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gICAgfVxuICAgIGluZm8oLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLmluZm9zLmdldChpZCk7XG4gICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICB0aGlzLmluZm9zLnNldChpZCwgY291bnQpO1xuICAgIH1cbiAgICBlcnJvciguLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoYXJncyk7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuZXJyb3JzLmdldChpZCk7XG4gICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgdGhpcy5lcnJvcnMuc2V0KGlkLCBjb3VudCk7XG4gICAgfVxuICAgIHdhcm5pbmcoLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLndhcm5pbmdzLmdldChpZCk7XG4gICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICB0aGlzLndhcm5pbmdzLnNldChpZCwgY291bnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuaW1wb3J0IHsgS2V5IH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy9rZXknO1xuZXhwb3J0IGNsYXNzIEtleWJvYXJkIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBkaXNwYXRjaChldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua2V5RXZlbnQgPSBldmVudDtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDb21wb25lbnQocm9vdCk7XG4gICAgfVxuICAgIGRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFLZXkuaXNLZXlFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy5rZXlUZXN0LmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgICAgIEtleS5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgdGhpcy5rZXlFdmVudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgTG9hZGluZyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdID0gY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQocm9vdCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xufVxuIiwiaW1wb3J0IHsgTWF0cml4LCBQb2ludCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvZGlzcGxheSc7XG5pbXBvcnQgeyBQb2ludGVyIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy9wb2ludGVyJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdHJhbnNmb3JtJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFBvaW50ZXJzIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmdsb2JhbCA9IFBvaW50LmVtcHR5KCk7XG4gICAgICAgIHRoaXMubG9jYWwgPSBQb2ludC5lbXB0eSgpO1xuICAgICAgICB0aGlzLnBvaW50ZXJJZCA9IDA7XG4gICAgICAgIHRoaXMucG9pbnRlclR5cGUgPSAncG9pbnRlckRvd24nO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXTtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIG1hdHJpeDogTWF0cml4LmVtcHR5KCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXSA9IGNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIGRpc3BhdGNoKHR5cGUsIHgsIHksIGlkKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2NhbC54ID0geDtcbiAgICAgICAgdGhpcy5sb2NhbC55ID0geTtcbiAgICAgICAgdGhpcy5nbG9iYWwueCA9IHg7XG4gICAgICAgIHRoaXMuZ2xvYmFsLnkgPSB5O1xuICAgICAgICB0aGlzLnBvaW50ZXJJZCA9IGlkO1xuICAgICAgICB0aGlzLnBvaW50ZXJUeXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgTWF0cml4LnNldEVtcHR5KGJhc2UubWF0cml4KTtcbiAgICAgICAgdGhpcy5kZXB0aCsrO1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ29tcG9uZW50KHJvb3QsIGJhc2UsIGZhbHNlKTtcbiAgICB9XG4gICAgdXBkYXRlTG9jYWwoY29tcG9uZW50LCBwYXJlbnQpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBUcmFuc2Zvcm0uZ2V0TWF0cml4KGNvbXBvbmVudCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICBNYXRyaXguY29uY2F0KHBhcmVudC5tYXRyaXgsIGNvbnRleHQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgIE1hdHJpeC50cmFuc2Zvcm1JbnZlcnNlUG9pbnQoY29udGV4dC5tYXRyaXgsIHRoaXMuZ2xvYmFsLCB0aGlzLmxvY2FsKTtcbiAgICB9XG4gICAgZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBwYXJlbnQsIHBhcmVudFJlc3VsdCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFEaXNwbGF5LmlzVmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFQb2ludGVyLmlzUG9pbnRlckVuYWJsZWQoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnRSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQucG9pbnRlck92ZXIgJiYgdGhpcy5wb2ludGVyVHlwZSA9PT0gJ3BvaW50ZXJNb3ZlJykge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTG9jYWwoY29tcG9uZW50LCBwYXJlbnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5sb2NhbDtcbiAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCAncG9pbnRlck91dCcsIHgsIHksIHRoaXMuZ2xvYmFsLngsIHRoaXMuZ2xvYmFsLnksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQucG9pbnRlck92ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxvY2FsKGNvbXBvbmVudCwgcGFyZW50KTtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5sb2NhbDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgdGhpcy5wb2ludGVyVHlwZSwgeCwgeSwgdGhpcy5nbG9iYWwueCwgdGhpcy5nbG9iYWwueSwgdGhpcy5wb2ludGVySWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRlclR5cGUgPT09ICdwb2ludGVyTW92ZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmICFjb21wb25lbnQucG9pbnRlck92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdmVyJywgeCwgeSwgdGhpcy5nbG9iYWwueCwgdGhpcy5nbG9iYWwueSwgdGhpcy5wb2ludGVySWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghcmVzdWx0ICYmIGNvbXBvbmVudC5wb2ludGVyT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCAncG9pbnRlck91dCcsIHgsIHksIHRoaXMuZ2xvYmFsLngsIHRoaXMuZ2xvYmFsLnksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnBvaW50ZXJPdmVyID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0sIE1hdHJpeCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvZGlzcGxheSc7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9leHRlbnNpb25zL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgbWF0cml4OiBNYXRyaXguZW1wdHkoKSxcbiAgICAgICAgICAgICAgICBjb2xvclRyYW5zZm9ybTogQ29sb3JUcmFuc2Zvcm0uZW1wdHkoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdID0gY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgcGFyZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIURpc3BsYXkuaXNWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIFRyYW5zZm9ybS5nZXRNYXRyaXgoY29tcG9uZW50LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgIFRyYW5zZm9ybS5nZXRDb2xvclRyYW5zZm9ybShjb21wb25lbnQsIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBNYXRyaXguY29uY2F0KHBhcmVudC5tYXRyaXgsIGNvbnRleHQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgIENvbG9yVHJhbnNmb3JtLmNvbmNhdChwYXJlbnQuY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLmVuZ2luZS5wbGF0Zm9ybS5iZWdpbigpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgY29uc3QgYmFzZSA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLmRlcHRoKys7XG4gICAgICAgIE1hdHJpeC5jb3B5KHRoaXMuZW5naW5lLnNjcmVlbi5nZXRNYXRyaXgoKSwgYmFzZS5tYXRyaXgpO1xuICAgICAgICBDb2xvclRyYW5zZm9ybS5zZXRFbXB0eShiYXNlLmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQocm9vdCwgYmFzZSk7XG4gICAgICAgIHRoaXMuZW5naW5lLnBsYXRmb3JtLmVuZCgpO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydFRpbWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgdmFyIFJlc291cmNlO1xuKGZ1bmN0aW9uIChSZXNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIGdldFByb2dyZXNzKHJlc291cmNlKSB7XG4gICAgICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNvdXJjZS5sb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNvdXJjZS5ieXRlc1RvdGFsID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlLmJ5dGVzTG9hZGVkIC8gcmVzb3VyY2UuYnl0ZXNUb3RhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgUmVzb3VyY2UuZ2V0UHJvZ3Jlc3MgPSBnZXRQcm9ncmVzcztcbn0pKFJlc291cmNlIHx8IChSZXNvdXJjZSA9IHt9KSk7XG5leHBvcnQgY2xhc3MgUmVzb3VyY2VzIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlc29sdmVycyA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgZ2V0KGFzc2V0KSB7XG4gICAgICAgIGlmICghYXNzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VzLmdldChhc3NldCk7XG4gICAgICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHJlc291cmNlID0gdGhpcy5yZXNvbHZlKGFzc2V0KTtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzLnNldChhc3NldCwgcmVzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICB9XG4gICAgcmVzb2x2ZShhc3NldCkge1xuICAgICAgICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHJlc29sdmVyKGFzc2V0LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgICAgICBpZiAocmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmdpbmUuZGVidWcud2FybmluZyhgUmVzb3VyY2Ugbm90IHJlc29sdmVkOiAke2Fzc2V0fWApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNYXRyaXggfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFNjcmVlbiBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLndpZHRoID0gNDAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDQwMDtcbiAgICAgICAgdGhpcy5waXhlbFJhdGlvID0gMDtcbiAgICAgICAgdGhpcy5mdWxsc2NyZWVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWF0cml4ID0gTWF0cml4LmVtcHR5KCk7XG4gICAgfVxuICAgIGdldE1hdHJpeCgpIHtcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHRoaXMuZ2V0UGl4ZWxSYXRpbygpO1xuICAgICAgICB0aGlzLm1hdHJpeC5hID0gcGl4ZWxSYXRpbztcbiAgICAgICAgdGhpcy5tYXRyaXguZCA9IHBpeGVsUmF0aW87XG4gICAgICAgIHJldHVybiB0aGlzLm1hdHJpeDtcbiAgICB9XG4gICAgZ2V0V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZ1bGxzY3JlZW4gPyB0aGlzLmdldFdpbmRvd1dpZHRoKCkgOiB0aGlzLndpZHRoO1xuICAgIH1cbiAgICBnZXRIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZ1bGxzY3JlZW4gPyB0aGlzLmdldFdpbmRvd0hlaWdodCgpIDogdGhpcy5oZWlnaHQ7XG4gICAgfVxuICAgIGdldFBpeGVsUmF0aW8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpeGVsUmF0aW8gPiAwID8gdGhpcy5waXhlbFJhdGlvIDogdGhpcy5nZXRXaW5kb3dQaXhlbFJhdGlvKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRpY2tlciB7XG4gICAgY29uc3RydWN0b3IoZW5naW5lKSB7XG4gICAgICAgIHRoaXMuZnJhbWVSYXRlID0gMDtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9ICh0aW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS51cGRhdGVyLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmxvYWRpbmcudXBkYXRlKCk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5yZW5kZXJlci5yZW5kZXIoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVGcmFtZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSAoY3VycmVudFRpbWUgLSB0aGlzLnRpbWUpIC8gMTAwMDtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmV4dEZyYW1lKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgIH1cbiAgICBnZXQgaXNQYXVzZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhdXNlZDtcbiAgICB9XG4gICAgcGxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU5leHRGcmFtZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB1cGRhdGVOZXh0RnJhbWUoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZUZyYW1lKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBVcGRhdGUgfSBmcm9tICcuLi9leHRlbnNpb25zL3VwZGF0ZSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBVcGRhdGVyIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KHJvb3QpO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydFRpbWU7XG4gICAgfVxuICAgIHVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVXBkYXRlLmlzRW5hYmxlZChjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzKGNvbXBvbmVudCk7XG4gICAgICAgIFVwZGF0ZS51cGRhdGUoY29tcG9uZW50LCB0aGlzLnRpbWUpO1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5lbmdpbmUuY29tcG9uZW50cy51cGRhdGUuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlUHJvcGVydGllcyhjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5lbmdpbmUuY29tcG9uZW50cy5wcm9wZXJ0aWVzLmZvckVhY2goKGhhbmRsZXIsIHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50W3Byb3BlcnR5XSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvbG9hZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9lbmdpbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9jb21wb25lbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvZGVidWcnO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9wbGF0Zm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3BvaW50ZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcmVuZGVyZXInO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9yZXNvdXJjZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9zY3JlZW4nO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy90aWNrZXInO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy91cGRhdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9kaXNwbGF5JztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9waXZvdCc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvcG9pbnRlcic7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvc291cmNlJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy90cmFuc2Zvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3VwZGF0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMva2V5JztcbiIsImV4cG9ydCB2YXIgQm91bmRzO1xuKGZ1bmN0aW9uIChCb3VuZHMpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1pblg6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtaW5ZOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWF4WDogTnVtYmVyLk1JTl9WQUxVRSxcbiAgICAgICAgICAgIG1heFk6IE51bWJlci5NSU5fVkFMVUUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIEJvdW5kcy5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KGJvdW5kcykge1xuICAgICAgICBib3VuZHMubWluWCA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGJvdW5kcy5taW5ZID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1heFggPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWF4WSA9IE51bWJlci5NSU5fVkFMVUU7XG4gICAgfVxuICAgIEJvdW5kcy5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkoYm91bmRzKSB7XG4gICAgICAgIHJldHVybiBib3VuZHMubWluWCA9PT0gTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1pblkgPT09IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5tYXhYID09PSBOdW1iZXIuTUlOX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWF4WSA9PT0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICB9XG4gICAgQm91bmRzLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIHRvUmVjdGFuZ2xlKGJvdW5kcywgcmVjdGFuZ2xlKSB7XG4gICAgICAgIGNvbnN0IHsgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgfSA9IGJvdW5kcztcbiAgICAgICAgcmVjdGFuZ2xlLnggPSBtaW5YO1xuICAgICAgICByZWN0YW5nbGUueSA9IG1pblk7XG4gICAgICAgIHJlY3RhbmdsZS53aWR0aCA9IG1heFggLSBtaW5YO1xuICAgICAgICByZWN0YW5nbGUuaGVpZ2h0ID0gbWF4WSAtIG1pblk7XG4gICAgfVxuICAgIEJvdW5kcy50b1JlY3RhbmdsZSA9IHRvUmVjdGFuZ2xlO1xuICAgIGZ1bmN0aW9uIHRlc3RYKGJvdW5kcywgeCkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RYID0gdGVzdFg7XG4gICAgZnVuY3Rpb24gdGVzdFkoYm91bmRzLCB5KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFkgPSB0ZXN0WTtcbiAgICBmdW5jdGlvbiB0ZXN0KGJvdW5kcywgeCwgeSkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0ID0gdGVzdDtcbiAgICBmdW5jdGlvbiB0ZXN0UG9pbnQoYm91bmRzLCBwb2ludCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0UG9pbnQgPSB0ZXN0UG9pbnQ7XG59KShCb3VuZHMgfHwgKEJvdW5kcyA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIENvbG9yVHJhbnNmb3JtO1xuKGZ1bmN0aW9uIChDb2xvclRyYW5zZm9ybSkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxwaGFNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgcmVkTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGdyZWVuTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGJsdWVNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYWxwaGFPZmZzZXQ6IDAsXG4gICAgICAgICAgICByZWRPZmZzZXQ6IDAsXG4gICAgICAgICAgICBncmVlbk9mZnNldDogMCxcbiAgICAgICAgICAgIGJsdWVPZmZzZXQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShjdCkge1xuICAgICAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5NdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ibHVlTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYWxwaGFNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5yZWRPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmdyZWVuT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ibHVlT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU9mZnNldCA9PT0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eVdpdGhBbHBoYShjdCkge1xuICAgICAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5NdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ibHVlTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYmx1ZU9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmlzRW1wdHlXaXRoQWxwaGEgPSBpc0VtcHR5V2l0aEFscGhhO1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KGN0KSB7XG4gICAgICAgIGN0LnJlZE11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5ncmVlbk11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5ibHVlTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LmFscGhhTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LnJlZE9mZnNldCA9IDA7XG4gICAgICAgIGN0LmdyZWVuT2Zmc2V0ID0gMDtcbiAgICAgICAgY3QuYmx1ZU9mZnNldCA9IDA7XG4gICAgICAgIGN0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KGZyb20sIHRvKSB7XG4gICAgICAgIHRvLmFscGhhTXVsdGlwbGllciA9IGZyb20uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICB0by5yZWRNdWx0aXBsaWVyID0gZnJvbS5yZWRNdWx0aXBsaWVyO1xuICAgICAgICB0by5ncmVlbk11bHRpcGxpZXIgPSBmcm9tLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgdG8uYmx1ZU11bHRpcGxpZXIgPSBmcm9tLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICB0by5hbHBoYU9mZnNldCA9IGZyb20uYWxwaGFPZmZzZXQ7XG4gICAgICAgIHRvLnJlZE9mZnNldCA9IGZyb20ucmVkT2Zmc2V0O1xuICAgICAgICB0by5ncmVlbk9mZnNldCA9IGZyb20uZ3JlZW5PZmZzZXQ7XG4gICAgICAgIHRvLmJsdWVPZmZzZXQgPSBmcm9tLmJsdWVPZmZzZXQ7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIGNvbmNhdChjdDEsIGN0MCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGFscGhhTXVsdGlwbGllciA9IGN0MS5hbHBoYU11bHRpcGxpZXIgKiBjdDAuYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCByZWRNdWx0aXBsaWVyID0gY3QxLnJlZE11bHRpcGxpZXIgKiBjdDAucmVkTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgZ3JlZW5NdWx0aXBsaWVyID0gY3QxLmdyZWVuTXVsdGlwbGllciAqIGN0MC5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGJsdWVNdWx0aXBsaWVyID0gY3QxLmJsdWVNdWx0aXBsaWVyICogY3QwLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBhbHBoYU9mZnNldCA9IGN0MS5hbHBoYU11bHRpcGxpZXIgKiBjdDAuYWxwaGFPZmZzZXQgKyBjdDEuYWxwaGFPZmZzZXQ7XG4gICAgICAgIGNvbnN0IHJlZE9mZnNldCA9IGN0MS5yZWRNdWx0aXBsaWVyICogY3QwLnJlZE9mZnNldCArIGN0MS5yZWRPZmZzZXQ7XG4gICAgICAgIGNvbnN0IGdyZWVuT2Zmc2V0ID0gY3QxLmdyZWVuTXVsdGlwbGllciAqIGN0MC5ncmVlbk9mZnNldCArIGN0MS5ncmVlbk9mZnNldDtcbiAgICAgICAgY29uc3QgYmx1ZU9mZnNldCA9IGN0MS5ibHVlTXVsdGlwbGllciAqIGN0MC5ibHVlT2Zmc2V0ICsgY3QxLmJsdWVPZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gcmVkTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IGdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IGFscGhhT2Zmc2V0O1xuICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gcmVkT2Zmc2V0O1xuICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBncmVlbk9mZnNldDtcbiAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBibHVlT2Zmc2V0O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5jb25jYXQgPSBjb25jYXQ7XG59KShDb2xvclRyYW5zZm9ybSB8fCAoQ29sb3JUcmFuc2Zvcm0gPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9jb2xvci10cmFuc2Zvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9ib3VuZHMnO1xuZXhwb3J0ICogZnJvbSAnLi9tYXRyaXgnO1xuZXhwb3J0ICogZnJvbSAnLi9wb2ludCc7XG5leHBvcnQgKiBmcm9tICcuL3JlY3RhbmdsZSc7XG4iLCJleHBvcnQgdmFyIE1hdHJpeDtcbihmdW5jdGlvbiAoTWF0cml4KSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiAxLFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGM6IDAsXG4gICAgICAgICAgICBkOiAxLFxuICAgICAgICAgICAgdHg6IDAsXG4gICAgICAgICAgICB0eTogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTWF0cml4LmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShtYXRyaXgpIHtcbiAgICAgICAgcmV0dXJuIG1hdHJpeC5hID09PSAxXG4gICAgICAgICAgICAmJiBtYXRyaXguYiA9PT0gMFxuICAgICAgICAgICAgJiYgbWF0cml4LmMgPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC5kID09PSAxXG4gICAgICAgICAgICAmJiBtYXRyaXgudHggPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC50eSA9PT0gMDtcbiAgICB9XG4gICAgTWF0cml4LmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KG1hdHJpeCkge1xuICAgICAgICBtYXRyaXguYSA9IDE7XG4gICAgICAgIG1hdHJpeC5iID0gMDtcbiAgICAgICAgbWF0cml4LmMgPSAwO1xuICAgICAgICBtYXRyaXguZCA9IDE7XG4gICAgICAgIG1hdHJpeC50eCA9IDA7XG4gICAgICAgIG1hdHJpeC50eSA9IDA7XG4gICAgfVxuICAgIE1hdHJpeC5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoZnJvbSwgdG8pIHtcbiAgICAgICAgdG8uYSA9IGZyb20uYTtcbiAgICAgICAgdG8uYiA9IGZyb20uYjtcbiAgICAgICAgdG8uYyA9IGZyb20uYztcbiAgICAgICAgdG8uZCA9IGZyb20uZDtcbiAgICAgICAgdG8udHggPSBmcm9tLnR4O1xuICAgICAgICB0by50eSA9IGZyb20udHk7XG4gICAgfVxuICAgIE1hdHJpeC5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBjb25jYXQobWF0cml4MCwgbWF0cml4MSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGEgPSBtYXRyaXgxLmEgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmM7XG4gICAgICAgIGNvbnN0IGIgPSBtYXRyaXgxLmEgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmQ7XG4gICAgICAgIGNvbnN0IGMgPSBtYXRyaXgxLmMgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmM7XG4gICAgICAgIGNvbnN0IGQgPSBtYXRyaXgxLmMgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmQ7XG4gICAgICAgIGNvbnN0IHR4ID0gbWF0cml4MS50eCAqIG1hdHJpeDAuYSArIG1hdHJpeDEudHkgKiBtYXRyaXgwLmMgKyBtYXRyaXgwLnR4O1xuICAgICAgICBjb25zdCB0eSA9IG1hdHJpeDEudHggKiBtYXRyaXgwLmIgKyBtYXRyaXgxLnR5ICogbWF0cml4MC5kICsgbWF0cml4MC50eTtcbiAgICAgICAgcmVzdWx0LmEgPSBhO1xuICAgICAgICByZXN1bHQuYiA9IGI7XG4gICAgICAgIHJlc3VsdC5jID0gYztcbiAgICAgICAgcmVzdWx0LmQgPSBkO1xuICAgICAgICByZXN1bHQudHggPSB0eDtcbiAgICAgICAgcmVzdWx0LnR5ID0gdHk7XG4gICAgfVxuICAgIE1hdHJpeC5jb25jYXQgPSBjb25jYXQ7XG4gICAgZnVuY3Rpb24gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KSB7XG4gICAgICAgIHJldHVybiBtYXRyaXguYSAqIG1hdHJpeC5kIC0gbWF0cml4LmIgKiBtYXRyaXguYztcbiAgICB9XG4gICAgTWF0cml4LmdldERldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQ7XG4gICAgZnVuY3Rpb24gaW52ZXJ0KG1hdHJpeCwgcmVzdWx0KSB7XG4gICAgICAgIGxldCBkZXRlcm1pbmFudCA9IGdldERldGVybWluYW50KG1hdHJpeCk7XG4gICAgICAgIGlmIChkZXRlcm1pbmFudCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0LmEgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gLW1hdHJpeC50eDtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IC1tYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCA9IDEuMCAvIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBtYXRyaXguYSAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmIgPSAtbWF0cml4LmIgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gLW1hdHJpeC5jICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuZCA9IG1hdHJpeC5kICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQudHggPSAtcmVzdWx0LmEgKiBtYXRyaXgudHggLSByZXN1bHQuYyAqIG1hdHJpeC50eTtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IC1yZXN1bHQuYiAqIG1hdHJpeC50eCAtIHJlc3VsdC5kICogbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hdHJpeC5pbnZlcnQgPSBpbnZlcnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJlc3VsdC54ID0geCAqIG1hdHJpeC5hICsgeSAqIG1hdHJpeC5jICsgbWF0cml4LnR4O1xuICAgICAgICByZXN1bHQueSA9IHggKiBtYXRyaXguYiArIHkgKiBtYXRyaXguZCArIG1hdHJpeC50eTtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybVBvaW50ID0gdHJhbnNmb3JtUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnRMb2NhbChtYXRyaXgsIHBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmVzdWx0LnggPSB4ICogbWF0cml4LmEgKyB5ICogbWF0cml4LmM7XG4gICAgICAgIHJlc3VsdC55ID0geCAqIG1hdHJpeC5iICsgeSAqIG1hdHJpeC5kO1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnRMb2NhbCA9IHRyYW5zZm9ybVBvaW50TG9jYWw7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtSW52ZXJzZVBvaW50KG1hdHJpeCwgcG9pbnQsIHJlc3VsdCkge1xuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudChtYXRyaXgpO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC54ID0gLW1hdHJpeC50eDtcbiAgICAgICAgICAgIHJlc3VsdC55ID0gLW1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRldGVybWluYW50ID0gMSAvIGRldGVybWluYW50O1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgICAgIHJlc3VsdC54ID0gZGV0ZXJtaW5hbnQgKiAobWF0cml4LmMgKiAobWF0cml4LnR5IC0geSkgKyBtYXRyaXguZCAqICh4IC0gbWF0cml4LnR4KSk7XG4gICAgICAgICAgICByZXN1bHQueSA9IGRldGVybWluYW50ICogKG1hdHJpeC5hICogKHkgLSBtYXRyaXgudHkpICsgbWF0cml4LmIgKiAobWF0cml4LnR4IC0geCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1JbnZlcnNlUG9pbnQgPSB0cmFuc2Zvcm1JbnZlcnNlUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtQm91bmRzKG1hdHJpeCwgYm91bmRzLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBhLCBiLCBjLCBkLCB0eCwgdHksIH0gPSBtYXRyaXg7XG4gICAgICAgIGNvbnN0IHJ4ID0gYm91bmRzLng7XG4gICAgICAgIGNvbnN0IHJ5ID0gYm91bmRzLnk7XG4gICAgICAgIGNvbnN0IHJyID0gcnggKyBib3VuZHMud2lkdGg7XG4gICAgICAgIGNvbnN0IHJiID0gcnkgKyBib3VuZHMuaGVpZ2h0O1xuICAgICAgICBjb25zdCBueDEgPSByeCAqIGEgKyByeSAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkxID0gcnggKiBiICsgcnkgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54MiA9IHJyICogYSArIHJ5ICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTIgPSByciAqIGIgKyByeSAqIGQgKyB0eTtcbiAgICAgICAgY29uc3QgbngzID0gcnIgKiBhICsgcmIgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MyA9IHJyICogYiArIHJiICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDQgPSByeCAqIGEgKyByYiAqIGMgKyB0eDtcbiAgICAgICAgY29uc3Qgbnk0ID0gcnggKiBiICsgcmIgKiBkICsgdHk7XG4gICAgICAgIGxldCBsZWZ0ID0gbngxO1xuICAgICAgICBpZiAobGVmdCA+IG54Mikge1xuICAgICAgICAgICAgbGVmdCA9IG54MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54Mykge1xuICAgICAgICAgICAgbGVmdCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54NCkge1xuICAgICAgICAgICAgbGVmdCA9IG54NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9wID0gbnkxO1xuICAgICAgICBpZiAodG9wID4gbnkyKSB7XG4gICAgICAgICAgICB0b3AgPSBueTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcCA+IG55Mykge1xuICAgICAgICAgICAgdG9wID0gbnkzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3AgPiBueTQpIHtcbiAgICAgICAgICAgIHRvcCA9IG55NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmlnaHQgPSBueDE7XG4gICAgICAgIGlmIChyaWdodCA8IG54Mikge1xuICAgICAgICAgICAgcmlnaHQgPSBueDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0IDwgbngzKSB7XG4gICAgICAgICAgICByaWdodCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgPCBueDQpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbng0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBib3R0b20gPSBueTE7XG4gICAgICAgIGlmIChib3R0b20gPCBueTIpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tIDwgbnkzKSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdHRvbSA8IG55NCkge1xuICAgICAgICAgICAgYm90dG9tID0gbnk0O1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC54ID0gbGVmdDtcbiAgICAgICAgcmVzdWx0LnkgPSB0b3A7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGJvdHRvbSAtIHRvcDtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybUJvdW5kcyA9IHRyYW5zZm9ybUJvdW5kcztcbn0pKE1hdHJpeCB8fCAoTWF0cml4ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUG9pbnQ7XG4oZnVuY3Rpb24gKFBvaW50KSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG4gICAgUG9pbnQuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBsZW5ndGgocG9pbnQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9XG4gICAgUG9pbnQubGVuZ3RoID0gbGVuZ3RoO1xuICAgIGZ1bmN0aW9uIGFuZ2xlKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHBvaW50LnksIHBvaW50LngpO1xuICAgIH1cbiAgICBQb2ludC5hbmdsZSA9IGFuZ2xlO1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMDtcbiAgICB9XG4gICAgUG9pbnQuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gZXF1YWxzKHBvaW50MCwgcG9pbnQxKSB7XG4gICAgICAgIHJldHVybiBwb2ludDAueCA9PT0gcG9pbnQxLnggJiYgcG9pbnQwLnkgPT09IHBvaW50MS55O1xuICAgIH1cbiAgICBQb2ludC5lcXVhbHMgPSBlcXVhbHM7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkocG9pbnQpIHtcbiAgICAgICAgcG9pbnQueCA9IDA7XG4gICAgICAgIHBvaW50LnkgPSAwO1xuICAgIH1cbiAgICBQb2ludC5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LnggPSBzb3VyY2UueDtcbiAgICAgICAgdGFyZ2V0LnkgPSBzb3VyY2UueTtcbiAgICB9XG4gICAgUG9pbnQuY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gbm9ybWFsaXplKHBvaW50LCB0aGlja25lc3MpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gbGVuZ3RoKHBvaW50KTtcbiAgICAgICAgaWYgKHZhbHVlID4gMCkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlja25lc3MgLyB2YWx1ZTtcbiAgICAgICAgICAgIHBvaW50LnggKj0gdmFsdWU7XG4gICAgICAgICAgICBwb2ludC55ICo9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBvaW50Lm5vcm1hbGl6ZSA9IG5vcm1hbGl6ZTtcbiAgICBmdW5jdGlvbiBkaXN0YW5jZShwb2ludDAsIHBvaW50MSkge1xuICAgICAgICBjb25zdCBkeCA9IHBvaW50MC54IC0gcG9pbnQxLng7XG4gICAgICAgIGNvbnN0IGR5ID0gcG9pbnQwLnkgLSBwb2ludDEueTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuICAgIFBvaW50LmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgZnVuY3Rpb24gaW50ZXJwb2xhdGUoYmVnaW4sIGVuZCwgdmFsdWUsIHJlc3VsdCkge1xuICAgICAgICByZXN1bHQueCA9IGJlZ2luLnggKyB2YWx1ZSAqIChlbmQueCAtIGJlZ2luLngpO1xuICAgICAgICByZXN1bHQueSA9IGJlZ2luLnkgKyB2YWx1ZSAqIChlbmQueSAtIGJlZ2luLnkpO1xuICAgIH1cbiAgICBQb2ludC5pbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlO1xuICAgIGZ1bmN0aW9uIHBvbGFyKHBvaW50LCBsZW5ndGgsIGFuZ2xlKSB7XG4gICAgICAgIHBvaW50LnggPSBsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIHBvaW50LnkgPSBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgfVxuICAgIFBvaW50LnBvbGFyID0gcG9sYXI7XG59KShQb2ludCB8fCAoUG9pbnQgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBSZWN0YW5nbGU7XG4oZnVuY3Rpb24gKFJlY3RhbmdsZSkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJlY3RhbmdsZS54ID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLnkgPSAwO1xuICAgICAgICByZWN0YW5nbGUud2lkdGggPSAwO1xuICAgICAgICByZWN0YW5nbGUuaGVpZ2h0ID0gMDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gaW50ZXJzZWN0aW9uKHNvdXJjZSwgdGFyZ2V0LCByZXN1bHQpIHtcbiAgICAgICAgbGV0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCwgfSA9IHNvdXJjZTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRhcmdldC54O1xuICAgICAgICBjb25zdCB0b3AgPSB0YXJnZXQueTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0YXJnZXQueCArIHRhcmdldC53aWR0aDtcbiAgICAgICAgY29uc3QgYm90dG9tID0gdGFyZ2V0LnkgKyB0YXJnZXQuaGVpZ2h0O1xuICAgICAgICBpZiAoeCA8IGxlZnQpIHtcbiAgICAgICAgICAgIHdpZHRoIC09IGxlZnQgLSB4O1xuICAgICAgICAgICAgeCA9IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggKyB3aWR0aCA+IHJpZ2h0KSB7XG4gICAgICAgICAgICB3aWR0aCA9IHJpZ2h0IC0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSA8IHRvcCkge1xuICAgICAgICAgICAgaGVpZ2h0IC09IHRvcCAtIHk7XG4gICAgICAgICAgICB5ID0gdG9wO1xuICAgICAgICB9XG4gICAgICAgIGlmICh5ICsgaGVpZ2h0ID4gYm90dG9tKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBib3R0b20gLSB5O1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aWR0aCA8IDApIHtcbiAgICAgICAgICAgIHdpZHRoID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQueCA9IHg7XG4gICAgICAgIHJlc3VsdC55ID0geTtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5pbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb247XG4gICAgZnVuY3Rpb24gaXNFbXB0eShyZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZS53aWR0aCA9PT0gMCB8fCByZWN0YW5nbGUuaGVpZ2h0ID09PSAwO1xuICAgIH1cbiAgICBSZWN0YW5nbGUuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gY29udGFpbnMocmVjdGFuZ2xlLCBwb2ludCkge1xuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlLnggPCBwb2ludC54XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueCArIHJlY3RhbmdsZS53aWR0aCA+IHBvaW50LnhcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS55IDwgcG9pbnQueVxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnkgKyByZWN0YW5nbGUuaGVpZ2h0ID4gcG9pbnQueTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmNvbnRhaW5zID0gY29udGFpbnM7XG4gICAgZnVuY3Rpb24gcm91bmQocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJlY3RhbmdsZS54ID0gTWF0aC5yb3VuZChyZWN0YW5nbGUueCk7XG4gICAgICAgIHJlY3RhbmdsZS55ID0gTWF0aC5yb3VuZChyZWN0YW5nbGUueSk7XG4gICAgICAgIHJlY3RhbmdsZS53aWR0aCA9IE1hdGgucm91bmQocmVjdGFuZ2xlLndpZHRoKTtcbiAgICAgICAgcmVjdGFuZ2xlLmhlaWdodCA9IE1hdGgucm91bmQocmVjdGFuZ2xlLmhlaWdodCk7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5yb3VuZCA9IHJvdW5kO1xufSkoUmVjdGFuZ2xlIHx8IChSZWN0YW5nbGUgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXgsIFJlY3RhbmdsZSB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgSW1hZ2VFeHRlbnNpb24sIElNQUdFIH0gZnJvbSAnLi9pbWFnZSc7XG5jb25zdCBib3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmNvbnN0IHNjcmVlbkJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IGltYWdlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IGNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gZW5naW5lLnBsYXRmb3JtO1xuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBwbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgICAgICBpZiAoQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eVdpdGhBbHBoYShjb2xvclRyYW5zZm9ybSkpIHtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tQ29udGV4dCA9IHBsYXRmb3JtLmNyZWF0ZUN1c3RvbUNvbnRleHQoKTtcbiAgICAgICAgICAgIGJvdW5kcy54ID0geDtcbiAgICAgICAgICAgIGJvdW5kcy55ID0geTtcbiAgICAgICAgICAgIGJvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgYm91bmRzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Cb3VuZHMobWF0cml4LCBib3VuZHMsIGJvdW5kcyk7XG4gICAgICAgICAgICBpZiAoUmVjdGFuZ2xlLmlzRW1wdHkoYm91bmRzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNjcmVlbkJvdW5kcy53aWR0aCA9IGN1c3RvbUNvbnRleHQuY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgc2NyZWVuQm91bmRzLmhlaWdodCA9IGN1c3RvbUNvbnRleHQuY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5pbnRlcnNlY3Rpb24oYm91bmRzLCBzY3JlZW5Cb3VuZHMsIGJvdW5kcyk7XG4gICAgICAgICAgICBpZiAoUmVjdGFuZ2xlLmlzRW1wdHkoYm91bmRzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJlY3RhbmdsZS5yb3VuZChib3VuZHMpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuY2xlYXJSZWN0KGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBjdXN0b21Db250ZXh0LmdldEltYWdlRGF0YShib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBjb25zdCBybSA9IGNvbG9yVHJhbnNmb3JtLnJlZE11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBnbSA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IGJtID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBhbSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IHJvID0gY29sb3JUcmFuc2Zvcm0ucmVkT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgZ28gPSBjb2xvclRyYW5zZm9ybS5ncmVlbk9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGJvID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGFvID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFPZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGltYWdlRGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBkYXRhO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIHJtICsgcm87XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGdtICsgZ287XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGJtICsgYm87XG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGFtICsgYW87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIGJvdW5kcy54LCBib3VuZHMueSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZShjdXN0b21Db250ZXh0LmNhbnZhcywgYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQsIGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHBsYXRmb3JtLmRlc3Ryb3lDdXN0b21Db250ZXh0KGN1c3RvbUNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIEltYWdlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChJTUFHRSwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gfHwgKENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSB9IGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0IHZhciBDYW52YXNJbWFnZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzSW1hZ2VFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBlbmdpbmUucGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIEltYWdlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChJTUFHRSwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNJbWFnZUV4dGVuc2lvbiB8fCAoQ2FudmFzSW1hZ2VFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QsIFJlc291cmNlLCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcbmV4cG9ydCBjb25zdCBJTUFHRSA9ICdpbWFnZSc7XG5leHBvcnQgdmFyIEltYWdlO1xuKGZ1bmN0aW9uIChJbWFnZSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhpbWFnZSwgYm91bmRzLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IGltYWdlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgICAgIGJvdW5kcy54ID0geDtcbiAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgYm91bmRzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgSW1hZ2UuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoSW1hZ2UgfHwgKEltYWdlID0ge30pKTtcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBJbWFnZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoSW1hZ2VFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBsb2NhbCB9ID0gZW5naW5lLnBvaW50ZXJzO1xuICAgICAgICBJbWFnZS5jYWxjdWxhdGVCb3VuZHMoaW1hZ2UsIGJvdW5kcywgZW5naW5lKTtcbiAgICAgICAgbGV0IGNvbnRhaW5zID0gUmVjdGFuZ2xlLmNvbnRhaW5zKGJvdW5kcywgbG9jYWwpO1xuICAgICAgICBpZiAoY29udGFpbnMpIHtcbiAgICAgICAgICAgIGlmIChpbWFnZS5wb2ludGVyVGVzdFNoYXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChpbWFnZS5zcmMpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IGxvY2FsLnggLSBib3VuZHMueDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IGxvY2FsLnkgLSBib3VuZHMueTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc291cmNlLmltYWdlIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhc0NvbnRleHQgPSByZXNvdXJjZS5pbWFnZS5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gY2FudmFzQ29udGV4dC5nZXRJbWFnZURhdGEoeCwgeSwgMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWlucyA9IGltYWdlRGF0YS5kYXRhWzNdID4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXRmb3JtID0gZW5naW5lLnBsYXRmb3JtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VzdG9tQ29udGV4dCA9IHBsYXRmb3JtLmNyZWF0ZUN1c3RvbUNvbnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21Db250ZXh0LmNsZWFyUmVjdCgwLCAwLCAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5LCAxLCAxLCAwLCAwLCAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGN1c3RvbUNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbnMgPSBpbWFnZURhdGEuZGF0YVszXSA+IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybS5kZXN0cm95Q3VzdG9tQ29udGV4dChjdXN0b21Db250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbnMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5zO1xuICAgIH1cbiAgICBJbWFnZUV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBsb2FkZWQoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLmxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSBSZXNvdXJjZS5nZXRQcm9ncmVzcyhyZXNvdXJjZSk7XG4gICAgICAgIGNvbnRleHQubG9hZGVkID0gISFyZXNvdXJjZT8ubG9hZGVkICYmICEhcmVzb3VyY2U/LmltYWdlO1xuICAgIH1cbiAgICBJbWFnZUV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoSU1BR0UsIGhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KElNQUdFLCBsb2FkZWQpO1xuICAgICAgICBJbWFnZVJlc291cmNlLmluaXQoZW5naW5lKTtcbiAgICB9XG4gICAgSW1hZ2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShJbWFnZUV4dGVuc2lvbiB8fCAoSW1hZ2VFeHRlbnNpb24gPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy1pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy1pbWFnZS1jb2xvcic7XG4iLCJleHBvcnQgdmFyIEltYWdlUmVzb3VyY2U7XG4oZnVuY3Rpb24gKEltYWdlUmVzb3VyY2UpIHtcbiAgICBmdW5jdGlvbiByZXNvbHZlKGFzc2V0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gYXNzZXQuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgICAgc3dpdGNoIChleHRlbnNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3BuZyc6XG4gICAgICAgICAgICBjYXNlICdqcGcnOlxuICAgICAgICAgICAgY2FzZSAnd2VicCc6XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBieXRlc0xvYWRlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNUb3RhbDogMCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gYXNzZXQ7XG4gICAgICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcubG9nKGBpbWFnZSBsb2FkZWQ6ICR7YXNzZXR9YCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmltYWdlID0gaW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ2ltYWdlIGxvYWQgZXJyb3InLCBlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIEltYWdlUmVzb3VyY2UucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLnJlc291cmNlcy5yZXNvbHZlcnMuYWRkKHJlc29sdmUpO1xuICAgIH1cbiAgICBJbWFnZVJlc291cmNlLmluaXQgPSBpbml0O1xufSkoSW1hZ2VSZXNvdXJjZSB8fCAoSW1hZ2VSZXNvdXJjZSA9IHt9KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2ltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vc3RyaW5nJztcbiIsImV4cG9ydCB2YXIgU3RyaW5nUmVzb3VyY2U7XG4oZnVuY3Rpb24gKFN0cmluZ1Jlc291cmNlKSB7XG4gICAgZnVuY3Rpb24gcmVzb2x2ZShhc3NldCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGFzc2V0LnNwbGl0KCcuJykucG9wKCk7XG4gICAgICAgIHN3aXRjaCAoZXh0ZW5zaW9uKSB7XG4gICAgICAgICAgICBjYXNlICd0eHQnOlxuICAgICAgICAgICAgY2FzZSAnanNvbic6XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBieXRlc0xvYWRlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNUb3RhbDogMCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCBhc3NldCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5ieXRlc0xvYWRlZCA9IGUubG9hZGVkO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5ieXRlc1RvdGFsID0gZS50b3RhbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy5sb2coYHN0cmluZyBsb2FkZWQ6ICR7YXNzZXR9YCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmRhdGEgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5ieXRlc0xvYWRlZCA9IHJlc291cmNlLmJ5dGVzVG90YWw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdzdHJpbmcgbG9hZCBlcnJvcicsIGUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBTdHJpbmdSZXNvdXJjZS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb2x2ZSk7XG4gICAgfVxuICAgIFN0cmluZ1Jlc291cmNlLmluaXQgPSBpbml0O1xufSkoU3RyaW5nUmVzb3VyY2UgfHwgKFN0cmluZ1Jlc291cmNlID0ge30pKTtcbiIsImltcG9ydCB7IFJlc291cmNlLCBDb250YWluZXJFeHRlbnNpb24sIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBTdHJpbmdSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5leHBvcnQgY29uc3QgU0NFTkUgPSAnc2NlbmUnO1xuZXhwb3J0IHZhciBTY2VuZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoU2NlbmVFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBsb2FkZWQoc2NlbmUsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLmxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICBpZiAoc2NlbmUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIENvbnRhaW5lckV4dGVuc2lvbi5sb2FkZWQoc2NlbmUsIGVuZ2luZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB7IHNyYyB9ID0gc2NlbmU7XG4gICAgICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gUmVzb3VyY2UuZ2V0UHJvZ3Jlc3MocmVzb3VyY2UpO1xuICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSAhIXJlc291cmNlPy5sb2FkZWQgJiYgISFyZXNvdXJjZT8uZGF0YTtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZSAmJiByZXNvdXJjZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUuY2hpbGRyZW4gPSBKU09OLnBhcnNlKHJlc291cmNlLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZyhgc2NlbmUgcGFyc2luZyBlcnJvcjogJHtlLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFNjZW5lRXh0ZW5zaW9uLmxvYWRlZCA9IGxvYWRlZDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChTQ0VORSwgQ29udGFpbmVyRXh0ZW5zaW9uLmhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KFNDRU5FLCBDb250YWluZXJFeHRlbnNpb24ucmVuZGVyKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLnNldChTQ0VORSwgQ29udGFpbmVyRXh0ZW5zaW9uLnVwZGF0ZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5zZXQoU0NFTkUsIGxvYWRlZCk7XG4gICAgICAgIFN0cmluZ1Jlc291cmNlLmluaXQoZW5naW5lKTtcbiAgICB9XG4gICAgU2NlbmVFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShTY2VuZUV4dGVuc2lvbiB8fCAoU2NlbmVFeHRlbnNpb24gPSB7fSkpO1xuIiwiY29uc3QgUElfMiA9IE1hdGguUEkgKiAyO1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5RWxsaXBzZShkYXRhLCBoYXNGaWxsLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHJhZGl1cyA9IDAsIHJhZGl1c1gsIHJhZGl1c1ksIH0gPSBkYXRhO1xuICAgIGNvbnN0IHJ4ID0gcmFkaXVzWCA/PyByYWRpdXM7XG4gICAgY29uc3QgcnkgPSByYWRpdXNZID8/IHJhZGl1cztcbiAgICBpZiAocnggPT09IDAgfHwgcnkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQuZWxsaXBzZSh4LCB5LCByeCwgcnksIDAsIDAsIFBJXzIpO1xuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q29tbWFuZChjb21tYW5kLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBjb21tYW5kO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtb3ZlVG8nOlxuICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKG1vdmVUby54ID8/IDAsIG1vdmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2xpbmVUbyc6XG4gICAgICAgICAgICBjb25zdCBsaW5lVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8obGluZVRvLnggPz8gMCwgbGluZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3VydmVUbyc6XG4gICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyhjdXJ2ZVRvLmN4ID8/IDAsIGN1cnZlVG8uY3kgPz8gMCwgY3VydmVUby54ID8/IDAsIGN1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjdWJpY0N1cnZlVG8nOlxuICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQuYmV6aWVyQ3VydmVUbyhjdWJpY0N1cnZlVG8uY3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLmN5ID8/IDAsIGN1YmljQ3VydmVUby5zeCA/PyAwLCBjdWJpY0N1cnZlVG8uc3kgPz8gMCwgY3ViaWNDdXJ2ZVRvLnggPz8gMCwgY3ViaWNDdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBhdGgoZGF0YSwgaGFzRmlsbCwgY29udGV4dCkge1xuICAgIGlmICghZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gZGF0YVtpXTtcbiAgICAgICAgYXBwbHlDb21tYW5kKGNvbW1hbmQsIGNvbnRleHQpO1xuICAgIH1cbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhcHBseVJlY3RhbmdsZShkYXRhLCBoYXNGaWxsLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHdpZHRoID0gMCwgaGVpZ2h0ID0gMCwgfSA9IGRhdGE7XG4gICAgaWYgKHdpZHRoID09PSAwIHx8IGhlaWdodCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IE1hdHJpeCwgUG9pbnQsIFJlY3RhbmdsZSwgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IFNoYXBlRXh0ZW5zaW9uLCBTSEFQRSwgU2hhcGUgfSBmcm9tICcuLi9zaGFwZSc7XG5pbXBvcnQgeyBhcHBseVJlY3RhbmdsZSB9IGZyb20gJy4vcmVjdGFuZ2xlJztcbmltcG9ydCB7IGFwcGx5RWxsaXBzZSB9IGZyb20gJy4vZWxsaXBzZSc7XG5pbXBvcnQgeyBhcHBseVBhdGggfSBmcm9tICcuL3BhdGgnO1xuaW1wb3J0IHsgYXBwbHlTdHJpbmcgfSBmcm9tICcuL3N0cmluZyc7XG5pbXBvcnQgeyBzZXRGaWxsU3R5bGUsIHNldFN0cm9rZVN0eWxlIH0gZnJvbSAnLi9zdHlsZSc7XG5jb25zdCBib3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmNvbnN0IG9mZnNldCA9IFBvaW50LmVtcHR5KCk7XG5mdW5jdGlvbiByZW5kZXJHcmFwaGljcyhkYXRhLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgY29uc3QgeyBmaWxsLCBzdHJva2UgfSA9IGRhdGE7XG4gICAgY29uc3QgaGFzRmlsbCA9ICEhZmlsbCB8fCBmaWxsID09PSAwO1xuICAgIGNvbnN0IGhhc1N0cm9rZSA9ICEhc3Ryb2tlIHx8IHN0cm9rZSA9PT0gMDtcbiAgICBpZiAoIWhhc0ZpbGwgJiYgIWhhc1N0cm9rZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBleGlzdCA9IHRydWU7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBkYXRhO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdyZWN0YW5nbGUnOlxuICAgICAgICAgICAgZXhpc3QgPSBhcHBseVJlY3RhbmdsZShkYXRhLCBoYXNGaWxsLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlbGxpcHNlJzpcbiAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlFbGxpcHNlKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BhdGgnOlxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGRhdGE7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhdGguZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IGFwcGx5U3RyaW5nKHBhdGguZGF0YSwgaGFzRmlsbCwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHBhdGguZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IGFwcGx5UGF0aChwYXRoLmRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhpc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICghZXhpc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBzZXRGaWxsU3R5bGUoZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIH1cbiAgICBpZiAoaGFzU3Ryb2tlKSB7XG4gICAgICAgIHNldFN0cm9rZVN0eWxlKHN0cm9rZSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxufVxuZXhwb3J0IHZhciBDYW52YXNTaGFwZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzU2hhcGVFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoc2hhcGUsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHNoYXBlO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgUG9pbnQuc2V0RW1wdHkob2Zmc2V0KTtcbiAgICAgICAgaWYgKFBpdm90Lmhhc1ZhbHVlcyhzaGFwZSkpIHtcbiAgICAgICAgICAgIFNoYXBlLmNhbGN1bGF0ZUJvdW5kcyhzaGFwZSwgYm91bmRzKTtcbiAgICAgICAgICAgIGlmIChSZWN0YW5nbGUuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2Zmc2V0LnggPSBQaXZvdC5nZXRYKHNoYXBlLCBib3VuZHMud2lkdGgpO1xuICAgICAgICAgICAgb2Zmc2V0LnkgPSBQaXZvdC5nZXRZKHNoYXBlLCBib3VuZHMud2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IGVuZ2luZS5wbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoUG9pbnQuaXNFbXB0eShvZmZzZXQpKSB7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnRMb2NhbChtYXRyaXgsIG9mZnNldCwgb2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHggKyBvZmZzZXQueCwgbWF0cml4LnR5ICsgb2Zmc2V0LnkpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyR3JhcGhpY3MoZGF0YVtpXSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQyZCwgZW5naW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJlbmRlckdyYXBoaWNzKGRhdGEsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0MmQsIGVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzU2hhcGVFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIFNoYXBlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChTSEFQRSwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzU2hhcGVFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNTaGFwZUV4dGVuc2lvbiB8fCAoQ2FudmFzU2hhcGVFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgR3JhcGhpY3NTdHJpbmdSZWFkZXIgfSBmcm9tICcuLi9kYXRhL3N0cmluZyc7XG5pbXBvcnQgeyBhcHBseUNvbW1hbmQgfSBmcm9tICcuL3BhdGgnO1xuY29uc3QgcmVhZGVyID0gbmV3IEdyYXBoaWNzU3RyaW5nUmVhZGVyKCk7XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlTdHJpbmcoZGF0YSwgaGFzRmlsbCwgY29udGV4dCkge1xuICAgIGlmICghZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHJlYWRlci5zZXRQYXRoKGRhdGEpO1xuICAgIHdoaWxlIChyZWFkZXIucmVhZE5leHQoKSkge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gcmVhZGVyLmdldENvbW1hbmQoKTtcbiAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGFwcGx5Q29tbWFuZChjb21tYW5kLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IENhbnZhc1BhdHRlcm5zIH0gZnJvbSAnQGplbmcvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBNYXRyaXggfSBmcm9tICdAamVuZy9nZW9tJztcbmNvbnN0IGVtcHR5QXJyYXkgPSBbXTtcbmNvbnN0IGVtcHR5TWF0cml4ID0gTWF0cml4LmVtcHR5KCk7XG5mdW5jdGlvbiBnZXRDYW52YXNQYXR0ZXJuKGZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpIHtcbiAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oZmlsbCwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHN3aXRjaCAoZmlsbC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzb2xpZCc6XG4gICAgICAgICAgICAgICAgY29uc3Qgc29saWQgPSBmaWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oc29saWQuY29sb3IgPz8gMCwgc29saWQuYWxwaGEgPz8gMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgY2FzZSAnbGluZWFyJzpcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lYXIgPSBmaWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5saW5lYXJHcmFkaWVudFBhdHRlcm4obGluZWFyLmJlZ2luWCA/PyAwLCBsaW5lYXIuYmVnaW5ZID8/IDAsIGxpbmVhci5lbmRYID8/IDAsIGxpbmVhci5lbmRZID8/IDAsIGxpbmVhci5jb2xvcnMgPz8gZW1wdHlBcnJheSwgbGluZWFyLmFscGhhcyA/PyBlbXB0eUFycmF5LCBsaW5lYXIucmF0aW9zID8/IGVtcHR5QXJyYXksIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGNhc2UgJ3JhZGlhbCc6XG4gICAgICAgICAgICAgICAgY29uc3QgcmFkaWFsID0gZmlsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMucmFkaWFsR3JhZGllbnRQYXR0ZXJuKHJhZGlhbC5iZWdpblggPz8gMCwgcmFkaWFsLmJlZ2luWSA/PyAwLCByYWRpYWwuYmVnaW5SYWRpdXMgPz8gMCwgcmFkaWFsLmVuZFggPz8gcmFkaWFsLmJlZ2luWCA/PyAwLCByYWRpYWwuZW5kWSA/PyByYWRpYWwuYmVnaW5ZID8/IDAsIHJhZGlhbC5lbmRSYWRpdXMgPz8gMCwgcmFkaWFsLmNvbG9ycyA/PyBlbXB0eUFycmF5LCByYWRpYWwuYWxwaGFzID8/IGVtcHR5QXJyYXksIHJhZGlhbC5yYXRpb3MgPz8gZW1wdHlBcnJheSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQpO1xuICAgICAgICAgICAgY2FzZSAnYml0bWFwJzpcbiAgICAgICAgICAgICAgICBjb25zdCBiaXRtYXBGaWxsID0gZmlsbDtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHJlcGVhdCA9IHRydWUsIHNyYywgbWF0cml4ID0gZW1wdHlNYXRyaXggfSA9IGJpdG1hcEZpbGw7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gQ2FudmFzUGF0dGVybnMuYml0bWFwUGF0dGVybihyZXNvdXJjZS5pbWFnZSwgcmVwZWF0LCBtYXRyaXgsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbGxTdHlsZShmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBnZXRDYW52YXNQYXR0ZXJuKGZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0cm9rZVN0eWxlKHN0cm9rZSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGlmICh0eXBlb2Ygc3Ryb2tlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKHN0cm9rZSwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGNvbnRleHQubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgICAgIGNvbnRleHQubGluZUpvaW4gPSAncm91bmQnO1xuICAgICAgICBjb250ZXh0Lm1pdGVyTGltaXQgPSAxMDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHN0cm9rZSA9PT0gJ29iamVjdCcgJiYgc3Ryb2tlLmZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gZ2V0Q2FudmFzUGF0dGVybihzdHJva2UuZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gc3Ryb2tlLnRoaWNrbmVzcyA/PyAxO1xuICAgICAgICBjb250ZXh0LmxpbmVDYXAgPSBzdHJva2UuY2FwcyA/PyAncm91bmQnO1xuICAgICAgICBjb250ZXh0LmxpbmVKb2luID0gc3Ryb2tlLmpvaW50cyA/PyAncm91bmQnO1xuICAgICAgICBjb250ZXh0Lm1pdGVyTGltaXQgPSBzdHJva2UubWl0ZXJMaW1pdCA/PyAxMDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IFBhdGhDb21tYW5kIH0gZnJvbSAnLi9wYXRoJztcbmltcG9ydCB7IEdyYXBoaWNzU3RyaW5nIH0gZnJvbSAnLi9zdHJpbmcnO1xuZXhwb3J0IHZhciBSZWN0YW5nbGVEYXRhO1xuKGZ1bmN0aW9uIChSZWN0YW5nbGVEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgd2lkdGggPSAwLCBoZWlnaHQgPSAwLCB9ID0gZGF0YTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4LCB5KTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQpO1xuICAgIH1cbiAgICBSZWN0YW5nbGVEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFJlY3RhbmdsZURhdGEgfHwgKFJlY3RhbmdsZURhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBFbGxpcHNlRGF0YTtcbihmdW5jdGlvbiAoRWxsaXBzZURhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCByYWRpdXMgPSAwLCByYWRpdXNYLCByYWRpdXNZLCB9ID0gZGF0YTtcbiAgICAgICAgY29uc3QgcnggPSByYWRpdXNYID8/IHJhZGl1cztcbiAgICAgICAgY29uc3QgcnkgPSByYWRpdXNZID8/IHJhZGl1cztcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4IC0gcngsIHkgLSByeSk7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCArIHJ4LCB5ICsgcnkpO1xuICAgIH1cbiAgICBFbGxpcHNlRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShFbGxpcHNlRGF0YSB8fCAoRWxsaXBzZURhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBQYXRoRGF0YTtcbihmdW5jdGlvbiAoUGF0aERhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aERhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHBhdGhEYXRhO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tYW5kID0gZGF0YVtpXTtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBQYXRoRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShQYXRoRGF0YSB8fCAoUGF0aERhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBHcmFwaGljc0RhdGE7XG4oZnVuY3Rpb24gKEdyYXBoaWNzRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBkYXRhO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICAgICAgUmVjdGFuZ2xlRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgICAgICAgICAgIEVsbGlwc2VEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGF0aCc6XG4gICAgICAgICAgICAgICAgUGF0aERhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc0RhdGEgfHwgKEdyYXBoaWNzRGF0YSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdAamVuZy9nZW9tJztcbmV4cG9ydCB2YXIgUGF0aENvbW1hbmQ7XG4oZnVuY3Rpb24gKFBhdGhDb21tYW5kKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKHBhdGgsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IHBhdGg7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbW92ZVRvJzpcbiAgICAgICAgICAgIGNhc2UgJ2xpbmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIG1vdmVUby54ID8/IDAsIG1vdmVUby55ID8/IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3VydmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdXJ2ZVRvLmN4ID8/IDAsIGN1cnZlVG8uY3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdXJ2ZVRvLnggPz8gMCwgY3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3ViaWNDdXJ2ZVRvJzpcbiAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLmN4ID8/IDAsIGN1YmljQ3VydmVUby5jeSA/PyAwKTtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby5zeCA/PyAwLCBjdWJpY0N1cnZlVG8uc3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8ueCA/PyAwLCBjdWJpY0N1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUGF0aENvbW1hbmQuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoUGF0aENvbW1hbmQgfHwgKFBhdGhDb21tYW5kID0ge30pKTtcbiIsImltcG9ydCB7IFBhdGhDb21tYW5kLCB9IGZyb20gJy4vcGF0aCc7XG5jb25zdCBOVU1CRVJTX0NPVU5UID0ge1xuICAgIE06IDIsXG4gICAgbTogMixcbiAgICBMOiAyLFxuICAgIGw6IDIsXG4gICAgSDogMSxcbiAgICBoOiAxLFxuICAgIFY6IDEsXG4gICAgdjogMSxcbiAgICBDOiA2LFxuICAgIGM6IDYsXG4gICAgUzogNCxcbiAgICBzOiA0LFxuICAgIFE6IDQsXG4gICAgcTogNCxcbiAgICBUOiAyLFxuICAgIHQ6IDIsXG59O1xuY29uc3QgQ09NTUFORF9SRUdFWCA9IC9bTW1MbEhoVnZDY1NzUXFUdF0vO1xuY29uc3QgTlVNQkVSX1JFR0VYID0gL1stK10/W1xcZC5dKy87XG5leHBvcnQgY2xhc3MgR3JhcGhpY3NTdHJpbmdTdHJlYW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBhdGggPSAnJztcbiAgICAgICAgdGhpcy5jb21tYW5kID0gbnVsbDtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIHRoaXMuc3ltYm9sUmVnZXggPSAvW01tTGxIaFZ2Q2NTc1FxVHRdfFstK10/W1xcZC5dKy9nO1xuICAgIH1cbiAgICBzZXRQYXRoKHBhdGgpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5zeW1ib2xSZWdleC5sYXN0SW5kZXggPSAwO1xuICAgIH1cbiAgICBnZXRDb21tYW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kO1xuICAgIH1cbiAgICBnZXRCdWZmZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlcjtcbiAgICB9XG4gICAgcmVhZE5leHQoKSB7XG4gICAgICAgIGNvbnN0IHsgbGFzdEluZGV4IH0gPSB0aGlzLnN5bWJvbFJlZ2V4O1xuICAgICAgICBjb25zdCBzeW1ib2xNYXRjaCA9IHRoaXMuc3ltYm9sUmVnZXguZXhlYyh0aGlzLnBhdGgpO1xuICAgICAgICBpZiAoIXN5bWJvbE1hdGNoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbE1hdGNoWzBdO1xuICAgICAgICBpZiAoQ09NTUFORF9SRUdFWC50ZXN0KHN5bWJvbCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZCA9IHN5bWJvbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChOVU1CRVJfUkVHRVgudGVzdChzeW1ib2wpKSB7XG4gICAgICAgICAgICB0aGlzLnN5bWJvbFJlZ2V4Lmxhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmNvbW1hbmQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb3VudCA9IE5VTUJFUlNfQ09VTlRbdGhpcy5jb21tYW5kXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJNYXRjaCA9IHRoaXMuc3ltYm9sUmVnZXguZXhlYyh0aGlzLnBhdGgpO1xuICAgICAgICAgICAgaWYgKG51bWJlck1hdGNoICYmIE5VTUJFUl9SRUdFWC50ZXN0KG51bWJlck1hdGNoWzBdKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyW2ldID0gcGFyc2VGbG9hdChudW1iZXJNYXRjaFswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBHcmFwaGljc1N0cmluZ1JlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtID0gbmV3IEdyYXBoaWNzU3RyaW5nU3RyZWFtKCk7XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IHsgdHlwZTogJ21vdmVUbycgfTtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFggPSAwO1xuICAgICAgICB0aGlzLmxhc3RZID0gMDtcbiAgICAgICAgdGhpcy5sYXN0Q1ggPSAwO1xuICAgICAgICB0aGlzLmxhc3RDWSA9IDA7XG4gICAgfVxuICAgIHNldFBhdGgocGF0aCkge1xuICAgICAgICB0aGlzLnN0cmVhbS5zZXRQYXRoKHBhdGgpO1xuICAgICAgICB0aGlzLmxhc3RYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0WSA9IDA7XG4gICAgICAgIHRoaXMubGFzdENYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0Q1kgPSAwO1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSBmYWxzZTtcbiAgICB9XG4gICAgZ2V0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZEV4aXN0cyA/IHRoaXMuY29tbWFuZCA6IG51bGw7XG4gICAgfVxuICAgIHJlYWROZXh0KCkge1xuICAgICAgICB0aGlzLnN0cmVhbS5yZWFkTmV4dCgpO1xuICAgICAgICB0aGlzLnBhcnNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRFeGlzdHM7XG4gICAgfVxuICAgIHBhcnNlKCkge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gdGhpcy5zdHJlYW0uZ2V0Q29tbWFuZCgpO1xuICAgICAgICB0aGlzLmNvbW1hbmRFeGlzdHMgPSAhIWNvbW1hbmQ7XG4gICAgICAgIGlmICghdGhpcy5jb21tYW5kRXhpc3RzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy5zdHJlYW0uZ2V0QnVmZmVyKCk7XG4gICAgICAgIGNvbnN0IFtlMCwgZTEsIGUyLCBlMywgZTQsIGU1LF0gPSBidWZmZXI7XG4gICAgICAgIHN3aXRjaCAoY29tbWFuZCkge1xuICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdtb3ZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby55ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBtb3ZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IG1vdmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbW92ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnkgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBtb3ZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IG1vdmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBsaW5lVG8ueDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdWJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IGUwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndic6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMCArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMjtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0gZTM7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMiArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IGUzICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSBlNCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTUgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSB0aGlzLmxhc3RDWDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0gdGhpcy5sYXN0Q1k7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSBlMjtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnkgPSBlMztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IHRoaXMubGFzdENZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSBlMiArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTMgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSBlMjtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0gZTM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSBlMiArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUzICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdXJ2ZVRvLnggLSAoY3VydmVUby5jeCAtIGN1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3VydmVUby55IC0gKGN1cnZlVG8uY3kgLSBjdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSB0aGlzLmxhc3RDWDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IHRoaXMubGFzdENZO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuY29uc3QgcmVhZGVyID0gbmV3IEdyYXBoaWNzU3RyaW5nUmVhZGVyKCk7XG5leHBvcnQgdmFyIEdyYXBoaWNzU3RyaW5nO1xuKGZ1bmN0aW9uIChHcmFwaGljc1N0cmluZykge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoLCBib3VuZHMpIHtcbiAgICAgICAgcmVhZGVyLnNldFBhdGgocGF0aCk7XG4gICAgICAgIHdoaWxlIChyZWFkZXIucmVhZE5leHQoKSkge1xuICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IHJlYWRlci5nZXRDb21tYW5kKCk7XG4gICAgICAgICAgICBpZiAoY29tbWFuZCkge1xuICAgICAgICAgICAgICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyhjb21tYW5kLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIEdyYXBoaWNzU3RyaW5nLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEdyYXBoaWNzU3RyaW5nIHx8IChHcmFwaGljc1N0cmluZyA9IHt9KSk7XG4iLCJpbXBvcnQgeyBNYXRyaXgsIFBvaW50IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5jb25zdCB0ZW1wUG9pbnQwID0gUG9pbnQuZW1wdHkoKTtcbmNvbnN0IHRlbXBQb2ludDEgPSBQb2ludC5lbXB0eSgpO1xuY29uc3QgZW1wdHlNYXRyaXggPSBNYXRyaXguZW1wdHkoKTtcbmV4cG9ydCBjbGFzcyBHcmFwaGljcyB7XG4gICAgY29uc3RydWN0b3Ioc2hhcGUpIHtcbiAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlO1xuICAgIH1cbiAgICBiZWdpbkZpbGwoY29sb3IgPSAwLCBhbHBoYSA9IDEpIHtcbiAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBiZWdpbkJpdG1hcEZpbGwoc3JjLCBtYXRyaXgsIHJlcGVhdCA9IHRydWUsIHNtb290aCA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdiaXRtYXAnLFxuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgcmVwZWF0LFxuICAgICAgICAgICAgc21vb3RoLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYmVnaW5HcmFkaWVudEZpbGwodHlwZSwgY29sb3IsIGFscGhhLCByYXRpbywgbWF0cml4KSB7XG4gICAgICAgIGlmICh0eXBlID09PSAnbGluZWFyJykge1xuICAgICAgICAgICAgdGVtcFBvaW50MC54ID0gLTgxOS4yO1xuICAgICAgICAgICAgdGVtcFBvaW50MC55ID0gMDtcbiAgICAgICAgICAgIHRlbXBQb2ludDEueCA9IDgxOS4yO1xuICAgICAgICAgICAgdGVtcFBvaW50MS55ID0gMDtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHRlbXBQb2ludDAsIHRlbXBQb2ludDApO1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgdGVtcFBvaW50MSwgdGVtcFBvaW50MSk7XG4gICAgICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgICAgICBiZWdpblg6IHRlbXBQb2ludDAueCxcbiAgICAgICAgICAgICAgICBiZWdpblk6IHRlbXBQb2ludDAueSxcbiAgICAgICAgICAgICAgICBlbmRYOiB0ZW1wUG9pbnQxLngsXG4gICAgICAgICAgICAgICAgZW5kWTogdGVtcFBvaW50MS55LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueCA9IDE2MzguNDtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueSA9IDA7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCB0ZW1wUG9pbnQwLCB0ZW1wUG9pbnQwKTtcbiAgICAgICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgICAgICAgIGJlZ2luWDogdGVtcFBvaW50MC54LFxuICAgICAgICAgICAgICAgIGJlZ2luWTogdGVtcFBvaW50MC55LFxuICAgICAgICAgICAgICAgIGJlZ2luUmFkaXVzOiAwLFxuICAgICAgICAgICAgICAgIGVuZFg6IHRlbXBQb2ludDAueCxcbiAgICAgICAgICAgICAgICBlbmRZOiB0ZW1wUG9pbnQwLnksXG4gICAgICAgICAgICAgICAgZW5kUmFkaXVzOiBNYXRoLmFicygodGVtcFBvaW50MC54IC0gbWF0cml4LnR4KSAvIDIpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbGluZVN0eWxlKHRoaWNrbmVzcyA9IDAsIGNvbG9yID0gMCwgYWxwaGEgPSAxLCBwaXhlbEhpbnRpbmcgPSBmYWxzZSwgc2NhbGVNb2RlID0gJ25vbmUnLCBjYXBzID0gJ3JvdW5kJywgam9pbnRzID0gJ3JvdW5kJywgbWl0ZXJMaW1pdCA9IDMpIHtcbiAgICAgICAgdGhpcy5zdHJva2UgPSB7XG4gICAgICAgICAgICB0aGlja25lc3MsXG4gICAgICAgICAgICBwaXhlbEhpbnRpbmcsXG4gICAgICAgICAgICBzY2FsZU1vZGUsXG4gICAgICAgICAgICBjYXBzLFxuICAgICAgICAgICAgam9pbnRzLFxuICAgICAgICAgICAgbWl0ZXJMaW1pdCxcbiAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc29saWQnLFxuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGxpbmVHcmFkaWVudFN0eWxlKHR5cGUsIGNvbG9yLCBhbHBoYSwgcmF0aW8sIG1hdHJpeCA9IGVtcHR5TWF0cml4KSB7XG4gICAgICAgIGlmICghdGhpcy5zdHJva2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnbGluZWFyJykge1xuICAgICAgICAgICAgdGVtcFBvaW50MC54ID0gLTgxOS4yO1xuICAgICAgICAgICAgdGVtcFBvaW50MC55ID0gMDtcbiAgICAgICAgICAgIHRlbXBQb2ludDEueCA9IDgxOS4yO1xuICAgICAgICAgICAgdGVtcFBvaW50MS55ID0gMDtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHRlbXBQb2ludDAsIHRlbXBQb2ludDApO1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgdGVtcFBvaW50MSwgdGVtcFBvaW50MSk7XG4gICAgICAgICAgICB0aGlzLnN0cm9rZS5maWxsID0ge1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICAgICAgYmVnaW5YOiB0ZW1wUG9pbnQwLngsXG4gICAgICAgICAgICAgICAgYmVnaW5ZOiB0ZW1wUG9pbnQwLnksXG4gICAgICAgICAgICAgICAgZW5kWDogdGVtcFBvaW50MS54LFxuICAgICAgICAgICAgICAgIGVuZFk6IHRlbXBQb2ludDEueSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnggPSAxNjM4LjQ7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnkgPSAwO1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgdGVtcFBvaW50MCwgdGVtcFBvaW50MCk7XG4gICAgICAgICAgICB0aGlzLnN0cm9rZS5maWxsID0ge1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICAgICAgYmVnaW5YOiB0ZW1wUG9pbnQwLngsXG4gICAgICAgICAgICAgICAgYmVnaW5ZOiB0ZW1wUG9pbnQwLnksXG4gICAgICAgICAgICAgICAgYmVnaW5SYWRpdXM6IDAsXG4gICAgICAgICAgICAgICAgZW5kWDogdGVtcFBvaW50MC54LFxuICAgICAgICAgICAgICAgIGVuZFk6IHRlbXBQb2ludDAueSxcbiAgICAgICAgICAgICAgICBlbmRSYWRpdXM6IE1hdGguYWJzKCh0ZW1wUG9pbnQwLnggLSBtYXRyaXgudHgpIC8gMiksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBsaW5lQml0bWFwU3R5bGUoc3JjLCBtYXRyaXgsIHJlcGVhdCA9IHRydWUsIHNtb290aCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy5zdHJva2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Ryb2tlLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAnYml0bWFwJyxcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHJlcGVhdCxcbiAgICAgICAgICAgIHNtb290aCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG1vdmVUbyh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICBwYXRoLnB1c2goeyB0eXBlOiAnbW92ZVRvJywgeCwgeSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGxpbmVUbyh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goeyB0eXBlOiAnbGluZVRvJywgeCwgeSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGN1cnZlVG8oY3gsIGN5LCB4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1cnZlVG8nLCBjeCwgY3ksIHgsIHksXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY3ViaWNDdXJ2ZVRvKGN4LCBjeSwgc3gsIHN5LCB4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsIGN4LCBjeSwgc3gsIHN5LCB4LCB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRyYXdSb3VuZFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgZWxsaXBzZVdpZHRoID0gMCwgZWxsaXBzZUhlaWdodCA9IDApIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnN0IHcgPSBlbGxpcHNlV2lkdGg7XG4gICAgICAgIGNvbnN0IGggPSBlbGxpcHNlSGVpZ2h0O1xuICAgICAgICBjb25zdCBrID0gMC41NTIyODQ4O1xuICAgICAgICBjb25zdCBveCA9ICh3IC8gMikgKiBrO1xuICAgICAgICBjb25zdCBveSA9IChoIC8gMikgKiBrO1xuICAgICAgICBjb25zdCB4ZSA9IHggKyB3O1xuICAgICAgICBjb25zdCB5ZSA9IHkgKyBoO1xuICAgICAgICBjb25zdCB4bSA9IHggKyB3IC8gMjtcbiAgICAgICAgY29uc3QgeW0gPSB5ICsgaCAvIDI7XG4gICAgICAgIGNvbnN0IGR4ID0gd2lkdGggLSB3O1xuICAgICAgICBjb25zdCBkeSA9IGhlaWdodCAtIGg7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbW92ZVRvJyxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5OiB5bSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4LFxuICAgICAgICAgICAgY3k6IHltIC0gb3ksXG4gICAgICAgICAgICBzeDogeG0gLSBveCxcbiAgICAgICAgICAgIHN5OiB5LFxuICAgICAgICAgICAgeDogeG0sXG4gICAgICAgICAgICB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeG0gKyBkeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeG0gKyBveCArIGR4LFxuICAgICAgICAgICAgY3k6IHksXG4gICAgICAgICAgICBzeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHN5OiB5bSAtIG95LFxuICAgICAgICAgICAgeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHk6IHltLFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeGUgKyBkeCxcbiAgICAgICAgICAgIHk6IHltICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeGUgKyBkeCxcbiAgICAgICAgICAgIGN5OiB5bSArIG95ICsgZHksXG4gICAgICAgICAgICBzeDogeG0gKyBveCArIGR4LFxuICAgICAgICAgICAgc3k6IHllICsgZHksXG4gICAgICAgICAgICB4OiB4bSArIGR4LFxuICAgICAgICAgICAgeTogeWUgKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhtLFxuICAgICAgICAgICAgeTogeWUgKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4bSAtIG94LFxuICAgICAgICAgICAgY3k6IHllICsgZHksXG4gICAgICAgICAgICBzeDogeCxcbiAgICAgICAgICAgIHN5OiB5bSArIG95ICsgZHksXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeTogeW0gKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkcmF3UmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ3JlY3RhbmdsZSc7XG4gICAgICAgIGRhdGEueCA9IHg7XG4gICAgICAgIGRhdGEueSA9IHk7XG4gICAgICAgIGRhdGEud2lkdGggPSB3aWR0aDtcbiAgICAgICAgZGF0YS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkcmF3Q2lyY2xlKHgsIHksIHJhZGl1cykge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEudHlwZSA9ICdlbGxpcHNlJztcbiAgICAgICAgZGF0YS54ID0geDtcbiAgICAgICAgZGF0YS55ID0geTtcbiAgICAgICAgZGF0YS5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkcmF3RWxsaXBzZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ2VsbGlwc2UnO1xuICAgICAgICBkYXRhLnJhZGl1c1ggPSB3aWR0aCAvIDI7XG4gICAgICAgIGRhdGEucmFkaXVzWSA9IGhlaWdodCAvIDI7XG4gICAgICAgIGRhdGEueCA9IHggLSBkYXRhLnJhZGl1c1g7XG4gICAgICAgIGRhdGEueSA9IHkgLSBkYXRhLnJhZGl1c1k7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2hhcGUuZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNyZWF0ZURhdGEoKSB7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUsIGZpbGwsIHN0cm9rZSB9ID0gdGhpcztcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2hhcGUuZGF0YSkpIHtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc2hhcGUuZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHNoYXBlLmRhdGEgPSBbc2hhcGUuZGF0YV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaGFwZS5kYXRhID0gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ3JhcGhpY3NEYXRhID0geyB0eXBlOiAncGF0aCcsIGZpbGwsIHN0cm9rZSB9O1xuICAgICAgICBzaGFwZS5kYXRhLnB1c2goZ3JhcGhpY3NEYXRhKTtcbiAgICAgICAgcmV0dXJuIGdyYXBoaWNzRGF0YTtcbiAgICB9XG4gICAgYmVnaW5QYXRoKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEuZGF0YSA9IFtdO1xuICAgICAgICByZXR1cm4gZGF0YS5kYXRhO1xuICAgIH1cbiAgICBnZXRQYXRoKCkge1xuICAgICAgICBjb25zdCB7IHNoYXBlIH0gPSB0aGlzO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2hhcGUuZGF0YSkgfHwgIXNoYXBlLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBzaGFwZS5kYXRhW3NoYXBlLmRhdGEubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLmRhdGEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhLmRhdGE7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9kYXRhL2RhdGEnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL3BhdGgnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL3N0cmluZyc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvc3R5bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFwZSc7XG5leHBvcnQgKiBmcm9tICcuL2dyYXBoaWNzJztcbmV4cG9ydCAqIGZyb20gJy4vY2FudmFzL3NoYXBlJztcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBCb3VuZHMsIFJlY3RhbmdsZSB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBHcmFwaGljc0RhdGEgfSBmcm9tICcuL2RhdGEvZGF0YSc7XG5leHBvcnQgY29uc3QgU0hBUEUgPSAnc2hhcGUnO1xuY29uc3QgYm91bmRzID0gQm91bmRzLmVtcHR5KCk7XG5leHBvcnQgdmFyIFNoYXBlO1xuKGZ1bmN0aW9uIChTaGFwZSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhzaGFwZSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gc2hhcGU7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQm91bmRzLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBHcmFwaGljc0RhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGFbaV0sIGJvdW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBHcmFwaGljc0RhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQm91bmRzLmlzRW1wdHkoYm91bmRzKSkge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgd2lkdGggPSBib3VuZHMubWF4WCAtIGJvdW5kcy5taW5YO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBib3VuZHMubWF4WSAtIGJvdW5kcy5taW5ZO1xuICAgICAgICBjb25zdCB4ID0gYm91bmRzLm1pblggKyBQaXZvdC5nZXRYKHNoYXBlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBib3VuZHMubWluWSArIFBpdm90LmdldFkoc2hhcGUsIGhlaWdodCk7XG4gICAgICAgIHJlc3VsdC54ID0geDtcbiAgICAgICAgcmVzdWx0LnkgPSB5O1xuICAgICAgICByZXN1bHQud2lkdGggPSB3aWR0aDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoU2hhcGUgfHwgKFNoYXBlID0ge30pKTtcbmNvbnN0IHJlY3RhbmdsZSA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBTaGFwZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoU2hhcGVFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KHNoYXBlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBsb2NhbCB9ID0gZW5naW5lLnBvaW50ZXJzO1xuICAgICAgICBTaGFwZS5jYWxjdWxhdGVCb3VuZHMoc2hhcGUsIHJlY3RhbmdsZSk7XG4gICAgICAgIHJldHVybiBSZWN0YW5nbGUuY29udGFpbnMocmVjdGFuZ2xlLCBsb2NhbCk7XG4gICAgfVxuICAgIFNoYXBlRXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KFNIQVBFLCBoaXRUZXN0KTtcbiAgICAgICAgSW1hZ2VSZXNvdXJjZS5pbml0KGVuZ2luZSk7XG4gICAgfVxuICAgIFNoYXBlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoU2hhcGVFeHRlbnNpb24gfHwgKFNoYXBlRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBDYW52YXNQYXR0ZXJucyB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgRm9udCB9IGZyb20gJy4uL2RhdGEvZm9udCc7XG5pbXBvcnQgeyBUZXh0RXh0ZW5zaW9uLCBURVhULCBUZXh0IH0gZnJvbSAnLi4vdGV4dCc7XG5pbXBvcnQgeyBUZXh0Rm9ybWF0IH0gZnJvbSAnLi4vZGF0YS9mb3JtYXQnO1xuaW1wb3J0IHsgVGV4dE1ldHJpY3MgfSBmcm9tICcuLi9kYXRhL21ldHJpY3MnO1xuY29uc3QgZGVmYXVsdFRleHRGb3JtYXQgPSB7fTtcbmNvbnN0IENPUlJFQ1RJT04gPSAwLjg1O1xuZXhwb3J0IHZhciBDYW52YXNUZXh0RXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNUZXh0RXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKGNvbXBvbmVudCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4LCBjb2xvclRyYW5zZm9ybSB9ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFRleHQuaXNVcGRhdGVNZXRyaWNzKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIFRleHQudXBkYXRlTWV0cmljcyhjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbWV0cmljcyB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIW1ldHJpY3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGZvcm1hdCwgYm9yZGVyLCBiYWNrZ3JvdW5kLCB9ID0gY29tcG9uZW50O1xuICAgICAgICBUZXh0Rm9ybWF0LmNvbWJpbmUoZm9ybWF0LCBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LCBkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGNvbnN0IHJlYWxXaWR0aCA9IHdpZHRoID8/IG1ldHJpY3Mud2lkdGg7XG4gICAgICAgIGNvbnN0IHJlYWxIZWlnaHQgPSBoZWlnaHQgPz8gbWV0cmljcy5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IG9mZnNldFggPSBQaXZvdC5nZXRYKGNvbXBvbmVudCwgcmVhbFdpZHRoKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IFBpdm90LmdldFkoY29tcG9uZW50LCByZWFsSGVpZ2h0KTtcbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gZW5naW5lLnBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICBpZiAoYmFja2dyb3VuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnJztcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oYmFja2dyb3VuZCwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgY29udGV4dDJkLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLnJlY3Qob2Zmc2V0WCwgb2Zmc2V0WSwgcmVhbFdpZHRoLCByZWFsSGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oYm9yZGVyLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gJyc7XG4gICAgICAgICAgICBjb250ZXh0MmQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQucmVjdChvZmZzZXRYLCBvZmZzZXRZLCByZWFsV2lkdGgsIHJlYWxIZWlnaHQpO1xuICAgICAgICAgICAgY29udGV4dDJkLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQyZC50ZXh0QmFzZWxpbmUgPSAnYWxwaGFiZXRpYyc7XG4gICAgICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICcnO1xuICAgICAgICBjb25zdCBzaW1wbGUgPSBUZXh0LmlzU2ltcGxlKGNvbXBvbmVudCk7XG4gICAgICAgIGlmIChzaW1wbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBjb21wb25lbnQudGV4dDtcbiAgICAgICAgICAgIGNvbnN0IHsgc2l6ZSwgY29sb3IsIGFscGhhLCBsZWFkaW5nLCBsZXR0ZXJTcGFjaW5nLCB9ID0gZGVmYXVsdFRleHRGb3JtYXQ7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0Rm9udCA9IEZvbnQuZ2V0Rm9udChkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2xTaXplID0gc2l6ZSAqIENPUlJFQ1RJT047XG4gICAgICAgICAgICBjb25zdCBhbGlnblZhbHVlID0gVGV4dEZvcm1hdC5nZXRBbGlnblZhbHVlKGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5mb250ID0gRm9udC5nZXRTdHlsZShkZWZhdWx0Rm9udCwgc2l6ZSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGNvbG9yLCBhbHBoYSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgbGV0IHggPSBvZmZzZXRYICsgYWxpZ25WYWx1ZSA/IGFsaWduVmFsdWUgKiAocmVhbFdpZHRoIC0gVGV4dE1ldHJpY3MuZ2V0U2ltcGxlV2lkdGgoZGVmYXVsdFRleHRGb3JtYXQsIHRleHQsIDApKSA6IDA7XG4gICAgICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgICAgIGlmIChzeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSBhbGlnblZhbHVlID8gYWxpZ25WYWx1ZSAqIChyZWFsV2lkdGggLSBUZXh0TWV0cmljcy5nZXRTaW1wbGVXaWR0aChkZWZhdWx0VGV4dEZvcm1hdCwgdGV4dCwgaSArIDEpKSA6IDA7XG4gICAgICAgICAgICAgICAgICAgIHkgKz0gc2l6ZSArIGxlYWRpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gdGV4dFtpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2UoZGVmYXVsdEZvbnQsIHNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBsZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0MmQuZmlsbFRleHQoc3ltYm9sLCB4LCB5ICsgc3ltYm9sU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIHggKz0gYWR2YW5jZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgICAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxpZ25WZXJ0aWNhbFZhbHVlID0gVGV4dEZvcm1hdC5nZXRWZXJ0aWNhbEFsaWduVmFsdWUoZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICAgICAgICAgIHkgPSAoaGVpZ2h0IC0gbWV0cmljcy5oZWlnaHQpICogYWxpZ25WZXJ0aWNhbFZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh5IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5ICs9IG9mZnNldFk7XG4gICAgICAgICAgICBjb25zdCB7IGxpbmVzIH0gPSBtZXRyaWNzO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAobGluZS5zeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdCA9IGxpbmUuc3ltYm9sc1swXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxpZ25WYWx1ZSA9IFRleHRGb3JtYXQuZ2V0QWxpZ25WYWx1ZShmaXJzdC5mb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IChyZWFsV2lkdGggLSBsaW5lLndpZHRoKSAqIGFsaWduVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeCArPSBvZmZzZXRYO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHN5bWJvbHMgfSA9IGxpbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVIZWlnaHQgPSBsaW5lLmhlaWdodCAqIENPUlJFQ1RJT047XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3ltYm9scy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSBzeW1ib2wuZm9ybWF0LnNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbGlnblN5bWJvbFZhbHVlID0gVGV4dEZvcm1hdC5nZXRWZXJ0aWNhbEFsaWduVmFsdWUoc3ltYm9sLmZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xTaXplID0gc2l6ZSAqIENPUlJFQ1RJT047XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb250ID0gRm9udC5nZXRGb250KHN5bWJvbC5mb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDJkLmZvbnQgPSBGb250LmdldFN0eWxlKHN5bWJvbEZvbnQsIHNpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihzeW1ib2wuZm9ybWF0LmNvbG9yLCBzeW1ib2wuZm9ybWF0LmFscGhhLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0MmQuZmlsbFRleHQoc3ltYm9sLnN5bWJvbCwgeCwgeSArIHN5bWJvbFNpemUgKyBhbGlnblN5bWJvbFZhbHVlICogKGxpbmVIZWlnaHQgLSBzeW1ib2xTaXplKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ICs9IHN5bWJvbC5hZHZhbmNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHkgKz0gbGluZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzVGV4dEV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgVGV4dEV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoVEVYVCwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzVGV4dEV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc1RleHRFeHRlbnNpb24gfHwgKENhbnZhc1RleHRFeHRlbnNpb24gPSB7fSkpO1xuIiwiY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5leHBvcnQgY29uc3QgRU0gPSAxMDI0O1xuY29uc3QgZm9udHMgPSBuZXcgTWFwKCk7XG5leHBvcnQgdmFyIEZvbnQ7XG4oZnVuY3Rpb24gKEZvbnQpIHtcbiAgICBmdW5jdGlvbiBnZXRTdHlsZShmb250LCBzaXplKSB7XG4gICAgICAgIHJldHVybiBmb250Lm5hbWUucmVwbGFjZSgnJScsIHNpemUudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIEZvbnQuZ2V0U3R5bGUgPSBnZXRTdHlsZTtcbiAgICBmdW5jdGlvbiBtZWFzdXJlVGV4dChmb250LCBzaXplLCB0ZXh0KSB7XG4gICAgICAgIGNvbnRleHQuZm9udCA9IGdldFN0eWxlKGZvbnQsIHNpemUpO1xuICAgICAgICByZXR1cm4gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcbiAgICB9XG4gICAgRm9udC5tZWFzdXJlVGV4dCA9IG1lYXN1cmVUZXh0O1xuICAgIGZ1bmN0aW9uIGdldENoYXJXaWR0aChmb250LCBjaGFyKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IGZvbnQud2lkdGhzLmdldChjaGFyKTtcbiAgICAgICAgaWYgKCF3aWR0aCkge1xuICAgICAgICAgICAgd2lkdGggPSBtZWFzdXJlVGV4dChmb250LCBFTSwgY2hhcik7XG4gICAgICAgICAgICBmb250LndpZHRocy5zZXQoY2hhciwgd2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gICAgRm9udC5nZXRDaGFyV2lkdGggPSBnZXRDaGFyV2lkdGg7XG4gICAgZnVuY3Rpb24gZ2V0S2VybmluZyhmb250LCBmaXJzdCwgc2Vjb25kKSB7XG4gICAgICAgIGNvbnN0IHBhaXIgPSBmaXJzdCArIHNlY29uZDtcbiAgICAgICAgbGV0IGtlcm5pbmcgPSBmb250Lmtlcm5pbmdzLmdldChwYWlyKTtcbiAgICAgICAgaWYgKCFrZXJuaW5nKSB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aFNlY29uZCA9IGdldENoYXJXaWR0aChmb250LCBzZWNvbmQpO1xuICAgICAgICAgICAgY29uc3Qgd2lkdGhUb3RhbCA9IG1lYXN1cmVUZXh0KGZvbnQsIEVNLCBmaXJzdCArIHNlY29uZCk7XG4gICAgICAgICAgICBrZXJuaW5nID0gd2lkdGhUb3RhbCAtIHdpZHRoU2Vjb25kO1xuICAgICAgICAgICAgZm9udC5rZXJuaW5ncy5zZXQocGFpciwga2VybmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtlcm5pbmc7XG4gICAgfVxuICAgIEZvbnQuZ2V0S2VybmluZyA9IGdldEtlcm5pbmc7XG4gICAgZnVuY3Rpb24gZ2V0QWR2YW5jZShmb250LCBzaXplLCBmaXJzdCwgc2Vjb25kKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gc2l6ZSAvIEVNO1xuICAgICAgICBjb25zdCB3aWR0aCA9IGdldENoYXJXaWR0aChmb250LCBmaXJzdCk7XG4gICAgICAgIGlmICghc2Vjb25kKSB7XG4gICAgICAgICAgICByZXR1cm4gd2lkdGggKiBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXJuaW5nID0gZ2V0S2VybmluZyhmb250LCBmaXJzdCwgc2Vjb25kKTtcbiAgICAgICAgcmV0dXJuIGtlcm5pbmcgKiBzY2FsZTtcbiAgICB9XG4gICAgRm9udC5nZXRBZHZhbmNlID0gZ2V0QWR2YW5jZTtcbiAgICBmdW5jdGlvbiBnZXRGb250KGZvcm1hdCkge1xuICAgICAgICBsZXQgbmFtZSA9ICcnO1xuICAgICAgICBpZiAoZm9ybWF0LmJvbGQpIHtcbiAgICAgICAgICAgIG5hbWUgKz0gJ2JvbGQgJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0Lml0YWxpYykge1xuICAgICAgICAgICAgbmFtZSArPSAnaXRhbGljICc7XG4gICAgICAgIH1cbiAgICAgICAgbmFtZSArPSBgJXB4ICR7Zm9ybWF0LmZvbnR9YDtcbiAgICAgICAgbGV0IGZvbnQgPSBmb250cy5nZXQobmFtZSk7XG4gICAgICAgIGlmICghZm9udCkge1xuICAgICAgICAgICAgZm9udCA9IHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHdpZHRoczogbmV3IE1hcCgpLFxuICAgICAgICAgICAgICAgIGtlcm5pbmdzOiBuZXcgTWFwKCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9udHMuc2V0KG5hbWUsIGZvbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb250O1xuICAgIH1cbiAgICBGb250LmdldEZvbnQgPSBnZXRGb250O1xufSkoRm9udCB8fCAoRm9udCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFRleHRGb3JtYXQ7XG4oZnVuY3Rpb24gKFRleHRGb3JtYXQpIHtcbiAgICBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0ID0ge1xuICAgICAgICBmb250OiAnYXJpYWwnLFxuICAgICAgICBzaXplOiAxNSxcbiAgICAgICAgY29sb3I6IDAsXG4gICAgICAgIGFscGhhOiAxLFxuICAgICAgICBib2xkOiBmYWxzZSxcbiAgICAgICAgaXRhbGljOiBmYWxzZSxcbiAgICAgICAgdW5kZXJsaW5lOiBmYWxzZSxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogMCxcbiAgICAgICAgbGVhZGluZzogMCxcbiAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgfTtcbiAgICBmdW5jdGlvbiBjb21iaW5lKHNvdXJjZSwgZGVmYXVsdEZvcm1hdCwgcmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdC5mb250ID0gc291cmNlPy5mb250ID8/IGRlZmF1bHRGb3JtYXQuZm9udDtcbiAgICAgICAgcmVzdWx0LnNpemUgPSBzb3VyY2U/LnNpemUgPz8gZGVmYXVsdEZvcm1hdC5zaXplO1xuICAgICAgICByZXN1bHQuY29sb3IgPSBzb3VyY2U/LmNvbG9yID8/IGRlZmF1bHRGb3JtYXQuY29sb3I7XG4gICAgICAgIHJlc3VsdC5hbHBoYSA9IHNvdXJjZT8uYWxwaGEgPz8gZGVmYXVsdEZvcm1hdC5hbHBoYTtcbiAgICAgICAgcmVzdWx0LmJvbGQgPSBzb3VyY2U/LmJvbGQgPz8gZGVmYXVsdEZvcm1hdC5ib2xkO1xuICAgICAgICByZXN1bHQuaXRhbGljID0gc291cmNlPy5pdGFsaWMgPz8gZGVmYXVsdEZvcm1hdC5pdGFsaWM7XG4gICAgICAgIHJlc3VsdC51bmRlcmxpbmUgPSBzb3VyY2U/LnVuZGVybGluZSA/PyBkZWZhdWx0Rm9ybWF0LnVuZGVybGluZTtcbiAgICAgICAgcmVzdWx0LmxldHRlclNwYWNpbmcgPSBzb3VyY2U/LmxldHRlclNwYWNpbmcgPz8gZGVmYXVsdEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICByZXN1bHQubGVhZGluZyA9IHNvdXJjZT8ubGVhZGluZyA/PyBkZWZhdWx0Rm9ybWF0LmxlYWRpbmc7XG4gICAgICAgIHJlc3VsdC5hbGlnbiA9IHNvdXJjZT8uYWxpZ24gPz8gZGVmYXVsdEZvcm1hdC5hbGlnbjtcbiAgICAgICAgcmVzdWx0LnZlcnRpY2FsQWxpZ24gPSBzb3VyY2U/LnZlcnRpY2FsQWxpZ24gPz8gZGVmYXVsdEZvcm1hdC52ZXJ0aWNhbEFsaWduO1xuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmNvbWJpbmUgPSBjb21iaW5lO1xuICAgIGZ1bmN0aW9uIGNvcHkoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LmZvbnQgPSBzb3VyY2UuZm9udDtcbiAgICAgICAgdGFyZ2V0LnNpemUgPSBzb3VyY2Uuc2l6ZTtcbiAgICAgICAgdGFyZ2V0LmNvbG9yID0gc291cmNlLmNvbG9yO1xuICAgICAgICB0YXJnZXQuYWxwaGEgPSBzb3VyY2UuYWxwaGE7XG4gICAgICAgIHRhcmdldC5ib2xkID0gc291cmNlLmJvbGQ7XG4gICAgICAgIHRhcmdldC5pdGFsaWMgPSBzb3VyY2UuaXRhbGljO1xuICAgICAgICB0YXJnZXQudW5kZXJsaW5lID0gc291cmNlLnVuZGVybGluZTtcbiAgICAgICAgdGFyZ2V0LmxldHRlclNwYWNpbmcgPSBzb3VyY2UubGV0dGVyU3BhY2luZztcbiAgICAgICAgdGFyZ2V0LmxlYWRpbmcgPSBzb3VyY2UubGVhZGluZztcbiAgICAgICAgdGFyZ2V0LmFsaWduID0gc291cmNlLmFsaWduO1xuICAgICAgICB0YXJnZXQudmVydGljYWxBbGlnbiA9IHNvdXJjZS52ZXJ0aWNhbEFsaWduO1xuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIGdldEFsaWduVmFsdWUoZm9ybWF0KSB7XG4gICAgICAgIHN3aXRjaCAoZm9ybWF0Py5hbGlnbikge1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6IHJldHVybiAwO1xuICAgICAgICAgICAgY2FzZSAnY2VudGVyJzogcmV0dXJuIDAuNTtcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzogcmV0dXJuIDE7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmdldEFsaWduVmFsdWUgPSBnZXRBbGlnblZhbHVlO1xuICAgIGZ1bmN0aW9uIGdldFZlcnRpY2FsQWxpZ25WYWx1ZShmb3JtYXQpIHtcbiAgICAgICAgc3dpdGNoIChmb3JtYXQ/LnZlcnRpY2FsQWxpZ24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6IHJldHVybiAwO1xuICAgICAgICAgICAgY2FzZSAnbWlkZGxlJzogcmV0dXJuIDAuNTtcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6IHJldHVybiAxO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dEZvcm1hdC5nZXRWZXJ0aWNhbEFsaWduVmFsdWUgPSBnZXRWZXJ0aWNhbEFsaWduVmFsdWU7XG59KShUZXh0Rm9ybWF0IHx8IChUZXh0Rm9ybWF0ID0ge30pKTtcbiIsImltcG9ydCB7IEZvbnQgfSBmcm9tICcuL2ZvbnQnO1xuaW1wb3J0IHsgVGV4dEZvcm1hdCB9IGZyb20gJy4vZm9ybWF0JztcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi90ZXh0JztcbmNvbnN0IGRlZmF1bHRUZXh0Rm9ybWF0ID0ge307XG5leHBvcnQgdmFyIFRleHRMaW5lO1xuKGZ1bmN0aW9uIChUZXh0TGluZSkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN5bWJvbHM6IFtdLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFRleHRMaW5lLmNyZWF0ZSA9IGNyZWF0ZTtcbiAgICBmdW5jdGlvbiBlbXB0eShsaW5lKSB7XG4gICAgICAgIGxpbmUuc3ltYm9scy5sZW5ndGggPSAwO1xuICAgICAgICBsaW5lLndpZHRoID0gMDtcbiAgICAgICAgbGluZS5oZWlnaHQgPSAwO1xuICAgIH1cbiAgICBUZXh0TGluZS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGFkZChsaW5lLCBzeW1ib2wpIHtcbiAgICAgICAgbGluZS5zeW1ib2xzLnB1c2goc3ltYm9sKTtcbiAgICAgICAgbGluZS53aWR0aCArPSBzeW1ib2wuYWR2YW5jZTtcbiAgICAgICAgbGluZS5oZWlnaHQgPSBNYXRoLm1heChsaW5lLmhlaWdodCwgc3ltYm9sLmZvcm1hdC5zaXplICsgc3ltYm9sLmZvcm1hdC5sZWFkaW5nKTtcbiAgICB9XG4gICAgVGV4dExpbmUuYWRkID0gYWRkO1xuICAgIGZ1bmN0aW9uIGNvbmNhdCh0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlLnN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0YXJnZXQuc3ltYm9scy5wdXNoKC4uLnNvdXJjZS5zeW1ib2xzKTtcbiAgICAgICAgICAgIHRhcmdldC53aWR0aCArPSBzb3VyY2Uud2lkdGg7XG4gICAgICAgICAgICB0YXJnZXQuaGVpZ2h0ID0gTWF0aC5tYXgodGFyZ2V0LmhlaWdodCwgc291cmNlLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dExpbmUuY29uY2F0ID0gY29uY2F0O1xuICAgIGZ1bmN0aW9uIGNvcnJlY3RXaWR0aChsaW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3ltYm9scyB9ID0gbGluZTtcbiAgICAgICAgaWYgKHN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0ID0gc3ltYm9sc1tzeW1ib2xzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKC9cXHMvLnRlc3QobGFzdC5zeW1ib2wpKSB7XG4gICAgICAgICAgICAgICAgc3ltYm9scy5wb3AoKTtcbiAgICAgICAgICAgICAgICBsaW5lLndpZHRoIC09IGxhc3QuYWR2YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0TGluZS5jb3JyZWN0V2lkdGggPSBjb3JyZWN0V2lkdGg7XG4gICAgZnVuY3Rpb24gY29ycmVjdEhlaWdodChsaW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3ltYm9scyB9ID0gbGluZTtcbiAgICAgICAgaWYgKHN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzWzBdO1xuICAgICAgICAgICAgbGluZS5oZWlnaHQgLT0gc3ltYm9sLmZvcm1hdC5sZWFkaW5nO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRMaW5lLmNvcnJlY3RIZWlnaHQgPSBjb3JyZWN0SGVpZ2h0O1xufSkoVGV4dExpbmUgfHwgKFRleHRMaW5lID0ge30pKTtcbmV4cG9ydCB2YXIgVGV4dE1ldHJpY3M7XG4oZnVuY3Rpb24gKFRleHRNZXRyaWNzKSB7XG4gICAgZnVuY3Rpb24gZ2V0U3ltYm9scyhjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghdGV4dCB8fCAhdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgVGV4dEZvcm1hdC5jb21iaW5lKGNvbXBvbmVudC5mb3JtYXQsIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQsIGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgY29uc3Qgc3ltYm9scyA9IFtdO1xuICAgICAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2xGb3JtYXQgPSB7fTtcbiAgICAgICAgICAgIFRleHRGb3JtYXQuY29weShkZWZhdWx0VGV4dEZvcm1hdCwgc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvbnQgPSBGb250LmdldEZvbnQoc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHRleHRbaV07XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IHRleHRbaSArIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2Uoc3ltYm9sRm9udCwgc3ltYm9sRm9ybWF0LnNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBzeW1ib2xGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICBzeW1ib2xzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgIGFkdmFuY2UsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogc3ltYm9sRm9ybWF0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGV4dCkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJsb2NrID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb3JtYXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgVGV4dEZvcm1hdC5jb3B5KGRlZmF1bHRUZXh0Rm9ybWF0LCBzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb250ID0gRm9udC5nZXRGb250KHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYmxvY2subGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IGJsb2NrW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IGJsb2NrW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2Uoc3ltYm9sRm9udCwgc3ltYm9sRm9ybWF0LnNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBzeW1ib2xGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBzeW1ib2xGb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9ybWF0ID0ge307XG4gICAgICAgICAgICAgICAgICAgIFRleHRGb3JtYXQuY29tYmluZShibG9jaywgZGVmYXVsdFRleHRGb3JtYXQsIHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvbnQgPSBGb250LmdldEZvbnQoc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBibG9jay50ZXh0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBibG9jay50ZXh0W2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IGJsb2NrLnRleHRbaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShzeW1ib2xGb250LCBzeW1ib2xGb3JtYXQuc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIHN5bWJvbEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9scy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHN5bWJvbEZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzeW1ib2xzO1xuICAgIH1cbiAgICBUZXh0TWV0cmljcy5nZXRTeW1ib2xzID0gZ2V0U3ltYm9scztcbiAgICBmdW5jdGlvbiBnZXRMaW5lcyhjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3Qgc3ltYm9scyA9IGdldFN5bWJvbHMoY29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFzeW1ib2xzIHx8ICFzeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCB3b3JkV3JhcCA9IGZhbHNlIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IG11bHRpbGluZSA9IFRleHQuaXNNdWx0aWxpbmUoY29tcG9uZW50KTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXTtcbiAgICAgICAgbGV0IGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgaWYgKG11bHRpbGluZSkge1xuICAgICAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdvcmRXcmFwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdvcmQgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbC5zeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuY29uY2F0KGxpbmUsIHdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmVtcHR5KHdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKHdvcmQsIHN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmUud2lkdGggKyB3b3JkLndpZHRoID4gd2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgvXFxzLy50ZXN0KHN5bWJvbC5zeW1ib2wpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmNvbmNhdChsaW5lLCB3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuZW1wdHkod29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmNvbmNhdChsaW5lLCB3b3JkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2wuc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobGluZS53aWR0aCArIHN5bWJvbC5hZHZhbmNlID4gd2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQobGluZSwgc3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZChsaW5lLCBzeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2wuc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZChsaW5lLCBzeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tpXTtcbiAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQobGluZSwgc3ltYm9sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobGluZS5zeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGluZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgICAgIFRleHRMaW5lLmNvcnJlY3RXaWR0aChsaW5lKTtcbiAgICAgICAgICAgICAgICBpZiAoIWxpbmUuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuaGVpZ2h0ID0gZGVmYXVsdFRleHRGb3JtYXQuc2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW5lID0gbGluZXNbbGluZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBUZXh0TGluZS5jb3JyZWN0SGVpZ2h0KGxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lcztcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0TGluZXMgPSBnZXRMaW5lcztcbiAgICBmdW5jdGlvbiBnZXRNZXRyaWNzKGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBsaW5lcyA9IGdldExpbmVzKGNvbXBvbmVudCk7XG4gICAgICAgIGlmICghbGluZXMgfHwgIWxpbmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXRyaWNzID0ge1xuICAgICAgICAgICAgbGluZXMsXG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgbWV0cmljcy53aWR0aCA9IE1hdGgubWF4KG1ldHJpY3Mud2lkdGgsIGxpbmUud2lkdGgpO1xuICAgICAgICAgICAgbWV0cmljcy5oZWlnaHQgKz0gbGluZS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldHJpY3M7XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldE1ldHJpY3MgPSBnZXRNZXRyaWNzO1xuICAgIGZ1bmN0aW9uIGdldFNpbXBsZU1ldHJpY3MoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAodHlwZW9mIHRleHQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIFRleHRGb3JtYXQuY29tYmluZShjb21wb25lbnQuZm9ybWF0LCBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LCBkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGNvbnN0IHsgc2l6ZSwgbGV0dGVyU3BhY2luZywgbGVhZGluZyB9ID0gZGVmYXVsdFRleHRGb3JtYXQ7XG4gICAgICAgIGNvbnN0IGZvbnQgPSBGb250LmdldEZvbnQoZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gc2l6ZTtcbiAgICAgICAgbGV0IGxpbmVXaWR0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gdGV4dFtpXTtcbiAgICAgICAgICAgIGlmIChzeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ICs9IHNpemUgKyBsZWFkaW5nO1xuICAgICAgICAgICAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGxpbmVXaWR0aCk7XG4gICAgICAgICAgICAgICAgbGluZVdpZHRoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSB0ZXh0W2kgKyAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKGZvbnQsIHNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBsZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgIGxpbmVXaWR0aCArPSBhZHZhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGxpbmVXaWR0aCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0U2ltcGxlTWV0cmljcyA9IGdldFNpbXBsZU1ldHJpY3M7XG4gICAgZnVuY3Rpb24gZ2V0U2ltcGxlV2lkdGgoZm9ybWF0LCB0ZXh0LCBpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPj0gdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIFRleHRGb3JtYXQuY29tYmluZShmb3JtYXQsIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQsIGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgY29uc3QgeyBzaXplLCBsZXR0ZXJTcGFjaW5nIH0gPSBkZWZhdWx0VGV4dEZvcm1hdDtcbiAgICAgICAgY29uc3QgZm9udCA9IEZvbnQuZ2V0Rm9udChkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHRleHRbaV07XG4gICAgICAgICAgICBpZiAoc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSB0ZXh0W2kgKyAxXTtcbiAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2UoZm9udCwgc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIGxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICB3aWR0aCArPSBhZHZhbmNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0U2ltcGxlV2lkdGggPSBnZXRTaW1wbGVXaWR0aDtcbn0pKFRleHRNZXRyaWNzIHx8IChUZXh0TWV0cmljcyA9IHt9KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL3RleHQnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL2Zvcm1hdCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvZm9udCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvbWV0cmljcyc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy90ZXh0JztcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IFRleHRNZXRyaWNzIH0gZnJvbSAnLi9kYXRhL21ldHJpY3MnO1xuZXhwb3J0IGNvbnN0IFRFWFQgPSAndGV4dCc7XG5leHBvcnQgdmFyIFRleHQ7XG4oZnVuY3Rpb24gKFRleHQpIHtcbiAgICBmdW5jdGlvbiBnZXRUZXh0KGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCB7IHRleHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGV4dCkpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJsb2NrID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gYmxvY2sudGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgVGV4dC5nZXRUZXh0ID0gZ2V0VGV4dDtcbiAgICBmdW5jdGlvbiBpc1VwZGF0ZU1ldHJpY3MoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQudXBkYXRlTWV0cmljcyA/PyB0cnVlO1xuICAgIH1cbiAgICBUZXh0LmlzVXBkYXRlTWV0cmljcyA9IGlzVXBkYXRlTWV0cmljcztcbiAgICBmdW5jdGlvbiBpc0F1dG9TaXplKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gIWNvbXBvbmVudC53aWR0aCAmJiAhY29tcG9uZW50LmhlaWdodDtcbiAgICB9XG4gICAgVGV4dC5pc0F1dG9TaXplID0gaXNBdXRvU2l6ZTtcbiAgICBmdW5jdGlvbiBpc1NpbXBsZShjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjb21wb25lbnQudGV4dCA9PT0gJ3N0cmluZycgJiYgaXNBdXRvU2l6ZShjb21wb25lbnQpO1xuICAgIH1cbiAgICBUZXh0LmlzU2ltcGxlID0gaXNTaW1wbGU7XG4gICAgZnVuY3Rpb24gaXNNdWx0aWxpbmUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQubXVsdGlsaW5lID8/IHRydWU7XG4gICAgfVxuICAgIFRleHQuaXNNdWx0aWxpbmUgPSBpc011bHRpbGluZTtcbiAgICBmdW5jdGlvbiB1cGRhdGVNZXRyaWNzKGNvbXBvbmVudCkge1xuICAgICAgICBpZiAoaXNTaW1wbGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgY29tcG9uZW50Lm1ldHJpY3MgPSBUZXh0TWV0cmljcy5nZXRTaW1wbGVNZXRyaWNzKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb21wb25lbnQubWV0cmljcyA9IFRleHRNZXRyaWNzLmdldE1ldHJpY3MoY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0LnVwZGF0ZU1ldHJpY3MgPSB1cGRhdGVNZXRyaWNzO1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhjb21wb25lbnQsIGJvdW5kcykge1xuICAgICAgICBpZiAoaXNVcGRhdGVNZXRyaWNzKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHVwZGF0ZU1ldHJpY3MoY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG1ldHJpY3MgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCFtZXRyaWNzKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghd2lkdGgpIHtcbiAgICAgICAgICAgIHdpZHRoID0gbWV0cmljcy53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhlaWdodCkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gbWV0cmljcy5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoY29tcG9uZW50LCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGNvbXBvbmVudCwgaGVpZ2h0KTtcbiAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgIGJvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBUZXh0LmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFRleHQgfHwgKFRleHQgPSB7fSkpO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIFRleHRFeHRlbnNpb247XG4oZnVuY3Rpb24gKFRleHRFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KHRleHQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGxvY2FsIH0gPSBlbmdpbmUucG9pbnRlcnM7XG4gICAgICAgIFRleHQuY2FsY3VsYXRlQm91bmRzKHRleHQsIGJvdW5kcyk7XG4gICAgICAgIHJldHVybiBSZWN0YW5nbGUuY29udGFpbnMoYm91bmRzLCBsb2NhbCk7XG4gICAgfVxuICAgIFRleHRFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoVEVYVCwgaGl0VGVzdCk7XG4gICAgfVxuICAgIFRleHRFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShUZXh0RXh0ZW5zaW9uIHx8IChUZXh0RXh0ZW5zaW9uID0ge30pKTtcbiIsImV4cG9ydCBjb25zdCBMSU5FQVIgPSAnbGluZWFyJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUMgPSAncXVhZHJhdGljJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUNfSU4gPSAncXVhZHJhdGljaW4nO1xuZXhwb3J0IGNvbnN0IFFVQURSQVRJQ19PVVQgPSAncXVhZHJhdGljb3V0JztcbmV4cG9ydCBjb25zdCBDVUJJQyA9ICdjdWJpYyc7XG5leHBvcnQgY29uc3QgQ1VCSUNfSU4gPSAnY3ViaWNpbic7XG5leHBvcnQgY29uc3QgQ1VCSUNfT1VUID0gJ2N1Ymljb3V0JztcbmV4cG9ydCBjb25zdCBRVUFSVElDID0gJ3F1YXJ0aWMnO1xuZXhwb3J0IGNvbnN0IFFVQVJUSUNfSU4gPSAncXVhcnRpY2luJztcbmV4cG9ydCBjb25zdCBRVUFSVElDX09VVCA9ICdxdWFydGljb3V0JztcbmV4cG9ydCBjb25zdCBRVUlOVElDID0gJ3F1aW50aWMnO1xuZXhwb3J0IGNvbnN0IFFVSU5USUNfSU4gPSAncXVpbnRpY2luJztcbmV4cG9ydCBjb25zdCBRVUlOVElDX09VVCA9ICdxdWludGljb3V0JztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMID0gJ3F1aW50aWMnO1xuZXhwb3J0IGNvbnN0IFNJTlVTT0lEQUxfSU4gPSAncXVpbnRpY2luJztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMX09VVCA9ICdxdWludGljb3V0JztcbmV4cG9ydCBjb25zdCBFWFBPTkVOVElBTCA9ICdleHBvbmVudGlhbCc7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUxfSU4gPSAnZXhwb25lbnRpYWxpbic7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUxfT1VUID0gJ2V4cG9uZW50aWFsb3V0JztcbmV4cG9ydCBjb25zdCBDSVJDVUxBUiA9ICdjaXJjdWxhcic7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVJfSU4gPSAnY2lyY3VsYXJpbic7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVJfT1VUID0gJ2NpcmN1bGFyb3V0JztcbmV4cG9ydCBjb25zdCBFTEFTVElDID0gJ2VsYXN0aWMnO1xuZXhwb3J0IGNvbnN0IEVMQVNUSUNfSU4gPSAnZWxhc3RpY2luJztcbmV4cG9ydCBjb25zdCBFTEFTVElDX09VVCA9ICdlbGFzdGljb3V0JztcbmV4cG9ydCBjb25zdCBCQUNLID0gJ2JhY2snO1xuZXhwb3J0IGNvbnN0IEJBQ0tfSU4gPSAnYmFja2luJztcbmV4cG9ydCBjb25zdCBCQUNLX09VVCA9ICdiYWNrb3V0JztcbmV4cG9ydCBjb25zdCBCT1VOQ0UgPSAnYm91bmNlJztcbmV4cG9ydCBjb25zdCBCT1VOQ0VfSU4gPSAnYm91bmNlaW4nO1xuZXhwb3J0IGNvbnN0IEJPVU5DRV9PVVQgPSAnYm91bmNlb3V0JztcbmV4cG9ydCBjb25zdCBlYXNpbmcgPSB7XG4gICAgW0xJTkVBUl06ICh2YWx1ZSkgPT4gdmFsdWUsXG4gICAgW1FVQURSQVRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoLS12YWx1ZSAqICh2YWx1ZSAtIDIpIC0gMSk7XG4gICAgfSxcbiAgICBbUVVBRFJBVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVQURSQVRJQ19PVVRdOiAodmFsdWUpID0+ICh2YWx1ZSAqICgyIC0gdmFsdWUpKSxcbiAgICBbQ1VCSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqIHZhbHVlICsgMik7XG4gICAgfSxcbiAgICBbQ1VCSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtDVUJJQ19PVVRdOiAodmFsdWUpID0+ICgtLXZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDEpLFxuICAgIFtRVUFSVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlIC0gMik7XG4gICAgfSxcbiAgICBbUVVBUlRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVBUlRJQ19PVVRdOiAodmFsdWUpID0+ICgxIC0gLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVSU5USUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAyKTtcbiAgICB9LFxuICAgIFtRVUlOVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVSU5USUNfT1VUXTogKHZhbHVlKSA9PiAoLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMSksXG4gICAgW1NJTlVTT0lEQUxdOiAodmFsdWUpID0+ICgwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiB2YWx1ZSkpKSxcbiAgICBbU0lOVVNPSURBTF9JTl06ICh2YWx1ZSkgPT4gKDEgLSBNYXRoLmNvcygodmFsdWUgKiBNYXRoLlBJKSAvIDIpKSxcbiAgICBbU0lOVVNPSURBTF9PVVRdOiAodmFsdWUpID0+IChNYXRoLnNpbigodmFsdWUgKiBNYXRoLlBJKSAvIDIpKSxcbiAgICBbRVhQT05FTlRJQUxdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogTWF0aC5wb3coMTAyNCwgdmFsdWUgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKC1NYXRoLnBvdygyLCAtMTAgKiAodmFsdWUgLSAxKSkgKyAyKTtcbiAgICB9LFxuICAgIFtFWFBPTkVOVElBTF9JTl06ICh2YWx1ZSkgPT4gKHZhbHVlID09PSAwID8gMCA6IE1hdGgucG93KDEwMjQsIHZhbHVlIC0gMSkpLFxuICAgIFtFWFBPTkVOVElBTF9PVVRdOiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coMiwgLTEwICogdmFsdWUpKSxcbiAgICBbQ0lSQ1VMQVJdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHZhbHVlIC09IDIpICogdmFsdWUpICsgMSk7XG4gICAgfSxcbiAgICBbQ0lSQ1VMQVJfSU5dOiAodmFsdWUpID0+ICgxIC0gTWF0aC5zcXJ0KDEgLSB2YWx1ZSAqIHZhbHVlKSksXG4gICAgW0NJUkNVTEFSX09VVF06ICh2YWx1ZSkgPT4gTWF0aC5zcXJ0KDEgLSAtLXZhbHVlICogdmFsdWUpLFxuICAgIFtFTEFTVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSAqPSAyO1xuICAgICAgICBpZiAodmFsdWUgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gLTAuNSAqIE1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogTWF0aC5wb3coMiwgLTEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG4gICAgfSxcbiAgICBbRUxBU1RJQ19JTl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC1NYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG4gICAgfSxcbiAgICBbRUxBU1RJQ19PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLnBvdygyLCAtMTAgKiB2YWx1ZSkgKiBNYXRoLnNpbigodmFsdWUgLSAwLjEpICogNSAqIE1hdGguUEkpICsgMTtcbiAgICB9LFxuICAgIFtCQUNLXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4ICogMS41MjU7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogKHZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlIC0gcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlICsgcykgKyAyKTtcbiAgICB9LFxuICAgIFtCQUNLX0lOXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gdmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgLSBzKTtcbiAgICB9LFxuICAgIFtCQUNLX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICAgICAgcmV0dXJuIC0tdmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgKyBzKSArIDE7XG4gICAgfSxcbiAgICBbQk9VTkNFXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDAuNSkge1xuICAgICAgICAgICAgcmV0dXJuIGVhc2luZ1tCT1VOQ0VfSU5dKHZhbHVlICogMikgKiAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVhc2luZ1tCT1VOQ0VfT1VUXSh2YWx1ZSAqIDIgLSAxKSAqIDAuNSArIDAuNTtcbiAgICB9LFxuICAgIFtCT1VOQ0VfSU5dOiAodmFsdWUpID0+ICgxIC0gZWFzaW5nW0JPVU5DRV9PVVRdKDEgLSB2YWx1ZSkpLFxuICAgIFtCT1VOQ0VfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDEgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPCAyIC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAxLjUgLyAyLjc1KSAqIHZhbHVlICsgMC43NTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPCAyLjUgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDIuMjUgLyAyLjc1KSAqIHZhbHVlICsgMC45Mzc1O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMi42MjUgLyAyLjc1KSAqIHZhbHVlICsgMC45ODQzNzU7XG4gICAgfSxcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3R3ZWVuJztcbmV4cG9ydCAqIGZyb20gJy4vZWFzaW5nJztcbiIsImltcG9ydCB7IGVhc2luZywgTElORUFSIH0gZnJvbSAnLi9lYXNpbmcnO1xuZXhwb3J0IGNvbnN0IFRXRUVOID0gJ3R3ZWVuJztcbmV4cG9ydCB2YXIgVHdlZW5FeHRlbnNpb247XG4oZnVuY3Rpb24gKFR3ZWVuRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbXBvbmVudCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgdHdlZW4gfSA9IGNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgeyBwaGFzZXMgfSA9IHR3ZWVuO1xuICAgICAgICBpZiAoIXBoYXNlcz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnQW5pbWF0aW9uIHBhcnRzIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0d2Vlbi50aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHR3ZWVuLnRpbWUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHR3ZWVuLnRpbWUgKz0gZW5naW5lLnVwZGF0ZXIudGltZTtcbiAgICAgICAgY29uc3QgeyB0aW1lIH0gPSB0d2VlbjtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIHBoYXNlcy5mb3JFYWNoKChwaGFzZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFwaGFzZS50aW1lKSB7XG4gICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ0FuaW1hdGlvbiB0aW1lIG5vdCBzZXQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGhhc2Uub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBwaGFzZS5vZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlYXNpbmdOYW1lID0gcGhhc2U/LmVhc2luZz8udG9Mb3dlckNhc2UoKSA/PyBMSU5FQVI7XG4gICAgICAgICAgICBjb25zdCBlYXNpbmdNZXRob2QgPSBlYXNpbmdbZWFzaW5nTmFtZV07XG4gICAgICAgICAgICBpZiAoIWVhc2luZ01ldGhvZCkge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBVbmtub3duIGVhc2luZyB0eXBlOiAke2Vhc2luZ31gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICh0aW1lIC0gb2Zmc2V0KSAvIHBoYXNlLnRpbWU7XG4gICAgICAgICAgICBvZmZzZXQgKz0gcGhhc2UudGltZTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IDAgfHwgdmFsdWUgPiAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZWFzaW5nVmFsdWUgPSBlYXNpbmdNZXRob2QodmFsdWUpO1xuICAgICAgICAgICAgaWYgKCFwaGFzZS50bykge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdBbmltYXRpb24gXCJ0b1wiIHN0YXRlIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcGhhc2UuZnJvbSkge1xuICAgICAgICAgICAgICAgIHBoYXNlLmZyb20gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdG8sIGZyb20gfSA9IHBoYXNlO1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBjb21wb25lbnQ7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0bykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZyb21ba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21ba2V5XSA9IHN0YXRlW2tleV0gPz8gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZnJvbVZhbHVlID0gZnJvbVtrZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvVmFsdWUgPSB0b1trZXldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZnJvbVZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdG9WYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVWYWx1ZSA9IGZyb21WYWx1ZSArIGVhc2luZ1ZhbHVlICogKHRvVmFsdWUgLSBmcm9tVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gc3RhdGVWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0d2Vlbi5sb29wICYmIHR3ZWVuLnRpbWUgPiBvZmZzZXQpIHtcbiAgICAgICAgICAgIHR3ZWVuLnRpbWUgPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFR3ZWVuRXh0ZW5zaW9uLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5wcm9wZXJ0aWVzLnNldChUV0VFTiwgdXBkYXRlKTtcbiAgICB9XG4gICAgVHdlZW5FeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShUd2VlbkV4dGVuc2lvbiB8fCAoVHdlZW5FeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAamVuZy9jb3JlJztcbmV4cG9ydCBjbGFzcyBXZWJQbGF0Zm9ybSBleHRlbmRzIFBsYXRmb3JtIHtcbn1cbiIsImltcG9ydCB7IFNjcmVlbiB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuZXhwb3J0IGNsYXNzIFdlYlNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG4gICAgZ2V0V2luZG93V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB9XG4gICAgZ2V0V2luZG93SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cbiAgICBnZXRXaW5kb3dQaXhlbFJhdGlvKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmRldmljZVBpeGVsUmF0aW8gPz8gMTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3NjcmVlbic7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyYWN0aXZlL2tleWJvYXJkJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJhY3RpdmUvbW91c2UnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmFjdGl2ZS90b3VjaCc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3BsYXRmb3JtJztcbiIsImZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgdHlwZSkge1xuICAgIGNvbnN0IGtleUV2ZW50ID0ge1xuICAgICAgICB0eXBlLFxuICAgICAgICBrZXk6IGV2ZW50LmtleSxcbiAgICAgICAgY29kZTogZXZlbnQuY29kZSxcbiAgICAgICAgY3RybDogZXZlbnQuY3RybEtleSxcbiAgICAgICAgYWx0OiBldmVudC5hbHRLZXksXG4gICAgICAgIHNoaWZ0OiBldmVudC5zaGlmdEtleSxcbiAgICAgICAgcmVwZWF0OiBldmVudC5yZXBlYXQsXG4gICAgfTtcbiAgICBlbmdpbmUua2V5Ym9hcmQuZGlzcGF0Y2goa2V5RXZlbnQpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5leHBvcnQgdmFyIEtleWJvYXJkRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChLZXlib2FyZEV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ2tleURvd24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdrZXlQcmVzcycpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ2tleVVwJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBLZXlib2FyZEV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKEtleWJvYXJkRXh0ZW5zaW9uIHx8IChLZXlib2FyZEV4dGVuc2lvbiA9IHt9KSk7XG4iLCJmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsIHR5cGUpIHtcbiAgICBjb25zdCB7IHZpZXcgfSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICBjb25zdCBjbGllbnRSZWN0ID0gdmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIGNsaWVudFJlY3QubGVmdCAtIHZpZXcuY2xpZW50TGVmdDtcbiAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIGNsaWVudFJlY3QudG9wIC0gdmlldy5jbGllbnRUb3A7XG4gICAgZW5naW5lLnBvaW50ZXJzLmRpc3BhdGNoKHR5cGUsIHgsIHksIDApO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5leHBvcnQgdmFyIE1vdXNlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChNb3VzZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gZW5naW5lLnBsYXRmb3JtO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckRvd24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlclVwJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlck1vdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckNhbmNlbCcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgTW91c2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShNb3VzZUV4dGVuc2lvbiB8fCAoTW91c2VFeHRlbnNpb24gPSB7fSkpO1xuIiwiZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCB0eXBlKSB7XG4gICAgY29uc3QgeyB2aWV3IH0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgY29uc3QgY2xpZW50UmVjdCA9IHZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldO1xuICAgICAgICBjb25zdCB4ID0gdG91Y2guY2xpZW50WCAtIGNsaWVudFJlY3QubGVmdCAtIHZpZXcuY2xpZW50TGVmdDtcbiAgICAgICAgY29uc3QgeSA9IHRvdWNoLmNsaWVudFkgLSBjbGllbnRSZWN0LnRvcCAtIHZpZXcuY2xpZW50VG9wO1xuICAgICAgICBlbmdpbmUucG9pbnRlcnMuZGlzcGF0Y2godHlwZSwgeCwgeSwgdG91Y2guaWRlbnRpZmllcik7XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5leHBvcnQgdmFyIFRvdWNoRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChUb3VjaEV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gZW5naW5lLnBsYXRmb3JtO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJEb3duJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyVXAnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyTW92ZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckNhbmNlbCcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgVG91Y2hFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShUb3VjaEV4dGVuc2lvbiB8fCAoVG91Y2hFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgQUJJTElUWV9XT0xGIH0gZnJvbSAnLi9hc3NldHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN1cnNpdmUoKSB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHR4OiAzMCxcblx0XHRcdHk6IDMwLFxuXHRcdFx0c2NhbGVYOiAwLjksXG5cdFx0XHRzY2FsZVk6IDAuOSxcblx0XHRcdHJvdGF0aW9uOiAwLjIsXG5cdFx0XHRhbHBoYTogMC45LFxuXHRcdFx0Y2hpbGRyZW46IFt7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQUJJTElUWV9XT0xGLFxuXHRcdFx0XHRzY2FsZTogMC4zLFxuXHRcdFx0fV0sXG5cdFx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdFx0dGhpcy5yb3RhdGlvbiArPSB0aW1lICogMC4wNTtcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblxuXHRjb250YWluZXIuY2hpbGRyZW4uY2hpbGRyZW4ucHVzaChjb250YWluZXIgYXMgbmV2ZXIpO1xuXG5cdHJldHVybiBjb250YWluZXI7XG59XG4iLCJjb25zdCBBU1NFVFMgPSAnYXNzZXRzLyc7XG5cbmV4cG9ydCBjb25zdCBBTklNQUxJU1QgPSAnaWQ6YW5pbWFsaXN0JztcbmV4cG9ydCBjb25zdCBBUkNIRVIgPSAnaWQ6YXJjaGVyJztcblxuZXhwb3J0IGNvbnN0IEFOSU1BTElTVF9JTUFHRSA9IGAke0FTU0VUU31BbmltYWxpc3RGb3gxX2ltYWdlLnBuZ2A7XG5leHBvcnQgY29uc3QgQVJDSEVSX0lNQUdFID0gYCR7QVNTRVRTfUFyY2hlcjJfaHVudGVyX2ltYWdlLnBuZ2A7XG5cbmV4cG9ydCBjb25zdCBBQklMSVRZX0ZPWCA9IGAke0FTU0VUU31BbmltYWxpc3RBYmlsaXR5X0ZveC5wbmdgO1xuZXhwb3J0IGNvbnN0IEFCSUxJVFlfV09MRiA9IGAke0FTU0VUU31BbmltYWxpc3RBYmlsaXR5X1dvbGYucG5nYDtcblxuZXhwb3J0IGNvbnN0IEJBQ0tHUk9VTkQgPSBgJHtBU1NFVFN9anVuZ2xlX2JhY2tncm91bmQuanBnYDtcblxuZXhwb3J0IGNvbnN0IFRFU1RfQ0FOVkFTID0gJ3Rlc3QuY2FudmFzJztcblxuZXhwb3J0IGNvbnN0IFNDRU5FID0gYCR7QVNTRVRTfS9zY2VuZS5qc29uYDtcbiIsImltcG9ydCB7IENhbnZhc0VuZ2luZSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgQ2FudmFzVGV4dEV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3RleHQnO1xuaW1wb3J0IHsgQ3VzdG9tSW1hZ2VFeHRlbnNpb24gfSBmcm9tICcuL2ltYWdlJztcbmltcG9ydCBDdXN0b21QbGF0Zm9ybSBmcm9tICcuL3BsYXRmb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tRW5naW5lIGV4dGVuZHMgQ2FudmFzRW5naW5lIHtcblx0cGxhdGZvcm06IEN1c3RvbVBsYXRmb3JtO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5wbGF0Zm9ybSA9IG5ldyBDdXN0b21QbGF0Zm9ybSh0aGlzKTtcblxuXHRcdENhbnZhc1RleHRFeHRlbnNpb24uaW5pdCh0aGlzKTtcblx0XHRDdXN0b21JbWFnZUV4dGVuc2lvbi5pbml0KHRoaXMpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDYW52YXNQbGF0Zm9ybSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgRW5naW5lLCBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VFeHRlbnNpb24sIElNQUdFLCBJbWFnZSB9IGZyb20gJ0BqZW5nL2ltYWdlJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuaW1wb3J0IEN1c3RvbUVuZ2luZSBmcm9tICcuL2VuZ2luZSc7XG5cbmV4cG9ydCBuYW1lc3BhY2UgQ3VzdG9tSW1hZ2VFeHRlbnNpb24ge1xuXHRleHBvcnQgZnVuY3Rpb24gcmVuZGVyKGltYWdlOiBJbWFnZSwgZW5naW5lOiBFbmdpbmUpOiB2b2lkIHtcblx0XHRpZiAoIWltYWdlLnNyYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHsgbWF0cml4LCBjb2xvclRyYW5zZm9ybSB9ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcblxuXHRcdGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoaW1hZ2Uuc3JjKSBhcyBJbWFnZVJlc291cmNlIHwgbnVsbDtcblxuXHRcdGlmICghcmVzb3VyY2U/LmxvYWRlZCB8fCAhcmVzb3VyY2U/LmltYWdlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29udGV4dDJkID0gKGVuZ2luZS5wbGF0Zm9ybSBhcyBDYW52YXNQbGF0Zm9ybSkuZ2V0Q29udGV4dCgpO1xuXG5cdFx0Y29udGV4dDJkLnNldFRyYW5zZm9ybShcblx0XHRcdG1hdHJpeC5hLFxuXHRcdFx0bWF0cml4LmIsXG5cdFx0XHRtYXRyaXguYyxcblx0XHRcdG1hdHJpeC5kLFxuXHRcdFx0bWF0cml4LnR4LFxuXHRcdFx0bWF0cml4LnR5LFxuXHRcdCk7XG5cblx0XHRjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuXHRcdGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG5cdFx0Y29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG5cblx0XHRjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcblx0XHRjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnbGlnaHRncmF5Jztcblx0XHRjb250ZXh0MmQuc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcblx0fVxuXG5cdGV4cG9ydCBmdW5jdGlvbiBpbml0KGVuZ2luZTogQ3VzdG9tRW5naW5lKSB7XG5cdFx0SW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuXHRcdGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoSU1BR0UsIHJlbmRlcik7XG5cdH1cbn1cbiIsImltcG9ydCB7IENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnQGplbmcvY2FudmFzLWVuZ2luZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVBsYXRmb3JtIGV4dGVuZHMgQ2FudmFzUGxhdGZvcm0ge1xuXHRjbGVhcigpIHtcblx0XHRjb25zdCBjb250ZXh0MmQgPSB0aGlzLmdldENvbnRleHQoKTtcblx0XHRjb250ZXh0MmQuZmlsbFN0eWxlID0gJ2JsYWNrJztcblx0XHRjb250ZXh0MmQuc2V0VHJhbnNmb3JtKCk7XG5cdFx0Y29udGV4dDJkLmZpbGxSZWN0KDAsIDAsIGNvbnRleHQyZC5jYW52YXMud2lkdGgsIGNvbnRleHQyZC5jYW52YXMuaGVpZ2h0KTtcblx0XHRjb250ZXh0MmQuZmlsbFN0eWxlID0gJyc7XG5cdH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZSB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVJlc291cmNlTWFuYWdlciB7XG5cdHJlYWRvbmx5IGFsaWFzZXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXHRyZWFkb25seSByZXNvdXJjZXMgPSBuZXcgTWFwPHN0cmluZywgSW1hZ2VSZXNvdXJjZT4oKTtcblxuXHRyZXNvbHZlID0gKGFzc2V0OiBzdHJpbmcsIGVuZ2luZTogRW5naW5lKTogSW1hZ2VSZXNvdXJjZSB8IG51bGwgPT4ge1xuXHRcdGlmIChhc3NldC5pbmRleE9mKCdpZDonKSA9PT0gMCkge1xuXHRcdFx0Y29uc3QgaWQgPSBhc3NldC5zbGljZSgzKTtcblx0XHRcdGxldCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VzLmdldChpZCkgYXMgSW1hZ2VSZXNvdXJjZTtcblx0XHRcdGlmICghcmVzb3VyY2UpIHtcblx0XHRcdFx0Y29uc3QgdXJsID0gdGhpcy5hbGlhc2VzLmdldChpZCk7XG5cdFx0XHRcdGlmICh1cmwpIHtcblx0XHRcdFx0XHRyZXNvdXJjZSA9IEltYWdlUmVzb3VyY2UucmVzb2x2ZSh1cmwsIGVuZ2luZSkgYXMgSW1hZ2VSZXNvdXJjZTtcblx0XHRcdFx0XHR0aGlzLnJlc291cmNlcy5zZXQoaWQsIHJlc291cmNlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbmdpbmUuZGVidWcud2FybmluZyhgUmVzb3VyY2Ugd2l0aCBpZDogJHthc3NldH0gbm90IGZvdW5kYCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZXNvdXJjZTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRpbml0KGVuZ2luZTogRW5naW5lKSB7XG5cdFx0ZW5naW5lLnJlc291cmNlcy5yZXNvbHZlcnMuYWRkKHRoaXMucmVzb2x2ZSk7XG5cdH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgU3RhdGlzdGljcyB7XG5cdGdldFJlbmRlclRpbWUoKTogbnVtYmVyO1xuXHRnZXRVcGRhdGVUaW1lKCk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZwcyhzdGF0aXN0aWNzOiBTdGF0aXN0aWNzKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHRleHQ6ICdmcHMnLFxuXHRcdGZyYW1lczogMCxcblx0XHRmcmFtZVRpbWU6IDAsXG5cdFx0dXBkYXRlVGltZTogMCxcblx0XHRyZW5kZXJUaW1lOiAwLFxuXHRcdGZvcm1hdDoge1xuXHRcdFx0c2l6ZTogMjAsXG5cdFx0XHRjb2xvcjogMHhmZmZmZmYsXG5cdFx0fSxcblx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMuZnJhbWVUaW1lICs9IHRpbWU7XG5cdFx0XHR0aGlzLnVwZGF0ZVRpbWUgKz0gc3RhdGlzdGljcy5nZXRVcGRhdGVUaW1lKCk7XG5cdFx0XHR0aGlzLnJlbmRlclRpbWUgKz0gc3RhdGlzdGljcy5nZXRSZW5kZXJUaW1lKCk7XG5cdFx0XHR0aGlzLmZyYW1lcysrO1xuXHRcdFx0aWYgKHRoaXMuZnJhbWVUaW1lID49IDEpIHtcblx0XHRcdFx0Y29uc3QgZnJhbWVUaW1lID0gTWF0aC5jZWlsKDEwMDAgKiB0aGlzLmZyYW1lVGltZSAvIHRoaXMuZnJhbWVzKTtcblx0XHRcdFx0Y29uc3QgdXBkYXRlVGltZSA9ICh0aGlzLnVwZGF0ZVRpbWUgLyB0aGlzLmZyYW1lcykudG9GaXhlZCgyKTtcblx0XHRcdFx0Y29uc3QgcmVuZGVyVGltZSA9ICh0aGlzLnJlbmRlclRpbWUgLyB0aGlzLmZyYW1lcykudG9GaXhlZCgyKTtcblx0XHRcdFx0dGhpcy50ZXh0ID0gYGZwczogJHt0aGlzLmZyYW1lc30sICR7ZnJhbWVUaW1lfSBtc1xcbnVwZGF0ZTogJHt1cGRhdGVUaW1lfSBtc1xcbnJlbmRlcjogJHtyZW5kZXJUaW1lfSBtc2A7XG5cdFx0XHRcdHRoaXMuZnJhbWVUaW1lID0gMDtcblx0XHRcdFx0dGhpcy51cGRhdGVUaW1lID0gMDtcblx0XHRcdFx0dGhpcy5yZW5kZXJUaW1lID0gMDtcblx0XHRcdFx0dGhpcy5mcmFtZXMgPSAwO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7XG5cdEFCSUxJVFlfRk9YLCBBQklMSVRZX1dPTEYsIEFOSU1BTElTVCwgQVJDSEVSLCBCQUNLR1JPVU5ELCBTQ0VORSxcbn0gZnJvbSAnLi9hc3NldHMnO1xuaW1wb3J0IGFydGlmYWN0IGZyb20gJy4vYXJ0aWZhY3QnO1xuaW1wb3J0IHsgZnBzLCBTdGF0aXN0aWNzIH0gZnJvbSAnLi9mcHMnO1xuaW1wb3J0IHsgdW5pdCwgVW5pdFByb3BlcnRpZXMgfSBmcm9tICcuL3VuaXQnO1xuaW1wb3J0IHsgcHJlbG9hZGVyLCBQcmVsb2FkZXJJbmZvIH0gZnJvbSAnLi9wcmVsb2FkZXInO1xuXG5pbnRlcmZhY2UgTWFpbiB7XG5cdHN0YXJ0KCk6IHZvaWQ7XG5cdFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuaW50ZXJmYWNlIE1haW5Qcm9wZXJ0aWVzIGV4dGVuZHMgU3RhdGlzdGljcyB7XG5cdGdldENhbnZhc1dpZHRoKCk6IG51bWJlcjtcblx0Z2V0Q2FudmFzSGVpZ2h0KCk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbihwYXJhbWV0ZXJzOiBNYWluUHJvcGVydGllcyk6IE1haW4ge1xuXHRmdW5jdGlvbiBvblVuaXRDbGljayhkYXRhOiBVbml0UHJvcGVydGllcykge1xuXHRcdGRhdGEuaGVhbHRoID0gTWF0aC5yYW5kb20oKTtcblx0XHRjb25zb2xlLmxvZygnb25Vbml0Q2xpY2snLCBkYXRhLm5hbWUpO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IHtcblx0XHR0eXBlOiAnbG9hZGVyJyxcblx0XHR2aXNpYmxlOiBmYWxzZSxcblx0XHRlbmFibGVkOiBmYWxzZSxcblx0XHRvbkxvYWRlZCgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdiYWNrZ3JvdW5kIGxvYWRlZCcpO1xuXHRcdFx0dGhpcy52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0fSxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0YmFja2dyb3VuZDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEJBQ0tHUk9VTkQsXG5cdFx0XHRcdHNjYWxlWDogMSxcblx0XHRcdFx0c2NhbGVZOiAxLFxuXHRcdFx0fSxcblx0XHRcdGZpZ3VyZToge1xuXHRcdFx0XHR0eXBlOiAnc2hhcGUnLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3JlY3RhbmdsZScsXG5cdFx0XHRcdFx0eDogMjAsXG5cdFx0XHRcdFx0eTogMjAsXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCxcblx0XHRcdFx0XHRoZWlnaHQ6IDUwLFxuXHRcdFx0XHRcdGZpbGw6IDB4ZmYwMGZmLFxuXHRcdFx0XHRcdHN0cm9rZTogMHgwMDAwZmYsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0c2hhcGVzOiB7XG5cdFx0XHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0XHRcdGRhdGE6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAnZWxsaXBzZScsXG5cdFx0XHRcdFx0XHR4OiAxMDAsXG5cdFx0XHRcdFx0XHR5OiAxMDAsXG5cdFx0XHRcdFx0XHRyYWRpdXM6IDUwLFxuXHRcdFx0XHRcdFx0ZmlsbDogeyB0eXBlOiAnc29saWQnLCBjb2xvcjogMHhmZmZmMDAsIGFscGhhOiAxIH0sXG5cdFx0XHRcdFx0XHRzdHJva2U6IHsgZmlsbDogMHgwMDAwZmYsIHRoaWNrbmVzczogMTAgfSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdwYXRoJyxcblx0XHRcdFx0XHRcdGRhdGE6ICdNIDExMCwgMTEwIEggMTkwIFYgMTkwIEggMTEwIFonLFxuXHRcdFx0XHRcdFx0ZmlsbDogMHg5OTAwMDAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAncGF0aCcsXG5cdFx0XHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ21vdmVUbycsIHg6IDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMTAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDEwMCwgeTogMTAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDAsIHk6IDEwMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0ZmlsbDogeyB0eXBlOiAnc29saWQnLCBjb2xvcjogMHg5OTk5OTksIGFscGhhOiAwLjYgfSxcblx0XHRcdFx0XHRcdHN0cm9rZTogMHgwMDAwMDAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHR1bml0czoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHR1bml0KHtcblx0XHRcdFx0XHRcdG5hbWU6ICdBcmNoZXInLCBoZWFsdGg6IDEsIGltYWdlOiBBUkNIRVIsIG9uQ2xpY2s6IG9uVW5pdENsaWNrLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdHVuaXQoe1xuXHRcdFx0XHRcdFx0bmFtZTogJ0FuaW1hbGlzdCcsIGhlYWx0aDogMSwgaW1hZ2U6IEFOSU1BTElTVCwgb25DbGljazogb25Vbml0Q2xpY2ssXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0YXJ0aWZhY3Q6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdHg6IDMwMCxcblx0XHRcdFx0eTogMzUwLFxuXHRcdFx0XHRjaGlsZHJlbjogYXJ0aWZhY3QoKSxcblx0XHRcdH0sXG5cdFx0XHRtYXA6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0eTogNDUwLFxuXHRcdFx0XHRzY2FsZVg6IDAuMixcblx0XHRcdFx0c2NhbGVZOiAwLjIsXG5cdFx0XHRcdGFscGhhOiAwLjUsXG5cdFx0XHRcdHNyYzogJ3Rlc3QuY2FudmFzJyxcblx0XHRcdFx0b25Qb2ludGVyT3ZlcigpIHtcblx0XHRcdFx0XHR0aGlzLmFscGhhID0gMTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b25Qb2ludGVyT3V0KCkge1xuXHRcdFx0XHRcdHRoaXMuYWxwaGEgPSAwLjU7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YWJpbGl0eUZveDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEFCSUxJVFlfRk9YLFxuXHRcdFx0XHR4OiA0NTAsXG5cdFx0XHRcdHk6IDUwMCxcblx0XHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdFx0dGludDoge1xuXHRcdFx0XHRcdGNvbG9yOiAweDAwZmYwMCxcblx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0fSBhcyBhbnksXG5cdFx0XHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0XHRcdGlmICh0aGlzLnRpbnQpIHtcblx0XHRcdFx0XHRcdHRoaXMudGludC52YWx1ZSArPSB0aW1lO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMudGludC52YWx1ZSA+PSAxKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudGludC52YWx1ZSA9IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duKGU6IGFueSkge1xuXHRcdFx0XHRcdGlmICh0aGlzLnRpbnQpIHtcblx0XHRcdFx0XHRcdHRoaXMudGludCA9IG51bGw7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMudGludCA9IHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IDB4MDBmZjAwLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmb3gnLCBlKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRhYmlsaXR5V29sZjoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0eDogMzUwLFxuXHRcdFx0XHR5OiA0MDAsXG5cdFx0XHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0XHRzcmM6IEFCSUxJVFlfV09MRixcblx0XHRcdFx0XHRzY2FsZTogMC41LFxuXHRcdFx0XHRcdGFscGhhOiAxLFxuXHRcdFx0XHRcdHR3ZWVuOiB7XG5cdFx0XHRcdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0XHRcdFx0cGhhc2VzOiBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHg6IDIwMCB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAnY3ViaWNvdXQnLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeTogMjAwLCBhbHBoYTogMC41IH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6ICdxdWFkcmF0aWNJbicsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB4OiAwLCBhbHBoYTogMSB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAncXVhZHJhdGljT3V0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRmcHM6IGZwcyhwYXJhbWV0ZXJzKSxcblx0XHR9LFxuXHR9O1xuXG5cdGNvbnN0IHByZWxvYWRlckluZm86IFByZWxvYWRlckluZm8gPSB7XG5cdFx0Z2V0V2lkdGg6IHBhcmFtZXRlcnMuZ2V0Q2FudmFzV2lkdGgsXG5cdFx0Z2V0SGVpZ2h0OiBwYXJhbWV0ZXJzLmdldENhbnZhc0hlaWdodCxcblx0XHRnZXRQcm9ncmVzcygpIHtcblx0XHRcdHJldHVybiBMb2FkZXIuZ2V0TG9hZGluZ1Byb2dyZXNzKGNvbnRlbnQpO1xuXHRcdH0sXG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0Y29udGVudCxcblx0XHRcdHByZWxvYWRlcjogcHJlbG9hZGVyKHByZWxvYWRlckluZm8pLFxuXHRcdFx0c2NlbmU6IHtcblx0XHRcdFx0dHlwZTogJ3NjZW5lJywgeDogMzAwLCBzcmM6IFNDRU5FLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdG9uVXBkYXRlKCkge1xuXHRcdFx0Y29uc3QgaXNMb2FkZWQgPSAhdGhpcy5jaGlsZHJlbi5jb250ZW50LnZpc2libGU7XG5cdFx0XHR0aGlzLmNoaWxkcmVuLnByZWxvYWRlci52aXNpYmxlID0gaXNMb2FkZWQ7XG5cdFx0XHR0aGlzLmNoaWxkcmVuLnByZWxvYWRlci5lbmFibGVkID0gaXNMb2FkZWQ7XG5cdFx0fSxcblx0XHRzdGFydCgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdzdGFydCcpO1xuXHRcdH0sXG5cdH07XG59XG4iLCJpbXBvcnQgeyBTaGFwZSB9IGZyb20gJ0BqZW5nL3NoYXBlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcmVsb2FkZXJJbmZvIHtcblx0Z2V0UHJvZ3Jlc3MoKTogbnVtYmVyO1xuXHRnZXRXaWR0aCgpOiBudW1iZXI7XG5cdGdldEhlaWdodCgpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkZXIoaW5mbzogUHJlbG9hZGVySW5mbykge1xuXHRjb25zdCBoZWlnaHQgPSAyMDtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnc2hhcGUnLFxuXHRcdHNjYWxlWDogMSxcblx0XHR5OiBpbmZvLmdldEhlaWdodCgpIC0gaGVpZ2h0LFxuXHRcdGRhdGE6IHtcblx0XHRcdHR5cGU6ICdyZWN0YW5nbGUnLFxuXHRcdFx0d2lkdGg6IDEsXG5cdFx0XHRoZWlnaHQsXG5cdFx0XHRmaWxsOiAweGZmMDAwMCxcblx0XHR9LFxuXHRcdG9uVXBkYXRlKCkge1xuXHRcdFx0dGhpcy5zY2FsZVghICs9IChpbmZvLmdldFdpZHRoKCkgKiBpbmZvLmdldFByb2dyZXNzKCkgLSB0aGlzLnNjYWxlWCEpIC8gMjtcblx0XHR9LFxuXHR9IGFzIFNoYXBlO1xufVxuIiwiY29uc3QgU1BFRUQgPSAxMDA7XG5cbmludGVyZmFjZSBVbml0IHtcblx0W2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRQcm9wZXJ0aWVzIHtcblx0bmFtZTogc3RyaW5nLFxuXHRoZWFsdGg6IG51bWJlcixcblx0aW1hZ2U6IHN0cmluZyxcblx0b25DbGljazogKGRhdGE6IFVuaXRQcm9wZXJ0aWVzKSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBvblByb3BzVXBkYXRlKHByb3BzOiBhbnksIGNhbGxiYWNrOiAodGltZTogbnVtYmVyKSA9PiB2b2lkKSB7XG5cdGNvbnN0IGNvcHkgPSB7IC4uLnByb3BzIH07XG5cdHJldHVybiAodGltZTogbnVtYmVyKSA9PiB7XG5cdFx0Ly8gY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKTtcblx0XHRsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuXHRcdGZvciAoY29uc3Qga2V5IGluIHByb3BzKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5cdFx0XHRpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRpZiAoY29weVtrZXldICE9PSBwcm9wc1trZXldKSB7XG5cdFx0XHRcdFx0Y29weVtrZXldID0gcHJvcHNba2V5XTtcblx0XHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VkKSB7XG5cdFx0XHRjYWxsYmFjayh0aW1lKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIHJ1bk9uUHJvcHNVcGRhdGUocHJvcHM6IGFueSwgY29tcG9uZW50OiBhbnkpIHtcblx0Y29tcG9uZW50Lm9uVXBkYXRlID0gb25Qcm9wc1VwZGF0ZShwcm9wcywgY29tcG9uZW50Lm9uVXBkYXRlLmJpbmQoY29tcG9uZW50KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bml0KHByb3BzOiBVbml0UHJvcGVydGllcyk6IFVuaXQge1xuXHRmdW5jdGlvbiBnZXRUaXRsZSgpIHtcblx0XHRyZXR1cm4gYCR7cHJvcHMubmFtZX1cXG4ke01hdGgucm91bmQocHJvcHMuaGVhbHRoICogMTAwKX0lYDtcblx0fVxuXG5cdGNvbnN0IHVuaXRWaWV3ID0ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdHg6IDUwICsgTWF0aC5yYW5kb20oKSAqIDQwMCxcblx0XHR5OiAyMDAsXG5cdFx0cm90YXRpb246IDAsXG5cdFx0dXBkYXRlTW92ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMueCArPSB0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCAqIHRpbWUgKiBTUEVFRDtcblx0XHRcdGlmICh0aGlzLnggPCA1MCkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCA9IDE7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMueCA+IDQwMCkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCA9IC0xO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZU1vdmUodGltZSk7XG5cdFx0fSxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0dGV4dDoge1xuXHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHRcdHRleHQ6IGdldFRpdGxlKCksXG5cdFx0XHRcdGZvcm1hdDoge1xuXHRcdFx0XHRcdHNpemU6IDE1LFxuXHRcdFx0XHRcdGNvbG9yOiAweGZmZGRkZCxcblx0XHRcdFx0XHRhbGlnbjogJ2NlbnRlcicsXG5cdFx0XHRcdFx0dmVydGljYWxBbGlnbjogJ21pZGRsZScsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJvcmRlcjogMHgwMGZmMDAsXG5cdFx0XHRcdHk6IC0zMCxcblx0XHRcdFx0aGVpZ2h0OiAzNSxcblx0XHRcdFx0cGl2b3RYOiAwLjUsXG5cdFx0XHRcdG9uUG9pbnRlckRvd246ICgpID0+IHtcblx0XHRcdFx0XHRwcm9wcy5vbkNsaWNrKHByb3BzKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b25VcGRhdGUoKSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gZ2V0VGl0bGUoKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRpbWFnZToge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IHByb3BzLmltYWdlLFxuXHRcdFx0XHRzY2FsZVg6IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEsXG5cdFx0XHRcdHBpdm90WDogMC41LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duOiAoKSA9PiB7XG5cdFx0XHRcdFx0cHJvcHMub25DbGljayhwcm9wcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cblx0cnVuT25Qcm9wc1VwZGF0ZShwcm9wcywgdW5pdFZpZXcuY2hpbGRyZW4udGV4dCk7XG5cblx0cmV0dXJuIHVuaXRWaWV3O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBUd2VlbkV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3R3ZWVuJztcbmltcG9ydCB7IENhbnZhc1RleHRFeHRlbnNpb24gfSBmcm9tICdAamVuZy90ZXh0JztcbmltcG9ydCB7IENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gfSBmcm9tICdAamVuZy9pbWFnZSc7XG5pbXBvcnQgeyBDYW52YXNTaGFwZUV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3NoYXBlJztcbmltcG9ydCB7IENhbnZhc0VuZ2luZSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBTY2VuZUV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3NjZW5lJztcbmltcG9ydCB7IE1vdXNlRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvd2ViJztcbmltcG9ydCBDdXN0b21SZXNvdXJjZU1hbmFnZXIgZnJvbSAnLi9lbmdpbmUvcmVzb3VyY2VzJztcbmltcG9ydCBDdXN0b21FbmdpbmUgZnJvbSAnLi9lbmdpbmUvZW5naW5lJztcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbic7XG5pbXBvcnQge1xuXHRBTklNQUxJU1QsIEFOSU1BTElTVF9JTUFHRSwgQVJDSEVSLCBBUkNIRVJfSU1BR0UsIFRFU1RfQ0FOVkFTLFxufSBmcm9tICcuL2Fzc2V0cyc7XG5cbi8vIHBhZ2VcbmRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gJzAnO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nID0gJzAnO1xuXG4vLyBiYXNpYyBlbmdpbmVcbmNvbnN0IGVuZ2luZSA9IG5ldyBDYW52YXNFbmdpbmUoKTtcbkNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuQ2FudmFzVGV4dEV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5DYW52YXNTaGFwZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5Ud2VlbkV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5TY2VuZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5Nb3VzZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5lbmdpbmUuc2NyZWVuLmZ1bGxzY3JlZW4gPSB0cnVlO1xuZW5naW5lLnRpY2tlci5wbGF5KCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVuZ2luZS5wbGF0Zm9ybS52aWV3KTtcblxuY29uc3QgcGFyYW1ldGVycyA9IHtcblx0Z2V0VXBkYXRlVGltZSgpIHtcblx0XHRyZXR1cm4gZW5naW5lLnVwZGF0ZXIuZWxhcHNlZFRpbWU7XG5cdH0sXG5cdGdldFJlbmRlclRpbWUoKSB7XG5cdFx0cmV0dXJuIGVuZ2luZS5yZW5kZXJlci5lbGFwc2VkVGltZTtcblx0fSxcblx0Z2V0Q2FudmFzV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZW5naW5lLnNjcmVlbi5nZXRXaWR0aCgpO1xuXHR9LFxuXHRnZXRDYW52YXNIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZW5naW5lLnNjcmVlbi5nZXRIZWlnaHQoKTtcblx0fSxcbn07XG5cbi8vIGFwcGxpY2F0aW9uXG5jb25zdCBhcHAgPSBtYWluKHBhcmFtZXRlcnMpO1xuYXBwLnN0YXJ0KCk7XG5lbmdpbmUucm9vdCA9IGFwcCBhcyBhbnkgYXMgQ29tcG9uZW50O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbmNvbnNvbGUubG9nKGFwcCk7XG5cbi8vIHRlc3QgcGF1c2VcbnNldFRpbWVvdXQoKCkgPT4gZW5naW5lLnRpY2tlci5wYXVzZSgpLCA1MDAwKTtcbnNldFRpbWVvdXQoKCkgPT4gZW5naW5lLnRpY2tlci5wbGF5KCksIDEwMDAwKTtcblxuLy8gY3VzdG9tIGVuZ2luZVxuY29uc3QgY3VzdG9tRW5naW5lID0gbmV3IEN1c3RvbUVuZ2luZSgpO1xuY3VzdG9tRW5naW5lLnNjcmVlbi5mdWxsc2NyZWVuID0gZmFsc2U7XG5jdXN0b21FbmdpbmUuc2NyZWVuLmhlaWdodCA9IDYwMDtcbmN1c3RvbUVuZ2luZS51cGRhdGVyLmVuYWJsZWQgPSBmYWxzZTtcbmN1c3RvbUVuZ2luZS5yb290ID0gZW5naW5lLnJvb3Q7XG5jdXN0b21FbmdpbmUudGlja2VyLnBsYXkoKTtcbmN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbmN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3LnN0eWxlLnRvcCA9ICcwcHgnO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUubGVmdCA9ICc2MDBweCc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3KTtcblxuLy8gLy8gc2V0IGN1c3RvbSByZXNvdXJjZVxuZW5naW5lLnJlc291cmNlcy5yZXNvdXJjZXMuc2V0KFxuXHRURVNUX0NBTlZBUyxcblx0e1xuXHRcdGFzc2V0OiBURVNUX0NBTlZBUyxcblx0XHRpbWFnZTogY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcsXG5cdFx0bG9hZGVkOiB0cnVlLFxuXHR9IGFzIEltYWdlUmVzb3VyY2UsXG4pO1xuY3VzdG9tRW5naW5lLnJlc291cmNlcy5yZXNvdXJjZXMuc2V0KFxuXHRURVNUX0NBTlZBUyxcblx0e1xuXHRcdGFzc2V0OiBURVNUX0NBTlZBUyxcblx0XHRpbWFnZTogZW5naW5lLnBsYXRmb3JtLnZpZXcsXG5cdFx0bG9hZGVkOiB0cnVlLFxuXHR9IGFzIEltYWdlUmVzb3VyY2UsXG4pO1xuXG4vLyBjdXN0b20gcmVzb3VyY2UgcmVzb2x2ZXJcbmNvbnN0IHJlc291cmNlTWFuYWdlciA9IG5ldyBDdXN0b21SZXNvdXJjZU1hbmFnZXIoKTtcbnJlc291cmNlTWFuYWdlci5hbGlhc2VzLnNldChBUkNIRVIucmVwbGFjZSgnaWQ6JywgJycpLCBBUkNIRVJfSU1BR0UpO1xucmVzb3VyY2VNYW5hZ2VyLmFsaWFzZXMuc2V0KEFOSU1BTElTVC5yZXBsYWNlKCdpZDonLCAnJyksIEFOSU1BTElTVF9JTUFHRSk7XG5yZXNvdXJjZU1hbmFnZXIuaW5pdChlbmdpbmUpO1xucmVzb3VyY2VNYW5hZ2VyLmluaXQoY3VzdG9tRW5naW5lKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=