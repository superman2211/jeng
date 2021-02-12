/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../canvas-support/dist/index.js":
/*!***************************************!*\
  !*** ../canvas-support/dist/index.js ***!
  \***************************************/
/*! namespace exports */
/*! export CanvasSupport [provided] [used in main] [could be renamed] -> ../canvas-support/dist/support.js .default */
/*! export createColorPattern [provided] [used in main] [could be renamed] -> ../canvas-support/dist/patterns.js .createColorPattern */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createColorPattern": () => /* reexport safe */ _patterns__WEBPACK_IMPORTED_MODULE_1__.createColorPattern,
/* harmony export */   "CanvasSupport": () => /* reexport safe */ _support__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support */ "../canvas-support/dist/support.js");
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patterns */ "../canvas-support/dist/patterns.js");




/***/ }),

/***/ "../canvas-support/dist/patterns.js":
/*!******************************************!*\
  !*** ../canvas-support/dist/patterns.js ***!
  \******************************************/
/*! namespace exports */
/*! export createColorPattern [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createColorPattern": () => /* binding */ createColorPattern
/* harmony export */ });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");

function createColorPattern(color, alpha, ct) {
  var r = color >> 16 & 0xff;
  var g = color >> 8 & 0xff;
  var b = color & 0xff;
  var a = alpha * 0xff;

  if (!_e2d_geom__WEBPACK_IMPORTED_MODULE_0__.ColorTransform.isDefault(ct)) {
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

/***/ }),

/***/ "../canvas-support/dist/support.js":
/*!*****************************************!*\
  !*** ../canvas-support/dist/support.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ CanvasSupport
/* harmony export */ });
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CanvasSupport = /*#__PURE__*/function (_Support) {
  _inherits(CanvasSupport, _Support);

  var _super = _createSuper(CanvasSupport);

  function CanvasSupport() {
    var _this;

    _classCallCheck(this, CanvasSupport);

    _this = _super.call(this);
    _this.canvas = document.createElement('canvas');
    _this.context2d = _this.canvas.getContext('2d');
    return _this;
  }

  _createClass(CanvasSupport, [{
    key: "clear",
    value: function clear() {
      var canvas = this.canvas;
      this.context2d.setTransform();
      this.context2d.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, {
    key: "setSize",
    value: function setSize(width, height, pixelRatio) {
      var viewWidth = Math.floor(width * pixelRatio);
      var viewHeight = Math.floor(height * pixelRatio);
      var canvas = this.canvas;

      if (canvas.width !== viewWidth || canvas.height !== viewHeight) {
        canvas.width = viewWidth;
        canvas.height = viewHeight;
        canvas.style.width = "".concat(width, "px");
        canvas.style.height = "".concat(height, "px");
      }
    }
  }, {
    key: "element",
    get: function get() {
      return this.canvas;
    }
  }]);

  return CanvasSupport;
}(_e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Support);



/***/ }),

/***/ "../engine/dist/components/component.js":
/*!**********************************************!*\
  !*** ../engine/dist/components/component.js ***!
  \**********************************************/
/*! namespace exports */
/*! export Component [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => /* binding */ Component
/* harmony export */ });
var Component;

(function (Component) {
  function isEnabled(component) {
    var _component$enabled;

    return (_component$enabled = component.enabled) !== null && _component$enabled !== void 0 ? _component$enabled : true;
  }

  Component.isEnabled = isEnabled;

  function isVisible(component) {
    var _component$visible;

    return (_component$visible = component.visible) !== null && _component$visible !== void 0 ? _component$visible : true;
  }

  Component.isVisible = isVisible;
})(Component || (Component = {}));

/***/ }),

/***/ "../engine/dist/components/container.js":
/*!**********************************************!*\
  !*** ../engine/dist/components/container.js ***!
  \**********************************************/
/*! namespace exports */
/*! export CONTAINER [provided] [unused] [could be renamed] */
/*! export Container [provided] [unused] [could be renamed] */
/*! export applyContainerExtension [provided] [used in main] [could be renamed] */
/*! export hitTest [provided] [unused] [could be renamed] */
/*! export render [provided] [unused] [could be renamed] */
/*! export update [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyContainerExtension": () => /* binding */ applyContainerExtension
/* harmony export */ });
/* unused harmony exports CONTAINER, Container, render, update, hitTest */
var CONTAINER = 'container';
var Container;

(function (Container) {
  function numChildren(container) {
    var child = container.child,
        children = container.children;
    var count = 0;

    if (child) {
      count++;
    }

    if (children) {
      if (Array.isArray(children)) {
        count += children.length;
      } else {
        var keys = Object.keys(children);
        count += keys.length;
      }
    }

    return count;
  }

  Container.numChildren = numChildren;
})(Container || (Container = {}));

function render(container, context) {
  var child = container.child,
      children = container.children;
  var support = context.support;

  if (child) {
    var childContext = support.getRenderContext(child, context);
    support.render(child, childContext);
  }

  if (children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var component = children[i];
        var componentContext = support.getRenderContext(component, context);
        support.render(component, componentContext);
      }
    } else {
      var keys = Object.keys(children);

      for (var _i = 0; _i < keys.length; _i++) {
        var _component = children[keys[_i]];

        var _componentContext = support.getRenderContext(_component, context);

        support.render(_component, _componentContext);
      }
    }
  }
}
function update(container, context) {
  var child = container.child,
      children = container.children;
  var support = context.support;

  if (child) {
    var childContext = support.getUpdateContext(child, context);
    support.update(child, childContext);
  }

  if (children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var component = children[i];
        var componentContext = support.getUpdateContext(component, context);
        support.update(component, componentContext);
      }
    } else {
      var keys = Object.keys(children);

      for (var _i2 = 0; _i2 < keys.length; _i2++) {
        var _component2 = children[keys[_i2]];

        var _componentContext2 = support.getUpdateContext(_component2, context);

        support.update(_component2, _componentContext2);
      }
    }
  }
}
function hitTest(container, context) {
  var child = container.child,
      children = container.children;
  var support = context.support;

  if (children) {
    if (Array.isArray(children)) {
      for (var i = children.length - 1; i >= 0; i--) {
        var component = children[i];
        var componentContext = support.getPointerContext(component, context);
        var result = support.hitTest(component, componentContext);

        if (result) {
          return true;
        }
      }
    } else {
      var keys = Object.keys(children);

      for (var _i3 = keys.length - 1; _i3 >= 0; _i3--) {
        var _component3 = children[keys[_i3]];

        var _componentContext3 = support.getPointerContext(_component3, context);

        var _result = support.hitTest(_component3, _componentContext3);

        if (_result) {
          return true;
        }
      }
    }
  }

  if (child) {
    var childContext = support.getPointerContext(child, context);

    var _result2 = support.hitTest(child, childContext);

    if (_result2) {
      return true;
    }
  }

  return false;
}
function applyContainerExtension(support) {
  support.updateHandlers.set(CONTAINER, update);
  support.renderHandlers.set(CONTAINER, render);
  support.hitTestHandlers.set(CONTAINER, hitTest);
}

/***/ }),

/***/ "../engine/dist/engine/context.js":
/*!****************************************!*\
  !*** ../engine/dist/engine/context.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),

/***/ "../engine/dist/engine/engine.js":
/*!***************************************!*\
  !*** ../engine/dist/engine/engine.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Engine
/* harmony export */ });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ "../engine/dist/components/container.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var EMPTY_MATRIX = _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.empty();

var Engine = /*#__PURE__*/function () {
  function Engine(support) {
    var _this = this;

    _classCallCheck(this, Engine);

    this.width = 400;
    this.height = 300;
    this.fullscreen = true;
    this.updateEnabled = true;
    this.renderEnabled = true;
    this.pointerEnabled = true;
    this.paused = true;
    this.time = -1;
    this.matrix = _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.empty();

    this.internalUpdate = function (time) {
      var deltaTime = _this.time === -1 ? 0 : time - _this.time;
      _this.time = time;

      _this.updateFrame(deltaTime / 1000);
    };

    this.support = support;
    (0,_components_container__WEBPACK_IMPORTED_MODULE_1__.applyContainerExtension)(this.support);
  }

  _createClass(Engine, [{
    key: "update",
    value: function update() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (!this.root) {
        return;
      }

      var base = {
        support: this.support,
        time: time,
        depth: 0
      };
      var context = this.support.getUpdateContext(this.root, base);
      this.support.update(this.root, context);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.root) {
        return;
      }

      this.support.clear();
      var base = {
        support: this.support,
        depth: 0,
        matrix: this.matrix,
        colorTransform: _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.ColorTransform.empty()
      };
      var context = this.support.getRenderContext(this.root, base);
      this.support.render(this.root, context);
    }
  }, {
    key: "updateSize",
    value: function updateSize() {
      var pixelRatio = window.devicePixelRatio;
      var width = this.width,
          height = this.height,
          fullscreen = this.fullscreen;
      var targetWidth = Math.floor(width);
      var targetHeight = Math.floor(height);

      if (fullscreen) {
        targetWidth = window.innerWidth;
        targetHeight = window.innerHeight;
      }

      this.matrix.a = pixelRatio;
      this.matrix.d = pixelRatio;
      this.support.setSize(targetWidth, targetHeight, pixelRatio);
    }
  }, {
    key: "updateFrame",
    value: function updateFrame() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.paused) {
        return;
      }

      this.updateSize();

      if (this.updateEnabled) {
        this.update(time);
      }

      if (this.renderEnabled) {
        this.render();
      }

      this.updateNextFrame();
    }
  }, {
    key: "updateNextFrame",
    value: function updateNextFrame() {
      requestAnimationFrame(this.internalUpdate);
    }
  }, {
    key: "dispatchPointerEvent",
    value: function dispatchPointerEvent(event) {
      if (this.paused) {
        return;
      }

      if (!this.pointerEnabled) {
        return;
      }

      if (!this.root) {
        return;
      }

      var type = event.type,
          id = event.id,
          x = event.x,
          y = event.y;
      var base = {
        support: this.support,
        depth: 0,
        matrix: EMPTY_MATRIX,
        local: {
          x: x,
          y: y
        },
        global: {
          x: x,
          y: y
        },
        type: type,
        id: id
      };
      var context = this.support.getPointerContext(this.root, base);
      this.support.hitTest(this.root, context);
    }
  }, {
    key: "play",
    value: function play() {
      console.log('play');

      if (this.paused) {
        this.time = -1;
        this.paused = false;
        this.updateNextFrame();
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      console.log('pause');
      this.paused = true;
    }
  }]);

  return Engine;
}();



/***/ }),

/***/ "../engine/dist/engine/resources.js":
/*!******************************************!*\
  !*** ../engine/dist/engine/resources.js ***!
  \******************************************/
/*! namespace exports */
/*! export Resources [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Resources": () => /* binding */ Resources
/* harmony export */ });
/* harmony import */ var _utils_debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/debug */ "../engine/dist/utils/debug.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Resources = /*#__PURE__*/function () {
  function Resources() {
    _classCallCheck(this, Resources);

    this.resources = new Map();
    this.resolvers = new Set();
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
    key: "add",
    value: function add(asset, resource) {
      this.resources.set(asset, resource);
    }
  }, {
    key: "remove",
    value: function remove(asset) {
      this.resources["delete"](asset);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.resources.clear();
    }
  }, {
    key: "resolve",
    value: function resolve(asset) {
      var _iterator = _createForOfIteratorHelper(this.resolvers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var resolver = _step.value;
          var resource = resolver(asset);

          if (resource) {
            return resource;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      _utils_debug__WEBPACK_IMPORTED_MODULE_0__.default.warning("Resource not resolved: ".concat(asset));
      return null;
    }
  }]);

  return Resources;
}();

/***/ }),

/***/ "../engine/dist/engine/support.js":
/*!****************************************!*\
  !*** ../engine/dist/engine/support.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Support
/* harmony export */ });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/component */ "../engine/dist/components/component.js");
/* harmony import */ var _interfaces_pointer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/pointer */ "../engine/dist/interfaces/pointer.js");
/* harmony import */ var _interfaces_transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces/transform */ "../engine/dist/interfaces/transform.js");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources */ "../engine/dist/engine/resources.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Support = /*#__PURE__*/function () {
  function Support() {
    _classCallCheck(this, Support);

    this.updateDepth = 64;
    this.updateHandlers = new Map();
    this.renderHandlers = new Map();
    this.hitTestHandlers = new Map();
    this.propertyHandlers = new Map();
    this.resources = new _resources__WEBPACK_IMPORTED_MODULE_4__.Resources();
  }

  _createClass(Support, [{
    key: "update",
    value: function update(component, context) {
      if (context.depth > this.updateDepth) {
        return;
      }

      if (!_components_component__WEBPACK_IMPORTED_MODULE_1__.Component.isEnabled(component)) {
        return;
      }

      this.propertyHandlers.forEach(function (handler, property) {
        if (component[property]) {
          handler(component, context);
        }
      });

      if (component.onUpdate) {
        component.onUpdate(context.time);
      }

      var handler = this.updateHandlers.get(component.type);

      if (handler) {
        handler(component, context);
      }
    }
  }, {
    key: "render",
    value: function render(component, context) {
      if (context.depth > this.updateDepth) {
        return;
      }

      if (!_components_component__WEBPACK_IMPORTED_MODULE_1__.Component.isVisible(component)) {
        return;
      }

      var handler = this.renderHandlers.get(component.type);

      if (handler) {
        handler(component, context);
      }
    }
  }, {
    key: "hitTest",
    value: function hitTest(component, context) {
      if (context.depth > this.updateDepth) {
        return false;
      }

      if (!_components_component__WEBPACK_IMPORTED_MODULE_1__.Component.isVisible(component)) {
        return false;
      }

      if (!_interfaces_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.isPointerEnabled(component)) {
        return false;
      }

      var handler = this.hitTestHandlers.get(component.type);

      if (handler) {
        var _context$local = context.local,
            x = _context$local.x,
            y = _context$local.y;
        var result = handler(component, context);

        if (result) {
          _interfaces_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, context.type, x, y, context.id);
        }

        if (context.type === 'pointerMove') {
          if (result && !component.pointerOver) {
            _interfaces_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, 'pointerOver', x, y, context.id);
          } else if (!result && component.pointerOver) {
            _interfaces_pointer__WEBPACK_IMPORTED_MODULE_2__.Pointer.dispatchEvent(component, 'pointerOut', x, y, context.id);
          }

          component.pointerOver = result;
        }

        return result;
      }

      return false;
    }
  }, {
    key: "getUpdateContext",
    value: function getUpdateContext(component, parent) {
      return {
        time: parent.time,
        depth: parent.depth + 1,
        support: parent.support
      };
    }
  }, {
    key: "getRenderContext",
    value: function getRenderContext(component, parent) {
      var matrix = _interfaces_transform__WEBPACK_IMPORTED_MODULE_3__.Transform.getMatrix(component);
      var colorTransform = _interfaces_transform__WEBPACK_IMPORTED_MODULE_3__.Transform.getColorTransform(component);
      return {
        depth: parent.depth + 1,
        support: parent.support,
        matrix: _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.concat(parent.matrix, matrix),
        colorTransform: _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.ColorTransform.concat(parent.colorTransform, colorTransform)
      };
    }
  }, {
    key: "getPointerContext",
    value: function getPointerContext(component, parent) {
      var matrix = _interfaces_transform__WEBPACK_IMPORTED_MODULE_3__.Transform.getMatrix(component);
      var transformedMatrix = _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.concat(parent.matrix, matrix);
      return {
        depth: parent.depth + 1,
        type: parent.type,
        support: parent.support,
        global: parent.global,
        matrix: transformedMatrix,
        local: _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Matrix.transformInversePoint(transformedMatrix, parent.global)
      };
    }
  }]);

  return Support;
}();



/***/ }),

/***/ "../engine/dist/index.js":
/*!*******************************!*\
  !*** ../engine/dist/index.js ***!
  \*******************************/
/*! namespace exports */
/*! export CONTAINER [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Component [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Container [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Debug [provided] [used in main] [could be renamed] -> ../engine/dist/utils/debug.js .default */
/*! export Engine [provided] [used in main] [could be renamed] -> ../engine/dist/engine/engine.js .default */
/*! export Pivot [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] */
/*! export Pointer [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Resources [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Source [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] */
/*! export Support [provided] [used in main] [could be renamed] -> ../engine/dist/engine/support.js .default */
/*! export Transform [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export applyContainerExtension [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export applyKeyboardSupportExtension [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export applyMouseSupportExtension [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] */
/*! export applyTouchSupportExtension [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export default [not provided] [unused] [could be renamed] */
/*! export hitTest [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export render [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export update [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! other exports [maybe provided (runtime-defined)] [unused] -> ../engine/dist/engine/context.js */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.o, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Source": () => /* reexport safe */ _interfaces_source__WEBPACK_IMPORTED_MODULE_7__.Source,
/* harmony export */   "Pivot": () => /* reexport safe */ _interfaces_pivot__WEBPACK_IMPORTED_MODULE_8__.Pivot,
/* harmony export */   "applyMouseSupportExtension": () => /* reexport safe */ _input_mouse__WEBPACK_IMPORTED_MODULE_12__.applyMouseSupportExtension,
/* harmony export */   "Support": () => /* reexport safe */ _engine_support__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "Engine": () => /* reexport safe */ _engine_engine__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "Debug": () => /* reexport safe */ _utils_debug__WEBPACK_IMPORTED_MODULE_2__.default
/* harmony export */ });
/* harmony import */ var _engine_support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/support */ "../engine/dist/engine/support.js");
/* harmony import */ var _engine_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/engine */ "../engine/dist/engine/engine.js");
/* harmony import */ var _utils_debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/debug */ "../engine/dist/utils/debug.js");
/* harmony import */ var _engine_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/context */ "../engine/dist/engine/context.js");
/* harmony import */ var _engine_context__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_engine_context__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_engine_context__WEBPACK_IMPORTED_MODULE_3__, "Pivot")) __webpack_require__.d(__webpack_exports__, { "Pivot": function() { return _engine_context__WEBPACK_IMPORTED_MODULE_3__.Pivot; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_engine_context__WEBPACK_IMPORTED_MODULE_3__, "Source")) __webpack_require__.d(__webpack_exports__, { "Source": function() { return _engine_context__WEBPACK_IMPORTED_MODULE_3__.Source; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_engine_context__WEBPACK_IMPORTED_MODULE_3__, "applyMouseSupportExtension")) __webpack_require__.d(__webpack_exports__, { "applyMouseSupportExtension": function() { return _engine_context__WEBPACK_IMPORTED_MODULE_3__.applyMouseSupportExtension; } });
/* harmony import */ var _engine_resources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine/resources */ "../engine/dist/engine/resources.js");
/* harmony import */ var _interfaces_pointer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interfaces/pointer */ "../engine/dist/interfaces/pointer.js");
/* harmony import */ var _interfaces_transform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interfaces/transform */ "../engine/dist/interfaces/transform.js");
/* harmony import */ var _interfaces_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interfaces/source */ "../engine/dist/interfaces/source.js");
/* harmony import */ var _interfaces_pivot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interfaces/pivot */ "../engine/dist/interfaces/pivot.js");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/component */ "../engine/dist/components/component.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/container */ "../engine/dist/components/container.js");
/* harmony import */ var _input_keyboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./input/keyboard */ "../engine/dist/input/keyboard.js");
/* harmony import */ var _input_mouse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./input/mouse */ "../engine/dist/input/mouse.js");
/* harmony import */ var _input_touch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./input/touch */ "../engine/dist/input/touch.js");
















/***/ }),

/***/ "../engine/dist/input/keyboard.js":
/*!****************************************!*\
  !*** ../engine/dist/input/keyboard.js ***!
  \****************************************/
/*! namespace exports */
/*! export applyKeyboardSupportExtension [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export applyKeyboardSupportExtension */
function applyKeyboardSupportExtension(engine) {}

/***/ }),

/***/ "../engine/dist/input/mouse.js":
/*!*************************************!*\
  !*** ../engine/dist/input/mouse.js ***!
  \*************************************/
/*! namespace exports */
/*! export applyMouseSupportExtension [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyMouseSupportExtension": () => /* binding */ applyMouseSupportExtension
/* harmony export */ });
function dispatchEvent(engine, event, type) {
  var element = engine.support.element;
  var clientRect = element.getBoundingClientRect();
  var x = event.clientX - clientRect.left - element.clientLeft;
  var y = event.clientY - clientRect.top - element.clientTop;
  engine.dispatchPointerEvent({
    type: type,
    x: x,
    y: y
  });
  event.preventDefault();
}

function applyMouseSupportExtension(engine) {
  var element = engine.support.element;
  element.addEventListener('mousedown', function (event) {
    dispatchEvent(engine, event, 'pointerDown');
  });
  element.addEventListener('mouseup', function (event) {
    dispatchEvent(engine, event, 'pointerUp');
  });
  element.addEventListener('mousemove', function (event) {
    dispatchEvent(engine, event, 'pointerMove');
  });
}

/***/ }),

/***/ "../engine/dist/input/touch.js":
/*!*************************************!*\
  !*** ../engine/dist/input/touch.js ***!
  \*************************************/
/*! namespace exports */
/*! export applyTouchSupportExtension [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export applyTouchSupportExtension */
function dispatchEvent(engine, event, type) {
  var element = engine.support.element;
  var clientRect = element.getBoundingClientRect();

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var x = touch.clientX - clientRect.left - element.clientLeft;
    var y = touch.clientY - clientRect.top - element.clientTop;
    var id = touch.identifier;
    engine.dispatchPointerEvent({
      type: type,
      x: x,
      y: y,
      id: id
    });
  }

  event.preventDefault();
}

function applyTouchSupportExtension(engine) {
  var element = engine.support.element;
  element.addEventListener('touchstart', function (event) {
    dispatchEvent(engine, event, 'pointerDown');
  });
  element.addEventListener('touchend', function (event) {
    dispatchEvent(engine, event, 'pointerUp');
  });
  element.addEventListener('touchmove', function (event) {
    dispatchEvent(engine, event, 'pointerMove');
  });
}

/***/ }),

/***/ "../engine/dist/interfaces/pivot.js":
/*!******************************************!*\
  !*** ../engine/dist/interfaces/pivot.js ***!
  \******************************************/
/*! namespace exports */
/*! export Pivot [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pivot": () => /* binding */ Pivot
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
})(Pivot || (Pivot = {}));

/***/ }),

/***/ "../engine/dist/interfaces/pointer.js":
/*!********************************************!*\
  !*** ../engine/dist/interfaces/pointer.js ***!
  \********************************************/
/*! namespace exports */
/*! export Pointer [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pointer": () => /* binding */ Pointer
/* harmony export */ });
/* harmony import */ var _utils_debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/debug */ "../engine/dist/utils/debug.js");

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
    var handlerName = "on".concat(type.charAt(0).toUpperCase()).concat(type.slice(1));

    if (handlerName) {
      var handler = pointer[handlerName];

      if (handler) {
        var event = {
          type: type,
          x: x,
          y: y,
          id: id
        };
        handler(event);
      }
    } else {
      _utils_debug__WEBPACK_IMPORTED_MODULE_0__.default.warning("Pointer event with type: ".concat(type, " not found"));
    }
  }

  Pointer.dispatchEvent = dispatchEvent;
})(Pointer || (Pointer = {}));

/***/ }),

/***/ "../engine/dist/interfaces/source.js":
/*!*******************************************!*\
  !*** ../engine/dist/interfaces/source.js ***!
  \*******************************************/
/*! namespace exports */
/*! export Source [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Source": () => /* binding */ Source
/* harmony export */ });
var Source;

(function (Source) {
  function getResource(source, context) {
    var src = source.src;

    if (!src) {
      return null;
    }

    return context.support.resources.get(src);
  }

  Source.getResource = getResource;

  function isLoaded(source, context) {
    var resource = getResource(source, context);
    return !!(resource === null || resource === void 0 ? void 0 : resource.loaded);
  }

  Source.isLoaded = isLoaded;
})(Source || (Source = {}));

/***/ }),

/***/ "../engine/dist/interfaces/transform.js":
/*!**********************************************!*\
  !*** ../engine/dist/interfaces/transform.js ***!
  \**********************************************/
/*! namespace exports */
/*! export Transform [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transform": () => /* binding */ Transform
/* harmony export */ });
var Transform;

(function (Transform) {
  function getMatrix(transform) {
    var _ref, _transform$scaleX, _ref2, _transform$scaleY, _transform$x, _transform$y;

    var matrix = transform.matrix;

    if (matrix) {
      var _matrix$a, _matrix$b, _matrix$c, _matrix$d, _matrix$tx, _matrix$ty;

      return {
        a: (_matrix$a = matrix.a) !== null && _matrix$a !== void 0 ? _matrix$a : 1,
        b: (_matrix$b = matrix.b) !== null && _matrix$b !== void 0 ? _matrix$b : 0,
        c: (_matrix$c = matrix.c) !== null && _matrix$c !== void 0 ? _matrix$c : 0,
        d: (_matrix$d = matrix.d) !== null && _matrix$d !== void 0 ? _matrix$d : 1,
        tx: (_matrix$tx = matrix.tx) !== null && _matrix$tx !== void 0 ? _matrix$tx : 0,
        ty: (_matrix$ty = matrix.ty) !== null && _matrix$ty !== void 0 ? _matrix$ty : 0
      };
    }

    var rotation = transform.rotation;
    var scaleX = (_ref = (_transform$scaleX = transform.scaleX) !== null && _transform$scaleX !== void 0 ? _transform$scaleX : transform.scale) !== null && _ref !== void 0 ? _ref : 1;
    var scaleY = (_ref2 = (_transform$scaleY = transform.scaleY) !== null && _transform$scaleY !== void 0 ? _transform$scaleY : transform.scale) !== null && _ref2 !== void 0 ? _ref2 : 1;
    var tx = (_transform$x = transform.x) !== null && _transform$x !== void 0 ? _transform$x : 0;
    var ty = (_transform$y = transform.y) !== null && _transform$y !== void 0 ? _transform$y : 0;

    if (rotation) {
      var cos = Math.cos(rotation);
      var sin = Math.sin(rotation);
      return {
        a: cos * scaleX,
        b: sin * scaleX,
        c: -sin * scaleY,
        d: cos * scaleY,
        tx: tx,
        ty: ty
      };
    }

    return {
      a: scaleX,
      b: 0,
      c: 0,
      d: scaleY,
      tx: tx,
      ty: ty
    };
  }

  Transform.getMatrix = getMatrix;

  function getColorTransform(transform) {
    var _transform$alpha2;

    var colorTransform = transform.colorTransform;

    if (colorTransform) {
      var _colorTransform$alpha, _colorTransform$redMu, _colorTransform$green, _colorTransform$blueM, _colorTransform$alpha2, _colorTransform$redOf, _colorTransform$green2, _colorTransform$blueO;

      return {
        alphaMultiplier: (_colorTransform$alpha = colorTransform.alphaMultiplier) !== null && _colorTransform$alpha !== void 0 ? _colorTransform$alpha : 1,
        redMultiplier: (_colorTransform$redMu = colorTransform.redMultiplier) !== null && _colorTransform$redMu !== void 0 ? _colorTransform$redMu : 1,
        greenMultiplier: (_colorTransform$green = colorTransform.greenMultiplier) !== null && _colorTransform$green !== void 0 ? _colorTransform$green : 1,
        blueMultiplier: (_colorTransform$blueM = colorTransform.blueMultiplier) !== null && _colorTransform$blueM !== void 0 ? _colorTransform$blueM : 1,
        alphaOffset: (_colorTransform$alpha2 = colorTransform.alphaOffset) !== null && _colorTransform$alpha2 !== void 0 ? _colorTransform$alpha2 : 0,
        redOffset: (_colorTransform$redOf = colorTransform.redOffset) !== null && _colorTransform$redOf !== void 0 ? _colorTransform$redOf : 0,
        greenOffset: (_colorTransform$green2 = colorTransform.greenOffset) !== null && _colorTransform$green2 !== void 0 ? _colorTransform$green2 : 0,
        blueOffset: (_colorTransform$blueO = colorTransform.blueOffset) !== null && _colorTransform$blueO !== void 0 ? _colorTransform$blueO : 0
      };
    }

    var tint = transform.tint;

    if (tint) {
      var _transform$alpha;

      var _tint$color = tint.color,
          color = _tint$color === void 0 ? 0 : _tint$color,
          _tint$value = tint.value,
          value = _tint$value === void 0 ? 1 : _tint$value;
      var valueInverted = 1 - value;
      var r = color >> 16 & 0xff;
      var g = color >> 8 & 0xff;
      var b = color & 0xff;
      return {
        alphaMultiplier: (_transform$alpha = transform.alpha) !== null && _transform$alpha !== void 0 ? _transform$alpha : 1,
        redMultiplier: valueInverted,
        greenMultiplier: valueInverted,
        blueMultiplier: valueInverted,
        alphaOffset: 0,
        redOffset: r * value,
        greenOffset: g * value,
        blueOffset: b * value
      };
    }

    return {
      alphaMultiplier: (_transform$alpha2 = transform.alpha) !== null && _transform$alpha2 !== void 0 ? _transform$alpha2 : 1,
      redMultiplier: 1,
      greenMultiplier: 1,
      blueMultiplier: 1,
      alphaOffset: 0,
      redOffset: 0,
      greenOffset: 0,
      blueOffset: 0
    };
  }

  Transform.getColorTransform = getColorTransform;
})(Transform || (Transform = {}));

/***/ }),

/***/ "../engine/dist/utils/debug.js":
/*!*************************************!*\
  !*** ../engine/dist/utils/debug.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Debug
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Debug = /*#__PURE__*/function () {
  function Debug() {
    _classCallCheck(this, Debug);
  }

  _createClass(Debug, null, [{
    key: "log",
    value: function log() {
      var _console;

      (_console = console).log.apply(_console, arguments);
    }
  }, {
    key: "error",
    value: function error() {
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


Debug.errors = new Map();
Debug.warnings = new Map();

/***/ }),

/***/ "../geom/dist/bounds.js":
/*!******************************!*\
  !*** ../geom/dist/bounds.js ***!
  \******************************/
/*! namespace exports */
/*! export Bounds [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bounds": () => /* binding */ Bounds
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

  function isEmpty(bounds) {
    var minX = bounds.minX,
        minY = bounds.minY,
        maxX = bounds.maxX,
        maxY = bounds.maxY;
    return minX === Number.MAX_VALUE && minY === Number.MAX_VALUE && maxX === Number.MIN_VALUE && maxY === Number.MIN_VALUE;
  }

  Bounds.isEmpty = isEmpty;

  function toRectangle(bounds) {
    var minX = bounds.minX,
        minY = bounds.minY,
        maxX = bounds.maxX,
        maxY = bounds.maxY;
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
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

/***/ "../geom/dist/color-transform.js":
/*!***************************************!*\
  !*** ../geom/dist/color-transform.js ***!
  \***************************************/
/*! namespace exports */
/*! export ColorTransform [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorTransform": () => /* binding */ ColorTransform
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

  function concat(ct1, ct0) {
    return {
      alphaMultiplier: ct1.alphaMultiplier * ct0.alphaMultiplier,
      redMultiplier: ct1.redMultiplier * ct0.redMultiplier,
      greenMultiplier: ct1.greenMultiplier * ct0.greenMultiplier,
      blueMultiplier: ct1.blueMultiplier * ct0.blueMultiplier,
      alphaOffset: ct1.alphaMultiplier * ct0.alphaOffset + ct0.alphaOffset,
      redOffset: ct1.redMultiplier * ct0.redOffset + ct0.redOffset,
      greenOffset: ct1.greenMultiplier * ct0.greenOffset + ct0.greenOffset,
      blueOffset: ct1.blueMultiplier * ct0.blueOffset + ct0.blueOffset
    };
  }

  ColorTransform.concat = concat;

  function isDefault(ct) {
    return ct.redMultiplier === 1 && ct.greenMultiplier === 1 && ct.blueMultiplier === 1 && ct.alphaMultiplier === 1 && ct.redOffset === 0 && ct.greenOffset === 0 && ct.blueOffset === 0 && ct.alphaOffset === 0;
  }

  ColorTransform.isDefault = isDefault;
})(ColorTransform || (ColorTransform = {}));

/***/ }),

