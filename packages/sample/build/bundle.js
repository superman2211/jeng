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
      if (pointer[handlerName]) {
        var event = {
          type: type,
          x: x,
          y: y,
          id: id
        };
        pointer[handlerName](event);
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
        frames: 0,
        time: 0,
        textFormat: {
            size: 30,
            color: 0xffffff,
            align: 'center',
        },
        onUpdate(time) {
            this.time += time;
            this.frames++;
            if (this.time >= 1) {
                const frameTime = Math.round(1000 * this.time / this.frames);
                this.text = `${this.frames} fps ${frameTime} ms`;
                this.time = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jYW52YXMtc3VwcG9ydC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NhbnZhcy1zdXBwb3J0L2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY2FudmFzLXN1cHBvcnQvZGlzdC9zdXBwb3J0LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2VuZ2luZS9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvZW5naW5lL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9lbmdpbmUvc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnB1dC9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnB1dC9tb3VzZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnB1dC90b3VjaC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnRlcmZhY2VzL3Bpdm90LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2ludGVyZmFjZXMvcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnRlcmZhY2VzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnRlcmZhY2VzL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC91dGlscy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9nZW9tL2Rpc3QvYm91bmRzLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9jb2xvci10cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZ2VvbS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZ2VvbS9kaXN0L3BvaW50LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vaW1hZ2UvZGlzdC9pbWFnZS1jYW52YXMtY29sb3IuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vaW1hZ2UvZGlzdC9pbWFnZS1jYW52YXMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vaW1hZ2UvZGlzdC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9pbWFnZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3Jlc291cmNlcy9kaXN0L2ltYWdlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvZGF0YS9kYXRhLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvZGF0YS9wYXRoLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvZGF0YS9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vc2hhcGUvZGlzdC9ncmFwaGljcy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3Qvc2hhcGUtY2FudmFzLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3Qvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L2ZvbnQuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90ZXh0L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L3RleHQtY2FudmFzLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3RleHQvZGlzdC90ZXh0LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3R3ZWVuL2Rpc3QvZWFzaW5nLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3R3ZWVuL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdHdlZW4vZGlzdC90d2Vlbi5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9hcnRpZmFjdC50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9hc3NldHMudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvZW5naW5lL2ltYWdlLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2VuZ2luZS9yZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvZW5naW5lL3N1cHBvcnQudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvZnBzLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvdW5pdC50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJjcmVhdGVDb2xvclBhdHRlcm4iLCJjb2xvciIsImFscGhhIiwiY3QiLCJyIiwiZyIsImIiLCJhIiwiQ29sb3JUcmFuc2Zvcm0iLCJyZWRNdWx0aXBsaWVyIiwicmVkT2Zmc2V0IiwiZ3JlZW5NdWx0aXBsaWVyIiwiZ3JlZW5PZmZzZXQiLCJibHVlTXVsdGlwbGllciIsImJsdWVPZmZzZXQiLCJhbHBoYU11bHRpcGxpZXIiLCJhbHBoYU9mZnNldCIsIkNhbnZhc1N1cHBvcnQiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0MmQiLCJnZXRDb250ZXh0Iiwic2V0VHJhbnNmb3JtIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJwaXhlbFJhdGlvIiwidmlld1dpZHRoIiwiTWF0aCIsImZsb29yIiwidmlld0hlaWdodCIsInN0eWxlIiwiU3VwcG9ydCIsIkNvbXBvbmVudCIsImlzRW5hYmxlZCIsImNvbXBvbmVudCIsImVuYWJsZWQiLCJpc1Zpc2libGUiLCJ2aXNpYmxlIiwiQ09OVEFJTkVSIiwiQ29udGFpbmVyIiwibnVtQ2hpbGRyZW4iLCJjb250YWluZXIiLCJjaGlsZCIsImNoaWxkcmVuIiwiY291bnQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJrZXlzIiwiT2JqZWN0IiwicmVuZGVyIiwiY29udGV4dCIsInN1cHBvcnQiLCJjaGlsZENvbnRleHQiLCJnZXRSZW5kZXJDb250ZXh0IiwiaSIsImNvbXBvbmVudENvbnRleHQiLCJ1cGRhdGUiLCJnZXRVcGRhdGVDb250ZXh0IiwiaGl0VGVzdCIsImdldFBvaW50ZXJDb250ZXh0IiwicmVzdWx0IiwiYXBwbHlDb250YWluZXJFeHRlbnNpb24iLCJ1cGRhdGVIYW5kbGVycyIsInNldCIsInJlbmRlckhhbmRsZXJzIiwiaGl0VGVzdEhhbmRsZXJzIiwiRU1QVFlfTUFUUklYIiwiTWF0cml4IiwiRW5naW5lIiwiZnVsbHNjcmVlbiIsInVwZGF0ZUVuYWJsZWQiLCJyZW5kZXJFbmFibGVkIiwicG9pbnRlckVuYWJsZWQiLCJwYXVzZWQiLCJ0aW1lIiwibWF0cml4IiwiaW50ZXJuYWxVcGRhdGUiLCJkZWx0YVRpbWUiLCJ1cGRhdGVGcmFtZSIsInJvb3QiLCJiYXNlIiwiZGVwdGgiLCJjbGVhciIsImNvbG9yVHJhbnNmb3JtIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInRhcmdldFdpZHRoIiwidGFyZ2V0SGVpZ2h0IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZCIsInNldFNpemUiLCJ1cGRhdGVTaXplIiwidXBkYXRlTmV4dEZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZXZlbnQiLCJ0eXBlIiwiaWQiLCJ4IiwieSIsImxvY2FsIiwiZ2xvYmFsIiwiY29uc29sZSIsImxvZyIsIlJlc291cmNlcyIsInJlc291cmNlcyIsIk1hcCIsInJlc29sdmVycyIsIlNldCIsImFzc2V0IiwicmVzb3VyY2UiLCJnZXQiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJEZWJ1ZyIsInVwZGF0ZURlcHRoIiwicHJvcGVydHlIYW5kbGVycyIsImZvckVhY2giLCJoYW5kbGVyIiwicHJvcGVydHkiLCJvblVwZGF0ZSIsIlBvaW50ZXIiLCJwb2ludGVyT3ZlciIsInBhcmVudCIsIlRyYW5zZm9ybSIsInRyYW5zZm9ybWVkTWF0cml4IiwiYXBwbHlLZXlib2FyZFN1cHBvcnRFeHRlbnNpb24iLCJlbmdpbmUiLCJkaXNwYXRjaEV2ZW50IiwiZWxlbWVudCIsImNsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudExlZnQiLCJjbGllbnRZIiwidG9wIiwiY2xpZW50VG9wIiwiZGlzcGF0Y2hQb2ludGVyRXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFwcGx5TW91c2VTdXBwb3J0RXh0ZW5zaW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoYW5nZWRUb3VjaGVzIiwidG91Y2giLCJpZGVudGlmaWVyIiwiYXBwbHlUb3VjaFN1cHBvcnRFeHRlbnNpb24iLCJQaXZvdCIsImdldFgiLCJwaXZvdCIsInBpdm90WCIsImdldFkiLCJwaXZvdFkiLCJpc1BvaW50ZXJPdmVyIiwicG9pbnRlciIsImlzUG9pbnRlckVuYWJsZWQiLCJoYW5kbGVyTmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJTb3VyY2UiLCJnZXRSZXNvdXJjZSIsInNvdXJjZSIsInNyYyIsImlzTG9hZGVkIiwibG9hZGVkIiwiZ2V0TWF0cml4IiwidHJhbnNmb3JtIiwiYyIsInR4IiwidHkiLCJyb3RhdGlvbiIsInNjYWxlWCIsInNjYWxlIiwic2NhbGVZIiwiY29zIiwic2luIiwiZ2V0Q29sb3JUcmFuc2Zvcm0iLCJ0aW50IiwidmFsdWUiLCJ2YWx1ZUludmVydGVkIiwiYXJncyIsIlN0cmluZyIsImVycm9ycyIsImVycm9yIiwid2FybmluZ3MiLCJ3YXJuIiwiQm91bmRzIiwiZW1wdHkiLCJtaW5YIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwibWluWSIsIm1heFgiLCJNSU5fVkFMVUUiLCJtYXhZIiwiaXNFbXB0eSIsImJvdW5kcyIsInRvUmVjdGFuZ2xlIiwidGVzdFgiLCJ0ZXN0WSIsInRlc3QiLCJ0ZXN0UG9pbnQiLCJwb2ludCIsImNvbmNhdCIsImN0MSIsImN0MCIsImlzRGVmYXVsdCIsIm1hdHJpeDAiLCJtYXRyaXgxIiwiZ2V0RGV0ZXJtaW5hbnQiLCJpbnZlcnQiLCJkZXRlcm1pbmFudCIsInRyYW5zZm9ybVBvaW50IiwidHJhbnNmb3JtSW52ZXJzZVBvaW50IiwidHJhbnNmb3JtQm91bmRzIiwicngiLCJyeSIsInJyIiwicmIiLCJueDEiLCJueTEiLCJueDIiLCJueTIiLCJueDMiLCJueTMiLCJueDQiLCJueTQiLCJyaWdodCIsImJvdHRvbSIsIlBvaW50IiwiUmVjdGFuZ2xlIiwiY29udGFpbnMiLCJyZWN0YW5nbGUiLCJ0ZW1wQ29udGV4dCIsImlzRGVmYXVsdENvbG9yVHJhbnNmb3JtIiwidXBkYXRlVGVtcENvbnRleHQiLCJyZW5kZXJDYW52YXNDb2xvciIsImltYWdlIiwiZ2xvYmFsQWxwaGEiLCJkcmF3SW1hZ2UiLCJpbWFnZURhdGEiLCJnZXRJbWFnZURhdGEiLCJybSIsImdtIiwiYm0iLCJhbSIsInJvIiwiZ28iLCJibyIsImFvIiwiZGF0YSIsInB1dEltYWdlRGF0YSIsImFwcGx5Q2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbiIsImFwcGx5SW1hZ2VFeHRlbnNpb24iLCJJTUFHRSIsInJlbmRlckNhbnZhcyIsImFwcGx5Q2FudmFzSW1hZ2VFeHRlbnNpb24iLCJJbWFnZSIsImdldEJvdW5kcyIsInVuZGVmaW5lZCIsImFkZCIsInJlc29sdmVJbWFnZSIsImV4dGVuc2lvbiIsInNwbGl0IiwicG9wIiwib25sb2FkIiwib25lcnJvciIsImUiLCJSZWN0YW5nbGVEYXRhIiwiY2FsY3VsYXRlQm91bmRzIiwiRWxsaXBzZURhdGEiLCJyYWRpdXMiLCJyYWRpdXNYIiwicmFkaXVzWSIsIlBhdGhEYXRhIiwicGF0aERhdGEiLCJHcmFwaGljc1N0cmluZyIsImNvbW1hbmQiLCJQYXRoQ29tbWFuZCIsIkdyYXBoaWNzRGF0YSIsInBhdGgiLCJtb3ZlVG8iLCJjdXJ2ZVRvIiwiY3giLCJjeSIsImN1YmljQ3VydmVUbyIsInN4Iiwic3kiLCJURVNUX0NPTU1BTkQiLCJURVNUX1NQQUNFIiwiVEVTVF9OVU1CRVIiLCJHcmFwaGljc1N0cmluZ1N0cmVhbSIsInBvc2l0aW9uIiwiYnVmZmVyIiwic2l6ZSIsInJlYWRDb21tYW5kIiwicmVhZE51bWJlcnMiLCJudW1iZXIiLCJjaGFyIiwicGFyc2VGbG9hdCIsIkdyYXBoaWNzU3RyaW5nUmVhZGVyIiwic3RyZWFtIiwiY29tbWFuZEV4aXN0cyIsImxhc3RYIiwibGFzdFkiLCJzZXRQYXRoIiwiaGFzRGF0YSIsInJlYWROZXh0IiwicGFyc2UiLCJnZXRDb21tYW5kIiwiZ2V0QnVmZmVyIiwieDAiLCJ5MCIsIngxIiwieTEiLCJ4MiIsInkyIiwibGluZVRvIiwicmVhZGVyIiwiR3JhcGhpY3MiLCJzaGFwZSIsImZpbGwiLCJyZXBlYXQiLCJzbW9vdGgiLCJyYXRpbyIsInNwcmVhZCIsImludGVycG9sYXRpb24iLCJmb2NhbFBvaW50UmF0aW8iLCJ0aGlja25lc3MiLCJwaXhlbEhpbnRpbmciLCJzY2FsZU1vZGUiLCJjYXBzIiwiam9pbnRzIiwibWl0ZXJMaW1pdCIsInN0cm9rZSIsImJlZ2luUGF0aCIsInB1c2giLCJnZXRQYXRoIiwiZWxsaXBzZVdpZHRoIiwiZWxsaXBzZUhlaWdodCIsInciLCJoIiwiayIsIm94Iiwib3kiLCJ4ZSIsInllIiwieG0iLCJ5bSIsImR4IiwiZHkiLCJjcmVhdGVEYXRhIiwiZ3JhcGhpY3NEYXRhIiwicmVuZGVyU2hhcGUiLCJhcHBseUNhbnZhc1NoYXBlRXh0ZW5zaW9uIiwiYXBwbHlTaGFwZUV4dGVuc2lvbiIsIlNIQVBFIiwiU2hhcGUiLCJnZXRHcmFwaGljcyIsIkVNIiwiZm9udHMiLCJnZXRTdHlsZUZvbnQiLCJmb250IiwibWVhc3VyZVRleHQiLCJ0ZXh0IiwiZ2V0Q2hhcldpZHRoIiwid2lkdGhzIiwibmFtZSIsImdldEtlcm5pbmciLCJmaXJzdCIsInNlY29uZCIsInBhaXIiLCJrZXJuaW5nIiwia2VybmluZ3MiLCJ3aWR0aFNlY29uZCIsIndpZHRoVG90YWwiLCJnZXRBZHZhbmNlIiwiZ2V0Rm9udCIsImdldExpbmVXaWR0aCIsImZvcm1hdCIsImxpbmUiLCJhZHZhbmNlIiwibGV0dGVyU3BhY2luZyIsImdldFRleHRXaWR0aCIsImxpbmVzIiwibGluZVdpZHRoIiwiZ2V0VGV4dEhlaWdodCIsImxlYWRpbmciLCJkZWZhdWx0VGV4dEZvcm1hdCIsImJvbGQiLCJpdGFsaWMiLCJ1bmRlcmxpbmUiLCJhbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJnZXRWYWxpZFRleHRGb3JtYXQiLCJ0ZXh0Rm9ybWF0IiwiZ2V0QWxpbmdWYWx1ZSIsImdldFZlcnRpY2FsQWxpbmdWYWx1ZSIsInJlbmRlckNhbnZhc1RleHQiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiZm9ybWF0U2l6ZSIsImZvcm1hdExldHRlclNwYWNpbmciLCJmb3JtYXRMZWFkaW5nIiwidGV4dFdpZHRoIiwidGV4dEhlaWdodCIsInJlYWxXaWR0aCIsInJlYWxIZWlnaHQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImFsaWduVmVydGljYWxWYWx1ZSIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwicmVjdCIsInRleHRCYXNlbGluZSIsImFsaWduVmFsdWUiLCJqIiwiZmlsbFRleHQiLCJhcHBseUNhbnZhc1RleHRFeHRlbnNpb24iLCJhcHBseVRleHRFeHRlbnNpb24iLCJURVhUIiwiVGV4dCIsIkxJTkVBUiIsIlFVQURSQVRJQyIsIlFVQURSQVRJQ19JTiIsIlFVQURSQVRJQ19PVVQiLCJDVUJJQyIsIkNVQklDX0lOIiwiQ1VCSUNfT1VUIiwiUVVBUlRJQyIsIlFVQVJUSUNfSU4iLCJRVUFSVElDX09VVCIsIlFVSU5USUMiLCJRVUlOVElDX0lOIiwiUVVJTlRJQ19PVVQiLCJTSU5VU09JREFMIiwiU0lOVVNPSURBTF9JTiIsIlNJTlVTT0lEQUxfT1VUIiwiRVhQT05FTlRJQUwiLCJFWFBPTkVOVElBTF9JTiIsIkVYUE9ORU5USUFMX09VVCIsIkNJUkNVTEFSIiwiQ0lSQ1VMQVJfSU4iLCJDSVJDVUxBUl9PVVQiLCJFTEFTVElDIiwiRUxBU1RJQ19JTiIsIkVMQVNUSUNfT1VUIiwiQkFDSyIsIkJBQ0tfSU4iLCJCQUNLX09VVCIsIkJPVU5DRSIsIkJPVU5DRV9JTiIsIkJPVU5DRV9PVVQiLCJlYXNpbmciLCJQSSIsInBvdyIsInNxcnQiLCJzIiwiVFdFRU4iLCJ1cGRhdGVUd2VlbSIsInR3ZWVuIiwicGhhc2VzIiwib2Zmc2V0IiwicGhhc2UiLCJlYXNpbmdOYW1lIiwidG9Mb3dlckNhc2UiLCJlYXNpbmdNZXRob2QiLCJlYXNpbmdWYWx1ZSIsInRvIiwiZnJvbSIsInN0YXRlIiwia2V5IiwiZnJvbVZhbHVlIiwidG9WYWx1ZSIsInN0YXRlVmFsdWUiLCJsb29wIiwiYXBwbHlUd2VlbkV4dGVuc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDTyxTQUFTQSxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUNDLEtBQW5DLEVBQTBDQyxFQUExQyxFQUE4QztBQUNqRCxNQUFJQyxDQUFDLEdBQUdILEtBQUssSUFBSSxFQUFULEdBQWMsSUFBdEI7QUFDQSxNQUFJSSxDQUFDLEdBQUdKLEtBQUssSUFBSSxDQUFULEdBQWEsSUFBckI7QUFDQSxNQUFJSyxDQUFDLEdBQUdMLEtBQUssR0FBRyxJQUFoQjtBQUNBLE1BQUlNLENBQUMsR0FBR0wsS0FBSyxHQUFHLElBQWhCOztBQUNBLE1BQUksQ0FBQ00sK0RBQUEsQ0FBeUJMLEVBQXpCLENBQUwsRUFBbUM7QUFDL0JDLEtBQUMsR0FBSUEsQ0FBQyxHQUFHRCxFQUFFLENBQUNNLGFBQVAsR0FBdUJOLEVBQUUsQ0FBQ08sU0FBM0IsR0FBd0MsSUFBNUM7QUFDQUwsS0FBQyxHQUFJQSxDQUFDLEdBQUdGLEVBQUUsQ0FBQ1EsZUFBUCxHQUF5QlIsRUFBRSxDQUFDUyxXQUE3QixHQUE0QyxJQUFoRDtBQUNBTixLQUFDLEdBQUlBLENBQUMsR0FBR0gsRUFBRSxDQUFDVSxjQUFQLEdBQXdCVixFQUFFLENBQUNXLFVBQTVCLEdBQTBDLElBQTlDO0FBQ0FQLEtBQUMsR0FBSUEsQ0FBQyxHQUFHSixFQUFFLENBQUNZLGVBQVAsR0FBeUJaLEVBQUUsQ0FBQ2EsV0FBN0IsR0FBNEMsSUFBaEQ7QUFDSDs7QUFDRCxNQUFJVCxDQUFDLEdBQUcsSUFBUixFQUFjO0FBQ1Ys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RSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN2QyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBR3ZDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FDM0IsZ0RBQVcsRUFDWDtJQUNDLEtBQUssRUFBRSxnREFBVztJQUNsQixLQUFLLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPO0lBQ25DLE1BQU0sRUFBRSxJQUFJO0NBQ0ssQ0FDbEIsQ0FBQztBQUNGLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FDakMsZ0RBQVcsRUFDWDtJQUNDLEtBQUssRUFBRSxnREFBVztJQUNsQixLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPO0lBQzdCLE1BQU0sRUFBRSxJQUFJO0NBQ0ssQ0FDbEIsQ0FBQztBQUdGLE1BQU0sZUFBZSxHQUFHLElBQUksc0RBQXFCLEVBQUUsQ0FBQztBQUNwRCxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBYyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxpREFBWSxDQUFDLENBQUM7QUFDckUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0RBQWlCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLG9EQUFlLENBQUMsQ0FBQztBQUMzRSxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNoRSxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzU3VwcG9ydCBmcm9tICcuL3N1cHBvcnQnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXR0ZXJucyc7XG5leHBvcnQgeyBDYW52YXNTdXBwb3J0LCB9O1xuIiwiaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0gfSBmcm9tICdAZTJkL2dlb20nO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbG9yUGF0dGVybihjb2xvciwgYWxwaGEsIGN0KSB7XG4gICAgbGV0IHIgPSBjb2xvciA+PiAxNiAmIDB4ZmY7XG4gICAgbGV0IGcgPSBjb2xvciA+PiA4ICYgMHhmZjtcbiAgICBsZXQgYiA9IGNvbG9yICYgMHhmZjtcbiAgICBsZXQgYSA9IGFscGhhICogMHhmZjtcbiAgICBpZiAoIUNvbG9yVHJhbnNmb3JtLmlzRGVmYXVsdChjdCkpIHtcbiAgICAgICAgciA9IChyICogY3QucmVkTXVsdGlwbGllciArIGN0LnJlZE9mZnNldCkgJiAweGZmO1xuICAgICAgICBnID0gKGcgKiBjdC5ncmVlbk11bHRpcGxpZXIgKyBjdC5ncmVlbk9mZnNldCkgJiAweGZmO1xuICAgICAgICBiID0gKGIgKiBjdC5ibHVlTXVsdGlwbGllciArIGN0LmJsdWVPZmZzZXQpICYgMHhmZjtcbiAgICAgICAgYSA9IChhICogY3QuYWxwaGFNdWx0aXBsaWVyICsgY3QuYWxwaGFPZmZzZXQpICYgMHhmZjtcbiAgICB9XG4gICAgaWYgKGEgPCAweGZmKSB7XG4gICAgICAgIHJldHVybiBgcmdiYSgke3J9LCAke2d9LCAke2J9LCAke2EgLyAweGZmfSlgO1xuICAgIH1cbiAgICByZXR1cm4gYHJnYigke3J9LCAke2d9LCAke2J9KWA7XG59XG4iLCJpbXBvcnQgeyBTdXBwb3J0IH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzU3VwcG9ydCBleHRlbmRzIFN1cHBvcnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmNvbnRleHQyZCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBjb25zdCB7IGNhbnZhcyB9ID0gdGhpcztcbiAgICAgICAgdGhpcy5jb250ZXh0MmQuc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgIHRoaXMuY29udGV4dDJkLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIH1cbiAgICBzZXRTaXplKHdpZHRoLCBoZWlnaHQsIHBpeGVsUmF0aW8pIHtcbiAgICAgICAgY29uc3Qgdmlld1dpZHRoID0gTWF0aC5mbG9vcih3aWR0aCAqIHBpeGVsUmF0aW8pO1xuICAgICAgICBjb25zdCB2aWV3SGVpZ2h0ID0gTWF0aC5mbG9vcihoZWlnaHQgKiBwaXhlbFJhdGlvKTtcbiAgICAgICAgY29uc3QgeyBjYW52YXMgfSA9IHRoaXM7XG4gICAgICAgIGlmIChjYW52YXMud2lkdGggIT09IHZpZXdXaWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSB2aWV3SGVpZ2h0KSB7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB2aWV3V2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdmlld0hlaWdodDtcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IHZhciBDb21wb25lbnQ7XG4oZnVuY3Rpb24gKENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZChjb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5lbmFibGVkID8/IHRydWU7XG4gICAgfVxuICAgIENvbXBvbmVudC5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XG4gICAgZnVuY3Rpb24gaXNWaXNpYmxlKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LnZpc2libGUgPz8gdHJ1ZTtcbiAgICB9XG4gICAgQ29tcG9uZW50LmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbn0pKENvbXBvbmVudCB8fCAoQ29tcG9uZW50ID0ge30pKTtcbiIsImV4cG9ydCBjb25zdCBDT05UQUlORVIgPSAnY29udGFpbmVyJztcbmV4cG9ydCB2YXIgQ29udGFpbmVyO1xuKGZ1bmN0aW9uIChDb250YWluZXIpIHtcbiAgICBmdW5jdGlvbiBudW1DaGlsZHJlbihjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZCwgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgY291bnQgKz0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICBjb3VudCArPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuICAgIENvbnRhaW5lci5udW1DaGlsZHJlbiA9IG51bUNoaWxkcmVuO1xufSkoQ29udGFpbmVyIHx8IChDb250YWluZXIgPSB7fSkpO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihjb250YWluZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGNoaWxkLCBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgIGNvbnN0IHsgc3VwcG9ydCB9ID0gY29udGV4dDtcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRDb250ZXh0ID0gc3VwcG9ydC5nZXRSZW5kZXJDb250ZXh0KGNoaWxkLCBjb250ZXh0KTtcbiAgICAgICAgc3VwcG9ydC5yZW5kZXIoY2hpbGQsIGNoaWxkQ29udGV4dCk7XG4gICAgfVxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gc3VwcG9ydC5nZXRSZW5kZXJDb250ZXh0KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgc3VwcG9ydC5yZW5kZXIoY29tcG9uZW50LCBjb21wb25lbnRDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gc3VwcG9ydC5nZXRSZW5kZXJDb250ZXh0KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgc3VwcG9ydC5yZW5kZXIoY29tcG9uZW50LCBjb21wb25lbnRDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUoY29udGFpbmVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBjaGlsZCwgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICBjb25zdCB7IHN1cHBvcnQgfSA9IGNvbnRleHQ7XG4gICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHN1cHBvcnQuZ2V0VXBkYXRlQ29udGV4dChjaGlsZCwgY29udGV4dCk7XG4gICAgICAgIHN1cHBvcnQudXBkYXRlKGNoaWxkLCBjaGlsZENvbnRleHQpO1xuICAgIH1cbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IHN1cHBvcnQuZ2V0VXBkYXRlQ29udGV4dChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHN1cHBvcnQudXBkYXRlKGNvbXBvbmVudCwgY29tcG9uZW50Q29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5ba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IHN1cHBvcnQuZ2V0VXBkYXRlQ29udGV4dChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHN1cHBvcnQudXBkYXRlKGNvbXBvbmVudCwgY29tcG9uZW50Q29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaGl0VGVzdChjb250YWluZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGNoaWxkLCBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgIGNvbnN0IHsgc3VwcG9ydCB9ID0gY29udGV4dDtcbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gc3VwcG9ydC5nZXRQb2ludGVyQ29udGV4dChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cHBvcnQuaGl0VGVzdChjb21wb25lbnQsIGNvbXBvbmVudENvbnRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBrZXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5ba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IHN1cHBvcnQuZ2V0UG9pbnRlckNvbnRleHQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBwb3J0LmhpdFRlc3QoY29tcG9uZW50LCBjb21wb25lbnRDb250ZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRDb250ZXh0ID0gc3VwcG9ydC5nZXRQb2ludGVyQ29udGV4dChjaGlsZCwgY29udGV4dCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cHBvcnQuaGl0VGVzdChjaGlsZCwgY2hpbGRDb250ZXh0KTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q29udGFpbmVyRXh0ZW5zaW9uKHN1cHBvcnQpIHtcbiAgICBzdXBwb3J0LnVwZGF0ZUhhbmRsZXJzLnNldChDT05UQUlORVIsIHVwZGF0ZSk7XG4gICAgc3VwcG9ydC5yZW5kZXJIYW5kbGVycy5zZXQoQ09OVEFJTkVSLCByZW5kZXIpO1xuICAgIHN1cHBvcnQuaGl0VGVzdEhhbmRsZXJzLnNldChDT05UQUlORVIsIGhpdFRlc3QpO1xufVxuIiwiaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0sIE1hdHJpeCB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBhcHBseUNvbnRhaW5lckV4dGVuc2lvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmNvbnN0IEVNUFRZX01BVFJJWCA9IE1hdHJpeC5lbXB0eSgpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3RvcihzdXBwb3J0KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSA0MDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMzAwO1xuICAgICAgICB0aGlzLmZ1bGxzY3JlZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbmRlckVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnBvaW50ZXJFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRpbWUgPSAtMTtcbiAgICAgICAgdGhpcy5tYXRyaXggPSBNYXRyaXguZW1wdHkoKTtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFVwZGF0ZSA9ICh0aW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSB0aGlzLnRpbWUgPT09IC0xID8gMCA6IHRpbWUgLSB0aGlzLnRpbWU7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVGcmFtZShkZWx0YVRpbWUgLyAxMDAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdXBwb3J0ID0gc3VwcG9ydDtcbiAgICAgICAgYXBwbHlDb250YWluZXJFeHRlbnNpb24odGhpcy5zdXBwb3J0KTtcbiAgICB9XG4gICAgdXBkYXRlKHRpbWUgPSAwKSB7XG4gICAgICAgIGlmICghdGhpcy5yb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmFzZSA9IHtcbiAgICAgICAgICAgIHN1cHBvcnQ6IHRoaXMuc3VwcG9ydCxcbiAgICAgICAgICAgIHRpbWUsXG4gICAgICAgICAgICBkZXB0aDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuc3VwcG9ydC5nZXRVcGRhdGVDb250ZXh0KHRoaXMucm9vdCwgYmFzZSk7XG4gICAgICAgIHRoaXMuc3VwcG9ydC51cGRhdGUodGhpcy5yb290LCBjb250ZXh0KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VwcG9ydC5jbGVhcigpO1xuICAgICAgICBjb25zdCBiYXNlID0ge1xuICAgICAgICAgICAgc3VwcG9ydDogdGhpcy5zdXBwb3J0LFxuICAgICAgICAgICAgZGVwdGg6IDAsXG4gICAgICAgICAgICBtYXRyaXg6IHRoaXMubWF0cml4LFxuICAgICAgICAgICAgY29sb3JUcmFuc2Zvcm06IENvbG9yVHJhbnNmb3JtLmVtcHR5KCksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLnN1cHBvcnQuZ2V0UmVuZGVyQ29udGV4dCh0aGlzLnJvb3QsIGJhc2UpO1xuICAgICAgICB0aGlzLnN1cHBvcnQucmVuZGVyKHRoaXMucm9vdCwgY29udGV4dCk7XG4gICAgfVxuICAgIHVwZGF0ZVNpemUoKSB7XG4gICAgICAgIGNvbnN0IHBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBmdWxsc2NyZWVuIH0gPSB0aGlzO1xuICAgICAgICBsZXQgdGFyZ2V0V2lkdGggPSBNYXRoLmZsb29yKHdpZHRoKTtcbiAgICAgICAgbGV0IHRhcmdldEhlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0KTtcbiAgICAgICAgaWYgKGZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIHRhcmdldFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICB0YXJnZXRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXRyaXguYSA9IHBpeGVsUmF0aW87XG4gICAgICAgIHRoaXMubWF0cml4LmQgPSBwaXhlbFJhdGlvO1xuICAgICAgICB0aGlzLnN1cHBvcnQuc2V0U2l6ZSh0YXJnZXRXaWR0aCwgdGFyZ2V0SGVpZ2h0LCBwaXhlbFJhdGlvKTtcbiAgICB9XG4gICAgdXBkYXRlRnJhbWUodGltZSA9IDApIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZUVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlbmRlckVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVOZXh0RnJhbWUoKTtcbiAgICB9XG4gICAgdXBkYXRlTmV4dEZyYW1lKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5pbnRlcm5hbFVwZGF0ZSk7XG4gICAgfVxuICAgIGRpc3BhdGNoUG9pbnRlckV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5wb2ludGVyRW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5yb290KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB0eXBlLCBpZCwgeCwgeSwgfSA9IGV2ZW50O1xuICAgICAgICBjb25zdCBiYXNlID0ge1xuICAgICAgICAgICAgc3VwcG9ydDogdGhpcy5zdXBwb3J0LFxuICAgICAgICAgICAgZGVwdGg6IDAsXG4gICAgICAgICAgICBtYXRyaXg6IEVNUFRZX01BVFJJWCxcbiAgICAgICAgICAgIGxvY2FsOiB7IHgsIHkgfSxcbiAgICAgICAgICAgIGdsb2JhbDogeyB4LCB5IH0sXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLnN1cHBvcnQuZ2V0UG9pbnRlckNvbnRleHQodGhpcy5yb290LCBiYXNlKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0LmhpdFRlc3QodGhpcy5yb290LCBjb250ZXh0KTtcbiAgICB9XG4gICAgcGxheSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYXknKTtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSAtMTtcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU5leHRGcmFtZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhdXNlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygncGF1c2UnKTtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCBEZWJ1ZyBmcm9tICcuLi91dGlscy9kZWJ1Zyc7XG5leHBvcnQgY2xhc3MgUmVzb3VyY2VzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVzb2x2ZXJzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBnZXQoYXNzZXQpIHtcbiAgICAgICAgaWYgKCFhc3NldCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc291cmNlID0gdGhpcy5yZXNvdXJjZXMuZ2V0KGFzc2V0KTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICAgICAgcmVzb3VyY2UgPSB0aGlzLnJlc29sdmUoYXNzZXQpO1xuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXMuc2V0KGFzc2V0LCByZXNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgIH1cbiAgICBhZGQoYXNzZXQsIHJlc291cmNlKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzLnNldChhc3NldCwgcmVzb3VyY2UpO1xuICAgIH1cbiAgICByZW1vdmUoYXNzZXQpIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMuZGVsZXRlKGFzc2V0KTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzLmNsZWFyKCk7XG4gICAgfVxuICAgIHJlc29sdmUoYXNzZXQpIHtcbiAgICAgICAgZm9yIChjb25zdCByZXNvbHZlciBvZiB0aGlzLnJlc29sdmVycykge1xuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSByZXNvbHZlcihhc3NldCk7XG4gICAgICAgICAgICBpZiAocmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgRGVidWcud2FybmluZyhgUmVzb3VyY2Ugbm90IHJlc29sdmVkOiAke2Fzc2V0fWApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb2xvclRyYW5zZm9ybSwgTWF0cml4IH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmltcG9ydCB7IFBvaW50ZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BvaW50ZXInO1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgUmVzb3VyY2VzIH0gZnJvbSAnLi9yZXNvdXJjZXMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VwcG9ydCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGVwdGggPSA2NDtcbiAgICAgICAgdGhpcy51cGRhdGVIYW5kbGVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJIYW5kbGVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5oaXRUZXN0SGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucHJvcGVydHlIYW5kbGVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgUmVzb3VyY2VzKCk7XG4gICAgfVxuICAgIHVwZGF0ZShjb21wb25lbnQsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuZGVwdGggPiB0aGlzLnVwZGF0ZURlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFDb21wb25lbnQuaXNFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BlcnR5SGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlciwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRbcHJvcGVydHldKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5vblVwZGF0ZSkge1xuICAgICAgICAgICAgY29tcG9uZW50Lm9uVXBkYXRlKGNvbnRleHQudGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMudXBkYXRlSGFuZGxlcnMuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoY29tcG9uZW50LCBjb250ZXh0KSB7XG4gICAgICAgIGlmIChjb250ZXh0LmRlcHRoID4gdGhpcy51cGRhdGVEZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQ29tcG9uZW50LmlzVmlzaWJsZShjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMucmVuZGVySGFuZGxlcnMuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoaXRUZXN0KGNvbXBvbmVudCwgY29udGV4dCkge1xuICAgICAgICBpZiAoY29udGV4dC5kZXB0aCA+IHRoaXMudXBkYXRlRGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUNvbXBvbmVudC5pc1Zpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5oaXRUZXN0SGFuZGxlcnMuZ2V0KGNvbXBvbmVudC50eXBlKTtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gY29udGV4dC5sb2NhbDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGhhbmRsZXIoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCBjb250ZXh0LnR5cGUsIHgsIHksIGNvbnRleHQuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbnRleHQudHlwZSA9PT0gJ3BvaW50ZXJNb3ZlJykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgIWNvbXBvbmVudC5wb2ludGVyT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBQb2ludGVyLmRpc3BhdGNoRXZlbnQoY29tcG9uZW50LCAncG9pbnRlck92ZXInLCB4LCB5LCBjb250ZXh0LmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXJlc3VsdCAmJiBjb21wb25lbnQucG9pbnRlck92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdXQnLCB4LCB5LCBjb250ZXh0LmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnBvaW50ZXJPdmVyID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdldFVwZGF0ZUNvbnRleHQoY29tcG9uZW50LCBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpbWU6IHBhcmVudC50aW1lLFxuICAgICAgICAgICAgZGVwdGg6IHBhcmVudC5kZXB0aCArIDEsXG4gICAgICAgICAgICBzdXBwb3J0OiBwYXJlbnQuc3VwcG9ydCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UmVuZGVyQ29udGV4dChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICBjb25zdCBtYXRyaXggPSBUcmFuc2Zvcm0uZ2V0TWF0cml4KGNvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IGNvbG9yVHJhbnNmb3JtID0gVHJhbnNmb3JtLmdldENvbG9yVHJhbnNmb3JtKGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXB0aDogcGFyZW50LmRlcHRoICsgMSxcbiAgICAgICAgICAgIHN1cHBvcnQ6IHBhcmVudC5zdXBwb3J0LFxuICAgICAgICAgICAgbWF0cml4OiBNYXRyaXguY29uY2F0KHBhcmVudC5tYXRyaXgsIG1hdHJpeCksXG4gICAgICAgICAgICBjb2xvclRyYW5zZm9ybTogQ29sb3JUcmFuc2Zvcm0uY29uY2F0KHBhcmVudC5jb2xvclRyYW5zZm9ybSwgY29sb3JUcmFuc2Zvcm0pLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRQb2ludGVyQ29udGV4dChjb21wb25lbnQsIHBhcmVudCkge1xuICAgICAgICBjb25zdCBtYXRyaXggPSBUcmFuc2Zvcm0uZ2V0TWF0cml4KGNvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybWVkTWF0cml4ID0gTWF0cml4LmNvbmNhdChwYXJlbnQubWF0cml4LCBtYXRyaXgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVwdGg6IHBhcmVudC5kZXB0aCArIDEsXG4gICAgICAgICAgICB0eXBlOiBwYXJlbnQudHlwZSxcbiAgICAgICAgICAgIHN1cHBvcnQ6IHBhcmVudC5zdXBwb3J0LFxuICAgICAgICAgICAgZ2xvYmFsOiBwYXJlbnQuZ2xvYmFsLFxuICAgICAgICAgICAgbWF0cml4OiB0cmFuc2Zvcm1lZE1hdHJpeCxcbiAgICAgICAgICAgIGxvY2FsOiBNYXRyaXgudHJhbnNmb3JtSW52ZXJzZVBvaW50KHRyYW5zZm9ybWVkTWF0cml4LCBwYXJlbnQuZ2xvYmFsKSxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgU3VwcG9ydCBmcm9tICcuL2VuZ2luZS9zdXBwb3J0JztcbmltcG9ydCBFbmdpbmUgZnJvbSAnLi9lbmdpbmUvZW5naW5lJztcbmltcG9ydCBEZWJ1ZyBmcm9tICcuL3V0aWxzL2RlYnVnJztcbmV4cG9ydCAqIGZyb20gJy4vZW5naW5lL2NvbnRleHQnO1xuZXhwb3J0ICogZnJvbSAnLi9lbmdpbmUvcmVzb3VyY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy9wb2ludGVyJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy90cmFuc2Zvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3NvdXJjZSc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvcGl2b3QnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJztcbmV4cG9ydCAqIGZyb20gJy4vaW5wdXQva2V5Ym9hcmQnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnB1dC9tb3VzZSc7XG5leHBvcnQgKiBmcm9tICcuL2lucHV0L3RvdWNoJztcbmV4cG9ydCB7IFN1cHBvcnQsIEVuZ2luZSwgRGVidWcsIH07XG4iLCJleHBvcnQgZnVuY3Rpb24gYXBwbHlLZXlib2FyZFN1cHBvcnRFeHRlbnNpb24oZW5naW5lKSB7XG59XG4iLCJmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsIHR5cGUpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGVuZ2luZS5zdXBwb3J0O1xuICAgIGNvbnN0IGNsaWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gY2xpZW50UmVjdC5sZWZ0IC0gZWxlbWVudC5jbGllbnRMZWZ0O1xuICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gY2xpZW50UmVjdC50b3AgLSBlbGVtZW50LmNsaWVudFRvcDtcbiAgICBlbmdpbmUuZGlzcGF0Y2hQb2ludGVyRXZlbnQoe1xuICAgICAgICB0eXBlLCB4LCB5LFxuICAgIH0pO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlNb3VzZVN1cHBvcnRFeHRlbnNpb24oZW5naW5lKSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSBlbmdpbmUuc3VwcG9ydDtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyRG93bicpO1xuICAgIH0pO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xuICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyVXAnKTtcbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyTW92ZScpO1xuICAgIH0pO1xufVxuIiwiZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCB0eXBlKSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSBlbmdpbmUuc3VwcG9ydDtcbiAgICBjb25zdCBjbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV07XG4gICAgICAgIGNvbnN0IHggPSB0b3VjaC5jbGllbnRYIC0gY2xpZW50UmVjdC5sZWZ0IC0gZWxlbWVudC5jbGllbnRMZWZ0O1xuICAgICAgICBjb25zdCB5ID0gdG91Y2guY2xpZW50WSAtIGNsaWVudFJlY3QudG9wIC0gZWxlbWVudC5jbGllbnRUb3A7XG4gICAgICAgIGNvbnN0IGlkID0gdG91Y2guaWRlbnRpZmllcjtcbiAgICAgICAgZW5naW5lLmRpc3BhdGNoUG9pbnRlckV2ZW50KHtcbiAgICAgICAgICAgIHR5cGUsIHgsIHksIGlkLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVRvdWNoU3VwcG9ydEV4dGVuc2lvbihlbmdpbmUpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGVuZ2luZS5zdXBwb3J0O1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgICBkaXNwYXRjaEV2ZW50KGVuZ2luZSwgZXZlbnQsICdwb2ludGVyRG93bicpO1xuICAgIH0pO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlclVwJyk7XG4gICAgfSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlck1vdmUnKTtcbiAgICB9KTtcbn1cbiIsImV4cG9ydCB2YXIgUGl2b3Q7XG4oZnVuY3Rpb24gKFBpdm90KSB7XG4gICAgZnVuY3Rpb24gZ2V0WChwaXZvdCwgd2lkdGgpIHtcbiAgICAgICAgY29uc3QgeyBwaXZvdFggfSA9IHBpdm90O1xuICAgICAgICBpZiAocGl2b3RYKSB7XG4gICAgICAgICAgICByZXR1cm4gLXBpdm90WCAqIHdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBQaXZvdC5nZXRYID0gZ2V0WDtcbiAgICBmdW5jdGlvbiBnZXRZKHBpdm90LCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgeyBwaXZvdFkgfSA9IHBpdm90O1xuICAgICAgICBpZiAocGl2b3RZKSB7XG4gICAgICAgICAgICByZXR1cm4gLXBpdm90WSAqIGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgUGl2b3QuZ2V0WSA9IGdldFk7XG59KShQaXZvdCB8fCAoUGl2b3QgPSB7fSkpO1xuIiwiaW1wb3J0IERlYnVnIGZyb20gJy4uL3V0aWxzL2RlYnVnJztcbmV4cG9ydCB2YXIgUG9pbnRlcjtcbihmdW5jdGlvbiAoUG9pbnRlcikge1xuICAgIGZ1bmN0aW9uIGlzUG9pbnRlck92ZXIocG9pbnRlcikge1xuICAgICAgICByZXR1cm4gISFwb2ludGVyLnBvaW50ZXJPdmVyO1xuICAgIH1cbiAgICBQb2ludGVyLmlzUG9pbnRlck92ZXIgPSBpc1BvaW50ZXJPdmVyO1xuICAgIGZ1bmN0aW9uIGlzUG9pbnRlckVuYWJsZWQocG9pbnRlcikge1xuICAgICAgICByZXR1cm4gcG9pbnRlci5wb2ludGVyRW5hYmxlZCA/PyB0cnVlO1xuICAgIH1cbiAgICBQb2ludGVyLmlzUG9pbnRlckVuYWJsZWQgPSBpc1BvaW50ZXJFbmFibGVkO1xuICAgIGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQocG9pbnRlciwgdHlwZSwgeCwgeSwgaWQpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlck5hbWUgPSBgb24ke3R5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHt0eXBlLnNsaWNlKDEpfWA7XG4gICAgICAgIGlmIChoYW5kbGVyTmFtZSkge1xuICAgICAgICAgICAgaWYgKHBvaW50ZXJbaGFuZGxlck5hbWVdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUsIHgsIHksIGlkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcG9pbnRlcltoYW5kbGVyTmFtZV0oZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgRGVidWcud2FybmluZyhgUG9pbnRlciBldmVudCB3aXRoIHR5cGU6ICR7dHlwZX0gbm90IGZvdW5kYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbn0pKFBvaW50ZXIgfHwgKFBvaW50ZXIgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBTb3VyY2U7XG4oZnVuY3Rpb24gKFNvdXJjZSkge1xuICAgIGZ1bmN0aW9uIGdldFJlc291cmNlKHNvdXJjZSwgY29udGV4dCkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gc291cmNlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQuc3VwcG9ydC5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgfVxuICAgIFNvdXJjZS5nZXRSZXNvdXJjZSA9IGdldFJlc291cmNlO1xuICAgIGZ1bmN0aW9uIGlzTG9hZGVkKHNvdXJjZSwgY29udGV4dCkge1xuICAgICAgICBjb25zdCByZXNvdXJjZSA9IGdldFJlc291cmNlKHNvdXJjZSwgY29udGV4dCk7XG4gICAgICAgIHJldHVybiAhIXJlc291cmNlPy5sb2FkZWQ7XG4gICAgfVxuICAgIFNvdXJjZS5pc0xvYWRlZCA9IGlzTG9hZGVkO1xufSkoU291cmNlIHx8IChTb3VyY2UgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBUcmFuc2Zvcm07XG4oZnVuY3Rpb24gKFRyYW5zZm9ybSkge1xuICAgIGZ1bmN0aW9uIGdldE1hdHJpeCh0cmFuc2Zvcm0pIHtcbiAgICAgICAgY29uc3QgeyBtYXRyaXggfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKG1hdHJpeCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhOiBtYXRyaXguYSA/PyAxLFxuICAgICAgICAgICAgICAgIGI6IG1hdHJpeC5iID8/IDAsXG4gICAgICAgICAgICAgICAgYzogbWF0cml4LmMgPz8gMCxcbiAgICAgICAgICAgICAgICBkOiBtYXRyaXguZCA/PyAxLFxuICAgICAgICAgICAgICAgIHR4OiBtYXRyaXgudHggPz8gMCxcbiAgICAgICAgICAgICAgICB0eTogbWF0cml4LnR5ID8/IDAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcm90YXRpb24gfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gdHJhbnNmb3JtLnNjYWxlWCA/PyB0cmFuc2Zvcm0uc2NhbGUgPz8gMTtcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gdHJhbnNmb3JtLnNjYWxlWSA/PyB0cmFuc2Zvcm0uc2NhbGUgPz8gMTtcbiAgICAgICAgY29uc3QgdHggPSB0cmFuc2Zvcm0ueCA/PyAwO1xuICAgICAgICBjb25zdCB0eSA9IHRyYW5zZm9ybS55ID8/IDA7XG4gICAgICAgIGlmIChyb3RhdGlvbikge1xuICAgICAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3Mocm90YXRpb24pO1xuICAgICAgICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW4ocm90YXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhOiBjb3MgKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgYjogc2luICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIGM6IC1zaW4gKiBzY2FsZVksXG4gICAgICAgICAgICAgICAgZDogY29zICogc2NhbGVZLFxuICAgICAgICAgICAgICAgIHR4LFxuICAgICAgICAgICAgICAgIHR5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogc2NhbGVYLFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGM6IDAsXG4gICAgICAgICAgICBkOiBzY2FsZVksXG4gICAgICAgICAgICB0eCxcbiAgICAgICAgICAgIHR5LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBUcmFuc2Zvcm0uZ2V0TWF0cml4ID0gZ2V0TWF0cml4O1xuICAgIGZ1bmN0aW9uIGdldENvbG9yVHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgICAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChjb2xvclRyYW5zZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhbHBoYU11bHRpcGxpZXI6IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA/PyAxLFxuICAgICAgICAgICAgICAgIHJlZE11bHRpcGxpZXI6IGNvbG9yVHJhbnNmb3JtLnJlZE11bHRpcGxpZXIgPz8gMSxcbiAgICAgICAgICAgICAgICBncmVlbk11bHRpcGxpZXI6IGNvbG9yVHJhbnNmb3JtLmdyZWVuTXVsdGlwbGllciA/PyAxLFxuICAgICAgICAgICAgICAgIGJsdWVNdWx0aXBsaWVyOiBjb2xvclRyYW5zZm9ybS5ibHVlTXVsdGlwbGllciA/PyAxLFxuICAgICAgICAgICAgICAgIGFscGhhT2Zmc2V0OiBjb2xvclRyYW5zZm9ybS5hbHBoYU9mZnNldCA/PyAwLFxuICAgICAgICAgICAgICAgIHJlZE9mZnNldDogY29sb3JUcmFuc2Zvcm0ucmVkT2Zmc2V0ID8/IDAsXG4gICAgICAgICAgICAgICAgZ3JlZW5PZmZzZXQ6IGNvbG9yVHJhbnNmb3JtLmdyZWVuT2Zmc2V0ID8/IDAsXG4gICAgICAgICAgICAgICAgYmx1ZU9mZnNldDogY29sb3JUcmFuc2Zvcm0uYmx1ZU9mZnNldCA/PyAwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHRpbnQgfSA9IHRyYW5zZm9ybTtcbiAgICAgICAgaWYgKHRpbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY29sb3IgPSAwLCB2YWx1ZSA9IDEgfSA9IHRpbnQ7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZUludmVydGVkID0gMSAtIHZhbHVlO1xuICAgICAgICAgICAgY29uc3QgciA9IChjb2xvciA+PiAxNikgJiAweGZmO1xuICAgICAgICAgICAgY29uc3QgZyA9IChjb2xvciA+PiA4KSAmIDB4ZmY7XG4gICAgICAgICAgICBjb25zdCBiID0gY29sb3IgJiAweGZmO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhbHBoYU11bHRpcGxpZXI6IHRyYW5zZm9ybS5hbHBoYSA/PyAxLFxuICAgICAgICAgICAgICAgIHJlZE11bHRpcGxpZXI6IHZhbHVlSW52ZXJ0ZWQsXG4gICAgICAgICAgICAgICAgZ3JlZW5NdWx0aXBsaWVyOiB2YWx1ZUludmVydGVkLFxuICAgICAgICAgICAgICAgIGJsdWVNdWx0aXBsaWVyOiB2YWx1ZUludmVydGVkLFxuICAgICAgICAgICAgICAgIGFscGhhT2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgIHJlZE9mZnNldDogciAqIHZhbHVlLFxuICAgICAgICAgICAgICAgIGdyZWVuT2Zmc2V0OiBnICogdmFsdWUsXG4gICAgICAgICAgICAgICAgYmx1ZU9mZnNldDogYiAqIHZhbHVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxwaGFNdWx0aXBsaWVyOiB0cmFuc2Zvcm0uYWxwaGEgPz8gMSxcbiAgICAgICAgICAgIHJlZE11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBncmVlbk11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBibHVlTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGFscGhhT2Zmc2V0OiAwLFxuICAgICAgICAgICAgcmVkT2Zmc2V0OiAwLFxuICAgICAgICAgICAgZ3JlZW5PZmZzZXQ6IDAsXG4gICAgICAgICAgICBibHVlT2Zmc2V0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBUcmFuc2Zvcm0uZ2V0Q29sb3JUcmFuc2Zvcm0gPSBnZXRDb2xvclRyYW5zZm9ybTtcbn0pKFRyYW5zZm9ybSB8fCAoVHJhbnNmb3JtID0ge30pKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERlYnVnIHtcbiAgICBzdGF0aWMgbG9nKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gICAgfVxuICAgIHN0YXRpYyBlcnJvciguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLmVycm9ycy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHRoaXMuZXJyb3JzLnNldChpZCwgY291bnQpO1xuICAgIH1cbiAgICBzdGF0aWMgd2FybmluZyguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGFyZ3MpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLndhcm5pbmdzLmdldChpZCk7XG4gICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICB0aGlzLndhcm5pbmdzLnNldChpZCwgY291bnQpO1xuICAgIH1cbn1cbkRlYnVnLmVycm9ycyA9IG5ldyBNYXAoKTtcbkRlYnVnLndhcm5pbmdzID0gbmV3IE1hcCgpO1xuIiwiZXhwb3J0IHZhciBCb3VuZHM7XG4oZnVuY3Rpb24gKEJvdW5kcykge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWluWDogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG1pblk6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtYXhYOiBOdW1iZXIuTUlOX1ZBTFVFLFxuICAgICAgICAgICAgbWF4WTogTnVtYmVyLk1JTl9WQUxVRSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQm91bmRzLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB9ID0gYm91bmRzO1xuICAgICAgICByZXR1cm4gbWluWCA9PT0gTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICAgICAgJiYgbWluWSA9PT0gTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgICAgICAgJiYgbWF4WCA9PT0gTnVtYmVyLk1JTl9WQUxVRVxuICAgICAgICAgICAgJiYgbWF4WSA9PT0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICB9XG4gICAgQm91bmRzLmlzRW1wdHkgPSBpc0VtcHR5O1xuICAgIGZ1bmN0aW9uIHRvUmVjdGFuZ2xlKGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IG1pblgsIG1pblksIG1heFgsIG1heFksIH0gPSBib3VuZHM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBtaW5YLFxuICAgICAgICAgICAgeTogbWluWSxcbiAgICAgICAgICAgIHdpZHRoOiBtYXhYIC0gbWluWCxcbiAgICAgICAgICAgIGhlaWdodDogbWF4WSAtIG1pblksXG4gICAgICAgIH07XG4gICAgfVxuICAgIEJvdW5kcy50b1JlY3RhbmdsZSA9IHRvUmVjdGFuZ2xlO1xuICAgIGZ1bmN0aW9uIHRlc3RYKGJvdW5kcywgeCkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RYID0gdGVzdFg7XG4gICAgZnVuY3Rpb24gdGVzdFkoYm91bmRzLCB5KSB7XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFkgPSB0ZXN0WTtcbiAgICBmdW5jdGlvbiB0ZXN0KGJvdW5kcywgeCwgeSkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0ID0gdGVzdDtcbiAgICBmdW5jdGlvbiB0ZXN0UG9pbnQoYm91bmRzLCBwb2ludCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICBpZiAoYm91bmRzLm1pblggPiB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFggPCB4KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdW5kcy5taW5ZID4geSkge1xuICAgICAgICAgICAgYm91bmRzLm1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhZIDwgeSkge1xuICAgICAgICAgICAgYm91bmRzLm1heFkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0UG9pbnQgPSB0ZXN0UG9pbnQ7XG59KShCb3VuZHMgfHwgKEJvdW5kcyA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIENvbG9yVHJhbnNmb3JtO1xuKGZ1bmN0aW9uIChDb2xvclRyYW5zZm9ybSkge1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxwaGFNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgcmVkTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGdyZWVuTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGJsdWVNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYWxwaGFPZmZzZXQ6IDAsXG4gICAgICAgICAgICByZWRPZmZzZXQ6IDAsXG4gICAgICAgICAgICBncmVlbk9mZnNldDogMCxcbiAgICAgICAgICAgIGJsdWVPZmZzZXQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gY29uY2F0KGN0MSwgY3QwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbHBoYU11bHRpcGxpZXI6IGN0MS5hbHBoYU11bHRpcGxpZXIgKiBjdDAuYWxwaGFNdWx0aXBsaWVyLFxuICAgICAgICAgICAgcmVkTXVsdGlwbGllcjogY3QxLnJlZE11bHRpcGxpZXIgKiBjdDAucmVkTXVsdGlwbGllcixcbiAgICAgICAgICAgIGdyZWVuTXVsdGlwbGllcjogY3QxLmdyZWVuTXVsdGlwbGllciAqIGN0MC5ncmVlbk11bHRpcGxpZXIsXG4gICAgICAgICAgICBibHVlTXVsdGlwbGllcjogY3QxLmJsdWVNdWx0aXBsaWVyICogY3QwLmJsdWVNdWx0aXBsaWVyLFxuICAgICAgICAgICAgYWxwaGFPZmZzZXQ6IGN0MS5hbHBoYU11bHRpcGxpZXIgKiBjdDAuYWxwaGFPZmZzZXQgKyBjdDAuYWxwaGFPZmZzZXQsXG4gICAgICAgICAgICByZWRPZmZzZXQ6IGN0MS5yZWRNdWx0aXBsaWVyICogY3QwLnJlZE9mZnNldCArIGN0MC5yZWRPZmZzZXQsXG4gICAgICAgICAgICBncmVlbk9mZnNldDogY3QxLmdyZWVuTXVsdGlwbGllciAqIGN0MC5ncmVlbk9mZnNldCArIGN0MC5ncmVlbk9mZnNldCxcbiAgICAgICAgICAgIGJsdWVPZmZzZXQ6IGN0MS5ibHVlTXVsdGlwbGllciAqIGN0MC5ibHVlT2Zmc2V0ICsgY3QwLmJsdWVPZmZzZXQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmNvbmNhdCA9IGNvbmNhdDtcbiAgICBmdW5jdGlvbiBpc0RlZmF1bHQoY3QpIHtcbiAgICAgICAgcmV0dXJuIGN0LnJlZE11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmdyZWVuTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmFscGhhTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYmx1ZU9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG4gICAgfVxuICAgIENvbG9yVHJhbnNmb3JtLmlzRGVmYXVsdCA9IGlzRGVmYXVsdDtcbn0pKENvbG9yVHJhbnNmb3JtIHx8IChDb2xvclRyYW5zZm9ybSA9IHt9KSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbG9yLXRyYW5zZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2JvdW5kcyc7XG5leHBvcnQgKiBmcm9tICcuL21hdHJpeCc7XG5leHBvcnQgKiBmcm9tICcuL3BvaW50JztcbmV4cG9ydCAqIGZyb20gJy4vcmVjdGFuZ2xlJztcbiIsImV4cG9ydCB2YXIgTWF0cml4O1xuKGZ1bmN0aW9uIChNYXRyaXgpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGE6IDEsXG4gICAgICAgICAgICBiOiAwLFxuICAgICAgICAgICAgYzogMCxcbiAgICAgICAgICAgIGQ6IDEsXG4gICAgICAgICAgICB0eDogMCxcbiAgICAgICAgICAgIHR5OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBNYXRyaXguZW1wdHkgPSBlbXB0eTtcbiAgICBmdW5jdGlvbiBjb25jYXQobWF0cml4MCwgbWF0cml4MSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogbWF0cml4MS5hICogbWF0cml4MC5hICsgbWF0cml4MS5iICogbWF0cml4MC5jLFxuICAgICAgICAgICAgYjogbWF0cml4MS5hICogbWF0cml4MC5iICsgbWF0cml4MS5iICogbWF0cml4MC5kLFxuICAgICAgICAgICAgYzogbWF0cml4MS5jICogbWF0cml4MC5hICsgbWF0cml4MS5kICogbWF0cml4MC5jLFxuICAgICAgICAgICAgZDogbWF0cml4MS5jICogbWF0cml4MC5iICsgbWF0cml4MS5kICogbWF0cml4MC5kLFxuICAgICAgICAgICAgdHg6IG1hdHJpeDEudHggKiBtYXRyaXgwLmEgKyBtYXRyaXgxLnR5ICogbWF0cml4MC5jICsgbWF0cml4MC50eCxcbiAgICAgICAgICAgIHR5OiBtYXRyaXgxLnR4ICogbWF0cml4MC5iICsgbWF0cml4MS50eSAqIG1hdHJpeDAuZCArIG1hdHJpeDAudHksXG4gICAgICAgIH07XG4gICAgfVxuICAgIE1hdHJpeC5jb25jYXQgPSBjb25jYXQ7XG4gICAgZnVuY3Rpb24gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KSB7XG4gICAgICAgIHJldHVybiBtYXRyaXguYSAqIG1hdHJpeC5kIC0gbWF0cml4LmIgKiBtYXRyaXguYztcbiAgICB9XG4gICAgTWF0cml4LmdldERldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQ7XG4gICAgZnVuY3Rpb24gaW52ZXJ0KG1hdHJpeCkge1xuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudChtYXRyaXgpO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIG1hdHJpeC5hID0gMDtcbiAgICAgICAgICAgIG1hdHJpeC5iID0gMDtcbiAgICAgICAgICAgIG1hdHJpeC5jID0gMDtcbiAgICAgICAgICAgIG1hdHJpeC5kID0gMDtcbiAgICAgICAgICAgIG1hdHJpeC50eCA9IC1tYXRyaXgudHg7XG4gICAgICAgICAgICBtYXRyaXgudHkgPSAtbWF0cml4LnR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGV0ZXJtaW5hbnQgPSAxLjAgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBtYXRyaXguZCAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgY29uc3QgYSA9IG1hdHJpeC5hICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICBtYXRyaXguYSA9IGQ7XG4gICAgICAgICAgICBtYXRyaXguYiAqPSAtZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICBtYXRyaXguYyAqPSAtZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICBtYXRyaXguZCA9IGE7XG4gICAgICAgICAgICBjb25zdCB0eCA9IC1tYXRyaXguYSAqIG1hdHJpeC50eCAtIG1hdHJpeC5jICogbWF0cml4LnR5O1xuICAgICAgICAgICAgY29uc3QgdHkgPSAtbWF0cml4LmIgKiBtYXRyaXgudHggLSBtYXRyaXguZCAqIG1hdHJpeC50eTtcbiAgICAgICAgICAgIG1hdHJpeC50eCA9IHR4O1xuICAgICAgICAgICAgbWF0cml4LnR5ID0gdHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTWF0cml4LmludmVydCA9IGludmVydDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Qb2ludChtYXRyaXgsIHBvaW50KSB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9pbnQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB4ICogbWF0cml4LmEgKyB5ICogbWF0cml4LmMgKyBtYXRyaXgudHgsXG4gICAgICAgICAgICB5OiB4ICogbWF0cml4LmIgKyB5ICogbWF0cml4LmQgKyBtYXRyaXgudHksXG4gICAgICAgIH07XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1Qb2ludCA9IHRyYW5zZm9ybVBvaW50O1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUludmVyc2VQb2ludChtYXRyaXgsIHBvaW50KSB7XG4gICAgICAgIGxldCBkZXRlcm1pbmFudCA9IGdldERldGVybWluYW50KG1hdHJpeCk7XG4gICAgICAgIGlmIChkZXRlcm1pbmFudCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiAtbWF0cml4LnR4LFxuICAgICAgICAgICAgICAgIHk6IC1tYXRyaXgudHksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGRldGVybWluYW50ID0gMSAvIGRldGVybWluYW50O1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogZGV0ZXJtaW5hbnQgKiAobWF0cml4LmMgKiAobWF0cml4LnR5IC0geSkgKyBtYXRyaXguZCAqICh4IC0gbWF0cml4LnR4KSksXG4gICAgICAgICAgICB5OiBkZXRlcm1pbmFudCAqIChtYXRyaXguYSAqICh5IC0gbWF0cml4LnR5KSArIG1hdHJpeC5iICogKG1hdHJpeC50eCAtIHgpKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybUludmVyc2VQb2ludCA9IHRyYW5zZm9ybUludmVyc2VQb2ludDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Cb3VuZHMobWF0cml4LCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyBhLCBiLCBjLCBkLCB0eCwgdHksIH0gPSBtYXRyaXg7XG4gICAgICAgIGNvbnN0IHJ4ID0gYm91bmRzLng7XG4gICAgICAgIGNvbnN0IHJ5ID0gYm91bmRzLnk7XG4gICAgICAgIGNvbnN0IHJyID0gcnggKyBib3VuZHMud2lkdGg7XG4gICAgICAgIGNvbnN0IHJiID0gcnkgKyBib3VuZHMuaGVpZ2h0O1xuICAgICAgICBjb25zdCBueDEgPSByeCAqIGEgKyByeSAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkxID0gcnggKiBiICsgcnkgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54MiA9IHJyICogYSArIHJ5ICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTIgPSByciAqIGIgKyByeSAqIGQgKyB0eTtcbiAgICAgICAgY29uc3QgbngzID0gcnIgKiBhICsgcmIgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MyA9IHJyICogYiArIHJiICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDQgPSByeCAqIGEgKyByYiAqIGMgKyB0eDtcbiAgICAgICAgY29uc3Qgbnk0ID0gcnggKiBiICsgcmIgKiBkICsgdHk7XG4gICAgICAgIGxldCBsZWZ0ID0gbngxO1xuICAgICAgICBpZiAobGVmdCA+IG54Mikge1xuICAgICAgICAgICAgbGVmdCA9IG54MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54Mykge1xuICAgICAgICAgICAgbGVmdCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA+IG54NCkge1xuICAgICAgICAgICAgbGVmdCA9IG54NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9wID0gbnkxO1xuICAgICAgICBpZiAodG9wID4gbnkyKSB7XG4gICAgICAgICAgICB0b3AgPSBueTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcCA+IG55Mykge1xuICAgICAgICAgICAgdG9wID0gbnkzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3AgPiBueTQpIHtcbiAgICAgICAgICAgIHRvcCA9IG55NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmlnaHQgPSBueDE7XG4gICAgICAgIGlmIChyaWdodCA8IG54Mikge1xuICAgICAgICAgICAgcmlnaHQgPSBueDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0IDwgbngzKSB7XG4gICAgICAgICAgICByaWdodCA9IG54MztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgPCBueDQpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbng0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBib3R0b20gPSBueTE7XG4gICAgICAgIGlmIChib3R0b20gPCBueTIpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55MjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tIDwgbnkzKSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdHRvbSA8IG55NCkge1xuICAgICAgICAgICAgYm90dG9tID0gbnk0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBsZWZ0LFxuICAgICAgICAgICAgeTogdG9wLFxuICAgICAgICAgICAgd2lkdGg6IHJpZ2h0IC0gbGVmdCxcbiAgICAgICAgICAgIGhlaWdodDogYm90dG9tIC0gdG9wLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtQm91bmRzID0gdHJhbnNmb3JtQm91bmRzO1xufSkoTWF0cml4IHx8IChNYXRyaXggPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBQb2ludDtcbihmdW5jdGlvbiAoUG9pbnQpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgIH1cbiAgICBQb2ludC5lbXB0eSA9IGVtcHR5O1xufSkoUG9pbnQgfHwgKFBvaW50ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUmVjdGFuZ2xlO1xuKGZ1bmN0aW9uIChSZWN0YW5nbGUpIHtcbiAgICBmdW5jdGlvbiBjb250YWlucyhyZWN0YW5nbGUsIHBvaW50KSB7XG4gICAgICAgIHJldHVybiByZWN0YW5nbGUueCA8IHBvaW50LnhcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS54ICsgcmVjdGFuZ2xlLndpZHRoID4gcG9pbnQueFxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnkgPCBwb2ludC55XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueSArIHJlY3RhbmdsZS5oZWlnaHQgPiBwb2ludC55O1xuICAgIH1cbiAgICBSZWN0YW5nbGUuY29udGFpbnMgPSBjb250YWlucztcbiAgICBmdW5jdGlvbiBpc0VtcHR5KHJlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gIXJlY3RhbmdsZS53aWR0aCB8fCAhcmVjdGFuZ2xlLmhlaWdodDtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmlzRW1wdHkgPSBpc0VtcHR5O1xufSkoUmVjdGFuZ2xlIHx8IChSZWN0YW5nbGUgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGl2b3QsIFNvdXJjZSwgfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5pbXBvcnQgeyBNYXRyaXgsIFJlY3RhbmdsZSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBhcHBseUltYWdlRXh0ZW5zaW9uLCBJTUFHRSB9IGZyb20gJy4vaW1hZ2UnO1xubGV0IHRlbXBDb250ZXh0O1xuZnVuY3Rpb24gaXNEZWZhdWx0Q29sb3JUcmFuc2Zvcm0oY3QpIHtcbiAgICByZXR1cm4gY3QucmVkTXVsdGlwbGllciA9PT0gMVxuICAgICAgICAmJiBjdC5ncmVlbk11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgJiYgY3QuYmx1ZU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgJiYgY3QucmVkT2Zmc2V0ID09PSAwXG4gICAgICAgICYmIGN0LmdyZWVuT2Zmc2V0ID09PSAwXG4gICAgICAgICYmIGN0LmJsdWVPZmZzZXQgPT09IDBcbiAgICAgICAgJiYgY3QuYWxwaGFPZmZzZXQgPT09IDA7XG59XG5mdW5jdGlvbiB1cGRhdGVUZW1wQ29udGV4dChjb250ZXh0KSB7XG4gICAgaWYgKCF0ZW1wQ29udGV4dCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGVtcENvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG4gICAgaWYgKHRlbXBDb250ZXh0LmNhbnZhcy53aWR0aCAhPT0gY29udGV4dC5jYW52YXMud2lkdGgpIHtcbiAgICAgICAgdGVtcENvbnRleHQuY2FudmFzLndpZHRoID0gY29udGV4dC5jYW52YXMud2lkdGg7XG4gICAgfVxuICAgIGlmICh0ZW1wQ29udGV4dC5jYW52YXMuaGVpZ2h0ICE9PSBjb250ZXh0LmNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgdGVtcENvbnRleHQuY2FudmFzLmhlaWdodCA9IGNvbnRleHQuY2FudmFzLmhlaWdodDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ2FudmFzQ29sb3IoaW1hZ2UsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZXNvdXJjZSA9IFNvdXJjZS5nZXRSZXNvdXJjZShpbWFnZSwgY29udGV4dCk7XG4gICAgaWYgKCFyZXNvdXJjZT8ubG9hZGVkIHx8ICFyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgc3VwcG9ydCwgbWF0cml4IH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IHsgY29udGV4dDJkIH0gPSBzdXBwb3J0O1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG4gICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICBpZiAoaXNEZWZhdWx0Q29sb3JUcmFuc2Zvcm0oY29sb3JUcmFuc2Zvcm0pKSB7XG4gICAgICAgIGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHVwZGF0ZVRlbXBDb250ZXh0KGNvbnRleHQyZCk7XG4gICAgICAgIGNvbnN0IGJvdW5kcyA9IE1hdHJpeC50cmFuc2Zvcm1Cb3VuZHMobWF0cml4LCB7XG4gICAgICAgICAgICB4LCB5LCB3aWR0aCwgaGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKFJlY3RhbmdsZS5pc0VtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0ZW1wQ29udGV4dC5jbGVhclJlY3QoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgICB0ZW1wQ29udGV4dC5zZXRUcmFuc2Zvcm0obWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbiAgICAgICAgdGVtcENvbnRleHQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbiAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gdGVtcENvbnRleHQuZ2V0SW1hZ2VEYXRhKGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgY29uc3Qgcm0gPSBjb2xvclRyYW5zZm9ybS5yZWRNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBnbSA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgYm0gPSBjb2xvclRyYW5zZm9ybS5ibHVlTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgYW0gPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IHJvID0gY29sb3JUcmFuc2Zvcm0ucmVkT2Zmc2V0O1xuICAgICAgICBjb25zdCBnbyA9IGNvbG9yVHJhbnNmb3JtLmdyZWVuT2Zmc2V0O1xuICAgICAgICBjb25zdCBibyA9IGNvbG9yVHJhbnNmb3JtLmJsdWVPZmZzZXQ7XG4gICAgICAgIGNvbnN0IGFvID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFPZmZzZXQ7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gaW1hZ2VEYXRhO1xuICAgICAgICBjb25zdCB7IGxlbmd0aCB9ID0gZGF0YTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7KSB7XG4gICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogcm0gKyBybztcbiAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBnbSArIGdvO1xuICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGJtICsgYm87XG4gICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogYW0gKyBhbztcbiAgICAgICAgfVxuICAgICAgICB0ZW1wQ29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCBib3VuZHMueCwgYm91bmRzLnkpO1xuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgIGNvbnRleHQyZC5kcmF3SW1hZ2UodGVtcENvbnRleHQuY2FudmFzLCBib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCwgYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUNhbnZhc0ltYWdlQ29sb3JFeHRlbnNpb24oc3VwcG9ydCkge1xuICAgIGFwcGx5SW1hZ2VFeHRlbnNpb24oc3VwcG9ydCk7XG4gICAgc3VwcG9ydC5yZW5kZXJIYW5kbGVycy5zZXQoSU1BR0UsIHJlbmRlckNhbnZhc0NvbG9yKTtcbn1cbiIsImltcG9ydCB7IFBpdm90LCBTb3VyY2UsIH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHsgYXBwbHlJbWFnZUV4dGVuc2lvbiwgSU1BR0UgfSBmcm9tICcuL2ltYWdlJztcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDYW52YXMoaW1hZ2UsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZXNvdXJjZSA9IFNvdXJjZS5nZXRSZXNvdXJjZShpbWFnZSwgY29udGV4dCk7XG4gICAgaWYgKCFyZXNvdXJjZT8ubG9hZGVkIHx8ICFyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgc3VwcG9ydCB9ID0gY29udGV4dDtcbiAgICBjb25zdCB7IGNvbnRleHQyZCB9ID0gc3VwcG9ydDtcbiAgICBjb25zdCB7IG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHJlc291cmNlLmltYWdlLCB4LCB5KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUNhbnZhc0ltYWdlRXh0ZW5zaW9uKHN1cHBvcnQpIHtcbiAgICBhcHBseUltYWdlRXh0ZW5zaW9uKHN1cHBvcnQpO1xuICAgIHN1cHBvcnQucmVuZGVySGFuZGxlcnMuc2V0KElNQUdFLCByZW5kZXJDYW52YXMpO1xufVxuIiwiaW1wb3J0IHsgUGl2b3QsIH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IHJlc29sdmVJbWFnZSB9IGZyb20gJ0BlMmQvcmVzb3VyY2VzJztcbmV4cG9ydCBjb25zdCBJTUFHRSA9ICdpbWFnZSc7XG5leHBvcnQgdmFyIEltYWdlO1xuKGZ1bmN0aW9uIChJbWFnZSkge1xuICAgIGZ1bmN0aW9uIGdldEJvdW5kcyhpbWFnZSwgY29udGV4dCkge1xuICAgICAgICBjb25zdCB7IHNyYyB9ID0gaW1hZ2U7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc3VwcG9ydCB9ID0gY29udGV4dDtcbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBzdXBwb3J0LnJlc291cmNlcy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZT8ubG9hZGVkIHx8ICFyZXNvdXJjZT8uaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4LCB5LCB3aWR0aCwgaGVpZ2h0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBJbWFnZS5nZXRCb3VuZHMgPSBnZXRCb3VuZHM7XG59KShJbWFnZSB8fCAoSW1hZ2UgPSB7fSkpO1xuZXhwb3J0IGZ1bmN0aW9uIGhpdFRlc3QoaW1hZ2UsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGxvY2FsIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGJvdW5kcyA9IEltYWdlLmdldEJvdW5kcyhpbWFnZSwgY29udGV4dCk7XG4gICAgcmV0dXJuICEhYm91bmRzICYmIFJlY3RhbmdsZS5jb250YWlucyhib3VuZHMsIGxvY2FsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUltYWdlRXh0ZW5zaW9uKHN1cHBvcnQpIHtcbiAgICBzdXBwb3J0LmhpdFRlc3RIYW5kbGVycy5zZXQoSU1BR0UsIGhpdFRlc3QpO1xuICAgIHN1cHBvcnQucmVzb3VyY2VzLnJlc29sdmVycy5hZGQocmVzb2x2ZUltYWdlKTtcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9pbWFnZS1jYW52YXMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbWFnZS1jYW52YXMtY29sb3InO1xuIiwiaW1wb3J0IHsgRGVidWcgfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUltYWdlKGFzc2V0KSB7XG4gICAgY29uc3QgZXh0ZW5zaW9uID0gYXNzZXQuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICBzd2l0Y2ggKGV4dGVuc2lvbikge1xuICAgICAgICBjYXNlICdwbmcnOlxuICAgICAgICBjYXNlICdqcGcnOlxuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB7XG4gICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gYXNzZXQ7XG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGltYWdlIGxvYWRlZDogJHthc3NldH1gKTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5pbWFnZSA9IGltYWdlO1xuICAgICAgICAgICAgICAgIHJlc291cmNlLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlKSA9PiBEZWJ1Zy53YXJuaW5nKCdpbWFnZSBsb2FkIGVycm9yJywgZSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG4iLCJpbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgUGF0aENvbW1hbmQgfSBmcm9tICcuL3BhdGgnO1xuaW1wb3J0IHsgR3JhcGhpY3NTdHJpbmcgfSBmcm9tICcuL3N0cmluZyc7XG5leHBvcnQgdmFyIFJlY3RhbmdsZURhdGE7XG4oZnVuY3Rpb24gKFJlY3RhbmdsZURhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCB3aWR0aCA9IDAsIGhlaWdodCA9IDAsIH0gPSBkYXRhO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHgsIHkpO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHggKyB3aWR0aCwgeSArIGhlaWdodCk7XG4gICAgfVxuICAgIFJlY3RhbmdsZURhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoUmVjdGFuZ2xlRGF0YSB8fCAoUmVjdGFuZ2xlRGF0YSA9IHt9KSk7XG5leHBvcnQgdmFyIEVsbGlwc2VEYXRhO1xuKGZ1bmN0aW9uIChFbGxpcHNlRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB4ID0gMCwgeSA9IDAsIHJhZGl1cywgcmFkaXVzWCA9IDAsIHJhZGl1c1kgPSAwLCB9ID0gZGF0YTtcbiAgICAgICAgY29uc3QgcnggPSByYWRpdXMgPz8gcmFkaXVzWDtcbiAgICAgICAgY29uc3QgcnkgPSByYWRpdXMgPz8gcmFkaXVzWTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4IC0gcngsIHkgLSByeSk7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCArIHJ4LCB5ICsgcnkpO1xuICAgIH1cbiAgICBFbGxpcHNlRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShFbGxpcHNlRGF0YSB8fCAoRWxsaXBzZURhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBQYXRoRGF0YTtcbihmdW5jdGlvbiAoUGF0aERhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aERhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHBhdGhEYXRhO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBHcmFwaGljc1N0cmluZy5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tYW5kID0gZGF0YVtpXTtcbiAgICAgICAgICAgICAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMoY29tbWFuZCwgYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBQYXRoRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShQYXRoRGF0YSB8fCAoUGF0aERhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBHcmFwaGljc0RhdGE7XG4oZnVuY3Rpb24gKEdyYXBoaWNzRGF0YSkge1xuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBkYXRhO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICAgICAgUmVjdGFuZ2xlRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgICAgICAgICAgIEVsbGlwc2VEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGF0aCc6XG4gICAgICAgICAgICAgICAgUGF0aERhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIEdyYXBoaWNzRGF0YS5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShHcmFwaGljc0RhdGEgfHwgKEdyYXBoaWNzRGF0YSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdAZTJkL2dlb20nO1xuZXhwb3J0IHZhciBQYXRoQ29tbWFuZDtcbihmdW5jdGlvbiAoUGF0aENvbW1hbmQpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aCwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gcGF0aDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdtb3ZlVG8nOlxuICAgICAgICAgICAgY2FzZSAnbGluZVRvJzpcbiAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgbW92ZVRvLnggPz8gMCwgbW92ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjdXJ2ZVRvJzpcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1cnZlVG8uY3ggPz8gMCwgY3VydmVUby5jeSA/PyAwKTtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1cnZlVG8ueCA/PyAwLCBjdXJ2ZVRvLnkgPz8gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjdWJpY0N1cnZlVG8nOlxuICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8uY3ggPz8gMCwgY3ViaWNDdXJ2ZVRvLmN5ID8/IDApO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLnN4ID8/IDAsIGN1YmljQ3VydmVUby5zeSA/PyAwKTtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby54ID8/IDAsIGN1YmljQ3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBQYXRoQ29tbWFuZC5jYWxjdWxhdGVCb3VuZHMgPSBjYWxjdWxhdGVCb3VuZHM7XG59KShQYXRoQ29tbWFuZCB8fCAoUGF0aENvbW1hbmQgPSB7fSkpO1xuIiwiaW1wb3J0IHsgUGF0aENvbW1hbmQsIH0gZnJvbSAnLi9wYXRoJztcbmNvbnN0IFRFU1RfQ09NTUFORCA9IC9bTW1MbEhoVnZDY1NzUXFUdEFhWnpdLztcbmNvbnN0IFRFU1RfU1BBQ0UgPSAvW1xccyxdLztcbmNvbnN0IFRFU1RfTlVNQkVSID0gL1stKy5cXGRdLztcbmV4cG9ydCBjbGFzcyBHcmFwaGljc1N0cmluZ1N0cmVhbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9ICcnO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgICAgICAgdGhpcy5jb21tYW5kID0gbnVsbDtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICB9XG4gICAgc2V0UGF0aChwYXRoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAwO1xuICAgIH1cbiAgICBoYXNEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiA8IHRoaXMucGF0aC5sZW5ndGg7XG4gICAgfVxuICAgIGdldENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmQ7XG4gICAgfVxuICAgIGdldFNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNpemU7XG4gICAgfVxuICAgIGdldEJ1ZmZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyO1xuICAgIH1cbiAgICByZWFkTmV4dCgpIHtcbiAgICAgICAgdGhpcy5yZWFkQ29tbWFuZCgpO1xuICAgICAgICB0aGlzLnJlYWROdW1iZXJzKCk7XG4gICAgfVxuICAgIHJlYWRDb21tYW5kKCkge1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgICAgICB3aGlsZSAodGhpcy5wb3NpdGlvbiA8IHRoaXMucGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSB0aGlzLnBhdGhbdGhpcy5wb3NpdGlvbl07XG4gICAgICAgICAgICBpZiAoVEVTVF9DT01NQU5ELnRlc3QoY29tbWFuZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSBjb21tYW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbisrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlYWROdW1iZXJzKCkge1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgICBsZXQgbnVtYmVyID0gJyc7XG4gICAgICAgIHdoaWxlICh0aGlzLnBvc2l0aW9uIDwgdGhpcy5wYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY2hhciA9IHRoaXMucGF0aFt0aGlzLnBvc2l0aW9uXTtcbiAgICAgICAgICAgIGlmIChURVNUX05VTUJFUi50ZXN0KGNoYXIpKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChURVNUX1NQQUNFLnRlc3QoY2hhcikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlclt0aGlzLnNpemUrK10gPSBwYXJzZUZsb2F0KG51bWJlcik7XG4gICAgICAgICAgICAgICAgbnVtYmVyID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChURVNUX0NPTU1BTkQudGVzdChjaGFyKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbisrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChudW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyW3RoaXMuc2l6ZSsrXSA9IHBhcnNlRmxvYXQobnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBHcmFwaGljc1N0cmluZ1JlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtID0gbmV3IEdyYXBoaWNzU3RyaW5nU3RyZWFtKCk7XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IHsgdHlwZTogJ21vdmVUbycgfTtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFggPSAwO1xuICAgICAgICB0aGlzLmxhc3RZID0gMDtcbiAgICB9XG4gICAgc2V0UGF0aChwYXRoKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtLnNldFBhdGgocGF0aCk7XG4gICAgICAgIHRoaXMubGFzdFggPSAwO1xuICAgICAgICB0aGlzLmxhc3RZID0gMDtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gZmFsc2U7XG4gICAgfVxuICAgIGhhc0RhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmVhbS5oYXNEYXRhKCk7XG4gICAgfVxuICAgIGdldENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRFeGlzdHMgPyB0aGlzLmNvbW1hbmQgOiBudWxsO1xuICAgIH1cbiAgICByZWFkTmV4dCgpIHtcbiAgICAgICAgdGhpcy5zdHJlYW0ucmVhZE5leHQoKTtcbiAgICAgICAgdGhpcy5wYXJzZSgpO1xuICAgIH1cbiAgICBwYXJzZSgpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMuc3RyZWFtLmdldENvbW1hbmQoKTtcbiAgICAgICAgdGhpcy5jb21tYW5kRXhpc3RzID0gISFjb21tYW5kO1xuICAgICAgICBpZiAoIXRoaXMuY29tbWFuZEV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuc3RyZWFtLmdldEJ1ZmZlcigpO1xuICAgICAgICBjb25zdCBbeDAsIHkwLCB4MSwgeTEsIHgyLCB5MixdID0gYnVmZmVyO1xuICAgICAgICBsZXQgY3ggPSAwO1xuICAgICAgICBsZXQgY3kgPSAwO1xuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbW92ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueCA9IHgwO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueSA9IHkwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ21vdmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnggPSB4MCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby55ID0geTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbW92ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBtb3ZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB5MDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0geDAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHkwICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0geDA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHgwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gbGluZVRvLng7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0gdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0geDAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbGluZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IHgwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSB5MDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0geDE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IHkxO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IHgyO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IHkyO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSB4MCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IHkwICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0geDEgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSB5MSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0geDIgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IHkyICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0gY3g7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeSA9IGN5O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3ggPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0geTA7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0geDE7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby55ID0geTE7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IGN4O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSBjeTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0geDAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSB5MCArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby54ID0geDEgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IHkxICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0geDA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSB5MDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0geDE7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IHkxO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IHgwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IHkwICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0geDEgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSB5MSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3VydmVUby54IC0gKGN1cnZlVG8uY3ggLSBjdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1cnZlVG8ueSAtIChjdXJ2ZVRvLmN5IC0gY3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN4ID0gY3g7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSBjeTtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby54ID0geDA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IHkwO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IGN4O1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gY3k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IHgwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0geTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IHJlYWRlciA9IG5ldyBHcmFwaGljc1N0cmluZ1JlYWRlcigpO1xuZXhwb3J0IHZhciBHcmFwaGljc1N0cmluZztcbihmdW5jdGlvbiAoR3JhcGhpY3NTdHJpbmcpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMocGF0aCwgYm91bmRzKSB7XG4gICAgICAgIHJlYWRlci5zZXRQYXRoKHBhdGgpO1xuICAgICAgICB3aGlsZSAocmVhZGVyLmhhc0RhdGEoKSkge1xuICAgICAgICAgICAgcmVhZGVyLnJlYWROZXh0KCk7XG4gICAgICAgICAgICBjb25zdCBjb21tYW5kID0gcmVhZGVyLmdldENvbW1hbmQoKTtcbiAgICAgICAgICAgIGlmIChjb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgUGF0aENvbW1hbmQuY2FsY3VsYXRlQm91bmRzKGNvbW1hbmQsIGJvdW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgR3JhcGhpY3NTdHJpbmcuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoR3JhcGhpY3NTdHJpbmcgfHwgKEdyYXBoaWNzU3RyaW5nID0ge30pKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoaWNzIHtcbiAgICBjb25zdHJ1Y3RvcihzaGFwZSkge1xuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGU7XG4gICAgfVxuICAgIGJlZ2luRmlsbChjb2xvciA9IDAsIGFscGhhID0gMSkge1xuICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAnc29saWQnLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYmVnaW5CaXRtYXBGaWxsKHNyYywgbWF0cml4LCByZXBlYXQgPSB0cnVlLCBzbW9vdGggPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAnYml0bWFwJyxcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHJlcGVhdCxcbiAgICAgICAgICAgIHNtb290aCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYmVnaW5HcmFkaWVudEZpbGwodHlwZSwgY29sb3IsIGFscGhhLCByYXRpbywgbWF0cml4LCBzcHJlYWQgPSAncmVwZWF0JywgaW50ZXJwb2xhdGlvbiA9ICdyZ2InLCBmb2NhbFBvaW50UmF0aW8gPSAwKSB7XG4gICAgICAgIHRoaXMuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICBzcHJlYWQsXG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9uLFxuICAgICAgICAgICAgZm9jYWxQb2ludFJhdGlvLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsaW5lU3R5bGUodGhpY2tuZXNzID0gMCwgY29sb3IgPSAwLCBhbHBoYSA9IDEsIHBpeGVsSGludGluZyA9IGZhbHNlLCBzY2FsZU1vZGUgPSAnbm9uZScsIGNhcHMgPSAncm91bmQnLCBqb2ludHMgPSAncm91bmQnLCBtaXRlckxpbWl0ID0gMykge1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHtcbiAgICAgICAgICAgIHRoaWNrbmVzcyxcbiAgICAgICAgICAgIHBpeGVsSGludGluZyxcbiAgICAgICAgICAgIHNjYWxlTW9kZSxcbiAgICAgICAgICAgIGNhcHMsXG4gICAgICAgICAgICBqb2ludHMsXG4gICAgICAgICAgICBtaXRlckxpbWl0LFxuICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzb2xpZCcsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsaW5lR3JhZGllbnRTdHlsZSh0eXBlLCBjb2xvciwgYWxwaGEsIHJhdGlvLCBtYXRyaXgsIHNwcmVhZCA9ICdyZXBlYXQnLCBpbnRlcnBvbGF0aW9uID0gJ3JnYicsIGZvY2FsUG9pbnRSYXRpbyA9IDApIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0cm9rZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Ryb2tlLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgc3ByZWFkLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGlvbixcbiAgICAgICAgICAgIGZvY2FsUG9pbnRSYXRpbyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGluZUJpdG1hcFN0eWxlKHNyYywgbWF0cml4LCByZXBlYXQgPSB0cnVlLCBzbW9vdGggPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXRoaXMuc3Ryb2tlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHJva2UuZmlsbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdiaXRtYXAnLFxuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgcmVwZWF0LFxuICAgICAgICAgICAgc21vb3RoLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBtb3ZlVG8oeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5iZWdpblBhdGgoKTtcbiAgICAgICAgcGF0aC5wdXNoKHsgdHlwZTogJ21vdmVUbycsIHgsIHkgfSk7XG4gICAgfVxuICAgIGxpbmVUbyh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHsgdHlwZTogJ2xpbmVUbycsIHgsIHkgfSk7XG4gICAgfVxuICAgIGN1cnZlVG8oY3gsIGN5LCB4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdXJ2ZVRvJywgY3gsIGN5LCB4LCB5LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY3ViaWNDdXJ2ZVRvKGN4LCBjeSwgc3gsIHN5LCB4LCB5KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdXJ2ZVRvJywgY3gsIGN5LCBzeCwgc3ksIHgsIHksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkcmF3Um91bmRSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIGVsbGlwc2VXaWR0aCA9IDAsIGVsbGlwc2VIZWlnaHQgPSAwKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICBjb25zdCB3ID0gZWxsaXBzZVdpZHRoO1xuICAgICAgICBjb25zdCBoID0gZWxsaXBzZUhlaWdodDtcbiAgICAgICAgY29uc3QgayA9IDAuNTUyMjg0ODtcbiAgICAgICAgY29uc3Qgb3ggPSAodyAvIDIpICogaztcbiAgICAgICAgY29uc3Qgb3kgPSAoaCAvIDIpICogaztcbiAgICAgICAgY29uc3QgeGUgPSB4ICsgdztcbiAgICAgICAgY29uc3QgeWUgPSB5ICsgaDtcbiAgICAgICAgY29uc3QgeG0gPSB4ICsgdyAvIDI7XG4gICAgICAgIGNvbnN0IHltID0geSArIGggLyAyO1xuICAgICAgICBjb25zdCBkeCA9IHdpZHRoIC0gdztcbiAgICAgICAgY29uc3QgZHkgPSBoZWlnaHQgLSBoO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ21vdmVUbycsXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeTogeW0sXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeCxcbiAgICAgICAgICAgIGN5OiB5bSAtIG95LFxuICAgICAgICAgICAgc3g6IHhtIC0gb3gsXG4gICAgICAgICAgICBzeTogeSxcbiAgICAgICAgICAgIHg6IHhtLFxuICAgICAgICAgICAgeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhtICsgZHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhtICsgb3ggKyBkeCxcbiAgICAgICAgICAgIGN5OiB5LFxuICAgICAgICAgICAgc3g6IHhlICsgZHgsXG4gICAgICAgICAgICBzeTogeW0gLSBveSxcbiAgICAgICAgICAgIHg6IHhlICsgZHgsXG4gICAgICAgICAgICB5OiB5bSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnbGluZVRvJyxcbiAgICAgICAgICAgIHg6IHhlICsgZHgsXG4gICAgICAgICAgICB5OiB5bSArIGR5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhlICsgZHgsXG4gICAgICAgICAgICBjeTogeW0gKyBveSArIGR5LFxuICAgICAgICAgICAgc3g6IHhtICsgb3ggKyBkeCxcbiAgICAgICAgICAgIHN5OiB5ZSArIGR5LFxuICAgICAgICAgICAgeDogeG0gKyBkeCxcbiAgICAgICAgICAgIHk6IHllICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVUbycsXG4gICAgICAgICAgICB4OiB4bSxcbiAgICAgICAgICAgIHk6IHllICsgZHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2N1YmljQ3VydmVUbycsXG4gICAgICAgICAgICBjeDogeG0gLSBveCxcbiAgICAgICAgICAgIGN5OiB5ZSArIGR5LFxuICAgICAgICAgICAgc3g6IHgsXG4gICAgICAgICAgICBzeTogeW0gKyBveSArIGR5LFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHk6IHltICsgZHksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkcmF3UmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ3JlY3RhbmdsZSc7XG4gICAgICAgIGRhdGEueCA9IHg7XG4gICAgICAgIGRhdGEueSA9IHk7XG4gICAgICAgIGRhdGEud2lkdGggPSB3aWR0aDtcbiAgICAgICAgZGF0YS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIGRyYXdDaXJjbGUoeCwgeSwgcmFkaXVzKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS50eXBlID0gJ2VsbGlwc2UnO1xuICAgICAgICBkYXRhLnggPSB4O1xuICAgICAgICBkYXRhLnkgPSB5O1xuICAgICAgICBkYXRhLnJhZGl1cyA9IHJhZGl1cztcbiAgICB9XG4gICAgZHJhd0VsbGlwc2UoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEudHlwZSA9ICdlbGxpcHNlJztcbiAgICAgICAgZGF0YS5yYWRpdXNYID0gd2lkdGggLyAyO1xuICAgICAgICBkYXRhLnJhZGl1c1kgPSBoZWlnaHQgLyAyO1xuICAgICAgICBkYXRhLnggPSB4IC0gZGF0YS5yYWRpdXNYO1xuICAgICAgICBkYXRhLnkgPSB5IC0gZGF0YS5yYWRpdXNZO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2hhcGUuZGF0YTtcbiAgICB9XG4gICAgY3JlYXRlRGF0YSgpIHtcbiAgICAgICAgY29uc3QgeyBzaGFwZSwgZmlsbCwgc3Ryb2tlIH0gPSB0aGlzO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzaGFwZS5kYXRhKSkge1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzaGFwZS5kYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgc2hhcGUuZGF0YSA9IFtzaGFwZS5kYXRhXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNoYXBlLmRhdGEgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBncmFwaGljc0RhdGEgPSB7IHR5cGU6ICdwYXRoJywgZmlsbCwgc3Ryb2tlIH07XG4gICAgICAgIHNoYXBlLmRhdGEucHVzaChncmFwaGljc0RhdGEpO1xuICAgICAgICByZXR1cm4gZ3JhcGhpY3NEYXRhO1xuICAgIH1cbiAgICBiZWdpblBhdGgoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICAgICAgZGF0YS5kYXRhID0gW107XG4gICAgICAgIHJldHVybiBkYXRhLmRhdGE7XG4gICAgfVxuICAgIGdldFBhdGgoKSB7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUgfSA9IHRoaXM7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzaGFwZS5kYXRhKSB8fCAhc2hhcGUuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHNoYXBlLmRhdGFbc2hhcGUuZGF0YS5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEuZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2RhdGEvZGF0YSc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvcGF0aCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvc3RyaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS9zdHlsZSc7XG5leHBvcnQgKiBmcm9tICcuL2dyYXBoaWNzJztcbmV4cG9ydCAqIGZyb20gJy4vc2hhcGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFwZS1jYW52YXMnO1xuIiwiaW1wb3J0IHsgYXBwbHlTaGFwZUV4dGVuc2lvbiwgU0hBUEUgfSBmcm9tICcuL3NoYXBlJztcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTaGFwZShzaGFwZSwgY29udGV4dCkge1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q2FudmFzU2hhcGVFeHRlbnNpb24oc3VwcG9ydCkge1xuICAgIGFwcGx5U2hhcGVFeHRlbnNpb24oc3VwcG9ydCk7XG4gICAgc3VwcG9ydC5yZW5kZXJIYW5kbGVycy5zZXQoU0hBUEUsIHJlbmRlclNoYXBlKTtcbn1cbiIsImltcG9ydCB7IFBpdm90LCB9IGZyb20gJ0BlMmQvZW5naW5lJztcbmltcG9ydCB7IEJvdW5kcywgUmVjdGFuZ2xlIH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IHJlc29sdmVJbWFnZSB9IGZyb20gJ0BlMmQvcmVzb3VyY2VzJztcbmltcG9ydCB7IEdyYXBoaWNzRGF0YSB9IGZyb20gJy4vZGF0YS9kYXRhJztcbmltcG9ydCBHcmFwaGljcyBmcm9tICcuL2dyYXBoaWNzJztcbmV4cG9ydCBjb25zdCBTSEFQRSA9ICdzaGFwZSc7XG5leHBvcnQgdmFyIFNoYXBlO1xuKGZ1bmN0aW9uIChTaGFwZSkge1xuICAgIGZ1bmN0aW9uIGdldEdyYXBoaWNzKHNoYXBlKSB7XG4gICAgICAgIHJldHVybiBuZXcgR3JhcGhpY3Moc2hhcGUpO1xuICAgIH1cbiAgICBTaGFwZS5nZXRHcmFwaGljcyA9IGdldEdyYXBoaWNzO1xuICAgIGZ1bmN0aW9uIGdldEJvdW5kcyhzaGFwZSkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHNoYXBlO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYm91bmRzID0gQm91bmRzLmVtcHR5KCk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBHcmFwaGljc0RhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGFbaV0sIGJvdW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBHcmFwaGljc0RhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCb3VuZHMuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdpZHRoID0gYm91bmRzLm1heFggLSBib3VuZHMubWluWDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gYm91bmRzLm1heFkgLSBib3VuZHMubWluWTtcbiAgICAgICAgY29uc3QgeCA9IGJvdW5kcy5taW5YICsgUGl2b3QuZ2V0WChzaGFwZSwgd2lkdGgpO1xuICAgICAgICBjb25zdCB5ID0gYm91bmRzLm1pblkgKyBQaXZvdC5nZXRZKHNoYXBlLCBoZWlnaHQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeCwgeSwgd2lkdGgsIGhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgU2hhcGUuZ2V0Qm91bmRzID0gZ2V0Qm91bmRzO1xufSkoU2hhcGUgfHwgKFNoYXBlID0ge30pKTtcbmV4cG9ydCBmdW5jdGlvbiBoaXRUZXN0KHNoYXBlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBsb2NhbCB9ID0gY29udGV4dDtcbiAgICBjb25zdCBib3VuZHMgPSBTaGFwZS5nZXRCb3VuZHMoc2hhcGUpO1xuICAgIHJldHVybiAhIWJvdW5kcyAmJiBSZWN0YW5nbGUuY29udGFpbnMoYm91bmRzLCBsb2NhbCk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlTaGFwZUV4dGVuc2lvbihzdXBwb3J0KSB7XG4gICAgc3VwcG9ydC5oaXRUZXN0SGFuZGxlcnMuc2V0KFNIQVBFLCBoaXRUZXN0KTtcbiAgICBzdXBwb3J0LnJlc291cmNlcy5yZXNvbHZlcnMuYWRkKHJlc29sdmVJbWFnZSk7XG59XG4iLCJjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmV4cG9ydCBjb25zdCBFTSA9IDEwMjQ7XG5jb25zdCBmb250cyA9IG5ldyBNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZUZvbnQoZm9udCwgc2l6ZSkge1xuICAgIHJldHVybiBgJHtzaXplfXB4ICR7Zm9udH1gO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1lYXN1cmVUZXh0KGZvbnQsIHNpemUsIHRleHQpIHtcbiAgICBjb250ZXh0LmZvbnQgPSBnZXRTdHlsZUZvbnQoZm9udCwgc2l6ZSk7XG4gICAgcmV0dXJuIGNvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhcldpZHRoKGZvbnQsIGNoYXIpIHtcbiAgICBsZXQgd2lkdGggPSBmb250LndpZHRocy5nZXQoY2hhcik7XG4gICAgaWYgKCF3aWR0aCkge1xuICAgICAgICB3aWR0aCA9IG1lYXN1cmVUZXh0KGZvbnQubmFtZSwgRU0sIGNoYXIpO1xuICAgICAgICBmb250LndpZHRocy5zZXQoY2hhciwgd2lkdGgpO1xuICAgIH1cbiAgICByZXR1cm4gd2lkdGg7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0S2VybmluZyhmb250LCBmaXJzdCwgc2Vjb25kKSB7XG4gICAgY29uc3QgcGFpciA9IGZpcnN0ICsgc2Vjb25kO1xuICAgIGxldCBrZXJuaW5nID0gZm9udC5rZXJuaW5ncy5nZXQocGFpcik7XG4gICAgaWYgKCFrZXJuaW5nKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoU2Vjb25kID0gZ2V0Q2hhcldpZHRoKGZvbnQsIHNlY29uZCk7XG4gICAgICAgIGNvbnN0IHdpZHRoVG90YWwgPSBtZWFzdXJlVGV4dChmb250Lm5hbWUsIEVNLCBmaXJzdCArIHNlY29uZCk7XG4gICAgICAgIGtlcm5pbmcgPSB3aWR0aFRvdGFsIC0gd2lkdGhTZWNvbmQ7XG4gICAgICAgIGZvbnQua2VybmluZ3Muc2V0KHBhaXIsIGtlcm5pbmcpO1xuICAgIH1cbiAgICByZXR1cm4ga2VybmluZztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRBZHZhbmNlKGZvbnQsIHNpemUsIGZpcnN0LCBzZWNvbmQpIHtcbiAgICBjb25zdCBzY2FsZSA9IHNpemUgLyBFTTtcbiAgICBjb25zdCB3aWR0aCA9IGdldENoYXJXaWR0aChmb250LCBmaXJzdCk7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgcmV0dXJuIHdpZHRoICogc2NhbGU7XG4gICAgfVxuICAgIGNvbnN0IGtlcm5pbmcgPSBnZXRLZXJuaW5nKGZvbnQsIGZpcnN0LCBzZWNvbmQpO1xuICAgIHJldHVybiBrZXJuaW5nICogc2NhbGU7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9udChuYW1lKSB7XG4gICAgbGV0IGZvbnQgPSBmb250cy5nZXQobmFtZSk7XG4gICAgaWYgKCFmb250KSB7XG4gICAgICAgIGZvbnQgPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgd2lkdGhzOiBuZXcgTWFwKCksXG4gICAgICAgICAgICBrZXJuaW5nczogbmV3IE1hcCgpLFxuICAgICAgICB9O1xuICAgICAgICBmb250cy5zZXQobmFtZSwgZm9udCk7XG4gICAgfVxuICAgIHJldHVybiBmb250O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldExpbmVXaWR0aChmb250LCBmb3JtYXQsIGxpbmUpIHtcbiAgICBsZXQgd2lkdGggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBmaXJzdCA9IGxpbmUuY2hhckF0KGkpO1xuICAgICAgICBjb25zdCBzZWNvbmQgPSBsaW5lLmNoYXJBdChpICsgMSk7XG4gICAgICAgIGNvbnN0IGFkdmFuY2UgPSBnZXRBZHZhbmNlKGZvbnQsIGZvcm1hdC5zaXplLCBmaXJzdCwgc2Vjb25kKTtcbiAgICAgICAgd2lkdGggKz0gYWR2YW5jZTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdC5sZXR0ZXJTcGFjaW5nICYmIGxpbmUubGVuZ3RoID4gMSkge1xuICAgICAgICB3aWR0aCArPSBmb3JtYXQubGV0dGVyU3BhY2luZyAqIChsaW5lLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgICByZXR1cm4gd2lkdGg7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dFdpZHRoKGZvbnQsIGZvcm1hdCwgbGluZXMpIHtcbiAgICBsZXQgd2lkdGggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICBjb25zdCBsaW5lV2lkdGggPSBnZXRMaW5lV2lkdGgoZm9udCwgZm9ybWF0LCBsaW5lKTtcbiAgICAgICAgaWYgKHdpZHRoIDwgbGluZVdpZHRoKSB7XG4gICAgICAgICAgICB3aWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gd2lkdGg7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dEhlaWdodChmb3JtYXQsIGxpbmVzKSB7XG4gICAgbGV0IGhlaWdodCA9IGZvcm1hdC5zaXplICogbGluZXMubGVuZ3RoO1xuICAgIGlmIChmb3JtYXQubGVhZGluZyAmJiBsaW5lcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGhlaWdodCArPSBmb3JtYXQubGVhZGluZyAqIChsaW5lcy5sZW5ndGggLSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGhlaWdodDtcbn1cbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0VGV4dEZvcm1hdCA9IHtcbiAgICBmb250OiAnYXJpYWwnLFxuICAgIHNpemU6IDE1LFxuICAgIGNvbG9yOiAwLFxuICAgIGFscGhhOiAxLFxuICAgIGJvbGQ6IGZhbHNlLFxuICAgIGl0YWxpYzogZmFsc2UsXG4gICAgdW5kZXJsaW5lOiBmYWxzZSxcbiAgICBsZXR0ZXJTcGFjaW5nOiAwLFxuICAgIGxlYWRpbmc6IDAsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbn07XG5jb25zdCBmb3JtYXQgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWxpZFRleHRGb3JtYXQodGV4dEZvcm1hdCkge1xuICAgIGZvcm1hdC5mb250ID0gdGV4dEZvcm1hdD8uZm9udCA/PyBkZWZhdWx0VGV4dEZvcm1hdC5mb250O1xuICAgIGZvcm1hdC5zaXplID0gdGV4dEZvcm1hdD8uc2l6ZSA/PyBkZWZhdWx0VGV4dEZvcm1hdC5zaXplO1xuICAgIGZvcm1hdC5jb2xvciA9IHRleHRGb3JtYXQ/LmNvbG9yID8/IGRlZmF1bHRUZXh0Rm9ybWF0LmNvbG9yO1xuICAgIGZvcm1hdC5hbHBoYSA9IHRleHRGb3JtYXQ/LmFscGhhID8/IGRlZmF1bHRUZXh0Rm9ybWF0LmFscGhhO1xuICAgIGZvcm1hdC5ib2xkID0gdGV4dEZvcm1hdD8uYm9sZCA/PyBkZWZhdWx0VGV4dEZvcm1hdC5ib2xkO1xuICAgIGZvcm1hdC5pdGFsaWMgPSB0ZXh0Rm9ybWF0Py5pdGFsaWMgPz8gZGVmYXVsdFRleHRGb3JtYXQuaXRhbGljO1xuICAgIGZvcm1hdC51bmRlcmxpbmUgPSB0ZXh0Rm9ybWF0Py51bmRlcmxpbmUgPz8gZGVmYXVsdFRleHRGb3JtYXQudW5kZXJsaW5lO1xuICAgIGZvcm1hdC5sZXR0ZXJTcGFjaW5nID0gdGV4dEZvcm1hdD8ubGV0dGVyU3BhY2luZyA/PyBkZWZhdWx0VGV4dEZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgIGZvcm1hdC5sZWFkaW5nID0gdGV4dEZvcm1hdD8ubGVhZGluZyA/PyBkZWZhdWx0VGV4dEZvcm1hdC5sZWFkaW5nO1xuICAgIGZvcm1hdC5hbGlnbiA9IHRleHRGb3JtYXQ/LmFsaWduID8/IGRlZmF1bHRUZXh0Rm9ybWF0LmFsaWduO1xuICAgIGZvcm1hdC52ZXJ0aWNhbEFsaWduID0gdGV4dEZvcm1hdD8udmVydGljYWxBbGlnbiA/PyBkZWZhdWx0VGV4dEZvcm1hdC52ZXJ0aWNhbEFsaWduO1xuICAgIHJldHVybiBmb3JtYXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxpbmdWYWx1ZShhbGlnbikge1xuICAgIHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgICAgY2FzZSAnbGVmdCc6IHJldHVybiAwO1xuICAgICAgICBjYXNlICdjZW50ZXInOiByZXR1cm4gMC41O1xuICAgICAgICBjYXNlICdyaWdodCc6IHJldHVybiAxO1xuICAgICAgICBkZWZhdWx0OiByZXR1cm4gMDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VmVydGljYWxBbGluZ1ZhbHVlKGFsaWduKSB7XG4gICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgICBjYXNlICd0b3AnOiByZXR1cm4gMDtcbiAgICAgICAgY2FzZSAnbWlkZGxlJzogcmV0dXJuIDAuNTtcbiAgICAgICAgY2FzZSAnYm90dG9tJzogcmV0dXJuIDE7XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAwO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vdGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL2Zvcm1hdCc7XG5leHBvcnQgKiBmcm9tICcuL2ZvbnQnO1xuZXhwb3J0ICogZnJvbSAnLi90ZXh0LWNhbnZhcyc7XG4iLCJpbXBvcnQgeyBQaXZvdCB9IGZyb20gJ0BlMmQvZW5naW5lJztcbmltcG9ydCB7IGNyZWF0ZUNvbG9yUGF0dGVybiB9IGZyb20gJ0BlMmQvY2FudmFzLXN1cHBvcnQnO1xuaW1wb3J0IHsgZ2V0QWR2YW5jZSwgZ2V0Rm9udCwgZ2V0TGluZVdpZHRoLCBnZXRTdHlsZUZvbnQsIGdldFRleHRIZWlnaHQsIGdldFRleHRXaWR0aCwgfSBmcm9tICcuL2ZvbnQnO1xuaW1wb3J0IHsgYXBwbHlUZXh0RXh0ZW5zaW9uLCBURVhUIH0gZnJvbSAnLi90ZXh0JztcbmltcG9ydCB7IGdldEFsaW5nVmFsdWUsIGdldFZlcnRpY2FsQWxpbmdWYWx1ZSwgZ2V0VmFsaWRUZXh0Rm9ybWF0IH0gZnJvbSAnLi9mb3JtYXQnO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNhbnZhc1RleHQoY29tcG9uZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSBjb21wb25lbnQ7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBtYXRyaXgsIGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuICAgIGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0ZXh0Rm9ybWF0LCBib3JkZXIsIGJhY2tncm91bmQsIH0gPSBjb21wb25lbnQ7XG4gICAgY29uc3QgZm9ybWF0ID0gZ2V0VmFsaWRUZXh0Rm9ybWF0KHRleHRGb3JtYXQpO1xuICAgIGNvbnN0IGZvcm1hdFNpemUgPSBmb3JtYXQuc2l6ZTtcbiAgICBjb25zdCBmb3JtYXRMZXR0ZXJTcGFjaW5nID0gZm9ybWF0LmxldHRlclNwYWNpbmc7XG4gICAgY29uc3QgZm9ybWF0TGVhZGluZyA9IGZvcm1hdC5sZWFkaW5nO1xuICAgIGNvbnN0IGZvbnQgPSBnZXRGb250KGZvcm1hdC5mb250KTtcbiAgICBjb25zdCB7IHN1cHBvcnQgfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgeyBjb250ZXh0MmQgfSA9IHN1cHBvcnQ7XG4gICAgY29uc3QgdGV4dFdpZHRoID0gZ2V0VGV4dFdpZHRoKGZvbnQsIGZvcm1hdCwgbGluZXMpO1xuICAgIGNvbnN0IHRleHRIZWlnaHQgPSBnZXRUZXh0SGVpZ2h0KGZvcm1hdCwgbGluZXMpO1xuICAgIGNvbnN0IHJlYWxXaWR0aCA9IHdpZHRoID8/IHRleHRXaWR0aDtcbiAgICBjb25zdCByZWFsSGVpZ2h0ID0gaGVpZ2h0ID8/IHRleHRIZWlnaHQ7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IFBpdm90LmdldFgoY29tcG9uZW50LCByZWFsV2lkdGgpO1xuICAgIGNvbnN0IG9mZnNldFkgPSBQaXZvdC5nZXRZKGNvbXBvbmVudCwgcmVhbEhlaWdodCk7XG4gICAgbGV0IHkgPSAwO1xuICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgYWxpZ25WZXJ0aWNhbFZhbHVlID0gZ2V0VmVydGljYWxBbGluZ1ZhbHVlKGZvcm1hdC52ZXJ0aWNhbEFsaWduKTtcbiAgICAgICAgeSA9IChoZWlnaHQgLSB0ZXh0SGVpZ2h0KSAqIGFsaWduVmVydGljYWxWYWx1ZTtcbiAgICAgICAgaWYgKHkgPCAwKSB7XG4gICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgY29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcbiAgICBpZiAoYmFja2dyb3VuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICcnO1xuICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gY3JlYXRlQ29sb3JQYXR0ZXJuKGJhY2tncm91bmQsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgY29udGV4dDJkLmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0MmQucmVjdChvZmZzZXRYLCBvZmZzZXRZLCByZWFsV2lkdGgsIHJlYWxIZWlnaHQpO1xuICAgICAgICBjb250ZXh0MmQuZmlsbCgpO1xuICAgIH1cbiAgICBpZiAoYm9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gY3JlYXRlQ29sb3JQYXR0ZXJuKGJvcmRlciwgMSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgICAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gJyc7XG4gICAgICAgIGNvbnRleHQyZC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29udGV4dDJkLnJlY3Qob2Zmc2V0WCwgb2Zmc2V0WSwgcmVhbFdpZHRoLCByZWFsSGVpZ2h0KTtcbiAgICAgICAgY29udGV4dDJkLnN0cm9rZSgpO1xuICAgIH1cbiAgICBjb250ZXh0MmQuZm9udCA9IGdldFN0eWxlRm9udChmb3JtYXQuZm9udCwgZm9ybWF0U2l6ZSk7XG4gICAgY29udGV4dDJkLnRleHRCYXNlbGluZSA9ICdhbHBoYWJldGljJztcbiAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnJztcbiAgICBjb250ZXh0MmQuZmlsbFN0eWxlID0gY3JlYXRlQ29sb3JQYXR0ZXJuKGZvcm1hdC5jb2xvciwgZm9ybWF0LmFscGhhLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgeSArPSBvZmZzZXRZO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICBjb25zdCBsaW5lV2lkdGggPSBnZXRMaW5lV2lkdGgoZm9udCwgZm9ybWF0LCBsaW5lKTtcbiAgICAgICAgY29uc3QgYWxpZ25WYWx1ZSA9IGdldEFsaW5nVmFsdWUoZm9ybWF0LmFsaWduKTtcbiAgICAgICAgbGV0IHggPSAocmVhbFdpZHRoIC0gbGluZVdpZHRoKSAqIGFsaWduVmFsdWU7XG4gICAgICAgIGlmICh4IDwgMCkge1xuICAgICAgICAgICAgeCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgeCArPSBvZmZzZXRYO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpbmUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gbGluZS5jaGFyQXQoaik7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmQgPSBsaW5lLmNoYXJBdChqICsgMSk7XG4gICAgICAgICAgICBjb25zdCBhZHZhbmNlID0gZ2V0QWR2YW5jZShmb250LCBmb3JtYXRTaXplLCBmaXJzdCwgc2Vjb25kKTtcbiAgICAgICAgICAgIGNvbnRleHQyZC5maWxsVGV4dChmaXJzdCwgeCwgeSArIGZvcm1hdFNpemUpO1xuICAgICAgICAgICAgeCArPSBhZHZhbmNlICsgZm9ybWF0TGV0dGVyU3BhY2luZztcbiAgICAgICAgfVxuICAgICAgICB5ICs9IGZvcm1hdFNpemUgKyBmb3JtYXRMZWFkaW5nO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUNhbnZhc1RleHRFeHRlbnNpb24oc3VwcG9ydCkge1xuICAgIGFwcGx5VGV4dEV4dGVuc2lvbihzdXBwb3J0KTtcbiAgICBzdXBwb3J0LnJlbmRlckhhbmRsZXJzLnNldChURVhULCByZW5kZXJDYW52YXNUZXh0KTtcbn1cbiIsImltcG9ydCB7IFBpdm90LCB9IGZyb20gJ0BlMmQvZW5naW5lJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBnZXRWYWxpZFRleHRGb3JtYXQgfSBmcm9tICcuL2Zvcm1hdCc7XG5pbXBvcnQgeyBnZXRGb250LCBnZXRUZXh0V2lkdGgsIGdldFRleHRIZWlnaHQgfSBmcm9tICcuL2ZvbnQnO1xuZXhwb3J0IGNvbnN0IFRFWFQgPSAndGV4dCc7XG5leHBvcnQgdmFyIFRleHQ7XG4oZnVuY3Rpb24gKFRleHQpIHtcbiAgICBmdW5jdGlvbiBnZXRCb3VuZHMoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gY29tcG9uZW50O1xuICAgICAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgbGV0IHsgd2lkdGgsIGhlaWdodCB9ID0gY29tcG9uZW50O1xuICAgICAgICBjb25zdCB7IHRleHRGb3JtYXQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgZm9ybWF0ID0gZ2V0VmFsaWRUZXh0Rm9ybWF0KHRleHRGb3JtYXQpO1xuICAgICAgICBpZiAoIXdpZHRoKSB7XG4gICAgICAgICAgICBjb25zdCBmb250ID0gZ2V0Rm9udChmb3JtYXQuZm9udCk7XG4gICAgICAgICAgICB3aWR0aCA9IGdldFRleHRXaWR0aChmb250LCBmb3JtYXQsIGxpbmVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhlaWdodCkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gZ2V0VGV4dEhlaWdodChmb3JtYXQsIGxpbmVzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB4ID0gUGl2b3QuZ2V0WChjb21wb25lbnQsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IFBpdm90LmdldFkoY29tcG9uZW50LCBoZWlnaHQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeCwgeSwgd2lkdGgsIGhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgVGV4dC5nZXRCb3VuZHMgPSBnZXRCb3VuZHM7XG59KShUZXh0IHx8IChUZXh0ID0ge30pKTtcbmV4cG9ydCBmdW5jdGlvbiBoaXRUZXN0KHRleHQsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGxvY2FsIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGJvdW5kcyA9IFRleHQuZ2V0Qm91bmRzKHRleHQpO1xuICAgIHJldHVybiAhIWJvdW5kcyAmJiBSZWN0YW5nbGUuY29udGFpbnMoYm91bmRzLCBsb2NhbCk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlUZXh0RXh0ZW5zaW9uKHN1cHBvcnQpIHtcbiAgICBzdXBwb3J0LmhpdFRlc3RIYW5kbGVycy5zZXQoVEVYVCwgaGl0VGVzdCk7XG59XG4iLCJleHBvcnQgY29uc3QgTElORUFSID0gJ2xpbmVhcic7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDID0gJ3F1YWRyYXRpYyc7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDX0lOID0gJ3F1YWRyYXRpY2luJztcbmV4cG9ydCBjb25zdCBRVUFEUkFUSUNfT1VUID0gJ3F1YWRyYXRpY291dCc7XG5leHBvcnQgY29uc3QgQ1VCSUMgPSAnY3ViaWMnO1xuZXhwb3J0IGNvbnN0IENVQklDX0lOID0gJ2N1YmljaW4nO1xuZXhwb3J0IGNvbnN0IENVQklDX09VVCA9ICdjdWJpY291dCc7XG5leHBvcnQgY29uc3QgUVVBUlRJQyA9ICdxdWFydGljJztcbmV4cG9ydCBjb25zdCBRVUFSVElDX0lOID0gJ3F1YXJ0aWNpbic7XG5leHBvcnQgY29uc3QgUVVBUlRJQ19PVVQgPSAncXVhcnRpY291dCc7XG5leHBvcnQgY29uc3QgUVVJTlRJQyA9ICdxdWludGljJztcbmV4cG9ydCBjb25zdCBRVUlOVElDX0lOID0gJ3F1aW50aWNpbic7XG5leHBvcnQgY29uc3QgUVVJTlRJQ19PVVQgPSAncXVpbnRpY291dCc7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTCA9ICdxdWludGljJztcbmV4cG9ydCBjb25zdCBTSU5VU09JREFMX0lOID0gJ3F1aW50aWNpbic7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTF9PVVQgPSAncXVpbnRpY291dCc7XG5leHBvcnQgY29uc3QgRVhQT05FTlRJQUwgPSAnZXhwb25lbnRpYWwnO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMX0lOID0gJ2V4cG9uZW50aWFsaW4nO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMX09VVCA9ICdleHBvbmVudGlhbG91dCc7XG5leHBvcnQgY29uc3QgQ0lSQ1VMQVIgPSAnY2lyY3VsYXInO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSX0lOID0gJ2NpcmN1bGFyaW4nO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSX09VVCA9ICdjaXJjdWxhcm91dCc7XG5leHBvcnQgY29uc3QgRUxBU1RJQyA9ICdlbGFzdGljJztcbmV4cG9ydCBjb25zdCBFTEFTVElDX0lOID0gJ2VsYXN0aWNpbic7XG5leHBvcnQgY29uc3QgRUxBU1RJQ19PVVQgPSAnZWxhc3RpY291dCc7XG5leHBvcnQgY29uc3QgQkFDSyA9ICdiYWNrJztcbmV4cG9ydCBjb25zdCBCQUNLX0lOID0gJ2JhY2tpbic7XG5leHBvcnQgY29uc3QgQkFDS19PVVQgPSAnYmFja291dCc7XG5leHBvcnQgY29uc3QgQk9VTkNFID0gJ2JvdW5jZSc7XG5leHBvcnQgY29uc3QgQk9VTkNFX0lOID0gJ2JvdW5jZWluJztcbmV4cG9ydCBjb25zdCBCT1VOQ0VfT1VUID0gJ2JvdW5jZW91dCc7XG5leHBvcnQgY29uc3QgZWFzaW5nID0ge1xuICAgIFtMSU5FQVJdOiAodmFsdWUpID0+IHZhbHVlLFxuICAgIFtRVUFEUkFUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMC41ICogKC0tdmFsdWUgKiAodmFsdWUgLSAyKSAtIDEpO1xuICAgIH0sXG4gICAgW1FVQURSQVRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUFEUkFUSUNfT1VUXTogKHZhbHVlKSA9PiAodmFsdWUgKiAoMiAtIHZhbHVlKSksXG4gICAgW0NVQklDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiB2YWx1ZSArIDIpO1xuICAgIH0sXG4gICAgW0NVQklDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbQ1VCSUNfT1VUXTogKHZhbHVlKSA9PiAoLS12YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAxKSxcbiAgICBbUVVBUlRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAtIDIpO1xuICAgIH0sXG4gICAgW1FVQVJUSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW1FVQVJUSUNfT1VUXTogKHZhbHVlKSA9PiAoMSAtIC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUlOVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMik7XG4gICAgfSxcbiAgICBbUVVJTlRJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUlOVElDX09VVF06ICh2YWx1ZSkgPT4gKC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDEpLFxuICAgIFtTSU5VU09JREFMXTogKHZhbHVlKSA9PiAoMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogdmFsdWUpKSksXG4gICAgW1NJTlVTT0lEQUxfSU5dOiAodmFsdWUpID0+ICgxIC0gTWF0aC5jb3MoKHZhbHVlICogTWF0aC5QSSkgLyAyKSksXG4gICAgW1NJTlVTT0lEQUxfT1VUXTogKHZhbHVlKSA9PiAoTWF0aC5zaW4oKHZhbHVlICogTWF0aC5QSSkgLyAyKSksXG4gICAgW0VYUE9ORU5USUFMXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDEwMjQsIHZhbHVlIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogKHZhbHVlIC0gMSkpICsgMik7XG4gICAgfSxcbiAgICBbRVhQT05FTlRJQUxfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gMCA/IDAgOiBNYXRoLnBvdygxMDI0LCB2YWx1ZSAtIDEpKSxcbiAgICBbRVhQT05FTlRJQUxfT1VUXTogKHZhbHVlKSA9PiAodmFsdWUgPT09IDEgPyAxIDogMSAtIE1hdGgucG93KDIsIC0xMCAqIHZhbHVlKSksXG4gICAgW0NJUkNVTEFSXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHZhbHVlICogdmFsdWUpIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh2YWx1ZSAtPSAyKSAqIHZhbHVlKSArIDEpO1xuICAgIH0sXG4gICAgW0NJUkNVTEFSX0lOXTogKHZhbHVlKSA9PiAoMSAtIE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkpLFxuICAgIFtDSVJDVUxBUl9PVVRdOiAodmFsdWUpID0+IE1hdGguc3FydCgxIC0gLS12YWx1ZSAqIHZhbHVlKSxcbiAgICBbRUxBU1RJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgKj0gMjtcbiAgICAgICAgaWYgKHZhbHVlIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiBNYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDIsIC0xMCAqICh2YWx1ZSAtIDEpKSAqIE1hdGguc2luKCh2YWx1ZSAtIDEuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuICAgIH0sXG4gICAgW0VMQVNUSUNfSU5dOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuICAgIH0sXG4gICAgW0VMQVNUSUNfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5wb3coMiwgLTEwICogdmFsdWUpICogTWF0aC5zaW4oKHZhbHVlIC0gMC4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG4gICAgfSxcbiAgICBbQkFDS106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1OCAqIDEuNTI1O1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqICh2YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSAtIHMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSArIHMpICsgMik7XG4gICAgfSxcbiAgICBbQkFDS19JTl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICAgICAgcmV0dXJuIHZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlIC0gcyk7XG4gICAgfSxcbiAgICBbQkFDS19PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTg7XG4gICAgICAgIHJldHVybiAtLXZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlICsgcykgKyAxO1xuICAgIH0sXG4gICAgW0JPVU5DRV06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPCAwLjUpIHtcbiAgICAgICAgICAgIHJldHVybiBlYXNpbmdbQk9VTkNFX0lOXSh2YWx1ZSAqIDIpICogMC41O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlYXNpbmdbQk9VTkNFX09VVF0odmFsdWUgKiAyIC0gMSkgKiAwLjUgKyAwLjU7XG4gICAgfSxcbiAgICBbQk9VTkNFX0lOXTogKHZhbHVlKSA9PiAoMSAtIGVhc2luZ1tCT1VOQ0VfT1VUXSgxIC0gdmFsdWUpKSxcbiAgICBbQk9VTkNFX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPCAxIC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgMiAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMS41IC8gMi43NSkgKiB2YWx1ZSArIDAuNzU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgMi41IC8gMi43NSkge1xuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAyLjI1IC8gMi43NSkgKiB2YWx1ZSArIDAuOTM3NTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDIuNjI1IC8gMi43NSkgKiB2YWx1ZSArIDAuOTg0Mzc1O1xuICAgIH0sXG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi90d2Vlbic7XG5leHBvcnQgKiBmcm9tICcuL2Vhc2luZyc7XG4iLCJpbXBvcnQgeyBlYXNpbmcsIExJTkVBUiB9IGZyb20gJy4vZWFzaW5nJztcbmV4cG9ydCBjb25zdCBUV0VFTiA9ICd0d2Vlbic7XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVHdlZW0oY29tcG9uZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0d2VlbiB9ID0gY29tcG9uZW50O1xuICAgIGNvbnN0IHsgcGhhc2VzIH0gPSB0d2VlbjtcbiAgICBpZiAoIXBoYXNlcz8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQW5pbWF0aW9uIHBhcnRzIG5vdCBmb3VuZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0d2Vlbi50aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdHdlZW4udGltZSA9IDA7XG4gICAgfVxuICAgIHR3ZWVuLnRpbWUgKz0gY29udGV4dC50aW1lO1xuICAgIGNvbnN0IHsgdGltZSB9ID0gdHdlZW47XG4gICAgbGV0IG9mZnNldCA9IDA7XG4gICAgcGhhc2VzLmZvckVhY2goKHBoYXNlKSA9PiB7XG4gICAgICAgIGlmICghcGhhc2UudGltZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbmltYXRpb24gdGltZSBub3Qgc2V0Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBoYXNlLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSBwaGFzZS5vZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWFzaW5nTmFtZSA9IHBoYXNlPy5lYXNpbmc/LnRvTG93ZXJDYXNlKCkgPz8gTElORUFSO1xuICAgICAgICBjb25zdCBlYXNpbmdNZXRob2QgPSBlYXNpbmdbZWFzaW5nTmFtZV07XG4gICAgICAgIGlmICghZWFzaW5nTWV0aG9kKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gZWFzaW5nIHR5cGU6ICR7ZWFzaW5nfWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gKHRpbWUgLSBvZmZzZXQpIC8gcGhhc2UudGltZTtcbiAgICAgICAgb2Zmc2V0ICs9IHBoYXNlLnRpbWU7XG4gICAgICAgIGlmICh2YWx1ZSA8IDAgfHwgdmFsdWUgPiAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWFzaW5nVmFsdWUgPSBlYXNpbmdNZXRob2QodmFsdWUpO1xuICAgICAgICBpZiAoIXBoYXNlLnRvKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuaW1hdGlvbiBcInRvXCIgc3RhdGUgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwaGFzZS5mcm9tKSB7XG4gICAgICAgICAgICBwaGFzZS5mcm9tID0ge307XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB0bywgZnJvbSB9ID0gcGhhc2U7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gY29tcG9uZW50O1xuICAgICAgICBPYmplY3Qua2V5cyh0bykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoZnJvbVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBmcm9tW2tleV0gPSBzdGF0ZVtrZXldID8/IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmcm9tVmFsdWUgPSBmcm9tW2tleV07XG4gICAgICAgICAgICBjb25zdCB0b1ZhbHVlID0gdG9ba2V5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZnJvbVZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdG9WYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZVZhbHVlID0gZnJvbVZhbHVlICsgZWFzaW5nVmFsdWUgKiAodG9WYWx1ZSAtIGZyb21WYWx1ZSk7XG4gICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IHN0YXRlVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmICh0d2Vlbi5sb29wICYmIHR3ZWVuLnRpbWUgPiBvZmZzZXQpIHtcbiAgICAgICAgdHdlZW4udGltZSA9IDA7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5VHdlZW5FeHRlbnNpb24oc3VwcG9ydCkge1xuICAgIHN1cHBvcnQucHJvcGVydHlIYW5kbGVycy5zZXQoVFdFRU4sIHVwZGF0ZVR3ZWVtKTtcbn1cbiIsImltcG9ydCB7IEFCSUxJVFlfV09MRiB9IGZyb20gJy4vYXNzZXRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjdXJzaXZlKCkge1xuXHRjb25zdCBjb250YWluZXIgPSB7XG5cdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0Y2hpbGQ6IHtcblx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0eDogMzAsXG5cdFx0XHR5OiAzMCxcblx0XHRcdHNjYWxlWDogMC45LFxuXHRcdFx0c2NhbGVZOiAwLjksXG5cdFx0XHRyb3RhdGlvbjogMC4yLFxuXHRcdFx0YWxwaGE6IDAuOSxcblx0XHRcdGNoaWxkcmVuOiBbe1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEFCSUxJVFlfV09MRixcblx0XHRcdFx0c2NhbGU6IDAuMyxcblx0XHRcdH1dLFxuXHRcdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHRcdHRoaXMucm90YXRpb24gKz0gdGltZSAqIDAuMDU7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cblx0Y29udGFpbmVyLmNoaWxkLmNoaWxkcmVuLnB1c2goY29udGFpbmVyIGFzIG5ldmVyKTtcblxuXHRyZXR1cm4gY29udGFpbmVyO1xufVxuIiwiY29uc3QgSU1BR0VfQVNTRVRTID0gJ2Fzc2V0cy8nO1xuXG5leHBvcnQgY29uc3QgQU5JTUFMSVNUID0gJ2lkOmFuaW1hbGlzdCc7XG5leHBvcnQgY29uc3QgQVJDSEVSID0gJ2lkOmFyY2hlcic7XG5cbmV4cG9ydCBjb25zdCBBTklNQUxJU1RfSU1BR0UgPSBgJHtJTUFHRV9BU1NFVFN9QW5pbWFsaXN0Rm94MV9pbWFnZS5wbmdgO1xuZXhwb3J0IGNvbnN0IEFSQ0hFUl9JTUFHRSA9IGAke0lNQUdFX0FTU0VUU31BcmNoZXIyX2h1bnRlcl9pbWFnZS5wbmdgO1xuXG5leHBvcnQgY29uc3QgQUJJTElUWV9GT1ggPSBgJHtJTUFHRV9BU1NFVFN9QW5pbWFsaXN0QWJpbGl0eV9Gb3gucG5nYDtcbmV4cG9ydCBjb25zdCBBQklMSVRZX1dPTEYgPSBgJHtJTUFHRV9BU1NFVFN9QW5pbWFsaXN0QWJpbGl0eV9Xb2xmLnBuZ2A7XG5cbmV4cG9ydCBjb25zdCBCQUNLR1JPVU5EID0gYCR7SU1BR0VfQVNTRVRTfWp1bmdsZV9iYWNrZ3JvdW5kLmpwZ2A7XG5cbmV4cG9ydCBjb25zdCBURVNUX0NBTlZBUyA9ICd0ZXN0LmNhbnZhcyc7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBDYW52YXNTdXBwb3J0IH0gZnJvbSAnQGUyZC9jYW52YXMtc3VwcG9ydCc7XG5pbXBvcnQgeyBQaXZvdCwgUmVuZGVyQ29udGV4dCwgU3VwcG9ydCB9IGZyb20gJ0BlMmQvZW5naW5lJztcbmltcG9ydCB7XG5cdGFwcGx5SW1hZ2VFeHRlbnNpb24sIElNQUdFLCBJbWFnZSxcbn0gZnJvbSAnQGUyZC9pbWFnZSc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGUyZC9yZXNvdXJjZXMnO1xuXG5mdW5jdGlvbiByZW5kZXJJbWFnZShpbWFnZTogSW1hZ2UsIGNvbnRleHQ6IFJlbmRlckNvbnRleHQpOiB2b2lkIHtcblx0aWYgKCFpbWFnZS5zcmMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7IG1hdHJpeCwgY29sb3JUcmFuc2Zvcm0gfSA9IGNvbnRleHQ7XG5cblx0aWYgKGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllciA8PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgeyBzdXBwb3J0IH0gPSBjb250ZXh0O1xuXG5cdGNvbnN0IHJlc291cmNlID0gc3VwcG9ydC5yZXNvdXJjZXMuZ2V0KGltYWdlLnNyYykgYXMgSW1hZ2VSZXNvdXJjZSB8IG51bGw7XG5cblx0aWYgKCFyZXNvdXJjZT8ubG9hZGVkIHx8ICFyZXNvdXJjZT8uaW1hZ2UpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7IGNvbnRleHQyZCB9ID0gc3VwcG9ydCBhcyBDYW52YXNTdXBwb3J0O1xuXG5cdGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oXG5cdFx0bWF0cml4LmEsXG5cdFx0bWF0cml4LmIsXG5cdFx0bWF0cml4LmMsXG5cdFx0bWF0cml4LmQsXG5cdFx0bWF0cml4LnR4LFxuXHRcdG1hdHJpeC50eSxcblx0KTtcblxuXHRjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuXHRjb25zdCB4ID0gUGl2b3QuZ2V0WChpbWFnZSwgd2lkdGgpO1xuXHRjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcblxuXHRjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuXHRjb250ZXh0MmQuZmlsbFN0eWxlID0gJyc7XG5cdGNvbnRleHQyZC5zdHJva2VTdHlsZSA9ICdncmF5Jztcblx0Y29udGV4dDJkLnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUN1c3RvbUltYWdlRXh0ZW5zaW9uKHN1cHBvcnQ6IFN1cHBvcnQpIHtcblx0YXBwbHlJbWFnZUV4dGVuc2lvbihzdXBwb3J0KTtcblx0c3VwcG9ydC5yZW5kZXJIYW5kbGVycy5zZXQoSU1BR0UsIHJlbmRlckltYWdlKTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCB7IERlYnVnIH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSwgcmVzb2x2ZUltYWdlIH0gZnJvbSAnQGUyZC9yZXNvdXJjZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21SZXNvdXJjZU1hbmFnZXIge1xuXHRyZWFkb25seSBhbGlhc2VzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblx0cmVhZG9ubHkgcmVzb3VyY2VzID0gbmV3IE1hcDxzdHJpbmcsIEltYWdlUmVzb3VyY2U+KCk7XG5cblx0cmVzb2x2ZSA9IChhc3NldDogc3RyaW5nKTogSW1hZ2VSZXNvdXJjZSB8IG51bGwgPT4ge1xuXHRcdGlmIChhc3NldC5pbmRleE9mKCdpZDonKSA9PT0gMCkge1xuXHRcdFx0Y29uc3QgaWQgPSBhc3NldC5zbGljZSgzKTtcblx0XHRcdGxldCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VzLmdldChpZCkgYXMgSW1hZ2VSZXNvdXJjZTtcblx0XHRcdGlmICghcmVzb3VyY2UpIHtcblx0XHRcdFx0Y29uc3QgdXJsID0gdGhpcy5hbGlhc2VzLmdldChpZCk7XG5cdFx0XHRcdGlmICh1cmwpIHtcblx0XHRcdFx0XHRyZXNvdXJjZSA9IHJlc29sdmVJbWFnZSh1cmwpIGFzIEltYWdlUmVzb3VyY2U7XG5cdFx0XHRcdFx0dGhpcy5yZXNvdXJjZXMuc2V0KGlkLCByZXNvdXJjZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0RGVidWcud2FybmluZyhgUmVzb3VyY2Ugd2l0aCBpZDogJHthc3NldH0gbm90IGZvdW5kYCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZXNvdXJjZTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cbiIsImltcG9ydCB7IENhbnZhc1N1cHBvcnQgfSBmcm9tICdAZTJkL2NhbnZhcy1zdXBwb3J0JztcbmltcG9ydCB7IGFwcGx5Q2FudmFzVGV4dEV4dGVuc2lvbiB9IGZyb20gJ0BlMmQvdGV4dCc7XG5pbXBvcnQgeyBhcHBseUN1c3RvbUltYWdlRXh0ZW5zaW9uIH0gZnJvbSAnLi9pbWFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVN1cHBvcnQgZXh0ZW5kcyBDYW52YXNTdXBwb3J0IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRhcHBseUNhbnZhc1RleHRFeHRlbnNpb24odGhpcyk7XG5cdFx0YXBwbHlDdXN0b21JbWFnZUV4dGVuc2lvbih0aGlzKTtcblx0fVxuXG5cdGNsZWFyKCkge1xuXHRcdGNvbnN0IHsgY29udGV4dDJkIH0gPSB0aGlzO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnYmxhY2snO1xuXHRcdGNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcblx0XHRjb250ZXh0MmQuZmlsbFJlY3QoMCwgMCwgY29udGV4dDJkLmNhbnZhcy53aWR0aCwgY29udGV4dDJkLmNhbnZhcy5oZWlnaHQpO1xuXHRcdGNvbnRleHQyZC5maWxsU3R5bGUgPSAnJztcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZnBzKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHR0ZXh0OiAnZnBzJyxcblx0XHRmcmFtZXM6IDAsXG5cdFx0dGltZTogMCxcblx0XHR0ZXh0Rm9ybWF0OiB7XG5cdFx0XHRzaXplOiAzMCxcblx0XHRcdGNvbG9yOiAweGZmZmZmZixcblx0XHRcdGFsaWduOiAnY2VudGVyJyxcblx0XHR9LFxuXHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0dGhpcy50aW1lICs9IHRpbWU7XG5cdFx0XHR0aGlzLmZyYW1lcysrO1xuXHRcdFx0aWYgKHRoaXMudGltZSA+PSAxKSB7XG5cdFx0XHRcdGNvbnN0IGZyYW1lVGltZSA9IE1hdGgucm91bmQoMTAwMCAqIHRoaXMudGltZSAvIHRoaXMuZnJhbWVzKTtcblx0XHRcdFx0dGhpcy50ZXh0ID0gYCR7dGhpcy5mcmFtZXN9IGZwcyAke2ZyYW1lVGltZX0gbXNgO1xuXHRcdFx0XHR0aGlzLnRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLmZyYW1lcyA9IDA7XG5cdFx0XHR9XG5cdFx0fSxcblx0fTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCB7XG5cdEFCSUxJVFlfRk9YLCBBQklMSVRZX1dPTEYsIEFOSU1BTElTVCwgQVJDSEVSLCBCQUNLR1JPVU5ELFxufSBmcm9tICcuL2Fzc2V0cyc7XG5pbXBvcnQgYXJ0aWZhY3QgZnJvbSAnLi9hcnRpZmFjdCc7XG5pbXBvcnQgZnBzIGZyb20gJy4vZnBzJztcbmltcG9ydCB7IHVuaXQsIFVuaXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi91bml0JztcblxuaW50ZXJmYWNlIE1haW4ge1xuXHRzdGFydCgpOiB2b2lkO1xuXHRba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oKTogTWFpbiB7XG5cdGZ1bmN0aW9uIG9uVW5pdENsaWNrKGRhdGE6IFVuaXRQcm9wZXJ0aWVzKSB7XG5cdFx0ZGF0YS5oZWFsdGggPSBNYXRoLnJhbmRvbSgpO1xuXHRcdGNvbnNvbGUubG9nKCdvblVuaXRDbGljaycsIGRhdGEubmFtZSk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQkFDS0dST1VORCxcblx0XHRcdFx0c2NhbGVYOiAxLFxuXHRcdFx0XHRzY2FsZVk6IDEsXG5cdFx0XHR9LFxuXHRcdFx0ZmlndXJlOiB7XG5cdFx0XHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHR0eXBlOiAncmVjdCcsXG5cdFx0XHRcdFx0eDogMCxcblx0XHRcdFx0XHR5OiAwLFxuXHRcdFx0XHRcdHdpZHRoOiAxMDAsXG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAsXG5cdFx0XHRcdFx0ZmlsbDogMHhmZjAwZmYsXG5cdFx0XHRcdFx0c3Ryb2tlOiB7XG5cdFx0XHRcdFx0XHR0aGlja25lc3M6IDIsXG5cdFx0XHRcdFx0XHRmaWxsOiAweDAwZmYwMCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHNoYXBlczoge1xuXHRcdFx0XHR0eXBlOiAnc2hhcGUnLFxuXHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ2NpcmNsZScsXG5cdFx0XHRcdFx0XHR4OiAxMDAsXG5cdFx0XHRcdFx0XHR5OiAxMDAsXG5cdFx0XHRcdFx0XHRyYWRpdXM6IDUwLFxuXHRcdFx0XHRcdFx0ZmlsbDogeyB0eXBlOiAnc29saWQnLCBjb2xvcjogMHhmZmZmMDAsIGFscGhhOiAwLjUgfSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdwYXRoJyxcblx0XHRcdFx0XHRcdGRhdGE6ICdNIDEwIDEwIEggOTAgViA5MCBIIDEwIFonLFxuXHRcdFx0XHRcdFx0ZmlsbDogMHhmZjAwZmYsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAncGF0aCcsXG5cdFx0XHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ21vdmVUbycsIHg6IDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMTAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDEwMCwgeTogMTAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDAsIHk6IDEwMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0ZmlsbDogMHhmZjAwZmYsXG5cdFx0XHRcdFx0XHRzdHJva2U6IDB4MDAwMDAwLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0dW5pdHM6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0dW5pdCh7XG5cdFx0XHRcdFx0XHRuYW1lOiAnQXJjaGVyJywgaGVhbHRoOiAxLCBpbWFnZTogQVJDSEVSLCBvbkNsaWNrOiBvblVuaXRDbGljayxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHR1bml0KHtcblx0XHRcdFx0XHRcdG5hbWU6ICdBbmltYWxpc3QnLCBoZWFsdGg6IDEsIGltYWdlOiBBTklNQUxJU1QsIG9uQ2xpY2s6IG9uVW5pdENsaWNrLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdGFydGlmYWN0OiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHR4OiAzMDAsXG5cdFx0XHRcdHk6IDM1MCxcblx0XHRcdFx0Y2hpbGRyZW46IFthcnRpZmFjdCgpXSxcblx0XHRcdH0sXG5cdFx0XHRtYXA6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0eTogNDUwLFxuXHRcdFx0XHRzY2FsZVg6IDAuMixcblx0XHRcdFx0c2NhbGVZOiAwLjIsXG5cdFx0XHRcdGFscGhhOiAwLjUsXG5cdFx0XHRcdHNyYzogJ3Rlc3QuY2FudmFzJyxcblx0XHRcdFx0b25Qb2ludGVyT3ZlcigpIHtcblx0XHRcdFx0XHR0aGlzLmFscGhhID0gMTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b25Qb2ludGVyT3V0KCkge1xuXHRcdFx0XHRcdHRoaXMuYWxwaGEgPSAwLjU7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YWJpbGl0eUZveDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEFCSUxJVFlfRk9YLFxuXHRcdFx0XHR4OiA0NTAsXG5cdFx0XHRcdHk6IDUwMCxcblx0XHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdFx0dGludDoge1xuXHRcdFx0XHRcdGNvbG9yOiAweDAwZmYwMCxcblx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0fSBhcyBhbnksXG5cdFx0XHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0XHRcdGlmICh0aGlzLnRpbnQpIHtcblx0XHRcdFx0XHRcdHRoaXMudGludC52YWx1ZSArPSB0aW1lO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMudGludC52YWx1ZSA+PSAxKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudGludC52YWx1ZSA9IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duKGU6IGFueSkge1xuXHRcdFx0XHRcdGlmICh0aGlzLnRpbnQpIHtcblx0XHRcdFx0XHRcdHRoaXMudGludCA9IG51bGw7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMudGludCA9IHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IDB4MDBmZjAwLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmb3gnLCBlKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRhYmlsaXR5V29sZjoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0eDogMzUwLFxuXHRcdFx0XHR5OiA0MDAsXG5cdFx0XHRcdGNoaWxkOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0XHRzcmM6IEFCSUxJVFlfV09MRixcblx0XHRcdFx0XHRzY2FsZTogMC41LFxuXHRcdFx0XHRcdGFscGhhOiAxLFxuXHRcdFx0XHRcdHR3ZWVuOiB7XG5cdFx0XHRcdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0XHRcdFx0cGhhc2VzOiBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHg6IDIwMCB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAnY3ViaWNvdXQnLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeTogMjAwLCBhbHBoYTogMC41IH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6ICdxdWFkcmF0aWNJbicsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB4OiAwLCBhbHBoYTogMSB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAncXVhZHJhdGljT3V0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRmcHM6IGZwcygpLFxuXHRcdH0sXG5cdFx0c3RhcnQoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnc3RhcnQnKTtcblx0XHR9LFxuXHR9O1xufVxuIiwiY29uc3QgU1BFRUQgPSAxMDA7XG5cbmludGVyZmFjZSBVbml0IHtcblx0W2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRQcm9wZXJ0aWVzIHtcblx0bmFtZTogc3RyaW5nLFxuXHRoZWFsdGg6IG51bWJlcixcblx0aW1hZ2U6IHN0cmluZyxcblx0b25DbGljazogKGRhdGE6IFVuaXRQcm9wZXJ0aWVzKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pdChwcm9wczogVW5pdFByb3BlcnRpZXMpOiBVbml0IHtcblx0ZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XG5cdFx0cmV0dXJuIGAke3Byb3BzLm5hbWV9XFxuJHtNYXRoLnJvdW5kKHByb3BzLmhlYWx0aCAqIDEwMCl9JWA7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdHg6IDUwICsgTWF0aC5yYW5kb20oKSAqIDQwMCxcblx0XHR5OiAyMDAsXG5cdFx0cm90YXRpb246IDAsXG5cdFx0dXBkYXRlTW92ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMueCArPSB0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCAqIHRpbWUgKiBTUEVFRDtcblx0XHRcdGlmICh0aGlzLnggPCA1MCkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCA9IDE7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMueCA+IDQwMCkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCA9IC0xO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZU1vdmUodGltZSk7XG5cdFx0fSxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0dGV4dDoge1xuXHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHRcdHRleHQ6IGdldFRpdGxlKCksXG5cdFx0XHRcdHRleHRGb3JtYXQ6IHtcblx0XHRcdFx0XHRzaXplOiAxNSxcblx0XHRcdFx0XHRjb2xvcjogMHhmZmRkZGQsXG5cdFx0XHRcdFx0YWxpZ246ICdjZW50ZXInLFxuXHRcdFx0XHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRib3JkZXI6IDB4MDBmZjAwLFxuXHRcdFx0XHR5OiAtMzAsXG5cdFx0XHRcdGhlaWdodDogMzUsXG5cdFx0XHRcdHBpdm90WDogMC41LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duOiAoKSA9PiB7XG5cdFx0XHRcdFx0cHJvcHMub25DbGljayhwcm9wcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uVXBkYXRlKCkge1xuXHRcdFx0XHRcdHRoaXMudGV4dCA9IGdldFRpdGxlKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBwcm9wcy5pbWFnZSxcblx0XHRcdFx0c2NhbGVYOiBNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xLFxuXHRcdFx0XHRwaXZvdFg6IDAuNSxcblx0XHRcdFx0b25Qb2ludGVyRG93bjogKCkgPT4ge1xuXHRcdFx0XHRcdHByb3BzLm9uQ2xpY2socHJvcHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCJpbXBvcnQgeyBDb21wb25lbnQsIEVuZ2luZSwgYXBwbHlNb3VzZVN1cHBvcnRFeHRlbnNpb24gfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5pbXBvcnQgeyBhcHBseVR3ZWVuRXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC90d2Vlbic7XG5pbXBvcnQgeyBhcHBseUNhbnZhc1RleHRFeHRlbnNpb24gfSBmcm9tICdAZTJkL3RleHQnO1xuaW1wb3J0IHsgYXBwbHlDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC9pbWFnZSc7XG5pbXBvcnQgeyBhcHBseUNhbnZhc1NoYXBlRXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC9zaGFwZSc7XG5pbXBvcnQgeyBDYW52YXNTdXBwb3J0IH0gZnJvbSAnQGUyZC9jYW52YXMtc3VwcG9ydCc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGUyZC9yZXNvdXJjZXMnO1xuaW1wb3J0IEN1c3RvbVJlc291cmNlTWFuYWdlciBmcm9tICcuL2VuZ2luZS9yZXNvdXJjZXMnO1xuaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluJztcbmltcG9ydCBDdXN0b21TdXBwb3J0IGZyb20gJy4vZW5naW5lL3N1cHBvcnQnO1xuaW1wb3J0IHtcblx0QU5JTUFMSVNULCBBTklNQUxJU1RfSU1BR0UsIEFSQ0hFUiwgQVJDSEVSX0lNQUdFLCBURVNUX0NBTlZBUyxcbn0gZnJvbSAnLi9hc3NldHMnO1xuXG4vLyBhcHBsaWNhdGlvblxuY29uc3QgYXBwID0gbWFpbigpO1xuYXBwLnN0YXJ0KCk7XG5cbi8vIGJhc2ljIGVuZ2luZVxuY29uc3QgZW5naW5lID0gbmV3IEVuZ2luZShuZXcgQ2FudmFzU3VwcG9ydCgpKTtcbmFwcGx5Q2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbihlbmdpbmUuc3VwcG9ydCk7XG5hcHBseUNhbnZhc1RleHRFeHRlbnNpb24oZW5naW5lLnN1cHBvcnQpO1xuYXBwbHlDYW52YXNTaGFwZUV4dGVuc2lvbihlbmdpbmUuc3VwcG9ydCk7XG5hcHBseVR3ZWVuRXh0ZW5zaW9uKGVuZ2luZS5zdXBwb3J0KTtcbmFwcGx5TW91c2VTdXBwb3J0RXh0ZW5zaW9uKGVuZ2luZSk7XG5lbmdpbmUucm9vdCA9IGFwcCBhcyBhbnkgYXMgQ29tcG9uZW50O1xuZW5naW5lLnBsYXkoKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZW5naW5lLnN1cHBvcnQuZWxlbWVudCk7XG5cbi8vIGN1c3RvbSBlbmdpbmVcbmNvbnN0IGN1c3RvbUVuZ2luZSA9IG5ldyBFbmdpbmUobmV3IEN1c3RvbVN1cHBvcnQoKSk7XG5jdXN0b21FbmdpbmUuZnVsbHNjcmVlbiA9IGZhbHNlO1xuY3VzdG9tRW5naW5lLmhlaWdodCA9IDYwMDtcbmN1c3RvbUVuZ2luZS51cGRhdGVFbmFibGVkID0gZmFsc2U7XG5jdXN0b21FbmdpbmUucm9vdCA9IGVuZ2luZS5yb290O1xuY3VzdG9tRW5naW5lLnBsYXkoKTtcbmN1c3RvbUVuZ2luZS5zdXBwb3J0LmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuY3VzdG9tRW5naW5lLnN1cHBvcnQuZWxlbWVudC5zdHlsZS50b3AgPSAnMHB4JztcbmN1c3RvbUVuZ2luZS5zdXBwb3J0LmVsZW1lbnQuc3R5bGUubGVmdCA9ICc2MDBweCc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGN1c3RvbUVuZ2luZS5zdXBwb3J0LmVsZW1lbnQpO1xuXG4vLyBwYWdlXG5kb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpbiA9ICcwJztcbmRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZyA9ICcwJztcblxuLy8gdGVzdCBwYXVzZVxuc2V0VGltZW91dCgoKSA9PiBlbmdpbmUucGF1c2UoKSwgNTAwMCk7XG5zZXRUaW1lb3V0KCgpID0+IGVuZ2luZS5wbGF5KCksIDEwMDAwKTtcblxuLy8gc2V0IGN1c3RvbSByZXNvdXJjZVxuZW5naW5lLnN1cHBvcnQucmVzb3VyY2VzLmFkZChcblx0VEVTVF9DQU5WQVMsXG5cdHtcblx0XHRhc3NldDogVEVTVF9DQU5WQVMsXG5cdFx0aW1hZ2U6IGN1c3RvbUVuZ2luZS5zdXBwb3J0LmVsZW1lbnQsXG5cdFx0bG9hZGVkOiB0cnVlLFxuXHR9IGFzIEltYWdlUmVzb3VyY2UsXG4pO1xuY3VzdG9tRW5naW5lLnN1cHBvcnQucmVzb3VyY2VzLmFkZChcblx0VEVTVF9DQU5WQVMsXG5cdHtcblx0XHRhc3NldDogVEVTVF9DQU5WQVMsXG5cdFx0aW1hZ2U6IGVuZ2luZS5zdXBwb3J0LmVsZW1lbnQsXG5cdFx0bG9hZGVkOiB0cnVlLFxuXHR9IGFzIEltYWdlUmVzb3VyY2UsXG4pO1xuXG4vLyBjdXN0b20gcmVzb3VyY2UgcmVzb2x2ZXJcbmNvbnN0IHJlc291cmNlTWFuYWdlciA9IG5ldyBDdXN0b21SZXNvdXJjZU1hbmFnZXIoKTtcbnJlc291cmNlTWFuYWdlci5hbGlhc2VzLnNldChBUkNIRVIucmVwbGFjZSgnaWQ6JywgJycpLCBBUkNIRVJfSU1BR0UpO1xucmVzb3VyY2VNYW5hZ2VyLmFsaWFzZXMuc2V0KEFOSU1BTElTVC5yZXBsYWNlKCdpZDonLCAnJyksIEFOSU1BTElTVF9JTUFHRSk7XG5lbmdpbmUuc3VwcG9ydC5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvdXJjZU1hbmFnZXIucmVzb2x2ZSk7XG5jdXN0b21FbmdpbmUuc3VwcG9ydC5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvdXJjZU1hbmFnZXIucmVzb2x2ZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9