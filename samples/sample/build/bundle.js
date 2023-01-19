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
            matrix = _bitmapFill$matrix === void 0 ? emptyMatrix : _bitmapFill$matrix,
            fallback = bitmapFill.fallback;

        if (!src) {
          return 'transparent';
        }

        var resource = engine.resources.get(src);

        if (resource !== null && resource !== void 0 && resource.image) {
          var pattern = _jeng_canvas_engine__WEBPACK_IMPORTED_MODULE_0__.CanvasPatterns.bitmapPattern(resource.image, repeat, matrix, context);
          return pattern;
        }

        if (fallback) {
          return getCanvasPattern(fallback, colorTransform, context, engine);
        }

        return 'transparent';

      default:
        return 'transparent';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUvLi4vc3JjL2VuZ2luZS50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3NhbXBsZS8uLi9zcmMvcGF0dGVybnMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9wbGF0Zm9ybS50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vc3JjL2NvbXBvbmVudHMvY29udGFpbmVyLnRzIiwid2VicGFjazovL3NhbXBsZS8uLi9zcmMvY29tcG9uZW50cy9sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9jb3JlL2VuZ2luZS50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vc3JjL2NvcmUvZmVhdHVyZS50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vc3JjL2V4dGVuc2lvbnMvZGlzcGxheS50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vc3JjL2V4dGVuc2lvbnMva2V5LnRzIiwid2VicGFjazovL3NhbXBsZS8uLi9zcmMvZXh0ZW5zaW9ucy9waXZvdC50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vc3JjL2V4dGVuc2lvbnMvcG9pbnRlci50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vc3JjL2V4dGVuc2lvbnMvdHJhbnNmb3JtLnRzIiwid2VicGFjazovL3NhbXBsZS8uLi9zcmMvZXh0ZW5zaW9ucy91cGRhdGUudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9mZWF0dXJlcy9jb21wb25lbnRzLnRzIiwid2VicGFjazovL3NhbXBsZS8uLi9zcmMvZmVhdHVyZXMvZGVidWcudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9mZWF0dXJlcy9rZXlib2FyZC50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vc3JjL2ZlYXR1cmVzL2xvYWRpbmcudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9mZWF0dXJlcy9wbGF0Zm9ybS50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vc3JjL2ZlYXR1cmVzL3BvaW50ZXJzLnRzIiwid2VicGFjazovL3NhbXBsZS8uLi9zcmMvZmVhdHVyZXMvcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9mZWF0dXJlcy9yZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9mZWF0dXJlcy9zY3JlZW4udHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9mZWF0dXJlcy90aWNrZXIudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9mZWF0dXJlcy91cGRhdGVyLnRzIiwid2VicGFjazovL3NhbXBsZS8uLi9zcmMvYm91bmRzLnRzIiwid2VicGFjazovL3NhbXBsZS8uLi9zcmMvY29sb3ItdHJhbnNmb3JtLnRzIiwid2VicGFjazovL3NhbXBsZS8uLi9zcmMvbWF0cml4LnRzIiwid2VicGFjazovL3NhbXBsZS8uLi9zcmMvcG9pbnQudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9yZWN0YW5nbGUudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9jYW52YXMtaW1hZ2UtY29sb3IudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9jYW52YXMtaW1hZ2UudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9pbWFnZS50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vc3JjL3N0cmluZy50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vc3JjL3NjZW5lLnRzIiwid2VicGFjazovL3NhbXBsZS8uLi9zcmMvY2FudmFzL2VsbGlwc2UudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9jYW52YXMvcGF0aC50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vc3JjL2NhbnZhcy9yZWN0YW5nbGUudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9jYW52YXMvc2hhcGUudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9jYW52YXMvc3RyaW5nLnRzIiwid2VicGFjazovL3NhbXBsZS8uLi9zcmMvY2FudmFzL3N0eWxlLnRzIiwid2VicGFjazovL3NhbXBsZS8uLi9zcmMvZGF0YS9kYXRhLnRzIiwid2VicGFjazovL3NhbXBsZS8uLi9zcmMvZGF0YS9wYXRoLnRzIiwid2VicGFjazovL3NhbXBsZS8uLi9zcmMvZGF0YS9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9ncmFwaGljcy50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vc3JjL3NoYXBlLnRzIiwid2VicGFjazovL3NhbXBsZS8uLi9zcmMvY2FudmFzL3RleHQudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9kYXRhL2ZvbnQudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9kYXRhL2Zvcm1hdC50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vc3JjL2RhdGEvbWV0cmljcy50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vc3JjL3RleHQudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9lYXNpbmcudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy90d2Vlbi50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vc3JjL2ludGVyYWN0aXZlL2tleWJvYXJkLnRzIiwid2VicGFjazovL3NhbXBsZS8uLi9zcmMvaW50ZXJhY3RpdmUvbW91c2UudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3NyYy9pbnRlcmFjdGl2ZS90b3VjaC50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvYXJ0aWZhY3QudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2Fzc2V0cy50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvZW5naW5lL2VuZ2luZS50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvZW5naW5lL2ltYWdlLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9lbmdpbmUvcGxhdGZvcm0udHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2VuZ2luZS9yZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2Zwcy50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvcHJlbG9hZGVyLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy91bml0LnRzIiwid2VicGFjazovL3NhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zYW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBYSxZQUFiO0FBQUE7O0FBQUE7O0FBR0M7QUFBQTs7QUFBQTs7QUFDQztBQUNBLFVBQUssUUFBTCxHQUFnQixJQUFJLHFEQUFKLCtCQUFoQjtBQUNBLFVBQUssTUFBTCxHQUFjLElBQUksZ0RBQUosK0JBQWQ7QUFIRDtBQUlDOztBQVBGO0FBQUEsRUFBa0MsOENBQWxDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBRU0sSUFBVyxjQUFYOztBQUFOLFdBQWlCLGNBQWpCLEVBQStCO0FBQzlCLFdBQWdCLFlBQWhCLENBQTZCLEtBQTdCLEVBQTRDLEtBQTVDLEVBQTJELEVBQTNELEVBQTZFO0FBQzVFLFFBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFULEdBQWMsSUFBdEI7QUFDQSxRQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBVCxHQUFhLElBQXJCO0FBQ0EsUUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQWhCO0FBQ0EsUUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQWhCOztBQUVBLFFBQUksQ0FBQywrREFBdUIsRUFBdkIsQ0FBTCxFQUFpQztBQUNoQyxPQUFDLEdBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFQLEdBQXVCLEVBQUUs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QUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUd0RCxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQzdCLGdEQUFXLEVBQ1g7SUFDQyxLQUFLLEVBQUUsZ0RBQVc7SUFDbEIsS0FBSyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSTtJQUNqQyxNQUFNLEVBQUUsSUFBSTtDQUNLLENBQ2xCLENBQUM7QUFDRixZQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQ25DLGdEQUFXLEVBQ1g7SUFDQyxLQUFLLEVBQUUsZ0RBQVc7SUFDbEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSTtJQUMzQixNQUFNLEVBQUUsSUFBSTtDQUNLLENBQ2xCLENBQUM7QUFHRixNQUFNLGVBQWUsR0FBRyxJQUFJLHVEQUFxQixFQUFFLENBQUM7QUFDcEQsZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbURBQWMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsaURBQVksQ0FBQyxDQUFDO0FBQ3JFLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNEQUFpQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxvREFBZSxDQUFDLENBQUM7QUFDM0UsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVuZ2luZSB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgV2ViU2NyZWVuIH0gZnJvbSAnQGplbmcvd2ViJztcbmltcG9ydCB7IENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5leHBvcnQgY2xhc3MgQ2FudmFzRW5naW5lIGV4dGVuZHMgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybSA9IG5ldyBDYW52YXNQbGF0Zm9ybSh0aGlzKTtcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgV2ViU2NyZWVuKHRoaXMpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuZ2luZS5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3NjcmVlbic7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyYWN0aXZlL2tleWJvYXJkJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJhY3RpdmUvbW91c2UnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmFjdGl2ZS90b3VjaCc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3BsYXRmb3JtJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5leHBvcnQgdmFyIENhbnZhc1BhdHRlcm5zO1xuKGZ1bmN0aW9uIChDYW52YXNQYXR0ZXJucykge1xuICAgIGZ1bmN0aW9uIGNvbG9yUGF0dGVybihjb2xvciwgYWxwaGEsIGN0KSB7XG4gICAgICAgIGxldCByID0gY29sb3IgPj4gMTYgJiAweGZmO1xuICAgICAgICBsZXQgZyA9IGNvbG9yID4+IDggJiAweGZmO1xuICAgICAgICBsZXQgYiA9IGNvbG9yICYgMHhmZjtcbiAgICAgICAgbGV0IGEgPSBhbHBoYSAqIDB4ZmY7XG4gICAgICAgIGlmICghQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eShjdCkpIHtcbiAgICAgICAgICAgIHIgPSAociAqIGN0LnJlZE11bHRpcGxpZXIgKyBjdC5yZWRPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIGcgPSAoZyAqIGN0LmdyZWVuTXVsdGlwbGllciArIGN0LmdyZWVuT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgICAgICBiID0gKGIgKiBjdC5ibHVlTXVsdGlwbGllciArIGN0LmJsdWVPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIGEgPSAoYSAqIGN0LmFscGhhTXVsdGlwbGllciArIGN0LmFscGhhT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEgPCAweGZmKSB7XG4gICAgICAgICAgICByZXR1cm4gYHJnYmEoJHtyfSwgJHtnfSwgJHtifSwgJHthIC8gMHhmZn0pYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYHJnYigke3J9LCAke2d9LCAke2J9KWA7XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybiA9IGNvbG9yUGF0dGVybjtcbiAgICBmdW5jdGlvbiBhZGRHcmFkaWVudENvbG9ycyhwYXR0ZXJuLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBjb2xvcnNbaV07XG4gICAgICAgICAgICBjb25zdCBhbHBoYSA9IGFscGhhc1tpXTtcbiAgICAgICAgICAgIGxldCByYXRpbyA9IHJhdGlvc1tpXTtcbiAgICAgICAgICAgIGlmIChyYXRpbyA8IDApXG4gICAgICAgICAgICAgICAgcmF0aW8gPSAwO1xuICAgICAgICAgICAgaWYgKHJhdGlvID4gMSlcbiAgICAgICAgICAgICAgICByYXRpbyA9IDE7XG4gICAgICAgICAgICBjb25zdCBjb2xvclN0eWxlID0gY29sb3JQYXR0ZXJuKGNvbG9yLCBhbHBoYSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgcGF0dGVybi5hZGRDb2xvclN0b3AocmF0aW8sIGNvbG9yU3R5bGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLmFkZEdyYWRpZW50Q29sb3JzID0gYWRkR3JhZGllbnRDb2xvcnM7XG4gICAgZnVuY3Rpb24gcmFkaWFsR3JhZGllbnRQYXR0ZXJuKGJlZ2luWCwgYmVnaW5ZLCBiZWdpblJhZGl1cywgZW5kWCwgZW5kWSwgZW5kUmFkaXVzLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudChiZWdpblgsIGJlZ2luWSwgYmVnaW5SYWRpdXMsIGVuZFgsIGVuZFksIGVuZFJhZGl1cyk7XG4gICAgICAgIGFkZEdyYWRpZW50Q29sb3JzKHBhdHRlcm4sIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgfVxuICAgIENhbnZhc1BhdHRlcm5zLnJhZGlhbEdyYWRpZW50UGF0dGVybiA9IHJhZGlhbEdyYWRpZW50UGF0dGVybjtcbiAgICBmdW5jdGlvbiBsaW5lYXJHcmFkaWVudFBhdHRlcm4oYmVnaW5YLCBiZWdpblksIGVuZFgsIGVuZFksIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KGJlZ2luWCwgYmVnaW5ZLCBlbmRYLCBlbmRZKTtcbiAgICAgICAgYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMubGluZWFyR3JhZGllbnRQYXR0ZXJuID0gbGluZWFyR3JhZGllbnRQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGJpdG1hcFBhdHRlcm4oaW1hZ2UsIHJlcGVhdCwgbWF0cml4LCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVBhdHRlcm4oaW1hZ2UsIHJlcGVhdCA/ICdyZXBlYXQnIDogJ25vbmUnKTtcbiAgICAgICAgaWYgKHBhdHRlcm4pIHtcbiAgICAgICAgICAgIGNvbnN0IGRvbU1hdHJpeCA9IG5ldyBET01NYXRyaXgoKTtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5hID0gbWF0cml4LmEgPz8gMTtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5iID0gbWF0cml4LmIgPz8gMDtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5jID0gbWF0cml4LmMgPz8gMDtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5kID0gbWF0cml4LmQgPz8gMTtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5lID0gbWF0cml4LnR4ID8/IDA7XG4gICAgICAgICAgICBkb21NYXRyaXguZiA9IG1hdHJpeC50eSA/PyAwO1xuICAgICAgICAgICAgcGF0dGVybi5zZXRUcmFuc2Zvcm0oZG9tTWF0cml4KTtcbiAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMuYml0bWFwUGF0dGVybiA9IGJpdG1hcFBhdHRlcm47XG59KShDYW52YXNQYXR0ZXJucyB8fCAoQ2FudmFzUGF0dGVybnMgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGF0dGVybnMuanMubWFwIiwiaW1wb3J0IHsgV2ViUGxhdGZvcm0gfSBmcm9tICdAamVuZy93ZWInO1xuZXhwb3J0IGNsYXNzIENhbnZhc1BsYXRmb3JtIGV4dGVuZHMgV2ViUGxhdGZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFt0aGlzLnZpZXcuZ2V0Q29udGV4dCgnMmQnKV07XG4gICAgICAgIHRoaXMuY3VzdG9tQ29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dHNbdGhpcy5jb250ZXh0cy5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgc2F2ZUNvbnRleHQoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHRzLnB1c2goY29udGV4dCk7XG4gICAgfVxuICAgIHJlc3RvcmVDb250ZXh0KCkge1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZGVidWcud2FybmluZygnVHJ5aW5nIHRvIHJlc3RvcmUgbWFpbiBjb250ZXh0Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlQ3VzdG9tQ29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQ7XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbUNvbnRleHRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHRoaXMuY3VzdG9tQ29udGV4dHMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMudmlldztcbiAgICAgICAgaWYgKGNvbnRleHQuY2FudmFzLndpZHRoICE9PSB3aWR0aCkge1xuICAgICAgICAgICAgY29udGV4dC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGV4dC5jYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgZGVzdHJveUN1c3RvbUNvbnRleHQoY29udGV4dCkge1xuICAgICAgICB0aGlzLmN1c3RvbUNvbnRleHRzLnB1c2goY29udGV4dCk7XG4gICAgfVxuICAgIGJlZ2luKCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgIH1cbiAgICBlbmQoKSB7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdmlldy53aWR0aCwgdmlldy5oZWlnaHQpO1xuICAgIH1cbiAgICB1cGRhdGVTaXplKCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRXaWR0aCgpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0SGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW8gPSB0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0UGl4ZWxSYXRpbygpO1xuICAgICAgICBjb25zdCB2aWV3V2lkdGggPSBNYXRoLmZsb29yKHdpZHRoICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHZpZXdIZWlnaHQgPSBNYXRoLmZsb29yKGhlaWdodCAqIHBpeGVsUmF0aW8pO1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IHRoaXM7XG4gICAgICAgIGlmICh2aWV3LndpZHRoICE9PSB2aWV3V2lkdGggfHwgdmlldy5oZWlnaHQgIT09IHZpZXdIZWlnaHQpIHtcbiAgICAgICAgICAgIHZpZXcud2lkdGggPSB2aWV3V2lkdGg7XG4gICAgICAgICAgICB2aWV3LmhlaWdodCA9IHZpZXdIZWlnaHQ7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICAgICAgdmlldy5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGxhdGZvcm0uanMubWFwIiwiZXhwb3J0IGNvbnN0IENPTlRBSU5FUiA9ICdjb250YWluZXInO1xuZXhwb3J0IHZhciBDb250YWluZXI7XG4oZnVuY3Rpb24gKENvbnRhaW5lcikge1xuICAgIGZ1bmN0aW9uIG51bUNoaWxkcmVuKGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgcmV0dXJuIGtleXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBDb250YWluZXIubnVtQ2hpbGRyZW4gPSBudW1DaGlsZHJlbjtcbn0pKENvbnRhaW5lciB8fCAoQ29udGFpbmVyID0ge30pKTtcbmV4cG9ydCB2YXIgQ29udGFpbmVyRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDb250YWluZXJFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHJlbmRlcmVyIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJlci5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyB1cGRhdGVyIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgdXBkYXRlci5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlci5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi51cGRhdGUgPSB1cGRhdGU7XG4gICAgZnVuY3Rpb24gaGl0VGVzdChjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgcG9pbnRlcnMgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcG9pbnRlcnMuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgcG9pbnRlcnMuZGVwdGgrKztcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50ZXJzLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgY29udGV4dCwgcmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnRlcnMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0LCByZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0ga2V5cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnRlcnMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0LCByZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9pbnRlcnMuZGVwdGgtLTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24ga2V5VGVzdChjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsga2V5Ym9hcmQgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBrZXlib2FyZC5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAga2V5Ym9hcmQuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIGtleWJvYXJkLmRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5Ym9hcmQuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24ua2V5VGVzdCA9IGtleVRlc3Q7XG4gICAgZnVuY3Rpb24gbG9hZGVkKGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBsb2FkaW5nIH0gPSBlbmdpbmU7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgbG9hZGluZy5kZXB0aCsrO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gbG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzICs9IGNvbXBvbmVudENvbnRleHQucHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudENvbnRleHQubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzIC89IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBsb2FkaW5nLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGNvbXBvbmVudENvbnRleHQubG9hZGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgKz0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50Q29udGV4dC5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgLz0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvYWRpbmcuZGVwdGgtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb250YWluZXJFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5zZXQoQ09OVEFJTkVSLCB1cGRhdGUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KENPTlRBSU5FUiwgcmVuZGVyKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoQ09OVEFJTkVSLCBoaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMua2V5VGVzdC5zZXQoQ09OVEFJTkVSLCBrZXlUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChDT05UQUlORVIsIGxvYWRlZCk7XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENvbnRhaW5lckV4dGVuc2lvbiB8fCAoQ29udGFpbmVyRXh0ZW5zaW9uID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRhaW5lci5qcy5tYXAiLCJpbXBvcnQgeyBDb250YWluZXJFeHRlbnNpb24gfSBmcm9tICcuL2NvbnRhaW5lcic7XG5leHBvcnQgY29uc3QgTE9BREVSID0gJ2xvYWRlcic7XG5leHBvcnQgdmFyIExvYWRlcjtcbihmdW5jdGlvbiAoTG9hZGVyKSB7XG4gICAgZnVuY3Rpb24gZ2V0TG9hZGluZ1Byb2dyZXNzKGxvYWRlcikge1xuICAgICAgICByZXR1cm4gbG9hZGVyLmxvYWRpbmdQcm9ncmVzcyA/PyAwO1xuICAgIH1cbiAgICBMb2FkZXIuZ2V0TG9hZGluZ1Byb2dyZXNzID0gZ2V0TG9hZGluZ1Byb2dyZXNzO1xuICAgIGZ1bmN0aW9uIGlzTG9hZGVkKGxvYWRlcikge1xuICAgICAgICByZXR1cm4gbG9hZGVyLmxvYWRlZCA/PyBmYWxzZTtcbiAgICB9XG4gICAgTG9hZGVyLmlzTG9hZGVkID0gaXNMb2FkZWQ7XG4gICAgZnVuY3Rpb24gbmVlZExvYWRpbmdDaGVjayhsb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRlci5sb2FkaW5nQ2hlY2sgPz8gdHJ1ZTtcbiAgICB9XG4gICAgTG9hZGVyLm5lZWRMb2FkaW5nQ2hlY2sgPSBuZWVkTG9hZGluZ0NoZWNrO1xufSkoTG9hZGVyIHx8IChMb2FkZXIgPSB7fSkpO1xuZXhwb3J0IHZhciBMb2FkZXJFeHRlbnNpb247XG4oZnVuY3Rpb24gKExvYWRlckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGxvYWRlZChsb2FkZXIsIGVuZ2luZSkge1xuICAgICAgICBpZiAoIUxvYWRlci5uZWVkTG9hZGluZ0NoZWNrKGxvYWRlcikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBDb250YWluZXJFeHRlbnNpb24ubG9hZGVkKGxvYWRlciwgZW5naW5lKTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5sb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgbG9hZGVyLmxvYWRpbmdQcm9ncmVzcyA9IGNvbnRleHQucHJvZ3Jlc3M7XG4gICAgICAgIGlmIChjb250ZXh0LmxvYWRlZCAmJiAhbG9hZGVyLmxvYWRlZCkge1xuICAgICAgICAgICAgbG9hZGVyLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAobG9hZGVyLm9uTG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVyLm9uTG9hZGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgTG9hZGVyRXh0ZW5zaW9uLmxvYWRlZCA9IGxvYWRlZDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy51cGRhdGUuc2V0KExPQURFUiwgQ29udGFpbmVyRXh0ZW5zaW9uLnVwZGF0ZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoTE9BREVSLCBDb250YWluZXJFeHRlbnNpb24ucmVuZGVyKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoTE9BREVSLCBDb250YWluZXJFeHRlbnNpb24uaGl0VGVzdCk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5zZXQoTE9BREVSLCBsb2FkZWQpO1xuICAgIH1cbiAgICBMb2FkZXJFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShMb2FkZXJFeHRlbnNpb24gfHwgKExvYWRlckV4dGVuc2lvbiA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2FkZXIuanMubWFwIiwiaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuLi9mZWF0dXJlcy9yZW5kZXJlcic7XG5pbXBvcnQgeyBVcGRhdGVyIH0gZnJvbSAnLi4vZmVhdHVyZXMvdXBkYXRlcic7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi4vZmVhdHVyZXMvbG9hZGluZyc7XG5pbXBvcnQgeyBQb2ludGVycyB9IGZyb20gJy4uL2ZlYXR1cmVzL3BvaW50ZXJzJztcbmltcG9ydCB7IFRpY2tlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3RpY2tlcic7XG5pbXBvcnQgeyBDb250YWluZXJFeHRlbnNpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4uL2ZlYXR1cmVzL2RlYnVnJztcbmltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gJy4uL2ZlYXR1cmVzL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi4vZmVhdHVyZXMvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMb2FkZXJFeHRlbnNpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRlcic7XG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJy4uL2ZlYXR1cmVzL2tleWJvYXJkJztcbmV4cG9ydCBjbGFzcyBFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRlcHRoID0gMzI7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBDb21wb25lbnRzKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZXIgPSBuZXcgVXBkYXRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gbmV3IExvYWRpbmcodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIodGhpcyk7XG4gICAgICAgIHRoaXMucG9pbnRlcnMgPSBuZXcgUG9pbnRlcnModGhpcyk7XG4gICAgICAgIHRoaXMua2V5Ym9hcmQgPSBuZXcgS2V5Ym9hcmQodGhpcyk7XG4gICAgICAgIHRoaXMudGlja2VyID0gbmV3IFRpY2tlcih0aGlzKTtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IG5ldyBEZWJ1Zyh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgUmVzb3VyY2VzKHRoaXMpO1xuICAgICAgICBDb250YWluZXJFeHRlbnNpb24uaW5pdCh0aGlzKTtcbiAgICAgICAgTG9hZGVyRXh0ZW5zaW9uLmluaXQodGhpcyk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW5naW5lLmpzLm1hcCIsImV4cG9ydCBjbGFzcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmVhdHVyZS5qcy5tYXAiLCJleHBvcnQgdmFyIERpc3BsYXk7XG4oZnVuY3Rpb24gKERpc3BsYXkpIHtcbiAgICBmdW5jdGlvbiBpc1Zpc2libGUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQudmlzaWJsZSA/PyB0cnVlO1xuICAgIH1cbiAgICBEaXNwbGF5LmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbn0pKERpc3BsYXkgfHwgKERpc3BsYXkgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlzcGxheS5qcy5tYXAiLCJjb25zdCBoYW5kbGVyc01hcCA9IHtcbiAgICBrZXlEb3duOiAnb25LZXlEb3duJyxcbiAgICBrZXlQcmVzczogJ29uS2V5UHJlc3MnLFxuICAgIGtleVVwOiAnb25LZXlVcCcsXG59O1xuZXhwb3J0IHZhciBLZXk7XG4oZnVuY3Rpb24gKEtleSkge1xuICAgIGZ1bmN0aW9uIGlzS2V5RW5hYmxlZChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGtleS5rZXlFbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIEtleS5pc0tleUVuYWJsZWQgPSBpc0tleUVuYWJsZWQ7XG4gICAgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChjb21wb25lbnQsIGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJOYW1lID0gaGFuZGxlcnNNYXBbZXZlbnQudHlwZV07XG4gICAgICAgIGlmIChoYW5kbGVyTmFtZSAmJiBjb21wb25lbnRbaGFuZGxlck5hbWVdKSB7XG4gICAgICAgICAgICBjb21wb25lbnRbaGFuZGxlck5hbWVdKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBLZXkuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG59KShLZXkgfHwgKEtleSA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1rZXkuanMubWFwIiwiZXhwb3J0IHZhciBQaXZvdDtcbihmdW5jdGlvbiAoUGl2b3QpIHtcbiAgICBmdW5jdGlvbiBnZXRYKHBpdm90LCB3aWR0aCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WCB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFgpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RYICogd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFggPSBnZXRYO1xuICAgIGZ1bmN0aW9uIGdldFkocGl2b3QsIGhlaWdodCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WSB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFkpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RZICogaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBQaXZvdC5nZXRZID0gZ2V0WTtcbiAgICBmdW5jdGlvbiBoYXNWYWx1ZXMocGl2b3QpIHtcbiAgICAgICAgY29uc3QgeyBwaXZvdFgsIHBpdm90WSB9ID0gcGl2b3Q7XG4gICAgICAgIHJldHVybiAhIXBpdm90WCB8fCAhIXBpdm90WTtcbiAgICB9XG4gICAgUGl2b3QuaGFzVmFsdWVzID0gaGFzVmFsdWVzO1xufSkoUGl2b3QgfHwgKFBpdm90ID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBpdm90LmpzLm1hcCIsImNvbnN0IGhhbmRsZXJzTWFwID0ge1xuICAgIHBvaW50ZXJEb3duOiAnb25Qb2ludGVyRG93bicsXG4gICAgcG9pbnRlclVwOiAnb25Qb2ludGVyVXAnLFxuICAgIHBvaW50ZXJNb3ZlOiAnb25Qb2ludGVyTW92ZScsXG4gICAgcG9pbnRlckNhbmNlbDogJ29uUG9pbnRlckNhbmNlbCcsXG4gICAgcG9pbnRlck92ZXI6ICdvblBvaW50ZXJPdmVyJyxcbiAgICBwb2ludGVyT3V0OiAnb25Qb2ludGVyT3V0Jyxcbn07XG5leHBvcnQgdmFyIFBvaW50ZXI7XG4oZnVuY3Rpb24gKFBvaW50ZXIpIHtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJFbmFibGVkKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50ZXIucG9pbnRlckVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkID0gaXNQb2ludGVyRW5hYmxlZDtcbiAgICBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KHBvaW50ZXIsIHR5cGUsIHgsIHksIGdsb2JhbFgsIGdsb2JhbFksIGlkKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJOYW1lID0gaGFuZGxlcnNNYXBbdHlwZV07XG4gICAgICAgIGlmIChoYW5kbGVyTmFtZSAmJiBwb2ludGVyW2hhbmRsZXJOYW1lXSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgICAgZ2xvYmFsWCxcbiAgICAgICAgICAgICAgICBnbG9iYWxZLFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHBvaW50ZXJbaGFuZGxlck5hbWVdKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xufSkoUG9pbnRlciB8fCAoUG9pbnRlciA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb2ludGVyLmpzLm1hcCIsImV4cG9ydCB2YXIgVHJhbnNmb3JtO1xuKGZ1bmN0aW9uIChUcmFuc2Zvcm0pIHtcbiAgICBmdW5jdGlvbiBnZXRNYXRyaXgodHJhbnNmb3JtLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKG1hdHJpeCkge1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBtYXRyaXguYSA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSBtYXRyaXguYiA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSBtYXRyaXguYyA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSBtYXRyaXguZCA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gbWF0cml4LnR4ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQudHkgPSBtYXRyaXgudHkgPz8gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvdGF0aW9uIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHRyYW5zZm9ybS5zY2FsZVggPz8gdHJhbnNmb3JtLnNjYWxlID8/IDE7XG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IHRyYW5zZm9ybS5zY2FsZVkgPz8gdHJhbnNmb3JtLnNjYWxlID8/IDE7XG4gICAgICAgIHJlc3VsdC50eCA9IHRyYW5zZm9ybS54ID8/IDA7XG4gICAgICAgIHJlc3VsdC50eSA9IHRyYW5zZm9ybS55ID8/IDA7XG4gICAgICAgIGlmIChyb3RhdGlvbikge1xuICAgICAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3Mocm90YXRpb24pO1xuICAgICAgICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW4ocm90YXRpb24pO1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBjb3MgKiBzY2FsZVg7XG4gICAgICAgICAgICByZXN1bHQuYiA9IHNpbiAqIHNjYWxlWDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gLXNpbiAqIHNjYWxlWTtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gY29zICogc2NhbGVZO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hID0gc2NhbGVYO1xuICAgICAgICByZXN1bHQuYiA9IDA7XG4gICAgICAgIHJlc3VsdC5jID0gMDtcbiAgICAgICAgcmVzdWx0LmQgPSBzY2FsZVk7XG4gICAgfVxuICAgIFRyYW5zZm9ybS5nZXRNYXRyaXggPSBnZXRNYXRyaXg7XG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JUcmFuc2Zvcm0odHJhbnNmb3JtLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0ucmVkTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuTXVsdGlwbGllciA/PyAxO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLmFscGhhT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0ucmVkT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5ncmVlbk9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5ibHVlT2Zmc2V0ID8/IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxwaGEgPSB0cmFuc2Zvcm0uYWxwaGEgPz8gMTtcbiAgICAgICAgY29uc3QgeyB0aW50IH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmICh0aW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IGNvbG9yID0gMCwgdmFsdWUgPSAxIH0gPSB0aW50O1xuICAgICAgICAgICAgY29uc3QgdmFsdWVJbnZlcnRlZCA9IDEgLSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHIgPSAoY29sb3IgPj4gMTYpICYgMHhmZjtcbiAgICAgICAgICAgIGNvbnN0IGcgPSAoY29sb3IgPj4gOCkgJiAweGZmO1xuICAgICAgICAgICAgY29uc3QgYiA9IGNvbG9yICYgMHhmZjtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYTtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSB2YWx1ZUludmVydGVkO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgICAgICAgICByZXN1bHQucmVkT2Zmc2V0ID0gciAqIHZhbHVlO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gZyAqIHZhbHVlO1xuICAgICAgICAgICAgcmVzdWx0LmJsdWVPZmZzZXQgPSBiICogdmFsdWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHsgYnJpZ2h0bmVzcyB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAoYnJpZ2h0bmVzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoYnJpZ2h0bmVzcyA+IDEpIHtcbiAgICAgICAgICAgICAgICBicmlnaHRuZXNzID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGJyaWdodG5lc3MgPCAtMSkge1xuICAgICAgICAgICAgICAgIGJyaWdodG5lc3MgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSAxIC0gTWF0aC5hYnMoYnJpZ2h0bmVzcyk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIGlmIChicmlnaHRuZXNzID4gMCkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IGJyaWdodG5lc3MgKiAyNTU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGE7XG4gICAgICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHBlcmNlbnQ7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gcGVyY2VudDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IHBlcmNlbnQ7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hbHBoYU11bHRpcGxpZXIgPSBhbHBoYTtcbiAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSAxO1xuICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmJsdWVNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldENvbG9yVHJhbnNmb3JtID0gZ2V0Q29sb3JUcmFuc2Zvcm07XG59KShUcmFuc2Zvcm0gfHwgKFRyYW5zZm9ybSA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFuc2Zvcm0uanMubWFwIiwiZXhwb3J0IHZhciBVcGRhdGU7XG4oZnVuY3Rpb24gKFVwZGF0ZSkge1xuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5lbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIFVwZGF0ZS5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbXBvbmVudCwgdGltZSkge1xuICAgICAgICBpZiAoY29tcG9uZW50Lm9uVXBkYXRlKSB7XG4gICAgICAgICAgICBjb21wb25lbnQub25VcGRhdGUodGltZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVXBkYXRlLnVwZGF0ZSA9IHVwZGF0ZTtcbn0pKFVwZGF0ZSB8fCAoVXBkYXRlID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVwZGF0ZS5qcy5tYXAiLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRzIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmhpdFRlc3QgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMua2V5VGVzdCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSBuZXcgTWFwKCk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50cy5qcy5tYXAiLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBEZWJ1ZyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmluZm9zID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmVycm9ycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy53YXJuaW5ncyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICB9XG4gICAgaW5mbyguLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoYXJncyk7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuaW5mb3MuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMuaW5mb3Muc2V0KGlkLCBjb3VudCk7XG4gICAgfVxuICAgIGVycm9yKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5lcnJvcnMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICB0aGlzLmVycm9ycy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG4gICAgd2FybmluZyguLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoYXJncyk7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMud2FybmluZ3MuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMud2FybmluZ3Muc2V0KGlkLCBjb3VudCk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVidWcuanMubWFwIiwiaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5pbXBvcnQgeyBLZXkgfSBmcm9tICcuLi9leHRlbnNpb25zL2tleSc7XG5leHBvcnQgY2xhc3MgS2V5Ym9hcmQgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIGRpc3BhdGNoKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rZXlFdmVudCA9IGV2ZW50O1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaENvbXBvbmVudChyb290KTtcbiAgICB9XG4gICAgZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUtleS5pc0tleUVuYWJsZWQoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLmtleVRlc3QuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgIH1cbiAgICAgICAgS2V5LmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCB0aGlzLmtleUV2ZW50KTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1rZXlib2FyZC5qcy5tYXAiLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChyb290KTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvYWRpbmcuanMubWFwIiwiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAamVuZy9jb3JlJztcbmV4cG9ydCBjbGFzcyBXZWJQbGF0Zm9ybSBleHRlbmRzIFBsYXRmb3JtIHtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBsYXRmb3JtLmpzLm1hcCIsImltcG9ydCB7IE1hdHJpeCwgUG9pbnQgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuLi9leHRlbnNpb25zL2Rpc3BsYXknO1xuaW1wb3J0IHsgUG9pbnRlciB9IGZyb20gJy4uL2V4dGVuc2lvbnMvcG9pbnRlcic7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9leHRlbnNpb25zL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBQb2ludGVycyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nbG9iYWwgPSBQb2ludC5lbXB0eSgpO1xuICAgICAgICB0aGlzLmxvY2FsID0gUG9pbnQuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5wb2ludGVySWQgPSAwO1xuICAgICAgICB0aGlzLnBvaW50ZXJUeXBlID0gJ3BvaW50ZXJEb3duJztcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBtYXRyaXg6IE1hdHJpeC5lbXB0eSgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICBkaXNwYXRjaCh0eXBlLCB4LCB5LCBpZCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9jYWwueCA9IHg7XG4gICAgICAgIHRoaXMubG9jYWwueSA9IHk7XG4gICAgICAgIHRoaXMuZ2xvYmFsLnggPSB4O1xuICAgICAgICB0aGlzLmdsb2JhbC55ID0geTtcbiAgICAgICAgdGhpcy5wb2ludGVySWQgPSBpZDtcbiAgICAgICAgdGhpcy5wb2ludGVyVHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIE1hdHJpeC5zZXRFbXB0eShiYXNlLm1hdHJpeCk7XG4gICAgICAgIHRoaXMuZGVwdGgrKztcbiAgICAgICAgdGhpcy5kaXNwYXRjaENvbXBvbmVudChyb290LCBiYXNlLCBmYWxzZSk7XG4gICAgfVxuICAgIHVwZGF0ZUxvY2FsKGNvbXBvbmVudCwgcGFyZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgTWF0cml4LmNvbmNhdChwYXJlbnQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50KGNvbnRleHQubWF0cml4LCB0aGlzLmdsb2JhbCwgdGhpcy5sb2NhbCk7XG4gICAgfVxuICAgIGRpc3BhdGNoQ29tcG9uZW50KGNvbXBvbmVudCwgcGFyZW50LCBwYXJlbnRSZXN1bHQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghRGlzcGxheS5pc1Zpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50UmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnBvaW50ZXJPdmVyICYmIHRoaXMucG9pbnRlclR5cGUgPT09ICdwb2ludGVyTW92ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxvY2FsKGNvbXBvbmVudCwgcGFyZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMubG9jYWw7XG4gICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdXQnLCB4LCB5LCB0aGlzLmdsb2JhbC54LCB0aGlzLmdsb2JhbC55LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnBvaW50ZXJPdmVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMb2NhbChjb21wb25lbnQsIHBhcmVudCk7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMubG9jYWw7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsIHRoaXMucG9pbnRlclR5cGUsIHgsIHksIHRoaXMuZ2xvYmFsLngsIHRoaXMuZ2xvYmFsLnksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJUeXBlID09PSAncG9pbnRlck1vdmUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiAhY29tcG9uZW50LnBvaW50ZXJPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3ZlcicsIHgsIHksIHRoaXMuZ2xvYmFsLngsIHRoaXMuZ2xvYmFsLnksIHRoaXMucG9pbnRlcklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXJlc3VsdCAmJiBjb21wb25lbnQucG9pbnRlck92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdXQnLCB4LCB5LCB0aGlzLmdsb2JhbC54LCB0aGlzLmdsb2JhbC55LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wb2ludGVyT3ZlciA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvaW50ZXJzLmpzLm1hcCIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXggfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuLi9leHRlbnNpb25zL2Rpc3BsYXknO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgUmVuZGVyZXIgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW107XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXTtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIG1hdHJpeDogTWF0cml4LmVtcHR5KCksXG4gICAgICAgICAgICAgICAgY29sb3JUcmFuc2Zvcm06IENvbG9yVHJhbnNmb3JtLmVtcHR5KCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0c1t0aGlzLmRlcHRoXSA9IGNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFEaXNwbGF5LmlzVmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBUcmFuc2Zvcm0uZ2V0TWF0cml4KGNvbXBvbmVudCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICBUcmFuc2Zvcm0uZ2V0Q29sb3JUcmFuc2Zvcm0oY29tcG9uZW50LCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgTWF0cml4LmNvbmNhdChwYXJlbnQubWF0cml4LCBjb250ZXh0Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgpO1xuICAgICAgICBDb2xvclRyYW5zZm9ybS5jb25jYXQocGFyZW50LmNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LmNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy5lbmdpbmUucGxhdGZvcm0uYmVnaW4oKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5kZXB0aCsrO1xuICAgICAgICBNYXRyaXguY29weSh0aGlzLmVuZ2luZS5zY3JlZW4uZ2V0TWF0cml4KCksIGJhc2UubWF0cml4KTtcbiAgICAgICAgQ29sb3JUcmFuc2Zvcm0uc2V0RW1wdHkoYmFzZS5jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50KHJvb3QsIGJhc2UpO1xuICAgICAgICB0aGlzLmVuZ2luZS5wbGF0Zm9ybS5lbmQoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlbmRlcmVyLmpzLm1hcCIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IHZhciBSZXNvdXJjZTtcbihmdW5jdGlvbiAoUmVzb3VyY2UpIHtcbiAgICBmdW5jdGlvbiBnZXRQcm9ncmVzcyhyZXNvdXJjZSkge1xuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzb3VyY2UubG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzb3VyY2UuYnl0ZXNUb3RhbCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvdXJjZS5ieXRlc0xvYWRlZCAvIHJlc291cmNlLmJ5dGVzVG90YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFJlc291cmNlLmdldFByb2dyZXNzID0gZ2V0UHJvZ3Jlc3M7XG59KShSZXNvdXJjZSB8fCAoUmVzb3VyY2UgPSB7fSkpO1xuZXhwb3J0IGNsYXNzIFJlc291cmNlcyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZXNvbHZlcnMgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIGdldChhc3NldCkge1xuICAgICAgICBpZiAoIWFzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzb3VyY2UgPSB0aGlzLnJlc291cmNlcy5nZXQoYXNzZXQpO1xuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICByZXNvdXJjZSA9IHRoaXMucmVzb2x2ZShhc3NldCk7XG4gICAgICAgICAgICB0aGlzLnJlc291cmNlcy5zZXQoYXNzZXQsIHJlc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgfVxuICAgIHJlc29sdmUoYXNzZXQpIHtcbiAgICAgICAgZm9yIChjb25zdCByZXNvbHZlciBvZiB0aGlzLnJlc29sdmVycykge1xuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSByZXNvbHZlcihhc3NldCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgaWYgKHJlc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5naW5lLmRlYnVnLndhcm5pbmcoYFJlc291cmNlIG5vdCByZXNvbHZlZDogJHthc3NldH1gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVzb3VyY2VzLmpzLm1hcCIsImltcG9ydCB7IFNjcmVlbiB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuZXhwb3J0IGNsYXNzIFdlYlNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG4gICAgZ2V0V2luZG93V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB9XG4gICAgZ2V0V2luZG93SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cbiAgICBnZXRXaW5kb3dQaXhlbFJhdGlvKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmRldmljZVBpeGVsUmF0aW8gPz8gMTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY3JlZW4uanMubWFwIiwiZXhwb3J0IGNsYXNzIFRpY2tlciB7XG4gICAgY29uc3RydWN0b3IoZW5naW5lKSB7XG4gICAgICAgIHRoaXMuZnJhbWVSYXRlID0gMDtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9ICh0aW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS51cGRhdGVyLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmxvYWRpbmcudXBkYXRlKCk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5yZW5kZXJlci5yZW5kZXIoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVGcmFtZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSAoY3VycmVudFRpbWUgLSB0aGlzLnRpbWUpIC8gMTAwMDtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmV4dEZyYW1lKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgIH1cbiAgICBnZXQgaXNQYXVzZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhdXNlZDtcbiAgICB9XG4gICAgcGxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU5leHRGcmFtZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB1cGRhdGVOZXh0RnJhbWUoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZUZyYW1lKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aWNrZXIuanMubWFwIiwiaW1wb3J0IHsgVXBkYXRlIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy91cGRhdGUnO1xuaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgVXBkYXRlciBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChyb290KTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbiAgICB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVVwZGF0ZS5pc0VuYWJsZWQoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllcyhjb21wb25lbnQpO1xuICAgICAgICBVcGRhdGUudXBkYXRlKGNvbXBvbmVudCwgdGhpcy50aW1lKTtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVByb3BlcnRpZXMoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZW5naW5lLmNvbXBvbmVudHMucHJvcGVydGllcy5mb3JFYWNoKChoYW5kbGVyLCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudFtwcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgdGhpcy5lbmdpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11cGRhdGVyLmpzLm1hcCIsImV4cG9ydCB2YXIgQm91bmRzO1xuKGZ1bmN0aW9uIChCb3VuZHMpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1pblg6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtaW5ZOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWF4WDogTnVtYmVyLk1JTl9WQUxVRSxcbiAgICAgICAgICAgIG1heFk6IE51bWJlci5NSU5fVkFMVUUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIEJvdW5kcy5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KGJvdW5kcykge1xuICAgICAgICBib3VuZHMubWluWCA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGJvdW5kcy5taW5ZID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1heFggPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWF4WSA9IE51bWJlci5NSU5fVkFMVUU7XG4gICAgfVxuICAgIEJvdW5kcy5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkoYm91bmRzKSB7XG4gICAgICAgIHJldHVybiBib3VuZHMubWluWCA9PT0gTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1pblkgPT09IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5tYXhYID09PSBOdW1iZXIuTUlOX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWF4WSA9PT0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICB9XG4gICAgQm91bmRzLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIHRvUmVjdGFuZ2xlKGJvdW5kcywgcmVjdGFuZ2xlKSB7XG4gICAgICAgIGNvbnN0IHsgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgfSA9IGJvdW5kcztcbiAgICAgICAgcmVjdGFuZ2xlLnggPSBtaW5YO1xuICAgICAgICByZWN0YW5nbGUueSA9IG1pblk7XG4gICAgICAgIHJlY3RhbmdsZS53aWR0aCA9IG1heFggLSBtaW5YO1xuICAgICAgICByZWN0YW5nbGUuaGVpZ2h0ID0gbWF4WSAtIG1pblk7XG4gICAgfVxuICAgIEJvdW5kcy50b1JlY3RhbmdsZSA9IHRvUmVjdGFuZ2xlO1xuICAgIGZ1bmN0aW9uIHRlc3RYKGJvdW5kcywgeCkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RYID0gdGVzdFg7XG4gICAgZnVuY3Rpb24gdGVzdFkoYm91bmRzLCB5KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFkgPSB0ZXN0WTtcbiAgICBmdW5jdGlvbiB0ZXN0KGJvdW5kcywgeCwgeSkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0ID0gdGVzdDtcbiAgICBmdW5jdGlvbiB0ZXN0UG9pbnQoYm91bmRzLCBwb2ludCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0UG9pbnQgPSB0ZXN0UG9pbnQ7XG59KShCb3VuZHMgfHwgKEJvdW5kcyA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib3VuZHMuanMubWFwIiwiZXhwb3J0IHZhciBDb2xvclRyYW5zZm9ybTtcbihmdW5jdGlvbiAoQ29sb3JUcmFuc2Zvcm0pIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFscGhhTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIHJlZE11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBncmVlbk11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBibHVlTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGFscGhhT2Zmc2V0OiAwLFxuICAgICAgICAgICAgcmVkT2Zmc2V0OiAwLFxuICAgICAgICAgICAgZ3JlZW5PZmZzZXQ6IDAsXG4gICAgICAgICAgICBibHVlT2Zmc2V0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkoY3QpIHtcbiAgICAgICAgcmV0dXJuIGN0LnJlZE11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmdyZWVuTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmFscGhhTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYmx1ZU9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHlXaXRoQWxwaGEoY3QpIHtcbiAgICAgICAgcmV0dXJuIGN0LnJlZE11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmdyZWVuTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LnJlZE9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5PZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmJsdWVPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmFscGhhT2Zmc2V0ID09PSAwO1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5pc0VtcHR5V2l0aEFscGhhID0gaXNFbXB0eVdpdGhBbHBoYTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShjdCkge1xuICAgICAgICBjdC5yZWRNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuZ3JlZW5NdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuYmx1ZU11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5hbHBoYU11bHRpcGxpZXIgPSAxO1xuICAgICAgICBjdC5yZWRPZmZzZXQgPSAwO1xuICAgICAgICBjdC5ncmVlbk9mZnNldCA9IDA7XG4gICAgICAgIGN0LmJsdWVPZmZzZXQgPSAwO1xuICAgICAgICBjdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gY29weShmcm9tLCB0bykge1xuICAgICAgICB0by5hbHBoYU11bHRpcGxpZXIgPSBmcm9tLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgdG8ucmVkTXVsdGlwbGllciA9IGZyb20ucmVkTXVsdGlwbGllcjtcbiAgICAgICAgdG8uZ3JlZW5NdWx0aXBsaWVyID0gZnJvbS5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIHRvLmJsdWVNdWx0aXBsaWVyID0gZnJvbS5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgdG8uYWxwaGFPZmZzZXQgPSBmcm9tLmFscGhhT2Zmc2V0O1xuICAgICAgICB0by5yZWRPZmZzZXQgPSBmcm9tLnJlZE9mZnNldDtcbiAgICAgICAgdG8uZ3JlZW5PZmZzZXQgPSBmcm9tLmdyZWVuT2Zmc2V0O1xuICAgICAgICB0by5ibHVlT2Zmc2V0ID0gZnJvbS5ibHVlT2Zmc2V0O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBjb25jYXQoY3QxLCBjdDAsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCBhbHBoYU11bHRpcGxpZXIgPSBjdDEuYWxwaGFNdWx0aXBsaWVyICogY3QwLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgcmVkTXVsdGlwbGllciA9IGN0MS5yZWRNdWx0aXBsaWVyICogY3QwLnJlZE11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGdyZWVuTXVsdGlwbGllciA9IGN0MS5ncmVlbk11bHRpcGxpZXIgKiBjdDAuZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBibHVlTXVsdGlwbGllciA9IGN0MS5ibHVlTXVsdGlwbGllciAqIGN0MC5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgYWxwaGFPZmZzZXQgPSBjdDEuYWxwaGFNdWx0aXBsaWVyICogY3QwLmFscGhhT2Zmc2V0ICsgY3QxLmFscGhhT2Zmc2V0O1xuICAgICAgICBjb25zdCByZWRPZmZzZXQgPSBjdDEucmVkTXVsdGlwbGllciAqIGN0MC5yZWRPZmZzZXQgKyBjdDEucmVkT2Zmc2V0O1xuICAgICAgICBjb25zdCBncmVlbk9mZnNldCA9IGN0MS5ncmVlbk11bHRpcGxpZXIgKiBjdDAuZ3JlZW5PZmZzZXQgKyBjdDEuZ3JlZW5PZmZzZXQ7XG4gICAgICAgIGNvbnN0IGJsdWVPZmZzZXQgPSBjdDEuYmx1ZU11bHRpcGxpZXIgKiBjdDAuYmx1ZU9mZnNldCArIGN0MS5ibHVlT2Zmc2V0O1xuICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHJlZE11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSBncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IGJsdWVNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSBhbHBoYU9mZnNldDtcbiAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IHJlZE9mZnNldDtcbiAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gZ3JlZW5PZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gYmx1ZU9mZnNldDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uY29uY2F0ID0gY29uY2F0O1xufSkoQ29sb3JUcmFuc2Zvcm0gfHwgKENvbG9yVHJhbnNmb3JtID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbG9yLXRyYW5zZm9ybS5qcy5tYXAiLCJleHBvcnQgdmFyIE1hdHJpeDtcbihmdW5jdGlvbiAoTWF0cml4KSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiAxLFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGM6IDAsXG4gICAgICAgICAgICBkOiAxLFxuICAgICAgICAgICAgdHg6IDAsXG4gICAgICAgICAgICB0eTogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTWF0cml4LmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShtYXRyaXgpIHtcbiAgICAgICAgcmV0dXJuIG1hdHJpeC5hID09PSAxXG4gICAgICAgICAgICAmJiBtYXRyaXguYiA9PT0gMFxuICAgICAgICAgICAgJiYgbWF0cml4LmMgPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC5kID09PSAxXG4gICAgICAgICAgICAmJiBtYXRyaXgudHggPT09IDBcbiAgICAgICAgICAgICYmIG1hdHJpeC50eSA9PT0gMDtcbiAgICB9XG4gICAgTWF0cml4LmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KG1hdHJpeCkge1xuICAgICAgICBtYXRyaXguYSA9IDE7XG4gICAgICAgIG1hdHJpeC5iID0gMDtcbiAgICAgICAgbWF0cml4LmMgPSAwO1xuICAgICAgICBtYXRyaXguZCA9IDE7XG4gICAgICAgIG1hdHJpeC50eCA9IDA7XG4gICAgICAgIG1hdHJpeC50eSA9IDA7XG4gICAgfVxuICAgIE1hdHJpeC5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoZnJvbSwgdG8pIHtcbiAgICAgICAgdG8uYSA9IGZyb20uYTtcbiAgICAgICAgdG8uYiA9IGZyb20uYjtcbiAgICAgICAgdG8uYyA9IGZyb20uYztcbiAgICAgICAgdG8uZCA9IGZyb20uZDtcbiAgICAgICAgdG8udHggPSBmcm9tLnR4O1xuICAgICAgICB0by50eSA9IGZyb20udHk7XG4gICAgfVxuICAgIE1hdHJpeC5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBjb25jYXQobWF0cml4MCwgbWF0cml4MSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGEgPSBtYXRyaXgxLmEgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmM7XG4gICAgICAgIGNvbnN0IGIgPSBtYXRyaXgxLmEgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmIgKiBtYXRyaXgwLmQ7XG4gICAgICAgIGNvbnN0IGMgPSBtYXRyaXgxLmMgKiBtYXRyaXgwLmEgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmM7XG4gICAgICAgIGNvbnN0IGQgPSBtYXRyaXgxLmMgKiBtYXRyaXgwLmIgKyBtYXRyaXgxLmQgKiBtYXRyaXgwLmQ7XG4gICAgICAgIGNvbnN0IHR4ID0gbWF0cml4MS50eCAqIG1hdHJpeDAuYSArIG1hdHJpeDEudHkgKiBtYXRyaXgwLmMgKyBtYXRyaXgwLnR4O1xuICAgICAgICBjb25zdCB0eSA9IG1hdHJpeDEudHggKiBtYXRyaXgwLmIgKyBtYXRyaXgxLnR5ICogbWF0cml4MC5kICsgbWF0cml4MC50eTtcbiAgICAgICAgcmVzdWx0LmEgPSBhO1xuICAgICAgICByZXN1bHQuYiA9IGI7XG4gICAgICAgIHJlc3VsdC5jID0gYztcbiAgICAgICAgcmVzdWx0LmQgPSBkO1xuICAgICAgICByZXN1bHQudHggPSB0eDtcbiAgICAgICAgcmVzdWx0LnR5ID0gdHk7XG4gICAgfVxuICAgIE1hdHJpeC5jb25jYXQgPSBjb25jYXQ7XG4gICAgZnVuY3Rpb24gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KSB7XG4gICAgICAgIHJldHVybiBtYXRyaXguYSAqIG1hdHJpeC5kIC0gbWF0cml4LmIgKiBtYXRyaXguYztcbiAgICB9XG4gICAgTWF0cml4LmdldERldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQ7XG4gICAgZnVuY3Rpb24gaW52ZXJ0KG1hdHJpeCwgcmVzdWx0KSB7XG4gICAgICAgIGxldCBkZXRlcm1pbmFudCA9IGdldERldGVybWluYW50KG1hdHJpeCk7XG4gICAgICAgIGlmIChkZXRlcm1pbmFudCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0LmEgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LmQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnR4ID0gLW1hdHJpeC50eDtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IC1tYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRlcm1pbmFudCA9IDEuMCAvIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmEgPSBtYXRyaXguYSAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmIgPSAtbWF0cml4LmIgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gLW1hdHJpeC5jICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuZCA9IG1hdHJpeC5kICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQudHggPSAtcmVzdWx0LmEgKiBtYXRyaXgudHggLSByZXN1bHQuYyAqIG1hdHJpeC50eTtcbiAgICAgICAgICAgIHJlc3VsdC50eSA9IC1yZXN1bHQuYiAqIG1hdHJpeC50eCAtIHJlc3VsdC5kICogbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hdHJpeC5pbnZlcnQgPSBpbnZlcnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJlc3VsdC54ID0geCAqIG1hdHJpeC5hICsgeSAqIG1hdHJpeC5jICsgbWF0cml4LnR4O1xuICAgICAgICByZXN1bHQueSA9IHggKiBtYXRyaXguYiArIHkgKiBtYXRyaXguZCArIG1hdHJpeC50eTtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybVBvaW50ID0gdHJhbnNmb3JtUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnRMb2NhbChtYXRyaXgsIHBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmVzdWx0LnggPSB4ICogbWF0cml4LmEgKyB5ICogbWF0cml4LmM7XG4gICAgICAgIHJlc3VsdC55ID0geCAqIG1hdHJpeC5iICsgeSAqIG1hdHJpeC5kO1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnRMb2NhbCA9IHRyYW5zZm9ybVBvaW50TG9jYWw7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtSW52ZXJzZVBvaW50KG1hdHJpeCwgcG9pbnQsIHJlc3VsdCkge1xuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudChtYXRyaXgpO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC54ID0gLW1hdHJpeC50eDtcbiAgICAgICAgICAgIHJlc3VsdC55ID0gLW1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRldGVybWluYW50ID0gMSAvIGRldGVybWluYW50O1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgICAgIHJlc3VsdC54ID0gZGV0ZXJtaW5hbnQgKiAobWF0cml4LmMgKiAobWF0cml4LnR5IC0geSkgKyBtYXRyaXguZCAqICh4IC0gbWF0cml4LnR4KSk7XG4gICAgICAgICAgICByZXN1bHQueSA9IGRldGVybWluYW50ICogKG1hdHJpeC5hICogKHkgLSBtYXRyaXgudHkpICsgbWF0cml4LmIgKiAobWF0cml4LnR4IC0geCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1JbnZlcnNlUG9pbnQgPSB0cmFuc2Zvcm1JbnZlcnNlUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtQm91bmRzKG1hdHJpeCwgYm91bmRzLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyBhLCBiLCBjLCBkLCB0eCwgdHksIH0gPSBtYXRyaXg7XG4gICAgICAgIGNvbnN0IHJ4ID0gYm91bmRzLng7XG4gICAgICAgIGNvbnN0IHJ5ID0gYm91bmRzLnk7XG4gICAgICAgIGNvbnN0IHJyID0gcnggKyBib3VuZHMud2lkdGg7XG4gICAgICAgIGNvbnN0IHJiID0gcnkgKyBib3VuZHMuaGVpZ2h0O1xuICAgICAgICBjb25zdCBueDEgPSByeCAqIGEgKyByeSAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkxID0gcnggKiBiICsgcnkgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54MiA9IHJyICogYSArIHJ5ICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTIgPSByciAqIGIgKyByeSAqIGQgKyB0eTtcbiAgICAgICAgY29uc3QgbngzID0gcnIgKiBhICsgcmIgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MyA9IHJyICogYiArIHJiICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDQgPSByeCAqIGEgKyByYiAqIGMgKyB0eDtcbiAgICAgICAgY29uc3Qgbnk0ID0gcnggKiBiICsgcmIgKiBkICsgdHk7XG4gICAgICAgIGxldCBsZWZ0ID0gbngxO1xuICAgICAgICBpZiAobGVmdCA+IG54Mikge1xuICAgICAgICAgICAgbGVmdCA9IG54MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54Mykge1xuICAgICAgICAgICAgbGVmdCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54NCkge1xuICAgICAgICAgICAgbGVmdCA9IG54NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9wID0gbnkxO1xuICAgICAgICBpZiAodG9wID4gbnkyKSB7XG4gICAgICAgICAgICB0b3AgPSBueTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcCA+IG55Mykge1xuICAgICAgICAgICAgdG9wID0gbnkzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3AgPiBueTQpIHtcbiAgICAgICAgICAgIHRvcCA9IG55NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmlnaHQgPSBueDE7XG4gICAgICAgIGlmIChyaWdodCA8IG54Mikge1xuICAgICAgICAgICAgcmlnaHQgPSBueDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0IDwgbngzKSB7XG4gICAgICAgICAgICByaWdodCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgPCBueDQpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbng0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBib3R0b20gPSBueTE7XG4gICAgICAgIGlmIChib3R0b20gPCBueTIpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tIDwgbnkzKSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdHRvbSA8IG55NCkge1xuICAgICAgICAgICAgYm90dG9tID0gbnk0O1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC54ID0gbGVmdDtcbiAgICAgICAgcmVzdWx0LnkgPSB0b3A7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGJvdHRvbSAtIHRvcDtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybUJvdW5kcyA9IHRyYW5zZm9ybUJvdW5kcztcbn0pKE1hdHJpeCB8fCAoTWF0cml4ID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hdHJpeC5qcy5tYXAiLCJleHBvcnQgdmFyIFBvaW50O1xuKGZ1bmN0aW9uIChQb2ludCkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuICAgIFBvaW50LmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gbGVuZ3RoKHBvaW50KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfVxuICAgIFBvaW50Lmxlbmd0aCA9IGxlbmd0aDtcbiAgICBmdW5jdGlvbiBhbmdsZShwb2ludCkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihwb2ludC55LCBwb2ludC54KTtcbiAgICB9XG4gICAgUG9pbnQuYW5nbGUgPSBhbmdsZTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludC54ID09PSAwICYmIHBvaW50LnkgPT09IDA7XG4gICAgfVxuICAgIFBvaW50LmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGVxdWFscyhwb2ludDAsIHBvaW50MSkge1xuICAgICAgICByZXR1cm4gcG9pbnQwLnggPT09IHBvaW50MS54ICYmIHBvaW50MC55ID09PSBwb2ludDEueTtcbiAgICB9XG4gICAgUG9pbnQuZXF1YWxzID0gZXF1YWxzO1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KHBvaW50KSB7XG4gICAgICAgIHBvaW50LnggPSAwO1xuICAgICAgICBwb2ludC55ID0gMDtcbiAgICB9XG4gICAgUG9pbnQuc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBjb3B5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC54ID0gc291cmNlLng7XG4gICAgICAgIHRhcmdldC55ID0gc291cmNlLnk7XG4gICAgfVxuICAgIFBvaW50LmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZShwb2ludCwgdGhpY2tuZXNzKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGxlbmd0aChwb2ludCk7XG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpY2tuZXNzIC8gdmFsdWU7XG4gICAgICAgICAgICBwb2ludC54ICo9IHZhbHVlO1xuICAgICAgICAgICAgcG9pbnQueSAqPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQb2ludC5ub3JtYWxpemUgPSBub3JtYWxpemU7XG4gICAgZnVuY3Rpb24gZGlzdGFuY2UocG9pbnQwLCBwb2ludDEpIHtcbiAgICAgICAgY29uc3QgZHggPSBwb2ludDAueCAtIHBvaW50MS54O1xuICAgICAgICBjb25zdCBkeSA9IHBvaW50MC55IC0gcG9pbnQxLnk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cbiAgICBQb2ludC5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIGZ1bmN0aW9uIGludGVycG9sYXRlKGJlZ2luLCBlbmQsIHZhbHVlLCByZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0LnggPSBiZWdpbi54ICsgdmFsdWUgKiAoZW5kLnggLSBiZWdpbi54KTtcbiAgICAgICAgcmVzdWx0LnkgPSBiZWdpbi55ICsgdmFsdWUgKiAoZW5kLnkgLSBiZWdpbi55KTtcbiAgICB9XG4gICAgUG9pbnQuaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcbiAgICBmdW5jdGlvbiBwb2xhcihwb2ludCwgbGVuZ3RoLCBhbmdsZSkge1xuICAgICAgICBwb2ludC54ID0gbGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgICBwb2ludC55ID0gbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIH1cbiAgICBQb2ludC5wb2xhciA9IHBvbGFyO1xufSkoUG9pbnQgfHwgKFBvaW50ID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvaW50LmpzLm1hcCIsImV4cG9ydCB2YXIgUmVjdGFuZ2xlO1xuKGZ1bmN0aW9uIChSZWN0YW5nbGUpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFJlY3RhbmdsZS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIHNldEVtcHR5KHJlY3RhbmdsZSkge1xuICAgICAgICByZWN0YW5nbGUueCA9IDA7XG4gICAgICAgIHJlY3RhbmdsZS55ID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLndpZHRoID0gMDtcbiAgICAgICAgcmVjdGFuZ2xlLmhlaWdodCA9IDA7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGludGVyc2VjdGlvbihzb3VyY2UsIHRhcmdldCwgcmVzdWx0KSB7XG4gICAgICAgIGxldCB7IHgsIHksIHdpZHRoLCBoZWlnaHQsIH0gPSBzb3VyY2U7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0YXJnZXQueDtcbiAgICAgICAgY29uc3QgdG9wID0gdGFyZ2V0Lnk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGFyZ2V0LnggKyB0YXJnZXQud2lkdGg7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRhcmdldC55ICsgdGFyZ2V0LmhlaWdodDtcbiAgICAgICAgaWYgKHggPCBsZWZ0KSB7XG4gICAgICAgICAgICB3aWR0aCAtPSBsZWZ0IC0geDtcbiAgICAgICAgICAgIHggPSBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh4ICsgd2lkdGggPiByaWdodCkge1xuICAgICAgICAgICAgd2lkdGggPSByaWdodCAtIHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgPCB0b3ApIHtcbiAgICAgICAgICAgIGhlaWdodCAtPSB0b3AgLSB5O1xuICAgICAgICAgICAgeSA9IHRvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSArIGhlaWdodCA+IGJvdHRvbSkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gYm90dG9tIC0geTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgICAgICB3aWR0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICAgIGhlaWdodCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnggPSB4O1xuICAgICAgICByZXN1bHQueSA9IHk7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHdpZHRoO1xuICAgICAgICByZXN1bHQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuaW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uO1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0YW5nbGUud2lkdGggPT09IDAgfHwgcmVjdGFuZ2xlLmhlaWdodCA9PT0gMDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIGNvbnRhaW5zKHJlY3RhbmdsZSwgcG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZS54IDwgcG9pbnQueFxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnggKyByZWN0YW5nbGUud2lkdGggPiBwb2ludC54XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueSA8IHBvaW50LnlcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS55ICsgcmVjdGFuZ2xlLmhlaWdodCA+IHBvaW50Lnk7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5jb250YWlucyA9IGNvbnRhaW5zO1xuICAgIGZ1bmN0aW9uIHJvdW5kKHJlY3RhbmdsZSkge1xuICAgICAgICByZWN0YW5nbGUueCA9IE1hdGgucm91bmQocmVjdGFuZ2xlLngpO1xuICAgICAgICByZWN0YW5nbGUueSA9IE1hdGgucm91bmQocmVjdGFuZ2xlLnkpO1xuICAgICAgICByZWN0YW5nbGUud2lkdGggPSBNYXRoLnJvdW5kKHJlY3RhbmdsZS53aWR0aCk7XG4gICAgICAgIHJlY3RhbmdsZS5oZWlnaHQgPSBNYXRoLnJvdW5kKHJlY3RhbmdsZS5oZWlnaHQpO1xuICAgIH1cbiAgICBSZWN0YW5nbGUucm91bmQgPSByb3VuZDtcbn0pKFJlY3RhbmdsZSB8fCAoUmVjdGFuZ2xlID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlY3RhbmdsZS5qcy5tYXAiLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0sIE1hdHJpeCwgUmVjdGFuZ2xlIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBJbWFnZUV4dGVuc2lvbiwgSU1BR0UgfSBmcm9tICcuL2ltYWdlJztcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuY29uc3Qgc2NyZWVuQm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb247XG4oZnVuY3Rpb24gKENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICAgICAgY29uc3QgcGxhdGZvcm0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IHBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgICAgIGlmIChDb2xvclRyYW5zZm9ybS5pc0VtcHR5V2l0aEFscGhhKGNvbG9yVHJhbnNmb3JtKSkge1xuICAgICAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjdXN0b21Db250ZXh0ID0gcGxhdGZvcm0uY3JlYXRlQ3VzdG9tQ29udGV4dCgpO1xuICAgICAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICAgICAgYm91bmRzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybUJvdW5kcyhtYXRyaXgsIGJvdW5kcywgYm91bmRzKTtcbiAgICAgICAgICAgIGlmIChSZWN0YW5nbGUuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2NyZWVuQm91bmRzLndpZHRoID0gY3VzdG9tQ29udGV4dC5jYW52YXMud2lkdGg7XG4gICAgICAgICAgICBzY3JlZW5Cb3VuZHMuaGVpZ2h0ID0gY3VzdG9tQ29udGV4dC5jYW52YXMuaGVpZ2h0O1xuICAgICAgICAgICAgUmVjdGFuZ2xlLmludGVyc2VjdGlvbihib3VuZHMsIHNjcmVlbkJvdW5kcywgYm91bmRzKTtcbiAgICAgICAgICAgIGlmIChSZWN0YW5nbGUuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVjdGFuZ2xlLnJvdW5kKGJvdW5kcyk7XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LnNldFRyYW5zZm9ybSgpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5jbGVhclJlY3QoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGN1c3RvbUNvbnRleHQuZ2V0SW1hZ2VEYXRhKGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnN0IHJtID0gY29sb3JUcmFuc2Zvcm0ucmVkTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IGdtID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3QgYm0gPSBjb2xvclRyYW5zZm9ybS5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IGFtID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3Qgcm8gPSBjb2xvclRyYW5zZm9ybS5yZWRPZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBnbyA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgYm8gPSBjb2xvclRyYW5zZm9ybS5ibHVlT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgYW8gPSBjb2xvclRyYW5zZm9ybS5hbHBoYU9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gaW1hZ2VEYXRhO1xuICAgICAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IGRhdGE7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogcm0gKyBybztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogZ20gKyBnbztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogYm0gKyBibztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogYW0gKyBhbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgYm91bmRzLngsIGJvdW5kcy55KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKGN1c3RvbUNvbnRleHQuY2FudmFzLCBib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCwgYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgcGxhdGZvcm0uZGVzdHJveUN1c3RvbUNvbnRleHQoY3VzdG9tQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgSW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KElNQUdFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiB8fCAoQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYW52YXMtaW1hZ2UtY29sb3IuanMubWFwIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSB9IGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0IHZhciBDYW52YXNJbWFnZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzSW1hZ2VFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0MmQgPSBlbmdpbmUucGxhdGZvcm0uZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIEltYWdlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChJTUFHRSwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNJbWFnZUV4dGVuc2lvbiB8fCAoQ2FudmFzSW1hZ2VFeHRlbnNpb24gPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FudmFzLWltYWdlLmpzLm1hcCIsImV4cG9ydCB2YXIgSW1hZ2VSZXNvdXJjZTtcbihmdW5jdGlvbiAoSW1hZ2VSZXNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIHJlc29sdmUoYXNzZXQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBleHRlbnNpb24gPSBhc3NldC5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgICBzd2l0Y2ggKGV4dGVuc2lvbikge1xuICAgICAgICAgICAgY2FzZSAncG5nJzpcbiAgICAgICAgICAgIGNhc2UgJ2pwZyc6XG4gICAgICAgICAgICBjYXNlICd3ZWJwJzpcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzTG9hZGVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBieXRlc1RvdGFsOiAwLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBhc3NldDtcbiAgICAgICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy5sb2coYGltYWdlIGxvYWRlZDogJHthc3NldH1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnaW1hZ2UgbG9hZCBlcnJvcicsIGUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgSW1hZ2VSZXNvdXJjZS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb2x2ZSk7XG4gICAgfVxuICAgIEltYWdlUmVzb3VyY2UuaW5pdCA9IGluaXQ7XG59KShJbWFnZVJlc291cmNlIHx8IChJbWFnZVJlc291cmNlID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsImV4cG9ydCB2YXIgU3RyaW5nUmVzb3VyY2U7XG4oZnVuY3Rpb24gKFN0cmluZ1Jlc291cmNlKSB7XG4gICAgZnVuY3Rpb24gcmVzb2x2ZShhc3NldCwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGFzc2V0LnNwbGl0KCcuJykucG9wKCk7XG4gICAgICAgIHN3aXRjaCAoZXh0ZW5zaW9uKSB7XG4gICAgICAgICAgICBjYXNlICd0eHQnOlxuICAgICAgICAgICAgY2FzZSAnanNvbic6XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBieXRlc0xvYWRlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXNUb3RhbDogMCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCBhc3NldCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5ieXRlc0xvYWRlZCA9IGUubG9hZGVkO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5ieXRlc1RvdGFsID0gZS50b3RhbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy5sb2coYHN0cmluZyBsb2FkZWQ6ICR7YXNzZXR9YCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmRhdGEgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5ieXRlc0xvYWRlZCA9IHJlc291cmNlLmJ5dGVzVG90YWw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdzdHJpbmcgbG9hZCBlcnJvcicsIGUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBTdHJpbmdSZXNvdXJjZS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb2x2ZSk7XG4gICAgfVxuICAgIFN0cmluZ1Jlc291cmNlLmluaXQgPSBpbml0O1xufSkoU3RyaW5nUmVzb3VyY2UgfHwgKFN0cmluZ1Jlc291cmNlID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0cmluZy5qcy5tYXAiLCJpbXBvcnQgeyBSZXNvdXJjZSwgQ29udGFpbmVyRXh0ZW5zaW9uLCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgU3RyaW5nUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuZXhwb3J0IGNvbnN0IFNDRU5FID0gJ3NjZW5lJztcbmV4cG9ydCB2YXIgU2NlbmVFeHRlbnNpb247XG4oZnVuY3Rpb24gKFNjZW5lRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gbG9hZGVkKHNjZW5lLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5sb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgaWYgKHNjZW5lLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBDb250YWluZXJFeHRlbnNpb24ubG9hZGVkKHNjZW5lLCBlbmdpbmUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeyBzcmMgfSA9IHNjZW5lO1xuICAgICAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IFJlc291cmNlLmdldFByb2dyZXNzKHJlc291cmNlKTtcbiAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gISFyZXNvdXJjZT8ubG9hZGVkICYmICEhcmVzb3VyY2U/LmRhdGE7XG4gICAgICAgICAgICBpZiAocmVzb3VyY2UgJiYgcmVzb3VyY2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLmNoaWxkcmVuID0gSlNPTi5wYXJzZShyZXNvdXJjZS5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoYHNjZW5lIHBhcnNpbmcgZXJyb3I6ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBTY2VuZUV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoU0NFTkUsIENvbnRhaW5lckV4dGVuc2lvbi5oaXRUZXN0KTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChTQ0VORSwgQ29udGFpbmVyRXh0ZW5zaW9uLnJlbmRlcik7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5zZXQoU0NFTkUsIENvbnRhaW5lckV4dGVuc2lvbi51cGRhdGUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KFNDRU5FLCBsb2FkZWQpO1xuICAgICAgICBTdHJpbmdSZXNvdXJjZS5pbml0KGVuZ2luZSk7XG4gICAgfVxuICAgIFNjZW5lRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoU2NlbmVFeHRlbnNpb24gfHwgKFNjZW5lRXh0ZW5zaW9uID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjZW5lLmpzLm1hcCIsImNvbnN0IFBJXzIgPSBNYXRoLlBJICogMjtcbmV4cG9ydCBmdW5jdGlvbiBhcHBseUVsbGlwc2UoZGF0YSwgaGFzRmlsbCwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCByYWRpdXMgPSAwLCByYWRpdXNYLCByYWRpdXNZLCB9ID0gZGF0YTtcbiAgICBjb25zdCByeCA9IHJhZGl1c1ggPz8gcmFkaXVzO1xuICAgIGNvbnN0IHJ5ID0gcmFkaXVzWSA/PyByYWRpdXM7XG4gICAgaWYgKHJ4ID09PSAwIHx8IHJ5ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmVsbGlwc2UoeCwgeSwgcngsIHJ5LCAwLCAwLCBQSV8yKTtcbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVsbGlwc2UuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q29tbWFuZChjb21tYW5kLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBjb21tYW5kO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtb3ZlVG8nOlxuICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKG1vdmVUby54ID8/IDAsIG1vdmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2xpbmVUbyc6XG4gICAgICAgICAgICBjb25zdCBsaW5lVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8obGluZVRvLnggPz8gMCwgbGluZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3VydmVUbyc6XG4gICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyhjdXJ2ZVRvLmN4ID8/IDAsIGN1cnZlVG8uY3kgPz8gMCwgY3VydmVUby54ID8/IDAsIGN1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjdWJpY0N1cnZlVG8nOlxuICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gY29tbWFuZDtcbiAgICAgICAgICAgIGNvbnRleHQuYmV6aWVyQ3VydmVUbyhjdWJpY0N1cnZlVG8uY3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLmN5ID8/IDAsIGN1YmljQ3VydmVUby5zeCA/PyAwLCBjdWJpY0N1cnZlVG8uc3kgPz8gMCwgY3ViaWNDdXJ2ZVRvLnggPz8gMCwgY3ViaWNDdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBhdGgoZGF0YSwgaGFzRmlsbCwgY29udGV4dCkge1xuICAgIGlmICghZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gZGF0YVtpXTtcbiAgICAgICAgYXBwbHlDb21tYW5kKGNvbW1hbmQsIGNvbnRleHQpO1xuICAgIH1cbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGguanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UmVjdGFuZ2xlKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgd2lkdGggPSAwLCBoZWlnaHQgPSAwLCB9ID0gZGF0YTtcbiAgICBpZiAod2lkdGggPT09IDAgfHwgaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LnJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgaWYgKGhhc0ZpbGwpIHtcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWN0YW5nbGUuanMubWFwIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IE1hdHJpeCwgUG9pbnQsIFJlY3RhbmdsZSwgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IFNoYXBlRXh0ZW5zaW9uLCBTSEFQRSwgU2hhcGUgfSBmcm9tICcuLi9zaGFwZSc7XG5pbXBvcnQgeyBhcHBseVJlY3RhbmdsZSB9IGZyb20gJy4vcmVjdGFuZ2xlJztcbmltcG9ydCB7IGFwcGx5RWxsaXBzZSB9IGZyb20gJy4vZWxsaXBzZSc7XG5pbXBvcnQgeyBhcHBseVBhdGggfSBmcm9tICcuL3BhdGgnO1xuaW1wb3J0IHsgYXBwbHlTdHJpbmcgfSBmcm9tICcuL3N0cmluZyc7XG5pbXBvcnQgeyBzZXRGaWxsU3R5bGUsIHNldFN0cm9rZVN0eWxlIH0gZnJvbSAnLi9zdHlsZSc7XG5jb25zdCBib3VuZHMgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmNvbnN0IG9mZnNldCA9IFBvaW50LmVtcHR5KCk7XG5mdW5jdGlvbiByZW5kZXJHcmFwaGljcyhkYXRhLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgY29uc3QgeyBmaWxsLCBzdHJva2UgfSA9IGRhdGE7XG4gICAgY29uc3QgaGFzRmlsbCA9ICEhZmlsbCB8fCBmaWxsID09PSAwO1xuICAgIGNvbnN0IGhhc1N0cm9rZSA9ICEhc3Ryb2tlIHx8IHN0cm9rZSA9PT0gMDtcbiAgICBpZiAoIWhhc0ZpbGwgJiYgIWhhc1N0cm9rZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBleGlzdCA9IHRydWU7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBkYXRhO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdyZWN0YW5nbGUnOlxuICAgICAgICAgICAgZXhpc3QgPSBhcHBseVJlY3RhbmdsZShkYXRhLCBoYXNGaWxsLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlbGxpcHNlJzpcbiAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlFbGxpcHNlKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BhdGgnOlxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGRhdGE7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhdGguZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IGFwcGx5U3RyaW5nKHBhdGguZGF0YSwgaGFzRmlsbCwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHBhdGguZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IGFwcGx5UGF0aChwYXRoLmRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhpc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICghZXhpc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBzZXRGaWxsU3R5bGUoZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIH1cbiAgICBpZiAoaGFzU3Ryb2tlKSB7XG4gICAgICAgIHNldFN0cm9rZVN0eWxlKHN0cm9rZSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxufVxuZXhwb3J0IHZhciBDYW52YXNTaGFwZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzU2hhcGVFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoc2hhcGUsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHNoYXBlO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgUG9pbnQuc2V0RW1wdHkob2Zmc2V0KTtcbiAgICAgICAgaWYgKFBpdm90Lmhhc1ZhbHVlcyhzaGFwZSkpIHtcbiAgICAgICAgICAgIFNoYXBlLmNhbGN1bGF0ZUJvdW5kcyhzaGFwZSwgYm91bmRzKTtcbiAgICAgICAgICAgIGlmIChSZWN0YW5nbGUuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2Zmc2V0LnggPSBQaXZvdC5nZXRYKHNoYXBlLCBib3VuZHMud2lkdGgpO1xuICAgICAgICAgICAgb2Zmc2V0LnkgPSBQaXZvdC5nZXRZKHNoYXBlLCBib3VuZHMud2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IGVuZ2luZS5wbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoUG9pbnQuaXNFbXB0eShvZmZzZXQpKSB7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnRMb2NhbChtYXRyaXgsIG9mZnNldCwgb2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHggKyBvZmZzZXQueCwgbWF0cml4LnR5ICsgb2Zmc2V0LnkpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyR3JhcGhpY3MoZGF0YVtpXSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQyZCwgZW5naW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJlbmRlckdyYXBoaWNzKGRhdGEsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0MmQsIGVuZ2luZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzU2hhcGVFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIFNoYXBlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucmVuZGVyLnNldChTSEFQRSwgcmVuZGVyKTtcbiAgICB9XG4gICAgQ2FudmFzU2hhcGVFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNTaGFwZUV4dGVuc2lvbiB8fCAoQ2FudmFzU2hhcGVFeHRlbnNpb24gPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2hhcGUuanMubWFwIiwiaW1wb3J0IHsgR3JhcGhpY3NTdHJpbmdSZWFkZXIgfSBmcm9tICcuLi9kYXRhL3N0cmluZyc7XG5pbXBvcnQgeyBhcHBseUNvbW1hbmQgfSBmcm9tICcuL3BhdGgnO1xuY29uc3QgcmVhZGVyID0gbmV3IEdyYXBoaWNzU3RyaW5nUmVhZGVyKCk7XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlTdHJpbmcoZGF0YSwgaGFzRmlsbCwgY29udGV4dCkge1xuICAgIGlmICghZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHJlYWRlci5zZXRQYXRoKGRhdGEpO1xuICAgIHdoaWxlIChyZWFkZXIucmVhZE5leHQoKSkge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gcmVhZGVyLmdldENvbW1hbmQoKTtcbiAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGFwcGx5Q29tbWFuZChjb21tYW5kLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzRmlsbCkge1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0cmluZy5qcy5tYXAiLCJpbXBvcnQgeyBDYW52YXNQYXR0ZXJucyB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5jb25zdCBlbXB0eUFycmF5ID0gW107XG5jb25zdCBlbXB0eU1hdHJpeCA9IE1hdHJpeC5lbXB0eSgpO1xuZnVuY3Rpb24gZ2V0Q2FudmFzUGF0dGVybihmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgaWYgKHR5cGVvZiBmaWxsID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGZpbGwsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBmaWxsID09PSAnb2JqZWN0Jykge1xuICAgICAgICBzd2l0Y2ggKGZpbGwudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc29saWQnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHNvbGlkID0gZmlsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKHNvbGlkLmNvbG9yID8/IDAsIHNvbGlkLmFscGhhID8/IDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGNhc2UgJ2xpbmVhcic6XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZWFyID0gZmlsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FudmFzUGF0dGVybnMubGluZWFyR3JhZGllbnRQYXR0ZXJuKGxpbmVhci5iZWdpblggPz8gMCwgbGluZWFyLmJlZ2luWSA/PyAwLCBsaW5lYXIuZW5kWCA/PyAwLCBsaW5lYXIuZW5kWSA/PyAwLCBsaW5lYXIuY29sb3JzID8/IGVtcHR5QXJyYXksIGxpbmVhci5hbHBoYXMgPz8gZW1wdHlBcnJheSwgbGluZWFyLnJhdGlvcyA/PyBlbXB0eUFycmF5LCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCk7XG4gICAgICAgICAgICBjYXNlICdyYWRpYWwnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZGlhbCA9IGZpbGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbnZhc1BhdHRlcm5zLnJhZGlhbEdyYWRpZW50UGF0dGVybihyYWRpYWwuYmVnaW5YID8/IDAsIHJhZGlhbC5iZWdpblkgPz8gMCwgcmFkaWFsLmJlZ2luUmFkaXVzID8/IDAsIHJhZGlhbC5lbmRYID8/IHJhZGlhbC5iZWdpblggPz8gMCwgcmFkaWFsLmVuZFkgPz8gcmFkaWFsLmJlZ2luWSA/PyAwLCByYWRpYWwuZW5kUmFkaXVzID8/IDAsIHJhZGlhbC5jb2xvcnMgPz8gZW1wdHlBcnJheSwgcmFkaWFsLmFscGhhcyA/PyBlbXB0eUFycmF5LCByYWRpYWwucmF0aW9zID8/IGVtcHR5QXJyYXksIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGNhc2UgJ2JpdG1hcCc6XG4gICAgICAgICAgICAgICAgY29uc3QgYml0bWFwRmlsbCA9IGZpbGw7XG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXBlYXQgPSB0cnVlLCBzcmMsIG1hdHJpeCA9IGVtcHR5TWF0cml4LCBmYWxsYmFjaywgfSA9IGJpdG1hcEZpbGw7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSBDYW52YXNQYXR0ZXJucy5iaXRtYXBQYXR0ZXJuKHJlc291cmNlLmltYWdlLCByZXBlYXQsIG1hdHJpeCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZmFsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldENhbnZhc1BhdHRlcm4oZmFsbGJhY2ssIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd0cmFuc3BhcmVudCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbGxTdHlsZShmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBnZXRDYW52YXNQYXR0ZXJuKGZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0cm9rZVN0eWxlKHN0cm9rZSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGlmICh0eXBlb2Ygc3Ryb2tlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKHN0cm9rZSwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGNvbnRleHQubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgICAgIGNvbnRleHQubGluZUpvaW4gPSAncm91bmQnO1xuICAgICAgICBjb250ZXh0Lm1pdGVyTGltaXQgPSAxMDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHN0cm9rZSA9PT0gJ29iamVjdCcgJiYgc3Ryb2tlLmZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gZ2V0Q2FudmFzUGF0dGVybihzdHJva2UuZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSk7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gc3Ryb2tlLnRoaWNrbmVzcyA/PyAxO1xuICAgICAgICBjb250ZXh0LmxpbmVDYXAgPSBzdHJva2UuY2FwcyA/PyAncm91bmQnO1xuICAgICAgICBjb250ZXh0LmxpbmVKb2luID0gc3Ryb2tlLmpvaW50cyA/PyAncm91bmQnO1xuICAgICAgICBjb250ZXh0Lm1pdGVyTGltaXQgPSBzdHJva2UubWl0ZXJMaW1pdCA/PyAxMDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5qcy5tYXAiLCJpbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IFBhdGhDb21tYW5kIH0gZnJvbSAnLi9wYXRoJztcbmltcG9ydCB7IEdyYXBoaWNzU3RyaW5nIH0gZnJvbSAnLi9zdHJpbmcnO1xuZXhwb3J0IHZhciBSZWN0YW5nbGVEYXRhO1xuKGZ1bmN0aW9uIChSZWN0YW5nbGVEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgd2lkdGggPSAwLCBoZWlnaHQgPSAwLCB9ID0gZGF0YTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4LCB5KTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQpO1xuICAgIH1cbiAgICBSZWN0YW5nbGVEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFJlY3RhbmdsZURhdGEgfHwgKFJlY3RhbmdsZURhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBFbGxpcHNlRGF0YTtcbihmdW5jdGlvbiAoRWxsaXBzZURhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCByYWRpdXMgPSAwLCByYWRpdXNYLCByYWRpdXNZLCB9ID0gZGF0YTtcbiAgICAgICAgY29uc3QgcnggPSByYWRpdXNYID8/IHJhZGl1cztcbiAgICAgICAgY29uc3QgcnkgPSByYWRpdXNZID8/IHJhZGl1cztcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4IC0gcngsIHkgLSByeSk7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCArIHJ4LCB5ICsgcnkpO1xuICAgIH1cbiAgICBFbGxpcHNlRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShFbGxpcHNlRGF0YSB8fCAoRWxsaXBzZURhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBQYXRoRGF0YTtcbihmdW5jdGlvbiAoUGF0aERhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aERhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHBhdGhEYXRhO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tYW5kID0gZGF0YVtpXTtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBQYXRoRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShQYXRoRGF0YSB8fCAoUGF0aERhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBHcmFwaGljc0RhdGE7XG4oZnVuY3Rpb24gKEdyYXBoaWNzRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBkYXRhO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICAgICAgUmVjdGFuZ2xlRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgICAgICAgICAgIEVsbGlwc2VEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGF0aCc6XG4gICAgICAgICAgICAgICAgUGF0aERhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc0RhdGEgfHwgKEdyYXBoaWNzRGF0YSA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhLmpzLm1hcCIsImltcG9ydCB7IEJvdW5kcyB9IGZyb20gJ0BqZW5nL2dlb20nO1xuZXhwb3J0IHZhciBQYXRoQ29tbWFuZDtcbihmdW5jdGlvbiAoUGF0aENvbW1hbmQpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aCwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gcGF0aDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdtb3ZlVG8nOlxuICAgICAgICAgICAgY2FzZSAnbGluZVRvJzpcbiAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgbW92ZVRvLnggPz8gMCwgbW92ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjdXJ2ZVRvJzpcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1cnZlVG8uY3ggPz8gMCwgY3VydmVUby5jeSA/PyAwKTtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1cnZlVG8ueCA/PyAwLCBjdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjdWJpY0N1cnZlVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8uY3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLmN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLnN4ID8/IDAsIGN1YmljQ3VydmVUby5zeSA/PyAwKTtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby54ID8/IDAsIGN1YmljQ3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShQYXRoQ29tbWFuZCB8fCAoUGF0aENvbW1hbmQgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGF0aC5qcy5tYXAiLCJpbXBvcnQgeyBQYXRoQ29tbWFuZCwgfSBmcm9tICcuL3BhdGgnO1xuY29uc3QgTlVNQkVSU19DT1VOVCA9IHtcbiAgICBNOiAyLFxuICAgIG06IDIsXG4gICAgTDogMixcbiAgICBsOiAyLFxuICAgIEg6IDEsXG4gICAgaDogMSxcbiAgICBWOiAxLFxuICAgIHY6IDEsXG4gICAgQzogNixcbiAgICBjOiA2LFxuICAgIFM6IDQsXG4gICAgczogNCxcbiAgICBROiA0LFxuICAgIHE6IDQsXG4gICAgVDogMixcbiAgICB0OiAyLFxufTtcbmNvbnN0IENPTU1BTkRfUkVHRVggPSAvW01tTGxIaFZ2Q2NTc1FxVHRdLztcbmNvbnN0IE5VTUJFUl9SRUdFWCA9IC9bLStdP1tcXGQuXSsvO1xuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU3RyaW5nU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gJyc7XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IG51bGw7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICB0aGlzLnN5bWJvbFJlZ2V4ID0gL1tNbUxsSGhWdkNjU3NRcVR0XXxbLStdP1tcXGQuXSsvZztcbiAgICB9XG4gICAgc2V0UGF0aChwYXRoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMuc3ltYm9sUmVnZXgubGFzdEluZGV4ID0gMDtcbiAgICB9XG4gICAgZ2V0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZDtcbiAgICB9XG4gICAgZ2V0QnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWZmZXI7XG4gICAgfVxuICAgIHJlYWROZXh0KCkge1xuICAgICAgICBjb25zdCB7IGxhc3RJbmRleCB9ID0gdGhpcy5zeW1ib2xSZWdleDtcbiAgICAgICAgY29uc3Qgc3ltYm9sTWF0Y2ggPSB0aGlzLnN5bWJvbFJlZ2V4LmV4ZWModGhpcy5wYXRoKTtcbiAgICAgICAgaWYgKCFzeW1ib2xNYXRjaCkge1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xNYXRjaFswXTtcbiAgICAgICAgaWYgKENPTU1BTkRfUkVHRVgudGVzdChzeW1ib2wpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBzeW1ib2w7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoTlVNQkVSX1JFR0VYLnRlc3Qoc3ltYm9sKSkge1xuICAgICAgICAgICAgdGhpcy5zeW1ib2xSZWdleC5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jb21tYW5kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY291bnQgPSBOVU1CRVJTX0NPVU5UW3RoaXMuY29tbWFuZF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyTWF0Y2ggPSB0aGlzLnN5bWJvbFJlZ2V4LmV4ZWModGhpcy5wYXRoKTtcbiAgICAgICAgICAgIGlmIChudW1iZXJNYXRjaCAmJiBOVU1CRVJfUkVHRVgudGVzdChudW1iZXJNYXRjaFswXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlcltpXSA9IHBhcnNlRmxvYXQobnVtYmVyTWF0Y2hbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR3JhcGhpY3NTdHJpbmdSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0cmVhbSA9IG5ldyBHcmFwaGljc1N0cmluZ1N0cmVhbSgpO1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSB7IHR5cGU6ICdtb3ZlVG8nIH07XG4gICAgICAgIHRoaXMuY29tbWFuZEV4aXN0cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0WSA9IDA7XG4gICAgICAgIHRoaXMubGFzdENYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0Q1kgPSAwO1xuICAgIH1cbiAgICBzZXRQYXRoKHBhdGgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0uc2V0UGF0aChwYXRoKTtcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgICAgIHRoaXMubGFzdFkgPSAwO1xuICAgICAgICB0aGlzLmxhc3RDWCA9IDA7XG4gICAgICAgIHRoaXMubGFzdENZID0gMDtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gZmFsc2U7XG4gICAgfVxuICAgIGdldENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRFeGlzdHMgPyB0aGlzLmNvbW1hbmQgOiBudWxsO1xuICAgIH1cbiAgICByZWFkTmV4dCgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0ucmVhZE5leHQoKTtcbiAgICAgICAgdGhpcy5wYXJzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kRXhpc3RzO1xuICAgIH1cbiAgICBwYXJzZSgpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMuc3RyZWFtLmdldENvbW1hbmQoKTtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gISFjb21tYW5kO1xuICAgICAgICBpZiAoIXRoaXMuY29tbWFuZEV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuc3RyZWFtLmdldEJ1ZmZlcigpO1xuICAgICAgICBjb25zdCBbZTAsIGUxLCBlMiwgZTMsIGU0LCBlNSxdID0gYnVmZmVyO1xuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbW92ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ21vdmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gZTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IGU0O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGU1O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTQgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGU1ICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IHRoaXMubGFzdENZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGUzICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gdGhpcy5sYXN0Q1k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IHJlYWRlciA9IG5ldyBHcmFwaGljc1N0cmluZ1JlYWRlcigpO1xuZXhwb3J0IHZhciBHcmFwaGljc1N0cmluZztcbihmdW5jdGlvbiAoR3JhcGhpY3NTdHJpbmcpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aCwgYm91bmRzKSB7XG4gICAgICAgIHJlYWRlci5zZXRQYXRoKHBhdGgpO1xuICAgICAgICB3aGlsZSAocmVhZGVyLnJlYWROZXh0KCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSByZWFkZXIuZ2V0Q29tbWFuZCgpO1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc1N0cmluZyB8fCAoR3JhcGhpY3NTdHJpbmcgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RyaW5nLmpzLm1hcCIsImltcG9ydCB7IE1hdHJpeCwgUG9pbnQgfSBmcm9tICdAamVuZy9nZW9tJztcbmNvbnN0IHRlbXBQb2ludDAgPSBQb2ludC5lbXB0eSgpO1xuY29uc3QgdGVtcFBvaW50MSA9IFBvaW50LmVtcHR5KCk7XG5jb25zdCBlbXB0eU1hdHJpeCA9IE1hdHJpeC5lbXB0eSgpO1xuZXhwb3J0IGNsYXNzIEdyYXBoaWNzIHtcbiAgICBjb25zdHJ1Y3RvcihzaGFwZSkge1xuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGU7XG4gICAgfVxuICAgIGJlZ2luRmlsbChjb2xvciA9IDAsIGFscGhhID0gMSkge1xuICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAnc29saWQnLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGJlZ2luQml0bWFwRmlsbChzcmMsIG1hdHJpeCwgcmVwZWF0ID0gdHJ1ZSwgc21vb3RoID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ2JpdG1hcCcsXG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICBzbW9vdGgsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBiZWdpbkdyYWRpZW50RmlsbCh0eXBlLCBjb2xvciwgYWxwaGEsIHJhdGlvLCBtYXRyaXgpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdsaW5lYXInKSB7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnggPSAtODE5LjI7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnkgPSAwO1xuICAgICAgICAgICAgdGVtcFBvaW50MS54ID0gODE5LjI7XG4gICAgICAgICAgICB0ZW1wUG9pbnQxLnkgPSAwO1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgdGVtcFBvaW50MCwgdGVtcFBvaW50MCk7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCB0ZW1wUG9pbnQxLCB0ZW1wUG9pbnQxKTtcbiAgICAgICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgICAgICAgIGJlZ2luWDogdGVtcFBvaW50MC54LFxuICAgICAgICAgICAgICAgIGJlZ2luWTogdGVtcFBvaW50MC55LFxuICAgICAgICAgICAgICAgIGVuZFg6IHRlbXBQb2ludDEueCxcbiAgICAgICAgICAgICAgICBlbmRZOiB0ZW1wUG9pbnQxLnksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGVtcFBvaW50MC54ID0gMTYzOC40O1xuICAgICAgICAgICAgdGVtcFBvaW50MC55ID0gMDtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHRlbXBQb2ludDAsIHRlbXBQb2ludDApO1xuICAgICAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICAgICAgYmVnaW5YOiB0ZW1wUG9pbnQwLngsXG4gICAgICAgICAgICAgICAgYmVnaW5ZOiB0ZW1wUG9pbnQwLnksXG4gICAgICAgICAgICAgICAgYmVnaW5SYWRpdXM6IDAsXG4gICAgICAgICAgICAgICAgZW5kWDogdGVtcFBvaW50MC54LFxuICAgICAgICAgICAgICAgIGVuZFk6IHRlbXBQb2ludDAueSxcbiAgICAgICAgICAgICAgICBlbmRSYWRpdXM6IE1hdGguYWJzKCh0ZW1wUG9pbnQwLnggLSBtYXRyaXgudHgpIC8gMiksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBsaW5lU3R5bGUodGhpY2tuZXNzID0gMCwgY29sb3IgPSAwLCBhbHBoYSA9IDEsIHBpeGVsSGludGluZyA9IGZhbHNlLCBzY2FsZU1vZGUgPSAnbm9uZScsIGNhcHMgPSAncm91bmQnLCBqb2ludHMgPSAncm91bmQnLCBtaXRlckxpbWl0ID0gMykge1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHtcbiAgICAgICAgICAgIHRoaWNrbmVzcyxcbiAgICAgICAgICAgIHBpeGVsSGludGluZyxcbiAgICAgICAgICAgIHNjYWxlTW9kZSxcbiAgICAgICAgICAgIGNhcHMsXG4gICAgICAgICAgICBqb2ludHMsXG4gICAgICAgICAgICBtaXRlckxpbWl0LFxuICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbGluZUdyYWRpZW50U3R5bGUodHlwZSwgY29sb3IsIGFscGhhLCByYXRpbywgbWF0cml4ID0gZW1wdHlNYXRyaXgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0cm9rZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdsaW5lYXInKSB7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnggPSAtODE5LjI7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnkgPSAwO1xuICAgICAgICAgICAgdGVtcFBvaW50MS54ID0gODE5LjI7XG4gICAgICAgICAgICB0ZW1wUG9pbnQxLnkgPSAwO1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgdGVtcFBvaW50MCwgdGVtcFBvaW50MCk7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCB0ZW1wUG9pbnQxLCB0ZW1wUG9pbnQxKTtcbiAgICAgICAgICAgIHRoaXMuc3Ryb2tlLmZpbGwgPSB7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgICAgICBiZWdpblg6IHRlbXBQb2ludDAueCxcbiAgICAgICAgICAgICAgICBiZWdpblk6IHRlbXBQb2ludDAueSxcbiAgICAgICAgICAgICAgICBlbmRYOiB0ZW1wUG9pbnQxLngsXG4gICAgICAgICAgICAgICAgZW5kWTogdGVtcFBvaW50MS55LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueCA9IDE2MzguNDtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueSA9IDA7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCB0ZW1wUG9pbnQwLCB0ZW1wUG9pbnQwKTtcbiAgICAgICAgICAgIHRoaXMuc3Ryb2tlLmZpbGwgPSB7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgICAgICBiZWdpblg6IHRlbXBQb2ludDAueCxcbiAgICAgICAgICAgICAgICBiZWdpblk6IHRlbXBQb2ludDAueSxcbiAgICAgICAgICAgICAgICBiZWdpblJhZGl1czogMCxcbiAgICAgICAgICAgICAgICBlbmRYOiB0ZW1wUG9pbnQwLngsXG4gICAgICAgICAgICAgICAgZW5kWTogdGVtcFBvaW50MC55LFxuICAgICAgICAgICAgICAgIGVuZFJhZGl1czogTWF0aC5hYnMoKHRlbXBQb2ludDAueCAtIG1hdHJpeC50eCkgLyAyKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGxpbmVCaXRtYXBTdHlsZShzcmMsIG1hdHJpeCwgcmVwZWF0ID0gdHJ1ZSwgc21vb3RoID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0cm9rZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHJva2UuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdiaXRtYXAnLFxuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgcmVwZWF0LFxuICAgICAgICAgICAgc21vb3RoLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbW92ZVRvKHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgIHBhdGgucHVzaCh7IHR5cGU6ICdtb3ZlVG8nLCB4LCB5IH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbGluZVRvKHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHBhdGgucHVzaCh7IHR5cGU6ICdsaW5lVG8nLCB4LCB5IH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY3VydmVUbyhjeCwgY3ksIHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3VydmVUbycsIGN4LCBjeSwgeCwgeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjdWJpY0N1cnZlVG8oY3gsIGN5LCBzeCwgc3ksIHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJywgY3gsIGN5LCBzeCwgc3ksIHgsIHksXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZHJhd1JvdW5kUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBlbGxpcHNlV2lkdGggPSAwLCBlbGxpcHNlSGVpZ2h0ID0gMCkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5iZWdpblBhdGgoKTtcbiAgICAgICAgY29uc3QgdyA9IGVsbGlwc2VXaWR0aDtcbiAgICAgICAgY29uc3QgaCA9IGVsbGlwc2VIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGsgPSAwLjU1MjI4NDg7XG4gICAgICAgIGNvbnN0IG94ID0gKHcgLyAyKSAqIGs7XG4gICAgICAgIGNvbnN0IG95ID0gKGggLyAyKSAqIGs7XG4gICAgICAgIGNvbnN0IHhlID0geCArIHc7XG4gICAgICAgIGNvbnN0IHllID0geSArIGg7XG4gICAgICAgIGNvbnN0IHhtID0geCArIHcgLyAyO1xuICAgICAgICBjb25zdCB5bSA9IHkgKyBoIC8gMjtcbiAgICAgICAgY29uc3QgZHggPSB3aWR0aCAtIHc7XG4gICAgICAgIGNvbnN0IGR5ID0gaGVpZ2h0IC0gaDtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdtb3ZlVG8nLFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHk6IHltLFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHgsXG4gICAgICAgICAgICBjeTogeW0gLSBveSxcbiAgICAgICAgICAgIHN4OiB4bSAtIG94LFxuICAgICAgICAgICAgc3k6IHksXG4gICAgICAgICAgICB4OiB4bSxcbiAgICAgICAgICAgIHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVUbycsXG4gICAgICAgICAgICB4OiB4bSArIGR4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4bSArIG94ICsgZHgsXG4gICAgICAgICAgICBjeTogeSxcbiAgICAgICAgICAgIHN4OiB4ZSArIGR4LFxuICAgICAgICAgICAgc3k6IHltIC0gb3ksXG4gICAgICAgICAgICB4OiB4ZSArIGR4LFxuICAgICAgICAgICAgeTogeW0sXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVUbycsXG4gICAgICAgICAgICB4OiB4ZSArIGR4LFxuICAgICAgICAgICAgeTogeW0gKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4ZSArIGR4LFxuICAgICAgICAgICAgY3k6IHltICsgb3kgKyBkeSxcbiAgICAgICAgICAgIHN4OiB4bSArIG94ICsgZHgsXG4gICAgICAgICAgICBzeTogeWUgKyBkeSxcbiAgICAgICAgICAgIHg6IHhtICsgZHgsXG4gICAgICAgICAgICB5OiB5ZSArIGR5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeG0sXG4gICAgICAgICAgICB5OiB5ZSArIGR5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhtIC0gb3gsXG4gICAgICAgICAgICBjeTogeWUgKyBkeSxcbiAgICAgICAgICAgIHN4OiB4LFxuICAgICAgICAgICAgc3k6IHltICsgb3kgKyBkeSxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5OiB5bSArIGR5LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRyYXdSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAncmVjdGFuZ2xlJztcbiAgICAgICAgZGF0YS54ID0geDtcbiAgICAgICAgZGF0YS55ID0geTtcbiAgICAgICAgZGF0YS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBkYXRhLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRyYXdDaXJjbGUoeCwgeSwgcmFkaXVzKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ2VsbGlwc2UnO1xuICAgICAgICBkYXRhLnggPSB4O1xuICAgICAgICBkYXRhLnkgPSB5O1xuICAgICAgICBkYXRhLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRyYXdFbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAnZWxsaXBzZSc7XG4gICAgICAgIGRhdGEucmFkaXVzWCA9IHdpZHRoIC8gMjtcbiAgICAgICAgZGF0YS5yYWRpdXNZID0gaGVpZ2h0IC8gMjtcbiAgICAgICAgZGF0YS54ID0geCAtIGRhdGEucmFkaXVzWDtcbiAgICAgICAgZGF0YS55ID0geSAtIGRhdGEucmFkaXVzWTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5zaGFwZS5kYXRhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY3JlYXRlRGF0YSgpIHtcbiAgICAgICAgY29uc3QgeyBzaGFwZSwgZmlsbCwgc3Ryb2tlIH0gPSB0aGlzO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzaGFwZS5kYXRhKSkge1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzaGFwZS5kYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgc2hhcGUuZGF0YSA9IFtzaGFwZS5kYXRhXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNoYXBlLmRhdGEgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBncmFwaGljc0RhdGEgPSB7IHR5cGU6ICdwYXRoJywgZmlsbCwgc3Ryb2tlIH07XG4gICAgICAgIHNoYXBlLmRhdGEucHVzaChncmFwaGljc0RhdGEpO1xuICAgICAgICByZXR1cm4gZ3JhcGhpY3NEYXRhO1xuICAgIH1cbiAgICBiZWdpblBhdGgoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS5kYXRhID0gW107XG4gICAgICAgIHJldHVybiBkYXRhLmRhdGE7XG4gICAgfVxuICAgIGdldFBhdGgoKSB7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUgfSA9IHRoaXM7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzaGFwZS5kYXRhKSB8fCAhc2hhcGUuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHNoYXBlLmRhdGFbc2hhcGUuZGF0YS5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEuZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ncmFwaGljcy5qcy5tYXAiLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQm91bmRzLCBSZWN0YW5nbGUgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgR3JhcGhpY3NEYXRhIH0gZnJvbSAnLi9kYXRhL2RhdGEnO1xuZXhwb3J0IGNvbnN0IFNIQVBFID0gJ3NoYXBlJztcbmNvbnN0IGJvdW5kcyA9IEJvdW5kcy5lbXB0eSgpO1xuZXhwb3J0IHZhciBTaGFwZTtcbihmdW5jdGlvbiAoU2hhcGUpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoc2hhcGUsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHNoYXBlO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEJvdW5kcy5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhW2ldLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJvdW5kcy5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdpZHRoID0gYm91bmRzLm1heFggLSBib3VuZHMubWluWDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gYm91bmRzLm1heFkgLSBib3VuZHMubWluWTtcbiAgICAgICAgY29uc3QgeCA9IGJvdW5kcy5taW5YICsgUGl2b3QuZ2V0WChzaGFwZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gYm91bmRzLm1pblkgKyBQaXZvdC5nZXRZKHNoYXBlLCBoZWlnaHQpO1xuICAgICAgICByZXN1bHQueCA9IHg7XG4gICAgICAgIHJlc3VsdC55ID0geTtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIFNoYXBlLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFNoYXBlIHx8IChTaGFwZSA9IHt9KSk7XG5jb25zdCByZWN0YW5nbGUgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgU2hhcGVFeHRlbnNpb247XG4oZnVuY3Rpb24gKFNoYXBlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdChzaGFwZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgbG9jYWwgfSA9IGVuZ2luZS5wb2ludGVycztcbiAgICAgICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzKHNoYXBlLCByZWN0YW5nbGUpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKHJlY3RhbmdsZSwgbG9jYWwpO1xuICAgIH1cbiAgICBTaGFwZUV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChTSEFQRSwgaGl0VGVzdCk7XG4gICAgICAgIEltYWdlUmVzb3VyY2UuaW5pdChlbmdpbmUpO1xuICAgIH1cbiAgICBTaGFwZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFNoYXBlRXh0ZW5zaW9uIHx8IChTaGFwZUV4dGVuc2lvbiA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaGFwZS5qcy5tYXAiLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQ2FudmFzUGF0dGVybnMgfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IEZvbnQgfSBmcm9tICcuLi9kYXRhL2ZvbnQnO1xuaW1wb3J0IHsgVGV4dEV4dGVuc2lvbiwgVEVYVCwgVGV4dCB9IGZyb20gJy4uL3RleHQnO1xuaW1wb3J0IHsgVGV4dEZvcm1hdCB9IGZyb20gJy4uL2RhdGEvZm9ybWF0JztcbmltcG9ydCB7IFRleHRNZXRyaWNzIH0gZnJvbSAnLi4vZGF0YS9tZXRyaWNzJztcbmNvbnN0IGRlZmF1bHRUZXh0Rm9ybWF0ID0ge307XG5jb25zdCBDT1JSRUNUSU9OID0gMC44NTtcbmV4cG9ydCB2YXIgQ2FudmFzVGV4dEV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzVGV4dEV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihjb21wb25lbnQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IG1hdHJpeCwgY29sb3JUcmFuc2Zvcm0gfSA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChUZXh0LmlzVXBkYXRlTWV0cmljcyhjb21wb25lbnQpKSB7XG4gICAgICAgICAgICBUZXh0LnVwZGF0ZU1ldHJpY3MoY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG1ldHJpY3MgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCFtZXRyaWNzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBmb3JtYXQsIGJvcmRlciwgYmFja2dyb3VuZCwgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgVGV4dEZvcm1hdC5jb21iaW5lKGZvcm1hdCwgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCwgZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBjb25zdCByZWFsV2lkdGggPSB3aWR0aCA/PyBtZXRyaWNzLndpZHRoO1xuICAgICAgICBjb25zdCByZWFsSGVpZ2h0ID0gaGVpZ2h0ID8/IG1ldHJpY3MuaGVpZ2h0O1xuICAgICAgICBjb25zdCBvZmZzZXRYID0gUGl2b3QuZ2V0WChjb21wb25lbnQsIHJlYWxXaWR0aCk7XG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSBQaXZvdC5nZXRZKGNvbXBvbmVudCwgcmVhbEhlaWdodCk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IGVuZ2luZS5wbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgaWYgKGJhY2tncm91bmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gJyc7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGJhY2tncm91bmQsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5yZWN0KG9mZnNldFgsIG9mZnNldFksIHJlYWxXaWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGJvcmRlciwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuICAgICAgICAgICAgY29udGV4dDJkLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLnJlY3Qob2Zmc2V0WCwgb2Zmc2V0WSwgcmVhbFdpZHRoLCByZWFsSGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0MmQudGV4dEJhc2VsaW5lID0gJ2FscGhhYmV0aWMnO1xuICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnJztcbiAgICAgICAgY29uc3Qgc2ltcGxlID0gVGV4dC5pc1NpbXBsZShjb21wb25lbnQpO1xuICAgICAgICBpZiAoc2ltcGxlKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gY29tcG9uZW50LnRleHQ7XG4gICAgICAgICAgICBjb25zdCB7IHNpemUsIGNvbG9yLCBhbHBoYSwgbGVhZGluZywgbGV0dGVyU3BhY2luZywgfSA9IGRlZmF1bHRUZXh0Rm9ybWF0O1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdEZvbnQgPSBGb250LmdldEZvbnQoZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sU2l6ZSA9IHNpemUgKiBDT1JSRUNUSU9OO1xuICAgICAgICAgICAgY29uc3QgYWxpZ25WYWx1ZSA9IFRleHRGb3JtYXQuZ2V0QWxpZ25WYWx1ZShkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZm9udCA9IEZvbnQuZ2V0U3R5bGUoZGVmYXVsdEZvbnQsIHNpemUpO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihjb2xvciwgYWxwaGEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGxldCB4ID0gb2Zmc2V0WCArIGFsaWduVmFsdWUgPyBhbGlnblZhbHVlICogKHJlYWxXaWR0aCAtIFRleHRNZXRyaWNzLmdldFNpbXBsZVdpZHRoKGRlZmF1bHRUZXh0Rm9ybWF0LCB0ZXh0LCAwKSkgOiAwO1xuICAgICAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICBpZiAoc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICB4ID0gYWxpZ25WYWx1ZSA/IGFsaWduVmFsdWUgKiAocmVhbFdpZHRoIC0gVGV4dE1ldHJpY3MuZ2V0U2ltcGxlV2lkdGgoZGVmYXVsdFRleHRGb3JtYXQsIHRleHQsIGkgKyAxKSkgOiAwO1xuICAgICAgICAgICAgICAgICAgICB5ICs9IHNpemUgKyBsZWFkaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IHRleHRbaSArIDFdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKGRlZmF1bHRGb250LCBzaXplLCBzeW1ib2wsIHN5bWJvbE5leHQpICsgbGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDJkLmZpbGxUZXh0KHN5bWJvbCwgeCwgeSArIHN5bWJvbFNpemUpO1xuICAgICAgICAgICAgICAgICAgICB4ICs9IGFkdmFuY2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsaWduVmVydGljYWxWYWx1ZSA9IFRleHRGb3JtYXQuZ2V0VmVydGljYWxBbGlnblZhbHVlKGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgICAgICAgICB5ID0gKGhlaWdodCAtIG1ldHJpY3MuaGVpZ2h0KSAqIGFsaWduVmVydGljYWxWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoeSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeSArPSBvZmZzZXRZO1xuICAgICAgICAgICAgY29uc3QgeyBsaW5lcyB9ID0gbWV0cmljcztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGxpbmUuc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3QgPSBsaW5lLnN5bWJvbHNbMF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsaWduVmFsdWUgPSBUZXh0Rm9ybWF0LmdldEFsaWduVmFsdWUoZmlyc3QuZm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSAocmVhbFdpZHRoIC0gbGluZS53aWR0aCkgKiBhbGlnblZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHggKz0gb2Zmc2V0WDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzeW1ib2xzIH0gPSBsaW5lO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lSGVpZ2h0ID0gbGluZS5oZWlnaHQgKiBDT1JSRUNUSU9OO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN5bWJvbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gc3ltYm9sLmZvcm1hdC5zaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxpZ25TeW1ib2xWYWx1ZSA9IFRleHRGb3JtYXQuZ2V0VmVydGljYWxBbGlnblZhbHVlKHN5bWJvbC5mb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sU2l6ZSA9IHNpemUgKiBDT1JSRUNUSU9OO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9udCA9IEZvbnQuZ2V0Rm9udChzeW1ib2wuZm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5mb250ID0gRm9udC5nZXRTdHlsZShzeW1ib2xGb250LCBzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oc3ltYm9sLmZvcm1hdC5jb2xvciwgc3ltYm9sLmZvcm1hdC5hbHBoYSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDJkLmZpbGxUZXh0KHN5bWJvbC5zeW1ib2wsIHgsIHkgKyBzeW1ib2xTaXplICsgYWxpZ25TeW1ib2xWYWx1ZSAqIChsaW5lSGVpZ2h0IC0gc3ltYm9sU2l6ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgeCArPSBzeW1ib2wuYWR2YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB5ICs9IGxpbmUuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc1RleHRFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIFRleHRFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KFRFWFQsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc1RleHRFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNUZXh0RXh0ZW5zaW9uIHx8IChDYW52YXNUZXh0RXh0ZW5zaW9uID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRleHQuanMubWFwIiwiY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5leHBvcnQgY29uc3QgRU0gPSAxMDI0O1xuY29uc3QgZm9udHMgPSBuZXcgTWFwKCk7XG5leHBvcnQgdmFyIEZvbnQ7XG4oZnVuY3Rpb24gKEZvbnQpIHtcbiAgICBmdW5jdGlvbiBnZXRTdHlsZShmb250LCBzaXplKSB7XG4gICAgICAgIHJldHVybiBmb250Lm5hbWUucmVwbGFjZSgnJScsIHNpemUudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIEZvbnQuZ2V0U3R5bGUgPSBnZXRTdHlsZTtcbiAgICBmdW5jdGlvbiBtZWFzdXJlVGV4dChmb250LCBzaXplLCB0ZXh0KSB7XG4gICAgICAgIGNvbnRleHQuZm9udCA9IGdldFN0eWxlKGZvbnQsIHNpemUpO1xuICAgICAgICByZXR1cm4gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcbiAgICB9XG4gICAgRm9udC5tZWFzdXJlVGV4dCA9IG1lYXN1cmVUZXh0O1xuICAgIGZ1bmN0aW9uIGdldENoYXJXaWR0aChmb250LCBjaGFyKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IGZvbnQud2lkdGhzLmdldChjaGFyKTtcbiAgICAgICAgaWYgKCF3aWR0aCkge1xuICAgICAgICAgICAgd2lkdGggPSBtZWFzdXJlVGV4dChmb250LCBFTSwgY2hhcik7XG4gICAgICAgICAgICBmb250LndpZHRocy5zZXQoY2hhciwgd2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gICAgRm9udC5nZXRDaGFyV2lkdGggPSBnZXRDaGFyV2lkdGg7XG4gICAgZnVuY3Rpb24gZ2V0S2VybmluZyhmb250LCBmaXJzdCwgc2Vjb25kKSB7XG4gICAgICAgIGNvbnN0IHBhaXIgPSBmaXJzdCArIHNlY29uZDtcbiAgICAgICAgbGV0IGtlcm5pbmcgPSBmb250Lmtlcm5pbmdzLmdldChwYWlyKTtcbiAgICAgICAgaWYgKCFrZXJuaW5nKSB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aFNlY29uZCA9IGdldENoYXJXaWR0aChmb250LCBzZWNvbmQpO1xuICAgICAgICAgICAgY29uc3Qgd2lkdGhUb3RhbCA9IG1lYXN1cmVUZXh0KGZvbnQsIEVNLCBmaXJzdCArIHNlY29uZCk7XG4gICAgICAgICAgICBrZXJuaW5nID0gd2lkdGhUb3RhbCAtIHdpZHRoU2Vjb25kO1xuICAgICAgICAgICAgZm9udC5rZXJuaW5ncy5zZXQocGFpciwga2VybmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtlcm5pbmc7XG4gICAgfVxuICAgIEZvbnQuZ2V0S2VybmluZyA9IGdldEtlcm5pbmc7XG4gICAgZnVuY3Rpb24gZ2V0QWR2YW5jZShmb250LCBzaXplLCBmaXJzdCwgc2Vjb25kKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gc2l6ZSAvIEVNO1xuICAgICAgICBjb25zdCB3aWR0aCA9IGdldENoYXJXaWR0aChmb250LCBmaXJzdCk7XG4gICAgICAgIGlmICghc2Vjb25kKSB7XG4gICAgICAgICAgICByZXR1cm4gd2lkdGggKiBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXJuaW5nID0gZ2V0S2VybmluZyhmb250LCBmaXJzdCwgc2Vjb25kKTtcbiAgICAgICAgcmV0dXJuIGtlcm5pbmcgKiBzY2FsZTtcbiAgICB9XG4gICAgRm9udC5nZXRBZHZhbmNlID0gZ2V0QWR2YW5jZTtcbiAgICBmdW5jdGlvbiBnZXRGb250KGZvcm1hdCkge1xuICAgICAgICBsZXQgbmFtZSA9ICcnO1xuICAgICAgICBpZiAoZm9ybWF0LmJvbGQpIHtcbiAgICAgICAgICAgIG5hbWUgKz0gJ2JvbGQgJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0Lml0YWxpYykge1xuICAgICAgICAgICAgbmFtZSArPSAnaXRhbGljICc7XG4gICAgICAgIH1cbiAgICAgICAgbmFtZSArPSBgJXB4ICR7Zm9ybWF0LmZvbnR9YDtcbiAgICAgICAgbGV0IGZvbnQgPSBmb250cy5nZXQobmFtZSk7XG4gICAgICAgIGlmICghZm9udCkge1xuICAgICAgICAgICAgZm9udCA9IHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHdpZHRoczogbmV3IE1hcCgpLFxuICAgICAgICAgICAgICAgIGtlcm5pbmdzOiBuZXcgTWFwKCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9udHMuc2V0KG5hbWUsIGZvbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb250O1xuICAgIH1cbiAgICBGb250LmdldEZvbnQgPSBnZXRGb250O1xufSkoRm9udCB8fCAoRm9udCA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb250LmpzLm1hcCIsImV4cG9ydCB2YXIgVGV4dEZvcm1hdDtcbihmdW5jdGlvbiAoVGV4dEZvcm1hdCkge1xuICAgIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQgPSB7XG4gICAgICAgIGZvbnQ6ICdhcmlhbCcsXG4gICAgICAgIHNpemU6IDE1LFxuICAgICAgICBjb2xvcjogMCxcbiAgICAgICAgYWxwaGE6IDEsXG4gICAgICAgIGJvbGQ6IGZhbHNlLFxuICAgICAgICBpdGFsaWM6IGZhbHNlLFxuICAgICAgICB1bmRlcmxpbmU6IGZhbHNlLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwLFxuICAgICAgICBsZWFkaW5nOiAwLFxuICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGNvbWJpbmUoc291cmNlLCBkZWZhdWx0Rm9ybWF0LCByZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0LmZvbnQgPSBzb3VyY2U/LmZvbnQgPz8gZGVmYXVsdEZvcm1hdC5mb250O1xuICAgICAgICByZXN1bHQuc2l6ZSA9IHNvdXJjZT8uc2l6ZSA/PyBkZWZhdWx0Rm9ybWF0LnNpemU7XG4gICAgICAgIHJlc3VsdC5jb2xvciA9IHNvdXJjZT8uY29sb3IgPz8gZGVmYXVsdEZvcm1hdC5jb2xvcjtcbiAgICAgICAgcmVzdWx0LmFscGhhID0gc291cmNlPy5hbHBoYSA/PyBkZWZhdWx0Rm9ybWF0LmFscGhhO1xuICAgICAgICByZXN1bHQuYm9sZCA9IHNvdXJjZT8uYm9sZCA/PyBkZWZhdWx0Rm9ybWF0LmJvbGQ7XG4gICAgICAgIHJlc3VsdC5pdGFsaWMgPSBzb3VyY2U/Lml0YWxpYyA/PyBkZWZhdWx0Rm9ybWF0Lml0YWxpYztcbiAgICAgICAgcmVzdWx0LnVuZGVybGluZSA9IHNvdXJjZT8udW5kZXJsaW5lID8/IGRlZmF1bHRGb3JtYXQudW5kZXJsaW5lO1xuICAgICAgICByZXN1bHQubGV0dGVyU3BhY2luZyA9IHNvdXJjZT8ubGV0dGVyU3BhY2luZyA/PyBkZWZhdWx0Rm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgICAgIHJlc3VsdC5sZWFkaW5nID0gc291cmNlPy5sZWFkaW5nID8/IGRlZmF1bHRGb3JtYXQubGVhZGluZztcbiAgICAgICAgcmVzdWx0LmFsaWduID0gc291cmNlPy5hbGlnbiA/PyBkZWZhdWx0Rm9ybWF0LmFsaWduO1xuICAgICAgICByZXN1bHQudmVydGljYWxBbGlnbiA9IHNvdXJjZT8udmVydGljYWxBbGlnbiA/PyBkZWZhdWx0Rm9ybWF0LnZlcnRpY2FsQWxpZ247XG4gICAgfVxuICAgIFRleHRGb3JtYXQuY29tYmluZSA9IGNvbWJpbmU7XG4gICAgZnVuY3Rpb24gY29weShzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICB0YXJnZXQuZm9udCA9IHNvdXJjZS5mb250O1xuICAgICAgICB0YXJnZXQuc2l6ZSA9IHNvdXJjZS5zaXplO1xuICAgICAgICB0YXJnZXQuY29sb3IgPSBzb3VyY2UuY29sb3I7XG4gICAgICAgIHRhcmdldC5hbHBoYSA9IHNvdXJjZS5hbHBoYTtcbiAgICAgICAgdGFyZ2V0LmJvbGQgPSBzb3VyY2UuYm9sZDtcbiAgICAgICAgdGFyZ2V0Lml0YWxpYyA9IHNvdXJjZS5pdGFsaWM7XG4gICAgICAgIHRhcmdldC51bmRlcmxpbmUgPSBzb3VyY2UudW5kZXJsaW5lO1xuICAgICAgICB0YXJnZXQubGV0dGVyU3BhY2luZyA9IHNvdXJjZS5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICB0YXJnZXQubGVhZGluZyA9IHNvdXJjZS5sZWFkaW5nO1xuICAgICAgICB0YXJnZXQuYWxpZ24gPSBzb3VyY2UuYWxpZ247XG4gICAgICAgIHRhcmdldC52ZXJ0aWNhbEFsaWduID0gc291cmNlLnZlcnRpY2FsQWxpZ247XG4gICAgfVxuICAgIFRleHRGb3JtYXQuY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gZ2V0QWxpZ25WYWx1ZShmb3JtYXQpIHtcbiAgICAgICAgc3dpdGNoIChmb3JtYXQ/LmFsaWduKSB7XG4gICAgICAgICAgICBjYXNlICdsZWZ0JzogcmV0dXJuIDA7XG4gICAgICAgICAgICBjYXNlICdjZW50ZXInOiByZXR1cm4gMC41O1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOiByZXR1cm4gMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRGb3JtYXQuZ2V0QWxpZ25WYWx1ZSA9IGdldEFsaWduVmFsdWU7XG4gICAgZnVuY3Rpb24gZ2V0VmVydGljYWxBbGlnblZhbHVlKGZvcm1hdCkge1xuICAgICAgICBzd2l0Y2ggKGZvcm1hdD8udmVydGljYWxBbGlnbikge1xuICAgICAgICAgICAgY2FzZSAndG9wJzogcmV0dXJuIDA7XG4gICAgICAgICAgICBjYXNlICdtaWRkbGUnOiByZXR1cm4gMC41O1xuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzogcmV0dXJuIDE7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0Rm9ybWF0LmdldFZlcnRpY2FsQWxpZ25WYWx1ZSA9IGdldFZlcnRpY2FsQWxpZ25WYWx1ZTtcbn0pKFRleHRGb3JtYXQgfHwgKFRleHRGb3JtYXQgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LmpzLm1hcCIsImltcG9ydCB7IEZvbnQgfSBmcm9tICcuL2ZvbnQnO1xuaW1wb3J0IHsgVGV4dEZvcm1hdCB9IGZyb20gJy4vZm9ybWF0JztcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi90ZXh0JztcbmNvbnN0IGRlZmF1bHRUZXh0Rm9ybWF0ID0ge307XG5leHBvcnQgdmFyIFRleHRMaW5lO1xuKGZ1bmN0aW9uIChUZXh0TGluZSkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN5bWJvbHM6IFtdLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFRleHRMaW5lLmNyZWF0ZSA9IGNyZWF0ZTtcbiAgICBmdW5jdGlvbiBlbXB0eShsaW5lKSB7XG4gICAgICAgIGxpbmUuc3ltYm9scy5sZW5ndGggPSAwO1xuICAgICAgICBsaW5lLndpZHRoID0gMDtcbiAgICAgICAgbGluZS5oZWlnaHQgPSAwO1xuICAgIH1cbiAgICBUZXh0TGluZS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGFkZChsaW5lLCBzeW1ib2wpIHtcbiAgICAgICAgbGluZS5zeW1ib2xzLnB1c2goc3ltYm9sKTtcbiAgICAgICAgbGluZS53aWR0aCArPSBzeW1ib2wuYWR2YW5jZTtcbiAgICAgICAgbGluZS5oZWlnaHQgPSBNYXRoLm1heChsaW5lLmhlaWdodCwgc3ltYm9sLmZvcm1hdC5zaXplICsgc3ltYm9sLmZvcm1hdC5sZWFkaW5nKTtcbiAgICB9XG4gICAgVGV4dExpbmUuYWRkID0gYWRkO1xuICAgIGZ1bmN0aW9uIGNvbmNhdCh0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlLnN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0YXJnZXQuc3ltYm9scy5wdXNoKC4uLnNvdXJjZS5zeW1ib2xzKTtcbiAgICAgICAgICAgIHRhcmdldC53aWR0aCArPSBzb3VyY2Uud2lkdGg7XG4gICAgICAgICAgICB0YXJnZXQuaGVpZ2h0ID0gTWF0aC5tYXgodGFyZ2V0LmhlaWdodCwgc291cmNlLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dExpbmUuY29uY2F0ID0gY29uY2F0O1xuICAgIGZ1bmN0aW9uIGNvcnJlY3RXaWR0aChsaW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3ltYm9scyB9ID0gbGluZTtcbiAgICAgICAgaWYgKHN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0ID0gc3ltYm9sc1tzeW1ib2xzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKC9cXHMvLnRlc3QobGFzdC5zeW1ib2wpKSB7XG4gICAgICAgICAgICAgICAgc3ltYm9scy5wb3AoKTtcbiAgICAgICAgICAgICAgICBsaW5lLndpZHRoIC09IGxhc3QuYWR2YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0TGluZS5jb3JyZWN0V2lkdGggPSBjb3JyZWN0V2lkdGg7XG4gICAgZnVuY3Rpb24gY29ycmVjdEhlaWdodChsaW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3ltYm9scyB9ID0gbGluZTtcbiAgICAgICAgaWYgKHN5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzWzBdO1xuICAgICAgICAgICAgbGluZS5oZWlnaHQgLT0gc3ltYm9sLmZvcm1hdC5sZWFkaW5nO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRMaW5lLmNvcnJlY3RIZWlnaHQgPSBjb3JyZWN0SGVpZ2h0O1xufSkoVGV4dExpbmUgfHwgKFRleHRMaW5lID0ge30pKTtcbmV4cG9ydCB2YXIgVGV4dE1ldHJpY3M7XG4oZnVuY3Rpb24gKFRleHRNZXRyaWNzKSB7XG4gICAgZnVuY3Rpb24gZ2V0U3ltYm9scyhjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghdGV4dCB8fCAhdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgVGV4dEZvcm1hdC5jb21iaW5lKGNvbXBvbmVudC5mb3JtYXQsIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQsIGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgY29uc3Qgc3ltYm9scyA9IFtdO1xuICAgICAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2xGb3JtYXQgPSB7fTtcbiAgICAgICAgICAgIFRleHRGb3JtYXQuY29weShkZWZhdWx0VGV4dEZvcm1hdCwgc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvbnQgPSBGb250LmdldEZvbnQoc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHRleHRbaV07XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IHRleHRbaSArIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2Uoc3ltYm9sRm9udCwgc3ltYm9sRm9ybWF0LnNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBzeW1ib2xGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICBzeW1ib2xzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgIGFkdmFuY2UsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogc3ltYm9sRm9ybWF0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGV4dCkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJsb2NrID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb3JtYXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgVGV4dEZvcm1hdC5jb3B5KGRlZmF1bHRUZXh0Rm9ybWF0LCBzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb250ID0gRm9udC5nZXRGb250KHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYmxvY2subGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IGJsb2NrW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IGJsb2NrW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2Uoc3ltYm9sRm9udCwgc3ltYm9sRm9ybWF0LnNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBzeW1ib2xGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBzeW1ib2xGb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9ybWF0ID0ge307XG4gICAgICAgICAgICAgICAgICAgIFRleHRGb3JtYXQuY29tYmluZShibG9jaywgZGVmYXVsdFRleHRGb3JtYXQsIHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvbnQgPSBGb250LmdldEZvbnQoc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBibG9jay50ZXh0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBibG9jay50ZXh0W2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IGJsb2NrLnRleHRbaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShzeW1ib2xGb250LCBzeW1ib2xGb3JtYXQuc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIHN5bWJvbEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9scy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHN5bWJvbEZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzeW1ib2xzO1xuICAgIH1cbiAgICBUZXh0TWV0cmljcy5nZXRTeW1ib2xzID0gZ2V0U3ltYm9scztcbiAgICBmdW5jdGlvbiBnZXRMaW5lcyhjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3Qgc3ltYm9scyA9IGdldFN5bWJvbHMoY29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFzeW1ib2xzIHx8ICFzeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCB3b3JkV3JhcCA9IGZhbHNlIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IG11bHRpbGluZSA9IFRleHQuaXNNdWx0aWxpbmUoY29tcG9uZW50KTtcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXTtcbiAgICAgICAgbGV0IGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgaWYgKG11bHRpbGluZSkge1xuICAgICAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdvcmRXcmFwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdvcmQgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbC5zeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuY29uY2F0KGxpbmUsIHdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmVtcHR5KHdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKHdvcmQsIHN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmUud2lkdGggKyB3b3JkLndpZHRoID4gd2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgvXFxzLy50ZXN0KHN5bWJvbC5zeW1ib2wpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmNvbmNhdChsaW5lLCB3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuZW1wdHkod29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmNvbmNhdChsaW5lLCB3b3JkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2wuc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZSA9IFRleHRMaW5lLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobGluZS53aWR0aCArIHN5bWJvbC5hZHZhbmNlID4gd2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQobGluZSwgc3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZChsaW5lLCBzeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2wuc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZChsaW5lLCBzeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tpXTtcbiAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQobGluZSwgc3ltYm9sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobGluZS5zeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGluZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgICAgIFRleHRMaW5lLmNvcnJlY3RXaWR0aChsaW5lKTtcbiAgICAgICAgICAgICAgICBpZiAoIWxpbmUuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUuaGVpZ2h0ID0gZGVmYXVsdFRleHRGb3JtYXQuc2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW5lID0gbGluZXNbbGluZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBUZXh0TGluZS5jb3JyZWN0SGVpZ2h0KGxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lcztcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0TGluZXMgPSBnZXRMaW5lcztcbiAgICBmdW5jdGlvbiBnZXRNZXRyaWNzKGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBsaW5lcyA9IGdldExpbmVzKGNvbXBvbmVudCk7XG4gICAgICAgIGlmICghbGluZXMgfHwgIWxpbmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXRyaWNzID0ge1xuICAgICAgICAgICAgbGluZXMsXG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgbWV0cmljcy53aWR0aCA9IE1hdGgubWF4KG1ldHJpY3Mud2lkdGgsIGxpbmUud2lkdGgpO1xuICAgICAgICAgICAgbWV0cmljcy5oZWlnaHQgKz0gbGluZS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldHJpY3M7XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldE1ldHJpY3MgPSBnZXRNZXRyaWNzO1xuICAgIGZ1bmN0aW9uIGdldFNpbXBsZU1ldHJpY3MoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAodHlwZW9mIHRleHQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIFRleHRGb3JtYXQuY29tYmluZShjb21wb25lbnQuZm9ybWF0LCBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LCBkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGNvbnN0IHsgc2l6ZSwgbGV0dGVyU3BhY2luZywgbGVhZGluZyB9ID0gZGVmYXVsdFRleHRGb3JtYXQ7XG4gICAgICAgIGNvbnN0IGZvbnQgPSBGb250LmdldEZvbnQoZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gc2l6ZTtcbiAgICAgICAgbGV0IGxpbmVXaWR0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gdGV4dFtpXTtcbiAgICAgICAgICAgIGlmIChzeW1ib2wgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ICs9IHNpemUgKyBsZWFkaW5nO1xuICAgICAgICAgICAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGxpbmVXaWR0aCk7XG4gICAgICAgICAgICAgICAgbGluZVdpZHRoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSB0ZXh0W2kgKyAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKGZvbnQsIHNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBsZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgICAgIGxpbmVXaWR0aCArPSBhZHZhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGxpbmVXaWR0aCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0U2ltcGxlTWV0cmljcyA9IGdldFNpbXBsZU1ldHJpY3M7XG4gICAgZnVuY3Rpb24gZ2V0U2ltcGxlV2lkdGgoZm9ybWF0LCB0ZXh0LCBpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPj0gdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIFRleHRGb3JtYXQuY29tYmluZShmb3JtYXQsIFRleHRGb3JtYXQuZGVmYXVsdFRleHRGb3JtYXQsIGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgY29uc3QgeyBzaXplLCBsZXR0ZXJTcGFjaW5nIH0gPSBkZWZhdWx0VGV4dEZvcm1hdDtcbiAgICAgICAgY29uc3QgZm9udCA9IEZvbnQuZ2V0Rm9udChkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHRleHRbaV07XG4gICAgICAgICAgICBpZiAoc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSB0ZXh0W2kgKyAxXTtcbiAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2UoZm9udCwgc2l6ZSwgc3ltYm9sLCBzeW1ib2xOZXh0KSArIGxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICB3aWR0aCArPSBhZHZhbmNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0U2ltcGxlV2lkdGggPSBnZXRTaW1wbGVXaWR0aDtcbn0pKFRleHRNZXRyaWNzIHx8IChUZXh0TWV0cmljcyA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZXRyaWNzLmpzLm1hcCIsImltcG9ydCB7IFBpdm90IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IFRleHRNZXRyaWNzIH0gZnJvbSAnLi9kYXRhL21ldHJpY3MnO1xuZXhwb3J0IGNvbnN0IFRFWFQgPSAndGV4dCc7XG5leHBvcnQgdmFyIFRleHQ7XG4oZnVuY3Rpb24gKFRleHQpIHtcbiAgICBmdW5jdGlvbiBnZXRUZXh0KGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCB7IHRleHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGV4dCkpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJsb2NrID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gYmxvY2sudGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgVGV4dC5nZXRUZXh0ID0gZ2V0VGV4dDtcbiAgICBmdW5jdGlvbiBpc1VwZGF0ZU1ldHJpY3MoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQudXBkYXRlTWV0cmljcyA/PyB0cnVlO1xuICAgIH1cbiAgICBUZXh0LmlzVXBkYXRlTWV0cmljcyA9IGlzVXBkYXRlTWV0cmljcztcbiAgICBmdW5jdGlvbiBpc0F1dG9TaXplKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gIWNvbXBvbmVudC53aWR0aCAmJiAhY29tcG9uZW50LmhlaWdodDtcbiAgICB9XG4gICAgVGV4dC5pc0F1dG9TaXplID0gaXNBdXRvU2l6ZTtcbiAgICBmdW5jdGlvbiBpc1NpbXBsZShjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjb21wb25lbnQudGV4dCA9PT0gJ3N0cmluZycgJiYgaXNBdXRvU2l6ZShjb21wb25lbnQpO1xuICAgIH1cbiAgICBUZXh0LmlzU2ltcGxlID0gaXNTaW1wbGU7XG4gICAgZnVuY3Rpb24gaXNNdWx0aWxpbmUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQubXVsdGlsaW5lID8/IHRydWU7XG4gICAgfVxuICAgIFRleHQuaXNNdWx0aWxpbmUgPSBpc011bHRpbGluZTtcbiAgICBmdW5jdGlvbiB1cGRhdGVNZXRyaWNzKGNvbXBvbmVudCkge1xuICAgICAgICBpZiAoaXNTaW1wbGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgY29tcG9uZW50Lm1ldHJpY3MgPSBUZXh0TWV0cmljcy5nZXRTaW1wbGVNZXRyaWNzKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb21wb25lbnQubWV0cmljcyA9IFRleHRNZXRyaWNzLmdldE1ldHJpY3MoY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0LnVwZGF0ZU1ldHJpY3MgPSB1cGRhdGVNZXRyaWNzO1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhjb21wb25lbnQsIGJvdW5kcykge1xuICAgICAgICBpZiAoaXNVcGRhdGVNZXRyaWNzKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHVwZGF0ZU1ldHJpY3MoY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG1ldHJpY3MgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCFtZXRyaWNzKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghd2lkdGgpIHtcbiAgICAgICAgICAgIHdpZHRoID0gbWV0cmljcy53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhlaWdodCkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gbWV0cmljcy5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoY29tcG9uZW50LCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGNvbXBvbmVudCwgaGVpZ2h0KTtcbiAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgIGJvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBUZXh0LmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFRleHQgfHwgKFRleHQgPSB7fSkpO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIFRleHRFeHRlbnNpb247XG4oZnVuY3Rpb24gKFRleHRFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KHRleHQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGxvY2FsIH0gPSBlbmdpbmUucG9pbnRlcnM7XG4gICAgICAgIFRleHQuY2FsY3VsYXRlQm91bmRzKHRleHQsIGJvdW5kcyk7XG4gICAgICAgIHJldHVybiBSZWN0YW5nbGUuY29udGFpbnMoYm91bmRzLCBsb2NhbCk7XG4gICAgfVxuICAgIFRleHRFeHRlbnNpb24uaGl0VGVzdCA9IGhpdFRlc3Q7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMuaGl0VGVzdC5zZXQoVEVYVCwgaGl0VGVzdCk7XG4gICAgfVxuICAgIFRleHRFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShUZXh0RXh0ZW5zaW9uIHx8IChUZXh0RXh0ZW5zaW9uID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRleHQuanMubWFwIiwiZXhwb3J0IGNvbnN0IExJTkVBUiA9ICdsaW5lYXInO1xuZXhwb3J0IGNvbnN0IFFVQURSQVRJQyA9ICdxdWFkcmF0aWMnO1xuZXhwb3J0IGNvbnN0IFFVQURSQVRJQ19JTiA9ICdxdWFkcmF0aWNpbic7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDX09VVCA9ICdxdWFkcmF0aWNvdXQnO1xuZXhwb3J0IGNvbnN0IENVQklDID0gJ2N1YmljJztcbmV4cG9ydCBjb25zdCBDVUJJQ19JTiA9ICdjdWJpY2luJztcbmV4cG9ydCBjb25zdCBDVUJJQ19PVVQgPSAnY3ViaWNvdXQnO1xuZXhwb3J0IGNvbnN0IFFVQVJUSUMgPSAncXVhcnRpYyc7XG5leHBvcnQgY29uc3QgUVVBUlRJQ19JTiA9ICdxdWFydGljaW4nO1xuZXhwb3J0IGNvbnN0IFFVQVJUSUNfT1VUID0gJ3F1YXJ0aWNvdXQnO1xuZXhwb3J0IGNvbnN0IFFVSU5USUMgPSAncXVpbnRpYyc7XG5leHBvcnQgY29uc3QgUVVJTlRJQ19JTiA9ICdxdWludGljaW4nO1xuZXhwb3J0IGNvbnN0IFFVSU5USUNfT1VUID0gJ3F1aW50aWNvdXQnO1xuZXhwb3J0IGNvbnN0IFNJTlVTT0lEQUwgPSAncXVpbnRpYyc7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTF9JTiA9ICdxdWludGljaW4nO1xuZXhwb3J0IGNvbnN0IFNJTlVTT0lEQUxfT1VUID0gJ3F1aW50aWNvdXQnO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMID0gJ2V4cG9uZW50aWFsJztcbmV4cG9ydCBjb25zdCBFWFBPTkVOVElBTF9JTiA9ICdleHBvbmVudGlhbGluJztcbmV4cG9ydCBjb25zdCBFWFBPTkVOVElBTF9PVVQgPSAnZXhwb25lbnRpYWxvdXQnO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSID0gJ2NpcmN1bGFyJztcbmV4cG9ydCBjb25zdCBDSVJDVUxBUl9JTiA9ICdjaXJjdWxhcmluJztcbmV4cG9ydCBjb25zdCBDSVJDVUxBUl9PVVQgPSAnY2lyY3VsYXJvdXQnO1xuZXhwb3J0IGNvbnN0IEVMQVNUSUMgPSAnZWxhc3RpYyc7XG5leHBvcnQgY29uc3QgRUxBU1RJQ19JTiA9ICdlbGFzdGljaW4nO1xuZXhwb3J0IGNvbnN0IEVMQVNUSUNfT1VUID0gJ2VsYXN0aWNvdXQnO1xuZXhwb3J0IGNvbnN0IEJBQ0sgPSAnYmFjayc7XG5leHBvcnQgY29uc3QgQkFDS19JTiA9ICdiYWNraW4nO1xuZXhwb3J0IGNvbnN0IEJBQ0tfT1VUID0gJ2JhY2tvdXQnO1xuZXhwb3J0IGNvbnN0IEJPVU5DRSA9ICdib3VuY2UnO1xuZXhwb3J0IGNvbnN0IEJPVU5DRV9JTiA9ICdib3VuY2Vpbic7XG5leHBvcnQgY29uc3QgQk9VTkNFX09VVCA9ICdib3VuY2VvdXQnO1xuZXhwb3J0IGNvbnN0IGVhc2luZyA9IHtcbiAgICBbTElORUFSXTogKHZhbHVlKSA9PiB2YWx1ZSxcbiAgICBbUVVBRFJBVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTAuNSAqICgtLXZhbHVlICogKHZhbHVlIC0gMikgLSAxKTtcbiAgICB9LFxuICAgIFtRVUFEUkFUSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVBRFJBVElDX09VVF06ICh2YWx1ZSkgPT4gKHZhbHVlICogKDIgLSB2YWx1ZSkpLFxuICAgIFtDVUJJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKyAyKTtcbiAgICB9LFxuICAgIFtDVUJJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW0NVQklDX09VVF06ICh2YWx1ZSkgPT4gKC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMSksXG4gICAgW1FVQVJUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgLSAyKTtcbiAgICB9LFxuICAgIFtRVUFSVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUFSVElDX09VVF06ICh2YWx1ZSkgPT4gKDEgLSAtLXZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVJTlRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDIpO1xuICAgIH0sXG4gICAgW1FVSU5USUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVJTlRJQ19PVVRdOiAodmFsdWUpID0+ICgtLXZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAxKSxcbiAgICBbU0lOVVNPSURBTF06ICh2YWx1ZSkgPT4gKDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIHZhbHVlKSkpLFxuICAgIFtTSU5VU09JREFMX0lOXTogKHZhbHVlKSA9PiAoMSAtIE1hdGguY29zKCh2YWx1ZSAqIE1hdGguUEkpIC8gMikpLFxuICAgIFtTSU5VU09JREFMX09VVF06ICh2YWx1ZSkgPT4gKE1hdGguc2luKCh2YWx1ZSAqIE1hdGguUEkpIC8gMikpLFxuICAgIFtFWFBPTkVOVElBTF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiBNYXRoLnBvdygxMDI0LCB2YWx1ZSAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoLU1hdGgucG93KDIsIC0xMCAqICh2YWx1ZSAtIDEpKSArIDIpO1xuICAgIH0sXG4gICAgW0VYUE9ORU5USUFMX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgPT09IDAgPyAwIDogTWF0aC5wb3coMTAyNCwgdmFsdWUgLSAxKSksXG4gICAgW0VYUE9ORU5USUFMX09VVF06ICh2YWx1ZSkgPT4gKHZhbHVlID09PSAxID8gMSA6IDEgLSBNYXRoLnBvdygyLCAtMTAgKiB2YWx1ZSkpLFxuICAgIFtDSVJDVUxBUl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSB2YWx1ZSAqIHZhbHVlKSAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAodmFsdWUgLT0gMikgKiB2YWx1ZSkgKyAxKTtcbiAgICB9LFxuICAgIFtDSVJDVUxBUl9JTl06ICh2YWx1ZSkgPT4gKDEgLSBNYXRoLnNxcnQoMSAtIHZhbHVlICogdmFsdWUpKSxcbiAgICBbQ0lSQ1VMQVJfT1VUXTogKHZhbHVlKSA9PiBNYXRoLnNxcnQoMSAtIC0tdmFsdWUgKiB2YWx1ZSksXG4gICAgW0VMQVNUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlICo9IDI7XG4gICAgICAgIGlmICh2YWx1ZSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAtMC41ICogTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiBNYXRoLnBvdygyLCAtMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpICsgMTtcbiAgICB9LFxuICAgIFtFTEFTVElDX0lOXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLU1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcbiAgICB9LFxuICAgIFtFTEFTVElDX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGgucG93KDIsIC0xMCAqIHZhbHVlKSAqIE1hdGguc2luKCh2YWx1ZSAtIDAuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuICAgIH0sXG4gICAgW0JBQ0tdOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTggKiAxLjUyNTtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiAodmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgLSBzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgKyBzKSArIDIpO1xuICAgIH0sXG4gICAgW0JBQ0tfSU5dOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTg7XG4gICAgICAgIHJldHVybiB2YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSAtIHMpO1xuICAgIH0sXG4gICAgW0JBQ0tfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gLS12YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSArIHMpICsgMTtcbiAgICB9LFxuICAgIFtCT1VOQ0VdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMC41KSB7XG4gICAgICAgICAgICByZXR1cm4gZWFzaW5nW0JPVU5DRV9JTl0odmFsdWUgKiAyKSAqIDAuNTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWFzaW5nW0JPVU5DRV9PVVRdKHZhbHVlICogMiAtIDEpICogMC41ICsgMC41O1xuICAgIH0sXG4gICAgW0JPVU5DRV9JTl06ICh2YWx1ZSkgPT4gKDEgLSBlYXNpbmdbQk9VTkNFX09VVF0oMSAtIHZhbHVlKSksXG4gICAgW0JPVU5DRV9PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMSAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA8IDIgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDEuNSAvIDIuNzUpICogdmFsdWUgKyAwLjc1O1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA8IDIuNSAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMi4yNSAvIDIuNzUpICogdmFsdWUgKyAwLjkzNzU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAyLjYyNSAvIDIuNzUpICogdmFsdWUgKyAwLjk4NDM3NTtcbiAgICB9LFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVhc2luZy5qcy5tYXAiLCJpbXBvcnQgeyBlYXNpbmcsIExJTkVBUiB9IGZyb20gJy4vZWFzaW5nJztcbmV4cG9ydCBjb25zdCBUV0VFTiA9ICd0d2Vlbic7XG5leHBvcnQgdmFyIFR3ZWVuRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChUd2VlbkV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHVwZGF0ZShjb21wb25lbnQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHR3ZWVuIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IHsgcGhhc2VzIH0gPSB0d2VlbjtcbiAgICAgICAgaWYgKCFwaGFzZXM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ0FuaW1hdGlvbiBwYXJ0cyBub3QgZm91bmQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHdlZW4udGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0d2Vlbi50aW1lICs9IGVuZ2luZS51cGRhdGVyLnRpbWU7XG4gICAgICAgIGNvbnN0IHsgdGltZSB9ID0gdHdlZW47XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBwaGFzZXMuZm9yRWFjaCgocGhhc2UpID0+IHtcbiAgICAgICAgICAgIGlmICghcGhhc2UudGltZSkge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdBbmltYXRpb24gdGltZSBub3Qgc2V0Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBoYXNlLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gcGhhc2Uub2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZWFzaW5nTmFtZSA9IHBoYXNlPy5lYXNpbmc/LnRvTG93ZXJDYXNlKCkgPz8gTElORUFSO1xuICAgICAgICAgICAgY29uc3QgZWFzaW5nTWV0aG9kID0gZWFzaW5nW2Vhc2luZ05hbWVdO1xuICAgICAgICAgICAgaWYgKCFlYXNpbmdNZXRob2QpIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZyhgVW5rbm93biBlYXNpbmcgdHlwZTogJHtlYXNpbmd9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAodGltZSAtIG9mZnNldCkgLyBwaGFzZS50aW1lO1xuICAgICAgICAgICAgb2Zmc2V0ICs9IHBoYXNlLnRpbWU7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCAwIHx8IHZhbHVlID4gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVhc2luZ1ZhbHVlID0gZWFzaW5nTWV0aG9kKHZhbHVlKTtcbiAgICAgICAgICAgIGlmICghcGhhc2UudG8pIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnQW5pbWF0aW9uIFwidG9cIiBzdGF0ZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBoYXNlLmZyb20pIHtcbiAgICAgICAgICAgICAgICBwaGFzZS5mcm9tID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHRvLCBmcm9tIH0gPSBwaGFzZTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gY29tcG9uZW50O1xuICAgICAgICAgICAgT2JqZWN0LmtleXModG8pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmcm9tW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tW2tleV0gPSBzdGF0ZVtrZXldID8/IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGZyb21WYWx1ZSA9IGZyb21ba2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b1ZhbHVlID0gdG9ba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZyb21WYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHRvVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlVmFsdWUgPSBmcm9tVmFsdWUgKyBlYXNpbmdWYWx1ZSAqICh0b1ZhbHVlIC0gZnJvbVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IHN0YXRlVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodHdlZW4ubG9vcCAmJiB0d2Vlbi50aW1lID4gb2Zmc2V0KSB7XG4gICAgICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUd2VlbkV4dGVuc2lvbi51cGRhdGUgPSB1cGRhdGU7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucHJvcGVydGllcy5zZXQoVFdFRU4sIHVwZGF0ZSk7XG4gICAgfVxuICAgIFR3ZWVuRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoVHdlZW5FeHRlbnNpb24gfHwgKFR3ZWVuRXh0ZW5zaW9uID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR3ZWVuLmpzLm1hcCIsImZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgdHlwZSkge1xuICAgIGNvbnN0IGtleUV2ZW50ID0ge1xuICAgICAgICB0eXBlLFxuICAgICAgICBrZXk6IGV2ZW50LmtleSxcbiAgICAgICAgY29kZTogZXZlbnQuY29kZSxcbiAgICAgICAgY3RybDogZXZlbnQuY3RybEtleSxcbiAgICAgICAgYWx0OiBldmVudC5hbHRLZXksXG4gICAgICAgIHNoaWZ0OiBldmVudC5zaGlmdEtleSxcbiAgICAgICAgcmVwZWF0OiBldmVudC5yZXBlYXQsXG4gICAgfTtcbiAgICBlbmdpbmUua2V5Ym9hcmQuZGlzcGF0Y2goa2V5RXZlbnQpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5leHBvcnQgdmFyIEtleWJvYXJkRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChLZXlib2FyZEV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ2tleURvd24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdrZXlQcmVzcycpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ2tleVVwJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBLZXlib2FyZEV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKEtleWJvYXJkRXh0ZW5zaW9uIHx8IChLZXlib2FyZEV4dGVuc2lvbiA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1rZXlib2FyZC5qcy5tYXAiLCJmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsIHR5cGUpIHtcbiAgICBjb25zdCB7IHZpZXcgfSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICBjb25zdCBjbGllbnRSZWN0ID0gdmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIGNsaWVudFJlY3QubGVmdCAtIHZpZXcuY2xpZW50TGVmdDtcbiAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIGNsaWVudFJlY3QudG9wIC0gdmlldy5jbGllbnRUb3A7XG4gICAgZW5naW5lLnBvaW50ZXJzLmRpc3BhdGNoKHR5cGUsIHgsIHksIDApO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5leHBvcnQgdmFyIE1vdXNlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChNb3VzZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gZW5naW5lLnBsYXRmb3JtO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckRvd24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlclVwJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlck1vdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckNhbmNlbCcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgTW91c2VFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShNb3VzZUV4dGVuc2lvbiB8fCAoTW91c2VFeHRlbnNpb24gPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW91c2UuanMubWFwIiwiZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCB0eXBlKSB7XG4gICAgY29uc3QgeyB2aWV3IH0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgY29uc3QgY2xpZW50UmVjdCA9IHZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldO1xuICAgICAgICBjb25zdCB4ID0gdG91Y2guY2xpZW50WCAtIGNsaWVudFJlY3QubGVmdCAtIHZpZXcuY2xpZW50TGVmdDtcbiAgICAgICAgY29uc3QgeSA9IHRvdWNoLmNsaWVudFkgLSBjbGllbnRSZWN0LnRvcCAtIHZpZXcuY2xpZW50VG9wO1xuICAgICAgICBlbmdpbmUucG9pbnRlcnMuZGlzcGF0Y2godHlwZSwgeCwgeSwgdG91Y2guaWRlbnRpZmllcik7XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5leHBvcnQgdmFyIFRvdWNoRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChUb3VjaEV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gZW5naW5lLnBsYXRmb3JtO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJEb3duJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyVXAnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyTW92ZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckNhbmNlbCcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgVG91Y2hFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShUb3VjaEV4dGVuc2lvbiB8fCAoVG91Y2hFeHRlbnNpb24gPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG91Y2guanMubWFwIiwiaW1wb3J0IHsgQUJJTElUWV9XT0xGIH0gZnJvbSAnLi9hc3NldHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN1cnNpdmUoKSB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHR4OiAzMCxcblx0XHRcdHk6IDMwLFxuXHRcdFx0c2NhbGVYOiAwLjksXG5cdFx0XHRzY2FsZVk6IDAuOSxcblx0XHRcdHJvdGF0aW9uOiAwLjIsXG5cdFx0XHRhbHBoYTogMC45LFxuXHRcdFx0Y2hpbGRyZW46IFt7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQUJJTElUWV9XT0xGLFxuXHRcdFx0XHRzY2FsZTogMC4zLFxuXHRcdFx0fV0sXG5cdFx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdFx0dGhpcy5yb3RhdGlvbiArPSB0aW1lICogMC4wNTtcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblxuXHRjb250YWluZXIuY2hpbGRyZW4uY2hpbGRyZW4ucHVzaChjb250YWluZXIgYXMgbmV2ZXIpO1xuXG5cdHJldHVybiBjb250YWluZXI7XG59XG4iLCJjb25zdCBBU1NFVFMgPSAnYXNzZXRzLyc7XG5cbmV4cG9ydCBjb25zdCBBTklNQUxJU1QgPSAnaWQ6YW5pbWFsaXN0JztcbmV4cG9ydCBjb25zdCBBUkNIRVIgPSAnaWQ6YXJjaGVyJztcblxuZXhwb3J0IGNvbnN0IEFOSU1BTElTVF9JTUFHRSA9IGAke0FTU0VUU31BbmltYWxpc3RGb3gxX2ltYWdlLnBuZ2A7XG5leHBvcnQgY29uc3QgQVJDSEVSX0lNQUdFID0gYCR7QVNTRVRTfUFyY2hlcjJfaHVudGVyX2ltYWdlLnBuZ2A7XG5cbmV4cG9ydCBjb25zdCBBQklMSVRZX0ZPWCA9IGAke0FTU0VUU31BbmltYWxpc3RBYmlsaXR5X0ZveC5wbmdgO1xuZXhwb3J0IGNvbnN0IEFCSUxJVFlfV09MRiA9IGAke0FTU0VUU31BbmltYWxpc3RBYmlsaXR5X1dvbGYucG5nYDtcblxuZXhwb3J0IGNvbnN0IEJBQ0tHUk9VTkQgPSBgJHtBU1NFVFN9anVuZ2xlX2JhY2tncm91bmQuanBnYDtcblxuZXhwb3J0IGNvbnN0IFRFU1RfQ0FOVkFTID0gJ3Rlc3QuY2FudmFzJztcblxuZXhwb3J0IGNvbnN0IFNDRU5FID0gYCR7QVNTRVRTfS9zY2VuZS5qc29uYDtcbiIsImltcG9ydCB7IENhbnZhc0VuZ2luZSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgQ2FudmFzVGV4dEV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3RleHQnO1xuaW1wb3J0IHsgQ3VzdG9tSW1hZ2VFeHRlbnNpb24gfSBmcm9tICcuL2ltYWdlJztcbmltcG9ydCBDdXN0b21QbGF0Zm9ybSBmcm9tICcuL3BsYXRmb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tRW5naW5lIGV4dGVuZHMgQ2FudmFzRW5naW5lIHtcblx0cGxhdGZvcm06IEN1c3RvbVBsYXRmb3JtO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5wbGF0Zm9ybSA9IG5ldyBDdXN0b21QbGF0Zm9ybSh0aGlzKTtcblxuXHRcdENhbnZhc1RleHRFeHRlbnNpb24uaW5pdCh0aGlzKTtcblx0XHRDdXN0b21JbWFnZUV4dGVuc2lvbi5pbml0KHRoaXMpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDYW52YXNQbGF0Zm9ybSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgRW5naW5lLCBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VFeHRlbnNpb24sIElNQUdFLCBJbWFnZSB9IGZyb20gJ0BqZW5nL2ltYWdlJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuaW1wb3J0IEN1c3RvbUVuZ2luZSBmcm9tICcuL2VuZ2luZSc7XG5cbmV4cG9ydCBuYW1lc3BhY2UgQ3VzdG9tSW1hZ2VFeHRlbnNpb24ge1xuXHRleHBvcnQgZnVuY3Rpb24gcmVuZGVyKGltYWdlOiBJbWFnZSwgZW5naW5lOiBFbmdpbmUpOiB2b2lkIHtcblx0XHRpZiAoIWltYWdlLnNyYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHsgbWF0cml4LCBjb2xvclRyYW5zZm9ybSB9ID0gZW5naW5lLnJlbmRlcmVyLmdldENvbnRleHQoKTtcblxuXHRcdGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoaW1hZ2Uuc3JjKSBhcyBJbWFnZVJlc291cmNlIHwgbnVsbDtcblxuXHRcdGlmICghcmVzb3VyY2U/LmxvYWRlZCB8fCAhcmVzb3VyY2U/LmltYWdlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29udGV4dDJkID0gKGVuZ2luZS5wbGF0Zm9ybSBhcyBDYW52YXNQbGF0Zm9ybSkuZ2V0Q29udGV4dCgpO1xuXG5cdFx0Y29udGV4dDJkLnNldFRyYW5zZm9ybShcblx0XHRcdG1hdHJpeC5hLFxuXHRcdFx0bWF0cml4LmIsXG5cdFx0XHRtYXRyaXguYyxcblx0XHRcdG1hdHJpeC5kLFxuXHRcdFx0bWF0cml4LnR4LFxuXHRcdFx0bWF0cml4LnR5LFxuXHRcdCk7XG5cblx0XHRjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuXHRcdGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG5cdFx0Y29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG5cblx0XHRjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcblx0XHRjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnbGlnaHRncmF5Jztcblx0XHRjb250ZXh0MmQuc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcblx0fVxuXG5cdGV4cG9ydCBmdW5jdGlvbiBpbml0KGVuZ2luZTogQ3VzdG9tRW5naW5lKSB7XG5cdFx0SW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuXHRcdGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoSU1BR0UsIHJlbmRlcik7XG5cdH1cbn1cbiIsImltcG9ydCB7IENhbnZhc1BsYXRmb3JtIH0gZnJvbSAnQGplbmcvY2FudmFzLWVuZ2luZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVBsYXRmb3JtIGV4dGVuZHMgQ2FudmFzUGxhdGZvcm0ge1xuXHRjbGVhcigpIHtcblx0XHRjb25zdCBjb250ZXh0MmQgPSB0aGlzLmdldENvbnRleHQoKTtcblx0XHRjb250ZXh0MmQuZmlsbFN0eWxlID0gJ2JsYWNrJztcblx0XHRjb250ZXh0MmQuc2V0VHJhbnNmb3JtKCk7XG5cdFx0Y29udGV4dDJkLmZpbGxSZWN0KDAsIDAsIGNvbnRleHQyZC5jYW52YXMud2lkdGgsIGNvbnRleHQyZC5jYW52YXMuaGVpZ2h0KTtcblx0XHRjb250ZXh0MmQuZmlsbFN0eWxlID0gJyc7XG5cdH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZSB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVJlc291cmNlTWFuYWdlciB7XG5cdHJlYWRvbmx5IGFsaWFzZXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXHRyZWFkb25seSByZXNvdXJjZXMgPSBuZXcgTWFwPHN0cmluZywgSW1hZ2VSZXNvdXJjZT4oKTtcblxuXHRyZXNvbHZlID0gKGFzc2V0OiBzdHJpbmcsIGVuZ2luZTogRW5naW5lKTogSW1hZ2VSZXNvdXJjZSB8IG51bGwgPT4ge1xuXHRcdGlmIChhc3NldC5pbmRleE9mKCdpZDonKSA9PT0gMCkge1xuXHRcdFx0Y29uc3QgaWQgPSBhc3NldC5zbGljZSgzKTtcblx0XHRcdGxldCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VzLmdldChpZCkgYXMgSW1hZ2VSZXNvdXJjZTtcblx0XHRcdGlmICghcmVzb3VyY2UpIHtcblx0XHRcdFx0Y29uc3QgdXJsID0gdGhpcy5hbGlhc2VzLmdldChpZCk7XG5cdFx0XHRcdGlmICh1cmwpIHtcblx0XHRcdFx0XHRyZXNvdXJjZSA9IEltYWdlUmVzb3VyY2UucmVzb2x2ZSh1cmwsIGVuZ2luZSkgYXMgSW1hZ2VSZXNvdXJjZTtcblx0XHRcdFx0XHR0aGlzLnJlc291cmNlcy5zZXQoaWQsIHJlc291cmNlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbmdpbmUuZGVidWcud2FybmluZyhgUmVzb3VyY2Ugd2l0aCBpZDogJHthc3NldH0gbm90IGZvdW5kYCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZXNvdXJjZTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRpbml0KGVuZ2luZTogRW5naW5lKSB7XG5cdFx0ZW5naW5lLnJlc291cmNlcy5yZXNvbHZlcnMuYWRkKHRoaXMucmVzb2x2ZSk7XG5cdH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgU3RhdGlzdGljcyB7XG5cdGdldFJlbmRlclRpbWUoKTogbnVtYmVyO1xuXHRnZXRVcGRhdGVUaW1lKCk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZwcyhzdGF0aXN0aWNzOiBTdGF0aXN0aWNzKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHRleHQ6ICdmcHMnLFxuXHRcdGZyYW1lczogMCxcblx0XHRmcmFtZVRpbWU6IDAsXG5cdFx0dXBkYXRlVGltZTogMCxcblx0XHRyZW5kZXJUaW1lOiAwLFxuXHRcdGZvcm1hdDoge1xuXHRcdFx0c2l6ZTogMjAsXG5cdFx0XHRjb2xvcjogMHhmZmZmZmYsXG5cdFx0fSxcblx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMuZnJhbWVUaW1lICs9IHRpbWU7XG5cdFx0XHR0aGlzLnVwZGF0ZVRpbWUgKz0gc3RhdGlzdGljcy5nZXRVcGRhdGVUaW1lKCk7XG5cdFx0XHR0aGlzLnJlbmRlclRpbWUgKz0gc3RhdGlzdGljcy5nZXRSZW5kZXJUaW1lKCk7XG5cdFx0XHR0aGlzLmZyYW1lcysrO1xuXHRcdFx0aWYgKHRoaXMuZnJhbWVUaW1lID49IDEpIHtcblx0XHRcdFx0Y29uc3QgZnJhbWVUaW1lID0gTWF0aC5jZWlsKDEwMDAgKiB0aGlzLmZyYW1lVGltZSAvIHRoaXMuZnJhbWVzKTtcblx0XHRcdFx0Y29uc3QgdXBkYXRlVGltZSA9ICh0aGlzLnVwZGF0ZVRpbWUgLyB0aGlzLmZyYW1lcykudG9GaXhlZCgyKTtcblx0XHRcdFx0Y29uc3QgcmVuZGVyVGltZSA9ICh0aGlzLnJlbmRlclRpbWUgLyB0aGlzLmZyYW1lcykudG9GaXhlZCgyKTtcblx0XHRcdFx0dGhpcy50ZXh0ID0gYGZwczogJHt0aGlzLmZyYW1lc30sICR7ZnJhbWVUaW1lfSBtc1xcbnVwZGF0ZTogJHt1cGRhdGVUaW1lfSBtc1xcbnJlbmRlcjogJHtyZW5kZXJUaW1lfSBtc2A7XG5cdFx0XHRcdHRoaXMuZnJhbWVUaW1lID0gMDtcblx0XHRcdFx0dGhpcy51cGRhdGVUaW1lID0gMDtcblx0XHRcdFx0dGhpcy5yZW5kZXJUaW1lID0gMDtcblx0XHRcdFx0dGhpcy5mcmFtZXMgPSAwO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7XG5cdEFCSUxJVFlfRk9YLCBBQklMSVRZX1dPTEYsIEFOSU1BTElTVCwgQVJDSEVSLCBCQUNLR1JPVU5ELCBTQ0VORSxcbn0gZnJvbSAnLi9hc3NldHMnO1xuaW1wb3J0IGFydGlmYWN0IGZyb20gJy4vYXJ0aWZhY3QnO1xuaW1wb3J0IHsgZnBzLCBTdGF0aXN0aWNzIH0gZnJvbSAnLi9mcHMnO1xuaW1wb3J0IHsgdW5pdCwgVW5pdFByb3BlcnRpZXMgfSBmcm9tICcuL3VuaXQnO1xuaW1wb3J0IHsgcHJlbG9hZGVyLCBQcmVsb2FkZXJJbmZvIH0gZnJvbSAnLi9wcmVsb2FkZXInO1xuXG5pbnRlcmZhY2UgTWFpbiB7XG5cdHN0YXJ0KCk6IHZvaWQ7XG5cdFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuaW50ZXJmYWNlIE1haW5Qcm9wZXJ0aWVzIGV4dGVuZHMgU3RhdGlzdGljcyB7XG5cdGdldENhbnZhc1dpZHRoKCk6IG51bWJlcjtcblx0Z2V0Q2FudmFzSGVpZ2h0KCk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbihwYXJhbWV0ZXJzOiBNYWluUHJvcGVydGllcyk6IE1haW4ge1xuXHRmdW5jdGlvbiBvblVuaXRDbGljayhkYXRhOiBVbml0UHJvcGVydGllcykge1xuXHRcdGRhdGEuaGVhbHRoID0gTWF0aC5yYW5kb20oKTtcblx0XHRjb25zb2xlLmxvZygnb25Vbml0Q2xpY2snLCBkYXRhLm5hbWUpO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IHtcblx0XHR0eXBlOiAnbG9hZGVyJyxcblx0XHR2aXNpYmxlOiBmYWxzZSxcblx0XHRlbmFibGVkOiBmYWxzZSxcblx0XHRvbkxvYWRlZCgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdiYWNrZ3JvdW5kIGxvYWRlZCcpO1xuXHRcdFx0dGhpcy52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0fSxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0YmFja2dyb3VuZDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEJBQ0tHUk9VTkQsXG5cdFx0XHRcdHNjYWxlWDogMSxcblx0XHRcdFx0c2NhbGVZOiAxLFxuXHRcdFx0fSxcblx0XHRcdGZpZ3VyZToge1xuXHRcdFx0XHR0eXBlOiAnc2hhcGUnLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3JlY3RhbmdsZScsXG5cdFx0XHRcdFx0eDogMjAsXG5cdFx0XHRcdFx0eTogMjAsXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCxcblx0XHRcdFx0XHRoZWlnaHQ6IDUwLFxuXHRcdFx0XHRcdGZpbGw6IDB4ZmYwMGZmLFxuXHRcdFx0XHRcdHN0cm9rZTogMHgwMDAwZmYsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0c2hhcGVzOiB7XG5cdFx0XHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0XHRcdGRhdGE6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAnZWxsaXBzZScsXG5cdFx0XHRcdFx0XHR4OiAxMDAsXG5cdFx0XHRcdFx0XHR5OiAxMDAsXG5cdFx0XHRcdFx0XHRyYWRpdXM6IDUwLFxuXHRcdFx0XHRcdFx0ZmlsbDogeyB0eXBlOiAnc29saWQnLCBjb2xvcjogMHhmZmZmMDAsIGFscGhhOiAxIH0sXG5cdFx0XHRcdFx0XHRzdHJva2U6IHsgZmlsbDogMHgwMDAwZmYsIHRoaWNrbmVzczogMTAgfSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdwYXRoJyxcblx0XHRcdFx0XHRcdGRhdGE6ICdNIDExMCwgMTEwIEggMTkwIFYgMTkwIEggMTEwIFonLFxuXHRcdFx0XHRcdFx0ZmlsbDogMHg5OTAwMDAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAncGF0aCcsXG5cdFx0XHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ21vdmVUbycsIHg6IDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMTAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDEwMCwgeTogMTAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDAsIHk6IDEwMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0ZmlsbDogeyB0eXBlOiAnc29saWQnLCBjb2xvcjogMHg5OTk5OTksIGFscGhhOiAwLjYgfSxcblx0XHRcdFx0XHRcdHN0cm9rZTogMHgwMDAwMDAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHR1bml0czoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHR1bml0KHtcblx0XHRcdFx0XHRcdG5hbWU6ICdBcmNoZXInLCBoZWFsdGg6IDEsIGltYWdlOiBBUkNIRVIsIG9uQ2xpY2s6IG9uVW5pdENsaWNrLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdHVuaXQoe1xuXHRcdFx0XHRcdFx0bmFtZTogJ0FuaW1hbGlzdCcsIGhlYWx0aDogMSwgaW1hZ2U6IEFOSU1BTElTVCwgb25DbGljazogb25Vbml0Q2xpY2ssXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0YXJ0aWZhY3Q6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdHg6IDMwMCxcblx0XHRcdFx0eTogMzUwLFxuXHRcdFx0XHRjaGlsZHJlbjogYXJ0aWZhY3QoKSxcblx0XHRcdH0sXG5cdFx0XHRtYXA6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0eTogNDUwLFxuXHRcdFx0XHRzY2FsZVg6IDAuMixcblx0XHRcdFx0c2NhbGVZOiAwLjIsXG5cdFx0XHRcdGFscGhhOiAwLjUsXG5cdFx0XHRcdHNyYzogJ3Rlc3QuY2FudmFzJyxcblx0XHRcdFx0b25Qb2ludGVyT3ZlcigpIHtcblx0XHRcdFx0XHR0aGlzLmFscGhhID0gMTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b25Qb2ludGVyT3V0KCkge1xuXHRcdFx0XHRcdHRoaXMuYWxwaGEgPSAwLjU7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YWJpbGl0eUZveDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEFCSUxJVFlfRk9YLFxuXHRcdFx0XHR4OiA0NTAsXG5cdFx0XHRcdHk6IDUwMCxcblx0XHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdFx0dGludDoge1xuXHRcdFx0XHRcdGNvbG9yOiAweDAwZmYwMCxcblx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0fSBhcyBhbnksXG5cdFx0XHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0XHRcdGlmICh0aGlzLnRpbnQpIHtcblx0XHRcdFx0XHRcdHRoaXMudGludC52YWx1ZSArPSB0aW1lO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMudGludC52YWx1ZSA+PSAxKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudGludC52YWx1ZSA9IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duKGU6IGFueSkge1xuXHRcdFx0XHRcdGlmICh0aGlzLnRpbnQpIHtcblx0XHRcdFx0XHRcdHRoaXMudGludCA9IG51bGw7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMudGludCA9IHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IDB4MDBmZjAwLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmb3gnLCBlKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRhYmlsaXR5V29sZjoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0eDogMzUwLFxuXHRcdFx0XHR5OiA0MDAsXG5cdFx0XHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0XHRzcmM6IEFCSUxJVFlfV09MRixcblx0XHRcdFx0XHRzY2FsZTogMC41LFxuXHRcdFx0XHRcdGFscGhhOiAxLFxuXHRcdFx0XHRcdHR3ZWVuOiB7XG5cdFx0XHRcdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0XHRcdFx0cGhhc2VzOiBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHg6IDIwMCB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAnY3ViaWNvdXQnLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeTogMjAwLCBhbHBoYTogMC41IH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6ICdxdWFkcmF0aWNJbicsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB4OiAwLCBhbHBoYTogMSB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAncXVhZHJhdGljT3V0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRmcHM6IGZwcyhwYXJhbWV0ZXJzKSxcblx0XHR9LFxuXHR9O1xuXG5cdGNvbnN0IHByZWxvYWRlckluZm86IFByZWxvYWRlckluZm8gPSB7XG5cdFx0Z2V0V2lkdGg6IHBhcmFtZXRlcnMuZ2V0Q2FudmFzV2lkdGgsXG5cdFx0Z2V0SGVpZ2h0OiBwYXJhbWV0ZXJzLmdldENhbnZhc0hlaWdodCxcblx0XHRnZXRQcm9ncmVzcygpIHtcblx0XHRcdHJldHVybiBMb2FkZXIuZ2V0TG9hZGluZ1Byb2dyZXNzKGNvbnRlbnQpO1xuXHRcdH0sXG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0Y29udGVudCxcblx0XHRcdHByZWxvYWRlcjogcHJlbG9hZGVyKHByZWxvYWRlckluZm8pLFxuXHRcdFx0c2NlbmU6IHtcblx0XHRcdFx0dHlwZTogJ3NjZW5lJywgeDogMzAwLCBzcmM6IFNDRU5FLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdG9uVXBkYXRlKCkge1xuXHRcdFx0Y29uc3QgaXNMb2FkZWQgPSAhdGhpcy5jaGlsZHJlbi5jb250ZW50LnZpc2libGU7XG5cdFx0XHR0aGlzLmNoaWxkcmVuLnByZWxvYWRlci52aXNpYmxlID0gaXNMb2FkZWQ7XG5cdFx0XHR0aGlzLmNoaWxkcmVuLnByZWxvYWRlci5lbmFibGVkID0gaXNMb2FkZWQ7XG5cdFx0fSxcblx0XHRzdGFydCgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdzdGFydCcpO1xuXHRcdH0sXG5cdH07XG59XG4iLCJpbXBvcnQgeyBTaGFwZSB9IGZyb20gJ0BqZW5nL3NoYXBlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcmVsb2FkZXJJbmZvIHtcblx0Z2V0UHJvZ3Jlc3MoKTogbnVtYmVyO1xuXHRnZXRXaWR0aCgpOiBudW1iZXI7XG5cdGdldEhlaWdodCgpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkZXIoaW5mbzogUHJlbG9hZGVySW5mbykge1xuXHRjb25zdCBoZWlnaHQgPSAyMDtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnc2hhcGUnLFxuXHRcdHNjYWxlWDogMSxcblx0XHR5OiBpbmZvLmdldEhlaWdodCgpIC0gaGVpZ2h0LFxuXHRcdGRhdGE6IHtcblx0XHRcdHR5cGU6ICdyZWN0YW5nbGUnLFxuXHRcdFx0d2lkdGg6IDEsXG5cdFx0XHRoZWlnaHQsXG5cdFx0XHRmaWxsOiAweGZmMDAwMCxcblx0XHR9LFxuXHRcdG9uVXBkYXRlKCkge1xuXHRcdFx0dGhpcy5zY2FsZVghICs9IChpbmZvLmdldFdpZHRoKCkgKiBpbmZvLmdldFByb2dyZXNzKCkgLSB0aGlzLnNjYWxlWCEpIC8gMjtcblx0XHR9LFxuXHR9IGFzIFNoYXBlO1xufVxuIiwiY29uc3QgU1BFRUQgPSAxMDA7XG5cbmludGVyZmFjZSBVbml0IHtcblx0W2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRQcm9wZXJ0aWVzIHtcblx0bmFtZTogc3RyaW5nLFxuXHRoZWFsdGg6IG51bWJlcixcblx0aW1hZ2U6IHN0cmluZyxcblx0b25DbGljazogKGRhdGE6IFVuaXRQcm9wZXJ0aWVzKSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBvblByb3BzVXBkYXRlKHByb3BzOiBhbnksIGNhbGxiYWNrOiAodGltZTogbnVtYmVyKSA9PiB2b2lkKSB7XG5cdGNvbnN0IGNvcHkgPSB7IC4uLnByb3BzIH07XG5cdHJldHVybiAodGltZTogbnVtYmVyKSA9PiB7XG5cdFx0Ly8gY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKTtcblx0XHRsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuXHRcdGZvciAoY29uc3Qga2V5IGluIHByb3BzKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5cdFx0XHRpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRpZiAoY29weVtrZXldICE9PSBwcm9wc1trZXldKSB7XG5cdFx0XHRcdFx0Y29weVtrZXldID0gcHJvcHNba2V5XTtcblx0XHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VkKSB7XG5cdFx0XHRjYWxsYmFjayh0aW1lKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIHJ1bk9uUHJvcHNVcGRhdGUocHJvcHM6IGFueSwgY29tcG9uZW50OiBhbnkpIHtcblx0Y29tcG9uZW50Lm9uVXBkYXRlID0gb25Qcm9wc1VwZGF0ZShwcm9wcywgY29tcG9uZW50Lm9uVXBkYXRlLmJpbmQoY29tcG9uZW50KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bml0KHByb3BzOiBVbml0UHJvcGVydGllcyk6IFVuaXQge1xuXHRmdW5jdGlvbiBnZXRUaXRsZSgpIHtcblx0XHRyZXR1cm4gYCR7cHJvcHMubmFtZX1cXG4ke01hdGgucm91bmQocHJvcHMuaGVhbHRoICogMTAwKX0lYDtcblx0fVxuXG5cdGNvbnN0IHVuaXRWaWV3ID0ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdHg6IDUwICsgTWF0aC5yYW5kb20oKSAqIDQwMCxcblx0XHR5OiAyMDAsXG5cdFx0cm90YXRpb246IDAsXG5cdFx0dXBkYXRlTW92ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMueCArPSB0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCAqIHRpbWUgKiBTUEVFRDtcblx0XHRcdGlmICh0aGlzLnggPCA1MCkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCA9IDE7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMueCA+IDQwMCkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCA9IC0xO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZU1vdmUodGltZSk7XG5cdFx0fSxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0dGV4dDoge1xuXHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHRcdHRleHQ6IGdldFRpdGxlKCksXG5cdFx0XHRcdGZvcm1hdDoge1xuXHRcdFx0XHRcdHNpemU6IDE1LFxuXHRcdFx0XHRcdGNvbG9yOiAweGZmZGRkZCxcblx0XHRcdFx0XHRhbGlnbjogJ2NlbnRlcicsXG5cdFx0XHRcdFx0dmVydGljYWxBbGlnbjogJ21pZGRsZScsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJvcmRlcjogMHgwMGZmMDAsXG5cdFx0XHRcdHk6IC0zMCxcblx0XHRcdFx0aGVpZ2h0OiAzNSxcblx0XHRcdFx0cGl2b3RYOiAwLjUsXG5cdFx0XHRcdG9uUG9pbnRlckRvd246ICgpID0+IHtcblx0XHRcdFx0XHRwcm9wcy5vbkNsaWNrKHByb3BzKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b25VcGRhdGUoKSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gZ2V0VGl0bGUoKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRpbWFnZToge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IHByb3BzLmltYWdlLFxuXHRcdFx0XHRzY2FsZVg6IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEsXG5cdFx0XHRcdHBpdm90WDogMC41LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duOiAoKSA9PiB7XG5cdFx0XHRcdFx0cHJvcHMub25DbGljayhwcm9wcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cblx0cnVuT25Qcm9wc1VwZGF0ZShwcm9wcywgdW5pdFZpZXcuY2hpbGRyZW4udGV4dCk7XG5cblx0cmV0dXJuIHVuaXRWaWV3O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IFR3ZWVuRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvdHdlZW4nO1xuaW1wb3J0IHsgQ2FudmFzVGV4dEV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3RleHQnO1xuaW1wb3J0IHsgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL2ltYWdlJztcbmltcG9ydCB7IENhbnZhc1NoYXBlRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvc2hhcGUnO1xuaW1wb3J0IHsgQ2FudmFzRW5naW5lIH0gZnJvbSAnQGplbmcvY2FudmFzLWVuZ2luZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcbmltcG9ydCB7IFNjZW5lRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvc2NlbmUnO1xuaW1wb3J0IHsgTW91c2VFeHRlbnNpb24gfSBmcm9tICdAamVuZy93ZWInO1xuaW1wb3J0IEN1c3RvbVJlc291cmNlTWFuYWdlciBmcm9tICcuL2VuZ2luZS9yZXNvdXJjZXMnO1xuaW1wb3J0IEN1c3RvbUVuZ2luZSBmcm9tICcuL2VuZ2luZS9lbmdpbmUnO1xuaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluJztcbmltcG9ydCB7XG5cdEFOSU1BTElTVCwgQU5JTUFMSVNUX0lNQUdFLCBBUkNIRVIsIEFSQ0hFUl9JTUFHRSwgVEVTVF9DQU5WQVMsXG59IGZyb20gJy4vYXNzZXRzJztcblxuLy8gcGFnZVxuZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAnMCc7XG5kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSAnMCc7XG5cbi8vIGJhc2ljIGVuZ2luZVxuY29uc3QgZW5naW5lID0gbmV3IENhbnZhc0VuZ2luZSgpO1xuQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5DYW52YXNUZXh0RXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbkNhbnZhc1NoYXBlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcblR3ZWVuRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcblNjZW5lRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbk1vdXNlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcbmVuZ2luZS5zY3JlZW4uZnVsbHNjcmVlbiA9IHRydWU7XG5lbmdpbmUudGlja2VyLnBsYXkoKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZW5naW5lLnBsYXRmb3JtLnZpZXcpO1xuXG5jb25zdCBwYXJhbWV0ZXJzID0ge1xuXHRnZXRVcGRhdGVUaW1lKCkge1xuXHRcdHJldHVybiBlbmdpbmUudXBkYXRlci5lbGFwc2VkVGltZTtcblx0fSxcblx0Z2V0UmVuZGVyVGltZSgpIHtcblx0XHRyZXR1cm4gZW5naW5lLnJlbmRlcmVyLmVsYXBzZWRUaW1lO1xuXHR9LFxuXHRnZXRDYW52YXNXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiBlbmdpbmUuc2NyZWVuLmdldFdpZHRoKCk7XG5cdH0sXG5cdGdldENhbnZhc0hlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiBlbmdpbmUuc2NyZWVuLmdldEhlaWdodCgpO1xuXHR9LFxufTtcblxuLy8gYXBwbGljYXRpb25cbmNvbnN0IGFwcCA9IG1haW4ocGFyYW1ldGVycyk7XG5hcHAuc3RhcnQoKTtcbmVuZ2luZS5yb290ID0gYXBwIGFzIGFueSBhcyBDb21wb25lbnQ7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuY29uc29sZS5sb2coYXBwKTtcblxuLy8gdGVzdCBwYXVzZVxuc2V0VGltZW91dCgoKSA9PiBlbmdpbmUudGlja2VyLnBhdXNlKCksIDUwMDApO1xuc2V0VGltZW91dCgoKSA9PiBlbmdpbmUudGlja2VyLnBsYXkoKSwgMTAwMDApO1xuXG4vLyBjdXN0b20gZW5naW5lXG5jb25zdCBjdXN0b21FbmdpbmUgPSBuZXcgQ3VzdG9tRW5naW5lKCk7XG5jdXN0b21FbmdpbmUuc2NyZWVuLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbmN1c3RvbUVuZ2luZS5zY3JlZW4uaGVpZ2h0ID0gNjAwO1xuY3VzdG9tRW5naW5lLnVwZGF0ZXIuZW5hYmxlZCA9IGZhbHNlO1xuY3VzdG9tRW5naW5lLnJvb3QgPSBlbmdpbmUucm9vdDtcbmN1c3RvbUVuZ2luZS50aWNrZXIucGxheSgpO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUudG9wID0gJzBweCc7XG5jdXN0b21FbmdpbmUucGxhdGZvcm0udmlldy5zdHlsZS5sZWZ0ID0gJzYwMHB4JztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcpO1xuXG4vLyAvLyBzZXQgY3VzdG9tIHJlc291cmNlXG5lbmdpbmUucmVzb3VyY2VzLnJlc291cmNlcy5zZXQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBjdXN0b21FbmdpbmUucGxhdGZvcm0udmlldyxcblx0XHRsb2FkZWQ6IHRydWUsXG5cdH0gYXMgSW1hZ2VSZXNvdXJjZSxcbik7XG5jdXN0b21FbmdpbmUucmVzb3VyY2VzLnJlc291cmNlcy5zZXQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBlbmdpbmUucGxhdGZvcm0udmlldyxcblx0XHRsb2FkZWQ6IHRydWUsXG5cdH0gYXMgSW1hZ2VSZXNvdXJjZSxcbik7XG5cbi8vIGN1c3RvbSByZXNvdXJjZSByZXNvbHZlclxuY29uc3QgcmVzb3VyY2VNYW5hZ2VyID0gbmV3IEN1c3RvbVJlc291cmNlTWFuYWdlcigpO1xucmVzb3VyY2VNYW5hZ2VyLmFsaWFzZXMuc2V0KEFSQ0hFUi5yZXBsYWNlKCdpZDonLCAnJyksIEFSQ0hFUl9JTUFHRSk7XG5yZXNvdXJjZU1hbmFnZXIuYWxpYXNlcy5zZXQoQU5JTUFMSVNULnJlcGxhY2UoJ2lkOicsICcnKSwgQU5JTUFMSVNUX0lNQUdFKTtcbnJlc291cmNlTWFuYWdlci5pbml0KGVuZ2luZSk7XG5yZXNvdXJjZU1hbmFnZXIuaW5pdChjdXN0b21FbmdpbmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==