/***/ "../geom/dist/index.js":
/*!*****************************!*\
  !*** ../geom/dist/index.js ***!
  \*****************************/
/*! namespace exports */
/*! export Bounds [provided] [used in main] [could be renamed] -> ../geom/dist/bounds.js .Bounds */
/*! export ColorTransform [provided] [used in main] [could be renamed] -> ../geom/dist/color-transform.js .ColorTransform */
/*! export Matrix [provided] [used in main] [could be renamed] -> ../geom/dist/matrix.js .Matrix */
/*! export Point [provided] [unused] [could be renamed] -> ../geom/dist/point.js .Point */
/*! export Rectangle [provided] [used in main] [could be renamed] -> ../geom/dist/rectangle.js .Rectangle */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorTransform": () => /* reexport safe */ _color_transform__WEBPACK_IMPORTED_MODULE_0__.ColorTransform,
/* harmony export */   "Bounds": () => /* reexport safe */ _bounds__WEBPACK_IMPORTED_MODULE_1__.Bounds,
/* harmony export */   "Matrix": () => /* reexport safe */ _matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix,
/* harmony export */   "Rectangle": () => /* reexport safe */ _rectangle__WEBPACK_IMPORTED_MODULE_4__.Rectangle
/* harmony export */ });
/* harmony import */ var _color_transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-transform */ "../geom/dist/color-transform.js");
/* harmony import */ var _bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bounds */ "../geom/dist/bounds.js");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matrix */ "../geom/dist/matrix.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point */ "../geom/dist/point.js");
/* harmony import */ var _rectangle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rectangle */ "../geom/dist/rectangle.js");






/***/ }),

/***/ "../geom/dist/matrix.js":
/*!******************************!*\
  !*** ../geom/dist/matrix.js ***!
  \******************************/
/*! namespace exports */
/*! export Matrix [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Matrix": () => /* binding */ Matrix
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

  function concat(matrix0, matrix1) {
    return {
      a: matrix1.a * matrix0.a + matrix1.b * matrix0.c,
      b: matrix1.a * matrix0.b + matrix1.b * matrix0.d,
      c: matrix1.c * matrix0.a + matrix1.d * matrix0.c,
      d: matrix1.c * matrix0.b + matrix1.d * matrix0.d,
      tx: matrix1.tx * matrix0.a + matrix1.ty * matrix0.c + matrix0.tx,
      ty: matrix1.tx * matrix0.b + matrix1.ty * matrix0.d + matrix0.ty
    };
  }

  Matrix.concat = concat;

  function getDeterminant(matrix) {
    return matrix.a * matrix.d - matrix.b * matrix.c;
  }

  Matrix.getDeterminant = getDeterminant;

  function invert(matrix) {
    var determinant = getDeterminant(matrix);

    if (determinant === 0) {
      matrix.a = 0;
      matrix.b = 0;
      matrix.c = 0;
      matrix.d = 0;
      matrix.tx = -matrix.tx;
      matrix.ty = -matrix.ty;
    } else {
      determinant = 1.0 / determinant;
      var d = matrix.d * determinant;
      var a = matrix.a * determinant;
      matrix.a = d;
      matrix.b *= -determinant;
      matrix.c *= -determinant;
      matrix.d = a;
      var tx = -matrix.a * matrix.tx - matrix.c * matrix.ty;
      var ty = -matrix.b * matrix.tx - matrix.d * matrix.ty;
      matrix.tx = tx;
      matrix.ty = ty;
    }
  }

  Matrix.invert = invert;

  function transformPoint(matrix, point) {
    var x = point.x,
        y = point.y;
    return {
      x: x * matrix.a + y * matrix.c + matrix.tx,
      y: x * matrix.b + y * matrix.d + matrix.ty
    };
  }

  Matrix.transformPoint = transformPoint;

  function transformInversePoint(matrix, point) {
    var determinant = getDeterminant(matrix);

    if (determinant === 0) {
      return {
        x: -matrix.tx,
        y: -matrix.ty
      };
    }

    determinant = 1 / determinant;
    var x = point.x,
        y = point.y;
    return {
      x: determinant * (matrix.c * (matrix.ty - y) + matrix.d * (x - matrix.tx)),
      y: determinant * (matrix.a * (y - matrix.ty) + matrix.b * (matrix.tx - x))
    };
  }

  Matrix.transformInversePoint = transformInversePoint;

  function transformBounds(matrix, bounds) {
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

    return {
      x: left,
      y: top,
      width: right - left,
      height: bottom - top
    };
  }

  Matrix.transformBounds = transformBounds;
})(Matrix || (Matrix = {}));

/***/ }),

/***/ "../geom/dist/point.js":
/*!*****************************!*\
  !*** ../geom/dist/point.js ***!
  \*****************************/
/*! namespace exports */
/*! export Point [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export Point */
var Point;

(function (Point) {
  function empty() {
    return {
      x: 0,
      y: 0
    };
  }

  Point.empty = empty;
})(Point || (Point = {}));

/***/ }),

/***/ "../geom/dist/rectangle.js":
/*!*********************************!*\
  !*** ../geom/dist/rectangle.js ***!
  \*********************************/
/*! namespace exports */
/*! export Rectangle [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rectangle": () => /* binding */ Rectangle
/* harmony export */ });
var Rectangle;

(function (Rectangle) {
  function contains(rectangle, point) {
    return rectangle.x < point.x && rectangle.x + rectangle.width > point.x && rectangle.y < point.y && rectangle.y + rectangle.height > point.y;
  }

  Rectangle.contains = contains;

  function isEmpty(rectangle) {
    return !rectangle.width || !rectangle.height;
  }

  Rectangle.isEmpty = isEmpty;
})(Rectangle || (Rectangle = {}));

/***/ }),

/***/ "../image/dist/image-canvas-color.js":
/*!*******************************************!*\
  !*** ../image/dist/image-canvas-color.js ***!
  \*******************************************/
/*! namespace exports */
/*! export applyCanvasImageColorExtension [provided] [used in main] [could be renamed] */
/*! export renderCanvasColor [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyCanvasImageColorExtension": () => /* binding */ applyCanvasImageColorExtension
/* harmony export */ });
/* unused harmony export renderCanvasColor */
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "../image/dist/image.js");



var tempContext;

function isDefaultColorTransform(ct) {
  return ct.redMultiplier === 1 && ct.greenMultiplier === 1 && ct.blueMultiplier === 1 && ct.redOffset === 0 && ct.greenOffset === 0 && ct.blueOffset === 0 && ct.alphaOffset === 0;
}

function updateTempContext(context) {
  if (!tempContext) {
    var canvas = document.createElement('canvas');
    tempContext = canvas.getContext('2d');
  }

  if (tempContext.canvas.width !== context.canvas.width) {
    tempContext.canvas.width = context.canvas.width;
  }

  if (tempContext.canvas.height !== context.canvas.height) {
    tempContext.canvas.height = context.canvas.height;
  }
}

function renderCanvasColor(image, context) {
  var resource = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Source.getResource(image, context);

  if (!(resource === null || resource === void 0 ? void 0 : resource.loaded) || !(resource === null || resource === void 0 ? void 0 : resource.image)) {
    return;
  }

  var colorTransform = context.colorTransform;

  if (colorTransform.alphaMultiplier <= 0) {
    return;
  }

  var support = context.support,
      matrix = context.matrix;
  var context2d = support.context2d;
  var _resource$image = resource.image,
      width = _resource$image.width,
      height = _resource$image.height;
  var x = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(image, width);
  var y = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(image, height);

  if (isDefaultColorTransform(colorTransform)) {
    context2d.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
    context2d.globalAlpha = colorTransform.alphaMultiplier;
    context2d.drawImage(resource.image, x, y);
  } else {
    updateTempContext(context2d);
    var bounds = _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Matrix.transformBounds(matrix, {
      x: x,
      y: y,
      width: width,
      height: height
    });

    if (_e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.isEmpty(bounds)) {
      return;
    }

    tempContext.clearRect(bounds.x, bounds.y, bounds.width, bounds.height);
    tempContext.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
    tempContext.drawImage(resource.image, x, y);
    var imageData = tempContext.getImageData(bounds.x, bounds.y, bounds.width, bounds.height);
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

    tempContext.putImageData(imageData, bounds.x, bounds.y);
    context2d.setTransform();
    context2d.globalAlpha = 1;
    context2d.drawImage(tempContext.canvas, bounds.x, bounds.y, bounds.width, bounds.height, bounds.x, bounds.y, bounds.width, bounds.height);
  }
}
function applyCanvasImageColorExtension(support) {
  (0,_image__WEBPACK_IMPORTED_MODULE_2__.applyImageExtension)(support);
  support.renderHandlers.set(_image__WEBPACK_IMPORTED_MODULE_2__.IMAGE, renderCanvasColor);
}

/***/ }),

/***/ "../image/dist/image-canvas.js":
/*!*************************************!*\
  !*** ../image/dist/image-canvas.js ***!
  \*************************************/
/*! namespace exports */
/*! export applyCanvasImageExtension [provided] [unused] [could be renamed] */
/*! export renderCanvas [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports renderCanvas, applyCanvasImageExtension */
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "../image/dist/image.js");


function renderCanvas(image, context) {
  var resource = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Source.getResource(image, context);

  if (!(resource === null || resource === void 0 ? void 0 : resource.loaded) || !(resource === null || resource === void 0 ? void 0 : resource.image)) {
    return;
  }

  var colorTransform = context.colorTransform;

  if (colorTransform.alphaMultiplier <= 0) {
    return;
  }

  var support = context.support;
  var context2d = support.context2d;
  var matrix = context.matrix;
  context2d.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
  var _resource$image = resource.image,
      width = _resource$image.width,
      height = _resource$image.height;
  var x = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(image, width);
  var y = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(image, height);
  context2d.globalAlpha = colorTransform.alphaMultiplier;
  context2d.drawImage(resource.image, x, y);
}
function applyCanvasImageExtension(support) {
  (0,_image__WEBPACK_IMPORTED_MODULE_1__.applyImageExtension)(support);
  support.renderHandlers.set(_image__WEBPACK_IMPORTED_MODULE_1__.IMAGE, renderCanvas);
}

/***/ }),

/***/ "../image/dist/image.js":
/*!******************************!*\
  !*** ../image/dist/image.js ***!
  \******************************/
/*! namespace exports */
/*! export IMAGE [provided] [used in main] [could be renamed] */
/*! export Image [provided] [unused] [could be renamed] */
/*! export applyImageExtension [provided] [used in main] [could be renamed] */
/*! export hitTest [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMAGE": () => /* binding */ IMAGE,
/* harmony export */   "applyImageExtension": () => /* binding */ applyImageExtension
/* harmony export */ });
/* unused harmony exports Image, hitTest */
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _e2d_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @e2d/resources */ "../resources/dist/index.js");



var IMAGE = 'image';
var Image;

(function (Image) {
  function getBounds(image, context) {
    var src = image.src;

    if (!src) {
      return undefined;
    }

    var support = context.support;
    var resource = support.resources.get(src);

    if (!(resource === null || resource === void 0 ? void 0 : resource.loaded) || !(resource === null || resource === void 0 ? void 0 : resource.image)) {
      return undefined;
    }

    var _resource$image = resource.image,
        width = _resource$image.width,
        height = _resource$image.height;
    var x = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(image, width);
    var y = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(image, height);
    return {
      x: x,
      y: y,
      width: width,
      height: height
    };
  }

  Image.getBounds = getBounds;
})(Image || (Image = {}));

function hitTest(image, context) {
  var local = context.local;
  var bounds = Image.getBounds(image, context);
  return !!bounds && _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.contains(bounds, local);
}
function applyImageExtension(support) {
  support.hitTestHandlers.set(IMAGE, hitTest);
  support.resources.resolvers.add(_e2d_resources__WEBPACK_IMPORTED_MODULE_2__.resolveImage);
}

/***/ }),

/***/ "../image/dist/index.js":
/*!******************************!*\
  !*** ../image/dist/index.js ***!
  \******************************/
/*! namespace exports */
/*! export IMAGE [provided] [used in main] [could be renamed] -> ../image/dist/image.js .IMAGE */
/*! export Image [provided] [unused] [could be renamed] -> ../image/dist/image.js .Image */
/*! export applyCanvasImageColorExtension [provided] [used in main] [could be renamed] -> ../image/dist/image-canvas-color.js .applyCanvasImageColorExtension */
/*! export applyCanvasImageExtension [provided] [unused] [could be renamed] -> ../image/dist/image-canvas.js .applyCanvasImageExtension */
/*! export applyImageExtension [provided] [used in main] [could be renamed] -> ../image/dist/image.js .applyImageExtension */
/*! export hitTest [provided] [unused] [could be renamed] -> ../image/dist/image.js .hitTest */
/*! export renderCanvas [provided] [unused] [could be renamed] -> ../image/dist/image-canvas.js .renderCanvas */
/*! export renderCanvasColor [provided] [unused] [could be renamed] -> ../image/dist/image-canvas-color.js .renderCanvasColor */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMAGE": () => /* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_0__.IMAGE,
/* harmony export */   "applyImageExtension": () => /* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_0__.applyImageExtension,
/* harmony export */   "applyCanvasImageColorExtension": () => /* reexport safe */ _image_canvas_color__WEBPACK_IMPORTED_MODULE_2__.applyCanvasImageColorExtension
/* harmony export */ });
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image */ "../image/dist/image.js");
/* harmony import */ var _image_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-canvas */ "../image/dist/image-canvas.js");
/* harmony import */ var _image_canvas_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-canvas-color */ "../image/dist/image-canvas-color.js");




/***/ }),

/***/ "../resources/dist/image.js":
/*!**********************************!*\
  !*** ../resources/dist/image.js ***!
  \**********************************/
/*! namespace exports */
/*! export resolveImage [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveImage": () => /* binding */ resolveImage
/* harmony export */ });
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");

function resolveImage(asset) {
  var extension = asset.split('.').pop();

  switch (extension) {
    case 'png':
    case 'jpg':
      var resource = {
        asset: asset,
        loaded: false,
        image: null
      };
      var image = document.createElement('img');
      image.src = asset;

      image.onload = function () {
        console.log("image loaded: ".concat(asset));
        resource.image = image;
        resource.loaded = true;
      };

      image.onerror = function (e) {
        return _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Debug.warning('image load error', e);
      };

      return resource;

    default:
      break;
  }

  return null;
}

/***/ }),

/***/ "../resources/dist/index.js":
/*!**********************************!*\
  !*** ../resources/dist/index.js ***!
  \**********************************/
/*! namespace exports */
/*! export resolveImage [provided] [used in main] [could be renamed] -> ../resources/dist/image.js .resolveImage */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveImage": () => /* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_0__.resolveImage
/* harmony export */ });
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image */ "../resources/dist/image.js");


/***/ }),

/***/ "../shape/dist/data/data.js":
/*!**********************************!*\
  !*** ../shape/dist/data/data.js ***!
  \**********************************/
/*! namespace exports */
/*! export EllipseData [provided] [unused] [could be renamed] */
/*! export GraphicsData [provided] [used in main] [could be renamed] */
/*! export PathData [provided] [unused] [could be renamed] */
/*! export RectangleData [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphicsData": () => /* binding */ GraphicsData
/* harmony export */ });
/* unused harmony exports RectangleData, EllipseData, PathData */
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ "../shape/dist/data/path.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string */ "../shape/dist/data/string.js");



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
    _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, x, y);
    _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, x + width, y + height);
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
        radius = data.radius,
        _data$radiusX = data.radiusX,
        radiusX = _data$radiusX === void 0 ? 0 : _data$radiusX,
        _data$radiusY = data.radiusY,
        radiusY = _data$radiusY === void 0 ? 0 : _data$radiusY;
    var rx = radius !== null && radius !== void 0 ? radius : radiusX;
    var ry = radius !== null && radius !== void 0 ? radius : radiusY;
    _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, x - rx, y - ry);
    _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, x + rx, y + ry);
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

/***/ "../shape/dist/data/path.js":
/*!**********************************!*\
  !*** ../shape/dist/data/path.js ***!
  \**********************************/
/*! namespace exports */
/*! export PathCommand [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PathCommand": () => /* binding */ PathCommand
/* harmony export */ });
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");

var PathCommand;

(function (PathCommand) {
  function calculateBounds(path, bounds) {
    var _moveTo$x, _moveTo$y, _curveTo$cx, _curveTo$cy, _curveTo$x, _curveTo$y, _cubicCurveTo$cx, _cubicCurveTo$cy, _cubicCurveTo$sx, _cubicCurveTo$sy, _cubicCurveTo$x, _cubicCurveTo$y;

    var type = path.type;

    switch (type) {
      case 'moveTo':
      case 'lineTo':
        var moveTo = path;
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_moveTo$x = moveTo.x) !== null && _moveTo$x !== void 0 ? _moveTo$x : 0, (_moveTo$y = moveTo.y) !== null && _moveTo$y !== void 0 ? _moveTo$y : 0);
        break;

      case 'curveTo':
        var curveTo = path;
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_curveTo$cx = curveTo.cx) !== null && _curveTo$cx !== void 0 ? _curveTo$cx : 0, (_curveTo$cy = curveTo.cy) !== null && _curveTo$cy !== void 0 ? _curveTo$cy : 0);
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_curveTo$x = curveTo.x) !== null && _curveTo$x !== void 0 ? _curveTo$x : 0, (_curveTo$y = curveTo.y) !== null && _curveTo$y !== void 0 ? _curveTo$y : 0);
        break;

      case 'cubicCurveTo':
        var cubicCurveTo = path;
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_cubicCurveTo$cx = cubicCurveTo.cx) !== null && _cubicCurveTo$cx !== void 0 ? _cubicCurveTo$cx : 0, (_cubicCurveTo$cy = cubicCurveTo.cy) !== null && _cubicCurveTo$cy !== void 0 ? _cubicCurveTo$cy : 0);
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_cubicCurveTo$sx = cubicCurveTo.sx) !== null && _cubicCurveTo$sx !== void 0 ? _cubicCurveTo$sx : 0, (_cubicCurveTo$sy = cubicCurveTo.sy) !== null && _cubicCurveTo$sy !== void 0 ? _cubicCurveTo$sy : 0);
        _e2d_geom__WEBPACK_IMPORTED_MODULE_0__.Bounds.test(bounds, (_cubicCurveTo$x = cubicCurveTo.x) !== null && _cubicCurveTo$x !== void 0 ? _cubicCurveTo$x : 0, (_cubicCurveTo$y = cubicCurveTo.y) !== null && _cubicCurveTo$y !== void 0 ? _cubicCurveTo$y : 0);
        break;

      default:
        break;
    }
  }

  PathCommand.calculateBounds = calculateBounds;
})(PathCommand || (PathCommand = {}));

/***/ }),

/***/ "../shape/dist/data/string.js":
/*!************************************!*\
  !*** ../shape/dist/data/string.js ***!
  \************************************/
/*! namespace exports */
/*! export GraphicsString [provided] [used in main] [could be renamed] */
/*! export GraphicsStringReader [provided] [unused] [could be renamed] */
/*! export GraphicsStringStream [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphicsString": () => /* binding */ GraphicsString
/* harmony export */ });
/* unused harmony exports GraphicsStringStream, GraphicsStringReader */
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path */ "../shape/dist/data/path.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var TEST_COMMAND = /[MmLlHhVvCcSsQqTtAaZz]/;
var TEST_SPACE = /[\s,]/;
var TEST_NUMBER = /[-+.\d]/;
var GraphicsStringStream = /*#__PURE__*/function () {
  function GraphicsStringStream() {
    _classCallCheck(this, GraphicsStringStream);

    this.path = '';
    this.position = 0;
    this.command = null;
    this.buffer = [];
    this.size = 0;
  }

  _createClass(GraphicsStringStream, [{
    key: "setPath",
    value: function setPath(path) {
      this.path = path;
      this.position = 0;
    }
  }, {
    key: "hasData",
    value: function hasData() {
      return this.position < this.path.length;
    }
  }, {
    key: "getCommand",
    value: function getCommand() {
      return this.command;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.size;
    }
  }, {
    key: "getBuffer",
    value: function getBuffer() {
      return this.buffer;
    }
  }, {
    key: "readNext",
    value: function readNext() {
      this.readCommand();
      this.readNumbers();
    }
  }, {
    key: "readCommand",
    value: function readCommand() {
      this.command = null;

      while (this.position < this.path.length) {
        var command = this.path[this.position];

        if (TEST_COMMAND.test(command)) {
          this.command = command;
        }

        this.position++;
      }
    }
  }, {
    key: "readNumbers",
    value: function readNumbers() {
      this.size = 0;
      var number = '';

      while (this.position < this.path.length) {
        var _char = this.path[this.position];

        if (TEST_NUMBER.test(_char)) {
          number += _char;
        } else if (TEST_SPACE.test(_char)) {
          this.buffer[this.size++] = parseFloat(number);
          number = '';
        } else if (TEST_COMMAND.test(_char)) {
          break;
        }

        this.position++;
      }

      if (number) {
        this.buffer[this.size++] = parseFloat(number);
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
  }

  _createClass(GraphicsStringReader, [{
    key: "setPath",
    value: function setPath(path) {
      this.stream.setPath(path);
      this.lastX = 0;
      this.lastY = 0;
      this.commandExists = false;
    }
  }, {
    key: "hasData",
    value: function hasData() {
      return this.stream.hasData();
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
          x0 = _buffer[0],
          y0 = _buffer[1],
          x1 = _buffer[2],
          y1 = _buffer[3],
          x2 = _buffer[4],
          y2 = _buffer[5];

      var cx = 0;
      var cy = 0;

      switch (command) {
        case 'M':
          {
            this.command.type = 'moveTo';
            var moveTo = this.command;
            moveTo.x = x0;
            moveTo.y = y0;
            this.lastX = moveTo.x;
            this.lastY = moveTo.y;
          }
          break;

        case 'm':
          {
            this.command.type = 'moveTo';
            var _moveTo = this.command;
            _moveTo.x = x0 + this.lastX;
            _moveTo.y = y0 + this.lastY;
            this.lastX = _moveTo.x;
            this.lastY = _moveTo.y;
          }
          break;

        case 'L':
          {
            this.command.type = 'lineTo';
            var lineTo = this.command;
            lineTo.x = x0;
            lineTo.y = y0;
            this.lastX = lineTo.x;
            this.lastY = lineTo.y;
          }
          break;

        case 'l':
          {
            this.command.type = 'lineTo';
            var _lineTo = this.command;
            _lineTo.x = x0 + this.lastX;
            _lineTo.y = y0 + this.lastY;
            this.lastX = _lineTo.x;
            this.lastY = _lineTo.y;
          }
          break;

        case 'H':
          {
            this.command.type = 'lineTo';
            var _lineTo2 = this.command;
            _lineTo2.x = x0;
            _lineTo2.y = this.lastY;
            this.lastX = _lineTo2.x;
          }
          break;

        case 'h':
          {
            this.command.type = 'lineTo';
            var _lineTo3 = this.command;
            _lineTo3.x = x0 + this.lastX;
            _lineTo3.y = this.lastY;
            this.lastX = _lineTo3.x;
          }
          break;

        case 'V':
          {
            this.command.type = 'lineTo';
            var _lineTo4 = this.command;
            _lineTo4.x = this.lastX;
            _lineTo4.y = x0;
            this.lastY = _lineTo4.y;
          }
          break;

        case 'v':
          {
            this.command.type = 'lineTo';
            var _lineTo5 = this.command;
            _lineTo5.x = this.lastX;
            _lineTo5.y = x0 + this.lastY;
            this.lastY = _lineTo5.y;
          }
          break;

        case 'C':
          {
            this.command.type = 'cubicCurveTo';
            var cubicCurveTo = this.command;
            cubicCurveTo.cx = x0;
            cubicCurveTo.cy = y0;
            cubicCurveTo.sx = x1;
            cubicCurveTo.sy = y1;
            cubicCurveTo.x = x2;
            cubicCurveTo.y = y2;
            cx = cubicCurveTo.x - (cubicCurveTo.sx - cubicCurveTo.x);
            cy = cubicCurveTo.y - (cubicCurveTo.sy - cubicCurveTo.y);
            this.lastX = cubicCurveTo.x;
            this.lastY = cubicCurveTo.y;
          }
          break;

        case 'c':
          {
            this.command.type = 'cubicCurveTo';
            var _cubicCurveTo = this.command;
            _cubicCurveTo.cx = x0 + this.lastX;
            _cubicCurveTo.cy = y0 + this.lastY;
            _cubicCurveTo.sx = x1 + this.lastX;
            _cubicCurveTo.sy = y1 + this.lastY;
            _cubicCurveTo.x = x2 + this.lastX;
            _cubicCurveTo.y = y2 + this.lastY;
            cx = _cubicCurveTo.x - (_cubicCurveTo.sx - _cubicCurveTo.x);
            cy = _cubicCurveTo.y - (_cubicCurveTo.sy - _cubicCurveTo.y);
            this.lastX = _cubicCurveTo.x;
            this.lastY = _cubicCurveTo.y;
          }
          break;

        case 'S':
          {
            this.command.type = 'cubicCurveTo';
            var _cubicCurveTo2 = this.command;
            _cubicCurveTo2.cx = cx;
            _cubicCurveTo2.cy = cy;
            _cubicCurveTo2.sx = x0;
            _cubicCurveTo2.sy = y0;
            _cubicCurveTo2.x = x1;
            _cubicCurveTo2.y = y1;
            cx = _cubicCurveTo2.x - (_cubicCurveTo2.sx - _cubicCurveTo2.x);
            cy = _cubicCurveTo2.y - (_cubicCurveTo2.sy - _cubicCurveTo2.y);
            this.lastX = _cubicCurveTo2.x;
            this.lastY = _cubicCurveTo2.y;
          }
          break;

        case 's':
          {
            this.command.type = 'cubicCurveTo';
            var _cubicCurveTo3 = this.command;
            _cubicCurveTo3.cx = cx;
            _cubicCurveTo3.cy = cy;
            _cubicCurveTo3.sx = x0 + this.lastX;
            _cubicCurveTo3.sy = y0 + this.lastY;
            _cubicCurveTo3.x = x1 + this.lastX;
            _cubicCurveTo3.y = y1 + this.lastY;
            cx = _cubicCurveTo3.x - (_cubicCurveTo3.sx - _cubicCurveTo3.x);
            cy = _cubicCurveTo3.y - (_cubicCurveTo3.sy - _cubicCurveTo3.y);
            this.lastX = _cubicCurveTo3.x;
            this.lastY = _cubicCurveTo3.y;
          }
          break;

        case 'Q':
          {
            this.command.type = 'curveTo';
            var curveTo = this.command;
            curveTo.cx = x0;
            curveTo.cy = y0;
            curveTo.x = x1;
            curveTo.y = y1;
            cx = curveTo.x - (curveTo.cx - curveTo.x);
            cy = curveTo.y - (curveTo.cy - curveTo.y);
            this.lastX = curveTo.x;
            this.lastY = curveTo.y;
          }
          break;

        case 'q':
          {
            this.command.type = 'curveTo';
            var _curveTo = this.command;
            _curveTo.cx = x0 + this.lastX;
            _curveTo.cy = y0 + this.lastY;
            _curveTo.x = x1 + this.lastX;
            _curveTo.y = y1 + this.lastY;
            cx = _curveTo.x - (_curveTo.cx - _curveTo.x);
            cy = _curveTo.y - (_curveTo.cy - _curveTo.y);
            this.lastX = _curveTo.x;
            this.lastY = _curveTo.y;
          }
          break;

        case 'T':
          {
            this.command.type = 'curveTo';
            var _curveTo2 = this.command;
            _curveTo2.cx = cx;
            _curveTo2.cy = cy;
            _curveTo2.x = x0;
            _curveTo2.y = y0;
            cx = _curveTo2.x - (_curveTo2.cx - _curveTo2.x);
            cy = _curveTo2.y - (_curveTo2.cy - _curveTo2.y);
            this.lastX = _curveTo2.x;
            this.lastY = _curveTo2.y;
          }
          break;

        case 't':
          {
            this.command.type = 'curveTo';
            var _curveTo3 = this.command;
            _curveTo3.cx = cx;
            _curveTo3.cy = cy;
            _curveTo3.x = x0 + this.lastX;
            _curveTo3.y = y0 + this.lastY;
            cx = _curveTo3.x - (_curveTo3.cx - _curveTo3.x);
            cy = _curveTo3.y - (_curveTo3.cy - _curveTo3.y);
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

    while (reader.hasData()) {
      reader.readNext();
      var command = reader.getCommand();

      if (command) {
        _path__WEBPACK_IMPORTED_MODULE_0__.PathCommand.calculateBounds(command, bounds);
      }
    }
  }

  GraphicsString.calculateBounds = calculateBounds;
})(GraphicsString || (GraphicsString = {}));

/***/ }),

/***/ "../shape/dist/data/style.js":
/*!***********************************!*\
  !*** ../shape/dist/data/style.js ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/***/ }),

/***/ "../shape/dist/graphics.js":
/*!*********************************!*\
  !*** ../shape/dist/graphics.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Graphics
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

/***/ "../shape/dist/index.js":
/*!******************************!*\
  !*** ../shape/dist/index.js ***!
  \******************************/
/*! namespace exports */
/*! export EllipseData [provided] [unused] [could be renamed] -> ../shape/dist/data/data.js .EllipseData */
/*! export GraphicsData [provided] [unused] [could be renamed] -> ../shape/dist/data/data.js .GraphicsData */
/*! export GraphicsString [provided] [unused] [could be renamed] -> ../shape/dist/data/string.js .GraphicsString */
/*! export GraphicsStringReader [provided] [unused] [could be renamed] -> ../shape/dist/data/string.js .GraphicsStringReader */
/*! export GraphicsStringStream [provided] [unused] [could be renamed] -> ../shape/dist/data/string.js .GraphicsStringStream */
/*! export PathCommand [provided] [unused] [could be renamed] -> ../shape/dist/data/path.js .PathCommand */
/*! export PathData [provided] [unused] [could be renamed] -> ../shape/dist/data/data.js .PathData */
/*! export RectangleData [provided] [unused] [could be renamed] -> ../shape/dist/data/data.js .RectangleData */
/*! export SHAPE [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export Shape [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export applyCanvasShapeExtension [maybe provided (runtime-defined)] [used in main] [provision prevents renaming] */
/*! export applyShapeExtension [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export default [not provided] [unused] [could be renamed] */
/*! export hitTest [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! export renderShape [maybe provided (runtime-defined)] [unused] [provision prevents renaming] */
/*! other exports [maybe provided (runtime-defined)] [unused] -> ../shape/dist/data/style.js */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.o, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyCanvasShapeExtension": () => /* reexport safe */ _shape_canvas__WEBPACK_IMPORTED_MODULE_6__.applyCanvasShapeExtension
/* harmony export */ });
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/data */ "../shape/dist/data/data.js");
/* harmony import */ var _data_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/path */ "../shape/dist/data/path.js");
/* harmony import */ var _data_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/string */ "../shape/dist/data/string.js");
/* harmony import */ var _data_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/style */ "../shape/dist/data/style.js");
/* harmony import */ var _data_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_data_style__WEBPACK_IMPORTED_MODULE_3__, "applyCanvasShapeExtension")) __webpack_require__.d(__webpack_exports__, { "applyCanvasShapeExtension": function() { return _data_style__WEBPACK_IMPORTED_MODULE_3__.applyCanvasShapeExtension; } });
/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphics */ "../shape/dist/graphics.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shape */ "../shape/dist/shape.js");
/* harmony import */ var _shape_canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shape-canvas */ "../shape/dist/shape-canvas.js");








