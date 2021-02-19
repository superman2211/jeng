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

function render(container, context) {
  var children = container.children;
  var support = context.support;

  if (children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var component = children[i];
        var componentContext = support.getRenderContext(component, context);
        support.render(component, componentContext);
      }
    } else if (children.type) {
      var _component = children;
      var childContext = support.getRenderContext(_component, context);
      support.render(_component, childContext);
    } else {
      var componentsMap = children;
      var keys = Object.keys(componentsMap);

      for (var _i = 0; _i < keys.length; _i++) {
        var _component2 = componentsMap[keys[_i]];

        var _componentContext = support.getRenderContext(_component2, context);

        support.render(_component2, _componentContext);
      }
    }
  }
}
function update(container, context) {
  var children = container.children;
  var support = context.support;

  if (children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var component = children[i];
        var componentContext = support.getUpdateContext(component, context);
        support.update(component, componentContext);
      }
    } else if (children.type) {
      var _component3 = children;
      var childContext = support.getUpdateContext(_component3, context);
      support.update(_component3, childContext);
    } else {
      var componentsMap = children;
      var keys = Object.keys(componentsMap);

      for (var _i2 = 0; _i2 < keys.length; _i2++) {
        var _component4 = componentsMap[keys[_i2]];

        var _componentContext2 = support.getUpdateContext(_component4, context);

        support.update(_component4, _componentContext2);
      }
    }
  }
}
function hitTest(container, context) {
  var children = container.children;
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
    } else if (children.type) {
      var _component5 = children;
      var childContext = support.getPointerContext(_component5, context);

      var _result = support.hitTest(_component5, childContext);

      if (_result) {
        return true;
      }
    } else {
      var componentsMap = children;
      var keys = Object.keys(componentsMap);

      for (var _i3 = keys.length - 1; _i3 >= 0; _i3--) {
        var _component6 = componentsMap[keys[_i3]];

        var _componentContext3 = support.getPointerContext(_component6, context);

        var _result2 = support.hitTest(_component6, _componentContext3);

        if (_result2) {
          return true;
        }
      }
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
                const frameTime = Math.ceil(1000 * this.time / this.frames);
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
                children: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9jYW52YXMtc3VwcG9ydC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2NhbnZhcy1zdXBwb3J0L2Rpc3QvcGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vY2FudmFzLXN1cHBvcnQvZGlzdC9zdXBwb3J0LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2VuZ2luZS9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZW5naW5lL2Rpc3QvZW5naW5lL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9lbmdpbmUvc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnB1dC9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnB1dC9tb3VzZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnB1dC90b3VjaC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnRlcmZhY2VzL3Bpdm90LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2VuZ2luZS9kaXN0L2ludGVyZmFjZXMvcG9pbnRlci5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnRlcmZhY2VzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC9pbnRlcmZhY2VzL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9lbmdpbmUvZGlzdC91dGlscy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9nZW9tL2Rpc3QvYm91bmRzLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9jb2xvci10cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZ2VvbS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vZ2VvbS9kaXN0L3BvaW50LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL2dlb20vZGlzdC9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vaW1hZ2UvZGlzdC9pbWFnZS1jYW52YXMtY29sb3IuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vaW1hZ2UvZGlzdC9pbWFnZS1jYW52YXMuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vaW1hZ2UvZGlzdC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9pbWFnZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3Jlc291cmNlcy9kaXN0L2ltYWdlLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvZGF0YS9kYXRhLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvZGF0YS9wYXRoLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3QvZGF0YS9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vc2hhcGUvZGlzdC9ncmFwaGljcy5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi9zaGFwZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3Qvc2hhcGUtY2FudmFzLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3NoYXBlL2Rpc3Qvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L2ZvbnQuanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uLi90ZXh0L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdGV4dC9kaXN0L3RleHQtY2FudmFzLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3RleHQvZGlzdC90ZXh0LmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3R3ZWVuL2Rpc3QvZWFzaW5nLmpzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4uL3R3ZWVuL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi4vdHdlZW4vZGlzdC90d2Vlbi5qcyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9hcnRpZmFjdC50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9hc3NldHMudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvZW5naW5lL2ltYWdlLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL2VuZ2luZS9yZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvZW5naW5lL3N1cHBvcnQudHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvZnBzLnRzIiwid2VicGFjazovL0BlMmQvc2FtcGxlLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvLi9zcmMvdW5pdC50cyIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQGUyZC9zYW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AZTJkL3NhbXBsZS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJjcmVhdGVDb2xvclBhdHRlcm4iLCJjb2xvciIsImFscGhhIiwiY3QiLCJyIiwiZyIsImIiLCJhIiwiQ29sb3JUcmFuc2Zvcm0iLCJyZWRNdWx0aXBsaWVyIiwicmVkT2Zmc2V0IiwiZ3JlZW5NdWx0aXBsaWVyIiwiZ3JlZW5PZmZzZXQiLCJibHVlTXVsdGlwbGllciIsImJsdWVPZmZzZXQiLCJhbHBoYU11bHRpcGxpZXIiLCJhbHBoYU9mZnNldCIsIkNhbnZhc1N1cHBvcnQiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0MmQiLCJnZXRDb250ZXh0Iiwic2V0VHJhbnNmb3JtIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJwaXhlbFJhdGlvIiwidmlld1dpZHRoIiwiTWF0aCIsImZsb29yIiwidmlld0hlaWdodCIsInN0eWxlIiwiU3VwcG9ydCIsIkNvbXBvbmVudCIsImlzRW5hYmxlZCIsImNvbXBvbmVudCIsImVuYWJsZWQiLCJpc1Zpc2libGUiLCJ2aXNpYmxlIiwiQ09OVEFJTkVSIiwiQ29udGFpbmVyIiwibnVtQ2hpbGRyZW4iLCJjb250YWluZXIiLCJjaGlsZHJlbiIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInR5cGUiLCJrZXlzIiwiT2JqZWN0IiwicmVuZGVyIiwiY29udGV4dCIsInN1cHBvcnQiLCJpIiwiY29tcG9uZW50Q29udGV4dCIsImdldFJlbmRlckNvbnRleHQiLCJjaGlsZENvbnRleHQiLCJjb21wb25lbnRzTWFwIiwidXBkYXRlIiwiZ2V0VXBkYXRlQ29udGV4dCIsImhpdFRlc3QiLCJnZXRQb2ludGVyQ29udGV4dCIsInJlc3VsdCIsImFwcGx5Q29udGFpbmVyRXh0ZW5zaW9uIiwidXBkYXRlSGFuZGxlcnMiLCJzZXQiLCJyZW5kZXJIYW5kbGVycyIsImhpdFRlc3RIYW5kbGVycyIsIkVNUFRZX01BVFJJWCIsIk1hdHJpeCIsIkVuZ2luZSIsImZ1bGxzY3JlZW4iLCJ1cGRhdGVFbmFibGVkIiwicmVuZGVyRW5hYmxlZCIsInBvaW50ZXJFbmFibGVkIiwicGF1c2VkIiwidGltZSIsIm1hdHJpeCIsImludGVybmFsVXBkYXRlIiwiZGVsdGFUaW1lIiwidXBkYXRlRnJhbWUiLCJyb290IiwiYmFzZSIsImRlcHRoIiwiY2xlYXIiLCJjb2xvclRyYW5zZm9ybSIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJ0YXJnZXRXaWR0aCIsInRhcmdldEhlaWdodCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImQiLCJzZXRTaXplIiwidXBkYXRlU2l6ZSIsInVwZGF0ZU5leHRGcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImV2ZW50IiwiaWQiLCJ4IiwieSIsImxvY2FsIiwiZ2xvYmFsIiwiY29uc29sZSIsImxvZyIsIlJlc291cmNlcyIsInJlc291cmNlcyIsIk1hcCIsInJlc29sdmVycyIsIlNldCIsImFzc2V0IiwicmVzb3VyY2UiLCJnZXQiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJEZWJ1ZyIsInVwZGF0ZURlcHRoIiwicHJvcGVydHlIYW5kbGVycyIsImZvckVhY2giLCJoYW5kbGVyIiwicHJvcGVydHkiLCJvblVwZGF0ZSIsIlBvaW50ZXIiLCJwb2ludGVyT3ZlciIsInBhcmVudCIsIlRyYW5zZm9ybSIsInRyYW5zZm9ybWVkTWF0cml4IiwiYXBwbHlLZXlib2FyZFN1cHBvcnRFeHRlbnNpb24iLCJlbmdpbmUiLCJkaXNwYXRjaEV2ZW50IiwiZWxlbWVudCIsImNsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudExlZnQiLCJjbGllbnRZIiwidG9wIiwiY2xpZW50VG9wIiwiZGlzcGF0Y2hQb2ludGVyRXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFwcGx5TW91c2VTdXBwb3J0RXh0ZW5zaW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoYW5nZWRUb3VjaGVzIiwidG91Y2giLCJpZGVudGlmaWVyIiwiYXBwbHlUb3VjaFN1cHBvcnRFeHRlbnNpb24iLCJQaXZvdCIsImdldFgiLCJwaXZvdCIsInBpdm90WCIsImdldFkiLCJwaXZvdFkiLCJpc1BvaW50ZXJPdmVyIiwicG9pbnRlciIsImlzUG9pbnRlckVuYWJsZWQiLCJoYW5kbGVyTmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJTb3VyY2UiLCJnZXRSZXNvdXJjZSIsInNvdXJjZSIsInNyYyIsImlzTG9hZGVkIiwibG9hZGVkIiwiZ2V0TWF0cml4IiwidHJhbnNmb3JtIiwiYyIsInR4IiwidHkiLCJyb3RhdGlvbiIsInNjYWxlWCIsInNjYWxlIiwic2NhbGVZIiwiY29zIiwic2luIiwiZ2V0Q29sb3JUcmFuc2Zvcm0iLCJ0aW50IiwidmFsdWUiLCJ2YWx1ZUludmVydGVkIiwiYXJncyIsIlN0cmluZyIsImNvdW50IiwiZXJyb3JzIiwiZXJyb3IiLCJ3YXJuaW5ncyIsIndhcm4iLCJCb3VuZHMiLCJlbXB0eSIsIm1pblgiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJtaW5ZIiwibWF4WCIsIk1JTl9WQUxVRSIsIm1heFkiLCJpc0VtcHR5IiwiYm91bmRzIiwidG9SZWN0YW5nbGUiLCJ0ZXN0WCIsInRlc3RZIiwidGVzdCIsInRlc3RQb2ludCIsInBvaW50IiwiY29uY2F0IiwiY3QxIiwiY3QwIiwiaXNEZWZhdWx0IiwibWF0cml4MCIsIm1hdHJpeDEiLCJnZXREZXRlcm1pbmFudCIsImludmVydCIsImRldGVybWluYW50IiwidHJhbnNmb3JtUG9pbnQiLCJ0cmFuc2Zvcm1JbnZlcnNlUG9pbnQiLCJ0cmFuc2Zvcm1Cb3VuZHMiLCJyeCIsInJ5IiwicnIiLCJyYiIsIm54MSIsIm55MSIsIm54MiIsIm55MiIsIm54MyIsIm55MyIsIm54NCIsIm55NCIsInJpZ2h0IiwiYm90dG9tIiwiUG9pbnQiLCJSZWN0YW5nbGUiLCJjb250YWlucyIsInJlY3RhbmdsZSIsInRlbXBDb250ZXh0IiwiaXNEZWZhdWx0Q29sb3JUcmFuc2Zvcm0iLCJ1cGRhdGVUZW1wQ29udGV4dCIsInJlbmRlckNhbnZhc0NvbG9yIiwiaW1hZ2UiLCJnbG9iYWxBbHBoYSIsImRyYXdJbWFnZSIsImltYWdlRGF0YSIsImdldEltYWdlRGF0YSIsInJtIiwiZ20iLCJibSIsImFtIiwicm8iLCJnbyIsImJvIiwiYW8iLCJkYXRhIiwicHV0SW1hZ2VEYXRhIiwiYXBwbHlDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uIiwiYXBwbHlJbWFnZUV4dGVuc2lvbiIsIklNQUdFIiwicmVuZGVyQ2FudmFzIiwiYXBwbHlDYW52YXNJbWFnZUV4dGVuc2lvbiIsIkltYWdlIiwiZ2V0Qm91bmRzIiwidW5kZWZpbmVkIiwiYWRkIiwicmVzb2x2ZUltYWdlIiwiZXh0ZW5zaW9uIiwic3BsaXQiLCJwb3AiLCJvbmxvYWQiLCJvbmVycm9yIiwiZSIsIlJlY3RhbmdsZURhdGEiLCJjYWxjdWxhdGVCb3VuZHMiLCJFbGxpcHNlRGF0YSIsInJhZGl1cyIsInJhZGl1c1giLCJyYWRpdXNZIiwiUGF0aERhdGEiLCJwYXRoRGF0YSIsIkdyYXBoaWNzU3RyaW5nIiwiY29tbWFuZCIsIlBhdGhDb21tYW5kIiwiR3JhcGhpY3NEYXRhIiwicGF0aCIsIm1vdmVUbyIsImN1cnZlVG8iLCJjeCIsImN5IiwiY3ViaWNDdXJ2ZVRvIiwic3giLCJzeSIsIlRFU1RfQ09NTUFORCIsIlRFU1RfU1BBQ0UiLCJURVNUX05VTUJFUiIsIkdyYXBoaWNzU3RyaW5nU3RyZWFtIiwicG9zaXRpb24iLCJidWZmZXIiLCJzaXplIiwicmVhZENvbW1hbmQiLCJyZWFkTnVtYmVycyIsIm51bWJlciIsImNoYXIiLCJwYXJzZUZsb2F0IiwiR3JhcGhpY3NTdHJpbmdSZWFkZXIiLCJzdHJlYW0iLCJjb21tYW5kRXhpc3RzIiwibGFzdFgiLCJsYXN0WSIsInNldFBhdGgiLCJoYXNEYXRhIiwicmVhZE5leHQiLCJwYXJzZSIsImdldENvbW1hbmQiLCJnZXRCdWZmZXIiLCJ4MCIsInkwIiwieDEiLCJ5MSIsIngyIiwieTIiLCJsaW5lVG8iLCJyZWFkZXIiLCJHcmFwaGljcyIsInNoYXBlIiwiZmlsbCIsInJlcGVhdCIsInNtb290aCIsInJhdGlvIiwic3ByZWFkIiwiaW50ZXJwb2xhdGlvbiIsImZvY2FsUG9pbnRSYXRpbyIsInRoaWNrbmVzcyIsInBpeGVsSGludGluZyIsInNjYWxlTW9kZSIsImNhcHMiLCJqb2ludHMiLCJtaXRlckxpbWl0Iiwic3Ryb2tlIiwiYmVnaW5QYXRoIiwicHVzaCIsImdldFBhdGgiLCJlbGxpcHNlV2lkdGgiLCJlbGxpcHNlSGVpZ2h0IiwidyIsImgiLCJrIiwib3giLCJveSIsInhlIiwieWUiLCJ4bSIsInltIiwiZHgiLCJkeSIsImNyZWF0ZURhdGEiLCJncmFwaGljc0RhdGEiLCJyZW5kZXJTaGFwZSIsImFwcGx5Q2FudmFzU2hhcGVFeHRlbnNpb24iLCJhcHBseVNoYXBlRXh0ZW5zaW9uIiwiU0hBUEUiLCJTaGFwZSIsImdldEdyYXBoaWNzIiwiRU0iLCJmb250cyIsImdldFN0eWxlRm9udCIsImZvbnQiLCJtZWFzdXJlVGV4dCIsInRleHQiLCJnZXRDaGFyV2lkdGgiLCJ3aWR0aHMiLCJuYW1lIiwiZ2V0S2VybmluZyIsImZpcnN0Iiwic2Vjb25kIiwicGFpciIsImtlcm5pbmciLCJrZXJuaW5ncyIsIndpZHRoU2Vjb25kIiwid2lkdGhUb3RhbCIsImdldEFkdmFuY2UiLCJnZXRGb250IiwiZ2V0TGluZVdpZHRoIiwiZm9ybWF0IiwibGluZSIsImFkdmFuY2UiLCJsZXR0ZXJTcGFjaW5nIiwiZ2V0VGV4dFdpZHRoIiwibGluZXMiLCJsaW5lV2lkdGgiLCJnZXRUZXh0SGVpZ2h0IiwibGVhZGluZyIsImRlZmF1bHRUZXh0Rm9ybWF0IiwiYm9sZCIsIml0YWxpYyIsInVuZGVybGluZSIsImFsaWduIiwidmVydGljYWxBbGlnbiIsImdldFZhbGlkVGV4dEZvcm1hdCIsInRleHRGb3JtYXQiLCJnZXRBbGluZ1ZhbHVlIiwiZ2V0VmVydGljYWxBbGluZ1ZhbHVlIiwicmVuZGVyQ2FudmFzVGV4dCIsImJvcmRlciIsImJhY2tncm91bmQiLCJmb3JtYXRTaXplIiwiZm9ybWF0TGV0dGVyU3BhY2luZyIsImZvcm1hdExlYWRpbmciLCJ0ZXh0V2lkdGgiLCJ0ZXh0SGVpZ2h0IiwicmVhbFdpZHRoIiwicmVhbEhlaWdodCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiYWxpZ25WZXJ0aWNhbFZhbHVlIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJyZWN0IiwidGV4dEJhc2VsaW5lIiwiYWxpZ25WYWx1ZSIsImoiLCJmaWxsVGV4dCIsImFwcGx5Q2FudmFzVGV4dEV4dGVuc2lvbiIsImFwcGx5VGV4dEV4dGVuc2lvbiIsIlRFWFQiLCJUZXh0IiwiTElORUFSIiwiUVVBRFJBVElDIiwiUVVBRFJBVElDX0lOIiwiUVVBRFJBVElDX09VVCIsIkNVQklDIiwiQ1VCSUNfSU4iLCJDVUJJQ19PVVQiLCJRVUFSVElDIiwiUVVBUlRJQ19JTiIsIlFVQVJUSUNfT1VUIiwiUVVJTlRJQyIsIlFVSU5USUNfSU4iLCJRVUlOVElDX09VVCIsIlNJTlVTT0lEQUwiLCJTSU5VU09JREFMX0lOIiwiU0lOVVNPSURBTF9PVVQiLCJFWFBPTkVOVElBTCIsIkVYUE9ORU5USUFMX0lOIiwiRVhQT05FTlRJQUxfT1VUIiwiQ0lSQ1VMQVIiLCJDSVJDVUxBUl9JTiIsIkNJUkNVTEFSX09VVCIsIkVMQVNUSUMiLCJFTEFTVElDX0lOIiwiRUxBU1RJQ19PVVQiLCJCQUNLIiwiQkFDS19JTiIsIkJBQ0tfT1VUIiwiQk9VTkNFIiwiQk9VTkNFX0lOIiwiQk9VTkNFX09VVCIsImVhc2luZyIsIlBJIiwicG93Iiwic3FydCIsInMiLCJUV0VFTiIsInVwZGF0ZVR3ZWVtIiwidHdlZW4iLCJwaGFzZXMiLCJvZmZzZXQiLCJwaGFzZSIsImVhc2luZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImVhc2luZ01ldGhvZCIsImVhc2luZ1ZhbHVlIiwidG8iLCJmcm9tIiwic3RhdGUiLCJrZXkiLCJmcm9tVmFsdWUiLCJ0b1ZhbHVlIiwic3RhdGVWYWx1ZSIsImxvb3AiLCJhcHBseVR3ZWVuRXh0ZW5zaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNPLFNBQVNBLGtCQUFULENBQTRCQyxLQUE1QixFQUFtQ0MsS0FBbkMsRUFBMENDLEVBQTFDLEVBQThDO0FBQ2pELE1BQUlDLENBQUMsR0FBR0gsS0FBSyxJQUFJLEVBQVQsR0FBYyxJQUF0QjtBQUNBLE1BQUlJLENBQUMsR0FBR0osS0FBSyxJQUFJLENBQVQsR0FBYSxJQUFyQjtBQUNBLE1BQUlLLENBQUMsR0FBR0wsS0FBSyxHQUFHLElBQWhCO0FBQ0EsTUFBSU0sQ0FBQyxHQUFHTCxLQUFLLEdBQUcsSUFBaEI7O0FBQ0EsTUFBSSxDQUFDTSwrREFBQSxDQUF5QkwsRUFBekIsQ0FBTCxFQUFtQztBQUMvQkMsS0FBQyxHQUFJQSxDQUFDLEdBQUdELEVBQUUsQ0FBQ00sYUFBUCxHQUF1Qk4sRUFBRSxDQUFDTyxTQUEzQixHQUF3QyxJQUE1QztBQUNBTCxLQUFDLEdBQUlBLENBQUMsR0FBR0YsRUFBRSxDQUFDUSxlQUFQLEdBQXlCUixFQUFFLENBQUNTLFdBQTdCLEdBQTRDLElBQWhEO0FBQ0FOLEtBQUMsR0FBSUEsQ0FBQyxHQUFHSCxFQUFFLENBQUNVLGNBQVAsR0FBd0JWLEVBQUUsQ0FBQ1csVUFBNUIsR0FBMEMsSUFBOUM7QUFDQVAsS0FBQyxHQUFJQSxDQUFDLEdBQUdKLEVBQUUsQ0FBQ1ksZUFBUCxHQUF5QlosRUFBRSxDQUFDYSxXQUE3QixHQUE0QyxJQUFoRDtBQUNIOztBQUNELE1BQUlULENBQUMsR0FBRyxJQUFSLEVBQWM7QUFDViwwQkFBZUgsQ0FBZixlQUFxQkMsQ0FBckIsZUFBMkJDLENBQTNCLGVBQWlDQyxDQUFDLEdBQUcsSUFBckM7QUFDSDs7QUFDRCx1QkFBY0gsQ0FBZCxlQUFvQkMsQ0FBcEIsZUFBMEJDLENBQTFCO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRDs7SUFDcUJXLGE7Ozs7O0FBQ2pCLDJCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxNQUFMLEdBQWNDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQixNQUFLSCxNQUFMLENBQVlJLFVBQVosQ0FBdUIsSUFBdkIsQ0FBakI7QUFIVTtBQUliOzs7OzRCQUlPO0FBQUEsVUFDSUosTUFESixHQUNlLElBRGYsQ0FDSUEsTUFESjtBQUVKLFdBQUtHLFNBQUwsQ0FBZUUsWUFBZjtBQUNBLFdBQUtGLFNBQUwsQ0FBZUcsU0FBZixDQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQk4sTUFBTSxDQUFDTyxLQUF0QyxFQUE2Q1AsTUFBTSxDQUFDUSxNQUFwRDtBQUNIOzs7NEJBQ09ELEssRUFBT0MsTSxFQUFRQyxVLEVBQVk7QUFDL0IsVUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsS0FBSyxHQUFHRSxVQUFuQixDQUFsQjtBQUNBLFVBQU1JLFVBQVUsR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVdKLE1BQU0sR0FBR0MsVUFBcEIsQ0FBbkI7QUFGK0IsVUFHdkJULE1BSHVCLEdBR1osSUFIWSxDQUd2QkEsTUFIdUI7O0FBSS9CLFVBQUlBLE1BQU0sQ0FBQ08sS0FBUCxLQUFpQkcsU0FBakIsSUFBOEJWLE1BQU0sQ0FBQ1EsTUFBUCxLQUFrQkssVUFBcEQsRUFBZ0U7QUFDNURiLGNBQU0sQ0FBQ08sS0FBUCxHQUFlRyxTQUFmO0FBQ0FWLGNBQU0sQ0FBQ1EsTUFBUCxHQUFnQkssVUFBaEI7QUFDQWIsY0FBTSxDQUFDYyxLQUFQLENBQWFQLEtBQWIsYUFBd0JBLEtBQXhCO0FBQ0FQLGNBQU0sQ0FBQ2MsS0FBUCxDQUFhTixNQUFiLGFBQXlCQSxNQUF6QjtBQUNIO0FBQ0o7Ozt3QkFsQmE7QUFDVixhQUFPLEtBQUtSLE1BQVo7QUFDSDs7OztFQVJzQ2UsZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEcEMsSUFBSUMsU0FBSjs7QUFDUCxDQUFDLFVBQVVBLFNBQVYsRUFBcUI7QUFDbEIsV0FBU0MsU0FBVCxDQUFtQkMsU0FBbkIsRUFBOEI7QUFBQTs7QUFDMUIsaUNBQU9BLFNBQVMsQ0FBQ0MsT0FBakIsbUVBQTRCLElBQTVCO0FBQ0g7O0FBQ0RILFdBQVMsQ0FBQ0MsU0FBVixHQUFzQkEsU0FBdEI7O0FBQ0EsV0FBU0csU0FBVCxDQUFtQkYsU0FBbkIsRUFBOEI7QUFBQTs7QUFDMUIsaUNBQU9BLFNBQVMsQ0FBQ0csT0FBakIsbUVBQTRCLElBQTVCO0FBQ0g7O0FBQ0RMLFdBQVMsQ0FBQ0ksU0FBVixHQUFzQkEsU0FBdEI7QUFDSCxDQVRELEVBU0dKLFNBQVMsS0FBS0EsU0FBUyxHQUFHLEVBQWpCLENBVFosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNETyxJQUFNTSxTQUFTLEdBQUcsV0FBbEI7QUFDQSxJQUFJQyxTQUFKOztBQUNQLENBQUMsVUFBVUEsU0FBVixFQUFxQjtBQUNsQixXQUFTQyxXQUFULENBQXFCQyxTQUFyQixFQUFnQztBQUFBLFFBQ3BCQyxRQURvQixHQUNQRCxTQURPLENBQ3BCQyxRQURvQjs7QUFFNUIsUUFBSUEsUUFBSixFQUFjO0FBQ1YsVUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNGLFFBQWQsQ0FBSixFQUE2QjtBQUN6QixlQUFPQSxRQUFRLENBQUNHLE1BQWhCO0FBQ0g7O0FBQ0QsVUFBSUgsUUFBUSxDQUFDSSxJQUFiLEVBQW1CO0FBQ2YsZUFBTyxDQUFQO0FBQ0g7O0FBQ0QsVUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWUwsUUFBWixDQUFiO0FBQ0EsYUFBT0ssSUFBSSxDQUFDRixNQUFaO0FBQ0g7O0FBQ0QsV0FBTyxDQUFQO0FBQ0g7O0FBQ0ROLFdBQVMsQ0FBQ0MsV0FBVixHQUF3QkEsV0FBeEI7QUFDSCxDQWhCRCxFQWdCR0QsU0FBUyxLQUFLQSxTQUFTLEdBQUcsRUFBakIsQ0FoQlo7O0FBaUJPLFNBQVNVLE1BQVQsQ0FBZ0JSLFNBQWhCLEVBQTJCUyxPQUEzQixFQUFvQztBQUFBLE1BQy9CUixRQUQrQixHQUNsQkQsU0FEa0IsQ0FDL0JDLFFBRCtCO0FBQUEsTUFFL0JTLE9BRitCLEdBRW5CRCxPQUZtQixDQUUvQkMsT0FGK0I7O0FBR3ZDLE1BQUlULFFBQUosRUFBYztBQUNWLFFBQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixRQUFkLENBQUosRUFBNkI7QUFDekIsV0FBSyxJQUFJVSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVixRQUFRLENBQUNHLE1BQTdCLEVBQXFDTyxDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDLFlBQU1sQixTQUFTLEdBQUdRLFFBQVEsQ0FBQ1UsQ0FBRCxDQUExQjtBQUNBLFlBQU1DLGdCQUFnQixHQUFHRixPQUFPLENBQUNHLGdCQUFSLENBQXlCcEIsU0FBekIsRUFBb0NnQixPQUFwQyxDQUF6QjtBQUNBQyxlQUFPLENBQUNGLE1BQVIsQ0FBZWYsU0FBZixFQUEwQm1CLGdCQUExQjtBQUNIO0FBQ0osS0FORCxNQU9LLElBQUlYLFFBQVEsQ0FBQ0ksSUFBYixFQUFtQjtBQUNwQixVQUFNWixVQUFTLEdBQUdRLFFBQWxCO0FBQ0EsVUFBTWEsWUFBWSxHQUFHSixPQUFPLENBQUNHLGdCQUFSLENBQXlCcEIsVUFBekIsRUFBb0NnQixPQUFwQyxDQUFyQjtBQUNBQyxhQUFPLENBQUNGLE1BQVIsQ0FBZWYsVUFBZixFQUEwQnFCLFlBQTFCO0FBQ0gsS0FKSSxNQUtBO0FBQ0QsVUFBTUMsYUFBYSxHQUFHZCxRQUF0QjtBQUNBLFVBQU1LLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlTLGFBQVosQ0FBYjs7QUFDQSxXQUFLLElBQUlKLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdMLElBQUksQ0FBQ0YsTUFBekIsRUFBaUNPLEVBQUMsRUFBbEMsRUFBc0M7QUFDbEMsWUFBTWxCLFdBQVMsR0FBR3NCLGFBQWEsQ0FBQ1QsSUFBSSxDQUFDSyxFQUFELENBQUwsQ0FBL0I7O0FBQ0EsWUFBTUMsaUJBQWdCLEdBQUdGLE9BQU8sQ0FBQ0csZ0JBQVIsQ0FBeUJwQixXQUF6QixFQUFvQ2dCLE9BQXBDLENBQXpCOztBQUNBQyxlQUFPLENBQUNGLE1BQVIsQ0FBZWYsV0FBZixFQUEwQm1CLGlCQUExQjtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ00sU0FBU0ksTUFBVCxDQUFnQmhCLFNBQWhCLEVBQTJCUyxPQUEzQixFQUFvQztBQUFBLE1BQy9CUixRQUQrQixHQUNsQkQsU0FEa0IsQ0FDL0JDLFFBRCtCO0FBQUEsTUFFL0JTLE9BRitCLEdBRW5CRCxPQUZtQixDQUUvQkMsT0FGK0I7O0FBR3ZDLE1BQUlULFFBQUosRUFBYztBQUNWLFFBQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixRQUFkLENBQUosRUFBNkI7QUFDekIsV0FBSyxJQUFJVSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVixRQUFRLENBQUNHLE1BQTdCLEVBQXFDTyxDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDLFlBQU1sQixTQUFTLEdBQUdRLFFBQVEsQ0FBQ1UsQ0FBRCxDQUExQjtBQUNBLFlBQU1DLGdCQUFnQixHQUFHRixPQUFPLENBQUNPLGdCQUFSLENBQXlCeEIsU0FBekIsRUFBb0NnQixPQUFwQyxDQUF6QjtBQUNBQyxlQUFPLENBQUNNLE1BQVIsQ0FBZXZCLFNBQWYsRUFBMEJtQixnQkFBMUI7QUFDSDtBQUNKLEtBTkQsTUFPSyxJQUFJWCxRQUFRLENBQUNJLElBQWIsRUFBbUI7QUFDcEIsVUFBTVosV0FBUyxHQUFHUSxRQUFsQjtBQUNBLFVBQU1hLFlBQVksR0FBR0osT0FBTyxDQUFDTyxnQkFBUixDQUF5QnhCLFdBQXpCLEVBQW9DZ0IsT0FBcEMsQ0FBckI7QUFDQUMsYUFBTyxDQUFDTSxNQUFSLENBQWV2QixXQUFmLEVBQTBCcUIsWUFBMUI7QUFDSCxLQUpJLE1BS0E7QUFDRCxVQUFNQyxhQUFhLEdBQUdkLFFBQXRCO0FBQ0EsVUFBTUssSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWVMsYUFBWixDQUFiOztBQUNBLFdBQUssSUFBSUosR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBR0wsSUFBSSxDQUFDRixNQUF6QixFQUFpQ08sR0FBQyxFQUFsQyxFQUFzQztBQUNsQyxZQUFNbEIsV0FBUyxHQUFHc0IsYUFBYSxDQUFDVCxJQUFJLENBQUNLLEdBQUQsQ0FBTCxDQUEvQjs7QUFDQSxZQUFNQyxrQkFBZ0IsR0FBR0YsT0FBTyxDQUFDTyxnQkFBUixDQUF5QnhCLFdBQXpCLEVBQW9DZ0IsT0FBcEMsQ0FBekI7O0FBQ0FDLGVBQU8sQ0FBQ00sTUFBUixDQUFldkIsV0FBZixFQUEwQm1CLGtCQUExQjtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ00sU0FBU00sT0FBVCxDQUFpQmxCLFNBQWpCLEVBQTRCUyxPQUE1QixFQUFxQztBQUFBLE1BQ2hDUixRQURnQyxHQUNuQkQsU0FEbUIsQ0FDaENDLFFBRGdDO0FBQUEsTUFFaENTLE9BRmdDLEdBRXBCRCxPQUZvQixDQUVoQ0MsT0FGZ0M7O0FBR3hDLE1BQUlULFFBQUosRUFBYztBQUNWLFFBQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixRQUFkLENBQUosRUFBNkI7QUFDekIsV0FBSyxJQUFJVSxDQUFDLEdBQUdWLFFBQVEsQ0FBQ0csTUFBVCxHQUFrQixDQUEvQixFQUFrQ08sQ0FBQyxJQUFJLENBQXZDLEVBQTBDQSxDQUFDLEVBQTNDLEVBQStDO0FBQzNDLFlBQU1sQixTQUFTLEdBQUdRLFFBQVEsQ0FBQ1UsQ0FBRCxDQUExQjtBQUNBLFlBQU1DLGdCQUFnQixHQUFHRixPQUFPLENBQUNTLGlCQUFSLENBQTBCMUIsU0FBMUIsRUFBcUNnQixPQUFyQyxDQUF6QjtBQUNBLFlBQU1XLE1BQU0sR0FBR1YsT0FBTyxDQUFDUSxPQUFSLENBQWdCekIsU0FBaEIsRUFBMkJtQixnQkFBM0IsQ0FBZjs7QUFDQSxZQUFJUSxNQUFKLEVBQVk7QUFDUixpQkFBTyxJQUFQO0FBQ0g7QUFDSjtBQUNKLEtBVEQsTUFVSyxJQUFJbkIsUUFBUSxDQUFDSSxJQUFiLEVBQW1CO0FBQ3BCLFVBQU1aLFdBQVMsR0FBR1EsUUFBbEI7QUFDQSxVQUFNYSxZQUFZLEdBQUdKLE9BQU8sQ0FBQ1MsaUJBQVIsQ0FBMEIxQixXQUExQixFQUFxQ2dCLE9BQXJDLENBQXJCOztBQUNBLFVBQU1XLE9BQU0sR0FBR1YsT0FBTyxDQUFDUSxPQUFSLENBQWdCekIsV0FBaEIsRUFBMkJxQixZQUEzQixDQUFmOztBQUNBLFVBQUlNLE9BQUosRUFBWTtBQUNSLGVBQU8sSUFBUDtBQUNIO0FBQ0osS0FQSSxNQVFBO0FBQ0QsVUFBTUwsYUFBYSxHQUFHZCxRQUF0QjtBQUNBLFVBQU1LLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlTLGFBQVosQ0FBYjs7QUFDQSxXQUFLLElBQUlKLEdBQUMsR0FBR0wsSUFBSSxDQUFDRixNQUFMLEdBQWMsQ0FBM0IsRUFBOEJPLEdBQUMsSUFBSSxDQUFuQyxFQUFzQ0EsR0FBQyxFQUF2QyxFQUEyQztBQUN2QyxZQUFNbEIsV0FBUyxHQUFHc0IsYUFBYSxDQUFDVCxJQUFJLENBQUNLLEdBQUQsQ0FBTCxDQUEvQjs7QUFDQSxZQUFNQyxrQkFBZ0IsR0FBR0YsT0FBTyxDQUFDUyxpQkFBUixDQUEwQjFCLFdBQTFCLEVBQXFDZ0IsT0FBckMsQ0FBekI7O0FBQ0EsWUFBTVcsUUFBTSxHQUFHVixPQUFPLENBQUNRLE9BQVIsQ0FBZ0J6QixXQUFoQixFQUEyQm1CLGtCQUEzQixDQUFmOztBQUNBLFlBQUlRLFFBQUosRUFBWTtBQUNSLGlCQUFPLElBQVA7QUFDSDtBQUNKO0FBQ0o7QUFDSjs7QUFDRCxTQUFPLEtBQVA7QUFDSDtBQUNNLFNBQVNDLHVCQUFULENBQWlDWCxPQUFqQyxFQUEwQztBQUM3Q0EsU0FBTyxDQUFDWSxjQUFSLENBQXVCQyxHQUF2QixDQUEyQjFCLFNBQTNCLEVBQXNDbUIsTUFBdEM7QUFDQU4sU0FBTyxDQUFDYyxjQUFSLENBQXVCRCxHQUF2QixDQUEyQjFCLFNBQTNCLEVBQXNDVyxNQUF0QztBQUNBRSxTQUFPLENBQUNlLGVBQVIsQ0FBd0JGLEdBQXhCLENBQTRCMUIsU0FBNUIsRUFBdUNxQixPQUF2QztBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSEQ7QUFDQTtBQUNBLElBQU1RLFlBQVksR0FBR0MsbURBQUEsRUFBckI7O0lBQ3FCQyxNO0FBQ2pCLGtCQUFZbEIsT0FBWixFQUFxQjtBQUFBOztBQUFBOztBQUNqQixTQUFLNUIsS0FBTCxHQUFhLEdBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsR0FBZDtBQUNBLFNBQUs4QyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLElBQXRCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FBQyxDQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjUixtREFBQSxFQUFkOztBQUNBLFNBQUtTLGNBQUwsR0FBc0IsVUFBQ0YsSUFBRCxFQUFVO0FBQzVCLFVBQU1HLFNBQVMsR0FBRyxLQUFJLENBQUNILElBQUwsS0FBYyxDQUFDLENBQWYsR0FBbUIsQ0FBbkIsR0FBdUJBLElBQUksR0FBRyxLQUFJLENBQUNBLElBQXJEO0FBQ0EsV0FBSSxDQUFDQSxJQUFMLEdBQVlBLElBQVo7O0FBQ0EsV0FBSSxDQUFDSSxXQUFMLENBQWlCRCxTQUFTLEdBQUcsSUFBN0I7QUFDSCxLQUpEOztBQUtBLFNBQUszQixPQUFMLEdBQWVBLE9BQWY7QUFDQVcsa0ZBQXVCLENBQUMsS0FBS1gsT0FBTixDQUF2QjtBQUNIOzs7OzZCQUNnQjtBQUFBLFVBQVZ3QixJQUFVLHVFQUFILENBQUc7O0FBQ2IsVUFBSSxDQUFDLEtBQUtLLElBQVYsRUFBZ0I7QUFDWjtBQUNIOztBQUNELFVBQU1DLElBQUksR0FBRztBQUNUOUIsZUFBTyxFQUFFLEtBQUtBLE9BREw7QUFFVHdCLFlBQUksRUFBSkEsSUFGUztBQUdUTyxhQUFLLEVBQUU7QUFIRSxPQUFiO0FBS0EsVUFBTWhDLE9BQU8sR0FBRyxLQUFLQyxPQUFMLENBQWFPLGdCQUFiLENBQThCLEtBQUtzQixJQUFuQyxFQUF5Q0MsSUFBekMsQ0FBaEI7QUFDQSxXQUFLOUIsT0FBTCxDQUFhTSxNQUFiLENBQW9CLEtBQUt1QixJQUF6QixFQUErQjlCLE9BQS9CO0FBQ0g7Ozs2QkFDUTtBQUNMLFVBQUksQ0FBQyxLQUFLOEIsSUFBVixFQUFnQjtBQUNaO0FBQ0g7O0FBQ0QsV0FBSzdCLE9BQUwsQ0FBYWdDLEtBQWI7QUFDQSxVQUFNRixJQUFJLEdBQUc7QUFDVDlCLGVBQU8sRUFBRSxLQUFLQSxPQURMO0FBRVQrQixhQUFLLEVBQUUsQ0FGRTtBQUdUTixjQUFNLEVBQUUsS0FBS0EsTUFISjtBQUlUUSxzQkFBYyxFQUFFOUUsMkRBQUE7QUFKUCxPQUFiO0FBTUEsVUFBTTRDLE9BQU8sR0FBRyxLQUFLQyxPQUFMLENBQWFHLGdCQUFiLENBQThCLEtBQUswQixJQUFuQyxFQUF5Q0MsSUFBekMsQ0FBaEI7QUFDQSxXQUFLOUIsT0FBTCxDQUFhRixNQUFiLENBQW9CLEtBQUsrQixJQUF6QixFQUErQjlCLE9BQS9CO0FBQ0g7OztpQ0FDWTtBQUNULFVBQU16QixVQUFVLEdBQUc0RCxNQUFNLENBQUNDLGdCQUExQjtBQURTLFVBRUQvRCxLQUZDLEdBRTZCLElBRjdCLENBRURBLEtBRkM7QUFBQSxVQUVNQyxNQUZOLEdBRTZCLElBRjdCLENBRU1BLE1BRk47QUFBQSxVQUVjOEMsVUFGZCxHQUU2QixJQUY3QixDQUVjQSxVQUZkO0FBR1QsVUFBSWlCLFdBQVcsR0FBRzVELElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxLQUFYLENBQWxCO0FBQ0EsVUFBSWlFLFlBQVksR0FBRzdELElBQUksQ0FBQ0MsS0FBTCxDQUFXSixNQUFYLENBQW5COztBQUNBLFVBQUk4QyxVQUFKLEVBQWdCO0FBQ1ppQixtQkFBVyxHQUFHRixNQUFNLENBQUNJLFVBQXJCO0FBQ0FELG9CQUFZLEdBQUdILE1BQU0sQ0FBQ0ssV0FBdEI7QUFDSDs7QUFDRCxXQUFLZCxNQUFMLENBQVl2RSxDQUFaLEdBQWdCb0IsVUFBaEI7QUFDQSxXQUFLbUQsTUFBTCxDQUFZZSxDQUFaLEdBQWdCbEUsVUFBaEI7QUFDQSxXQUFLMEIsT0FBTCxDQUFheUMsT0FBYixDQUFxQkwsV0FBckIsRUFBa0NDLFlBQWxDLEVBQWdEL0QsVUFBaEQ7QUFDSDs7O2tDQUNxQjtBQUFBLFVBQVZrRCxJQUFVLHVFQUFILENBQUc7O0FBQ2xCLFVBQUksS0FBS0QsTUFBVCxFQUFpQjtBQUNiO0FBQ0g7O0FBQ0QsV0FBS21CLFVBQUw7O0FBQ0EsVUFBSSxLQUFLdEIsYUFBVCxFQUF3QjtBQUNwQixhQUFLZCxNQUFMLENBQVlrQixJQUFaO0FBQ0g7O0FBQ0QsVUFBSSxLQUFLSCxhQUFULEVBQXdCO0FBQ3BCLGFBQUt2QixNQUFMO0FBQ0g7O0FBQ0QsV0FBSzZDLGVBQUw7QUFDSDs7O3NDQUNpQjtBQUNkQywyQkFBcUIsQ0FBQyxLQUFLbEIsY0FBTixDQUFyQjtBQUNIOzs7eUNBQ29CbUIsSyxFQUFPO0FBQ3hCLFVBQUksS0FBS3RCLE1BQVQsRUFBaUI7QUFDYjtBQUNIOztBQUNELFVBQUksQ0FBQyxLQUFLRCxjQUFWLEVBQTBCO0FBQ3RCO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDLEtBQUtPLElBQVYsRUFBZ0I7QUFDWjtBQUNIOztBQVR1QixVQVVoQmxDLElBVmdCLEdBVUlrRCxLQVZKLENBVWhCbEQsSUFWZ0I7QUFBQSxVQVVWbUQsRUFWVSxHQVVJRCxLQVZKLENBVVZDLEVBVlU7QUFBQSxVQVVOQyxDQVZNLEdBVUlGLEtBVkosQ0FVTkUsQ0FWTTtBQUFBLFVBVUhDLENBVkcsR0FVSUgsS0FWSixDQVVIRyxDQVZHO0FBV3hCLFVBQU1sQixJQUFJLEdBQUc7QUFDVDlCLGVBQU8sRUFBRSxLQUFLQSxPQURMO0FBRVQrQixhQUFLLEVBQUUsQ0FGRTtBQUdUTixjQUFNLEVBQUVULFlBSEM7QUFJVGlDLGFBQUssRUFBRTtBQUFFRixXQUFDLEVBQURBLENBQUY7QUFBS0MsV0FBQyxFQUFEQTtBQUFMLFNBSkU7QUFLVEUsY0FBTSxFQUFFO0FBQUVILFdBQUMsRUFBREEsQ0FBRjtBQUFLQyxXQUFDLEVBQURBO0FBQUwsU0FMQztBQU1UckQsWUFBSSxFQUFKQSxJQU5TO0FBT1RtRCxVQUFFLEVBQUZBO0FBUFMsT0FBYjtBQVNBLFVBQU0vQyxPQUFPLEdBQUcsS0FBS0MsT0FBTCxDQUFhUyxpQkFBYixDQUErQixLQUFLb0IsSUFBcEMsRUFBMENDLElBQTFDLENBQWhCO0FBQ0EsV0FBSzlCLE9BQUwsQ0FBYVEsT0FBYixDQUFxQixLQUFLcUIsSUFBMUIsRUFBZ0M5QixPQUFoQztBQUNIOzs7MkJBQ007QUFDSG9ELGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7O0FBQ0EsVUFBSSxLQUFLN0IsTUFBVCxFQUFpQjtBQUNiLGFBQUtDLElBQUwsR0FBWSxDQUFDLENBQWI7QUFDQSxhQUFLRCxNQUFMLEdBQWMsS0FBZDtBQUNBLGFBQUtvQixlQUFMO0FBQ0g7QUFDSjs7OzRCQUNPO0FBQ0pRLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQSxXQUFLN0IsTUFBTCxHQUFjLElBQWQ7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0dMO0FBQ08sSUFBTThCLFNBQWI7QUFDSSx1QkFBYztBQUFBOztBQUNWLFNBQUtDLFNBQUwsR0FBaUIsSUFBSUMsR0FBSixFQUFqQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsSUFBSUMsR0FBSixFQUFqQjtBQUNIOztBQUpMO0FBQUE7QUFBQSx3QkFLUUMsS0FMUixFQUtlO0FBQ1AsVUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDUixlQUFPLElBQVA7QUFDSDs7QUFDRCxVQUFJQyxRQUFRLEdBQUcsS0FBS0wsU0FBTCxDQUFlTSxHQUFmLENBQW1CRixLQUFuQixDQUFmOztBQUNBLFVBQUksQ0FBQ0MsUUFBTCxFQUFlO0FBQ1hBLGdCQUFRLEdBQUcsS0FBS0UsT0FBTCxDQUFhSCxLQUFiLENBQVg7QUFDQSxhQUFLSixTQUFMLENBQWV6QyxHQUFmLENBQW1CNkMsS0FBbkIsRUFBMEJDLFFBQTFCO0FBQ0g7O0FBQ0QsYUFBT0EsUUFBUDtBQUNIO0FBZkw7QUFBQTtBQUFBLHdCQWdCUUQsS0FoQlIsRUFnQmVDLFFBaEJmLEVBZ0J5QjtBQUNqQixXQUFLTCxTQUFMLENBQWV6QyxHQUFmLENBQW1CNkMsS0FBbkIsRUFBMEJDLFFBQTFCO0FBQ0g7QUFsQkw7QUFBQTtBQUFBLDJCQW1CV0QsS0FuQlgsRUFtQmtCO0FBQ1YsV0FBS0osU0FBTCxXQUFzQkksS0FBdEI7QUFDSDtBQXJCTDtBQUFBO0FBQUEsNEJBc0JZO0FBQ0osV0FBS0osU0FBTCxDQUFldEIsS0FBZjtBQUNIO0FBeEJMO0FBQUE7QUFBQSw0QkF5QlkwQixLQXpCWixFQXlCbUI7QUFBQSxpREFDWSxLQUFLRixTQURqQjtBQUFBOztBQUFBO0FBQ1gsNERBQXVDO0FBQUEsY0FBNUJNLFFBQTRCO0FBQ25DLGNBQU1ILFFBQVEsR0FBR0csUUFBUSxDQUFDSixLQUFELENBQXpCOztBQUNBLGNBQUlDLFFBQUosRUFBYztBQUNWLG1CQUFPQSxRQUFQO0FBQ0g7QUFDSjtBQU5VO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT1hJLCtEQUFBLGtDQUF3Q0wsS0FBeEM7QUFDQSxhQUFPLElBQVA7QUFDSDtBQWxDTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNxQjlFLE87QUFDakIscUJBQWM7QUFBQTs7QUFDVixTQUFLb0YsV0FBTCxHQUFtQixFQUFuQjtBQUNBLFNBQUtwRCxjQUFMLEdBQXNCLElBQUkyQyxHQUFKLEVBQXRCO0FBQ0EsU0FBS3pDLGNBQUwsR0FBc0IsSUFBSXlDLEdBQUosRUFBdEI7QUFDQSxTQUFLeEMsZUFBTCxHQUF1QixJQUFJd0MsR0FBSixFQUF2QjtBQUNBLFNBQUtVLGdCQUFMLEdBQXdCLElBQUlWLEdBQUosRUFBeEI7QUFDQSxTQUFLRCxTQUFMLEdBQWlCLElBQUlELGlEQUFKLEVBQWpCO0FBQ0g7Ozs7MkJBQ010RSxTLEVBQVdnQixPLEVBQVM7QUFDdkIsVUFBSUEsT0FBTyxDQUFDZ0MsS0FBUixHQUFnQixLQUFLaUMsV0FBekIsRUFBc0M7QUFDbEM7QUFDSDs7QUFDRCxVQUFJLENBQUNuRixzRUFBQSxDQUFvQkUsU0FBcEIsQ0FBTCxFQUFxQztBQUNqQztBQUNIOztBQUNELFdBQUtrRixnQkFBTCxDQUFzQkMsT0FBdEIsQ0FBOEIsVUFBQ0MsT0FBRCxFQUFVQyxRQUFWLEVBQXVCO0FBQ2pELFlBQUlyRixTQUFTLENBQUNxRixRQUFELENBQWIsRUFBeUI7QUFDckJELGlCQUFPLENBQUNwRixTQUFELEVBQVlnQixPQUFaLENBQVA7QUFDSDtBQUNKLE9BSkQ7O0FBS0EsVUFBSWhCLFNBQVMsQ0FBQ3NGLFFBQWQsRUFBd0I7QUFDcEJ0RixpQkFBUyxDQUFDc0YsUUFBVixDQUFtQnRFLE9BQU8sQ0FBQ3lCLElBQTNCO0FBQ0g7O0FBQ0QsVUFBTTJDLE9BQU8sR0FBRyxLQUFLdkQsY0FBTCxDQUFvQmdELEdBQXBCLENBQXdCN0UsU0FBUyxDQUFDWSxJQUFsQyxDQUFoQjs7QUFDQSxVQUFJd0UsT0FBSixFQUFhO0FBQ1RBLGVBQU8sQ0FBQ3BGLFNBQUQsRUFBWWdCLE9BQVosQ0FBUDtBQUNIO0FBQ0o7OzsyQkFDTWhCLFMsRUFBV2dCLE8sRUFBUztBQUN2QixVQUFJQSxPQUFPLENBQUNnQyxLQUFSLEdBQWdCLEtBQUtpQyxXQUF6QixFQUFzQztBQUNsQztBQUNIOztBQUNELFVBQUksQ0FBQ25GLHNFQUFBLENBQW9CRSxTQUFwQixDQUFMLEVBQXFDO0FBQ2pDO0FBQ0g7O0FBQ0QsVUFBTW9GLE9BQU8sR0FBRyxLQUFLckQsY0FBTCxDQUFvQjhDLEdBQXBCLENBQXdCN0UsU0FBUyxDQUFDWSxJQUFsQyxDQUFoQjs7QUFDQSxVQUFJd0UsT0FBSixFQUFhO0FBQ1RBLGVBQU8sQ0FBQ3BGLFNBQUQsRUFBWWdCLE9BQVosQ0FBUDtBQUNIO0FBQ0o7Ozs0QkFDT2hCLFMsRUFBV2dCLE8sRUFBUztBQUN4QixVQUFJQSxPQUFPLENBQUNnQyxLQUFSLEdBQWdCLEtBQUtpQyxXQUF6QixFQUFzQztBQUNsQyxlQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFJLENBQUNuRixzRUFBQSxDQUFvQkUsU0FBcEIsQ0FBTCxFQUFxQztBQUNqQyxlQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFJLENBQUN1Rix5RUFBQSxDQUF5QnZGLFNBQXpCLENBQUwsRUFBMEM7QUFDdEMsZUFBTyxLQUFQO0FBQ0g7O0FBQ0QsVUFBTW9GLE9BQU8sR0FBRyxLQUFLcEQsZUFBTCxDQUFxQjZDLEdBQXJCLENBQXlCN0UsU0FBUyxDQUFDWSxJQUFuQyxDQUFoQjs7QUFDQSxVQUFJd0UsT0FBSixFQUFhO0FBQUEsNkJBQ1FwRSxPQUFPLENBQUNrRCxLQURoQjtBQUFBLFlBQ0RGLENBREMsa0JBQ0RBLENBREM7QUFBQSxZQUNFQyxDQURGLGtCQUNFQSxDQURGO0FBRVQsWUFBTXRDLE1BQU0sR0FBR3lELE9BQU8sQ0FBQ3BGLFNBQUQsRUFBWWdCLE9BQVosQ0FBdEI7O0FBQ0EsWUFBSVcsTUFBSixFQUFZO0FBQ1I0RCxnRkFBQSxDQUFzQnZGLFNBQXRCLEVBQWlDZ0IsT0FBTyxDQUFDSixJQUF6QyxFQUErQ29ELENBQS9DLEVBQWtEQyxDQUFsRCxFQUFxRGpELE9BQU8sQ0FBQytDLEVBQTdEO0FBQ0g7O0FBQ0QsWUFBSS9DLE9BQU8sQ0FBQ0osSUFBUixLQUFpQixhQUFyQixFQUFvQztBQUNoQyxjQUFJZSxNQUFNLElBQUksQ0FBQzNCLFNBQVMsQ0FBQ3dGLFdBQXpCLEVBQXNDO0FBQ2xDRCxrRkFBQSxDQUFzQnZGLFNBQXRCLEVBQWlDLGFBQWpDLEVBQWdEZ0UsQ0FBaEQsRUFBbURDLENBQW5ELEVBQXNEakQsT0FBTyxDQUFDK0MsRUFBOUQ7QUFDSCxXQUZELE1BR0ssSUFBSSxDQUFDcEMsTUFBRCxJQUFXM0IsU0FBUyxDQUFDd0YsV0FBekIsRUFBc0M7QUFDdkNELGtGQUFBLENBQXNCdkYsU0FBdEIsRUFBaUMsWUFBakMsRUFBK0NnRSxDQUEvQyxFQUFrREMsQ0FBbEQsRUFBcURqRCxPQUFPLENBQUMrQyxFQUE3RDtBQUNIOztBQUNEL0QsbUJBQVMsQ0FBQ3dGLFdBQVYsR0FBd0I3RCxNQUF4QjtBQUNIOztBQUNELGVBQU9BLE1BQVA7QUFDSDs7QUFDRCxhQUFPLEtBQVA7QUFDSDs7O3FDQUNnQjNCLFMsRUFBV3lGLE0sRUFBUTtBQUNoQyxhQUFPO0FBQ0hoRCxZQUFJLEVBQUVnRCxNQUFNLENBQUNoRCxJQURWO0FBRUhPLGFBQUssRUFBRXlDLE1BQU0sQ0FBQ3pDLEtBQVAsR0FBZSxDQUZuQjtBQUdIL0IsZUFBTyxFQUFFd0UsTUFBTSxDQUFDeEU7QUFIYixPQUFQO0FBS0g7OztxQ0FDZ0JqQixTLEVBQVd5RixNLEVBQVE7QUFDaEMsVUFBTS9DLE1BQU0sR0FBR2dELHNFQUFBLENBQW9CMUYsU0FBcEIsQ0FBZjtBQUNBLFVBQU1rRCxjQUFjLEdBQUd3Qyw4RUFBQSxDQUE0QjFGLFNBQTVCLENBQXZCO0FBQ0EsYUFBTztBQUNIZ0QsYUFBSyxFQUFFeUMsTUFBTSxDQUFDekMsS0FBUCxHQUFlLENBRG5CO0FBRUgvQixlQUFPLEVBQUV3RSxNQUFNLENBQUN4RSxPQUZiO0FBR0h5QixjQUFNLEVBQUVSLG9EQUFBLENBQWN1RCxNQUFNLENBQUMvQyxNQUFyQixFQUE2QkEsTUFBN0IsQ0FITDtBQUlIUSxzQkFBYyxFQUFFOUUsNERBQUEsQ0FBc0JxSCxNQUFNLENBQUN2QyxjQUE3QixFQUE2Q0EsY0FBN0M7QUFKYixPQUFQO0FBTUg7OztzQ0FDaUJsRCxTLEVBQVd5RixNLEVBQVE7QUFDakMsVUFBTS9DLE1BQU0sR0FBR2dELHNFQUFBLENBQW9CMUYsU0FBcEIsQ0FBZjtBQUNBLFVBQU0yRixpQkFBaUIsR0FBR3pELG9EQUFBLENBQWN1RCxNQUFNLENBQUMvQyxNQUFyQixFQUE2QkEsTUFBN0IsQ0FBMUI7QUFDQSxhQUFPO0FBQ0hNLGFBQUssRUFBRXlDLE1BQU0sQ0FBQ3pDLEtBQVAsR0FBZSxDQURuQjtBQUVIcEMsWUFBSSxFQUFFNkUsTUFBTSxDQUFDN0UsSUFGVjtBQUdISyxlQUFPLEVBQUV3RSxNQUFNLENBQUN4RSxPQUhiO0FBSUhrRCxjQUFNLEVBQUVzQixNQUFNLENBQUN0QixNQUpaO0FBS0h6QixjQUFNLEVBQUVpRCxpQkFMTDtBQU1IekIsYUFBSyxFQUFFaEMsbUVBQUEsQ0FBNkJ5RCxpQkFBN0IsRUFBZ0RGLE1BQU0sQ0FBQ3RCLE1BQXZEO0FBTkosT0FBUDtBQVFIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYk8sU0FBU3lCLDZCQUFULENBQXVDQyxNQUF2QyxFQUErQyxDQUNyRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RELFNBQVNDLGFBQVQsQ0FBdUJELE1BQXZCLEVBQStCL0IsS0FBL0IsRUFBc0NsRCxJQUF0QyxFQUE0QztBQUFBLE1BQ2hDbUYsT0FEZ0MsR0FDcEJGLE1BQU0sQ0FBQzVFLE9BRGEsQ0FDaEM4RSxPQURnQztBQUV4QyxNQUFNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQ0UscUJBQVIsRUFBbkI7QUFDQSxNQUFNakMsQ0FBQyxHQUFHRixLQUFLLENBQUNvQyxPQUFOLEdBQWdCRixVQUFVLENBQUNHLElBQTNCLEdBQWtDSixPQUFPLENBQUNLLFVBQXBEO0FBQ0EsTUFBTW5DLENBQUMsR0FBR0gsS0FBSyxDQUFDdUMsT0FBTixHQUFnQkwsVUFBVSxDQUFDTSxHQUEzQixHQUFpQ1AsT0FBTyxDQUFDUSxTQUFuRDtBQUNBVixRQUFNLENBQUNXLG9CQUFQLENBQTRCO0FBQ3hCNUYsUUFBSSxFQUFKQSxJQUR3QjtBQUNsQm9ELEtBQUMsRUFBREEsQ0FEa0I7QUFDZkMsS0FBQyxFQUFEQTtBQURlLEdBQTVCO0FBR0FILE9BQUssQ0FBQzJDLGNBQU47QUFDSDs7QUFDTSxTQUFTQywwQkFBVCxDQUFvQ2IsTUFBcEMsRUFBNEM7QUFBQSxNQUN2Q0UsT0FEdUMsR0FDM0JGLE1BQU0sQ0FBQzVFLE9BRG9CLENBQ3ZDOEUsT0FEdUM7QUFFL0NBLFNBQU8sQ0FBQ1ksZ0JBQVIsQ0FBeUIsV0FBekIsRUFBc0MsVUFBQzdDLEtBQUQsRUFBVztBQUM3Q2dDLGlCQUFhLENBQUNELE1BQUQsRUFBUy9CLEtBQVQsRUFBZ0IsYUFBaEIsQ0FBYjtBQUNILEdBRkQ7QUFHQWlDLFNBQU8sQ0FBQ1ksZ0JBQVIsQ0FBeUIsU0FBekIsRUFBb0MsVUFBQzdDLEtBQUQsRUFBVztBQUMzQ2dDLGlCQUFhLENBQUNELE1BQUQsRUFBUy9CLEtBQVQsRUFBZ0IsV0FBaEIsQ0FBYjtBQUNILEdBRkQ7QUFHQWlDLFNBQU8sQ0FBQ1ksZ0JBQVIsQ0FBeUIsV0FBekIsRUFBc0MsVUFBQzdDLEtBQUQsRUFBVztBQUM3Q2dDLGlCQUFhLENBQUNELE1BQUQsRUFBUy9CLEtBQVQsRUFBZ0IsYUFBaEIsQ0FBYjtBQUNILEdBRkQ7QUFHSCxDOzs7Ozs7Ozs7Ozs7Ozs7QUNyQkQsU0FBU2dDLGFBQVQsQ0FBdUJELE1BQXZCLEVBQStCL0IsS0FBL0IsRUFBc0NsRCxJQUF0QyxFQUE0QztBQUFBLE1BQ2hDbUYsT0FEZ0MsR0FDcEJGLE1BQU0sQ0FBQzVFLE9BRGEsQ0FDaEM4RSxPQURnQztBQUV4QyxNQUFNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQ0UscUJBQVIsRUFBbkI7O0FBQ0EsT0FBSyxJQUFJL0UsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzRDLEtBQUssQ0FBQzhDLGNBQU4sQ0FBcUJqRyxNQUF6QyxFQUFpRE8sQ0FBQyxFQUFsRCxFQUFzRDtBQUNsRCxRQUFNMkYsS0FBSyxHQUFHL0MsS0FBSyxDQUFDOEMsY0FBTixDQUFxQjFGLENBQXJCLENBQWQ7QUFDQSxRQUFNOEMsQ0FBQyxHQUFHNkMsS0FBSyxDQUFDWCxPQUFOLEdBQWdCRixVQUFVLENBQUNHLElBQTNCLEdBQWtDSixPQUFPLENBQUNLLFVBQXBEO0FBQ0EsUUFBTW5DLENBQUMsR0FBRzRDLEtBQUssQ0FBQ1IsT0FBTixHQUFnQkwsVUFBVSxDQUFDTSxHQUEzQixHQUFpQ1AsT0FBTyxDQUFDUSxTQUFuRDtBQUNBLFFBQU14QyxFQUFFLEdBQUc4QyxLQUFLLENBQUNDLFVBQWpCO0FBQ0FqQixVQUFNLENBQUNXLG9CQUFQLENBQTRCO0FBQ3hCNUYsVUFBSSxFQUFKQSxJQUR3QjtBQUNsQm9ELE9BQUMsRUFBREEsQ0FEa0I7QUFDZkMsT0FBQyxFQUFEQSxDQURlO0FBQ1pGLFFBQUUsRUFBRkE7QUFEWSxLQUE1QjtBQUdIOztBQUNERCxPQUFLLENBQUMyQyxjQUFOO0FBQ0g7O0FBQ00sU0FBU00sMEJBQVQsQ0FBb0NsQixNQUFwQyxFQUE0QztBQUFBLE1BQ3ZDRSxPQUR1QyxHQUMzQkYsTUFBTSxDQUFDNUUsT0FEb0IsQ0FDdkM4RSxPQUR1QztBQUUvQ0EsU0FBTyxDQUFDWSxnQkFBUixDQUF5QixZQUF6QixFQUF1QyxVQUFDN0MsS0FBRCxFQUFXO0FBQzlDZ0MsaUJBQWEsQ0FBQ0QsTUFBRCxFQUFTL0IsS0FBVCxFQUFnQixhQUFoQixDQUFiO0FBQ0gsR0FGRDtBQUdBaUMsU0FBTyxDQUFDWSxnQkFBUixDQUF5QixVQUF6QixFQUFxQyxVQUFDN0MsS0FBRCxFQUFXO0FBQzVDZ0MsaUJBQWEsQ0FBQ0QsTUFBRCxFQUFTL0IsS0FBVCxFQUFnQixXQUFoQixDQUFiO0FBQ0gsR0FGRDtBQUdBaUMsU0FBTyxDQUFDWSxnQkFBUixDQUF5QixXQUF6QixFQUFzQyxVQUFDN0MsS0FBRCxFQUFXO0FBQzdDZ0MsaUJBQWEsQ0FBQ0QsTUFBRCxFQUFTL0IsS0FBVCxFQUFnQixhQUFoQixDQUFiO0FBQ0gsR0FGRDtBQUdILEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJNLElBQUlrRCxLQUFKOztBQUNQLENBQUMsVUFBVUEsS0FBVixFQUFpQjtBQUNkLFdBQVNDLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjdILEtBQXJCLEVBQTRCO0FBQUEsUUFDaEI4SCxNQURnQixHQUNMRCxLQURLLENBQ2hCQyxNQURnQjs7QUFFeEIsUUFBSUEsTUFBSixFQUFZO0FBQ1IsYUFBTyxDQUFDQSxNQUFELEdBQVU5SCxLQUFqQjtBQUNIOztBQUNELFdBQU8sQ0FBUDtBQUNIOztBQUNEMkgsT0FBSyxDQUFDQyxJQUFOLEdBQWFBLElBQWI7O0FBQ0EsV0FBU0csSUFBVCxDQUFjRixLQUFkLEVBQXFCNUgsTUFBckIsRUFBNkI7QUFBQSxRQUNqQitILE1BRGlCLEdBQ05ILEtBRE0sQ0FDakJHLE1BRGlCOztBQUV6QixRQUFJQSxNQUFKLEVBQVk7QUFDUixhQUFPLENBQUNBLE1BQUQsR0FBVS9ILE1BQWpCO0FBQ0g7O0FBQ0QsV0FBTyxDQUFQO0FBQ0g7O0FBQ0QwSCxPQUFLLENBQUNJLElBQU4sR0FBYUEsSUFBYjtBQUNILENBakJELEVBaUJHSixLQUFLLEtBQUtBLEtBQUssR0FBRyxFQUFiLENBakJSLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ08sSUFBSXpCLE9BQUo7O0FBQ1AsQ0FBQyxVQUFVQSxPQUFWLEVBQW1CO0FBQ2hCLFdBQVMrQixhQUFULENBQXVCQyxPQUF2QixFQUFnQztBQUM1QixXQUFPLENBQUMsQ0FBQ0EsT0FBTyxDQUFDL0IsV0FBakI7QUFDSDs7QUFDREQsU0FBTyxDQUFDK0IsYUFBUixHQUF3QkEsYUFBeEI7O0FBQ0EsV0FBU0UsZ0JBQVQsQ0FBMEJELE9BQTFCLEVBQW1DO0FBQUE7O0FBQy9CLG9DQUFPQSxPQUFPLENBQUNoRixjQUFmLHlFQUFpQyxJQUFqQztBQUNIOztBQUNEZ0QsU0FBTyxDQUFDaUMsZ0JBQVIsR0FBMkJBLGdCQUEzQjs7QUFDQSxXQUFTMUIsYUFBVCxDQUF1QnlCLE9BQXZCLEVBQWdDM0csSUFBaEMsRUFBc0NvRCxDQUF0QyxFQUF5Q0MsQ0FBekMsRUFBNENGLEVBQTVDLEVBQWdEO0FBQzVDLFFBQU0wRCxXQUFXLGVBQVE3RyxJQUFJLENBQUM4RyxNQUFMLENBQVksQ0FBWixFQUFlQyxXQUFmLEVBQVIsU0FBdUMvRyxJQUFJLENBQUNnSCxLQUFMLENBQVcsQ0FBWCxDQUF2QyxDQUFqQjs7QUFDQSxRQUFJSCxXQUFKLEVBQWlCO0FBQ2IsVUFBSUYsT0FBTyxDQUFDRSxXQUFELENBQVgsRUFBMEI7QUFDdEIsWUFBTTNELEtBQUssR0FBRztBQUNWbEQsY0FBSSxFQUFKQSxJQURVO0FBQ0pvRCxXQUFDLEVBQURBLENBREk7QUFDREMsV0FBQyxFQUFEQSxDQURDO0FBQ0VGLFlBQUUsRUFBRkE7QUFERixTQUFkO0FBR0F3RCxlQUFPLENBQUNFLFdBQUQsQ0FBUCxDQUFxQjNELEtBQXJCO0FBQ0g7QUFDSixLQVBELE1BUUs7QUFDRGtCLCtEQUFBLG9DQUEwQ3BFLElBQTFDO0FBQ0g7QUFDSjs7QUFDRDJFLFNBQU8sQ0FBQ08sYUFBUixHQUF3QkEsYUFBeEI7QUFDSCxDQXhCRCxFQXdCR1AsT0FBTyxLQUFLQSxPQUFPLEdBQUcsRUFBZixDQXhCVixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZPLElBQUlzQyxNQUFKOztBQUNQLENBQUMsVUFBVUEsTUFBVixFQUFrQjtBQUNmLFdBQVNDLFdBQVQsQ0FBcUJDLE1BQXJCLEVBQTZCL0csT0FBN0IsRUFBc0M7QUFBQSxRQUMxQmdILEdBRDBCLEdBQ2xCRCxNQURrQixDQUMxQkMsR0FEMEI7O0FBRWxDLFFBQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sYUFBTyxJQUFQO0FBQ0g7O0FBQ0QsV0FBT2hILE9BQU8sQ0FBQ0MsT0FBUixDQUFnQnNELFNBQWhCLENBQTBCTSxHQUExQixDQUE4Qm1ELEdBQTlCLENBQVA7QUFDSDs7QUFDREgsUUFBTSxDQUFDQyxXQUFQLEdBQXFCQSxXQUFyQjs7QUFDQSxXQUFTRyxRQUFULENBQWtCRixNQUFsQixFQUEwQi9HLE9BQTFCLEVBQW1DO0FBQy9CLFFBQU00RCxRQUFRLEdBQUdrRCxXQUFXLENBQUNDLE1BQUQsRUFBUy9HLE9BQVQsQ0FBNUI7QUFDQSxXQUFPLENBQUMsRUFBQzRELFFBQUQsYUFBQ0EsUUFBRCx1QkFBQ0EsUUFBUSxDQUFFc0QsTUFBWCxDQUFSO0FBQ0g7O0FBQ0RMLFFBQU0sQ0FBQ0ksUUFBUCxHQUFrQkEsUUFBbEI7QUFDSCxDQWRELEVBY0dKLE1BQU0sS0FBS0EsTUFBTSxHQUFHLEVBQWQsQ0FkVCxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RPLElBQUluQyxTQUFKOztBQUNQLENBQUMsVUFBVUEsU0FBVixFQUFxQjtBQUNsQixXQUFTeUMsU0FBVCxDQUFtQkMsU0FBbkIsRUFBOEI7QUFBQTs7QUFBQSxRQUNsQjFGLE1BRGtCLEdBQ1AwRixTQURPLENBQ2xCMUYsTUFEa0I7O0FBRTFCLFFBQUlBLE1BQUosRUFBWTtBQUFBOztBQUNSLGFBQU87QUFDSHZFLFNBQUMsZUFBRXVFLE1BQU0sQ0FBQ3ZFLENBQVQsaURBQWMsQ0FEWjtBQUVIRCxTQUFDLGVBQUV3RSxNQUFNLENBQUN4RSxDQUFULGlEQUFjLENBRlo7QUFHSG1LLFNBQUMsZUFBRTNGLE1BQU0sQ0FBQzJGLENBQVQsaURBQWMsQ0FIWjtBQUlINUUsU0FBQyxlQUFFZixNQUFNLENBQUNlLENBQVQsaURBQWMsQ0FKWjtBQUtINkUsVUFBRSxnQkFBRTVGLE1BQU0sQ0FBQzRGLEVBQVQsbURBQWUsQ0FMZDtBQU1IQyxVQUFFLGdCQUFFN0YsTUFBTSxDQUFDNkYsRUFBVCxtREFBZTtBQU5kLE9BQVA7QUFRSDs7QUFYeUIsUUFZbEJDLFFBWmtCLEdBWUxKLFNBWkssQ0FZbEJJLFFBWmtCO0FBYTFCLFFBQU1DLE1BQU0sZ0NBQUdMLFNBQVMsQ0FBQ0ssTUFBYixpRUFBdUJMLFNBQVMsQ0FBQ00sS0FBakMsdUNBQTBDLENBQXREO0FBQ0EsUUFBTUMsTUFBTSxpQ0FBR1AsU0FBUyxDQUFDTyxNQUFiLGlFQUF1QlAsU0FBUyxDQUFDTSxLQUFqQyx5Q0FBMEMsQ0FBdEQ7QUFDQSxRQUFNSixFQUFFLG1CQUFHRixTQUFTLENBQUNwRSxDQUFiLHVEQUFrQixDQUExQjtBQUNBLFFBQU11RSxFQUFFLG1CQUFHSCxTQUFTLENBQUNuRSxDQUFiLHVEQUFrQixDQUExQjs7QUFDQSxRQUFJdUUsUUFBSixFQUFjO0FBQ1YsVUFBTUksR0FBRyxHQUFHbkosSUFBSSxDQUFDbUosR0FBTCxDQUFTSixRQUFULENBQVo7QUFDQSxVQUFNSyxHQUFHLEdBQUdwSixJQUFJLENBQUNvSixHQUFMLENBQVNMLFFBQVQsQ0FBWjtBQUNBLGFBQU87QUFDSHJLLFNBQUMsRUFBRXlLLEdBQUcsR0FBR0gsTUFETjtBQUVIdkssU0FBQyxFQUFFMkssR0FBRyxHQUFHSixNQUZOO0FBR0hKLFNBQUMsRUFBRSxDQUFDUSxHQUFELEdBQU9GLE1BSFA7QUFJSGxGLFNBQUMsRUFBRW1GLEdBQUcsR0FBR0QsTUFKTjtBQUtITCxVQUFFLEVBQUZBLEVBTEc7QUFNSEMsVUFBRSxFQUFGQTtBQU5HLE9BQVA7QUFRSDs7QUFDRCxXQUFPO0FBQ0hwSyxPQUFDLEVBQUVzSyxNQURBO0FBRUh2SyxPQUFDLEVBQUUsQ0FGQTtBQUdIbUssT0FBQyxFQUFFLENBSEE7QUFJSDVFLE9BQUMsRUFBRWtGLE1BSkE7QUFLSEwsUUFBRSxFQUFGQSxFQUxHO0FBTUhDLFFBQUUsRUFBRkE7QUFORyxLQUFQO0FBUUg7O0FBQ0Q3QyxXQUFTLENBQUN5QyxTQUFWLEdBQXNCQSxTQUF0Qjs7QUFDQSxXQUFTVyxpQkFBVCxDQUEyQlYsU0FBM0IsRUFBc0M7QUFBQTs7QUFBQSxRQUMxQmxGLGNBRDBCLEdBQ1BrRixTQURPLENBQzFCbEYsY0FEMEI7O0FBRWxDLFFBQUlBLGNBQUosRUFBb0I7QUFBQTs7QUFDaEIsYUFBTztBQUNIdkUsdUJBQWUsMkJBQUV1RSxjQUFjLENBQUN2RSxlQUFqQix5RUFBb0MsQ0FEaEQ7QUFFSE4scUJBQWEsMkJBQUU2RSxjQUFjLENBQUM3RSxhQUFqQix5RUFBa0MsQ0FGNUM7QUFHSEUsdUJBQWUsMkJBQUUyRSxjQUFjLENBQUMzRSxlQUFqQix5RUFBb0MsQ0FIaEQ7QUFJSEUsc0JBQWMsMkJBQUV5RSxjQUFjLENBQUN6RSxjQUFqQix5RUFBbUMsQ0FKOUM7QUFLSEcsbUJBQVcsNEJBQUVzRSxjQUFjLENBQUN0RSxXQUFqQiwyRUFBZ0MsQ0FMeEM7QUFNSE4saUJBQVMsMkJBQUU0RSxjQUFjLENBQUM1RSxTQUFqQix5RUFBOEIsQ0FOcEM7QUFPSEUsbUJBQVcsNEJBQUUwRSxjQUFjLENBQUMxRSxXQUFqQiwyRUFBZ0MsQ0FQeEM7QUFRSEUsa0JBQVUsMkJBQUV3RSxjQUFjLENBQUN4RSxVQUFqQix5RUFBK0I7QUFSdEMsT0FBUDtBQVVIOztBQWJpQyxRQWMxQnFLLElBZDBCLEdBY2pCWCxTQWRpQixDQWMxQlcsSUFkMEI7O0FBZWxDLFFBQUlBLElBQUosRUFBVTtBQUFBOztBQUFBLHdCQUMyQkEsSUFEM0IsQ0FDRWxMLEtBREY7QUFBQSxVQUNFQSxLQURGLDRCQUNVLENBRFY7QUFBQSx3QkFDMkJrTCxJQUQzQixDQUNhQyxLQURiO0FBQUEsVUFDYUEsS0FEYiw0QkFDcUIsQ0FEckI7QUFFTixVQUFNQyxhQUFhLEdBQUcsSUFBSUQsS0FBMUI7QUFDQSxVQUFNaEwsQ0FBQyxHQUFJSCxLQUFLLElBQUksRUFBVixHQUFnQixJQUExQjtBQUNBLFVBQU1JLENBQUMsR0FBSUosS0FBSyxJQUFJLENBQVYsR0FBZSxJQUF6QjtBQUNBLFVBQU1LLENBQUMsR0FBR0wsS0FBSyxHQUFHLElBQWxCO0FBQ0EsYUFBTztBQUNIYyx1QkFBZSxzQkFBRXlKLFNBQVMsQ0FBQ3RLLEtBQVosK0RBQXFCLENBRGpDO0FBRUhPLHFCQUFhLEVBQUU0SyxhQUZaO0FBR0gxSyx1QkFBZSxFQUFFMEssYUFIZDtBQUlIeEssc0JBQWMsRUFBRXdLLGFBSmI7QUFLSHJLLG1CQUFXLEVBQUUsQ0FMVjtBQU1ITixpQkFBUyxFQUFFTixDQUFDLEdBQUdnTCxLQU5aO0FBT0h4SyxtQkFBVyxFQUFFUCxDQUFDLEdBQUcrSyxLQVBkO0FBUUh0SyxrQkFBVSxFQUFFUixDQUFDLEdBQUc4SztBQVJiLE9BQVA7QUFVSDs7QUFDRCxXQUFPO0FBQ0hySyxxQkFBZSx1QkFBRXlKLFNBQVMsQ0FBQ3RLLEtBQVosaUVBQXFCLENBRGpDO0FBRUhPLG1CQUFhLEVBQUUsQ0FGWjtBQUdIRSxxQkFBZSxFQUFFLENBSGQ7QUFJSEUsb0JBQWMsRUFBRSxDQUpiO0FBS0hHLGlCQUFXLEVBQUUsQ0FMVjtBQU1ITixlQUFTLEVBQUUsQ0FOUjtBQU9IRSxpQkFBVyxFQUFFLENBUFY7QUFRSEUsZ0JBQVUsRUFBRTtBQVJULEtBQVA7QUFVSDs7QUFDRGdILFdBQVMsQ0FBQ29ELGlCQUFWLEdBQThCQSxpQkFBOUI7QUFDSCxDQXBGRCxFQW9GR3BELFNBQVMsS0FBS0EsU0FBUyxHQUFHLEVBQWpCLENBcEZaLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRHFCVixLOzs7Ozs7OzBCQUNHO0FBQUE7O0FBQ2hCLGtCQUFBWixPQUFPLEVBQUNDLEdBQVI7QUFDSDs7OzRCQUNxQjtBQUFBLHdDQUFONkUsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ2xCLFVBQU1uRixFQUFFLEdBQUdvRixNQUFNLENBQUNELElBQUQsQ0FBakI7QUFDQSxVQUFJRSxLQUFLLEdBQUcsS0FBS0MsTUFBTCxDQUFZeEUsR0FBWixDQUFnQmQsRUFBaEIsQ0FBWjs7QUFDQSxVQUFJLENBQUNxRixLQUFMLEVBQVk7QUFBQTs7QUFDUkEsYUFBSyxHQUFHLENBQVI7O0FBQ0EscUJBQUFoRixPQUFPLEVBQUNrRixLQUFSLGtCQUFpQkosSUFBakI7QUFDSDs7QUFDREUsV0FBSztBQUNMLFdBQUtDLE1BQUwsQ0FBWXZILEdBQVosQ0FBZ0JpQyxFQUFoQixFQUFvQnFGLEtBQXBCO0FBQ0g7Ozs4QkFDdUI7QUFBQSx5Q0FBTkYsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ3BCLFVBQU1uRixFQUFFLEdBQUdvRixNQUFNLENBQUNELElBQUQsQ0FBakI7QUFDQSxVQUFJRSxLQUFLLEdBQUcsS0FBS0csUUFBTCxDQUFjMUUsR0FBZCxDQUFrQmQsRUFBbEIsQ0FBWjs7QUFDQSxVQUFJLENBQUNxRixLQUFMLEVBQVk7QUFBQTs7QUFDUkEsYUFBSyxHQUFHLENBQVI7O0FBQ0EscUJBQUFoRixPQUFPLEVBQUNvRixJQUFSLGtCQUFnQk4sSUFBaEI7QUFDSDs7QUFDREUsV0FBSztBQUNMLFdBQUtHLFFBQUwsQ0FBY3pILEdBQWQsQ0FBa0JpQyxFQUFsQixFQUFzQnFGLEtBQXRCO0FBQ0g7Ozs7Ozs7QUFFTHBFLEtBQUssQ0FBQ3FFLE1BQU4sR0FBZSxJQUFJN0UsR0FBSixFQUFmO0FBQ0FRLEtBQUssQ0FBQ3VFLFFBQU4sR0FBaUIsSUFBSS9FLEdBQUosRUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQk8sSUFBSWlGLE1BQUo7O0FBQ1AsQ0FBQyxVQUFVQSxNQUFWLEVBQWtCO0FBQ2YsV0FBU0MsS0FBVCxHQUFpQjtBQUNiLFdBQU87QUFDSEMsVUFBSSxFQUFFQyxNQUFNLENBQUNDLFNBRFY7QUFFSEMsVUFBSSxFQUFFRixNQUFNLENBQUNDLFNBRlY7QUFHSEUsVUFBSSxFQUFFSCxNQUFNLENBQUNJLFNBSFY7QUFJSEMsVUFBSSxFQUFFTCxNQUFNLENBQUNJO0FBSlYsS0FBUDtBQU1IOztBQUNEUCxRQUFNLENBQUNDLEtBQVAsR0FBZUEsS0FBZjs7QUFDQSxXQUFTUSxPQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUFBLFFBQ2JSLElBRGEsR0FDZVEsTUFEZixDQUNiUixJQURhO0FBQUEsUUFDUEcsSUFETyxHQUNlSyxNQURmLENBQ1BMLElBRE87QUFBQSxRQUNEQyxJQURDLEdBQ2VJLE1BRGYsQ0FDREosSUFEQztBQUFBLFFBQ0tFLElBREwsR0FDZUUsTUFEZixDQUNLRixJQURMO0FBRXJCLFdBQU9OLElBQUksS0FBS0MsTUFBTSxDQUFDQyxTQUFoQixJQUNBQyxJQUFJLEtBQUtGLE1BQU0sQ0FBQ0MsU0FEaEIsSUFFQUUsSUFBSSxLQUFLSCxNQUFNLENBQUNJLFNBRmhCLElBR0FDLElBQUksS0FBS0wsTUFBTSxDQUFDSSxTQUh2QjtBQUlIOztBQUNEUCxRQUFNLENBQUNTLE9BQVAsR0FBaUJBLE9BQWpCOztBQUNBLFdBQVNFLFdBQVQsQ0FBcUJELE1BQXJCLEVBQTZCO0FBQUEsUUFDakJSLElBRGlCLEdBQ1dRLE1BRFgsQ0FDakJSLElBRGlCO0FBQUEsUUFDWEcsSUFEVyxHQUNXSyxNQURYLENBQ1hMLElBRFc7QUFBQSxRQUNMQyxJQURLLEdBQ1dJLE1BRFgsQ0FDTEosSUFESztBQUFBLFFBQ0NFLElBREQsR0FDV0UsTUFEWCxDQUNDRixJQUREO0FBRXpCLFdBQU87QUFDSGpHLE9BQUMsRUFBRTJGLElBREE7QUFFSDFGLE9BQUMsRUFBRTZGLElBRkE7QUFHSHpLLFdBQUssRUFBRTBLLElBQUksR0FBR0osSUFIWDtBQUlIckssWUFBTSxFQUFFMkssSUFBSSxHQUFHSDtBQUpaLEtBQVA7QUFNSDs7QUFDREwsUUFBTSxDQUFDVyxXQUFQLEdBQXFCQSxXQUFyQjs7QUFDQSxXQUFTQyxLQUFULENBQWVGLE1BQWYsRUFBdUJuRyxDQUF2QixFQUEwQjtBQUN0QixRQUFJbUcsTUFBTSxDQUFDUixJQUFQLEdBQWMzRixDQUFsQixFQUFxQjtBQUNqQm1HLFlBQU0sQ0FBQ1IsSUFBUCxHQUFjM0YsQ0FBZDtBQUNILEtBRkQsTUFHSyxJQUFJbUcsTUFBTSxDQUFDSixJQUFQLEdBQWMvRixDQUFsQixFQUFxQjtBQUN0Qm1HLFlBQU0sQ0FBQ0osSUFBUCxHQUFjL0YsQ0FBZDtBQUNIO0FBQ0o7O0FBQ0R5RixRQUFNLENBQUNZLEtBQVAsR0FBZUEsS0FBZjs7QUFDQSxXQUFTQyxLQUFULENBQWVILE1BQWYsRUFBdUJsRyxDQUF2QixFQUEwQjtBQUN0QixRQUFJa0csTUFBTSxDQUFDTCxJQUFQLEdBQWM3RixDQUFsQixFQUFxQjtBQUNqQmtHLFlBQU0sQ0FBQ0wsSUFBUCxHQUFjN0YsQ0FBZDtBQUNILEtBRkQsTUFHSyxJQUFJa0csTUFBTSxDQUFDRixJQUFQLEdBQWNoRyxDQUFsQixFQUFxQjtBQUN0QmtHLFlBQU0sQ0FBQ0YsSUFBUCxHQUFjaEcsQ0FBZDtBQUNIO0FBQ0o7O0FBQ0R3RixRQUFNLENBQUNhLEtBQVAsR0FBZUEsS0FBZjs7QUFDQSxXQUFTQyxJQUFULENBQWNKLE1BQWQsRUFBc0JuRyxDQUF0QixFQUF5QkMsQ0FBekIsRUFBNEI7QUFDeEIsUUFBSWtHLE1BQU0sQ0FBQ1IsSUFBUCxHQUFjM0YsQ0FBbEIsRUFBcUI7QUFDakJtRyxZQUFNLENBQUNSLElBQVAsR0FBYzNGLENBQWQ7QUFDSCxLQUZELE1BR0ssSUFBSW1HLE1BQU0sQ0FBQ0osSUFBUCxHQUFjL0YsQ0FBbEIsRUFBcUI7QUFDdEJtRyxZQUFNLENBQUNKLElBQVAsR0FBYy9GLENBQWQ7QUFDSDs7QUFDRCxRQUFJbUcsTUFBTSxDQUFDTCxJQUFQLEdBQWM3RixDQUFsQixFQUFxQjtBQUNqQmtHLFlBQU0sQ0FBQ0wsSUFBUCxHQUFjN0YsQ0FBZDtBQUNILEtBRkQsTUFHSyxJQUFJa0csTUFBTSxDQUFDRixJQUFQLEdBQWNoRyxDQUFsQixFQUFxQjtBQUN0QmtHLFlBQU0sQ0FBQ0YsSUFBUCxHQUFjaEcsQ0FBZDtBQUNIO0FBQ0o7O0FBQ0R3RixRQUFNLENBQUNjLElBQVAsR0FBY0EsSUFBZDs7QUFDQSxXQUFTQyxTQUFULENBQW1CTCxNQUFuQixFQUEyQk0sS0FBM0IsRUFBa0M7QUFBQSxRQUN0QnpHLENBRHNCLEdBQ2J5RyxLQURhLENBQ3RCekcsQ0FEc0I7QUFBQSxRQUNuQkMsQ0FEbUIsR0FDYndHLEtBRGEsQ0FDbkJ4RyxDQURtQjs7QUFFOUIsUUFBSWtHLE1BQU0sQ0FBQ1IsSUFBUCxHQUFjM0YsQ0FBbEIsRUFBcUI7QUFDakJtRyxZQUFNLENBQUNSLElBQVAsR0FBYzNGLENBQWQ7QUFDSCxLQUZELE1BR0ssSUFBSW1HLE1BQU0sQ0FBQ0osSUFBUCxHQUFjL0YsQ0FBbEIsRUFBcUI7QUFDdEJtRyxZQUFNLENBQUNKLElBQVAsR0FBYy9GLENBQWQ7QUFDSDs7QUFDRCxRQUFJbUcsTUFBTSxDQUFDTCxJQUFQLEdBQWM3RixDQUFsQixFQUFxQjtBQUNqQmtHLFlBQU0sQ0FBQ0wsSUFBUCxHQUFjN0YsQ0FBZDtBQUNILEtBRkQsTUFHSyxJQUFJa0csTUFBTSxDQUFDRixJQUFQLEdBQWNoRyxDQUFsQixFQUFxQjtBQUN0QmtHLFlBQU0sQ0FBQ0YsSUFBUCxHQUFjaEcsQ0FBZDtBQUNIO0FBQ0o7O0FBQ0R3RixRQUFNLENBQUNlLFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0gsQ0E3RUQsRUE2RUdmLE1BQU0sS0FBS0EsTUFBTSxHQUFHLEVBQWQsQ0E3RVQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNETyxJQUFJckwsY0FBSjs7QUFDUCxDQUFDLFVBQVVBLGNBQVYsRUFBMEI7QUFDdkIsV0FBU3NMLEtBQVQsR0FBaUI7QUFDYixXQUFPO0FBQ0gvSyxxQkFBZSxFQUFFLENBRGQ7QUFFSE4sbUJBQWEsRUFBRSxDQUZaO0FBR0hFLHFCQUFlLEVBQUUsQ0FIZDtBQUlIRSxvQkFBYyxFQUFFLENBSmI7QUFLSEcsaUJBQVcsRUFBRSxDQUxWO0FBTUhOLGVBQVMsRUFBRSxDQU5SO0FBT0hFLGlCQUFXLEVBQUUsQ0FQVjtBQVFIRSxnQkFBVSxFQUFFO0FBUlQsS0FBUDtBQVVIOztBQUNETixnQkFBYyxDQUFDc0wsS0FBZixHQUF1QkEsS0FBdkI7O0FBQ0EsV0FBU2dCLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCQyxHQUFyQixFQUEwQjtBQUN0QixXQUFPO0FBQ0hqTSxxQkFBZSxFQUFFZ00sR0FBRyxDQUFDaE0sZUFBSixHQUFzQmlNLEdBQUcsQ0FBQ2pNLGVBRHhDO0FBRUhOLG1CQUFhLEVBQUVzTSxHQUFHLENBQUN0TSxhQUFKLEdBQW9CdU0sR0FBRyxDQUFDdk0sYUFGcEM7QUFHSEUscUJBQWUsRUFBRW9NLEdBQUcsQ0FBQ3BNLGVBQUosR0FBc0JxTSxHQUFHLENBQUNyTSxlQUh4QztBQUlIRSxvQkFBYyxFQUFFa00sR0FBRyxDQUFDbE0sY0FBSixHQUFxQm1NLEdBQUcsQ0FBQ25NLGNBSnRDO0FBS0hHLGlCQUFXLEVBQUUrTCxHQUFHLENBQUNoTSxlQUFKLEdBQXNCaU0sR0FBRyxDQUFDaE0sV0FBMUIsR0FBd0NnTSxHQUFHLENBQUNoTSxXQUx0RDtBQU1ITixlQUFTLEVBQUVxTSxHQUFHLENBQUN0TSxhQUFKLEdBQW9CdU0sR0FBRyxDQUFDdE0sU0FBeEIsR0FBb0NzTSxHQUFHLENBQUN0TSxTQU5oRDtBQU9IRSxpQkFBVyxFQUFFbU0sR0FBRyxDQUFDcE0sZUFBSixHQUFzQnFNLEdBQUcsQ0FBQ3BNLFdBQTFCLEdBQXdDb00sR0FBRyxDQUFDcE0sV0FQdEQ7QUFRSEUsZ0JBQVUsRUFBRWlNLEdBQUcsQ0FBQ2xNLGNBQUosR0FBcUJtTSxHQUFHLENBQUNsTSxVQUF6QixHQUFzQ2tNLEdBQUcsQ0FBQ2xNO0FBUm5ELEtBQVA7QUFVSDs7QUFDRE4sZ0JBQWMsQ0FBQ3NNLE1BQWYsR0FBd0JBLE1BQXhCOztBQUNBLFdBQVNHLFNBQVQsQ0FBbUI5TSxFQUFuQixFQUF1QjtBQUNuQixXQUFPQSxFQUFFLENBQUNNLGFBQUgsS0FBcUIsQ0FBckIsSUFDQU4sRUFBRSxDQUFDUSxlQUFILEtBQXVCLENBRHZCLElBRUFSLEVBQUUsQ0FBQ1UsY0FBSCxLQUFzQixDQUZ0QixJQUdBVixFQUFFLENBQUNZLGVBQUgsS0FBdUIsQ0FIdkIsSUFJQVosRUFBRSxDQUFDTyxTQUFILEtBQWlCLENBSmpCLElBS0FQLEVBQUUsQ0FBQ1MsV0FBSCxLQUFtQixDQUxuQixJQU1BVCxFQUFFLENBQUNXLFVBQUgsS0FBa0IsQ0FObEIsSUFPQVgsRUFBRSxDQUFDYSxXQUFILEtBQW1CLENBUDFCO0FBUUg7O0FBQ0RSLGdCQUFjLENBQUN5TSxTQUFmLEdBQTJCQSxTQUEzQjtBQUNILENBdENELEVBc0NHek0sY0FBYyxLQUFLQSxjQUFjLEdBQUcsRUFBdEIsQ0F0Q2pCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hPLElBQUk4RCxNQUFKOztBQUNQLENBQUMsVUFBVUEsTUFBVixFQUFrQjtBQUNmLFdBQVN3SCxLQUFULEdBQWlCO0FBQ2IsV0FBTztBQUNIdkwsT0FBQyxFQUFFLENBREE7QUFFSEQsT0FBQyxFQUFFLENBRkE7QUFHSG1LLE9BQUMsRUFBRSxDQUhBO0FBSUg1RSxPQUFDLEVBQUUsQ0FKQTtBQUtINkUsUUFBRSxFQUFFLENBTEQ7QUFNSEMsUUFBRSxFQUFFO0FBTkQsS0FBUDtBQVFIOztBQUNEckcsUUFBTSxDQUFDd0gsS0FBUCxHQUFlQSxLQUFmOztBQUNBLFdBQVNnQixNQUFULENBQWdCSSxPQUFoQixFQUF5QkMsT0FBekIsRUFBa0M7QUFDOUIsV0FBTztBQUNINU0sT0FBQyxFQUFFNE0sT0FBTyxDQUFDNU0sQ0FBUixHQUFZMk0sT0FBTyxDQUFDM00sQ0FBcEIsR0FBd0I0TSxPQUFPLENBQUM3TSxDQUFSLEdBQVk0TSxPQUFPLENBQUN6QyxDQUQ1QztBQUVIbkssT0FBQyxFQUFFNk0sT0FBTyxDQUFDNU0sQ0FBUixHQUFZMk0sT0FBTyxDQUFDNU0sQ0FBcEIsR0FBd0I2TSxPQUFPLENBQUM3TSxDQUFSLEdBQVk0TSxPQUFPLENBQUNySCxDQUY1QztBQUdINEUsT0FBQyxFQUFFMEMsT0FBTyxDQUFDMUMsQ0FBUixHQUFZeUMsT0FBTyxDQUFDM00sQ0FBcEIsR0FBd0I0TSxPQUFPLENBQUN0SCxDQUFSLEdBQVlxSCxPQUFPLENBQUN6QyxDQUg1QztBQUlINUUsT0FBQyxFQUFFc0gsT0FBTyxDQUFDMUMsQ0FBUixHQUFZeUMsT0FBTyxDQUFDNU0sQ0FBcEIsR0FBd0I2TSxPQUFPLENBQUN0SCxDQUFSLEdBQVlxSCxPQUFPLENBQUNySCxDQUo1QztBQUtINkUsUUFBRSxFQUFFeUMsT0FBTyxDQUFDekMsRUFBUixHQUFhd0MsT0FBTyxDQUFDM00sQ0FBckIsR0FBeUI0TSxPQUFPLENBQUN4QyxFQUFSLEdBQWF1QyxPQUFPLENBQUN6QyxDQUE5QyxHQUFrRHlDLE9BQU8sQ0FBQ3hDLEVBTDNEO0FBTUhDLFFBQUUsRUFBRXdDLE9BQU8sQ0FBQ3pDLEVBQVIsR0FBYXdDLE9BQU8sQ0FBQzVNLENBQXJCLEdBQXlCNk0sT0FBTyxDQUFDeEMsRUFBUixHQUFhdUMsT0FBTyxDQUFDckgsQ0FBOUMsR0FBa0RxSCxPQUFPLENBQUN2QztBQU4zRCxLQUFQO0FBUUg7O0FBQ0RyRyxRQUFNLENBQUN3SSxNQUFQLEdBQWdCQSxNQUFoQjs7QUFDQSxXQUFTTSxjQUFULENBQXdCdEksTUFBeEIsRUFBZ0M7QUFDNUIsV0FBT0EsTUFBTSxDQUFDdkUsQ0FBUCxHQUFXdUUsTUFBTSxDQUFDZSxDQUFsQixHQUFzQmYsTUFBTSxDQUFDeEUsQ0FBUCxHQUFXd0UsTUFBTSxDQUFDMkYsQ0FBL0M7QUFDSDs7QUFDRG5HLFFBQU0sQ0FBQzhJLGNBQVAsR0FBd0JBLGNBQXhCOztBQUNBLFdBQVNDLE1BQVQsQ0FBZ0J2SSxNQUFoQixFQUF3QjtBQUNwQixRQUFJd0ksV0FBVyxHQUFHRixjQUFjLENBQUN0SSxNQUFELENBQWhDOztBQUNBLFFBQUl3SSxXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFDbkJ4SSxZQUFNLENBQUN2RSxDQUFQLEdBQVcsQ0FBWDtBQUNBdUUsWUFBTSxDQUFDeEUsQ0FBUCxHQUFXLENBQVg7QUFDQXdFLFlBQU0sQ0FBQzJGLENBQVAsR0FBVyxDQUFYO0FBQ0EzRixZQUFNLENBQUNlLENBQVAsR0FBVyxDQUFYO0FBQ0FmLFlBQU0sQ0FBQzRGLEVBQVAsR0FBWSxDQUFDNUYsTUFBTSxDQUFDNEYsRUFBcEI7QUFDQTVGLFlBQU0sQ0FBQzZGLEVBQVAsR0FBWSxDQUFDN0YsTUFBTSxDQUFDNkYsRUFBcEI7QUFDSCxLQVBELE1BUUs7QUFDRDJDLGlCQUFXLEdBQUcsTUFBTUEsV0FBcEI7QUFDQSxVQUFNekgsQ0FBQyxHQUFHZixNQUFNLENBQUNlLENBQVAsR0FBV3lILFdBQXJCO0FBQ0EsVUFBTS9NLENBQUMsR0FBR3VFLE1BQU0sQ0FBQ3ZFLENBQVAsR0FBVytNLFdBQXJCO0FBQ0F4SSxZQUFNLENBQUN2RSxDQUFQLEdBQVdzRixDQUFYO0FBQ0FmLFlBQU0sQ0FBQ3hFLENBQVAsSUFBWSxDQUFDZ04sV0FBYjtBQUNBeEksWUFBTSxDQUFDMkYsQ0FBUCxJQUFZLENBQUM2QyxXQUFiO0FBQ0F4SSxZQUFNLENBQUNlLENBQVAsR0FBV3RGLENBQVg7QUFDQSxVQUFNbUssRUFBRSxHQUFHLENBQUM1RixNQUFNLENBQUN2RSxDQUFSLEdBQVl1RSxNQUFNLENBQUM0RixFQUFuQixHQUF3QjVGLE1BQU0sQ0FBQzJGLENBQVAsR0FBVzNGLE1BQU0sQ0FBQzZGLEVBQXJEO0FBQ0EsVUFBTUEsRUFBRSxHQUFHLENBQUM3RixNQUFNLENBQUN4RSxDQUFSLEdBQVl3RSxNQUFNLENBQUM0RixFQUFuQixHQUF3QjVGLE1BQU0sQ0FBQ2UsQ0FBUCxHQUFXZixNQUFNLENBQUM2RixFQUFyRDtBQUNBN0YsWUFBTSxDQUFDNEYsRUFBUCxHQUFZQSxFQUFaO0FBQ0E1RixZQUFNLENBQUM2RixFQUFQLEdBQVlBLEVBQVo7QUFDSDtBQUNKOztBQUNEckcsUUFBTSxDQUFDK0ksTUFBUCxHQUFnQkEsTUFBaEI7O0FBQ0EsV0FBU0UsY0FBVCxDQUF3QnpJLE1BQXhCLEVBQWdDK0gsS0FBaEMsRUFBdUM7QUFBQSxRQUMzQnpHLENBRDJCLEdBQ2xCeUcsS0FEa0IsQ0FDM0J6RyxDQUQyQjtBQUFBLFFBQ3hCQyxDQUR3QixHQUNsQndHLEtBRGtCLENBQ3hCeEcsQ0FEd0I7QUFFbkMsV0FBTztBQUNIRCxPQUFDLEVBQUVBLENBQUMsR0FBR3RCLE1BQU0sQ0FBQ3ZFLENBQVgsR0FBZThGLENBQUMsR0FBR3ZCLE1BQU0sQ0FBQzJGLENBQTFCLEdBQThCM0YsTUFBTSxDQUFDNEYsRUFEckM7QUFFSHJFLE9BQUMsRUFBRUQsQ0FBQyxHQUFHdEIsTUFBTSxDQUFDeEUsQ0FBWCxHQUFlK0YsQ0FBQyxHQUFHdkIsTUFBTSxDQUFDZSxDQUExQixHQUE4QmYsTUFBTSxDQUFDNkY7QUFGckMsS0FBUDtBQUlIOztBQUNEckcsUUFBTSxDQUFDaUosY0FBUCxHQUF3QkEsY0FBeEI7O0FBQ0EsV0FBU0MscUJBQVQsQ0FBK0IxSSxNQUEvQixFQUF1QytILEtBQXZDLEVBQThDO0FBQzFDLFFBQUlTLFdBQVcsR0FBR0YsY0FBYyxDQUFDdEksTUFBRCxDQUFoQzs7QUFDQSxRQUFJd0ksV0FBVyxLQUFLLENBQXBCLEVBQXVCO0FBQ25CLGFBQU87QUFDSGxILFNBQUMsRUFBRSxDQUFDdEIsTUFBTSxDQUFDNEYsRUFEUjtBQUVIckUsU0FBQyxFQUFFLENBQUN2QixNQUFNLENBQUM2RjtBQUZSLE9BQVA7QUFJSDs7QUFDRDJDLGVBQVcsR0FBRyxJQUFJQSxXQUFsQjtBQVIwQyxRQVNsQ2xILENBVGtDLEdBU3pCeUcsS0FUeUIsQ0FTbEN6RyxDQVRrQztBQUFBLFFBUy9CQyxDQVQrQixHQVN6QndHLEtBVHlCLENBUy9CeEcsQ0FUK0I7QUFVMUMsV0FBTztBQUNIRCxPQUFDLEVBQUVrSCxXQUFXLElBQUl4SSxNQUFNLENBQUMyRixDQUFQLElBQVkzRixNQUFNLENBQUM2RixFQUFQLEdBQVl0RSxDQUF4QixJQUE2QnZCLE1BQU0sQ0FBQ2UsQ0FBUCxJQUFZTyxDQUFDLEdBQUd0QixNQUFNLENBQUM0RixFQUF2QixDQUFqQyxDQURYO0FBRUhyRSxPQUFDLEVBQUVpSCxXQUFXLElBQUl4SSxNQUFNLENBQUN2RSxDQUFQLElBQVk4RixDQUFDLEdBQUd2QixNQUFNLENBQUM2RixFQUF2QixJQUE2QjdGLE1BQU0sQ0FBQ3hFLENBQVAsSUFBWXdFLE1BQU0sQ0FBQzRGLEVBQVAsR0FBWXRFLENBQXhCLENBQWpDO0FBRlgsS0FBUDtBQUlIOztBQUNEOUIsUUFBTSxDQUFDa0oscUJBQVAsR0FBK0JBLHFCQUEvQjs7QUFDQSxXQUFTQyxlQUFULENBQXlCM0ksTUFBekIsRUFBaUN5SCxNQUFqQyxFQUF5QztBQUFBLFFBQzdCaE0sQ0FENkIsR0FDTHVFLE1BREssQ0FDN0J2RSxDQUQ2QjtBQUFBLFFBQzFCRCxDQUQwQixHQUNMd0UsTUFESyxDQUMxQnhFLENBRDBCO0FBQUEsUUFDdkJtSyxDQUR1QixHQUNMM0YsTUFESyxDQUN2QjJGLENBRHVCO0FBQUEsUUFDcEI1RSxDQURvQixHQUNMZixNQURLLENBQ3BCZSxDQURvQjtBQUFBLFFBQ2pCNkUsRUFEaUIsR0FDTDVGLE1BREssQ0FDakI0RixFQURpQjtBQUFBLFFBQ2JDLEVBRGEsR0FDTDdGLE1BREssQ0FDYjZGLEVBRGE7QUFFckMsUUFBTStDLEVBQUUsR0FBR25CLE1BQU0sQ0FBQ25HLENBQWxCO0FBQ0EsUUFBTXVILEVBQUUsR0FBR3BCLE1BQU0sQ0FBQ2xHLENBQWxCO0FBQ0EsUUFBTXVILEVBQUUsR0FBR0YsRUFBRSxHQUFHbkIsTUFBTSxDQUFDOUssS0FBdkI7QUFDQSxRQUFNb00sRUFBRSxHQUFHRixFQUFFLEdBQUdwQixNQUFNLENBQUM3SyxNQUF2QjtBQUNBLFFBQU1vTSxHQUFHLEdBQUdKLEVBQUUsR0FBR25OLENBQUwsR0FBU29OLEVBQUUsR0FBR2xELENBQWQsR0FBa0JDLEVBQTlCO0FBQ0EsUUFBTXFELEdBQUcsR0FBR0wsRUFBRSxHQUFHcE4sQ0FBTCxHQUFTcU4sRUFBRSxHQUFHOUgsQ0FBZCxHQUFrQjhFLEVBQTlCO0FBQ0EsUUFBTXFELEdBQUcsR0FBR0osRUFBRSxHQUFHck4sQ0FBTCxHQUFTb04sRUFBRSxHQUFHbEQsQ0FBZCxHQUFrQkMsRUFBOUI7QUFDQSxRQUFNdUQsR0FBRyxHQUFHTCxFQUFFLEdBQUd0TixDQUFMLEdBQVNxTixFQUFFLEdBQUc5SCxDQUFkLEdBQWtCOEUsRUFBOUI7QUFDQSxRQUFNdUQsR0FBRyxHQUFHTixFQUFFLEdBQUdyTixDQUFMLEdBQVNzTixFQUFFLEdBQUdwRCxDQUFkLEdBQWtCQyxFQUE5QjtBQUNBLFFBQU15RCxHQUFHLEdBQUdQLEVBQUUsR0FBR3ROLENBQUwsR0FBU3VOLEVBQUUsR0FBR2hJLENBQWQsR0FBa0I4RSxFQUE5QjtBQUNBLFFBQU15RCxHQUFHLEdBQUdWLEVBQUUsR0FBR25OLENBQUwsR0FBU3NOLEVBQUUsR0FBR3BELENBQWQsR0FBa0JDLEVBQTlCO0FBQ0EsUUFBTTJELEdBQUcsR0FBR1gsRUFBRSxHQUFHcE4sQ0FBTCxHQUFTdU4sRUFBRSxHQUFHaEksQ0FBZCxHQUFrQjhFLEVBQTlCO0FBQ0EsUUFBSXBDLElBQUksR0FBR3VGLEdBQVg7O0FBQ0EsUUFBSXZGLElBQUksR0FBR3lGLEdBQVgsRUFBZ0I7QUFDWnpGLFVBQUksR0FBR3lGLEdBQVA7QUFDSDs7QUFDRCxRQUFJekYsSUFBSSxHQUFHMkYsR0FBWCxFQUFnQjtBQUNaM0YsVUFBSSxHQUFHMkYsR0FBUDtBQUNIOztBQUNELFFBQUkzRixJQUFJLEdBQUc2RixHQUFYLEVBQWdCO0FBQ1o3RixVQUFJLEdBQUc2RixHQUFQO0FBQ0g7O0FBQ0QsUUFBSTFGLEdBQUcsR0FBR3FGLEdBQVY7O0FBQ0EsUUFBSXJGLEdBQUcsR0FBR3VGLEdBQVYsRUFBZTtBQUNYdkYsU0FBRyxHQUFHdUYsR0FBTjtBQUNIOztBQUNELFFBQUl2RixHQUFHLEdBQUd5RixHQUFWLEVBQWU7QUFDWHpGLFNBQUcsR0FBR3lGLEdBQU47QUFDSDs7QUFDRCxRQUFJekYsR0FBRyxHQUFHMkYsR0FBVixFQUFlO0FBQ1gzRixTQUFHLEdBQUcyRixHQUFOO0FBQ0g7O0FBQ0QsUUFBSUMsS0FBSyxHQUFHUixHQUFaOztBQUNBLFFBQUlRLEtBQUssR0FBR04sR0FBWixFQUFpQjtBQUNiTSxXQUFLLEdBQUdOLEdBQVI7QUFDSDs7QUFDRCxRQUFJTSxLQUFLLEdBQUdKLEdBQVosRUFBaUI7QUFDYkksV0FBSyxHQUFHSixHQUFSO0FBQ0g7O0FBQ0QsUUFBSUksS0FBSyxHQUFHRixHQUFaLEVBQWlCO0FBQ2JFLFdBQUssR0FBR0YsR0FBUjtBQUNIOztBQUNELFFBQUlHLE1BQU0sR0FBR1IsR0FBYjs7QUFDQSxRQUFJUSxNQUFNLEdBQUdOLEdBQWIsRUFBa0I7QUFDZE0sWUFBTSxHQUFHTixHQUFUO0FBQ0g7O0FBQ0QsUUFBSU0sTUFBTSxHQUFHSixHQUFiLEVBQWtCO0FBQ2RJLFlBQU0sR0FBR0osR0FBVDtBQUNIOztBQUNELFFBQUlJLE1BQU0sR0FBR0YsR0FBYixFQUFrQjtBQUNkRSxZQUFNLEdBQUdGLEdBQVQ7QUFDSDs7QUFDRCxXQUFPO0FBQ0hqSSxPQUFDLEVBQUVtQyxJQURBO0FBRUhsQyxPQUFDLEVBQUVxQyxHQUZBO0FBR0hqSCxXQUFLLEVBQUU2TSxLQUFLLEdBQUcvRixJQUhaO0FBSUg3RyxZQUFNLEVBQUU2TSxNQUFNLEdBQUc3RjtBQUpkLEtBQVA7QUFNSDs7QUFDRHBFLFFBQU0sQ0FBQ21KLGVBQVAsR0FBeUJBLGVBQXpCO0FBQ0gsQ0ExSUQsRUEwSUduSixNQUFNLEtBQUtBLE1BQU0sR0FBRyxFQUFkLENBMUlULEU7Ozs7Ozs7Ozs7Ozs7OztBQ0RPLElBQUlrSyxLQUFKOztBQUNQLENBQUMsVUFBVUEsS0FBVixFQUFpQjtBQUNkLFdBQVMxQyxLQUFULEdBQWlCO0FBQ2IsV0FBTztBQUFFMUYsT0FBQyxFQUFFLENBQUw7QUFBUUMsT0FBQyxFQUFFO0FBQVgsS0FBUDtBQUNIOztBQUNEbUksT0FBSyxDQUFDMUMsS0FBTixHQUFjQSxLQUFkO0FBQ0gsQ0FMRCxFQUtHMEMsS0FBSyxLQUFLQSxLQUFLLEdBQUcsRUFBYixDQUxSLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRE8sSUFBSUMsU0FBSjs7QUFDUCxDQUFDLFVBQVVBLFNBQVYsRUFBcUI7QUFDbEIsV0FBU0MsUUFBVCxDQUFrQkMsU0FBbEIsRUFBNkI5QixLQUE3QixFQUFvQztBQUNoQyxXQUFPOEIsU0FBUyxDQUFDdkksQ0FBVixHQUFjeUcsS0FBSyxDQUFDekcsQ0FBcEIsSUFDQXVJLFNBQVMsQ0FBQ3ZJLENBQVYsR0FBY3VJLFNBQVMsQ0FBQ2xOLEtBQXhCLEdBQWdDb0wsS0FBSyxDQUFDekcsQ0FEdEMsSUFFQXVJLFNBQVMsQ0FBQ3RJLENBQVYsR0FBY3dHLEtBQUssQ0FBQ3hHLENBRnBCLElBR0FzSSxTQUFTLENBQUN0SSxDQUFWLEdBQWNzSSxTQUFTLENBQUNqTixNQUF4QixHQUFpQ21MLEtBQUssQ0FBQ3hHLENBSDlDO0FBSUg7O0FBQ0RvSSxXQUFTLENBQUNDLFFBQVYsR0FBcUJBLFFBQXJCOztBQUNBLFdBQVNwQyxPQUFULENBQWlCcUMsU0FBakIsRUFBNEI7QUFDeEIsV0FBTyxDQUFDQSxTQUFTLENBQUNsTixLQUFYLElBQW9CLENBQUNrTixTQUFTLENBQUNqTixNQUF0QztBQUNIOztBQUNEK00sV0FBUyxDQUFDbkMsT0FBVixHQUFvQkEsT0FBcEI7QUFDSCxDQVpELEVBWUdtQyxTQUFTLEtBQUtBLFNBQVMsR0FBRyxFQUFqQixDQVpaLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQSxJQUFJRyxXQUFKOztBQUNBLFNBQVNDLHVCQUFULENBQWlDMU8sRUFBakMsRUFBcUM7QUFDakMsU0FBT0EsRUFBRSxDQUFDTSxhQUFILEtBQXFCLENBQXJCLElBQ0FOLEVBQUUsQ0FBQ1EsZUFBSCxLQUF1QixDQUR2QixJQUVBUixFQUFFLENBQUNVLGNBQUgsS0FBc0IsQ0FGdEIsSUFHQVYsRUFBRSxDQUFDTyxTQUFILEtBQWlCLENBSGpCLElBSUFQLEVBQUUsQ0FBQ1MsV0FBSCxLQUFtQixDQUpuQixJQUtBVCxFQUFFLENBQUNXLFVBQUgsS0FBa0IsQ0FMbEIsSUFNQVgsRUFBRSxDQUFDYSxXQUFILEtBQW1CLENBTjFCO0FBT0g7O0FBQ0QsU0FBUzhOLGlCQUFULENBQTJCMUwsT0FBM0IsRUFBb0M7QUFDaEMsTUFBSSxDQUFDd0wsV0FBTCxFQUFrQjtBQUNkLFFBQU0xTixNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0F3TixlQUFXLEdBQUcxTixNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBZDtBQUNIOztBQUNELE1BQUlzTixXQUFXLENBQUMxTixNQUFaLENBQW1CTyxLQUFuQixLQUE2QjJCLE9BQU8sQ0FBQ2xDLE1BQVIsQ0FBZU8sS0FBaEQsRUFBdUQ7QUFDbkRtTixlQUFXLENBQUMxTixNQUFaLENBQW1CTyxLQUFuQixHQUEyQjJCLE9BQU8sQ0FBQ2xDLE1BQVIsQ0FBZU8sS0FBMUM7QUFDSDs7QUFDRCxNQUFJbU4sV0FBVyxDQUFDMU4sTUFBWixDQUFtQlEsTUFBbkIsS0FBOEIwQixPQUFPLENBQUNsQyxNQUFSLENBQWVRLE1BQWpELEVBQXlEO0FBQ3JEa04sZUFBVyxDQUFDMU4sTUFBWixDQUFtQlEsTUFBbkIsR0FBNEIwQixPQUFPLENBQUNsQyxNQUFSLENBQWVRLE1BQTNDO0FBQ0g7QUFDSjs7QUFDTSxTQUFTcU4saUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDNUwsT0FBbEMsRUFBMkM7QUFDOUMsTUFBTTRELFFBQVEsR0FBR2lELDJEQUFBLENBQW1CK0UsS0FBbkIsRUFBMEI1TCxPQUExQixDQUFqQjs7QUFDQSxNQUFJLEVBQUM0RCxRQUFELGFBQUNBLFFBQUQsdUJBQUNBLFFBQVEsQ0FBRXNELE1BQVgsS0FBcUIsRUFBQ3RELFFBQUQsYUFBQ0EsUUFBRCx1QkFBQ0EsUUFBUSxDQUFFZ0ksS0FBWCxDQUF6QixFQUEyQztBQUN2QztBQUNIOztBQUo2QyxNQUt0QzFKLGNBTHNDLEdBS25CbEMsT0FMbUIsQ0FLdENrQyxjQUxzQzs7QUFNOUMsTUFBSUEsY0FBYyxDQUFDdkUsZUFBZixJQUFrQyxDQUF0QyxFQUF5QztBQUNyQztBQUNIOztBQVI2QyxNQVN0Q3NDLE9BVHNDLEdBU2xCRCxPQVRrQixDQVN0Q0MsT0FUc0M7QUFBQSxNQVM3QnlCLE1BVDZCLEdBU2xCMUIsT0FUa0IsQ0FTN0IwQixNQVQ2QjtBQUFBLE1BVXRDekQsU0FWc0MsR0FVeEJnQyxPQVZ3QixDQVV0Q2hDLFNBVnNDO0FBQUEsd0JBV3BCMkYsUUFBUSxDQUFDZ0ksS0FYVztBQUFBLE1BV3RDdk4sS0FYc0MsbUJBV3RDQSxLQVhzQztBQUFBLE1BVy9CQyxNQVgrQixtQkFXL0JBLE1BWCtCO0FBWTlDLE1BQU0wRSxDQUFDLEdBQUdnRCxtREFBQSxDQUFXNEYsS0FBWCxFQUFrQnZOLEtBQWxCLENBQVY7QUFDQSxNQUFNNEUsQ0FBQyxHQUFHK0MsbURBQUEsQ0FBVzRGLEtBQVgsRUFBa0J0TixNQUFsQixDQUFWOztBQUNBLE1BQUltTix1QkFBdUIsQ0FBQ3ZKLGNBQUQsQ0FBM0IsRUFBNkM7QUFDekNqRSxhQUFTLENBQUNFLFlBQVYsQ0FBdUJ1RCxNQUFNLENBQUN2RSxDQUE5QixFQUFpQ3VFLE1BQU0sQ0FBQ3hFLENBQXhDLEVBQTJDd0UsTUFBTSxDQUFDMkYsQ0FBbEQsRUFBcUQzRixNQUFNLENBQUNlLENBQTVELEVBQStEZixNQUFNLENBQUM0RixFQUF0RSxFQUEwRTVGLE1BQU0sQ0FBQzZGLEVBQWpGO0FBQ0F0SixhQUFTLENBQUM0TixXQUFWLEdBQXdCM0osY0FBYyxDQUFDdkUsZUFBdkM7QUFDQU0sYUFBUyxDQUFDNk4sU0FBVixDQUFvQmxJLFFBQVEsQ0FBQ2dJLEtBQTdCLEVBQW9DNUksQ0FBcEMsRUFBdUNDLENBQXZDO0FBQ0gsR0FKRCxNQUtLO0FBQ0R5SSxxQkFBaUIsQ0FBQ3pOLFNBQUQsQ0FBakI7QUFDQSxRQUFNa0wsTUFBTSxHQUFHakksNkRBQUEsQ0FBdUJRLE1BQXZCLEVBQStCO0FBQzFDc0IsT0FBQyxFQUFEQSxDQUQwQztBQUN2Q0MsT0FBQyxFQUFEQSxDQUR1QztBQUNwQzVFLFdBQUssRUFBTEEsS0FEb0M7QUFDN0JDLFlBQU0sRUFBTkE7QUFENkIsS0FBL0IsQ0FBZjs7QUFHQSxRQUFJK00sd0RBQUEsQ0FBa0JsQyxNQUFsQixDQUFKLEVBQStCO0FBQzNCO0FBQ0g7O0FBQ0RxQyxlQUFXLENBQUNwTixTQUFaLENBQXNCK0ssTUFBTSxDQUFDbkcsQ0FBN0IsRUFBZ0NtRyxNQUFNLENBQUNsRyxDQUF2QyxFQUEwQ2tHLE1BQU0sQ0FBQzlLLEtBQWpELEVBQXdEOEssTUFBTSxDQUFDN0ssTUFBL0Q7QUFDQWtOLGVBQVcsQ0FBQ3JOLFlBQVosQ0FBeUJ1RCxNQUFNLENBQUN2RSxDQUFoQyxFQUFtQ3VFLE1BQU0sQ0FBQ3hFLENBQTFDLEVBQTZDd0UsTUFBTSxDQUFDMkYsQ0FBcEQsRUFBdUQzRixNQUFNLENBQUNlLENBQTlELEVBQWlFZixNQUFNLENBQUM0RixFQUF4RSxFQUE0RTVGLE1BQU0sQ0FBQzZGLEVBQW5GO0FBQ0FpRSxlQUFXLENBQUNNLFNBQVosQ0FBc0JsSSxRQUFRLENBQUNnSSxLQUEvQixFQUFzQzVJLENBQXRDLEVBQXlDQyxDQUF6QztBQUNBLFFBQU04SSxTQUFTLEdBQUdQLFdBQVcsQ0FBQ1EsWUFBWixDQUF5QjdDLE1BQU0sQ0FBQ25HLENBQWhDLEVBQW1DbUcsTUFBTSxDQUFDbEcsQ0FBMUMsRUFBNkNrRyxNQUFNLENBQUM5SyxLQUFwRCxFQUEyRDhLLE1BQU0sQ0FBQzdLLE1BQWxFLENBQWxCO0FBQ0EsUUFBTTJOLEVBQUUsR0FBRy9KLGNBQWMsQ0FBQzdFLGFBQTFCO0FBQ0EsUUFBTTZPLEVBQUUsR0FBR2hLLGNBQWMsQ0FBQzNFLGVBQTFCO0FBQ0EsUUFBTTRPLEVBQUUsR0FBR2pLLGNBQWMsQ0FBQ3pFLGNBQTFCO0FBQ0EsUUFBTTJPLEVBQUUsR0FBR2xLLGNBQWMsQ0FBQ3ZFLGVBQTFCO0FBQ0EsUUFBTTBPLEVBQUUsR0FBR25LLGNBQWMsQ0FBQzVFLFNBQTFCO0FBQ0EsUUFBTWdQLEVBQUUsR0FBR3BLLGNBQWMsQ0FBQzFFLFdBQTFCO0FBQ0EsUUFBTStPLEVBQUUsR0FBR3JLLGNBQWMsQ0FBQ3hFLFVBQTFCO0FBQ0EsUUFBTThPLEVBQUUsR0FBR3RLLGNBQWMsQ0FBQ3RFLFdBQTFCO0FBbkJDLFFBb0JPNk8sSUFwQlAsR0FvQmdCVixTQXBCaEIsQ0FvQk9VLElBcEJQO0FBQUEsUUFxQk85TSxNQXJCUCxHQXFCa0I4TSxJQXJCbEIsQ0FxQk85TSxNQXJCUDs7QUFzQkQsU0FBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUCxNQUFwQixHQUE2QjtBQUN6QjhNLFVBQUksQ0FBQ3ZNLENBQUQsQ0FBSixHQUFVdU0sSUFBSSxDQUFDdk0sQ0FBQyxFQUFGLENBQUosR0FBWStMLEVBQVosR0FBaUJJLEVBQTNCO0FBQ0FJLFVBQUksQ0FBQ3ZNLENBQUQsQ0FBSixHQUFVdU0sSUFBSSxDQUFDdk0sQ0FBQyxFQUFGLENBQUosR0FBWWdNLEVBQVosR0FBaUJJLEVBQTNCO0FBQ0FHLFVBQUksQ0FBQ3ZNLENBQUQsQ0FBSixHQUFVdU0sSUFBSSxDQUFDdk0sQ0FBQyxFQUFGLENBQUosR0FBWWlNLEVBQVosR0FBaUJJLEVBQTNCO0FBQ0FFLFVBQUksQ0FBQ3ZNLENBQUQsQ0FBSixHQUFVdU0sSUFBSSxDQUFDdk0sQ0FBQyxFQUFGLENBQUosR0FBWWtNLEVBQVosR0FBaUJJLEVBQTNCO0FBQ0g7O0FBQ0RoQixlQUFXLENBQUNrQixZQUFaLENBQXlCWCxTQUF6QixFQUFvQzVDLE1BQU0sQ0FBQ25HLENBQTNDLEVBQThDbUcsTUFBTSxDQUFDbEcsQ0FBckQ7QUFDQWhGLGFBQVMsQ0FBQ0UsWUFBVjtBQUNBRixhQUFTLENBQUM0TixXQUFWLEdBQXdCLENBQXhCO0FBQ0E1TixhQUFTLENBQUM2TixTQUFWLENBQW9CTixXQUFXLENBQUMxTixNQUFoQyxFQUF3Q3FMLE1BQU0sQ0FBQ25HLENBQS9DLEVBQWtEbUcsTUFBTSxDQUFDbEcsQ0FBekQsRUFBNERrRyxNQUFNLENBQUM5SyxLQUFuRSxFQUEwRThLLE1BQU0sQ0FBQzdLLE1BQWpGLEVBQXlGNkssTUFBTSxDQUFDbkcsQ0FBaEcsRUFBbUdtRyxNQUFNLENBQUNsRyxDQUExRyxFQUE2R2tHLE1BQU0sQ0FBQzlLLEtBQXBILEVBQTJIOEssTUFBTSxDQUFDN0ssTUFBbEk7QUFDSDtBQUNKO0FBQ00sU0FBU3FPLDhCQUFULENBQXdDMU0sT0FBeEMsRUFBaUQ7QUFDcEQyTSw2REFBbUIsQ0FBQzNNLE9BQUQsQ0FBbkI7QUFDQUEsU0FBTyxDQUFDYyxjQUFSLENBQXVCRCxHQUF2QixDQUEyQitMLHlDQUEzQixFQUFrQ2xCLGlCQUFsQztBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGRDtBQUNBO0FBQ08sU0FBU21CLFlBQVQsQ0FBc0JsQixLQUF0QixFQUE2QjVMLE9BQTdCLEVBQXNDO0FBQ3pDLE1BQU00RCxRQUFRLEdBQUdpRCwyREFBQSxDQUFtQitFLEtBQW5CLEVBQTBCNUwsT0FBMUIsQ0FBakI7O0FBQ0EsTUFBSSxFQUFDNEQsUUFBRCxhQUFDQSxRQUFELHVCQUFDQSxRQUFRLENBQUVzRCxNQUFYLEtBQXFCLEVBQUN0RCxRQUFELGFBQUNBLFFBQUQsdUJBQUNBLFFBQVEsQ0FBRWdJLEtBQVgsQ0FBekIsRUFBMkM7QUFDdkM7QUFDSDs7QUFKd0MsTUFLakMxSixjQUxpQyxHQUtkbEMsT0FMYyxDQUtqQ2tDLGNBTGlDOztBQU16QyxNQUFJQSxjQUFjLENBQUN2RSxlQUFmLElBQWtDLENBQXRDLEVBQXlDO0FBQ3JDO0FBQ0g7O0FBUndDLE1BU2pDc0MsT0FUaUMsR0FTckJELE9BVHFCLENBU2pDQyxPQVRpQztBQUFBLE1BVWpDaEMsU0FWaUMsR0FVbkJnQyxPQVZtQixDQVVqQ2hDLFNBVmlDO0FBQUEsTUFXakN5RCxNQVhpQyxHQVd0QjFCLE9BWHNCLENBV2pDMEIsTUFYaUM7QUFZekN6RCxXQUFTLENBQUNFLFlBQVYsQ0FBdUJ1RCxNQUFNLENBQUN2RSxDQUE5QixFQUFpQ3VFLE1BQU0sQ0FBQ3hFLENBQXhDLEVBQTJDd0UsTUFBTSxDQUFDMkYsQ0FBbEQsRUFBcUQzRixNQUFNLENBQUNlLENBQTVELEVBQStEZixNQUFNLENBQUM0RixFQUF0RSxFQUEwRTVGLE1BQU0sQ0FBQzZGLEVBQWpGO0FBWnlDLHdCQWFmM0QsUUFBUSxDQUFDZ0ksS0FiTTtBQUFBLE1BYWpDdk4sS0FiaUMsbUJBYWpDQSxLQWJpQztBQUFBLE1BYTFCQyxNQWIwQixtQkFhMUJBLE1BYjBCO0FBY3pDLE1BQU0wRSxDQUFDLEdBQUdnRCxtREFBQSxDQUFXNEYsS0FBWCxFQUFrQnZOLEtBQWxCLENBQVY7QUFDQSxNQUFNNEUsQ0FBQyxHQUFHK0MsbURBQUEsQ0FBVzRGLEtBQVgsRUFBa0J0TixNQUFsQixDQUFWO0FBQ0FMLFdBQVMsQ0FBQzROLFdBQVYsR0FBd0IzSixjQUFjLENBQUN2RSxlQUF2QztBQUNBTSxXQUFTLENBQUM2TixTQUFWLENBQW9CbEksUUFBUSxDQUFDZ0ksS0FBN0IsRUFBb0M1SSxDQUFwQyxFQUF1Q0MsQ0FBdkM7QUFDSDtBQUNNLFNBQVM4Six5QkFBVCxDQUFtQzlNLE9BQW5DLEVBQTRDO0FBQy9DMk0sNkRBQW1CLENBQUMzTSxPQUFELENBQW5CO0FBQ0FBLFNBQU8sQ0FBQ2MsY0FBUixDQUF1QkQsR0FBdkIsQ0FBMkIrTCx5Q0FBM0IsRUFBa0NDLFlBQWxDO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCRDtBQUNBO0FBQ0E7QUFDTyxJQUFNRCxLQUFLLEdBQUcsT0FBZDtBQUNBLElBQUlHLEtBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxLQUFWLEVBQWlCO0FBQ2QsV0FBU0MsU0FBVCxDQUFtQnJCLEtBQW5CLEVBQTBCNUwsT0FBMUIsRUFBbUM7QUFBQSxRQUN2QmdILEdBRHVCLEdBQ2Y0RSxLQURlLENBQ3ZCNUUsR0FEdUI7O0FBRS9CLFFBQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sYUFBT2tHLFNBQVA7QUFDSDs7QUFKOEIsUUFLdkJqTixPQUx1QixHQUtYRCxPQUxXLENBS3ZCQyxPQUx1QjtBQU0vQixRQUFNMkQsUUFBUSxHQUFHM0QsT0FBTyxDQUFDc0QsU0FBUixDQUFrQk0sR0FBbEIsQ0FBc0JtRCxHQUF0QixDQUFqQjs7QUFDQSxRQUFJLEVBQUNwRCxRQUFELGFBQUNBLFFBQUQsdUJBQUNBLFFBQVEsQ0FBRXNELE1BQVgsS0FBcUIsRUFBQ3RELFFBQUQsYUFBQ0EsUUFBRCx1QkFBQ0EsUUFBUSxDQUFFZ0ksS0FBWCxDQUF6QixFQUEyQztBQUN2QyxhQUFPc0IsU0FBUDtBQUNIOztBQVQ4QiwwQkFVTHRKLFFBQVEsQ0FBQ2dJLEtBVko7QUFBQSxRQVV2QnZOLEtBVnVCLG1CQVV2QkEsS0FWdUI7QUFBQSxRQVVoQkMsTUFWZ0IsbUJBVWhCQSxNQVZnQjtBQVcvQixRQUFNMEUsQ0FBQyxHQUFHZ0QsbURBQUEsQ0FBVzRGLEtBQVgsRUFBa0J2TixLQUFsQixDQUFWO0FBQ0EsUUFBTTRFLENBQUMsR0FBRytDLG1EQUFBLENBQVc0RixLQUFYLEVBQWtCdE4sTUFBbEIsQ0FBVjtBQUNBLFdBQU87QUFDSDBFLE9BQUMsRUFBREEsQ0FERztBQUNBQyxPQUFDLEVBQURBLENBREE7QUFDRzVFLFdBQUssRUFBTEEsS0FESDtBQUNVQyxZQUFNLEVBQU5BO0FBRFYsS0FBUDtBQUdIOztBQUNEME8sT0FBSyxDQUFDQyxTQUFOLEdBQWtCQSxTQUFsQjtBQUNILENBbkJELEVBbUJHRCxLQUFLLEtBQUtBLEtBQUssR0FBRyxFQUFiLENBbkJSOztBQW9CTyxTQUFTdk0sT0FBVCxDQUFpQm1MLEtBQWpCLEVBQXdCNUwsT0FBeEIsRUFBaUM7QUFBQSxNQUM1QmtELEtBRDRCLEdBQ2xCbEQsT0FEa0IsQ0FDNUJrRCxLQUQ0QjtBQUVwQyxNQUFNaUcsTUFBTSxHQUFHNkQsS0FBSyxDQUFDQyxTQUFOLENBQWdCckIsS0FBaEIsRUFBdUI1TCxPQUF2QixDQUFmO0FBQ0EsU0FBTyxDQUFDLENBQUNtSixNQUFGLElBQVlrQyx5REFBQSxDQUFtQmxDLE1BQW5CLEVBQTJCakcsS0FBM0IsQ0FBbkI7QUFDSDtBQUNNLFNBQVMwSixtQkFBVCxDQUE2QjNNLE9BQTdCLEVBQXNDO0FBQ3pDQSxTQUFPLENBQUNlLGVBQVIsQ0FBd0JGLEdBQXhCLENBQTRCK0wsS0FBNUIsRUFBbUNwTSxPQUFuQztBQUNBUixTQUFPLENBQUNzRCxTQUFSLENBQWtCRSxTQUFsQixDQUE0QjBKLEdBQTVCLENBQWdDQyx3REFBaEM7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDTyxTQUFTQSxZQUFULENBQXNCekosS0FBdEIsRUFBNkI7QUFDaEMsTUFBTTBKLFNBQVMsR0FBRzFKLEtBQUssQ0FBQzJKLEtBQU4sQ0FBWSxHQUFaLEVBQWlCQyxHQUFqQixFQUFsQjs7QUFDQSxVQUFRRixTQUFSO0FBQ0ksU0FBSyxLQUFMO0FBQ0EsU0FBSyxLQUFMO0FBQ0ksVUFBTXpKLFFBQVEsR0FBRztBQUNiRCxhQUFLLEVBQUxBLEtBRGE7QUFFYnVELGNBQU0sRUFBRSxLQUZLO0FBR2IwRSxhQUFLLEVBQUU7QUFITSxPQUFqQjtBQUtBLFVBQU1BLEtBQUssR0FBRzdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0E0TixXQUFLLENBQUM1RSxHQUFOLEdBQVlyRCxLQUFaOztBQUNBaUksV0FBSyxDQUFDNEIsTUFBTixHQUFlLFlBQU07QUFDakJwSyxlQUFPLENBQUNDLEdBQVIseUJBQTZCTSxLQUE3QjtBQUNBQyxnQkFBUSxDQUFDZ0ksS0FBVCxHQUFpQkEsS0FBakI7QUFDQWhJLGdCQUFRLENBQUNzRCxNQUFULEdBQWtCLElBQWxCO0FBQ0gsT0FKRDs7QUFLQTBFLFdBQUssQ0FBQzZCLE9BQU4sR0FBZ0IsVUFBQ0MsQ0FBRDtBQUFBLGVBQU8xSixzREFBQSxDQUFjLGtCQUFkLEVBQWtDMEosQ0FBbEMsQ0FBUDtBQUFBLE9BQWhCOztBQUNBLGFBQU85SixRQUFQOztBQUNKO0FBQ0k7QUFsQlI7O0FBb0JBLFNBQU8sSUFBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCRDtBQUNBO0FBQ0E7QUFDTyxJQUFJK0osYUFBSjs7QUFDUCxDQUFDLFVBQVVBLGFBQVYsRUFBeUI7QUFDdEIsV0FBU0MsZUFBVCxDQUF5Qm5CLElBQXpCLEVBQStCdEQsTUFBL0IsRUFBdUM7QUFBQSxrQkFDY3NELElBRGQsQ0FDM0J6SixDQUQyQjtBQUFBLFFBQzNCQSxDQUQyQix3QkFDdkIsQ0FEdUI7QUFBQSxrQkFDY3lKLElBRGQsQ0FDcEJ4SixDQURvQjtBQUFBLFFBQ3BCQSxDQURvQix3QkFDaEIsQ0FEZ0I7QUFBQSxzQkFDY3dKLElBRGQsQ0FDYnBPLEtBRGE7QUFBQSxRQUNiQSxLQURhLDRCQUNMLENBREs7QUFBQSx1QkFDY29PLElBRGQsQ0FDRm5PLE1BREU7QUFBQSxRQUNGQSxNQURFLDZCQUNPLENBRFA7QUFFbkNtSyxzREFBQSxDQUFZVSxNQUFaLEVBQW9CbkcsQ0FBcEIsRUFBdUJDLENBQXZCO0FBQ0F3RixzREFBQSxDQUFZVSxNQUFaLEVBQW9CbkcsQ0FBQyxHQUFHM0UsS0FBeEIsRUFBK0I0RSxDQUFDLEdBQUczRSxNQUFuQztBQUNIOztBQUNEcVAsZUFBYSxDQUFDQyxlQUFkLEdBQWdDQSxlQUFoQztBQUNILENBUEQsRUFPR0QsYUFBYSxLQUFLQSxhQUFhLEdBQUcsRUFBckIsQ0FQaEI7O0FBUU8sSUFBSUUsV0FBSjs7QUFDUCxDQUFDLFVBQVVBLFdBQVYsRUFBdUI7QUFDcEIsV0FBU0QsZUFBVCxDQUF5Qm5CLElBQXpCLEVBQStCdEQsTUFBL0IsRUFBdUM7QUFBQSxtQkFDeUJzRCxJQUR6QixDQUMzQnpKLENBRDJCO0FBQUEsUUFDM0JBLENBRDJCLHlCQUN2QixDQUR1QjtBQUFBLG1CQUN5QnlKLElBRHpCLENBQ3BCeEosQ0FEb0I7QUFBQSxRQUNwQkEsQ0FEb0IseUJBQ2hCLENBRGdCO0FBQUEsUUFDYjZLLE1BRGEsR0FDeUJyQixJQUR6QixDQUNicUIsTUFEYTtBQUFBLHdCQUN5QnJCLElBRHpCLENBQ0xzQixPQURLO0FBQUEsUUFDTEEsT0FESyw4QkFDSyxDQURMO0FBQUEsd0JBQ3lCdEIsSUFEekIsQ0FDUXVCLE9BRFI7QUFBQSxRQUNRQSxPQURSLDhCQUNrQixDQURsQjtBQUVuQyxRQUFNMUQsRUFBRSxHQUFHd0QsTUFBSCxhQUFHQSxNQUFILGNBQUdBLE1BQUgsR0FBYUMsT0FBckI7QUFDQSxRQUFNeEQsRUFBRSxHQUFHdUQsTUFBSCxhQUFHQSxNQUFILGNBQUdBLE1BQUgsR0FBYUUsT0FBckI7QUFDQXZGLHNEQUFBLENBQVlVLE1BQVosRUFBb0JuRyxDQUFDLEdBQUdzSCxFQUF4QixFQUE0QnJILENBQUMsR0FBR3NILEVBQWhDO0FBQ0E5QixzREFBQSxDQUFZVSxNQUFaLEVBQW9CbkcsQ0FBQyxHQUFHc0gsRUFBeEIsRUFBNEJySCxDQUFDLEdBQUdzSCxFQUFoQztBQUNIOztBQUNEc0QsYUFBVyxDQUFDRCxlQUFaLEdBQThCQSxlQUE5QjtBQUNILENBVEQsRUFTR0MsV0FBVyxLQUFLQSxXQUFXLEdBQUcsRUFBbkIsQ0FUZDs7QUFVTyxJQUFJSSxRQUFKOztBQUNQLENBQUMsVUFBVUEsUUFBVixFQUFvQjtBQUNqQixXQUFTTCxlQUFULENBQXlCTSxRQUF6QixFQUFtQy9FLE1BQW5DLEVBQTJDO0FBQUEsUUFDL0JzRCxJQUQrQixHQUN0QnlCLFFBRHNCLENBQy9CekIsSUFEK0I7O0FBRXZDLFFBQUksT0FBT0EsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUMxQjBCLHlFQUFBLENBQStCMUIsSUFBL0IsRUFBcUN0RCxNQUFyQztBQUNILEtBRkQsTUFHSyxJQUFJMUosS0FBSyxDQUFDQyxPQUFOLENBQWMrTSxJQUFkLENBQUosRUFBeUI7QUFDMUIsV0FBSyxJQUFJdk0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3VNLElBQUksQ0FBQzlNLE1BQXpCLEVBQWlDTyxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFlBQU1rTyxPQUFPLEdBQUczQixJQUFJLENBQUN2TSxDQUFELENBQXBCO0FBQ0FtTyxzRUFBQSxDQUE0QkQsT0FBNUIsRUFBcUNqRixNQUFyQztBQUNIO0FBQ0o7QUFDSjs7QUFDRDhFLFVBQVEsQ0FBQ0wsZUFBVCxHQUEyQkEsZUFBM0I7QUFDSCxDQWRELEVBY0dLLFFBQVEsS0FBS0EsUUFBUSxHQUFHLEVBQWhCLENBZFg7O0FBZU8sSUFBSUssWUFBSjs7QUFDUCxDQUFDLFVBQVVBLFlBQVYsRUFBd0I7QUFDckIsV0FBU1YsZUFBVCxDQUF5Qm5CLElBQXpCLEVBQStCdEQsTUFBL0IsRUFBdUM7QUFBQSxRQUMzQnZKLElBRDJCLEdBQ2xCNk0sSUFEa0IsQ0FDM0I3TSxJQUQyQjs7QUFFbkMsWUFBUUEsSUFBUjtBQUNJLFdBQUssV0FBTDtBQUNJK04scUJBQWEsQ0FBQ0MsZUFBZCxDQUE4Qm5CLElBQTlCLEVBQW9DdEQsTUFBcEM7QUFDQTs7QUFDSixXQUFLLFNBQUw7QUFDSTBFLG1CQUFXLENBQUNELGVBQVosQ0FBNEJuQixJQUE1QixFQUFrQ3RELE1BQWxDO0FBQ0E7O0FBQ0osV0FBSyxNQUFMO0FBQ0k4RSxnQkFBUSxDQUFDTCxlQUFULENBQXlCbkIsSUFBekIsRUFBK0J0RCxNQUEvQjtBQUNBOztBQUNKO0FBQ0k7QUFYUjtBQWFIOztBQUNEbUYsY0FBWSxDQUFDVixlQUFiLEdBQStCQSxlQUEvQjtBQUNILENBbEJELEVBa0JHVSxZQUFZLEtBQUtBLFlBQVksR0FBRyxFQUFwQixDQWxCZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDTyxJQUFJRCxXQUFKOztBQUNQLENBQUMsVUFBVUEsV0FBVixFQUF1QjtBQUNwQixXQUFTVCxlQUFULENBQXlCVyxJQUF6QixFQUErQnBGLE1BQS9CLEVBQXVDO0FBQUE7O0FBQUEsUUFDM0J2SixJQUQyQixHQUNsQjJPLElBRGtCLENBQzNCM08sSUFEMkI7O0FBRW5DLFlBQVFBLElBQVI7QUFDSSxXQUFLLFFBQUw7QUFDQSxXQUFLLFFBQUw7QUFDSSxZQUFNNE8sTUFBTSxHQUFHRCxJQUFmO0FBQ0E5RiwwREFBQSxDQUFZVSxNQUFaLGVBQW9CcUYsTUFBTSxDQUFDeEwsQ0FBM0IsaURBQWdDLENBQWhDLGVBQW1Dd0wsTUFBTSxDQUFDdkwsQ0FBMUMsaURBQStDLENBQS9DO0FBQ0E7O0FBQ0osV0FBSyxTQUFMO0FBQ0ksWUFBTXdMLE9BQU8sR0FBR0YsSUFBaEI7QUFDQTlGLDBEQUFBLENBQVlVLE1BQVosaUJBQW9Cc0YsT0FBTyxDQUFDQyxFQUE1QixxREFBa0MsQ0FBbEMsaUJBQXFDRCxPQUFPLENBQUNFLEVBQTdDLHFEQUFtRCxDQUFuRDtBQUNBbEcsMERBQUEsQ0FBWVUsTUFBWixnQkFBb0JzRixPQUFPLENBQUN6TCxDQUE1QixtREFBaUMsQ0FBakMsZ0JBQW9DeUwsT0FBTyxDQUFDeEwsQ0FBNUMsbURBQWlELENBQWpEO0FBQ0E7O0FBQ0osV0FBSyxjQUFMO0FBQ0ksWUFBTTJMLFlBQVksR0FBR0wsSUFBckI7QUFDQTlGLDBEQUFBLENBQVlVLE1BQVosc0JBQW9CeUYsWUFBWSxDQUFDRixFQUFqQywrREFBdUMsQ0FBdkMsc0JBQTBDRSxZQUFZLENBQUNELEVBQXZELCtEQUE2RCxDQUE3RDtBQUNBbEcsMERBQUEsQ0FBWVUsTUFBWixzQkFBb0J5RixZQUFZLENBQUNDLEVBQWpDLCtEQUF1QyxDQUF2QyxzQkFBMENELFlBQVksQ0FBQ0UsRUFBdkQsK0RBQTZELENBQTdEO0FBQ0FyRywwREFBQSxDQUFZVSxNQUFaLHFCQUFvQnlGLFlBQVksQ0FBQzVMLENBQWpDLDZEQUFzQyxDQUF0QyxxQkFBeUM0TCxZQUFZLENBQUMzTCxDQUF0RCw2REFBMkQsQ0FBM0Q7QUFDQTs7QUFDSjtBQUNJO0FBbEJSO0FBb0JIOztBQUNEb0wsYUFBVyxDQUFDVCxlQUFaLEdBQThCQSxlQUE5QjtBQUNILENBekJELEVBeUJHUyxXQUFXLEtBQUtBLFdBQVcsR0FBRyxFQUFuQixDQXpCZCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBLElBQU1VLFlBQVksR0FBRyx3QkFBckI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsT0FBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsU0FBcEI7QUFDTyxJQUFNQyxvQkFBYjtBQUNJLGtDQUFjO0FBQUE7O0FBQ1YsU0FBS1gsSUFBTCxHQUFZLEVBQVo7QUFDQSxTQUFLWSxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS2YsT0FBTCxHQUFlLElBQWY7QUFDQSxTQUFLZ0IsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNIOztBQVBMO0FBQUE7QUFBQSw0QkFRWWQsSUFSWixFQVFrQjtBQUNWLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFdBQUtZLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDSDtBQVhMO0FBQUE7QUFBQSw4QkFZYztBQUNOLGFBQU8sS0FBS0EsUUFBTCxHQUFnQixLQUFLWixJQUFMLENBQVU1TyxNQUFqQztBQUNIO0FBZEw7QUFBQTtBQUFBLGlDQWVpQjtBQUNULGFBQU8sS0FBS3lPLE9BQVo7QUFDSDtBQWpCTDtBQUFBO0FBQUEsOEJBa0JjO0FBQ04sYUFBTyxLQUFLaUIsSUFBWjtBQUNIO0FBcEJMO0FBQUE7QUFBQSxnQ0FxQmdCO0FBQ1IsYUFBTyxLQUFLRCxNQUFaO0FBQ0g7QUF2Qkw7QUFBQTtBQUFBLCtCQXdCZTtBQUNQLFdBQUtFLFdBQUw7QUFDQSxXQUFLQyxXQUFMO0FBQ0g7QUEzQkw7QUFBQTtBQUFBLGtDQTRCa0I7QUFDVixXQUFLbkIsT0FBTCxHQUFlLElBQWY7O0FBQ0EsYUFBTyxLQUFLZSxRQUFMLEdBQWdCLEtBQUtaLElBQUwsQ0FBVTVPLE1BQWpDLEVBQXlDO0FBQ3JDLFlBQU15TyxPQUFPLEdBQUcsS0FBS0csSUFBTCxDQUFVLEtBQUtZLFFBQWYsQ0FBaEI7O0FBQ0EsWUFBSUosWUFBWSxDQUFDeEYsSUFBYixDQUFrQjZFLE9BQWxCLENBQUosRUFBZ0M7QUFDNUIsZUFBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0g7O0FBQ0QsYUFBS2UsUUFBTDtBQUNIO0FBQ0o7QUFyQ0w7QUFBQTtBQUFBLGtDQXNDa0I7QUFDVixXQUFLRSxJQUFMLEdBQVksQ0FBWjtBQUNBLFVBQUlHLE1BQU0sR0FBRyxFQUFiOztBQUNBLGFBQU8sS0FBS0wsUUFBTCxHQUFnQixLQUFLWixJQUFMLENBQVU1TyxNQUFqQyxFQUF5QztBQUNyQyxZQUFNOFAsS0FBSSxHQUFHLEtBQUtsQixJQUFMLENBQVUsS0FBS1ksUUFBZixDQUFiOztBQUNBLFlBQUlGLFdBQVcsQ0FBQzFGLElBQVosQ0FBaUJrRyxLQUFqQixDQUFKLEVBQTRCO0FBQ3hCRCxnQkFBTSxJQUFJQyxLQUFWO0FBQ0gsU0FGRCxNQUdLLElBQUlULFVBQVUsQ0FBQ3pGLElBQVgsQ0FBZ0JrRyxLQUFoQixDQUFKLEVBQTJCO0FBQzVCLGVBQUtMLE1BQUwsQ0FBWSxLQUFLQyxJQUFMLEVBQVosSUFBMkJLLFVBQVUsQ0FBQ0YsTUFBRCxDQUFyQztBQUNBQSxnQkFBTSxHQUFHLEVBQVQ7QUFDSCxTQUhJLE1BSUEsSUFBSVQsWUFBWSxDQUFDeEYsSUFBYixDQUFrQmtHLEtBQWxCLENBQUosRUFBNkI7QUFDOUI7QUFDSDs7QUFDRCxhQUFLTixRQUFMO0FBQ0g7O0FBQ0QsVUFBSUssTUFBSixFQUFZO0FBQ1IsYUFBS0osTUFBTCxDQUFZLEtBQUtDLElBQUwsRUFBWixJQUEyQkssVUFBVSxDQUFDRixNQUFELENBQXJDO0FBQ0g7QUFDSjtBQTFETDs7QUFBQTtBQUFBO0FBNERPLElBQU1HLG9CQUFiO0FBQ0ksa0NBQWM7QUFBQTs7QUFDVixTQUFLQyxNQUFMLEdBQWMsSUFBSVYsb0JBQUosRUFBZDtBQUNBLFNBQUtkLE9BQUwsR0FBZTtBQUFFeE8sVUFBSSxFQUFFO0FBQVIsS0FBZjtBQUNBLFNBQUtpUSxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNIOztBQVBMO0FBQUE7QUFBQSw0QkFRWXhCLElBUlosRUFRa0I7QUFDVixXQUFLcUIsTUFBTCxDQUFZSSxPQUFaLENBQW9CekIsSUFBcEI7QUFDQSxXQUFLdUIsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFdBQUtGLGFBQUwsR0FBcUIsS0FBckI7QUFDSDtBQWJMO0FBQUE7QUFBQSw4QkFjYztBQUNOLGFBQU8sS0FBS0QsTUFBTCxDQUFZSyxPQUFaLEVBQVA7QUFDSDtBQWhCTDtBQUFBO0FBQUEsaUNBaUJpQjtBQUNULGFBQU8sS0FBS0osYUFBTCxHQUFxQixLQUFLekIsT0FBMUIsR0FBb0MsSUFBM0M7QUFDSDtBQW5CTDtBQUFBO0FBQUEsK0JBb0JlO0FBQ1AsV0FBS3dCLE1BQUwsQ0FBWU0sUUFBWjtBQUNBLFdBQUtDLEtBQUw7QUFDSDtBQXZCTDtBQUFBO0FBQUEsNEJBd0JZO0FBQ0osVUFBTS9CLE9BQU8sR0FBRyxLQUFLd0IsTUFBTCxDQUFZUSxVQUFaLEVBQWhCO0FBQ0EsV0FBS1AsYUFBTCxHQUFxQixDQUFDLENBQUN6QixPQUF2Qjs7QUFDQSxVQUFJLENBQUMsS0FBS3lCLGFBQVYsRUFBeUI7QUFDckI7QUFDSDs7QUFDRCxVQUFNVCxNQUFNLEdBQUcsS0FBS1EsTUFBTCxDQUFZUyxTQUFaLEVBQWY7O0FBTkksbUNBTzhCakIsTUFQOUI7QUFBQSxVQU9Ha0IsRUFQSDtBQUFBLFVBT09DLEVBUFA7QUFBQSxVQU9XQyxFQVBYO0FBQUEsVUFPZUMsRUFQZjtBQUFBLFVBT21CQyxFQVBuQjtBQUFBLFVBT3VCQyxFQVB2Qjs7QUFRSixVQUFJakMsRUFBRSxHQUFHLENBQVQ7QUFDQSxVQUFJQyxFQUFFLEdBQUcsQ0FBVDs7QUFDQSxjQUFRUCxPQUFSO0FBQ0ksYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS0EsT0FBTCxDQUFheE8sSUFBYixHQUFvQixRQUFwQjtBQUNBLGdCQUFNNE8sTUFBTSxHQUFHLEtBQUtKLE9BQXBCO0FBQ0FJLGtCQUFNLENBQUN4TCxDQUFQLEdBQVdzTixFQUFYO0FBQ0E5QixrQkFBTSxDQUFDdkwsQ0FBUCxHQUFXc04sRUFBWDtBQUNBLGlCQUFLVCxLQUFMLEdBQWF0QixNQUFNLENBQUN4TCxDQUFwQjtBQUNBLGlCQUFLK00sS0FBTCxHQUFhdkIsTUFBTSxDQUFDdkwsQ0FBcEI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUttTCxPQUFMLENBQWF4TyxJQUFiLEdBQW9CLFFBQXBCO0FBQ0EsZ0JBQU00TyxPQUFNLEdBQUcsS0FBS0osT0FBcEI7QUFDQUksbUJBQU0sQ0FBQ3hMLENBQVAsR0FBV3NOLEVBQUUsR0FBRyxLQUFLUixLQUFyQjtBQUNBdEIsbUJBQU0sQ0FBQ3ZMLENBQVAsR0FBV3NOLEVBQUUsR0FBRyxLQUFLUixLQUFyQjtBQUNBLGlCQUFLRCxLQUFMLEdBQWF0QixPQUFNLENBQUN4TCxDQUFwQjtBQUNBLGlCQUFLK00sS0FBTCxHQUFhdkIsT0FBTSxDQUFDdkwsQ0FBcEI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUttTCxPQUFMLENBQWF4TyxJQUFiLEdBQW9CLFFBQXBCO0FBQ0EsZ0JBQU1nUixNQUFNLEdBQUcsS0FBS3hDLE9BQXBCO0FBQ0F3QyxrQkFBTSxDQUFDNU4sQ0FBUCxHQUFXc04sRUFBWDtBQUNBTSxrQkFBTSxDQUFDM04sQ0FBUCxHQUFXc04sRUFBWDtBQUNBLGlCQUFLVCxLQUFMLEdBQWFjLE1BQU0sQ0FBQzVOLENBQXBCO0FBQ0EsaUJBQUsrTSxLQUFMLEdBQWFhLE1BQU0sQ0FBQzNOLENBQXBCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLbUwsT0FBTCxDQUFheE8sSUFBYixHQUFvQixRQUFwQjtBQUNBLGdCQUFNZ1IsT0FBTSxHQUFHLEtBQUt4QyxPQUFwQjtBQUNBd0MsbUJBQU0sQ0FBQzVOLENBQVAsR0FBV3NOLEVBQUUsR0FBRyxLQUFLUixLQUFyQjtBQUNBYyxtQkFBTSxDQUFDM04sQ0FBUCxHQUFXc04sRUFBRSxHQUFHLEtBQUtSLEtBQXJCO0FBQ0EsaUJBQUtELEtBQUwsR0FBYWMsT0FBTSxDQUFDNU4sQ0FBcEI7QUFDQSxpQkFBSytNLEtBQUwsR0FBYWEsT0FBTSxDQUFDM04sQ0FBcEI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUttTCxPQUFMLENBQWF4TyxJQUFiLEdBQW9CLFFBQXBCO0FBQ0EsZ0JBQU1nUixRQUFNLEdBQUcsS0FBS3hDLE9BQXBCO0FBQ0F3QyxvQkFBTSxDQUFDNU4sQ0FBUCxHQUFXc04sRUFBWDtBQUNBTSxvQkFBTSxDQUFDM04sQ0FBUCxHQUFXLEtBQUs4TSxLQUFoQjtBQUNBLGlCQUFLRCxLQUFMLEdBQWFjLFFBQU0sQ0FBQzVOLENBQXBCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLb0wsT0FBTCxDQUFheE8sSUFBYixHQUFvQixRQUFwQjtBQUNBLGdCQUFNZ1IsUUFBTSxHQUFHLEtBQUt4QyxPQUFwQjtBQUNBd0Msb0JBQU0sQ0FBQzVOLENBQVAsR0FBV3NOLEVBQUUsR0FBRyxLQUFLUixLQUFyQjtBQUNBYyxvQkFBTSxDQUFDM04sQ0FBUCxHQUFXLEtBQUs4TSxLQUFoQjtBQUNBLGlCQUFLRCxLQUFMLEdBQWFjLFFBQU0sQ0FBQzVOLENBQXBCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLb0wsT0FBTCxDQUFheE8sSUFBYixHQUFvQixRQUFwQjtBQUNBLGdCQUFNZ1IsUUFBTSxHQUFHLEtBQUt4QyxPQUFwQjtBQUNBd0Msb0JBQU0sQ0FBQzVOLENBQVAsR0FBVyxLQUFLOE0sS0FBaEI7QUFDQWMsb0JBQU0sQ0FBQzNOLENBQVAsR0FBV3FOLEVBQVg7QUFDQSxpQkFBS1AsS0FBTCxHQUFhYSxRQUFNLENBQUMzTixDQUFwQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS21MLE9BQUwsQ0FBYXhPLElBQWIsR0FBb0IsUUFBcEI7QUFDQSxnQkFBTWdSLFFBQU0sR0FBRyxLQUFLeEMsT0FBcEI7QUFDQXdDLG9CQUFNLENBQUM1TixDQUFQLEdBQVcsS0FBSzhNLEtBQWhCO0FBQ0FjLG9CQUFNLENBQUMzTixDQUFQLEdBQVdxTixFQUFFLEdBQUcsS0FBS1AsS0FBckI7QUFDQSxpQkFBS0EsS0FBTCxHQUFhYSxRQUFNLENBQUMzTixDQUFwQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS21MLE9BQUwsQ0FBYXhPLElBQWIsR0FBb0IsY0FBcEI7QUFDQSxnQkFBTWdQLFlBQVksR0FBRyxLQUFLUixPQUExQjtBQUNBUSx3QkFBWSxDQUFDRixFQUFiLEdBQWtCNEIsRUFBbEI7QUFDQTFCLHdCQUFZLENBQUNELEVBQWIsR0FBa0I0QixFQUFsQjtBQUNBM0Isd0JBQVksQ0FBQ0MsRUFBYixHQUFrQjJCLEVBQWxCO0FBQ0E1Qix3QkFBWSxDQUFDRSxFQUFiLEdBQWtCMkIsRUFBbEI7QUFDQTdCLHdCQUFZLENBQUM1TCxDQUFiLEdBQWlCME4sRUFBakI7QUFDQTlCLHdCQUFZLENBQUMzTCxDQUFiLEdBQWlCME4sRUFBakI7QUFDQWpDLGNBQUUsR0FBR0UsWUFBWSxDQUFDNUwsQ0FBYixJQUFrQjRMLFlBQVksQ0FBQ0MsRUFBYixHQUFrQkQsWUFBWSxDQUFDNUwsQ0FBakQsQ0FBTDtBQUNBMkwsY0FBRSxHQUFHQyxZQUFZLENBQUMzTCxDQUFiLElBQWtCMkwsWUFBWSxDQUFDRSxFQUFiLEdBQWtCRixZQUFZLENBQUMzTCxDQUFqRCxDQUFMO0FBQ0EsaUJBQUs2TSxLQUFMLEdBQWFsQixZQUFZLENBQUM1TCxDQUExQjtBQUNBLGlCQUFLK00sS0FBTCxHQUFhbkIsWUFBWSxDQUFDM0wsQ0FBMUI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUttTCxPQUFMLENBQWF4TyxJQUFiLEdBQW9CLGNBQXBCO0FBQ0EsZ0JBQU1nUCxhQUFZLEdBQUcsS0FBS1IsT0FBMUI7QUFDQVEseUJBQVksQ0FBQ0YsRUFBYixHQUFrQjRCLEVBQUUsR0FBRyxLQUFLUixLQUE1QjtBQUNBbEIseUJBQVksQ0FBQ0QsRUFBYixHQUFrQjRCLEVBQUUsR0FBRyxLQUFLUixLQUE1QjtBQUNBbkIseUJBQVksQ0FBQ0MsRUFBYixHQUFrQjJCLEVBQUUsR0FBRyxLQUFLVixLQUE1QjtBQUNBbEIseUJBQVksQ0FBQ0UsRUFBYixHQUFrQjJCLEVBQUUsR0FBRyxLQUFLVixLQUE1QjtBQUNBbkIseUJBQVksQ0FBQzVMLENBQWIsR0FBaUIwTixFQUFFLEdBQUcsS0FBS1osS0FBM0I7QUFDQWxCLHlCQUFZLENBQUMzTCxDQUFiLEdBQWlCME4sRUFBRSxHQUFHLEtBQUtaLEtBQTNCO0FBQ0FyQixjQUFFLEdBQUdFLGFBQVksQ0FBQzVMLENBQWIsSUFBa0I0TCxhQUFZLENBQUNDLEVBQWIsR0FBa0JELGFBQVksQ0FBQzVMLENBQWpELENBQUw7QUFDQTJMLGNBQUUsR0FBR0MsYUFBWSxDQUFDM0wsQ0FBYixJQUFrQjJMLGFBQVksQ0FBQ0UsRUFBYixHQUFrQkYsYUFBWSxDQUFDM0wsQ0FBakQsQ0FBTDtBQUNBLGlCQUFLNk0sS0FBTCxHQUFhbEIsYUFBWSxDQUFDNUwsQ0FBMUI7QUFDQSxpQkFBSytNLEtBQUwsR0FBYW5CLGFBQVksQ0FBQzNMLENBQTFCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLbUwsT0FBTCxDQUFheE8sSUFBYixHQUFvQixjQUFwQjtBQUNBLGdCQUFNZ1AsY0FBWSxHQUFHLEtBQUtSLE9BQTFCO0FBQ0FRLDBCQUFZLENBQUNGLEVBQWIsR0FBa0JBLEVBQWxCO0FBQ0FFLDBCQUFZLENBQUNELEVBQWIsR0FBa0JBLEVBQWxCO0FBQ0FDLDBCQUFZLENBQUNDLEVBQWIsR0FBa0J5QixFQUFsQjtBQUNBMUIsMEJBQVksQ0FBQ0UsRUFBYixHQUFrQnlCLEVBQWxCO0FBQ0EzQiwwQkFBWSxDQUFDNUwsQ0FBYixHQUFpQndOLEVBQWpCO0FBQ0E1QiwwQkFBWSxDQUFDM0wsQ0FBYixHQUFpQndOLEVBQWpCO0FBQ0EvQixjQUFFLEdBQUdFLGNBQVksQ0FBQzVMLENBQWIsSUFBa0I0TCxjQUFZLENBQUNDLEVBQWIsR0FBa0JELGNBQVksQ0FBQzVMLENBQWpELENBQUw7QUFDQTJMLGNBQUUsR0FBR0MsY0FBWSxDQUFDM0wsQ0FBYixJQUFrQjJMLGNBQVksQ0FBQ0UsRUFBYixHQUFrQkYsY0FBWSxDQUFDM0wsQ0FBakQsQ0FBTDtBQUNBLGlCQUFLNk0sS0FBTCxHQUFhbEIsY0FBWSxDQUFDNUwsQ0FBMUI7QUFDQSxpQkFBSytNLEtBQUwsR0FBYW5CLGNBQVksQ0FBQzNMLENBQTFCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLbUwsT0FBTCxDQUFheE8sSUFBYixHQUFvQixjQUFwQjtBQUNBLGdCQUFNZ1AsY0FBWSxHQUFHLEtBQUtSLE9BQTFCO0FBQ0FRLDBCQUFZLENBQUNGLEVBQWIsR0FBa0JBLEVBQWxCO0FBQ0FFLDBCQUFZLENBQUNELEVBQWIsR0FBa0JBLEVBQWxCO0FBQ0FDLDBCQUFZLENBQUNDLEVBQWIsR0FBa0J5QixFQUFFLEdBQUcsS0FBS1IsS0FBNUI7QUFDQWxCLDBCQUFZLENBQUNFLEVBQWIsR0FBa0J5QixFQUFFLEdBQUcsS0FBS1IsS0FBNUI7QUFDQW5CLDBCQUFZLENBQUM1TCxDQUFiLEdBQWlCd04sRUFBRSxHQUFHLEtBQUtWLEtBQTNCO0FBQ0FsQiwwQkFBWSxDQUFDM0wsQ0FBYixHQUFpQndOLEVBQUUsR0FBRyxLQUFLVixLQUEzQjtBQUNBckIsY0FBRSxHQUFHRSxjQUFZLENBQUM1TCxDQUFiLElBQWtCNEwsY0FBWSxDQUFDQyxFQUFiLEdBQWtCRCxjQUFZLENBQUM1TCxDQUFqRCxDQUFMO0FBQ0EyTCxjQUFFLEdBQUdDLGNBQVksQ0FBQzNMLENBQWIsSUFBa0IyTCxjQUFZLENBQUNFLEVBQWIsR0FBa0JGLGNBQVksQ0FBQzNMLENBQWpELENBQUw7QUFDQSxpQkFBSzZNLEtBQUwsR0FBYWxCLGNBQVksQ0FBQzVMLENBQTFCO0FBQ0EsaUJBQUsrTSxLQUFMLEdBQWFuQixjQUFZLENBQUMzTCxDQUExQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS21MLE9BQUwsQ0FBYXhPLElBQWIsR0FBb0IsU0FBcEI7QUFDQSxnQkFBTTZPLE9BQU8sR0FBRyxLQUFLTCxPQUFyQjtBQUNBSyxtQkFBTyxDQUFDQyxFQUFSLEdBQWE0QixFQUFiO0FBQ0E3QixtQkFBTyxDQUFDRSxFQUFSLEdBQWE0QixFQUFiO0FBQ0E5QixtQkFBTyxDQUFDekwsQ0FBUixHQUFZd04sRUFBWjtBQUNBL0IsbUJBQU8sQ0FBQ3hMLENBQVIsR0FBWXdOLEVBQVo7QUFDQS9CLGNBQUUsR0FBR0QsT0FBTyxDQUFDekwsQ0FBUixJQUFheUwsT0FBTyxDQUFDQyxFQUFSLEdBQWFELE9BQU8sQ0FBQ3pMLENBQWxDLENBQUw7QUFDQTJMLGNBQUUsR0FBR0YsT0FBTyxDQUFDeEwsQ0FBUixJQUFhd0wsT0FBTyxDQUFDRSxFQUFSLEdBQWFGLE9BQU8sQ0FBQ3hMLENBQWxDLENBQUw7QUFDQSxpQkFBSzZNLEtBQUwsR0FBYXJCLE9BQU8sQ0FBQ3pMLENBQXJCO0FBQ0EsaUJBQUsrTSxLQUFMLEdBQWF0QixPQUFPLENBQUN4TCxDQUFyQjtBQUNIO0FBQ0Q7O0FBQ0osYUFBSyxHQUFMO0FBQ0k7QUFDSSxpQkFBS21MLE9BQUwsQ0FBYXhPLElBQWIsR0FBb0IsU0FBcEI7QUFDQSxnQkFBTTZPLFFBQU8sR0FBRyxLQUFLTCxPQUFyQjtBQUNBSyxvQkFBTyxDQUFDQyxFQUFSLEdBQWE0QixFQUFFLEdBQUcsS0FBS1IsS0FBdkI7QUFDQXJCLG9CQUFPLENBQUNFLEVBQVIsR0FBYTRCLEVBQUUsR0FBRyxLQUFLUixLQUF2QjtBQUNBdEIsb0JBQU8sQ0FBQ3pMLENBQVIsR0FBWXdOLEVBQUUsR0FBRyxLQUFLVixLQUF0QjtBQUNBckIsb0JBQU8sQ0FBQ3hMLENBQVIsR0FBWXdOLEVBQUUsR0FBRyxLQUFLVixLQUF0QjtBQUNBckIsY0FBRSxHQUFHRCxRQUFPLENBQUN6TCxDQUFSLElBQWF5TCxRQUFPLENBQUNDLEVBQVIsR0FBYUQsUUFBTyxDQUFDekwsQ0FBbEMsQ0FBTDtBQUNBMkwsY0FBRSxHQUFHRixRQUFPLENBQUN4TCxDQUFSLElBQWF3TCxRQUFPLENBQUNFLEVBQVIsR0FBYUYsUUFBTyxDQUFDeEwsQ0FBbEMsQ0FBTDtBQUNBLGlCQUFLNk0sS0FBTCxHQUFhckIsUUFBTyxDQUFDekwsQ0FBckI7QUFDQSxpQkFBSytNLEtBQUwsR0FBYXRCLFFBQU8sQ0FBQ3hMLENBQXJCO0FBQ0g7QUFDRDs7QUFDSixhQUFLLEdBQUw7QUFDSTtBQUNJLGlCQUFLbUwsT0FBTCxDQUFheE8sSUFBYixHQUFvQixTQUFwQjtBQUNBLGdCQUFNNk8sU0FBTyxHQUFHLEtBQUtMLE9BQXJCO0FBQ0FLLHFCQUFPLENBQUNDLEVBQVIsR0FBYUEsRUFBYjtBQUNBRCxxQkFBTyxDQUFDRSxFQUFSLEdBQWFBLEVBQWI7QUFDQUYscUJBQU8sQ0FBQ3pMLENBQVIsR0FBWXNOLEVBQVo7QUFDQTdCLHFCQUFPLENBQUN4TCxDQUFSLEdBQVlzTixFQUFaO0FBQ0E3QixjQUFFLEdBQUdELFNBQU8sQ0FBQ3pMLENBQVIsSUFBYXlMLFNBQU8sQ0FBQ0MsRUFBUixHQUFhRCxTQUFPLENBQUN6TCxDQUFsQyxDQUFMO0FBQ0EyTCxjQUFFLEdBQUdGLFNBQU8sQ0FBQ3hMLENBQVIsSUFBYXdMLFNBQU8sQ0FBQ0UsRUFBUixHQUFhRixTQUFPLENBQUN4TCxDQUFsQyxDQUFMO0FBQ0EsaUJBQUs2TSxLQUFMLEdBQWFyQixTQUFPLENBQUN6TCxDQUFyQjtBQUNBLGlCQUFLK00sS0FBTCxHQUFhdEIsU0FBTyxDQUFDeEwsQ0FBckI7QUFDSDtBQUNEOztBQUNKLGFBQUssR0FBTDtBQUNJO0FBQ0ksaUJBQUttTCxPQUFMLENBQWF4TyxJQUFiLEdBQW9CLFNBQXBCO0FBQ0EsZ0JBQU02TyxTQUFPLEdBQUcsS0FBS0wsT0FBckI7QUFDQUsscUJBQU8sQ0FBQ0MsRUFBUixHQUFhQSxFQUFiO0FBQ0FELHFCQUFPLENBQUNFLEVBQVIsR0FBYUEsRUFBYjtBQUNBRixxQkFBTyxDQUFDekwsQ0FBUixHQUFZc04sRUFBRSxHQUFHLEtBQUtSLEtBQXRCO0FBQ0FyQixxQkFBTyxDQUFDeEwsQ0FBUixHQUFZc04sRUFBRSxHQUFHLEtBQUtSLEtBQXRCO0FBQ0FyQixjQUFFLEdBQUdELFNBQU8sQ0FBQ3pMLENBQVIsSUFBYXlMLFNBQU8sQ0FBQ0MsRUFBUixHQUFhRCxTQUFPLENBQUN6TCxDQUFsQyxDQUFMO0FBQ0EyTCxjQUFFLEdBQUdGLFNBQU8sQ0FBQ3hMLENBQVIsSUFBYXdMLFNBQU8sQ0FBQ0UsRUFBUixHQUFhRixTQUFPLENBQUN4TCxDQUFsQyxDQUFMO0FBQ0EsaUJBQUs2TSxLQUFMLEdBQWFyQixTQUFPLENBQUN6TCxDQUFyQjtBQUNBLGlCQUFLK00sS0FBTCxHQUFhdEIsU0FBTyxDQUFDeEwsQ0FBckI7QUFDSDtBQUNEOztBQUNKO0FBQ0k7QUF0TVI7QUF3TUg7QUExT0w7O0FBQUE7QUFBQTtBQTRPQSxJQUFNNE4sTUFBTSxHQUFHLElBQUlsQixvQkFBSixFQUFmO0FBQ08sSUFBSXhCLGNBQUo7O0FBQ1AsQ0FBQyxVQUFVQSxjQUFWLEVBQTBCO0FBQ3ZCLFdBQVNQLGVBQVQsQ0FBeUJXLElBQXpCLEVBQStCcEYsTUFBL0IsRUFBdUM7QUFDbkMwSCxVQUFNLENBQUNiLE9BQVAsQ0FBZXpCLElBQWY7O0FBQ0EsV0FBT3NDLE1BQU0sQ0FBQ1osT0FBUCxFQUFQLEVBQXlCO0FBQ3JCWSxZQUFNLENBQUNYLFFBQVA7QUFDQSxVQUFNOUIsT0FBTyxHQUFHeUMsTUFBTSxDQUFDVCxVQUFQLEVBQWhCOztBQUNBLFVBQUloQyxPQUFKLEVBQWE7QUFDVEMsc0VBQUEsQ0FBNEJELE9BQTVCLEVBQXFDakYsTUFBckM7QUFDSDtBQUNKO0FBQ0o7O0FBQ0RnRixnQkFBYyxDQUFDUCxlQUFmLEdBQWlDQSxlQUFqQztBQUNILENBWkQsRUFZR08sY0FBYyxLQUFLQSxjQUFjLEdBQUcsRUFBdEIsQ0FaakIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzlTcUIyQyxRO0FBQ2pCLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2YsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7Ozs7Z0NBQytCO0FBQUEsVUFBdEJsVSxLQUFzQix1RUFBZCxDQUFjO0FBQUEsVUFBWEMsS0FBVyx1RUFBSCxDQUFHO0FBQzVCLFdBQUtrVSxJQUFMLEdBQVk7QUFDUnBSLFlBQUksRUFBRSxPQURFO0FBRVIvQyxhQUFLLEVBQUxBLEtBRlE7QUFHUkMsYUFBSyxFQUFMQTtBQUhRLE9BQVo7QUFLSDs7O29DQUNla0ssRyxFQUFLdEYsTSxFQUF1QztBQUFBLFVBQS9CdVAsTUFBK0IsdUVBQXRCLElBQXNCO0FBQUEsVUFBaEJDLE1BQWdCLHVFQUFQLEtBQU87QUFDeEQsV0FBS0YsSUFBTCxHQUFZO0FBQ1JwUixZQUFJLEVBQUUsUUFERTtBQUVSb0gsV0FBRyxFQUFIQSxHQUZRO0FBR1J0RixjQUFNLEVBQU5BLE1BSFE7QUFJUnVQLGNBQU0sRUFBTkEsTUFKUTtBQUtSQyxjQUFNLEVBQU5BO0FBTFEsT0FBWjtBQU9IOzs7c0NBQ2lCdFIsSSxFQUFNL0MsSyxFQUFPQyxLLEVBQU9xVSxLLEVBQU96UCxNLEVBQXVFO0FBQUEsVUFBL0QwUCxNQUErRCx1RUFBdEQsUUFBc0Q7QUFBQSxVQUE1Q0MsYUFBNEMsdUVBQTVCLEtBQTRCO0FBQUEsVUFBckJDLGVBQXFCLHVFQUFILENBQUc7QUFDaEgsV0FBS04sSUFBTCxHQUFZO0FBQ1JwUixZQUFJLEVBQUpBLElBRFE7QUFFUi9DLGFBQUssRUFBTEEsS0FGUTtBQUdSQyxhQUFLLEVBQUxBLEtBSFE7QUFJUnFVLGFBQUssRUFBTEEsS0FKUTtBQUtSelAsY0FBTSxFQUFOQSxNQUxRO0FBTVIwUCxjQUFNLEVBQU5BLE1BTlE7QUFPUkMscUJBQWEsRUFBYkEsYUFQUTtBQVFSQyx1QkFBZSxFQUFmQTtBQVJRLE9BQVo7QUFVSDs7O2dDQUMwSTtBQUFBLFVBQWpJQyxTQUFpSSx1RUFBckgsQ0FBcUg7QUFBQSxVQUFsSDFVLEtBQWtILHVFQUExRyxDQUEwRztBQUFBLFVBQXZHQyxLQUF1Ryx1RUFBL0YsQ0FBK0Y7QUFBQSxVQUE1RjBVLFlBQTRGLHVFQUE3RSxLQUE2RTtBQUFBLFVBQXRFQyxTQUFzRSx1RUFBMUQsTUFBMEQ7QUFBQSxVQUFsREMsSUFBa0QsdUVBQTNDLE9BQTJDO0FBQUEsVUFBbENDLE1BQWtDLHVFQUF6QixPQUF5QjtBQUFBLFVBQWhCQyxVQUFnQix1RUFBSCxDQUFHO0FBQ3ZJLFdBQUtDLE1BQUwsR0FBYztBQUNWTixpQkFBUyxFQUFUQSxTQURVO0FBRVZDLG9CQUFZLEVBQVpBLFlBRlU7QUFHVkMsaUJBQVMsRUFBVEEsU0FIVTtBQUlWQyxZQUFJLEVBQUpBLElBSlU7QUFLVkMsY0FBTSxFQUFOQSxNQUxVO0FBTVZDLGtCQUFVLEVBQVZBLFVBTlU7QUFPVlosWUFBSSxFQUFFO0FBQ0ZwUixjQUFJLEVBQUUsT0FESjtBQUVGL0MsZUFBSyxFQUFMQSxLQUZFO0FBR0ZDLGVBQUssRUFBTEE7QUFIRTtBQVBJLE9BQWQ7QUFhSDs7O3NDQUNpQjhDLEksRUFBTS9DLEssRUFBT0MsSyxFQUFPcVUsSyxFQUFPelAsTSxFQUF1RTtBQUFBLFVBQS9EMFAsTUFBK0QsdUVBQXRELFFBQXNEO0FBQUEsVUFBNUNDLGFBQTRDLHVFQUE1QixLQUE0QjtBQUFBLFVBQXJCQyxlQUFxQix1RUFBSCxDQUFHOztBQUNoSCxVQUFJLENBQUMsS0FBS08sTUFBVixFQUFrQjtBQUNkO0FBQ0g7O0FBQ0QsV0FBS0EsTUFBTCxDQUFZYixJQUFaLEdBQW1CO0FBQ2ZwUixZQUFJLEVBQUpBLElBRGU7QUFFZi9DLGFBQUssRUFBTEEsS0FGZTtBQUdmQyxhQUFLLEVBQUxBLEtBSGU7QUFJZnFVLGFBQUssRUFBTEEsS0FKZTtBQUtmelAsY0FBTSxFQUFOQSxNQUxlO0FBTWYwUCxjQUFNLEVBQU5BLE1BTmU7QUFPZkMscUJBQWEsRUFBYkEsYUFQZTtBQVFmQyx1QkFBZSxFQUFmQTtBQVJlLE9BQW5CO0FBVUg7OztvQ0FDZXRLLEcsRUFBS3RGLE0sRUFBdUM7QUFBQSxVQUEvQnVQLE1BQStCLHVFQUF0QixJQUFzQjtBQUFBLFVBQWhCQyxNQUFnQix1RUFBUCxLQUFPOztBQUN4RCxVQUFJLENBQUMsS0FBS1csTUFBVixFQUFrQjtBQUNkO0FBQ0g7O0FBQ0QsV0FBS0EsTUFBTCxDQUFZYixJQUFaLEdBQW1CO0FBQ2ZwUixZQUFJLEVBQUUsUUFEUztBQUVmb0gsV0FBRyxFQUFIQSxHQUZlO0FBR2Z0RixjQUFNLEVBQU5BLE1BSGU7QUFJZnVQLGNBQU0sRUFBTkEsTUFKZTtBQUtmQyxjQUFNLEVBQU5BO0FBTGUsT0FBbkI7QUFPSDs7OzJCQUNNbE8sQyxFQUFHQyxDLEVBQUc7QUFDVCxVQUFNc0wsSUFBSSxHQUFHLEtBQUt1RCxTQUFMLEVBQWI7QUFDQXZELFVBQUksQ0FBQ3dELElBQUwsQ0FBVTtBQUFFblMsWUFBSSxFQUFFLFFBQVI7QUFBa0JvRCxTQUFDLEVBQURBLENBQWxCO0FBQXFCQyxTQUFDLEVBQURBO0FBQXJCLE9BQVY7QUFDSDs7OzJCQUNNRCxDLEVBQUdDLEMsRUFBRztBQUNULFVBQU1zTCxJQUFJLEdBQUcsS0FBS3lELE9BQUwsRUFBYjs7QUFDQSxVQUFJLENBQUN6RCxJQUFMLEVBQVc7QUFDUDtBQUNIOztBQUNEQSxVQUFJLENBQUN3RCxJQUFMLENBQVU7QUFBRW5TLFlBQUksRUFBRSxRQUFSO0FBQWtCb0QsU0FBQyxFQUFEQSxDQUFsQjtBQUFxQkMsU0FBQyxFQUFEQTtBQUFyQixPQUFWO0FBQ0g7Ozs0QkFDT3lMLEUsRUFBSUMsRSxFQUFJM0wsQyxFQUFHQyxDLEVBQUc7QUFDbEIsVUFBTXNMLElBQUksR0FBRyxLQUFLeUQsT0FBTCxFQUFiOztBQUNBLFVBQUksQ0FBQ3pELElBQUwsRUFBVztBQUNQO0FBQ0g7O0FBQ0RBLFVBQUksQ0FBQ3dELElBQUwsQ0FBVTtBQUNOblMsWUFBSSxFQUFFLFNBREE7QUFDVzhPLFVBQUUsRUFBRkEsRUFEWDtBQUNlQyxVQUFFLEVBQUZBLEVBRGY7QUFDbUIzTCxTQUFDLEVBQURBLENBRG5CO0FBQ3NCQyxTQUFDLEVBQURBO0FBRHRCLE9BQVY7QUFHSDs7O2lDQUNZeUwsRSxFQUFJQyxFLEVBQUlFLEUsRUFBSUMsRSxFQUFJOUwsQyxFQUFHQyxDLEVBQUc7QUFDL0IsVUFBTXNMLElBQUksR0FBRyxLQUFLeUQsT0FBTCxFQUFiOztBQUNBLFVBQUksQ0FBQ3pELElBQUwsRUFBVztBQUNQO0FBQ0g7O0FBQ0RBLFVBQUksQ0FBQ3dELElBQUwsQ0FBVTtBQUNOblMsWUFBSSxFQUFFLFNBREE7QUFDVzhPLFVBQUUsRUFBRkEsRUFEWDtBQUNlQyxVQUFFLEVBQUZBLEVBRGY7QUFDbUJFLFVBQUUsRUFBRkEsRUFEbkI7QUFDdUJDLFVBQUUsRUFBRkEsRUFEdkI7QUFDMkI5TCxTQUFDLEVBQURBLENBRDNCO0FBQzhCQyxTQUFDLEVBQURBO0FBRDlCLE9BQVY7QUFHSDs7O2tDQUNhRCxDLEVBQUdDLEMsRUFBRzVFLEssRUFBT0MsTSxFQUE2QztBQUFBLFVBQXJDMlQsWUFBcUMsdUVBQXRCLENBQXNCO0FBQUEsVUFBbkJDLGFBQW1CLHVFQUFILENBQUc7QUFDcEUsVUFBTTNELElBQUksR0FBRyxLQUFLdUQsU0FBTCxFQUFiO0FBQ0EsVUFBTUssQ0FBQyxHQUFHRixZQUFWO0FBQ0EsVUFBTUcsQ0FBQyxHQUFHRixhQUFWO0FBQ0EsVUFBTUcsQ0FBQyxHQUFHLFNBQVY7QUFDQSxVQUFNQyxFQUFFLEdBQUlILENBQUMsR0FBRyxDQUFMLEdBQVVFLENBQXJCO0FBQ0EsVUFBTUUsRUFBRSxHQUFJSCxDQUFDLEdBQUcsQ0FBTCxHQUFVQyxDQUFyQjtBQUNBLFVBQU1HLEVBQUUsR0FBR3hQLENBQUMsR0FBR21QLENBQWY7QUFDQSxVQUFNTSxFQUFFLEdBQUd4UCxDQUFDLEdBQUdtUCxDQUFmO0FBQ0EsVUFBTU0sRUFBRSxHQUFHMVAsQ0FBQyxHQUFHbVAsQ0FBQyxHQUFHLENBQW5CO0FBQ0EsVUFBTVEsRUFBRSxHQUFHMVAsQ0FBQyxHQUFHbVAsQ0FBQyxHQUFHLENBQW5CO0FBQ0EsVUFBTVEsRUFBRSxHQUFHdlUsS0FBSyxHQUFHOFQsQ0FBbkI7QUFDQSxVQUFNVSxFQUFFLEdBQUd2VSxNQUFNLEdBQUc4VCxDQUFwQjtBQUNBN0QsVUFBSSxDQUFDd0QsSUFBTCxDQUFVO0FBQ05uUyxZQUFJLEVBQUUsUUFEQTtBQUVOb0QsU0FBQyxFQUFEQSxDQUZNO0FBR05DLFNBQUMsRUFBRTBQO0FBSEcsT0FBVjtBQUtBcEUsVUFBSSxDQUFDd0QsSUFBTCxDQUFVO0FBQ05uUyxZQUFJLEVBQUUsY0FEQTtBQUVOOE8sVUFBRSxFQUFFMUwsQ0FGRTtBQUdOMkwsVUFBRSxFQUFFZ0UsRUFBRSxHQUFHSixFQUhIO0FBSU4xRCxVQUFFLEVBQUU2RCxFQUFFLEdBQUdKLEVBSkg7QUFLTnhELFVBQUUsRUFBRTdMLENBTEU7QUFNTkQsU0FBQyxFQUFFMFAsRUFORztBQU9OelAsU0FBQyxFQUFEQTtBQVBNLE9BQVY7QUFTQXNMLFVBQUksQ0FBQ3dELElBQUwsQ0FBVTtBQUNOblMsWUFBSSxFQUFFLFFBREE7QUFFTm9ELFNBQUMsRUFBRTBQLEVBQUUsR0FBR0UsRUFGRjtBQUdOM1AsU0FBQyxFQUFEQTtBQUhNLE9BQVY7QUFLQXNMLFVBQUksQ0FBQ3dELElBQUwsQ0FBVTtBQUNOblMsWUFBSSxFQUFFLGNBREE7QUFFTjhPLFVBQUUsRUFBRWdFLEVBQUUsR0FBR0osRUFBTCxHQUFVTSxFQUZSO0FBR05qRSxVQUFFLEVBQUUxTCxDQUhFO0FBSU40TCxVQUFFLEVBQUUyRCxFQUFFLEdBQUdJLEVBSkg7QUFLTjlELFVBQUUsRUFBRTZELEVBQUUsR0FBR0osRUFMSDtBQU1OdlAsU0FBQyxFQUFFd1AsRUFBRSxHQUFHSSxFQU5GO0FBT04zUCxTQUFDLEVBQUUwUDtBQVBHLE9BQVY7QUFTQXBFLFVBQUksQ0FBQ3dELElBQUwsQ0FBVTtBQUNOblMsWUFBSSxFQUFFLFFBREE7QUFFTm9ELFNBQUMsRUFBRXdQLEVBQUUsR0FBR0ksRUFGRjtBQUdOM1AsU0FBQyxFQUFFMFAsRUFBRSxHQUFHRTtBQUhGLE9BQVY7QUFLQXRFLFVBQUksQ0FBQ3dELElBQUwsQ0FBVTtBQUNOblMsWUFBSSxFQUFFLGNBREE7QUFFTjhPLFVBQUUsRUFBRThELEVBQUUsR0FBR0ksRUFGSDtBQUdOakUsVUFBRSxFQUFFZ0UsRUFBRSxHQUFHSixFQUFMLEdBQVVNLEVBSFI7QUFJTmhFLFVBQUUsRUFBRTZELEVBQUUsR0FBR0osRUFBTCxHQUFVTSxFQUpSO0FBS045RCxVQUFFLEVBQUUyRCxFQUFFLEdBQUdJLEVBTEg7QUFNTjdQLFNBQUMsRUFBRTBQLEVBQUUsR0FBR0UsRUFORjtBQU9OM1AsU0FBQyxFQUFFd1AsRUFBRSxHQUFHSTtBQVBGLE9BQVY7QUFTQXRFLFVBQUksQ0FBQ3dELElBQUwsQ0FBVTtBQUNOblMsWUFBSSxFQUFFLFFBREE7QUFFTm9ELFNBQUMsRUFBRTBQLEVBRkc7QUFHTnpQLFNBQUMsRUFBRXdQLEVBQUUsR0FBR0k7QUFIRixPQUFWO0FBS0F0RSxVQUFJLENBQUN3RCxJQUFMLENBQVU7QUFDTm5TLFlBQUksRUFBRSxjQURBO0FBRU44TyxVQUFFLEVBQUVnRSxFQUFFLEdBQUdKLEVBRkg7QUFHTjNELFVBQUUsRUFBRThELEVBQUUsR0FBR0ksRUFISDtBQUlOaEUsVUFBRSxFQUFFN0wsQ0FKRTtBQUtOOEwsVUFBRSxFQUFFNkQsRUFBRSxHQUFHSixFQUFMLEdBQVVNLEVBTFI7QUFNTjdQLFNBQUMsRUFBREEsQ0FOTTtBQU9OQyxTQUFDLEVBQUUwUCxFQUFFLEdBQUdFO0FBUEYsT0FBVjtBQVNIOzs7NkJBQ1E3UCxDLEVBQUdDLEMsRUFBRzVFLEssRUFBT0MsTSxFQUFRO0FBQzFCLFVBQU1tTyxJQUFJLEdBQUcsS0FBS3FHLFVBQUwsRUFBYjtBQUNBckcsVUFBSSxDQUFDN00sSUFBTCxHQUFZLFdBQVo7QUFDQTZNLFVBQUksQ0FBQ3pKLENBQUwsR0FBU0EsQ0FBVDtBQUNBeUosVUFBSSxDQUFDeEosQ0FBTCxHQUFTQSxDQUFUO0FBQ0F3SixVQUFJLENBQUNwTyxLQUFMLEdBQWFBLEtBQWI7QUFDQW9PLFVBQUksQ0FBQ25PLE1BQUwsR0FBY0EsTUFBZDtBQUNIOzs7K0JBQ1UwRSxDLEVBQUdDLEMsRUFBRzZLLE0sRUFBUTtBQUNyQixVQUFNckIsSUFBSSxHQUFHLEtBQUtxRyxVQUFMLEVBQWI7QUFDQXJHLFVBQUksQ0FBQzdNLElBQUwsR0FBWSxTQUFaO0FBQ0E2TSxVQUFJLENBQUN6SixDQUFMLEdBQVNBLENBQVQ7QUFDQXlKLFVBQUksQ0FBQ3hKLENBQUwsR0FBU0EsQ0FBVDtBQUNBd0osVUFBSSxDQUFDcUIsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7OztnQ0FDVzlLLEMsRUFBR0MsQyxFQUFHNUUsSyxFQUFPQyxNLEVBQVE7QUFDN0IsVUFBTW1PLElBQUksR0FBRyxLQUFLcUcsVUFBTCxFQUFiO0FBQ0FyRyxVQUFJLENBQUM3TSxJQUFMLEdBQVksU0FBWjtBQUNBNk0sVUFBSSxDQUFDc0IsT0FBTCxHQUFlMVAsS0FBSyxHQUFHLENBQXZCO0FBQ0FvTyxVQUFJLENBQUN1QixPQUFMLEdBQWUxUCxNQUFNLEdBQUcsQ0FBeEI7QUFDQW1PLFVBQUksQ0FBQ3pKLENBQUwsR0FBU0EsQ0FBQyxHQUFHeUosSUFBSSxDQUFDc0IsT0FBbEI7QUFDQXRCLFVBQUksQ0FBQ3hKLENBQUwsR0FBU0EsQ0FBQyxHQUFHd0osSUFBSSxDQUFDdUIsT0FBbEI7QUFDSDs7OzRCQUNPO0FBQ0osYUFBTyxLQUFLK0MsS0FBTCxDQUFXdEUsSUFBbEI7QUFDSDs7O2lDQUNZO0FBQUEsVUFDRHNFLEtBREMsR0FDdUIsSUFEdkIsQ0FDREEsS0FEQztBQUFBLFVBQ01DLElBRE4sR0FDdUIsSUFEdkIsQ0FDTUEsSUFETjtBQUFBLFVBQ1lhLE1BRFosR0FDdUIsSUFEdkIsQ0FDWUEsTUFEWjs7QUFFVCxVQUFJcFMsS0FBSyxDQUFDQyxPQUFOLENBQWNxUixLQUFLLENBQUN0RSxJQUFwQixDQUFKLEVBQStCLENBQzlCLENBREQsTUFFSyxJQUFJLFFBQU9zRSxLQUFLLENBQUN0RSxJQUFiLE1BQXNCLFFBQTFCLEVBQW9DO0FBQ3JDc0UsYUFBSyxDQUFDdEUsSUFBTixHQUFhLENBQUNzRSxLQUFLLENBQUN0RSxJQUFQLENBQWI7QUFDSCxPQUZJLE1BR0E7QUFDRHNFLGFBQUssQ0FBQ3RFLElBQU4sR0FBYSxFQUFiO0FBQ0g7O0FBQ0QsVUFBTXNHLFlBQVksR0FBRztBQUFFblQsWUFBSSxFQUFFLE1BQVI7QUFBZ0JvUixZQUFJLEVBQUpBLElBQWhCO0FBQXNCYSxjQUFNLEVBQU5BO0FBQXRCLE9BQXJCO0FBQ0FkLFdBQUssQ0FBQ3RFLElBQU4sQ0FBV3NGLElBQVgsQ0FBZ0JnQixZQUFoQjtBQUNBLGFBQU9BLFlBQVA7QUFDSDs7O2dDQUNXO0FBQ1IsVUFBTXRHLElBQUksR0FBRyxLQUFLcUcsVUFBTCxFQUFiO0FBQ0FyRyxVQUFJLENBQUNBLElBQUwsR0FBWSxFQUFaO0FBQ0EsYUFBT0EsSUFBSSxDQUFDQSxJQUFaO0FBQ0g7Ozs4QkFDUztBQUFBLFVBQ0VzRSxLQURGLEdBQ1ksSUFEWixDQUNFQSxLQURGOztBQUVOLFVBQUksQ0FBQ3RSLEtBQUssQ0FBQ0MsT0FBTixDQUFjcVIsS0FBSyxDQUFDdEUsSUFBcEIsQ0FBRCxJQUE4QixDQUFDc0UsS0FBSyxDQUFDdEUsSUFBTixDQUFXOU0sTUFBOUMsRUFBc0Q7QUFDbEQsZUFBT3VOLFNBQVA7QUFDSDs7QUFDRCxVQUFNVCxJQUFJLEdBQUdzRSxLQUFLLENBQUN0RSxJQUFOLENBQVdzRSxLQUFLLENBQUN0RSxJQUFOLENBQVc5TSxNQUFYLEdBQW9CLENBQS9CLENBQWI7O0FBQ0EsVUFBSSxDQUFDRixLQUFLLENBQUNDLE9BQU4sQ0FBYytNLElBQUksQ0FBQ0EsSUFBbkIsQ0FBTCxFQUErQjtBQUMzQixlQUFPUyxTQUFQO0FBQ0g7O0FBQ0QsYUFBT1QsSUFBSSxDQUFDQSxJQUFaO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcE9MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDTyxTQUFTdUcsV0FBVCxDQUFxQmpDLEtBQXJCLEVBQTRCL1EsT0FBNUIsRUFBcUMsQ0FDM0M7QUFDTSxTQUFTaVQseUJBQVQsQ0FBbUNoVCxPQUFuQyxFQUE0QztBQUMvQ2lULDZEQUFtQixDQUFDalQsT0FBRCxDQUFuQjtBQUNBQSxTQUFPLENBQUNjLGNBQVIsQ0FBdUJELEdBQXZCLENBQTJCcVMseUNBQTNCLEVBQWtDSCxXQUFsQztBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1HLEtBQUssR0FBRyxPQUFkO0FBQ0EsSUFBSUMsS0FBSjs7QUFDUCxDQUFDLFVBQVVBLEtBQVYsRUFBaUI7QUFDZCxXQUFTQyxXQUFULENBQXFCdEMsS0FBckIsRUFBNEI7QUFDeEIsV0FBTyxJQUFJRCw4Q0FBSixDQUFhQyxLQUFiLENBQVA7QUFDSDs7QUFDRHFDLE9BQUssQ0FBQ0MsV0FBTixHQUFvQkEsV0FBcEI7O0FBQ0EsV0FBU3BHLFNBQVQsQ0FBbUI4RCxLQUFuQixFQUEwQjtBQUFBLFFBQ2R0RSxJQURjLEdBQ0xzRSxLQURLLENBQ2R0RSxJQURjOztBQUV0QixRQUFJLENBQUNBLElBQUwsRUFBVztBQUNQLGFBQU9TLFNBQVA7QUFDSDs7QUFDRCxRQUFNL0QsTUFBTSxHQUFHVixtREFBQSxFQUFmOztBQUNBLFFBQUloSixLQUFLLENBQUNDLE9BQU4sQ0FBYytNLElBQWQsQ0FBSixFQUF5QjtBQUNyQixXQUFLLElBQUl2TSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHdU0sSUFBSSxDQUFDOU0sTUFBekIsRUFBaUNPLENBQUMsRUFBbEMsRUFBc0M7QUFDbENvTyw0RUFBQSxDQUE2QjdCLElBQUksQ0FBQ3ZNLENBQUQsQ0FBakMsRUFBc0NpSixNQUF0QztBQUNIO0FBQ0osS0FKRCxNQUtLLElBQUksUUFBT3NELElBQVAsTUFBZ0IsUUFBcEIsRUFBOEI7QUFDL0I2QiwwRUFBQSxDQUE2QjdCLElBQTdCLEVBQW1DdEQsTUFBbkM7QUFDSCxLQUZJLE1BR0E7QUFDRCxhQUFPK0QsU0FBUDtBQUNIOztBQUNELFFBQUl6RSxxREFBQSxDQUFlVSxNQUFmLENBQUosRUFBNEI7QUFDeEIsYUFBTytELFNBQVA7QUFDSDs7QUFDRCxRQUFNN08sS0FBSyxHQUFHOEssTUFBTSxDQUFDSixJQUFQLEdBQWNJLE1BQU0sQ0FBQ1IsSUFBbkM7QUFDQSxRQUFNckssTUFBTSxHQUFHNkssTUFBTSxDQUFDRixJQUFQLEdBQWNFLE1BQU0sQ0FBQ0wsSUFBcEM7QUFDQSxRQUFNOUYsQ0FBQyxHQUFHbUcsTUFBTSxDQUFDUixJQUFQLEdBQWMzQyxtREFBQSxDQUFXK0ssS0FBWCxFQUFrQjFTLEtBQWxCLENBQXhCO0FBQ0EsUUFBTTRFLENBQUMsR0FBR2tHLE1BQU0sQ0FBQ0wsSUFBUCxHQUFjOUMsbURBQUEsQ0FBVytLLEtBQVgsRUFBa0J6UyxNQUFsQixDQUF4QjtBQUNBLFdBQU87QUFDSDBFLE9BQUMsRUFBREEsQ0FERztBQUNBQyxPQUFDLEVBQURBLENBREE7QUFDRzVFLFdBQUssRUFBTEEsS0FESDtBQUNVQyxZQUFNLEVBQU5BO0FBRFYsS0FBUDtBQUdIOztBQUNEOFUsT0FBSyxDQUFDbkcsU0FBTixHQUFrQkEsU0FBbEI7QUFDSCxDQWxDRCxFQWtDR21HLEtBQUssS0FBS0EsS0FBSyxHQUFHLEVBQWIsQ0FsQ1I7O0FBbUNPLFNBQVMzUyxPQUFULENBQWlCc1EsS0FBakIsRUFBd0IvUSxPQUF4QixFQUFpQztBQUFBLE1BQzVCa0QsS0FENEIsR0FDbEJsRCxPQURrQixDQUM1QmtELEtBRDRCO0FBRXBDLE1BQU1pRyxNQUFNLEdBQUdpSyxLQUFLLENBQUNuRyxTQUFOLENBQWdCOEQsS0FBaEIsQ0FBZjtBQUNBLFNBQU8sQ0FBQyxDQUFDNUgsTUFBRixJQUFZa0MseURBQUEsQ0FBbUJsQyxNQUFuQixFQUEyQmpHLEtBQTNCLENBQW5CO0FBQ0g7QUFDTSxTQUFTZ1EsbUJBQVQsQ0FBNkJqVCxPQUE3QixFQUFzQztBQUN6Q0EsU0FBTyxDQUFDZSxlQUFSLENBQXdCRixHQUF4QixDQUE0QnFTLEtBQTVCLEVBQW1DMVMsT0FBbkM7QUFDQVIsU0FBTyxDQUFDc0QsU0FBUixDQUFrQkUsU0FBbEIsQ0FBNEIwSixHQUE1QixDQUFnQ0Msd0RBQWhDO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREQsSUFBTXRQLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQSxJQUFNZ0MsT0FBTyxHQUFHbEMsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQWhCO0FBQ08sSUFBTW9WLEVBQUUsR0FBRyxJQUFYO0FBQ1AsSUFBTUMsS0FBSyxHQUFHLElBQUkvUCxHQUFKLEVBQWQ7QUFDTyxTQUFTZ1EsWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEJwRSxJQUE1QixFQUFrQztBQUNyQyxtQkFBVUEsSUFBVixnQkFBb0JvRSxJQUFwQjtBQUNIO0FBQ00sU0FBU0MsV0FBVCxDQUFxQkQsSUFBckIsRUFBMkJwRSxJQUEzQixFQUFpQ3NFLElBQWpDLEVBQXVDO0FBQzFDM1QsU0FBTyxDQUFDeVQsSUFBUixHQUFlRCxZQUFZLENBQUNDLElBQUQsRUFBT3BFLElBQVAsQ0FBM0I7QUFDQSxTQUFPclAsT0FBTyxDQUFDMFQsV0FBUixDQUFvQkMsSUFBcEIsRUFBMEJ0VixLQUFqQztBQUNIO0FBQ00sU0FBU3VWLFlBQVQsQ0FBc0JILElBQXRCLEVBQTRCaEUsS0FBNUIsRUFBa0M7QUFDckMsTUFBSXBSLEtBQUssR0FBR29WLElBQUksQ0FBQ0ksTUFBTCxDQUFZaFEsR0FBWixDQUFnQjRMLEtBQWhCLENBQVo7O0FBQ0EsTUFBSSxDQUFDcFIsS0FBTCxFQUFZO0FBQ1JBLFNBQUssR0FBR3FWLFdBQVcsQ0FBQ0QsSUFBSSxDQUFDSyxJQUFOLEVBQVlSLEVBQVosRUFBZ0I3RCxLQUFoQixDQUFuQjtBQUNBZ0UsUUFBSSxDQUFDSSxNQUFMLENBQVkvUyxHQUFaLENBQWdCMk8sS0FBaEIsRUFBc0JwUixLQUF0QjtBQUNIOztBQUNELFNBQU9BLEtBQVA7QUFDSDtBQUNNLFNBQVMwVixVQUFULENBQW9CTixJQUFwQixFQUEwQk8sS0FBMUIsRUFBaUNDLE1BQWpDLEVBQXlDO0FBQzVDLE1BQU1DLElBQUksR0FBR0YsS0FBSyxHQUFHQyxNQUFyQjtBQUNBLE1BQUlFLE9BQU8sR0FBR1YsSUFBSSxDQUFDVyxRQUFMLENBQWN2USxHQUFkLENBQWtCcVEsSUFBbEIsQ0FBZDs7QUFDQSxNQUFJLENBQUNDLE9BQUwsRUFBYztBQUNWLFFBQU1FLFdBQVcsR0FBR1QsWUFBWSxDQUFDSCxJQUFELEVBQU9RLE1BQVAsQ0FBaEM7QUFDQSxRQUFNSyxVQUFVLEdBQUdaLFdBQVcsQ0FBQ0QsSUFBSSxDQUFDSyxJQUFOLEVBQVlSLEVBQVosRUFBZ0JVLEtBQUssR0FBR0MsTUFBeEIsQ0FBOUI7QUFDQUUsV0FBTyxHQUFHRyxVQUFVLEdBQUdELFdBQXZCO0FBQ0FaLFFBQUksQ0FBQ1csUUFBTCxDQUFjdFQsR0FBZCxDQUFrQm9ULElBQWxCLEVBQXdCQyxPQUF4QjtBQUNIOztBQUNELFNBQU9BLE9BQVA7QUFDSDtBQUNNLFNBQVNJLFVBQVQsQ0FBb0JkLElBQXBCLEVBQTBCcEUsSUFBMUIsRUFBZ0MyRSxLQUFoQyxFQUF1Q0MsTUFBdkMsRUFBK0M7QUFDbEQsTUFBTXZNLEtBQUssR0FBRzJILElBQUksR0FBR2lFLEVBQXJCO0FBQ0EsTUFBTWpWLEtBQUssR0FBR3VWLFlBQVksQ0FBQ0gsSUFBRCxFQUFPTyxLQUFQLENBQTFCOztBQUNBLE1BQUksQ0FBQ0MsTUFBTCxFQUFhO0FBQ1QsV0FBTzVWLEtBQUssR0FBR3FKLEtBQWY7QUFDSDs7QUFDRCxNQUFNeU0sT0FBTyxHQUFHSixVQUFVLENBQUNOLElBQUQsRUFBT08sS0FBUCxFQUFjQyxNQUFkLENBQTFCO0FBQ0EsU0FBT0UsT0FBTyxHQUFHek0sS0FBakI7QUFDSDtBQUNNLFNBQVM4TSxPQUFULENBQWlCVixJQUFqQixFQUF1QjtBQUMxQixNQUFJTCxJQUFJLEdBQUdGLEtBQUssQ0FBQzFQLEdBQU4sQ0FBVWlRLElBQVYsQ0FBWDs7QUFDQSxNQUFJLENBQUNMLElBQUwsRUFBVztBQUNQQSxRQUFJLEdBQUc7QUFDSEssVUFBSSxFQUFKQSxJQURHO0FBRUhELFlBQU0sRUFBRSxJQUFJclEsR0FBSixFQUZMO0FBR0g0USxjQUFRLEVBQUUsSUFBSTVRLEdBQUo7QUFIUCxLQUFQO0FBS0ErUCxTQUFLLENBQUN6UyxHQUFOLENBQVVnVCxJQUFWLEVBQWdCTCxJQUFoQjtBQUNIOztBQUNELFNBQU9BLElBQVA7QUFDSDtBQUNNLFNBQVNnQixZQUFULENBQXNCaEIsSUFBdEIsRUFBNEJpQixNQUE1QixFQUFvQ0MsSUFBcEMsRUFBMEM7QUFDN0MsTUFBSXRXLEtBQUssR0FBRyxDQUFaOztBQUNBLE9BQUssSUFBSTZCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd5VSxJQUFJLENBQUNoVixNQUF6QixFQUFpQ08sQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxRQUFNOFQsS0FBSyxHQUFHVyxJQUFJLENBQUNqTyxNQUFMLENBQVl4RyxDQUFaLENBQWQ7QUFDQSxRQUFNK1QsTUFBTSxHQUFHVSxJQUFJLENBQUNqTyxNQUFMLENBQVl4RyxDQUFDLEdBQUcsQ0FBaEIsQ0FBZjtBQUNBLFFBQU0wVSxPQUFPLEdBQUdMLFVBQVUsQ0FBQ2QsSUFBRCxFQUFPaUIsTUFBTSxDQUFDckYsSUFBZCxFQUFvQjJFLEtBQXBCLEVBQTJCQyxNQUEzQixDQUExQjtBQUNBNVYsU0FBSyxJQUFJdVcsT0FBVDtBQUNIOztBQUNELE1BQUlGLE1BQU0sQ0FBQ0csYUFBUCxJQUF3QkYsSUFBSSxDQUFDaFYsTUFBTCxHQUFjLENBQTFDLEVBQTZDO0FBQ3pDdEIsU0FBSyxJQUFJcVcsTUFBTSxDQUFDRyxhQUFQLElBQXdCRixJQUFJLENBQUNoVixNQUFMLEdBQWMsQ0FBdEMsQ0FBVDtBQUNIOztBQUNELFNBQU90QixLQUFQO0FBQ0g7QUFDTSxTQUFTeVcsWUFBVCxDQUFzQnJCLElBQXRCLEVBQTRCaUIsTUFBNUIsRUFBb0NLLEtBQXBDLEVBQTJDO0FBQzlDLE1BQUkxVyxLQUFLLEdBQUcsQ0FBWjs7QUFDQSxPQUFLLElBQUk2QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNlUsS0FBSyxDQUFDcFYsTUFBMUIsRUFBa0NPLENBQUMsRUFBbkMsRUFBdUM7QUFDbkMsUUFBTXlVLElBQUksR0FBR0ksS0FBSyxDQUFDN1UsQ0FBRCxDQUFsQjtBQUNBLFFBQU04VSxTQUFTLEdBQUdQLFlBQVksQ0FBQ2hCLElBQUQsRUFBT2lCLE1BQVAsRUFBZUMsSUFBZixDQUE5Qjs7QUFDQSxRQUFJdFcsS0FBSyxHQUFHMlcsU0FBWixFQUF1QjtBQUNuQjNXLFdBQUssR0FBRzJXLFNBQVI7QUFDSDtBQUNKOztBQUNELFNBQU8zVyxLQUFQO0FBQ0g7QUFDTSxTQUFTNFcsYUFBVCxDQUF1QlAsTUFBdkIsRUFBK0JLLEtBQS9CLEVBQXNDO0FBQ3pDLE1BQUl6VyxNQUFNLEdBQUdvVyxNQUFNLENBQUNyRixJQUFQLEdBQWMwRixLQUFLLENBQUNwVixNQUFqQzs7QUFDQSxNQUFJK1UsTUFBTSxDQUFDUSxPQUFQLElBQWtCSCxLQUFLLENBQUNwVixNQUFOLEdBQWUsQ0FBckMsRUFBd0M7QUFDcENyQixVQUFNLElBQUlvVyxNQUFNLENBQUNRLE9BQVAsSUFBa0JILEtBQUssQ0FBQ3BWLE1BQU4sR0FBZSxDQUFqQyxDQUFWO0FBQ0g7O0FBQ0QsU0FBT3JCLE1BQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGTSxJQUFNNlcsaUJBQWlCLEdBQUc7QUFDN0IxQixNQUFJLEVBQUUsT0FEdUI7QUFFN0JwRSxNQUFJLEVBQUUsRUFGdUI7QUFHN0J4UyxPQUFLLEVBQUUsQ0FIc0I7QUFJN0JDLE9BQUssRUFBRSxDQUpzQjtBQUs3QnNZLE1BQUksRUFBRSxLQUx1QjtBQU03QkMsUUFBTSxFQUFFLEtBTnFCO0FBTzdCQyxXQUFTLEVBQUUsS0FQa0I7QUFRN0JULGVBQWEsRUFBRSxDQVJjO0FBUzdCSyxTQUFPLEVBQUUsQ0FUb0I7QUFVN0JLLE9BQUssRUFBRSxNQVZzQjtBQVc3QkMsZUFBYSxFQUFFO0FBWGMsQ0FBMUI7QUFhUCxJQUFNZCxNQUFNLEdBQUcsRUFBZjtBQUNPLFNBQVNlLGtCQUFULENBQTRCQyxVQUE1QixFQUF3QztBQUFBOztBQUMzQ2hCLFFBQU0sQ0FBQ2pCLElBQVAsdUJBQWNpQyxVQUFkLGFBQWNBLFVBQWQsdUJBQWNBLFVBQVUsQ0FBRWpDLElBQTFCLCtEQUFrQzBCLGlCQUFpQixDQUFDMUIsSUFBcEQ7QUFDQWlCLFFBQU0sQ0FBQ3JGLElBQVAsdUJBQWNxRyxVQUFkLGFBQWNBLFVBQWQsdUJBQWNBLFVBQVUsQ0FBRXJHLElBQTFCLCtEQUFrQzhGLGlCQUFpQixDQUFDOUYsSUFBcEQ7QUFDQXFGLFFBQU0sQ0FBQzdYLEtBQVAsd0JBQWU2WSxVQUFmLGFBQWVBLFVBQWYsdUJBQWVBLFVBQVUsQ0FBRTdZLEtBQTNCLGlFQUFvQ3NZLGlCQUFpQixDQUFDdFksS0FBdEQ7QUFDQTZYLFFBQU0sQ0FBQzVYLEtBQVAsd0JBQWU0WSxVQUFmLGFBQWVBLFVBQWYsdUJBQWVBLFVBQVUsQ0FBRTVZLEtBQTNCLGlFQUFvQ3FZLGlCQUFpQixDQUFDclksS0FBdEQ7QUFDQTRYLFFBQU0sQ0FBQ1UsSUFBUCx1QkFBY00sVUFBZCxhQUFjQSxVQUFkLHVCQUFjQSxVQUFVLENBQUVOLElBQTFCLCtEQUFrQ0QsaUJBQWlCLENBQUNDLElBQXBEO0FBQ0FWLFFBQU0sQ0FBQ1csTUFBUCx5QkFBZ0JLLFVBQWhCLGFBQWdCQSxVQUFoQix1QkFBZ0JBLFVBQVUsQ0FBRUwsTUFBNUIsbUVBQXNDRixpQkFBaUIsQ0FBQ0UsTUFBeEQ7QUFDQVgsUUFBTSxDQUFDWSxTQUFQLDRCQUFtQkksVUFBbkIsYUFBbUJBLFVBQW5CLHVCQUFtQkEsVUFBVSxDQUFFSixTQUEvQix5RUFBNENILGlCQUFpQixDQUFDRyxTQUE5RDtBQUNBWixRQUFNLENBQUNHLGFBQVAsNEJBQXVCYSxVQUF2QixhQUF1QkEsVUFBdkIsdUJBQXVCQSxVQUFVLENBQUViLGFBQW5DLHlFQUFvRE0saUJBQWlCLENBQUNOLGFBQXRFO0FBQ0FILFFBQU0sQ0FBQ1EsT0FBUCwwQkFBaUJRLFVBQWpCLGFBQWlCQSxVQUFqQix1QkFBaUJBLFVBQVUsQ0FBRVIsT0FBN0IscUVBQXdDQyxpQkFBaUIsQ0FBQ0QsT0FBMUQ7QUFDQVIsUUFBTSxDQUFDYSxLQUFQLHdCQUFlRyxVQUFmLGFBQWVBLFVBQWYsdUJBQWVBLFVBQVUsQ0FBRUgsS0FBM0IsaUVBQW9DSixpQkFBaUIsQ0FBQ0ksS0FBdEQ7QUFDQWIsUUFBTSxDQUFDYyxhQUFQLDRCQUF1QkUsVUFBdkIsYUFBdUJBLFVBQXZCLHVCQUF1QkEsVUFBVSxDQUFFRixhQUFuQyx5RUFBb0RMLGlCQUFpQixDQUFDSyxhQUF0RTtBQUNBLFNBQU9kLE1BQVA7QUFDSDtBQUNNLFNBQVNpQixhQUFULENBQXVCSixLQUF2QixFQUE4QjtBQUNqQyxVQUFRQSxLQUFSO0FBQ0ksU0FBSyxNQUFMO0FBQWEsYUFBTyxDQUFQOztBQUNiLFNBQUssUUFBTDtBQUFlLGFBQU8sR0FBUDs7QUFDZixTQUFLLE9BQUw7QUFBYyxhQUFPLENBQVA7O0FBQ2Q7QUFBUyxhQUFPLENBQVA7QUFKYjtBQU1IO0FBQ00sU0FBU0sscUJBQVQsQ0FBK0JMLEtBQS9CLEVBQXNDO0FBQ3pDLFVBQVFBLEtBQVI7QUFDSSxTQUFLLEtBQUw7QUFBWSxhQUFPLENBQVA7O0FBQ1osU0FBSyxRQUFMO0FBQWUsYUFBTyxHQUFQOztBQUNmLFNBQUssUUFBTDtBQUFlLGFBQU8sQ0FBUDs7QUFDZjtBQUFTLGFBQU8sQ0FBUDtBQUpiO0FBTUgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU00sZ0JBQVQsQ0FBMEI3VyxTQUExQixFQUFxQ2dCLE9BQXJDLEVBQThDO0FBQUEsTUFDekMyVCxJQUR5QyxHQUNoQzNVLFNBRGdDLENBQ3pDMlUsSUFEeUM7O0FBRWpELE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1A7QUFDSDs7QUFKZ0QsTUFLekNqUyxNQUx5QyxHQUtkMUIsT0FMYyxDQUt6QzBCLE1BTHlDO0FBQUEsTUFLakNRLGNBTGlDLEdBS2RsQyxPQUxjLENBS2pDa0MsY0FMaUM7O0FBTWpELE1BQUlBLGNBQWMsQ0FBQ3ZFLGVBQWYsSUFBa0MsQ0FBdEMsRUFBeUM7QUFDckM7QUFDSDs7QUFDRCxNQUFNb1gsS0FBSyxHQUFHcEIsSUFBSSxDQUFDckcsS0FBTCxDQUFXLElBQVgsQ0FBZDtBQVRpRCxNQVV6Q2pQLEtBVnlDLEdBVVVXLFNBVlYsQ0FVekNYLEtBVnlDO0FBQUEsTUFVbENDLE1BVmtDLEdBVVVVLFNBVlYsQ0FVbENWLE1BVmtDO0FBQUEsTUFVMUJvWCxVQVYwQixHQVVVMVcsU0FWVixDQVUxQjBXLFVBVjBCO0FBQUEsTUFVZEksTUFWYyxHQVVVOVcsU0FWVixDQVVkOFcsTUFWYztBQUFBLE1BVU5DLFVBVk0sR0FVVS9XLFNBVlYsQ0FVTitXLFVBVk07QUFXakQsTUFBTXJCLE1BQU0sR0FBR2UsMkRBQWtCLENBQUNDLFVBQUQsQ0FBakM7QUFDQSxNQUFNTSxVQUFVLEdBQUd0QixNQUFNLENBQUNyRixJQUExQjtBQUNBLE1BQU00RyxtQkFBbUIsR0FBR3ZCLE1BQU0sQ0FBQ0csYUFBbkM7QUFDQSxNQUFNcUIsYUFBYSxHQUFHeEIsTUFBTSxDQUFDUSxPQUE3QjtBQUNBLE1BQU16QixJQUFJLEdBQUdlLDhDQUFPLENBQUNFLE1BQU0sQ0FBQ2pCLElBQVIsQ0FBcEI7QUFmaUQsTUFnQnpDeFQsT0FoQnlDLEdBZ0I3QkQsT0FoQjZCLENBZ0J6Q0MsT0FoQnlDO0FBQUEsTUFpQnpDaEMsU0FqQnlDLEdBaUIzQmdDLE9BakIyQixDQWlCekNoQyxTQWpCeUM7QUFrQmpELE1BQU1rWSxTQUFTLEdBQUdyQixtREFBWSxDQUFDckIsSUFBRCxFQUFPaUIsTUFBUCxFQUFlSyxLQUFmLENBQTlCO0FBQ0EsTUFBTXFCLFVBQVUsR0FBR25CLG9EQUFhLENBQUNQLE1BQUQsRUFBU0ssS0FBVCxDQUFoQztBQUNBLE1BQU1zQixTQUFTLEdBQUdoWSxLQUFILGFBQUdBLEtBQUgsY0FBR0EsS0FBSCxHQUFZOFgsU0FBM0I7QUFDQSxNQUFNRyxVQUFVLEdBQUdoWSxNQUFILGFBQUdBLE1BQUgsY0FBR0EsTUFBSCxHQUFhOFgsVUFBN0I7QUFDQSxNQUFNRyxPQUFPLEdBQUd2USxtREFBQSxDQUFXaEgsU0FBWCxFQUFzQnFYLFNBQXRCLENBQWhCO0FBQ0EsTUFBTUcsT0FBTyxHQUFHeFEsbURBQUEsQ0FBV2hILFNBQVgsRUFBc0JzWCxVQUF0QixDQUFoQjtBQUNBLE1BQUlyVCxDQUFDLEdBQUcsQ0FBUjs7QUFDQSxNQUFJM0UsTUFBSixFQUFZO0FBQ1IsUUFBTW1ZLGtCQUFrQixHQUFHYiw4REFBcUIsQ0FBQ2xCLE1BQU0sQ0FBQ2MsYUFBUixDQUFoRDtBQUNBdlMsS0FBQyxHQUFHLENBQUMzRSxNQUFNLEdBQUc4WCxVQUFWLElBQXdCSyxrQkFBNUI7O0FBQ0EsUUFBSXhULENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDUEEsT0FBQyxHQUFHLENBQUo7QUFDSDtBQUNKOztBQUNEaEYsV0FBUyxDQUFDRSxZQUFWLENBQXVCdUQsTUFBTSxDQUFDdkUsQ0FBOUIsRUFBaUN1RSxNQUFNLENBQUN4RSxDQUF4QyxFQUEyQ3dFLE1BQU0sQ0FBQzJGLENBQWxELEVBQXFEM0YsTUFBTSxDQUFDZSxDQUE1RCxFQUErRGYsTUFBTSxDQUFDNEYsRUFBdEUsRUFBMEU1RixNQUFNLENBQUM2RixFQUFqRjtBQUNBdEosV0FBUyxDQUFDNE4sV0FBVixHQUF3QixDQUF4Qjs7QUFDQSxNQUFJa0ssVUFBVSxLQUFLN0ksU0FBbkIsRUFBOEI7QUFDMUJqUCxhQUFTLENBQUN5WSxXQUFWLEdBQXdCLEVBQXhCO0FBQ0F6WSxhQUFTLENBQUMwWSxTQUFWLEdBQXNCL1osdUVBQWtCLENBQUNtWixVQUFELEVBQWEsQ0FBYixFQUFnQjdULGNBQWhCLENBQXhDO0FBQ0FqRSxhQUFTLENBQUM2VCxTQUFWO0FBQ0E3VCxhQUFTLENBQUMyWSxJQUFWLENBQWVMLE9BQWYsRUFBd0JDLE9BQXhCLEVBQWlDSCxTQUFqQyxFQUE0Q0MsVUFBNUM7QUFDQXJZLGFBQVMsQ0FBQytTLElBQVY7QUFDSDs7QUFDRCxNQUFJOEUsTUFBTSxLQUFLNUksU0FBZixFQUEwQjtBQUN0QmpQLGFBQVMsQ0FBQ3lZLFdBQVYsR0FBd0I5Wix1RUFBa0IsQ0FBQ2taLE1BQUQsRUFBUyxDQUFULEVBQVk1VCxjQUFaLENBQTFDO0FBQ0FqRSxhQUFTLENBQUMwWSxTQUFWLEdBQXNCLEVBQXRCO0FBQ0ExWSxhQUFTLENBQUM2VCxTQUFWO0FBQ0E3VCxhQUFTLENBQUMyWSxJQUFWLENBQWVMLE9BQWYsRUFBd0JDLE9BQXhCLEVBQWlDSCxTQUFqQyxFQUE0Q0MsVUFBNUM7QUFDQXJZLGFBQVMsQ0FBQzRULE1BQVY7QUFDSDs7QUFDRDVULFdBQVMsQ0FBQ3dWLElBQVYsR0FBaUJELG1EQUFZLENBQUNrQixNQUFNLENBQUNqQixJQUFSLEVBQWN1QyxVQUFkLENBQTdCO0FBQ0EvWCxXQUFTLENBQUM0WSxZQUFWLEdBQXlCLFlBQXpCO0FBQ0E1WSxXQUFTLENBQUN5WSxXQUFWLEdBQXdCLEVBQXhCO0FBQ0F6WSxXQUFTLENBQUMwWSxTQUFWLEdBQXNCL1osdUVBQWtCLENBQUM4WCxNQUFNLENBQUM3WCxLQUFSLEVBQWU2WCxNQUFNLENBQUM1WCxLQUF0QixFQUE2Qm9GLGNBQTdCLENBQXhDO0FBQ0FlLEdBQUMsSUFBSXVULE9BQUw7O0FBQ0EsT0FBSyxJQUFJdFcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzZVLEtBQUssQ0FBQ3BWLE1BQTFCLEVBQWtDTyxDQUFDLEVBQW5DLEVBQXVDO0FBQ25DLFFBQU15VSxJQUFJLEdBQUdJLEtBQUssQ0FBQzdVLENBQUQsQ0FBbEI7QUFDQSxRQUFNOFUsU0FBUyxHQUFHUCxtREFBWSxDQUFDaEIsSUFBRCxFQUFPaUIsTUFBUCxFQUFlQyxJQUFmLENBQTlCO0FBQ0EsUUFBTW1DLFVBQVUsR0FBR25CLHNEQUFhLENBQUNqQixNQUFNLENBQUNhLEtBQVIsQ0FBaEM7QUFDQSxRQUFJdlMsQ0FBQyxHQUFHLENBQUNxVCxTQUFTLEdBQUdyQixTQUFiLElBQTBCOEIsVUFBbEM7O0FBQ0EsUUFBSTlULENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDUEEsT0FBQyxHQUFHLENBQUo7QUFDSDs7QUFDREEsS0FBQyxJQUFJdVQsT0FBTDs7QUFDQSxTQUFLLElBQUlRLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdwQyxJQUFJLENBQUNoVixNQUF6QixFQUFpQ29YLENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsVUFBTS9DLEtBQUssR0FBR1csSUFBSSxDQUFDak8sTUFBTCxDQUFZcVEsQ0FBWixDQUFkO0FBQ0EsVUFBTTlDLE1BQU0sR0FBR1UsSUFBSSxDQUFDak8sTUFBTCxDQUFZcVEsQ0FBQyxHQUFHLENBQWhCLENBQWY7QUFDQSxVQUFNbkMsT0FBTyxHQUFHTCxpREFBVSxDQUFDZCxJQUFELEVBQU91QyxVQUFQLEVBQW1CaEMsS0FBbkIsRUFBMEJDLE1BQTFCLENBQTFCO0FBQ0FoVyxlQUFTLENBQUMrWSxRQUFWLENBQW1CaEQsS0FBbkIsRUFBMEJoUixDQUExQixFQUE2QkMsQ0FBQyxHQUFHK1MsVUFBakM7QUFDQWhULE9BQUMsSUFBSTRSLE9BQU8sR0FBR3FCLG1CQUFmO0FBQ0g7O0FBQ0RoVCxLQUFDLElBQUkrUyxVQUFVLEdBQUdFLGFBQWxCO0FBQ0g7QUFDSjtBQUNNLFNBQVNlLHdCQUFULENBQWtDaFgsT0FBbEMsRUFBMkM7QUFDOUNpWCwyREFBa0IsQ0FBQ2pYLE9BQUQsQ0FBbEI7QUFDQUEsU0FBTyxDQUFDYyxjQUFSLENBQXVCRCxHQUF2QixDQUEyQnFXLHVDQUEzQixFQUFpQ3RCLGdCQUFqQztBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZEO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTXNCLElBQUksR0FBRyxNQUFiO0FBQ0EsSUFBSUMsSUFBSjs7QUFDUCxDQUFDLFVBQVVBLElBQVYsRUFBZ0I7QUFDYixXQUFTbkssU0FBVCxDQUFtQmpPLFNBQW5CLEVBQThCO0FBQUEsUUFDbEIyVSxJQURrQixHQUNUM1UsU0FEUyxDQUNsQjJVLElBRGtCOztBQUUxQixRQUFJLENBQUNBLElBQUwsRUFBVztBQUNQLGFBQU96RyxTQUFQO0FBQ0g7O0FBQ0QsUUFBTTZILEtBQUssR0FBR3BCLElBQUksQ0FBQ3JHLEtBQUwsQ0FBVyxJQUFYLENBQWQ7QUFMMEIsUUFNcEJqUCxLQU5vQixHQU1GVyxTQU5FLENBTXBCWCxLQU5vQjtBQUFBLFFBTWJDLE1BTmEsR0FNRlUsU0FORSxDQU1iVixNQU5hO0FBQUEsUUFPbEJvWCxVQVBrQixHQU9IMVcsU0FQRyxDQU9sQjBXLFVBUGtCO0FBUTFCLFFBQU1oQixNQUFNLEdBQUdlLDJEQUFrQixDQUFDQyxVQUFELENBQWpDOztBQUNBLFFBQUksQ0FBQ3JYLEtBQUwsRUFBWTtBQUNSLFVBQU1vVixJQUFJLEdBQUdlLDhDQUFPLENBQUNFLE1BQU0sQ0FBQ2pCLElBQVIsQ0FBcEI7QUFDQXBWLFdBQUssR0FBR3lXLG1EQUFZLENBQUNyQixJQUFELEVBQU9pQixNQUFQLEVBQWVLLEtBQWYsQ0FBcEI7QUFDSDs7QUFDRCxRQUFJLENBQUN6VyxNQUFMLEVBQWE7QUFDVEEsWUFBTSxHQUFHMlcsb0RBQWEsQ0FBQ1AsTUFBRCxFQUFTSyxLQUFULENBQXRCO0FBQ0g7O0FBQ0QsUUFBTS9SLENBQUMsR0FBR2dELG1EQUFBLENBQVdoSCxTQUFYLEVBQXNCWCxLQUF0QixDQUFWO0FBQ0EsUUFBTTRFLENBQUMsR0FBRytDLG1EQUFBLENBQVdoSCxTQUFYLEVBQXNCVixNQUF0QixDQUFWO0FBQ0EsV0FBTztBQUNIMEUsT0FBQyxFQUFEQSxDQURHO0FBQ0FDLE9BQUMsRUFBREEsQ0FEQTtBQUNHNUUsV0FBSyxFQUFMQSxLQURIO0FBQ1VDLFlBQU0sRUFBTkE7QUFEVixLQUFQO0FBR0g7O0FBQ0Q4WSxNQUFJLENBQUNuSyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNILENBeEJELEVBd0JHbUssSUFBSSxLQUFLQSxJQUFJLEdBQUcsRUFBWixDQXhCUDs7QUF5Qk8sU0FBUzNXLE9BQVQsQ0FBaUJrVCxJQUFqQixFQUF1QjNULE9BQXZCLEVBQWdDO0FBQUEsTUFDM0JrRCxLQUQyQixHQUNqQmxELE9BRGlCLENBQzNCa0QsS0FEMkI7QUFFbkMsTUFBTWlHLE1BQU0sR0FBR2lPLElBQUksQ0FBQ25LLFNBQUwsQ0FBZTBHLElBQWYsQ0FBZjtBQUNBLFNBQU8sQ0FBQyxDQUFDeEssTUFBRixJQUFZa0MseURBQUEsQ0FBbUJsQyxNQUFuQixFQUEyQmpHLEtBQTNCLENBQW5CO0FBQ0g7QUFDTSxTQUFTZ1Usa0JBQVQsQ0FBNEJqWCxPQUE1QixFQUFxQztBQUN4Q0EsU0FBTyxDQUFDZSxlQUFSLENBQXdCRixHQUF4QixDQUE0QnFXLElBQTVCLEVBQWtDMVcsT0FBbEM7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q00sSUFBTTRXLE1BQU0sR0FBRyxRQUFmO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFdBQWxCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGFBQXJCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLGNBQXRCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLE9BQWQ7QUFDQSxJQUFNQyxRQUFRLEdBQUcsU0FBakI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsVUFBbEI7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsWUFBcEI7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsWUFBcEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsU0FBbkI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsV0FBdEI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsWUFBdkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZUFBdkI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsZ0JBQXhCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFlBQXBCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGFBQXJCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFlBQXBCO0FBQ0EsSUFBTUMsSUFBSSxHQUFHLE1BQWI7QUFDQSxJQUFNQyxPQUFPLEdBQUcsUUFBaEI7QUFDQSxJQUFNQyxRQUFRLEdBQUcsU0FBakI7QUFDQSxJQUFNQyxNQUFNLEdBQUcsUUFBZjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLE1BQU0sMkNBQ2QvQixNQURjLEVBQ0wsVUFBQ3JQLEtBQUQ7QUFBQSxTQUFXQSxLQUFYO0FBQUEsQ0FESyw0QkFFZHNQLFNBRmMsRUFFRixVQUFDdFAsS0FBRCxFQUFXO0FBQ3BCLE1BQUksQ0FBQ0EsS0FBSyxJQUFJLENBQVYsSUFBZSxDQUFuQixFQUFzQjtBQUNsQixXQUFPLE1BQU1BLEtBQU4sR0FBY0EsS0FBckI7QUFDSDs7QUFDRCxTQUFPLENBQUMsR0FBRCxJQUFRLEVBQUVBLEtBQUYsSUFBV0EsS0FBSyxHQUFHLENBQW5CLElBQXdCLENBQWhDLENBQVA7QUFDSCxDQVBjLDRCQVFkdVAsWUFSYyxFQVFDLFVBQUN2UCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxHQUFHQSxLQUFwQjtBQUFBLENBUkQsNEJBU2R3UCxhQVRjLEVBU0UsVUFBQ3hQLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLElBQUksSUFBSUEsS0FBUixDQUFqQjtBQUFBLENBVEYsNEJBVWR5UCxLQVZjLEVBVU4sVUFBQ3pQLEtBQUQsRUFBVztBQUNoQixNQUFJLENBQUNBLEtBQUssSUFBSSxDQUFWLElBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsV0FBTyxNQUFNQSxLQUFOLEdBQWNBLEtBQWQsR0FBc0JBLEtBQTdCO0FBQ0g7O0FBQ0QsU0FBTyxPQUFPLENBQUNBLEtBQUssSUFBSSxDQUFWLElBQWVBLEtBQWYsR0FBdUJBLEtBQXZCLEdBQStCLENBQXRDLENBQVA7QUFDSCxDQWZjLDRCQWdCZDBQLFFBaEJjLEVBZ0JILFVBQUMxUCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxHQUFHQSxLQUFSLEdBQWdCQSxLQUE1QjtBQUFBLENBaEJHLDRCQWlCZDJQLFNBakJjLEVBaUJGLFVBQUMzUCxLQUFEO0FBQUEsU0FBWSxFQUFFQSxLQUFGLEdBQVVBLEtBQVYsR0FBa0JBLEtBQWxCLEdBQTBCLENBQXRDO0FBQUEsQ0FqQkUsNEJBa0JkNFAsT0FsQmMsRUFrQkosVUFBQzVQLEtBQUQsRUFBVztBQUNsQixNQUFJLENBQUNBLEtBQUssSUFBSSxDQUFWLElBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsV0FBTyxNQUFNQSxLQUFOLEdBQWNBLEtBQWQsR0FBc0JBLEtBQXRCLEdBQThCQSxLQUFyQztBQUNIOztBQUNELFNBQU8sQ0FBQyxHQUFELElBQVEsQ0FBQ0EsS0FBSyxJQUFJLENBQVYsSUFBZUEsS0FBZixHQUF1QkEsS0FBdkIsR0FBK0JBLEtBQS9CLEdBQXVDLENBQS9DLENBQVA7QUFDSCxDQXZCYyw0QkF3QmQ2UCxVQXhCYyxFQXdCRCxVQUFDN1AsS0FBRDtBQUFBLFNBQVlBLEtBQUssR0FBR0EsS0FBUixHQUFnQkEsS0FBaEIsR0FBd0JBLEtBQXBDO0FBQUEsQ0F4QkMsNEJBeUJkOFAsV0F6QmMsRUF5QkEsVUFBQzlQLEtBQUQ7QUFBQSxTQUFZLElBQUksRUFBRUEsS0FBRixHQUFVQSxLQUFWLEdBQWtCQSxLQUFsQixHQUEwQkEsS0FBMUM7QUFBQSxDQXpCQSw0QkEwQmQrUCxPQTFCYyxFQTBCSixVQUFDL1AsS0FBRCxFQUFXO0FBQ2xCLE1BQUksQ0FBQ0EsS0FBSyxJQUFJLENBQVYsSUFBZSxDQUFuQixFQUFzQjtBQUNsQixXQUFPLE1BQU1BLEtBQU4sR0FBY0EsS0FBZCxHQUFzQkEsS0FBdEIsR0FBOEJBLEtBQTlCLEdBQXNDQSxLQUE3QztBQUNIOztBQUNELFNBQU8sT0FBTyxDQUFDQSxLQUFLLElBQUksQ0FBVixJQUFlQSxLQUFmLEdBQXVCQSxLQUF2QixHQUErQkEsS0FBL0IsR0FBdUNBLEtBQXZDLEdBQStDLENBQXRELENBQVA7QUFDSCxDQS9CYyw0QkFnQ2RnUSxVQWhDYyxFQWdDRCxVQUFDaFEsS0FBRDtBQUFBLFNBQVlBLEtBQUssR0FBR0EsS0FBUixHQUFnQkEsS0FBaEIsR0FBd0JBLEtBQXhCLEdBQWdDQSxLQUE1QztBQUFBLENBaENDLDRCQWlDZGlRLFdBakNjLEVBaUNBLFVBQUNqUSxLQUFEO0FBQUEsU0FBWSxFQUFFQSxLQUFGLEdBQVVBLEtBQVYsR0FBa0JBLEtBQWxCLEdBQTBCQSxLQUExQixHQUFrQ0EsS0FBbEMsR0FBMEMsQ0FBdEQ7QUFBQSxDQWpDQSw0QkFrQ2RrUSxVQWxDYyxFQWtDRCxVQUFDbFEsS0FBRDtBQUFBLFNBQVksT0FBTyxJQUFJdkosSUFBSSxDQUFDbUosR0FBTCxDQUFTbkosSUFBSSxDQUFDNGEsRUFBTCxHQUFVclIsS0FBbkIsQ0FBWCxDQUFaO0FBQUEsQ0FsQ0MsNEJBbUNkbVEsYUFuQ2MsRUFtQ0UsVUFBQ25RLEtBQUQ7QUFBQSxTQUFZLElBQUl2SixJQUFJLENBQUNtSixHQUFMLENBQVVJLEtBQUssR0FBR3ZKLElBQUksQ0FBQzRhLEVBQWQsR0FBb0IsQ0FBN0IsQ0FBaEI7QUFBQSxDQW5DRiw0QkFvQ2RqQixjQXBDYyxFQW9DRyxVQUFDcFEsS0FBRDtBQUFBLFNBQVl2SixJQUFJLENBQUNvSixHQUFMLENBQVVHLEtBQUssR0FBR3ZKLElBQUksQ0FBQzRhLEVBQWQsR0FBb0IsQ0FBN0IsQ0FBWjtBQUFBLENBcENILDRCQXFDZGhCLFdBckNjLEVBcUNBLFVBQUNyUSxLQUFELEVBQVc7QUFDdEIsTUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixXQUFPLENBQVA7QUFDSDs7QUFDRCxNQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLFdBQU8sQ0FBUDtBQUNIOztBQUNELE1BQUksQ0FBQ0EsS0FBSyxJQUFJLENBQVYsSUFBZSxDQUFuQixFQUFzQjtBQUNsQixXQUFPLE1BQU12SixJQUFJLENBQUM2YSxHQUFMLENBQVMsSUFBVCxFQUFldFIsS0FBSyxHQUFHLENBQXZCLENBQWI7QUFDSDs7QUFDRCxTQUFPLE9BQU8sQ0FBQ3ZKLElBQUksQ0FBQzZhLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFELElBQU90UixLQUFLLEdBQUcsQ0FBZixDQUFaLENBQUQsR0FBa0MsQ0FBekMsQ0FBUDtBQUNILENBaERjLDRCQWlEZHNRLGNBakRjLEVBaURHLFVBQUN0USxLQUFEO0FBQUEsU0FBWUEsS0FBSyxLQUFLLENBQVYsR0FBYyxDQUFkLEdBQWtCdkosSUFBSSxDQUFDNmEsR0FBTCxDQUFTLElBQVQsRUFBZXRSLEtBQUssR0FBRyxDQUF2QixDQUE5QjtBQUFBLENBakRILDRCQWtEZHVRLGVBbERjLEVBa0RJLFVBQUN2USxLQUFEO0FBQUEsU0FBWUEsS0FBSyxLQUFLLENBQVYsR0FBYyxDQUFkLEdBQWtCLElBQUl2SixJQUFJLENBQUM2YSxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBRCxHQUFNdFIsS0FBbEIsQ0FBbEM7QUFBQSxDQWxESiw0QkFtRGR3USxRQW5EYyxFQW1ESCxVQUFDeFEsS0FBRCxFQUFXO0FBQ25CLE1BQUksQ0FBQ0EsS0FBSyxJQUFJLENBQVYsSUFBZSxDQUFuQixFQUFzQjtBQUNsQixXQUFPLENBQUMsR0FBRCxJQUFRdkosSUFBSSxDQUFDOGEsSUFBTCxDQUFVLElBQUl2UixLQUFLLEdBQUdBLEtBQXRCLElBQStCLENBQXZDLENBQVA7QUFDSDs7QUFDRCxTQUFPLE9BQU92SixJQUFJLENBQUM4YSxJQUFMLENBQVUsSUFBSSxDQUFDdlIsS0FBSyxJQUFJLENBQVYsSUFBZUEsS0FBN0IsSUFBc0MsQ0FBN0MsQ0FBUDtBQUNILENBeERjLDRCQXlEZHlRLFdBekRjLEVBeURBLFVBQUN6USxLQUFEO0FBQUEsU0FBWSxJQUFJdkosSUFBSSxDQUFDOGEsSUFBTCxDQUFVLElBQUl2UixLQUFLLEdBQUdBLEtBQXRCLENBQWhCO0FBQUEsQ0F6REEsNEJBMERkMFEsWUExRGMsRUEwREMsVUFBQzFRLEtBQUQ7QUFBQSxTQUFXdkosSUFBSSxDQUFDOGEsSUFBTCxDQUFVLElBQUksRUFBRXZSLEtBQUYsR0FBVUEsS0FBeEIsQ0FBWDtBQUFBLENBMURELDRCQTJEZDJRLE9BM0RjLEVBMkRKLFVBQUMzUSxLQUFELEVBQVc7QUFDbEIsTUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixXQUFPLENBQVA7QUFDSDs7QUFDRCxNQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLFdBQU8sQ0FBUDtBQUNIOztBQUNEQSxPQUFLLElBQUksQ0FBVDs7QUFDQSxNQUFJQSxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ1gsV0FBTyxDQUFDLEdBQUQsR0FBT3ZKLElBQUksQ0FBQzZhLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBTXRSLEtBQUssR0FBRyxDQUFkLENBQVosQ0FBUCxHQUF1Q3ZKLElBQUksQ0FBQ29KLEdBQUwsQ0FBUyxDQUFDRyxLQUFLLEdBQUcsR0FBVCxJQUFnQixDQUFoQixHQUFvQnZKLElBQUksQ0FBQzRhLEVBQWxDLENBQTlDO0FBQ0g7O0FBQ0QsU0FBTyxNQUFNNWEsSUFBSSxDQUFDNmEsR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFDLEVBQUQsSUFBT3RSLEtBQUssR0FBRyxDQUFmLENBQVosQ0FBTixHQUF1Q3ZKLElBQUksQ0FBQ29KLEdBQUwsQ0FBUyxDQUFDRyxLQUFLLEdBQUcsR0FBVCxJQUFnQixDQUFoQixHQUFvQnZKLElBQUksQ0FBQzRhLEVBQWxDLENBQXZDLEdBQStFLENBQXRGO0FBQ0gsQ0F2RWMsNEJBd0VkVCxVQXhFYyxFQXdFRCxVQUFDNVEsS0FBRCxFQUFXO0FBQ3JCLE1BQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2IsV0FBTyxDQUFQO0FBQ0g7O0FBQ0QsTUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixXQUFPLENBQVA7QUFDSDs7QUFDRCxTQUFPLENBQUN2SixJQUFJLENBQUM2YSxHQUFMLENBQVMsQ0FBVCxFQUFZLE1BQU10UixLQUFLLEdBQUcsQ0FBZCxDQUFaLENBQUQsR0FBaUN2SixJQUFJLENBQUNvSixHQUFMLENBQVMsQ0FBQ0csS0FBSyxHQUFHLEdBQVQsSUFBZ0IsQ0FBaEIsR0FBb0J2SixJQUFJLENBQUM0YSxFQUFsQyxDQUF4QztBQUNILENBaEZjLDRCQWlGZFIsV0FqRmMsRUFpRkEsVUFBQzdRLEtBQUQsRUFBVztBQUN0QixNQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLFdBQU8sQ0FBUDtBQUNIOztBQUNELE1BQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2IsV0FBTyxDQUFQO0FBQ0g7O0FBQ0QsU0FBT3ZKLElBQUksQ0FBQzZhLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFELEdBQU10UixLQUFsQixJQUEyQnZKLElBQUksQ0FBQ29KLEdBQUwsQ0FBUyxDQUFDRyxLQUFLLEdBQUcsR0FBVCxJQUFnQixDQUFoQixHQUFvQnZKLElBQUksQ0FBQzRhLEVBQWxDLENBQTNCLEdBQW1FLENBQTFFO0FBQ0gsQ0F6RmMsNEJBMEZkUCxJQTFGYyxFQTBGUCxVQUFDOVEsS0FBRCxFQUFXO0FBQ2YsTUFBTXdSLENBQUMsR0FBRyxVQUFVLEtBQXBCOztBQUNBLE1BQUksQ0FBQ3hSLEtBQUssSUFBSSxDQUFWLElBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsV0FBTyxPQUFPQSxLQUFLLEdBQUdBLEtBQVIsSUFBaUIsQ0FBQ3dSLENBQUMsR0FBRyxDQUFMLElBQVV4UixLQUFWLEdBQWtCd1IsQ0FBbkMsQ0FBUCxDQUFQO0FBQ0g7O0FBQ0QsU0FBTyxPQUFPLENBQUN4UixLQUFLLElBQUksQ0FBVixJQUFlQSxLQUFmLElBQXdCLENBQUN3UixDQUFDLEdBQUcsQ0FBTCxJQUFVeFIsS0FBVixHQUFrQndSLENBQTFDLElBQStDLENBQXRELENBQVA7QUFDSCxDQWhHYyw0QkFpR2RULE9BakdjLEVBaUdKLFVBQUMvUSxLQUFELEVBQVc7QUFDbEIsTUFBTXdSLENBQUMsR0FBRyxPQUFWO0FBQ0EsU0FBT3hSLEtBQUssR0FBR0EsS0FBUixJQUFpQixDQUFDd1IsQ0FBQyxHQUFHLENBQUwsSUFBVXhSLEtBQVYsR0FBa0J3UixDQUFuQyxDQUFQO0FBQ0gsQ0FwR2MsNEJBcUdkUixRQXJHYyxFQXFHSCxVQUFDaFIsS0FBRCxFQUFXO0FBQ25CLE1BQU13UixDQUFDLEdBQUcsT0FBVjtBQUNBLFNBQU8sRUFBRXhSLEtBQUYsR0FBVUEsS0FBVixJQUFtQixDQUFDd1IsQ0FBQyxHQUFHLENBQUwsSUFBVXhSLEtBQVYsR0FBa0J3UixDQUFyQyxJQUEwQyxDQUFqRDtBQUNILENBeEdjLDRCQXlHZFAsTUF6R2MsRUF5R0wsVUFBQ2pSLEtBQUQsRUFBVztBQUNqQixNQUFJQSxLQUFLLEdBQUcsR0FBWixFQUFpQjtBQUNiLFdBQU9vUixNQUFNLENBQUNGLFNBQUQsQ0FBTixDQUFrQmxSLEtBQUssR0FBRyxDQUExQixJQUErQixHQUF0QztBQUNIOztBQUNELFNBQU9vUixNQUFNLENBQUNELFVBQUQsQ0FBTixDQUFtQm5SLEtBQUssR0FBRyxDQUFSLEdBQVksQ0FBL0IsSUFBb0MsR0FBcEMsR0FBMEMsR0FBakQ7QUFDSCxDQTlHYyw0QkErR2RrUixTQS9HYyxFQStHRixVQUFDbFIsS0FBRDtBQUFBLFNBQVksSUFBSW9SLE1BQU0sQ0FBQ0QsVUFBRCxDQUFOLENBQW1CLElBQUluUixLQUF2QixDQUFoQjtBQUFBLENBL0dFLDRCQWdIZG1SLFVBaEhjLEVBZ0hELFVBQUNuUixLQUFELEVBQVc7QUFDckIsTUFBSUEsS0FBSyxHQUFHLElBQUksSUFBaEIsRUFBc0I7QUFDbEIsV0FBTyxTQUFTQSxLQUFULEdBQWlCQSxLQUF4QjtBQUNIOztBQUNELE1BQUlBLEtBQUssR0FBRyxJQUFJLElBQWhCLEVBQXNCO0FBQ2xCLFdBQU8sVUFBVUEsS0FBSyxJQUFJLE1BQU0sSUFBekIsSUFBaUNBLEtBQWpDLEdBQXlDLElBQWhEO0FBQ0g7O0FBQ0QsTUFBSUEsS0FBSyxHQUFHLE1BQU0sSUFBbEIsRUFBd0I7QUFDcEIsV0FBTyxVQUFVQSxLQUFLLElBQUksT0FBTyxJQUExQixJQUFrQ0EsS0FBbEMsR0FBMEMsTUFBakQ7QUFDSDs7QUFDRCxTQUFPLFVBQVVBLEtBQUssSUFBSSxRQUFRLElBQTNCLElBQW1DQSxLQUFuQyxHQUEyQyxRQUFsRDtBQUNILENBM0hjLFdBQVosQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQlA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNPLElBQU15UixLQUFLLEdBQUcsT0FBZDtBQUNBLFNBQVNDLFdBQVQsQ0FBcUIxYSxTQUFyQixFQUFnQ2dCLE9BQWhDLEVBQXlDO0FBQUEsTUFDcEMyWixLQURvQyxHQUMxQjNhLFNBRDBCLENBQ3BDMmEsS0FEb0M7QUFBQSxNQUVwQ0MsTUFGb0MsR0FFekJELEtBRnlCLENBRXBDQyxNQUZvQzs7QUFHNUMsTUFBSSxFQUFDQSxNQUFELGFBQUNBLE1BQUQsdUJBQUNBLE1BQU0sQ0FBRWphLE1BQVQsQ0FBSixFQUFxQjtBQUNqQnlELFdBQU8sQ0FBQ29GLElBQVIsQ0FBYSwyQkFBYjtBQUNBO0FBQ0g7O0FBQ0QsTUFBSW1SLEtBQUssQ0FBQ2xZLElBQU4sS0FBZXlMLFNBQW5CLEVBQThCO0FBQzFCeU0sU0FBSyxDQUFDbFksSUFBTixHQUFhLENBQWI7QUFDSDs7QUFDRGtZLE9BQUssQ0FBQ2xZLElBQU4sSUFBY3pCLE9BQU8sQ0FBQ3lCLElBQXRCO0FBVjRDLE1BV3BDQSxJQVhvQyxHQVczQmtZLEtBWDJCLENBV3BDbFksSUFYb0M7QUFZNUMsTUFBSW9ZLE1BQU0sR0FBRyxDQUFiO0FBQ0FELFFBQU0sQ0FBQ3pWLE9BQVAsQ0FBZSxVQUFDMlYsS0FBRCxFQUFXO0FBQUE7O0FBQ3RCLFFBQUksQ0FBQ0EsS0FBSyxDQUFDclksSUFBWCxFQUFpQjtBQUNiMkIsYUFBTyxDQUFDb0YsSUFBUixDQUFhLHdCQUFiO0FBQ0E7QUFDSDs7QUFDRCxRQUFJc1IsS0FBSyxDQUFDRCxNQUFOLEtBQWlCM00sU0FBckIsRUFBZ0M7QUFDNUIyTSxZQUFNLEdBQUdDLEtBQUssQ0FBQ0QsTUFBZjtBQUNIOztBQUNELFFBQU1FLFVBQVUsNEJBQUdELEtBQUgsYUFBR0EsS0FBSCx3Q0FBR0EsS0FBSyxDQUFFVixNQUFWLGtEQUFHLGNBQWVZLFdBQWYsRUFBSCx5RUFBbUMzQywyQ0FBbkQ7QUFDQSxRQUFNNEMsWUFBWSxHQUFHYiwyQ0FBTSxDQUFDVyxVQUFELENBQTNCOztBQUNBLFFBQUksQ0FBQ0UsWUFBTCxFQUFtQjtBQUNmN1csYUFBTyxDQUFDb0YsSUFBUixnQ0FBcUM0USwyQ0FBckM7QUFDQTtBQUNIOztBQUNELFFBQU1wUixLQUFLLEdBQUcsQ0FBQ3ZHLElBQUksR0FBR29ZLE1BQVIsSUFBa0JDLEtBQUssQ0FBQ3JZLElBQXRDO0FBQ0FvWSxVQUFNLElBQUlDLEtBQUssQ0FBQ3JZLElBQWhCOztBQUNBLFFBQUl1RyxLQUFLLEdBQUcsQ0FBUixJQUFhQSxLQUFLLEdBQUcsQ0FBekIsRUFBNEI7QUFDeEI7QUFDSDs7QUFDRCxRQUFNa1MsV0FBVyxHQUFHRCxZQUFZLENBQUNqUyxLQUFELENBQWhDOztBQUNBLFFBQUksQ0FBQzhSLEtBQUssQ0FBQ0ssRUFBWCxFQUFlO0FBQ1gvVyxhQUFPLENBQUNvRixJQUFSLENBQWEsZ0NBQWI7QUFDQTtBQUNIOztBQUNELFFBQUksQ0FBQ3NSLEtBQUssQ0FBQ00sSUFBWCxFQUFpQjtBQUNiTixXQUFLLENBQUNNLElBQU4sR0FBYSxFQUFiO0FBQ0g7O0FBMUJxQixRQTJCZEQsRUEzQmMsR0EyQkRMLEtBM0JDLENBMkJkSyxFQTNCYztBQUFBLFFBMkJWQyxJQTNCVSxHQTJCRE4sS0EzQkMsQ0EyQlZNLElBM0JVO0FBNEJ0QixRQUFNQyxLQUFLLEdBQUdyYixTQUFkO0FBQ0FjLFVBQU0sQ0FBQ0QsSUFBUCxDQUFZc2EsRUFBWixFQUFnQmhXLE9BQWhCLENBQXdCLFVBQUNtVyxHQUFELEVBQVM7QUFDN0IsVUFBSUYsSUFBSSxDQUFDRSxHQUFELENBQUosS0FBY3BOLFNBQWxCLEVBQTZCO0FBQUE7O0FBQ3pCa04sWUFBSSxDQUFDRSxHQUFELENBQUosaUJBQVlELEtBQUssQ0FBQ0MsR0FBRCxDQUFqQixtREFBMEIsQ0FBMUI7QUFDSDs7QUFDRCxVQUFNQyxTQUFTLEdBQUdILElBQUksQ0FBQ0UsR0FBRCxDQUF0QjtBQUNBLFVBQU1FLE9BQU8sR0FBR0wsRUFBRSxDQUFDRyxHQUFELENBQWxCOztBQUNBLFVBQUksT0FBT0MsU0FBUCxLQUFxQixRQUFyQixJQUFpQyxPQUFPQyxPQUFQLEtBQW1CLFFBQXhELEVBQWtFO0FBQzlELFlBQU1DLFVBQVUsR0FBR0YsU0FBUyxHQUFHTCxXQUFXLElBQUlNLE9BQU8sR0FBR0QsU0FBZCxDQUExQztBQUNBRixhQUFLLENBQUNDLEdBQUQsQ0FBTCxHQUFhRyxVQUFiO0FBQ0g7QUFDSixLQVZEO0FBV0gsR0F4Q0Q7O0FBeUNBLE1BQUlkLEtBQUssQ0FBQ2UsSUFBTixJQUFjZixLQUFLLENBQUNsWSxJQUFOLEdBQWFvWSxNQUEvQixFQUF1QztBQUNuQ0YsU0FBSyxDQUFDbFksSUFBTixHQUFhLENBQWI7QUFDSDtBQUNKO0FBQ00sU0FBU2taLG1CQUFULENBQTZCMWEsT0FBN0IsRUFBc0M7QUFDekNBLFNBQU8sQ0FBQ2lFLGdCQUFSLENBQXlCcEQsR0FBekIsQ0FBNkIyWSxLQUE3QixFQUFvQ0MsV0FBcEM7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RHVDO0FBRXpCLFNBQVMsU0FBUztJQUNoQyxNQUFNLFNBQVMsR0FBRztRQUNqQixJQUFJLEVBQUUsV0FBVztRQUNqQixRQUFRLEVBQUU7WUFDVCxJQUFJLEVBQUUsV0FBVztZQUNqQixDQUFDLEVBQUUsRUFBRTtZQUNMLENBQUMsRUFBRSxFQUFFO1lBQ0wsTUFBTSxFQUFFLEdBQUc7WUFDWCxNQUFNLEVBQUUsR0FBRztZQUNYLFFBQVEsRUFBRSxHQUFHO1lBQ2IsS0FBSyxFQUFFLEdBQUc7WUFDVixRQUFRLEVBQUUsQ0FBQztvQkFDVixJQUFJLEVBQUUsT0FBTztvQkFDYixHQUFHLEVBQUUsaURBQVk7b0JBQ2pCLEtBQUssRUFBRSxHQUFHO2lCQUNWLENBQUM7WUFDRixRQUFRLENBQUMsSUFBWTtnQkFDcEIsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQzlCLENBQUM7U0FDRDtLQUNELENBQUM7SUFFRixTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBa0IsQ0FBQyxDQUFDO0lBRXJELE9BQU8sU0FBUyxDQUFDO0FBQ2xCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JELE1BQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQztBQUV4QixNQUFNLFNBQVMsR0FBRyxjQUFjLENBQUM7QUFDakMsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDO0FBRTNCLE1BQU0sZUFBZSxHQUFHLEdBQUcsWUFBWSx5QkFBeUIsQ0FBQztBQUNqRSxNQUFNLFlBQVksR0FBRyxHQUFHLFlBQVksMEJBQTBCLENBQUM7QUFFL0QsTUFBTSxXQUFXLEdBQUcsR0FBRyxZQUFZLDBCQUEwQixDQUFDO0FBQzlELE1BQU0sWUFBWSxHQUFHLEdBQUcsWUFBWSwyQkFBMkIsQ0FBQztBQUVoRSxNQUFNLFVBQVUsR0FBRyxHQUFHLFlBQVksdUJBQXVCLENBQUM7QUFFMUQsTUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1htQjtBQUd4QztBQUdwQixTQUFTLFdBQVcsQ0FBQyxLQUFZLEVBQUUsT0FBc0I7SUFDeEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDZixPQUFPO0tBQ1A7SUFFRCxNQUFNLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUUzQyxJQUFJLGNBQWMsQ0FBQyxlQUFlLElBQUksQ0FBQyxFQUFFO1FBQ3hDLE9BQU87S0FDUDtJQUVELE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUM7SUFFNUIsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBeUIsQ0FBQztJQUUxRSxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUU7UUFDMUMsT0FBTztLQUNQO0lBRUQsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLE9BQXdCLENBQUM7SUFFL0MsU0FBUyxDQUFDLFlBQVksQ0FDckIsTUFBTSxDQUFDLENBQUMsRUFDUixNQUFNLENBQUMsQ0FBQyxFQUNSLE1BQU0sQ0FBQyxDQUFDLEVBQ1IsTUFBTSxDQUFDLENBQUMsRUFDUixNQUFNLENBQUMsRUFBRSxFQUNULE1BQU0sQ0FBQyxFQUFFLENBQ1QsQ0FBQztJQUVGLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUN6QyxNQUFNLENBQUMsR0FBRyxtREFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuQyxNQUFNLENBQUMsR0FBRyxtREFBVSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVwQyxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUMxQixTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN6QixTQUFTLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztJQUMvQixTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFFTSxTQUFTLHlCQUF5QixDQUFDLE9BQWdCO0lBQ3pELCtEQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLDZDQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDaEQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRG1DO0FBQ3lCO0FBRTlDLE1BQU0scUJBQXFCO0lBQTFDO1FBQ1UsWUFBTyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ3BDLGNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBeUIsQ0FBQztRQUV0RCxZQUFPLEdBQUcsQ0FBQyxLQUFhLEVBQXdCLEVBQUU7WUFDakQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDL0IsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFrQixDQUFDO2dCQUN2RCxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNkLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLEdBQUcsRUFBRTt3QkFDUixRQUFRLEdBQUcsNERBQVksQ0FBQyxHQUFHLENBQWtCLENBQUM7d0JBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztxQkFDakM7eUJBQU07d0JBQ04sc0RBQWEsQ0FBQyxxQkFBcUIsS0FBSyxZQUFZLENBQUMsQ0FBQztxQkFDdEQ7aUJBQ0Q7Z0JBQ0QsT0FBTyxRQUFRLENBQUM7YUFDaEI7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNiLENBQUM7SUFDRixDQUFDO0NBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCbUQ7QUFDQztBQUNEO0FBRXJDLE1BQU0sYUFBYyxTQUFRLDhEQUFhO0lBQ3ZEO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFDUixtRUFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixpRUFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsS0FBSztRQUNKLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDM0IsU0FBUyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDOUIsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pCLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFFLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7Q0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJjLFNBQVMsR0FBRztJQUMxQixPQUFPO1FBQ04sSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSxDQUFDO1FBQ1QsSUFBSSxFQUFFLENBQUM7UUFDUCxVQUFVLEVBQUU7WUFDWCxJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxRQUFRO1lBQ2YsS0FBSyxFQUFFLFFBQVE7U0FDZjtRQUNELFFBQVEsQ0FBQyxJQUFZO1lBQ3BCLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7Z0JBQ25CLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM1RCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sUUFBUSxTQUFTLEtBQUssQ0FBQztnQkFDakQsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDaEI7UUFDRixDQUFDO0tBQ0QsQ0FBQztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQmlCO0FBQ2dCO0FBQ1Y7QUFDc0I7QUFPL0IsU0FBUyxJQUFJO0lBQzNCLFNBQVMsV0FBVyxDQUFDLElBQW9CO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsT0FBTztRQUNOLElBQUksRUFBRSxXQUFXO1FBQ2pCLFFBQVEsRUFBRTtZQUNULFVBQVUsRUFBRTtnQkFDWCxJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsK0NBQVU7Z0JBQ2YsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsTUFBTSxFQUFFLENBQUM7YUFDVDtZQUNELE1BQU0sRUFBRTtnQkFDUCxJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUU7b0JBQ0wsSUFBSSxFQUFFLE1BQU07b0JBQ1osQ0FBQyxFQUFFLENBQUM7b0JBQ0osQ0FBQyxFQUFFLENBQUM7b0JBQ0osS0FBSyxFQUFFLEdBQUc7b0JBQ1YsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsTUFBTSxFQUFFO3dCQUNQLFNBQVMsRUFBRSxDQUFDO3dCQUNaLElBQUksRUFBRSxRQUFRO3FCQUNkO2lCQUNEO2FBQ0Q7WUFDRCxNQUFNLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFO29CQUNMO3dCQUNDLElBQUksRUFBRSxRQUFRO3dCQUNkLENBQUMsRUFBRSxHQUFHO3dCQUNOLENBQUMsRUFBRSxHQUFHO3dCQUNOLE1BQU0sRUFBRSxFQUFFO3dCQUNWLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO3FCQUNwRDtvQkFDRDt3QkFDQyxJQUFJLEVBQUUsTUFBTTt3QkFDWixJQUFJLEVBQUUsMEJBQTBCO3dCQUNoQyxJQUFJLEVBQUUsUUFBUTtxQkFDZDtvQkFDRDt3QkFDQyxJQUFJLEVBQUUsTUFBTTt3QkFDWixJQUFJLEVBQUU7NEJBQ0wsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTs0QkFDOUIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTs0QkFDaEMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTs0QkFDbEMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTs0QkFDaEMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTt5QkFDOUI7d0JBQ0QsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsTUFBTSxFQUFFLFFBQVE7cUJBQ2hCO2lCQUNEO2FBQ0Q7WUFDRCxLQUFLLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRTtvQkFDVCwyQ0FBSSxDQUFDO3dCQUNKLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsMkNBQU0sRUFBRSxPQUFPLEVBQUUsV0FBVztxQkFDOUQsQ0FBQztvQkFDRiwyQ0FBSSxDQUFDO3dCQUNKLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsOENBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVztxQkFDcEUsQ0FBQztpQkFDRjthQUNEO1lBQ0QsUUFBUSxFQUFFO2dCQUNULElBQUksRUFBRSxXQUFXO2dCQUNqQixDQUFDLEVBQUUsR0FBRztnQkFDTixDQUFDLEVBQUUsR0FBRztnQkFDTixRQUFRLEVBQUUsQ0FBQyxrREFBUSxFQUFFLENBQUM7YUFDdEI7WUFDRCxHQUFHLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLE9BQU87Z0JBQ2IsQ0FBQyxFQUFFLEdBQUc7Z0JBQ04sTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsR0FBRyxFQUFFLGFBQWE7Z0JBQ2xCLGFBQWE7b0JBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ0QsWUFBWTtvQkFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDbEIsQ0FBQzthQUNEO1lBQ0QsVUFBVSxFQUFFO2dCQUNYLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSxnREFBVztnQkFDaEIsQ0FBQyxFQUFFLEdBQUc7Z0JBQ04sQ0FBQyxFQUFFLEdBQUc7Z0JBQ04sS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFO29CQUNMLEtBQUssRUFBRSxRQUFRO29CQUNmLEtBQUssRUFBRSxDQUFDO2lCQUNEO2dCQUNSLFFBQVEsQ0FBQyxJQUFZO29CQUNwQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO3dCQUN4QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTs0QkFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO3lCQUNwQjtxQkFDRDtnQkFDRixDQUFDO2dCQUNELGFBQWEsQ0FBQyxDQUFNO29CQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7cUJBQ2pCO3lCQUFNO3dCQUNOLElBQUksQ0FBQyxJQUFJLEdBQUc7NEJBQ1gsS0FBSyxFQUFFLFFBQVE7NEJBQ2YsS0FBSyxFQUFFLENBQUM7eUJBQ1IsQ0FBQztxQkFDRjtvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsQ0FBQzthQUNEO1lBQ0QsV0FBVyxFQUFFO2dCQUNaLElBQUksRUFBRSxXQUFXO2dCQUNqQixDQUFDLEVBQUUsR0FBRztnQkFDTixDQUFDLEVBQUUsR0FBRztnQkFDTixRQUFRLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLE9BQU87b0JBQ2IsR0FBRyxFQUFFLGlEQUFZO29CQUNqQixLQUFLLEVBQUUsR0FBRztvQkFDVixLQUFLLEVBQUUsQ0FBQztvQkFDUixLQUFLLEVBQUU7d0JBQ04sSUFBSSxFQUFFLElBQUk7d0JBQ1YsTUFBTSxFQUFFOzRCQUNQO2dDQUNDLElBQUksRUFBRSxDQUFDO2dDQUNQLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUU7NkJBQ2Q7NEJBQ0Q7Z0NBQ0MsTUFBTSxFQUFFLFVBQVU7Z0NBQ2xCLElBQUksRUFBRSxDQUFDO2dDQUNQLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTs2QkFDMUI7NEJBQ0Q7Z0NBQ0MsTUFBTSxFQUFFLGFBQWE7Z0NBQ3JCLElBQUksRUFBRSxDQUFDO2dDQUNQLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTs2QkFDdEI7NEJBQ0Q7Z0NBQ0MsTUFBTSxFQUFFLGNBQWM7Z0NBQ3RCLElBQUksRUFBRSxDQUFDO2dDQUNQLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7NkJBQ1o7eUJBQ0Q7cUJBQ0Q7aUJBQ0Q7YUFDRDtZQUNELEdBQUcsRUFBRSw2Q0FBRyxFQUFFO1NBQ1Y7UUFDRCxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QixDQUFDO0tBQ0QsQ0FBQztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlLRCxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7QUFhWCxTQUFTLElBQUksQ0FBQyxLQUFxQjtJQUN6QyxTQUFTLFFBQVE7UUFDaEIsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7SUFDNUQsQ0FBQztJQUVELE9BQU87UUFDTixJQUFJLEVBQUUsV0FBVztRQUNqQixDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHO1FBQzNCLENBQUMsRUFBRSxHQUFHO1FBQ04sUUFBUSxFQUFFLENBQUM7UUFDWCxVQUFVLENBQUMsSUFBWTtZQUN0QixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQ3BELElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDL0I7aUJBQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ2hDO1FBQ0YsQ0FBQztRQUNELFFBQVEsQ0FBQyxJQUFZO1lBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUNELFFBQVEsRUFBRTtZQUNULElBQUksRUFBRTtnQkFDTCxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsUUFBUSxFQUFFO2dCQUNoQixVQUFVLEVBQUU7b0JBQ1gsSUFBSSxFQUFFLEVBQUU7b0JBQ1IsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsYUFBYSxFQUFFLFFBQVE7aUJBQ3ZCO2dCQUNELE1BQU0sRUFBRSxRQUFRO2dCQUNoQixDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNOLE1BQU0sRUFBRSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxHQUFHO2dCQUNYLGFBQWEsRUFBRSxHQUFHLEVBQUU7b0JBQ25CLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0QsUUFBUTtvQkFDUCxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsRUFBRSxDQUFDO2dCQUN4QixDQUFDO2FBQ0Q7WUFDRCxLQUFLLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE9BQU87Z0JBQ2IsR0FBRyxFQUFFLEtBQUssQ0FBQyxLQUFLO2dCQUNoQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLE1BQU0sRUFBRSxHQUFHO2dCQUNYLGFBQWEsRUFBRSxHQUFHLEVBQUU7b0JBQ25CLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7YUFDRDtTQUNEO0tBQ0QsQ0FBQztBQUNILENBQUM7Ozs7Ozs7VUNsRUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEU7QUFDM0I7QUFDSTtBQUNPO0FBQ0w7QUFDSDtBQUVHO0FBQzdCO0FBQ21CO0FBRzNCO0FBR2xCLE1BQU0sR0FBRyxHQUFHLDhDQUFJLEVBQUUsQ0FBQztBQUNuQixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7QUFHWixNQUFNLE1BQU0sR0FBRyxJQUFJLCtDQUFNLENBQUMsSUFBSSw4REFBYSxFQUFFLENBQUMsQ0FBQztBQUMvQywwRUFBOEIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0MsbUVBQXdCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pDLHFFQUF5QixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMxQywrREFBbUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEMsdUVBQTBCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkMsTUFBTSxDQUFDLElBQUksR0FBRyxHQUF1QixDQUFDO0FBQ3RDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFHbEQsTUFBTSxZQUFZLEdBQUcsSUFBSSwrQ0FBTSxDQUFDLElBQUksb0RBQWEsRUFBRSxDQUFDLENBQUM7QUFDckQsWUFBWSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDaEMsWUFBWSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDMUIsWUFBWSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDbkMsWUFBWSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2hDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNwQixZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztBQUN6RCxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztBQUMvQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUNsRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBR3hELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDakMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztBQUdsQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFHdkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUMzQixnREFBVyxFQUNYO0lBQ0MsS0FBSyxFQUFFLGdEQUFXO0lBQ2xCLEtBQUssRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU87SUFDbkMsTUFBTSxFQUFFLElBQUk7Q0FDSyxDQUNsQixDQUFDO0FBQ0YsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUNqQyxnREFBVyxFQUNYO0lBQ0MsS0FBSyxFQUFFLGdEQUFXO0lBQ2xCLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU87SUFDN0IsTUFBTSxFQUFFLElBQUk7Q0FDSyxDQUNsQixDQUFDO0FBR0YsTUFBTSxlQUFlLEdBQUcsSUFBSSxzREFBcUIsRUFBRSxDQUFDO0FBQ3BELGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLGlEQUFZLENBQUMsQ0FBQztBQUNyRSxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzREFBaUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsb0RBQWUsQ0FBQyxDQUFDO0FBQzNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2hFLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXNTdXBwb3J0IGZyb20gJy4vc3VwcG9ydCc7XG5leHBvcnQgKiBmcm9tICcuL3BhdHRlcm5zJztcbmV4cG9ydCB7IENhbnZhc1N1cHBvcnQsIH07XG4iLCJpbXBvcnQgeyBDb2xvclRyYW5zZm9ybSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29sb3JQYXR0ZXJuKGNvbG9yLCBhbHBoYSwgY3QpIHtcbiAgICBsZXQgciA9IGNvbG9yID4+IDE2ICYgMHhmZjtcbiAgICBsZXQgZyA9IGNvbG9yID4+IDggJiAweGZmO1xuICAgIGxldCBiID0gY29sb3IgJiAweGZmO1xuICAgIGxldCBhID0gYWxwaGEgKiAweGZmO1xuICAgIGlmICghQ29sb3JUcmFuc2Zvcm0uaXNEZWZhdWx0KGN0KSkge1xuICAgICAgICByID0gKHIgKiBjdC5yZWRNdWx0aXBsaWVyICsgY3QucmVkT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgIGcgPSAoZyAqIGN0LmdyZWVuTXVsdGlwbGllciArIGN0LmdyZWVuT2Zmc2V0KSAmIDB4ZmY7XG4gICAgICAgIGIgPSAoYiAqIGN0LmJsdWVNdWx0aXBsaWVyICsgY3QuYmx1ZU9mZnNldCkgJiAweGZmO1xuICAgICAgICBhID0gKGEgKiBjdC5hbHBoYU11bHRpcGxpZXIgKyBjdC5hbHBoYU9mZnNldCkgJiAweGZmO1xuICAgIH1cbiAgICBpZiAoYSA8IDB4ZmYpIHtcbiAgICAgICAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YSAvIDB4ZmZ9KWA7XG4gICAgfVxuICAgIHJldHVybiBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYDtcbn1cbiIsImltcG9ydCB7IFN1cHBvcnQgfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNTdXBwb3J0IGV4dGVuZHMgU3VwcG9ydCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY29udGV4dDJkID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2FudmFzIH0gPSB0aGlzO1xuICAgICAgICB0aGlzLmNvbnRleHQyZC5zZXRUcmFuc2Zvcm0oKTtcbiAgICAgICAgdGhpcy5jb250ZXh0MmQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICAgIHNldFNpemUod2lkdGgsIGhlaWdodCwgcGl4ZWxSYXRpbykge1xuICAgICAgICBjb25zdCB2aWV3V2lkdGggPSBNYXRoLmZsb29yKHdpZHRoICogcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNvbnN0IHZpZXdIZWlnaHQgPSBNYXRoLmZsb29yKGhlaWdodCAqIHBpeGVsUmF0aW8pO1xuICAgICAgICBjb25zdCB7IGNhbnZhcyB9ID0gdGhpcztcbiAgICAgICAgaWYgKGNhbnZhcy53aWR0aCAhPT0gdmlld1dpZHRoIHx8IGNhbnZhcy5oZWlnaHQgIT09IHZpZXdIZWlnaHQpIHtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHZpZXdXaWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB2aWV3SGVpZ2h0O1xuICAgICAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgdmFyIENvbXBvbmVudDtcbihmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gaXNFbmFibGVkKGNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgQ29tcG9uZW50LmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgICBmdW5jdGlvbiBpc1Zpc2libGUoY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQudmlzaWJsZSA/PyB0cnVlO1xuICAgIH1cbiAgICBDb21wb25lbnQuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xufSkoQ29tcG9uZW50IHx8IChDb21wb25lbnQgPSB7fSkpO1xuIiwiZXhwb3J0IGNvbnN0IENPTlRBSU5FUiA9ICdjb250YWluZXInO1xuZXhwb3J0IHZhciBDb250YWluZXI7XG4oZnVuY3Rpb24gKENvbnRhaW5lcikge1xuICAgIGZ1bmN0aW9uIG51bUNoaWxkcmVuKGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb250YWluZXI7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgcmV0dXJuIGtleXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBDb250YWluZXIubnVtQ2hpbGRyZW4gPSBudW1DaGlsZHJlbjtcbn0pKENvbnRhaW5lciB8fCAoQ29udGFpbmVyID0ge30pKTtcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoY29udGFpbmVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgIGNvbnN0IHsgc3VwcG9ydCB9ID0gY29udGV4dDtcbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IHN1cHBvcnQuZ2V0UmVuZGVyQ29udGV4dChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHN1cHBvcnQucmVuZGVyKGNvbXBvbmVudCwgY29tcG9uZW50Q29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4udHlwZSkge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGRyZW47XG4gICAgICAgICAgICBjb25zdCBjaGlsZENvbnRleHQgPSBzdXBwb3J0LmdldFJlbmRlckNvbnRleHQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIHN1cHBvcnQucmVuZGVyKGNvbXBvbmVudCwgY2hpbGRDb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNNYXBba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q29udGV4dCA9IHN1cHBvcnQuZ2V0UmVuZGVyQ29udGV4dChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHN1cHBvcnQucmVuZGVyKGNvbXBvbmVudCwgY29tcG9uZW50Q29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlKGNvbnRhaW5lciwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNvbnRhaW5lcjtcbiAgICBjb25zdCB7IHN1cHBvcnQgfSA9IGNvbnRleHQ7XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBzdXBwb3J0LmdldFVwZGF0ZUNvbnRleHQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBzdXBwb3J0LnVwZGF0ZShjb21wb25lbnQsIGNvbXBvbmVudENvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRDb250ZXh0ID0gc3VwcG9ydC5nZXRVcGRhdGVDb250ZXh0KGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICBzdXBwb3J0LnVwZGF0ZShjb21wb25lbnQsIGNoaWxkQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRzTWFwID0gY2hpbGRyZW47XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50c01hcCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzTWFwW2tleXNbaV1dO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBzdXBwb3J0LmdldFVwZGF0ZUNvbnRleHQoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBzdXBwb3J0LnVwZGF0ZShjb21wb25lbnQsIGNvbXBvbmVudENvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGhpdFRlc3QoY29udGFpbmVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29udGFpbmVyO1xuICAgIGNvbnN0IHsgc3VwcG9ydCB9ID0gY29udGV4dDtcbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gc3VwcG9ydC5nZXRQb2ludGVyQ29udGV4dChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cHBvcnQuaGl0VGVzdChjb21wb25lbnQsIGNvbXBvbmVudENvbnRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLnR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRDb250ZXh0ID0gc3VwcG9ydC5nZXRQb2ludGVyQ29udGV4dChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwcG9ydC5oaXRUZXN0KGNvbXBvbmVudCwgY2hpbGRDb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHNNYXAgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzTWFwKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBrZXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c01hcFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRDb250ZXh0ID0gc3VwcG9ydC5nZXRQb2ludGVyQ29udGV4dChjb21wb25lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cHBvcnQuaGl0VGVzdChjb21wb25lbnQsIGNvbXBvbmVudENvbnRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUNvbnRhaW5lckV4dGVuc2lvbihzdXBwb3J0KSB7XG4gICAgc3VwcG9ydC51cGRhdGVIYW5kbGVycy5zZXQoQ09OVEFJTkVSLCB1cGRhdGUpO1xuICAgIHN1cHBvcnQucmVuZGVySGFuZGxlcnMuc2V0KENPTlRBSU5FUiwgcmVuZGVyKTtcbiAgICBzdXBwb3J0LmhpdFRlc3RIYW5kbGVycy5zZXQoQ09OVEFJTkVSLCBoaXRUZXN0KTtcbn1cbiIsImltcG9ydCB7IENvbG9yVHJhbnNmb3JtLCBNYXRyaXggfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgYXBwbHlDb250YWluZXJFeHRlbnNpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5jb25zdCBFTVBUWV9NQVRSSVggPSBNYXRyaXguZW1wdHkoKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZ2luZSB7XG4gICAgY29uc3RydWN0b3Ioc3VwcG9ydCkge1xuICAgICAgICB0aGlzLndpZHRoID0gNDAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDMwMDtcbiAgICAgICAgdGhpcy5mdWxsc2NyZWVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXJFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb2ludGVyRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aW1lID0gLTE7XG4gICAgICAgIHRoaXMubWF0cml4ID0gTWF0cml4LmVtcHR5KCk7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxVcGRhdGUgPSAodGltZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gdGhpcy50aW1lID09PSAtMSA/IDAgOiB0aW1lIC0gdGhpcy50aW1lO1xuICAgICAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRnJhbWUoZGVsdGFUaW1lIC8gMTAwMCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3VwcG9ydCA9IHN1cHBvcnQ7XG4gICAgICAgIGFwcGx5Q29udGFpbmVyRXh0ZW5zaW9uKHRoaXMuc3VwcG9ydCk7XG4gICAgfVxuICAgIHVwZGF0ZSh0aW1lID0gMCkge1xuICAgICAgICBpZiAoIXRoaXMucm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJhc2UgPSB7XG4gICAgICAgICAgICBzdXBwb3J0OiB0aGlzLnN1cHBvcnQsXG4gICAgICAgICAgICB0aW1lLFxuICAgICAgICAgICAgZGVwdGg6IDAsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLnN1cHBvcnQuZ2V0VXBkYXRlQ29udGV4dCh0aGlzLnJvb3QsIGJhc2UpO1xuICAgICAgICB0aGlzLnN1cHBvcnQudXBkYXRlKHRoaXMucm9vdCwgY29udGV4dCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1cHBvcnQuY2xlYXIoKTtcbiAgICAgICAgY29uc3QgYmFzZSA9IHtcbiAgICAgICAgICAgIHN1cHBvcnQ6IHRoaXMuc3VwcG9ydCxcbiAgICAgICAgICAgIGRlcHRoOiAwLFxuICAgICAgICAgICAgbWF0cml4OiB0aGlzLm1hdHJpeCxcbiAgICAgICAgICAgIGNvbG9yVHJhbnNmb3JtOiBDb2xvclRyYW5zZm9ybS5lbXB0eSgpLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5zdXBwb3J0LmdldFJlbmRlckNvbnRleHQodGhpcy5yb290LCBiYXNlKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0LnJlbmRlcih0aGlzLnJvb3QsIGNvbnRleHQpO1xuICAgIH1cbiAgICB1cGRhdGVTaXplKCkge1xuICAgICAgICBjb25zdCBwaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZnVsbHNjcmVlbiB9ID0gdGhpcztcbiAgICAgICAgbGV0IHRhcmdldFdpZHRoID0gTWF0aC5mbG9vcih3aWR0aCk7XG4gICAgICAgIGxldCB0YXJnZXRIZWlnaHQgPSBNYXRoLmZsb29yKGhlaWdodCk7XG4gICAgICAgIGlmIChmdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICB0YXJnZXRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgdGFyZ2V0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF0cml4LmEgPSBwaXhlbFJhdGlvO1xuICAgICAgICB0aGlzLm1hdHJpeC5kID0gcGl4ZWxSYXRpbztcbiAgICAgICAgdGhpcy5zdXBwb3J0LnNldFNpemUodGFyZ2V0V2lkdGgsIHRhcmdldEhlaWdodCwgcGl4ZWxSYXRpbyk7XG4gICAgfVxuICAgIHVwZGF0ZUZyYW1lKHRpbWUgPSAwKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICBpZiAodGhpcy51cGRhdGVFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZW5kZXJFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTmV4dEZyYW1lKCk7XG4gICAgfVxuICAgIHVwZGF0ZU5leHRGcmFtZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuaW50ZXJuYWxVcGRhdGUpO1xuICAgIH1cbiAgICBkaXNwYXRjaFBvaW50ZXJFdmVudChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucG9pbnRlckVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgaWQsIHgsIHksIH0gPSBldmVudDtcbiAgICAgICAgY29uc3QgYmFzZSA9IHtcbiAgICAgICAgICAgIHN1cHBvcnQ6IHRoaXMuc3VwcG9ydCxcbiAgICAgICAgICAgIGRlcHRoOiAwLFxuICAgICAgICAgICAgbWF0cml4OiBFTVBUWV9NQVRSSVgsXG4gICAgICAgICAgICBsb2NhbDogeyB4LCB5IH0sXG4gICAgICAgICAgICBnbG9iYWw6IHsgeCwgeSB9LFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5zdXBwb3J0LmdldFBvaW50ZXJDb250ZXh0KHRoaXMucm9vdCwgYmFzZSk7XG4gICAgICAgIHRoaXMuc3VwcG9ydC5oaXRUZXN0KHRoaXMucm9vdCwgY29udGV4dCk7XG4gICAgfVxuICAgIHBsYXkoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5Jyk7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lID0gLTE7XG4gICAgICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOZXh0RnJhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BhdXNlJyk7XG4gICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgRGVidWcgZnJvbSAnLi4vdXRpbHMvZGVidWcnO1xuZXhwb3J0IGNsYXNzIFJlc291cmNlcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlc29sdmVycyA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgZ2V0KGFzc2V0KSB7XG4gICAgICAgIGlmICghYXNzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VzLmdldChhc3NldCk7XG4gICAgICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHJlc291cmNlID0gdGhpcy5yZXNvbHZlKGFzc2V0KTtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzLnNldChhc3NldCwgcmVzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICB9XG4gICAgYWRkKGFzc2V0LCByZXNvdXJjZSkge1xuICAgICAgICB0aGlzLnJlc291cmNlcy5zZXQoYXNzZXQsIHJlc291cmNlKTtcbiAgICB9XG4gICAgcmVtb3ZlKGFzc2V0KSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzLmRlbGV0ZShhc3NldCk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnJlc291cmNlcy5jbGVhcigpO1xuICAgIH1cbiAgICByZXNvbHZlKGFzc2V0KSB7XG4gICAgICAgIGZvciAoY29uc3QgcmVzb2x2ZXIgb2YgdGhpcy5yZXNvbHZlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gcmVzb2x2ZXIoYXNzZXQpO1xuICAgICAgICAgICAgaWYgKHJlc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIERlYnVnLndhcm5pbmcoYFJlc291cmNlIG5vdCByZXNvbHZlZDogJHthc3NldH1gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm0sIE1hdHJpeCB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBQb2ludGVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wb2ludGVyJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdHJhbnNmb3JtJztcbmltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gJy4vcmVzb3VyY2VzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1cHBvcnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZURlcHRoID0gNjQ7XG4gICAgICAgIHRoaXMudXBkYXRlSGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVuZGVySGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuaGl0VGVzdEhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnByb3BlcnR5SGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IFJlc291cmNlcygpO1xuICAgIH1cbiAgICB1cGRhdGUoY29tcG9uZW50LCBjb250ZXh0KSB7XG4gICAgICAgIGlmIChjb250ZXh0LmRlcHRoID4gdGhpcy51cGRhdGVEZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQ29tcG9uZW50LmlzRW5hYmxlZChjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wZXJ0eUhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIsIHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50W3Byb3BlcnR5XSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoY29tcG9uZW50LCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb21wb25lbnQub25VcGRhdGUpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5vblVwZGF0ZShjb250ZXh0LnRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZXJzLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKGNvbXBvbmVudCwgY29udGV4dCkge1xuICAgICAgICBpZiAoY29udGV4dC5kZXB0aCA+IHRoaXMudXBkYXRlRGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUNvbXBvbmVudC5pc1Zpc2libGUoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLnJlbmRlckhhbmRsZXJzLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGl0VGVzdChjb21wb25lbnQsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuZGVwdGggPiB0aGlzLnVwZGF0ZURlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFDb21wb25lbnQuaXNWaXNpYmxlKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVBvaW50ZXIuaXNQb2ludGVyRW5hYmxlZChjb21wb25lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGl0VGVzdEhhbmRsZXJzLmdldChjb21wb25lbnQudHlwZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGNvbnRleHQubG9jYWw7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBoYW5kbGVyKGNvbXBvbmVudCwgY29udGV4dCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgY29udGV4dC50eXBlLCB4LCB5LCBjb250ZXh0LmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb250ZXh0LnR5cGUgPT09ICdwb2ludGVyTW92ZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmICFjb21wb25lbnQucG9pbnRlck92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgUG9pbnRlci5kaXNwYXRjaEV2ZW50KGNvbXBvbmVudCwgJ3BvaW50ZXJPdmVyJywgeCwgeSwgY29udGV4dC5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFyZXN1bHQgJiYgY29tcG9uZW50LnBvaW50ZXJPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudChjb21wb25lbnQsICdwb2ludGVyT3V0JywgeCwgeSwgY29udGV4dC5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5wb2ludGVyT3ZlciA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBnZXRVcGRhdGVDb250ZXh0KGNvbXBvbmVudCwgcGFyZW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aW1lOiBwYXJlbnQudGltZSxcbiAgICAgICAgICAgIGRlcHRoOiBwYXJlbnQuZGVwdGggKyAxLFxuICAgICAgICAgICAgc3VwcG9ydDogcGFyZW50LnN1cHBvcnQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFJlbmRlckNvbnRleHQoY29tcG9uZW50LCBwYXJlbnQpIHtcbiAgICAgICAgY29uc3QgbWF0cml4ID0gVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQpO1xuICAgICAgICBjb25zdCBjb2xvclRyYW5zZm9ybSA9IFRyYW5zZm9ybS5nZXRDb2xvclRyYW5zZm9ybShjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVwdGg6IHBhcmVudC5kZXB0aCArIDEsXG4gICAgICAgICAgICBzdXBwb3J0OiBwYXJlbnQuc3VwcG9ydCxcbiAgICAgICAgICAgIG1hdHJpeDogTWF0cml4LmNvbmNhdChwYXJlbnQubWF0cml4LCBtYXRyaXgpLFxuICAgICAgICAgICAgY29sb3JUcmFuc2Zvcm06IENvbG9yVHJhbnNmb3JtLmNvbmNhdChwYXJlbnQuY29sb3JUcmFuc2Zvcm0sIGNvbG9yVHJhbnNmb3JtKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UG9pbnRlckNvbnRleHQoY29tcG9uZW50LCBwYXJlbnQpIHtcbiAgICAgICAgY29uc3QgbWF0cml4ID0gVHJhbnNmb3JtLmdldE1hdHJpeChjb21wb25lbnQpO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm1lZE1hdHJpeCA9IE1hdHJpeC5jb25jYXQocGFyZW50Lm1hdHJpeCwgbWF0cml4KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlcHRoOiBwYXJlbnQuZGVwdGggKyAxLFxuICAgICAgICAgICAgdHlwZTogcGFyZW50LnR5cGUsXG4gICAgICAgICAgICBzdXBwb3J0OiBwYXJlbnQuc3VwcG9ydCxcbiAgICAgICAgICAgIGdsb2JhbDogcGFyZW50Lmdsb2JhbCxcbiAgICAgICAgICAgIG1hdHJpeDogdHJhbnNmb3JtZWRNYXRyaXgsXG4gICAgICAgICAgICBsb2NhbDogTWF0cml4LnRyYW5zZm9ybUludmVyc2VQb2ludCh0cmFuc2Zvcm1lZE1hdHJpeCwgcGFyZW50Lmdsb2JhbCksXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IFN1cHBvcnQgZnJvbSAnLi9lbmdpbmUvc3VwcG9ydCc7XG5pbXBvcnQgRW5naW5lIGZyb20gJy4vZW5naW5lL2VuZ2luZSc7XG5pbXBvcnQgRGVidWcgZnJvbSAnLi91dGlscy9kZWJ1Zyc7XG5leHBvcnQgKiBmcm9tICcuL2VuZ2luZS9jb250ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vZW5naW5lL3Jlc291cmNlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvcG9pbnRlcic7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvdHJhbnNmb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy9zb3VyY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3Bpdm90JztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XG5leHBvcnQgKiBmcm9tICcuL2lucHV0L2tleWJvYXJkJztcbmV4cG9ydCAqIGZyb20gJy4vaW5wdXQvbW91c2UnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnB1dC90b3VjaCc7XG5leHBvcnQgeyBTdXBwb3J0LCBFbmdpbmUsIERlYnVnLCB9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5S2V5Ym9hcmRTdXBwb3J0RXh0ZW5zaW9uKGVuZ2luZSkge1xufVxuIiwiZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCB0eXBlKSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSBlbmdpbmUuc3VwcG9ydDtcbiAgICBjb25zdCBjbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIGNsaWVudFJlY3QubGVmdCAtIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIGNsaWVudFJlY3QudG9wIC0gZWxlbWVudC5jbGllbnRUb3A7XG4gICAgZW5naW5lLmRpc3BhdGNoUG9pbnRlckV2ZW50KHtcbiAgICAgICAgdHlwZSwgeCwgeSxcbiAgICB9KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TW91c2VTdXBwb3J0RXh0ZW5zaW9uKGVuZ2luZSkge1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gZW5naW5lLnN1cHBvcnQ7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckRvd24nKTtcbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlclVwJyk7XG4gICAgfSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlck1vdmUnKTtcbiAgICB9KTtcbn1cbiIsImZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgdHlwZSkge1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gZW5naW5lLnN1cHBvcnQ7XG4gICAgY29uc3QgY2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldO1xuICAgICAgICBjb25zdCB4ID0gdG91Y2guY2xpZW50WCAtIGNsaWVudFJlY3QubGVmdCAtIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgICAgICAgY29uc3QgeSA9IHRvdWNoLmNsaWVudFkgLSBjbGllbnRSZWN0LnRvcCAtIGVsZW1lbnQuY2xpZW50VG9wO1xuICAgICAgICBjb25zdCBpZCA9IHRvdWNoLmlkZW50aWZpZXI7XG4gICAgICAgIGVuZ2luZS5kaXNwYXRjaFBvaW50ZXJFdmVudCh7XG4gICAgICAgICAgICB0eXBlLCB4LCB5LCBpZCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlUb3VjaFN1cHBvcnRFeHRlbnNpb24oZW5naW5lKSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSBlbmdpbmUuc3VwcG9ydDtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbmdpbmUsIGV2ZW50LCAncG9pbnRlckRvd24nKTtcbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJVcCcpO1xuICAgIH0pO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoZW5naW5lLCBldmVudCwgJ3BvaW50ZXJNb3ZlJyk7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgdmFyIFBpdm90O1xuKGZ1bmN0aW9uIChQaXZvdCkge1xuICAgIGZ1bmN0aW9uIGdldFgocGl2b3QsIHdpZHRoKSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RYIH0gPSBwaXZvdDtcbiAgICAgICAgaWYgKHBpdm90WCkge1xuICAgICAgICAgICAgcmV0dXJuIC1waXZvdFggKiB3aWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgUGl2b3QuZ2V0WCA9IGdldFg7XG4gICAgZnVuY3Rpb24gZ2V0WShwaXZvdCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IHsgcGl2b3RZIH0gPSBwaXZvdDtcbiAgICAgICAgaWYgKHBpdm90WSkge1xuICAgICAgICAgICAgcmV0dXJuIC1waXZvdFkgKiBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFBpdm90LmdldFkgPSBnZXRZO1xufSkoUGl2b3QgfHwgKFBpdm90ID0ge30pKTtcbiIsImltcG9ydCBEZWJ1ZyBmcm9tICcuLi91dGlscy9kZWJ1Zyc7XG5leHBvcnQgdmFyIFBvaW50ZXI7XG4oZnVuY3Rpb24gKFBvaW50ZXIpIHtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJPdmVyKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuICEhcG9pbnRlci5wb2ludGVyT3ZlcjtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJPdmVyID0gaXNQb2ludGVyT3ZlcjtcbiAgICBmdW5jdGlvbiBpc1BvaW50ZXJFbmFibGVkKHBvaW50ZXIpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50ZXIucG9pbnRlckVuYWJsZWQgPz8gdHJ1ZTtcbiAgICB9XG4gICAgUG9pbnRlci5pc1BvaW50ZXJFbmFibGVkID0gaXNQb2ludGVyRW5hYmxlZDtcbiAgICBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KHBvaW50ZXIsIHR5cGUsIHgsIHksIGlkKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJOYW1lID0gYG9uJHt0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7dHlwZS5zbGljZSgxKX1gO1xuICAgICAgICBpZiAoaGFuZGxlck5hbWUpIHtcbiAgICAgICAgICAgIGlmIChwb2ludGVyW2hhbmRsZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlLCB4LCB5LCBpZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHBvaW50ZXJbaGFuZGxlck5hbWVdKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIERlYnVnLndhcm5pbmcoYFBvaW50ZXIgZXZlbnQgd2l0aCB0eXBlOiAke3R5cGV9IG5vdCBmb3VuZGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFBvaW50ZXIuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG59KShQb2ludGVyIHx8IChQb2ludGVyID0ge30pKTtcbiIsImV4cG9ydCB2YXIgU291cmNlO1xuKGZ1bmN0aW9uIChTb3VyY2UpIHtcbiAgICBmdW5jdGlvbiBnZXRSZXNvdXJjZShzb3VyY2UsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IHNvdXJjZTtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0LnN1cHBvcnQucmVzb3VyY2VzLmdldChzcmMpO1xuICAgIH1cbiAgICBTb3VyY2UuZ2V0UmVzb3VyY2UgPSBnZXRSZXNvdXJjZTtcbiAgICBmdW5jdGlvbiBpc0xvYWRlZChzb3VyY2UsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBnZXRSZXNvdXJjZShzb3VyY2UsIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gISFyZXNvdXJjZT8ubG9hZGVkO1xuICAgIH1cbiAgICBTb3VyY2UuaXNMb2FkZWQgPSBpc0xvYWRlZDtcbn0pKFNvdXJjZSB8fCAoU291cmNlID0ge30pKTtcbiIsImV4cG9ydCB2YXIgVHJhbnNmb3JtO1xuKGZ1bmN0aW9uIChUcmFuc2Zvcm0pIHtcbiAgICBmdW5jdGlvbiBnZXRNYXRyaXgodHJhbnNmb3JtKSB7XG4gICAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmIChtYXRyaXgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYTogbWF0cml4LmEgPz8gMSxcbiAgICAgICAgICAgICAgICBiOiBtYXRyaXguYiA/PyAwLFxuICAgICAgICAgICAgICAgIGM6IG1hdHJpeC5jID8/IDAsXG4gICAgICAgICAgICAgICAgZDogbWF0cml4LmQgPz8gMSxcbiAgICAgICAgICAgICAgICB0eDogbWF0cml4LnR4ID8/IDAsXG4gICAgICAgICAgICAgICAgdHk6IG1hdHJpeC50eSA/PyAwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJvdGF0aW9uIH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHRyYW5zZm9ybS5zY2FsZVggPz8gdHJhbnNmb3JtLnNjYWxlID8/IDE7XG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IHRyYW5zZm9ybS5zY2FsZVkgPz8gdHJhbnNmb3JtLnNjYWxlID8/IDE7XG4gICAgICAgIGNvbnN0IHR4ID0gdHJhbnNmb3JtLnggPz8gMDtcbiAgICAgICAgY29uc3QgdHkgPSB0cmFuc2Zvcm0ueSA/PyAwO1xuICAgICAgICBpZiAocm90YXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKHJvdGF0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKHJvdGF0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYTogY29zICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIGI6IHNpbiAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICBjOiAtc2luICogc2NhbGVZLFxuICAgICAgICAgICAgICAgIGQ6IGNvcyAqIHNjYWxlWSxcbiAgICAgICAgICAgICAgICB0eCxcbiAgICAgICAgICAgICAgICB0eSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGE6IHNjYWxlWCxcbiAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICBjOiAwLFxuICAgICAgICAgICAgZDogc2NhbGVZLFxuICAgICAgICAgICAgdHgsXG4gICAgICAgICAgICB0eSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldE1hdHJpeCA9IGdldE1hdHJpeDtcbiAgICBmdW5jdGlvbiBnZXRDb2xvclRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICAgICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtO1xuICAgICAgICBpZiAoY29sb3JUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWxwaGFNdWx0aXBsaWVyOiBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPz8gMSxcbiAgICAgICAgICAgICAgICByZWRNdWx0aXBsaWVyOiBjb2xvclRyYW5zZm9ybS5yZWRNdWx0aXBsaWVyID8/IDEsXG4gICAgICAgICAgICAgICAgZ3JlZW5NdWx0aXBsaWVyOiBjb2xvclRyYW5zZm9ybS5ncmVlbk11bHRpcGxpZXIgPz8gMSxcbiAgICAgICAgICAgICAgICBibHVlTXVsdGlwbGllcjogY29sb3JUcmFuc2Zvcm0uYmx1ZU11bHRpcGxpZXIgPz8gMSxcbiAgICAgICAgICAgICAgICBhbHBoYU9mZnNldDogY29sb3JUcmFuc2Zvcm0uYWxwaGFPZmZzZXQgPz8gMCxcbiAgICAgICAgICAgICAgICByZWRPZmZzZXQ6IGNvbG9yVHJhbnNmb3JtLnJlZE9mZnNldCA/PyAwLFxuICAgICAgICAgICAgICAgIGdyZWVuT2Zmc2V0OiBjb2xvclRyYW5zZm9ybS5ncmVlbk9mZnNldCA/PyAwLFxuICAgICAgICAgICAgICAgIGJsdWVPZmZzZXQ6IGNvbG9yVHJhbnNmb3JtLmJsdWVPZmZzZXQgPz8gMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB0aW50IH0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGlmICh0aW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IGNvbG9yID0gMCwgdmFsdWUgPSAxIH0gPSB0aW50O1xuICAgICAgICAgICAgY29uc3QgdmFsdWVJbnZlcnRlZCA9IDEgLSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHIgPSAoY29sb3IgPj4gMTYpICYgMHhmZjtcbiAgICAgICAgICAgIGNvbnN0IGcgPSAoY29sb3IgPj4gOCkgJiAweGZmO1xuICAgICAgICAgICAgY29uc3QgYiA9IGNvbG9yICYgMHhmZjtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWxwaGFNdWx0aXBsaWVyOiB0cmFuc2Zvcm0uYWxwaGEgPz8gMSxcbiAgICAgICAgICAgICAgICByZWRNdWx0aXBsaWVyOiB2YWx1ZUludmVydGVkLFxuICAgICAgICAgICAgICAgIGdyZWVuTXVsdGlwbGllcjogdmFsdWVJbnZlcnRlZCxcbiAgICAgICAgICAgICAgICBibHVlTXVsdGlwbGllcjogdmFsdWVJbnZlcnRlZCxcbiAgICAgICAgICAgICAgICBhbHBoYU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICByZWRPZmZzZXQ6IHIgKiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBncmVlbk9mZnNldDogZyAqIHZhbHVlLFxuICAgICAgICAgICAgICAgIGJsdWVPZmZzZXQ6IGIgKiB2YWx1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFscGhhTXVsdGlwbGllcjogdHJhbnNmb3JtLmFscGhhID8/IDEsXG4gICAgICAgICAgICByZWRNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgZ3JlZW5NdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgYmx1ZU11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBhbHBoYU9mZnNldDogMCxcbiAgICAgICAgICAgIHJlZE9mZnNldDogMCxcbiAgICAgICAgICAgIGdyZWVuT2Zmc2V0OiAwLFxuICAgICAgICAgICAgYmx1ZU9mZnNldDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgVHJhbnNmb3JtLmdldENvbG9yVHJhbnNmb3JtID0gZ2V0Q29sb3JUcmFuc2Zvcm07XG59KShUcmFuc2Zvcm0gfHwgKFRyYW5zZm9ybSA9IHt9KSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEZWJ1ZyB7XG4gICAgc3RhdGljIGxvZyguLi5hcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuICAgIH1cbiAgICBzdGF0aWMgZXJyb3IoLi4uYXJncykge1xuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5lcnJvcnMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICB0aGlzLmVycm9ycy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG4gICAgc3RhdGljIHdhcm5pbmcoLi4uYXJncykge1xuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhhcmdzKTtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy53YXJuaW5ncy5nZXQoaWQpO1xuICAgICAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgdGhpcy53YXJuaW5ncy5zZXQoaWQsIGNvdW50KTtcbiAgICB9XG59XG5EZWJ1Zy5lcnJvcnMgPSBuZXcgTWFwKCk7XG5EZWJ1Zy53YXJuaW5ncyA9IG5ldyBNYXAoKTtcbiIsImV4cG9ydCB2YXIgQm91bmRzO1xuKGZ1bmN0aW9uIChCb3VuZHMpIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1pblg6IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtaW5ZOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgbWF4WDogTnVtYmVyLk1JTl9WQUxVRSxcbiAgICAgICAgICAgIG1heFk6IE51bWJlci5NSU5fVkFMVUUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIEJvdW5kcy5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGlzRW1wdHkoYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgfSA9IGJvdW5kcztcbiAgICAgICAgcmV0dXJuIG1pblggPT09IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgICAgICYmIG1pblkgPT09IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgICAgICYmIG1heFggPT09IE51bWJlci5NSU5fVkFMVUVcbiAgICAgICAgICAgICYmIG1heFkgPT09IE51bWJlci5NSU5fVkFMVUU7XG4gICAgfVxuICAgIEJvdW5kcy5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiB0b1JlY3RhbmdsZShib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB9ID0gYm91bmRzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogbWluWCxcbiAgICAgICAgICAgIHk6IG1pblksXG4gICAgICAgICAgICB3aWR0aDogbWF4WCAtIG1pblgsXG4gICAgICAgICAgICBoZWlnaHQ6IG1heFkgLSBtaW5ZLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBCb3VuZHMudG9SZWN0YW5nbGUgPSB0b1JlY3RhbmdsZTtcbiAgICBmdW5jdGlvbiB0ZXN0WChib3VuZHMsIHgpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIEJvdW5kcy50ZXN0WCA9IHRlc3RYO1xuICAgIGZ1bmN0aW9uIHRlc3RZKGJvdW5kcywgeSkge1xuICAgICAgICBpZiAoYm91bmRzLm1pblkgPiB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYm91bmRzLm1heFkgPCB5KSB7XG4gICAgICAgICAgICBib3VuZHMubWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQm91bmRzLnRlc3RZID0gdGVzdFk7XG4gICAgZnVuY3Rpb24gdGVzdChib3VuZHMsIHgsIHkpIHtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdCA9IHRlc3Q7XG4gICAgZnVuY3Rpb24gdGVzdFBvaW50KGJvdW5kcywgcG9pbnQpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgaWYgKGJvdW5kcy5taW5YID4geCkge1xuICAgICAgICAgICAgYm91bmRzLm1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5tYXhYIDwgeCkge1xuICAgICAgICAgICAgYm91bmRzLm1heFggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3VuZHMubWluWSA+IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5taW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMubWF4WSA8IHkpIHtcbiAgICAgICAgICAgIGJvdW5kcy5tYXhZID0geTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCb3VuZHMudGVzdFBvaW50ID0gdGVzdFBvaW50O1xufSkoQm91bmRzIHx8IChCb3VuZHMgPSB7fSkpO1xuIiwiZXhwb3J0IHZhciBDb2xvclRyYW5zZm9ybTtcbihmdW5jdGlvbiAoQ29sb3JUcmFuc2Zvcm0pIHtcbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFscGhhTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIHJlZE11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBncmVlbk11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBibHVlTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgIGFscGhhT2Zmc2V0OiAwLFxuICAgICAgICAgICAgcmVkT2Zmc2V0OiAwLFxuICAgICAgICAgICAgZ3JlZW5PZmZzZXQ6IDAsXG4gICAgICAgICAgICBibHVlT2Zmc2V0OiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uIGNvbmNhdChjdDEsIGN0MCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxwaGFNdWx0aXBsaWVyOiBjdDEuYWxwaGFNdWx0aXBsaWVyICogY3QwLmFscGhhTXVsdGlwbGllcixcbiAgICAgICAgICAgIHJlZE11bHRpcGxpZXI6IGN0MS5yZWRNdWx0aXBsaWVyICogY3QwLnJlZE11bHRpcGxpZXIsXG4gICAgICAgICAgICBncmVlbk11bHRpcGxpZXI6IGN0MS5ncmVlbk11bHRpcGxpZXIgKiBjdDAuZ3JlZW5NdWx0aXBsaWVyLFxuICAgICAgICAgICAgYmx1ZU11bHRpcGxpZXI6IGN0MS5ibHVlTXVsdGlwbGllciAqIGN0MC5ibHVlTXVsdGlwbGllcixcbiAgICAgICAgICAgIGFscGhhT2Zmc2V0OiBjdDEuYWxwaGFNdWx0aXBsaWVyICogY3QwLmFscGhhT2Zmc2V0ICsgY3QwLmFscGhhT2Zmc2V0LFxuICAgICAgICAgICAgcmVkT2Zmc2V0OiBjdDEucmVkTXVsdGlwbGllciAqIGN0MC5yZWRPZmZzZXQgKyBjdDAucmVkT2Zmc2V0LFxuICAgICAgICAgICAgZ3JlZW5PZmZzZXQ6IGN0MS5ncmVlbk11bHRpcGxpZXIgKiBjdDAuZ3JlZW5PZmZzZXQgKyBjdDAuZ3JlZW5PZmZzZXQsXG4gICAgICAgICAgICBibHVlT2Zmc2V0OiBjdDEuYmx1ZU11bHRpcGxpZXIgKiBjdDAuYmx1ZU9mZnNldCArIGN0MC5ibHVlT2Zmc2V0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5jb25jYXQgPSBjb25jYXQ7XG4gICAgZnVuY3Rpb24gaXNEZWZhdWx0KGN0KSB7XG4gICAgICAgIHJldHVybiBjdC5yZWRNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5ncmVlbk11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LmJsdWVNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICAgICAmJiBjdC5hbHBoYU11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgICAgICYmIGN0LnJlZE9mZnNldCA9PT0gMFxuICAgICAgICAgICAgJiYgY3QuZ3JlZW5PZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmJsdWVPZmZzZXQgPT09IDBcbiAgICAgICAgICAgICYmIGN0LmFscGhhT2Zmc2V0ID09PSAwO1xuICAgIH1cbiAgICBDb2xvclRyYW5zZm9ybS5pc0RlZmF1bHQgPSBpc0RlZmF1bHQ7XG59KShDb2xvclRyYW5zZm9ybSB8fCAoQ29sb3JUcmFuc2Zvcm0gPSB7fSkpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9jb2xvci10cmFuc2Zvcm0nO1xuZXhwb3J0ICogZnJvbSAnLi9ib3VuZHMnO1xuZXhwb3J0ICogZnJvbSAnLi9tYXRyaXgnO1xuZXhwb3J0ICogZnJvbSAnLi9wb2ludCc7XG5leHBvcnQgKiBmcm9tICcuL3JlY3RhbmdsZSc7XG4iLCJleHBvcnQgdmFyIE1hdHJpeDtcbihmdW5jdGlvbiAoTWF0cml4KSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiAxLFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGM6IDAsXG4gICAgICAgICAgICBkOiAxLFxuICAgICAgICAgICAgdHg6IDAsXG4gICAgICAgICAgICB0eTogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTWF0cml4LmVtcHR5ID0gZW1wdHk7XG4gICAgZnVuY3Rpb24gY29uY2F0KG1hdHJpeDAsIG1hdHJpeDEpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGE6IG1hdHJpeDEuYSAqIG1hdHJpeDAuYSArIG1hdHJpeDEuYiAqIG1hdHJpeDAuYyxcbiAgICAgICAgICAgIGI6IG1hdHJpeDEuYSAqIG1hdHJpeDAuYiArIG1hdHJpeDEuYiAqIG1hdHJpeDAuZCxcbiAgICAgICAgICAgIGM6IG1hdHJpeDEuYyAqIG1hdHJpeDAuYSArIG1hdHJpeDEuZCAqIG1hdHJpeDAuYyxcbiAgICAgICAgICAgIGQ6IG1hdHJpeDEuYyAqIG1hdHJpeDAuYiArIG1hdHJpeDEuZCAqIG1hdHJpeDAuZCxcbiAgICAgICAgICAgIHR4OiBtYXRyaXgxLnR4ICogbWF0cml4MC5hICsgbWF0cml4MS50eSAqIG1hdHJpeDAuYyArIG1hdHJpeDAudHgsXG4gICAgICAgICAgICB0eTogbWF0cml4MS50eCAqIG1hdHJpeDAuYiArIG1hdHJpeDEudHkgKiBtYXRyaXgwLmQgKyBtYXRyaXgwLnR5LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBNYXRyaXguY29uY2F0ID0gY29uY2F0O1xuICAgIGZ1bmN0aW9uIGdldERldGVybWluYW50KG1hdHJpeCkge1xuICAgICAgICByZXR1cm4gbWF0cml4LmEgKiBtYXRyaXguZCAtIG1hdHJpeC5iICogbWF0cml4LmM7XG4gICAgfVxuICAgIE1hdHJpeC5nZXREZXRlcm1pbmFudCA9IGdldERldGVybWluYW50O1xuICAgIGZ1bmN0aW9uIGludmVydChtYXRyaXgpIHtcbiAgICAgICAgbGV0IGRldGVybWluYW50ID0gZ2V0RGV0ZXJtaW5hbnQobWF0cml4KTtcbiAgICAgICAgaWYgKGRldGVybWluYW50ID09PSAwKSB7XG4gICAgICAgICAgICBtYXRyaXguYSA9IDA7XG4gICAgICAgICAgICBtYXRyaXguYiA9IDA7XG4gICAgICAgICAgICBtYXRyaXguYyA9IDA7XG4gICAgICAgICAgICBtYXRyaXguZCA9IDA7XG4gICAgICAgICAgICBtYXRyaXgudHggPSAtbWF0cml4LnR4O1xuICAgICAgICAgICAgbWF0cml4LnR5ID0gLW1hdHJpeC50eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRldGVybWluYW50ID0gMS4wIC8gZGV0ZXJtaW5hbnQ7XG4gICAgICAgICAgICBjb25zdCBkID0gbWF0cml4LmQgKiBkZXRlcm1pbmFudDtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBtYXRyaXguYSAqIGRldGVybWluYW50O1xuICAgICAgICAgICAgbWF0cml4LmEgPSBkO1xuICAgICAgICAgICAgbWF0cml4LmIgKj0gLWRldGVybWluYW50O1xuICAgICAgICAgICAgbWF0cml4LmMgKj0gLWRldGVybWluYW50O1xuICAgICAgICAgICAgbWF0cml4LmQgPSBhO1xuICAgICAgICAgICAgY29uc3QgdHggPSAtbWF0cml4LmEgKiBtYXRyaXgudHggLSBtYXRyaXguYyAqIG1hdHJpeC50eTtcbiAgICAgICAgICAgIGNvbnN0IHR5ID0gLW1hdHJpeC5iICogbWF0cml4LnR4IC0gbWF0cml4LmQgKiBtYXRyaXgudHk7XG4gICAgICAgICAgICBtYXRyaXgudHggPSB0eDtcbiAgICAgICAgICAgIG1hdHJpeC50eSA9IHR5O1xuICAgICAgICB9XG4gICAgfVxuICAgIE1hdHJpeC5pbnZlcnQgPSBpbnZlcnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtUG9pbnQobWF0cml4LCBwb2ludCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvaW50O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogeCAqIG1hdHJpeC5hICsgeSAqIG1hdHJpeC5jICsgbWF0cml4LnR4LFxuICAgICAgICAgICAgeTogeCAqIG1hdHJpeC5iICsgeSAqIG1hdHJpeC5kICsgbWF0cml4LnR5LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBNYXRyaXgudHJhbnNmb3JtUG9pbnQgPSB0cmFuc2Zvcm1Qb2ludDtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1JbnZlcnNlUG9pbnQobWF0cml4LCBwb2ludCkge1xuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBnZXREZXRlcm1pbmFudChtYXRyaXgpO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogLW1hdHJpeC50eCxcbiAgICAgICAgICAgICAgICB5OiAtbWF0cml4LnR5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBkZXRlcm1pbmFudCA9IDEgLyBkZXRlcm1pbmFudDtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwb2ludDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IGRldGVybWluYW50ICogKG1hdHJpeC5jICogKG1hdHJpeC50eSAtIHkpICsgbWF0cml4LmQgKiAoeCAtIG1hdHJpeC50eCkpLFxuICAgICAgICAgICAgeTogZGV0ZXJtaW5hbnQgKiAobWF0cml4LmEgKiAoeSAtIG1hdHJpeC50eSkgKyBtYXRyaXguYiAqIChtYXRyaXgudHggLSB4KSksXG4gICAgICAgIH07XG4gICAgfVxuICAgIE1hdHJpeC50cmFuc2Zvcm1JbnZlcnNlUG9pbnQgPSB0cmFuc2Zvcm1JbnZlcnNlUG9pbnQ7XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtQm91bmRzKG1hdHJpeCwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgYSwgYiwgYywgZCwgdHgsIHR5LCB9ID0gbWF0cml4O1xuICAgICAgICBjb25zdCByeCA9IGJvdW5kcy54O1xuICAgICAgICBjb25zdCByeSA9IGJvdW5kcy55O1xuICAgICAgICBjb25zdCByciA9IHJ4ICsgYm91bmRzLndpZHRoO1xuICAgICAgICBjb25zdCByYiA9IHJ5ICsgYm91bmRzLmhlaWdodDtcbiAgICAgICAgY29uc3QgbngxID0gcnggKiBhICsgcnkgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55MSA9IHJ4ICogYiArIHJ5ICogZCArIHR5O1xuICAgICAgICBjb25zdCBueDIgPSByciAqIGEgKyByeSAqIGMgKyB0eDtcbiAgICAgICAgY29uc3QgbnkyID0gcnIgKiBiICsgcnkgKiBkICsgdHk7XG4gICAgICAgIGNvbnN0IG54MyA9IHJyICogYSArIHJiICogYyArIHR4O1xuICAgICAgICBjb25zdCBueTMgPSByciAqIGIgKyByYiAqIGQgKyB0eTtcbiAgICAgICAgY29uc3Qgbng0ID0gcnggKiBhICsgcmIgKiBjICsgdHg7XG4gICAgICAgIGNvbnN0IG55NCA9IHJ4ICogYiArIHJiICogZCArIHR5O1xuICAgICAgICBsZXQgbGVmdCA9IG54MTtcbiAgICAgICAgaWYgKGxlZnQgPiBueDIpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQgPiBueDMpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQgPiBueDQpIHtcbiAgICAgICAgICAgIGxlZnQgPSBueDQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvcCA9IG55MTtcbiAgICAgICAgaWYgKHRvcCA+IG55Mikge1xuICAgICAgICAgICAgdG9wID0gbnkyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3AgPiBueTMpIHtcbiAgICAgICAgICAgIHRvcCA9IG55MztcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9wID4gbnk0KSB7XG4gICAgICAgICAgICB0b3AgPSBueTQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJpZ2h0ID0gbngxO1xuICAgICAgICBpZiAocmlnaHQgPCBueDIpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gbngyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCA8IG54Mykge1xuICAgICAgICAgICAgcmlnaHQgPSBueDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0IDwgbng0KSB7XG4gICAgICAgICAgICByaWdodCA9IG54NDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYm90dG9tID0gbnkxO1xuICAgICAgICBpZiAoYm90dG9tIDwgbnkyKSB7XG4gICAgICAgICAgICBib3R0b20gPSBueTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvdHRvbSA8IG55Mykge1xuICAgICAgICAgICAgYm90dG9tID0gbnkzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib3R0b20gPCBueTQpIHtcbiAgICAgICAgICAgIGJvdHRvbSA9IG55NDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogbGVmdCxcbiAgICAgICAgICAgIHk6IHRvcCxcbiAgICAgICAgICAgIHdpZHRoOiByaWdodCAtIGxlZnQsXG4gICAgICAgICAgICBoZWlnaHQ6IGJvdHRvbSAtIHRvcCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTWF0cml4LnRyYW5zZm9ybUJvdW5kcyA9IHRyYW5zZm9ybUJvdW5kcztcbn0pKE1hdHJpeCB8fCAoTWF0cml4ID0ge30pKTtcbiIsImV4cG9ydCB2YXIgUG9pbnQ7XG4oZnVuY3Rpb24gKFBvaW50KSB7XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG4gICAgUG9pbnQuZW1wdHkgPSBlbXB0eTtcbn0pKFBvaW50IHx8IChQb2ludCA9IHt9KSk7XG4iLCJleHBvcnQgdmFyIFJlY3RhbmdsZTtcbihmdW5jdGlvbiAoUmVjdGFuZ2xlKSB7XG4gICAgZnVuY3Rpb24gY29udGFpbnMocmVjdGFuZ2xlLCBwb2ludCkge1xuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlLnggPCBwb2ludC54XG4gICAgICAgICAgICAmJiByZWN0YW5nbGUueCArIHJlY3RhbmdsZS53aWR0aCA+IHBvaW50LnhcbiAgICAgICAgICAgICYmIHJlY3RhbmdsZS55IDwgcG9pbnQueVxuICAgICAgICAgICAgJiYgcmVjdGFuZ2xlLnkgKyByZWN0YW5nbGUuaGVpZ2h0ID4gcG9pbnQueTtcbiAgICB9XG4gICAgUmVjdGFuZ2xlLmNvbnRhaW5zID0gY29udGFpbnM7XG4gICAgZnVuY3Rpb24gaXNFbXB0eShyZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuICFyZWN0YW5nbGUud2lkdGggfHwgIXJlY3RhbmdsZS5oZWlnaHQ7XG4gICAgfVxuICAgIFJlY3RhbmdsZS5pc0VtcHR5ID0gaXNFbXB0eTtcbn0pKFJlY3RhbmdsZSB8fCAoUmVjdGFuZ2xlID0ge30pKTtcbiIsImltcG9ydCB7IFBpdm90LCBTb3VyY2UsIH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuaW1wb3J0IHsgTWF0cml4LCBSZWN0YW5nbGUgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgYXBwbHlJbWFnZUV4dGVuc2lvbiwgSU1BR0UgfSBmcm9tICcuL2ltYWdlJztcbmxldCB0ZW1wQ29udGV4dDtcbmZ1bmN0aW9uIGlzRGVmYXVsdENvbG9yVHJhbnNmb3JtKGN0KSB7XG4gICAgcmV0dXJuIGN0LnJlZE11bHRpcGxpZXIgPT09IDFcbiAgICAgICAgJiYgY3QuZ3JlZW5NdWx0aXBsaWVyID09PSAxXG4gICAgICAgICYmIGN0LmJsdWVNdWx0aXBsaWVyID09PSAxXG4gICAgICAgICYmIGN0LnJlZE9mZnNldCA9PT0gMFxuICAgICAgICAmJiBjdC5ncmVlbk9mZnNldCA9PT0gMFxuICAgICAgICAmJiBjdC5ibHVlT2Zmc2V0ID09PSAwXG4gICAgICAgICYmIGN0LmFscGhhT2Zmc2V0ID09PSAwO1xufVxuZnVuY3Rpb24gdXBkYXRlVGVtcENvbnRleHQoY29udGV4dCkge1xuICAgIGlmICghdGVtcENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRlbXBDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuICAgIGlmICh0ZW1wQ29udGV4dC5jYW52YXMud2lkdGggIT09IGNvbnRleHQuY2FudmFzLndpZHRoKSB7XG4gICAgICAgIHRlbXBDb250ZXh0LmNhbnZhcy53aWR0aCA9IGNvbnRleHQuY2FudmFzLndpZHRoO1xuICAgIH1cbiAgICBpZiAodGVtcENvbnRleHQuY2FudmFzLmhlaWdodCAhPT0gY29udGV4dC5jYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgIHRlbXBDb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBjb250ZXh0LmNhbnZhcy5oZWlnaHQ7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNhbnZhc0NvbG9yKGltYWdlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVzb3VyY2UgPSBTb3VyY2UuZ2V0UmVzb3VyY2UoaW1hZ2UsIGNvbnRleHQpO1xuICAgIGlmICghcmVzb3VyY2U/LmxvYWRlZCB8fCAhcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcbiAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IHN1cHBvcnQsIG1hdHJpeCB9ID0gY29udGV4dDtcbiAgICBjb25zdCB7IGNvbnRleHQyZCB9ID0gc3VwcG9ydDtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc291cmNlLmltYWdlO1xuICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgY29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG4gICAgaWYgKGlzRGVmYXVsdENvbG9yVHJhbnNmb3JtKGNvbG9yVHJhbnNmb3JtKSkge1xuICAgICAgICBjb250ZXh0MmQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IGNvbG9yVHJhbnNmb3JtLmFscGhhTXVsdGlwbGllcjtcbiAgICAgICAgY29udGV4dDJkLmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB1cGRhdGVUZW1wQ29udGV4dChjb250ZXh0MmQpO1xuICAgICAgICBjb25zdCBib3VuZHMgPSBNYXRyaXgudHJhbnNmb3JtQm91bmRzKG1hdHJpeCwge1xuICAgICAgICAgICAgeCwgeSwgd2lkdGgsIGhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChSZWN0YW5nbGUuaXNFbXB0eShib3VuZHMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGVtcENvbnRleHQuY2xlYXJSZWN0KGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgdGVtcENvbnRleHQuc2V0VHJhbnNmb3JtKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG4gICAgICAgIHRlbXBDb250ZXh0LmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG4gICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IHRlbXBDb250ZXh0LmdldEltYWdlRGF0YShib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgIGNvbnN0IHJtID0gY29sb3JUcmFuc2Zvcm0ucmVkTXVsdGlwbGllcjtcbiAgICAgICAgY29uc3QgZ20gPSBjb2xvclRyYW5zZm9ybS5ncmVlbk11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGJtID0gY29sb3JUcmFuc2Zvcm0uYmx1ZU11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IGFtID0gY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBybyA9IGNvbG9yVHJhbnNmb3JtLnJlZE9mZnNldDtcbiAgICAgICAgY29uc3QgZ28gPSBjb2xvclRyYW5zZm9ybS5ncmVlbk9mZnNldDtcbiAgICAgICAgY29uc3QgYm8gPSBjb2xvclRyYW5zZm9ybS5ibHVlT2Zmc2V0O1xuICAgICAgICBjb25zdCBhbyA9IGNvbG9yVHJhbnNmb3JtLmFscGhhT2Zmc2V0O1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGltYWdlRGF0YTtcbiAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IGRhdGE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOykge1xuICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIHJtICsgcm87XG4gICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpKytdICogZ20gKyBnbztcbiAgICAgICAgICAgIGRhdGFbaV0gPSBkYXRhW2krK10gKiBibSArIGJvO1xuICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbaSsrXSAqIGFtICsgYW87XG4gICAgICAgIH1cbiAgICAgICAgdGVtcENvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgYm91bmRzLngsIGJvdW5kcy55KTtcbiAgICAgICAgY29udGV4dDJkLnNldFRyYW5zZm9ybSgpO1xuICAgICAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKHRlbXBDb250ZXh0LmNhbnZhcywgYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQsIGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uKHN1cHBvcnQpIHtcbiAgICBhcHBseUltYWdlRXh0ZW5zaW9uKHN1cHBvcnQpO1xuICAgIHN1cHBvcnQucmVuZGVySGFuZGxlcnMuc2V0KElNQUdFLCByZW5kZXJDYW52YXNDb2xvcik7XG59XG4iLCJpbXBvcnQgeyBQaXZvdCwgU291cmNlLCB9IGZyb20gJ0BlMmQvZW5naW5lJztcbmltcG9ydCB7IGFwcGx5SW1hZ2VFeHRlbnNpb24sIElNQUdFIH0gZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ2FudmFzKGltYWdlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVzb3VyY2UgPSBTb3VyY2UuZ2V0UmVzb3VyY2UoaW1hZ2UsIGNvbnRleHQpO1xuICAgIGlmICghcmVzb3VyY2U/LmxvYWRlZCB8fCAhcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcbiAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IHN1cHBvcnQgfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgeyBjb250ZXh0MmQgfSA9IHN1cHBvcnQ7XG4gICAgY29uc3QgeyBtYXRyaXggfSA9IGNvbnRleHQ7XG4gICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG4gICAgY29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcbiAgICBjb25zdCB5ID0gUGl2b3QuZ2V0WShpbWFnZSwgaGVpZ2h0KTtcbiAgICBjb250ZXh0MmQuZ2xvYmFsQWxwaGEgPSBjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXI7XG4gICAgY29udGV4dDJkLmRyYXdJbWFnZShyZXNvdXJjZS5pbWFnZSwgeCwgeSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlDYW52YXNJbWFnZUV4dGVuc2lvbihzdXBwb3J0KSB7XG4gICAgYXBwbHlJbWFnZUV4dGVuc2lvbihzdXBwb3J0KTtcbiAgICBzdXBwb3J0LnJlbmRlckhhbmRsZXJzLnNldChJTUFHRSwgcmVuZGVyQ2FudmFzKTtcbn1cbiIsImltcG9ydCB7IFBpdm90LCB9IGZyb20gJ0BlMmQvZW5naW5lJztcbmltcG9ydCB7IFJlY3RhbmdsZSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyByZXNvbHZlSW1hZ2UgfSBmcm9tICdAZTJkL3Jlc291cmNlcyc7XG5leHBvcnQgY29uc3QgSU1BR0UgPSAnaW1hZ2UnO1xuZXhwb3J0IHZhciBJbWFnZTtcbihmdW5jdGlvbiAoSW1hZ2UpIHtcbiAgICBmdW5jdGlvbiBnZXRCb3VuZHMoaW1hZ2UsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgeyBzcmMgfSA9IGltYWdlO1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHN1cHBvcnQgfSA9IGNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gc3VwcG9ydC5yZXNvdXJjZXMuZ2V0KHNyYyk7XG4gICAgICAgIGlmICghcmVzb3VyY2U/LmxvYWRlZCB8fCAhcmVzb3VyY2U/LmltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcmVzb3VyY2UuaW1hZ2U7XG4gICAgICAgIGNvbnN0IHggPSBQaXZvdC5nZXRYKGltYWdlLCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGltYWdlLCBoZWlnaHQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeCwgeSwgd2lkdGgsIGhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgSW1hZ2UuZ2V0Qm91bmRzID0gZ2V0Qm91bmRzO1xufSkoSW1hZ2UgfHwgKEltYWdlID0ge30pKTtcbmV4cG9ydCBmdW5jdGlvbiBoaXRUZXN0KGltYWdlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBsb2NhbCB9ID0gY29udGV4dDtcbiAgICBjb25zdCBib3VuZHMgPSBJbWFnZS5nZXRCb3VuZHMoaW1hZ2UsIGNvbnRleHQpO1xuICAgIHJldHVybiAhIWJvdW5kcyAmJiBSZWN0YW5nbGUuY29udGFpbnMoYm91bmRzLCBsb2NhbCk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlJbWFnZUV4dGVuc2lvbihzdXBwb3J0KSB7XG4gICAgc3VwcG9ydC5oaXRUZXN0SGFuZGxlcnMuc2V0KElNQUdFLCBoaXRUZXN0KTtcbiAgICBzdXBwb3J0LnJlc291cmNlcy5yZXNvbHZlcnMuYWRkKHJlc29sdmVJbWFnZSk7XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2ltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vaW1hZ2UtY2FudmFzJztcbmV4cG9ydCAqIGZyb20gJy4vaW1hZ2UtY2FudmFzLWNvbG9yJztcbiIsImltcG9ydCB7IERlYnVnIH0gZnJvbSAnQGUyZC9lbmdpbmUnO1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVJbWFnZShhc3NldCkge1xuICAgIGNvbnN0IGV4dGVuc2lvbiA9IGFzc2V0LnNwbGl0KCcuJykucG9wKCk7XG4gICAgc3dpdGNoIChleHRlbnNpb24pIHtcbiAgICAgICAgY2FzZSAncG5nJzpcbiAgICAgICAgY2FzZSAnanBnJzpcbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0ge1xuICAgICAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IGFzc2V0O1xuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBpbWFnZSBsb2FkZWQ6ICR7YXNzZXR9YCk7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSAoZSkgPT4gRGVidWcud2FybmluZygnaW1hZ2UgbG9hZCBlcnJvcicsIGUpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IHsgQm91bmRzIH0gZnJvbSAnQGUyZC9nZW9tJztcbmltcG9ydCB7IFBhdGhDb21tYW5kIH0gZnJvbSAnLi9wYXRoJztcbmltcG9ydCB7IEdyYXBoaWNzU3RyaW5nIH0gZnJvbSAnLi9zdHJpbmcnO1xuZXhwb3J0IHZhciBSZWN0YW5nbGVEYXRhO1xuKGZ1bmN0aW9uIChSZWN0YW5nbGVEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHggPSAwLCB5ID0gMCwgd2lkdGggPSAwLCBoZWlnaHQgPSAwLCB9ID0gZGF0YTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4LCB5KTtcbiAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQpO1xuICAgIH1cbiAgICBSZWN0YW5nbGVEYXRhLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKFJlY3RhbmdsZURhdGEgfHwgKFJlY3RhbmdsZURhdGEgPSB7fSkpO1xuZXhwb3J0IHZhciBFbGxpcHNlRGF0YTtcbihmdW5jdGlvbiAoRWxsaXBzZURhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCByYWRpdXMsIHJhZGl1c1ggPSAwLCByYWRpdXNZID0gMCwgfSA9IGRhdGE7XG4gICAgICAgIGNvbnN0IHJ4ID0gcmFkaXVzID8/IHJhZGl1c1g7XG4gICAgICAgIGNvbnN0IHJ5ID0gcmFkaXVzID8/IHJhZGl1c1k7XG4gICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgeCAtIHJ4LCB5IC0gcnkpO1xuICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIHggKyByeCwgeSArIHJ5KTtcbiAgICB9XG4gICAgRWxsaXBzZURhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoRWxsaXBzZURhdGEgfHwgKEVsbGlwc2VEYXRhID0ge30pKTtcbmV4cG9ydCB2YXIgUGF0aERhdGE7XG4oZnVuY3Rpb24gKFBhdGhEYXRhKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKHBhdGhEYXRhLCBib3VuZHMpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBwYXRoRGF0YTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgR3JhcGhpY3NTdHJpbmcuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IGRhdGFbaV07XG4gICAgICAgICAgICAgICAgUGF0aENvbW1hbmQuY2FsY3VsYXRlQm91bmRzKGNvbW1hbmQsIGJvdW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgUGF0aERhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoUGF0aERhdGEgfHwgKFBhdGhEYXRhID0ge30pKTtcbmV4cG9ydCB2YXIgR3JhcGhpY3NEYXRhO1xuKGZ1bmN0aW9uIChHcmFwaGljc0RhdGEpIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gZGF0YTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdyZWN0YW5nbGUnOlxuICAgICAgICAgICAgICAgIFJlY3RhbmdsZURhdGEuY2FsY3VsYXRlQm91bmRzKGRhdGEsIGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbGxpcHNlJzpcbiAgICAgICAgICAgICAgICBFbGxpcHNlRGF0YS5jYWxjdWxhdGVCb3VuZHMoZGF0YSwgYm91bmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3BhdGgnOlxuICAgICAgICAgICAgICAgIFBhdGhEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBHcmFwaGljc0RhdGEuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoR3JhcGhpY3NEYXRhIHx8IChHcmFwaGljc0RhdGEgPSB7fSkpO1xuIiwiaW1wb3J0IHsgQm91bmRzIH0gZnJvbSAnQGUyZC9nZW9tJztcbmV4cG9ydCB2YXIgUGF0aENvbW1hbmQ7XG4oZnVuY3Rpb24gKFBhdGhDb21tYW5kKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKHBhdGgsIGJvdW5kcykge1xuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IHBhdGg7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbW92ZVRvJzpcbiAgICAgICAgICAgIGNhc2UgJ2xpbmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZVRvID0gcGF0aDtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIG1vdmVUby54ID8/IDAsIG1vdmVUby55ID8/IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3VydmVUbyc6XG4gICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHBhdGg7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdXJ2ZVRvLmN4ID8/IDAsIGN1cnZlVG8uY3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdXJ2ZVRvLnggPz8gMCwgY3VydmVUby55ID8/IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3ViaWNDdXJ2ZVRvJzpcbiAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSBwYXRoO1xuICAgICAgICAgICAgICAgIEJvdW5kcy50ZXN0KGJvdW5kcywgY3ViaWNDdXJ2ZVRvLmN4ID8/IDAsIGN1YmljQ3VydmVUby5jeSA/PyAwKTtcbiAgICAgICAgICAgICAgICBCb3VuZHMudGVzdChib3VuZHMsIGN1YmljQ3VydmVUby5zeCA/PyAwLCBjdWJpY0N1cnZlVG8uc3kgPz8gMCk7XG4gICAgICAgICAgICAgICAgQm91bmRzLnRlc3QoYm91bmRzLCBjdWJpY0N1cnZlVG8ueCA/PyAwLCBjdWJpY0N1cnZlVG8ueSA/PyAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUGF0aENvbW1hbmQuY2FsY3VsYXRlQm91bmRzID0gY2FsY3VsYXRlQm91bmRzO1xufSkoUGF0aENvbW1hbmQgfHwgKFBhdGhDb21tYW5kID0ge30pKTtcbiIsImltcG9ydCB7IFBhdGhDb21tYW5kLCB9IGZyb20gJy4vcGF0aCc7XG5jb25zdCBURVNUX0NPTU1BTkQgPSAvW01tTGxIaFZ2Q2NTc1FxVHRBYVp6XS87XG5jb25zdCBURVNUX1NQQUNFID0gL1tcXHMsXS87XG5jb25zdCBURVNUX05VTUJFUiA9IC9bLSsuXFxkXS87XG5leHBvcnQgY2xhc3MgR3JhcGhpY3NTdHJpbmdTdHJlYW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBhdGggPSAnJztcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuY29tbWFuZCA9IG51bGw7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgfVxuICAgIHNldFBhdGgocGF0aCkge1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgICB9XG4gICAgaGFzRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24gPCB0aGlzLnBhdGgubGVuZ3RoO1xuICAgIH1cbiAgICBnZXRDb21tYW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kO1xuICAgIH1cbiAgICBnZXRTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaXplO1xuICAgIH1cbiAgICBnZXRCdWZmZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlcjtcbiAgICB9XG4gICAgcmVhZE5leHQoKSB7XG4gICAgICAgIHRoaXMucmVhZENvbW1hbmQoKTtcbiAgICAgICAgdGhpcy5yZWFkTnVtYmVycygpO1xuICAgIH1cbiAgICByZWFkQ29tbWFuZCgpIHtcbiAgICAgICAgdGhpcy5jb21tYW5kID0gbnVsbDtcbiAgICAgICAgd2hpbGUgKHRoaXMucG9zaXRpb24gPCB0aGlzLnBhdGgubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBjb21tYW5kID0gdGhpcy5wYXRoW3RoaXMucG9zaXRpb25dO1xuICAgICAgICAgICAgaWYgKFRFU1RfQ09NTUFORC50ZXN0KGNvbW1hbmQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kID0gY29tbWFuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWFkTnVtYmVycygpIHtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICAgICAgbGV0IG51bWJlciA9ICcnO1xuICAgICAgICB3aGlsZSAodGhpcy5wb3NpdGlvbiA8IHRoaXMucGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSB0aGlzLnBhdGhbdGhpcy5wb3NpdGlvbl07XG4gICAgICAgICAgICBpZiAoVEVTVF9OVU1CRVIudGVzdChjaGFyKSkge1xuICAgICAgICAgICAgICAgIG51bWJlciArPSBjaGFyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoVEVTVF9TUEFDRS50ZXN0KGNoYXIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWZmZXJbdGhpcy5zaXplKytdID0gcGFyc2VGbG9hdChudW1iZXIpO1xuICAgICAgICAgICAgICAgIG51bWJlciA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoVEVTVF9DT01NQU5ELnRlc3QoY2hhcikpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24rKztcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlclt0aGlzLnNpemUrK10gPSBwYXJzZUZsb2F0KG51bWJlcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR3JhcGhpY3NTdHJpbmdSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0cmVhbSA9IG5ldyBHcmFwaGljc1N0cmluZ1N0cmVhbSgpO1xuICAgICAgICB0aGlzLmNvbW1hbmQgPSB7IHR5cGU6ICdtb3ZlVG8nIH07XG4gICAgICAgIHRoaXMuY29tbWFuZEV4aXN0cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0WSA9IDA7XG4gICAgfVxuICAgIHNldFBhdGgocGF0aCkge1xuICAgICAgICB0aGlzLnN0cmVhbS5zZXRQYXRoKHBhdGgpO1xuICAgICAgICB0aGlzLmxhc3RYID0gMDtcbiAgICAgICAgdGhpcy5sYXN0WSA9IDA7XG4gICAgICAgIHRoaXMuY29tbWFuZEV4aXN0cyA9IGZhbHNlO1xuICAgIH1cbiAgICBoYXNEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJlYW0uaGFzRGF0YSgpO1xuICAgIH1cbiAgICBnZXRDb21tYW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kRXhpc3RzID8gdGhpcy5jb21tYW5kIDogbnVsbDtcbiAgICB9XG4gICAgcmVhZE5leHQoKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtLnJlYWROZXh0KCk7XG4gICAgICAgIHRoaXMucGFyc2UoKTtcbiAgICB9XG4gICAgcGFyc2UoKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSB0aGlzLnN0cmVhbS5nZXRDb21tYW5kKCk7XG4gICAgICAgIHRoaXMuY29tbWFuZEV4aXN0cyA9ICEhY29tbWFuZDtcbiAgICAgICAgaWYgKCF0aGlzLmNvbW1hbmRFeGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidWZmZXIgPSB0aGlzLnN0cmVhbS5nZXRCdWZmZXIoKTtcbiAgICAgICAgY29uc3QgW3gwLCB5MCwgeDEsIHkxLCB4MiwgeTIsXSA9IGJ1ZmZlcjtcbiAgICAgICAgbGV0IGN4ID0gMDtcbiAgICAgICAgbGV0IGN5ID0gMDtcbiAgICAgICAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ21vdmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnggPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvLnkgPSB5MDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IG1vdmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbW92ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdtb3ZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVUby54ID0geDAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG8ueSA9IHkwICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IG1vdmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gbW92ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdsaW5lVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby54ID0geDA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0geTA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBsaW5lVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHgwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnkgPSB5MCArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBsaW5lVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHgwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBsaW5lVG8ueDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB4MCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0gdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGxpbmVUby54O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1YnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnbGluZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueCA9IHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUby55ID0geDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBsaW5lVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd2JzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgbGluZVRvLnggPSB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBsaW5lVG8ueSA9IHgwICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGxpbmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0geTA7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeCA9IHgxO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uc3kgPSB5MTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnggPSB4MjtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnkgPSB5MjtcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBjdWJpY0N1cnZlVG8ueCAtIChjdWJpY0N1cnZlVG8uc3ggLSBjdWJpY0N1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0gY3ViaWNDdXJ2ZVRvLnkgLSAoY3ViaWNDdXJ2ZVRvLnN5IC0gY3ViaWNDdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3ViaWNDdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdWJpY0N1cnZlVG8ueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC50eXBlID0gJ2N1YmljQ3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1YmljQ3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN4ID0geDAgKyB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSB5MCArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeCA9IHgxICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0geTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IHgyICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnkgPSB5MiArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdWJpY0N1cnZlVG8nO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJpY0N1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5jeCA9IGN4O1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3kgPSBjeTtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN4ID0geDA7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeSA9IHkwO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IHgxO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueSA9IHkxO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1YmljQ3VydmVUby54IC0gKGN1YmljQ3VydmVUby5zeCAtIGN1YmljQ3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdWJpY0N1cnZlVG8ueSAtIChjdWJpY0N1cnZlVG8uc3kgLSBjdWJpY0N1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdWJpY0N1cnZlVG8ueDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WSA9IGN1YmljQ3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3ViaWNDdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViaWNDdXJ2ZVRvID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8uY3ggPSBjeDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLmN5ID0gY3k7XG4gICAgICAgICAgICAgICAgICAgIGN1YmljQ3VydmVUby5zeCA9IHgwICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnN5ID0geTAgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjdWJpY0N1cnZlVG8ueCA9IHgxICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3ViaWNDdXJ2ZVRvLnkgPSB5MSArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN4ID0gY3ViaWNDdXJ2ZVRvLnggLSAoY3ViaWNDdXJ2ZVRvLnN4IC0gY3ViaWNDdXJ2ZVRvLngpO1xuICAgICAgICAgICAgICAgICAgICBjeSA9IGN1YmljQ3VydmVUby55IC0gKGN1YmljQ3VydmVUby5zeSAtIGN1YmljQ3VydmVUby55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0WCA9IGN1YmljQ3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3ViaWNDdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IHgwO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0geTA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IHgxO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSB5MTtcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBjdXJ2ZVRvLnggLSAoY3VydmVUby5jeCAtIGN1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0gY3VydmVUby55IC0gKGN1cnZlVG8uY3kgLSBjdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSB4MCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3kgPSB5MCArIHRoaXMubGFzdFk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IHgxICsgdGhpcy5sYXN0WDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby55ID0geTEgKyB0aGlzLmxhc3RZO1xuICAgICAgICAgICAgICAgICAgICBjeCA9IGN1cnZlVG8ueCAtIChjdXJ2ZVRvLmN4IC0gY3VydmVUby54KTtcbiAgICAgICAgICAgICAgICAgICAgY3kgPSBjdXJ2ZVRvLnkgLSAoY3VydmVUby5jeSAtIGN1cnZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFggPSBjdXJ2ZVRvLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFkgPSBjdXJ2ZVRvLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQudHlwZSA9ICdjdXJ2ZVRvJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VydmVUbyA9IHRoaXMuY29tbWFuZDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeCA9IGN4O1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLmN5ID0gY3k7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueCA9IHgwO1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnkgPSB5MDtcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBjdXJ2ZVRvLnggLSAoY3VydmVUby5jeCAtIGN1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0gY3VydmVUby55IC0gKGN1cnZlVG8uY3kgLSBjdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLnR5cGUgPSAnY3VydmVUbyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnZlVG8gPSB0aGlzLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8uY3ggPSBjeDtcbiAgICAgICAgICAgICAgICAgICAgY3VydmVUby5jeSA9IGN5O1xuICAgICAgICAgICAgICAgICAgICBjdXJ2ZVRvLnggPSB4MCArIHRoaXMubGFzdFg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnZlVG8ueSA9IHkwICsgdGhpcy5sYXN0WTtcbiAgICAgICAgICAgICAgICAgICAgY3ggPSBjdXJ2ZVRvLnggLSAoY3VydmVUby5jeCAtIGN1cnZlVG8ueCk7XG4gICAgICAgICAgICAgICAgICAgIGN5ID0gY3VydmVUby55IC0gKGN1cnZlVG8uY3kgLSBjdXJ2ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RYID0gY3VydmVUby54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RZID0gY3VydmVUby55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5jb25zdCByZWFkZXIgPSBuZXcgR3JhcGhpY3NTdHJpbmdSZWFkZXIoKTtcbmV4cG9ydCB2YXIgR3JhcGhpY3NTdHJpbmc7XG4oZnVuY3Rpb24gKEdyYXBoaWNzU3RyaW5nKSB7XG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKHBhdGgsIGJvdW5kcykge1xuICAgICAgICByZWFkZXIuc2V0UGF0aChwYXRoKTtcbiAgICAgICAgd2hpbGUgKHJlYWRlci5oYXNEYXRhKCkpIHtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkTmV4dCgpO1xuICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IHJlYWRlci5nZXRDb21tYW5kKCk7XG4gICAgICAgICAgICBpZiAoY29tbWFuZCkge1xuICAgICAgICAgICAgICAgIFBhdGhDb21tYW5kLmNhbGN1bGF0ZUJvdW5kcyhjb21tYW5kLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIEdyYXBoaWNzU3RyaW5nLmNhbGN1bGF0ZUJvdW5kcyA9IGNhbGN1bGF0ZUJvdW5kcztcbn0pKEdyYXBoaWNzU3RyaW5nIHx8IChHcmFwaGljc1N0cmluZyA9IHt9KSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaGljcyB7XG4gICAgY29uc3RydWN0b3Ioc2hhcGUpIHtcbiAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlO1xuICAgIH1cbiAgICBiZWdpbkZpbGwoY29sb3IgPSAwLCBhbHBoYSA9IDEpIHtcbiAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGJlZ2luQml0bWFwRmlsbChzcmMsIG1hdHJpeCwgcmVwZWF0ID0gdHJ1ZSwgc21vb3RoID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5maWxsID0ge1xuICAgICAgICAgICAgdHlwZTogJ2JpdG1hcCcsXG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBtYXRyaXgsXG4gICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICBzbW9vdGgsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGJlZ2luR3JhZGllbnRGaWxsKHR5cGUsIGNvbG9yLCBhbHBoYSwgcmF0aW8sIG1hdHJpeCwgc3ByZWFkID0gJ3JlcGVhdCcsIGludGVycG9sYXRpb24gPSAncmdiJywgZm9jYWxQb2ludFJhdGlvID0gMCkge1xuICAgICAgICB0aGlzLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBhbHBoYSxcbiAgICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgICAgbWF0cml4LFxuICAgICAgICAgICAgc3ByZWFkLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGlvbixcbiAgICAgICAgICAgIGZvY2FsUG9pbnRSYXRpbyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGluZVN0eWxlKHRoaWNrbmVzcyA9IDAsIGNvbG9yID0gMCwgYWxwaGEgPSAxLCBwaXhlbEhpbnRpbmcgPSBmYWxzZSwgc2NhbGVNb2RlID0gJ25vbmUnLCBjYXBzID0gJ3JvdW5kJywgam9pbnRzID0gJ3JvdW5kJywgbWl0ZXJMaW1pdCA9IDMpIHtcbiAgICAgICAgdGhpcy5zdHJva2UgPSB7XG4gICAgICAgICAgICB0aGlja25lc3MsXG4gICAgICAgICAgICBwaXhlbEhpbnRpbmcsXG4gICAgICAgICAgICBzY2FsZU1vZGUsXG4gICAgICAgICAgICBjYXBzLFxuICAgICAgICAgICAgam9pbnRzLFxuICAgICAgICAgICAgbWl0ZXJMaW1pdCxcbiAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc29saWQnLFxuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgIGFscGhhLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGluZUdyYWRpZW50U3R5bGUodHlwZSwgY29sb3IsIGFscGhhLCByYXRpbywgbWF0cml4LCBzcHJlYWQgPSAncmVwZWF0JywgaW50ZXJwb2xhdGlvbiA9ICdyZ2InLCBmb2NhbFBvaW50UmF0aW8gPSAwKSB7XG4gICAgICAgIGlmICghdGhpcy5zdHJva2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0cm9rZS5maWxsID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgYWxwaGEsXG4gICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHNwcmVhZCxcbiAgICAgICAgICAgIGludGVycG9sYXRpb24sXG4gICAgICAgICAgICBmb2NhbFBvaW50UmF0aW8sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxpbmVCaXRtYXBTdHlsZShzcmMsIG1hdHJpeCwgcmVwZWF0ID0gdHJ1ZSwgc21vb3RoID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0cm9rZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Ryb2tlLmZpbGwgPSB7XG4gICAgICAgICAgICB0eXBlOiAnYml0bWFwJyxcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIG1hdHJpeCxcbiAgICAgICAgICAgIHJlcGVhdCxcbiAgICAgICAgICAgIHNtb290aCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbW92ZVRvKHgsIHkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgIHBhdGgucHVzaCh7IHR5cGU6ICdtb3ZlVG8nLCB4LCB5IH0pO1xuICAgIH1cbiAgICBsaW5lVG8oeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhdGgucHVzaCh7IHR5cGU6ICdsaW5lVG8nLCB4LCB5IH0pO1xuICAgIH1cbiAgICBjdXJ2ZVRvKGN4LCBjeSwgeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3VydmVUbycsIGN4LCBjeSwgeCwgeSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGN1YmljQ3VydmVUbyhjeCwgY3ksIHN4LCBzeSwgeCwgeSkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3VydmVUbycsIGN4LCBjeSwgc3gsIHN5LCB4LCB5LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZHJhd1JvdW5kUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBlbGxpcHNlV2lkdGggPSAwLCBlbGxpcHNlSGVpZ2h0ID0gMCkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5iZWdpblBhdGgoKTtcbiAgICAgICAgY29uc3QgdyA9IGVsbGlwc2VXaWR0aDtcbiAgICAgICAgY29uc3QgaCA9IGVsbGlwc2VIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGsgPSAwLjU1MjI4NDg7XG4gICAgICAgIGNvbnN0IG94ID0gKHcgLyAyKSAqIGs7XG4gICAgICAgIGNvbnN0IG95ID0gKGggLyAyKSAqIGs7XG4gICAgICAgIGNvbnN0IHhlID0geCArIHc7XG4gICAgICAgIGNvbnN0IHllID0geSArIGg7XG4gICAgICAgIGNvbnN0IHhtID0geCArIHcgLyAyO1xuICAgICAgICBjb25zdCB5bSA9IHkgKyBoIC8gMjtcbiAgICAgICAgY29uc3QgZHggPSB3aWR0aCAtIHc7XG4gICAgICAgIGNvbnN0IGR5ID0gaGVpZ2h0IC0gaDtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdtb3ZlVG8nLFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHk6IHltLFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHgsXG4gICAgICAgICAgICBjeTogeW0gLSBveSxcbiAgICAgICAgICAgIHN4OiB4bSAtIG94LFxuICAgICAgICAgICAgc3k6IHksXG4gICAgICAgICAgICB4OiB4bSxcbiAgICAgICAgICAgIHksXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVUbycsXG4gICAgICAgICAgICB4OiB4bSArIGR4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4bSArIG94ICsgZHgsXG4gICAgICAgICAgICBjeTogeSxcbiAgICAgICAgICAgIHN4OiB4ZSArIGR4LFxuICAgICAgICAgICAgc3k6IHltIC0gb3ksXG4gICAgICAgICAgICB4OiB4ZSArIGR4LFxuICAgICAgICAgICAgeTogeW0sXG4gICAgICAgIH0pO1xuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmVUbycsXG4gICAgICAgICAgICB4OiB4ZSArIGR4LFxuICAgICAgICAgICAgeTogeW0gKyBkeSxcbiAgICAgICAgfSk7XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY3ViaWNDdXJ2ZVRvJyxcbiAgICAgICAgICAgIGN4OiB4ZSArIGR4LFxuICAgICAgICAgICAgY3k6IHltICsgb3kgKyBkeSxcbiAgICAgICAgICAgIHN4OiB4bSArIG94ICsgZHgsXG4gICAgICAgICAgICBzeTogeWUgKyBkeSxcbiAgICAgICAgICAgIHg6IHhtICsgZHgsXG4gICAgICAgICAgICB5OiB5ZSArIGR5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lVG8nLFxuICAgICAgICAgICAgeDogeG0sXG4gICAgICAgICAgICB5OiB5ZSArIGR5LFxuICAgICAgICB9KTtcbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjdWJpY0N1cnZlVG8nLFxuICAgICAgICAgICAgY3g6IHhtIC0gb3gsXG4gICAgICAgICAgICBjeTogeWUgKyBkeSxcbiAgICAgICAgICAgIHN4OiB4LFxuICAgICAgICAgICAgc3k6IHltICsgb3kgKyBkeSxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5OiB5bSArIGR5LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZHJhd1JlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEudHlwZSA9ICdyZWN0YW5nbGUnO1xuICAgICAgICBkYXRhLnggPSB4O1xuICAgICAgICBkYXRhLnkgPSB5O1xuICAgICAgICBkYXRhLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGRhdGEuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBkcmF3Q2lyY2xlKHgsIHksIHJhZGl1cykge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEudHlwZSA9ICdlbGxpcHNlJztcbiAgICAgICAgZGF0YS54ID0geDtcbiAgICAgICAgZGF0YS55ID0geTtcbiAgICAgICAgZGF0YS5yYWRpdXMgPSByYWRpdXM7XG4gICAgfVxuICAgIGRyYXdFbGxpcHNlKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgICAgICBkYXRhLnR5cGUgPSAnZWxsaXBzZSc7XG4gICAgICAgIGRhdGEucmFkaXVzWCA9IHdpZHRoIC8gMjtcbiAgICAgICAgZGF0YS5yYWRpdXNZID0gaGVpZ2h0IC8gMjtcbiAgICAgICAgZGF0YS54ID0geCAtIGRhdGEucmFkaXVzWDtcbiAgICAgICAgZGF0YS55ID0geSAtIGRhdGEucmFkaXVzWTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNoYXBlLmRhdGE7XG4gICAgfVxuICAgIGNyZWF0ZURhdGEoKSB7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUsIGZpbGwsIHN0cm9rZSB9ID0gdGhpcztcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2hhcGUuZGF0YSkpIHtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc2hhcGUuZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHNoYXBlLmRhdGEgPSBbc2hhcGUuZGF0YV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaGFwZS5kYXRhID0gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ3JhcGhpY3NEYXRhID0geyB0eXBlOiAncGF0aCcsIGZpbGwsIHN0cm9rZSB9O1xuICAgICAgICBzaGFwZS5kYXRhLnB1c2goZ3JhcGhpY3NEYXRhKTtcbiAgICAgICAgcmV0dXJuIGdyYXBoaWNzRGF0YTtcbiAgICB9XG4gICAgYmVnaW5QYXRoKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgICAgIGRhdGEuZGF0YSA9IFtdO1xuICAgICAgICByZXR1cm4gZGF0YS5kYXRhO1xuICAgIH1cbiAgICBnZXRQYXRoKCkge1xuICAgICAgICBjb25zdCB7IHNoYXBlIH0gPSB0aGlzO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2hhcGUuZGF0YSkgfHwgIXNoYXBlLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBzaGFwZS5kYXRhW3NoYXBlLmRhdGEubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLmRhdGEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhLmRhdGE7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9kYXRhL2RhdGEnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL3BhdGgnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhL3N0cmluZyc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEvc3R5bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9ncmFwaGljcyc7XG5leHBvcnQgKiBmcm9tICcuL3NoYXBlJztcbmV4cG9ydCAqIGZyb20gJy4vc2hhcGUtY2FudmFzJztcbiIsImltcG9ydCB7IGFwcGx5U2hhcGVFeHRlbnNpb24sIFNIQVBFIH0gZnJvbSAnLi9zaGFwZSc7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2hhcGUoc2hhcGUsIGNvbnRleHQpIHtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUNhbnZhc1NoYXBlRXh0ZW5zaW9uKHN1cHBvcnQpIHtcbiAgICBhcHBseVNoYXBlRXh0ZW5zaW9uKHN1cHBvcnQpO1xuICAgIHN1cHBvcnQucmVuZGVySGFuZGxlcnMuc2V0KFNIQVBFLCByZW5kZXJTaGFwZSk7XG59XG4iLCJpbXBvcnQgeyBQaXZvdCwgfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5pbXBvcnQgeyBCb3VuZHMsIFJlY3RhbmdsZSB9IGZyb20gJ0BlMmQvZ2VvbSc7XG5pbXBvcnQgeyByZXNvbHZlSW1hZ2UgfSBmcm9tICdAZTJkL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBHcmFwaGljc0RhdGEgfSBmcm9tICcuL2RhdGEvZGF0YSc7XG5pbXBvcnQgR3JhcGhpY3MgZnJvbSAnLi9ncmFwaGljcyc7XG5leHBvcnQgY29uc3QgU0hBUEUgPSAnc2hhcGUnO1xuZXhwb3J0IHZhciBTaGFwZTtcbihmdW5jdGlvbiAoU2hhcGUpIHtcbiAgICBmdW5jdGlvbiBnZXRHcmFwaGljcyhzaGFwZSkge1xuICAgICAgICByZXR1cm4gbmV3IEdyYXBoaWNzKHNoYXBlKTtcbiAgICB9XG4gICAgU2hhcGUuZ2V0R3JhcGhpY3MgPSBnZXRHcmFwaGljcztcbiAgICBmdW5jdGlvbiBnZXRCb3VuZHMoc2hhcGUpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBzaGFwZTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJvdW5kcyA9IEJvdW5kcy5lbXB0eSgpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhW2ldLCBib3VuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgR3JhcGhpY3NEYXRhLmNhbGN1bGF0ZUJvdW5kcyhkYXRhLCBib3VuZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQm91bmRzLmlzRW1wdHkoYm91bmRzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3aWR0aCA9IGJvdW5kcy5tYXhYIC0gYm91bmRzLm1pblg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGJvdW5kcy5tYXhZIC0gYm91bmRzLm1pblk7XG4gICAgICAgIGNvbnN0IHggPSBib3VuZHMubWluWCArIFBpdm90LmdldFgoc2hhcGUsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgeSA9IGJvdW5kcy5taW5ZICsgUGl2b3QuZ2V0WShzaGFwZSwgaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHgsIHksIHdpZHRoLCBoZWlnaHQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFNoYXBlLmdldEJvdW5kcyA9IGdldEJvdW5kcztcbn0pKFNoYXBlIHx8IChTaGFwZSA9IHt9KSk7XG5leHBvcnQgZnVuY3Rpb24gaGl0VGVzdChzaGFwZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbG9jYWwgfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYm91bmRzID0gU2hhcGUuZ2V0Qm91bmRzKHNoYXBlKTtcbiAgICByZXR1cm4gISFib3VuZHMgJiYgUmVjdGFuZ2xlLmNvbnRhaW5zKGJvdW5kcywgbG9jYWwpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5U2hhcGVFeHRlbnNpb24oc3VwcG9ydCkge1xuICAgIHN1cHBvcnQuaGl0VGVzdEhhbmRsZXJzLnNldChTSEFQRSwgaGl0VGVzdCk7XG4gICAgc3VwcG9ydC5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvbHZlSW1hZ2UpO1xufVxuIiwiY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5leHBvcnQgY29uc3QgRU0gPSAxMDI0O1xuY29uc3QgZm9udHMgPSBuZXcgTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGVGb250KGZvbnQsIHNpemUpIHtcbiAgICByZXR1cm4gYCR7c2l6ZX1weCAke2ZvbnR9YDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtZWFzdXJlVGV4dChmb250LCBzaXplLCB0ZXh0KSB7XG4gICAgY29udGV4dC5mb250ID0gZ2V0U3R5bGVGb250KGZvbnQsIHNpemUpO1xuICAgIHJldHVybiBjb250ZXh0Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENoYXJXaWR0aChmb250LCBjaGFyKSB7XG4gICAgbGV0IHdpZHRoID0gZm9udC53aWR0aHMuZ2V0KGNoYXIpO1xuICAgIGlmICghd2lkdGgpIHtcbiAgICAgICAgd2lkdGggPSBtZWFzdXJlVGV4dChmb250Lm5hbWUsIEVNLCBjaGFyKTtcbiAgICAgICAgZm9udC53aWR0aHMuc2V0KGNoYXIsIHdpZHRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHdpZHRoO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEtlcm5pbmcoZm9udCwgZmlyc3QsIHNlY29uZCkge1xuICAgIGNvbnN0IHBhaXIgPSBmaXJzdCArIHNlY29uZDtcbiAgICBsZXQga2VybmluZyA9IGZvbnQua2VybmluZ3MuZ2V0KHBhaXIpO1xuICAgIGlmICgha2VybmluZykge1xuICAgICAgICBjb25zdCB3aWR0aFNlY29uZCA9IGdldENoYXJXaWR0aChmb250LCBzZWNvbmQpO1xuICAgICAgICBjb25zdCB3aWR0aFRvdGFsID0gbWVhc3VyZVRleHQoZm9udC5uYW1lLCBFTSwgZmlyc3QgKyBzZWNvbmQpO1xuICAgICAgICBrZXJuaW5nID0gd2lkdGhUb3RhbCAtIHdpZHRoU2Vjb25kO1xuICAgICAgICBmb250Lmtlcm5pbmdzLnNldChwYWlyLCBrZXJuaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIGtlcm5pbmc7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWR2YW5jZShmb250LCBzaXplLCBmaXJzdCwgc2Vjb25kKSB7XG4gICAgY29uc3Qgc2NhbGUgPSBzaXplIC8gRU07XG4gICAgY29uc3Qgd2lkdGggPSBnZXRDaGFyV2lkdGgoZm9udCwgZmlyc3QpO1xuICAgIGlmICghc2Vjb25kKSB7XG4gICAgICAgIHJldHVybiB3aWR0aCAqIHNjYWxlO1xuICAgIH1cbiAgICBjb25zdCBrZXJuaW5nID0gZ2V0S2VybmluZyhmb250LCBmaXJzdCwgc2Vjb25kKTtcbiAgICByZXR1cm4ga2VybmluZyAqIHNjYWxlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvbnQobmFtZSkge1xuICAgIGxldCBmb250ID0gZm9udHMuZ2V0KG5hbWUpO1xuICAgIGlmICghZm9udCkge1xuICAgICAgICBmb250ID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHdpZHRoczogbmV3IE1hcCgpLFxuICAgICAgICAgICAga2VybmluZ3M6IG5ldyBNYXAoKSxcbiAgICAgICAgfTtcbiAgICAgICAgZm9udHMuc2V0KG5hbWUsIGZvbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZm9udDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaW5lV2lkdGgoZm9udCwgZm9ybWF0LCBsaW5lKSB7XG4gICAgbGV0IHdpZHRoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZmlyc3QgPSBsaW5lLmNoYXJBdChpKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kID0gbGluZS5jaGFyQXQoaSArIDEpO1xuICAgICAgICBjb25zdCBhZHZhbmNlID0gZ2V0QWR2YW5jZShmb250LCBmb3JtYXQuc2l6ZSwgZmlyc3QsIHNlY29uZCk7XG4gICAgICAgIHdpZHRoICs9IGFkdmFuY2U7XG4gICAgfVxuICAgIGlmIChmb3JtYXQubGV0dGVyU3BhY2luZyAmJiBsaW5lLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgd2lkdGggKz0gZm9ybWF0LmxldHRlclNwYWNpbmcgKiAobGluZS5sZW5ndGggLSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHdpZHRoO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRleHRXaWR0aChmb250LCBmb3JtYXQsIGxpbmVzKSB7XG4gICAgbGV0IHdpZHRoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gZ2V0TGluZVdpZHRoKGZvbnQsIGZvcm1hdCwgbGluZSk7XG4gICAgICAgIGlmICh3aWR0aCA8IGxpbmVXaWR0aCkge1xuICAgICAgICAgICAgd2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHdpZHRoO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRleHRIZWlnaHQoZm9ybWF0LCBsaW5lcykge1xuICAgIGxldCBoZWlnaHQgPSBmb3JtYXQuc2l6ZSAqIGxpbmVzLmxlbmd0aDtcbiAgICBpZiAoZm9ybWF0LmxlYWRpbmcgJiYgbGluZXMubGVuZ3RoID4gMSkge1xuICAgICAgICBoZWlnaHQgKz0gZm9ybWF0LmxlYWRpbmcgKiAobGluZXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIHJldHVybiBoZWlnaHQ7XG59XG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdFRleHRGb3JtYXQgPSB7XG4gICAgZm9udDogJ2FyaWFsJyxcbiAgICBzaXplOiAxNSxcbiAgICBjb2xvcjogMCxcbiAgICBhbHBoYTogMSxcbiAgICBib2xkOiBmYWxzZSxcbiAgICBpdGFsaWM6IGZhbHNlLFxuICAgIHVuZGVybGluZTogZmFsc2UsXG4gICAgbGV0dGVyU3BhY2luZzogMCxcbiAgICBsZWFkaW5nOiAwLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG59O1xuY29uc3QgZm9ybWF0ID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsaWRUZXh0Rm9ybWF0KHRleHRGb3JtYXQpIHtcbiAgICBmb3JtYXQuZm9udCA9IHRleHRGb3JtYXQ/LmZvbnQgPz8gZGVmYXVsdFRleHRGb3JtYXQuZm9udDtcbiAgICBmb3JtYXQuc2l6ZSA9IHRleHRGb3JtYXQ/LnNpemUgPz8gZGVmYXVsdFRleHRGb3JtYXQuc2l6ZTtcbiAgICBmb3JtYXQuY29sb3IgPSB0ZXh0Rm9ybWF0Py5jb2xvciA/PyBkZWZhdWx0VGV4dEZvcm1hdC5jb2xvcjtcbiAgICBmb3JtYXQuYWxwaGEgPSB0ZXh0Rm9ybWF0Py5hbHBoYSA/PyBkZWZhdWx0VGV4dEZvcm1hdC5hbHBoYTtcbiAgICBmb3JtYXQuYm9sZCA9IHRleHRGb3JtYXQ/LmJvbGQgPz8gZGVmYXVsdFRleHRGb3JtYXQuYm9sZDtcbiAgICBmb3JtYXQuaXRhbGljID0gdGV4dEZvcm1hdD8uaXRhbGljID8/IGRlZmF1bHRUZXh0Rm9ybWF0Lml0YWxpYztcbiAgICBmb3JtYXQudW5kZXJsaW5lID0gdGV4dEZvcm1hdD8udW5kZXJsaW5lID8/IGRlZmF1bHRUZXh0Rm9ybWF0LnVuZGVybGluZTtcbiAgICBmb3JtYXQubGV0dGVyU3BhY2luZyA9IHRleHRGb3JtYXQ/LmxldHRlclNwYWNpbmcgPz8gZGVmYXVsdFRleHRGb3JtYXQubGV0dGVyU3BhY2luZztcbiAgICBmb3JtYXQubGVhZGluZyA9IHRleHRGb3JtYXQ/LmxlYWRpbmcgPz8gZGVmYXVsdFRleHRGb3JtYXQubGVhZGluZztcbiAgICBmb3JtYXQuYWxpZ24gPSB0ZXh0Rm9ybWF0Py5hbGlnbiA/PyBkZWZhdWx0VGV4dEZvcm1hdC5hbGlnbjtcbiAgICBmb3JtYXQudmVydGljYWxBbGlnbiA9IHRleHRGb3JtYXQ/LnZlcnRpY2FsQWxpZ24gPz8gZGVmYXVsdFRleHRGb3JtYXQudmVydGljYWxBbGlnbjtcbiAgICByZXR1cm4gZm9ybWF0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsaW5nVmFsdWUoYWxpZ24pIHtcbiAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICAgIGNhc2UgJ2xlZnQnOiByZXR1cm4gMDtcbiAgICAgICAgY2FzZSAnY2VudGVyJzogcmV0dXJuIDAuNTtcbiAgICAgICAgY2FzZSAncmlnaHQnOiByZXR1cm4gMTtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFZlcnRpY2FsQWxpbmdWYWx1ZShhbGlnbikge1xuICAgIHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgICAgY2FzZSAndG9wJzogcmV0dXJuIDA7XG4gICAgICAgIGNhc2UgJ21pZGRsZSc6IHJldHVybiAwLjU7XG4gICAgICAgIGNhc2UgJ2JvdHRvbSc6IHJldHVybiAxO1xuICAgICAgICBkZWZhdWx0OiByZXR1cm4gMDtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3RleHQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtYXQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb250JztcbmV4cG9ydCAqIGZyb20gJy4vdGV4dC1jYW52YXMnO1xuIiwiaW1wb3J0IHsgUGl2b3QgfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5pbXBvcnQgeyBjcmVhdGVDb2xvclBhdHRlcm4gfSBmcm9tICdAZTJkL2NhbnZhcy1zdXBwb3J0JztcbmltcG9ydCB7IGdldEFkdmFuY2UsIGdldEZvbnQsIGdldExpbmVXaWR0aCwgZ2V0U3R5bGVGb250LCBnZXRUZXh0SGVpZ2h0LCBnZXRUZXh0V2lkdGgsIH0gZnJvbSAnLi9mb250JztcbmltcG9ydCB7IGFwcGx5VGV4dEV4dGVuc2lvbiwgVEVYVCB9IGZyb20gJy4vdGV4dCc7XG5pbXBvcnQgeyBnZXRBbGluZ1ZhbHVlLCBnZXRWZXJ0aWNhbEFsaW5nVmFsdWUsIGdldFZhbGlkVGV4dEZvcm1hdCB9IGZyb20gJy4vZm9ybWF0JztcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDYW52YXNUZXh0KGNvbXBvbmVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdGV4dCB9ID0gY29tcG9uZW50O1xuICAgIGlmICghdGV4dCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgbWF0cml4LCBjb2xvclRyYW5zZm9ybSB9ID0gY29udGV4dDtcbiAgICBpZiAoY29sb3JUcmFuc2Zvcm0uYWxwaGFNdWx0aXBsaWVyIDw9IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoJ1xcbicpO1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdGV4dEZvcm1hdCwgYm9yZGVyLCBiYWNrZ3JvdW5kLCB9ID0gY29tcG9uZW50O1xuICAgIGNvbnN0IGZvcm1hdCA9IGdldFZhbGlkVGV4dEZvcm1hdCh0ZXh0Rm9ybWF0KTtcbiAgICBjb25zdCBmb3JtYXRTaXplID0gZm9ybWF0LnNpemU7XG4gICAgY29uc3QgZm9ybWF0TGV0dGVyU3BhY2luZyA9IGZvcm1hdC5sZXR0ZXJTcGFjaW5nO1xuICAgIGNvbnN0IGZvcm1hdExlYWRpbmcgPSBmb3JtYXQubGVhZGluZztcbiAgICBjb25zdCBmb250ID0gZ2V0Rm9udChmb3JtYXQuZm9udCk7XG4gICAgY29uc3QgeyBzdXBwb3J0IH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IHsgY29udGV4dDJkIH0gPSBzdXBwb3J0O1xuICAgIGNvbnN0IHRleHRXaWR0aCA9IGdldFRleHRXaWR0aChmb250LCBmb3JtYXQsIGxpbmVzKTtcbiAgICBjb25zdCB0ZXh0SGVpZ2h0ID0gZ2V0VGV4dEhlaWdodChmb3JtYXQsIGxpbmVzKTtcbiAgICBjb25zdCByZWFsV2lkdGggPSB3aWR0aCA/PyB0ZXh0V2lkdGg7XG4gICAgY29uc3QgcmVhbEhlaWdodCA9IGhlaWdodCA/PyB0ZXh0SGVpZ2h0O1xuICAgIGNvbnN0IG9mZnNldFggPSBQaXZvdC5nZXRYKGNvbXBvbmVudCwgcmVhbFdpZHRoKTtcbiAgICBjb25zdCBvZmZzZXRZID0gUGl2b3QuZ2V0WShjb21wb25lbnQsIHJlYWxIZWlnaHQpO1xuICAgIGxldCB5ID0gMDtcbiAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGFsaWduVmVydGljYWxWYWx1ZSA9IGdldFZlcnRpY2FsQWxpbmdWYWx1ZShmb3JtYXQudmVydGljYWxBbGlnbik7XG4gICAgICAgIHkgPSAoaGVpZ2h0IC0gdGV4dEhlaWdodCkgKiBhbGlnblZlcnRpY2FsVmFsdWU7XG4gICAgICAgIGlmICh5IDwgMCkge1xuICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29udGV4dDJkLnNldFRyYW5zZm9ybShtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xuICAgIGNvbnRleHQyZC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgaWYgKGJhY2tncm91bmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnJztcbiAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9IGNyZWF0ZUNvbG9yUGF0dGVybihiYWNrZ3JvdW5kLCAxLCBjb2xvclRyYW5zZm9ybSk7XG4gICAgICAgIGNvbnRleHQyZC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29udGV4dDJkLnJlY3Qob2Zmc2V0WCwgb2Zmc2V0WSwgcmVhbFdpZHRoLCByZWFsSGVpZ2h0KTtcbiAgICAgICAgY29udGV4dDJkLmZpbGwoKTtcbiAgICB9XG4gICAgaWYgKGJvcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRleHQyZC5zdHJva2VTdHlsZSA9IGNyZWF0ZUNvbG9yUGF0dGVybihib3JkZXIsIDEsIGNvbG9yVHJhbnNmb3JtKTtcbiAgICAgICAgY29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuICAgICAgICBjb250ZXh0MmQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQyZC5yZWN0KG9mZnNldFgsIG9mZnNldFksIHJlYWxXaWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICAgIGNvbnRleHQyZC5zdHJva2UoKTtcbiAgICB9XG4gICAgY29udGV4dDJkLmZvbnQgPSBnZXRTdHlsZUZvbnQoZm9ybWF0LmZvbnQsIGZvcm1hdFNpemUpO1xuICAgIGNvbnRleHQyZC50ZXh0QmFzZWxpbmUgPSAnYWxwaGFiZXRpYyc7XG4gICAgY29udGV4dDJkLnN0cm9rZVN0eWxlID0gJyc7XG4gICAgY29udGV4dDJkLmZpbGxTdHlsZSA9IGNyZWF0ZUNvbG9yUGF0dGVybihmb3JtYXQuY29sb3IsIGZvcm1hdC5hbHBoYSwgY29sb3JUcmFuc2Zvcm0pO1xuICAgIHkgKz0gb2Zmc2V0WTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gZ2V0TGluZVdpZHRoKGZvbnQsIGZvcm1hdCwgbGluZSk7XG4gICAgICAgIGNvbnN0IGFsaWduVmFsdWUgPSBnZXRBbGluZ1ZhbHVlKGZvcm1hdC5hbGlnbik7XG4gICAgICAgIGxldCB4ID0gKHJlYWxXaWR0aCAtIGxpbmVXaWR0aCkgKiBhbGlnblZhbHVlO1xuICAgICAgICBpZiAoeCA8IDApIHtcbiAgICAgICAgICAgIHggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHggKz0gb2Zmc2V0WDtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaW5lLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdCA9IGxpbmUuY2hhckF0KGopO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kID0gbGluZS5jaGFyQXQoaiArIDEpO1xuICAgICAgICAgICAgY29uc3QgYWR2YW5jZSA9IGdldEFkdmFuY2UoZm9udCwgZm9ybWF0U2l6ZSwgZmlyc3QsIHNlY29uZCk7XG4gICAgICAgICAgICBjb250ZXh0MmQuZmlsbFRleHQoZmlyc3QsIHgsIHkgKyBmb3JtYXRTaXplKTtcbiAgICAgICAgICAgIHggKz0gYWR2YW5jZSArIGZvcm1hdExldHRlclNwYWNpbmc7XG4gICAgICAgIH1cbiAgICAgICAgeSArPSBmb3JtYXRTaXplICsgZm9ybWF0TGVhZGluZztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlDYW52YXNUZXh0RXh0ZW5zaW9uKHN1cHBvcnQpIHtcbiAgICBhcHBseVRleHRFeHRlbnNpb24oc3VwcG9ydCk7XG4gICAgc3VwcG9ydC5yZW5kZXJIYW5kbGVycy5zZXQoVEVYVCwgcmVuZGVyQ2FudmFzVGV4dCk7XG59XG4iLCJpbXBvcnQgeyBQaXZvdCwgfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICdAZTJkL2dlb20nO1xuaW1wb3J0IHsgZ2V0VmFsaWRUZXh0Rm9ybWF0IH0gZnJvbSAnLi9mb3JtYXQnO1xuaW1wb3J0IHsgZ2V0Rm9udCwgZ2V0VGV4dFdpZHRoLCBnZXRUZXh0SGVpZ2h0IH0gZnJvbSAnLi9mb250JztcbmV4cG9ydCBjb25zdCBURVhUID0gJ3RleHQnO1xuZXhwb3J0IHZhciBUZXh0O1xuKGZ1bmN0aW9uIChUZXh0KSB7XG4gICAgZnVuY3Rpb24gZ2V0Qm91bmRzKGNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCB7IHRleHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGxldCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgeyB0ZXh0Rm9ybWF0IH0gPSBjb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IGdldFZhbGlkVGV4dEZvcm1hdCh0ZXh0Rm9ybWF0KTtcbiAgICAgICAgaWYgKCF3aWR0aCkge1xuICAgICAgICAgICAgY29uc3QgZm9udCA9IGdldEZvbnQoZm9ybWF0LmZvbnQpO1xuICAgICAgICAgICAgd2lkdGggPSBnZXRUZXh0V2lkdGgoZm9udCwgZm9ybWF0LCBsaW5lcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoZWlnaHQpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGdldFRleHRIZWlnaHQoZm9ybWF0LCBsaW5lcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeCA9IFBpdm90LmdldFgoY29tcG9uZW50LCB3aWR0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBQaXZvdC5nZXRZKGNvbXBvbmVudCwgaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHgsIHksIHdpZHRoLCBoZWlnaHQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFRleHQuZ2V0Qm91bmRzID0gZ2V0Qm91bmRzO1xufSkoVGV4dCB8fCAoVGV4dCA9IHt9KSk7XG5leHBvcnQgZnVuY3Rpb24gaGl0VGVzdCh0ZXh0LCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBsb2NhbCB9ID0gY29udGV4dDtcbiAgICBjb25zdCBib3VuZHMgPSBUZXh0LmdldEJvdW5kcyh0ZXh0KTtcbiAgICByZXR1cm4gISFib3VuZHMgJiYgUmVjdGFuZ2xlLmNvbnRhaW5zKGJvdW5kcywgbG9jYWwpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5VGV4dEV4dGVuc2lvbihzdXBwb3J0KSB7XG4gICAgc3VwcG9ydC5oaXRUZXN0SGFuZGxlcnMuc2V0KFRFWFQsIGhpdFRlc3QpO1xufVxuIiwiZXhwb3J0IGNvbnN0IExJTkVBUiA9ICdsaW5lYXInO1xuZXhwb3J0IGNvbnN0IFFVQURSQVRJQyA9ICdxdWFkcmF0aWMnO1xuZXhwb3J0IGNvbnN0IFFVQURSQVRJQ19JTiA9ICdxdWFkcmF0aWNpbic7XG5leHBvcnQgY29uc3QgUVVBRFJBVElDX09VVCA9ICdxdWFkcmF0aWNvdXQnO1xuZXhwb3J0IGNvbnN0IENVQklDID0gJ2N1YmljJztcbmV4cG9ydCBjb25zdCBDVUJJQ19JTiA9ICdjdWJpY2luJztcbmV4cG9ydCBjb25zdCBDVUJJQ19PVVQgPSAnY3ViaWNvdXQnO1xuZXhwb3J0IGNvbnN0IFFVQVJUSUMgPSAncXVhcnRpYyc7XG5leHBvcnQgY29uc3QgUVVBUlRJQ19JTiA9ICdxdWFydGljaW4nO1xuZXhwb3J0IGNvbnN0IFFVQVJUSUNfT1VUID0gJ3F1YXJ0aWNvdXQnO1xuZXhwb3J0IGNvbnN0IFFVSU5USUMgPSAncXVpbnRpYyc7XG5leHBvcnQgY29uc3QgUVVJTlRJQ19JTiA9ICdxdWludGljaW4nO1xuZXhwb3J0IGNvbnN0IFFVSU5USUNfT1VUID0gJ3F1aW50aWNvdXQnO1xuZXhwb3J0IGNvbnN0IFNJTlVTT0lEQUwgPSAncXVpbnRpYyc7XG5leHBvcnQgY29uc3QgU0lOVVNPSURBTF9JTiA9ICdxdWludGljaW4nO1xuZXhwb3J0IGNvbnN0IFNJTlVTT0lEQUxfT1VUID0gJ3F1aW50aWNvdXQnO1xuZXhwb3J0IGNvbnN0IEVYUE9ORU5USUFMID0gJ2V4cG9uZW50aWFsJztcbmV4cG9ydCBjb25zdCBFWFBPTkVOVElBTF9JTiA9ICdleHBvbmVudGlhbGluJztcbmV4cG9ydCBjb25zdCBFWFBPTkVOVElBTF9PVVQgPSAnZXhwb25lbnRpYWxvdXQnO1xuZXhwb3J0IGNvbnN0IENJUkNVTEFSID0gJ2NpcmN1bGFyJztcbmV4cG9ydCBjb25zdCBDSVJDVUxBUl9JTiA9ICdjaXJjdWxhcmluJztcbmV4cG9ydCBjb25zdCBDSVJDVUxBUl9PVVQgPSAnY2lyY3VsYXJvdXQnO1xuZXhwb3J0IGNvbnN0IEVMQVNUSUMgPSAnZWxhc3RpYyc7XG5leHBvcnQgY29uc3QgRUxBU1RJQ19JTiA9ICdlbGFzdGljaW4nO1xuZXhwb3J0IGNvbnN0IEVMQVNUSUNfT1VUID0gJ2VsYXN0aWNvdXQnO1xuZXhwb3J0IGNvbnN0IEJBQ0sgPSAnYmFjayc7XG5leHBvcnQgY29uc3QgQkFDS19JTiA9ICdiYWNraW4nO1xuZXhwb3J0IGNvbnN0IEJBQ0tfT1VUID0gJ2JhY2tvdXQnO1xuZXhwb3J0IGNvbnN0IEJPVU5DRSA9ICdib3VuY2UnO1xuZXhwb3J0IGNvbnN0IEJPVU5DRV9JTiA9ICdib3VuY2Vpbic7XG5leHBvcnQgY29uc3QgQk9VTkNFX09VVCA9ICdib3VuY2VvdXQnO1xuZXhwb3J0IGNvbnN0IGVhc2luZyA9IHtcbiAgICBbTElORUFSXTogKHZhbHVlKSA9PiB2YWx1ZSxcbiAgICBbUVVBRFJBVElDXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICgodmFsdWUgKj0gMikgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTAuNSAqICgtLXZhbHVlICogKHZhbHVlIC0gMikgLSAxKTtcbiAgICB9LFxuICAgIFtRVUFEUkFUSUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVBRFJBVElDX09VVF06ICh2YWx1ZSkgPT4gKHZhbHVlICogKDIgLSB2YWx1ZSkpLFxuICAgIFtDVUJJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogdmFsdWUgKyAyKTtcbiAgICB9LFxuICAgIFtDVUJJQ19JTl06ICh2YWx1ZSkgPT4gKHZhbHVlICogdmFsdWUgKiB2YWx1ZSksXG4gICAgW0NVQklDX09VVF06ICh2YWx1ZSkgPT4gKC0tdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICsgMSksXG4gICAgW1FVQVJUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgLSAyKTtcbiAgICB9LFxuICAgIFtRVUFSVElDX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUpLFxuICAgIFtRVUFSVElDX09VVF06ICh2YWx1ZSkgPT4gKDEgLSAtLXZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVJTlRJQ106ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSArIDIpO1xuICAgIH0sXG4gICAgW1FVSU5USUNfSU5dOiAodmFsdWUpID0+ICh2YWx1ZSAqIHZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlKSxcbiAgICBbUVVJTlRJQ19PVVRdOiAodmFsdWUpID0+ICgtLXZhbHVlICogdmFsdWUgKiB2YWx1ZSAqIHZhbHVlICogdmFsdWUgKyAxKSxcbiAgICBbU0lOVVNPSURBTF06ICh2YWx1ZSkgPT4gKDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIHZhbHVlKSkpLFxuICAgIFtTSU5VU09JREFMX0lOXTogKHZhbHVlKSA9PiAoMSAtIE1hdGguY29zKCh2YWx1ZSAqIE1hdGguUEkpIC8gMikpLFxuICAgIFtTSU5VU09JREFMX09VVF06ICh2YWx1ZSkgPT4gKE1hdGguc2luKCh2YWx1ZSAqIE1hdGguUEkpIC8gMikpLFxuICAgIFtFWFBPTkVOVElBTF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiBNYXRoLnBvdygxMDI0LCB2YWx1ZSAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoLU1hdGgucG93KDIsIC0xMCAqICh2YWx1ZSAtIDEpKSArIDIpO1xuICAgIH0sXG4gICAgW0VYUE9ORU5USUFMX0lOXTogKHZhbHVlKSA9PiAodmFsdWUgPT09IDAgPyAwIDogTWF0aC5wb3coMTAyNCwgdmFsdWUgLSAxKSksXG4gICAgW0VYUE9ORU5USUFMX09VVF06ICh2YWx1ZSkgPT4gKHZhbHVlID09PSAxID8gMSA6IDEgLSBNYXRoLnBvdygyLCAtMTAgKiB2YWx1ZSkpLFxuICAgIFtDSVJDVUxBUl06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoKHZhbHVlICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSB2YWx1ZSAqIHZhbHVlKSAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAodmFsdWUgLT0gMikgKiB2YWx1ZSkgKyAxKTtcbiAgICB9LFxuICAgIFtDSVJDVUxBUl9JTl06ICh2YWx1ZSkgPT4gKDEgLSBNYXRoLnNxcnQoMSAtIHZhbHVlICogdmFsdWUpKSxcbiAgICBbQ0lSQ1VMQVJfT1VUXTogKHZhbHVlKSA9PiBNYXRoLnNxcnQoMSAtIC0tdmFsdWUgKiB2YWx1ZSksXG4gICAgW0VMQVNUSUNdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlICo9IDI7XG4gICAgICAgIGlmICh2YWx1ZSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAtMC41ICogTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwLjUgKiBNYXRoLnBvdygyLCAtMTAgKiAodmFsdWUgLSAxKSkgKiBNYXRoLnNpbigodmFsdWUgLSAxLjEpICogNSAqIE1hdGguUEkpICsgMTtcbiAgICB9LFxuICAgIFtFTEFTVElDX0lOXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLU1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpICogTWF0aC5zaW4oKHZhbHVlIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcbiAgICB9LFxuICAgIFtFTEFTVElDX09VVF06ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGgucG93KDIsIC0xMCAqIHZhbHVlKSAqIE1hdGguc2luKCh2YWx1ZSAtIDAuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuICAgIH0sXG4gICAgW0JBQ0tdOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTggKiAxLjUyNTtcbiAgICAgICAgaWYgKCh2YWx1ZSAqPSAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiAodmFsdWUgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgLSBzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgKyBzKSArIDIpO1xuICAgIH0sXG4gICAgW0JBQ0tfSU5dOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IDEuNzAxNTg7XG4gICAgICAgIHJldHVybiB2YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSAtIHMpO1xuICAgIH0sXG4gICAgW0JBQ0tfT1VUXTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gLS12YWx1ZSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSArIHMpICsgMTtcbiAgICB9LFxuICAgIFtCT1VOQ0VdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMC41KSB7XG4gICAgICAgICAgICByZXR1cm4gZWFzaW5nW0JPVU5DRV9JTl0odmFsdWUgKiAyKSAqIDAuNTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWFzaW5nW0JPVU5DRV9PVVRdKHZhbHVlICogMiAtIDEpICogMC41ICsgMC41O1xuICAgIH0sXG4gICAgW0JPVU5DRV9JTl06ICh2YWx1ZSkgPT4gKDEgLSBlYXNpbmdbQk9VTkNFX09VVF0oMSAtIHZhbHVlKSksXG4gICAgW0JPVU5DRV9PVVRdOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMSAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiB2YWx1ZSAqIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA8IDIgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKHZhbHVlIC09IDEuNSAvIDIuNzUpICogdmFsdWUgKyAwLjc1O1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA8IDIuNSAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAodmFsdWUgLT0gMi4yNSAvIDIuNzUpICogdmFsdWUgKyAwLjkzNzU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh2YWx1ZSAtPSAyLjYyNSAvIDIuNzUpICogdmFsdWUgKyAwLjk4NDM3NTtcbiAgICB9LFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdHdlZW4nO1xuZXhwb3J0ICogZnJvbSAnLi9lYXNpbmcnO1xuIiwiaW1wb3J0IHsgZWFzaW5nLCBMSU5FQVIgfSBmcm9tICcuL2Vhc2luZyc7XG5leHBvcnQgY29uc3QgVFdFRU4gPSAndHdlZW4nO1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVR3ZWVtKGNvbXBvbmVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdHdlZW4gfSA9IGNvbXBvbmVudDtcbiAgICBjb25zdCB7IHBoYXNlcyB9ID0gdHdlZW47XG4gICAgaWYgKCFwaGFzZXM/Lmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0FuaW1hdGlvbiBwYXJ0cyBub3QgZm91bmQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHdlZW4udGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHR3ZWVuLnRpbWUgPSAwO1xuICAgIH1cbiAgICB0d2Vlbi50aW1lICs9IGNvbnRleHQudGltZTtcbiAgICBjb25zdCB7IHRpbWUgfSA9IHR3ZWVuO1xuICAgIGxldCBvZmZzZXQgPSAwO1xuICAgIHBoYXNlcy5mb3JFYWNoKChwaGFzZSkgPT4ge1xuICAgICAgICBpZiAoIXBoYXNlLnRpbWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQW5pbWF0aW9uIHRpbWUgbm90IHNldCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwaGFzZS5vZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gcGhhc2Uub2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVhc2luZ05hbWUgPSBwaGFzZT8uZWFzaW5nPy50b0xvd2VyQ2FzZSgpID8/IExJTkVBUjtcbiAgICAgICAgY29uc3QgZWFzaW5nTWV0aG9kID0gZWFzaW5nW2Vhc2luZ05hbWVdO1xuICAgICAgICBpZiAoIWVhc2luZ01ldGhvZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGVhc2luZyB0eXBlOiAke2Vhc2luZ31gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZSA9ICh0aW1lIC0gb2Zmc2V0KSAvIHBoYXNlLnRpbWU7XG4gICAgICAgIG9mZnNldCArPSBwaGFzZS50aW1lO1xuICAgICAgICBpZiAodmFsdWUgPCAwIHx8IHZhbHVlID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVhc2luZ1ZhbHVlID0gZWFzaW5nTWV0aG9kKHZhbHVlKTtcbiAgICAgICAgaWYgKCFwaGFzZS50bykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbmltYXRpb24gXCJ0b1wiIHN0YXRlIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcGhhc2UuZnJvbSkge1xuICAgICAgICAgICAgcGhhc2UuZnJvbSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgdG8sIGZyb20gfSA9IHBoYXNlO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGNvbXBvbmVudDtcbiAgICAgICAgT2JqZWN0LmtleXModG8pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGZyb21ba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZnJvbVtrZXldID0gc3RhdGVba2V5XSA/PyAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZnJvbVZhbHVlID0gZnJvbVtrZXldO1xuICAgICAgICAgICAgY29uc3QgdG9WYWx1ZSA9IHRvW2tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZyb21WYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHRvVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVWYWx1ZSA9IGZyb21WYWx1ZSArIGVhc2luZ1ZhbHVlICogKHRvVmFsdWUgLSBmcm9tVmFsdWUpO1xuICAgICAgICAgICAgICAgIHN0YXRlW2tleV0gPSBzdGF0ZVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAodHdlZW4ubG9vcCAmJiB0d2Vlbi50aW1lID4gb2Zmc2V0KSB7XG4gICAgICAgIHR3ZWVuLnRpbWUgPSAwO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVR3ZWVuRXh0ZW5zaW9uKHN1cHBvcnQpIHtcbiAgICBzdXBwb3J0LnByb3BlcnR5SGFuZGxlcnMuc2V0KFRXRUVOLCB1cGRhdGVUd2VlbSk7XG59XG4iLCJpbXBvcnQgeyBBQklMSVRZX1dPTEYgfSBmcm9tICcuL2Fzc2V0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY3Vyc2l2ZSgpIHtcblx0Y29uc3QgY29udGFpbmVyID0ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdHg6IDMwLFxuXHRcdFx0eTogMzAsXG5cdFx0XHRzY2FsZVg6IDAuOSxcblx0XHRcdHNjYWxlWTogMC45LFxuXHRcdFx0cm90YXRpb246IDAuMixcblx0XHRcdGFscGhhOiAwLjksXG5cdFx0XHRjaGlsZHJlbjogW3tcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBBQklMSVRZX1dPTEYsXG5cdFx0XHRcdHNjYWxlOiAwLjMsXG5cdFx0XHR9XSxcblx0XHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0XHR0aGlzLnJvdGF0aW9uICs9IHRpbWUgKiAwLjA1O1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXG5cdGNvbnRhaW5lci5jaGlsZHJlbi5jaGlsZHJlbi5wdXNoKGNvbnRhaW5lciBhcyBuZXZlcik7XG5cblx0cmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsImNvbnN0IElNQUdFX0FTU0VUUyA9ICdhc3NldHMvJztcblxuZXhwb3J0IGNvbnN0IEFOSU1BTElTVCA9ICdpZDphbmltYWxpc3QnO1xuZXhwb3J0IGNvbnN0IEFSQ0hFUiA9ICdpZDphcmNoZXInO1xuXG5leHBvcnQgY29uc3QgQU5JTUFMSVNUX0lNQUdFID0gYCR7SU1BR0VfQVNTRVRTfUFuaW1hbGlzdEZveDFfaW1hZ2UucG5nYDtcbmV4cG9ydCBjb25zdCBBUkNIRVJfSU1BR0UgPSBgJHtJTUFHRV9BU1NFVFN9QXJjaGVyMl9odW50ZXJfaW1hZ2UucG5nYDtcblxuZXhwb3J0IGNvbnN0IEFCSUxJVFlfRk9YID0gYCR7SU1BR0VfQVNTRVRTfUFuaW1hbGlzdEFiaWxpdHlfRm94LnBuZ2A7XG5leHBvcnQgY29uc3QgQUJJTElUWV9XT0xGID0gYCR7SU1BR0VfQVNTRVRTfUFuaW1hbGlzdEFiaWxpdHlfV29sZi5wbmdgO1xuXG5leHBvcnQgY29uc3QgQkFDS0dST1VORCA9IGAke0lNQUdFX0FTU0VUU31qdW5nbGVfYmFja2dyb3VuZC5qcGdgO1xuXG5leHBvcnQgY29uc3QgVEVTVF9DQU5WQVMgPSAndGVzdC5jYW52YXMnO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHsgQ2FudmFzU3VwcG9ydCB9IGZyb20gJ0BlMmQvY2FudmFzLXN1cHBvcnQnO1xuaW1wb3J0IHsgUGl2b3QsIFJlbmRlckNvbnRleHQsIFN1cHBvcnQgfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5pbXBvcnQge1xuXHRhcHBseUltYWdlRXh0ZW5zaW9uLCBJTUFHRSwgSW1hZ2UsXG59IGZyb20gJ0BlMmQvaW1hZ2UnO1xuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZSB9IGZyb20gJ0BlMmQvcmVzb3VyY2VzJztcblxuZnVuY3Rpb24gcmVuZGVySW1hZ2UoaW1hZ2U6IEltYWdlLCBjb250ZXh0OiBSZW5kZXJDb250ZXh0KTogdm9pZCB7XG5cdGlmICghaW1hZ2Uuc3JjKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgeyBtYXRyaXgsIGNvbG9yVHJhbnNmb3JtIH0gPSBjb250ZXh0O1xuXG5cdGlmIChjb2xvclRyYW5zZm9ybS5hbHBoYU11bHRpcGxpZXIgPD0gMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHsgc3VwcG9ydCB9ID0gY29udGV4dDtcblxuXHRjb25zdCByZXNvdXJjZSA9IHN1cHBvcnQucmVzb3VyY2VzLmdldChpbWFnZS5zcmMpIGFzIEltYWdlUmVzb3VyY2UgfCBudWxsO1xuXG5cdGlmICghcmVzb3VyY2U/LmxvYWRlZCB8fCAhcmVzb3VyY2U/LmltYWdlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgeyBjb250ZXh0MmQgfSA9IHN1cHBvcnQgYXMgQ2FudmFzU3VwcG9ydDtcblxuXHRjb250ZXh0MmQuc2V0VHJhbnNmb3JtKFxuXHRcdG1hdHJpeC5hLFxuXHRcdG1hdHJpeC5iLFxuXHRcdG1hdHJpeC5jLFxuXHRcdG1hdHJpeC5kLFxuXHRcdG1hdHJpeC50eCxcblx0XHRtYXRyaXgudHksXG5cdCk7XG5cblx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNvdXJjZS5pbWFnZTtcblx0Y29uc3QgeCA9IFBpdm90LmdldFgoaW1hZ2UsIHdpZHRoKTtcblx0Y29uc3QgeSA9IFBpdm90LmdldFkoaW1hZ2UsIGhlaWdodCk7XG5cblx0Y29udGV4dDJkLmdsb2JhbEFscGhhID0gMTtcblx0Y29udGV4dDJkLmZpbGxTdHlsZSA9ICcnO1xuXHRjb250ZXh0MmQuc3Ryb2tlU3R5bGUgPSAnZ3JheSc7XG5cdGNvbnRleHQyZC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlDdXN0b21JbWFnZUV4dGVuc2lvbihzdXBwb3J0OiBTdXBwb3J0KSB7XG5cdGFwcGx5SW1hZ2VFeHRlbnNpb24oc3VwcG9ydCk7XG5cdHN1cHBvcnQucmVuZGVySGFuZGxlcnMuc2V0KElNQUdFLCByZW5kZXJJbWFnZSk7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJ0BlMmQvZW5naW5lJztcbmltcG9ydCB7IEltYWdlUmVzb3VyY2UsIHJlc29sdmVJbWFnZSB9IGZyb20gJ0BlMmQvcmVzb3VyY2VzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tUmVzb3VyY2VNYW5hZ2VyIHtcblx0cmVhZG9ubHkgYWxpYXNlcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cdHJlYWRvbmx5IHJlc291cmNlcyA9IG5ldyBNYXA8c3RyaW5nLCBJbWFnZVJlc291cmNlPigpO1xuXG5cdHJlc29sdmUgPSAoYXNzZXQ6IHN0cmluZyk6IEltYWdlUmVzb3VyY2UgfCBudWxsID0+IHtcblx0XHRpZiAoYXNzZXQuaW5kZXhPZignaWQ6JykgPT09IDApIHtcblx0XHRcdGNvbnN0IGlkID0gYXNzZXQuc2xpY2UoMyk7XG5cdFx0XHRsZXQgcmVzb3VyY2UgPSB0aGlzLnJlc291cmNlcy5nZXQoaWQpIGFzIEltYWdlUmVzb3VyY2U7XG5cdFx0XHRpZiAoIXJlc291cmNlKSB7XG5cdFx0XHRcdGNvbnN0IHVybCA9IHRoaXMuYWxpYXNlcy5nZXQoaWQpO1xuXHRcdFx0XHRpZiAodXJsKSB7XG5cdFx0XHRcdFx0cmVzb3VyY2UgPSByZXNvbHZlSW1hZ2UodXJsKSBhcyBJbWFnZVJlc291cmNlO1xuXHRcdFx0XHRcdHRoaXMucmVzb3VyY2VzLnNldChpZCwgcmVzb3VyY2UpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdERlYnVnLndhcm5pbmcoYFJlc291cmNlIHdpdGggaWQ6ICR7YXNzZXR9IG5vdCBmb3VuZGApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzb3VyY2U7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDYW52YXNTdXBwb3J0IH0gZnJvbSAnQGUyZC9jYW52YXMtc3VwcG9ydCc7XG5pbXBvcnQgeyBhcHBseUNhbnZhc1RleHRFeHRlbnNpb24gfSBmcm9tICdAZTJkL3RleHQnO1xuaW1wb3J0IHsgYXBwbHlDdXN0b21JbWFnZUV4dGVuc2lvbiB9IGZyb20gJy4vaW1hZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21TdXBwb3J0IGV4dGVuZHMgQ2FudmFzU3VwcG9ydCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0YXBwbHlDYW52YXNUZXh0RXh0ZW5zaW9uKHRoaXMpO1xuXHRcdGFwcGx5Q3VzdG9tSW1hZ2VFeHRlbnNpb24odGhpcyk7XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHRjb25zdCB7IGNvbnRleHQyZCB9ID0gdGhpcztcblx0XHRjb250ZXh0MmQuZmlsbFN0eWxlID0gJ2JsYWNrJztcblx0XHRjb250ZXh0MmQuc2V0VHJhbnNmb3JtKCk7XG5cdFx0Y29udGV4dDJkLmZpbGxSZWN0KDAsIDAsIGNvbnRleHQyZC5jYW52YXMud2lkdGgsIGNvbnRleHQyZC5jYW52YXMuaGVpZ2h0KTtcblx0XHRjb250ZXh0MmQuZmlsbFN0eWxlID0gJyc7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZwcygpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0dGV4dDogJ2ZwcycsXG5cdFx0ZnJhbWVzOiAwLFxuXHRcdHRpbWU6IDAsXG5cdFx0dGV4dEZvcm1hdDoge1xuXHRcdFx0c2l6ZTogMzAsXG5cdFx0XHRjb2xvcjogMHhmZmZmZmYsXG5cdFx0XHRhbGlnbjogJ2NlbnRlcicsXG5cdFx0fSxcblx0XHRvblVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMudGltZSArPSB0aW1lO1xuXHRcdFx0dGhpcy5mcmFtZXMrKztcblx0XHRcdGlmICh0aGlzLnRpbWUgPj0gMSkge1xuXHRcdFx0XHRjb25zdCBmcmFtZVRpbWUgPSBNYXRoLmNlaWwoMTAwMCAqIHRoaXMudGltZSAvIHRoaXMuZnJhbWVzKTtcblx0XHRcdFx0dGhpcy50ZXh0ID0gYCR7dGhpcy5mcmFtZXN9IGZwcyAke2ZyYW1lVGltZX0gbXNgO1xuXHRcdFx0XHR0aGlzLnRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLmZyYW1lcyA9IDA7XG5cdFx0XHR9XG5cdFx0fSxcblx0fTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCB7XG5cdEFCSUxJVFlfRk9YLCBBQklMSVRZX1dPTEYsIEFOSU1BTElTVCwgQVJDSEVSLCBCQUNLR1JPVU5ELFxufSBmcm9tICcuL2Fzc2V0cyc7XG5pbXBvcnQgYXJ0aWZhY3QgZnJvbSAnLi9hcnRpZmFjdCc7XG5pbXBvcnQgZnBzIGZyb20gJy4vZnBzJztcbmltcG9ydCB7IHVuaXQsIFVuaXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi91bml0JztcblxuaW50ZXJmYWNlIE1haW4ge1xuXHRzdGFydCgpOiB2b2lkO1xuXHRba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oKTogTWFpbiB7XG5cdGZ1bmN0aW9uIG9uVW5pdENsaWNrKGRhdGE6IFVuaXRQcm9wZXJ0aWVzKSB7XG5cdFx0ZGF0YS5oZWFsdGggPSBNYXRoLnJhbmRvbSgpO1xuXHRcdGNvbnNvbGUubG9nKCdvblVuaXRDbGljaycsIGRhdGEubmFtZSk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB7XG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHNyYzogQkFDS0dST1VORCxcblx0XHRcdFx0c2NhbGVYOiAxLFxuXHRcdFx0XHRzY2FsZVk6IDEsXG5cdFx0XHR9LFxuXHRcdFx0ZmlndXJlOiB7XG5cdFx0XHRcdHR5cGU6ICdzaGFwZScsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHR0eXBlOiAncmVjdCcsXG5cdFx0XHRcdFx0eDogMCxcblx0XHRcdFx0XHR5OiAwLFxuXHRcdFx0XHRcdHdpZHRoOiAxMDAsXG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAsXG5cdFx0XHRcdFx0ZmlsbDogMHhmZjAwZmYsXG5cdFx0XHRcdFx0c3Ryb2tlOiB7XG5cdFx0XHRcdFx0XHR0aGlja25lc3M6IDIsXG5cdFx0XHRcdFx0XHRmaWxsOiAweDAwZmYwMCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHNoYXBlczoge1xuXHRcdFx0XHR0eXBlOiAnc2hhcGUnLFxuXHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ2NpcmNsZScsXG5cdFx0XHRcdFx0XHR4OiAxMDAsXG5cdFx0XHRcdFx0XHR5OiAxMDAsXG5cdFx0XHRcdFx0XHRyYWRpdXM6IDUwLFxuXHRcdFx0XHRcdFx0ZmlsbDogeyB0eXBlOiAnc29saWQnLCBjb2xvcjogMHhmZmZmMDAsIGFscGhhOiAwLjUgfSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdwYXRoJyxcblx0XHRcdFx0XHRcdGRhdGE6ICdNIDEwIDEwIEggOTAgViA5MCBIIDEwIFonLFxuXHRcdFx0XHRcdFx0ZmlsbDogMHhmZjAwZmYsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAncGF0aCcsXG5cdFx0XHRcdFx0XHRkYXRhOiBbXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ21vdmVUbycsIHg6IDAsIHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0eyB0eXBlOiAnbGluZVRvJywgeDogMTAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDEwMCwgeTogMTAwIH0sXG5cdFx0XHRcdFx0XHRcdHsgdHlwZTogJ2xpbmVUbycsIHg6IDAsIHk6IDEwMCB9LFxuXHRcdFx0XHRcdFx0XHR7IHR5cGU6ICdsaW5lVG8nLCB4OiAwLCB5OiAwIH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0ZmlsbDogMHhmZjAwZmYsXG5cdFx0XHRcdFx0XHRzdHJva2U6IDB4MDAwMDAwLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0dW5pdHM6IHtcblx0XHRcdFx0dHlwZTogJ2NvbnRhaW5lcicsXG5cdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0dW5pdCh7XG5cdFx0XHRcdFx0XHRuYW1lOiAnQXJjaGVyJywgaGVhbHRoOiAxLCBpbWFnZTogQVJDSEVSLCBvbkNsaWNrOiBvblVuaXRDbGljayxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHR1bml0KHtcblx0XHRcdFx0XHRcdG5hbWU6ICdBbmltYWxpc3QnLCBoZWFsdGg6IDEsIGltYWdlOiBBTklNQUxJU1QsIG9uQ2xpY2s6IG9uVW5pdENsaWNrLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdGFydGlmYWN0OiB7XG5cdFx0XHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdFx0XHR4OiAzMDAsXG5cdFx0XHRcdHk6IDM1MCxcblx0XHRcdFx0Y2hpbGRyZW46IFthcnRpZmFjdCgpXSxcblx0XHRcdH0sXG5cdFx0XHRtYXA6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0eTogNDUwLFxuXHRcdFx0XHRzY2FsZVg6IDAuMixcblx0XHRcdFx0c2NhbGVZOiAwLjIsXG5cdFx0XHRcdGFscGhhOiAwLjUsXG5cdFx0XHRcdHNyYzogJ3Rlc3QuY2FudmFzJyxcblx0XHRcdFx0b25Qb2ludGVyT3ZlcigpIHtcblx0XHRcdFx0XHR0aGlzLmFscGhhID0gMTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b25Qb2ludGVyT3V0KCkge1xuXHRcdFx0XHRcdHRoaXMuYWxwaGEgPSAwLjU7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YWJpbGl0eUZveDoge1xuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRzcmM6IEFCSUxJVFlfRk9YLFxuXHRcdFx0XHR4OiA0NTAsXG5cdFx0XHRcdHk6IDUwMCxcblx0XHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdFx0dGludDoge1xuXHRcdFx0XHRcdGNvbG9yOiAweDAwZmYwMCxcblx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0fSBhcyBhbnksXG5cdFx0XHRcdG9uVXBkYXRlKHRpbWU6IG51bWJlcikge1xuXHRcdFx0XHRcdGlmICh0aGlzLnRpbnQpIHtcblx0XHRcdFx0XHRcdHRoaXMudGludC52YWx1ZSArPSB0aW1lO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMudGludC52YWx1ZSA+PSAxKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudGludC52YWx1ZSA9IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duKGU6IGFueSkge1xuXHRcdFx0XHRcdGlmICh0aGlzLnRpbnQpIHtcblx0XHRcdFx0XHRcdHRoaXMudGludCA9IG51bGw7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMudGludCA9IHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IDB4MDBmZjAwLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmb3gnLCBlKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRhYmlsaXR5V29sZjoge1xuXHRcdFx0XHR0eXBlOiAnY29udGFpbmVyJyxcblx0XHRcdFx0eDogMzUwLFxuXHRcdFx0XHR5OiA0MDAsXG5cdFx0XHRcdGNoaWxkcmVuOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0XHRzcmM6IEFCSUxJVFlfV09MRixcblx0XHRcdFx0XHRzY2FsZTogMC41LFxuXHRcdFx0XHRcdGFscGhhOiAxLFxuXHRcdFx0XHRcdHR3ZWVuOiB7XG5cdFx0XHRcdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0XHRcdFx0cGhhc2VzOiBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHg6IDIwMCB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAnY3ViaWNvdXQnLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0dG86IHsgeTogMjAwLCBhbHBoYTogMC41IH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6ICdxdWFkcmF0aWNJbicsXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogMSxcblx0XHRcdFx0XHRcdFx0XHR0bzogeyB4OiAwLCBhbHBoYTogMSB9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAncXVhZHJhdGljT3V0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHRvOiB7IHk6IDAgfSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRmcHM6IGZwcygpLFxuXHRcdH0sXG5cdFx0c3RhcnQoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnc3RhcnQnKTtcblx0XHR9LFxuXHR9O1xufVxuIiwiY29uc3QgU1BFRUQgPSAxMDA7XG5cbmludGVyZmFjZSBVbml0IHtcblx0W2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRQcm9wZXJ0aWVzIHtcblx0bmFtZTogc3RyaW5nLFxuXHRoZWFsdGg6IG51bWJlcixcblx0aW1hZ2U6IHN0cmluZyxcblx0b25DbGljazogKGRhdGE6IFVuaXRQcm9wZXJ0aWVzKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pdChwcm9wczogVW5pdFByb3BlcnRpZXMpOiBVbml0IHtcblx0ZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XG5cdFx0cmV0dXJuIGAke3Byb3BzLm5hbWV9XFxuJHtNYXRoLnJvdW5kKHByb3BzLmhlYWx0aCAqIDEwMCl9JWA7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdjb250YWluZXInLFxuXHRcdHg6IDUwICsgTWF0aC5yYW5kb20oKSAqIDQwMCxcblx0XHR5OiAyMDAsXG5cdFx0cm90YXRpb246IDAsXG5cdFx0dXBkYXRlTW92ZSh0aW1lOiBudW1iZXIpIHtcblx0XHRcdHRoaXMueCArPSB0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCAqIHRpbWUgKiBTUEVFRDtcblx0XHRcdGlmICh0aGlzLnggPCA1MCkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCA9IDE7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMueCA+IDQwMCkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLmltYWdlLnNjYWxlWCA9IC0xO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25VcGRhdGUodGltZTogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZU1vdmUodGltZSk7XG5cdFx0fSxcblx0XHRjaGlsZHJlbjoge1xuXHRcdFx0dGV4dDoge1xuXHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHRcdHRleHQ6IGdldFRpdGxlKCksXG5cdFx0XHRcdHRleHRGb3JtYXQ6IHtcblx0XHRcdFx0XHRzaXplOiAxNSxcblx0XHRcdFx0XHRjb2xvcjogMHhmZmRkZGQsXG5cdFx0XHRcdFx0YWxpZ246ICdjZW50ZXInLFxuXHRcdFx0XHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRib3JkZXI6IDB4MDBmZjAwLFxuXHRcdFx0XHR5OiAtMzAsXG5cdFx0XHRcdGhlaWdodDogMzUsXG5cdFx0XHRcdHBpdm90WDogMC41LFxuXHRcdFx0XHRvblBvaW50ZXJEb3duOiAoKSA9PiB7XG5cdFx0XHRcdFx0cHJvcHMub25DbGljayhwcm9wcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uVXBkYXRlKCkge1xuXHRcdFx0XHRcdHRoaXMudGV4dCA9IGdldFRpdGxlKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0c3JjOiBwcm9wcy5pbWFnZSxcblx0XHRcdFx0c2NhbGVYOiBNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xLFxuXHRcdFx0XHRwaXZvdFg6IDAuNSxcblx0XHRcdFx0b25Qb2ludGVyRG93bjogKCkgPT4ge1xuXHRcdFx0XHRcdHByb3BzLm9uQ2xpY2socHJvcHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCJpbXBvcnQgeyBDb21wb25lbnQsIEVuZ2luZSwgYXBwbHlNb3VzZVN1cHBvcnRFeHRlbnNpb24gfSBmcm9tICdAZTJkL2VuZ2luZSc7XG5pbXBvcnQgeyBhcHBseVR3ZWVuRXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC90d2Vlbic7XG5pbXBvcnQgeyBhcHBseUNhbnZhc1RleHRFeHRlbnNpb24gfSBmcm9tICdAZTJkL3RleHQnO1xuaW1wb3J0IHsgYXBwbHlDYW52YXNJbWFnZUNvbG9yRXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC9pbWFnZSc7XG5pbXBvcnQgeyBhcHBseUNhbnZhc1NoYXBlRXh0ZW5zaW9uIH0gZnJvbSAnQGUyZC9zaGFwZSc7XG5pbXBvcnQgeyBDYW52YXNTdXBwb3J0IH0gZnJvbSAnQGUyZC9jYW52YXMtc3VwcG9ydCc7XG5pbXBvcnQgeyBJbWFnZVJlc291cmNlIH0gZnJvbSAnQGUyZC9yZXNvdXJjZXMnO1xuaW1wb3J0IEN1c3RvbVJlc291cmNlTWFuYWdlciBmcm9tICcuL2VuZ2luZS9yZXNvdXJjZXMnO1xuaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluJztcbmltcG9ydCBDdXN0b21TdXBwb3J0IGZyb20gJy4vZW5naW5lL3N1cHBvcnQnO1xuaW1wb3J0IHtcblx0QU5JTUFMSVNULCBBTklNQUxJU1RfSU1BR0UsIEFSQ0hFUiwgQVJDSEVSX0lNQUdFLCBURVNUX0NBTlZBUyxcbn0gZnJvbSAnLi9hc3NldHMnO1xuXG4vLyBhcHBsaWNhdGlvblxuY29uc3QgYXBwID0gbWFpbigpO1xuYXBwLnN0YXJ0KCk7XG5cbi8vIGJhc2ljIGVuZ2luZVxuY29uc3QgZW5naW5lID0gbmV3IEVuZ2luZShuZXcgQ2FudmFzU3VwcG9ydCgpKTtcbmFwcGx5Q2FudmFzSW1hZ2VDb2xvckV4dGVuc2lvbihlbmdpbmUuc3VwcG9ydCk7XG5hcHBseUNhbnZhc1RleHRFeHRlbnNpb24oZW5naW5lLnN1cHBvcnQpO1xuYXBwbHlDYW52YXNTaGFwZUV4dGVuc2lvbihlbmdpbmUuc3VwcG9ydCk7XG5hcHBseVR3ZWVuRXh0ZW5zaW9uKGVuZ2luZS5zdXBwb3J0KTtcbmFwcGx5TW91c2VTdXBwb3J0RXh0ZW5zaW9uKGVuZ2luZSk7XG5lbmdpbmUucm9vdCA9IGFwcCBhcyBhbnkgYXMgQ29tcG9uZW50O1xuZW5naW5lLnBsYXkoKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZW5naW5lLnN1cHBvcnQuZWxlbWVudCk7XG5cbi8vIGN1c3RvbSBlbmdpbmVcbmNvbnN0IGN1c3RvbUVuZ2luZSA9IG5ldyBFbmdpbmUobmV3IEN1c3RvbVN1cHBvcnQoKSk7XG5jdXN0b21FbmdpbmUuZnVsbHNjcmVlbiA9IGZhbHNlO1xuY3VzdG9tRW5naW5lLmhlaWdodCA9IDYwMDtcbmN1c3RvbUVuZ2luZS51cGRhdGVFbmFibGVkID0gZmFsc2U7XG5jdXN0b21FbmdpbmUucm9vdCA9IGVuZ2luZS5yb290O1xuY3VzdG9tRW5naW5lLnBsYXkoKTtcbmN1c3RvbUVuZ2luZS5zdXBwb3J0LmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuY3VzdG9tRW5naW5lLnN1cHBvcnQuZWxlbWVudC5zdHlsZS50b3AgPSAnMHB4JztcbmN1c3RvbUVuZ2luZS5zdXBwb3J0LmVsZW1lbnQuc3R5bGUubGVmdCA9ICc2MDBweCc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGN1c3RvbUVuZ2luZS5zdXBwb3J0LmVsZW1lbnQpO1xuXG4vLyBwYWdlXG5kb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpbiA9ICcwJztcbmRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZyA9ICcwJztcblxuLy8gdGVzdCBwYXVzZVxuc2V0VGltZW91dCgoKSA9PiBlbmdpbmUucGF1c2UoKSwgNTAwMCk7XG5zZXRUaW1lb3V0KCgpID0+IGVuZ2luZS5wbGF5KCksIDEwMDAwKTtcblxuLy8gc2V0IGN1c3RvbSByZXNvdXJjZVxuZW5naW5lLnN1cHBvcnQucmVzb3VyY2VzLmFkZChcblx0VEVTVF9DQU5WQVMsXG5cdHtcblx0XHRhc3NldDogVEVTVF9DQU5WQVMsXG5cdFx0aW1hZ2U6IGN1c3RvbUVuZ2luZS5zdXBwb3J0LmVsZW1lbnQsXG5cdFx0bG9hZGVkOiB0cnVlLFxuXHR9IGFzIEltYWdlUmVzb3VyY2UsXG4pO1xuY3VzdG9tRW5naW5lLnN1cHBvcnQucmVzb3VyY2VzLmFkZChcblx0VEVTVF9DQU5WQVMsXG5cdHtcblx0XHRhc3NldDogVEVTVF9DQU5WQVMsXG5cdFx0aW1hZ2U6IGVuZ2luZS5zdXBwb3J0LmVsZW1lbnQsXG5cdFx0bG9hZGVkOiB0cnVlLFxuXHR9IGFzIEltYWdlUmVzb3VyY2UsXG4pO1xuXG4vLyBjdXN0b20gcmVzb3VyY2UgcmVzb2x2ZXJcbmNvbnN0IHJlc291cmNlTWFuYWdlciA9IG5ldyBDdXN0b21SZXNvdXJjZU1hbmFnZXIoKTtcbnJlc291cmNlTWFuYWdlci5hbGlhc2VzLnNldChBUkNIRVIucmVwbGFjZSgnaWQ6JywgJycpLCBBUkNIRVJfSU1BR0UpO1xucmVzb3VyY2VNYW5hZ2VyLmFsaWFzZXMuc2V0KEFOSU1BTElTVC5yZXBsYWNlKCdpZDonLCAnJyksIEFOSU1BTElTVF9JTUFHRSk7XG5lbmdpbmUuc3VwcG9ydC5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvdXJjZU1hbmFnZXIucmVzb2x2ZSk7XG5jdXN0b21FbmdpbmUuc3VwcG9ydC5yZXNvdXJjZXMucmVzb2x2ZXJzLmFkZChyZXNvdXJjZU1hbmFnZXIucmVzb2x2ZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9