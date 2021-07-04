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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY2FudmFzLWVuZ2luZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jYW52YXMtZW5naW5lL2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NhbnZhcy1lbmdpbmUvZGlzdC9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvY29tcG9uZW50cy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9jb3JlL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2NvcmUvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMva2V5LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy9waXZvdC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2V4dGVuc2lvbnMvdHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZXh0ZW5zaW9ucy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9jb21wb25lbnRzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvY29yZS9kaXN0L2ZlYXR1cmVzL3BvaW50ZXJzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvZmVhdHVyZXMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9yZXNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy90aWNrZXIuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2NvcmUvZGlzdC9mZWF0dXJlcy91cGRhdGVyLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9jb3JlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9ib3VuZHMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9jb2xvci10cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2dlb20vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L21hdHJpeC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvZ2VvbS9kaXN0L3BvaW50LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9nZW9tL2Rpc3QvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9pbWFnZS9kaXN0L2NhbnZhcy1pbWFnZS1jb2xvci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvaW1hZ2UvZGlzdC9jYW52YXMtaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL2ltYWdlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3Jlc291cmNlcy9kaXN0L2ltYWdlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9yZXNvdXJjZXMvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvcmVzb3VyY2VzL2Rpc3Qvc3RyaW5nLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zY2VuZS9kaXN0L3NjZW5lLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9lbGxpcHNlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9wYXRoLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvY2FudmFzL3NoYXBlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2NhbnZhcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvY2FudmFzL3N0eWxlLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy9zaGFwZS9kaXN0L2RhdGEvZGF0YS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvc2hhcGUvZGlzdC9kYXRhL3BhdGguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvZGF0YS9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvZ3JhcGhpY3MuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3NoYXBlL2Rpc3Qvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC9jYW52YXMvdGV4dC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2RhdGEvZm9udC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdGV4dC9kaXN0L2RhdGEvZm9ybWF0LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvZGF0YS9tZXRyaWNzLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90ZXh0L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3RleHQvZGlzdC90ZXh0LmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy90d2Vlbi9kaXN0L2Vhc2luZy5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdHdlZW4vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvdHdlZW4vZGlzdC90d2Vlbi5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvd2ViL2Rpc3QvZmVhdHVyZXMvcGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3dlYi9kaXN0L2ZlYXR1cmVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvd2ViL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4uL3BhY2thZ2VzL3dlYi9kaXN0L2ludGVyYWN0aXZlL2tleWJvYXJkLmpzIiwid2VicGFjazovL3NhbXBsZS8uLi9wYWNrYWdlcy93ZWIvZGlzdC9pbnRlcmFjdGl2ZS9tb3VzZS5qcyIsIndlYnBhY2s6Ly9zYW1wbGUvLi4vcGFja2FnZXMvd2ViL2Rpc3QvaW50ZXJhY3RpdmUvdG91Y2guanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2FydGlmYWN0LnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9hc3NldHMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2VuZ2luZS9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL2VuZ2luZS9pbWFnZS50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvZW5naW5lL3BsYXRmb3JtLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9lbmdpbmUvcmVzb3VyY2VzLnRzIiwid2VicGFjazovL3NhbXBsZS8uL3NyYy9mcHMudHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vc2FtcGxlLy4vc3JjL3ByZWxvYWRlci50cyIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvdW5pdC50cyIsIndlYnBhY2s6Ly9zYW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2FtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zYW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zYW1wbGUvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiQ2FudmFzRW5naW5lIiwicGxhdGZvcm0iLCJDYW52YXNQbGF0Zm9ybSIsInNjcmVlbiIsIldlYlNjcmVlbiIsIkVuZ2luZSIsIkNhbnZhc1BhdHRlcm5zIiwiY29sb3JQYXR0ZXJuIiwiY29sb3IiLCJhbHBoYSIsImN0IiwiciIsImciLCJiIiwiYSIsIkNvbG9yVHJhbnNmb3JtIiwicmVkTXVsdGlwbGllciIsInJlZE9mZnNldCIsImdyZWVuTXVsdGlwbGllciIsImdyZWVuT2Zmc2V0IiwiYmx1ZU11bHRpcGxpZXIiLCJibHVlT2Zmc2V0IiwiYWxwaGFNdWx0aXBsaWVyIiwiYWxwaGFPZmZzZXQiLCJhZGRHcmFkaWVudENvbG9ycyIsInBhdHRlcm4iLCJjb2xvcnMiLCJhbHBoYXMiLCJyYXRpb3MiLCJjb2xvclRyYW5zZm9ybSIsImkiLCJsZW5ndGgiLCJyYXRpbyIsImNvbG9yU3R5bGUiLCJhZGRDb2xvclN0b3AiLCJyYWRpYWxHcmFkaWVudFBhdHRlcm4iLCJiZWdpblgiLCJiZWdpblkiLCJiZWdpblJhZGl1cyIsImVuZFgiLCJlbmRZIiwiZW5kUmFkaXVzIiwiY29udGV4dCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwibGluZWFyR3JhZGllbnRQYXR0ZXJuIiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJiaXRtYXBQYXR0ZXJuIiwiaW1hZ2UiLCJyZXBlYXQiLCJtYXRyaXgiLCJjcmVhdGVQYXR0ZXJuIiwiZG9tTWF0cml4IiwiRE9NTWF0cml4IiwiYyIsImQiLCJlIiwidHgiLCJmIiwidHkiLCJzZXRUcmFuc2Zvcm0iLCJhcmd1bWVudHMiLCJ2aWV3IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dHMiLCJnZXRDb250ZXh0IiwiY3VzdG9tQ29udGV4dHMiLCJwdXNoIiwicG9wIiwiZW5naW5lIiwiZGVidWciLCJ3YXJuaW5nIiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJjbGVhciIsInVwZGF0ZVNpemUiLCJjbGVhclJlY3QiLCJnZXRXaWR0aCIsImdldEhlaWdodCIsInBpeGVsUmF0aW8iLCJnZXRQaXhlbFJhdGlvIiwidmlld1dpZHRoIiwiTWF0aCIsImZsb29yIiwidmlld0hlaWdodCIsInN0eWxlIiwiV2ViUGxhdGZvcm0iLCJDT05UQUlORVIiLCJDb250YWluZXIiLCJudW1DaGlsZHJlbiIsImNvbnRhaW5lciIsImNoaWxkcmVuIiwiQXJyYXkiLCJpc0FycmF5IiwidHlwZSIsImtleXMiLCJPYmplY3QiLCJDb250YWluZXJFeHRlbnNpb24iLCJyZW5kZXIiLCJyZW5kZXJlciIsImRlcHRoIiwiY29tcG9uZW50IiwicmVuZGVyQ29tcG9uZW50IiwiY29tcG9uZW50c01hcCIsInVwZGF0ZSIsInVwZGF0ZXIiLCJ1cGRhdGVDb21wb25lbnQiLCJoaXRUZXN0IiwicG9pbnRlcnMiLCJyZXN1bHQiLCJkaXNwYXRjaENvbXBvbmVudCIsImtleVRlc3QiLCJrZXlib2FyZCIsImxvYWRlZCIsImxvYWRpbmciLCJwcm9ncmVzcyIsImNvbXBvbmVudENvbnRleHQiLCJpbml0IiwiY29tcG9uZW50cyIsInNldCIsIkxPQURFUiIsIkxvYWRlciIsImdldExvYWRpbmdQcm9ncmVzcyIsImxvYWRlciIsImxvYWRpbmdQcm9ncmVzcyIsImlzTG9hZGVkIiwibmVlZExvYWRpbmdDaGVjayIsImxvYWRpbmdDaGVjayIsIkxvYWRlckV4dGVuc2lvbiIsIm9uTG9hZGVkIiwiQ29tcG9uZW50cyIsIlVwZGF0ZXIiLCJMb2FkaW5nIiwiUmVuZGVyZXIiLCJQb2ludGVycyIsIktleWJvYXJkIiwidGlja2VyIiwiVGlja2VyIiwiRGVidWciLCJyZXNvdXJjZXMiLCJSZXNvdXJjZXMiLCJFbmdpbmVGZWF0dXJlIiwiRGlzcGxheSIsImlzVmlzaWJsZSIsInZpc2libGUiLCJoYW5kbGVyc01hcCIsImtleURvd24iLCJrZXlQcmVzcyIsImtleVVwIiwiS2V5IiwiaXNLZXlFbmFibGVkIiwia2V5Iiwia2V5RW5hYmxlZCIsImRpc3BhdGNoRXZlbnQiLCJldmVudCIsImhhbmRsZXJOYW1lIiwiUGl2b3QiLCJnZXRYIiwicGl2b3QiLCJwaXZvdFgiLCJnZXRZIiwicGl2b3RZIiwiaGFzVmFsdWVzIiwicG9pbnRlckRvd24iLCJwb2ludGVyVXAiLCJwb2ludGVyTW92ZSIsInBvaW50ZXJDYW5jZWwiLCJwb2ludGVyT3ZlciIsInBvaW50ZXJPdXQiLCJQb2ludGVyIiwiaXNQb2ludGVyRW5hYmxlZCIsInBvaW50ZXIiLCJwb2ludGVyRW5hYmxlZCIsIngiLCJ5IiwiZ2xvYmFsWCIsImdsb2JhbFkiLCJpZCIsIlRyYW5zZm9ybSIsImdldE1hdHJpeCIsInRyYW5zZm9ybSIsInJvdGF0aW9uIiwic2NhbGVYIiwic2NhbGUiLCJzY2FsZVkiLCJjb3MiLCJzaW4iLCJnZXRDb2xvclRyYW5zZm9ybSIsInRpbnQiLCJ2YWx1ZSIsInZhbHVlSW52ZXJ0ZWQiLCJicmlnaHRuZXNzIiwidW5kZWZpbmVkIiwicGVyY2VudCIsImFicyIsIm9mZnNldCIsIlVwZGF0ZSIsImlzRW5hYmxlZCIsImVuYWJsZWQiLCJ0aW1lIiwib25VcGRhdGUiLCJwcm9wZXJ0aWVzIiwiTWFwIiwiaW5mb3MiLCJlcnJvcnMiLCJ3YXJuaW5ncyIsImNvbnNvbGUiLCJsb2ciLCJhcmdzIiwiU3RyaW5nIiwiY291bnQiLCJnZXQiLCJpbmZvIiwiZXJyb3IiLCJ3YXJuIiwicm9vdCIsImtleUV2ZW50IiwiaGFuZGxlciIsImVsYXBzZWRUaW1lIiwic3RhcnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJQbGF0Zm9ybSIsImdsb2JhbCIsIlBvaW50IiwibG9jYWwiLCJwb2ludGVySWQiLCJwb2ludGVyVHlwZSIsIk1hdHJpeCIsImJhc2UiLCJwYXJlbnQiLCJwYXJlbnRSZXN1bHQiLCJ1cGRhdGVMb2NhbCIsImJlZ2luIiwiZW5kIiwiUmVzb3VyY2UiLCJnZXRQcm9ncmVzcyIsInJlc291cmNlIiwiYnl0ZXNUb3RhbCIsImJ5dGVzTG9hZGVkIiwicmVzb2x2ZXJzIiwiU2V0IiwiYXNzZXQiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJTY3JlZW4iLCJmdWxsc2NyZWVuIiwiZ2V0V2luZG93V2lkdGgiLCJnZXRXaW5kb3dIZWlnaHQiLCJnZXRXaW5kb3dQaXhlbFJhdGlvIiwiZnJhbWVSYXRlIiwicGF1c2VkIiwidXBkYXRlRnJhbWUiLCJjdXJyZW50VGltZSIsImRlbHRhVGltZSIsInVwZGF0ZU5leHRGcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZVByb3BlcnRpZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJCb3VuZHMiLCJlbXB0eSIsIm1pblgiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJtaW5ZIiwibWF4WCIsIk1JTl9WQUxVRSIsIm1heFkiLCJzZXRFbXB0eSIsImJvdW5kcyIsImlzRW1wdHkiLCJ0b1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInRlc3RYIiwidGVzdFkiLCJ0ZXN0IiwidGVzdFBvaW50IiwicG9pbnQiLCJpc0VtcHR5V2l0aEFscGhhIiwiY29weSIsImZyb20iLCJ0byIsImNvbmNhdCIsImN0MSIsImN0MCIsIm1hdHJpeDAiLCJtYXRyaXgxIiwiZ2V0RGV0ZXJtaW5hbnQiLCJpbnZlcnQiLCJkZXRlcm1pbmFudCIsInRyYW5zZm9ybVBvaW50IiwidHJhbnNmb3JtUG9pbnRMb2NhbCIsInRyYW5zZm9ybUludmVyc2VQb2ludCIsInRyYW5zZm9ybUJvdW5kcyIsInJ4IiwicnkiLCJyciIsInJiIiwibngxIiwibnkxIiwibngyIiwibnkyIiwibngzIiwibnkzIiwibng0Iiwibnk0IiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwic3FydCIsImFuZ2xlIiwiYXRhbjIiLCJlcXVhbHMiLCJwb2ludDAiLCJwb2ludDEiLCJzb3VyY2UiLCJ0YXJnZXQiLCJub3JtYWxpemUiLCJ0aGlja25lc3MiLCJkaXN0YW5jZSIsImR4IiwiZHkiLCJpbnRlcnBvbGF0ZSIsInBvbGFyIiwiUmVjdGFuZ2xlIiwiaW50ZXJzZWN0aW9uIiwiY29udGFpbnMiLCJyb3VuZCIsInNjcmVlbkJvdW5kcyIsIkNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24iLCJzcmMiLCJjb250ZXh0MmQiLCJnbG9iYWxBbHBoYSIsImRyYXdJbWFnZSIsImN1c3RvbUNvbnRleHQiLCJjcmVhdGVDdXN0b21Db250ZXh0IiwiaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwicm0iLCJnbSIsImJtIiwiYW0iLCJybyIsImdvIiwiYm8iLCJhbyIsImRhdGEiLCJwdXRJbWFnZURhdGEiLCJkZXN0cm95Q3VzdG9tQ29udGV4dCIsIkltYWdlRXh0ZW5zaW9uIiwiSU1BR0UiLCJDYW52YXNJbWFnZUV4dGVuc2lvbiIsIkltYWdlIiwiY2FsY3VsYXRlQm91bmRzIiwicG9pbnRlclRlc3RTaGFwZSIsIkhUTUxDYW52YXNFbGVtZW50IiwiY2FudmFzQ29udGV4dCIsIkltYWdlUmVzb3VyY2UiLCJleHRlbnNpb24iLCJzcGxpdCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJhZGQiLCJTdHJpbmdSZXNvdXJjZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ucHJvZ3Jlc3MiLCJ0b3RhbCIsInJlc3BvbnNlVGV4dCIsInNlbmQiLCJTQ0VORSIsIlNjZW5lRXh0ZW5zaW9uIiwic2NlbmUiLCJKU09OIiwicGFyc2UiLCJtZXNzYWdlIiwiUElfMiIsIlBJIiwiYXBwbHlFbGxpcHNlIiwiaGFzRmlsbCIsInJhZGl1cyIsInJhZGl1c1giLCJyYWRpdXNZIiwiYmVnaW5QYXRoIiwiZWxsaXBzZSIsImNsb3NlUGF0aCIsImFwcGx5Q29tbWFuZCIsImNvbW1hbmQiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjdXJ2ZVRvIiwicXVhZHJhdGljQ3VydmVUbyIsImN4IiwiY3kiLCJjdWJpY0N1cnZlVG8iLCJiZXppZXJDdXJ2ZVRvIiwic3giLCJzeSIsImFwcGx5UGF0aCIsImFwcGx5UmVjdGFuZ2xlIiwicmVjdCIsInJlbmRlckdyYXBoaWNzIiwiZmlsbCIsInN0cm9rZSIsImhhc1N0cm9rZSIsImV4aXN0IiwicGF0aCIsImFwcGx5U3RyaW5nIiwic2V0RmlsbFN0eWxlIiwic2V0U3Ryb2tlU3R5bGUiLCJDYW52YXNTaGFwZUV4dGVuc2lvbiIsInNoYXBlIiwiU2hhcGUiLCJTaGFwZUV4dGVuc2lvbiIsIlNIQVBFIiwicmVhZGVyIiwiR3JhcGhpY3NTdHJpbmdSZWFkZXIiLCJzZXRQYXRoIiwicmVhZE5leHQiLCJnZXRDb21tYW5kIiwiZW1wdHlBcnJheSIsImVtcHR5TWF0cml4IiwiZ2V0Q2FudmFzUGF0dGVybiIsInNvbGlkIiwibGluZWFyIiwicmFkaWFsIiwiYml0bWFwRmlsbCIsImZhbGxiYWNrIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJsaW5lQ2FwIiwibGluZUpvaW4iLCJtaXRlckxpbWl0IiwiY2FwcyIsImpvaW50cyIsIlJlY3RhbmdsZURhdGEiLCJFbGxpcHNlRGF0YSIsIlBhdGhEYXRhIiwicGF0aERhdGEiLCJHcmFwaGljc1N0cmluZyIsIlBhdGhDb21tYW5kIiwiR3JhcGhpY3NEYXRhIiwiTlVNQkVSU19DT1VOVCIsIk0iLCJtIiwiTCIsImwiLCJIIiwiaCIsIlYiLCJ2IiwiQyIsIlMiLCJzIiwiUSIsInEiLCJUIiwidCIsIkNPTU1BTkRfUkVHRVgiLCJOVU1CRVJfUkVHRVgiLCJHcmFwaGljc1N0cmluZ1N0cmVhbSIsImJ1ZmZlciIsInN5bWJvbFJlZ2V4IiwibGFzdEluZGV4Iiwic3ltYm9sTWF0Y2giLCJleGVjIiwic3ltYm9sIiwibnVtYmVyTWF0Y2giLCJwYXJzZUZsb2F0Iiwic3RyZWFtIiwiY29tbWFuZEV4aXN0cyIsImxhc3RYIiwibGFzdFkiLCJsYXN0Q1giLCJsYXN0Q1kiLCJnZXRCdWZmZXIiLCJlMCIsImUxIiwiZTIiLCJlMyIsImU0IiwiZTUiLCJ0ZW1wUG9pbnQwIiwidGVtcFBvaW50MSIsIkdyYXBoaWNzIiwic21vb3RoIiwicGl4ZWxIaW50aW5nIiwic2NhbGVNb2RlIiwiZ2V0UGF0aCIsImVsbGlwc2VXaWR0aCIsImVsbGlwc2VIZWlnaHQiLCJ3IiwiayIsIm94Iiwib3kiLCJ4ZSIsInllIiwieG0iLCJ5bSIsImNyZWF0ZURhdGEiLCJncmFwaGljc0RhdGEiLCJkZWZhdWx0VGV4dEZvcm1hdCIsIkNPUlJFQ1RJT04iLCJDYW52YXNUZXh0RXh0ZW5zaW9uIiwiVGV4dCIsIm1ldHJpY3MiLCJmb3JtYXQiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiVGV4dEZvcm1hdCIsInJlYWxXaWR0aCIsInJlYWxIZWlnaHQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInRleHRCYXNlbGluZSIsInNpbXBsZSIsInRleHQiLCJzaXplIiwibGVhZGluZyIsImxldHRlclNwYWNpbmciLCJkZWZhdWx0Rm9udCIsIkZvbnQiLCJzeW1ib2xTaXplIiwiYWxpZ25WYWx1ZSIsImZvbnQiLCJUZXh0TWV0cmljcyIsInN5bWJvbE5leHQiLCJhZHZhbmNlIiwiZmlsbFRleHQiLCJhbGlnblZlcnRpY2FsVmFsdWUiLCJsaW5lcyIsImxpbmUiLCJzeW1ib2xzIiwiZmlyc3QiLCJsaW5lSGVpZ2h0IiwiaiIsImFsaWduU3ltYm9sVmFsdWUiLCJzeW1ib2xGb250IiwiVGV4dEV4dGVuc2lvbiIsIlRFWFQiLCJFTSIsImZvbnRzIiwiZ2V0U3R5bGUiLCJuYW1lIiwicmVwbGFjZSIsInRvU3RyaW5nIiwibWVhc3VyZVRleHQiLCJnZXRDaGFyV2lkdGgiLCJjaGFyIiwid2lkdGhzIiwiZ2V0S2VybmluZyIsInNlY29uZCIsInBhaXIiLCJrZXJuaW5nIiwia2VybmluZ3MiLCJ3aWR0aFNlY29uZCIsIndpZHRoVG90YWwiLCJnZXRBZHZhbmNlIiwiZ2V0Rm9udCIsImJvbGQiLCJpdGFsaWMiLCJ1bmRlcmxpbmUiLCJhbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJjb21iaW5lIiwiZGVmYXVsdEZvcm1hdCIsImdldEFsaWduVmFsdWUiLCJnZXRWZXJ0aWNhbEFsaWduVmFsdWUiLCJUZXh0TGluZSIsImNyZWF0ZSIsIm1heCIsImNvcnJlY3RXaWR0aCIsImxhc3QiLCJjb3JyZWN0SGVpZ2h0IiwiZ2V0U3ltYm9scyIsInN5bWJvbEZvcm1hdCIsImJsb2NrIiwiZ2V0TGluZXMiLCJ3b3JkV3JhcCIsIm11bHRpbGluZSIsIndvcmQiLCJnZXRNZXRyaWNzIiwiZ2V0U2ltcGxlTWV0cmljcyIsImdldFNpbXBsZVdpZHRoIiwiaW5kZXgiLCJnZXRUZXh0IiwiaXNVcGRhdGVNZXRyaWNzIiwidXBkYXRlTWV0cmljcyIsImlzQXV0b1NpemUiLCJpc1NpbXBsZSIsImlzTXVsdGlsaW5lIiwiTElORUFSIiwiUVVBRFJBVElDIiwiUVVBRFJBVElDX0lOIiwiUVVBRFJBVElDX09VVCIsIkNVQklDIiwiQ1VCSUNfSU4iLCJDVUJJQ19PVVQiLCJRVUFSVElDIiwiUVVBUlRJQ19JTiIsIlFVQVJUSUNfT1VUIiwiUVVJTlRJQyIsIlFVSU5USUNfSU4iLCJRVUlOVElDX09VVCIsIlNJTlVTT0lEQUwiLCJTSU5VU09JREFMX0lOIiwiU0lOVVNPSURBTF9PVVQiLCJFWFBPTkVOVElBTCIsIkVYUE9ORU5USUFMX0lOIiwiRVhQT05FTlRJQUxfT1VUIiwiQ0lSQ1VMQVIiLCJDSVJDVUxBUl9JTiIsIkNJUkNVTEFSX09VVCIsIkVMQVNUSUMiLCJFTEFTVElDX0lOIiwiRUxBU1RJQ19PVVQiLCJCQUNLIiwiQkFDS19JTiIsIkJBQ0tfT1VUIiwiQk9VTkNFIiwiQk9VTkNFX0lOIiwiQk9VTkNFX09VVCIsImVhc2luZyIsInBvdyIsIlRXRUVOIiwiVHdlZW5FeHRlbnNpb24iLCJ0d2VlbiIsInBoYXNlcyIsInBoYXNlIiwiZWFzaW5nTmFtZSIsInRvTG93ZXJDYXNlIiwiZWFzaW5nTWV0aG9kIiwiZWFzaW5nVmFsdWUiLCJzdGF0ZSIsImZyb21WYWx1ZSIsInRvVmFsdWUiLCJzdGF0ZVZhbHVlIiwibG9vcCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRldmljZVBpeGVsUmF0aW8iLCJjb2RlIiwiY3RybCIsImN0cmxLZXkiLCJhbHQiLCJhbHRLZXkiLCJzaGlmdCIsInNoaWZ0S2V5IiwiZGlzcGF0Y2giLCJwcmV2ZW50RGVmYXVsdCIsIktleWJvYXJkRXh0ZW5zaW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwiY2xpZW50TGVmdCIsImNsaWVudFkiLCJjbGllbnRUb3AiLCJNb3VzZUV4dGVuc2lvbiIsImNoYW5nZWRUb3VjaGVzIiwidG91Y2giLCJpZGVudGlmaWVyIiwiVG91Y2hFeHRlbnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxZQUFiO0FBQUE7O0FBQUE7O0FBQ0ksMEJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsSUFBSUMscURBQUosK0JBQWhCO0FBQ0EsVUFBS0MsTUFBTCxHQUFjLElBQUlDLGdEQUFKLCtCQUFkO0FBSFU7QUFJYjs7QUFMTDtBQUFBLEVBQWtDQyw4Q0FBbEMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDTyxJQUFJQyxjQUFKOztBQUNQLENBQUMsVUFBVUEsY0FBVixFQUEwQjtBQUN2QixXQUFTQyxZQUFULENBQXNCQyxLQUF0QixFQUE2QkMsS0FBN0IsRUFBb0NDLEVBQXBDLEVBQXdDO0FBQ3BDLFFBQUlDLENBQUMsR0FBR0gsS0FBSyxJQUFJLEVBQVQsR0FBYyxJQUF0QjtBQUNBLFFBQUlJLENBQUMsR0FBR0osS0FBSyxJQUFJLENBQVQsR0FBYSxJQUFyQjtBQUNBLFFBQUlLLENBQUMsR0FBR0wsS0FBSyxHQUFHLElBQWhCO0FBQ0EsUUFBSU0sQ0FBQyxHQUFHTCxLQUFLLEdBQUcsSUFBaEI7O0FBQ0EsUUFBSSxDQUFDTSw4REFBQSxDQUF1QkwsRUFBdkIsQ0FBTCxFQUFpQztBQUM3QkMsT0FBQyxHQUFJQSxDQUFDLEdBQUdELEVBQUUsQ0FBQ00sYUFBUCxHQUF1Qk4sRUFBRSxDQUFDTyxTQUEzQixHQUF3QyxJQUE1QztBQUNBTCxPQUFDLEdBQUlBLENBQUMsR0FBR0YsRUFBRSxDQUFDUSxlQUFQLEdBQXlCUixFQUFFLENBQUNTLFdBQTdCLEdBQTRDLElBQWhEO0FBQ0FOLE9BQUMsR0FB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RSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUk7SUFDM0IsTUFBTSxFQUFFLElBQUk7Q0FDSyxDQUNsQixDQUFDO0FBR0YsTUFBTSxlQUFlLEdBQUcsSUFBSSx1REFBcUIsRUFBRSxDQUFDO0FBQ3BELGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLGlEQUFZLENBQUMsQ0FBQztBQUNyRSxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzREFBaUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsb0RBQWUsQ0FBQyxDQUFDO0FBQzNFLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IFdlYlNjcmVlbiB9IGZyb20gJ0BqZW5nL3dlYic7XG5pbXBvcnQgeyBDYW52YXNQbGF0Zm9ybSB9IGZyb20gJy4vcGxhdGZvcm0nO1xuZXhwb3J0IGNsYXNzIENhbnZhc0VuZ2luZSBleHRlbmRzIEVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGxhdGZvcm0gPSBuZXcgQ2FudmFzUGxhdGZvcm0odGhpcyk7XG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFdlYlNjcmVlbih0aGlzKTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3BhdHRlcm5zJztcbmV4cG9ydCAqIGZyb20gJy4vcGxhdGZvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9lbmdpbmUnO1xuIiwiaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0gfSBmcm9tICdAamVuZy9nZW9tJztcbmV4cG9ydCB2YXIgQ2FudmFzUGF0dGVybnM7XG4oZnVuY3Rpb24gKENhbnZhc1BhdHRlcm5zKSB7XG4gICAgZnVuY3Rpb24gY29sb3JQYXR0ZXJuKGNvbG9yLCBhbHBoYSwgY3QpIHtcbiAgICAgICAgbGV0IHIgPSBjb2xvciA+PiAxNiAmIDB4ZmY7XG4gICAgICAgIGxldCBnID0gY29sb3IgPj4gOCAmIDB4ZmY7XG4gICAgICAgIGxldCBiID0gY29sb3IgJiAweGZmO1xuICAgICAgICBsZXQgYSA9IGFscGhhICogMHhmZjtcbiAgICAgICAgaWYgKCFDb2xvclRyYW5zZm9ybS5pc0VtcHR5KGN0KSkge1xuICAgICAgICAgICAgciA9IChyICogY3QucmVkTXVsdGlwbGllciArIGN0LnJlZE9mZnNldCkgJiAweGZmO1xuICAgICAgICAgICAgZyA9IChnICogY3QuZ3JlZW5NdWx0aXBsaWVyICsgY3QuZ3JlZW5PZmZzZXQpICYgMHhmZjtcbiAgICAgICAgICAgIGIgPSAoYiAqIGN0LmJsdWVNdWx0aXBsaWVyICsgY3QuYmx1ZU9mZnNldCkgJiAweGZmO1xuICAgICAgICAgICAgYSA9IChhICogY3QuYWxwaGFNdWx0aXBsaWVyICsgY3QuYWxwaGFPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYSA8IDB4ZmYpIHtcbiAgICAgICAgICAgIHJldHVybiBgcmdiYSgke3J9LCAke2d9LCAke2J9LCAke2EgLyAweGZmfSlgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYDtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuID0gY29sb3JQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGFkZEdyYWRpZW50Q29sb3JzKHBhdHRlcm4sIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGNvbG9yc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGFscGhhID0gYWxwaGFzW2ldO1xuICAgICAgICAgICAgbGV0IHJhdGlvID0gcmF0aW9zW2ldO1xuICAgICAgICAgICAgaWYgKHJhdGlvIDwgMClcbiAgICAgICAgICAgICAgICByYXRpbyA9IDA7XG4gICAgICAgICAgICBpZiAocmF0aW8gPiAxKVxuICAgICAgICAgICAgICAgIHJhdGlvID0gMTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yU3R5bGUgPSBjb2xvclBhdHRlcm4oY29sb3IsIGFscGhhLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBwYXR0ZXJuLmFkZENvbG9yU3RvcChyYXRpbywgY29sb3JTdHlsZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMuYWRkR3JhZGllbnRDb2xvcnMgPSBhZGRHcmFkaWVudENvbG9ycztcbiAgICBmdW5jdGlvbiByYWRpYWxHcmFkaWVudFBhdHRlcm4oYmVnaW5YLCBiZWdpblksIGJlZ2luUmFkaXVzLCBlbmRYLCBlbmRZLCBlbmRSYWRpdXMsIGNvbG9ycywgYWxwaGFzLCByYXRpb3MsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGJlZ2luWCwgYmVnaW5ZLCBiZWdpblJhZGl1cywgZW5kWCwgZW5kWSwgZW5kUmFkaXVzKTtcbiAgICAgICAgYWRkR3JhZGllbnRDb2xvcnMocGF0dGVybiwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgQ2FudmFzUGF0dGVybnMucmFkaWFsR3JhZGllbnRQYXR0ZXJuID0gcmFkaWFsR3JhZGllbnRQYXR0ZXJuO1xuICAgIGZ1bmN0aW9uIGxpbmVhckdyYWRpZW50UGF0dGVybihiZWdpblgsIGJlZ2luWSwgZW5kWCwgZW5kWSwgY29sb3JzLCBhbHBoYXMsIHJhdGlvcywgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IGNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQoYmVnaW5YLCBiZWdpblksIGVuZFgsIGVuZFkpO1xuICAgICAgICBhZGRHcmFkaWVudENvbG9ycyhwYXR0ZXJuLCBjb2xvcnMsIGFscGhhcywgcmF0aW9zLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5saW5lYXJHcmFkaWVudFBhdHRlcm4gPSBsaW5lYXJHcmFkaWVudFBhdHRlcm47XG4gICAgZnVuY3Rpb24gYml0bWFwUGF0dGVybihpbWFnZSwgcmVwZWF0LCBtYXRyaXgsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IGNvbnRleHQuY3JlYXRlUGF0dGVybihpbWFnZSwgcmVwZWF0ID8gJ3JlcGVhdCcgOiAnbm9uZScpO1xuICAgICAgICBpZiAocGF0dGVybikge1xuICAgICAgICAgICAgY29uc3QgZG9tTWF0cml4ID0gbmV3IERPTU1hdHJpeCgpO1xuICAgICAgICAgICAgZG9tTWF0cml4LmEgPSBtYXRyaXguYSA/PyAxO1xuICAgICAgICAgICAgZG9tTWF0cml4LmIgPSBtYXRyaXguYiA/PyAwO1xuICAgICAgICAgICAgZG9tTWF0cml4LmMgPSBtYXRyaXguYyA/PyAwO1xuICAgICAgICAgICAgZG9tTWF0cml4LmQgPSBtYXRyaXguZCA/PyAxO1xuICAgICAgICAgICAgZG9tTWF0cml4LmUgPSBtYXRyaXgudHggPz8gMDtcbiAgICAgICAgICAgIGRvbU1hdHJpeC5mID0gbWF0cml4LnR5ID8/IDA7XG4gICAgICAgICAgICBwYXR0ZXJuLnNldFRyYW5zZm9ybShkb21NYXRyaXgpO1xuICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBDYW52YXNQYXR0ZXJucy5iaXRtYXBQYXR0ZXJuID0gYml0bWFwUGF0dGVybjtcbn0pKENhbnZhc1BhdHRlcm5zIHx8IChDYW52YXNQYXR0ZXJucyA9IHt9KSk7XG4iLCJpbXBvcnQgeyBXZWJQbGF0Zm9ybSB9IGZyb20gJ0BqZW5nL3dlYic7XG5leHBvcnQgY2xhc3MgQ2FudmFzUGxhdGZvcm0gZXh0ZW5kcyBXZWJQbGF0Zm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmNvbnRleHRzID0gW3RoaXMudmlldy5nZXRDb250ZXh0KCcyZCcpXTtcbiAgICAgICAgdGhpcy5jdXN0b21Db250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0c1t0aGlzLmNvbnRleHRzLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgICBzYXZlQ29udGV4dChjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dHMucHVzaChjb250ZXh0KTtcbiAgICB9XG4gICAgcmVzdG9yZUNvbnRleHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdUcnlpbmcgdG8gcmVzdG9yZSBtYWluIGNvbnRleHQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVDdXN0b21Db250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dDtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tQ29udGV4dHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gdGhpcy5jdXN0b21Db250ZXh0cy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy52aWV3O1xuICAgICAgICBpZiAoY29udGV4dC5jYW52YXMud2lkdGggIT09IHdpZHRoKSB7XG4gICAgICAgICAgICBjb250ZXh0LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZXh0LmNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgICAgICAgY29udGV4dC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICBkZXN0cm95Q3VzdG9tQ29udGV4dChjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY3VzdG9tQ29udGV4dHMucHVzaChjb250ZXh0KTtcbiAgICB9XG4gICAgYmVnaW4oKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgfVxuICAgIGVuZCgpIHtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgpO1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB2aWV3LndpZHRoLCB2aWV3LmhlaWdodCk7XG4gICAgfVxuICAgIHVwZGF0ZVNpemUoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbmdpbmUuc2NyZWVuLmdldFdpZHRoKCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRIZWlnaHQoKTtcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHRoaXMuZW5naW5lLnNjcmVlbi5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIGNvbnN0IHZpZXdXaWR0aCA9IE1hdGguZmxvb3Iod2lkdGggKiBwaXhlbFJhdGlvKTtcbiAgICAgICAgY29uc3Qgdmlld0hlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcztcbiAgICAgICAgaWYgKHZpZXcud2lkdGggIT09IHZpZXdXaWR0aCB8fCB2aWV3LmhlaWdodCAhPT0gdmlld0hlaWdodCkge1xuICAgICAgICAgICAgdmlldy53aWR0aCA9IHZpZXdXaWR0aDtcbiAgICAgICAgICAgIHZpZXcuaGVpZ2h0ID0gdmlld0hlaWdodDtcbiAgICAgICAgICAgIHZpZXcuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgICAgICB2aWV3LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ09OVEFJTkVSID0gJ2NvbnRhaW5lcic7XG5leHBvcnQgdmFyIENvbnRhaW5lcjtcbihmdW5jdGlvbiAoQ29udGFpbmVyKSB7XG4gICAgZnVuY3Rpb24gbnVtQ2hpbGRyZW4oY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbik7XG4gICAgICAgICAgICByZXR1cm4ga2V5cy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIENvbnRhaW5lci5udW1DaGlsZHJlbiA9IG51bUNoaWxkcmVuO1xufSkoQ29udGFpbmVyIHx8IChDb250YWluZXIgPSB7fSkpO1xuZXhwb3J0IHZhciBDb250YWluZXJFeHRlbnNpb247XG4oZnVuY3Rpb24gKENvbnRhaW5lckV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihjb250YWluZXIsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IHsgcmVuZGVyZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgcmVuZGVyZXIuZGVwdGgrKztcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlcmVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnJlbmRlciA9IHJlbmRlcjtcbiAgICBmdW5jdGlvbiB1cGRhdGUoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IHVwZGF0ZXIgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVyLmRlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgICBmdW5jdGlvbiBoaXRUZXN0KGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBwb2ludGVycyB9ID0gZW5naW5lO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBwb2ludGVycy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICBwb2ludGVycy5kZXB0aCsrO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnRlcnMuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50LCBjb250ZXh0LCByZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGlmIChwb2ludGVycy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQsIHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBrZXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2ludGVycy5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIGNvbnRleHQsIHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludGVycy5kZXB0aC0tO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBrZXlUZXN0KGNvbnRhaW5lciwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgeyBrZXlib2FyZCB9ID0gZW5naW5lO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGtleWJvYXJkLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICBrZXlib2FyZC5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBrZXlib2FyZC5kaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50c01hcCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQuZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlib2FyZC5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5rZXlUZXN0ID0ga2V5VGVzdDtcbiAgICBmdW5jdGlvbiBsb2FkZWQoY29udGFpbmVyLCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBjb25zdCB7IGxvYWRpbmcgfSA9IGVuZ2luZTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gbG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICBsb2FkaW5nLmRlcHRoKys7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBsb2FkaW5nLmdldENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgKz0gY29tcG9uZW50Q29udGV4dC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50Q29udGV4dC5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgLz0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGxvYWRpbmcudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSBjb21wb25lbnRDb250ZXh0LnByb2dyZXNzO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gY29tcG9uZW50Q29udGV4dC5sb2FkZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHNNYXApO1xuICAgICAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IGxvYWRpbmcuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyArPSBjb21wb25lbnRDb250ZXh0LnByb2dyZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnRDb250ZXh0LmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQubG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyAvPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9hZGluZy5kZXB0aC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbnRhaW5lckV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLnNldChDT05UQUlORVIsIHVwZGF0ZSk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoQ09OVEFJTkVSLCByZW5kZXIpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChDT05UQUlORVIsIGhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5rZXlUZXN0LnNldChDT05UQUlORVIsIGtleVRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KENPTlRBSU5FUiwgbG9hZGVkKTtcbiAgICB9XG4gICAgQ29udGFpbmVyRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ29udGFpbmVyRXh0ZW5zaW9uIHx8IChDb250YWluZXJFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgQ29udGFpbmVyRXh0ZW5zaW9uIH0gZnJvbSAnLi9jb250YWluZXInO1xuZXhwb3J0IGNvbnN0IExPQURFUiA9ICdsb2FkZXInO1xuZXhwb3J0IHZhciBMb2FkZXI7XG4oZnVuY3Rpb24gKExvYWRlcikge1xuICAgIGZ1bmN0aW9uIGdldExvYWRpbmdQcm9ncmVzcyhsb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRlci5sb2FkaW5nUHJvZ3Jlc3MgPz8gMDtcbiAgICB9XG4gICAgTG9hZGVyLmdldExvYWRpbmdQcm9ncmVzcyA9IGdldExvYWRpbmdQcm9ncmVzcztcbiAgICBmdW5jdGlvbiBpc0xvYWRlZChsb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRlci5sb2FkZWQgPz8gZmFsc2U7XG4gICAgfVxuICAgIExvYWRlci5pc0xvYWRlZCA9IGlzTG9hZGVkO1xuICAgIGZ1bmN0aW9uIG5lZWRMb2FkaW5nQ2hlY2sobG9hZGVyKSB7XG4gICAgICAgIHJldHVybiBsb2FkZXIubG9hZGluZ0NoZWNrID8/IHRydWU7XG4gICAgfVxuICAgIExvYWRlci5uZWVkTG9hZGluZ0NoZWNrID0gbmVlZExvYWRpbmdDaGVjaztcbn0pKExvYWRlciB8fCAoTG9hZGVyID0ge30pKTtcbmV4cG9ydCB2YXIgTG9hZGVyRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChMb2FkZXJFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBsb2FkZWQobG9hZGVyLCBlbmdpbmUpIHtcbiAgICAgICAgaWYgKCFMb2FkZXIubmVlZExvYWRpbmdDaGVjayhsb2FkZXIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQ29udGFpbmVyRXh0ZW5zaW9uLmxvYWRlZChsb2FkZXIsIGVuZ2luZSk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUubG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGxvYWRlci5sb2FkaW5nUHJvZ3Jlc3MgPSBjb250ZXh0LnByb2dyZXNzO1xuICAgICAgICBpZiAoY29udGV4dC5sb2FkZWQgJiYgIWxvYWRlci5sb2FkZWQpIHtcbiAgICAgICAgICAgIGxvYWRlci5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGxvYWRlci5vbkxvYWRlZCkge1xuICAgICAgICAgICAgICAgIGxvYWRlci5vbkxvYWRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIExvYWRlckV4dGVuc2lvbi5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMudXBkYXRlLnNldChMT0FERVIsIENvbnRhaW5lckV4dGVuc2lvbi51cGRhdGUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KExPQURFUiwgQ29udGFpbmVyRXh0ZW5zaW9uLnJlbmRlcik7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KExPQURFUiwgQ29udGFpbmVyRXh0ZW5zaW9uLmhpdFRlc3QpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5sb2FkZWQuc2V0KExPQURFUiwgbG9hZGVkKTtcbiAgICB9XG4gICAgTG9hZGVyRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoTG9hZGVyRXh0ZW5zaW9uIHx8IChMb2FkZXJFeHRlbnNpb24gPSB7fSkpO1xuIiwiaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuLi9mZWF0dXJlcy9yZW5kZXJlcic7XG5pbXBvcnQgeyBVcGRhdGVyIH0gZnJvbSAnLi4vZmVhdHVyZXMvdXBkYXRlcic7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi4vZmVhdHVyZXMvbG9hZGluZyc7XG5pbXBvcnQgeyBQb2ludGVycyB9IGZyb20gJy4uL2ZlYXR1cmVzL3BvaW50ZXJzJztcbmltcG9ydCB7IFRpY2tlciB9IGZyb20gJy4uL2ZlYXR1cmVzL3RpY2tlcic7XG5pbXBvcnQgeyBDb250YWluZXJFeHRlbnNpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4uL2ZlYXR1cmVzL2RlYnVnJztcbmltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gJy4uL2ZlYXR1cmVzL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi4vZmVhdHVyZXMvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMb2FkZXJFeHRlbnNpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRlcic7XG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJy4uL2ZlYXR1cmVzL2tleWJvYXJkJztcbmV4cG9ydCBjbGFzcyBFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRlcHRoID0gMzI7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBDb21wb25lbnRzKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZXIgPSBuZXcgVXBkYXRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gbmV3IExvYWRpbmcodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIodGhpcyk7XG4gICAgICAgIHRoaXMucG9pbnRlcnMgPSBuZXcgUG9pbnRlcnModGhpcyk7XG4gICAgICAgIHRoaXMua2V5Ym9hcmQgPSBuZXcgS2V5Ym9hcmQodGhpcyk7XG4gICAgICAgIHRoaXMudGlja2VyID0gbmV3IFRpY2tlcih0aGlzKTtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IG5ldyBEZWJ1Zyh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgUmVzb3VyY2VzKHRoaXMpO1xuICAgICAgICBDb250YWluZXJFeHRlbnNpb24uaW5pdCh0aGlzKTtcbiAgICAgICAgTG9hZGVyRXh0ZW5zaW9uLmluaXQodGhpcyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB9XG59XG4iLCJleHBvcnQgdmFyIERpc3BsYXk7XG4oZnVuY3Rpb24gKERpc3BsYXkpIHtcbiAgICBmdW5jdGlvbiBpc1Zpc2libGUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQudmlzaWJsZSA/PyB0cnVlO1xuICAgIH1cbiAgICBEaXNwbGF5LmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbn0pKERpc3BsYXkgfHwgKERpc3BsYXkgPSB7fSkpO1xuIiwiY29uc3QgaGFuZGxlcnNNYXAgPSB7XG4gICAga2V5RG93bjogJ29uS2V5RG93bicsXG4gICAga2V5UHJlc3M6ICdvbktleVByZXNzJyxcbiAgICBrZXlVcDogJ29uS2V5VXAnLFxufTtcbmV4cG9ydCB2YXIgS2V5O1xuKGZ1bmN0aW9uIChLZXkpIHtcbiAgICBmdW5jdGlvbiBpc0tleUVuYWJsZWQoa2V5KSB7XG4gICAgICAgIHJldHVybiBrZXkua2V5RW5hYmxlZCA/PyB0cnVlO1xuICAgIH1cbiAgICBLZXkuaXNLZXlFbmFibGVkID0gaXNLZXlFbmFibGVkO1xuICAgIGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCBldmVudCkge1xuICAgICAgICBjb25zdCBoYW5kbGVyTmFtZSA9IGhhbmRsZXJzTWFwW2V2ZW50LnR5cGVdO1xuICAgICAgICBpZiAoaGFuZGxlck5hbWUgJiYgY29tcG9uZW50W2hhbmRsZXJOYW1lXSkge1xuICAgICAgICAgICAgY29tcG9uZW50W2hhbmRsZXJOYW1lXShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgS2V5LmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xufSkoS2V5IHx8IChLZXkgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBQaXZvdDtcbihmdW5jdGlvbiAoUGl2b3QpIHtcbiAgICBmdW5jdGlvbiBnZXRYKHBpdm90LCB3aWR0aCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WCB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFgpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RYICogd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFggPSBnZXRYO1xuICAgIGZ1bmN0aW9uIGdldFkocGl2b3QsIGhlaWdodCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WSB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFkpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RZICogaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBQaXZvdC5nZXRZID0gZ2V0WTtcbiAgICBmdW5jdGlvbiBoYXNWYWx1ZXMocGl2b3QpIHtcbiAgICAgICAgY29uc3QgeyBwaXZvdFgsIHBpdm90WSB9ID0gcGl2b3Q7XG4gICAgICAgIHJldHVybiAhIXBpdm90WCB8fCAhIXBpdm90WTtcbiAgICB9XG4gICAgUGl2b3QuaGFzVmFsdWVzID0gaGFzVmFsdWVzO1xufSkoUGl2b3QgfHwgKFBpdm90ID0ge30pKTtcbiIsImNvbnN0IGhhbmRsZXJzTWFwID0ge1xuICAgIHBvaW50ZXJEb3duOiAnb25Qb2ludGVyRG93bicsXG4gICAgcG9pbnRlclVwOiAnb25Qb2ludGVyVXAnLFxuICAgIHBvaW50ZXJNb3ZlOiAnb25Qb2ludGVyTW92ZScsXG4gICAgcG9pbnRlckNhbmNlbDogJ29uUG9pbnRlckNhbmNlbCcsXG4gICAgcG9pbnRlck92ZXI6ICdvblBvaW50ZXJPdmVyJyxcbiAgICBwb2ludGVyT3V0OiAnb25Qb2ludGVyT3V0Jyxcbn07XG5leHBvcnQgdmFyIFBvaW50ZXI7XG4oZnVuY3Rpb24gKFBvaW50ZXIpIHtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJFbmFibGVkKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50ZXIucG9pbnRlckVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkID0gaXNQb2ludGVyRW5hYmxlZDtcbiAgICBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KHBvaW50ZXIsIHR5cGUsIHgsIHksIGdsb2JhbFgsIGdsb2JhbFksIGlkKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJOYW1lID0gaGFuZGxlcnNNYXBbdHlwZV07XG4gICAgICAgIGlmIChoYW5kbGVyTmFtZSAmJiBwb2ludGVyW2hhbmRsZXJOYW1lXSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgICAgZ2xvYmFsWCxcbiAgICAgICAgICAgICAgICBnbG9iYWxZLFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHBvaW50ZXJbaGFuZGxlck5hbWVdKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xufSkoUG9pbnRlciB8fCAoUG9pbnRlciA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFRyYW5zZm9ybTtcbihmdW5jdGlvbiAoVHJhbnNmb3JtKSB7XG4gICAgZnVuY3Rpb24gZ2V0TWF0cml4KHRyYW5zZm9ybSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChtYXRyaXgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gbWF0cml4LmEgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5iID0gbWF0cml4LmIgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5jID0gbWF0cml4LmMgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gbWF0cml4LmQgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC50eCA9IG1hdHJpeC50eCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LnR5ID0gbWF0cml4LnR5ID8/IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb3RhdGlvbiB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBjb25zdCBzY2FsZVggPSB0cmFuc2Zvcm0uc2NhbGVYID8/IHRyYW5zZm9ybS5zY2FsZSA/PyAxO1xuICAgICAgICBjb25zdCBzY2FsZVkgPSB0cmFuc2Zvcm0uc2NhbGVZID8/IHRyYW5zZm9ybS5zY2FsZSA/PyAxO1xuICAgICAgICByZXN1bHQudHggPSB0cmFuc2Zvcm0ueCA/PyAwO1xuICAgICAgICByZXN1bHQudHkgPSB0cmFuc2Zvcm0ueSA/PyAwO1xuICAgICAgICBpZiAocm90YXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKHJvdGF0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKHJvdGF0aW9uKTtcbiAgICAgICAgICAgIHJlc3VsdC5hID0gY29zICogc2NhbGVYO1xuICAgICAgICAgICAgcmVzdWx0LmIgPSBzaW4gKiBzY2FsZVg7XG4gICAgICAgICAgICByZXN1bHQuYyA9IC1zaW4gKiBzY2FsZVk7XG4gICAgICAgICAgICByZXN1bHQuZCA9IGNvcyAqIHNjYWxlWTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYSA9IHNjYWxlWDtcbiAgICAgICAgcmVzdWx0LmIgPSAwO1xuICAgICAgICByZXN1bHQuYyA9IDA7XG4gICAgICAgIHJlc3VsdC5kID0gc2NhbGVZO1xuICAgIH1cbiAgICBUcmFuc2Zvcm0uZ2V0TWF0cml4ID0gZ2V0TWF0cml4O1xuICAgIGZ1bmN0aW9uIGdldENvbG9yVHJhbnNmb3JtKHRyYW5zZm9ybSwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKGNvbG9yVHJhbnNmb3JtKSB7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLnJlZE11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk11bHRpcGxpZXIgPSBjb2xvclRyYW5zZm9ybS5ncmVlbk11bHRpcGxpZXIgPz8gMTtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IGNvbG9yVHJhbnNmb3JtLmJsdWVNdWx0aXBsaWVyID8/IDE7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IGNvbG9yVHJhbnNmb3JtLnJlZE9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5PZmZzZXQgPz8gMDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU9mZnNldCA/PyAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFscGhhID0gdHJhbnNmb3JtLmFscGhhID8/IDE7XG4gICAgICAgIGNvbnN0IHsgdGludCB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAodGludCkge1xuICAgICAgICAgICAgY29uc3QgeyBjb2xvciA9IDAsIHZhbHVlID0gMSB9ID0gdGludDtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlSW52ZXJ0ZWQgPSAxIC0gdmFsdWU7XG4gICAgICAgICAgICBjb25zdCByID0gKGNvbG9yID4+IDE2KSAmIDB4ZmY7XG4gICAgICAgICAgICBjb25zdCBnID0gKGNvbG9yID4+IDgpICYgMHhmZjtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBjb2xvciAmIDB4ZmY7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGE7XG4gICAgICAgICAgICByZXN1bHQucmVkTXVsdGlwbGllciA9IHZhbHVlSW52ZXJ0ZWQ7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gdmFsdWVJbnZlcnRlZDtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IHZhbHVlSW52ZXJ0ZWQ7XG4gICAgICAgICAgICByZXN1bHQuYWxwaGFPZmZzZXQgPSAwO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE9mZnNldCA9IHIgKiB2YWx1ZTtcbiAgICAgICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IGcgKiB2YWx1ZTtcbiAgICAgICAgICAgIHJlc3VsdC5ibHVlT2Zmc2V0ID0gYiAqIHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB7IGJyaWdodG5lc3MgfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKGJyaWdodG5lc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGJyaWdodG5lc3MgPiAxKSB7XG4gICAgICAgICAgICAgICAgYnJpZ2h0bmVzcyA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChicmlnaHRuZXNzIDwgLTEpIHtcbiAgICAgICAgICAgICAgICBicmlnaHRuZXNzID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gMSAtIE1hdGguYWJzKGJyaWdodG5lc3MpO1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgICAgICBpZiAoYnJpZ2h0bmVzcyA+IDApIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBicmlnaHRuZXNzICogMjU1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGFscGhhO1xuICAgICAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSBwZXJjZW50O1xuICAgICAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IHBlcmNlbnQ7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSBwZXJjZW50O1xuICAgICAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYWxwaGFNdWx0aXBsaWVyID0gYWxwaGE7XG4gICAgICAgIHJlc3VsdC5yZWRNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgcmVzdWx0LmdyZWVuTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHJlc3VsdC5ibHVlTXVsdGlwbGllciA9IDE7XG4gICAgICAgIHJlc3VsdC5hbHBoYU9mZnNldCA9IDA7XG4gICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQuZ3JlZW5PZmZzZXQgPSAwO1xuICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IDA7XG4gICAgfVxuICAgIFRyYW5zZm9ybS5nZXRDb2xvclRyYW5zZm9ybSA9IGdldENvbG9yVHJhbnNmb3JtO1xufSkoVHJhbnNmb3JtIHx8IChUcmFuc2Zvcm0gPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBVcGRhdGU7XG4oZnVuY3Rpb24gKFVwZGF0ZSkge1xuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5lbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIFVwZGF0ZS5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XG4gICAgZnVuY3Rpb24gdXBkYXRlKGNvbXBvbmVudCwgdGltZSkge1xuICAgICAgICBpZiAoY29tcG9uZW50Lm9uVXBkYXRlKSB7XG4gICAgICAgICAgICBjb21wb25lbnQub25VcGRhdGUodGltZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVXBkYXRlLnVwZGF0ZSA9IHVwZGF0ZTtcbn0pKFVwZGF0ZSB8fCAoVXBkYXRlID0ge30pKTtcbiIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudHMgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlbmRlciA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy51cGRhdGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuaGl0VGVzdCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5rZXlUZXN0ID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IG5ldyBNYXAoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBEZWJ1ZyBleHRlbmRzIEVuZ2luZUZlYXR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmluZm9zID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmVycm9ycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy53YXJuaW5ncyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9nKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICB9XG4gICAgaW5mbyguLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoYXJncyk7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuaW5mb3MuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMuaW5mb3Muc2V0KGlkLCBjb3VudCk7XG4gICAgfVxuICAgIGVycm9yKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5lcnJvcnMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICB0aGlzLmVycm9ycy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG4gICAgd2FybmluZyguLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoYXJncyk7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMud2FybmluZ3MuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMud2FybmluZ3Muc2V0KGlkLCBjb3VudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5pbXBvcnQgeyBLZXkgfSBmcm9tICcuLi9leHRlbnNpb25zL2tleSc7XG5leHBvcnQgY2xhc3MgS2V5Ym9hcmQgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIGRpc3BhdGNoKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rZXlFdmVudCA9IGV2ZW50O1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaENvbXBvbmVudChyb290KTtcbiAgICB9XG4gICAgZGlzcGF0Y2hDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUtleS5pc0tleUVuYWJsZWQoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLmtleVRlc3QuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCB0aGlzLmVuZ2luZSk7XG4gICAgICAgIH1cbiAgICAgICAgS2V5LmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCB0aGlzLmtleUV2ZW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgIGNvbnRleHQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChyb290KTtcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG59XG4iLCJpbXBvcnQgeyBNYXRyaXgsIFBvaW50IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy9kaXNwbGF5JztcbmltcG9ydCB7IFBvaW50ZXIgfSBmcm9tICcuLi9leHRlbnNpb25zL3BvaW50ZXInO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgUG9pbnRlcnMgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2xvYmFsID0gUG9pbnQuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5sb2NhbCA9IFBvaW50LmVtcHR5KCk7XG4gICAgICAgIHRoaXMucG9pbnRlcklkID0gMDtcbiAgICAgICAgdGhpcy5wb2ludGVyVHlwZSA9ICdwb2ludGVyRG93bic7XG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgbWF0cml4OiBNYXRyaXguZW1wdHkoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzW3RoaXMuZGVwdGhdID0gY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG4gICAgZGlzcGF0Y2godHlwZSwgeCwgeSwgaWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXMuZW5naW5lO1xuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvY2FsLnggPSB4O1xuICAgICAgICB0aGlzLmxvY2FsLnkgPSB5O1xuICAgICAgICB0aGlzLmdsb2JhbC54ID0geDtcbiAgICAgICAgdGhpcy5nbG9iYWwueSA9IHk7XG4gICAgICAgIHRoaXMucG9pbnRlcklkID0gaWQ7XG4gICAgICAgIHRoaXMucG9pbnRlclR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgY29uc3QgYmFzZSA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBNYXRyaXguc2V0RW1wdHkoYmFzZS5tYXRyaXgpO1xuICAgICAgICB0aGlzLmRlcHRoKys7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDb21wb25lbnQocm9vdCwgYmFzZSwgZmFsc2UpO1xuICAgIH1cbiAgICB1cGRhdGVMb2NhbChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIFRyYW5zZm9ybS5nZXRNYXRyaXgoY29tcG9uZW50LCBjb250ZXh0Lm1hdHJpeCk7XG4gICAgICAgIE1hdHJpeC5jb25jYXQocGFyZW50Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgTWF0cml4LnRyYW5zZm9ybUludmVyc2VQb2ludChjb250ZXh0Lm1hdHJpeCwgdGhpcy5nbG9iYWwsIHRoaXMubG9jYWwpO1xuICAgIH1cbiAgICBkaXNwYXRjaENvbXBvbmVudChjb21wb25lbnQsIHBhcmVudCwgcGFyZW50UmVzdWx0KSB7XG4gICAgICAgIGlmICh0aGlzLmRlcHRoID4gdGhpcy5lbmdpbmUuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIURpc3BsYXkuaXNWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVBvaW50ZXIuaXNQb2ludGVyRW5hYmxlZChjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudFJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5wb2ludGVyT3ZlciAmJiB0aGlzLnBvaW50ZXJUeXBlID09PSAncG9pbnRlck1vdmUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMb2NhbChjb21wb25lbnQsIHBhcmVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmxvY2FsO1xuICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3V0JywgeCwgeSwgdGhpcy5nbG9iYWwueCwgdGhpcy5nbG9iYWwueSwgdGhpcy5wb2ludGVySWQpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wb2ludGVyT3ZlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3QuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTG9jYWwoY29tcG9uZW50LCBwYXJlbnQpO1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmxvY2FsO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCB0aGlzLnBvaW50ZXJUeXBlLCB4LCB5LCB0aGlzLmdsb2JhbC54LCB0aGlzLmdsb2JhbC55LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludGVyVHlwZSA9PT0gJ3BvaW50ZXJNb3ZlJykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgIWNvbXBvbmVudC5wb2ludGVyT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCAncG9pbnRlck92ZXInLCB4LCB5LCB0aGlzLmdsb2JhbC54LCB0aGlzLmdsb2JhbC55LCB0aGlzLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFyZXN1bHQgJiYgY29tcG9uZW50LnBvaW50ZXJPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3V0JywgeCwgeSwgdGhpcy5nbG9iYWwueCwgdGhpcy5nbG9iYWwueSwgdGhpcy5wb2ludGVySWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnQucG9pbnRlck92ZXIgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb2xvclRyYW5zZm9ybSwgTWF0cml4IH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy9kaXNwbGF5JztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdHJhbnNmb3JtJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF07XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBtYXRyaXg6IE1hdHJpeC5lbXB0eSgpLFxuICAgICAgICAgICAgICAgIGNvbG9yVHJhbnNmb3JtOiBDb2xvclRyYW5zZm9ybS5lbXB0eSgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNbdGhpcy5kZXB0aF0gPSBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICByZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCBwYXJlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGggPiB0aGlzLmVuZ2luZS5kZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghRGlzcGxheS5pc1Zpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgVHJhbnNmb3JtLmdldENvbG9yVHJhbnNmb3JtKGNvbXBvbmVudCwgY29udGV4dC5jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIE1hdHJpeC5jb25jYXQocGFyZW50Lm1hdHJpeCwgY29udGV4dC5tYXRyaXgsIGNvbnRleHQubWF0cml4KTtcbiAgICAgICAgQ29sb3JUcmFuc2Zvcm0uY29uY2F0KHBhcmVudC5jb2xvclRyYW5zZm9ybSwgY29udGV4dC5jb2xvclRyYW5zZm9ybSwgY29udGV4dC5jb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByb290IH0gPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIHRoaXMuZW5naW5lLnBsYXRmb3JtLmJlZ2luKCk7XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuZGVwdGgrKztcbiAgICAgICAgTWF0cml4LmNvcHkodGhpcy5lbmdpbmUuc2NyZWVuLmdldE1hdHJpeCgpLCBiYXNlLm1hdHJpeCk7XG4gICAgICAgIENvbG9yVHJhbnNmb3JtLnNldEVtcHR5KGJhc2UuY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudChyb290LCBiYXNlKTtcbiAgICAgICAgdGhpcy5lbmdpbmUucGxhdGZvcm0uZW5kKCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmVGZWF0dXJlIH0gZnJvbSAnLi4vY29yZS9mZWF0dXJlJztcbmV4cG9ydCB2YXIgUmVzb3VyY2U7XG4oZnVuY3Rpb24gKFJlc291cmNlKSB7XG4gICAgZnVuY3Rpb24gZ2V0UHJvZ3Jlc3MocmVzb3VyY2UpIHtcbiAgICAgICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc291cmNlLmxvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc291cmNlLmJ5dGVzVG90YWwgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2UuYnl0ZXNMb2FkZWQgLyByZXNvdXJjZS5ieXRlc1RvdGFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBSZXNvdXJjZS5nZXRQcm9ncmVzcyA9IGdldFByb2dyZXNzO1xufSkoUmVzb3VyY2UgfHwgKFJlc291cmNlID0ge30pKTtcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZXMgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVzb2x2ZXJzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBnZXQoYXNzZXQpIHtcbiAgICAgICAgaWYgKCFhc3NldCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc291cmNlID0gdGhpcy5yZXNvdXJjZXMuZ2V0KGFzc2V0KTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICAgICAgcmVzb3VyY2UgPSB0aGlzLnJlc29sdmUoYXNzZXQpO1xuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXMuc2V0KGFzc2V0LCByZXNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgIH1cbiAgICByZXNvbHZlKGFzc2V0KSB7XG4gICAgICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gcmVzb2x2ZXIoYXNzZXQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBSZXNvdXJjZSBub3QgcmVzb2x2ZWQ6ICR7YXNzZXR9YCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1hdHJpeCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgRW5naW5lRmVhdHVyZSB9IGZyb20gJy4uL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgY2xhc3MgU2NyZWVuIGV4dGVuZHMgRW5naW5lRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMud2lkdGggPSA0MDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDAwO1xuICAgICAgICB0aGlzLnBpeGVsUmF0aW8gPSAwO1xuICAgICAgICB0aGlzLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXRyaXggPSBNYXRyaXguZW1wdHkoKTtcbiAgICB9XG4gICAgZ2V0TWF0cml4KCkge1xuICAgICAgICBjb25zdCBwaXhlbFJhdGlvID0gdGhpcy5nZXRQaXhlbFJhdGlvKCk7XG4gICAgICAgIHRoaXMubWF0cml4LmEgPSBwaXhlbFJhdGlvO1xuICAgICAgICB0aGlzLm1hdHJpeC5kID0gcGl4ZWxSYXRpbztcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICAgIH1cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVsbHNjcmVlbiA/IHRoaXMuZ2V0V2luZG93V2lkdGgoKSA6IHRoaXMud2lkdGg7XG4gICAgfVxuICAgIGdldEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVsbHNjcmVlbiA/IHRoaXMuZ2V0V2luZG93SGVpZ2h0KCkgOiB0aGlzLmhlaWdodDtcbiAgICB9XG4gICAgZ2V0UGl4ZWxSYXRpbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGl4ZWxSYXRpbyA+IDAgPyB0aGlzLnBpeGVsUmF0aW8gOiB0aGlzLmdldFdpbmRvd1BpeGVsUmF0aW8oKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGlja2VyIHtcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICAgICAgdGhpcy5mcmFtZVJhdGUgPSAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnVwZGF0ZXIudXBkYXRlKHRpbWUpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUubG9hZGluZy51cGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlbmRlcmVyLnJlbmRlcigpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZUZyYW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IChjdXJyZW50VGltZSAtIHRoaXMudGltZSkgLyAxMDAwO1xuICAgICAgICAgICAgdGhpcy50aW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOZXh0RnJhbWUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgfVxuICAgIGdldCBpc1BhdXNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGF1c2VkO1xuICAgIH1cbiAgICBwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmV4dEZyYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHVwZGF0ZU5leHRGcmFtZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlRnJhbWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFVwZGF0ZSB9IGZyb20gJy4uL2V4dGVuc2lvbnMvdXBkYXRlJztcbmltcG9ydCB7IEVuZ2luZUZlYXR1cmUgfSBmcm9tICcuLi9jb3JlL2ZlYXR1cmUnO1xuZXhwb3J0IGNsYXNzIFVwZGF0ZXIgZXh0ZW5kcyBFbmdpbmVGZWF0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGlmICghcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQocm9vdCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9XG4gICAgdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aCA+IHRoaXMuZW5naW5lLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFVcGRhdGUuaXNFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoY29tcG9uZW50KTtcbiAgICAgICAgVXBkYXRlLnVwZGF0ZShjb21wb25lbnQsIHRoaXMudGltZSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnVwZGF0ZS5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVQcm9wZXJ0aWVzKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmVuZ2luZS5jb21wb25lbnRzLnByb3BlcnRpZXMuZm9yRWFjaCgoaGFuZGxlciwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRbcHJvcGVydHldKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIHRoaXMuZW5naW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9sb2FkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2VuZ2luZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL2NvbXBvbmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9kZWJ1Zyc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvZmVhdHVyZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3BsYXRmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vZmVhdHVyZXMvcG9pbnRlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9yZW5kZXJlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3Jlc291cmNlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3NjcmVlbic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3RpY2tlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZlYXR1cmVzL3VwZGF0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL2Rpc3BsYXknO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3Bpdm90JztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9wb2ludGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9zb3VyY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9leHRlbnNpb25zL3RyYW5zZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2V4dGVuc2lvbnMvdXBkYXRlJztcbmV4cG9ydCAqIGZyb20gJy4vZXh0ZW5zaW9ucy9rZXknO1xuIiwiZXhwb3J0IHZhciBCb3VuZHM7XG4oZnVuY3Rpb24gKEJvdW5kcykge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWluWDogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG1pblk6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtYXhYOiBOdW1iZXIuTUlOX1ZBTFVFLFxuICAgICAgICAgICAgbWF4WTogTnVtYmVyLk1JTl9WQUxVRSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQm91bmRzLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkoYm91bmRzKSB7XG4gICAgICAgIGJvdW5kcy5taW5YID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgYm91bmRzLm1pblkgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBib3VuZHMubWF4WCA9IE51bWJlci5NSU5fVkFMVUU7XG4gICAgICAgIGJvdW5kcy5tYXhZID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICB9XG4gICAgQm91bmRzLnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShib3VuZHMpIHtcbiAgICAgICAgcmV0dXJuIGJvdW5kcy5taW5YID09PSBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgICAgICAgICAmJiBib3VuZHMubWluWSA9PT0gTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICAgICAgJiYgYm91bmRzLm1heFggPT09IE51bWJlci5NSU5fVkFMVUVcbiAgICAgICAgICAgICYmIGJvdW5kcy5tYXhZID09PSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgIH1cbiAgICBCb3VuZHMuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gdG9SZWN0YW5nbGUoYm91bmRzLCByZWN0YW5nbGUpIHtcbiAgICAgICAgY29uc3QgeyBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB9ID0gYm91bmRzO1xuICAgICAgICByZWN0YW5nbGUueCA9IG1pblg7XG4gICAgICAgIHJlY3RhbmdsZS55ID0gbWluWTtcbiAgICAgICAgcmVjdGFuZ2xlLndpZHRoID0gbWF4WCAtIG1pblg7XG4gICAgICAgIHJlY3RhbmdsZS5oZWlnaHQgPSBtYXhZIC0gbWluWTtcbiAgICB9XG4gICAgQm91bmRzLnRvUmVjdGFuZ2xlID0gdG9SZWN0YW5nbGU7XG4gICAgZnVuY3Rpb24gdGVzdFgoYm91bmRzLCB4KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFggPSB0ZXN0WDtcbiAgICBmdW5jdGlvbiB0ZXN0WShib3VuZHMsIHkpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0WSA9IHRlc3RZO1xuICAgIGZ1bmN0aW9uIHRlc3QoYm91bmRzLCB4LCB5KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3QgPSB0ZXN0O1xuICAgIGZ1bmN0aW9uIHRlc3RQb2ludChib3VuZHMsIHBvaW50KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIGlmIChib3VuZHMubWluWCA+IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WCA8IHgpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhYID0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RQb2ludCA9IHRlc3RQb2ludDtcbn0pKEJvdW5kcyB8fCAoQm91bmRzID0ge30pKTtcbiIsImV4cG9ydCB2YXIgQ29sb3JUcmFuc2Zvcm07XG4oZnVuY3Rpb24gKENvbG9yVHJhbnNmb3JtKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbHBoYU11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICByZWRNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgZ3JlZW5NdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYmx1ZU11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBhbHBoYU9mZnNldDogMCxcbiAgICAgICAgICAgIHJlZE9mZnNldDogMCxcbiAgICAgICAgICAgIGdyZWVuT2Zmc2V0OiAwLFxuICAgICAgICAgICAgYmx1ZU9mZnNldDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KGN0KSB7XG4gICAgICAgIHJldHVybiBjdC5yZWRNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmJsdWVNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LnJlZE9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5PZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmJsdWVPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmFscGhhT2Zmc2V0ID09PSAwO1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5V2l0aEFscGhhKGN0KSB7XG4gICAgICAgIHJldHVybiBjdC5yZWRNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmJsdWVNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5yZWRPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmdyZWVuT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ibHVlT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU9mZnNldCA9PT0gMDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uaXNFbXB0eVdpdGhBbHBoYSA9IGlzRW1wdHlXaXRoQWxwaGE7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkoY3QpIHtcbiAgICAgICAgY3QucmVkTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LmdyZWVuTXVsdGlwbGllciA9IDE7XG4gICAgICAgIGN0LmJsdWVNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QuYWxwaGFNdWx0aXBsaWVyID0gMTtcbiAgICAgICAgY3QucmVkT2Zmc2V0ID0gMDtcbiAgICAgICAgY3QuZ3JlZW5PZmZzZXQgPSAwO1xuICAgICAgICBjdC5ibHVlT2Zmc2V0ID0gMDtcbiAgICAgICAgY3QuYWxwaGFPZmZzZXQgPSAwO1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5zZXRFbXB0eSA9IHNldEVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvcHkoZnJvbSwgdG8pIHtcbiAgICAgICAgdG8uYWxwaGFNdWx0aXBsaWVyID0gZnJvbS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIHRvLnJlZE11bHRpcGxpZXIgPSBmcm9tLnJlZE11bHRpcGxpZXI7XG4gICAgICAgIHRvLmdyZWVuTXVsdGlwbGllciA9IGZyb20uZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICB0by5ibHVlTXVsdGlwbGllciA9IGZyb20uYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIHRvLmFscGhhT2Zmc2V0ID0gZnJvbS5hbHBoYU9mZnNldDtcbiAgICAgICAgdG8ucmVkT2Zmc2V0ID0gZnJvbS5yZWRPZmZzZXQ7XG4gICAgICAgIHRvLmdyZWVuT2Zmc2V0ID0gZnJvbS5ncmVlbk9mZnNldDtcbiAgICAgICAgdG8uYmx1ZU9mZnNldCA9IGZyb20uYmx1ZU9mZnNldDtcbiAgICB9XG4gICAgQ29sb3JUcmFuc2Zvcm0uY29weSA9IGNvcHk7XG4gICAgZnVuY3Rpb24gY29uY2F0KGN0MSwgY3QwLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgYWxwaGFNdWx0aXBsaWVyID0gY3QxLmFscGhhTXVsdGlwbGllciAqIGN0MC5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IHJlZE11bHRpcGxpZXIgPSBjdDEucmVkTXVsdGlwbGllciAqIGN0MC5yZWRNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBncmVlbk11bHRpcGxpZXIgPSBjdDEuZ3JlZW5NdWx0aXBsaWVyICogY3QwLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgYmx1ZU11bHRpcGxpZXIgPSBjdDEuYmx1ZU11bHRpcGxpZXIgKiBjdDAuYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGFscGhhT2Zmc2V0ID0gY3QxLmFscGhhTXVsdGlwbGllciAqIGN0MC5hbHBoYU9mZnNldCArIGN0MS5hbHBoYU9mZnNldDtcbiAgICAgICAgY29uc3QgcmVkT2Zmc2V0ID0gY3QxLnJlZE11bHRpcGxpZXIgKiBjdDAucmVkT2Zmc2V0ICsgY3QxLnJlZE9mZnNldDtcbiAgICAgICAgY29uc3QgZ3JlZW5PZmZzZXQgPSBjdDEuZ3JlZW5NdWx0aXBsaWVyICogY3QwLmdyZWVuT2Zmc2V0ICsgY3QxLmdyZWVuT2Zmc2V0O1xuICAgICAgICBjb25zdCBibHVlT2Zmc2V0ID0gY3QxLmJsdWVNdWx0aXBsaWVyICogY3QwLmJsdWVPZmZzZXQgKyBjdDEuYmx1ZU9mZnNldDtcbiAgICAgICAgcmVzdWx0LmFscGhhTXVsdGlwbGllciA9IGFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LnJlZE11bHRpcGxpZXIgPSByZWRNdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQuZ3JlZW5NdWx0aXBsaWVyID0gZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICByZXN1bHQuYmx1ZU11bHRpcGxpZXIgPSBibHVlTXVsdGlwbGllcjtcbiAgICAgICAgcmVzdWx0LmFscGhhT2Zmc2V0ID0gYWxwaGFPZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5yZWRPZmZzZXQgPSByZWRPZmZzZXQ7XG4gICAgICAgIHJlc3VsdC5ncmVlbk9mZnNldCA9IGdyZWVuT2Zmc2V0O1xuICAgICAgICByZXN1bHQuYmx1ZU9mZnNldCA9IGJsdWVPZmZzZXQ7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmNvbmNhdCA9IGNvbmNhdDtcbn0pKENvbG9yVHJhbnNmb3JtIHx8IChDb2xvclRyYW5zZm9ybSA9IHt9KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbG9yLXRyYW5zZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2JvdW5kcyc7XG5leHBvcnQgKiBmcm9tICcuL21hdHJpeCc7XG5leHBvcnQgKiBmcm9tICcuL3BvaW50JztcbmV4cG9ydCAqIGZyb20gJy4vcmVjdGFuZ2xlJztcbiIsImV4cG9ydCB2YXIgTWF0cml4O1xuKGZ1bmN0aW9uIChNYXRyaXgpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGE6IDEsXG4gICAgICAgICAgICBiOiAwLFxuICAgICAgICAgICAgYzogMCxcbiAgICAgICAgICAgIGQ6IDEsXG4gICAgICAgICAgICB0eDogMCxcbiAgICAgICAgICAgIHR5OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBNYXRyaXguZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KG1hdHJpeCkge1xuICAgICAgICByZXR1cm4gbWF0cml4LmEgPT09IDFcbiAgICAgICAgICAgICYmIG1hdHJpeC5iID09PSAwXG4gICAgICAgICAgICAmJiBtYXRyaXguYyA9PT0gMFxuICAgICAgICAgICAgJiYgbWF0cml4LmQgPT09IDFcbiAgICAgICAgICAgICYmIG1hdHJpeC50eCA9PT0gMFxuICAgICAgICAgICAgJiYgbWF0cml4LnR5ID09PSAwO1xuICAgIH1cbiAgICBNYXRyaXguaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgZnVuY3Rpb24gc2V0RW1wdHkobWF0cml4KSB7XG4gICAgICAgIG1hdHJpeC5hID0gMTtcbiAgICAgICAgbWF0cml4LmIgPSAwO1xuICAgICAgICBtYXRyaXguYyA9IDA7XG4gICAgICAgIG1hdHJpeC5kID0gMTtcbiAgICAgICAgbWF0cml4LnR4ID0gMDtcbiAgICAgICAgbWF0cml4LnR5ID0gMDtcbiAgICB9XG4gICAgTWF0cml4LnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gY29weShmcm9tLCB0bykge1xuICAgICAgICB0by5hID0gZnJvbS5hO1xuICAgICAgICB0by5iID0gZnJvbS5iO1xuICAgICAgICB0by5jID0gZnJvbS5jO1xuICAgICAgICB0by5kID0gZnJvbS5kO1xuICAgICAgICB0by50eCA9IGZyb20udHg7XG4gICAgICAgIHRvLnR5ID0gZnJvbS50eTtcbiAgICB9XG4gICAgTWF0cml4LmNvcHkgPSBjb3B5O1xuICAgIGZ1bmN0aW9uIGNvbmNhdChtYXRyaXgwLCBtYXRyaXgxLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgYSA9IG1hdHJpeDEuYSAqIG1hdHJpeDAuYSArIG1hdHJpeDEuYiAqIG1hdHJpeDAuYztcbiAgICAgICAgY29uc3QgYiA9IG1hdHJpeDEuYSAqIG1hdHJpeDAuYiArIG1hdHJpeDEuYiAqIG1hdHJpeDAuZDtcbiAgICAgICAgY29uc3QgYyA9IG1hdHJpeDEuYyAqIG1hdHJpeDAuYSArIG1hdHJpeDEuZCAqIG1hdHJpeDAuYztcbiAgICAgICAgY29uc3QgZCA9IG1hdHJpeDEuYyAqIG1hdHJpeDAuYiArIG1hdHJpeDEuZCAqIG1hdHJpeDAuZDtcbiAgICAgICAgY29uc3QgdHggPSBtYXRyaXgxLnR4ICogbWF0cml4MC5hICsgbWF0cml4MS50eSAqIG1hdHJpeDAuYyArIG1hdHJpeDAudHg7XG4gICAgICAgIGNvbnN0IHR5ID0gbWF0cml4MS50eCAqIG1hdHJpeDAuYiArIG1hdHJpeDEudHkgKiBtYXRyaXgwLmQgKyBtYXRyaXgwLnR5O1xuICAgICAgICByZXN1bHQuYSA9IGE7XG4gICAgICAgIHJlc3VsdC5iID0gYjtcbiAgICAgICAgcmVzdWx0LmMgPSBjO1xuICAgICAgICByZXN1bHQuZCA9IGQ7XG4gICAgICAgIHJlc3VsdC50eCA9IHR4O1xuICAgICAgICByZXN1bHQudHkgPSB0eTtcbiAgICB9XG4gICAgTWF0cml4LmNvbmNhdCA9IGNvbmNhdDtcbiAgICBmdW5jdGlvbiBnZXREZXRlcm1pbmFudChtYXRyaXgpIHtcbiAgICAgICAgcmV0dXJuIG1hdHJpeC5hICogbWF0cml4LmQgLSBtYXRyaXguYiAqIG1hdHJpeC5jO1xuICAgIH1cbiAgICBNYXRyaXguZ2V0RGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudDtcbiAgICBmdW5jdGlvbiBpbnZlcnQobWF0cml4LCByZXN1bHQpIHtcbiAgICAgICAgbGV0IGRldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KTtcbiAgICAgICAgaWYgKGRldGVybWluYW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQuYSA9IDA7XG4gICAgICAgICAgICByZXN1bHQuYiA9IDA7XG4gICAgICAgICAgICByZXN1bHQuYyA9IDA7XG4gICAgICAgICAgICByZXN1bHQuZCA9IDA7XG4gICAgICAgICAgICByZXN1bHQudHggPSAtbWF0cml4LnR4O1xuICAgICAgICAgICAgcmVzdWx0LnR5ID0gLW1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRldGVybWluYW50ID0gMS4wIC8gZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuYSA9IG1hdHJpeC5hICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICByZXN1bHQuYiA9IC1tYXRyaXguYiAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgcmVzdWx0LmMgPSAtbWF0cml4LmMgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC5kID0gbWF0cml4LmQgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIHJlc3VsdC50eCA9IC1yZXN1bHQuYSAqIG1hdHJpeC50eCAtIHJlc3VsdC5jICogbWF0cml4LnR5O1xuICAgICAgICAgICAgcmVzdWx0LnR5ID0gLXJlc3VsdC5iICogbWF0cml4LnR4IC0gcmVzdWx0LmQgKiBtYXRyaXgudHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTWF0cml4LmludmVydCA9IGludmVydDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmVzdWx0LnggPSB4ICogbWF0cml4LmEgKyB5ICogbWF0cml4LmMgKyBtYXRyaXgudHg7XG4gICAgICAgIHJlc3VsdC55ID0geCAqIG1hdHJpeC5iICsgeSAqIG1hdHJpeC5kICsgbWF0cml4LnR5O1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQgPSB0cmFuc2Zvcm1Qb2ludDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Qb2ludExvY2FsKG1hdHJpeCwgcG9pbnQsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICByZXN1bHQueCA9IHggKiBtYXRyaXguYSArIHkgKiBtYXRyaXguYztcbiAgICAgICAgcmVzdWx0LnkgPSB4ICogbWF0cml4LmIgKyB5ICogbWF0cml4LmQ7XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludExvY2FsID0gdHJhbnNmb3JtUG9pbnRMb2NhbDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1JbnZlcnNlUG9pbnQobWF0cml4LCBwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgIGxldCBkZXRlcm1pbmFudCA9IGdldERldGVybWluYW50KG1hdHJpeCk7XG4gICAgICAgIGlmIChkZXRlcm1pbmFudCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0LnggPSAtbWF0cml4LnR4O1xuICAgICAgICAgICAgcmVzdWx0LnkgPSAtbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGV0ZXJtaW5hbnQgPSAxIC8gZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICAgICAgcmVzdWx0LnggPSBkZXRlcm1pbmFudCAqIChtYXRyaXguYyAqIChtYXRyaXgudHkgLSB5KSArIG1hdHJpeC5kICogKHggLSBtYXRyaXgudHgpKTtcbiAgICAgICAgICAgIHJlc3VsdC55ID0gZGV0ZXJtaW5hbnQgKiAobWF0cml4LmEgKiAoeSAtIG1hdHJpeC50eSkgKyBtYXRyaXguYiAqIChtYXRyaXgudHggLSB4KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybUludmVyc2VQb2ludCA9IHRyYW5zZm9ybUludmVyc2VQb2ludDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Cb3VuZHMobWF0cml4LCBib3VuZHMsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGEsIGIsIGMsIGQsIHR4LCB0eSwgfSA9IG1hdHJpeDtcbiAgICAgICAgY29uc3QgcnggPSBib3VuZHMueDtcbiAgICAgICAgY29uc3QgcnkgPSBib3VuZHMueTtcbiAgICAgICAgY29uc3QgcnIgPSByeCArIGJvdW5kcy53aWR0aDtcbiAgICAgICAgY29uc3QgcmIgPSByeSArIGJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IG54MSA9IHJ4ICogYSArIHJ5ICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTEgPSByeCAqIGIgKyByeSAqIGQgKyB0eTtcbiAgICAgICAgY29uc3QgbngyID0gcnIgKiBhICsgcnkgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MiA9IHJyICogYiArIHJ5ICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDMgPSByciAqIGEgKyByYiAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkzID0gcnIgKiBiICsgcmIgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54NCA9IHJ4ICogYSArIHJiICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTQgPSByeCAqIGIgKyByYiAqIGQgKyB0eTtcbiAgICAgICAgbGV0IGxlZnQgPSBueDE7XG4gICAgICAgIGlmIChsZWZ0ID4gbngyKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbngyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0ID4gbngzKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbngzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0ID4gbng0KSB7XG4gICAgICAgICAgICBsZWZ0ID0gbng0O1xuICAgICAgICB9XG4gICAgICAgIGxldCB0b3AgPSBueTE7XG4gICAgICAgIGlmICh0b3AgPiBueTIpIHtcbiAgICAgICAgICAgIHRvcCA9IG55MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9wID4gbnkzKSB7XG4gICAgICAgICAgICB0b3AgPSBueTM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcCA+IG55NCkge1xuICAgICAgICAgICAgdG9wID0gbnk0O1xuICAgICAgICB9XG4gICAgICAgIGxldCByaWdodCA9IG54MTtcbiAgICAgICAgaWYgKHJpZ2h0IDwgbngyKSB7XG4gICAgICAgICAgICByaWdodCA9IG54MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgPCBueDMpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbngzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCA8IG54NCkge1xuICAgICAgICAgICAgcmlnaHQgPSBueDQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJvdHRvbSA9IG55MTtcbiAgICAgICAgaWYgKGJvdHRvbSA8IG55Mikge1xuICAgICAgICAgICAgYm90dG9tID0gbnkyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3R0b20gPCBueTMpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55MztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tIDwgbnk0KSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTQ7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnggPSBsZWZ0O1xuICAgICAgICByZXN1bHQueSA9IHRvcDtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgICAgICByZXN1bHQuaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtQm91bmRzID0gdHJhbnNmb3JtQm91bmRzO1xufSkoTWF0cml4IHx8IChNYXRyaXggPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBQb2ludDtcbihmdW5jdGlvbiAoUG9pbnQpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgIH1cbiAgICBQb2ludC5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGxlbmd0aChwb2ludCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH1cbiAgICBQb2ludC5sZW5ndGggPSBsZW5ndGg7XG4gICAgZnVuY3Rpb24gYW5nbGUocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIocG9pbnQueSwgcG9pbnQueCk7XG4gICAgfVxuICAgIFBvaW50LmFuZ2xlID0gYW5nbGU7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShwb2ludCkge1xuICAgICAgICByZXR1cm4gcG9pbnQueCA9PT0gMCAmJiBwb2ludC55ID09PSAwO1xuICAgIH1cbiAgICBQb2ludC5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBlcXVhbHMocG9pbnQwLCBwb2ludDEpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50MC54ID09PSBwb2ludDEueCAmJiBwb2ludDAueSA9PT0gcG9pbnQxLnk7XG4gICAgfVxuICAgIFBvaW50LmVxdWFscyA9IGVxdWFscztcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShwb2ludCkge1xuICAgICAgICBwb2ludC54ID0gMDtcbiAgICAgICAgcG9pbnQueSA9IDA7XG4gICAgfVxuICAgIFBvaW50LnNldEVtcHR5ID0gc2V0RW1wdHk7XG4gICAgZnVuY3Rpb24gY29weShzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICB0YXJnZXQueCA9IHNvdXJjZS54O1xuICAgICAgICB0YXJnZXQueSA9IHNvdXJjZS55O1xuICAgIH1cbiAgICBQb2ludC5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBub3JtYWxpemUocG9pbnQsIHRoaWNrbmVzcykge1xuICAgICAgICBsZXQgdmFsdWUgPSBsZW5ndGgocG9pbnQpO1xuICAgICAgICBpZiAodmFsdWUgPiAwKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaWNrbmVzcyAvIHZhbHVlO1xuICAgICAgICAgICAgcG9pbnQueCAqPSB2YWx1ZTtcbiAgICAgICAgICAgIHBvaW50LnkgKj0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUG9pbnQubm9ybWFsaXplID0gbm9ybWFsaXplO1xuICAgIGZ1bmN0aW9uIGRpc3RhbmNlKHBvaW50MCwgcG9pbnQxKSB7XG4gICAgICAgIGNvbnN0IGR4ID0gcG9pbnQwLnggLSBwb2ludDEueDtcbiAgICAgICAgY29uc3QgZHkgPSBwb2ludDAueSAtIHBvaW50MS55O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICB9XG4gICAgUG9pbnQuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICBmdW5jdGlvbiBpbnRlcnBvbGF0ZShiZWdpbiwgZW5kLCB2YWx1ZSwgcmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdC54ID0gYmVnaW4ueCArIHZhbHVlICogKGVuZC54IC0gYmVnaW4ueCk7XG4gICAgICAgIHJlc3VsdC55ID0gYmVnaW4ueSArIHZhbHVlICogKGVuZC55IC0gYmVnaW4ueSk7XG4gICAgfVxuICAgIFBvaW50LmludGVycG9sYXRlID0gaW50ZXJwb2xhdGU7XG4gICAgZnVuY3Rpb24gcG9sYXIocG9pbnQsIGxlbmd0aCwgYW5nbGUpIHtcbiAgICAgICAgcG9pbnQueCA9IGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKTtcbiAgICAgICAgcG9pbnQueSA9IGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKTtcbiAgICB9XG4gICAgUG9pbnQucG9sYXIgPSBwb2xhcjtcbn0pKFBvaW50IHx8IChQb2ludCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFJlY3RhbmdsZTtcbihmdW5jdGlvbiAoUmVjdGFuZ2xlKSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBzZXRFbXB0eShyZWN0YW5nbGUpIHtcbiAgICAgICAgcmVjdGFuZ2xlLnggPSAwO1xuICAgICAgICByZWN0YW5nbGUueSA9IDA7XG4gICAgICAgIHJlY3RhbmdsZS53aWR0aCA9IDA7XG4gICAgICAgIHJlY3RhbmdsZS5oZWlnaHQgPSAwO1xuICAgIH1cbiAgICBSZWN0YW5nbGUuc2V0RW1wdHkgPSBzZXRFbXB0eTtcbiAgICBmdW5jdGlvbiBpbnRlcnNlY3Rpb24oc291cmNlLCB0YXJnZXQsIHJlc3VsdCkge1xuICAgICAgICBsZXQgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB9ID0gc291cmNlO1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGFyZ2V0Lng7XG4gICAgICAgIGNvbnN0IHRvcCA9IHRhcmdldC55O1xuICAgICAgICBjb25zdCByaWdodCA9IHRhcmdldC54ICsgdGFyZ2V0LndpZHRoO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0YXJnZXQueSArIHRhcmdldC5oZWlnaHQ7XG4gICAgICAgIGlmICh4IDwgbGVmdCkge1xuICAgICAgICAgICAgd2lkdGggLT0gbGVmdCAtIHg7XG4gICAgICAgICAgICB4ID0gbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCArIHdpZHRoID4gcmlnaHQpIHtcbiAgICAgICAgICAgIHdpZHRoID0gcmlnaHQgLSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh5IDwgdG9wKSB7XG4gICAgICAgICAgICBoZWlnaHQgLT0gdG9wIC0geTtcbiAgICAgICAgICAgIHkgPSB0b3A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgKyBoZWlnaHQgPiBib3R0b20pIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGJvdHRvbSAtIHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgICAgICAgd2lkdGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC54ID0geDtcbiAgICAgICAgcmVzdWx0LnkgPSB5O1xuICAgICAgICByZXN1bHQud2lkdGggPSB3aWR0aDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbjtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KHJlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlLndpZHRoID09PSAwIHx8IHJlY3RhbmdsZS5oZWlnaHQgPT09IDA7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBjb250YWlucyhyZWN0YW5nbGUsIHBvaW50KSB7XG4gICAgICAgIHJldHVybiByZWN0YW5nbGUueCA8IHBvaW50LnhcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS54ICsgcmVjdGFuZ2xlLndpZHRoID4gcG9pbnQueFxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnkgPCBwb2ludC55XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueSArIHJlY3RhbmdsZS5oZWlnaHQgPiBwb2ludC55O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuY29udGFpbnMgPSBjb250YWlucztcbiAgICBmdW5jdGlvbiByb3VuZChyZWN0YW5nbGUpIHtcbiAgICAgICAgcmVjdGFuZ2xlLnggPSBNYXRoLnJvdW5kKHJlY3RhbmdsZS54KTtcbiAgICAgICAgcmVjdGFuZ2xlLnkgPSBNYXRoLnJvdW5kKHJlY3RhbmdsZS55KTtcbiAgICAgICAgcmVjdGFuZ2xlLndpZHRoID0gTWF0aC5yb3VuZChyZWN0YW5nbGUud2lkdGgpO1xuICAgICAgICByZWN0YW5nbGUuaGVpZ2h0ID0gTWF0aC5yb3VuZChyZWN0YW5nbGUuaGVpZ2h0KTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLnJvdW5kID0gcm91bmQ7XG59KShSZWN0YW5nbGUgfHwgKFJlY3RhbmdsZSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0sIE1hdHJpeCwgUmVjdGFuZ2xlIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBJbWFnZUV4dGVuc2lvbiwgSU1BR0UgfSBmcm9tICcuL2ltYWdlJztcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuY29uc3Qgc2NyZWVuQm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb247XG4oZnVuY3Rpb24gKENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiByZW5kZXIoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBlbmdpbmUucmVzb3VyY2VzLmdldChzcmMpO1xuICAgICAgICBpZiAoIXJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICAgICAgY29uc3QgcGxhdGZvcm0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IHBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgICAgIGlmIChDb2xvclRyYW5zZm9ybS5pc0VtcHR5V2l0aEFscGhhKGNvbG9yVHJhbnNmb3JtKSkge1xuICAgICAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgICAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjdXN0b21Db250ZXh0ID0gcGxhdGZvcm0uY3JlYXRlQ3VzdG9tQ29udGV4dCgpO1xuICAgICAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICAgICAgYm91bmRzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybUJvdW5kcyhtYXRyaXgsIGJvdW5kcywgYm91bmRzKTtcbiAgICAgICAgICAgIGlmIChSZWN0YW5nbGUuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2NyZWVuQm91bmRzLndpZHRoID0gY3VzdG9tQ29udGV4dC5jYW52YXMud2lkdGg7XG4gICAgICAgICAgICBzY3JlZW5Cb3VuZHMuaGVpZ2h0ID0gY3VzdG9tQ29udGV4dC5jYW52YXMuaGVpZ2h0O1xuICAgICAgICAgICAgUmVjdGFuZ2xlLmludGVyc2VjdGlvbihib3VuZHMsIHNjcmVlbkJvdW5kcywgYm91bmRzKTtcbiAgICAgICAgICAgIGlmIChSZWN0YW5nbGUuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVjdGFuZ2xlLnJvdW5kKGJvdW5kcyk7XG4gICAgICAgICAgICBjdXN0b21Db250ZXh0LnNldFRyYW5zZm9ybSgpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5jbGVhclJlY3QoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGN1c3RvbUNvbnRleHQuZ2V0SW1hZ2VEYXRhKGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnN0IHJtID0gY29sb3JUcmFuc2Zvcm0ucmVkTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IGdtID0gY29sb3JUcmFuc2Zvcm0uZ3JlZW5NdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3QgYm0gPSBjb2xvclRyYW5zZm9ybS5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgICAgIGNvbnN0IGFtID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICAgICAgY29uc3Qgcm8gPSBjb2xvclRyYW5zZm9ybS5yZWRPZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBnbyA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgYm8gPSBjb2xvclRyYW5zZm9ybS5ibHVlT2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgYW8gPSBjb2xvclRyYW5zZm9ybS5hbHBoYU9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gaW1hZ2VEYXRhO1xuICAgICAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IGRhdGE7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogcm0gKyBybztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogZ20gKyBnbztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogYm0gKyBibztcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogYW0gKyBhbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1c3RvbUNvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgYm91bmRzLngsIGJvdW5kcy55KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKGN1c3RvbUNvbnRleHQuY2FudmFzLCBib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCwgYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgcGxhdGZvcm0uZGVzdHJveUN1c3RvbUNvbnRleHQoY3VzdG9tQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgSW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KElNQUdFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiB8fCAoQ2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VFeHRlbnNpb24sIElNQUdFIH0gZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgdmFyIENhbnZhc0ltYWdlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNJbWFnZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihpbWFnZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBpbWFnZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dCA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IGVuZ2luZS5wbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHkpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgSW1hZ2VFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KElNQUdFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNJbWFnZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc0ltYWdlRXh0ZW5zaW9uIHx8IChDYW52YXNJbWFnZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCwgUmVzb3VyY2UsIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuZXhwb3J0IGNvbnN0IElNQUdFID0gJ2ltYWdlJztcbmV4cG9ydCB2YXIgSW1hZ2U7XG4oZnVuY3Rpb24gKEltYWdlKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGltYWdlLCBib3VuZHMsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICBSZWN0YW5nbGUuc2V0RW1wdHkoYm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICAgICAgYm91bmRzLnggPSB4O1xuICAgICAgICBib3VuZHMueSA9IHk7XG4gICAgICAgIGJvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBJbWFnZS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShJbWFnZSB8fCAoSW1hZ2UgPSB7fSkpO1xuY29uc3QgYm91bmRzID0gUmVjdGFuZ2xlLmVtcHR5KCk7XG5leHBvcnQgdmFyIEltYWdlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChJbWFnZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGhpdFRlc3QoaW1hZ2UsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IGxvY2FsIH0gPSBlbmdpbmUucG9pbnRlcnM7XG4gICAgICAgIEltYWdlLmNhbGN1bGF0ZUJvdW5kcyhpbWFnZSwgYm91bmRzLCBlbmdpbmUpO1xuICAgICAgICBsZXQgY29udGFpbnMgPSBSZWN0YW5nbGUuY29udGFpbnMoYm91bmRzLCBsb2NhbCk7XG4gICAgICAgIGlmIChjb250YWlucykge1xuICAgICAgICAgICAgaWYgKGltYWdlLnBvaW50ZXJUZXN0U2hhcGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KGltYWdlLnNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0gbG9jYWwueCAtIGJvdW5kcy54O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gbG9jYWwueSAtIGJvdW5kcy55O1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzb3VyY2UuaW1hZ2UgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FudmFzQ29udGV4dCA9IHJlc291cmNlLmltYWdlLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBjYW52YXNDb250ZXh0LmdldEltYWdlRGF0YSh4LCB5LCAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gaW1hZ2VEYXRhLmRhdGFbM10gPiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxhdGZvcm0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXN0b21Db250ZXh0ID0gcGxhdGZvcm0uY3JlYXRlQ3VzdG9tQ29udGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ29udGV4dC5kcmF3SW1hZ2UocmVzb3VyY2UuaW1hZ2UsIHgsIHksIDEsIDEsIDAsIDAsIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gY3VzdG9tQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWlucyA9IGltYWdlRGF0YS5kYXRhWzNdID4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtLmRlc3Ryb3lDdXN0b21Db250ZXh0KGN1c3RvbUNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250YWlucyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbnM7XG4gICAgfVxuICAgIEltYWdlRXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGxvYWRlZChpbWFnZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUubG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHsgc3JjIH0gPSBpbWFnZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IFJlc291cmNlLmdldFByb2dyZXNzKHJlc291cmNlKTtcbiAgICAgICAgY29udGV4dC5sb2FkZWQgPSAhIXJlc291cmNlPy5sb2FkZWQgJiYgISFyZXNvdXJjZT8uaW1hZ2U7XG4gICAgfVxuICAgIEltYWdlRXh0ZW5zaW9uLmxvYWRlZCA9IGxvYWRlZDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChJTUFHRSwgaGl0VGVzdCk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmxvYWRlZC5zZXQoSU1BR0UsIGxvYWRlZCk7XG4gICAgICAgIEltYWdlUmVzb3VyY2UuaW5pdChlbmdpbmUpO1xuICAgIH1cbiAgICBJbWFnZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKEltYWdlRXh0ZW5zaW9uIHx8IChJbWFnZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2ltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vY2FudmFzLWltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vY2FudmFzLWltYWdlLWNvbG9yJztcbiIsImV4cG9ydCB2YXIgSW1hZ2VSZXNvdXJjZTtcbihmdW5jdGlvbiAoSW1hZ2VSZXNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIHJlc29sdmUoYXNzZXQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCBleHRlbnNpb24gPSBhc3NldC5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgICBzd2l0Y2ggKGV4dGVuc2lvbikge1xuICAgICAgICAgICAgY2FzZSAncG5nJzpcbiAgICAgICAgICAgIGNhc2UgJ2pwZyc6XG4gICAgICAgICAgICBjYXNlICd3ZWJwJzpcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzTG9hZGVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBieXRlc1RvdGFsOiAwLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBhc3NldDtcbiAgICAgICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy5sb2coYGltYWdlIGxvYWRlZDogJHthc3NldH1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnaW1hZ2UgbG9hZCBlcnJvcicsIGUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgSW1hZ2VSZXNvdXJjZS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb2x2ZSk7XG4gICAgfVxuICAgIEltYWdlUmVzb3VyY2UuaW5pdCA9IGluaXQ7XG59KShJbWFnZVJlc291cmNlIHx8IChJbWFnZVJlc291cmNlID0ge30pKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJpbmcnO1xuIiwiZXhwb3J0IHZhciBTdHJpbmdSZXNvdXJjZTtcbihmdW5jdGlvbiAoU3RyaW5nUmVzb3VyY2UpIHtcbiAgICBmdW5jdGlvbiByZXNvbHZlKGFzc2V0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gYXNzZXQuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgICAgc3dpdGNoIChleHRlbnNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3R4dCc6XG4gICAgICAgICAgICBjYXNlICdqc29uJzpcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzTG9hZGVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBieXRlc1RvdGFsOiAwLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGFzc2V0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB4aHIub25wcm9ncmVzcyA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmJ5dGVzTG9hZGVkID0gZS5sb2FkZWQ7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmJ5dGVzVG90YWwgPSBlLnRvdGFsO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLmxvZyhgc3RyaW5nIGxvYWRlZDogJHthc3NldH1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuZGF0YSA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmJ5dGVzTG9hZGVkID0gcmVzb3VyY2UuYnl0ZXNUb3RhbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5vbmVycm9yID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ3N0cmluZyBsb2FkIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFN0cmluZ1Jlc291cmNlLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvbHZlKTtcbiAgICB9XG4gICAgU3RyaW5nUmVzb3VyY2UuaW5pdCA9IGluaXQ7XG59KShTdHJpbmdSZXNvdXJjZSB8fCAoU3RyaW5nUmVzb3VyY2UgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUmVzb3VyY2UsIENvbnRhaW5lckV4dGVuc2lvbiwgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IFN0cmluZ1Jlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcbmV4cG9ydCBjb25zdCBTQ0VORSA9ICdzY2VuZSc7XG5leHBvcnQgdmFyIFNjZW5lRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChTY2VuZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIGxvYWRlZChzY2VuZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUubG9hZGluZy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGlmIChzY2VuZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgQ29udGFpbmVyRXh0ZW5zaW9uLmxvYWRlZChzY2VuZSwgZW5naW5lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc3JjIH0gPSBzY2VuZTtcbiAgICAgICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgY29udGV4dC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gZW5naW5lLnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgICAgIGNvbnRleHQucHJvZ3Jlc3MgPSBSZXNvdXJjZS5nZXRQcm9ncmVzcyhyZXNvdXJjZSk7XG4gICAgICAgICAgICBjb250ZXh0LmxvYWRlZCA9ICEhcmVzb3VyY2U/LmxvYWRlZCAmJiAhIXJlc291cmNlPy5kYXRhO1xuICAgICAgICAgICAgaWYgKHJlc291cmNlICYmIHJlc291cmNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5jaGlsZHJlbiA9IEpTT04ucGFyc2UocmVzb3VyY2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKGBzY2VuZSBwYXJzaW5nIGVycm9yOiAke2UubWVzc2FnZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgU2NlbmVFeHRlbnNpb24ubG9hZGVkID0gbG9hZGVkO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KFNDRU5FLCBDb250YWluZXJFeHRlbnNpb24uaGl0VGVzdCk7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLnJlbmRlci5zZXQoU0NFTkUsIENvbnRhaW5lckV4dGVuc2lvbi5yZW5kZXIpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy51cGRhdGUuc2V0KFNDRU5FLCBDb250YWluZXJFeHRlbnNpb24udXBkYXRlKTtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMubG9hZGVkLnNldChTQ0VORSwgbG9hZGVkKTtcbiAgICAgICAgU3RyaW5nUmVzb3VyY2UuaW5pdChlbmdpbmUpO1xuICAgIH1cbiAgICBTY2VuZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFNjZW5lRXh0ZW5zaW9uIHx8IChTY2VuZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJjb25zdCBQSV8yID0gTWF0aC5QSSAqIDI7XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlFbGxpcHNlKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgcmFkaXVzID0gMCwgcmFkaXVzWCwgcmFkaXVzWSwgfSA9IGRhdGE7XG4gICAgY29uc3QgcnggPSByYWRpdXNYID8/IHJhZGl1cztcbiAgICBjb25zdCByeSA9IHJhZGl1c1kgPz8gcmFkaXVzO1xuICAgIGlmIChyeCA9PT0gMCB8fCByeSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5lbGxpcHNlKHgsIHksIHJ4LCByeSwgMCwgMCwgUElfMik7XG4gICAgaWYgKGhhc0ZpbGwpIHtcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYXBwbHlDb21tYW5kKGNvbW1hbmQsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IGNvbW1hbmQ7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21vdmVUbyc6XG4gICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8obW92ZVRvLnggPz8gMCwgbW92ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbGluZVRvJzpcbiAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhsaW5lVG8ueCA/PyAwLCBsaW5lVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjdXJ2ZVRvJzpcbiAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5xdWFkcmF0aWNDdXJ2ZVRvKGN1cnZlVG8uY3ggPz8gMCwgY3VydmVUby5jeSA/PyAwLCBjdXJ2ZVRvLnggPz8gMCwgY3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2N1YmljQ3VydmVUbyc6XG4gICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSBjb21tYW5kO1xuICAgICAgICAgICAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKGN1YmljQ3VydmVUby5jeCA/PyAwLCBjdWJpY0N1cnZlVG8uY3kgPz8gMCwgY3ViaWNDdXJ2ZVRvLnN4ID8/IDAsIGN1YmljQ3VydmVUby5zeSA/PyAwLCBjdWJpY0N1cnZlVG8ueCA/PyAwLCBjdWJpY0N1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGF0aChkYXRhLCBoYXNGaWxsLCBjb250ZXh0KSB7XG4gICAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBkYXRhW2ldO1xuICAgICAgICBhcHBseUNvbW1hbmQoY29tbWFuZCwgY29udGV4dCk7XG4gICAgfVxuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UmVjdGFuZ2xlKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgd2lkdGggPSAwLCBoZWlnaHQgPSAwLCB9ID0gZGF0YTtcbiAgICBpZiAod2lkdGggPT09IDAgfHwgaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LnJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgaWYgKGhhc0ZpbGwpIHtcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgTWF0cml4LCBQb2ludCwgUmVjdGFuZ2xlLCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuaW1wb3J0IHsgU2hhcGVFeHRlbnNpb24sIFNIQVBFLCBTaGFwZSB9IGZyb20gJy4uL3NoYXBlJztcbmltcG9ydCB7IGFwcGx5UmVjdGFuZ2xlIH0gZnJvbSAnLi9yZWN0YW5nbGUnO1xuaW1wb3J0IHsgYXBwbHlFbGxpcHNlIH0gZnJvbSAnLi9lbGxpcHNlJztcbmltcG9ydCB7IGFwcGx5UGF0aCB9IGZyb20gJy4vcGF0aCc7XG5pbXBvcnQgeyBhcHBseVN0cmluZyB9IGZyb20gJy4vc3RyaW5nJztcbmltcG9ydCB7IHNldEZpbGxTdHlsZSwgc2V0U3Ryb2tlU3R5bGUgfSBmcm9tICcuL3N0eWxlJztcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuY29uc3Qgb2Zmc2V0ID0gUG9pbnQuZW1wdHkoKTtcbmZ1bmN0aW9uIHJlbmRlckdyYXBoaWNzKGRhdGEsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpIHtcbiAgICBjb25zdCB7IGZpbGwsIHN0cm9rZSB9ID0gZGF0YTtcbiAgICBjb25zdCBoYXNGaWxsID0gISFmaWxsIHx8IGZpbGwgPT09IDA7XG4gICAgY29uc3QgaGFzU3Ryb2tlID0gISFzdHJva2UgfHwgc3Ryb2tlID09PSAwO1xuICAgIGlmICghaGFzRmlsbCAmJiAhaGFzU3Ryb2tlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGV4aXN0ID0gdHJ1ZTtcbiAgICBjb25zdCB7IHR5cGUgfSA9IGRhdGE7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICBleGlzdCA9IGFwcGx5UmVjdGFuZ2xlKGRhdGEsIGhhc0ZpbGwsIGNvbnRleHQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgICAgICAgZXhpc3QgPSBhcHBseUVsbGlwc2UoZGF0YSwgaGFzRmlsbCwgY29udGV4dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGF0aCc6XG4gICAgICAgICAgICBjb25zdCBwYXRoID0gZGF0YTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGF0aC5kYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlTdHJpbmcocGF0aC5kYXRhLCBoYXNGaWxsLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocGF0aC5kYXRhKSkge1xuICAgICAgICAgICAgICAgIGV4aXN0ID0gYXBwbHlQYXRoKHBhdGguZGF0YSwgaGFzRmlsbCwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGlzdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKCFleGlzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIHNldEZpbGxTdHlsZShmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbiAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgfVxuICAgIGlmIChoYXNTdHJva2UpIHtcbiAgICAgICAgc2V0U3Ryb2tlU3R5bGUoc3Ryb2tlLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB9XG59XG5leHBvcnQgdmFyIENhbnZhc1NoYXBlRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChDYW52YXNTaGFwZUV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihzaGFwZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gc2hhcGU7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBlbmdpbmUucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBQb2ludC5zZXRFbXB0eShvZmZzZXQpO1xuICAgICAgICBpZiAoUGl2b3QuaGFzVmFsdWVzKHNoYXBlKSkge1xuICAgICAgICAgICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzKHNoYXBlLCBib3VuZHMpO1xuICAgICAgICAgICAgaWYgKFJlY3RhbmdsZS5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmZzZXQueCA9IFBpdm90LmdldFgoc2hhcGUsIGJvdW5kcy53aWR0aCk7XG4gICAgICAgICAgICBvZmZzZXQueSA9IFBpdm90LmdldFkoc2hhcGUsIGJvdW5kcy53aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dDJkID0gZW5naW5lLnBsYXRmb3JtLmdldENvbnRleHQoKTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IGNvbnRleHQ7XG4gICAgICAgIGlmIChQb2ludC5pc0VtcHR5KG9mZnNldCkpIHtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludExvY2FsKG1hdHJpeCwgb2Zmc2V0LCBvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCArIG9mZnNldC54LCBtYXRyaXgudHkgKyBvZmZzZXQueSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZW5kZXJHcmFwaGljcyhkYXRhW2ldLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dDJkLCBlbmdpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmVuZGVyR3JhcGhpY3MoZGF0YSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQyZCwgZW5naW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDYW52YXNTaGFwZUV4dGVuc2lvbi5yZW5kZXIgPSByZW5kZXI7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgU2hhcGVFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KFNIQVBFLCByZW5kZXIpO1xuICAgIH1cbiAgICBDYW52YXNTaGFwZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKENhbnZhc1NoYXBlRXh0ZW5zaW9uIHx8IChDYW52YXNTaGFwZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBHcmFwaGljc1N0cmluZ1JlYWRlciB9IGZyb20gJy4uL2RhdGEvc3RyaW5nJztcbmltcG9ydCB7IGFwcGx5Q29tbWFuZCB9IGZyb20gJy4vcGF0aCc7XG5jb25zdCByZWFkZXIgPSBuZXcgR3JhcGhpY3NTdHJpbmdSZWFkZXIoKTtcbmV4cG9ydCBmdW5jdGlvbiBhcHBseVN0cmluZyhkYXRhLCBoYXNGaWxsLCBjb250ZXh0KSB7XG4gICAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgcmVhZGVyLnNldFBhdGgoZGF0YSk7XG4gICAgd2hpbGUgKHJlYWRlci5yZWFkTmV4dCgpKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSByZWFkZXIuZ2V0Q29tbWFuZCgpO1xuICAgICAgICBpZiAoY29tbWFuZCkge1xuICAgICAgICAgICAgYXBwbHlDb21tYW5kKGNvbW1hbmQsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChoYXNGaWxsKSB7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgQ2FudmFzUGF0dGVybnMgfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IE1hdHJpeCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuY29uc3QgZW1wdHlBcnJheSA9IFtdO1xuY29uc3QgZW1wdHlNYXRyaXggPSBNYXRyaXguZW1wdHkoKTtcbmZ1bmN0aW9uIGdldENhbnZhc1BhdHRlcm4oZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihmaWxsLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgc3dpdGNoIChmaWxsLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NvbGlkJzpcbiAgICAgICAgICAgICAgICBjb25zdCBzb2xpZCA9IGZpbGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihzb2xpZC5jb2xvciA/PyAwLCBzb2xpZC5hbHBoYSA/PyAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgICAgICBjYXNlICdsaW5lYXInOlxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVhciA9IGZpbGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbnZhc1BhdHRlcm5zLmxpbmVhckdyYWRpZW50UGF0dGVybihsaW5lYXIuYmVnaW5YID8/IDAsIGxpbmVhci5iZWdpblkgPz8gMCwgbGluZWFyLmVuZFggPz8gMCwgbGluZWFyLmVuZFkgPz8gMCwgbGluZWFyLmNvbG9ycyA/PyBlbXB0eUFycmF5LCBsaW5lYXIuYWxwaGFzID8/IGVtcHR5QXJyYXksIGxpbmVhci5yYXRpb3MgPz8gZW1wdHlBcnJheSwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQpO1xuICAgICAgICAgICAgY2FzZSAncmFkaWFsJzpcbiAgICAgICAgICAgICAgICBjb25zdCByYWRpYWwgPSBmaWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBDYW52YXNQYXR0ZXJucy5yYWRpYWxHcmFkaWVudFBhdHRlcm4ocmFkaWFsLmJlZ2luWCA/PyAwLCByYWRpYWwuYmVnaW5ZID8/IDAsIHJhZGlhbC5iZWdpblJhZGl1cyA/PyAwLCByYWRpYWwuZW5kWCA/PyByYWRpYWwuYmVnaW5YID8/IDAsIHJhZGlhbC5lbmRZID8/IHJhZGlhbC5iZWdpblkgPz8gMCwgcmFkaWFsLmVuZFJhZGl1cyA/PyAwLCByYWRpYWwuY29sb3JzID8/IGVtcHR5QXJyYXksIHJhZGlhbC5hbHBoYXMgPz8gZW1wdHlBcnJheSwgcmFkaWFsLnJhdGlvcyA/PyBlbXB0eUFycmF5LCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCk7XG4gICAgICAgICAgICBjYXNlICdiaXRtYXAnOlxuICAgICAgICAgICAgICAgIGNvbnN0IGJpdG1hcEZpbGwgPSBmaWxsO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVwZWF0ID0gdHJ1ZSwgc3JjLCBtYXRyaXggPSBlbXB0eU1hdHJpeCwgZmFsbGJhY2ssIH0gPSBiaXRtYXBGaWxsO1xuICAgICAgICAgICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc291cmNlPy5pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gQ2FudmFzUGF0dGVybnMuYml0bWFwUGF0dGVybihyZXNvdXJjZS5pbWFnZSwgcmVwZWF0LCBtYXRyaXgsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRDYW52YXNQYXR0ZXJuKGZhbGxiYWNrLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAndHJhbnNwYXJlbnQnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWxsU3R5bGUoZmlsbCwgY29sb3JUcmFuc2Zvcm0sIGNvbnRleHQsIGVuZ2luZSkge1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZ2V0Q2FudmFzUGF0dGVybihmaWxsLCBjb2xvclRyYW5zZm9ybSwgY29udGV4dCwgZW5naW5lKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHJva2VTdHlsZShzdHJva2UsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpIHtcbiAgICBpZiAodHlwZW9mIHN0cm9rZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihzdHJva2UsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjb250ZXh0LmxpbmVDYXAgPSAncm91bmQnO1xuICAgICAgICBjb250ZXh0LmxpbmVKb2luID0gJ3JvdW5kJztcbiAgICAgICAgY29udGV4dC5taXRlckxpbWl0ID0gMTA7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBzdHJva2UgPT09ICdvYmplY3QnICYmIHN0cm9rZS5maWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGdldENhbnZhc1BhdHRlcm4oc3Ryb2tlLmZpbGwsIGNvbG9yVHJhbnNmb3JtLCBjb250ZXh0LCBlbmdpbmUpO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHN0cm9rZS50aGlja25lc3MgPz8gMTtcbiAgICAgICAgY29udGV4dC5saW5lQ2FwID0gc3Ryb2tlLmNhcHMgPz8gJ3JvdW5kJztcbiAgICAgICAgY29udGV4dC5saW5lSm9pbiA9IHN0cm9rZS5qb2ludHMgPz8gJ3JvdW5kJztcbiAgICAgICAgY29udGV4dC5taXRlckxpbWl0ID0gc3Ryb2tlLm1pdGVyTGltaXQgPz8gMTA7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQm91bmRzIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBQYXRoQ29tbWFuZCB9IGZyb20gJy4vcGF0aCc7XG5pbXBvcnQgeyBHcmFwaGljc1N0cmluZyB9IGZyb20gJy4vc3RyaW5nJztcbmV4cG9ydCB2YXIgUmVjdGFuZ2xlRGF0YTtcbihmdW5jdGlvbiAoUmVjdGFuZ2xlRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHdpZHRoID0gMCwgaGVpZ2h0ID0gMCwgfSA9IGRhdGE7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCwgeSk7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShSZWN0YW5nbGVEYXRhIHx8IChSZWN0YW5nbGVEYXRhID0ge30pKTtcbmV4cG9ydCB2YXIgRWxsaXBzZURhdGE7XG4oZnVuY3Rpb24gKEVsbGlwc2VEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgcmFkaXVzID0gMCwgcmFkaXVzWCwgcmFkaXVzWSwgfSA9IGRhdGE7XG4gICAgICAgIGNvbnN0IHJ4ID0gcmFkaXVzWCA/PyByYWRpdXM7XG4gICAgICAgIGNvbnN0IHJ5ID0gcmFkaXVzWSA/PyByYWRpdXM7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCAtIHJ4LCB5IC0gcnkpO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHggKyByeCwgeSArIHJ5KTtcbiAgICB9XG4gICAgRWxsaXBzZURhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoRWxsaXBzZURhdGEgfHwgKEVsbGlwc2VEYXRhID0ge30pKTtcbmV4cG9ydCB2YXIgUGF0aERhdGE7XG4oZnVuY3Rpb24gKFBhdGhEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKHBhdGhEYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBwYXRoRGF0YTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgR3JhcGhpY3NTdHJpbmcuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IGRhdGFbaV07XG4gICAgICAgICAgICAgICAgUGF0aENvbW1hbmQuY2FsY3VsYXRlQm91bmRzKGNvbW1hbmQsIGJvdW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgUGF0aERhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoUGF0aERhdGEgfHwgKFBhdGhEYXRhID0ge30pKTtcbmV4cG9ydCB2YXIgR3JhcGhpY3NEYXRhO1xuKGZ1bmN0aW9uIChHcmFwaGljc0RhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gZGF0YTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdyZWN0YW5nbGUnOlxuICAgICAgICAgICAgICAgIFJlY3RhbmdsZURhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbGxpcHNlJzpcbiAgICAgICAgICAgICAgICBFbGxpcHNlRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3BhdGgnOlxuICAgICAgICAgICAgICAgIFBhdGhEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBHcmFwaGljc0RhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoR3JhcGhpY3NEYXRhIHx8IChHcmFwaGljc0RhdGEgPSB7fSkpO1xuIiwiaW1wb3J0IHsgQm91bmRzIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5leHBvcnQgdmFyIFBhdGhDb21tYW5kO1xuKGZ1bmN0aW9uIChQYXRoQ29tbWFuZCkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhwYXRoLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBwYXRoO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ21vdmVUbyc6XG4gICAgICAgICAgICBjYXNlICdsaW5lVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBtb3ZlVG8ueCA/PyAwLCBtb3ZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1cnZlVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3VydmVUby5jeCA/PyAwLCBjdXJ2ZVRvLmN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3VydmVUby54ID8/IDAsIGN1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1YmljQ3VydmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby5jeCA/PyAwLCBjdWJpY0N1cnZlVG8uY3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8uc3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLnN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLnggPz8gMCwgY3ViaWNDdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFBhdGhDb21tYW5kIHx8IChQYXRoQ29tbWFuZCA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQYXRoQ29tbWFuZCwgfSBmcm9tICcuL3BhdGgnO1xuY29uc3QgTlVNQkVSU19DT1VOVCA9IHtcbiAgICBNOiAyLFxuICAgIG06IDIsXG4gICAgTDogMixcbiAgICBsOiAyLFxuICAgIEg6IDEsXG4gICAgaDogMSxcbiAgICBWOiAxLFxuICAgIHY6IDEsXG4gICAgQzogNixcbiAgICBjOiA2LFxuICAgIFM6IDQsXG4gICAgczogNCxcbiAgICBROiA0LFxuICAgIHE6IDQsXG4gICAgVDogMixcbiAgICB0OiAyLFxufTtcbmNvbnN0IENPTU1BTkRfUkVHRVggPSAvW01tTGxIaFZ2Q2NTc1FxVHRdLztcbmNvbnN0IE5VTUJFUl9SRUdFWCA9IC9bLStdP1tcXGQuXSsvO1xuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU3RyaW5nU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gJyc7XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IG51bGw7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICB0aGlzLnN5bWJvbFJlZ2V4ID0gL1tNbUxsSGhWdkNjU3NRcVR0XXxbLStdP1tcXGQuXSsvZztcbiAgICB9XG4gICAgc2V0UGF0aChwYXRoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMuc3ltYm9sUmVnZXgubGFzdEluZGV4ID0gMDtcbiAgICB9XG4gICAgZ2V0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZDtcbiAgICB9XG4gICAgZ2V0QnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWZmZXI7XG4gICAgfVxuICAgIHJlYWROZXh0KCkge1xuICAgICAgICBjb25zdCB7IGxhc3RJbmRleCB9ID0gdGhpcy5zeW1ib2xSZWdleDtcbiAgICAgICAgY29uc3Qgc3ltYm9sTWF0Y2ggPSB0aGlzLnN5bWJvbFJlZ2V4LmV4ZWModGhpcy5wYXRoKTtcbiAgICAgICAgaWYgKCFzeW1ib2xNYXRjaCkge1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xNYXRjaFswXTtcbiAgICAgICAgaWYgKENPTU1BTkRfUkVHRVgudGVzdChzeW1ib2wpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBzeW1ib2w7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoTlVNQkVSX1JFR0VYLnRlc3Qoc3ltYm9sKSkge1xuICAgICAgICAgICAgdGhpcy5zeW1ib2xSZWdleC5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jb21tYW5kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY291bnQgPSBOVU1CRVJTX0NPVU5UW3RoaXMuY29tbWFuZF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyTWF0Y2ggPSB0aGlzLnN5bWJvbFJlZ2V4LmV4ZWModGhpcy5wYXRoKTtcbiAgICAgICAgICAgIGlmIChudW1iZXJNYXRjaCAmJiBOVU1CRVJfUkVHRVgudGVzdChudW1iZXJNYXRjaFswXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlcltpXSA9IHBhcnNlRmxvYXQobnVtYmVyTWF0Y2hbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR3JhcGhpY3NTdHJpbmdSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0cmVhbSA9IG5ldyBHcmFwaGljc1N0cmluZ1N0cmVhbSgpO1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSB7IHR5cGU6ICdtb3ZlVG8nIH07XG4gICAgICAgIHRoaXMuY29tbWFuZEV4aXN0cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0WSA9IDA7XG4gICAgICAgIHRoaXMubGFzdENYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0Q1kgPSAwO1xuICAgIH1cbiAgICBzZXRQYXRoKHBhdGgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0uc2V0UGF0aChwYXRoKTtcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XG4gICAgICAgIHRoaXMubGFzdFkgPSAwO1xuICAgICAgICB0aGlzLmxhc3RDWCA9IDA7XG4gICAgICAgIHRoaXMubGFzdENZID0gMDtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gZmFsc2U7XG4gICAgfVxuICAgIGdldENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRFeGlzdHMgPyB0aGlzLmNvbW1hbmQgOiBudWxsO1xuICAgIH1cbiAgICByZWFkTmV4dCgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0ucmVhZE5leHQoKTtcbiAgICAgICAgdGhpcy5wYXJzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kRXhpc3RzO1xuICAgIH1cbiAgICBwYXJzZSgpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMuc3RyZWFtLmdldENvbW1hbmQoKTtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gISFjb21tYW5kO1xuICAgICAgICBpZiAoIXRoaXMuY29tbWFuZEV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuc3RyZWFtLmdldEJ1ZmZlcigpO1xuICAgICAgICBjb25zdCBbZTAsIGUxLCBlMiwgZTMsIGU0LCBlNSxdID0gYnVmZmVyO1xuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbW92ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ21vdmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gZTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IGUwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IGU0O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGU1O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSBlMCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTQgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGU1ICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IHRoaXMubGFzdENZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSBlMDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0gZTE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0gZTM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0gZTAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSBlMSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IGUzICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENZID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSBlMTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IGUxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSBlMyArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENYID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gdGhpcy5sYXN0Q1g7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSB0aGlzLmxhc3RDWTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0gZTA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IGUxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IHRoaXMubGFzdENYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gdGhpcy5sYXN0Q1k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IGUwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0gZTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDWCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q1kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IHJlYWRlciA9IG5ldyBHcmFwaGljc1N0cmluZ1JlYWRlcigpO1xuZXhwb3J0IHZhciBHcmFwaGljc1N0cmluZztcbihmdW5jdGlvbiAoR3JhcGhpY3NTdHJpbmcpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aCwgYm91bmRzKSB7XG4gICAgICAgIHJlYWRlci5zZXRQYXRoKHBhdGgpO1xuICAgICAgICB3aGlsZSAocmVhZGVyLnJlYWROZXh0KCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSByZWFkZXIuZ2V0Q29tbWFuZCgpO1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc1N0cmluZyB8fCAoR3JhcGhpY3NTdHJpbmcgPSB7fSkpO1xuIiwiaW1wb3J0IHsgTWF0cml4LCBQb2ludCB9IGZyb20gJ0BqZW5nL2dlb20nO1xuY29uc3QgdGVtcFBvaW50MCA9IFBvaW50LmVtcHR5KCk7XG5jb25zdCB0ZW1wUG9pbnQxID0gUG9pbnQuZW1wdHkoKTtcbmNvbnN0IGVtcHR5TWF0cml4ID0gTWF0cml4LmVtcHR5KCk7XG5leHBvcnQgY2xhc3MgR3JhcGhpY3Mge1xuICAgIGNvbnN0cnVjdG9yKHNoYXBlKSB7XG4gICAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZTtcbiAgICB9XG4gICAgYmVnaW5GaWxsKGNvbG9yID0gMCwgYWxwaGEgPSAxKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYmVnaW5CaXRtYXBGaWxsKHNyYywgbWF0cml4LCByZXBlYXQgPSB0cnVlLCBzbW9vdGggPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAnYml0bWFwJyxcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHJlcGVhdCxcbiAgICAgICAgICAgIHNtb290aCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGJlZ2luR3JhZGllbnRGaWxsKHR5cGUsIGNvbG9yLCBhbHBoYSwgcmF0aW8sIG1hdHJpeCkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmVhcicpIHtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueCA9IC04MTkuMjtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueSA9IDA7XG4gICAgICAgICAgICB0ZW1wUG9pbnQxLnggPSA4MTkuMjtcbiAgICAgICAgICAgIHRlbXBQb2ludDEueSA9IDA7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCB0ZW1wUG9pbnQwLCB0ZW1wUG9pbnQwKTtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHRlbXBQb2ludDEsIHRlbXBQb2ludDEpO1xuICAgICAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICAgICAgYmVnaW5YOiB0ZW1wUG9pbnQwLngsXG4gICAgICAgICAgICAgICAgYmVnaW5ZOiB0ZW1wUG9pbnQwLnksXG4gICAgICAgICAgICAgICAgZW5kWDogdGVtcFBvaW50MS54LFxuICAgICAgICAgICAgICAgIGVuZFk6IHRlbXBQb2ludDEueSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnggPSAxNjM4LjQ7XG4gICAgICAgICAgICB0ZW1wUG9pbnQwLnkgPSAwO1xuICAgICAgICAgICAgTWF0cml4LnRyYW5zZm9ybVBvaW50KG1hdHJpeCwgdGVtcFBvaW50MCwgdGVtcFBvaW50MCk7XG4gICAgICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgICAgICBiZWdpblg6IHRlbXBQb2ludDAueCxcbiAgICAgICAgICAgICAgICBiZWdpblk6IHRlbXBQb2ludDAueSxcbiAgICAgICAgICAgICAgICBiZWdpblJhZGl1czogMCxcbiAgICAgICAgICAgICAgICBlbmRYOiB0ZW1wUG9pbnQwLngsXG4gICAgICAgICAgICAgICAgZW5kWTogdGVtcFBvaW50MC55LFxuICAgICAgICAgICAgICAgIGVuZFJhZGl1czogTWF0aC5hYnMoKHRlbXBQb2ludDAueCAtIG1hdHJpeC50eCkgLyAyKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGxpbmVTdHlsZSh0aGlja25lc3MgPSAwLCBjb2xvciA9IDAsIGFscGhhID0gMSwgcGl4ZWxIaW50aW5nID0gZmFsc2UsIHNjYWxlTW9kZSA9ICdub25lJywgY2FwcyA9ICdyb3VuZCcsIGpvaW50cyA9ICdyb3VuZCcsIG1pdGVyTGltaXQgPSAzKSB7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0ge1xuICAgICAgICAgICAgdGhpY2tuZXNzLFxuICAgICAgICAgICAgcGl4ZWxIaW50aW5nLFxuICAgICAgICAgICAgc2NhbGVNb2RlLFxuICAgICAgICAgICAgY2FwcyxcbiAgICAgICAgICAgIGpvaW50cyxcbiAgICAgICAgICAgIG1pdGVyTGltaXQsXG4gICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBsaW5lR3JhZGllbnRTdHlsZSh0eXBlLCBjb2xvciwgYWxwaGEsIHJhdGlvLCBtYXRyaXggPSBlbXB0eU1hdHJpeCkge1xuICAgICAgICBpZiAoIXRoaXMuc3Ryb2tlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmVhcicpIHtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueCA9IC04MTkuMjtcbiAgICAgICAgICAgIHRlbXBQb2ludDAueSA9IDA7XG4gICAgICAgICAgICB0ZW1wUG9pbnQxLnggPSA4MTkuMjtcbiAgICAgICAgICAgIHRlbXBQb2ludDEueSA9IDA7XG4gICAgICAgICAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQobWF0cml4LCB0ZW1wUG9pbnQwLCB0ZW1wUG9pbnQwKTtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHRlbXBQb2ludDEsIHRlbXBQb2ludDEpO1xuICAgICAgICAgICAgdGhpcy5zdHJva2UuZmlsbCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgICAgICAgIGJlZ2luWDogdGVtcFBvaW50MC54LFxuICAgICAgICAgICAgICAgIGJlZ2luWTogdGVtcFBvaW50MC55LFxuICAgICAgICAgICAgICAgIGVuZFg6IHRlbXBQb2ludDEueCxcbiAgICAgICAgICAgICAgICBlbmRZOiB0ZW1wUG9pbnQxLnksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGVtcFBvaW50MC54ID0gMTYzOC40O1xuICAgICAgICAgICAgdGVtcFBvaW50MC55ID0gMDtcbiAgICAgICAgICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHRlbXBQb2ludDAsIHRlbXBQb2ludDApO1xuICAgICAgICAgICAgdGhpcy5zdHJva2UuZmlsbCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgICAgICAgIGJlZ2luWDogdGVtcFBvaW50MC54LFxuICAgICAgICAgICAgICAgIGJlZ2luWTogdGVtcFBvaW50MC55LFxuICAgICAgICAgICAgICAgIGJlZ2luUmFkaXVzOiAwLFxuICAgICAgICAgICAgICAgIGVuZFg6IHRlbXBQb2ludDAueCxcbiAgICAgICAgICAgICAgICBlbmRZOiB0ZW1wUG9pbnQwLnksXG4gICAgICAgICAgICAgICAgZW5kUmFkaXVzOiBNYXRoLmFicygodGVtcFBvaW50MC54IC0gbWF0cml4LnR4KSAvIDIpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbGluZUJpdG1hcFN0eWxlKHNyYywgbWF0cml4LCByZXBlYXQgPSB0cnVlLCBzbW9vdGggPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXRoaXMuc3Ryb2tlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0cm9rZS5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ2JpdG1hcCcsXG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICBzbW9vdGgsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBtb3ZlVG8oeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5iZWdpblBhdGgoKTtcbiAgICAgICAgcGF0aC5wdXNoKHsgdHlwZTogJ21vdmVUbycsIHgsIHkgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBsaW5lVG8oeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHsgdHlwZTogJ2xpbmVUbycsIHgsIHkgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjdXJ2ZVRvKGN4LCBjeSwgeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdXJ2ZVRvJywgY3gsIGN5LCB4LCB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGN1YmljQ3VydmVUbyhjeCwgY3ksIHN4LCBzeSwgeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLCBjeCwgY3ksIHN4LCBzeSwgeCwgeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkcmF3Um91bmRSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIGVsbGlwc2VXaWR0aCA9IDAsIGVsbGlwc2VIZWlnaHQgPSAwKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICBjb25zdCB3ID0gZWxsaXBzZVdpZHRoO1xuICAgICAgICBjb25zdCBoID0gZWxsaXBzZUhlaWdodDtcbiAgICAgICAgY29uc3QgayA9IDAuNTUyMjg0ODtcbiAgICAgICAgY29uc3Qgb3ggPSAodyAvIDIpICogaztcbiAgICAgICAgY29uc3Qgb3kgPSAoaCAvIDIpICogaztcbiAgICAgICAgY29uc3QgeGUgPSB4ICsgdztcbiAgICAgICAgY29uc3QgeWUgPSB5ICsgaDtcbiAgICAgICAgY29uc3QgeG0gPSB4ICsgdyAvIDI7XG4gICAgICAgIGNvbnN0IHltID0geSArIGggLyAyO1xuICAgICAgICBjb25zdCBkeCA9IHdpZHRoIC0gdztcbiAgICAgICAgY29uc3QgZHkgPSBoZWlnaHQgLSBoO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ21vdmVUbycsXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeTogeW0sXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeCxcbiAgICAgICAgICAgIGN5OiB5bSAtIG95LFxuICAgICAgICAgICAgc3g6IHhtIC0gb3gsXG4gICAgICAgICAgICBzeTogeSxcbiAgICAgICAgICAgIHg6IHhtLFxuICAgICAgICAgICAgeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhtICsgZHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhtICsgb3ggKyBkeCxcbiAgICAgICAgICAgIGN5OiB5LFxuICAgICAgICAgICAgc3g6IHhlICsgZHgsXG4gICAgICAgICAgICBzeTogeW0gLSBveSxcbiAgICAgICAgICAgIHg6IHhlICsgZHgsXG4gICAgICAgICAgICB5OiB5bSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhlICsgZHgsXG4gICAgICAgICAgICB5OiB5bSArIGR5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhlICsgZHgsXG4gICAgICAgICAgICBjeTogeW0gKyBveSArIGR5LFxuICAgICAgICAgICAgc3g6IHhtICsgb3ggKyBkeCxcbiAgICAgICAgICAgIHN5OiB5ZSArIGR5LFxuICAgICAgICAgICAgeDogeG0gKyBkeCxcbiAgICAgICAgICAgIHk6IHllICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVUbycsXG4gICAgICAgICAgICB4OiB4bSxcbiAgICAgICAgICAgIHk6IHllICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeG0gLSBveCxcbiAgICAgICAgICAgIGN5OiB5ZSArIGR5LFxuICAgICAgICAgICAgc3g6IHgsXG4gICAgICAgICAgICBzeTogeW0gKyBveSArIGR5LFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHk6IHltICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZHJhd1JlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEudHlwZSA9ICdyZWN0YW5nbGUnO1xuICAgICAgICBkYXRhLnggPSB4O1xuICAgICAgICBkYXRhLnkgPSB5O1xuICAgICAgICBkYXRhLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGRhdGEuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZHJhd0NpcmNsZSh4LCB5LCByYWRpdXMpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAnZWxsaXBzZSc7XG4gICAgICAgIGRhdGEueCA9IHg7XG4gICAgICAgIGRhdGEueSA9IHk7XG4gICAgICAgIGRhdGEucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZHJhd0VsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEudHlwZSA9ICdlbGxpcHNlJztcbiAgICAgICAgZGF0YS5yYWRpdXNYID0gd2lkdGggLyAyO1xuICAgICAgICBkYXRhLnJhZGl1c1kgPSBoZWlnaHQgLyAyO1xuICAgICAgICBkYXRhLnggPSB4IC0gZGF0YS5yYWRpdXNYO1xuICAgICAgICBkYXRhLnkgPSB5IC0gZGF0YS5yYWRpdXNZO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNoYXBlLmRhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjcmVhdGVEYXRhKCkge1xuICAgICAgICBjb25zdCB7IHNoYXBlLCBmaWxsLCBzdHJva2UgfSA9IHRoaXM7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNoYXBlLmRhdGEpKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHNoYXBlLmRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBzaGFwZS5kYXRhID0gW3NoYXBlLmRhdGFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hhcGUuZGF0YSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyYXBoaWNzRGF0YSA9IHsgdHlwZTogJ3BhdGgnLCBmaWxsLCBzdHJva2UgfTtcbiAgICAgICAgc2hhcGUuZGF0YS5wdXNoKGdyYXBoaWNzRGF0YSk7XG4gICAgICAgIHJldHVybiBncmFwaGljc0RhdGE7XG4gICAgfVxuICAgIGJlZ2luUGF0aCgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLmRhdGEgPSBbXTtcbiAgICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcbiAgICB9XG4gICAgZ2V0UGF0aCgpIHtcbiAgICAgICAgY29uc3QgeyBzaGFwZSB9ID0gdGhpcztcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNoYXBlLmRhdGEpIHx8ICFzaGFwZS5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gc2hhcGUuZGF0YVtzaGFwZS5kYXRhLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5kYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YS5kYXRhO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vZGF0YS9kYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9wYXRoJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9zdHJpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL3N0eWxlJztcbmV4cG9ydCAqIGZyb20gJy4vc2hhcGUnO1xuZXhwb3J0ICogZnJvbSAnLi9ncmFwaGljcyc7XG5leHBvcnQgKiBmcm9tICcuL2NhbnZhcy9zaGFwZSc7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQm91bmRzLCBSZWN0YW5nbGUgfSBmcm9tICdAamVuZy9nZW9tJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgR3JhcGhpY3NEYXRhIH0gZnJvbSAnLi9kYXRhL2RhdGEnO1xuZXhwb3J0IGNvbnN0IFNIQVBFID0gJ3NoYXBlJztcbmNvbnN0IGJvdW5kcyA9IEJvdW5kcy5lbXB0eSgpO1xuZXhwb3J0IHZhciBTaGFwZTtcbihmdW5jdGlvbiAoU2hhcGUpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoc2hhcGUsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHNoYXBlO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEJvdW5kcy5zZXRFbXB0eShib3VuZHMpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhW2ldLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJvdW5kcy5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgIFJlY3RhbmdsZS5zZXRFbXB0eShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdpZHRoID0gYm91bmRzLm1heFggLSBib3VuZHMubWluWDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gYm91bmRzLm1heFkgLSBib3VuZHMubWluWTtcbiAgICAgICAgY29uc3QgeCA9IGJvdW5kcy5taW5YICsgUGl2b3QuZ2V0WChzaGFwZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gYm91bmRzLm1pblkgKyBQaXZvdC5nZXRZKHNoYXBlLCBoZWlnaHQpO1xuICAgICAgICByZXN1bHQueCA9IHg7XG4gICAgICAgIHJlc3VsdC55ID0geTtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIFNoYXBlLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFNoYXBlIHx8IChTaGFwZSA9IHt9KSk7XG5jb25zdCByZWN0YW5nbGUgPSBSZWN0YW5nbGUuZW1wdHkoKTtcbmV4cG9ydCB2YXIgU2hhcGVFeHRlbnNpb247XG4oZnVuY3Rpb24gKFNoYXBlRXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdChzaGFwZSwgZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHsgbG9jYWwgfSA9IGVuZ2luZS5wb2ludGVycztcbiAgICAgICAgU2hhcGUuY2FsY3VsYXRlQm91bmRzKHNoYXBlLCByZWN0YW5nbGUpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKHJlY3RhbmdsZSwgbG9jYWwpO1xuICAgIH1cbiAgICBTaGFwZUV4dGVuc2lvbi5oaXRUZXN0ID0gaGl0VGVzdDtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5oaXRUZXN0LnNldChTSEFQRSwgaGl0VGVzdCk7XG4gICAgICAgIEltYWdlUmVzb3VyY2UuaW5pdChlbmdpbmUpO1xuICAgIH1cbiAgICBTaGFwZUV4dGVuc2lvbi5pbml0ID0gaW5pdDtcbn0pKFNoYXBlRXh0ZW5zaW9uIHx8IChTaGFwZUV4dGVuc2lvbiA9IHt9KSk7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgQ2FudmFzUGF0dGVybnMgfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IEZvbnQgfSBmcm9tICcuLi9kYXRhL2ZvbnQnO1xuaW1wb3J0IHsgVGV4dEV4dGVuc2lvbiwgVEVYVCwgVGV4dCB9IGZyb20gJy4uL3RleHQnO1xuaW1wb3J0IHsgVGV4dEZvcm1hdCB9IGZyb20gJy4uL2RhdGEvZm9ybWF0JztcbmltcG9ydCB7IFRleHRNZXRyaWNzIH0gZnJvbSAnLi4vZGF0YS9tZXRyaWNzJztcbmNvbnN0IGRlZmF1bHRUZXh0Rm9ybWF0ID0ge307XG5jb25zdCBDT1JSRUNUSU9OID0gMC44NTtcbmV4cG9ydCB2YXIgQ2FudmFzVGV4dEV4dGVuc2lvbjtcbihmdW5jdGlvbiAoQ2FudmFzVGV4dEV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHJlbmRlcihjb21wb25lbnQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IG1hdHJpeCwgY29sb3JUcmFuc2Zvcm0gfSA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChUZXh0LmlzVXBkYXRlTWV0cmljcyhjb21wb25lbnQpKSB7XG4gICAgICAgICAgICBUZXh0LnVwZGF0ZU1ldHJpY3MoY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG1ldHJpY3MgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCFtZXRyaWNzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBmb3JtYXQsIGJvcmRlciwgYmFja2dyb3VuZCwgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgVGV4dEZvcm1hdC5jb21iaW5lKGZvcm1hdCwgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCwgZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBjb25zdCByZWFsV2lkdGggPSB3aWR0aCA/PyBtZXRyaWNzLndpZHRoO1xuICAgICAgICBjb25zdCByZWFsSGVpZ2h0ID0gaGVpZ2h0ID8/IG1ldHJpY3MuaGVpZ2h0O1xuICAgICAgICBjb25zdCBvZmZzZXRYID0gUGl2b3QuZ2V0WChjb21wb25lbnQsIHJlYWxXaWR0aCk7XG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSBQaXZvdC5nZXRZKGNvbXBvbmVudCwgcmVhbEhlaWdodCk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQyZCA9IGVuZ2luZS5wbGF0Zm9ybS5nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgaWYgKGJhY2tncm91bmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gJyc7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGJhY2tncm91bmQsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5yZWN0KG9mZnNldFgsIG9mZnNldFksIHJlYWxXaWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gQ2FudmFzUGF0dGVybnMuY29sb3JQYXR0ZXJuKGJvcmRlciwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuICAgICAgICAgICAgY29udGV4dDJkLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dDJkLnJlY3Qob2Zmc2V0WCwgb2Zmc2V0WSwgcmVhbFdpZHRoLCByZWFsSGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0MmQudGV4dEJhc2VsaW5lID0gJ2FscGhhYmV0aWMnO1xuICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnJztcbiAgICAgICAgY29uc3Qgc2ltcGxlID0gVGV4dC5pc1NpbXBsZShjb21wb25lbnQpO1xuICAgICAgICBpZiAoc2ltcGxlKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gY29tcG9uZW50LnRleHQ7XG4gICAgICAgICAgICBjb25zdCB7IHNpemUsIGNvbG9yLCBhbHBoYSwgbGVhZGluZywgbGV0dGVyU3BhY2luZywgfSA9IGRlZmF1bHRUZXh0Rm9ybWF0O1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdEZvbnQgPSBGb250LmdldEZvbnQoZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sU2l6ZSA9IHNpemUgKiBDT1JSRUNUSU9OO1xuICAgICAgICAgICAgY29uc3QgYWxpZ25WYWx1ZSA9IFRleHRGb3JtYXQuZ2V0QWxpZ25WYWx1ZShkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZm9udCA9IEZvbnQuZ2V0U3R5bGUoZGVmYXVsdEZvbnQsIHNpemUpO1xuICAgICAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9IENhbnZhc1BhdHRlcm5zLmNvbG9yUGF0dGVybihjb2xvciwgYWxwaGEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIGxldCB4ID0gb2Zmc2V0WCArIGFsaWduVmFsdWUgPyBhbGlnblZhbHVlICogKHJlYWxXaWR0aCAtIFRleHRNZXRyaWNzLmdldFNpbXBsZVdpZHRoKGRlZmF1bHRUZXh0Rm9ybWF0LCB0ZXh0LCAwKSkgOiAwO1xuICAgICAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICBpZiAoc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICB4ID0gYWxpZ25WYWx1ZSA/IGFsaWduVmFsdWUgKiAocmVhbFdpZHRoIC0gVGV4dE1ldHJpY3MuZ2V0U2ltcGxlV2lkdGgoZGVmYXVsdFRleHRGb3JtYXQsIHRleHQsIGkgKyAxKSkgOiAwO1xuICAgICAgICAgICAgICAgICAgICB5ICs9IHNpemUgKyBsZWFkaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sTmV4dCA9IHRleHRbaSArIDFdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKGRlZmF1bHRGb250LCBzaXplLCBzeW1ib2wsIHN5bWJvbE5leHQpICsgbGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDJkLmZpbGxUZXh0KHN5bWJvbCwgeCwgeSArIHN5bWJvbFNpemUpO1xuICAgICAgICAgICAgICAgICAgICB4ICs9IGFkdmFuY2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsaWduVmVydGljYWxWYWx1ZSA9IFRleHRGb3JtYXQuZ2V0VmVydGljYWxBbGlnblZhbHVlKGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgICAgICAgICB5ID0gKGhlaWdodCAtIG1ldHJpY3MuaGVpZ2h0KSAqIGFsaWduVmVydGljYWxWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoeSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeSArPSBvZmZzZXRZO1xuICAgICAgICAgICAgY29uc3QgeyBsaW5lcyB9ID0gbWV0cmljcztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGxpbmUuc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3QgPSBsaW5lLnN5bWJvbHNbMF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsaWduVmFsdWUgPSBUZXh0Rm9ybWF0LmdldEFsaWduVmFsdWUoZmlyc3QuZm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSAocmVhbFdpZHRoIC0gbGluZS53aWR0aCkgKiBhbGlnblZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHggKz0gb2Zmc2V0WDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzeW1ib2xzIH0gPSBsaW5lO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lSGVpZ2h0ID0gbGluZS5oZWlnaHQgKiBDT1JSRUNUSU9OO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN5bWJvbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gc3ltYm9sLmZvcm1hdC5zaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxpZ25TeW1ib2xWYWx1ZSA9IFRleHRGb3JtYXQuZ2V0VmVydGljYWxBbGlnblZhbHVlKHN5bWJvbC5mb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sU2l6ZSA9IHNpemUgKiBDT1JSRUNUSU9OO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9udCA9IEZvbnQuZ2V0Rm9udChzeW1ib2wuZm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5mb250ID0gRm9udC5nZXRTdHlsZShzeW1ib2xGb250LCBzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQyZC5maWxsU3R5bGUgPSBDYW52YXNQYXR0ZXJucy5jb2xvclBhdHRlcm4oc3ltYm9sLmZvcm1hdC5jb2xvciwgc3ltYm9sLmZvcm1hdC5hbHBoYSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDJkLmZpbGxUZXh0KHN5bWJvbC5zeW1ib2wsIHgsIHkgKyBzeW1ib2xTaXplICsgYWxpZ25TeW1ib2xWYWx1ZSAqIChsaW5lSGVpZ2h0IC0gc3ltYm9sU2l6ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgeCArPSBzeW1ib2wuYWR2YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB5ICs9IGxpbmUuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc1RleHRFeHRlbnNpb24ucmVuZGVyID0gcmVuZGVyO1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIFRleHRFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuICAgICAgICBlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KFRFWFQsIHJlbmRlcik7XG4gICAgfVxuICAgIENhbnZhc1RleHRFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShDYW52YXNUZXh0RXh0ZW5zaW9uIHx8IChDYW52YXNUZXh0RXh0ZW5zaW9uID0ge30pKTtcbiIsImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuZXhwb3J0IGNvbnN0IEVNID0gMTAyNDtcbmNvbnN0IGZvbnRzID0gbmV3IE1hcCgpO1xuZXhwb3J0IHZhciBGb250O1xuKGZ1bmN0aW9uIChGb250KSB7XG4gICAgZnVuY3Rpb24gZ2V0U3R5bGUoZm9udCwgc2l6ZSkge1xuICAgICAgICByZXR1cm4gZm9udC5uYW1lLnJlcGxhY2UoJyUnLCBzaXplLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBGb250LmdldFN0eWxlID0gZ2V0U3R5bGU7XG4gICAgZnVuY3Rpb24gbWVhc3VyZVRleHQoZm9udCwgc2l6ZSwgdGV4dCkge1xuICAgICAgICBjb250ZXh0LmZvbnQgPSBnZXRTdHlsZShmb250LCBzaXplKTtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gICAgfVxuICAgIEZvbnQubWVhc3VyZVRleHQgPSBtZWFzdXJlVGV4dDtcbiAgICBmdW5jdGlvbiBnZXRDaGFyV2lkdGgoZm9udCwgY2hhcikge1xuICAgICAgICBsZXQgd2lkdGggPSBmb250LndpZHRocy5nZXQoY2hhcik7XG4gICAgICAgIGlmICghd2lkdGgpIHtcbiAgICAgICAgICAgIHdpZHRoID0gbWVhc3VyZVRleHQoZm9udCwgRU0sIGNoYXIpO1xuICAgICAgICAgICAgZm9udC53aWR0aHMuc2V0KGNoYXIsIHdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfVxuICAgIEZvbnQuZ2V0Q2hhcldpZHRoID0gZ2V0Q2hhcldpZHRoO1xuICAgIGZ1bmN0aW9uIGdldEtlcm5pbmcoZm9udCwgZmlyc3QsIHNlY29uZCkge1xuICAgICAgICBjb25zdCBwYWlyID0gZmlyc3QgKyBzZWNvbmQ7XG4gICAgICAgIGxldCBrZXJuaW5nID0gZm9udC5rZXJuaW5ncy5nZXQocGFpcik7XG4gICAgICAgIGlmICgha2VybmluZykge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGhTZWNvbmQgPSBnZXRDaGFyV2lkdGgoZm9udCwgc2Vjb25kKTtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoVG90YWwgPSBtZWFzdXJlVGV4dChmb250LCBFTSwgZmlyc3QgKyBzZWNvbmQpO1xuICAgICAgICAgICAga2VybmluZyA9IHdpZHRoVG90YWwgLSB3aWR0aFNlY29uZDtcbiAgICAgICAgICAgIGZvbnQua2VybmluZ3Muc2V0KHBhaXIsIGtlcm5pbmcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXJuaW5nO1xuICAgIH1cbiAgICBGb250LmdldEtlcm5pbmcgPSBnZXRLZXJuaW5nO1xuICAgIGZ1bmN0aW9uIGdldEFkdmFuY2UoZm9udCwgc2l6ZSwgZmlyc3QsIHNlY29uZCkge1xuICAgICAgICBjb25zdCBzY2FsZSA9IHNpemUgLyBFTTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBnZXRDaGFyV2lkdGgoZm9udCwgZmlyc3QpO1xuICAgICAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpZHRoICogc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2VybmluZyA9IGdldEtlcm5pbmcoZm9udCwgZmlyc3QsIHNlY29uZCk7XG4gICAgICAgIHJldHVybiBrZXJuaW5nICogc2NhbGU7XG4gICAgfVxuICAgIEZvbnQuZ2V0QWR2YW5jZSA9IGdldEFkdmFuY2U7XG4gICAgZnVuY3Rpb24gZ2V0Rm9udChmb3JtYXQpIHtcbiAgICAgICAgbGV0IG5hbWUgPSAnJztcbiAgICAgICAgaWYgKGZvcm1hdC5ib2xkKSB7XG4gICAgICAgICAgICBuYW1lICs9ICdib2xkICc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdC5pdGFsaWMpIHtcbiAgICAgICAgICAgIG5hbWUgKz0gJ2l0YWxpYyAnO1xuICAgICAgICB9XG4gICAgICAgIG5hbWUgKz0gYCVweCAke2Zvcm1hdC5mb250fWA7XG4gICAgICAgIGxldCBmb250ID0gZm9udHMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoIWZvbnQpIHtcbiAgICAgICAgICAgIGZvbnQgPSB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB3aWR0aHM6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgICAgICBrZXJuaW5nczogbmV3IE1hcCgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvbnRzLnNldChuYW1lLCBmb250KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9udDtcbiAgICB9XG4gICAgRm9udC5nZXRGb250ID0gZ2V0Rm9udDtcbn0pKEZvbnQgfHwgKEZvbnQgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBUZXh0Rm9ybWF0O1xuKGZ1bmN0aW9uIChUZXh0Rm9ybWF0KSB7XG4gICAgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCA9IHtcbiAgICAgICAgZm9udDogJ2FyaWFsJyxcbiAgICAgICAgc2l6ZTogMTUsXG4gICAgICAgIGNvbG9yOiAwLFxuICAgICAgICBhbHBoYTogMSxcbiAgICAgICAgYm9sZDogZmFsc2UsXG4gICAgICAgIGl0YWxpYzogZmFsc2UsXG4gICAgICAgIHVuZGVybGluZTogZmFsc2UsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgICAgIGxlYWRpbmc6IDAsXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgIH07XG4gICAgZnVuY3Rpb24gY29tYmluZShzb3VyY2UsIGRlZmF1bHRGb3JtYXQsIHJlc3VsdCkge1xuICAgICAgICByZXN1bHQuZm9udCA9IHNvdXJjZT8uZm9udCA/PyBkZWZhdWx0Rm9ybWF0LmZvbnQ7XG4gICAgICAgIHJlc3VsdC5zaXplID0gc291cmNlPy5zaXplID8/IGRlZmF1bHRGb3JtYXQuc2l6ZTtcbiAgICAgICAgcmVzdWx0LmNvbG9yID0gc291cmNlPy5jb2xvciA/PyBkZWZhdWx0Rm9ybWF0LmNvbG9yO1xuICAgICAgICByZXN1bHQuYWxwaGEgPSBzb3VyY2U/LmFscGhhID8/IGRlZmF1bHRGb3JtYXQuYWxwaGE7XG4gICAgICAgIHJlc3VsdC5ib2xkID0gc291cmNlPy5ib2xkID8/IGRlZmF1bHRGb3JtYXQuYm9sZDtcbiAgICAgICAgcmVzdWx0Lml0YWxpYyA9IHNvdXJjZT8uaXRhbGljID8/IGRlZmF1bHRGb3JtYXQuaXRhbGljO1xuICAgICAgICByZXN1bHQudW5kZXJsaW5lID0gc291cmNlPy51bmRlcmxpbmUgPz8gZGVmYXVsdEZvcm1hdC51bmRlcmxpbmU7XG4gICAgICAgIHJlc3VsdC5sZXR0ZXJTcGFjaW5nID0gc291cmNlPy5sZXR0ZXJTcGFjaW5nID8/IGRlZmF1bHRGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgcmVzdWx0LmxlYWRpbmcgPSBzb3VyY2U/LmxlYWRpbmcgPz8gZGVmYXVsdEZvcm1hdC5sZWFkaW5nO1xuICAgICAgICByZXN1bHQuYWxpZ24gPSBzb3VyY2U/LmFsaWduID8/IGRlZmF1bHRGb3JtYXQuYWxpZ247XG4gICAgICAgIHJlc3VsdC52ZXJ0aWNhbEFsaWduID0gc291cmNlPy52ZXJ0aWNhbEFsaWduID8/IGRlZmF1bHRGb3JtYXQudmVydGljYWxBbGlnbjtcbiAgICB9XG4gICAgVGV4dEZvcm1hdC5jb21iaW5lID0gY29tYmluZTtcbiAgICBmdW5jdGlvbiBjb3B5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5mb250ID0gc291cmNlLmZvbnQ7XG4gICAgICAgIHRhcmdldC5zaXplID0gc291cmNlLnNpemU7XG4gICAgICAgIHRhcmdldC5jb2xvciA9IHNvdXJjZS5jb2xvcjtcbiAgICAgICAgdGFyZ2V0LmFscGhhID0gc291cmNlLmFscGhhO1xuICAgICAgICB0YXJnZXQuYm9sZCA9IHNvdXJjZS5ib2xkO1xuICAgICAgICB0YXJnZXQuaXRhbGljID0gc291cmNlLml0YWxpYztcbiAgICAgICAgdGFyZ2V0LnVuZGVybGluZSA9IHNvdXJjZS51bmRlcmxpbmU7XG4gICAgICAgIHRhcmdldC5sZXR0ZXJTcGFjaW5nID0gc291cmNlLmxldHRlclNwYWNpbmc7XG4gICAgICAgIHRhcmdldC5sZWFkaW5nID0gc291cmNlLmxlYWRpbmc7XG4gICAgICAgIHRhcmdldC5hbGlnbiA9IHNvdXJjZS5hbGlnbjtcbiAgICAgICAgdGFyZ2V0LnZlcnRpY2FsQWxpZ24gPSBzb3VyY2UudmVydGljYWxBbGlnbjtcbiAgICB9XG4gICAgVGV4dEZvcm1hdC5jb3B5ID0gY29weTtcbiAgICBmdW5jdGlvbiBnZXRBbGlnblZhbHVlKGZvcm1hdCkge1xuICAgICAgICBzd2l0Y2ggKGZvcm1hdD8uYWxpZ24pIHtcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOiByZXR1cm4gMDtcbiAgICAgICAgICAgIGNhc2UgJ2NlbnRlcic6IHJldHVybiAwLjU7XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6IHJldHVybiAxO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dEZvcm1hdC5nZXRBbGlnblZhbHVlID0gZ2V0QWxpZ25WYWx1ZTtcbiAgICBmdW5jdGlvbiBnZXRWZXJ0aWNhbEFsaWduVmFsdWUoZm9ybWF0KSB7XG4gICAgICAgIHN3aXRjaCAoZm9ybWF0Py52ZXJ0aWNhbEFsaWduKSB7XG4gICAgICAgICAgICBjYXNlICd0b3AnOiByZXR1cm4gMDtcbiAgICAgICAgICAgIGNhc2UgJ21pZGRsZSc6IHJldHVybiAwLjU7XG4gICAgICAgICAgICBjYXNlICdib3R0b20nOiByZXR1cm4gMTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRGb3JtYXQuZ2V0VmVydGljYWxBbGlnblZhbHVlID0gZ2V0VmVydGljYWxBbGlnblZhbHVlO1xufSkoVGV4dEZvcm1hdCB8fCAoVGV4dEZvcm1hdCA9IHt9KSk7XG4iLCJpbXBvcnQgeyBGb250IH0gZnJvbSAnLi9mb250JztcbmltcG9ydCB7IFRleHRGb3JtYXQgfSBmcm9tICcuL2Zvcm1hdCc7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vdGV4dCc7XG5jb25zdCBkZWZhdWx0VGV4dEZvcm1hdCA9IHt9O1xuZXhwb3J0IHZhciBUZXh0TGluZTtcbihmdW5jdGlvbiAoVGV4dExpbmUpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzeW1ib2xzOiBbXSxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBUZXh0TGluZS5jcmVhdGUgPSBjcmVhdGU7XG4gICAgZnVuY3Rpb24gZW1wdHkobGluZSkge1xuICAgICAgICBsaW5lLnN5bWJvbHMubGVuZ3RoID0gMDtcbiAgICAgICAgbGluZS53aWR0aCA9IDA7XG4gICAgICAgIGxpbmUuaGVpZ2h0ID0gMDtcbiAgICB9XG4gICAgVGV4dExpbmUuZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBhZGQobGluZSwgc3ltYm9sKSB7XG4gICAgICAgIGxpbmUuc3ltYm9scy5wdXNoKHN5bWJvbCk7XG4gICAgICAgIGxpbmUud2lkdGggKz0gc3ltYm9sLmFkdmFuY2U7XG4gICAgICAgIGxpbmUuaGVpZ2h0ID0gTWF0aC5tYXgobGluZS5oZWlnaHQsIHN5bWJvbC5mb3JtYXQuc2l6ZSArIHN5bWJvbC5mb3JtYXQubGVhZGluZyk7XG4gICAgfVxuICAgIFRleHRMaW5lLmFkZCA9IGFkZDtcbiAgICBmdW5jdGlvbiBjb25jYXQodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5zeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGFyZ2V0LnN5bWJvbHMucHVzaCguLi5zb3VyY2Uuc3ltYm9scyk7XG4gICAgICAgICAgICB0YXJnZXQud2lkdGggKz0gc291cmNlLndpZHRoO1xuICAgICAgICAgICAgdGFyZ2V0LmhlaWdodCA9IE1hdGgubWF4KHRhcmdldC5oZWlnaHQsIHNvdXJjZS5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRleHRMaW5lLmNvbmNhdCA9IGNvbmNhdDtcbiAgICBmdW5jdGlvbiBjb3JyZWN0V2lkdGgobGluZSkge1xuICAgICAgICBjb25zdCB7IHN5bWJvbHMgfSA9IGxpbmU7XG4gICAgICAgIGlmIChzeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgbGFzdCA9IHN5bWJvbHNbc3ltYm9scy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmICgvXFxzLy50ZXN0KGxhc3Quc3ltYm9sKSkge1xuICAgICAgICAgICAgICAgIHN5bWJvbHMucG9wKCk7XG4gICAgICAgICAgICAgICAgbGluZS53aWR0aCAtPSBsYXN0LmFkdmFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dExpbmUuY29ycmVjdFdpZHRoID0gY29ycmVjdFdpZHRoO1xuICAgIGZ1bmN0aW9uIGNvcnJlY3RIZWlnaHQobGluZSkge1xuICAgICAgICBjb25zdCB7IHN5bWJvbHMgfSA9IGxpbmU7XG4gICAgICAgIGlmIChzeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1swXTtcbiAgICAgICAgICAgIGxpbmUuaGVpZ2h0IC09IHN5bWJvbC5mb3JtYXQubGVhZGluZztcbiAgICAgICAgfVxuICAgIH1cbiAgICBUZXh0TGluZS5jb3JyZWN0SGVpZ2h0ID0gY29ycmVjdEhlaWdodDtcbn0pKFRleHRMaW5lIHx8IChUZXh0TGluZSA9IHt9KSk7XG5leHBvcnQgdmFyIFRleHRNZXRyaWNzO1xuKGZ1bmN0aW9uIChUZXh0TWV0cmljcykge1xuICAgIGZ1bmN0aW9uIGdldFN5bWJvbHMoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXRleHQgfHwgIXRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIFRleHRGb3JtYXQuY29tYmluZShjb21wb25lbnQuZm9ybWF0LCBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LCBkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGNvbnN0IHN5bWJvbHMgPSBbXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9ybWF0ID0ge307XG4gICAgICAgICAgICBUZXh0Rm9ybWF0LmNvcHkoZGVmYXVsdFRleHRGb3JtYXQsIHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2xGb250ID0gRm9udC5nZXRGb250KHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSB0ZXh0W2kgKyAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKHN5bWJvbEZvbnQsIHN5bWJvbEZvcm1hdC5zaXplLCBzeW1ib2wsIHN5bWJvbE5leHQpICsgc3ltYm9sRm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgc3ltYm9scy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICBhZHZhbmNlLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHN5bWJvbEZvcm1hdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRleHQpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IHRleHRbaV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBibG9jayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9ybWF0ID0ge307XG4gICAgICAgICAgICAgICAgICAgIFRleHRGb3JtYXQuY29weShkZWZhdWx0VGV4dEZvcm1hdCwgc3ltYm9sRm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sRm9udCA9IEZvbnQuZ2V0Rm9udChzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJsb2NrLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBibG9ja1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSBibG9ja1tqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKHN5bWJvbEZvbnQsIHN5bWJvbEZvcm1hdC5zaXplLCBzeW1ib2wsIHN5bWJvbE5leHQpICsgc3ltYm9sRm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZHZhbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogc3ltYm9sRm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbEZvcm1hdCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBUZXh0Rm9ybWF0LmNvbWJpbmUoYmxvY2ssIGRlZmF1bHRUZXh0Rm9ybWF0LCBzeW1ib2xGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xGb250ID0gRm9udC5nZXRGb250KHN5bWJvbEZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYmxvY2sudGV4dC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gYmxvY2sudGV4dFtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbE5leHQgPSBibG9jay50ZXh0W2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkdmFuY2UgPSBGb250LmdldEFkdmFuY2Uoc3ltYm9sRm9udCwgc3ltYm9sRm9ybWF0LnNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBzeW1ib2xGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBzeW1ib2xGb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3ltYm9scztcbiAgICB9XG4gICAgVGV4dE1ldHJpY3MuZ2V0U3ltYm9scyA9IGdldFN5bWJvbHM7XG4gICAgZnVuY3Rpb24gZ2V0TGluZXMoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHN5bWJvbHMgPSBnZXRTeW1ib2xzKGNvbXBvbmVudCk7XG4gICAgICAgIGlmICghc3ltYm9scyB8fCAhc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgd29yZFdyYXAgPSBmYWxzZSB9ID0gY29tcG9uZW50O1xuICAgICAgICBjb25zdCBtdWx0aWxpbmUgPSBUZXh0LmlzTXVsdGlsaW5lKGNvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gW107XG4gICAgICAgIGxldCBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgIGlmIChtdWx0aWxpbmUpIHtcbiAgICAgICAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICAgICAgICAgIGlmICh3b3JkV3JhcCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB3b3JkID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2wuc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmNvbmNhdChsaW5lLCB3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5lbXB0eSh3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmFkZCh3b3JkLCBzeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5lLndpZHRoICsgd29yZC53aWR0aCA+IHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoL1xccy8udGVzdChzeW1ib2wuc3ltYm9sKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5jb25jYXQobGluZSwgd29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHRMaW5lLmVtcHR5KHdvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5jb25jYXQobGluZSwgd29yZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sLnN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBUZXh0TGluZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpbmUud2lkdGggKyBzeW1ib2wuYWR2YW5jZSA+IHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKGxpbmUsIHN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQobGluZSwgc3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sLnN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lID0gVGV4dExpbmUuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0TGluZS5hZGQobGluZSwgc3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbaV07XG4gICAgICAgICAgICAgICAgVGV4dExpbmUuYWRkKGxpbmUsIHN5bWJvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmUuc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgICAgICBUZXh0TGluZS5jb3JyZWN0V2lkdGgobGluZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFsaW5lLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBsaW5lLmhlaWdodCA9IGRlZmF1bHRUZXh0Rm9ybWF0LnNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGluZSA9IGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgVGV4dExpbmUuY29ycmVjdEhlaWdodChsaW5lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldExpbmVzID0gZ2V0TGluZXM7XG4gICAgZnVuY3Rpb24gZ2V0TWV0cmljcyhjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBnZXRMaW5lcyhjb21wb25lbnQpO1xuICAgICAgICBpZiAoIWxpbmVzIHx8ICFsaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWV0cmljcyA9IHtcbiAgICAgICAgICAgIGxpbmVzLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgIG1ldHJpY3Mud2lkdGggPSBNYXRoLm1heChtZXRyaWNzLndpZHRoLCBsaW5lLndpZHRoKTtcbiAgICAgICAgICAgIG1ldHJpY3MuaGVpZ2h0ICs9IGxpbmUuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXRyaWNzO1xuICAgIH1cbiAgICBUZXh0TWV0cmljcy5nZXRNZXRyaWNzID0gZ2V0TWV0cmljcztcbiAgICBmdW5jdGlvbiBnZXRTaW1wbGVNZXRyaWNzKGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCB7IHRleHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBUZXh0Rm9ybWF0LmNvbWJpbmUoY29tcG9uZW50LmZvcm1hdCwgVGV4dEZvcm1hdC5kZWZhdWx0VGV4dEZvcm1hdCwgZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBjb25zdCB7IHNpemUsIGxldHRlclNwYWNpbmcsIGxlYWRpbmcgfSA9IGRlZmF1bHRUZXh0Rm9ybWF0O1xuICAgICAgICBjb25zdCBmb250ID0gRm9udC5nZXRGb250KGRlZmF1bHRUZXh0Rm9ybWF0KTtcbiAgICAgICAgbGV0IHdpZHRoID0gMDtcbiAgICAgICAgbGV0IGhlaWdodCA9IHNpemU7XG4gICAgICAgIGxldCBsaW5lV2lkdGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHRleHRbaV07XG4gICAgICAgICAgICBpZiAoc3ltYm9sID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgIGhlaWdodCArPSBzaXplICsgbGVhZGluZztcbiAgICAgICAgICAgICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBsaW5lV2lkdGgpO1xuICAgICAgICAgICAgICAgIGxpbmVXaWR0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gdGV4dFtpICsgMV07XG4gICAgICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IEZvbnQuZ2V0QWR2YW5jZShmb250LCBzaXplLCBzeW1ib2wsIHN5bWJvbE5leHQpICsgbGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGggKz0gYWR2YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBsaW5lV2lkdGgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldFNpbXBsZU1ldHJpY3MgPSBnZXRTaW1wbGVNZXRyaWNzO1xuICAgIGZ1bmN0aW9uIGdldFNpbXBsZVdpZHRoKGZvcm1hdCwgdGV4dCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID49IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBUZXh0Rm9ybWF0LmNvbWJpbmUoZm9ybWF0LCBUZXh0Rm9ybWF0LmRlZmF1bHRUZXh0Rm9ybWF0LCBkZWZhdWx0VGV4dEZvcm1hdCk7XG4gICAgICAgIGNvbnN0IHsgc2l6ZSwgbGV0dGVyU3BhY2luZyB9ID0gZGVmYXVsdFRleHRGb3JtYXQ7XG4gICAgICAgIGNvbnN0IGZvbnQgPSBGb250LmdldEZvbnQoZGVmYXVsdFRleHRGb3JtYXQpO1xuICAgICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2wgPSB0ZXh0W2ldO1xuICAgICAgICAgICAgaWYgKHN5bWJvbCA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzeW1ib2xOZXh0ID0gdGV4dFtpICsgMV07XG4gICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gRm9udC5nZXRBZHZhbmNlKGZvbnQsIHNpemUsIHN5bWJvbCwgc3ltYm9sTmV4dCkgKyBsZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgd2lkdGggKz0gYWR2YW5jZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfVxuICAgIFRleHRNZXRyaWNzLmdldFNpbXBsZVdpZHRoID0gZ2V0U2ltcGxlV2lkdGg7XG59KShUZXh0TWV0cmljcyB8fCAoVGV4dE1ldHJpY3MgPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi90ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9mb3JtYXQnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL2ZvbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL21ldHJpY3MnO1xuZXhwb3J0ICogZnJvbSAnLi9jYW52YXMvdGV4dCc7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BqZW5nL2NvcmUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnQGplbmcvZ2VvbSc7XG5pbXBvcnQgeyBUZXh0TWV0cmljcyB9IGZyb20gJy4vZGF0YS9tZXRyaWNzJztcbmV4cG9ydCBjb25zdCBURVhUID0gJ3RleHQnO1xuZXhwb3J0IHZhciBUZXh0O1xuKGZ1bmN0aW9uIChUZXh0KSB7XG4gICAgZnVuY3Rpb24gZ2V0VGV4dChjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghdGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRleHQpKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IHRleHRbaV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBibG9jayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGJsb2NrLnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIFRleHQuZ2V0VGV4dCA9IGdldFRleHQ7XG4gICAgZnVuY3Rpb24gaXNVcGRhdGVNZXRyaWNzKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LnVwZGF0ZU1ldHJpY3MgPz8gdHJ1ZTtcbiAgICB9XG4gICAgVGV4dC5pc1VwZGF0ZU1ldHJpY3MgPSBpc1VwZGF0ZU1ldHJpY3M7XG4gICAgZnVuY3Rpb24gaXNBdXRvU2l6ZShjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuICFjb21wb25lbnQud2lkdGggJiYgIWNvbXBvbmVudC5oZWlnaHQ7XG4gICAgfVxuICAgIFRleHQuaXNBdXRvU2l6ZSA9IGlzQXV0b1NpemU7XG4gICAgZnVuY3Rpb24gaXNTaW1wbGUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgY29tcG9uZW50LnRleHQgPT09ICdzdHJpbmcnICYmIGlzQXV0b1NpemUoY29tcG9uZW50KTtcbiAgICB9XG4gICAgVGV4dC5pc1NpbXBsZSA9IGlzU2ltcGxlO1xuICAgIGZ1bmN0aW9uIGlzTXVsdGlsaW5lKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50Lm11bHRpbGluZSA/PyB0cnVlO1xuICAgIH1cbiAgICBUZXh0LmlzTXVsdGlsaW5lID0gaXNNdWx0aWxpbmU7XG4gICAgZnVuY3Rpb24gdXBkYXRlTWV0cmljcyhjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKGlzU2ltcGxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5tZXRyaWNzID0gVGV4dE1ldHJpY3MuZ2V0U2ltcGxlTWV0cmljcyhjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29tcG9uZW50Lm1ldHJpY3MgPSBUZXh0TWV0cmljcy5nZXRNZXRyaWNzKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGV4dC51cGRhdGVNZXRyaWNzID0gdXBkYXRlTWV0cmljcztcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoY29tcG9uZW50LCBib3VuZHMpIHtcbiAgICAgICAgaWYgKGlzVXBkYXRlTWV0cmljcyhjb21wb25lbnQpKSB7XG4gICAgICAgICAgICB1cGRhdGVNZXRyaWNzKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBtZXRyaWNzIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGlmICghbWV0cmljcykge1xuICAgICAgICAgICAgUmVjdGFuZ2xlLnNldEVtcHR5KGJvdW5kcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHsgd2lkdGgsIGhlaWdodCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXdpZHRoKSB7XG4gICAgICAgICAgICB3aWR0aCA9IG1ldHJpY3Mud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoZWlnaHQpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IG1ldHJpY3MuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGNvbXBvbmVudCwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShjb21wb25lbnQsIGhlaWdodCk7XG4gICAgICAgIGJvdW5kcy54ID0geDtcbiAgICAgICAgYm91bmRzLnkgPSB5O1xuICAgICAgICBib3VuZHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgYm91bmRzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgVGV4dC5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShUZXh0IHx8IChUZXh0ID0ge30pKTtcbmNvbnN0IGJvdW5kcyA9IFJlY3RhbmdsZS5lbXB0eSgpO1xuZXhwb3J0IHZhciBUZXh0RXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChUZXh0RXh0ZW5zaW9uKSB7XG4gICAgZnVuY3Rpb24gaGl0VGVzdCh0ZXh0LCBlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgeyBsb2NhbCB9ID0gZW5naW5lLnBvaW50ZXJzO1xuICAgICAgICBUZXh0LmNhbGN1bGF0ZUJvdW5kcyh0ZXh0LCBib3VuZHMpO1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNvbnRhaW5zKGJvdW5kcywgbG9jYWwpO1xuICAgIH1cbiAgICBUZXh0RXh0ZW5zaW9uLmhpdFRlc3QgPSBoaXRUZXN0O1xuICAgIGZ1bmN0aW9uIGluaXQoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5jb21wb25lbnRzLmhpdFRlc3Quc2V0KFRFWFQsIGhpdFRlc3QpO1xuICAgIH1cbiAgICBUZXh0RXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoVGV4dEV4dGVuc2lvbiB8fCAoVGV4dEV4dGVuc2lvbiA9IHt9KSk7XG4iLCJleHBvcnQgY29uc3QgTElORUFSID0gJ2xpbmVhcic7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDID0gJ3F1YWRyYXRpYyc7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDX0lOID0gJ3F1YWRyYXRpY2luJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUNfT1VUID0gJ3F1YWRyYXRpY291dCc7XG5leHBvcnQgY29uc3QgQ1VCSUMgPSAnY3ViaWMnO1xuZXhwb3J0IGNvbnN0IENVQklDX0lOID0gJ2N1YmljaW4nO1xuZXhwb3J0IGNvbnN0IENVQklDX09VVCA9ICdjdWJpY291dCc7XG5leHBvcnQgY29uc3QgUVVBUlRJQyA9ICdxdWFydGljJztcbmV4cG9ydCBjb25zdCBRVUFSVElDX0lOID0gJ3F1YXJ0aWNpbic7XG5leHBvcnQgY29uc3QgUVVBUlRJQ19PVVQgPSAncXVhcnRpY291dCc7XG5leHBvcnQgY29uc3QgUVVJTlRJQyA9ICdxdWludGljJztcbmV4cG9ydCBjb25zdCBRVUlOVElDX0lOID0gJ3F1aW50aWNpbic7XG5leHBvcnQgY29uc3QgUVVJTlRJQ19PVVQgPSAncXVpbnRpY291dCc7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTCA9ICdxdWludGljJztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMX0lOID0gJ3F1aW50aWNpbic7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTF9PVVQgPSAncXVpbnRpY291dCc7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUwgPSAnZXhwb25lbnRpYWwnO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMX0lOID0gJ2V4cG9uZW50aWFsaW4nO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMX09VVCA9ICdleHBvbmVudGlhbG91dCc7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVIgPSAnY2lyY3VsYXInO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSX0lOID0gJ2NpcmN1bGFyaW4nO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSX09VVCA9ICdjaXJjdWxhcm91dCc7XG5leHBvcnQgY29uc3QgRUxBU1RJQyA9ICdlbGFzdGljJztcbmV4cG9ydCBjb25zdCBFTEFTVElDX0lOID0gJ2VsYXN0aWNpbic7XG5leHBvcnQgY29uc3QgRUxBU1RJQ19PVVQgPSAnZWxhc3RpY291dCc7XG5leHBvcnQgY29uc3QgQkFDSyA9ICdiYWNrJztcbmV4cG9ydCBjb25zdCBCQUNLX0lOID0gJ2JhY2tpbic7XG5leHBvcnQgY29uc3QgQkFDS19PVVQgPSAnYmFja291dCc7XG5leHBvcnQgY29uc3QgQk9VTkNFID0gJ2JvdW5jZSc7XG5leHBvcnQgY29uc3QgQk9VTkNFX0lOID0gJ2JvdW5jZWluJztcbmV4cG9ydCBjb25zdCBCT1VOQ0VfT1VUID0gJ2JvdW5jZW91dCc7XG5leHBvcnQgY29uc3QgZWFzaW5nID0ge1xuICAgIFtMSU5FQVJdOiAodmFsdWUpID0+IHZhbHVlLFxuICAgIFtRVUFEUkFUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMC41ICogKC0tdmFsdWUgKiAodmFsdWUgLSAyKSAtIDEpO1xuICAgIH0sXG4gICAgW1FVQURSQVRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUFEUkFUSUNfT1VUXTogKHZhbHVlKSA9PiAodmFsdWUgKiAoMiAtIHZhbHVlKSksXG4gICAgW0NVQklDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSArIDIpO1xuICAgIH0sXG4gICAgW0NVQklDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbQ1VCSUNfT1VUXTogKHZhbHVlKSA9PiAoLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAxKSxcbiAgICBbUVVBUlRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAtIDIpO1xuICAgIH0sXG4gICAgW1FVQVJUSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVQVJUSUNfT1VUXTogKHZhbHVlKSA9PiAoMSAtIC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUlOVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMik7XG4gICAgfSxcbiAgICBbUVVJTlRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUlOVElDX09VVF06ICh2YWx1ZSkgPT4gKC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDEpLFxuICAgIFtTSU5VU09JREFMXTogKHZhbHVlKSA9PiAoMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogdmFsdWUpKSksXG4gICAgW1NJTlVTT0lEQUxfSU5dOiAodmFsdWUpID0+ICgxIC0gTWF0aC5jb3MoKHZhbHVlICogTWF0aC5QSSkgLyAyKSksXG4gICAgW1NJTlVTT0lEQUxfT1VUXTogKHZhbHVlKSA9PiAoTWF0aC5zaW4oKHZhbHVlICogTWF0aC5QSSkgLyAyKSksXG4gICAgW0VYUE9ORU5USUFMXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDEwMjQsIHZhbHVlIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogKHZhbHVlIC0gMSkpICsgMik7XG4gICAgfSxcbiAgICBbRVhQT05FTlRJQUxfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gMCA/IDAgOiBNYXRoLnBvdygxMDI0LCB2YWx1ZSAtIDEpKSxcbiAgICBbRVhQT05FTlRJQUxfT1VUXTogKHZhbHVlKSA9PiAodmFsdWUgPT09IDEgPyAxIDogMSAtIE1hdGgucG93KDIsIC0xMCAqIHZhbHVlKSksXG4gICAgW0NJUkNVTEFSXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHZhbHVlICogdmFsdWUpIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh2YWx1ZSAtPSAyKSAqIHZhbHVlKSArIDEpO1xuICAgIH0sXG4gICAgW0NJUkNVTEFSX0lOXTogKHZhbHVlKSA9PiAoMSAtIE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkpLFxuICAgIFtDSVJDVUxBUl9PVVRdOiAodmFsdWUpID0+IE1hdGguc3FydCgxIC0gLS12YWx1ZSAqIHZhbHVlKSxcbiAgICBbRUxBU1RJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgKj0gMjtcbiAgICAgICAgaWYgKHZhbHVlIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiBNYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDIsIC0xMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuICAgIH0sXG4gICAgW0VMQVNUSUNfSU5dOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuICAgIH0sXG4gICAgW0VMQVNUSUNfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5wb3coMiwgLTEwICogdmFsdWUpICogTWF0aC5zaW4oKHZhbHVlIC0gMC4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG4gICAgfSxcbiAgICBbQkFDS106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1OCAqIDEuNTI1O1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqICh2YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSAtIHMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSArIHMpICsgMik7XG4gICAgfSxcbiAgICBbQkFDS19JTl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICAgICAgcmV0dXJuIHZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlIC0gcyk7XG4gICAgfSxcbiAgICBbQkFDS19PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTg7XG4gICAgICAgIHJldHVybiAtLXZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlICsgcykgKyAxO1xuICAgIH0sXG4gICAgW0JPVU5DRV06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPCAwLjUpIHtcbiAgICAgICAgICAgIHJldHVybiBlYXNpbmdbQk9VTkNFX0lOXSh2YWx1ZSAqIDIpICogMC41O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlYXNpbmdbQk9VTkNFX09VVF0odmFsdWUgKiAyIC0gMSkgKiAwLjUgKyAwLjU7XG4gICAgfSxcbiAgICBbQk9VTkNFX0lOXTogKHZhbHVlKSA9PiAoMSAtIGVhc2luZ1tCT1VOQ0VfT1VUXSgxIC0gdmFsdWUpKSxcbiAgICBbQk9VTkNFX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPCAxIC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgMiAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMS41IC8gMi43NSkgKiB2YWx1ZSArIDAuNzU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgMi41IC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAyLjI1IC8gMi43NSkgKiB2YWx1ZSArIDAuOTM3NTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDIuNjI1IC8gMi43NSkgKiB2YWx1ZSArIDAuOTg0Mzc1O1xuICAgIH0sXG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi90d2Vlbic7XG5leHBvcnQgKiBmcm9tICcuL2Vhc2luZyc7XG4iLCJpbXBvcnQgeyBlYXNpbmcsIExJTkVBUiB9IGZyb20gJy4vZWFzaW5nJztcbmV4cG9ydCBjb25zdCBUV0VFTiA9ICd0d2Vlbic7XG5leHBvcnQgdmFyIFR3ZWVuRXh0ZW5zaW9uO1xuKGZ1bmN0aW9uIChUd2VlbkV4dGVuc2lvbikge1xuICAgIGZ1bmN0aW9uIHVwZGF0ZShjb21wb25lbnQsIGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHR3ZWVuIH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IHsgcGhhc2VzIH0gPSB0d2VlbjtcbiAgICAgICAgaWYgKCFwaGFzZXM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgZW5naW5lLmRlYnVnLndhcm5pbmcoJ0FuaW1hdGlvbiBwYXJ0cyBub3QgZm91bmQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHdlZW4udGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0d2Vlbi50aW1lICs9IGVuZ2luZS51cGRhdGVyLnRpbWU7XG4gICAgICAgIGNvbnN0IHsgdGltZSB9ID0gdHdlZW47XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBwaGFzZXMuZm9yRWFjaCgocGhhc2UpID0+IHtcbiAgICAgICAgICAgIGlmICghcGhhc2UudGltZSkge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5kZWJ1Zy53YXJuaW5nKCdBbmltYXRpb24gdGltZSBub3Qgc2V0Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBoYXNlLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gcGhhc2Uub2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZWFzaW5nTmFtZSA9IHBoYXNlPy5lYXNpbmc/LnRvTG93ZXJDYXNlKCkgPz8gTElORUFSO1xuICAgICAgICAgICAgY29uc3QgZWFzaW5nTWV0aG9kID0gZWFzaW5nW2Vhc2luZ05hbWVdO1xuICAgICAgICAgICAgaWYgKCFlYXNpbmdNZXRob2QpIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZyhgVW5rbm93biBlYXNpbmcgdHlwZTogJHtlYXNpbmd9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAodGltZSAtIG9mZnNldCkgLyBwaGFzZS50aW1lO1xuICAgICAgICAgICAgb2Zmc2V0ICs9IHBoYXNlLnRpbWU7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCAwIHx8IHZhbHVlID4gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVhc2luZ1ZhbHVlID0gZWFzaW5nTWV0aG9kKHZhbHVlKTtcbiAgICAgICAgICAgIGlmICghcGhhc2UudG8pIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUuZGVidWcud2FybmluZygnQW5pbWF0aW9uIFwidG9cIiBzdGF0ZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBoYXNlLmZyb20pIHtcbiAgICAgICAgICAgICAgICBwaGFzZS5mcm9tID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHRvLCBmcm9tIH0gPSBwaGFzZTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gY29tcG9uZW50O1xuICAgICAgICAgICAgT2JqZWN0LmtleXModG8pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmcm9tW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tW2tleV0gPSBzdGF0ZVtrZXldID8/IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGZyb21WYWx1ZSA9IGZyb21ba2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b1ZhbHVlID0gdG9ba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZyb21WYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHRvVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlVmFsdWUgPSBmcm9tVmFsdWUgKyBlYXNpbmdWYWx1ZSAqICh0b1ZhbHVlIC0gZnJvbVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IHN0YXRlVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodHdlZW4ubG9vcCAmJiB0d2Vlbi50aW1lID4gb2Zmc2V0KSB7XG4gICAgICAgICAgICB0d2Vlbi50aW1lID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUd2VlbkV4dGVuc2lvbi51cGRhdGUgPSB1cGRhdGU7XG4gICAgZnVuY3Rpb24gaW5pdChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmNvbXBvbmVudHMucHJvcGVydGllcy5zZXQoVFdFRU4sIHVwZGF0ZSk7XG4gICAgfVxuICAgIFR3ZWVuRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoVHdlZW5FeHRlbnNpb24gfHwgKFR3ZWVuRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGplbmcvY29yZSc7XG5leHBvcnQgY2xhc3MgV2ViUGxhdGZvcm0gZXh0ZW5kcyBQbGF0Zm9ybSB7XG59XG4iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tICdAamVuZy9jb3JlJztcbmV4cG9ydCBjbGFzcyBXZWJTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuICAgIGdldFdpbmRvd1dpZHRoKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XG4gICAgfVxuICAgIGdldFdpbmRvd0hlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB9XG4gICAgZ2V0V2luZG93UGl4ZWxSYXRpbygpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID8/IDE7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9zY3JlZW4nO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmFjdGl2ZS9rZXlib2FyZCc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyYWN0aXZlL21vdXNlJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJhY3RpdmUvdG91Y2gnO1xuZXhwb3J0ICogZnJvbSAnLi9mZWF0dXJlcy9wbGF0Zm9ybSc7XG4iLCJmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsIHR5cGUpIHtcbiAgICBjb25zdCBrZXlFdmVudCA9IHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAga2V5OiBldmVudC5rZXksXG4gICAgICAgIGNvZGU6IGV2ZW50LmNvZGUsXG4gICAgICAgIGN0cmw6IGV2ZW50LmN0cmxLZXksXG4gICAgICAgIGFsdDogZXZlbnQuYWx0S2V5LFxuICAgICAgICBzaGlmdDogZXZlbnQuc2hpZnRLZXksXG4gICAgICAgIHJlcGVhdDogZXZlbnQucmVwZWF0LFxuICAgIH07XG4gICAgZW5naW5lLmtleWJvYXJkLmRpc3BhdGNoKGtleUV2ZW50KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZXhwb3J0IHZhciBLZXlib2FyZEV4dGVuc2lvbjtcbihmdW5jdGlvbiAoS2V5Ym9hcmRFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdrZXlEb3duJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAna2V5UHJlc3MnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdrZXlVcCcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgS2V5Ym9hcmRFeHRlbnNpb24uaW5pdCA9IGluaXQ7XG59KShLZXlib2FyZEV4dGVuc2lvbiB8fCAoS2V5Ym9hcmRFeHRlbnNpb24gPSB7fSkpO1xuIiwiZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCB0eXBlKSB7XG4gICAgY29uc3QgeyB2aWV3IH0gPSBlbmdpbmUucGxhdGZvcm07XG4gICAgY29uc3QgY2xpZW50UmVjdCA9IHZpZXcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSBjbGllbnRSZWN0LmxlZnQgLSB2aWV3LmNsaWVudExlZnQ7XG4gICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSBjbGllbnRSZWN0LnRvcCAtIHZpZXcuY2xpZW50VG9wO1xuICAgIGVuZ2luZS5wb2ludGVycy5kaXNwYXRjaCh0eXBlLCB4LCB5LCAwKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZXhwb3J0IHZhciBNb3VzZUV4dGVuc2lvbjtcbihmdW5jdGlvbiAoTW91c2VFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJEb3duJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJVcCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJNb3ZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJDYW5jZWwnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE1vdXNlRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoTW91c2VFeHRlbnNpb24gfHwgKE1vdXNlRXh0ZW5zaW9uID0ge30pKTtcbiIsImZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgdHlwZSkge1xuICAgIGNvbnN0IHsgdmlldyB9ID0gZW5naW5lLnBsYXRmb3JtO1xuICAgIGNvbnN0IGNsaWVudFJlY3QgPSB2aWV3LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXTtcbiAgICAgICAgY29uc3QgeCA9IHRvdWNoLmNsaWVudFggLSBjbGllbnRSZWN0LmxlZnQgLSB2aWV3LmNsaWVudExlZnQ7XG4gICAgICAgIGNvbnN0IHkgPSB0b3VjaC5jbGllbnRZIC0gY2xpZW50UmVjdC50b3AgLSB2aWV3LmNsaWVudFRvcDtcbiAgICAgICAgZW5naW5lLnBvaW50ZXJzLmRpc3BhdGNoKHR5cGUsIHgsIHksIHRvdWNoLmlkZW50aWZpZXIpO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZXhwb3J0IHZhciBUb3VjaEV4dGVuc2lvbjtcbihmdW5jdGlvbiAoVG91Y2hFeHRlbnNpb24pIHtcbiAgICBmdW5jdGlvbiBpbml0KGVuZ2luZSkge1xuICAgICAgICBjb25zdCB7IHZpZXcgfSA9IGVuZ2luZS5wbGF0Zm9ybTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyRG93bicpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlclVwJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlck1vdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJDYW5jZWwnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFRvdWNoRXh0ZW5zaW9uLmluaXQgPSBpbml0O1xufSkoVG91Y2hFeHRlbnNpb24gfHwgKFRvdWNoRXh0ZW5zaW9uID0ge30pKTtcbiIsImltcG9ydCB7IEFCSUxJVFlfV09MRiB9IGZyb20gJy4vYXNzZXRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjdXJzaXZlKCkge1xuXHRjb25zdCBjb250YWluZXIgPSB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0eDogMzAsXG5cdFx0XHR5OiAzMCxcblx0XHRcdHNjYWxlWDogMC45LFxuXHRcdFx0c2NhbGVZOiAwLjksXG5cdFx0XHRyb3RhdGlvbjogMC4yLFxuXHRcdFx0YWxwaGE6IDAuOSxcblx0XHRcdGNoaWxkcmVuOiBbe1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEFCSUxJVFlfV09MRixcblx0XHRcdFx0c2NhbGU6IDAuMyxcblx0XHRcdH1dLFxuXHRcdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHRcdHRoaXMucm90YXRpb24gKz0gdGltZSAqIDAuMDU7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cblx0Y29udGFpbmVyLmNoaWxkcmVuLmNoaWxkcmVuLnB1c2goY29udGFpbmVyIGFzIG5ldmVyKTtcblxuXHRyZXR1cm4gY29udGFpbmVyO1xufVxuIiwiY29uc3QgQVNTRVRTID0gJ2Fzc2V0cy8nO1xuXG5leHBvcnQgY29uc3QgQU5JTUFMSVNUID0gJ2lkOmFuaW1hbGlzdCc7XG5leHBvcnQgY29uc3QgQVJDSEVSID0gJ2lkOmFyY2hlcic7XG5cbmV4cG9ydCBjb25zdCBBTklNQUxJU1RfSU1BR0UgPSBgJHtBU1NFVFN9QW5pbWFsaXN0Rm94MV9pbWFnZS5wbmdgO1xuZXhwb3J0IGNvbnN0IEFSQ0hFUl9JTUFHRSA9IGAke0FTU0VUU31BcmNoZXIyX2h1bnRlcl9pbWFnZS5wbmdgO1xuXG5leHBvcnQgY29uc3QgQUJJTElUWV9GT1ggPSBgJHtBU1NFVFN9QW5pbWFsaXN0QWJpbGl0eV9Gb3gucG5nYDtcbmV4cG9ydCBjb25zdCBBQklMSVRZX1dPTEYgPSBgJHtBU1NFVFN9QW5pbWFsaXN0QWJpbGl0eV9Xb2xmLnBuZ2A7XG5cbmV4cG9ydCBjb25zdCBCQUNLR1JPVU5EID0gYCR7QVNTRVRTfWp1bmdsZV9iYWNrZ3JvdW5kLmpwZ2A7XG5cbmV4cG9ydCBjb25zdCBURVNUX0NBTlZBUyA9ICd0ZXN0LmNhbnZhcyc7XG5cbmV4cG9ydCBjb25zdCBTQ0VORSA9IGAke0FTU0VUU30vc2NlbmUuanNvbmA7XG4iLCJpbXBvcnQgeyBDYW52YXNFbmdpbmUgfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IENhbnZhc1RleHRFeHRlbnNpb24gfSBmcm9tICdAamVuZy90ZXh0JztcbmltcG9ydCB7IEN1c3RvbUltYWdlRXh0ZW5zaW9uIH0gZnJvbSAnLi9pbWFnZSc7XG5pbXBvcnQgQ3VzdG9tUGxhdGZvcm0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUVuZ2luZSBleHRlbmRzIENhbnZhc0VuZ2luZSB7XG5cdHBsYXRmb3JtOiBDdXN0b21QbGF0Zm9ybTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMucGxhdGZvcm0gPSBuZXcgQ3VzdG9tUGxhdGZvcm0odGhpcyk7XG5cblx0XHRDYW52YXNUZXh0RXh0ZW5zaW9uLmluaXQodGhpcyk7XG5cdFx0Q3VzdG9tSW1hZ2VFeHRlbnNpb24uaW5pdCh0aGlzKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzUGxhdGZvcm0gfSBmcm9tICdAamVuZy9jYW52YXMtZW5naW5lJztcbmltcG9ydCB7IEVuZ2luZSwgUGl2b3QgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IEltYWdlRXh0ZW5zaW9uLCBJTUFHRSwgSW1hZ2UgfSBmcm9tICdAamVuZy9pbWFnZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGplbmcvcmVzb3VyY2VzJztcbmltcG9ydCBDdXN0b21FbmdpbmUgZnJvbSAnLi9lbmdpbmUnO1xuXG5leHBvcnQgbmFtZXNwYWNlIEN1c3RvbUltYWdlRXh0ZW5zaW9uIHtcblx0ZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihpbWFnZTogSW1hZ2UsIGVuZ2luZTogRW5naW5lKTogdm9pZCB7XG5cdFx0aWYgKCFpbWFnZS5zcmMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB7IG1hdHJpeCwgY29sb3JUcmFuc2Zvcm0gfSA9IGVuZ2luZS5yZW5kZXJlci5nZXRDb250ZXh0KCk7XG5cblx0XHRpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCByZXNvdXJjZSA9IGVuZ2luZS5yZXNvdXJjZXMuZ2V0KGltYWdlLnNyYykgYXMgSW1hZ2VSZXNvdXJjZSB8IG51bGw7XG5cblx0XHRpZiAoIXJlc291cmNlPy5sb2FkZWQgfHwgIXJlc291cmNlPy5pbWFnZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbnRleHQyZCA9IChlbmdpbmUucGxhdGZvcm0gYXMgQ2FudmFzUGxhdGZvcm0pLmdldENvbnRleHQoKTtcblxuXHRcdGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oXG5cdFx0XHRtYXRyaXguYSxcblx0XHRcdG1hdHJpeC5iLFxuXHRcdFx0bWF0cml4LmMsXG5cdFx0XHRtYXRyaXguZCxcblx0XHRcdG1hdHJpeC50eCxcblx0XHRcdG1hdHJpeC50eSxcblx0XHQpO1xuXG5cdFx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcblx0XHRjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuXHRcdGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuXG5cdFx0Y29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcblx0XHRjb250ZXh0MmQuZmlsbFN0eWxlID0gJyc7XG5cdFx0Y29udGV4dDJkLnN0cm9rZVN0eWxlID0gJ2xpZ2h0Z3JheSc7XG5cdFx0Y29udGV4dDJkLnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG5cdH1cblxuXHRleHBvcnQgZnVuY3Rpb24gaW5pdChlbmdpbmU6IEN1c3RvbUVuZ2luZSkge1xuXHRcdEltYWdlRXh0ZW5zaW9uLmluaXQoZW5naW5lKTtcblx0XHRlbmdpbmUuY29tcG9uZW50cy5yZW5kZXIuc2V0KElNQUdFLCByZW5kZXIpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDYW52YXNQbGF0Zm9ybSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21QbGF0Zm9ybSBleHRlbmRzIENhbnZhc1BsYXRmb3JtIHtcblx0Y2xlYXIoKSB7XG5cdFx0Y29uc3QgY29udGV4dDJkID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cdFx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICdibGFjayc7XG5cdFx0Y29udGV4dDJkLnNldFRyYW5zZm9ybSgpO1xuXHRcdGNvbnRleHQyZC5maWxsUmVjdCgwLCAwLCBjb250ZXh0MmQuY2FudmFzLndpZHRoLCBjb250ZXh0MmQuY2FudmFzLmhlaWdodCk7XG5cdFx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tICdAamVuZy9jb3JlJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UgfSBmcm9tICdAamVuZy9yZXNvdXJjZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21SZXNvdXJjZU1hbmFnZXIge1xuXHRyZWFkb25seSBhbGlhc2VzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblx0cmVhZG9ubHkgcmVzb3VyY2VzID0gbmV3IE1hcDxzdHJpbmcsIEltYWdlUmVzb3VyY2U+KCk7XG5cblx0cmVzb2x2ZSA9IChhc3NldDogc3RyaW5nLCBlbmdpbmU6IEVuZ2luZSk6IEltYWdlUmVzb3VyY2UgfCBudWxsID0+IHtcblx0XHRpZiAoYXNzZXQuaW5kZXhPZignaWQ6JykgPT09IDApIHtcblx0XHRcdGNvbnN0IGlkID0gYXNzZXQuc2xpY2UoMyk7XG5cdFx0XHRsZXQgcmVzb3VyY2UgPSB0aGlzLnJlc291cmNlcy5nZXQoaWQpIGFzIEltYWdlUmVzb3VyY2U7XG5cdFx0XHRpZiAoIXJlc291cmNlKSB7XG5cdFx0XHRcdGNvbnN0IHVybCA9IHRoaXMuYWxpYXNlcy5nZXQoaWQpO1xuXHRcdFx0XHRpZiAodXJsKSB7XG5cdFx0XHRcdFx0cmVzb3VyY2UgPSBJbWFnZVJlc291cmNlLnJlc29sdmUodXJsLCBlbmdpbmUpIGFzIEltYWdlUmVzb3VyY2U7XG5cdFx0XHRcdFx0dGhpcy5yZXNvdXJjZXMuc2V0KGlkLCByZXNvdXJjZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZW5naW5lLmRlYnVnLndhcm5pbmcoYFJlc291cmNlIHdpdGggaWQ6ICR7YXNzZXR9IG5vdCBmb3VuZGApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzb3VyY2U7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aW5pdChlbmdpbmU6IEVuZ2luZSkge1xuXHRcdGVuZ2luZS5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZCh0aGlzLnJlc29sdmUpO1xuXHR9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFN0YXRpc3RpY3Mge1xuXHRnZXRSZW5kZXJUaW1lKCk6IG51bWJlcjtcblx0Z2V0VXBkYXRlVGltZSgpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcHMoc3RhdGlzdGljczogU3RhdGlzdGljcykge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHR0ZXh0OiAnZnBzJyxcblx0XHRmcmFtZXM6IDAsXG5cdFx0ZnJhbWVUaW1lOiAwLFxuXHRcdHVwZGF0ZVRpbWU6IDAsXG5cdFx0cmVuZGVyVGltZTogMCxcblx0XHRmb3JtYXQ6IHtcblx0XHRcdHNpemU6IDIwLFxuXHRcdFx0Y29sb3I6IDB4ZmZmZmZmLFxuXHRcdH0sXG5cdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLmZyYW1lVGltZSArPSB0aW1lO1xuXHRcdFx0dGhpcy51cGRhdGVUaW1lICs9IHN0YXRpc3RpY3MuZ2V0VXBkYXRlVGltZSgpO1xuXHRcdFx0dGhpcy5yZW5kZXJUaW1lICs9IHN0YXRpc3RpY3MuZ2V0UmVuZGVyVGltZSgpO1xuXHRcdFx0dGhpcy5mcmFtZXMrKztcblx0XHRcdGlmICh0aGlzLmZyYW1lVGltZSA+PSAxKSB7XG5cdFx0XHRcdGNvbnN0IGZyYW1lVGltZSA9IE1hdGguY2VpbCgxMDAwICogdGhpcy5mcmFtZVRpbWUgLyB0aGlzLmZyYW1lcyk7XG5cdFx0XHRcdGNvbnN0IHVwZGF0ZVRpbWUgPSAodGhpcy51cGRhdGVUaW1lIC8gdGhpcy5mcmFtZXMpLnRvRml4ZWQoMik7XG5cdFx0XHRcdGNvbnN0IHJlbmRlclRpbWUgPSAodGhpcy5yZW5kZXJUaW1lIC8gdGhpcy5mcmFtZXMpLnRvRml4ZWQoMik7XG5cdFx0XHRcdHRoaXMudGV4dCA9IGBmcHM6ICR7dGhpcy5mcmFtZXN9LCAke2ZyYW1lVGltZX0gbXNcXG51cGRhdGU6ICR7dXBkYXRlVGltZX0gbXNcXG5yZW5kZXI6ICR7cmVuZGVyVGltZX0gbXNgO1xuXHRcdFx0XHR0aGlzLmZyYW1lVGltZSA9IDA7XG5cdFx0XHRcdHRoaXMudXBkYXRlVGltZSA9IDA7XG5cdFx0XHRcdHRoaXMucmVuZGVyVGltZSA9IDA7XG5cdFx0XHRcdHRoaXMuZnJhbWVzID0gMDtcblx0XHRcdH1cblx0XHR9LFxuXHR9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQge1xuXHRBQklMSVRZX0ZPWCwgQUJJTElUWV9XT0xGLCBBTklNQUxJU1QsIEFSQ0hFUiwgQkFDS0dST1VORCwgU0NFTkUsXG59IGZyb20gJy4vYXNzZXRzJztcbmltcG9ydCBhcnRpZmFjdCBmcm9tICcuL2FydGlmYWN0JztcbmltcG9ydCB7IGZwcywgU3RhdGlzdGljcyB9IGZyb20gJy4vZnBzJztcbmltcG9ydCB7IHVuaXQsIFVuaXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi91bml0JztcbmltcG9ydCB7IHByZWxvYWRlciwgUHJlbG9hZGVySW5mbyB9IGZyb20gJy4vcHJlbG9hZGVyJztcblxuaW50ZXJmYWNlIE1haW4ge1xuXHRzdGFydCgpOiB2b2lkO1xuXHRba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmludGVyZmFjZSBNYWluUHJvcGVydGllcyBleHRlbmRzIFN0YXRpc3RpY3Mge1xuXHRnZXRDYW52YXNXaWR0aCgpOiBudW1iZXI7XG5cdGdldENhbnZhc0hlaWdodCgpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4ocGFyYW1ldGVyczogTWFpblByb3BlcnRpZXMpOiBNYWluIHtcblx0ZnVuY3Rpb24gb25Vbml0Q2xpY2soZGF0YTogVW5pdFByb3BlcnRpZXMpIHtcblx0XHRkYXRhLmhlYWx0aCA9IE1hdGgucmFuZG9tKCk7XG5cdFx0Y29uc29sZS5sb2coJ29uVW5pdENsaWNrJywgZGF0YS5uYW1lKTtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSB7XG5cdFx0dHlwZTogJ2xvYWRlcicsXG5cdFx0dmlzaWJsZTogZmFsc2UsXG5cdFx0ZW5hYmxlZDogZmFsc2UsXG5cdFx0b25Mb2FkZWQoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnYmFja2dyb3VuZCBsb2FkZWQnKTtcblx0XHRcdHRoaXMudmlzaWJsZSA9IHRydWU7XG5cdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdH0sXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdGJhY2tncm91bmQ6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBCQUNLR1JPVU5ELFxuXHRcdFx0XHRzY2FsZVg6IDEsXG5cdFx0XHRcdHNjYWxlWTogMSxcblx0XHRcdH0sXG5cdFx0XHRmaWd1cmU6IHtcblx0XHRcdFx0dHlwZTogJ3NoYXBlJyxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdHR5cGU6ICdyZWN0YW5nbGUnLFxuXHRcdFx0XHRcdHg6IDIwLFxuXHRcdFx0XHRcdHk6IDIwLFxuXHRcdFx0XHRcdHdpZHRoOiAxMDAsXG5cdFx0XHRcdFx0aGVpZ2h0OiA1MCxcblx0XHRcdFx0XHRmaWxsOiAweGZmMDBmZixcblx0XHRcdFx0XHRzdHJva2U6IDB4MDAwMGZmLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHNoYXBlczoge1xuXHRcdFx0XHR0eXBlOiAnc2hhcGUnLFxuXHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ2VsbGlwc2UnLFxuXHRcdFx0XHRcdFx0eDogMTAwLFxuXHRcdFx0XHRcdFx0eTogMTAwLFxuXHRcdFx0XHRcdFx0cmFkaXVzOiA1MCxcblx0XHRcdFx0XHRcdGZpbGw6IHsgdHlwZTogJ3NvbGlkJywgY29sb3I6IDB4ZmZmZjAwLCBhbHBoYTogMSB9LFxuXHRcdFx0XHRcdFx0c3Ryb2tlOiB7IGZpbGw6IDB4MDAwMGZmLCB0aGlja25lc3M6IDEwIH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAncGF0aCcsXG5cdFx0XHRcdFx0XHRkYXRhOiAnTSAxMTAsIDExMCBIIDE5MCBWIDE5MCBIIDExMCBaJyxcblx0XHRcdFx0XHRcdGZpbGw6IDB4OTkwMDAwLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ3BhdGgnLFxuXHRcdFx0XHRcdFx0ZGF0YTogW1xuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdtb3ZlVG8nLCB4OiAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDEwMCwgeTogMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAxMDAsIHk6IDEwMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAwLCB5OiAxMDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMCwgeTogMCB9LFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdGZpbGw6IHsgdHlwZTogJ3NvbGlkJywgY29sb3I6IDB4OTk5OTk5LCBhbHBoYTogMC42IH0sXG5cdFx0XHRcdFx0XHRzdHJva2U6IDB4MDAwMDAwLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0dW5pdHM6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0dW5pdCh7XG5cdFx0XHRcdFx0XHRuYW1lOiAnQXJjaGVyJywgaGVhbHRoOiAxLCBpbWFnZTogQVJDSEVSLCBvbkNsaWNrOiBvblVuaXRDbGljayxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHR1bml0KHtcblx0XHRcdFx0XHRcdG5hbWU6ICdBbmltYWxpc3QnLCBoZWFsdGg6IDEsIGltYWdlOiBBTklNQUxJU1QsIG9uQ2xpY2s6IG9uVW5pdENsaWNrLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdGFydGlmYWN0OiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHR4OiAzMDAsXG5cdFx0XHRcdHk6IDM1MCxcblx0XHRcdFx0Y2hpbGRyZW46IGFydGlmYWN0KCksXG5cdFx0XHR9LFxuXHRcdFx0bWFwOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHk6IDQ1MCxcblx0XHRcdFx0c2NhbGVYOiAwLjIsXG5cdFx0XHRcdHNjYWxlWTogMC4yLFxuXHRcdFx0XHRhbHBoYTogMC41LFxuXHRcdFx0XHRzcmM6ICd0ZXN0LmNhbnZhcycsXG5cdFx0XHRcdG9uUG9pbnRlck92ZXIoKSB7XG5cdFx0XHRcdFx0dGhpcy5hbHBoYSA9IDE7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uUG9pbnRlck91dCgpIHtcblx0XHRcdFx0XHR0aGlzLmFscGhhID0gMC41O1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGFiaWxpdHlGb3g6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBBQklMSVRZX0ZPWCxcblx0XHRcdFx0eDogNDUwLFxuXHRcdFx0XHR5OiA1MDAsXG5cdFx0XHRcdHNjYWxlOiAwLjUsXG5cdFx0XHRcdHRpbnQ6IHtcblx0XHRcdFx0XHRjb2xvcjogMHgwMGZmMDAsXG5cdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdH0gYXMgYW55LFxuXHRcdFx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdFx0XHRpZiAodGhpcy50aW50KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQudmFsdWUgKz0gdGltZTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLnRpbnQudmFsdWUgPj0gMSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRpbnQudmFsdWUgPSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0b25Qb2ludGVyRG93bihlOiBhbnkpIHtcblx0XHRcdFx0XHRpZiAodGhpcy50aW50KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQgPSBudWxsO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQgPSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAweDAwZmYwMCxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZygnZm94JywgZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YWJpbGl0eVdvbGY6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdHg6IDM1MCxcblx0XHRcdFx0eTogNDAwLFxuXHRcdFx0XHRjaGlsZHJlbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdFx0c3JjOiBBQklMSVRZX1dPTEYsXG5cdFx0XHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdFx0XHRhbHBoYTogMSxcblx0XHRcdFx0XHR0d2Vlbjoge1xuXHRcdFx0XHRcdFx0bG9vcDogdHJ1ZSxcblx0XHRcdFx0XHRcdHBoYXNlczogW1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB4OiAyMDAgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ2N1Ymljb3V0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHk6IDIwMCwgYWxwaGE6IDAuNSB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAncXVhZHJhdGljSW4nLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeDogMCwgYWxwaGE6IDEgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ3F1YWRyYXRpY091dCcsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0ZnBzOiBmcHMocGFyYW1ldGVycyksXG5cdFx0fSxcblx0fTtcblxuXHRjb25zdCBwcmVsb2FkZXJJbmZvOiBQcmVsb2FkZXJJbmZvID0ge1xuXHRcdGdldFdpZHRoOiBwYXJhbWV0ZXJzLmdldENhbnZhc1dpZHRoLFxuXHRcdGdldEhlaWdodDogcGFyYW1ldGVycy5nZXRDYW52YXNIZWlnaHQsXG5cdFx0Z2V0UHJvZ3Jlc3MoKSB7XG5cdFx0XHRyZXR1cm4gTG9hZGVyLmdldExvYWRpbmdQcm9ncmVzcyhjb250ZW50KTtcblx0XHR9LFxuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdGNvbnRlbnQsXG5cdFx0XHRwcmVsb2FkZXI6IHByZWxvYWRlcihwcmVsb2FkZXJJbmZvKSxcblx0XHRcdHNjZW5lOiB7XG5cdFx0XHRcdHR5cGU6ICdzY2VuZScsIHg6IDMwMCwgc3JjOiBTQ0VORSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRvblVwZGF0ZSgpIHtcblx0XHRcdGNvbnN0IGlzTG9hZGVkID0gIXRoaXMuY2hpbGRyZW4uY29udGVudC52aXNpYmxlO1xuXHRcdFx0dGhpcy5jaGlsZHJlbi5wcmVsb2FkZXIudmlzaWJsZSA9IGlzTG9hZGVkO1xuXHRcdFx0dGhpcy5jaGlsZHJlbi5wcmVsb2FkZXIuZW5hYmxlZCA9IGlzTG9hZGVkO1xuXHRcdH0sXG5cdFx0c3RhcnQoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnc3RhcnQnKTtcblx0XHR9LFxuXHR9O1xufVxuIiwiaW1wb3J0IHsgU2hhcGUgfSBmcm9tICdAamVuZy9zaGFwZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJlbG9hZGVySW5mbyB7XG5cdGdldFByb2dyZXNzKCk6IG51bWJlcjtcblx0Z2V0V2lkdGgoKTogbnVtYmVyO1xuXHRnZXRIZWlnaHQoKTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZGVyKGluZm86IFByZWxvYWRlckluZm8pIHtcblx0Y29uc3QgaGVpZ2h0ID0gMjA7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ3NoYXBlJyxcblx0XHRzY2FsZVg6IDEsXG5cdFx0eTogaW5mby5nZXRIZWlnaHQoKSAtIGhlaWdodCxcblx0XHRkYXRhOiB7XG5cdFx0XHR0eXBlOiAncmVjdGFuZ2xlJyxcblx0XHRcdHdpZHRoOiAxLFxuXHRcdFx0aGVpZ2h0LFxuXHRcdFx0ZmlsbDogMHhmZjAwMDAsXG5cdFx0fSxcblx0XHRvblVwZGF0ZSgpIHtcblx0XHRcdHRoaXMuc2NhbGVYISArPSAoaW5mby5nZXRXaWR0aCgpICogaW5mby5nZXRQcm9ncmVzcygpIC0gdGhpcy5zY2FsZVghKSAvIDI7XG5cdFx0fSxcblx0fSBhcyBTaGFwZTtcbn1cbiIsImNvbnN0IFNQRUVEID0gMTAwO1xuXG5pbnRlcmZhY2UgVW5pdCB7XG5cdFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVbml0UHJvcGVydGllcyB7XG5cdG5hbWU6IHN0cmluZyxcblx0aGVhbHRoOiBudW1iZXIsXG5cdGltYWdlOiBzdHJpbmcsXG5cdG9uQ2xpY2s6IChkYXRhOiBVbml0UHJvcGVydGllcykgPT4gdm9pZDtcbn1cblxuZnVuY3Rpb24gb25Qcm9wc1VwZGF0ZShwcm9wczogYW55LCBjYWxsYmFjazogKHRpbWU6IG51bWJlcikgPT4gdm9pZCkge1xuXHRjb25zdCBjb3B5ID0geyAuLi5wcm9wcyB9O1xuXHRyZXR1cm4gKHRpbWU6IG51bWJlcikgPT4ge1xuXHRcdC8vIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG5cdFx0bGV0IGNoYW5nZWQgPSBmYWxzZTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcblx0XHRmb3IgKGNvbnN0IGtleSBpbiBwcm9wcykge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuXHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0aWYgKGNvcHlba2V5XSAhPT0gcHJvcHNba2V5XSkge1xuXHRcdFx0XHRcdGNvcHlba2V5XSA9IHByb3BzW2tleV07XG5cdFx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlZCkge1xuXHRcdFx0Y2FsbGJhY2sodGltZSk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBydW5PblByb3BzVXBkYXRlKHByb3BzOiBhbnksIGNvbXBvbmVudDogYW55KSB7XG5cdGNvbXBvbmVudC5vblVwZGF0ZSA9IG9uUHJvcHNVcGRhdGUocHJvcHMsIGNvbXBvbmVudC5vblVwZGF0ZS5iaW5kKGNvbXBvbmVudCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pdChwcm9wczogVW5pdFByb3BlcnRpZXMpOiBVbml0IHtcblx0ZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XG5cdFx0cmV0dXJuIGAke3Byb3BzLm5hbWV9XFxuJHtNYXRoLnJvdW5kKHByb3BzLmhlYWx0aCAqIDEwMCl9JWA7XG5cdH1cblxuXHRjb25zdCB1bml0VmlldyA9IHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHR4OiA1MCArIE1hdGgucmFuZG9tKCkgKiA0MDAsXG5cdFx0eTogMjAwLFxuXHRcdHJvdGF0aW9uOiAwLFxuXHRcdHVwZGF0ZU1vdmUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLnggKz0gdGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggKiB0aW1lICogU1BFRUQ7XG5cdFx0XHRpZiAodGhpcy54IDwgNTApIHtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggPSAxO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnggPiA0MDApIHtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggPSAtMTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0dGhpcy51cGRhdGVNb3ZlKHRpbWUpO1xuXHRcdH0sXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdHRleHQ6IHtcblx0XHRcdFx0dHlwZTogJ3RleHQnLFxuXHRcdFx0XHR0ZXh0OiBnZXRUaXRsZSgpLFxuXHRcdFx0XHRmb3JtYXQ6IHtcblx0XHRcdFx0XHRzaXplOiAxNSxcblx0XHRcdFx0XHRjb2xvcjogMHhmZmRkZGQsXG5cdFx0XHRcdFx0YWxpZ246ICdjZW50ZXInLFxuXHRcdFx0XHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRib3JkZXI6IDB4MDBmZjAwLFxuXHRcdFx0XHR5OiAtMzAsXG5cdFx0XHRcdGhlaWdodDogMzUsXG5cdFx0XHRcdHBpdm90WDogMC41LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duOiAoKSA9PiB7XG5cdFx0XHRcdFx0cHJvcHMub25DbGljayhwcm9wcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uVXBkYXRlKCkge1xuXHRcdFx0XHRcdHRoaXMudGV4dCA9IGdldFRpdGxlKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBwcm9wcy5pbWFnZSxcblx0XHRcdFx0c2NhbGVYOiBNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xLFxuXHRcdFx0XHRwaXZvdFg6IDAuNSxcblx0XHRcdFx0b25Qb2ludGVyRG93bjogKCkgPT4ge1xuXHRcdFx0XHRcdHByb3BzLm9uQ2xpY2socHJvcHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXG5cdHJ1bk9uUHJvcHNVcGRhdGUocHJvcHMsIHVuaXRWaWV3LmNoaWxkcmVuLnRleHQpO1xuXG5cdHJldHVybiB1bml0Vmlldztcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGplbmcvY29yZSc7XG5pbXBvcnQgeyBUd2VlbkV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3R3ZWVuJztcbmltcG9ydCB7IENhbnZhc1RleHRFeHRlbnNpb24gfSBmcm9tICdAamVuZy90ZXh0JztcbmltcG9ydCB7IENhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24gfSBmcm9tICdAamVuZy9pbWFnZSc7XG5pbXBvcnQgeyBDYW52YXNTaGFwZUV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3NoYXBlJztcbmltcG9ydCB7IENhbnZhc0VuZ2luZSB9IGZyb20gJ0BqZW5nL2NhbnZhcy1lbmdpbmUnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BqZW5nL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBTY2VuZUV4dGVuc2lvbiB9IGZyb20gJ0BqZW5nL3NjZW5lJztcbmltcG9ydCB7IE1vdXNlRXh0ZW5zaW9uIH0gZnJvbSAnQGplbmcvd2ViJztcbmltcG9ydCBDdXN0b21SZXNvdXJjZU1hbmFnZXIgZnJvbSAnLi9lbmdpbmUvcmVzb3VyY2VzJztcbmltcG9ydCBDdXN0b21FbmdpbmUgZnJvbSAnLi9lbmdpbmUvZW5naW5lJztcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbic7XG5pbXBvcnQge1xuXHRBTklNQUxJU1QsIEFOSU1BTElTVF9JTUFHRSwgQVJDSEVSLCBBUkNIRVJfSU1BR0UsIFRFU1RfQ0FOVkFTLFxufSBmcm9tICcuL2Fzc2V0cyc7XG5cbi8vIHBhZ2VcbmRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gJzAnO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nID0gJzAnO1xuXG4vLyBiYXNpYyBlbmdpbmVcbmNvbnN0IGVuZ2luZSA9IG5ldyBDYW52YXNFbmdpbmUoKTtcbkNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24uaW5pdChlbmdpbmUpO1xuQ2FudmFzVGV4dEV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5DYW52YXNTaGFwZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5Ud2VlbkV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5TY2VuZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5Nb3VzZUV4dGVuc2lvbi5pbml0KGVuZ2luZSk7XG5lbmdpbmUuc2NyZWVuLmZ1bGxzY3JlZW4gPSB0cnVlO1xuZW5naW5lLnRpY2tlci5wbGF5KCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVuZ2luZS5wbGF0Zm9ybS52aWV3KTtcblxuY29uc3QgcGFyYW1ldGVycyA9IHtcblx0Z2V0VXBkYXRlVGltZSgpIHtcblx0XHRyZXR1cm4gZW5naW5lLnVwZGF0ZXIuZWxhcHNlZFRpbWU7XG5cdH0sXG5cdGdldFJlbmRlclRpbWUoKSB7XG5cdFx0cmV0dXJuIGVuZ2luZS5yZW5kZXJlci5lbGFwc2VkVGltZTtcblx0fSxcblx0Z2V0Q2FudmFzV2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZW5naW5lLnNjcmVlbi5nZXRXaWR0aCgpO1xuXHR9LFxuXHRnZXRDYW52YXNIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZW5naW5lLnNjcmVlbi5nZXRIZWlnaHQoKTtcblx0fSxcbn07XG5cbi8vIGFwcGxpY2F0aW9uXG5jb25zdCBhcHAgPSBtYWluKHBhcmFtZXRlcnMpO1xuYXBwLnN0YXJ0KCk7XG5lbmdpbmUucm9vdCA9IGFwcCBhcyBhbnkgYXMgQ29tcG9uZW50O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbmNvbnNvbGUubG9nKGFwcCk7XG5cbi8vIHRlc3QgcGF1c2VcbnNldFRpbWVvdXQoKCkgPT4gZW5naW5lLnRpY2tlci5wYXVzZSgpLCA1MDAwKTtcbnNldFRpbWVvdXQoKCkgPT4gZW5naW5lLnRpY2tlci5wbGF5KCksIDEwMDAwKTtcblxuLy8gY3VzdG9tIGVuZ2luZVxuY29uc3QgY3VzdG9tRW5naW5lID0gbmV3IEN1c3RvbUVuZ2luZSgpO1xuY3VzdG9tRW5naW5lLnNjcmVlbi5mdWxsc2NyZWVuID0gZmFsc2U7XG5jdXN0b21FbmdpbmUuc2NyZWVuLmhlaWdodCA9IDYwMDtcbmN1c3RvbUVuZ2luZS51cGRhdGVyLmVuYWJsZWQgPSBmYWxzZTtcbmN1c3RvbUVuZ2luZS5yb290ID0gZW5naW5lLnJvb3Q7XG5jdXN0b21FbmdpbmUudGlja2VyLnBsYXkoKTtcbmN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbmN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3LnN0eWxlLnRvcCA9ICcwcHgnO1xuY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcuc3R5bGUubGVmdCA9ICc2MDBweCc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGN1c3RvbUVuZ2luZS5wbGF0Zm9ybS52aWV3KTtcblxuLy8gLy8gc2V0IGN1c3RvbSByZXNvdXJjZVxuZW5naW5lLnJlc291cmNlcy5yZXNvdXJjZXMuc2V0KFxuXHRURVNUX0NBTlZBUyxcblx0e1xuXHRcdGFzc2V0OiBURVNUX0NBTlZBUyxcblx0XHRpbWFnZTogY3VzdG9tRW5naW5lLnBsYXRmb3JtLnZpZXcsXG5cdFx0bG9hZGVkOiB0cnVlLFxuXHR9IGFzIEltYWdlUmVzb3VyY2UsXG4pO1xuY3VzdG9tRW5naW5lLnJlc291cmNlcy5yZXNvdXJjZXMuc2V0KFxuXHRURVNUX0NBTlZBUyxcblx0e1xuXHRcdGFzc2V0OiBURVNUX0NBTlZBUyxcblx0XHRpbWFnZTogZW5naW5lLnBsYXRmb3JtLnZpZXcsXG5cdFx0bG9hZGVkOiB0cnVlLFxuXHR9IGFzIEltYWdlUmVzb3VyY2UsXG4pO1xuXG4vLyBjdXN0b20gcmVzb3VyY2UgcmVzb2x2ZXJcbmNvbnN0IHJlc291cmNlTWFuYWdlciA9IG5ldyBDdXN0b21SZXNvdXJjZU1hbmFnZXIoKTtcbnJlc291cmNlTWFuYWdlci5hbGlhc2VzLnNldChBUkNIRVIucmVwbGFjZSgnaWQ6JywgJycpLCBBUkNIRVJfSU1BR0UpO1xucmVzb3VyY2VNYW5hZ2VyLmFsaWFzZXMuc2V0KEFOSU1BTElTVC5yZXBsYWNlKCdpZDonLCAnJyksIEFOSU1BTElTVF9JTUFHRSk7XG5yZXNvdXJjZU1hbmFnZXIuaW5pdChlbmdpbmUpO1xucmVzb3VyY2VNYW5hZ2VyLmluaXQoY3VzdG9tRW5naW5lKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=