/***/ }),

/***/ "../shape/dist/shape-canvas.js":
/*!*************************************!*\
  !*** ../shape/dist/shape-canvas.js ***!
  \*************************************/
/*! namespace exports */
/*! export applyCanvasShapeExtension [provided] [used in main] [could be renamed] */
/*! export renderShape [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyCanvasShapeExtension": () => /* binding */ applyCanvasShapeExtension
/* harmony export */ });
/* unused harmony export renderShape */
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "../shape/dist/shape.js");

function renderShape(shape, context) {}
function applyCanvasShapeExtension(support) {
  (0,_shape__WEBPACK_IMPORTED_MODULE_0__.applyShapeExtension)(support);
  support.renderHandlers.set(_shape__WEBPACK_IMPORTED_MODULE_0__.SHAPE, renderShape);
}

/***/ }),

/***/ "../shape/dist/shape.js":
/*!******************************!*\
  !*** ../shape/dist/shape.js ***!
  \******************************/
/*! namespace exports */
/*! export SHAPE [provided] [used in main] [could be renamed] */
/*! export Shape [provided] [unused] [could be renamed] */
/*! export applyShapeExtension [provided] [used in main] [could be renamed] */
/*! export hitTest [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SHAPE": () => /* binding */ SHAPE,
/* harmony export */   "applyShapeExtension": () => /* binding */ applyShapeExtension
/* harmony export */ });
/* unused harmony exports Shape, hitTest */
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _e2d_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @e2d/resources */ "../resources/dist/index.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/data */ "../shape/dist/data/data.js");
/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphics */ "../shape/dist/graphics.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






var SHAPE = 'shape';
var Shape;

(function (Shape) {
  function getGraphics(shape) {
    return new _graphics__WEBPACK_IMPORTED_MODULE_4__.default(shape);
  }

  Shape.getGraphics = getGraphics;

  function getBounds(shape) {
    var data = shape.data;

    if (!data) {
      return undefined;
    }

    var bounds = _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Bounds.empty();

    if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        _data_data__WEBPACK_IMPORTED_MODULE_3__.GraphicsData.calculateBounds(data[i], bounds);
      }
    } else if (_typeof(data) === 'object') {
      _data_data__WEBPACK_IMPORTED_MODULE_3__.GraphicsData.calculateBounds(data, bounds);
    } else {
      return undefined;
    }

    if (_e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Bounds.isEmpty(bounds)) {
      return undefined;
    }

    var width = bounds.maxX - bounds.minX;
    var height = bounds.maxY - bounds.minY;
    var x = bounds.minX + _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(shape, width);
    var y = bounds.minY + _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(shape, height);
    return {
      x: x,
      y: y,
      width: width,
      height: height
    };
  }

  Shape.getBounds = getBounds;
})(Shape || (Shape = {}));

function hitTest(shape, context) {
  var local = context.local;
  var bounds = Shape.getBounds(shape);
  return !!bounds && _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.contains(bounds, local);
}
function applyShapeExtension(support) {
  support.hitTestHandlers.set(SHAPE, hitTest);
  support.resources.resolvers.add(_e2d_resources__WEBPACK_IMPORTED_MODULE_2__.resolveImage);
}

/***/ }),

/***/ "../text/dist/font.js":
/*!****************************!*\
  !*** ../text/dist/font.js ***!
  \****************************/
/*! namespace exports */
/*! export EM [provided] [unused] [could be renamed] */
/*! export getAdvance [provided] [used in main] [could be renamed] */
/*! export getCharWidth [provided] [unused] [could be renamed] */
/*! export getFont [provided] [used in main] [could be renamed] */
/*! export getKerning [provided] [unused] [could be renamed] */
/*! export getLineWidth [provided] [used in main] [could be renamed] */
/*! export getStyleFont [provided] [used in main] [could be renamed] */
/*! export getTextHeight [provided] [used in main] [could be renamed] */
/*! export getTextWidth [provided] [used in main] [could be renamed] */
/*! export measureText [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStyleFont": () => /* binding */ getStyleFont,
/* harmony export */   "getAdvance": () => /* binding */ getAdvance,
/* harmony export */   "getFont": () => /* binding */ getFont,
/* harmony export */   "getLineWidth": () => /* binding */ getLineWidth,
/* harmony export */   "getTextWidth": () => /* binding */ getTextWidth,
/* harmony export */   "getTextHeight": () => /* binding */ getTextHeight
/* harmony export */ });
/* unused harmony exports EM, measureText, getCharWidth, getKerning */
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
var EM = 1024;
var fonts = new Map();
function getStyleFont(font, size) {
  return "".concat(size, "px ").concat(font);
}
function measureText(font, size, text) {
  context.font = getStyleFont(font, size);
  return context.measureText(text).width;
}
function getCharWidth(font, _char) {
  var width = font.widths.get(_char);

  if (!width) {
    width = measureText(font.name, EM, _char);
    font.widths.set(_char, width);
  }

  return width;
}
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
function getAdvance(font, size, first, second) {
  var scale = size / EM;
  var width = getCharWidth(font, first);

  if (!second) {
    return width * scale;
  }

  var kerning = getKerning(font, first, second);
  return kerning * scale;
}
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
function getLineWidth(font, format, line) {
  var width = 0;

  for (var i = 0; i < line.length; i++) {
    var first = line.charAt(i);
    var second = line.charAt(i + 1);
    var advance = getAdvance(font, format.size, first, second);
    width += advance;
  }

  if (format.letterSpacing && line.length > 1) {
    width += format.letterSpacing * (line.length - 1);
  }

  return width;
}
function getTextWidth(font, format, lines) {
  var width = 0;

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var lineWidth = getLineWidth(font, format, line);

    if (width < lineWidth) {
      width = lineWidth;
    }
  }

  return width;
}
function getTextHeight(format, lines) {
  var height = format.size * lines.length;

  if (format.leading && lines.length > 1) {
    height += format.leading * (lines.length - 1);
  }

  return height;
}

/***/ }),

/***/ "../text/dist/format.js":
/*!******************************!*\
  !*** ../text/dist/format.js ***!
  \******************************/
/*! namespace exports */
/*! export defaultTextFormat [provided] [unused] [could be renamed] */
/*! export getAlingValue [provided] [used in main] [could be renamed] */
/*! export getValidTextFormat [provided] [used in main] [could be renamed] */
/*! export getVerticalAlingValue [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getValidTextFormat": () => /* binding */ getValidTextFormat,
/* harmony export */   "getAlingValue": () => /* binding */ getAlingValue,
/* harmony export */   "getVerticalAlingValue": () => /* binding */ getVerticalAlingValue
/* harmony export */ });
/* unused harmony export defaultTextFormat */
var defaultTextFormat = {
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
var format = {};
function getValidTextFormat(textFormat) {
  var _textFormat$font, _textFormat$size, _textFormat$color, _textFormat$alpha, _textFormat$bold, _textFormat$italic, _textFormat$underline, _textFormat$letterSpa, _textFormat$leading, _textFormat$align, _textFormat$verticalA;

  format.font = (_textFormat$font = textFormat === null || textFormat === void 0 ? void 0 : textFormat.font) !== null && _textFormat$font !== void 0 ? _textFormat$font : defaultTextFormat.font;
  format.size = (_textFormat$size = textFormat === null || textFormat === void 0 ? void 0 : textFormat.size) !== null && _textFormat$size !== void 0 ? _textFormat$size : defaultTextFormat.size;
  format.color = (_textFormat$color = textFormat === null || textFormat === void 0 ? void 0 : textFormat.color) !== null && _textFormat$color !== void 0 ? _textFormat$color : defaultTextFormat.color;
  format.alpha = (_textFormat$alpha = textFormat === null || textFormat === void 0 ? void 0 : textFormat.alpha) !== null && _textFormat$alpha !== void 0 ? _textFormat$alpha : defaultTextFormat.alpha;
  format.bold = (_textFormat$bold = textFormat === null || textFormat === void 0 ? void 0 : textFormat.bold) !== null && _textFormat$bold !== void 0 ? _textFormat$bold : defaultTextFormat.bold;
  format.italic = (_textFormat$italic = textFormat === null || textFormat === void 0 ? void 0 : textFormat.italic) !== null && _textFormat$italic !== void 0 ? _textFormat$italic : defaultTextFormat.italic;
  format.underline = (_textFormat$underline = textFormat === null || textFormat === void 0 ? void 0 : textFormat.underline) !== null && _textFormat$underline !== void 0 ? _textFormat$underline : defaultTextFormat.underline;
  format.letterSpacing = (_textFormat$letterSpa = textFormat === null || textFormat === void 0 ? void 0 : textFormat.letterSpacing) !== null && _textFormat$letterSpa !== void 0 ? _textFormat$letterSpa : defaultTextFormat.letterSpacing;
  format.leading = (_textFormat$leading = textFormat === null || textFormat === void 0 ? void 0 : textFormat.leading) !== null && _textFormat$leading !== void 0 ? _textFormat$leading : defaultTextFormat.leading;
  format.align = (_textFormat$align = textFormat === null || textFormat === void 0 ? void 0 : textFormat.align) !== null && _textFormat$align !== void 0 ? _textFormat$align : defaultTextFormat.align;
  format.verticalAlign = (_textFormat$verticalA = textFormat === null || textFormat === void 0 ? void 0 : textFormat.verticalAlign) !== null && _textFormat$verticalA !== void 0 ? _textFormat$verticalA : defaultTextFormat.verticalAlign;
  return format;
}
function getAlingValue(align) {
  switch (align) {
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
function getVerticalAlingValue(align) {
  switch (align) {
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

/***/ }),

/***/ "../text/dist/index.js":
/*!*****************************!*\
  !*** ../text/dist/index.js ***!
  \*****************************/
/*! namespace exports */
/*! export EM [provided] [unused] [could be renamed] -> ../text/dist/font.js .EM */
/*! export TEXT [provided] [unused] [could be renamed] -> ../text/dist/text.js .TEXT */
/*! export Text [provided] [unused] [could be renamed] -> ../text/dist/text.js .Text */
/*! export applyCanvasTextExtension [provided] [used in main] [could be renamed] -> ../text/dist/text-canvas.js .applyCanvasTextExtension */
/*! export applyTextExtension [provided] [unused] [could be renamed] -> ../text/dist/text.js .applyTextExtension */
/*! export defaultTextFormat [provided] [unused] [could be renamed] -> ../text/dist/format.js .defaultTextFormat */
/*! export getAdvance [provided] [unused] [could be renamed] -> ../text/dist/font.js .getAdvance */
/*! export getAlingValue [provided] [unused] [could be renamed] -> ../text/dist/format.js .getAlingValue */
/*! export getCharWidth [provided] [unused] [could be renamed] -> ../text/dist/font.js .getCharWidth */
/*! export getFont [provided] [unused] [could be renamed] -> ../text/dist/font.js .getFont */
/*! export getKerning [provided] [unused] [could be renamed] -> ../text/dist/font.js .getKerning */
/*! export getLineWidth [provided] [unused] [could be renamed] -> ../text/dist/font.js .getLineWidth */
/*! export getStyleFont [provided] [unused] [could be renamed] -> ../text/dist/font.js .getStyleFont */
/*! export getTextHeight [provided] [unused] [could be renamed] -> ../text/dist/font.js .getTextHeight */
/*! export getTextWidth [provided] [unused] [could be renamed] -> ../text/dist/font.js .getTextWidth */
/*! export getValidTextFormat [provided] [unused] [could be renamed] -> ../text/dist/format.js .getValidTextFormat */
/*! export getVerticalAlingValue [provided] [unused] [could be renamed] -> ../text/dist/format.js .getVerticalAlingValue */
/*! export hitTest [provided] [unused] [could be renamed] -> ../text/dist/text.js .hitTest */
/*! export measureText [provided] [unused] [could be renamed] -> ../text/dist/font.js .measureText */
/*! export renderCanvasText [provided] [unused] [could be renamed] -> ../text/dist/text-canvas.js .renderCanvasText */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyCanvasTextExtension": () => /* reexport safe */ _text_canvas__WEBPACK_IMPORTED_MODULE_3__.applyCanvasTextExtension
/* harmony export */ });
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ "../text/dist/text.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format */ "../text/dist/format.js");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./font */ "../text/dist/font.js");
/* harmony import */ var _text_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-canvas */ "../text/dist/text-canvas.js");





/***/ }),

/***/ "../text/dist/text-canvas.js":
/*!***********************************!*\
  !*** ../text/dist/text-canvas.js ***!
  \***********************************/
/*! namespace exports */
/*! export applyCanvasTextExtension [provided] [used in main] [could be renamed] */
/*! export renderCanvasText [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyCanvasTextExtension": () => /* binding */ applyCanvasTextExtension
/* harmony export */ });
/* unused harmony export renderCanvasText */
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
/* harmony import */ var _e2d_canvas_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/canvas-support */ "../canvas-support/dist/index.js");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./font */ "../text/dist/font.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text */ "../text/dist/text.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format */ "../text/dist/format.js");





function renderCanvasText(component, context) {
  var text = component.text;

  if (!text) {
    return;
  }

  var matrix = context.matrix,
      colorTransform = context.colorTransform;

  if (colorTransform.alphaMultiplier <= 0) {
    return;
  }

  var lines = text.split('\n');
  var width = component.width,
      height = component.height,
      textFormat = component.textFormat,
      border = component.border,
      background = component.background;
  var format = (0,_format__WEBPACK_IMPORTED_MODULE_4__.getValidTextFormat)(textFormat);
  var formatSize = format.size;
  var formatLetterSpacing = format.letterSpacing;
  var formatLeading = format.leading;
  var font = (0,_font__WEBPACK_IMPORTED_MODULE_2__.getFont)(format.font);
  var support = context.support;
  var context2d = support.context2d;
  var textWidth = (0,_font__WEBPACK_IMPORTED_MODULE_2__.getTextWidth)(font, format, lines);
  var textHeight = (0,_font__WEBPACK_IMPORTED_MODULE_2__.getTextHeight)(format, lines);
  var realWidth = width !== null && width !== void 0 ? width : textWidth;
  var realHeight = height !== null && height !== void 0 ? height : textHeight;
  var offsetX = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(component, realWidth);
  var offsetY = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(component, realHeight);
  var y = 0;

  if (height) {
    var alignVerticalValue = (0,_format__WEBPACK_IMPORTED_MODULE_4__.getVerticalAlingValue)(format.verticalAlign);
    y = (height - textHeight) * alignVerticalValue;

    if (y < 0) {
      y = 0;
    }
  }

  context2d.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
  context2d.globalAlpha = 1;

  if (background !== undefined) {
    context2d.strokeStyle = '';
    context2d.fillStyle = (0,_e2d_canvas_support__WEBPACK_IMPORTED_MODULE_1__.createColorPattern)(background, 1, colorTransform);
    context2d.beginPath();
    context2d.rect(offsetX, offsetY, realWidth, realHeight);
    context2d.fill();
  }

  if (border !== undefined) {
    context2d.strokeStyle = (0,_e2d_canvas_support__WEBPACK_IMPORTED_MODULE_1__.createColorPattern)(border, 1, colorTransform);
    context2d.fillStyle = '';
    context2d.beginPath();
    context2d.rect(offsetX, offsetY, realWidth, realHeight);
    context2d.stroke();
  }

  context2d.font = (0,_font__WEBPACK_IMPORTED_MODULE_2__.getStyleFont)(format.font, formatSize);
  context2d.textBaseline = 'alphabetic';
  context2d.strokeStyle = '';
  context2d.fillStyle = (0,_e2d_canvas_support__WEBPACK_IMPORTED_MODULE_1__.createColorPattern)(format.color, format.alpha, colorTransform);
  y += offsetY;

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var lineWidth = (0,_font__WEBPACK_IMPORTED_MODULE_2__.getLineWidth)(font, format, line);
    var alignValue = (0,_format__WEBPACK_IMPORTED_MODULE_4__.getAlingValue)(format.align);
    var x = (realWidth - lineWidth) * alignValue;

    if (x < 0) {
      x = 0;
    }

    x += offsetX;

    for (var j = 0; j < line.length; j++) {
      var first = line.charAt(j);
      var second = line.charAt(j + 1);
      var advance = (0,_font__WEBPACK_IMPORTED_MODULE_2__.getAdvance)(font, formatSize, first, second);
      context2d.fillText(first, x, y + formatSize);
      x += advance + formatLetterSpacing;
    }

    y += formatSize + formatLeading;
  }
}
function applyCanvasTextExtension(support) {
  (0,_text__WEBPACK_IMPORTED_MODULE_3__.applyTextExtension)(support);
  support.renderHandlers.set(_text__WEBPACK_IMPORTED_MODULE_3__.TEXT, renderCanvasText);
}

/***/ }),

/***/ "../text/dist/text.js":
/*!****************************!*\
  !*** ../text/dist/text.js ***!
  \****************************/
/*! namespace exports */
/*! export TEXT [provided] [used in main] [could be renamed] */
/*! export Text [provided] [unused] [could be renamed] */
/*! export applyTextExtension [provided] [used in main] [could be renamed] */
/*! export hitTest [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TEXT": () => /* binding */ TEXT,
/* harmony export */   "applyTextExtension": () => /* binding */ applyTextExtension
/* harmony export */ });
/* unused harmony exports Text, hitTest */
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
/* harmony import */ var _e2d_geom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/geom */ "../geom/dist/index.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./format */ "../text/dist/format.js");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./font */ "../text/dist/font.js");




var TEXT = 'text';
var Text;

(function (Text) {
  function getBounds(component) {
    var text = component.text;

    if (!text) {
      return undefined;
    }

    var lines = text.split('\n');
    var width = component.width,
        height = component.height;
    var textFormat = component.textFormat;
    var format = (0,_format__WEBPACK_IMPORTED_MODULE_2__.getValidTextFormat)(textFormat);

    if (!width) {
      var font = (0,_font__WEBPACK_IMPORTED_MODULE_3__.getFont)(format.font);
      width = (0,_font__WEBPACK_IMPORTED_MODULE_3__.getTextWidth)(font, format, lines);
    }

    if (!height) {
      height = (0,_font__WEBPACK_IMPORTED_MODULE_3__.getTextHeight)(format, lines);
    }

    var x = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(component, width);
    var y = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(component, height);
    return {
      x: x,
      y: y,
      width: width,
      height: height
    };
  }

  Text.getBounds = getBounds;
})(Text || (Text = {}));

function hitTest(text, context) {
  var local = context.local;
  var bounds = Text.getBounds(text);
  return !!bounds && _e2d_geom__WEBPACK_IMPORTED_MODULE_1__.Rectangle.contains(bounds, local);
}
function applyTextExtension(support) {
  support.hitTestHandlers.set(TEXT, hitTest);
}

/***/ }),

/***/ "../tween/dist/easing.js":
/*!*******************************!*\
  !*** ../tween/dist/easing.js ***!
  \*******************************/
/*! namespace exports */
/*! export BACK [provided] [unused] [could be renamed] */
/*! export BACK_IN [provided] [unused] [could be renamed] */
/*! export BACK_OUT [provided] [unused] [could be renamed] */
/*! export BOUNCE [provided] [unused] [could be renamed] */
/*! export BOUNCE_IN [provided] [unused] [could be renamed] */
/*! export BOUNCE_OUT [provided] [unused] [could be renamed] */
/*! export CIRCULAR [provided] [unused] [could be renamed] */
/*! export CIRCULAR_IN [provided] [unused] [could be renamed] */
/*! export CIRCULAR_OUT [provided] [unused] [could be renamed] */
/*! export CUBIC [provided] [unused] [could be renamed] */
/*! export CUBIC_IN [provided] [unused] [could be renamed] */
/*! export CUBIC_OUT [provided] [unused] [could be renamed] */
/*! export ELASTIC [provided] [unused] [could be renamed] */
/*! export ELASTIC_IN [provided] [unused] [could be renamed] */
/*! export ELASTIC_OUT [provided] [unused] [could be renamed] */
/*! export EXPONENTIAL [provided] [unused] [could be renamed] */
/*! export EXPONENTIAL_IN [provided] [unused] [could be renamed] */
/*! export EXPONENTIAL_OUT [provided] [unused] [could be renamed] */
/*! export LINEAR [provided] [used in main] [could be renamed] */
/*! export QUADRATIC [provided] [unused] [could be renamed] */
/*! export QUADRATIC_IN [provided] [unused] [could be renamed] */
/*! export QUADRATIC_OUT [provided] [unused] [could be renamed] */
/*! export QUARTIC [provided] [unused] [could be renamed] */
/*! export QUARTIC_IN [provided] [unused] [could be renamed] */
/*! export QUARTIC_OUT [provided] [unused] [could be renamed] */
/*! export QUINTIC [provided] [unused] [could be renamed] */
/*! export QUINTIC_IN [provided] [unused] [could be renamed] */
/*! export QUINTIC_OUT [provided] [unused] [could be renamed] */
/*! export SINUSOIDAL [provided] [unused] [could be renamed] */
/*! export SINUSOIDAL_IN [provided] [unused] [could be renamed] */
/*! export SINUSOIDAL_OUT [provided] [unused] [could be renamed] */
/*! export easing [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LINEAR": () => /* binding */ LINEAR,
/* harmony export */   "easing": () => /* binding */ easing
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

/***/ "../tween/dist/index.js":
/*!******************************!*\
  !*** ../tween/dist/index.js ***!
  \******************************/
/*! namespace exports */
/*! export BACK [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .BACK */
/*! export BACK_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .BACK_IN */
/*! export BACK_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .BACK_OUT */
/*! export BOUNCE [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .BOUNCE */
/*! export BOUNCE_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .BOUNCE_IN */
/*! export BOUNCE_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .BOUNCE_OUT */
/*! export CIRCULAR [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .CIRCULAR */
/*! export CIRCULAR_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .CIRCULAR_IN */
/*! export CIRCULAR_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .CIRCULAR_OUT */
/*! export CUBIC [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .CUBIC */
/*! export CUBIC_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .CUBIC_IN */
/*! export CUBIC_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .CUBIC_OUT */
/*! export ELASTIC [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .ELASTIC */
/*! export ELASTIC_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .ELASTIC_IN */
/*! export ELASTIC_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .ELASTIC_OUT */
/*! export EXPONENTIAL [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .EXPONENTIAL */
/*! export EXPONENTIAL_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .EXPONENTIAL_IN */
/*! export EXPONENTIAL_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .EXPONENTIAL_OUT */
/*! export LINEAR [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .LINEAR */
/*! export QUADRATIC [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUADRATIC */
/*! export QUADRATIC_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUADRATIC_IN */
/*! export QUADRATIC_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUADRATIC_OUT */
/*! export QUARTIC [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUARTIC */
/*! export QUARTIC_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUARTIC_IN */
/*! export QUARTIC_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUARTIC_OUT */
/*! export QUINTIC [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUINTIC */
/*! export QUINTIC_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUINTIC_IN */
/*! export QUINTIC_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .QUINTIC_OUT */
/*! export SINUSOIDAL [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .SINUSOIDAL */
/*! export SINUSOIDAL_IN [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .SINUSOIDAL_IN */
/*! export SINUSOIDAL_OUT [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .SINUSOIDAL_OUT */
/*! export TWEEN [provided] [unused] [could be renamed] -> ../tween/dist/tween.js .TWEEN */
/*! export applyTweenExtension [provided] [used in main] [could be renamed] -> ../tween/dist/tween.js .applyTweenExtension */
/*! export easing [provided] [unused] [could be renamed] -> ../tween/dist/easing.js .easing */
/*! export updateTweem [provided] [unused] [could be renamed] -> ../tween/dist/tween.js .updateTweem */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyTweenExtension": () => /* reexport safe */ _tween__WEBPACK_IMPORTED_MODULE_0__.applyTweenExtension
/* harmony export */ });
/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tween */ "../tween/dist/tween.js");
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./easing */ "../tween/dist/easing.js");



/***/ }),

/***/ "../tween/dist/tween.js":
/*!******************************!*\
  !*** ../tween/dist/tween.js ***!
  \******************************/
/*! namespace exports */
/*! export TWEEN [provided] [unused] [could be renamed] */
/*! export applyTweenExtension [provided] [used in main] [could be renamed] */
/*! export updateTweem [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyTweenExtension": () => /* binding */ applyTweenExtension
/* harmony export */ });
/* unused harmony exports TWEEN, updateTweem */
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easing */ "../tween/dist/easing.js");

var TWEEN = 'tween';
function updateTweem(component, context) {
  var tween = component.tween;
  var phases = tween.phases;

  if (!(phases === null || phases === void 0 ? void 0 : phases.length)) {
    console.warn('Animation parts not found');
    return;
  }

  if (tween.time === undefined) {
    tween.time = 0;
  }

  tween.time += context.time;
  var time = tween.time;
  var offset = 0;
  phases.forEach(function (phase) {
    var _phase$easing$toLower, _phase$easing;

    if (!phase.time) {
      console.warn('Animation time not set');
      return;
    }

    if (phase.offset !== undefined) {
      offset = phase.offset;
    }

    var easingName = (_phase$easing$toLower = phase === null || phase === void 0 ? void 0 : (_phase$easing = phase.easing) === null || _phase$easing === void 0 ? void 0 : _phase$easing.toLowerCase()) !== null && _phase$easing$toLower !== void 0 ? _phase$easing$toLower : _easing__WEBPACK_IMPORTED_MODULE_0__.LINEAR;
    var easingMethod = _easing__WEBPACK_IMPORTED_MODULE_0__.easing[easingName];

    if (!easingMethod) {
      console.warn("Unknown easing type: ".concat(_easing__WEBPACK_IMPORTED_MODULE_0__.easing));
      return;
    }

    var value = (time - offset) / phase.time;
    offset += phase.time;

    if (value < 0 || value > 1) {
      return;
    }

    var easingValue = easingMethod(value);

    if (!phase.to) {
      console.warn('Animation "to" state not found');
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
function applyTweenExtension(support) {
  support.propertyHandlers.set(TWEEN, updateTweem);
}

/***/ }),

/***/ "./src/artifact.ts":
/*!*************************!*\
  !*** ./src/artifact.ts ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ recursive
/* harmony export */ });
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ "./src/assets.ts");

function recursive() {
    const container = {
        type: 'container',
        child: {
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
    container.child.children.push(container);
    return container;
}


/***/ }),

/***/ "./src/assets.ts":
/*!***********************!*\
  !*** ./src/assets.ts ***!
  \***********************/
/*! namespace exports */
/*! export ABILITY_FOX [provided] [used in main] [could be renamed] */
/*! export ABILITY_WOLF [provided] [used in main] [could be renamed] */
/*! export ANIMALIST [provided] [used in main] [could be renamed] */
/*! export ANIMALIST_IMAGE [provided] [used in main] [could be renamed] */
/*! export ARCHER [provided] [used in main] [could be renamed] */
/*! export ARCHER_IMAGE [provided] [used in main] [could be renamed] */
/*! export BACKGROUND [provided] [used in main] [could be renamed] */
/*! export TEST_CANVAS [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANIMALIST": () => /* binding */ ANIMALIST,
/* harmony export */   "ARCHER": () => /* binding */ ARCHER,
/* harmony export */   "ANIMALIST_IMAGE": () => /* binding */ ANIMALIST_IMAGE,
/* harmony export */   "ARCHER_IMAGE": () => /* binding */ ARCHER_IMAGE,
/* harmony export */   "ABILITY_FOX": () => /* binding */ ABILITY_FOX,
/* harmony export */   "ABILITY_WOLF": () => /* binding */ ABILITY_WOLF,
/* harmony export */   "BACKGROUND": () => /* binding */ BACKGROUND,
/* harmony export */   "TEST_CANVAS": () => /* binding */ TEST_CANVAS
/* harmony export */ });
const IMAGE_ASSETS = 'assets/';
const ANIMALIST = 'id:animalist';
const ARCHER = 'id:archer';
const ANIMALIST_IMAGE = `${IMAGE_ASSETS}AnimalistFox1_image.png`;
const ARCHER_IMAGE = `${IMAGE_ASSETS}Archer2_hunter_image.png`;
const ABILITY_FOX = `${IMAGE_ASSETS}AnimalistAbility_Fox.png`;
const ABILITY_WOLF = `${IMAGE_ASSETS}AnimalistAbility_Wolf.png`;
const BACKGROUND = `${IMAGE_ASSETS}jungle_background.jpg`;
const TEST_CANVAS = 'test.canvas';


/***/ }),

/***/ "./src/engine/image.ts":
/*!*****************************!*\
  !*** ./src/engine/image.ts ***!
  \*****************************/
/*! namespace exports */
/*! export applyCustomImageExtension [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyCustomImageExtension": () => /* binding */ applyCustomImageExtension
/* harmony export */ });
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
/* harmony import */ var _e2d_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/image */ "../image/dist/index.js");


function renderImage(image, context) {
    if (!image.src) {
        return;
    }
    const { matrix, colorTransform } = context;
    if (colorTransform.alphaMultiplier <= 0) {
        return;
    }
    const { support } = context;
    const resource = support.resources.get(image.src);
    if (!resource?.loaded || !resource?.image) {
        return;
    }
    const { context2d } = support;
    context2d.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
    const { width, height } = resource.image;
    const x = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getX(image, width);
    const y = _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Pivot.getY(image, height);
    context2d.globalAlpha = 1;
    context2d.fillStyle = '';
    context2d.strokeStyle = 'gray';
    context2d.strokeRect(x, y, width, height);
}
function applyCustomImageExtension(support) {
    (0,_e2d_image__WEBPACK_IMPORTED_MODULE_1__.applyImageExtension)(support);
    support.renderHandlers.set(_e2d_image__WEBPACK_IMPORTED_MODULE_1__.IMAGE, renderImage);
}


/***/ }),

/***/ "./src/engine/resources.ts":
/*!*********************************!*\
  !*** ./src/engine/resources.ts ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ CustomResourceManager
/* harmony export */ });
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
/* harmony import */ var _e2d_resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/resources */ "../resources/dist/index.js");


class CustomResourceManager {
    constructor() {
        this.aliases = new Map();
        this.resources = new Map();
        this.resolve = (asset) => {
            if (asset.indexOf('id:') === 0) {
                const id = asset.slice(3);
                let resource = this.resources.get(id);
                if (!resource) {
                    const url = this.aliases.get(id);
                    if (url) {
                        resource = (0,_e2d_resources__WEBPACK_IMPORTED_MODULE_1__.resolveImage)(url);
                        this.resources.set(id, resource);
                    }
                    else {
                        _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Debug.warning(`Resource with id: ${asset} not found`);
                    }
                }
                return resource;
            }
            return null;
        };
    }
}


/***/ }),

