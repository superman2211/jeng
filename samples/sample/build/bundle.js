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

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

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
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jYW52YXMtZW5naW5lL2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NhbnZhcy1lbmdpbmUvZGlzdC9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvY29tcG9uZW50cy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9jb3JlL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvcmUvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMva2V5LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy9waXZvdC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvdHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9jb21wb25lbnRzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3BvaW50ZXJzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9yZXNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy90aWNrZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy91cGRhdGVyLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9ib3VuZHMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9jb2xvci10cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L21hdHJpeC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L3BvaW50LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9pbWFnZS9kaXN0L2NhbnZhcy1pbWFnZS1jb2xvci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvaW1hZ2UvZGlzdC9jYW52YXMtaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3Jlc291cmNlcy9kaXN0L2ltYWdlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9yZXNvdXJjZXMvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvcmVzb3VyY2VzL2Rpc3Qvc3RyaW5nLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zY2VuZS9kaXN0L3NjZW5lLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9lbGxpcHNlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9wYXRoLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvY2FudmFzL3NoYXBlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvY2FudmFzL3N0eWxlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2RhdGEvZGF0YS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9kYXRhL3BhdGguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvZGF0YS9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvZ3JhcGhpY3MuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3Qvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC9jYW52YXMvdGV4dC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2RhdGEvZm9udC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2RhdGEvZm9ybWF0LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvZGF0YS9tZXRyaWNzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC90ZXh0LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90d2Vlbi9kaXN0L2Vhc2luZy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdHdlZW4vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdHdlZW4vZGlzdC90d2Vlbi5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvd2ViL2Rpc3QvZmVhdHVyZXMvcGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3dlYi9kaXN0L2ZlYXR1cmVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvd2ViL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3dlYi9kaXN0L2ludGVyYWN0aXZlL2tleWJvYXJkLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy93ZWIvZGlzdC9pbnRlcmFjdGl2ZS9tb3VzZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvd2ViL2Rpc3QvaW50ZXJhY3RpdmUvdG91Y2guanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2FydGlmYWN0LnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9hc3NldHMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2VuZ2luZS9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2VuZ2luZS9pbWFnZS50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvZW5naW5lL3BsYXRmb3JtLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9lbmdpbmUvcmVzb3VyY2VzLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9mcHMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL3ByZWxvYWRlci50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvdW5pdC50cyIsIndlYnBhY2s6Ly9zYW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2FtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zYW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiQ2FudmFzRW5naW5lIiwicGxhdGZvcm0iLCJDYW52YXNQbGF0Zm9ybSIsInNjcmVlbiIsIldlYlNjcmVlbiIsIkVuZ2luZSIsIkNhbnZhc1BhdHRlcm5zIiwiY29sb3JQYXR0ZXJuIiwiY29sb3IiLCJhbHBoYSIsImN0IiwiciIsImciLCJiIiwiYSIsIkNvbG9yVHJhbnNmb3JtIiwicmVkTXVsdGlwbGllciIsInJlZE9mZnNldCIsImdyZWVuTXVsdGlwbGllciIsImdyZWVuT2Zmc2V0IiwiYmx1ZU11bHRpcGxpZXIiLCJibHVlT2Zmc2V0IiwiYWxwaGFNdWx0aXBsaWVyIiwiYWxwaGFPZmZzZXQiLCJhZGRHcmFkaWVudENvbG9ycyIsInBhdHRlcm4iLCJjb2xvcnMiLCJhbHBoYXMiLCJyYXRpb3MiLCJjb2xvclRyYW5zZm9ybSIsImkiLCJsZW5ndGgiLCJyYXRpbyIsImNvbG9yU3R5bGUiLCJhZGRDb2xvclN0b3AiLCJyYWRpYWxHcmFkaWVudFBhdHRlcm4iLCJiZWdpblgiLCJiZWdpblkiLCJiZWdpblJhZGl1cyIsImVuZFgiLCJlbmRZIiwiZW5kUmFkaXVzIiwiY29udGV4dCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwibGluZWFyR3JhZGllbnRQYXR0ZXJuIiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJiaXRtYXBQYXR0ZXJuIiwiaW1hZ2UiLCJyZXBlYXQiLCJtYXRyaXgiLCJjcmVhdGVQYXR0ZXJuIiwiZG9tTWF0cml4IiwiRE9NTWF0cml4IiwiYyIsImQiLCJlIiwidHgiLCJmIiwidHkiLCJzZXRUcmFuc2Zvcm0iLCJhcmd1bWVudHMiLCJ2aWV3IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dHMiLCJnZXRDb250ZXh0IiwiY3VzdG9tQ29udGV4dHMiLCJwdXNoIiwicG9wIiwiZW5naW5lIiwiZGVidWciLCJ3YXJuaW5nIiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJjbGVhciIsInVwZGF0ZVNpemUiLCJjbGVhclJlY3QiLCJnZXRXaWR0aCIsImdldEhlaWdodCIsInBpeGVsUmF0aW8iLCJnZXRQaXhlbFJhdGlvIiwidmlld1dpZHRoIiwiTWF0aCIsImZsb29yIiwidmlld0hlaWdodCIsInN0eWxlIiwiV2ViUGxhdGZvcm0iLCJDT05UQUlORVIiLCJDb250YWluZXIiLCJudW1DaGlsZHJlbiIsImNvbnRhaW5lciIsImNoaWxkcmVuIiwiQXJyYXkiLCJpc0FycmF5IiwidHlwZSIsImtleXMiLCJPYmplY3QiLCJDb250YWluZXJFeHRlbnNpb24iLCJyZW5kZXIiLCJyZW5kZXJlciIsImRlcHRoIiwiY29tcG9uZW50IiwicmVuZGVyQ29tcG9uZW50IiwiY29tcG9uZW50c01hcCIsInVwZGF0ZSIsInVwZGF0ZXIiLCJ1cGRhdGVDb21wb25lbnQiLCJoaXRUZXN0IiwicG9pbnRlcnMiLCJyZXN1bHQiLCJkaXNwYXRjaENvbXBvbmVudCIsImtleVRlc3QiLCJrZXlib2FyZCIsImxvYWRlZCIsImxvYWRpbmciLCJwcm9ncmVzcyIsImNvbXBvbmVudENvbnRleHQiLCJpbml0IiwiY29tcG9uZW50cyIsInNldCIsIkxPQURFUiIsIkxvYWRlciIsImdldExvYWRpbmdQcm9ncmVzcyIsImxvYWRlciIsImxvYWRpbmdQcm9ncmVzcyIsImlzTG9hZGVkIiwibmVlZExvYWRpbmdDaGVjayIsImxvYWRpbmdDaGVjayIsIkxvYWRlckV4dGVuc2lvbiIsIm9uTG9hZGVkIiwiQ29tcG9uZW50cyIsIlVwZGF0ZXIiLCJMb2FkaW5nIiwiUmVuZGVyZXIiLCJQb2ludGVycyIsIktleWJvYXJkIiwidGlja2VyIiwiVGlja2VyIiwiRGVidWciLCJyZXNvdXJjZXMiLCJSZXNvdXJjZXMiLCJFbmdpbmVGZWF0dXJlIiwiRGlzcGxheSIsImlzVmlzaWJsZSIsInZpc2libGUiLCJoYW5kbGVyc01hcCIsImtleURvd24iLCJrZXlQcmVzcyIsImtleVVwIiwiS2V5IiwiaXNLZXlFbmFibGVkIiwia2V5Iiwia2V5RW5hYmxlZCIsImRpc3BhdGNoRXZlbnQiLCJldmVudCIsImhhbmRsZXJOYW1lIiwiUGl2b3QiLCJnZXRYIiwicGl2b3QiLCJwaXZvdFgiLCJnZXRZIiwicGl2b3RZIiwiaGFzVmFsdWVzIiwicG9pbnRlckRvd24iLCJwb2ludGVyVXAiLCJwb2ludGVyTW92ZSIsInBvaW50ZXJDYW5jZWwiLCJwb2ludGVyT3ZlciIsInBvaW50ZXJPdXQiLCJQb2ludGVyIiwiaXNQb2ludGVyRW5hYmxlZCIsInBvaW50ZXIiLCJwb2ludGVyRW5hYmxlZCIsIngiLCJ5IiwiZ2xvYmFsWCIsImdsb2JhbFkiLCJpZCIsIlRyYW5zZm9ybSIsImdldE1hdHJpeCIsInRyYW5zZm9ybSIsInJvdGF0aW9uIiwic2NhbGVYIiwic2NhbGUiLCJzY2FsZVkiLCJjb3MiLCJzaW4iLCJnZXRDb2xvclRyYW5zZm9ybSIsInRpbnQiLCJ2YWx1ZSIsInZhbHVlSW52ZXJ0ZWQiLCJicmlnaHRuZXNzIiwidW5kZWZpbmVkIiwicGVyY2VudCIsImFicyIsIm9mZnNldCIsIlVwZGF0ZSIsImlzRW5hYmxlZCIsImVuYWJsZWQiLCJ0aW1lIiwib25VcGRhdGUiLCJwcm9wZXJ0aWVzIiwiTWFwIiwiaW5mb3MiLCJlcnJvcnMiLCJ3YXJuaW5ncyIsImNvbnNvbGUiLCJsb2ciLCJhcmdzIiwiU3RyaW5nIiwiY291bnQiLCJnZXQiLCJpbmZvIiwiZXJyb3IiLCJ3YXJuIiwicm9vdCIsImtleUV2ZW50IiwiaGFuZGxlciIsImVsYXBzZWRUaW1lIiwic3RhcnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJQbGF0Zm9ybSIsImdsb2JhbCIsIlBvaW50IiwibG9jYWwiLCJwb2ludGVySWQiLCJwb2ludGVyVHlwZSIsIk1hdHJpeCIsImJhc2UiLCJwYXJlbnQiLCJwYXJlbnRSZXN1bHQiLCJ1cGRhdGVMb2NhbCIsImJlZ2luIiwiZW5kIiwiUmVzb3VyY2UiLCJnZXRQcm9ncmVzcyIsInJlc291cmNlIiwiYnl0ZXNUb3RhbCIsImJ5dGVzTG9hZGVkIiwicmVzb2x2ZXJzIiwiU2V0IiwiYXNzZXQiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJTY3JlZW4iLCJmdWxsc2NyZWVuIiwiZ2V0V2luZG93V2lkdGgiLCJnZXRXaW5kb3dIZWlnaHQiLCJnZXRXaW5kb3dQaXhlbFJhdGlvIiwiZnJhbWVSYXRlIiwicGF1c2VkIiwidXBkYXRlRnJhbWUiLCJjdXJyZW50VGltZSIsImRlbHRhVGltZSIsInVwZGF0ZU5leHRGcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZVByb3BlcnRpZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJCb3VuZHMiLCJlbXB0eSIsIm1pblgiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJtaW5ZIiwibWF4WCIsIk1JTl9WQUxVRSIsIm1heFkiLCJzZXRFbXB0eSIsImJvdW5kcyIsImlzRW1wdHkiLCJ0b1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInRlc3RYIiwidGVzdFkiLCJ0ZXN0IiwidGVzdFBvaW50IiwicG9pbnQiLCJpc0VtcHR5V2l0aEFscGhhIiwiY29weSIsImZyb20iLCJ0byIsImNvbmNhdCIsImN0MSIsImN0MCIsIm1hdHJpeDAiLCJtYXRyaXgxIiwiZ2V0RGV0ZXJtaW5hbnQiLCJpbnZlcnQiLCJkZXRlcm1pbmFudCIsInRyYW5zZm9ybVBvaW50IiwidHJhbnNmb3JtUG9pbnRMb2NhbCIsInRyYW5zZm9ybUludmVyc2VQb2ludCIsInRyYW5zZm9ybUJvdW5kcyIsInJ4IiwicnkiLCJyciIsInJiIiwibngxIiwibnkxIiwibngyIiwibnkyIiwibngzIiwibnkzIiwibng0Iiwibnk0IiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwic3FydCIsImFuZ2xlIiwiYXRhbjIiLCJlcXVhbHMiLCJwb2ludDAiLCJwb2ludDEiLCJzb3VyY2UiLCJ0YXJnZXQiLCJub3JtYWxpemUiLCJ0aGlja25lc3MiLCJkaXN0YW5jZSIsImR4IiwiZHkiLCJpbnRlcnBvbGF0ZSIsInBvbGFyIiwiUmVjdGFuZ2xlIiwiaW50ZXJzZWN0aW9uIiwiY29udGFpbnMiLCJyb3VuZCIsInNjcmVlbkJvdW5kcyIsIkNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24iLCJzcmMiLCJjb250ZXh0MmQiLCJnbG9iYWxBbHBoYSIsImRyYXdJbWFnZSIsImN1c3RvbUNvbnRleHQiLCJjcmVhdGVDdXN0b21Db250ZXh0IiwiaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwicm0iLCJnbSIsImJtIiwiYW0iLCJybyIsImdvIiwiYm8iLCJhbyIsImRhdGEiLCJwdXRJbWFnZURhdGEiLCJkZXN0cm95Q3VzdG9tQ29udGV4dCIsIkltYWdlRXh0ZW5zaW9uIiwiSU1BR0UiLCJDYW52YXNJbWFnZUV4dGVuc2lvbiIsIkltYWdlIiwiY2FsY3VsYXRlQm91bmRzIiwicG9pbnRlclRlc3RTaGFwZSIsIkhUTUxDYW52YXNFbGVtZW50IiwiY2FudmFzQ29udGV4dCIsIkltYWdlUmVzb3VyY2UiLCJleHRlbnNpb24iLCJzcGxpdCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJhZGQiLCJTdHJpbmdSZXNvdXJjZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ucHJvZ3Jlc3MiLCJ0b3RhbCIsInJlc3BvbnNlVGV4dCIsInNlbmQiLCJTQ0VORSIsIlNjZW5lRXh0ZW5zaW9uIiwic2NlbmUiLCJKU09OIiwicGFyc2UiLCJtZXNzYWdlIiwiUElfMiIsIlBJIiwiYXBwbHlFbGxpcHNlIiwiaGFzRmlsbCIsInJhZGl1cyIsInJhZGl1c1giLCJyYWRpdXNZIiwiYmVnaW5QYXRoIiwiZWxsaXBzZSIsImNsb3NlUGF0aCIsImFwcGx5Q29tbWFuZCIsImNvbW1hbmQiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjdXJ2ZVRvIiwicXVhZHJhdGljQ3VydmVUbyIsImN4IiwiY3kiLCJjdWJpY0N1cnZlVG8iLCJiZXppZXJDdXJ2ZVRvIiwic3giLCJzeSIsImFwcGx5UGF0aCIsImFwcGx5UmVjdGFuZ2xlIiwicmVjdCIsInJlbmRlckdyYXBoaWNzIiwiZmlsbCIsInN0cm9rZSIsImhhc1N0cm9rZSIsImV4aXN0IiwicGF0aCIsImFwcGx5U3RyaW5nIiwic2V0RmlsbFN0eWxlIiwic2V0U3Ryb2tlU3R5bGUiLCJDYW52YXNTaGFwZUV4dGVuc2lvbiIsInNoYXBlIiwiU2hhcGUiLCJTaGFwZUV4dGVuc2lvbiIsIlNIQVBFIiwicmVhZGVyIiwiR3JhcGhpY3NTdHJpbmdSZWFkZXIiLCJzZXRQYXRoIiwicmVhZE5leHQiLCJnZXRDb21tYW5kIiwiZW1wdHlBcnJheSIsImVtcHR5TWF0cml4IiwiZ2V0Q2FudmFzUGF0dGVybiIsInNvbGlkIiwibGluZWFyIiwicmFkaWFsIiwiYml0bWFwRmlsbCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwibGluZUNhcCIsImxpbmVKb2luIiwibWl0ZXJMaW1pdCIsImNhcHMiLCJqb2ludHMiLCJSZWN0YW5nbGVEYXRhIiwiRWxsaXBzZURhdGEiLCJQYXRoRGF0YSIsInBhdGhEYXRhIiwiR3JhcGhpY3NTdHJpbmciLCJQYXRoQ29tbWFuZCIsIkdyYXBoaWNzRGF0YSIsIk5VTUJFUlNfQ09VTlQiLCJNIiwibSIsIkwiLCJsIiwiSCIsImgiLCJWIiwidiIsIkMiLCJTIiwicyIsIlEiLCJxIiwiVCIsInQiLCJDT01NQU5EX1JFR0VYIiwiTlVNQkVSX1JFR0VYIiwiR3JhcGhpY3NTdHJpbmdTdHJlYW0iLCJidWZmZXIiLCJzeW1ib2xSZWdleCIsImxhc3RJbmRleCIsInN5bWJvbE1hdGNoIiwiZXhlYyIsInN5bWJvbCIsIm51bWJlck1hdGNoIiwicGFyc2VGbG9hdCIsInN0cmVhbSIsImNvbW1hbmRFeGlzdHMiLCJsYXN0WCIsImxhc3RZIiwibGFzdENYIiwibGFzdENZIiwiZ2V0QnVmZmVyIiwiZTAiLCJlMSIsImUyIiwiZTMiLCJlNCIsImU1IiwidGVtcFBvaW50MCIsInRlbXBQb2ludDEiLCJHcmFwaGljcyIsInNtb290aCIsInBpeGVsSGludGluZyIsInNjYWxlTW9kZSIsImdldFBhdGgiLCJlbGxpcHNlV2lkdGgiLCJlbGxpcHNlSGVpZ2h0IiwidyIsImsiLCJveCIsIm95IiwieGUiLCJ5ZSIsInhtIiwieW0iLCJjcmVhdGVEYXRhIiwiZ3JhcGhpY3NEYXRhIiwiZGVmYXVsdFRleHRGb3JtYXQiLCJDT1JSRUNUSU9OIiwiQ2FudmFzVGV4dEV4dGVuc2lvbiIsIlRleHQiLCJtZXRyaWNzIiwiZm9ybWF0IiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsIlRleHRGb3JtYXQiLCJyZWFsV2lkdGgiLCJyZWFsSGVpZ2h0Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0ZXh0QmFzZWxpbmUiLCJzaW1wbGUiLCJ0ZXh0Iiwic2l6ZSIsImxlYWRpbmciLCJsZXR0ZXJTcGFjaW5nIiwiZGVmYXVsdEZvbnQiLCJGb250Iiwic3ltYm9sU2l6ZSIsImFsaWduVmFsdWUiLCJmb250IiwiVGV4dE1ldHJpY3MiLCJzeW1ib2xOZXh0IiwiYWR2YW5jZSIsImZpbGxUZXh0IiwiYWxpZ25WZXJ0aWNhbFZhbHVlIiwibGluZXMiLCJsaW5lIiwic3ltYm9scyIsImZpcnN0IiwibGluZUhlaWdodCIsImoiLCJhbGlnblN5bWJvbFZhbHVlIiwic3ltYm9sRm9udCIsIlRleHRFeHRlbnNpb24iLCJURVhUIiwiRU0iLCJmb250cyIsImdldFN0eWxlIiwibmFtZSIsInJlcGxhY2UiLCJ0b1N0cmluZyIsIm1lYXN1cmVUZXh0IiwiZ2V0Q2hhcldpZHRoIiwiY2hhciIsIndpZHRocyIsImdldEtlcm5pbmciLCJzZWNvbmQiLCJwYWlyIiwia2VybmluZyIsImtlcm5pbmdzIiwid2lkdGhTZWNvbmQiLCJ3aWR0aFRvdGFsIiwiZ2V0QWR2YW5jZSIsImdldEZvbnQiLCJib2xkIiwiaXRhbGljIiwidW5kZXJsaW5lIiwiYWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwiY29tYmluZSIsImRlZmF1bHRGb3JtYXQiLCJnZXRBbGlnblZhbHVlIiwiZ2V0VmVydGljYWxBbGlnblZhbHVlIiwiVGV4dExpbmUiLCJjcmVhdGUiLCJtYXgiLCJjb3JyZWN0V2lkdGgiLCJsYXN0IiwiY29ycmVjdEhlaWdodCIsImdldFN5bWJvbHMiLCJzeW1ib2xGb3JtYXQiLCJibG9jayIsImdldExpbmVzIiwid29yZFdyYXAiLCJtdWx0aWxpbmUiLCJ3b3JkIiwiZ2V0TWV0cmljcyIsImdldFNpbXBsZU1ldHJpY3MiLCJnZXRTaW1wbGVXaWR0aCIsImluZGV4IiwiZ2V0VGV4dCIsImlzVXBkYXRlTWV0cmljcyIsInVwZGF0ZU1ldHJpY3MiLCJpc0F1dG9TaXplIiwiaXNTaW1wbGUiLCJpc011bHRpbGluZSIsIkxJTkVBUiIsIlFVQURSQVRJQyIsIlFVQURSQVRJQ19JTiIsIlFVQURSQVRJQ19PVVQiLCJDVUJJQyIsIkNVQklDX0lOIiwiQ1VCSUNfT1VUIiwiUVVBUlRJQyIsIlFVQVJUSUNfSU4iLCJRVUFSVElDX09VVCIsIlFVSU5USUMiLCJRVUlOVElDX0lOIiwiUVVJTlRJQ19PVVQiLCJTSU5VU09JREFMIiwiU0lOVVNPSURBTF9JTiIsIlNJTlVTT0lEQUxfT1VUIiwiRVhQT05FTlRJQUwiLCJFWFBPTkVOVElBTF9JTiIsIkVYUE9ORU5USUFMX09VVCIsIkNJUkNVTEFSIiwiQ0lSQ1VMQVJfSU4iLCJDSVJDVUxBUl9PVVQiLCJFTEFTVElDIiwiRUxBU1RJQ19JTiIsIkVMQVNUSUNfT1VUIiwiQkFDSyIsIkJBQ0tfSU4iLCJCQUNLX09VVCIsIkJPVU5DRSIsIkJPVU5DRV9JTiIsIkJPVU5DRV9PVVQiLCJlYXNpbmciLCJwb3ciLCJUV0VFTiIsIlR3ZWVuRXh0ZW5zaW9uIiwidHdlZW4iLCJwaGFzZXMiLCJwaGFzZSIsImVhc2luZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImVhc2luZ01ldGhvZCIsImVhc2luZ1ZhbHVlIiwic3RhdGUiLCJmcm9tVmFsdWUiLCJ0b1ZhbHVlIiwic3RhdGVWYWx1ZSIsImxvb3AiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiY29kZSIsImN0cmwiLCJjdHJsS2V5IiwiYWx0IiwiYWx0S2V5Iiwic2hpZnQiLCJzaGlmdEtleSIsImRpc3BhdGNoIiwicHJldmVudERlZmF1bHQiLCJLZXlib2FyZEV4dGVuc2lvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImNsaWVudExlZnQiLCJjbGllbnRZIiwiY2xpZW50VG9wIiwiTW91c2VFeHRlbnNpb24iLCJjaGFuZ2VkVG91Y2hlcyIsInRvdWNoIiwiaWRlbnRpZmllciIsIlRvdWNoRXh0ZW5zaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsWUFBYjtBQUFBOztBQUFBOztBQUNJLDBCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLElBQUlDLHFEQUFKLCtCQUFoQjtBQUNBLFVBQUtDLE1BQUwsR0FBYyxJQUFJQyxnREFBSiwrQkFBZDtBQUhVO0FBSWI7O0FBTEw7QUFBQSxFQUFrQ0MsOENBQWxDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ08sSUFBSUMsY0FBSjs7QUFDUCxDQUFDLFVBQVVBLGNBQVYsRUFBMEI7QUFDdkIsV0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkJDLEtBQTdCLEVBQW9DQyxFQUFwQyxFQUF3QztBQUNwQyxRQUFJQyxDQUFDLEdBQUdILEtBQUssSUFBSSxFQUFULEdBQWMsSUFBdEI7QUFDQSxRQUFJSSxDQUFDLEdBQUdKLEtBQUssSUFBSSxDQUFULEdBQWEsSUFBckI7QUFDQSxRQUFJSyxDQUFDLEdBQUdMLEtBQUssR0FBRyxJQUFoQjtBQUNBLFFBQUlNLENBQUMsR0FBR0wsS0FBSyxHQUFHLElBQWhCOztBQUNBLFFBQUksQ0FBQ00sOERBQUEsQ0FBdUJMLEVBQXZCLENBQUwsRUFBaUM7QUFDN0JDLE9BQUMsR0FBSUEsQ0FBQyxHQUFHRCxFQUFFLENBQUNNLGFBQVAsR0FBdUJOLEVBQUUsQ0FBQ08sU0FBM0IsR0FBd0MsSUFBNUM7QUFDQUwsT0FBQyxHQUFJQSxDQUFDLEdBQUdGLEVBQUUsQ0FBQ1EsZUFBUCxHQUF5QlIsRUFBRSxDQUFDUyxXQUE3QixHQUE0QyxJQUFoRDtBQUNBTixPQUFDLEdBQUlBLENBQUMsR0FB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RUFBRSxDQUFDLEVBQUUsaURBQVksQ0FBQyxDQUFDO0FBQ3JFLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNEQUFpQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxvREFBZSxDQUFDLENBQUM7QUFDM0UsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVuZ2luZSB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgV2ViU2NyZWVuIH0gZnJvbSAnQGplbmcvd2ViJztcbmltcG9ydCB7IENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5leHBvcnQgY2xhc3MgQ2FudmFzRW5naW5lIGV4dGVuZHMgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybSA9IG5ldyBDYW52YXNQbGF0Zm9ybSh0aGlzKTtcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgV2ViU2NyZWVuKHRoaXMpO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vcGF0dGVybnMnO1xuZXhwb3J0ICogZnJvbSAnLi9wbGF0Zm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2VuZ2luZSc7XG4iLCJpbXBvcnQgeyBDb2xvclRyYW5zZm9ybSB9IGZyb20gJ0BqZW5nL2dlb20nO1xuZXhwb3J0IHZhciBDYW52YXNQYXR0ZXJucztcbihmdW5jdGlvbiAoQ2FudmFzUGF0dGVybnMpIHtcbiAgICBmdW5jdGlvbiBjb2xvclBhdHRlcm4oY29sb3IsIGFscGhhLCBjdCkge1xuICAgICAgICBsZXQgciA9IGNvbG9yID4+IDE2ICYgMHhmZjtcbiAgICAgICAgbGV0IGcgPSBjb2xvciA+PiA4ICYgMHhmZjtcbiAgICAgICAgbGV0IGIgPSBjb2xvciAmIDB4ZmY7XG4gICAgICAgIGxldCBhID0gYWxwaGEgKiAweGZmO1xuICAgICAgICBpZiAoIUNvbG9yVHJhbnNmb3JtLmlzRW1wdHkoY3QpKSB7XG4gICAgICAgICAgICByID0gKHIgKiBjdC5yZWRNdWx0aXBsaWVyICsgY3QucmVkT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBnID0gKGcgKiBjdC5ncmVlbk11bHRpcGxpZXIgKyBjdC5ncmVlbk9mZnNldCkgJiAweGZmO1xuICAgICAgICAgICAgYiA9IChiICogY3QuYmx1ZU11bHRpcGxpZXIgKyBjdC5ibHVlT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBhID0gKGEgKiBjdC5hbHBoYU11bHRpcGxpZXIgKyBjdC5hbHBoYU9mZnNldCkgJiAweGZmO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhIDwgMHhmZikge1xuICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YSAvIDB4ZmZ9KWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4gPSBjb2xvclBhdHRlcm47XG4gICAgZnVuY3Rpb24gYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JzW2ldO1xuICAgICAgICAgICAgY29uc3QgYWxwaGEgPSBhbHBoYXNbaV07XG4gICAgICAgICAgICBsZXQgcmF0aW8gPSByYXRpb3NbaV07XG4gICAgICAgICAgICBpZiAocmF0aW8gPCAwKVxuICAgICAgICAgICAgICAgIHJhdGlvID0gMDtcbiAgICAgICAgICAgIGlmIChyYXRpbyA+IDEpXG4gICAgICAgICAgICAgICAgcmF0aW8gPSAxO1xuICAgICAgICAgICAgY29uc3QgY29sb3JTdHlsZSA9IGNvbG9yUGF0dGVybihjb2xvciwgYWxwaGEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIHBhdHRlcm4uYWRkQ29sb3JTdG9wKHJhdGlvLCBjb2xvclN0eWxlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5hZGRHcmFkaWVudENvbG9ycyA9IGFkZEdyYWRpZW50Q29sb3JzO1xuICAgIGZ1bmN0aW9uIHJhZGlhbEdyYWRpZW50UGF0dGVybihiZWdpblgsIGJlZ2luWSwgYmVnaW5SYWRpdXMsIGVuZFgsIGVuZFksIGVuZFJhZGl1cywgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoYmVnaW5YLCBiZWdpblksIGJlZ2luUmFkaXVzLCBlbmRYLCBlbmRZLCBlbmRSYWRpdXMpO1xuICAgICAgICBhZGRHcmFkaWVudENvbG9ycyhwYXR0ZXJuLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5yYWRpYWxHcmFkaWVudFBhdHRlcm4gPSByYWRpYWxHcmFkaWVudFBhdHRlcm47XG4gICAgZnVuY3Rpb24gbGluZWFyR3JhZGllbnRQYXR0ZXJuKGJlZ2luWCwgYmVnaW5ZLCBlbmRYLCBlbmRZLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVMaW5lYXJHcmFkaWVudChiZWdpblgsIGJlZ2luWSwgZW5kWCwgZW5kWSk7XG4gICAgICAgIGFkZEdyYWRpZW50Q29sb3JzKHBhdHRlcm4sIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmxpbmVhckdyYWRpZW50UGF0dGVybiA9IGxpbmVhckdyYWRpZW50UGF0dGVybjtcbiAgICBmdW5jdGlvbiBiaXRtYXBQYXR0ZXJuKGltYWdlLCByZXBlYXQsIG1hdHJpeCwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVQYXR0ZXJuKGltYWdlLCByZXBlYXQgPyAncmVwZWF0JyA6ICdub25lJyk7XG4gICAgICAgIGlmIChwYXR0ZXJuKSB7XG4gICAgICAgICAgICBjb25zdCBkb21NYXRyaXggPSBuZXcgRE9NTWF0cml4KCk7XG4gICAgICAgICAgICBkb21NYXRyaXguYSA9IG1hdHJpeC5hID8/IDE7XG4gICAgICAgICAgICBkb21NYXRyaXguYiA9IG1hdHJpeC5iID8/IDA7XG4gICAgICAgICAgICBkb21NYXRyaXguYyA9IG1hdHJpeC5jID8/IDA7XG4gICAgICAgICAgICBkb21NYXRyaXguZCA9IG1hdHJpeC5kID8/IDE7XG4gICAgICAgICAgICBkb21NYXRyaXguZSA9IG1hdHJpeC50eCA/PyAwO1xuICAgICAgICAgICAgZG9tTWF0cml4LmYgPSBtYXRyaXgudHkgPz8gMDtcbiAgICAgICAgICAgIHBhdHRlcm4uc2V0VHJhbnNmb3JtKGRvbU1hdHJpeCk7XG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmJpdG1hcFBhdHRlcm4gPSBiaXRtYXBQYXR0ZXJuO1xufSkoQ2FudmFzUGF0dGVybnMgfHwgKENhbnZhc1BhdHRlcm5zID0ge30pKTtcbiIsImltcG9ydCB7IFdlYlBsYXRmb3JtIH0gZnJvbSAnQGplbmcvd2ViJztcbmV4cG9ydCBjbGFzcyBDYW52YXNQbGF0Zm9ybSBleHRlbmRzIFdlYlBsYXRmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbdGhpcy52aWV3LmdldENvbnRleHQoJzJkJyldO1xuICAgICAgICB0aGlzLmN1c3RvbUNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRzW3RoaXMuY29udGV4dHMubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIHNhdmVDb250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICByZXN0b3JlQ29udGV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0cy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmRlYnVnLndhcm5pbmcoJ1RyeWluZyB0byByZXN0b3JlIG1haW4gY29udGV4dCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUN1c3RvbUNvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0O1xuICAgICAgICBpZiAodGhpcy5jdXN0b21Db250ZXh0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmN1c3RvbUNvbnRleHRzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnZpZXc7XG4gICAgICAgIGlmIChjb250ZXh0LmNhbnZhcy53aWR0aCAhPT0gd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRleHQuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgICBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIGRlc3Ryb3lDdXN0b21Db250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jdXN0b21Db250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIH1cbiAgICBiZWdpbigpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICB9XG4gICAgZW5kKCkge1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgY29uc3QgeyB2aWV3IH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHZpZXcud2lkdGgsIHZpZXcuaGVpZ2h0KTtcbiAgICB9XG4gICAgdXBkYXRlU2l6ZSgpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0V2lkdGgoKTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5lbmdpbmUuc2NyZWVuLmdldEhlaWdodCgpO1xuICAgICAgICBjb25zdCBwaXhlbFJhdGlvID0gdGhpcy5lbmdpbmUuc2NyZWVuLmdldFBpeGVsUmF0aW8oKTtcbiAgICAgICAgY29uc3Qgdmlld1dpZHRoID0gTWF0aC5mbG9vcih3aWR0aCAqIHBpeGVsUmF0aW8pO1xuICAgICAgICBjb25zdCB2aWV3SGVpZ2h0ID0gTWF0aC5mbG9vcihoZWlnaHQgKiBwaXhlbFJhdGlvKTtcbiAgICAgICAgY29uc3QgeyB2aWV3IH0gPSB0aGlzO1xuICAgICAgICBpZiAodmlldy53aWR0aCAhPT0gdmlld1dpZHRoIHx8IHZpZXcuaGVpZ2h0ICE9PSB2aWV3SGVpZ2h0KSB7XG4gICAgICAgICAgICB2aWV3LndpZHRoID0gdmlld1dpZHRoO1xuICAgICAgICAgICAgdmlldy5oZWlnaHQgPSB2aWV3SGVpZ2h0O1xuICAgICAgICAgICAgdmlldy5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDT05UQUlORVIgPSAnY29udGFpbmVyJztcbmV4cG9ydCB2YXIgQ29udGFpbmVyO1xuKGZ1bmN0aW9uIChDb250YWluZXIpIHtcbiAgICBmdW5jdGlvbiBudW1DaGlsZHJlbihjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIHJldHVybiBrZXlzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgQ29udGFpbmVyLm51bUNoaWxkcmVuID0gbnVtQ2hpbGRyZW47XG59KShDb250YWluZXIgfHwgKENvbnRhaW5lciA9IHt9KSk7XG5leHBvcnQgdmFyIENvbnRhaW5lckV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ29udGFpbmVyRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyByZW5kZXJlciB9ID0gZW5naW5lO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICByZW5kZXJlci5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyZXIuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZShjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgdXBkYXRlciB9ID0gZW5naW5lO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHVwZGF0ZXIuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIHVwZGF0ZXIudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZXIuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24udXBkYXRlID0gdXBkYXRlO1xuICAgIGZ1bmN0aW9uIGhpdFRlc3QoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHBvaW50ZXJzIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHBvaW50ZXJzLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIHBvaW50ZXJzLmRlcHRoKys7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2ludGVycy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQsIHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgaWYgKHBvaW50ZXJzLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCwgcmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGtleXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50ZXJzLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCwgcmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50ZXJzLmRlcHRoLS07XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGtleVRlc3QoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IGtleWJvYXJkIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAga2V5Ym9hcmQuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIGtleWJvYXJkLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGtleWJvYXJkLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICBrZXlib2FyZC5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleWJvYXJkLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLmtleVRlc3QgPSBrZXlUZXN0O1xuICAgIGZ1bmN0aW9uIGxvYWRlZChjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgbG9hZGluZyB9ID0gZW5naW5lO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIGxvYWRpbmcuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyArPSBjb21wb25lbnRDb250ZXh0LnByb2dyZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnRDb250ZXh0LmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyAvPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgbG9hZGluZy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gbG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IGNvbXBvbmVudENvbnRleHQucHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSBjb21wb25lbnRDb250ZXh0LmxvYWRlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gbG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzICs9IGNvbXBvbmVudENvbnRleHQucHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudENvbnRleHQubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzIC89IGtleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2FkaW5nLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLmxvYWRlZCA9IGxvYWRlZDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy51cGRhdGUuc2V0KENPTlRBSU5FUiwgdXBkYXRlKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChDT05UQUlORVIsIHJlbmRlcik7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KENPTlRBSU5FUiwgaGl0VGVzdCk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmtleVRlc3Quc2V0KENPTlRBSU5FUiwga2V5VGVzdCk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5zZXQoQ09OVEFJTkVSLCBsb2FkZWQpO1xuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDb250YWluZXJFeHRlbnNpb24gfHwgKENvbnRhaW5lckV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBDb250YWluZXJFeHRlbnNpb24gfSBmcm9tICcuL2NvbnRhaW5lcic7XG5leHBvcnQgY29uc3QgTE9BREVSID0gJ2xvYWRlcic7XG5leHBvcnQgdmFyIExvYWRlcjtcbihmdW5jdGlvbiAoTG9hZGVyKSB7XG4gICAgZnVuY3Rpb24gZ2V0TG9hZGluZ1Byb2dyZXNzKGxvYWRlcikge1xuICAgICAgICByZXR1cm4gbG9hZGVyLmxvYWRpbmdQcm9ncmVzcyA/PyAwO1xuICAgIH1cbiAgICBMb2FkZXIuZ2V0TG9hZGluZ1Byb2dyZXNzID0gZ2V0TG9hZGluZ1Byb2dyZXNzO1xuICAgIGZ1bmN0aW9uIGlzTG9hZGVkKGxvYWRlcikge1xuICAgICAgICByZXR1cm4gbG9hZGVyLmxvYWRlZCA/PyBmYWxzZTtcbiAgICB9XG4gICAgTG9hZGVyLmlzTG9hZGVkID0gaXNMb2FkZWQ7XG4gICAgZnVuY3Rpb24gbmVlZExvYWRpbmdDaGVjayhsb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRlci5sb2FkaW5nQ2hlY2sgPz8gdHJ1ZTtcbiAgICB9XG4gICAgTG9hZGVyLm5lZWRMb2FkaW5nQ2hlY2sgPSBuZWVkTG9hZGluZ0NoZWNrO1xufSkoTG9hZGVyIHx8IChMb2FkZXIgPSB7fSkpO1xuZXhwb3J0IHZhciBMb2FkZXJFeHRlbnNpb247XG4oZnVuY3Rpb24gKExvYWRlckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGxvYWRlZChsb2FkZXIsIGVuZ2luZSkge1xuICAgICAgICBpZiAoIUxvYWRlci5uZWVkTG9hZGluZ0NoZWNrKGxvYWRlcikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBDb250YWluZXJFeHRlbnNpb24ubG9hZGVkKGxvYWRlciwgZW5naW5lKTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5sb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgbG9hZGVyLmxvYWRpbmdQcm9ncmVzcyA9IGNvbnRleHQucHJvZ3Jlc3M7XG4gICAgICAgIGlmIChjb250ZXh0LmxvYWRlZCAmJiAhbG9hZGVyLmxvYWRlZCkge1xuICAgICAgICAgICAgbG9hZGVyLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAobG9hZGVyLm9uTG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVyLm9uTG9hZGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgTG9hZGVyRXh0ZW5zaW9uLmxvYWRlZCA9IGxvYWRlZDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy51cGRhdGUuc2V0KExPQURFUiwgQ29udGFpbmVyRXh0ZW5zaW9uLnVwZGF0ZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoTE9BREVSLCBDb250YWluZXJFeHRlbnNpb24ucmVuZGVyKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoTE9BREVSLCBDb250YWluZXJFeHRlbnNpb24uaGl0VGVzdCk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5zZXQoTE9BREVSLCBsb2FkZWQpO1xuICAgIH1cbiAgICBMb2FkZXJFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShMb2FkZXJFeHRlbnNpb24gfHwgKExvYWRlckV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3JlbmRlcmVyJztcbmltcG9ydCB7IFVwZGF0ZXIgfSBmcm9tICcuLi9mZWF0dXJlcy91cGRhdGVyJztcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICcuLi9mZWF0dXJlcy9sb2FkaW5nJztcbmltcG9ydCB7IFBvaW50ZXJzIH0gZnJvbSAnLi4vZmVhdHVyZXMvcG9pbnRlcnMnO1xuaW1wb3J0IHsgVGlja2VyIH0gZnJvbSAnLi4vZmVhdHVyZXMvdGlja2VyJztcbmltcG9ydCB7IENvbnRhaW5lckV4dGVuc2lvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmltcG9ydCB7IERlYnVnIH0gZnJvbSAnLi4vZmVhdHVyZXMvZGVidWcnO1xuaW1wb3J0IHsgUmVzb3VyY2VzIH0gZnJvbSAnLi4vZmVhdHVyZXMvcmVzb3VyY2VzJztcbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuLi9mZWF0dXJlcy9jb21wb25lbnRzJztcbmltcG9ydCB7IExvYWRlckV4dGVuc2lvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGVyJztcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi4vZmVhdHVyZXMva2V5Ym9hcmQnO1xuZXhwb3J0IGNsYXNzIEVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGVwdGggPSAzMjtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gbmV3IENvbXBvbmVudHModGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlciA9IG5ldyBVcGRhdGVyKHRoaXMpO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBuZXcgTG9hZGluZyh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih0aGlzKTtcbiAgICAgICAgdGhpcy5wb2ludGVycyA9IG5ldyBQb2ludGVycyh0aGlzKTtcbiAgICAgICAgdGhpcy5rZXlib2FyZCA9IG5ldyBLZXlib2FyZCh0aGlzKTtcbiAgICAgICAgdGhpcy50aWNrZXIgPSBuZXcgVGlja2VyKHRoaXMpO1xuICAgICAgICB0aGlzLmRlYnVnID0gbmV3IERlYnVnKHRoaXMpO1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IG5ldyBSZXNvdXJjZXModGhpcyk7XG4gICAgICAgIENvbnRhaW5lckV4dGVuc2lvbi5pbml0KHRoaXMpO1xuICAgICAgICBMb2FkZXJFeHRlbnNpb24uaW5pdCh0aGlzKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoZW5naW5lKSB7XG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgIH1cbn1cbiIsImV4cG9ydCB2YXIgRGlzcGxheTtcbihmdW5jdGlvbiAoRGlzcGxheSkge1xuICAgIGZ1bmN0aW9uIGlzVmlzaWJsZShjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC52aXNpYmxlID8/IHRydWU7XG4gICAgfVxuICAgIERpc3BsYXkuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xufSkoRGlzcGxheSB8fCAoRGlzcGxheSA9IHt9KSk7XG4iLCJjb25zdCBoYW5kbGVyc01hcCA9IHtcbiAgICBrZXlEb3duOiAnb25LZXlEb3duJyxcbiAgICBrZXlQcmVzczogJ29uS2V5UHJlc3MnLFxuICAgIGtleVVwOiAnb25LZXlVcCcsXG59O1xuZXhwb3J0IHZhciBLZXk7XG4oZnVuY3Rpb24gKEtleSkge1xuICAgIGZ1bmN0aW9uIGlzS2V5RW5hYmxlZChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGtleS5rZXlFbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIEtleS5pc0tleUVuYWJsZWQgPSBpc0tleUVuYWJsZWQ7XG4gICAgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChjb21wb25lbnQsIGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJOYW1lID0gaGFuZGxlcnNNYXBbZXZlbnQudHlwZV07XG4gICAgICAgIGlmIChoYW5kbGVyTmFtZSAmJiBjb21wb25lbnRbaGFuZGxlck5hbWVdKSB7XG4gICAgICAgICAgICBjb21wb25lbnRbaGFuZGxlck5hbWVdKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBLZXkuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG59KShLZXkgfHwgKEtleSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFBpdm90O1xuKGZ1bmN0aW9uIChQaXZvdCkge1xuICAgIGZ1bmN0aW9uIGdldFgocGl2b3QsIHdpZHRoKSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RYIH0gPSBwaXZvdDtcbiAgICAgICAgaWYgKHBpdm90WCkge1xuICAgICAgICAgICAgcmV0dXJuIC1waXZvdFggKiB3aWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgUGl2b3QuZ2V0WCA9IGdldFg7XG4gICAgZnVuY3Rpb24gZ2V0WShwaXZvdCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RZIH0gPSBwaXZvdDtcbiAgICAgICAgaWYgKHBpdm90WSkge1xuICAgICAgICAgICAgcmV0dXJuIC1waXZvdFkgKiBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFkgPSBnZXRZO1xuICAgIGZ1bmN0aW9uIGhhc1ZhbHVlcyhwaXZvdCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WCwgcGl2b3RZIH0gPSBwaXZvdDtcbiAgICAgICAgcmV0dXJuICEhcGl2b3RYIHx8ICEhcGl2b3RZO1xuICAgIH1cbiAgICBQaXZvdC5oYXNWYWx1ZXMgPSBoYXNWYWx1ZXM7XG59KShQaXZvdCB8fCAoUGl2b3QgPSB7fSkpO1xuIiwiY29uc3QgaGFuZGxlcnNNYXAgPSB7XG4gICAgcG9pbnRlckRvd246ICdvblBvaW50ZXJEb3duJyxcbiAgICBwb2ludGVyVXA6ICdvblBvaW50ZXJVcCcsXG4gICAgcG9pbnRlck1vdmU6ICdvblBvaW50ZXJNb3ZlJyxcbiAgICBwb2ludGVyQ2FuY2VsOiAnb25Qb2ludGVyQ2FuY2VsJyxcbiAgICBwb2ludGVyT3ZlcjogJ29uUG9pbnRlck92ZXInLFxuICAgIHBvaW50ZXJPdXQ6ICdvblBvaW50ZXJPdXQnLFxufTtcbmV4cG9ydCB2YXIgUG9pbnRlcjtcbihmdW5jdGlvbiAoUG9pbnRlcikge1xuICAgIGZ1bmN0aW9uIGlzUG9pbnRlckVuYWJsZWQocG9pbnRlcikge1xuICAgICAgICByZXR1cm4gcG9pbnRlci5wb2ludGVyRW5hYmxlZCA/PyB0cnVlO1xuICAgIH1cbiAgICBQb2ludGVyLmlzUG9pbnRlckVuYWJsZWQgPSBpc1BvaW50ZXJFbmFibGVkO1xuICAgIGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQocG9pbnRlciwgdHlwZSwgeCwgeSwgZ2xvYmFsWCwgZ2xvYmFsWSwgaWQpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlck5hbWUgPSBoYW5kbGVyc01hcFt0eXBlXTtcbiAgICAgICAgaWYgKGhhbmRsZXJOYW1lICYmIHBvaW50ZXJbaGFuZGxlck5hbWVdKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgeSxcbiAgICAgICAgICAgICAgICBnbG9iYWxYLFxuICAgICAgICAgICAgICAgIGdsb2JhbFksXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcG9pbnRlcltoYW5kbGVyTmFtZV0oZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG59KShQb2ludGVyIHx8IChQb2ludGVyID0ge30pKTtcbiIsImV4cG9ydCB2YXIgVHJhbnNmb3JtO1xuKGZ1bmN0aW9uIChUcmFuc2Zvcm0pIHtcbiAgICBmdW5jdGlvbiBnZXRNYXRyaXgodHJhbnNmb3JtLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKG1hdHJpeCkge1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBtYXRyaXguYSA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSBtYXRyaXguYiA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSBtYXRyaXguYyA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBtYXRyaXguZCA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gbWF0cml4LnR4ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQudHkgPSBtYXRyaXgudHkgPz8gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvdGF0aW9uIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHRyYW5zZm9ybS5zY2FsZVggPz8gdHJhbnNmb3JtLnNjYWxlID8/IDE7XG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IHRyYW5zZm9ybS5zY2FsZVkgPz8gdHJhbnNmb3JtLnNjYWxlID8/IDE7XG4gICAgICAgIHJlc3VsdC50eCA9IHRyYW5zZm9ybS54ID8/IDA7XG4gICAgICAgIHJlc3VsdC50eSA9IHRyYW5zZm9ybS55ID8/IDA7XG4gICAgICAgIGlmIChyb3RhdGlvbikge1xuICAgICAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3Mocm90YXRpb24pO1xuICAgICAgICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW4ocm90YXRpb24pO1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBjb3MgKiBzY2FsZVg7XG4gICAgICAgICAgICByZXN1bHQuYiA9IHNpbiAqIHNjYWxlWDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gLXNpbiAqIHNjYWxlWTtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gY29zICogc2NhbGVZO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hID0gc2NhbGVYO1xuICAgICAgICByZXN1bHQuYiA9IDA7XG4gICAgICAgIHJlc3VsdC5jID0gMDtcbiAgICAgICAgcmVzdWx0LmQgPSBzY2FsZVk7XG4gICAgfVxuICAgIFRyYW5zZm9ybS5nZXRNYXRyaXggPSBnZXRNYXRyaXg7XG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JUcmFuc2Zvcm0odHJhbnNmb3JtLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0ucmVkTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmFscGhhT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0ucmVkT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5ncmVlbk9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5ibHVlT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxwaGEgPSB0cmFuc2Zvcm0uYWxwaGEgPz8gMTtcbiAgICAgICAgY29uc3QgeyB0aW50IH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmICh0aW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IGNvbG9yID0gMCwgdmFsdWUgPSAxIH0gPSB0aW50O1xuICAgICAgICAgICAgY29uc3QgdmFsdWVJbnZlcnRlZCA9IDEgLSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHIgPSAoY29sb3IgPj4gMTYpICYgMHhmZjtcbiAgICAgICAgICAgIGNvbnN0IGcgPSAoY29sb3IgPj4gOCkgJiAweGZmO1xuICAgICAgICAgICAgY29uc3QgYiA9IGNvbG9yICYgMHhmZjtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYTtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gciAqIHZhbHVlO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gZyAqIHZhbHVlO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBiICogdmFsdWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHsgYnJpZ2h0bmVzcyB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAoYnJpZ2h0bmVzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoYnJpZ2h0bmVzcyA+IDEpIHtcbiAgICAgICAgICAgICAgICBicmlnaHRuZXNzID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGJyaWdodG5lc3MgPCAtMSkge1xuICAgICAgICAgICAgICAgIGJyaWdodG5lc3MgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSAxIC0gTWF0aC5hYnMoYnJpZ2h0bmVzcyk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIGlmIChicmlnaHRuZXNzID4gMCkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IGJyaWdodG5lc3MgKiAyNTU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGE7XG4gICAgICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHBlcmNlbnQ7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gcGVyY2VudDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IHBlcmNlbnQ7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYTtcbiAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSAxO1xuICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldENvbG9yVHJhbnNmb3JtID0gZ2V0Q29sb3JUcmFuc2Zvcm07XG59KShUcmFuc2Zvcm0gfHwgKFRyYW5zZm9ybSA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFVwZGF0ZTtcbihmdW5jdGlvbiAoVXBkYXRlKSB7XG4gICAgZnVuY3Rpb24gaXNFbmFibGVkKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgVXBkYXRlLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29tcG9uZW50LCB0aW1lKSB7XG4gICAgICAgIGlmIChjb21wb25lbnQub25VcGRhdGUpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5vblVwZGF0ZSh0aW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBVcGRhdGUudXBkYXRlID0gdXBkYXRlO1xufSkoVXBkYXRlIHx8IChVcGRhdGUgPSB7fSkpO1xuIiwiaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgQ29tcG9uZW50cyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVuZGVyID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5oaXRUZXN0ID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmtleVRlc3QgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMubG9hZGVkID0gbmV3IE1hcCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIERlYnVnIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuaW5mb3MgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLndhcm5pbmdzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBsb2coLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuICAgIH1cbiAgICBpbmZvKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5pbmZvcy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgdGhpcy5pbmZvcy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG4gICAgZXJyb3IoLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLmVycm9ycy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMuZXJyb3JzLnNldChpZCwgY291bnQpO1xuICAgIH1cbiAgICB3YXJuaW5nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy53YXJuaW5ncy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgdGhpcy53YXJuaW5ncy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmltcG9ydCB7IEtleSB9IGZyb20gJy4uL2V4dGVuc2lvbnMva2V5JztcbmV4cG9ydCBjbGFzcyBLZXlib2FyZCBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZGlzcGF0Y2goZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtleUV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ29tcG9uZW50KHJvb3QpO1xuICAgIH1cbiAgICBkaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghS2V5LmlzS2V5RW5hYmxlZChjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMua2V5VGVzdC5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgICAgICBLZXkuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsIHRoaXMua2V5RXZlbnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXTtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXSA9IGNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIHVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KHJvb3QpO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydFRpbWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgUGxhdGZvcm0gZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbn1cbiIsImltcG9ydCB7IE1hdHJpeCwgUG9pbnQgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuLi9leHRlbnNpb25zL2Rpc3BsYXknO1xuaW1wb3J0IHsgUG9pbnRlciB9IGZyb20gJy4uL2V4dGVuc2lvbnMvcG9pbnRlcic7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9leHRlbnNpb25zL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBQb2ludGVycyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nbG9iYWwgPSBQb2ludC5lbXB0eSgpO1xuICAgICAgICB0aGlzLmxvY2FsID0gUG9pbnQuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5wb2ludGVySWQgPSAwO1xuICAgICAgICB0aGlzLnBvaW50ZXJUeXBlID0gJ3BvaW50ZXJEb3duJztcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBtYXRyaXg6IE1hdHJpeC5lbXB0eSgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICBkaXNwYXRjaCh0eXBlLCB4LCB5LCBpZCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9jYWwueCA9IHg7XG4gICAgICAgIHRoaXMubG9jYWwueSA9IHk7XG4gICAgICAgIHRoaXMuZ2xvYmFsLnggPSB4O1xuICAgICAgICB0aGlzLmdsb2JhbC55ID0geTtcbiAgICAgICAgdGhpcy5wb2ludGVySWQgPSBpZDtcbiAgICAgICAgdGhpcy5wb2ludGVyVHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIE1hdHJpeC5zZXRFbXB0eShiYXNlLm1hdHJpeCk7XG4gICAgICAgIHRoaXMuZGVwdGgrKztcbiAgICAgICAgdGhpcy5kaXNwYXRjaENvbXBvbmVudChyb290LCBiYXNlLCBmYWxzZSk7XG4gICAgfVxuICAgIHVwZGF0ZUxvY2FsKGNvbXBvbmVudCwgcGFyZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgTWF0cml4LmNvbmNhdChwYXJlbnQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50KGNvbnRleHQubWF0cml4LCB0aGlzLmdsb2JhbCwgdGhpcy5sb2NhbCk7XG4gICAgfVxuICAgIGRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgcGFyZW50LCBwYXJlbnRSZXN1bHQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghRGlzcGxheS5pc1Zpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50UmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnBvaW50ZXJPdmVyICYmIHRoaXMucG9pbnRlclR5cGUgPT09ICdwb2ludGVyTW92ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxvY2FsKGNvbXBvbmVudCwgcGFyZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMubG9jYWw7XG4gICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdXQnLCB4LCB5LCB0aGlzLmdsb2JhbC54LCB0aGlzLmdsb2JhbC55LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnBvaW50ZXJPdmVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMb2NhbChjb21wb25lbnQsIHBhcmVudCk7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMubG9jYWw7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsIHRoaXMucG9pbnRlclR5cGUsIHgsIHksIHRoaXMuZ2xvYmFsLngsIHRoaXMuZ2xvYmFsLnksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJUeXBlID09PSAncG9pbnRlck1vdmUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiAhY29tcG9uZW50LnBvaW50ZXJPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3ZlcicsIHgsIHksIHRoaXMuZ2xvYmFsLngsIHRoaXMuZ2xvYmFsLnksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXJlc3VsdCAmJiBjb21wb25lbnQucG9pbnRlck92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdXQnLCB4LCB5LCB0aGlzLmdsb2JhbC54LCB0aGlzLmdsb2JhbC55LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wb2ludGVyT3ZlciA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXggfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuLi9leHRlbnNpb25zL2Rpc3BsYXknO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgUmVuZGVyZXIgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXTtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIG1hdHJpeDogTWF0cml4LmVtcHR5KCksXG4gICAgICAgICAgICAgICAgY29sb3JUcmFuc2Zvcm06IENvbG9yVHJhbnNmb3JtLmVtcHR5KCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXSA9IGNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFEaXNwbGF5LmlzVmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBUcmFuc2Zvcm0uZ2V0TWF0cml4KGNvbXBvbmVudCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICBUcmFuc2Zvcm0uZ2V0Q29sb3JUcmFuc2Zvcm0oY29tcG9uZW50LCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgTWF0cml4LmNvbmNhdChwYXJlbnQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICBDb2xvclRyYW5zZm9ybS5jb25jYXQocGFyZW50LmNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy5lbmdpbmUucGxhdGZvcm0uYmVnaW4oKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5kZXB0aCsrO1xuICAgICAgICBNYXRyaXguY29weSh0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0TWF0cml4KCksIGJhc2UubWF0cml4KTtcbiAgICAgICAgQ29sb3JUcmFuc2Zvcm0uc2V0RW1wdHkoYmFzZS5jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50KHJvb3QsIGJhc2UpO1xuICAgICAgICB0aGlzLmVuZ2luZS5wbGF0Zm9ybS5lbmQoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IHZhciBSZXNvdXJjZTtcbihmdW5jdGlvbiAoUmVzb3VyY2UpIHtcbiAgICBmdW5jdGlvbiBnZXRQcm9ncmVzcyhyZXNvdXJjZSkge1xuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzb3VyY2UubG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzb3VyY2UuYnl0ZXNUb3RhbCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvdXJjZS5ieXRlc0xvYWRlZCAvIHJlc291cmNlLmJ5dGVzVG90YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFJlc291cmNlLmdldFByb2dyZXNzID0gZ2V0UHJvZ3Jlc3M7XG59KShSZXNvdXJjZSB8fCAoUmVzb3VyY2UgPSB7fSkpO1xuZXhwb3J0IGNsYXNzIFJlc291cmNlcyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZXNvbHZlcnMgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIGdldChhc3NldCkge1xuICAgICAgICBpZiAoIWFzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzb3VyY2UgPSB0aGlzLnJlc291cmNlcy5nZXQoYXNzZXQpO1xuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICByZXNvdXJjZSA9IHRoaXMucmVzb2x2ZShhc3NldCk7XG4gICAgICAgICAgICB0aGlzLnJlc291cmNlcy5zZXQoYXNzZXQsIHJlc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgfVxuICAgIHJlc29sdmUoYXNzZXQpIHtcbiAgICAgICAgZm9yIChjb25zdCByZXNvbHZlciBvZiB0aGlzLnJlc29sdmVycykge1xuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSByZXNvbHZlcihhc3NldCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgaWYgKHJlc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5naW5lLmRlYnVnLndhcm5pbmcoYFJlc291cmNlIG5vdCByZXNvbHZlZDogJHthc3NldH1gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBTY3JlZW4gZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IDQwMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA0MDA7XG4gICAgICAgIHRoaXMucGl4ZWxSYXRpbyA9IDA7XG4gICAgICAgIHRoaXMuZnVsbHNjcmVlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1hdHJpeCA9IE1hdHJpeC5lbXB0eSgpO1xuICAgIH1cbiAgICBnZXRNYXRyaXgoKSB7XG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW8gPSB0aGlzLmdldFBpeGVsUmF0aW8oKTtcbiAgICAgICAgdGhpcy5tYXRyaXguYSA9IHBpeGVsUmF0aW87XG4gICAgICAgIHRoaXMubWF0cml4LmQgPSBwaXhlbFJhdGlvO1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gICAgfVxuICAgIGdldFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuID8gdGhpcy5nZXRXaW5kb3dXaWR0aCgpIDogdGhpcy53aWR0aDtcbiAgICB9XG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuID8gdGhpcy5nZXRXaW5kb3dIZWlnaHQoKSA6IHRoaXMuaGVpZ2h0O1xuICAgIH1cbiAgICBnZXRQaXhlbFJhdGlvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5waXhlbFJhdGlvID4gMCA/IHRoaXMucGl4ZWxSYXRpbyA6IHRoaXMuZ2V0V2luZG93UGl4ZWxSYXRpbygpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUaWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xuICAgICAgICB0aGlzLmZyYW1lUmF0ZSA9IDA7XG4gICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGUgPSAodGltZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbmdpbmUudXBkYXRlci51cGRhdGUodGltZSk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5sb2FkaW5nLnVwZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVuZGVyZXIucmVuZGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlRnJhbWUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gKGN1cnJlbnRUaW1lIC0gdGhpcy50aW1lKSAvIDEwMDA7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKGRlbHRhVGltZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU5leHRGcmFtZSgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB9XG4gICAgZ2V0IGlzUGF1c2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXVzZWQ7XG4gICAgfVxuICAgIHBsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOZXh0RnJhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdXBkYXRlTmV4dEZyYW1lKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVGcmFtZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVXBkYXRlIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy91cGRhdGUnO1xuaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgVXBkYXRlciBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChyb290KTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbiAgICB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVVwZGF0ZS5pc0VuYWJsZWQoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllcyhjb21wb25lbnQpO1xuICAgICAgICBVcGRhdGUudXBkYXRlKGNvbXBvbmVudCwgdGhpcy50aW1lKTtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVByb3BlcnRpZXMoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZW5naW5lLmNvbXBvbmVudHMucHJvcGVydGllcy5mb3JFYWNoKChoYW5kbGVyLCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudFtwcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2xvYWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvZW5naW5lJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvY29tcG9uZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL2RlYnVnJztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcGxhdGZvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9wb2ludGVycyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3JlbmRlcmVyJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcmVzb3VyY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvc2NyZWVuJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvdGlja2VyJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvdXBkYXRlcic7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvZGlzcGxheSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvcGl2b3QnO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3BvaW50ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3NvdXJjZSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvdHJhbnNmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy91cGRhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL2tleSc7XG4iLCJleHBvcnQgdmFyIEJvdW5kcztcbihmdW5jdGlvbiAoQm91bmRzKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtaW5YOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWluWTogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG1heFg6IE51bWJlci5NSU5fVkFMVUUsXG4gICAgICAgICAgICBtYXhZOiBOdW1iZXIuTUlOX1ZBTFVFLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBCb3VuZHMuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShib3VuZHMpIHtcbiAgICAgICAgYm91bmRzLm1pblggPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWluWSA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGJvdW5kcy5tYXhYID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1heFkgPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgIH1cbiAgICBCb3VuZHMuc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KGJvdW5kcykge1xuICAgICAgICByZXR1cm4gYm91bmRzLm1pblggPT09IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5taW5ZID09PSBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWF4WCA9PT0gTnVtYmVyLk1JTl9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1heFkgPT09IE51bWJlci5NSU5fVkFMVUU7XG4gICAgfVxuICAgIEJvdW5kcy5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiB0b1JlY3RhbmdsZShib3VuZHMsIHJlY3RhbmdsZSkge1xuICAgICAgICBjb25zdCB7IG1pblgsIG1pblksIG1heFgsIG1heFksIH0gPSBib3VuZHM7XG4gICAgICAgIHJlY3RhbmdsZS54ID0gbWluWDtcbiAgICAgICAgcmVjdGFuZ2xlLnkgPSBtaW5ZO1xuICAgICAgICByZWN0YW5nbGUud2lkdGggPSBtYXhYIC0gbWluWDtcbiAgICAgICAgcmVjdGFuZ2xlLmhlaWdodCA9IG1heFkgLSBtaW5ZO1xuICAgIH1cbiAgICBCb3VuZHMudG9SZWN0YW5nbGUgPSB0b1JlY3RhbmdsZTtcbiAgICBmdW5jdGlvbiB0ZXN0WChib3VuZHMsIHgpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0WCA9IHRlc3RYO1xuICAgIGZ1bmN0aW9uIHRlc3RZKGJvdW5kcywgeSkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RZID0gdGVzdFk7XG4gICAgZnVuY3Rpb24gdGVzdChib3VuZHMsIHgsIHkpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdCA9IHRlc3Q7XG4gICAgZnVuY3Rpb24gdGVzdFBvaW50KGJvdW5kcywgcG9pbnQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFBvaW50ID0gdGVzdFBvaW50O1xufSkoQm91bmRzIHx8IChCb3VuZHMgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBDb2xvclRyYW5zZm9ybTtcbihmdW5jdGlvbiAoQ29sb3JUcmFuc2Zvcm0pIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFscGhhTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIHJlZE11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBncmVlbk11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBibHVlTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGFscGhhT2Zmc2V0OiAwLFxuICAgICAgICAgICAgcmVkT2Zmc2V0OiAwLFxuICAgICAgICAgICAgZ3JlZW5PZmZzZXQ6IDAsXG4gICAgICAgICAgICBibHVlT2Zmc2V0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkoY3QpIHtcbiAgICAgICAgcmV0dXJuIGN0LnJlZE11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmdyZWVuTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmFscGhhTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYmx1ZU9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHlXaXRoQWxwaGEoY3QpIHtcbiAgICAgICAgcmV0dXJuIGN0LnJlZE11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmdyZWVuTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LnJlZE9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5PZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmJsdWVPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmFscGhhT2Zmc2V0ID09PSAwO1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5pc0VtcHR5V2l0aEFscGhhID0gaXNFbXB0eVdpdGhBbHBoYTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShjdCkge1xuICAgICAgICBjdC5yZWRNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuZ3JlZW5NdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuYmx1ZU11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5hbHBoYU11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5yZWRPZmZzZXQgPSAwO1xuICAgICAgICBjdC5ncmVlbk9mZnNldCA9IDA7XG4gICAgICAgIGN0LmJsdWVPZmZzZXQgPSAwO1xuICAgICAgICBjdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gY29weShmcm9tLCB0bykge1xuICAgICAgICB0by5hbHBoYU11bHRpcGxpZXIgPSBmcm9tLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgdG8ucmVkTXVsdGlwbGllciA9IGZyb20ucmVkTXVsdGlwbGllcjtcbiAgICAgICAgdG8uZ3JlZW5NdWx0aXBsaWVyID0gZnJvbS5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIHRvLmJsdWVNdWx0aXBsaWVyID0gZnJvbS5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgdG8uYWxwaGFPZmZzZXQgPSBmcm9tLmFscGhhT2Zmc2V0O1xuICAgICAgICB0by5yZWRPZmZzZXQgPSBmcm9tLnJlZE9mZnNldDtcbiAgICAgICAgdG8uZ3JlZW5PZmZzZXQgPSBmcm9tLmdyZWVuT2Zmc2V0O1xuICAgICAgICB0by5ibHVlT2Zmc2V0ID0gZnJvbS5ibHVlT2Zmc2V0O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBjb25jYXQoY3QxLCBjdDAsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCBhbHBoYU11bHRpcGxpZXIgPSBjdDEuYWxwaGFNdWx0aXBsaWVyICogY3QwLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgcmVkTXVsdGlwbGllciA9IGN0MS5yZWRNdWx0aXBsaWVyICogY3QwLnJlZE11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGdyZWVuTXVsdGlwbGllciA9IGN0MS5ncmVlbk11bHRpcGxpZXIgKiBjdDAuZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBibHVlTXVsdGlwbGllciA9IGN0MS5ibHVlTXVsdGlwbGllciAqIGN0MC5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgYWxwaGFPZmZzZXQgPSBjdDEuYWxwaGFNdWx0aXBsaWVyICogY3QwLmFscGhhT2Zmc2V0ICsgY3QxLmFscGhhT2Zmc2V0O1xuICAgICAgICBjb25zdCByZWRPZmZzZXQgPSBjdDEucmVkTXVsdGlwbGllciAqIGN0MC5yZWRPZmZzZXQgKyBjdDEucmVkT2Zmc2V0O1xuICAgICAgICBjb25zdCBncmVlbk9mZnNldCA9IGN0MS5ncmVlbk11bHRpcGxpZXIgKiBjdDAuZ3JlZW5PZmZzZXQgKyBjdDEuZ3JlZW5PZmZzZXQ7XG4gICAgICAgIGNvbnN0IGJsdWVPZmZzZXQgPSBjdDEuYmx1ZU11bHRpcGxpZXIgKiBjdDAuYmx1ZU9mZnNldCArIGN0MS5ibHVlT2Zmc2V0O1xuICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHJlZE11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSBncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IGJsdWVNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSBhbHBoYU9mZnNldDtcbiAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IHJlZE9mZnNldDtcbiAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gZ3JlZW5PZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gYmx1ZU9mZnNldDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uY29uY2F0ID0gY29uY2F0O1xufSkoQ29sb3JUcmFuc2Zvcm0gfHwgKENvbG9yVHJhbnNmb3JtID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vY29sb3ItdHJhbnNmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vYm91bmRzJztcbmV4cG9ydCAqIGZyb20gJy4vbWF0cml4JztcbmV4cG9ydCAqIGZyb20gJy4vcG9pbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWN0YW5nbGUnO1xuIiwiZXhwb3J0IHZhciBNYXRyaXg7XG4oZnVuY3Rpb24gKE1hdHJpeCkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogMSxcbiAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICBjOiAwLFxuICAgICAgICAgICAgZDogMSxcbiAgICAgICAgICAgIHR4OiAwLFxuICAgICAgICAgICAgdHk6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIE1hdHJpeC5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkobWF0cml4KSB7XG4gICAgICAgIHJldHVybiBtYXRyaXguYSA9PT0gMVxuICAgICAgICAgICAgJiYgbWF0cml4LmIgPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC5jID09PSAwXG4gICAgICAgICAgICAmJiBtYXRyaXguZCA9PT0gMVxuICAgICAgICAgICAgJiYgbWF0cml4LnR4ID09PSAwXG4gICAgICAgICAgICAmJiBtYXRyaXgudHkgPT09IDA7XG4gICAgfVxuICAgIE1hdHJpeC5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShtYXRyaXgpIHtcbiAgICAgICAgbWF0cml4LmEgPSAxO1xuICAgICAgICBtYXRyaXguYiA9IDA7XG4gICAgICAgIG1hdHJpeC5jID0gMDtcbiAgICAgICAgbWF0cml4LmQgPSAxO1xuICAgICAgICBtYXRyaXgudHggPSAwO1xuICAgICAgICBtYXRyaXgudHkgPSAwO1xuICAgIH1cbiAgICBNYXRyaXguc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KGZyb20sIHRvKSB7XG4gICAgICAgIHRvLmEgPSBmcm9tLmE7XG4gICAgICAgIHRvLmIgPSBmcm9tLmI7XG4gICAgICAgIHRvLmMgPSBmcm9tLmM7XG4gICAgICAgIHRvLmQgPSBmcm9tLmQ7XG4gICAgICAgIHRvLnR4ID0gZnJvbS50eDtcbiAgICAgICAgdG8udHkgPSBmcm9tLnR5O1xuICAgIH1cbiAgICBNYXRyaXguY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gY29uY2F0KG1hdHJpeDAsIG1hdHJpeDEsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCBhID0gbWF0cml4MS5hICogbWF0cml4MC5hICsgbWF0cml4MS5iICogbWF0cml4MC5jO1xuICAgICAgICBjb25zdCBiID0gbWF0cml4MS5hICogbWF0cml4MC5iICsgbWF0cml4MS5iICogbWF0cml4MC5kO1xuICAgICAgICBjb25zdCBjID0gbWF0cml4MS5jICogbWF0cml4MC5hICsgbWF0cml4MS5kICogbWF0cml4MC5jO1xuICAgICAgICBjb25zdCBkID0gbWF0cml4MS5jICogbWF0cml4MC5iICsgbWF0cml4MS5kICogbWF0cml4MC5kO1xuICAgICAgICBjb25zdCB0eCA9IG1hdHJpeDEudHggKiBtYXRyaXgwLmEgKyBtYXRyaXgxLnR5ICogbWF0cml4MC5jICsgbWF0cml4MC50eDtcbiAgICAgICAgY29uc3QgdHkgPSBtYXRyaXgxLnR4ICogbWF0cml4MC5iICsgbWF0cml4MS50eSAqIG1hdHJpeDAuZCArIG1hdHJpeDAudHk7XG4gICAgICAgIHJlc3VsdC5hID0gYTtcbiAgICAgICAgcmVzdWx0LmIgPSBiO1xuICAgICAgICByZXN1bHQuYyA9IGM7XG4gICAgICAgIHJlc3VsdC5kID0gZDtcbiAgICAgICAgcmVzdWx0LnR4ID0gdHg7XG4gICAgICAgIHJlc3VsdC50eSA9IHR5O1xuICAgIH1cbiAgICBNYXRyaXguY29uY2F0ID0gY29uY2F0O1xuICAgIGZ1bmN0aW9uIGdldERldGVybWluYW50KG1hdHJpeCkge1xuICAgICAgICByZXR1cm4gbWF0cml4LmEgKiBtYXRyaXguZCAtIG1hdHJpeC5iICogbWF0cml4LmM7XG4gICAgfVxuICAgIE1hdHJpeC5nZXREZXRlcm1pbmFudCA9IGdldERldGVybWluYW50O1xuICAgIGZ1bmN0aW9uIGludmVydChtYXRyaXgsIHJlc3VsdCkge1xuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudChtYXRyaXgpO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC50eCA9IC1tYXRyaXgudHg7XG4gICAgICAgICAgICByZXN1bHQudHkgPSAtbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGV0ZXJtaW5hbnQgPSAxLjAgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gbWF0cml4LmEgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gLW1hdHJpeC5iICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuYyA9IC1tYXRyaXguYyAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBtYXRyaXguZCAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gLXJlc3VsdC5hICogbWF0cml4LnR4IC0gcmVzdWx0LmMgKiBtYXRyaXgudHk7XG4gICAgICAgICAgICByZXN1bHQudHkgPSAtcmVzdWx0LmIgKiBtYXRyaXgudHggLSByZXN1bHQuZCAqIG1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBNYXRyaXguaW52ZXJ0ID0gaW52ZXJ0O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50KG1hdHJpeCwgcG9pbnQsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICByZXN1bHQueCA9IHggKiBtYXRyaXguYSArIHkgKiBtYXRyaXguYyArIG1hdHJpeC50eDtcbiAgICAgICAgcmVzdWx0LnkgPSB4ICogbWF0cml4LmIgKyB5ICogbWF0cml4LmQgKyBtYXRyaXgudHk7XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludCA9IHRyYW5zZm9ybVBvaW50O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50TG9jYWwobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJlc3VsdC54ID0geCAqIG1hdHJpeC5hICsgeSAqIG1hdHJpeC5jO1xuICAgICAgICByZXN1bHQueSA9IHggKiBtYXRyaXguYiArIHkgKiBtYXRyaXguZDtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybVBvaW50TG9jYWwgPSB0cmFuc2Zvcm1Qb2ludExvY2FsO1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUludmVyc2VQb2ludChtYXRyaXgsIHBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgbGV0IGRldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KTtcbiAgICAgICAgaWYgKGRldGVybWluYW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQueCA9IC1tYXRyaXgudHg7XG4gICAgICAgICAgICByZXN1bHQueSA9IC1tYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCA9IDEgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgICAgICByZXN1bHQueCA9IGRldGVybWluYW50ICogKG1hdHJpeC5jICogKG1hdHJpeC50eSAtIHkpICsgbWF0cml4LmQgKiAoeCAtIG1hdHJpeC50eCkpO1xuICAgICAgICAgICAgcmVzdWx0LnkgPSBkZXRlcm1pbmFudCAqIChtYXRyaXguYSAqICh5IC0gbWF0cml4LnR5KSArIG1hdHJpeC5iICogKG1hdHJpeC50eCAtIHgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50ID0gdHJhbnNmb3JtSW52ZXJzZVBvaW50O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUJvdW5kcyhtYXRyaXgsIGJvdW5kcywgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgYSwgYiwgYywgZCwgdHgsIHR5LCB9ID0gbWF0cml4O1xuICAgICAgICBjb25zdCByeCA9IGJvdW5kcy54O1xuICAgICAgICBjb25zdCByeSA9IGJvdW5kcy55O1xuICAgICAgICBjb25zdCByciA9IHJ4ICsgYm91bmRzLndpZHRoO1xuICAgICAgICBjb25zdCByYiA9IHJ5ICsgYm91bmRzLmhlaWdodDtcbiAgICAgICAgY29uc3QgbngxID0gcnggKiBhICsgcnkgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MSA9IHJ4ICogYiArIHJ5ICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDIgPSByciAqIGEgKyByeSAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkyID0gcnIgKiBiICsgcnkgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54MyA9IHJyICogYSArIHJiICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTMgPSByciAqIGIgKyByYiAqIGQgKyB0eTtcbiAgICAgICAgY29uc3Qgbng0ID0gcnggKiBhICsgcmIgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55NCA9IHJ4ICogYiArIHJiICogZCArIHR5O1xuICAgICAgICBsZXQgbGVmdCA9IG54MTtcbiAgICAgICAgaWYgKGxlZnQgPiBueDIpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQgPiBueDMpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQgPiBueDQpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvcCA9IG55MTtcbiAgICAgICAgaWYgKHRvcCA+IG55Mikge1xuICAgICAgICAgICAgdG9wID0gbnkyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3AgPiBueTMpIHtcbiAgICAgICAgICAgIHRvcCA9IG55MztcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9wID4gbnk0KSB7XG4gICAgICAgICAgICB0b3AgPSBueTQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJpZ2h0ID0gbngxO1xuICAgICAgICBpZiAocmlnaHQgPCBueDIpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbngyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCA8IG54Mykge1xuICAgICAgICAgICAgcmlnaHQgPSBueDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0IDwgbng0KSB7XG4gICAgICAgICAgICByaWdodCA9IG54NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYm90dG9tID0gbnkxO1xuICAgICAgICBpZiAoYm90dG9tIDwgbnkyKSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdHRvbSA8IG55Mykge1xuICAgICAgICAgICAgYm90dG9tID0gbnkzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3R0b20gPCBueTQpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55NDtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQueCA9IGxlZnQ7XG4gICAgICAgIHJlc3VsdC55ID0gdG9wO1xuICAgICAgICByZXN1bHQud2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBib3R0b20gLSB0b3A7XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Cb3VuZHMgPSB0cmFuc2Zvcm1Cb3VuZHM7XG59KShNYXRyaXggfHwgKE1hdHJpeCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFBvaW50O1xuKGZ1bmN0aW9uIChQb2ludCkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuICAgIFBvaW50LmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gbGVuZ3RoKHBvaW50KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfVxuICAgIFBvaW50Lmxlbmd0aCA9IGxlbmd0aDtcbiAgICBmdW5jdGlvbiBhbmdsZShwb2ludCkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihwb2ludC55LCBwb2ludC54KTtcbiAgICB9XG4gICAgUG9pbnQuYW5nbGUgPSBhbmdsZTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludC54ID09PSAwICYmIHBvaW50LnkgPT09IDA7XG4gICAgfVxuICAgIFBvaW50LmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGVxdWFscyhwb2ludDAsIHBvaW50MSkge1xuICAgICAgICByZXR1cm4gcG9pbnQwLnggPT09IHBvaW50MS54ICYmIHBvaW50MC55ID09PSBwb2ludDEueTtcbiAgICB9XG4gICAgUG9pbnQuZXF1YWxzID0gZXF1YWxzO1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KHBvaW50KSB7XG4gICAgICAgIHBvaW50LnggPSAwO1xuICAgICAgICBwb2ludC55ID0gMDtcbiAgICB9XG4gICAgUG9pbnQuc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC54ID0gc291cmNlLng7XG4gICAgICAgIHRhcmdldC55ID0gc291cmNlLnk7XG4gICAgfVxuICAgIFBvaW50LmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZShwb2ludCwgdGhpY2tuZXNzKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGxlbmd0aChwb2ludCk7XG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpY2tuZXNzIC8gdmFsdWU7XG4gICAgICAgICAgICBwb2ludC54ICo9IHZhbHVlO1xuICAgICAgICAgICAgcG9pbnQueSAqPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQb2ludC5ub3JtYWxpemUgPSBub3JtYWxpemU7XG4gICAgZnVuY3Rpb24gZGlzdGFuY2UocG9pbnQwLCBwb2ludDEpIHtcbiAgICAgICAgY29uc3QgZHggPSBwb2ludDAueCAtIHBvaW50MS54O1xuICAgICAgICBjb25zdCBkeSA9IHBvaW50MC55IC0gcG9pbnQxLnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cbiAgICBQb2ludC5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIGZ1bmN0aW9uIGludGVycG9sYXRlKGJlZ2luLCBlbmQsIHZhbHVlLCByZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0LnggPSBiZWdpbi54ICsgdmFsdWUgKiAoZW5kLnggLSBiZWdpbi54KTtcbiAgICAgICAgcmVzdWx0LnkgPSBiZWdpbi55ICsgdmFsdWUgKiAoZW5kLnkgLSBiZWdpbi55KTtcbiAgICB9XG4gICAgUG9pbnQuaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcbiAgICBmdW5jdGlvbiBwb2xhcihwb2ludCwgbGVuZ3RoLCBhbmdsZSkge1xuICAgICAgICBwb2ludC54ID0gbGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgICBwb2ludC55ID0gbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIH1cbiAgICBQb2ludC5wb2xhciA9IHBvbGFyO1xufSkoUG9pbnQgfHwgKFBvaW50ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUmVjdGFuZ2xlO1xuKGZ1bmN0aW9uIChSZWN0YW5nbGUpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFJlY3RhbmdsZS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KHJlY3RhbmdsZSkge1xuICAgICAgICByZWN0YW5nbGUueCA9IDA7XG4gICAgICAgIHJlY3RhbmdsZS55ID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLndpZHRoID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLmhlaWdodCA9IDA7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGludGVyc2VjdGlvbihzb3VyY2UsIHRhcmdldCwgcmVzdWx0KSB7XG4gICAgICAgIGxldCB7IHgsIHksIHdpZHRoLCBoZWlnaHQsIH0gPSBzb3VyY2U7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0YXJnZXQueDtcbiAgICAgICAgY29uc3QgdG9wID0gdGFyZ2V0Lnk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGFyZ2V0LnggKyB0YXJnZXQud2lkdGg7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRhcmdldC55ICsgdGFyZ2V0LmhlaWdodDtcbiAgICAgICAgaWYgKHggPCBsZWZ0KSB7XG4gICAgICAgICAgICB3aWR0aCAtPSBsZWZ0IC0geDtcbiAgICAgICAgICAgIHggPSBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh4ICsgd2lkdGggPiByaWdodCkge1xuICAgICAgICAgICAgd2lkdGggPSByaWdodCAtIHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgPCB0b3ApIHtcbiAgICAgICAgICAgIGhlaWdodCAtPSB0b3AgLSB5O1xuICAgICAgICAgICAgeSA9IHRvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSArIGhlaWdodCA+IGJvdHRvbSkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gYm90dG9tIC0geTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgICAgICB3aWR0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICAgIGhlaWdodCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnggPSB4O1xuICAgICAgICByZXN1bHQueSA9IHk7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHdpZHRoO1xuICAgICAgICByZXN1bHQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuaW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uO1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0YW5nbGUud2lkdGggPT09IDAgfHwgcmVjdGFuZ2xlLmhlaWdodCA9PT0gMDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGNvbnRhaW5zKHJlY3RhbmdsZSwgcG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZS54IDwgcG9pbnQueFxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnggKyByZWN0YW5nbGUud2lkdGggPiBwb2ludC54XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueSA8IHBvaW50LnlcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS55ICsgcmVjdGFuZ2xlLmhlaWdodCA+IHBvaW50Lnk7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5jb250YWlucyA9IGNvbnRhaW5zO1xuICAgIGZ1bmN0aW9uIHJvdW5kKHJlY3RhbmdsZSkge1xuICAgICAgICByZWN0YW5nbGUueCA9IE1hdGgucm91bmQocmVjdGFuZ2xlLngpO1xuICAgICAgICByZWN0YW5nbGUueSA9IE1hdGgucm91bmQocmVjdGFuZ2xlLnkpO1xuICAgICAgICByZWN0YW5nbGUud2lkdGggPSBNYXRoLnJvdW5kKHJlY3RhbmdsZS53aWR0aCk7XG4gICAgICAgIHJlY3RhbmdsZS5oZWlnaHQgPSBNYXRoLnJvdW5kKHJlY3RhbmdsZS5oZWlnaHQpO1xuICAgIH1cbiAgICBSZWN0YW5nbGUucm91bmQgPSByb3VuZDtcbn0pKFJlY3RhbmdsZSB8fCAoUmVjdGFuZ2xlID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBDb2xvclRyYW5zZm9ybSwgTWF0cml4LCBSZWN0YW5nbGUgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSB9IGZyb20gJy4vaW1hZ2UnO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5jb25zdCBzY3JlZW5Cb3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihpbWFnZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBpbWFnZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gcGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgaWYgKENvbG9yVHJhbnNmb3JtLmlzRW1wdHlXaXRoQWxwaGEoY29sb3JUcmFuc2Zvcm0pKSB7XG4gICAgICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUNvbnRleHQgPSBwbGF0Zm9ybS5jcmVhdGVDdXN0b21Db250ZXh0KCk7XG4gICAgICAgICAgICBib3VuZHMueCA9IHg7XG4gICAgICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIGJvdW5kcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtQm91bmRzKG1hdHJpeCwgYm91bmRzLCBib3VuZHMpO1xuICAgICAgICAgICAgaWYgKFJlY3RhbmdsZS5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzY3JlZW5Cb3VuZHMud2lkdGggPSBjdXN0b21Db250ZXh0LmNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIHNjcmVlbkJvdW5kcy5oZWlnaHQgPSBjdXN0b21Db250ZXh0LmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICBSZWN0YW5nbGUuaW50ZXJzZWN0aW9uKGJvdW5kcywgc2NyZWVuQm91bmRzLCBib3VuZHMpO1xuICAgICAgICAgICAgaWYgKFJlY3RhbmdsZS5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZWN0YW5nbGUucm91bmQoYm91bmRzKTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LmNsZWFyUmVjdChib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gY3VzdG9tQ29udGV4dC5nZXRJbWFnZURhdGEoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgY29uc3Qgcm0gPSBjb2xvclRyYW5zZm9ybS5yZWRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3QgZ20gPSBjb2xvclRyYW5zZm9ybS5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBibSA9IGNvbG9yVHJhbnNmb3JtLmJsdWVNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3QgYW0gPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdCBybyA9IGNvbG9yVHJhbnNmb3JtLnJlZE9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGdvID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5PZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBibyA9IGNvbG9yVHJhbnNmb3JtLmJsdWVPZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBhbyA9IGNvbG9yVHJhbnNmb3JtLmFscGhhT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBpbWFnZURhdGE7XG4gICAgICAgICAgICBjb25zdCB7IGxlbmd0aCB9ID0gZGF0YTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOykge1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBybSArIHJvO1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBnbSArIGdvO1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBibSArIGJvO1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBhbSArIGFvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCBib3VuZHMueCwgYm91bmRzLnkpO1xuICAgICAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybSgpO1xuICAgICAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UoY3VzdG9tQ29udGV4dC5jYW52YXMsIGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0LCBib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBwbGF0Zm9ybS5kZXN0cm95Q3VzdG9tQ29udGV4dChjdXN0b21Db250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBJbWFnZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoSU1BR0UsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uIHx8IChDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBJbWFnZUV4dGVuc2lvbiwgSU1BR0UgfSBmcm9tICcuL2ltYWdlJztcbmV4cG9ydCB2YXIgQ2FudmFzSW1hZ2VFeHRlbnNpb247XG4oZnVuY3Rpb24gKENhbnZhc0ltYWdlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IGltYWdlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gZW5naW5lLnBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IGNvbnRleHQ7XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgfVxuICAgIENhbnZhc0ltYWdlRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBJbWFnZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoSU1BR0UsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc0ltYWdlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ2FudmFzSW1hZ2VFeHRlbnNpb24gfHwgKENhbnZhc0ltYWdlRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90LCBSZXNvdXJjZSwgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5leHBvcnQgY29uc3QgSU1BR0UgPSAnaW1hZ2UnO1xuZXhwb3J0IHZhciBJbWFnZTtcbihmdW5jdGlvbiAoSW1hZ2UpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoaW1hZ2UsIGJvdW5kcywgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBpbWFnZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgICAgICBib3VuZHMueCA9IHg7XG4gICAgICAgIGJvdW5kcy55ID0geTtcbiAgICAgICAgYm91bmRzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGJvdW5kcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIEltYWdlLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEltYWdlIHx8IChJbWFnZSA9IHt9KSk7XG5jb25zdCBib3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgSW1hZ2VFeHRlbnNpb247XG4oZnVuY3Rpb24gKEltYWdlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdChpbWFnZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgbG9jYWwgfSA9IGVuZ2luZS5wb2ludGVycztcbiAgICAgICAgSW1hZ2UuY2FsY3VsYXRlQm91bmRzKGltYWdlLCBib3VuZHMsIGVuZ2luZSk7XG4gICAgICAgIGxldCBjb250YWlucyA9IFJlY3RhbmdsZS5jb250YWlucyhib3VuZHMsIGxvY2FsKTtcbiAgICAgICAgaWYgKGNvbnRhaW5zKSB7XG4gICAgICAgICAgICBpZiAoaW1hZ2UucG9pbnRlclRlc3RTaGFwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoaW1hZ2Uuc3JjKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSBsb2NhbC54IC0gYm91bmRzLng7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBsb2NhbC55IC0gYm91bmRzLnk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNvdXJjZS5pbWFnZSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gcmVzb3VyY2UuaW1hZ2UuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGNhbnZhc0NvbnRleHQuZ2V0SW1hZ2VEYXRhKHgsIHksIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbnMgPSBpbWFnZURhdGEuZGF0YVszXSA+IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbUNvbnRleHQgPSBwbGF0Zm9ybS5jcmVhdGVDdXN0b21Db250ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21Db250ZXh0LnNldFRyYW5zZm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21Db250ZXh0LmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSwgMSwgMSwgMCwgMCwgMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBjdXN0b21Db250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gaW1hZ2VEYXRhLmRhdGFbM10gPiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm0uZGVzdHJveUN1c3RvbUNvbnRleHQoY3VzdG9tQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWlucztcbiAgICB9XG4gICAgSW1hZ2VFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGltYWdlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5sb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IGltYWdlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gUmVzb3VyY2UuZ2V0UHJvZ3Jlc3MocmVzb3VyY2UpO1xuICAgICAgICBjb250ZXh0LmxvYWRlZCA9ICEhcmVzb3VyY2U/LmxvYWRlZCAmJiAhIXJlc291cmNlPy5pbWFnZTtcbiAgICB9XG4gICAgSW1hZ2VFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KElNQUdFLCBoaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChJTUFHRSwgbG9hZGVkKTtcbiAgICAgICAgSW1hZ2VSZXNvdXJjZS5pbml0KGVuZ2luZSk7XG4gICAgfVxuICAgIEltYWdlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoSW1hZ2VFeHRlbnNpb24gfHwgKEltYWdlRXh0ZW5zaW9uID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMtaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMtaW1hZ2UtY29sb3InO1xuIiwiZXhwb3J0IHZhciBJbWFnZVJlc291cmNlO1xuKGZ1bmN0aW9uIChJbWFnZVJlc291cmNlKSB7XG4gICAgZnVuY3Rpb24gcmVzb2x2ZShhc3NldCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGFzc2V0LnNwbGl0KCcuJykucG9wKCk7XG4gICAgICAgIHN3aXRjaCAoZXh0ZW5zaW9uKSB7XG4gICAgICAgICAgICBjYXNlICdwbmcnOlxuICAgICAgICAgICAgY2FzZSAnanBnJzpcbiAgICAgICAgICAgIGNhc2UgJ3dlYnAnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0ge1xuICAgICAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNMb2FkZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzVG90YWw6IDAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGFzc2V0O1xuICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLmxvZyhgaW1hZ2UgbG9hZGVkOiAke2Fzc2V0fWApO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5pbWFnZSA9IGltYWdlO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdpbWFnZSBsb2FkIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBJbWFnZVJlc291cmNlLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvbHZlKTtcbiAgICB9XG4gICAgSW1hZ2VSZXNvdXJjZS5pbml0ID0gaW5pdDtcbn0pKEltYWdlUmVzb3VyY2UgfHwgKEltYWdlUmVzb3VyY2UgPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmluZyc7XG4iLCJleHBvcnQgdmFyIFN0cmluZ1Jlc291cmNlO1xuKGZ1bmN0aW9uIChTdHJpbmdSZXNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIHJlc29sdmUoYXNzZXQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBleHRlbnNpb24gPSBhc3NldC5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgICBzd2l0Y2ggKGV4dGVuc2lvbikge1xuICAgICAgICAgICAgY2FzZSAndHh0JzpcbiAgICAgICAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0ge1xuICAgICAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNMb2FkZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzVG90YWw6IDAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgYXNzZXQsIHRydWUpO1xuICAgICAgICAgICAgICAgIHhoci5vbnByb2dyZXNzID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuYnl0ZXNMb2FkZWQgPSBlLmxvYWRlZDtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuYnl0ZXNUb3RhbCA9IGUudG90YWw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcubG9nKGBzdHJpbmcgbG9hZGVkOiAke2Fzc2V0fWApO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5kYXRhID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuYnl0ZXNMb2FkZWQgPSByZXNvdXJjZS5ieXRlc1RvdGFsO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnc3RyaW5nIGxvYWQgZXJyb3InLCBlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgU3RyaW5nUmVzb3VyY2UucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLnJlc291cmNlcy5yZXNvbHZlcnMuYWRkKHJlc29sdmUpO1xuICAgIH1cbiAgICBTdHJpbmdSZXNvdXJjZS5pbml0ID0gaW5pdDtcbn0pKFN0cmluZ1Jlc291cmNlIHx8IChTdHJpbmdSZXNvdXJjZSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBSZXNvdXJjZSwgQ29udGFpbmVyRXh0ZW5zaW9uLCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgU3RyaW5nUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuZXhwb3J0IGNvbnN0IFNDRU5FID0gJ3NjZW5lJztcbmV4cG9ydCB2YXIgU2NlbmVFeHRlbnNpb247XG4oZnVuY3Rpb24gKFNjZW5lRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gbG9hZGVkKHNjZW5lLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5sb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgaWYgKHNjZW5lLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBDb250YWluZXJFeHRlbnNpb24ubG9hZGVkKHNjZW5lLCBlbmdpbmUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeyBzcmMgfSA9IHNjZW5lO1xuICAgICAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IFJlc291cmNlLmdldFByb2dyZXNzKHJlc291cmNlKTtcbiAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gISFyZXNvdXJjZT8ubG9hZGVkICYmICEhcmVzb3VyY2U/LmRhdGE7XG4gICAgICAgICAgICBpZiAocmVzb3VyY2UgJiYgcmVzb3VyY2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLmNoaWxkcmVuID0gSlNPTi5wYXJzZShyZXNvdXJjZS5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoYHNjZW5lIHBhcnNpbmcgZXJyb3I6ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBTY2VuZUV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoU0NFTkUsIENvbnRhaW5lckV4dGVuc2lvbi5oaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChTQ0VORSwgQ29udGFpbmVyRXh0ZW5zaW9uLnJlbmRlcik7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5zZXQoU0NFTkUsIENvbnRhaW5lckV4dGVuc2lvbi51cGRhdGUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KFNDRU5FLCBsb2FkZWQpO1xuICAgICAgICBTdHJpbmdSZXNvdXJjZS5pbml0KGVuZ2luZSk7XG4gICAgfVxuICAgIFNjZW5lRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoU2NlbmVFeHRlbnNpb24gfHwgKFNjZW5lRXh0ZW5zaW9uID0ge30pKTtcbiIsImNvbnN0IFBJXzIgPSBNYXRoLlBJICogMjtcbmV4cG9ydCBmdW5jdGlvbiBhcHBseUVsbGlwc2UoZGF0YSwgaGFzRmlsbCwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCByYWRpdXMgPSAwLCByYWRpdXNYLCByYWRpdXNZLCB9ID0gZGF0YTtcbiAgICBjb25zdCByeCA9IHJhZGl1c1ggPz8gcmFkaXVzO1xuICAgIGNvbnN0IHJ5ID0gcmFkaXVzWSA/PyByYWRpdXM7XG4gICAgaWYgKHJ4ID09PSAwIHx8IHJ5ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmVsbGlwc2UoeCwgeSwgcngsIHJ5LCAwLCAwLCBQSV8yKTtcbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhcHBseUNvbW1hbmQoY29tbWFuZCwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gY29tbWFuZDtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbW92ZVRvJzpcbiAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhtb3ZlVG8ueCA/PyAwLCBtb3ZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsaW5lVG8nOlxuICAgICAgICAgICAgY29uc3QgbGluZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKGxpbmVUby54ID8/IDAsIGxpbmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2N1cnZlVG8nOlxuICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8oY3VydmVUby5jeCA/PyAwLCBjdXJ2ZVRvLmN5ID8/IDAsIGN1cnZlVG8ueCA/PyAwLCBjdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3ViaWNDdXJ2ZVRvJzpcbiAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBjb250ZXh0LmJlemllckN1cnZlVG8oY3ViaWNDdXJ2ZVRvLmN4ID8/IDAsIGN1YmljQ3VydmVUby5jeSA/PyAwLCBjdWJpY0N1cnZlVG8uc3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLnN5ID8/IDAsIGN1YmljQ3VydmVUby54ID8/IDAsIGN1YmljQ3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXRoKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpIHtcbiAgICBpZiAoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IGRhdGFbaV07XG4gICAgICAgIGFwcGx5Q29tbWFuZChjb21tYW5kLCBjb250ZXh0KTtcbiAgICB9XG4gICAgaWYgKGhhc0ZpbGwpIHtcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYXBwbHlSZWN0YW5nbGUoZGF0YSwgaGFzRmlsbCwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCB3aWR0aCA9IDAsIGhlaWdodCA9IDAsIH0gPSBkYXRhO1xuICAgIGlmICh3aWR0aCA9PT0gMCB8fCBoZWlnaHQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBNYXRyaXgsIFBvaW50LCBSZWN0YW5nbGUsIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBTaGFwZUV4dGVuc2lvbiwgU0hBUEUsIFNoYXBlIH0gZnJvbSAnLi4vc2hhcGUnO1xuaW1wb3J0IHsgYXBwbHlSZWN0YW5nbGUgfSBmcm9tICcuL3JlY3RhbmdsZSc7XG5pbXBvcnQgeyBhcHBseUVsbGlwc2UgfSBmcm9tICcuL2VsbGlwc2UnO1xuaW1wb3J0IHsgYXBwbHlQYXRoIH0gZnJvbSAnLi9wYXRoJztcbmltcG9ydCB7IGFwcGx5U3RyaW5nIH0gZnJvbSAnLi9zdHJpbmcnO1xuaW1wb3J0IHsgc2V0RmlsbFN0eWxlLCBzZXRTdHJva2VTdHlsZSB9IGZyb20gJy4vc3R5bGUnO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5jb25zdCBvZmZzZXQgPSBQb2ludC5lbXB0eSgpO1xuZnVuY3Rpb24gcmVuZGVyR3JhcGhpY3MoZGF0YSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGNvbnN0IHsgZmlsbCwgc3Ryb2tlIH0gPSBkYXRhO1xuICAgIGNvbnN0IGhhc0ZpbGwgPSAhIWZpbGwgfHwgZmlsbCA9PT0gMDtcbiAgICBjb25zdCBoYXNTdHJva2UgPSAhIXN0cm9rZSB8fCBzdHJva2UgPT09IDA7XG4gICAgaWYgKCFoYXNGaWxsICYmICFoYXNTdHJva2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZXhpc3QgPSB0cnVlO1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gZGF0YTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAncmVjdGFuZ2xlJzpcbiAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlSZWN0YW5nbGUoZGF0YSwgaGFzRmlsbCwgY29udGV4dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICAgICAgICBleGlzdCA9IGFwcGx5RWxsaXBzZShkYXRhLCBoYXNGaWxsLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYXRoJzpcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBkYXRhO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXRoLmRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgZXhpc3QgPSBhcHBseVN0cmluZyhwYXRoLmRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwYXRoLmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgZXhpc3QgPSBhcHBseVBhdGgocGF0aC5kYXRhLCBoYXNGaWxsLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4aXN0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoIWV4aXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGhhc0ZpbGwpIHtcbiAgICAgICAgc2V0RmlsbFN0eWxlKGZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpO1xuICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICB9XG4gICAgaWYgKGhhc1N0cm9rZSkge1xuICAgICAgICBzZXRTdHJva2VTdHlsZShzdHJva2UsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpO1xuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIH1cbn1cbmV4cG9ydCB2YXIgQ2FudmFzU2hhcGVFeHRlbnNpb247XG4oZnVuY3Rpb24gKENhbnZhc1NoYXBlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gcmVuZGVyKHNoYXBlLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBzaGFwZTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFBvaW50LnNldEVtcHR5KG9mZnNldCk7XG4gICAgICAgIGlmIChQaXZvdC5oYXNWYWx1ZXMoc2hhcGUpKSB7XG4gICAgICAgICAgICBTaGFwZS5jYWxjdWxhdGVCb3VuZHMoc2hhcGUsIGJvdW5kcyk7XG4gICAgICAgICAgICBpZiAoUmVjdGFuZ2xlLmlzRW1wdHkoYm91bmRzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9mZnNldC54ID0gUGl2b3QuZ2V0WChzaGFwZSwgYm91bmRzLndpZHRoKTtcbiAgICAgICAgICAgIG9mZnNldC55ID0gUGl2b3QuZ2V0WShzaGFwZSwgYm91bmRzLndpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBlbmdpbmUucGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICAgICAgaWYgKFBvaW50LmlzRW1wdHkob2Zmc2V0KSkge1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50TG9jYWwobWF0cml4LCBvZmZzZXQsIG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4ICsgb2Zmc2V0LngsIG1hdHJpeC50eSArIG9mZnNldC55KTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlbmRlckdyYXBoaWNzKGRhdGFbaV0sIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0MmQsIGVuZ2luZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZW5kZXJHcmFwaGljcyhkYXRhLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dDJkLCBlbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc1NoYXBlRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBTaGFwZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoU0hBUEUsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc1NoYXBlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ2FudmFzU2hhcGVFeHRlbnNpb24gfHwgKENhbnZhc1NoYXBlRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IEdyYXBoaWNzU3RyaW5nUmVhZGVyIH0gZnJvbSAnLi4vZGF0YS9zdHJpbmcnO1xuaW1wb3J0IHsgYXBwbHlDb21tYW5kIH0gZnJvbSAnLi9wYXRoJztcbmNvbnN0IHJlYWRlciA9IG5ldyBHcmFwaGljc1N0cmluZ1JlYWRlcigpO1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5U3RyaW5nKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpIHtcbiAgICBpZiAoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICByZWFkZXIuc2V0UGF0aChkYXRhKTtcbiAgICB3aGlsZSAocmVhZGVyLnJlYWROZXh0KCkpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHJlYWRlci5nZXRDb21tYW5kKCk7XG4gICAgICAgIGlmIChjb21tYW5kKSB7XG4gICAgICAgICAgICBhcHBseUNvbW1hbmQoY29tbWFuZCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhhc0ZpbGwpIHtcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBDYW52YXNQYXR0ZXJucyB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5jb25zdCBlbXB0eUFycmF5ID0gW107XG5jb25zdCBlbXB0eU1hdHJpeCA9IE1hdHJpeC5lbXB0eSgpO1xuZnVuY3Rpb24gZ2V0Q2FudmFzUGF0dGVybihmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgaWYgKHR5cGVvZiBmaWxsID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGZpbGwsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBmaWxsID09PSAnb2JqZWN0Jykge1xuICAgICAgICBzd2l0Y2ggKGZpbGwudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc29saWQnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHNvbGlkID0gZmlsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKHNvbGlkLmNvbG9yID8/IDAsIHNvbGlkLmFscGhhID8/IDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGNhc2UgJ2xpbmVhcic6XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZWFyID0gZmlsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMubGluZWFyR3JhZGllbnRQYXR0ZXJuKGxpbmVhci5iZWdpblggPz8gMCwgbGluZWFyLmJlZ2luWSA/PyAwLCBsaW5lYXIuZW5kWCA/PyAwLCBsaW5lYXIuZW5kWSA/PyAwLCBsaW5lYXIuY29sb3JzID8/IGVtcHR5QXJyYXksIGxpbmVhci5hbHBoYXMgPz8gZW1wdHlBcnJheSwgbGluZWFyLnJhdGlvcyA/PyBlbXB0eUFycmF5LCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCk7XG4gICAgICAgICAgICBjYXNlICdyYWRpYWwnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZGlhbCA9IGZpbGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbnZhc1BhdHRlcm5zLnJhZGlhbEdyYWRpZW50UGF0dGVybihyYWRpYWwuYmVnaW5YID8/IDAsIHJhZGlhbC5iZWdpblkgPz8gMCwgcmFkaWFsLmJlZ2luUmFkaXVzID8/IDAsIHJhZGlhbC5lbmRYID8/IHJhZGlhbC5iZWdpblggPz8gMCwgcmFkaWFsLmVuZFkgPz8gcmFkaWFsLmJlZ2luWSA/PyAwLCByYWRpYWwuZW5kUmFkaXVzID8/IDAsIHJhZGlhbC5jb2xvcnMgPz8gZW1wdHlBcnJheSwgcmFkaWFsLmFscGhhcyA/PyBlbXB0eUFycmF5LCByYWRpYWwucmF0aW9zID8/IGVtcHR5QXJyYXksIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGNhc2UgJ2JpdG1hcCc6XG4gICAgICAgICAgICAgICAgY29uc3QgYml0bWFwRmlsbCA9IGZpbGw7XG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXBlYXQgPSB0cnVlLCBzcmMsIG1hdHJpeCA9IGVtcHR5TWF0cml4IH0gPSBiaXRtYXBGaWxsO1xuICAgICAgICAgICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0dGVybiA9IENhbnZhc1BhdHRlcm5zLmJpdG1hcFBhdHRlcm4ocmVzb3VyY2UuaW1hZ2UsIHJlcGVhdCwgbWF0cml4LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWxsU3R5bGUoZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZ2V0Q2FudmFzUGF0dGVybihmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHJva2VTdHlsZShzdHJva2UsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpIHtcbiAgICBpZiAodHlwZW9mIHN0cm9rZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihzdHJva2UsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjb250ZXh0LmxpbmVDYXAgPSAncm91bmQnO1xuICAgICAgICBjb250ZXh0LmxpbmVKb2luID0gJ3JvdW5kJztcbiAgICAgICAgY29udGV4dC5taXRlckxpbWl0ID0gMTA7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBzdHJva2UgPT09ICdvYmplY3QnICYmIHN0cm9rZS5maWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGdldENhbnZhc1BhdHRlcm4oc3Ryb2tlLmZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHN0cm9rZS50aGlja25lc3MgPz8gMTtcbiAgICAgICAgY29udGV4dC5saW5lQ2FwID0gc3Ryb2tlLmNhcHMgPz8gJ3JvdW5kJztcbiAgICAgICAgY29udGV4dC5saW5lSm9pbiA9IHN0cm9rZS5qb2ludHMgPz8gJ3JvdW5kJztcbiAgICAgICAgY29udGV4dC5taXRlckxpbWl0ID0gc3Ryb2tlLm1pdGVyTGltaXQgPz8gMTA7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQm91bmRzIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBQYXRoQ29tbWFuZCB9IGZyb20gJy4vcGF0aCc7XG5pbXBvcnQgeyBHcmFwaGljc1N0cmluZyB9IGZyb20gJy4vc3RyaW5nJztcbmV4cG9ydCB2YXIgUmVjdGFuZ2xlRGF0YTtcbihmdW5jdGlvbiAoUmVjdGFuZ2xlRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHdpZHRoID0gMCwgaGVpZ2h0ID0gMCwgfSA9IGRhdGE7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCwgeSk7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShSZWN0YW5nbGVEYXRhIHx8IChSZWN0YW5nbGVEYXRhID0ge30pKTtcbmV4cG9ydCB2YXIgRWxsaXBzZURhdGE7XG4oZnVuY3Rpb24gKEVsbGlwc2VEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgcmFkaXVzID0gMCwgcmFkaXVzWCwgcmFkaXVzWSwgfSA9IGRhdGE7XG4gICAgICAgIGNvbnN0IHJ4ID0gcmFkaXVzWCA/PyByYWRpdXM7XG4gICAgICAgIGNvbnN0IHJ5ID0gcmFkaXVzWSA/PyByYWRpdXM7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCAtIHJ4LCB5IC0gcnkpO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHggKyByeCwgeSArIHJ5KTtcbiAgICB9XG4gICAgRWxsaXBzZURhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoRWxsaXBzZURhdGEgfHwgKEVsbGlwc2VEYXRhID0ge30pKTtcbmV4cG9ydCB2YXIgUGF0aERhdGE7XG4oZnVuY3Rpb24gKFBhdGhEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKHBhdGhEYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBwYXRoRGF0YTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgR3JhcGhpY3NTdHJpbmcuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IGRhdGFbaV07XG4gICAgICAgICAgICAgICAgUGF0aENvbW1hbmQuY2FsY3VsYXRlQm91bmRzKGNvbW1hbmQsIGJvdW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgUGF0aERhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoUGF0aERhdGEgfHwgKFBhdGhEYXRhID0ge30pKTtcbmV4cG9ydCB2YXIgR3JhcGhpY3NEYXRhO1xuKGZ1bmN0aW9uIChHcmFwaGljc0RhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gZGF0YTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdyZWN0YW5nbGUnOlxuICAgICAgICAgICAgICAgIFJlY3RhbmdsZURhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbGxpcHNlJzpcbiAgICAgICAgICAgICAgICBFbGxpcHNlRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3BhdGgnOlxuICAgICAgICAgICAgICAgIFBhdGhEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBHcmFwaGljc0RhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoR3JhcGhpY3NEYXRhIHx8IChHcmFwaGljc0RhdGEgPSB7fSkpO1xuIiwiaW1wb3J0IHsgQm91bmRzIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5leHBvcnQgdmFyIFBhdGhDb21tYW5kO1xuKGZ1bmN0aW9uIChQYXRoQ29tbWFuZCkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBwYXRoO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ21vdmVUbyc6XG4gICAgICAgICAgICBjYXNlICdsaW5lVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBtb3ZlVG8ueCA/PyAwLCBtb3ZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1cnZlVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3VydmVUby5jeCA/PyAwLCBjdXJ2ZVRvLmN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3VydmVUby54ID8/IDAsIGN1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1YmljQ3VydmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby5jeCA/PyAwLCBjdWJpY0N1cnZlVG8uY3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8uc3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLnN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLnggPz8gMCwgY3ViaWNDdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFBhdGhDb21tYW5kIHx8IChQYXRoQ29tbWFuZCA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQYXRoQ29tbWFuZCwgfSBmcm9tICcuL3BhdGgnO1xuY29uc3QgTlVNQkVSU19DT1VOVCA9IHtcbiAgICBNOiAyLFxuICAgIG06IDIsXG4gICAgTDogMixcbiAgICBsOiAyLFxuICAgIEg6IDEsXG4gICAgaDogMSxcbiAgICBWOiAxLFxuICAgIHY6IDEsXG4gICAgQzogNixcbiAgICBjOiA2LFxuICAgIFM6IDQsXG4gICAgczogNCxcbiAgICBROiA0LFxuICAgIHE6IDQsXG4gICAgVDogMixcbiAgICB0OiAyLFxufTtcbmNvbnN0IENPTU1BTkRfUkVHRVggPSAvW01tTGxIaFZ2Q2NTc1FxVHRdLztcbmNvbnN0IE5VTUJFUl9SRUdFWCA9IC9bLStdP1tcXGQuXSsvO1xuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU3RyaW5nU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gJyc7XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IG51bGw7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICB0aGlzLnN5bWJvbFJlZ2V4ID0gL1tNbUxsSGhWdkNjU3NRcVR0XXxbLStdP1tcXGQuXSsvZztcbiAgICB9XG4gICAgc2V0UGF0aChwYXRoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMuc3ltYm9sUmVnZXgubGFzdEluZGV4ID0gMDtcbiAgICB9XG4gICAgZ2V0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZDtcbiAgICB9XG4gICAgZ2V0QnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWZmZXI7XG4gICAgfVxuICAgIHJlYWROZXh0KCkge1xuICAgICAgICBjb25zdCB7IGxhc3RJbmRleCB9ID0gdGhpcy5zeW1ib2xSZWdleDtcbiAgICAgICAgY29uc3Qgc3ltYm9sTWF0Y2ggPSB0aGlzLnN5bWJvbFJlZ2V4LmV4ZWModGhpcy5wYXRoKTtcbiAgICAgICAgaWYgKCFzeW1ib2xNYXRjaCkge1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xNYXRjaFswXTtcbiAgICAgICAgaWYgKENPTU1BTkRfUkVHRVgudGVzdChzeW1ib2wpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBzeW1ib2w7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoTlVNQkVSX1JFR0VYLnRlc3Qoc3ltYm9sKSkge1xuICAgICAgICAgICAgdGhpcy5zeW1ib2xSZWdleC5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jb21tYW5kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY291bnQgPSBOVU1CRVJTX0NPVU5UW3RoaXMuY29tbWFuZF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyTWF0Y2ggPSB0aGlzLnN5bWJvbFJlZ2V4LmV4ZWModGhpcy5wYXRoKTtcbiAgICAgICAgICAgIGlmIChudW1iZXJNYXRjaCAmJiBOVU1CRVJfUkVHRVgudGVzdChudW1iZXJNYXRjaFswXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlcltpXSA9IHBhcnNlRmxvYXQobnVtYmVyTWF0Y2hbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR3JhcGhpY3NTdHJpbmdSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0cmVhbSA9IG5ldyBHcmFwaGljc1N0cmluZ1N0cmVhbSgpO1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSB7IHR5cGU6ICdtb3ZlVG8nIH07XG4gICAgICAgIHRoaXMuY29tbWFuZEV4aXN0cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0WSA9IDA7XG4gICAgICAgIHRoaXMubGFzdENYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0Q1kgPSAwO1xuICAgIH1cbiAgICBzZXRQYXRoKHBhdGgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0uc2V0UGF0aChwYXRoKTtcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgICAgIHRoaXMubGFzdFkgPSAwO1xuICAgICAgICB0aGlzLmxhc3RDWCA9IDA7XG4gICAgICAgIHRoaXMubGFzdENZID0gMDtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gZmFsc2U7XG4gICAgfVxuICAgIGdldENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRFeGlzdHMgPyB0aGlzLmNvbW1hbmQgOiBudWxsO1xuICAgIH1cbiAgICByZWFkTmV4dCgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0ucmVhZE5leHQoKTtcbiAgICAgICAgdGhpcy5wYXJzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kRXhpc3RzO1xuICAgIH1cbiAgICBwYXJzZSgpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMuc3RyZWFtLmdldENvbW1hbmQoKTtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gISFjb21tYW5kO1xuICAgICAgICBpZiAoIXRoaXMuY29tbWFuZEV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuc3RyZWFtLmdldEJ1ZmZlcigpO1xuICAgICAgICBjb25zdCBbZTAsIGUxLCBlMiwgZTMsIGU0LCBlNSxdID0gYnVmZmVyO1xuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbW92ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ21vdmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gZTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IGU0O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGU1O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTQgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGU1ICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IHRoaXMubGFzdENZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGUzICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gdGhpcy5sYXN0Q1k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IHJlYWRlciA9IG5ldyBHcmFwaGljc1N0cmluZ1JlYWRlcigpO1xuZXhwb3J0IHZhciBHcmFwaGljc1N0cmluZztcbihmdW5jdGlvbiAoR3JhcGhpY3NTdHJpbmcpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aCwgYm91bmRzKSB7XG4gICAgICAgIHJlYWRlci5zZXRQYXRoKHBhdGgpO1xuICAgICAgICB3aGlsZSAocmVhZGVyLnJlYWROZXh0KCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSByZWFkZXIuZ2V0Q29tbWFuZCgpO1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc1N0cmluZyB8fCAoR3JhcGhpY3NTdHJpbmcgPSB7fSkpO1xuIiwiaW1wb3J0IHsgTWF0cml4LCBQb2ludCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuY29uc3QgdGVtcFBvaW50MCA9IFBvaW50LmVtcHR5KCk7XG5jb25zdCB0ZW1wUG9pbnQxID0gUG9pbnQuZW1wdHkoKTtcbmNvbnN0IGVtcHR5TWF0cml4ID0gTWF0cml4LmVtcHR5KCk7XG5leHBvcnQgY2xhc3MgR3JhcGhpY3Mge1xuICAgIGNvbnN0cnVjdG9yKHNoYXBlKSB7XG4gICAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZTtcbiAgICB9XG4gICAgYmVnaW5GaWxsKGNvbG9yID0gMCwgYWxwaGEgPSAxKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYmVnaW5CaXRtYXBGaWxsKHNyYywgbWF0cml4LCByZXBlYXQgPSB0cnVlLCBzbW9vdGggPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAnYml0bWFwJyxcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHJlcGVhdCxcbiAgICAgICAgICAgIHNtb290aCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGJlZ2luR3JhZGllbnRGaWxsKHR5cGUsIGNvbG9yLCBhbHBoYSwgcmF0aW8sIG1hdHJpeCkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmVhcicpIHtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueCA9IC04MTkuMjtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueSA9IDA7XG4gICAgICAgICAgICB0ZW1wUG9pbnQxLnggPSA4MTkuMjtcbiAgICAgICAgICAgIHRlbXBQb2ludDEueSA9IDA7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCB0ZW1wUG9pbnQwLCB0ZW1wUG9pbnQwKTtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHRlbXBQb2ludDEsIHRlbXBQb2ludDEpO1xuICAgICAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICAgICAgYmVnaW5YOiB0ZW1wUG9pbnQwLngsXG4gICAgICAgICAgICAgICAgYmVnaW5ZOiB0ZW1wUG9pbnQwLnksXG4gICAgICAgICAgICAgICAgZW5kWDogdGVtcFBvaW50MS54LFxuICAgICAgICAgICAgICAgIGVuZFk6IHRlbXBQb2ludDEueSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnggPSAxNjM4LjQ7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnkgPSAwO1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgdGVtcFBvaW50MCwgdGVtcFBvaW50MCk7XG4gICAgICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgICAgICBiZWdpblg6IHRlbXBQb2ludDAueCxcbiAgICAgICAgICAgICAgICBiZWdpblk6IHRlbXBQb2ludDAueSxcbiAgICAgICAgICAgICAgICBiZWdpblJhZGl1czogMCxcbiAgICAgICAgICAgICAgICBlbmRYOiB0ZW1wUG9pbnQwLngsXG4gICAgICAgICAgICAgICAgZW5kWTogdGVtcFBvaW50MC55LFxuICAgICAgICAgICAgICAgIGVuZFJhZGl1czogTWF0aC5hYnMoKHRlbXBQb2ludDAueCAtIG1hdHJpeC50eCkgLyAyKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGxpbmVTdHlsZSh0aGlja25lc3MgPSAwLCBjb2xvciA9IDAsIGFscGhhID0gMSwgcGl4ZWxIaW50aW5nID0gZmFsc2UsIHNjYWxlTW9kZSA9ICdub25lJywgY2FwcyA9ICdyb3VuZCcsIGpvaW50cyA9ICdyb3VuZCcsIG1pdGVyTGltaXQgPSAzKSB7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0ge1xuICAgICAgICAgICAgdGhpY2tuZXNzLFxuICAgICAgICAgICAgcGl4ZWxIaW50aW5nLFxuICAgICAgICAgICAgc2NhbGVNb2RlLFxuICAgICAgICAgICAgY2FwcyxcbiAgICAgICAgICAgIGpvaW50cyxcbiAgICAgICAgICAgIG1pdGVyTGltaXQsXG4gICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBsaW5lR3JhZGllbnRTdHlsZSh0eXBlLCBjb2xvciwgYWxwaGEsIHJhdGlvLCBtYXRyaXggPSBlbXB0eU1hdHJpeCkge1xuICAgICAgICBpZiAoIXRoaXMuc3Ryb2tlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmVhcicpIHtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueCA9IC04MTkuMjtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueSA9IDA7XG4gICAgICAgICAgICB0ZW1wUG9pbnQxLnggPSA4MTkuMjtcbiAgICAgICAgICAgIHRlbXBQb2ludDEueSA9IDA7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCB0ZW1wUG9pbnQwLCB0ZW1wUG9pbnQwKTtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHRlbXBQb2ludDEsIHRlbXBQb2ludDEpO1xuICAgICAgICAgICAgdGhpcy5zdHJva2UuZmlsbCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgICAgICAgIGJlZ2luWDogdGVtcFBvaW50MC54LFxuICAgICAgICAgICAgICAgIGJlZ2luWTogdGVtcFBvaW50MC55LFxuICAgICAgICAgICAgICAgIGVuZFg6IHRlbXBQb2ludDEueCxcbiAgICAgICAgICAgICAgICBlbmRZOiB0ZW1wUG9pbnQxLnksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGVtcFBvaW50MC54ID0gMTYzOC40O1xuICAgICAgICAgICAgdGVtcFBvaW50MC55ID0gMDtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHRlbXBQb2ludDAsIHRlbXBQb2ludDApO1xuICAgICAgICAgICAgdGhpcy5zdHJva2UuZmlsbCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgICAgICAgIGJlZ2luWDogdGVtcFBvaW50MC54LFxuICAgICAgICAgICAgICAgIGJlZ2luWTogdGVtcFBvaW50MC55LFxuICAgICAgICAgICAgICAgIGJlZ2luUmFkaXVzOiAwLFxuICAgICAgICAgICAgICAgIGVuZFg6IHRlbXBQb2ludDAueCxcbiAgICAgICAgICAgICAgICBlbmRZOiB0ZW1wUG9pbnQwLnksXG4gICAgICAgICAgICAgICAgZW5kUmFkaXVzOiBNYXRoLmFicygodGVtcFBvaW50MC54IC0gbWF0cml4LnR4KSAvIDIpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbGluZUJpdG1hcFN0eWxlKHNyYywgbWF0cml4LCByZXBlYXQgPSB0cnVlLCBzbW9vdGggPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXRoaXMuc3Ryb2tlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0cm9rZS5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ2JpdG1hcCcsXG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICBzbW9vdGgsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBtb3ZlVG8oeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5iZWdpblBhdGgoKTtcbiAgICAgICAgcGF0aC5wdXNoKHsgdHlwZTogJ21vdmVUbycsIHgsIHkgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBsaW5lVG8oeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHsgdHlwZTogJ2xpbmVUbycsIHgsIHkgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjdXJ2ZVRvKGN4LCBjeSwgeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdXJ2ZVRvJywgY3gsIGN5LCB4LCB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGN1YmljQ3VydmVUbyhjeCwgY3ksIHN4LCBzeSwgeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLCBjeCwgY3ksIHN4LCBzeSwgeCwgeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkcmF3Um91bmRSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIGVsbGlwc2VXaWR0aCA9IDAsIGVsbGlwc2VIZWlnaHQgPSAwKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICBjb25zdCB3ID0gZWxsaXBzZVdpZHRoO1xuICAgICAgICBjb25zdCBoID0gZWxsaXBzZUhlaWdodDtcbiAgICAgICAgY29uc3QgayA9IDAuNTUyMjg0ODtcbiAgICAgICAgY29uc3Qgb3ggPSAodyAvIDIpICogaztcbiAgICAgICAgY29uc3Qgb3kgPSAoaCAvIDIpICogaztcbiAgICAgICAgY29uc3QgeGUgPSB4ICsgdztcbiAgICAgICAgY29uc3QgeWUgPSB5ICsgaDtcbiAgICAgICAgY29uc3QgeG0gPSB4ICsgdyAvIDI7XG4gICAgICAgIGNvbnN0IHltID0geSArIGggLyAyO1xuICAgICAgICBjb25zdCBkeCA9IHdpZHRoIC0gdztcbiAgICAgICAgY29uc3QgZHkgPSBoZWlnaHQgLSBoO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ21vdmVUbycsXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeTogeW0sXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeCxcbiAgICAgICAgICAgIGN5OiB5bSAtIG95LFxuICAgICAgICAgICAgc3g6IHhtIC0gb3gsXG4gICAgICAgICAgICBzeTogeSxcbiAgICAgICAgICAgIHg6IHhtLFxuICAgICAgICAgICAgeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhtICsgZHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhtICsgb3ggKyBkeCxcbiAgICAgICAgICAgIGN5OiB5LFxuICAgICAgICAgICAgc3g6IHhlICsgZHgsXG4gICAgICAgICAgICBzeTogeW0gLSBveSxcbiAgICAgICAgICAgIHg6IHhlICsgZHgsXG4gICAgICAgICAgICB5OiB5bSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhlICsgZHgsXG4gICAgICAgICAgICB5OiB5bSArIGR5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhlICsgZHgsXG4gICAgICAgICAgICBjeTogeW0gKyBveSArIGR5LFxuICAgICAgICAgICAgc3g6IHhtICsgb3ggKyBkeCxcbiAgICAgICAgICAgIHN5OiB5ZSArIGR5LFxuICAgICAgICAgICAgeDogeG0gKyBkeCxcbiAgICAgICAgICAgIHk6IHllICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVUbycsXG4gICAgICAgICAgICB4OiB4bSxcbiAgICAgICAgICAgIHk6IHllICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeG0gLSBveCxcbiAgICAgICAgICAgIGN5OiB5ZSArIGR5LFxuICAgICAgICAgICAgc3g6IHgsXG4gICAgICAgICAgICBzeTogeW0gKyBveSArIGR5LFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHk6IHltICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZHJhd1JlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEudHlwZSA9ICdyZWN0YW5nbGUnO1xuICAgICAgICBkYXRhLnggPSB4O1xuICAgICAgICBkYXRhLnkgPSB5O1xuICAgICAgICBkYXRhLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGRhdGEuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZHJhd0NpcmNsZSh4LCB5LCByYWRpdXMpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAnZWxsaXBzZSc7XG4gICAgICAgIGRhdGEueCA9IHg7XG4gICAgICAgIGRhdGEueSA9IHk7XG4gICAgICAgIGRhdGEucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZHJhd0VsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEudHlwZSA9ICdlbGxpcHNlJztcbiAgICAgICAgZGF0YS5yYWRpdXNYID0gd2lkdGggLyAyO1xuICAgICAgICBkYXRhLnJhZGl1c1kgPSBoZWlnaHQgLyAyO1xuICAgICAgICBkYXRhLnggPSB4IC0gZGF0YS5yYWRpdXNYO1xuICAgICAgICBkYXRhLnkgPSB5IC0gZGF0YS5yYWRpdXNZO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNoYXBlLmRhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjcmVhdGVEYXRhKCkge1xuICAgICAgICBjb25zdCB7IHNoYXBlLCBmaWxsLCBzdHJva2UgfSA9IHRoaXM7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNoYXBlLmRhdGEpKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHNoYXBlLmRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBzaGFwZS5kYXRhID0gW3NoYXBlLmRhdGFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hhcGUuZGF0YSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyYXBoaWNzRGF0YSA9IHsgdHlwZTogJ3BhdGgnLCBmaWxsLCBzdHJva2UgfTtcbiAgICAgICAgc2hhcGUuZGF0YS5wdXNoKGdyYXBoaWNzRGF0YSk7XG4gICAgICAgIHJldHVybiBncmFwaGljc0RhdGE7XG4gICAgfVxuICAgIGJlZ2luUGF0aCgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLmRhdGEgPSBbXTtcbiAgICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcbiAgICB9XG4gICAgZ2V0UGF0aCgpIHtcbiAgICAgICAgY29uc3QgeyBzaGFwZSB9ID0gdGhpcztcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNoYXBlLmRhdGEpIHx8ICFzaGFwZS5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gc2hhcGUuZGF0YVtzaGFwZS5kYXRhLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5kYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YS5kYXRhO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vZGF0YS9kYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9wYXRoJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9zdHJpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL3N0eWxlJztcbmV4cG9ydCAqIGZyb20gJy4vc2hhcGUnO1xuZXhwb3J0ICogZnJvbSAnLi9ncmFwaGljcyc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy9zaGFwZSc7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQm91bmRzLCBSZWN0YW5nbGUgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgR3JhcGhpY3NEYXRhIH0gZnJvbSAnLi9kYXRhL2RhdGEnO1xuZXhwb3J0IGNvbnN0IFNIQVBFID0gJ3NoYXBlJztcbmNvbnN0IGJvdW5kcyA9IEJvdW5kcy5lbXB0eSgpO1xuZXhwb3J0IHZhciBTaGFwZTtcbihmdW5jdGlvbiAoU2hhcGUpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoc2hhcGUsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHNoYXBlO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEJvdW5kcy5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhW2ldLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJvdW5kcy5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdpZHRoID0gYm91bmRzLm1heFggLSBib3VuZHMubWluWDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gYm91bmRzLm1heFkgLSBib3VuZHMubWluWTtcbiAgICAgICAgY29uc3QgeCA9IGJvdW5kcy5taW5YICsgUGl2b3QuZ2V0WChzaGFwZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gYm91bmRzLm1pblkgKyBQaXZvdC5nZXRZKHNoYXBlLCBoZWlnaHQpO1xuICAgICAgICByZXN1bHQueCA9IHg7XG4gICAgICAgIHJlc3VsdC55ID0geTtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIFNoYXBlLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFNoYXBlIHx8IChTaGFwZSA9IHt9KSk7XG5jb25zdCByZWN0YW5nbGUgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgU2hhcGVFeHRlbnNpb247XG4oZnVuY3Rpb24gKFNoYXBlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdChzaGFwZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgbG9jYWwgfSA9IGVuZ2luZS5wb2ludGVycztcbiAgICAgICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzKHNoYXBlLCByZWN0YW5nbGUpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKHJlY3RhbmdsZSwgbG9jYWwpO1xuICAgIH1cbiAgICBTaGFwZUV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChTSEFQRSwgaGl0VGVzdCk7XG4gICAgICAgIEltYWdlUmVzb3VyY2UuaW5pdChlbmdpbmUpO1xuICAgIH1cbiAgICBTaGFwZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFNoYXBlRXh0ZW5zaW9uIHx8IChTaGFwZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQ2FudmFzUGF0dGVybnMgfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IEZvbnQgfSBmcm9tICcuLi9kYXRhL2ZvbnQnO1xuaW1wb3J0IHsgVGV4dEV4dGVuc2lvbiwgVEVYVCwgVGV4dCB9IGZyb20gJy4uL3RleHQnO1xuaW1wb3J0IHsgVGV4dEZvcm1hdCB9IGZyb20gJy4uL2RhdGEvZm9ybWF0JztcbmltcG9ydCB7IFRleHRNZXRyaWNzIH0gZnJvbSAnLi4vZGF0YS9tZXRyaWNzJztcbmNvbnN0IGRlZmF1bHRUZXh0Rm9ybWF0ID0ge307XG5jb25zdCBDT1JSRUNUSU9OID0gMC44NTtcbmV4cG9ydCB2YXIgQ2FudmFzVGV4dEV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzVGV4dEV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihjb21wb25lbnQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IG1hdHJpeCwgY29sb3JUcmFuc2Zvcm0gfSA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChUZXh0LmlzVXBkYXRlTWV0cmljcyhjb21wb25lbnQpKSB7XG4gICAgICAgICAgICBUZXh0LnVwZGF0ZU1ldHJpY3MoY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG1ldHJpY3MgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCFtZXRyaWNzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBmb3JtYXQsIGJvcmRlciwgYmFja2dyb3VuZCwgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgVGV4dEZvcm1hdC5jb21iaW5lKGZvcm1hdCwgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCwgZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBjb25zdCByZWFsV2lkdGggPSB3aWR0aCA/PyBtZXRyaWNzLndpZHRoO1xuICAgICAgICBjb25zdCByZWFsSGVpZ2h0ID0gaGVpZ2h0ID8/IG1ldHJpY3MuaGVpZ2h0O1xuICAgICAgICBjb25zdCBvZmZzZXRYID0gUGl2b3QuZ2V0WChjb21wb25lbnQsIHJlYWxXaWR0aCk7XG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSBQaXZvdC5nZXRZKGNvbXBvbmVudCwgcmVhbEhlaWdodCk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IGVuZ2luZS5wbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgaWYgKGJhY2tncm91bmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gJyc7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGJhY2tncm91bmQsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5yZWN0KG9mZnNldFgsIG9mZnNldFksIHJlYWxXaWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGJvcmRlciwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuICAgICAgICAgICAgY29udGV4dDJkLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLnJlY3Qob2Zmc2V0WCwgb2Zmc2V0WSwgcmVhbFdpZHRoLCByZWFsSGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0MmQudGV4dEJhc2VsaW5lID0gJ2FscGhhYmV0aWMnO1xuICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnJztcbiAgICAgICAgY29uc3Qgc2ltcGxlID0gVGV4dC5pc1NpbXBsZShjb21wb25lbnQpO1xuICAgICAgICBpZiAoc2ltcGxlKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gY29tcG9uZW50LnRleHQ7XG4gICAgICAgICAgICBjb25zdCB7IHNpemUsIGNvbG9yLCBhbHBoYSwgbGVhZGluZywgbGV0dGVyU3BhY2luZywgfSA9IGRlZmF1bHRUZXh0Rm9ybWF0O1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdEZvbnQgPSBGb250LmdldEZvbnQoZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sU2l6ZSA9IHNpemUgKiBDT1JSRUNUSU9OO1xuICAgICAgICAgICAgY29uc3QgYWxpZ25WYWx1ZSA9IFRleHRGb3JtYXQuZ2V0QWxpZ25WYWx1ZShkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZm9udCA9IEZvbnQuZ2V0U3R5bGUoZGVmYXVsdEZvbnQsIHNpemUpO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihjb2xvciwgYWxwaGEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGxldCB4ID0gb2Zmc2V0WCArIGFsaWduVmFsdWUgPyBhbGlnblZhbHVlICogKHJlYWxXaWR0aCAtIFRleHRNZXRyaWNzLmdldFNpbXBsZVdpZHRoKGRlZmF1bHRUZXh0Rm9ybWF0LCB0ZXh0LCAwKSkgOiAwO1xuICAgICAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICBpZiAoc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICB4ID0gYWxpZ25WYWx1ZSA/IGFsaWduVmFsdWUgKiAocmVhbFdpZHRoIC0gVGV4dE1ldHJpY3MuZ2V0U2ltcGxlV2lkdGgoZGVmYXVsdFRleHRGb3JtYXQsIHRleHQsIGkgKyAxKSkgOiAwO1xuICAgICAgICAgICAgICAgICAgICB5ICs9IHNpemUgKyBsZWFkaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IHRleHRbaSArIDFdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKGRlZmF1bHRGb250LCBzaXplLCBzeW1ib2wsIHN5bWJvbE5leHQpICsgbGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDJkLmZpbGxUZXh0KHN5bWJvbCwgeCwgeSArIHN5bWJvbFNpemUpO1xuICAgICAgICAgICAgICAgICAgICB4ICs9IGFkdmFuY2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsaWduVmVydGljYWxWYWx1ZSA9IFRleHRGb3JtYXQuZ2V0VmVydGljYWxBbGlnblZhbHVlKGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgICAgICAgICB5ID0gKGhlaWdodCAtIG1ldHJpY3MuaGVpZ2h0KSAqIGFsaWduVmVydGljYWxWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoeSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeSArPSBvZmZzZXRZO1xuICAgICAgICAgICAgY29uc3QgeyBsaW5lcyB9ID0gbWV0cmljcztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGxpbmUuc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3QgPSBsaW5lLnN5bWJvbHNbMF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsaWduVmFsdWUgPSBUZXh0Rm9ybWF0LmdldEFsaWduVmFsdWUoZmlyc3QuZm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSAocmVhbFdpZHRoIC0gbGluZS53aWR0aCkgKiBhbGlnblZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHggKz0gb2Zmc2V0WDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzeW1ib2xzIH0gPSBsaW5lO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lSGVpZ2h0ID0gbGluZS5oZWlnaHQgKiBDT1JSRUNUSU9OO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN5bWJvbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gc3ltYm9sLmZvcm1hdC5zaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxpZ25TeW1ib2xWYWx1ZSA9IFRleHRGb3JtYXQuZ2V0VmVydGljYWxBbGlnblZhbHVlKHN5bWJvbC5mb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sU2l6ZSA9IHNpemUgKiBDT1JSRUNUSU9OO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9udCA9IEZvbnQuZ2V0Rm9udChzeW1ib2wuZm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5mb250ID0gRm9udC5nZXRTdHlsZShzeW1ib2xGb250LCBzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oc3ltYm9sLmZvcm1hdC5jb2xvciwgc3ltYm9sLmZvcm1hdC5hbHBoYSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDJkLmZpbGxUZXh0KHN5bWJvbC5zeW1ib2wsIHgsIHkgKyBzeW1ib2xTaXplICsgYWxpZ25TeW1ib2xWYWx1ZSAqIChsaW5lSGVpZ2h0IC0gc3ltYm9sU2l6ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgeCArPSBzeW1ib2wuYWR2YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB5ICs9IGxpbmUuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc1RleHRFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIFRleHRFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KFRFWFQsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc1RleHRFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNUZXh0RXh0ZW5zaW9uIHx8IChDYW52YXNUZXh0RXh0ZW5zaW9uID0ge30pKTtcbiIsImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuZXhwb3J0IGNvbnN0IEVNID0gMTAyNDtcbmNvbnN0IGZvbnRzID0gbmV3IE1hcCgpO1xuZXhwb3J0IHZhciBGb250O1xuKGZ1bmN0aW9uIChGb250KSB7XG4gICAgZnVuY3Rpb24gZ2V0U3R5bGUoZm9udCwgc2l6ZSkge1xuICAgICAgICByZXR1cm4gZm9udC5uYW1lLnJlcGxhY2UoJyUnLCBzaXplLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBGb250LmdldFN0eWxlID0gZ2V0U3R5bGU7XG4gICAgZnVuY3Rpb24gbWVhc3VyZVRleHQoZm9udCwgc2l6ZSwgdGV4dCkge1xuICAgICAgICBjb250ZXh0LmZvbnQgPSBnZXRTdHlsZShmb250LCBzaXplKTtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gICAgfVxuICAgIEZvbnQubWVhc3VyZVRleHQgPSBtZWFzdXJlVGV4dDtcbiAgICBmdW5jdGlvbiBnZXRDaGFyV2lkdGgoZm9udCwgY2hhcikge1xuICAgICAgICBsZXQgd2lkdGggPSBmb250LndpZHRocy5nZXQoY2hhcik7XG4gICAgICAgIGlmICghd2lkdGgpIHtcbiAgICAgICAgICAgIHdpZHRoID0gbWVhc3VyZVRleHQoZm9udCwgRU0sIGNoYXIpO1xuICAgICAgICAgICAgZm9udC53aWR0aHMuc2V0KGNoYXIsIHdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfVxuICAgIEZvbnQuZ2V0Q2hhcldpZHRoID0gZ2V0Q2hhcldpZHRoO1xuICAgIGZ1bmN0aW9uIGdldEtlcm5pbmcoZm9udCwgZmlyc3QsIHNlY29uZCkge1xuICAgICAgICBjb25zdCBwYWlyID0gZmlyc3QgKyBzZWNvbmQ7XG4gICAgICAgIGxldCBrZXJuaW5nID0gZm9udC5rZXJuaW5ncy5nZXQocGFpcik7XG4gICAgICAgIGlmICgha2VybmluZykge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGhTZWNvbmQgPSBnZXRDaGFyV2lkdGgoZm9udCwgc2Vjb25kKTtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoVG90YWwgPSBtZWFzdXJlVGV4dChmb250LCBFTSwgZmlyc3QgKyBzZWNvbmQpO1xuICAgICAgICAgICAga2VybmluZyA9IHdpZHRoVG90YWwgLSB3aWR0aFNlY29uZDtcbiAgICAgICAgICAgIGZvbnQua2VybmluZ3Muc2V0KHBhaXIsIGtlcm5pbmcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXJuaW5nO1xuICAgIH1cbiAgICBGb250LmdldEtlcm5pbmcgPSBnZXRLZXJuaW5nO1xuICAgIGZ1bmN0aW9uIGdldEFkdmFuY2UoZm9udCwgc2l6ZSwgZmlyc3QsIHNlY29uZCkge1xuICAgICAgICBjb25zdCBzY2FsZSA9IHNpemUgLyBFTTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBnZXRDaGFyV2lkdGgoZm9udCwgZmlyc3QpO1xuICAgICAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpZHRoICogc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2VybmluZyA9IGdldEtlcm5pbmcoZm9udCwgZmlyc3QsIHNlY29uZCk7XG4gICAgICAgIHJldHVybiBrZXJuaW5nICogc2NhbGU7XG4gICAgfVxuICAgIEZvbnQuZ2V0QWR2YW5jZSA9IGdldEFkdmFuY2U7XG4gICAgZnVuY3Rpb24gZ2V0Rm9udChmb3JtYXQpIHtcbiAgICAgICAgbGV0IG5hbWUgPSAnJztcbiAgICAgICAgaWYgKGZvcm1hdC5ib2xkKSB7XG4gICAgICAgICAgICBuYW1lICs9ICdib2xkICc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdC5pdGFsaWMpIHtcbiAgICAgICAgICAgIG5hbWUgKz0gJ2l0YWxpYyAnO1xuICAgICAgICB9XG4gICAgICAgIG5hbWUgKz0gYCVweCAke2Zvcm1hdC5mb250fWA7XG4gICAgICAgIGxldCBmb250ID0gZm9udHMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoIWZvbnQpIHtcbiAgICAgICAgICAgIGZvbnQgPSB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB3aWR0aHM6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgICAgICBrZXJuaW5nczogbmV3IE1hcCgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvbnRzLnNldChuYW1lLCBmb250KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9udDtcbiAgICB9XG4gICAgRm9udC5nZXRGb250ID0gZ2V0Rm9udDtcbn0pKEZvbnQgfHwgKEZvbnQgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBUZXh0Rm9ybWF0O1xuKGZ1bmN0aW9uIChUZXh0Rm9ybWF0KSB7XG4gICAgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCA9IHtcbiAgICAgICAgZm9udDogJ2FyaWFsJyxcbiAgICAgICAgc2l6ZTogMTUsXG4gICAgICAgIGNvbG9yOiAwLFxuICAgICAgICBhbHBoYTogMSxcbiAgICAgICAgYm9sZDogZmFsc2UsXG4gICAgICAgIGl0YWxpYzogZmFsc2UsXG4gICAgICAgIHVuZGVybGluZTogZmFsc2UsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgICAgIGxlYWRpbmc6IDAsXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgIH07XG4gICAgZnVuY3Rpb24gY29tYmluZShzb3VyY2UsIGRlZmF1bHRGb3JtYXQsIHJlc3VsdCkge1xuICAgICAgICByZXN1bHQuZm9udCA9IHNvdXJjZT8uZm9udCA/PyBkZWZhdWx0Rm9ybWF0LmZvbnQ7XG4gICAgICAgIHJlc3VsdC5zaXplID0gc291cmNlPy5zaXplID8/IGRlZmF1bHRGb3JtYXQuc2l6ZTtcbiAgICAgICAgcmVzdWx0LmNvbG9yID0gc291cmNlPy5jb2xvciA/PyBkZWZhdWx0Rm9ybWF0LmNvbG9yO1xuICAgICAgICByZXN1bHQuYWxwaGEgPSBzb3VyY2U/LmFscGhhID8/IGRlZmF1bHRGb3JtYXQuYWxwaGE7XG4gICAgICAgIHJlc3VsdC5ib2xkID0gc291cmNlPy5ib2xkID8/IGRlZmF1bHRGb3JtYXQuYm9sZDtcbiAgICAgICAgcmVzdWx0Lml0YWxpYyA9IHNvdXJjZT8uaXRhbGljID8/IGRlZmF1bHRGb3JtYXQuaXRhbGljO1xuICAgICAgICByZXN1bHQudW5kZXJsaW5lID0gc291cmNlPy51bmRlcmxpbmUgPz8gZGVmYXVsdEZvcm1hdC51bmRlcmxpbmU7XG4gICAgICAgIHJlc3VsdC5sZXR0ZXJTcGFjaW5nID0gc291cmNlPy5sZXR0ZXJTcGFjaW5nID8/IGRlZmF1bHRGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgcmVzdWx0LmxlYWRpbmcgPSBzb3VyY2U/LmxlYWRpbmcgPz8gZGVmYXVsdEZvcm1hdC5sZWFkaW5nO1xuICAgICAgICByZXN1bHQuYWxpZ24gPSBzb3VyY2U/LmFsaWduID8/IGRlZmF1bHRGb3JtYXQuYWxpZ247XG4gICAgICAgIHJlc3VsdC52ZXJ0aWNhbEFsaWduID0gc291cmNlPy52ZXJ0aWNhbEFsaWduID8/IGRlZmF1bHRGb3JtYXQudmVydGljYWxBbGlnbjtcbiAgICB9XG4gICAgVGV4dEZvcm1hdC5jb21iaW5lID0gY29tYmluZTtcbiAgICBmdW5jdGlvbiBjb3B5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5mb250ID0gc291cmNlLmZvbnQ7XG4gICAgICAgIHRhcmdldC5zaXplID0gc291cmNlLnNpemU7XG4gICAgICAgIHRhcmdldC5jb2xvciA9IHNvdXJjZS5jb2xvcjtcbiAgICAgICAgdGFyZ2V0LmFscGhhID0gc291cmNlLmFscGhhO1xuICAgICAgICB0YXJnZXQuYm9sZCA9IHNvdXJjZS5ib2xkO1xuICAgICAgICB0YXJnZXQuaXRhbGljID0gc291cmNlLml0YWxpYztcbiAgICAgICAgdGFyZ2V0LnVuZGVybGluZSA9IHNvdXJjZS51bmRlcmxpbmU7XG4gICAgICAgIHRhcmdldC5sZXR0ZXJTcGFjaW5nID0gc291cmNlLmxldHRlclNwYWNpbmc7XG4gICAgICAgIHRhcmdldC5sZWFkaW5nID0gc291cmNlLmxlYWRpbmc7XG4gICAgICAgIHRhcmdldC5hbGlnbiA9IHNvdXJjZS5hbGlnbjtcbiAgICAgICAgdGFyZ2V0LnZlcnRpY2FsQWxpZ24gPSBzb3VyY2UudmVydGljYWxBbGlnbjtcbiAgICB9XG4gICAgVGV4dEZvcm1hdC5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBnZXRBbGlnblZhbHVlKGZvcm1hdCkge1xuICAgICAgICBzd2l0Y2ggKGZvcm1hdD8uYWxpZ24pIHtcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOiByZXR1cm4gMDtcbiAgICAgICAgICAgIGNhc2UgJ2NlbnRlcic6IHJldHVybiAwLjU7XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6IHJldHVybiAxO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dEZvcm1hdC5nZXRBbGlnblZhbHVlID0gZ2V0QWxpZ25WYWx1ZTtcbiAgICBmdW5jdGlvbiBnZXRWZXJ0aWNhbEFsaWduVmFsdWUoZm9ybWF0KSB7XG4gICAgICAgIHN3aXRjaCAoZm9ybWF0Py52ZXJ0aWNhbEFsaWduKSB7XG4gICAgICAgICAgICBjYXNlICd0b3AnOiByZXR1cm4gMDtcbiAgICAgICAgICAgIGNhc2UgJ21pZGRsZSc6IHJldHVybiAwLjU7XG4gICAgICAgICAgICBjYXNlICdib3R0b20nOiByZXR1cm4gMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRGb3JtYXQuZ2V0VmVydGljYWxBbGlnblZhbHVlID0gZ2V0VmVydGljYWxBbGlnblZhbHVlO1xufSkoVGV4dEZvcm1hdCB8fCAoVGV4dEZvcm1hdCA9IHt9KSk7XG4iLCJpbXBvcnQgeyBGb250IH0gZnJvbSAnLi9mb250JztcbmltcG9ydCB7IFRleHRGb3JtYXQgfSBmcm9tICcuL2Zvcm1hdCc7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vdGV4dCc7XG5jb25zdCBkZWZhdWx0VGV4dEZvcm1hdCA9IHt9O1xuZXhwb3J0IHZhciBUZXh0TGluZTtcbihmdW5jdGlvbiAoVGV4dExpbmUpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzeW1ib2xzOiBbXSxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBUZXh0TGluZS5jcmVhdGUgPSBjcmVhdGU7XG4gICAgZnVuY3Rpb24gZW1wdHkobGluZSkge1xuICAgICAgICBsaW5lLnN5bWJvbHMubGVuZ3RoID0gMDtcbiAgICAgICAgbGluZS53aWR0aCA9IDA7XG4gICAgICAgIGxpbmUuaGVpZ2h0ID0gMDtcbiAgICB9XG4gICAgVGV4dExpbmUuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBhZGQobGluZSwgc3ltYm9sKSB7XG4gICAgICAgIGxpbmUuc3ltYm9scy5wdXNoKHN5bWJvbCk7XG4gICAgICAgIGxpbmUud2lkdGggKz0gc3ltYm9sLmFkdmFuY2U7XG4gICAgICAgIGxpbmUuaGVpZ2h0ID0gTWF0aC5tYXgobGluZS5oZWlnaHQsIHN5bWJvbC5mb3JtYXQuc2l6ZSArIHN5bWJvbC5mb3JtYXQubGVhZGluZyk7XG4gICAgfVxuICAgIFRleHRMaW5lLmFkZCA9IGFkZDtcbiAgICBmdW5jdGlvbiBjb25jYXQodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5zeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGFyZ2V0LnN5bWJvbHMucHVzaCguLi5zb3VyY2Uuc3ltYm9scyk7XG4gICAgICAgICAgICB0YXJnZXQud2lkdGggKz0gc291cmNlLndpZHRoO1xuICAgICAgICAgICAgdGFyZ2V0LmhlaWdodCA9IE1hdGgubWF4KHRhcmdldC5oZWlnaHQsIHNvdXJjZS5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRMaW5lLmNvbmNhdCA9IGNvbmNhdDtcbiAgICBmdW5jdGlvbiBjb3JyZWN0V2lkdGgobGluZSkge1xuICAgICAgICBjb25zdCB7IHN5bWJvbHMgfSA9IGxpbmU7XG4gICAgICAgIGlmIChzeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgbGFzdCA9IHN5bWJvbHNbc3ltYm9scy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmICgvXFxzLy50ZXN0KGxhc3Quc3ltYm9sKSkge1xuICAgICAgICAgICAgICAgIHN5bWJvbHMucG9wKCk7XG4gICAgICAgICAgICAgICAgbGluZS53aWR0aCAtPSBsYXN0LmFkdmFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dExpbmUuY29ycmVjdFdpZHRoID0gY29ycmVjdFdpZHRoO1xuICAgIGZ1bmN0aW9uIGNvcnJlY3RIZWlnaHQobGluZSkge1xuICAgICAgICBjb25zdCB7IHN5bWJvbHMgfSA9IGxpbmU7XG4gICAgICAgIGlmIChzeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1swXTtcbiAgICAgICAgICAgIGxpbmUuaGVpZ2h0IC09IHN5bWJvbC5mb3JtYXQubGVhZGluZztcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0TGluZS5jb3JyZWN0SGVpZ2h0ID0gY29ycmVjdEhlaWdodDtcbn0pKFRleHRMaW5lIHx8IChUZXh0TGluZSA9IHt9KSk7XG5leHBvcnQgdmFyIFRleHRNZXRyaWNzO1xuKGZ1bmN0aW9uIChUZXh0TWV0cmljcykge1xuICAgIGZ1bmN0aW9uIGdldFN5bWJvbHMoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXRleHQgfHwgIXRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIFRleHRGb3JtYXQuY29tYmluZShjb21wb25lbnQuZm9ybWF0LCBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LCBkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGNvbnN0IHN5bWJvbHMgPSBbXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9ybWF0ID0ge307XG4gICAgICAgICAgICBUZXh0Rm9ybWF0LmNvcHkoZGVmYXVsdFRleHRGb3JtYXQsIHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2xGb250ID0gRm9udC5nZXRGb250KHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSB0ZXh0W2kgKyAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKHN5bWJvbEZvbnQsIHN5bWJvbEZvcm1hdC5zaXplLCBzeW1ib2wsIHN5bWJvbE5leHQpICsgc3ltYm9sRm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgc3ltYm9scy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICBhZHZhbmNlLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHN5bWJvbEZvcm1hdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRleHQpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IHRleHRbaV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBibG9jayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9ybWF0ID0ge307XG4gICAgICAgICAgICAgICAgICAgIFRleHRGb3JtYXQuY29weShkZWZhdWx0VGV4dEZvcm1hdCwgc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9udCA9IEZvbnQuZ2V0Rm9udChzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJsb2NrLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBibG9ja1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSBibG9ja1tqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKHN5bWJvbEZvbnQsIHN5bWJvbEZvcm1hdC5zaXplLCBzeW1ib2wsIHN5bWJvbE5leHQpICsgc3ltYm9sRm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZHZhbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogc3ltYm9sRm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvcm1hdCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBUZXh0Rm9ybWF0LmNvbWJpbmUoYmxvY2ssIGRlZmF1bHRUZXh0Rm9ybWF0LCBzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb250ID0gRm9udC5nZXRGb250KHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYmxvY2sudGV4dC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gYmxvY2sudGV4dFtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSBibG9jay50ZXh0W2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2Uoc3ltYm9sRm9udCwgc3ltYm9sRm9ybWF0LnNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBzeW1ib2xGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBzeW1ib2xGb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3ltYm9scztcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0U3ltYm9scyA9IGdldFN5bWJvbHM7XG4gICAgZnVuY3Rpb24gZ2V0TGluZXMoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHN5bWJvbHMgPSBnZXRTeW1ib2xzKGNvbXBvbmVudCk7XG4gICAgICAgIGlmICghc3ltYm9scyB8fCAhc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgd29yZFdyYXAgPSBmYWxzZSB9ID0gY29tcG9uZW50O1xuICAgICAgICBjb25zdCBtdWx0aWxpbmUgPSBUZXh0LmlzTXVsdGlsaW5lKGNvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gW107XG4gICAgICAgIGxldCBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgIGlmIChtdWx0aWxpbmUpIHtcbiAgICAgICAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICAgICAgICAgIGlmICh3b3JkV3JhcCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB3b3JkID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2wuc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmNvbmNhdChsaW5lLCB3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5lbXB0eSh3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZCh3b3JkLCBzeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5lLndpZHRoICsgd29yZC53aWR0aCA+IHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoL1xccy8udGVzdChzeW1ib2wuc3ltYm9sKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5jb25jYXQobGluZSwgd29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmVtcHR5KHdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5jb25jYXQobGluZSwgd29yZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sLnN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpbmUud2lkdGggKyBzeW1ib2wuYWR2YW5jZSA+IHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKGxpbmUsIHN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQobGluZSwgc3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sLnN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQobGluZSwgc3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbaV07XG4gICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKGxpbmUsIHN5bWJvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmUuc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgICAgICBUZXh0TGluZS5jb3JyZWN0V2lkdGgobGluZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFsaW5lLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBsaW5lLmhlaWdodCA9IGRlZmF1bHRUZXh0Rm9ybWF0LnNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGluZSA9IGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgVGV4dExpbmUuY29ycmVjdEhlaWdodChsaW5lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldExpbmVzID0gZ2V0TGluZXM7XG4gICAgZnVuY3Rpb24gZ2V0TWV0cmljcyhjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBnZXRMaW5lcyhjb21wb25lbnQpO1xuICAgICAgICBpZiAoIWxpbmVzIHx8ICFsaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWV0cmljcyA9IHtcbiAgICAgICAgICAgIGxpbmVzLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgIG1ldHJpY3Mud2lkdGggPSBNYXRoLm1heChtZXRyaWNzLndpZHRoLCBsaW5lLndpZHRoKTtcbiAgICAgICAgICAgIG1ldHJpY3MuaGVpZ2h0ICs9IGxpbmUuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXRyaWNzO1xuICAgIH1cbiAgICBUZXh0TWV0cmljcy5nZXRNZXRyaWNzID0gZ2V0TWV0cmljcztcbiAgICBmdW5jdGlvbiBnZXRTaW1wbGVNZXRyaWNzKGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCB7IHRleHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBUZXh0Rm9ybWF0LmNvbWJpbmUoY29tcG9uZW50LmZvcm1hdCwgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCwgZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBjb25zdCB7IHNpemUsIGxldHRlclNwYWNpbmcsIGxlYWRpbmcgfSA9IGRlZmF1bHRUZXh0Rm9ybWF0O1xuICAgICAgICBjb25zdCBmb250ID0gRm9udC5nZXRGb250KGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgbGV0IHdpZHRoID0gMDtcbiAgICAgICAgbGV0IGhlaWdodCA9IHNpemU7XG4gICAgICAgIGxldCBsaW5lV2lkdGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHRleHRbaV07XG4gICAgICAgICAgICBpZiAoc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgIGhlaWdodCArPSBzaXplICsgbGVhZGluZztcbiAgICAgICAgICAgICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBsaW5lV2lkdGgpO1xuICAgICAgICAgICAgICAgIGxpbmVXaWR0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gdGV4dFtpICsgMV07XG4gICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShmb250LCBzaXplLCBzeW1ib2wsIHN5bWJvbE5leHQpICsgbGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGggKz0gYWR2YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBsaW5lV2lkdGgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldFNpbXBsZU1ldHJpY3MgPSBnZXRTaW1wbGVNZXRyaWNzO1xuICAgIGZ1bmN0aW9uIGdldFNpbXBsZVdpZHRoKGZvcm1hdCwgdGV4dCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID49IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBUZXh0Rm9ybWF0LmNvbWJpbmUoZm9ybWF0LCBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LCBkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGNvbnN0IHsgc2l6ZSwgbGV0dGVyU3BhY2luZyB9ID0gZGVmYXVsdFRleHRGb3JtYXQ7XG4gICAgICAgIGNvbnN0IGZvbnQgPSBGb250LmdldEZvbnQoZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2wgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgaWYgKHN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gdGV4dFtpICsgMV07XG4gICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKGZvbnQsIHNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBsZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgd2lkdGggKz0gYWR2YW5jZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldFNpbXBsZVdpZHRoID0gZ2V0U2ltcGxlV2lkdGg7XG59KShUZXh0TWV0cmljcyB8fCAoVGV4dE1ldHJpY3MgPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi90ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9mb3JtYXQnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL2ZvbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL21ldHJpY3MnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMvdGV4dCc7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBUZXh0TWV0cmljcyB9IGZyb20gJy4vZGF0YS9tZXRyaWNzJztcbmV4cG9ydCBjb25zdCBURVhUID0gJ3RleHQnO1xuZXhwb3J0IHZhciBUZXh0O1xuKGZ1bmN0aW9uIChUZXh0KSB7XG4gICAgZnVuY3Rpb24gZ2V0VGV4dChjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghdGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRleHQpKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IHRleHRbaV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBibG9jayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGJsb2NrLnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIFRleHQuZ2V0VGV4dCA9IGdldFRleHQ7XG4gICAgZnVuY3Rpb24gaXNVcGRhdGVNZXRyaWNzKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LnVwZGF0ZU1ldHJpY3MgPz8gdHJ1ZTtcbiAgICB9XG4gICAgVGV4dC5pc1VwZGF0ZU1ldHJpY3MgPSBpc1VwZGF0ZU1ldHJpY3M7XG4gICAgZnVuY3Rpb24gaXNBdXRvU2l6ZShjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuICFjb21wb25lbnQud2lkdGggJiYgIWNvbXBvbmVudC5oZWlnaHQ7XG4gICAgfVxuICAgIFRleHQuaXNBdXRvU2l6ZSA9IGlzQXV0b1NpemU7XG4gICAgZnVuY3Rpb24gaXNTaW1wbGUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgY29tcG9uZW50LnRleHQgPT09ICdzdHJpbmcnICYmIGlzQXV0b1NpemUoY29tcG9uZW50KTtcbiAgICB9XG4gICAgVGV4dC5pc1NpbXBsZSA9IGlzU2ltcGxlO1xuICAgIGZ1bmN0aW9uIGlzTXVsdGlsaW5lKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50Lm11bHRpbGluZSA/PyB0cnVlO1xuICAgIH1cbiAgICBUZXh0LmlzTXVsdGlsaW5lID0gaXNNdWx0aWxpbmU7XG4gICAgZnVuY3Rpb24gdXBkYXRlTWV0cmljcyhjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKGlzU2ltcGxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5tZXRyaWNzID0gVGV4dE1ldHJpY3MuZ2V0U2ltcGxlTWV0cmljcyhjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29tcG9uZW50Lm1ldHJpY3MgPSBUZXh0TWV0cmljcy5nZXRNZXRyaWNzKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dC51cGRhdGVNZXRyaWNzID0gdXBkYXRlTWV0cmljcztcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoY29tcG9uZW50LCBib3VuZHMpIHtcbiAgICAgICAgaWYgKGlzVXBkYXRlTWV0cmljcyhjb21wb25lbnQpKSB7XG4gICAgICAgICAgICB1cGRhdGVNZXRyaWNzKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBtZXRyaWNzIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghbWV0cmljcykge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHsgd2lkdGgsIGhlaWdodCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXdpZHRoKSB7XG4gICAgICAgICAgICB3aWR0aCA9IG1ldHJpY3Mud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoZWlnaHQpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IG1ldHJpY3MuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGNvbXBvbmVudCwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShjb21wb25lbnQsIGhlaWdodCk7XG4gICAgICAgIGJvdW5kcy54ID0geDtcbiAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgYm91bmRzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgVGV4dC5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShUZXh0IHx8IChUZXh0ID0ge30pKTtcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBUZXh0RXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChUZXh0RXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdCh0ZXh0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBsb2NhbCB9ID0gZW5naW5lLnBvaW50ZXJzO1xuICAgICAgICBUZXh0LmNhbGN1bGF0ZUJvdW5kcyh0ZXh0LCBib3VuZHMpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKGJvdW5kcywgbG9jYWwpO1xuICAgIH1cbiAgICBUZXh0RXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KFRFWFQsIGhpdFRlc3QpO1xuICAgIH1cbiAgICBUZXh0RXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoVGV4dEV4dGVuc2lvbiB8fCAoVGV4dEV4dGVuc2lvbiA9IHt9KSk7XG4iLCJleHBvcnQgY29uc3QgTElORUFSID0gJ2xpbmVhcic7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDID0gJ3F1YWRyYXRpYyc7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDX0lOID0gJ3F1YWRyYXRpY2luJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUNfT1VUID0gJ3F1YWRyYXRpY291dCc7XG5leHBvcnQgY29uc3QgQ1VCSUMgPSAnY3ViaWMnO1xuZXhwb3J0IGNvbnN0IENVQklDX0lOID0gJ2N1YmljaW4nO1xuZXhwb3J0IGNvbnN0IENVQklDX09VVCA9ICdjdWJpY291dCc7XG5leHBvcnQgY29uc3QgUVVBUlRJQyA9ICdxdWFydGljJztcbmV4cG9ydCBjb25zdCBRVUFSVElDX0lOID0gJ3F1YXJ0aWNpbic7XG5leHBvcnQgY29uc3QgUVVBUlRJQ19PVVQgPSAncXVhcnRpY291dCc7XG5leHBvcnQgY29uc3QgUVVJTlRJQyA9ICdxdWludGljJztcbmV4cG9ydCBjb25zdCBRVUlOVElDX0lOID0gJ3F1aW50aWNpbic7XG5leHBvcnQgY29uc3QgUVVJTlRJQ19PVVQgPSAncXVpbnRpY291dCc7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTCA9ICdxdWludGljJztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMX0lOID0gJ3F1aW50aWNpbic7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTF9PVVQgPSAncXVpbnRpY291dCc7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUwgPSAnZXhwb25lbnRpYWwnO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMX0lOID0gJ2V4cG9uZW50aWFsaW4nO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMX09VVCA9ICdleHBvbmVudGlhbG91dCc7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVIgPSAnY2lyY3VsYXInO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSX0lOID0gJ2NpcmN1bGFyaW4nO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSX09VVCA9ICdjaXJjdWxhcm91dCc7XG5leHBvcnQgY29uc3QgRUxBU1RJQyA9ICdlbGFzdGljJztcbmV4cG9ydCBjb25zdCBFTEFTVElDX0lOID0gJ2VsYXN0aWNpbic7XG5leHBvcnQgY29uc3QgRUxBU1RJQ19PVVQgPSAnZWxhc3RpY291dCc7XG5leHBvcnQgY29uc3QgQkFDSyA9ICdiYWNrJztcbmV4cG9ydCBjb25zdCBCQUNLX0lOID0gJ2JhY2tpbic7XG5leHBvcnQgY29uc3QgQkFDS19PVVQgPSAnYmFja291dCc7XG5leHBvcnQgY29uc3QgQk9VTkNFID0gJ2JvdW5jZSc7XG5leHBvcnQgY29uc3QgQk9VTkNFX0lOID0gJ2JvdW5jZWluJztcbmV4cG9ydCBjb25zdCBCT1VOQ0VfT1VUID0gJ2JvdW5jZW91dCc7XG5leHBvcnQgY29uc3QgZWFzaW5nID0ge1xuICAgIFtMSU5FQVJdOiAodmFsdWUpID0+IHZhbHVlLFxuICAgIFtRVUFEUkFUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMC41ICogKC0tdmFsdWUgKiAodmFsdWUgLSAyKSAtIDEpO1xuICAgIH0sXG4gICAgW1FVQURSQVRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUFEUkFUSUNfT1VUXTogKHZhbHVlKSA9PiAodmFsdWUgKiAoMiAtIHZhbHVlKSksXG4gICAgW0NVQklDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSArIDIpO1xuICAgIH0sXG4gICAgW0NVQklDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbQ1VCSUNfT1VUXTogKHZhbHVlKSA9PiAoLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAxKSxcbiAgICBbUVVBUlRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAtIDIpO1xuICAgIH0sXG4gICAgW1FVQVJUSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVQVJUSUNfT1VUXTogKHZhbHVlKSA9PiAoMSAtIC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUlOVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMik7XG4gICAgfSxcbiAgICBbUVVJTlRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUlOVElDX09VVF06ICh2YWx1ZSkgPT4gKC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDEpLFxuICAgIFtTSU5VU09JREFMXTogKHZhbHVlKSA9PiAoMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogdmFsdWUpKSksXG4gICAgW1NJTlVTT0lEQUxfSU5dOiAodmFsdWUpID0+ICgxIC0gTWF0aC5jb3MoKHZhbHVlICogTWF0aC5QSSkgLyAyKSksXG4gICAgW1NJTlVTT0lEQUxfT1VUXTogKHZhbHVlKSA9PiAoTWF0aC5zaW4oKHZhbHVlICogTWF0aC5QSSkgLyAyKSksXG4gICAgW0VYUE9ORU5USUFMXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDEwMjQsIHZhbHVlIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogKHZhbHVlIC0gMSkpICsgMik7XG4gICAgfSxcbiAgICBbRVhQT05FTlRJQUxfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gMCA/IDAgOiBNYXRoLnBvdygxMDI0LCB2YWx1ZSAtIDEpKSxcbiAgICBbRVhQT05FTlRJQUxfT1VUXTogKHZhbHVlKSA9PiAodmFsdWUgPT09IDEgPyAxIDogMSAtIE1hdGgucG93KDIsIC0xMCAqIHZhbHVlKSksXG4gICAgW0NJUkNVTEFSXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHZhbHVlICogdmFsdWUpIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh2YWx1ZSAtPSAyKSAqIHZhbHVlKSArIDEpO1xuICAgIH0sXG4gICAgW0NJUkNVTEFSX0lOXTogKHZhbHVlKSA9PiAoMSAtIE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkpLFxuICAgIFtDSVJDVUxBUl9PVVRdOiAodmFsdWUpID0+IE1hdGguc3FydCgxIC0gLS12YWx1ZSAqIHZhbHVlKSxcbiAgICBbRUxBU1RJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgKj0gMjtcbiAgICAgICAgaWYgKHZhbHVlIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiBNYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDIsIC0xMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuICAgIH0sXG4gICAgW0VMQVNUSUNfSU5dOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuICAgIH0sXG4gICAgW0VMQVNUSUNfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5wb3coMiwgLTEwICogdmFsdWUpICogTWF0aC5zaW4oKHZhbHVlIC0gMC4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG4gICAgfSxcbiAgICBbQkFDS106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1OCAqIDEuNTI1O1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqICh2YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSAtIHMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSArIHMpICsgMik7XG4gICAgfSxcbiAgICBbQkFDS19JTl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICAgICAgcmV0dXJuIHZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlIC0gcyk7XG4gICAgfSxcbiAgICBbQkFDS19PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTg7XG4gICAgICAgIHJldHVybiAtLXZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlICsgcykgKyAxO1xuICAgIH0sXG4gICAgW0JPVU5DRV06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPCAwLjUpIHtcbiAgICAgICAgICAgIHJldHVybiBlYXNpbmdbQk9VTkNFX0lOXSh2YWx1ZSAqIDIpICogMC41O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlYXNpbmdbQk9VTkNFX09VVF0odmFsdWUgKiAyIC0gMSkgKiAwLjUgKyAwLjU7XG4gICAgfSxcbiAgICBbQk9VTkNFX0lOXTogKHZhbHVlKSA9PiAoMSAtIGVhc2luZ1tCT1VOQ0VfT1VUXSgxIC0gdmFsdWUpKSxcbiAgICBbQk9VTkNFX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPCAxIC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgMiAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMS41IC8gMi43NSkgKiB2YWx1ZSArIDAuNzU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgMi41IC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAyLjI1IC8gMi43NSkgKiB2YWx1ZSArIDAuOTM3NTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDIuNjI1IC8gMi43NSkgKiB2YWx1ZSArIDAuOTg0Mzc1O1xuICAgIH0sXG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi90d2Vlbic7XG5leHBvcnQgKiBmcm9tICcuL2Vhc2luZyc7XG4iLCJpbXBvcnQgeyBlYXNpbmcsIExJTkVBUiB9IGZyb20gJy4vZWFzaW5nJztcbmV4cG9ydCBjb25zdCBUV0VFTiA9ICd0d2Vlbic7XG5leHBvcnQgdmFyIFR3ZWVuRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChUd2VlbkV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHVwZGF0ZShjb21wb25lbnQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHR3ZWVuIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IHsgcGhhc2VzIH0gPSB0d2VlbjtcbiAgICAgICAgaWYgKCFwaGFzZXM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ0FuaW1hdGlvbiBwYXJ0cyBub3QgZm91bmQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHdlZW4udGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0d2Vlbi50aW1lICs9IGVuZ2luZS51cGRhdGVyLnRpbWU7XG4gICAgICAgIGNvbnN0IHsgdGltZSB9ID0gdHdlZW47XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBwaGFzZXMuZm9yRWFjaCgocGhhc2UpID0+IHtcbiAgICAgICAgICAgIGlmICghcGhhc2UudGltZSkge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdBbmltYXRpb24gdGltZSBub3Qgc2V0Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBoYXNlLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gcGhhc2Uub2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZWFzaW5nTmFtZSA9IHBoYXNlPy5lYXNpbmc/LnRvTG93ZXJDYXNlKCkgPz8gTElORUFSO1xuICAgICAgICAgICAgY29uc3QgZWFzaW5nTWV0aG9kID0gZWFzaW5nW2Vhc2luZ05hbWVdO1xuICAgICAgICAgICAgaWYgKCFlYXNpbmdNZXRob2QpIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZyhgVW5rbm93biBlYXNpbmcgdHlwZTogJHtlYXNpbmd9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAodGltZSAtIG9mZnNldCkgLyBwaGFzZS50aW1lO1xuICAgICAgICAgICAgb2Zmc2V0ICs9IHBoYXNlLnRpbWU7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCAwIHx8IHZhbHVlID4gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVhc2luZ1ZhbHVlID0gZWFzaW5nTWV0aG9kKHZhbHVlKTtcbiAgICAgICAgICAgIGlmICghcGhhc2UudG8pIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnQW5pbWF0aW9uIFwidG9cIiBzdGF0ZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBoYXNlLmZyb20pIHtcbiAgICAgICAgICAgICAgICBwaGFzZS5mcm9tID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHRvLCBmcm9tIH0gPSBwaGFzZTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gY29tcG9uZW50O1xuICAgICAgICAgICAgT2JqZWN0LmtleXModG8pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmcm9tW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tW2tleV0gPSBzdGF0ZVtrZXldID8/IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGZyb21WYWx1ZSA9IGZyb21ba2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b1ZhbHVlID0gdG9ba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZyb21WYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHRvVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlVmFsdWUgPSBmcm9tVmFsdWUgKyBlYXNpbmdWYWx1ZSAqICh0b1ZhbHVlIC0gZnJvbVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IHN0YXRlVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodHdlZW4ubG9vcCAmJiB0d2Vlbi50aW1lID4gb2Zmc2V0KSB7XG4gICAgICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUd2VlbkV4dGVuc2lvbi51cGRhdGUgPSB1cGRhdGU7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucHJvcGVydGllcy5zZXQoVFdFRU4sIHVwZGF0ZSk7XG4gICAgfVxuICAgIFR3ZWVuRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoVHdlZW5FeHRlbnNpb24gfHwgKFR3ZWVuRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGplbmcvY29yZSc7XG5leHBvcnQgY2xhc3MgV2ViUGxhdGZvcm0gZXh0ZW5kcyBQbGF0Zm9ybSB7XG59XG4iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tICdAamVuZy9jb3JlJztcbmV4cG9ydCBjbGFzcyBXZWJTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuICAgIGdldFdpbmRvd1dpZHRoKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XG4gICAgfVxuICAgIGdldFdpbmRvd0hlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB9XG4gICAgZ2V0V2luZG93UGl4ZWxSYXRpbygpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID8/IDE7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9zY3JlZW4nO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmFjdGl2ZS9rZXlib2FyZCc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyYWN0aXZlL21vdXNlJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJhY3RpdmUvdG91Y2gnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9wbGF0Zm9ybSc7XG4iLCJmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsIHR5cGUpIHtcbiAgICBjb25zdCBrZXlFdmVudCA9IHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAga2V5OiBldmVudC5rZXksXG4gICAgICAgIGNvZGU6IGV2ZW50LmNvZGUsXG4gICAgICAgIGN0cmw6IGV2ZW50LmN0cmxLZXksXG4gICAgICAgIGFsdDogZXZlbnQuYWx0S2V5LFxuICAgICAgICBzaGlmdDogZXZlbnQuc2hpZnRLZXksXG4gICAgICAgIHJlcGVhdDogZXZlbnQucmVwZWF0LFxuICAgIH07XG4gICAgZW5naW5lLmtleWJvYXJkLmRpc3BhdGNoKGtleUV2ZW50KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZXhwb3J0IHZhciBLZXlib2FyZEV4dGVuc2lvbjtcbihmdW5jdGlvbiAoS2V5Ym9hcmRFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdrZXlEb3duJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAna2V5UHJlc3MnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdrZXlVcCcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgS2V5Ym9hcmRFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShLZXlib2FyZEV4dGVuc2lvbiB8fCAoS2V5Ym9hcmRFeHRlbnNpb24gPSB7fSkpO1xuIiwiZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCB0eXBlKSB7XG4gICAgY29uc3QgeyB2aWV3IH0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgY29uc3QgY2xpZW50UmVjdCA9IHZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSBjbGllbnRSZWN0LmxlZnQgLSB2aWV3LmNsaWVudExlZnQ7XG4gICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSBjbGllbnRSZWN0LnRvcCAtIHZpZXcuY2xpZW50VG9wO1xuICAgIGVuZ2luZS5wb2ludGVycy5kaXNwYXRjaCh0eXBlLCB4LCB5LCAwKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZXhwb3J0IHZhciBNb3VzZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoTW91c2VFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJEb3duJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJVcCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJNb3ZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJDYW5jZWwnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE1vdXNlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoTW91c2VFeHRlbnNpb24gfHwgKE1vdXNlRXh0ZW5zaW9uID0ge30pKTtcbiIsImZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgdHlwZSkge1xuICAgIGNvbnN0IHsgdmlldyB9ID0gZW5naW5lLnBsYXRmb3JtO1xuICAgIGNvbnN0IGNsaWVudFJlY3QgPSB2aWV3LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXTtcbiAgICAgICAgY29uc3QgeCA9IHRvdWNoLmNsaWVudFggLSBjbGllbnRSZWN0LmxlZnQgLSB2aWV3LmNsaWVudExlZnQ7XG4gICAgICAgIGNvbnN0IHkgPSB0b3VjaC5jbGllbnRZIC0gY2xpZW50UmVjdC50b3AgLSB2aWV3LmNsaWVudFRvcDtcbiAgICAgICAgZW5naW5lLnBvaW50ZXJzLmRpc3BhdGNoKHR5cGUsIHgsIHksIHRvdWNoLmlkZW50aWZpZXIpO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZXhwb3J0IHZhciBUb3VjaEV4dGVuc2lvbjtcbihmdW5jdGlvbiAoVG91Y2hFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyRG93bicpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlclVwJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlck1vdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJDYW5jZWwnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFRvdWNoRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoVG91Y2hFeHRlbnNpb24gfHwgKFRvdWNoRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IEFCSUxJVFlfV09MRiB9IGZyb20gJy4vYXNzZXRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjdXJzaXZlKCkge1xuXHRjb25zdCBjb250YWluZXIgPSB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0eDogMzAsXG5cdFx0XHR5OiAzMCxcblx0XHRcdHNjYWxlWDogMC45LFxuXHRcdFx0c2NhbGVZOiAwLjksXG5cdFx0XHRyb3RhdGlvbjogMC4yLFxuXHRcdFx0YWxwaGE6IDAuOSxcblx0XHRcdGNoaWxkcmVuOiBbe1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEFCSUxJVFlfV09MRixcblx0XHRcdFx0c2NhbGU6IDAuMyxcblx0XHRcdH1dLFxuXHRcdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHRcdHRoaXMucm90YXRpb24gKz0gdGltZSAqIDAuMDU7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cblx0Y29udGFpbmVyLmNoaWxkcmVuLmNoaWxkcmVuLnB1c2goY29udGFpbmVyIGFzIG5ldmVyKTtcblxuXHRyZXR1cm4gY29udGFpbmVyO1xufVxuIiwiY29uc3QgQVNTRVRTID0gJ2Fzc2V0cy8nO1xuXG5leHBvcnQgY29uc3QgQU5JTUFMSVNUID0gJ2lkOmFuaW1hbGlzdCc7XG5leHBvcnQgY29uc3QgQVJDSEVSID0gJ2lkOmFyY2hlcic7XG5cbmV4cG9ydCBjb25zdCBBTklNQUxJU1RfSU1BR0UgPSBgJHtBU1NFVFN9QW5pbWFsaXN0Rm94MV9pbWFnZS5wbmdgO1xuZXhwb3J0IGNvbnN0IEFSQ0hFUl9JTUFHRSA9IGAke0FTU0VUU31BcmNoZXIyX2h1bnRlcl9pbWFnZS5wbmdgO1xuXG5leHBvcnQgY29uc3QgQUJJTElUWV9GT1ggPSBgJHtBU1NFVFN9QW5pbWFsaXN0QWJpbGl0eV9Gb3gucG5nYDtcbmV4cG9ydCBjb25zdCBBQklMSVRZX1dPTEYgPSBgJHtBU1NFVFN9QW5pbWFsaXN0QWJpbGl0eV9Xb2xmLnBuZ2A7XG5cbmV4cG9ydCBjb25zdCBCQUNLR1JPVU5EID0gYCR7QVNTRVRTfWp1bmdsZV9iYWNrZ3JvdW5kLmpwZ2A7XG5cbmV4cG9ydCBjb25zdCBURVNUX0NBTlZBUyA9ICd0ZXN0LmNhbnZhcyc7XG5cbmV4cG9ydCBjb25zdCBTQ0VORSA9IGAke0FTU0VUU30vc2NlbmUuanNvbmA7XG4iLCJpbXBvcnQgeyBDYW52YXNFbmdpbmUgfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IENhbnZhc1RleHRFeHRlbnNpb24gfSBmcm9tICdAamVuZy90ZXh0JztcbmltcG9ydCB7IEN1c3RvbUltYWdlRXh0ZW5zaW9uIH0gZnJvbSAnLi9pbWFnZSc7XG5pbXBvcnQgQ3VzdG9tUGxhdGZvcm0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUVuZ2luZSBleHRlbmRzIENhbnZhc0VuZ2luZSB7XG5cdHBsYXRmb3JtOiBDdXN0b21QbGF0Zm9ybTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMucGxhdGZvcm0gPSBuZXcgQ3VzdG9tUGxhdGZvcm0odGhpcyk7XG5cblx0XHRDYW52YXNUZXh0RXh0ZW5zaW9uLmluaXQodGhpcyk7XG5cdFx0Q3VzdG9tSW1hZ2VFeHRlbnNpb24uaW5pdCh0aGlzKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzUGxhdGZvcm0gfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IEVuZ2luZSwgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSwgSW1hZ2UgfSBmcm9tICdAamVuZy9pbWFnZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcbmltcG9ydCBDdXN0b21FbmdpbmUgZnJvbSAnLi9lbmdpbmUnO1xuXG5leHBvcnQgbmFtZXNwYWNlIEN1c3RvbUltYWdlRXh0ZW5zaW9uIHtcblx0ZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihpbWFnZTogSW1hZ2UsIGVuZ2luZTogRW5naW5lKTogdm9pZCB7XG5cdFx0aWYgKCFpbWFnZS5zcmMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB7IG1hdHJpeCwgY29sb3JUcmFuc2Zvcm0gfSA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG5cblx0XHRpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KGltYWdlLnNyYykgYXMgSW1hZ2VSZXNvdXJjZSB8IG51bGw7XG5cblx0XHRpZiAoIXJlc291cmNlPy5sb2FkZWQgfHwgIXJlc291cmNlPy5pbWFnZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbnRleHQyZCA9IChlbmdpbmUucGxhdGZvcm0gYXMgQ2FudmFzUGxhdGZvcm0pLmdldENvbnRleHQoKTtcblxuXHRcdGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oXG5cdFx0XHRtYXRyaXguYSxcblx0XHRcdG1hdHJpeC5iLFxuXHRcdFx0bWF0cml4LmMsXG5cdFx0XHRtYXRyaXguZCxcblx0XHRcdG1hdHJpeC50eCxcblx0XHRcdG1hdHJpeC50eSxcblx0XHQpO1xuXG5cdFx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcblx0XHRjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuXHRcdGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuXG5cdFx0Y29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcblx0XHRjb250ZXh0MmQuZmlsbFN0eWxlID0gJyc7XG5cdFx0Y29udGV4dDJkLnN0cm9rZVN0eWxlID0gJ2xpZ2h0Z3JheSc7XG5cdFx0Y29udGV4dDJkLnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG5cdH1cblxuXHRleHBvcnQgZnVuY3Rpb24gaW5pdChlbmdpbmU6IEN1c3RvbUVuZ2luZSkge1xuXHRcdEltYWdlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcblx0XHRlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KElNQUdFLCByZW5kZXIpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDYW52YXNQbGF0Zm9ybSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21QbGF0Zm9ybSBleHRlbmRzIENhbnZhc1BsYXRmb3JtIHtcblx0Y2xlYXIoKSB7XG5cdFx0Y29uc3QgY29udGV4dDJkID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cdFx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICdibGFjayc7XG5cdFx0Y29udGV4dDJkLnNldFRyYW5zZm9ybSgpO1xuXHRcdGNvbnRleHQyZC5maWxsUmVjdCgwLCAwLCBjb250ZXh0MmQuY2FudmFzLndpZHRoLCBjb250ZXh0MmQuY2FudmFzLmhlaWdodCk7XG5cdFx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21SZXNvdXJjZU1hbmFnZXIge1xuXHRyZWFkb25seSBhbGlhc2VzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblx0cmVhZG9ubHkgcmVzb3VyY2VzID0gbmV3IE1hcDxzdHJpbmcsIEltYWdlUmVzb3VyY2U+KCk7XG5cblx0cmVzb2x2ZSA9IChhc3NldDogc3RyaW5nLCBlbmdpbmU6IEVuZ2luZSk6IEltYWdlUmVzb3VyY2UgfCBudWxsID0+IHtcblx0XHRpZiAoYXNzZXQuaW5kZXhPZignaWQ6JykgPT09IDApIHtcblx0XHRcdGNvbnN0IGlkID0gYXNzZXQuc2xpY2UoMyk7XG5cdFx0XHRsZXQgcmVzb3VyY2UgPSB0aGlzLnJlc291cmNlcy5nZXQoaWQpIGFzIEltYWdlUmVzb3VyY2U7XG5cdFx0XHRpZiAoIXJlc291cmNlKSB7XG5cdFx0XHRcdGNvbnN0IHVybCA9IHRoaXMuYWxpYXNlcy5nZXQoaWQpO1xuXHRcdFx0XHRpZiAodXJsKSB7XG5cdFx0XHRcdFx0cmVzb3VyY2UgPSBJbWFnZVJlc291cmNlLnJlc29sdmUodXJsLCBlbmdpbmUpIGFzIEltYWdlUmVzb3VyY2U7XG5cdFx0XHRcdFx0dGhpcy5yZXNvdXJjZXMuc2V0KGlkLCByZXNvdXJjZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZW5naW5lLmRlYnVnLndhcm5pbmcoYFJlc291cmNlIHdpdGggaWQ6ICR7YXNzZXR9IG5vdCBmb3VuZGApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzb3VyY2U7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aW5pdChlbmdpbmU6IEVuZ2luZSkge1xuXHRcdGVuZ2luZS5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZCh0aGlzLnJlc29sdmUpO1xuXHR9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFN0YXRpc3RpY3Mge1xuXHRnZXRSZW5kZXJUaW1lKCk6IG51bWJlcjtcblx0Z2V0VXBkYXRlVGltZSgpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcHMoc3RhdGlzdGljczogU3RhdGlzdGljcykge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHR0ZXh0OiAnZnBzJyxcblx0XHRmcmFtZXM6IDAsXG5cdFx0ZnJhbWVUaW1lOiAwLFxuXHRcdHVwZGF0ZVRpbWU6IDAsXG5cdFx0cmVuZGVyVGltZTogMCxcblx0XHRmb3JtYXQ6IHtcblx0XHRcdHNpemU6IDIwLFxuXHRcdFx0Y29sb3I6IDB4ZmZmZmZmLFxuXHRcdH0sXG5cdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLmZyYW1lVGltZSArPSB0aW1lO1xuXHRcdFx0dGhpcy51cGRhdGVUaW1lICs9IHN0YXRpc3RpY3MuZ2V0VXBkYXRlVGltZSgpO1xuXHRcdFx0dGhpcy5yZW5kZXJUaW1lICs9IHN0YXRpc3RpY3MuZ2V0UmVuZGVyVGltZSgpO1xuXHRcdFx0dGhpcy5mcmFtZXMrKztcblx0XHRcdGlmICh0aGlzLmZyYW1lVGltZSA+PSAxKSB7XG5cdFx0XHRcdGNvbnN0IGZyYW1lVGltZSA9IE1hdGguY2VpbCgxMDAwICogdGhpcy5mcmFtZVRpbWUgLyB0aGlzLmZyYW1lcyk7XG5cdFx0XHRcdGNvbnN0IHVwZGF0ZVRpbWUgPSAodGhpcy51cGRhdGVUaW1lIC8gdGhpcy5mcmFtZXMpLnRvRml4ZWQoMik7XG5cdFx0XHRcdGNvbnN0IHJlbmRlclRpbWUgPSAodGhpcy5yZW5kZXJUaW1lIC8gdGhpcy5mcmFtZXMpLnRvRml4ZWQoMik7XG5cdFx0XHRcdHRoaXMudGV4dCA9IGBmcHM6ICR7dGhpcy5mcmFtZXN9LCAke2ZyYW1lVGltZX0gbXNcXG51cGRhdGU6ICR7dXBkYXRlVGltZX0gbXNcXG5yZW5kZXI6ICR7cmVuZGVyVGltZX0gbXNgO1xuXHRcdFx0XHR0aGlzLmZyYW1lVGltZSA9IDA7XG5cdFx0XHRcdHRoaXMudXBkYXRlVGltZSA9IDA7XG5cdFx0XHRcdHRoaXMucmVuZGVyVGltZSA9IDA7XG5cdFx0XHRcdHRoaXMuZnJhbWVzID0gMDtcblx0XHRcdH1cblx0XHR9LFxuXHR9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQge1xuXHRBQklMSVRZX0ZPWCwgQUJJTElUWV9XT0xGLCBBTklNQUxJU1QsIEFSQ0hFUiwgQkFDS0dST1VORCwgU0NFTkUsXG59IGZyb20gJy4vYXNzZXRzJztcbmltcG9ydCBhcnRpZmFjdCBmcm9tICcuL2FydGlmYWN0JztcbmltcG9ydCB7IGZwcywgU3RhdGlzdGljcyB9IGZyb20gJy4vZnBzJztcbmltcG9ydCB7IHVuaXQsIFVuaXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi91bml0JztcbmltcG9ydCB7IHByZWxvYWRlciwgUHJlbG9hZGVySW5mbyB9IGZyb20gJy4vcHJlbG9hZGVyJztcblxuaW50ZXJmYWNlIE1haW4ge1xuXHRzdGFydCgpOiB2b2lkO1xuXHRba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmludGVyZmFjZSBNYWluUHJvcGVydGllcyBleHRlbmRzIFN0YXRpc3RpY3Mge1xuXHRnZXRDYW52YXNXaWR0aCgpOiBudW1iZXI7XG5cdGdldENhbnZhc0hlaWdodCgpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4ocGFyYW1ldGVyczogTWFpblByb3BlcnRpZXMpOiBNYWluIHtcblx0ZnVuY3Rpb24gb25Vbml0Q2xpY2soZGF0YTogVW5pdFByb3BlcnRpZXMpIHtcblx0XHRkYXRhLmhlYWx0aCA9IE1hdGgucmFuZG9tKCk7XG5cdFx0Y29uc29sZS5sb2coJ29uVW5pdENsaWNrJywgZGF0YS5uYW1lKTtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSB7XG5cdFx0dHlwZTogJ2xvYWRlcicsXG5cdFx0dmlzaWJsZTogZmFsc2UsXG5cdFx0ZW5hYmxlZDogZmFsc2UsXG5cdFx0b25Mb2FkZWQoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnYmFja2dyb3VuZCBsb2FkZWQnKTtcblx0XHRcdHRoaXMudmlzaWJsZSA9IHRydWU7XG5cdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdH0sXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdGJhY2tncm91bmQ6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBCQUNLR1JPVU5ELFxuXHRcdFx0XHRzY2FsZVg6IDEsXG5cdFx0XHRcdHNjYWxlWTogMSxcblx0XHRcdH0sXG5cdFx0XHRmaWd1cmU6IHtcblx0XHRcdFx0dHlwZTogJ3NoYXBlJyxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdHR5cGU6ICdyZWN0YW5nbGUnLFxuXHRcdFx0XHRcdHg6IDIwLFxuXHRcdFx0XHRcdHk6IDIwLFxuXHRcdFx0XHRcdHdpZHRoOiAxMDAsXG5cdFx0XHRcdFx0aGVpZ2h0OiA1MCxcblx0XHRcdFx0XHRmaWxsOiAweGZmMDBmZixcblx0XHRcdFx0XHRzdHJva2U6IDB4MDAwMGZmLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHNoYXBlczoge1xuXHRcdFx0XHR0eXBlOiAnc2hhcGUnLFxuXHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ2VsbGlwc2UnLFxuXHRcdFx0XHRcdFx0eDogMTAwLFxuXHRcdFx0XHRcdFx0eTogMTAwLFxuXHRcdFx0XHRcdFx0cmFkaXVzOiA1MCxcblx0XHRcdFx0XHRcdGZpbGw6IHsgdHlwZTogJ3NvbGlkJywgY29sb3I6IDB4ZmZmZjAwLCBhbHBoYTogMSB9LFxuXHRcdFx0XHRcdFx0c3Ryb2tlOiB7IGZpbGw6IDB4MDAwMGZmLCB0aGlja25lc3M6IDEwIH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAncGF0aCcsXG5cdFx0XHRcdFx0XHRkYXRhOiAnTSAxMTAsIDExMCBIIDE5MCBWIDE5MCBIIDExMCBaJyxcblx0XHRcdFx0XHRcdGZpbGw6IDB4OTkwMDAwLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ3BhdGgnLFxuXHRcdFx0XHRcdFx0ZGF0YTogW1xuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdtb3ZlVG8nLCB4OiAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDEwMCwgeTogMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAxMDAsIHk6IDEwMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAwLCB5OiAxMDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMCwgeTogMCB9LFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdGZpbGw6IHsgdHlwZTogJ3NvbGlkJywgY29sb3I6IDB4OTk5OTk5LCBhbHBoYTogMC42IH0sXG5cdFx0XHRcdFx0XHRzdHJva2U6IDB4MDAwMDAwLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0dW5pdHM6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0dW5pdCh7XG5cdFx0XHRcdFx0XHRuYW1lOiAnQXJjaGVyJywgaGVhbHRoOiAxLCBpbWFnZTogQVJDSEVSLCBvbkNsaWNrOiBvblVuaXRDbGljayxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHR1bml0KHtcblx0XHRcdFx0XHRcdG5hbWU6ICdBbmltYWxpc3QnLCBoZWFsdGg6IDEsIGltYWdlOiBBTklNQUxJU1QsIG9uQ2xpY2s6IG9uVW5pdENsaWNrLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdGFydGlmYWN0OiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHR4OiAzMDAsXG5cdFx0XHRcdHk6IDM1MCxcblx0XHRcdFx0Y2hpbGRyZW46IGFydGlmYWN0KCksXG5cdFx0XHR9LFxuXHRcdFx0bWFwOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHk6IDQ1MCxcblx0XHRcdFx0c2NhbGVYOiAwLjIsXG5cdFx0XHRcdHNjYWxlWTogMC4yLFxuXHRcdFx0XHRhbHBoYTogMC41LFxuXHRcdFx0XHRzcmM6ICd0ZXN0LmNhbnZhcycsXG5cdFx0XHRcdG9uUG9pbnRlck92ZXIoKSB7XG5cdFx0XHRcdFx0dGhpcy5hbHBoYSA9IDE7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uUG9pbnRlck91dCgpIHtcblx0XHRcdFx0XHR0aGlzLmFscGhhID0gMC41O1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGFiaWxpdHlGb3g6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBBQklMSVRZX0ZPWCxcblx0XHRcdFx0eDogNDUwLFxuXHRcdFx0XHR5OiA1MDAsXG5cdFx0XHRcdHNjYWxlOiAwLjUsXG5cdFx0XHRcdHRpbnQ6IHtcblx0XHRcdFx0XHRjb2xvcjogMHgwMGZmMDAsXG5cdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdH0gYXMgYW55LFxuXHRcdFx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdFx0XHRpZiAodGhpcy50aW50KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQudmFsdWUgKz0gdGltZTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLnRpbnQudmFsdWUgPj0gMSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRpbnQudmFsdWUgPSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0b25Qb2ludGVyRG93bihlOiBhbnkpIHtcblx0XHRcdFx0XHRpZiAodGhpcy50aW50KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQgPSBudWxsO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQgPSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAweDAwZmYwMCxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZygnZm94JywgZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YWJpbGl0eVdvbGY6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdHg6IDM1MCxcblx0XHRcdFx0eTogNDAwLFxuXHRcdFx0XHRjaGlsZHJlbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdFx0c3JjOiBBQklMSVRZX1dPTEYsXG5cdFx0XHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdFx0XHRhbHBoYTogMSxcblx0XHRcdFx0XHR0d2Vlbjoge1xuXHRcdFx0XHRcdFx0bG9vcDogdHJ1ZSxcblx0XHRcdFx0XHRcdHBoYXNlczogW1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB4OiAyMDAgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ2N1Ymljb3V0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHk6IDIwMCwgYWxwaGE6IDAuNSB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAncXVhZHJhdGljSW4nLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeDogMCwgYWxwaGE6IDEgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ3F1YWRyYXRpY091dCcsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0ZnBzOiBmcHMocGFyYW1ldGVycyksXG5cdFx0fSxcblx0fTtcblxuXHRjb25zdCBwcmVsb2FkZXJJbmZvOiBQcmVsb2FkZXJJbmZvID0ge1xuXHRcdGdldFdpZHRoOiBwYXJhbWV0ZXJzLmdldENhbnZhc1dpZHRoLFxuXHRcdGdldEhlaWdodDogcGFyYW1ldGVycy5nZXRDYW52YXNIZWlnaHQsXG5cdFx0Z2V0UHJvZ3Jlc3MoKSB7XG5cdFx0XHRyZXR1cm4gTG9hZGVyLmdldExvYWRpbmdQcm9ncmVzcyhjb250ZW50KTtcblx0XHR9LFxuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdGNvbnRlbnQsXG5cdFx0XHRwcmVsb2FkZXI6IHByZWxvYWRlcihwcmVsb2FkZXJJbmZvKSxcblx0XHRcdHNjZW5lOiB7XG5cdFx0XHRcdHR5cGU6ICdzY2VuZScsIHg6IDMwMCwgc3JjOiBTQ0VORSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRvblVwZGF0ZSgpIHtcblx0XHRcdGNvbnN0IGlzTG9hZGVkID0gIXRoaXMuY2hpbGRyZW4uY29udGVudC52aXNpYmxlO1xuXHRcdFx0dGhpcy5jaGlsZHJlbi5wcmVsb2FkZXIudmlzaWJsZSA9IGlzTG9hZGVkO1xuXHRcdFx0dGhpcy5jaGlsZHJlbi5wcmVsb2FkZXIuZW5hYmxlZCA9IGlzTG9hZGVkO1xuXHRcdH0sXG5cdFx0c3RhcnQoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnc3RhcnQnKTtcblx0XHR9LFxuXHR9O1xufVxuIiwiaW1wb3J0IHsgU2hhcGUgfSBmcm9tICdAamVuZy9zaGFwZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJlbG9hZGVySW5mbyB7XG5cdGdldFByb2dyZXNzKCk6IG51bWJlcjtcblx0Z2V0V2lkdGgoKTogbnVtYmVyO1xuXHRnZXRIZWlnaHQoKTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZGVyKGluZm86IFByZWxvYWRlckluZm8pIHtcblx0Y29uc3QgaGVpZ2h0ID0gMjA7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ3NoYXBlJyxcblx0XHRzY2FsZVg6IDEsXG5cdFx0eTogaW5mby5nZXRIZWlnaHQoKSAtIGhlaWdodCxcblx0XHRkYXRhOiB7XG5cdFx0XHR0eXBlOiAncmVjdGFuZ2xlJyxcblx0XHRcdHdpZHRoOiAxLFxuXHRcdFx0aGVpZ2h0LFxuXHRcdFx0ZmlsbDogMHhmZjAwMDAsXG5cdFx0fSxcblx0XHRvblVwZGF0ZSgpIHtcblx0XHRcdHRoaXMuc2NhbGVYISArPSAoaW5mby5nZXRXaWR0aCgpICogaW5mby5nZXRQcm9ncmVzcygpIC0gdGhpcy5zY2FsZVghKSAvIDI7XG5cdFx0fSxcblx0fSBhcyBTaGFwZTtcbn1cbiIsImNvbnN0IFNQRUVEID0gMTAwO1xuXG5pbnRlcmZhY2UgVW5pdCB7XG5cdFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVbml0UHJvcGVydGllcyB7XG5cdG5hbWU6IHN0cmluZyxcblx0aGVhbHRoOiBudW1iZXIsXG5cdGltYWdlOiBzdHJpbmcsXG5cdG9uQ2xpY2s6IChkYXRhOiBVbml0UHJvcGVydGllcykgPT4gdm9pZDtcbn1cblxuZnVuY3Rpb24gb25Qcm9wc1VwZGF0ZShwcm9wczogYW55LCBjYWxsYmFjazogKHRpbWU6IG51bWJlcikgPT4gdm9pZCkge1xuXHRjb25zdCBjb3B5ID0geyAuLi5wcm9wcyB9O1xuXHRyZXR1cm4gKHRpbWU6IG51bWJlcikgPT4ge1xuXHRcdC8vIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG5cdFx0bGV0IGNoYW5nZWQgPSBmYWxzZTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcblx0XHRmb3IgKGNvbnN0IGtleSBpbiBwcm9wcykge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuXHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0aWYgKGNvcHlba2V5XSAhPT0gcHJvcHNba2V5XSkge1xuXHRcdFx0XHRcdGNvcHlba2V5XSA9IHByb3BzW2tleV07XG5cdFx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlZCkge1xuXHRcdFx0Y2FsbGJhY2sodGltZSk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBydW5PblByb3BzVXBkYXRlKHByb3BzOiBhbnksIGNvbXBvbmVudDogYW55KSB7XG5cdGNvbXBvbmVudC5vblVwZGF0ZSA9IG9uUHJvcHNVcGRhdGUocHJvcHMsIGNvbXBvbmVudC5vblVwZGF0ZS5iaW5kKGNvbXBvbmVudCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pdChwcm9wczogVW5pdFByb3BlcnRpZXMpOiBVbml0IHtcblx0ZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XG5cdFx0cmV0dXJuIGAke3Byb3BzLm5hbWV9XFxuJHtNYXRoLnJvdW5kKHByb3BzLmhlYWx0aCAqIDEwMCl9JWA7XG5cdH1cblxuXHRjb25zdCB1bml0VmlldyA9IHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHR4OiA1MCArIE1hdGgucmFuZG9tKCkgKiA0MDAsXG5cdFx0eTogMjAwLFxuXHRcdHJvdGF0aW9uOiAwLFxuXHRcdHVwZGF0ZU1vdmUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLnggKz0gdGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggKiB0aW1lICogU1BFRUQ7XG5cdFx0XHRpZiAodGhpcy54IDwgNTApIHtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggPSAxO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnggPiA0MDApIHtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggPSAtMTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0dGhpcy51cGRhdGVNb3ZlKHRpbWUpO1xuXHRcdH0sXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdHRleHQ6IHtcblx0XHRcdFx0dHlwZTogJ3RleHQnLFxuXHRcdFx0XHR0ZXh0OiBnZXRUaXRsZSgpLFxuXHRcdFx0XHRmb3JtYXQ6IHtcblx0XHRcdFx0XHRzaXplOiAxNSxcblx0XHRcdFx0XHRjb2xvcjogMHhmZmRkZGQsXG5cdFx0XHRcdFx0YWxpZ246ICdjZW50ZXInLFxuXHRcdFx0XHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRib3JkZXI6IDB4MDBmZjAwLFxuXHRcdFx0XHR5OiAtMzAsXG5cdFx0XHRcdGhlaWdodDogMzUsXG5cdFx0XHRcdHBpdm90WDogMC41LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duOiAoKSA9PiB7XG5cdFx0XHRcdFx0cHJvcHMub25DbGljayhwcm9wcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uVXBkYXRlKCkge1xuXHRcdFx0XHRcdHRoaXMudGV4dCA9IGdldFRpdGxlKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBwcm9wcy5pbWFnZSxcblx0XHRcdFx0c2NhbGVYOiBNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xLFxuXHRcdFx0XHRwaXZvdFg6IDAuNSxcblx0XHRcdFx0b25Qb2ludGVyRG93bjogKCkgPT4ge1xuXHRcdFx0XHRcdHByb3BzLm9uQ2xpY2socHJvcHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXG5cdHJ1bk9uUHJvcHNVcGRhdGUocHJvcHMsIHVuaXRWaWV3LmNoaWxkcmVuLnRleHQpO1xuXG5cdHJldHVybiB1bml0Vmlldztcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBUd2VlbkV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3R3ZWVuJztcbmltcG9ydCB7IENhbnZhc1RleHRFeHRlbnNpb24gfSBmcm9tICdAamVuZy90ZXh0JztcbmltcG9ydCB7IENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gfSBmcm9tICdAamVuZy9pbWFnZSc7XG5pbXBvcnQgeyBDYW52YXNTaGFwZUV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3NoYXBlJztcbmltcG9ydCB7IENhbnZhc0VuZ2luZSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBTY2VuZUV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3NjZW5lJztcbmltcG9ydCB7IE1vdXNlRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvd2ViJztcbmltcG9ydCBDdXN0b21SZXNvdXJjZU1hbmFnZXIgZnJvbSAnLi9lbmdpbmUvcmVzb3VyY2VzJztcbmltcG9ydCBDdXN0b21FbmdpbmUgZnJvbSAnLi9lbmdpbmUvZW5naW5lJztcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbic7XG5pbXBvcnQge1xuXHRBTklNQUxJU1QsIEFOSU1BTElTVF9JTUFHRSwgQVJDSEVSLCBBUkNIRVJfSU1BR0UsIFRFU1RfQ0FOVkFTLFxufSBmcm9tICcuL2Fzc2V0cyc7XG5cbi8vIHBhZ2VcbmRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gJzAnO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nID0gJzAnO1xuXG4vLyBiYXNpYyBlbmdpbmVcbmNvbnN0IGVuZ2luZSA9IG5ldyBDYW52YXNFbmdpbmUoKTtcbkNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuQ2FudmFzVGV4dEV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5DYW52YXNTaGFwZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5Ud2VlbkV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5TY2VuZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5Nb3VzZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5lbmdpbmUuc2NyZWVuLmZ1bGxzY3JlZW4gPSB0cnVlO1xuZW5naW5lLnRpY2tlci5wbGF5KCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVuZ2luZS5wbGF0Zm9ybS52aWV3KTtcblxuY29uc3QgcGFyYW1ldGVycyA9IHtcblx0Z2V0VXBkYXRlVGltZSgpIHtcblx0XHRyZXR1cm4gZW5naW5lLnVwZGF0ZXIuZWxhcHNlZFRpbWU7XG5cdH0sXG5cdGdldFJlbmRlclRpbWUoKSB7XG5cdFx0cmV0dXJuIGVuZ2luZS5yZW5kZXJlci5lbGFwc2VkVGltZTtcblx0fSxcblx0Z2V0Q2FudmFzV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZW5naW5lLnNjcmVlbi5nZXRXaWR0aCgpO1xuXHR9LFxuXHRnZXRDYW52YXNIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZW5naW5lLnNjcmVlbi5nZXRIZWlnaHQoKTtcblx0fSxcbn07XG5cbi8vIGFwcGxpY2F0aW9uXG5jb25zdCBhcHAgPSBtYWluKHBhcmFtZXRlcnMpO1xuYXBwLnN0YXJ0KCk7XG5lbmdpbmUucm9vdCA9IGFwcCBhcyBhbnkgYXMgQ29tcG9uZW50O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbmNvbnNvbGUubG9nKGFwcCk7XG5cbi8vIHRlc3QgcGF1c2VcbnNldFRpbWVvdXQoKCkgPT4gZW5naW5lLnRpY2tlci5wYXVzZSgpLCA1MDAwKTtcbnNldFRpbWVvdXQoKCkgPT4gZW5naW5lLnRpY2tlci5wbGF5KCksIDEwMDAwKTtcblxuLy8gY3VzdG9tIGVuZ2luZVxuY29uc3QgY3VzdG9tRW5naW5lID0gbmV3IEN1c3RvbUVuZ2luZSgpO1xuY3VzdG9tRW5naW5lLnNjcmVlbi5mdWxsc2NyZWVuID0gZmFsc2U7XG5jdXN0b21FbmdpbmUuc2NyZWVuLmhlaWdodCA9IDYwMDtcbmN1c3RvbUVuZ2luZS51cGRhdGVyLmVuYWJsZWQgPSBmYWxzZTtcbmN1c3RvbUVuZ2luZS5yb290ID0gZW5naW5lLnJvb3Q7XG5jdXN0b21FbmdpbmUudGlja2VyLnBsYXkoKTtcbmN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbmN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3LnN0eWxlLnRvcCA9ICcwcHgnO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUubGVmdCA9ICc2MDBweCc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3KTtcblxuLy8gLy8gc2V0IGN1c3RvbSByZXNvdXJjZVxuZW5naW5lLnJlc291cmNlcy5yZXNvdXJjZXMuc2V0KFxuXHRURVNUX0NBTlZBUyxcblx0e1xuXHRcdGFzc2V0OiBURVNUX0NBTlZBUyxcblx0XHRpbWFnZTogY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcsXG5cdFx0bG9hZGVkOiB0cnVlLFxuXHR9IGFzIEltYWdlUmVzb3VyY2UsXG4pO1xuY3VzdG9tRW5naW5lLnJlc291cmNlcy5yZXNvdXJjZXMuc2V0KFxuXHRURVNUX0NBTlZBUyxcblx0e1xuXHRcdGFzc2V0OiBURVNUX0NBTlZBUyxcblx0XHRpbWFnZTogZW5naW5lLnBsYXRmb3JtLnZpZXcsXG5cdFx0bG9hZGVkOiB0cnVlLFxuXHR9IGFzIEltYWdlUmVzb3VyY2UsXG4pO1xuXG4vLyBjdXN0b20gcmVzb3VyY2UgcmVzb2x2ZXJcbmNvbnN0IHJlc291cmNlTWFuYWdlciA9IG5ldyBDdXN0b21SZXNvdXJjZU1hbmFnZXIoKTtcbnJlc291cmNlTWFuYWdlci5hbGlhc2VzLnNldChBUkNIRVIucmVwbGFjZSgnaWQ6JywgJycpLCBBUkNIRVJfSU1BR0UpO1xucmVzb3VyY2VNYW5hZ2VyLmFsaWFzZXMuc2V0KEFOSU1BTElTVC5yZXBsYWNlKCdpZDonLCAnJyksIEFOSU1BTElTVF9JTUFHRSk7XG5yZXNvdXJjZU1hbmFnZXIuaW5pdChlbmdpbmUpO1xucmVzb3VyY2VNYW5hZ2VyLmluaXQoY3VzdG9tRW5naW5lKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=