/***/ "./src/engine/support.ts":
/*!*******************************!*\
  !*** ./src/engine/support.ts ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ CustomSupport
/* harmony export */ });
/* harmony import */ var _e2d_canvas_support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/canvas-support */ "../canvas-support/dist/index.js");
/* harmony import */ var _e2d_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/text */ "../text/dist/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "./src/engine/image.ts");



class CustomSupport extends _e2d_canvas_support__WEBPACK_IMPORTED_MODULE_0__.CanvasSupport {
    constructor() {
        super();
        (0,_e2d_text__WEBPACK_IMPORTED_MODULE_1__.applyCanvasTextExtension)(this);
        (0,_image__WEBPACK_IMPORTED_MODULE_2__.applyCustomImageExtension)(this);
    }
    clear() {
        const { context2d } = this;
        context2d.fillStyle = 'black';
        context2d.setTransform();
        context2d.fillRect(0, 0, context2d.canvas.width, context2d.canvas.height);
        context2d.fillStyle = '';
    }
}


/***/ }),

/***/ "./src/fps.ts":
/*!********************!*\
  !*** ./src/fps.ts ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ fps
/* harmony export */ });
function fps() {
    return {
        type: 'text',
        text: 'fps',
        textFormat: {
            size: 30,
            color: 0xffffff,
            align: 'center',
        },
        onUpdate(time) {
            const frameRate = Math.round(1 / time);
            this.text = `${frameRate} fps`;
        },
    };
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ main
/* harmony export */ });
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ "./src/assets.ts");
/* harmony import */ var _artifact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artifact */ "./src/artifact.ts");
/* harmony import */ var _fps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fps */ "./src/fps.ts");
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit */ "./src/unit.ts");




function main() {
    function onUnitClick(data) {
        data.health = Math.random();
        console.log('onUnitClick', data.name);
    }
    return {
        type: 'container',
        children: {
            background: {
                type: 'image',
                src: _assets__WEBPACK_IMPORTED_MODULE_0__.BACKGROUND,
                scaleX: 1,
                scaleY: 1,
            },
            figure: {
                type: 'shape',
                data: {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    width: 100,
                    height: 100,
                    fill: 0xff00ff,
                    stroke: {
                        thickness: 2,
                        fill: 0x00ff00,
                    },
                },
            },
            shapes: {
                type: 'shape',
                data: [
                    {
                        type: 'circle',
                        x: 100,
                        y: 100,
                        radius: 50,
                        fill: { type: 'solid', color: 0xffff00, alpha: 0.5 },
                    },
                    {
                        type: 'path',
                        data: 'M 10 10 H 90 V 90 H 10 Z',
                        fill: 0xff00ff,
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
                        fill: 0xff00ff,
                        stroke: 0x000000,
                    },
                ],
            },
            units: {
                type: 'container',
                children: [
                    (0,_unit__WEBPACK_IMPORTED_MODULE_1__.unit)({
                        name: 'Archer', health: 1, image: _assets__WEBPACK_IMPORTED_MODULE_0__.ARCHER, onClick: onUnitClick,
                    }),
                    (0,_unit__WEBPACK_IMPORTED_MODULE_1__.unit)({
                        name: 'Animalist', health: 1, image: _assets__WEBPACK_IMPORTED_MODULE_0__.ANIMALIST, onClick: onUnitClick,
                    }),
                ],
            },
            artifact: {
                type: 'container',
                x: 300,
                y: 350,
                children: [(0,_artifact__WEBPACK_IMPORTED_MODULE_2__.default)()],
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
                src: _assets__WEBPACK_IMPORTED_MODULE_0__.ABILITY_FOX,
                x: 450,
                y: 500,
                scale: 0.5,
                tint: {
                    color: 0x00ff00,
                    value: 1,
                },
                onUpdate(time) {
                    this.tint.value += time;
                    if (this.tint.value >= 1) {
                        this.tint.value = 0;
                    }
                },
                onPointerDown(e) {
                    console.log('fox', e);
                },
            },
            abilityWolf: {
                type: 'container',
                x: 350,
                y: 400,
                child: {
                    type: 'image',
                    src: _assets__WEBPACK_IMPORTED_MODULE_0__.ABILITY_WOLF,
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
            fps: (0,_fps__WEBPACK_IMPORTED_MODULE_3__.default)(),
        },
        start() {
            console.log('start');
        },
    };
}


/***/ }),

/***/ "./src/unit.ts":
/*!*********************!*\
  !*** ./src/unit.ts ***!
  \*********************/
/*! namespace exports */
/*! export unit [provided] [used in main] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unit": () => /* binding */ unit
/* harmony export */ });
const SPEED = 100;
function unit(props) {
    function getTitle() {
        return `${props.name}\n${Math.round(props.health * 100)}%`;
    }
    return {
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__ */
/* harmony import */ var _e2d_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @e2d/engine */ "../engine/dist/index.js");
/* harmony import */ var _e2d_tween__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @e2d/tween */ "../tween/dist/index.js");
/* harmony import */ var _e2d_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @e2d/text */ "../text/dist/index.js");
/* harmony import */ var _e2d_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @e2d/image */ "../image/dist/index.js");
/* harmony import */ var _e2d_shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @e2d/shape */ "../shape/dist/index.js");
/* harmony import */ var _e2d_canvas_support__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @e2d/canvas-support */ "../canvas-support/dist/index.js");
/* harmony import */ var _engine_resources__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./engine/resources */ "./src/engine/resources.ts");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main */ "./src/main.ts");
/* harmony import */ var _engine_support__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./engine/support */ "./src/engine/support.ts");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets */ "./src/assets.ts");










const app = (0,_main__WEBPACK_IMPORTED_MODULE_6__.default)();
app.start();
const engine = new _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Engine(new _e2d_canvas_support__WEBPACK_IMPORTED_MODULE_5__.CanvasSupport());
(0,_e2d_image__WEBPACK_IMPORTED_MODULE_3__.applyCanvasImageColorExtension)(engine.support);
(0,_e2d_text__WEBPACK_IMPORTED_MODULE_2__.applyCanvasTextExtension)(engine.support);
(0,_e2d_shape__WEBPACK_IMPORTED_MODULE_4__.applyCanvasShapeExtension)(engine.support);
(0,_e2d_tween__WEBPACK_IMPORTED_MODULE_1__.applyTweenExtension)(engine.support);
(0,_e2d_engine__WEBPACK_IMPORTED_MODULE_0__.applyMouseSupportExtension)(engine);
engine.root = app;
engine.play();
document.body.appendChild(engine.support.element);
const customEngine = new _e2d_engine__WEBPACK_IMPORTED_MODULE_0__.Engine(new _engine_support__WEBPACK_IMPORTED_MODULE_7__.default());
customEngine.fullscreen = false;
customEngine.height = 600;
customEngine.updateEnabled = false;
customEngine.root = engine.root;
customEngine.play();
customEngine.support.element.style.position = 'absolute';
customEngine.support.element.style.top = '0px';
customEngine.support.element.style.left = '600px';
document.body.appendChild(customEngine.support.element);
document.body.style.margin = '0';
document.body.style.padding = '0';
setTimeout(() => engine.pause(), 5000);
setTimeout(() => engine.play(), 10000);
engine.support.resources.add(_assets__WEBPACK_IMPORTED_MODULE_8__.TEST_CANVAS, {
    asset: _assets__WEBPACK_IMPORTED_MODULE_8__.TEST_CANVAS,
    image: customEngine.support.element,
    loaded: true,
});
customEngine.support.resources.add(_assets__WEBPACK_IMPORTED_MODULE_8__.TEST_CANVAS, {
    asset: _assets__WEBPACK_IMPORTED_MODULE_8__.TEST_CANVAS,
    image: engine.support.element,
    loaded: true,
});
const resourceManager = new _engine_resources__WEBPACK_IMPORTED_MODULE_9__.default();
resourceManager.aliases.set(_assets__WEBPACK_IMPORTED_MODULE_8__.ARCHER.replace('id:', ''), _assets__WEBPACK_IMPORTED_MODULE_8__.ARCHER_IMAGE);
resourceManager.aliases.set(_assets__WEBPACK_IMPORTED_MODULE_8__.ANIMALIST.replace('id:', ''), _assets__WEBPACK_IMPORTED_MODULE_8__.ANIMALIST_IMAGE);
engine.support.resources.resolvers.add(resourceManager.resolve);
customEngine.support.resources.resolvers.add(resourceManager.resolve);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jYW52YXMtc3VwcG9ydC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NhbnZhcy1zdXBwb3J0L2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY2FudmFzLXN1cHBvcnQvZGlzdC9zdXBwb3J0LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2VuZ2luZS9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvZW5naW5lL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9lbmdpbmUvc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnB1dC9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnB1dC9tb3VzZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnB1dC90b3VjaC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnRlcmZhY2VzL3Bpdm90LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2ludGVyZmFjZXMvcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnRlcmZhY2VzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnRlcmZhY2VzL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC91dGlscy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9nZW9tL2Rpc3QvYm91bmRzLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9jb2xvci10cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZ2VvbS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZ2VvbS9kaXN0L3BvaW50LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vaW1hZ2UvZGlzdC9pbWFnZS1jYW52YXMtY29sb3IuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vaW1hZ2UvZGlzdC9pbWFnZS1jYW52YXMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vaW1hZ2UvZGlzdC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9pbWFnZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3Jlc291cmNlcy9kaXN0L2ltYWdlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvZGF0YS9kYXRhLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvZGF0YS9wYXRoLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvZGF0YS9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vc2hhcGUvZGlzdC9ncmFwaGljcy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3Qvc2hhcGUtY2FudmFzLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3Qvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L2ZvbnQuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90ZXh0L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L3RleHQtY2FudmFzLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3RleHQvZGlzdC90ZXh0LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3R3ZWVuL2Rpc3QvZWFzaW5nLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3R3ZWVuL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdHdlZW4vZGlzdC90d2Vlbi5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9hcnRpZmFjdC50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9hc3NldHMudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvZW5naW5lL2ltYWdlLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2VuZ2luZS9yZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvZW5naW5lL3N1cHBvcnQudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvZnBzLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvdW5pdC50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJjcmVhdGVDb2xvclBhdHRlcm4iLCJjb2xvciIsImFscGhhIiwiY3QiLCJyIiwiZyIsImIiLCJhIiwiQ29sb3JUcmFuc2Zvcm0iLCJyZWRNdWx0aXBsaWVyIiwicmVkT2Zmc2V0IiwiZ3JlZW5NdWx0aXBsaWVyIiwiZ3JlZW5PZmZzZXQiLCJibHVlTXVsdGlwbGllciIsImJsdWVPZmZzZXQiLCJhbHBoYU11bHRpcGxpZXIiLCJhbHBoYU9mZnNldCIsIkNhbnZhc1N1cHBvcnQiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0MmQiLCJnZXRDb250ZXh0Iiwic2V0VHJhbnNmb3JtIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJwaXhlbFJhdGlvIiwidmlld1dpZHRoIiwiTWF0aCIsImZsb29yIiwidmlld0hlaWdodCIsInN0eWxlIiwiU3VwcG9ydCIsIkNvbXBvbmVudCIsImlzRW5hYmxlZCIsImNvbXBvbmVudCIsImVuYWJsZWQiLCJpc1Zpc2libGUiLCJ2aXNpYmxlIiwiQ09OVEFJTkVSIiwiQ29udGFpbmVyIiwibnVtQ2hpbGRyZW4iLCJjb250YWluZXIiLCJjaGlsZCIsImNoaWxkcmVuIiwiY291bnQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJrZXlzIiwiT2JqZWN0IiwicmVuZGVyIiwiY29udGV4dCIsInN1cHBvcnQiLCJjaGlsZENvbnRleHQiLCJnZXRSZW5kZXJDb250ZXh0IiwiaSIsImNvbXBvbmVudENvbnRleHQiLCJ1cGRhdGUiLCJnZXRVcGRhdGVDb250ZXh0IiwiaGl0VGVzdCIsImdldFBvaW50ZXJDb250ZXh0IiwicmVzdWx0IiwiYXBwbHlDb250YWluZXJFeHRlbnNpb24iLCJ1cGRhdGVIYW5kbGVycyIsInNldCIsInJlbmRlckhhbmRsZXJzIiwiaGl0VGVzdEhhbmRsZXJzIiwiRU1QVFlfTUFUUklYIiwiTWF0cml4IiwiRW5naW5lIiwiZnVsbHNjcmVlbiIsInVwZGF0ZUVuYWJsZWQiLCJyZW5kZXJFbmFibGVkIiwicG9pbnRlckVuYWJsZWQiLCJwYXVzZWQiLCJ0aW1lIiwibWF0cml4IiwiaW50ZXJuYWxVcGRhdGUiLCJkZWx0YVRpbWUiLCJ1cGRhdGVGcmFtZSIsInJvb3QiLCJiYXNlIiwiZGVwdGgiLCJjbGVhciIsImNvbG9yVHJhbnNmb3JtIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInRhcmdldFdpZHRoIiwidGFyZ2V0SGVpZ2h0IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZCIsInNldFNpemUiLCJ1cGRhdGVTaXplIiwidXBkYXRlTmV4dEZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZXZlbnQiLCJ0eXBlIiwiaWQiLCJ4IiwieSIsImxvY2FsIiwiZ2xvYmFsIiwiY29uc29sZSIsImxvZyIsIlJlc291cmNlcyIsInJlc291cmNlcyIsIk1hcCIsInJlc29sdmVycyIsIlNldCIsImFzc2V0IiwicmVzb3VyY2UiLCJnZXQiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJEZWJ1ZyIsInVwZGF0ZURlcHRoIiwicHJvcGVydHlIYW5kbGVycyIsImZvckVhY2giLCJoYW5kbGVyIiwicHJvcGVydHkiLCJvblVwZGF0ZSIsIlBvaW50ZXIiLCJwb2ludGVyT3ZlciIsInBhcmVudCIsIlRyYW5zZm9ybSIsInRyYW5zZm9ybWVkTWF0cml4IiwiYXBwbHlLZXlib2FyZFN1cHBvcnRFeHRlbnNpb24iLCJlbmdpbmUiLCJkaXNwYXRjaEV2ZW50IiwiZWxlbWVudCIsImNsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudExlZnQiLCJjbGllbnRZIiwidG9wIiwiY2xpZW50VG9wIiwiZGlzcGF0Y2hQb2ludGVyRXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFwcGx5TW91c2VTdXBwb3J0RXh0ZW5zaW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoYW5nZWRUb3VjaGVzIiwidG91Y2giLCJpZGVudGlmaWVyIiwiYXBwbHlUb3VjaFN1cHBvcnRFeHRlbnNpb24iLCJQaXZvdCIsImdldFgiLCJwaXZvdCIsInBpdm90WCIsImdldFkiLCJwaXZvdFkiLCJpc1BvaW50ZXJPdmVyIiwicG9pbnRlciIsImlzUG9pbnRlckVuYWJsZWQiLCJoYW5kbGVyTmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJTb3VyY2UiLCJnZXRSZXNvdXJjZSIsInNvdXJjZSIsInNyYyIsImlzTG9hZGVkIiwibG9hZGVkIiwiZ2V0TWF0cml4IiwidHJhbnNmb3JtIiwiYyIsInR4IiwidHkiLCJyb3RhdGlvbiIsInNjYWxlWCIsInNjYWxlIiwic2NhbGVZIiwiY29zIiwic2luIiwiZ2V0Q29sb3JUcmFuc2Zvcm0iLCJ0aW50IiwidmFsdWUiLCJ2YWx1ZUludmVydGVkIiwiYXJncyIsIlN0cmluZyIsImVycm9ycyIsImVycm9yIiwid2FybmluZ3MiLCJ3YXJuIiwiQm91bmRzIiwiZW1wdHkiLCJtaW5YIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwibWluWSIsIm1heFgiLCJNSU5fVkFMVUUiLCJtYXhZIiwiaXNFbXB0eSIsImJvdW5kcyIsInRvUmVjdGFuZ2xlIiwidGVzdFgiLCJ0ZXN0WSIsInRlc3QiLCJ0ZXN0UG9pbnQiLCJwb2ludCIsImNvbmNhdCIsImN0MSIsImN0MCIsImlzRGVmYXVsdCIsIm1hdHJpeDAiLCJtYXRyaXgxIiwiZ2V0RGV0ZXJtaW5hbnQiLCJpbnZlcnQiLCJkZXRlcm1pbmFudCIsInRyYW5zZm9ybVBvaW50IiwidHJhbnNmb3JtSW52ZXJzZVBvaW50IiwidHJhbnNmb3JtQm91bmRzIiwicngiLCJyeSIsInJyIiwicmIiLCJueDEiLCJueTEiLCJueDIiLCJueTIiLCJueDMiLCJueTMiLCJueDQiLCJueTQiLCJyaWdodCIsImJvdHRvbSIsIlBvaW50IiwiUmVjdGFuZ2xlIiwiY29udGFpbnMiLCJyZWN0YW5nbGUiLCJ0ZW1wQ29udGV4dCIsImlzRGVmYXVsdENvbG9yVHJhbnNmb3JtIiwidXBkYXRlVGVtcENvbnRleHQiLCJyZW5kZXJDYW52YXNDb2xvciIsImltYWdlIiwiZ2xvYmFsQWxwaGEiLCJkcmF3SW1hZ2UiLCJpbWFnZURhdGEiLCJnZXRJbWFnZURhdGEiLCJybSIsImdtIiwiYm0iLCJhbSIsInJvIiwiZ28iLCJibyIsImFvIiwiZGF0YSIsInB1dEltYWdlRGF0YSIsImFwcGx5Q2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiIsImFwcGx5SW1hZ2VFeHRlbnNpb24iLCJJTUFHRSIsInJlbmRlckNhbnZhcyIsImFwcGx5Q2FudmFzSW1hZ2VFeHRlbnNpb24iLCJJbWFnZSIsImdldEJvdW5kcyIsInVuZGVmaW5lZCIsImFkZCIsInJlc29sdmVJbWFnZSIsImV4dGVuc2lvbiIsInNwbGl0IiwicG9wIiwib25sb2FkIiwib25lcnJvciIsImUiLCJSZWN0YW5nbGVEYXRhIiwiY2FsY3VsYXRlQm91bmRzIiwiRWxsaXBzZURhdGEiLCJyYWRpdXMiLCJyYWRpdXNYIiwicmFkaXVzWSIsIlBhdGhEYXRhIiwicGF0aERhdGEiLCJHcmFwaGljc1N0cmluZyIsImNvbW1hbmQiLCJQYXRoQ29tbWFuZCIsIkdyYXBoaWNzRGF0YSIsInBhdGgiLCJtb3ZlVG8iLCJjdXJ2ZVRvIiwiY3giLCJjeSIsImN1YmljQ3VydmVUbyIsInN4Iiwic3kiLCJURVNUX0NPTU1BTkQiLCJURVNUX1NQQUNFIiwiVEVTVF9OVU1CRVIiLCJHcmFwaGljc1N0cmluZ1N0cmVhbSIsInBvc2l0aW9uIiwiYnVmZmVyIiwic2l6ZSIsInJlYWRDb21tYW5kIiwicmVhZE51bWJlcnMiLCJudW1iZXIiLCJjaGFyIiwicGFyc2VGbG9hdCIsIkdyYXBoaWNzU3RyaW5nUmVhZGVyIiwic3RyZWFtIiwiY29tbWFuZEV4aXN0cyIsImxhc3RYIiwibGFzdFkiLCJzZXRQYXRoIiwiaGFzRGF0YSIsInJlYWROZXh0IiwicGFyc2UiLCJnZXRDb21tYW5kIiwiZ2V0QnVmZmVyIiwieDAiLCJ5MCIsIngxIiwieTEiLCJ4MiIsInkyIiwibGluZVRvIiwicmVhZGVyIiwiR3JhcGhpY3MiLCJzaGFwZSIsImZpbGwiLCJyZXBlYXQiLCJzbW9vdGgiLCJyYXRpbyIsInNwcmVhZCIsImludGVycG9sYXRpb24iLCJmb2NhbFBvaW50UmF0aW8iLCJ0aGlja25lc3MiLCJwaXhlbEhpbnRpbmciLCJzY2FsZU1vZGUiLCJjYXBzIiwiam9pbnRzIiwibWl0ZXJMaW1pdCIsInN0cm9rZSIsImJlZ2luUGF0aCIsInB1c2giLCJnZXRQYXRoIiwiZWxsaXBzZVdpZHRoIiwiZWxsaXBzZUhlaWdodCIsInciLCJoIiwiayIsIm94Iiwib3kiLCJ4ZSIsInllIiwieG0iLCJ5bSIsImR4IiwiZHkiLCJjcmVhdGVEYXRhIiwiZ3JhcGhpY3NEYXRhIiwicmVuZGVyU2hhcGUiLCJhcHBseUNhbnZhc1NoYXBlRXh0ZW5zaW9uIiwiYXBwbHlTaGFwZUV4dGVuc2lvbiIsIlNIQVBFIiwiU2hhcGUiLCJnZXRHcmFwaGljcyIsIkVNIiwiZm9udHMiLCJnZXRTdHlsZUZvbnQiLCJmb250IiwibWVhc3VyZVRleHQiLCJ0ZXh0IiwiZ2V0Q2hhcldpZHRoIiwid2lkdGhzIiwibmFtZSIsImdldEtlcm5pbmciLCJmaXJzdCIsInNlY29uZCIsInBhaXIiLCJrZXJuaW5nIiwia2VybmluZ3MiLCJ3aWR0aFNlY29uZCIsIndpZHRoVG90YWwiLCJnZXRBZHZhbmNlIiwiZ2V0Rm9udCIsImdldExpbmVXaWR0aCIsImZvcm1hdCIsImxpbmUiLCJhZHZhbmNlIiwibGV0dGVyU3BhY2luZyIsImdldFRleHRXaWR0aCIsImxpbmVzIiwibGluZVdpZHRoIiwiZ2V0VGV4dEhlaWdodCIsImxlYWRpbmciLCJkZWZhdWx0VGV4dEZvcm1hdCIsImJvbGQiLCJpdGFsaWMiLCJ1bmRlcmxpbmUiLCJhbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJnZXRWYWxpZFRleHRGb3JtYXQiLCJ0ZXh0Rm9ybWF0IiwiZ2V0QWxpbmdWYWx1ZSIsImdldFZlcnRpY2FsQWxpbmdWYWx1ZSIsInJlbmRlckNhbnZhc1RleHQiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiZm9ybWF0U2l6ZSIsImZvcm1hdExldHRlclNwYWNpbmciLCJmb3JtYXRMZWFkaW5nIiwidGV4dFdpZHRoIiwidGV4dEhlaWdodCIsInJlYWxXaWR0aCIsInJlYWxIZWlnaHQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImFsaWduVmVydGljYWxWYWx1ZSIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwicmVjdCIsInRleHRCYXNlbGluZSIsImFsaWduVmFsdWUiLCJqIiwiZmlsbFRleHQiLCJhcHBseUNhbnZhc1RleHRFeHRlbnNpb24iLCJhcHBseVRleHRFeHRlbnNpb24iLCJURVhUIiwiVGV4dCIsIkxJTkVBUiIsIlFVQURSQVRJQyIsIlFVQURSQVRJQ19JTiIsIlFVQURSQVRJQ19PVVQiLCJDVUJJQyIsIkNVQklDX0lOIiwiQ1VCSUNfT1VUIiwiUVVBUlRJQyIsIlFVQVJUSUNfSU4iLCJRVUFSVElDX09VVCIsIlFVSU5USUMiLCJRVUlOVElDX0lOIiwiUVVJTlRJQ19PVVQiLCJTSU5VU09JREFMIiwiU0lOVVNPSURBTF9JTiIsIlNJTlVTT0lEQUxfT1VUIiwiRVhQT05FTlRJQUwiLCJFWFBPTkVOVElBTF9JTiIsIkVYUE9ORU5USUFMX09VVCIsIkNJUkNVTEFSIiwiQ0lSQ1VMQVJfSU4iLCJDSVJDVUxBUl9PVVQiLCJFTEFTVElDIiwiRUxBU1RJQ19JTiIsIkVMQVNUSUNfT1VUIiwiQkFDSyIsIkJBQ0tfSU4iLCJCQUNLX09VVCIsIkJPVU5DRSIsIkJPVU5DRV9JTiIsIkJPVU5DRV9PVVQiLCJlYXNpbmciLCJQSSIsInBvdyIsInNxcnQiLCJzIiwiVFdFRU4iLCJ1cGRhdGVUd2VlbSIsInR3ZWVuIiwicGhhc2VzIiwib2Zmc2V0IiwicGhhc2UiLCJlYXNpbmdOYW1lIiwidG9Mb3dlckNhc2UiLCJlYXNpbmdNZXRob2QiLCJlYXNpbmdWYWx1ZSIsInRvIiwiZnJvbSIsInN0YXRlIiwia2V5IiwiZnJvbVZhbHVlIiwidG9WYWx1ZSIsInN0YXRlVmFsdWUiLCJsb29wIiwiYXBwbHlUd2VlbkV4dGVuc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDTyxTQUFTQSxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUNDLEtBQW5DLEVBQTBDQyxFQUExQyxFQUE4QztBQUNqRCxNQUFJQyxDQUFDLEdBQUdILEtBQUssSUFBSSxFQUFULEdBQWMsSUFBdEI7QUFDQSxNQUFJSSxDQUFDLEdBQUdKLEtBQUssSUFBSSxDQUFULEdBQWEsSUFBckI7QUFDQSxNQUFJSyxDQUFDLEdBQUdMLEtBQUssR0FBRyxJQUFoQjtBQUNBLE1BQUlNLENBQUMsR0FBR0wsS0FBSyxHQUFHLElBQWhCOztBQUNBLE1BQUksQ0FBQ00sK0RBQUEsQ0FBeUJMLEVBQXpCLENBQUwsRUFBbUM7QUFDL0JDLEtBQUMsR0FBSUEsQ0FBQyxHQUFHRCxFQUFFLENBQUNNLGFBQVAsR0FBdUJOLEVBQUUsQ0FBQ08sU0FBM0IsR0FBd0MsSUFBNUM7QUFDQUwsS0FBQyxHQUFJQSxDQUFDLEdBQUdGLEVBQUUsQ0FBQ1EsZUFBUCxHQUF5QlIsRUFBRSxDQUFDUyxXQUE3QixHQUE0QyxJQUFoRDtBQUNBTixLQUFDLEdBQUlBLENBQUMsR0FBR0gsRUFBRSxDQUFDVSxjQUFQLEdBQXdCVixFQUFFLENBQUNXLFVBQTVCLEdBQTBDLElBQTlDO0FBQ0FQLEtBQUMsR0FBSUEsQ0FBQyxHQUFHSixFQUFFLENBQUNZLGVBQVAsR0FBeUJaLEVBQUUsQ0FBQ2EsV0FBN0IsR0FBNEMsSUFBaEQ7QUFDSDs7QUFDRCxNQUFJVCxDQUFDLEdBQUcsSUFBUixFQUFjO0FBQ1Ys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RUFBRSxDQUFDO0FBQ3BELGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLGlEQUFZLENBQUMsQ0FBQztBQUNyRSxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzREFBaUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsb0RBQWUsQ0FBQyxDQUFDO0FBQzNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2hFLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXNTdXBwb3J0IGZyb20gJy4vc3VwcG9ydCc7XG5leHBvcnQgKiBmcm9tICcuL3BhdHRlcm5zJztcbmV4cG9ydCB7IENhbnZhc1N1cHBvcnQsIH07XG4iLCJpbXBvcnQgeyBDb2xvclRyYW5zZm9ybSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29sb3JQYXR0ZXJuKGNvbG9yLCBhbHBoYSwgY3QpIHtcbiAgICBsZXQgciA9IGNvbG9yID4+IDE2ICYgMHhmZjtcbiAgICBsZXQgZyA9IGNvbG9yID4+IDggJiAweGZmO1xuICAgIGxldCBiID0gY29sb3IgJiAweGZmO1xuICAgIGxldCBhID0gYWxwaGEgKiAweGZmO1xuICAgIGlmICghQ29sb3JUcmFuc2Zvcm0uaXNEZWZhdWx0KGN0KSkge1xuICAgICAgICByID0gKHIgKiBjdC5yZWRNdWx0aXBsaWVyICsgY3QucmVkT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgIGcgPSAoZyAqIGN0LmdyZWVuTXVsdGlwbGllciArIGN0LmdyZWVuT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgIGIgPSAoYiAqIGN0LmJsdWVNdWx0aXBsaWVyICsgY3QuYmx1ZU9mZnNldCkgJiAweGZmO1xuICAgICAgICBhID0gKGEgKiBjdC5hbHBoYU11bHRpcGxpZXIgKyBjdC5hbHBoYU9mZnNldCkgJiAweGZmO1xuICAgIH1cbiAgICBpZiAoYSA8IDB4ZmYpIHtcbiAgICAgICAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YSAvIDB4ZmZ9KWA7XG4gICAgfVxuICAgIHJldHVybiBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYDtcbn1cbiIsImltcG9ydCB7IFN1cHBvcnQgfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNTdXBwb3J0IGV4dGVuZHMgU3VwcG9ydCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY29udGV4dDJkID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2FudmFzIH0gPSB0aGlzO1xuICAgICAgICB0aGlzLmNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgdGhpcy5jb250ZXh0MmQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICAgIHNldFNpemUod2lkdGgsIGhlaWdodCwgcGl4ZWxSYXRpbykge1xuICAgICAgICBjb25zdCB2aWV3V2lkdGggPSBNYXRoLmZsb29yKHdpZHRoICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHZpZXdIZWlnaHQgPSBNYXRoLmZsb29yKGhlaWdodCAqIHBpeGVsUmF0aW8pO1xuICAgICAgICBjb25zdCB7IGNhbnZhcyB9ID0gdGhpcztcbiAgICAgICAgaWYgKGNhbnZhcy53aWR0aCAhPT0gdmlld1dpZHRoIHx8IGNhbnZhcy5oZWlnaHQgIT09IHZpZXdIZWlnaHQpIHtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHZpZXdXaWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB2aWV3SGVpZ2h0O1xuICAgICAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgdmFyIENvbXBvbmVudDtcbihmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gaXNFbmFibGVkKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgQ29tcG9uZW50LmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgICBmdW5jdGlvbiBpc1Zpc2libGUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQudmlzaWJsZSA/PyB0cnVlO1xuICAgIH1cbiAgICBDb21wb25lbnQuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xufSkoQ29tcG9uZW50IHx8IChDb21wb25lbnQgPSB7fSkpO1xuIiwiZXhwb3J0IGNvbnN0IENPTlRBSU5FUiA9ICdjb250YWluZXInO1xuZXhwb3J0IHZhciBDb250YWluZXI7XG4oZnVuY3Rpb24gKENvbnRhaW5lcikge1xuICAgIGZ1bmN0aW9uIG51bUNoaWxkcmVuKGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB7IGNoaWxkLCBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBjb3VudCArPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIGNvdW50ICs9IGtleXMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG4gICAgQ29udGFpbmVyLm51bUNoaWxkcmVuID0gbnVtQ2hpbGRyZW47XG59KShDb250YWluZXIgfHwgKENvbnRhaW5lciA9IHt9KSk7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKGNvbnRhaW5lciwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgY2hpbGQsIGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgY29uc3QgeyBzdXBwb3J0IH0gPSBjb250ZXh0O1xuICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb25zdCBjaGlsZENvbnRleHQgPSBzdXBwb3J0LmdldFJlbmRlckNvbnRleHQoY2hpbGQsIGNvbnRleHQpO1xuICAgICAgICBzdXBwb3J0LnJlbmRlcihjaGlsZCwgY2hpbGRDb250ZXh0KTtcbiAgICB9XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBzdXBwb3J0LmdldFJlbmRlckNvbnRleHQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBzdXBwb3J0LnJlbmRlcihjb21wb25lbnQsIGNvbXBvbmVudENvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBzdXBwb3J0LmdldFJlbmRlckNvbnRleHQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBzdXBwb3J0LnJlbmRlcihjb21wb25lbnQsIGNvbXBvbmVudENvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZShjb250YWluZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGNoaWxkLCBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgIGNvbnN0IHsgc3VwcG9ydCB9ID0gY29udGV4dDtcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRDb250ZXh0ID0gc3VwcG9ydC5nZXRVcGRhdGVDb250ZXh0KGNoaWxkLCBjb250ZXh0KTtcbiAgICAgICAgc3VwcG9ydC51cGRhdGUoY2hpbGQsIGNoaWxkQ29udGV4dCk7XG4gICAgfVxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gc3VwcG9ydC5nZXRVcGRhdGVDb250ZXh0KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgc3VwcG9ydC51cGRhdGUoY29tcG9uZW50LCBjb21wb25lbnRDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gc3VwcG9ydC5nZXRVcGRhdGVDb250ZXh0KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgc3VwcG9ydC51cGRhdGUoY29tcG9uZW50LCBjb21wb25lbnRDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBoaXRUZXN0KGNvbnRhaW5lciwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgY2hpbGQsIGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgY29uc3QgeyBzdXBwb3J0IH0gPSBjb250ZXh0O1xuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBzdXBwb3J0LmdldFBvaW50ZXJDb250ZXh0KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwcG9ydC5oaXRUZXN0KGNvbXBvbmVudCwgY29tcG9uZW50Q29udGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGtleXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gc3VwcG9ydC5nZXRQb2ludGVyQ29udGV4dChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cHBvcnQuaGl0VGVzdChjb21wb25lbnQsIGNvbXBvbmVudENvbnRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb25zdCBjaGlsZENvbnRleHQgPSBzdXBwb3J0LmdldFBvaW50ZXJDb250ZXh0KGNoaWxkLCBjb250ZXh0KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwcG9ydC5oaXRUZXN0KGNoaWxkLCBjaGlsZENvbnRleHQpO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlDb250YWluZXJFeHRlbnNpb24oc3VwcG9ydCkge1xuICAgIHN1cHBvcnQudXBkYXRlSGFuZGxlcnMuc2V0KENPTlRBSU5FUiwgdXBkYXRlKTtcbiAgICBzdXBwb3J0LnJlbmRlckhhbmRsZXJzLnNldChDT05UQUlORVIsIHJlbmRlcik7XG4gICAgc3VwcG9ydC5oaXRUZXN0SGFuZGxlcnMuc2V0KENPTlRBSU5FUiwgaGl0VGVzdCk7XG59XG4iLCJpbXBvcnQgeyBDb2xvclRyYW5zZm9ybSwgTWF0cml4IH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IGFwcGx5Q29udGFpbmVyRXh0ZW5zaW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInO1xuY29uc3QgRU1QVFlfTUFUUklYID0gTWF0cml4LmVtcHR5KCk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKHN1cHBvcnQpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IDQwMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAzMDA7XG4gICAgICAgIHRoaXMuZnVsbHNjcmVlbiA9IHRydWU7XG4gICAgICAgIHRoaXMudXBkYXRlRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucmVuZGVyRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucG9pbnRlckVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudGltZSA9IC0xO1xuICAgICAgICB0aGlzLm1hdHJpeCA9IE1hdHJpeC5lbXB0eSgpO1xuICAgICAgICB0aGlzLmludGVybmFsVXBkYXRlID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IHRoaXMudGltZSA9PT0gLTEgPyAwIDogdGltZSAtIHRoaXMudGltZTtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZyYW1lKGRlbHRhVGltZSAvIDEwMDApO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN1cHBvcnQgPSBzdXBwb3J0O1xuICAgICAgICBhcHBseUNvbnRhaW5lckV4dGVuc2lvbih0aGlzLnN1cHBvcnQpO1xuICAgIH1cbiAgICB1cGRhdGUodGltZSA9IDApIHtcbiAgICAgICAgaWYgKCF0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBiYXNlID0ge1xuICAgICAgICAgICAgc3VwcG9ydDogdGhpcy5zdXBwb3J0LFxuICAgICAgICAgICAgdGltZSxcbiAgICAgICAgICAgIGRlcHRoOiAwLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5zdXBwb3J0LmdldFVwZGF0ZUNvbnRleHQodGhpcy5yb290LCBiYXNlKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0LnVwZGF0ZSh0aGlzLnJvb3QsIGNvbnRleHQpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5yb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdXBwb3J0LmNsZWFyKCk7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB7XG4gICAgICAgICAgICBzdXBwb3J0OiB0aGlzLnN1cHBvcnQsXG4gICAgICAgICAgICBkZXB0aDogMCxcbiAgICAgICAgICAgIG1hdHJpeDogdGhpcy5tYXRyaXgsXG4gICAgICAgICAgICBjb2xvclRyYW5zZm9ybTogQ29sb3JUcmFuc2Zvcm0uZW1wdHkoKSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuc3VwcG9ydC5nZXRSZW5kZXJDb250ZXh0KHRoaXMucm9vdCwgYmFzZSk7XG4gICAgICAgIHRoaXMuc3VwcG9ydC5yZW5kZXIodGhpcy5yb290LCBjb250ZXh0KTtcbiAgICB9XG4gICAgdXBkYXRlU2l6ZSgpIHtcbiAgICAgICAgY29uc3QgcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGZ1bGxzY3JlZW4gfSA9IHRoaXM7XG4gICAgICAgIGxldCB0YXJnZXRXaWR0aCA9IE1hdGguZmxvb3Iod2lkdGgpO1xuICAgICAgICBsZXQgdGFyZ2V0SGVpZ2h0ID0gTWF0aC5mbG9vcihoZWlnaHQpO1xuICAgICAgICBpZiAoZnVsbHNjcmVlbikge1xuICAgICAgICAgICAgdGFyZ2V0V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIHRhcmdldEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1hdHJpeC5hID0gcGl4ZWxSYXRpbztcbiAgICAgICAgdGhpcy5tYXRyaXguZCA9IHBpeGVsUmF0aW87XG4gICAgICAgIHRoaXMuc3VwcG9ydC5zZXRTaXplKHRhcmdldFdpZHRoLCB0YXJnZXRIZWlnaHQsIHBpeGVsUmF0aW8pO1xuICAgIH1cbiAgICB1cGRhdGVGcmFtZSh0aW1lID0gMCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU5leHRGcmFtZSgpO1xuICAgIH1cbiAgICB1cGRhdGVOZXh0RnJhbWUoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmludGVybmFsVXBkYXRlKTtcbiAgICB9XG4gICAgZGlzcGF0Y2hQb2ludGVyRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnBvaW50ZXJFbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHR5cGUsIGlkLCB4LCB5LCB9ID0gZXZlbnQ7XG4gICAgICAgIGNvbnN0IGJhc2UgPSB7XG4gICAgICAgICAgICBzdXBwb3J0OiB0aGlzLnN1cHBvcnQsXG4gICAgICAgICAgICBkZXB0aDogMCxcbiAgICAgICAgICAgIG1hdHJpeDogRU1QVFlfTUFUUklYLFxuICAgICAgICAgICAgbG9jYWw6IHsgeCwgeSB9LFxuICAgICAgICAgICAgZ2xvYmFsOiB7IHgsIHkgfSxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuc3VwcG9ydC5nZXRQb2ludGVyQ29udGV4dCh0aGlzLnJvb3QsIGJhc2UpO1xuICAgICAgICB0aGlzLnN1cHBvcnQuaGl0VGVzdCh0aGlzLnJvb3QsIGNvbnRleHQpO1xuICAgIH1cbiAgICBwbGF5KCkge1xuICAgICAgICBjb25zb2xlLmxvZygncGxheScpO1xuICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IC0xO1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTmV4dEZyYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGF1c2UoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXVzZScpO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IERlYnVnIGZyb20gJy4uL3V0aWxzL2RlYnVnJztcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZXNvbHZlcnMgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIGdldChhc3NldCkge1xuICAgICAgICBpZiAoIWFzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzb3VyY2UgPSB0aGlzLnJlc291cmNlcy5nZXQoYXNzZXQpO1xuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICByZXNvdXJjZSA9IHRoaXMucmVzb2x2ZShhc3NldCk7XG4gICAgICAgICAgICB0aGlzLnJlc291cmNlcy5zZXQoYXNzZXQsIHJlc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgfVxuICAgIGFkZChhc3NldCwgcmVzb3VyY2UpIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMuc2V0KGFzc2V0LCByZXNvdXJjZSk7XG4gICAgfVxuICAgIHJlbW92ZShhc3NldCkge1xuICAgICAgICB0aGlzLnJlc291cmNlcy5kZWxldGUoYXNzZXQpO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMuY2xlYXIoKTtcbiAgICB9XG4gICAgcmVzb2x2ZShhc3NldCkge1xuICAgICAgICBmb3IgKGNvbnN0IHJlc29sdmVyIG9mIHRoaXMucmVzb2x2ZXJzKSB7XG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHJlc29sdmVyKGFzc2V0KTtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBEZWJ1Zy53YXJuaW5nKGBSZXNvdXJjZSBub3QgcmVzb2x2ZWQ6ICR7YXNzZXR9YCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXggfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9pbnRlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvcG9pbnRlcic7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9pbnRlcmZhY2VzL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBSZXNvdXJjZXMgfSBmcm9tICcuL3Jlc291cmNlcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdXBwb3J0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51cGRhdGVEZXB0aCA9IDY0O1xuICAgICAgICB0aGlzLnVwZGF0ZUhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlbmRlckhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmhpdFRlc3RIYW5kbGVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IG5ldyBSZXNvdXJjZXMoKTtcbiAgICB9XG4gICAgdXBkYXRlKGNvbXBvbmVudCwgY29udGV4dCkge1xuICAgICAgICBpZiAoY29udGV4dC5kZXB0aCA+IHRoaXMudXBkYXRlRGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUNvbXBvbmVudC5pc0VuYWJsZWQoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcGVydHlIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyLCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudFtwcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY29tcG9uZW50Lm9uVXBkYXRlKSB7XG4gICAgICAgICAgICBjb21wb25lbnQub25VcGRhdGUoY29udGV4dC50aW1lKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy51cGRhdGVIYW5kbGVycy5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcihjb21wb25lbnQsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuZGVwdGggPiB0aGlzLnVwZGF0ZURlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFDb21wb25lbnQuaXNWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5yZW5kZXJIYW5kbGVycy5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhpdFRlc3QoY29tcG9uZW50LCBjb250ZXh0KSB7XG4gICAgICAgIGlmIChjb250ZXh0LmRlcHRoID4gdGhpcy51cGRhdGVEZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQ29tcG9uZW50LmlzVmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFQb2ludGVyLmlzUG9pbnRlckVuYWJsZWQoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmhpdFRlc3RIYW5kbGVycy5nZXQoY29tcG9uZW50LnR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBjb250ZXh0LmxvY2FsO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gaGFuZGxlcihjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsIGNvbnRleHQudHlwZSwgeCwgeSwgY29udGV4dC5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29udGV4dC50eXBlID09PSAncG9pbnRlck1vdmUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiAhY29tcG9uZW50LnBvaW50ZXJPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3ZlcicsIHgsIHksIGNvbnRleHQuaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghcmVzdWx0ICYmIGNvbXBvbmVudC5wb2ludGVyT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCAncG9pbnRlck91dCcsIHgsIHksIGNvbnRleHQuaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnQucG9pbnRlck92ZXIgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZ2V0VXBkYXRlQ29udGV4dChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGltZTogcGFyZW50LnRpbWUsXG4gICAgICAgICAgICBkZXB0aDogcGFyZW50LmRlcHRoICsgMSxcbiAgICAgICAgICAgIHN1cHBvcnQ6IHBhcmVudC5zdXBwb3J0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRSZW5kZXJDb250ZXh0KGNvbXBvbmVudCwgcGFyZW50KSB7XG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IFRyYW5zZm9ybS5nZXRNYXRyaXgoY29tcG9uZW50KTtcbiAgICAgICAgY29uc3QgY29sb3JUcmFuc2Zvcm0gPSBUcmFuc2Zvcm0uZ2V0Q29sb3JUcmFuc2Zvcm0oY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlcHRoOiBwYXJlbnQuZGVwdGggKyAxLFxuICAgICAgICAgICAgc3VwcG9ydDogcGFyZW50LnN1cHBvcnQsXG4gICAgICAgICAgICBtYXRyaXg6IE1hdHJpeC5jb25jYXQocGFyZW50Lm1hdHJpeCwgbWF0cml4KSxcbiAgICAgICAgICAgIGNvbG9yVHJhbnNmb3JtOiBDb2xvclRyYW5zZm9ybS5jb25jYXQocGFyZW50LmNvbG9yVHJhbnNmb3JtLCBjb2xvclRyYW5zZm9ybSksXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFBvaW50ZXJDb250ZXh0KGNvbXBvbmVudCwgcGFyZW50KSB7XG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IFRyYW5zZm9ybS5nZXRNYXRyaXgoY29tcG9uZW50KTtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtZWRNYXRyaXggPSBNYXRyaXguY29uY2F0KHBhcmVudC5tYXRyaXgsIG1hdHJpeCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXB0aDogcGFyZW50LmRlcHRoICsgMSxcbiAgICAgICAgICAgIHR5cGU6IHBhcmVudC50eXBlLFxuICAgICAgICAgICAgc3VwcG9ydDogcGFyZW50LnN1cHBvcnQsXG4gICAgICAgICAgICBnbG9iYWw6IHBhcmVudC5nbG9iYWwsXG4gICAgICAgICAgICBtYXRyaXg6IHRyYW5zZm9ybWVkTWF0cml4LFxuICAgICAgICAgICAgbG9jYWw6IE1hdHJpeC50cmFuc2Zvcm1JbnZlcnNlUG9pbnQodHJhbnNmb3JtZWRNYXRyaXgsIHBhcmVudC5nbG9iYWwpLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCBTdXBwb3J0IGZyb20gJy4vZW5naW5lL3N1cHBvcnQnO1xuaW1wb3J0IEVuZ2luZSBmcm9tICcuL2VuZ2luZS9lbmdpbmUnO1xuaW1wb3J0IERlYnVnIGZyb20gJy4vdXRpbHMvZGVidWcnO1xuZXhwb3J0ICogZnJvbSAnLi9lbmdpbmUvY29udGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL2VuZ2luZS9yZXNvdXJjZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3BvaW50ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3RyYW5zZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvc291cmNlJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy9waXZvdCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pbnB1dC9rZXlib2FyZCc7XG5leHBvcnQgKiBmcm9tICcuL2lucHV0L21vdXNlJztcbmV4cG9ydCAqIGZyb20gJy4vaW5wdXQvdG91Y2gnO1xuZXhwb3J0IHsgU3VwcG9ydCwgRW5naW5lLCBEZWJ1ZywgfTtcbiIsImV4cG9ydCBmdW5jdGlvbiBhcHBseUtleWJvYXJkU3VwcG9ydEV4dGVuc2lvbihlbmdpbmUpIHtcbn1cbiIsImZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgdHlwZSkge1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gZW5naW5lLnN1cHBvcnQ7XG4gICAgY29uc3QgY2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSBjbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50LmNsaWVudExlZnQ7XG4gICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSBjbGllbnRSZWN0LnRvcCAtIGVsZW1lbnQuY2xpZW50VG9wO1xuICAgIGVuZ2luZS5kaXNwYXRjaFBvaW50ZXJFdmVudCh7XG4gICAgICAgIHR5cGUsIHgsIHksXG4gICAgfSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseU1vdXNlU3VwcG9ydEV4dGVuc2lvbihlbmdpbmUpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGVuZ2luZS5zdXBwb3J0O1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJEb3duJyk7XG4gICAgfSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJVcCcpO1xuICAgIH0pO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJNb3ZlJyk7XG4gICAgfSk7XG59XG4iLCJmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsIHR5cGUpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGVuZ2luZS5zdXBwb3J0O1xuICAgIGNvbnN0IGNsaWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXTtcbiAgICAgICAgY29uc3QgeCA9IHRvdWNoLmNsaWVudFggLSBjbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50LmNsaWVudExlZnQ7XG4gICAgICAgIGNvbnN0IHkgPSB0b3VjaC5jbGllbnRZIC0gY2xpZW50UmVjdC50b3AgLSBlbGVtZW50LmNsaWVudFRvcDtcbiAgICAgICAgY29uc3QgaWQgPSB0b3VjaC5pZGVudGlmaWVyO1xuICAgICAgICBlbmdpbmUuZGlzcGF0Y2hQb2ludGVyRXZlbnQoe1xuICAgICAgICAgICAgdHlwZSwgeCwgeSwgaWQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5VG91Y2hTdXBwb3J0RXh0ZW5zaW9uKGVuZ2luZSkge1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gZW5naW5lLnN1cHBvcnQ7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJEb3duJyk7XG4gICAgfSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChldmVudCkgPT4ge1xuICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyVXAnKTtcbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyTW92ZScpO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IHZhciBQaXZvdDtcbihmdW5jdGlvbiAoUGl2b3QpIHtcbiAgICBmdW5jdGlvbiBnZXRYKHBpdm90LCB3aWR0aCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WCB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFgpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RYICogd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFggPSBnZXRYO1xuICAgIGZ1bmN0aW9uIGdldFkocGl2b3QsIGhlaWdodCkge1xuICAgICAgICBjb25zdCB7IHBpdm90WSB9ID0gcGl2b3Q7XG4gICAgICAgIGlmIChwaXZvdFkpIHtcbiAgICAgICAgICAgIHJldHVybiAtcGl2b3RZICogaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBQaXZvdC5nZXRZID0gZ2V0WTtcbn0pKFBpdm90IHx8IChQaXZvdCA9IHt9KSk7XG4iLCJpbXBvcnQgRGVidWcgZnJvbSAnLi4vdXRpbHMvZGVidWcnO1xuZXhwb3J0IHZhciBQb2ludGVyO1xuKGZ1bmN0aW9uIChQb2ludGVyKSB7XG4gICAgZnVuY3Rpb24gaXNQb2ludGVyT3Zlcihwb2ludGVyKSB7XG4gICAgICAgIHJldHVybiAhIXBvaW50ZXIucG9pbnRlck92ZXI7XG4gICAgfVxuICAgIFBvaW50ZXIuaXNQb2ludGVyT3ZlciA9IGlzUG9pbnRlck92ZXI7XG4gICAgZnVuY3Rpb24gaXNQb2ludGVyRW5hYmxlZChwb2ludGVyKSB7XG4gICAgICAgIHJldHVybiBwb2ludGVyLnBvaW50ZXJFbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIFBvaW50ZXIuaXNQb2ludGVyRW5hYmxlZCA9IGlzUG9pbnRlckVuYWJsZWQ7XG4gICAgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChwb2ludGVyLCB0eXBlLCB4LCB5LCBpZCkge1xuICAgICAgICBjb25zdCBoYW5kbGVyTmFtZSA9IGBvbiR7dHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3R5cGUuc2xpY2UoMSl9YDtcbiAgICAgICAgaWYgKGhhbmRsZXJOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gcG9pbnRlcltoYW5kbGVyTmFtZV07XG4gICAgICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlLCB4LCB5LCBpZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgRGVidWcud2FybmluZyhgUG9pbnRlciBldmVudCB3aXRoIHR5cGU6ICR7dHlwZX0gbm90IGZvdW5kYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbn0pKFBvaW50ZXIgfHwgKFBvaW50ZXIgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBTb3VyY2U7XG4oZnVuY3Rpb24gKFNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIGdldFJlc291cmNlKHNvdXJjZSwgY29udGV4dCkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gc291cmNlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQuc3VwcG9ydC5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgfVxuICAgIFNvdXJjZS5nZXRSZXNvdXJjZSA9IGdldFJlc291cmNlO1xuICAgIGZ1bmN0aW9uIGlzTG9hZGVkKHNvdXJjZSwgY29udGV4dCkge1xuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGdldFJlc291cmNlKHNvdXJjZSwgY29udGV4dCk7XG4gICAgICAgIHJldHVybiAhIXJlc291cmNlPy5sb2FkZWQ7XG4gICAgfVxuICAgIFNvdXJjZS5pc0xvYWRlZCA9IGlzTG9hZGVkO1xufSkoU291cmNlIHx8IChTb3VyY2UgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBUcmFuc2Zvcm07XG4oZnVuY3Rpb24gKFRyYW5zZm9ybSkge1xuICAgIGZ1bmN0aW9uIGdldE1hdHJpeCh0cmFuc2Zvcm0pIHtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKG1hdHJpeCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhOiBtYXRyaXguYSA/PyAxLFxuICAgICAgICAgICAgICAgIGI6IG1hdHJpeC5iID8/IDAsXG4gICAgICAgICAgICAgICAgYzogbWF0cml4LmMgPz8gMCxcbiAgICAgICAgICAgICAgICBkOiBtYXRyaXguZCA/PyAxLFxuICAgICAgICAgICAgICAgIHR4OiBtYXRyaXgudHggPz8gMCxcbiAgICAgICAgICAgICAgICB0eTogbWF0cml4LnR5ID8/IDAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm90YXRpb24gfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gdHJhbnNmb3JtLnNjYWxlWCA/PyB0cmFuc2Zvcm0uc2NhbGUgPz8gMTtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gdHJhbnNmb3JtLnNjYWxlWSA/PyB0cmFuc2Zvcm0uc2NhbGUgPz8gMTtcbiAgICAgICAgY29uc3QgdHggPSB0cmFuc2Zvcm0ueCA/PyAwO1xuICAgICAgICBjb25zdCB0eSA9IHRyYW5zZm9ybS55ID8/IDA7XG4gICAgICAgIGlmIChyb3RhdGlvbikge1xuICAgICAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3Mocm90YXRpb24pO1xuICAgICAgICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW4ocm90YXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhOiBjb3MgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgYjogc2luICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIGM6IC1zaW4gKiBzY2FsZVksXG4gICAgICAgICAgICAgICAgZDogY29zICogc2NhbGVZLFxuICAgICAgICAgICAgICAgIHR4LFxuICAgICAgICAgICAgICAgIHR5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogc2NhbGVYLFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGM6IDAsXG4gICAgICAgICAgICBkOiBzY2FsZVksXG4gICAgICAgICAgICB0eCxcbiAgICAgICAgICAgIHR5LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBUcmFuc2Zvcm0uZ2V0TWF0cml4ID0gZ2V0TWF0cml4O1xuICAgIGZ1bmN0aW9uIGdldENvbG9yVHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhbHBoYU11bHRpcGxpZXI6IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA/PyAxLFxuICAgICAgICAgICAgICAgIHJlZE11bHRpcGxpZXI6IGNvbG9yVHJhbnNmb3JtLnJlZE11bHRpcGxpZXIgPz8gMSxcbiAgICAgICAgICAgICAgICBncmVlbk11bHRpcGxpZXI6IGNvbG9yVHJhbnNmb3JtLmdyZWVuTXVsdGlwbGllciA/PyAxLFxuICAgICAgICAgICAgICAgIGJsdWVNdWx0aXBsaWVyOiBjb2xvclRyYW5zZm9ybS5ibHVlTXVsdGlwbGllciA/PyAxLFxuICAgICAgICAgICAgICAgIGFscGhhT2Zmc2V0OiBjb2xvclRyYW5zZm9ybS5hbHBoYU9mZnNldCA/PyAwLFxuICAgICAgICAgICAgICAgIHJlZE9mZnNldDogY29sb3JUcmFuc2Zvcm0ucmVkT2Zmc2V0ID8/IDAsXG4gICAgICAgICAgICAgICAgZ3JlZW5PZmZzZXQ6IGNvbG9yVHJhbnNmb3JtLmdyZWVuT2Zmc2V0ID8/IDAsXG4gICAgICAgICAgICAgICAgYmx1ZU9mZnNldDogY29sb3JUcmFuc2Zvcm0uYmx1ZU9mZnNldCA/PyAwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHRpbnQgfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKHRpbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY29sb3IgPSAwLCB2YWx1ZSA9IDEgfSA9IHRpbnQ7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZUludmVydGVkID0gMSAtIHZhbHVlO1xuICAgICAgICAgICAgY29uc3QgciA9IChjb2xvciA+PiAxNikgJiAweGZmO1xuICAgICAgICAgICAgY29uc3QgZyA9IChjb2xvciA+PiA4KSAmIDB4ZmY7XG4gICAgICAgICAgICBjb25zdCBiID0gY29sb3IgJiAweGZmO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhbHBoYU11bHRpcGxpZXI6IHRyYW5zZm9ybS5hbHBoYSA/PyAxLFxuICAgICAgICAgICAgICAgIHJlZE11bHRpcGxpZXI6IHZhbHVlSW52ZXJ0ZWQsXG4gICAgICAgICAgICAgICAgZ3JlZW5NdWx0aXBsaWVyOiB2YWx1ZUludmVydGVkLFxuICAgICAgICAgICAgICAgIGJsdWVNdWx0aXBsaWVyOiB2YWx1ZUludmVydGVkLFxuICAgICAgICAgICAgICAgIGFscGhhT2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgIHJlZE9mZnNldDogciAqIHZhbHVlLFxuICAgICAgICAgICAgICAgIGdyZWVuT2Zmc2V0OiBnICogdmFsdWUsXG4gICAgICAgICAgICAgICAgYmx1ZU9mZnNldDogYiAqIHZhbHVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxwaGFNdWx0aXBsaWVyOiB0cmFuc2Zvcm0uYWxwaGEgPz8gMSxcbiAgICAgICAgICAgIHJlZE11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBncmVlbk11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBibHVlTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGFscGhhT2Zmc2V0OiAwLFxuICAgICAgICAgICAgcmVkT2Zmc2V0OiAwLFxuICAgICAgICAgICAgZ3JlZW5PZmZzZXQ6IDAsXG4gICAgICAgICAgICBibHVlT2Zmc2V0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBUcmFuc2Zvcm0uZ2V0Q29sb3JUcmFuc2Zvcm0gPSBnZXRDb2xvclRyYW5zZm9ybTtcbn0pKFRyYW5zZm9ybSB8fCAoVHJhbnNmb3JtID0ge30pKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERlYnVnIHtcbiAgICBzdGF0aWMgbG9nKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gICAgfVxuICAgIHN0YXRpYyBlcnJvciguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLmVycm9ycy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMuZXJyb3JzLnNldChpZCwgY291bnQpO1xuICAgIH1cbiAgICBzdGF0aWMgd2FybmluZyguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLndhcm5pbmdzLmdldChpZCk7XG4gICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICB0aGlzLndhcm5pbmdzLnNldChpZCwgY291bnQpO1xuICAgIH1cbn1cbkRlYnVnLmVycm9ycyA9IG5ldyBNYXAoKTtcbkRlYnVnLndhcm5pbmdzID0gbmV3IE1hcCgpO1xuIiwiZXhwb3J0IHZhciBCb3VuZHM7XG4oZnVuY3Rpb24gKEJvdW5kcykge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWluWDogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG1pblk6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtYXhYOiBOdW1iZXIuTUlOX1ZBTFVFLFxuICAgICAgICAgICAgbWF4WTogTnVtYmVyLk1JTl9WQUxVRSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQm91bmRzLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB9ID0gYm91bmRzO1xuICAgICAgICByZXR1cm4gbWluWCA9PT0gTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICAgICAgJiYgbWluWSA9PT0gTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICAgICAgJiYgbWF4WCA9PT0gTnVtYmVyLk1JTl9WQUxVRVxuICAgICAgICAgICAgJiYgbWF4WSA9PT0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICB9XG4gICAgQm91bmRzLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIHRvUmVjdGFuZ2xlKGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IG1pblgsIG1pblksIG1heFgsIG1heFksIH0gPSBib3VuZHM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBtaW5YLFxuICAgICAgICAgICAgeTogbWluWSxcbiAgICAgICAgICAgIHdpZHRoOiBtYXhYIC0gbWluWCxcbiAgICAgICAgICAgIGhlaWdodDogbWF4WSAtIG1pblksXG4gICAgICAgIH07XG4gICAgfVxuICAgIEJvdW5kcy50b1JlY3RhbmdsZSA9IHRvUmVjdGFuZ2xlO1xuICAgIGZ1bmN0aW9uIHRlc3RYKGJvdW5kcywgeCkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RYID0gdGVzdFg7XG4gICAgZnVuY3Rpb24gdGVzdFkoYm91bmRzLCB5KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFkgPSB0ZXN0WTtcbiAgICBmdW5jdGlvbiB0ZXN0KGJvdW5kcywgeCwgeSkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0ID0gdGVzdDtcbiAgICBmdW5jdGlvbiB0ZXN0UG9pbnQoYm91bmRzLCBwb2ludCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0UG9pbnQgPSB0ZXN0UG9pbnQ7XG59KShCb3VuZHMgfHwgKEJvdW5kcyA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIENvbG9yVHJhbnNmb3JtO1xuKGZ1bmN0aW9uIChDb2xvclRyYW5zZm9ybSkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxwaGFNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgcmVkTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGdyZWVuTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGJsdWVNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYWxwaGFPZmZzZXQ6IDAsXG4gICAgICAgICAgICByZWRPZmZzZXQ6IDAsXG4gICAgICAgICAgICBncmVlbk9mZnNldDogMCxcbiAgICAgICAgICAgIGJsdWVPZmZzZXQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gY29uY2F0KGN0MSwgY3QwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbHBoYU11bHRpcGxpZXI6IGN0MS5hbHBoYU11bHRpcGxpZXIgKiBjdDAuYWxwaGFNdWx0aXBsaWVyLFxuICAgICAgICAgICAgcmVkTXVsdGlwbGllcjogY3QxLnJlZE11bHRpcGxpZXIgKiBjdDAucmVkTXVsdGlwbGllcixcbiAgICAgICAgICAgIGdyZWVuTXVsdGlwbGllcjogY3QxLmdyZWVuTXVsdGlwbGllciAqIGN0MC5ncmVlbk11bHRpcGxpZXIsXG4gICAgICAgICAgICBibHVlTXVsdGlwbGllcjogY3QxLmJsdWVNdWx0aXBsaWVyICogY3QwLmJsdWVNdWx0aXBsaWVyLFxuICAgICAgICAgICAgYWxwaGFPZmZzZXQ6IGN0MS5hbHBoYU11bHRpcGxpZXIgKiBjdDAuYWxwaGFPZmZzZXQgKyBjdDAuYWxwaGFPZmZzZXQsXG4gICAgICAgICAgICByZWRPZmZzZXQ6IGN0MS5yZWRNdWx0aXBsaWVyICogY3QwLnJlZE9mZnNldCArIGN0MC5yZWRPZmZzZXQsXG4gICAgICAgICAgICBncmVlbk9mZnNldDogY3QxLmdyZWVuTXVsdGlwbGllciAqIGN0MC5ncmVlbk9mZnNldCArIGN0MC5ncmVlbk9mZnNldCxcbiAgICAgICAgICAgIGJsdWVPZmZzZXQ6IGN0MS5ibHVlTXVsdGlwbGllciAqIGN0MC5ibHVlT2Zmc2V0ICsgY3QwLmJsdWVPZmZzZXQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmNvbmNhdCA9IGNvbmNhdDtcbiAgICBmdW5jdGlvbiBpc0RlZmF1bHQoY3QpIHtcbiAgICAgICAgcmV0dXJuIGN0LnJlZE11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmdyZWVuTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmFscGhhTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYmx1ZU9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmlzRGVmYXVsdCA9IGlzRGVmYXVsdDtcbn0pKENvbG9yVHJhbnNmb3JtIHx8IChDb2xvclRyYW5zZm9ybSA9IHt9KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbG9yLXRyYW5zZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2JvdW5kcyc7XG5leHBvcnQgKiBmcm9tICcuL21hdHJpeCc7XG5leHBvcnQgKiBmcm9tICcuL3BvaW50JztcbmV4cG9ydCAqIGZyb20gJy4vcmVjdGFuZ2xlJztcbiIsImV4cG9ydCB2YXIgTWF0cml4O1xuKGZ1bmN0aW9uIChNYXRyaXgpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGE6IDEsXG4gICAgICAgICAgICBiOiAwLFxuICAgICAgICAgICAgYzogMCxcbiAgICAgICAgICAgIGQ6IDEsXG4gICAgICAgICAgICB0eDogMCxcbiAgICAgICAgICAgIHR5OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBNYXRyaXguZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBjb25jYXQobWF0cml4MCwgbWF0cml4MSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogbWF0cml4MS5hICogbWF0cml4MC5hICsgbWF0cml4MS5iICogbWF0cml4MC5jLFxuICAgICAgICAgICAgYjogbWF0cml4MS5hICogbWF0cml4MC5iICsgbWF0cml4MS5iICogbWF0cml4MC5kLFxuICAgICAgICAgICAgYzogbWF0cml4MS5jICogbWF0cml4MC5hICsgbWF0cml4MS5kICogbWF0cml4MC5jLFxuICAgICAgICAgICAgZDogbWF0cml4MS5jICogbWF0cml4MC5iICsgbWF0cml4MS5kICogbWF0cml4MC5kLFxuICAgICAgICAgICAgdHg6IG1hdHJpeDEudHggKiBtYXRyaXgwLmEgKyBtYXRyaXgxLnR5ICogbWF0cml4MC5jICsgbWF0cml4MC50eCxcbiAgICAgICAgICAgIHR5OiBtYXRyaXgxLnR4ICogbWF0cml4MC5iICsgbWF0cml4MS50eSAqIG1hdHJpeDAuZCArIG1hdHJpeDAudHksXG4gICAgICAgIH07XG4gICAgfVxuICAgIE1hdHJpeC5jb25jYXQgPSBjb25jYXQ7XG4gICAgZnVuY3Rpb24gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KSB7XG4gICAgICAgIHJldHVybiBtYXRyaXguYSAqIG1hdHJpeC5kIC0gbWF0cml4LmIgKiBtYXRyaXguYztcbiAgICB9XG4gICAgTWF0cml4LmdldERldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQ7XG4gICAgZnVuY3Rpb24gaW52ZXJ0KG1hdHJpeCkge1xuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudChtYXRyaXgpO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIG1hdHJpeC5hID0gMDtcbiAgICAgICAgICAgIG1hdHJpeC5iID0gMDtcbiAgICAgICAgICAgIG1hdHJpeC5jID0gMDtcbiAgICAgICAgICAgIG1hdHJpeC5kID0gMDtcbiAgICAgICAgICAgIG1hdHJpeC50eCA9IC1tYXRyaXgudHg7XG4gICAgICAgICAgICBtYXRyaXgudHkgPSAtbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGV0ZXJtaW5hbnQgPSAxLjAgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBtYXRyaXguZCAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgY29uc3QgYSA9IG1hdHJpeC5hICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICBtYXRyaXguYSA9IGQ7XG4gICAgICAgICAgICBtYXRyaXguYiAqPSAtZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICBtYXRyaXguYyAqPSAtZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICBtYXRyaXguZCA9IGE7XG4gICAgICAgICAgICBjb25zdCB0eCA9IC1tYXRyaXguYSAqIG1hdHJpeC50eCAtIG1hdHJpeC5jICogbWF0cml4LnR5O1xuICAgICAgICAgICAgY29uc3QgdHkgPSAtbWF0cml4LmIgKiBtYXRyaXgudHggLSBtYXRyaXguZCAqIG1hdHJpeC50eTtcbiAgICAgICAgICAgIG1hdHJpeC50eCA9IHR4O1xuICAgICAgICAgICAgbWF0cml4LnR5ID0gdHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTWF0cml4LmludmVydCA9IGludmVydDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHBvaW50KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB4ICogbWF0cml4LmEgKyB5ICogbWF0cml4LmMgKyBtYXRyaXgudHgsXG4gICAgICAgICAgICB5OiB4ICogbWF0cml4LmIgKyB5ICogbWF0cml4LmQgKyBtYXRyaXgudHksXG4gICAgICAgIH07XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludCA9IHRyYW5zZm9ybVBvaW50O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUludmVyc2VQb2ludChtYXRyaXgsIHBvaW50KSB7XG4gICAgICAgIGxldCBkZXRlcm1pbmFudCA9IGdldERldGVybWluYW50KG1hdHJpeCk7XG4gICAgICAgIGlmIChkZXRlcm1pbmFudCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiAtbWF0cml4LnR4LFxuICAgICAgICAgICAgICAgIHk6IC1tYXRyaXgudHksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGRldGVybWluYW50ID0gMSAvIGRldGVybWluYW50O1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogZGV0ZXJtaW5hbnQgKiAobWF0cml4LmMgKiAobWF0cml4LnR5IC0geSkgKyBtYXRyaXguZCAqICh4IC0gbWF0cml4LnR4KSksXG4gICAgICAgICAgICB5OiBkZXRlcm1pbmFudCAqIChtYXRyaXguYSAqICh5IC0gbWF0cml4LnR5KSArIG1hdHJpeC5iICogKG1hdHJpeC50eCAtIHgpKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybUludmVyc2VQb2ludCA9IHRyYW5zZm9ybUludmVyc2VQb2ludDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Cb3VuZHMobWF0cml4LCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyBhLCBiLCBjLCBkLCB0eCwgdHksIH0gPSBtYXRyaXg7XG4gICAgICAgIGNvbnN0IHJ4ID0gYm91bmRzLng7XG4gICAgICAgIGNvbnN0IHJ5ID0gYm91bmRzLnk7XG4gICAgICAgIGNvbnN0IHJyID0gcnggKyBib3VuZHMud2lkdGg7XG4gICAgICAgIGNvbnN0IHJiID0gcnkgKyBib3VuZHMuaGVpZ2h0O1xuICAgICAgICBjb25zdCBueDEgPSByeCAqIGEgKyByeSAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkxID0gcnggKiBiICsgcnkgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54MiA9IHJyICogYSArIHJ5ICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTIgPSByciAqIGIgKyByeSAqIGQgKyB0eTtcbiAgICAgICAgY29uc3QgbngzID0gcnIgKiBhICsgcmIgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MyA9IHJyICogYiArIHJiICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDQgPSByeCAqIGEgKyByYiAqIGMgKyB0eDtcbiAgICAgICAgY29uc3Qgbnk0ID0gcnggKiBiICsgcmIgKiBkICsgdHk7XG4gICAgICAgIGxldCBsZWZ0ID0gbngxO1xuICAgICAgICBpZiAobGVmdCA+IG54Mikge1xuICAgICAgICAgICAgbGVmdCA9IG54MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54Mykge1xuICAgICAgICAgICAgbGVmdCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54NCkge1xuICAgICAgICAgICAgbGVmdCA9IG54NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9wID0gbnkxO1xuICAgICAgICBpZiAodG9wID4gbnkyKSB7XG4gICAgICAgICAgICB0b3AgPSBueTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcCA+IG55Mykge1xuICAgICAgICAgICAgdG9wID0gbnkzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3AgPiBueTQpIHtcbiAgICAgICAgICAgIHRvcCA9IG55NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmlnaHQgPSBueDE7XG4gICAgICAgIGlmIChyaWdodCA8IG54Mikge1xuICAgICAgICAgICAgcmlnaHQgPSBueDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0IDwgbngzKSB7XG4gICAgICAgICAgICByaWdodCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgPCBueDQpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbng0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBib3R0b20gPSBueTE7XG4gICAgICAgIGlmIChib3R0b20gPCBueTIpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tIDwgbnkzKSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdHRvbSA8IG55NCkge1xuICAgICAgICAgICAgYm90dG9tID0gbnk0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBsZWZ0LFxuICAgICAgICAgICAgeTogdG9wLFxuICAgICAgICAgICAgd2lkdGg6IHJpZ2h0IC0gbGVmdCxcbiAgICAgICAgICAgIGhlaWdodDogYm90dG9tIC0gdG9wLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtQm91bmRzID0gdHJhbnNmb3JtQm91bmRzO1xufSkoTWF0cml4IHx8IChNYXRyaXggPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBQb2ludDtcbihmdW5jdGlvbiAoUG9pbnQpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgIH1cbiAgICBQb2ludC5lbXB0eSA9IGVtcHR5O1xufSkoUG9pbnQgfHwgKFBvaW50ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUmVjdGFuZ2xlO1xuKGZ1bmN0aW9uIChSZWN0YW5nbGUpIHtcbiAgICBmdW5jdGlvbiBjb250YWlucyhyZWN0YW5nbGUsIHBvaW50KSB7XG4gICAgICAgIHJldHVybiByZWN0YW5nbGUueCA8IHBvaW50LnhcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS54ICsgcmVjdGFuZ2xlLndpZHRoID4gcG9pbnQueFxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnkgPCBwb2ludC55XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueSArIHJlY3RhbmdsZS5oZWlnaHQgPiBwb2ludC55O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuY29udGFpbnMgPSBjb250YWlucztcbiAgICBmdW5jdGlvbiBpc0VtcHR5KHJlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gIXJlY3RhbmdsZS53aWR0aCB8fCAhcmVjdGFuZ2xlLmhlaWdodDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmlzRW1wdHkgPSBpc0VtcHR5O1xufSkoUmVjdGFuZ2xlIHx8IChSZWN0YW5nbGUgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QsIFNvdXJjZSwgfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5pbXBvcnQgeyBNYXRyaXgsIFJlY3RhbmdsZSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBhcHBseUltYWdlRXh0ZW5zaW9uLCBJTUFHRSB9IGZyb20gJy4vaW1hZ2UnO1xubGV0IHRlbXBDb250ZXh0O1xuZnVuY3Rpb24gaXNEZWZhdWx0Q29sb3JUcmFuc2Zvcm0oY3QpIHtcbiAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAmJiBjdC5ncmVlbk11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICYmIGN0LmdyZWVuT2Zmc2V0ID09PSAwXG4gICAgICAgICYmIGN0LmJsdWVPZmZzZXQgPT09IDBcbiAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG59XG5mdW5jdGlvbiB1cGRhdGVUZW1wQ29udGV4dChjb250ZXh0KSB7XG4gICAgaWYgKCF0ZW1wQ29udGV4dCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGVtcENvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG4gICAgaWYgKHRlbXBDb250ZXh0LmNhbnZhcy53aWR0aCAhPT0gY29udGV4dC5jYW52YXMud2lkdGgpIHtcbiAgICAgICAgdGVtcENvbnRleHQuY2FudmFzLndpZHRoID0gY29udGV4dC5jYW52YXMud2lkdGg7XG4gICAgfVxuICAgIGlmICh0ZW1wQ29udGV4dC5jYW52YXMuaGVpZ2h0ICE9PSBjb250ZXh0LmNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgdGVtcENvbnRleHQuY2FudmFzLmhlaWdodCA9IGNvbnRleHQuY2FudmFzLmhlaWdodDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ2FudmFzQ29sb3IoaW1hZ2UsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZXNvdXJjZSA9IFNvdXJjZS5nZXRSZXNvdXJjZShpbWFnZSwgY29udGV4dCk7XG4gICAgaWYgKCFyZXNvdXJjZT8ubG9hZGVkIHx8ICFyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgc3VwcG9ydCwgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IHsgY29udGV4dDJkIH0gPSBzdXBwb3J0O1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG4gICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICBpZiAoaXNEZWZhdWx0Q29sb3JUcmFuc2Zvcm0oY29sb3JUcmFuc2Zvcm0pKSB7XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHVwZGF0ZVRlbXBDb250ZXh0KGNvbnRleHQyZCk7XG4gICAgICAgIGNvbnN0IGJvdW5kcyA9IE1hdHJpeC50cmFuc2Zvcm1Cb3VuZHMobWF0cml4LCB7XG4gICAgICAgICAgICB4LCB5LCB3aWR0aCwgaGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKFJlY3RhbmdsZS5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0ZW1wQ29udGV4dC5jbGVhclJlY3QoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICB0ZW1wQ29udGV4dC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgdGVtcENvbnRleHQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gdGVtcENvbnRleHQuZ2V0SW1hZ2VEYXRhKGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgY29uc3Qgcm0gPSBjb2xvclRyYW5zZm9ybS5yZWRNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBnbSA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgYm0gPSBjb2xvclRyYW5zZm9ybS5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgYW0gPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IHJvID0gY29sb3JUcmFuc2Zvcm0ucmVkT2Zmc2V0O1xuICAgICAgICBjb25zdCBnbyA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuT2Zmc2V0O1xuICAgICAgICBjb25zdCBibyA9IGNvbG9yVHJhbnNmb3JtLmJsdWVPZmZzZXQ7XG4gICAgICAgIGNvbnN0IGFvID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFPZmZzZXQ7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gaW1hZ2VEYXRhO1xuICAgICAgICBjb25zdCB7IGxlbmd0aCB9ID0gZGF0YTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7KSB7XG4gICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogcm0gKyBybztcbiAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBnbSArIGdvO1xuICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGJtICsgYm87XG4gICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogYW0gKyBhbztcbiAgICAgICAgfVxuICAgICAgICB0ZW1wQ29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCBib3VuZHMueCwgYm91bmRzLnkpO1xuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UodGVtcENvbnRleHQuY2FudmFzLCBib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCwgYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24oc3VwcG9ydCkge1xuICAgIGFwcGx5SW1hZ2VFeHRlbnNpb24oc3VwcG9ydCk7XG4gICAgc3VwcG9ydC5yZW5kZXJIYW5kbGVycy5zZXQoSU1BR0UsIHJlbmRlckNhbnZhc0NvbG9yKTtcbn1cbiIsImltcG9ydCB7IFBpdm90LCBTb3VyY2UsIH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHsgYXBwbHlJbWFnZUV4dGVuc2lvbiwgSU1BR0UgfSBmcm9tICcuL2ltYWdlJztcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDYW52YXMoaW1hZ2UsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZXNvdXJjZSA9IFNvdXJjZS5nZXRSZXNvdXJjZShpbWFnZSwgY29udGV4dCk7XG4gICAgaWYgKCFyZXNvdXJjZT8ubG9hZGVkIHx8ICFyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgc3VwcG9ydCB9ID0gY29udGV4dDtcbiAgICBjb25zdCB7IGNvbnRleHQyZCB9ID0gc3VwcG9ydDtcbiAgICBjb25zdCB7IG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUNhbnZhc0ltYWdlRXh0ZW5zaW9uKHN1cHBvcnQpIHtcbiAgICBhcHBseUltYWdlRXh0ZW5zaW9uKHN1cHBvcnQpO1xuICAgIHN1cHBvcnQucmVuZGVySGFuZGxlcnMuc2V0KElNQUdFLCByZW5kZXJDYW52YXMpO1xufVxuIiwiaW1wb3J0IHsgUGl2b3QsIH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IHJlc29sdmVJbWFnZSB9IGZyb20gJ0BlMmQvcmVzb3VyY2VzJztcbmV4cG9ydCBjb25zdCBJTUFHRSA9ICdpbWFnZSc7XG5leHBvcnQgdmFyIEltYWdlO1xuKGZ1bmN0aW9uIChJbWFnZSkge1xuICAgIGZ1bmN0aW9uIGdldEJvdW5kcyhpbWFnZSwgY29udGV4dCkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc3VwcG9ydCB9ID0gY29udGV4dDtcbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBzdXBwb3J0LnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZT8ubG9hZGVkIHx8ICFyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4LCB5LCB3aWR0aCwgaGVpZ2h0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBJbWFnZS5nZXRCb3VuZHMgPSBnZXRCb3VuZHM7XG59KShJbWFnZSB8fCAoSW1hZ2UgPSB7fSkpO1xuZXhwb3J0IGZ1bmN0aW9uIGhpdFRlc3QoaW1hZ2UsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGxvY2FsIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGJvdW5kcyA9IEltYWdlLmdldEJvdW5kcyhpbWFnZSwgY29udGV4dCk7XG4gICAgcmV0dXJuICEhYm91bmRzICYmIFJlY3RhbmdsZS5jb250YWlucyhib3VuZHMsIGxvY2FsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUltYWdlRXh0ZW5zaW9uKHN1cHBvcnQpIHtcbiAgICBzdXBwb3J0LmhpdFRlc3RIYW5kbGVycy5zZXQoSU1BR0UsIGhpdFRlc3QpO1xuICAgIHN1cHBvcnQucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb2x2ZUltYWdlKTtcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9pbWFnZS1jYW52YXMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbWFnZS1jYW52YXMtY29sb3InO1xuIiwiaW1wb3J0IHsgRGVidWcgfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUltYWdlKGFzc2V0KSB7XG4gICAgY29uc3QgZXh0ZW5zaW9uID0gYXNzZXQuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICBzd2l0Y2ggKGV4dGVuc2lvbikge1xuICAgICAgICBjYXNlICdwbmcnOlxuICAgICAgICBjYXNlICdqcGcnOlxuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB7XG4gICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gYXNzZXQ7XG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGltYWdlIGxvYWRlZDogJHthc3NldH1gKTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5pbWFnZSA9IGltYWdlO1xuICAgICAgICAgICAgICAgIHJlc291cmNlLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlKSA9PiBEZWJ1Zy53YXJuaW5nKCdpbWFnZSBsb2FkIGVycm9yJywgZSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG4iLCJpbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgUGF0aENvbW1hbmQgfSBmcm9tICcuL3BhdGgnO1xuaW1wb3J0IHsgR3JhcGhpY3NTdHJpbmcgfSBmcm9tICcuL3N0cmluZyc7XG5leHBvcnQgdmFyIFJlY3RhbmdsZURhdGE7XG4oZnVuY3Rpb24gKFJlY3RhbmdsZURhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCB3aWR0aCA9IDAsIGhlaWdodCA9IDAsIH0gPSBkYXRhO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHgsIHkpO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHggKyB3aWR0aCwgeSArIGhlaWdodCk7XG4gICAgfVxuICAgIFJlY3RhbmdsZURhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoUmVjdGFuZ2xlRGF0YSB8fCAoUmVjdGFuZ2xlRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIEVsbGlwc2VEYXRhO1xuKGZ1bmN0aW9uIChFbGxpcHNlRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHJhZGl1cywgcmFkaXVzWCA9IDAsIHJhZGl1c1kgPSAwLCB9ID0gZGF0YTtcbiAgICAgICAgY29uc3QgcnggPSByYWRpdXMgPz8gcmFkaXVzWDtcbiAgICAgICAgY29uc3QgcnkgPSByYWRpdXMgPz8gcmFkaXVzWTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4IC0gcngsIHkgLSByeSk7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCArIHJ4LCB5ICsgcnkpO1xuICAgIH1cbiAgICBFbGxpcHNlRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShFbGxpcHNlRGF0YSB8fCAoRWxsaXBzZURhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBQYXRoRGF0YTtcbihmdW5jdGlvbiAoUGF0aERhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aERhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHBhdGhEYXRhO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tYW5kID0gZGF0YVtpXTtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBQYXRoRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShQYXRoRGF0YSB8fCAoUGF0aERhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBHcmFwaGljc0RhdGE7XG4oZnVuY3Rpb24gKEdyYXBoaWNzRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBkYXRhO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICAgICAgUmVjdGFuZ2xlRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgICAgICAgICAgIEVsbGlwc2VEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGF0aCc6XG4gICAgICAgICAgICAgICAgUGF0aERhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc0RhdGEgfHwgKEdyYXBoaWNzRGF0YSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdAZTJkL2dlb20nO1xuZXhwb3J0IHZhciBQYXRoQ29tbWFuZDtcbihmdW5jdGlvbiAoUGF0aENvbW1hbmQpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aCwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gcGF0aDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdtb3ZlVG8nOlxuICAgICAgICAgICAgY2FzZSAnbGluZVRvJzpcbiAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgbW92ZVRvLnggPz8gMCwgbW92ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjdXJ2ZVRvJzpcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1cnZlVG8uY3ggPz8gMCwgY3VydmVUby5jeSA/PyAwKTtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1cnZlVG8ueCA/PyAwLCBjdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjdWJpY0N1cnZlVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8uY3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLmN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLnN4ID8/IDAsIGN1YmljQ3VydmVUby5zeSA/PyAwKTtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby54ID8/IDAsIGN1YmljQ3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShQYXRoQ29tbWFuZCB8fCAoUGF0aENvbW1hbmQgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGF0aENvbW1hbmQsIH0gZnJvbSAnLi9wYXRoJztcbmNvbnN0IFRFU1RfQ09NTUFORCA9IC9bTW1MbEhoVnZDY1NzUXFUdEFhWnpdLztcbmNvbnN0IFRFU1RfU1BBQ0UgPSAvW1xccyxdLztcbmNvbnN0IFRFU1RfTlVNQkVSID0gL1stKy5cXGRdLztcbmV4cG9ydCBjbGFzcyBHcmFwaGljc1N0cmluZ1N0cmVhbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9ICcnO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgICAgICAgdGhpcy5jb21tYW5kID0gbnVsbDtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICB9XG4gICAgc2V0UGF0aChwYXRoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAwO1xuICAgIH1cbiAgICBoYXNEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiA8IHRoaXMucGF0aC5sZW5ndGg7XG4gICAgfVxuICAgIGdldENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmQ7XG4gICAgfVxuICAgIGdldFNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNpemU7XG4gICAgfVxuICAgIGdldEJ1ZmZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyO1xuICAgIH1cbiAgICByZWFkTmV4dCgpIHtcbiAgICAgICAgdGhpcy5yZWFkQ29tbWFuZCgpO1xuICAgICAgICB0aGlzLnJlYWROdW1iZXJzKCk7XG4gICAgfVxuICAgIHJlYWRDb21tYW5kKCkge1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICB3aGlsZSAodGhpcy5wb3NpdGlvbiA8IHRoaXMucGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSB0aGlzLnBhdGhbdGhpcy5wb3NpdGlvbl07XG4gICAgICAgICAgICBpZiAoVEVTVF9DT01NQU5ELnRlc3QoY29tbWFuZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBjb21tYW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbisrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlYWROdW1iZXJzKCkge1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgICBsZXQgbnVtYmVyID0gJyc7XG4gICAgICAgIHdoaWxlICh0aGlzLnBvc2l0aW9uIDwgdGhpcy5wYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY2hhciA9IHRoaXMucGF0aFt0aGlzLnBvc2l0aW9uXTtcbiAgICAgICAgICAgIGlmIChURVNUX05VTUJFUi50ZXN0KGNoYXIpKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChURVNUX1NQQUNFLnRlc3QoY2hhcikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlclt0aGlzLnNpemUrK10gPSBwYXJzZUZsb2F0KG51bWJlcik7XG4gICAgICAgICAgICAgICAgbnVtYmVyID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChURVNUX0NPTU1BTkQudGVzdChjaGFyKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbisrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChudW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyW3RoaXMuc2l6ZSsrXSA9IHBhcnNlRmxvYXQobnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBHcmFwaGljc1N0cmluZ1JlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtID0gbmV3IEdyYXBoaWNzU3RyaW5nU3RyZWFtKCk7XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IHsgdHlwZTogJ21vdmVUbycgfTtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFggPSAwO1xuICAgICAgICB0aGlzLmxhc3RZID0gMDtcbiAgICB9XG4gICAgc2V0UGF0aChwYXRoKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtLnNldFBhdGgocGF0aCk7XG4gICAgICAgIHRoaXMubGFzdFggPSAwO1xuICAgICAgICB0aGlzLmxhc3RZID0gMDtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gZmFsc2U7XG4gICAgfVxuICAgIGhhc0RhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmVhbS5oYXNEYXRhKCk7XG4gICAgfVxuICAgIGdldENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRFeGlzdHMgPyB0aGlzLmNvbW1hbmQgOiBudWxsO1xuICAgIH1cbiAgICByZWFkTmV4dCgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0ucmVhZE5leHQoKTtcbiAgICAgICAgdGhpcy5wYXJzZSgpO1xuICAgIH1cbiAgICBwYXJzZSgpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMuc3RyZWFtLmdldENvbW1hbmQoKTtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gISFjb21tYW5kO1xuICAgICAgICBpZiAoIXRoaXMuY29tbWFuZEV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuc3RyZWFtLmdldEJ1ZmZlcigpO1xuICAgICAgICBjb25zdCBbeDAsIHkwLCB4MSwgeTEsIHgyLCB5MixdID0gYnVmZmVyO1xuICAgICAgICBsZXQgY3ggPSAwO1xuICAgICAgICBsZXQgY3kgPSAwO1xuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbW92ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueCA9IHgwO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueSA9IHkwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ21vdmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnggPSB4MCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby55ID0geTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB5MDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0geDAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHkwICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0geDA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHgwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0geDAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IHgwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSB5MDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0geDE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IHkxO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IHgyO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IHkyO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSB4MCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IHkwICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0geDEgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSB5MSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0geDIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IHkyICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gY3g7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGN5O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0geTA7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0geDE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0geTE7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IGN4O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSBjeTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0geDAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSB5MCArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0geDEgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IHkxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0geDA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSB5MDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0geDE7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IHkxO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IHgwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IHkwICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0geDEgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSB5MSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gY3g7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSBjeTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0geDA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IHkwO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IGN4O1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gY3k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IHgwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0geTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IHJlYWRlciA9IG5ldyBHcmFwaGljc1N0cmluZ1JlYWRlcigpO1xuZXhwb3J0IHZhciBHcmFwaGljc1N0cmluZztcbihmdW5jdGlvbiAoR3JhcGhpY3NTdHJpbmcpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aCwgYm91bmRzKSB7XG4gICAgICAgIHJlYWRlci5zZXRQYXRoKHBhdGgpO1xuICAgICAgICB3aGlsZSAocmVhZGVyLmhhc0RhdGEoKSkge1xuICAgICAgICAgICAgcmVhZGVyLnJlYWROZXh0KCk7XG4gICAgICAgICAgICBjb25zdCBjb21tYW5kID0gcmVhZGVyLmdldENvbW1hbmQoKTtcbiAgICAgICAgICAgIGlmIChjb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgUGF0aENvbW1hbmQuY2FsY3VsYXRlQm91bmRzKGNvbW1hbmQsIGJvdW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgR3JhcGhpY3NTdHJpbmcuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoR3JhcGhpY3NTdHJpbmcgfHwgKEdyYXBoaWNzU3RyaW5nID0ge30pKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoaWNzIHtcbiAgICBjb25zdHJ1Y3RvcihzaGFwZSkge1xuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGU7XG4gICAgfVxuICAgIGJlZ2luRmlsbChjb2xvciA9IDAsIGFscGhhID0gMSkge1xuICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAnc29saWQnLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYmVnaW5CaXRtYXBGaWxsKHNyYywgbWF0cml4LCByZXBlYXQgPSB0cnVlLCBzbW9vdGggPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAnYml0bWFwJyxcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHJlcGVhdCxcbiAgICAgICAgICAgIHNtb290aCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYmVnaW5HcmFkaWVudEZpbGwodHlwZSwgY29sb3IsIGFscGhhLCByYXRpbywgbWF0cml4LCBzcHJlYWQgPSAncmVwZWF0JywgaW50ZXJwb2xhdGlvbiA9ICdyZ2InLCBmb2NhbFBvaW50UmF0aW8gPSAwKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICBzcHJlYWQsXG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9uLFxuICAgICAgICAgICAgZm9jYWxQb2ludFJhdGlvLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsaW5lU3R5bGUodGhpY2tuZXNzID0gMCwgY29sb3IgPSAwLCBhbHBoYSA9IDEsIHBpeGVsSGludGluZyA9IGZhbHNlLCBzY2FsZU1vZGUgPSAnbm9uZScsIGNhcHMgPSAncm91bmQnLCBqb2ludHMgPSAncm91bmQnLCBtaXRlckxpbWl0ID0gMykge1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHtcbiAgICAgICAgICAgIHRoaWNrbmVzcyxcbiAgICAgICAgICAgIHBpeGVsSGludGluZyxcbiAgICAgICAgICAgIHNjYWxlTW9kZSxcbiAgICAgICAgICAgIGNhcHMsXG4gICAgICAgICAgICBqb2ludHMsXG4gICAgICAgICAgICBtaXRlckxpbWl0LFxuICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsaW5lR3JhZGllbnRTdHlsZSh0eXBlLCBjb2xvciwgYWxwaGEsIHJhdGlvLCBtYXRyaXgsIHNwcmVhZCA9ICdyZXBlYXQnLCBpbnRlcnBvbGF0aW9uID0gJ3JnYicsIGZvY2FsUG9pbnRSYXRpbyA9IDApIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0cm9rZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Ryb2tlLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgc3ByZWFkLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGlvbixcbiAgICAgICAgICAgIGZvY2FsUG9pbnRSYXRpbyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGluZUJpdG1hcFN0eWxlKHNyYywgbWF0cml4LCByZXBlYXQgPSB0cnVlLCBzbW9vdGggPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXRoaXMuc3Ryb2tlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHJva2UuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdiaXRtYXAnLFxuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgcmVwZWF0LFxuICAgICAgICAgICAgc21vb3RoLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBtb3ZlVG8oeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5iZWdpblBhdGgoKTtcbiAgICAgICAgcGF0aC5wdXNoKHsgdHlwZTogJ21vdmVUbycsIHgsIHkgfSk7XG4gICAgfVxuICAgIGxpbmVUbyh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHsgdHlwZTogJ2xpbmVUbycsIHgsIHkgfSk7XG4gICAgfVxuICAgIGN1cnZlVG8oY3gsIGN5LCB4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdXJ2ZVRvJywgY3gsIGN5LCB4LCB5LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY3ViaWNDdXJ2ZVRvKGN4LCBjeSwgc3gsIHN5LCB4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdXJ2ZVRvJywgY3gsIGN5LCBzeCwgc3ksIHgsIHksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkcmF3Um91bmRSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIGVsbGlwc2VXaWR0aCA9IDAsIGVsbGlwc2VIZWlnaHQgPSAwKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICBjb25zdCB3ID0gZWxsaXBzZVdpZHRoO1xuICAgICAgICBjb25zdCBoID0gZWxsaXBzZUhlaWdodDtcbiAgICAgICAgY29uc3QgayA9IDAuNTUyMjg0ODtcbiAgICAgICAgY29uc3Qgb3ggPSAodyAvIDIpICogaztcbiAgICAgICAgY29uc3Qgb3kgPSAoaCAvIDIpICogaztcbiAgICAgICAgY29uc3QgeGUgPSB4ICsgdztcbiAgICAgICAgY29uc3QgeWUgPSB5ICsgaDtcbiAgICAgICAgY29uc3QgeG0gPSB4ICsgdyAvIDI7XG4gICAgICAgIGNvbnN0IHltID0geSArIGggLyAyO1xuICAgICAgICBjb25zdCBkeCA9IHdpZHRoIC0gdztcbiAgICAgICAgY29uc3QgZHkgPSBoZWlnaHQgLSBoO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ21vdmVUbycsXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeTogeW0sXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeCxcbiAgICAgICAgICAgIGN5OiB5bSAtIG95LFxuICAgICAgICAgICAgc3g6IHhtIC0gb3gsXG4gICAgICAgICAgICBzeTogeSxcbiAgICAgICAgICAgIHg6IHhtLFxuICAgICAgICAgICAgeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhtICsgZHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhtICsgb3ggKyBkeCxcbiAgICAgICAgICAgIGN5OiB5LFxuICAgICAgICAgICAgc3g6IHhlICsgZHgsXG4gICAgICAgICAgICBzeTogeW0gLSBveSxcbiAgICAgICAgICAgIHg6IHhlICsgZHgsXG4gICAgICAgICAgICB5OiB5bSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhlICsgZHgsXG4gICAgICAgICAgICB5OiB5bSArIGR5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhlICsgZHgsXG4gICAgICAgICAgICBjeTogeW0gKyBveSArIGR5LFxuICAgICAgICAgICAgc3g6IHhtICsgb3ggKyBkeCxcbiAgICAgICAgICAgIHN5OiB5ZSArIGR5LFxuICAgICAgICAgICAgeDogeG0gKyBkeCxcbiAgICAgICAgICAgIHk6IHllICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVUbycsXG4gICAgICAgICAgICB4OiB4bSxcbiAgICAgICAgICAgIHk6IHllICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeG0gLSBveCxcbiAgICAgICAgICAgIGN5OiB5ZSArIGR5LFxuICAgICAgICAgICAgc3g6IHgsXG4gICAgICAgICAgICBzeTogeW0gKyBveSArIGR5LFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHk6IHltICsgZHksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkcmF3UmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ3JlY3RhbmdsZSc7XG4gICAgICAgIGRhdGEueCA9IHg7XG4gICAgICAgIGRhdGEueSA9IHk7XG4gICAgICAgIGRhdGEud2lkdGggPSB3aWR0aDtcbiAgICAgICAgZGF0YS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIGRyYXdDaXJjbGUoeCwgeSwgcmFkaXVzKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ2VsbGlwc2UnO1xuICAgICAgICBkYXRhLnggPSB4O1xuICAgICAgICBkYXRhLnkgPSB5O1xuICAgICAgICBkYXRhLnJhZGl1cyA9IHJhZGl1cztcbiAgICB9XG4gICAgZHJhd0VsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEudHlwZSA9ICdlbGxpcHNlJztcbiAgICAgICAgZGF0YS5yYWRpdXNYID0gd2lkdGggLyAyO1xuICAgICAgICBkYXRhLnJhZGl1c1kgPSBoZWlnaHQgLyAyO1xuICAgICAgICBkYXRhLnggPSB4IC0gZGF0YS5yYWRpdXNYO1xuICAgICAgICBkYXRhLnkgPSB5IC0gZGF0YS5yYWRpdXNZO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2hhcGUuZGF0YTtcbiAgICB9XG4gICAgY3JlYXRlRGF0YSgpIHtcbiAgICAgICAgY29uc3QgeyBzaGFwZSwgZmlsbCwgc3Ryb2tlIH0gPSB0aGlzO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzaGFwZS5kYXRhKSkge1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzaGFwZS5kYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgc2hhcGUuZGF0YSA9IFtzaGFwZS5kYXRhXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNoYXBlLmRhdGEgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBncmFwaGljc0RhdGEgPSB7IHR5cGU6ICdwYXRoJywgZmlsbCwgc3Ryb2tlIH07XG4gICAgICAgIHNoYXBlLmRhdGEucHVzaChncmFwaGljc0RhdGEpO1xuICAgICAgICByZXR1cm4gZ3JhcGhpY3NEYXRhO1xuICAgIH1cbiAgICBiZWdpblBhdGgoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS5kYXRhID0gW107XG4gICAgICAgIHJldHVybiBkYXRhLmRhdGE7XG4gICAgfVxuICAgIGdldFBhdGgoKSB7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUgfSA9IHRoaXM7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzaGFwZS5kYXRhKSB8fCAhc2hhcGUuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHNoYXBlLmRhdGFbc2hhcGUuZGF0YS5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEuZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2RhdGEvZGF0YSc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvcGF0aCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvc3RyaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9zdHlsZSc7XG5leHBvcnQgKiBmcm9tICcuL2dyYXBoaWNzJztcbmV4cG9ydCAqIGZyb20gJy4vc2hhcGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFwZS1jYW52YXMnO1xuIiwiaW1wb3J0IHsgYXBwbHlTaGFwZUV4dGVuc2lvbiwgU0hBUEUgfSBmcm9tICcuL3NoYXBlJztcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTaGFwZShzaGFwZSwgY29udGV4dCkge1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q2FudmFzU2hhcGVFeHRlbnNpb24oc3VwcG9ydCkge1xuICAgIGFwcGx5U2hhcGVFeHRlbnNpb24oc3VwcG9ydCk7XG4gICAgc3VwcG9ydC5yZW5kZXJIYW5kbGVycy5zZXQoU0hBUEUsIHJlbmRlclNoYXBlKTtcbn1cbiIsImltcG9ydCB7IFBpdm90LCB9IGZyb20gJ0BlMmQvZW5naW5lJztcbmltcG9ydCB7IEJvdW5kcywgUmVjdGFuZ2xlIH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IHJlc29sdmVJbWFnZSB9IGZyb20gJ0BlMmQvcmVzb3VyY2VzJztcbmltcG9ydCB7IEdyYXBoaWNzRGF0YSB9IGZyb20gJy4vZGF0YS9kYXRhJztcbmltcG9ydCBHcmFwaGljcyBmcm9tICcuL2dyYXBoaWNzJztcbmV4cG9ydCBjb25zdCBTSEFQRSA9ICdzaGFwZSc7XG5leHBvcnQgdmFyIFNoYXBlO1xuKGZ1bmN0aW9uIChTaGFwZSkge1xuICAgIGZ1bmN0aW9uIGdldEdyYXBoaWNzKHNoYXBlKSB7XG4gICAgICAgIHJldHVybiBuZXcgR3JhcGhpY3Moc2hhcGUpO1xuICAgIH1cbiAgICBTaGFwZS5nZXRHcmFwaGljcyA9IGdldEdyYXBoaWNzO1xuICAgIGZ1bmN0aW9uIGdldEJvdW5kcyhzaGFwZSkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHNoYXBlO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYm91bmRzID0gQm91bmRzLmVtcHR5KCk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBHcmFwaGljc0RhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGFbaV0sIGJvdW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBHcmFwaGljc0RhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCb3VuZHMuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdpZHRoID0gYm91bmRzLm1heFggLSBib3VuZHMubWluWDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gYm91bmRzLm1heFkgLSBib3VuZHMubWluWTtcbiAgICAgICAgY29uc3QgeCA9IGJvdW5kcy5taW5YICsgUGl2b3QuZ2V0WChzaGFwZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gYm91bmRzLm1pblkgKyBQaXZvdC5nZXRZKHNoYXBlLCBoZWlnaHQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeCwgeSwgd2lkdGgsIGhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgU2hhcGUuZ2V0Qm91bmRzID0gZ2V0Qm91bmRzO1xufSkoU2hhcGUgfHwgKFNoYXBlID0ge30pKTtcbmV4cG9ydCBmdW5jdGlvbiBoaXRUZXN0KHNoYXBlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBsb2NhbCB9ID0gY29udGV4dDtcbiAgICBjb25zdCBib3VuZHMgPSBTaGFwZS5nZXRCb3VuZHMoc2hhcGUpO1xuICAgIHJldHVybiAhIWJvdW5kcyAmJiBSZWN0YW5nbGUuY29udGFpbnMoYm91bmRzLCBsb2NhbCk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlTaGFwZUV4dGVuc2lvbihzdXBwb3J0KSB7XG4gICAgc3VwcG9ydC5oaXRUZXN0SGFuZGxlcnMuc2V0KFNIQVBFLCBoaXRUZXN0KTtcbiAgICBzdXBwb3J0LnJlc291cmNlcy5yZXNvbHZlcnMuYWRkKHJlc29sdmVJbWFnZSk7XG59XG4iLCJjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmV4cG9ydCBjb25zdCBFTSA9IDEwMjQ7XG5jb25zdCBmb250cyA9IG5ldyBNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZUZvbnQoZm9udCwgc2l6ZSkge1xuICAgIHJldHVybiBgJHtzaXplfXB4ICR7Zm9udH1gO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1lYXN1cmVUZXh0KGZvbnQsIHNpemUsIHRleHQpIHtcbiAgICBjb250ZXh0LmZvbnQgPSBnZXRTdHlsZUZvbnQoZm9udCwgc2l6ZSk7XG4gICAgcmV0dXJuIGNvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhcldpZHRoKGZvbnQsIGNoYXIpIHtcbiAgICBsZXQgd2lkdGggPSBmb250LndpZHRocy5nZXQoY2hhcik7XG4gICAgaWYgKCF3aWR0aCkge1xuICAgICAgICB3aWR0aCA9IG1lYXN1cmVUZXh0KGZvbnQubmFtZSwgRU0sIGNoYXIpO1xuICAgICAgICBmb250LndpZHRocy5zZXQoY2hhciwgd2lkdGgpO1xuICAgIH1cbiAgICByZXR1cm4gd2lkdGg7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0S2VybmluZyhmb250LCBmaXJzdCwgc2Vjb25kKSB7XG4gICAgY29uc3QgcGFpciA9IGZpcnN0ICsgc2Vjb25kO1xuICAgIGxldCBrZXJuaW5nID0gZm9udC5rZXJuaW5ncy5nZXQocGFpcik7XG4gICAgaWYgKCFrZXJuaW5nKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoU2Vjb25kID0gZ2V0Q2hhcldpZHRoKGZvbnQsIHNlY29uZCk7XG4gICAgICAgIGNvbnN0IHdpZHRoVG90YWwgPSBtZWFzdXJlVGV4dChmb250Lm5hbWUsIEVNLCBmaXJzdCArIHNlY29uZCk7XG4gICAgICAgIGtlcm5pbmcgPSB3aWR0aFRvdGFsIC0gd2lkdGhTZWNvbmQ7XG4gICAgICAgIGZvbnQua2VybmluZ3Muc2V0KHBhaXIsIGtlcm5pbmcpO1xuICAgIH1cbiAgICByZXR1cm4ga2VybmluZztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRBZHZhbmNlKGZvbnQsIHNpemUsIGZpcnN0LCBzZWNvbmQpIHtcbiAgICBjb25zdCBzY2FsZSA9IHNpemUgLyBFTTtcbiAgICBjb25zdCB3aWR0aCA9IGdldENoYXJXaWR0aChmb250LCBmaXJzdCk7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgcmV0dXJuIHdpZHRoICogc2NhbGU7XG4gICAgfVxuICAgIGNvbnN0IGtlcm5pbmcgPSBnZXRLZXJuaW5nKGZvbnQsIGZpcnN0LCBzZWNvbmQpO1xuICAgIHJldHVybiBrZXJuaW5nICogc2NhbGU7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9udChuYW1lKSB7XG4gICAgbGV0IGZvbnQgPSBmb250cy5nZXQobmFtZSk7XG4gICAgaWYgKCFmb250KSB7XG4gICAgICAgIGZvbnQgPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgd2lkdGhzOiBuZXcgTWFwKCksXG4gICAgICAgICAgICBrZXJuaW5nczogbmV3IE1hcCgpLFxuICAgICAgICB9O1xuICAgICAgICBmb250cy5zZXQobmFtZSwgZm9udCk7XG4gICAgfVxuICAgIHJldHVybiBmb250O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldExpbmVXaWR0aChmb250LCBmb3JtYXQsIGxpbmUpIHtcbiAgICBsZXQgd2lkdGggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBmaXJzdCA9IGxpbmUuY2hhckF0KGkpO1xuICAgICAgICBjb25zdCBzZWNvbmQgPSBsaW5lLmNoYXJBdChpICsgMSk7XG4gICAgICAgIGNvbnN0IGFkdmFuY2UgPSBnZXRBZHZhbmNlKGZvbnQsIGZvcm1hdC5zaXplLCBmaXJzdCwgc2Vjb25kKTtcbiAgICAgICAgd2lkdGggKz0gYWR2YW5jZTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdC5sZXR0ZXJTcGFjaW5nICYmIGxpbmUubGVuZ3RoID4gMSkge1xuICAgICAgICB3aWR0aCArPSBmb3JtYXQubGV0dGVyU3BhY2luZyAqIChsaW5lLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgICByZXR1cm4gd2lkdGg7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dFdpZHRoKGZvbnQsIGZvcm1hdCwgbGluZXMpIHtcbiAgICBsZXQgd2lkdGggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICBjb25zdCBsaW5lV2lkdGggPSBnZXRMaW5lV2lkdGgoZm9udCwgZm9ybWF0LCBsaW5lKTtcbiAgICAgICAgaWYgKHdpZHRoIDwgbGluZVdpZHRoKSB7XG4gICAgICAgICAgICB3aWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gd2lkdGg7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dEhlaWdodChmb3JtYXQsIGxpbmVzKSB7XG4gICAgbGV0IGhlaWdodCA9IGZvcm1hdC5zaXplICogbGluZXMubGVuZ3RoO1xuICAgIGlmIChmb3JtYXQubGVhZGluZyAmJiBsaW5lcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGhlaWdodCArPSBmb3JtYXQubGVhZGluZyAqIChsaW5lcy5sZW5ndGggLSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGhlaWdodDtcbn1cbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0VGV4dEZvcm1hdCA9IHtcbiAgICBmb250OiAnYXJpYWwnLFxuICAgIHNpemU6IDE1LFxuICAgIGNvbG9yOiAwLFxuICAgIGFscGhhOiAxLFxuICAgIGJvbGQ6IGZhbHNlLFxuICAgIGl0YWxpYzogZmFsc2UsXG4gICAgdW5kZXJsaW5lOiBmYWxzZSxcbiAgICBsZXR0ZXJTcGFjaW5nOiAwLFxuICAgIGxlYWRpbmc6IDAsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbn07XG5jb25zdCBmb3JtYXQgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWxpZFRleHRGb3JtYXQodGV4dEZvcm1hdCkge1xuICAgIGZvcm1hdC5mb250ID0gdGV4dEZvcm1hdD8uZm9udCA/PyBkZWZhdWx0VGV4dEZvcm1hdC5mb250O1xuICAgIGZvcm1hdC5zaXplID0gdGV4dEZvcm1hdD8uc2l6ZSA/PyBkZWZhdWx0VGV4dEZvcm1hdC5zaXplO1xuICAgIGZvcm1hdC5jb2xvciA9IHRleHRGb3JtYXQ/LmNvbG9yID8/IGRlZmF1bHRUZXh0Rm9ybWF0LmNvbG9yO1xuICAgIGZvcm1hdC5hbHBoYSA9IHRleHRGb3JtYXQ/LmFscGhhID8/IGRlZmF1bHRUZXh0Rm9ybWF0LmFscGhhO1xuICAgIGZvcm1hdC5ib2xkID0gdGV4dEZvcm1hdD8uYm9sZCA/PyBkZWZhdWx0VGV4dEZvcm1hdC5ib2xkO1xuICAgIGZvcm1hdC5pdGFsaWMgPSB0ZXh0Rm9ybWF0Py5pdGFsaWMgPz8gZGVmYXVsdFRleHRGb3JtYXQuaXRhbGljO1xuICAgIGZvcm1hdC51bmRlcmxpbmUgPSB0ZXh0Rm9ybWF0Py51bmRlcmxpbmUgPz8gZGVmYXVsdFRleHRGb3JtYXQudW5kZXJsaW5lO1xuICAgIGZvcm1hdC5sZXR0ZXJTcGFjaW5nID0gdGV4dEZvcm1hdD8ubGV0dGVyU3BhY2luZyA/PyBkZWZhdWx0VGV4dEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgIGZvcm1hdC5sZWFkaW5nID0gdGV4dEZvcm1hdD8ubGVhZGluZyA/PyBkZWZhdWx0VGV4dEZvcm1hdC5sZWFkaW5nO1xuICAgIGZvcm1hdC5hbGlnbiA9IHRleHRGb3JtYXQ/LmFsaWduID8/IGRlZmF1bHRUZXh0Rm9ybWF0LmFsaWduO1xuICAgIGZvcm1hdC52ZXJ0aWNhbEFsaWduID0gdGV4dEZvcm1hdD8udmVydGljYWxBbGlnbiA/PyBkZWZhdWx0VGV4dEZvcm1hdC52ZXJ0aWNhbEFsaWduO1xuICAgIHJldHVybiBmb3JtYXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxpbmdWYWx1ZShhbGlnbikge1xuICAgIHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgICAgY2FzZSAnbGVmdCc6IHJldHVybiAwO1xuICAgICAgICBjYXNlICdjZW50ZXInOiByZXR1cm4gMC41O1xuICAgICAgICBjYXNlICdyaWdodCc6IHJldHVybiAxO1xuICAgICAgICBkZWZhdWx0OiByZXR1cm4gMDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VmVydGljYWxBbGluZ1ZhbHVlKGFsaWduKSB7XG4gICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgICBjYXNlICd0b3AnOiByZXR1cm4gMDtcbiAgICAgICAgY2FzZSAnbWlkZGxlJzogcmV0dXJuIDAuNTtcbiAgICAgICAgY2FzZSAnYm90dG9tJzogcmV0dXJuIDE7XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAwO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vdGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL2Zvcm1hdCc7XG5leHBvcnQgKiBmcm9tICcuL2ZvbnQnO1xuZXhwb3J0ICogZnJvbSAnLi90ZXh0LWNhbnZhcyc7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BlMmQvZW5naW5lJztcbmltcG9ydCB7IGNyZWF0ZUNvbG9yUGF0dGVybiB9IGZyb20gJ0BlMmQvY2FudmFzLXN1cHBvcnQnO1xuaW1wb3J0IHsgZ2V0QWR2YW5jZSwgZ2V0Rm9udCwgZ2V0TGluZVdpZHRoLCBnZXRTdHlsZUZvbnQsIGdldFRleHRIZWlnaHQsIGdldFRleHRXaWR0aCwgfSBmcm9tICcuL2ZvbnQnO1xuaW1wb3J0IHsgYXBwbHlUZXh0RXh0ZW5zaW9uLCBURVhUIH0gZnJvbSAnLi90ZXh0JztcbmltcG9ydCB7IGdldEFsaW5nVmFsdWUsIGdldFZlcnRpY2FsQWxpbmdWYWx1ZSwgZ2V0VmFsaWRUZXh0Rm9ybWF0IH0gZnJvbSAnLi9mb3JtYXQnO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNhbnZhc1RleHQoY29tcG9uZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSBjb21wb25lbnQ7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBtYXRyaXgsIGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0ZXh0Rm9ybWF0LCBib3JkZXIsIGJhY2tncm91bmQsIH0gPSBjb21wb25lbnQ7XG4gICAgY29uc3QgZm9ybWF0ID0gZ2V0VmFsaWRUZXh0Rm9ybWF0KHRleHRGb3JtYXQpO1xuICAgIGNvbnN0IGZvcm1hdFNpemUgPSBmb3JtYXQuc2l6ZTtcbiAgICBjb25zdCBmb3JtYXRMZXR0ZXJTcGFjaW5nID0gZm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgY29uc3QgZm9ybWF0TGVhZGluZyA9IGZvcm1hdC5sZWFkaW5nO1xuICAgIGNvbnN0IGZvbnQgPSBnZXRGb250KGZvcm1hdC5mb250KTtcbiAgICBjb25zdCB7IHN1cHBvcnQgfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgeyBjb250ZXh0MmQgfSA9IHN1cHBvcnQ7XG4gICAgY29uc3QgdGV4dFdpZHRoID0gZ2V0VGV4dFdpZHRoKGZvbnQsIGZvcm1hdCwgbGluZXMpO1xuICAgIGNvbnN0IHRleHRIZWlnaHQgPSBnZXRUZXh0SGVpZ2h0KGZvcm1hdCwgbGluZXMpO1xuICAgIGNvbnN0IHJlYWxXaWR0aCA9IHdpZHRoID8/IHRleHRXaWR0aDtcbiAgICBjb25zdCByZWFsSGVpZ2h0ID0gaGVpZ2h0ID8/IHRleHRIZWlnaHQ7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IFBpdm90LmdldFgoY29tcG9uZW50LCByZWFsV2lkdGgpO1xuICAgIGNvbnN0IG9mZnNldFkgPSBQaXZvdC5nZXRZKGNvbXBvbmVudCwgcmVhbEhlaWdodCk7XG4gICAgbGV0IHkgPSAwO1xuICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgYWxpZ25WZXJ0aWNhbFZhbHVlID0gZ2V0VmVydGljYWxBbGluZ1ZhbHVlKGZvcm1hdC52ZXJ0aWNhbEFsaWduKTtcbiAgICAgICAgeSA9IChoZWlnaHQgLSB0ZXh0SGVpZ2h0KSAqIGFsaWduVmVydGljYWxWYWx1ZTtcbiAgICAgICAgaWYgKHkgPCAwKSB7XG4gICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICBpZiAoYmFja2dyb3VuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICcnO1xuICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gY3JlYXRlQ29sb3JQYXR0ZXJuKGJhY2tncm91bmQsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgY29udGV4dDJkLmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0MmQucmVjdChvZmZzZXRYLCBvZmZzZXRZLCByZWFsV2lkdGgsIHJlYWxIZWlnaHQpO1xuICAgICAgICBjb250ZXh0MmQuZmlsbCgpO1xuICAgIH1cbiAgICBpZiAoYm9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gY3JlYXRlQ29sb3JQYXR0ZXJuKGJvcmRlciwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gJyc7XG4gICAgICAgIGNvbnRleHQyZC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29udGV4dDJkLnJlY3Qob2Zmc2V0WCwgb2Zmc2V0WSwgcmVhbFdpZHRoLCByZWFsSGVpZ2h0KTtcbiAgICAgICAgY29udGV4dDJkLnN0cm9rZSgpO1xuICAgIH1cbiAgICBjb250ZXh0MmQuZm9udCA9IGdldFN0eWxlRm9udChmb3JtYXQuZm9udCwgZm9ybWF0U2l6ZSk7XG4gICAgY29udGV4dDJkLnRleHRCYXNlbGluZSA9ICdhbHBoYWJldGljJztcbiAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnJztcbiAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gY3JlYXRlQ29sb3JQYXR0ZXJuKGZvcm1hdC5jb2xvciwgZm9ybWF0LmFscGhhLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgeSArPSBvZmZzZXRZO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICBjb25zdCBsaW5lV2lkdGggPSBnZXRMaW5lV2lkdGgoZm9udCwgZm9ybWF0LCBsaW5lKTtcbiAgICAgICAgY29uc3QgYWxpZ25WYWx1ZSA9IGdldEFsaW5nVmFsdWUoZm9ybWF0LmFsaWduKTtcbiAgICAgICAgbGV0IHggPSAocmVhbFdpZHRoIC0gbGluZVdpZHRoKSAqIGFsaWduVmFsdWU7XG4gICAgICAgIGlmICh4IDwgMCkge1xuICAgICAgICAgICAgeCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgeCArPSBvZmZzZXRYO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpbmUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gbGluZS5jaGFyQXQoaik7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmQgPSBsaW5lLmNoYXJBdChqICsgMSk7XG4gICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gZ2V0QWR2YW5jZShmb250LCBmb3JtYXRTaXplLCBmaXJzdCwgc2Vjb25kKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsVGV4dChmaXJzdCwgeCwgeSArIGZvcm1hdFNpemUpO1xuICAgICAgICAgICAgeCArPSBhZHZhbmNlICsgZm9ybWF0TGV0dGVyU3BhY2luZztcbiAgICAgICAgfVxuICAgICAgICB5ICs9IGZvcm1hdFNpemUgKyBmb3JtYXRMZWFkaW5nO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUNhbnZhc1RleHRFeHRlbnNpb24oc3VwcG9ydCkge1xuICAgIGFwcGx5VGV4dEV4dGVuc2lvbihzdXBwb3J0KTtcbiAgICBzdXBwb3J0LnJlbmRlckhhbmRsZXJzLnNldChURVhULCByZW5kZXJDYW52YXNUZXh0KTtcbn1cbiIsImltcG9ydCB7IFBpdm90LCB9IGZyb20gJ0BlMmQvZW5naW5lJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBnZXRWYWxpZFRleHRGb3JtYXQgfSBmcm9tICcuL2Zvcm1hdCc7XG5pbXBvcnQgeyBnZXRGb250LCBnZXRUZXh0V2lkdGgsIGdldFRleHRIZWlnaHQgfSBmcm9tICcuL2ZvbnQnO1xuZXhwb3J0IGNvbnN0IFRFWFQgPSAndGV4dCc7XG5leHBvcnQgdmFyIFRleHQ7XG4oZnVuY3Rpb24gKFRleHQpIHtcbiAgICBmdW5jdGlvbiBnZXRCb3VuZHMoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgbGV0IHsgd2lkdGgsIGhlaWdodCB9ID0gY29tcG9uZW50O1xuICAgICAgICBjb25zdCB7IHRleHRGb3JtYXQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgZm9ybWF0ID0gZ2V0VmFsaWRUZXh0Rm9ybWF0KHRleHRGb3JtYXQpO1xuICAgICAgICBpZiAoIXdpZHRoKSB7XG4gICAgICAgICAgICBjb25zdCBmb250ID0gZ2V0Rm9udChmb3JtYXQuZm9udCk7XG4gICAgICAgICAgICB3aWR0aCA9IGdldFRleHRXaWR0aChmb250LCBmb3JtYXQsIGxpbmVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhlaWdodCkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gZ2V0VGV4dEhlaWdodChmb3JtYXQsIGxpbmVzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChjb21wb25lbnQsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoY29tcG9uZW50LCBoZWlnaHQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeCwgeSwgd2lkdGgsIGhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgVGV4dC5nZXRCb3VuZHMgPSBnZXRCb3VuZHM7XG59KShUZXh0IHx8IChUZXh0ID0ge30pKTtcbmV4cG9ydCBmdW5jdGlvbiBoaXRUZXN0KHRleHQsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGxvY2FsIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGJvdW5kcyA9IFRleHQuZ2V0Qm91bmRzKHRleHQpO1xuICAgIHJldHVybiAhIWJvdW5kcyAmJiBSZWN0YW5nbGUuY29udGFpbnMoYm91bmRzLCBsb2NhbCk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlUZXh0RXh0ZW5zaW9uKHN1cHBvcnQpIHtcbiAgICBzdXBwb3J0LmhpdFRlc3RIYW5kbGVycy5zZXQoVEVYVCwgaGl0VGVzdCk7XG59XG4iLCJleHBvcnQgY29uc3QgTElORUFSID0gJ2xpbmVhcic7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDID0gJ3F1YWRyYXRpYyc7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDX0lOID0gJ3F1YWRyYXRpY2luJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUNfT1VUID0gJ3F1YWRyYXRpY291dCc7XG5leHBvcnQgY29uc3QgQ1VCSUMgPSAnY3ViaWMnO1xuZXhwb3J0IGNvbnN0IENVQklDX0lOID0gJ2N1YmljaW4nO1xuZXhwb3J0IGNvbnN0IENVQklDX09VVCA9ICdjdWJpY291dCc7XG5leHBvcnQgY29uc3QgUVVBUlRJQyA9ICdxdWFydGljJztcbmV4cG9ydCBjb25zdCBRVUFSVElDX0lOID0gJ3F1YXJ0aWNpbic7XG5leHBvcnQgY29uc3QgUVVBUlRJQ19PVVQgPSAncXVhcnRpY291dCc7XG5leHBvcnQgY29uc3QgUVVJTlRJQyA9ICdxdWludGljJztcbmV4cG9ydCBjb25zdCBRVUlOVElDX0lOID0gJ3F1aW50aWNpbic7XG5leHBvcnQgY29uc3QgUVVJTlRJQ19PVVQgPSAncXVpbnRpY291dCc7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTCA9ICdxdWludGljJztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMX0lOID0gJ3F1aW50aWNpbic7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTF9PVVQgPSAncXVpbnRpY291dCc7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUwgPSAnZXhwb25lbnRpYWwnO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMX0lOID0gJ2V4cG9uZW50aWFsaW4nO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMX09VVCA9ICdleHBvbmVudGlhbG91dCc7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVIgPSAnY2lyY3VsYXInO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSX0lOID0gJ2NpcmN1bGFyaW4nO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSX09VVCA9ICdjaXJjdWxhcm91dCc7XG5leHBvcnQgY29uc3QgRUxBU1RJQyA9ICdlbGFzdGljJztcbmV4cG9ydCBjb25zdCBFTEFTVElDX0lOID0gJ2VsYXN0aWNpbic7XG5leHBvcnQgY29uc3QgRUxBU1RJQ19PVVQgPSAnZWxhc3RpY291dCc7XG5leHBvcnQgY29uc3QgQkFDSyA9ICdiYWNrJztcbmV4cG9ydCBjb25zdCBCQUNLX0lOID0gJ2JhY2tpbic7XG5leHBvcnQgY29uc3QgQkFDS19PVVQgPSAnYmFja291dCc7XG5leHBvcnQgY29uc3QgQk9VTkNFID0gJ2JvdW5jZSc7XG5leHBvcnQgY29uc3QgQk9VTkNFX0lOID0gJ2JvdW5jZWluJztcbmV4cG9ydCBjb25zdCBCT1VOQ0VfT1VUID0gJ2JvdW5jZW91dCc7XG5leHBvcnQgY29uc3QgZWFzaW5nID0ge1xuICAgIFtMSU5FQVJdOiAodmFsdWUpID0+IHZhbHVlLFxuICAgIFtRVUFEUkFUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMC41ICogKC0tdmFsdWUgKiAodmFsdWUgLSAyKSAtIDEpO1xuICAgIH0sXG4gICAgW1FVQURSQVRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUFEUkFUSUNfT1VUXTogKHZhbHVlKSA9PiAodmFsdWUgKiAoMiAtIHZhbHVlKSksXG4gICAgW0NVQklDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSArIDIpO1xuICAgIH0sXG4gICAgW0NVQklDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbQ1VCSUNfT1VUXTogKHZhbHVlKSA9PiAoLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAxKSxcbiAgICBbUVVBUlRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAtIDIpO1xuICAgIH0sXG4gICAgW1FVQVJUSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVQVJUSUNfT1VUXTogKHZhbHVlKSA9PiAoMSAtIC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUlOVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMik7XG4gICAgfSxcbiAgICBbUVVJTlRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUlOVElDX09VVF06ICh2YWx1ZSkgPT4gKC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDEpLFxuICAgIFtTSU5VU09JREFMXTogKHZhbHVlKSA9PiAoMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogdmFsdWUpKSksXG4gICAgW1NJTlVTT0lEQUxfSU5dOiAodmFsdWUpID0+ICgxIC0gTWF0aC5jb3MoKHZhbHVlICogTWF0aC5QSSkgLyAyKSksXG4gICAgW1NJTlVTT0lEQUxfT1VUXTogKHZhbHVlKSA9PiAoTWF0aC5zaW4oKHZhbHVlICogTWF0aC5QSSkgLyAyKSksXG4gICAgW0VYUE9ORU5USUFMXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDEwMjQsIHZhbHVlIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogKHZhbHVlIC0gMSkpICsgMik7XG4gICAgfSxcbiAgICBbRVhQT05FTlRJQUxfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gMCA/IDAgOiBNYXRoLnBvdygxMDI0LCB2YWx1ZSAtIDEpKSxcbiAgICBbRVhQT05FTlRJQUxfT1VUXTogKHZhbHVlKSA9PiAodmFsdWUgPT09IDEgPyAxIDogMSAtIE1hdGgucG93KDIsIC0xMCAqIHZhbHVlKSksXG4gICAgW0NJUkNVTEFSXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHZhbHVlICogdmFsdWUpIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh2YWx1ZSAtPSAyKSAqIHZhbHVlKSArIDEpO1xuICAgIH0sXG4gICAgW0NJUkNVTEFSX0lOXTogKHZhbHVlKSA9PiAoMSAtIE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkpLFxuICAgIFtDSVJDVUxBUl9PVVRdOiAodmFsdWUpID0+IE1hdGguc3FydCgxIC0gLS12YWx1ZSAqIHZhbHVlKSxcbiAgICBbRUxBU1RJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgKj0gMjtcbiAgICAgICAgaWYgKHZhbHVlIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiBNYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDIsIC0xMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuICAgIH0sXG4gICAgW0VMQVNUSUNfSU5dOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuICAgIH0sXG4gICAgW0VMQVNUSUNfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5wb3coMiwgLTEwICogdmFsdWUpICogTWF0aC5zaW4oKHZhbHVlIC0gMC4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG4gICAgfSxcbiAgICBbQkFDS106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1OCAqIDEuNTI1O1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqICh2YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSAtIHMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSArIHMpICsgMik7XG4gICAgfSxcbiAgICBbQkFDS19JTl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICAgICAgcmV0dXJuIHZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlIC0gcyk7XG4gICAgfSxcbiAgICBbQkFDS19PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTg7XG4gICAgICAgIHJldHVybiAtLXZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlICsgcykgKyAxO1xuICAgIH0sXG4gICAgW0JPVU5DRV06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPCAwLjUpIHtcbiAgICAgICAgICAgIHJldHVybiBlYXNpbmdbQk9VTkNFX0lOXSh2YWx1ZSAqIDIpICogMC41O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlYXNpbmdbQk9VTkNFX09VVF0odmFsdWUgKiAyIC0gMSkgKiAwLjUgKyAwLjU7XG4gICAgfSxcbiAgICBbQk9VTkNFX0lOXTogKHZhbHVlKSA9PiAoMSAtIGVhc2luZ1tCT1VOQ0VfT1VUXSgxIC0gdmFsdWUpKSxcbiAgICBbQk9VTkNFX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPCAxIC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgMiAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMS41IC8gMi43NSkgKiB2YWx1ZSArIDAuNzU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgMi41IC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAyLjI1IC8gMi43NSkgKiB2YWx1ZSArIDAuOTM3NTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDIuNjI1IC8gMi43NSkgKiB2YWx1ZSArIDAuOTg0Mzc1O1xuICAgIH0sXG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi90d2Vlbic7XG5leHBvcnQgKiBmcm9tICcuL2Vhc2luZyc7XG4iLCJpbXBvcnQgeyBlYXNpbmcsIExJTkVBUiB9IGZyb20gJy4vZWFzaW5nJztcbmV4cG9ydCBjb25zdCBUV0VFTiA9ICd0d2Vlbic7XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVHdlZW0oY29tcG9uZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0d2VlbiB9ID0gY29tcG9uZW50O1xuICAgIGNvbnN0IHsgcGhhc2VzIH0gPSB0d2VlbjtcbiAgICBpZiAoIXBoYXNlcz8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQW5pbWF0aW9uIHBhcnRzIG5vdCBmb3VuZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0d2Vlbi50aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdHdlZW4udGltZSA9IDA7XG4gICAgfVxuICAgIHR3ZWVuLnRpbWUgKz0gY29udGV4dC50aW1lO1xuICAgIGNvbnN0IHsgdGltZSB9ID0gdHdlZW47XG4gICAgbGV0IG9mZnNldCA9IDA7XG4gICAgcGhhc2VzLmZvckVhY2goKHBoYXNlKSA9PiB7XG4gICAgICAgIGlmICghcGhhc2UudGltZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbmltYXRpb24gdGltZSBub3Qgc2V0Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBoYXNlLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSBwaGFzZS5vZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWFzaW5nTmFtZSA9IHBoYXNlPy5lYXNpbmc/LnRvTG93ZXJDYXNlKCkgPz8gTElORUFSO1xuICAgICAgICBjb25zdCBlYXNpbmdNZXRob2QgPSBlYXNpbmdbZWFzaW5nTmFtZV07XG4gICAgICAgIGlmICghZWFzaW5nTWV0aG9kKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gZWFzaW5nIHR5cGU6ICR7ZWFzaW5nfWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gKHRpbWUgLSBvZmZzZXQpIC8gcGhhc2UudGltZTtcbiAgICAgICAgb2Zmc2V0ICs9IHBoYXNlLnRpbWU7XG4gICAgICAgIGlmICh2YWx1ZSA8IDAgfHwgdmFsdWUgPiAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWFzaW5nVmFsdWUgPSBlYXNpbmdNZXRob2QodmFsdWUpO1xuICAgICAgICBpZiAoIXBoYXNlLnRvKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuaW1hdGlvbiBcInRvXCIgc3RhdGUgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwaGFzZS5mcm9tKSB7XG4gICAgICAgICAgICBwaGFzZS5mcm9tID0ge307XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB0bywgZnJvbSB9ID0gcGhhc2U7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gY29tcG9uZW50O1xuICAgICAgICBPYmplY3Qua2V5cyh0bykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoZnJvbVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBmcm9tW2tleV0gPSBzdGF0ZVtrZXldID8/IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmcm9tVmFsdWUgPSBmcm9tW2tleV07XG4gICAgICAgICAgICBjb25zdCB0b1ZhbHVlID0gdG9ba2V5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZnJvbVZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdG9WYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZVZhbHVlID0gZnJvbVZhbHVlICsgZWFzaW5nVmFsdWUgKiAodG9WYWx1ZSAtIGZyb21WYWx1ZSk7XG4gICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IHN0YXRlVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmICh0d2Vlbi5sb29wICYmIHR3ZWVuLnRpbWUgPiBvZmZzZXQpIHtcbiAgICAgICAgdHdlZW4udGltZSA9IDA7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5VHdlZW5FeHRlbnNpb24oc3VwcG9ydCkge1xuICAgIHN1cHBvcnQucHJvcGVydHlIYW5kbGVycy5zZXQoVFdFRU4sIHVwZGF0ZVR3ZWVtKTtcbn1cbiIsImltcG9ydCB7IEFCSUxJVFlfV09MRiB9IGZyb20gJy4vYXNzZXRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjdXJzaXZlKCkge1xuXHRjb25zdCBjb250YWluZXIgPSB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0Y2hpbGQ6IHtcblx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0eDogMzAsXG5cdFx0XHR5OiAzMCxcblx0XHRcdHNjYWxlWDogMC45LFxuXHRcdFx0c2NhbGVZOiAwLjksXG5cdFx0XHRyb3RhdGlvbjogMC4yLFxuXHRcdFx0YWxwaGE6IDAuOSxcblx0XHRcdGNoaWxkcmVuOiBbe1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEFCSUxJVFlfV09MRixcblx0XHRcdFx0c2NhbGU6IDAuMyxcblx0XHRcdH1dLFxuXHRcdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHRcdHRoaXMucm90YXRpb24gKz0gdGltZSAqIDAuMDU7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cblx0Y29udGFpbmVyLmNoaWxkLmNoaWxkcmVuLnB1c2goY29udGFpbmVyIGFzIG5ldmVyKTtcblxuXHRyZXR1cm4gY29udGFpbmVyO1xufVxuIiwiY29uc3QgSU1BR0VfQVNTRVRTID0gJ2Fzc2V0cy8nO1xuXG5leHBvcnQgY29uc3QgQU5JTUFMSVNUID0gJ2lkOmFuaW1hbGlzdCc7XG5leHBvcnQgY29uc3QgQVJDSEVSID0gJ2lkOmFyY2hlcic7XG5cbmV4cG9ydCBjb25zdCBBTklNQUxJU1RfSU1BR0UgPSBgJHtJTUFHRV9BU1NFVFN9QW5pbWFsaXN0Rm94MV9pbWFnZS5wbmdgO1xuZXhwb3J0IGNvbnN0IEFSQ0hFUl9JTUFHRSA9IGAke0lNQUdFX0FTU0VUU31BcmNoZXIyX2h1bnRlcl9pbWFnZS5wbmdgO1xuXG5leHBvcnQgY29uc3QgQUJJTElUWV9GT1ggPSBgJHtJTUFHRV9BU1NFVFN9QW5pbWFsaXN0QWJpbGl0eV9Gb3gucG5nYDtcbmV4cG9ydCBjb25zdCBBQklMSVRZX1dPTEYgPSBgJHtJTUFHRV9BU1NFVFN9QW5pbWFsaXN0QWJpbGl0eV9Xb2xmLnBuZ2A7XG5cbmV4cG9ydCBjb25zdCBCQUNLR1JPVU5EID0gYCR7SU1BR0VfQVNTRVRTfWp1bmdsZV9iYWNrZ3JvdW5kLmpwZ2A7XG5cbmV4cG9ydCBjb25zdCBURVNUX0NBTlZBUyA9ICd0ZXN0LmNhbnZhcyc7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBDYW52YXNTdXBwb3J0IH0gZnJvbSAnQGUyZC9jYW52YXMtc3VwcG9ydCc7XG5pbXBvcnQgeyBQaXZvdCwgUmVuZGVyQ29udGV4dCwgU3VwcG9ydCB9IGZyb20gJ0BlMmQvZW5naW5lJztcbmltcG9ydCB7XG5cdGFwcGx5SW1hZ2VFeHRlbnNpb24sIElNQUdFLCBJbWFnZSxcbn0gZnJvbSAnQGUyZC9pbWFnZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGUyZC9yZXNvdXJjZXMnO1xuXG5mdW5jdGlvbiByZW5kZXJJbWFnZShpbWFnZTogSW1hZ2UsIGNvbnRleHQ6IFJlbmRlckNvbnRleHQpOiB2b2lkIHtcblx0aWYgKCFpbWFnZS5zcmMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7IG1hdHJpeCwgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG5cblx0aWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgeyBzdXBwb3J0IH0gPSBjb250ZXh0O1xuXG5cdGNvbnN0IHJlc291cmNlID0gc3VwcG9ydC5yZXNvdXJjZXMuZ2V0KGltYWdlLnNyYykgYXMgSW1hZ2VSZXNvdXJjZSB8IG51bGw7XG5cblx0aWYgKCFyZXNvdXJjZT8ubG9hZGVkIHx8ICFyZXNvdXJjZT8uaW1hZ2UpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7IGNvbnRleHQyZCB9ID0gc3VwcG9ydCBhcyBDYW52YXNTdXBwb3J0O1xuXG5cdGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oXG5cdFx0bWF0cml4LmEsXG5cdFx0bWF0cml4LmIsXG5cdFx0bWF0cml4LmMsXG5cdFx0bWF0cml4LmQsXG5cdFx0bWF0cml4LnR4LFxuXHRcdG1hdHJpeC50eSxcblx0KTtcblxuXHRjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuXHRjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuXHRjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcblxuXHRjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuXHRjb250ZXh0MmQuZmlsbFN0eWxlID0gJyc7XG5cdGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICdncmF5Jztcblx0Y29udGV4dDJkLnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUN1c3RvbUltYWdlRXh0ZW5zaW9uKHN1cHBvcnQ6IFN1cHBvcnQpIHtcblx0YXBwbHlJbWFnZUV4dGVuc2lvbihzdXBwb3J0KTtcblx0c3VwcG9ydC5yZW5kZXJIYW5kbGVycy5zZXQoSU1BR0UsIHJlbmRlckltYWdlKTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCB7IERlYnVnIH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSwgcmVzb2x2ZUltYWdlIH0gZnJvbSAnQGUyZC9yZXNvdXJjZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21SZXNvdXJjZU1hbmFnZXIge1xuXHRyZWFkb25seSBhbGlhc2VzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblx0cmVhZG9ubHkgcmVzb3VyY2VzID0gbmV3IE1hcDxzdHJpbmcsIEltYWdlUmVzb3VyY2U+KCk7XG5cblx0cmVzb2x2ZSA9IChhc3NldDogc3RyaW5nKTogSW1hZ2VSZXNvdXJjZSB8IG51bGwgPT4ge1xuXHRcdGlmIChhc3NldC5pbmRleE9mKCdpZDonKSA9PT0gMCkge1xuXHRcdFx0Y29uc3QgaWQgPSBhc3NldC5zbGljZSgzKTtcblx0XHRcdGxldCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VzLmdldChpZCkgYXMgSW1hZ2VSZXNvdXJjZTtcblx0XHRcdGlmICghcmVzb3VyY2UpIHtcblx0XHRcdFx0Y29uc3QgdXJsID0gdGhpcy5hbGlhc2VzLmdldChpZCk7XG5cdFx0XHRcdGlmICh1cmwpIHtcblx0XHRcdFx0XHRyZXNvdXJjZSA9IHJlc29sdmVJbWFnZSh1cmwpIGFzIEltYWdlUmVzb3VyY2U7XG5cdFx0XHRcdFx0dGhpcy5yZXNvdXJjZXMuc2V0KGlkLCByZXNvdXJjZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0RGVidWcud2FybmluZyhgUmVzb3VyY2Ugd2l0aCBpZDogJHthc3NldH0gbm90IGZvdW5kYCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZXNvdXJjZTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cbiIsImltcG9ydCB7IENhbnZhc1N1cHBvcnQgfSBmcm9tICdAZTJkL2NhbnZhcy1zdXBwb3J0JztcbmltcG9ydCB7IGFwcGx5Q2FudmFzVGV4dEV4dGVuc2lvbiB9IGZyb20gJ0BlMmQvdGV4dCc7XG5pbXBvcnQgeyBhcHBseUN1c3RvbUltYWdlRXh0ZW5zaW9uIH0gZnJvbSAnLi9pbWFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVN1cHBvcnQgZXh0ZW5kcyBDYW52YXNTdXBwb3J0IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRhcHBseUNhbnZhc1RleHRFeHRlbnNpb24odGhpcyk7XG5cdFx0YXBwbHlDdXN0b21JbWFnZUV4dGVuc2lvbih0aGlzKTtcblx0fVxuXG5cdGNsZWFyKCkge1xuXHRcdGNvbnN0IHsgY29udGV4dDJkIH0gPSB0aGlzO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnYmxhY2snO1xuXHRcdGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcblx0XHRjb250ZXh0MmQuZmlsbFJlY3QoMCwgMCwgY29udGV4dDJkLmNhbnZhcy53aWR0aCwgY29udGV4dDJkLmNhbnZhcy5oZWlnaHQpO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZnBzKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHR0ZXh0OiAnZnBzJyxcblx0XHR0ZXh0Rm9ybWF0OiB7XG5cdFx0XHRzaXplOiAzMCxcblx0XHRcdGNvbG9yOiAweGZmZmZmZixcblx0XHRcdGFsaWduOiAnY2VudGVyJyxcblx0XHR9LFxuXHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0Y29uc3QgZnJhbWVSYXRlID0gTWF0aC5yb3VuZCgxIC8gdGltZSk7XG5cdFx0XHR0aGlzLnRleHQgPSBgJHtmcmFtZVJhdGV9IGZwc2A7XG5cdFx0fSxcblx0fTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCB7XG5cdEFCSUxJVFlfRk9YLCBBQklMSVRZX1dPTEYsIEFOSU1BTElTVCwgQVJDSEVSLCBCQUNLR1JPVU5ELFxufSBmcm9tICcuL2Fzc2V0cyc7XG5pbXBvcnQgYXJ0aWZhY3QgZnJvbSAnLi9hcnRpZmFjdCc7XG5pbXBvcnQgZnBzIGZyb20gJy4vZnBzJztcbmltcG9ydCB7IHVuaXQsIFVuaXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi91bml0JztcblxuaW50ZXJmYWNlIE1haW4ge1xuXHRzdGFydCgpOiB2b2lkO1xuXHRba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oKTogTWFpbiB7XG5cdGZ1bmN0aW9uIG9uVW5pdENsaWNrKGRhdGE6IFVuaXRQcm9wZXJ0aWVzKSB7XG5cdFx0ZGF0YS5oZWFsdGggPSBNYXRoLnJhbmRvbSgpO1xuXHRcdGNvbnNvbGUubG9nKCdvblVuaXRDbGljaycsIGRhdGEubmFtZSk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQkFDS0dST1VORCxcblx0XHRcdFx0c2NhbGVYOiAxLFxuXHRcdFx0XHRzY2FsZVk6IDEsXG5cdFx0XHR9LFxuXHRcdFx0ZmlndXJlOiB7XG5cdFx0XHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHR0eXBlOiAncmVjdCcsXG5cdFx0XHRcdFx0eDogMCxcblx0XHRcdFx0XHR5OiAwLFxuXHRcdFx0XHRcdHdpZHRoOiAxMDAsXG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAsXG5cdFx0XHRcdFx0ZmlsbDogMHhmZjAwZmYsXG5cdFx0XHRcdFx0c3Ryb2tlOiB7XG5cdFx0XHRcdFx0XHR0aGlja25lc3M6IDIsXG5cdFx0XHRcdFx0XHRmaWxsOiAweDAwZmYwMCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHNoYXBlczoge1xuXHRcdFx0XHR0eXBlOiAnc2hhcGUnLFxuXHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ2NpcmNsZScsXG5cdFx0XHRcdFx0XHR4OiAxMDAsXG5cdFx0XHRcdFx0XHR5OiAxMDAsXG5cdFx0XHRcdFx0XHRyYWRpdXM6IDUwLFxuXHRcdFx0XHRcdFx0ZmlsbDogeyB0eXBlOiAnc29saWQnLCBjb2xvcjogMHhmZmZmMDAsIGFscGhhOiAwLjUgfSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdwYXRoJyxcblx0XHRcdFx0XHRcdGRhdGE6ICdNIDEwIDEwIEggOTAgViA5MCBIIDEwIFonLFxuXHRcdFx0XHRcdFx0ZmlsbDogMHhmZjAwZmYsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAncGF0aCcsXG5cdFx0XHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ21vdmVUbycsIHg6IDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMTAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDEwMCwgeTogMTAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDAsIHk6IDEwMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0ZmlsbDogMHhmZjAwZmYsXG5cdFx0XHRcdFx0XHRzdHJva2U6IDB4MDAwMDAwLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0dW5pdHM6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0dW5pdCh7XG5cdFx0XHRcdFx0XHRuYW1lOiAnQXJjaGVyJywgaGVhbHRoOiAxLCBpbWFnZTogQVJDSEVSLCBvbkNsaWNrOiBvblVuaXRDbGljayxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHR1bml0KHtcblx0XHRcdFx0XHRcdG5hbWU6ICdBbmltYWxpc3QnLCBoZWFsdGg6IDEsIGltYWdlOiBBTklNQUxJU1QsIG9uQ2xpY2s6IG9uVW5pdENsaWNrLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdGFydGlmYWN0OiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHR4OiAzMDAsXG5cdFx0XHRcdHk6IDM1MCxcblx0XHRcdFx0Y2hpbGRyZW46IFthcnRpZmFjdCgpXSxcblx0XHRcdH0sXG5cdFx0XHRtYXA6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0eTogNDUwLFxuXHRcdFx0XHRzY2FsZVg6IDAuMixcblx0XHRcdFx0c2NhbGVZOiAwLjIsXG5cdFx0XHRcdGFscGhhOiAwLjUsXG5cdFx0XHRcdHNyYzogJ3Rlc3QuY2FudmFzJyxcblx0XHRcdFx0b25Qb2ludGVyT3ZlcigpIHtcblx0XHRcdFx0XHR0aGlzLmFscGhhID0gMTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b25Qb2ludGVyT3V0KCkge1xuXHRcdFx0XHRcdHRoaXMuYWxwaGEgPSAwLjU7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YWJpbGl0eUZveDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEFCSUxJVFlfRk9YLFxuXHRcdFx0XHR4OiA0NTAsXG5cdFx0XHRcdHk6IDUwMCxcblx0XHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdFx0dGludDoge1xuXHRcdFx0XHRcdGNvbG9yOiAweDAwZmYwMCxcblx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHRcdFx0dGhpcy50aW50LnZhbHVlICs9IHRpbWU7XG5cdFx0XHRcdFx0aWYgKHRoaXMudGludC52YWx1ZSA+PSAxKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbnQudmFsdWUgPSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0b25Qb2ludGVyRG93bihlOiBhbnkpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnZm94JywgZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YWJpbGl0eVdvbGY6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdHg6IDM1MCxcblx0XHRcdFx0eTogNDAwLFxuXHRcdFx0XHRjaGlsZDoge1xuXHRcdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdFx0c3JjOiBBQklMSVRZX1dPTEYsXG5cdFx0XHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdFx0XHRhbHBoYTogMSxcblx0XHRcdFx0XHR0d2Vlbjoge1xuXHRcdFx0XHRcdFx0bG9vcDogdHJ1ZSxcblx0XHRcdFx0XHRcdHBoYXNlczogW1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB4OiAyMDAgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ2N1Ymljb3V0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHk6IDIwMCwgYWxwaGE6IDAuNSB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAncXVhZHJhdGljSW4nLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeDogMCwgYWxwaGE6IDEgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ3F1YWRyYXRpY091dCcsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0ZnBzOiBmcHMoKSxcblx0XHR9LFxuXHRcdHN0YXJ0KCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ3N0YXJ0Jyk7XG5cdFx0fSxcblx0fTtcbn1cbiIsImNvbnN0IFNQRUVEID0gMTAwO1xuXG5pbnRlcmZhY2UgVW5pdCB7XG5cdFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVbml0UHJvcGVydGllcyB7XG5cdG5hbWU6IHN0cmluZyxcblx0aGVhbHRoOiBudW1iZXIsXG5cdGltYWdlOiBzdHJpbmcsXG5cdG9uQ2xpY2s6IChkYXRhOiBVbml0UHJvcGVydGllcykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXQocHJvcHM6IFVuaXRQcm9wZXJ0aWVzKTogVW5pdCB7XG5cdGZ1bmN0aW9uIGdldFRpdGxlKCkge1xuXHRcdHJldHVybiBgJHtwcm9wcy5uYW1lfVxcbiR7TWF0aC5yb3VuZChwcm9wcy5oZWFsdGggKiAxMDApfSVgO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHR4OiA1MCArIE1hdGgucmFuZG9tKCkgKiA0MDAsXG5cdFx0eTogMjAwLFxuXHRcdHJvdGF0aW9uOiAwLFxuXHRcdHVwZGF0ZU1vdmUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLnggKz0gdGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggKiB0aW1lICogU1BFRUQ7XG5cdFx0XHRpZiAodGhpcy54IDwgNTApIHtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggPSAxO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnggPiA0MDApIHtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbi5pbWFnZS5zY2FsZVggPSAtMTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0dGhpcy51cGRhdGVNb3ZlKHRpbWUpO1xuXHRcdH0sXG5cdFx0Y2hpbGRyZW46IHtcblx0XHRcdHRleHQ6IHtcblx0XHRcdFx0dHlwZTogJ3RleHQnLFxuXHRcdFx0XHR0ZXh0OiBnZXRUaXRsZSgpLFxuXHRcdFx0XHR0ZXh0Rm9ybWF0OiB7XG5cdFx0XHRcdFx0c2l6ZTogMTUsXG5cdFx0XHRcdFx0Y29sb3I6IDB4ZmZkZGRkLFxuXHRcdFx0XHRcdGFsaWduOiAnY2VudGVyJyxcblx0XHRcdFx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0Ym9yZGVyOiAweDAwZmYwMCxcblx0XHRcdFx0eTogLTMwLFxuXHRcdFx0XHRoZWlnaHQ6IDM1LFxuXHRcdFx0XHRwaXZvdFg6IDAuNSxcblx0XHRcdFx0b25Qb2ludGVyRG93bjogKCkgPT4ge1xuXHRcdFx0XHRcdHByb3BzLm9uQ2xpY2socHJvcHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblVwZGF0ZSgpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQgPSBnZXRUaXRsZSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogcHJvcHMuaW1hZ2UsXG5cdFx0XHRcdHNjYWxlWDogTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSxcblx0XHRcdFx0cGl2b3RYOiAwLjUsXG5cdFx0XHRcdG9uUG9pbnRlckRvd246ICgpID0+IHtcblx0XHRcdFx0XHRwcm9wcy5vbkNsaWNrKHByb3BzKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbmdpbmUsIGFwcGx5TW91c2VTdXBwb3J0RXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHsgYXBwbHlUd2VlbkV4dGVuc2lvbiB9IGZyb20gJ0BlMmQvdHdlZW4nO1xuaW1wb3J0IHsgYXBwbHlDYW52YXNUZXh0RXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC90ZXh0JztcbmltcG9ydCB7IGFwcGx5Q2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiB9IGZyb20gJ0BlMmQvaW1hZ2UnO1xuaW1wb3J0IHsgYXBwbHlDYW52YXNTaGFwZUV4dGVuc2lvbiB9IGZyb20gJ0BlMmQvc2hhcGUnO1xuaW1wb3J0IHsgQ2FudmFzU3VwcG9ydCB9IGZyb20gJ0BlMmQvY2FudmFzLXN1cHBvcnQnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BlMmQvcmVzb3VyY2VzJztcbmltcG9ydCBDdXN0b21SZXNvdXJjZU1hbmFnZXIgZnJvbSAnLi9lbmdpbmUvcmVzb3VyY2VzJztcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbic7XG5pbXBvcnQgQ3VzdG9tU3VwcG9ydCBmcm9tICcuL2VuZ2luZS9zdXBwb3J0JztcbmltcG9ydCB7XG5cdEFOSU1BTElTVCwgQU5JTUFMSVNUX0lNQUdFLCBBUkNIRVIsIEFSQ0hFUl9JTUFHRSwgVEVTVF9DQU5WQVMsXG59IGZyb20gJy4vYXNzZXRzJztcblxuLy8gYXBwbGljYXRpb25cbmNvbnN0IGFwcCA9IG1haW4oKTtcbmFwcC5zdGFydCgpO1xuXG4vLyBiYXNpYyBlbmdpbmVcbmNvbnN0IGVuZ2luZSA9IG5ldyBFbmdpbmUobmV3IENhbnZhc1N1cHBvcnQoKSk7XG5hcHBseUNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24oZW5naW5lLnN1cHBvcnQpO1xuYXBwbHlDYW52YXNUZXh0RXh0ZW5zaW9uKGVuZ2luZS5zdXBwb3J0KTtcbmFwcGx5Q2FudmFzU2hhcGVFeHRlbnNpb24oZW5naW5lLnN1cHBvcnQpO1xuYXBwbHlUd2VlbkV4dGVuc2lvbihlbmdpbmUuc3VwcG9ydCk7XG5hcHBseU1vdXNlU3VwcG9ydEV4dGVuc2lvbihlbmdpbmUpO1xuZW5naW5lLnJvb3QgPSBhcHAgYXMgYW55IGFzIENvbXBvbmVudDtcbmVuZ2luZS5wbGF5KCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVuZ2luZS5zdXBwb3J0LmVsZW1lbnQpO1xuXG4vLyBjdXN0b20gZW5naW5lXG5jb25zdCBjdXN0b21FbmdpbmUgPSBuZXcgRW5naW5lKG5ldyBDdXN0b21TdXBwb3J0KCkpO1xuY3VzdG9tRW5naW5lLmZ1bGxzY3JlZW4gPSBmYWxzZTtcbmN1c3RvbUVuZ2luZS5oZWlnaHQgPSA2MDA7XG5jdXN0b21FbmdpbmUudXBkYXRlRW5hYmxlZCA9IGZhbHNlO1xuY3VzdG9tRW5naW5lLnJvb3QgPSBlbmdpbmUucm9vdDtcbmN1c3RvbUVuZ2luZS5wbGF5KCk7XG5jdXN0b21FbmdpbmUuc3VwcG9ydC5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbmN1c3RvbUVuZ2luZS5zdXBwb3J0LmVsZW1lbnQuc3R5bGUudG9wID0gJzBweCc7XG5jdXN0b21FbmdpbmUuc3VwcG9ydC5lbGVtZW50LnN0eWxlLmxlZnQgPSAnNjAwcHgnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjdXN0b21FbmdpbmUuc3VwcG9ydC5lbGVtZW50KTtcblxuLy8gcGFnZVxuZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAnMCc7XG5kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSAnMCc7XG5cbi8vIHRlc3QgcGF1c2VcbnNldFRpbWVvdXQoKCkgPT4gZW5naW5lLnBhdXNlKCksIDUwMDApO1xuc2V0VGltZW91dCgoKSA9PiBlbmdpbmUucGxheSgpLCAxMDAwMCk7XG5cbi8vIHNldCBjdXN0b20gcmVzb3VyY2VcbmVuZ2luZS5zdXBwb3J0LnJlc291cmNlcy5hZGQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBjdXN0b21FbmdpbmUuc3VwcG9ydC5lbGVtZW50LFxuXHRcdGxvYWRlZDogdHJ1ZSxcblx0fSBhcyBJbWFnZVJlc291cmNlLFxuKTtcbmN1c3RvbUVuZ2luZS5zdXBwb3J0LnJlc291cmNlcy5hZGQoXG5cdFRFU1RfQ0FOVkFTLFxuXHR7XG5cdFx0YXNzZXQ6IFRFU1RfQ0FOVkFTLFxuXHRcdGltYWdlOiBlbmdpbmUuc3VwcG9ydC5lbGVtZW50LFxuXHRcdGxvYWRlZDogdHJ1ZSxcblx0fSBhcyBJbWFnZVJlc291cmNlLFxuKTtcblxuLy8gY3VzdG9tIHJlc291cmNlIHJlc29sdmVyXG5jb25zdCByZXNvdXJjZU1hbmFnZXIgPSBuZXcgQ3VzdG9tUmVzb3VyY2VNYW5hZ2VyKCk7XG5yZXNvdXJjZU1hbmFnZXIuYWxpYXNlcy5zZXQoQVJDSEVSLnJlcGxhY2UoJ2lkOicsICcnKSwgQVJDSEVSX0lNQUdFKTtcbnJlc291cmNlTWFuYWdlci5hbGlhc2VzLnNldChBTklNQUxJU1QucmVwbGFjZSgnaWQ6JywgJycpLCBBTklNQUxJU1RfSU1BR0UpO1xuZW5naW5lLnN1cHBvcnQucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb3VyY2VNYW5hZ2VyLnJlc29sdmUpO1xuY3VzdG9tRW5naW5lLnN1cHBvcnQucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb3VyY2VNYW5hZ2VyLnJlc29sdmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==